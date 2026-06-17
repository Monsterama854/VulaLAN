!macro customInit
  ; 1. Sicherheitshalber die Prozesse killen, damit der Deinstaller nicht blockiert wird
  ExecWait 'taskkill /F /IM vulalan.exe /T'
  ExecWait 'taskkill /F /IM cloudflared.exe /T'
  
  ; 2. Suchen und Ausführen des Deinstallers der aktuellen VulaLAN Version
  IfFileExists "$LOCALAPPDATA\Programs\vulalan\Uninstall VulaLAN.exe" 0 +2
    ; Das /S macht es "Silent" (unsichtbar). 
    ; Das _?= zwingt NSIS zu warten, bis die Deinstallation WIRKLICH fertig ist!
    ExecWait '"$LOCALAPPDATA\Programs\vulalan\Uninstall VulaLAN.exe" /S _?=$LOCALAPPDATA\Programs\vulalan'

  ; 3. Falls noch die uralte lan-discord Version herumgeistert: Weg damit!
  IfFileExists "$LOCALAPPDATA\Programs\lan-discord\Uninstall lan-discord.exe" 0 +2
    ExecWait '"$LOCALAPPDATA\Programs\lan-discord\Uninstall lan-discord.exe" /S _?=$LOCALAPPDATA\Programs\lan-discord'

  ; 4. Die Festplatte von Dateiresten befreien (Die Anwendungsdaten/Chats bleiben sicher in %APPDATA%!)
  RMDir /r "$LOCALAPPDATA\Programs\vulalan"
  RMDir /r "$LOCALAPPDATA\Programs\lan-discord"

  ; Ein kurzer Moment zum Durchatmen für Windows
  Sleep 1500
!macroend