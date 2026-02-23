/**
 * COMPLETE PAYMENT FIX - Working Razorpay integration
 * This replaces all payment scripts with a fully functional version
 */
const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');

// Complete working payment script
const COMPLETE_PAYMENT_SCRIPT = `    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script>
    // Modal functions
    function openPaymentModal() { 
        document.getElementById('paymentChoiceModal').style.display = 'flex'; 
    }
    function closePaymentModal() { 
        document.getElementById('paymentChoiceModal').style.display = 'none'; 
    }
    
    // Click outside to close
    document.addEventListener('DOMContentLoaded', function() {
        var modal = document.getElementById('paymentChoiceModal');
        if (modal) {
            modal.addEventListener('click', function(e) { 
                if(e.target === this) closePaymentModal(); 
            });
        }
        
        // Hook enroll buttons
        document.querySelectorAll('.enroll-btn, [href="#enroll"], a[href="#"]').forEach(function(btn) {
            if(btn.textContent.toLowerCase().includes('enroll')) {
                btn.addEventListener('click', function(e) { 
                    e.preventDefault(); 
                    openPaymentModal(); 
                });
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
            '<p style="color:#94a3b8;font-size:0.9rem;margin:0;">' + courseName + '</p>' +
            '</div>' +
            '<div style="padding:20px 25px 25px;">' +
            '<div style="background:linear-gradient(135deg,rgba(168,85,247,0.12),rgba(99,102,241,0.08));border:1px solid rgba(168,85,247,0.25);border-radius:14px;padding:16px;margin-bottom:18px;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">' +
            '<span style="color:#cbd5e1;font-size:0.95rem;">Group Classes (2/week)</span>' +
            '<span style="color:#a855f7;font-size:1.5rem;font-weight:800;">₹1,499</span>' +
            '</div>' +
            '<div style="background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);border-radius:8px;padding:10px 12px;">' +
            '<p style="color:#86efac;font-size:0.82rem;margin:0;line-height:1.5;"><strong style="color:#4ade80;">💡 One-time payment for first month.</strong><br>Future payments will be collected by our team directly.</p>' +
            '</div></div>' +
            '<form id="razorpayPayForm" onsubmit="processRazorpay(event)">' +
            '<div style="margin-bottom:14px;"><label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">Full Name *</label>' +
            '<input type="text" id="payName" required placeholder="Enter your full name" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor=\\'#a855f7\\'" onblur="this.style.borderColor=\\'rgba(255,255,255,0.12)\\'"></div>' +
            '<div style="margin-bottom:14px;"><label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">Email Address *</label>' +
            '<input type="email" id="payEmail" required placeholder="your@email.com" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor=\\'#a855f7\\'" onblur="this.style.borderColor=\\'rgba(255,255,255,0.12)\\'"></div>' +
            '<div style="margin-bottom:18px;"><label style="display:block;color:#94a3b8;margin-bottom:5px;font-size:0.85rem;font-weight:500;">WhatsApp Number *</label>' +
            '<input type="tel" id="payPhone" required placeholder="10-digit mobile number" maxlength="10" pattern="[0-9]{10}" style="width:100%;padding:13px 15px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:0.95rem;box-sizing:border-box;transition:border 0.2s;" onfocus="this.style.borderColor=\\'#a855f7\\'" onblur="this.style.borderColor=\\'rgba(255,255,255,0.12)\\'"></div>' +
            '<button type="submit" id="paySubmitBtn" style="width:100%;padding:15px;background:linear-gradient(135deg,#a855f7,#6366f1);border:none;border-radius:12px;color:#fff;font-size:1.1rem;font-weight:700;cursor:pointer;transition:all 0.3s;box-shadow:0 8px 25px rgba(168,85,247,0.35);" onmouseover="this.style.transform=\\'translateY(-2px)\\';this.style.boxShadow=\\'0 12px 35px rgba(168,85,247,0.45)\\'" onmouseout="this.style.transform=\\'translateY(0)\\';this.style.boxShadow=\\'0 8px 25px rgba(168,85,247,0.35)\\'">💳 Pay ₹1,499 Now</button>' +
            '</form>' +
            '<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:16px;padding-top:14px;border-top:1px solid rgba(255,255,255,0.06);">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>' +
            '<span style="color:#64748b;font-size:0.8rem;">Secured by <strong style="color:#94a3b8;">Razorpay</strong></span>' +
            '<span style="color:#475569;margin:0 4px;">|</span>' +
            '<span style="color:#64748b;font-size:0.8rem;">256-bit SSL</span>' +
            '</div></div></div></div>';
        
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
        
        if (!/^[0-9]{10}$/.test(phone)) { 
            alert('Please enter valid 10-digit phone number'); 
            return; 
        }
        
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
            
            if (!data.success) {
                throw new Error(data.error || 'Order creation failed');
            }
            
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
                modal: {
                    ondismiss: function() {
                        btn.disabled = false;
                        btn.textContent = '💳 Pay ₹1,499 Now';
                    }
                }
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

function fixPaymentInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Find the old script section (from Razorpay script to </body>)
        const scriptStart = content.indexOf('<script src="https://checkout.razorpay.com/v1/checkout.js"></script>');
        const bodyEnd = content.lastIndexOf('</body>');

        if (scriptStart === -1 || bodyEnd === -1) {
            return 'no-script';
        }

        // Replace everything between Razorpay script and </body>
        content = content.substring(0, scriptStart) + COMPLETE_PAYMENT_SCRIPT + '\n\n</body>\n</html>';

        fs.writeFileSync(filePath, content, 'utf8');
        return 'fixed';
    } catch (e) {
        console.error('Error:', e.message);
        return 'error';
    }
}

console.log('🔧 Complete payment fix - Working Razorpay integration...\n');
let fixed = 0, skipped = 0, errors = 0;

const items = fs.readdirSync(GENERATED_DIR);
for (const item of items) {
    const itemPath = path.join(GENERATED_DIR, item);
    if (fs.statSync(itemPath).isDirectory()) {
        const indexPath = path.join(itemPath, 'index.html');
        if (fs.existsSync(indexPath)) {
            const result = fixPaymentInFile(indexPath);
            if (result === 'fixed') {
                fixed++;
                console.log(`✅ ${item}`);
            } else if (result === 'error') {
                errors++;
            } else {
                skipped++;
            }
        }
    }
}

console.log(`\n📊 Fixed: ${fixed}, Skipped: ${skipped}, Errors: ${errors}`);
console.log('\n✅ Payment system ready with LIVE Razorpay keys!');
