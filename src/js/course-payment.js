/**
 * Course Payment Integration
 * Handles Razorpay payments for course enrollments
 * Works with courses-config.json for pricing
 */

/* -----------------------------------------------------------------------
 * EnrollmentStatus, localStorage-backed memory of which courses the
 * current browser has already paid for. After a successful payment we
 * call EnrollmentStatus.mark(); on every page load we call applyUI(),
 * which hides "Enroll" buttons and shows a sticky banner reminding the
 * student to contact +91 91233 66161 for class timings & schedule.
 *
 * Defined idempotently on window so other scripts (e.g. summer-camp
 * enrollment) can reuse the same instance without re-declaring it.
 * --------------------------------------------------------------------- */
(function () {
  if (window.EnrollmentStatus) return;

  var KEY_PREFIX = 'mac_enrolled_v1::';
  var TTL_DAYS = 365;

  function normalizePath(p) {
    p = (p || window.location.pathname || '/').toLowerCase();
    if (p.length > 1 && p.charAt(p.length - 1) === '/') p = p.slice(0, -1);
    return p;
  }

  function storageKey(path) {
    return KEY_PREFIX + normalizePath(path);
  }

  var EnrollmentStatus = {
    mark: function (record) {
      try {
        var path = normalizePath(record && record.coursePath);
        var payload = {
          coursePath: path,
          courseName: (record && record.courseName) || '',
          plan: (record && record.plan) || '',
          orderId: (record && record.orderId) || '',
          amount: (record && record.amount != null) ? String(record.amount) : '',
          currency: (record && record.currency) || 'INR',
          enrolledAt: Date.now()
        };
        localStorage.setItem(storageKey(path), JSON.stringify(payload));
      } catch (e) { /* localStorage disabled / quota, silently ignore */ }
    },

    get: function (path) {
      try {
        var raw = localStorage.getItem(storageKey(path));
        if (!raw) return null;
        var parsed = JSON.parse(raw);
        var ageMs = Date.now() - (parsed.enrolledAt || 0);
        if (ageMs > TTL_DAYS * 24 * 60 * 60 * 1000) {
          localStorage.removeItem(storageKey(path));
          return null;
        }
        return parsed;
      } catch (e) { return null; }
    },

    clear: function (path) {
      try { localStorage.removeItem(storageKey(path)); } catch (e) {}
    },

    applyUI: function () {
      var record = this.get();
      if (!record) return false;
      this._relabelEnrollButtons();
      this._injectBanner(record);
      this._installClickRedirect(record);
      return true;
    },

    welcomeUrl: function (record) {
      if (!record) return '/welcome';
      return '/welcome?course=' + encodeURIComponent(record.courseName || '') +
             '&orderId=' + encodeURIComponent(record.orderId || '') +
             '&amount=' + encodeURIComponent(record.amount || '') +
             '&currency=' + encodeURIComponent(record.currency || 'INR') +
             (record.plan ? '&plan=' + encodeURIComponent(record.plan) : '');
    },

    _relabelEnrollButtons: function () {
      // Mark enroll buttons as "Already Enrolled" but keep them clickable, // a click takes the student to /welcome instead of opening payment.
      var selectors = '.enroll-btn, [data-enroll-btn], [data-enroll-camp], .pricing-card .btn-premium-solid';
      var nodes = document.querySelectorAll(selectors);
      for (var i = 0; i < nodes.length; i++) {
        var btn = nodes[i];
        if (btn.dataset.macEnrolledApplied === 'true') continue;
        btn.dataset.macEnrolledApplied = 'true';
        btn.dataset.macOriginalText = (btn.textContent || '').trim();
        btn.textContent = '✓ Already Enrolled: View Details';
        btn.setAttribute('aria-label', 'You are already enrolled. View enrollment details.');
        btn.style.cursor = 'pointer';
        btn.style.background = 'linear-gradient(135deg, #22c55e, #15803d)';
        btn.style.color = '#fff';
        btn.style.border = 'none';
      }
    },

    _installClickRedirect: function (record) {
      var self = this;
      // Capture-phase listener: runs BEFORE other scripts (e.g. EnrollmentModal)
      // can react to the click. Redirects to /welcome with the saved enrollment.
      document.addEventListener('click', function (e) {
        var target = e.target && e.target.closest && e.target.closest('.enroll-btn, [data-enroll-btn], [data-enroll-camp], .pricing-card .btn-premium-solid');
        if (!target) return;
        if (target.dataset.macEnrolledApplied !== 'true') return;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.location.href = self.welcomeUrl(record);
      }, true);
    },

    _injectBanner: function (record) {
      if (document.getElementById('mac-enrolled-banner')) return;
      var waText = encodeURIComponent('Hi! I have enrolled in ' +
        (record.courseName || 'a course') +
        (record.orderId ? ' (Order ID: ' + record.orderId + ')' : '') +
        '. Please share my class timings and schedule.');
      var waLink = 'https://wa.me/919123366161?text=' + waText;
      var welcomeHref = this.welcomeUrl(record);

      var banner = document.createElement('div');
      banner.id = 'mac-enrolled-banner';
      banner.setAttribute('role', 'status');
      banner.setAttribute('aria-live', 'polite');
      banner.innerHTML =
        '<style>' +
          '#mac-enrolled-banner{position:sticky;top:0;z-index:9999;' +
            'background:linear-gradient(135deg,rgba(34,197,94,0.22),rgba(78,205,196,0.22));' +
            'backdrop-filter:blur(10px);border-bottom:1px solid rgba(78,205,196,0.45);' +
            'color:#f1f5f9;padding:0.75rem 1rem;font-size:0.95rem;' +
            'display:flex;flex-wrap:wrap;align-items:center;justify-content:center;' +
            'gap:0.6rem 0.9rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;}' +
          '#mac-enrolled-banner .meb-tick{color:#4ade80;font-weight:700;}' +
          '#mac-enrolled-banner strong{color:#fff;}' +
          '#mac-enrolled-banner a.meb-btn{display:inline-flex;align-items:center;gap:0.35rem;' +
            'padding:0.4rem 0.85rem;border-radius:0.5rem;text-decoration:none;' +
            'font-weight:600;font-size:0.88rem;color:#fff;}' +
          '#mac-enrolled-banner a.meb-wa{background:#25D366;}' +
          '#mac-enrolled-banner a.meb-call{background:#34b7f1;}' +
          '#mac-enrolled-banner a.meb-details{color:#cbd5e1;font-size:0.85rem;text-decoration:underline;}' +
          '#mac-enrolled-banner .meb-close{background:transparent;border:none;color:#cbd5e1;' +
            'cursor:pointer;font-size:1.2rem;padding:0 0.25rem;margin-left:0.5rem;}' +
          '@media(max-width:600px){#mac-enrolled-banner{font-size:0.88rem;}}' +
        '</style>' +
        '<span class="meb-tick">✓ You\'re already enrolled.</span> ' +
        '<span>Contact <strong>+91 91233 66161</strong> on WhatsApp or call for class timings &amp; schedule.</span> ' +
        '<a class="meb-btn meb-wa" href="' + waLink + '" target="_blank" rel="noopener">WhatsApp</a> ' +
        '<a class="meb-btn meb-call" href="tel:+919123366161">Call</a> ' +
        '<a class="meb-details" href="' + welcomeHref + '">View details</a> ' +
        '<button class="meb-close" aria-label="Dismiss" title="Dismiss">&times;</button>';
      document.body.insertAdjacentElement('afterbegin', banner);
      var closeBtn = banner.querySelector('.meb-close');
      if (closeBtn) closeBtn.addEventListener('click', function () { banner.remove(); });
    }
  };

  window.EnrollmentStatus = EnrollmentStatus;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { EnrollmentStatus.applyUI(); });
  } else {
    EnrollmentStatus.applyUI();
  }
})();

