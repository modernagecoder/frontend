#!/usr/bin/env python3
"""Add bidirectional hub-and-spoke links: each city page links UP to its state page.
Edits (additive, idempotent) the BEGIN_RELATED_PAGES visible breadcrumb + related list,
and the JSON-LD BreadcrumbList. Skips cities with no state page."""
import re, glob, os

CITY_STATE = {
    "agra": "uttar-pradesh", "ahmedabad": "gujarat", "amritsar": "punjab",
    "aurangabad": "maharashtra", "bengaluru": "karnataka", "bhopal": "madhya-pradesh",
    "bhubaneswar": "odisha", "chennai": "tamil-nadu", "coimbatore": "tamil-nadu",
    "dehradun": "uttarakhand", "faridabad": "haryana", "goa": "goa",
    "guwahati": "assam", "hubli": "karnataka", "hyderabad": "telangana",
    "indore": "madhya-pradesh", "jabalpur": "madhya-pradesh", "jaipur": "rajasthan",
    "jodhpur": "rajasthan", "kanpur": "uttar-pradesh", "kochi": "kerala",
    "kolkata": "west-bengal", "kozhikode": "kerala", "lucknow": "uttar-pradesh",
    "madurai": "tamil-nadu", "mangalore": "karnataka", "meerut": "uttar-pradesh",
    "mumbai": "maharashtra", "mysore": "karnataka", "nagpur": "maharashtra",
    "nashik": "maharashtra", "patna": "bihar", "pune": "maharashtra",
    "raipur": "chhattisgarh", "rajkot": "gujarat", "ranchi": "jharkhand",
    "shimla": "himachal-pradesh", "surat": "gujarat", "thiruvananthapuram": "kerala",
    "trichy": "tamil-nadu", "udaipur": "rajasthan", "vadodara": "gujarat",
    "varanasi": "uttar-pradesh", "visakhapatnam": "andhra-pradesh",
}
STATE_NAME = {
    "uttar-pradesh": "Uttar Pradesh", "gujarat": "Gujarat", "punjab": "Punjab",
    "maharashtra": "Maharashtra", "karnataka": "Karnataka", "madhya-pradesh": "Madhya Pradesh",
    "odisha": "Odisha", "tamil-nadu": "Tamil Nadu", "uttarakhand": "Uttarakhand",
    "haryana": "Haryana", "goa": "Goa", "assam": "Assam", "telangana": "Telangana",
    "rajasthan": "Rajasthan", "kerala": "Kerala", "west-bengal": "West Bengal",
    "bihar": "Bihar", "chhattisgarh": "Chhattisgarh", "jharkhand": "Jharkhand",
    "himachal-pradesh": "Himachal Pradesh", "andhra-pradesh": "Andhra Pradesh",
}
BASE = "src/pages"
changed = []
skipped = []

for slug, state in sorted(CITY_STATE.items()):
    f = f"{BASE}/best-coding-class-in-{slug}.html"
    if not os.path.exists(f):
        skipped.append(f"{slug} (file missing)"); continue
    sname = STATE_NAME[state]
    h = open(f, encoding="utf-8").read()
    orig = h
    rel_m = re.search(r"<!-- BEGIN_RELATED_PAGES -->.*?<!-- END_RELATED_PAGES -->", h, re.S)
    if not rel_m:
        skipped.append(f"{slug} (no related block)"); continue
    rel = rel_m.group(0)
    flags = []

    # (1)+(2) only touch the related block, and only if state link not already there
    if f"/coding-classes-in-{state}" not in rel:
        new_rel = rel
        # visible breadcrumb: append state link after the India anchor, before </nav>
        bc = re.search(
            r'(<a href="/coding-classes-in-india"(?P<style>[^>]*)>Coding Classes in India</a>)(\s*</nav>)',
            new_rel)
        if bc:
            style = bc.group("style")
            ins = (bc.group(1)
                   + f'\n      <span style="color:#475569;margin:0 6px">/</span>'
                   + f'\n      <a href="/coding-classes-in-{state}"{style}>Coding Classes in {sname}</a>'
                   + bc.group(3))
            new_rel = new_rel[:bc.start()] + ins + new_rel[bc.end():]
            flags.append("bc")
        # related list: state link as first <li>
        ul = re.search(r'(<ul [^>]*>)', new_rel)
        if ul:
            li = f'\n      <li><a href="/coding-classes-in-{state}">Coding Classes in {sname}</a></li>'
            new_rel = new_rel[:ul.end()] + li + new_rel[ul.end():]
            flags.append("rel")
        h = h.replace(rel, new_rel, 1)

    # (3) JSON-LD BreadcrumbList: insert state at pos 3, bump city to pos 4
    bl = re.search(r'"@type": "BreadcrumbList".*?\]', h, re.S)
    if bl and f"/coding-classes-in-{state}" not in bl.group(0):
        ld = re.search(
            r'\{ "@type": "ListItem", "position": 3, "name": "(?P<cn>[^"]*)", '
            r'"item": "(?P<cu>https://learn\.modernagecoders\.com/best-coding-class-in-[^"]*)" \}'
            r'(?P<tail>\s*\])', h)
        if ld:
            repl = (
                f'{{ "@type": "ListItem", "position": 3, "name": "Coding Classes in {sname}", '
                f'"item": "https://learn.modernagecoders.com/coding-classes-in-{state}" }},\n'
                f'            {{ "@type": "ListItem", "position": 4, "name": "{ld.group("cn")}", '
                f'"item": "{ld.group("cu")}" }}{ld.group("tail")}')
            h = h[:ld.start()] + repl + h[ld.end():]
            flags.append("ld")

    if h != orig:
        open(f, "w", encoding="utf-8").write(h)
        changed.append(f"{slug}->{state} [{','.join(flags)}]")
    else:
        skipped.append(f"{slug} (already linked)")

print(f"CHANGED {len(changed)}:")
for c in changed: print("  ", c)
print(f"SKIPPED {len(skipped)}:")
for s in skipped: print("  ", s)
