// --- DIE NEUE WEBRTC MESH-ENGINE ---
// --- DIE NEUE PEERJS MESH-ENGINE ---
let localStream = null;
let screenStream = null;
let activeCallId = null;
let activeCallType = null;

let peer = null;
let p2pVoicePC = null; // Dedizierte Verbindung für den reinen P2P-Modus
let peerConnections = {}; // Ersetzt das alte rtcPeers!

// --- DIE DYNAMISCHE STUN-WEICHE ---
function getIceServers() {
  // Liest den Schalter aus (Standard: AN, damit es erst mal geht)
  const useStun = localStorage.getItem("allow_stun") !== "false";
  if (useStun) {
    return [
      { urls: "stun:stun.cloudflare.com:3478" },
      { urls: "stun:stun.services.mozilla.com:3478" },
    ];
  }
  return []; // Komplett leeres Array -> 100% Offline-Modus, keine Pings ins Internet!
}

// 3. Zeichnet Audio/Video ins HTML
// 3. Zeichnet Audio/Video ins HTML
function renderRemoteStream(partnerIp, stream) {
  if (document.getElementById(`media-${partnerIp}`)) {
    console.warn(
      `⚠️ [Render] Element media-${partnerIp} existiert bereits. Überspringe.`,
    );
    return;
  }
  console.log(`🎥 [Render] Erstelle neues HTML-Element für: ${partnerIp}`);

  const isVideo = stream.getVideoTracks().length > 0;
  const mediaEl = document.createElement(isVideo ? "video" : "audio");
  mediaEl.id = `media-${partnerIp}`;
  mediaEl.srcObject = stream;
  mediaEl.autoplay = true;

  // FIX 1: Wir warten nicht mehr auf Metadaten! Wir feuern sofort den Play-Befehl!
  // NEU: Loggt, ob der Browser das Audio/Video erfolgreich abspielt oder blockiert!
  mediaEl
    .play()
    .then(() => {
      console.log(
        `▶️ [Render] Playback ERFOLGREICH für: ${mediaEl.id} (Video: ${isVideo})`,
      );
    })
    .catch((e) => {
      console.error(`❌ [Render] Auto-play GEBLOCKT für ${mediaEl.id}:`, e);
    });

  // Fallback für alte Browser lassen wir trotzdem drin
  mediaEl.onloadedmetadata = () => {
    mediaEl.play().catch((e) => console.warn("Auto-play geblockt:", e));
  };

  const savedSpeaker = localStorage.getItem("selectedSpeaker");
  if (savedSpeaker && typeof mediaEl.setSinkId === "function") {
    mediaEl.addEventListener(
      "playing",
      async () => {
        try {
          await mediaEl.setSinkId(savedSpeaker);
        } catch (err) {
          if (err.name !== "AbortError")
            console.warn("Lautsprecher Fehler beim Join:", err);
        }
      },
      { once: true },
    );
  }

  if (isVideo) {
    mediaEl.style.flex = "1 1 45%";
    mediaEl.style.minWidth = "300px";
    mediaEl.style.maxHeight = "50vh";
    mediaEl.style.objectFit = "contain";
    mediaEl.style.borderRadius = "8px";
    mediaEl.title = "Doppelklick für Vollbild";
    mediaEl.ondblclick = () => {
      if (!document.fullscreenElement)
        mediaEl.requestFullscreen().catch(() => {});
      else document.exitFullscreen();
    };

    document.getElementById("call-grid-container").appendChild(mediaEl);
    document.getElementById("call-grid-container").style.display = "flex";
  } else {
    document.getElementById("audio-container").appendChild(mediaEl);
  }
}

// --- UI UPDATE FÜR LAUFENDE CALLS ---
// --- UI UPDATE FÜR LAUFENDE CALLS (OHNE AUTO-KICK!) ---
window.updateCallUI = function () {
  if (!activeCallId) return;
  const avatarList = document.getElementById("call-avatar-list");
  if (!avatarList) return;
  avatarList.innerHTML = "";

  let membersToShow = [];
  if (activeCallType === "dm") membersToShow = [myIp, activeCallId];
  else if (activeCallType === "group") {
    const grp = groups.find((g) => g.id === activeCallId);
    if (grp) membersToShow = grp.members;
  }

  membersToShow.forEach((mIp) => {
    let c = contacts.find((contact) => contact.ip === mIp) || {
      name: mIp,
      avatar: defaultAvatar,
      ip: mIp,
    };
    if (mIp === myIp)
      c = {
        name: myName + " (Ich)",
        avatar: localStorage.getItem("myAvatar") || defaultAvatar,
        ip: myIp,
      };

    let isConnected =
      mIp === myIp ||
      !!peerConnections[mIp] ||
      (currentMode === "p2p" && p2pVoicePC && mIp === activeCallId);

    avatarList.innerHTML += `
                        <img src="${getAvatar(c.avatar, c.name || c.ip)}"
                             title="${c.name} ${isConnected ? "(Im Call)" : "(Nicht beigetreten)"}"
                             style="width: 28px; height: 28px; border-radius: 50%; object-fit: cover; border: 2px solid ${isConnected ? "#3ba55d" : "#40444b"}; opacity: ${isConnected ? "1" : "0.4"}; transition: 0.3s; margin-right: 5px; z-index: ${isConnected ? 10 : 1};">
                    `;
  });

  // WICHTIG: Falls von einem vorherigen Call noch ein alter Timer lief, killen wir den sicherheitshalber noch ein letztes Mal
  if (window.aloneTimeout) {
    clearTimeout(window.aloneTimeout);
    window.aloneTimeout = null;
  }
};

// --- DIE NEUE DISCORD-RAUM LOGIK (JETZT EIGENSTÄNDIG!) ---
window.joinVoiceSession = async function (chatId) {
  await initLocalMedia(false);
  activeCallId = chatId;
  activeCallType = chatId.startsWith("grp_") ? "group" : "dm";

  document.getElementById("active-call-banner").style.display = "flex";
  document.getElementById("active-call-name").innerText =
    activeCallType === "group"
      ? groups.find((g) => g.id === chatId)?.name
      : contacts.find((c) => c.ip === chatId)?.name || chatId;

  document.getElementById("call-btn").style.display = "none";
  document.getElementById("screen-btn").style.display = "block";
  document.getElementById("hangup-btn").style.display = "block";
  updateCallUI();

  const signalData = {
    type: "session-started",
    chatId: chatId,
    fromIp: myIp,
    name: myName,
  };
  const announceData = {
    type: "mesh-announce",
    groupId: chatId,
    fromIp: myIp,
  };

  if (activeCallType === "group") {
    const grp = groups.find((g) => g.id === chatId);
    if (grp)
      grp.members.forEach((m) => {
        if (m !== myIp) {
          sendSignal(m, signalData);
          sendSignal(m, announceData);
        }
      });
  } else {
    sendSignal(chatId, signalData);
    sendSignal(chatId, announceData);
  }
  appendChatUI(
    "System",
    "System",
    `Voice-Session beigetreten.`,
    null,
    null,
    Date.now(),
    0,
  );
};

// 1. Initialisiert den automatischen Verbindungs-Aufbau
window.initPeerJS = function () {
  if (peer) peer.destroy();

  // FIX: PeerJS HASST Punkte in der ID! Wir machen aus 192.168.1.5 -> 192-168-1-5
  const url = new URL(apiBaseUrl || "http://localhost:3000");
  const safePeerId = myIp.replace(/\./g, "-");
  const isSecure = url.protocol === "https:";

  peer = new Peer(safePeerId, {
    host: url.hostname,
    // FIX: Cloudflare nutzt Port 443! Wenn url.port leer ist, nutzen wir die dynamische Weiche.
    port: url.port ? url.port : isSecure ? 443 : 3000,
    path: "/peerjs",
    secure: isSecure,
    debug: 1,
    config: { iceServers: getIceServers() },
  });

  // --- NEU: DER AUTO-RECONNECT WÄCHTER (ENTZERRT) ---
  peer.on("disconnected", () => {
    console.warn(
      "PeerJS Signaling getrennt. Versuche Auto-Reconnect in 2 Sekunden...",
    );
    // FIX: Dem Server Zeit geben, die alte ID aus dem RAM zu werfen!
    setTimeout(() => {
      if (peer && !peer.destroyed && peer.disconnected) {
        peer.reconnect();
      }
    }, 2000);
  });

  peer.on("error", (err) => {
    // FIX: Wenn der Server unsere ID festhält, killen wir den Peer und starten komplett neu!
    if (err.type === "unavailable-id") {
      console.error(
        "PeerJS: ID ist blockiert. Mache einen harten Kaltstart...",
      );
      if (peer) peer.destroy();
      setTimeout(window.initPeerJS, 1500);
      return;
    }

    if (err.type === "network" || err.type === "server-error") {
      console.warn("PeerJS Netzwerk-Ruckler abgefangen:", err.type);
    } else {
      console.error("PeerJS Error:", err);
    }
  });
  // --- ENDE RECONNECT WÄCHTER ---

  // WENN JEMAND UNS ANRUFT:
  peer.on("call", async (call) => {
    await initLocalMedia(false);
    call.answer(localStream);

    // FIX: Die ID wieder in eine echte IP mit Punkten zurückverwandeln fürs UI!
    const realIp = call.peer.replace(/-/g, ".");

    call.on("stream", (remoteStream) => {
      renderRemoteStream(realIp, remoteStream);
    });
    call.on("close", () => {
      const media = document.getElementById(`media-${realIp}`);
      if (media) media.remove();
      delete peerConnections[realIp];
      updateCallUI();
    });

    peerConnections[realIp] = call;
    updateCallUI();
  });
};

