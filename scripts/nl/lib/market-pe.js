'use strict';
// Peru cluster market records (spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md).
// EN: English pages for Peru (hreflang en-PE). ES: Spanish-language doors (es-PE).
// Every class is live, online and taught in English (owner 2026-11-09); the Spanish pages say so.
// Lead contract: countryIso 'PE', countryName 'Peru' on both, so the backend and the admin panel see one
// market. Phone: mobiles are 9 digits starting with 9; landlines are 8 digits with the area code (Lima 1).
// "+51 987 654 321", "0051 987..." and "987 654 321" all reduce to the national number (backend PE: [8, 9]).
const base = {
  name: 'Peru', iso: 'PE', dial: '+51', geoRegion: 'PE',
  phonePlaceholder: '987 654 321', minDigits: 8, maxDigits: 9, nationalStart: '1-9', stripTrunk: true
};
const EN = Object.assign({}, base, { lang: 'en-PE', locale: 'en_PE', brandTag: 'Peru', phoneLabel: 'Peru phone number' });
const ES = Object.assign({}, base, { lang: 'es-PE', locale: 'es_PE', brandTag: 'Perú', phoneLabel: 'Número de teléfono de Perú' });
module.exports = { EN, ES };
