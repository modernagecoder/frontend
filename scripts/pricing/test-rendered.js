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

// ─── pages that do not exist yet ───

test('a page created later gets the currency scripts and localises correctly', function () {
    // The requirement is that someone can add a page months from now, knowing
    // nothing about this system, and a visitor in Germany still sees euros.
    // apply injects the scripts into any page that shows a price, so this test
    // builds an untouched page and puts it through the real pipeline.
    const applyLib = require('./apply-lib');

    const raw = [
        '<!DOCTYPE html><html lang="en"><head><title>New page</title></head><body>',
        '  <div class="pricing-card-new"><h3>Group Classes</h3>',
        '  <div class="price"><span class="price-amount">₹1499</span></div></div>',
        '</body></html>'
    ].join('\n');

    assert.ok(applyLib.showsAPrice(raw), 'a page with ₹1499 must be recognised as showing a price');

    const ensured = applyLib.ensureScripts(raw);
    assert.ok(ensured.added, 'the scripts must be injected');
    ['pricing-data.generated.js', 'international-pricing.js', 'local-currency.js'].forEach(function (s) {
        assert.ok(ensured.html.indexOf(s) !== -1, 'missing ' + s);
    });

    // And it must actually render in a real DOM.
    function priceFor(country) {
        const dom = new JSDOM(ensured.html, {
            url: 'https://learn.modernagecoders.com/new?country=' + country,
            runScripts: 'outside-only', pretendToBeVisual: true
        });
        const win = dom.window;
        ['pricing-data.generated', 'international-pricing', 'local-currency'].forEach(function (f) {
            win.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', f + '.js'), 'utf8'));
        });
        win.document.dispatchEvent(new win.Event('DOMContentLoaded', { bubbles: true }));
        return (win.document.querySelector('.price-amount') || {}).textContent || '';
    }

    assert.ok(priceFor('IN').indexOf('₹') !== -1, 'India should still see rupees, saw: ' + priceFor('IN'));
    assert.ok(priceFor('DE').indexOf('€') !== -1, 'Germany should see euros, saw: ' + priceFor('DE'));
    assert.ok(priceFor('GB').indexOf('£') !== -1, 'the UK should see pounds, saw: ' + priceFor('GB'));
});

test('a page with no price is left alone', function () {
    const applyLib = require('./apply-lib');
    const raw = '<!DOCTYPE html><html><body><h1>About us</h1><p>We teach coding.</p></body></html>';
    assert.ok(!applyLib.showsAPrice(raw), 'no price here');
    assert.strictEqual(applyLib.ensureScripts(raw).added, false,
        'a page with no price should not be made to download the price table');
});

test('a currency symbol inside a script block is not mistaken for a price', function () {
    const applyLib = require('./apply-lib');
    const raw = '<!DOCTYPE html><html><body><h1>Docs</h1>' +
        '<script>var re = /\\$\\d+/; var s = "₹1499";</script></body></html>';
    assert.ok(!applyLib.showsAPrice(raw),
        'only what a human can read counts as showing a price');
});


// ─── country switcher ───

function bootSwitcher(url, cookie) {
    const html = fs.readFileSync(path.join(ROOT, 'src', 'pages', 'pricing.html'), 'utf8');
    const dom = new JSDOM(html, { url: url, runScripts: 'outside-only', pretendToBeVisual: true });
    const win = dom.window;
    if (cookie) win.document.cookie = cookie;
    ['pricing-data.generated', 'international-pricing', 'local-currency', 'country-switcher']
        .forEach(function (f) {
            win.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', f + '.js'), 'utf8'));
        });
    win.document.dispatchEvent(new win.Event('DOMContentLoaded', { bubbles: true }));
    return win;
}

test('the switcher names the country whose prices are being shown', function () {
    [['DE', 'Germany', 'EUR'], ['OM', 'Oman', 'OMR'], ['IN', 'India', 'INR'], ['US', 'United States', 'USD']]
        .forEach(function (c) {
            const win = bootSwitcher('https://x.test/pricing?country=' + c[0]);
            const btn = win.document.querySelector('.mac-cs-btn');
            assert.ok(btn, c[0] + ': no switcher rendered');
            const text = btn.textContent;
            assert.ok(text.indexOf(c[1]) !== -1, c[0] + ': expected ' + c[1] + ', got: ' + text);
            assert.ok(text.indexOf(c[2]) !== -1, c[0] + ': expected currency ' + c[2] + ', got: ' + text);
        });
});

