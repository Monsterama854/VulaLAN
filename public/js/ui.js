const translations = {
  de: {
    settings_net: "Netzwerk & Sicherheit",
    settings_stun: "STUN-Server für Internet-Calls erlauben",
    settings_stun_desc:
      "Muss für VPN/Tunnel an sein. Im reinen LAN ausschalten für 100% Offline-Benutzung.",
    settings_pin_force: "Server-PIN erzwingen (Host)",
    settings_pin_desc: "Ausschalten, um im Intranet ohne Passwort beizutreten.",
    settings_auto_save:
      "⚠️ Große Dateien (>15MB) ohne Popup sofort auf dem Server speichern",
    btn_tunnel: "🌍 Ins Internet freigeben (Tunnel)",

    warn_global_unencrypted:
      "⚠️ **WICHTIG:** Der Global Chat ist *nicht* Ende-zu-Ende verschlüsselt. Der Server speichert den Verlauf für alle Kollegen. Bitte teile hier keine sensiblen Daten!",
    placeholder_global: "Öffentliche Nachricht schreiben...",

    btn_open_folder: "📂 Ordner öffnen",
    btn_clear_folder: "🗑️ Dateien löschen",
    settings_vol: "Lautstärke:",
    settings_adv: "Erweiterte Sprachverarbeitung",
    settings_noise: "Hintergrundgeräusche unterdrücken",
    settings_noise_desc: "Filtert Rauschen und Tastatur-Tippen heraus",
    settings_echo: "Echo unterdrücken",
    settings_echo_desc: "Verhindert, dass dein Mikrofon die Boxen aufnimmt",
    settings_agc: "Automatische Verstärkung",
    settings_agc_desc: "Pegelt deine Mikrofonlautstärke automatisch (AGC)",
    title_pinned: "📌 Angepinnte Nachrichten",
    title_search_results: "🔍 Suchergebnisse",

    title_change_avatar: "Bild ändern",
    title_change_name: "Name ändern",
    title_mute: "Mikrofon stummschalten",
    title_deaf: "Audio stummschalten",
    title_theme: "Design wechseln",
    title_settings: "Einstellungen",

    title_search: "Suchen",
    btn_wb: "🖌️ Whiteboard",
    btn_voice: "📞 Voice",
    btn_screen: "🖥️ Screen Share",

    badge_e2e: "🔒 E2EE Aktiv",
    title_e2e: "Dieser Chat ist Ende-zu-Ende verschlüsselt",
    placeholder_chat: "Sichere Nachricht schreiben...",
    placeholder_search: "Suchen...",
    btn_members: "👥 Mitglieder",
    btn_pins: "📌 Pins",
    btn_hangup: "Auflegen",
    title_file: "Datei anhängen",
    title_record: "Gedrückt halten für Sprachnachricht",

    start_choose_mode: "Wähle deinen Netzwerk-Modus",
    btn_connect_server: "🌐 Mit Server verbinden",
    start_desc_client: "(Firma / Web)",
    btn_host_server: "🏠 Eigenen Server hosten",
    start_desc_host: "(Zuhause)",
    btn_p2p: "🔗 Direktverbindung",
    start_desc_p2p: "(P2P LAN)",
    start_network_adapter: "Netzwerk-Adapter (Für P2P & Host):",

    app_title: "💬 VulaLAN MEGA-EDITION",
    tab_groups: "Gruppenchats",
    tab_dms: "Direktnachrichten",
    settings_title: "Audio-Einstellungen",
    settings_mic: "Mikrofon:",
    settings_speaker: "Lautsprecher:",

    sys_mic_denied: "⚠️ Mikrofon-Zugriff verweigert. Du bist stumm.",
    sys_call_ringing: "Klingelt...",
    sys_call_accepted: "Anruf angenommen.",
    sys_call_declined: "Anruf abgelehnt.",
    sys_upload_success: "🚀 Datei hochgeladen!",

    alert_no_ip: "Bitte eine IP eingeben!",
    alert_group_name: "Bitte gib einen Namen ein!",

    app_mega_edition: "MEGA-EDITION",
    server_ip_prompt: "🖥️ Server-IP oder Domain eingeben:",
    placeholder_server_ip: "vulalan.azubis.local",
    btn_connect: "Verbinden",
    btn_cancel: "Abbrechen",
    btn_save_image: "⬇️ Bild speichern",
    title_edit_profile: "✏️ Profil bearbeiten",
    placeholder_username: "Dein Benutzername",
    placeholder_bio: "Über mich (Bio)...",
    btn_save_profile: "Profil Speichern",
    profile_name: "Name",
    profile_id: "ID:",
    title_copy_ip: "IP kopieren",
    profile_ip: "IP:",
    profile_about_me: "ÜBER MICH",
    btn_send_dm: "Direktnachricht senden",
    settings_language: "Sprache / Language:",
    lang_de: "Deutsch 🇩🇪",
    lang_en: "English 🇬🇧",
    save_whiteboard: "💾 Whiteboard speichern",
    wb_save_prompt:
      "Unter welchem Namen soll das Whiteboard gespeichert werden?",
    btn_save: "Speichern",
    Insert_text: "🔤 Text einfügen",
    placeholder_your_text: "Dein Text...",
    Place_on_whiteboard: "Auf Whiteboard platzieren",
    title_alert: "⚠️ Hinweis",
    btn_ok: "OK",
    title_create_group: "👥 Neue Gruppe erstellen",
    placeholder_group_name: "Gruppenname (z.B. Zocker-Lounge)",
    group_select_members: "Teilnehmer auswählen:",
    btn_create_group: "Gruppe erstellen",
    title_edit_group: "⚙️ Gruppe bearbeiten",
    group_edit_members: "Teilnehmer hinzufügen/entfernen:",
    btn_save_changes: "Änderungen speichern",
    wb_req_clear: "Jemand möchte leeren...",
    btn_approve: "Zustimmen",
    btn_decline: "Ablehnen",
    wb_req_load: "Jemand möchte laden...",
    title_color: "Farbe",
    title_size: "Größe",
    wb_tool_pen: "✏️ Stift",
    wb_tool_text: "🔤 Text",
    title_save_local: "Lokal auf SSD speichern",
    btn_save_local: "💾 Speichern",
    title_load_saved: "Gespeicherte laden",
    btn_archive: "📁 Archiv",
    btn_clear: "🗑️ Leeren",
    btn_close: "❌ Schließen",
    secure_web_edition: "Secure Web Edition",
    p2p_connection: "P2P VERBINDUNG",
    btn_scan: "📡 Scan",
    title_fix_firewall: "Behebt Probleme bei eingehenden Verbindungen",
    btn_firewall_fix: "🛡️ Firewall Fix",
    placeholder_ip: "192.168.x.x",
    local_server_running: "LOKALER SERVER LÄUFT",
    title_share_ip: "Gib diese IP an deine Freunde weiter!",
    incoming_call: "📞 Eingehender Anruf!",
    call_from: "Von: ...",
    btn_accept: "Annehmen",
    title_new_group: "Neue Gruppe erstellen",
    title_restore_chats: "Alte Chats aus der Datenbank wiederherstellen",
    title_cleanup_contacts: "Offline-Kontakte bereinigen",
    label_id: "ID: ",
    active_call_with: "Im Gespräch mit ",
    chat_nobody: "Niemand",
    title_sync: "Nachrichtenverlauf abgleichen",
    btn_sync: "🔄 Sync",
    title_pins: "Angepinnte Nachrichten",
    title_mute_all: "Alle stummschalten",
    title_fullscreen: "Vollbild",
    title_remove_file: "Datei entfernen",
    title_attach_file: "Datei anhängen",
    title_record_audio: "Gedrückt halten für Sprachnachricht",
    title_encrypt_large_files:
      "Große Dateien (>15MB) verschlüsselt auf den Server laden?",
    label_e2ee: "🔒 E2EE",
    label_members: "MITGLIEDER — ",
    lan_partner_search: "Lokales Netzwerk nach Partnern durchsuchen",

    ctx_save_img: "Bild speichern",
    ctx_open_img: "Groß anzeigen",
    ctx_edit: "Nachricht bearbeiten",
    ctx_reply: "Antworten",
    ctx_forward: "Weiterleiten",
    ctx_copy: "Text kopieren",
    ctx_pin: "Nachricht anpinnen",
    ctx_unread: "Als ungelesen markieren",
    ctx_copy_link: "Nachrichtenlink kopieren",
    ctx_tts: "Nachricht vorlesen",
    ctx_delete: "Nachricht löschen",
    ctx_mark_read: "Als gelesen markieren",
    ctx_profile: "Profil ansehen",
    ctx_copy_ip: "IP kopieren",
    ctx_copy_grp_id: "Gruppen-ID kopieren",
    ctx_call: "Anruf starten",
    ctx_close_dm: "Direktnachricht schließen",
    ctx_block: "Blockieren",
    ctx_unblock: "Blockierung aufheben",
    ctx_leave_group: "Gruppe verlassen",

    msg_file_uploaded_enc: "🚀 Datei hochgeladen & verschlüsselt!",
    msg_file_uploaded_raw:
      "🚀 Datei hochgeladen (High-Speed / Unverschlüsselt)!",
    btn_secure_download: "Sicher herunterladen",
    btn_download: "laden",

    prompt_clear_files:
      "⚠️ Wirklich alle hochgeladenen Server-Dateien löschen? (Die Chat-Nachrichten bleiben erhalten, aber alte Download-Links werden unbrauchbar!)",
    alert_files_cleared: "Dateien wurden restlos vom Server gelöscht!",

    sys_sync_grp: "Fordere Gruppen-Archiv an...",
    sys_sync_dm: "Fordere fehlende Nachrichten an...",
    sys_sync_no_member:
      "⚠️ Kein anderes Gruppenmitglied online für einen Sync. Warte kurz.",
    sys_sync_success: "✅ Sync erfolgreich:",
    sys_sync_msgs_loaded: "Nachrichten geladen!",
    sys_sync_done_none: "ℹ️ Sync beendet. Keine neuen Nachrichten gefunden.",
    sys_sync_fail_enc:
      "⚠️ Sync fehlgeschlagen (Verschlüsselungsfehler). Bitte etwas warten und manuell oben auf 'Sync' klicken.",

    sys_fw_req:
      "🛡️ Fordere Windows-Adminrechte an... Bitte bestätige das gelb-blaue Schild (UAC)!",
    sys_fw_ok:
      "✅ Firewall-Regel erfolgreich hinzugefügt! Eingehende Verbindungen sind möglich.",
    sys_fw_fail: "❌ Firewall-Anpassung wurde abgebrochen.",

    sys_msg_queued: "🕒 Nachricht an {ip} vorgemerkt (Partner offline).",
    sys_queue_flushed:
      "📤 **{count} wartende Aktion(en)** wurden soeben automatisch zugestellt!",

    lbl_members_count: "Mitglieder",
    lbl_time_uhr: "Uhr",

    date_today: "Heute",
    date_yesterday: "Gestern",
    msg_forwarded: "[Weitergeleitet]",
    title_forward: "↪️ Nachricht weiterleiten",
    btn_send: "Senden",
    btn_sent_ok: "Gesendet ✓",

    sys_lan_scan: "🔍 Starte lautlosen LAN-Scan im Subnetz {ip}0/24...",
    sys_p2p_connected: "✅ Erfolgreich mit {ip} verbunden!",
    sys_p2p_exists: "⚠️ Bereits mit {ip} verbunden!",
    sys_p2p_err:
      "❌ Fehler: Konnte nicht mit {ip} verbinden. Port 8181 blockiert?",
    sys_p2p_invalid: "❌ Ungültige IP.",
    sys_p2p_no_ip: "❌ Bitte eine IP eingeben!",
    sys_p2p_no_ipv4:
      "⚠️ Auto-Scan abgebrochen: Keine gültige IPv4-Netzwerkadresse gefunden.",

    tt_stun_active:
      "STUN: stun.cloudflare.com:3478\nSTUN: stun.services.mozilla.com:3478",
    tt_stun_offline: "STUN ist komplett deaktiviert (100% Offline-LAN Modus).",
    tt_vpn_p2p: "WebSocket-Mesh auf Port 8181",
    tt_vpn_cf: "VPN-Tunnel: {url}",
    tt_vpn_local: "Lokal: {url}",
    tt_vpn_lan: "Lokales Netzwerk: {url}",
    tt_vpn_none: "Keine Server-Verbindung.",

    settings_lazy_load: "Nachrichten schrittweise laden (50er Batches)",
    settings_lazy_desc:
      "Verhindert winzige Scrollbalken bei langen Chatverläufen",

    placeholder_no_chat: "Kein Chat ausgewählt...",
    alert_select_chat: "Bitte wähle links einen Chat aus!",
    settings_mic_vol: "Mikrofon-Pegel (Eingabe):",

    privacy_title: "Datenschutz & Transparenz",
    privacy_intro_bold: "VulaLAN ist nach dem Prinzip 'Privacy by Design' entwickelt.",
    privacy_p1_title: "Keine eigenen zentralen Server:",
    privacy_p1_desc: "Der Entwickler betreibt keine eigenen Server und sammelt keinerlei Daten, Chatverläufe oder IP-Adressen von dir.",
    privacy_p2_title: "Lokale Speicherung:",
    privacy_p2_desc: "Alle deine Nachrichten, Bilder und Kontakte werden ausschließlich lokal auf deinem eigenen Gerät (IndexedDB) gespeichert.",
    privacy_p3_title: "Ende-zu-Ende Verschlüsselung (E2EE):",
    privacy_p3_desc: "Direktnachrichten und P2P-Dateiübertragungen werden lokal verschlüsselt. Niemand – nicht einmal der Host des Netzwerks – kann diese Daten mitlesen.",
    privacy_p4_title: "Ausnahme 'Global Chat':",
    privacy_p4_desc: "Nachrichten im öffentlichen 'Global Chat' werden unverschlüsselt auf dem lokalen Host-Server gespeichert, um den Verlauf bereitzustellen.",
    privacy_p5_title: "Drittanbieter (STUN & Tunnel):",
    privacy_p5_desc: "Um Internetverbindungen aufzubauen, nutzt die App öffentliche STUN-Server (z. B. Mozilla, Cloudflare) oder Tunneldienste. Diese sehen systembedingt deine öffentliche IP-Adresse, können deine verschlüsselten Chats aber nicht lesen. Im reinen LAN-Modus (STUN deaktiviert) entfällt dies komplett.",
    btn_privacy_policy: "📄 Datenschutzerklärung anzeigen",

    start_auto_login: "Immer automatisch in diesem Modus starten",
    settings_autostart: "Auto-Start aktivieren",
    settings_autostart_desc:
      "Überspringt das Startmenü und lädt sofort den letzten Modus.",
  },
  en: {
    settings_mic_vol: "Microphone Gain (Input):",
    sys_msg_queued: "🕒 Message to {ip} queued (Partner offline).",
    sys_queue_flushed:
      "📤 **{count} pending action(s)** were just automatically delivered!",

    start_auto_login: "Always auto-start in this mode",
    settings_autostart: "Enable Auto-Start",
    settings_autostart_desc:
      "Skips the launcher and directly loads the last used mode.",

    privacy_title: "Privacy & Transparency",
    privacy_intro_bold: "VulaLAN is built on the principle of 'Privacy by Design'.",
    privacy_p1_title: "No Proprietary Central Servers:",
    privacy_p1_desc: "The developer does not operate any central servers and does not collect any of your data, chat histories, or IP addresses.",
    privacy_p2_title: "Local Storage:",
    privacy_p2_desc: "All your messages, images, and contacts are stored exclusively locally on your own device.",
    privacy_p3_title: "End-to-End Encryption (E2EE):",
    privacy_p3_desc: "Direct messages and P2P file transfers are encrypted locally. No one – not even the network host – can read this data.",
    privacy_p4_title: "Exception 'Global Chat':",
    privacy_p4_desc: "Messages in the public 'Global Chat' are stored unencrypted on the local host server to provide chat history for new users.",
    privacy_p5_title: "Third-Party Services (STUN & Tunnels):",
    privacy_p5_desc: "To establish internet connections, the app uses public STUN servers (e.g., Mozilla, Cloudflare) or tunneling services. By design, they see your public IP address but cannot read your encrypted chats. In pure LAN mode (STUN disabled), this does not apply.",
    btn_privacy_policy: "📄 Show Privacy Policy",

    settings_lazy_load: "Load messages in batches of 50",
    settings_lazy_desc: "Prevents tiny scrollbars in long chat histories",

    sys_lan_scan: "🔍 Starting silent LAN scan in subnet {ip}0/24...",
    sys_p2p_connected: "✅ Successfully connected to {ip}!",
    sys_p2p_exists: "⚠️ Already connected to {ip}!",
    sys_p2p_err: "❌ Error: Could not connect to {ip}. Port 8181 blocked?",
    sys_p2p_invalid: "❌ Invalid IP.",
    sys_p2p_no_ip: "❌ Please enter an IP!",
    sys_p2p_no_ipv4:
      "⚠️ Auto-scan aborted: No valid IPv4 network address found.",

    tt_stun_active:
      "STUN: stun.cloudflare.com:3478\nSTUN: stun.services.mozilla.com:3478",
    tt_stun_offline: "STUN is completely disabled (100% Offline-LAN mode).",
    tt_vpn_p2p: "WebSocket-Mesh on Port 8181",
    tt_vpn_cf: "VPN-Tunnel: {url}",
    tt_vpn_local: "Local: {url}",
    tt_vpn_lan: "Local Network: {url}",
    tt_vpn_none: "No server connection.",

    date_today: "Today",
    date_yesterday: "Yesterday",
    msg_forwarded: "[Forwarded]",
    title_forward: "↪️ Forward Message",
    btn_send: "Send",
    btn_sent_ok: "Sent ✓",

    lbl_members_count: "Members",
    lbl_time_uhr: " ", // Bleibt leer, da im Englischen nur "22:09" steht

    ctx_save_img: "Save image",
    ctx_open_img: "View full size",
    ctx_edit: "Edit message",
    ctx_reply: "Reply",
    ctx_forward: "Forward",
    ctx_copy: "Copy text",
    ctx_pin: "Pin message",
    ctx_unread: "Mark as unread",
    ctx_copy_link: "Copy message link",
    ctx_tts: "Read aloud",
    ctx_delete: "Delete message",
    ctx_mark_read: "Mark as read",
    ctx_profile: "View profile",
    ctx_copy_ip: "Copy IP",
    ctx_copy_grp_id: "Copy Group-ID",
    ctx_call: "Start call",
    ctx_close_dm: "Close direct message",
    ctx_block: "Block user",
    ctx_unblock: "Unblock user",
    ctx_leave_group: "Leave group",

    msg_file_uploaded_enc: "🚀 File uploaded & encrypted!",
    msg_file_uploaded_raw: "🚀 File uploaded (High-Speed / Unencrypted)!",
    btn_secure_download: "Secure download",
    btn_download: "download",

    prompt_clear_files:
      "⚠️ Really delete all uploaded server files? (Chat messages will remain, but old download links will break!)",
    alert_files_cleared: "Files have been completely removed from the server!",

    sys_sync_grp: "Requesting group archive...",
    sys_sync_dm: "Requesting missing messages...",
    sys_sync_no_member:
      "⚠️ No other group member online for a sync. Please wait.",
    sys_sync_success: "✅ Sync successful:",
    sys_sync_msgs_loaded: "messages loaded!",
    sys_sync_done_none: "ℹ️ Sync finished. No new messages found.",
    sys_sync_fail_enc:
      "⚠️ Sync failed (encryption error). Please wait a moment and click 'Sync' manually.",

    sys_fw_req:
      "🛡️ Requesting Windows admin rights... Please confirm the UAC prompt!",
    sys_fw_ok:
      "✅ Firewall rule successfully added! Incoming connections are now possible.",
    sys_fw_fail: "❌ Firewall adjustment was cancelled.",

    placeholder_no_chat: "No chat selected...",
    alert_select_chat: "Please select a chat on the left!",
    settings_net: "Network & Security",
    settings_stun: "Allow STUN-Server for internet calls",
    settings_stun_desc:
      "Must be enabled for VPN-connections/tunneling. Turn off in LAN for 100% offline use.",
    settings_pin_force: "Require Server-PIN (Host)",
    settings_pin_desc:
      "Disable to allow intranet connections without a password.",
    settings_auto_save:
      "⚠️ Automatically save large files (>15MB) without prompting",
    btn_tunnel: "🌍 Expose to Internet (Tunnel)",

    warn_global_unencrypted:
      "⚠️ **IMPORTANT:** The Global Chat is *not* end-to-end encrypted. The server archives this history for all colleagues. Please do not share sensitive data here!",
    placeholder_global: "Type a public message...",

    btn_open_folder: "📂 Open Folder",
    btn_clear_folder: "🗑️ Clear Files",
    settings_vol: "Volume:",
    settings_adv: "Advanced Voice Processing",
    settings_noise: "Noise Suppression",
    settings_noise_desc: "Filters out background noise and typing sounds",
    settings_echo: "Echo Cancellation",
    settings_echo_desc:
      "Prevents your microphone from picking up speaker audio",
    settings_agc: "Automatic Gain Control",
    settings_agc_desc: "Automatically adjusts your microphone volume (AGC)",
    title_pinned: "📌 Pinned Messages",
    title_search_results: "🔍 Search Results",

    title_change_avatar: "Change avatar",
    title_change_name: "Change name",
    title_mute: "Mute microphone",
    title_deaf: "Deafen audio",
    title_theme: "Change theme",
    title_settings: "Settings",

    title_search: "Search",
    btn_wb: "🖌️ Whiteboard",
    btn_voice: "📞 Voice",
    btn_screen: "🖥️ Screen Share",

    badge_e2e: "🔒 E2EE Active",
    title_e2e: "This chat is end-to-end encrypted",
    placeholder_chat: "Type a secure message...",
    placeholder_search: "Search...",
    btn_members: "👥 Members",
    btn_pins: "📌 Pins",
    btn_hangup: "Hang up",
    title_file: "Attach file",
    title_record: "Hold to record voice memo",

    start_choose_mode: "Choose your network mode",
    btn_connect_server: "🌐 Connect to Server",
    start_desc_client: "(Company / Web)",
    btn_host_server: "🏠 Host local Server",
    start_desc_host: "(Home)",
    btn_p2p: "🔗 Direct Connection",
    start_desc_p2p: "(P2P LAN)",
    start_network_adapter: "Network Adapter (For P2P & Host):",

    app_title: "💬 VulaLAN MEGA-EDITION",
    tab_groups: "Group Chats",
    tab_dms: "Direct Messages",
    settings_title: "Audio Settings",
    settings_mic: "Microphone:",
    settings_speaker: "Speaker:",

    sys_mic_denied: "⚠️ Microphone access denied. You are muted.",
    sys_call_ringing: "Ringing...",
    sys_call_accepted: "Call accepted.",
    sys_call_declined: "Call declined.",
    sys_upload_success: "🚀 File uploaded!",

    alert_no_ip: "Please enter an IP address!",
    alert_group_name: "Please enter a name!",

    app_mega_edition: "MEGA-EDITION",
    server_ip_prompt: "🖥️ Enter Server IP or Domain:",
    placeholder_server_ip: "vulalan.azubis.local",
    btn_connect: "Connect",
    btn_cancel: "Cancel",
    btn_save_image: "⬇️ Save Image",
    title_edit_profile: "✏️ Edit Profile",
    placeholder_username: "Your Username",
    placeholder_bio: "About me (Bio)...",
    btn_save_profile: "Save Profile",
    profile_name: "Name",
    profile_id: "ID:",
    title_copy_ip: "Copy IP",
    profile_ip: "IP:",
    profile_about_me: "ABOUT ME",
    btn_send_dm: "Send Direct Message",
    settings_language: "Sprache / Language:",
    lang_de: "Deutsch 🇩🇪",
    lang_en: "English 🇬🇧",
    save_whiteboard: "💾 Save Whiteboard",
    wb_save_prompt: "Under what name should the whiteboard be saved?",
    btn_save: "Save",
    Insert_text: "🔤 Insert text",
    placeholder_your_text: "Your text...",
    Place_on_whiteboard: "Place on whiteboard",
    title_alert: "⚠️ Notice",
    btn_ok: "OK",
    title_create_group: "👥 Create New Group",
    placeholder_group_name: "Group name (e.g. Gaming Lounge)",
    group_select_members: "Select members:",
    btn_create_group: "Create Group",
    title_edit_group: "⚙️ Edit Group",
    group_edit_members: "Add/remove members:",
    btn_save_changes: "Save Changes",
    wb_req_clear: "Someone wants to clear the whiteboard...",
    btn_approve: "Approve",
    btn_decline: "Decline",
    wb_req_load: "Someone wants to load a whiteboard...",
    title_color: "Color",
    title_size: "Size",
    wb_tool_pen: "✏️ Pen",
    wb_tool_text: "🔤 Text",
    title_save_local: "Save locally to SSD",
    btn_save_local: "💾 Save",
    title_load_saved: "Load saved",
    btn_archive: "📁 Archive",
    btn_clear: "🗑️ Clear",
    btn_close: "❌ Close",
    secure_web_edition: "Secure Web Edition",
    p2p_connection: "P2P CONNECTION",
    btn_scan: "📡 Scan",
    title_fix_firewall: "Fixes issues with incoming connections",
    btn_firewall_fix: "🛡️ Firewall Fix",
    placeholder_ip: "192.168.x.x",
    local_server_running: "LOCAL SERVER RUNNING",
    title_share_ip: "Share this IP with your friends!",
    incoming_call: "📞 Incoming Call!",
    call_from: "From: ...",
    btn_accept: "Accept",
    title_new_group: "Create new group",
    title_restore_chats: "Restore old chats from database",
    title_cleanup_contacts: "Cleanup offline contacts",
    label_id: "ID: ",
    active_call_with: "In call with ",
    chat_nobody: "Nobody",
    title_sync: "Sync message history",
    btn_sync: "🔄 Sync",
    title_pins: "Pinned messages",
    title_mute_all: "Mute all",
    title_fullscreen: "Fullscreen",
    title_remove_file: "Remove file",
    title_attach_file: "Attach file",
    title_record_audio: "Hold to record voice memo",
    title_encrypt_large_files:
      "Upload large files (>15MB) encrypted to the server?",
    label_e2ee: "🔒 E2EE",
    label_members: "MEMBERS — ",
    lan_partner_search: "Search local network for partners",
  },
};

