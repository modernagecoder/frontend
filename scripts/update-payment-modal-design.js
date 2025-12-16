/**
 * Update Payment Modal - Modern Minimalistic Design
 * Beautiful, clean, comfortable UX/UI
 */
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, '../content/courses/template/course-template.html');

// Modern minimalistic payment modal
const NEW_PAYMENT_MODAL = `
    <!-- PAYMENT CHOICE MODAL - Modern Minimalistic Design -->
    <div id="paymentChoiceModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;align-items:center;justify-content:center;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);padding:20px;box-sizing:border-box;">
        <div style="position:relative;background:#ffffff;border-radius:20px;max-width:520px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.3);overflow:hidden;animation:slideUp 0.3s ease;">
            
            <!-- Close Button -->
            <button onclick="closePaymentModal()" style="position:absolute;top:16px;right:16px;width:36px;height:36px;border:none;background:rgba(0,0,0,0.05);color:#333;font-size:20px;border-radius:50%;cursor:pointer;z-index:10;transition:all 0.2s;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(0,0,0,0.1)'" onmouseout="this.style.background='rgba(0,0,0,0.05)'">&times;</button>
            
            <!-- Header -->
            <div style="padding:32px 32px 24px;text-align:center;border-bottom:1px solid #f0f0f0;">
                <img src="/images/logo.png" alt="Modern Age Coders" style="height:48px;margin-bottom:16px;" onerror="this.style.display='none'">
                <h2 style="font-size:1.5rem;font-weight:600;color:#1a1a1a;margin:0 0 8px;letter-spacing:-0.02em;">Choose Payment Method</h2>
                <p style="color:#666;font-size:0.95rem;margin:0;">Select how you'd like to enroll</p>
            </div>
            
            <!-- Payment Options -->
            <div style="padding:28px 32px 32px;">
                <div style="display:grid;gap:16px;margin-bottom:24px;">
                    
                    <!-- Pay Online Option -->
                    <div onclick="openRazorpayForm()" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:14px;padding:24px;cursor:pointer;transition:all 0.3s;position:relative;overflow:hidden;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 24px rgba(102,126,234,0.25)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                        <div style="position:relative;z-index:1;">
                            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                                <div style="width:44px;height:44px;background:rgba(255,255,255,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                                </div>
                                <div style="flex:1;">
                                    <h3 style="font-size:1.15rem;font-weight:600;color:#fff;margin:0;">Pay Online</h3>
                                    <p style="color:rgba(255,255,255,0.85);font-size:0.85rem;margin:2px 0 0;">Instant & Secure</p>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                            <div style="display:flex;gap:12px;flex-wrap:wrap;">
                                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.75rem;padding:4px 10px;border-radius:6px;backdrop-filter:blur(10px);">UPI</span>
                                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.75rem;padding:4px 10px;border-radius:6px;backdrop-filter:blur(10px);">Cards</span>
                                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.75rem;padding:4px 10px;border-radius:6px;backdrop-filter:blur(10px);">Net Banking</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- WhatsApp Option -->
                    <a href="https://wa.me/919123366161?text=Hi%2C%20I%20want%20to%20enroll%20in%20a%20course.%20Please%20share%20payment%20details." target="_blank" style="background:#25D366;border-radius:14px;padding:24px;cursor:pointer;transition:all 0.3s;text-decoration:none;display:block;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 24px rgba(37,211,102,0.25)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:44px;height:44px;background:rgba(255,255,255,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            </div>
                            <div style="flex:1;">
                                <h3 style="font-size:1.15rem;font-weight:600;color:#fff;margin:0;">WhatsApp Us</h3>
                                <p style="color:rgba(255,255,255,0.9);font-size:0.85rem;margin:2px 0 0;">Chat with Shivam Sir</p>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                    </a>
                </div>
                
                <!-- Help Section -->
                <div style="background:#f8f9fa;border-radius:12px;padding:16px;text-align:center;">
                    <p style="color:#666;font-size:0.85rem;margin:0 0 8px;">Need help? Contact us</p>
                    <div style="display:flex;gap:16px;justify-content:center;align-items:center;flex-wrap:wrap;">
                        <a href="tel:+919123366161" style="color:#667eea;text-decoration:none;font-weight:500;font-size:0.9rem;display:flex;align-items:center;gap:4px;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            9123366161
                        </a>
                        <span style="color:#ddd;">|</span>
                        <a href="mailto:connect@modernagecoders.com" style="color:#667eea;text-decoration:none;font-weight:500;font-size:0.9rem;display:flex;align-items:center;gap:4px;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <style>
    @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    </style>`;

