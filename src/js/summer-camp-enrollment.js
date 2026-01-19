/**
 * Summer Camp Enrollment Modal
 * Modern Age Coders - Summer Coding Camp Payment System
 */

const SummerCampEnrollment = {
    courseName: 'Summer Coding Camp',
    coursePrice: 4999,

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

    openEnrollmentModal() {
        // Close any existing modals
        this.closeAll();

        const modalHTML = `
      <div id="summerCampEnrollModal" class="summer-camp-modal-overlay">
        <div class="summer-camp-modal-container">
          <button class="summer-camp-modal-close" onclick="SummerCampEnrollment.close()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div class="summer-camp-modal-header">
            <div class="summer-camp-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              </svg>
            </div>
            <h2>Enroll in ${this.courseName}</h2>
            <p>Choose your preferred enrollment method</p>
          </div>
          
          <div class="summer-camp-modal-body">
            <!-- Online Payment Option -->
            <div class="enrollment-option-card online-option">
              <div class="option-header">
                <div class="option-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <h3>Pay Online - ₹4,999</h3>
                  <p>Instant enrollment with secure payment</p>
                </div>
              </div>
              
              <ul class="option-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Instant confirmation
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Secure Razorpay checkout
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  UPI, Cards, Net Banking
                </li>
              </ul>
              
              <button class="option-button primary-button" onclick="SummerCampEnrollment.showPaymentForm()">
                Continue to Payment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            
            <!-- WhatsApp Option -->
            <div class="enrollment-option-card whatsapp-option">
              <div class="option-header">
                <div class="option-icon whatsapp-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3>WhatsApp Enrollment</h3>
                  <p>Get personal assistance from our team</p>
                </div>
              </div>
              
              <ul class="option-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Direct chat with Shivam Sir
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Flexible payment options
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  EMI available on request
                </li>
              </ul>
              
              <a href="https://wa.me/919123366161?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(this.courseName)}.%20Please%20share%20details." 
                 target="_blank" 
                 class="option-button whatsapp-button">
                Chat on WhatsApp
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
            
            <!-- Support Section -->
            <div class="support-section">
              <div class="support-text">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Need help choosing?</span>
              </div>
              <div class="support-links">
                <a href="tel:+919123366161" class="support-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  9123366161
                </a>
                <a href="mailto:connect@modernagecoders.com" class="support-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';

        // Close on overlay click
        const overlay = document.getElementById('summerCampEnrollModal');
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.close();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', this.handleEscape);
    },

    showPaymentForm() {
        this.close();

        const formHTML = `
      <div id="summerCampPaymentModal" class="summer-camp-modal-overlay">
        <div class="summer-camp-modal-container payment-form-container">
          <button class="summer-camp-modal-close" onclick="SummerCampEnrollment.closePayment()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div class="summer-camp-modal-header">
            <h2>Complete Your Enrollment</h2>
            <p>${this.courseName}</p>
          </div>
          
          <div class="payment-plan-box">
            <span class="plan-name">16 Sessions - Group Classes</span>
            <span class="plan-price">₹4,999</span>
          </div>
          
          <form id="summer-camp-payment-form" class="payment-form">
            <div class="form-group">
              <label for="sc-name">Full Name *</label>
              <input type="text" id="sc-name" required placeholder="Enter your full name">
            </div>
            <div class="form-group">
              <label for="sc-email">Email Address *</label>
              <input type="email" id="sc-email" required placeholder="Enter your email">
            </div>
            <div class="form-group">
              <label for="sc-phone">Phone Number *</label>
              <input type="tel" id="sc-phone" required placeholder="10-digit mobile number" maxlength="10">
            </div>
            <button type="submit" class="payment-submit-btn" id="sc-submit-btn">
              Pay ₹4,999
            </button>
          </form>
          
          <div class="payment-secure-note">
            🔒 Secured by Razorpay
          </div>
        </div>
      </div>
    `;

        document.body.insertAdjacentHTML('beforeend', formHTML);
        document.body.style.overflow = 'hidden';

        // Setup form submission
        document.getElementById('summer-camp-payment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.processPayment();
        });

        // Close on overlay click
        const overlay = document.getElementById('summerCampPaymentModal');
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closePayment();
            }
        });
    },

    async processPayment() {
        const name = document.getElementById('sc-name').value.trim();
        const email = document.getElementById('sc-email').value.trim();
        const phone = document.getElementById('sc-phone').value.trim();

        // Validate
        if (!name || !email || !phone) {
            alert('Please fill all fields');
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        const submitBtn = document.getElementById('sc-submit-btn');

        try {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';

            const apiUrl = this.getApiUrl();
            const response = await fetch(`${apiUrl}/api/payment/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: this.coursePrice,
                    productType: 'summer-camp',
                    productId: 'summer-coding-camp-2026',
                    productName: this.courseName,
                    customerName: name,
                    customerEmail: email,
                    customerPhone: phone
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
                theme: { color: '#ffab4c' },
                handler: async (response) => {
                    await this.verifyPayment(response, data.order.orderId);
                },
                modal: {
                    ondismiss: () => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Pay ₹4,999';
                    }
                }
            };

            const razorpay = new Razorpay(options);
            razorpay.on('payment.failed', (resp) => {
                alert('Payment failed: ' + resp.error.description);
                submitBtn.disabled = false;
                submitBtn.textContent = 'Pay ₹4,999';
            });
            razorpay.open();

        } catch (error) {
            console.error('Payment error:', error);
            alert('Payment failed: ' + error.message);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Try Again';
        }
    },

    async verifyPayment(razorpayResponse, orderId) {
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
                this.closePayment();
                this.showSuccessMessage(data.payment);
            } else {
                throw new Error(data.error || 'Verification failed');
            }
        } catch (error) {
            console.error('Verification error:', error);
            alert('Payment verification failed. Please contact support with your payment ID.');
        }
    },

    showSuccessMessage(payment) {
        const successHtml = `
      <div id="summerCampSuccessModal" class="summer-camp-modal-overlay">
        <div class="summer-camp-modal-container success-container">
          <div class="success-icon">✓</div>
          <h2>Payment Successful!</h2>
          <p>Thank you for enrolling in ${this.courseName}</p>
          <div class="payment-details">
            <p><strong>Order ID:</strong> ${payment.orderId}</p>
            <p><strong>Amount:</strong> ₹${payment.amount}</p>
          </div>
          <p class="success-note">A confirmation email has been sent. Our team will contact you within 24 hours with class details.</p>
          <button onclick="document.getElementById('summerCampSuccessModal').remove(); document.body.style.overflow = '';" class="payment-submit-btn">Continue</button>
        </div>
      </div>
    `;
        document.body.insertAdjacentHTML('beforeend', successHtml);
    },

    close() {
        const modal = document.getElementById('summerCampEnrollModal');
        if (modal) modal.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', this.handleEscape);
    },

    closePayment() {
        const modal = document.getElementById('summerCampPaymentModal');
        if (modal) modal.remove();
        document.body.style.overflow = '';
    },

    closeAll() {
        ['summerCampEnrollModal', 'summerCampPaymentModal', 'summerCampSuccessModal'].forEach(id => {
            const modal = document.getElementById(id);
            if (modal) modal.remove();
        });
        document.body.style.overflow = '';
    },

    handleEscape(e) {
        if (e.key === 'Escape') {
            SummerCampEnrollment.closeAll();
        }
    },

    addModalStyles() {
        if (document.getElementById('summer-camp-modal-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'summer-camp-modal-styles';
        styles.textContent = `
      .summer-camp-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        backdrop-filter: blur(12px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100000;
        animation: scFadeIn 0.3s ease;
        padding: 20px;
        box-sizing: border-box;
      }
      
      .summer-camp-modal-container {
        background: linear-gradient(135deg, #0a0a12 0%, #12121f 100%);
        border: 1px solid rgba(255,171,76,0.2);
        border-radius: 24px;
        max-width: 520px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        padding: 32px;
        box-shadow: 0 25px 80px rgba(0,0,0,0.6), 0 0 60px rgba(255,171,76,0.1);
        position: relative;
        animation: scSlideUp 0.4s ease;
      }
      
      .summer-camp-modal-close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 40px;
        height: 40px;
        border: none;
        background: rgba(255,255,255,0.05);
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }
      
      .summer-camp-modal-close:hover {
        background: rgba(255,171,76,0.2);
        transform: rotate(90deg);
      }
      
      .summer-camp-modal-header {
        text-align: center;
        margin-bottom: 28px;
      }
      
      .summer-camp-icon {
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, rgba(255,171,76,0.2), rgba(255,217,61,0.1));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
        color: #ffab4c;
      }
      
      .summer-camp-modal-header h2 {
        color: #f8fafc;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 8px;
      }
      
      .summer-camp-modal-header p {
        color: #94a3b8;
        font-size: 0.95rem;
      }
      
      .summer-camp-modal-body {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      
      .enrollment-option-card {
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 16px;
        padding: 20px;
        transition: all 0.3s ease;
      }
      
      .enrollment-option-card:hover {
        border-color: rgba(255,171,76,0.3);
        background: rgba(255,171,76,0.03);
      }
      
      .option-header {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        margin-bottom: 14px;
      }
      
      .option-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, rgba(255,171,76,0.15), rgba(255,171,76,0.05));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffab4c;
        flex-shrink: 0;
      }
      
      .option-icon.whatsapp-icon {
        background: linear-gradient(135deg, rgba(37,211,102,0.2), rgba(37,211,102,0.05));
        color: #25d366;
      }
      
      .option-header h3 {
        color: #f8fafc;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 4px;
      }
      
      .option-header p {
        color: #64748b;
        font-size: 0.85rem;
      }
      
      .option-features {
        list-style: none;
        padding: 0;
        margin: 0 0 16px 0;
      }
      
      .option-features li {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #94a3b8;
        font-size: 0.9rem;
        padding: 6px 0;
      }
      
      .option-features li svg {
        color: #4ade80;
        flex-shrink: 0;
      }
      
      .option-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        padding: 14px 20px;
        border: none;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      
      .primary-button {
        background: linear-gradient(135deg, #ffab4c, #ffd93d);
        color: #000;
      }
      
      .primary-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(255,171,76,0.4);
      }
      
      .whatsapp-button {
        background: linear-gradient(135deg, #25d366, #128C7E);
        color: #fff;
      }
      
      .whatsapp-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(37,211,102,0.4);
      }
      
      .support-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 12px;
        padding: 16px;
        background: rgba(255,255,255,0.02);
        border-radius: 12px;
        margin-top: 8px;
      }
      
      .support-text {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #64748b;
        font-size: 0.9rem;
      }
      
      .support-links {
        display: flex;
        gap: 16px;
      }
      
      .support-link {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #94a3b8;
        text-decoration: none;
        font-size: 0.85rem;
        transition: color 0.2s;
      }
      
      .support-link:hover {
        color: #ffab4c;
      }
      
      /* Payment Form Styles */
      .payment-form-container {
        max-width: 450px;
      }
      
      .payment-plan-box {
        background: linear-gradient(135deg, rgba(255,171,76,0.1), rgba(255,171,76,0.02));
        border: 1px solid rgba(255,171,76,0.25);
        border-radius: 12px;
        padding: 16px 20px;
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .plan-name {
        color: #cbd5e1;
        font-weight: 500;
      }
      
      .plan-price {
        color: #ffab4c;
        font-size: 1.35rem;
        font-weight: 700;
      }
      
      .payment-form .form-group {
        margin-bottom: 16px;
      }
      
      .payment-form label {
        display: block;
        color: #94a3b8;
        margin-bottom: 8px;
        font-size: 0.9rem;
      }
      
      .payment-form input {
        width: 100%;
        padding: 14px 16px;
        background: rgba(0,0,0,0.3);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 10px;
        color: #f8fafc;
        font-size: 1rem;
        box-sizing: border-box;
        transition: border-color 0.3s;
      }
      
      .payment-form input:focus {
        outline: none;
        border-color: #ffab4c;
      }
      
      .payment-form input::placeholder {
        color: #475569;
      }
      
      .payment-submit-btn {
        width: 100%;
        padding: 16px;
        background: linear-gradient(135deg, #ffab4c, #ffd93d);
        border: none;
        border-radius: 12px;
        color: #000;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 8px;
      }
      
      .payment-submit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 35px rgba(255,171,76,0.4);
      }
      
      .payment-submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
      }
      
      .payment-secure-note {
        text-align: center;
        color: #64748b;
        font-size: 0.85rem;
        margin-top: 16px;
      }
      
      /* Success Modal */
      .success-container {
        text-align: center;
        max-width: 420px;
      }
      
      .success-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #4ade80, #22c55e);
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        margin: 0 auto 20px;
        box-shadow: 0 10px 40px rgba(74,222,128,0.3);
      }
      
      .success-container h2 {
        color: #f8fafc;
        font-size: 1.5rem;
        margin-bottom: 8px;
      }
      
      .success-container > p {
        color: #94a3b8;
        margin-bottom: 20px;
      }
      
      .payment-details {
        background: rgba(0,0,0,0.2);
        padding: 16px;
        border-radius: 10px;
        margin: 16px 0;
        text-align: left;
      }
      
      .payment-details p {
        color: #cbd5e1;
        margin: 8px 0;
        font-size: 0.95rem;
      }
      
      .success-note {
        color: #94a3b8;
        font-size: 0.9rem;
        margin: 20px 0;
      }
      
      @keyframes scFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes scSlideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @media (max-width: 600px) {
        .summer-camp-modal-container {
          padding: 24px 20px;
          margin: 10px;
          max-height: 85vh;
        }
        
        .option-header {
          flex-direction: column;
          text-align: center;
        }
        
        .option-icon {
          margin: 0 auto;
        }
        
        .support-section {
          flex-direction: column;
          text-align: center;
        }
        
        .support-links {
          justify-content: center;
        }
      }
    `;
        document.head.appendChild(styles);
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SummerCampEnrollment.init());
} else {
    SummerCampEnrollment.init();
}

// Export for global use
window.SummerCampEnrollment = SummerCampEnrollment;
