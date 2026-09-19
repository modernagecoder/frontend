// Run from frontend/: node scripts/test-demo-choice.js
// jsdom smoke test for src/js/demo-choice.js: the fetch hook, the two choices,
// the price by region, opt-out, and the thank-you inline + dialog pairing.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const SRC = fs.readFileSync(path.join(__dirname, '..', 'src', 'js', 'demo-choice.js'), 'utf8');
const LEAD_ID = '64f1c0ffee0000000000abcd';

function makeWindow(opts) {
  opts = opts || {};
  const dom = new JSDOM('<!doctype html><html><head>' + (opts.head || '') + '</head><body>' + (opts.body || '') + '</body></html>', {
    url: opts.url || 'https://learn.modernagecoders.com/coding-classes-in-kolkata',
    pretendToBeVisual: true,
    runScripts: 'outside-only',
    virtualConsole: new VirtualConsole() // swallow jsdom's "scrollTo not implemented"
  });
  const w = dom.window;
  w.__calls = [];
  w.fetch = function (input, init) {
    w.__calls.push({ input, init });
    const reply = opts.reply || { ok: true, status: 201, body: { success: true, contactId: LEAD_ID } };
    return Promise.resolve({ ok: reply.ok, status: reply.status, clone() { return this; }, json() { return Promise.resolve(reply.body); } });
  };
  if (opts.isIndian !== undefined) w.__MAC_IS_INDIAN = opts.isIndian;
  w.eval(SRC);
  return w;
}
const tick = (ms) => new Promise((r) => setTimeout(r, ms));

