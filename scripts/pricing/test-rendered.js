#!/usr/bin/env node
/**
 * Rendered checks, in a real DOM, under the FLAT pricing model.
 *
 *   node scripts/pricing/test-rendered.js
 *
 * Everything else in this system reads files. This one loads pages in jsdom,
 * runs the site's own pricing JavaScript against them, and reads back what a
 * human would actually see, in both India and International mode.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');

const cfgLib = require('./lib/config');
const stamper = require('./lib/stamp');

const ROOT = cfgLib.REPO_ROOT;
const config = cfgLib.load();

let passed = 0;
const failures = [];

function test(name, fn) {
    try { fn(); passed++; }
    catch (e) { failures.push({ name: name, message: e.message }); }
}

/** Build a DOM and run the two real pricing scripts in load order. */
function render(html, region) {
    const dom = new JSDOM(html, {
        url: 'https://learn.modernagecoders.com/pricing' + (region ? '?test=' + region : ''),
        runScripts: 'outside-only',
        pretendToBeVisual: true
    });
    const win = dom.window;
    if (region === 'india') {
        Object.defineProperty(win.navigator, 'languages', { value: ['en-IN'], configurable: true });
    }
    win.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'pricing-data.generated.js'), 'utf8'));
    win.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'international-pricing.js'), 'utf8'));
    win.document.dispatchEvent(new win.Event('DOMContentLoaded', { bubbles: true }));
    return win;
}

const CARD = [
    '<!doctype html><html><body>',
    '<div class="pricing-tab-content active" id="tab-coding">',
    '  <div class="pricing-card-new">',
    '    <h3>Group Classes</h3>',
    '    <div class="price">',
    '      <span class="price-amount" data-price="coding.india.group" data-price-format="split">',
    '<span class="price-currency">₹</span>1499</span>',
    '    </div>',
    '  </div>',
    '  <div class="pricing-card-new recommended" data-india-only="true">',
    '    <h3>Mini Batch</h3>',
    '    <div class="price">',
    '      <span class="price-amount" data-price="coding.india.miniBatch" data-price-format="split">',
    '<span class="price-currency">₹</span>2999</span>',
    '    </div>',
    '  </div>',
    '</div></body></html>'
].join('\n');

// ─── core behaviour ───

test('an Indian visitor sees the rupee price the config holds', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'india');
    const el = win.document.querySelector('[data-price="coding.india.group"]');
    assert.strictEqual(el.textContent.replace(/\s/g, ''), '₹1499',
        'India view should show ₹1499, saw: ' + el.textContent);
});

test('an international visitor sees the flat USD price, anchor intact', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'intl');
    const el = win.document.querySelector('[data-price="coding.india.group"]');
    assert.ok(el, 'the data-price anchor must survive the runtime swap');
    assert.ok(/\$/.test(el.textContent), 'expected dollars, saw: ' + el.textContent);
    assert.ok(el.textContent.indexOf('100') !== -1, 'group is $100 flat, saw: ' + el.textContent);
    assert.ok(!/₹/.test(el.textContent), 'no rupees for international: ' + el.textContent);
});

test('the India-only Mini Batch is hidden from international visitors', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'intl');
    const card = win.document.querySelector('[data-india-only="true"]');
    assert.strictEqual(card.style.display, 'none',
        'Mini Batch has no USD price and must be hidden');
});

test('the Mini Batch stays visible for Indian visitors at ₹2,999', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'india');
    const card = win.document.querySelector('[data-india-only="true"]');
    assert.notStrictEqual(card.style.display, 'none', 'Mini Batch must be visible in India');
    assert.ok(card.textContent.indexOf('2999') !== -1, 'and priced ₹2,999: ' + card.textContent);
});

test('India overlays: intl-default copy swaps to india-reveal for Indian visitors', function () {
    const html = '<!doctype html><html><body>' +
        '<li><span data-intl-default="true">8 live one-hour classes a month, 2 per week</span>' +
        '<span data-india-reveal="true" hidden>4 live one-hour classes a month, 1 per week</span></li>' +
        '</body></html>';
    const india = render(html, 'india');
    assert.strictEqual(india.document.querySelector('[data-intl-default]').style.display, 'none',
        'the international schedule must be hidden for an Indian visitor');
    assert.strictEqual(india.document.querySelector('[data-india-reveal]').hidden, false,
        'the India schedule must be revealed for an Indian visitor');

    const intl = render(html, 'intl');
    assert.notStrictEqual(intl.document.querySelector('[data-intl-default]').style.display, 'none',
        'the international schedule must stay visible abroad');
    assert.strictEqual(intl.document.querySelector('[data-india-reveal]').hidden, true,
        'the India schedule must stay hidden abroad');
});

