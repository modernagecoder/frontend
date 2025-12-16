/**
 * Fix payment modal with inline styles
 * Uses !important to prevent CSS conflicts
 */
const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');

// New modal with inline styles
const NEW_MODAL = `    <!-- Payment Modal with Inline Styles -->
    <div id="enrollmentModal" class="enrollment-modal" style="display:none !important;position:fixed !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;z-index:999999 !important;align-items:center !important;justify-content:center !important;">
        <div style="position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;background:rgba(0,0,0,0.85) !important;backdrop-filter:blur(10px) !important;" onclick="document.getElementById('enrollmentModal').style.display='none'"></div>
        <div style="position:relative !important;background:linear-gradient(145deg,#1a1a2e,#16213e) !important;border:2px solid rgba(168,85,247,0.3) !important;border-radius:20px !important;max-width:700px !important;width:92% !important;max-height:90vh !important;overflow-y:auto !important;box-shadow:0 25px 80px rgba(0,0,0,0.6),0 0 60px rgba(168,85,247,0.15) !important;animation:modalSlideIn 0.4s ease !important;">
            
            <!-- Close Button -->
            <button onclick="document.getElementById('enrollmentModal').style.display='none'" style="position:absolute !important;top:15px !important;right:15px !important;width:40px !important;height:40px !important;border:none !important;background:rgba(255,255,255,0.1) !important;color:#fff !important;font-size:24px !important;border-radius:50% !important;cursor:pointer !important;z-index:10 !important;transition:all 0.3s !important;">&times;</button>
            
            <!-- Header -->
            <div style="text-align:center !important;padding:30px 25px 20px !important;border-bottom:1px solid rgba(255,255,255,0.1) !important;">
                <div style="width:70px !important;height:70px !important;margin:0 auto 15px !important;background:linear-gradient(135deg,#a855f7,#06b6d4) !important;border-radius:50% !important;display:flex !important;align-items:center !important;justify-content:center !important;box-shadow:0 10px 40px rgba(168,85,247,0.4) !important;">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                </div>
                <h2 style="font-size:1.6rem !important;font-weight:700 !important;color:#fff !important;margin:0 0 8px !important;">Enroll in This Course</h2>
                <p style="color:#94a3b8 !important;font-size:1rem !important;margin:0 !important;">Choose your preferred payment method</p>
            </div>
            
            <!-- Payment Options -->
            <div style="padding:25px !important;">
                <div style="display:grid !important;grid-template-columns:1fr 1fr !important;gap:20px !important;margin-bottom:20px !important;">
                    
                    <!-- Pay Online Card -->
                    <div style="background:linear-gradient(145deg,rgba(168,85,247,0.1),rgba(99,102,241,0.1)) !important;border:1px solid rgba(168,85,247,0.3) !important;border-radius:16px !important;padding:25px 20px !important;text-align:center !important;">
                        <div style="width:60px !important;height:60px !important;margin:0 auto 15px !important;background:linear-gradient(135deg,#a855f7,#6366f1) !important;border-radius:50% !important;display:flex !important;align-items:center !important;justify-content:center !important;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        </div>
                        <h3 style="font-size:1.2rem !important;font-weight:700 !important;color:#fff !important;margin:0 0 8px !important;">Pay Online</h3>
                        <p style="color:#94a3b8 !important;font-size:0.9rem !important;margin:0 0 15px !important;">Card, UPI, Net Banking</p>
                        <div style="text-align:left !important;margin-bottom:18px !important;">
                            <div style="color:#a5f3fc !important;font-size:0.85rem !important;padding:6px 0 !important;">✓ Instant confirmation</div>
                            <div style="color:#a5f3fc !important;font-size:0.85rem !important;padding:6px 0 !important;">✓ Secure Razorpay</div>
                            <div style="color:#a5f3fc !important;font-size:0.85rem !important;padding:6px 0 !important;">✓ All payment methods</div>
                        </div>
                        <button onclick="CoursePayment.showPaymentModal('group')" style="width:100% !important;padding:14px 20px !important;background:linear-gradient(135deg,#a855f7,#6366f1) !important;border:none !important;border-radius:10px !important;color:#fff !important;font-size:1rem !important;font-weight:600 !important;cursor:pointer !important;transition:all 0.3s !important;">💳 Pay Now</button>
                    </div>
                    
                    <!-- WhatsApp Card -->
                    <div style="background:linear-gradient(145deg,rgba(37,211,102,0.1),rgba(18,140,126,0.1)) !important;border:1px solid rgba(37,211,102,0.3) !important;border-radius:16px !important;padding:25px 20px !important;text-align:center !important;">
                        <div style="width:60px !important;height:60px !important;margin:0 auto 15px !important;background:linear-gradient(135deg,#25D366,#128C7E) !important;border-radius:50% !important;display:flex !important;align-items:center !important;justify-content:center !important;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        </div>
                        <h3 style="font-size:1.2rem !important;font-weight:700 !important;color:#fff !important;margin:0 0 8px !important;">Pay via WhatsApp</h3>
                        <p style="color:#94a3b8 !important;font-size:0.9rem !important;margin:0 0 15px !important;">Direct to Modern Age Coders</p>
                        <div style="text-align:left !important;margin-bottom:18px !important;">
                            <div style="color:#86efac !important;font-size:0.85rem !important;padding:6px 0 !important;">✓ Personal assistance</div>
                            <div style="color:#86efac !important;font-size:0.85rem !important;padding:6px 0 !important;">✓ Flexible payment</div>
                            <div style="color:#86efac !important;font-size:0.85rem !important;padding:6px 0 !important;">✓ EMI available</div>
                        </div>
                        <a href="https://wa.me/919123366161?text=Hi%2C%20I%20want%20to%20enroll%20in%20a%20course.%20Please%20share%20payment%20details." target="_blank" style="display:block !important;width:100% !important;padding:14px 20px !important;background:linear-gradient(135deg,#25D366,#128C7E) !important;border:none !important;border-radius:10px !important;color:#fff !important;font-size:1rem !important;font-weight:600 !important;text-decoration:none !important;text-align:center !important;box-sizing:border-box !important;">💬 WhatsApp Us</a>
                    </div>
                </div>
                
                <!-- Contact Info -->
                <div style="background:rgba(168,85,247,0.1) !important;border:1px solid rgba(168,85,247,0.2) !important;border-radius:12px !important;padding:15px 20px !important;display:flex !important;align-items:center !important;justify-content:space-between !important;flex-wrap:wrap !important;gap:10px !important;">
                    <div style="display:flex !important;align-items:center !important;gap:10px !important;color:#cbd5e1 !important;font-size:0.95rem !important;">
                        <span>📞</span>
                        <span>Need Help? Contact <strong style="color:#fff !important;">Shivam Sir</strong></span>
                    </div>
                    <div style="display:flex !important;gap:15px !important;flex-wrap:wrap !important;">
                        <a href="tel:+919123366161" style="color:#a855f7 !important;text-decoration:none !important;font-weight:600 !important;font-size:0.95rem !important;">📱 9123366161</a>
                        <a href="mailto:connect@modernagecoders.com" style="color:#06b6d4 !important;text-decoration:none !important;font-weight:600 !important;font-size:0.95rem !important;">✉️ Email</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal Animation & Mobile Styles -->
    <style>
        @keyframes modalSlideIn { from { opacity:0; transform:scale(0.9) translateY(-20px); } to { opacity:1; transform:scale(1) translateY(0); } }
        .enrollment-modal.active { display:flex !important; }
        @media (max-width: 650px) {
            .enrollment-modal > div:last-child > div:nth-child(3) > div:first-child { grid-template-columns:1fr !important; }
        }
    </style>`;

