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

        // Build the optional demo-slot picker fresh each time the modal opens.
        // Doing it here rather than on page load means the day chips always
        // start from tomorrow even on a tab left open overnight.
        if (window.__macResetCallbackSlotPicker) {
            try { window.__macResetCallbackSlotPicker(); } catch (e) { }
        }
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
    var slotEl = document.getElementById('callbackDemoSlot');
    var btn = document.getElementById('callbackSubmitBtn');
    var form = document.getElementById('callbackForm');
    var success = document.getElementById('callbackSuccessMsg');

    var ccInfo = (window.MACCountryCode && window.MACCountryCode.read)
        ? window.MACCountryCode.read(phoneInput)
        : { dial: '+91', iso: 'IN', name: 'India' };

    // Validate against the same per-country length table the rest of the site
    // uses, rather than a local copy of the rules. The hard-coded version here
    // only knew "India is 10, everywhere else is 7-15", which accepted an
    // eleven-digit UAE number that no phone can ring.
    if (window.MACPhone && window.MACPhone.isValid) {
        if (!window.MACPhone.isValid(phone, ccInfo.iso)) {
            alert(window.MACPhone.hint(ccInfo.iso));
            return;
        }
    } else {
        var isIndia = ccInfo.iso === 'IN';
        if ((isIndia && phone.length !== 10) || (!isIndia && (phone.length < 7 || phone.length > 15))) {
            alert(isIndia
                ? 'Please enter a valid 10-digit phone number'
                : 'Please enter a valid phone number (7-15 digits)');
            return;
        }
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
        body: JSON.stringify({
            phone: phone,
            countryCode: ccInfo.dial,
            countryIso: ccInfo.iso,
            countryName: ccInfo.name,
            demoSlot: slotEl && slotEl.value ? slotEl.value : undefined
        })
    })
    .then(function(response) { return response.json(); })
    .then(function(data) {
        console.log('Response:', data);
        if (data.success) {
            // Fire Meta Pixel Contact event
            if (typeof fbq === 'function') {
                fbq('track', 'Contact');
            }
            // Hand off to the thank-you page
            window.location.href = '/thank-you?src=callback';
            return;
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
    if (!e.target || e.target.id !== 'callbackPhoneInput') return;

    var iso = e.target.dataset.countryIso || 'IN';
    var digits = e.target.value.replace(/[^0-9]/g, '');

    // Someone who types their country code as well as picking it from the
    // dropdown used to have the overflow silently chopped off the end, which
    // stored a real-looking number that rang nothing. Take the country code
    // off the front instead - but only when the number is the wrong length as
    // it stands, so a ten-digit Indian mobile beginning 91 is never touched.
    //
    // The length test is deliberately NOT MACPhone.isValid: that function is
    // lenient by design and already accepts a number carrying its own country
    // code, so using it here would report "8613912345678" as fine and the
    // duplicated 86 would survive all the way into the database.
    if (window.MACPhone && window.MACPhone.rangeFor) {
        var range = window.MACPhone.rangeFor(iso);
        var fits = function (v) { return v.length >= range[0] && v.length <= range[1]; };
        if (!fits(digits)) {
            var dial = (e.target.dataset.countryDial || '').replace(/\D/g, '');
            if (dial && digits.indexOf(dial) === 0 && fits(digits.slice(dial.length))) {
                digits = digits.slice(dial.length);
            } else if (digits.charAt(0) === '0' && fits(digits.replace(/^0+/, ''))) {
                // The trunk zero people use inside their own country.
                digits = digits.replace(/^0+/, '');
            }
        }
    }

    // Final cap, generous enough that the step above always has the digits it
    // needs to work with.
    var max = iso === 'IN' ? 10 : 15;
    e.target.value = digits.slice(0, max);
});

console.log('✅ Callback modal script loaded');
