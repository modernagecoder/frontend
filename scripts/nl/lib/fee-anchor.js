'use strict';
// Canada pages are currency-neutral (spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, section 3.1):
// the fee is a data-price anchor that international-pricing.js rewrites to the visitor's currency, so the same
// page is right in INR, USD and CAD. The text inside the anchor is only the no-JavaScript fallback, which
// crawlers, AI engines and the .md twin read; on a Canadian page it is the CAD row (owner 2026-10-24), stamped
// from pricing.config.jsonc by pricing:apply. Other markets keep their printed USD figures.
const cfgLib = require('../../pricing/lib/config');
const NEUTRAL = new Set(['CA']);
const neutralFee = page => NEUTRAL.has((page.market || {}).iso);
// The pricing.config.jsonc region whose figures the page's crawler copy and structured data carry.
const feeRegion = page => neutralFee(page) ? 'canada' : 'international';
let config;
const resolve = (subject, region, tier) => {
  config = config || cfgLib.load();
  const r = cfgLib.resolve(subject + '.' + region + '.' + tier, config);
  if (!r.exists) throw new Error(subject + '.' + region + '.' + tier + ' is not sold');
  return r;
};
// page.priceSubject: 'coding' (default) or 'maths', the pricing.config.jsonc subject the page's courses sell under.
const feeAnchor = (page, tier) => {
  const subject = page.priceSubject || 'coding';
  const region = feeRegion(page);
  const r = resolve(subject, region, tier);
  // The ISO code beside it settles which dollar: Canadians also write $.
  return `<span data-price="${subject}.${region}.${tier}">${cfgLib.format(r.amount, r.currency, { style: 'display' })}</span> <span class="fee-cur" data-price-currency>${r.currency}</span>`;
};
// A structured-data offer price for the page's region: { price, priceCurrency }. tier 'free' is the first class.
const ldPrice = (page, tier) => {
  const r = resolve('coding', feeRegion(page), tier === 'free' ? 'group' : tier);
  return { price: tier === 'free' ? '0' : cfgLib.format(r.amount, r.currency, { style: 'plain' }), priceCurrency: r.currency };
};
// The fee as plain text for the .md twin: "CAD 140" on a Canadian page (the first class reads "Free", as on
// the page). Other markets keep the USD figures their pages print.
const feeText = (page, tier) => {
  if (!neutralFee(page)) return { free: 'USD 0', group: 'USD 100', personal: 'USD 150' }[tier];
  if (tier === 'free') return 'Free';
  const r = resolve('coding', 'canada', tier);
  return r.currency + ' ' + cfgLib.format(r.amount, r.currency, { style: 'plain' });
};
module.exports = { neutralFee, feeAnchor, feeRegion, ldPrice, feeText };
