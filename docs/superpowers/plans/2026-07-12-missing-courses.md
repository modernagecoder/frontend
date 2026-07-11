# 16 Missing Courses Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 16 fully detailed courses (8 coding + 8 maths) filling the catalog's highest-traffic gaps, each with a brand thumbnail, and wire them into every catalog surface.

**Architecture:** Data-driven course pages: one JSON per course in `content/courses/data/` rendered by `scripts/generate-courses.js` into `/courses/<slug>` (generated output is gitignored; Netlify runs `generate:all` on deploy; the `/courses/*` catch-all serves them, so NO `_redirects`/`netlify.toml` changes). Thumbnails are HTML cards screenshotted by Playwright (from `.ds-sync/node_modules`, already installed) and converted to webp with Pillow. Catalog surfaces: `src/pages/course.html` `coursesData`, `src/pages/course-atlas.html` cards, `sitemap.xml`.

**Tech Stack:** JSON course data, Node (Playwright 1.59 in `.ds-sync/node_modules`, run scripts from repo root as `node .ds-sync/<script>.mjs`), Python + Pillow for webp, plain HTML/JS catalog pages.

**Spec:** `docs/superpowers/specs/2026-07-12-missing-courses-design.md` (approved). Read it before any task; its course table (file names, SEO slugs, titles, audiences) is the source of truth.

## Global Constraints

- NO emoji anywhere. NO em dashes and NO en dashes anywhere (JSONs, thumbnails, catalog entries).
- No fabricated statistics, students, outcomes, or testimonials. NO `success_metrics`, NO `testimonials` key in new JSONs.
- `course_guarantees` = ONLY the standardized honest set (live small batches of 5-8, structured curriculum, doubt support, completion certificate, free demo first). NO placement %, salary promises, money-back, hiring partners, "recorded sessions".
- `salary_expectations` key: ONLY on college/adult career courses (c-programming-college, python-web-django-college, statistics-probability-maths, gre-gmat-quant-maths may include disclaimed market context); NEVER on kids/teens/school-exam courses.
- India pricing in every `meta.price`: `{"group": "₹1499/month", "miniBatch": "₹2499/month", "personal": "₹4999/month"}`. International pricing is applied automatically by the generator (maths slugs containing math/maths get premium $100/$150; coding get $40/$100) — do not hand-write intl prices.
- Exam/board facts must be CURRENT (verify with WebSearch during build): CBSE Class 10 Maths 2026-27 syllabus, current A-Level structure (Pure/Mechanics/Statistics), shorter-format GRE and GMAT Focus Edition, JEE Foundation = Class 8-10 NCERT-aligned, Roblox = Luau, Minecraft = block-to-code (MakeCode-style).
- cybersecurity-teens is strictly DEFENSIVE/ethical education (online safety, phishing recognition, how attacks work conceptually, password/encryption basics, safe coding, CTF-style puzzles, white-hat ethics). No offensive tooling instruction.
- Roblox/Minecraft courses include a "not affiliated with or endorsed by Roblox Corporation / Mojang and Microsoft" line in their FAQs.
- Commit after each course JSON and after each task; never commit `content/courses/generated/`.

## Shared reference: course JSON skeleton (field names are binding)

Every course JSON follows this exact top-level shape (verified against `content/courses/data/python-teens.json`):

```json
{
  "meta": {
    "slug": "SEO-SLUG-FROM-SPEC-TABLE",
    "title": "TITLE FROM SPEC TABLE, may extend with honest subtitle",
    "description": "150-170 char SEO description",
    "keywords": ["6-10 search phrases"],
    "category": "Short human category label",
    "price": { "group": "₹1499/month", "miniBatch": "₹2499/month", "personal": "₹4999/month" },
    "duration": "e.g. 6 months (24 weeks)",
    "level": "audience line from spec table",
    "commitment": "e.g. 2 live classes/week + 2-3 hours practice",
    "certification": "Course-completion certificate wording (honest)",
    "image_path": "FILE-NAME.png"
  },
  "program_overview": {
    "what_makes_this_different": ["4-6 honest, specific points"],
    "learning_path": "1-2 sentence arc",
    "career_outcomes": ["3-5 honest outcomes, no salary/placement promises"]
  },
  "phase_1_NAME": { "month_1_NAME": { "week_1": { "title": "...", "topics": ["5-7"], "projects": ["1-2"], "practice": "...", "assessment": "on milestone weeks only" }, "week_2": {...} }, "month_2_NAME": {...} },
  "phase_2_NAME": {...},
  "additional_learning_resources": {
    "projects_throughout_course": ["6-10 named projects"],
    "weekly_structure": { "live_classes": "...", "practice": "...", "review": "..." },
    "certification": { "completion": "honest wording" },
    "support_provided": { "doubt_support": "...", "progress_updates": "...", "career_guidance": "only on adult courses, honest" }
  },
  "prerequisites": ["2-4 items or 'None' style entries"],
  "who_is_this_for": ["4-6 audience bullets"],
  "career_paths_after_completion": ["list; REQUIRED to be a list"],
  "course_guarantees": ["the standardized honest set, 5 items"],
  "faqs": [ { "question": "...", "answer": "..." } ]
}
```