test('choosing a country stores it and drops any override from the URL', function () {
    const win = bootSwitcher('https://x.test/pricing?country=DE&test=intl');
    let target = null;
    win.MACCountrySwitcher.reload = function (h) { target = h; };
    win.MACCountrySwitcher.choose('NG');

    assert.ok(/nf_country=NG/.test(win.document.cookie), 'cookie not set: ' + win.document.cookie);
    assert.ok(target && !/country=/.test(target), 'the ?country= override must be dropped: ' + target);
    assert.ok(target && !/test=/.test(target), 'the ?test= override must be dropped too: ' + target);
});

test('the stored choice decides the price on the next visit', function () {
    const win = bootSwitcher('https://x.test/pricing', 'nf_country=NG');
    assert.strictEqual(win.__MAC_COUNTRY, 'NG');
    assert.strictEqual(win.__MAC_IS_INDIAN, false, 'a Nigerian choice must not be billed in rupees');
    const shown = win.document.querySelector('#tab-coding .price-amount').textContent;
    assert.ok(/NGN/.test(shown), 'expected naira, got: ' + shown);
});

test('choosing India restores rupees and the domestic flow', function () {
    const win = bootSwitcher('https://x.test/pricing', 'nf_country=IN');
    assert.strictEqual(win.__MAC_IS_INDIAN, true);
    const shown = win.document.querySelector('#tab-coding .price-amount').textContent;
    assert.ok(shown.indexOf('₹') !== -1, 'expected rupees, got: ' + shown);
});

test('the picker lists only countries that can actually be priced', function () {
    const win = bootSwitcher('https://x.test/pricing?country=DE');
    const all = win.MACCountrySwitcher.priceableCountries();
    assert.ok(all.length > 150, 'expected most countries, got ' + all.length);
    const data = win.MAC_PRICING;
    all.forEach(function (c) {
        const entry = data.worldwide.countries[c.iso];
        assert.ok(entry && entry.tiers && Object.keys(entry.tiers).length,
            c.iso + ' is offered in the picker but has no price');
    });
});

test('search puts an exact country ahead of one that merely contains the word', function () {
    const win = bootSwitcher('https://x.test/pricing?country=DE');
    win.document.querySelector('.mac-cs-btn').dispatchEvent(new win.Event('click', { bubbles: true }));
    const panel = win.document.getElementById('mac-cs-panel');
    assert.ok(panel, 'picker did not open');

    const search = panel.querySelector('.mac-cs-search');
    search.value = 'oman';
    search.dispatchEvent(new win.Event('input', { bubbles: true }));

    const first = panel.querySelector('.mac-cs-item');
    assert.ok(first && /Oman/.test(first.textContent),
        'Oman should rank above Romania, got: ' + (first && first.textContent));
});

test('the picker can be closed with Escape', function () {
    const win = bootSwitcher('https://x.test/pricing?country=DE');
    win.document.querySelector('.mac-cs-btn').dispatchEvent(new win.Event('click', { bubbles: true }));
    assert.ok(win.document.getElementById('mac-cs-panel'), 'picker did not open');
    const ev = new win.KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    win.document.dispatchEvent(ev);
    assert.strictEqual(win.document.getElementById('mac-cs-panel'), null, 'Escape must close the picker');
});

// ─── local currency display ───

/** Render the real pricing page for a country, with the local-currency layer. */
function renderLocal(country) {
    const html = fs.readFileSync(path.join(ROOT, 'src', 'pages', 'pricing.html'), 'utf8');
    const dom = new JSDOM(html, {
        url: 'https://learn.modernagecoders.com/pricing?country=' + country,
        runScripts: 'outside-only', pretendToBeVisual: true
    });
    const win = dom.window;
    ['pricing-data.generated', 'international-pricing', 'local-currency'].forEach(function (f) {
        win.eval(fs.readFileSync(path.join(ROOT, 'src', 'js', f + '.js'), 'utf8'));
    });
    win.document.dispatchEvent(new win.Event('DOMContentLoaded', { bubbles: true }));

    const card = win.document.querySelector('#tab-coding .pricing-card-new');
    return {
        win: win,
        price: (card.querySelector('.price-amount') || {}).textContent || '',
        note: (card.querySelector('.mac-charge-note') || {}).textContent || ''
    };
}

