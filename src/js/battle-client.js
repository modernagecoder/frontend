/* ==========================================================================
   BATTLE ARENA — shared client runtime
   --------------------------------------------------------------------------
   Identity, the server clock, the polling loop, the countdown widget, sound
   and confetti. Used by the student page, the projector and the host console.
   ========================================================================== */

(function (global) {
  'use strict';

  var API_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'http://localhost:5000/api'
    : 'https://backend-modernagecoders.vercel.app/api';

  /* ---------------------------------------------------------- identity --- */

  var TOKEN_KEY = 'mac_battle_pt';

  /**
   * THE STUDENT'S IDENTITY.
   *
   * Generated once, kept in localStorage, and sent on every request. The server
   * matches on this and never on the name, which is what makes a refresh, a
   * dropped wifi connection or a closed laptop lid return the same student with
   * their work intact instead of creating a duplicate.
   */
  function participantToken() {
    var t = null;
    try { t = localStorage.getItem(TOKEN_KEY); } catch (e) { /* private mode */ }

    if (!t) {
      t = (global.crypto && global.crypto.randomUUID)
        ? global.crypto.randomUUID()
        : 'pt-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12);
      try { localStorage.setItem(TOKEN_KEY, t); } catch (e) { /* keep in memory */ }
    }
    return t;
  }

  /* ------------------------------------------------------------- clock --- */

  /**
   * THE SERVER'S CLOCK, NOT THIS LAPTOP'S.
   *
   * Every response carries serverNow. We keep the median of the last few
   * samples — a median rather than the latest, so one slow request cannot
   * yank every countdown in the room sideways.
   *
   * Countdowns are then rendered as `deadline - (Date.now() + offset)`, which
   * means a student whose system clock is four minutes fast still sees exactly
   * the same time remaining as everyone else.
   */
  var samples = [];
  var offset = 0;

  function noteServerTime(serverNowIso) {
    if (!serverNowIso) return;
    samples.push(new Date(serverNowIso).getTime() - Date.now());
    if (samples.length > 5) samples.shift();
    var sorted = samples.slice().sort(function (a, b) { return a - b; });
    offset = sorted[Math.floor(sorted.length / 2)];
  }

  function serverNow() { return Date.now() + offset; }

  function msUntil(iso) {
    if (!iso) return null;
    return new Date(iso).getTime() - serverNow();
  }

  function formatClock(ms) {
    if (ms === null || ms === undefined) return '--:--';
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0');
  }

  /* ---------------------------------------------------------- requests --- */

  /**
   * THE STUDENT TOKEN TRAVELS IN THE BODY, NOT A CUSTOM HEADER.
   *
   * A header like X-Battle-Token would need adding to Access-Control-Allow-Headers
   * in both the Express CORS config and vercel.json, and neither of those belongs
   * to this feature — changing them would reach into every other endpoint on the
   * site. Both files already allow Content-Type, so a JSON body crosses origins
   * with no preflight negotiation at all.
   *
   * It also means navigator.sendBeacon works unchanged, which is what captures a
   * student's last few seconds of typing when they close the tab. Beacons cannot
   * set headers.
   *
   * GET requests pass it as ?pt= instead; the server accepts all three forms.
   */
  function request(method, path, opts) {
    opts = opts || {};
    var headers = { 'Content-Type': 'application/json' };
    if (opts.token) headers.Authorization = 'Bearer ' + opts.token;

    var body = opts.body;
    if (opts.battleToken) {
      body = body || {};
      body.participantToken = opts.battleToken;
    }

    return fetch(API_BASE + path, {
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : undefined
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (json) {
        if (!res.ok) {
          var err = new Error(json.message || 'Something went wrong.');
          err.status = res.status;
          err.code = json.error;
          err.payload = json;
          throw err;
        }
        return json;
      });
    });
  }

  /* ------------------------------------------------------------ poller --- */

  /**
   * THE SYNC LOOP.
   *
   * Sends the last version it saw; the server answers with about 120 bytes when
   * nothing has changed. Three details matter:
   *
   * JITTER — every interval is randomised by ±20%. Forty students who all
   * loaded the page when the host said "go" would otherwise land in the same
   * 100ms slot every three seconds, forever.
   *
   * BACKOFF — after a failure the delay doubles up to 30s and resets on the
   * first success, so a backend hiccup does not turn into forty clients
   * hammering it.
   *
   * PAUSE ON HIDDEN — a backgrounded tab slows right down. The host console and
   * the projector opt OUT of this (pauseWhenHidden: false), because round expiry
   * and debate turns advance lazily when somebody reads the battle: if every
   * client went quiet, the clock would stop.
   */
  function Poller(config) {
    this.fetchOnce = config.fetchOnce;
    this.onData = config.onData;
    this.onError = config.onError || function () {};
    this.pauseWhenHidden = config.pauseWhenHidden !== false;
    this.hiddenMs = config.hiddenMs || 15000;

    this.version = -1;
    this.intervalMs = config.intervalMs || 3000;
    this.failures = 0;
    this.timer = null;
    this.stopped = true;
    this.inFlight = false;
  }

  Poller.prototype.start = function () {
    if (!this.stopped) return;
    this.stopped = false;

    var self = this;
    this._visibility = function () {
      if (!document.hidden) self.kick();
    };
    document.addEventListener('visibilitychange', this._visibility);

    this.tick();
  };

  Poller.prototype.stop = function () {
    this.stopped = true;
    clearTimeout(this.timer);
    if (this._visibility) document.removeEventListener('visibilitychange', this._visibility);
  };

  /** Sync immediately — used right after an action, so the UI never waits. */
  Poller.prototype.kick = function () {
    clearTimeout(this.timer);
    this.tick();
  };

  Poller.prototype.reset = function () {
    this.version = -1;
    this.kick();
  };

  Poller.prototype.tick = function () {
    var self = this;
    if (this.stopped || this.inFlight) return;

    this.inFlight = true;

    this.fetchOnce(this.version)
      .then(function (data) {
        self.inFlight = false;
        self.failures = 0;
        noteServerTime(data.serverNow);

        if (data.changed) {
          self.version = data.v;
          self.onData(data);
        }
        if (data.nextPollMs) self.intervalMs = data.nextPollMs;

        self.schedule();
      })
      .catch(function (error) {
        self.inFlight = false;
        self.failures += 1;
        self.onError(error, self.failures);
        self.schedule();
      });
  };

  Poller.prototype.schedule = function () {
    if (this.stopped) return;

    var base = this.intervalMs;

    if (this.failures > 0) {
      base = Math.min(30000, this.intervalMs * Math.pow(2, this.failures));
    } else if (this.pauseWhenHidden && document.hidden) {
      base = this.hiddenMs;
    }

    var jittered = base * (0.8 + Math.random() * 0.4);
    this.timer = setTimeout(this.tick.bind(this), jittered);
  };

  /* --------------------------------------------------------- countdown --- */

  /**
   * Builds the ring. Radius is derived from the requested size so one component
   * serves a 64px student badge and a 320px projector dial.
   */
  function makeTimer(size, strokeWidth, fontSize) {
    var r = (size - strokeWidth) / 2;
    var c = 2 * Math.PI * r;

    var el = document.createElement('div');
    el.className = 'timer';
    el.dataset.urgency = 'calm';
    el.innerHTML =
      '<svg width="' + size + '" height="' + size + '" aria-hidden="true">' +
        '<circle class="track" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + strokeWidth + '"/>' +
        '<circle class="sweep" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + strokeWidth + '"' +
          ' stroke-dasharray="' + c + '" stroke-dashoffset="0"/>' +
      '</svg>' +
      '<div class="read" role="timer" aria-live="off" style="font-size:' + fontSize + '">--:--</div>';

    el._c = c;
    el._sweep = el.querySelector('.sweep');
    el._read = el.querySelector('.read');
    return el;
  }

  /**
   * @param el      a node from makeTimer
   * @param endsAt  ISO string, or null to blank the clock
   * @param totalMs the full round length, so the ring depletes proportionally
   */
  function renderTimer(el, endsAt, totalMs) {
    if (!el) return 0;

    if (!endsAt) {
      el._read.textContent = '--:--';
      el._sweep.setAttribute('stroke-dashoffset', el._c);
      el.dataset.urgency = 'calm';
      return 0;
    }

    var left = Math.max(0, msUntil(endsAt));
    var total = totalMs && totalMs > 0 ? totalMs : Math.max(left, 1);
    var frac = Math.max(0, Math.min(1, left / total));

    el._read.textContent = formatClock(left);
    el._sweep.setAttribute('stroke-dashoffset', String(el._c * (1 - frac)));

    var secs = left / 1000;
    el.dataset.urgency = secs <= 10 ? 'final' : (secs <= 60 ? 'soon' : 'calm');

    return left;
  }

  /* ------------------------------------------------------------- sound --- */

  /**
   * Synthesised with the Web Audio API rather than loaded as files: no assets
   * to host, nothing to fail on a slow school connection, and it works offline.
   * Browsers block audio until the user has interacted with the page, so the
   * context is created lazily on the first real click.
   */
  var audio = null;
  var soundOn = true;

  function ensureAudio() {
    if (!audio) {
      var Ctx = global.AudioContext || global.webkitAudioContext;
      if (Ctx) audio = new Ctx();
    }
    if (audio && audio.state === 'suspended') audio.resume();
    return audio;
  }

  function tone(freq, durationMs, type, gain) {
    if (!soundOn) return;
    var ctx = ensureAudio();
    if (!ctx) return;

    var osc = ctx.createOscillator();
    var vol = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    vol.gain.setValueAtTime(gain || 0.08, ctx.currentTime);
    vol.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durationMs / 1000);
    osc.connect(vol).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + durationMs / 1000);
  }

  var CUES = {
    round_start: function () { tone(392, 160, 'triangle', 0.1); setTimeout(function () { tone(587, 320, 'triangle', 0.1); }, 150); },
    correct:     function () { tone(659, 120, 'sine', 0.09); setTimeout(function () { tone(880, 260, 'sine', 0.09); }, 110); },
    wrong:       function () { tone(196, 260, 'sawtooth', 0.05); },
    tick:        function () { tone(880, 55, 'square', 0.035); },
    turn:        function () { tone(523, 130, 'triangle', 0.08); },
    finish:      function () { [523, 659, 784, 1046].forEach(function (f, i) { setTimeout(function () { tone(f, 300, 'triangle', 0.09); }, i * 130); }); }
  };

  function playCue(name) {
    var cue = CUES[name];
    if (cue) cue();
  }

  function setSound(on) { soundOn = !!on; }

  /* ---------------------------------------------------------- confetti --- */

  /**
   * Small self-contained burst. Canvas is created on demand and removed when
   * the last particle dies, so there is no permanently-composited layer sitting
   * over the page for the whole exam.
   */
  function confetti(count, origin) {
    if (global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999';
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var colors = ['#a855f7', '#2dd4bf', '#c4f82a', '#ff2d8e', '#ffd24a'];
    var ox = (origin && origin.x !== undefined ? origin.x : 0.5) * canvas.width;
    var oy = (origin && origin.y !== undefined ? origin.y : 0.4) * canvas.height;

    var bits = [];
    for (var i = 0; i < (count || 90); i++) {
      var angle = Math.random() * Math.PI * 2;
      var speed = 4 + Math.random() * 9;
      bits.push({
        x: ox, y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: 4 + Math.random() * 6,
        color: colors[(Math.random() * colors.length) | 0],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.35,
        life: 1
      });
    }

    (function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var alive = false;

      bits.forEach(function (b) {
        if (b.life <= 0) return;
        alive = true;
        b.vy += 0.28;
        b.vx *= 0.99;
        b.x += b.vx;
        b.y += b.vy;
        b.rot += b.vr;
        b.life -= 0.012;

        ctx.save();
        ctx.globalAlpha = Math.max(0, b.life);
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rot);
        ctx.fillStyle = b.color;
        ctx.fillRect(-b.size / 2, -b.size / 2, b.size, b.size * 0.6);
        ctx.restore();
      });

      if (alive) requestAnimationFrame(frame);
      else canvas.remove();
    })();
  }

  /* ------------------------------------------------------------ helpers -- */

  function escapeHtml(value) {
    return String(value === null || value === undefined ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function initials(name) {
    var parts = String(name || '?').trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments, self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  }

  global.Battle = {
    API_BASE: API_BASE,
    participantToken: participantToken,
    request: request,
    Poller: Poller,
    noteServerTime: noteServerTime,
    serverNow: serverNow,
    msUntil: msUntil,
    formatClock: formatClock,
    makeTimer: makeTimer,
    renderTimer: renderTimer,
    playCue: playCue,
    setSound: setSound,
    confetti: confetti,
    escapeHtml: escapeHtml,
    initials: initials,
    debounce: debounce
  };
})(window);
