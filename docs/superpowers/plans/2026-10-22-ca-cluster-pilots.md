# Canada Cluster, Plan A: Canada market in the pipeline, phone fix, live fixes, 2 courses, 3 pilots

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the `scripts/nl` pipeline serve Canada, file Canadian leads as Canadian, fix the known faults on live Canada pages, build courses C1 and C3, then build, gate and commit the three pilots for the owner's preview.

**Architecture:** Canada pages are content modules in `content/ca/<slug>.js` rendered by `scripts/nl/lib/render-ag.js` / `render-cg.js` with a CA `market` object (NANP, 10 digits), shipped one commit each by a new `scripts/nl/ca-ship.sh` on local `main`. Pages print every price through `data-price` anchors with currency-neutral wording, so the later CAD switch (Plan B) needs no page rewrite. The country picker learns Canadian area codes.

**Tech Stack:** Node 22 (CommonJS), Git Bash, Python 3 (`render-check.py`), jsdom tests, curl for sources, dev server `node scripts/dev-server.js` on :3001.

**Spec:** `docs/superpowers/specs/2026-10-22-ca-cluster-design.md`

**Plan B (separate, written after the owner answers the Razorpay and price questions):** the CAD pricing region (owner 2026-10-22: group CAD 140, 1-on-1 CAD 210), backend first, kept behind `?test=canada` until the USD prose on global pages is converted to anchors and the owner previews it. Map of every touchpoint: the Explore report of 2026-10-22 (config.js `REGIONS`, international-pricing.js, course-payment.js, both backend payment handlers with the INR fallback, stamp.js:191, verify.js:343, config-template.js + editor.js, six-month.js, generate-courses.js, demo and camp scripts).

## Global Constraints

- Commit only, never push; never `git add -A`; shared files staged by explicit path.
- **Currency-neutral copy on Canada pages:** visible text never contains "USD", "US dollars", "CAD", "Canadian dollars", "CA$", or `$` followed by a digit outside `<pre>`; fees appear only as `data-price` anchors ("monthly fee", "per month"). JSON-LD keeps the existing USD offers (no CAD offers).
- Timing copy, exact: "Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays." No "weekend batch". Time tables use the 2026 offsets in `keyword-research-2026-09/ca/facts-geo.md` section 3 (BC UTC-7 all year, Alberta and Saskatchewan UTC-6 all year, Manitoba UTC-5 from 1 November 2026).
- No em or en dashes, no "Premium", at most one visible "best" (best- slugs excepted), no emoji, no bare IST.
- Facts raw with curl at the primary source, quotes grepped in the raw file; never WebFetch paraphrase; never circumvent 403/429/Cloudflare; never sum published parts; no past contest problems reproduced (link to CEMC, teach with our own labelled problems).
- No credit claims: course-code pages state we teach alongside the student's school course and do not grant credits.
- No populations printed until StatCan is pulled live (default for spec decision 5).
- Floors: `market` pages 3,000 visible words; city 2,200. Overlap hard limit 3%, aim 2.5%; 8+ unique `requiredMentions`.
- Page `code` 2 to 4 lowercase letters, unique across `content/`; fresh muted accent per page.
- No grade/admission/job/salary promises; under-18 pages never recommend 18+ tools; no crime, health, money, religion, disaster, identity content; no race or gender stats; never name individual schools or private people.
- Course cards with real thumbnails first, `data-pd-book` priority demo, course name + both formats + fee in section 1 or 2.
- AI-answer ready: 60-word capsule first, a quotable table or numbered steps, FAQPage + Course schema, `.md` twin, `llms.txt` entry. No overflow at 390px.

## Review Focus

1. A Toronto parent types `+1 416 555 0123` on any page while their laptop clock says America/New_York: the lead is filed `CA`, not `US`. Pinned in Task 2 Step 1.
2. A Canadian page states a dated fact (CCC on 17 February 2027, EQAO windows): the sentence names the year and the source. Pinned in Task 6 Step 4 and Task 7 Step 4.
3. An Indian visitor (or, after Plan B, a Canadian) opens a Canada page: only one currency appears, because the page types none. Pinned in Task 1 Step 1 (gate rejects USD/CAD words and typed `$digit`).
4. A student reads the ICS3U page expecting a credit: the page says plainly, near the top and in the FAQ, that we do not grant credits. Pinned in Task 1 Step 3 (gate: course-code page must contain the no-credit sentence) and Task 6 Step 4.
5. A wide contest-dates table on a 390px phone scrolls inside its wrapper, not the page. Pinned by `check.js` rendered audit in every ship.

---

### Task 1: Canada market in the pipeline

