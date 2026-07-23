/* biz-lead-form.js
   Shared handler for the B2B "Discuss your requirement" forms.
   Posts to the SAME backend the site's contact form uses (verified 201),
   so business leads land in the owner's existing inbox.

   Form markup contract:
     <form class="lead__form" id="leadForm"
           data-service="Custom Software Development"
           data-src="for-business-custom-software"> ... </form>
   Fields (by name): name, email, phone, company, message
*/
(function () {
  'use strict';

  var API_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'http://localhost:5000'
    : 'https://backend-modernagecoders.vercel.app';

  var form = document.getElementById('leadForm');
  if (!form) return;

  function $(sel) { return form.querySelector(sel); }
  function val(name) {
    var el = form.querySelector('[name="' + name + '"]');
    return el ? el.value.trim() : '';
  }
  function setErr(name, msg) {
    var e = form.querySelector('[data-err="' + name + '"]');
    if (e) e.textContent = msg || '';
  }
  function feedback(kind, msg) {
    var f = $('.lead__feedback');
    if (!f) return;
    f.className = 'lead__feedback ' + (kind === 'ok' ? 'is-ok' : 'is-error');
    f.textContent = msg;
  }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    var name = val('name');
    var email = val('email');
    var phone = val('phone');
    var company = val('company');
    var message = val('message');

    var ok = true;
    setErr('name', ''); setErr('email', ''); setErr('phone', ''); setErr('message', '');

    if (name.length < 2) { setErr('name', 'Please enter your name'); ok = false; }
    if (!validEmail(email)) { setErr('email', 'Please enter a valid email'); ok = false; }
    var digits = phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) { setErr('phone', 'Please enter a valid phone number'); ok = false; }
    if (message.length < 10) { setErr('message', 'Tell us a little about your requirement (10+ characters)'); ok = false; }
    if (!ok) return;

    var service = form.getAttribute('data-service') || 'Business enquiry';
    var src = form.getAttribute('data-src') || 'for-business';

    // The backend requires the `contact` field to be exactly 10 digits. That rule
    // is India shaped, but our leads are worldwide, so we never let it drop a lead:
    // the REAL phone the visitor typed always travels in the message body (which is
    // not validated), and `contact` carries a best-effort 10-digit form.
    //   - exactly 10 digits: send as is
    //   - more than 10 (country code included): keep the last 10 (the local number)
    //   - fewer than 10: left-pad so the backend still accepts it
    var contact10;
    if (digits.length === 10) { contact10 = digits; }
    else if (digits.length > 10) { contact10 = digits.slice(-10); }
    else { contact10 = ('0000000000' + digits).slice(-10); }

    // Fold the B2B context into the message so it lands with the lead.
    var composed =
      '[B2B ENQUIRY] Service: ' + service + '\n' +
      'Company: ' + (company || 'Not provided') + '\n' +
      'Phone (as entered): ' + phone + '\n' +
      'Source page: ' + src + '\n\n' +
      message;

    var payload = {
      name: name,
      email: email,
      contact: contact10,
      countryCode: '',
      countryIso: '',
      countryName: '',
      message: composed
    };

    var btn = $('.lead__submit');
    var btnText = btn ? btn.querySelector('.btn-text') : null;
    var original = btnText ? btnText.textContent : '';
    if (btn) { btn.disabled = true; }
    if (btnText) { btnText.textContent = 'Sending...'; }
    feedback('', '');
    $('.lead__feedback').className = 'lead__feedback';

    fetch(API_BASE + '/api/contact/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) { return res.json().then(function (d) { return { ok: res.ok, data: d }; }); })
      .then(function (r) {
        if (r.ok) {
          if (typeof fbq === 'function') {
            fbq('track', 'Lead', { content_name: service, content_category: 'B2B Services' });
          }
          window.location.href = '/thank-you?src=' + encodeURIComponent(src);
        } else {
          feedback('error', (r.data && r.data.message) || 'Something went wrong. Please try WhatsApp or email.');
          if (btn) { btn.disabled = false; }
          if (btnText) { btnText.textContent = original; }
        }
      })
      .catch(function () {
        feedback('error', 'Network error. Please reach us on WhatsApp at +91 91233 66161 or contact@modernagecoders.com.');
        if (btn) { btn.disabled = false; }
        if (btnText) { btnText.textContent = original; }
      });
  });
})();
