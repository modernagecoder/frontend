# Ireland Cluster: every county, city and district, and every way people search for it

Date: 2026-09-15
Status: PLAN, awaiting owner approval. No page has been built.
Related: [Netherlands cluster](2026-09-07-netherlands-cluster-design.md) (the method this copies, 131 pages shipped), [Netherlands plan](../plans/2026-09-07-netherlands-cluster.md) (the pipeline this reuses).

## 0. What the owner asked for, in their words

The standing country brief: "maximum pages ... a very amazing cluster covering each and every state, city, district and everything about [the country] one by one ... just like we have done with Oman ... courses section in the top ... very depth SEO rich content, no duplicate ... keyword research properly done ... focus on AI agents, AI building, AI, Python, Java, app, software ... target each and every age group ... each page has a unique vibe, each page brings traffic, each page helps convert high quality leads ... make a detailed plan how to proceed."

Plus, for Ireland first: "instead of writing coding class write best coding in some ... different types of slugs: best coding class online, best coding class in the world, learn how to think don't just try AI tools, learn how to train and think, problem solving skills, understand the code don't just copy paste."

This document turns both into a page list, a build order, the rules that keep every page unique, and the decisions only the owner can make.

## 1. What already exists (do not rebuild, do not collide)

Two Ireland pages are live and both stay. They become the two hubs; no competing hub is created.

| Page | System | Owns (never re-argue on a new page) |
|---|---|---|
| `/coding-classes-in-ireland` | `cp-ie` (hand-built) | The school pathway from primary through Junior Cycle, TY and Leaving Cert to TCD / UCD / UCC / DCU; "TY as the Leaving Cert advantage"; Irish CS course CAO thresholds ("the points buffer"); Silicon Docks employers; the "no CAO-points guarantees" promises block; the 45-minute session walkthrough. |
| `/ai-and-machine-learning-classes-in-ireland` | `ag-` | The data-centre electricity forecasting project; "the gap between prompting and modelling, measured in gigawatt hours"; the year Ireland started writing its own AI law; "Leaving Certificate Computer Science names machine learning. It has 180 hours for everything"; the 25 October 2026 clock change; the University of Galway MSc fee comparison. |

Global pages that overlap the new slug shapes; each Irish page links to them rather than duplicating them:

| Global page | Overlaps |
|---|---|
| `/best-coding-classes-online` ("Best Coding Classes for Kids in India and Worldwide") | best-online-coding-classes-ireland, best-coding-class-in-the-world |
| `/best-online-coding-classes-for-kids-2026` ("ranked honestly") | best-coding-classes-for-kids-ireland |
| `/how-to-think-like-a-programmer` ("deciding what must be true") | learn-to-think-not-just-use-ai-tools-ireland |
| `/how-to-train-machine-learning-models` | learn-to-train-ai-not-just-prompt-it-ireland |
| 131 India pages `/best-coding-class-in-<city>` | the slug pattern only; the Irish geo pages reuse the pattern, never the prose |

Every one of the 134 proposed slugs was checked on 2026-09-15 against `src/pages`, `_redirects`, `netlify.toml` and every sitemap: all free, and no existing page ends in an Irish place name.

The lead contract is proven on the live page: POST `/api/callback/request`, `countryCode: '+353'`, `countryIso: 'IE'`, `countryName: 'Ireland'`, phone placeholder `87 123 4567`. The `scripts/nl` renderers hardcode the Dutch contract (`+31`, `NL`, and `/api/contact/submit` on `cg-` pages), so the pipeline must be parameterised before page one (section 9).

## 2. Ireland, as a page structure

Ireland (the Republic; section 10 on Northern Ireland) has 26 counties, 31 local authorities and four provinces. Census 2022 (CSO) urban areas, research leads to re-verify at CSO before use: Dublin city and suburbs 1,263,219; Cork 222,526; Limerick 102,287; Galway 85,910; Waterford 60,079; then 49 towns above 10,000, from Drogheda (44,135) and Dundalk (43,112) down to Ratoath (10,077).