**Files:**
- Create: `scripts/nl/test-market-ca.js`, `scripts/nl/ca-ship.sh`, `CA-PROGRESS.md`
- Modify: `scripts/nl/build.js:29` and after the US gate block; `scripts/nl/finish.js` market dirs
- Modify: `src/pages/coding-classes-in-canada.html` and `.md` (guides anchor)

**Interfaces:**
- Produces the CA market object every `content/ca/*.js` copies verbatim:
  `const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };`
- Produces `bash scripts/nl/ca-ship.sh <slug> <row> "<type>" "<spine>" "<lesson family>" <msg-file>` (same contract as `us-ship.sh`).
- Produces the hub anchor `<!-- CA-GUIDES -->` inside `<section class="ca-guides"><h2>Canadian guides, contests, provinces and cities</h2><ul>...</ul></section>` on `coding-classes-in-canada` (Markdown: `## Canadian guides, contests, provinces and cities` then `<!-- CA-GUIDES -->`).

- [ ] **Step 1: Write the failing test** `scripts/nl/test-market-ca.js`, modelled on `test-market-us.js`: renders a minimal cg and ag module with the CA object and asserts (a) `countryIso: 'CA'` in the lead script; (b) 9 and 11 national digits refused, `4165550123` sent; (c) `build.js` gate fails a page whose visible text contains each of `USD 100`, `US dollars`, `CAD 140`, `Canadian dollars`, `CA$140`, `$140`, `weekend batch`, `Premium`, bare `IST`, an en dash, and passes when `$140` sits only inside `<pre>`; (d) a page with `courseCodePage: true` and no sentence matching `/do not (grant|award|issue) (Ontario )?(high school )?credits/i` fails.
- [ ] **Step 2: Run it:** `node scripts/nl/test-market-ca.js`. Expected: FAIL (`content/ca` not in MARKET_DIRS).
- [ ] **Step 3: Implement.** `MARKET_DIRS` gains `'ca'` in build.js and finish.js. CA gate block after the US block: `LEAD_ISO === 'CA'` applies every US rule plus `/\bUSD\b|US dollars?|\bCAD\b|Canadian dollars?|\bC\$|CA\$/i` on visible text outside `<pre>`, and the credit rule when `page.courseCodePage`. `html lang` must be `en` or `en-CA`. `ca-ship.sh` = `us-ship.sh` with `content/ca`, `HUB=coding-classes-in-canada`, tracker `CA-PROGRESS.md`, logs `CA_LOGS`/`CA_INDEXES`, best-door pattern `best-*-canada|best-online-*|best-coding-classes-for-kids-in-*`, final echo "committed on main (not pushed)". `CA-PROGRESS.md`: header, links to spec and plan, table `| row | slug | phase | status | commit | words | overlap | notes |` with all 174 rows from `keyword-research-2026-09/ca/rows.tsv` as `todo`, plus "Skipped" and "Open items". Hub: add the guides section above the FAQ; BEGIN_HREFLANG, BEGIN_RELATED_PAGES and BEGIN_LINK_MESH blocks stay byte-identical.
- [ ] **Step 4: Run:** `node scripts/nl/test-market-ca.js && node scripts/nl/test-market-us.js && node scripts/nl/test-us-gates.js && node --check scripts/nl/build.js && bash -n scripts/nl/ca-ship.sh && npm run -s verify:hreflang`. Expected: all pass. Then `node scripts/nl/build.js coding-and-ai-classes-in-north-carolina --dry-run` passes (US unchanged).
- [ ] **Step 5: Commit** the files above by explicit path: "Canada cluster: CA market in the nl pipeline (NANP, currency-neutral gate, no-credit gate, ca-ship.sh, tracker, hub anchor)".

### Task 2: Country picker files Canadian numbers as Canadian

**Files:**
- Modify: `src/js/country-code-selector.js` (`DIAL_PREFERRED_ISO` resolution for dial `1`)
- Create: `scripts/test-nanp-country.js`
- Modify: every page that loads the selector with a version query (cache bust), via `scripts/ensure-phone-country.js` if it owns the tag, else a one-off sed over the exact tag string

**Interfaces:**
- Produces `nanpCountry(nationalDigits: string) -> 'CA' | 'US' | 'BS' | null` inside the selector (exported on `window.MACCountryCode.nanpCountry` for tests); `null` when fewer than 3 digits.
- Canadian area codes: the CNAC list in `facts-geo.md` section 4 (all of them, including overlays such as 273, 368, 382, 468, 584, 742, 753, 825, 879). Bahamas: 242.

