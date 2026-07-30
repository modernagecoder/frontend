#!/usr/bin/env node
/**
 * Rendered checks, in a real DOM.
 *
 *   node scripts/pricing/test-rendered.js
 *
 * Everything else in this system reads files. This one loads a page in jsdom,
 * runs the site's own pricing JavaScript against it, and reads back what a
 * human would actually see — in both India and International mode.
 *
 * It exists for one specific reason: a build-time [data-price] stamp and the
 * runtime swap in international-pricing.js both write innerHTML on the same
 * .price-amount element. Whether they cooperate or fight cannot be settled by
 * reading either file. It has to be observed.
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

/** Build a DOM, optionally forcing region, and run international-pricing.js in it. */
function render(html, region) {
    const dom = new JSDOM(html, {
        url: 'https://learn.modernagecoders.com/pricing' + (region ? '?test=' + region : ''),
        runScripts: 'outside-only',
        pretendToBeVisual: true
    });
    const win = dom.window;

    // jsdom reports a UTC timezone and en-US locale, so without this the
    // detector would classify every run as international.
    if (region === 'india') {
        Object.defineProperty(win.navigator, 'languages', { value: ['en-IN'], configurable: true });
    }

    const src = fs.readFileSync(path.join(ROOT, 'src', 'js', 'international-pricing.js'), 'utf8');
    win.eval(src);
    win.document.dispatchEvent(new win.Event('DOMContentLoaded', { bubbles: true }));
    return win;
}

// The real card shape from src/pages/pricing.html, with the anchor added.
const CARD = [
    '<!doctype html><html><body>',
    '<div class="pricing-tab-content active" id="tab-coding">',
    '  <div class="pricing-card-new">',
    '    <h3>Group Classes</h3>',
    '    <div class="price">',
    '      <span class="price-amount" data-price="coding.india.group" data-price-format="split">',
    '<span class="price-currency">₹</span>1499</span>',
    '      <span class="price-period">/month</span>',
    '    </div>',
    '  </div>',
    '  <div class="pricing-card-new recommended" data-india-only="true">',
    '    <h3>Mini Batch</h3>',
    '    <div class="price">',
    '      <span class="price-amount" data-price="coding.india.miniBatch" data-price-format="split">',
    '<span class="price-currency">₹</span>2499</span>',
    '    </div>',
    '  </div>',
    '</div></body></html>'
].join('\n');

test('the build-time stamp produces the exact markup the runtime expects', function () {
    const out = stamper.stamp(CARD, config);
    assert.strictEqual(out.report.errors.length, 0, out.report.errors.join('; '));
    assert.ok(out.html.indexOf('<span class="price-currency">₹</span>1499') !== -1,
        'group card should carry the split shape: ' + out.html.slice(0, 300));
});

test('an Indian visitor sees the rupee price the config holds', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'india');
    const el = win.document.querySelector('[data-price="coding.india.group"]');
    assert.strictEqual(el.textContent.replace(/\s/g, ''), '₹1499',
        'India view should show ₹1499, saw: ' + el.textContent);
});

test('an international visitor sees dollars, and the anchor survives the swap', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'intl');
    const el = win.document.querySelector('[data-price="coding.india.group"]');

    assert.ok(el, 'the data-price anchor must survive the runtime swap, or the next build cannot find it');
    assert.ok(/\$/.test(el.textContent),
        'international view should show a dollar price, saw: ' + el.textContent);
    assert.ok(!/₹/.test(el.textContent),
        'international view must not still show rupees, saw: ' + el.textContent);
});

test('the India-only Mini Batch is hidden from international visitors', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'intl');
    const card = win.document.querySelector('[data-india-only="true"]');
    assert.strictEqual(card.style.display, 'none',
        'Mini Batch has no USD price and must be hidden, not shown with a rupee figure');
});

test('the Mini Batch stays visible for Indian visitors', function () {
    const stamped = stamper.stamp(CARD, config).html;
    const win = render(stamped, 'india');
    const card = win.document.querySelector('[data-india-only="true"]');
    assert.notStrictEqual(card.style.display, 'none', 'Mini Batch must be visible in India');
});

test('the generated runtime price table is loadable and complete', function () {
    const p = path.join(ROOT, 'src', 'js', 'pricing-data.generated.js');
    assert.ok(fs.existsSync(p), 'run npm run pricing:apply first');
    const dom = new JSDOM('<!doctype html><html><body></body></html>', { runScripts: 'outside-only' });
    dom.window.eval(fs.readFileSync(p, 'utf8'));
    const data = dom.window.MAC_PRICING;

    assert.ok(data, 'window.MAC_PRICING must be defined');
    assert.strictEqual(data.plans.coding.india.group, config.plans.coding.india.group);
    assert.strictEqual(data.plans.coding.international.miniBatch, null,
        'a plan that is not sold must stay null in the browser data, never a fabricated number');
    assert.ok(Object.keys(data.worldwide.countries).length > 150,
        'expected worldwide prices for most countries, got ' + Object.keys(data.worldwide.countries).length);
    assert.ok(data.worldwide.countries.NG.tiers.coding.group > 0);
});

console.log('');
failures.forEach(function (f) {
    console.log('  ✗ ' + f.name);
    console.log('      ' + f.message.split('\n')[0]);
});
console.log('  ' + passed + ' passed, ' + failures.length + ' failed\n');
process.exit(failures.length ? 1 : 0);
