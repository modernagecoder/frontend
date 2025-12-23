/**
 * Callback Modal - Global Functions
 * Must be loaded before nav component
 */

// Global functions for callback modal
window.openCallbackModal = function() {
    console.log('Opening callback modal');
    var modal = document.getElementById('callbackModalOverlay');
    var form = document.getElementById('callbackForm');
    var success = document.getElementById('callbackSuccessMsg');
    var phone = document.getElementById('callbackPhoneInput');
    
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        if (form) form.style.display = 'flex';
        if (success) success.style.display = 'none';
        if (phone) { phone.value = ''; phone.focus(); }
    } else {
        console.error('Modal not found!');
    }
};

window.closeCallbackModal = function() {
    console.log('Closing callback modal');
    var modal = document.getElementById('callbackModalOverlay');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};

window.submitCallback = function(e) {
    e.preventDefault();
    console.log('Submitting callback');
    
    var phoneInput = document.getElementById('callbackPhoneInput');
    var phone = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
    var btn = document.getElementById('callbackSubmitBtn');
    var form = document.getElementById('callbackForm');
    var success = document.getElementById('callbackSuccessMsg');
    
    if (phone.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending...';
    }
    
    var API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
        ? 'http://localhost:5000' : 'https://backend-modernagecoders.vercel.app';
    
    fetch(API_URL + '/api/callback/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone })
    })
    .then(function(response) { return response.json(); })
    .then(function(data) {
        console.log('Response:', data);
        if (data.success) {
            if (form) form.style.display = 'none';
            if (success) success.style.display = 'block';
            setTimeout(window.closeCallbackModal, 3000);
        } else {
            alert(data.message || 'Something went wrong. Please try again.');
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
        alert('Network error. Please try again.');
    })
    .finally(function() {
        if (btn) {
            btn.disabled = false;
            btn.textContent = 'Call Me Back';
        }
    });
};

// Event listeners
document.addEventListener('click', function(e) {
    var modal = document.getElementById('callbackModalOverlay');
    if (e.target === modal) {
        window.closeCallbackModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        window.closeCallbackModal();
    }
});

document.addEventListener('input', function(e) {
    if (e.target && e.target.id === 'callbackPhoneInput') {
        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    }
});

console.log('✅ Callback modal script loaded');
