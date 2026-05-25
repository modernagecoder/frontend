#!/usr/bin/env python3
"""Add the 'Popular Courses' promo grid (8 course links) to the 10 Tier-1 state
pages, matching the Tier-2 quality bar. Injects an isolated <style> before </head>
and a <section> before the CITIES block. Per-page prefix + accent colors, idempotent."""
import re, os

STATES = {
    "karnataka": "Karnataka", "maharashtra": "Maharashtra", "tamil-nadu": "Tamil Nadu",
    "uttar-pradesh": "Uttar Pradesh", "kerala": "Kerala", "gujarat": "Gujarat",
    "rajasthan": "Rajasthan", "telangana": "Telangana", "west-bengal": "West Bengal",
    "madhya-pradesh": "Madhya Pradesh",
}
BASE = "src/pages"
CITIES_ANCHOR = "<!-- ===================== CITIES (HUB) ===================== -->"

def hex_rgba(hx, a):
    hx = hx.lstrip("#")
    r, g, b = int(hx[0:2], 16), int(hx[2:4], 16), int(hx[4:6], 16)
    return f"rgba({r},{g},{b},{a})"

PROMO_LINKS = [
    ("/python-and-ai-classes-for-kids-teens", "Python &amp; AI", "For kids &amp; teens — code + intelligence"),
    ("/ai-ml-course-for-teens", "AI &amp; ML for Teens", "Build real machine-learning projects"),
    ("/java-programming-for-kids-teens", "Java Programming", "Strong OOP foundations for teens"),
    ("/courses/coding/teens", "Web Development", "HTML, CSS, JavaScript &amp; live sites"),
    ("/courses/coding/kids", "Scratch for Kids", "Games &amp; animation, ages 6&ndash;10"),
    ("/courses/coding/college", "DSA &amp; Full-Stack", "Placement-ready for college students"),
    ("/coding-classes-for-girls", "Coding for Girls", "Supportive, confidence-building batches"),
    ("/summer-coding-camp", "Summer Coding Camp", "Fast, fun project sprints"),
]

changed, skipped = [], []
for slug, sname in STATES.items():
    f = f"{BASE}/coding-classes-in-{slug}.html"
    if not os.path.exists(f):
        skipped.append(f"{slug} (missing)"); continue
    h = open(f, encoding="utf-8").read()
    p = re.search(r'([a-z]{2})-section', h).group(1)
    if f"{p}-promo" in h:
        skipped.append(f"{slug} (already has promo)"); continue
    accents = re.findall(rf'--{p}-[a-z]+: (#[0-9a-fA-F]{{6}})', h)
    hover = accents[1] if len(accents) > 1 else accents[0]
    hbg = hex_rgba(hover, "0.06")

    css = f"""    <!-- Popular Courses promo grid (parity with Tier-2 pages) -->
    <style>
        .{p}-promo {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }}
        .{p}-promo a {{ display: block; text-decoration: none; background: var(--{p}-card); border: 1px solid var(--{p}-line); border-radius: 14px; padding: 18px 16px; transition: transform .2s ease, border-color .2s ease, background .2s ease; }}
        .{p}-promo a:hover {{ transform: translateY(-4px); border-color: {hover}; background: {hbg}; }}
        .{p}-promo .{p}-pt {{ font-family: 'Syne', sans-serif; color: #fff; font-weight: 700; font-size: 1rem; margin: 0 0 4px; }}
        .{p}-promo .{p}-pd {{ color: var(--{p}-muted); font-size: .82rem; line-height: 1.4; }}
        @media (max-width: 920px) {{ .{p}-promo {{ grid-template-columns: repeat(2, 1fr); }} }}
        @media (max-width: 560px) {{ .{p}-promo {{ grid-template-columns: 1fr; }} }}
    </style>
</head>"""
    if "</head>" not in h:
        skipped.append(f"{slug} (no </head>)"); continue
    h = h.replace("</head>", css, 1)

    links = "\n".join(
        f'                    <a href="{url}"><div class="{p}-pt">{t}</div><div class="{p}-pd">{d}</div></a>'
        for url, t, d in PROMO_LINKS)
    section = f"""        <!-- ===================== POPULAR COURSES PROMO ===================== -->
        <section class="section {p}-section">
            <p class="{p}-kicker">Most Requested in {sname}</p>
            <h2 class="{p}-h2">Popular Coding Courses for {sname} Students</h2>
            <p class="{p}-sub">Hand-picked programmes parents and students in {sname} ask for most &mdash; explore any of them or book a free demo to find the right fit.</p>
            <div class="{p}-wrap">
                <div class="{p}-promo">
{links}
                </div>
            </div>
        </section>

        {CITIES_ANCHOR}"""
    if CITIES_ANCHOR not in h:
        skipped.append(f"{slug} (no CITIES anchor)"); continue
    h = h.replace(CITIES_ANCHOR, section, 1)

    open(f, "w", encoding="utf-8").write(h)
    changed.append(f"{slug} ({p}) hover={hover}")

print(f"CHANGED {len(changed)}:")
for c in changed: print("  ", c)
print(f"SKIPPED {len(skipped)}:")
for s in skipped: print("  ", s)
