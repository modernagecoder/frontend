# Download Curriculum Button — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a vibrant amber→coral "Download Curriculum (PDF)" button to every course detail page that generates a branded PDF on click, populated from the course JSON and always in sync with it.

**Architecture:** Plain-HTML/JS site. The course generator (`scripts/generate-courses.js`) reads every JSON in `content/courses/data/`, fills `content/courses/template/course-template.html`, and writes `content/courses/generated/{slug}/index.html`. We add a new template placeholder `{{CURRICULUM_DATA_JSON}}` that the generator fills with the curriculum slice of the JSON. A new client-side JS file lazy-loads jsPDF on click and renders the PDF from that inlined JSON.

**Tech Stack:** Vanilla JS (no framework), Node.js for build script, jsPDF v2.5.1 UMD via CDN (`https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js`). No bundler.

**Spec:** `docs/superpowers/specs/2026-05-13-download-curriculum-button-design.md`

---

## File Structure

| File | Status | Responsibility |
|---|---|---|
| `src/css/download-curriculum.css` | NEW | Button + spinner + error text styling. Amber→coral gradient. |
| `src/js/download-curriculum.js` | NEW | Click handler, lazy-load jsPDF, parse inline JSON, build PDF, save. |
| `content/courses/template/course-template.html` | MODIFY | Add button HTML inside `.course-hero-content`; add `<script id="course-curriculum-data">` placeholder before `</main>`; link the CSS+JS in the head/body. |
| `scripts/generate-courses.js` | MODIFY | Add `buildCurriculumPayload()` helper. Replace the new `{{CURRICULUM_DATA_JSON}}` template token with the JSON-stringified, `</script>`-safe payload. |

All 73 generated `content/courses/generated/*/index.html` files re-flow from the four-file change via `npm run generate:courses`.

---

## Task 1: Add button styling — `src/css/download-curriculum.css`

**Files:**
- Create: `src/css/download-curriculum.css`

- [ ] **Step 1: Create the CSS file with full button + states**

Create `src/css/download-curriculum.css` with this exact content:

```css
/* Download Curriculum button — vibrant amber→coral, deliberately NOT purple
   so it stands out from the rest of the (purple/cyan) course hero. */

.hero-cta-row {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.download-curriculum-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.5rem;
  border: 0;
  border-radius: 999px;
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  box-shadow:
    0 8px 22px rgba(239, 68, 68, 0.35),
    0 2px 6px rgba(245, 158, 11, 0.25);
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
}

.download-curriculum-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 14px 32px rgba(239, 68, 68, 0.45),
    0 4px 10px rgba(245, 158, 11, 0.30);
  filter: brightness(1.05);
}

.download-curriculum-btn:active { transform: translateY(0); }

.download-curriculum-btn:disabled,
.download-curriculum-btn.is-loading {
  opacity: 0.85;
  cursor: progress;
}

.download-curriculum-btn .dl-icon { flex-shrink: 0; }

.download-curriculum-btn.is-loading .dl-icon {
  animation: dl-spin 0.9s linear infinite;
}
@keyframes dl-spin { to { transform: rotate(360deg); } }

.download-curriculum-error {
  margin-top: 0.6rem;
  font-size: 0.875rem;
  color: #fecaca;
}

@media (max-width: 600px) {
  .download-curriculum-btn {
    width: 100%;
    justify-content: center;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/css/download-curriculum.css
git commit -m "feat(courses): add Download Curriculum button styles"
```

---

## Task 2: Add the PDF builder — `src/js/download-curriculum.js`

**Files:**
- Create: `src/js/download-curriculum.js`

- [ ] **Step 1: Create the JS file**

Create `src/js/download-curriculum.js` with this exact content:

