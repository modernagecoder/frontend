# Canada Cluster: school-course depth, every contest, every province, every big city, AI-answer-engine ready

Date: 2026-10-22
Status: SPEC for owner review. No page built yet. Build on `main` locally, commit only, never push until the owner says push.
Related: [USA cluster](2026-10-17-us-cluster-design.md) (the pipeline and rules this reuses). Tracker to create: `CA-PROGRESS.md`. Research files (outside the repo): `Desktop/SkyCoders/keyword-research-2026-09/ca/`.

## 0. What the owner asked for (2026-10-22, owner's words kept close)

- "start the canada research and make the plan. I want maximum SEO pages, good keywords, very good slugs, latest keywords, very good important keywords, content so my website is easily visible on Google and other search engines as well as AI chatbots, GPT, Claude, Gemini, Perplexity and others."
- "first find good slugs and maximum pages for Canada."
- Promise to carry on every page: "we provide the best quality all over the globe; we teach how to think, how to solve problems; best quality education in coding and maths."
- Standing rules that apply without being restated: the country cluster brief (every province, city and district; course cards first; AI agents, AI, Python, Java, app and software doors for every age; varied slug shapes), AI answer engines as top priority, build missing courses people search for and wire them everywhere, flexible timing copy, commit only.

## 1. Evidence

**Search Console, Canada, 16 months:** 49,313 impressions, 368 clicks, CTR 0.75%, average position 12.54. Third by impressions among paying English markets, after the US and UK, ahead of Australia (28K) which now has 395 pages. Canada has 10 pages. Canadian clicks today come almost entirely from generic global pages (Scratch ideas, Python blogs); our Canada pages barely show: `coding-classes-in-canada` 184 impressions at 24. We already show for "ccc junior" at position 6.8 with no page about it. French queries ("apprendre à coder en jouant", "jeux de codage") show at positions 64 to 82.

**Google Canada autocomplete (2026-10-22, gl=ca):** 997 seed queries, 5,898 unique suggestions, `autocomplete_ca.tsv`. Strongest families:
- Ontario school courses: ICS3U and ICS4U (about 55 variants: exam review, final exam, Python, Java, "is ics3u hard", online, summer school, night school, prerequisite, course outline), ICS3C, ICS2O; EQAO Grade 3, 6 and 9 (practice test free, sample test, released questions, formula sheet, dates); MTH1W and de-streamed Grade 9 math; MCR3U, MHF4U, MCV4U, MCF3M vs MCR3U.
- Alberta: Math 30-1, 20-1, 31, 30-2, "math 30-1 vs 30-2", diploma exam schedule 2026 and 2027, Grade 9 PAT.
- BC: Pre-calculus 11 and 12, Calculus 12 BC, Foundations of Math 11, ADST curriculum by grade.
- Quebec: Sec 4 math, CST math, CEGEP computer science.
- Waterloo and national contests: CCC Junior and Senior (2026, 2027, past papers, questions, junior vs senior), Canadian Computing Olympiad, Beaver Computing Challenge (past papers, practice tests, results), Gauss, Pascal, Cayley, Fermat, Euclid (each with date, past papers, results), Canadian Math Olympiad (team, training, past papers).
- Cities: "math tutor <city>" returns a full ten-suggestion list for Toronto, Mississauga, Vancouver, Surrey, Calgary, Edmonton, Ottawa and Waterloo; coding and AI class suggestions for about 40 cities.
- Homeschooling Ontario, Alberta and BC (curriculum, high school, requirements); costs ("how much does a tutor cost per hour in ontario", "math tutor toronto price", "mathnasium prices canada").

**Competitors (own sites, 2026-10-22, `facts-competitors.md`):** Code Ninjas (72 Canadian centres), Steamoji, Spirit of Math (B+ students only), Kumon, Mathnasium, Oxford Learning, Sylvan, Scholars are in-person franchises that publish no Canadian-dollar price. BrightCHAMPS is the one online rival with Canada pages and CAD prices. CodeWizardsHQ, Create & Learn, Tynker and Outschool never mention Canada. Every ICS3U/ICS4U result sells the credit itself (Ontario Virtual School, Virtual High School, TVO ILC and others). "ccc junior practice" returns cycling clubs. The top "best coding classes Canada" result is a 2017 Toronto listicle.

**Schools and contests (primary sources, `facts-schools-contests.md`, 214 facts, every quote grepped):** Ontario Grade 1 to 8 math expectation C3.1 has a coding step for every grade; MTH1W C2.1 uses coding for algebra; the current Ontario curriculum site lists ICD2O for Grade 10 and no longer lists ICS2O; CCC 2027 is Wednesday 17 February 2027, 5 questions, 3 hours, out of 75; students cannot register for Waterloo contests on their own and must write through a school; COMC 2026 changed its divisions and dropped the repechage; Waterloo and each University of Toronto campus publish different CS prerequisites; Ontario students starting Grade 9 in 2024 need a technological education credit; Alberta diploma exams are worth 30% since September 2023; the Caribou contest has closed (never mention it).

**Geography (`facts-geo.md`, `places.tsv`):** 10 provinces, 3 territories, 41 CMAs, 56 municipalities of 100,000+. **Canada's clocks changed in 2026:** BC adopted permanent UTC-7 ("Pacific time") after 8 March 2026 (BC Gov News 2026AG0013-000209), Manitoba stays on daylight time permanently from 1 November 2026 (Manitoba news release 75397), Alberta and Saskatchewan are on UTC-6 all year. Almost no page on the web reflects this yet: a quotable, fresh fact for every western page.

