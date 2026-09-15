# Ireland cluster: progress tracker

Spec: `docs/superpowers/specs/2026-09-15-ireland-cluster-design.md`
Method and pipeline: the Netherlands cluster (`NETHERLANDS-PROGRESS.md`, `scripts/nl`).
Status 2026-09-16: Phase 1 BUILT on branch ireland-cluster (6 preview pages, all gated, linked from both Irish hubs), NOT pushed. Awaiting the owner's visible yes on the preview before Phases 2 to 7.

Per-page pipeline: research (8+ place facts at primary sources, or skip) -> collision check (dossier strings + data trap) -> `content/ie/<slug>.js` -> build -> check (rendered audit 1280 + 390, uniqueness under 6%, verify) -> link down from hub and parent -> record here -> commit `IE cluster: <slug> (<type>)` -> push.

## Task 0 (pre-flight)

- [x] Parameterise the pipeline (market config: `+353` / `IE` / `Ireland`, `/api/callback/request`, phone rule, Irish time prose, tracker, commit prefix); grep renderers clean of NL values
- [x] Register Irish slugs explicitly in verify and uniqueness scripts (no `best-coding-class-in-` wildcard: 131 India pages share it)
- [x] One test lead "TEST DELETE ME IE" sent 2026-09-16 through the Dublin page form: HTTP 201 with +353 / IE / Ireland and formPage /best-coding-class-in-dublin (owner to confirm it shows as Ireland in the admin panel, then delete it)
- [x] Finisher and link-down helpers checked into `scripts/` (scripts/nl/finish.js, scripts/nl/link-down.js)

## Queue (134)

Phase 1, preview (6): best-coding-class-in-dublin · best-online-coding-classes-ireland · best-coding-class-in-the-world · understand-the-code-dont-copy-paste-ireland · leaving-cert-computer-science-grinds-online · coding-classes-in-dun-laoghaire-rathdown

Phase 2, doors (20): best-coding-classes-for-kids-ireland · best-coding-classes-for-teens-ireland · best-coding-classes-for-adults-ireland · best-python-classes-online-ireland · learn-to-think-not-just-use-ai-tools-ireland · problem-solving-skills-through-coding-ireland · learn-to-train-ai-not-just-prompt-it-ireland · junior-cycle-coding-short-course-help · transition-year-coding-course-ireland · online-coding-summer-course-ireland · after-coderdojo-next-step-coding-ireland · coding-for-college-students-ireland · ai-agents-course-for-professionals-ireland · ai-agents-course-for-students-ireland · java-classes-ireland · app-development-course-ireland · full-stack-software-development-course-ireland · data-science-course-ireland · build-real-ai-projects-ireland · ai-and-python-academy-for-girls-ireland

Phase 3, cities (4): best-coding-class-in-cork · best-coding-class-in-limerick · best-coding-class-in-galway · best-coding-class-in-waterford

Phase 4, counties and Dublin local authorities (25): coding-classes-in-county-kildare · -meath · -wicklow · coding-classes-in-fingal · coding-classes-in-south-dublin · coding-classes-in-county-cork · -galway · -westmeath · -carlow · -cavan · -clare · -donegal · -kerry · -kilkenny · -laois · -leitrim · -longford · -louth · -mayo · -monaghan · -offaly · -roscommon · -sligo · -tipperary · -wexford

Phase 5, provinces (4, kill-gated): coding-and-ai-classes-in-leinster · -munster · -connacht · -ulster

Phase 6, districts (26, kill-gated): coding-classes-in-<area>-dublin for blanchardstown · castleknock · lucan · sandyford · dundrum · tallaght · clondalkin · rathfarnham · dun-laoghaire · blackrock · stillorgan · rathmines · drumcondra · glasnevin · clontarf · howth · finglas · ballymun · crumlin · terenure; coding-classes-in-<area>-cork for ballincollig · douglas · bishopstown · glanmire; coding-classes-in-knocknacarra-galway; coding-classes-in-castletroy-limerick

