/**
 * Script to update enrollment modal in all generated course pages
 * Adds both "Pay Online" and "Pay via WhatsApp" options
 * Run with: node scripts/update-enrollment-modal.js
 */

const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');

// New modal HTML
const NEW_MODAL_HTML = `    <!-- Enhanced Enrollment Modal with Payment Options -->
    <div id="enrollmentModal" class="enrollment-modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close" aria-label="Close modal">&times;</button>
            
            <div class="modal-header">
                <div class="modal-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </div>
                <h2>Enroll in This Course</h2>
                <p id="modal-course-name">Choose your preferred payment method</p>
            </div>
            
            <div class="modal-body">
                <div class="payment-options-grid">
                    <div class="payment-option-card" id="pay-online-card">
                        <div class="payment-option-icon online">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                        </div>
                        <h3>Pay Online</h3>
                        <p>Instant payment via Card, UPI, Net Banking</p>
                        <ul class="payment-features">
                            <li>✓ Instant confirmation</li>
                            <li>✓ Secure Razorpay checkout</li>
                            <li>✓ All payment methods accepted</li>
                        </ul>
                        <button class="payment-option-btn online-btn" onclick="CoursePayment.showPaymentModal('group')">
                            Pay Now
                        </button>
                    </div>
`;

function updateCoursePage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already has new payment options
    if (content.includes('payment-options-grid')) {
      console.log(`⏭️  Already updated: ${path.basename(path.dirname(filePath))}`);
      return 'skipped';
    }
    
    // Find old modal and replace
    const oldModalStart = content.indexOf('<div id="enrollmentModal"');
    if (oldModalStart === -1) {
      console.log(`⚠️  No modal found: ${path.basename(path.dirname(filePath))}`);
      return 'no-modal';
    }
    
    // Find the end of the old modal (closing </div> for enrollmentModal)
    let depth = 0;
    let oldModalEnd = oldModalStart;
    let inTag = false;
    
    for (let i = oldModalStart; i < content.length; i++) {
      if (content[i] === '<') inTag = true;
      if (content[i] === '>') {
        inTag = false;
        const tag = content.substring(content.lastIndexOf('<', i), i + 1);
        if (tag.includes('<div')) depth++;
        if (tag.includes('</div>')) {
          depth--;
          if (depth === 0) {
            oldModalEnd = i + 1;
            break;
          }
        }
      }
    }
    
    // New complete modal HTML
    const newModal = `    <!-- Enhanced Enrollment Modal with Payment Options -->
    <div id="enrollmentModal" class="enrollment-modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <div class="modal-header">
                <div class="modal-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </div>
                <h2>Enroll in This Course</h2>
                <p>Choose your preferred payment method</p>
            </div>
            <div class="modal-body">
                <div class="payment-options-grid">
                    <div class="payment-option-card">
                        <div class="payment-option-icon online">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                        </div>
                        <h3>Pay Online</h3>
                        <p>Instant payment via Card, UPI, Net Banking</p>
                        <ul class="payment-features">
                            <li>✓ Instant confirmation</li>
                            <li>✓ Secure Razorpay checkout</li>
                            <li>✓ All payment methods</li>
                        </ul>
                        <button class="payment-option-btn online-btn" onclick="CoursePayment.showPaymentModal('group')">Pay Now</button>
                    </div>
                    <div class="payment-option-card">
                        <div class="payment-option-icon whatsapp">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </div>
                        <h3>Pay via WhatsApp</h3>
                        <p>Direct payment to Modern Age Coders</p>
                        <ul class="payment-features">
                            <li>✓ Personal assistance</li>
                            <li>✓ Flexible payment options</li>
                            <li>✓ EMI available on request</li>
                        </ul>
                        <a href="https://wa.me/919123366161?text=Hi%2C%20I%20want%20to%20enroll%20in%20a%20course.%20Please%20share%20payment%20details." target="_blank" class="payment-option-btn whatsapp-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:8px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            WhatsApp Us
                        </a>
                    </div>
                </div>
                <div class="contact-info-box">
                    <div class="contact-info-header">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>Need Help? Contact Shivam Sir</span>
                    </div>
                    <div class="contact-info-links">
                        <a href="tel:+919123366161" class="contact-quick-link">📞 9123366161</a>
                        <a href="mailto:connect@modernagecoders.com" class="contact-quick-link">✉️ connect@modernagecoders.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
    // Replace old modal with new
    content = content.substring(0, oldModalStart) + newModal + content.substring(oldModalEnd);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${path.basename(path.dirname(filePath))}`);
    return 'updated';
  } catch (error) {
    console.error(`❌ Error: ${path.basename(path.dirname(filePath))} - ${error.message}`);
    return 'error';
  }
}

function processAllCourses() {
  console.log('🚀 Updating enrollment modals in all course pages...\n');
  
  let updated = 0, skipped = 0, errors = 0, noModal = 0;
  
  const items = fs.readdirSync(GENERATED_DIR);
  
  for (const item of items) {
    const itemPath = path.join(GENERATED_DIR, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const indexPath = path.join(itemPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        const result = updateCoursePage(indexPath);
        if (result === 'updated') updated++;
        else if (result === 'skipped') skipped++;
        else if (result === 'no-modal') noModal++;
        else errors++;
      }
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   ✅ Updated: ${updated}`);
  console.log(`   ⏭️  Already done: ${skipped}`);
  console.log(`   ⚠️  No modal: ${noModal}`);
  console.log(`   ❌ Errors: ${errors}`);
}

processAllCourses();
