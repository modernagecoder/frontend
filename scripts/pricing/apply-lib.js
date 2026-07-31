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
    '/js/local-currency.js'
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
function ensureScripts(html) {
    if (!showsAPrice(html)) return { html: html, added: false };

    const missing = PRICING_SCRIPTS.filter(function (src) {
        return html.indexOf(src) === -1;
    });
    if (!missing.length) return { html: html, added: false };

    // Where some are already present, they stay where they are and only the
    // absentees are appended. Inserting a second copy of the data file after
    // the swap had run would reset the table it had just written.
    const block = missing.map(function (src) {
        return '    <script src="' + src + '"></script>';
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

module.exports = {
    PRICING_SCRIPTS: PRICING_SCRIPTS,
    showsAPrice: showsAPrice,
    ensureScripts: ensureScripts
};
