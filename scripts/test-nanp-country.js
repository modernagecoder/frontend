#!/usr/bin/env node
'use strict';
/**
 * +1 numbers are filed by area code, not by the device clock (Canada cluster plan A, Task 2).
 *
 *   node scripts/test-nanp-country.js
 *
 * Canada and the United States share country code +1. The picker used to resolve every "+1" to the US and to
 * trust the device time zone, so a Toronto parent on a laptop set to America/New_York was filed as American,
 * and the reverse. The area code settles it: CNAC's list of Canadian area codes (keyword-research-2026-09/ca/
 * facts-geo.md, section 4). Exercises the real src/js/country-code-selector.js in jsdom.
 * 555-0100 to 555-0199 are reserved by NANPA for fictional use.
 */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const ROOT = path.resolve(__dirname, '..');
const SRC = fs.readFileSync(path.join(ROOT, 'src', 'js', 'country-code-selector.js'), 'utf8');

let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };

function page(tz) {
  const dom = new JSDOM('<!doctype html><html><head></head><body><form id="f"><input type="text" name="name" value="Test Parent"><input type="tel" name="phone" id="p"><button type="submit">Send</button></form></body></html>', { runScripts: 'outside-only' });
  const win = dom.window;
  const RealDTF = Intl.DateTimeFormat;
  win.Intl = Object.assign(Object.create(Intl), {
    DateTimeFormat: function () { const f = RealDTF.apply(null, arguments); return { resolvedOptions: () => Object.assign({}, f.resolvedOptions(), { timeZone: tz }), format: d => f.format(d) }; }
  });
  win.eval(SRC);
  // jsdom leaves readyState at 'loading'; the selector attaches on DOMContentLoaded.
  win.document.dispatchEvent(new win.Event('DOMContentLoaded'));
  return win;
}

function leadFor(tz, typed) {
  const win = page(tz);
  const doc = win.document;
  const input = doc.getElementById('p');
  input.value = typed;
  input.dispatchEvent(new win.Event('input', { bubbles: true }));
  const form = doc.getElementById('f');
  form.addEventListener('submit', e => e.preventDefault());
  form.dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
  return { lead: form.__macLead, shown: input.dataset.countryIso, win };
}

const api = page('America/Toronto').MACCountryCode;
ok(api && typeof api.nanpCountry === 'function', 'MACCountryCode.nanpCountry is exposed');
if (api && api.nanpCountry) {
  for (const [d, want] of [['4165550123', 'CA'], ['6045550123', 'CA'], ['9425550123', 'CA'], ['8675550123', 'CA'], ['14165550123', 'CA'],
                           ['2125550123', 'US'], ['3125550123', 'US'], ['2425551234', 'BS'], ['41', null], ['', null]]) {
    ok(api.nanpCountry(d) === want, `nanpCountry('${d}') === ${want} (got ${api.nanpCountry(d)})`);
  }
}

const cases = [
  ['America/New_York', '+1 416 555 0123', 'CA', '4165550123'],
  ['America/New_York', '4165550123', 'CA', '4165550123'],
  ['America/Toronto', '+1 212 555 0123', 'US', '2125550123'],
  ['America/Toronto', '2125550123', 'US', '2125550123'],
  ['America/Vancouver', '(604) 555-0123', 'CA', '6045550123'],
  ['America/Los_Angeles', '604-555-0123', 'CA', '6045550123'],
  ['America/Chicago', '312 555 0123', 'US', '3125550123'],
];
for (const [tz, typed, iso, national] of cases) {
  const { lead, shown } = leadFor(tz, typed);
  ok(!!lead && lead.iso === iso && lead.national === national && shown === iso,
    `${tz}, typed "${typed}": filed ${lead && lead.iso} ${lead && lead.national}, picker shows ${shown} (want ${iso} ${national})`);
}
// An Indian number on a Canadian device is still Indian: the area-code rule only arbitrates between +1 countries.
{
  const { lead } = leadFor('America/Toronto', '+91 98765 43210');
  ok(!!lead && lead.iso === 'IN', `America/Toronto, typed "+91 98765 43210": filed ${lead && lead.iso} (want IN)`);
}

console.log(fails ? `${fails} FAILED` : 'NANP country by area code: all checks pass');
process.exit(fails ? 1 : 0);
