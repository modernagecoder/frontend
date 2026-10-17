# US Cluster, Plan 1: US market in the pipeline + 3 pilot pages

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the `scripts/nl` page pipeline serve the US market safely, then build, gate and commit the three Phase 1 pilot pages for the owner's preview.

**Architecture:** US pages are content modules in `content/us/<slug>.js` rendered by the existing `scripts/nl/lib/render-ag.js` / `render-cg.js` with a `market` object (`iso: 'US'`, `dial: '+1'`, 10-digit NANP). `scripts/nl/build.js`, `finish.js` and a new `us-ship.sh` gain the US market; a new `test-market-us.js` proves the lead contract. Pages ship one commit each on local `main`, never pushed.

**Tech Stack:** Node 22 (CommonJS), bash (Git Bash), Python 3 (`render-check.py`), curl for primary sources, dev server `node scripts/dev-server.js` on :3001.

**Spec:** `docs/superpowers/specs/2026-10-17-us-cluster-design.md`

## Global Constraints

- Commit only, never push; never `git add -A`; shared files staged by explicit path.
- USD only via `data-price`; no price in FAQ text; never two currencies.
- Timing copy: "Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays." No fixed batch slots, no "weekend batch".
- No em or en dashes, no "Premium", at most one visible "best" (except `best-*` doors), no emoji.
- Facts fetched raw with curl at the primary source; quoted strings grepped in the raw file; never WebFetch paraphrase; never circumvent 403/429; never sum published parts; our own examples labelled as ours.
- Floors: `pageType: 'market'` 3,000 visible words; state pages 2,200 (`pageType: 'city'`).
- Overlap hard limit 3%, aim 2.5%; 8+ unique `requiredMentions`, checked against the full dossier.
- Page `code` 2 to 4 lowercase letters, unique across `content/`.
- Under-18 pages never recommend 18+ tools; no grade/score/admission/job/salary promises; no crime, health, money, religion, disaster or identity content.
- Course cards with real thumbnails first, `data-pd-book` priority demo, course name + both formats + fee in the first or second section.
- AI-answer ready: 60-word answer capsule first, one quotable table or numbered steps, FAQPage + Course schema, `.md` twin, `llms.txt` entry.
- No overflow at 390px.

## Review Focus

1. A US parent types the phone as `(415) 555-0123`, `+1 415 555 0123`, `1-415-555-0123` or `001 415 555 0123`: the form sends exactly 10 digits `4155550123`; 9 or 12 digits are rejected on the page, not by the backend. Pinned in Task 1 Step 1.
2. A page states a dated fact (Congressional App Challenge deadline, North Carolina graduation cohort): the sentence names the cycle or class year and the source, so it is still true after the date passes. Pinned in Task 4 Step 4 and Task 5 Step 4 (grep for undated "this year"/"next year").
3. A child under 13 reads the Roblox page: nothing tells them to create an account against Roblox's terms or to use an 18+ AI tool. Pinned in Task 3 Step 4 (grep for tool names against the age list).
4. A wide data table (North Carolina figures by year) on a 390px phone: no horizontal page scroll. Pinned by `check.js` rendered audit at 390 in every ship.
5. An Indian or UK visitor opens a US page: one currency only, the visitor's region, via `international-pricing.js`; no `$` typed into copy. Pinned in Task 1 Step 3 (build gate rejects a literal `$` followed by a digit in visible copy outside `data-price`).

---

### Task 1: US market support in the pipeline

**Files:**
- Create: `scripts/nl/test-market-us.js`
- Create: `scripts/nl/us-ship.sh`
- Modify: `scripts/nl/build.js:29` (MARKET_DIRS) and after line 111 (US gate block)
- Modify: `scripts/nl/finish.js:26` (market dirs)
- Create: `US-PROGRESS.md`

**Interfaces:**
- Produces: the US market object every `content/us/*.js` module copies verbatim:
  `market: { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, stripTrunk: true }`
  (`555-0100` to `555-0199` are reserved by NANPA for fictional use.)
