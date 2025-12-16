/**
 * SAFE: Add payment modal to courses without removing anything
 * Just adds the modal before </body>
 */
const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');

const PAYMENT_MODAL = `
    <!-- PAYMENT MODAL - Added by script -->
    <div id="paymentChoiceModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);backdrop-filter:blur(10px);">
        <div style="position:relative;background:linear-gradient(145deg,#1a1a2e,#16213e);border:2px solid rgba(168,85,247,0.3);border-radius:20px;max-width:680px;width:92%;max-height:90vh;overflow-y:auto;box-shadow:0 25px 80px rgba(0,0,0,0.6),0 0 60px rgba(168,85,247,0.15);margin:20px;">
            
            <button onclick="closePaymentModal()" style="position:absolute;top:15px;right:15px;width:40px;height:40px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:24px;border-radius:50%;cursor:pointer;z-index:10;">&times;</button>
            
            <div style="text-align:center;padding:30px 25px 20px;border-bottom:1px solid rgba(255,255,255,0.1);">
                <div style="width:70px;height:70px;margin:0 auto 15px;background:linear-gradient(135deg,#a855f7,#06b6d4);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 40px rgba(168,85,247,0.4);">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                </div>
                <h2 style="font-size:1.6rem;font-weight:700;color:#fff;margin:0 0 8px;">Enroll in This Course</h2>
                <p style="color:#94a3b8;font-size:1rem;margin:0;">Choose your preferred payment method</p>
            </div>
            
            <div style="padding:25px;">
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-bottom:20px;">
                    
                    <div style="background:linear-gradient(145deg,rgba(168,85,247,0.15),rgba(99,102,241,0.1));border:1px solid rgba(168,85,247,0.3);border-radius:16px;padding:25px 20px;text-align:center;">
                        <div style="width:60px;height:60px;margin:0 auto 15px;background:linear-gradient(135deg,#a855f7,#6366f1);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        </div>
                        <h3 style="font-size:1.2rem;font-weight:700;color:#fff;margin:0 0 8px;">Pay Online</h3>
                        <p style="color:#94a3b8;font-size:0.9rem;margin:0 0 15px;">Card, UPI, Net Banking</p>
                        <div style="text-align:left;margin-bottom:18px;">
                            <div style="color:#c4b5fd;font-size:0.85rem;padding:6px 0;">✓ Instant confirmation</div>
                            <div style="color:#c4b5fd;font-size:0.85rem;padding:6px 0;">✓ Secure Razorpay checkout</div>
                            <div style="color:#c4b5fd;font-size:0.85rem;padding:6px 0;">✓ All payment methods</div>
                        </div>
                        <button onclick="if(typeof CoursePayment!=='undefined')CoursePayment.showPaymentModal('group');else alert('Payment system loading...');" style="width:100%;padding:14px 20px;background:linear-gradient(135deg,#a855f7,#6366f1);border:none;border-radius:10px;color:#fff;font-size:1rem;font-weight:600;cursor:pointer;">💳 Pay Now</button>
                    </div>
                    
                    <div style="background:linear-gradient(145deg,rgba(37,211,102,0.15),rgba(18,140,126,0.1));border:1px solid rgba(37,211,102,0.3);border-radius:16px;padding:25px 20px;text-align:center;">
                        <div style="width:60px;height:60px;margin:0 auto 15px;background:linear-gradient(135deg,#25D366,#128C7E);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        </div>
                        <h3 style="font-size:1.2rem;font-weight:700;color:#fff;margin:0 0 8px;">Pay via WhatsApp</h3>
                        <p style="color:#94a3b8;font-size:0.9rem;margin:0 0 15px;">Direct to Modern Age Coders</p>
                        <div style="text-align:left;margin-bottom:18px;">
                            <div style="color:#86efac;font-size:0.85rem;padding:6px 0;">✓ Personal assistance</div>
                            <div style="color:#86efac;font-size:0.85rem;padding:6px 0;">✓ Flexible payment options</div>
                            <div style="color:#86efac;font-size:0.85rem;padding:6px 0;">✓ EMI available on request</div>
                        </div>
                        <a href="https://wa.me/919123366161?text=Hi%2C%20I%20want%20to%20enroll%20in%20a%20course.%20Please%20share%20payment%20details." target="_blank" style="display:block;width:100%;padding:14px 20px;background:linear-gradient(135deg,#25D366,#128C7E);border:none;border-radius:10px;color:#fff;font-size:1rem;font-weight:600;text-decoration:none;text-align:center;box-sizing:border-box;">💬 WhatsApp Us</a>
                    </div>
                </div>
                
                <div style="background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.2);border-radius:12px;padding:15px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
                    <span style="color:#cbd5e1;font-size:0.95rem;">📞 Need Help? Contact <strong style="color:#fff;">Shivam Sir</strong></span>
                    <div style="display:flex;gap:15px;flex-wrap:wrap;">
                        <a href="tel:+919123366161" style="color:#a855f7;text-decoration:none;font-weight:600;">📱 9123366161</a>
                        <a href="mailto:connect@modernagecoders.com" style="color:#06b6d4;text-decoration:none;font-weight:600;">✉️ Email</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
    function openPaymentModal() { document.getElementById('paymentChoiceModal').style.display = 'flex'; }
    function closePaymentModal() { document.getElementById('paymentChoiceModal').style.display = 'none'; }
    document.getElementById('paymentChoiceModal').addEventListener('click', function(e) { if(e.target === this) closePaymentModal(); });
    
    // Override enroll buttons to open our modal
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.enroll-btn, [href="#enroll"], a[href="#"]').forEach(function(btn) {
            if(btn.textContent.toLowerCase().includes('enroll')) {
                btn.addEventListener('click', function(e) { e.preventDefault(); openPaymentModal(); });
            }
        });
    });
    </script>
    
    <!-- Razorpay -->
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script src="/js/course-payment.js"></script>
`;

function addModalToPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('paymentChoiceModal')) {
      return 'skipped';
    }
    
    if (content.includes('</body>')) {
      content = content.replace('</body>', PAYMENT_MODAL + '\n</body>');
      fs.writeFileSync(filePath, content, 'utf8');
      return 'added';
    }
    return 'no-body';
  } catch (e) {
    return 'error';
  }
}

console.log('🚀 Adding payment modal safely...\n');
let added = 0, skipped = 0;

const items = fs.readdirSync(GENERATED_DIR);
for (const item of items) {
  const itemPath = path.join(GENERATED_DIR, item);
  if (fs.statSync(itemPath).isDirectory()) {
    const indexPath = path.join(itemPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      const result = addModalToPage(indexPath);
      if (result === 'added') { added++; console.log(`✅ ${item}`); }
      else skipped++;
    }
  }
}

console.log(`\n📊 Added: ${added}, Skipped: ${skipped}`);
