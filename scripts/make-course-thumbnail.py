#!/usr/bin/env python3
"""Render an on-brand course thumbnail (800x450) using the MAC social kit look:
warm ruled notebook paper, ink borders + hard offset shadow, real logo, coral
highlighter swipe, mono chips. No emoji, no em dashes, no gradients/glow.
"""
import sys, asyncio
from playwright.async_api import async_playwright

LOGO = '''<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="46" height="46">
  <rect width="512" height="512" rx="96" fill="#007bff"/>
  <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round">
    <path d="M116 85 C 75 85, 70 120, 70 145 V 225 C 70 250, 50 256, 40 256 C 50 256, 70 262, 70 287 V 367 C 70 392, 75 427, 116 427" stroke-width="12"/>
    <path d="M396 85 C 437 85, 442 120, 442 145 V 225 C 442 250, 462 256, 472 256 C 462 256, 442 262, 442 287 V 367 C 442 392, 437 427, 396 427" stroke-width="12"/>
    <line x1="182" y1="190" x2="182" y2="300" stroke-width="10"/>
    <line x1="330" y1="190" x2="330" y2="300" stroke-width="10"/>
    <line x1="182" y1="190" x2="262" y2="256" stroke-width="10"/>
    <line x1="330" y1="190" x2="250" y2="256" stroke-width="10"/>
  </g>
</svg>'''


def html(eyebrow, line1, line2, highlight_word, chips, badge):
    chip_html = "".join(f'<span class="chip">{c}</span>' for c in chips)
    return f"""<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Caveat:wght@600&family=Inter:wght@500;700&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
<style>
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{ width:800px; height:450px; overflow:hidden;
    background:#FBF7EC;
    background-image: repeating-linear-gradient(to bottom, transparent 0 39px, rgba(32,30,36,.07) 39px 40px);
    font-family:Inter,system-ui,sans-serif; }}
  .frame {{ position:absolute; inset:22px; background:#FFFDF6;
    border:3.5px solid #201E24; border-radius:24px; box-shadow:9px 10px 0 #201E24;
    padding:26px 32px; display:flex; flex-direction:column; }}
  .top {{ display:flex; align-items:center; justify-content:space-between; }}
  .brand {{ display:flex; align-items:center; gap:11px; }}
  .brand svg {{ border-radius:11px; border:2px solid #201E24; display:block; }}
  .brand b {{ font:700 17px Inter,sans-serif; color:#201E24; letter-spacing:-.2px; }}
  .badge {{ font:700 14px 'JetBrains Mono',monospace; color:#FFFDF6; background:#0E5841;
    border:2.5px solid #201E24; border-radius:999px; padding:7px 14px; box-shadow:3px 4px 0 #201E24; }}
  .mid {{ flex:1; display:flex; flex-direction:column; justify-content:center; margin-top:-6px; }}
  .eyebrow {{ font:600 26px Caveat,cursive; color:#D55B3D; transform:rotate(-1.5deg);
    margin-bottom:4px; }}
  h1 {{ font-family:'Bricolage Grotesque',Inter,sans-serif; font-weight:800; color:#201E24;
    font-size:64px; line-height:.97; letter-spacing:-2.4px; }}
  h1 .hl {{ position:relative; display:inline-block; z-index:0; }}
  h1 .hl::after {{ content:""; position:absolute; left:-5px; right:-5px; bottom:5px; height:17px;
    background:#D55B3D; opacity:.30; border-radius:3px; z-index:-1; transform:rotate(-.6deg); }}
  .foot {{ display:flex; align-items:center; justify-content:space-between; gap:10px;
    border-top:2.5px dashed rgba(32,30,36,.22); padding-top:13px; }}
  .chips {{ display:flex; gap:9px; flex-wrap:nowrap; }}
  .chip {{ font:600 13px 'JetBrains Mono',monospace; color:#201E24; background:#FBF7EC;
    border:2px solid #201E24; border-radius:8px; padding:6px 11px; white-space:nowrap; }}
  .site {{ font:700 13px 'JetBrains Mono',monospace; color:#0E5841; white-space:nowrap; }}
</style></head><body>
<div class="frame">
  <div class="top">
    <div class="brand">{LOGO}<b>Modern Age Coders</b></div>
    <span class="badge">{badge}</span>
  </div>
  <div class="mid">
    <div class="eyebrow">{eyebrow}</div>
    <h1>{line1}<br><span class="hl">{highlight_word}</span>{line2}</h1>
  </div>
  <div class="foot">
    <div class="chips">{chip_html}</div>
    <span class="site">learn.modernagecoders.com</span>
  </div>
</div></body></html>"""


async def render(out_png, **kw):
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        await pg.set_content(html(**kw), wait_until="networkidle")
        try:
            await pg.evaluate("document.fonts.ready")
        except Exception:
            pass
        await pg.wait_for_timeout(600)
        await pg.screenshot(path=out_png)
        await b.close()
    print("wrote", out_png)


if __name__ == "__main__":
    asyncio.run(render(
        sys.argv[1] if len(sys.argv) > 1 else "thumb.png",
        eyebrow="Cambridge board, syllabus 0478",
        line1="IGCSE",
        line2=" Science",
        highlight_word="Computer",
        chips=["Paper 1 + Paper 2", "Python", "Live small batches"],
        badge="0478",
    ))