```javascript
/* Download Curriculum — client-side PDF generation.
   Reads the inline JSON at #course-curriculum-data, lazy-loads jsPDF,
   builds a branded curriculum PDF, and saves it. */

(function () {
  'use strict';

  var JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  var jspdfPromise = null;

  function loadJsPDF() {
    if (jspdfPromise) return jspdfPromise;
    jspdfPromise = new Promise(function (resolve, reject) {
      if (window.jspdf && window.jspdf.jsPDF) {
        resolve(window.jspdf.jsPDF);
        return;
      }
      var s = document.createElement('script');
      s.src = JSPDF_URL;
      s.async = true;
      s.onload = function () {
        if (window.jspdf && window.jspdf.jsPDF) resolve(window.jspdf.jsPDF);
        else reject(new Error('jsPDF loaded but global missing'));
      };
      s.onerror = function () { reject(new Error('Failed to load jsPDF')); };
      document.head.appendChild(s);
    });
    return jspdfPromise;
  }

  function readCourseData() {
    var tag = document.getElementById('course-curriculum-data');
    if (!tag) throw new Error('Missing #course-curriculum-data tag');
    var text = tag.textContent || '';
    if (!text.trim()) throw new Error('#course-curriculum-data is empty');
    return JSON.parse(text);
  }

  /* ---------- PDF layout helpers ---------- */

  var PAGE = { w: 210, h: 297 };          // A4 mm
  var MARGIN = { x: 18, top: 20, bottom: 20 };
  var CONTENT_W = PAGE.w - MARGIN.x * 2;

  function makeWriter(doc) {
    var y = MARGIN.top;

    function ensureSpace(needed) {
      if (y + needed > PAGE.h - MARGIN.bottom) {
        doc.addPage();
        y = MARGIN.top;
      }
    }

    function textBlock(str, opts) {
      opts = opts || {};
      doc.setFont('helvetica', opts.style || 'normal');
      doc.setFontSize(opts.size || 10);
      doc.setTextColor(opts.color || '#1f2937');
      var lines = doc.splitTextToSize(String(str || ''), opts.width || CONTENT_W);
      var lineH = (opts.size || 10) * 0.45;
      for (var i = 0; i < lines.length; i++) {
        ensureSpace(lineH);
        doc.text(lines[i], opts.x || MARGIN.x, y);
        y += lineH;
      }
      y += opts.after || 1.5;
    }

    function heading(str, level) {
      var sizes = { 1: 18, 2: 14, 3: 12, 4: 11 };
      var spacingBefore = level === 1 ? 4 : 3;
      ensureSpace(sizes[level] * 0.5 + spacingBefore);
      y += spacingBefore;
      textBlock(str, { size: sizes[level] || 11, style: 'bold', color: '#111827', after: 2 });
    }

    function bullets(items, prefix) {
      if (!items || !items.length) return;
      var indent = MARGIN.x + 4;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor('#374151');
      for (var i = 0; i < items.length; i++) {
        var lines = doc.splitTextToSize(String(items[i] || ''), CONTENT_W - 6);
        for (var j = 0; j < lines.length; j++) {
          ensureSpace(4.5);
          if (j === 0) doc.text(prefix || '•', MARGIN.x, y);
          doc.text(lines[j], indent, y);
          y += 4.5;
        }
      }
      y += 1.5;
    }

    function rule() {
      ensureSpace(3);
      doc.setDrawColor('#e5e7eb');
      doc.setLineWidth(0.3);
      doc.line(MARGIN.x, y, PAGE.w - MARGIN.x, y);
      y += 3;
    }

    function newPage() { doc.addPage(); y = MARGIN.top; }

    return {
      get y() { return y; },
      set y(v) { y = v; },
      ensureSpace: ensureSpace,
      textBlock: textBlock,
      heading: heading,
      bullets: bullets,
      rule: rule,
      newPage: newPage
    };
  }

  /* ---------- Section renderers ---------- */

  function renderCover(doc, payload) {
    var meta = payload.meta || {};
    var overview = payload.program_overview || {};

    // Amber→coral band, top 60mm
    var steps = 40;
    for (var i = 0; i < steps; i++) {
      var t = i / steps;
      var r = Math.round(0xf5 + (0xef - 0xf5) * t);
      var g = Math.round(0x9e + (0x44 - 0x9e) * t);
      var b = Math.round(0x0b + (0x44 - 0x0b) * t);
      doc.setFillColor(r, g, b);
      doc.rect(0, (60 * i) / steps, PAGE.w, 60 / steps + 0.2, 'F');
    }

    doc.setTextColor('#ffffff');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('MODERN AGE CODERS', MARGIN.x, 18);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('learn.modernagecoders.com', MARGIN.x, 24);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    var titleLines = doc.splitTextToSize(meta.title || overview.title || 'Course Curriculum', CONTENT_W);
    doc.text(titleLines, MARGIN.x, 42);

    // Body content below band
    var y = 76;
    if (overview.tagline) {
      doc.setTextColor('#374151');
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(13);
      var tag = doc.splitTextToSize(overview.tagline, CONTENT_W);
      doc.text(tag, MARGIN.x, y);
      y += tag.length * 6 + 4;
    }

    // Meta pills
    var pills = [
      ['Duration', meta.duration],
      ['Level', meta.level],
      ['Commitment', meta.commitment],
      ['Certification', meta.certification]
    ].filter(function (p) { return p[1]; });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    for (var i = 0; i < pills.length; i++) {
      doc.setTextColor('#6b7280');
      doc.text(pills[i][0].toUpperCase(), MARGIN.x, y);
      doc.setTextColor('#111827');
      var val = doc.splitTextToSize(String(pills[i][1]), CONTENT_W - 50);
      doc.text(val, MARGIN.x + 45, y);
      y += val.length * 4.5 + 2;
    }

    // Generated date
    y = PAGE.h - 30;
    doc.setTextColor('#9ca3af');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Generated on ' + new Date().toISOString().slice(0, 10), MARGIN.x, y);
  }

  function renderOverview(w, doc, overview) {
    if (!overview) return;
    w.newPage();
    w.heading('Program Overview', 1);

    if (overview.description) {
      var paras = String(overview.description).split('\n\n');
      for (var i = 0; i < paras.length; i++) {
        w.textBlock(paras[i], { size: 10, after: 3 });
      }
    }

    if (overview.what_makes_this_different && overview.what_makes_this_different.length) {
      w.heading('What Makes This Different', 3);
      w.bullets(overview.what_makes_this_different);
    }

    if (overview.learning_path) {
      w.heading('Your Learning Journey', 3);
      var lpItems = Object.keys(overview.learning_path).map(function (k) {
        return k.replace('phase_', 'Phase ') + ': ' + overview.learning_path[k];
      });
      w.bullets(lpItems);
    }

    if (overview.career_outcomes && overview.career_outcomes.length) {
      w.heading('Career Progression', 3);
      var co = overview.career_outcomes.map(function (s, idx) { return (idx + 1) + '. ' + s; });
      w.bullets(co, ' ');
    }
  }

  function renderWeek(w, weekData) {
    if (!weekData) return;
    if (weekData.title) w.heading(weekData.title, 4);
    if (Array.isArray(weekData.topics) && weekData.topics.length) {
      w.bullets(weekData.topics);
    }
    if (Array.isArray(weekData.projects) && weekData.projects.length) {
      w.textBlock('Projects:', { size: 10, style: 'bold', color: '#374151', after: 1 });
      w.bullets(weekData.projects);
    }
    if (Array.isArray(weekData.deliverables) && weekData.deliverables.length) {
      w.textBlock('Deliverables:', { size: 10, style: 'bold', color: '#374151', after: 1 });
      w.bullets(weekData.deliverables);
    }
    if (weekData.practice) {
      w.textBlock('Practice: ' + weekData.practice, { size: 10, color: '#374151', after: 2 });
    }
    if (weekData.assessment) {
      w.textBlock('Assessment: ' + weekData.assessment, { size: 10, color: '#374151', after: 2 });
    }
  }

  function renderPhase(w, phaseKey, phaseData) {
    w.newPage();
    w.heading(phaseData.title || phaseKey.replace(/_/g, ' '), 1);
    if (phaseData.description) {
      w.textBlock(phaseData.description, { size: 10, after: 3 });
    }
    var monthKeys = Object.keys(phaseData).filter(function (k) { return /^month_/.test(k); });
    for (var m = 0; m < monthKeys.length; m++) {
      var monthData = phaseData[monthKeys[m]] || {};
      w.heading(monthData.title || monthKeys[m].replace(/_/g, ' '), 2);
      if (monthData.weeks) {
        w.textBlock(monthData.weeks, { size: 9, color: '#6b7280', after: 2 });
      }
      var weekKeys = Object.keys(monthData).filter(function (k) { return /^week_/.test(k); });
      for (var k = 0; k < weekKeys.length; k++) {
        renderWeek(w, monthData[weekKeys[k]]);
      }
    }
  }

  function renderFallback(w, payload) {
    var skip = { meta: 1, program_overview: 1 };
    var keys = Object.keys(payload).filter(function (k) { return !skip[k]; });
    for (var i = 0; i < keys.length; i++) {
      var node = payload[keys[i]];
      if (!node || typeof node !== 'object') continue;
      if (!node.title && !node.description && !node.topics && !node.projects) continue;
      w.newPage();
      if (node.title) w.heading(node.title, 1);
      if (node.description) w.textBlock(node.description, { size: 10, after: 3 });
      if (Array.isArray(node.topics)) w.bullets(node.topics);
      if (Array.isArray(node.projects)) {
        w.textBlock('Projects:', { size: 10, style: 'bold', color: '#374151', after: 1 });
        w.bullets(node.projects);
      }
    }
  }

  function drawPageFooters(doc) {
    var total = doc.internal.getNumberOfPages();
    for (var p = 1; p <= total; p++) {
      doc.setPage(p);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor('#9ca3af');
      doc.text('Modern Age Coders · learn.modernagecoders.com', MARGIN.x, PAGE.h - 8);
      doc.text('Page ' + p + ' of ' + total, PAGE.w - MARGIN.x, PAGE.h - 8, { align: 'right' });
    }
  }

  function buildPdf(JsPDFCtor, payload) {
    var doc = new JsPDFCtor({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    renderCover(doc, payload);
    var w = makeWriter(doc);
    w.y = MARGIN.top; // writer starts on cover page; the next renderer calls newPage() first
    renderOverview(w, doc, payload.program_overview);

    var phaseKeys = Object.keys(payload)
      .filter(function (k) { return /^phase_\d+/.test(k); })
      .sort(function (a, b) {
        var na = parseInt((a.match(/\d+/) || ['0'])[0], 10);
        var nb = parseInt((b.match(/\d+/) || ['0'])[0], 10);
        return na - nb;
      });

    if (phaseKeys.length) {
      for (var i = 0; i < phaseKeys.length; i++) {
        renderPhase(w, phaseKeys[i], payload[phaseKeys[i]] || {});
      }
    } else {
      renderFallback(w, payload);
    }

    drawPageFooters(doc);
    return doc;
  }

  /* ---------- UI wiring ---------- */

  function setLoading(btn, on) {
    if (on) {
      btn.classList.add('is-loading');
      btn.disabled = true;
      var label = btn.querySelector('.dl-label');
      if (label) {
        btn.dataset.originalLabel = label.textContent;
        label.textContent = 'Preparing PDF…';
      }
    } else {
      btn.classList.remove('is-loading');
      btn.disabled = false;
      var lbl = btn.querySelector('.dl-label');
      if (lbl && btn.dataset.originalLabel) {
        lbl.textContent = btn.dataset.originalLabel;
      }
    }
  }

  function showError(btn, msg) {
    var existing = btn.parentNode.querySelector('.download-curriculum-error');
    if (existing) existing.remove();
    var el = document.createElement('div');
    el.className = 'download-curriculum-error';
    el.textContent = msg;
    btn.parentNode.appendChild(el);
  }

  function clearError(btn) {
    var existing = btn.parentNode.querySelector('.download-curriculum-error');
    if (existing) existing.remove();
  }

  function handleClick(btn) {
    clearError(btn);
    setLoading(btn, true);
    var payload;
    try {
      payload = readCourseData();
    } catch (e) {
      console.warn('[download-curriculum] ' + e.message);
      setLoading(btn, false);
      showError(btn, 'Download failed — please refresh and try again.');
      return;
    }
    loadJsPDF()
      .then(function (JsPDFCtor) {
        var doc = buildPdf(JsPDFCtor, payload);
        var slug = (payload.meta && payload.meta.slug) || 'course';
        doc.save(slug + '-curriculum.pdf');
      })
      .catch(function (err) {
        console.warn('[download-curriculum] ' + (err && err.message ? err.message : err));
        showError(btn, 'Download failed — please refresh and try again.');
      })
      .then(function () { setLoading(btn, false); });
  }

  function init() {
    var btn = document.getElementById('downloadCurriculumBtn');
    if (!btn) return;
    btn.addEventListener('click', function () { handleClick(btn); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```

