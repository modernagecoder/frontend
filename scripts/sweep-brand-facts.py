"""Phase 2.3 — make every page agree about the business.

The site claimed 100 / 500+ / 3,000+ / 3,200 / 10,000+ / 11,400+ / 12,400+ / 20,000 /
22,000 students across 82 pages — a 44x spread — plus four different founding years. AI
engines treat cross-entity consistency as a trust signal; a site that contradicts itself
gets every number discounted, including the true ones.

Canonical set by the owner on 2026-07-15: 10,000+ students. Cross-checked rather than taken
on faith — 547 Google reviews against 10,000+ students is a ~5.5% review rate, which is
normal, whereas the 500+ briefly considered would imply a >100% review rate. It also matches
/about, seo-config.js and the 65 existing on-page claims, so this sweep moves outliers to
the majority rather than rewriting the whole site.
scripts/brand-facts.json is now the source of truth.

DELIBERATELY NARROW — every match was read in context first, and a naive number sweep would
have wrecked real content:
  - "20-50 students per batch" is the ✗ column of the COMPETITOR comparison table.
  - "134 countries" is Don Bosco's religious order; "90+ countries" is the IOI olympiad.
  - "3-4 students per batch" is the real Mini Batch pricing tier.
  - "since 1957/1959/1980/1989/1958/2000/2004/2017/2018" are Don Bosco, Birla, Apple
    Ireland, the IOI, Kumon, Dubai Internet City, CMU Qatar, the UAE AI ministry and the
    Irish Leaving Cert spec — none of them us.
So this only rewrites claims unambiguously ABOUT THIS BUSINESS, matched by their full
surrounding phrase, never by a bare number.

Left alone on purpose:
  - Per-segment counts (2,400+ German students, 3,100+ 8-year-olds) are plausible subsets of
    10,000+. They were only impossible against 500+, which is part of why 10,000+ is better.
  - "~3,200 students" on the Heritage School page is HERITAGE'S OWN ROLL, not ours.
  - "3,000+ Student Campus" on the DPS Navi Mumbai page is DPS'S OWN ROLL, not ours.
  - "$20,000 student loan at 6% compounded monthly" is a 12th-grade maths word problem.
  - "Join 8,500+ students" (maths-challenges) and "Join 12,000+ students" (coding-challenges)
    were treated differently on purpose: 12,000 EXCEEDS the canonical so it had to move,
    8,500 is a plausible subset of 10,000+ so it stays. Same rule as the per-segment counts.
  - Country counts. See _needs_owner_confirmation in brand-facts.json — the real number is an
    owner fact, and guessing it here would just launder a guess into 40+ pages.

The same stat strip is skinned three different ways, and a phrase rule sees NONE of them
because the number and its label sit in separate elements:
    <div class="num">500+</div><div class="lbl">Students taught</div>   -> STAT_SPLIT
    <b>500+</b><span>Students<br>taught</span>                          -> STAT_SPLIT
    <span>3,000+</span> Students Taught                                 -> STAT_TEXT
This is why a plain-text survey made "500+" look like the site's dominant truth: it was one
cloned hero strip on 131 pages, invisible to every phrase rule written against it.

Usage:  python scripts/sweep-brand-facts.py [--apply]
"""
import json
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent
FACTS = json.loads((ROOT / "scripts" / "brand-facts.json").read_text(encoding="utf-8"))
STUDENTS = FACTS["students"]          # "10,000+"
BARE = STUDENTS.rstrip("+")           # "10,000"
REVIEWS = FACTS["reviews"]
RATING = FACTS["rating"]
FOUNDED = FACTS["founded"]

pages = sorted(
    list((ROOT / "src" / "pages").glob("*.html"))
    + list((ROOT / "src" / "pages" / "category").glob("*.html"))
)

# The (?<![\d,]) is not cosmetic. Without it, "500" matches INSIDE "8,500+" — the comma makes
# a \b — and maths-challenges.html turned into "Join 8,10,000+ students". A number sweep must
# never be able to reach inside a bigger number.
OUTLIERS = r"(?<![\d,])(?:500|1,500|3,000|3,200|11,000|11,400|12,000|12,400|20,000|22,000)"

# The stat strips put the number in one element and the word "Students" in the NEXT one, so
# no phrase rule can ever see them — 10 pages kept claiming 500+ after the first sweep for
# exactly this reason. Matching on the markup instead catches every skin of the same strip
# (<div class="num">/<div class="lbl">, <b>/<span>, <strong>/<span>) without needing a rule
# per page. Anchored on the "Students" label so it can never touch a bare 500/1,500 that
# happens to be a price or a sector number.
STAT_SPLIT = re.compile(
    r"(<(?P<t1>div|b|strong|span)(?:\s[^>]*)?>)\s*" + OUTLIERS + r"\+\s*"
    r"(</(?P=t1)>\s*<(?:div|span|p)(?:\s[^>]*)?>\s*Students?\b)",
    re.I,
)

# A third skin of the same strip: the number is wrapped but the label is bare text after the
# closing tag (<span>3,000+</span> Students Taught). Requires an explicit taught/trained/
# mentored so it stays clear of the "<b>500+</b> students across India" hero strip below,
# which has its own rule.
STAT_TEXT = re.compile(
    r"(<(?P<t>span|b|strong|div)(?:\s[^>]*)?>)\s*" + OUTLIERS + r"\+\s*"
    r"(</(?P=t)>\s*Students?\s+(?:taught|trained|mentored)\b)",
    re.I,
)

