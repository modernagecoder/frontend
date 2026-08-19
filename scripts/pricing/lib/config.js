/**
 * Pricing config loader and resolver.
 *
 * Single entry point for every other pricing script. Nothing else in the repo
 * may hold a price literal, if a number needs to reach a page, it comes from
 * here, so the figure displayed and the figure charged cannot drift apart.
 *
 * A price is addressed by a dotted key:  subject.region.tier
 *   coding.india.group          -> 1499 INR
 *   maths.international.personal-> 150 USD
 *   camps.india.oneTime         -> 4999 INR
 *
 * A tier set to null in the config means "we do not sell this". resolve()
 * returns { exists: false } for it and callers must hide the plan rather than
 * invent a number. This is what stops a USD Mini-Batch, a SKU that has never
 * existed, from being fabricated by a build script.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
const CONFIG_PATH = path.join(REPO_ROOT, 'pricing', 'pricing.config.jsonc');
const DATA_DIR = path.join(REPO_ROOT, 'pricing', 'data');

const REGIONS = ['india', 'international'];
// lifetime was retired 2026-07-31 and removed from the schema entirely on
// 2026-08-01 with the worldwide layer.
const MONTHLY_TIERS = ['group', 'miniBatch', 'personal'];
const ALL_TIERS = MONTHLY_TIERS.concat(['oneTime']);

/**
 * Strip // and /* *\/ comments from JSONC without corrupting string literals.
 * A naive regex would mangle any string containing a slash, so this walks the
 * text one character at a time and tracks whether it is inside a string.
 */
function stripJsonComments(text) {
    let out = '';
    let inString = false;
    let inLine = false;
    let inBlock = false;
    let escaped = false;

    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        const next = text[i + 1];

        if (inLine) {
            if (c === '\n') { inLine = false; out += c; }
            continue;
        }
        if (inBlock) {
            if (c === '*' && next === '/') { inBlock = false; i++; }
            else if (c === '\n') { out += c; }   // keep line numbers honest for error messages
            continue;
        }
        if (inString) {
            out += c;
            if (escaped) { escaped = false; }
            else if (c === '\\') { escaped = true; }
            else if (c === '"') { inString = false; }
            continue;
        }
        if (c === '"') { inString = true; out += c; continue; }
        if (c === '/' && next === '/') { inLine = true; i++; continue; }
        if (c === '/' && next === '*') { inBlock = true; i++; continue; }
        out += c;
    }
    return out;
}

let _cache = null;

function load(options) {
    const opts = options || {};
    if (_cache && !opts.fresh) return _cache;

    if (!fs.existsSync(CONFIG_PATH)) {
        throw new Error('Pricing config not found at ' + CONFIG_PATH);
    }
    const raw = fs.readFileSync(CONFIG_PATH, 'utf8');
    let parsed;
    try {
        parsed = JSON.parse(stripJsonComments(raw));
    } catch (err) {
        throw new Error(
            'pricing/pricing.config.jsonc is not valid.\n\n  ' + err.message +
            '\n\nThe usual cause is a missing comma between two lines, or a comma after the\n' +
            'last item in a list. Comments starting with // are fine.'
        );
    }
    _cache = parsed;
    return parsed;
}

/** Optional supporting data, written by `npm run pricing:refresh`. */
function loadData(name) {
    const p = path.join(DATA_DIR, name + '.json');
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
}

/**
 * Resolve a dotted price key.
 * Returns { exists, amount, currency, subject, region, tier }.
 * Never throws for a well-formed key that is legitimately not sold. That is
 * { exists: false }, which callers must handle by hiding the plan.
 */
function resolve(key, config) {
    const cfg = config || load();
    const parts = String(key).split('.');
    if (parts.length !== 3) {
        throw new Error('Bad price key "' + key + '". Expected subject.region.tier, e.g. coding.india.group');
    }
    const [subject, region, tier] = parts;

    const subjectTable = cfg.plans[subject];
    if (!subjectTable) {
        throw new Error('Unknown subject "' + subject + '" in price key "' + key +
            '". Known subjects: ' + Object.keys(cfg.plans).join(', '));
    }
    if (REGIONS.indexOf(region) === -1) {
        throw new Error('Unknown region "' + region + '" in price key "' + key +
            '". Use one of: ' + REGIONS.join(', '));
    }
    const regionTable = subjectTable[region];
    if (!regionTable) {
        throw new Error('Subject "' + subject + '" has no "' + region + '" prices configured.');
    }
    if (!(tier in regionTable)) {
        throw new Error('Unknown tier "' + tier + '" in price key "' + key +
            '". "' + subject + '.' + region + '" defines: ' + Object.keys(regionTable).join(', '));
    }

    const amount = regionTable[tier];
    const currency = cfg.display.chargeCurrencies[region];

    return {
        exists: amount !== null && amount !== undefined,
        amount: amount,
        currency: currency,
        subject: subject,
        region: region,
        tier: tier
    };
}

