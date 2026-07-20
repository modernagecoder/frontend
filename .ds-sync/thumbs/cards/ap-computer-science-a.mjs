// AP Computer Science A — a free-response answer against the rubric it is
// actually scored with.
export default {
  bg: 'linear-gradient(120deg,#2B2408 0%,#181404 54%,#070601 100%)',
  a1: '#FBE38A', a2: '#EAB308', a3: '#B98A05', a4: '#755603',
  glow: '234,179,8',
  sub: '#B0A681',

  badge: 'AP EXAM',
  kicker: 'AP COMPUTER SCIENCE A',
  title: 'AP Computer<br><span class="ac">Science A</span>',
  tagline: 'Java from scratch to free-response mastery',
  meta: 'ALL 4 UNITS<i>·</i>FRQ TECHNIQUE<i>·</i>DIGITAL MOCKS',
  titleMax: 372,
  titleSize: 48,

  head: `
.frq{position:absolute;left:436px;top:96px;width:328px;z-index:2;border-radius:11px;overflow:hidden;
  background:#0E0B03;border:1px solid rgba(234,179,8,.38);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(234,179,8,.16)}
.frq .hd{display:flex;align-items:center;padding:8px 12px;background:#1B1505;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:9.5px;
  font-weight:700;letter-spacing:.08em;color:#A08D4E}
.frq .hd b{margin-left:auto;color:#FBE38A}
.frq .co{padding:10px 13px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;white-space:nowrap;
  border-bottom:1px solid rgba(255,255,255,.06)}
.kw{color:#FF9BC4}.ty{color:#8FD4FF}.nm{color:#EDE6D2}.no{color:#FBE38A}
.rub{padding:8px 13px 10px}
.rub .r{display:flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:9.5px;
  color:#9A8B5E;padding:2px 0}
.rub .r b{color:#8FD8A0}
.rub .tot{display:flex;align-items:center;margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,.08);
  font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;color:#FBE38A}
.rub .tot span{margin-left:auto;color:#8FD8A0}`,

  motif: `
<div class="frq">
  <div class="hd">FRQ &#183; ARRAY METHODS <b>9 PTS</b></div>
  <div class="co">
    <div><span class="kw">public</span><span class="ty"> int</span><span class="nm"> countAbove(</span><span class="ty">int</span><span class="nm">[] a, </span><span class="ty">int</span><span class="nm"> n) {</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="ty">int</span><span class="nm"> c = </span><span class="no">0</span><span class="nm">;</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="kw">for</span><span class="nm"> (</span><span class="ty">int</span><span class="nm"> v : a) </span><span class="kw">if</span><span class="nm"> (v &gt; n) c++;</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="kw">return</span><span class="nm"> c;</span></div>
    <div><span class="nm">}</span></div>
  </div>
  <div class="rub">
    <div class="r"><b>&#10003;</b> traverses every element</div>
    <div class="r"><b>&#10003;</b> correct comparison</div>
    <div class="r"><b>&#10003;</b> returns the count</div>
    <div class="tot">SCORE <span>9/9</span></div>
  </div>
</div>`,
};