async function bootUI() {
  try {
    await CryptoManager.init();
  } catch (err) {
    // Stoppt den Startvorgang und lässt den User im Menü!
    document.getElementById("launcher-screen").style.display = "flex";
    return;
  }

  document.getElementById("launcher-screen").style.display = "none";
  await CryptoManager.init();
  await DBManager.init(); // Startet die IndexedDB
  document.getElementById("my-id").innerText = myId;

  // FIX: Kein "let" mehr! Greift auf die globale Variable zu.
  myName = localStorage.getItem("userName");
  if (!myName) {
    myName = `User-${myId.substring(0, 4)}`;
    localStorage.setItem("userName", myName);
  }
  document.getElementById("display-my-name").innerText = myName;

  // --- NEU: Setzt beim Start alle Kontakte pauschal auf OFFLINE ---
  // Wer wirklich online ist, wird durch den Ping in wenigen Sekunden wieder grün!
  contacts.forEach((c) => (c.isOnline = false));
  localStorage.setItem("contacts", JSON.stringify(contacts));

  updateDOMTranslations(); // <--- NEU: Sprache beim Start anwenden
  renderContacts();
  updateGlobalGroup(); // Globalen Chat beim Start aufbauen
  renderGroups();
  updateRoutingInfo();

  // Handys klappen beim Start automatisch die Kontaktliste auf!
  if (window.innerWidth <= 600) {
    document.querySelector(".sidebar").classList.add("mobile-open");
    document.getElementById("mobile-overlay").style.display = "block";
  }

  // Füge das in dein bootUI() am Ende ein, um den mobilen viewport zu erzwingen
  /*
                if (window.innerWidth <= 600) {
                    //const meta = document.createElement('meta');
                    meta.name = "viewport";
                    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
                    document.head.appendChild(meta);
                }
                */

  //VON GEMINI
  updateCallUI();
  closeActiveChatUI();
}

function startClientMode() {
  document.getElementById("server-ip-dialog").style.display = "flex";

  // NEU: Wir prüfen jetzt auch auf !isCapacitor
  if (!isElectron && !isCapacitor && window.location.protocol !== "file:") {
    // Im Webbrowser: Wir kennen die Server-Adresse schon! Wir füllen sie aus und sperren sie.
    const ipInput = document.getElementById("client-target-ip");
    ipInput.value = window.location.hostname;
    ipInput.readOnly = true;
    ipInput.style.opacity = "0.5"; 

    setTimeout(() => document.getElementById("client-server-pin").focus(), 100);
  } else {
    // ELECTRON (PC) oder CAPACITOR (Handy): User muss die IP selbst eintippen!
    const ipInput = document.getElementById("client-target-ip");
    
    // Sicherheitshalber entsperren, falls es verbuggt war
    ipInput.readOnly = false;
    ipInput.style.opacity = "1";
    
    // Letzte IP laden oder Platzhalter leer lassen
    ipInput.value = localStorage.getItem("lastServerIp") || "";
    
    setTimeout(() => ipInput.focus(), 100);
  }
}

// --- DIE NEUE DATENBANK (IndexedDB) ---
const DBManager = {
  db: null,
  init() {
    return new Promise((resolve, reject) => {
      // Wir öffnen (oder erstellen) die Datenbank Version 1
      const request = indexedDB.open("VulaLAN_DB", 1);

      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("messages")) {
          // Erstellt die Tabelle 'messages'
          const store = db.createObjectStore("messages", {
            keyPath: "id",
            autoIncrement: true,
          });
          store.createIndex("chatId", "chatId", { unique: false });
          store.createIndex("timestamp", "timestamp", { unique: false });
        }
      };

      request.onsuccess = async (e) => {
        this.db = e.target.result;
        await this.migrateOldData(); // Holt die alten Chats aus dem localStorage!
        resolve();
      };
      request.onerror = (e) => {
        console.error("Datenbank-Fehler:", e);
        reject(e);
      };
    });
  },

  // Der Migrator: Verschiebt 1x lautlos alles vom alten System ins Neue
  // Der Migrator: Verschiebt alte Daten ins Neue
  async migrateOldData() {
    // FIX: Der Sicherheits-Schalter! Verhindert, dass bei jedem F5 kopiert wird.
    if (localStorage.getItem("db_migrated_v2") === "true") return;

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key && key.startsWith("chat_")) {
        let chatId = key.replace("chat_", "");
        try {
          let history = JSON.parse(localStorage.getItem(key));
          for (let msg of history) {
            await this.saveMessage(chatId, msg);
          }
        } catch (e) {}
      }
    }
    // Schalter umlegen: Ab jetzt nie wieder kopieren!
    localStorage.setItem("db_migrated_v2", "true");
  },

  saveMessage(chatId, msgObj) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("messages", "readwrite");
      const store = tx.objectStore("messages");
      msgObj.chatId = chatId;
      store.put(msgObj);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },

  getMessages(chatId) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("messages", "readonly");
      const store = tx.objectStore("messages");
      const index = store.index("chatId");
      const request = index.getAll(IDBKeyRange.only(chatId));

      request.onsuccess = () => {
        let msgs = request.result;

        // FIX: Die Müllabfuhr für die Duplikate!
        let uniqueMsgs = new Map();
        msgs.forEach((m) => {
          const existing = uniqueMsgs.get(m.timestamp);
          // Überschreibe das Duplikat NUR, wenn die neue Variante die ECHTE Datei hat
          if (!existing || (existing.file === null && m.file !== null)) {
            uniqueMsgs.set(m.timestamp, m);
          }
        });

        let cleanMsgs = Array.from(uniqueMsgs.values());
        cleanMsgs.sort((a, b) => a.timestamp - b.timestamp); // Chronologisch sortieren
        resolve(cleanMsgs);
      };
      request.onerror = () => reject(request.error);
    });
  },

  // NEU: Holt alle einzigartigen Chat-Verläufe, die jemals existiert haben
  getAllChatIds() {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("messages", "readonly");
      const store = tx.objectStore("messages");
      const index = store.index("chatId");

      // "nextunique" springt extrem schnell nur von Chat zu Chat, ohne die Tausenden Nachrichten dazwischen zu lesen!
      const request = index.openCursor(null, "nextunique");
      const chatIds = [];

      request.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          chatIds.push(cursor.key);
          cursor.continue();
        } else {
          resolve(chatIds);
        }
      };
      request.onerror = () => reject(request.error);
    });
  },

  deleteMessage(timestamp) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("messages", "readwrite");
      const store = tx.objectStore("messages");
      const index = store.index("timestamp");
      const request = index.getKey(IDBKeyRange.only(parseInt(timestamp)));

      request.onsuccess = () => {
        if (request.result) store.delete(request.result);
        resolve();
      };
    });
  },

  updateMessage(timestamp, updates) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("messages", "readwrite");
      const store = tx.objectStore("messages");
      const index = store.index("timestamp");
      const request = index.getKey(IDBKeyRange.only(parseInt(timestamp)));

      request.onsuccess = () => {
        if (request.result) {
          const getReq = store.get(request.result);
          getReq.onsuccess = () => {
            const msg = getReq.result;
            Object.assign(msg, updates); // Ersetzt den alten Text
            store.put(msg);
            resolve();
          };
        } else resolve();
      };
    });
  },
};

// --- GRUPPEN BEARBEITEN LOGIK ---
function openGroupEditModal() {
  const targetIp = document.getElementById("target-ip").value;
  const grp = groups.find((g) => g.id === targetIp);
  if (!grp) return;

  const list = document.getElementById("group-edit-user-list");
  list.innerHTML = "";
  contacts.forEach((c) => {
    const isChecked = grp.members.includes(c.ip) ? "checked" : "";
    list.innerHTML += `
                        <label class="user-check-item">
                            <input type="checkbox" value="${c.ip}" class="group-edit-cb" ${isChecked}>
                            <img src="${getAvatar(c.avatar, c.name || c.id || c.ip)}" style="width:24px; height:24px; border-radius:50%; margin-right:10px;">
                            <span style="color:white; font-size:14px;">${c.name || c.ip}</span>
                        </label>`;
  });
  document.getElementById("group-edit-modal").style.display = "flex";
}

function saveGroupMembers() {
  const targetIp = document.getElementById("target-ip").value;
  const grp = groups.find((g) => g.id === targetIp);
  if (!grp) return;

  const checkboxes = document.querySelectorAll(".group-edit-cb:checked");
  let newMembers = [myIp];
  checkboxes.forEach((cb) => newMembers.push(cb.value));

  const added = newMembers.filter(
    (m) => !grp.members.includes(m) && m !== myIp,
  );
  const removed = grp.members.filter(
    (m) => !newMembers.includes(m) && m !== myIp,
  );

  grp.members = newMembers;
  localStorage.setItem("groups", JSON.stringify(groups));
  renderGroups();

  // 1. Neue Leute einladen
  added.forEach((mIp) =>
    sendSignal(mIp, { type: "group-invite", groupData: grp, fromIp: myIp }),
  );
  // 2. Rausgeworfene Leute kicken
  removed.forEach((mIp) =>
    sendSignal(mIp, { type: "group-kick", groupId: grp.id, fromIp: myIp }),
  );
  // 3. Bleibende Mitglieder updaten
  grp.members.forEach((mIp) => {
    if (mIp !== myIp && !added.includes(mIp)) {
      sendSignal(mIp, { type: "group-update", groupData: grp, fromIp: myIp });
    }
  });

  document.getElementById("group-edit-modal").style.display = "none";
  appendChatUI(
    "System",
    "System",
    "⚙️ Gruppenmitglieder wurden aktualisiert.",
    null,
    null,
    Date.now(),
    0,
  );
}

const ctxMenu = document.getElementById("context-menu");
let ctxTargetIp = null;
let ctxImageSrc = null;
let ctxImageName = null;
let ctxTextToCopy = null;
let ctxMsgId = null;

document.addEventListener("contextmenu", (e) => {
  // --- NEU: DIE LEBENSRETTUNG FÜRS HANDY-MENÜ ---
  // Wenn der User in ein Textfeld klickt, brechen wir unsere eigene Funktion hier ab
  // und erlauben dem Handy, sein natives "Alles auswählen / Einfügen" Menü zu zeigen!
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.isContentEditable) {
      return; 
  }

  // Für den ganzen restlichen Bildschirm blockieren wir das Standard-Menü wie gewohnt
  e.preventDefault();
  
  const ctxMenu = document.getElementById("context-menu");
  let showMenu = false;
  let menuHtml = "";

  // 1. Klick auf ein Bild

  // 1. Klick auf ein Bild
  if (e.target.classList.contains("chat-img")) {
    ctxImageSrc = e.target.src;
    ctxImageName = e.target.getAttribute("data-filename") || "bild.png";
    menuHtml += `<div class="ctx-item" id="ctx-download"><span>${t("ctx_save_img")}</span> <span>⬇️</span></div>`;
    menuHtml += `<div class="ctx-item" id="ctx-open"><span>${t("ctx_open_img")}</span> <span>🔍</span></div>`;
    showMenu = true;
  } else {
    // 2. Klick auf eine Nachricht
    const msgContainer = e.target.closest(".chat-msg");
    if (msgContainer) {
      ctxMsgId = msgContainer.getAttribute("data-timestamp");
      const msgSender = msgContainer.getAttribute("data-senderip");
      const chatContent = msgContainer.querySelector(".chat-content");

      if (chatContent && chatContent.innerText.trim() !== "") {
        const rawAttr = chatContent.getAttribute("data-raw-text");
        ctxTextToCopy = rawAttr
          ? decodeURIComponent(rawAttr)
          : chatContent.innerText;

        if (msgSender === "Ich") {
          menuHtml += `<div class="ctx-item" id="ctx-edit"><span>${t("ctx_edit")}</span> <span>✏️</span></div>`;
        }
        menuHtml += `<div class="ctx-item" id="ctx-reply"><span>${t("ctx_reply")}</span> <span>↩️</span></div>`;
        menuHtml += `<div class="ctx-item" id="ctx-forward"><span>${t("ctx_forward")}</span> <span>↪️</span></div>`;
        menuHtml += `<div class="ctx-divider"></div>`;
        menuHtml += `<div class="ctx-item" id="ctx-copy"><span>${t("ctx_copy")}</span> <span>📄</span></div>`;
        menuHtml += `<div class="ctx-item" id="ctx-pin"><span>${t("ctx_pin")}</span> <span>📌</span></div>`;
      }

      menuHtml += `<div class="ctx-item" id="ctx-unread"><span>${t("ctx_unread")}</span> <span>🔕</span></div>`;
      menuHtml += `<div class="ctx-item" id="ctx-copy-id"><span>${t("ctx_copy_link")}</span> <span>🔗</span></div>`;

      if (chatContent && chatContent.innerText.trim() !== "") {
        menuHtml += `<div class="ctx-item" id="ctx-tts"><span>${t("ctx_tts")}</span> <span>🔊</span></div>`;
      }

      if (ctxMsgId && msgSender === "Ich") {
        menuHtml += `<div class="ctx-divider"></div>`;
        menuHtml += `<div class="ctx-item danger" id="ctx-delete-msg"><span>${t("ctx_delete")}</span> <span>🗑️</span></div>`;
      }
      showMenu = true;
    }

    // 3. Klick auf Kontaktliste (Das neue User-Menü!)
    const contactItem = e.target.closest(".contact-item");
    if (contactItem) {
      ctxTargetIp = contactItem.getAttribute("data-ip");
      const isGroup = ctxTargetIp.startsWith("grp_");

      if (isGroup) {
        menuHtml += `<div class="ctx-item" id="ctx-mark-read"><span>${t("ctx_mark_read")}</span> <span>💬</span></div>`;
        menuHtml += `<div class="ctx-item" id="ctx-copy-ip"><span>${t("ctx_copy_grp_id")}</span> <span>📋</span></div>`;
        if (ctxTargetIp !== "grp_global") {
          menuHtml += `<div class="ctx-divider"></div>`;
          menuHtml += `<div class="ctx-item danger" id="ctx-delete-user"><span>${t("ctx_leave_group")}</span> <span>❌</span></div>`;
        }
      } else {
        menuHtml += `<div class="ctx-item" id="ctx-mark-read"><span>${t("ctx_mark_read")}</span> <span>💬</span></div>`;
        menuHtml += `<div class="ctx-item" id="ctx-profile"><span>${t("ctx_profile")}</span> <span>👤</span></div>`;
        menuHtml += `<div class="ctx-item" id="ctx-copy-ip"><span>${t("ctx_copy_ip")}</span> <span>📋</span></div>`;
        menuHtml += `<div class="ctx-item" id="ctx-start-call"><span>${t("ctx_call")}</span> <span>📞</span></div>`;
        menuHtml += `<div class="ctx-divider"></div>`;
        menuHtml += `<div class="ctx-item" id="ctx-close-dm"><span>${t("ctx_close_dm")}</span> <span>🗑️</span></div>`;
        const cInfo = contacts.find((c) => c.ip === ctxTargetIp);
        if (cInfo && cInfo.isMuted) {
          menuHtml += `<div class="ctx-item" id="ctx-block-user"><span>${t("ctx_unblock") || "Blockierung aufheben"}</span> <span>✅</span></div>`;
        } else {
          menuHtml += `<div class="ctx-item danger" id="ctx-block-user"><span>${t("ctx_block")}</span> <span>🚫</span></div>`;
        }
      }
      showMenu = true;
    }
  }

  // --- MENÜ ZEIGEN & EVENTS BINDEN ---
  if (showMenu) {
    ctxMenu.innerHTML = menuHtml;
    ctxMenu.style.display = "block";

    // Schlaue Positionierung: Verhindert, dass das Menü über den Bildschirmrand hinausragt
    let x = e.pageX;
    let y = e.pageY;
    ctxMenu.style.visibility = "hidden";
    ctxMenu.style.left = x + "px";
    ctxMenu.style.top = y + "px";
    setTimeout(() => {
      if (x + ctxMenu.offsetWidth > window.innerWidth)
        x = window.innerWidth - ctxMenu.offsetWidth - 5;
      if (y + ctxMenu.offsetHeight > window.innerHeight)
        y = window.innerHeight - ctxMenu.offsetHeight - 5;
      ctxMenu.style.left = x + "px";
      ctxMenu.style.top = y + "px";
      ctxMenu.style.visibility = "visible";
    }, 0);

    // Hilfsfunktion für die Klicks
    const bind = (id, fn) => {
      const el = document.getElementById(id);
      if (el)
        el.onclick = () => {
          fn();
          ctxMenu.style.display = "none";
        };
    };

    bind("ctx-download", async () => {
      if (window.Capacitor) {
        try {
          const { Filesystem, Directory } = Capacitor.Plugins;
          await Filesystem.writeFile({
            path: makeUniqueFilename(ctxImageName),
            data: ctxImageSrc,
            directory: Directory.Documents,
          });
          alert("✅ Bild in Dokumente gespeichert!");
        } catch (e) {
          alert("❌ Fehler beim Speichern: " + e.message);
        }
      } else {
        const a = document.createElement("a");
        a.href = ctxImageSrc;
        a.download = makeUniqueFilename(ctxImageName);
        a.click();
      }
    });

    bind("ctx-open", () => window.openImage(ctxImageSrc, ctxImageName));
    bind("ctx-copy", () => navigator.clipboard.writeText(ctxTextToCopy));
    bind("ctx-copy-id", () => navigator.clipboard.writeText(ctxMsgId));
    bind("ctx-copy-ip", () => navigator.clipboard.writeText(ctxTargetIp));
    bind("ctx-tts", () => {
      const u = new SpeechSynthesisUtterance(ctxTextToCopy);
      u.lang = "de-DE";
      window.speechSynthesis.speak(u);
    });
    bind("ctx-delete-msg", () => deleteMessage(ctxMsgId));

    // --- NEUE DISCORD/WHATSAPP LOGIK FÜRS MENÜ ---

    bind("ctx-reply", () => {
      const msgContainer = document.getElementById(`msg-${ctxMsgId}`);
      const senderNameEl = msgContainer.querySelector(".chat-name");

      window.currentReplyData = {
        id: ctxMsgId,
        senderName: senderNameEl ? senderNameEl.innerText : "Unbekannt",
        text:
          ctxTextToCopy.substring(0, 80) +
          (ctxTextToCopy.length > 80 ? "..." : ""),
      };

      document.getElementById("reply-preview-name").innerText =
        window.currentReplyData.senderName;
      document.getElementById("reply-preview-text").innerText =
        window.currentReplyData.text;

      document.getElementById("reply-preview-bar").style.display = "flex";
      document.getElementById("chat-input-wrapper").style.borderRadius =
        "0 0 8px 8px";
      document.getElementById("chat-input").focus();
    });

    bind("ctx-forward", () => {
      openForwardModal(ctxTextToCopy);
    });

    bind("ctx-pin", async () => {
      const msgEl = document.getElementById(`msg-${ctxMsgId}`);
      const h = msgEl.querySelector(".chat-header");
      const isCurrentlyPinned = h.innerHTML.includes("📌");
      const newState = !isCurrentlyPinned;

      // 1. Lokales UI anpassen
      if (newState) {
        if (!h.innerHTML.includes("📌"))
          h.innerHTML +=
            ' <span class="pin-icon" style="font-size:12px;" title="Angepinnt">📌</span>';
      } else {
        const pIcon = h.querySelector(".pin-icon");
        if (pIcon) pIcon.remove();
      }

      // 2. Datenbank updaten
      await DBManager.updateMessage(ctxMsgId, { isPinned: newState });

      // 3. SYSTEMNACHRICHT FÜR DEN CHAT GENERIEREN (Das hast du dir gewünscht!)
      const tIp = document.getElementById("target-ip").value;
      const actionStr = newState ? "pinned" : "unpinned";
      const sysMsg = `📌 **${myName}** has ${actionStr} a message.`;

      saveMessageLocally(
        tIp,
        "System",
        "System",
        sysMsg,
        null,
        null,
        0,
        Date.now(),
      );
      if (document.getElementById("target-ip").value === tIp) {
        appendChatUI("System", "System", sysMsg, null, null, Date.now(), 0);
      }

      // 4. Ans Netzwerk funken
      if (tIp.startsWith("grp_")) {
        const grp = groups.find((g) => g.id === tIp);
        if (grp)
          grp.members.forEach((mIp) => {
            if (mIp !== myIp)
              sendSignal(mIp, {
                type: "pin-msg",
                msgId: ctxMsgId,
                isPinned: newState,
                fromIp: myIp,
                groupId: grp.id,
              });
          });
      } else
        sendSignal(tIp, {
          type: "pin-msg",
          msgId: ctxMsgId,
          isPinned: newState,
          fromIp: myIp,
        });
    });

    // --- NEUE BINDS FÜR DAS USER-MENÜ ---
    bind("ctx-mark-read", () => {
      if (ctxTargetIp.startsWith("grp_")) {
        const gIdx = groups.findIndex((g) => g.id === ctxTargetIp);
        if (gIdx !== -1) {
          groups[gIdx].unread = 0;
          localStorage.setItem("groups", JSON.stringify(groups));
          renderGroups();
        }
      } else {
        const cIdx = contacts.findIndex((c) => c.ip === ctxTargetIp);
        if (cIdx !== -1) {
          contacts[cIdx].unread = 0;
          localStorage.setItem("contacts", JSON.stringify(contacts));
          renderContacts();
        }
      }
    });

    bind("ctx-start-call", () => {
      // Simuliert den Klick auf den Kontakt und dann auf den Voice-Button
      document.querySelector(`.contact-item[data-ip="${ctxTargetIp}"]`).click();
      setTimeout(() => document.getElementById("call-btn").click(), 100);
    });

    bind("ctx-profile", () => openUserProfile(ctxTargetIp));
    bind("ctx-block-user", () => {
      const cIdx = contacts.findIndex((c) => c.ip === ctxTargetIp);
      if (cIdx !== -1) {
        const isNowMuted = !contacts[cIdx].isMuted;
        contacts[cIdx].isMuted = isNowMuted;
        localStorage.setItem("contacts", JSON.stringify(contacts));
        renderContacts();

        // --- NEU: Lokale Benachrichtigung in deinem Chatverlauf ---
        const statusStr = isNowMuted ? "🚫 blocked" : "✅ unblocked";
        const msgText = `**System:** You ${statusStr} this contact.`;

        saveMessageLocally(
          ctxTargetIp,
          "System",
          "System",
          msgText,
          null,
          null,
          0,
          Date.now(),
        );

        // Wenn du den Chat gerade offen hast, zeige es sofort an
        if (document.getElementById("target-ip").value === ctxTargetIp) {
          appendChatUI("System", "System", msgText, null, null, Date.now(), 0);
        }
      }
    });

    // --- ECHTE DATENBANK ANPINN-LOGIK ---

    bind("ctx-edit", () => {
      // Entfernt alte "(bearbeitet)" Strings aus der Vergangenheit beim Auslesen
      let cleanText = ctxTextToCopy.replace(/(\s*\(bearbeitet\))+$/g, "");

      // FIX: Wir öffnen unser neues Pop-up statt dem verbotenen prompt()!
      window.currentEditMsgId = ctxMsgId; // Merkt sich, welche Nachricht bearbeitet wird
      document.getElementById("edit-msg-input").value = cleanText;
      document.getElementById("edit-msg-modal").style.display = "flex";
      setTimeout(() => document.getElementById("edit-msg-input").focus(), 100);
    });

    bind("ctx-close-dm", () => {
      if (
        confirm(
          "Diesen Chat aus der Liste ausblenden? (Nachrichten bleiben in der Datenbank erhalten)",
        )
      ) {
        contacts = contacts.filter((c) => c.ip !== ctxTargetIp);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        // App neuladen, um alle Geister-Zustände zu killen
        window.location.reload();
      }
    });

    bind("ctx-delete-user", () => {
      if (ctxTargetIp.startsWith("grp_")) {
        if (confirm("Gruppe verlassen/löschen?")) {
          groups = groups.filter((g) => g.id !== ctxTargetIp);
          localStorage.setItem("groups", JSON.stringify(groups));

          // App neuladen
          window.location.reload();
        }
      } else {
        if (confirm("Kontakt löschen?")) {
          contacts = contacts.filter((c) => c.ip !== ctxTargetIp);
          localStorage.setItem("contacts", JSON.stringify(contacts));

          // App neuladen
          window.location.reload();
        }
      }
    });

    bind("ctx-unread", () => {
      const tIp = document.getElementById("target-ip").value;
      if (tIp) {
        incrementUnread(tIp);
        if (document.getElementById("target-ip").value === tIp)
          closeActiveChatUI();
      }
    });
  }
});

