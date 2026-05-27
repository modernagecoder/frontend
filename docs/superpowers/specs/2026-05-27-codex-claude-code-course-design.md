# Design Spec — "Codex + Claude Code: AI Coding Agents Masterclass" (24 Classes)

**Date:** 2026-05-27
**Author:** Claude Code (with mahaviracodingclasses@gmail.com)
**Status:** Approved design → ready for implementation plan

---

## 1. Goal

Add a new, ultra-detailed, SEO-rich course teaching **OpenAI Codex** and **Anthropic Claude Code** — the two leading agentic AI coding tools — structured as **24 numbered classes**. Ship it in **two age-tuned versions** (Teens 13–18, and Adults / Professionals 18+) so it appears in the Teens and Adults/Professionals sections of the course catalog.

Content must:
- Cover **every major feature** of both tools as of **May 2026**, with concrete commands and worked examples.
- Name current versions concretely (Claude Code v2.1.x on **Opus 4.7**; Codex CLI on **GPT-5.3-Codex / GPT-5.5**) for SEO + credibility.
- Carry a prominent **"Living Syllabus — updated as new Codex & Claude Code features ship"** message (overview + FAQ).
- Be rich in SEO/AEO keywords throughout.

## 2. Architecture (how courses work in this repo)

- **Catalog page** `src/pages/course.html` holds a `coursesData` JS array; each entry renders a card filtered by `ageGroup` (`teens`, `professional`, `college`, `kids`, `girls`). New cards are added here.
- **Course detail pages** are generated from `content/courses/data/*.json` by `scripts/generate-courses.js` (`npm run generate:courses`). The generated HTML in `content/courses/generated/` is **gitignored** — Netlify rebuilds it. **Only the JSON is source of truth.**
- **Generator rendering hierarchy:** `phase_N_*` → (`month_*` →) `week_*`. A phase may contain `week_*` keys **directly** (no month wrapper) — confirmed via the fallback at `generate-courses.js:417`. We use this: **each phase contains `week_*` keys where each "week" = one Class.**
  - A `week_*` renders: `title`, `topics[]` (📚 Topics Covered), `projects[]` (🚀 Projects), `practice` (💪 Practice), `assessment` (🎯 Assessment).
- **Standard sections consumed by the generator:** `meta`, `program_overview`, `prerequisites` (object), `who_is_this_for` (object), `career_paths_after_completion` (array), `salary_expectations` (object), `course_guarantees` (object), `faqs` (array of {question, answer}), `additional_learning_resources` (object), `why_this_course` (object, optional), `success_metrics` (object, optional), `testimonials`, `related_courses`/`relatedCourses`.
- **Routing rule (critical):** a page 404s unless its clean URL is added to **both** `_redirects` and `netlify.toml`, plus listed in `sitemap.xml`. (Project memory: `project_page_routing_404`.)
- **Pricing** is registered per-slug in `content/courses/data/courses-config.json`.

## 3. Deliverables

| # | Artifact | Path |
|---|---|---|
| 1 | Teens course JSON (24 classes) | `content/courses/data/codex-claude-code-teens.json` |
| 2 | Adults course JSON (24 classes) | `content/courses/data/codex-claude-code-adults.json` |
| 3 | Two catalog cards (teens + professional) | `src/pages/course.html` (`coursesData`) |
| 4 | Pricing entries (both slugs) | `content/courses/data/courses-config.json` |
| 5 | Clean-URL routes (both slugs) | `_redirects` **and** `netlify.toml` |
| 6 | Sitemap entries (both slugs) | `sitemap.xml` |
| 7 | Generation verified | `npm run generate:courses` runs clean |

**Slugs:**
- Teens: `codex-and-claude-code-ai-coding-agents-course-for-teens`
- Adults: `codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals`

## 4. The 24-Class Spine (shared by both versions)

**Phase 1 — Foundations of AI Coding Agents (Classes 1–5)**
1. What are AI coding agents? Agentic coding, Codex vs Claude Code landscape, when to use which.
2. Install & set up **Claude Code** (native installer, `claude auth login`, Pro/Max plans, first session, the REPL).
3. Install & set up **OpenAI Codex CLI** (`npm i -g @openai/codex`, Sign in with ChatGPT vs API key, `codex` TUI, `codex doctor`).
4. **Approval & permission modes** — Claude (`default` / `acceptEdits` / `plan` / `auto`, `Shift+Tab`) vs Codex (`read-only` / `workspace-write` / `danger-full-access`, `/approvals`).
5. Your first real task in both tools — fix a bug + add a small feature; reading the diff and accepting changes.