- [ ] **Step 2: Quick syntax check**

Run: `node --check src/js/download-curriculum.js`
Expected: no output (exit 0).

- [ ] **Step 3: Commit**

```bash
git add src/js/download-curriculum.js
git commit -m "feat(courses): add client-side PDF builder for course curriculum"
```

---

## Task 3: Wire button + data tag + asset links into the course template

**Files:**
- Modify: `content/courses/template/course-template.html`

- [ ] **Step 1: Add the new stylesheet link**

Find this block near the top of the file (around line 60-65):

```html
    <link rel="stylesheet" href="/content/courses/generated/{{COURSE_SLUG}}/mobile-responsive-fix.css">
    <link rel="stylesheet" href="/src/css/share-button.css">
```

Insert a new line directly AFTER the `share-button.css` line:

```html
    <link rel="stylesheet" href="/src/css/download-curriculum.css">
```

- [ ] **Step 2: Add the button HTML inside the hero**

Locate the meta-badges block that ends at line ~134 with `</div>` followed by `</div>` (closes `.course-hero-content`) at line 135. Insert the button HTML between those two closing `</div>` tags:

Find:
```html
                    <span class="meta-badge certification">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                            </path>
                        </svg>
                        {{CERTIFICATION}}
                    </span>
                </div>
            </div>
```