// --- NEU: XSS-SCHUTZ FÜR NAMEN, IPs UND DATEINAMEN ---
function escapeHTML(str) {
  if (!str) return "";
  return str.toString().replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[tag],
  );
}

// Aktuelle Sprache aus dem LocalStorage laden (Standard: Englisch)
let currentLang = localStorage.getItem("vula_lang") || "en";

// Wir erkennen Electron jetzt daran, ob unser Türsteher "api" da ist!
// --- DIE ELECTRON BRÜCKE ---
const isElectron = !!window.api;
const isCapacitor = !!window.Capacitor;

// Startet die App, sobald das HTML fertig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    console.log("Bibliotheken geladen, starte UI...");
    
    // --- DER NEUE AUTO-START ZÜNDSCHLÜSSEL ---
    const savedMode = localStorage.getItem("autoStartMode");
    
    if (savedMode) {
        // Auto-Start ist AN: Startbildschirm sofort verstecken, um Flackern zu vermeiden
        const launcher = document.getElementById("launcher-screen");
        if (launcher) launcher.style.display = "none";
        
        // Wir geben dem Backend kurz 800ms Zeit, die Netzwerk-Adapter (myIp) zu laden
        setTimeout(() => {
            if (savedMode === "web") confirmClientStart(true);
            else if (savedMode === "host") startHostMode(true);
            else if (savedMode === "p2p") startP2PMode(true);
        }, 800);
    } 
    // WICHTIG: Wenn KEIN Auto-Start aktiv ist, rufen wir hier absichtlich NICHT bootUI() auf!
    // Der blaue Startbildschirm bleibt offen, der User wählt in Ruhe aus, 
    // und erst der Klick auf den Button zündet dann die bootUI().
});

let currentMode = "web";
let p2pSockets = {};

// --- VulaLAN CUSTOM ALERT OVERRIDE ---
// Ersetzt ALLE Windows-Alerts im Code, um den Electron-Freeze zu verhindern!
window.alert = function (message) {
  const alertText = document.getElementById("vula-alert-text");
  const alertModal = document.getElementById("vula-alert-modal");
  if (alertText && alertModal) {
    alertText.innerText = message;
    alertModal.style.display = "flex";
  } else {
    console.warn("Alert:", message); // Fallback für den allerersten Lade-Moment
  }
};

// --- WEB-EDITION INITIALISIERUNG ---
let serverWs = null;
let apiBaseUrl = ""; // NEU: Merkt sich die HTTP-Adresse für Datei-Uploads

let myId = localStorage.getItem("userId");
if (!myId) {
  myId = Math.random().toString(36).substring(2, 10);
  localStorage.setItem("userId", myId);
}

// --- NEU: ECHTE LOKALE NETZWERK-IP (IPv4) AUSLESEN ---
let myIp = myId; // Fallback für den normalen Web-Browser

// --- NEU: ECHTE LOKALE NETZWERK-IP AUSLESEN & AUSWAHL ---
// --- NEU: ECHTE LOKALE NETZWERK-IP (SICHERER TÜRSTEHER) ---
// --- NEU: ECHTE LOKALE NETZWERK-IP (SICHERER TÜRSTEHER) ---

// --- NEU: ECHTE LOKALE NETZWERK-IP (SICHERER TÜRSTEHER MIT LISTE & GEDÄCHTNIS) ---
if (isElectron) {
  // Wir kapseln das in eine sofort ausgeführte async Funktion!
  (async () => {
    try {
      const availableInterfaces = await window.api.getNetworkIps();
      if (availableInterfaces.length > 0) {
        // Sortieren: Ethernet & WLAN nach ganz oben
        availableInterfaces.sort((a, b) => {
          const n = a.name.toLowerCase();
          if (
            n.includes("ethernet") ||
            n.includes("wi-fi") ||
            n.includes("wlan")
          )
            return -1;
          return 1;
        });

        const adapterDiv = document.getElementById("adapter-selection");
        const listContainer = document.getElementById("interface-list");

        if (adapterDiv && listContainer) {
          adapterDiv.style.display = "flex";
          listContainer.innerHTML = ""; // Liste leeren

          // Gedächtnis abrufen: Welche IP wurde beim letzten Mal angeklickt?
          const savedIp = localStorage.getItem("vula_last_interface");
          let selectedIp = null;

          availableInterfaces.forEach((iface) => {
            const item = document.createElement("div");
            item.className = "interface-item";

            // Optisch schöne Trennung von Name und IP
            item.innerHTML = `
                                        <span class="interface-name">${iface.name}</span>
                                        <span class="interface-ip">${iface.ip}</span>
                                    `;
            item.dataset.ip = iface.ip; // Versteckter Datenspeicher für den Klick

            // Wenn diese IP die gespeicherte ist, direkt aktivieren!
            if (iface.ip === savedIp) {
              item.classList.add("active");
              selectedIp = iface.ip;
              myIp = iface.ip; // WICHTIG: Globale IP direkt setzen!
            }

            // Klick-Logik
            item.addEventListener("click", () => {
              // Allen anderen das 'active' klauen
              document
                .querySelectorAll(".interface-item")
                .forEach((el) => el.classList.remove("active"));
              // Sich selbst 'active' geben
              item.classList.add("active");
              // Im Tresor speichern!
              localStorage.setItem("vula_last_interface", iface.ip);
              // Globale Variable für den P2P-Server updaten
              myIp = iface.ip;
            });

            listContainer.appendChild(item);
          });

          // Fallback: Wenn das gespeicherte Netzwerk nicht mehr existiert
          // oder noch nie eins gewählt wurde -> Nimm einfach das allererste!
          if (!selectedIp && availableInterfaces.length > 0) {
            listContainer.firstChild.classList.add("active");
            localStorage.setItem(
              "vula_last_interface",
              availableInterfaces[0].ip,
            );
            myIp = availableInterfaces[0].ip;
          }
        } else {
          // Fallback, falls die UI noch nicht geladen ist
          myIp = availableInterfaces[0].ip;
        }
      }
    } catch (e) {
      console.error("Konnte IP nicht auslesen:", e);
    }
  })(); // Die () am Ende führt die Funktion sofort aus!
}

// NEU: Verwaltet die Profilbilder im Call-Banner live!

// Den Button mit der neuen Logik verknüpfen (irgendwo am Ende deines Skripts)
document
  .getElementById("screen-btn")
  .addEventListener("click", toggleScreenShare);

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
// NEU: Gruppen laden
let groups = JSON.parse(localStorage.getItem("groups")) || [];

// --- VulaLAN OFFLINE-POSTFACH (QUEUE) ---
let offlineQueue = JSON.parse(localStorage.getItem("vulalan_queue")) || {};

contacts = contacts.filter((c) => isValidIp(c.ip));
localStorage.setItem("contacts", JSON.stringify(contacts));

let pendingOffer = null;
let pendingCallerIp = null;
let lastErrorTime = 0;
let iceCandidateQueue = [];
let typingTimeout;
let isMuted = false;
let isDeafened = false;

let fileSendPC = null;
let fileReceivePC = null;
let incomingFileData = { buffers: [], meta: null, received: 0 };

document.getElementById("display-my-name").addEventListener("click", () => {
  document.getElementById("new-name-input").value = myName || myId;
  document.getElementById("name-modal").style.display = "flex";
  document.getElementById("new-name-input").focus();
});
document.getElementById("save-name-btn").addEventListener("click", async () => {
  const newN = document.getElementById("new-name-input").value.trim();
  if (newN !== "") {
    myName = newN;
    localStorage.setItem("userName", myName);
    document.getElementById("display-my-name").innerText = myName;
    await broadcastProfile();
  }
  document.getElementById("name-modal").style.display = "none";
});
document.getElementById("new-name-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") document.getElementById("save-name-btn").click();
});

// --- DYNAMISCHE AVATARE (Offline-Generator) ---
// --- DYNAMISCHE AVATARE (Offline-Generator) ---
const defaultAvatar =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

function getAvatar(avatarData, nameStr) {
  if (avatarData && avatarData !== defaultAvatar && avatarData.length > 1000)
    return avatarData;

  const text = (nameStr || "?").toString().trim();
  let initials = text.substring(0, 2).toUpperCase();
  if (initials.length === 0) initials = "?";

  const colors = [
    localStorage.getItem("vula_color") || "#7b2cbf", // <--- HIER IST DER FIX
    "#3ba55d",
    "#ed4245",
    "#fee75c",
    "#e67e22",
    "#9b59b6",
    "#e91e63",
    "#00bcd4",
  ];
  let hash = 0;
  // FIX: Wir nehmen nur das erste Wort, um sicherzustellen, dass Zusätze wie "(Ich)" die Farbe nicht verändern.
  const baseWord = text.split(" ")[0];
  for (let i = 0; i < baseWord.length; i++)
    hash = baseWord.charCodeAt(i) + ((hash << 5) - hash);
  const color = colors[Math.abs(hash) % colors.length];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="${color}"/><text x="50" y="54" font-family="Arial" font-size="45" fill="white" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`;

  return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`;
}

// Setzt beim Start dein eigenes Profilbild (Entweder dein Foto oder die bunten Initialen)
setTimeout(() => {
  document.getElementById("my-avatar").src = getAvatar(
    localStorage.getItem("myAvatar"),
    myName || myId,
  );
}, 500); // Kurzes Warten, damit myName sicher geladen ist

async function broadcastProfile() {
  const p = await getMyProfile();
  contacts.forEach((c) =>
    sendSignal(c.ip, { type: "profile", fromIp: myIp, ...p }),
  );
}

