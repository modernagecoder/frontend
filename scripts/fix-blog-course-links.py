"""Phase 2.6 — repoint 58 broken /courses/<slug> links in the blog.

21 distinct slugs across ~25 blog posts point at courses that do not exist. They 404 through
the /courses/* wildcard: a reader clicking "Full Stack Development course" mid-article hits a
dead end, and the link equity those posts pass goes nowhere.

This is slug DRIFT, not invention — every broken slug has a real course behind a renamed
slug (full-stack-development -> full-stack-web-development-masterclass-college). One is
simply truncated: "kids-coding-blocks-mastercla".

Mapped to the real COURSE page rather than a topical landing page, against the repo's usual
"blog links -> landing pages" habit, and deliberately: the anchor text is course-specific
("Full Stack Development course", "MERN Stack masterclass"), so the honest destination is
that course. There is no web-development landing page to send them to anyway. Where the repo
rule matters is for NEW posts choosing a target; here the target already exists and is named
in the anchor.

Every destination is verified to exist in content/courses/data before anything is written;
an unverified target would just move the 404.

Usage:  python scripts/fix-blog-course-links.py [--apply]
"""
import json
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "content" / "blog" / "data"
COURSES = ROOT / "content" / "courses" / "data"

MAP = {
    "frontend-web-development-complete-masterclass-teens": "frontend-development-masterclass-for-teens",
    "backend-web-development-complete-masterclass-teens": "backend-coding-masterclass-for-teens",
    "full-stack-web-development-complete-masterclass-teens": "full-stack-web-development-teens-masterclass",
    "web-development-for-teens-complete-guide": "full-stack-web-development-teens-masterclass",
    "full-stack-development": "full-stack-web-development-masterclass-college",
    "full-stack-web-development-college-students": "full-stack-web-development-masterclass-college",
    "web-development-complete-course": "full-stack-web-development-masterclass-college",
    "web-development": "full-stack-web-development-masterclass-college",
    "mern-stack-complete-masterclass-college": "mern-stack-development-masterclass-college",
    "kids-web-design": "kids-ai-web-development-course",
    "kids-coding-complete": "kids-coding-blocks-masterclass",
    "kids-coding-blocks-mastercla": "kids-coding-blocks-masterclass",  # truncated slug
    "coding-for-kids-beginners": "kids-coding-blocks-masterclass",
    "python": "python-programming-masterclass-zero-to-advanced-college",
    "python-programming-college": "python-programming-masterclass-zero-to-advanced-college",
    "java-programming-masterclass": "complete-java-programming-masterclass-college",
    "java-programming-complete-course-teens": "java-programming-masterclass-for-teens",
    "data-science": "data-science-complete-masterclass-college",
    "data-science-machine-learning-python-college": "data-science-complete-masterclass-college",
    "app-development": "complete-app-development-masterclass-college",
    "game-development-for-kids-teens": "game-development-masterclass-for-kids",
}

# --- every destination must be a real course ------------------------------
real = set()
for f in COURSES.glob("*.json"):
    if f.name == "courses-config.json":
        continue
    try:
        d = json.loads(f.read_text(encoding="utf-8"))
        m = d.get("meta", d)
        s = d.get("slug") or m.get("slug")
        if s:
            real.add(s)
    except Exception:
        pass

missing = sorted({v for v in MAP.values() if v not in real})
if missing:
    print("Refusing to run — these destinations do not exist:")
    for m in missing:
        print(f"    /courses/{m}")
    sys.exit(1)
print(f"all {len(set(MAP.values()))} destinations verified against {len(real)} real courses\n")

files_changed = 0
total = 0
per_slug = {}

for f in sorted(DATA.glob("*.json")):
    t = f.read_text(encoding="utf-8", errors="surrogateescape")
    orig = t
    for bad, good in MAP.items():
        # word-boundary on the slug so /courses/python does not match
        # /courses/python-ai-kids-masterclass
        pat = re.compile(r"/courses/" + re.escape(bad) + r"(?![a-z0-9\-])")
        n = len(pat.findall(t))
        if n:
            t = pat.sub(f"/courses/{good}", t)
            per_slug[bad] = per_slug.get(bad, 0) + n
            total += n
    if t != orig:
        try:
            json.loads(t)  # must stay valid JSON
        except Exception as e:
            print(f"  SKIP {f.name}: JSON broke ({e})")
            continue
        files_changed += 1
        if APPLY:
            f.write_text(t, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  blog posts changed : {files_changed}")
print(f"  links repointed    : {total}")
for k, v in sorted(per_slug.items(), key=lambda x: -x[1]):
    print(f"    {v:>3}x  /courses/{k}\n         -> /courses/{MAP[k]}")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