// 2. Ruft einen bestimmten Partner an
window.startPeerCall = function (targetIp) {
  // FIX: Ziel-IP ebenfalls für PeerJS maskieren!
  const safeTargetId = targetIp.replace(/\./g, "-");

  const call = peer.call(safeTargetId, localStream);
  call.on("stream", (remoteStream) => {
    renderRemoteStream(targetIp, remoteStream); // UI behält die echte IP
  });
  call.on("close", () => {
    const media = document.getElementById(`media-${targetIp}`);
    if (media) media.remove();
    delete peerConnections[targetIp];
    updateCallUI();
  });
  peerConnections[targetIp] = call;
  updateCallUI();
};

// Holt das Mikrofon (Unverändert)
// --- NEU: AUDIO ROUTING (DAS DIGITALE MISCHPULT) ---
window.rawLocalStream = null;
let micAudioContext = null;
let micGainNode = null;
let micDestination = null;
let micSourceNode = null; // <--- DER LEBENSRETTER! Dies rettet das Kabel vor dem Browser-Mülleimer.

// Wird von ui.js getriggert, wenn der Slider bewegt wird
window.updateMicVolume = function (val) {
  if (micGainNode) micGainNode.gain.value = parseFloat(val);
};

async function initLocalMedia(enableScreen = false) {
  // Zwingt das Handy, wach zu bleiben!
  if (window.Capacitor) Capacitor.Plugins.KeepAwake.keepAwake();

  if (!localStream) {
    const savedMicId =
      localStorage.getItem("selectedMic") ||
      document.getElementById("mic-select").value;

    const useEcho = localStorage.getItem("audio_echo") !== "false";
    const useNoise = localStorage.getItem("audio_noise") !== "false";
    const useAgc = localStorage.getItem("audio_agc") !== "false";

    let constraints = {
      echoCancellation: useEcho ? { ideal: true } : false,
      noiseSuppression: useNoise ? { ideal: true } : false,
      autoGainControl: useAgc ? { ideal: true } : false,
      channelCount: { ideal: 1 },
      googEchoCancellation: useEcho,
      googNoiseSuppression: useNoise,
      googHighpassFilter: useNoise,
      googTypingNoiseDetection: useNoise,
      googAutoGainControl: useAgc,
    };

    if (savedMicId) constraints.deviceId = { ideal: savedMicId };

    try {
      // 1. Das rohe Mikrofon von Windows abgreifen
      window.rawLocalStream = await navigator.mediaDevices.getUserMedia({
        audio: constraints,
        video: false,
      });

      // 2. Das digitale Mischpult (AudioContext) hochfahren
      if (!micAudioContext)
        micAudioContext = new (
          window.AudioContext || window.webkitAudioContext
        )();
      if (micAudioContext.state === "suspended") await micAudioContext.resume();

      // FIX: Global festhalten, damit der Browser das Kabel nicht zieht!
      micSourceNode = micAudioContext.createMediaStreamSource(
        window.rawLocalStream,
      );

      micGainNode = micAudioContext.createGain();
      micGainNode.gain.value = parseFloat(
        localStorage.getItem("audioMicVolume") || 1,
      );
      micDestination = micAudioContext.createMediaStreamDestination();

      // Kabel stecken: Mikrofon -> Verstärker -> WebRTC-Ausgang
      micSourceNode.connect(micGainNode);
      micGainNode.connect(micDestination);

      // 3. WebRTC bekommt nicht mehr das rohe Mikrofon, sondern den Ausgang vom Mischpult!
      localStream = micDestination.stream;

      // Stummschaltung anwenden
      localStream
        .getAudioTracks()
        .forEach((t) => (t.enabled = !(isMuted || isDeafened)));
      window.rawLocalStream
        .getAudioTracks()
        .forEach((t) => (t.enabled = !(isMuted || isDeafened)));
    } catch (err) {
      console.error("Mikrofon-Fehler:", err);
      appendChatUI(
        "System",
        "System",
        "⚠️ Mikrofon-Zugriff fehlgeschlagen: " + err.message,
        null,
        null,
        Date.now(),
        0,
      );
      localStream = new MediaStream();
    }
  }
  return true;
}

function endCall(sendNotification = true) {
  // Erlaubt dem Handy, wieder in den Standby zu gehen
  if (window.Capacitor) Capacitor.Plugins.KeepAwake.allowSleep();

  Object.values(peerConnections).forEach((call) => call.close());
  peerConnections = {};
  if (p2pVoicePC) {
    p2pVoicePC.close();
    p2pVoicePC = null;
  } // Räumt P2P Call auf

  if (localStream) {
    localStream.getTracks().forEach((t) => t.stop());
    localStream = null;
  }

  // Zerstört das rohe Mikrofon am Mischpult-Eingang
  if (window.rawLocalStream) {
    window.rawLocalStream.getTracks().forEach((t) => t.stop());
    window.rawLocalStream = null;
  }

  if (micSourceNode) {
    micSourceNode.disconnect();
    micSourceNode = null;
  }

  if (screenStream) {
    stopScreenShare();
  }

  document.getElementById("call-grid-container").style.display = "none";

  // FIX: Brute-Force Zerstörung jeglicher Medien-Elemente!
  document
    .getElementById("call-grid-container")
    .querySelectorAll("video, audio")
    .forEach((el) => {
      el.srcObject = null;
      el.remove();
    });
  document.getElementById("audio-container").innerHTML = "";

  document.getElementById("call-btn").style.display = "block";
  document.getElementById("screen-btn").style.display = "none";
  document.getElementById("hangup-btn").style.display = "none";
  document.getElementById("active-call-banner").style.display = "none";

  if (sendNotification && activeCallId) {
    if (activeCallType === "dm") {
      sendSignal(activeCallId, {
        type: "hangup",
        fromIp: myIp,
        ...{ name: myName },
      });
    } else if (activeCallType === "group") {
      const grp = groups.find((g) => g.id === activeCallId);
      if (grp)
        grp.members.forEach((m) => {
          if (m !== myIp)
            sendSignal(m, {
              type: "hangup",
              groupId: activeCallId,
              fromIp: myIp,
              ...{ name: myName },
            });
        });
    }
    appendChatUI("System", "System", "Aufgelegt.", null, null, Date.now(), 0);
  }
  activeCallId = null;
  activeCallType = null;
  updateCallUI();
  if (typeof refreshVoiceButton === "function") refreshVoiceButton();
  broadcastProfile(); // NEU: Der Welt sofort sagen, dass wir wieder draußen sind!
}

const SoundEngine = {
  ctx: new (window.AudioContext || window.webkitAudioContext)(),
  ringInterval: null,
  playMessage() {
    if (this.ctx.state === "suspended") this.ctx.resume();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(
      1200,
      this.ctx.currentTime + 0.1,
    );
    gain.gain.setValueAtTime(0.0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.2);
  },
  startRing() {
    if (this.ctx.state === "suspended") this.ctx.resume();
    if (this.ringInterval) return;
    const playBeep = () => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = "triangle";
      osc.frequency.setValueAtTime(500, this.ctx.currentTime);
      osc.frequency.setValueAtTime(400, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 0.5);
    };
    playBeep();
    setTimeout(playBeep, 200);
    this.ringInterval = setInterval(() => {
      playBeep();
      setTimeout(playBeep, 200);
    }, 2000);
  },
  stopRing() {
    clearInterval(this.ringInterval);
    this.ringInterval = null;
  },
};

function queueOfflineMessage(targetIp, data) {
  // Wir speichern nur echte Inhalte, keine Pings oder Verbindungs-Anfragen
  const allowedTypes = [
    "chat",
    "whiteboard",
    "edit-msg",
    "delete-msg",
    "pin-msg",
  ];
  if (allowedTypes.includes(data.type)) {
    // --- NEU: DER TÜRSTEHER GEGEN DEN QUOTA-ERROR ---
    // Wir prüfen, wie groß das Paket ist. Alles über ~3 MB lassen wir nicht ins Offline-Postfach!
    const dataString = JSON.stringify(data);
    if (dataString.length > 3 * 1024 * 1024) {
      alert(
        "⚠️ Datei zu groß für das Offline-Postfach!\n\nBitte warte, bis der Empfänger online ist, bevor du große Dateien verschickst.",
      );
      return; // Abbrechen, nicht in den localStorage packen!
    }

    if (!offlineQueue[targetIp]) offlineQueue[targetIp] = [];
    offlineQueue[targetIp].push(data);

    try {
      localStorage.setItem("vulalan_queue", JSON.stringify(offlineQueue));
    } catch (e) {
      // Fallback: Falls der Speicher aus anderen Gründen platzt (Code 22 / QuotaExceededError)
      offlineQueue[targetIp].pop(); // Die Nachricht, die das Fass zum Überlaufen brachte, wieder löschen
      alert(
        "⚠️ Dein Offline-Postfach ist restlos voll. Alte Nachrichten müssen erst zugestellt werden!",
      );
      return;
    }

    if (data.type === "chat") {
      const ind = document.getElementById("status-indicator");
      // FIX: Nutzt jetzt die Übersetzung und ersetzt den Platzhalter {ip}
      ind.innerHTML = t("sys_msg_queued").replace("{ip}", targetIp);
      ind.style.opacity = "1";
      setTimeout(() => (ind.style.opacity = "0"), 4000);
    }
  }
}