test('a European visitor sees euros, with the dollar charge stated', function () {
    const de = renderLocal('DE');
    assert.ok(de.price.indexOf('€') !== -1, 'Germany must see a euro symbol, saw: ' + de.price);
    assert.ok(/charged as US\$\d/.test(de.note), 'the exact charge must be stated: ' + de.note);
    assert.ok(/1 USD = [\d.]+ EUR/.test(de.note), 'the rate must be disclosed: ' + de.note);
    assert.ok(/on \d{1,2} \w{3} \d{4}/.test(de.note), 'the rate date must be disclosed: ' + de.note);
});

test('every eurozone country sees the same euro price', function () {
    const seen = {};
    ['DE', 'FR', 'IT', 'ES', 'PT', 'IE', 'NL', 'GR'].forEach(function (cc) {
        seen[cc] = renderLocal(cc).price.trim();
    });
    const distinct = Object.keys(seen).map(function (k) { return seen[k]; })
        .filter(function (v, i, a) { return a.indexOf(v) === i; });
    assert.strictEqual(distinct.length, 1,
        'the eurozone must show one price, saw: ' + JSON.stringify(seen));
});

test('the local figure is never below the dollar charge it explains', function () {
    const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'js', 'pricing-data.generated.js'), 'utf8')
        .replace(/^[\s\S]*?window\.MAC_PRICING = /, '').replace(/;\s*$/, ''));

    ['DE', 'GB', 'NG', 'PK', 'AE', 'OM', 'JP', 'AU', 'BR', 'ZA'].forEach(function (cc) {
        const r = renderLocal(cc);
        const entry = data.worldwide.countries[cc];
        const rate = data.worldwide.currencies[entry.currency];
        if (!rate) return;

        const shown = parseFloat(r.price.replace(/[^\d.]/g, ''));
        const charged = parseFloat((r.note.match(/US\$([\d.]+)/) || [])[1]);
        assert.ok(isFinite(shown) && isFinite(charged), cc + ': could not read figures from ' + r.price + ' / ' + r.note);
        assert.ok(shown >= charged * rate - 0.01,
            cc + ': shows ' + shown + ' but the charge converts to ' + (charged * rate).toFixed(2) +
            ' — a local estimate below the real charge reads as bait and switch');
    });
});

test('zero-decimal currencies are not given cents', function () {
    ['JP', 'KR', 'VN', 'ID'].forEach(function (cc) {
        const r = renderLocal(cc);
        assert.ok(!/\.\d/.test(r.price), cc + ' should have no decimals, saw: ' + r.price);
    });
});

test('a US visitor gets no conversion note at all', function () {
    const us = renderLocal('US');
    assert.strictEqual(us.note, '', 'already charged in USD, nothing to disclose');
});

test('an Indian visitor gets no conversion note and keeps rupees', function () {
    const india = renderLocal('IN');
    assert.ok(india.price.indexOf('₹') !== -1, 'India keeps rupees, saw: ' + india.price);
    assert.strictEqual(india.note, '', 'billed in rupees directly, nothing to convert');
});

test('a volatile currency is left in dollars rather than quoted', function () {
    const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'js', 'pricing-data.generated.js'), 'utf8')
        .replace(/^[\s\S]*?window\.MAC_PRICING = /, '').replace(/;\s*$/, ''));
    const unstable = data.worldwide.unstable || [];
    if (unstable.indexOf('TRY') === -1) return;
    const tr = renderLocal('TR');
    assert.ok(tr.price.indexOf('₺') === -1, 'a currency flagged unstable must not be quoted: ' + tr.price);
});

// ─── the real pricing page, end to end ───

