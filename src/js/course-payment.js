/**
 * Course Payment Integration
 * Handles Razorpay payments for course enrollments
 * Works with courses-config.json for pricing
 */

/* -----------------------------------------------------------------------
 * EnrollmentStatus — localStorage-backed memory of which courses the
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
      } catch (e) { /* localStorage disabled / quota — silently ignore */ }
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
      // Mark enroll buttons as "Already Enrolled" but keep them clickable —
      // a click takes the student to /welcome instead of opening payment.
      var selectors = '.enroll-btn, [data-enroll-btn], [data-enroll-camp], .pricing-card .btn-premium-solid';
      var nodes = document.querySelectorAll(selectors);
      for (var i = 0; i < nodes.length; i++) {
        var btn = nodes[i];
        if (btn.dataset.macEnrolledApplied === 'true') continue;
        btn.dataset.macEnrolledApplied = 'true';
        btn.dataset.macOriginalText = (btn.textContent || '').trim();
        btn.textContent = '✓ Already Enrolled — View Details';
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

  // Initialize payment system
  init: async function() {
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
    }
  },

  // Get course slug from URL
  getCourseSlug: function() {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const generatedIndex = pathParts.indexOf('generated');
    if (generatedIndex !== -1 && pathParts[generatedIndex + 1]) {
      return pathParts[generatedIndex + 1];
    }
    // Pretty URL /courses/<slug> — how Netlify actually serves every course
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

  // Intl prices from the single source of truth (international-pricing.js),
  // context-aware: the premium Codex + Claude Code pages (data-price-tier
  // ="agents") and maths pages (data-subject="maths") both charge $100 group /
  // $150 personal instead of the flat coding $40/$100. Falls back to the
  // flat coding prices if that script is absent on the page.
  getIntlPricing: function(planType) {
    var ip = window.InternationalPricing;
    var table = (ip && ip.isAgentsContext && ip.isAgentsContext() && ip.PRICES.internationalAgents)
      ? ip.PRICES.internationalAgents
      : (ip && ip.isMathsContext && ip.isMathsContext() && ip.PRICES.internationalMaths)
      ? ip.PRICES.internationalMaths
      : (ip && ip.PRICES ? ip.PRICES.international : null);
    var fallback = {
      group:    { amount: 40,  display: '$40',  period: '/month' },
      personal: { amount: 100, display: '$100', period: '/month' },
      lifetime: { amount: 599, display: '$599', period: '' }
    };
    var p = (table && table[planType]) || fallback[planType];
    if (!p) return null;
    return { amount: p.amount, display: p.display + (p.period || '') };
  },

  // Setup payment buttons - DISABLED: Now handled by enrollment-modal.js
  // The enrollment modal shows first, then calls CoursePayment.showPaymentModal()
  setupPaymentButtons: function() {
    // Do nothing - enrollment-modal.js handles the enroll button clicks
    // and calls CoursePayment.showPaymentModal() when user chooses "Pay Online"
    console.log('✅ CoursePayment ready - waiting for EnrollmentModal to call showPaymentModal()');
  },

  // Show payment modal
  showPaymentModal: function(planType) {
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
    const displayPricing = isIndian ? pricing : (intlP || pricing);
    const currencySymbol = isIndian ? '₹' : '$';
    const phoneMaxLength = isIndian ? '10' : '15';
    const phonePlaceholder = isIndian ? '10-digit mobile number' : 'Phone number';
    const phonePattern = isIndian ? '10-digit' : '7-15 digit';

    // Create modal HTML
    const modalHtml = `
      <div id="payment-modal" class="payment-modal-overlay">
        <div class="payment-modal-content">
          <button class="payment-modal-close" onclick="CoursePayment.closeModal()">&times;</button>
          
          <div class="payment-modal-header">
            <h2>Complete Your Enrollment</h2>
            <p>${this.courseName}</p>
          </div>
          
          <div class="payment-modal-plan">
            <span class="plan-name">${this.getPlanName(planType)}</span>
            <span class="plan-price">${displayPricing.display}</span>
          </div>
          
          <form id="payment-form" class="payment-form">
            <div class="form-group">
              <label for="pay-name">Full Name *</label>
              <input type="text" id="pay-name" required placeholder="Enter your full name">
            </div>
            <div class="form-group">
              <label for="pay-email">Email Address *</label>
              <input type="email" id="pay-email" required placeholder="Enter your email">
            </div>
            <div class="form-group">
              <label for="pay-phone">Phone Number *</label>
              <input type="tel" id="pay-phone" required placeholder="${phonePlaceholder}" maxlength="${phoneMaxLength}">
            </div>
            <button type="submit" class="payment-submit-btn">
              Pay ${displayPricing.display}
            </button>
          </form>
          
          <div class="payment-secure-note">
            🔒 Secured by Razorpay
          </div>
          
          <div class="whatsapp-help">
            <p>Need help with payment?</p>
            <a href="https://wa.me/919123366161?text=${encodeURIComponent('Hi! I need help with payment for ' + this.courseName + ' - ' + this.getPlanName(planType) + ' (' + displayPricing.display + ').')}" target="_blank" rel="noopener">
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Add styles if not already added
    this.addModalStyles();
    
    // Setup form submission
    document.getElementById('payment-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.processPayment(planType, pricing.amount);
    });
  },

  // Get plan display name
  getPlanName: function(planType) {
    const names = {
      'group': 'Group Classes (up to 10 students)',
      'miniBatch': 'Mini Batch (3-4 students)',
      'personal': 'Personalized 1-on-1 Mentorship',
      'lifetime': 'Lifetime Access'
    };
    return names[planType] || 'Course Enrollment';
  },

  // Close modal
  closeModal: function() {
    const modal = document.getElementById('payment-modal');
    if (modal) modal.remove();
  },

  // Process payment
  processPayment: async function(planType, amount) {
    const name = document.getElementById('pay-name').value.trim();
    const email = document.getElementById('pay-email').value.trim();
    const phoneEl = document.getElementById('pay-phone');
    const phone = phoneEl.value.trim();

    // Validate
    if (!name || !email || !phone) {
      alert('Please fill all fields');
      return;
    }

    const ccInfo = (window.MACCountryCode && window.MACCountryCode.read)
      ? window.MACCountryCode.read(phoneEl)
      : { dial: '+91', iso: 'IN', name: 'India' };

    // Validate phone against the chosen country.
    const isIndia = ccInfo.iso === 'IN';
    const phoneRegex = isIndia ? /^[0-9]{10}$/ : /^[0-9]{7,15}$/;
    const phoneMsg = isIndia ? 'Please enter a valid 10-digit phone number' : 'Please enter a valid phone number (7-15 digits)';

    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      alert(phoneMsg);
      return;
    }
    
    try {
      // Show loading
      const submitBtn = document.querySelector('.payment-submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';
      
      // Determine currency and amount for international users.
      // Mini Batch has no USD price — it's India-only; foreign users are blocked earlier.
      // Prices come from getIntlPricing (context-aware, single source of truth).
      const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : (ccInfo.iso === 'IN');
      // Re-guard here because this isIndian can differ from the modal-open one
      // (country-code selection). Without it, a null intl price would fall back
      // to the INR amount while currency says USD — a 90x overcharge.
      if (!isIndian && planType === 'miniBatch') {
        alert('The Mini Batch plan is available only in India. Please choose Group Classes or Personalized 1-on-1.');
        const sb = document.querySelector('.payment-submit-btn');
        if (sb) { sb.disabled = false; sb.textContent = 'Try Again'; }
        return;
      }
      var intlP = this.getIntlPricing(planType);
      const finalAmount = isIndian ? amount : (intlP ? intlP.amount : amount);
      const currency = isIndian ? 'INR' : 'USD';
      const buttonPriceText = isIndian ? this.getPricing(planType).display : (intlP ? intlP.display : this.getPricing(planType).display);
      
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
        theme: { color: '#a855f7' },
        handler: async (response) => {
          await this.verifyPayment(response, data.order.orderId);
        },
        modal: {
          ondismiss: () => {
            submitBtn.disabled = false;
            submitBtn.textContent = `Pay ${buttonPriceText}`;
          }
        }
      };
      
      const razorpay = new Razorpay(options);
      razorpay.on('payment.failed', (resp) => {
        alert('Payment failed: ' + resp.error.description);
        submitBtn.disabled = false;
        submitBtn.textContent = `Pay ${buttonPriceText}`;
      });
      razorpay.open();
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed: ' + error.message);
      const submitBtn = document.querySelector('.payment-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Try Again';
      }
    }
  },

  // Verify payment
  verifyPayment: async function(razorpayResponse, orderId) {
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
      alert('Payment verification failed. Please contact support with your payment ID.');
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

  // Show success message
  showSuccessMessage: function(payment) {
    const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
    const currencySymbol = isIndian ? '₹' : '$';
    const successHtml = `
      <div id="payment-success-modal" class="payment-modal-overlay">
        <div class="payment-modal-content success">
          <div class="success-icon">✓</div>
          <h2>Payment Successful!</h2>
          <p>Thank you for enrolling in ${this.courseName}</p>
          <div class="payment-details">
            <p><strong>Order ID:</strong> ${payment.orderId}</p>
            <p><strong>Amount:</strong> ${currencySymbol}${payment.amount}</p>
          </div>
          <p class="success-note">We have received your response. We will reach out to you within 48 hours. If you want to connect now, please contact 9123366161 (Shivam Sir).</p>
          <button onclick="document.getElementById('payment-success-modal').remove()" class="payment-submit-btn">Continue</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', successHtml);
  },

  // Add modal styles
  addModalStyles: function() {
    if (document.getElementById('payment-modal-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'payment-modal-styles';
    styles.textContent = `
      .payment-modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
        display: flex; align-items: center; justify-content: center;
        z-index: 100000; animation: fadeIn 0.3s ease;
      }
      .payment-modal-content {
        background: linear-gradient(135deg, #10101c, #181828);
        border: 1px solid rgba(255,255,255,0.1); border-radius: 1.5rem;
        max-width: 450px; width: 90%; padding: 2rem;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        position: relative; animation: slideUp 0.4s ease;
      }

      .payment-modal-content.success { text-align: center; }
      .payment-modal-close {
        position: absolute; top: 1rem; right: 1rem;
        width: 36px; height: 36px; border: none;
        background: rgba(255,255,255,0.1); color: #fff;
        font-size: 1.5rem; border-radius: 50%; cursor: pointer;
      }
      .payment-modal-close:hover { background: rgba(255,255,255,0.2); }
      .payment-modal-header { text-align: center; margin-bottom: 1.5rem; }
      .payment-modal-header h2 { color: #f8fafc; font-size: 1.5rem; margin-bottom: 0.5rem; }
      .payment-modal-header p { color: #94a3b8; font-size: 0.95rem; }
      .payment-modal-plan {
        background: rgba(168,85,247,0.1); border: 1px solid rgba(168,85,247,0.3);
        border-radius: 0.75rem; padding: 1rem; margin-bottom: 1.5rem;
        display: flex; justify-content: space-between; align-items: center;
      }
      .plan-name { color: #cbd5e1; font-weight: 500; }
      .plan-price { color: #a855f7; font-size: 1.25rem; font-weight: 700; }
      .payment-form .form-group { margin-bottom: 1rem; }
      .payment-form label { display: block; color: #94a3b8; margin-bottom: 0.5rem; font-size: 0.9rem; }
      .payment-form input {
        width: 100%; padding: 0.75rem 1rem; background: rgba(0,0,0,0.3);
        border: 1px solid rgba(255,255,255,0.1); border-radius: 0.5rem;
        color: #f8fafc; font-size: 1rem; box-sizing: border-box;
      }
      .payment-form input:focus { outline: none; border-color: #a855f7; }
      .payment-submit-btn {
        width: 100%; padding: 1rem; background: linear-gradient(135deg, #a855f7, #4ecdc4);
        border: none; border-radius: 0.75rem; color: #fff;
        font-size: 1.1rem; font-weight: 600; cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .payment-submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(168,85,247,0.4); }
      .payment-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
      .payment-secure-note { text-align: center; color: #64748b; font-size: 0.85rem; margin-top: 1rem; }
      .success-icon {
        width: 80px; height: 80px; background: #4CAF50; color: #fff;
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
        font-size: 2.5rem; margin: 0 auto 1.5rem;
      }
      .payment-details { background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 0.5rem; margin: 1rem 0; text-align: left; }
      .payment-details p { color: #cbd5e1; margin: 0.5rem 0; }
      .success-note { color: #94a3b8; font-size: 0.9rem; margin: 1rem 0; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(styles);
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => CoursePayment.init());

// Export for manual use
window.CoursePayment = CoursePayment;