const CoursePayment = {
  config: null,
  courseSlug: null,
  courseName: null,
  
  // API URL - auto-detect local vs production
  getApiUrl: function() {
    const isLocal = window.location.hostname === 'localhost' 
      || window.location.hostname === '127.0.0.1' 
      || window.location.hostname === ''
      || window.location.protocol === 'file:';
    return isLocal ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
  },

  // Initialize payment system. The promise is kept so a click that lands
  // before courses-config.json has loaded waits for it instead of failing.
  init: function() {
    this._ready = this._load();
    return this._ready;
  },

  _load: async function() {
    try {
      // Load config
      const response = await fetch('/content/courses/data/courses-config.json');
      this.config = await response.json();
      
      // Get course slug from URL
      this.courseSlug = this.getCourseSlug();
      this.courseName = this.getCourseName();
      
      // Setup payment buttons
      this.setupPaymentButtons();
      console.log('✅ Course payment initialized for:', this.courseSlug);
    } catch (error) {
      console.error('❌ Failed to initialize course payment:', error);
    } finally {
      this._loadDone = true;
    }
  },

  // Get course slug from URL
  getCourseSlug: function() {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const generatedIndex = pathParts.indexOf('generated');
    if (generatedIndex !== -1 && pathParts[generatedIndex + 1]) {
      return pathParts[generatedIndex + 1];
    }
    // Pretty URL /courses/<slug>, how Netlify actually serves every course
    // page (a 200 rewrite, so "generated" never appears in the path). Without
    // this branch the slug resolved to unknown-course and per-course pricing
    // in courses-config.json silently fell back to defaultPricing.
    const coursesIndex = pathParts.indexOf('courses');
    if (coursesIndex !== -1 && pathParts[coursesIndex + 1] && pathParts[coursesIndex + 1] !== 'generated') {
      return pathParts[coursesIndex + 1];
    }
    // Try body data attribute
    if (document.body.dataset.courseSlug) {
      return document.body.dataset.courseSlug;
    }
    return 'unknown-course';
  },

  // Get course name from page
  getCourseName: function() {
    const titleEl = document.querySelector('.course-hero-title, h1');
    return titleEl ? titleEl.textContent.trim() : 'Course Enrollment';
  },

  // Get pricing for current course
  getPricing: function(planType) {
    if (!this.config) return null;

    // Check if course has specific pricing
    const courseConfig = this.config.courses[this.courseSlug];
    if (courseConfig && courseConfig.pricing && courseConfig.pricing[planType]) {
      return courseConfig.pricing[planType];
    }

    // Fall back to default pricing
    return this.config.defaultPricing[planType];
  },

  // Intl prices from the single source of truth (international-pricing.js).
  // The flat model charges every course the same worldwide USD prices, but
  // the lookup stays subject-aware (agents/maths/coding) so a future config
  // that differentiates them again needs no change here.
  getIntlPricing: function(planType) {
    var ip = window.InternationalPricing;
    // ip.PRICES is checked BEFORE any table is picked. It is null until
    // loadTables() has run, and if the data file failed to load it stays
    // null, which used to throw here on agents/maths pages and kill the buy
    // button outright.
    var hasTables = !!(ip && ip.PRICES);
    // pageSubject()/pageIntlTable() read the generator's data-price-tier tag,
    // so a course on any price row (agents, gemini, ...) charges its own USD
    // figure; the older context checks remain as a fallback.
    var table = !hasTables ? null
      : (ip.pageIntlTable && ip.pageIntlTable())
      ? ip.pageIntlTable()
      : (ip.isAgentsContext && ip.isAgentsContext() && ip.PRICES.internationalAgents)
      ? ip.PRICES.internationalAgents
      : (ip.isMathsContext && ip.isMathsContext() && ip.PRICES.internationalMaths)
      ? ip.PRICES.internationalMaths
      : ip.PRICES.international;
    // No hardcoded fallback. This function decides what a card is charged, so
    // a stale figure here bills a real customer the wrong amount. If the price
    // tables are unavailable, return null and let the caller stop rather than
    // guess. window.MAC_PRICING is read directly as a second route, so a page
    // that loaded the data but not international-pricing.js still charges
    // correctly.
    var p = table && table[planType];

    if (!p && window.MAC_PRICING) {
      var data = window.MAC_PRICING;
      var subject = (ip && ip.pageSubject) ? ip.pageSubject()
        : (ip && ip.isAgentsContext && ip.isAgentsContext()) ? 'agents'
        : (ip && ip.isMathsContext && ip.isMathsContext()) ? 'maths' : 'coding';

      // Flat model: one USD price list for everyone outside India.
      var amount = (data.plans[subject] && data.plans[subject].international)
        ? data.plans[subject].international[planType] : null;

      if (amount === null || amount === undefined) return null;   // not sold
      p = {
        amount: amount,
        display: '$' + amount,
        period: planType === 'oneTime' ? '' : '/month'
      };
    }

    if (!p) {
      console.error('[CoursePayment] No international price available for "' + planType +
        '". Refusing to guess an amount.');
      return null;
    }
    return { amount: p.amount, display: p.display + (p.period || '') };
  },

  // Setup payment buttons - DISABLED: Now handled by enrollment-modal.js
  // The enrollment modal shows first, then calls CoursePayment.showPaymentModal()
  setupPaymentButtons: function() {
    // Do nothing - enrollment-modal.js handles the enroll button clicks
    // and calls CoursePayment.showPaymentModal() when user chooses "Pay Online"
    console.log('✅ CoursePayment ready - waiting for EnrollmentModal to call showPaymentModal()');
  },

  // The one enrolment popup: plan summary, three fields, pay. It opens
  // straight from Enroll Now for Indian and international visitors alike
  // (there is no WhatsApp step in between) and is styled in the editorial
  // theme the course pages use.
  showPaymentModal: function(planType) {
    if (!this.config && this._ready && !this._loadDone) {
      this._ready.then(() => this.showPaymentModal(planType));
      return;
    }
    const pricing = this.getPricing(planType);
    if (!pricing) {
      alert('Pricing not available. Please contact us.');
      return;
    }

    // Detect international user
    const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;

    // Guard: Mini Batch is India-only. Foreign users should never see the card,
    // but if somehow the flow is triggered (e.g., stale DOM, direct call), route
    // them to Group or Personal instead of charging an INR price.
    if (!isIndian && planType === 'miniBatch') {
      alert('The Mini Batch plan is available only in India. Please choose Group Classes or Personalized 1-on-1.');
      return;
    }

    // Use international pricing if not Indian (maths-aware, single source)
    var intlP = this.getIntlPricing(planType);

    // No fallback to the INR figure. Showing "₹1,499" in a modal that will
    // charge US dollars is how a visitor gets billed ten times what they saw.
    // If the region's price cannot be resolved, the modal does not open.
    if (!isIndian && !intlP) {
      alert('We could not load the pricing for your region. Please refresh the page and try again, or call +91 91233 66161.');
      return;
    }

    const displayPricing = isIndian ? pricing : intlP;
    const phoneMaxLength = isIndian ? '10' : '15';
    const phonePlaceholder = isIndian ? '10-digit mobile number' : 'Phone number';
    // "₹1,499/month" -> "₹1,499" + "/month", so the figure can be set large.
    const priceText = String(displayPricing.display || '');
    const cut = priceText.indexOf('/');
    const priceMain = cut > 0 ? priceText.slice(0, cut) : priceText;
    const pricePer = cut > 0 ? priceText.slice(cut) : '';
    // The schedule line and trust line are read off the page, so the popup
    // repeats what the card the visitor clicked already said.
    const card = (document.querySelector('.enroll-btn[data-plan-type="' + planType + '"]') || document.body).closest('.enrollment-option');
    const planInfo = card && card.querySelector('.class-info') ? card.querySelector('.class-info').textContent.trim() : '';
    const trustEl = document.querySelector('.enroll-trust');
    const trust = trustEl ? trustEl.textContent.trim() : 'Monthly billing, cancel any time.';
    const methods = isIndian ? 'UPI · Cards · Net banking · Wallets' : 'Debit and credit cards from any country';
    const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const lock = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

    this.closeModal();
    const modalHtml = `
      <div id="payment-modal" class="payment-modal-overlay mac-pay-overlay" role="dialog" aria-modal="true" aria-labelledby="mac-pay-title">
        <div class="mac-pay">
          <button type="button" class="mac-pay-close" aria-label="Close">&times;</button>
          <p class="mac-pay-eyebrow">Enrolment</p>
          <h2 id="mac-pay-title" class="mac-pay-title">${esc(this.courseName)}</h2>

          <div class="mac-pay-plan">
            <div class="mac-pay-plan-main">
              <span class="mac-pay-label">Your plan</span>
              <strong class="mac-pay-plan-name">${esc(this.getPlanShortName(planType))}</strong>
              ${planInfo ? `<span class="mac-pay-plan-info">${esc(planInfo)}</span>` : ''}
            </div>
            <div class="mac-pay-price"><b>${esc(priceMain)}</b><span>${esc(pricePer)}</span></div>
          </div>

          <form id="payment-form" class="mac-pay-form" novalidate>
            <div class="mac-pay-field">
              <label for="pay-name">Student or parent name</label>
              <input type="text" id="pay-name" autocomplete="name" required placeholder="Full name">
            </div>
            <div class="mac-pay-field">
              <label for="pay-email">Email</label>
              <input type="email" id="pay-email" autocomplete="email" inputmode="email" required placeholder="you@example.com">
              <small>Your receipt and class details are sent here.</small>
            </div>
            <div class="mac-pay-field">
              <label for="pay-phone">Phone</label>
              <input type="tel" id="pay-phone" autocomplete="tel-national" required placeholder="${phonePlaceholder}" maxlength="${phoneMaxLength}">
            </div>
            <div class="mac-pay-err" role="alert" hidden></div>
            <button type="submit" class="payment-submit-btn mac-pay-btn">${lock}<span>Pay ${esc(priceMain)} securely</span></button>
            <p class="mac-pay-methods">${methods}</p>
          </form>

          <div class="mac-pay-foot">
            <span class="mac-pay-secure">${lock} Secured by Razorpay</span>
            <span>${esc(trust)}</span>
            <span>Questions? Call <a href="tel:+919123366161">+91 91233 66161</a></span>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    this.addModalStyles();
    document.body.classList.add('mac-pay-open');

    const overlay = document.getElementById('payment-modal');
    this._payButtonLabel = 'Pay ' + priceMain + ' securely';
    overlay.querySelector('.mac-pay-close').addEventListener('click', () => this.closeModal());
    // A tap on the dim backdrop closes it only before checkout has started,
    // so a stray tap cannot throw away a payment in progress.
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay && !this._paying) this.closeModal();
    });
    this._onKey = (e) => { if (e.key === 'Escape' && !this._paying) this.closeModal(); };
    document.addEventListener('keydown', this._onKey);
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
      const first = document.getElementById('pay-name');
      if (first) first.focus();
    }

    document.getElementById('payment-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.processPayment(planType, pricing.amount);
    });
  },

  // Short plan name for the popup; getPlanName stays the longer form sent
  // with the order.
  getPlanShortName: function(planType) {
    return { group: 'Group Classes', miniBatch: 'Mini Batch', personal: 'Personalized 1-on-1' }[planType] || 'Course Enrollment';
  },

  // Show an error inside the popup instead of a browser alert.
  showError: function(message) {
    const box = document.querySelector('#payment-modal .mac-pay-err');
    if (!box) { alert(message); return; }
    box.textContent = message;
    box.hidden = false;
  },

  clearError: function() {
    const box = document.querySelector('#payment-modal .mac-pay-err');
    if (box) { box.hidden = true; box.textContent = ''; }
  },

  setPaying: function(paying, label) {
    this._paying = paying;
    const btn = document.querySelector('#payment-modal .mac-pay-btn');
    if (!btn) return;
    btn.disabled = paying;
    const span = btn.querySelector('span');
    if (span) span.textContent = label || this._payButtonLabel || 'Pay securely';
  },

  // Get plan display name
  getPlanName: function(planType) {
    // Lifetime access was retired on 2026-07-31. It is deliberately absent
    // here: if any stale markup still asks for it, getPricing() finds no price
    // and the flow stops rather than charging an amount for a plan that is no
    // longer sold.
    const names = {
      'group': 'Group Classes (up to 10 students)',
      'miniBatch': 'Mini Batch (3-4 students)',
      'personal': 'Personalized 1-on-1 Mentorship'
    };
    return names[planType] || 'Course Enrollment';
  },

  // Close modal
  closeModal: function() {
    const modal = document.getElementById('payment-modal');
    if (modal) modal.remove();
    document.body.classList.remove('mac-pay-open');
    if (this._onKey) {
      document.removeEventListener('keydown', this._onKey);
      this._onKey = null;
    }
    this._paying = false;
  },

  // Process payment
  processPayment: async function(planType, amount) {
    const name = document.getElementById('pay-name').value.trim();
    const email = document.getElementById('pay-email').value.trim();
    const phoneEl = document.getElementById('pay-phone');
    const phone = phoneEl.value.trim();
    this.clearError();

    // Validate
    if (!name || !email || !phone) {
      this.showError('Please fill in the name, email and phone.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.showError('Please check the email address.');
      return;
    }

    const ccInfo = (window.MACCountryCode && window.MACCountryCode.read)
      ? window.MACCountryCode.read(phoneEl)
      : { dial: '+91', iso: 'IN', name: 'India' };

    // Validate phone against the chosen country.
    const isIndia = ccInfo.iso === 'IN';
    const phoneRegex = isIndia ? /^[0-9]{10}$/ : /^[0-9]{7,15}$/;
    const phoneMsg = isIndia ? 'Please enter a valid 10-digit mobile number.' : 'Please enter a valid phone number (7 to 15 digits).';

    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      this.showError(phoneMsg);
      return;
    }

    try {
      this.setPaying(true, 'Opening secure checkout…');

      // Determine currency and amount for international users.
      // Mini Batch has no USD price. It's India-only; foreign users are blocked earlier.
      // Prices come from getIntlPricing (context-aware, single source of truth).
      const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : (ccInfo.iso === 'IN');
      // Re-guard here because this isIndian can differ from the modal-open one
      // (country-code selection). Without it, a null intl price would fall back
      // to the INR amount while currency says USD, a 90x overcharge.
      if (!isIndian && planType === 'miniBatch') {
        this.setPaying(false);
        this.showError('The Mini Batch plan is available only in India. Please choose Group Classes or Personalized 1-on-1.');
        return;
      }
      var intlP = this.getIntlPricing(planType);

      // HARD STOP, never a fallback. The old line here read
      //   finalAmount = isIndian ? amount : (intlP ? intlP.amount : amount)
      //, so when the international price could not be resolved (data file
      // blocked by an ad-blocker, CDN hiccup, deploy skew) the INR figure was
      // sent with currency USD: a ₹1,499 plan became a US$1,499 charge, a
      // roughly 10x overcharge. If the price cannot be resolved, no order is
      // created.
      if (!isIndian && !intlP) {
        this.setPaying(false);
        this.showError('We could not load the price for your region. Please refresh the page and try again.');
        return;
      }

      const finalAmount = isIndian ? amount : intlP.amount;
      const currency = isIndian ? 'INR' : 'USD';

      // Create order
      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/api/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: finalAmount,
          currency: currency,
          productType: 'course',
          productId: this.courseSlug,
          productName: `${this.courseName} - ${this.getPlanName(planType)}`,
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          customerCountryCode: ccInfo.dial,
          customerCountryIso: ccInfo.iso,
          customerCountryName: ccInfo.name
        })
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to create order');
      }

      // Open Razorpay checkout
      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'Modern Age Coders',
        description: this.courseName,
        order_id: data.order.id,
        prefill: { name, email, contact: phone },
        theme: { color: '#B45309' },
        handler: async (response) => {
          await this.verifyPayment(response, data.order.orderId);
        },
        modal: {
          ondismiss: () => {
            this.setPaying(false);
          }
        }
      };

      const razorpay = new Razorpay(options);
      razorpay.on('payment.failed', (resp) => {
        this.setPaying(false);
        this.showError('The payment did not go through: ' + ((resp && resp.error && resp.error.description) || 'please try again') + '. No money has been taken; you can try again or use another method.');
      });
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      this.setPaying(false);
      this.showError('We could not start the payment (' + error.message + '). Please try again, or call +91 91233 66161.');
    }
  },

  // Verify payment
  verifyPayment: async function(razorpayResponse, orderId) {
    this.setPaying(true, 'Confirming your payment…');
    try {
      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/api/payment/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: razorpayResponse.razorpay_order_id,
          razorpay_payment_id: razorpayResponse.razorpay_payment_id,
          razorpay_signature: razorpayResponse.razorpay_signature
        })
      });

      const data = await response.json();

      if (data.success) {
        this.closeModal();
        this.redirectToWelcome(data.payment);
      } else {
        throw new Error(data.error || 'Verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      // The money may well have been taken, so keep the popup open with the
      // payment ID on screen rather than an alert that vanishes on OK.
      this.setPaying(true, 'Payment received');
      this.showError('We received your payment but could not confirm it automatically. Please call +91 91233 66161 with your payment ID: ' +
        (razorpayResponse && razorpayResponse.razorpay_payment_id ? razorpayResponse.razorpay_payment_id : orderId) + '.');
    }
  },

  // Redirect to the dedicated welcome / confirmation page after a successful payment.
  // The /welcome page asks the student to contact 9123366161 on WhatsApp or call
  // to confirm class timings and schedule.
  redirectToWelcome: function(payment) {
    try {
      var currency = (payment && payment.currency)
        ? payment.currency
        : ((window.__MAC_IS_INDIAN === false) ? 'USD' : 'INR');
      var planType = (payment && payment.planType) || null;
      var planName = planType ? this.getPlanName(planType) : '';

      // Remember this enrollment in localStorage so the student doesn't see
      // the "Enroll" buttons (and can't accidentally pay twice) when they
      // revisit this course page on the same browser.
      if (window.EnrollmentStatus) {
        window.EnrollmentStatus.mark({
          coursePath: window.location.pathname,
          courseName: this.courseName,
          plan: planName,
          orderId: payment && payment.orderId,
          amount: payment && payment.amount,
          currency: currency
        });
      }

      var params = new URLSearchParams();
      if (this.courseName) params.set('course', this.courseName);
      if (planName) params.set('plan', planName);
      if (payment && payment.orderId) params.set('orderId', payment.orderId);
      if (payment && payment.amount != null) params.set('amount', String(payment.amount));
      params.set('currency', currency);
      window.location.href = '/welcome?' + params.toString();
    } catch (e) {
      // Fallback: if the redirect fails for any reason, fall back to the modal so
      // the student still sees confirmation + the support number.
      console.error('Redirect to /welcome failed, falling back to modal:', e);
      this.showSuccessMessage(payment);
    }
  },

  // Show success message (fallback only; normally the page goes to /welcome)
  showSuccessMessage: function(payment) {
    const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
    const currencySymbol = isIndian ? '₹' : '$';
    const successHtml = `
      <div id="payment-success-modal" class="payment-modal-overlay mac-pay-overlay" role="dialog" aria-modal="true">
        <div class="mac-pay mac-pay-done">
          <div class="mac-pay-tick" aria-hidden="true">✓</div>
          <p class="mac-pay-eyebrow">Payment successful</p>
          <h2 class="mac-pay-title">Welcome to ${this.courseName}</h2>
          <div class="mac-pay-plan">
            <div class="mac-pay-plan-main">
              <span class="mac-pay-label">Order ID</span>
              <strong class="mac-pay-plan-name">${payment.orderId}</strong>
            </div>
            <div class="mac-pay-price"><b>${currencySymbol}${payment.amount}</b></div>
          </div>
          <p class="mac-pay-note">We have received your response. We will reach out to you within 48 hours. If you want to connect now, please contact 9123366161 (Shivam Sir).</p>
          <button type="button" class="mac-pay-btn" onclick="document.getElementById('payment-success-modal').remove();document.body.classList.remove('mac-pay-open')"><span>Continue</span></button>
        </div>
      </div>
    `;
    this.addModalStyles();
    document.body.insertAdjacentHTML('beforeend', successHtml);
    document.body.classList.add('mac-pay-open');
  },

  // Popup styles, in the editorial theme the course pages use (paper, ink,
  // amber, Fraunces/Inter). Each token has a literal fallback so the popup
  // still looks right on a page that does not load editorial-theme.css.
  addModalStyles: function() {
    if (document.getElementById('payment-modal-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'payment-modal-styles';
    styles.textContent = `
      body.mac-pay-open{overflow:hidden}
      body.mac-pay-open .misti-chat-btn,body.mac-pay-open .wa-float-btn{visibility:hidden!important;opacity:0!important;pointer-events:none!important}
      .mac-pay-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:16px;
        background:rgba(28,24,20,.58);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);animation:macPayFade .2s ease both}
      .mac-pay{--mp-ink:var(--ink,#1C1814);--mp-soft:var(--ink-soft,#3A332C);--mp-muted:var(--muted,#6B6259);--mp-line:var(--line,rgba(28,24,20,.12));
        --mp-paper:var(--paper,#FBF8F2);--mp-paper2:var(--paper-2,#F3EEE5);--mp-amber:var(--amber,#B45309);--mp-amber-deep:var(--amber-deep,#8F3F08);
        --mp-tint:var(--amber-tint,rgba(180,83,9,.08));--mp-display:var(--font-display,'Fraunces',Georgia,serif);
        --mp-body:var(--font-body,'Inter',system-ui,-apple-system,'Segoe UI',sans-serif);--mp-mono:var(--font-mono,'JetBrains Mono',ui-monospace,Consolas,monospace);
        position:relative;box-sizing:border-box;width:100%;max-width:460px;max-height:calc(100dvh - 32px);overflow-y:auto;
        background:var(--surface,#fff);color:var(--mp-ink);border:1px solid var(--mp-line);border-radius:20px;
        padding:30px 28px 22px;font-family:var(--mp-body);line-height:1.5;text-align:left;
        box-shadow:0 30px 70px -30px rgba(28,24,20,.6);animation:macPayUp .28s cubic-bezier(.2,.8,.2,1) both}
      .mac-pay *,.mac-pay *::before,.mac-pay *::after{box-sizing:border-box}
      .mac-pay-close{position:absolute;top:14px;right:14px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;
        border:1px solid var(--mp-line);border-radius:50%;background:var(--mp-paper2);color:var(--mp-muted);font-size:22px;line-height:1;cursor:pointer;
        font-family:var(--mp-body);transition:color .2s,border-color .2s}
      .mac-pay-close:hover{color:var(--mp-ink);border-color:var(--mp-ink)}
      .mac-pay-eyebrow{margin:0 0 6px;font-family:var(--mp-mono);font-size:11.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--mp-amber)}
      .mac-pay-title{margin:0 44px 18px 0;font-family:var(--mp-display);font-weight:600;font-size:23px;line-height:1.2;letter-spacing:-.015em;
        color:var(--mp-ink);-webkit-text-fill-color:var(--mp-ink);background:none;text-shadow:none;
        display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
      .mac-pay-plan{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:15px 16px;margin:0 0 20px;
        background:var(--mp-tint);border:1px solid rgba(180,83,9,.22);border-left:3px solid var(--mp-amber);border-radius:12px}
      .mac-pay-plan-main{display:flex;flex-direction:column;gap:2px;min-width:0}
      .mac-pay-label{font-family:var(--mp-mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--mp-muted)}
      .mac-pay-plan-name{font-family:var(--mp-display);font-weight:600;font-size:17px;color:var(--mp-ink);word-break:break-word}
      .mac-pay-plan-info{font-size:13px;color:var(--mp-muted);line-height:1.4}
      .mac-pay-price{text-align:right;white-space:nowrap;flex-shrink:0}
      .mac-pay-price b{display:block;font-family:var(--mp-display);font-weight:600;font-size:27px;line-height:1.05;color:var(--mp-amber-deep)}
      .mac-pay-price span{font-size:12.5px;color:var(--mp-muted)}
      .mac-pay-form{margin:0}
      .mac-pay-field{margin:0 0 14px}
      .mac-pay-field label{display:block;margin:0 0 6px;font-size:13.5px;font-weight:600;color:var(--mp-soft)}
      .mac-pay-field input{width:100%;min-height:46px;padding:11px 13px;font:inherit;font-size:16px;color:var(--mp-ink);background:#fff;
        border:1.5px solid rgba(28,24,20,.18);border-radius:10px;outline:none;transition:border-color .15s,box-shadow .15s;-webkit-appearance:none;appearance:none}
      .mac-pay-field input::placeholder{color:#a39a90}
      .mac-pay-field input:focus{border-color:var(--mp-amber);box-shadow:0 0 0 3px rgba(180,83,9,.16)}
      .mac-pay-field small{display:block;margin-top:5px;font-size:12px;color:var(--mp-muted)}
      .mac-pay-field .mac-cc-btn{color:var(--mp-ink);border:1.5px solid rgba(28,24,20,.18);border-right:0;border-radius:10px 0 0 10px;background:var(--mp-paper2)}
      .mac-pay-field .mac-cc-btn:hover,.mac-pay-field .mac-cc-btn:focus-visible{background:var(--mp-tint)}
      .mac-pay-err{margin:2px 0 14px;padding:10px 12px;border-radius:10px;font-size:13.5px;line-height:1.45;color:#8a2a22;background:#fdecea;border:1px solid rgba(176,71,60,.35)}
      .mac-pay-err[hidden]{display:none}
      .mac-pay-btn{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;min-height:52px;padding:14px 18px;border:1px solid var(--mp-amber);border-radius:12px;
        background:var(--mp-amber);color:#fff;font-family:var(--mp-body);font-size:16px;font-weight:700;cursor:pointer;
        box-shadow:0 12px 26px -14px rgba(180,83,9,.85);transition:background .2s,transform .15s,box-shadow .2s}
      .mac-pay-btn:hover{background:var(--mp-amber-deep);border-color:var(--mp-amber-deep);transform:translateY(-1px)}
      .mac-pay-btn:disabled{opacity:.75;cursor:progress;transform:none}
      .mac-pay-methods{margin:10px 0 0;text-align:center;font-family:var(--mp-mono);font-size:11.5px;letter-spacing:.04em;color:var(--mp-muted)}
      .mac-pay-foot{display:flex;flex-direction:column;align-items:center;gap:4px;margin-top:18px;padding-top:14px;border-top:1px solid var(--mp-line);
        text-align:center;font-size:12.5px;color:var(--mp-muted)}
      .mac-pay-secure{display:inline-flex;align-items:center;gap:6px;font-weight:600;color:var(--mp-soft)}
      .mac-pay-foot a{color:var(--mp-amber-deep);font-weight:600;text-decoration:none}
      .mac-pay-foot a:hover{text-decoration:underline}
      .mac-pay-done{text-align:center}
      .mac-pay-done .mac-pay-title{margin-right:0}
      .mac-pay-done .mac-pay-plan{text-align:left}
      .mac-pay-tick{width:62px;height:62px;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;border-radius:50%;
        background:rgba(31,138,85,.1);color:var(--green,#1F8A55);font-size:30px;font-weight:700}
      .mac-pay-note{margin:0 0 16px;font-size:14px;color:var(--mp-soft)}
      @media (max-width:560px){
        .mac-pay-overlay{padding:0;align-items:flex-end}
        .mac-pay{max-width:none;max-height:94dvh;border-radius:20px 20px 0 0;border-bottom:0;padding:24px 18px calc(18px + env(safe-area-inset-bottom));animation:macPaySheet .3s cubic-bezier(.2,.8,.2,1) both}
        .mac-pay-title{font-size:20px;margin-bottom:14px}
        .mac-pay-plan{padding:13px 14px;margin-bottom:16px}
        .mac-pay-price b{font-size:23px}
        .mac-pay-field{margin-bottom:12px}
      }
      @keyframes macPayFade{from{opacity:0}to{opacity:1}}
      @keyframes macPayUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
      @keyframes macPaySheet{from{transform:translateY(40px);opacity:.4}to{transform:none;opacity:1}}
      @media (prefers-reduced-motion:reduce){.mac-pay-overlay,.mac-pay{animation:none}}
    `;
    document.head.appendChild(styles);
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => CoursePayment.init());

// Export for manual use
window.CoursePayment = CoursePayment;
