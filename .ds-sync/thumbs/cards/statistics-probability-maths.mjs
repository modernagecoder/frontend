// Statistics & Probability — a normal curve with the tail shaded, which is
// what a p-value literally is.
export default {
  bg: 'linear-gradient(120deg,#042630 0%,#02161C 54%,#00080B 100%)',
  a1: '#8FDDEA', a2: '#0097A7', a3: '#03778A', a4: '#024C5A',
  glow: '0,151,167',
  sub: '#84A3AD',

  badge: 'CLASS 11 - COLLEGE',
  kicker: 'STATISTICS & PROBABILITY',
  title: 'Statistics &<br><span class="ac">Probability</span>',
  tagline: 'What the number actually lets you claim',
  meta: 'DISTRIBUTIONS<i>·</i>HYPOTHESIS TESTS<i>·</i>INFERENCE',
  titleMax: 372,
  titleSize: 47,

  head: `
.hyp{position:absolute;left:452px;top:104px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:11px;font-weight:700;letter-spacing:.04em;color:#7FB3BE;line-height:1.7}
.hyp b{color:#E6F7FA}
.res{position:absolute;left:452px;top:330px;z-index:3;display:flex;gap:9px}
.res span{border-radius:7px;border:1px solid rgba(0,151,167,.5);background:rgba(0,151,167,.13);
  padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#8FDDEA}
.res b{color:#5EE9A0}`,

  motif: `
<div class="hyp">H&#8320;: <b>&#956; = 50</b> &nbsp;&#183;&nbsp; H&#8321;: <b>&#956; &gt; 50</b></div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs>
    <linearGradient id="tail" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8FDDEA" stop-opacity=".6"/><stop offset="1" stop-color="#8FDDEA" stop-opacity=".12"/>
    </linearGradient>
  </defs>

  <!-- baseline -->
  <path d="M452 296 H772" stroke="rgba(143,221,234,.4)" stroke-width="1.8"/>

  <!-- the bell, filled -->
  <path d="M462 296 C 528 296 540 156 612 156 C 684 156 696 296 762 296 Z" fill="#0097A7" opacity=".18"/>
  <!-- the rejection tail -->
  <path d="M700 296 C 724 296 740 262 762 296 Z" fill="url(#tail)"/>
  <path d="M700 250 L700 296" stroke="#8FDDEA" stroke-width="2" stroke-dasharray="4 4"/>
  <!-- outline -->
  <path d="M462 296 C 528 296 540 156 612 156 C 684 156 696 296 762 296" fill="none" stroke="#8FDDEA" stroke-width="2.8" stroke-linecap="round"/>

  <!-- mean -->
  <path d="M612 156 V296" stroke="rgba(143,221,234,.35)" stroke-width="1.6"/>
  <g font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#5E8F99" text-anchor="middle">
    <text x="612" y="316">&#956;</text>
    <text x="700" y="316">1.96&#963;</text>
  </g>
  <text x="736" y="242" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#8FDDEA">5%</text>
</svg>

<div class="res">
  <span>p = <b>0.03</b></span>
  <span>REJECT H&#8320;</span>
</div>`,
};