**Caveat on StatCan numbers:** StatCan's sites returned a 403 security check or an outage page for the whole run. The census figures were read from StatCan's own CSV files as stored by the Internet Archive, not from StatCan live. Before any page prints a population, it is re-pulled live from StatCan when reachable; if StatCan stays blocked, pages print the figure with "Statistics Canada, 2021 Census" only when the owner accepts the archive copy (decision 5).

## 2. What already exists (never twin; strengthen instead)

Canada pages live today: `coding-classes-in-canada` (the hub), `coding-classes-in-ontario`, `coding-classes-in-british-columbia`, `coding-classes-in-alberta`, `canadian-computing-competition-ccc-prep` (CCC hub), `cemc-waterloo-contests-preparation` (Waterloo maths hub), `online-math-tutor-canada`, `ai-and-machine-learning-classes-in-canada`. The new contest pages are spokes of the two contest hubs; the new province pages and city pages link up to the Canada hub; the math-tutor city pages link up to `online-math-tutor-canada`.

Name clashes: the UK and Australia clusters already own London, Windsor, Halifax, Cambridge, Kingston, Richmond, Surrey, Victoria, Hamilton, Milton, Peterborough and Scarborough slugs. Every Canadian page for one of those names carries the province in the slug (`london-ontario`, `surrey-bc`, `halifax-nova-scotia`).

**Phase 0 (strengthen, no new URL):**
- `online-math-tutor-canada`: remove "Premium" from the visible copy.
- `ai-and-machine-learning-classes-in-canada`: replace the wildfire-season modelling section (disaster content) with a non-sensitive Canadian dataset; replace the timing heading about the "Indian night" with the flexible timing line.
- All eight pages: the flexible timing line, the 2026 western clock changes where times are shown, batch sizes 15 to 20 and mini up to 6, one currency, no typed prices outside `data-price`, the new course cards, links down to the new spokes.
- The two contest hubs: the "register through a school" rule, the 2027 dates, the COMC 2026 changes.
- Global pages that Canadians already find (the Scratch ideas post, Python blog posts listed in GSC Canada): a short Canada section with a link to the Canada hub and the matching course.

## 3. Rules for every page

1. **Course first.** Real course cards with real thumbnails are the first section, then the priority demo button (`data-pd-book`). Course name, both formats (batch and 1-on-1) and the fee sit in the first or second section. One currency through `data-price` (USD unless decision 1 changes it); no price in FAQ text.
2. **The promise.** Every page states, in its own words, what the owner asked for: the same quality worldwide, and teaching how to think and solve problems rather than copy answers or AI output. Shown, not claimed: a worked problem where the reasoning does the work.
3. **Timing copy, exact:** "Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays." Never "weekend batch". Time tables use the 2026 offsets in `facts-geo.md` section 3 and advertise no fixed batch.
4. **Canadian framing:** grades not years, the province's own course codes and assessments, Canadian spelling where Canadians use it ("centre", "colour") but "math" (Canadians say math), the school calendar (September to June, March Break, PA days in Ontario), Canadian contests and universities. A page that still reads true after swapping "Canada" for another country is rejected.
5. **No credit claims.** ICS3U, ICS4U, MHF4U and every other credit course page states plainly that we tutor and teach alongside the student's own course and do not grant Ontario (or any province's) credits.
6. **Facts at the primary source**, fetched raw with curl, every quoted string grepped in the raw text. Never a WebFetch paraphrase. Never circumvent a 403, 429 or Cloudflare. Never sum published parts. Past contest problems are not reproduced; pages link to CEMC's own free archive and teach with our own original practice problems, labelled as ours.
7. **Depth floors:** school-course, contest, admissions and reference pages 3,000 words; province and city pages 2,200; math-tutor city pages 2,000. Every page carries something an engine can quote that nobody else has: an original worked example, code that runs, an original practice set, or a table built from the primary source.
8. **Uniqueness:** overlap hard limit 3% against the whole site, aim 2.5%; at least 8 unique required mentions per page, checked against its dossier. A place with fewer than 8 verifiable facts of its own gets no page (named inside its province page and logged under Skipped). Rows marked CONDITIONAL wait for their blocked source.
9. **Safety and claims:** no grade, mark, admission, job or salary promises; under-18 pages never recommend 18+ tools; no crime, health, money, religion, disaster or identity content; no race or gender statistics; never name individual schools or private people; open datasets only under a licence that allows commercial reuse (Open Government Licence variants, CC BY, public domain), never CC BY-NC.
10. **House style:** no em or en dashes, no "Premium", at most one visible "best" (best- slugs put the superlative in title and meta and define what best means), page `code` unique site-wide, a fresh muted accent per page, no overflow at 390px.

## 4. Courses (owner rule: build what people search for and we lack, wire it everywhere)

Already covered, no new course: Python, Java, AI and ML, vibe coding and AI agents, app development, game development, competitive programming for teens, olympiad maths, middle-school math competitions, AP courses, Math Kangaroo.

**New courses** (each: course JSON, thumbnail in the locked poster style, pricing config row, sitemap `<url>`, Course Atlas card and count, course hub listing, links from the matching Canada pages):

