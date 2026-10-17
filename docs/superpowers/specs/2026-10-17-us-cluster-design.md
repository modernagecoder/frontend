# USA Cluster: depth first, every state, AI-answer-engine ready

Date: 2026-10-17
Status: SPEC for owner review. No page built yet. Branch: build on `main` locally, commit only, never push until the owner says push.
Related: [Australia cluster](2026-10-07-au-cluster-design.md) (the pipeline this reuses), [UK cluster](2026-09-19-uk-cluster-design.md). Tracker to create: `US-PROGRESS.md`. Research files (outside the repo): `Desktop/SkyCoders/keyword-research-2026-09/us/`.

## 0. What the owner asked for (2026-10-17, owner's words kept close)

- "go ahead with usa maximum best pages, check existing usa pages, don't make duplicate content, I want maximum high quality pages which bring traffic and I can convert them ... real depth knowledge ... capture full usa market, anyone searching in usa, modern age coders will be the first choice."
- Chose **approach B**: depth first (searches we lose, then US-only topics), then 50 states plus DC, then about 25 metros.
- Timing: "weekends + 1-on-1", then corrected: never promise "weekend batches". Copy is **"Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays."**
- "if any course is missing which people are searching, make that course and add it in the course pages and the atlas, everywhere."
- "people search on ChatGPT, Claude, Gemini now, make it top priority, I need to be highly visible there."

## 1. Evidence

**Search Console, US, 16 months:** 672,367 impressions, 1,580 clicks, CTR 0.23%, average position 12.46. That is more impressions than India (444K), with a seventh of the clicks. Largest US queries we show for but do not win: "advanced coding languages for teens" 8,452 at 6.8, "coding milestones for 8-10 year olds" 3,098 at 8.2, "game design for teens" 2,686 at 34, "best coding games for kids" 2,025 at 12.9, "kids coding languages" 1,854 at 10.5, "coding for 7 year olds" 825 at 9.6, game coding and programming queries 200 to 400 each at positions 20 to 40, "summer coding bootcamp" 206 at 29, "computer science extracurriculars" 179 at 12, "vibe coding" 199 at 69.

**Google US autocomplete (2026-10-17):** 769 seed queries, 3,928 unique suggestions, `autocomplete_us.tsv`. Strong families: Roblox and Luau ("how to make a roblox game on chromebook / ipad / with ai", "lua for kids"), Godot for kids (a dozen variants), game design and video game coding for kids and teens, AI courses / projects / research / certification / summer programs for high school and middle school students, Congressional App Challenge (rules, deadline, winners), Presidential AI Challenge (deadline, guidebook, winners), ACSL (rules, preparation, dates), picoCTF (primer, gym), CyberPatriot, coding and math competitions for middle and high school, AP CS A score calculator and college credit, "computer science graduation requirement nc", "computer science standards <state>", coding summer camps in about 40 US cities, cost per hour of math and coding tutors.

**Competitors (sitemaps, 2026-10-17):** CodeWizardsHQ runs about 70 `coding-classes-near-me/coding-classes-<city>` pages plus grade-band pages; Create & Learn has grade-band, Congressional App Challenge, Presidential AI Challenge and AP CS pages; iD Tech sells Godot, Minecraft Java modding, Roblox Lua, Unity and Fortnite/UEFN courses.

**AI answer engines (baseline 2026-09-22, `ai-engine-visibility.md`):** ChatGPT named or cited us on 33% of 24 prompts, Google AI Mode 42%, Perplexity 33%. For "best live online coding classes for kids in the US, not pre-recorded videos" ChatGPT and Perplexity did not name us. Bing Copilot citations of our site: resources 37%, blog 35%, courses 0.4%, city pages about 0.

## 2. What already exists (never twin; strengthen instead)

