"""Phase 2.2 — remove testimonials that no real person gave.

lovewall/feedback.txt is the ground truth: it is the harvested set of real Google reviews,
15 of them, each with the reviewer's name and their actual words. constants.ts carried 37.
The extra 22 (ids 16-37) match nobody in feedback.txt. They are inventions, and they read
like it once you line them up: formulaic roles ("Working Professional", "Grade 9 Student")
against the real ones' specific roles ("Parent of Dhairya", "Former Student"), and stock
placeholder names — "Aarav Sharma" is testimonial #16 AND row 1 of the SQL tutorial's
sample data in content/resources/data/sql/. Same name generator.

Fake reviews are not a style problem. They breach Google's review policy, and India's ASCI
code and the US FTC both treat invented endorsements as deceptive advertising. The business
has a real 4.9 from 547 Google reviews — it does not need invented ones.

Owner decision 2026-07-15: remove all 22. The wall drops 37 -> 15, every remaining one
traceable to feedback.txt. More can be harvested from the 547 later.

Only touches the TESTIMONIALS array. Does NOT touch content/resources/data/**, where those
same names are legitimate SQL/Java teaching data.

Usage:  python scripts/prune-fabricated-testimonials.py [--apply]
"""
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent
CONST = ROOT / "lovewall" / "constants.ts"
FEEDBACK = ROOT / "lovewall" / "feedback.txt"

real_names = [
    n.strip()
    for n in re.findall(r"^\s*\d+\.\s*(.+)$", FEEDBACK.read_text(encoding="utf-8", errors="surrogateescape"), re.M)
]
if not real_names:
    print("Refusing to run: no reviewers parsed from feedback.txt")
    sys.exit(1)


def is_real(name):
    clean = re.sub(r"^(Mr\.|Mrs\.|Ms\.)\s*", "", name).strip()
    parts = clean.split()
    if not parts:
        return False
    first, last = parts[0].lower(), parts[-1].lower()
    return any(first in r.lower() and last in r.lower() for r in real_names)


text = CONST.read_text(encoding="utf-8", errors="surrogateescape")

start = text.index("export const TESTIMONIALS: Testimonial[] = [")
open_br = text.index("[", start)
end = text.index("\n];", open_br)
head, body, tail = text[: open_br + 1], text[open_br + 1 : end], text[end:]

# each entry is a brace-balanced object at depth 1
entries, depth, cur = [], 0, ""
for ch in body:
    cur += ch
    if ch == "{":
        depth += 1
    elif ch == "}":
        depth -= 1
        if depth == 0:
            entries.append(cur)
            cur = ""
if cur.strip().strip(","):
    print("Refusing to run: trailing content after the last entry — parse is unsafe")
    sys.exit(1)

kept, dropped = [], []
for e in entries:
    m = re.search(r"name:\s*'([^']*)'", e)
    if not m:
        print("Refusing to run: an entry has no name field")
        sys.exit(1)
    (kept if is_real(m.group(1)) else dropped).append((m.group(1), e))

if len(kept) != len(real_names):
    print(f"WARNING: {len(kept)} kept vs {len(real_names)} real reviewers in feedback.txt")

new_body = "\n" + ",\n".join(e.strip().rstrip(",") for _, e in kept) + "\n"
new_text = head + new_body + tail

# sanity: every kept entry must survive, every dropped name must be gone
for n, _ in kept:
    if f"name: '{n}'" not in new_text:
        print(f"Refusing to write: lost a real testimonial ({n})")
        sys.exit(1)
for n, _ in dropped:
    if f"name: '{n}'" in new_text:
        print(f"Refusing to write: fabricated testimonial survived ({n})")
        sys.exit(1)
if new_text.count("{") - new_text.count("}") != text.count("{") - text.count("}"):
    print("Refusing to write: brace balance changed")
    sys.exit(1)

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  real reviewers in feedback.txt : {len(real_names)}")
print(f"  testimonials before            : {len(entries)}")
print(f"  KEPT (traceable to a review)   : {len(kept)}")
print(f"  REMOVED (no source, invented)  : {len(dropped)}")
for n, _ in dropped:
    print(f"      - {n}")

if APPLY:
    CONST.write_text(new_text, encoding="utf-8", errors="surrogateescape")
else:
    print("\n(dry run — re-run with --apply to write)")
