# Codex + Claude Code 24-Class Course — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a 24-class "Codex + Claude Code: AI Coding Agents Masterclass" as two age-tuned course pages (Teens + Adults/Professionals), fully wired into the catalog, pricing, routing, and sitemap.

**Architecture:** Two JSON source files in `content/courses/data/` drive generated detail pages via `scripts/generate-courses.js`. Each phase holds `week_*` keys (one per Class) rendered as collapsible blocks (Topics/Projects/Practice/Assessment). Catalog cards live in `course.html`'s `coursesData` array. Routing is duplicated in `_redirects` + `netlify.toml`; the page is listed in `sitemap.xml`.

**Tech Stack:** Plain JSON content, Node generator, static HTML/JS catalog, Netlify redirects.

**Reference:** Full feature inventory + 24-class spine in `docs/superpowers/specs/2026-05-27-codex-claude-code-course-design.md`. Content must name current versions (Claude Code v2.1.x / Opus 4.7; Codex CLI / GPT-5.3-Codex / GPT-5.5) and include the living-syllabus promise.

**Encoding note:** Save all JSON as UTF-8. Use the literal `₹` symbol (existing files show mojibake from a past bad write — do NOT copy that; write clean `₹`).

---

### Task 1: Teens course JSON

**Files:**
- Create: `content/courses/data/codex-claude-code-teens.json`

- [ ] **Step 1: Write `meta` block**

```json
"meta": {
  "slug": "codex-and-claude-code-ai-coding-agents-course-for-teens",
  "title": "Codex & Claude Code for Teens — AI Coding Agents Masterclass (24 Classes)",
  "description": "Learn OpenAI Codex and Anthropic Claude Code — the two leading AI coding agents — in 24 hands-on classes built for teens 13-18. Install the CLIs, master plan/goal mode, MCP, subagents, GitHub PRs and ship a real app. Beginner-friendly, project-based, living syllabus updated as new features ship.",
  "keywords": ["codex course for teens","claude code course","ai coding agents course","learn openai codex","claude code for beginners","agentic coding for teens","vibe coding with ai","openai codex tutorial","anthropic claude code training","ai coding for students","gpt-5-codex course","claude code cli","ai pair programming course","teen coding course ai"],
  "category": "AI Coding Agents",
  "price": { "group": "₹1,499/month", "personal": "₹4,999/month", "lifetime": "₹44,999 (one-time)" },
  "duration": "24 classes (12 weeks · 2 classes/week)",
  "level": "Beginner-friendly (ages 13-18) to confident AI-agent builder",
  "commitment": "3-4 hours/week recommended",
  "certification": "Modern Age Coders AI Coding Agents certificate for teens upon completion",
  "image_path": "ai-tools-kids.png"
}
```

- [ ] **Step 2: Write `program_overview`** with keys `title`, `tagline`, `description`, `what_makes_this_different` (array — include a "Living Syllabus" bullet), `learning_path` (array naming the 5 phases), `career_outcomes` (array, teen framing: portfolio, school projects, future-ready). Mention Claude Code (Opus 4.7) and Codex (GPT-5.3-Codex/GPT-5.5) explicitly.

- [ ] **Step 3: Write the 5 phase objects** (`phase_1_foundations`, `phase_2_workflow`, `phase_3_extending`, `phase_4_cloud_scale`, `phase_5_build_ship`), each with `title`, `description`, and `week_N` keys per the spine. Teen tone/projects. Class → week mapping:
  - `phase_1_foundations`: week_1..week_5 (Classes 1-5)
  - `phase_2_workflow`: week_6..week_11 (Classes 6-11)
  - `phase_3_extending`: week_12..week_17 (Classes 12-17)
  - `phase_4_cloud_scale`: week_18..week_21 (Classes 18-21)
  - `phase_5_build_ship`: week_22..week_24 (Classes 22-24)

  Each `week_N` shape (example — Class 3):
