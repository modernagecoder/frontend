"""Phase 1.3 — remove invented per-city addresses and coordinates from LocalBusiness schema.

The site declared LocalBusiness with a per-city postalCode (136 distinct) and GeoCoordinates
for an online-only business with no premises in any of those cities, and with no streetAddress
anywhere. That is the fake-local-presence pattern Google's local spam policy targets.

Owner decision: keep LocalBusiness and represent the business the way Google documents for a
service-area business — no address, no coordinates, service areas declared via areaServed
(which every one of these pages already has). openingHours and priceRange stay: they are valid
LocalBusiness properties and are true of the live classes.

Surgical on purpose: edits the exact JSON text rather than re-serialising, so hand-formatting
and every other property survive. Each ld+json block is parsed before and after; if a block
would stop being valid JSON, or if address/geo survive on a LocalBusiness, the file is not
written.

Usage:  python scripts/fix-local-schema.py [--apply]
"""
import json
import pathlib
import re
import sys

APPLY = "--apply" in sys.argv
ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = sorted((ROOT / "src" / "pages").glob("*.html"))

LD = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)
# These objects are flat (no nested braces), so a non-greedy brace match is exact here.
ADDR = re.compile(r'\n\s*"address":\s*\{[^{}]*?\},?')
GEO = re.compile(r'\n\s*"geo":\s*\{[^{}]*?\},?')


def types_of(obj):
    t = obj.get("@type")
    if isinstance(t, list):
        return set(t)
    return {t} if t else set()


def walk(obj, found):
    """Collect every LocalBusiness node carrying address or geo."""
    if isinstance(obj, dict):
        if "LocalBusiness" in types_of(obj) and ("address" in obj or "geo" in obj):
            found.append(obj)
        for v in obj.values():
            walk(v, found)
    elif isinstance(obj, list):
        for v in obj:
            walk(v, found)


files_changed = 0
addr_removed = 0
geo_removed = 0
skipped = []

for path in PAGES:
    html = path.read_text(encoding="utf-8", errors="surrogateescape")
    new_html = html
    file_touched = False

    for m in LD.finditer(html):
        open_tag, body, close_tag = m.group(1), m.group(2), m.group(3)

        try:
            data = json.loads(body)
        except Exception:
            continue  # not our concern; leave malformed blocks alone

        targets = []
        walk(data, targets)
        if not targets:
            continue

        # Only strip when the address is the invented kind: a postcode/locality with no
        # street. If a real streetAddress ever appears, leave it for a human.
        risky = [
            t for t in targets
            if "geo" in t
            or (isinstance(t.get("address"), dict) and "streetAddress" not in t["address"])
        ]
        if not risky:
            continue

        new_body, n_addr = ADDR.subn("", body)
        new_body, n_geo = GEO.subn("", new_body)
        if n_addr == 0 and n_geo == 0:
            continue

        # Must still be valid JSON...
        try:
            reparsed = json.loads(new_body)
        except Exception as e:
            skipped.append(f"{path.name}: JSON broke after edit ({e})")
            continue

        # ...and must actually have removed them from every LocalBusiness node.
        leftovers = []
        walk(reparsed, leftovers)
        if leftovers:
            skipped.append(f"{path.name}: address/geo survived on LocalBusiness")
            continue

        new_html = new_html.replace(open_tag + body + close_tag, open_tag + new_body + close_tag)
        addr_removed += n_addr
        geo_removed += n_geo
        file_touched = True

    if file_touched:
        files_changed += 1
        if APPLY:
            path.write_text(new_html, encoding="utf-8", errors="surrogateescape")

print(f"{'APPLIED' if APPLY else 'DRY RUN'}")
print(f"  files changed     : {files_changed}")
print(f"  address blocks out: {addr_removed}")
print(f"  geo blocks out    : {geo_removed}")
if skipped:
    print(f"  SKIPPED (unsafe)  : {len(skipped)}")
    for s in skipped[:10]:
        print(f"    {s}")
if not APPLY:
    print("\n(dry run — re-run with --apply to write)")
