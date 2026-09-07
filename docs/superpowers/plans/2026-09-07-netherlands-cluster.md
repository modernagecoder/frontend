# Netherlands Cluster Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build up to 131 Netherlands pages (place pages on the `cg-` system, AI/Python/Java/app and age doors on the `ag-` system), one page per commit, every page through nine gates, without waiting for per-page approval (owner instruction 2026-09-07: "start build one page by one page ... after completion start building next dont wait for my approval").

**Architecture:** One content module per page in `content/nl/<slug>.js` holds every word of prose, the picks, the ladder, the FAQ and the dossier. A renderer in `scripts/nl/` turns it into the HTML, the `.md` twin, the dossier entry and the seven registrations. The template carries no meaningful prose of its own, so duplication can only come from an author, never from the builder. The existing gates (`verify-cluster-pages.js`, `check-cluster-uniqueness.js`, `audit-rendered-ag-pages.mjs --prefix=cg`, `wire-coding-global-routes.js`) are consumed, not replaced.

**Tech Stack:** Node 22 (CommonJS scripts, matching `scripts/`), Playwright (already installed for the rendered audit), the existing `coding-global.css` and `ai-global.css`.

**Spec:** `docs/superpowers/specs/2026-09-07-netherlands-cluster-design.md`

**Progress tracker (the file that survives context compaction):** `NETHERLANDS-PROGRESS.md` at the repo root. Update it after every page.

## Global Constraints

- Brand facts from `scripts/brand-facts.json` only: students `10,000+`, reviews `547`, rating `4.9`, founded `2020`, countries `25+`, ages `6 to 67`, **group batch `5 to 10`** (owner ruling 2026-09-03; the older `cg-` pages still say 5 to 8 and must NOT be copied).
- Prices: USD only. Group USD 100 a month, private USD 150 a month, first class free. No `data-price` region switching on these pages (they are written for one market, like every live `cg-` page). Never a price inside an FAQ answer that is also in the FAQPage schema? On this cluster the fee FAQ IS boilerplate and IS in the schema, exactly as on all 100 live `cg-` pages; keep that convention.
- Lead contract: `countryIso:'NL'`, `countryCode:'+31'`, `countryName:'Netherlands'`, nine local digits, placeholder `6 XXXX XXXX`, no `+1` strip, POST `/api/contact/submit`, `attribution.formPage` = the page path.
- No em dashes, no emoji, no `AggregateRating`, no fabricated review (the six approved reviews verbatim), no second currency, no Dutch address, no Dutch phone number, no `LocalBusiness`.
- Every hard number attributed to a named source and date in the sentence. A search-result summary is not a source.
- Word floors by page type: district 1,400 · province 1,800 · city 2,200 · market/door 3,000 (draft doors to 3,300).
- Uniqueness: warn above 6 percent, fail above 12 percent, seven-word shingles, against every `cg-` sibling and both live Netherlands pages.
- Chrome-adjacent prose written fresh per page: hero closer, delivery cells, fees closer, form links, AI section closer, boilerplate FAQ answers (centre / time / what happens next).
- The kill criterion: fewer than eight verifiable place-specific facts means the page is skipped and recorded as skipped in the tracker.
- Personality `<style>` block per page: every selector prefixed `.cg-root.cg-<code>`, whitelist properties (layout, type, border, token colours), 40 lines max, no fixed/absolute, no z-index, transform, filter, box-shadow, gradient, animation, opacity, `!important`, raw hex, other `@media`.
- Market codes are letters only (the accent loader regex is `[a-z]+`).
- One commit per page. Commit message: `NL cluster: <slug> (<type>)`.

---

## File structure

