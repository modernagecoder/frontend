// Canada pages after the CAD crawler copy: each visitor must still see only their own currency.
// usage: start the dev server (npm run dev, or PORT=3002 in a worktree), then node scripts/pricing/ca-cad-views.js <port>
// The AI and ML Canada page quotes real funding figures ($100M, CAD), so its BAD hits there are article facts.
const path = require('path');
const { chromium } = require(path.join(process.cwd(), 'node_modules', 'playwright'));
const port = process.argv[2] || 3002;
const PAGES = ['/coding-classes-in-canada', '/coding-and-ai-classes-in-toronto', '/coding-classes-in-british-columbia', '/ccc-junior-guide', '/online-math-tutor-canada',
  '/coding-classes-in-ontario', '/ai-and-machine-learning-classes-in-canada', '/best-online-coding-classes-in-canada'];
const VIEWS = [
  { name: 'toronto test', tz: 'America/Toronto', locale: 'en-IN', q: '?test=canada', want: 'CAD', fee: /\$140|\$210|\$17\.50|\$26\.25/, bad: /₹|\bUSD\b|\$100(?![\d,.])|\$150(?![\d,.])/ },
  { name: 'toronto flag off', tz: 'America/Toronto', locale: 'en-CA', q: '', want: 'USD', fee: /\$100|\$150|\$12\.50|\$18\.75/, bad: /₹|\bCAD\b|\$140(?![\d,.])|\$210(?![\d,.])/ },
  { name: 'new york', tz: 'America/New_York', locale: 'en-US', q: '', want: 'USD', fee: /\$100|\$150|\$12\.50|\$18\.75/, bad: /₹|\bCAD\b|\$140(?![\d,.])|\$210(?![\d,.])/ },
  { name: 'kolkata', tz: 'Asia/Kolkata', locale: 'en-IN', q: '', want: 'INR', fee: /₹/, bad: /\bCAD\b|\bUSD\b|\$140(?![\d,.])|\$210(?![\d,.])/ },
];
(async () => {
  const b = await chromium.launch();
  let fails = 0;
  for (const v of VIEWS) for (const url of PAGES) {
    const ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, timezoneId: v.tz, locale: v.locale });
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message.slice(0, 80)));
    await p.route(/googletagmanager|google-analytics|doubleclick|facebook|clarity/, r => r.abort());
    await p.goto(`http://localhost:${port}${url}${v.q}`, { waitUntil: 'load', timeout: 90000 });
    await p.waitForTimeout(600);
    const r = await p.evaluate(() => ({
      anchors: [...document.querySelectorAll('[data-price]')].map(e => e.textContent.trim()),
      labels: [...new Set([...document.querySelectorAll('[data-price-currency]')].map(e => e.textContent.trim()))],
      region: window.__MAC_REGION, text: document.body.innerText.replace(/\s+/g, ' ')
    }));
    const badHit = (r.text.match(v.bad) || [])[0];
    const ok = r.anchors.length && r.anchors.every(a => v.fee.test(a)) && (!r.labels.length || (r.labels.length === 1 && r.labels[0] === v.want)) && !badHit && !errs.length;
    if (!ok) fails++;
    console.log(ok ? 'ok  ' : 'FAIL', v.name.padEnd(16), url.padEnd(44), r.region, 'anchors', [...new Set(r.anchors)].join(','), 'labels', r.labels.join(','),
      badHit ? 'BAD "' + r.text.slice(Math.max(0, r.text.search(v.bad) - 40), r.text.search(v.bad) + 20) + '"' : '', errs.length ? 'ERR ' + errs.join(' | ') : '');
    await ctx.close();
  }
  console.log(fails ? fails + ' FAILED' : 'all views clean');
  await b.close();
})();
