"""Phase 1.5 — stop claiming events that already finished, and fix the Event image 404.

Two separate problems, found by auditing every Event node on the site:

1) FIVE events had already ended but still said eventStatus: EventScheduled —
   4 summer camps (ended 2026-06-30) and Hackathon 1.0 (ended 2026-06-13). Structured
   data is a set of factual claims; "this event is scheduled" about a past event is a
   false one. The plan allows updating to the next edition's dates OR removing the block.
   The next edition's dates are not knowable from the repo and inventing them would be
   the same sin in the other direction, so the blocks are removed and a comment left in
   place with the exact steps to restore them once real dates exist.
   The pages themselves stay and keep ranking; only the false claim goes.

2) ALL EIGHT camp Events pointed image at /pages/summer-coding-camp.png, which is a 404.
   This matters most on the FOUR WINTER camps, which are still upcoming (15 Nov – 31 Dec
   2026) and therefore live: image is a required property for Google's Event rich result,
   so a 404 there means those events are failing validation right now. Repointed to
   /images/og-modern-age-coders.png — verified 200, and already what these same pages use
   for og:image and what the hackathon Event used.

Every Event block here is standalone (verified), so removing one cannot disturb the
other schema on the page. JSON is parsed before and after; nothing is written unless the
remaining blocks still parse.

Usage:  python scripts/fix-events.py [--apply]
"""
import json
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ROOT / "src" / "pages"

ENDED = [
    "summer-coding-camp",
    "summer-coding-camp-kids",
    "summer-coding-camp-teens",
    "summer-coding-camp-adults",
    "hackathon",
]
UPCOMING = [
    "winter-coding-camp",
    "winter-coding-camp-kids",
    "winter-coding-camp-teens",
    "winter-coding-camp-adults",
]

BROKEN_IMG = "https://learn.modernagecoders.com/pages/summer-coding-camp.png"
GOOD_IMG = "https://learn.modernagecoders.com/images/og-modern-age-coders.png"

BLOCK = re.compile(
    r'[ \t]*<script type="application/ld\+json">\s*(\{.*?\})\s*</script>\n?', re.S
)

NOTE = """    <!-- Event schema removed 2026-07-14: this edition ended and the block still said
         eventStatus: EventScheduled, which is a false claim in structured data.
         To restore, re-add a single ld+json <script> with @type Event and REAL dates:
         name, startDate, endDate (ISO 8601), eventAttendanceMode OnlineEventAttendanceMode,
         eventStatus EventScheduled, location VirtualLocation {url}, organizer, offers,
         and image (must return 200 — the old /pages/summer-coding-camp.png was a 404). -->
"""

removed = 0
img_fixed = 0
skipped = []


def parses(text):
    try:
        json.loads(text)
        return True
    except Exception:
        return False


# --- 1) drop Event blocks whose event has ended ---------------------------
for name in ENDED:
    path = PAGES / f"{name}.html"
    html = path.read_text(encoding="utf-8", errors="surrogateescape")

    def drop(m):
        global removed
        try:
            d = json.loads(m.group(1))
        except Exception:
            return m.group(0)
        if not (isinstance(d, dict) and d.get("@type") == "Event"):
            return m.group(0)
        removed += 1
        return NOTE

    new_html = BLOCK.sub(drop, html)
    if new_html == html:
        skipped.append(f"{name}: no standalone Event block matched")
        continue
    # every surviving block must still parse
    bad = [b for b in BLOCK.finditer(new_html) if not parses(b.group(1))]
    if bad:
        skipped.append(f"{name}: a remaining block stopped parsing")
        continue
    if "Event" in "".join(
        b.group(1) for b in BLOCK.finditer(new_html) if '"@type": "Event"' in b.group(1)
    ):
        skipped.append(f"{name}: an Event block survived")
        continue
    if APPLY:
        path.write_text(new_html, encoding="utf-8", errors="surrogateescape")

# --- 2) repoint the 404 image on the still-upcoming events ----------------
for name in UPCOMING:
    path = PAGES / f"{name}.html"
    html = path.read_text(encoding="utf-8", errors="surrogateescape")
    if BROKEN_IMG not in html:
        continue
    n = html.count(BROKEN_IMG)
    new_html = html.replace(BROKEN_IMG, GOOD_IMG)
    bad = [b for b in BLOCK.finditer(new_html) if not parses(b.group(1))]
    if bad:
        skipped.append(f"{name}: JSON broke while fixing image")
        continue
    img_fixed += n
    if APPLY:
        path.write_text(new_html, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  ended Event blocks removed      : {removed}  (of {len(ENDED)} pages)")
print(f"  404 Event images repointed      : {img_fixed}  (on upcoming winter camps)")
if skipped:
    print(f"  SKIPPED (unsafe): {len(skipped)}")
    for s in skipped:
        print(f"    {s}")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
