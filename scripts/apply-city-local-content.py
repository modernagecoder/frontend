"""Phase 2.4 (step 2) — swap cloned boilerplate for researched local facts, per city.

Reads scripts/city-local-content.json (one entry per city slug) and applies two edits:

  1. Replaces the cloned "What that looks like week to week: ..." paragraph in the
     "Why <city> families start here" section. That paragraph is on all 131 pages and only
     restates the pricing table further down the same page — the page already says "live",
     "5-8 batch", "recordings" and "certificate" in BOTH "How a class actually runs" and
     "Simple, honest pricing". Deleting it loses no fact; it deletes the third telling.
  2. Appends city-specific FAQs to BOTH the visible <details> list AND the FAQPage JSON-LD.

WHY THE FAQ HAS TO GO IN TWICE: the two are currently in exact sync (8 visible = 8 in
schema, verified). FAQ structured data that does not match the visible page is a Google
rich-results violation, so an FAQ added to only one side is worse than not adding it. This
script writes both or neither, and verifies the counts match afterwards.

MEASURED on the Jodhpur pilot: one 68-word researched paragraph moves 7-gram overlap against
peer cities by about -3 points, and the page gets LONGER. Roughly 5-7 such paragraphs per
city reach the plan's target. There is no cheaper route — rewording the same facts 131 ways
is spinning, which is what the Aug-2025 spam update detects.

GROUNDING: every fact in city-local-content.json carries a source URL, researched rather than
recalled. Nothing here may assert anything about OUR students in a city ("500 families in
X") — see scripts/brand-facts.json. The facts are about the CITY: its real institutions, its
real board, its real entrance routes.

SAFETY: the FAQPage schema lives INSIDE <head> on these pages, so the guard cannot demand a
byte-identical head — it would block the intended edit. Instead the head is compared with its
JSON-LD blanked out, so the canonical/robots/title/meta work from Phase 1 is provably
untouched while the schema is allowed to move. Every JSON-LD block must still parse. A page
that fails either check is not written.

Usage:  python scripts/apply-city-local-content.py [--apply] [--only slug1,slug2]
"""
import html
import json
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ONLY = None
for i, a in enumerate(sys.argv):
    if a == "--only" and i + 1 < len(sys.argv):
        ONLY = set(sys.argv[i + 1].split(","))

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "scripts" / "city-local-content.json").read_text(encoding="utf-8"))

HEAD_RE = re.compile(r"<head>.*?</head>", re.S)
LD_RE = re.compile(r'<script type="application/ld\+json">.*?</script>', re.S)


def head_fingerprint(page_html):
    """The <head> minus its JSON-LD blocks.

    The FAQPage schema lives INSIDE <head> here, so "head must be byte-identical" would
    block the very edit we intend. What must not move is everything else in there — the
    canonical, robots, title, meta and link tags that Phase 1 fixed. So blank out the
    JSON-LD and compare the rest.
    """
    return LD_RE.sub("<LD/>", HEAD_RE.search(page_html).group(0))
# Tolerates the one page that wraps parts of the sentence in <strong>.
PARA_RE = re.compile(r"<p>What that looks like week to week:.*?</p>", re.S)
LAST_DETAILS_RE = re.compile(r"(<details class=\"faq-item\">(?:(?!</details>).)*</details>)(?!.*<details class=\"faq-item\">)", re.S)
LAST_Q_RE = re.compile(r"(\{\s*\"@type\":\s*\"Question\".*?\}\s*\})(\s*\]\s*\},)", re.S)


def esc(s):
    return html.escape(s, quote=True)


def jstr(s):
    # JSON-LD lives inside <script>: json.dumps handles quotes/backslashes; the </ guard
    # stops a stray "</script>" in copy from closing the tag early.
    return json.dumps(s, ensure_ascii=False)[1:-1].replace("</", "<\\/")


changed, problems, stats = 0, [], []

for slug, d in sorted(DATA.items()):
    if ONLY and slug not in ONLY:
        continue
    page = ROOT / "src" / "pages" / f"best-coding-class-in-{slug}.html"
    if not page.exists():
        problems.append(f"{slug}: page not found")
        continue
    src = page.read_text(encoding="utf-8", errors="surrogateescape")
    out = src
    head_before = head_fingerprint(src)
    did = []

    # ---- 1. paragraph swap -------------------------------------------------
    if d.get("lede"):
        new, n = PARA_RE.subn(lambda m: f"<p>{d['lede']}</p>", out, count=1)
        if n != 1:
            problems.append(f"{slug}: lede paragraph matched {n}x")
            continue
        out = new
        did.append("lede")

    # ---- 2. FAQs into BOTH the visible list and the schema ------------------
    faqs = d.get("faqs") or []
    if faqs:
        vis_before = out.count('<details class="faq-item">')
        sch_before = len(re.findall(r'"@type":\s*"Question"', out))
        if vis_before != sch_before:
            problems.append(f"{slug}: FAQ already out of sync ({vis_before} visible / {sch_before} schema)")
            continue

        block = "".join(
            f'\n                <details class="faq-item"><summary>{esc(f["q"])}</summary>'
            f'<div class="faq-a">{esc(f["a"])}</div></details>'
            for f in faqs
        )
        new, n = LAST_DETAILS_RE.subn(lambda m: m.group(1) + block, out, count=1)
        if n != 1:
            problems.append(f"{slug}: visible FAQ anchor matched {n}x")
            continue
        out = new

        qblock = "".join(
            f',\n            {{ "@type": "Question", "name": "{jstr(f["q"])}", '
            f'"acceptedAnswer": {{ "@type": "Answer", "text": "{jstr(f["a"])}" }} }}'
            for f in faqs
        )
        new, n = LAST_Q_RE.subn(lambda m: m.group(1) + qblock + m.group(2), out, count=1)
        if n != 1:
            problems.append(f"{slug}: schema FAQ anchor matched {n}x")
            continue
        out = new
        did.append(f"+{len(faqs)} faq")

        vis = out.count('<details class="faq-item">')
        sch = len(re.findall(r'"@type":\s*"Question"', out))
        if vis != sch or vis != vis_before + len(faqs):
            problems.append(f"{slug}: FAQ desync after edit ({vis} visible / {sch} schema)")
            continue

    # ---- guards ------------------------------------------------------------
    if head_fingerprint(out) != head_before:
        problems.append(f"{slug}: HEAD CHANGED outside JSON-LD — refusing")
        continue
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', out, re.S):
        try:
            json.loads(m.group(1))
        except Exception as e:
            problems.append(f"{slug}: JSON-LD broke — {e}")
            break
    else:
        if out != src:
            changed += 1
            stats.append(f"{slug:<16} {', '.join(did)}")
            if APPLY:
                page.write_text(out, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}   {len(DATA)} cities in data")
print(f"  pages changed : {changed}")
for s in stats:
    print(f"    {s}")
if problems:
    print(f"\n  PROBLEMS ({len(problems)}) — these pages were NOT written:")
    for p in problems:
        print(f"    {p}")
    sys.exit(1)
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
