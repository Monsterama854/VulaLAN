const CryptoManager = {
  myKeyPair: null,

  bufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode.apply(
        null,
        bytes.subarray(i, i + chunkSize),
      );
    }
    return window.btoa(binary);
  },

  base64ToBuffer(base64) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
  },

  async init() {
    if (!window.crypto || !window.crypto.subtle) {
      alert("⚠️ Sicherheits-Sperre!\n\nVerschlüsselung blockiert.");
      throw new Error("WebCrypto API blockiert");
    }

    // Sichere Weiche: Prüft, ob wir in Electron mit aktiver Bridge laufen
    const isElectronEnv = !!(window.api && window.api.loadPrivateKey);

    let savedPriv = null;
    if (isElectronEnv) {
      // ELECTRON-MODUS: Sicher über das OS-Backend laden
      savedPriv = await window.api.loadPrivateKey();
    } else {
      // BROWSER-MODUS: Fallback auf LocalStorage
      savedPriv = localStorage.getItem("vula_privKey");
    }

    const savedPub = localStorage.getItem("vula_pubKey");

    if (savedPriv && savedPub) {
      try {
        const privJwk = JSON.parse(savedPriv);
        const pubJwk = JSON.parse(savedPub);

        const privateKey = await window.crypto.subtle.importKey(
          "jwk",
          privJwk,
          { name: "RSA-OAEP", hash: "SHA-256" },
          true,
          ["decrypt"],
        );
        const publicKey = await window.crypto.subtle.importKey(
          "jwk",
          pubJwk,
          { name: "RSA-OAEP", hash: "SHA-256" },
          true,
          ["encrypt"],
        );

        this.myKeyPair = { publicKey, privateKey };
        return;
      } catch (e) {
        console.warn(
          "Schlüssel beschädigt oder inkompatibel. Generiere neue...",
        );
      }
    }

    // Wenn keine Schlüssel existieren: Neue RSA-2048 Schlüssel generieren
    this.myKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
      },
      true,
      ["encrypt", "decrypt"],
    );

    // Schlüssel für den Export vorbereiten
    const expPriv = await window.crypto.subtle.exportKey(
      "jwk",
      this.myKeyPair.privateKey,
    );
    const expPub = await window.crypto.subtle.exportKey(
      "jwk",
      this.myKeyPair.publicKey,
    );

    if (isElectronEnv) {
      // Verschlüsselt im Betriebssystem ablegen
      await window.api.savePrivateKey(JSON.stringify(expPriv));
      // Altlasten aus dem unverschlüsselten LocalStorage fegen
      localStorage.removeItem("vula_privKey");
    } else {
      localStorage.setItem("vula_privKey", JSON.stringify(expPriv));
    }

    localStorage.setItem("vula_pubKey", JSON.stringify(expPub));
  },

  async getMyPublicKey() {
    return await window.crypto.subtle.exportKey(
      "jwk",
      this.myKeyPair.publicKey,
    );
  },

  async encryptPayload(dataString, partnerJwk) {
    if (!partnerJwk) return dataString;

    const aesKey = await window.crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt"],
    );

    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encodedData = new TextEncoder().encode(dataString);

    const encryptedData = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      aesKey,
      encodedData,
    );

    const partnerPubKey = await window.crypto.subtle.importKey(
      "jwk",
      partnerJwk,
      { name: "RSA-OAEP", hash: "SHA-256" },
      true,
      ["encrypt"],
    );

    const rawAesKey = await window.crypto.subtle.exportKey("raw", aesKey);
    const encryptedAesKey = await window.crypto.subtle.encrypt(
      { name: "RSA-OAEP" },
      partnerPubKey,
      rawAesKey,
    );

    return {
      eData: this.bufferToBase64(encryptedData),
      iv: this.bufferToBase64(iv),
      eKey: this.bufferToBase64(encryptedAesKey),
    };
  },

  async decryptPayload(payload) {
    if (typeof payload === "string") return payload;
    try {
      const encryptedAesKey = this.base64ToBuffer(payload.eKey);
      const rawAesKey = await window.crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        this.myKeyPair.privateKey,
        encryptedAesKey,
      );

      const aesKey = await window.crypto.subtle.importKey(
        "raw",
        rawAesKey,
        { name: "AES-GCM" },
        true,
        ["decrypt"],
      );

      const iv = this.base64ToBuffer(payload.iv);
      const encryptedData = this.base64ToBuffer(payload.eData);

      const decryptedData = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        aesKey,
        encryptedData,
      );

      return new TextDecoder().decode(decryptedData);
    } catch (e) {
      return JSON.stringify({ text: "❌ [Verschlüsselungsfehler]" });
    }
  },
};