function flushOfflineQueue(targetIp) {
  if (offlineQueue[targetIp] && offlineQueue[targetIp].length > 0) {
    const msgs = offlineQueue[targetIp];
    offlineQueue[targetIp] = [];
    localStorage.setItem("vulalan_queue", JSON.stringify(offlineQueue));

    msgs.forEach((data) => {
      if (currentMode === "p2p") {
        if (
          p2pSockets[targetIp] &&
          p2pSockets[targetIp].readyState === WebSocket.OPEN
        )
          p2pSockets[targetIp].send(JSON.stringify(data));
      } else {
        if (serverWs && serverWs.readyState === WebSocket.OPEN)
          serverWs.send(JSON.stringify(data));
      }
    });

    // FIX: Nutzt jetzt die Übersetzung und ersetzt den Platzhalter {count}
    const successMsg = t("sys_queue_flushed").replace("{count}", msgs.length);
    appendChatUI("System", "System", successMsg, null, null, Date.now(), 0);
  }
}

function isValidIp(ip) {
  if (!ip || ip === myIp || ip === "127.0.0.1") return false;
  return true;
}

async function confirmClientStart(isAutoStart = false) {
  let targetServer;

  if (isAutoStart) {
    // Automatischer Start: Wir ziehen die Daten unsichtbar aus dem Tresor!
    targetServer = localStorage.getItem("lastServerIp");
    document.getElementById("client-target-ip").value = targetServer;
    document.getElementById("client-server-pin").value =
      localStorage.getItem("lastServerPin") || "";
  } else {
    targetServer = document.getElementById("client-target-ip").value.trim();
  }

  if (!targetServer) return alert(t("alert_no_ip"));

  // Speichert die IP für's nächste Mal
  // Speichert die IP für's nächste Mal (PC & Handy)
  if ((isElectron && window.location.protocol === "file:") || isCapacitor) {
    localStorage.setItem("lastServerIp", targetServer);
  }

  window.serverPin = document.getElementById("client-server-pin").value.trim();
  localStorage.setItem("lastServerPin", window.serverPin);

  // Hat der User den "Auto-Start" Haken im Startmenü gesetzt?
  const autoCb = document.getElementById("launcher-autostart-cb");
  if (autoCb && autoCb.checked && !isAutoStart) {
    localStorage.setItem("autoStartMode", "web");
  }

  currentMode = "web";
  await bootUI();
  connectToHost(targetServer);
  setInterval(checkOnlineStatus, 5000);
}

window.serverPin = ""; // Globale PIN Variable

async function startHostMode(isAutoStart = false) {
  if (!isElectron) return alert("❌ Nur als Desktop-App!");

  const autoCb = document.getElementById("launcher-autostart-cb");
  if (autoCb && autoCb.checked && !isAutoStart) {
    localStorage.setItem("autoStartMode", "host");
  }

  currentMode = "host";
  const requirePin = localStorage.getItem("require_pin") !== "false";
  if (requirePin) {
    window.serverPin = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
  } else {
    window.serverPin = null;
  }

  window.api.startLocalServer(window.serverPin);
  await bootUI();
  connectToHost(myIp);

  document.getElementById("host-ui-container").style.display = "block";
  document.getElementById("host-display-ip").value = myIp;
  document.getElementById("host-display-pin").value = window.serverPin
    ? window.serverPin
    : "AUS";
  setInterval(checkOnlineStatus, 5000);
}

async function startP2PMode(isAutoStart = false) {
  if (!isElectron)
    return alert(
      "❌ P2P benötigt die Desktop-App (.exe) für native LAN-Rechte!",
    );

  const autoCb = document.getElementById("launcher-autostart-cb");
  if (autoCb && autoCb.checked && !isAutoStart) {
    localStorage.setItem("autoStartMode", "p2p");
  }

  currentMode = "p2p";
  window.api.startP2PServer();
  await bootUI();
  document.getElementById("p2p-ui-container").style.display = "block";
  scanSubnetForP2P();
  setInterval(checkOnlineStatus, 5000);
}

// --- P2P VERBINDUNG AUFBAUEN ---
// NEU: Nimmt jetzt ein "isAutoScan" Flag an, um Fehlerspam zu verhindern

// --- P2P VERBINDUNG AUFBAUEN ---
function initiateP2PConnection(isAutoScan = false) {
  const targetIp = document.getElementById("p2p-target-ip").value.trim();
  if (!targetIp) {
    if (!isAutoScan)
      appendChatUI(
        "System",
        "System",
        t("sys_p2p_no_ip"),
        null,
        null,
        Date.now(),
        0,
      );
    return;
  }
  if (
    p2pSockets[targetIp] &&
    p2pSockets[targetIp].readyState === WebSocket.OPEN
  ) {
    if (!isAutoScan)
      appendChatUI(
        "System",
        "System",
        t("sys_p2p_exists").replace("{ip}", targetIp),
        null,
        null,
        Date.now(),
        0,
      );
    return;
  }
  try {
    const ws = new WebSocket(`ws://${targetIp}:8181`);
    p2pSockets[targetIp] = ws;

    ws.onopen = async () => {
      appendChatUI(
        "System",
        "System",
        t("sys_p2p_connected").replace("{ip}", targetIp),
        null,
        null,
        Date.now(),
        0,
      );
      document.getElementById("p2p-target-ip").value = "";
      sendSignal(targetIp, {
        type: "register",
        fromIp: myIp,
        ...(await getMyProfile()),
      });
    };

    ws.onmessage = async (event) => {
      let msgData = event.data;
      if (msgData instanceof Blob) {
        msgData = await msgData.text();
      }
      processIncomingSignal(msgData);
    };

    ws.onerror = () => {
      if (!isAutoScan) {
        appendChatUI(
          "System",
          "System",
          t("sys_p2p_err").replace("{ip}", targetIp),
          null,
          null,
          Date.now(),
          0,
        );
      }
      delete p2pSockets[targetIp];
    };

    ws.onclose = () => {
      delete p2pSockets[targetIp];
    };
  } catch (e) {
    if (!isAutoScan)
      appendChatUI(
        "System",
        "System",
        t("sys_p2p_invalid"),
        null,
        null,
        Date.now(),
        0,
      );
  }
}

// --- AUTOMATISCHER SUBNETZ SCANNER (/24) ---
function scanSubnetForP2P() {
  if (!isElectron) return;
  if (
    !myIp ||
    !myIp.includes(".") ||
    myIp.split(".").length !== 4 ||
    myIp.startsWith("127.")
  ) {
    appendChatUI(
      "System",
      "System",
      t("sys_p2p_no_ipv4"),
      null,
      null,
      Date.now(),
      0,
    );
    return;
  }

  const parts = myIp.split(".");
  const baseIp = `${parts[0]}.${parts[1]}.${parts[2]}.`;
  appendChatUI(
    "System",
    "System",
    t("sys_lan_scan").replace("{ip}", baseIp),
    null,
    null,
    Date.now(),
    0,
  );

  window.api.scanLan(baseIp);
}

function connectToHost(customTarget = null) {
  if (
    serverWs &&
    (serverWs.readyState === WebSocket.OPEN ||
      serverWs.readyState === WebSocket.CONNECTING)
  )
    return;

  let wsUrl = "";

  if (!customTarget && isElectron && window.location.protocol === "file:") {
    customTarget = localStorage.getItem("lastServerIp");
    if (!customTarget) return;
  }

  if (customTarget) {
    if (customTarget === "127.0.0.1") customTarget = "127.0.0.1:3000";

    if (customTarget.startsWith("ws://") || customTarget.startsWith("wss://")) {
      wsUrl = customTarget;
      apiBaseUrl = customTarget
        .replace("ws:", "http:")
        .replace("wss:", "https:");
    } else if (customTarget.match(/[a-zA-Z]/)) {
      // DOMAINS (z.B. Cloudflare-Tunnel) = IMMER VERSCHLÜSSELT!
      wsUrl = `wss://${customTarget}/chat?pin=${window.serverPin || ""}`;
      apiBaseUrl = `https://${customTarget}`;
    } else {
      // LOKALE IP-ADRESSEN (z.B. 192.168.x.x) = ZURÜCK AUF NORMALES HTTP/WS!
      if (!customTarget.includes(":")) customTarget += ":3000";
      wsUrl = `ws://${customTarget}/chat?pin=${window.serverPin || ""}`;
      apiBaseUrl = `http://${customTarget}`;
    }
  } else {
    return; // Stoppt die Funktion sicher, falls kein Ziel übergeben wurde
  }

  try {
    updateRoutingInfo();

    serverWs = new WebSocket(wsUrl);

    serverWs.onopen = async () => {
      sendSignal(null, { type: "register", fromIp: myIp });

      // NEU: Server sofort nach dem 24/7 Global Chat Archiv fragen!
      sendSignal(null, { type: "req-global-history", fromIp: myIp });

      initPeerJS();
    };

    serverWs.onmessage = async (event) => {
      let msgData = event.data;
      if (msgData instanceof Blob) {
        msgData = await msgData.text();
      }
      processIncomingSignal(msgData);
    };

    serverWs.onclose = () => {
      setTimeout(() => connectToHost(customTarget), 4000);
    };
  } catch (e) {
    console.error("Fehler beim Erstellen des WebSockets:", e);
  }
}

