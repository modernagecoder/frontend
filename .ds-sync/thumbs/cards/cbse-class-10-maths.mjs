// CBSE Class 10 Maths — a combined-solid question, which is as Class 10 as
// it gets, marked the way the board marks it.
export default {
  bg: 'linear-gradient(120deg,#06263B 0%,#031622 54%,#01080D 100%)',
  a1: '#A9D9FF', a2: '#42A5F5', a3: '#1D7AC4', a4: '#0D4B80',
  glow: '66,165,245',
  sub: '#87A6B8',

  badge: 'CLASS 10 BOARDS',
  kicker: 'CBSE CLASS 10 MATHS',
  title: 'CBSE Class 10<br><span class="ac">Board Prep</span>',
  tagline: 'Full syllabus, and the marking scheme',
  meta: 'ALL CHAPTERS<i>·</i>PYQs<i>·</i>STEP MARKING',
  titleMax: 372,
  titleSize: 45,

  head: `
.qs{position:absolute;left:436px;top:98px;width:330px;z-index:2;border-radius:10px;overflow:hidden;
  background:#04141F;border:1px solid rgba(66,165,245,.36);box-shadow:0 20px 44px rgba(0,0,0,.64)}
.qs .h{display:flex;align-items:center;padding:7px 12px;background:#082438;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:9.5px;
  font-weight:700;letter-spacing:.06em;color:#6E9BB8}
.qs .h b{margin-left:auto;color:#A9D9FF}
.qs .q{padding:9px 12px 0;font-size:11px;line-height:1.45;color:#DCE9F4}
.steps{padding:8px 12px 11px}
.steps .s{display:flex;align-items:center;gap:9px;padding:2.5px 0;font-family:'JetBrains Mono',monospace;font-size:10px;color:#B8CFE0}
.steps .s b{color:#8FD8A0;font-weight:700}
.steps .s i{margin-left:auto;font-style:normal;color:#6E9BB8;font-size:9px}`,

  motif: `
<div class="qs">
  <div class="h">Q.26 &#183; SURFACE AREAS &amp; VOLUMES<b>3 MARKS</b></div>
  <div class="q">A toy is a cone of radius 3.5 cm on a hemisphere of the same radius. Cone height 12 cm. Find its volume.</div>
  <div class="steps">
    <div class="s"><b>&#10003;</b> V = &#8531;&#960;r&#178;h + &#8532;&#960;r&#179;<i>formula</i></div>
    <div class="s"><b>&#10003;</b> = &#8531;&#960;(3.5)&#178;(12) + &#8532;&#960;(3.5)&#179;<i>substitution</i></div>
    <div class="s"><b>&#10003;</b> = 154 + 89.83 = <span style="color:#DCE9F4;font-weight:700">243.83 cm&#179;</span><i>answer</i></div>
  </div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- the solid itself -->
  <g transform="translate(600,286)">
    <path d="M-34 0 A 34 34 0 0 0 34 0 Z" fill="#12557A" stroke="#A9D9FF" stroke-width="1.8"/>
    <ellipse cx="0" cy="0" rx="34" ry="11" fill="#1B6E9B" stroke="#A9D9FF" stroke-width="1.6"/>
    <path d="M-34 0 L0 -72 L34 0" fill="#1B6E9B" stroke="#A9D9FF" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M-34 0 A 34 11 0 0 0 34 0" fill="none" stroke="#A9D9FF" stroke-width="1.6" stroke-dasharray="3 3" opacity=".7"/>
    <g stroke="#6E9BB8" stroke-width="1.2">
      <path d="M0 -72 V0"/><path d="M0 0 H34"/>
    </g>
    <text x="8" y="-38" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#8FB8D0">12</text>
    <text x="16" y="-6" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#8FB8D0">3.5</text>
  </g>
</svg>`,
};