function makeUniqueFilename(filename) {
  if (!filename) return `file_${Date.now()}`;
  const p = filename.split(".");
  const e = p.length > 1 ? "." + p.pop() : "";
  return `${p.join(".")}_${Math.random().toString(36).substring(2, 7)}${e}`;
}
function formatBytes(bytes) {
  if (!+bytes) return "0 Bytes";
  const k = 1024,
    sizes = ["Bytes", "KB", "MB", "GB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

// --- PROFIL LOGIK (GLOBAL) ---
let myName = localStorage.getItem("userName") || "";
let myBio = localStorage.getItem("userBio") || "";

document.getElementById("display-my-name").addEventListener("click", () => {
  document.getElementById("new-name-input").value = myName || myId;
  document.getElementById("new-bio-input").value = myBio;
  document.getElementById("name-modal").style.display = "flex";
  document.getElementById("new-name-input").focus();
});

document.getElementById("save-name-btn").addEventListener("click", async () => {
  const newN = document.getElementById("new-name-input").value.trim();
  const newB = document.getElementById("new-bio-input").value.trim();
  if (newN !== "") {
    myName = newN;
    myBio = newB;
    localStorage.setItem("userName", myName);
    localStorage.setItem("userBio", myBio);
    document.getElementById("display-my-name").innerText = myName;
    await broadcastProfile();
  }
  document.getElementById("name-modal").style.display = "none";
});

async function getMyProfile() {
  return {
    id: myId,
    name: myName || myId,
    bio: myBio,
    avatar: localStorage.getItem("myAvatar") || defaultAvatar,
    pubKey: await CryptoManager.getMyPublicKey(),
    activeCall: activeCallId, // NEU: Wir verraten dem Netzwerk im Ping, in welchem Raum wir sitzen!
  };
}

// --- NEU: LIVE ROUTING DISPLAY LOGIK ---
// --- NEU: LIVE ROUTING DISPLAY LOGIK ---
window.updateRoutingInfo = function () {
  const elMode = document.getElementById("route-mode");
  const elVpn = document.getElementById("route-vpn");
  const elStun = document.getElementById("route-stun");
  if (!elMode || !elVpn || !elStun) return;

  // 1. STUN Check
  const useStun = localStorage.getItem("allow_stun") !== "false";
  if (useStun) {
    elStun.innerText = "ACTIVE";
    elStun.style.color = "#3ba55d"; // Grün
    elStun.title = t("tt_stun_active");
  } else {
    elStun.innerText = "NULL";
    elStun.style.color = "#ed4245"; // Rot
    elStun.title = t("tt_stun_offline");
  }

  // 2. Mode Check (Bleibt technisch, das sind eher Dev-Infos)
  if (currentMode === "host") {
    elMode.innerText = "HOST (SERVER)";
    elMode.style.color = "#e67e22";
  } else if (currentMode === "p2p") {
    elMode.innerText = "P2P (DIRECT)";
    elMode.style.color = "#eb459e";
  } else if (currentMode === "web") {
    elMode.innerText = "CLIENT";
    elMode.style.color = "#00a8fc";
  } else {
    elMode.innerText = "NULL";
    elMode.style.color = "#ed4245";
  }

  // 3. Tunnel / VPN Check
  if (currentMode === "p2p") {
    elVpn.innerText = "P2P-SOCKETS";
    elVpn.style.color = "#eb459e";
    elVpn.title = t("tt_vpn_p2p");
  } else if (apiBaseUrl) {
    if (apiBaseUrl.includes("trycloudflare.com")) {
      elVpn.innerText = "CLOUDFLARE";
      elVpn.style.color = "#e67e22";
      elVpn.title = t("tt_vpn_cf").replace("{url}", apiBaseUrl);
    } else if (
      apiBaseUrl.includes("127.0.0.1") ||
      apiBaseUrl.includes("localhost")
    ) {
      elVpn.innerText = "LOCALHOST";
      elVpn.style.color = "#72767d";
      elVpn.title = t("tt_vpn_local").replace("{url}", apiBaseUrl);
    } else {
      elVpn.innerText = "LOCAL LAN";
      elVpn.style.color = "#3ba55d";
      elVpn.title = t("tt_vpn_lan").replace("{url}", apiBaseUrl);
    }
  } else {
    elVpn.innerText = "NULL";
    elVpn.style.color = "#ed4245";
    elVpn.title = t("tt_vpn_none");
  }
};

function fixFirewall() {
  if (!isElectron)
    return appendChatUI(
      "System",
      "System",
      "❌ Das geht nur in der Desktop-App (.exe)!",
      null,
      null,
      Date.now(),
      0,
    );
  //appendChatUI("System", "System", "🛡️ Fordere Windows-Adminrechte an... Bitte bestätige das gelb-blaue Schild (UAC)!", null, null, Date.now(), 0);
  appendChatUI("System", "System", t("sys_fw_req"), null, null, Date.now(), 0);

  // Firewall sicher im Backend fixen!
  window.api.fixFirewall();
}

// --- RECHTE SEITENLEISTE LIVE AKTUALISIEREN ---
window.refreshRightSidebar = function () {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp || !targetIp.startsWith("grp_")) return; // Nur in Gruppen aktiv

  const g = groups.find((grp) => grp.id === targetIp);
  if (!g) return;

  document.getElementById("group-sidebar").style.display = "flex";
  document.getElementById("member-count").innerText = g.members.length;
  const sidebarList = document.getElementById("group-member-sidebar-list");
  sidebarList.innerHTML = "";

  let displayMembers = g.members.map((mIp) => {
    const c = contacts.find((contact) => contact.ip === mIp) || {
      name: mIp,
      avatar: defaultAvatar,
      ip: mIp,
      isOnline: false,
    };
    if (mIp === myIp)
      return {
        ...c,
        name: myName + " (Me)",
        avatar: localStorage.getItem("myAvatar") || defaultAvatar,
        isOnline: true,
      };
    return c;
  });

  // Schlaue Sortierung: Online nach oben, dann alphabetisch
  displayMembers.sort((a, b) => {
    if (a.isOnline === b.isOnline)
      return (a.name || a.ip)
        .toLowerCase()
        .localeCompare((b.name || b.ip).toLowerCase());
    return a.isOnline ? -1 : 1;
  });

  displayMembers.forEach((c) => {
    // NEU: Name und IP für Mitglieder in der rechten Sidebar anzeigen (XSS-Safe!)
    sidebarList.innerHTML += `
                        <div class="contact-item" style="padding: 5px; margin-bottom: 2px;" data-ip="${c.ip}" onclick="openUserProfile('${c.ip}')">
                            <div class="status-dot ${c.isOnline ? "online" : ""}" style="width: 8px; height: 8px; margin-right: 8px;"></div>
                            <img src="${getAvatar(c.avatar, c.name || c.id || c.ip)}" style="width: 28px; height: 28px; border-radius: 50%; margin-right: 10px; object-fit: cover;">
                            <div style="display:flex; flex-direction:column; overflow:hidden; flex:1;">
                                <div style="display:flex; justify-content:space-between; align-items:baseline; width:100%;">
                                    <span style="color: ${c.isOnline ? "white" : "#72767d"}; font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHTML(c.name)}</span>
                                    <span style="font-weight:normal; font-size:11px; color:#b9bbbe; flex-shrink:0; margin-left:8px;">${escapeHTML(c.id ? `(${c.id})` : "")}</span>
                                </div>
                                <span style="font-size: 10px; color: #72767d; font-family:monospace;">IP: ${c.ip}</span>
                            </div>
                        </div>`;
  });
};

// NEU: GRUPPEN VERWALTUNG
function renderGroups() {
  const list = document.getElementById("group-list");
  list.innerHTML = "";
  groups.forEach((g) => {
    const div = document.createElement("div");
    div.className = "contact-item";
    div.setAttribute("data-ip", g.id);
    if (document.getElementById("target-ip").value === g.id)
      div.classList.add("active");

    let unreadHtml =
      g.unread && g.unread > 0
        ? `<div class="unread-badge">${g.unread}</div>`
        : "";

    div.innerHTML = `<div class="group-icon">👥</div>
                                    <div style="display:flex; flex-direction:column; overflow:hidden;">
                                        <span class="contact-name" style="font-weight:bold; font-size:14px; color:white; white-space:nowrap; text-overflow:ellipsis;">${escapeHTML(g.name)}</span>
                                        <span style="font-size:10px; color:#72767d">${g.members.length} ${t("lbl_members_count")}</span>
                                    </div>
                                    ${unreadHtml}`;

    div.onclick = () => {
      if (window.innerWidth <= 600) closeMobileSidebars();
      // Sidebar einblenden und Mitglieder auflisten
      document.getElementById("group-sidebar").style.display = "flex";
      document.getElementById("resizer-right").style.display = "block"; // <--- NEU

      document.getElementById("group-mgr-btn").style.display =
        g.id === "grp_global" ? "none" : "block";
      document.getElementById("pin-view-btn").style.display = "block";
      document.getElementById("search-container").style.display = "flex";
      document.getElementById("target-ip").value = g.id;
      document.getElementById("chat-header-name").innerText = g.name;
      // Im Global Chat gibt es kein E2EE, da der Server mitliest!
      document.getElementById("e2e-badge").style.display =
        g.id === "grp_global" ? "none" : "inline-block";
      document.getElementById("sync-btn").style.display = "block";

      // FIX: Voice-Button ist für alle Gruppen (außer den Globalen Chat) freigeschaltet!
      document.getElementById("call-btn").style.display =
        g.id === "grp_global" ? "none" : "block";
      document.getElementById("screen-btn").style.display = "none";

      g.unread = 0;
      localStorage.setItem("groups", JSON.stringify(groups));
      renderContacts();
      renderGroups();
      loadChatHistory(g.id);

      // NEU: Der intelligente Auto-Sync!
      // NEU: Der intelligente Auto-Sync (NUR für private Gruppen, NICHT für Global!)
      DBManager.getMessages(g.id).then((history) => {
        if (
          history.length === 0 &&
          g.members.length > 1 &&
          g.id !== "grp_global"
        ) {
          document.getElementById("sync-btn").click();
        }
      });

      refreshRightSidebar();
      if (typeof refreshVoiceButton === "function") refreshVoiceButton(); // Button prüfen!
      openActiveChatUI();
      setTimeout(() => document.getElementById("chat-input").focus(), 100);

      // Sidebar einblenden und Mitglieder auflisten
      document.getElementById("group-sidebar").style.display = "flex";
      document.getElementById("member-count").innerText = g.members.length;
      const sidebarList = document.getElementById("group-member-sidebar-list");
      sidebarList.innerHTML = "";

      // 1. Array aufbauen und mit Online-Status anreichern
      let displayMembers = g.members.map((mIp) => {
        const c = contacts.find((contact) => contact.ip === mIp) || {
          name: mIp,
          avatar: defaultAvatar,
          ip: mIp,
          isOnline: false,
        };
        if (mIp === myIp)
          return {
            ...c,
            name: myName + " (Me)",
            avatar: localStorage.getItem("myAvatar") || defaultAvatar,
            isOnline: true,
          };
        return c;
      });

      // 2. Schlaue Sortierung: Online nach oben, dann alphabetisch!
      displayMembers.sort((a, b) => {
        if (a.isOnline === b.isOnline)
          return (a.name || a.ip)
            .toLowerCase()
            .localeCompare((b.name || b.ip).toLowerCase());
        return a.isOnline ? -1 : 1;
      });

      // 3. HTML rendern
      displayMembers.forEach((c) => {
        // NEU: Name und IP für Mitglieder in der rechten Sidebar anzeigen (XSS-Safe!)
        sidebarList.innerHTML += `
                        <div class="contact-item" style="padding: 5px; margin-bottom: 2px;" data-ip="${c.ip}" onclick="openUserProfile('${c.ip}')">
                            <div class="status-dot ${c.isOnline ? "online" : ""}" style="width: 8px; height: 8px; margin-right: 8px;"></div>
                            <img src="${getAvatar(c.avatar, c.name || c.id || c.ip)}" style="width: 28px; height: 28px; border-radius: 50%; margin-right: 10px; object-fit: cover;">
                            <div style="display:flex; flex-direction:column; overflow:hidden; flex:1;">
                                <div style="display:flex; justify-content:space-between; align-items:baseline; width:100%;">
                                    <span style="color: ${c.isOnline ? "white" : "#72767d"}; font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHTML(c.name)}</span>
                                    <span style="font-weight:normal; font-size:11px; color:#b9bbbe; flex-shrink:0; margin-left:8px;">${escapeHTML(c.id ? `(${c.id})` : "")}</span>
                                </div>
                                <span style="font-size: 10px; color: #72767d; font-family:monospace;">IP: ${c.ip}</span>
                            </div>
                        </div>`;
      });

      openActiveChatUI();
      setTimeout(() => document.getElementById("chat-input").focus(), 100);
    };

    list.appendChild(div);
  });
}

function openGroupModal() {
  const list = document.getElementById("group-user-list");
  list.innerHTML = "";
  if (contacts.length === 0) {
    list.innerHTML =
      '<p style="color:#72767d; font-size:12px;">Keine Kontakte online.</p>';
  }
  contacts.forEach((c) => {
    list.innerHTML += `
                        <label class="user-check-item">
                            <input type="checkbox" value="${c.ip}" class="group-member-cb">
                            <img src="${getAvatar(c.avatar, c.name || c.id || c.ip)}" style="width:24px; height:24px; border-radius:50%; margin-right:10px;">
                            <span style="color:white; font-size:14px;">${c.name || c.ip}</span>
                        </label>
                    `;
  });
  document.getElementById("group-modal").style.display = "flex";
}

function createGroup() {
  const name = document.getElementById("group-name-input").value.trim();
  if (!name) return alert(t("alert_group_name"));

  const checkboxes = document.querySelectorAll(".group-member-cb:checked");
  if (checkboxes.length === 0)
    return alert("Bitte wähle mindestens einen Kontakt aus!");

  let members = [myIp];
  checkboxes.forEach((cb) => members.push(cb.value));

  const groupId =
    "grp_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  const newGroup = { id: groupId, name: name, members: members, unread: 0 };

  groups.push(newGroup);
  localStorage.setItem("groups", JSON.stringify(groups));

  // Den anderen Leuten sagen, dass sie in der Gruppe sind
  members.forEach((memberIp) => {
    if (memberIp !== myIp) {
      sendSignal(memberIp, {
        type: "group-invite",
        groupData: newGroup,
        fromIp: myIp,
      });
    }
  });

  document.getElementById("group-modal").style.display = "none";
  document.getElementById("group-name-input").value = "";
  renderGroups();
  alert(`Gruppe '${name}' wurde erfolgreich erstellt!`);
}

// --- DER GLOBALE "ALLE" CHAT ---
function updateGlobalGroup() {
  let globalGrp = groups.find((g) => g.id === "grp_global");

  // Falls er nicht existiert, ganz oben erschaffen
  if (!globalGrp) {
    globalGrp = {
      id: "grp_global",
      name: "🌍 Global Chat",
      members: [],
      unread: 0,
    };
    groups.unshift(globalGrp);
  }

  // Alle aktuellen Kontakte + dich selbst reinpacken
  let allIps = [myIp, ...contacts.map((c) => c.ip)];
  globalGrp.members = [...new Set(allIps)]; // Set = Keine doppelten IPs

  localStorage.setItem("groups", JSON.stringify(groups));
  renderGroups();
}

// --- AUDIO KONTROLLEN (MUTE & DEAFEN) ---
let wasMutedBeforeDeafen = false;

function applyAudioStates() {
  // 1. Die Icons aktualisieren
  document
    .getElementById("mute-btn")
    .classList.toggle("danger", isMuted || isDeafened);
  document.getElementById("mute-btn").innerText =
    isMuted || isDeafened ? "🔇" : "🎤";

  document.getElementById("deafen-btn").classList.toggle("danger", isDeafened);
  document.getElementById("deafen-btn").innerText = isDeafened ? "🔇" : "🎧";

  // 2. Das eigene Mikrofon muten (Ausgehend)
  if (localStream) {
    localStream.getAudioTracks().forEach((t) => {
      t.enabled = !(isMuted || isDeafened);
    });
  }

  if (window.rawLocalStream) {
    window.rawLocalStream.getAudioTracks().forEach((t) => {
      t.enabled = !(isMuted || isDeafened);
    });
  }

  // 3. Eingehenden Ton von ALLEN Partnern muten (Die dynamischen Elemente!)
  // Wir schnappen uns einfach alles, was "media-" in der ID hat und ein Audio/Video Element ist.
  document
    .querySelectorAll('audio[id^="media-"], video[id^="media-"]')
    .forEach((mediaEl) => {
      mediaEl.muted = isDeafened;
    });
}

document.getElementById("mute-btn").addEventListener("click", () => {
  if (isDeafened) return; // Wer taub ist, kann sich nicht entmuten!
  isMuted = !isMuted;
  applyAudioStates();
});

document.getElementById("deafen-btn").addEventListener("click", () => {
  isDeafened = !isDeafened;
  if (isDeafened) {
    wasMutedBeforeDeafen = isMuted;
    isMuted = true;
  } else {
    isMuted = wasMutedBeforeDeafen; // Privatsphäre-Zustand wiederherstellen
  }
  applyAudioStates();
});

function renderContacts() {
  const list = document.getElementById("contact-list");
  list.innerHTML = "";

  // 1. DEDUPLIZIERUNG & BEREINIGUNG DES ARRAYS (Müllschlucker!)
  // Filtert die eigene IP raus und entfernt alte Geister-Duplikate anhand der IP
  let uniqueContacts = new Map();
  contacts.forEach((c) => {
    if (c.ip !== myIp && c.ip !== "127.0.0.1" && c.ip !== "localhost") {
      // Wenn schon ein Kontakt mit der IP existiert, behalte den, der mehr Daten hat (z.B. eine echte ID)
      if (!uniqueContacts.has(c.ip) || (c.id && !uniqueContacts.get(c.ip).id)) {
        uniqueContacts.set(c.ip, c);
      }
    }
  });
  contacts = Array.from(uniqueContacts.values());
  localStorage.setItem("contacts", JSON.stringify(contacts)); // Saubere Liste speichern

  // 2. NOTIZEN AN MICH SELBST GANZ OBEN ANPINNEN (Exakt 1x!)
  const mySelfDiv = document.createElement("div");
  mySelfDiv.className = "contact-item";
  mySelfDiv.setAttribute("data-ip", myIp);
  if (document.getElementById("target-ip").value === myIp)
    mySelfDiv.classList.add("active");

  mySelfDiv.innerHTML = `<div class="status-dot online" style="width: 8px; height: 8px; margin-right: 8px;"></div>
                          <img class="contact-avatar" src="${getAvatar(localStorage.getItem("myAvatar"), myName || myId)}">
                          <div style="display:flex; flex-direction:column; overflow:hidden; flex:1;">
                              <div style="display:flex; justify-content:space-between; align-items:baseline; width:100%;">
                                  <span class="contact-name" style="font-weight:bold; font-size:14px; color:white; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;">Gespeichertes</span>
                              </div>
                              <span style="font-size:10px; color:#72767d; font-family:monospace;">Notizen & Bilder (Lokal)</span>
                          </div>`;

  mySelfDiv.onclick = () => {
    if (window.innerWidth <= 600) closeMobileSidebars();
    document.getElementById("group-sidebar").style.display = "none";
    document.getElementById("resizer-right").style.display = "none";
    document.getElementById("group-mgr-btn").style.display = "none";
    document.getElementById("pin-view-btn").style.display = "block";
    document.getElementById("search-container").style.display = "flex";

    document.getElementById("target-ip").value = myIp;
    document.getElementById("chat-header-name").innerText =
      "Gespeichertes (Notizen)";
    document.getElementById("e2e-badge").style.display = "inline-block";
    document.getElementById("sync-btn").style.display = "none";
    document.getElementById("call-btn").style.display = "none";

    renderContacts();
    renderGroups();
    loadChatHistory(myIp);
    openActiveChatUI();
    setTimeout(() => document.getElementById("chat-input").focus(), 100);
  };
  list.appendChild(mySelfDiv);

  // 3. ECHTE KONTAKTE SORTIEREN UND ANZEIGEN
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.isOnline === b.isOnline)
      return (a.name || a.id || a.ip)
        .toLowerCase()
        .localeCompare((b.name || b.id || b.ip).toLowerCase());
    return a.isOnline ? -1 : 1;
  });

  sortedContacts.forEach((c) => {
    const div = document.createElement("div");
    div.className = "contact-item";
    div.setAttribute("data-ip", c.ip);
    if (document.getElementById("target-ip").value === c.ip)
      div.classList.add("active");

    let unreadHtml =
      c.unread && c.unread > 0
        ? `<div class="unread-badge">${c.unread}</div>`
        : "";
    let nameStr = escapeHTML(c.name || "Unbekannt");
    if (c.isMuted) nameStr = "🚫 " + nameStr;
    let idStr = escapeHTML(c.id ? `(${c.id})` : "");

    div.innerHTML = `<div class="status-dot ${c.isOnline ? "online" : ""}" id="dot-${c.ip.replace(/\./g, "-")}"></div>
                                    <img class="contact-avatar" src="${getAvatar(c.avatar, c.name || c.id || c.ip)}">
                                    <div style="display:flex; flex-direction:column; overflow:hidden; flex:1;">
                                        <div style="display:flex; justify-content:space-between; align-items:baseline; width:100%;">
                                            <span class="contact-name" style="font-weight:bold; font-size:14px; color:white; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;">${nameStr}</span>
                                            <span style="font-weight:normal; font-size:11px; color:#b9bbbe; flex-shrink:0; margin-left:8px;">${idStr}</span>
                                        </div>
                                        <span style="font-size:10px; color:#72767d; font-family:monospace;">IP: ${c.ip}</span>
                                    </div>
                                    ${unreadHtml}`;

    div.onclick = () => {
      if (window.innerWidth <= 600) closeMobileSidebars();

      document.getElementById("group-sidebar").style.display = "none";
      document.getElementById("resizer-right").style.display = "none";
      document.getElementById("group-mgr-btn").style.display = "none";
      document.getElementById("pin-view-btn").style.display = "block";
      document.getElementById("search-container").style.display = "flex";
      document.getElementById("target-ip").value = c.ip;
      document.getElementById("chat-header-name").innerText =
        c.name || c.id || c.ip;
      document.getElementById("e2e-badge").style.display = c.pubKey
        ? "inline-block"
        : "none";
      document.getElementById("sync-btn").style.display = "block";
      document.getElementById("call-btn").style.display = "block";

      c.unread = 0;
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts();
      renderGroups();
      loadChatHistory(c.ip);
      if (typeof refreshVoiceButton === "function") refreshVoiceButton();
      openActiveChatUI();
      setTimeout(() => document.getElementById("chat-input").focus(), 100);
    };
    list.appendChild(div);
  });
}

function checkOnlineStatus() {
  let hasChanges = false;
  const now = Date.now();
  contacts.forEach(async (c) => {
    if (c.isOnline && (!c.lastSeen || now - c.lastSeen > 15000)) {
      c.isOnline = false;
      hasChanges = true;
    }
    sendSignal(c.ip, { type: "ping", fromIp: myIp, ...(await getMyProfile()) });
  });
  if (hasChanges) renderContacts();
  refreshRightSidebar(); // <--- Zieht Offline-Leute sofort nach unten!
}

document.getElementById("avatar-input").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = 100;
      canvas.height = 100;
      canvas.getContext("2d").drawImage(img, 0, 0, 100, 100);
      const b64 = canvas.toDataURL("image/jpeg", 0.8);
      localStorage.setItem("myAvatar", b64);
      // Setzt beim Start dein eigenes Profilbild (Entweder dein Foto oder die bunten Initialen)
      setTimeout(() => {
        document.getElementById("my-avatar").src = getAvatar(
          localStorage.getItem("myAvatar"),
          myName || myId,
        );
      }, 500); // Kurzes Warten, damit myName sicher geladen ist
      await broadcastProfile();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

function incrementUnread(ipOrGroupId) {
  if (document.getElementById("target-ip").value === ipOrGroupId) return;

  if (ipOrGroupId.startsWith("grp_")) {
    let gIndex = groups.findIndex((g) => g.id === ipOrGroupId);
    if (gIndex !== -1) {
      groups[gIndex].unread = (groups[gIndex].unread || 0) + 1;
      localStorage.setItem("groups", JSON.stringify(groups));
      renderGroups();
    }
  } else {
    let cIndex = contacts.findIndex((c) => c.ip === ipOrGroupId);
    if (cIndex !== -1) {
      contacts[cIndex].unread = (contacts[cIndex].unread || 0) + 1;
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts();
    }
  }
}

// --- NEU: NACHRICHT BEARBEITEN SPEICHERN ---
window.confirmEditMsg = function () {
  const msgId = window.currentEditMsgId;
  const newText = document.getElementById("edit-msg-input").value.trim();
  document.getElementById("edit-msg-modal").style.display = "none";

  if (newText !== "" && msgId) {
    const safeText = newText;

    // 1. Lokale UI direkt anpassen
    const msgEl = document.getElementById(`msg-${msgId}`);
    if (msgEl) {
      const cDiv = msgEl.querySelector(".chat-content");
      if (cDiv) {
        cDiv.innerHTML = parseMarkdown(safeText);
        cDiv.classList.add("edited");
        cDiv.setAttribute("data-raw-text", encodeURIComponent(safeText));
      }
    }

    // 2. Datenbank updaten
    DBManager.updateMessage(msgId, { text: safeText, isEdited: true });

    // 3. Ans Netzwerk schicken
    const tIp = document.getElementById("target-ip").value;
    if (tIp.startsWith("grp_")) {
      const grp = groups.find((g) => g.id === tIp);
      if (grp)
        grp.members.forEach((mIp) => {
          if (mIp !== myIp)
            sendSignal(mIp, {
              type: "edit-msg",
              msgId: msgId,
              newText: safeText,
              fromIp: myIp,
              groupId: grp.id,
            });
        });
    } else {
      sendSignal(tIp, {
        type: "edit-msg",
        msgId: msgId,
        newText: safeText,
        fromIp: myIp,
      });
    }
  }
};

// --- FENSTER FÜR ANGEPINNTE NACHRICHTEN ÖFFNEN ---
async function openPinnedMessages() {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp) return;

  const list = document.getElementById("pinned-messages-list");
  list.innerHTML =
    '<p style="color:#72767d; text-align:center;">Lade Archiv...</p>';
  document.getElementById("pinned-modal").style.display = "flex";

  // Hol alle Nachrichten aus der Gigabyte-Datenbank und filtere die gepinnten
  const history = await DBManager.getMessages(targetIp);
  const pinned = history.filter((m) => m.isPinned);

  if (pinned.length === 0) {
    list.innerHTML =
      '<p style="color:#72767d; text-align:center; margin-top:20px;">No pinned messages in this chat.</p>';
    return;
  }

  list.innerHTML = "";
  pinned.forEach((msg) => {
    const date = new Date(msg.timestamp).toLocaleString("de-DE");
    list.innerHTML += `
                        <div style="background: #2b2d31; padding: 10px; border-radius: 5px; margin-bottom: 10px; border-left: 3px solid var(--vula-primary);">
                            <div style="font-size: 11px; color: #b9bbbe; margin-bottom: 5px; display:flex; justify-content:space-between;">
                                <span><b>${msg.senderName}</b> • ${date}</span>
                                <span style="cursor:pointer;" title="Zum Chat springen" onclick="document.getElementById('pinned-modal').style.display='none'; document.getElementById('msg-${msg.timestamp}').scrollIntoView({behavior: 'smooth', block: 'center'});">🔗</span>
                            </div>
                            <div style="color: #dcddde; font-size: 13px;">${parseMarkdown(msg.text)}</div>
                        </div>`;
  });
}

