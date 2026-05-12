# Download Curriculum Button — Design Spec

**Date:** 2026-05-13
**Status:** Approved (pending user review of this written spec)
**Scope:** Add a "Download Curriculum (PDF)" button to every course detail page. The PDF is generated client-side on click, populated from the same course JSON that drives the rendered page.

---

## Goal

Parents and prospective students should be able to download a clean, branded PDF of any course's curriculum from the course page. The PDF must auto-stay in sync with `content/courses/data/*.json` so editing a course JSON updates both the webpage and the PDF on the next build — no separate PDF maintenance.

## Non-goals

- No lead-capture modal before download.
- No pricing, enrollment CTAs, testimonials, or footer marketing copy in the PDF — curriculum content only.
- No pre-built static PDF files in the repo or on Netlify build.
- No per-course customization of the PDF layout — one template, JSON-driven.

---

## Architecture

```
[Course page] --click--> [download-curriculum.js]
                              |
                              v
                  lazy-load jsPDF (CDN, ~100KB)
                              |
                              v
              read <script id="course-curriculum-data" type="application/json">
                              |
                              v
                   build PDF (cover + overview + curriculum)
                              |
                              v
                save as {slug}-curriculum.pdf
```

Course data flows: `content/courses/data/{file}.json` → `scripts/generate-courses.js` → injected into the generated `content/courses/generated/{slug}/index.html` as an inline JSON `<script>` tag → read at click time by `download-curriculum.js`.

---

## Components

### 1. Template change — `content/courses/template/course-template.html`

**Add button** inside `<section class="course-hero">` → inside `<div class="course-hero-content">`, as the last child (directly after the closing `</div>` of `.course-meta-badges`). The button must be visible without scrolling, in the hero — this is "in the starting only" per the request.

```html
<div class="hero-cta-row">
  <button type="button" id="downloadCurriculumBtn" class="download-curriculum-btn">
    <svg class="dl-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    <span class="dl-label">Download Curriculum (PDF)</span>
  </button>
</div>
```

**Add data tag** at the end of `<main>` (before nav-related scripts):

```html
<script id="course-curriculum-data" type="application/json">{{CURRICULUM_DATA_JSON}}</script>
```

**Add script** in the existing script-loading block:

```html
<script src="/src/js/download-curriculum.js" defer></script>
```

**Add stylesheet** (the button styling should be in a dedicated file for clarity):

```html
<link rel="stylesheet" href="/src/css/download-curriculum.css">
```

### 2. Generator change — `scripts/generate-courses.js`

Replace the new `{{CURRICULUM_DATA_JSON}}` placeholder with the curriculum-relevant slice of the course JSON, serialized and HTML-safe-escaped.

**Curriculum-relevant slice** = `meta` + `program_overview` + every top-level key whose name starts with `phase_`. This keeps the inlined payload small (typically 10–30KB per course) and excludes pricing/testimonial/career-tangent keys that aren't part of the curriculum.

Implementation:

```js
function buildCurriculumPayload(courseData) {
  const payload = {
    meta: courseData.meta || {},
    program_overview: courseData.program_overview || null,
  };
  for (const key of Object.keys(courseData)) {
    if (key.startsWith('phase_')) payload[key] = courseData[key];
  }
  return payload;
}

// During template substitution:
const curriculumJson = JSON.stringify(buildCurriculumPayload(courseData))
  .replace(/</g, '\\u003c'); // prevent </script> injection
html = html.replace('{{CURRICULUM_DATA_JSON}}', curriculumJson);
```

### 3. PDF builder — `src/js/download-curriculum.js` (NEW)

Single file. Public surface = nothing global; it self-attaches to `#downloadCurriculumBtn` on `DOMContentLoaded`.

Responsibilities:
1. Wire the button click handler.
2. Lazy-load jsPDF v2.5.1 UMD from `https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js` on first click. Cache the promise so subsequent clicks reuse it.
3. Read and `JSON.parse` the contents of `#course-curriculum-data`.
4. Build the PDF (see "PDF structure" below).
5. Save with filename `{meta.slug || fallback}-curriculum.pdf`.
6. Handle loading and error UI states.

**Loading state**: while jsPDF is loading and the PDF is being built, swap the button icon for a spinner SVG and change label to `"Preparing PDF…"`. Disable the button. On completion, restore.

**Error state**: if jsPDF fails to load or the JSON tag is missing/invalid, show an inline text below the button: `"Download failed — please refresh and try again."` Restore the button. Do not throw to console silently.

### 4. PDF structure

Page size: A4. Margins: 18mm left/right, 20mm top/bottom. Body font: Helvetica (jsPDF built-in). Page numbers and brand footer on every page.

**Page 1 — Cover**
- Top band (full width, 60mm tall): amber→coral gradient `#f59e0b → #ef4444`. Inside: white "MODERN AGE CODERS" wordmark, small caps.
- Course title (Helvetica bold, 22pt, dark color), wrapped to width.
- Tagline from `program_overview.tagline` (Helvetica italic, 13pt).
- Meta strip: four pills — Duration, Level, Commitment, Certification — pulled from `meta`.
- Generation date line (on cover only, not in every-page footer): `Generated on <ISO date>` in 9pt grey.

**Page 2 — Program Overview**
- Section heading "Program Overview".
- `program_overview.description` body paragraph(s).
- "What Makes This Different" — bulleted list from `program_overview.what_makes_this_different`.
- "Your Learning Journey" — four cards built from `program_overview.learning_path` (phase_1…phase_4 keys).
- "Career Progression" — numbered list from `program_overview.career_outcomes`.

