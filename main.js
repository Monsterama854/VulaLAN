const {
  app,
  BrowserWindow,
  desktopCapturer,
  session,
  ipcMain,
  shell,
  dialog,
  safeStorage
} = require("electron");
const path = require("path");
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const fs = require("fs");
const { ExpressPeerServer } = require("peer");

// NEU: Die absolute Brechstange. Zwingt Electron, unser lokales SSL-Zertifikat auch für WebSockets zu akzeptieren!
// SECURITY NOTE: This is strictly required to allow WebRTC / WebSocket connections 
// over local network IPs without triggering self-signed certificate blocks in Chromium.
app.commandLine.appendSwitch("ignore-certificate-errors");

let mainWindow;
let localServer = null; 
let currentServerPass = null; 
let autoApproveLargeFiles = false; 
const failedLogins = new Map(); 

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 850,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false, 
      contextIsolation: true, 
      preload: path.join(__dirname, "preload.js") 
    },
  });
  mainWindow.loadFile(path.join(__dirname, "public", "index.html"));
}

ipcMain.handle('get-network-ips', () => {
    const os = require('os');
    const interfaces = os.networkInterfaces();
    let availableInterfaces = [];
    
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal && !alias.address.startsWith('169.254.')) {
                availableInterfaces.push({ name: devName, ip: alias.address });
            }
        }
    }
    return availableInterfaces;
});

app.whenReady().then(() => {
  session.defaultSession.clearCache();
  session.defaultSession.clearHostResolverCache();

  createWindow();

  session.defaultSession.setDisplayMediaRequestHandler((request, callback) => {
    desktopCapturer
      .getSources({ types: ["screen"] })
      .then((sources) => {
        // FIX: Wir sagen Electron, dass es den Windows-Systemsound ("loopback") abgreifen soll!
        callback({ video: sources[0], audio: 'loopback' });
      })
      .catch((err) => {
        console.error("Screenshare Fehler:", err);
        callback();
      });
  });
});

app.on(
  "certificate-error",
  (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(true);
  },
);

// --- DIE ABSOLUTE BRECHSTANGE BEIM SCHLIESSEN ---
app.on("window-all-closed", () => {
  const { exec } = require("child_process");
  
  // 1. Zwingt den Cloudflare-Tunnel, sich sofort zu beenden
  exec("taskkill /f /t /im cloudflared.exe", (err) => {
      // 2. Egal ob der Tunnel lief oder nicht, wir beenden Electron jetzt hart!
      if (process.platform !== "darwin") {
          app.quit();
          process.exit(0); // Zerstört rigoros alle hängenden Node.js Hintergrund-Server
      }
  });
});

