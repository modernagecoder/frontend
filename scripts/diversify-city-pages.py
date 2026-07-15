"""Phase 2.4 (step 1) — de-duplicate the 131 city pages using only REAL content.

MEASURED, not assumed: the audit said the city pages share 61% of their sentences. They
actually share 74.1% — only 25.9% of sentences are unique, the median page is 23.2% unique,
and 130 of 131 sit below the plan's >=60% target. Google's Aug-2025 spam update and the
Mar-2026 core update target exactly this shape of page set.

The single biggest cloned block was self-inflicted. build-city-warm.py hard-codes SIX
reviews and THREE projects and prints the same ones on all 131 pages — about 20 identical
sentences each. Meanwhile the site owns 15 real reviews (lovewall/constants.ts, the set
verified in Phase 2.2) and 21 real live student projects (student-labs). We were showing a
fraction of our real proof, cloned, instead of all of it, varied.

So this rotates. Every city keeps the SAME card counts (6 reviews, 3 projects) so the layout
and content volume are untouched — only WHICH real items appear changes. Nothing is written
that a customer did not say and no project is claimed that a student did not build.

  reviews : 6 of 15 -> C(15,6) = 5005 possible sets
  projects: 3 of 21 -> C(21,3) = 1330 possible sets

Selection is seeded off the city slug, so it is deterministic and stable: re-running does not
reshuffle the site, and a rebuilt page keeps the reviews it was indexed with.

HONESTY — the pull-quote is the reviewer's OWN first sentence, verbatim, and the body is the
verbatim remainder. build-city-warm.py's six hard-coded quotes were hand-written paraphrases
("My son looks forward to every class."); rather than invent nine more headlines in
customers' mouths, every headline here is a real sentence they actually wrote. The section
promises "real people, real words" — this makes that literally true.

The projects section says "real, live projects from Modern Age Coders learners and labs" and
makes no claim of local origin, so a Jodhpur page showing a project built in Kolkata is
accurate. No city-specific authorship is ever asserted.

SAFETY — this edits ONLY the two grid blocks inside <main>. It never touches <head>, so the
Phase 1 canonical/robots/keyword fixes survive. (build-city-warm.py cannot regenerate these
pages anyway: transform() bails with "ALREADY" once city-warm.css is present.) The script
verifies <head> is byte-identical before writing and refuses the page otherwise.

Usage:  python scripts/diversify-city-pages.py [--apply]
"""
import html
import json
import pathlib
import random
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent
ASSETS = json.loads((ROOT / "scripts" / "city-assets.json").read_text(encoding="utf-8"))
PROJECTS = ASSETS["projects"]
REVIEWS = ASSETS["reviews"]

N_REV, N_PROJ = 6, 3

# Anchored on the element that FOLLOWS each grid. The cards contain nested </div>s, so a
# lazy .*?</div> would stop at the first inner one and silently truncate the block.
PROOF_RE = re.compile(r'(<div class="proof-grid">)(.*?)(</div>\s*<div class="track-all">)', re.S)
REVIEW_RE = re.compile(r'(<div class="review-grid">)(.*?)(</div>\s*</section>)', re.S)
HEAD_RE = re.compile(r"<head>.*?</head>", re.S)


def esc(s):
    return html.escape(s or "", quote=True)


def initials(name):
    parts = [p for p in re.split(r"\s+", name.strip()) if p]
    return (parts[0][0] + (parts[-1][0] if len(parts) > 1 else "")).upper()


def split_review(text):
    """Pull-quote + body, both VERBATIM. Never paraphrase a customer."""
    t = re.sub(r"\s+", " ", text).strip()
    for limit in (110, 160):
        m = re.match(r"(.{15,%d}?[.!?])\s+(.+)" % limit, t)
        if m:
            return m.group(1).strip(), m.group(2).strip()
    return "", t  # one long sentence: no headline rather than a manufactured one


def render_reviews(picks):
    out = []
    for r in picks:
        q, b = split_review(r["text"])
        qh = f'<p class="review-q">"{esc(q)}"</p>' if q else ""
        out.append(
            f'<div class="review-card"><div class="review-stars">★★★★★</div>\n'
            f'  {qh}<p class="review-b">{esc(b)}</p>\n'
            f'  <div class="review-who"><span class="rv-av">{esc(initials(r["name"]))}</span>'
            f'<div><span class="rn">{esc(r["name"])}</span><br>'
            f'<span class="rr">{esc(r["role"])}</span></div></div></div>'
        )
    return "\n".join(out)


