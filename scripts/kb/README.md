# Knowledge base build pipeline

Regenerates the AI-agent / WhatsApp-agent knowledge base from the repo, so the
~800 URLs, 115 courses, 116 blog posts and every price are never hand-typed.

## Why this exists

The April 2026 knowledge base went stale silently: it was still telling agents to
quote `₹4,999` and `$40` months after those prices were retired. Prices moved
again *during* the v2.0 rewrite (commit `e41a8e14`, 3 Aug 2026). Anything
hand-maintained will drift. This pipeline reads the same files the website reads.

## Sources of truth it reads

| Source | Supplies |
|---|---|
| `pricing/pricing.config.jsonc` | every price, and what counts as retired |
| `scripts/brand-facts.json` | students, reviews, rating, countries, ages, founded |
| `content/courses/data/*.json` | the 115 course pages |
| `content/blog/data/*.json` | the 116 blog posts |
| `sitemap*.xml` + `_redirects` | the live URL set (sitemap AND routed) |
| `src/pages/*.html` `<title>` | page titles for the URL index |

## Files

- `docs/_kb-v2-prose.md` is the **hand-written source**. Edit this.
- `docs/Modern-Age-Coders-KnowledgeBase-v2.md` is **generated**. Do not edit.
- `Modern-Age-Coders-KnowledgeBase-v2-Aug2026.pdf` is **generated**.

## Run

```bash
npm run kb:build     # prose + generated appendices -> markdown
npm run kb:pdf       # markdown -> A4 PDF via Chromium
npm run kb:verify    # verify the PDF, not the source
npm run kb           # all three
```

`kb:verify` extracts the text back out of the rendered PDF and hard-fails if a
retired figure leaks outside the sections that name it deliberately, if a current
fact is missing, or if Chromium dropped any appendix row. Grepping the markdown is
not the check: the PDF is what the agents ingest.

A figure counts as retired **only when it is not a current price anywhere in
`pricing.config.jsonc`**. Numbers come back (₹9,999 did on 3 Aug 2026), so the
retired list is computed, never hard-coded. Appendix D's
`pricing_ambiguous_figures` is computed the same way: it flags any figure that is
live under two different billing periods, which is why ₹9,999 is called out.

**Known limit of the check.** It is strict on the deny side and heuristic on the
allow side: a retired figure is permitted when a retirement word (`old`, `retired`,
`never quote`, `no longer`) appears within two lines, because Chromium hard-wraps
warning sentences. That window could mask a genuine regression, for example
"our old price was X and our new price is X". If that shape ever appears, tighten
`CONTEXT` in `verify_pdf.py` rather than trusting a green run.

## Requirements

Python with `pymupdf`, `markdown` and `playwright` (Chromium installed).
