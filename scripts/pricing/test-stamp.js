#!/usr/bin/env node
/**
 * Tests for the stamping engine.
 *
 *   node scripts/pricing/test-stamp.js
 *
 * These exist because the failure mode on this project has twice been a script
 * that reported success while producing broken output. Each case below asserts
 * on the actual rewritten string, not on a count of matches.
 */

'use strict';

const assert = require('assert');
const cfgLib = require('./lib/config');
const stamper = require('./lib/stamp');
const ppp = require('./lib/ppp');

const config = cfgLib.load();
let passed = 0;
const failures = [];

function test(name, fn) {
    try { fn(); passed++; }
    catch (e) { failures.push({ name: name, message: e.message }); }
}

function stamp(html) { return stamper.stamp(html, config); }

// ─── visible anchors ───

test('rewrites a simple visible price', function () {
    const out = stamp('<span data-price="coding.india.group">₹999</span>');
    assert.strictEqual(out.html, '<span data-price="coding.india.group">₹1,499</span>');
    assert.strictEqual(out.report.errors.length, 0);
});

test('leaves a correct price byte-identical', function () {
    const src = '<span data-price="coding.india.group">₹1,499</span>';
    const out = stamp(src);
    assert.strictEqual(out.html, src, 'unchanged input must come out unchanged');
    assert.strictEqual(out.report.changes.length, 0);
});

test('amount format drops the symbol', function () {
    const out = stamp('<b data-price="coding.india.personal" data-price-format="amount">x</b>');
    assert.strictEqual(out.html, '<b data-price="coding.india.personal" data-price-format="amount">4,999</b>');
});

test('plain format is bare digits for structured data', function () {
    const out = stamp('<i data-price="coding.india.group" data-price-format="plain">x</i>');
    assert.ok(out.html.indexOf('>1499<') !== -1, 'expected 1499, got: ' + out.html);
});

test('full format appends the period', function () {
    const out = stamp('<p data-price="coding.india.group" data-price-format="full">x</p>');
    assert.ok(/₹1,499\/month/.test(out.html), 'got: ' + out.html);
});

test('split format rebuilds the currency-span shape', function () {
    const out = stamp('<span class="price-amount" data-price="coding.india.group" data-price-format="split">old</span>');
    assert.ok(out.html.indexOf('<span class="price-currency">₹</span>1499') !== -1, 'got: ' + out.html);
});

test('USD prices use a dollar sign and US grouping', function () {
    const out = stamp('<span data-price="coding.international.personal">x</span>');
    assert.ok(out.html.indexOf('>$100<') !== -1, 'got: ' + out.html);
});

test('rupee grouping is Indian, so lifetime reads 49,999', function () {
    const out = stamp('<span data-price="coding.india.lifetime">x</span>');
    assert.ok(out.html.indexOf('>₹49,999<') !== -1, 'got: ' + out.html);
});

// ─── derived figures must be recalculated, not substituted ───

test('per-class price is recalculated from the monthly price', function () {
    const out = stamp('<span data-price="coding.india.group" data-price-derive="perClass">₹0</span>');
    // 1499 / 8 = 187.375 -> 187
    assert.ok(out.html.indexOf('>₹187<') !== -1, 'expected ₹187, got: ' + out.html);
});

test('per-class price of the 1-on-1 plan', function () {
    const out = stamp('<span data-price="coding.india.personal" data-price-derive="perClass">x</span>');
    // 4999 / 8 = 624.875 -> 625
    assert.ok(out.html.indexOf('>₹625<') !== -1, 'expected ₹625, got: ' + out.html);
});

// ─── plans that are not sold ───

test('a null plan is never given a fabricated price', function () {
    const src = '<span data-price="coding.international.miniBatch">$40</span>';
    const out = stamp(src);
    assert.strictEqual(out.html, src, 'text must be left alone for a plan that is not sold');
    assert.deepStrictEqual(out.report.notSold, ['coding.international.miniBatch']);
});

// ─── bad keys fail loudly ───

test('an unknown subject is an error, not a silent skip', function () {
    const out = stamp('<span data-price="robotics.india.group">x</span>');
    assert.strictEqual(out.report.errors.length, 1);
    assert.ok(/Unknown subject "robotics"/.test(out.report.errors[0]), out.report.errors[0]);
});

test('an unknown tier is an error', function () {
    const out = stamp('<span data-price="coding.india.platinum">x</span>');
    assert.ok(/Unknown tier "platinum"/.test(out.report.errors[0]), out.report.errors[0]);
});

test('a malformed key is an error', function () {
    const out = stamp('<span data-price="coding.group">x</span>');
    assert.ok(/Expected subject\.region\.tier/.test(out.report.errors[0]), out.report.errors[0]);
});

// ─── nesting ───

test('finds the right closing tag when the same tag nests', function () {
    const out = stamp('<div data-price="coding.india.group"><div>inner</div></div><div>after</div>');
    assert.ok(out.html.indexOf('<div>after</div>') !== -1, 'content after the anchor must survive: ' + out.html);
    assert.ok(out.html.indexOf('₹1,499') !== -1, 'got: ' + out.html);
});

test('two anchors in one document are both rewritten', function () {
    const out = stamp('<span data-price="coding.india.group">a</span> and <span data-price="coding.india.personal">b</span>');
    assert.ok(out.html.indexOf('₹1,499') !== -1 && out.html.indexOf('₹4,999') !== -1, 'got: ' + out.html);
});

// ─── structured data ───

