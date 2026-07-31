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
    // Asserted against the config rather than a hardcoded figure, so changing
    // the price is a config edit and not a test edit.
    const r = cfgLib.resolve('coding.international.personal', config);
    const expected = '>' + cfgLib.format(r.amount, 'USD') + '<';
    const out = stamp('<span data-price="coding.international.personal">x</span>');
    assert.ok(out.html.indexOf(expected) !== -1, 'expected ' + expected + ', got: ' + out.html);
    assert.ok(/>\$[\d,]/.test(out.html), 'must start with a dollar sign: ' + out.html);
});

test('a fractional USD price keeps its two decimals', function () {
    const out = stamp('<span data-price="coding.international.group">x</span>');
    const r = cfgLib.resolve('coding.international.group', config);
    if (Number.isInteger(r.amount)) return;          // nothing to check
    assert.ok(out.html.indexOf('.' + String(r.amount).split('.')[1]) !== -1,
        'a price like 149.99 must not be rounded to 150: ' + out.html);
});

test('rupee grouping is Indian, not Western', function () {
    // Tested through the formatter rather than a live price, so retiring a
    // product cannot break a test about number formatting.
    assert.strictEqual(cfgLib.format(49999, 'INR'), '₹49,999');
    assert.strictEqual(cfgLib.format(149999, 'INR'), '₹1,49,999', 'lakh grouping above 99,999');
    assert.strictEqual(cfgLib.format(149999, 'USD'), '$149,999', 'USD keeps Western grouping');
});

test('lifetime access is retired and cannot be priced', function () {
    // The owner removed the lifetime tier on 2026-07-31. Every subject must
    // report it as not sold, so no page, offer or payment can resurrect it.
    Object.keys(config.plans).forEach(function (subject) {
        cfgLib.REGIONS.forEach(function (region) {
            const tiers = config.plans[subject][region] || {};
            if (!('lifetime' in tiers)) return;
            const r = cfgLib.resolve(subject + '.' + region + '.lifetime', config);
            assert.strictEqual(r.exists, false,
                subject + '.' + region + '.lifetime is still priced at ' + r.amount);
        });
    });
});

test('a retired tier is never stamped onto a page', function () {
    const src = '<span data-price="coding.india.lifetime">₹49,999</span>';
    const out = stamp(src);
    assert.strictEqual(out.html, src, 'markup left alone rather than given a price');
    assert.ok(out.report.notSold.indexOf('coding.india.lifetime') !== -1,
        'and reported as not sold: ' + JSON.stringify(out.report.notSold));
});

