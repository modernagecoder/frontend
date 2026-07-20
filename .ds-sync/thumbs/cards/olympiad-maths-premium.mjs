// Olympiad Mathematics (IOQM, INMO, AMC) — a cyclic-remainder argument,
// which is the shape of a real olympiad solution.
export default {
  bg: 'linear-gradient(120deg,#2C2408 0%,#181404 54%,#070501 100%)',
  a1: '#F7DFA0', a2: '#E6B422', a3: '#B08A0C', a4: '#6E5606',
  glow: '230,180,34',
  sub: '#B3A583',

  badge: 'IOQM · INMO · AMC',
  kicker: 'OLYMPIAD MATHEMATICS',
  title: 'Olympiad<br><span class="ac">Mathematics</span>',
  tagline: 'Arguments, not answers',
  meta: 'NUMBER THEORY<i>·</i>COMBINATORICS<i>·</i>GEOMETRY',
  titleMax: 372,
  titleSize: 50,

  head: `
.qq{position:absolute;left:452px;top:104px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:21px;font-weight:800;color:#F9EFD6}
.qq b{color:#F7DFA0}
.cyc{position:absolute;left:452px;top:158px;z-index:3;display:flex;align-items:center;gap:6px}
.cyc span{width:38px;height:38px;border-radius:9px;display:flex;flex-direction:column;align-items:center;
  justify-content:center;background:#221B05;border:1.8px solid rgba(230,180,34,.5);
  font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;color:#F9EFD6}
.cyc span small{font-size:7.5px;color:#A08A46;letter-spacing:.06em;margin-top:1px}
.cyc span.hit{background:#4A3A08;border-color:#F7DFA0}
.cyc .ar{color:#A08A46;font-family:'JetBrains Mono',monospace;font-size:14px}
.arg{position:absolute;left:452px;top:242px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:11.5px;line-height:1.95;color:#C4B183}
.arg b{color:#F7DFA0}
.arg .box{display:inline-block;border-radius:6px;border:1px solid rgba(230,180,34,.5);
  background:rgba(230,180,34,.12);padding:2px 9px;color:#F9EFD6;font-weight:700}`,

  motif: `
<div class="qq">Last digit of <b>7<sup>2024</sup></b>?</div>

<div class="cyc">
  <span>7<small>7&#185;</small></span><span class="ar">&#8594;</span>
  <span>9<small>7&#178;</small></span><span class="ar">&#8594;</span>
  <span>3<small>7&#179;</small></span><span class="ar">&#8594;</span>
  <span class="hit">1<small>7&#8308;</small></span>
</div>

<div class="arg">
  <div>the last digit repeats every <b>4</b></div>
  <div>2024 = 4 &#215; 506, so 2024 &#8801; <b>0 (mod 4)</b></div>
  <div>&#8594; same as 7&#8308; &nbsp; <span class="box">last digit 1</span></div>
</div>`,
};