def render_projects(picks):
    out = []
    for p in picks:
        # cat/title/desc come out of student-labs already entity-escaped ("AI &amp; ML");
        # unescape first so esc() cannot double-encode them into "AI &amp;amp; ML".
        cat = esc(html.unescape(p["cat"]))
        title = esc(html.unescape(p["title"]))
        desc = esc(html.unescape(p["desc"]))
        # Match the by-line the template already used: "Built by X · React, Firebase".
        # Two reasons it has to keep the stack. It is real, useful, keyword-bearing copy
        # (React/Firebase/Python/AI-ML) that a bare "by Anika" throws away; and .proof-by is
        # inline while .proof-open is inline-block, so a short by-line leaves room for
        # "Open the live project" to sit on the SAME line and collide with it. The original
        # only ever wrapped because its by-line was long. Keep it long.
        who = re.sub(r"^by\s+", "", html.unescape(p["by"])).strip()
        stack = ", ".join(html.unescape(t) for t in p["tags"][:2])
        by = esc(f"Built by {who}" + (f" · {stack}" if stack else ""))
        out.append(
            f'<a class="proof-card" href="{esc(p["url"])}" target="_blank" rel="noopener">\n'
            f'  <div class="proof-thumb"><img width="800" height="500" '
            f'src="/images/projects/{esc(p["img"])}.webp" alt="{title}" loading="lazy"></div>\n'
            f'  <div class="proof-body"><span class="proof-cat">{cat}</span><h3>{title}</h3>'
            f"<p>{desc}</p>\n"
            f'  <span class="proof-by">{by}</span>'
            f'<span class="proof-open">Open the live project ↗</span></div></a>'
        )
    return "\n".join(out)


pages = sorted((ROOT / "src" / "pages").glob("best-coding-class-in-*.html"))
changed = 0
problems = []
rev_use = {r["name"]: 0 for r in REVIEWS}
proj_use = {p["title"]: 0 for p in PROJECTS}

for page in pages:
    slug = page.stem.replace("best-coding-class-in-", "")
    src = page.read_text(encoding="utf-8", errors="surrogateescape")
    head_before = HEAD_RE.search(src)

    # Seeded off the slug: deterministic and stable. A city keeps the proof it was indexed
    # with instead of reshuffling on every run.
    rng = random.Random(f"mac-city-v1-{slug}")
    revs = [REVIEWS[i] for i in rng.sample(range(len(REVIEWS)), N_REV)]
    projs = [PROJECTS[i] for i in rng.sample(range(len(PROJECTS)), N_PROJ)]

    nl = "\r\n" if "\r\n" in src else "\n"

    def sub_block(text, rx, body, label):
        new, n = rx.subn(lambda m: m.group(1) + nl + body.replace("\n", nl) + nl + m.group(3),
                         text, count=1)
        if n != 1:
            problems.append(f"{slug}: {label} matched {n}x")
        return new

    out = sub_block(src, PROOF_RE, render_projects(projs), "proof-grid")
    out = sub_block(out, REVIEW_RE, render_reviews(revs), "review-grid")

    # <head> must be untouched — Phase 1 lives there.
    head_after = HEAD_RE.search(out)
    if not head_before or not head_after or head_before.group(0) != head_after.group(0):
        problems.append(f"{slug}: HEAD CHANGED — refusing")
        continue
    if out.count("proof-card") != N_PROJ or out.count("review-card") != N_REV:
        problems.append(f"{slug}: wrong card count after render")
        continue

    for r in revs:
        rev_use[r["name"]] += 1
    for p in projs:
        proj_use[p["title"]] += 1

    if out != src:
        changed += 1
        if APPLY:
            page.write_text(out, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}   {len(pages)} city pages")
print(f"  pages changed : {changed}")
print(f"  pool          : {len(REVIEWS)} real reviews (6/page) · {len(PROJECTS)} real projects (3/page)")
if rev_use:
    print(f"  review spread : {min(rev_use.values())}–{max(rev_use.values())} pages per review")
    print(f"  project spread: {min(proj_use.values())}–{max(proj_use.values())} pages per project")
if problems:
    print(f"\n  PROBLEMS ({len(problems)}) — nothing written for these:")
    for p in problems[:12]:
        print(f"    {p}")
    sys.exit(1)
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
