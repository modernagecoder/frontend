/**
 * Fix payment button - Replace the Pay Now button with working Razorpay integration
 * This script updates all course pages to have a fully functional payment system
 */
const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');

// The old payment modal section to find and replace
const OLD_PAY_NOW_BUTTON = `<button onclick="if(typeof CoursePayment!=='undefined')CoursePayment.showPaymentModal('group');else alert('Payment system loading...');" style="width:100%;padding:14px 20px;background:linear-gradient(135deg,#a855f7,#6366f1);border:none;border-radius:10px;color:#fff;font-size:1rem;font-weight:600;cursor:pointer;">💳 Pay Now</button>`;

const NEW_PAY_NOW_BUTTON = `<button onclick="openRazorpayForm()" style="width:100%;padding:14px 20px;background:linear-gradient(135deg,#a855f7,#6366f1);border:none;border-radius:10px;color:#fff;font-size:1rem;font-weight:600;cursor:pointer;">💳 Pay Now</button>`;

// Old script section
const OLD_SCRIPT = `    <script>
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
    <script src="/js/course-payment.js"></script>`;

const NEW_SCRIPT = `    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
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

    // Get course info from page
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

    // Open Razorpay payment form
    function openRazorpayForm() {
        closePaymentModal();
        var formHtml = '<div id="razorpayFormModal" style="display:flex;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999;align-items:center;justify-content:center;background:rgba(0,0,0,0.9);backdrop-filter:blur(10px);">' +
            '<div style="background:linear-gradient(145deg,#1a1a2e,#16213e);border:2px solid rgba(168,85,247,0.4);border-radius:20px;max-width:450px;width:92%;padding:30px;box-shadow:0 25px 80px rgba(0,0,0,0.6);">' +
            '<button onclick="document.getElementById(\\'razorpayFormModal\\').remove()" style="position:absolute;top:15px;right:15px;width:36px;height:36px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:20px;border-radius:50%;cursor:pointer;">&times;</button>' +
            '<h2 style="color:#fff;font-size:1.5rem;margin:0 0 8px;text-align:center;">Complete Payment</h2>' +
            '<p style="color:#94a3b8;text-align:center;margin:0 0 20px;">' + getCourseName() + '</p>' +
            '<div style="background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.3);border-radius:10px;padding:12px;margin-bottom:20px;text-align:center;">' +
            '<span style="color:#a855f7;font-size:1.3rem;font-weight:700;">₹1,499/month</span><span style="color:#94a3b8;font-size:0.9rem;"> - Group Classes</span></div>' +
            '<form id="razorpayPayForm" onsubmit="processRazorpay(event)">' +
            '<div style="margin-bottom:15px;"><label style="display:block;color:#94a3b8;margin-bottom:6px;font-size:0.9rem;">Full Name *</label>' +
            '<input type="text" id="payName" required placeholder="Enter your name" style="width:100%;padding:12px;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.15);border-radius:8px;color:#fff;font-size:1rem;box-sizing:border-box;"></div>' +
            '<div style="margin-bottom:15px;"><label style="display:block;color:#94a3b8;margin-bottom:6px;font-size:0.9rem;">Email *</label>' +
            '<input type="email" id="payEmail" required placeholder="Enter your email" style="width:100%;padding:12px;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.15);border-radius:8px;color:#fff;font-size:1rem;box-sizing:border-box;"></div>' +
            '<div style="margin-bottom:20px;"><label style="display:block;color:#94a3b8;margin-bottom:6px;font-size:0.9rem;">Phone *</label>' +
            '<input type="tel" id="payPhone" required placeholder="10-digit number" maxlength="10" pattern="[0-9]{10}" style="width:100%;padding:12px;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.15);border-radius:8px;color:#fff;font-size:1rem;box-sizing:border-box;"></div>' +
            '<button type="submit" id="paySubmitBtn" style="width:100%;padding:14px;background:linear-gradient(135deg,#a855f7,#6366f1);border:none;border-radius:10px;color:#fff;font-size:1.1rem;font-weight:600;cursor:pointer;">Pay ₹1,499</button>' +
            '</form>' +
            '<p style="text-align:center;color:#64748b;font-size:0.8rem;margin-top:15px;">🔒 Secured by Razorpay</p>' +
            '</div></div>';
        document.body.insertAdjacentHTML('beforeend', formHtml);
    }

    // Process Razorpay payment
    async function processRazorpay(e) {
        e.preventDefault();
        var name = document.getElementById('payName').value.trim();
        var email = document.getElementById('payEmail').value.trim();
        var phone = document.getElementById('payPhone').value.trim();
        var btn = document.getElementById('paySubmitBtn');
        
        if (!/^[0-9]{10}$/.test(phone)) { alert('Please enter valid 10-digit phone'); return; }
        
        btn.disabled = true;
        btn.textContent = 'Processing...';
        
        try {
            var apiUrl = getApiUrl();
            var response = await fetch(apiUrl + '/api/payment/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 149900,
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
                            document.getElementById('razorpayFormModal').remove();
                            alert('✅ Payment Successful!\\n\\nOrder ID: ' + verifyData.payment.orderId + '\\n\\nOur team will contact you within 24 hours.');
                        } else {
                            alert('Payment verification failed. Contact support.');
                        }
                    } catch(err) {
                        alert('Verification error. Please contact support with your payment ID.');
                    }
                },
                modal: { ondismiss: function() { btn.disabled = false; btn.textContent = 'Pay ₹1,499'; } }
            };
            var rzp = new Razorpay(options);
            rzp.on('payment.failed', function(resp) {
                alert('Payment failed: ' + resp.error.description);
                btn.disabled = false;
                btn.textContent = 'Pay ₹1,499';
            });
            rzp.open();
        } catch(err) {
            alert('Error: ' + err.message);
            btn.disabled = false;
            btn.textContent = 'Pay ₹1,499';
        }
    }
    </script>`;

function fixPaymentInPage(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Replace the button
        if (content.includes('CoursePayment.showPaymentModal')) {
            content = content.replace(OLD_PAY_NOW_BUTTON, NEW_PAY_NOW_BUTTON);
            modified = true;
        }
        
        // Replace the script section
        if (content.includes(OLD_SCRIPT)) {
            content = content.replace(OLD_SCRIPT, NEW_SCRIPT);
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            return 'fixed';
        }
        return 'skipped';
    } catch (e) {
        console.error('Error:', e.message);
        return 'error';
    }
}

console.log('🔧 Fixing payment buttons in all courses...\n');
let fixed = 0, skipped = 0;

const items = fs.readdirSync(GENERATED_DIR);
for (const item of items) {
    const itemPath = path.join(GENERATED_DIR, item);
    if (fs.statSync(itemPath).isDirectory()) {
        const indexPath = path.join(itemPath, 'index.html');
        if (fs.existsSync(indexPath)) {
            const result = fixPaymentInPage(indexPath);
            if (result === 'fixed') { fixed++; console.log(`✅ ${item}`); }
            else skipped++;
        }
    }
}

console.log(`\n📊 Fixed: ${fixed}, Skipped: ${skipped}`);