test('the live pricing page prices correctly for India, Nigeria, Germany and the US', function () {
    const pagePath = path.join(ROOT, 'src', 'pages', 'pricing.html');
    if (!fs.existsSync(pagePath)) return;
    const html = fs.readFileSync(pagePath, 'utf8');

    function pricesFor(country) {
        const win = render(html, country ? null : 'intl', country);
        const cards = Array.from(win.document.querySelectorAll('#tab-coding .pricing-card-new'));
        const out = {};
        cards.forEach(function (card) {
            const h = card.querySelector('h3');
            const amt = card.querySelector('.price-amount');
            if (!h || !amt) return;
            out[h.textContent.trim()] = {
                text: amt.textContent.trim(),
                hidden: card.style.display === 'none'
            };
        });
        return out;
    }

    const india = pricesFor('IN');
    assert.ok(/₹/.test(india['Group Classes'].text), 'India must see rupees: ' + india['Group Classes'].text);
    assert.ok(!india['Mini Batch'].hidden, 'Mini Batch must be visible in India');

    const ng = pricesFor('NG');
    const us = pricesFor('US');
    assert.ok(/^\$/.test(ng['Group Classes'].text), 'Nigeria must see dollars: ' + ng['Group Classes'].text);
    assert.ok(ng['Mini Batch'].hidden, 'Mini Batch has no USD price and must be hidden abroad');

    const ngAmount = parseFloat(ng['Group Classes'].text.replace(/[^0-9.]/g, ''));
    const usAmount = parseFloat(us['Group Classes'].text.replace(/[^0-9.]/g, ''));
    assert.ok(ngAmount < usAmount,
        'Nigeria ($' + ngAmount + ') must pay less than the US ($' + usAmount + ')');
    assert.strictEqual(usAmount, config.plans.coding.international.group,
        'the US pays the list price exactly');

    // No rupee figure may survive on a page shown in dollars.
    const winNg = render(html, null, 'NG');
    const visible = winNg.document.querySelector('#tab-coding').textContent;
    assert.ok(visible.indexOf('₹') === -1 || /Mini Batch/.test(visible),
        'no stray rupee price should remain for an international visitor');
});

// ─── the charge path: what a card is actually billed ───

/** Load a script into a DOM that already has the pricing data. */
function withPricing(scriptRel, region, country) {
    const win = render('<!doctype html><html><body></body></html>', region, country);
    win.eval(fs.readFileSync(path.join(ROOT, scriptRel), 'utf8'));
    return win;
}

test('the camp fee comes from the config for an Indian visitor', function () {
    const win = withPricing('src/js/summer-camp-enrollment.js', 'india');
    const camp = win.SummerCampEnrollment;
    assert.strictEqual(camp.getCoursePrice(), config.plans.camps.india.oneTime);
    assert.strictEqual(camp.getCourseCurrency(), 'INR');
    assert.ok(camp.getPriceDisplay().indexOf('₹') === 0, 'got: ' + camp.getPriceDisplay());
});

test('the camp fee follows the visitor country abroad', function () {
    const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'js', 'pricing-data.generated.js'), 'utf8')
        .replace(/^[\s\S]*?window\.MAC_PRICING = /, '').replace(/;\s*$/, ''));
    const expected = data.worldwide.countries.NG.tiers.camps.oneTime;

    const win = withPricing('src/js/summer-camp-enrollment.js', null, 'NG');
    assert.strictEqual(win.SummerCampEnrollment.getCoursePrice(), expected);
    assert.strictEqual(win.SummerCampEnrollment.getCourseCurrency(), 'USD');
});

test('the winter camp behaves identically to the summer camp', function () {
    const s = withPricing('src/js/summer-camp-enrollment.js', 'india');
    const w = withPricing('src/js/winter-camp-enrollment.js', 'india');
    assert.strictEqual(w.WinterCampEnrollment.getCoursePrice(),
        s.SummerCampEnrollment.getCoursePrice(),
        'the two camp files must not drift apart again');
});

test('a camp with no configured price charges nothing rather than guessing', function () {
    const win = withPricing('src/js/summer-camp-enrollment.js', 'india');
    win.MAC_PRICING.plans.camps.india.oneTime = null;
    assert.strictEqual(win.SummerCampEnrollment.getCoursePrice(), null,
        'a missing price must produce null, never a hardcoded fallback amount');
});

test('the camp files hold no price literals', function () {
    ['src/js/summer-camp-enrollment.js', 'src/js/winter-camp-enrollment.js'].forEach(function (rel) {
        const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
        const offenders = [];
        src.split('\n').forEach(function (line, i) {
            if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
            if (/z-index|border-radius|9999px|setTimeout/.test(line)) return;
            // 60 appears legitimately in time arithmetic (60 * 60 * 1000), so
            // it is only a suspect price when it is not part of a calculation.
            if (/\*|\/\s*\d|TTL|ms\b|days?\b|hours?\b/i.test(line)) return;
            if (/\b(4999|1499|2499|9999|49999)\b/.test(line) || /\b60\b\s*[;,)]/.test(line)) {
                offenders.push(rel + ':' + (i + 1) + ' ' + line.trim().slice(0, 70));
            }
        });
        assert.strictEqual(offenders.length, 0, offenders.join('\n      '));
    });
});

test('generated runtime price table is loadable and complete', function () {
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
