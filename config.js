// A weboldal beállításai – csak ezt a fájlt kell szerkeszteni.
// Új launcher kiadásnál: version, file, sizeBytes, sha256 (lásd README.md).
window.SITE = {
  serverName: "SZERVERNÉV",
  tagline: "Rövid szlogen a szerverről",
  description: "Egy kattintás, és már a szerveren vagy – a Conquest_ textúracsomaggal és minden szükséges moddal együtt.",

  minecraft: "1.21.11",
  server: { host: "85.155.121.26", port: 19003 },

  launcher: {
    version: "1.1.0",
    // A telepítő címe. Lehet relatív (ugyanazon a tárhelyen) vagy teljes https link (pl. GitHub Releases).
    file: "https://github.com/PunksterDude/launcher/releases/download/v1.1.0/Szerver.Launcher.Setup.1.1.0.exe",
    sizeBytes: 121621304,
    sha256: "8E598F3FFC080941E08445B617573DACA7707A2C0AD7F52073218EA0C760788C",
    date: "2026-11-19"
  },

  // Opcionális linkek – ha üres, a gomb nem jelenik meg.
  discordUrl: "",

  // Élő státusz a mcsrvstat.us nyilvános API-n keresztül (a böngésző nem tud közvetlenül Minecraft szervert pingelni).
  // false = nincs élő státusz, csak a cím jelenik meg.
  liveStatus: true
};
