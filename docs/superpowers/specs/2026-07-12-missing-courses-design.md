# 16 Missing Courses: High-Traffic Coding + Maths Catalog Gaps

**Date:** 2026-07-12
**Status:** Approved by owner (course list with robotics dropped; content/thumbnail/wiring standards)
**Goal:** Fill the highest-search-volume gaps in the course catalog with 16 fully built, SEO-rich courses (8 coding + 8 maths), each with a brand thumbnail and complete detail page, wired into every catalog surface.

## Why these 16

Catalog audit (83 existing courses) found these high-volume topics missing; several already have Modern Age Coders LANDING pages with no enrollable course behind them (traffic arrives, nothing to buy).

## The 16 courses

All JSONs in `content/courses/data/<file>.json`. The `slug` field inside the JSON is the `/courses/<slug>` URL (SEO slug). Maths slugs contain "maths"/"math" so `scripts/generate-courses.js` (regex `/math|calculus|algebra/i`) auto-applies premium international pricing ($100 group / $150 one-on-one); coding courses get standard intl ($40/$100). India pricing standard tiers for all: ₹1,499 group / ₹2,499 mini-batch / ₹4,999 one-on-one.

### Coding (8)

| # | File | SEO slug (URL) | Title | Audience |
|---|------|----------------|-------|----------|
| 1 | `javascript-teens` | `javascript-course-for-teens-beginners-interactive-web` | JavaScript Programming for Teens | Teens 13-18 (beginner-friendly) |
| 2 | `html-css-beginners` | `html-css-course-for-beginners-build-real-websites` | HTML & CSS for Beginners | Ages 10-adult |
| 3 | `roblox-coding-kids` | `roblox-game-coding-for-kids-lua-course` | Roblox Game Coding for Kids | Kids 8-14 |
| 4 | `minecraft-coding-kids` | `minecraft-coding-for-kids-course` | Minecraft Coding for Kids | Kids 7-12 |
| 5 | `c-programming-college` | `c-programming-course-for-college-beginners` | C Programming Masterclass | College/first-year engineering |
| 6 | `cybersecurity-teens` | `cybersecurity-course-for-teens-ethical-defensive` | Cybersecurity for Teens | Teens 13-18 |
| 7 | `python-web-django-college` | `python-web-development-django-flask-course` | Python Web Development (Django & Flask) | College/professionals |
| 8 | `data-science-teens` | `data-science-course-for-teens-python-data` | Data Science for Teens | Teens 14-18 |

### Maths (8)

| # | File | SEO slug (URL) | Title | Audience |
|---|------|----------------|-------|----------|
| 9 | `vedic-maths` | `vedic-maths-course-speed-calculation-mastery` | Vedic Maths Mastery | Ages 8-adult |
| 10 | `cbse-class-10-maths` | `cbse-class-10-maths-board-exam-prep-course` | CBSE Class 10 Maths Board Prep | Class 10 CBSE students |
| 11 | `jee-foundation-maths` | `jee-foundation-maths-course-class-8-10` | JEE Foundation Maths (Class 8-10) | Class 8-10 aspirants |
| 12 | `a-level-maths` | `a-level-maths-course-pure-mechanics-statistics` | A-Level Maths (Pure, Mechanics & Statistics) | A-Level students (UK/intl) |
| 13 | `statistics-probability-maths` | `statistics-probability-maths-course` | Statistics & Probability | College/professionals |
| 14 | `gre-gmat-quant-maths` | `gre-gmat-quant-maths-prep-course` | GRE & GMAT Quantitative Prep | Adults |
| 15 | `abacus-mental-maths-kids` | `abacus-mental-maths-course-for-kids` | Abacus & Mental Maths for Kids | Kids 5-10 |
| 16 | `eleven-plus-maths` | `11-plus-maths-preparation-course-uk` | 11 Plus Maths Preparation (UK) | Ages 9-11 (UK) |

Robotics/micro:bit was considered and DROPPED by owner decision (hardware dependency weakest fit for live-online).

## Content standard (every course)

Match the professionalized data model already used by the best existing courses (see `content/courses/data/python-teens.json` and the 2026-07-09 course-overhaul conventions in `scripts/generate-courses.js`):

