"""Phase 1.4 — make sameAs tell the truth, and wire every provider to one Organization.

sameAs is how a search engine or an LLM confirms "this site is that brand": it follows each
URL and looks for a link back. Every entry that 404s or points at ourselves weakens that
confirmation instead of strengthening it. Audited every distinct value on the site.

TWO shapes existed, and both were wrong in different ways.

A) sameAs as a LIST (852 nodes) — genuine profile lists, with bad entries mixed in:
   removed  learn.modernagecoders.com (+ www./bare/trailing-slash variants)
            Our own URL. sameAs is for OTHER profiles that corroborate us.
            (www.modernagecoders.com just 301s back to this same site.)
   removed  linkedin.com/company/modernagecoders + /modern-age-coders — both 404.
            The company page does not exist.
   fixed    instagram.com/modernagecoders -> instagram.com/modern_age_coders
            Verified as Googlebot: the first serves a generic "Instagram" page (no such
            account); the second is the real "@modern_age_coders" profile.
   kept     facebook.com/modernagecoders, youtube.com/@modernagecoders,
            github.com/modernagecoder, g.page review link — all verified real.
   kept     linkedin.com/in/shivam-khemka-... — a PERSONAL profile, not the organisation.
            Left deliberately; see the Phase 1.4 report. Engines ignore a mismatch, whereas
            a 404 actively costs trust.

B) sameAs as a STRING (808 nodes), always "sameAs": "<our own url>", on the anonymous
   provider Organization inside Course schema:
       "provider": { "@type": "Organization", "name": "Modern Age Coders",
                     "sameAs": "https://learn.modernagecoders.com" }
   This is the entity-fragmentation problem itself: 800+ nameless Organization nodes that
   Google must GUESS are the same company, each "confirmed" by a link to ourselves. Rewritten
   to reference the one canonical entity by @id, with url carrying the real meaning:
       "provider": { "@type": "Organization", "@id": ".../#organization",
                     "name": "Modern Age Coders", "url": "https://learn.modernagecoders.com" }

Lists are rewritten wholesale (indent-preserving) rather than spliced element-by-element, so
comma handling cannot corrupt a block. Every block is parsed before and after; duplicate keys
are detected explicitly, because Python's json silently keeps the last one. A file is written
only if all of its JSON still parses, no banned value survives, and no key was duplicated.

Usage:  python scripts/fix-sameas.py [--apply]
"""
import json
import pathlib
import re
import sys
from collections import Counter

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent

ORG_ID = "https://learn.modernagecoders.com/#organization"
SITE = "https://learn.modernagecoders.com"

SELF = {
    "https://learn.modernagecoders.com",
    "https://learn.modernagecoders.com/",
    "https://www.modernagecoders.com",
    "https://www.modernagecoders.com/",
    "https://modernagecoders.com",
    "https://modernagecoders.com/",
}
DEAD = {
    "https://www.linkedin.com/company/modernagecoders",
    "https://www.linkedin.com/company/modern-age-coders",
}
DROP = SELF | DEAD
RENAME = {
    "https://www.instagram.com/modernagecoders": "https://www.instagram.com/modern_age_coders",
    "https://instagram.com/modernagecoders": "https://www.instagram.com/modern_age_coders",
    "https://instagram.com/modern_age_coders": "https://www.instagram.com/modern_age_coders",
}

LD = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)
SAMEAS_LIST = re.compile(r'("sameAs":\s*)\[[^\[\]]*\]')
_self_alt = "|".join(re.escape(u) for u in sorted(SELF, key=len, reverse=True))
# Node already has url -> only swap sameAs for @id, or we would emit url twice.
SAMEAS_STR_BEFORE_URL = re.compile(r'"sameAs":\s*"(?:' + _self_alt + r')"(\s*,\s*)"url"')
SAMEAS_STR = re.compile(r'"sameAs":\s*"(?:' + _self_alt + r')"')


def dup_keys(pairs):
    seen = set()
    for k, _ in pairs:
        if k in seen:
            raise ValueError(f"duplicate key {k!r}")
        seen.add(k)
    return dict(pairs)


def parse_strict(text):
    """Parse, and fail loudly on duplicate keys instead of silently dropping one."""
    return json.loads(text, object_pairs_hook=dup_keys)


