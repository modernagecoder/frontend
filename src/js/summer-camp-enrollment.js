/**
 * Summer Camp Enrollment Modal
 * Modern Age Coders - Summer Coding Camp Payment System
 */

/* -----------------------------------------------------------------------
 * EnrollmentStatus. See course-payment.js for the canonical copy.
 * This file is duplicated (with an idempotent guard) so summer-camp
 * pages, which don't load course-payment.js, still get the "already
 * enrolled" banner and disabled enroll buttons.
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
  function storageKey(path) { return KEY_PREFIX + normalizePath(path); }

  var EnrollmentStatus = {
    mark: function (record) {
      try {
        var path = normalizePath(record && record.coursePath);
        localStorage.setItem(storageKey(path), JSON.stringify({
          coursePath: path,
          courseName: (record && record.courseName) || '',
          plan: (record && record.plan) || '',
          orderId: (record && record.orderId) || '',
          amount: (record && record.amount != null) ? String(record.amount) : '',
          currency: (record && record.currency) || 'INR',
          enrolledAt: Date.now()
        }));
      } catch (e) {}
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
    clear: function (path) { try { localStorage.removeItem(storageKey(path)); } catch (e) {} },
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
      var nodes = document.querySelectorAll('.enroll-btn, [data-enroll-btn], [data-enroll-camp], .pricing-card .btn-premium-solid');
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

const SummerCampEnrollment = {
  courseName: 'Summer Coding Camp',

  // The camp fee comes from pricing/pricing.config.jsonc like every other
  // price. It used to be written here as a literal on both sides of an
  // isIndian() check, which meant this file was a third independent authority
  // on what a customer pays, the camps read neither of the other two tables.
  get coursePrice() { return this.getCoursePrice(); },

  // International pricing helpers
  isIndian: function() {
    return window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
  },
  campPrice: function() {
    var data = window.MAC_PRICING;
    if (!data || !data.plans.camps) return null;
    if (this.isIndian()) {
      return { amount: data.plans.camps.india.oneTime, currency: 'INR', symbol: '₹' };
    }
    // Flat model: everyone outside India pays the same USD camp fee.
    var amount = data.plans.camps.international.oneTime;
    if (amount === null || amount === undefined) return null;
    return { amount: amount, currency: 'USD', symbol: '$' };
  },
  getCoursePrice: function() {
    var p = this.campPrice();
    if (!p) { console.error('[SummerCamp] No camp price available; refusing to guess.'); return null; }
    return p.amount;
  },
  getCourseCurrency: function() {
    var p = this.campPrice();
    return p ? p.currency : (this.isIndian() ? 'INR' : 'USD');
  },
  getPriceDisplay: function() {
    var p = this.campPrice();
    if (!p) return '';
    return p.symbol + new Intl.NumberFormat(p.currency === 'INR' ? 'en-IN' : 'en-US', {
      minimumFractionDigits: Number.isInteger(p.amount) ? 0 : 2,
      maximumFractionDigits: Number.isInteger(p.amount) ? 0 : 2
    }).format(p.amount);
  },

  // API URL - auto-detect local vs production
  getApiUrl: function () {
    const isLocal = window.location.hostname === 'localhost'
      || window.location.hostname === '127.0.0.1'
      || window.location.hostname === ''
      || window.location.protocol === 'file:';
    return isLocal ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
  },

  init() {
    // Detect which track based on page
    const path = window.location.pathname;
    if (path.includes('kids')) {
      this.courseName = 'Summer Coding Camp - Kids Track (Ages 6-12)';
    } else if (path.includes('teens')) {
      this.courseName = 'Summer Coding Camp - Teens Track (Ages 12-17)';
    } else if (path.includes('adults')) {
      this.courseName = 'Summer Coding Camp - Adults Track (18+)';
    }

    this.setupEnrollButtons();
    this.addModalStyles();
  },

  setupEnrollButtons() {
    // Find all Enroll buttons in pricing cards
    const enrollButtons = document.querySelectorAll('.pricing-card .btn-premium-solid, [data-enroll-camp]');
    enrollButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openEnrollmentModal();
      });
    });
  },

  // Enroll Now opens the payment popup (camp-pay-popup.js) directly, for
  // Indian and international visitors alike. The old in-between chooser
  // ("Pay Online" or "WhatsApp Enrollment") was removed on 2 Oct 2026.
  openEnrollmentModal() {
    this.showPaymentForm();
  },

  showPaymentForm() {
    this.closeAll();
    // No price, no popup: never open a form that could charge a guessed amount.
    if (this.getCoursePrice() == null || !window.MACCampPay) {
      alert('We could not load the camp fee. Please refresh the page and try again, or call +91 91233 66161.');
      return;
    }
    window.MACCampPay.open({
      theme: 'summer',
      courseName: this.courseName,
      planName: 'Group camp · 16 live sessions',
      planInfo: 'Small batch, at most 8 learners',
      price: this.getPriceDisplay(),
      pricePer: 'one-time fee',
      isIndian: this.isIndian(),
      onSubmit: (v) => this.processPayment(v)
    });
  },

  async processPayment(v) {
    const pop = window.MACCampPay;
    const { name, email, phone, phoneEl } = v;

    const ccInfo = (window.MACCountryCode && window.MACCountryCode.read)
      ? window.MACCountryCode.read(phoneEl)
      : { dial: '+91', iso: 'IN', name: 'India' };
    const isIndia = ccInfo.iso === 'IN';

    const phoneRegex = isIndia ? /^[0-9]{10}$/ : /^[0-9]{7,15}$/;
    const phoneMsg = isIndia ? 'Please enter a valid 10-digit mobile number.' : 'Please enter a valid phone number (7 to 15 digits).';
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      pop.showError(phoneMsg);
      return;
    }

    try {
      pop.setPaying(true, 'Opening secure checkout…');

      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/api/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: this.getCoursePrice(),
          currency: this.getCourseCurrency(),
          productType: 'course',
          productId: 'summer-coding-camp-2026',
          productName: this.courseName,
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
        theme: { color: '#F4A261' },
        handler: async (response) => {
          await this.verifyPayment(response, data.order.orderId);
        },
        modal: {
          ondismiss: () => { pop.setPaying(false); }
        }
      };

      const razorpay = new Razorpay(options);
      razorpay.on('payment.failed', (resp) => {
        pop.setPaying(false);
        pop.showError('The payment did not go through: ' + ((resp && resp.error && resp.error.description) || 'please try again') + '. No money has been taken; you can try again or use another method.');
      });
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      pop.setPaying(false);
      pop.showError('We could not start the payment (' + error.message + '). Please try again, or call +91 91233 66161.');
    }
  },

  async verifyPayment(razorpayResponse, orderId) {
    const pop = window.MACCampPay;
    pop.setPaying(true, 'Confirming your payment…');
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
        pop.close();
        this.redirectToWelcome(data.payment);
      } else {
        throw new Error(data.error || 'Verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      // The money may have been taken: keep the popup open with the ID on screen.
      pop.setPaying(true, 'Payment received');
      pop.showError('We received your payment but could not confirm it automatically. Please call +91 91233 66161 with your payment ID: ' +
        (razorpayResponse && razorpayResponse.razorpay_payment_id ? razorpayResponse.razorpay_payment_id : orderId) + '.');
    }
  },

  // Redirect to the dedicated /welcome page so students see the "contact 9123366161
  // for class timings and schedule" instructions clearly on a full page.
  redirectToWelcome(payment) {
    try {
      const currency = (payment && payment.currency) || this.getCourseCurrency();

      // Remember this enrollment in localStorage so the student doesn't see
      // the "Enroll" buttons (and can't accidentally pay twice) when they
      // revisit this camp page on the same browser.
      if (window.EnrollmentStatus) {
        window.EnrollmentStatus.mark({
          coursePath: window.location.pathname,
          courseName: this.courseName,
          orderId: payment && payment.orderId,
          amount: payment && payment.amount,
          currency: currency
        });
      }

      const params = new URLSearchParams();
      if (this.courseName) params.set('course', this.courseName);
      if (payment && payment.orderId) params.set('orderId', payment.orderId);
      if (payment && payment.amount != null) params.set('amount', String(payment.amount));
      params.set('currency', currency);
      window.location.href = '/welcome?' + params.toString();
    } catch (e) {
      console.error('Redirect to /welcome failed, falling back to modal:', e);
      this.showSuccessMessage(payment);
    }
  },

  showSuccessMessage(payment) {
    window.MACCampPay.success({
      theme: 'summer',
      courseName: this.courseName,
      orderId: payment.orderId,
      amount: (this.isIndian() ? '₹' : '$') + payment.amount
    });
  },

  close() { this.closeAll(); },
  closePayment() { this.closeAll(); },
  closeAll() { if (window.MACCampPay) window.MACCampPay.close(); },

  // Styles now live in camp-pay-popup.js; kept so init() and any caller still work.
  addModalStyles() {}
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => SummerCampEnrollment.init());
} else {
  SummerCampEnrollment.init();
}

// Export for global use
window.SummerCampEnrollment = SummerCampEnrollment;