// Modern payment form
const NEW_PAYMENT_FORM_FUNCTION = `
    function openRazorpayForm() {
        closePaymentModal();
        var courseName = getCourseName();
        var formHtml = \`
        <div id="razorpayFormModal" style="display:flex;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999;align-items:center;justify-content:center;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);padding:20px;box-sizing:border-box;">
            <div style="position:relative;background:#ffffff;border-radius:20px;max-width:440px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.3);overflow:hidden;animation:slideUp 0.3s ease;">
                
                <button onclick="closeRazorpayForm()" style="position:absolute;top:16px;right:16px;width:36px;height:36px;border:none;background:rgba(0,0,0,0.05);color:#333;font-size:20px;border-radius:50%;cursor:pointer;z-index:10;transition:all 0.2s;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(0,0,0,0.1)'" onmouseout="this.style.background='rgba(0,0,0,0.05)'">&times;</button>
                
                <div style="padding:32px 32px 24px;text-align:center;border-bottom:1px solid #f0f0f0;">
                    <img src="/images/logo.png" alt="Modern Age Coders" style="height:48px;margin-bottom:16px;" onerror="this.style.display='none'">
                    <h2 style="font-size:1.4rem;font-weight:600;color:#1a1a1a;margin:0 0 6px;letter-spacing:-0.02em;">Complete Payment</h2>
                    <p style="color:#666;font-size:0.9rem;margin:0;">\${courseName}</p>
                </div>
                
                <div style="padding:24px 32px 32px;">
                    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:16px;margin-bottom:24px;text-align:center;">
                        <div style="color:rgba(255,255,255,0.9);font-size:0.85rem;margin-bottom:4px;">Group Classes • 2 per week</div>
                        <div style="color:#fff;font-size:2rem;font-weight:700;letter-spacing:-0.02em;">₹1,499</div>
                        <div style="background:rgba(255,255,255,0.2);border-radius:8px;padding:8px 12px;margin-top:12px;backdrop-filter:blur(10px);">
                            <p style="color:#fff;font-size:0.8rem;margin:0;line-height:1.4;">💡 First month only. Future payments collected by team.</p>
                        </div>
                    </div>
                    
                    <form id="razorpayPayForm" onsubmit="processRazorpay(event)">
                        <div style="margin-bottom:16px;">
                            <label style="display:block;color:#333;margin-bottom:6px;font-size:0.9rem;font-weight:500;">Full Name</label>
                            <input type="text" id="payName" required placeholder="Enter your name" style="width:100%;padding:12px 16px;background:#f8f9fa;border:2px solid #e9ecef;border-radius:10px;color:#333;font-size:0.95rem;box-sizing:border-box;transition:all 0.2s;outline:none;" onfocus="this.style.borderColor='#667eea';this.style.background='#fff'" onblur="this.style.borderColor='#e9ecef';this.style.background='#f8f9fa'">
                        </div>
                        <div style="margin-bottom:16px;">
                            <label style="display:block;color:#333;margin-bottom:6px;font-size:0.9rem;font-weight:500;">Email Address</label>
                            <input type="email" id="payEmail" required placeholder="your@email.com" style="width:100%;padding:12px 16px;background:#f8f9fa;border:2px solid #e9ecef;border-radius:10px;color:#333;font-size:0.95rem;box-sizing:border-box;transition:all 0.2s;outline:none;" onfocus="this.style.borderColor='#667eea';this.style.background='#fff'" onblur="this.style.borderColor='#e9ecef';this.style.background='#f8f9fa'">
                        </div>
                        <div style="margin-bottom:20px;">
                            <label style="display:block;color:#333;margin-bottom:6px;font-size:0.9rem;font-weight:500;">WhatsApp Number</label>
                            <input type="tel" id="payPhone" required placeholder="10-digit mobile" maxlength="10" pattern="[0-9]{10}" style="width:100%;padding:12px 16px;background:#f8f9fa;border:2px solid #e9ecef;border-radius:10px;color:#333;font-size:0.95rem;box-sizing:border-box;transition:all 0.2s;outline:none;" onfocus="this.style.borderColor='#667eea';this.style.background='#fff'" onblur="this.style.borderColor='#e9ecef';this.style.background='#f8f9fa'">
                        </div>
                        <button type="submit" id="paySubmitBtn" style="width:100%;padding:14px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border:none;border-radius:10px;color:#fff;font-size:1.05rem;font-weight:600;cursor:pointer;transition:all 0.3s;box-shadow:0 4px 12px rgba(102,126,234,0.3);" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 20px rgba(102,126,234,0.4)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(102,126,234,0.3)'">
                            Pay ₹1,499 Securely
                        </button>
                    </form>
                    
                    <div style="text-align:center;margin-top:16px;padding-top:16px;border-top:1px solid #f0f0f0;">
                        <div style="display:flex;align-items:center;justify-content:center;gap:6px;color:#999;font-size:0.8rem;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            Secured by Razorpay • 256-bit SSL
                        </div>
                    </div>
                </div>
            </div>
        </div>\`;
        document.body.insertAdjacentHTML('beforeend', formHtml);
    }`;

// Read template
let template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Replace payment modal
const modalStart = template.indexOf('<!-- PAYMENT CHOICE MODAL');
const modalEnd = template.indexOf('</div>\n    \n    <style>', modalStart) + '</style>'.length;

if (modalStart !== -1 && modalEnd !== -1) {
    template = template.substring(0, modalStart) + NEW_PAYMENT_MODAL + template.substring(modalEnd);
}

// Replace payment form function
const formFuncStart = template.indexOf('function openRazorpayForm()');
const formFuncEnd = template.indexOf('function closeRazorpayForm()');

if (formFuncStart !== -1 && formFuncEnd !== -1) {
    template = template.substring(0, formFuncStart) + NEW_PAYMENT_FORM_FUNCTION + '\n    \n    ' + template.substring(formFuncEnd);
}

// Write updated template
fs.writeFileSync(TEMPLATE_PATH, template, 'utf8');

console.log('✅ Payment modal updated with modern minimalistic design');
console.log('📝 Regenerate courses to apply: node scripts/generate-courses.js');
