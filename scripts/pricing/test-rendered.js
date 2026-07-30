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

/**
 * Build a DOM and run the real pricing scripts in it, in the same order a page
 * loads them: the generated data first, then international-pricing.js.
 *
 * @param html    page markup
 * @param region  'india' | 'intl' | undefined
 * @param country ISO-2 code to simulate, e.g. 'NG'
 */
function render(html, region, country) {
    let query = [];
    if (region) query.push('test=' + region);
    if (country) query.push('country=' + country);

    const dom = new JSDOM(html, {
        url: 'https://learn.modernagecoders.com/pricing' + (query.length ? '?' + query.join('&') : ''),
        runScripts: 'outside-only',
        pretendToBeVisual: true
    });
    const win = dom.window;

    // jsdom reports a UTC timezone and en-US locale, so without this the
    // detector would classify every run as international.
    if (region === 'india') {
        Object.defineProperty(win.navigator, 'languages', { value: ['en-IN'], configurable: true });
    }

    win.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'pricing-data.generated.js'), 'utf8'));
    win.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', 'international-pricing.js'), 'utf8'));
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

// ─── the price tables now come from the config, not from literals ───

test('international-pricing.js holds no price literals of its own', function () {
    const src = fs.readFileSync(path.join(ROOT, 'src', 'js', 'international-pricing.js'), 'utf8');
    const offenders = [];
    src.split('\n').forEach(function (line, i) {
        if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;              // comments may cite prices
        if (/z-index|border-radius|9999px|setTimeout/.test(line)) return;
        if (/\b(1499|2499|4999|9999|49999|1999|2999|599|374\.99|149\.99)\b/.test(line)) {
            offenders.push('line ' + (i + 1) + ': ' + line.trim().slice(0, 80));
        }
    });
    assert.strictEqual(offenders.length, 0,
        'price literals must come from the config:\n      ' + offenders.join('\n      '));
});

test('the runtime builds its tables from the config', function () {
    const win = render(CARD, 'intl');
    const P = win.InternationalPricing.PRICES;
    assert.ok(P, 'PRICES must be built at init');
    assert.strictEqual(P.india.group.amount, config.plans.coding.india.group);
    assert.strictEqual(P.international.group.amount, config.plans.coding.international.group);
    assert.strictEqual(P.international.miniBatch, undefined,
        'a plan that is not sold must have no entry at all, not a fabricated one');
});

test('a visitor in Nigeria is charged the Nigerian price, not the list price', function () {
    const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'js', 'pricing-data.generated.js'), 'utf8')
        .replace(/^[\s\S]*?window\.MAC_PRICING = /, '').replace(/;\s*$/, ''));
    const expected = data.worldwide.countries.NG.tiers.coding.group;

    const win = render(CARD, null, 'NG');
    assert.strictEqual(win.__MAC_COUNTRY, 'NG');
    assert.strictEqual(win.InternationalPricing.PRICES.international.group.amount, expected,
        'Nigeria should be charged its own price');
    assert.ok(expected < config.plans.coding.international.group,
        'and that price should be below the list price');
});

test('an undetected visitor pays the list price, never a discounted one', function () {
    const win = render(CARD, 'intl');
    assert.strictEqual(win.__MAC_COUNTRY, null);
    assert.strictEqual(win.InternationalPricing.PRICES.international.group.amount,
        config.plans.coding.international.group);
});

test('the rupee-to-dollar swap rules are derived from the config, largest first', function () {
    const win = render(CARD, 'intl');
    const rules = win.InternationalPricing.buildSwapRules();
    assert.ok(rules.length > 0, 'rules must exist');

    for (let i = 1; i < rules.length; i++) {
        assert.ok(rules[i - 1].value > rules[i].value,
            'rules must be sorted largest-first so ₹49,999 is handled before ₹4,999');
    }
    // The rules must track the config, which is the whole point of deriving them.
    const values = rules.map(function (r) { return r.value; });
    assert.ok(values.indexOf(config.plans.coding.india.group) !== -1,
        'the current group price must be among the match keys, got: ' + values.join(', '));
});

test('changing a price does not break the swap — the old failure mode', function () {
    // The rules used to be written as literals, so a price change silently
    // stopped the swap firing and international visitors saw raw rupees.
    const win = render(CARD, 'intl');
    const IP = win.InternationalPricing;

    win.MAC_PRICING.plans.coding.india.group = 1799;
    IP.loadTables();
    const rules = IP.buildSwapRules();
    const values = rules.map(function (r) { return r.value; });

    assert.ok(values.indexOf(1799) !== -1,
        'after a price change the new figure must be a match key, got: ' + values.join(', '));
    assert.ok(values.indexOf(1499) === -1,
        'the old figure must no longer be matched, got: ' + values.join(', '));
});

test('a longer number starting with a price is not corrupted', function () {
    const win = render(CARD, 'intl');
    const rules = win.InternationalPricing.buildSwapRules();
    const lifetime = rules.filter(function (r) { return r.value === 49999; })[0];
    const personal = rules.filter(function (r) { return r.value === 4999; })[0];
    if (!lifetime || !personal) return;
    assert.ok(!personal.rx.test('₹49,999'),
        'the ₹4,999 rule must not match inside ₹49,999');
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
