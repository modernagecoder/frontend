// Canada pages: anchors, currency labels and JSON-LD move from the international (USD) row to the canada (CAD) row.
// usage (repo root): node scripts/pricing/ca-cad-copy.js [--write], then npm run pricing:apply.
// Prints every changed price per page; nothing is written without --write. Safe to rerun: pages already on the
// canada row are left alone. At CAD go-live, rerun after merging ca-cad-copy so any Canada page built on main
// in the meantime (old USD generator) is moved too; it must end with "no problems".
const fs = require('fs'), path = require('path');
const ROOT = process.cwd();
const cfgLib = require(path.join(ROOT, 'scripts/pricing/lib/config.js'));
const { tierFromName } = require(path.join(ROOT, 'scripts/pricing/lib/stamp.js'));
const cfg = cfgLib.load();
const WRITE = process.argv.includes('--write');
const HAND = ['coding-classes-in-canada', 'coding-classes-in-ontario', 'coding-classes-in-british-columbia', 'coding-classes-in-alberta',
  'canadian-computing-competition-ccc-prep', 'ai-and-machine-learning-classes-in-canada', 'online-math-tutor-canada'];
const slugs = fs.readdirSync(path.join(ROOT, 'content/ca')).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, ''))
  .concat(HAND.filter(s => !fs.existsSync(path.join(ROOT, 'content/ca', s + '.js'))));
const cad = (subject, tier) => { const r = cfgLib.resolve(subject + '.canada.' + tier, cfg); if (!r.exists) throw new Error('not sold ' + subject + ' ' + tier); return cfgLib.format(r.amount, r.currency, { style: 'plain' }); };
const tally = {}; const bump = k => { tally[k] = (tally[k] || 0) + 1; };
const problems = [];

for (const slug of slugs) {
  const file = path.join(ROOT, 'src/pages', slug + '.html');
  if (!fs.existsSync(file)) { problems.push(slug + ': no html'); continue; }
  const before = fs.readFileSync(file, 'utf8');
  let html = before;

  // 1. Visible anchors: the key names the plan row the crawler copy is stamped from.
  html = html.replace(/data-price="(coding|maths|agents)\.international\.(group|personal)"/g, (m, s, t) => { bump('anchor ' + s + '.' + t); return `data-price="${s}.canada.${t}"`; });
  // 2. The no-JS currency label beside each fee.
  html = html.replace(/(<[^>]*\bdata-price-currency\b[^>]*>)USD(<)/g, (m, a, b) => { bump('label'); return a + 'CAD' + b; });

  // 3. JSON-LD. Scoped blocks move to the canada scope; every USD offer becomes the CAD figure for its tier.
  html = html.replace(/<script\b([^>]*\btype\s*=\s*"application\/ld\+json"[^>]*)>([\s\S]*?)<\/script>/ig, (whole, attrs, body) => {
    const scopeM = attrs.match(/data-price-scope="([a-z]+)\.([a-z]+)"/);
    if (scopeM && scopeM[2] === 'india') return whole;
    const subject = scopeM ? scopeM[1] : 'coding';
    let newAttrs = attrs;
    if (scopeM && scopeM[2] === 'international') { newAttrs = attrs.replace(scopeM[0], `data-price-scope="${subject}.canada"`); bump('scope'); }
    const newBody = body.replace(/\{[^{}]*"@type"\s*:\s*"Offer"[^{}]*\}/g, offer => {
      if (!/"priceCurrency"\s*:\s*"USD"/.test(offer)) return offer;
      const nameM = offer.match(/"name"\s*:\s*"([^"]*)"/);
      const priceM = offer.match(/"price"\s*:\s*"([^"]*)"/);
      let out = offer;
      if (priceM && priceM[1] === '0') { bump('free offer'); }
      else {
        let tier = nameM ? tierFromName(nameM[1]) : null;
        if (!nameM && priceM) {
          // The cg Course offer carries no name, so the stamper skipped it; name it so pricing:apply owns it.
          tier = priceM[1] === '100' ? 'group' : priceM[1] === '150' ? 'personal' : null;
          if (tier) out = out.replace(/"price"\s*:/, `"name":"${tier === 'group' ? 'Group batch' : 'One to one'}","price":`);
        }
        const expectUsd = tier && cfgLib.format(cfgLib.resolve(subject + '.international.' + tier, cfg).amount, 'USD', { style: 'plain' });
        if (!tier || !priceM || priceM[1] !== expectUsd) { problems.push(`${slug}: offer ${nameM ? nameM[1] : '(no name)'} ${priceM && priceM[1]} not matched`); return offer; }
        out = out.replace(/("price"\s*:\s*")[^"]*(")/, (a, p, q) => p + cad(subject, tier) + q);
        bump('offer ' + tier);
      }
      return out.replace(/("priceCurrency"\s*:\s*")USD(")/, '$1CAD$2');
    });
    return '<script' + newAttrs + '>' + newBody + '</script>';
  });

  if (html !== before) { bump('pages changed'); if (WRITE) fs.writeFileSync(file, html, 'utf8'); }
  // Anything still priced in USD on the page after the sweep.
  const left = (html.match(/"priceCurrency"\s*:\s*"USD"|\.international\.(group|personal)"|data-price-currency[^>]*>USD/g) || []);
  if (left.length) problems.push(slug + ': USD left ' + left.join(' | '));
}
console.log('pages', slugs.length, WRITE ? '(written)' : '(dry run)');
console.log(tally);
console.log(problems.length ? problems.join('\n') : 'no problems');