RULES = [
    # --- student counts that are unambiguously ours -> canonical ----------
    # Must name the verb. This used to be a bare "<OUTLIER>+ Students" with a (?!\s+per)
    # guard, and it rewrote "Thriving in a 3,000+ Student Campus" on the DPS Navi Mumbai page
    # — that is the SCHOOL'S campus roll ("a prestigious school boasting thousands of
    # high-achievers"), not our student count. Requiring taught/trained/mentored/enrolled
    # means the rule can only fire on a sentence that is claiming WE taught them.
    (rf"\b{OUTLIERS}\s*\+?\s+(students?|Students?)\s+(taught|trained|mentored|enrolled|Taught|Trained|Mentored|Enrolled)\b",
     rf"{STUDENTS} \1 \2", "student count -> canonical"),
    (r"\b22,000\+?\s+families\b", f"{STUDENTS} families", "families -> canonical"),
    (r"\bTwenty-two thousand families\b", f"{STUDENTS} families", "families (spelled out)"),
    (r"\b500\+\s+students across India\b",
     f"{STUDENTS} students across India and {FACTS['countries']} countries", "hero strip"),
    (r"\bJoin over\s+10,000\s+students\b", f"Join over {BARE} students", "hero CTA"),
    (r"\bMore than\s+10,000\s+students\b", f"More than {BARE} students", "prose"),
    (r"\bwe(?:'|&#x27;)?ve\s+trained\s+over\s+500\s+students\b",
     f"we&#x27;ve trained over {BARE} students", "prose"),
    # per-school counts nobody can evidence -> drop the number, keep the claim
    (r"\bOver\s+500\s+students\s+from\b", "Students from", "unverifiable per-school count"),
    # --- the rating is from REVIEWS and must never be restated as students -
    (r"[Rr]ated\s+4\.9/5\s+by\s+10,000\+?\s+students\s+from\s+15\+\s+countries",
     f"Rated {RATING} across {REVIEWS} Google reviews", "FALSE: 4.9 is from reviews, not students"),
    (r"[Rr]ated\s+4\.9\s+out\s+of\s+5\s+from\s+247\+?\s+reviews",
     f"Rated {RATING} across {REVIEWS} Google reviews", "wrong review count"),
    # --- founding year, ours only (phrase-anchored) -----------------------
    (r"\btaught\s+online\s+since\s+2021\b", f"taught online since {FOUNDED}", "founding drift"),
    (r"\btaught\s+live\s+since\s+2021\b", f"taught live since {FOUNDED}", "founding drift"),
    (r"\bteaching\s+live\s+online\s+since\s+2019\b",
     f"teaching live online since {FOUNDED}", "founding drift"),
    (r"\btraining\s+Olympiad-track\s+students\s+since\s+2019\b",
     f"training Olympiad-track students since {FOUNDED}", "founding drift"),
    (r"\bmentored\s+across\s+60\+\s+cities\s+since\s+2022\b",
     f"mentored across 60+ cities since {FOUNDED}", "founding drift"),
    # These put the number and its label in SEPARATE elements, so no phrase rule can see
    # them — they have to be matched on their markup. The <b>500+</b> strip is the single
    # most-repeated stat on the site (131 pages), which is why the plain-text survey made
    # "500+" look like the dominant truth when it was one cloned hero strip.
    (r"<b>500\+</b>\s*students across India",
     f"<b>{STUDENTS}</b> students across India", "hero strip (131 pages)"),
    (STAT_SPLIT, rf"\g<1>{STUDENTS}\g<3>", "split stat strip (number and label in separate elements)"),
    (STAT_TEXT, rf"\g<1>{STUDENTS}\g<3>", "split stat strip (label is bare text after the tag)"),
    (r'<div class="big">11,400\+</div>', f'<div class="big">{STUDENTS}</div>', "split stat strip"),
    (r"\bstudents,\s*2019(&ndash;|–)2026\.", rf"students, {FOUNDED}\g<1>2026.", "founding drift"),
]

# Anything still claiming MORE than the canonical total, after the sweep.
# The (?<!\$) matters: online-math-tutor-12th-grade.html contains "A $20,000 student loan at
# 6% compounded monthly" — a MATHS WORD PROBLEM, not a claim about our student count.
TOO_BIG = re.compile(r"(?<!\$)\b(?:1[1-9]|[2-9][0-9]),\d{3}\s*\+?\s*(?:students?|families|learners)", re.I)

changed = 0
hits = {}
flags = []

for p in pages:
    html = p.read_text(encoding="utf-8", errors="surrogateescape")
    orig = html
    for pat, rep, why in RULES:
        new, n = re.subn(pat, rep, html)
        # A rule whose match already equals its replacement (the canonical-year and
        # canonical-count rules match their own output) reports n>0 while changing nothing.
        # Only count a hit when the text actually moved, or the summary overstates the work.
        if n and new != html:
            hits[why] = hits.get(why, 0) + n
        html = new
    flat = re.sub(r"<[^>]+>", " ", html)
    for m in TOO_BIG.finditer(flat):
        flags.append((p.name, m.group(0).strip()))
    if html != orig:
        changed += 1
        if APPLY:
            p.write_text(html, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}   canonical: {STUDENTS} students · {REVIEWS} reviews · {RATING} · est {FOUNDED}")
print(f"  pages changed : {changed}")
for why, n in sorted(hits.items(), key=lambda x: -x[1]):
    print(f"    {n:>4}x  {why}")
if flags:
    print(f"\n  STILL ABOVE THE CANONICAL TOTAL — needs a human ({len(flags)}):")
    for f, l in flags[:10]:
        print(f"    {f:<40} {l}")
else:
    print("\n  no claim exceeds the canonical total.")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
