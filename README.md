# Letöltőoldal

Statikus weboldal (HTML + CSS + egy kis JS). Nincs hozzá szükség szerveroldali programra vagy adatbázisra, bármilyen tárhelyen fut.

```
website/
  index.html        ← az oldal
  config.js         ← EZT SZERKESZD: szervernév, szlogen, verzió, letöltési link
  assets/           ← stílus, betűtípusok, képek, ikon
  downloads/        ← ide kerül a telepítő, ha a saját tárhelyedről adod
```

## Beállítás (`config.js`)

- `serverName`, `tagline`, `description`: ugyanaz, mint a launcherben.
- `launcher.file`: a telepítő címe. Lehet relatív (`downloads/...exe`) vagy teljes `https://` link.
- `launcher.version`, `sizeBytes`, `sha256`, `date`: új kiadásnál frissítsd.
- `discordUrl`: ha megadod, megjelenik egy Discord gomb.
- `liveStatus`: az élő státusz a nyilvános `api.mcsrvstat.us` szolgáltatáson keresztül jön (a böngésző nem tud közvetlenül Minecraft szervert pingelni). A látogató böngészője ennek küldi el a szerver címét. Ha nem szeretnéd, állítsd `false`-ra.

A méret és az ujjlenyomat új telepítőnél PowerShellben:

```powershell
(Get-Item ".\Valdheim Launcher Setup 1.2.0.exe").Length
```

```powershell
(Get-FileHash ".\Valdheim Launcher Setup 1.2.0.exe").Hash
```

## Közzététel

A telepítő 116 MB. Sok ingyenes oldaltárhely ennyit nem enged egy fájlra (Cloudflare Pages: 25 MB, GitHub Pages: 100 MB), ezért az oldal és a telepítő általában külön helyre kerül.

**A) GitHub (ingyenes, ajánlott)**
1. Hozz létre egy nyilvános repót, és töltsd fel a `website/` tartalmát (a `downloads/` mappa nélkül).
2. Settings → Pages → „Deploy from a branch” → `main` / root. Az oldal a `https://<felhasználó>.github.io/<repó>/` címen lesz elérhető.
3. Releases → „Create a new release” → tag: `v1.2.0` → húzd be a telepítőt. A GitHub a szóközöket pontra cseréli: `Valdheim.Launcher.Setup.1.2.0.exe`.
4. `config.js` → `file: "https://github.com/<felhasználó>/<repó>/releases/download/v1.2.0/Valdheim.Launcher.Setup.1.2.0.exe"`

**B) Saját webtárhely / VPS**
Másold fel az egész `website/` mappát a `downloads/` mappával együtt. A `file` maradhat `downloads/Valdheim.Launcher.Setup.1.2.0.exe`.

## Utána

- A Paper plugin `plugins/SzerverLauncher/config.yml` fájljában írd át a `launcher-url` értékét az oldal címére, hogy a launcher nélkül érkező játékosok ide kapjanak linket.
- Az oldal alján lévő „NEM HIVATALOS MINECRAFT TERMÉK…” szöveget hagyd benne, a Mojang márkahasználati szabályai ezt kérik.

Helyi előnézet: nyisd meg az `index.html`-t böngészőben (a letöltés gomb csak akkor működik, ha a telepítő ott van a `downloads/` mappában).