Replace with:
```html
                    <span class="meta-badge certification">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                            </path>
                        </svg>
                        {{CERTIFICATION}}
                    </span>
                </div>

                <!-- Download Curriculum CTA -->
                <div class="hero-cta-row">
                    <button type="button" id="downloadCurriculumBtn" class="download-curriculum-btn" aria-label="Download course curriculum as PDF">
                        <svg class="dl-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span class="dl-label">Download Curriculum (PDF)</span>
                    </button>
                </div>
            </div>
```

- [ ] **Step 3: Add the inline JSON data tag + script before `</main>`**

Find around line 511-515:
```html
        <!-- Related Blogs Section - Auto-generated for internal linking -->
        {{RELATED_BLOGS}}

    </main>

    <script src="/content/courses/generated/{{COURSE_SLUG}}/course-navigation.js"></script>
```

Replace with:
```html
        <!-- Related Blogs Section - Auto-generated for internal linking -->
        {{RELATED_BLOGS}}

    </main>

    <!-- Curriculum data inlined for client-side PDF download. Stays in sync with JSON. -->
    <script id="course-curriculum-data" type="application/json">{{CURRICULUM_DATA_JSON}}</script>

    <script src="/content/courses/generated/{{COURSE_SLUG}}/course-navigation.js"></script>
    <script src="/src/js/download-curriculum.js" defer></script>
```

