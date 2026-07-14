"""Phase 1.4 — make the Organization entity consistent so search and AI engines see one brand.

Fixes, all validated by re-parsing each JSON-LD block after the edit:
  1. Two different Facebook URLs across the site. Owner confirmed the vanity URL is the one
     to keep, so profile.php?id=... is rewritten to it everywhere.
  2. wa.me in sameAs. sameAs is for identity/profile pages that confirm the entity; a chat
     link is not one, and Google ignores it. The number stays reachable everywhere it
     actually belongs (contactPoint, the WhatsApp buttons, the footer).

Usage:  python scripts/fix-entity-schema.py [--apply]
"""
import json
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent

FB_OLD = "https://www.facebook.com/profile.php?id=100088860364349"
FB_NEW = "https://www.facebook.com/modernagecoders"
WA = "https://wa.me/919123366161"

LD = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)
# Remove the wa.me entry from an array, taking whichever comma keeps the JSON valid:
# a leading comma when it is the last element, otherwise its own trailing comma.
WA_ENTRY = re.compile(r',\s*"' + re.escape(WA) + r'"(?=\s*\])|\n\s*"' + re.escape(WA) + r'",?')

TARGETS = []
for pat in ("src/pages/*.html", "components/*.html", "content/**/*.html", "content/**/*.json"):
    TARGETS.extend(ROOT.glob(pat))
TARGETS.extend([ROOT / "llms.txt", ROOT / "llms-full.txt"])
TARGETS = sorted({p for p in TARGETS if p.is_file()})

fb_files = 0
fb_hits = 0
wa_files = 0
wa_hits = 0
broke = []

for path in TARGETS:
    try:
        text = path.read_text(encoding="utf-8", errors="surrogateescape")
    except Exception:
        continue
    original = text

    # --- 1. Facebook URL, everywhere (schema, links, prose) -------------------
    n_fb = text.count(FB_OLD)
    if n_fb:
        text = text.replace(FB_OLD, FB_NEW)
        fb_files += 1
        fb_hits += n_fb

    # --- 2. wa.me out of sameAs, inside JSON-LD only -------------------------
    if path.suffix == ".html" and WA in text:
        def strip_wa(m):
            global wa_hits
            open_tag, body, close_tag = m.group(1), m.group(2), m.group(3)
            try:
                data = json.loads(body)
            except Exception:
                return m.group(0)

            def has_wa_samesas(o):
                if isinstance(o, dict):
                    s = o.get("sameAs")
                    if isinstance(s, list) and WA in s:
                        return True
                    if isinstance(s, str) and s == WA:
                        return True
                    return any(has_wa_samesas(v) for v in o.values())
                if isinstance(o, list):
                    return any(has_wa_samesas(v) for v in o)
                return False

            if not has_wa_samesas(data):
                return m.group(0)

            new_body, n = WA_ENTRY.subn("", body)
            if not n:
                return m.group(0)
            try:
                reparsed = json.loads(new_body)
            except Exception as e:
                broke.append(f"{path.name}: {e}")
                return m.group(0)
            if has_wa_samesas(reparsed):
                broke.append(f"{path.name}: wa.me survived in sameAs")
                return m.group(0)
            wa_hits += n
            return open_tag + new_body + close_tag

        before = text
        text = LD.sub(strip_wa, text)
        if text != before:
            wa_files += 1

    if text != original and APPLY:
        path.write_text(text, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  Facebook URL unified : {fb_hits} occurrence(s) in {fb_files} file(s)")
print(f"  wa.me out of sameAs  : {wa_hits} entr(ies) in {wa_files} file(s)")
if broke:
    print(f"  SKIPPED (unsafe)     : {len(broke)}")
    for b in broke[:8]:
        print(f"    {b}")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