| File | Responsibility |
|---|---|
| `content/nl/<slug>.js` | One page's entire content: meta, place chain, code, accent, picks, sections, alignment rows, project, ladder, delivery, FAQ, next links, dossier, personality CSS. Exports a plain object. |
| `scripts/nl/lib/catalogue.js` | `course(slug)` returns `{slug, title, image, url}` from `content/courses/data/*.json`; throws if the slug or its image file is missing. |
| `scripts/nl/lib/accent.js` | `solve({avoid:[hex...], hueRange:[a,b]})` returns a hex that clears 4.5:1 on `#FBF8F2`, `#F5F1E8`, `#EDE7DA` and is maximally separated from `avoid`. Pure OKLCH maths, no dependency. |
| `scripts/nl/lib/render-cg.js` | `render(page)` returns the full HTML string for a `cg-` page. Structure only; every sentence comes from `page`. Builds the JSON-LD from the same data as the visible FAQ so they cannot desync. |
| `scripts/nl/lib/md-twin.js` | `twin(page)` returns the `.md` twin (frontmatter with canonical, blockquote capsule, all sections, 10+ course links). |
| `scripts/nl/register.js` | `register(page)` idempotently adds the slug/code/label/accent to: `coding-global.css`, `verify-cluster-pages.js` (fileRe, siblingRe, markets), `check-cluster-uniqueness.js` (fileRe), `wire-coding-global-routes.js` (MARKETS), `content/coding-global-dossiers.json`. |
| `scripts/nl/build.js <slug>` | Loads the module, writes `src/pages/<slug>.html` and `.md`, registers, wires routes, prints word count. |
| `scripts/nl/check.js <slug>` | Runs: personality-block grep, undefined-class check, `verify-cluster-pages.js coding-global`, `check-cluster-uniqueness.js coding-global`, `audit-rendered-ag-pages.mjs --prefix=cg <slug>`. Exit 1 on any failure. |
| `scripts/verify-cluster-pages.js` | MODIFY: `pageTypeOf()` reads `pageType` from the dossier entry first. |
| `NETHERLANDS-PROGRESS.md` | Tracker: queue, done list with commit hashes, skipped pages with reasons, open issues. |

---

## Task 0: Pre-flight (do once, before Amstelveen)

**Files:**
- Modify: `content/coding-global-dossiers.json` (the `coding-classes-in-netherlands` entry)
- Modify: `scripts/verify-cluster-pages.js:123-135`
- Create: `NETHERLANDS-PROGRESS.md`

- [ ] **Step 1: Release `Almere` and `Eindhoven` from the hub dossier.** Replace those two `requiredMentions` with `Groep 3 to 5` and `VO student` (both already on the hub page: 1 and 2 occurrences). Verify:

```bash
node -e "const f='content/coding-global-dossiers.json';const fs=require('fs');const d=JSON.parse(fs.readFileSync(f,'utf8'));const m=d['coding-classes-in-netherlands'].requiredMentions;d['coding-classes-in-netherlands'].requiredMentions=m.map(s=>s==='Almere'?'Groep 3 to 5':s==='Eindhoven'?'VO student':s);fs.writeFileSync(f,JSON.stringify(d,null,2)+'\n')"
node scripts/verify-cluster-pages.js coding-global 2>&1 | grep -E "netherlands|passed|FAIL"
```
Expected: the hub still passes.

- [ ] **Step 2: Make `pageTypeOf()` dossier-driven.** In `scripts/verify-cluster-pages.js`, load the coding-global dossier file once at the top of the depth-floor block and check `dossiers[slug].pageType` before the Oman/Brunei sets:

```js
const CG_DOSSIERS = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'content/coding-global-dossiers.json'), 'utf8')); } catch (e) { return {}; } })();
function pageTypeOf(slug) {
  const d = CG_DOSSIERS[slug];
  if (d && d.pageType) return d.pageType;   // 'district' | 'city' | 'governorate' | 'market'
  const m = slug.replace(/^coding-classes-in-/, '');
  if (OMAN_DISTRICTS.has(m)) return 'district';
  if (OMAN_CITIES.has(m) || BRUNEI_CITIES.has(m)) return 'city';
  if (OMAN_GOVERNORATES.has(m) || BRUNEI_DISTRICTS.has(m)) return 'governorate';
  return 'market';
}
```
Run `node scripts/verify-cluster-pages.js coding-global` before and after: identical pass count (regression proof, as the spec requires).

