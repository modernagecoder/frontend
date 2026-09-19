# UK Cluster: every nation, city, borough, county and town, every exam system, every competition

Date: 2026-09-19
Status: PLAN, awaiting owner approval. No page has been built.
Related: [Ireland cluster](2026-09-15-ireland-cluster-design.md) (134 pages, the method this copies), [Netherlands cluster](2026-09-07-netherlands-cluster-design.md) (the pipeline, `scripts/nl`). Tracker: `UK-PROGRESS.md`.

## 0. What the owner asked for, in their words

The standing country brief: "maximum pages ... covering each and every state, city, district and everything ... courses section in the top ... very depth SEO rich content, no duplicate ... keyword research properly done ... focus on AI agents, AI building, AI, Python, Java, app, software ... target each and every age group ... each page has a unique vibe, each page brings traffic, each page helps convert high quality leads ... make a detailed plan how to proceed."

For the UK, on 2026-09-19:

1. "make a plan for uk cluster like ireland maximum pages highest quality seo new important keywords best coding class in {} or ai and python or something"
2. "when someone search in uk any type of coding ai maths olympiad anything related to coding maths ai olympiad or anything competition small to big i want my website my pages will show"
3. "my all pages just flooded with claude chatgpt and other google ai search and other ai agents perplexity everyone will show so make this pages"

So the UK cluster has three axes that Ireland did not: **maths as a full axis** (the brand teaches it, and the UK maths market is large), **competitions from primary school to international olympiad**, and **AI-search visibility** as a design requirement on every page.

This document turns that into 589 proposed pages in eleven phases, the rules that keep them unique, and the decisions only the owner can make.

## 1. What already exists

### 1.1 The 23 live UK pages (all indexed, routed in both redirect files, in sitemaps)

No new page may re-argue what an existing page owns. Each existing page becomes a spoke of the new hubs.

| Page | System | Owns (never re-argue) |
|---|---|---|
| `/coding-classes-in-united-kingdom` | `cp-uk` (old country design) | The UK hub: 6,303 words, 36 inbound links, 301 aliases `/coding-classes-in-uk` and `/coding-classes-in-britain`. Seven tracks primary to professional; "we match the spec your school uses"; the week-by-week walkthrough. |
| `/ai-and-machine-learning-classes-in-uk` | `ag-` | The rail punctuality project ("did the railway improve, or stop running the late trains"); the AI Opportunities Action Plan and growth zones; "four education systems, four sets of codes"; British clock time and the October change. |
| `/ai-and-machine-learning-classes-in-london` | `ag-` | The London cycle hire forecasting project; the Action Plan one year on; where AI hiring happens; London time. |
| `/coding-classes-in-birmingham` | `cg-` | "The boundary is part of the statistic"; over four hundred schools. |
| `/coding-classes-in-leicester` | `cg-` | Census counts versus shares; "Indian heritage does not mean Indian curriculum"; "majority and largest are not the same predicate". |
| `/uk-gcse-computer-science-tutoring` | `ag-` | The three GCSE boards compared (AQA 8525, OCR J277, Edexcel 1CP2); UK GCSE against IGCSE. |
| `/cambridge-igcse-computer-science-tuition` · `/cambridge-a-level-computer-science-online-classes` | `ag-` | Cambridge 0478 and 9618. |
| `/online-coding-classes-for-kids-uk` | `mp-` | The kids door (ages 6 to 14 by key stage; blocks-to-Python bridge; "first country to mandate computing"). |
| 13 maths pages (`mp-`) | `mp-` | `11-plus-maths-tuition`, `ks2-`, `ks3-`, `gcse-`, `igcse-`, `a-level-maths-tuition-online`, `further-maths-tuition-online`, `common-entrance-maths-tuition`, `ukmt-maths-challenge-tutoring` (owns JMC, IMC, SMC), and the four `online-maths-...-in-uk` age pages. |
| `/coding-for-igcse-students` | old `age-page` template, retired dark palette | International IGCSE, not UK-specific. Listed only. |

UK courses in the catalogue: `11-plus-maths-preparation-course-uk`, `gcse-mathematics-mastery`, `gcse-computer-science-course`, `a-level-maths-course-pure-mechanics-statistics`, `igcse-computer-science-0478-course`, `igcse-mathematics-mastery`, `cambridge-a-level-computer-science-9618-course`, plus the competition courses `olympiad-competition-mathematics-mastery`, `competitive-programming-for-teens-course`, `competitive-programming-masterclass-college`, the three hackathon-prep courses and `cybersecurity-course-for-teens-ethical-defensive`. **There is no AQA or OCR A-level Computer Science course and no Scottish, Welsh or Northern Irish course.** Those pages sell tutoring through the existing courses and the one-to-one plan, and say so.

### 1.2 Global pages the UK pages link to instead of duplicating

`best-coding-class-in-the-world` (built in the Ireland cluster), `best-coding-classes-online`, `best-online-coding-classes-for-kids-2026`, `how-to-think-like-a-programmer`, `how-to-train-machine-learning-models`, `ai-ml-course-for-teens` (it already ranks for "AI course for teenagers UK"), `coding-olympiad-medal-track`, `ioi-olympiad-informatics-training`, `usaco-preparation-online-coaching`, `math-olympiad-amc-tutoring`, `hackathons-for-high-school-students`, `coding-challenges`, `maths-challenges`, `science-fair-project-ideas-ai`, and the Scratch, Roblox and Minecraft kids pages. The Irish and Dutch doors of the same shapes are uniqueness incumbents for every UK door.

### 1.3 Problems on the live UK pages (fix in Phase 0, before any new page)