US exam and subject pages live today: `ap-computer-science-a-online-classes`, `ap-computer-science-principles-online-coaching`, `ap-calculus-tutoring-online`, `ap-statistics-tutoring-online`, `sat-math-tutoring-online`, `act-math-tutoring-online`, `usaco-preparation-online-coaching`, `mathcounts-preparation`, `math-olympiad-amc-tutoring`, `math-kangaroo-usa-preparation`, `isee-ssat-math-prep`, `homeschool-math-curriculum-usa`, `homeschool-coding-curriculum`, `algebra-tutoring-online-usa`, `geometry-tutoring-online-usa`, `online-math-tutor-<kindergarten..12th-grade>`, `coding-for-<8..17>-year-olds`, `python-for-<9..17>-year-olds`, `roblox-coding-classes-for-kids`, `minecraft-coding-classes-for-kids`, `summer-coding-camp*`, `summer-research-programs-coding`, `computer-science-extracurriculars`, `hackathons-for-high-school-students`, `ai-projects-for-high-school-students`, `best-ai-courses-for-teens-2026`, `coding-classes-for-kids-cost`, `online-coding-classes-cost`, `online-math-tutor-cost`, `modern-age-coders-vs-<juni-learning|outschool|tynker|...>`, `coding-classes-in-{united-states,california,new-york,texas,georgia}`, `online-coding-classes-for-kids-usa`, `ai-and-machine-learning-classes-in-usa`, `online-maths-tutoring-for-{kids,teens,college-students}-in-usa`, `online-maths-classes-for-adults-in-usa`.

Blog posts that own their search (improve, never compete): `ap-csp-vs-ap-csa-which-to-take-first`, `how-to-get-a-5-in-ap-computer-science-a`, `ap-computer-science-a-changes-2026`, `best-coding-languages-kids-10-18` ("advanced coding languages for teens", "kids coding languages"), `top-coding-games-platforms-kids` ("best coding games for kids"), `coding-for-5-year-olds-...`, `coding-for-6-year-olds`, `coding-for-7-year-olds-...`, `minecraft-vs-roblox-which-teaches-kids-to-code`, `usaco-bronze-to-silver-what-blocks-most-students`, `how-to-use-chatgpt-to-study-without-cheating`, `safe-ai-tools`.

**Phase 0 (strengthen, no new URL):** add a US section, US grade mapping, the flexible-timing line, course cards and links into the new pages on: the 12 blog posts above, `coding-classes-for-kids-cost` and `online-coding-classes-cost` (US price context in USD), the AP CS A/CSP pages, `computer-science-extracurriculars`, and `online-coding-classes-for-kids-usa`. Each is checked for the old batch sizes, a second currency, "Premium" and fixed US timetables.

## 3. Rules for every page

1. **Course first.** Real course cards with real thumbnails are the first section, then the priority demo button (`data-pd-book`). Course name, both formats (batch and 1-on-1) and the fee sit in the first or second section. USD only, through `data-price`; no price in FAQ text.
2. **Timing copy** exactly as in section 0. Time-zone tables may show conversions (Eastern, Central, Mountain, Pacific, Alaska, Hawaii) but advertise no fixed batch.
3. **American framing**: grades not years, US school calendar, state rules, US competitions, College Board vocabulary. A page that reads true after swapping "USA" for another country is rejected.
4. **Facts at the primary source**, fetched raw with curl, quoted strings grepped in the raw text. Never a WebFetch paraphrase. Never circumvent a 403/429. Never sum published parts. Our own simulations, scripts and practice items are labelled as ours.
5. **Depth floors**: topic, exam, competition and data pages 3,000 words; state and metro pages 2,200. Every page carries something an engine can quote that nobody else has: an original worked example, real code that runs, an original practice set, or a data table built from the primary source.
6. **AI-answer-engine ready** (section 6) on every page.
7. **Uniqueness**: overlap hard limit 3% against the whole site, aim 2.5%; at least 8 unique required mentions per page checked against its dossier. A state or metro with fewer than 8 verifiable facts of its own gets no page (named inside the state page, logged under Skipped).
8. **Safety and claims**: no grade, score, admission, job or salary promises; under-18 pages never recommend 18+ tools (Claude is 18+; ChatGPT 13+ with parental consent, confirmed at source before printing); no crime, health, money, religion, disaster or identity content (the Code.org race and gender tabs are not used); only public, co-ed schools named, and only when a source names them.
9. **House style**: no em or en dashes, no "Premium", at most one visible "best", page `code` unique site-wide, no overflow at 390px, a fresh muted accent per page (reaccent rule as AU).

## 4. Sources (reachability tested 2026-10-17)

Open: Google autocomplete; College Board (`reports.collegeboard.org` data archive incl. `school-report-of-ap-exams-by-state-2023-24.xlsx`, `apcentral.collegeboard.org`); Code.org State of AI + CS raw data sheet (state access %, urban/suburban/rural, school size, participation, graduating seniors who took CS, by year); `congressionalappchallenge.us`, `acsl.org`, `picoctf.org`, `technovationchallenge.org`, `mathcounts.org`, `nces.ed.gov`, `data.census.gov`, state education departments (`tea.texas.gov`, `nysed.gov` and the rest checked per page). **Blocked: `maa.org` (403)**, so AMC facts are not printed except from other primary pages; the existing AMC page keeps that intent. Code.org data reuse terms are checked before the first state page prints a figure; if reuse is not allowed, state pages use state department and College Board figures only.

