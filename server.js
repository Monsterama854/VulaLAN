const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs'); // NEU: Dateisystem-Modul
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);

// 1. Webserver: Liefert die HTML-Seite aus
app.use(express.static(path.join(__dirname, 'public')));
// NEU: Gibt die JavaScript-Bibliotheken frei!
app.use('/libs', express.static(path.join(__dirname, 'libs')));

// --- NEU: FILE-HOSTING LOGIK ---
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir); // Erstellt den Upload-Ordner

// --- NEU: SERVER-MANAGED GLOBAL CHAT ARCHIV ---
const globalHistoryFile = path.join(uploadsDir, 'global_history.json');
let globalChatHistory = [];
try {
    if (fs.existsSync(globalHistoryFile)) {
        globalChatHistory = JSON.parse(fs.readFileSync(globalHistoryFile));
    }
} catch(e) {}

// --- AUTO-CLEANUP (Die automatische Müllabfuhr) ---
const MAX_AGE_DAYS = 14; // Hier einstellen: Nach wie vielen Tagen soll gelöscht werden?
const CLEANUP_INTERVAL = 24 * 60 * 60 * 1000; // Einmal pro Tag (in Millisekunden) prüfen

function cleanupOldUploads() {
    const now = Date.now();
    const maxAgeMs = MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

    fs.readdir(uploadsDir, (err, files) => {
        if (err) return console.error("Cleanup-Fehler: Ordner nicht lesbar", err);
        
        files.forEach(file => {
            const filePath = path.join(uploadsDir, file);
            fs.stat(filePath, (err, stat) => {
                if (err) return;
                
                // Wenn die Datei älter als das Limit ist -> gnadenlos löschen!
                if (now - stat.mtimeMs > maxAgeMs) {
                    fs.unlink(filePath, err => {
                        if (!err) console.log(`??? Auto-Cleanup: Veraltete Datei gelöscht -> ${file}`);
                    });
                }
            });
        });
    });
}

// Beim Serverstart direkt einmal aufräumen, danach jeden Tag im Hintergrund
cleanupOldUploads();
setInterval(cleanupOldUploads, CLEANUP_INTERVAL);
// --- ENDE AUTO-CLEANUP ---


app.use('/downloads', express.static(uploadsDir)); // Macht die Dateien herunterladbar
app.use(express.raw({ type: 'application/octet-stream', limit: '10mb' })); // Erlaubt rohe Datenblöcke

app.post('/upload-chunk', (req, res) => {
    try {
        const fileName = decodeURIComponent(req.headers['x-file-name']);
        const fileId = req.headers['x-file-id'];
        const chunkIndex = parseInt(req.headers['x-chunk-index']);
        const totalChunks = parseInt(req.headers['x-total-chunks']);

        // Mache den Dateinamen sicher für Linux (Leerzeichen/Sonderzeichen filtern)
        const safeName = fileId + '_' + fileName.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        const filePath = path.join(uploadsDir, safeName);

        // Block auf die Festplatte schreiben (append = hinten dranhängen)
        fs.appendFileSync(filePath, req.body);

        if (chunkIndex === totalChunks - 1) {
            // Letzter Block -> Gib den Download-Link zurück!
            res.json({ status: 'complete', url: `/downloads/${safeName}` });
        } else {
            res.json({ status: 'ok' });
        }
    } catch (e) {
        console.error("Upload-Fehler:", e);
        res.status(500).json({ status: 'error' });
    }
});
// --- ENDE FILE-HOSTING ---

// 2. WebSocket-Router
// FIX: noServer: true ist extrem wichtig, damit PeerJS Platz hat!
const wss = new WebSocket.Server({ noServer: true }); 
const connectedClients = new Map();

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);

            // --- NEU: GLOBAL CHAT WÄCHTER ---
            if (data.type === "global-chat") {
                globalChatHistory.push(data);
                if (globalChatHistory.length > 1000) globalChatHistory.shift(); // Max. 1000 Nachrichten speichern
                fs.writeFileSync(globalHistoryFile, JSON.stringify(globalChatHistory));

                // An alle anderen verbundenen Clients weiterleiten
                for (let [clientWs, clientIp] of connectedClients.entries()) {
                    if (clientIp !== data.fromIp && clientWs.readyState === WebSocket.OPEN) {
                        clientWs.send(message.toString());
                    }
                }
                return; // Stoppt hier, damit es nicht als normale P2P-Nachricht geroutet wird!
            }

            if (data.type === "req-global-history") {
                ws.send(JSON.stringify({ type: "res-global-history", history: globalChatHistory }));
                return;
            }

            if (data.fromIp) {
                for (let [clientWs, clientIp] of connectedClients.entries()) {
                    if (clientIp === data.fromIp && clientWs !== ws) {
                        try { clientWs.close(); } catch(e) {}
                        connectedClients.delete(clientWs);
                    }
                }
                if (connectedClients.get(ws) !== data.fromIp) {
                    connectedClients.set(ws, data.fromIp);
                    const allIps = Array.from(connectedClients.values());
                    for (let clientWs of connectedClients.keys()) {
                        if (clientWs.readyState === WebSocket.OPEN) {
                            clientWs.send(JSON.stringify({ type: 'directory-sync', ips: allIps }));
                        }
                    }
                }
            }
            if (data.targetIp) {
                for (let [clientWs, clientIp] of connectedClients.entries()) {
                    if (clientIp === data.targetIp && clientWs.readyState === WebSocket.OPEN) {
                        clientWs.send(message.toString());
                    }
                }
            }
        } catch(e) { console.error("Routing-Fehler:", e); }
    });

    ws.on('close', () => {
        connectedClients.delete(ws);
        const allIps = Array.from(connectedClients.values());
        for (let clientWs of connectedClients.keys()) {
            if (clientWs.readyState === WebSocket.OPEN) {
                clientWs.send(JSON.stringify({ type: 'directory-sync', ips: allIps }));
            }
        }
    });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`VulaLAN server running on Port ${PORT}`);
});

// --- NEU: PEERJS FÜR DEN UBUNTU SERVER ---
const peerServer = ExpressPeerServer(server, { debug: true });
app.use('/peerjs', peerServer);

// --- DER VERKEHRSPOLIZIST FÜR UBUNTU ---
const peerJsUpgradeHandler = server.listeners('upgrade').pop();
server.removeAllListeners('upgrade');

server.on('upgrade', (request, socket, head) => {
    if (request.url.startsWith('/chat')) {
        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit('connection', ws, request);
        });
    } else if (request.url.startsWith('/peerjs') || request.url === '/') {
        if (peerJsUpgradeHandler) peerJsUpgradeHandler(request, socket, head);
    } else {
        socket.destroy();
    }
});