def clean(urls):
    out = []
    for u in urls:
        u = RENAME.get(u, u)
        if u in DROP:
            continue
        if u not in out:
            out.append(u)
    return out


def collect(obj, acc):
    if isinstance(obj, dict):
        s = obj.get("sameAs")
        if isinstance(s, str):
            acc.append([s])
        elif isinstance(s, list):
            acc.append([x for x in s if isinstance(x, str)])
        for v in obj.values():
            collect(v, acc)
    elif isinstance(obj, list):
        for v in obj:
            collect(v, acc)


files_changed = 0
removed = Counter()
renamed = Counter()
providers_wired = 0
deduped = 0
skipped = []

for path in sorted((ROOT / "src" / "pages").glob("*.html")):
    html = path.read_text(encoding="utf-8", errors="surrogateescape")
    if "sameAs" not in html:
        continue
    new_html = html
    touched = False

    for m in LD.finditer(html):
        open_tag, body, close_tag = m.group(1), m.group(2), m.group(3)
        try:
            parse_strict(body)
        except Exception:
            continue  # already broken or duplicated upstream; not ours to fix here

        # --- A) list form -------------------------------------------------
        def rewrite_list(sm):
            global deduped
            prefix = sm.group(1)
            try:
                urls = json.loads(sm.group(0)[len(prefix):])
            except Exception:
                return sm.group(0)
            if not all(isinstance(u, str) for u in urls):
                return sm.group(0)
            new = clean(urls)
            if new == urls:
                return sm.group(0)
            for u in urls:
                if u in DROP:
                    removed[u] += 1
                elif u in RENAME:
                    renamed[u] += 1
            if len(new) < len([RENAME.get(u, u) for u in urls if u not in DROP]):
                deduped += 1
            line_start = sm.string.rfind("\n", 0, sm.start()) + 1
            indent = re.match(r"[ \t]*", sm.string[line_start:]).group(0)
            if not new:
                return prefix + "[]"
            items = ",\n".join(f'{indent}  "{u}"' for u in new)
            return f"{prefix}[\n{items}\n{indent}]"

        new_body = SAMEAS_LIST.sub(rewrite_list, body)

        # --- B) string form: self-sameAs -> canonical @id -----------------
        def wire_with_url(sm):
            global providers_wired
            providers_wired += 1
            return f'"@id": "{ORG_ID}"{sm.group(1)}"url"'

        def wire(sm):
            global providers_wired
            providers_wired += 1
            return f'"@id": "{ORG_ID}", "url": "{SITE}"'

        new_body = SAMEAS_STR_BEFORE_URL.sub(wire_with_url, new_body)
        new_body = SAMEAS_STR.sub(wire, new_body)

        if new_body == body:
            continue

        # --- validate -----------------------------------------------------
        try:
            reparsed = parse_strict(new_body)
        except Exception as e:
            skipped.append(f"{path.name}: {e}")
            continue
        acc = []
        collect(reparsed, acc)
        bad = [u for lst in acc for u in lst if u in DROP or u in RENAME]
        if bad:
            skipped.append(f"{path.name}: banned value survived: {bad[0]}")
            continue
        if any(len(lst) != len(set(lst)) for lst in acc):
            skipped.append(f"{path.name}: duplicate survived in sameAs")
            continue

        new_html = new_html.replace(open_tag + body + close_tag, open_tag + new_body + close_tag)
        touched = True

    if touched:
        files_changed += 1
        if APPLY:
            path.write_text(new_html, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  files changed              : {files_changed}")
print(f"  provider nodes wired to @id: {providers_wired}")
print(f"  sameAs arrays deduped      : {deduped}")
print("\n  removed from sameAs (dead or self-referential):")
for u, c in removed.most_common():
    tag = "404" if u in DEAD else "self"
    print(f"    {c:>5}x  [{tag}] {u}")
print("\n  corrected (wrong or non-canonical handle):")
for u, c in renamed.most_common():
    print(f"    {c:>5}x  {u}  ->  {RENAME[u]}")
if skipped:
    print(f"\n  SKIPPED (unsafe, left untouched): {len(skipped)}")
    for s in skipped[:10]:
        print(f"    {s}")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
