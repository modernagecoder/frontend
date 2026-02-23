/**
 * Razorpay Payment Integration
 * Modern Age Coders - Payment Handler
 */

// Configuration - Update this with your backend URL
const PAYMENT_CONFIG = {
  // Backend API URL
  API_URL: 'https://backend-modernagecoders.vercel.app',

  // Company details for Razorpay checkout
  COMPANY_NAME: 'Modern Age Coders',
  COMPANY_LOGO: '/images/logo.webp', // Your logo path
  THEME_COLOR: '#3399cc', // Your brand color

  // Currency
  CURRENCY: 'INR'
};

/**
 * Initialize Razorpay Payment
 * @param {Object} options - Payment options
 * @param {number} options.amount - Amount in rupees
 * @param {string} options.productType - Type: 'course', 'workshop', 'corporate_training', 'other'
 * @param {string} options.productName - Name of the product/course
 * @param {string} options.productId - Optional product ID
 * @param {string} options.customerName - Customer name
 * @param {string} options.customerEmail - Customer email
 * @param {string} options.customerPhone - Customer phone (10 digits)
 * @param {Function} options.onSuccess - Callback on successful payment
 * @param {Function} options.onFailure - Callback on failed payment
 * @param {Function} options.onDismiss - Callback when checkout is closed
 */
async function initiatePayment(options) {
  const {
    amount,
    productType,
    productName,
    productId = null,
    customerName,
    customerEmail,
    customerPhone,
    onSuccess = () => { },
    onFailure = () => { },
    onDismiss = () => { }
  } = options;

  // Validate required fields
  if (!amount || !productType || !productName || !customerName || !customerEmail || !customerPhone) {
    console.error('Missing required payment fields');
    onFailure({ error: 'Missing required fields' });
    return;
  }

  // Validate phone number
  const cleanPhone = customerPhone.replace(/\s/g, '');
  if (!/^[0-9]{10}$/.test(cleanPhone)) {
    console.error('Invalid phone number');
    onFailure({ error: 'Please enter a valid 10-digit phone number' });
    return;
  }

  // Validate email
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(customerEmail)) {
    console.error('Invalid email');
    onFailure({ error: 'Please enter a valid email address' });
    return;
  }

  try {
    // Show loading state
    showPaymentLoading(true);

    // Step 1: Create order on backend
    const orderResponse = await fetch(`${PAYMENT_CONFIG.API_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        productType,
        productName,
        productId,
        customerName,
        customerEmail,
        customerPhone: cleanPhone
      })
    });

    const orderData = await orderResponse.json();

    if (!orderData.success) {
      throw new Error(orderData.error || 'Failed to create order');
    }

    showPaymentLoading(false);

    // Step 2: Open Razorpay checkout
    const razorpayOptions = {
      key: orderData.key,
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      name: PAYMENT_CONFIG.COMPANY_NAME,
      description: productName,
      image: PAYMENT_CONFIG.COMPANY_LOGO,
      order_id: orderData.order.id,
      prefill: {
        name: customerName,
        email: customerEmail,
        contact: cleanPhone
      },
      notes: {
        productType: productType,
        productName: productName
      },
      theme: {
        color: PAYMENT_CONFIG.THEME_COLOR
      },
      handler: async function (response) {
        // Payment successful - verify on backend
        await verifyPayment(response, orderData.order.orderId, onSuccess, onFailure);
      },
      modal: {
        ondismiss: function () {
          console.log('Payment checkout closed');
          onDismiss();
        },
        escape: true,
        animation: true
      }
    };

    // Check if Razorpay is loaded
    if (typeof Razorpay === 'undefined') {
      throw new Error('Razorpay SDK not loaded. Please check your internet connection.');
    }

    const razorpay = new Razorpay(razorpayOptions);

    // Handle payment failure
    razorpay.on('payment.failed', function (response) {
      console.error('Payment failed:', response.error);
      onFailure({
        error: response.error.description || 'Payment failed',
        code: response.error.code,
        reason: response.error.reason
      });
    });

    razorpay.open();

  } catch (error) {
    showPaymentLoading(false);
    console.error('Payment initiation error:', error);
    onFailure({ error: error.message });
  }
}

/**
 * Verify payment on backend
 */
async function verifyPayment(razorpayResponse, orderId, onSuccess, onFailure) {
  try {
    showPaymentLoading(true, 'Verifying payment...');

    const verifyResponse = await fetch(`${PAYMENT_CONFIG.API_URL}/api/payment/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        razorpay_order_id: razorpayResponse.razorpay_order_id,
        razorpay_payment_id: razorpayResponse.razorpay_payment_id,
        razorpay_signature: razorpayResponse.razorpay_signature
      })
    });

    const verifyData = await verifyResponse.json();

    showPaymentLoading(false);

    if (verifyData.success) {
      console.log('Payment verified successfully');
      onSuccess({
        orderId: verifyData.payment.orderId,
        paymentId: razorpayResponse.razorpay_payment_id,
        amount: verifyData.payment.amount,
        productName: verifyData.payment.productName
      });
    } else {
      throw new Error(verifyData.error || 'Payment verification failed');
    }

  } catch (error) {
    showPaymentLoading(false);
    console.error('Payment verification error:', error);
    onFailure({ error: error.message });
  }
}

