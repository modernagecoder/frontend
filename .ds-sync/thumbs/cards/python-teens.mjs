// Python Programming (teens) — a real automation script and what it did.
export default {
  bg: 'linear-gradient(120deg,#16283C 0%,#0C1826 54%,#040910 100%)',
  a1: '#BBDAF2', a2: '#6BA9D8', a3: '#3D7CB0', a4: '#245478',
  glow: '107,169,216',
  sub: '#93A8BC',

  badge: 'TEENS 13-18',
  kicker: 'PYTHON PROGRAMMING',
  title: 'Python<br><span class="ac">Programming</span>',
  tagline: 'The language behind Instagram and Spotify',
  meta: 'REAL PROJECTS<i>·</i>GAMES<i>·</i>AUTOMATION',
  titleMax: 372,
  titleSize: 52,

  head: `
.ide{position:absolute;left:436px;top:104px;width:322px;z-index:2;border-radius:12px;overflow:hidden;
  background:#0B1420;border:1px solid rgba(107,169,216,.36);
  box-shadow:0 24px 54px rgba(0,0,0,.64),0 0 34px rgba(107,169,216,.18)}
.ide .bar{display:flex;align-items:center;gap:7px;padding:8px 12px;background:#122032;border-bottom:1px solid rgba(255,255,255,.06)}
.ide .bar b{width:9px;height:9px;border-radius:50%}
.ide .bar span{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:10px;color:#6C8299}
.ide .src{padding:10px 0 11px;display:flex}
.ide .ln{flex:0 0 28px;text-align:right;padding-right:10px;font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1.75;color:#3E556B}
.ide .co{font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1.75;white-space:nowrap;font-weight:500}
.kw{color:#FF9BA6}.fn{color:#FFD43B}.nm{color:#E4EEF7}.st{color:#A5E8A0}.op{color:#6BA9D8}
.run{display:flex;align-items:center;gap:9px;padding:9px 13px;background:#08111B;border-top:1px solid rgba(255,255,255,.07);
  font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;color:#A5E8A0}
.run b{color:#4C6478;font-weight:700}`,

  motif: `
<div class="ide">
  <div class="bar"><b style="background:#E06C5B"></b><b style="background:#E0B65B"></b><b style="background:#6FBF73"></b><span>tidy_photos.py</span></div>
  <div class="src">
    <div class="ln">1<br>2<br>3<br>4<br>5</div>
    <div class="co">
      <div><span class="kw">import</span><span class="nm"> os</span></div>
      <div>&nbsp;</div>
      <div><span class="kw">for</span><span class="nm"> f </span><span class="kw">in</span><span class="nm"> os.</span><span class="fn">listdir</span><span class="nm">(</span><span class="st">"photos"</span><span class="nm">):</span></div>
      <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kw">if</span><span class="nm"> f.</span><span class="fn">endswith</span><span class="nm">(</span><span class="st">".jpg"</span><span class="nm">):</span></div>
      <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.</span><span class="fn">rename</span><span class="nm">(f, </span><span class="st">"trip_"</span><span class="op"> + </span><span class="nm">f)</span></div>
    </div>
  </div>
  <div class="run"><b>&#9656;</b> renamed 128 photos in 0.4s</div>
</div>`,
};