test('rewrites Offer prices by matching the offer name to a tier', function () {
    const src = '<script type="application/ld+json" data-price-scope="coding.india">' +
        '{"@type":"Course","offers":[' +
        '{"@type":"Offer","name":"Group Classes","price":"999","priceCurrency":"INR"},' +
        '{"@type":"Offer","name":"Mini Batch (3-4 students)","price":"999","priceCurrency":"INR"},' +
        '{"@type":"Offer","name":"1:1 Private Mentorship","price":"999","priceCurrency":"INR"}]}' +
        '</script>';
    const out = stamp(src);
    assert.strictEqual(out.report.errors.length, 0, out.report.errors.join('; '));
    assert.ok(/"name":"Group Classes","price":"1499"/.test(out.html), 'group: ' + out.html);
    assert.ok(/"name":"Mini Batch \(3-4 students\)","price":"2499"/.test(out.html), 'mini: ' + out.html);
    assert.ok(/"name":"1:1 Private Mentorship","price":"4999"/.test(out.html), 'personal: ' + out.html);
});

test('an untagged JSON-LD block is left completely alone', function () {
    const src = '<script type="application/ld+json">{"@type":"Offer","name":"Group","price":"1"}</script>';
    assert.strictEqual(stamp(src).html, src);
});

test('an Offer whose name matches no plan is an error', function () {
    const src = '<script type="application/ld+json" data-price-scope="coding.india">' +
        '{"@type":"Offer","name":"Platinum Elite","price":"1"}</script>';
    const out = stamp(src);
    assert.ok(/does not match any plan/.test(out.report.errors[0]), JSON.stringify(out.report.errors));
});

test('publishing an Offer for a plan that is not sold is an error', function () {
    const src = '<script type="application/ld+json" data-price-scope="coding.international">' +
        '{"@type":"Offer","name":"Mini Batch","price":"50"}</script>';
    const out = stamp(src);
    assert.ok(/not sold/.test(out.report.errors[0]), JSON.stringify(out.report.errors));
});

test('AggregateOffer low and high span the plans that exist', function () {
    const src = '<script type="application/ld+json" data-price-scope="coding.india">' +
        '{"@type":"AggregateOffer","lowPrice":"1","highPrice":"2","priceCurrency":"INR"}</script>';
    const out = stamp(src);
    assert.ok(/"lowPrice":"1499"/.test(out.html), 'low: ' + out.html);
    assert.ok(/"highPrice":"4999"/.test(out.html), 'high: ' + out.html);
});

test('structured currency follows the region', function () {
    const src = '<script type="application/ld+json" data-price-scope="maths.international">' +
        '{"@type":"Offer","name":"Small-Group Cohort","price":"1","priceCurrency":"INR"}</script>';
    const out = stamp(src);
    assert.ok(/"price":"100"/.test(out.html), 'price: ' + out.html);
    assert.ok(/"priceCurrency":"USD"/.test(out.html), 'currency: ' + out.html);
});

// ─── tier name lexicon ───

test('offer-name lexicon maps the shapes actually used on this site', function () {
    const cases = {
        'Group Classes': 'group',
        'Small-Group Cohort': 'group',
        'Mini Batch (3-4 students)': 'miniBatch',
        '1:1 Private Tuition': 'personal',
        '1-on-1 Mentorship': 'personal',
        'Personalized 1-on-1 Classes': 'personal',
        'Lifetime Access': 'lifetime'
    };
    Object.keys(cases).forEach(function (name) {
        assert.strictEqual(stamper.tierFromName(name), cases[name], name + ' should map to ' + cases[name]);
    });
});

// ─── the money guarantee ───

test('no country is ever charged below the India floor', function () {
    const pppData = cfgLib.loadData('ppp');
    const fxData = cfgLib.loadData('fx');
    if (!pppData || !fxData) throw new Error('run npm run pricing:refresh first');

    const india = config.plans.coding.india.group;
    const list = config.plans.coding.international.group;
    const indiaNet = ppp.indiaNetInr(india, config);
    const keep = ppp.internationalNetKeep(config);

    let worst = null;
    Object.keys(pppData.countries).forEach(function (iso) {
        const r = ppp.priceForCountry({
            listUsd: list, indiaGross: india,
            pli: pppData.countries[iso].pli, usdInrRate: fxData.rates.INR
        }, config);
        const netInr = r.usd * keep * fxData.rates.INR;
        if (worst === null || netInr < worst.net) worst = { iso: iso, net: netInr, usd: r.usd };
    });

    assert.ok(worst.net >= indiaNet - 1,
        'the cheapest country (' + worst.iso + ', $' + worst.usd + ') nets ₹' + worst.net.toFixed(0) +
        ' but an Indian enrolment nets ₹' + indiaNet.toFixed(0) + ' — the floor is not holding');
});

test('a country at or above US price level pays exactly list, not a charm-rounded price', function () {
    const r = ppp.priceForCountry({ listUsd: 40, indiaGross: 1499, pli: 128.2, usdInrRate: 95.76 }, config);
    assert.strictEqual(r.usd, 40, 'Switzerland should pay list $40, got $' + r.usd);
});

test('the damping exponent is actually applied', function () {
    const raw = ppp.priceForCountry({ listUsd: 40, indiaGross: null, pli: 25, usdInrRate: 95.76 }, config);
    assert.ok(raw.usd > 40 * 0.25, 'damped price must sit above raw PPP (which would be $10), got $' + raw.usd);
    assert.ok(raw.usd < 40, 'damped price must still be below list, got $' + raw.usd);
});

// ─── report ───

console.log('');
failures.forEach(function (f) {
    console.log('  ✗ ' + f.name);
    console.log('      ' + f.message.split('\n')[0]);
});
console.log('  ' + passed + ' passed, ' + failures.length + ' failed\n');
process.exit(failures.length ? 1 : 0);