function sendSignal(targetIp, data) {
  if (targetIp) data.targetIp = targetIp;

  // FIX: Wenn der Partner offline ist, werfen wir die Nachricht direkt ins lokale Postfach!
  let isOffline = false;
  if (targetIp && !targetIp.startsWith("grp_")) {
    const c = contacts.find((contact) => contact.ip === targetIp);
    if (c && !c.isOnline) isOffline = true;
  }

  if (
    isOffline &&
    ["chat", "whiteboard", "edit-msg", "delete-msg", "pin-msg"].includes(
      data.type,
    )
  ) {
    queueOfflineMessage(targetIp, data);
    return; // Stopp! Nicht ins Leere an den Server senden.
  }

  if (currentMode === "web" || currentMode === "host") {
    if (serverWs && serverWs.readyState === WebSocket.OPEN) {
      serverWs.send(JSON.stringify(data));
    }
  } else if (currentMode === "p2p" && targetIp) {
    if (p2pSockets[targetIp]) {
      if (p2pSockets[targetIp].readyState === WebSocket.OPEN) {
        p2pSockets[targetIp].send(JSON.stringify(data));
      } else if (p2pSockets[targetIp].readyState === WebSocket.CONNECTING) {
        p2pSockets[targetIp].queue = p2pSockets[targetIp].queue || [];
        p2pSockets[targetIp].queue.push(JSON.stringify(data));

        p2pSockets[targetIp].onopen = () => {
          p2pSockets[targetIp].queue.forEach((msg) =>
            p2pSockets[targetIp].send(msg),
          );
          p2pSockets[targetIp].queue = [];
          flushOfflineQueue(targetIp);
        };
      } else {
        queueOfflineMessage(targetIp, data);
      }
    } else if (isElectron) {
      // NEU: Wenn der P2P-Socket im Backend liegt, schicken wir die Antwort dorthin!
      window.api.sendP2PMessage(targetIp, JSON.stringify(data));
    } else {
      queueOfflineMessage(targetIp, data);
      if (["chat", "whiteboard"].includes(data.type)) {
        document.getElementById("p2p-target-ip").value = targetIp;
        initiateP2PConnection();
      }
    }
  }
}

async function downloadSecureFile(url, fileName, fileKeyB64) {
  const ind = document.getElementById("status-indicator");
  try {
    let writable = null;
    let useRamFallback = false;
    let fallbackChunks = [];

    if (window.showSaveFilePicker) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: fileName,
        });
        writable = await handle.createWritable();
      } catch (err) {
        if (err.name === "AbortError") return;
        useRamFallback = true;
      }
    } else {
      useRamFallback = true;
    }

    if (useRamFallback)
      ind.innerHTML = `🔐 Starte Download (Brave/Firefox Fallback)...`;
    else ind.style.opacity = "1";

    const rawKey = CryptoManager.base64ToBuffer(fileKeyB64);
    const fileKey = await window.crypto.subtle.importKey(
      "raw",
      rawKey,
      { name: "AES-GCM" },
      false,
      ["decrypt"],
    );

    const chunkSize = 2 * 1024 * 1024;
    const encryptedChunkSize = chunkSize + 12 + 16;
    let offset = 0;

    ind.style.opacity = "1";

    while (true) {
      if (!useRamFallback)
        ind.innerHTML = `🔐 Entschlüssele direkt auf SSD... (${Math.round(offset / 1024 / 1024)} MB)`;
      else
        ind.innerHTML = `🔐 Lade in Arbeitsspeicher... (${Math.round(offset / 1024 / 1024)} MB)`;

      const res = await fetch(url, {
        headers: {
          Range: `bytes=${offset}-${offset + encryptedChunkSize - 1}`,
        },
      });
      if (res.status !== 206 && res.status !== 200) break;

      const buffer = await res.arrayBuffer();
      if (buffer.byteLength === 0) break;

      const iv = buffer.slice(0, 12);
      const data = buffer.slice(12);

      const decrypted = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: new Uint8Array(iv) },
        fileKey,
        data,
      );

      if (writable) {
        await writable.write(decrypted);
      } else {
        fallbackChunks.push(decrypted);
      }

      offset += buffer.byteLength;
      if (buffer.byteLength < encryptedChunkSize) break;
    }

    if (writable) {
      await writable.close();
    } else {
      ind.innerHTML = `⏳ Speichere fertige Datei aus RAM...`;
      const blob = new Blob(fallbackChunks);
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
      fallbackChunks = [];
    }

    ind.innerHTML = `✅ Download von ${fileName} erfolgreich!`;
    setTimeout(() => (ind.style.opacity = "0"), 3000);
  } catch (e) {
    console.error(e);
    alert(
      "Fehler beim Download. Netzwerkproblem oder die Datei ist beschädigt.",
    );
    ind.style.opacity = "0";
  }
}

// --- NEU: ZWINGT ELECTRON ZUM DOWNLOAD VON UNVERSCHLÜSSELTEN DATEIEN ---
// --- NEU: ZWINGT ELECTRON & ANDROID ZUM DOWNLOAD ---
window.downloadNormalFile = async function (url, fileName) {
  const ind = document.getElementById("status-indicator");
  ind.style.opacity = "1";
  ind.innerHTML = `⬇️ Lade ${fileName} herunter...`;

  try {
    // 1. ANDROID / SMARTPHONE DOWNLOAD LOGIK
    if (window.Capacitor) {
      const { Filesystem, Directory } = Capacitor.Plugins;

      if (url.startsWith("data:")) {
        // Kleine Base64 Dateien
        await Filesystem.writeFile({
          path: fileName,
          data: url,
          directory: Directory.Documents,
        });
      } else {
        // --- FIX FÜR HANDY: KEIN RAM-CRASH MEHR ---
        // Streamt die riesige Datei direkt aus dem WLAN auf den Handy-Speicher!
        await Filesystem.downloadFile({
          url: url,
          path: fileName,
          directory: Directory.Documents,
        });
      }

      ind.innerHTML = `✅ Erfolgreich im 'Dokumente'-Ordner gespeichert!`;
      setTimeout(() => (ind.style.opacity = "0"), 4000);
      return;
    }

    // 2. PC / ELECTRON DOWNLOAD LOGIK
    if (url.startsWith("data:")) {
      // Kleine Dateien (Bilder/Voice) aus dem RAM speichern
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      ind.innerHTML = `✅ Download erfolgreich!`;
      setTimeout(() => (ind.style.opacity = "0"), 3000);
      return;
    }

    // --- DER FIX FÜR GIGABYTE-DATEIEN AM PC ---
    // KEIN fetch() und KEIN blob() mehr! Wir generieren einfach einen Klick auf den Link.
    // Die Electron-Engine lädt die Datei im Hintergrund nativ und ressourcenschonend herunter.
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank"; // Wichtig: Verhindert, dass die Chat-Seite überschrieben wird
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    ind.innerHTML = `✅ Download gestartet!`;
    setTimeout(() => (ind.style.opacity = "0"), 3000);
  } catch (err) {
    console.error(err);
    alert("Fehler beim Download. Ist der Host-PC noch online?");
    ind.style.opacity = "0";
  }
};