Where the customers are, as in the Netherlands, is not simply where the population is. Leads from CSO Census 2022 press statements (to re-verify at CSO): Indian citizens are the second-largest non-Irish group in Dublin City (10,308) and in Cork City (3,016), and Dún Laoghaire-Rathdown has 4,958. Add the tech-employer belts (Silicon Docks and Sandyford in Dublin, Intel's Leixlip campus and the Maynooth-Celbridge corridor, the medtech cluster in Galway, Cork's pharma and tech employers, Athlone), and the university towns. The phase order below puts those places first.

The layers, and a different slug shape for each (the owner's "different types of slugs"):

| Layer | Slug shape | Count | Depth floor | Job of the page |
|---|---|---|---|---|
| Cities | `best-coding-class-in-<city>` | 5 | 2,200 | The family that lives there: schools by name, Eircode area, commute, employers, what the place is known for. Dublin is also the hub for its areas. |
| Counties and Dublin local authorities | `coding-classes-in-county-<county>`, `coding-classes-in-fingal` | 26 | 1,800 | The spread: towns that will never get a URL, distances, the county's own schools and employers. |
| Provinces | `coding-and-ai-classes-in-<province>` | 4 | 1,800 | The county index for that province, plus what genuinely differs (Gaeltacht areas, the border counties, the Atlantic coast). Built last, kill-gated. |
| Districts | `coding-classes-in-<area>-dublin`, `-cork`, `-galway`, `-limerick` | 26 | 1,400 | One paragraph of national context, then only what is true of that area and false of its neighbours. The city suffix also separates Blackrock in Dublin from Blackrock in Cork. |
| Towns above 10,000 | `best-coding-class-in-<town>` | 49 | 2,200 | Close-up and human scale. Only if eight place-specific facts exist. |
| Doors (national, `ag-`) | eight shapes, section 3 | 24 | 3,000 (draft to 3,150+) | One thing to one audience, nationally. |

The **kill criterion is absolute**, as in the Netherlands: fewer than eight verifiable facts specific to that one place means no page, reported as skipped, and the place is named and covered inside its county page. "Leave nobody out" is met by the county pages, not by thin URLs.

## 3. The page list (134)

### Phase 1: the preview pages (6). Build, show on localhost, get a visible yes, then sweep.

One page of each new shape, because the shapes are new and the owner has rejected a sweep on first sight before (2026-09-05).

| # | Slug | Shape | Spine |
|---|---|---|---|
| 1 | `best-coding-class-in-dublin` | best + city, hub for 20 areas | Dublin City's Indian community, Silicon Docks, the Dublin postal districts as the map every parent already uses. Reads as a map that hands off to the areas. |
| 2 | `best-online-coding-classes-ireland` | best, national | What "best" should mean for an Irish family (live teacher, understanding over copying, fits Junior Cycle and Leaving Cert, Irish evening slots), then our evidence. A criteria page, not a claim. |
| 3 | `best-coding-class-in-the-world` | best, global | The test any coding class should pass, anywhere, with ours answered openly. The only non-Irish URL; linked from the Irish cluster and the global best pages. |
| 4 | `understand-the-code-dont-copy-paste-ireland` | think | Leaving Cert Computer Science coursework has to be the student's own work (SEC rules on authenticity and AI use, to read at primary). Copy-pasting fails the exam's own test, not just ours. |
| 5 | `leaving-cert-computer-science-grinds-online` | Irish vernacular | "Grinds" is the Irish word for private tuition. Live grinds that teach the reasoning the course and exam test; no grade or points promises. |
| 6 | `coding-classes-in-dun-laoghaire-rathdown` | county / local authority | The Dublin local authority with 4,958 Indian citizens (lead), Sandyford and Leopardstown employers, the DART line. |

Preview gate after page 6: the owner opens all six at 1280 and 390 and says yes or what to change. Nothing in Phases 2 to 7 starts until then.

### Phase 2: the doors (20 more, `ag-` system)

The axis the owner names first: AI agents, AI building, Python, Java, app, software, every age.

- **Best (4 more):** `best-coding-classes-for-kids-ireland` (primary school, First to Sixth Class, from age 6) · `best-coding-classes-for-teens-ireland` (Junior Cycle, TY, Senior Cycle) · `best-coding-classes-for-adults-ireland` (career changers; the honest comparison with free Springboard+ and SOLAS eCollege routes) · `best-python-classes-online-ireland` (the language of Leaving Cert Computer Science, to verify at NCCA).
- **Think (3 more):** `learn-to-think-not-just-use-ai-tools-ireland` (the Junior Cycle Coding short course aims, verify at curriculumonline.ie) · `problem-solving-skills-through-coding-ireland` (problem solving in the Irish maths curriculum, coding and maths together, which the brand also teaches) · `learn-to-train-ai-not-just-prompt-it-ireland` (training a model on Met Éireann or CSO data; must not repeat the AI page's data-centre project or its prompting-versus-modelling argument).
- **Irish school and community (4 more):** `junior-cycle-coding-short-course-help` · `transition-year-coding-course-ireland` · `online-coding-summer-course-ireland` (the long Irish summer; the market DCU ComputeTY, CTYI and the camp providers serve) · `after-coderdojo-next-step-coding-ireland` (CoderDojo began in Cork; for the child who has outgrown a free club; factual, no affiliation implied).
- **Age and career (3):** `coding-for-college-students-ireland` (TCD, UCD, UCC, University of Galway, UL, DCU, Maynooth, the TUs) · `ai-agents-course-for-professionals-ireland` (Copilot Studio 1-on-1 tier, Codex and Claude Code; the Irish tech worker) · `ai-agents-course-for-students-ireland`.
- **Language and track (6):** `java-classes-ireland` · `app-development-course-ireland` (React Native, Flutter, Kotlin, Swift) · `full-stack-software-development-course-ireland` · `data-science-course-ireland` · `build-real-ai-projects-ireland` (CSO PxStat, Met Éireann, data.gov.ie, TFI and Irish Rail open data) · `ai-and-python-academy-for-girls-ireland` (CodePlus at Trinity and Teen-Turn as context; same hard rules as Oman and the Netherlands: no claim girls learn differently, no girls-only batches).

### Phase 3: the other four cities

`best-coding-class-in-cork` (hub for 4 areas) · `best-coding-class-in-limerick` · `best-coding-class-in-galway` · `best-coding-class-in-waterford`.

### Phase 4: counties and Dublin local authorities (25 more)

`coding-classes-in-county-<x>` for carlow, cavan, clare, donegal, kerry, kildare, kilkenny, laois, leitrim, longford, louth, mayo, meath, monaghan, offaly, roscommon, sligo, tipperary, westmeath, wexford, wicklow, cork, galway; plus `coding-classes-in-fingal` and `coding-classes-in-south-dublin`. Limerick and Waterford have joint city-and-county councils, so their city pages cover the county and no county URL is made. Money counties first: Kildare, Meath, Wicklow, Fingal, South Dublin, County Cork, County Galway, Westmeath.

### Phase 5: provinces (4, kill-gated, lowest search demand)

`coding-and-ai-classes-in-leinster`, `-munster`, `-connacht`, `-ulster` (the three Ulster counties in the Republic only, said plainly on the page).

### Phase 6: districts (26, kill-gated)

- Dublin (20): blanchardstown, castleknock, lucan, tallaght, clondalkin, rathfarnham, dundrum, sandyford, dun-laoghaire, blackrock, stillorgan, rathmines, drumcondra, glasnevin, clontarf, howth, finglas, ballymun, crumlin, terenure. Each page names its postal district (Blanchardstown is Dublin 15).
- Cork (4): ballincollig, douglas, bishopstown, glanmire. Galway (1): knocknacarra. Limerick (1): castletroy (the University of Limerick side of the city).
- Money areas first: Blanchardstown, Castleknock, Lucan, Sandyford, Dundrum, Ballincollig, Douglas, Castletroy. The sound-alike pairs (Dundrum and Stillorgan, Drumcondra and Glasnevin, Douglas and Bishopstown) are diffed by hand before handover.

### Phase 7: towns above 10,000 (49, kill-gated)

In money order first, then population: swords, maynooth, leixlip, celbridge, malahide, naas, athlone, greystones, bray, ashbourne, ratoath, carrigaline, then drogheda, dundalk, navan, ennis, carlow, kilkenny, tralee, newbridge, balbriggan, portlaoise, mullingar, letterkenny, wexford, sligo, clonmel, laytown-bettystown, tullamore, killarney, cobh, midleton, mallow, arklow, castlebar, wicklow, enniscorthy, cavan, gorey, tramore, athy, longford, rush, portmarnock, skerries, ballina, kildare, shannon, dungarvan. Each proposed with its eight facts before it is written.

**Total: 6 + 20 + 4 + 25 + 4 + 26 + 49 = 134 new pages**, all under the kill criterion. A higher number is only reachable with pages that have nothing in them, and those cost rankings for the rest (the site already carries about 400 "crawled, not indexed" URLs, mostly city clusters).

## 4. Every age group, on every page

Owner's range 6 to 67; course strip first on every page, chosen per page, never pasted (same catalogue as the Netherlands, section 4 of that spec: 122 courses, URL `/courses/<meta.slug>`).

- Place pages: picks spanning the ages, weighted by the place (Dublin 15 and Sandyford lean kids and teens of tech families; Castletroy, Maynooth and Galway lean college; commuter towns lean teens).
- Irish stages, used as parents use them: primary (Junior Infants to Sixth Class), Junior Cycle (First to Third Year), Transition Year, Senior Cycle (Fifth and Sixth Year), Leaving Certificate, LCA and LCVP, CAO, third level.
- Doors: one audience each (kids, teens, college, adults, professionals), or the kids, teens and college versions of one language side by side.
- Copilot Studio courses carry `meta.one_on_one_only` and are described as private-rate wherever listed.

## 5. Keyword research: the method, and what the SERPs showed on 2026-09-15

No volume tool is available here, so each page's research (as in the Netherlands) records what parents in that place call it, the school-stage words, and what the ranking pages put in their titles. Search Console data for the two live Ireland pages would replace guesswork and should be shared before Phase 2 if the owner has it. The search tool used is US-located, so these readings are indicative.

| Query family | Who ranks | What it means for us |
|---|---|---|
| best coding classes online Ireland | Provider pages, no listicles: Codingal (programmatic Irish location pages, e.g. Galway, Blanchardstown), The Academy of Code, KidsComp, The Code Lab | Winnable with deep, genuinely local pages. Never name or rank them on our pages. |
| coding classes for kids Dublin / Cork / Galway | KidsComp (in-person centres, per-town pages incl. Tallaght, Lucan), Bricks 4 Kidz, Ripcoder, Coding Ireland (schools) | In-person rivals: our honest line is live online, one teacher, from home. |
| best online coding class in the world | Listicles of self-paced platforms (Boot.dev, BitDegree, learn.org, The Muse, Quora) | Hard. A criteria page with a live teacher and "understanding over copying" is the only angle that differs. |
| learn to code, understand not copy-paste, AI | Blogs, Medium, Pluralsight, arXiv studies | Informational and thinly commercial: the think pages can rank. |
| Leaving Cert Computer Science grinds | Tuition Farm (pre-recorded), The Tuition Centre, Educating Éire, GrindsWorld | Live and reasoning-first is the difference. No grade promises. |
| AI course for teens Ireland | Coding Ireland, UCC AI Academy (free, self-paced), Teens in AI, Microsoft Dream Space, Oide (teachers) | Live, project-built AI for teens is open. |
| AI agents course Ireland | NobleProg, The Knowledge Academy, encertify (corporate) | Our 1-on-1 agents tier for individuals is a distinct offer. |
| software, Python, Java course Ireland (adults) | Springboard+ (government-funded), SOLAS eCollege, UCD Professional Academy, TU Dublin, ATU, ICT Skillnet, Fitzwilliam Institute, Dorset College, Code Institute | We do not compete with free funded diplomas on price; we sell a live teacher, flexible hours and depth, and say so. |
| coding summer camp Ireland | DCU ComputeTY, CTYI, WhizzKids, The Academy of Code camps | An online summer course for families outside Dublin or away for the summer. |
| coding for girls Ireland | CodePlus (Trinity), Teen-Turn, The Code Lab | Context for the girls door; we complement, never claim affiliation. |

**Three keyword layers per page**, as in the Netherlands: the head term once each in title, H1, capsule, canonical and `.md` twin; a named AI-and-thinking H2 on every page, rotated so no two pages share it (the owner's themes become the rotation: learn to think, understand don't copy, train don't just prompt, problem solving); and the local long tail from real schools, Eircode areas and neighbourhoods.

**Irish vocabulary, used because it is accurate:** grinds, Junior Cycle, TY, Leaving Cert, CAO, points, LCA, LCVP, Gaelscoil, Gaeltacht, Educate Together, DEIS, Eircode, mid-term break, CoderDojo.

**One trap unique to Ireland:** "IST" means Irish Standard Time here and India Standard Time to our teachers. No page ever writes IST unqualified; pages say "Irish time" and "India time". The gap is five and a half hours in winter and four and a half in summer.

## 6. How "best" is handled

The owner wants "best" in the slugs. A page cannot prove "best in the world", and the site's rules already forbid unsupported claims, so:

1. The superlative lives in the slug, the `<title>` and the meta description, as on the 131 India pages (`Best Coding Classes in Delhi | Modern Age Coders`, H1 `Coding classes in Delhi`).
2. Geo "best" pages keep the plain keyword H1 (`Coding classes in Cork`), the owner's short-H1 rule.
3. "Best" doors use the phrase as a topic H1 (`Best online coding classes in Ireland`) and spend the page defining what best should mean, then answering each criterion with evidence: 4.9 from 547 Google reviews, 10,000+ students, teaching since 2020, live classes, real student projects.
4. No named competitor is ranked, compared or disparaged. Public programmes (CoderDojo, CodePlus, ComputeTY, Springboard+) may be referenced factually.
5. No `AggregateRating`, no fabricated review, no "Premium".

## 7. Uniqueness: how 134 pages stay 134 different pages

The Netherlands machinery, unchanged: one content module and dossier per page (8+ `requiredMentions` present on the page and absent from every other dossier), one distinct data-reasoning fault per page checked free of every existing dossier, chrome-adjacent prose written fresh on every page, seven-word shingles under 6 percent against every sibling (fail at 12), and every hard number attributed to a named source and date in the sentence.

Lessons from the Netherlands build, applied from page one:

- Doors landed 70 to 110 words under the 3,000 floor five times: draft them to 3,150+.
- Almost all overlap came from chrome (the cost FAQ, "what happens after the form", start lede, read-first links, fees lede, the price sentence in the capsule, the roadmap sentence, the WhatsApp note, the time-zone lede): each is written fresh per page.
- `mustMention` is literal and case-sensitive against rendered text.
- The uniqueness incumbents for the doors include the two live Ireland pages and the four overlapping global pages in section 1.

Irish open data for the per-page data projects (each trap checked free before use): CSO PxStat and Census small areas, Met Éireann station data, TFI and Irish Rail open data, Dublin Bikes, the SEAI BER register, the Property Price Register, data.gov.ie. EirGrid and data-centre electricity belong to the live AI page and are not reused.

## 8. Design and conversion

- Place pages on `cg-` (`coding-global.css`), doors on `ag-` (`ai-global.css`), exactly as in the Netherlands. Each page has a solved accent (4.5:1 on all three paper tints, separated from the pages it links to) and a scoped personality block.
- A detail only Ireland has, used as content on every place page: the Eircode routing key (D15, T12, H91, V94 and so on), alongside the postal district for Dublin areas.
- Course cards with real thumbnails are the first section; the rendered audit runs at 1280 and 390 on every page.
- Four contact touchpoints plus the sticky bar; WhatsApp prefill names the page's place; `attribution.formPage` is the page's own path, so the admin panel shows which pages produce leads.
- The +91 number is presented as Indian. No Irish office, address or phone; no `LocalBusiness`. Schema is `Service` with an `areaServed` chain (area in city in county in Ireland).
- USD only: group USD 100, one to one USD 150, first lesson free. Nothing about VAT or tax on new pages.
- No em dashes, no emoji, no gradients, no second currency.

## 9. Toolchain and build steps

**Task 0: pre-flight (once, before page 1).**

1. Parameterise the pipeline. Either generalise `scripts/nl` into a market-agnostic `scripts/cluster` driven by the module's `market` object, or fork it to `scripts/ie`. Every hardcoded value moves to the market config: content directory, lead endpoint and payload for each renderer (`+353`, `IE`, `Ireland`, `/api/callback/request`), phone placeholder and digit rule, the time-zone prose (no hardcoded CET), the tracker file and the commit prefix `IE cluster:`. Grep both renderers for `Netherlands`, `NL`, `+31`, `CET` and `contact/submit` until nothing is left.
2. Register the new slug shapes in `verify-cluster-pages.js` and `check-cluster-uniqueness.js` by explicit Irish slug, never by a `best-coding-class-in-` wildcard, which would sweep the 131 India pages into the Irish gates.
3. Send one test lead from a local build (name "TEST DELETE ME IE") and confirm it lands in the admin panel as Ireland, then delete it.
4. Create `IRELAND-PROGRESS.md` (queue, done table with hashes, skipped, open issues). Rewrite the session helpers (the finisher and the link-down scripts) and check them into `scripts/`, since the Netherlands ones lived in a scratchpad and are gone.

**Per page (Phases 1 to 7), unchanged from the Netherlands:** research eight place facts at primary sources (CSO, the council, the school's own site, NCCA, SEC, curriculumonline.ie) or skip; read the collision list; write the module fresh; build; gate (rendered audit, uniqueness, verify); link down from the hub (a new "Ireland, place by place" and "Ireland, by topic" block on `/coding-classes-in-ireland`, and a door index on the AI Ireland page) and from the parent city or county; record in the tracker; one commit per page, pushed.

## 10. Decisions only the owner can make

The plan proceeds on the bold defaults if the owner says nothing.

1. **Scale: 134 pages under the kill criterion**, seven phases, preview gate after Phase 1. The owner can stop after any phase.
2. **Northern Ireland is excluded.** Belfast, Derry and the six counties are UK jurisdiction and belong in a UK cluster.
3. **Language: English**, with Irish school and place vocabulary woven in. No Irish-language (Gaeilge) twin pages.
4. **Currency: USD**, per the single-source pricing rule. Never EUR as our price.
5. **Doors before places** (Phase 2), because they carry the AI agents, Python, Java, app and software focus the owner named first.
6. **`best-coding-class-in-the-world` is global**, not Ireland-suffixed, and written as a criteria page.
7. **The live hub's pricing line is left as it is.** `/coding-classes-in-ireland` has an H2 "One price: USD 150 a month" while also selling USD 100 group plans. The new pages state both prices; the owner decides whether to correct the old H2.
8. **Evening demo-call hours for Irish families** are not promised anywhere until the owner confirms staffing (Irish 7 pm is 11:30 pm India time in winter).

## 11. What Phase 1 produces

Six pages built through every gate and shown on localhost, the parameterised pipeline, the tested Irish lead, the tracker, and this spec updated with what the six taught. On "yes", Phase 2 starts the same day, one page at a time, committed and pushed as each passes. On "change X", X is changed on six pages, not on 134.

## 12. Non-goals

- No Northern Ireland, no Irish-language pages, no EUR, no Irish phone or address.
- No changes to the two live Ireland pages beyond adding link-down blocks.
- No new courses; the cluster sells the existing catalogue.
- No competitor rankings or comparisons by name.
- No legal, tax, immigration or admissions advice; no grade, points or CAO promises.
