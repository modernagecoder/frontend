"""Phase 2.2 — replace invented reviewers site-wide with the real ones.

Scope discovered by audit, not assumed: the three names the owner named (Priya Patel,
Rajesh Kumar, Sanjay Deshmukh) are 3 of TWENTY-TWO invented reviewers, and they appear on
179 pages / 390 testimonial cards — not the 42 recorded in project memory.

Ground truth is lovewall/feedback.txt: 15 real harvested Google reviews, with the
reviewer's name and their actual words. Every one of the 22 matches nobody in it. Tell-tale:
"Aarav Sharma" is both an invented reviewer AND row 1 of the SQL tutorial's sample data in
content/resources/data/sql/ — the same placeholder-name generator produced both.

Replacement is by CONTENT, not markup. There are 56 different CSS prefixes across these
pages (msu-nm, bc-by, ga-by, cr-ava ...); matching each structurally would be 56 chances to
break a hand-built page. Instead each invented quote/name/role string is swapped for a real
one. 387 of the 390 cards contain the invented text verbatim, so this covers everything but
coding-roadmap.html (3 cards with their own bespoke invented text) — reported, not guessed at.

Assignment rotates through the 15 real reviews with a stable per-page offset, so the same
review is not repeated within a page and the site does not end up showing one identical
testimonial on 179 URLs (which would be a duplicate-content problem of its own).

Encoding: pages use two apostrophe styles (&#x27; on 322 cards, raw on 65). The style is
detected per card by which variant actually matches, and the real text is written back in
that same style. Avatar initials (msu-av / av) are updated to the new name's letter.

NOT touched: content/resources/data/**, where the same names are legitimate SQL/Java
teaching data — replacing those would corrupt the tutorials.

Usage:  python scripts/replace-fabricated-reviews.py [--apply]
"""
import json
import pathlib
import re
import sys
import zlib

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "scratch_fab.json").read_text(encoding="utf-8"))
FAKE, REAL = DATA["fake"], DATA["real"]

APOS = [("hex", "&#x27;"), ("dec", "&#39;"), ("raw", "'")]


def encode(text, style_char):
    """Match the page's own escaping so the swap is invisible to the layout."""
    out = text.replace("&", "&amp;")
    return out.replace("'", style_char)


pages_changed = 0
cards_replaced = 0
unmatched = []
name_left = []

for path in sorted((ROOT / "src" / "pages").glob("*.html")):
    html = path.read_text(encoding="utf-8", errors="surrogateescape")
    present = [f for f in FAKE if f">{f['name']}<" in html]
    if not present:
        continue

    # stable, page-specific rotation so 179 pages don't all show the same review
    offset = zlib.crc32(path.name.encode()) % len(REAL)
    original = html

    for i, fake in enumerate(present):
        real = REAL[(offset + i) % len(REAL)]

        # --- 1. the quote itself, in whichever escaping this page uses ------
        done = False
        for _, ch in APOS:
            probe = encode(fake["text"], ch)
            if probe in html:
                html = html.replace(probe, encode(real["text"], ch))
                done = True
                break
        if not done:
            unmatched.append(f"{path.name}: {fake['name']} — quote text not found verbatim")
            continue

        # --- 2. the name ---------------------------------------------------
        html = html.replace(f">{fake['name']}<", f">{real['name']}<")

        # --- 3. role + avatar initial, scoped to this card only -------------
        # (an unscoped role swap would rewrite prose like "for working professionals")
        for m in re.finditer(r">" + re.escape(real["name"]) + r"<", html):
            tail_s, tail_e = m.end(), min(len(html), m.end() + 220)
            tail = html[tail_s:tail_e]
            if fake["role"] in tail:
                html = html[:tail_s] + tail.replace(fake["role"], real["role"], 1) + html[tail_e:]
            head_s = max(0, m.start() - 200)
            head = html[head_s:m.start()]
            new_head = re.sub(
                r'(class="[a-z0-9\-]*av[a-z0-9\-]*">)([A-Za-z])(</span>)',
                lambda a: a.group(1) + real["name"].replace("Mrs. ", "").replace("Mr. ", "")[0] + a.group(3),
                head,
            )
            if new_head != head:
                html = html[:head_s] + new_head + html[m.start():]
            break

        cards_replaced += 1

    if html != original:
        pages_changed += 1
        if APPLY:
            path.write_text(html, encoding="utf-8", errors="surrogateescape")

# nothing invented may survive
for path in sorted((ROOT / "src" / "pages").glob("*.html")):
    html = path.read_text(encoding="utf-8", errors="surrogateescape") if APPLY else ""
    if not APPLY:
        continue
    for f in FAKE:
        if f">{f['name']}<" in html:
            name_left.append(f"{path.name}: {f['name']}")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  pages changed          : {pages_changed}")
print(f"  cards replaced         : {cards_replaced} of 390")
print(f"  could not match quote  : {len(unmatched)}")
for u in unmatched[:6]:
    print(f"      {u}")
if APPLY:
    print(f"  invented names still visible: {len(name_left)}")
    for n in name_left[:6]:
        print(f"      {n}")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
