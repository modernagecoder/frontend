// A-Level Maths — mechanics on an inclined plane, the part of A-Level that
// nothing else in the catalogue covers.
export default {
  bg: 'linear-gradient(120deg,#042722 0%,#021714 54%,#000807 100%)',
  a1: '#8FE3D4', a2: '#00897B', a3: '#046E62', a4: '#02463E',
  glow: '0,137,123',
  sub: '#84A59E',

  badge: 'A-LEVEL',
  kicker: 'A-LEVEL MATHEMATICS',
  title: 'A-Level<br><span class="ac">Mathematics</span>',
  tagline: 'Pure, mechanics and statistics in full',
  meta: 'PURE<i>·</i>MECHANICS<i>·</i>STATISTICS<i>·</i>PAST PAPERS',
  titleMax: 372,
  titleSize: 52,

  head: `
.res{position:absolute;left:452px;top:330px;z-index:3;display:flex;align-items:center;gap:9px;
  font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;letter-spacing:.04em;color:#8FE3D4}
.res span{border-radius:7px;border:1px solid rgba(0,137,123,.55);background:rgba(0,137,123,.14);padding:5px 11px}
.res b{color:#DFF6F1}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- the slope -->
  <path d="M462 292 L748 292 L748 138 Z" fill="#063029" stroke="#00897B" stroke-width="2.2" stroke-linejoin="round"/>
  <!-- angle marker -->
  <path d="M500 292 A 38 38 0 0 0 496 272" fill="none" stroke="#8FE3D4" stroke-width="1.8"/>
  <text x="510" y="284" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#8FE3D4">30&#176;</text>

  <!-- block on the slope -->
  <g transform="rotate(-28.3 620 210)">
    <rect x="598" y="188" width="44" height="30" rx="4" fill="#0C534A" stroke="#8FE3D4" stroke-width="2"/>
  </g>

  <!-- forces -->
  <g stroke-width="2.6" stroke-linecap="round" fill="none">
    <!-- weight -->
    <path d="M620 210 L620 276" stroke="#8FE3D4"/>
    <path d="M620 276 L614 266 M620 276 L626 266" stroke="#8FE3D4"/>
    <!-- normal reaction, perpendicular to slope -->
    <path d="M620 210 L588 154" stroke="#4FBFAE"/>
    <path d="M588 154 L590 166 M588 154 L598 158" stroke="#4FBFAE"/>
    <!-- friction, up the slope -->
    <path d="M620 210 L672 182" stroke="#4FBFAE"/>
    <path d="M672 182 L661 182 M672 182 L666 191" stroke="#4FBFAE"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#7FC8BB">
    <text x="628" y="270">mg</text>
    <text x="556" y="150">R</text>
    <text x="678" y="176">F</text>
  </g>
</svg>

<div class="res"><span>ALONG SLOPE: <b>mg sin&#952; &#8722; F = ma</b></span></div>`,
};
