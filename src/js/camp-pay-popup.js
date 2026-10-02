/**
 * Camp enrolment popup - Modern Age Coders
 *
 * The one popup the summer and winter camp pages open from Enroll Now:
 * plan summary, three fields, pay. There is no WhatsApp step in between
 * (removed 2 Oct 2026 so visitors go straight to payment), and the same
 * popup serves Indian and international visitors.
 *
 * It is drawn in the camp page's own theme ('summer' or 'winter'). The
 * camp scripts own the price and the Razorpay call; this file only builds
 * the popup and hands the form values back through onSubmit.
 *
 *   MACCampPay.open({ theme, courseName, planName, planInfo, price, pricePer,
 *                     isIndian, onSubmit({ name, email, phone, phoneEl }) })
 *   MACCampPay.showError(msg)  MACCampPay.setPaying(bool, label)  MACCampPay.close()
 */
(function () {
  'use strict';
  if (window.MACCampPay) return;

  var ID = 'mac-camp-pay';
  var esc = function (t) {
    return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  var LOCK = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

  var MACCampPay = {
    _label: '',
    _paying: false,
    _onKey: null,

    open: function (o) {
      this.close();
      this.addStyles();
      var isIndian = o.isIndian !== false;
      this._label = 'Pay ' + o.price + ' securely';
      var html =
        '<div id="' + ID + '" class="mcp-overlay mcp--' + esc(o.theme || 'summer') + '" role="dialog" aria-modal="true" aria-labelledby="mcp-title">' +
          '<div class="mcp">' +
            '<button type="button" class="mcp-close" aria-label="Close">&times;</button>' +
            '<p class="mcp-eyebrow">Enrolment</p>' +
            '<h2 id="mcp-title" class="mcp-title">' + esc(o.courseName) + '</h2>' +
            '<div class="mcp-plan">' +
              '<div class="mcp-plan-main">' +
                '<span class="mcp-label">Your plan</span>' +
                '<strong class="mcp-plan-name">' + esc(o.planName) + '</strong>' +
                (o.planInfo ? '<span class="mcp-plan-info">' + esc(o.planInfo) + '</span>' : '') +
              '</div>' +
              '<div class="mcp-price"><b>' + esc(o.price) + '</b><span>' + esc(o.pricePer || '') + '</span></div>' +
            '</div>' +
            '<form class="mcp-form" novalidate>' +
              '<div class="mcp-field"><label for="mcp-name">Student or parent name</label>' +
                '<input type="text" id="mcp-name" autocomplete="name" required placeholder="Full name"></div>' +
              '<div class="mcp-field"><label for="mcp-email">Email</label>' +
                '<input type="email" id="mcp-email" autocomplete="email" inputmode="email" required placeholder="you@example.com">' +
                '<small>Your receipt and camp details are sent here.</small></div>' +
              '<div class="mcp-field"><label for="mcp-phone">Phone</label>' +
                '<input type="tel" id="mcp-phone" autocomplete="tel-national" required placeholder="' + (isIndian ? '10-digit mobile number' : 'Phone number') + '" maxlength="' + (isIndian ? '10' : '15') + '"></div>' +
              '<div class="mcp-err" role="alert" hidden></div>' +
              '<button type="submit" class="mcp-btn">' + LOCK + '<span>' + esc(this._label) + '</span></button>' +
              '<p class="mcp-methods">' + (isIndian ? 'UPI · Cards · Net banking · Wallets' : 'Debit and credit cards from any country') + '</p>' +
            '</form>' +
            '<div class="mcp-foot">' +
              '<span class="mcp-secure">' + LOCK + ' Secured by Razorpay</span>' +
              '<span>Questions? Call <a href="tel:+919123366161">+91 91233 66161</a></span>' +
            '</div>' +
          '</div>' +
        '</div>';

      document.body.insertAdjacentHTML('beforeend', html);
      document.body.classList.add('mac-pay-open');
      var self = this;
      var overlay = document.getElementById(ID);
      overlay.querySelector('.mcp-close').addEventListener('click', function () { self.close(); });
      // The dim backdrop and Escape close it only before checkout has started.
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay && !self._paying) self.close();
      });
      this._onKey = function (e) { if (e.key === 'Escape' && !self._paying) self.close(); };
      document.addEventListener('keydown', this._onKey);
      overlay.querySelector('.mcp-form').addEventListener('submit', function (e) {
        e.preventDefault();
        self.clearError();
        var name = document.getElementById('mcp-name').value.trim();
        var email = document.getElementById('mcp-email').value.trim();
        var phoneEl = document.getElementById('mcp-phone');
        var phone = phoneEl.value.trim();
        if (!name || !email || !phone) { self.showError('Please fill in the name, email and phone.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { self.showError('Please check the email address.'); return; }
        if (typeof o.onSubmit === 'function') o.onSubmit({ name: name, email: email, phone: phone, phoneEl: phoneEl });
      });
      if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
        document.getElementById('mcp-name').focus();
      }
    },

    showError: function (msg) {
      var box = document.querySelector('#' + ID + ' .mcp-err');
      if (!box) { alert(msg); return; }
      box.textContent = msg;
      box.hidden = false;
    },

    clearError: function () {
      var box = document.querySelector('#' + ID + ' .mcp-err');
      if (box) { box.hidden = true; box.textContent = ''; }
    },

    setPaying: function (paying, label) {
      this._paying = paying;
      var btn = document.querySelector('#' + ID + ' .mcp-btn');
      if (!btn) return;
      btn.disabled = paying;
      var span = btn.querySelector('span');
      if (span) span.textContent = label || this._label;
    },

    close: function () {
      var el = document.getElementById(ID);
      if (el) el.remove();
      document.body.classList.remove('mac-pay-open');
      if (this._onKey) { document.removeEventListener('keydown', this._onKey); this._onKey = null; }
      this._paying = false;
    },

    // Shown only if the redirect to /welcome fails after a verified payment.
    success: function (o) {
      this.close();
      this.addStyles();
      var html =
        '<div id="' + ID + '" class="mcp-overlay mcp--' + esc(o.theme || 'summer') + '" role="dialog" aria-modal="true">' +
          '<div class="mcp mcp-done">' +
            '<div class="mcp-tick" aria-hidden="true">✓</div>' +
            '<p class="mcp-eyebrow">Payment successful</p>' +
            '<h2 class="mcp-title">Welcome to ' + esc(o.courseName) + '</h2>' +
            '<div class="mcp-plan"><div class="mcp-plan-main"><span class="mcp-label">Order ID</span>' +
              '<strong class="mcp-plan-name">' + esc(o.orderId) + '</strong></div>' +
              '<div class="mcp-price"><b>' + esc(o.amount) + '</b></div></div>' +
            '<p class="mcp-note">We have received your response. We will reach out to you within 48 hours. If you want to connect now, please contact 9123366161 (Shivam Sir).</p>' +
            '<button type="button" class="mcp-btn"><span>Continue</span></button>' +
          '</div>' +
        '</div>';
      document.body.insertAdjacentHTML('beforeend', html);
      document.body.classList.add('mac-pay-open');
      var self = this;
      document.querySelector('#' + ID + ' .mcp-btn').addEventListener('click', function () { self.close(); });
    },

    addStyles: function () {
      if (document.getElementById('mac-camp-pay-styles')) return;
      var s = document.createElement('style');
      s.id = 'mac-camp-pay-styles';
      s.textContent = [
        'body.mac-pay-open{overflow:hidden}',
        // visibility, not display: the injected button carries an inline display:flex !important.
        'body.mac-pay-open .misti-chat-btn,body.mac-pay-open .wa-float-btn{visibility:hidden!important;opacity:0!important;pointer-events:none!important}',
        // Themes: each matches its camp page (summer: void black + gold/orange; winter: navy + ice).
        '.mcp--summer{--c-bg1:#0d0d10;--c-bg2:#14141c;--c-line:rgba(255,171,76,.22);--c-accent:#FFAB4C;--c-accent2:#FFD93D;--c-on:#1a1206;--c-tint:rgba(255,171,76,.08);--c-text:#fff;--c-soft:#d9d9d9;--c-muted:#9b9b9b;--c-display:"Outfit","Inter",system-ui,sans-serif;--c-body:"Inter",system-ui,-apple-system,"Segoe UI",sans-serif}',
        '.mcp--winter{--c-bg1:#050F24;--c-bg2:#091A32;--c-line:rgba(56,189,248,.24);--c-accent:#38BDF8;--c-accent2:#22D3EE;--c-on:#010812;--c-tint:rgba(56,189,248,.08);--c-text:#E8F4FF;--c-soft:#CBD5E1;--c-muted:#94BDD1;--c-display:"Raleway",system-ui,sans-serif;--c-body:"Nunito",system-ui,-apple-system,"Segoe UI",sans-serif}',
        '.mcp-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.78);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);animation:mcpFade .2s ease both}',
        '.mcp{position:relative;box-sizing:border-box;width:100%;max-width:460px;max-height:calc(100dvh - 32px);overflow-y:auto;background:linear-gradient(160deg,var(--c-bg1),var(--c-bg2));color:var(--c-text);border:1px solid var(--c-line);border-radius:22px;padding:30px 28px 22px;font-family:var(--c-body);line-height:1.5;text-align:left;box-shadow:0 30px 80px rgba(0,0,0,.65),0 0 60px var(--c-tint);animation:mcpUp .28s cubic-bezier(.2,.8,.2,1) both}',
        '.mcp *,.mcp *::before,.mcp *::after{box-sizing:border-box}',
        '.mcp-close{position:absolute;top:14px;right:14px;width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.1);border-radius:50%;background:rgba(255,255,255,.05);color:var(--c-soft);font-size:22px;line-height:1;cursor:pointer;font-family:var(--c-body);transition:background .2s,color .2s}',
        '.mcp-close:hover{background:var(--c-tint);color:var(--c-text)}',
        '.mcp-eyebrow{margin:0 0 6px;font-family:var(--c-body);font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--c-accent)}',
        '.mcp-title{margin:0 44px 18px 0;font-family:var(--c-display);font-weight:700;font-size:22px;line-height:1.25;letter-spacing:-.01em;color:var(--c-text);-webkit-text-fill-color:var(--c-text);background:none;text-shadow:none}',
        '.mcp-plan{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:15px 16px;margin:0 0 20px;background:var(--c-tint);border:1px solid var(--c-line);border-left:3px solid var(--c-accent);border-radius:12px}',
        '.mcp-plan-main{display:flex;flex-direction:column;gap:2px;min-width:0}',
        '.mcp-label{font-size:10.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--c-muted)}',
        '.mcp-plan-name{font-family:var(--c-display);font-weight:700;font-size:16.5px;color:var(--c-text);word-break:break-word}',
        '.mcp-plan-info{font-size:13px;color:var(--c-muted);line-height:1.4}',
        '.mcp-price{text-align:right;white-space:nowrap;flex-shrink:0}',
        '.mcp-price b{display:block;font-family:var(--c-display);font-weight:800;font-size:26px;line-height:1.05;color:var(--c-accent)}',
        '.mcp-price span{font-size:12.5px;color:var(--c-muted)}',
        '.mcp-form{margin:0}',
        '.mcp-field{margin:0 0 14px}',
        '.mcp-field label{display:block;margin:0 0 6px;font-size:13.5px;font-weight:600;color:var(--c-soft)}',
        '.mcp-field input{width:100%;min-height:46px;padding:11px 13px;font:inherit;font-size:16px;color:var(--c-text);background:rgba(0,0,0,.35);border:1.5px solid rgba(255,255,255,.12);border-radius:10px;outline:none;transition:border-color .15s,box-shadow .15s;-webkit-appearance:none;appearance:none}',
        '.mcp-field input::placeholder{color:rgba(255,255,255,.35)}',
        '.mcp-field input:focus{border-color:var(--c-accent);box-shadow:0 0 0 3px var(--c-tint)}',
        '.mcp-field small{display:block;margin-top:5px;font-size:12px;color:var(--c-muted)}',
        '.mcp-field .mac-cc-btn{color:var(--c-text);border:1.5px solid rgba(255,255,255,.12);border-right:0;border-radius:10px 0 0 10px;background:rgba(255,255,255,.04)}',
        '.mcp-field .mac-cc-btn:hover,.mcp-field .mac-cc-btn:focus-visible{background:var(--c-tint)}',
        '.mcp-err{margin:2px 0 14px;padding:10px 12px;border-radius:10px;font-size:13.5px;line-height:1.45;color:#fecaca;background:rgba(220,38,38,.14);border:1px solid rgba(248,113,113,.4)}',
        '.mcp-err[hidden]{display:none}',
        '.mcp-btn{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;min-height:52px;padding:14px 18px;border:none;border-radius:12px;background:linear-gradient(135deg,var(--c-accent),var(--c-accent2));color:var(--c-on);font-family:var(--c-display);font-size:16px;font-weight:800;cursor:pointer;box-shadow:0 12px 30px -12px var(--c-accent);transition:transform .15s,box-shadow .2s,filter .2s}',
        '.mcp-btn:hover{transform:translateY(-1px);filter:brightness(1.05)}',
        '.mcp-btn:disabled{opacity:.75;cursor:progress;transform:none}',
        '.mcp-methods{margin:10px 0 0;text-align:center;font-size:12px;letter-spacing:.03em;color:var(--c-muted)}',
        '.mcp-foot{display:flex;flex-direction:column;align-items:center;gap:4px;margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,.08);text-align:center;font-size:12.5px;color:var(--c-muted)}',
        '.mcp-secure{display:inline-flex;align-items:center;gap:6px;font-weight:600;color:var(--c-soft)}',
        '.mcp-foot a{color:var(--c-accent);font-weight:700;text-decoration:none}',
        '.mcp-foot a:hover{text-decoration:underline}',
        '.mcp-done{text-align:center}',
        '.mcp-done .mcp-title{margin-right:0}',
        '.mcp-done .mcp-plan{text-align:left}',
        '.mcp-tick{width:62px;height:62px;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(74,222,128,.14);color:#4ade80;font-size:30px;font-weight:700}',
        '.mcp-note{margin:0 0 16px;font-size:14px;color:var(--c-soft)}',
        '@media (max-width:560px){.mcp-overlay{padding:0;align-items:flex-end}.mcp{max-width:none;max-height:94dvh;border-radius:22px 22px 0 0;border-bottom:0;padding:24px 18px calc(18px + env(safe-area-inset-bottom));animation:mcpSheet .3s cubic-bezier(.2,.8,.2,1) both}.mcp-title{font-size:19.5px;margin-bottom:14px}.mcp-plan{padding:13px 14px;margin-bottom:16px}.mcp-price b{font-size:22px}.mcp-field{margin-bottom:12px}}',
        '@keyframes mcpFade{from{opacity:0}to{opacity:1}}',
        '@keyframes mcpUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}',
        '@keyframes mcpSheet{from{transform:translateY(40px);opacity:.4}to{transform:none;opacity:1}}',
        '@media (prefers-reduced-motion:reduce){.mcp-overlay,.mcp{animation:none}}'
      ].join('\n');
      document.head.appendChild(s);
    }
  };

  window.MACCampPay = MACCampPay;
})();