## 5. Courses (owner rule: build what people search for and we lack, wire it everywhere)

Already covered, no new course: Roblox Luau (`roblox-game-coding-for-kids-lua-course`), Minecraft (`minecraft-coding-for-kids-course`, plus Forge modding inside Java for Teens), Unity (game dev for teens), MIT App Inventor (inside the kids app course), Pygame (inside the Python kids and teens courses), AP CS A, AP CSP, AP Precalc, AP Stats, AP Calculus, SAT Math, USACO-level competitive programming, teen cybersecurity.

**New courses (each: course JSON, thumbnail in the locked poster style, pricing config row, sitemap `<url>`, Course Atlas card and count, course hub listing, links from the matching US pages):**

| # | Course | Evidence | Ages |
|---|---|---|---|
| C1 | Godot Game Development for Kids and Teens | a dozen "godot for kids" autocomplete variants; iD Tech sells it | 10-17 |
| C2 | C++ for Kids | "c++ for kids", "c++ coding for kids", "c++ for kids online"; we only have teen and college C++ | 9-12 |
| C3 | ACT Math Prep | "act math prep / practice test / tips"; the ACT page has no course behind it | 14-18 |
| C4 | Cybersecurity Competitions: picoCTF and CyberPatriot Prep | picoCTF and CyberPatriot autocomplete families; existing teen course is general | 13-18 |
| C5 | Middle School Math Competitions: MATHCOUNTS, AMC 8, Math Kangaroo | "math competition for middle school" family; the olympiad course aims at AIME to IMO | 10-14 |
| C6 (owner decision) | Fortnite UEFN and Verse Game Design for Teens | iD Tech and CodeWizardsHQ sell it; Fortnite is rated for teens, so 13+ only | 13-17 |

## 6. Visibility in ChatGPT, Claude, Gemini, Perplexity and Copilot (top priority)