```json
"week_3": {
  "title": "Class 3: Installing & Using the OpenAI Codex CLI",
  "topics": [
    "What Codex CLI is — an open-source AI coding agent that lives in your terminal",
    "Install it: npm install -g @openai/codex (Node 18+). Watch out — plain 'codex' is a different package!",
    "Sign in two ways: 'Sign in with ChatGPT' (uses your plan) vs an API key",
    "Start it: type codex to open the interactive TUI; check health with codex doctor",
    "Pick your model & thinking level with /model (low → xhigh) — defaults to GPT-5.3-Codex / GPT-5.5 in 2026",
    "Give your first instruction in plain English and watch Codex plan and edit",
    "Read the AGENTS.md idea — how Codex learns your project's rules"
  ],
  "projects": ["Install Codex, run codex doctor, and have Codex add a feature to a tiny starter repo"],
  "practice": "Ask Codex to explain a file in your project line-by-line, then ask it to add comments.",
  "assessment": "Screenshot a successful Codex session that edited a file and explain what each approval prompt meant."
}
```
  Write all 24 classes following the spine in the spec, 6-12 `topics` each with real commands/flags/file paths and a one-line example, 1-3 `projects`, a `practice`, and an `assessment`. Teen-appropriate capstone in Class 24 (e.g., personal site / game / Discord bot shipped with both agents).

- [ ] **Step 4: Write standard sections** — `prerequisites` (object: a laptop, basic typing, curiosity; no prior coding required), `who_is_this_for` (object), `career_paths_after_completion` (array of teen-relevant outcomes), `salary_expectations` (object — frame as "future earning potential / internship readiness" for teens), `course_guarantees` (object incl. a `living_syllabus` guarantee), `additional_learning_resources` (object with official doc links: code.claude.com/docs, developers.openai.com/codex), `why_this_course` (object), `success_metrics` (object), `faqs` (array — see Step 5), `testimonials` (array, realistic), `related_courses` (array of 3 existing slugs, e.g. `vibe-coding-for-teens-python-web-ai-projects-course`, `python-complete-masterclass-teens` if present, `gen-ai`/an AI course).

- [ ] **Step 5: Write `faqs`** including these AEO-targeted questions (plus 4-6 more): "Is OpenAI Codex free?"; "Do I need to know how to code before taking this?"; "Codex vs Claude Code — which should a teen learn first?"; "Will this course go out of date?" (answer states the **living syllabus** — updated as new Codex/Claude Code features and models ship); "What can my teen build by the end?"

- [ ] **Step 6: Validate JSON parses**

Run: `node -e "JSON.parse(require('fs').readFileSync('content/courses/data/codex-claude-code-teens.json','utf8')); console.log('OK')"`
Expected: `OK`

- [ ] **Step 7: Commit**

```bash
git add content/courses/data/codex-claude-code-teens.json
git commit -m "feat(course): add Codex + Claude Code 24-class course (teens)"
```

---

### Task 2: Adults / Professionals course JSON

**Files:**
- Create: `content/courses/data/codex-claude-code-adults.json`

- [ ] **Step 1: Write `meta`** — same shape as Task 1 but:
  - `slug`: `codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals`
  - `title`: `Codex & Claude Code Masterclass for Adults & Professionals — AI Coding Agents (24 Classes)`
  - `description`: career/productivity framing (ship features faster, automate engineering work, lead AI-assisted teams).
  - `keywords`: include `codex for professionals`, `claude code for developers`, `ai coding agents for work`, `claude agent sdk course`, `codex sdk`, `agentic coding masterclass`, `ai developer productivity course`, plus the shared ones.
  - `level`: `Beginner to advanced — for working professionals, career switchers & developers`
  - `commitment`: `4-6 hours/week recommended`
  - `lifetime` price: `₹49,999 (one-time)`; `image_path`: `ai-tools-college.png`

