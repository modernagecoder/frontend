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
- [ ] java-programming-college.json (12mo, check scope) 

### Tier 2: broken-format (no phase structure)
- [x] scratch-kids.json DONE 2026-08-23 (structure was fine, direct month_ keys): 3mo -> "3-4 months" margin format; ages unified 6-12 (was 6-14/7-16 mix), 50+ -> 35+ honest count, cut recorded-replays + LEGO Mindstorms (discontinued), capstone options surfaced (were in invisible key), assessment system + exam certificate
- [x] ai-tools-kids.json (teens-ai-tools slug) DONE 2026-08-23: 6mo -> 4-5mo/16wk; AGE-FLOOR FIXES: Midjourney week (18+) replaced with Firefly/Canva/Bing, voice-cloning hands-on removed, masterlist cleaned, kids-era ages_8_10 safety brackets -> 13-15/16-18; age honesty made a course feature; exam system
- [x] creative-coding.json DONE 2026-08-23: 6mo -> 5-6mo/20wk; free-first toolkit honesty (was Adobe Suite+plugins as essential), income figures cut, viral/monetization hype scrubbed site-wide in file, mocap/virtual-production + client-mgmt weeks cut, exam system
- [x] microsoft-office-kids.json DONE 2026-08-23 (structure was fine): 6mo -> 5-6mo (20wk curriculum); Paint 3D (discontinued) -> Photos/Clipchamp; ages unified 7-12 (was 7-18); month 6 fluff merged; exam system + free-web-apps honesty

### Tier 3: 18-month tier
- [x] app-dev-teens.json (18mo -> 10-12mo) DONE 2026-08-23: 40wk one-stack path (JS/React/React Native+Expo+Firebase), Flutter taste + native-map weeks, store honesty for minors (parent-managed accounts), launched capstone; cut Kotlin/Swift/Flutter full months, growth-hacking/viral/monetization/AR/IoT padding
- [ ] gcse-mathematics.json (18mo -> exam-cycle framing)
- [ ] igcse-mathematics.json (18mo -> exam-cycle framing)
- [x] a-level-maths.json DONE 2026-08-23: already 2026-quality (72wk-vs-36 was a counter artifact, 2wk blocks); minimal patch: joinable-any-month duration, real_assessment guarantee, dateModified. NOTE for remaining audits: kw count 8-9 phrases = new-era file, kw 13-16 single words = old-era file

### Tier 4: 12-month tier needing right-sizing (judge each)
- [ ] mysql-teens.json (12mo -> 4-6mo)
- [ ] mysql-database-college.json (12mo -> 4-6mo)
- [ ] react-teens.json · react-js-college.json · frontend-teens.json · backend-teens.json
- [ ] cpp-teens.json · cpp-programming-college.json · kotlin.json · swift.json · golang.json
- [ ] typescript-programming-college.json · flutter.json · mern-stack-college.json
- [ ] python-mastery-college.json · python-ai-automation-college.json · gen-ai.json
- [ ] ai-ml-college.json · ai-ml-teens.json · artificial-intelligence-college.json
- [ ] data-science-college.json · game-dev-college.json · app-dev-college.json
- [ ] algo-trading.json · algo-trading-automation.json
- [ ] princess-coders.json · queen-coders.json · alpha-girls.json
- [ ] python-ai-kids.json · web-dev-kids.json (12mo each)
- [ ] mental-maths-kids.json · early-math-foundations.json · psle-maths.json
- [ ] high-school-maths.json · middle-school-mathematics.json · applied-mathematics.json
- [ ] olympiad-maths courses x2 · algebra-foundations.json · ap-calculus-prep.json
- [ ] business-finance-mathematics.json · statistics-probability-maths.json (6mo, verify)
- [ ] jee-foundation-maths.json (12mo school-year, likely keep + clarify)
- [ ] ib-mathematics-aa-ai.json (24mo exam-cycle, keep + clarify)
- [ ] computer-science-class-11-12.json · informatics-practices-class-11-12.json (24mo = 2 school years, keep + clarify)
- [ ] ethical-hacking-masterclass-complete.json (6mo, content pass)
- [ ] creative-media/design-editing-teens.json (12mo -> 6-8mo)
- [ ] canva-ai-kids.json (6mo, content pass) · data-analysis-college.json (6mo, content pass)
- [ ] dsa/competitive courses (6mo, content pass)
- [ ] icse-computer-applications.json + remaining exam family (recent, light pass)

### Tier 5: newer 2026 courses (light SEO polish only, most already at standard)
- [ ] All "joinable any month" 2026 courses: verify against the standard, touch only if below it.

Full course list: 122 files in `content/courses/data/` (see git log per file for history).
