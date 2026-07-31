/**
 * Country and currency switcher.
 *
 * Shows the visitor which country's prices they are seeing, and lets them
 * change it. Detection is a guess — a browser's timezone and language are not
 * where somebody lives — so the guess is always visible and always correctable.
 *
 * WHY THIS EXISTS, BEYOND CONVENIENCE
 * -----------------------------------
 * EU Regulation 2018/302 Article 3 says a trader must not block a customer's
 * access to an online interface on the basis of nationality or residence.
 * Territorial price differences are permitted under Article 4(2), but shutting
 * someone out of a price is not. A visible switcher is how a mis-detected
 * customer reaches the right price instead of bouncing.
 *
 * ON ARBITRAGE, STATED PLAINLY
 * ----------------------------
 * Anyone can pick a cheaper country here. Razorpay's API exposes only whether
 * a card is international, never its issuing country, so a Google-Play-style
 * "you must pay with a local card" check is not buildable on this stack.
 * The floor in pricing.config.jsonc is what makes that survivable: even the
 * cheapest country nets more than an Indian enrolment does, so the exposure is
 * foregone upside, never a loss.
 *
 * Choice is stored in the nf_country cookie — the name Netlify itself reads,
 * so an edge rule can honour it later without changing anything here.
 */

(function () {
  'use strict';

  var COOKIE = 'nf_country';
  var COOKIE_DAYS = 180;

  var CountrySwitcher = {

    init: function () {
      var data = window.MAC_PRICING;
      if (!data || !data.worldwide || !data.worldwide.enabled) return;

      // Nothing to switch between if the page shows no price.
      this.mount = this.findMount();
      if (!this.mount) return;

      this.addStyles();
      this.render();
    },

    /**
     * Where the control goes.
     *
     * A page can place it deliberately with <div data-country-switcher></div>.
     * Otherwise it is attached under the first price on the page, which is
     * where somebody questioning the number is already looking.
     */
    findMount: function () {
      var explicit = document.querySelector('[data-country-switcher]');
      if (explicit) return explicit;

      var note = document.querySelector('.mac-charge-note');
      if (note && note.parentNode) {
        var host = document.createElement('div');
        note.parentNode.insertBefore(host, note.nextSibling);
        return host;
      }

      var price = document.querySelector('.price-amount, .plan-price, .price-amt');
      if (price && price.parentNode) {
        var host2 = document.createElement('div');
        price.parentNode.insertBefore(host2, price.nextSibling);
        return host2;
      }
      return null;
    },

    currentCountry: function () {
      return window.__MAC_COUNTRY || null;
    },

    countryName: function (iso) {
      // Names travel with the prices, so this works on pages that never load
      // the country-code selector.
      var data = window.MAC_PRICING;
      var entry = iso && data && data.worldwide.countries[iso];
      if (entry && entry.name) return entry.name;

      var list = (window.MACCountryCode && window.MACCountryCode.countries) || [];
      for (var i = 0; i < list.length; i++) {
        if (list[i].iso === iso) return list[i].name;
      }
      return iso || 'your country';
    },

    /** Every country we can actually price, sorted by name. */
    priceableCountries: function () {
      var data = window.MAC_PRICING;
      var out = [];
      Object.keys(data.worldwide.countries).forEach(function (iso) {
        var c = data.worldwide.countries[iso];
        if (!c.tiers || !Object.keys(c.tiers).length) return;
        out.push({ iso: iso, name: c.name || iso, currency: c.currency || 'USD' });
      });
      out.sort(function (a, b) { return a.name.localeCompare(b.name); });
      return out;
    },

    currencyFor: function (iso) {
      var data = window.MAC_PRICING;
      var entry = iso && data.worldwide.countries[iso];
      return (entry && entry.currency) || 'USD';
    },

    /** Regional-indicator flag from an ISO code. No image files needed. */
    flag: function (iso) {
      if (!iso || iso.length !== 2) return '🌐';
      try {
        return String.fromCodePoint(
          0x1F1E6 + iso.toUpperCase().charCodeAt(0) - 65,
          0x1F1E6 + iso.toUpperCase().charCodeAt(1) - 65
        );
      } catch (e) { return '🌐'; }
    },

    render: function () {
      var iso = this.currentCountry();
      var self = this;

      var wrap = document.createElement('div');
      wrap.className = 'mac-cs';

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mac-cs-btn';
      btn.setAttribute('aria-haspopup', 'listbox');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span class="mac-cs-flag" aria-hidden="true">' + this.flag(iso) + '</span>' +
        '<span class="mac-cs-label">Prices for <b>' + this.escape(this.countryName(iso)) + '</b>' +
        ' <span class="mac-cs-cur">' + this.escape(this.currencyFor(iso)) + '</span></span>' +
        '<span class="mac-cs-change">Change</span>';

      btn.addEventListener('click', function () { self.openPicker(btn); });
      wrap.appendChild(btn);

      this.mount.appendChild(wrap);
    },

    escape: function (s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    },

    openPicker: function (btn) {
      if (document.getElementById('mac-cs-panel')) return;
      var self = this;
      var data = window.MAC_PRICING;

      // Only countries we can actually price. Anywhere else would silently
      // fall back to list price, which would make the choice a lie.
      var list = this.priceableCountries();

      var panel = document.createElement('div');
      panel.id = 'mac-cs-panel';
      panel.className = 'mac-cs-panel';
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-label', 'Choose your country');

      panel.innerHTML =
        '<div class="mac-cs-head">' +
          '<label class="mac-cs-sronly" for="mac-cs-search">Search countries</label>' +
          '<input id="mac-cs-search" class="mac-cs-search" type="text" autocomplete="off" ' +
          'placeholder="Search countries" />' +
          '<button type="button" class="mac-cs-close" aria-label="Close">&times;</button>' +
        '</div>' +
        '<ul class="mac-cs-list" role="listbox"></ul>' +
        '<p class="mac-cs-foot">Prices are set for each country. You are charged in US dollars; ' +
        'the local figure is an estimate at the rate shown.</p>';

      document.body.appendChild(panel);

      var ul = panel.querySelector('.mac-cs-list');
      var search = panel.querySelector('.mac-cs-search');

      function draw(filter) {
        var f = (filter || '').toLowerCase();
        ul.innerHTML = '';

        // Rank names that START with the query above ones that merely contain
        // it, so typing "oman" offers Oman before Romania.
        var matches = list;
        if (f) {
          var starts = [], contains = [];
          list.forEach(function (c) {
            var n = c.name.toLowerCase();
            if (c.iso.toLowerCase() === f || n.indexOf(f) === 0) starts.push(c);
            else if (n.indexOf(f) !== -1) contains.push(c);
          });
          matches = starts.concat(contains);
        }

        var shown = 0;
        matches.forEach(function (c) {
          if (shown >= 60 && f === '') return;              // keep the first paint quick
          shown++;
          var li = document.createElement('li');
          li.className = 'mac-cs-item';
          li.setAttribute('role', 'option');
          li.tabIndex = 0;
          li.innerHTML = '<span aria-hidden="true">' + self.flag(c.iso) + '</span>' +
            '<span class="mac-cs-name">' + self.escape(c.name) + '</span>' +
            '<span class="mac-cs-code">' + self.escape(self.currencyFor(c.iso)) + '</span>';
          function pick() { self.choose(c.iso); }
          li.addEventListener('click', pick);
          li.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
          });
          ul.appendChild(li);
        });
        if (!shown) {
          ul.innerHTML = '<li class="mac-cs-empty">No match. We may not price that country yet.</li>';
        }
      }

      draw('');
      search.addEventListener('input', function () { draw(this.value); });
      search.focus();

      function close() {
        var p = document.getElementById('mac-cs-panel');
        if (p) p.remove();
        document.removeEventListener('keydown', onKey);
        document.removeEventListener('click', onOutside, true);
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
      function onKey(e) { if (e.key === 'Escape') close(); }
      function onOutside(e) {
        var p = document.getElementById('mac-cs-panel');
        if (p && !p.contains(e.target) && e.target !== btn && !btn.contains(e.target)) close();
      }

      panel.querySelector('.mac-cs-close').addEventListener('click', close);
      document.addEventListener('keydown', onKey);
      setTimeout(function () { document.addEventListener('click', onOutside, true); }, 0);
      btn.setAttribute('aria-expanded', 'true');
    },

    /**
     * Store the choice and reload.
     *
     * A reload rather than re-running the swap in place, deliberately: the
     * region swap rewrites rupee text into dollars and is not reversible, so
     * running it twice would compound rather than correct. Reloading is a
     * fraction of a second and is always right.
     */
    choose: function (iso) {
      var d = new Date();
      d.setTime(d.getTime() + COOKIE_DAYS * 864e5);
      document.cookie = COOKIE + '=' + encodeURIComponent(iso) +
        ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';

      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'country_switch', { country: iso });
        }
      } catch (e) {}

      // Drop any ?country= override so the cookie is what decides from now on.
      var url = new URL(window.location.href);
      url.searchParams.delete('country');
      url.searchParams.delete('test');
      this.reload(url.toString());
    },

    /** Separate so tests can observe the target without navigating. */
    reload: function (href) {
      window.location.replace(href);
    },

    addStyles: function () {
      if (document.getElementById('mac-cs-styles')) return;
      var s = document.createElement('style');
      s.id = 'mac-cs-styles';
      s.textContent = [
        // Quiet by default. Discoverable when questioned, never shouting over
        // the price itself.
        '.mac-cs{margin-top:.5rem}',
        '.mac-cs-btn{display:inline-flex;align-items:center;gap:.45rem;padding:.3rem .6rem;',
        'font:inherit;font-size:.74rem;line-height:1.3;color:var(--muted,#6B6259);',
        'background:transparent;border:1px solid var(--line,rgba(28,24,20,.12));',
        'border-radius:999px;cursor:pointer;transition:border-color .15s,color .15s}',
        '.mac-cs-btn:hover{border-color:var(--amber,#B45309);color:var(--ink,#1C1814)}',
        '.mac-cs-btn:focus-visible{outline:2px solid var(--amber,#B45309);outline-offset:2px}',
        '.mac-cs-flag{font-size:.95rem;line-height:1}',
        '.mac-cs-label b{font-weight:600;color:var(--ink-soft,#3A332C)}',
        '.mac-cs-cur{opacity:.7}',
        '.mac-cs-change{text-decoration:underline;text-underline-offset:2px;color:var(--amber,#B45309)}',

        '.mac-cs-panel{position:fixed;inset:auto 0 0 0;margin:0 auto;z-index:99999;',
        'width:min(420px,100%);max-height:70vh;display:flex;flex-direction:column;',
        'background:var(--surface,#fff);color:var(--ink,#1C1814);',
        'border:1px solid var(--line,rgba(28,24,20,.12));border-bottom:0;',
        'border-radius:14px 14px 0 0;box-shadow:0 24px 50px -30px rgba(28,24,20,.40)}',
        '@media(min-width:640px){.mac-cs-panel{inset:50% auto auto 50%;transform:translate(-50%,-50%);',
        'border-radius:14px;border-bottom:1px solid var(--line,rgba(28,24,20,.12))}}',

        '.mac-cs-head{display:flex;gap:.5rem;align-items:center;padding:.75rem;',
        'border-bottom:1px solid var(--line-2,rgba(28,24,20,.07))}',
        '.mac-cs-search{flex:1;padding:.5rem .65rem;font:inherit;font-size:.9rem;',
        'border:1px solid var(--line,rgba(28,24,20,.12));border-radius:8px;background:var(--paper,#FBF8F2)}',
        '.mac-cs-search:focus{outline:2px solid var(--amber,#B45309);outline-offset:1px}',
        '.mac-cs-close{background:none;border:0;font-size:1.4rem;line-height:1;cursor:pointer;',
        'color:var(--muted,#6B6259);padding:0 .25rem}',

        '.mac-cs-list{list-style:none;margin:0;padding:.25rem;overflow-y:auto;flex:1}',
        '.mac-cs-item{display:flex;align-items:center;gap:.6rem;padding:.5rem .6rem;',
        'border-radius:8px;cursor:pointer;font-size:.88rem}',
        '.mac-cs-item:hover,.mac-cs-item:focus{background:var(--amber-tint,rgba(180,83,9,.08));outline:none}',
        '.mac-cs-name{flex:1}',
        '.mac-cs-code{font-size:.72rem;color:var(--muted,#6B6259);letter-spacing:.03em}',
        '.mac-cs-empty{padding:1rem;font-size:.85rem;color:var(--muted,#6B6259)}',
        '.mac-cs-foot{margin:0;padding:.6rem .75rem;font-size:.7rem;line-height:1.5;',
        'color:var(--muted,#6B6259);border-top:1px solid var(--line-2,rgba(28,24,20,.07))}',
        '.mac-cs-sronly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}'
      ].join('');
      document.head.appendChild(s);
    }
  };

  // After international-pricing.js and local-currency.js, so the control
  // describes the prices the visitor is actually looking at.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { CountrySwitcher.init(); });
  } else {
    CountrySwitcher.init();
  }

  window.MACCountrySwitcher = CountrySwitcher;
})();