1. **Uniqueness FAIL:** Leicester against Birmingham scores 12.6% (fail threshold 12%). Every new UK city page is measured against both, so this is fixed first by rewriting Leicester's shared chrome fresh.
2. **The hub is in the retired look.** `/coding-classes-in-united-kingdom` carries the `cp-vibe` neon block (#a855f7, #22d3ee, #a3e635), and it links to only 4 of the other 22 UK pages.
3. **Two currencies on 11 pages.** The hub and 10 maths pages have comparison tables that print competitor rates in pounds (for example "£30–50/hr") in the same row as our USD price. That breaks the one-currency rule, and the pound figures have no source.
4. **"Premium"** appears in an H2 on `/online-coding-classes-for-kids-uk` ("Premium teaching. One honest price.").
5. **"Max 6 students per batch"** appears 5 times on `/ai-ml-course-for-teens` and in 7 files in total. The brand fact is groups of 5 to 10. A 2026-09-19 search summary already repeats "maximum of 6 students per batch" to UK searchers.
6. **Stale price in AI search.** A search summary still quotes the kids UK page as "from $40 (about GBP 32)". The page itself now says USD 100, so it needs a re-crawl request (section 7).
7. **"Oxbridge alumni"** is claimed in a hub H2 ("Working engineers, Oxbridge alumni and patient teachers"). The owner must confirm it with named people or it comes off.

## 2. The UK, as a page structure

The UK is four countries with four school systems, and that is the cluster's biggest uniqueness engine. **A Scottish page never mentions GCSE or Key Stage as if it applied, a Welsh page teaches the Curriculum for Wales and WJEC, and a Northern Irish page teaches CCEA and the transfer test.** Four systems produce four genuinely different page families, not reworded copies.

Verified at primary sources on 2026-09-19 (each page re-verifies whatever it prints):

- **76 cities** with city status (gov.uk "List of cities", 29 August 2022): England 55, Wales 7, Scotland 8, Northern Ireland 6.
- **Towns** (ONS, "Towns and cities, characteristics of built-up areas, England and Wales: Census 2021", released 2 August 2023, tables 1c and 1d): the largest built-up area outside London is Birmingham (1,121,375), the largest in Wales is Cardiff (348,535). Excluding cities and city parts, 93 towns have 60,000 people or more and 80 have 40,000 to 60,000. Scottish and Northern Irish towns come from NRS and NISRA settlement figures, checked per page.
- **Where the customers are** (Census 2021 TS021 ethnic group, Nomis, 331 local authorities, used for **build order only and never printed as a page standout**): Leicester 126,421 (34.3%), Harrow 74,744 (28.6%), Birmingham 66,519, Brent 66,157, Hounslow 60,827, Hillingdon 57,341, Ealing 54,806, Redbridge 51,183, Sandwell 44,378, Wolverhampton 42,052, Newham 38,642, Coventry 32,096, Barnet 30,389, Slough 30,209 (19.1%), Croydon 29,563. Add the tech belts (the Thames Valley M4 corridor, Cambridge, Oxford, Milton Keynes, Manchester, Edinburgh, Bristol) and the grammar-school areas (section 3, Phase 6). The phase order puts those places first.

| Layer | Slug shape | Count | Floor (words) | Job of the page |
|---|---|---|---|---|
| Nations | `coding-and-ai-classes-in-<nation>` | 4 | 2,200 | The school system of that nation, its exam bodies and calendar, and the index of its places. |
| Cities (city status) | `best-coding-class-in-<city>` | 73 new (London in Phase 1); Birmingham and Leicester stay live | 2,200 | Schools by name, the postcode area, universities, employers, what the city is known for. London and the big cities are hubs for their areas. |
| London boroughs | `coding-classes-in-<borough>-london` | 33 (Harrow in Phase 1) | 1,800 | Borough schools, libraries, transport lines, the postcode districts inside it. |
| Counties and council areas | `coding-classes-in-<county>` | 95 (Surrey in Phase 1) | 1,800 | The towns that will never get a URL, distances, county schools and employers. England 45, Scotland 27, Wales 18, Northern Ireland 5 (the NI districts with no city page). |
| English regions | `coding-and-ai-classes-in-<region>` | 8 | 1,800 | County index for the region. Built late, kill-gated. |
| Towns, band A (60,000+) | `best-coding-class-in-<town>` | 123 | 2,200 | England and Wales 93, Scotland 18, Northern Ireland 12. |
| Towns, band B (40,000 to 60,000) | `best-coding-class-in-<town>` | 86 | 2,200 | Expected to shed pages under the 8-fact rule. |
| Districts inside cities | `coding-classes-in-<area>-<city>` | 44 | 1,400 | Only what is true of that area and false of its neighbours. |
| 11+ maths by area | `11-plus-maths-tuition-<area>` | 25 | 2,200 | The local test, its format and the grammar schools named by the council. Maths only. |
| Maths by city (optional) | `maths-tuition-in-<city>` | 20 | 2,200 | Owner decision 3. |
| Doors (national, `ag-`) | coding and maths doors | 50 | 3,000 (draft 3,150+) | One thing to one audience, nationally. |
| Competitions (`ag-`) | `<competition>-preparation` and hubs | 26 | 3,000 | One competition, its organiser, format and dates, with original practice. |

The **kill criterion is absolute**, as in Ireland: fewer than eight verifiable facts specific to that one place means no page. The place is then named and covered inside its county page. "Leave nobody out" is met by the county pages, not by thin URLs.

## 3. The page list (589 proposed, kill-gated)

Every slug below was checked on 2026-09-19 against `src/pages`, `_redirects`, `netlify.toml` and every sitemap: all 589 are free, and none duplicates another in the plan. Appendix A lists every slug. Dates and exam or competition facts quoted in this list are research leads, mostly from search summaries; each is confirmed at the organiser or exam board before a page prints it (section 6 marks the ones already confirmed at source).

### Phase 0: pre-flight and live-page fixes (no new pages)

Section 10. The pipeline gets a GB market, the test lead goes through, and the section 1.3 problems are fixed with the owner's OK.

### Phase 1: preview (9 pages, one of each new shape). Build, show on localhost, get a visible yes, then sweep.

| # | Slug | Shape | Spine |
|---|---|---|---|
| 1 | `best-coding-class-in-london` | best + city, hub for 32 boroughs and 13 districts | The postcode area as the map every London parent uses (E, EC, N, NW, SE, SW, W, WC). Hands off to boroughs. Never re-argues the AI London page (cycle hire, Action Plan, hiring). |
| 2 | `best-online-coding-classes-uk` | best, national | What "best" should mean for a family in any of the four nations, then our evidence. A criteria page, linked to `best-coding-class-in-the-world`. |
| 3 | `coding-classes-in-harrow-london` | London borough | Harrow's own schools, libraries and lines from their own sites. Named sources only. |
| 4 | `coding-and-ai-classes-in-scotland` | nation | Curriculum for Excellence (broad general education to S3, then National 5, Higher, Advanced Higher). Qualifications Scotland replaced SQA on 1 February 2026. The Scottish school year and the council-area index. |
| 5 | `uk-coding-maths-and-ai-competitions-calendar` | competition hub | Month by month, age by age, from Primary Maths Challenge to the international olympiads. Entry route, organiser, status this season. Links all 24 competition pages. The page most likely to earn links. |
| 6 | `british-informatics-olympiad-preparation` | competition spoke | BIO round one (3 hours, sat in school; the 2026 window ran 8 December 2025 to 23 January 2026), the route to IOI, original practice in the BIO style. |
| 7 | `a-level-computer-science-nea-help` | exam vernacular + understand the code | The AQA 7517 and OCR H446 programming projects, and the JCQ "AI Use in Assessments" guidance: AI use must be acknowledged, and misuse is malpractice. We teach technique and never write assessed work. |
| 8 | `11-plus-maths-tuition-kent` | maths by area | The Kent Test as Kent County Council publishes it, the grammar schools the council names, maths content only, and no admissions advice. |
| 9 | `coding-classes-in-surrey` | county | The county index shape, as Dún Laoghaire-Rathdown was for Ireland: the Surrey towns that will never get their own URL, the county's schools and employers, distances. It previews the 102 county and region pages of Phase 7. |

Preview gate: the owner opens all nine at 1280 and 390 and says yes or what to change. Nothing in Phases 2 to 11 starts until then.

### Phase 2: competitions (24 more; the owner's "small to big")

| Level | Pages |
|---|---|
| Hubs | `first-competitions-for-primary-school-children-uk` · `maths-olympiad-training-uk` (the UKMT ladder above the challenges page) |
| Primary and lower secondary | `primary-maths-challenge-practice` (Mathematical Association; the 2026 challenge runs 9 to 20 November) · `bebras-computational-thinking-challenge-practice-uk` · `astro-pi-mission-zero-and-space-lab-help` (ESA and the Raspberry Pi Foundation, up to age 19) · `first-lego-league-uk-coding-help` · `scottish-mathematical-challenge-practice` (Scottish Mathematical Council, running since session 1976-77) |
| UKMT follow-on rounds | `junior-mathematical-olympiad-preparation` · `intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation` · `ukmt-kangaroo-rounds-practice` · `ukmt-team-maths-challenge-practice` · `mathematical-olympiad-for-girls-preparation` · `british-mathematical-olympiad-bmo-preparation` |
| Computing and cyber | `oxford-university-computing-challenge-preparation` · `perse-coding-team-challenge-preparation` · `national-cipher-challenge-preparation` (University of Southampton) · `cyberfirst-girls-competition-preparation` (NCSC) |
| AI | `uk-olympiad-in-artificial-intelligence-preparation` (UKOAI selects the UK team for the International Olympiad in AI; IOAI 2026 was in Astana, 2 to 8 August) |
| Projects, awards, robotics | `coolest-projects-uk-project-ideas` · `teentech-awards-project-help` · `big-bang-competition-project-help` · `robocupjunior-uk-preparation` · `student-hackathons-uk` · `sentinus-young-innovators-coding-help` (Northern Ireland) |

Competition rules (section 6) apply to every one.

### Phase 3: doors (50 national pages) and the other three nations

- **Best (4):** `best-coding-classes-for-teens-uk` · `best-coding-classes-for-adults-uk` (the honest comparison with free Skills Bootcamps and School of Code) · `best-python-classes-online-uk` · `ai-classes-for-kids-uk` (what the new curriculum will expect: the Curriculum and Assessment Review says pupils will learn how computers are trained using data). The existing kids UK page stays the kids door.
- **Tutor vernacular (1):** `online-coding-tutor-uk`. UK parents search "tutor" and "tuition" as much as "classes".
- **Think (4):** `learn-to-think-not-just-use-ai-tools-uk` · `understand-the-code-dont-copy-paste-uk` (JCQ guidance) · `problem-solving-skills-through-coding-uk` · `learn-to-train-ai-not-just-prompt-it-uk`.
- **England's system (10):** `ks2-coding-lessons-online` · `ks3-computing-tuition-online` · `choosing-gcse-computer-science-year-9-options` · `aqa-gcse-computer-science-8525-help` · `ocr-gcse-computer-science-j277-help` · `edexcel-gcse-computer-science-1cp2-help` (the on-screen programming paper) · `aqa-a-level-computer-science-7517-help` · `ocr-a-level-computer-science-h446-help` · `new-computing-gcse-explained` (the Review's broader Computing GCSE: dated, and updated as the government publishes) · `t-level-digital-coding-help`.
- **Scotland (3):** `national-5-computing-science-help` · `higher-computing-science-help` · `advanced-higher-computing-science-project-help`.
- **Wales (2):** `wjec-gcse-computer-science-help-wales` (Made-for-Wales, teaching from 2025, Python) · `wjec-gcse-digital-technology-help-wales` (teaching from 2026, first award 2028).
- **Northern Ireland (2):** `ccea-gcse-digital-technology-programming-help` (Route B Programming) · `ccea-a-level-software-systems-development-help`.
- **Maths vernacular (7):** `national-5-maths-tuition-online` · `higher-maths-tuition-online` · `advanced-higher-maths-tuition-online` · `gcse-maths-and-numeracy-wales-help` · `ccea-gcse-maths-help` · `transfer-test-maths-practice-northern-ireland` · `multiplication-tables-check-year-4-practice` (England's statutory Year 4 check).
- **UK community and tech (5):** `after-code-club-next-step-coding-uk` · `after-microbit-next-step-python-uk` · `raspberry-pi-coding-projects-uk` · `coding-for-home-educated-children-uk` · `online-coding-summer-course-uk` (the holidays differ by nation: Scotland and Northern Ireland break in late June or early July).
- **Age and career (6):** `coding-for-university-students-uk` · `ai-agents-course-for-students-uk` · `ai-agents-course-for-professionals-uk` · `learn-to-code-over-50-uk` (the top of the 6-to-67 range) · `coding-before-a-degree-apprenticeship-uk` · `cyber-security-course-for-teens-uk`.
- **Language and track (6):** `java-classes-uk` · `app-development-course-uk` · `full-stack-software-development-course-uk` · `data-science-course-uk` · `build-real-ai-projects-uk` · `ai-and-python-academy-for-girls-uk` (same hard rules as Ireland: no claim that girls learn differently, no girls-only batches).
- **Nations (3):** `coding-and-ai-classes-in-wales` · `coding-and-ai-classes-in-northern-ireland` · `coding-and-ai-classes-in-england`.

### Phase 4: cities (72 new)

Money order first: Manchester, Leeds, Coventry, Wolverhampton, Milton Keynes, Cambridge, Oxford, Bristol, Nottingham, Derby, Bradford, Sheffield, Liverpool, Newcastle upon Tyne, Southampton, Preston, Edinburgh, Glasgow, Cardiff, Belfast, Aberdeen. Then the rest by population, with the smallest cathedral cities (Wells, St Davids, St Asaph, Ely, Ripon, Armagh) last and kill-gated. Birmingham and Leicester keep their live URLs as their city pages. Westminster goes to the borough layer. Name clashes are resolved in the slug: `bangor-wales`, `bangor-northern-ireland`, `newport-wales`, `perth-scotland`, `brighton-and-hove`, `derry-londonderry` (owner decision 5).

### Phase 5: London boroughs (32 more)

Money order: Brent, Hounslow, Hillingdon, Ealing, Redbridge, Barnet, Newham, Croydon, Sutton, Bromley, Enfield, Kingston upon Thames, Richmond upon Thames, Wandsworth, Bexley, Havering, Barking and Dagenham. Then the other 14. The City of London last (8,584 residents in Census 2021, kill-gated).

### Phase 6: 11+ maths by area (24 more after Kent)

Buckinghamshire, Birmingham, Trafford, Sutton, Bexley, Kingston, Barnet, Enfield, Redbridge, Slough, Reading, Southend, Essex, Lincolnshire, Wirral, Gloucestershire, Warwickshire, Medway, Plymouth, Torbay, Bournemouth Christchurch and Poole, Calderdale, Hertfordshire, Wolverhampton and Walsall. Each area is confirmed selective at the council's own admissions pages before it is written. Maths only (we do not teach verbal or non-verbal reasoning, and the page says so). No advice on school choice, catchment or appeals.

### Phase 7: counties, council areas and regions (102; Surrey is in Phase 1)

England 45 ceremonial counties (money order: Buckinghamshire, Berkshire, Hertfordshire, Kent, Essex, Leicestershire, Warwickshire, Oxfordshire, Cambridgeshire, Greater Manchester, the West Midlands). Scotland 27 council areas (East Renfrewshire, East Dunbartonshire, Aberdeenshire and Fife first; the four city councils and Stirling are covered by city pages). Wales 18 principal areas (Vale of Glamorgan and Monmouthshire first; Cardiff, Swansea, Newport and Wrexham are cities). Northern Ireland 5 districts with no city page. Then the 8 English regions.

### Phase 8: towns band A (123)

Money order first: Slough, Reading, Luton, Watford, Solihull, Maidenhead, High Wycombe, Bracknell, Guildford, Woking, Bolton, Blackburn, Loughborough, Rugby, Swindon, Northampton, Bedford, Stevenage, Hemel Hempstead, Crawley, Basingstoke. Then by population. Each is proposed with its eight facts before it is written.

### Phase 9: districts inside cities (44)

London 13 (Wembley, Southall, Ilford, Edgware, Stanmore, Pinner, Hayes, Wimbledon, Finchley, Twickenham, Chiswick, Dulwich, Hampstead), Birmingham 5, Manchester 4, Leeds 3, Leicester 3, Bristol 3, Edinburgh 3, Glasgow 2, Cardiff 2, Belfast 2, Sheffield 2, Nottingham 1, Coventry 1. Every district is diffed by hand against its borough or city page before handover, as the Irish sound-alike pairs were.

### Phase 10: towns band B (86, kill-gated)

Money order first: Wokingham, Royal Leamington Spa, Royal Tunbridge Wells, Altrincham, Hinckley, Welwyn Garden City, Bishop's Stortford, Newbury, Horsham, Haywards Heath, Brentwood, Banbury, Macclesfield. This band is expected to shed pages.

### Phase 11: maths by city (20, optional, owner decision 3)

London, Birmingham, Manchester, Leeds, Leicester, Coventry, Bristol, Sheffield, Liverpool, Nottingham, Glasgow, Edinburgh, Cardiff, Belfast, Milton Keynes, Reading, Slough, Luton, Oxford, Cambridge. Local facts come from the NCETM Maths Hub serving the area, local maths competitions and the universities' maths departments, never from school results tables.

**Total: 9 + 24 + 53 + 72 + 32 + 24 + 102 + 123 + 44 + 86 + 20 = 589 proposed.** This is the maximum the kill criterion allows, not a promise. Towns band B and the districts are where pages will be skipped. The owner can stop after any phase, and the phases are ordered so each one earns more than the next.

## 4. Every age group, on every page

The owner's range is 6 to 67. The course strip comes first on every page, chosen per page and never pasted.

- **England:** Reception, KS1 (Years 1 to 2), KS2 (Years 3 to 6, SATs, the Year 4 multiplication check), KS3 (Years 7 to 9, with GCSE options in Year 9), KS4 (GCSE), sixth form or college (A level, T Level, BTEC), university, apprenticeship.
- **Scotland:** P1 to P7, S1 to S3 (broad general education), S4 to S6 (National 4 and 5, Higher, Advanced Higher), college, university.
- **Wales:** Curriculum for Wales progression steps, Years 7 to 11, Made-for-Wales GCSEs, sixth form.
- **Northern Ireland:** P1 to P7 (the transfer test in P7), Years 8 to 14, CCEA GCSE and GCE.
- **Adults:** career changers, parents learning alongside a child, the over-50s door, professionals (the agents doors).
- Copilot Studio courses carry `meta.one_on_one_only` and are described as private-rate wherever listed. Pages for under-18s never recommend a tool whose own terms set an 18+ minimum (see the AI-tool age audit).

## 5. Keyword research: the method, and what UK searches showed on 2026-09-19

No volume tool is available, so each page records what people in that place call it, the school-stage words and what the ranking pages put in their titles. The search tool is US-located, so these readings are indicative. Search Console data for the 23 live UK pages would replace guesswork and should be shared before Phase 2 if the owner has it.

| Query family | Who ranks | What it means for us |
|---|---|---|
| best coding classes for kids UK online | Codingal location pages, FunTech's listicle, In The Playroom, Geeky Kids, The Code Zone, Software Academy, **our kids UK page**, Supermaths, Imagine STEM Academy | Winnable. Our page is already there. |
| coding classes for kids London / Manchester | Codingal (programmatic UK pages down to borough and town level, e.g. Redbridge, Watford), FunTech, Code Ninjas, Impact Academies, ComputerXplorers, Create & Learn, Manchester CoderDojo | The competition is thin programmatic pages and in-person centres. Deep, genuinely local pages win. Our line: live online, one teacher, from home. |
| A level computer science NEA tutor | The Profs, Spires, Reece Tutoring, CS Tutors UK, Superprof | Tutor marketplaces. Our edge is the JCQ-honest method: technique, never ghost-writing. |
| AI course for teenagers UK | FunTech, Outschool, Teens in AI, **our `ai-ml-course-for-teens`**, Codingal | Already ranking. Fix its "max 6" claim before building on it. |
| learn to code career change UK | Course Report, Imperial and Edinburgh bootcamps, Le Wagon, Skills Bootcamps, School of Code (free) | We never compete with free funded bootcamps on price. We sell a live teacher, flexible hours and depth. |
| UK maths and computing competitions | UKMT, olympiad.org.uk, and two guide sites: olympiads.co.uk and competemap.com | Guide sites rank without teaching. Our pages add original practice and a teacher. |

**Three keyword layers per page**, as in Ireland: the head term once each in title, H1, capsule, canonical and `.md` twin; a named AI-and-thinking H2 on every page, rotated so no two pages share it; and the local long tail from real schools, postcode areas and neighbourhoods.

**UK vocabulary, used because it is accurate:** tuition, tutor, lessons, after-school club, holiday club, half term, Year 1 to 13, key stage, SATs, 11+, 13+, GCSE, A level, sixth form, college, uni, UCAS, T Level, BTEC, apprenticeship, National 5, Higher, Advanced Higher, P7, S4, transfer test, CCEA, WJEC, Eduqas, Code Club, micro:bit, Raspberry Pi.

**Two time-zone traps:** "BST" also means Bangladesh Standard Time and "IST" means India Standard Time to our teachers, so no page writes either bare. Pages say "UK time" and "India time". The gap is five and a half hours in winter and four and a half in summer. UK clocks go back on 25 October 2026 and forward on 28 March 2027.

**"Best" is handled as in Ireland:** the superlative sits in the slug, title and meta description; geo pages keep a plain keyword H1 ("Coding classes in Leeds"); "best" doors define what best should mean and answer each criterion with evidence (4.9 from 547 Google reviews, 10,000+ students, teaching since 2020, live classes, real student projects). No competitor is named, ranked or disparaged, and there is no `AggregateRating` and no "Premium".

## 6. Competitions: the rules for every competition page

1. **A preparation page, never an affiliation.** Each page names the organiser, links to the organiser's own site, and says plainly that we are independent of it.
2. **Every date and format is re-verified at the organiser's site in the week the page is built,** and the page shows "checked on <date>". Status as read on 2026-09-19. Rows marked **(source)** were confirmed at the organiser's own page; the rest come from search summaries and are leads until confirmed. The negative statuses must be confirmed before Phase 2 starts:

| Competition | Organiser | Status |
|---|---|---|
| British Informatics Olympiad | olympiad.org.uk | 2026 round one ran 8 Dec 2025 to 23 Jan 2026 |
| UKMT challenges, Kangaroos, JMO, IMOK, BMO1/2, MCG, MOG | UKMT | Junior (Y8 and below), Intermediate (Y11 and below), Senior (Y13 and below) pathways |
| Primary Maths Challenge | Mathematical Association | 9 to 20 November 2026 |
| Scottish Mathematical Challenge | Scottish Mathematical Council | Running since 1976-77 |
| National Cipher Challenge | University of Southampton | 2026 registration reported to open 24 Sep, start 8 Oct (confirm) |
| CyberFirst Girls Competition | NCSC | Annual |
| UK Olympiad in AI (UKOAI) to IOAI | ukoai.org | IOAI 2026 in Astana, 2 to 8 August 2026 |
| Astro Pi | ESA and Raspberry Pi Foundation | Mission Zero and Mission Space Lab, up to age 19 |
| FIRST LEGO League | IET (UK delivery), LEGO Education | **(source)** "FIRST LEGO League comes to an end after the 2026-2027 BIOGLOW season"; LEGO League's first season starts August 2027. The page must say so. |
| Coolest Projects UK | Raspberry Pi Foundation | **(source)** the 2026 event took place in Bradford in May, with more than 200 young people (Foundation blog, 21 July 2026); the page targets next year |
| TeenTech Awards | TeenTech | **2026 submissions reported closed**, 2027 opening early 2027. teentech.com refused an automated check (HTTP 403, not circumvented), so this is confirmed by hand before Phase 2 |
| Sentinus Young Innovators | Sentinus (NI) | 2026 poster submissions due 29 September 2026 |
| Bebras, OUCC, Perse Coding Team Challenge | UK computing challenges calendar | OUCC is open to Bebras top-10% qualifiers and keen programmers |

3. **Original practice only.** No past paper is copied or reproduced; the pages link to the organiser's own papers. Practice problems are written fresh in the style.
4. **No entry fees printed.** They are in pounds, and the one-currency rule forbids a second currency. Pages say "entered through school; the organiser sets the fee" and link to it.
5. **No medal, score or selection promises.** The same rule as the no-grade-promises rule.
6. **Minors and AI tools:** pages for under-18s recommend only tools whose own terms allow the age.

## 7. AI search: making these pages the ones ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews cite

What is already in place (verified 2026-09-19): `robots.txt` allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot and the others; `llms.txt` (939 lines, only 6 UK mentions) and `llms-full.txt` exist; every cluster page has a `.md` twin; `scripts/indexnow-ping.js` exists. No new machinery is needed. What each page must do:

1. **An answer the engine can lift.** A capsule of 40 to 80 words directly under the H1 answering the page's head question ("What is the best way to prepare for the British Informatics Olympiad?"), and under every H2 a two-to-three sentence answer before the detail. H2s are phrased the way people ask assistants.
2. **Self-contained, sourced facts.** Every number sits in a sentence that names its source and date, so a quoted sentence stays true on its own. This is the Ireland rule, and it is exactly what AI engines prefer to cite.
3. **Tables for comparisons and calendars.** Competition dates, exam boards and stages go in real HTML tables, which engines extract cleanly.
4. **Schema:** `Service` with an `areaServed` chain (district, borough, city, nation, United Kingdom), `FAQPage` (no prices in FAQ text), `BreadcrumbList`, and visible "last checked" dates with `dateModified`. No `Event` schema for competitions we do not run, and no `AggregateRating`.
5. **`llms.txt`:** a "United Kingdom" section listing every UK page with a one-line summary, updated by the ship script.
6. **One set of brand facts everywhere.** AI engines repeat contradictions. The "max 6 students" and "$40 / GBP 32" answers found on 2026-09-19 come from our own pages or old copies of them. Phase 0 fixes both.
7. **Get indexed where the assistants look.** ChatGPT search and Copilot draw on Bing; AI Overviews and Gemini on Google. Each phase push is followed by an IndexNow ping (Bing), a sitemap resubmission in Bing Webmaster Tools and Search Console, and re-index requests for the hubs.
8. **Measure it.** A monthly AI-answer audit: the same 40 UK prompts ("best coding classes for kids in Leeds", "how to prepare for BMO1", "National 5 computing tutor online" and so on) asked in ChatGPT, Gemini, Perplexity, Copilot and Claude, logging whether we are cited and what is said. Also a GA4 channel for AI referrals (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai).
9. **Off-site corroboration is the real lever** (VISIBILITY-100X Phase 9, not started). Engines trust what several independent sources repeat. Honest routes: a listing on the competition guide sites if they accept providers, genuine answers on The Student Room, Mumsnet and Reddit with the affiliation disclosed, real teacher bios, and original data studies others can cite. Never fake reviews or undisclosed posts.

**The honest limit:** no one can make an assistant show a page. We control accuracy, clarity, crawlability and corroboration, which is everything that decides it.

## 8. Uniqueness: how 589 pages stay 589 different pages

The Ireland machinery, unchanged: one content module and dossier per page (12 `requiredMentions` present on the page and absent from every other dossier across the whole site); one distinct lesson family per page, checked site-wide (lesson families are site-wide, never per cluster); chrome-adjacent prose written fresh; seven-word shingles under 6 percent against every sibling (fail at 12); every hard number attributed in the sentence.

What is new at UK scale:

- **At least 265 lesson families are already spent** (Netherlands 131 and Ireland 134, plus the older clusters). Six hundred more cannot all be data pitfalls. A UK family bank (`$S/uk/families.md`) is seeded before Phase 1 with computing and maths ideas as well as statistics: graph search on the Tube map, shortest paths, scheduling and graph colouring, checksums and validation (the postcode format), compression, ciphers, modular arithmetic, Monte Carlo, bootstrapping, interpolation, fuzzy matching, recursion, dynamic programming, queues, caching, API pagination. Competition and exam pages naturally teach one problem-solving idea each.
- **UK open data for the place pages** (licence read first, OGL unless noted): ONS and Nomis, NRS, NISRA, StatsWales, TfL Unified API (attribution required), Bus Open Data, NaPTAN, DfT road traffic counts, Environment Agency flood and river levels, the National Tidal and Sea Level Facility, Met Office historic station data, DEFRA air quality, National Grid ESO carbon intensity, OS OpenData, council open-data portals. **Excluded:** crime data, school league tables (the never-name-the-lowest rule), health data, and any money dataset (no pound figures on UK pages).
- **Named sources only on district and borough pages:** schools, libraries and councils from their own sites, never small-area census aggregation, and no population figure on district pages.
- **Standouts never use** birthplace, citizenship, ethnicity, religion or economic status. The Census ethnicity data above orders the build and is never printed.

## 9. Design and conversion

- Place pages on `cg-` (`coding-global.css`); doors and competitions on `ag-` (`ai-global.css`). Each page has a solved accent (4.5:1 on all three paper tints) and a scoped personality block. The retired neon palette never returns.
- Market config for every module: `{ name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10 }`. The placeholder uses Ofcom's reserved drama range (07700 900000 to 900999), so it can never be a real person's number.
- A detail only the UK has, used as content on place pages: the postcode area and district (LS6, B15, EH10, BT9), alongside the council name.
- Course cards with real thumbnails are the first section, and the rendered audit runs at 1280 and 390 on every page. Four contact touchpoints plus the sticky bar; the WhatsApp prefill names the page's place; `attribution.formPage` is the page's own path.
- The +91 number is presented as Indian. No UK office, address or phone, and no `LocalBusiness`. USD only: group USD 100, one-to-one USD 150, first lesson free. Nothing about VAT. No em dashes, no emoji, no gradients.

## 10. Toolchain and Phase 0

1. **Market and pipeline:** `content/uk/` modules with the GB market; `uk_ship.sh` and `scripts/nl/uk-hubs.js` from the Irish versions; commit prefix `UK cluster:`; `UK-PROGRESS.md` tracker.
2. **Register every UK slug explicitly** in `verify-cluster-pages.js` and `check-cluster-uniqueness.js`. Never a `best-coding-class-in-` wildcard, which would sweep in 131 India pages and the Irish towns.
3. **Test lead "TEST DELETE ME UK"** from a local build (`+44`, `GB`, `United Kingdom`); the owner confirms it shows as UK in the admin panel, then deletes it.
4. **Fix the live pages (section 1.3)** with the owner's OK. Rebuild the hub in `cg-` on the same URL (decision 2), with blocks "The UK, place by place", "UK exams by nation" and "UK competitions" linking every spoke. Then IndexNow and re-index requests.
5. **Seed the lesson-family bank and the UK licence sheet.**

**Hubs and links:** the UK hub links to the nations and the big lists. Each nation page links to its cities and council areas, London to its boroughs and districts, each city to its districts, the competitions calendar to every competition, and `maths-olympiad-training-uk` to the UKMT pages. The AI UK page gets a door index, as the AI Ireland page did.

**Build budget, stated plainly.** Ireland took four build days for 134 pages. At that pace 589 pages is roughly three to four weeks of build sessions. Each push rebuilds the whole site on Netlify, which grows from about 1,040 to about 1,630 pages, and the free-tier minutes are nearly spent. So commits land page by page, and the owner pushes once per phase (about eleven pushes in total).

## 11. Decisions only the owner can make

The plan proceeds on the defaults in bold if the owner says nothing.

1. **Scale: 589 proposed, kill-gated, eleven phases, preview gate after Phase 1.** Stop after any phase.
2. **The hub: rebuild `/coding-classes-in-united-kingdom` in `cg-` at the same URL** (keeps its 36 inbound links and its aliases). The alternative is a minimal fix: remove the neon block and the pound figures, and add link blocks.
3. **Maths by city (Phase 11): include, last, kill-gated.**
4. **Live-page fixes in section 1.3: yes.** Rewrite Leicester's chrome, remove pound competitor rates from 11 pages, rename the "Premium" H2, change "max 6" to the brand fact (5 to 10), and confirm or remove "Oxbridge alumni".
5. **Derry~Londonderry: slug `derry-londonderry`,** with both names used once on the page and the council called Derry City and Strabane District Council.
6. **Admissions-adjacent pages are excluded:** Oxbridge interviews, TMUA, MAT, STEP, UCAS statements, school appeals. 11+ is included as maths teaching only.
7. **English only.** No Welsh-language or Gaelic twins.
8. **Evening demo hours are not promised** until staffing is confirmed (UK 7 pm is 00:30 India time in winter and 23:30 in summer).
9. **Commit only; the owner pushes once per phase.**

## 12. Non-goals

- No UK office, address, phone or `LocalBusiness`. No pound prices, and no pound figures of any kind on new pages.
- No new courses. The cluster sells the existing catalogue, and exam pages without a matching course sell tutoring and say so.
- No competitor rankings or comparisons by name. No affiliation implied with any competition, exam board or programme.
- No legal, tax, immigration or admissions advice. No grade, medal, selection or place promises.
- No crime, league-table, health or money datasets.

## Appendix A: every proposed slug (589), generated from the collision-checked list

Checked free on 2026-09-19 against `src/pages`, `_redirects`, `netlify.toml` and every sitemap. Order inside a phase is the build order unless the phase text above sets a money order.

**Phase 1, preview (9):** `best-coding-class-in-london` · `best-online-coding-classes-uk` · `coding-classes-in-harrow-london` · `coding-and-ai-classes-in-scotland` · `uk-coding-maths-and-ai-competitions-calendar` · `british-informatics-olympiad-preparation` · `a-level-computer-science-nea-help` · `11-plus-maths-tuition-kent` · `coding-classes-in-surrey`

**Phase 2, competitions (24):** `first-competitions-for-primary-school-children-uk` · `maths-olympiad-training-uk` · `bebras-computational-thinking-challenge-practice-uk` · `oxford-university-computing-challenge-preparation` · `perse-coding-team-challenge-preparation` · `national-cipher-challenge-preparation` · `cyberfirst-girls-competition-preparation` · `astro-pi-mission-zero-and-space-lab-help` · `coolest-projects-uk-project-ideas` · `teentech-awards-project-help` · `big-bang-competition-project-help` · `uk-olympiad-in-artificial-intelligence-preparation` · `first-lego-league-uk-coding-help` · `robocupjunior-uk-preparation` · `student-hackathons-uk` · `sentinus-young-innovators-coding-help` · `junior-mathematical-olympiad-preparation` · `intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation` · `british-mathematical-olympiad-bmo-preparation` · `mathematical-olympiad-for-girls-preparation` · `ukmt-kangaroo-rounds-practice` · `ukmt-team-maths-challenge-practice` · `primary-maths-challenge-practice` · `scottish-mathematical-challenge-practice`

**Phase 3, doors, maths doors and nations (53):** `best-coding-classes-for-teens-uk` · `best-coding-classes-for-adults-uk` · `best-python-classes-online-uk` · `ai-classes-for-kids-uk` · `online-coding-tutor-uk` · `learn-to-think-not-just-use-ai-tools-uk` · `understand-the-code-dont-copy-paste-uk` · `problem-solving-skills-through-coding-uk` · `learn-to-train-ai-not-just-prompt-it-uk` · `ks2-coding-lessons-online` · `ks3-computing-tuition-online` · `choosing-gcse-computer-science-year-9-options` · `aqa-gcse-computer-science-8525-help` · `ocr-gcse-computer-science-j277-help` · `edexcel-gcse-computer-science-1cp2-help` · `aqa-a-level-computer-science-7517-help` · `ocr-a-level-computer-science-h446-help` · `new-computing-gcse-explained` · `t-level-digital-coding-help` · `national-5-computing-science-help` · `higher-computing-science-help` · `advanced-higher-computing-science-project-help` · `wjec-gcse-computer-science-help-wales` · `wjec-gcse-digital-technology-help-wales` · `ccea-gcse-digital-technology-programming-help` · `ccea-a-level-software-systems-development-help` · `after-code-club-next-step-coding-uk` · `after-microbit-next-step-python-uk` · `raspberry-pi-coding-projects-uk` · `coding-for-home-educated-children-uk` · `online-coding-summer-course-uk` · `coding-for-university-students-uk` · `ai-agents-course-for-students-uk` · `ai-agents-course-for-professionals-uk` · `learn-to-code-over-50-uk` · `coding-before-a-degree-apprenticeship-uk` · `cyber-security-course-for-teens-uk` · `java-classes-uk` · `app-development-course-uk` · `full-stack-software-development-course-uk` · `data-science-course-uk` · `build-real-ai-projects-uk` · `ai-and-python-academy-for-girls-uk` · `national-5-maths-tuition-online` · `higher-maths-tuition-online` · `advanced-higher-maths-tuition-online` · `gcse-maths-and-numeracy-wales-help` · `ccea-gcse-maths-help` · `transfer-test-maths-practice-northern-ireland` · `multiplication-tables-check-year-4-practice` · `coding-and-ai-classes-in-wales` · `coding-and-ai-classes-in-northern-ireland` · `coding-and-ai-classes-in-england`

**Phase 4, cities (72):** `best-coding-class-in-bath` · `best-coding-class-in-bradford` · `best-coding-class-in-brighton-and-hove` · `best-coding-class-in-bristol` · `best-coding-class-in-cambridge` · `best-coding-class-in-canterbury` · `best-coding-class-in-carlisle` · `best-coding-class-in-chelmsford` · `best-coding-class-in-chester` · `best-coding-class-in-chichester` · `best-coding-class-in-colchester` · `best-coding-class-in-coventry` · `best-coding-class-in-derby` · `best-coding-class-in-doncaster` · `best-coding-class-in-durham` · `best-coding-class-in-ely` · `best-coding-class-in-exeter` · `best-coding-class-in-gloucester` · `best-coding-class-in-hereford` · `best-coding-class-in-hull` · `best-coding-class-in-lancaster` · `best-coding-class-in-leeds` · `best-coding-class-in-lichfield` · `best-coding-class-in-lincoln` · `best-coding-class-in-liverpool` · `best-coding-class-in-manchester` · `best-coding-class-in-milton-keynes` · `best-coding-class-in-newcastle-upon-tyne` · `best-coding-class-in-norwich` · `best-coding-class-in-nottingham` · `best-coding-class-in-oxford` · `best-coding-class-in-peterborough` · `best-coding-class-in-plymouth` · `best-coding-class-in-portsmouth` · `best-coding-class-in-preston` · `best-coding-class-in-ripon` · `best-coding-class-in-salford` · `best-coding-class-in-salisbury` · `best-coding-class-in-sheffield` · `best-coding-class-in-southampton` · `best-coding-class-in-southend-on-sea` · `best-coding-class-in-st-albans` · `best-coding-class-in-stoke-on-trent` · `best-coding-class-in-sunderland` · `best-coding-class-in-truro` · `best-coding-class-in-wakefield` · `best-coding-class-in-wells` · `best-coding-class-in-winchester` · `best-coding-class-in-wolverhampton` · `best-coding-class-in-worcester` · `best-coding-class-in-york` · `best-coding-class-in-bangor-wales` · `best-coding-class-in-cardiff` · `best-coding-class-in-newport-wales` · `best-coding-class-in-st-asaph` · `best-coding-class-in-st-davids` · `best-coding-class-in-swansea` · `best-coding-class-in-wrexham` · `best-coding-class-in-aberdeen` · `best-coding-class-in-dundee` · `best-coding-class-in-dunfermline` · `best-coding-class-in-edinburgh` · `best-coding-class-in-glasgow` · `best-coding-class-in-inverness` · `best-coding-class-in-perth-scotland` · `best-coding-class-in-stirling` · `best-coding-class-in-armagh` · `best-coding-class-in-bangor-northern-ireland` · `best-coding-class-in-belfast` · `best-coding-class-in-lisburn` · `best-coding-class-in-derry-londonderry` · `best-coding-class-in-newry`

**Phase 5, London boroughs (32):** `coding-classes-in-barking-and-dagenham-london` · `coding-classes-in-barnet-london` · `coding-classes-in-bexley-london` · `coding-classes-in-brent-london` · `coding-classes-in-bromley-london` · `coding-classes-in-camden-london` · `coding-classes-in-croydon-london` · `coding-classes-in-ealing-london` · `coding-classes-in-enfield-london` · `coding-classes-in-greenwich-london` · `coding-classes-in-hackney-london` · `coding-classes-in-hammersmith-and-fulham-london` · `coding-classes-in-haringey-london` · `coding-classes-in-havering-london` · `coding-classes-in-hillingdon-london` · `coding-classes-in-hounslow-london` · `coding-classes-in-islington-london` · `coding-classes-in-kensington-and-chelsea-london` · `coding-classes-in-kingston-upon-thames-london` · `coding-classes-in-lambeth-london` · `coding-classes-in-lewisham-london` · `coding-classes-in-merton-london` · `coding-classes-in-newham-london` · `coding-classes-in-redbridge-london` · `coding-classes-in-richmond-upon-thames-london` · `coding-classes-in-southwark-london` · `coding-classes-in-sutton-london` · `coding-classes-in-tower-hamlets-london` · `coding-classes-in-waltham-forest-london` · `coding-classes-in-wandsworth-london` · `coding-classes-in-westminster-london` · `coding-classes-in-the-city-of-london`

**Phase 6, 11+ maths by area (Kent is in Phase 1) (24):** `11-plus-maths-tuition-buckinghamshire` · `11-plus-maths-tuition-birmingham` · `11-plus-maths-tuition-trafford` · `11-plus-maths-tuition-sutton` · `11-plus-maths-tuition-bexley` · `11-plus-maths-tuition-kingston` · `11-plus-maths-tuition-barnet` · `11-plus-maths-tuition-enfield` · `11-plus-maths-tuition-redbridge` · `11-plus-maths-tuition-slough` · `11-plus-maths-tuition-reading` · `11-plus-maths-tuition-southend` · `11-plus-maths-tuition-essex` · `11-plus-maths-tuition-lincolnshire` · `11-plus-maths-tuition-wirral` · `11-plus-maths-tuition-gloucestershire` · `11-plus-maths-tuition-warwickshire` · `11-plus-maths-tuition-medway` · `11-plus-maths-tuition-plymouth` · `11-plus-maths-tuition-torbay` · `11-plus-maths-tuition-bournemouth-christchurch-and-poole` · `11-plus-maths-tuition-calderdale` · `11-plus-maths-tuition-hertfordshire` · `11-plus-maths-tuition-wolverhampton-and-walsall`

**Phase 7, counties, council areas and regions (Surrey is in Phase 1) (102):** `coding-classes-in-bedfordshire` · `coding-classes-in-berkshire` · `coding-classes-in-buckinghamshire` · `coding-classes-in-cambridgeshire` · `coding-classes-in-cheshire` · `coding-classes-in-cornwall` · `coding-classes-in-cumbria` · `coding-classes-in-derbyshire` · `coding-classes-in-devon` · `coding-classes-in-dorset` · `coding-classes-in-county-durham` · `coding-classes-in-east-riding-of-yorkshire` · `coding-classes-in-east-sussex` · `coding-classes-in-essex` · `coding-classes-in-gloucestershire` · `coding-classes-in-greater-manchester` · `coding-classes-in-hampshire` · `coding-classes-in-herefordshire` · `coding-classes-in-hertfordshire` · `coding-classes-in-isle-of-wight` · `coding-classes-in-kent` · `coding-classes-in-lancashire` · `coding-classes-in-leicestershire` · `coding-classes-in-lincolnshire` · `coding-classes-in-merseyside` · `coding-classes-in-norfolk` · `coding-classes-in-north-yorkshire` · `coding-classes-in-northamptonshire` · `coding-classes-in-northumberland` · `coding-classes-in-nottinghamshire` · `coding-classes-in-oxfordshire` · `coding-classes-in-rutland` · `coding-classes-in-shropshire` · `coding-classes-in-somerset` · `coding-classes-in-south-yorkshire` · `coding-classes-in-staffordshire` · `coding-classes-in-suffolk` · `coding-classes-in-tyne-and-wear` · `coding-classes-in-warwickshire` · `coding-classes-in-the-west-midlands` · `coding-classes-in-west-sussex` · `coding-classes-in-west-yorkshire` · `coding-classes-in-wiltshire` · `coding-classes-in-worcestershire` · `coding-classes-in-aberdeenshire` · `coding-classes-in-angus` · `coding-classes-in-argyll-and-bute` · `coding-classes-in-clackmannanshire` · `coding-classes-in-dumfries-and-galloway` · `coding-classes-in-east-ayrshire` · `coding-classes-in-east-dunbartonshire` · `coding-classes-in-east-lothian` · `coding-classes-in-east-renfrewshire` · `coding-classes-in-falkirk` · `coding-classes-in-fife` · `coding-classes-in-highland` · `coding-classes-in-inverclyde` · `coding-classes-in-midlothian` · `coding-classes-in-moray` · `coding-classes-in-na-h-eileanan-siar` · `coding-classes-in-north-ayrshire` · `coding-classes-in-north-lanarkshire` · `coding-classes-in-orkney` · `coding-classes-in-perth-and-kinross` · `coding-classes-in-renfrewshire` · `coding-classes-in-scottish-borders` · `coding-classes-in-shetland` · `coding-classes-in-south-ayrshire` · `coding-classes-in-south-lanarkshire` · `coding-classes-in-west-dunbartonshire` · `coding-classes-in-west-lothian` · `coding-classes-in-anglesey` · `coding-classes-in-blaenau-gwent` · `coding-classes-in-bridgend` · `coding-classes-in-caerphilly-county-borough` · `coding-classes-in-carmarthenshire` · `coding-classes-in-ceredigion` · `coding-classes-in-conwy` · `coding-classes-in-denbighshire` · `coding-classes-in-flintshire` · `coding-classes-in-gwynedd` · `coding-classes-in-merthyr-tydfil-county-borough` · `coding-classes-in-monmouthshire` · `coding-classes-in-neath-port-talbot` · `coding-classes-in-pembrokeshire` · `coding-classes-in-powys` · `coding-classes-in-rhondda-cynon-taf` · `coding-classes-in-torfaen` · `coding-classes-in-vale-of-glamorgan` · `coding-classes-in-antrim-and-newtownabbey` · `coding-classes-in-causeway-coast-and-glens` · `coding-classes-in-fermanagh-and-omagh` · `coding-classes-in-mid-and-east-antrim` · `coding-classes-in-mid-ulster` · `coding-and-ai-classes-in-south-east-england` · `coding-and-ai-classes-in-east-of-england` · `coding-and-ai-classes-in-south-west-england` · `coding-and-ai-classes-in-west-midlands-region` · `coding-and-ai-classes-in-east-midlands` · `coding-and-ai-classes-in-yorkshire-and-the-humber` · `coding-and-ai-classes-in-north-west-england` · `coding-and-ai-classes-in-north-east-england`

**Phase 8, towns band A (123):** `best-coding-class-in-northampton` · `best-coding-class-in-luton` · `best-coding-class-in-reading` · `best-coding-class-in-bournemouth` · `best-coding-class-in-bolton` · `best-coding-class-in-swindon` · `best-coding-class-in-warrington` · `best-coding-class-in-slough` · `best-coding-class-in-telford` · `best-coding-class-in-ipswich` · `best-coding-class-in-blackpool` · `best-coding-class-in-middlesbrough` · `best-coding-class-in-huddersfield` · `best-coding-class-in-poole` · `best-coding-class-in-watford` · `best-coding-class-in-blackburn` · `best-coding-class-in-crawley` · `best-coding-class-in-stockport` · `best-coding-class-in-basingstoke` · `best-coding-class-in-basildon` · `best-coding-class-in-cheltenham` · `best-coding-class-in-gateshead` · `best-coding-class-in-worthing` · `best-coding-class-in-rochdale` · `best-coding-class-in-oldham` · `best-coding-class-in-birkenhead` · `best-coding-class-in-maidstone` · `best-coding-class-in-gillingham` · `best-coding-class-in-solihull` · `best-coding-class-in-st-helens` · `best-coding-class-in-west-bromwich` · `best-coding-class-in-eastbourne` · `best-coding-class-in-bedford` · `best-coding-class-in-hemel-hempstead` · `best-coding-class-in-stevenage` · `best-coding-class-in-southport` · `best-coding-class-in-harlow` · `best-coding-class-in-darlington` · `best-coding-class-in-hastings` · `best-coding-class-in-nuneaton` · `best-coding-class-in-halifax` · `best-coding-class-in-hartlepool` · `best-coding-class-in-aylesbury` · `best-coding-class-in-grimsby` · `best-coding-class-in-wallasey` · `best-coding-class-in-stockton-on-tees` · `best-coding-class-in-weston-super-mare` · `best-coding-class-in-high-wycombe` · `best-coding-class-in-ashford` · `best-coding-class-in-redditch` · `best-coding-class-in-wigan` · `best-coding-class-in-scunthorpe` · `best-coding-class-in-bury` · `best-coding-class-in-bracknell` · `best-coding-class-in-burnley` · `best-coding-class-in-rugby` · `best-coding-class-in-guildford` · `best-coding-class-in-chatham` · `best-coding-class-in-newcastle-under-lyme` · `best-coding-class-in-chesterfield` · `best-coding-class-in-burton-upon-trent` · `best-coding-class-in-tamworth` · `best-coding-class-in-shrewsbury` · `best-coding-class-in-woking` · `best-coding-class-in-harrogate` · `best-coding-class-in-crewe` · `best-coding-class-in-south-shields` · `best-coding-class-in-stafford` · `best-coding-class-in-rotherham` · `best-coding-class-in-barnsley` · `best-coding-class-in-lowestoft` · `best-coding-class-in-walsall` · `best-coding-class-in-gosport` · `best-coding-class-in-dartford` · `best-coding-class-in-bognor-regis` · `best-coding-class-in-corby` · `best-coding-class-in-paignton` · `best-coding-class-in-maidenhead` · `best-coding-class-in-rochester` · `best-coding-class-in-ellesmere-port` · `best-coding-class-in-loughborough` · `best-coding-class-in-dudley` · `best-coding-class-in-dewsbury` · `best-coding-class-in-mansfield` · `best-coding-class-in-margate` · `best-coding-class-in-kettering` · `best-coding-class-in-cannock` · `best-coding-class-in-sale` · `best-coding-class-in-taunton` · `best-coding-class-in-runcorn` · `best-coding-class-in-farnborough` · `best-coding-class-in-tynemouth` · `best-coding-class-in-halesowen` · `best-coding-class-in-paisley` · `best-coding-class-in-east-kilbride` · `best-coding-class-in-livingston` · `best-coding-class-in-hamilton-scotland` · `best-coding-class-in-cumbernauld` · `best-coding-class-in-kirkcaldy` · `best-coding-class-in-ayr` · `best-coding-class-in-kilmarnock` · `best-coding-class-in-coatbridge` · `best-coding-class-in-greenock` · `best-coding-class-in-glenrothes` · `best-coding-class-in-airdrie` · `best-coding-class-in-irvine` · `best-coding-class-in-dumfries` · `best-coding-class-in-motherwell` · `best-coding-class-in-st-andrews` · `best-coding-class-in-musselburgh` · `best-coding-class-in-elgin` · `best-coding-class-in-portadown` · `best-coding-class-in-lurgan` · `best-coding-class-in-ballymena` · `best-coding-class-in-newtownards` · `best-coding-class-in-carrickfergus` · `best-coding-class-in-coleraine` · `best-coding-class-in-larne` · `best-coding-class-in-banbridge` · `best-coding-class-in-enniskillen` · `best-coding-class-in-dungannon` · `best-coding-class-in-downpatrick` · `best-coding-class-in-strabane`

**Phase 9, districts (44):** `coding-classes-in-wembley-london` · `coding-classes-in-southall-london` · `coding-classes-in-ilford-london` · `coding-classes-in-edgware-london` · `coding-classes-in-stanmore-london` · `coding-classes-in-pinner-london` · `coding-classes-in-hayes-london` · `coding-classes-in-wimbledon-london` · `coding-classes-in-finchley-london` · `coding-classes-in-twickenham-london` · `coding-classes-in-chiswick-london` · `coding-classes-in-dulwich-london` · `coding-classes-in-hampstead-london` · `coding-classes-in-sutton-coldfield-birmingham` · `coding-classes-in-edgbaston-birmingham` · `coding-classes-in-harborne-birmingham` · `coding-classes-in-moseley-birmingham` · `coding-classes-in-kings-heath-birmingham` · `coding-classes-in-didsbury-manchester` · `coding-classes-in-chorlton-manchester` · `coding-classes-in-withington-manchester` · `coding-classes-in-wythenshawe-manchester` · `coding-classes-in-headingley-leeds` · `coding-classes-in-roundhay-leeds` · `coding-classes-in-horsforth-leeds` · `coding-classes-in-oadby-leicester` · `coding-classes-in-wigston-leicester` · `coding-classes-in-evington-leicester` · `coding-classes-in-clifton-bristol` · `coding-classes-in-bishopston-bristol` · `coding-classes-in-kingswood-bristol` · `coding-classes-in-west-end-glasgow` · `coding-classes-in-shawlands-glasgow` · `coding-classes-in-morningside-edinburgh` · `coding-classes-in-stockbridge-edinburgh` · `coding-classes-in-leith-edinburgh` · `coding-classes-in-roath-cardiff` · `coding-classes-in-llandaff-cardiff` · `coding-classes-in-malone-belfast` · `coding-classes-in-ormeau-belfast` · `coding-classes-in-ecclesall-sheffield` · `coding-classes-in-crookes-sheffield` · `coding-classes-in-west-bridgford-nottingham` · `coding-classes-in-earlsdon-coventry`

**Phase 10, towns band B (kill-gated) (86):** `best-coding-class-in-widnes` · `best-coding-class-in-huyton-with-roby` · `best-coding-class-in-scarborough` · `best-coding-class-in-gravesend` · `best-coding-class-in-bebington` · `best-coding-class-in-kidderminster` · `best-coding-class-in-stourbridge` · `best-coding-class-in-barry` · `best-coding-class-in-smethwick` · `best-coding-class-in-weymouth` · `best-coding-class-in-brentwood` · `best-coding-class-in-barrow-in-furness` · `best-coding-class-in-wellingborough` · `best-coding-class-in-sittingbourne` · `best-coding-class-in-macclesfield` · `best-coding-class-in-bootle` · `best-coding-class-in-carlton` · `best-coding-class-in-clacton-on-sea` · `best-coding-class-in-beeston` · `best-coding-class-in-banbury` · `best-coding-class-in-torquay` · `best-coding-class-in-folkestone` · `best-coding-class-in-kingswinford` · `best-coding-class-in-bloxwich` · `best-coding-class-in-welwyn-garden-city` · `best-coding-class-in-washington` · `best-coding-class-in-royal-leamington-spa` · `best-coding-class-in-royal-tunbridge-wells` · `best-coding-class-in-hinckley` · `best-coding-class-in-wokingham` · `best-coding-class-in-crosby` · `best-coding-class-in-horsham` · `best-coding-class-in-yeovil` · `best-coding-class-in-thundersley-and-south-benfleet` · `best-coding-class-in-altrincham` · `best-coding-class-in-willenhall` · `best-coding-class-in-christchurch` · `best-coding-class-in-keighley` · `best-coding-class-in-ashton-under-lyne` · `best-coding-class-in-andover` · `best-coding-class-in-eastleigh` · `best-coding-class-in-bridgwater` · `best-coding-class-in-kings-lynn` · `best-coding-class-in-tipton` · `best-coding-class-in-west-molesey` · `best-coding-class-in-cwmbran` · `best-coding-class-in-havant` · `best-coding-class-in-middleton` · `best-coding-class-in-kirkby` · `best-coding-class-in-leigh` · `best-coding-class-in-castleford` · `best-coding-class-in-wallsend` · `best-coding-class-in-boston` · `best-coding-class-in-oldbury` · `best-coding-class-in-bletchley` · `best-coding-class-in-grantham` · `best-coding-class-in-batley` · `best-coding-class-in-grays` · `best-coding-class-in-bexhill-on-sea` · `best-coding-class-in-trowbridge` · `best-coding-class-in-cheshunt` · `best-coding-class-in-worksop` · `best-coding-class-in-braintree` · `best-coding-class-in-leighton-buzzard` · `best-coding-class-in-lytham-st-annes` · `best-coding-class-in-fareham` · `best-coding-class-in-newbury` · `best-coding-class-in-llanelli` · `best-coding-class-in-ramsgate` · `best-coding-class-in-urmston` · `best-coding-class-in-hatfield` · `best-coding-class-in-bury-st-edmunds` · `best-coding-class-in-eccles` · `best-coding-class-in-bishops-stortford` · `best-coding-class-in-neath` · `best-coding-class-in-hoddesdon` · `best-coding-class-in-bamber-bridge` · `best-coding-class-in-haywards-heath` · `best-coding-class-in-arnold` · `best-coding-class-in-aberdare` · `best-coding-class-in-pontypridd` · `best-coding-class-in-port-talbot` · `best-coding-class-in-colwyn-bay` · `best-coding-class-in-pontypool` · `best-coding-class-in-penarth` · `best-coding-class-in-rhyl`

**Phase 11, maths by city (optional) (20):** `maths-tuition-in-london` · `maths-tuition-in-birmingham` · `maths-tuition-in-manchester` · `maths-tuition-in-leeds` · `maths-tuition-in-leicester` · `maths-tuition-in-coventry` · `maths-tuition-in-bristol` · `maths-tuition-in-sheffield` · `maths-tuition-in-liverpool` · `maths-tuition-in-nottingham` · `maths-tuition-in-glasgow` · `maths-tuition-in-edinburgh` · `maths-tuition-in-cardiff` · `maths-tuition-in-belfast` · `maths-tuition-in-milton-keynes` · `maths-tuition-in-reading` · `maths-tuition-in-slough` · `maths-tuition-in-luton` · `maths-tuition-in-oxford` · `maths-tuition-in-cambridge`
