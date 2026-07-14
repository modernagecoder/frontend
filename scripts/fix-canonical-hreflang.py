"""Phase 1.7 — absolute canonicals, drop the no-op hreflang, close the robots gaps.

1) CANONICALS -> absolute (198 pages)
   Relative canonicals ("/best-coding-class-in-hyderabad") resolve today, but they are
   fragile: anything that serves the same HTML from another path resolves them to the
   wrong URL. Google's own guidance is to use fully-qualified URLs. Cheap to fix.

2) HREFLANG -> deleted (510 pages, 1522 tags)
   Verified before touching: on every one of the 510 pages, EVERY hreflang points at the
   same URL as every other one. That is a no-op — hreflang exists to choose between real
   alternates, and there are none. 597 of the hrefs were relative, which Google ignores
   outright, so a large part of it was inert anyway. Deleting loses nothing and removes a
   confusing regional signal (a self-pointing en-us on a page that is not a US variant).
   If Phase 5 ever builds true locale variants, add it back pointing at those.

   Careful: rel="alternate" is ALSO used for the markdown twins that feed AI agents
   (type="text/markdown"). Only tags carrying hreflang are removed.

3) ROBOTS (33 pages) — the point is NOT "index, follow", which is the default and does
   nothing. It is the max-* directives that 349 other pages already carry:
   max-snippet:-1 (no snippet length cap) and max-image-preview:large. Those govern how
   much of a page Google and AI answers may show — directly relevant to being cited.
   The Gulf cluster and the camps were missing them entirely.

4) /check-status -> noindex. A developer diagnostic page ("Make sure MongoDB is running",
   backend/localhost details), served at HTTP 200 and fully indexable. Not in the sitemap,
   but nothing stopped an engine indexing it. Routing left alone deliberately — this repo
   has a history of redirect edits taking prod down; noindex is enough and is reversible.

Usage:  python scripts/fix-canonical-hreflang.py [--apply]
"""
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ROOT / "src" / "pages"
BASE = "https://learn.modernagecoders.com"

ROBOTS = '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">'

CANON = re.compile(r'(<link[^>]*\brel=["\']canonical["\'][^>]*>)', re.I)
HREF = re.compile(r'(\bhref=["\'])([^"\']+)(["\'])', re.I)
# only alternates that carry hreflang; the markdown-twin alternate must survive
HREFLANG_TAG = re.compile(
    r'[ \t]*<link(?=[^>]*\brel=["\']alternate["\'])(?=[^>]*\bhreflang=)[^>]*>[ \t]*\r?\n?',
    re.I,
)

# indexable pages that carry no meta robots at all (verified: routed + in sitemap)
NEEDS_ROBOTS = """ai-classes-for-kids-in-uae ai-classes-in-dubai ai-classes-in-qatar
ai-classes-in-saudi-arabia beat-the-babu cancellation coding-classes-for-kids-in-doha
coding-classes-for-kids-in-dubai coding-classes-for-kids-in-riyadh coding-classes-in-abu-dhabi
coding-classes-in-dammam coding-classes-in-doha coding-classes-in-dubai coding-classes-in-jeddah
coding-classes-in-qatar coding-classes-in-riyadh coding-classes-in-saudi-arabia
coding-classes-in-sharjah privacy python-classes-in-dubai python-classes-in-qatar
python-classes-in-saudi-arabia python-for-kids-in-dubai refund summer-coding-camp-adults
summer-coding-camp-kids summer-coding-camp-teens summer-coding-camp terms
winter-coding-camp-adults winter-coding-camp-kids winter-coding-camp-teens
winter-coding-camp""".split()

canon_abs = 0
hreflang_removed = 0
hreflang_pages = 0
robots_added = 0
canon_added = 0
noindexed = 0
md_twin_before = 0
md_twin_after = 0
skipped = []

for path in sorted(PAGES.glob("*.html")):
    html = path.read_text(encoding="utf-8", errors="surrogateescape")
    original = html
    stem = path.stem

    md_twin_before += len(re.findall(r'type=["\']text/markdown["\']', html))

    # --- 1) absolutize canonical ------------------------------------------
    def fix_canon(m):
        global canon_abs
        tag = m.group(1)
        hm = HREF.search(tag)
        if not hm or hm.group(2).startswith("http"):
            return tag
        canon_abs += 1
        return tag.replace(hm.group(0), f"{hm.group(1)}{BASE}{hm.group(2)}{hm.group(3)}")

    html = CANON.sub(fix_canon, html)

    # --- 2) delete no-op hreflang -----------------------------------------
    html, n = HREFLANG_TAG.subn("", html)
    if n:
        hreflang_removed += n
        hreflang_pages += 1

    # --- 3) robots with the max-* directives ------------------------------
    if stem in NEEDS_ROBOTS and "<meta name=\"robots\"" not in html:
        m = CANON.search(html)
        if m:
            html = html[: m.start()] + ROBOTS + "\n    " + html[m.start():]
            robots_added += 1
        else:
            # beat-the-babu has no canonical yet (added below); anchor on </title>
            t = re.search(r"</title>", html, re.I)
            if t:
                html = html[: t.end()] + "\n    " + ROBOTS + html[t.end():]
                robots_added += 1
            else:
                skipped.append(f"{stem}: no canonical or </title> to anchor robots meta to")

    # --- 4) /check-status is an internal dev page -------------------------
    if stem == "check-status" and "<meta name=\"robots\"" not in html:
        m = re.search(r"</title>", html, re.I)
        if m:
            html = (
                html[: m.end()]
                + '\n    <meta name="robots" content="noindex, nofollow">'
                + html[m.end():]
            )
            noindexed += 1

    md_twin_after += len(re.findall(r'type=["\']text/markdown["\']', html))

    if html != original and APPLY:
        path.write_text(html, encoding="utf-8", errors="surrogateescape")

# --- 5) beat-the-babu has no canonical at all -----------------------------
p = PAGES / "beat-the-babu.html"
h = p.read_text(encoding="utf-8", errors="surrogateescape")
if not CANON.search(h):
    m = re.search(r"</title>", h, re.I)
    if m:
        h = (
            h[: m.end()]
            + f'\n    <link rel="canonical" href="{BASE}/beat-the-babu">'
            + h[m.end():]
        )
        canon_added += 1
        if APPLY:
            p.write_text(h, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  canonicals absolutized     : {canon_abs}")
print(f"  canonical added            : {canon_added}  (beat-the-babu)")
print(f"  hreflang tags removed      : {hreflang_removed} across {hreflang_pages} page(s)")
print(f"  robots meta added (max-*)  : {robots_added}")
print(f"  /check-status noindexed    : {noindexed}")
print(f"  markdown-twin links intact : {md_twin_before} -> {md_twin_after}"
      + ("  OK" if md_twin_before == md_twin_after else "  *** LOST SOME ***"))
if skipped:
    print(f"  SKIPPED: {len(skipped)}")
    for s in skipped:
        print(f"    {s}")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