Phase 7, towns above 10,000 (49, kill-gated): best-coding-class-in-<town> for swords · maynooth · leixlip · celbridge · malahide · naas · athlone · greystones · bray · ashbourne · ratoath · carrigaline · drogheda · dundalk · navan · ennis · carlow · kilkenny · tralee · newbridge · balbriggan · portlaoise · mullingar · letterkenny · wexford · sligo · clonmel · laytown-bettystown · tullamore · killarney · cobh · midleton · mallow · arklow · castlebar · wicklow · enniscorthy · cavan · gorey · tramore · athy · longford · rush · portmarnock · skerries · ballina · kildare · shannon · dungarvan

## Done

| # | Slug | Type | Words | Worst overlap | AI H2 used | Trap used | Commit |
|---|------|------|-------|---------------|------------|-----------|--------|
| 1 | best-coding-class-in-the-world (bcw, #70530B) | ag- door, worldwide criteria (Phase 1 preview) | 4,332 | 1% vs vibe-coding-vs-building-ai-netherlands | eight tests for any coding class: 5 from studies read in full (MOOC completion 3.13 percent, Lister fragile grasp, Lopez r = 0.56, PRIMM r = .13, Prather illusion of competence; tutoring d = 0.79, 0.37 SD) and 3 practice, each answered, with our limits | none (ag- door) | acd03bad |
| 2 | best-coding-class-in-dublin (dub, #8F3736) | cg- city, hub for the Dublin areas (Phase 1 preview) | 3,940 | 1.8% vs coding-classes-in-roermond | Dublin is the only place whose Eircode keeps the postal district (D15); Census 2022 1,263,219 city and suburbs, 10,308 Indian citizens in Dublin City, 41 percent work from home; 14 of the first 40 LCCS schools | stale readings: Dublin Bikes Q1 2019, 1,094,127 of 2,912,994 rows (about 38 percent) repeat LAST UPDATED; station 34 renamed and moved | 9701a321 |
| 3 | coding-classes-in-dun-laoghaire-rathdown (dlr, #2A5B88) | cg- county / local authority (Phase 1 preview) | 3,950 | 3.8% vs best-coding-class-in-dublin | DLR in Census 2022: 233,860, the highest national rate of working from home at least part-time, 4,958 Indian citizens; Kingston 1821; Dalkey School Project 1978; Sandyford Business District; four routing keys A94, A96, D14, D18 | censored values: bathing water E. coli written as <10 (102 of 337 in 2022) vanish when coerced to numbers; a site renamed between years | d113ecf1 |
| 4 | best-online-coding-classes-ireland (boi, #0E4B00) | ag- door, national best (Phase 1 preview) | 3,697 | 2.1% vs best-coding-class-in-the-world | where coding sits in Irish schooling (eight-year primary, Coding short course about 100 hours NFQ Level 3, LCCS 180 hours, 194 of 722 post-primary schools in 2024); six checks with the question to ask a provider; clubs, camps, grinds, recorded courses and live classes compared by what each is for | none (ag- door) | 214e1e25 |
| 5 | understand-the-code-dont-copy-paste-ireland (ucp, #681944) | ag- door, think shape (Phase 1 preview) | 3,548 | 3.1% vs best-online-coding-classes-ireland | what Irish guidance says about AI and your own work: DoE AI guidance Oct 2025 (AI material treated like material the candidate did not produce; must be referenced), LCCS coursework individual and the student's own, JC Coding CBA referencing, SEC coursework rules 2025-26 (school's published copy); predict, write, ask, change, explain; the AI record; we never touch graded work | none (ag- door) | 14603293 |
| 6 | leaving-cert-computer-science-grinds-online (lcg, #29396C) | ag- door, Irish exam vernacular (Phase 1 preview) | 3,250 | 3.6% vs understand-the-code-dont-copy-paste-ireland | LCCS as its specifications set it out: 180 hours, three strands, four ALT contexts, 70/30 now and 60/40 from September 2027, Python in the exam and Python and Javascript in the coursework, HTML report with video, individual work; a two-year Fifth and Sixth Year plan; no grade or points promise; the coursework is never touched | none (ag- door) | e7ba3f47 |
| 7 | after-coderdojo-next-step-coding-ireland (acq, #800515) | ag- door, after a coding club (Phase 2) | 3,397 | 5.3% vs understand-the-code-dont-copy-paste-ireland | CoderDojo in its own words (Cork July 2011, National Software Centre, Whelton and Liao; 2017 merger, independent Irish charity; over 600 active Dojos in 2026); almost 90% of club leaders say young people want more; Scratch-to-Python bridge; no affiliation | none (ag- door) | 1bd576e4 |
| 8 | ai-and-python-academy-for-girls-ireland (agi, #5A311A) | ag- door, girls (Phase 2) | 3,208 | 1.2% vs best-online-coding-classes-ireland | participation only: Eurostat 22.0% of ICT specialists 2025, HEA 23.1% of ICT students; CodePlus 23,000 of whom 3,982 in coding workshops, intent 30%+ to 17% applied; Teen-Turn; mixed classes, no girls-only batches, no claim girls learn differently | none (ag- door) | c38719f8 |
| 9 | junior-cycle-coding-short-course-help (jcc, #77436B) | ag- door, Junior Cycle (Phase 2) | 3,339 | 1.8% vs after-coderdojo-next-step-coding-ireland | the Coding short course CBA from the NCCA 2025 guidelines: Putting the Pieces Together, Software Project (teams, individual role) or Coding Portfolio (3 to 5 pieces), 2nd or 3rd year only, 6 to 8 hours, four descriptors best fit, JCPA; AI outcomes 2.8 and 2.9; we never touch assessed work | none (ag- door) | 37cc25ba |
| 10 | best-coding-classes-for-kids-ireland (bki, #4C4300) | ag- door, kids (Phase 2) | 3,409 | 2.1% vs after-coderdojo-next-step-coding-ireland | Primary Curriculum Framework 9 March 2023: STEM area, Being a digital learner, STE minimum 3h20 / 4h / 5h a month, rollout 2025/26 introductory then one area a year; class size 21.9 (19.7 junior infants, 23.5 fourth to sixth); 256 Irish-medium primary schools | CSO baby names VSA50/VSA60: Sean 185 vs Sean 38 separate rows; 2018 fada break (Sean 453 in 2017 vs 91 + Sean 317); 10,336 distinct names but table only 3+ (1,071 boys' names = 23,729); ties skip rank 7 | c54f48ef |
| 11 | best-coding-classes-for-teens-ireland (bti, #516000) | ag- door, teens (Phase 2) | 3,251 | 2.3% vs best-coding-classes-for-kids-ireland | 429,653 post-primary; LC 56.2% / LCVP 36.8% / LCA 7.1%; TY 62,065; CSO 16-29: 99% daily, 57% almost constantly, 65% GenAI (16+ caveat); JCPA from 2017; 74 Irish-medium post-primary schools | EDA70: LC is three programmes (81,021 vs 144,409, about 44% undercount); All senior cycle includes TY (39.3% vs 56.2%); Junior Certificate 1st year renamed Junior Cycle Year 1 in 2016/17 | (this commit) |

## Skipped (kill criterion)

| Slug | Reason |
|------|--------|

## Open issues

- Live hub `/coding-classes-in-ireland` has an H2 "One price: USD 150 a month" while also selling USD 100 groups: owner to decide.
- Research leads in the spec (CSO urban areas and Indian-citizen counts, Junior Cycle Coding ~100 hours, LCCS 180 hours, CodePlus reach) are NOT page-ready; re-verify at primary before any page uses them.
- Pre-existing, not from this cluster: uniqueness FAIL Leicester vs Birmingham (12.6%) on main.
- Hub links added 2026-09-16: 'Ireland, page by page' on /coding-classes-in-ireland and 'More for Irish learners' on /ai-and-machine-learning-classes-in-ireland; extend both as pages ship.