- 8-9 unique FAQs per course. Curriculum depth: kids courses 3-6 months (12-24 weeks), teen/college courses 6-12 months, exam courses structured as syllabus phases + revision phase + mock-exam phase.
- After writing each JSON: `python -c "import json,io;json.load(io.open(r'content/courses/data/FILE.json',encoding='utf-8'))"` must pass, and this sweep must return clean: `python -c "import io,sys;t=io.open(r'content/courses/data/FILE.json',encoding='utf-8').read();import unicodedata;bad=[c for c in t if c in '—–' or (unicodedata.category(c)=='So' and ord(c)>0x2600)];print('CLEAN' if not bad else bad[:5])"`.

## Shared reference: the 16 courses

Copy of the spec table (file → SEO slug → title → audience). THE SPEC IS AUTHORITATIVE; if this differs, the spec wins.

Coding: javascript-teens → javascript-course-for-teens-beginners-interactive-web → JavaScript Programming for Teens (13-18). html-css-beginners → html-css-course-for-beginners-build-real-websites → HTML & CSS for Beginners (10-adult). roblox-coding-kids → roblox-game-coding-for-kids-lua-course → Roblox Game Coding for Kids (8-14). minecraft-coding-kids → minecraft-coding-for-kids-course → Minecraft Coding for Kids (7-12). c-programming-college → c-programming-course-for-college-beginners → C Programming Masterclass (college). cybersecurity-teens → cybersecurity-course-for-teens-ethical-defensive → Cybersecurity for Teens (13-18). python-web-django-college → python-web-development-django-flask-course → Python Web Development, Django & Flask (college/professionals). data-science-teens → data-science-course-for-teens-python-data → Data Science for Teens (14-18).

Maths: vedic-maths → vedic-maths-course-speed-calculation-mastery → Vedic Maths Mastery (8-adult). cbse-class-10-maths → cbse-class-10-maths-board-exam-prep-course → CBSE Class 10 Maths Board Prep. jee-foundation-maths → jee-foundation-maths-course-class-8-10 → JEE Foundation Maths Class 8-10. a-level-maths → a-level-maths-course-pure-mechanics-statistics → A-Level Maths. statistics-probability-maths → statistics-probability-maths-course → Statistics & Probability (college/professionals). gre-gmat-quant-maths → gre-gmat-quant-maths-prep-course → GRE & GMAT Quantitative Prep (adults). abacus-mental-maths-kids → abacus-mental-maths-course-for-kids → Abacus & Mental Maths for Kids (5-10). eleven-plus-maths → 11-plus-maths-preparation-course-uk → 11 Plus Maths Preparation UK (9-11).

---

### Task 1: Thumbnail pipeline + all 16 thumbnails

**Files:**
- Create: `.ds-sync/render-course-thumbs.mjs` (render script)
- Create: `.ds-sync/course-thumbs/` (16 HTML card files, one per course)
- Create: `public/images/<file>.png` + `public/images/<file>.webp` for all 16 course file names

**Interfaces:**
- Produces: `public/images/<jsonFileName>.{png,webp}` at exactly 800x450 for every course; later tasks reference `image_path: "<jsonFileName>.png"` and `imageUrl: '<jsonFileName>.webp'`.

