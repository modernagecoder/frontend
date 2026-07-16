/**
 * build-internal-links.js
 * ------------------------------------------------------------------
 * Filesystem-driven hub-and-spoke internal-linking generator.
 *
 * Replaces the random/stale sibling logic that used to live in
 * scripts/build-seo-hubs.js (pickSiblings() hashed across a flat,
 * hard-coded 48-city list, so Kolkata linked to Bengaluru and the
 * Park Street locality linked to Chandigarh).
 *
 * This script:
 *   1. Scans every src/pages/*.html.
 *   2. Classifies each page: india-hub | country | state | city |
 *      locality | complex  (topic clusters are left untouched).
 *   3. Reads each city's <meta name="geo.region"> ISO code to map it
 *      to its Indian state, and builds the relationship graph:
 *        India -> States -> Cities -> (Kolkata/Howrah) Localities/Complexes
 *   4. Regenerates the block between <!-- BEGIN_RELATED_PAGES --> and
 *      <!-- END_RELATED_PAGES --> with correct breadcrumbs, true
 *      siblings, parent/child links and money-page CTAs.
 *      Where no marker exists yet (complexes, countries, India hub) it
 *      inserts the block immediately before the footer.
 *   5. Idempotent — safe to re-run.
 *
 * Usage:
 *   node scripts/build-internal-links.js --dry     # preview, no writes
 *   node scripts/build-internal-links.js           # apply
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const DRY = process.argv.includes('--dry');

const REL_START = '<!-- BEGIN_RELATED_PAGES -->';
const REL_END = '<!-- END_RELATED_PAGES -->';

// How many sibling/child links to show per group (keeps the block tidy).
const MAX_SIBLING_CITIES = 8;
const MAX_AREAS = 8;
const MAX_TOP_CITIES = 12;

// ---------------------------------------------------------------------------
// Reference data
// ---------------------------------------------------------------------------

// ISO 3166-2:IN region code => [state-slug, State Name]. Includes the
// non-standard codes this site actually uses (IN-CT, IN-OR, IN-UK).
const ISO_TO_STATE = {
  'IN-AP': ['andhra-pradesh', 'Andhra Pradesh'],
  'IN-AR': ['arunachal-pradesh', 'Arunachal Pradesh'],
  'IN-AS': ['assam', 'Assam'],
  'IN-BR': ['bihar', 'Bihar'],
  'IN-CG': ['chhattisgarh', 'Chhattisgarh'],
  'IN-CT': ['chhattisgarh', 'Chhattisgarh'],
  'IN-GA': ['goa', 'Goa'],
  'IN-GJ': ['gujarat', 'Gujarat'],
  'IN-HR': ['haryana', 'Haryana'],
  'IN-HP': ['himachal-pradesh', 'Himachal Pradesh'],
  'IN-JH': ['jharkhand', 'Jharkhand'],
  'IN-JK': ['jammu-and-kashmir', 'Jammu & Kashmir'],
  'IN-KA': ['karnataka', 'Karnataka'],
  'IN-KL': ['kerala', 'Kerala'],
  'IN-MP': ['madhya-pradesh', 'Madhya Pradesh'],
  'IN-MH': ['maharashtra', 'Maharashtra'],
  'IN-MN': ['manipur', 'Manipur'],
  'IN-OD': ['odisha', 'Odisha'],
  'IN-OR': ['odisha', 'Odisha'],
  'IN-PB': ['punjab', 'Punjab'],
  'IN-RJ': ['rajasthan', 'Rajasthan'],
  'IN-SK': ['sikkim', 'Sikkim'],
  'IN-TN': ['tamil-nadu', 'Tamil Nadu'],
  'IN-TG': ['telangana', 'Telangana'],
  'IN-TR': ['tripura', 'Tripura'],
  'IN-UP': ['uttar-pradesh', 'Uttar Pradesh'],
  'IN-UK': ['uttarakhand', 'Uttarakhand'],
  'IN-UT': ['uttarakhand', 'Uttarakhand'],
  'IN-WB': ['west-bengal', 'West Bengal'],
  // Union territories with city pages but (usually) no dedicated state page
  'IN-DL': ['delhi', 'Delhi'],
  'IN-CH': ['chandigarh', 'Chandigarh'],
  'IN-PY': ['puducherry', 'Puducherry'],
};

const COUNTRY_SLUGS = new Set([
  'australia', 'canada', 'germany', 'ireland', 'new-zealand', 'singapore',
  'sweden', 'switzerland', 'uae', 'united-kingdom', 'united-states',
]);

const COUNTRY_NAMES = {
  australia: 'Australia', canada: 'Canada', germany: 'Germany', ireland: 'Ireland',
  'new-zealand': 'New Zealand', singapore: 'Singapore', sweden: 'Sweden',
  switzerland: 'Switzerland', uae: 'the UAE', 'united-kingdom': 'the United Kingdom',
  'united-states': 'the United States',
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const SMALL_WORDS = new Set(['and', 'of', 'the', 'in', 'on', 'at']);

function titleCase(slug) {
  return slug
    .split('-')
    .map((w, i) => {
      if (i > 0 && SMALL_WORDS.has(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

function readMeta(content, name) {
  const re = new RegExp(`<meta[^>]+name=["']${name}["'][^>]*content=["']([^"']*)["']`, 'i');
  const m = content.match(re);
  return m ? m[1].trim() : null;
}

function fileExists(slug) {
  return fs.existsSync(path.join(PAGES_DIR, `${slug}.html`));
}

// ---------------------------------------------------------------------------
// Classification + inventory
// ---------------------------------------------------------------------------

function classify(slug, content) {
  if (slug === 'coding-classes-in-india') return { type: 'india-hub' };

  if (slug.startsWith('best-coding-class-in-')) {
    const city = slug.replace('best-coding-class-in-', '');
    const iso = readMeta(content, 'geo.region') || '';
    const st = ISO_TO_STATE[iso] || null;
    return { type: 'city', city, iso, stateSlug: st ? st[0] : null, stateName: st ? st[1] : null };
  }

  if (slug.startsWith('coding-classes-near-')) {
    // coding-classes-near-{area}-{city}  (city = kolkata | howrah)
    const rest = slug.replace('coding-classes-near-', '');
    const parts = rest.split('-');
    const city = parts[parts.length - 1]; // kolkata / howrah
    const area = parts.slice(0, -1).join('-');
    return { type: 'locality', city, area };
  }

  if (slug.startsWith('coding-classes-in-')) {
    const x = slug.replace('coding-classes-in-', '');
    if (COUNTRY_SLUGS.has(x)) return { type: 'country', country: x };
    // Is it a known Indian state slug?
    const isState = Object.values(ISO_TO_STATE).some(([s]) => s === x);
    if (isState) return { type: 'state', stateSlug: x, stateName: titleCase(x) };
    // Otherwise it MIGHT be a Kolkata-area residential complex/society — but only if
    // its geo.placename actually sits in Kolkata or Howrah. Gulf city/country pages
    // (Dubai, Doha, Riyadh, Qatar, Saudi Arabia, ...) also match coding-classes-in-<x>;
    // filing them as Kolkata complexes stamped them "in West Bengal" and injected them
    // into Kolkata's neighbourhood list. Anything not placed in Kolkata/Howrah is left
    // as 'other' (untouched) so its own design and links stay intact.
    const place = (readMeta(content, 'geo.placename') || '').toLowerCase();
    if (place.includes('howrah')) return { type: 'complex', city: 'howrah', area: x };
    if (place.includes('kolkata') || place.includes('bengal')) return { type: 'complex', city: 'kolkata', area: x };
    return { type: 'other' };
  }

  return { type: 'other' };
}

function buildInventory() {
  const files = fs.readdirSync(PAGES_DIR).filter((f) => f.endsWith('.html'));
  const pages = [];
  for (const f of files) {
    const slug = f.replace(/\.html$/, '');
    const content = fs.readFileSync(path.join(PAGES_DIR, f), 'utf8');
    const info = classify(slug, content);
    pages.push({ slug, file: f, ...info, content });
  }

  // Build relationship maps from the classified pages.
  const citiesByState = {};   // stateSlug -> [citySlug, ...]
  const cityState = {};       // citySlug  -> { stateSlug, stateName }
  const areasByCity = { kolkata: [], howrah: [] }; // city -> [{slug,label}]

  for (const p of pages) {
    if (p.type === 'city' && p.stateSlug) {
      (citiesByState[p.stateSlug] = citiesByState[p.stateSlug] || []).push(p.city);
      cityState[p.city] = { stateSlug: p.stateSlug, stateName: p.stateName };
    }
    if (p.type === 'locality') {
      const label = `${titleCase(p.area)}, ${titleCase(p.city)}`;
      (areasByCity[p.city] = areasByCity[p.city] || []).push({ slug: p.slug, label });
    }
    if (p.type === 'complex') {
      const label = titleCase(p.area);
      (areasByCity[p.city] = areasByCity[p.city] || []).push({ slug: p.slug, label });
    }
  }

  // Sort for deterministic output.
  Object.values(citiesByState).forEach((arr) => arr.sort());
  Object.values(areasByCity).forEach((arr) => arr.sort((a, b) => a.label.localeCompare(b.label)));

  return { pages, citiesByState, cityState, areasByCity };
}

// ---------------------------------------------------------------------------
// Block rendering
// ---------------------------------------------------------------------------

const S = {
  section: "background:#0a0a12;border-top:1px solid rgba(129,140,248,.22);padding:46px 20px 50px;margin:48px 0 0;font-family:'Inter',system-ui,-apple-system,sans-serif",
  wrap: 'max-width:1100px;margin:0 auto',
  crumb: 'font-size:13px;color:#94a3b8;margin:0 0 18px;line-height:1.7',
  crumbA: 'color:#a5b4fc;text-decoration:none',
  crumbSep: 'color:#475569;margin:0 7px',
  h2: 'color:#fff;font-size:1.3rem;font-weight:800;margin:0 0 6px;letter-spacing:-.2px',
  lead: 'color:#94a3b8;font-size:.95rem;margin:0 0 18px;max-width:780px',
  groupH: 'color:#cbd5e1;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.6px;margin:20px 0 10px',
  grid: 'list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(228px,1fr));gap:8px',
  link: 'display:block;padding:10px 14px;background:rgba(255,255,255,.03);border:1px solid rgba(129,140,248,.16);border-radius:8px;color:#e2e8f0;text-decoration:none;font-size:.9rem',
  ctaRow: 'display:flex;flex-wrap:wrap;gap:12px;margin-top:24px',
  ctaPrimary: 'display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,#6366f1,#a855f7);color:#fff;padding:12px 26px;border-radius:10px;font-weight:700;font-size:.92rem;text-decoration:none',
  ctaGhost: 'display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.04);border:1px solid rgba(129,140,248,.3);color:#c7d2fe;padding:12px 24px;border-radius:10px;font-weight:600;font-size:.92rem;text-decoration:none',
};

function crumb(parts) {
  // parts: [{label, href?}], last one rendered bold/plain.
  const segs = parts.map((p, i) => {
    const last = i === parts.length - 1;
    if (last || !p.href) return `<strong style="color:#e2e8f0;font-weight:700">${p.label}</strong>`;
    return `<a href="${p.href}" style="${S.crumbA}">${p.label}</a>`;
  });
  return segs.join(`<span style="${S.crumbSep}">/</span>`);
}

function group(title, items) {
  if (!items.length) return '';
  const lis = items
    .map((it) => `        <li><a href="/${it.slug}" style="${S.link}">${it.label}</a></li>`)
    .join('\n');
  return `      <h3 style="${S.groupH}">${title}</h3>
      <ul style="${S.grid}">
${lis}
      </ul>`;
}

function ctas(extra = []) {
  const buttons = [
    `<a href="/courses" style="${S.ctaPrimary}">Browse all courses &rarr;</a>`,
    `<a href="/book-demo" style="${S.ctaGhost}">Book a free demo</a>`,
    ...extra.map((e) => `<a href="/${e.slug}" style="${S.ctaGhost}">${e.label}</a>`),
  ];
  return `      <div style="${S.ctaRow}">
        ${buttons.join('\n        ')}
      </div>`;
}

function wrapBlock(inner) {
  return `${REL_START}
<section aria-label="Related pages" style="${S.section}">
  <div style="${S.wrap}">
${inner}
  </div>
</section>
${REL_END}
`;
}

function cityLink(citySlug) {
  return { slug: `best-coding-class-in-${citySlug}`, label: `Best Coding Class in ${titleCase(citySlug)}` };
}

function buildBlock(page, inv) {
  const { citiesByState, cityState, areasByCity } = inv;

  if (page.type === 'city') {
    const stateSlug = page.stateSlug;
    const stateName = page.stateName;
    const hasStatePage = stateSlug && fileExists(`coding-classes-in-${stateSlug}`);
    const cityName = titleCase(page.city);

    const breadcrumb = [
      { label: 'Home', href: '/' },
      { label: 'Coding Classes in India', href: '/coding-classes-in-india' },
    ];
    if (stateName) {
      breadcrumb.push(hasStatePage
        ? { label: `Coding Classes in ${stateName}`, href: `/coding-classes-in-${stateSlug}` }
        : { label: stateName });
    }
    breadcrumb.push({ label: `Best Coding Class in ${cityName}` });

    const groups = [];
    // Neighbourhoods for Kolkata / Howrah.
    const areas = areasByCity[page.city] || [];
    if (areas.length) {
      groups.push(group(`Coding classes in ${cityName} neighbourhoods`, areas.slice(0, MAX_AREAS)));
    }
    // Sibling cities in the same state.
    const siblings = (citiesByState[stateSlug] || []).filter((c) => c !== page.city);
    if (siblings.length) {
      groups.push(group(
        stateName ? `Other cities in ${stateName}` : 'Other cities',
        siblings.slice(0, MAX_SIBLING_CITIES).map(cityLink),
      ));
    }

    const extra = [];
    if (hasStatePage) extra.push({ slug: `coding-classes-in-${stateSlug}`, label: `All cities in ${stateName}` });
    extra.push({ slug: 'coding-classes-in-india', label: 'All cities in India' });

    const inner = `      <nav aria-label="Breadcrumb" style="${S.crumb}">${crumb(breadcrumb)}</nav>
      <h2 style="${S.h2}">Coding &amp; maths classes near ${cityName}</h2>
      <p style="${S.lead}">Live online classes for kids, teens and adults${stateName ? ` across ${stateName}` : ''} — Scratch, Python, web development, AI/ML and DSA in small 4&ndash;8 student batches. Explore nearby locations or book a free demo.</p>
${groups.filter(Boolean).join('\n')}
${ctas(extra)}`;
    return wrapBlock(inner);
  }

  if (page.type === 'state') {
    const cities = (citiesByState[page.stateSlug] || []);
    const breadcrumb = [
      { label: 'Home', href: '/' },
      { label: 'Coding Classes in India', href: '/coding-classes-in-india' },
      { label: `Coding Classes in ${page.stateName}` },
    ];
    const inner = `      <nav aria-label="Breadcrumb" style="${S.crumb}">${crumb(breadcrumb)}</nav>
      <h2 style="${S.h2}">Coding classes across ${page.stateName}</h2>
      <p style="${S.lead}">Modern Age Coders runs live online coding and maths classes in every major city of ${page.stateName}. Pick your city below, or book a free demo from anywhere.</p>
${group(`Cities in ${page.stateName}`, cities.map(cityLink))}
${ctas([{ slug: 'coding-classes-in-india', label: 'All cities in India' }])}`;
    return wrapBlock(inner);
  }

  if (page.type === 'locality' || page.type === 'complex') {
    const cityName = titleCase(page.city);
    const stateName = 'West Bengal';
    const areaLabel = page.type === 'locality'
      ? `${titleCase(page.area)}, ${cityName}`
      : titleCase(page.area);
    const breadcrumb = [
      { label: 'Home', href: '/' },
      { label: 'Coding Classes in India', href: '/coding-classes-in-india' },
      { label: `Coding Classes in ${stateName}`, href: '/coding-classes-in-west-bengal' },
      { label: `Best Coding Class in ${cityName}`, href: `/best-coding-class-in-${page.city}` },
      { label: areaLabel },
    ];
    const otherAreas = (areasByCity[page.city] || []).filter((a) => a.slug !== page.slug);
    const inner = `      <nav aria-label="Breadcrumb" style="${S.crumb}">${crumb(breadcrumb)}</nav>
      <h2 style="${S.h2}">Coding &amp; maths classes near ${areaLabel}</h2>
      <p style="${S.lead}">Live online small-batch classes for students near ${areaLabel} — no commute, expert mentors, real projects from day one. Explore other ${cityName} areas or book a free demo.</p>
${group(`Other areas in ${cityName}`, otherAreas.slice(0, MAX_AREAS))}
${ctas([
      { slug: `best-coding-class-in-${page.city}`, label: `All ${cityName} classes` },
      { slug: 'coding-classes-in-west-bengal', label: 'All West Bengal cities' },
    ])}`;
    return wrapBlock(inner);
  }

  if (page.type === 'country') {
    const name = COUNTRY_NAMES[page.country] || titleCase(page.country);
    const others = [...COUNTRY_SLUGS]
      .filter((c) => c !== page.country)
      .sort()
      .map((c) => ({ slug: `coding-classes-in-${c}`, label: `Coding Classes in ${COUNTRY_NAMES[c] || titleCase(c)}` }));
    const breadcrumb = [
      { label: 'Home', href: '/' },
      { label: `Coding Classes in ${name}` },
    ];
    const inner = `      <nav aria-label="Breadcrumb" style="${S.crumb}">${crumb(breadcrumb)}</nav>
      <h2 style="${S.h2}">Live online coding classes for students in ${name}</h2>
      <p style="${S.lead}">Modern Age Coders teaches students worldwide over live video, in small 4&ndash;8 batches, with timings that suit your timezone. Explore other regions or book a free demo.</p>
${group('Coding classes in other countries', others)}
${ctas([{ slug: 'coding-classes-in-india', label: 'Coding Classes in India' }])}`;
    return wrapBlock(inner);
  }

  if (page.type === 'india-hub') {
    // slug -> State Name (dedup the many ISO codes that point at one state).
    const stateNameOf = (slug) => {
      const k = Object.keys(ISO_TO_STATE).find((kk) => ISO_TO_STATE[kk][0] === slug);
      return k ? ISO_TO_STATE[k][1] : titleCase(slug);
    };
    const stateSlugsWithPages = Object.values(ISO_TO_STATE)
      .map(([s]) => s)
      .filter((s, i, a) => a.indexOf(s) === i)
      .filter((s) => fileExists(`coding-classes-in-${s}`))
      .sort();
    const stateItems = stateSlugsWithPages.map((s) => ({
      slug: `coding-classes-in-${s}`,
      label: `Coding Classes in ${stateNameOf(s)}`,
    }));

    // EVERY city page, grouped under its state (all 131 become 2 clicks from home).
    const cityGroupsHtml = Object.keys(citiesByState)
      .sort((a, b) => stateNameOf(a).localeCompare(stateNameOf(b)))
      .map((s) => {
        const cities = (citiesByState[s] || []).slice().sort();
        return group(`Coding classes in ${stateNameOf(s)}`, cities.map(cityLink));
      });

    // Kolkata & Howrah neighbourhoods + residential complexes (all 47 near-* + 25 complexes).
    const kolAreas = areasByCity['kolkata'] || [];
    const howAreas = areasByCity['howrah'] || [];
    const areaGroupsHtml = [
      group('Coding classes in Kolkata neighbourhoods &amp; residential complexes', kolAreas),
      group('Coding classes in Howrah neighbourhoods &amp; complexes', howAreas),
    ];

    const breadcrumb = [
      { label: 'Home', href: '/' },
      { label: 'Coding Classes in India' },
    ];
    const inner = `      <nav aria-label="Breadcrumb" style="${S.crumb}">${crumb(breadcrumb)}</nav>
      <h2 style="${S.h2}">Browse coding classes by state &amp; city</h2>
      <p style="${S.lead}">Live online coding and maths classes for kids, teens and adults across India &mdash; small 4&ndash;8 student batches, expert mentors, real projects. Choose your state, city or neighbourhood below.</p>
${group('Coding classes by state', stateItems)}
${cityGroupsHtml.filter(Boolean).join('\n')}
${areaGroupsHtml.filter(Boolean).join('\n')}
${ctas([{ slug: 'best-coding-classes-online', label: 'Best Coding Classes Online' }])}`;
    return wrapBlock(inner);
  }

  return null;
}

// ---------------------------------------------------------------------------
// Replace / insert
// ---------------------------------------------------------------------------

function applyBlock(content, block) {
  if (content.includes(REL_START) && content.includes(REL_END)) {
    const re = new RegExp(`${REL_START}[\\s\\S]*?${REL_END}\\n?`);
    return content.replace(re, block);
  }
  // No markers — insert before the footer.
  const footerMarker = '<!-- BEGIN_INLINED_FOOTER -->';
  if (content.includes(footerMarker)) {
    return content.replace(footerMarker, `${block}\n${footerMarker}`);
  }
  const footerTag = /(<footer\b[^>]*>)/i;
  if (footerTag.test(content)) {
    return content.replace(footerTag, `${block}\n$1`);
  }
  return null; // could not place
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const inv = buildInventory();
  const counts = {};
  let written = 0;
  const skipped = [];

  for (const page of inv.pages) {
    counts[page.type] = (counts[page.type] || 0) + 1;
    if (!['city', 'state', 'locality', 'complex', 'country', 'india-hub'].includes(page.type)) continue;

    const block = buildBlock(page, inv);
    if (!block) { skipped.push(`${page.slug} (no block)`); continue; }

    const next = applyBlock(page.content, block);
    if (next == null) { skipped.push(`${page.slug} (no footer anchor)`); continue; }
    if (next === page.content) continue; // nothing changed

    if (!DRY) fs.writeFileSync(path.join(PAGES_DIR, page.file), next, 'utf8');
    written += 1;
  }

  console.log(`\n${DRY ? '[DRY RUN] ' : ''}Internal-link wiring`);
  console.log('Page inventory by type:');
  Object.entries(counts).sort().forEach(([t, n]) => console.log(`  ${t.padEnd(12)} ${n}`));
  console.log(`\n${DRY ? 'Would update' : 'Updated'} ${written} pages.`);
  if (skipped.length) {
    console.log(`Skipped ${skipped.length}:`);
    skipped.slice(0, 30).forEach((s) => console.log(`  - ${s}`));
  }
}

main();