// =================================================================
// DIE MEGA-APP MAGIE: DER VERSTECKTE LOKALE SERVER (HOST-MODUS)
// =================================================================
ipcMain.on("start-local-server", (event, pin) => {
  currentServerPass = pin; // <--- FIX: Die neue PIN IMMER sofort übernehmen!
  if (localServer) return;

  const expressApp = express();

  // --- ANTI-SPAM PANZER (RATE LIMITER) ---
  const requestCounts = new Map();
  expressApp.use((req, res, next) => {
      const ip = req.ip;
      const now = Date.now();
      
      if (!requestCounts.has(ip)) {
          requestCounts.set(ip, { count: 1, resetTime: now + 60000 }); 
      } else {
          const data = requestCounts.get(ip);
          if (now > data.resetTime) {
              data.count = 1; 
              data.resetTime = now + 60000;
          } else {
              data.count++;
              if (data.count > 150000) {
                  return res.status(429).json({ status: "error", msg: "Spam-Schutz aktiv! Zu viele Anfragen." });
              }
          }
      }
      next();
  });

  localServer = http.createServer(expressApp);

  const uploadsDir = path.join(app.getPath("userData"), "uploads");
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

  // --- NEU: SERVER-MANAGED GLOBAL CHAT ARCHIV ---
  const globalHistoryFile = path.join(uploadsDir, 'global_history.json');
  let globalChatHistory = [];
  try {
      if (fs.existsSync(globalHistoryFile)) {
          globalChatHistory = JSON.parse(fs.readFileSync(globalHistoryFile));
      }
  } catch(e) {}

  const getFolderSize = () => {
    try {
      return fs
        .readdirSync(uploadsDir)
        .reduce(
          (acc, file) => acc + fs.statSync(path.join(uploadsDir, file)).size,
          0,
        );
    } catch (e) {
      return 0;
    }
  };

  expressApp.use("/downloads", express.static(uploadsDir, {
      setHeaders: (res, path) => {
          if (path.endsWith('.html') || path.endsWith('.htm') || path.endsWith('.js') || path.endsWith('.svg')) {
              res.set('Content-Disposition', 'attachment');
              res.set('Content-Type', 'application/octet-stream');
          }
      }
  }));

  expressApp.use(
    express.raw({ type: "application/octet-stream", limit: "10mb" }),
  );

  expressApp.use(express.static(path.join(__dirname, "public")));

  //expressApp.use("/libs", express.static(path.join(__dirname, "libs")));
  expressApp.use("/libs", express.static(path.join(__dirname, "public", "libs")));

  const approvedUploads = new Set();
  let isPromptOpen = false;

  expressApp.post("/upload-chunk", async (req, res) => {
    // 1. PIN-Check
    if (
      currentServerPass &&
      req.headers["x-server-pass"] !== currentServerPass
    ) {
      return res.status(401).json({ status: "error", msg: "Unauthorized" });
    }

    try {
      const fileName = decodeURIComponent(req.headers["x-file-name"]);
      const fileId = req.headers["x-file-id"];
      const chunkIndex = parseInt(req.headers["x-chunk-index"]);
      const totalChunks = parseInt(req.headers["x-total-chunks"]);

      const totalSize = parseInt(req.headers["x-file-size"] || "0");
      const isSmallFile = totalSize <= 15 * 1024 * 1024; 
      
      // NEU: Sprache auslesen (geschickt vom Frontend)
      const reqLang = req.headers["x-lang"] || 'de';

      // 2. HOST-BESTÄTIGUNG ODER AUTO-APPROVE
      if (chunkIndex === 0 && !approvedUploads.has(fileId)) {
        if (isSmallFile) {
          if (getFolderSize() + totalSize > 5 * 1024 * 1024 * 1024) {
            return res
              .status(507)
              .json({
                status: "error",
                msg: reqLang === 'de' ? "Server-Festplatte voll! (5GB Limit)" : "Server storage full! (5GB limit)",
              });
          }
          approvedUploads.add(fileId); 
        } else if (autoApproveLargeFiles) {
          approvedUploads.add(fileId);
        } else {
          if (isPromptOpen) {
            return res
              .status(429)
              .json({ status: "error", msg: reqLang === 'de' ? "Host ist beschäftigt." : "Host is busy." });
          }

          isPromptOpen = true;
          const estimatedMB = Math.round(totalSize / (1024 * 1024));

          // NEU: Zweisprachiger Dialog!
          const titleStr = reqLang === 'de' ? "Eingehender großer Datei-Upload" : "Incoming Large File Upload";
          const msgStr = reqLang === 'de' 
            ? `Jemand möchte eine Datei auf deinen Server laden:\n\nName: ${fileName}\nGröße: ${estimatedMB} MB\n\nDa sie größer als 15 MB ist: Upload auf deine Festplatte zulassen?`
            : `Someone wants to upload a file to your server:\n\nName: ${fileName}\nSize: ${estimatedMB} MB\n\nSince it is larger than 15 MB: Allow upload to your hard drive?`;
          const btnAllow = reqLang === 'de' ? "Erlauben" : "Allow";
          const btnDecline = reqLang === 'de' ? "Ablehnen" : "Decline";

          const choice = await dialog.showMessageBox({
            type: "question",
            buttons: [btnAllow, btnDecline],
            title: titleStr,
            message: msgStr,
            defaultId: 0,
            cancelId: 1,
          });
          
          isPromptOpen = false;

          if (choice.response === 0) {
            approvedUploads.add(fileId);
          } else {
            return res
              .status(403)
              .json({
                status: "error",
                msg: reqLang === 'de' ? "Der Host hat diese große Datei abgelehnt." : "The host declined this large file.",
              });
          }
        }
      }

      // 3. Sicherheitscheck
      if (!approvedUploads.has(fileId)) {
        return res
          .status(403)
          .json({ status: "error", msg: reqLang === 'de' ? "Upload wurde abgelehnt." : "Upload was rejected." });
      }

      // 4. DATEI SPEICHERN
      const safeName = fileId + "_" + fileName.replace(/[^a-zA-Z0-9.\-_]/g, "_");
      const filePath = path.join(uploadsDir, safeName);

      fs.appendFileSync(filePath, req.body);

      // 5. ANTWORTEN & AUFRÄUMEN
      if (chunkIndex === totalChunks - 1) {
        approvedUploads.delete(fileId);
        res.json({ status: "complete", url: `/downloads/${safeName}` });
      } else {
        res.json({ status: "ok" });
      }
    } catch (e) {
      res.status(500).json({ status: "error" });
    }
  });

  const wss = new WebSocket.Server({ noServer: true });

  const connectedClients = new Map();

  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      try {
        const data = JSON.parse(message);

        // --- NEU: GLOBAL CHAT WÄCHTER ---
        if (data.type === "global-chat") {
            globalChatHistory.push(data);
            if (globalChatHistory.length > 1000) globalChatHistory.shift(); 
            fs.writeFileSync(globalHistoryFile, JSON.stringify(globalChatHistory));

            // An alle weiterleiten
            for (let [clientWs, clientIp] of connectedClients.entries()) {
                if (clientIp !== data.fromIp && clientWs.readyState === WebSocket.OPEN) {
                    clientWs.send(message.toString());
                }
            }
            return;
        }

        if (data.type === "req-global-history") {
            ws.send(JSON.stringify({ type: "res-global-history", history: globalChatHistory }));
            return;
        }

        if (data.fromIp) {
          for (let [clientWs, clientIp] of connectedClients.entries()) {
            if (clientIp === data.fromIp && clientWs !== ws) {
              try {
                clientWs.close();
              } catch (e) {}
              connectedClients.delete(clientWs);
            }
          }
          if (connectedClients.get(ws) !== data.fromIp) {
            connectedClients.set(ws, data.fromIp);
            const allIps = Array.from(connectedClients.values());
            for (let clientWs of connectedClients.keys()) {
              if (clientWs.readyState === WebSocket.OPEN)
                clientWs.send(
                  JSON.stringify({ type: "directory-sync", ips: allIps }),
                );
            }
          }
        }

        if (data.targetIp) {
          for (let [clientWs, clientIp] of connectedClients.entries()) {
            if (
              clientIp === data.targetIp &&
              clientWs.readyState === WebSocket.OPEN
            )
              clientWs.send(message.toString());
          }
        }
      } catch (e) {}
    });

    ws.on("close", () => {
      connectedClients.delete(ws);
      const allIps = Array.from(connectedClients.values());
      for (let clientWs of connectedClients.keys()) {
        if (clientWs.readyState === WebSocket.OPEN)
          clientWs.send(
            JSON.stringify({ type: "directory-sync", ips: allIps }),
          );
      }
    });
  });

  localServer.listen(3000, "0.0.0.0", () => {
    console.log(
      "Host mode active: VulaLAN server running on Port 3000 (HTTP(S) mode)",
    );
  });

  const peerServer = ExpressPeerServer(localServer, { debug: true });
  expressApp.use("/peerjs", peerServer);

  const peerJsUpgradeHandler = localServer.listeners("upgrade").pop();
  localServer.removeAllListeners("upgrade");

  localServer.on("upgrade", (request, socket, head) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const clientIp = socket.remoteAddress;
    const now = Date.now();

    if (request.url.startsWith("/chat")) {
      // 1. Prüfen, ob ein falscher PIN gesendet wurde
      const hasWrongPin = currentServerPass && url.searchParams.get("pin") !== currentServerPass;

      // 2. Abgelaufene Sperren aus dem Gedächtnis löschen
      if (failedLogins.has(clientIp)) {
        if (now - failedLogins.get(clientIp).time > 5 * 60000) {
          failedLogins.delete(clientIp);
        } else if (failedLogins.get(clientIp).count >= 5) {
          // IP ist eigentlich gesperrt...
          // ABER: Wenn der PIN jetzt exakt stimmt, war es nur ein Reconnect-Sturm. Wir lassen ihn rein!
          if (!hasWrongPin) {
            failedLogins.delete(clientIp);
          } else {
            socket.destroy();
            return;
          }
        }
      }

      // 3. Wenn der PIN falsch ist, Fehlschlag hochzählen und kicken
      if (hasWrongPin) {
        const attempts = failedLogins.has(clientIp) ? failedLogins.get(clientIp).count : 0;
        failedLogins.set(clientIp, { count: attempts + 1, time: now });
        socket.destroy();
        return;
      }

      // PIN war richtig! Sicherheits-Counter für diese IP zurücksetzen
      failedLogins.delete(clientIp);

      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });

    } else if (request.url.startsWith("/peerjs") || request.url === "/") {
      if (peerJsUpgradeHandler) peerJsUpgradeHandler(request, socket, head);
    } else {
      socket.destroy();
    }
  });





});

