// Class 11 & 12 Computer Science / Informatics Practices — one image serves
// both, so it shows the thing both are marked on: a board answer, worked.
export default {
  bg: 'linear-gradient(120deg,#04262A 0%,#021618 54%,#000809 100%)',
  a1: '#8FE8DC', a2: '#0D9488', a3: '#0A7268', a4: '#054A44',
  glow: '13,148,136',
  sub: '#84A5A1',

  badge: 'CLASS 11 & 12',
  kicker: 'CBSE & ICSE BOARDS',
  title: 'Computer Science<br><span class="ac">Class 11 & 12</span>',
  tagline: 'Full syllabus, practical file, board technique',
  meta: 'PYTHON / JAVA<i>·</i>SQL<i>·</i>PROJECT<i>·</i>BOARD PREP',
  titleMax: 372,
  titleSize: 41,

  head: `
.pap{position:absolute;left:440px;top:96px;width:322px;z-index:2;border-radius:9px;overflow:hidden;
  background:#FBFAF5;box-shadow:0 24px 52px rgba(0,0,0,.66),0 0 30px rgba(13,148,136,.16)}
.pap .hd{display:flex;align-items:center;gap:9px;padding:8px 12px;background:#EFEDE4;border-bottom:1px solid #DEDBD0}
.pap .hd .qn{font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;color:#5C6B68;letter-spacing:.06em}
.pap .hd .mk{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:#0A7268}
.pap .q{padding:9px 12px 0;font-size:11px;color:#33403E;line-height:1.45}
.pap .code{margin:8px 12px 0;border-radius:6px;background:#0B2422;padding:8px 10px;
  font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.7;white-space:nowrap}
.kw{color:#FF9BC4}.fn{color:#8FE8DC}.nm{color:#DFF3F0}.st{color:#FFD08A}
.pap .out{display:flex;align-items:center;gap:8px;padding:8px 12px 10px;
  font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#5C6B68}
.pap .out b{color:#0A7268}
.tick{position:absolute;left:672px;top:236px;z-index:3;display:flex;align-items:center;gap:5px;
  font-family:'Fraunces',Georgia,serif;font-size:19px;font-weight:800;color:#E5484D;transform:rotate(-8deg);
  text-shadow:0 2px 12px rgba(0,0,0,.6)}`,

  motif: `
<div class="pap">
  <div class="hd">
    <span class="qn">Q.14 &#183; PROGRAM</span>
    <span class="mk">4 MARKS</span>
  </div>
  <div class="q">Write a function that returns the top n scores from a list.</div>
  <div class="code">
    <div><span class="kw">def</span><span class="fn"> top</span><span class="nm">(scores, n):</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kw">return</span><span class="nm"> </span><span class="fn">sorted</span><span class="nm">(scores)[-n:]</span></div>
  </div>
  <div class="out">Output: <b>[88, 92, 97]</b></div>
</div>

<div class="tick">
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none"><path d="M4 15 L11 22 L24 6" stroke="#E5484D" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
  4/4
</div>`,
};