test('publishing a lifetime Offer to Google is an error', function () {
    const src = '<script type="application/ld+json" data-price-scope="coding.india">' +
        '{"@type":"Offer","name":"Lifetime Access","price":"49999"}</script>';
    const out = stamp(src);
    assert.ok(/not sold/.test(out.report.errors[0] || ''),
        'a retired product must not be advertised in structured data: ' + JSON.stringify(out.report.errors));
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
    // Read the expected figure from the config, so a price change is a config
    // edit rather than a test edit.
    const expected = cfgLib.resolve('maths.international.group', config).amount;
    assert.ok(out.html.indexOf('"price":"' + expected + '"') !== -1,
        'expected price ' + expected + ', got: ' + out.html);
    assert.ok(/"priceCurrency":"USD"/.test(out.html),
        'an international scope must publish USD, not the INR it started with: ' + out.html);
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

test('no country, on any tier of any subject, is charged below the India floor', function () {
    const pppData = cfgLib.loadData('ppp');
    const fxData = cfgLib.loadData('fx');
    if (!pppData || !fxData) throw new Error('run npm run pricing:refresh first');

    const keep = ppp.internationalNetKeep(config);
    const floorMap = config.worldwide.floor.matchIndiaTier;
    const breaches = [];

    Object.keys(config.plans).forEach(function (subject) {
        const intl = config.plans[subject].international || {};
        const india = config.plans[subject].india || {};

        Object.keys(intl).forEach(function (tier) {
            if (intl[tier] === null || intl[tier] === undefined) return;   // not sold

            const indiaTier = floorMap[tier];
            const indiaGross = indiaTier ? india[indiaTier] : null;

            // Every internationally-sold tier must have a floor. Without one it
            // can be discounted below what the same plan nets inside India —
            // which is how the camps tier was found unprotected.
            if (indiaGross === null || indiaGross === undefined) {
                breaches.push(subject + '.' + tier + ' is sold internationally but has no India floor ' +
                    '(floor.matchIndiaTier is missing "' + tier + '", or ' + subject + '.india.' + indiaTier + ' is null)');
                return;
            }

            const indiaNet = ppp.indiaNetInr(indiaGross, config);
            Object.keys(pppData.countries).forEach(function (iso) {
                const r = ppp.priceForCountry({
                    listUsd: intl[tier], indiaGross: indiaGross,
                    pli: pppData.countries[iso].pli, usdInrRate: fxData.rates.INR,
                    tier: tier, intlTable: intl
                }, config);
                const netInr = r.usd * keep * fxData.rates.INR;
                if (netInr < indiaNet - 1) {
                    breaches.push(subject + '.' + tier + ' in ' + iso + ': $' + r.usd +
                        ' nets ₹' + netInr.toFixed(0) + ' but India nets ₹' + indiaNet.toFixed(0));
                }
            });
        });
    });

    assert.strictEqual(breaches.length, 0,
        breaches.length + ' price(s) fall below the India floor:\n      ' + breaches.slice(0, 6).join('\n      '));
});

test('with no hard minimum in play, a rich country pays exactly list rather than a charm-rounded price', function () {
    // No tier/intlTable passed, so only the India floor applies — this pins the
    // charm-rounding behaviour itself, not the worldwide ladder.
    const r = ppp.priceForCountry({ listUsd: 40, indiaGross: 1499, pli: 128.2, usdInrRate: 95.76 }, config);
    assert.strictEqual(r.usd, 40, 'should pay list $40, got $' + r.usd);
});

test('the hard rupee minimum overrides the list price when it sits above it', function () {
    const intl = config.plans.coding.international;
    const min = config.worldwide.floor.minNetInr && config.worldwide.floor.minNetInr.group;
    if (min === null || min === undefined) return;      // no hard minimum configured
    const keep = ppp.internationalNetKeep(config);
    const r = ppp.priceForCountry({
        listUsd: intl.group, indiaGross: config.plans.coding.india.group,
        pli: 100, usdInrRate: 95.76, tier: 'group', intlTable: intl
    }, config);
    const net = r.usd * keep * 95.76;
    assert.ok(net >= min - 5,
        'a $' + r.usd + ' charge nets ₹' + net.toFixed(0) + ', below the ₹' + min + ' minimum');
});

test('every internationally sold tier clears the hard rupee minimum in every country', function () {
    const pppData = cfgLib.loadData('ppp');
    const fxData = cfgLib.loadData('fx');
    if (!pppData || !fxData) throw new Error('run npm run pricing:refresh first');
    const keep = ppp.internationalNetKeep(config);
    const breaches = [];

    Object.keys(config.plans).forEach(function (subject) {
        const intl = config.plans[subject].international || {};
        const india = config.plans[subject].india || {};
        Object.keys(intl).forEach(function (tier) {
            if (intl[tier] === null || intl[tier] === undefined) return;
            const min = ppp.minNetInrFor(tier, config, intl);
            if (min === null || min === undefined) return;
            const indiaTier = config.worldwide.floor.matchIndiaTier[tier];
            Object.keys(pppData.countries).forEach(function (iso) {
                const r = ppp.priceForCountry({
                    listUsd: intl[tier], indiaGross: indiaTier ? india[indiaTier] : null,
                    pli: pppData.countries[iso].pli, usdInrRate: fxData.rates.INR,
                    tier: tier, intlTable: intl
                }, config);
                const net = r.usd * keep * fxData.rates.INR;
                if (net < min - 5) {
                    breaches.push(subject + '.' + tier + ' in ' + iso + ': $' + r.usd +
                        ' nets ₹' + net.toFixed(0) + ' < ₹' + Math.round(min));
                }
            });
        });
    });
    assert.strictEqual(breaches.length, 0,
        breaches.length + ' below the hard minimum:\n      ' + breaches.slice(0, 5).join('\n      '));
});

test('a country with no usable price level still clears the hard minimum', function () {
    // American Samoa and ~37 other economies have a World Bank figure older
    // than maxDataAgeYears, so buildTable passes pli: null. That path used to
    // return list price immediately and skip the floor, which billed them $40
    // against a ₹9,500 minimum. This is that regression.
    const cfg = cfgLib.load();
    const intl = cfg.plans.coding.international;
    const min = ppp.minNetInrFor('group', cfg, intl);
    if (min === null || min === undefined) return;

    const r = ppp.priceForCountry({
        listUsd: intl.group, indiaGross: cfg.plans.coding.india.group,
        pli: null, usdInrRate: 95.76, tier: 'group', intlTable: intl
    }, cfg);
    const net = r.usd * ppp.internationalNetKeep(cfg) * 95.76;
    assert.ok(net >= min - 5,
        'a country with no price level was charged $' + r.usd + ', netting ₹' +
        net.toFixed(0) + ' against a ₹' + Math.round(min) + ' minimum');
});

test('every country in the real dataset clears the hard minimum, stale ones included', function () {
    const pppData = cfgLib.loadData('ppp');
    const fxData = cfgLib.loadData('fx');
    if (!pppData || !fxData) throw new Error('run npm run pricing:refresh first');

    const built = ppp.buildTable('coding', config, pppData, fxData);
    const keep = ppp.internationalNetKeep(config);
    const min = ppp.minNetInrFor('group', config, config.plans.coding.international);
    if (min === null || min === undefined) return;

    const breaches = [];
    Object.keys(built.table).forEach(function (iso) {
        const g = built.table[iso].tiers.group;
        if (g === undefined) return;
        const net = g * keep * fxData.rates.INR;
        if (net < min - 5) breaches.push(iso + ': $' + g + ' nets ₹' + net.toFixed(0));
    });

    assert.strictEqual(breaches.length, 0,
        breaches.length + ' of ' + Object.keys(built.table).length +
        ' countries fall below ₹' + Math.round(min) + ':\n      ' + breaches.slice(0, 6).join('\n      '));
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