async function processIncomingSignal(msg) {
  try {
    const data = JSON.parse(msg);
    if (data.fromIp === myIp) return;
    if (data.targetIp && data.targetIp !== myIp) return;

    const senderName = data.name || data.id || data.fromIp;
    const currentActiveIp = document.getElementById("target-ip").value;

    // --- NEU: BLOCKIEREN / STUMMSCHALTEN ---
    // --- NEU: BLOCKIEREN / STUMMSCHALTEN (MIT BOUNCE-BACK) ---
    const senderContact = contacts.find((c) => c.ip === data.fromIp);
    if (senderContact && senderContact.isMuted) {
      const blockedTypes = [
        "chat",
        "whiteboard",
        "file-offer",
        "p2p-offer",
        "session-started",
        "group-invite",
      ];
      if (blockedTypes.includes(data.type)) {
        // Wir werfen die Nachricht weg, aber senden ein "Abgelehnt"-Signal zurück!
        sendSignal(data.fromIp, { type: "blocked-bounce", fromIp: myIp });
        return;
      }
    }

    // Lebenszeichen-Wächter: Postfach leeren
    if (!window.flushedIps) window.flushedIps = {};
    if (!window.flushedIps[data.fromIp]) {
      flushOfflineQueue(data.fromIp);
      window.flushedIps[data.fromIp] = true;
      setTimeout(() => {
        window.flushedIps[data.fromIp] = false;
      }, 5000);
    }

    // BLOCK 1: Profil- & Schlüssel-Synchronisation
    if (
      ["ping", "pong", "chat", "offer", "profile", "register"].includes(
        data.type,
      )
    ) {
      let cIndex = data.id ? contacts.findIndex((c) => c.id === data.id) : -1;
      if (cIndex === -1)
        cIndex = contacts.findIndex((c) => c.ip === data.fromIp);

      let wasOffline = false;

      if (cIndex === -1 && isValidIp(data.fromIp)) {
        contacts.push({
          ip: data.fromIp,
          id: data.id || null,
          name: data.name || data.fromIp,
          avatar: data.avatar || null,
          isOnline: true,
          pubKey: data.pubKey || null,
          unread: 0,
        });

        cIndex = contacts.length - 1;
        wasOffline = true;

        localStorage.setItem("contacts", JSON.stringify(contacts));
        renderContacts();
        updateGlobalGroup();
      }

      if (cIndex !== -1) {
        if (!wasOffline) wasOffline = !contacts[cIndex].isOnline;

        if (contacts[cIndex].ip !== data.fromIp) {
          console.log(
            `🔄 VPN/DHCP Sync: ${senderName} hat die IP gewechselt zu ${data.fromIp}`,
          );
          contacts[cIndex].ip = data.fromIp;
        }

        if (data.id) contacts[cIndex].id = data.id;
        if (data.name) contacts[cIndex].name = data.name;
        if (data.avatar) contacts[cIndex].avatar = data.avatar;
        if (data.bio !== undefined) contacts[cIndex].bio = data.bio;
        if (data.activeCall !== undefined)
          contacts[cIndex].activeCall = data.activeCall;

        if (data.pubKey) {
          const savedKeyStr = contacts[cIndex].pubKey
            ? JSON.stringify(contacts[cIndex].pubKey)
            : null;
          const incomingKeyStr = JSON.stringify(data.pubKey);

          if (savedKeyStr && savedKeyStr !== incomingKeyStr) {
            console.warn(
              "⚠️ Schlüssel-Rotation oder Neuinstallation erkannt für:",
              data.fromIp,
            );

            contacts[cIndex].pubKey = data.pubKey;
            localStorage.setItem("contacts", JSON.stringify(contacts));

            appendChatUI(
              "System",
              "System",
              `🔐 **Sicherheits-Update:** Der Krypto-Schlüssel von **${data.name || data.fromIp}** hat sich geändert (z.B. durch App-Neustart oder VPN-Wechsel). Zukünftige Nachrichten sind wieder E2E-verschlüsselt.`,
              null,
              null,
              Date.now(),
              0,
            );
          } else {
            contacts[cIndex].pubKey = data.pubKey;
          }

          if (currentActiveIp === data.fromIp) {
            document.getElementById("e2e-badge").style.display = "inline-block";
          }
        }

        contacts[cIndex].isOnline = true;
        contacts[cIndex].lastSeen = Date.now();
        localStorage.setItem("contacts", JSON.stringify(contacts));

        if (wasOffline && isElectron) {
          sendSignal(data.fromIp, {
            type: "sync-req",
            chatId: data.fromIp,
            fromIp: myIp,
          });
        }

        // --- NEU: Wenn der Kontakt vorher als offline galt, MUSS die Liste sofort neu gezeichnet werden! ---
        if (wasOffline) {
          renderContacts();
        } else {
          // Nur wenn er schon online war, reicht das schnelle "lautlose" Text-Update, ohne die Liste neu zu sortieren
          const contactItem = document.querySelector(
            `.contact-item[data-ip="${data.fromIp}"]`,
          );
          if (contactItem) {
            const nameEl = contactItem.querySelector(".contact-name");
            if (nameEl) nameEl.innerText = data.name || data.id;
            const avEl = contactItem.querySelector(".contact-avatar");
            if (avEl)
              avEl.src = getAvatar(
                data.avatar,
                data.name || data.id || data.fromIp,
              );
          }
        }
      }

      refreshRightSidebar();
      if (typeof refreshVoiceButton === "function") refreshVoiceButton();
    }

    // BLOCK 2: Eigentliche Signal- & Chat-Verarbeitung (UNVERKETTET!)
    // FIX: Hier muss zwingend ein eigenständiges "if" stehen!

    // BLOCK 2: Eigentliche Signal- & Chat-Verarbeitung (UNVERKETTET!)

    // --- NEU: SERVER-MANAGED GLOBAL CHAT EMPFANGEN ---
    if (data.type === "global-chat") {
      const chatData = data.payload;
      saveMessageLocally(
        "grp_global",
        data.fromIp,
        senderName,
        chatData.text,
        chatData.file,
        chatData.fileName,
        chatData.fileSize,
        data.timestamp,
        chatData.fileKey,
        chatData.replyData,
      );

      if (currentActiveIp === "grp_global") {
        appendChatUI(
          data.fromIp,
          senderName,
          chatData.text,
          chatData.file,
          chatData.fileName,
          data.timestamp,
          chatData.fileSize,
          false,
          chatData.fileKey,
          chatData.replyData,
        );
        document.getElementById("status-indicator").style.opacity = "0";
        if (!document.hasFocus()) SoundEngine.playMessage();
      } else {
        incrementUnread("grp_global");
        SoundEngine.playMessage();
      }
      return;
    }

    // --- NEU: DIE VERGANGENHEIT VOM SERVER LADEN ---
    else if (data.type === "res-global-history") {
      const localHistory = await DBManager.getMessages("grp_global");
      const localIds = new Set(localHistory.map((m) => m.timestamp));
      let added = 0;

      for (let msg of data.history) {
        if (!localIds.has(msg.timestamp)) {
          let trueSenderIp = msg.fromIp === myIp ? "Ich" : msg.fromIp;
          await saveMessageLocally(
            "grp_global",
            trueSenderIp,
            msg.name || msg.fromIp,
            msg.payload.text,
            msg.payload.file,
            msg.payload.fileName,
            msg.payload.fileSize,
            msg.timestamp,
            msg.payload.fileKey,
          );
          added++;
        }
      }
      if (added > 0 && currentActiveIp === "grp_global") {
        loadChatHistory("grp_global");
        appendChatUI(
          "System",
          "System",
          `✅ **Server-Sync:** ${added} alte Nachrichten aus dem 24/7 Archiv geladen!`,
          null,
          null,
          Date.now(),
          0,
        );
      }
      return;
    }

    if (data.type === "group-invite") {
      if (!groups.find((g) => g.id === data.groupData.id)) {
        groups.push(data.groupData);
        localStorage.setItem("groups", JSON.stringify(groups));
        renderGroups();
      }
    } else if (data.type === "group-update") {
      const idx = groups.findIndex((g) => g.id === data.groupData.id);
      if (idx !== -1) {
        groups[idx] = data.groupData;
        localStorage.setItem("groups", JSON.stringify(groups));
        renderGroups();
      }
    } else if (data.type === "group-kick") {
      groups = groups.filter((g) => g.id !== data.groupId);
      localStorage.setItem("groups", JSON.stringify(groups));
      renderGroups();
      if (currentActiveIp === data.groupId) {
        document.getElementById("target-ip").value = "";
        document.getElementById("chat-box").innerHTML = "";
        document.getElementById("chat-header-name").innerText = "Niemand";
        document.getElementById("group-mgr-btn").style.display = "none";
        alert(
          "Du wurdest aus der Gruppe entfernt oder die Gruppe wurde aufgelöst.",
        );
      }
    } else if (data.type === "register") {
      sendSignal(data.fromIp, {
        type: "profile",
        fromIp: myIp,
        ...(await getMyProfile()),
      });
    } else if (data.type === "ping") {
      sendSignal(data.fromIp, {
        type: "pong",
        id: myId,
        fromIp: myIp,
        ...(await getMyProfile()),
      });

      if (!window.globalSyncDone) {
        window.globalSyncDone = true;
        DBManager.getMessages("grp_global").then((globalMsgs) => {
          if (globalMsgs.length === 0) {
            sendSignal(data.fromIp, {
              type: "sync-req",
              chatId: "grp_global",
              fromIp: myIp,
            });
          }
        });
      }
    } else if (data.type === "typing" && currentActiveIp === data.fromIp) {
      const ind = document.getElementById("status-indicator");
      if (data.state) {
        ind.style.opacity = "1";
        ind.innerHTML = `💬 ${senderName} schreibt...`;
      } else {
        ind.style.opacity = "0";
      }
    }
    // --- NEU: WENN WIR VON JEMANDEM BLOCKIERT WURDEN ---
    else if (data.type === "blocked-bounce") {
      const warningMsg = `⚠️ **Nachricht nicht zugestellt.** Du wurdest von diesem Nutzer blockiert.`;

      saveMessageLocally(
        data.fromIp,
        "System",
        "System",
        warningMsg,
        null,
        null,
        0,
        Date.now(),
      );

      if (currentActiveIp === data.fromIp) {
        appendChatUI("System", "System", warningMsg, null, null, Date.now(), 0);
        if (!document.hasFocus()) SoundEngine.playMessage();
      } else {
        incrementUnread(data.fromIp);
        SoundEngine.playMessage();
      }
    } else if (data.type === "delete-msg") {
      const targetId = data.groupId || data.fromIp;
      let history = JSON.parse(localStorage.getItem(`chat_${targetId}`)) || [];
      history = history.filter((m) => m.timestamp != data.msgId);
      localStorage.setItem(`chat_${targetId}`, JSON.stringify(history));
      if (currentActiveIp === targetId) {
        const msgEl = document.getElementById(`msg-${data.msgId}`);
        if (msgEl) msgEl.remove();
      }
    } else if (data.type === "directory-sync") {
      let added = false;
      data.ips.forEach((ip) => {
        if (isValidIp(ip) && !contacts.find((c) => c.ip === ip)) {
          contacts.push({
            ip: ip,
            id: null,
            name: ip,
            avatar: null,
            isOnline: true,
            pubKey: null,
            unread: 0,
          });
          added = true;
        }
      });
      if (added) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
        renderContacts();
        checkOnlineStatus();
        updateGlobalGroup();
      }
    } else if (data.type === "sync-req") {
      const targetChatId =
        data.chatId && data.chatId.startsWith("grp_")
          ? data.chatId
          : data.fromIp;
      const history = await DBManager.getMessages(targetChatId);
      const recentHistory = history.slice(-200);
      const partner = contacts.find((c) => c.ip === data.fromIp);
      const encryptedPayload = await CryptoManager.encryptPayload(
        JSON.stringify(recentHistory),
        partner ? partner.pubKey : null,
      );

      sendSignal(data.fromIp, {
        type: "sync-res",
        chatId: data.chatId,
        payload: encryptedPayload,
        fromIp: myIp,
      });
    } else if (data.type === "sync-res") {
      try {
        const targetChatId =
          data.chatId && data.chatId.startsWith("grp_")
            ? data.chatId
            : data.fromIp;
        const decryptedString = await CryptoManager.decryptPayload(
          data.payload,
        );
        const remoteHistory = JSON.parse(decryptedString);

        if (!Array.isArray(remoteHistory)) {
          console.error("Sync fehlgeschlagen: Datenpaket ist ungültig.");
          if (document.getElementById("target-ip").value === targetChatId) {
            appendChatUI(
              "System",
              "System",
              "⚠️ Sync fehlgeschlagen (Verschlüsselungsfehler). Bitte etwas warten und manuell oben auf 'Sync' klicken.",
              null,
              null,
              Date.now(),
              0,
            );
          }
          return;
        }

        const localHistory = await DBManager.getMessages(targetChatId);
        const localIds = new Set(localHistory.map((m) => m.timestamp));
        let added = 0;

        for (let msg of remoteHistory) {
          if (!localIds.has(msg.timestamp)) {
            let trueSenderIp =
              msg.senderIp === "Ich" ? data.fromIp : msg.senderIp;
            let trueSenderName =
              msg.senderIp === "Ich" ? senderName : msg.senderName;
            await saveMessageLocally(
              targetChatId,
              trueSenderIp,
              trueSenderName,
              msg.text,
              msg.file,
              msg.fileName,
              msg.fileSize,
              msg.timestamp,
              msg.fileKey,
            );
            added++;
          } else {
            const localMsg = localHistory.find(
              (m) => m.timestamp === msg.timestamp,
            );
            if (localMsg && !localMsg.file && msg.file) {
              await DBManager.updateMessage(msg.timestamp, {
                file: msg.file,
                fileName: msg.fileName,
                fileSize: msg.fileSize,
                fileKey: msg.fileKey,
              });
              added++;
            }
          }
        }

        if (document.getElementById("target-ip").value === targetChatId) {
          if (added > 0) {
            loadChatHistory(targetChatId);
            appendChatUI(
              "System",
              "System",
              `${t("sys_sync_success")} ${added} ${t("sys_sync_msgs_loaded")}`,
              null,
              null,
              Date.now(),
              0,
            );
          } else {
            appendChatUI(
              "System",
              "System",
              t("sys_sync_done_none"),
              null,
              null,
              Date.now(),
              0,
            );
          }
        }
      } catch (e) {
        console.error("Sync fehlgeschlagen", e);
        appendChatUI(
          "System",
          "System",
          t("sys_sync_fail_enc"),
          null,
          null,
          Date.now(),
          0,
        );
      }
    } else if (data.type === "chat") {
      const decryptedBundleString = await CryptoManager.decryptPayload(
        data.payload,
      );
      const chatData = JSON.parse(decryptedBundleString);
      const targetId = chatData.groupId || data.fromIp;

      saveMessageLocally(
        targetId,
        data.fromIp,
        senderName,
        chatData.text,
        chatData.file,
        chatData.fileName,
        chatData.fileSize,
        data.timestamp,
        chatData.fileKey,
        chatData.replyData,
      );

      if (currentActiveIp === targetId) {
        appendChatUI(
          data.fromIp,
          senderName,
          chatData.text,
          chatData.file,
          chatData.fileName,
          data.timestamp,
          chatData.fileSize,
          false,
          chatData.fileKey,
          chatData.replyData,
        );
        document.getElementById("status-indicator").style.opacity = "0";
        if (!document.hasFocus()) SoundEngine.playMessage();
      } else {
        incrementUnread(targetId);
        SoundEngine.playMessage();
      }
    } else if (data.type === "whiteboard") {
      const decryptedString = await CryptoManager.decryptPayload(data.payload);
      const wbData = JSON.parse(decryptedString);
      const targetId = wbData.groupId || data.fromIp;

      if (currentActiveIp === targetId) {
        if (wbData.action === "clear-approve") {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          document.getElementById("wb-clear-request").style.display = "none";
          appendChatUI(
            "System",
            "System",
            "🗑️ Whiteboard wurde geleert.",
            null,
            null,
            Date.now(),
            0,
          );
        } else if (wbData.action === "clear-request") {
          document.getElementById("wb-clear-text").innerText =
            `${senderName} möchte das Whiteboard leeren. Erlauben?`;
          document.getElementById("wb-clear-request").style.display = "flex";
          SoundEngine.playMessage();
        } else if (wbData.action === "draw") {
          drawOnCanvas(
            wbData.x0,
            wbData.y0,
            wbData.x1,
            wbData.y1,
            wbData.color,
            wbData.size,
          );
        } else if (wbData.action === "text") {
          drawWbText(
            wbData.x,
            wbData.y,
            wbData.text,
            wbData.color,
            wbData.size,
          );
        } else if (wbData.action === "load-image-request") {
          document.getElementById("wb-load-text").innerText =
            `${senderName} möchte ein Bild laden. Erlauben?`;
          document.getElementById("wb-load-request").style.display = "flex";
          SoundEngine.playMessage();
        } else if (wbData.action === "load-image-approve") {
          document.getElementById("wb-load-request").style.display = "none";
          if (pendingLoadData) {
            const img = new Image();
            img.onload = () => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0);
              sendWhiteboardData({
                action: "load-image",
                data: pendingLoadData,
              });
              pendingLoadData = null;
            };
            img.src = pendingLoadData;
          }
        } else if (wbData.action === "load-image") {
          const img = new Image();
          img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
          };
          img.src = wbData.data;
        }
      }

      window.wbNotices = window.wbNotices || {};
      const now = Date.now();

      if (now - (window.wbNotices[targetId] || 0) > 60000) {
        window.wbNotices[targetId] = now;
        const msgText = `🖌️ **${senderName}** zeichnet gerade auf dem Whiteboard!`;
        saveMessageLocally(
          targetId,
          "System",
          "System",
          msgText,
          null,
          null,
          0,
          now,
        );

        if (currentActiveIp === targetId) {
          appendChatUI("System", "System", msgText, null, null, now, 0);
          if (!document.hasFocus()) SoundEngine.playMessage();
        } else {
          incrementUnread(targetId);
          SoundEngine.playMessage();
        }
      }
    } else if (data.type === "file-offer") {
      if (currentActiveIp !== data.fromIp || !document.hasFocus())
        SoundEngine.playMessage();
      fileReceivePC = new RTCPeerConnection({ iceServers: getIceServers() });
      fileReceivePC.onicecandidate = (e) => {
        if (e.candidate)
          sendSignal(data.fromIp, { type: "ice-file", candidate: e.candidate });
      };
      fileReceivePC.ondatachannel = (e) => {
        e.channel.binaryType = "arraybuffer";
        let progressId = "";
        e.channel.onmessage = (msg) => {
          if (typeof msg.data === "string") {
            incomingFileData.meta = JSON.parse(msg.data);
            incomingFileData.buffers = [];
            incomingFileData.received = 0;
            progressId = "prog-" + incomingFileData.meta.timestamp;
            if (currentActiveIp === data.fromIp)
              appendProgressUI(
                data.fromIp,
                senderName,
                incomingFileData.meta.name,
                progressId,
                incomingFileData.meta.timestamp,
              );
          } else {
            incomingFileData.buffers.push(msg.data);
            incomingFileData.received += msg.data.byteLength;
            if (currentActiveIp === data.fromIp) {
              const percent = Math.round(
                (incomingFileData.received / incomingFileData.meta.size) * 100,
              );
              const pBar = document.getElementById(progressId);
              if (pBar) pBar.value = percent;
            }
            if (incomingFileData.received === incomingFileData.meta.size) {
              const blob = new Blob(incomingFileData.buffers, {
                type: incomingFileData.meta.type || "application/octet-stream",
              });
              const url = URL.createObjectURL(blob);
              const progMsg = document.getElementById(
                `msg-${incomingFileData.meta.timestamp}`,
              );
              if (progMsg) progMsg.remove();
              if (currentActiveIp === data.fromIp) {
                appendChatUI(
                  data.fromIp,
                  senderName,
                  "Große Datei empfangen!",
                  url,
                  incomingFileData.meta.name,
                  incomingFileData.meta.timestamp,
                  incomingFileData.meta.size,
                  true,
                );
              } else {
                incrementUnread(data.fromIp);
              }
              saveMessageLocally(
                data.fromIp,
                data.fromIp,
                senderName,
                "[Große Datei empfangen]",
                null,
                incomingFileData.meta.name,
                incomingFileData.meta.size,
                incomingFileData.meta.timestamp,
              );
              fileReceivePC.close();
            }
          }
        };
      };
      await fileReceivePC.setRemoteDescription(data.offer);
      const answer = await fileReceivePC.createAnswer();
      await fileReceivePC.setLocalDescription(answer);
      sendSignal(data.fromIp, {
        type: "file-answer",
        answer: answer,
        fromIp: myIp,
      });
    } else if (data.type === "file-answer") {
      if (fileSendPC) await fileSendPC.setRemoteDescription(data.answer);
    } else if (data.type === "ice-file") {
      if (fileSendPC && fileSendPC.remoteDescription)
        fileSendPC.addIceCandidate(data.candidate).catch((e) => {});
      if (fileReceivePC && fileReceivePC.remoteDescription)
        fileReceivePC.addIceCandidate(data.candidate).catch((e) => {});
    } else if (data.type === "p2p-offer") {
      // 1. Manuelles Klingel-UI (Kein Auto-Accept!)
      endCall(false);
      SoundEngine.startRing();
      pendingCallerIp = data.fromIp;
      window.pendingCallType = "p2p-voice";
      window.p2pPendingOffer = data.offer;
      document.getElementById("caller-name-text").innerText =
        `P2P Anruf von: ${data.name || data.fromIp}`;
      document.getElementById("incoming-call-box").style.display = "block";
    } else if (data.type === "p2p-answer") {
      SoundEngine.stopRing();
      if (p2pVoicePC) {
        await p2pVoicePC.setRemoteDescription(
          new RTCSessionDescription(data.answer),
        );
        if (window.pendingP2PIce && window.pendingP2PIce[data.fromIp]) {
          window.pendingP2PIce[data.fromIp].forEach((c) =>
            p2pVoicePC.addIceCandidate(new RTCIceCandidate(c)).catch(() => {}),
          );
          delete window.pendingP2PIce[data.fromIp];
        }
      }
      appendChatUI(
        "System",
        "System",
        "P2P Voice verbunden! 🟢",
        null,
        null,
        Date.now(),
        0,
      );
      // FIX: Aktualisiert sofort das Profilbild beim Anrufer!
      updateCallUI();
    } else if (data.type === "p2p-ice") {
      if (p2pVoicePC && p2pVoicePC.remoteDescription) {
        p2pVoicePC
          .addIceCandidate(new RTCIceCandidate(data.candidate))
          .catch(() => {});
      } else {
        window.pendingP2PIce = window.pendingP2PIce || {};
        window.pendingP2PIce[data.fromIp] =
          window.pendingP2PIce[data.fromIp] || [];
        window.pendingP2PIce[data.fromIp].push(data.candidate);
      }
    } else if (data.type === "p2p-screen-ended" || data.type === "screen-share-ended") {
      
      // 1. P2P-Modus ID aufräumen
      if (data.streamId) {
        const el = document.getElementById(`media-${data.fromIp}-stream-${data.streamId}`);
        if (el) {
          el.srcObject = null;
          el.remove();
        }
      }
      
      // 2. PeerJS / Host-Modus ID aufräumen (Der normale Screenshare)
      const peerJsVideo = document.getElementById(`media-${data.fromIp}-video`);
      if (peerJsVideo) { 
        peerJsVideo.srcObject = null; 
        peerJsVideo.remove(); 
      }

      // --- NEU: DER ULTIMATIVE GHOST-VIDEO FIX ---
      // Wenn PeerJS den Haupt-Sprach-Stream versehentlich in ein <video> verwandelt hat,
      // bleibt dieses nach dem Screenshare eingefroren und gestretched im Grid hängen.
      // Wir stufen es hier gnadenlos wieder zu einem versteckten <audio>-Tag ab!
      const mainMedia = document.getElementById(`media-${data.fromIp}`);
      if (mainMedia && mainMedia.tagName === "VIDEO") {
        const stream = mainMedia.srcObject;
        mainMedia.srcObject = null;
        mainMedia.remove(); // Weg mit dem gefrorenen Video aus dem Grid!
        
        if (stream) {
          // Wir löschen die tote Videospur sicherheitshalber manuell aus dem Objekt
          stream.getVideoTracks().forEach(t => stream.removeTrack(t));
          // Wir rendern den Stream frisch -> Er wird nun automatisch als <audio> versteckt!
          renderRemoteStream(data.fromIp, stream);
        }
      }

      // 3. Alter Fallback für die trackIds
      if (data.trackIds) {
        data.trackIds.forEach((id) => {
          const elements = document.querySelectorAll(`video[id$="${id}"], audio[id$="${id}"]`);
          elements.forEach((el) => {
            el.srcObject = null;
            el.remove();
          });
        });
      }

      // 4. Grid ausblenden, falls keine Videos mehr da sind
      const grid = document.getElementById("call-grid-container");
      if (grid && grid.querySelectorAll("video").length === 0) {
        grid.style.display = "none";
      }

    } else if (data.type === "renegotiate") {
      const call = peerConnections[data.fromIp];
      if (call && call.peerConnection) {
        
        // FIX: Wir prüfen, ob der Lauscher schon existiert, um Doppelungen zu vermeiden!
        if (!call.peerConnection._hasCustomTrackListener) {
          call.peerConnection.addEventListener("track", (event) => {
            if (event.track.kind === "video") {
              const stream = event.streams && event.streams[0] ? event.streams[0] : new MediaStream([event.track]);
              renderRemoteStream(data.fromIp + "-video", stream);
            }
          });
          call.peerConnection._hasCustomTrackListener = true;
        }

        await call.peerConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
        const answer = await call.peerConnection.createAnswer();
        await call.peerConnection.setLocalDescription(answer);
        sendSignal(data.fromIp, {
          type: "renegotiate-answer",
          answer: answer,
          fromIp: myIp,
        });
      }
    } else if (data.type === "p2p-renegotiate") {
      console.log("📥 [P2P] Renegotiate Offer empfangen!");
      if (p2pVoicePC) {
        try {
          await p2pVoicePC.setRemoteDescription(new RTCSessionDescription(data.offer));
          const answer = await p2pVoicePC.createAnswer();
          await p2pVoicePC.setLocalDescription(answer);
          sendSignal(data.fromIp, {
            type: "p2p-renegotiate-answer",
            answer: answer,
          });
          console.log("📤 [P2P] Renegotiate Answer gesendet.");
        } catch (err) {
          console.error("❌ [P2P] Fehler bei Neuverhandlung:", err);
        }
      } else {
        console.warn("⚠️ [P2P] Renegotiate empfangen, aber VoicePC existiert nicht!");
      }

    } else if (data.type === "p2p-renegotiate-answer") {
      console.log("📥 [P2P] Renegotiate Answer empfangen!");
      if (p2pVoicePC) {
        try {
          await p2pVoicePC.setRemoteDescription(new RTCSessionDescription(data.answer));
          console.log("✅ [P2P] Screenshare/Neuverhandlung erfolgreich abgeschlossen!");
        } catch (err) {
          console.error("❌ [P2P] Fehler beim Setzen der Renegotiate-Answer:", err);
        }
      }

    } else if (data.type === "renegotiate-answer") {
      const call = peerConnections[data.fromIp];
      if (call && call.peerConnection) {
        await call.peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
      }

    } else if (data.type === "session-started") {
      const chatId = data.chatId === myIp ? data.fromIp : data.chatId;
      if (activeCallId !== chatId) {
        SoundEngine.startRing();
        pendingCallerIp = data.fromIp;
        window.pendingCallType = chatId.startsWith("grp_") ? "group" : "dm";
        window.pendingGroupId = chatId;

        const chatName = chatId.startsWith("grp_")
          ? groups.find((g) => g.id === chatId)?.name
          : contacts.find((c) => c.ip === data.fromIp)?.name || data.fromIp;
        document.getElementById("caller-name-text").innerText =
          `${data.name || data.fromIp} hat einen Voice-Raum in '${chatName}' eröffnet!`;
        document.getElementById("incoming-call-box").style.display = "block";
      }

    } else if (data.type === "mesh-announce") {
      const chatId = data.groupId === myIp ? data.fromIp : data.groupId;
      if (activeCallId === chatId) {
        if (myIp > data.fromIp) {
          startPeerCall(data.fromIp);
        } else {
          sendSignal(data.fromIp, {
            type: "mesh-announce",
            groupId: chatId,
            fromIp: myIp,
          });
        }
      }

    } else if (data.type === "hangup") {
      if (activeCallType === "dm") {
        SoundEngine.stopRing();
        appendChatUI(
          "System",
          "System",
          "Hat aufgelegt.",
          null,
          null,
          Date.now(),
          0
        );
        endCall(false);
      } else if (activeCallType === "group") {
        if (peerConnections[data.fromIp]) {
          appendChatUI(
            "System",
            "System",
            `👋 **${data.name || data.fromIp}** hat den Call verlassen.`,
            null,
            null,
            Date.now(),
            0
          );
          peerConnections[data.fromIp].close();
          delete peerConnections[data.fromIp];
          const media = document.getElementById(`media-${data.fromIp}`);
          if (media) media.remove();
          updateCallUI();

          if (Object.keys(peerConnections).length === 0) {
            appendChatUI(
              "System",
              "System",
              "Alle anderen haben aufgelegt. Call beendet.",
              null,
              null,
              Date.now(),
              0
            );
            endCall(false);
          }
        }
      }

    } else if (data.type === "edit-msg") {
      const targetId = data.groupId || data.fromIp;
      if (typeof DBManager !== "undefined") {
        DBManager.updateMessage(data.msgId, { text: data.newText });
      }

      let history = JSON.parse(localStorage.getItem(`chat_${targetId}`)) || [];
      let msg = history.find((m) => m.timestamp == data.msgId);
      if (msg) {
        msg.text = data.newText;
        localStorage.setItem(`chat_${targetId}`, JSON.stringify(history));
      }

      if (currentActiveIp === targetId) {
        const msgEl = document.getElementById(`msg-${data.msgId}`);
        if (msgEl) {
          const cDiv = msgEl.querySelector(".chat-content");
          if (cDiv) {
            cDiv.innerHTML =
              typeof parseMarkdown === "function"
                ? parseMarkdown(data.newText)
                : data.newText;
            cDiv.classList.add("edited");
            cDiv.setAttribute(
              "data-raw-text",
              encodeURIComponent(data.newText)
            );
          }
        }
      }

    } else if (data.type === "pin-msg") {
      const targetId = data.groupId || data.fromIp;
      DBManager.updateMessage(data.msgId, { isPinned: data.isPinned });

      const actionStr = data.isPinned ? "angepinnt" : "abgepinnt";
      const sysMsg = `📌 **${senderName}** hat eine Nachricht ${actionStr}.`;
      saveMessageLocally(
        targetId,
        "System",
        "System",
        sysMsg,
        null,
        null,
        0,
        Date.now()
      );

      if (currentActiveIp === targetId) {
        appendChatUI("System", "System", sysMsg, null, null, Date.now(), 0);
        const msgEl = document.getElementById(`msg-${data.msgId}`);
        if (msgEl) {
          const hDiv = msgEl.querySelector(".chat-header");
          if (data.isPinned) {
            if (hDiv && !hDiv.innerHTML.includes("📌")) {
              hDiv.innerHTML += ' <span class="pin-icon" style="font-size:12px;" title="Angepinnt">📌</span>';
            }
          } else {
            const pIcon = hDiv.querySelector(".pin-icon");
            if (pIcon) pIcon.remove();
          }
        }
      }
    }
  } catch (e) {
    console.error("Empfangsfehler:", e);
  }
}
// --- NEUE START/STOP LOGIK FÜR SCREEN SHARE ---

