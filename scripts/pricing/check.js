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
                if (region === 'india' && v < 100) warn('plans.' + subject + '.india.' + tier + ' is ' + v + '. That is very low for a rupee price, did you mean ' + (v * 100) + '?');
                if (region === 'international' && v > 2000) warn('plans.' + subject + '.international.' + tier + ' is $' + v + '. That is very high for a dollar price, did you type a rupee amount by mistake?');
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

        if (typeof target === 'string') {
            if (!config.plans[target]) {
                err('courseOverrides."' + slug + '" points at "' + target + '", which is not a subject in plans. Known subjects: ' + Object.keys(config.plans).join(', '));
            }
        } else if (target && typeof target === 'object') {
            if (target.subject && !config.plans[target.subject]) {
                err('courseOverrides."' + slug + '" has subject "' + target.subject + '", which is not in plans. Known: ' + Object.keys(config.plans).join(', '));
            }
            cfgLib.REGIONS.forEach(function (region) {
                if (!target[region]) return;
                Object.keys(target[region]).forEach(function (tier) {
                    if (cfgLib.ALL_TIERS.indexOf(tier) === -1) {
                        err('courseOverrides."' + slug + '".' + region + ' has unknown plan "' + tier + '". Use one of: ' + cfgLib.ALL_TIERS.join(', '));
                        return;
                    }
                    const v = target[region][tier];
                    if (v !== null && (typeof v !== 'number' || !isFinite(v) || v <= 0)) {
                        err('courseOverrides."' + slug + '".' + region + '.' + tier + ' is "' + v + '". Use a plain number, or null if that course does not sell it.');
                    }
                });
            });
        } else {
            err('courseOverrides."' + slug + '" should be a price-set name like "agents", or an object like { "india": { "lifetime": 34999 } }.');
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

    // --- pay for 6 months at once ---
    // Every 6-month figure must be a real number AND cheaper than six monthly
    // payments, on every subject it applies to: the course page prints the
    // saving, and a "save -3%" card is worse than no card.
    const six = config.sixMonth;
    if (six) {
        if (!Array.isArray(six.appliesTo)) {
            err('sixMonth.appliesTo must be a list of subjects, e.g. ["coding", "maths", "agents"].');
        } else {
            six.appliesTo.forEach(function (subject) {
                if (!config.plans[subject]) err('sixMonth.appliesTo names "' + subject + '", which is not a subject in plans.');
            });
        }
        cfgLib.REGIONS.forEach(function (region) {
            const row = six[region] || {};
            Object.keys(row).forEach(function (tier) {
                const v = row[tier];
                if (v === null) return;
                if (cfgLib.MONTHLY_TIERS.indexOf(tier) === -1) {
                    err('sixMonth.' + region + ' has an unknown plan name "' + tier + '".');
                } else if (typeof v !== 'number' || !isFinite(v) || v <= 0) {
                    err('sixMonth.' + region + '.' + tier + ' is "' + v + '". Use a plain number for the WHOLE 6-month fee, or null.');
                }
            });
        });
        if (!errors.length && Array.isArray(six.appliesTo)) {
            six.appliesTo.forEach(function (subject) {
                const offer = cfgLib.sixMonthOffer(subject, config);
                cfgLib.REGIONS.forEach(function (region) {
                    cfgLib.MONTHLY_TIERS.forEach(function (tier) {
                        const o = offer && offer[region][tier];
                        if (o && o.save <= 0) {
                            err('sixMonth.' + region + '.' + tier + ' is ' + o.total + ', but six monthly ' + subject +
                                ' payments only cost ' + o.monthlyTotal + '. The 6-month fee must be lower, or the page would advertise a loss.');
                        }
                    });
                });
            });
        }
    }


}

function showPrices(config) {
    console.log('');
    console.log('─── What visitors are charged ─────────────────────────────────');
    console.log('');
    const inr = (n) => n == null ? ', ' : cfgLib.format(n, 'INR');
    const usd = (n) => n == null ? ', ' : cfgLib.format(n, 'USD');
    console.log('    ' + 'Plan'.padEnd(26) + 'India'.padStart(10) + 'Outside India'.padStart(18));
    console.log('    ' + '─'.repeat(54));
    [['coding', 'Coding'], ['maths', 'Maths'], ['agents', 'AI agents (Codex/Claude, Copilot)'], ['gemini', 'Gemini Enterprise (1-on-1 only)'], ['school', 'School bootcamp']].forEach(function (row) {
        const t = config.plans[row[0]];
        ['group', 'miniBatch', 'personal'].forEach(function (tier) {
            const label = { group: 'Group', miniBatch: 'Mini Batch', personal: '1-on-1' }[tier];
            const i = t.india[tier], u = t.international[tier];
            if (i == null && u == null) return;
            console.log('    ' + (row[1] + ', ' + label).padEnd(26) + inr(i).padStart(10) +
                (u == null ? 'not sold'.padStart(18) : (usd(u) + '/month').padStart(18)));
        });
    });
    const c = config.plans.camps;
    console.log('    ' + 'Holiday camp (one-time)'.padEnd(26) + inr(c.india.oneTime).padStart(10) + usd(c.international.oneTime).padStart(18));
    console.log('');
    console.log('    Everyone outside India pays the same flat USD prices, for all courses.');
    const offer = config.sixMonth && config.sixMonth.appliesTo && cfgLib.sixMonthOffer(config.sixMonth.appliesTo[0], config);
    if (offer) {
        console.log('');
        console.log('    Pay 6 months at once (' + config.sixMonth.appliesTo.join(', ') + '):');
        ['group', 'miniBatch', 'personal'].forEach(function (tier) {
            const label = { group: 'Group', miniBatch: 'Mini Batch', personal: '1-on-1' }[tier];
            const i = offer.india[tier], u = offer.international[tier];
            const cell = function (o, f) {
                return o ? f(o.total) + ' (save ' + o.pct + '%, ' + o.sessions + ' sessions)' : 'not sold';
            };
            console.log('      ' + label.padEnd(12) + cell(i, inr).padEnd(36) + cell(u, usd));
        });
    }
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
        try { showPrices(config); } catch (e) { warn('Could not print the price table: ' + e.message); }
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