// Schließt das Menü, wenn man woanders hin klickt
document.addEventListener("click", (e) => {
  if (!e.target.closest("#context-menu"))
    document.getElementById("context-menu").style.display = "none";
});

document.addEventListener("click", () => (ctxMenu.style.display = "none"));

window.openImage = function (src, name) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-download").href = src;
  document.getElementById("lightbox-download").download =
    makeUniqueFilename(name);
  document.getElementById("image-modal").style.display = "flex";
};
function formatTime(timestamp) {
  const d = new Date(parseInt(timestamp));
  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
}

function appendProgressUI(
  senderIp,
  senderName,
  fileName,
  progressId,
  timestamp,
) {
  // NEU: XSS-Schutz für Ladebalken!
  senderName = escapeHTML(senderName);
  fileName = escapeHTML(fileName);

  const chatBox = document.getElementById("chat-box");
  let avatarSrc = defaultAvatar;
  if (senderIp === "Ich")
    avatarSrc = localStorage.getItem("myAvatar") || defaultAvatar;
  else {
    const c = contacts.find((c) => c.ip === senderIp);
    if (c && c.avatar) avatarSrc = c.avatar;
  }
  const html = `<div class="chat-msg" id="msg-${timestamp}"><img class="msg-avatar" src="${avatarSrc}"><div style="flex: 1; min-width: 0; padding-right: 20px;"><div class="chat-header"><span class="chat-name" style="color: ${senderIp === "Ich" ? "#3ba55d" : "white"};">${senderName}</span></div><div style="background:#1c1d24; padding:10px 15px; border-radius:5px; margin-top:5px;"><div style="font-size:12px; color:#b9bbbe; margin-bottom:8px;">Sende/Empfange: <b>${fileName}</b>...</div><progress id="${progressId}" value="0" max="100" style="width: 100%; height: 8px; accent-color: var(--vula-primary);"></progress></div></div></div>`;
  chatBox.insertAdjacentHTML("beforeend", html);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// NEU: Hybrides Speichern (IndexedDB + LocalStorage)
// NEU: Hybrides Speichern (Volle Daten in DB, gekürzte in LocalStorage)
// NEU: Reine IndexedDB-Speicherung (Kein LocalStorage-Müll mehr!)
// 1. UPDATE: saveMessageLocally
async function saveMessageLocally(
  partnerIp,
  senderIp,
  senderName,
  text,
  fileData = null,
  fileName = null,
  fileSize = 0,
  timestamp,
  fileKey = null,
  replyData = null,
) {
  const messageObj = {
    timestamp,
    senderIp,
    senderName,
    text,
    file: fileData,
    fileName,
    fileSize,
    fileKey,
    replyData,
  };
  await DBManager.saveMessage(partnerIp, messageObj);
}

// NEU: Versucht erst das Archiv zu laden, dann den Fallback
// NEU: Lädt nur noch sauber aus der großen Datenbank
// 2. UPDATE: loadChatHistory
// --- NEU: GLOBALE LAZY-LOADING VARIABLEN ---
window.chatHistoryRendered = 50;
window.isBatchRendering = false;
window.chatScrollListenerAttached = false;

async function loadChatHistory(partnerIp) {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = "";

  let history = await DBManager.getMessages(partnerIp);
  const useLazyLoad = localStorage.getItem("setting_lazy_load") !== "false";

  // Setzt den Zähler auf 50 (oder auf Maximum, wenn Lazy Loading aus ist)
  window.chatHistoryRendered = useLazyLoad
    ? Math.min(50, history.length)
    : history.length;
  let toRender = history.slice(-window.chatHistoryRendered);

  if (history.length === 0) {
    if (partnerIp !== "grp_global") {
      chatBox.innerHTML = `<p style="color:#72767d; text-align:center; margin-top:20px;">Dieser Chat ist gesichert durch Ende-zu-Ende Verschlüsselung.</p>`;
    }
  } else {
    window.isBatchRendering = true; // Sperrt das Auto-Scrollen!
    toRender.forEach((msg) =>
      appendChatUI(
        msg.senderIp,
        msg.senderName,
        msg.text,
        msg.file,
        msg.fileName,
        msg.timestamp,
        msg.fileSize,
        false,
        msg.fileKey,
        msg.replyData,
        msg.isPinned,
      ),
    );
    window.isBatchRendering = false; // Entsperrt es wieder
    chatBox.scrollTop = chatBox.scrollHeight; // Scrollt 1x sauber ans Ende
  }

  if (partnerIp === "grp_global") {
    setTimeout(() => {
      appendChatUI(
        "System",
        "System",
        t("warn_global_unencrypted"),
        null,
        null,
        Date.now(),
        0,
      );
    }, 50);
  }

  // Lauscher anheften, falls noch nicht geschehen
  if (!window.chatScrollListenerAttached) {
    chatBox.addEventListener("scroll", handleChatScroll);
    window.chatScrollListenerAttached = true;
  }
}

// --- NEU: AUTO-NACHLADEN BEIM SCROLLEN ---
async function handleChatScroll() {
  const chatBox = document.getElementById("chat-box");
  const useLazyLoad = localStorage.getItem("setting_lazy_load") !== "false";

  // Abbrechen, wenn Option aus ist oder wir gerade schon arbeiten
  if (!useLazyLoad || window.isBatchRendering) return;

  // Wenn wir oben anstoßen (mit 10px Puffer für Browser-Rundungsfehler)
  if (chatBox.scrollTop <= 10) {
    window.isBatchRendering = true;

    const currentIp = document.getElementById("target-ip").value;
    if (!currentIp) {
      window.isBatchRendering = false;
      return;
    }

    // Frische Historie als Quelle der Wahrheit holen
    const history = await DBManager.getMessages(currentIp);

    // Wenn schon alle geladen sind, nichts tun
    if (window.chatHistoryRendered >= history.length) {
      window.isBatchRendering = false;
      return;
    }

    // Wir merken uns, wie groß der Chat VOR dem Nachladen war
    const oldScrollHeight = chatBox.scrollHeight;

    // Erhöhe das Limit um 50
    window.chatHistoryRendered = Math.min(
      history.length,
      window.chatHistoryRendered + 50,
    );

    // UI leeren und größeren Abschnitt laden
    chatBox.innerHTML = "";
    let toRender = history.slice(-window.chatHistoryRendered);

    toRender.forEach((msg) =>
      appendChatUI(
        msg.senderIp,
        msg.senderName,
        msg.text,
        msg.file,
        msg.fileName,
        msg.timestamp,
        msg.fileSize,
        false,
        msg.fileKey,
        msg.replyData,
        msg.isPinned,
      ),
    );

    // WICHTIG: Die Scroll-Position millimetergenau wiederherstellen!
    chatBox.scrollTop = chatBox.scrollHeight - oldScrollHeight;

    // Kurzer Timeout, damit das DOM Luft holen kann
    setTimeout(() => {
      window.isBatchRendering = false;
    }, 50);
  }
}

// NEU: Löscht nur noch aus der Datenbank
async function deleteMessage(timestamp) {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp) return;

  const msgEl = document.getElementById(`msg-${timestamp}`);
  if (msgEl) msgEl.remove();
  await DBManager.deleteMessage(timestamp);

  if (targetIp.startsWith("grp_")) {
    const grp = groups.find((g) => g.id === targetIp);
    if (grp)
      grp.members.forEach((mIp) => {
        if (mIp !== myIp)
          sendSignal(mIp, {
            type: "delete-msg",
            msgId: timestamp,
            fromIp: myIp,
            groupId: grp.id,
          });
      });
  } else {
    sendSignal(targetIp, {
      type: "delete-msg",
      msgId: timestamp,
      fromIp: myIp,
    });
  }
}

