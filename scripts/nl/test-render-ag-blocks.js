#!/usr/bin/env node
'use strict';
/**
 * Proves render-ag.js renders the 'code' and 'ol' body blocks: a code figure in the markup that
 * src/css/ai-global.css already styles (.ag-code, .ag-code-head, .ag-code-note), with the code
 * HTML-escaped so a `<` in a script can never open a tag, and a numbered list of steps.
 * Renders a UK module in memory with one extra section. Writes nothing.
 *
 *   node scripts/nl/test-render-ag-blocks.js
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const ag = require('./lib/render-ag');

let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };

const base = require(path.join(ROOT, 'content/uk/best-online-coding-classes-uk.js'));
const extra = {
  id: 'zz-blocks', tint: '', eyebrow: 'Test', h2: 'Blocks', body: [
    { kind: 'code', label: 'Our first script', lang: 'luau', code: 'if score < 10 then\n  print("keep going") -- a & b\nend', note: 'Runs in Studio.' },
    { kind: 'ol', items: ['Install Studio', 'Open a <b>Baseplate</b>'] },
    { kind: 'code', label: 'Script 2 &middot; a coin', lang: 'luau', code: 'x = 1' }
  ]
};
let html = '';
try { html = ag.render(Object.assign({}, base, { sections: base.sections.concat([extra]) })); }
catch (e) { console.log('FAIL  render threw: ' + e.message); fails++; }

ok(/<figure class="ag-code"><figcaption class="ag-code-head"><b>Our first script<\/b><span>luau<\/span><\/figcaption>/.test(html), 'code block: figure and head');
ok(html.includes('<pre>if score &lt; 10 then\n  print("keep going") -- a &amp; b\nend</pre>'), 'code block: code escaped, newlines kept');
ok(html.includes('<p class="ag-code-note">Runs in Studio.</p></figure>'), 'code block: note inside the figure');
ok(/<ol class="ag-steps"><li>Install Studio<\/li><li>Open a <b>Baseplate<\/b><\/li><\/ol>/.test(html), 'ol block: numbered steps, item HTML kept');

// Labels are authored HTML like every other heading: an entity must reach the page once, not as &amp;middot;.
ok(html.includes('<b>Script 2 &middot; a coin</b>') && !html.includes('&amp;middot;'), 'code block: label entity not double-escaped');

console.log(fails ? `${fails} FAILED` : 'render-ag blocks: all checks pass');
process.exit(fails ? 1 : 0);