/**
 * The price set a course uses, after applying its override.
 *
 * An override is either a subject name, or an object that may name a subject
 * and may carry explicit per-tier amounts:
 *
 *   "slug": "agents"
 *   "slug": { "india": { "lifetime": 34999 } }
 *   "slug": { "subject": "agents", "india": { "lifetime": 44999 } }
 *
 * Returns { subject, india: {...}, international: {...} } with the overrides
 * merged over the subject's own table. Never mutates the config.
 */
// Which price set a slug belongs to, when no override names one. THE single
// source of subject truth: generate-courses.js, apply.js, verify.js and
// sweep-india.js must all agree, because two scripts once carried their own
// regexes and a computer-science course (slug contains "igcse") was swept to
// the maths ₹8,500 while its page charged the coding price.
const AGENTS_SLUG_RX = /codex-and-claude-code/i;
const MATHS_SLUG_RX = /math|calculus|algebra/i;

function courseSubject(slug, config) {
    const cfg = config || load();
    const override = (cfg.courseOverrides || {})[slug];
    if (typeof override === 'string') return override;
    if (override && typeof override === 'object' && override.subject) return override.subject;
    if (AGENTS_SLUG_RX.test(slug || '')) return 'agents';
    if (MATHS_SLUG_RX.test(slug || '')) return 'maths';
    return 'coding';
}

function coursePrices(slug, config) {
    const cfg = config || load();
    const override = (cfg.courseOverrides || {})[slug];

    const subject = courseSubject(slug, cfg);
    let explicit = null;
    if (override && typeof override === 'object') explicit = override;

    if (!cfg.plans[subject]) {
        throw new Error('Course "' + slug + '" points at price set "' + subject +
            '", which does not exist. Known: ' + Object.keys(cfg.plans).join(', '));
    }

    const out = { subject: subject };
    REGIONS.forEach(function (region) {
        const base = cfg.plans[subject][region] || {};
        const merged = {};
        Object.keys(base).forEach(function (tier) { merged[tier] = base[tier]; });
        if (explicit && explicit[region]) {
            Object.keys(explicit[region]).forEach(function (tier) {
                merged[tier] = explicit[region][tier];
            });
        }
        out[region] = merged;
    });
    return out;
}

/** Every key the config defines, including the ones that are not sold. */
function allKeys(config) {
    const cfg = config || load();
    const keys = [];
    Object.keys(cfg.plans).forEach(function (subject) {
        Object.keys(cfg.plans[subject]).forEach(function (region) {
            Object.keys(cfg.plans[subject][region]).forEach(function (tier) {
                keys.push(subject + '.' + region + '.' + tier);
            });
        });
    });
    return keys;
}

/**
 * Format an amount for display.
 *
 * INR uses Indian digit grouping (₹49,999, and ₹1,49,999 above a lakh), which
 * is what the site already shows. Intl.NumberFormat is given no explicit
 * fraction-digit settings so it reads the ISO 4217 minor unit per currency:
 * that is what keeps JPY/KRW/VND whole and KWD/BHD at three decimals.
 */
function format(amount, currency, options) {
    const opts = options || {};
    const style = opts.style || 'display';

    if (amount === null || amount === undefined) return '';

    const locale = currency === 'INR' ? 'en-IN' : 'en-US';
    const symbol = currency === 'INR' ? '₹' : '$';

    // Whole numbers stay whole: ₹1,499 not ₹1,499.00. Fractional USD prices
    // like 39.99 keep their two decimals.
    const isWhole = Number.isInteger(amount);
    const nf = new Intl.NumberFormat(locale, {
        minimumFractionDigits: isWhole ? 0 : 2,
        maximumFractionDigits: isWhole ? 0 : 2
    });
    const grouped = nf.format(amount);

    switch (style) {
        case 'amount':  return grouped;                 // 1,499
        case 'plain':   return String(amount);          // 1499   (structured data)
        case 'symbol':  return symbol;                  // ₹
        case 'display': return symbol + grouped;        // ₹1,499
        case 'full':    return symbol + grouped + (opts.period || '');
        default:
            throw new Error('Unknown price format "' + style + '"');
    }
}

