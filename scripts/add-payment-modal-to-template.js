/**
 * Add payment modal to course template
 * This ensures ALL generated courses will have working payment
 */
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, '../content/courses/template/course-template.html');

const PAYMENT_MODAL_HTML = `
    <!-- PAYMENT CHOICE MODAL -->
    <div id="paymentChoiceModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);backdrop-filter:blur(10px);">
        <div style="position:relative;background:linear-gradient(145deg,#1a1a2e,#16213e);border:2px solid rgba(168,85,247,0.3);border-radius:20px;max-width:680px;width:92%;max-height:90vh;overflow-y:auto;box-shadow:0 25px 80px rgba(0,0,0,0.6),0 0 60px rgba(168,85,247,0.15);margin:20px;">
            
            <button onclick="closePaymentModal()" style="position:absolute;top:15px;right:15px;width:40px;height:40px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:24px;border-radius:50%;cursor:pointer;z-index:10;">&times;</button>
            
            <div style="text-align:center;padding:28px 25px 22px;border-bottom:1px solid rgba(255,255,255,0.08);background:linear-gradient(135deg,rgba(168,85,247,0.08),rgba(6,182,212,0.05));">
                <img src="/images/logo.webp" alt="Modern Age Coders" style="height:55px;margin-bottom:15px;filter:drop-shadow(0 4px 15px rgba(168,85,247,0.4));" onerror="this.style.display='none'" loading="lazy">
                <h2 style="font-size:1.5rem;font-weight:700;color:#fff;margin:0 0 8px;">Start Your Learning Journey</h2>
                <p style="color:#94a3b8;font-size:0.95rem;margin:0;">Choose your preferred payment method</p>
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
                        <button onclick="openRazorpayForm()" style="width:100%;padding:14px 20px;background:linear-gradient(135deg,#a855f7,#6366f1);border:none;border-radius:10px;color:#fff;font-size:1rem;font-weight:600;cursor:pointer;">💳 Pay Now</button>
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
    </div>`;

