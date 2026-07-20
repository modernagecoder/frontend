// AP Precalculus — the unit circle, which is the object the course spends
// the year making automatic.
export default {
  bg: 'linear-gradient(120deg,#042730 0%,#02161C 54%,#00080B 100%)',
  a1: '#9DE0EA', a2: '#00ACC1', a3: '#048396', a4: '#02525E',
  glow: '0,172,193',
  sub: '#84A3AA',

  badge: 'AP EXAM',
  kicker: 'AP PRECALCULUS',
  title: 'AP<br><span class="ac">Precalculus</span>',
  tagline: 'Functions and trig, made automatic',
  meta: 'ALL 4 UNITS<i>·</i>UNIT CIRCLE<i>·</i>EXAM PRACTICE',
  titleMax: 372,
  titleSize: 53,

  head: `
.ex{position:absolute;left:452px;top:330px;z-index:3;display:flex;gap:9px}
.ex span{border-radius:7px;border:1px solid rgba(0,172,193,.5);background:rgba(0,172,193,.13);
  padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#9DE0EA}
.ex b{color:#DFF6F9}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- axes -->
  <path d="M496 210 H736" stroke="rgba(157,224,234,.32)" stroke-width="1.6"/>
  <path d="M616 90 V330" stroke="rgba(157,224,234,.32)" stroke-width="1.6"/>

  <!-- the circle -->
  <circle cx="616" cy="210" r="94" fill="none" stroke="#048396" stroke-width="2.4"/>

  <!-- the 60 degree radius -->
  <path d="M616 210 L663 129" stroke="#00ACC1" stroke-width="3" stroke-linecap="round"/>
  <path d="M643 210 A 27 27 0 0 0 630 187" fill="none" stroke="#9DE0EA" stroke-width="1.8"/>
  <text x="654" y="200" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#9DE0EA">&#960;/3</text>

  <!-- the point and its coordinates -->
  <circle cx="663" cy="129" r="6.5" fill="#042730" stroke="#DFF6F9" stroke-width="2.8"/>
  <g stroke="#048396" stroke-width="1.6" stroke-dasharray="4 4">
    <path d="M663 129 V210"/><path d="M663 129 H616"/>
  </g>
  <text x="676" y="122" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#DFF6F9">(&#189;, &#8730;3/2)</text>

  <!-- the quadrant angles -->
  <g font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#5E8F99">
    <text x="722" y="226">0</text>
    <text x="608" y="106" text-anchor="end">&#960;/2</text>
    <text x="500" y="226">&#960;</text>
    <text x="624" y="326">3&#960;/2</text>
  </g>
  <g fill="#048396">
    <circle cx="710" cy="210" r="4"/><circle cx="616" cy="116" r="4"/>
    <circle cx="522" cy="210" r="4"/><circle cx="616" cy="304" r="4"/>
  </g>
</svg>

<div class="ex">
  <span>sin &#960;/3 = <b>&#8730;3/2</b></span>
  <span>cos &#960;/3 = <b>&#189;</b></span>
</div>`,
};
