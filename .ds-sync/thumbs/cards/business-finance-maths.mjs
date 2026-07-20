// Business & Finance Math — compounding pulling away from simple interest,
// which is the whole subject in one picture.
export default {
  bg: 'linear-gradient(120deg,#052A12 0%,#03190B 54%,#010804 100%)',
  a1: '#9FE8AC', a2: '#2E7D32', a3: '#1E5E22', a4: '#0F3D14',
  glow: '46,125,50',
  sub: '#86A88C',

  badge: 'PROFESSIONAL',
  kicker: 'BUSINESS & FINANCE MATH',
  title: 'Business &<br><span class="ac">Finance Math</span>',
  tagline: 'Interest, EMIs and what money costs',
  meta: 'COMPOUNDING<i>·</i>EMI<i>·</i>NPV<i>·</i>RATIOS',
  titleMax: 372,
  titleSize: 47,

  head: `
.fm{position:absolute;left:452px;top:102px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:22px;font-weight:800;color:#EAF7EC}
.fm i{font-style:italic;color:#9FE8AC}
.key{position:absolute;left:452px;top:330px;z-index:3;display:flex;gap:9px}
.key span{border-radius:7px;border:1px solid rgba(46,125,50,.55);background:rgba(46,125,50,.14);
  padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#9FE8AC}
.key b{color:#DCF2DE}`,

  motif: `
<div class="fm">A = P(1 + <i>r</i>)<sup>n</sup></div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="rgba(159,232,172,.08)" stroke-width="1">
    <path d="M470 200 H768"/><path d="M470 250 H768"/>
  </g>
  <path d="M470 300 H768" stroke="rgba(159,232,172,.4)" stroke-width="1.8"/>
  <path d="M492 148 V300" stroke="rgba(159,232,172,.4)" stroke-width="1.8"/>

  <!-- simple interest: straight -->
  <path d="M492 288 L748 216" stroke="#3F6B45" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="6 5"/>
  <text x="700" y="238" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#6E9C74">simple</text>

  <!-- compound: curves away -->
  <path d="M492 288 C 600 280 680 240 748 156" fill="none" stroke="#9FE8AC" stroke-width="3" stroke-linecap="round"/>
  <text x="690" y="150" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#9FE8AC">compound</text>

  <!-- the gap -->
  <g stroke="#2E7D32" stroke-width="2">
    <path d="M748 156 V216"/>
    <path d="M742 156 H754"/><path d="M742 216 H754"/>
  </g>
  <text x="762" y="190" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#9FE8AC" text-anchor="end">gap</text>

  <g font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#6E9C74">
    <text x="492" y="318" text-anchor="middle">yr 0</text>
    <text x="748" y="318" text-anchor="middle">yr 20</text>
  </g>
</svg>

<div class="key">
  <span>SAME RATE <b>8%</b></span>
  <span>TIME DOES THE WORK</span>
</div>`,
};