- [ ] **Step 4: Verify the template is well-formed**

Run: `node -e "const fs=require('fs');const t=fs.readFileSync('content/courses/template/course-template.html','utf8');console.log('has-btn:',t.includes('downloadCurriculumBtn'),'has-data-tag:',t.includes('{{CURRICULUM_DATA_JSON}}'),'has-css:',t.includes('download-curriculum.css'),'has-js:',t.includes('download-curriculum.js'));"`

Expected output: `has-btn: true has-data-tag: true has-css: true has-js: true`

- [ ] **Step 5: Commit**

```bash
git add content/courses/template/course-template.html
git commit -m "feat(courses): wire Download Curriculum button + data tag into course template"
```

---

## Task 4: Generator — inject the curriculum JSON payload

**Files:**
- Modify: `scripts/generate-courses.js`

- [ ] **Step 1: Add the `buildCurriculumPayload` helper method**

Inside the `CourseGenerator` class, add this method right above `populateTemplate` (which starts at line 791). Find:

```javascript
    populateTemplate(template, courseData, courseDir) {
        let html = template;
```

Insert directly above (so the new method comes BEFORE `populateTemplate`):

```javascript
    /**
     * Build the curriculum-only slice of course data that gets inlined
     * into each generated page for client-side PDF download.
     * Includes: meta, program_overview, and every top-level phase_* key.
     * Excludes: pricing/testimonials/career-tangent keys (out of scope per spec).
     */
    buildCurriculumPayload(courseData) {
        const payload = {
            meta: courseData.meta || {},
            program_overview: courseData.program_overview || null
        };
        for (const key of Object.keys(courseData)) {
            if (key.startsWith('phase_')) {
                payload[key] = courseData[key];
            }
        }
        return payload;
    }

    populateTemplate(template, courseData, courseDir) {
        let html = template;
```