- `meta`: title, slug (from table above), description, age range, level, schedule (live 1-hour classes, 2x/week), duration, thumbnail path.
- `program_overview`: what_makes_this_different, learning_path, career_outcomes (honest, no salary promises).
- Curriculum: `phase_N_*` → `month_*` → `week_*` objects with `title`, `topics` (5-7), `projects`, `practice`, and `assessment` on milestone weeks. Depth comparable to existing courses (12-24 weeks typical; exam courses may structure by syllabus unit + revision + mock-exam phases).
- `additional_learning_resources`: projects_throughout_course, weekly_structure, certification (completion certificate, honest wording), support_provided.
- `prerequisites`, `who_is_this_for`, `career_paths_after_completion` (list), 8-9 `faqs` (each course's FAQs unique and specific).
- `course_guarantees`: ONLY the standardized honest set (live small batches / structured curriculum / doubt support / certificate / free demo). NO placement %, salary promises, money-back, hiring partners, recorded-sessions claims.
- `salary_expectations`: only where the site convention allows (career/college/adult courses), as disclaimed market ranges; NONE on kids/school/teen courses.
- NO emoji anywhere, NO em/en dashes anywhere. No fabricated statistics, students, or outcomes.
- Accuracy: CBSE course uses the current 2026-27 Class 10 syllabus; A-Level reflects current UK spec structure (Pure/Mechanics/Statistics); GRE/GMAT reflect current exam formats (GRE shorter format, GMAT Focus); JEE Foundation aligned to Class 8-10 NCERT+foundation topics; Roblox uses Luau, Minecraft uses age-appropriate tools (MakeCode/Education Edition-style block-to-code). Web-verify exam-format facts during build.
- Cybersecurity-teens is strictly DEFENSIVE/ethical education: online safety, how attacks work conceptually, password/encryption basics, phishing recognition, safe coding habits, CTF-style puzzles, white-hat ethics. No offensive tooling instruction.
- Trademark care (Roblox/Minecraft): descriptive use only, include a "not affiliated with/endorsed by" line in the course FAQ, consistent with the existing Tier-4 landing pages.

## Thumbnails (16)

- 800x450, exported as BOTH `.webp` and `.png` to `public/images/<file>.webp/png` (file = JSON filename, matching the existing convention).
- Rendered via the established HTML-poster → Playwright screenshot pipeline (playwright-core + installed Chrome, as in `marketing/` render scripts): design each as a small HTML card in the warm brand design DNA (notebook warmth, real typography, subject-specific motif such as code fragments/geometry/abacus beads drawn in CSS/SVG).
- NO emoji, no AI-look gradients, no stock clichés; readable course title on the thumbnail; consistent family feel with per-subject color variation.

## Wiring (per course)

1. JSON in `content/courses/data/` — auto-served at `/courses/<slug>` via the existing catch-all (NO `_redirects`/`netlify.toml` changes needed).
2. `sitemap.xml`: one entry per course URL (`/courses/<seo-slug>`), matching existing course entry format.
3. `src/pages/course.html` `coursesData` array: one entry per course (unique numeric id continuing existing ranges, correct `category`, `ageGroup`, `difficulty`, `skills` [4], `badges`, `templateUrl` = `/courses/<seo-slug>`, `imageUrl` = `<file>.webp`) so /courses listing + filters work.
4. `src/pages/course-atlas.html`: one `nx-card` per course in the right track section with `data-track`, `data-search`, title, description, thumbnail.
5. Regenerate locally: `npm run generate:courses` (output gitignored; Netlify rebuilds on deploy). Commit JSONs + thumbnails + course.html + course-atlas.html + sitemap.xml only.

## Verification

- `npm run generate:courses`: all 16 generate without errors (courses-config "failure" is expected and harmless).
- Playwright on dev server for a sample of at least 6 generated pages (mix coding/maths/kids/exam): 0 console errors, all tabs populated (no "No information available"), curriculum accordion renders, pricing correct (maths premium intl vs coding standard).
- Sweep all 16 JSONs: 0 emoji, 0 em/en dashes, 0 fabrication markers (placement %, salary promises on kids courses, recorded sessions, invented stats).
- /courses listing and /course-atlas show all 16 cards with loading thumbnails; filters place each course correctly.
- Sitemap parses; 16 new entries.

## Success criteria

- 16 enrollable course pages live at their SEO slugs with complete professional detail pages.
- 16 brand thumbnails (webp+png) rendering on all catalog surfaces.
- All catalog surfaces updated (courses listing, atlas, sitemap).
- Zero integrity violations, zero emoji/dashes, exam facts current for 2026.
