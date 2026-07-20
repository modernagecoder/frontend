// Python Masterclass (college) — a typed API endpoint and its response.
// Deliberately not the teens automation script.
export default {
  bg: 'linear-gradient(120deg,#06282A 0%,#03181A 54%,#010809 100%)',
  a1: '#A8EFE2', a2: '#4EC9B0', a3: '#2A9C86', a4: '#136354',
  glow: '78,201,176',
  sub: '#87A9A3',

  badge: 'COLLEGE & BEYOND',
  kicker: 'PYTHON MASTERCLASS',
  title: 'Python<br><span class="ac">Masterclass</span>',
  tagline: 'Web, data and AI in one language',
  meta: '52 WEEKS<i>·</i>APIs<i>·</i>DATA SCIENCE<i>·</i>AI',
  titleMax: 372,
  titleSize: 52,

  head: `
.py{position:absolute;left:434px;top:98px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#04161A;border:1px solid rgba(78,201,176,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(78,201,176,.16)}
.py .bar{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#08262A;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#5E8F89}
.py .bar .fw{margin-left:auto;border:1px solid rgba(78,201,176,.42);border-radius:5px;padding:1px 7px;
  font-size:8.5px;font-weight:700;letter-spacing:.1em;color:#A8EFE2}
.py .co{padding:10px 13px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;
  white-space:nowrap;border-bottom:1px solid rgba(255,255,255,.06)}
.kw{color:#FF9BC4}.fn{color:#A8EFE2}.nm{color:#DEF4F0}.ty{color:#4EC9B0}.st{color:#FFD08A}.dc{color:#4A7A74}
.py .res{padding:9px 13px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.7;color:#7FB8AE}
.py .res b{color:#A8EFE2}`,

  motif: `
<div class="py">
  <div class="bar"><span>main.py</span><span class="fw">FASTAPI</span></div>
  <div class="co">
    <div><span class="dc">@app.get(</span><span class="st">"/players/{id}"</span><span class="dc">)</span></div>
    <div><span class="kw">async def</span><span class="fn"> player</span><span class="nm">(id: </span><span class="ty">int</span><span class="nm">) -&gt; </span><span class="ty">Player</span><span class="nm">:</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;row = </span><span class="kw">await</span><span class="nm"> db.</span><span class="fn">fetch</span><span class="nm">(id)</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kw">return</span><span class="nm"> </span><span class="ty">Player</span><span class="nm">(**row)</span></div>
  </div>
  <div class="res">&#8594; <b>200</b> {"id": 12, "name": "Aarav", "level": 14}</div>
</div>`,
};
