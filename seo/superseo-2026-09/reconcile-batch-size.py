# Group batch size: owner ruled the true cap is 10, so brand-facts.json becomes 5-10 and the
# site copy that says 5-8 is reconciled to it.
#
# Only fires when the range is actually attached to a batch/student/learner noun, because
# "Grades 5-8", "Classes 5-8" and "5-8 projects" are unrelated and must not be touched.
# Board-prep's 10-15 is left alone: that is a different product and a deliberate owner
# decision from commit 77f3bf39, nine days before this run.
import re, os, sys, io, glob, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

ROOT = r"C:\Users\hp\Desktop\SkyCoders\kiro24\frontend"
DRY = "--apply" not in sys.argv
D = r"(?:-|\u2013|&ndash;|\s+to\s+)"          # 5-8 / 5–8 / 5&ndash;8 / 5 to 8

RULES = [
    # digits + explicit noun
    (rf"\b5{D}8(\s*(?:students|learners|kids|children|per batch))", lambda m: "5-10" + m.group(1)),
    # "batch(es)/batch size(s) of 5-8"  and  "batches of 5-8," with no noun
    (rf"(batch(?:es)?(?:\s+sizes?)?\s+of\s+)5{D}8\b", lambda m: m.group(1) + "5-10"),
    (rf"(batch\s+sizes?\s*\(\s*)5{D}8\b", lambda m: m.group(1) + "5-10"),
    (rf"(batch\s+sizes?\s+of\s+)5{D}8\b", lambda m: m.group(1) + "5-10"),
    # written out
    (r"\bfive to eight\b(\s*(?:students|learners|kids|compatible learners)?)", lambda m: "five to ten" + m.group(1)),
]
# never touch these, even if a rule matches inside them
VETO = re.compile(r"(grade|class(?:es)?|std|standard|chapter|lesson|week|module|year)s?\s*5\s*(?:-|\u2013|to)\s*8", re.I)

hits = collections.Counter()
files_changed = 0
total = 0
samples = []

targets = (glob.glob(os.path.join(ROOT, "src", "pages", "*.html")) +
           glob.glob(os.path.join(ROOT, "src", "pages", "*.md")) +
           glob.glob(os.path.join(ROOT, "content", "**", "data", "**", "*.json"), recursive=True))

for path in sorted(targets):
    try:
        src = open(path, encoding="utf-8").read()
    except Exception:
        continue
    out = src
    local = 0
    for pat, rep in RULES:
        def guarded(m):
            global local
            around = out[max(0, m.start() - 40): m.end() + 20]
            if VETO.search(around):
                return m.group(0)
            local += 1
            if len(samples) < 12:
                samples.append((os.path.basename(path), " ".join(around.split())[:95]))
            return rep(m)
        out, n = re.subn(pat, guarded, out)
        if n:
            hits[pat[:34]] += n
    if local and out != src:
        files_changed += 1
        total += local
        if not DRY:
            open(path, "w", encoding="utf-8", newline="").write(out)

print(f"{'DRY RUN' if DRY else 'APPLIED'}")
print(f"  files : {files_changed}")
print(f"  edits : {total}\n")
for k, v in hits.most_common():
    print(f"   {v:>4}  {k}")
print("\n  samples:")
for f, c in samples:
    print(f"    {f[:32]:<32} {c}")
