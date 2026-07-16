"""Phase 2.4 (long tail) — noindex the still-cloned city pages, index the differentiated ones.

The plan's guidance for the ~106 city pages that still share the cloned body skeleton is
consolidate-or-noindex: "if you can't make a city genuinely unique, add
<meta name='robots' content='noindex,follow'> UNTIL you can — a smaller high-quality index
beats a large thin one (they stay routed/linked, just not indexed; flip back when
differentiated)." This script IS that flip, and its inverse.

SELF-MAINTAINING BY THE CLONE MARKER, NOT A HARD-CODED LIST. A page is "cloned" iff it still
carries the shared "What that looks like week to week:" paragraph. apply-city-local-content.py
DELETES exactly that paragraph when it lands a city's researched content, so:

  * a page that is still cloned      -> gets   noindex, follow   (held out of the index)
  * a page that has been differentiated -> gets index, follow   (flipped back in)

Run this AFTER apply-city-local-content.py in every differentiation batch and the newly-landed
cities flip themselves back to indexable with no list to edit. Idempotent and reversible.

WHY THIS IS SAFE: every one of the 131 pages carries the identical Phase-1 robots directive
'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1', exactly once.
The only edit made here is swapping that one token 'index'<->'noindex' inside that one tag; the
script proves the whole-file diff is nothing but that swap before it writes, and refuses the
page otherwise. The .md twins are already 'X-Robots-Tag: noindex, follow' site-wide
(netlify.toml /*.md), so nothing is needed on that side.

Usage:  python scripts/apply-city-noindex.py [--apply]
"""
import glob
import os
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CLONE_MARKER = "what that looks like week to week"
TAIL = "follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
IDX = f'<meta name="robots" content="index, {TAIL}">'
NOIDX = f'<meta name="robots" content="noindex, {TAIL}">'

files = sorted(glob.glob(os.path.join(ROOT, "src", "pages", "best-coding-class-in-*.html")))
noindexed, indexed, unchanged, problems = [], [], [], []

for f in files:
    slug = os.path.basename(f)[len("best-coding-class-in-"):-len(".html")]
    src = open(f, encoding="utf-8", errors="surrogateescape").read()

    n_idx, n_noidx = src.count(IDX), src.count(NOIDX)
    if n_idx + n_noidx != 1:
        problems.append(f"{slug}: expected exactly one robots directive, found "
                        f"{n_idx} index + {n_noidx} noindex (Phase-1 tag altered?)")
        continue

    cloned = CLONE_MARKER in src.lower()
    want = NOIDX if cloned else IDX
    have = NOIDX if n_noidx else IDX
    if want == have:
        unchanged.append(slug)
        continue

    out = src.replace(have, want, 1)
    # Prove the ENTIRE change is the single robots-token swap and nothing else.
    if out.replace(want, have, 1) != src or out == src:
        problems.append(f"{slug}: robots swap altered more than the one tag — refusing")
        continue

    (noindexed if cloned else indexed).append(slug)
    if APPLY:
        open(f, "w", encoding="utf-8", errors="surrogateescape").write(out)

print(f"{'APPLIED' if APPLY else 'DRY RUN'}   {len(files)} city pages")
print(f"  -> noindex (still cloned)   : {len(noindexed)} changed")
print(f"  -> index   (differentiated) : {len(indexed)} changed  {indexed or ''}")
print(f"  already correct             : {len(unchanged)}")
if noindexed:
    print("\n  newly noindexed:")
    for i in range(0, len(noindexed), 6):
        print("    " + ", ".join(noindexed[i:i + 6]))
if problems:
    print(f"\n  PROBLEMS ({len(problems)}) — NOT written:")
    for p in problems:
        print("    " + p)
    sys.exit(1)
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