- Produces: `bash scripts/nl/us-ship.sh <slug> <row> "<type>" "<spine>" "<lesson family>" <commit-message-file>`.

- [ ] **Step 1: Write the failing market test** `scripts/nl/test-market-us.js`

```js
#!/usr/bin/env node
'use strict';
// Proves the scripts/nl renderers serve the US market: lead contract, locale tags, NANP normaliser.
// Renders a UK cg module and a UK ag module in memory with the US market swapped in. Writes nothing.
//   node scripts/nl/test-market-us.js
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const cg = require('./lib/render-cg');
const ag = require('./lib/render-ag');
const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, stripTrunk: true };
const OK10 = [['(415) 555-0123', '4155550123'], ['+1 415 555 0123', '4155550123'], ['1-415-555-0123', '4155550123'], ['001 415 555 0123', '4155550123'], ['4155550123', '4155550123']];
let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };
function normaliserFrom(html, re, v) { const m = html.match(re); return m ? new Function(v, m[1] + ' return ' + v + ';') : null; }

const cgHtml = cg.render(Object.assign({}, require(path.join(ROOT, 'content/uk/best-coding-class-in-london.js')), { market: US }));
ok(/countryIso:'US'/.test(cgHtml) && /countryCode:'\+1'/.test(cgHtml) && /countryName:'United States'/.test(cgHtml), 'cg lead contract sends +1 / US / United States');
ok(cgHtml.includes('content="en_US"') && cgHtml.includes('name="geo.region" content="US"'), 'cg og:locale en_US and geo.region US');
const cgNorm = normaliserFrom(cgHtml, /var digits=phone\.replace\(\/\\D\/g,''\);(.*?)if\(digits\.length<7/, 'digits');
ok(!!cgNorm, 'cg normaliser present');
if (cgNorm) for (const [inp, want] of OK10) { const got = cgNorm(inp.replace(/\D/g, '')); ok(got === want, `cg "${inp}" -> ${got}`); }

const agHtml = ag.render(Object.assign({}, require(path.join(ROOT, 'content/uk/best-online-coding-classes-uk.js')), { market: US }));
ok(/countryIso: 'US'/.test(agHtml) && /countryCode: '\+1'/.test(agHtml), 'ag lead contract sends +1 / US');
ok(agHtml.includes('<html lang="en-US">') && agHtml.includes('content="en_US"'), 'ag html lang en-US and og:locale en_US');
ok(/phoneDigits\.length < 10\b/.test(agHtml), 'ag minimum 10 national digits');
const agNorm = normaliserFrom(agHtml.replace(/\n\s*/g, ' '), /var phoneDigits = phoneRaw\.replace\(\/\\D\/g, ''\);(.*?)if \(phoneDigits\.length </, 'phoneDigits');
ok(!!agNorm, 'ag normaliser present');
if (agNorm) for (const [inp, want] of OK10) { const got = agNorm(inp.replace(/\D/g, '')); ok(got === want, `ag "${inp}" -> ${got}`); }
// 12 digits must not pass as 10 after normalising: the backend needs exactly 10.
if (agNorm) ok(agNorm('441555012345').length !== 10, 'ag 12 digits not silently accepted');
ok(/phoneDigits\.length > 10\b/.test(agHtml), 'ag maximum 10 national digits enforced on the page');
console.log(fails ? `${fails} FAILED` : 'US market: all checks pass');
process.exit(fails ? 1 : 0);
```

- [ ] **Step 2: Run it, expect the max-digits check to fail**

Run: `node scripts/nl/test-market-us.js`
Expected: `FAIL  ag maximum 10 national digits enforced on the page` (and the cg equivalent if cg lacks it); the contract and normaliser lines pass.

- [ ] **Step 3: Implement**