const PAYMENT_SCRIPT = `
    <!-- Razorpay Payment Integration -->
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script>
    // Modal functions
    function openPaymentModal() { document.getElementById('paymentChoiceModal').style.display = 'flex'; }
    function closePaymentModal() { document.getElementById('paymentChoiceModal').style.display = 'none'; }
    
    document.addEventListener('DOMContentLoaded', function() {
        var modal = document.getElementById('paymentChoiceModal');
        if (modal) {
            modal.addEventListener('click', function(e) { if(e.target === this) closePaymentModal(); });
        }
        
        // Hook enroll buttons
        document.querySelectorAll('.enroll-btn, [href="#enroll"], a[href="#"]').forEach(function(btn) {
            if(btn.textContent.toLowerCase().includes('enroll')) {
                btn.addEventListener('click', function(e) { e.preventDefault(); openPaymentModal(); });
            }
        });
    });

    // Get course info
    function getCourseName() {
        var el = document.querySelector('.course-hero-title, h1');
        return el ? el.textContent.trim() : 'Course Enrollment';
    }
    function getCourseSlug() {
        var parts = window.location.pathname.split('/');
        var idx = parts.indexOf('generated');
        return (idx !== -1 && parts[idx + 1]) ? parts[idx + 1] : 'course';
    }
    function getApiUrl() {
        var isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        return isLocal ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
    }

    // Open payment form
    function openRazorpayForm() {
        closePaymentModal();
        var courseName = getCourseName();
        var formHtml = '<div id="razorpayFormModal" style="display:flex;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999;align-items:center;justify-content:center;background:rgba(0,0,0,0.92);backdrop-filter:blur(12px);padding:15px;box-sizing:border-box;">' +
            '<div style="position:relative;background:linear-gradient(160deg,#0f0f1a 0%,#1a1a2e 50%,#16213e 100%);border:2px solid rgba(168,85,247,0.4);border-radius:24px;max-width:480px;width:100%;padding:0;box-shadow:0 30px 100px rgba(0,0,0,0.7),0 0 40px rgba(168,85,247,0.15);overflow:hidden;">' +
            '<button onclick="closeRazorpayForm()" style="position:absolute;top:12px;right:12px;width:32px;height:32px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:18px;border-radius:50%;cursor:pointer;z-index:10;transition:all 0.2s;" onmouseover="this.style.background=\\'rgba(255,255,255,0.2)\\'" onmouseout="this.style.background=\\'rgba(255,255,255,0.1)\\'">&times;</button>' +
            '<div style="background:linear-gradient(135deg,rgba(168,85,247,0.15),rgba(6,182,212,0.1));padding:25px 25px 20px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.08);">' +
            '<img src="/images/logo.webp" alt="Modern Age Coders" style="height:50px;margin-bottom:12px;filter:drop-shadow(0 4px 12px rgba(168,85,247,0.3));" onerror="this.style.display=\\'none\\'" loading="lazy">' +
            '<h2 style="color:#fff;font-size:1.4rem;font-weight:700;margin:0 0 6px;">Secure Payment</h2>' +
            '<p style="color:#94a3b8;font-size:0.9rem;margin:0;">' + courseName + '</p></div>' +
            '<div style="padding:20px 25px 25px;">' +
            '<div style="background:linear-gradient(135deg,rgba(168,85,247,0.12),rgba(99,102,241,0.08));border:1px solid rgba(168,85,247,0.25);border-radius:14px;padding:16px;margin-bottom:18px;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"><span style="color:#cbd5e1;font-size:0.95rem;">Group Classes (2/week)</span><span style="color:#a855f7;font-size:1.5rem;font-weight:800;">₹1,499</span></div>' +
            '<div style="background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);border-radius:8px;padding:10px 12px;"><p style="color:#86efac;font-size:0.82rem;margin:0;line-height:1.5;"><strong style="color:#4ade80;">💡 One-time payment for first month.</strong><br>Future payments will be collected by our team directly.</p></div></div>' +
            '<form id="razorpayPayForm" onsubmit="processRazorpay(event)">' +
            '<div style="margin-bottom:14px;"><label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">Full Name *</label><input type="text" id="payName" required placeholder="Enter your full name" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor=\\'#a855f7\\'" onblur="this.style.borderColor=\\'rgba(255,255,255,0.12)\\'"></div>' +
            '<div style="margin-bottom:14px;"><label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">Email Address *</label><input type="email" id="payEmail" required placeholder="your@email.com" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor=\\'#a855f7\\'" onblur="this.style.borderColor=\\'rgba(255,255,255,0.12)\\'"></div>' +
            '<div style="margin-bottom:18px;"><label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">WhatsApp Number *</label><input type="tel" id="payPhone" required placeholder="10-digit mobile number" maxlength="10" pattern="[0-9]{10}" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor=\\'#a855f7\\'" onblur="this.style.borderColor=\\'rgba(255,255,255,0.12)\\'"></div>' +
            '<button type="submit" id="paySubmitBtn" style="width:100%;padding:15px;background:linear-gradient(135deg,#a855f7,#6366f1);border:none;border-radius:12px;color:#fff;font-size:1.1rem;font-weight:700;cursor:pointer;transition:all 0.3s;box-shadow:0 8px 25px rgba(168,85,247,0.35);" onmouseover="this.style.transform=\\'translateY(-2px)\\';this.style.boxShadow=\\'0 12px 35px rgba(168,85,247,0.45)\\'" onmouseout="this.style.transform=\\'translateY(0)\\';this.style.boxShadow=\\'0 8px 25px rgba(168,85,247,0.35)\\'">💳 Pay ₹1,499 Now</button></form>' +
            '<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,0.06);"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span style="color:#64748b;font-size:0.8rem;">Secured by <strong style="color:#94a3b8;">Razorpay</strong></span><span style="color:#475569;margin:0 4px;">|</span><span style="color:#64748b;font-size:0.8rem;">256-bit SSL</span></div></div></div></div>';
        document.body.insertAdjacentHTML('beforeend', formHtml);
    }
    
    function closeRazorpayForm() {
        var modal = document.getElementById('razorpayFormModal');
        if (modal) modal.remove();
    }

    // Process payment
    async function processRazorpay(e) {
        e.preventDefault();
        var name = document.getElementById('payName').value.trim();
        var email = document.getElementById('payEmail').value.trim();
        var phone = document.getElementById('payPhone').value.trim();
        var btn = document.getElementById('paySubmitBtn');
        
        if (!/^[0-9]{10}$/.test(phone)) { alert('Please enter valid 10-digit phone number'); return; }
        
        btn.disabled = true;
        btn.textContent = 'Processing...';
        
        try {
            var apiUrl = getApiUrl();
            var response = await fetch(apiUrl + '/api/payment/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 1499,
                    productType: 'course',
                    productId: getCourseSlug(),
                    productName: getCourseName() + ' - Group Classes',
                    customerName: name,
                    customerEmail: email,
                    customerPhone: phone
                })
            });
            var data = await response.json();
            if (!data.success) throw new Error(data.error || 'Order creation failed');
            
            var options = {
                key: data.key,
                amount: data.order.amount,
                currency: data.order.currency,
                name: 'Modern Age Coders',
                description: getCourseName(),
                image: '/images/logo.webp',
                order_id: data.order.id,
                prefill: { name: name, email: email, contact: phone },
                theme: { color: '#a855f7' },
                handler: async function(resp) {
                    try {
                        var verifyRes = await fetch(apiUrl + '/api/payment/verify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_order_id: resp.razorpay_order_id,
                                razorpay_payment_id: resp.razorpay_payment_id,
                                razorpay_signature: resp.razorpay_signature
                            })
                        });
                        var verifyData = await verifyRes.json();
                        if (verifyData.success) {
                            closeRazorpayForm();
                            alert('✅ Payment Successful!\\n\\nOrder ID: ' + verifyData.payment.orderId + '\\nAmount: ₹' + verifyData.payment.amount + '\\n\\nOur team will contact you within 24 hours with class details.');
                        } else {
                            alert('Payment verification failed. Please contact support with your payment ID.');
                        }
                    } catch(err) {
                        alert('Verification error. Please contact support with your payment ID.');
                    }
                },
                modal: { ondismiss: function() { btn.disabled = false; btn.textContent = '💳 Pay ₹1,499 Now'; } }
            };
            var rzp = new Razorpay(options);
            rzp.on('payment.failed', function(resp) {
                alert('Payment failed: ' + resp.error.description);
                btn.disabled = false;
                btn.textContent = '💳 Pay ₹1,499 Now';
            });
            rzp.open();
        } catch(err) {
            alert('Error: ' + err.message);
            btn.disabled = false;
            btn.textContent = '💳 Pay ₹1,499 Now';
        }
    }
    </script>`;

// Read template
let template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Check if already has payment modal
if (template.includes('paymentChoiceModal')) {
    console.log('✅ Template already has payment modal');
    process.exit(0);
}

// Find where to insert (before the Razorpay script section or before </body>)
const razorpayScriptIndex = template.indexOf('<!-- Razorpay Payment Integration -->');
const bodyEndIndex = template.lastIndexOf('</body>');

if (razorpayScriptIndex !== -1) {
    // Replace old Razorpay section
    const scriptEndIndex = template.indexOf('</body>', razorpayScriptIndex);
    template = template.substring(0, razorpayScriptIndex) + PAYMENT_MODAL_HTML + '\n' + PAYMENT_SCRIPT + '\n\n</body>\n</html>';
} else if (bodyEndIndex !== -1) {
    // Insert before </body>
    template = template.substring(0, bodyEndIndex) + PAYMENT_MODAL_HTML + '\n' + PAYMENT_SCRIPT + '\n\n</body>\n</html>';
} else {
    console.error('❌ Could not find insertion point in template');
    process.exit(1);
}

// Write updated template
fs.writeFileSync(TEMPLATE_PATH, template, 'utf8');

console.log('✅ Payment modal added to template');
console.log('📝 Now regenerate courses with: npm run generate:courses');