| # | Course | Evidence | Ages |
|---|---|---|---|
| C1 | Ontario Computer Science Companion: ICS3U and ICS4U (Python and Java) | the ICS3U/ICS4U family; every ranking result sells credits, none teaches alongside school | 15-18 |
| C2 | Waterloo Math Contests: Gauss to Euclid | Gauss, Pascal, Cayley, Fermat, Euclid families; Spirit of Math takes only its top students | 11-18 |
| C3 | CCC Junior and Senior Preparation | the CCC family; "ccc junior practice" returns no prep at all | 13-18 |
| C4 | Ontario Grade 12 University Math: Advanced Functions and Calculus and Vectors | MHF4U and MCV4U families; both are university prerequisites | 16-18 |
| C5 | Western Canada Grade 12 Math: Pre-calculus 12 and Math 30-1 | Pre-calc 12 BC and Math 30-1 families | 16-18 |

## 5. Visibility in ChatGPT, Claude, Gemini, Perplexity and Copilot (top priority)

1. **Answer capsule first:** the first 60 words answer the page's question in full, with our name, format, ages and the course.
2. **Quotable units:** a table with stated criteria on every page; numbered steps on how-to pages; exact dates, rules and limits with the source named in the sentence (for example "CEMC lists the 2027 CCC for Wednesday 17 February").
3. **Reference pages built early** because engines cite reference content: the contest calendar, the curriculum-by-province table, the Grade 12 math equivalence table (MHF4U, Pre-calculus 12, Math 30-1), the CS prerequisites table, the 2026 time-zone page.
4. **Structured data:** Course and FAQPage on every page; HowTo where steps exist; Event on the contest calendar only where the organiser publishes the date; Organization facts from `scripts/brand-facts.json` only.
5. **Machine-readable twins:** `.md` twin for every page, every page in `llms.txt`, IndexNow on deploy, sitemaps updated.
6. **Measurement:** the 30-prompt Canada set (Appendix B) run before the first push and 4 and 8 weeks after each push; results appended to `ai-engine-visibility.md`. It runs in the owner's Chrome only with the owner's OK (decision 4).

## 6. Build pipeline and gates

- Reuse the US pipeline: `content/ca/<slug>.js` per page, the `scripts/nl` renderer with a new `ca` market (NANP +1, exactly 10 digits, national number starting 2 to 9, `countryIso: 'CA'`, Canadian time zones, Canadian spelling list), a `ca-ship.sh` copied from `us-ship.sh` (local main only, one commit per page), the US gates extended for Canada (no "weekend batch", no bare IST, no typed currency outside `<pre>`, no "Premium", no en dash, no credit claim on course-code pages).
- **Country picker fix (my call, its own early task):** today `src/js/country-code-selector.js` resolves any "+1" number to the US (`DIAL_PREFERRED_ISO { '1': 'US' }`) and overwrites the page's `countryIso: 'CA'`, so a Canadian lead can be filed as American. Fix: when the dial code is 1, read the 3-digit area code and file it as CA when it is on the CNAC Canadian list (`facts-geo.md` section 4), BS for the Bahamas code, else US. Cache-bust the script on every page that loads it, then run the US, Bahamas and new CA lead browser tests. Expected: 416 or 604 number -> CA under any device time zone; 212 number -> US under any time zone; 242 number -> BS.
- **Unverified sources (my call):** before Phase 2 a re-fetch pass retries every UNVERIFIED or BLOCKED source in `facts-schools-contests.md` (Alberta Math 10C/20-1/31 and CTS computing, Yukon, Newfoundland and Labrador, PEI, NWT, the Quebec diploma). Rows 30, 31, 34, 92 to 100 and the Math 30-1 half of C5 become CONDITIONAL until their facts are verified; a row still short of 8 verified facts at build time is dropped and logged, and C5 shrinks to Pre-calculus 12 if Alberta stays unverifiable.
- Per page gates: `verify-cluster-pages.js`, `check-cluster-uniqueness.js`, required mentions against the full dossier, banned-text scan, `pricing:verify`, `verify:sitemap`, `verify:hreflang`, `node scripts/ensure-phone-country.js` after any manual build, render check on the local server at desktop and 390px, rendered text read back.
- Never `git add -A`; shared files staged by explicit path.
- **Preview gate:** the 3 Phase 1 pilots (ICS3U help, CCC Junior guide, Toronto) are built and shown to the owner; nothing else ships until the owner says yes.

## 7. Phases

| Phase | What | Rows |
|---|---|---|
| 0a | Plain fixes on live pages, committed first (my call: these are bug fixes, not a sweep): "Premium" on `online-math-tutor-canada`, the wildfire section and the timing heading on `ai-and-machine-learning-classes-in-canada`, the wrong `data-price-scope="coding.india"` on `cemc-waterloo-contests-preparation`, the country picker fix | 4 |
| 0b | Strengthen the 8 existing Canada pages plus the global pages Canadians already find; runs AFTER the owner approves the pilots | about 12 edits |
| 1 | Pilots: ICS3U help, CCC Junior guide, Toronto | 3 |
| 2 | School courses (Ontario 17, BC 7, Alberta 8, Quebec 3), contests 18, admissions 5, reference 3, doors 14, best and thinking 3, cost 3, breaks 2, comparisons 4 | 87 |
| 3 | 10 new provinces and territories; Ontario, BC, Alberta and the hub strengthened in Phase 0 | 10 |
| 4 | 58 city pages (GTA by city plus three Toronto districts, every CMA, the other 100,000+ municipalities) and 16 math-tutor city pages | 74 |
| C | Courses C1 to C5, each built alongside the first phase that links to it; C1 and C3 come before the pilots because the ICS3U and CCC Junior pilots open with their course cards | 5 |

