#!/usr/bin/env node
/**
 * Tests for the stamping engine, under the FLAT pricing model
 * (owner's decision 2026-08-01: one USD list outside India, rupees inside;
 * the per-country worldwide layer is removed).
 *
 *   node scripts/pricing/test-stamp.js
 *
 * These exist because the failure mode on this project has twice been a script
 * that reported success while producing broken output. Each case asserts on
 * the actual rewritten string, not on a count of matches.
 */

'use strict';

const assert = require('assert');
const cfgLib = require('./lib/config');
const stamper = require('./lib/stamp');

const config = cfgLib.load();
let passed = 0;
const failures = [];

function test(name, fn) {
    try { fn(); passed++; }
    catch (e) { failures.push({ name: name, message: e.message }); }
}

function stamp(html) { return stamper.stamp(html, config); }

// ─── the configured prices themselves ───

test('the config carries the owner\'s current flat prices', function () {
    assert.strictEqual(config.plans.coding.india.group, 1499);
    assert.strictEqual(config.plans.coding.india.miniBatch, 2999);
    assert.strictEqual(config.plans.coding.india.personal, 4999, '1-on-1 moved to ₹4,999 on 2026-08-10');
    assert.strictEqual(config.plans.maths.india.personal, 4999, 'maths 1-on-1 matches coding since 2026-08-10');
    assert.strictEqual(config.plans.coding.international.group, 100);
    assert.strictEqual(config.plans.coding.international.personal, 150);
    assert.strictEqual(config.plans.maths.international.group, 100, 'international is flat across subjects');
    assert.strictEqual(config.plans.maths.international.personal, 150);
    assert.strictEqual(config.plans.agents.international.personal, 150);
});

test('the worldwide layer is gone from the config', function () {
    assert.strictEqual(config.worldwide, undefined, 'no per-country section may exist');
});

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
    const out = stamp('<p data-price="maths.india.personal" data-price-format="full">x</p>');
    assert.ok(/₹4,999\/month/.test(out.html), 'got: ' + out.html);
});

test('split format rebuilds the currency-span shape', function () {
    const out = stamp('<span class="price-amount" data-price="coding.india.miniBatch" data-price-format="split">old</span>');
    assert.ok(out.html.indexOf('<span class="price-currency">₹</span>2999') !== -1, 'got: ' + out.html);
});

test('USD prices carry a dollar sign', function () {
    const out = stamp('<span data-price="coding.international.personal">x</span>');
    assert.ok(out.html.indexOf('>$150<') !== -1, 'got: ' + out.html);
    const g = stamp('<span data-price="maths.international.group">x</span>');
    assert.ok(g.html.indexOf('>$100<') !== -1, 'got: ' + g.html);
});

test('rupee grouping is Indian, not Western', function () {
    assert.strictEqual(cfgLib.format(8500, 'INR'), '₹8,500');
    assert.strictEqual(cfgLib.format(149999, 'INR'), '₹1,49,999', 'lakh grouping above 99,999');
    assert.strictEqual(cfgLib.format(149999, 'USD'), '$149,999', 'USD keeps Western grouping');
});

// ─── derived figures must be recalculated, not substituted ───

test('per-class price is recalculated from the monthly price', function () {
    const out = stamp('<span data-price="coding.india.group" data-price-derive="perClass">₹0</span>');
    // 1499 / 8 = 187.375 -> 187
    assert.ok(out.html.indexOf('>₹187<') !== -1, 'expected ₹187, got: ' + out.html);
});

// classesPerMonth (8) fits the group/mini-batch schedule of 2 classes a week.
// Every India 1-on-1 plan (coding, maths, agents) runs 1 class a week (4 a
// month) since 2026-08-10 and carries that in display.classesPerMonthOverrides,
// keyed by the full anchor.
test('per-class derivation honours per-plan schedule overrides', function () {
    const c = stamp('<span data-price="coding.india.personal" data-price-derive="perClass">x</span>');
    assert.ok(c.html.indexOf('>₹1,250<') !== -1, '4999/4 rounds to 1250, got: ' + c.html);
    const a = stamp('<span data-price="agents.india.personal" data-price-derive="perClass">x</span>');
    assert.ok(a.html.indexOf('>₹1,250<') !== -1, 'agents 1-on-1 too: 4999/4 is 1250, got: ' + a.html);
    const m = stamp('<span data-price="maths.international.personal" data-price-derive="perClass">x</span>');
    assert.ok(m.html.indexOf('>$18.75<') !== -1, 'international 1-on-1 keeps 8: 150/8 is 18.75, got: ' + m.html);
});

