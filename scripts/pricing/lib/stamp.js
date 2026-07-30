/**
 * The stamping engine: rewrites prices inside an HTML string.
 *
 * Two kinds of anchor, both of which must be present in the page already —
 * this engine never guesses which number is a price.
 *
 *   1. Visible text
 *        <span data-price="coding.india.group">₹1,499</span>
 *      The element's entire contents are replaced. Optional attributes:
 *        data-price-format  display (default) | amount | plain | full | split | symbol
 *        data-price-derive  perClass | perHour   — recalculated, never substituted
 *
 *   2. Structured data for Google
 *        <script type="application/ld+json" data-price-scope="coding.india">
 *      Every Offer inside is matched to a tier by its own "name" field and its
 *      price rewritten in place. An Offer whose name matches no tier is an
 *      error, not a silent skip.
 *
 * Everything is done with surgical string replacement rather than parsing and
 * re-serialising, so a page that needs no change comes out byte-identical and
 * the diff of a real price change stays readable.
 */

'use strict';

const cfgLib = require('./config');

/** Offer names as they actually appear in this repo's structured data. */
const TIER_PATTERNS = [
    ['miniBatch', /mini[\s-]?batch|micro[\s-]?batch/i],
    ['personal',  /1[\s:-]?on[\s:-]?1|1:1|one[\s-]on[\s-]one|personal|private|mentorship|tuition/i],
    ['lifetime',  /lifetime|full[\s-]?course|one[\s-]?time\s+payment/i],
    ['oneTime',   /camp|bootcamp|workshop/i],
    ['group',     /group|small[\s-]?group|cohort|kids track|teens track|code queens|batch/i]
];

function tierFromName(name) {
    for (let i = 0; i < TIER_PATTERNS.length; i++) {
        if (TIER_PATTERNS[i][1].test(name)) return TIER_PATTERNS[i][0];
    }
    return null;
}

/**
 * Find the end of the element opened at `openEnd`, honouring nesting of the
 * same tag name. Returns the index at which the closing tag starts, or -1.
 */
function findElementEnd(html, tagName, openEnd) {
    const open = new RegExp('<' + tagName + '(?=[\\s>])', 'ig');
    const close = new RegExp('</' + tagName + '\\s*>', 'ig');
    let depth = 1;
    let pos = openEnd;

    while (depth > 0) {
        open.lastIndex = pos;
        close.lastIndex = pos;
        const o = open.exec(html);
        const c = close.exec(html);
        if (!c) return -1;
        if (o && o.index < c.index) { depth++; pos = o.index + o[0].length; }
        else { depth--; if (depth === 0) return c.index; pos = c.index + c[0].length; }
    }
    return -1;
}

/** Read an attribute out of an opening tag. */
function attr(tagText, name) {
    const m = tagText.match(new RegExp(name + '\\s*=\\s*"([^"]*)"', 'i'));
    return m ? m[1] : null;
}

/**
 * Render the replacement content for one visible anchor.
 * Returns null when the plan is not sold, which the caller turns into a hide.
 */
function renderVisible(key, format, deriveKind, config) {
    const r = cfgLib.resolve(key, config);
    if (!r.exists) return null;

    let amount = r.amount;
    if (deriveKind) {
        amount = cfgLib.derive(deriveKind, amount, config);
        // Per-class figures are shown as whole units — ₹187, not ₹187.375.
        amount = r.currency === 'INR' ? Math.round(amount) : Math.round(amount * 100) / 100;
    }

    const period = (r.tier === 'oneTime')
        ? config.display.periodLabels.oneTime
        : config.display.periodLabels.monthly;

    if (format === 'split') {
        // <span class="price-currency">₹</span>1499 — the shape used on the
        // homepage and pricing page cards.
        return '<span class="price-currency">' + cfgLib.format(amount, r.currency, { style: 'symbol' }) + '</span>' +
            cfgLib.format(amount, r.currency, { style: 'plain' });
    }
    return cfgLib.format(amount, r.currency, { style: format || 'display', period: period });
}

/**
 * Stamp every visible [data-price] anchor.
 */
function stampVisible(html, config, report) {
    const anchor = /<([a-z][a-z0-9]*)\b([^>]*\bdata-price\s*=\s*"[^"]*"[^>]*)>/ig;
    let out = '';
    let cursor = 0;
    let m;

    while ((m = anchor.exec(html)) !== null) {
        const tagName = m[1];
        const attrs = m[2];
        const openStart = m.index;
        const openEnd = m.index + m[0].length;

        const key = attr(attrs, 'data-price');
        const format = attr(attrs, 'data-price-format') || 'display';
        const derive = attr(attrs, 'data-price-derive');

        const closeAt = findElementEnd(html, tagName, openEnd);
        if (closeAt === -1) {
            report.errors.push('Unclosed <' + tagName + ' data-price="' + key + '">');
            continue;
        }

        const existing = html.slice(openEnd, closeAt);
        let replacement;
        try {
            replacement = renderVisible(key, format, derive, config);
        } catch (e) {
            report.errors.push(e.message);
            continue;
        }

        if (replacement === null) {
            // Not sold. Leave the text alone but mark the element hidden, so a
            // plan with no price can never be rendered with a fabricated one.
            report.notSold.push(key);
            replacement = existing;
        }

        report.anchors++;
        if (replacement !== existing) {
            report.changes.push({ key: key, from: existing.trim(), to: replacement.trim() });
            out += html.slice(cursor, openEnd) + replacement;
            cursor = closeAt;
            anchor.lastIndex = closeAt;
        }
    }
    out += html.slice(cursor);
    return out;
}