**Phase 2 — Daily Coding Workflow (Classes 6–11)**
6. Slash commands & session control — Claude (`/help`, `/clear`, `/compact`, `/context`, `/model`); Codex (`/model`, `/approvals`, `/review`, `/status`).
7. **Plan mode** (Claude `/plan`) & **Goal mode** (Codex/Claude `/goal`) — think before acting.
8. Reading, editing, diffs, multi-file changes; `@`-mentioning files.
9. Running commands, tests, and git from inside the agent.
10. **Project memory** — `CLAUDE.md` (+ `/init`, auto-memory) and `AGENTS.md` (root + nested + `~/.codex/AGENTS.md`).
11. **Checkpoints, rewind, undo, resume** — Claude `/rewind`, `--continue`/`--resume`; Codex session resume & history search.

**Phase 3 — Extending & Connecting the Agents (Classes 12–17)**
12. **MCP (Model Context Protocol)** — connecting external tools/data to both agents (`claude mcp add`, Codex `[mcp_servers.*]`).
13. **Skills & custom slash commands** (Claude skills/`/skills`); **Codex plugins, profiles & marketplace**.
14. **Subagents** — Claude specialized agents (`.claude/agents/`, `/agents`), built-ins (Explore/Plan).
15. **Hooks & automation** — Claude lifecycle hooks (`PreToolUse`/`PostToolUse`, etc.).
16. **Models & reasoning effort** — Opus 4.7 / Sonnet / Haiku vs GPT-5.3-Codex / GPT-5.5; effort levels `low`→`xhigh`, 1M context, `ultrathink`.
17. **Multimodal inputs** — screenshots, images, Codex **Appshots**; debugging from a picture.

**Phase 4 — Cloud, Collaboration & Scale (Classes 18–21)**
18. **Codex Cloud** — delegating parallel tasks, sandboxed environments, auto-generated PRs.
19. **Claude Code everywhere** — web (`claude.ai/code`), desktop, mobile/remote control, background agents.
20. **GitHub integration & code review** — `@codex review`, `/code-review`, GitHub Actions / CI.
21. **Parallel agents at scale** — git worktrees, `/batch`, agent teams.

**Phase 5 — Build, Secure & Ship (Classes 22–24)**
22. **Building with the SDKs** — Claude Agent SDK & Codex SDK (headless `claude -p`, `codex exec`, structured output).
23. **Security, sandboxing & responsible AI coding** — permission rules, OS sandboxes (Seatbelt/bubblewrap/Windows Sandbox), secrets, prompt injection.
24. **Capstone** — ship a real full app end-to-end using both agents; certification.

### Age tuning
Same 24 classes; tone, examples, projects, and outcomes differ:
- **Teens:** school/portfolio framing, lighter projects (e.g., build a personal site, a game, a Discord bot), confidence + future-ready messaging, parent-facing reassurance.
- **Adults/Professionals:** workplace productivity, shipping features at work, team workflows, career ROI, automation of real engineering tasks.

## 5. Per-class JSON content rules
Each `week_*` (= one class) includes:
- `title`: e.g. `"Class 3: Installing & Mastering the OpenAI Codex CLI"`.
- `topics[]`: 6–12 bullet points — features **with the actual command/flag/file** and a one-line example.
- `projects[]`: 1–3 concrete hands-on labs.
- `practice`: a short exercise sentence.
- `assessment`: a checkpoint/quiz/deliverable sentence.

## 6. SEO / AEO
- `meta.title`, `meta.description`, `meta.keywords[]` keyword-rich: "Codex course", "Claude Code course", "AI coding agents course", "learn Codex CLI", "Claude Code for teens/beginners", "agentic coding masterclass", "vibe coding with AI", "OpenAI Codex tutorial", "Anthropic Claude Code training".
- `program_overview` and FAQ both state the **living-syllabus** promise.
- `faqs` target question-style queries (AEO): "Is Codex free?", "Do I need to know coding to use Claude Code?", "Codex vs Claude Code — which is better?", "Which AI coding tool should a beginner learn?".

## 7. Living-syllabus message (exact intent)
Overview callout + dedicated FAQ stating: *the curriculum is continuously updated as OpenAI Codex and Anthropic Claude Code release new features, models, and capabilities — enrolled students always learn the latest.*

## 8. Out of scope
- No changes to the generator, template, or unrelated courses.
- No new images required (reuse an existing course image or a generic one in `meta.image_path`); a bespoke hero image is optional/nice-to-have, not blocking.
- Generated HTML is not committed (gitignored).

## 9. Verification
- `npm run generate:courses` completes without error and emits both slugs.
- Both clean URLs present in `_redirects`, `netlify.toml`, `sitemap.xml`.
- Both cards appear under Teens and Adults/Professionals filters in `course.html`.
- JSON validates (`node scripts/validate-courses-schema.js` if applicable).