- [ ] **Step 3: Create `NETHERLANDS-PROGRESS.md`** with the full queue from the spec (section 3), a Done table (slug, type, words, overlap, commit), a Skipped table (slug, reason), and Open issues.

- [ ] **Step 4: Commit** `NL cluster: pre-flight (hub dossier strings released, dossier-driven page types, tracker)`.

---

## Task 1: Catalogue and accent helpers

**Files:**
- Create: `scripts/nl/lib/catalogue.js`
- Create: `scripts/nl/lib/accent.js`

**Interfaces:**
- Produces: `course(slug) -> {slug, title, image:'/images/x.webp', url:'/courses/<slug>'}` (throws on unknown slug or missing `public/images/x.webp`).
- Produces: `solve({avoid, hueRange, lightness:[0.36,0.52], chroma:[0.08,0.15]}) -> '#RRGGBB'`; `contrast(hexA, hexB) -> number`.

- [ ] **Step 1: Write `catalogue.js`.** Read every `content/courses/data/*.json`, index by `meta.slug` (skip files without a slug), resolve `image_path` under `public/images/`. Export `course(slug)` and `all()`.
- [ ] **Step 2: Test it:** `node -e "const c=require('./scripts/nl/lib/catalogue');console.log(c.course('python-complete-masterclass-teens'))"` prints the teens Python course with `/images/python-teens.webp`; `c.course('nope')` throws.
- [ ] **Step 3: Write `accent.js`.** sRGB to OKLab/OKLCH conversion, WCAG relative luminance, candidate grid over L, C, H, filter contrast >= 4.5 against all three papers, exclude the retired band (hue 270 to 330 magenta/purple and 190 to 220 cyan at high chroma), pick the candidate maximising the minimum OKLab distance from `avoid`.
- [ ] **Step 4: Test it:** `node -e "const a=require('./scripts/nl/lib/accent');const h=a.solve({avoid:['#A64B17','#C05621']});console.log(h,a.contrast(h,'#EDE7DA'))"` prints a hex and a contrast of at least 4.5.
- [ ] **Step 5: Commit** `NL cluster: catalogue and accent helpers`.

---

## Task 2: The cg renderer, md twin, register and build scripts

**Files:**
- Create: `scripts/nl/lib/render-cg.js`
- Create: `scripts/nl/lib/md-twin.js`
- Create: `scripts/nl/register.js`
- Create: `scripts/nl/build.js`
- Create: `scripts/nl/check.js`

**Interfaces (the page module shape every `content/nl/*.js` must export):**

```js
module.exports = {
  slug: 'coding-classes-in-amstelveen',
  code: 'amv',                       // letters only
  accent: '#2F6B4F',                 // from accent.solve, recorded here so it never moves
  accentRationale: 'the Amsterdamse Bos, most of which lies inside the municipality',
  pageType: 'city',                  // district | city | governorate | market
  place: { name: 'Amstelveen', eyebrow: 'Amstelveen, Noord-Holland', schemaType: 'City',
           chain: [{type:'AdministrativeArea', name:'Noord-Holland'}, {type:'Country', name:'Netherlands'}] },
  parent: { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },   // breadcrumb + nav + link up
  title: 'Coding Classes in Amstelveen | Modern Age Coders',                  // <= 65 chars
  description: '...',                                                          // 145 to 165 chars
  ogDescription: '...', twitterDescription: '...', ogImage: '/images/python-teens.webp',
  verifiedOn: '7 September 2026',
  h1: '...', capsuleQ: 'What are the best coding classes in Amstelveen?', capsule: '...', lead: '...',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amstelveen.',
  picks: { eyebrow, h2, intro, items: [{course, band, note}] },   // exactly 4 items; flagships appended by the renderer
  sections: [ /* ordered blocks, each {id, tint:'tint'|'deep'|'', eyebrow, h2, intro, body: [...blocks]} */ ],
  // block kinds: {kind:'grid3', cells:[{h3, p}]}, {kind:'spec', title, p}, {kind:'table', caption, head:[], rows:[[]]},
  //              {kind:'callout', h3, p}, {kind:'p', text}, {kind:'align', rows:[{req, ours, code}]}
  ladder: { eyebrow, h2, intro, cols: [{band, h3, p, courses:[slug, slug]}] },
  ai: { h2, p1, p2, closer },        // the named AI question section; links the ranking blog post
  delivery: { eyebrow, h2, intro, cells: [{h3, p} x6], spec: {title, p} },
  fees: { h2, intro, first, group, private, closer },
  book: { h2, intro, success },
  faq: { h2, intro, items: [{q, a, boiler:true|false}] },  // 10 items; boiler ones are chrome
  next: { eyebrow, h2, html },        // paragraph with sibling links
  footerPlaces: [{href, label}],      // 3 links for the footer column
  navLabel: 'Netherlands', navHref: '/coding-classes-in-netherlands',
  personalityCss: '.cg-root.cg-amv .cg-hero-grid{...}',   // <= 40 lines, prefixed
  dossier: { market, curriculumAuthority, localProject, requiredMentions:[...8+], sources:[{claim,url} x3+], rejectedClaims:[] }
};
```