(a) `scripts/nl/lib/render-ag.js` near line 151: when `m.maxDigits` is set, add after the min check
`if (phoneDigits.length > ${m.maxDigits}) { if (note) note.textContent = 'Please enter a valid ${m.name} phone number.'; return; }`
and in `render-cg.js` the same guard on `digits` beside its existing length check. Add `maxDigits: 10` to the US object in the test and in Global Constraints.
(b) `scripts/nl/build.js`: `const MARKET_DIRS = ['nl', 'ie', 'uk', 'au', 'us'];` and after the AU block:

```js
// United States (spec docs/superpowers/specs/2026-10-17-us-cluster-design.md, section 3). IST is India
// Standard Time to the teachers and nothing to a US family; USD is printed only through data-price.
if (LEAD_ISO === 'US') {
  const vis = html.replace(/<script[\s\S]*?<\/script>/g, ' ');
  if (/\bIST\b/.test(vis)) fail('bare IST on a US page: write India time, and ET, CT, MT, PT or the state name');
  if (/\bpremium\b/i.test(vis)) fail("'Premium' on a US page");
  if (/–|&ndash;/.test(vis)) fail('en dash on a US page');
  if (/weekend batch/i.test(vis)) fail('"weekend batch" on a US page: use the flexible timing line');
  if (/\$\s?\d/.test(vis.replace(/<[^>]*data-price[^>]*>[^<]*</g, '<'))) fail('typed dollar figure on a US page: prices go through data-price only');
  if (!/<html lang="en(-US)?"/.test(html)) fail('html lang must be en or en-US on a US page');
}
```
(c) `scripts/nl/finish.js:26`: `['nl', 'ie', 'uk', 'au', 'us']`.
(d) `scripts/nl/us-ship.sh`: copy `au-ship.sh` with these exact changes: branch guard `[ "$BR" = main ]`, message "US pages are committed only on local main, never pushed"; `content/au` to `content/us`; `HUB=coding-classes-in-united-states`; tracker `US-PROGRESS.md` in `SHARED` and in the `finish.js --tracker` call; `AU_LOGS`/`AU_INDEXES` to `US_LOGS`/`US_INDEXES`; the best-door case pattern `best-*-usa|best-online-*|best-coding-classes-for-*`; final echo "committed on main (not pushed)".
(f) `src/pages/coding-classes-in-united-states.html` and `.md`: add once, above the FAQ, a section `<section class="us-guides"><h2>US guides, competitions and states</h2><ul><!-- US-GUIDES --></ul></section>` (Markdown: `## US guides, competitions and states` followed by a line `<!-- US-GUIDES -->`). Keep the BEGIN_HREFLANG, BEGIN_RELATED_PAGES and BEGIN_LINK_MESH blocks byte-identical; run `npm run -s verify:hreflang` after.
(e) `US-PROGRESS.md`: header, link to spec and plan, table `| row | slug | phase | status | commit | words | overlap | notes |` with the 138 rows from `keyword-research-2026-09/us/rows.tsv` all `todo`, and empty "Skipped" and "Open items" sections.

- [ ] **Step 4: Run tests**

Run: `node scripts/nl/test-market-us.js && node scripts/nl/test-market-au.js && node --check scripts/nl/build.js && bash -n scripts/nl/us-ship.sh`
Expected: `US market: all checks pass`, `AU market: all checks pass`, no syntax errors.
Run: `node scripts/nl/build.js best-coding-class-in-london --dry-run` and the same for one AU slug.
Expected: both `dry-run ...: all build gates pass` (no change to existing markets).

- [ ] **Step 5: Commit**

```bash
git add scripts/nl/test-market-us.js scripts/nl/us-ship.sh scripts/nl/build.js scripts/nl/finish.js scripts/nl/lib/render-ag.js scripts/nl/lib/render-cg.js US-PROGRESS.md src/pages/coding-classes-in-united-states.html src/pages/coding-classes-in-united-states.md
git commit -m "US cluster: US market in the nl pipeline (NANP 10 digits, US gates, us-ship.sh, tracker)"
```

### Task 2: Pilot sources and dossiers (no page yet)