Total: 174 new URLs plus 5 courses and about 12 strengthened pages. All 174 slugs were checked on 2026-10-22 against `src/pages`, `_redirects`, `netlify.toml`, every sitemap and the blog and course data: all free. City slugs use six shapes so the cluster catches different searches: `coding-and-ai-classes-in-`, `best-coding-classes-for-kids-in-`, `ai-and-python-classes-for-teens-in-`, `online-coding-and-python-classes-in-`, `vibe-coding-and-ai-agents-classes-in-`, `coding-classes-for-kids-in-`, plus `math-tutor-<city>`.

Order inside Phase 2: reference pages and the contest calendar first (engines cite them, and every other page links to them), then the contests with the nearest dates (Beaver in November, CCC and Pascal/Cayley/Fermat in February), then the Ontario courses, then the rest.

## 8. Owner decisions

1. **Currency for Canadian visitors, decided before Phase 2 drafting:** keep USD (default, no work), or add a CAD region to the pricing system so Canadians see Canadian dollars. No big Canadian brand publishes a CAD price, so CAD would stand out; it is a pricing-system change (new region in `pricing.config.jsonc`, detection in `international-pricing.js`, checkout). It also decides the cost pages: with USD, market figures found in CAD (online credit schools, BrightCHAMPS) are printed converted to USD with the rate and date stated, as the owner approved for the UK maths cost pages; with CAD, they print as found. Either way the credit-selling online schools are described, not named.
2. **French pages for Quebec:** English only (default), or add French versions of the Quebec, Montreal, Laval, Quebec City, Gatineau, Longueuil and Sherbrooke pages later as a separate phase.
3. **Comparison pages** name Code Ninjas, Spirit of Math, BrightCHAMPS and Oxford Learning (facts from their own sites only, as the existing `modern-age-coders-vs-*` pages do): keep, or criteria-only.
4. **AI baseline:** OK to run the Appendix B prompts in the owner's Chrome.
5. **StatCan archive copy:** accept census figures read from StatCan's own files via the Internet Archive while StatCan blocks automated requests, or print populations only after a live re-pull.

## Appendix B: Canada AI-answer prompt set (30, fixed wording)

| # | Prompt |
|---|---|
| C01 | Best live online coding classes for kids in Canada, not pre-recorded videos |
| C02 | Where can my teen get help with ICS3U computer science in Ontario? |
| C03 | Is ICS3U hard, and should my child take ICS3U or ICS3C? |
| C04 | How do I prepare for the CCC Junior coding contest? |
| C05 | How does a Canadian student get onto the IOI team? |
| C06 | How can my child write the Gauss contest if their school does not offer it? |
| C07 | Best preparation for the Euclid math contest for Waterloo admission |
| C08 | Online math tutor for MHF4U Advanced Functions with a live teacher |
| C09 | Math 30-1 tutor in Alberta online |
| C10 | Pre-calculus 12 tutor in BC online |
| C11 | What coding does the Ontario math curriculum teach in Grade 6? |
| C12 | EQAO Grade 9 math practice help |
| C13 | What courses do I need for computer science at Waterloo? |
| C14 | AI classes for teens in Canada with a live instructor |
| C15 | Python classes for kids in Toronto |
| C16 | Coding classes for kids in Vancouver online |
| C17 | Coding classes in Calgary for teens |
| C18 | Math tutor in Mississauga for high school |
| C19 | How much does a math tutor cost per hour in Ontario? |
| C20 | How much do coding classes for kids cost in Canada? |
| C21 | Online coding camp for March Break in Canada |
| C22 | Code Ninjas vs online coding classes |
| C23 | Spirit of Math alternatives for problem solving |
| C24 | Homeschool coding and math curriculum in Alberta |
| C25 | Which coding classes teach kids to think, not just copy AI? |
| C26 | Vibe coding and AI agents course for adults in Canada |
| C27 | Coding classes for adults in Canada changing career |
| C28 | What time are online classes from India for families in BC after the 2026 time change? |
| C29 | Beaver Computing Challenge practice for Grade 5 |
| C30 | Best online math tutoring in Canada for understanding, not memorising |

## Appendix A: page list