ipcMain.on("toggle-auto-save-large", (event, isEnabled) => {
  autoApproveLargeFiles = isEnabled;
  console.log("Auto-Save für große Dateien ist jetzt:", isEnabled);
});

ipcMain.on("clear-host-folder", () => {
  const uploadsDir = path.join(app.getPath("userData"), "uploads");
  if (fs.existsSync(uploadsDir)) {
    fs.rmSync(uploadsDir, { recursive: true, force: true });
    fs.mkdirSync(uploadsDir);
  }
});

ipcMain.on("open-host-folder", () => {
  const uploadsDir = path.join(app.getPath("userData"), "uploads");
  shell.openPath(uploadsDir);
});

let tunnelAnnounced = false; 

ipcMain.on("start-tunnel", (event) => {
  const { spawn } = require("child_process");
  const exePath = path.join(app.getPath("userData"), "cloudflared.exe");

  const psCommand = `
        if (!(Test-Path "${exePath}")) {
            Invoke-WebRequest -Uri "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe" -OutFile "${exePath}"
        }
        & "${exePath}" tunnel --url http://localhost:3000
    `;

  const tunnelProcess = spawn("powershell.exe", ["-Command", psCommand]);
  tunnelAnnounced = false; // Reset, falls man den Tunnel mehrmals startet

  tunnelProcess.stderr.on("data", (data) => {
    const output = data.toString();
    const match = output.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);
    
    if (match && !tunnelAnnounced) {
      tunnelAnnounced = true; 
      event.sender.send("tunnel-ready", match[0]); 
    }
  });
});

