"""Phase 2.5 — remove <meta name="keywords"> site-wide.

Google has ignored meta keywords since 2009, so it has bought nothing for 17 years. That is
the boring half. The half that matters here: BING has said it uses the tag as a SPAM SIGNAL
— stuffing it is evidence against you, not for you. Bing is the index ChatGPT Search and
Copilot answer from, so this is an AEO fix, not housekeeping.

And these are stuffed. 506 pages carry one; the worst is coding-classes-in-new-zealand at
1,960 characters of comma-separated keywords, with several school and Gulf pages over 1,200.
That is the exact pattern a spam classifier is built to catch.

Fixed at the source too — six generators emit the tag and would put it straight back on the
next Netlify build: build-seo-hubs.js, generate-age-grade-pages.js, seo-utils.js,
gen_aiml_pages.py, course-template.html and lovewall/index.html.

Safe for the two readers, both checked:
  - generate-static-md.js reads it into the markdown twins' frontmatter but defaults to ''
    -> the keywords list simply disappears from the frontmatter. The twins keep title,
       description, canonical and the full body, which is what AI agents actually read.
  - course-engine.js guards with `if (metaKeywords)`.

Usage:  python scripts/strip-meta-keywords.py [--apply]
"""
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent

# the whole tag plus its own line's leading whitespace/newline
TAG = re.compile(r'[ \t]*<meta[^>]*\bname=["\']keywords["\'][^>]*>[ \t]*\r?\n?', re.I)
# defensive: never touch anything that isn't the keywords meta
ASSERT_SAFE = re.compile(r'name=["\']keywords["\']', re.I)

pages = sorted(
    list((ROOT / "src" / "pages").glob("*.html"))
    + list((ROOT / "src" / "pages" / "category").glob("*.html"))
    + [ROOT / "lovewall" / "index.html"]
)

files_changed = 0
tags_removed = 0
biggest = []

for p in pages:
    html = p.read_text(encoding="utf-8", errors="surrogateescape")
    if not ASSERT_SAFE.search(html):
        continue
    for m in TAG.finditer(html):
        c = re.search(r'content=["\']([^"\']*)["\']', m.group(0))
        biggest.append((len(c.group(1)) if c else 0, p.name))
    new, n = TAG.subn("", html)
    if not n:
        continue
    # the tag must be gone and nothing else may have moved
    if ASSERT_SAFE.search(new):
        print(f"  SKIP {p.name}: a keywords tag survived — left untouched")
        continue
    if len(html) - len(new) > sum(len(m.group(0)) for m in TAG.finditer(html)) + 4:
        print(f"  SKIP {p.name}: removed more than the tags — left untouched")
        continue
    tags_removed += n
    files_changed += 1
    if APPLY:
        p.write_text(new, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  files changed  : {files_changed}")
print(f"  tags removed   : {tags_removed}")
biggest.sort(reverse=True)
print("  worst stuffing removed:")
for l, n in biggest[:5]:
    print(f"    {l:>5} chars  {n}")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