- [ ] **Step 2: Substitute `{{CURRICULUM_DATA_JSON}}` near the end of `populateTemplate`**

Find the end of `populateTemplate` — the line just before `return html;`. Search for the last `html = html.replace(...)` call. Around line 935-940 there is `{{WHY_THIS_COURSE}}` substitution. We add ours immediately after the existing substitutions, just before `return html;`.

Find:
```javascript
        // Generate Why This Course section (only if why_this_course exists)
        const whyThisCourseHTML = this.generateWhyThisCourseHTML(courseData);
        html = html.replace(/{{WHY_THIS_COURSE}}/g, whyThisCourseHTML);
```

(If the line numbers have drifted, search for `{{WHY_THIS_COURSE}}` — there is one occurrence in the function.)

Insert directly after that block (before `return html;`):

```javascript
        // Inline curriculum JSON for client-side Download Curriculum PDF feature.
        // </script> sequences inside JSON strings are escaped to prevent script-tag breakout.
        const curriculumPayload = this.buildCurriculumPayload(courseData);
        const curriculumJson = JSON.stringify(curriculumPayload).replace(/<\/script/gi, '<\\/script');
        html = html.replace(/{{CURRICULUM_DATA_JSON}}/g, curriculumJson);
```

- [ ] **Step 3: Quick syntax check on the modified generator**

Run: `node --check scripts/generate-courses.js`
Expected: no output (exit 0).

- [ ] **Step 4: Generate one course and verify the data tag was populated**

Run: `npm run generate:courses 2>&1 | tail -10`
Expected: output ends with `🎉 Generation complete! 73/73 courses generated successfully.` (or similar — count may differ).

Then verify a sample course's inline JSON:

Run: `node -e "const fs=require('fs');const html=fs.readFileSync('content/courses/generated/ai-ml-masterclass-teens/index.html','utf8');const m=html.match(/id=\"course-curriculum-data\"[^>]*>([\s\S]{0,200})/);console.log('matched:',!!m);console.log('first-200:',m?m[1].slice(0,200):'NONE');console.log('still-placeholder:',html.includes('{{CURRICULUM_DATA_JSON}}'));"`

Expected:
- `matched: true`
- `first-200:` begins with `{"meta":{"slug":"ai-ml-masterclass-teens"`...
- `still-placeholder: false`

- [ ] **Step 5: Spot-check 2 more courses with different shapes**

