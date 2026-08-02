/**
 * The parts of apply.js that other code needs to reuse.
 *
 * apply.js runs work as soon as it is required, so it cannot be imported by
 * tests. These two functions are the ones worth testing directly — they decide
 * whether a page shows a price to a human, and whether it gets the scripts that
 * localise it. apply.js imports them from here rather than keeping a second
 * copy, so the behaviour tested is the behaviour that ships.
 */

'use strict';

// The three scripts, in the order they must load: the data, then the region
// swap that consumes it, then the local-currency layer that annotates the
// result.
const PRICING_SCRIPTS = [
    '/js/pricing-data.generated.js',
    '/js/international-pricing.js',
    '/js/local-currency.js',
    '/js/country-switcher.js'
];

/**
 * Does this page show a price to a human?
 *
 * Script and style blocks are stripped first, so a page is not judged by a
 * currency symbol buried in its own JavaScript — otherwise every page carrying
 * the pricing code would look like a pricing page.
 */
function showsAPrice(html) {
    const visible = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '');
    return /₹|&#8377;|\$\s?\d|\bRs\.?\s?\d/.test(visible) || /data-price\s*=/.test(html);
}

/**
 * Make sure a page that shows a price also loads the scripts that localise it.
 *
 * This is what makes the system hold for pages that do not exist yet. Someone
 * can add a page months from now knowing nothing about any of this: if it shows
 * a price, the build gives it the scripts, and a visitor in Germany sees euros.
 *
 * It was not a hypothetical gap. 185 pages were in exactly that state,
 * including ones written for the UAE, Canada, Hong Kong and Singapore, all
 * showing Indian rupees to every visitor because nobody had added three script
 * tags by hand.
 */
function ensureScripts(html, versions) {
    if (!showsAPrice(html)) return { html: html, added: false };

    const missing = PRICING_SCRIPTS.filter(function (src) {
        return html.indexOf(src) === -1;
    });
    if (!missing.length) return { html: html, added: false };

    // Where some are already present, they stay where they are and only the
    // absentees are appended. Inserting a second copy of the data file after
    // the swap had run would reset the table it had just written.
    const block = missing.map(function (src) {
        const v = versions && versions[src] ? '?v=' + versions[src] : '';
        return '    <script src="' + src + v + '"></script>';
    }).join('\n');

    const closing = html.lastIndexOf('</body>');
    if (closing === -1) {
        // A fragment or component with no body close. Append rather than skip,
        // so the page is still covered.
        return { html: html + '\n' + block + '\n', added: true };
    }
    return {
        html: html.slice(0, closing) + block + '\n' + html.slice(closing),
        added: true
    };
}

/**
 * Stamp a content-hash version onto every pricing script tag.
 *
 * WHY THIS EXISTS — the stale-price hole the audit proved:
 * sw.js serves .js cache-first and _headers marked /*.js immutable for a
 * year, so after a price change a RETURNING visitor kept being shown — and
 * therefore charged — the old prices from window.MAC_PRICING, potentially
 * until the cache expired. The SW's background revalidation could not save
 * them, because the immutable HTTP cache satisfied the revalidation fetch too.
 *
 * A content hash in the URL ends that entirely: a changed file is a NEW URL,
 * which misses both the service-worker cache (keyed by URL) and the HTTP
 * cache, so the first page view after a deploy gets the new prices. An
 * unchanged file keeps its hash and stays cached — no cost to normal visits.
 *
 * Idempotent: an existing ?v= is rewritten, never doubled.
 */
function versionScripts(html, versions) {
    if (!versions) return html;
    let out = html;
    PRICING_SCRIPTS.forEach(function (src) {
        const v = versions[src];
        if (!v) return;
        const escaped = src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const rx = new RegExp('(src="' + escaped + ')(\\?v=[A-Za-z0-9]+)?(")', 'g');
        out = out.replace(rx, '$1?v=' + v + '$3');
    });
    return out;
}

module.exports = {
    PRICING_SCRIPTS: PRICING_SCRIPTS,
    showsAPrice: showsAPrice,
    ensureScripts: ensureScripts,
    versionScripts: versionScripts
};
