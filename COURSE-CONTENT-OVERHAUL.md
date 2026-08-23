# Course Content Overhaul (2026-08)

Owner request 2026-08-23: understand each course in detail, improve every course's content with
its own SEO keywords, describe it more clearly, make durations realistic (cut inflated ones,
keep about 2 months of margin in hand for weaker students), clear time frames in each phase,
ultra-deep current content. One course at a time, quality over speed.

## The standard every course is brought to

Reference example of the house style done right: `content/courses/data/html-css-beginners.json`.

### meta
- `title`: primary search phrase + audience + concrete promise, roughly 55-65 chars.
  Pattern: "Python for Teens: Complete Course from Beginner to Advanced".
- `description`: 150-160 chars, starts with the primary phrase, names audience, format
  (live online classes), and 2-3 concrete things learned. No hype words.
- `keywords`: 10-14 real search PHRASES (not single words), ordered by importance.
  First 10 feed schema `about`, first 15 feed `teaches`. Mix: primary phrase, "online ...
  classes for ...", topic-specific phrases, one India phrase. No keyword invented claims.
- `duration`: RANGE format, upper bound = the 2-month weak-student margin baked in:
  `"8-10 months (32-40 weeks)"`. Curriculum is labeled to the LOWER bound.
  Exam-cycle courses (A-Level, IB DP, Class 11-12, GCSE/IGCSE support) keep their real
  exam-calendar span and say so ("aligned to the 2-year exam cycle, joinable any month").
- `commitment`: honest and parseable: "2 live classes/week + 2-3 hours practice"
  (feeds ISO courseWorkload in schema).
- `level`: audience + honest starting point ("Absolute beginner, ages 13-18").
- `certification`: "Course-completion certificate from Modern Age Coders" (house standard,
  no invented certification names).
- `dateModified`: set to the real edit date (renders "Syllabus updated <Month Year>").
- NEVER touch: `slug` (URL contract), `date` (real first-publish date), `price` block,
  `image_path`, `taxonomy`, `one_on_one_only`.

### Realistic-duration rubric (2 live classes/week baseline)
- Single language, zero to advanced, teens: 8-10 months
- Single language, college pace: 6-8 months
- Framework track (React, Flutter, MERN incl. projects): 6-8 months
- Full-stack complete: 10-12 months
- Kids complete journeys (block coding etc.): 8-10 months
- Focused tool courses (MySQL, Office, single-tool): 3-5 months
- AI/ML or data science complete: 9-12 months
- School-support maths: one school year, 10-12 months per level
- Exam prep: aligned to the real exam calendar, not inflated

### program_overview
- tagline: one specific sentence, no "ultimate/wizard/transformation" hype.
- description: 2-3 paragraphs; what the course actually is, what gets built, how the arc
  works. Specific > superlative. Age-appropriate.
- what_makes_this_different: 5-6 concrete, verifiable points.
- learning_path: one line per phase, matching the phase titles and new time frames.
- career_outcomes: honest outcomes (portfolio, skills, readiness for named next steps).
  NO "Senior Developer ready", NO job promises, NO salary claims.

### curriculum (phase_N keys)
- Phase titles: "PHASE N: Name (Months X-Y, Weeks A-B)" - time frame ALWAYS present.
- Month titles: "Month N: Name" or "Months N-M: Name" + `weeks` label ("Weeks 1-4").
- Week keys encode the range chip: `week_1_2` renders "Weeks 1-2". Renumber on compression.
- Keep the deep topic lists (they are good); prune filler/duplicate weeks; refresh stale
  tool references; compress the timeline labels to the new realistic duration.

### Assessment system (owner-mandated 2026-08-23, EVERY course)
- Classwork in every session; homework after every class (week `practice` lines).
- Every month/topic ends with an assignment that MIXES new questions with earlier
  topics (spaced repetition, "so knowledge compounds instead of fading").