// --- PEERJS SCREEN SHARE LOGIK ---
// --- PEERJS & P2P SCREEN SHARE LOGIK ---
async function toggleScreenShare() {
  if (screenStream) {
    stopScreenShare();
    return;
  }
  try {
    console.log("🖥️ Fordere Screenshare von Windows/Electron an...");
    screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: { cursor: "always" },
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      },
    });

    // NEU: DER ULTIMATIVE AUDIO-CHECK!
    const audioTracks = screenStream.getAudioTracks();
    console.log(
      `🔊 Screenshare Audio-Tracks von Windows erhalten: ${audioTracks.length}`,
    );
    if (audioTracks.length === 0) {
      console.warn(
        "⚠️ ALARM: Dein System hat KEIN Audio für den Screenshare freigegeben! Hast du beim Auswählen des Fensters den Haken bei 'Systemaudio teilen' gesetzt?",
      );
    }

    // ... (Hier geht dein normaler Code mit localVid weiter) ...
    let localVid = document.createElement("video");
    localVid.id = "vid-local-screen";
    localVid.srcObject = screenStream;
    localVid.autoplay = true;
    localVid.muted = true;
    localVid.style.flex = "1 1 45%";
    localVid.style.minWidth = "300px";
    localVid.style.maxHeight = "50vh";
    localVid.style.objectFit = "contain";
    localVid.style.borderRadius = "8px";
    localVid.style.border = "2px solid #3ba55d";
    localVid.title = "Doppelklick für Vollbild";
    localVid.ondblclick = () => {
      if (!document.fullscreenElement)
        localVid.requestFullscreen().catch(() => {});
      else document.exitFullscreen();
    };

    document.getElementById("call-grid-container").appendChild(localVid);
    document.getElementById("call-grid-container").style.display = "flex";

    const screenBtn = document.getElementById("screen-btn");
    screenBtn.innerHTML = "⏹️ Screen Share stoppen";
    screenBtn.style.background = "#ed4245";

    screenStream.getVideoTracks()[0].onended = () => {
      stopScreenShare();
    };



    // WEG 1: PeerJS Modus (Server)
    // WEG 1: PeerJS Modus (Server)
    if (currentMode !== "p2p") {
      for (let ip in peerConnections) {
        const pc = peerConnections[ip].peerConnection;
        // FIX 2: Wir loopen durch ALLE Spuren (Video + Audio) und packen sie ins Paket
        screenStream
          .getTracks()
          .forEach((track) => pc.addTrack(track, screenStream));

        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        sendSignal(ip, { type: "renegotiate", offer: offer, fromIp: myIp });
      }
    }

    // WEG 2: Nativer P2P Modus (Offline LAN)
    if (currentMode === "p2p" && p2pVoicePC && activeCallId) {
      screenStream
        .getTracks()
        .forEach((track) => p2pVoicePC.addTrack(track, screenStream));
      const offer = await p2pVoicePC.createOffer();
      await p2pVoicePC.setLocalDescription(offer);
      sendSignal(activeCallId, {
        type: "p2p-renegotiate",
        offer: offer,
        fromIp: myIp,
      });
    }
  } catch (e) {
    console.warn("Screen Share abgebrochen:", e);
  }
}

