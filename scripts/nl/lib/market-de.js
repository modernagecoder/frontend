'use strict';
// Germany cluster market records (spec docs/superpowers/specs/2026-11-02-de-cluster-design.md).
// EN: English pages for Germany (hreflang en-DE). DE: German-language doors (de-DE).
// Lead contract: countryIso 'DE', countryName 'Germany' on both, so the backend and the admin panel see
// one market. Phone: German national numbers run 7 to 12 digits after the trunk 0 (backend accepts 7 to 15);
// "+49 151 ...", "0049 151 ..." and "0151 ..." all reduce to the national number.
const base = {
  name: 'Germany', iso: 'DE', dial: '+49', geoRegion: 'DE',
  phonePlaceholder: '0151 23456789', minDigits: 7, maxDigits: 12, nationalStart: '1-9', stripTrunk: true
};
const EN = Object.assign({}, base, { lang: 'en-DE', locale: 'en_DE', brandTag: 'Germany', phoneLabel: 'German phone number' });
const DE = Object.assign({}, base, { lang: 'de-DE', locale: 'de_DE', brandTag: 'Deutschland', phoneLabel: 'Deutsche Telefonnummer' });
module.exports = { EN, DE };
