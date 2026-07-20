// Maths Through Coding — six lines of Python, and Pascal's triangle falling
// out of them.
export default {
  bg: 'linear-gradient(120deg,#082610 0%,#04160A 54%,#010803 100%)',
  a1: '#A6E8B0', a2: '#4CAF50', a3: '#2E8B33', a4: '#17561C',
  glow: '76,175,80',
  sub: '#88AC90',

  badge: 'CLASS 6-10',
  kicker: 'MATHS THROUGH CODING',
  title: 'Maths<br><span class="ac">Through Coding</span>',
  tagline: 'Write the rule, watch the pattern appear',
  meta: 'PYTHON<i>·</i>PATTERNS<i>·</i>NUMBER THEORY',
  titleMax: 372,
  titleSize: 48,

  head: `
.mc{position:absolute;left:424px;top:104px;width:194px;z-index:2;border-radius:10px;overflow:hidden;
  background:#03140A;border:1px solid rgba(76,175,80,.4);box-shadow:0 20px 44px rgba(0,0,0,.62)}
.mc .bar{padding:7px 11px;background:#072A12;font-family:'JetBrains Mono',monospace;font-size:9.5px;
  color:#5E9468;border-bottom:1px solid rgba(255,255,255,.06)}
.mc .co{padding:9px 11px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.75;white-space:nowrap}
.kw{color:#FF9BC4}.fn{color:#A6E8B0}.nm{color:#DDF2E0}.no{color:#FFD08A}
.tri{position:absolute;left:626px;top:120px;width:154px;z-index:3;text-align:center}
.tri .r{display:flex;justify-content:center;gap:6px;margin-bottom:6px}
.tri .r span{width:19px;height:19px;border-radius:5px;display:flex;align-items:center;justify-content:center;
  font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;color:#DDF2E0;
  background:#0A2C13;border:1px solid rgba(76,175,80,.4)}
.tri .r span.hi{background:#1B5B24;border-color:#A6E8B0;color:#EAFBEC}
.cap{position:absolute;left:424px;top:330px;z-index:3;border-radius:7px;border:1px solid rgba(76,175,80,.45);
  background:rgba(76,175,80,.11);padding:5px 11px;font-family:'JetBrains Mono',monospace;
  font-size:10px;font-weight:700;letter-spacing:.05em;color:#A6E8B0}`,

  motif: `
<div class="mc">
  <div class="bar">pascal.py</div>
  <div class="co">
    <div><span class="nm">row = [</span><span class="no">1</span><span class="nm">]</span></div>
    <div><span class="kw">for</span><span class="nm"> i </span><span class="kw">in</span><span class="nm"> </span><span class="fn">range</span><span class="nm">(</span><span class="no">6</span><span class="nm">):</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="fn">print</span><span class="nm">(row)</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;row = [</span><span class="no">1</span><span class="nm">] + [</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a+b </span><span class="kw">for</span><span class="nm"> a,b </span><span class="kw">in</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="fn">zip</span><span class="nm">(row, row[</span><span class="no">1</span><span class="nm">:])] + [</span><span class="no">1</span><span class="nm">]</span></div>
  </div>
</div>

<div class="tri">
  <div class="r"><span>1</span></div>
  <div class="r"><span>1</span><span>1</span></div>
  <div class="r"><span>1</span><span class="hi">2</span><span>1</span></div>
  <div class="r"><span>1</span><span class="hi">3</span><span class="hi">3</span><span>1</span></div>
  <div class="r"><span>1</span><span>4</span><span class="hi">6</span><span>4</span><span>1</span></div>
  <div class="r"><span>1</span><span>5</span><span>10</span><span>10</span><span>5</span><span>1</span></div>
</div>

<div class="cap">EACH NUMBER = THE TWO ABOVE IT</div>`,
};