test('the runtime holds no price literals of its own', function () {
    const src = fs.readFileSync(path.join(ROOT, 'src', 'js', 'international-pricing.js'), 'utf8');
    const offenders = [];
    src.split('\n').forEach(function (line, i) {
        if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
        if (/z-index|border-radius|9999px|setTimeout/.test(line)) return;
        if (/\b(1499|2499|2999|4999|7500|8500|9999|49999|1999|599)\b/.test(line) ||
            /['"]\$(?:40|100|150)['"]/.test(line)) {
            offenders.push('line ' + (i + 1) + ': ' + line.trim().slice(0, 80));
        }
    });
    assert.strictEqual(offenders.length, 0,
        'price literals must come from the config:\n      ' + offenders.join('\n      '));
});

test('the removed worldwide layers are really gone', function () {
    assert.ok(!fs.existsSync(path.join(ROOT, 'src', 'js', 'local-currency.js')), 'local-currency.js must be deleted');
    assert.ok(!fs.existsSync(path.join(ROOT, 'src', 'js', 'country-switcher.js')), 'country-switcher.js must be deleted');
    const data = fs.readFileSync(path.join(ROOT, 'src', 'js', 'pricing-data.generated.js'), 'utf8');
    assert.ok(data.indexOf('worldwide') === -1, 'no per-country table may ship to the browser');
});

test('maths pages resolve the maths India table', function () {
    const html = '<!doctype html><html><body data-subject="maths">' +
        '<span data-price="maths.india.personal">x</span></body></html>';
    const stamped = stamper.stamp(html, config).html;
    assert.ok(stamped.indexOf('₹4,999') !== -1, 'stamped: ' + stamped);
    const win = render(stamped, 'india');
    const el = win.document.querySelector('[data-price]');
    assert.ok(el.textContent.indexOf('4,999') !== -1, 'rendered: ' + el.textContent);
});

// ─── the real pricing page, end to end ───

test('the live pricing page is correct for India and international', function () {
    const html = fs.readFileSync(path.join(ROOT, 'src', 'pages', 'pricing.html'), 'utf8');

    const india = render(html, 'india');
    const iAmt = india.document.querySelector('#tab-coding .price-amount');
    assert.ok(/₹/.test(iAmt.textContent), 'India sees rupees: ' + iAmt.textContent);
    assert.ok(iAmt.textContent.indexOf('1499') !== -1, 'group ₹1,499: ' + iAmt.textContent);

    const intl = render(html, 'intl');
    const uAmt = intl.document.querySelector('#tab-coding .price-amount');
    assert.ok(uAmt.textContent.indexOf('$100') !== -1, 'international group is $100 flat: ' + uAmt.textContent);
    const mini = intl.document.querySelector('#tab-coding [data-india-only="true"]');
    assert.strictEqual(mini.style.display, 'none', 'Mini Batch hidden abroad');

    const body = intl.document.querySelector('#tab-coding').textContent;
    assert.ok(!/₹\s?\d/.test(body.replace(/Mini Batch[\s\S]*$/, '')),
        'no stray visible rupees for an international visitor');
});

// ─── the charge path ───

function withPricing(scriptRel, region) {
    const win = render('<!doctype html><html><body></body></html>', region);
    win.eval(fs.readFileSync(path.join(ROOT, scriptRel), 'utf8'));
    return win;
}

test('the camp fee is flat: one India figure, one USD figure, from the config', function () {
    const india = withPricing('src/js/summer-camp-enrollment.js', 'india');
    assert.strictEqual(india.SummerCampEnrollment.getCoursePrice(), config.plans.camps.india.oneTime);
    assert.strictEqual(india.SummerCampEnrollment.getCourseCurrency(), 'INR');

    const intl = withPricing('src/js/summer-camp-enrollment.js', 'intl');
    assert.strictEqual(intl.SummerCampEnrollment.getCoursePrice(), config.plans.camps.international.oneTime);
    assert.strictEqual(intl.SummerCampEnrollment.getCourseCurrency(), 'USD');

    const winter = withPricing('src/js/winter-camp-enrollment.js', 'intl');
    assert.strictEqual(winter.WinterCampEnrollment.getCoursePrice(),
        intl.SummerCampEnrollment.getCoursePrice(), 'the two camps must agree');
});

test('an international charge resolves to the flat USD figures', function () {
    const win = withPricing('src/js/course-payment.js', 'intl');
    const g = win.CoursePayment.getIntlPricing('group');
    const p = win.CoursePayment.getIntlPricing('personal');
    assert.strictEqual(g.amount, 100, 'group charge: ' + JSON.stringify(g));
    assert.strictEqual(p.amount, 150, '1-on-1 charge: ' + JSON.stringify(p));
    assert.strictEqual(win.CoursePayment.getIntlPricing('miniBatch'), null,
        'miniBatch has no USD price and must never be charged');
});

test('a degraded page (no pricing data) refuses to charge rather than guess', function () {
    const dom = new JSDOM('<!doctype html><html><body></body></html>',
        { url: 'https://x.test/p?test=intl', runScripts: 'outside-only', pretendToBeVisual: true });
    const w = dom.window;
    // pricing-data deliberately NOT loaded
    w.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'international-pricing.js'), 'utf8'));
    w.document.dispatchEvent(new w.Event('DOMContentLoaded', { bubbles: true }));
    w.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'course-payment.js'), 'utf8'));

    assert.strictEqual(w.CoursePayment.getIntlPricing('group'), null, 'no data, no price');
    let alerted = null; w.alert = function (m) { alerted = m; };
    w.CoursePayment.config = { defaultPricing: { personal: { amount: 4999, display: '₹4,999/month' } }, courses: {} };
    w.CoursePayment.showPaymentModal('personal');
    assert.ok(alerted, 'the modal must refuse to open');
    assert.ok(!w.document.querySelector('.payment-modal-overlay'), 'and no modal in the DOM');
});

