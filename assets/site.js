(function () {
  'use strict';
  var S = window.SITE || {};
  var L = S.launcher || {};
  var server = S.server || {};
  var address = server.host ? server.host + (server.port && server.port !== 25565 ? ':' + server.port : '') : '';
  var fileName = (L.file || '').split('/').pop().split('?')[0];

  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function setText(sel, value) { if (value == null || value === '') return; all(sel).forEach(function (el) { el.textContent = value; }); }

  // Szövegek a config.js-ből
  setText('[data-name]', S.serverName);
  setText('[data-tagline]', S.tagline);
  setText('[data-description]', S.description);
  setText('[data-mc]', S.minecraft);
  setText('[data-version]', L.version);
  setText('[data-sha256]', L.sha256);
  setText('[data-filename]', fileName);
  setText('[data-address]', address);
  setText('[data-year]', String(new Date().getFullYear()));
  if (L.sizeBytes) setText('[data-size]', Math.round(L.sizeBytes / 1048576) + ' MB');
  if (L.date) {
    var d = new Date(L.date + 'T12:00:00');
    if (!isNaN(d)) setText('[data-date]', d.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' }));
  }
  if (S.serverName) document.title = S.serverName + ' Launcher';

  // Letöltés gombok
  all('[data-download]').forEach(function (a) {
    if (L.file) a.setAttribute('href', L.file);
    // A navigáció gombja a letöltés részhez görget, nem tölt le.
    if (a.classList.contains('btn-sm')) { a.setAttribute('href', '#letoltes'); a.removeAttribute('download'); }
  });

  if (S.discordUrl) all('[data-discord]').forEach(function (a) { a.href = S.discordUrl; a.hidden = false; a.rel = 'noopener'; a.target = '_blank'; });

  // Cím másolása
  all('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var done = function () {
        btn.classList.add('copied'); btn.setAttribute('aria-label', 'Kimásolva');
        setTimeout(function () { btn.classList.remove('copied'); btn.setAttribute('aria-label', 'Cím másolása'); }, 1500);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(address).then(done, function () {});
    });
  });

  // Képnagyító
  all('.shot img').forEach(function (img) {
    img.addEventListener('click', function () {
      var box = document.createElement('div');
      box.className = 'lightbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-label', img.alt);
      var big = document.createElement('img');
      big.src = img.src; big.alt = img.alt;
      box.appendChild(big);
      var close = function () { box.remove(); document.removeEventListener('keydown', onKey); };
      var onKey = function (e) { if (e.key === 'Escape') close(); };
      box.addEventListener('click', close);
      document.addEventListener('keydown', onKey);
      document.body.appendChild(box);
    });
  });

  // Élő szerver státusz (mcsrvstat.us)
  var pill = document.querySelector('[data-status-pill]');
  function status(state, text, players) {
    if (!pill) return;
    pill.classList.remove('online', 'offline');
    if (state) pill.classList.add(state);
    setText('[data-status-text]', text);
    if (players) setText('[data-players]', players);
  }
  if (S.liveStatus === false || !server.host) {
    if (pill) pill.hidden = true;
    return;
  }
  var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
  var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 8000);
  fetch('https://api.mcsrvstat.us/3/' + encodeURIComponent(server.host + ':' + (server.port || 25565)), ctrl ? { signal: ctrl.signal } : {})
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (j) {
      clearTimeout(timer);
      if (j.online) {
        var p = j.players || {};
        status('online', 'Online', (p.online || 0) + ' / ' + (p.max || 0));
      } else {
        status('offline', 'Offline', '0 / 0');
      }
    })
    .catch(function () { clearTimeout(timer); status('', 'Nem elérhető'); });
})();
