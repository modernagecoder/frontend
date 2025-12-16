/**
 * Course Payment Integration
 * Handles Razorpay payments for course enrollments
 * Works with courses-config.json for pricing
 */

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
    const pathParts = window.location.pathname.split('/');
    const generatedIndex = pathParts.indexOf('generated');
    if (generatedIndex !== -1 && pathParts[generatedIndex + 1]) {
      return pathParts[generatedIndex + 1];
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

  // Setup payment buttons
  setupPaymentButtons: function() {
    // Find all enroll buttons
    const enrollButtons = document.querySelectorAll('.enroll-btn, [data-enroll-btn]');
    
    enrollButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Determine plan type from button context
        const parent = btn.closest('.enrollment-option');
        let planType = 'group';
        
        if (parent) {
          const title = parent.querySelector('h4');
          if (title) {
            const text = title.textContent.toLowerCase();
            if (text.includes('personal') || text.includes('mentorship')) {
              planType = 'personal';
            } else if (text.includes('lifetime')) {
              planType = 'lifetime';
            }
          }
        }
        
        // Check for data attribute
        if (btn.dataset.planType) {
          planType = btn.dataset.planType;
        }
        
        this.showPaymentModal(planType);
      });
    });
  },

  // Show payment modal
  showPaymentModal: function(planType) {
    const pricing = this.getPricing(planType);
    if (!pricing) {
      alert('Pricing not available. Please contact us.');
      return;
    }

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
            <span class="plan-price">${pricing.display}</span>
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
              <input type="tel" id="pay-phone" required placeholder="10-digit mobile number" maxlength="10">
            </div>
            <button type="submit" class="payment-submit-btn">
              Pay ${pricing.display}
            </button>
          </form>
          
          <div class="payment-secure-note">
            🔒 Secured by Razorpay
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
      'group': 'Group Classes (2/week)',
      'personal': 'Personal Mentorship (1-on-1)',
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
    const phone = document.getElementById('pay-phone').value.trim();
    
    // Validate
    if (!name || !email || !phone) {
      alert('Please fill all fields');
      return;
    }
    
    if (!/^[0-9]{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    
    try {
      // Show loading
      const submitBtn = document.querySelector('.payment-submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';
      
      // Create order
      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/api/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount,
          productType: 'course',
          productId: this.courseSlug,
          productName: `${this.courseName} - ${this.getPlanName(planType)}`,
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
        theme: { color: '#a855f7' },
        handler: async (response) => {
          await this.verifyPayment(response, data.order.orderId);
        },
        modal: {
          ondismiss: () => {
            submitBtn.disabled = false;
            submitBtn.textContent = `Pay ${this.getPricing(planType).display}`;
          }
        }
      };
      
      const razorpay = new Razorpay(options);
      razorpay.on('payment.failed', (resp) => {
        alert('Payment failed: ' + resp.error.description);
        submitBtn.disabled = false;
        submitBtn.textContent = `Pay ${this.getPricing(planType).display}`;
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
        this.showSuccessMessage(data.payment);
      } else {
        throw new Error(data.error || 'Verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('Payment verification failed. Please contact support with your payment ID.');
    }
  },

  // Show success message
  showSuccessMessage: function(payment) {
    const successHtml = `
      <div id="payment-success-modal" class="payment-modal-overlay">
        <div class="payment-modal-content success">
          <div class="success-icon">✓</div>
          <h2>Payment Successful!</h2>
          <p>Thank you for enrolling in ${this.courseName}</p>
          <div class="payment-details">
            <p><strong>Order ID:</strong> ${payment.orderId}</p>
            <p><strong>Amount:</strong> ₹${payment.amount}</p>
          </div>
          <p class="success-note">A confirmation email has been sent. Our team will contact you within 24 hours with class details.</p>
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
