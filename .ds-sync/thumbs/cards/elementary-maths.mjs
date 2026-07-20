// Elementary Math Complete — place value, made physical.
export default {
  bg: 'linear-gradient(120deg,#06263B 0%,#031622 54%,#01080D 100%)',
  a1: '#B0E4FB', a2: '#4FC3F7', a3: '#1E93C9', a4: '#0C5C82',
  glow: '79,195,247',
  sub: '#87A6B8',

  badge: 'CLASS 1-5',
  kicker: 'ELEMENTARY MATHS',
  title: 'Elementary<br><span class="ac">Math Complete</span>',
  tagline: 'Place value, tables and word problems',
  meta: 'PLACE VALUE<i>·</i>TABLES<i>·</i>FRACTIONS<i>·</i>WORD SUMS',
  titleMax: 372,
  titleSize: 46,

  head: `
.num{position:absolute;left:452px;top:104px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:44px;font-weight:800;color:#EAF7FE;letter-spacing:.02em}
.num span{color:#4FC3F7}
.lg{position:absolute;top:322px;z-index:3;font-family:'JetBrains Mono',monospace;font-size:9.5px;
  font-weight:700;letter-spacing:.1em;color:#6E93A8;text-align:center}
.l1{left:452px;width:96px}.l2{left:576px;width:96px}.l3{left:700px;width:60px}`,

  motif: `
<div class="num">3<span>4</span>6</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- 3 hundreds: 10x10 flats -->
  <g>
    <g fill="#12557A" stroke="#4FC3F7" stroke-width="1.4">
      <rect x="452" y="180" width="52" height="52" rx="3"/>
      <rect x="464" y="192" width="52" height="52" rx="3"/>
      <rect x="476" y="204" width="52" height="52" rx="3"/>
    </g>
    <g stroke="rgba(176,228,251,.35)" stroke-width=".8">
      <path d="M476 214 H528 M476 224 H528 M476 234 H528 M476 244 H528"/>
      <path d="M486 204 V256 M496 204 V256 M506 204 V256 M516 204 V256"/>
    </g>
  </g>

  <!-- 4 tens: rods -->
  <g fill="#12557A" stroke="#4FC3F7" stroke-width="1.4">
    <rect x="576" y="196" width="13" height="60" rx="3"/>
    <rect x="594" y="196" width="13" height="60" rx="3"/>
    <rect x="612" y="196" width="13" height="60" rx="3"/>
    <rect x="630" y="196" width="13" height="60" rx="3"/>
  </g>
  <g stroke="rgba(176,228,251,.3)" stroke-width=".8">
    <path d="M576 208 H643 M576 220 H643 M576 232 H643 M576 244 H643"/>
  </g>

  <!-- 6 ones -->
  <g fill="#1B6E9B" stroke="#B0E4FB" stroke-width="1.4">
    <rect x="700" y="196" width="13" height="13" rx="3"/><rect x="718" y="196" width="13" height="13" rx="3"/>
    <rect x="736" y="196" width="13" height="13" rx="3"/><rect x="700" y="214" width="13" height="13" rx="3"/>
    <rect x="718" y="214" width="13" height="13" rx="3"/><rect x="736" y="214" width="13" height="13" rx="3"/>
  </g>
</svg>

<div class="lg l1">3 HUNDREDS</div>
<div class="lg l2">4 TENS</div>
<div class="lg l3">6 ONES</div>`,
};
