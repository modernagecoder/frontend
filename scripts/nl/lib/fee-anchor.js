'use strict';
// Canada pages are currency-neutral (spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, section 3.1):
// the fee is a data-price anchor that international-pricing.js rewrites to the visitor's currency, so the same
// page is right in INR, USD and, once the Canadian region is live, CAD. The text inside the anchor is only the
// no-JavaScript fallback. Other markets keep their printed USD figures.
const NEUTRAL = new Set(['CA']);
const neutralFee = page => NEUTRAL.has((page.market || {}).iso);
// page.priceSubject: 'coding' (default) or 'maths', the pricing.config.jsonc subject the page's courses sell under.
const feeAnchor = (page, tier) => {
  const subject = page.priceSubject || 'coding';
  const fallback = tier === 'group' ? '$100' : '$150';
  return `<span data-price="${subject}.international.${tier}">${fallback}</span>`;
};
module.exports = { neutralFee, feeAnchor };
