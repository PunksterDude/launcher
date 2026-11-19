// A weboldal beállításai – csak ezt a fájlt kell szerkeszteni.
// Új launcher kiadásnál: version, file, sizeBytes, sha256 (lásd README.md).
window.SITE = {
  serverName: "Valdheim",
  tagline: "Írd meg a saját sagádat.",
  description: "Hideg fjordok, ősi erődök és el nem mesélt legendák. A launcherrel egy kattintás, és már bent is vagy – a Conquest_ textúracsomaggal és minden szükséges moddal együtt.",

  minecraft: "1.21.11",
  server: { host: "85.155.121.26", port: 19003 },

  launcher: {
    version: "1.2.0",
    // A telepítő címe. Lehet relatív (ugyanazon a tárhelyen) vagy teljes https link (pl. GitHub Releases).
    file: "https://github.com/PunksterDude/launcher/releases/download/v1.2.0/Valdheim.Launcher.Setup.1.2.0.exe",
    sizeBytes: 121621715,
    sha256: "162A4F36DBA1858116ACF3EDB2CAD0BE68E1F36A3FCBB0D6500D1C3F92C44DEB",
    date: "2026-11-19"
  },

  // Opcionális linkek – ha üres, a gomb nem jelenik meg.
  discordUrl: "",

  // Élő státusz a mcsrvstat.us nyilvános API-n keresztül (a böngésző nem tud közvetlenül Minecraft szervert pingelni).
  // false = nincs élő státusz, csak a cím jelenik meg.
  liveStatus: true
};