- [ ] **Step 1: Write `render-cg.js`.** Mirror `src/pages/coding-classes-in-madha.html` section for section (nav, hero with breadcrumb and trust strip, picks + flagships, ordered sections, ladder, AI section, delivery, pricing, reviews, book, faq, next, sticky bar, footer, lead script). Trust strip reads `scripts/brand-facts.json` (`5 to 10`). Reviews are the six approved ones copied verbatim from Madha. JSON-LD `@graph` (EducationalOrganization, BreadcrumbList from `parent` + `place`, Course, FAQPage from `faq.items`) plus the `Service` block with `containedInPlace` built from `place.chain`. The personality block goes in `<head>` after the stylesheet link. `data-price-scope="coding.international"` on the graph script tag, as on the hub. Assert output is pure ASCII except for `&#9733;` entities and the euro sign if used in a sourced figure.
- [ ] **Step 2: Write `md-twin.js`.** Frontmatter (`title`, `description`, `canonical`, `source`), `> capsule` blockquote, `# h1`, then every section as `## h2` with its paragraphs, tables as Markdown tables, the ladder as a list with `/courses/` links (4 picks + 4 flagships + 8 ladder = 16 course links), the FAQ as `### q` + answer, the fees, and the contact line.
- [ ] **Step 3: Write `register.js`.** Five idempotent edits, each a string operation with an assertion that the anchor was found:
  - `src/css/coding-global.css`: append under a `/* Netherlands cluster */` comment: `.cg-root.cg-<code>  { --cg-accent: <hex>; --cg-accent-soft: rgba(r,g,b,.10); }   /* <rationale> */`.
  - `scripts/verify-cluster-pages.js`: insert `<place>|` after `coding-classes-in-(` in BOTH `fileRe` and `siblingRe` of the `coding-global` entry; add `'<code>'` to its `markets` array before the closing `]`.
  - `scripts/check-cluster-uniqueness.js`: same `fileRe` insert.
  - `scripts/wire-coding-global-routes.js`: insert `  ['<slug>', '<label>'],` before the closing `];` of `MARKETS`.
  - `content/coding-global-dossiers.json`: set `d[slug] = {market, bodyClass:'cg-<code>', pageType, ...dossier}`.
- [ ] **Step 4: Write `build.js`.** `node scripts/nl/build.js <slug>`: require `content/nl/<slug>.js`, validate (title length, description length, 4 picks, 10 FAQs, 8+ mentions, 3+ sources, personality block <= 40 lines and every selector prefixed), render, write both files, `register(page)`, run `node scripts/wire-coding-global-routes.js <slug>`, print visible word count using the gate's own counting method.
- [ ] **Step 5: Write `check.js`.** `node scripts/nl/check.js <slug>`: (a) personality grep from the guide, (b) every `class="cg-..."` in the page exists in `coding-global.css` or is the market class, (c) `verify-cluster-pages.js coding-global` filtered to the slug, (d) `check-cluster-uniqueness.js coding-global` and print the slug's worst pair, (e) `audit-rendered-ag-pages.mjs --prefix=cg <slug>`. Exit 1 if any fails.
- [ ] **Step 6: Smoke test the pipeline on Amstelveen (Task 3) rather than on a fixture**, since the first real page is the fixture. Commit the scripts with that page.