- [ ] **Step 2-5: Same structure as Task 1** (program_overview, 5 phases / 24 classes, standard sections, faqs) but **adult tone**: workplace examples (fix a flaky test suite, refactor a legacy module, automate a release), team workflows (subagents, `/batch`, agent teams, GitHub code review at scale), SDK automation in CI, deeper security/sandboxing treatment. Capstone (Class 24) = ship a production-grade feature/app and an automation script using the SDKs. `salary_expectations` framed as real LPA/USD progression. `related_courses` = adult/college slugs (e.g. `vibe-coding-for-college-fullstack-ai-dsa-career-course`, `complete-generative-ai-masterclass-college`, `full-stack-web-development-masterclass-college`). FAQs include "Can I use this at my job?", "Codex vs Claude Code for teams?", "Does it cover the Claude Agent SDK and Codex SDK?", and the living-syllabus FAQ.

- [ ] **Step 6: Validate JSON parses**

Run: `node -e "JSON.parse(require('fs').readFileSync('content/courses/data/codex-claude-code-adults.json','utf8')); console.log('OK')"`
Expected: `OK`

- [ ] **Step 7: Commit**

```bash
git add content/courses/data/codex-claude-code-adults.json
git commit -m "feat(course): add Codex + Claude Code 24-class course (adults/professionals)"
```

---

### Task 3: Catalog cards in course.html

**Files:**
- Modify: `src/pages/course.html` (`coursesData` array — insert teens card before `// COLLEGE COURSES` at ~line 1672; insert professional card within the college/professional block)

- [ ] **Step 1: Add the Teens card** to `coursesData` (use a free numeric `id`, e.g. `301`):

```js
{
    id: 301, category: 'ai-ml', title: 'Codex + Claude Code (AI Coding Agents)',
    description: 'Master OpenAI Codex & Anthropic Claude Code in 24 hands-on classes. Install the CLIs, use plan/goal mode, MCP, subagents & GitHub PRs, then ship a real app. Living syllabus — updated as new features drop.',
    skills: ['OpenAI Codex CLI', 'Claude Code', 'AI Agents + MCP', 'GitHub PRs'], difficulty: 'beginner', ageGroup: 'teens',
    badges: ['new', 'hot', 'future-skill'], templateUrl: '/courses/codex-and-claude-code-ai-coding-agents-course-for-teens', imageUrl: 'ai-tools-kids.png'
},
```

- [ ] **Step 2: Add the Professionals card** (id `302`, `ageGroup: 'professional'`):

```js
{
    id: 302, category: 'ai-ml', title: 'Codex + Claude Code Masterclass (Pro)',
    description: 'Ship faster with OpenAI Codex & Claude Code. 24 classes: CLIs, plan/goal mode, MCP, subagents, hooks, cloud parallel agents, GitHub code review, the Agent & Codex SDKs + a production capstone. Living syllabus.',
    skills: ['Codex + Claude Code', 'MCP + Subagents', 'Agent SDK + Codex SDK', 'CI + GitHub'], difficulty: 'intermediate', ageGroup: 'professional',
    badges: ['new', 'hot', 'career'], templateUrl: '/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', imageUrl: 'ai-tools-college.png'
},
```

- [ ] **Step 3: Verify both inserted, array still valid**

Run: `node -e "const s=require('fs').readFileSync('src/pages/course.html','utf8'); console.log(s.includes('id: 301')&&s.includes('id: 302')?'OK':'MISSING')"`
Expected: `OK`

- [ ] **Step 4: Commit**

```bash
git add src/pages/course.html
git commit -m "feat(course): add Codex + Claude Code cards to catalog (teens + pro)"
```

---

### Task 4: Pricing in courses-config.json

**Files:**
- Modify: `content/courses/data/courses-config.json` (add two entries under `courses`)

- [ ] **Step 1: Add pricing entries** keyed by each slug, mirroring the `meta.price` tiers (group ₹1,499, miniBatch ₹2,499 indiaOnly, personal ₹4,999, lifetime ₹44,999 teens / ₹49,999 adults). Match the existing object shape (see `vibe-coding-for-teens-...`).