/**
 * Round a local-currency estimate UP to a clean, quotable number.
 *
 * Nobody writes a price as ₦146,123.05. Rounding up rather than to nearest
 * matters: the label is an estimate sitting beside an exact dollar charge, and
 * an estimate that lands below what the customer is actually billed reads as a
 * bait-and-switch.
 */
function niceRoundUp(amount) {
    const step =
        amount < 10 ? 0.5 :
        amount < 100 ? 1 :
        amount < 1000 ? 10 :
        amount < 10000 ? 100 :
        amount < 100000 ? 500 : 1000;
    return Math.ceil(amount / step) * step;
}

/**
 * Format a local-currency estimate in the visitor's own currency and symbol.
 *
 * The locale is chosen from the currency, not from the machine running this,
 * so digit grouping is right for the reader: an Indian build must not render
 * Nigerian naira with lakh grouping as 1,46,123.
 */
function formatLocal(amount, currency, options) {
    const opts = options || {};
    const value = opts.raw ? amount : niceRoundUp(amount);

    // One formatting locale for the whole world, because every page on this
    // site is written in English. Formatting each currency in its own locale
    // sounds more correct but is worse here: es-MX renders Mexican pesos as a
    // bare "$1,900" sitting beside a US dollar charge, and ar-SA adds
    // right-to-left control characters mid-sentence. en-US keeps Latin digits
    // and disambiguates the dollar family as A$, CA$, MX$.
    //
    // Indian rupees are the one exception: lakh grouping is what Indian
    // readers expect and what the rest of the site already uses.
    const locale = currency === 'INR' ? 'en-IN' : 'en-US';

    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            // 'symbol', not 'narrowSymbol'. Narrow renders Australian dollars
            // as a bare "$160", which sits next to a US dollar charge and reads
            // as the same currency. 'symbol' keeps A$ and MX$ distinct.
            currencyDisplay: 'symbol',
            // A rounded estimate should not carry cents. Small amounts keep one
            // decimal place because 0.5 steps are meaningful there.
            minimumFractionDigits: 0,
            maximumFractionDigits: value < 10 ? 1 : 0
        }).format(value);
    } catch (err) {
        // narrowSymbol is unsupported in some older engines, and a few ISO
        // codes have no symbol at all. Fall back rather than showing nothing.
        try {
            return new Intl.NumberFormat(locale, {
                style: 'currency', currency: currency,
                minimumFractionDigits: 0, maximumFractionDigits: 0
            }).format(value);
        } catch (e2) {
            return currency + ' ' + Math.round(value).toLocaleString('en-US');
        }
    }
}

/**
 * Derived figures that must be recalculated when a price moves, never
 * substituted. The site quotes "₹187 per live class" in ~52 places; leaving
 * those behind after a price change is how the visible arithmetic stops
 * matching the headline price.
 *
 * `key` is the anchor's full subject.region.tier. Plans that do not run on
 * the default schedule (the India 1-on-1 plan is 1 class a week, 4 a month,
 * since 2026-08-10) carry their own classes-per-month figure in
 * display.classesPerMonthOverrides; dividing their price by the default 8
 * would publish arithmetic the timetable contradicts.
 */
function derive(kind, amount, config, key) {
    const cfg = config || load();
    const overrides = cfg.display.classesPerMonthOverrides || {};
    const perMonth = (key && overrides[key]) || cfg.display.classesPerMonth;
    const hours = cfg.display.hoursPerClass;
    switch (kind) {
        case 'perClass': return amount / perMonth;
        case 'perHour':  return amount / (perMonth * hours);
        default:
            throw new Error('Unknown derivation "' + kind + '". Known: perClass, perHour');
    }
}

module.exports = {
    REPO_ROOT: REPO_ROOT,
    CONFIG_PATH: CONFIG_PATH,
    DATA_DIR: DATA_DIR,
    REGIONS: REGIONS,
    MONTHLY_TIERS: MONTHLY_TIERS,
    ALL_TIERS: ALL_TIERS,
    load: load,
    loadData: loadData,
    resolve: resolve,
    courseSubject: courseSubject,
    coursePrices: coursePrices,
    allKeys: allKeys,
    format: format,
    formatLocal: formatLocal,
    derive: derive,
    stripJsonComments: stripJsonComments
};