---

## Task 3 and onward: one task per page

Every page task has the same steps. The content differs; the procedure never does.

**Files:**
- Create: `content/nl/<slug>.js`
- Create (generated): `src/pages/<slug>.html`, `src/pages/<slug>.md`
- Modify (by register/wire): the five registries, `_redirects`, `netlify.toml`, `sitemap.xml`, `sitemap-international.xml`, `llms.txt`
- Modify: `NETHERLANDS-PROGRESS.md`

- [ ] **Step 1: Phase 0 research (build guide, Phase 0).** Gather, with URLs: population and reference date (CBS / allecijfers), neighbourhoods with populations, schools by name and address (basisscholen, VO schools with their streams, international schools), the commute (which tram/train/road, minutes, dates), what the place is physically known for, employers, the holiday region, any local institution. Stop and record `SKIPPED` in the tracker if fewer than eight place-specific verifiable facts exist.
- [ ] **Step 2: Read the collision list.** `node -e` print `requiredMentions` and `localProject` of the parent page, every sibling in the same province, and the two live Netherlands pages. Choose a data-reasoning trap not in any dossier (`grep -i` the dossier file for its key words). Run the demonstration arithmetic in Node before writing the table.
- [ ] **Step 3: Write `content/nl/<slug>.js`.** Fresh prose in every slot. Picks chosen for the place. Ladder chosen for the place. At least seven of ten FAQs place-specific. The AI H2 phrased differently from every previous page (keep a list in the tracker). Dossier: 8+ mentions that are literal strings present in the prose, none used by any other dossier.
- [ ] **Step 4: Build.** `node scripts/nl/build.js <slug>`. Fix validation errors.
- [ ] **Step 5: Gate.** `node scripts/nl/check.js <slug>`. On a uniqueness warn above 6 percent, print the shared shingles (the check script does) and rewrite the sentences, never reword.
- [ ] **Step 6: Links down.** Add the new page to its parent's "next" paragraph or footer column (the hub's `#markets` list for cities; the city page's district index for districts) so it has an inbound link the day it ships. Re-run `verify-cluster-pages.js` on the parent.
- [ ] **Step 7: Record and commit.** Append the Done row (slug, type, words, worst overlap pair, AI H2 used, trap used) to `NETHERLANDS-PROGRESS.md`. `git add` the two page files, `content/nl/<slug>.js`, the five registries, the six routing files, the tracker. Commit `NL cluster: <slug> (<type>)`.

### The queue (build order)

Phase 1: `coding-classes-in-amstelveen` (city, code amv) · `coding-classes-in-amsterdam` (city, ams) · `coding-classes-in-eindhoven` (city, ehv) · `coding-classes-in-the-hague` (city, dhg) · `coding-classes-in-almere` (city, alm) · `coding-classes-in-utrecht` (city, utr) · `coding-classes-in-rotterdam` (city, rtm) · `ai-and-python-academy-netherlands` (ag- hub, see Task 40).

Phase 2 (provinces, pageType `governorate`): noord-holland (nhl) · zuid-holland (zhl) · utrecht-province (utp) · noord-brabant (nbr) · gelderland (gld) · overijssel (ovr) · limburg (lim) · groningen-province (grp) · friesland (frl) · drenthe (dre) · flevoland (flv) · zeeland (zld).