// ─── pages that do not exist yet ───

test('a page created later gets the two scripts and prices correctly', function () {
    const applyLib = require('./apply-lib');
    const raw = '<!DOCTYPE html><html><head></head><body>' +
        '<div class="pricing-card-new"><h3>Group Classes</h3>' +
        '<div class="price"><span class="price-amount">₹1499</span></div></div></body></html>';

    assert.ok(applyLib.showsAPrice(raw), 'a page with ₹1499 must be recognised');
    const ensured = applyLib.ensureScripts(raw);
    assert.ok(ensured.added, 'the scripts must be injected');
    assert.ok(ensured.html.indexOf('pricing-data.generated.js') !== -1);
    assert.ok(ensured.html.indexOf('international-pricing.js') !== -1);
    assert.ok(ensured.html.indexOf('local-currency.js') === -1, 'removed layer must not be injected');
    assert.ok(ensured.html.indexOf('country-switcher.js') === -1, 'removed layer must not be injected');

    const win = render(ensured.html, 'intl');
    const el = win.document.querySelector('.price-amount');
    assert.ok(/\$100/.test(el.textContent), 'international sees $100 flat: ' + el.textContent);
});

test('a page with no price is left alone', function () {
    const applyLib = require('./apply-lib');
    const raw = '<!DOCTYPE html><html><body><h1>About us</h1><p>We teach coding.</p></body></html>';
    assert.strictEqual(applyLib.ensureScripts(raw).added, false);
});

// ─── robustness ───

test('a throwing document.cookie cannot kill the pricing runtime', function () {
    const dom = new JSDOM('<!doctype html><html><body><span class="price-amount">₹1499</span></body></html>',
        { url: 'https://x.test/p', runScripts: 'outside-only', pretendToBeVisual: true });
    const w = dom.window;
    Object.defineProperty(w.document, 'cookie', {
        get() { throw new Error('cookies disabled'); },
        set() { throw new Error('cookies disabled'); }
    });
    let died = null;
    try {
        w.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'pricing-data.generated.js'), 'utf8'));
        w.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'international-pricing.js'), 'utf8'));
        w.document.dispatchEvent(new w.Event('DOMContentLoaded', { bubbles: true }));
    } catch (e) { died = e.message; }
    assert.strictEqual(died, null, 'runtime must survive blocked cookies: ' + died);
});

test('double init is harmless', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'intl');
    const before = win.document.querySelector('[data-price]').textContent;
    win.document.dispatchEvent(new win.Event('DOMContentLoaded', { bubbles: true }));
    win.InternationalPricing.init();
    const after = win.document.querySelector('[data-price]').textContent;
    assert.strictEqual(after, before, 'a second init must not change what is shown');
});

console.log('');
failures.forEach(function (f) {
    console.log('  ✗ ' + f.name);
    console.log('      ' + f.message.split('\n').slice(0, 3).join('\n      '));
});
console.log('  ' + passed + ' passed, ' + failures.length + ' failed\n');
process.exit(failures.length ? 1 : 0);
