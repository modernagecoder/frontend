# Netherlands Cluster: the whole country, one place at a time

Date: 2026-09-07
Status: PLAN, awaiting owner approval. No page has been built.
Related: [international growth cluster](2026-08-15-international-growth-cluster-design.md) (invented the `cg-` system and the dossier gate), [global AI cluster](2026-07-24-global-ai-cluster-design.md) (the `ag-` system), the Oman worked example in `C:\Users\hp\Desktop\SkyCoders\oman\MODERN-AGE-CODERS-PAGE-BUILD-GUIDE.md` Appendix A.

## 0. What the owner asked for, in their words

"Maximum pages for the Netherlands ... a very amazing cluster covering each and every state, city, district ... just like we have done with Oman ... courses section in the top ... very depth SEO rich content, no duplicate ... keyword research properly done ... focus on AI agents, AI building, AI, Python, Java, app, software ... target each and every age group ... each page has a unique vibe, each page brings traffic, each page helps convert high quality leads."

This document turns that into a page list, a build order, the rules that keep every page unique, and the decisions only the owner can make.

## 1. What already exists (do not rebuild, do not collide)

Two Netherlands pages are live and ranked. Both stay. Every new page links to them and must not re-argue what they own.

| Page | Cluster | Words | Owns (never reuse on a new page) |
|---|---|---|---|
| `/coding-classes-in-netherlands` | `cg-nl` | 6,657 | The SLO digital literacy core objectives (nine, three domains, finalised March 2024), "a policy date is not an outcome date" exposure project, groep 6 to 8 placement, the groep 8 streaming advice to wait, CET/CEST offset prose. Its dossier claims the literal strings `Almere` and `Eindhoven`. |
| `/ai-and-machine-learning-classes-in-netherlands` | `ag-nl` | 6,880 | The CBS cycling decline dataset (pandemic-years trap), operating vs constructing, the AI infrastructure policy spine (AiNed, GPT-NL, AI Factory mentioned once each), "Dutch evenings and a time difference that moves twice a year", portfolio vs grade. |

Consequence one: the country hub for coding already exists, so this cluster is the **spokes** of that hub, plus a **second hub** for the AI and Python academy axis (which Oman also has: `/ai-and-python-academy-oman` plus nine spokes).

Consequence two: two dossier strings must be released before the Eindhoven and Almere city pages can be built. The hub's `requiredMentions` currently include `Almere` and `Eindhoven`; the gate fails any second dossier that repeats a string. Swap those two for two other hub-only strings (for example `Groep 3 to 5` and `VO student`), re-run the gate on the hub, then build the spokes. This is a five-minute edit and it is step one of Phase 2.

Consequence three: the lead contract is already proven for this country. `countryIso: 'NL'`, `+31`, nine local digits, no `+1` strip line, posting to `/api/contact/submit` on `cg-` pages and `/api/callback/request` on `ag-` pages. Copy it exactly from the live page.

## 2. The Netherlands, as a page structure

The country has 12 provinces, 342 municipalities (CBS, 1 January 2026, unchanged from 2025), and 32 municipalities above 100,000 people that together hold about 38 percent of the population. Amsterdam is 941,927, Rotterdam 673,804, The Hague 569,468, Utrecht 378,121, Eindhoven 249,783 (CBS provisional, 1 January 2026).

Where the customers are is not where the population is. CBS (1 January 2024) puts 89,276 people of Indian origin in the country, and the share is concentrated: **Amstelveen 68 per thousand residents** (the highest in the country, 6,500 people in a municipality of 95,840), **Uithoorn 50 per thousand**, **Eindhoven 35 per thousand**, **Almere 31 per thousand**. Most Indian arrivals since 2012 are knowledge migrants in IT, and CBS reported in 2025 that they are staying longer. Add the Hindustani-Surinamese community in The Hague, the international-school towns (Wassenaar, Voorschoten, Oegstgeest, Hilversum, Hoofddorp, Haarlem), and the Brainport engineering families around ASML.

