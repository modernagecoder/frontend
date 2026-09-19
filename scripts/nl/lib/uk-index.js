'use strict';
/**
 * The built pages of the UK cluster, read from content/uk as TEXT.
 *
 * The UK hub lists every UK page and the city hubs list their boroughs and areas, so the modules
 * refer to each other; loading them with require() would be circular. This reads the few fields
 * the indexes need straight from the source instead. A page counts as built once
 * src/pages/<slug>.html exists.
 *
 *   const { builtUkPages } = require('../../scripts/nl/lib/uk-index.js');
 *   builtUkPages() -> [{ file, slug, group, label, place, routeLabel, pageType }]
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const DIR = path.join(ROOT, 'content', 'uk');
const unq = s => s.replace(/\\'/g, "'");
const field = (src, re) => { const m = src.match(re); return m ? unq(m[1]) : ''; };
const STR = "'((?:[^'\\\\]|\\\\.)*)'";

function builtUkPages() {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter(f => f.endsWith('.js')).map(f => {
    const src = fs.readFileSync(path.join(DIR, f), 'utf8');
    const hub = field(src, /\n  hub: \{([^}]*)\}/);
    return {
      file: f,
      slug: field(src, /\n  slug: '([^']+)'/),
      group: field(hub, /group: '([^']+)'/),
      label: field(hub, new RegExp('label: ' + STR)),
      place: field(src, new RegExp('\\n  place: \\{\\s*name: ' + STR)),
      routeLabel: field(src, new RegExp('\\n  routeLabel: ' + STR)),
      pageType: field(src, /\n  pageType: '([^']+)'/)
    };
  }).filter(p => p.slug && fs.existsSync(path.join(ROOT, 'src', 'pages', p.slug + '.html')));
}

module.exports = { builtUkPages };