Run: `node -e "['cpp-teens','applied-mathematics','algo-trading'].forEach(s=>{try{const fs=require('fs');const h=fs.readFileSync('content/courses/generated/'+s+'/index.html','utf8');const m=h.match(/id=\"course-curriculum-data\"[^>]*>([\s\S]{0,80})/);console.log(s+':',m?'OK':'MISSING');}catch(e){console.log(s+':',e.code||e.message);}});"`

Expected: each printed line says `OK` (or `ENOENT` if a slug doesn't exist on disk — fine, just shows we tested several).

- [ ] **Step 6: Commit**

```bash
git add scripts/generate-courses.js
git commit -m "feat(courses): inject curriculum JSON payload into generated course pages"
```

---

## Task 5: Regenerate all courses and commit the rebuilt pages

> Note: `content/courses/generated/` is gitignored per project memory, so this step exists primarily to confirm all 73 courses regenerate cleanly and to visually smoke-test before merging.

**Files:**
- Modify (regen only, gitignored): `content/courses/generated/*/index.html`

- [ ] **Step 1: Full regenerate run**

Run: `npm run generate:courses 2>&1 | tail -20`
Expected: ends with `🎉 Generation complete! N/N courses generated successfully.` with no `❌ Error` lines above it.

If any course fails, read the error and fix `buildCurriculumPayload` before continuing — the most likely cause is a course JSON with a key that explodes JSON.stringify (circular ref — unlikely, but possible if a course author left a bug).

- [ ] **Step 2: Verify every generated page has the data tag**

Run: `node -e "const fs=require('fs');const path=require('path');const dir='content/courses/generated';const dirs=fs.readdirSync(dir).filter(d=>fs.statSync(path.join(dir,d)).isDirectory());let missing=[];for(const d of dirs){const p=path.join(dir,d,'index.html');if(!fs.existsSync(p))continue;const h=fs.readFileSync(p,'utf8');if(!h.includes('id=\"course-curriculum-data\"'))missing.push(d);if(h.includes('{{CURRICULUM_DATA_JSON}}'))missing.push(d+' (placeholder)');}console.log('total-dirs:',dirs.length);console.log('missing-or-bad:',missing.length);if(missing.length)console.log(missing.slice(0,5));"`

Expected: `missing-or-bad: 0`.

- [ ] **Step 3: Verify every generated page has the button**

Run: `node -e "const fs=require('fs');const path=require('path');const dir='content/courses/generated';const dirs=fs.readdirSync(dir).filter(d=>fs.statSync(path.join(dir,d)).isDirectory());let bad=[];for(const d of dirs){const p=path.join(dir,d,'index.html');if(!fs.existsSync(p))continue;const h=fs.readFileSync(p,'utf8');if(!h.includes('downloadCurriculumBtn'))bad.push(d);}console.log('missing-button:',bad.length);if(bad.length)console.log(bad);"`

Expected: `missing-button: 0`.

---

## Task 6: Browser smoke test

**Files:** none — manual verification.

- [ ] **Step 1: Start local dev server**

Run in a separate terminal: `npm run dev`
Expected: server starts and prints a localhost URL (typically `http://localhost:8000` or similar — check the `scripts/dev-server.js` output).

- [ ] **Step 2: Load a course page in the browser**

Open `http://localhost:PORT/courses/ai-ml-masterclass-teens/` in a browser.

Visual checks:
- A vibrant **amber→coral** pill button labeled "Download Curriculum (PDF)" sits in the hero, directly below the meta badges row.
- It is NOT purple. It clearly stands out.
- Hover lifts it 2px and brightens it slightly.

- [ ] **Step 3: Click the button**

Click the button. Expected behavior:
- Button shows spinner icon + "Preparing PDF…" label, disabled.
- After 1–3 seconds, browser downloads `ai-ml-masterclass-teens-curriculum.pdf`.
- Button returns to normal state.

- [ ] **Step 4: Open the PDF and verify content**

Open the downloaded PDF. Expected:
- **Page 1 (cover):** Amber→coral band at top with "MODERN AGE CODERS" wordmark; course title in bold; tagline in italic; four meta lines (Duration / Level / Commitment / Certification); generation date near bottom.
- **Page 2+:** "Program Overview" heading; description paragraph; "What Makes This Different" bullets; "Your Learning Journey" bullets; "Career Progression" numbered list.
- **Subsequent pages:** one section per phase (`Phase 1: Foundation…`, `Phase 2:…`, etc.), each with month subsections, each with week subsections containing topics (bulleted), projects (bulleted under "Projects:"), and Practice/Assessment lines where present.
- **Every page footer:** "Modern Age Coders · learn.modernagecoders.com" on left, "Page N of M" on right, in small grey text.

- [ ] **Step 5: Test edit-flow (proves auto-sync)**

In `content/courses/data/ai-ml-teens.json`, change the very first week title (e.g., `"Introduction to AI & Python Setup"` → `"SMOKE TEST — Introduction to AI"`). Save.

Run: `npm run generate:courses 2>&1 | tail -3`
Expected: regeneration completes cleanly.

Refresh the browser page (hard refresh to bust cache: Ctrl+Shift+R). Click the button again. Open the new PDF.

Expected: the changed week title appears in the PDF. **Revert the JSON change** when done:

```bash
git checkout -- content/courses/data/ai-ml-teens.json
```

- [ ] **Step 6: Test a course with a different schema**

Open `http://localhost:PORT/courses/cpp-programming-college/` (or any non-AI/ML course). Click the button. Verify a PDF still downloads with sensible content. If the course has fewer phases or different month/week naming, the walker should still produce a PDF (possibly shorter) rather than erroring.

- [ ] **Step 7: Test the error path**

Open DevTools → Network tab → set throttling to "Offline". Click the button.

Expected: red error text appears below the button: "Download failed — please refresh and try again." Button is back to clickable state. No uncaught errors in console (a single `console.warn` is fine).

Restore network. Click again — succeeds.

- [ ] **Step 8: Test on mobile viewport**

DevTools → Toggle device toolbar → set to iPhone SE (375×667). The button should be **full-width** (per the `@media (max-width: 600px)` rule) and centered. Tap target ≥ 44px.

- [ ] **Step 9: Stop the dev server**

In the terminal running `npm run dev`, press Ctrl+C.

---

## Task 7: Final commit & push

**Files:** none new — just the merge-ready commit history.

- [ ] **Step 1: Inspect what's staged**

Run: `git status` and `git log --oneline -8`

Expected: 4 commits on top of the prior `d497b79` spec commit:
- `feat(courses): add Download Curriculum button styles`
- `feat(courses): add client-side PDF builder for course curriculum`
- `feat(courses): wire Download Curriculum button + data tag into course template`
- `feat(courses): inject curriculum JSON payload into generated course pages`

`git status` should be clean (generated/ is gitignored).

- [ ] **Step 2: Push** (only if user explicitly authorizes)

> Do NOT push without an explicit OK from the user. Stop here and wait for them to say "push it" or "merge it".

When authorized:

```bash
git push origin main
```

Netlify will pick up the push, run `npm run generate:all`, and the Download Curriculum button will be live on all 73 course pages.

---

## Notes for the implementer

- **No test framework is set up in this repo** — there are validator scripts (`scripts/validate-*.js`) but no Jest/Vitest. That's why this plan uses targeted `node -e` one-liner checks instead of `npm test`. The real verification is the browser smoke test in Task 6.
- **Frequent commits**: one commit per task, four total feature commits. If you need to fix something mid-task, fix and commit on top — don't amend.
- **Schema variance across 73 courses**: the walker handles the common `phase_N_xxx → month_N_xxx → week_N_xxx → {topics,projects,practice,assessment}` shape. If a course's structure is wildly different, the fallback renderer kicks in. Both paths are tested in Task 6 Steps 4 and 6.
- **`</script>` injection guard**: the generator escapes `</script` sequences in the JSON. This matters because course JSON content (descriptions, topics) is user-authored and could theoretically contain `</script>` — without escaping, the inline JSON block would break out of the script tag.