// ─── plans that are not sold ───

test('a null plan is never given a fabricated price', function () {
    const src = '<span data-price="coding.international.miniBatch">$40</span>';
    const out = stamp(src);
    assert.strictEqual(out.html, src, 'text must be left alone for a plan that is not sold');
    assert.deepStrictEqual(out.report.notSold, ['coding.international.miniBatch']);
});

test('the retired lifetime tier no longer exists in the schema at all', function () {
    const out = stamp('<span data-price="coding.india.lifetime">₹49,999</span>');
    assert.ok(/Unknown tier "lifetime"/.test(out.report.errors[0] || ''),
        'lifetime must be an unknown tier now: ' + JSON.stringify(out.report.errors));
});

// ─── bad keys fail loudly ───

test('an unknown subject is an error, not a silent skip', function () {
    const out = stamp('<span data-price="robotics.india.group">x</span>');
    assert.ok(/Unknown subject "robotics"/.test(out.report.errors[0]), out.report.errors[0]);
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
    assert.ok(/"name":"Mini Batch \(3-4 students\)","price":"2999"/.test(out.html), 'mini: ' + out.html);
    assert.ok(/"name":"1:1 Private Mentorship","price":"4999"/.test(out.html), 'personal: ' + out.html);
});

test('a maths scope resolves the maths table', function () {
    const src = '<script type="application/ld+json" data-price-scope="maths.india">' +
        '{"@type":"Offer","name":"1:1 Private Tuition","price":"1","priceCurrency":"INR"}</script>';
    const out = stamp(src);
    assert.ok(/"price":"4999"/.test(out.html), 'maths 1-on-1 must be 4999: ' + out.html);
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

test('an offer\'s own currency decides its region, the scope only the subject', function () {
    const usd = stamp('<script type="application/ld+json" data-price-scope="maths.international">' +
        '{"@type":"Offer","name":"Small-Group Cohort","price":"1","priceCurrency":"USD"}</script>');
    assert.ok(usd.html.indexOf('"price":"100"') !== -1, 'USD offer: ' + usd.html);

    const inr = stamp('<script type="application/ld+json" data-price-scope="maths.international">' +
        '{"@type":"Offer","name":"Group Classes","price":"999","priceCurrency":"INR"}</script>');
    assert.ok(inr.html.indexOf('"price":"1499"') !== -1, 'INR offer: ' + inr.html);
    assert.ok(/"priceCurrency":"INR"/.test(inr.html), 'the INR offer must stay INR: ' + inr.html);
});

test('a mixed INR+USD block stamps each offer against its own region', function () {
    const src = '<script type="application/ld+json" data-price-scope="maths.international">' +
        '{"offers":[' +
        '{"@type":"Offer","name":"Group Classes","price":"1","priceCurrency":"INR"},' +
        '{"@type":"Offer","name":"Mini Batch (3-4 students, India only)","price":"1","priceCurrency":"INR"},' +
        '{"@type":"Offer","name":"Small-Group Cohort","price":"1","priceCurrency":"USD"}]}</script>';
    const out = stamp(src);
    assert.strictEqual(out.report.errors.length, 0, out.report.errors.join('; '));
    assert.ok(out.html.indexOf('"price":"1499"') !== -1, 'INR group: ' + out.html);
    assert.ok(out.html.indexOf('"price":"2999"') !== -1, 'INR mini batch: ' + out.html);
    assert.ok(out.html.indexOf('"price":"100"') !== -1, 'USD group: ' + out.html);
});

test('offer-name lexicon maps the shapes actually used on this site', function () {
    const cases = {
        'Group Classes': 'group',
        'Small-Group Cohort': 'group',
        'Mini Batch (3-4 students)': 'miniBatch',
        '1:1 Private Tuition': 'personal',
        '1-on-1 Mentorship': 'personal',
        'One to one': 'personal',
        'Personalized 1-on-1 Classes': 'personal'
    };
    Object.keys(cases).forEach(function (name) {
        assert.strictEqual(stamper.tierFromName(name), cases[name], name + ' should map to ' + cases[name]);
    });
});

// ─── report ───

console.log('');
failures.forEach(function (f) {
    console.log('  ✗ ' + f.name);
    console.log('      ' + f.message.split('\n').slice(0, 3).join('\n      '));
});
console.log('  ' + passed + ' passed, ' + failures.length + ' failed\n');
process.exit(failures.length ? 1 : 0);