| # | Phase | Family | Slug | Searches it targets |
|---|---|---|---|---|
| 1 | P1 | school-on | `ics3u-computer-science-help` | ics3u / ics3u python / ics3u java / ics3u exam review / is ics3u hard / ics3u online |
| 2 | P1 | contest | `ccc-junior-guide` | ccc junior / ccc junior 2026 / ccc junior problems / ccc junior vs senior / canadian computing competition junior |
| 3 | P1 | city | `coding-and-ai-classes-in-toronto` | coding classes toronto / coding for kids toronto / ai classes toronto / python classes toronto |
| 4 | 2 | school-on | `ics4u-computer-science-help` | ics4u / ics4u python / ics4u java / ics4u exam / is ics4u hard / ics4u online |
| 5 | 2 | school-on | `ics3u-vs-ics3c` | ics3c / ics3c course / ics3u vs ics3c / ics3c curriculum |
| 6 | 2 | school-on | `icd2o-digital-technology-course-explained` | ics2o / ics2o course / grade 10 computer course ontario / icd2o |
| 7 | 2 | school-on | `ics3u-ics4u-exam-review-practice` | ics3u final exam / ics3u exam review / ics4u exam review / ics3u unit 1 test |
| 8 | 2 | school-on | `ontario-coding-curriculum-grades-1-to-8` | ontario math curriculum coding / grade 1 coding ontario / grade 3 coding ontario / grade 6 coding ontario |
| 9 | 2 | school-on | `ontario-grade-6-math-and-coding-help` | grade 6 coding ontario / eqao grade 6 math / grade 6 math ontario |
| 10 | 2 | school-on | `mth1w-grade-9-math-explained` | mth1w / destreamed grade 9 math / grade 9 math ontario / grade 9 math coding |
| 11 | 2 | school-on | `eqao-grade-3-math-practice` | eqao grade 3 / eqao grade 3 practice test free / eqao grade 3 sample test |
| 12 | 2 | school-on | `eqao-grade-6-math-practice` | eqao grade 6 math / eqao grade 6 practice test / eqao grade 6 sample questions |
| 13 | 2 | school-on | `eqao-grade-9-math-practice` | eqao grade 9 math / eqao grade 9 practice test / eqao grade 9 formula sheet / released questions |
| 14 | 2 | school-on | `mcr3u-functions-tutor` | mcr3u / mcr3u functions grade 11 / mcr3u final exam / mcr3u tutor |
| 15 | 2 | school-on | `mhf4u-advanced-functions-tutor` | mhf4u / advanced functions grade 12 / mhf4u tutor / mhf4u exam |
| 16 | 2 | school-on | `mcv4u-calculus-and-vectors-tutor` | mcv4u / calculus and vectors / mcv4u tutor / mcv4u exam |
| 17 | 2 | school-on | `mdm4u-data-management-tutor` | mdm4u / data management grade 12 / mdm4u tutor |
| 18 | 2 | school-on | `mcf3m-vs-mcr3u` | mcf3m vs mcr3u / mcf3m / which grade 11 math ontario |
| 19 | 2 | school-on | `ontario-high-school-diploma-credits-explained` | ontario high school credits / ossd requirements / technological education credit |
| 20 | 2 | school-on | `ontario-computer-science-course-pathway` | ontario computer science curriculum / icd2o to ics4u / ossd ics3u / ossd ics4u |
| 21 | 2 | school-bc | `bc-adst-curriculum-coding-by-grade` | bc adst curriculum / adst bc curriculum grade 3-9 / bc curriculum adst 8 |
| 22 | 2 | school-bc | `computer-programming-11-and-12-bc` | computer science 11 bc / computer science 12 bc / computer programming 11 bc |
| 23 | 2 | school-bc | `pre-calculus-11-tutor-bc` | pre-calculus 11 / pre-calc 11 bc tutor |
| 24 | 2 | school-bc | `pre-calculus-12-tutor-bc` | pre-calculus 12 / pre-calc 12 bc tutor |
| 25 | 2 | school-bc | `calculus-12-tutor-bc` | calculus 12 bc / calculus 12 bc online / calculus 12 british columbia |
| 26 | 2 | school-bc | `foundations-of-math-11-tutor-bc` | foundations of math 11 / foundations of math 11 bc curriculum / online bc |
| 27 | 2 | school-bc | `bc-grade-10-numeracy-assessment-practice` | bc numeracy assessment / grade 10 numeracy assessment practice (CONDITIONAL: gov.bc.ca facts unverified) |
| 28 | 2 | school-ab | `math-30-1-tutor-alberta` | math 30-1 / math 30-1 alberta / math 30 tutor edmonton / math 30-1 diploma |
| 29 | 2 | school-ab | `math-30-1-vs-math-30-2` | math 30-1 vs 30-2 / math 30-2 / math 30-2 alberta |
| 30 | 2 | school-ab | `math-20-1-tutor-alberta` | math 20-1 / math 20-1 alberta / math 20-1 review |
| 31 | 2 | school-ab | `math-31-calculus-tutor-alberta` | math 31 / math 31 alberta / math 31 tutor edmonton |
| 32 | 2 | school-ab | `alberta-math-30-1-diploma-exam-prep` | alberta diploma exams 2027 / math 30-1 diploma / diploma exam schedule |
| 33 | 2 | school-ab | `alberta-grade-9-math-pat-practice` | grade 9 pat alberta 2026 / alberta pat grade 9 math part a / grade 9 math alberta |
| 34 | 2 | school-ab | `alberta-grade-6-math-pat-practice` | grade 6 pat alberta / alberta grade 6 math test |
| 35 | 2 | school-ab | `alberta-new-math-curriculum-explained` | alberta new math curriculum / alberta new math curriculum 7-9 / alberta education new math curriculum |
| 36 | 2 | school-qc | `quebec-secondary-4-math-cst-ts-science` | sec 4 math / cst math / cst math sec 4 / quebec secondary 4 math |
| 37 | 2 | school-qc | `quebec-secondary-5-math-tutor` | sec 5 math / grade 11 math quebec / quebec math tutor |
| 38 | 2 | school-qc | `cegep-computer-science-preparation` | cegep computer science / computer science cegep montreal |
| 39 | 2 | contest | `ccc-senior-guide` | ccc senior / ccc senior 2026 / canadian computing competition senior level / ccc senior questions |
| 40 | 2 | contest | `ccc-past-problems-practice-guide` | canadian computing competition past papers / ccc questions / ccc junior problems |
| 41 | 2 | contest | `canadian-computing-olympiad-cco-guide` | canadian computing olympiad / cco / canadian informatics olympiad / ioi canada |
| 42 | 2 | contest | `beaver-computing-challenge-guide` | beaver computing challenge / bcc 2026 / beaver computing challenge practice tests / past papers |
| 43 | 2 | contest | `gauss-contest-preparation` | gauss contest / gauss contest grade 7 8 / gauss past papers / gauss 2027 |
| 44 | 2 | contest | `pascal-contest-preparation` | pascal contest / pascal contest grade 9 / past papers / results |
| 45 | 2 | contest | `cayley-contest-preparation` | cayley contest / cayley contest waterloo / past papers / results |
| 46 | 2 | contest | `fermat-contest-preparation` | fermat contest / fermat contest date / past papers / results |
| 47 | 2 | contest | `euclid-contest-preparation` | euclid contest / euclid contest date / euclid contest preparation / past papers |
| 48 | 2 | contest | `fryer-galois-hypatia-contests-guide` | fryer contest / galois contest / hypatia contest |
| 49 | 2 | contest | `cimc-and-csmc-contest-guide` | cimc / csmc / canadian intermediate mathematics contest / canadian senior mathematics contest |
| 50 | 2 | contest | `canadian-math-olympiad-cmo-path` | canadian math olympiad / cmo canada / canadian math olympiad team / training / how to make the imo team canada |
| 51 | 2 | contest | `comc-canada-open-mathematics-challenge-guide` | comc / canada open mathematics challenge / comc 2026 changes |
| 52 | 2 | contest | `math-kangaroo-canada-preparation` | math kangaroo canada / math kangaroo canada 2027 |
| 53 | 2 | contest | `canada-math-and-coding-contest-calendar` | waterloo math contest dates 2027 / ccc 2027 date / cemc contest calendar |
| 54 | 2 | contest | `how-to-register-for-waterloo-contests` | how to write cemc contest without school / homeschool waterloo contest / register for ccc |
| 55 | 2 | contest | `cemc-free-resources-guide` | cemc problem of the week / cemc past contests / cs circles / cemc courseware |
| 56 | 2 | contest | `usaco-for-canadian-students` | usaco canada / usaco vs ccc |
| 57 | 2 | admit | `waterloo-computer-science-admission-requirements` | waterloo computer science admission / waterloo cs average / waterloo cs prerequisites |
| 58 | 2 | admit | `waterloo-aif-guide` | waterloo aif / admission information form waterloo / aif deadline |
| 59 | 2 | admit | `uoft-computer-science-admission-requirements` | uoft computer science admission / utsc utm st george cs prerequisites |
| 60 | 2 | admit | `ubc-computer-science-admission-requirements` | ubc computer science admission (CONDITIONAL: you.ubc.ca cert error, facts unverified) |
| 61 | 2 | admit | `computer-science-prerequisites-canadian-universities` | computer science university canada / cs prerequisites ontario universities / mcv4u required |
| 62 | 2 | ref | `canada-coding-curriculum-by-province` | computer science curriculum <province> / coding curriculum canada |
| 63 | 2 | ref | `canada-high-school-math-courses-compared` | mhf4u equivalent / pre-calculus 12 vs math 30-1 / grade 12 math by province |
| 64 | 2 | ref | `canada-time-zones-2026-online-class-times` | bc permanent daylight time / manitoba permanent dst / online class time canada |
| 65 | 2 | door | `coding-classes-for-kids-in-canada` | coding classes for kids canada / coding for kids canada / online coding for kids canada |
| 66 | 2 | door | `coding-classes-for-teens-in-canada` | coding classes for teens canada / coding for high school students canada |
| 67 | 2 | door | `python-classes-in-canada` | python course canada / learn python online canada / python for kids canada |
| 68 | 2 | door | `java-classes-for-teens-in-canada` | java course canada / ics3u java / java for high school |
| 69 | 2 | door | `ai-classes-for-kids-in-canada` | ai classes for kids canada / ai course for kids online |
| 70 | 2 | door | `vibe-coding-and-ai-agents-classes-in-canada` | vibe coding / ai agents course canada / agentic ai course canada |
| 71 | 2 | door | `app-development-classes-for-teens-canada` | app development for teens canada |
| 72 | 2 | door | `game-development-classes-for-kids-canada` | game design for kids canada / roblox coding canada |
| 73 | 2 | door | `coding-classes-for-adults-in-canada` | coding for adults canada / career change to tech canada / web development course canada |
| 74 | 2 | door | `coding-classes-for-seniors-in-canada` | coding for seniors canada |
| 75 | 2 | door | `math-classes-for-kids-in-canada` | math classes for kids canada / math help grade 1-8 canada |
| 76 | 2 | door | `homeschool-coding-and-math-ontario` | homeschooling ontario curriculum / homeschooling ontario high school / coding for kids homeschool |
| 77 | 2 | door | `homeschool-coding-and-math-alberta` | homeschooling alberta curriculum / homeschooling alberta high school |
| 78 | 2 | door | `homeschool-coding-and-math-bc` | homeschool bc curriculum / bc homeschool programs |
| 79 | 2 | best | `best-online-coding-classes-in-canada` | best coding classes for kids in canada / best online coding courses canada |
| 80 | 2 | best | `best-online-math-tutoring-in-canada` | best online math tutor canada |
| 81 | 2 | think | `problem-solving-coding-and-math-classes-canada` | coding problem-solving activities / learn to think not copy ai / math thinking classes |
| 82 | 2 | cost | `coding-classes-cost-canada` | coding classes cost canada / how much are coding classes for kids |
| 83 | 2 | cost | `math-tutor-cost-canada` | how much does a tutor cost per hour in ontario / math tutor toronto price / private tutor cost vancouver |
| 84 | 2 | cost | `coding-camp-cost-canada` | coding camp cost / code ninja camp cost |
| 85 | 2 | break | `march-break-coding-camp-online` | march break camp coding / march break coding toronto / pa day coding |
| 86 | 2 | break | `online-coding-summer-camp-canada` | summer coding camp canada / coding camp toronto summer |
| 87 | 2 | vs | `modern-age-coders-vs-code-ninjas` | code ninjas canada / code ninjas alternative |
| 88 | 2 | vs | `modern-age-coders-vs-spirit-of-math` | spirit of math / spirit of math alternative |
| 89 | 2 | vs | `modern-age-coders-vs-brightchamps` | brightchamps canada / brightchamps alternative |
| 90 | 2 | vs | `modern-age-coders-vs-oxford-learning` | oxford learning / oxford learning cost / alternative |
| 91 | 3 | prov | `coding-classes-in-quebec` | coding classes quebec / computer science curriculum quebec |
| 92 | 3 | prov | `coding-classes-in-manitoba` | coding classes manitoba / computer science curriculum manitoba |
| 93 | 3 | prov | `coding-classes-in-saskatchewan` | coding classes saskatchewan / computer science curriculum saskatchewan |
| 94 | 3 | prov | `coding-classes-in-nova-scotia` | coding classes nova scotia / computer programming 12 nova scotia |
| 95 | 3 | prov | `coding-classes-in-new-brunswick` | coding classes new brunswick |
| 96 | 3 | prov | `coding-classes-in-newfoundland-and-labrador` | coding classes newfoundland |
| 97 | 3 | prov | `coding-classes-in-prince-edward-island` | coding classes pei |
| 98 | 3 | prov | `coding-classes-in-yukon` | coding classes yukon |
| 99 | 3 | prov | `coding-classes-in-northwest-territories` | coding classes northwest territories |
| 100 | 3 | prov | `coding-classes-in-nunavut` | coding classes nunavut (CONDITIONAL: 8-fact rule) |
| 101 | 4 | city | `coding-and-ai-classes-in-ottawa` | coding classes ottawa / python classes ottawa / ai classes ottawa |
| 102 | 4 | city | `coding-and-ai-classes-in-montreal` | coding classes montreal / ai classes montreal / robotics classes montreal |
| 103 | 4 | city | `coding-and-ai-classes-in-calgary` | coding classes calgary / ai courses calgary / robotics classes calgary |
| 104 | 4 | city | `coding-and-ai-classes-in-edmonton` | coding classes edmonton / ai classes edmonton |
| 105 | 4 | city | `coding-and-ai-classes-in-winnipeg` | coding classes winnipeg / coding for kids winnipeg |
| 106 | 4 | city | `coding-and-ai-classes-in-quebec-city` | coding classes quebec city |
| 107 | 4 | city | `coding-and-ai-classes-in-halifax-nova-scotia` | coding classes halifax (UK halifax page exists) |
| 108 | 4 | city | `coding-and-ai-classes-in-london-ontario` | coding classes london ontario (UK london pages exist) |
| 109 | 4 | city | `coding-and-ai-classes-in-saskatoon` | coding classes saskatoon |
| 110 | 4 | city | `coding-and-ai-classes-in-regina` | coding classes regina |
| 111 | 4 | city | `coding-and-ai-classes-in-victoria-bc` | coding classes victoria (AU victoria page exists) |
| 112 | 4 | city | `coding-and-ai-classes-in-st-johns-newfoundland` | coding classes st johns |
| 113 | 4 | city | `best-coding-classes-for-kids-in-mississauga` | coding classes mississauga / coding for kids mississauga |
| 114 | 4 | city | `best-coding-classes-for-kids-in-markham` | coding for kids markham / coding classes markham |
| 115 | 4 | city | `best-coding-classes-for-kids-in-vancouver` | coding classes vancouver / coding for kids vancouver |
| 116 | 4 | city | `best-coding-classes-for-kids-in-oakville` | coding for kids oakville / robotics classes oakville |
| 117 | 4 | city | `best-coding-classes-for-kids-in-burnaby` | coding classes burnaby |
| 118 | 4 | city | `best-coding-classes-for-kids-in-kitchener` | coding classes kitchener |
| 119 | 4 | city | `best-coding-classes-for-kids-in-laval` | coding classes laval |
| 120 | 4 | city | `best-coding-classes-for-kids-in-kelowna` | coding classes kelowna |
| 121 | 4 | city | `best-coding-classes-for-kids-in-moncton` | coding classes moncton |
| 122 | 4 | city | `ai-and-python-classes-for-teens-in-waterloo-ontario` | coding classes waterloo / robotics classes waterloo |
| 123 | 4 | city | `ai-and-python-classes-for-teens-in-richmond-hill` | coding classes richmond hill |
| 124 | 4 | city | `ai-and-python-classes-for-teens-in-brampton` | coding classes brampton / ai course brampton |
| 125 | 4 | city | `ai-and-python-classes-for-teens-in-surrey-bc` | coding classes surrey (UK surrey page exists) |
| 126 | 4 | city | `ai-and-python-classes-for-teens-in-gatineau` | coding classes gatineau |
| 127 | 4 | city | `ai-and-python-classes-for-teens-in-guelph` | coding classes guelph |
| 128 | 4 | city | `ai-and-python-classes-for-teens-in-lethbridge` | coding classes lethbridge |
| 129 | 4 | city | `ai-and-python-classes-for-teens-in-fredericton` | coding classes fredericton |
| 130 | 4 | city | `online-coding-and-python-classes-in-vaughan` | coding classes vaughan |
| 131 | 4 | city | `online-coding-and-python-classes-in-hamilton-ontario` | coding classes hamilton (UK hamilton page exists) |
| 132 | 4 | city | `online-coding-and-python-classes-in-coquitlam` | coding classes coquitlam |
| 133 | 4 | city | `online-coding-and-python-classes-in-burlington-ontario` | coding classes burlington |
| 134 | 4 | city | `online-coding-and-python-classes-in-windsor-ontario` | coding classes windsor |
| 135 | 4 | city | `online-coding-and-python-classes-in-barrie` | coding classes barrie |
| 136 | 4 | city | `online-coding-and-python-classes-in-sherbrooke` | coding classes sherbrooke |
| 137 | 4 | city | `online-coding-and-python-classes-in-red-deer` | coding classes red deer |
| 138 | 4 | city | `online-coding-and-python-classes-in-kamloops` | coding classes kamloops |
| 139 | 4 | city | `online-coding-and-python-classes-in-thunder-bay` | coding classes thunder bay |
| 140 | 4 | city | `online-coding-and-python-classes-in-saint-john-new-brunswick` | coding classes saint john |
| 141 | 4 | city | `vibe-coding-and-ai-agents-classes-in-richmond-bc` | coding classes richmond bc (UK richmond page exists) |
| 142 | 4 | city | `vibe-coding-and-ai-agents-classes-in-milton-ontario` | coding classes milton (UK milton keynes page exists) |
| 143 | 4 | city | `vibe-coding-and-ai-agents-classes-in-north-vancouver` | coding classes north vancouver |
| 144 | 4 | city | `vibe-coding-and-ai-agents-classes-in-kingston-ontario` | coding classes kingston (UK and AU kingston pages exist) |
| 145 | 4 | city | `vibe-coding-and-ai-agents-classes-in-longueuil` | coding classes longueuil |
| 146 | 4 | city | `vibe-coding-and-ai-agents-classes-in-nanaimo` | coding classes nanaimo |
| 147 | 4 | city | `vibe-coding-and-ai-agents-classes-in-brantford` | coding classes brantford |
| 148 | 4 | city | `vibe-coding-and-ai-agents-classes-in-peterborough-ontario` | coding classes peterborough (UK peterborough page exists) |
| 149 | 4 | city | `vibe-coding-and-ai-agents-classes-in-greater-sudbury` | coding classes sudbury |
| 150 | 4 | city | `coding-classes-for-kids-in-scarborough-toronto` | coding classes scarborough (AU scarborough-wa page exists) |
| 151 | 4 | city | `coding-classes-for-kids-in-north-york-toronto` | coding classes north york |
| 152 | 4 | city | `coding-classes-for-kids-in-etobicoke-toronto` | coding classes etobicoke |
| 153 | 4 | city | `coding-classes-for-kids-in-ajax-and-pickering` | coding classes ajax / pickering |
| 154 | 4 | city | `coding-classes-for-kids-in-oshawa-and-whitby` | coding classes oshawa / whitby |
| 155 | 4 | city | `coding-classes-for-kids-in-langley-bc` | coding classes langley |
| 156 | 4 | city | `coding-classes-for-kids-in-abbotsford` | coding classes abbotsford |
| 157 | 4 | city | `coding-classes-for-kids-in-cambridge-ontario` | coding classes cambridge (UK cambridge pages exist) |
| 158 | 4 | city | `coding-classes-for-kids-in-st-catharines-niagara` | coding classes st catharines / niagara |
| 159 | 4 | math-city | `math-tutor-toronto` | math tutor toronto / math tutor toronto price |
| 160 | 4 | math-city | `math-tutor-mississauga` | math tutor mississauga |
| 161 | 4 | math-city | `math-tutor-brampton` | math tutor brampton |
| 162 | 4 | math-city | `math-tutor-markham` | math tutor markham |
| 163 | 4 | math-city | `math-tutor-vaughan` | math tutor vaughan |
| 164 | 4 | math-city | `math-tutor-richmond-hill` | math tutor richmond hill |
| 165 | 4 | math-city | `math-tutor-oakville` | math tutor oakville |
| 166 | 4 | math-city | `math-tutor-ottawa` | math tutor ottawa |
| 167 | 4 | math-city | `math-tutor-waterloo-ontario` | math tutor waterloo |
| 168 | 4 | math-city | `math-tutor-vancouver` | math tutor vancouver / private tutor cost vancouver |
| 169 | 4 | math-city | `math-tutor-surrey-bc` | math tutor surrey |
| 170 | 4 | math-city | `math-tutor-burnaby` | math tutor burnaby |
| 171 | 4 | math-city | `math-tutor-calgary` | math tutor calgary |
| 172 | 4 | math-city | `math-tutor-edmonton` | math tutor edmonton / math 30 tutor edmonton |
| 173 | 4 | math-city | `math-tutor-winnipeg` | math tutor winnipeg |
| 174 | 4 | math-city | `math-tutor-montreal` | math tutor montreal |
