/**
 * Pricing config loader and resolver.
 *
 * Single entry point for every other pricing script. Nothing else in the repo
 * may hold a price literal — if a number needs to reach a page, it comes from
 * here, so the figure displayed and the figure charged cannot drift apart.
 *
 * A price is addressed by a dotted key:  subject.region.tier
 *   coding.india.group          -> 1499 INR
 *   maths.international.personal-> 150 USD
 *   camps.india.oneTime         -> 4999 INR
 *
 * A tier set to null in the config means "we do not sell this". resolve()
 * returns { exists: false } for it and callers must hide the plan rather than
 * invent a number. This is what stops a USD Mini-Batch — a SKU that has never
 * existed — from being fabricated by a build script.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
const CONFIG_PATH = path.join(REPO_ROOT, 'pricing', 'pricing.config.jsonc');
const DATA_DIR = path.join(REPO_ROOT, 'pricing', 'data');

const REGIONS = ['india', 'international'];
const MONTHLY_TIERS = ['group', 'miniBatch', 'personal', 'lifetime'];
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
 * Never throws for a well-formed key that is legitimately not sold — that is
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
 * INR uses Indian digit grouping (₹49,999 — and ₹1,49,999 above a lakh), which
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

/** Format a local-currency estimate for any of the 166 supported currencies. */
function formatLocal(amount, currency) {
    try {
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currency,
            // Indonesian rupiah is nominally 2dp in ISO 4217 but is never
            // written that way; everything else takes its ISO minor unit.
            maximumFractionDigits: currency === 'IDR' ? 0 : undefined
        }).format(amount);
    } catch (err) {
        return currency + ' ' + Math.round(amount);
    }
}

/**
 * Derived figures that must be recalculated when a price moves, never
 * substituted. The site quotes "₹187 per live class" in ~52 places; leaving
 * those behind after a price change is how the visible arithmetic stops
 * matching the headline price.
 */
function derive(kind, amount, config) {
    const cfg = config || load();
    const perMonth = cfg.display.classesPerMonth;
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
    allKeys: allKeys,
    format: format,
    formatLocal: formatLocal,
    derive: derive,
    stripJsonComments: stripJsonComments
};