- [ ] **Step 2: Validate JSON parses**

Run: `node -e "JSON.parse(require('fs').readFileSync('content/courses/data/courses-config.json','utf8'));console.log('OK')"`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add content/courses/data/courses-config.json
git commit -m "feat(course): add pricing for Codex + Claude Code courses"
```

---

### Task 5: Routing — _redirects + netlify.toml + sitemap.xml

**Files:**
- Modify: `_redirects`
- Modify: `netlify.toml`
- Modify: `sitemap.xml`

- [ ] **Step 1: Inspect existing course-route patterns** in all three files to copy the exact format.

Run: `grep -n "vibe-coding-for-teens" _redirects netlify.toml sitemap.xml`
Expected: shows the rewrite + sitemap `<url>` patterns to mirror.

- [ ] **Step 2: Add both clean URLs to `_redirects`** using the same rewrite pattern existing courses use (clean URL → generated path, status 200 rewrite).

- [ ] **Step 3: Add both to `netlify.toml`** mirroring the existing `[[redirects]]` blocks for courses.

- [ ] **Step 4: Add both `<url>` entries to `sitemap.xml`** (loc = `https://learn.modernagecoders.com/courses/<slug>`, lastmod `2026-05-27`, copy priority/changefreq from a sibling course).

- [ ] **Step 5: Verify all three reference both slugs**

Run: `grep -c "codex-and-claude-code" _redirects netlify.toml sitemap.xml`
Expected: each file ≥ 2.

- [ ] **Step 6: Commit**

```bash
git add _redirects netlify.toml sitemap.xml
git commit -m "feat(seo): route + sitemap Codex + Claude Code course pages"
```

---

### Task 6: Generate & verify

**Files:** none (build + verification)

- [ ] **Step 1: Run the course generator**

Run: `npm run generate:courses`
Expected: completes without error; log lines `📄 Generating: codex-and-claude-code-...` for both slugs and `✅ Successfully generated` for each.

- [ ] **Step 2: Confirm both pages were emitted**

Run: `ls content/courses/generated/codex-and-claude-code-ai-coding-agents-course-for-teens/ content/courses/generated/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals/`
Expected: an `index.html` (or the course HTML file) exists in each.

- [ ] **Step 3: Spot-check rendered content** — confirm "Class 1" … "Class 24", both tool names, version numbers, and the living-syllabus text appear.

Run: `grep -l "Class 24" content/courses/generated/codex-and-claude-code-*/*.html && grep -ri "updated as" content/courses/generated/codex-and-claude-code-ai-coding-agents-course-for-teens/ | head -1`
Expected: matches in both pages.

- [ ] **Step 4: Run schema validation if present**

Run: `node scripts/validate-courses-schema.js 2>/dev/null || echo "no validator / skipped"`
Expected: pass or graceful skip.

- [ ] **Step 5: Final commit (any generated-file-driven fixes)** — generated HTML is gitignored, so this commit only captures any source fixes made during verification.

```bash
git add -A && git commit -m "chore(course): verify Codex + Claude Code course generation" || echo "nothing to commit"
```

---

## Self-Review

- **Spec coverage:** Deliverables 1-2 → Tasks 1-2; card (3) → Task 3; pricing (4) → Task 4; routing (5) + sitemap (6) → Task 5; generation verified (7) → Task 6. 24-class spine, version-naming, living-syllabus, SEO/AEO keywords all specified in Tasks 1-2 & 5. ✅
- **Placeholder scan:** Class content is intentionally generated during execution from the spec's spine + the worked `week_3` example + per-class content rules (Step 3 enumerates exact structure, counts, and an example). No "TBD"/"add error handling" placeholders. ✅
- **Consistency:** Slugs, `templateUrl`s, ids (301/302), phase keys, and image paths match across Tasks 1-5. ✅