That gives four page types, matching the Oman method exactly (hub, district, city, region) but ranked by **where the leads are**, not by administrative rank:

| Type | Count | Depth floor | Job of the page |
|---|---|---|---|
| Country hub | exists | 3,000 | Owns the national argument. Links down to everything. |
| **Money and big-city pages** (Phase 1: Amstelveen plus the six largest cities) | 7 | 2,200 | Written for the family that actually lives there: schools by name, who lives there, the commute, what the place is known for. |
| Big-four city districts (Amsterdam, Rotterdam, The Hague, Eindhoven) | 30 | 1,400 | One paragraph of national context, then only what is true of that district and false of its neighbours. |
| Remaining cities above 100,000, plus Uithoorn | 27 | 2,200 | A city page is about a place people live in. Quarters, schools, roads. |
| Provinces | 12 | 1,800 | About the spread: the towns that are not the capital, distances, which holiday region it falls in. Links down to its capital's page instead of repeating it. |
| Cities 60,000 to 100,000 with a real hook | up to 30 | 2,200 | Only if eight place-specific facts exist. Skip and report otherwise. |

Every figure and institution named in this plan is a research lead found on 2026-09-07, not a page-ready fact. Each is re-verified at a primary source (CBS StatLine, OCW, SLO, the municipality, the school's own site) and recorded in the dossier with its URL before it appears on any page.

The **kill criterion is absolute**: fewer than eight verifiable facts specific to that one place means the page is not built and is reported as skipped. Thirty good pages beat thirty-four with four weak ones. The owner said "I don't want to leave anyone"; the honest way to leave nobody out is that every small municipality is **named and covered inside its province page**, which is what the Oman governorate pages did for the seven wilayats too small for a URL.

## 3. The page list

Slugs follow the site convention `/coding-classes-in-<place>`. English place names where the site already uses them (The Hague, not Den Haag; 's-Hertogenbosch stays as `den-bosch` for the slug with the full name in the H1). Market codes are `cg-` plus a three-letter code; accent hex values are solved by the assistant with the OKLCH contrast solver (4.5:1 on all three paper tints) and are never guessed by a writer.

### Phase 1: the proof pages (8). Build, preview, get a visible yes, then sweep.

The owner rejected a 13-commit funnel on first sight on 2026-09-05. Nothing in Phases 2 to 6 starts until these eight have been seen on localhost and approved.

| # | Slug | Type | Spine (the fact only this page can carry) |
|---|---|---|---|
| 1 | `coding-classes-in-amstelveen` | money city | 68 per thousand residents are of Indian origin, the highest share in the country. Amity International School (IB continuum, opened Feb 2018, Amsterdamseweg 204). The page is written for a kennismigrant family whose child is in an international or Dutch school and whose grandparents call from India. |
| 2 | `coding-classes-in-amsterdam` | city, hub for 8 districts | An overview that hands off: eight stadsdelen, the doorstroomtoets pattern (28 percent vwo advice in Amsterdam, 2024/25), which schools sit where. Reads as a map, not a district page. |
| 3 | `coding-classes-in-eindhoven` | money city, hub for 7 stadsdelen | Brainport: ASML campus expansion approved by council, ISE's STEM-heavy cohort, 35 per thousand Indian origin. A child here is surrounded by engineers; the page argues what that changes about learning to build. |
| 4 | `coding-classes-in-the-hague` | city, hub for 8 stadsdelen | Hindustani-Surinamese community, BOVO Haaglanden's own doorstroomtoets process, international schools in Wassenaar and Voorschoten a short drive out. |
| 5 | `coding-classes-in-almere` | money city | 31 per thousand Indian origin; Flevoland, a province that did not exist until 1986; International School Almere. The youngest city in the country, and the commute to Amsterdam. |
| 6 | `coding-classes-in-utrecht` | city | The national rail hub; Utrecht Science Park; central Netherlands where regio Midden's holiday dates apply. |
| 7 | `coding-classes-in-rotterdam` | city, hub for 8 districts | Port city; the largest concentration of vmbo-heavy school advice in the big four, which makes the "informatica is not offered at 45 percent of schools" argument sharpest here. |
| 8 | `ai-and-python-academy-netherlands` | ag- hub | The Netherlands AI Factory in Groningen (€200 million, about 1,800 GPUs, expertise centre from 2026, full capacity 2027) as the spine: a country building compute for people who can build. Distinct from the live AI page's cycling dataset and its AiNed policy paragraph. |

Preview gate after page 8: the owner opens all eight on localhost at 1280 and 390, says yes or says what to change. Only then does Phase 2 begin.

### Phase 2: the provinces (12)

Every one links down to its capital's page (built in Phase 1 or 3) and spends most of its length on the municipalities that will never get their own URL.

| Slug | Capital page | What it is about |
|---|---|---|
| `coding-classes-in-noord-holland` | amsterdam | Amstelveen, Haarlem, Zaanstad, Hilversum, Hoofddorp, Alkmaar, Purmerend, Hoorn, Den Helder, Velsen; regio Noord holidays |
| `coding-classes-in-zuid-holland` | the-hague | Rotterdam, Leiden, Zoetermeer, Delft, Dordrecht, Westland, Alphen, Gouda, Schiedam, Vlaardingen, Leidschendam-Voorburg, Rijswijk, Wassenaar; regio Midden |
| `coding-classes-in-utrecht-province` | utrecht | Amersfoort, Veenendaal, Zeist, Nieuwegein, Houten; slug carries `-province` because the city owns the bare name |
| `coding-classes-in-noord-brabant` | eindhoven | Tilburg, Breda, Den Bosch, Helmond, Oss, Meierijstad, Roosendaal, Bergen op Zoom; regio Zuid |
| `coding-classes-in-gelderland` | arnhem | Nijmegen, Apeldoorn, Ede; the one province split between two holiday regions, which is its own hook |
| `coding-classes-in-overijssel` | zwolle | Enschede, Deventer, Hengelo, Almelo; International School Twente |
| `coding-classes-in-limburg` | maastricht | Venlo, Sittard-Geleen, Heerlen, Roermond; UWC Maastricht; the border with Germany and Belgium |
| `coding-classes-in-groningen-province` | groningen | The AI Factory province; Haren's IS Groningen secondary; the emptiness north of the city |
| `coding-classes-in-friesland` | leeuwarden | Súdwest-Fryslân, Heerenveen, Drachten; a bilingual province, the Frisian word for the same thing |
| `coding-classes-in-drenthe` | assen | Emmen, Hoogeveen, Meppel; the least dense province |
| `coding-classes-in-flevoland` | almere | Lelystad, Dronten; land that is younger than the parents reading the page |
| `coding-classes-in-zeeland` | middelburg | Vlissingen, Goes, Terneuzen; the province with the longest drive to any centre, the single strongest online argument in the country |

### Phase 3: the remaining cities above 100,000 (27)

groningen, tilburg, breda, nijmegen, arnhem, apeldoorn, haarlem, haarlemmermeer (Hoofddorp: say both names, Optimist International School), zaanstad, amersfoort, enschede, den-bosch, zwolle, zoetermeer, leiden, leeuwarden, maastricht, ede, dordrecht, westland, alphen-aan-den-rijn, alkmaar, delft (TU Delft, International School Delft), emmen, deventer, venlo, plus **uithoorn** (50 per thousand Indian origin, second in the country, well under 100,000 but a money town by the only measure that matters here).

### Phase 4: districts of the big four (30)

Written under the Oman A.3b rule: one paragraph of national context, then the four axes that differ (schools by name, who lives there, the commute, what the place is physically known for). These are the hardest pages in the cluster; the sound-alike pairs (Oost and Zuid, Escamp and Laak, Woensel-Noord and Woensel-Zuid) get diffed by hand before handover.

- Amsterdam (8): centrum, noord, oost, zuid, west, nieuw-west, zuidoost, weesp
- Rotterdam (8 of 14 gebieden; Noord, Overschie, Hoek van Holland, Hoogvliet, Pernis and Rozenburg are named and covered inside the city page): centrum, charlois, delfshaven, feijenoord, hillegersberg-schiebroek, kralingen-crooswijk, prins-alexander, ijsselmonde
- The Hague (8): centrum, escamp, haagse-hout, laak, leidschenveen-ypenburg, loosduinen, scheveningen, segbroek
- Eindhoven (6 of 7): centrum, gestel, stratum, strijp, woensel-noord, woensel-zuid (Tongelre folded in)

Slug shape: `coding-classes-in-amsterdam-zuidoost`, `coding-classes-in-scheveningen`. The city name is prefixed only where the district name is ambiguous on its own (every city has a Centrum; Scheveningen needs no prefix).

Utrecht's wijken are deliberately not split in this plan: at 378,000 the city is well under half of Rotterdam, and its wijken are named far less often as places to live than Amsterdam's or The Hague's stadsdelen. If Phase 4 shows the district pages converting, Utrecht is the first extension.

### Phase 5: cities 60,000 to 100,000, kill-criterion gated (up to 30)

Candidates in population order: helmond, purmerend, oss, hilversum, sittard-geleen, nissewaard, heerlen, lelystad, meierijstad, hengelo, schiedam, leidschendam-voorburg, roosendaal, gouda, vlaardingen, hoorn, almelo, veenendaal, assen, bergen-op-zoom, velsen, capelle-aan-den-ijssel, plus the international-school towns regardless of size: wassenaar (ISW, American School of The Hague), voorschoten (British School senior campus), oegstgeest (ISRLO), rijswijk, diemen, middelburg (provincial capital), roermond.

Each one is proposed with its eight facts before it is written. Any that cannot reach eight is reported as skipped and its name goes into its province page instead.

### Phase 6: the AI, Python, Java, app and software doors (24, `ag-` cluster)

This is the axis the owner named first, and it is where the age groups and the languages live. Place pages sell the whole ladder; these pages each sell one thing to one audience, nationally, the way the Oman academy and the Bahamas topic pages do. Word floor 3,000, drafted to 3,300.

**Academy spokes (6):** `ai-and-python-academy-amsterdam`, `-eindhoven`, `-the-hague`, `-utrecht`, `-rotterdam`, `-groningen` (the AI Factory city; do not attack the capital first, attack the city whose spine nobody else has).

**Topic doors, Netherlands-scoped (7):** `ai-agents-course-for-students-netherlands` · `python-to-ai-roadmap-for-students-netherlands` · `build-real-ai-projects-netherlands` · `machine-learning-for-school-students-netherlands` · `vibe-coding-vs-building-ai-netherlands` · `ai-and-python-academy-for-girls-netherlands` (same hard rules as Oman: no claim girls learn differently, no girls-only batches) · `coding-alongside-informatica-havo-vwo-netherlands` (the elective only about 12 percent of students take and only about 55 percent of schools offer, source to be verified at primary: SLO, i&i).

**Age doors (5):** `coding-classes-for-kids-netherlands` (groep 3 to 8, Scratch to Python and AI, the "woensdagmiddag vrij" scheduling hook to verify) · `coding-classes-for-teens-netherlands` (VO, informatica gap, Python, Java, app dev, Codex and Claude Code for teens) · `coding-and-ai-classes-for-adults-netherlands` (career changers, the 30 percent ruling crowd, Python automation, data analysis) · `coding-for-college-students-netherlands` (TU Delft, TU/e, UvA, VU, Utrecht, Leiden, Groningen, Twente; DSA, full stack, Git) · `ai-agents-course-for-professionals-netherlands` (Copilot Studio 1-on-1 tier, Codex and Claude Code masterclass; the kennismigrant IT professional).

**Language and track doors (6):** `python-classes-netherlands` · `java-classes-netherlands` (teens and college, AP CS A for the American School families) · `app-development-course-netherlands` (React Native, Flutter, Kotlin, Swift) · `full-stack-software-development-course-netherlands` · `data-science-course-netherlands` · `one-to-one-coding-classes-netherlands`.

Total across phases: **8 + 12 + 27 + 30 + up to 30 + 24 = up to 131 new pages**, against Oman's 74 coding pages plus 10 academy pages. That is "maximum" under the kill criterion. A number higher than this is only reachable by writing pages with nothing in them, and those pages cost rankings for the rest.

## 4. Every age group, on every page

The owner's rule is 6 to 67, and the course strip is the first section on every page (feedback of 2026-08-17, never mid-page). The strip is **chosen per page**, never pasted:

- Place pages carry four picks that span the age range, plus the flagship strip (Python, AI, vibe coding, agentic coding). Which four depends on the place: Amstelveen leans kids and international-school teens, Eindhoven leans teens-to-AI, Delft and Groningen lean college.
- Age-door pages carry six picks from one age band only.
- Language doors carry the kids, teens and college versions of that one language side by side, which is a strip no other page has.

The catalogue is `content/courses/data/*.json` (122 courses; every one has artwork; the URL is `/courses/<meta.slug>`, verified with `ls content/courses/generated/<slug>`). The AI, Python, Java, app and software courses that these pages sell:

| Audience | Courses |
|---|---|
| Kids (6 to 12) | kids-coding-blocks-masterclass, scratch-programming-complete-course, python-ai-kids-masterclass, block-coding-app-development-masterclass, game-development-masterclass-for-kids, roblox-game-coding-for-kids-lua-course, kids-ai-web-development-course, ai-literacy-for-kids-course, vibe-coding-for-kids-beginners-ai-scratch-game-dev, maths-through-coding |
| Teens (13 to 17) | python-complete-masterclass-teens, java-programming-masterclass-for-teens, ai-ml-masterclass-teens, complete-app-development-masterclass-for-teens, full-stack-web-development-teens-masterclass, codex-and-claude-code-ai-coding-agents-course-for-teens, data-science-course-for-teens-python-data, cpp-programming-masterclass-for-teens, problem-solving-dsa-masterclass-teens, git-github-version-control-course-for-teens, vibe-coding-for-teens-python-web-ai-projects-course, teens-ai-tools-mastery-course, ai-agents-with-microsoft-copilot-studio-course-for-teens (1-on-1 only) |
| College (18+) | python-programming-masterclass-zero-to-advanced-college, complete-java-programming-masterclass-college, ai-ml-masterclass-complete-college, complete-generative-ai-masterclass-college, artificial-intelligence-complete-masterclass-college, complete-app-development-masterclass-college, full-stack-web-development-masterclass-college, data-structures-algorithms-masterclass-college, data-science-complete-masterclass-college, vibe-coding-for-college-fullstack-ai-dsa-career-course, git-github-version-control-course-for-college-students |
| Adults and professionals | codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals, ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals (1-on-1 only), python-ai-automation-masterclass-college, ai-tools-mastery-complete-college, data-analysis-mastery-course-college, data-and-ai-analytics-for-non-programmers-course, git-github-advanced-version-control-masterclass-for-professionals, hackathon-prep-for-adults-professionals-coding-ai-innovation-course |

The three Copilot Studio courses carry `meta.one_on_one_only` and must be described as private-rate on every page that lists them.

## 5. Keyword research: the method, and what is already known

Search volume tools are not available in this environment, so keyword research is done the way the build guide's Phase 0.3 specifies, per page, and recorded in the dossier: what parents in that place call it, the local word for the school stage, which curricula they name, and what the three best-ranking competitors put in their titles. Google autocomplete and People Also Ask for each head term are checked at build time. If the owner has Search Console or Ahrefs data for the live Netherlands pages, that replaces guesswork and should be shared before Phase 2.

What the research done for this plan already established:

**Language.** The English SERP for "coding classes for kids Amsterdam" is held by Codingal's location page, Code That Idea, New Tech Kids, JetLearn, Kids!Can! and The Code Zone: every one an expat-facing English page. That is our audience and our language. The Dutch SERP ("programmeren voor kinderen") is held by CodingKids, Algorithmics, Create and Learn, Superprof and free platforms. **Recommendation: English pages, with Dutch vocabulary woven in where a Dutch parent would use it** (groep, basisschool, VO, vmbo/havo/vwo, doorstroomtoets, kerndoelen, informatica, bijles, "programmeren voor kinderen" as a named phrase in one FAQ). No Dutch-language twin pages in this cluster; that is a separate decision with a hreflang design of its own (see section 10).

**The three keyword layers, per the guide's section 20:**

1. Head term, once each in title, H1, capsule, canonical and `.md` twin: `coding classes in <place>`; for `ag-` pages, the page's own term (`AI agents course Netherlands`, `Java classes Netherlands`).
2. The AI and thinking cluster gets a **named H2 on every page**, phrased as the question a parent types and rotated so no two pages share it, and argued through that page's own data project. Every page links `/blog/is-coding-worth-learning-2026` with the question as anchor.
3. Local long tail comes free from naming real schools, real roads and real neighbourhoods.

**Dutch-specific terms that belong in the vocabulary, used because they are accurate:** groep 3 to 8, basisschool, voortgezet onderwijs, vmbo, havo, vwo, gymnasium, doorstroomtoets (it replaced the eindtoets; sat 26 January to 13 February 2026, results 3 to 15 March), schooladvies, informatica (havo/vwo elective, new exam programme since 2019/20), kerndoelen digitale geletterdheid, kennismigrant, the 30 percent ruling, international school, IB, stadsdeel, wijk, schoolvakantie regio Noord/Midden/Zuid.

**Parent questions the pages answer** (four to six per page, from the guide's 21.3, with the real Dutch values substituted): will this fit around the doorstroomtoets year; my school does not offer informatica, what now; my child is at an international school on IB MYP, does that match; what time are classes given CET and IST; do classes run on woensdagmiddag; how do we pay from the Netherlands; is anything in person.

## 6. Uniqueness: how 131 pages stay 131 different pages

The machinery exists and is battle-tested on 102 dossiers. Nothing new is invented; the rules are restated because they are where every previous cluster nearly failed.

1. **One dossier per page in `content/coding-global-dossiers.json`** (and the `ag-` equivalent for Phase 6): 8+ `requiredMentions` that actually appear on the page, none shared with any other dossier, a `localProject` on a real local dataset with a real analytical trap, 3+ primary sources with claim and URL, `rejectedClaims` so a dropped fact is not re-researched. The gate fails the page otherwise.
2. **One distinct data-reasoning fault per page**, checked free across all 102 existing dossiers before it is used, and the demonstration is run before the table is written. Candidates that fit Dutch open data: CBS StatLine municipality tables (denominator traps between gemeente and stad), NS punctuality (a metric definition trap), Rijkswaterstaat water levels (a threshold trap), KNMI station data (station relocation), doorstroomtoets advice shares (double advices counted twice), holiday-region dates (a categorical join trap for Gelderland), Schiphol movements, port of Rotterdam throughput, Brainport employment.
3. **Write chrome-adjacent prose fresh on every page.** The seven slots that collide are the hero closer, the last alignment row, the AI section closer, the six delivery cells, the fees closer, the form's secondary links, and the boilerplate FAQ answers. Adapted prose scores 6 to 14 percent; freshly written prose scores 2 to 5 percent. The fail line is 12 percent, warn is 6.
4. **Choose the ladder and the FAQ set for the place.** At least seven of ten FAQs market-specific. Never paste the previous page's ladder.
5. **Three page types, three jobs** (Oman A.10): a district page never carries national facts twice; a province page never rewrites its capital; a city page is close-up and human scale.
6. **Run the uniqueness gate at n=2**, then on the sound-alike pairs named in Phase 4 before handover, and never read a district score before `SPOKE_EXTRA_SUFFIXES` covers the contact block and `Service` schema (open item from the Oman build; check it is closed before Phase 4).
7. **Every hard number is attributed to a named source and a date**, in the sentence. A search-result summary is not a source. Dutch government PDFs (SLO, OCW, CBS) are fetched and, where needed, their content streams inflated directly.

## 7. Design: one system, a hundred personalities

- `cg-` pages use `src/css/coding-global.css` (The Ledger: paper, ink, amber, Fraunces, Inter, JetBrains Mono, the `.cg-align` alignment column). `ag-` pages use `src/css/ai-global.css` (Build Log, the numbered protocol spine). The two are structurally different by gate, so a city's coding page and its academy page never read as twins.
- **Each page carries one scoped personality `<style>` block** (guide section 19): override-only, every selector prefixed `.cg-root.cg-<code>`, whitelisted properties only, 40 lines max, deletable without breaking the page. Vary hero split, grid density, tracking, rule motif and section padding; never colour semantics. The verification grep is run on every page.
- **Accents are solved, not chosen.** 101 `cg-` accents and 77 `ag-` accents already exist. New ones come from the OKLCH solver, must clear 4.5:1 on all three paper tints, must stay in the deep editorial band (the greedy max-min solver drifts into magenta and primary blue at this many accents, which is the rejected "AI look"), and only need separation from the pages they link to. The existing Dutch orange `#A64B17` (cg-nl) and `#C05621` (ag-nl) stay.
- **Course cards with real thumbnails are the first section**, and the rendered audit runs on every page at 1280 and 390: four thumbnails loaded and uncropped, no text under 12px, no tap target under 44px, no low-contrast pair (`.cg-root a` beats a bare `.cg-btn`; every coloured component is written as `.cg-root .cg-btn`), zero horizontal overflow, zero console errors. `scripts/audit-rendered-ag-pages.mjs --prefix=cg <slugs>` already supports the prefix.
- No em dashes, no emoji, no gradients, no glows, no purple/cyan, no `AggregateRating`, no fabricated review, no second currency.

## 8. Conversion: every page a lead page

- Four contact touchpoints per page (hero, after the alignment column, one FAQ answer, closing block) plus the mobile sticky bar; WhatsApp `wa.me/919123366161` with a `?text=` prefill naming the page's place so the lead's origin arrives with the message.
- Honesty line: +91 is an Indian number and is presented as one. No Dutch office, no Dutch address, no `LocalBusiness` with a Dutch `PostalAddress`. Schema is `Service` + `areaServed` with a `containedInPlace` chain (district in city in province in country), `VirtualLocation` in `CourseInstance`.
- Timezone wording stays the approved one: the Netherlands moves between CET and CEST while IST does not, so the gap is 4.5 hours in winter and 3.5 in summer; weekend and late-afternoon slots are easiest, weekday evenings case by case, confirmed on the call. No page promises a fixed slot.
- **Price is the closing proof, never the identity** (owner rule 2026-07-06). Depth, one full hour, classes students wait for, application first; then "all of this, and it costs less".
- One currency per visitor. The `data-price` + `international-pricing.js` contract, applied by `npm run pricing:apply`; no price inside an FAQ answer (it leaks through FAQPage schema).
- `attribution.formPage` set to the page's own path on every form, so the admin panel shows which of the 131 pages produced the lead. That is how the owner will learn which places convert, and it decides what gets built after Phase 6.

## 9. Toolchain and gates (all existing; two small extensions)

Per page, in order, and a page is not routed until all pass:

1. Dossier written and checked free of collisions (`node scripts/verify-cluster-pages.js coding-global` reports shared strings).
2. Page and `.md` twin written; personality block grep clean; undefined-class check clean (57 naked classes shipped once from an outside agent; never again).
3. `node scripts/verify-cluster-pages.js coding-global` green (FAQ schema character-for-character, links resolve, images exist, word floor by page type, dossier facts present).
4. `node scripts/check-cluster-uniqueness.js coding-global` under 6 percent against every sibling and the two live Netherlands pages.
5. `node scripts/audit-rendered-ag-pages.mjs --prefix=cg <slug>` clean at both widths.
6. `node scripts/wire-coding-global-routes.js <slug>` (`_redirects`, `netlify.toml`, both sitemaps, `llms.txt`, always above the catch-alls).
7. Registration in the seven places (accent in the CSS, `fileRe` + `siblingRe` + `markets` in the verify script, `fileRe` in the uniqueness script, the routes table, the dossier). A re-creation of the Oman `cg_register.py` helper, checked into `scripts/` this time rather than a session scratchpad, does all seven idempotently.
8. Inbound links: up to the hub in the first 300 words, the hub links down, two siblings sideways, the matching `ag-` page, and three from outside the cluster (`scripts/link-into-ai-cluster.js` for the `ag-` pages; a province index block on the hub and each province page, generated from the dossiers so it cannot drift, for the `cg-` pages).
9. One commit per page. Deploy in batches of at most ten; the IndexNow plugin streams each URL individually on the production build.

**Two extensions needed before Phase 2:**

- `pageTypeOf()` in `verify-cluster-pages.js` is hardcoded to Oman and Brunei sets. Add `NL_DISTRICTS`, `NL_CITIES`, `NL_PROVINCES` sets (or, better, a `pageType` field in each dossier that the function reads first, which stops this being edited per country).
- `check-cluster-uniqueness.js` incumbents for `coding-global` must include both live Netherlands pages so a spoke is measured against its own hub and against the AI page for the same market.

## 10. Decisions only the owner can make

The plan proceeds on the defaults in bold if the owner says nothing; each one is easy to reverse before Phase 2 and expensive after.

1. **Language: English pages with Dutch vocabulary woven in.** The alternative is a Dutch-language twin per page later (`/programmeerles-<stad>`, `hreflang="nl-NL"`), which doubles the cluster and needs a Dutch writer's review. Not in this plan.
2. **Currency: USD**, per the single-source pricing rule (international = USD 100 group, USD 150 one to one). Showing EUR would need a pricing config change and a euro payment route; it is a separate project. The pages will say plainly that fees are in US dollars, as the live hub already does.
3. **Scale: 131 pages under the kill criterion**, in six phases with a preview gate after Phase 1. The owner can stop after any phase; nothing built is wasted. The alternative of 342 municipality pages is rejected in this plan: below about 60,000 people there are not eight place-specific facts, and thin pages drag down the strong ones (the site already has about 400 "crawled, not indexed" URLs, mostly city clusters).
4. **Phase order: money cities first, provinces second.** Oman put the capital's districts first because that is where Omani money is. Dutch money is in Amstelveen, Eindhoven, Almere and the international-school towns, so those lead.
5. **Utrecht districts are not split** in this plan; first extension if Phase 4 converts.
6. **Rotterdam gets 8 of 14 gebieden**; Noord, Overschie, Hoek van Holland, Hoogvliet, Pernis and Rozenburg are named inside the city page rather than given URLs.
7. **A Dutch-facing day and time for the demo call** is not promised anywhere until the owner confirms staffing for European evenings, which is 10 pm to midnight IST in summer.

## 11. What Phase 1 produces, concretely

Eight pages on a branch, each through all nine gates, each shown to the owner on localhost before the branch is merged. Plus: the two dossier strings released on the hub, the two script extensions in section 9, the registration helper checked into `scripts/`, and this spec updated with what the first eight pages taught. If the owner's answer to the preview is "yes, looks good", Phase 2 begins the same day; if it is "change X", X is changed on eight pages, not on a hundred and thirty-one.

## 12. Non-goals

- No changes to the two live Netherlands pages beyond releasing two dossier strings and adding the links down to the new spokes.
- No Dutch-language pages, no EUR pricing, no Dutch phone number, no Dutch address.
- No Belgium, no Flanders, no Germany spokes. Different countries, different clusters.
- No new courses. This cluster sells the 122 that exist.
- No changes to `pricing.config.jsonc`, `brand-facts.json` or the lead backend.