**Files:**
- Create (outside repo): `Desktop/SkyCoders/keyword-research-2026-09/us/src-pilots/<source>.html|pdf|xlsx`
- Create (outside repo): `.../us/dossiers/{how-to-make-a-roblox-game,congressional-app-challenge-guide,coding-and-ai-classes-in-north-carolina}.md`

**Interfaces:**
- Produces: per pilot, a dossier listing each fact as `fact | exact quote | source URL | fetched date`, at least 12 facts, and 8+ `requiredMentions` strings unique to that page.

- [ ] **Step 1: Fetch raw** with `curl -sL -A "Mozilla/5.0"` (stop on 403/429, never retry around it):
  - Roblox: `create.roblox.com/docs` pages for Studio installation and system requirements, Luau scripting basics, publishing an experience; `en.help.roblox.com` article on Studio device support; Roblox Terms of Use age clauses.
  - Congressional App Challenge: `congressionalappchallenge.us` home, rules/FAQ, eligibility, timeline for the current cycle, past winners page.
  - North Carolina: `dpi.nc.gov` computer science pages (standards, graduation requirement and the class year it applies to), NC General Assembly session law text if linked, Code.org raw sheet rows for NC, College Board `school-report-of-ap-exams-by-state-2023-24.xlsx` NC row.
- [ ] **Step 2: Grep every quote** in the raw file (`grep -F "<quote>" file`); a quote not found is removed.
- [ ] **Step 3: Check Code.org data reuse terms** (`code.org/tos` and the data page). Record the answer in `US-PROGRESS.md` Open items. If reuse is not allowed, the NC page uses only DPI and College Board figures.
- [ ] **Step 4: Kill check:** a pilot with fewer than 12 verified facts is reported to the owner before writing, not padded.

### Task 3: Pilot 1, `how-to-make-a-roblox-game` (ag, market)

**Files:**
- Create: `content/us/how-to-make-a-roblox-game.js`
- Generated by the build: `src/pages/how-to-make-a-roblox-game.{html,md}`, registry entries, routes, sitemap, `llms.txt`.

**Interfaces:**
- Consumes: US market object (Task 1), dossier (Task 2).
- Course cards: `roblox-game-coding-for-kids-lua-course`, `game-development-masterclass-for-kids`, `complete-game-development-masterclass-for-teens`.

- [ ] **Step 1: Write the module** with the field set of `content/au/after-school-coding-club-vs-online-class-australia.js` (`cluster: 'ag'`, `pageType: 'market'`, US `market`). Required content: capsule answering "how do I make a Roblox game" in 60 words; numbered steps from install to publish; the device answer (which devices run Roblox Studio, from the Roblox source, so Chromebook and iPad questions get a true answer); a first Luau script our students write, real code that runs in Studio, explained line by line and labelled ours; an obby, a coin counter and a leaderboard as three graded projects; the AI question (what Roblox's own Assistant does, from Roblox's docs, with the age rule); a table "what you can build at each stage"; 8 to 12 FAQs; flexible timing line; picks = the 3 courses above.
- [ ] **Step 2: Pick code and accent:** run `grep -rhoE "code: '[a-z]+'" content | sort -u` and choose an unused 2-4 letter code; choose the accent with `$S/au/reaccent.py` against all site accents (rule in spec section 3 item 9).
- [ ] **Step 3: Dry run:** `node scripts/nl/build.js how-to-make-a-roblox-game --dry-run`. Expected: `all build gates pass (N visible words)` with N >= 3000.
- [ ] **Step 4: Age and claims grep:** `grep -oiE "chatgpt|claude|gemini|midjourney|character\.ai" src/pages/how-to-make-a-roblox-game.html` after build; each hit must sit in a sentence that states the tool's age rule or says it is not for under-18s. `grep -iE "guarantee|will get|earn money|robux" ` must return nothing that promises earnings.
- [ ] **Step 5: Link down from the hub** `node scripts/nl/link-down.js src/pages/coding-classes-in-united-states.html --anchor "<!-- US-GUIDES -->" --insert '<li><a href="/how-to-make-a-roblox-game">How to make a Roblox game</a></li>'` and the same on the `.md` with `--insert '- [How to make a Roblox game](/how-to-make-a-roblox-game)'`, then ship: `bash scripts/nl/us-ship.sh how-to-make-a-roblox-game 1 "door" "how-to" "first script" msg.txt`. Expected: `committed on main (not pushed)`.

