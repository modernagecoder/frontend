# Writer brief: Class 10 board prep wave 3 page modules

You are writing ONE OR MORE page modules for the Class 10 board-prep series of learn.modernagecoders.com (Modern Age Coders, live online coding, AI and maths classes). Read this whole brief, then the design doc `docs/superpowers/specs/2026-11-06-board-prep-wave3-design.md`, then your page's entry in `scripts/board-prep/series.json` (slug, code, primary keyword, secondary keywords, distinct angle).

## What you produce

A module `content/board-prep/<slug>.js` in exactly the shape of the existing modules. Study these two first and copy their structure, field names and HTML class vocabulary:

- CBSE: `content/board-prep/cbse-class-10-ai-important-questions.js`
- ICSE: `content/board-prep/icse-class-10-computer-applications-important-questions.js`

The chrome (head, schema, nav, hero offer card, chooser, zone table, reviews, related pages, FAQ, form, footer) comes from `scripts/board-prep/build.js`. You write the page-specific fields only. Then build: `node scripts/board-prep/build.js <slug>` (writes `src/pages/<slug>.html` and `.md`). Do NOT edit build.js, series.json, the CSS, or any other page.

Use your page's `code` from series.json for `code` (it becomes `bx-<code>`), and set `themeColor` to the page's `accent` from series.json (board-prep.css already has that accent rule).

## The offer (owner facts, never change them)

- CBSE AI 417: group batch, Monday and Wednesday 9:00 PM IST, 15 to 20 students. ICSE CA: mini batch, Tuesday 5:30 PM and Wednesday 8:00 PM IST, up to six students, India only; abroad ICSE is one to one only.
- Both: personalised one to one at the family's own time, for when the batch times do not fit.
- NEVER type a price or currency figure in your prose. The chrome shows fees with data-price spans. Say "the monthly fee shown on this page" if you need to.
- First class is a free demo. Monthly billing, no admission fee.

## Quality bar (this is the whole point)

The owner wants pages that rank for the primary keyword AND get quoted by ChatGPT, Gemini and Perplexity, and that a student could actually learn from. So:

1. **Answer the search, fully, on the page.** If the keyword is "class 10 AI MCQ", the page carries real MCQs (at least 25 original ones across the units, with answers and a one-line reason). If it is "pattern programs icse", it carries real patterns with code, output and the loop rule. Notes pages carry the notes. Revision plans carry the day-by-day plan. City and tuition pages carry real decision content (how online compares with travelling to a local tutor, the weekly plan, what a class looks like) plus the board facts, not filler about the city.
2. **Original only.** Write your own questions, code, tables and examples. Never copy past papers, publisher solutions, textbook text or competitor pages. You may describe what a year's paper asked in your own words.
3. **Correct.** Every Java program and output on an ICSE page must be compiled and run with `javac`/`java` (installed) before it goes on the page; keep the test files in your scratch area, not the repo. Every Python snippet and every numerical on a CBSE page must be run or recomputed with python3. State in the module's top comment that you did this.
4. **Inside the syllabus.** CBSE 417 2026-27 and ICSE CA 2027 facts are in the design doc. ICSE: no recursion questions; 2D arrays and wrapper classes are in. CBSE: Units 4 (Statistical Data) and 7 (Advance Python) are practical only. Do not state anything the design doc lists as unconfirmed; if your page's topic depends on one (for example assertion-reason in AI 417), say honestly what is and is not confirmed.
5. **Keywords placed naturally.** The primary keyword in the title (under 62 characters), H1, description (under 158 characters), first paragraph and at least one H2. Secondary keywords in H2s, FAQ questions and body where they read naturally. FAQ questions should be the questions people literally type. No stuffing.
6. **Answer capsule.** The `capsule` is a 70 to 110 word direct answer to the primary keyword, quotable on its own (AI engines lift it). It must mention the live classes and the one to one option.
7. **Depth.** 4 to 6 body sections, each with an H2 and real substance: tables, code pairs (`bx-code-pair`), question lists (`bx-qlist`), cards (`bx-grid-3`), worked examples. 8 to 12 FAQs with full answers. The body (sections + capsule + FAQs) should be 1,800 to 3,000 words.
8. **Sell the classes without shouting.** Each page should show how this topic is taught live: timed practice, marking against the scheme on screen, mock tests, worksheets, doubt time, viva rehearsal, full revision. End sections with a natural link to the most relevant sibling pages (only slugs in series.json, or existing pages listed in its `HUBS`). Link 3 to 6 sibling pages in the body with `class="bx-link"`.
9. **Unique.** Your prose must not reuse sentences from any other board page. Write chrome-adjacent fields (lede, chooseLede, chooseAfter, zonesLede, zonesAfter, startHtml, timetable rows) fresh for THIS page's topic. The uniqueness gate fails pages above 6% shared text.

## Style rules (hard)

- No em dashes or en dashes anywhere (use commas, colons, "to"). The build throws on an em dash.
- Never the word "Premium". No emoji. Never write bare "IST" without a time before it in running prose (fine in "9:00 PM IST").
- British-Indian spelling is fine; plain words; short sentences; no hype ("best", "ultimate", "unlock").
- Email is connect@modernagecoders.com only (the chrome already has it).
- Only course slugs that exist in `COURSES` inside build.js may be used in `picks` (exactly three picks).
- Crumbs: Home, then the board hub (`/cbse-class-10-ai-classes-online` "Class 10 AI classes" or `/icse-class-10-java-classes-online` "ICSE Class 10 Java classes"), then this page.
- Set `dateModified: '2026-11-06'`.

## Gates you must run and pass before you finish

Start nothing that is already running. The dev server may be on http://localhost:3001 (do not start a second one).

1. `node scripts/board-prep/build.js <slug>`
2. `node scripts/verify-cluster-pages.js board-prep` and make sure your page says PASS (an "unrouted" warning is expected: the lead wires routes)
3. `node scripts/check-cluster-uniqueness.js board-prep` and make sure your page is not WARN or FAIL (pre-existing sof-imo / sof-icso failures are not yours)
4. grep your HTML for `—`, `–`, `Premium`, and for any digit sequences after ₹ or $ that you typed (there should be none outside data-price spans)

Do NOT run the routing script, pricing:apply or any other script that writes shared files: other writers run at the same time, and the lead runs those once per batch.

Do NOT commit. Do NOT run git add, git checkout, git restore or git stash. The lead reviews and commits.

## Report back

Slug, word count of the body, number of FAQs, the list of sibling links you used, which numerics/programs you verified and how, any fact you were unsure of and left out, gate results.
