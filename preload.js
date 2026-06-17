const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    // --- SENDEN (Frontend -> Backend) ---
    startLocalServer: (pin) => ipcRenderer.send('start-local-server', pin),
    startTunnel: () => ipcRenderer.send('start-tunnel'),
    openHostFolder: () => ipcRenderer.send('open-host-folder'),
    clearHostFolder: () => ipcRenderer.send('clear-host-folder'),
    toggleAutoSave: (isEnabled) => ipcRenderer.send('toggle-auto-save-large', isEnabled),
    
    // --- NEU: P2P & NETZWERK BEFEHLE ---
    getNetworkIps: () => ipcRenderer.invoke('get-network-ips'),
    fixFirewall: () => ipcRenderer.send('fix-firewall'),
    scanLan: (baseIp) => ipcRenderer.send('scan-lan', baseIp),
    startP2PServer: () => ipcRenderer.send('start-p2p-server'),
    sendP2PMessage: (ip, data) => ipcRenderer.send('send-p2p-message', ip, data),

    // --- EMPFANGEN (Backend -> Frontend) ---
    onTunnelReady: (callback) => ipcRenderer.on('tunnel-ready', (_event, url) => callback(url)),
    onTunnelError: (callback) => ipcRenderer.on('tunnel-error', (_event, msg) => callback(msg)),
    
    // --- NEU: P2P & NETZWERK ANTWORTEN ---
    onFirewallResult: (callback) => ipcRenderer.on('firewall-result', (_event, success) => callback(success)),
    onScanResult: (callback) => ipcRenderer.on('scan-result', (_event, ip) => callback(ip)),
    onP2PMessage: (callback) => ipcRenderer.on('p2p-message', (_event, data) => callback(data)),

    // --- SCHLÜSSEL-VERWALTUNG ---
    savePrivateKey: (keyStr) => ipcRenderer.invoke('save-private-key', keyStr),
    loadPrivateKey: () => ipcRenderer.invoke('load-private-key')
});