### Task 4: Pilot 2, `congressional-app-challenge-guide` (ag, market)

**Files:** Create `content/us/congressional-app-challenge-guide.js` (rest generated).
**Course cards:** `complete-app-development-masterclass-for-teens`, `hackathon-prep-for-teens-coding-ai-build-innovate-win-course`, `full-stack-web-development-teens-masterclass`.

- [ ] **Step 1: Write the module.** Required content: capsule (what it is, who runs it, who can enter, what is submitted); eligibility and team rules quoted from the official rules; the current cycle's timeline stated with the cycle year and the source; how judging works as published; a 10-week build plan from idea to demo video (ours, labelled); a worked app scoping example (ours) turning a district problem into a minimum feature list; table "what to submit and what judges see"; how the house district matters (only what the official site says); 8 to 12 FAQs; flexible timing line.
- [ ] **Step 2: Code and accent** as Task 3 Step 2.
- [ ] **Step 3: Dry run** as Task 3 Step 3 (3,000 floor).
- [ ] **Step 4: Dated-fact grep:** `grep -oiE "this year|next year|upcoming deadline|deadline is [A-Z]" src/pages/congressional-app-challenge-guide.html` returns nothing; every deadline sentence contains a year and "the official site".
- [ ] **Step 5: Link down and ship** as Task 3 Step 5 with slug `congressional-app-challenge-guide`, label "Congressional App Challenge guide", row 2.

### Task 5: Pilot 3, `coding-and-ai-classes-in-north-carolina` (cg, city)

**Files:** Create `content/us/coding-and-ai-classes-in-north-carolina.js` (rest generated).
**Course cards:** the cg flagship four (rendered by `render-cg.js`), plus `ap-computer-science-principles-exam-prep-course` and `python-complete-masterclass-teens` in picks.

- [ ] **Step 1: Write the module** (`cluster` omitted = cg, `pageType: 'city'`, US `market`). Required content: capsule; North Carolina's CS graduation requirement and the class year it starts, from DPI; NC K-12 CS standards in plain words; a data table of NC figures by year (Code.org access and participation if reuse is allowed, College Board schools offering AP 2023 and 2024) with the source under the table; Eastern Time conversion table and the flexible timing line; one NC-specific project (`dossier.localProject`) built from an NC open dataset that curl can fetch (state or city portal), labelled ours; 8 to 12 FAQs.
- [ ] **Step 2: Code and accent** as Task 3 Step 2.
- [ ] **Step 3: Dry run** (2,200 floor).
- [ ] **Step 4: Dated-fact grep** as Task 4 Step 4; every figure sentence names its school year.
- [ ] **Step 5: Link down and ship** as Task 3 Step 5 with slug `coding-and-ai-classes-in-north-carolina`, label "Coding and AI classes in North Carolina", row 3.

### Task 6: Owner preview (gate)

- [ ] **Step 1:** Load each pilot on :3001 at 1280 and 390 wide; read the rendered text back; confirm course cards first, the priority demo button, one currency, the timing line, no horizontal scroll.
- [ ] **Step 2:** Run the 40-prompt baseline for the US set in ChatGPT, Google AI Mode and Perplexity from the owner's Chrome only if the owner approves the browser session; otherwise record "baseline pending".
- [ ] **Step 3:** Send the owner the three local URLs (or screenshots) and a one-paragraph summary per page. **Stop.** Phase 0 and Phase 2 start only on the owner's yes; their plan is written after the yes.