function fixCoursePage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove old modal
    const oldModalStart = content.indexOf('<div id="enrollmentModal"');
    if (oldModalStart === -1) {
      // Try to find <!-- Payment Modal or <!-- Enhanced
      const altStart = content.indexOf('<!-- Payment Modal') !== -1 
        ? content.indexOf('<!-- Payment Modal')
        : content.indexOf('<!-- Enhanced Enrollment');
      if (altStart === -1) {
        console.log(`⚠️  No modal: ${path.basename(path.dirname(filePath))}`);
        return 'no-modal';
      }
    }
    
    // Find and remove old modal section
    let startIdx = content.indexOf('<!-- Payment Modal');
    if (startIdx === -1) startIdx = content.indexOf('<!-- Enhanced Enrollment');
    if (startIdx === -1) startIdx = content.indexOf('<div id="enrollmentModal"');
    
    if (startIdx === -1) {
      console.log(`⚠️  No modal: ${path.basename(path.dirname(filePath))}`);
      return 'no-modal';
    }
    
    // Find end - look for the modal's closing style tag or next major section
    let endIdx = content.indexOf('</style>', startIdx);
    if (endIdx !== -1) {
      // Find the closing </style> that belongs to modal
      let tempIdx = startIdx;
      while (true) {
        const nextStyle = content.indexOf('</style>', tempIdx);
        if (nextStyle === -1 || nextStyle > startIdx + 15000) break;
        endIdx = nextStyle + 8;
        tempIdx = nextStyle + 1;
        // Check if we've passed the modal section
        if (content.substring(startIdx, endIdx).includes('@keyframes modalSlideIn') ||
            content.substring(startIdx, endIdx).includes('.enrollment-modal.active')) {
          break;
        }
      }
    }
    
    // If we can't find proper end, look for next section marker
    if (endIdx === -1 || endIdx < startIdx) {
      endIdx = content.indexOf('<script>', startIdx);
      if (endIdx === -1) endIdx = content.indexOf('<!-- Footer', startIdx);
      if (endIdx === -1) endIdx = content.indexOf('<div id="footer', startIdx);
    }
    
    if (endIdx === -1 || endIdx < startIdx) {
      console.log(`⚠️  Can't find end: ${path.basename(path.dirname(filePath))}`);
      return 'error';
    }
    
    // Replace old modal with new
    content = content.substring(0, startIdx) + NEW_MODAL + '\n\n    ' + content.substring(endIdx);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${path.basename(path.dirname(filePath))}`);
    return 'fixed';
  } catch (error) {
    console.error(`❌ Error: ${path.basename(path.dirname(filePath))} - ${error.message}`);
    return 'error';
  }
}

function processAll() {
  console.log('🔧 Fixing payment modals with inline styles...\n');
  
  let fixed = 0, noModal = 0, errors = 0;
  
  const items = fs.readdirSync(GENERATED_DIR);
  for (const item of items) {
    const itemPath = path.join(GENERATED_DIR, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const indexPath = path.join(itemPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        const result = fixCoursePage(indexPath);
        if (result === 'fixed') fixed++;
        else if (result === 'no-modal') noModal++;
        else errors++;
      }
    }
  }
  
  console.log(`\n📊 Summary: Fixed: ${fixed}, No modal: ${noModal}, Errors: ${errors}`);
}

processAll();