- [ ] **Step 1: Failing test** `scripts/test-nanp-country.js` (jsdom, loads the selector): `nanpCountry('4165550123') === 'CA'`, `'6045550123' -> 'CA'`, `'2125550123' -> 'US'`, `'2425550123' -> 'BS'`, `'41' -> null`; and in a form with timezone mocked to `America/New_York`, typing `+1 416 555 0123` sets `form.__macLead.iso === 'CA'`; with `America/Toronto`, typing `+1 212 555 0123` sets `'US'`.
- [ ] **Step 2: Run** `node scripts/test-nanp-country.js`. Expected: FAIL (`nanpCountry` undefined).
- [ ] **Step 3: Implement** `nanpCountry` and call it wherever dial `1` currently resolves to `DIAL_PREFERRED_ISO['1']`, once 3 national digits exist; the device-timezone default still applies before any digits are typed.
- [ ] **Step 4: Run** `node scripts/test-nanp-country.js && node scripts/pricing/test-phone.js && node scripts/nl/test-us-lead-browser.js` (dev server on :3001). Expected: all pass; then bump the selector's version query everywhere it is loaded and run `node scripts/ensure-phone-country.js --check`.
- [ ] **Step 5: Commit** "Phone picker: +1 numbers filed by area code (Canada, US, Bahamas)".

### Task 3: Plain fixes on live Canada pages (Phase 0a)

**Files:** `src/pages/online-math-tutor-canada.html/.md`, `src/pages/ai-and-machine-learning-classes-in-canada.html/.md`, `src/pages/cemc-waterloo-contests-preparation.html`

- [ ] **Step 1:** `online-math-tutor-canada`: replace the heading "Premium teaching. One honest price." and any other visible "Premium" with plain wording; `grep -ci premium` on visible text returns 0.
- [ ] **Step 2:** `ai-and-machine-learning-classes-in-canada`: replace the fire-season modelling section with a section on a non-sensitive Canadian open dataset from `src/geo/opendata/opendata.tsv` (licence allows commercial reuse; dataset fetched with curl, counts computed by us and labelled ours); replace the "Indian night" timing heading and paragraph with the flexible timing line and the 2026 offsets. Update the `.md` twin to match.
- [ ] **Step 3:** `cemc-waterloo-contests-preparation`: change `data-price-scope="coding.india"` to the maths scope the page's offers use, then `npm run -s pricing:apply` and confirm only that page's offer block changed (`git diff --stat`).
- [ ] **Step 4: Verify:** `npm run -s pricing:verify`, `node scripts/check-all-links.js` on the three pages, load each on :3001 and read the changed sections back.
- [ ] **Step 5: Commit** "Canada pages: remove Premium, replace the wildfire section and the timing heading, fix the Waterloo page price scope".

### Task 4: Courses C1 (ICS3U and ICS4U Companion) and C3 (CCC Junior and Senior Preparation)

**Files:**
- Create: `content/courses/data/ontario-computer-science-ics3u-ics4u.json`, `content/courses/data/ccc-junior-senior-prep.json`, their thumbnails in `content/courses/images/` and `public/images/` (`.webp` + `.png`, locked letterpress poster style via `system-poster.mjs`)
- Modify: `src/pages/course.html` (coursesData + chips), `src/pages/course-atlas.html` (cards 132 and 133, renumber, "Showing N of N"), `sitemap.xml`, `sitemap-courses.xml`

**Interfaces:**
- Course slugs come from each JSON's `meta.slug`; price set = `coding` (no `courseOverrides` row).
- C1: ages 15 to 18, Python and Java, both formats, modules follow the ICS3U and ICS4U strands in `facts-schools-contests.md`, states it runs alongside school and grants no credit.
- C3: ages 13 to 18, Python and C++ (CCO requires C++), Junior and Senior tracks, a September to February schedule ending at the 17 February 2027 contest, no past problems reproduced.

- [ ] **Step 1:** Write both JSONs on the field set of `content/courses/data/middle-school-math-competitions.json`; every factual claim from `facts-schools-contests.md`.
- [ ] **Step 2:** Make the thumbnails; open each PNG and check it matches the locked style.
- [ ] **Step 3:** Wire course.html, atlas, both sitemaps; then run individually `npm run generate:courses`, `npm run generate:sitemap-index`, `npm run generate:llms`, `npm run generate:sitemap-html`; diff the URL set old vs new and require nothing lost; `git restore` unrelated churn.
- [ ] **Step 4: Verify:** `npm run -s pricing:check && npm run -s pricing:verify && npm run -s verify:sitemap`; load both `/courses/<slug>` on :3001 at 1280 and 390, read back title, fee anchors, modules.
- [ ] **Step 5: Commit** "Courses: ICS3U and ICS4U Companion, CCC Junior and Senior Preparation, wired into the course list, atlas and sitemaps".

### Task 5: Pilot sources and dossiers

