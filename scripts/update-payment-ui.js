/**
 * Update Payment UI - Better UX with logo and monthly payment info
 */
const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');

// Find and replace the old razorpay form function
const OLD_FORM_START = `    // Open Razorpay payment form
    function openRazorpayForm() {`;

const NEW_RAZORPAY_FORM = `    // Open Razorpay payment form
    function openRazorpayForm() {
        closePaymentModal();
        var courseName = getCourseName();
        var formHtml = \`
        <div id="razorpayFormModal" style="display:flex;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999;align-items:center;justify-content:center;background:rgba(0,0,0,0.92);backdrop-filter:blur(12px);padding:15px;box-sizing:border-box;">
            <div style="position:relative;background:linear-gradient(160deg,#0f0f1a 0%,#1a1a2e 50%,#16213e 100%);border:2px solid rgba(168,85,247,0.4);border-radius:24px;max-width:480px;width:100%;padding:0;box-shadow:0 30px 100px rgba(0,0,0,0.7),0 0 40px rgba(168,85,247,0.15);overflow:hidden;">
                
                <button onclick="document.getElementById('razorpayFormModal').remove()" style="position:absolute;top:12px;right:12px;width:32px;height:32px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:18px;border-radius:50%;cursor:pointer;z-index:10;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">&times;</button>
                
                <div style="background:linear-gradient(135deg,rgba(168,85,247,0.15),rgba(6,182,212,0.1));padding:25px 25px 20px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.08);">
                    <img src="/images/logo.png" alt="Modern Age Coders" style="height:50px;margin-bottom:12px;filter:drop-shadow(0 4px 12px rgba(168,85,247,0.3));" onerror="this.style.display='none'">
                    <h2 style="color:#fff;font-size:1.4rem;font-weight:700;margin:0 0 6px;">Secure Payment</h2>
                    <p style="color:#94a3b8;font-size:0.9rem;margin:0;">\${courseName}</p>
                </div>
                
                <div style="padding:20px 25px 25px;">
                    <div style="background:linear-gradient(135deg,rgba(168,85,247,0.12),rgba(99,102,241,0.08));border:1px solid rgba(168,85,247,0.25);border-radius:14px;padding:16px;margin-bottom:18px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                            <span style="color:#cbd5e1;font-size:0.95rem;">Group Classes (2/week)</span>
                            <span style="color:#a855f7;font-size:1.5rem;font-weight:800;">₹1,499</span>
                        </div>
                        <div style="background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);border-radius:8px;padding:10px 12px;">
                            <p style="color:#86efac;font-size:0.82rem;margin:0;line-height:1.5;">
                                <strong style="color:#4ade80;">💡 One-time payment for first month.</strong><br>
                                Future payments will be collected by our team directly.
                            </p>
                        </div>
                    </div>
                    
                    <form id="razorpayPayForm" onsubmit="processRazorpay(event)">
                        <div style="margin-bottom:14px;">
                            <label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">Full Name *</label>
                            <input type="text" id="payName" required placeholder="Enter your full name" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor='#a855f7'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'">
                        </div>
                        <div style="margin-bottom:14px;">
                            <label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">Email Address *</label>
                            <input type="email" id="payEmail" required placeholder="your@email.com" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor='#a855f7'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'">
                        </div>
                        <div style="margin-bottom:18px;">
                            <label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">WhatsApp Number *</label>
                            <input type="tel" id="payPhone" required placeholder="10-digit mobile number" maxlength="10" pattern="[0-9]{10}" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor='#a855f7'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'">
                        </div>
                        <button type="submit" id="paySubmitBtn" style="width:100%;padding:15px;background:linear-gradient(135deg,#a855f7,#6366f1);border:none;border-radius:12px;color:#fff;font-size:1.1rem;font-weight:700;cursor:pointer;transition:all 0.3s;box-shadow:0 8px 25px rgba(168,85,247,0.35);" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 35px rgba(168,85,247,0.45)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 8px 25px rgba(168,85,247,0.35)'">
                            💳 Pay ₹1,499 Now
                        </button>
                    </form>
                    
                    <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,0.06);">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <span style="color:#64748b;font-size:0.8rem;">Secured by <strong style="color:#94a3b8;">Razorpay</strong></span>
                        <span style="color:#475569;margin:0 4px;">|</span>
                        <span style="color:#64748b;font-size:0.8rem;">256-bit SSL</span>
                    </div>
                </div>
            </div>
        </div>\`;
        document.body.insertAdjacentHTML('beforeend', formHtml);
    }`;



// Also update the main payment choice modal for better UI
const OLD_MODAL_HEADER = `            <div style="text-align:center;padding:30px 25px 20px;border-bottom:1px solid rgba(255,255,255,0.1);">
                <div style="width:70px;height:70px;margin:0 auto 15px;background:linear-gradient(135deg,#a855f7,#06b6d4);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 40px rgba(168,85,247,0.4);">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                </div>
                <h2 style="font-size:1.6rem;font-weight:700;color:#fff;margin:0 0 8px;">Enroll in This Course</h2>
                <p style="color:#94a3b8;font-size:1rem;margin:0;">Choose your preferred payment method</p>
            </div>`;

const NEW_MODAL_HEADER = `            <div style="text-align:center;padding:28px 25px 22px;border-bottom:1px solid rgba(255,255,255,0.08);background:linear-gradient(135deg,rgba(168,85,247,0.08),rgba(6,182,212,0.05));">
                <img src="/images/logo.png" alt="Modern Age Coders" style="height:55px;margin-bottom:15px;filter:drop-shadow(0 4px 15px rgba(168,85,247,0.4));" onerror="this.style.display='none'">
                <h2 style="font-size:1.5rem;font-weight:700;color:#fff;margin:0 0 8px;">Start Your Learning Journey</h2>
                <p style="color:#94a3b8;font-size:0.95rem;margin:0;">Choose your preferred payment method</p>
            </div>`;

function updatePaymentUI(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Update the razorpay form function
        if (content.includes('function openRazorpayForm()')) {
            // Find and replace the entire openRazorpayForm function
            const funcStart = content.indexOf('    // Open Razorpay payment form\n    function openRazorpayForm()');
            const funcEnd = content.indexOf('    // Process Razorpay payment');
            
            if (funcStart !== -1 && funcEnd !== -1) {
                content = content.substring(0, funcStart) + NEW_RAZORPAY_FORM + '\n\n' + content.substring(funcEnd);
                modified = true;
            }
        }
        
        // Update modal header with logo
        if (content.includes(OLD_MODAL_HEADER)) {
            content = content.replace(OLD_MODAL_HEADER, NEW_MODAL_HEADER);
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            return 'updated';
        }
        return 'skipped';
    } catch (e) {
        console.error('Error:', e.message);
        return 'error';
    }
}

console.log('🎨 Updating payment UI with logo and better UX...\n');
let updated = 0, skipped = 0;

const items = fs.readdirSync(GENERATED_DIR);
for (const item of items) {
    const itemPath = path.join(GENERATED_DIR, item);
    if (fs.statSync(itemPath).isDirectory()) {
        const indexPath = path.join(itemPath, 'index.html');
        if (fs.existsSync(indexPath)) {
            const result = updatePaymentUI(indexPath);
            if (result === 'updated') { updated++; console.log(`✅ ${item}`); }
            else { skipped++; }
        }
    }
}

console.log(`\n📊 Updated: ${updated}, Skipped: ${skipped}`);
