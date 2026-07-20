// GCSE Maths — a circle theorem, which is where grade 8/9 marks are won.
export default {
  bg: 'linear-gradient(120deg,#2C0A1C 0%,#190510 54%,#070106 100%)',
  a1: '#FFAFCE', a2: '#D81B60', a3: '#A80F46', a4: '#6C0929',
  glow: '216,27,96',
  sub: '#B08C9A',

  badge: 'GCSE 9-1',
  kicker: 'GCSE MATHEMATICS',
  title: 'GCSE<br><span class="ac">Mathematics</span>',
  tagline: 'Foundation to grade 9, on real mark schemes',
  meta: 'AQA<i>·</i>EDEXCEL<i>·</i>OCR<i>·</i>PAST PAPERS',
  titleMax: 372,
  titleSize: 52,

  head: `
.thm{position:absolute;left:452px;top:326px;z-index:3;display:flex;align-items:center;gap:9px;
  font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;letter-spacing:.04em;color:#FFAFCE}
.thm span{border-radius:7px;border:1px solid rgba(216,27,96,.5);background:rgba(216,27,96,.12);padding:5px 11px}
.thm b{color:#FFE0EC}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- circle -->
  <circle cx="612" cy="208" r="94" fill="none" stroke="#8A1F45" stroke-width="2.2"/>
  <circle cx="612" cy="208" r="4.5" fill="#FFAFCE"/>
  <text x="622" y="204" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#FFAFCE">O</text>

  <!-- chord endpoints A and B, and P on the major arc -->
  <!-- A at 210deg, B at 330deg, P at 90deg (top) -->
  <g>
    <circle cx="531" cy="255" r="5" fill="#FFE0EC"/>
    <circle cx="693" cy="255" r="5" fill="#FFE0EC"/>
    <circle cx="612" cy="114" r="5" fill="#FFE0EC"/>
    <text x="514" y="272" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#D98BAA">A</text>
    <text x="702" y="272" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#D98BAA">B</text>
    <text x="606" y="102" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#D98BAA">P</text>
  </g>

  <!-- radii to A and B: the angle at the centre -->
  <g stroke="#D81B60" stroke-width="2.6">
    <path d="M612 208 L531 255"/><path d="M612 208 L693 255"/>
  </g>
  <path d="M578 228 A 40 40 0 0 0 646 228" fill="none" stroke="#FFAFCE" stroke-width="2"/>
  <text x="612" y="256" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="12" font-weight="700" fill="#FFE0EC">100&#176;</text>

  <!-- lines to P: the angle at the circumference -->
  <g stroke="#8A1F45" stroke-width="2.2">
    <path d="M612 114 L531 255"/><path d="M612 114 L693 255"/>
  </g>
  <path d="M597 142 A 30 30 0 0 0 627 142" fill="none" stroke="#FFAFCE" stroke-width="2"/>
  <text x="612" y="162" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#FFAFCE">50&#176;</text>

  <!-- chord -->
  <path d="M531 255 L693 255" stroke="#8A1F45" stroke-width="1.8" stroke-dasharray="4 4"/>
</svg>

<div class="thm"><span>ANGLE AT CENTRE = <b>2&#215;</b> AT CIRCUMFERENCE</span></div>`,
};