- [ ] **Step 1: Build the 16 HTML thumbnail cards** in `.ds-sync/course-thumbs/<file>.html`. Each is a self-contained 800x450 card in the warm brand DNA (consistent family, per-subject variation): warm paper background (#FBF8F2 range) OR a deep ink panel for college courses, course title in a strong serif (Fraunces via Google Fonts with system fallback), a small "Modern Age Coders" wordmark, subject motif drawn in CSS/SVG only (JS: code tokens; HTML/CSS: layout boxes; Roblox: blocky game shapes; Minecraft: cube grid; C: terminal prompt; cybersecurity: shield/lock outline; Django: route diagram; data science: bar/line chart shapes; vedic: digit lattice; CBSE/JEE/A-Level/11-plus: exam-sheet geometry; statistics: distribution curve; GRE/GMAT: quant grid; abacus: bead rods). NO emoji, no photos, no AI-look gradients, no em/en dashes. Body sized exactly 800x450 with margin 0.
- [ ] **Step 2: Write `.ds-sync/render-course-thumbs.mjs`** (playwright resolves from .ds-sync/node_modules; run from repo root):

```js
import { chromium } from 'playwright';
import { readFileSync, readdirSync } from 'node:fs';

const DIR = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend/.ds-sync/course-thumbs';
const OUT = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend/public/images';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
for (const f of readdirSync(DIR).filter(x => x.endsWith('.html'))) {
  const html = readFileSync(`${DIR}/${f}`, 'utf8');
  try { await page.setContent(html, { waitUntil: 'networkidle', timeout: 15000 }); } catch {}
  await page.evaluate(() => Promise.race([document.fonts ? document.fonts.ready : 0, new Promise(r => setTimeout(r, 5000))]));
  await page.screenshot({ path: `${OUT}/${f.replace('.html', '.png')}` });
  console.log('rendered', f);
}
await browser.close();
```

- [ ] **Step 3: Render + convert.** Run: `node .ds-sync/render-course-thumbs.mjs` (expect 16 "rendered" lines). Then convert to webp: `python -c "from PIL import Image; import glob; [Image.open(p).save(p[:-4]+'.webp','WEBP',quality=82) for p in glob.glob('public/images/*.png') if any(s in p for s in ['javascript-teens','html-css-beginners','roblox-coding-kids','minecraft-coding-kids','c-programming-college','cybersecurity-teens','python-web-django-college','data-science-teens','vedic-maths','cbse-class-10-maths','jee-foundation-maths','a-level-maths','statistics-probability-maths','gre-gmat-quant-maths','abacus-mental-maths-kids','eleven-plus-maths'])]"`.
- [ ] **Step 4: Verify.** `python -c "from PIL import Image;import glob;fs=[f for f in glob.glob('public/images/*.webp') if 'vedic-maths' in f or 'roblox-coding' in f];print([(f,Image.open(f).size) for f in fs])"` expecting (800, 450). OPEN at least 4 PNGs with the Read tool and LOOK at them: title readable, brand consistent, no clipping, no AI-look. Fix and re-render any that look weak.
- [ ] **Step 5: Commit.** `git add .ds-sync/render-course-thumbs.mjs .ds-sync/course-thumbs public/images/*.png public/images/*.webp` (verify with `git status --short` that ONLY the 16 course names' images are staged, 32 image files) `&& git commit -m "Course thumbnails: 16 brand cards for missing-courses batch"`

### Task 2: Coding batch A JSONs (javascript-teens, html-css-beginners, cybersecurity-teens, data-science-teens)

**Files:**
- Create: `content/courses/data/javascript-teens.json`, `html-css-beginners.json`, `cybersecurity-teens.json`, `data-science-teens.json`

**Interfaces:**
- Consumes: skeleton + spec table above; thumbnails from Task 1 (`image_path` = `<file>.png`).
- Produces: 4 valid course JSONs that `npm run generate:courses` renders.

Per-course briefs (curriculum arcs; write full week-level detail per the skeleton):
- **javascript-teens** (6 months): variables/types/functions → DOM + events (interactive pages) → arrays/objects + JSON → fetch + APIs → mini games (canvas) → capstone portfolio-ready interactive site. FAQs incl. "JavaScript vs Python first", "do I need HTML first".
- **html-css-beginners** (4 months): structure/semantic HTML → CSS selectors/box model → flexbox/grid layouts → responsive design → forms → multi-page personal site capstone. FAQs incl. "is HTML a programming language", age fit.
- **cybersecurity-teens** (6 months, defensive): how the internet works → passwords/hashing/2FA → phishing + social engineering recognition → malware concepts + safe habits → encryption basics → web security concepts (cookies, HTTPS) → safe coding → CTF-style puzzle capstone. Ethics thread throughout; white-hat framing; FAQ "will I learn to hack" answered honestly (defense-first).
- **data-science-teens** (6 months): Python refresh → data with pandas → cleaning real datasets → visualization (matplotlib) → statistics for data → intro ML (scikit-learn, simple models) → data-story capstone. Prereq: basic Python (point to python-teens).

- [ ] **Step 1-4 (one per course):** Write the full JSON → validate JSON parse + emoji/dash sweep (commands in skeleton section) → `npm run generate:courses` and confirm the new slug's folder appears under `content/courses/generated/` with no error for this file → `git add content/courses/data/<file>.json && git commit -m "Course: <title>"`.
- [ ] **Step 5: Spot-render check.** With dev server (http://localhost:3001, `npm run dev` background if down), Playwright-load `/courses/<seo-slug>` for javascript-teens and cybersecurity-teens at 1280px: 0 console errors, curriculum accordion populated, no "No information available" boxes, thumbnail loads, pricing shows India tiers.

### Task 3: Coding batch B JSONs (roblox-coding-kids, minecraft-coding-kids, c-programming-college, python-web-django-college)

**Files:**
- Create: `content/courses/data/roblox-coding-kids.json`, `minecraft-coding-kids.json`, `c-programming-college.json`, `python-web-django-college.json`

**Interfaces:** same as Task 2.

Per-course briefs:
- **roblox-coding-kids** (6 months): Roblox Studio tour → parts/worlds → first Luau scripts → events + player interaction → game mechanics (checkpoints, scoring, shops) → publish a game capstone. FAQ: parent safety, "not affiliated with Roblox Corporation", does my child need a paid account (no).
- **minecraft-coding-kids** (4 months): block-based coding on Minecraft-style challenges (MakeCode-style) → loops/conditions through building automation → agent/robot control → mini-games → JavaScript peek for older kids. FAQ: "not affiliated with Mojang/Microsoft", which Minecraft edition/tools, screen-time framing.
- **c-programming-college** (6 months): C syntax/compilation → pointers + memory (the core differentiator, taught properly) → arrays/strings → structs → file I/O → data structures in C → embedded/systems context + capstone. Audience: first-year engineering incl. university C courses. FAQ: C vs C++, is C still relevant (honest yes: systems/embedded/OS).
- **python-web-django-college** (6 months): HTTP + web basics → Flask fundamentals (routing, templates) → databases + ORM → Django (apps, admin, auth) → REST APIs → deploy a real project capstone. Prereq: Python basics. `salary_expectations` allowed as disclaimed market context.

- [ ] **Steps 1-4 (one per course):** same write → validate → generate → per-course commit cycle as Task 2.
- [ ] **Step 5: Spot-render check** for roblox-coding-kids and c-programming-college (same checks as Task 2 Step 5).

### Task 4: Maths batch C JSONs (vedic-maths, abacus-mental-maths-kids, cbse-class-10-maths, jee-foundation-maths)

**Files:**
- Create: `content/courses/data/vedic-maths.json`, `abacus-mental-maths-kids.json`, `cbse-class-10-maths.json`, `jee-foundation-maths.json`

**Interfaces:** same as Task 2. These slugs contain "maths" so intl premium pricing is automatic; verify in the generated page (Step 5).

Per-course briefs (WebSearch to verify current facts before writing CBSE/JEE content):
- **vedic-maths** (6 months, ages 8-adult): 16-sutra system taught practically: multiplication shortcuts → squares/cubes → division (Nikhilam/Paravartya) → fractions/decimals speed work → algebra applications → speed-test capstone. Honest framing: faster mental arithmetic + exam time savings; no "genius" claims.
- **abacus-mental-maths-kids** (8 months, ages 5-10): bead basics + number sense → addition/subtraction on abacus → visualization (anzan) → multiplication intro → mental-only calculation levels. Honest: concentration + arithmetic fluency benefits; no IQ claims.
- **cbse-class-10-maths** (10 months, aligned to CURRENT 2026-27 CBSE Class 10 syllabus; verify chapter list + internal assessment/board pattern via WebSearch): real numbers → polynomials → linear equations pair → quadratics → arithmetic progressions → triangles/similarity → coordinate geometry → trigonometry + applications → circles → areas/volumes → statistics → probability, then revision phase + sample-paper/mock phase (standard + basic paper choice explained). FAQs: board-pattern, basic vs standard maths, case-study questions.
- **jee-foundation-maths** (12 months, Class 8-10): NCERT-aligned depth + foundation extensions: number systems → algebra depth → geometry proof skills → mensuration → intro trigonometry → coordinate geometry → problem-solving/olympiad-style thinking → NTSE/JEE-style MCQ practice phase. Honest: builds foundation; no selection promises.

- [ ] **Steps 1-4 (one per course):** write → validate → generate → per-course commit.
- [ ] **Step 5: Spot-render check** for cbse-class-10-maths and vedic-maths, ALSO verifying the international price block shows the premium maths pricing ($100/$150 pattern) not $40.

### Task 5: Maths batch D JSONs (a-level-maths, eleven-plus-maths, statistics-probability-maths, gre-gmat-quant-maths)

**Files:**
- Create: `content/courses/data/a-level-maths.json`, `eleven-plus-maths.json`, `statistics-probability-maths.json`, `gre-gmat-quant-maths.json`

**Interfaces:** same as Task 4 (premium intl pricing automatic).

Per-course briefs (WebSearch to verify current exam formats first):
- **a-level-maths** (18 months): Pure (algebra, functions, calculus, trigonometry, vectors, proof) + Mechanics (kinematics, forces, moments) + Statistics (sampling, distributions, hypothesis testing), structured AS → A2, exam-board-agnostic (Edexcel/AQA/OCR named as supported), past-paper phase. FAQs: which boards, AS vs full A-Level, predicted-grade support honesty.
- **eleven-plus-maths** (8 months, UK ages 9-11): number fluency → fractions/decimals/percentages → ratio/proportion → algebra intro → geometry/measures → data → problem-solving under time → GL/CEM-style practice papers phase. FAQs: GL vs CEM vs ISEB coverage, grammar-school honesty (preparation, not guarantees).
- **statistics-probability-maths** (6 months, college/professionals): descriptive stats → probability foundations → distributions → sampling + CLT → hypothesis testing → regression + correlation → real-dataset capstone (spreadsheet + Python options). `salary_expectations` allowed as disclaimed context.
- **gre-gmat-quant-maths** (5 months, adults): arithmetic/algebra refresh → word problems + rates → geometry (GRE) / data sufficiency reasoning (GMAT Focus) → data interpretation → quant strategy + timing → sectional mocks. Verify current formats (shorter GRE since 2023; GMAT Focus Edition) via WebSearch and state them accurately. FAQs: GRE vs GMAT differences, score improvement honesty (no guaranteed-score claims).

- [ ] **Steps 1-4 (one per course):** write → validate → generate → per-course commit.
- [ ] **Step 5: Spot-render check** for a-level-maths and gre-gmat-quant-maths (premium intl pricing visible).

### Task 6: Catalog wiring (courses listing, atlas, sitemap)

**Files:**
- Modify: `src/pages/course.html` (the `coursesData` array, starts line ~1194)
- Modify: `src/pages/course-atlas.html`
- Modify: `sitemap.xml`

**Interfaces:**
- Consumes: the 16 SEO slugs + titles from the spec table; thumbnails `<file>.webp` from Task 1.
- Produces: all 16 courses visible/filterable on `/courses` and `/course-atlas`, indexed in sitemap.

- [ ] **Step 1: Add 16 `coursesData` entries** to `src/pages/course.html`, ids 321-336 (existing max is 320), following the existing entry shape exactly. Category values MUST be from the existing enum: use `programming` (javascript, c, roblox, minecraft), `web-dev` (html-css, python-web-django), `cyber-security` (cybersecurity-teens), `ai-ml` (data-science-teens), `mathematics` (all 8 maths). ageGroup from existing enum: kids/teens/college/professional (abacus + 11-plus + vedic = kids or teens per audience; cbse/jee = teens; a-level = teens; statistics + gre = college/professional). Each entry: `title`, 25-40 word `description`, 4 `skills`, `difficulty` (beginner/intermediate/advanced), `badges` (['new'] baseline; add 'hot' for javascript-teens, roblox-coding-kids, cbse-class-10-maths, vedic-maths), `templateUrl: '/courses/<seo-slug>'`, `imageUrl: '<file>.webp'`. Place each in the matching age-group section of the array (the file groups entries by comment banners).
- [ ] **Step 2: Add 16 `nx-card` entries to `src/pages/course-atlas.html`** in the correct track sections, copying the existing card structure exactly (`<a class="nx-card" href="/courses/<seo-slug>" data-track="<kids|teens|college>" data-search="<lowercase title + skills>">` with thumbnail, title, one-line description, footer). No emoji/dashes.
- [ ] **Step 3: Add 16 sitemap entries** before `</urlset>`: `<loc>https://learn.modernagecoders.com/courses/<seo-slug></loc>`, `<lastmod>2026-07-12</lastmod>`, `<changefreq>monthly</changefreq>`, `<priority>0.8</priority>` (matches existing course entries; no hreflang needed for courses).
- [ ] **Step 4: Verify.** Sitemap parses (`python -c "import xml.etree.ElementTree as ET;ET.parse('sitemap.xml');print('OK')"`); `node -e` or Playwright: load http://localhost:3001/src/pages/course.html, confirm 0 console errors and that searching/filtering surfaces the new titles (query the DOM for 4 of the new titles); load course-atlas the same way; every new imageUrl file exists on disk.
- [ ] **Step 5: Commit.** `git add src/pages/course.html src/pages/course-atlas.html sitemap.xml && git commit -m "Catalog wiring: 16 new courses on /courses, atlas, sitemap"`

### Task 7: Full verification sweep

**Files:** none created; fixes only if findings.

- [ ] **Step 1: Regenerate everything:** `npm run generate:courses` — all 16 new files generate without errors (courses-config failure is expected/harmless). Confirm 16 generated folders exist: `python -c "import os;slugs=['javascript-course-for-teens-beginners-interactive-web','html-css-course-for-beginners-build-real-websites','roblox-game-coding-for-kids-lua-course','minecraft-coding-for-kids-course','c-programming-course-for-college-beginners','cybersecurity-course-for-teens-ethical-defensive','python-web-development-django-flask-course','data-science-course-for-teens-python-data','vedic-maths-course-speed-calculation-mastery','cbse-class-10-maths-board-exam-prep-course','jee-foundation-maths-course-class-8-10','a-level-maths-course-pure-mechanics-statistics','statistics-probability-maths-course','gre-gmat-quant-maths-prep-course','abacus-mental-maths-course-for-kids','11-plus-maths-preparation-course-uk'];missing=[s for s in slugs if not os.path.isdir('content/courses/generated/'+s)];print('MISSING',missing)"` expecting `MISSING []`.
- [ ] **Step 2: Integrity sweep across the 16 JSONs:** emoji/dash scan (skeleton command, looped); fabrication grep: `grep -liE "placement rate|guaranteed (job|score|selection)|money.back|recorded session|success_metrics|testimonial" content/courses/data/{javascript-teens,html-css-beginners,roblox-coding-kids,minecraft-coding-kids,c-programming-college,cybersecurity-teens,python-web-django-college,data-science-teens,vedic-maths,cbse-class-10-maths,jee-foundation-maths,a-level-maths,statistics-probability-maths,gre-gmat-quant-maths,abacus-mental-maths-kids,eleven-plus-maths}.json` expecting no output; every JSON has `career_paths_after_completion` as a list and 8-9 faqs (script it).
- [ ] **Step 3: Browser pass over 6 generated pages** (mix: roblox kids, cybersecurity teens, django college, cbse maths, a-level maths, abacus kids) at 1280px + 390px: 0 console errors, all tab sections populated, curriculum accordion opens, thumbnail loads, correct intl pricing tier (premium on maths, standard on coding).
- [ ] **Step 4: Catalog surfaces:** /courses listing shows all 16 (count the new titles in DOM), each card image loads (no 404s in network log), filters place them correctly (spot-check 4 filters); /course-atlas shows 16 new cards.
- [ ] **Step 5: Commit any fixes** made during verification with message "Missing-courses batch: verification fixes". If none: no commit.

---

## Self-review notes

- Spec coverage: 16 courses (Tasks 2-5), thumbnails both formats (Task 1), full data model + integrity (skeleton + Global Constraints + Task 7 sweep), wiring all three surfaces (Task 6), pricing automation verified (Tasks 4/5 Step 5 + Task 7 Step 3), current exam facts (WebSearch instructions in Tasks 4/5), trademark FAQ lines (Task 3 briefs), verification (Task 7).
- No routing work needed (courses catch-all) — deliberate, per spec.
- Generated output stays uncommitted (gitignored) — stated in Architecture and Task 7.