app.on("before-quit", () => {
  const { exec } = require("child_process");
  exec("taskkill /f /t /im cloudflared.exe");
});

ipcMain.on('fix-firewall', (event) => {
    const { exec } = require('child_process');

    const script = `netsh advfirewall firewall delete rule name="VulaLAN Ports"; netsh advfirewall firewall add rule name="VulaLAN Ports" dir=in action=allow protocol=TCP localport=8181,3000`;
    const encodedCmd = Buffer.from(script, 'utf16le').toString('base64');
    const cmd = `powershell.exe -NoProfile -Command "Start-Process powershell -ArgumentList '-NoProfile -WindowStyle Hidden -EncodedCommand ${encodedCmd}' -Verb RunAs"`;

    exec(cmd, (error) => {
        if (error) {
            event.sender.send('firewall-result', false);
        } else {
            event.sender.send('firewall-result', true);
        }
    });
});

ipcMain.on('scan-lan', (event, baseIp) => {
    const net = require('net');
    for (let i = 2; i <= 254; i++) {
        const targetIp = baseIp + i;
        const socket = new net.Socket();
        socket.setTimeout(800);
        socket.on('connect', () => {
            socket.destroy();
            event.sender.send('scan-result', targetIp);
        });
        socket.on('timeout', () => socket.destroy());
        socket.on('error', () => socket.destroy());
        socket.connect(8181, targetIp);
    }
});

const p2pSockets = {};
let isP2PServerRunning = false; // NEU: Der Wächter-Schalter

ipcMain.on('start-p2p-server', (event) => {
    // Wenn der Server vom vorigen Mal noch läuft (z.B. nach UI Reload), sofort abbrechen!
    if (isP2PServerRunning) return;

    const WebSocketServer = require('ws').Server;
    try {
        const wss = new WebSocketServer({ host: '0.0.0.0', port: 8181 });

        // NEU: Fehler sauber abfangen, damit Electron bei Port-Kollisionen NICHT abstürzt!
        wss.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log("P2P-Port 8181 ist bereits belegt (läuft im Hintergrund weiter).");
                isP2PServerRunning = true;
            } else {
                console.error("P2P Server Fehler:", err);
            }
        });

        wss.on('listening', () => {
            isP2PServerRunning = true;
        });

        wss.on('connection', (ws, req) => {
            let remoteIp = req.socket.remoteAddress;
            if (remoteIp.includes('::ffff:')) remoteIp = remoteIp.split('::ffff:')[1];
            p2pSockets[remoteIp] = ws;
            
            ws.on('message', (msg) => {
                event.sender.send('p2p-message', msg.toString());
            });
            ws.on('close', () => { delete p2pSockets[remoteIp]; });
        });
    } catch(e) { console.error("Port 8181 evtl. belegt:", e); }
});

ipcMain.on('send-p2p-message', (event, ip, data) => {
    if (p2pSockets[ip] && p2pSockets[ip].readyState === WebSocket.OPEN) {
        p2pSockets[ip].send(data);
    }
});
// =================================================================
// SECURE E2EE KEY STORAGE (Electron)
// =================================================================
ipcMain.handle("save-private-key", (event, keyDataStr) => {
    try {
        if (!safeStorage.isEncryptionAvailable()) return false;
        
        const encryptedBuffer = safeStorage.encryptString(keyDataStr);
        const keyPath = path.join(app.getPath("userData"), "vula_identity.enc");
        fs.writeFileSync(keyPath, encryptedBuffer);
        return true;
    } catch (e) {
        console.error("Fehler beim Speichern des Schlüssels:", e);
        return false;
    }
});

ipcMain.handle("load-private-key", () => {
    try {
        const keyPath = path.join(app.getPath("userData"), "vula_identity.enc");
        if (!fs.existsSync(keyPath) || !safeStorage.isEncryptionAvailable()) return null;
        
        const encryptedBuffer = fs.readFileSync(keyPath);
        return safeStorage.decryptString(encryptedBuffer);
    } catch (e) {
        console.error("Fehler beim Laden des Schlüssels:", e);
        return null;
    }
});