#!/usr/bin/env node
/**
 * Validate the pricing config and show what it produces.
 *
 *   npm run pricing:check
 *
 * Run this after every edit to pricing/pricing.config.jsonc, before apply.
 * It answers two questions: is the file valid, and do the resulting prices
 * look like what you intended.
 *
 * Exits non-zero on any error, so it is safe to put in a build.
 */

'use strict';

const cfgLib = require('./lib/config');
const ppp = require('./lib/ppp');

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

/**
 * Slugs of every course that actually exists, read from the course source
 * JSON. Returns [] if the sources are unavailable, so the check degrades to a
 * warning-free no-op rather than failing a build for the wrong reason.
 */
function courseSlugs() {
    const dir = path.join(cfgLib.REPO_ROOT, 'content', 'courses', 'data');
    if (!fs.existsSync(dir)) return [];
    const slugs = [];
    fs.readdirSync(dir).forEach(function (f) {
        if (!/\.json$/.test(f) || f === 'courses-config.json') return;
        try {
            const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
            if (j && j.meta && j.meta.slug) slugs.push(j.meta.slug);
        } catch (e) { /* a malformed course file is not this check's problem */ }
    });
    return slugs;
}

function err(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

function validate(config) {
    // --- shape ---
    if (!config.plans || typeof config.plans !== 'object') {
        err('There is no "plans" section. That is where all the prices live.');
        return;
    }

    Object.keys(config.plans).forEach(function (subject) {
        const subjectTable = config.plans[subject];
        cfgLib.REGIONS.forEach(function (region) {
            if (!subjectTable[region]) {
                err('plans.' + subject + ' has no "' + region + '" prices. Every subject needs both india and international, even if the international ones are all null.');
                return;
            }
            const tiers = subjectTable[region];
            Object.keys(tiers).forEach(function (tier) {
                if (cfgLib.ALL_TIERS.indexOf(tier) === -1) {
                    err('plans.' + subject + '.' + region + ' has an unknown plan name "' + tier + '". Use one of: ' + cfgLib.ALL_TIERS.join(', '));
                    return;
                }
                const v = tiers[tier];
                if (v === null) return;                       // deliberately not sold
                if (typeof v !== 'number' || !isFinite(v)) {
                    err('plans.' + subject + '.' + region + '.' + tier + ' is "' + v + '". A price must be a plain number like 1499, or null if you do not sell it. No commas, no currency symbol, no quotes.');
                    return;
                }
                if (v <= 0) err('plans.' + subject + '.' + region + '.' + tier + ' is ' + v + '. A price must be greater than zero.');
                if (region === 'india' && v < 100) warn('plans.' + subject + '.india.' + tier + ' is ' + v + '. That is very low for a rupee price — did you mean ' + (v * 100) + '?');
                if (region === 'international' && v > 2000) warn('plans.' + subject + '.international.' + tier + ' is $' + v + '. That is very high for a dollar price — did you type a rupee amount by mistake?');
            });
        });
    });

    // --- overrides point at real subjects AND at courses that exist ---
    //
    // A typo'd slug here is silent: the override simply never fires and the
    // course quietly keeps the default price. That happened during this
    // system's own build, so it is checked rather than trusted.
    const knownSlugs = courseSlugs();
    Object.keys(config.courseOverrides || {}).forEach(function (slug) {
        const target = config.courseOverrides[slug];
        if (!config.plans[target]) {
            err('courseOverrides."' + slug + '" points at "' + target + '", which is not a subject in plans. Known subjects: ' + Object.keys(config.plans).join(', '));
        }
        if (knownSlugs.length && knownSlugs.indexOf(slug) === -1) {
            const near = knownSlugs.filter(function (s) {
                return s.indexOf(slug.split('-')[0]) === 0;
            }).slice(0, 3);
            err('courseOverrides has "' + slug + '", but no course has that slug, so this line does nothing.' +
                (near.length ? ' Did you mean: ' + near.join(' | ') : ''));
        }
    });

    // --- display ---
    if (!config.display || !config.display.chargeCurrencies) {
        err('display.chargeCurrencies is missing. It says which currency each region is billed in.');
    }
    if (!config.display || !config.display.classesPerMonth) {
        err('display.classesPerMonth is missing. It is needed to recalculate the "per class" prices shown on some pages.');
    }

    // --- worldwide sanity ---
    const w = config.worldwide;
    if (!w) { err('There is no "worldwide" section.'); return; }
    if (w.dampingExponent < 0 || w.dampingExponent > 1) {
        err('worldwide.dampingExponent is ' + w.dampingExponent + '. It must be between 0 and 1. 0 means everyone pays list price; 1 means follow purchasing power exactly, which would price 81 countries below your Indian price.');
    }
    if (w.maxDiscountPercent < 0 || w.maxDiscountPercent > 90) {
        err('worldwide.maxDiscountPercent is ' + w.maxDiscountPercent + '. Keep it between 0 and 90.');
    }
    if (w.costs.gstOnServicePercent === 0) {
        warn('worldwide.costs.gstOnServicePercent is 0, which assumes these classes are a zero-rated export under an LUT. This has NOT been confirmed by an accountant. If it is really 18, the floor rises about 22% and some countries are currently underpriced.');
    }
    if (w.costs.fxSpreadBufferPercent === 0) {
        warn('worldwide.costs.fxSpreadBufferPercent is 0. Razorpay does not publish its card FX spread, so charging with no buffer means an unknown slice of every international payment is unaccounted for.');
    }
}

function showLadder(config) {
    const pppData = cfgLib.loadData('ppp');
    const fxData = cfgLib.loadData('fx');
    if (!pppData || !fxData) {
        warn('No World Bank or exchange-rate data yet. Run: npm run pricing:refresh');
        return;
    }

    const ageDays = Math.round((Date.now() - new Date(fxData.fetchedAt).getTime()) / 86400000);
    if (ageDays > 30) {
        warn('Exchange rates are ' + ageDays + ' days old. Run npm run pricing:refresh to update them.');
    }

    console.log('\n─── What visitors are charged ─────────────────────────────────');
    console.log('    World Bank data ' + pppData.worldBankLastUpdated + ' · 1 USD = ' + fxData.rates.INR.toFixed(2) + ' INR\n');

    const sample = ['IN', 'NG', 'PK', 'EG', 'BD', 'KE', 'PH', 'BR', 'ZA', 'MX', 'AE', 'GB', 'DE', 'AU', 'US', 'CH'];
    const subject = 'coding';
    const india = config.plans[subject].india;
    const intl = config.plans[subject].international;

    console.log('    ' + 'Country'.padEnd(16) + 'PPP'.padStart(6) + '   ' +
        'Group'.padStart(9) + '   ' + '1-on-1'.padStart(9) + '   ' + 'You net'.padStart(10) + '   ' + 'Shown locally'.padStart(15) + '  Why');
    console.log('    ' + '─'.repeat(88));

    // India is billed domestically in rupees, so it is shown from its own row.
    const indiaNet = ppp.indiaNetInr(india.group, config);
    console.log('    ' + 'India'.padEnd(16) + (pppData.countries.IN ? pppData.countries.IN.pli.toFixed(1) : '  -').padStart(6) + '   ' +
        cfgLib.format(india.group, 'INR').padStart(9) + '   ' +
        cfgLib.format(india.personal, 'INR').padStart(9) + '   ' +
        ('₹' + indiaNet.toFixed(0)).padStart(10) + '   ' + '(exact)'.padStart(15) + '  domestic');

    const netKeep = ppp.internationalNetKeep(config);
    sample.forEach(function (iso) {
        if (iso === 'IN') return;
        const c = pppData.countries[iso];
        if (!c) return;
        const g = ppp.priceForCountry({ listUsd: intl.group, indiaGross: india.group, pli: c.pli, usdInrRate: fxData.rates.INR, tier: 'group', intlTable: intl }, config);
        const p = ppp.priceForCountry({ listUsd: intl.personal, indiaGross: india.personal, pli: c.pli, usdInrRate: fxData.rates.INR, tier: 'personal', intlTable: intl }, config);
        const netInr = g.usd * netKeep * fxData.rates.INR;

        // What the visitor actually reads, in their own currency and symbol.
        var local = '';
        var cur = c.currency;
        if (cur && fxData.rates[cur] && config.worldwide.unstableCurrencies.indexOf(cur) === -1) {
            local = cfgLib.formatLocal(g.usd * fxData.rates[cur], cur);
        } else if (cur) {
            local = '(USD only)';
        }

        console.log('    ' + c.name.slice(0, 15).padEnd(16) + c.pli.toFixed(1).padStart(6) + '   ' +
            ('$' + g.usd.toFixed(2)).padStart(9) + '   ' +
            ('$' + p.usd.toFixed(2)).padStart(9) + '   ' +
            ('₹' + netInr.toFixed(0)).padStart(10) + '   ' +
            local.padStart(15) + '  ' + g.reason);
    });

    // How often does the floor actually bind? This is the number that tells you
    // whether the damping is doing the work or the floor is.
    let bound = 0, total = 0, belowIndia = 0;
    Object.keys(pppData.countries).forEach(function (iso) {
        if (iso === 'IN') return;
        const c = pppData.countries[iso];
        total++;
        const r = ppp.priceForCountry({ listUsd: intl.group, indiaGross: india.group, pli: c.pli, usdInrRate: fxData.rates.INR }, config);
        if (r.floorBound) bound++;
        // What raw PPP with no damping and no floor would have done:
        if (intl.group * (c.pli / 100) * netKeep * fxData.rates.INR < indiaNet) belowIndia++;
    });

    console.log('\n    Floor binds in ' + bound + ' of ' + total + ' countries.');
    console.log('    Without it, ' + belowIndia + ' countries would net you less than one Indian enrolment.');
}

function main() {
    let config;
    try {
        config = cfgLib.load({ fresh: true });
    } catch (e) {
        console.error('\n✗ ' + e.message + '\n');
        process.exit(1);
    }

    validate(config);

    if (!errors.length) {
        try { showLadder(config); } catch (e) { warn('Could not work out the ladder: ' + e.message); }
    }

    console.log('');
    if (warnings.length) {
        console.log('─── Worth knowing ─────────────────────────────────────────────');
        warnings.forEach(function (w) { console.log('  ! ' + w); });
        console.log('');
    }
    if (errors.length) {
        console.log('─── Must be fixed ─────────────────────────────────────────────');
        errors.forEach(function (e) { console.log('  ✗ ' + e); });
        console.log('\n' + errors.length + ' problem(s). Nothing was changed.\n');
        process.exit(1);
    }

    console.log('✓ pricing.config.jsonc is valid.\n');
}

main();