Phase 3 (cities): groningen (gro) · tilburg (tlb) · breda (brd) · nijmegen (nmg) · arnhem (arn) · apeldoorn (apd) · haarlem (hlm) · haarlemmermeer (hmr is taken; use hfd) · zaanstad (zst) · amersfoort (amf) · enschede (ens) · den-bosch (dbs) · zwolle (zwl) · zoetermeer (ztm) · leiden (lei is taken; use ldn) · leeuwarden (lwd) · maastricht (mst) · ede (ede) · dordrecht (ddr) · westland (wtl) · alphen-aan-den-rijn (adr) · alkmaar (alk) · delft (dlf) · emmen (emn) · deventer (dvt) · venlo (vnl) · uithoorn (uth).

Phase 4 (districts, pageType `district`): amsterdam-centrum (amc) · amsterdam-noord (amn) · amsterdam-oost (amo) · amsterdam-zuid (amz) · amsterdam-west (amw) · amsterdam-nieuw-west (anw) · amsterdam-zuidoost (azo) · weesp (wsp) · rotterdam-centrum (rtc) · charlois (chl) · delfshaven (dlh) · feijenoord (fjn) · hillegersberg-schiebroek (hgs) · kralingen-crooswijk (krc) · prins-alexander (pxa) · ijsselmonde (ijm) · the-hague-centrum (dhc) · escamp (esc) · haagse-hout (hgh) · laak (lak) · leidschenveen-ypenburg (lvy) · loosduinen (lsd) · scheveningen (sch) · segbroek (sgb) · eindhoven-centrum (ehc) · gestel (gst) · stratum (stm) · strijp (stp) · woensel-noord (wnn) · woensel-zuid (wnz).

Phase 5 (towns, kill-gated): helmond · purmerend · oss · hilversum · sittard-geleen · nissewaard · heerlen · lelystad · meierijstad · hengelo · schiedam · leidschendam-voorburg · roosendaal · gouda · vlaardingen · hoorn · almelo · veenendaal · assen · bergen-op-zoom · velsen · capelle-aan-den-ijssel · wassenaar · voorschoten · oegstgeest · rijswijk · diemen · middelburg · roermond. Codes assigned at build time, checked against the CSS.

Phase 6 (`ag-` doors): built with the ag- chassis (`ai-global.css`, `wire-ai-global-routes.js`, the `build-ai` cluster registry, `/api/callback/request`), copying the section order of `src/pages/ai-and-python-academy-salalah.html`. A separate renderer `scripts/nl/lib/render-ag.js` is written at Task 40 from that page, with the same all-prose-is-a-parameter rule.

---

## Task 40: The ag- renderer and the academy hub

Written when Phase 1 reaches page 8. Same shape as Task 2 with `ag-` classes, the numbered protocol spine, the callback endpoint, `meta.topic` on the lead, and registration in `verify-cluster-pages.js` (`build-ai` fileRe + siblingRe + markets), `check-cluster-uniqueness.js` (`build-ai` fileRe), `wire-ai-global-routes.js` (SLUGS + LLMS_LABELS), `ai-global.css` accents, and `scripts/audit-rendered-ag-pages.mjs`.

---

## Self-review against the spec

- Spec section 1 (release two hub strings): Task 0 step 1.
- Spec section 3 (the page list): the queue above, same slugs, same counts (7 + 1 + 12 + 27 + 30 + up to 30 + 24).
- Spec section 4 (age groups on every page): picks and ladder are per-page parameters; the module shape forbids a default.
- Spec section 5 (keywords): Step 1 of every page task researches the local vocabulary; the AI H2 rotation is tracked; the blog link is emitted by the renderer's AI section.
- Spec section 6 (uniqueness): dossier gate (register + verify), trap check (Step 2), fresh prose (Step 3), n=2 gate run (Step 5).
- Spec section 7 (design): personality block validated in build, accents from the solver, rendered audit in check.
- Spec section 8 (conversion): renderer emits four touchpoints, sticky bar, WhatsApp prefill with the place, honest schema, attribution.
- Spec section 9 (gates): check.js runs all of them; register.js does the seven registrations; wire script does routing.
- Spec section 9 extensions: Task 0 step 2 (page types); the uniqueness incumbents already include the live AI page, and the hub is a cluster member so spokes are measured against it. No change needed there.