**Pages 3+ — Curriculum body**
A generic walker iterates `Object.keys(payload)` in original JSON order, picking every key matching `/^phase_\d+/`. For each phase node:

- Render phase title (16pt bold) and description (10pt).
- Recurse into the phase: find every nested key matching `/^month_/`. For each month node:
  - Render month title (13pt bold) + weeks-range subtitle if present.
  - Find every nested key matching `/^week_/`. For each week node:
    - Render week title (11pt bold).
    - If `topics` array exists: render as bulleted list (`•`).
    - If `projects` array exists: render under a "Projects:" subheading as bulleted list.
    - If `practice` (string) exists: render as `Practice: <value>`.
    - If `assessment` (string) exists: render as `Assessment: <value>`.

The walker also handles `deliverables` (string array, rendered as bullets) so the final-month structure works.

**Fallback for non-standard courses**: if a course has no `phase_*` keys, the walker iterates top-level keys (excluding `meta`, `program_overview`) and renders any value that is an object with a `title` and one of `description`/`topics`/`projects`. This preserves PDF generation for courses with shorter, less-nested schemas.

**Footer on every page** (rendered via `doc.setPage` loop after content is laid out):
- Left: `Modern Age Coders · learn.modernagecoders.com`
- Right: `Page <n> of <total>`
- 8pt grey.

### 5. Button styling — `src/css/download-curriculum.css` (NEW)

Vibrant amber→coral gradient (NOT purple — explicit per user requirement; purple is already the dominant page accent).

```css
.hero-cta-row {
  margin-top: 1.25rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.download-curriculum-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.5rem;
  border: 0;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  box-shadow: 0 8px 22px rgba(239, 68, 68, 0.35), 0 2px 6px rgba(245, 158, 11, 0.25);
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
  letter-spacing: 0.01em;
}
.download-curriculum-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(239, 68, 68, 0.45), 0 4px 10px rgba(245, 158, 11, 0.3);
  filter: brightness(1.05);
}
.download-curriculum-btn:active { transform: translateY(0); }
.download-curriculum-btn:disabled { opacity: .7; cursor: progress; }

.download-curriculum-btn .dl-icon { flex-shrink: 0; }

.download-curriculum-btn.is-loading .dl-icon { animation: dl-spin 0.9s linear infinite; }
@keyframes dl-spin { to { transform: rotate(360deg); } }

.download-curriculum-error {
  margin-top: 0.6rem;
  font-size: 0.875rem;
  color: #fecaca;
}

@media (max-width: 600px) {
  .download-curriculum-btn { width: 100%; justify-content: center; }
}
```

---

## Data flow & sync guarantee

1. Author edits `content/courses/data/ai-ml-teens.json` and pushes.
2. Netlify build runs `npm run generate:all` → `generate-courses.js`.
3. The generator writes the updated JSON into the rendered `index.html`'s `#course-curriculum-data` script tag.
4. Next visitor clicks the button → PDF is built from the freshly-baked JSON.

**No PDF caching, no stale data.** The PDF is a function of the JSON at build time, not at write time.

---

## Edge cases

| Case | Handling |
|---|---|
| Course JSON has no `phase_*` keys | Walker falls back to rendering any top-level object with `title` + (`description`/`topics`/`projects`). |
| `program_overview` is missing | Skip the entire Program Overview page; go from cover straight to curriculum. |
| `meta.slug` is missing | Fallback filename: `course-curriculum.pdf`. |
| jsPDF CDN blocked / offline | Show inline error text under button. Do not retry automatically. |
| `#course-curriculum-data` tag missing (older generated page) | Show inline error; log a console warning naming the missing tag so devs notice. |
| Very long curricula (100+ weeks) | jsPDF auto-paginates; the walker calls `doc.addPage()` when y-cursor exceeds the bottom margin. |
| Markdown/HTML inside JSON strings | Render as plain text — do not parse. (The course-engine.js does not render HTML from JSON values either, so this matches existing behavior.) |
| User clicks button repeatedly while loading | Button is `disabled` during load; second click is ignored. |

---

## Testing

Manual:
1. Run `npm run generate:courses` after the template change. Confirm `index.html` files now contain `<script id="course-curriculum-data" type="application/json">{…}</script>`.
2. Serve locally via `npm run dev` and load `/courses/ai-ml-masterclass-teens/`.
3. Click the button: verify spinner appears, then a PDF downloads.
4. Open the PDF: confirm cover, overview, all four phases, footers, page numbers.
5. Edit `content/courses/data/ai-ml-teens.json` (change a week's title), regenerate, click again. Confirm PDF reflects the edit.
6. Test on 3 other courses with different structures (e.g., a short single-phase course, a long multi-phase one, one without `program_overview`).
7. Test on mobile viewport — button should be full-width, tap target ≥ 44px.
8. Block CDN in DevTools → confirm error state shows the right text.

---

## Files touched (summary)

```
M  content/courses/template/course-template.html
M  scripts/generate-courses.js
A  src/js/download-curriculum.js
A  src/css/download-curriculum.css
```

73 courses regenerate from those four file changes via `npm run generate:courses`. No per-course edits.

---

## Out of scope (deferred)

- Lead-capture modal (user said no).
- A separate "Save as Image" share variant.
- Translations (PDF is English; the site is currently English-only).
- Custom PDF themes per course category (Coding vs Mathematics vs Girls' track).
