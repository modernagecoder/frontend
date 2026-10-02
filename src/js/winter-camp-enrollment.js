/**
 * Winter Camp Enrollment Modal
 * Modern Age Coders: Winter Coding Camp 2026
 */

const WinterCampEnrollment = {
    courseName: 'Winter Coding Camp',

    // Fee comes from pricing/pricing.config.jsonc. See the same change in
    // summer-camp-enrollment.js: these two files used to be a third
    // independent authority on what a customer is charged.
    get coursePrice() { return this.getCoursePrice(); },

    isIndian() {
        return window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
    },
    campPrice() {
        var data = window.MAC_PRICING;
        if (!data || !data.plans.camps) return null;
        if (this.isIndian()) {
            return { amount: data.plans.camps.india.oneTime, currency: 'INR', symbol: '₹' };
        }
        // Flat model: everyone outside India pays the same USD camp fee.
        var amount = data.plans.camps.international.oneTime;
        if (amount === null || amount === undefined) return null;
        return { amount: amount, currency: 'USD', symbol: '$' };
    },
    getCoursePrice() {
        var p = this.campPrice();
        if (!p) { console.error('[WinterCamp] No camp price available; refusing to guess.'); return null; }
        return p.amount;
    },
    getCourseCurrency() {
        var p = this.campPrice();
        return p ? p.currency : (this.isIndian() ? 'INR' : 'USD');
    },
    getPriceDisplay() {
        var p = this.campPrice();
        if (!p) return '';
        return p.symbol + new Intl.NumberFormat(p.currency === 'INR' ? 'en-IN' : 'en-US', {
            minimumFractionDigits: Number.isInteger(p.amount) ? 0 : 2,
            maximumFractionDigits: Number.isInteger(p.amount) ? 0 : 2
        }).format(p.amount);
    },

    getApiUrl() {
        const isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname)
            || window.location.protocol === 'file:';
        return isLocal ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
    },

    init() {
        const path = window.location.pathname;
        if (path.includes('kids')) {
            this.courseName = 'Winter Coding Camp: Kids Track (Ages 6–11)';
        } else if (path.includes('teens')) {
            this.courseName = 'Winter Coding Camp, Teens Track (Ages 12–17)';
        } else if (path.includes('adults')) {
            this.courseName = 'Winter Coding Camp: Adults Track (18+)';
        }
        this.setupEnrollButtons();
        this.addModalStyles();
    },

    setupEnrollButtons() {
        document.querySelectorAll('.pricing-card .btn-ice-solid, [data-enroll-winter]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openEnrollmentModal();
            });
        });
    },

    // Enroll Now opens the payment popup (camp-pay-popup.js) directly, for
    // Indian and international visitors alike. The old in-between chooser
    // ("Pay Online" or "WhatsApp Enrollment") was removed on 2 Oct 2026.
    openEnrollmentModal() {
        this.showPaymentForm();
    },

    showPaymentForm() {
        this.closeAll();
        // No price, no popup: never open a form that could charge a guessed amount.
        if (this.getCoursePrice() == null || !window.MACCampPay) {
            alert('We could not load the camp fee. Please refresh the page and try again, or call +91 91233 66161.');
            return;
        }
        window.MACCampPay.open({
            theme: 'winter',
            courseName: this.courseName,
            planName: 'Group camp · 16 live sessions',
            planInfo: 'Small batch, at most 8 learners',
            price: this.getPriceDisplay(),
            pricePer: 'one-time fee',
            isIndian: this.isIndian(),
            onSubmit: (v) => this.processPayment(v)
        });
    },

    async processPayment(v) {
        const pop = window.MACCampPay;
        const { name, email, phone, phoneEl } = v;

        const ccInfo = (window.MACCountryCode && window.MACCountryCode.read)
            ? window.MACCountryCode.read(phoneEl)
            : { dial: '+91', iso: 'IN', name: 'India' };
        const isIndia = ccInfo.iso === 'IN';

        const phoneRegex = isIndia ? /^[0-9]{10}$/ : /^[0-9]{7,15}$/;
        const phoneMsg = isIndia ? 'Please enter a valid 10-digit mobile number.' : 'Please enter a valid phone number (7 to 15 digits).';
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            pop.showError(phoneMsg);
            return;
        }

        try {
            pop.setPaying(true, 'Opening secure checkout…');

            const apiUrl = this.getApiUrl();
            const response = await fetch(`${apiUrl}/api/payment/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: this.getCoursePrice(),
                    currency: this.getCourseCurrency(),
                    productType: 'course',
                    productId: 'winter-coding-camp-2026',
                    productName: this.courseName,
                    customerName: name,
                    customerEmail: email,
                    customerPhone: phone,
                    customerCountryCode: ccInfo.dial,
                    customerCountryIso: ccInfo.iso,
                    customerCountryName: ccInfo.name
                })
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'Failed to create order');
            }

            // Open Razorpay checkout
            const options = {
                key: data.key,
                amount: data.order.amount,
                currency: data.order.currency,
                name: 'Modern Age Coders',
                description: this.courseName,
                order_id: data.order.id,
                prefill: { name, email, contact: phone },
                theme: { color: '#38BDF8' },
                handler: async (response) => {
                    await this.verifyPayment(response, data.order.orderId);
                },
                modal: {
                    ondismiss: () => { pop.setPaying(false); }
                }
            };

            const razorpay = new Razorpay(options);
            razorpay.on('payment.failed', (resp) => {
                pop.setPaying(false);
                pop.showError('The payment did not go through: ' + ((resp && resp.error && resp.error.description) || 'please try again') + '. No money has been taken; you can try again or use another method.');
            });
            razorpay.open();

        } catch (error) {
            console.error('Payment error:', error);
            pop.setPaying(false);
            pop.showError('We could not start the payment (' + error.message + '). Please try again, or call +91 91233 66161.');
        }
    },

    async verifyPayment(razorpayResponse, orderId) {
        const pop = window.MACCampPay;
        pop.setPaying(true, 'Confirming your payment…');
        try {
            const apiUrl = this.getApiUrl();
            const response = await fetch(`${apiUrl}/api/payment/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    razorpay_order_id: razorpayResponse.razorpay_order_id,
                    razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                    razorpay_signature: razorpayResponse.razorpay_signature
                })
            });

            const data = await response.json();

            if (data.success) {
                pop.close();
                this.showSuccess(data.payment);
            } else {
                throw new Error(data.error || 'Verification failed');
            }
        } catch (error) {
            console.error('Verification error:', error);
            // The money may have been taken: keep the popup open with the ID on screen.
            pop.setPaying(true, 'Payment received');
            pop.showError('We received your payment but could not confirm it automatically. Please call +91 91233 66161 with your payment ID: ' +
                (razorpayResponse && razorpayResponse.razorpay_payment_id ? razorpayResponse.razorpay_payment_id : orderId) + '.');
        }
    },

    showSuccess(payment) {
        window.MACCampPay.success({
            theme: 'winter',
            courseName: this.courseName,
            orderId: payment.orderId,
            amount: (this.isIndian() ? '₹' : '$') + payment.amount
        });
    },

    close() { this.closeAll(); },
    closePayment() { this.closeAll(); },
    closeAll() { if (window.MACCampPay) window.MACCampPay.close(); },

    // Styles now live in camp-pay-popup.js; kept so init() and any caller still work.
    addModalStyles() {}
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => WinterCampEnrollment.init());
} else {
    WinterCampEnrollment.init();
}

window.WinterCampEnrollment = WinterCampEnrollment;