- Every phase ends with a cumulative check (`assessment` on the phase's last week).
- The course ends with a FINAL EXAM (practical + written, questions from every phase).
  Pass = certificate. Fall short = focused revision + free retest.
- meta.certification: "Certificate from Modern Age Coders, awarded on passing the final exam".
- course_guarantees gains `real_assessment` line + certificate line becomes
  "A certificate you earn by passing the final exam, with a free retest after revision if needed."
- weekly_structure gains a `homework` entry; certification.completion explains exam + retest.
- One FAQ: "How is ... assessed? Is the certificate just for attending?" with the full system.
- Positioning line: real knowledge, real work, real projects, depth over dopamine.

### faqs (8-10, search-intent phrased)
- Include: a pace/duration FAQ ("Most students finish in X months at 2 classes a week;
  students who need more practice take up to Y months, the pace adapts").
- Price FAQs: keep the existing single-region price sentences exactly; fix any
  duration-based arithmetic to the new duration; NEVER add new price text or a second currency.
- No claims of: job referrals, lifetime access, 24/7 Discord, recorded-session promises.
- Stats only from `scripts/brand-facts.json` (10,000+ students, 547 reviews, 4.9, est 2020).

### Voice rules (site-wide, owner-mandated)
- No em-dashes anywhere. No emoji on course pages. No "AI look" superlative stacking.
- Specific nouns and numbers over adjectives. British-neutral international English.

## Verification per course (before its commit)
1. JSON parses; `node scripts/generate-courses.js` regenerates cleanly.
2. Rendered `content/courses/generated/<slug>/index.html` read back: title, duration,
   phase chips, FAQ text correct; no unreplaced tokens, no em-dashes.
3. `npm run pricing:check` still passes.
4. One commit per course: `Course content: <slug> (<old dur> -> <new dur>)`.

## Progress tracker

Status: [ ] pending · [~] in progress · [x] done+committed

### Tier 1: inflated 24-month masterclasses
- [x] python-teens.json (24mo -> 10-12mo) DONE 2026-08-23: 40wk/4 phases, full SEO meta, assessment system, banned claims removed
  - NOTE pre-existing slug collision found: applied-mathematics.json and data-analytics-mathematics.json both declare slug "data-analytics-mathematics-masterclass"; applied-mathematics never reaches the site. Fix when those courses are done (new slug needs sitemap+routing wiring).
- [x] kids-coding.json (24mo -> 10-12mo) DONE 2026-08-23: 40wk/4 phases; cut age-floor violations (ChatGPT/Midjourney/TikTok marketing for 7yos), Adobe/Office/entrepreneurship padding, fake parent-dashboard perk; kid-safe AI (ML4Kids/Teachable Machine); ages 6-12 per brand
- [x] java-teens.json (24mo -> 10-12mo) DONE 2026-08-23: 40wk/4 phases, Minecraft modding promoted into month 6, ICSE/ISC/AP-CSA SEO angle, Spring Cloud/K8s/Android-production cut, assessment system
- [x] full-stack-teens.json (24mo -> 12-14mo) DONE 2026-08-23: 48wk/4 phases, one honest stack (React+TS+Next taste, Node/Express/Mongo+SQL), AI-features week kept, cut Vue/Angular/Svelte tour + AWS/K8s/SAML + teen freelancing/startup/income promises
- [x] full-stack-web-development-college.json (24mo -> 12-14mo) DONE 2026-08-23: 48wk/4 phases; kept pro depth (TS, both DBs, Docker, CI, system-design intro, AI features), cut K8s/Terraform/microservices + client-project/senior-level claims; salary_expectations kept verbatim
- [x] game-dev-teens.json (24mo -> 10-12mo) DONE 2026-08-23: 40wk/4 phases; Unity+C# deep with Blender, honest Unreal taste week, narrative+accessibility kept; cut VR/AR/esports/cloud-gaming/studio-business, Steam/console publishing promises, Jira/Perforce corporate pipeline
- [x] elementary-mathematics.json (24mo -> 3 placement levels x 10-12mo) DONE 2026-08-23: Level A (G1-2) / B (G3-4) / C (G5), level exams w/ retest + promotion, concrete-pictorial-abstract framing, 20-30min daily practice (was 10-15 hrs/wk!), cut theory-videos/badges/adaptive-path claims
- [x] college-level-maths.json (24mo -> 3 academic-year tracks) DONE 2026-08-23: Track 1 calc+LA / Track 2 ODE+discrete+prob / Track 3 analysis+algebra+topology; placement by syllabus, track exams w/ retest; cut grad-level padding (module theory, algebraic topology, PDE/numerical year, research seminar) + 20-25 hrs/wk claim
- [x] data-analytics-mathematics.json (24mo -> 12-14mo) DONE 2026-08-23: 48wk/4 phases (stats truth, LA+inference, ML maths, optimization/NN/Bayes/time-series/AB); cut big-data/MLOps/GIS year; SLUG COLLISION FIXED: deleted applied-mathematics.json (dead older clone of the same slug that never reached the site)
- [x] java-programming-college.json DONE 2026-08-23: 10-12mo, core Java depth -> engine room (collections/concurrency/patterns/JDBC/JUnit) -> Spring Boot job stack; servlet-era + build-tools filler cut, weeks renumbered 1-44

### Tier 2: broken-format (no phase structure)
- [x] scratch-kids.json DONE 2026-08-23 (structure was fine, direct month_ keys): 3mo -> "3-4 months" margin format; ages unified 6-12 (was 6-14/7-16 mix), 50+ -> 35+ honest count, cut recorded-replays + LEGO Mindstorms (discontinued), capstone options surfaced (were in invisible key), assessment system + exam certificate
- [x] ai-tools-kids.json (teens-ai-tools slug) DONE 2026-08-23: 6mo -> 4-5mo/16wk; AGE-FLOOR FIXES: Midjourney week (18+) replaced with Firefly/Canva/Bing, voice-cloning hands-on removed, masterlist cleaned, kids-era ages_8_10 safety brackets -> 13-15/16-18; age honesty made a course feature; exam system
- [x] creative-coding.json DONE 2026-08-23: 6mo -> 5-6mo/20wk; free-first toolkit honesty (was Adobe Suite+plugins as essential), income figures cut, viral/monetization hype scrubbed site-wide in file, mocap/virtual-production + client-mgmt weeks cut, exam system
- [x] microsoft-office-kids.json DONE 2026-08-23 (structure was fine): 6mo -> 5-6mo (20wk curriculum); Paint 3D (discontinued) -> Photos/Clipchamp; ages unified 7-12 (was 7-18); month 6 fluff merged; exam system + free-web-apps honesty

### Tier 3: 18-month tier
- [x] app-dev-teens.json (18mo -> 10-12mo) DONE 2026-08-23: 40wk one-stack path (JS/React/React Native+Expo+Firebase), Flutter taste + native-map weeks, store honesty for minors (parent-managed accounts), launched capstone; cut Kotlin/Swift/Flutter full months, growth-hacking/viral/monetization/AR/IoT padding
- [x] gcse-mathematics.json + igcse-mathematics.json DONE 2026-08-23: both already high-quality exam-cycle files (paper-score progression = built-in assessment); minimal patch: joinable-any-month + real_assessment guarantee + dateModified
- [x] a-level-maths.json DONE 2026-08-23: already 2026-quality (72wk-vs-36 was a counter artifact, 2wk blocks); minimal patch: joinable-any-month duration, real_assessment guarantee, dateModified. NOTE for remaining audits: kw count 8-9 phrases = new-era file, kw 13-16 single words = old-era file

### Tier 4: 12-month tier needing right-sizing (judge each)
- [x] mysql-teens.json (12mo -> 5-6mo) DONE 2026-08-23: removed LIVE "Placeholder - Structure Required by Template" phases; 20wk Python-connected arc + exam system
- [x] mysql-database-college.json (12mo -> 7-8mo) DONE 2026-08-23: developer-honest scope, DBA track cut and named as next path; exam system
- [x] react-teens (9-11mo JS-first) · frontend-teens (9-11mo UI-craft, differentiated from react-teens) · backend-teens (9-11mo Node/APIs, K8s tour cut) · cpp-teens (10-12mo, pointers-with-pictures + SFML + CP) DONE 2026-08-23
- [x] cpp-programming-college · kotlin · swift · golang DONE 2026-08-23: 10-12mo, real phases 1-3 kept (scrubbed), standard finale month + final exam; C++ modern/systems, Kotlin Compose-first, Swift w/ Mac-honesty FAQ, Go concurrency-first
- [x] typescript-programming-college · react-js-college · flutter · mern-stack-college DONE 2026-08-23: same pattern; TS = JS-first + typed both ends, React = production layer (TS/testing/Next), Flutter = Dart-first + Mac-at-release honesty, MERN = one-language coherence
- [x] WEEK-NUMBERING FIX (all 8 college packs, commit 2a808b2b): originals carried 78-week keys under 44-week titles -> chips renumbered to contiguous 1-39 + finale 40-44, months renumbered w/ honest titles, off-scope blocks dropped (React Native inside MERN, K8s/serverless tails, micro-frontends, mid-phase capstone stubs), phase exams re-anchored. LESSON: week KEYS render as chips; always verify chip sequence, not just titles
- [x] python-ai-automation-college.json DONE 2026-08-23: automation-first reframe (scraping/RPA/pipelines + applied AI for documents/text/forecasts); RL/edge-AI/big-data/advanced-DL padding cut; differentiation FAQ vs ai-ml-college
- [x] ai-ml-teens.json (12mo -> 10-12mo) + ai-ml-college.json (52wk -> 48wk, GenAI/LLM month) + gen-ai.json (kept RAG/agents spine, cut from-scratch/startup tail, 10-12mo) + python-mastery-college.json (four-in-one -> 9-11mo + Three Roads month) DONE 2026-08-23
- [x] artificial-intelligence-college.json DONE 2026-08-23 (90ab89d1, see data-science line above)
- [x] app-dev-college.json + game-dev-college.json DONE 2026-08-23 (commit 1d3c8751): app-dev = honest Flutter-first + native-literacy months (Swift/Kotlin), no-Mac FAQ, income_potential dropped; game-dev = Unity deep + Unreal/C++ phase + multiplayer, VR/AR + live-service/monetization weeks cut
- [x] data-science-college.json + artificial-intelligence-college.json DONE 2026-08-23 (90ab89d1): DS = full pipeline, dup-Kaggle/RL cut, 3-way differentiation FAQ; AI = classical canon (AIMA shape) kept, AGI hype cut from meta, LLM-agent relevance framing. NOTE: week-1 taxonomy topic mentions AGI legitimately, do not ban the substring
- [x] ai-tools-college.json DONE 2026-08-24 (1524781c): 6mo-claim w/ broken week seq (17->22 gap) + monetization hype -> honest 5-6mo adult toolkit; 18+ so ChatGPT/Claude/Midjourney KEPT as subject (gentle scrub = dead tools + income hype only); teens-redirect FAQ; lib gained renameBlocks + phaseDescriptions
- [x] algo-trading.json + algo-trading-automation.json DONE 2026-08-24 (c0ef416e): HIGHEST-RISK finance files. LIVE DEFECT FIXED: algo-trading's income_potential block ("Profit share: 50-90%", "Unlimited based on capital") was served on the .md twin -> dropped entirely (no replacement bands authored). no-guarantee statement now in a rendering FAQ (+FAQPage schema), strengthened risk_disclaimers in JSON. Both 12mo-claim/104wk-key + hedge-fund/prop-desk/raise-capital fluff -> honest 10-12mo, engineering-not-get-rich framing, employment career framing only. DIFFERENTIATED: algo-trading = research/strategy/ML, automation = systems/execution/infra. LIB LESSONS: added extraSections, textReplace, salaryExpectations, phaseDescriptions overrides; only salary_expectations renders to HTML (income_potential/risk_disclaimers reach only .md twin); ban exact phrases not substrings (24/7 crypto markets, "hedge fund strategies" academic topic, own no-guarantee FAQ all tripped broad bans)
- [x] princess/queen/alpha girls trio DONE 2026-08-23: honest ladder 9-11mo each, fantasy layer (Tech Mogul, Universal Domination, Coronation) removed
- [x] python-ai-kids (8-10mo kid-safe AI) · web-dev-kids (8-10mo, ChatGPT/Claude/Midjourney-for-kids REMOVED) · game-dev-kids + app-dev-kids + problem-solving-kids (6-8mo, 24mo shadow curricula cut) · canva-ai-kids (-> honest 13+, Firefly/Magic Studio) · design-editing-teens (8-10mo, live Placeholder phases removed) DONE 2026-08-23
- [x] computational-thinking-ai-kids + teens (CBSE pair): recorded-class claim cut, tool age-floors fixed, 51/69 kws -> 12; verified CBSE facts kept. hackathon trio + vibe trio + class-11-12 pair micro-patched (recorded-replays/parent-dashboard claims cut, Claude-4.7-style invented versions fixed, board-guarantee wording fixed) DONE 2026-08-23
- [x] mental-maths-kids · early-math-foundations · psle-maths DONE 2026-08-24 (ab2be19c, light maths batch above)
- [x] high-school-maths + middle-school-mathematics + olympiad-competition-mathematics + business-finance-mathematics DONE 2026-08-24 (3de2dc2a): the 4 MATHS MONSTERS (104wk keys, theory_videos/10-15hrs weekly, completion cert). KEY DIFFERENCE from coding pack: all 4 phases are REAL maths -> KEEP all 4, don't discard phase 4. Used `scratchpad/fix-maths-monster.js` (in-place: renumber 1-52, cumulative phase exams + FINAL EXAM, maths weekly_structure, 12-14mo range, exam cert, preserve existing copy). NOTE: phase-review "stub" blocks are STRUCTURAL (keep them = they become the cumulative-exam week; dropping them breaks the 13-week doubling math). applied-mathematics.json already DELETED (dead clone)
- [x] LIGHT MATHS BATCH DONE 2026-08-24 (ab2be19c): early-math-foundations, mental-maths-kids, algebra-foundations, ap-calculus-prep, sat-math-prep, maths-through-coding, jee-foundation-maths, ib-mathematics-aa-ai, statistics-probability-maths, psle-maths. All already high-quality (prior pass) -> shape-agnostic light patch only: exam-based cert + real_assessment + homework/mixed-review line + assessment FAQ + dateModified. Durations/curriculum UNTOUCHED (exam-cycle/school-year aligned). `scratchpad/patch-maths-light.js`. examWord adapts: gentle for young kids, full mock papers for AP/SAT/PSLE/JEE/IB
- [x] computer-science-class-11-12 · informatics-practices-class-11-12 DONE 2026-08-23 (session 1): kw trimmed to 12, honest 24mo (2-year board cycle) joinable-any-month, real_assessment present
- [x] ethical-hacking-masterclass-complete.json DONE 2026-08-24 (06d4f66f): 6mo-claim/104wk + Industry-recognized cert + offensive "Advanced Malware Development" topic -> honest 10-12mo authorized-pentest education; ethics/authorization/law foregrounded, labs-only, both offensive+defensive, malware-dev topic DROPPED (kept defensive analysis), legality + honest CEH/OSCP FAQs; salary block kept (owner-disclaimed)
- [x] design-editing-teens.json DONE 2026-08-23 (session 1, see line 134 - live Placeholder phases removed)
- [x] data-analysis-college.json DONE 2026-08-23 (1541f4a2): 6mo-claim/104wk-keys mess -> 8-10mo analyst arc (Excel/SQL -> Pandas/BI -> industry analytics), post-course fluff phase deleted; lib now supports perPhase/duration/finaleMonth/noMonthNumbers/paceFaq params
- [x] data-structure-algorithms-college + competitive-coding-college DONE 2026-08-23 (cd98e870): both 6mo-claim/104wk-key + fluff-phase mess -> honest 10-12mo, fluff phases removed, no-guarantee FAQs. LESSON: added cfg.scrub to lib (GENTLE regex) so interview/contest content is NOT stripped by the default SCRUB
- [x] icse-computer-applications + full exam family DONE 2026-08-24 (6084cce9, in the 38-file assessment batch)

### Tier 5: newer 2026 courses (light SEO polish only, most already at standard)
- [x] All "joinable any month" 2026 courses DONE 2026-08-24 (6084cce9): audited all; already high quality (e.g. AP CSA correctly captures the 2025-26 four-unit Bluebook redesign) with clean weekly structures and no banned claims, so applied only the assessment-system layer (exam cert + real_assessment + homework/mixed-review line + assessment FAQ). Durations/curriculum/copy untouched.

---

## COMPLETE: all 121 course files overhauled (2026-08-24)

Final audit across all 121 course JSONs = 0 issues on every axis: no broken week keys, every
course exam-based-cert or real_assessment, no banned claims (lifetime/24-7-discord/job-referral/
recorded/industry-recognized/parent-dashboard), no coding-flavored theory_video weekly blocks,
no em/en-dashes. `npm run pricing:verify` green after `pricing:apply`. `applied-mathematics.json`
was deleted (dead clone). `courses-config.json` is config, not a course.

Session-2 reusable machinery in scratchpad: `college-lib.js` (rebuild(file,cfg) for coding
colleges), `fix-maths-monster.js` (keep-all-4-phases maths renumber), `patch-maths-light.js` +
`patch-assessment-batch.js` (shape-agnostic assessment-system patchers for already-good files).
LIVE DEFECT fixed this session: algo-trading profit-share/unlimited claims served on the .md twin.

Full course list: 122 files in `content/courses/data/` (see git log per file for history).