1. **Answer capsule first**: the first 60 words of every page answer the page's question in full, with our name, format, ages and the course.
2. **Quotable units**: one data table or comparison table with stated criteria per page; numbered steps for how-to pages; exact dates, rules and limits from the primary source with the source named in the sentence.
3. **Structured data**: Course and FAQPage on every page; HowTo where steps exist; Dataset on the three state-data pages; Organization facts from `scripts/brand-facts.json` only.
4. **Machine-readable twins**: `.md` twin for every page, every page listed in `llms.txt`, IndexNow ping on deploy (already a plugin), sitemaps updated.
5. **Reference pages first**: the three state-data pages, the competition calendar, the AP calculators and the comparison page are built early because engines cite reference content (Copilot: resources 37%, blog 35%).
6. **Measurement**: a fixed 40-prompt US set (Appendix B) run in ChatGPT, Gemini, Google AI Mode, Perplexity and Copilot before Phase 2 and again 4 and 8 weeks after each push; results appended to `ai-engine-visibility.md`. Claude has no automation route, so it is run by hand when the owner wants.
7. **Off-site** (owner's call, not built here): real reviews and mentions on sites engines read (Google reviews, Reddit, school and parent forums) move these answers more than any page can.

## 7. Build pipeline and gates

- Reuse the AU pipeline: `content/us/<slug>.js` per page, the `scripts/nl` renderer parameterised for the US market (USD, US spelling, grades, US time zones), `shipbatch.sh`-style ship with one commit per page.
- Per page gates: `verify-cluster-pages.js`, `check-cluster-uniqueness.js`, `dcol.js` required mentions against the full dossier, banned-text scan, `pricing:verify`, `verify:sitemap`, `verify:hreflang`, render check on the local server (port 3001) at desktop and 390px, rendered text read back.
- Never `git add -A`; shared files (`_redirects`, `netlify.toml`, `sitemap.xml`, `llms.txt`) staged by explicit path; `node --check` and run shared scripts before each ship.
- **Preview gate**: the 3 Phase 1 pilots are built, shown to the owner, and nothing else ships until the owner says yes.

## 8. Phases

| Phase | What | Rows |
|---|---|---|
| 0 | Strengthen existing US-relevant pages and blog posts (section 2) | about 20 edits |
| 1 | Pilots: Roblox how-to, Congressional App Challenge guide, North Carolina state page | 3 |
| 2 | Searches we lose: game coding, grade bands, AI for middle and high school, summer, internships, subject doors | 32 |
| 3 | US-only: competitions, AP calculators and guides, state data pages, school AI guidance, comparisons, Common Core | 27 |
| 4 | 45 new state pages + DC, rebuild CA, NY, TX, GA, update the US hub | 51 |
| 5 | Metros | 25 |
| C | Courses C1 to C5 (C6 if the owner says yes), built alongside the phase that links to them | 5-6 |

Total: 138 page rows (133 new URLs, 4 state rebuilds, 1 hub update) plus 5 or 6 courses. Every slug was checked on 2026-10-17 against `src/pages`, blog data, `_redirects`, `netlify.toml` and every sitemap: all free. Dropped as twins of existing blog posts: `coding-for-5-year-olds`, `coding-for-6-year-olds`, `coding-for-7-year-olds`, `usaco-bronze-problems-explained`.

## 9. Owner decisions

1. C6 Fortnite/UEFN course: yes or no.
2. Comparison pages name competitors (CodeWizardsHQ, Create & Learn, iD Tech, CodaKid, Coding with Kids) as the existing `modern-age-coders-vs-*` pages do: keep, or criteria-only.
3. If Code.org data reuse is not allowed, state pages run on state and College Board data only (default, no action needed).

## Appendix A: page list

| # | Phase | Family | Slug | Searches it targets |
|---|---|---|---|---|
| 1 | 1 | P1 | `how-to-make-a-roblox-game` | how to make a roblox game / on chromebook / ipad / with ai / learn roblox studio for kids |
| 2 | 1 | P1 | `congressional-app-challenge-guide` | congressional app challenge / rules / deadline / past winners / prize |
| 3 | 1 | P1 | `coding-and-ai-classes-in-north-carolina` | computer science graduation requirement nc / coding classes north carolina |
| 4 | 2 | game | `lua-for-kids` | lua for kids / learn lua for kids / luau / lua programming for kids |
| 5 | 2 | game | `how-to-make-a-video-game-for-kids` | how to make a video game for kids / easy / free / when you're a kid |
| 6 | 2 | game | `godot-for-kids-and-teens` | godot for kids / godot course for kids / learn to code with godot |
| 7 | 2 | game | `unity-for-teens` | unity for teens / unity game development for kids / unity game engine for kids |
| 8 | 2 | game | `game-design-classes-for-teens` | game design for teens (2.7K impr @34) / game design courses for teens / programs |
| 9 | 2 | game | `video-game-coding-classes-for-kids` | video game coding classes for kids / online video game coding for kids |
| 10 | 2 | game | `learn-to-code-minecraft-mods` | learn to code minecraft mods / minecraft modding java for kids |
| 11 | 2 | game | `python-games-for-kids` | python games for kids / python game development / pygame |
| 12 | 2 | game | `how-to-make-a-3d-game-for-kids` | how to make a 3d video game for kids |
| 13 | 2 | game | `fortnite-uefn-game-design-for-teens` | fortnite game design / unreal editor for fortnite / verse (13+) |
| 14 | 2 | age | `coding-classes-for-elementary-students` | coding classes for 3rd/5th graders / coding for elementary students |
| 15 | 2 | age | `coding-classes-for-middle-school-students` | coding classes for middle school / coding for middle schoolers |
| 16 | 2 | age | `coding-classes-for-high-school-students` | coding classes for high schoolers / computer science for high school |
| 17 | 2 | age | `coding-milestones-by-age` | coding milestones for 8-10 year olds (3.1K @8) |
| 18 | 2 | ai | `ai-courses-for-high-school-students` | ai courses for high school students / best / online / free |
| 19 | 2 | ai | `ai-classes-for-middle-school-students` | ai classes / courses for middle school students |
| 20 | 2 | ai | `ai-projects-for-middle-school-students` | ai projects for middle school students |
| 21 | 2 | ai | `ai-research-programs-for-high-school-students` | ai research programs / projects for high school students |
| 22 | 2 | ai | `ai-certification-for-high-school-students` | ai certification for high school students / teens |
| 23 | 2 | ai | `ai-summer-programs-for-high-school-students` | ai summer programs for high school students |
| 24 | 2 | ai | `ai-literacy-for-elementary-students` | ai literacy for elementary students |
| 25 | 2 | summer | `computer-science-summer-programs-for-high-school-students` | cs summer programs for high school students (free / 2026 / 2027) |
| 26 | 2 | summer | `coding-summer-camp-for-middle-schoolers` | coding summer camp for middle schoolers |
| 27 | 2 | summer | `game-design-summer-camp-for-teens` | game design camp for teens / video game design camp |
| 28 | 2 | summer | `free-coding-programs-for-high-school-students` | free coding programs / bootcamps for teens |
| 29 | 2 | college | `computer-science-internships-for-high-school-students` | cs internships for high school students |
| 30 | 2 | subj | `c-plus-plus-for-kids` | c++ for kids / c++ coding for kids / online |
| 31 | 2 | subj | `javascript-for-kids` | javascript for kids / coding for kids javascript |
| 32 | 2 | subj | `app-inventor-for-kids` | app inventor / mit app inventor for kids / app development for kids |
| 33 | 2 | subj | `cybersecurity-classes-for-teens` | cybersecurity for teens / classes / courses |
| 34 | 2 | subj | `homeschool-computer-science-high-school-credit` | computer science high school homeschool curriculum / credit |
| 35 | 2 | subj | `coding-bootcamp-for-teens` | coding bootcamp for teens / kids |
| 36 | 3 | comp | `presidential-ai-challenge-guide` | presidential ai challenge / deadline / guidebook / winners |
| 37 | 3 | comp | `acsl-competition-preparation` | acsl competition / rules / preparation / dates |
| 38 | 3 | comp | `picoctf-for-beginners` | picoctf / primer / gym / challenges |
| 39 | 3 | comp | `cyberpatriot-preparation` | cyberpatriot competition / practice images / schedule |
| 40 | 3 | comp | `technovation-girls-guide` | technovation girls |
| 41 | 3 | comp | `coding-competitions-for-high-school-students` | coding / programming / cs competitions for high school students |
| 42 | 3 | comp | `coding-competitions-for-middle-school-students` | coding competitions for middle school students |
| 43 | 3 | comp | `machine-learning-competitions-for-high-school-students` | ml competitions for high school students |
| 44 | 3 | comp | `math-competitions-for-middle-school-students` | math competition for middle school / mathcounts amc 8 kangaroo |
| 45 | 3 | comp | `us-coding-math-and-ai-competitions-calendar` | competition calendar (citable) |
| 46 | 3 | ap | `ap-computer-science-a-score-calculator` | ap computer science a score calculator / grade calculator |
| 47 | 3 | ap | `ap-csp-score-calculator` | ap computer science principles score calculator |
| 48 | 3 | ap | `does-ap-computer-science-give-college-credit` | does ap computer science give college credit / csp credit / math credit |
| 49 | 3 | ap | `ap-computer-science-a-practice-questions` | ap computer science a practice exam / questions |
| 50 | 3 | ap | `ap-csp-create-performance-task-guide` | ap csp create task / digital portfolio |
| 51 | 3 | ap | `is-ap-computer-science-hard` | ap computer science difficulty / score distribution |
| 52 | 3 | data | `computer-science-graduation-requirements-by-state` | computer science graduation requirements / high school |
| 53 | 3 | data | `computer-science-standards-by-state` | computer science standards <state> / k-12 |
| 54 | 3 | data | `high-school-computer-science-access-by-state` | share of high schools offering CS by state (Code.org data) |
| 55 | 3 | data | `ai-guidance-for-schools-by-state` | school AI rules / state AI guidance |
| 56 | 3 | cmp | `codewizardshq-alternative` | codewizardshq / reviews |
| 57 | 3 | cmp | `create-and-learn-alternative` | create and learn / reviews |
| 58 | 3 | cmp | `id-tech-alternative` | id tech / id tech camp |
| 59 | 3 | cmp | `codakid-alternative` | codakid vs tynker |
| 60 | 3 | cmp | `coding-with-kids-alternative` | coding with kids reviews |
| 61 | 3 | cmp | `best-online-coding-classes-for-kids-usa-compared` | best live online coding classes for kids in the US (AI prompt P05) |
| 62 | 3 | math | `common-core-math-vs-traditional-math` | common core math vs traditional math / old math |
| 63 | 4 | state | `coding-and-ai-classes-in-alabama` | coding classes alabama / cs graduation requirement / cs standards alabama |
| 64 | 4 | state | `coding-and-ai-classes-in-alaska` | coding classes alaska / cs graduation requirement / cs standards alaska |
| 65 | 4 | state | `coding-and-ai-classes-in-arizona` | coding classes arizona / cs graduation requirement / cs standards arizona |
| 66 | 4 | state | `coding-and-ai-classes-in-arkansas` | coding classes arkansas / cs graduation requirement / cs standards arkansas |
| 67 | 4 | state | `coding-and-ai-classes-in-colorado` | coding classes colorado / cs graduation requirement / cs standards colorado |
| 68 | 4 | state | `coding-and-ai-classes-in-connecticut` | coding classes connecticut / cs graduation requirement / cs standards connecticut |
| 69 | 4 | state | `coding-and-ai-classes-in-delaware` | coding classes delaware / cs graduation requirement / cs standards delaware |
| 70 | 4 | state | `coding-and-ai-classes-in-florida` | coding classes florida / cs graduation requirement / cs standards florida |
| 71 | 4 | state | `coding-and-ai-classes-in-hawaii` | coding classes hawaii / cs graduation requirement / cs standards hawaii |
| 72 | 4 | state | `coding-and-ai-classes-in-idaho` | coding classes idaho / cs graduation requirement / cs standards idaho |
| 73 | 4 | state | `coding-and-ai-classes-in-illinois` | coding classes illinois / cs graduation requirement / cs standards illinois |
| 74 | 4 | state | `coding-and-ai-classes-in-indiana` | coding classes indiana / cs graduation requirement / cs standards indiana |
| 75 | 4 | state | `coding-and-ai-classes-in-iowa` | coding classes iowa / cs graduation requirement / cs standards iowa |
| 76 | 4 | state | `coding-and-ai-classes-in-kansas` | coding classes kansas / cs graduation requirement / cs standards kansas |
| 77 | 4 | state | `coding-and-ai-classes-in-kentucky` | coding classes kentucky / cs graduation requirement / cs standards kentucky |
| 78 | 4 | state | `coding-and-ai-classes-in-louisiana` | coding classes louisiana / cs graduation requirement / cs standards louisiana |
| 79 | 4 | state | `coding-and-ai-classes-in-maine` | coding classes maine / cs graduation requirement / cs standards maine |
| 80 | 4 | state | `coding-and-ai-classes-in-maryland` | coding classes maryland / cs graduation requirement / cs standards maryland |
| 81 | 4 | state | `coding-and-ai-classes-in-massachusetts` | coding classes massachusetts / cs graduation requirement / cs standards massachusetts |
| 82 | 4 | state | `coding-and-ai-classes-in-michigan` | coding classes michigan / cs graduation requirement / cs standards michigan |
| 83 | 4 | state | `coding-and-ai-classes-in-minnesota` | coding classes minnesota / cs graduation requirement / cs standards minnesota |
| 84 | 4 | state | `coding-and-ai-classes-in-mississippi` | coding classes mississippi / cs graduation requirement / cs standards mississippi |
| 85 | 4 | state | `coding-and-ai-classes-in-missouri` | coding classes missouri / cs graduation requirement / cs standards missouri |
| 86 | 4 | state | `coding-and-ai-classes-in-montana` | coding classes montana / cs graduation requirement / cs standards montana |
| 87 | 4 | state | `coding-and-ai-classes-in-nebraska` | coding classes nebraska / cs graduation requirement / cs standards nebraska |
| 88 | 4 | state | `coding-and-ai-classes-in-nevada` | coding classes nevada / cs graduation requirement / cs standards nevada |
| 89 | 4 | state | `coding-and-ai-classes-in-new-hampshire` | coding classes new hampshire / cs graduation requirement / cs standards new hampshire |
| 90 | 4 | state | `coding-and-ai-classes-in-new-jersey` | coding classes new jersey / cs graduation requirement / cs standards new jersey |
| 91 | 4 | state | `coding-and-ai-classes-in-new-mexico` | coding classes new mexico / cs graduation requirement / cs standards new mexico |
| 92 | 4 | state | `coding-and-ai-classes-in-north-dakota` | coding classes north dakota / cs graduation requirement / cs standards north dakota |
| 93 | 4 | state | `coding-and-ai-classes-in-ohio` | coding classes ohio / cs graduation requirement / cs standards ohio |
| 94 | 4 | state | `coding-and-ai-classes-in-oklahoma` | coding classes oklahoma / cs graduation requirement / cs standards oklahoma |
| 95 | 4 | state | `coding-and-ai-classes-in-oregon` | coding classes oregon / cs graduation requirement / cs standards oregon |
| 96 | 4 | state | `coding-and-ai-classes-in-pennsylvania` | coding classes pennsylvania / cs graduation requirement / cs standards pennsylvania |
| 97 | 4 | state | `coding-and-ai-classes-in-rhode-island` | coding classes rhode island / cs graduation requirement / cs standards rhode island |
| 98 | 4 | state | `coding-and-ai-classes-in-south-carolina` | coding classes south carolina / cs graduation requirement / cs standards south carolina |
| 99 | 4 | state | `coding-and-ai-classes-in-south-dakota` | coding classes south dakota / cs graduation requirement / cs standards south dakota |
| 100 | 4 | state | `coding-and-ai-classes-in-tennessee` | coding classes tennessee / cs graduation requirement / cs standards tennessee |
| 101 | 4 | state | `coding-and-ai-classes-in-utah` | coding classes utah / cs graduation requirement / cs standards utah |
| 102 | 4 | state | `coding-and-ai-classes-in-vermont` | coding classes vermont / cs graduation requirement / cs standards vermont |
| 103 | 4 | state | `coding-and-ai-classes-in-virginia` | coding classes virginia / cs graduation requirement / cs standards virginia |
| 104 | 4 | state | `coding-and-ai-classes-in-washington-state` | coding classes washington state / cs graduation requirement / cs standards washington state |
| 105 | 4 | state | `coding-and-ai-classes-in-west-virginia` | coding classes west virginia / cs graduation requirement / cs standards west virginia |
| 106 | 4 | state | `coding-and-ai-classes-in-wisconsin` | coding classes wisconsin / cs graduation requirement / cs standards wisconsin |
| 107 | 4 | state | `coding-and-ai-classes-in-wyoming` | coding classes wyoming / cs graduation requirement / cs standards wyoming |
| 108 | 4 | state | `coding-and-ai-classes-in-washington-dc` | coding classes washington dc / cs graduation requirement / cs standards washington dc |
| 109 | 4 | state-rebuild | `coding-classes-in-california` | REBUILD existing URL |
| 110 | 4 | state-rebuild | `coding-classes-in-new-york` | REBUILD existing URL |
| 111 | 4 | state-rebuild | `coding-classes-in-texas` | REBUILD existing URL |
| 112 | 4 | state-rebuild | `coding-classes-in-georgia` | REBUILD existing URL |
| 113 | 4 | hub | `coding-classes-in-united-states` | REBUILD/UPDATE hub, link down to every US page |
| 114 | 5 | metro | `best-coding-classes-for-kids-in-new-york-city` | coding classes for kids new york city / ai classes for kids new york city / coding summer camp new york city |
| 115 | 5 | metro | `online-coding-and-ai-classes-in-los-angeles` | coding classes for kids los angeles / ai classes for kids los angeles / coding summer camp los angeles |
| 116 | 5 | metro | `ai-and-python-classes-for-teens-in-san-francisco-bay-area` | coding classes for kids san francisco bay area / ai classes for kids san francisco bay area / coding summer camp san francisco bay area |
| 117 | 5 | metro | `best-coding-classes-for-kids-in-san-jose` | coding classes for kids san jose / ai classes for kids san jose / coding summer camp san jose |
| 118 | 5 | metro | `online-coding-and-ai-classes-in-san-diego` | coding classes for kids san diego / ai classes for kids san diego / coding summer camp san diego |
| 119 | 5 | metro | `ai-and-python-classes-for-teens-in-orange-county-california` | coding classes for kids orange county california / ai classes for kids orange county california / coding summer camp orange county california |
| 120 | 5 | metro | `best-coding-classes-for-kids-in-houston` | coding classes for kids houston / ai classes for kids houston / coding summer camp houston |
| 121 | 5 | metro | `online-coding-and-ai-classes-in-dallas-fort-worth` | coding classes for kids dallas fort worth / ai classes for kids dallas fort worth / coding summer camp dallas fort worth |
| 122 | 5 | metro | `ai-and-python-classes-for-teens-in-austin-texas` | coding classes for kids austin texas / ai classes for kids austin texas / coding summer camp austin texas |
| 123 | 5 | metro | `best-coding-classes-for-kids-in-chicago` | coding classes for kids chicago / ai classes for kids chicago / coding summer camp chicago |
| 124 | 5 | metro | `online-coding-and-ai-classes-in-seattle` | coding classes for kids seattle / ai classes for kids seattle / coding summer camp seattle |
| 125 | 5 | metro | `ai-and-python-classes-for-teens-in-boston` | coding classes for kids boston / ai classes for kids boston / coding summer camp boston |
| 126 | 5 | metro | `best-coding-classes-for-kids-in-philadelphia` | coding classes for kids philadelphia / ai classes for kids philadelphia / coding summer camp philadelphia |
| 127 | 5 | metro | `online-coding-and-ai-classes-in-atlanta` | coding classes for kids atlanta / ai classes for kids atlanta / coding summer camp atlanta |
| 128 | 5 | metro | `ai-and-python-classes-for-teens-in-miami` | coding classes for kids miami / ai classes for kids miami / coding summer camp miami |
| 129 | 5 | metro | `best-coding-classes-for-kids-in-orlando` | coding classes for kids orlando / ai classes for kids orlando / coding summer camp orlando |
| 130 | 5 | metro | `online-coding-and-ai-classes-in-phoenix` | coding classes for kids phoenix / ai classes for kids phoenix / coding summer camp phoenix |
| 131 | 5 | metro | `ai-and-python-classes-for-teens-in-denver` | coding classes for kids denver / ai classes for kids denver / coding summer camp denver |
| 132 | 5 | metro | `best-coding-classes-for-kids-in-charlotte` | coding classes for kids charlotte / ai classes for kids charlotte / coding summer camp charlotte |
| 133 | 5 | metro | `online-coding-and-ai-classes-in-raleigh-durham` | coding classes for kids raleigh durham / ai classes for kids raleigh durham / coding summer camp raleigh durham |
| 134 | 5 | metro | `ai-and-python-classes-for-teens-in-northern-virginia` | coding classes for kids northern virginia / ai classes for kids northern virginia / coding summer camp northern virginia |
| 135 | 5 | metro | `best-coding-classes-for-kids-in-long-island` | coding classes for kids long island / ai classes for kids long island / coding summer camp long island |
| 136 | 5 | metro | `online-coding-and-ai-classes-in-plano-and-frisco` | coding classes for kids plano and frisco / ai classes for kids plano and frisco / coding summer camp plano and frisco |
| 137 | 5 | metro | `ai-and-python-classes-for-teens-in-portland-oregon` | coding classes for kids portland oregon / ai classes for kids portland oregon / coding summer camp portland oregon |
| 138 | 5 | metro | `best-coding-classes-for-kids-in-minneapolis` | coding classes for kids minneapolis / ai classes for kids minneapolis / coding summer camp minneapolis |

## Appendix B: US AI-answer prompt set (40, fixed wording)

| # | Prompt |
|---|---|
| U01 | Best live online coding classes for kids in the US, not pre-recorded videos |
| U02 | Where can my 10 year old learn to make Roblox games with a real teacher online? |
| U03 | How do I make a Roblox game on a Chromebook? |
| U04 | Is Godot good for kids learning game development? Any live classes? |
| U05 | Best game design classes for teens online in the US |
| U06 | What coding language should a 12 year old learn first? |
| U07 | Online AI course for high school students with a live instructor |
| U08 | AI projects for middle school students that teach real skills |
| U09 | Are AI certifications worth it for high school students? |
| U10 | Best computer science summer programs for high school students online |
| U11 | How can my high schooler get a computer science internship? |
| U12 | How does the Congressional App Challenge work and how do students prepare? |
| U13 | What is the Presidential AI Challenge and who can enter? |
| U14 | How to prepare for the ACSL competition |
| U15 | How should a beginner start picoCTF? |
| U16 | Coding competitions for middle school students in the US |
| U17 | AP Computer Science A score calculator |
| U18 | Does AP Computer Science give college credit? |
| U19 | Is AP Computer Science A hard? |
| U20 | Which states require computer science to graduate high school? |
| U21 | What percentage of high schools offer computer science in Texas? |
| U22 | Computer science standards in California, explained for parents |
| U23 | Coding classes for kids in North Carolina, online, live |
| U24 | Best coding classes for kids in New York City |
| U25 | Coding classes for kids in the Bay Area, online options |
| U26 | Coding classes for kids in Houston |
| U27 | Online coding tutor for kids, how much does it cost per hour in the US? |
| U28 | Alternatives to CodeWizardsHQ |
| U29 | Create & Learn vs other live coding classes |
| U30 | iD Tech alternatives for year-round online classes |
| U31 | C++ classes for kids online |
| U32 | Cybersecurity classes for teens with a live teacher |
| U33 | MATHCOUNTS and AMC 8 prep online for middle schoolers |
| U34 | ACT math prep online with a tutor |
| U35 | Homeschool high school computer science credit, how do we do it? |
| U36 | Coding classes for elementary students, 3rd grade |
| U37 | Common Core math vs traditional math, what changed? |
| U38 | Vibe coding course for teenagers |
| U39 | Where can a teen learn to build AI agents in a live online class? |
| U40 | Is Modern Age Coders good for American students? |