- [ ] **Step 1:** For each pilot, collect its facts from `facts-schools-contests.md` / `facts-geo.md` / `opendata.tsv` and re-fetch any source older than today or marked UNVERIFIED (curl raw into `keyword-research-2026-09/ca/src-pilots/<slug>/`, stop on 403/429).
- [ ] **Step 2:** Grep every quote in its raw file; a quote not found is dropped.
- [ ] **Step 3:** Toronto data project: fetch the City of Toronto Parks and Recreation Facilities dataset (licence: Open Government Licence - Toronto, recorded in `opendata.tsv`), compute our own counts with a short Python script kept with the source, label them ours.
- [ ] **Step 4: Kill check:** a pilot with fewer than 12 verified facts is reported to the owner before writing.

### Task 6: Pilot 1, `ics3u-computer-science-help` (ag, market, `courseCodePage: true`)

- [ ] **Step 1: Write the module** on the field set of `content/us/how-to-make-a-roblox-game.js` with the CA market. Required: 60-word capsule; the no-credit sentence near the top and in the FAQ; what ICS3U covers by strand (curriculum document wording, quoted short); Python vs Java at school and what changes; a worked problem in both languages where the reasoning does the work (ours); an original 10-question practice set with answers (ours); "is ICS3U hard" answered with what students find hard, not a promise; ICS3U vs ICS3C in a table; ICD2O and the Grade 10 listing change; how ICS3U leads to ICS4U and to university CS prerequisites (Waterloo, U of T facts); 8 to 12 FAQs; the timing line; picks: C1 first, then Python and Java teen courses.
- [ ] **Step 2: Code and accent:** unused code (`grep -rhoE "code: '[a-z]+'" content | sort -u`), accent with the picker against every site accent.
- [ ] **Step 3: Dry run:** `node scripts/nl/build.js ics3u-computer-science-help --dry-run`. Expected: all gates pass, 3,000+ visible words.
- [ ] **Step 4: Claims grep** on the built page: `grep -iE "guarantee|will get (a|an|into)|earn (a|the) credit|credit from us"` returns nothing; every date sentence carries a year.
- [ ] **Step 5: Link down and ship:** `node scripts/nl/link-down.js src/pages/coding-classes-in-canada.html --anchor "<!-- CA-GUIDES -->" --insert '<li><a href="/ics3u-computer-science-help">ICS3U computer science help</a></li>'` and the `.md` equivalent, then `bash scripts/nl/ca-ship.sh ics3u-computer-science-help 1 "door" "school course" "worked problem two languages" msg.txt`. Expected: `committed on main (not pushed)`.

### Task 7: Pilot 2, `ccc-junior-guide` (ag, market)

- [ ] **Step 1: Write the module.** Required: capsule; CCC 2027 facts with year and "CEMC" in the sentence (date, 5 questions, 3 hours, out of 75, languages, $10 fee written as "a ten-dollar fee per participant set by CEMC" or omitted, never `$10`); must write through a school, with the CEMC workaround quoted; Junior vs Senior table; what Junior problems test (by skill, our own descriptions); three original Junior-style problems with full solutions in Python (ours, labelled); a 16-week plan to February (ours); how Junior leads to Senior, the CCO and the IOI (CEMC facts); links to CEMC's free past contests; 8 to 12 FAQs; the timing line; picks: C3 first, then competitive programming for teens.
- [ ] **Step 2 to 3:** as Task 6.
- [ ] **Step 4: Dated-fact grep:** `grep -oiE "this year|next year|upcoming|in February(?! 20)"` returns nothing; every date has a year and names CEMC.
- [ ] **Step 5: Link down** from both the Canada hub (CA-GUIDES) and `canadian-computing-competition-ccc-prep` (one sentence in its Junior and Senior section with a link), then ship row 2.

### Task 8: Pilot 3, `coding-and-ai-classes-in-toronto` (cg, city)

- [ ] **Step 1: Write the module.** Required: capsule; what Toronto students meet at school (Ontario coding by grade, MTH1W, ICS3U), from the curriculum facts; Eastern time conversion table with the flexible timing line; the Toronto parks dataset project (ours) with real Python and our counts; GTA city links (only to pages that exist; the rest stay plain text until built); the CCC and Waterloo contests for Toronto students; 8 to 12 FAQs; picks: Python for kids, Python for teens, AI and ML for teens, C1.
- [ ] **Step 2 to 3:** as Task 6 (2,200 floor).
- [ ] **Step 4:** no population printed; every figure sentence names its source and year.
- [ ] **Step 5: Link down and ship** row 3.

### Task 9: Owner preview (gate)

- [ ] **Step 1:** Load each pilot on :3001 at 1280 and 390; read the rendered text back; confirm course cards first, priority demo button, one currency, the timing line, no horizontal scroll.
- [ ] **Step 2:** Send the owner the three local URLs and a one-paragraph summary per page. **Stop.** Phase 0b, Phase 2 onwards and Plan B start only after the owner's yes.