/**
 * Check payment status
 */
async function checkPaymentStatus(orderId) {
  try {
    const response = await fetch(`${PAYMENT_CONFIG.API_URL}/api/payment/status/${orderId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Check payment status error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Show/hide loading overlay
 */
function showPaymentLoading(show, message = 'Processing payment...') {
  let overlay = document.getElementById('payment-loading-overlay');

  if (show) {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'payment-loading-overlay';
      overlay.innerHTML = `
        <div class="payment-loading-content">
          <div class="payment-spinner"></div>
          <p class="payment-loading-text">${message}</p>
        </div>
      `;
      document.body.appendChild(overlay);
    } else {
      overlay.querySelector('.payment-loading-text').textContent = message;
    }
    overlay.style.display = 'flex';
  } else if (overlay) {
    overlay.style.display = 'none';
  }
}

/**
 * Show payment success message
 */
function showPaymentSuccess(paymentData) {
  const successHtml = `
    <div class="payment-success-modal" id="payment-success-modal">
      <div class="payment-success-content">
        <div class="payment-success-icon">✓</div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
        <div class="payment-details">
          <p><strong>Order ID:</strong> ${paymentData.orderId}</p>
          <p><strong>Amount:</strong> ₹${paymentData.amount}</p>
          <p><strong>Product:</strong> ${paymentData.productName}</p>
        </div>
        <p class="payment-note">A confirmation email has been sent to your email address.</p>
        <button onclick="closePaymentSuccessModal()" class="payment-success-btn">Continue</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', successHtml);
}

function closePaymentSuccessModal() {
  const modal = document.getElementById('payment-success-modal');
  if (modal) {
    modal.remove();
  }
}

/**
 * Show payment failure message
 */
function showPaymentFailure(error) {
  alert(`Payment Failed: ${error.error || 'Something went wrong. Please try again.'}`);
}

// Add CSS styles for payment UI
const paymentStyles = `
<style>
#payment-loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.payment-loading-content {
  text-align: center;
  color: white;
}

.payment-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3399cc;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.payment-loading-text {
  font-size: 18px;
  margin: 0;
}

.payment-success-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.payment-success-content {
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.payment-success-icon {
  width: 60px;
  height: 60px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 0 auto 20px;
}

.payment-success-content h2 {
  color: #4CAF50;
  margin-bottom: 10px;
}

.payment-details {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  margin: 20px 0;
  text-align: left;
}

.payment-details p {
  margin: 5px 0;
}

.payment-note {
  color: #666;
  font-size: 14px;
}

.payment-success-btn {
  background: #3399cc;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
}

.payment-success-btn:hover {
  background: #2980b9;
}
</style>
`;

// Inject styles when script loads
document.head.insertAdjacentHTML('beforeend', paymentStyles);

// Export functions for use
window.initiatePayment = initiatePayment;
window.checkPaymentStatus = checkPaymentStatus;
window.showPaymentSuccess = showPaymentSuccess;
window.showPaymentFailure = showPaymentFailure;