async function stopScreenShare() {
  if (!screenStream) return;

  // FIX 3: Wir merken uns die IDs von Video- UND Audio-Spur zum sauberen Zerstören
  const screenTrackIds = screenStream.getTracks().map((t) => t.id);
  const savedStreamId = screenStream.id; // <--- HIER: Die ID wird in Sicherheit gebracht!

  screenStream.getTracks().forEach((t) => t.stop());
  screenStream = null; // Ab hier ist die Variable tot.

  const localVid = document.getElementById("vid-local-screen");
  if (localVid) localVid.remove();

  const grid = document.getElementById("call-grid-container");
  if (grid.querySelectorAll("video").length === 0) grid.style.display = "none";

  const screenBtn = document.getElementById("screen-btn");
  if (screenBtn) {
    screenBtn.innerHTML = "🖥️ Screen Share";
    screenBtn.style.background = "var(--vula-primary)";
  }

  // WEG 1: PeerJS Modus aufräumen
  // WEG 1: PeerJS Modus aufräumen
  if (currentMode !== "p2p") {
    for (let ip in peerConnections) {
      const pc = peerConnections[ip].peerConnection;
      if (!pc) continue;

      let trackRemoved = false;
      pc.getSenders().forEach((sender) => {
        if (sender.track && screenTrackIds.includes(sender.track.id)) {
          pc.removeTrack(sender);
          trackRemoved = true;
        }
      });

      if (trackRemoved) {
        sendSignal(ip, {
          type: "screen-share-ended",
          fromIp: myIp,
          trackIds: screenTrackIds,
          streamId: savedStreamId, // <--- HIER: Wir nutzen die gerettete ID!
        });
        try {
          const offer = await pc.createOffer();
          await pc.setLocalDescription(offer);
          sendSignal(ip, { type: "renegotiate", offer: offer, fromIp: myIp });
        } catch (e) {}
      }
    }
  }

  // WEG 2: Nativer P2P Modus aufräumen
  if (currentMode === "p2p" && p2pVoicePC && activeCallId) {
    let trackRemoved = false;
    p2pVoicePC.getSenders().forEach((sender) => {
      if (sender.track && screenTrackIds.includes(sender.track.id)) {
        p2pVoicePC.removeTrack(sender);
        trackRemoved = true;
      }
    });

    if (trackRemoved) {
      sendSignal(activeCallId, {
        type: "p2p-screen-ended",
        fromIp: myIp,
        trackIds: screenTrackIds,
        streamId: savedStreamId, // <--- HIER: Wir nutzen die gerettete ID!
      });
      try {
        const offer = await p2pVoicePC.createOffer();
        await p2pVoicePC.setLocalDescription(offer);
        sendSignal(activeCallId, {
          type: "p2p-renegotiate",
          offer: offer,
          fromIp: myIp,
        });
      } catch (e) {}
    }
  }
}

