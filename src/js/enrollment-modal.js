/**
 * Enroll Now buttons on course pages.
 * Records which plan card was clicked and opens the payment popup in
 * course-payment.js directly.
 */

const EnrollmentModal = {
  modal: null,
  courseName: '',
  courseSlug: '',
  selectedPlan: 'group', // remembers which plan card the user clicked

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
        // Capture the plan type from the clicked button (group / miniBatch / personal).
        // Falls back to reading the card's heading, then defaults to 'group' for safety.
        const explicit = btn.getAttribute('data-plan-type');
        if (explicit) {
          this.selectedPlan = explicit;
        } else {
          const card = btn.closest('.enrollment-option, .price-card');
          const heading = card ? card.querySelector('h4, .price-label, .plan-title') : null;
          const text = heading ? heading.textContent.toLowerCase() : '';
          if (text.includes('mini batch')) this.selectedPlan = 'miniBatch';
          else if (text.includes('1-on-1') || text.includes('personal') || text.includes('private') || text.includes('mentor')) this.selectedPlan = 'personal';
          // 'lifetime' is not mapped: that plan was retired on 2026-07-31, and
          // any card still saying so falls through to group rather than
          // selecting a plan that can no longer be priced or charged.
          else this.selectedPlan = 'group';
        }
        this.open();
      });
    });
  },

  // Enroll Now goes straight to the payment popup (CoursePayment), for
  // Indian and international visitors alike. The old in-between chooser
  // ("Pay Online" or "WhatsApp Enrollment") was removed on 2 Oct 2026: it
  // added a step before payment and did not match the course pages.
  open() {
    this.closeAll();
    this.showPaymentForm();
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
    if (typeof CoursePayment !== 'undefined' && CoursePayment.showPaymentModal) {
      // Route to the plan the user actually clicked (group / miniBatch / personal).
      CoursePayment.showPaymentModal(this.selectedPlan || 'group');
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