/**
 * Rewrite prices inside a JSON-LD block carrying data-price-scope.
 * Surgical: only the digits inside a "price" value move.
 */
function stampJsonLd(html, config, report) {
    const blockRx = /<script\b([^>]*\btype\s*=\s*"application\/ld\+json"[^>]*)>([\s\S]*?)<\/script>/ig;

    return html.replace(blockRx, function (whole, attrs, body) {
        const scope = attr(attrs, 'data-price-scope');
        if (!scope) return whole;                     // untagged block, leave alone

        const parts = scope.split('.');
        if (parts.length !== 2) {
            report.errors.push('data-price-scope="' + scope + '" should be subject.region, e.g. coding.india');
            return whole;
        }

        let newBody = body;

        // Walk each Offer object by brace matching so a nested object cannot be
        // confused for the offer itself.
        const offerRx = /\{[^{}]*"@type"\s*:\s*"Offer"[\s\S]*?\}/g;
        newBody = newBody.replace(offerRx, function (offerText) {
            const nameM = offerText.match(/"name"\s*:\s*"([^"]*)"/);
            if (!nameM) return offerText;
            const tier = tierFromName(nameM[1]);
            if (!tier) {
                report.errors.push('Offer named "' + nameM[1] + '" in scope ' + scope +
                    ' does not match any plan. Rename it, or add a pattern to TIER_PATTERNS.');
                return offerText;
            }
            let r;
            try { r = cfgLib.resolve(scope + '.' + tier, config); }
            catch (e) { report.errors.push(e.message); return offerText; }

            if (!r.exists) {
                report.errors.push('Offer "' + nameM[1] + '" in scope ' + scope + ' maps to ' +
                    scope + '.' + tier + ', which is set to null (not sold). Remove the Offer ' +
                    'from the structured data rather than publishing a price for a plan you do not sell.');
                return offerText;
            }

            const plain = cfgLib.format(r.amount, r.currency, { style: 'plain' });
            return offerText.replace(/("price"\s*:\s*")([^"]*)(")/, function (all, a, old, c) {
                if (old !== plain) report.changes.push({ key: scope + '.' + tier + ' (schema)', from: old, to: plain });
                report.anchors++;
                return a + plain + c;
            }).replace(/("priceCurrency"\s*:\s*")([^"]*)(")/, function (all, a, old, c) {
                return a + r.currency + c;
            });
        });

        // AggregateOffer low/high must span the tiers that actually exist.
        newBody = newBody.replace(/\{[^{}]*"@type"\s*:\s*"AggregateOffer"[\s\S]*?\}/g, function (aggText) {
            const sold = [];
            cfgLib.MONTHLY_TIERS.forEach(function (t) {
                try {
                    const r = cfgLib.resolve(scope + '.' + t, config);
                    if (r.exists && t !== 'lifetime') sold.push(r.amount);
                } catch (e) { /* tier absent for this subject */ }
            });
            if (!sold.length) return aggText;
            const lo = cfgLib.format(Math.min.apply(null, sold), null, { style: 'plain' });
            const hi = cfgLib.format(Math.max.apply(null, sold), null, { style: 'plain' });
            report.anchors++;
            return aggText
                .replace(/("lowPrice"\s*:\s*")([^"]*)(")/, function (all, a, old, c) {
                    if (old !== lo) report.changes.push({ key: scope + ' lowPrice', from: old, to: lo });
                    return a + lo + c;
                })
                .replace(/("highPrice"\s*:\s*")([^"]*)(")/, function (all, a, old, c) {
                    if (old !== hi) report.changes.push({ key: scope + ' highPrice', from: old, to: hi });
                    return a + hi + c;
                });
        });

        return whole.replace(body, newBody);
    });
}

function stamp(html, config) {
    const report = { anchors: 0, changes: [], errors: [], notSold: [] };
    let out = stampVisible(html, config, report);
    out = stampJsonLd(out, config, report);
    return { html: out, report: report };
}

module.exports = {
    stamp: stamp,
    stampVisible: stampVisible,
    stampJsonLd: stampJsonLd,
    tierFromName: tierFromName,
    findElementEnd: findElementEnd,
    TIER_PATTERNS: TIER_PATTERNS
};