// --- MANUELLES ANNEHMEN DES P2P CALLS (INKL. ICE-QUEUE FIX) ---
// --- MANUELLES ANNEHMEN DES P2P CALLS ---
window.answerP2PVoiceCall = async function (callerIp, offer) {
  SoundEngine.stopRing();
  document.getElementById("incoming-call-box").style.display = "none";

  await initLocalMedia(false);
  activeCallId = callerIp;
  activeCallType = "dm";

  document.getElementById("active-call-banner").style.display = "flex";
  document.getElementById("active-call-name").innerText =
    contacts.find((c) => c.ip === callerIp)?.name || callerIp;
  document.getElementById("call-btn").style.display = "none";
  document.getElementById("screen-btn").style.display = "block";
  document.getElementById("hangup-btn").style.display = "block";

  p2pVoicePC = new RTCPeerConnection({ iceServers: getIceServers() });

  p2pVoicePC.onicecandidate = (e) => {
    if (e.candidate)
      sendSignal(callerIp, { type: "p2p-ice", candidate: e.candidate });
  };

  p2pVoicePC.ontrack = (event) => {
    console.log(`🔥 [P2P] Track angekommen: ${event.track.kind}`);
    const stream = event.streams[0];
    if (!stream) return;

    const targetIpVar = typeof targetIp !== "undefined" ? targetIp : callerIp;
    // Wir bündeln die Spuren sauber auf Stream-Ebene (Mikro = Box A, Screen = Box B)
    const elementId = targetIpVar + "-stream-" + stream.id;
    const existingEl = document.getElementById(`media-${elementId}`);

    if (existingEl) {
      // Falls der Audio-Track zuerst da war und jetzt das Video kommt, upgraden wir das Element!
      if (event.track.kind === "video" && existingEl.tagName === "AUDIO") {
        existingEl.remove();
        renderRemoteStream(elementId, stream);
      }
      return;
    }
    renderRemoteStream(elementId, stream);
  };

  // FIX 3: Die bewährte Reihenfolge für synthetisches Audio
  // 1. ERST die eigenen Spuren anhängen (Macht die Leitung bidirektional)
  localStream
    .getTracks()
    .forEach((track) => p2pVoicePC.addTrack(track, localStream));

  // 2. DANN das Angebot verarbeiten
  await p2pVoicePC.setRemoteDescription(new RTCSessionDescription(offer));

  if (window.pendingP2PIce && window.pendingP2PIce[callerIp]) {
    window.pendingP2PIce[callerIp].forEach((c) =>
      p2pVoicePC.addIceCandidate(new RTCIceCandidate(c)).catch(() => {}),
    );
    delete window.pendingP2PIce[callerIp];
  }

  const answer = await p2pVoicePC.createAnswer();
  await p2pVoicePC.setLocalDescription(answer);

  sendSignal(callerIp, { type: "p2p-answer", answer: answer, fromIp: myIp });
  updateCallUI();

  // --- DER UNSICHTBARE WORKAROUND (FAKE SCREENSHARE) ---
  // Wir warten 1,5 Sekunden, bis der Anruf steht, und zwingen WebRTC dann zu einer Neuverhandlung.
  // Das simuliert exakt den technischen Effekt eines Screenshares, rettet kaputtes Audio und passiert 100% unsichtbar!
  setTimeout(async () => {
    if (p2pVoicePC && p2pVoicePC.signalingState === "stable") {
      try {
        const dummyOffer = await p2pVoicePC.createOffer();
        await p2pVoicePC.setLocalDescription(dummyOffer);
        sendSignal(callerIp, {
          type: "p2p-renegotiate",
          offer: dummyOffer,
          fromIp: myIp,
        });
        console.log("🛠️ Workaround: Unsichtbare Neuverhandlung gefeuert!");
      } catch (e) {
        console.warn("Workaround fehlgeschlagen:", e);
      }
    }
  }, 500);
};
