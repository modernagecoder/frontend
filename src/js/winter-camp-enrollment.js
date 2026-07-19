/**
 * Winter Camp Enrollment Modal
 * Modern Age Coders — Winter Coding Camp 2026
 */

const WinterCampEnrollment = {
    courseName: 'Winter Coding Camp',
    coursePrice: 4999,

    isIndian() {
        return window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
    },
    getCoursePrice() {
        return this.isIndian() ? 4999 : 60;
    },
    getCourseCurrency() {
        return this.isIndian() ? 'INR' : 'USD';
    },
    getPriceDisplay() {
        return this.isIndian() ? '₹4,999' : '$60';
    },

    getApiUrl() {
        const isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname)
            || window.location.protocol === 'file:';
        return isLocal ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
    },

    init() {
        const path = window.location.pathname;
        if (path.includes('kids')) {
            this.courseName = 'Winter Coding Camp — Kids Track (Ages 6–11)';
        } else if (path.includes('teens')) {
            this.courseName = 'Winter Coding Camp — Teens Track (Ages 12–17)';
        } else if (path.includes('adults')) {
            this.courseName = 'Winter Coding Camp — Adults Track (18+)';
        }
        this.setupEnrollButtons();
        this.addModalStyles();
    },

    setupEnrollButtons() {
        document.querySelectorAll('.pricing-card .btn-ice-solid, [data-enroll-winter]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openEnrollmentModal();
            });
        });
    },

    openEnrollmentModal() {
        this.closeAll();

        const html = `
        <div id="winterCampEnrollModal" class="wc-modal-overlay">
          <div class="wc-modal-box">
            <button class="wc-modal-close" onclick="WinterCampEnrollment.close()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div class="wc-modal-header">
              <div class="wc-modal-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">
                  <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/>
                </svg>
              </div>
              <h2>Enroll in ${this.courseName}</h2>
              <p>Choose your preferred enrollment method</p>
            </div>

            <div class="wc-modal-body">
              <div class="wc-option-card">
                <div class="wc-option-header">
                  <div class="wc-option-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Pay Online — ${this.getPriceDisplay()}</h3>
                    <p>Instant enrollment with secure payment</p>
                  </div>
                </div>
                <ul class="wc-option-features">
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Instant confirmation
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Secure Razorpay checkout
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    ${this.isIndian() ? 'UPI, Cards, Net Banking' : 'Cards, International Payments'}
                  </li>
                </ul>
                <button class="wc-btn-primary" onclick="WinterCampEnrollment.showPaymentForm()">
                  Continue to Payment
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>

              <div class="wc-option-card wc-whatsapp-card">
                <div class="wc-option-header">
                  <div class="wc-option-icon wc-wa-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>WhatsApp Enrollment</h3>
                    <p>Personal assistance from our team</p>
                  </div>
                </div>
                <ul class="wc-option-features">
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Direct chat with Shivam Sir
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Flexible payment options
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    EMI available on request
                  </li>
                </ul>
                <a href="https://wa.me/919123366161?text=${encodeURIComponent('Hi, I want to enroll in ' + this.courseName + ' (' + this.getPriceDisplay() + '). Please share details.')}"
                   target="_blank" class="wc-btn-whatsapp">
                  Chat on WhatsApp
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>

              <div class="wc-support">
                <span>Questions? Call: </span>
                <a href="tel:+919123366161">9123366161</a>
                <span>·</span>
                <a href="mailto:connect@modernagecoders.com">Email Us</a>
              </div>
            </div>
          </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', html);
        document.body.style.overflow = 'hidden';

        const overlay = document.getElementById('winterCampEnrollModal');
        overlay.addEventListener('click', e => { if (e.target === overlay) this.close(); });
        document.addEventListener('keydown', this._escHandler);
    },

    showPaymentForm() {
        this.close();

        const html = `
        <div id="winterCampPayModal" class="wc-modal-overlay">
          <div class="wc-modal-box wc-payment-box">
            <button class="wc-modal-close" onclick="WinterCampEnrollment.closePayment()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div class="wc-modal-header">
              <h2>Complete Your Enrollment</h2>
              <p>${this.courseName}</p>
            </div>
            <div class="wc-plan-badge">
              <span>16 Sessions — Group Classes</span>
              <strong>${this.getPriceDisplay()}</strong>
            </div>
            <form id="winter-pay-form" class="wc-pay-form">
              <div class="wc-form-group">
                <label for="wc-name">Full Name *</label>
                <input type="text" id="wc-name" required placeholder="Enter your full name">
              </div>
              <div class="wc-form-group">
                <label for="wc-email">Email Address *</label>
                <input type="email" id="wc-email" required placeholder="Enter your email">
              </div>
              <div class="wc-form-group">
                <label for="wc-phone">Phone Number *</label>
                <input type="tel" id="wc-phone" required
                       placeholder="${this.isIndian() ? '10-digit mobile number' : 'Phone number'}"
                       maxlength="${this.isIndian() ? '10' : '15'}">
              </div>
              <button type="submit" id="wc-submit-btn" class="wc-submit-btn">
                Pay ${this.getPriceDisplay()}
              </button>
            </form>
            <p class="wc-secure-note">🔒 Secured by Razorpay</p>
          </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', html);
        document.body.style.overflow = 'hidden';

        document.getElementById('winter-pay-form').addEventListener('submit', e => {
            e.preventDefault();
            this.processPayment();
        });

        const overlay = document.getElementById('winterCampPayModal');
        overlay.addEventListener('click', e => { if (e.target === overlay) this.closePayment(); });
    },

    async processPayment() {
        const name  = document.getElementById('wc-name').value.trim();
        const email = document.getElementById('wc-email').value.trim();
        const phoneEl = document.getElementById('wc-phone');
        const phone = phoneEl.value.trim();

        if (!name || !email || !phone) { alert('Please fill all fields'); return; }

        const ccInfo = (window.MACCountryCode && window.MACCountryCode.read)
            ? window.MACCountryCode.read(phoneEl)
            : { dial: '+91', iso: 'IN', name: 'India' };
        const isIndia = ccInfo.iso === 'IN';

        const phoneRegex = isIndia ? /^[0-9]{10}$/ : /^[0-9]{7,15}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            alert(isIndia ? 'Please enter a valid 10-digit phone number' : 'Please enter a valid phone number');
            return;
        }

        const btn = document.getElementById('wc-submit-btn');
        try {
            btn.disabled = true;
            btn.textContent = 'Processing…';

            const res = await fetch(`${this.getApiUrl()}/api/payment/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: this.getCoursePrice(),
                    currency: this.getCourseCurrency(),
                    productType: 'course',
                    productId: 'winter-coding-camp-2026',
                    productName: this.courseName,
                    customerName: name,
                    customerEmail: email,
                    customerPhone: phone,
                    customerCountryCode: ccInfo.dial,
                    customerCountryIso: ccInfo.iso,
                    customerCountryName: ccInfo.name
                })
            });

            const data = await res.json();
            if (!data.success) throw new Error(data.error || 'Failed to create order');

            const rzp = new Razorpay({
                key: data.key,
                amount: data.order.amount,
                currency: data.order.currency,
                name: 'Modern Age Coders',
                description: this.courseName,
                order_id: data.order.id,
                prefill: { name, email, contact: phone },
                theme: { color: '#38BDF8' },
                handler: async (resp) => { await this.verifyPayment(resp, data.order.orderId); },
                modal: {
                    ondismiss: () => {
                        btn.disabled = false;
                        btn.textContent = 'Pay ' + WinterCampEnrollment.getPriceDisplay();
                    }
                }
            });
            rzp.on('payment.failed', resp => {
                alert('Payment failed: ' + resp.error.description);
                btn.disabled = false;
                btn.textContent = 'Try Again';
            });
            rzp.open();

        } catch (err) {
            console.error(err);
            alert('Payment error: ' + err.message);
            btn.disabled = false;
            btn.textContent = 'Try Again';
        }
    },

    async verifyPayment(razorpayResp, orderId) {
        try {
            const res = await fetch(`${this.getApiUrl()}/api/payment/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    razorpay_order_id:   razorpayResp.razorpay_order_id,
                    razorpay_payment_id: razorpayResp.razorpay_payment_id,
                    razorpay_signature:  razorpayResp.razorpay_signature
                })
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.error || 'Verification failed');
            this.closePayment();
            this.showSuccess(data.payment);
        } catch (err) {
            alert('Verification failed. Please contact support with your payment ID.');
        }
    },

    showSuccess(payment) {
        const html = `
        <div id="winterCampSuccess" class="wc-modal-overlay">
          <div class="wc-modal-box wc-success-box">
            <div class="wc-success-icon">✓</div>
            <h2>Enrollment Confirmed!</h2>
            <p>Welcome to <strong>${this.courseName}</strong></p>
            <div class="wc-payment-details">
              <p><strong>Order ID:</strong> ${payment.orderId}</p>
              <p><strong>Amount:</strong> ${this.isIndian() ? '₹' : '$'}${payment.amount}</p>
            </div>
            <p class="wc-success-note">We will reach out within 48 hours. To connect now, call Shivam Sir: 9123366161</p>
            <button onclick="document.getElementById('winterCampSuccess').remove(); document.body.style.overflow='';" class="wc-submit-btn">Continue</button>
          </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', html);
    },

    close() {
        const m = document.getElementById('winterCampEnrollModal');
        if (m) m.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', this._escHandler);
    },

    closePayment() {
        const m = document.getElementById('winterCampPayModal');
        if (m) m.remove();
        document.body.style.overflow = '';
    },

    closeAll() {
        ['winterCampEnrollModal','winterCampPayModal','winterCampSuccess'].forEach(id => {
            const m = document.getElementById(id);
            if (m) m.remove();
        });
        document.body.style.overflow = '';
    },

    _escHandler(e) {
        if (e.key === 'Escape') WinterCampEnrollment.closeAll();
    },

    addModalStyles() {
        if (document.getElementById('wc-modal-styles')) return;
        const s = document.createElement('style');
        s.id = 'wc-modal-styles';
        s.textContent = `
          .wc-modal-overlay{position:fixed;inset:0;background:rgba(1,8,18,0.9);backdrop-filter:blur(14px);display:flex;align-items:center;justify-content:center;z-index:100000;padding:20px;animation:wcFade .3s ease}
          .wc-modal-box{background:linear-gradient(160deg,#050F24 0%,#091A32 100%);border:1px solid rgba(56,189,248,0.22);border-radius:24px;max-width:520px;width:100%;max-height:90vh;overflow-y:auto;padding:36px;box-shadow:0 30px 90px rgba(0,0,0,0.7),0 0 80px rgba(56,189,248,0.08);position:relative;animation:wcSlide .4s ease}
          .wc-modal-close{position:absolute;top:16px;right:16px;width:40px;height:40px;background:rgba(255,255,255,0.05);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s;border:none}
          .wc-modal-close:hover{background:rgba(56,189,248,0.2);transform:rotate(90deg)}
          .wc-modal-header{text-align:center;margin-bottom:28px}
          .wc-modal-icon{width:68px;height:68px;background:linear-gradient(135deg,rgba(56,189,248,0.2),rgba(34,211,238,0.08));border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;color:#38BDF8}
          .wc-modal-header h2{color:#E8F4FF;font-size:1.45rem;font-weight:700;margin-bottom:8px;font-family:'Raleway',sans-serif}
          .wc-modal-header p{color:#94BDD1;font-size:.9rem}
          .wc-modal-body{display:flex;flex-direction:column;gap:16px}
          .wc-option-card{background:rgba(56,189,248,0.03);border:1px solid rgba(56,189,248,0.1);border-radius:16px;padding:22px;transition:all .3s}
          .wc-option-card:hover{border-color:rgba(56,189,248,0.28);background:rgba(56,189,248,0.05)}
          .wc-option-header{display:flex;align-items:flex-start;gap:14px;margin-bottom:14px}
          .wc-option-icon{width:48px;height:48px;background:rgba(56,189,248,0.12);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#38BDF8;flex-shrink:0}
          .wc-wa-icon{background:rgba(37,211,102,0.15);color:#25d366}
          .wc-option-header h3{color:#E8F4FF;font-size:1.05rem;font-weight:600;margin-bottom:4px;font-family:'Raleway',sans-serif}
          .wc-option-header p{color:#4A7A96;font-size:.82rem}
          .wc-option-features{list-style:none;padding:0;margin:0 0 16px}
          .wc-option-features li{display:flex;align-items:center;gap:9px;color:#94BDD1;font-size:.85rem;padding:5px 0}
          .wc-option-features li svg{color:#4ade80;flex-shrink:0}
          .wc-btn-primary{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;border:none;border-radius:12px;background:linear-gradient(135deg,#38BDF8,#22D3EE);color:#010812;font-size:.95rem;font-weight:700;cursor:pointer;transition:all .25s;font-family:'Raleway',sans-serif}
          .wc-btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 35px rgba(56,189,248,0.4)}
          .wc-btn-whatsapp{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;border-radius:12px;background:linear-gradient(135deg,#25d366,#128C7E);color:#fff;font-size:.95rem;font-weight:700;text-decoration:none;transition:all .25s;font-family:'Raleway',sans-serif}
          .wc-btn-whatsapp:hover{transform:translateY(-2px);box-shadow:0 10px 35px rgba(37,211,102,0.4)}
          .wc-support{display:flex;align-items:center;gap:10px;justify-content:center;font-size:.82rem;color:#4A7A96;flex-wrap:wrap}
          .wc-support a{color:#38BDF8;font-weight:600;text-decoration:none}
          .wc-support a:hover{text-decoration:underline}
          .wc-payment-box{max-width:450px}
          .wc-plan-badge{background:linear-gradient(135deg,rgba(56,189,248,0.1),rgba(56,189,248,0.03));border:1px solid rgba(56,189,248,0.25);border-radius:12px;padding:16px 20px;margin-bottom:26px;display:flex;justify-content:space-between;align-items:center}
          .wc-plan-badge span{color:#CBD5E1;font-weight:500;font-size:.9rem}
          .wc-plan-badge strong{color:#38BDF8;font-size:1.35rem;font-weight:700;font-family:'Raleway',sans-serif}
          .wc-pay-form .wc-form-group{margin-bottom:16px}
          .wc-pay-form label{display:block;color:#94BDD1;margin-bottom:7px;font-size:.875rem}
          .wc-pay-form input{width:100%;padding:14px 16px;background:rgba(0,0,0,0.3);border:1px solid rgba(56,189,248,0.15);border-radius:10px;color:#E8F4FF;font-size:.95rem;box-sizing:border-box;transition:border-color .25s;font-family:'Nunito',sans-serif}
          .wc-pay-form input:focus{outline:none;border-color:#38BDF8}
          .wc-pay-form input::placeholder{color:#4A7A96}
          .wc-submit-btn{width:100%;padding:16px;background:linear-gradient(135deg,#38BDF8,#22D3EE);border:none;border-radius:12px;color:#010812;font-size:1rem;font-weight:700;cursor:pointer;transition:all .25s;margin-top:8px;font-family:'Raleway',sans-serif}
          .wc-submit-btn:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(56,189,248,0.45)}
          .wc-submit-btn:disabled{opacity:.65;cursor:not-allowed;transform:none}
          .wc-secure-note{text-align:center;color:#4A7A96;font-size:.82rem;margin-top:16px}
          .wc-success-box{text-align:center;max-width:420px}
          .wc-success-icon{width:80px;height:80px;background:linear-gradient(135deg,#4ade80,#22c55e);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;margin:0 auto 20px;box-shadow:0 12px 44px rgba(74,222,128,0.35)}
          .wc-success-box h2{color:#E8F4FF;font-size:1.5rem;margin-bottom:8px;font-family:'Raleway',sans-serif}
          .wc-success-box>p{color:#94BDD1;margin-bottom:20px}
          .wc-payment-details{background:rgba(0,0,0,0.25);padding:16px;border-radius:10px;margin:16px 0;text-align:left}
          .wc-payment-details p{color:#CBD5E1;margin:8px 0;font-size:.9rem}
          .wc-success-note{color:#94BDD1;font-size:.875rem;margin:20px 0}
          @keyframes wcFade{from{opacity:0}to{opacity:1}}
          @keyframes wcSlide{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
          @media(max-width:600px){.wc-modal-box{padding:26px 20px}.wc-option-header{flex-direction:column;text-align:center}.wc-option-icon{margin:0 auto}.wc-support{flex-direction:column}}
        `;
        document.head.appendChild(s);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => WinterCampEnrollment.init());
} else {
    WinterCampEnrollment.init();
}

window.WinterCampEnrollment = WinterCampEnrollment;
