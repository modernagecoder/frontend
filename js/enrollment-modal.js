/**
 * Professional Enrollment Modal
 * Modern Age Coders - Clean, Single Modal Solution
 * Inspired by Google, Stripe, and modern SaaS platforms
 */

const EnrollmentModal = {
  modal: null,
  courseName: '',
  courseSlug: '',

  init() {
    this.courseName = this.getCourseName();
    this.courseSlug = this.getCourseSlug();
    this.setupEnrollButtons();
  },

  getCourseName() {
    const titleEl = document.querySelector('.course-hero-title, h1');
    return titleEl ? titleEl.textContent.trim() : 'Course';
  },

  getCourseSlug() {
    const pathParts = window.location.pathname.split('/');
    const generatedIndex = pathParts.indexOf('generated');
    if (generatedIndex !== -1 && pathParts[generatedIndex + 1]) {
      return pathParts[generatedIndex + 1];
    }
    return 'course';
  },

  setupEnrollButtons() {
    const enrollButtons = document.querySelectorAll('.enroll-btn, [data-enroll-btn]');
    enrollButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });
  },

  open() {
    // Close any existing modals first
    this.closeAll();
    
    const modalHTML = `
      <div id="professionalEnrollmentModal" class="professional-modal-overlay">
        <div class="professional-modal-container">
          <button class="professional-modal-close" onclick="EnrollmentModal.close()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div class="professional-modal-header">
            <h2>Enroll in ${this.courseName}</h2>
            <p>Choose your preferred enrollment method</p>
          </div>
          
          <div class="professional-modal-body">
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
                  <h3>Pay Online</h3>
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
              
              <button class="option-button primary-button" onclick="EnrollmentModal.showPaymentForm()">
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
                <div class="option-icon">
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
    const overlay = document.getElementById('professionalEnrollmentModal');
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.close();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', this.handleEscape);
  },

  close() {
    const modal = document.getElementById('professionalEnrollmentModal');
    if (modal) {
      modal.remove();
    }
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this.handleEscape);
  },

  closeAll() {
    // Close all possible modals
    const modals = [
      'professionalEnrollmentModal',
      'enrollmentModal',
      'paymentChoiceModal',
      'razorpayFormModal',
      'payment-modal'
    ];
    
    modals.forEach(id => {
      const modal = document.getElementById(id);
      if (modal) modal.remove();
    });
    
    document.body.style.overflow = '';
  },

  handleEscape(e) {
    if (e.key === 'Escape') {
      EnrollmentModal.close();
    }
  },

  showPaymentForm() {
    // Use existing CoursePayment if available
    if (typeof CoursePayment !== 'undefined' && CoursePayment.showPaymentModal) {
      this.close();
      CoursePayment.showPaymentModal('group');
    } else {
      alert('Payment system is loading. Please try again in a moment.');
    }
  }
};

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => EnrollmentModal.init());
} else {
  EnrollmentModal.init();
}

// Export for global use
window.EnrollmentModal = EnrollmentModal;