// NEU: Der Markdown Parser (inkl. Schutz vor bösem HTML/XSS)
// NEU: Der Markdown Parser (inkl. klickbarer Links!)
// NEU: Der Markdown Parser (inkl. klickbarer Links & Inline-Medien!)
function parseMarkdown(text) {
  if (!text) return "";
  let safe = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // URLs in klickbare Links ODER eingebettete Medien verwandeln
  safe = safe.replace(/(https?:\/\/[^\s]+)/g, (match) => {
    const url = match;
    const lowerUrl = url.toLowerCase();

    // 1. YouTube Vorschau (Jetzt deutlich robuster)
    const ytMatch = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/i,
    );
    if (ytMatch && ytMatch[1]) {
      return `<a href="${url}" target="_blank" style="color: #00a8fc; text-decoration: none;">${url}</a><br><iframe width="350" height="200" src="https://www.youtube-nocookie.com/embed/${ytMatch[1]}" frameborder="0" allowfullscreen style="margin-top: 5px; border-radius: 8px;"></iframe>`;
    }
    // 2. Bild Vorschau (Jetzt mit .svg!)
    if (lowerUrl.match(/\.(jpeg|jpg|gif|png|webp|svg)(\?.*)?$/)) {
      return `<a href="${url}" target="_blank" style="color: #00a8fc; text-decoration: none;">${url}</a><br><img src="${url}" onclick="openImage(this.src, 'Web-Bild')" style="max-width: 300px; max-height: 300px; margin-top: 5px; border-radius: 8px; cursor: pointer; border: 1px solid #131419;">`;
    }
    // 3. Video Vorschau (.mp4, .webm)
    if (lowerUrl.match(/\.(mp4|webm)(\?.*)?$/)) {
      return `<a href="${url}" target="_blank" style="color: #00a8fc; text-decoration: none;">${url}</a><br><video src="${url}" controls style="max-width: 300px; max-height: 300px; margin-top: 5px; border-radius: 8px; border: 1px solid #131419;"></video>`;
    }

    // Standard Link (Fallback)
    return `<a href="${url}" target="_blank" style="color: #00a8fc; text-decoration: underline; word-break: break-all;">${url}</a>`;
  });

  safe = safe.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");
  safe = safe.replace(/`([^`]+)`/g, "<code>$1</code>");
  safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  safe = safe.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  safe = safe.replace(/^&gt; (.*$)/gm, "<blockquote>$1</blockquote>");
  safe = safe.replace(/\n/g, "<br>");

  // NEU: Die Waschmaschine! Killt jeden fremden HTML/JS-Code, bevor er gerendert wird.
  // Wir erlauben nur die sicheren Tags, die unsere App für Videos und Links braucht.
  return DOMPurify.sanitize(safe, {
    ADD_TAGS: ["iframe", "video", "audio"],
    ADD_ATTR: [
      "allowfullscreen",
      "controls",
      "target",
      "src",
      "width",
      "height",
      "frameborder",
      "style",
      "class",
    ],
  });
}

// --- DATUMSTRENNER HILFSFUNKTION ---
// --- DATUMSTRENNER HILFSFUNKTION ---
function getDateLabel(ts) {
  const date = new Date(parseInt(ts));
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0))
    return t("date_today");
  if (date.setHours(0, 0, 0, 0) === yesterday.setHours(0, 0, 0, 0))
    return t("date_yesterday");

  // Formatiert das restliche Datum passend zur eingestellten Sprache
  const locale = currentLang === "en" ? "en-US" : "de-DE";
  return new Date(parseInt(ts)).toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// 3. UPDATE: appendChatUI (Baut jetzt die schicke "Antwort auf"-Box)
// 3. UPDATE: appendChatUI
function appendChatUI(
  senderIp,
  senderName,
  text,
  fileData = null,
  fileName = null,
  timestamp,
  fileSize = 0,
  isLargeBlob = false,
  fileKey = null,
  replyData = null,
  isPinned = false,
) {
  // XSS-Schutz: Waschmaschine für Namen und Dateinamen! Text wird unten von DOMPurify gewaschen.
  senderName = escapeHTML(senderName);
  if (fileName) fileName = escapeHTML(fileName);
  if (replyData) replyData.senderName = escapeHTML(replyData.senderName);

  const chatBox = document.getElementById("chat-box");
  const msgElements = chatBox.querySelectorAll(".chat-msg");
  const lastMsg =
    msgElements.length > 0 ? msgElements[msgElements.length - 1] : null;
  let showDivider = false;

  if (!lastMsg) {
    showDivider = true;
  } else {
    const lastTs = lastMsg.getAttribute("data-timestamp");
    if (
      lastTs &&
      new Date(parseInt(lastTs)).setHours(0, 0, 0, 0) !==
        new Date(parseInt(timestamp)).setHours(0, 0, 0, 0)
    ) {
      showDivider = true;
    }
  }
  if (showDivider)
    chatBox.insertAdjacentHTML(
      "beforeend",
      `<div class="date-divider"><span>${getDateLabel(timestamp)}</span></div>`,
    );

  let avatarSrc = "";
  if (senderIp === "Ich")
    avatarSrc = getAvatar(localStorage.getItem("myAvatar"), myName || myId);
  else {
    const c = contacts.find((c) => c.ip === senderIp);
    avatarSrc = getAvatar(c ? c.avatar : null, senderName);
  }

  let contentHTML = `<div class="chat-content" data-raw-text="${encodeURIComponent(text)}">${parseMarkdown(text)}</div>`;

  if (fileData) {
    let sizeStr = fileSize ? formatBytes(fileSize) : "";
    let actualUrl = fileData;
    if (fileData.includes("/downloads/"))
      actualUrl = apiBaseUrl + "/downloads/" + fileData.split("/downloads/")[1];
    const isImage =
      fileName && fileName.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i);
    const isAudio = fileName && fileName.match(/\.(webm|mp3|wav|ogg)$/i);

    if (fileKey) {
      contentHTML += `<div style="margin-top:5px; background:#1c1d24; padding:10px 15px; border-radius:5px; display:inline-flex; align-items: center; gap: 10px;"><span style="font-size: 20px;">🔒</span><div style="display: flex; flex-direction: column;"><button onclick="downloadSecureFile('${actualUrl}', '${fileName}', '${fileKey}')" style="background:#3ba55d; color:white; border:none; padding:6px 12px; border-radius:4px; font-weight:bold; cursor:pointer;">${t("btn_secure_download")}</button><span style="color:#3ba55d; font-size:11px; margin-top:4px; font-weight:bold;">${sizeStr} (E2E Encrypted)</span></div></div>`;
    } else if (actualUrl.startsWith("data:image") || isImage) {
      contentHTML += `<div style="margin-top: 5px;"><img src="${actualUrl}" data-filename="${fileName}" class="chat-img" onclick="openImage(this.src, '${fileName}')"><div style="font-size: 11px; color: #72767d; margin-top: 4px; font-weight: bold;">🖼️ ${fileName} ${sizeStr ? `&bull; ${sizeStr}` : ""}</div></div>`;
    } else if (actualUrl.startsWith("data:audio") || isAudio) {
      contentHTML += `<div style="margin-top: 5px; background: #1c1d24; padding: 10px; border-radius: 5px; display: inline-block;"><div style="font-size: 11px; color: #3ba55d; margin-bottom: 5px; font-weight: bold;">🎙️ Sprachnachricht ${sizeStr ? `(${sizeStr})` : ""}</div><audio controls src="${actualUrl}" style="height: 30px; outline: none;"></audio></div>`;
    } else {
      let expiryNote = isLargeBlob
        ? '<br><span style="color:#ed4245; font-size:10px;">Läuft beim Schließen ab</span>'
        : "";
      contentHTML += `<div style="margin-top:5px; background:#1c1d24; padding:10px 15px; border-radius:5px; display:inline-flex; align-items: center; gap: 10px;"><span style="font-size: 20px;">📁</span><div style="display: flex; flex-direction: column;"><button onclick="downloadNormalFile('${actualUrl}', '${fileName}')" style="background:#00a8fc; color:white; border:none; padding:6px 12px; border-radius:4px; font-weight:bold; cursor:pointer;">${fileName} ${t("btn_download")}</button><span style="color:#72767d; font-size:11px; margin-top:4px;">${sizeStr || ""}</span>${expiryNote}</div></div>`;
    }
  }

  let replyHtml = "";
  if (replyData) {
    const cleanReplyText =
      typeof parseMarkdown === "function"
        ? parseMarkdown(replyData.text).replace(/<[^>]*>?/gm, "")
        : replyData.text;
    replyHtml = `
                    <div class="reply-reference" style="font-size: 11px; color: #b9bbbe; margin-bottom: 4px; display: flex; align-items: center; gap: 5px; cursor: pointer; transition: 0.2s;" onclick="jumpToMessage('${replyData.id}')" onmouseover="this.style.color='#fdf4ff'" onmouseout="this.style.color='#b9bbbe'">
                        <div style="border-top: 2px solid #5e1c73; border-left: 2px solid #5e1c73; width: 12px; height: 12px; border-top-left-radius: 4px; margin-top: 4px; margin-right: 2px; display: inline-block;"></div>
                        <span style="font-weight: bold; color: #d946ef;">@${replyData.senderName}</span>
                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 250px; opacity: 0.8;">${cleanReplyText}</span>
                    </div>`;
  }

  // FIX: Holt das Pin-Icon aus der Datenbank zurück!
  let pinHtml = isPinned
    ? ' <span class="pin-icon" style="font-size:12px;" title="Angepinnt">📌</span>'
    : "";

  // Holt das "Uhr" (Deutsch) oder lässt es weg (Englisch)
  const uhrText = t("lbl_time_uhr") ? ` ${t("lbl_time_uhr")}` : "";

  const html = `<div class="chat-msg" id="msg-${timestamp}" data-timestamp="${timestamp}" data-senderip="${senderIp}">
                    <img class="msg-avatar" src="${avatarSrc}">
                    <div style="flex: 1; min-width: 0;">
                        ${replyHtml}
                        <div class="chat-header">
                            <span class="chat-name" style="color: ${senderIp === "Ich" ? "#db2777" : "white"};">${senderName}</span>
                            <span class="chat-time">${formatTime(timestamp)}${uhrText}</span>${pinHtml}
                        </div>
                        ${contentHTML}
                    </div>
                </div>`;

  chatBox.insertAdjacentHTML("beforeend", html);
  // NEU: Scrollt nur nach unten, wenn wir NICHT gerade einen 50er-Batch laden!
  if (!window.isBatchRendering) {
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// --- NEU: REPLY & FORWARD LOGIK ---
window.currentReplyData = null;
let forwardTextPayload = "";

window.cancelReply = function () {
  window.currentReplyData = null;
  document.getElementById("reply-preview-bar").style.display = "none";
  document.getElementById("chat-input-wrapper").style.borderRadius = "8px";
};

window.openForwardModal = function (text) {
  forwardTextPayload = text;
  const list = document.getElementById("forward-list");
  list.innerHTML = "";

  groups.forEach((g) => {
    list.innerHTML += `<div class="contact-item" style="justify-content: space-between;">
                        <div style="display:flex; align-items:center; gap:10px;"><span>👥</span> <span style="font-weight:bold;">${g.name}</span></div>
                        <button onclick="executeForward('${g.id}', this)" style="padding: 5px 10px; font-size:12px; background:#10b981; border:none; border-radius:4px; color:white; cursor:pointer;">${t("btn_send")}</button>
                    </div>`;
  });
  contacts.forEach((c) => {
    list.innerHTML += `<div class="contact-item" style="justify-content: space-between;">
                        <div style="display:flex; align-items:center; gap:10px;"><img src="${getAvatar(c.avatar, c.name || c.ip)}" style="width:24px; border-radius:50%;"> <span style="font-weight:bold;">${c.name || c.ip}</span></div>
                        <button onclick="executeForward('${c.ip}', this)" style="padding: 5px 10px; font-size:12px; background:#10b981; border:none; border-radius:4px; color:white; cursor:pointer;">${t("btn_send")}</button>
                    </div>`;
  });
  document.getElementById("forward-modal").style.display = "flex";
};

window.executeForward = async function (targetIp, btnElement) {
  // FIX: Nutzt jetzt die Übersetzung für den Forward-Tag
  const text = `${t("msg_forwarded")}\n${forwardTextPayload}`;

  const profile = await getMyProfile();
  const ts = Date.now();
  const isGroup = targetIp.startsWith("grp_");

  // --- NEU: NOTIZEN AN SICH SELBST (KURZSCHLUSS) ---
  if (targetIp === myIp) {
    appendChatUI(
      "Ich",
      profile.name,
      text,
      null,
      null,
      ts,
      0,
      false,
      null,
      window.currentReplyData,
    );
    saveMessageLocally(
      myIp,
      "Ich",
      profile.name,
      text,
      null,
      null,
      0,
      ts,
      null,
      window.currentReplyData,
    );
    chatInput.value = "";
    chatInput.style.height = "auto";
    cancelReply();
    return; // Hier stoppen! Nicht ans Netzwerk funken.
  }

  const bundleData = {
    text: text,
    file: null,
    fileName: null,
    fileSize: 0,
    groupId: isGroup ? targetIp : null,
    replyData: window.currentReplyData,
  };

  if (isGroup) {
    const grp = groups.find((g) => g.id === targetIp);
    if (grp) {
      for (let mIp of grp.members) {
        if (mIp === myIp) continue;
        const partner = contacts.find((c) => c.ip === mIp);
        const encryptedPayload = await CryptoManager.encryptPayload(
          JSON.stringify(bundleData),
          partner ? partner.pubKey : null,
        );
        sendSignal(mIp, {
          type: "chat",
          payload: encryptedPayload,
          fromIp: myIp,
          timestamp: ts,
          ...profile,
        });
      }
    }
  } else {
    const partner = contacts.find((c) => c.ip === targetIp);
    const encryptedPayload = await CryptoManager.encryptPayload(
      JSON.stringify(bundleData),
      partner ? partner.pubKey : null,
    );
    sendSignal(targetIp, {
      type: "chat",
      payload: encryptedPayload,
      fromIp: myIp,
      timestamp: ts,
      ...profile,
    });
  }

  saveMessageLocally(targetIp, "Ich", profile.name, text, null, null, 0, ts);

  if (document.getElementById("target-ip").value === targetIp) {
    appendChatUI("Ich", profile.name, text, null, null, ts, 0);
  } else {
    incrementUnread(targetIp);
  }

  // FIX: Visuelles Feedback am Button ebenfalls übersetzt
  btnElement.innerText = t("btn_sent_ok");
  btnElement.style.background = "#290e30";
  btnElement.disabled = true;
  cancelReply();
};
// --- NEU: VulaLAN-STYLE DATEI-VORSCHAU (STAGING) ---
let stagedFile = null;

window.stageFile = function (file) {
  stagedFile = file;
  const stagingArea = document.getElementById("file-staging-area");
  const inputWrapper = document.getElementById("chat-input-wrapper");
  const imgPreview = document.getElementById("staged-file-img");
  const iconPreview = document.getElementById("staged-file-icon");

  document.getElementById("staged-file-name").innerText = file.name;
  document.getElementById("staged-file-size").innerText = formatBytes(
    file.size,
  );

  // Ist es ein Bild? Dann zeigen wir eine kleine Vorschau!
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imgPreview.src = e.target.result;
      imgPreview.style.display = "block";
      iconPreview.style.display = "none";
    };
    reader.readAsDataURL(file);
  } else {
    imgPreview.style.display = "none";
    iconPreview.style.display = "flex";
  }

  stagingArea.style.display = "flex";
  inputWrapper.style.borderRadius = "0 0 8px 8px"; // Macht den Rand eckig, damit es wie eine Box aussieht
  document.getElementById("chat-input").focus();
};

window.clearStagedFile = function () {
  stagedFile = null;
  document.getElementById("file-staging-area").style.display = "none";
  document.getElementById("chat-input-wrapper").style.borderRadius = "8px";
  document.getElementById("staged-file-img").src = "";
};

const chatInput = document.getElementById("chat-input");

chatInput.addEventListener("input", function () {
  // 1. WICHTIG: Höhe auf auto setzen, damit das Feld schrumpfen kann, falls Text gelöscht wird
  this.style.height = "auto";

  // 2. Neue Höhe anhand des Inhalts berechnen (z.B. gecappt auf 150px maximal)
  this.style.height = Math.min(this.scrollHeight, 150) + "px";

  // Falls das Maximum erreicht ist, darf gescrollt werden
  if (this.scrollHeight >= 150) {
    this.style.overflowY = "auto";
  } else {
    this.style.overflowY = "hidden";
  }
});

/*
            chatInput.addEventListener('input', function() {
                this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';
                const tIp = document.getElementById('target-ip').value; if(!tIp) return; 
                sendSignal(tIp, { type: 'typing', state: true, fromIp: myIp }); 
                clearTimeout(typingTimeout); typingTimeout = setTimeout(() => sendSignal(tIp, { type: 'typing', state: false, fromIp: myIp }), 1500); 
            });
            */

chatInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();

    const targetIp = document.getElementById("target-ip").value;
    if (!targetIp) {
      // NEU: Freundlicher Hinweis statt lautlosem Abbruch!
      alert(t("alert_select_chat"));
      return;
    }
    // ... (Der Rest deines Codes hier bleibt gleich)

    const text = chatInput.value.trim();

    // NEU: Haben wir eine Datei vorgemerkt? Dann beides abschicken!
    if (stagedFile) {
      handleFileUpload(stagedFile, text);
      clearStagedFile();
      chatInput.value = "";
      chatInput.style.height = "auto";
      sendSignal(targetIp, { type: "typing", state: false, fromIp: myIp });
      return;
    }

    // Normale Textnachricht ohne Datei
    if (!text) return;

    const profile = await getMyProfile();
    const ts = Date.now();
    const isGroup = targetIp.startsWith("grp_");

    const bundleData = {
      text: text,
      file: null,
      fileName: null,
      fileSize: 0,
      groupId: isGroup ? targetIp : null,
      replyData: window.currentReplyData,
    };

    if (targetIp === "grp_global") {
      // 1. SERVER-MANAGED CHAT (Unverschlüsselt an den Server)
      sendSignal(null, {
        type: "global-chat",
        payload: bundleData,
        fromIp: myIp,
        timestamp: ts,
        ...profile,
      });
    } else if (isGroup) {
      // 2. PRIVATE GRUPPE (Volles E2EE Mesh-Routing)
      const grp = groups.find((g) => g.id === targetIp);
      if (grp) {
        for (let mIp of grp.members) {
          if (mIp === myIp) continue;
          const partner = contacts.find((c) => c.ip === mIp);
          const encryptedPayload = await CryptoManager.encryptPayload(
            JSON.stringify(bundleData),
            partner ? partner.pubKey : null,
          );
          sendSignal(mIp, {
            type: "chat",
            payload: encryptedPayload,
            fromIp: myIp,
            timestamp: ts,
            ...profile,
          });
        }
      }
    } else {
      // 3. DIREKTNACHRICHT (Volles E2EE)
      const partner = contacts.find((c) => c.ip === targetIp);
      const encryptedPayload = await CryptoManager.encryptPayload(
        JSON.stringify(bundleData),
        partner ? partner.pubKey : null,
      );
      sendSignal(targetIp, {
        type: "chat",
        payload: encryptedPayload,
        fromIp: myIp,
        timestamp: ts,
        ...profile,
      });

      if (partner && !partner.isOnline) {
        appendChatUI(
          "System",
          "System",
          "🕒 Partner = offline. Message saved locally, sync once they come online.",
          null,
          null,
          Date.now(),
          0,
        );
      }
    }

    // FIX: Antwort-Daten (replyData) an deine eigene UI und Datenbank übergeben!
    appendChatUI(
      "Ich",
      profile.name,
      text,
      null,
      null,
      ts,
      0,
      false,
      null,
      window.currentReplyData,
    );
    saveMessageLocally(
      targetIp,
      "Ich",
      profile.name,
      text,
      null,
      null,
      0,
      ts,
      null,
      window.currentReplyData,
    );

    chatInput.value = "";
    chatInput.style.height = "auto";
    sendSignal(targetIp, { type: "typing", state: false, fromIp: myIp });
    cancelReply(); // Beendet den Antwort-Modus
  }
});

// FIX: Erwartet jetzt als 2. Parameter den angehängten Text!

// FIX: Nimmt Datei und Text entgegen und weiß jetzt exakt, wer du bist und mit wem du schreibst!

async function handleFileUpload(file, attachedText = "") {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp) {
    if (typeof clearStagedFile === "function") clearStagedFile();
    // NEU: Zweisprachiger Hinweis, wenn man Dateien ohne offenen Chat droppt
    return alert(t("alert_select_chat"));
  }
  // ... (Der Rest deines Codes hier bleibt gleich)

  const profile = await getMyProfile();
  const ts = Date.now();

  // Checkbox für Server-Uploads auslesen
  const toggleEl = document.getElementById("encrypt-toggle");
  const useE2EE = toggleEl ? toggleEl.checked : true;

  // Apostroph-Bombe entschärfen
  const safeFileName = file.name.replace(/'/g, "\\'").replace(/"/g, "&quot;");
  const isGroup = targetIp.startsWith("grp_");

  // --- NEU: DATEIEN/BILDER ALS NOTIZ SPEICHERN ---
  if (targetIp === myIp) {
    const reader = new FileReader();
    reader.onload = async function (event) {
      const b64 = event.target.result;
      appendChatUI(
        "Ich",
        profile.name,
        attachedText,
        b64,
        safeFileName,
        ts,
        file.size,
        false,
        null,
        window.currentReplyData,
      );
      saveMessageLocally(
        myIp,
        "Ich",
        profile.name,
        attachedText,
        b64,
        safeFileName,
        file.size,
        ts,
        null,
        window.currentReplyData,
      );
      if (typeof clearStagedFile === "function") clearStagedFile();
      cancelReply();
    };
    reader.readAsDataURL(file);
    return; // Hier stoppen! Nicht uploaden.
  }

  // =======================================================
  // DATEIEN ÜBER 15 MB
  // =======================================================
  if (file.size > 15 * 1024 * 1024) {
    // --- PFAD A: P2P DIREKT-TRANSFER (WebRTC) ---
    if (typeof currentMode !== "undefined" && currentMode === "p2p") {
      if (isGroup)
        return alert(
          "P2P Dateiübertragung (>15MB) funktioniert momentan nur in Direktnachrichten!",
        );

      appendProgressUI("Ich", profile.name, safeFileName, "prog-" + ts, ts);

      fileSendPC = new RTCPeerConnection({ iceServers: getIceServers() });
      const dc = fileSendPC.createDataChannel("fileTransfer");
      dc.binaryType = "arraybuffer";

      fileSendPC.onicecandidate = (e) => {
        if (e.candidate)
          sendSignal(targetIp, { type: "ice-file", candidate: e.candidate });
      };

      dc.onopen = async () => {
        // FIX: Sendet jetzt auch den eingegebenen Text (attachedText) sicher via P2P mit!
        dc.send(
          JSON.stringify({
            name: safeFileName,
            size: file.size,
            type: file.type,
            timestamp: ts,
            text: attachedText,
          }),
        );
        const chunkSize = 64 * 1024;
        let offset = 0;

        while (offset < file.size) {
          if (dc.bufferedAmount > 2 * 1024 * 1024) {
            await new Promise((resolve) => {
              const check = () =>
                dc.bufferedAmount < 1024 * 1024
                  ? resolve()
                  : setTimeout(check, 30);
              check();
            });
          }
          if (dc.readyState !== "open") break;

          const chunk = await file
            .slice(offset, offset + chunkSize)
            .arrayBuffer();
          dc.send(chunk);
          offset += chunk.byteLength;

          const pBar = document.getElementById("prog-" + ts);
          if (pBar) pBar.value = Math.round((offset / file.size) * 100);
        }

        const progMsg = document.getElementById(`msg-${ts}`);
        if (progMsg) progMsg.remove();

        // FIX: Gibt dir das Feedback, dass P2P sicher ist
        let p2pStatusText = "🚀 Datei gesendet (Sichere P2P-Direktverbindung)!";
        let finalUiText = attachedText
          ? attachedText +
            `<br><br><span style="color:#3ba55d; font-size:11px;">${p2pStatusText}</span>`
          : p2pStatusText;

        appendChatUI(
          "Ich",
          profile.name,
          finalUiText,
          null,
          safeFileName,
          ts,
          file.size,
          true,
        );
        saveMessageLocally(
          targetIp,
          "Ich",
          profile.name,
          finalUiText,
          null,
          safeFileName,
          file.size,
          ts,
        );

        setTimeout(() => {
          if (fileSendPC) {
            fileSendPC.close();
            fileSendPC = null;
          }
        }, 2000);
      };

      const offer = await fileSendPC.createOffer();
      await fileSendPC.setLocalDescription(offer);
      sendSignal(targetIp, { type: "file-offer", offer: offer, fromIp: myIp });

      return;
    }

    // --- PFAD B: NORMALE HTTP SERVER-UPLOAD ---
    const chunkSize = 2 * 1024 * 1024;
    const totalChunks = Math.ceil(file.size / chunkSize);
    const fileId = Date.now().toString();
    const progressId = "prog-" + ts;

    appendProgressUI("Ich", profile.name, safeFileName, progressId, ts);

    let fileCryptoKey = null;
    let fileKeyB64 = null;

    // Lokale AES-Verschlüsselung für den Server
    if (useE2EE) {
      fileCryptoKey = await window.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"],
      );
      const rawKey = await window.crypto.subtle.exportKey("raw", fileCryptoKey);
      fileKeyB64 = btoa(String.fromCharCode(...new Uint8Array(rawKey)));
    }

    let offset = 0;
    let isSuccess = true;
    let downloadUrl = "";
    let uploadErrorMsg = "Upload fehlgeschlagen.";

    for (let i = 0; i < totalChunks; i++) {
      const chunkBuffer = await file
        .slice(offset, offset + chunkSize)
        .arrayBuffer();
      offset += chunkSize;
      try {
        let payload;
        if (useE2EE) {
          const iv = window.crypto.getRandomValues(new Uint8Array(12));
          const encryptedChunk = await window.crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv },
            fileCryptoKey,
            chunkBuffer,
          );
          payload = new Uint8Array(12 + encryptedChunk.byteLength);
          payload.set(iv, 0);
          payload.set(new Uint8Array(encryptedChunk), 12);
        } else {
          payload = chunkBuffer;
        }

        const response = await fetch(apiBaseUrl + "/upload-chunk", {
          method: "POST",
          headers: {
            "x-file-name": encodeURIComponent(file.name),
            "x-file-id": fileId,
            "x-chunk-index": i,
            "x-total-chunks": totalChunks,
            "x-file-size": file.size,
            "Content-Type": "application/octet-stream",
            "x-server-pass": window.serverPin || "",
            "x-lang": currentLang, // <--- NEU: Sprache ans Backend funken
          },
          body: payload,
        });

        const result = await response.json();

        if (result.status === "error") {
          uploadErrorMsg = result.msg || "Upload vom Server blockiert.";
          isSuccess = false;
          break;
        }

        if (result.status === "complete") {
          downloadUrl = apiBaseUrl + result.url;
        }

        const pBar = document.getElementById(progressId);
        if (pBar) pBar.value = Math.round(((i + 1) / totalChunks) * 100);
      } catch (err) {
        isSuccess = false;
        break;
      }
    }

    const progMsg = document.getElementById(`msg-${ts}`);
    if (progMsg) progMsg.remove();

    if (isSuccess && downloadUrl) {
      // FIX: Repariertes Datenpaket für große Dateien (> 15MB)
      const bundleData = {
        text: attachedText,
        file: downloadUrl,
        fileName: safeFileName,
        fileSize: file.size,
        fileKey: fileKeyB64,
        groupId: isGroup ? targetIp : null,
        replyData: window.currentReplyData,
      };

      if (isGroup) {
        const grp = groups.find((g) => g.id === targetIp);
        if (grp) {
          for (let mIp of grp.members) {
            if (mIp === myIp) continue;
            const partner = contacts.find((c) => c.ip === mIp);
            const encryptedPayload = await CryptoManager.encryptPayload(
              JSON.stringify(bundleData),
              partner ? partner.pubKey : null,
            );
            sendSignal(mIp, {
              type: "chat",
              payload: encryptedPayload,
              fromIp: myIp,
              timestamp: ts,
              ...profile,
            });
          }
        }
      } else {
        const partner = contacts.find((c) => c.ip === targetIp);
        const encryptedPayload = await CryptoManager.encryptPayload(
          JSON.stringify(bundleData),
          partner ? partner.pubKey : null,
        );
        sendSignal(targetIp, {
          type: "chat",
          payload: encryptedPayload,
          fromIp: myIp,
          timestamp: ts,
          ...profile,
        });
      }

      const statusText = useE2EE
        ? t("msg_file_uploaded_enc")
        : t("msg_file_uploaded_raw");
      let finalUiText = attachedText
        ? attachedText +
          `<br><br><span style="color:#3ba55d; font-size:11px;">${statusText}</span>`
        : statusText;

      appendChatUI(
        "Ich",
        profile.name,
        finalUiText,
        downloadUrl,
        safeFileName,
        ts,
        file.size,
        false,
        fileKeyB64,
        window.currentReplyData,
      );
      saveMessageLocally(
        targetIp,
        "Ich",
        profile.name,
        finalUiText,
        downloadUrl,
        safeFileName,
        file.size,
        ts,
        fileKeyB64,
        window.currentReplyData,
      );
      cancelReply();
    } else {
      appendChatUI(
        "System",
        "System",
        `❌ ${uploadErrorMsg}`,
        null,
        null,
        Date.now(),
        0,
      );
      cancelReply();
    }

    // =======================================================
    // PFAD C: DATEIEN UNTER 15 MB (BASE64)
    // =======================================================
  } else {
    const reader = new FileReader();
    reader.onload = async function (event) {
      const b64 = event.target.result;

      // FIX: Repariertes Datenpaket für kleine Dateien (Base64)
      const bundleData = {
        text: attachedText,
        file: b64,
        fileName: safeFileName,
        fileSize: file.size,
        groupId: isGroup ? targetIp : null,
        replyData: window.currentReplyData,
      };

      if (isGroup) {
        const grp = groups.find((g) => g.id === targetIp);
        if (grp) {
          for (let mIp of grp.members) {
            if (mIp === myIp) continue;
            const partner = contacts.find((c) => c.ip === mIp);
            const encryptedPayload = await CryptoManager.encryptPayload(
              JSON.stringify(bundleData),
              partner ? partner.pubKey : null,
            );
            sendSignal(mIp, {
              type: "chat",
              payload: encryptedPayload,
              fromIp: myIp,
              timestamp: ts,
              ...profile,
            });
          }
        }
      } else {
        const partner = contacts.find((c) => c.ip === targetIp);
        const encryptedPayload = await CryptoManager.encryptPayload(
          JSON.stringify(bundleData),
          partner ? partner.pubKey : null,
        );
        sendSignal(targetIp, {
          type: "chat",
          payload: encryptedPayload,
          fromIp: myIp,
          timestamp: ts,
          ...profile,
        });
      }

      const statusText = "🚀 Datei gesendet & E2EE verschlüsselt!";
      let finalUiText = attachedText
        ? attachedText +
          `<br><br><span style="color:#3ba55d; font-size:11px;">${statusText}</span>`
        : `${statusText}`;

      appendChatUI(
        "Ich",
        profile.name,
        finalUiText,
        b64,
        safeFileName,
        ts,
        file.size,
        false,
        null,
        window.currentReplyData,
      );
      saveMessageLocally(
        targetIp,
        "Ich",
        profile.name,
        finalUiText,
        b64,
        safeFileName,
        file.size,
        ts,
        null,
        window.currentReplyData,
      );
      cancelReply();
    };
    reader.readAsDataURL(file);
  }
}

// Leitet alle Eingänge jetzt in die Staging-Area (Vorschau) weiter!
document.getElementById("file-btn").onclick = (e) => {
  e.preventDefault();
  document.getElementById("file-input").click();
};
document.getElementById("file-input").onchange = (e) => {
  const file = e.target.files[0];
  if (file) stageFile(file);
  e.target.value = "";
};

const mainArea = document.querySelector(".main");
mainArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  mainArea.style.boxShadow = "inset 0 0 0 3px var(--vula-primary)";
});
mainArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  mainArea.style.boxShadow = "none";
});
mainArea.addEventListener("drop", (e) => {
  e.preventDefault();
  mainArea.style.boxShadow = "none";
  if (e.dataTransfer.files.length > 0) stageFile(e.dataTransfer.files[0]);
});

// --- DER ABSOLUTE .MSDOWNLOAD KILLER ---
document.onpaste = (e) => {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp) return;

  const items = (e.clipboardData || window.clipboardData).items;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type.indexOf("image") !== -1 || item.kind === "file") {
      const blob = item.getAsFile();
      if (blob) {
        let ext = "png";
        if (blob.type === "image/jpeg") ext = "jpg";
        else if (blob.type === "image/gif") ext = "gif";
        else if (blob.type === "image/webp") ext = "webp";
        else if (blob.type.startsWith("video/")) ext = "mp4";

        // Dateinamen bereinigen
        let fileName = `Zwischenablage_${Date.now()}.${ext}`;
        if (blob.name && blob.name !== "image.png") {
          fileName = blob.name;
          // .msdownload entfernen und richtige Endung erzwingen
          if (fileName.toLowerCase().endsWith(".msdownload")) {
            fileName = fileName.replace(/\.msdownload$/i, "") + "." + ext;
          }
        }

        const file = new File([blob], fileName, {
          type: blob.type || "application/octet-stream",
        });
        stageFile(file); // Ins UI legen, nicht sofort abschicken!
        e.preventDefault();
        return;
      }
    }
  }
};

// --- WHITEBOARD LOGIK ---
// --- WHITEBOARD LOGIK ---
const wbModal = document.getElementById("whiteboard-modal");
const canvas = document.getElementById("wb-canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let lastWbNotice = 0;
let currentWbTool = "draw"; // Neu: Werkzeug-Status

document.getElementById("wb-btn").addEventListener("click", () => {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp) return alert("Bitte wähle zuerst einen Chat/Gruppe aus!");
  wbModal.style.display = "flex";
});

function closeWhiteboard() {
  wbModal.style.display = "none";
}

// Werkzeug wechseln (Visuelles Feedback)
window.setWbTool = function (tool) {
  currentWbTool = tool;
  document.getElementById("wb-tool-draw").style.background =
    tool === "draw" ? "#3ba55d" : "#4f545c";
  document.getElementById("wb-tool-text").style.background =
    tool === "text" ? "#3ba55d" : "#4f545c";
  canvas.style.cursor = tool === "text" ? "text" : "crosshair";
};

// NEU: Wir merken uns die X/Y Koordinaten, wo der User hingeklickt hat
let wbTextTempX = 0;
let wbTextTempY = 0;

canvas.addEventListener("mousedown", (e) => {
  if (currentWbTool === "text") {
    wbTextTempX = e.offsetX;
    wbTextTempY = e.offsetY;
    document.getElementById("wb-text-input").value = "";
    document.getElementById("wb-text-modal").style.display = "flex";
    setTimeout(() => document.getElementById("wb-text-input").focus(), 100);
    return; // Beendet den Klick, damit wir nicht anfangen zu malen
  }
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// NEU: Die Funktion, die vom Button in unserem neuen Text-Fenster aufgerufen wird
window.confirmWbText = function () {
  const text = document.getElementById("wb-text-input").value.trim();
  document.getElementById("wb-text-modal").style.display = "none";

  if (text !== "") {
    const color = document.getElementById("wb-color").value;
    const size = parseInt(document.getElementById("wb-size").value) * 4;
    drawWbText(wbTextTempX, wbTextTempY, text, color, size);
    sendWhiteboardData({
      action: "text",
      x: wbTextTempX,
      y: wbTextTempY,
      text: text,
      color: color,
      size: size,
    });
  }
};

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing || currentWbTool !== "draw") return;
  const color = document.getElementById("wb-color").value;
  const size = document.getElementById("wb-size").value;
  drawOnCanvas(lastX, lastY, e.offsetX, e.offsetY, color, size);
  sendWhiteboardData({
    action: "draw",
    x0: lastX,
    y0: lastY,
    x1: e.offsetX,
    y1: e.offsetY,
    color,
    size,
  });
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function drawOnCanvas(x0, y0, x1, y1, color, size) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.lineCap = "round";
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  ctx.closePath();
}

function drawWbText(x, y, text, color, size) {
  ctx.font = `bold ${size}px Arial`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

// --- WHITEBOARD FEATURES: LÖSCH-ANFRAGE & SPEICHERN ---
function clearWhiteboard(emit = false) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (emit) sendWhiteboardData({ action: "clear-approve" });
}

window.requestClearWhiteboard = function () {
  if (
    confirm(
      "Möchtest du die anderen Teilnehmer fragen, ob das Whiteboard geleert werden darf?",
    )
  ) {
    sendWhiteboardData({ action: "clear-request" });
    appendChatUI(
      "System",
      "System",
      "⏳ Eine Lösch-Anfrage für das Whiteboard wurde gesendet.",
      null,
      null,
      Date.now(),
      0,
    );
  }
};

window.approveClearWb = function () {
  document.getElementById("wb-clear-request").style.display = "none";
  clearWhiteboard(true); // Löscht lokal und gibt den "Go"-Befehl an alle anderen!
};

// --- WHITEBOARD SPEICHERN (Electron-Safe) ---
window.saveWhiteboardLocally = function () {
  // Generiert den Standard-Namen (z.B. Skizze_04-06-2026)
  const defaultName = `Skizze_${new Date().toLocaleDateString("de-DE").replace(/\./g, "-")}`;
  document.getElementById("wb-save-name-input").value = defaultName;

  // Öffnet unser schickes neues UI-Fenster statt dem verbotenen prompt()
  document.getElementById("wb-save-modal").style.display = "flex";
  setTimeout(() => document.getElementById("wb-save-name-input").focus(), 100);
};

window.confirmSaveWhiteboard = async function () {
  const name = document.getElementById("wb-save-name-input").value.trim();
  if (!name) return; // Abbruch, wenn das Feld leer ist

  document.getElementById("wb-save-modal").style.display = "none";

  const b64 = canvas.toDataURL("image/png");

  // HACK: Wir missbrauchen die Chat-Datenbank und speichern es im versteckten Raum 'saved_whiteboards'!
  await saveMessageLocally(
    "saved_whiteboards",
    myIp,
    myName,
    "",
    b64,
    name + ".png",
    0,
    Date.now(),
  );

  // alert() ist im Gegensatz zu prompt() in Electron weiterhin erlaubt!
  alert(
    `Whiteboard '${name}' wurde erfolgreich im lokalen Archiv gespeichert!`,
  );
};

window.openSavedWhiteboards = async function () {
  const list = document.getElementById("pinned-messages-list");
  list.innerHTML =
    '<p style="color:#72767d; text-align:center;">Lade Archiv...</p>';

  const modal = document.getElementById("pinned-modal");
  modal.style.display = "flex";
  // FIX: Zieht das Modal über das Whiteboard (welches z-index 3000 hat)
  modal.style.zIndex = "4000";

  document.querySelector("#pinned-modal h3").innerHTML =
    "📁 Gespeicherte Whiteboards";

  const history = await DBManager.getMessages("saved_whiteboards");
  if (history.length === 0) {
    list.innerHTML =
      '<p style="color:#72767d; text-align:center; margin-top:20px;">Du hast noch keine Whiteboards gespeichert.</p>';
    return;
  }

  list.innerHTML = "";
  history.forEach((msg) => {
    const date = new Date(msg.timestamp).toLocaleString("de-DE");
    list.innerHTML += `
                        <div style="background: #2b2d31; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                            <div style="font-size: 11px; color: #b9bbbe; margin-bottom: 5px; display:flex; justify-content:space-between;">
                                <span><b>${msg.fileName.replace(".png", "")}</b> • ${date}</span>
                                <span style="cursor:pointer; color:#ed4245;" title="Löschen" onclick="deleteMessage(${msg.timestamp}); setTimeout(openSavedWhiteboards, 200);">🗑️</span>
                            </div>
                            <img src="${msg.file}" style="width:100%; border-radius:4px; cursor:pointer;" onclick="loadWbToCanvas('${msg.file}')" title="Klick = Auf aktuelles Whiteboard laden">
                        </div>`;
  });
};

// NEU: Zwischenspeicher für das Bild, bis jemand zustimmt
let pendingLoadData = null;

window.approveLoadWb = function () {
  document.getElementById("wb-load-request").style.display = "none";
  sendWhiteboardData({ action: "load-image-approve" }); // Gibt das Go an alle!
};

window.loadWbToCanvas = function (b64Data) {
  if (
    !confirm(
      "Möchtest du die anderen fragen, ob diese Zeichnung geladen werden darf? (Überschreibt das aktuelle Board!)",
    )
  )
    return;

  // Bild im Arbeitsspeicher parken und das Archiv schließen
  pendingLoadData = b64Data;
  document.getElementById("pinned-modal").style.display = "none";

  // Nur die kurze Anfrage senden, noch KEIN riesiges Bild!
  sendWhiteboardData({ action: "load-image-request" });
  appendChatUI(
    "System",
    "System",
    "⏳ Anfrage zum Laden eines Whiteboards gesendet.",
    null,
    null,
    Date.now(),
    0,
  );
};

async function sendWhiteboardData(wbData) {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp) return;
  const isGroup = targetIp.startsWith("grp_");
  wbData.groupId = isGroup ? targetIp : null;

  // NEU: Wir laden dein Profil, damit der Name mitgeschickt wird!
  const profile = await getMyProfile();

  if (isGroup) {
    const grp = groups.find((g) => g.id === targetIp);
    if (grp) {
      for (let mIp of grp.members) {
        if (mIp === myIp) continue;
        const partner = contacts.find((c) => c.ip === mIp);
        const encryptedPayload = await CryptoManager.encryptPayload(
          JSON.stringify(wbData),
          partner ? partner.pubKey : null,
        );
        // NEU: ...profile an den Server funken
        sendSignal(mIp, {
          type: "whiteboard",
          payload: encryptedPayload,
          fromIp: myIp,
          ...profile,
        });
      }
    }
  } else {
    const partner = contacts.find((c) => c.ip === targetIp);
    const encryptedPayload = await CryptoManager.encryptPayload(
      JSON.stringify(wbData),
      partner ? partner.pubKey : null,
    );
    // NEU: ...profile an den Server funken
    sendSignal(targetIp, {
      type: "whiteboard",
      payload: encryptedPayload,
      fromIp: myIp,
      ...profile,
    });
  }
}

async function loadAudioDevices() {
  try {
    const s = await navigator.mediaDevices.getUserMedia({ audio: true });
    s.getTracks().forEach((t) => t.stop());
  } catch (e) {}
  const devices = await navigator.mediaDevices.enumerateDevices();
  const micSel = document.getElementById("mic-select");
  const spkSel = document.getElementById("speaker-select");
  micSel.innerHTML = "";
  spkSel.innerHTML = "";
  const sMic = localStorage.getItem("selectedMic");
  const sSpk = localStorage.getItem("selectedSpeaker");
  devices.forEach((d) => {
    const opt = new Option(
      d.label || `${d.kind} ${d.deviceId.substring(0, 5)}`,
      d.deviceId,
    );
    if (d.kind === "audioinput") {
      micSel.add(opt);
      if (d.deviceId === sMic) opt.selected = true;
    }
    if (d.kind === "audiooutput") {
      spkSel.add(opt);
      if (d.deviceId === sSpk) opt.selected = true;
    }
  });
}

function openSettings() {
  loadAudioDevices();
  // Lädt die Toggles (Standard ist immer 'an', wenn noch nie gespeichert)
  document.getElementById("setting-noise").checked =
    localStorage.getItem("audio_noise") !== "false";
  document.getElementById("setting-echo").checked =
    localStorage.getItem("audio_echo") !== "false";
  document.getElementById("setting-agc").checked =
    localStorage.getItem("audio_agc") !== "false";
  document.getElementById("setting-stun").checked =
    localStorage.getItem("allow_stun") !== "false";
  document.getElementById("setting-require-pin").checked =
    localStorage.getItem("require_pin") !== "false";

  document.getElementById("setting-autostart").checked =
    localStorage.getItem("autoStartMode") !== null;

  document.getElementById("mic-volume-slider").value =
    localStorage.getItem("audioMicVolume") || 1;

  document.getElementById("setting-lazy-load").checked =
    localStorage.getItem("setting_lazy_load") !== "false"; // Standard: AN!

  document.getElementById("settings-modal").style.display = "flex";

  // (In openSettings einfügen):
  const cp = document.getElementById("theme-color-picker");
  if (cp) cp.value = localStorage.getItem("vula_color") || "#7b2cbf";
}

document.getElementById("mic-volume-slider").addEventListener("input", (e) => {
  localStorage.setItem("audioMicVolume", e.target.value);
  // Gibt den Wert live in Millisekunden an das Mischpult in webrtc.js weiter!
  if (typeof updateMicVolume === "function") updateMicVolume(e.target.value);
});

document
  .getElementById("setting-lazy-load")
  .addEventListener("change", (e) =>
    localStorage.setItem("setting_lazy_load", e.target.checked),
  );

document.getElementById("setting-autostart").addEventListener("change", (e) => {
  if (e.target.checked) {
    localStorage.setItem("autoStartMode", currentMode);
  } else {
    localStorage.removeItem("autoStartMode");
  }
});

// Speichert die Einstellungen sofort bei jedem Klick
document
  .getElementById("setting-noise")
  .addEventListener("change", (e) =>
    localStorage.setItem("audio_noise", e.target.checked),
  );
document
  .getElementById("setting-echo")
  .addEventListener("change", (e) =>
    localStorage.setItem("audio_echo", e.target.checked),
  );
document
  .getElementById("setting-agc")
  .addEventListener("change", (e) =>
    localStorage.setItem("audio_agc", e.target.checked),
  );

document.getElementById("setting-stun").addEventListener("change", (e) => {
  (localStorage.setItem("allow_stun", e.target.checked), updateRoutingInfo()); // <--- NEU
});

document
  .getElementById("setting-require-pin")
  .addEventListener("change", (e) =>
    localStorage.setItem("require_pin", e.target.checked),
  );

/*
document.getElementById("volume-slider").addEventListener("input", (e) => {
  document.getElementById("remote-audio").volume = e.target.value;
  localStorage.setItem("audioVolume", e.target.value);
});
*/

// --- ALLGEMEINE LAUTSTÄRKE (EINSTELLUNGEN) ---
document.getElementById("volume-slider").addEventListener("input", (e) => {
  // FIX: Sucht ALLE Remote-Audio und Video-Elemente!
  const mediaElements = document.querySelectorAll(
    'video[id^="media-"], audio[id^="media-"]',
  );
  mediaElements.forEach((m) => (m.volume = e.target.value));
  localStorage.setItem("audioVolume", e.target.value);
});

document
  .getElementById("mic-select")
  .addEventListener("change", (e) =>
    localStorage.setItem("selectedMic", e.target.value),
  );

document
  .getElementById("speaker-select")
  .addEventListener("change", async (e) => {
    const newSinkId = e.target.value;
    localStorage.setItem("selectedSpeaker", newSinkId);

    // Sucht ALLE aktuell laufenden Audio- und Video-Streams im Chat
    const mediaElements = document.querySelectorAll(
      'audio[id^="media-"], video[id^="media-"]',
    );

    for (const el of mediaElements) {
      if (typeof el.setSinkId === "function") {
        try {
          // Das Wichtigste: Wir warten (await), bis der Browser bereit ist!
          await el.setSinkId(newSinkId);
        } catch (err) {
          // AbortErrors ignorieren wir lautlos, da das Element vermutlich gleich fertig geladen ist
          if (err.name !== "AbortError") {
            console.error("Lautsprecher Fehler:", err);
          }
        }
      }
    }
  });

// --- VIDEO GRID CONTROLS (MESH) ---
// --- VIDEO GRID CONTROLS (MESH) ---
document.getElementById("vid-mute-btn").addEventListener("click", (e) => {
  // FIX: Wir zielen NUR noch auf das Video im Grid (welches den Stream-Ton enthält)!
  const mediaElements = document.querySelectorAll("#call-grid-container video");
  let isMuted = e.target.innerText.includes("🔊");
  mediaElements.forEach((m) => (m.muted = isMuted));
  e.target.innerText = isMuted ? "🔇" : "🔊";

  const volSlider = document.getElementById("vid-vol-slider");
  if (isMuted) {
    volSlider.dataset.oldVol = volSlider.value;
    volSlider.value = 0;
  } else {
    volSlider.value = volSlider.dataset.oldVol || 1;
  }
});

document.getElementById("vid-vol-slider").addEventListener("input", (e) => {
  const vol = parseFloat(e.target.value);
  // FIX: Auch der Slider regelt NUR noch den Stream!
  const mediaElements = document.querySelectorAll("#call-grid-container video");
  mediaElements.forEach((m) => {
    m.volume = vol;
    m.muted = vol === 0;
  });
  document.getElementById("vid-mute-btn").innerText = vol === 0 ? "🔇" : "🔊";
});

document.getElementById("vid-fullscreen-btn").addEventListener("click", () => {
  const grid = document.getElementById("call-grid-container");
  if (!document.fullscreenElement) grid.requestFullscreen().catch((err) => {});
  else document.exitFullscreen();
});

// NEU: Bild-in-Bild Modus (PiP)
document.getElementById("vid-pip-btn").addEventListener("click", async () => {
  // Sucht das Stream-Video (ignoriert die eigene, lokale Screenshare-Vorschau)
  const videos = Array.from(
    document.querySelectorAll("#call-grid-container video"),
  ).filter((v) => v.id !== "vid-local-screen");
  if (videos.length > 0) {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await videos[0].requestPictureInPicture();
      }
    } catch (err) {
      console.error("❌ PiP Fehler:", err);
    }
  } else {
    alert("Kein Video für Bild-in-Bild gefunden.");
  }
});

// --- DIE VERLORENEN CALL-BUTTONS (Wiederbelebt) ---
document
  .getElementById("hangup-btn")
  .addEventListener("click", () => endCall(true));
document
  .getElementById("banner-hangup-btn")
  .addEventListener("click", () => endCall(true));

// --- NEU: LIVE-ANZEIGE FÜR OFFENE RÄUME ---
window.refreshVoiceButton = function () {
  const tIp = document.getElementById("target-ip").value;
  const btn = document.getElementById("call-btn");
  if (!tIp || !btn) return;

  if (activeCallId === tIp) {
    btn.style.display = "none"; // Wir sind schon selbst im Raum
    return;
  }

  let sessionActive = false;
  if (tIp.startsWith("grp_")) {
    const grp = groups.find((g) => g.id === tIp);
    // Checkt, ob IRGENDJEMAND aus der Gruppe gerade in diesem Raum sitzt
    if (grp)
      sessionActive = grp.members.some(
        (mIp) => contacts.find((c) => c.ip === mIp)?.activeCall === tIp,
      );
  } else {
    sessionActive = contacts.find((c) => c.ip === tIp)?.activeCall === tIp;
  }

  if (sessionActive) {
    btn.innerHTML = "🟢 Beitreten";
    btn.style.animation = "pulseCall 2s infinite";
    btn.style.display = "block";
  } else {
    btn.innerHTML = "📞 Voice";
    btn.style.animation = "none";
    btn.style.display = tIp === "grp_global" ? "none" : "block";
  }
};

document.getElementById("call-btn").addEventListener("click", async () => {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp) return;

  // --- FALLBACK ZU RAW WEBRTC IM P2P MODUS ---
  if (currentMode === "p2p") {
    if (targetIp.startsWith("grp_"))
      return alert("P2P-Voice funktioniert nur in 1-zu-1 Direktnachrichten!");

    await initLocalMedia(false);
    activeCallId = targetIp;
    activeCallType = "dm";
    updateCallUI();

    document.getElementById("active-call-banner").style.display = "flex";
    document.getElementById("active-call-name").innerText =
      contacts.find((c) => c.ip === targetIp)?.name || targetIp;
    document.getElementById("call-btn").style.display = "none";
    document.getElementById("screen-btn").style.display = "block";
    document.getElementById("hangup-btn").style.display = "block";

    p2pVoicePC = new RTCPeerConnection({ iceServers: getIceServers() });

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

    p2pVoicePC.onicecandidate = (e) => {
      if (e.candidate)
        sendSignal(targetIp, { type: "p2p-ice", candidate: e.candidate });
    };

    // Unsere Spuren in die Leitung legen
    localStream.getTracks().forEach((t) => p2pVoicePC.addTrack(t, localStream));

    // FIX 2: HARDCORE-Zwang! Wir befehlen WebRTC, sofort einen Empfangskanal (offerToReceiveAudio) zu öffnen!
    const offer = await p2pVoicePC.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
    });
    await p2pVoicePC.setLocalDescription(offer);

    sendSignal(targetIp, {
      type: "p2p-offer",
      offer: offer,
      fromIp: myIp,
      name: myName,
    });
    appendChatUI(
      "System",
      "System",
      t("sys_call_ringing"),
      null,
      null,
      Date.now(),
      0,
    );
    return;
  }

  // Normales PeerJS Joinen (Host/Web)
  joinVoiceSession(targetIp);
});

document.getElementById("accept-btn").addEventListener("click", async () => {
  SoundEngine.stopRing();
  document.getElementById("incoming-call-box").style.display = "none";

  // --- NEU: P2P ANRUF ANNEHMEN (Mit ICE-Warteschlange & Screenshare Fix) ---
  if (window.pendingCallType === "p2p-voice") {
    await window.answerP2PVoiceCall(pendingCallerIp, window.p2pPendingOffer);
    return;
  }

  // Normaler Web/Host Modus (PeerJS)
  joinVoiceSession(window.pendingGroupId || pendingCallerIp);
});

document.getElementById("decline-btn").addEventListener("click", () => {
  SoundEngine.stopRing();
  document.getElementById("incoming-call-box").style.display = "none";
});

document.getElementById("sync-btn").addEventListener("click", () => {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp) return;

  // NEU: Zieht das Archiv direkt vom 24/7 Server!
  if (targetIp === "grp_global") {
    appendChatUI(
      "System",
      "System",
      "Fordere 24/7 Server-Archiv an...",
      null,
      null,
      Date.now(),
      0,
    );
    sendSignal(null, { type: "req-global-history", fromIp: myIp });
    return;
  }

  if (targetIp.startsWith("grp_")) {
    // Gruppen-Sync: Sucht einen beliebigen online User aus der Gruppe und fragt ihn
    const grp = groups.find((g) => g.id === targetIp);
    const onlineMember = grp.members.find(
      (m) => m !== myIp && contacts.find((c) => c.ip === m && c.isOnline),
    );

    if (onlineMember) {
      appendChatUI(
        "System",
        "System",
        t("sys_sync_grp"),
        null,
        null,
        Date.now(),
        0,
      );
      sendSignal(onlineMember, {
        type: "sync-req",
        chatId: targetIp,
        fromIp: myIp,
      });
    } else {
      appendChatUI(
        "System",
        "System",
        t("sys_sync_no_member"),
        null,
        null,
        Date.now(),
        0,
      );
    }
  } else {
    appendChatUI(
      "System",
      "System",
      t("sys_sync_dm"),
      null,
      null,
      Date.now(),
      0,
    );
    sendSignal(targetIp, { type: "sync-req", chatId: targetIp, fromIp: myIp });
  }
});

// Funktion, um eine eigene Nachricht zu bearbeiten
function startEditMessage(msgId, targetId, isGroup) {
  const msgEl = document.getElementById(`msg-${msgId}`);
  if (!msgEl) return;

  const cDiv = msgEl.querySelector(".chat-content");
  // Holt den unformatierten Text zurück (ohne Markdown-HTML)
  const currentText = decodeURIComponent(
    cDiv.getAttribute("data-raw-text") || "",
  );

  const newText = prompt("Nachricht bearbeiten:", currentText);
  if (newText !== null && newText.trim() !== "" && newText !== currentText) {
    // Das Datenpaket genau so schnüren, wie dein Empfangs-Code es erwartet
    const editData = {
      type: "edit-msg",
      msgId: msgId,
      newText: newText,
      fromIp: "ME", // Oder wie auch immer deine eigene ID/IP im Code heißt
      groupId: isGroup ? targetId : null,
    };

    // 1. An die anderen senden (Passe das an deine Sende-Funktion an)
    if (typeof sendToPeer === "function") {
      sendToPeer(targetId, editData);
    } else if (typeof broadcastToClients === "function" && isGroup) {
      broadcastToClients(editData);
    }

    // 2. Lokal für dich selbst aktualisieren (wir rufen einfach deinen eigenen Listener-Code auf)
    editData.fromIp = targetId; // Trick: Setze fromIp auf den Chat-Partner, damit es im richtigen Fenster landet
    // Hier simulieren wir ein "Empfangen" der eigenen Änderung
    handleIncomingData(editData); // Ersetze "handleIncomingData" durch den Namen deiner Listener-Funktion
  }
}

// --- AUDIO MEMO (PUSH TO TALK) LOGIK ---
let mediaRecorder;
let audioChunks = [];
let isRecording = false;
const recordBtn = document.getElementById("record-btn");

async function startRecording() {
  const targetIp = document.getElementById("target-ip").value;
  if (!targetIp)
    return alert(
      "Wähle zuerst einen Chat aus, um eine Sprachnachricht zu senden.",
    );
  if (isRecording) return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      // Wir behandeln die Sprachnachricht einfach wie eine normale Datei. E2EE übernimmt den Rest!
      const file = new File([audioBlob], `VoiceMemo_${Date.now()}.webm`, {
        type: "audio/webm",
      });
      stream.getTracks().forEach((track) => track.stop()); // Mikrofon wieder freigeben

      if (file.size > 0) handleFileUpload(file);
    });

    mediaRecorder.start();
    isRecording = true;
    recordBtn.classList.add("recording");
  } catch (err) {
    alert("Mikrofon-Zugriff verweigert!");
  }
}

function stopRecording() {
  if (!isRecording || !mediaRecorder) return;
  mediaRecorder.stop();
  isRecording = false;
  recordBtn.classList.remove("recording");
}

// Startet, wenn man die Maus gedrückt hält
recordBtn.addEventListener("mousedown", startRecording);
// Stoppt beim Loslassen (oder wenn man mit der Maus abrutscht)
recordBtn.addEventListener("mouseup", stopRecording);
recordBtn.addEventListener("mouseleave", stopRecording);

// --- NEU: ZENTRALE CHAT-UI STEUERUNG (Gegen den Freeze-Bug) ---
// --- NEU: ZENTRALE CHAT-UI STEUERUNG (Ohne Freeze & Zweisprachig) ---
// --- NEU: ZENTRALE CHAT-UI STEUERUNG (100% Anti-Freeze Garantie) ---
// --- NEU: ZENTRALE CHAT-UI STEUERUNG (100% Crash- & Freeze-Sicher) ---
window.closeActiveChatUI = function () {
  try {
    document.getElementById("target-ip").value = "";
    document.getElementById("chat-box").innerHTML =
      `<div style="display:flex; height:100%; align-items:center; justify-content:center; color:#72767d; font-size:14px; text-align:center;">${t("placeholder_no_chat")}</div>`;
    document.getElementById("chat-header-name").innerText = t("chat_nobody");

    // Das '?.' (Optional Chaining) verhindert Abstürze, falls ein Button fehlt!
    document.getElementById("e2e-badge")?.style.setProperty("display", "none");
    document.getElementById("call-btn")?.style.setProperty("display", "none");
    document.getElementById("screen-btn")?.style.setProperty("display", "none");
    document.getElementById("sync-btn")?.style.setProperty("display", "none");
    document
      .getElementById("group-mgr-btn")
      ?.style.setProperty("display", "none");
    document
      .getElementById("pin-view-btn")
      ?.style.setProperty("display", "none");
    document
      .getElementById("search-container")
      ?.style.setProperty("display", "none");

    const input = document.getElementById("chat-input");
    const wrapper = document.getElementById("chat-input-wrapper");

    // Zwingt das Feld offen zu bleiben
    if (input) {
      input.removeAttribute("disabled");
      input.removeAttribute("readonly");
      input.placeholder = t("placeholder_no_chat");
    }

    if (wrapper) {
      wrapper.style.opacity = "1";
      wrapper.style.pointerEvents = "auto";
    }
  } catch (err) {
    console.error("Fehler beim Schließen des Chats (ignoriert):", err);
  }
};

window.openActiveChatUI = function () {
  try {
    const input = document.getElementById("chat-input");
    const wrapper = document.getElementById("chat-input-wrapper");
    const targetIp = document.getElementById("target-ip").value; // <--- NEU ausgelesen

    if (input) {
      input.removeAttribute("disabled");
      input.removeAttribute("readonly");

      // NEU: Wenn es der Global Chat ist, ändern wir den Text im Eingabefeld!
      if (targetIp === "grp_global") {
        input.placeholder = t("placeholder_global");
      } else {
        input.placeholder = t("placeholder_chat");
      }
    }

    if (wrapper) {
      wrapper.style.opacity = "1";
      wrapper.style.pointerEvents = "auto";
    }
  } catch (err) {
    console.error("Fehler beim Öffnen des Chats (ignoriert):", err);
  }
};

// --- OFFLINE-KONTAKTE AUFRÄUMEN ---
function cleanupContacts() {
  if (
    confirm("Möchtest du alle Offline-Kontakte aus deiner Liste entfernen?")
  ) {
    contacts = contacts.filter((c) => c.isOnline);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    // Der ultimative Hammer: Ein sauberer Reload der gesamten App-Oberfläche!
    window.location.reload();
  }
}

// --- ALTE CHATS WIEDERHERSTELLEN ---
async function restoreChats() {
  if (
    !confirm(
      "Möchtest du alle versteckten Kontakte/Chats aus der Datenbank wiederherstellen?",
    )
  )
    return;

  const allChatIds = await DBManager.getAllChatIds();
  let restoredCount = 0;

  allChatIds.forEach((id) => {
    // Wir stellen nur Direktnachrichten wieder her (keine gelöschten Gruppen, da uns dort die Members fehlen würden)
    // Außerdem schließen wir System-Meldungen und die eigene IP aus.
    if (
      !id.startsWith("grp_") &&
      !contacts.find((c) => c.ip === id) &&
      id !== myIp &&
      id !== "System"
    ) {
      contacts.push({
        ip: id,
        id: null,
        name: id,
        avatar: null,
        isOnline: false,
        pubKey: null,
        unread: 0,
      });
      restoredCount++;
    }
  });

  if (restoredCount > 0) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
    appendChatUI(
      "System",
      "System",
      `📂 **${restoredCount} alte Chats** wurden aus der Datenbank wiederhergestellt!`,
      null,
      null,
      Date.now(),
      0,
    );
  } else {
    alert("Keine versteckten Chats gefunden.");
  }
}

// --- THEME TOGGLE (LIGHT / DARK MODE) ---
const themeBtn = document.getElementById("theme-btn");
let isLightMode = localStorage.getItem("theme") === "light";

function applyTheme() {
  if (isLightMode) {
    document.body.classList.add("light-theme");
    themeBtn.innerText = "🌙";
    themeBtn.title = "Dark Mode 🔛";
  } else {
    document.body.classList.remove("light-theme");
    themeBtn.innerText = "☀️";
    themeBtn.title = "Light Mode 🔛";
  }
}

// Direkt beim Start laden!
applyTheme();

themeBtn.addEventListener("click", () => {
  isLightMode = !isLightMode;
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
  applyTheme();
});

// --- PROFIL ANSICHT ---
// --- PROFIL ANSICHT ---
function openUserProfile(targetIp) {
  let user;
  if (targetIp === myIp) {
    // FIX: Eigene ID wird jetzt auch sauber mitgeladen
    user = {
      name: myName,
      ip: myIp,
      id: myId,
      bio: myBio,
      avatar: localStorage.getItem("myAvatar") || defaultAvatar,
    };
  } else {
    user = contacts.find((c) => c.ip === targetIp);
    if (!user) return;
  }

  document.getElementById("profile-modal-avatar").src =
    user.avatar || defaultAvatar;
  document.getElementById("profile-modal-name").innerText =
    user.name || "Unbekannt";
  document.getElementById("profile-modal-id").innerText =
    user.id || "Nicht verfügbar"; // <-- NEU
  document.getElementById("profile-modal-ip").innerText = user.ip; // <-- Nur noch die pure IP
  document.getElementById("profile-modal-bio").innerText =
    user.bio || "Keine Bio angegeben.";

  const msgBtn = document.getElementById("profile-modal-msg-btn");
  msgBtn.style.display = targetIp === myIp ? "none" : "block";
  msgBtn.onclick = () => {
    document.getElementById("user-profile-modal").style.display = "none";
    const cDiv = document.querySelector(`.contact-item[data-ip="${targetIp}"]`);
    if (cDiv) cDiv.click();
  };

  document.getElementById("user-profile-modal").style.display = "flex";
}

// --- IP AUS DEM PROFIL KOPIEREN ---
// --- MODALS PER KLICK AUF DEN HINTERGRUND SCHLIESSEN ---
// --- IP AUS DEM PROFIL KOPIEREN ---
window.copyProfileIp = function () {
  const ipSpan = document.getElementById("profile-modal-ip");
  const ipText = ipSpan.innerText;
  if (ipText === "Kopiert!") return;
  navigator.clipboard.writeText(ipText);

  ipSpan.innerText = "Kopiert!";
  ipSpan.style.color = "#3ba55d";
  setTimeout(() => {
    ipSpan.innerText = ipText;
    ipSpan.style.color = "#b9bbbe";
  }, 1500);
};

// --- RESIZABLE SIDEBARS LOGIK ---
// --- RESIZABLE SIDEBARS LOGIK (MIT DELTA-FIX GEGEN DAS SPRINGEN) ---
function initResizer(resizerId, sidebarSelector, isRightSide) {
  const resizer = document.getElementById(resizerId);
  const sidebar = document.querySelector(sidebarSelector);
  if (!resizer || !sidebar) return;

  let isResizing = false;
  let startX;
  let startWidth;

  resizer.addEventListener("mousedown", (e) => {
    isResizing = true;

    // 1. Wir merken uns genau, wo die Maus beim Klicken war
    startX = e.clientX;

    // 2. Wir messen die exakte, aktuelle Breite der Sidebar aus dem CSS
    startWidth = parseInt(
      document.defaultView.getComputedStyle(sidebar).width,
      10,
    );

    resizer.classList.add("resizing");
    document.body.style.cursor = "col-resize";
    e.preventDefault(); // Verhindert nerviges Textmarkieren beim Ziehen
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    let newWidth;
    // 3. Wir berechnen nur noch die Differenz (Delta) zur Startposition!
    if (isRightSide) {
      // Rechts: Ziehst du nach links (Maus wird kleiner), WÄCHST die Breite
      newWidth = startWidth - (e.clientX - startX);
    } else {
      // Links: Ziehst du nach rechts (Maus wird größer), WÄCHST die Breite
      newWidth = startWidth + (e.clientX - startX);
    }

    // Harte Grenzen setzen, damit man die Leisten nicht ins Unendliche ziehen kann
    if (newWidth < 150) newWidth = 150;
    if (newWidth > 500) newWidth = 500;

    sidebar.style.width = newWidth + "px";
  });

  document.addEventListener("mouseup", () => {
    if (isResizing) {
      isResizing = false;
      resizer.classList.remove("resizing");
      document.body.style.cursor = "default";
    }
  });
}

// --- MODALS PER KLICK AUF DEN HINTERGRUND SCHLIESSEN ---
// --- MODALS PER KLICK AUF DEN HINTERGRUND SCHLIESSEN ---
window.addEventListener("click", (e) => {
  // Schließt alle normalen Pop-ups (Profil, Einstellungen, Gruppen etc.)
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";

    // FIX: Holt den Fokus (blinkenden Cursor) sofort ins Eingabefeld zurück!
    const chatInput = document.getElementById("chat-input");
    if (chatInput) chatInput.focus();
  }
});

// Starte die Motoren!
initResizer("resizer-left", ".sidebar", false);
initResizer("resizer-right", "#group-sidebar", true);

// --- NACHRICHTEN SUCHE ---
async function executeSearch() {
  const query = document
    .getElementById("chat-search-input")
    .value.trim()
    .toLowerCase();
  const targetIp = document.getElementById("target-ip").value;

  if (!targetIp || !query) return;

  const list = document.getElementById("search-results-list");
  list.innerHTML =
    '<p style="color:#72767d; text-align:center;">Durchsuche lokale Datenbank...</p>';
  document.getElementById("search-modal").style.display = "flex";

  // 1. Alle Nachrichten dieses Chats aus der DB holen
  const history = await DBManager.getMessages(targetIp);

  // 2. Filtern: Hat die Nachricht einen Text UND enthält sie den Suchbegriff?
  const results = history.filter(
    (m) => m.text && m.text.toLowerCase().includes(query),
  );

  if (results.length === 0) {
    list.innerHTML =
      '<p style="color:#72767d; text-align:center; margin-top:20px;">Keine Treffer für "' +
      query +
      '" gefunden.</p>';
    return;
  }

  list.innerHTML = "";

  // 3. Treffer ins HTML bauen
  results.forEach((msg) => {
    const date = new Date(msg.timestamp).toLocaleString("de-DE");

    list.innerHTML += `
                        <div style="background: #2b2d31; padding: 10px; border-radius: 5px; margin-bottom: 10px; border-left: 3px solid var(--vula-primary);">
                            <div style="font-size: 11px; color: #b9bbbe; margin-bottom: 5px; display:flex; justify-content:space-between;">
                                <span><b>${msg.senderName}</b> • ${date}</span>
                                <span style="cursor:pointer;" title="Zur Nachricht scrollen" onclick="jumpToMessage(${msg.timestamp})">🔗</span>
                            </div>
                            <div style="color: #dcddde; font-size: 13px;">${parseMarkdown(msg.text)}</div>
                        </div>`;
  });
}

// --- ANIMIERTER SPRUNG ZUR NACHRICHT ---
function jumpToMessage(timestamp) {
  document.getElementById("search-modal").style.display = "none";

  const msgEl = document.getElementById(`msg-${timestamp}`);
  if (msgEl) {
    // Weich zur Nachricht scrollen
    msgEl.scrollIntoView({ behavior: "smooth", block: "center" });

    // Kurz aufleuchten lassen (VulaLAN-Style)
    msgEl.style.transition = "background-color 0.5s ease";
    msgEl.style.backgroundColor = "rgba(88, 101, 242, 0.3)";

    setTimeout(() => {
      msgEl.style.backgroundColor = "transparent";
    }, 2000);
  } else {
    // Fallback, falls die Nachricht (später mal) zu weit oben im Archiv liegt und nicht gerendert wurde
    alert("Nachricht ist aktuell nicht im sichtbaren Chatverlauf geladen.");
  }
}

// Holt den Text für einen bestimmten Schlüssel (Key)
function t(key) {
  // Fallback auf den Key selbst, falls die Übersetzung vergessen wurde
  if (!translations[currentLang] || !translations[currentLang][key]) {
    console.warn(`Übersetzung fehlt für: ${key}`);
    return key;
  }
  return translations[currentLang][key];
}

// Sucht im gesamten HTML nach Elementen mit dem Attribut 'data-i18n'
// Sucht im gesamten HTML nach Elementen mit dem Attribut 'data-i18n'
function updateDOMTranslations() {
  // 1. Normalen Text übersetzen
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerText = t(el.getAttribute("data-i18n"));
  });

  // 2. Tooltips (title-Attribute) übersetzen
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });

  // 3. NEU: Placeholder (Textfelder) übersetzen
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });

  // 4. Sprach-Dropdown synchronisieren
  const langSelect = document.getElementById("lang-select");
  if (langSelect) langSelect.value = currentLang;
}

// Funktion zum Wechseln der Sprache
function changeLanguage(langCode) {
  if (!translations[langCode]) return;
  currentLang = langCode;
  localStorage.setItem("vula_lang", currentLang);
  updateDOMTranslations();

  // Dropdown-Auswahl visuell aktualisieren
  const langSelect = document.getElementById("lang-select");
  if (langSelect) langSelect.value = langCode;

  // Optional: Render-Funktionen neu aufrufen, damit dynamische Listen (Gruppen/Kontakte) updaten
  renderContacts();
  renderGroups();
}

updateDOMTranslations();

// --- HOST ORDNER STEUERUNG ---
window.openHostFolder = function () {
  if (isElectron) window.api.openHostFolder();
};

window.clearHostFolder = function () {
  if (confirm(t("prompt_clear_files"))) {
    if (isElectron) window.api.clearHostFolder();
    alert(t("alert_files_cleared"));
  }
};

// --- DIE TIMBUKTU TUNNEL LOGIK ---
// --- DIE TIMBUKTU TUNNEL LOGIK (MIT ADMIN-SCHLOSS) ---
/*
            window.startTimbuktuTunnel = function() {
                if (!isElectron) return;
                
                // 1. Wir fragen nach dem Passwort
                const adminPin = prompt("🔒 ADMIN-BEREICH:\nBitte gib das Master-Passwort ein, um den Tunnel ins offene Internet zu aktivieren:");
                
                // 2. Wenn er auf Abbrechen klickt oder nichts eingibt, passiert gar nichts
                if (adminPin === null || adminPin.trim() === "") return;

                const linkField = document.getElementById('host-tunnel-link');
                linkField.style.display = 'block';
                linkField.value = "⏳ Authentifiziere & baue Tunnel auf...";
                
                // 3. Wir schicken den Start-Befehl INKLUSIVE Passwort ans Backend
                window.api.startTunnel(adminPin);
            };
            */

window.startTimbuktuTunnel = function () {
  if (!isElectron) return;

  //const warningDE = "⚠️ SICHERHEITSHINWEIS:\n\nDurch das Öffnen dieses Tunnels wird dein lokaler VulaLAN-Server aus dem Internet erreichbar. Bist du dir sicher?";
  //const warningEN = "⚠️ SECURITY NOTICE:\n\nOpening this tunnel makes your local VulaLAN server accessible from the internet. Are you sure?";

  const warningDE =
    "⚠️ SICHERHEITSHINWEIS:\n\nDurch das Öffnen dieses Tunnels wird dein lokaler VulaLAN-Server aus dem Internet erreichbar. Fremde können deinen Server finden, wenn du den Link teilst.\n\nDu übernimmst die volle Verantwortung für die Sicherheit deines Netzwerks und den gesamten Traffic. Bist du dir sicher, dass du den Tunnel aktivieren möchtest?";
  const warningEN =
    "⚠️ SECURITY NOTICE:\n\nOpening this tunnel makes your local VulaLAN server accessible from the internet. Strangers may find your server if you share the link.\n\nYou accept full responsibility for the security of your network and all traffic. Are you sure you want to activate the tunnel?";

  const warningText = currentLang === "de" ? warningDE : warningEN;

  // Kurze Sicherheitsabfrage (ohne PIN!)
  if (!confirm(warningText)) return;

  const linkField = document.getElementById("host-tunnel-link");
  linkField.style.display = "block";
  linkField.value =
    currentLang === "de"
      ? "⏳ Tunnel wird aufgebaut..."
      : "⏳ Building tunnel...";

  // Tunnel-Befehl direkt ohne Argumente ans Backend senden
  window.api.startTunnel();
};

// Lauscht auf die Antworten vom Backend
// Lauscht auf die Antworten vom Backend (SICHERER WEG)
// Lauscht auf die Antworten vom Backend (SICHERER WEG)
if (isElectron) {
  window.api.onTunnelReady((url) => {
    const cleanUrl = url.replace("https://", "");
    document.getElementById("host-tunnel-link").value = cleanUrl;
    alert(
      `🌍 Dein Server ist jetzt weltweit erreichbar!\n\nSchicke deinem Kumpel diesen Tunnel-Link + deine rote PIN.`,
    );
  });

  window.api.onTunnelError((errorMsg) => {
    document.getElementById("host-tunnel-link").value = "❌ " + errorMsg;
    alert(errorMsg);
  });

  // --- NEU: P2P & NETZWERK LAUSCHER ---
  window.api.onP2PMessage((msgData) => {
    processIncomingSignal(msgData);
  });

  window.api.onScanResult((targetIp) => {
    if (
      !p2pSockets[targetIp] ||
      p2pSockets[targetIp].readyState !== WebSocket.OPEN
    ) {
      document.getElementById("p2p-target-ip").value = targetIp;
      initiateP2PConnection(true);
    }
  });

  window.api.onFirewallResult((success) => {
    if (success) {
      appendChatUI(
        "System",
        "System",
        t("sys_fw_ok"),
        null,
        null,
        Date.now(),
        0,
      );
    } else {
      appendChatUI(
        "System",
        "System",
        t("sys_fw_fail"),
        null,
        null,
        Date.now(),
        0,
      );
    }
  });
}

// Lauscht auf Klicks und schickt den Status ans Express-Backend!
document
  .getElementById("autoSaveLargeToggle")
  .addEventListener("change", (e) => {
    if (typeof isElectron !== "undefined" && isElectron) {
      window.api.toggleAutoSave(e.target.checked);
    }
  });

// --- NEU: MOBILE SIDEBAR STEUERUNG ---
window.toggleMobileSidebar = function (side) {
  const overlay = document.getElementById("mobile-overlay");
  if (side === "left") {
    document.querySelector(".sidebar").classList.toggle("mobile-open");
  } else {
    document.getElementById("group-sidebar").classList.toggle("mobile-open");
  }

  if (
    document.querySelector(".sidebar").classList.contains("mobile-open") ||
    document.getElementById("group-sidebar").classList.contains("mobile-open")
  ) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
};

window.closeMobileSidebars = function () {
  document.querySelector(".sidebar").classList.remove("mobile-open");
  const gSidebar = document.getElementById("group-sidebar");
  if (gSidebar) gSidebar.classList.remove("mobile-open");
  document.getElementById("mobile-overlay").style.display = "none";
};

// ==========================================
// --- CUSTOM DYNAMIC THEME ENGINE (HSL) ---
// ==========================================

// Übersetzt einen HEX-Code (z.B. #7b2cbf) in Farbton (H) und Sättigung (S)
function hexToHSL(H) {
    let r = 0, g = 0, b = 0;
    if (H.length == 4) { r = "0x" + H[1] + H[1]; g = "0x" + H[2] + H[2]; b = "0x" + H[3] + H[3]; }
    else if (H.length == 7) { r = "0x" + H[1] + H[2]; g = "0x" + H[3] + H[4]; b = "0x" + H[5] + H[6]; }
    r /= 255; g /= 255; b /= 255;
    let cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = cmax - cmin, h = 0, s = 0, l = 0;
    
    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    
    return { h, s }; 
}

const defaultVulaHex = "#eb12d9";
let currentVulaHex = localStorage.getItem("vula_color") || defaultVulaHex;

// Wendet die HSL-Mathematik auf die gesamte App an
window.applyCustomTheme = function(hexColor) {
    const hsl = hexToHSL(hexColor);
    document.documentElement.style.setProperty('--theme-h', hsl.h);
    document.documentElement.style.setProperty('--theme-s', hsl.s + '%');
};

// Direkt beim Start feuern
applyCustomTheme(currentVulaHex);

// Event-Listener für den Color-Picker in den Einstellungen
document.getElementById("theme-color-picker")?.addEventListener("input", (e) => {
    const newColor = e.target.value;
    localStorage.setItem("vula_color", newColor);
    applyCustomTheme(newColor); // Ändert die Farbe der App in Echtzeit!
});

// Event-Listener für den Reset-Button
document.getElementById("reset-color-btn")?.addEventListener("click", () => {
    localStorage.setItem("vula_color", defaultVulaHex);
    const cp = document.getElementById("theme-color-picker");
    if (cp) cp.value = defaultVulaHex;
    applyCustomTheme(defaultVulaHex);
    
    setTimeout(() => window.location.reload(), 200); 
});