(async function run() {
  // 1. A successful lead POST opens the dialog; paid card comes first and is the loud one.
  {
    const w = makeWindow({ isIndian: true });
    await w.fetch('https://backend-modernagecoders.vercel.app/api/contact/submit', { method: 'POST', body: JSON.stringify({ name: 'Asha Rao', email: 'asha@example.com', contact: '9876543210', countryCode: '+91', countryIso: 'IN', countryName: 'India' }) });
    await tick(500);
    const ov = w.document.querySelector('.mac-dc-overlay');
    assert.ok(ov, 'dialog opened');
    assert.ok(/Your request is submitted/.test(ov.textContent));
    assert.ok(/small live batches and personal 1-on-1 classes/.test(ov.textContent), 'sub mentions batches and 1-on-1');
    const cards = ov.querySelectorAll('.mac-dc-grid > .mac-dc-opt');
    assert.ok(cards[0].classList.contains('mac-dc-opt--paid'), 'paid card is first');
    assert.ok(/Pay ₹499 and confirm my slot/.test(cards[0].textContent), 'paid button wording with rupee price');
    assert.ok(/guaranteed/i.test(cards[0].textContent));
    assert.ok(/No guaranteed slot/i.test(cards[1].textContent), 'free card carries the warning');
    assert.ok(/Join the waiting list anyway/.test(cards[1].textContent));
    assert.ok(!/\$10/.test(ov.textContent), 'no dollar price shown in India');

    // Free choice: submitted to the server, confirmation offers the paid demo again.
    ov.querySelector('[data-action="free"]').click();
    await tick(20);
    const panel = ov.querySelector('.mac-dc-panel');
    assert.ok(/Response submitted/.test(panel.textContent) && /waiting list/i.test(panel.textContent));
    assert.ok(/Pay ₹499 and confirm my slot/.test(panel.textContent), 'waiting-list panel upsells the paid demo');
    const call = w.__calls.find((c) => /demo-choice/.test(String(c.input)));
    assert.deepStrictEqual(JSON.parse(call.init.body), { leadId: LEAD_ID, leadKind: 'contact', choice: 'free' });
    ov.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
    assert.ok(w.document.querySelector('.mac-dc-overlay'), 'background click does not close');

    // From the waiting-list panel straight into the payment form, prefilled.
    panel.querySelector('[data-action="paid"]').click();
    const form = ov.querySelector('form.mac-dc-form');
    assert.ok(form, 'payment form opens from the waiting-list panel');
    assert.strictEqual(form.querySelector('#macDcName').value, 'Asha Rao');
    assert.strictEqual(form.querySelector('#macDcPhone').value, '9876543210');
    const days = form.querySelectorAll('.mac-dc-chips:not(.mac-dc-chips--times) .mac-dc-chip');
    days[days.length - 1].click();
    form.querySelectorAll('.mac-dc-chips--times .mac-dc-chip')[2].click();
    assert.ok(/^[A-Z][a-z]{2}, \d{1,2} [A-Z][a-z]{2}, \d{2}:\d{2} [ap]m IST/.test(form.querySelector('#macDcSlot').value), 'slot format');

    w.document.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape' }));
    assert.ok(!w.document.querySelector('.mac-dc-overlay'), 'Escape closes');
    assert.strictEqual(w.document.body.style.position, '', 'scroll lock released');
  }

  // 2. Outside India: dollars only, and the order carries the right amount.
  {
    const w = makeWindow({ isIndian: false });
    await w.fetch('/api/callback/request', { method: 'POST', body: JSON.stringify({ phone: '501234567', countryCode: '+971', countryIso: 'AE', countryName: 'United Arab Emirates' }) });
    await tick(500);
    const ov = w.document.querySelector('.mac-dc-overlay');
    assert.ok(/Pay \$10 and confirm my slot/.test(ov.textContent) && !/₹499/.test(ov.textContent));
    ov.querySelector('[data-action="paid"]').click();
    const form = ov.querySelector('form.mac-dc-form');
    form.querySelector('#macDcName').value = 'Omar';
    form.querySelector('#macDcEmail').value = 'omar@example.com';
    w.Razorpay = function () { this.on = function () {}; this.open = function () {}; };
    form.dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
    await tick(50);
    const sent = JSON.parse(w.__calls.find((c) => /create-order/.test(String(c.input))).init.body);
    assert.strictEqual(sent.amount, 10);
    assert.strictEqual(sent.currency, 'USD');
    assert.strictEqual(sent.productType, 'demo');
    assert.strictEqual(sent.notes.leadKind, 'callback');
  }

  // 3. Failed POST, non-lead request, opted-out page, and a redirecting page show nothing.
  {
    let w = makeWindow({ reply: { ok: false, status: 400, body: { success: false } } });
    await w.fetch('/api/contact/submit', { method: 'POST', body: '{}' }); await tick(500);
    assert.ok(!w.document.querySelector('.mac-dc-overlay'), 'no dialog on failure');
    w = makeWindow();
    await w.fetch('/api/payment/create-order', { method: 'POST', body: '{}' }); await tick(500);
    assert.ok(!w.document.querySelector('.mac-dc-overlay'), 'non-lead ignored');
    w = makeWindow({ head: '<meta name="mac-demo-choice" content="off">' });
    await w.fetch('/api/contact/submit', { method: 'POST', body: '{}' }); await tick(500);
    assert.ok(!w.document.querySelector('.mac-dc-overlay'), 'opt-out respected');
    w = makeWindow();
    await w.fetch('/api/contact/submit', { method: 'POST', body: '{}' });
    w.dispatchEvent(new w.Event('beforeunload')); await tick(500);
    assert.ok(!w.document.querySelector('.mac-dc-overlay'), 'no flash while redirecting');
  }

  // 4. Thank-you page: inline card plus dialog, choice mirrored, preview switch works.
  {
    const w = makeWindow({ url: 'https://learn.modernagecoders.com/thank-you?src=book-demo&lid=' + LEAD_ID, body: '<div data-mac-demo-choice="inline"></div>', isIndian: true });
    await tick(20);
    const inline = w.document.querySelector('[data-mac-demo-choice="inline"] .mac-dc');
    const ov = w.document.querySelector('.mac-dc-overlay');
    assert.ok(inline && ov, 'inline card and dialog both present');
    ov.querySelector('[data-action="free"]').click(); await tick(20);
    assert.ok(/waiting list/i.test(inline.querySelector('.mac-dc-panel').textContent), 'inline mirrors the dialog');

    const w2 = makeWindow({ url: 'https://learn.modernagecoders.com/thank-you?test=intl', body: '<div data-mac-demo-choice="inline"></div>', isIndian: true });
    await tick(20);
    assert.ok(/\$10/.test(w2.document.querySelector('.mac-dc-overlay .mac-dc-opt--paid').textContent), '?test=intl shows dollars');
  }

  // 5. Direct booking from a content page (MACDemoChoice.book): straight to the
  //    payment form, no "request submitted" claim, and dollars outside India
  //    even though the country picker starts on +91.
  {
    const w = makeWindow({ url: 'https://learn.modernagecoders.com/priority-demo', isIndian: false });
    w.MACDemoChoice.book();
    const ov = w.document.querySelector('.mac-dc-overlay');
    const form = ov.querySelector('form.mac-dc-form');
    assert.ok(form, 'book() opens on the payment form');
    assert.ok(!ov.querySelector('.mac-dc-eyebrow'), 'no "request submitted" eyebrow without a request');
    assert.ok(/Pay \$10/.test(form.querySelector('[data-dc-pay]').textContent), 'overseas visitor sees $10 with the default +91 code');
    form.querySelector('#macDcName').value = 'Liam';
    form.querySelector('#macDcEmail').value = 'liam@example.com';
    form.querySelector('#macDcPhone').value = '9876543210';
    w.Razorpay = function () { this.on = function () {}; this.open = function () {}; };
    form.dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
    await tick(50);
    const sent = JSON.parse(w.__calls.find((c) => /create-order/.test(String(c.input))).init.body);
    assert.strictEqual(sent.amount, 10, 'charged in dollars outside India');
    assert.strictEqual(sent.currency, 'USD');
    assert.ok(!sent.notes.leadId, 'no lead id in direct mode');

    // In India with an Indian number: rupees. In India with a foreign number: dollars.
    const wi = makeWindow({ url: 'https://learn.modernagecoders.com/priority-demo', isIndian: true });
    wi.MACDemoChoice.book();
    const fi = wi.document.querySelector('.mac-dc-overlay form.mac-dc-form');
    assert.ok(/Pay ₹499/.test(fi.querySelector('[data-dc-pay]').textContent), 'India sees rupees');
    const ph = fi.querySelector('#macDcPhone');
    ph.dataset.countryIso = 'AE'; ph.dataset.countryDial = '+971';
    ph.dispatchEvent(new wi.Event('countrycodechange', { bubbles: true }));
    assert.ok(/Pay \$10/.test(fi.querySelector('[data-dc-pay]').textContent), 'foreign number pays dollars');

    // The free link in direct mode has no lead to queue, so it is not recorded.
    assert.ok(!wi.__calls.find((c) => /demo-choice/.test(String(c.input))), 'nothing recorded in direct mode');
  }

  console.log('demo-choice: all checks pass');
})().catch((e) => { console.error(e); process.exit(1); });
