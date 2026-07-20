// IGCSE Mathematics — set notation on a Venn, which is pure Cambridge 0580.
export default {
  bg: 'linear-gradient(120deg,#2E0F0F 0%,#1A0808 54%,#070202 100%)',
  a1: '#FFAFAF', a2: '#C62828', a3: '#9A1B1B', a4: '#611010',
  glow: '198,40,40',
  sub: '#B39090',

  badge: 'IGCSE 0580',
  kicker: 'CAMBRIDGE IGCSE MATHS',
  title: 'IGCSE<br><span class="ac">Mathematics</span>',
  tagline: 'Core and Extended, plus Additional Maths',
  meta: '0580 + 0606<i>·</i>NON-CALCULATOR<i>·</i>PAST PAPERS',
  titleMax: 372,
  titleSize: 52,

  head: `
.sets{position:absolute;left:452px;top:328px;z-index:3;display:flex;align-items:center;gap:9px;
  font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.04em;color:#FFAFAF}
.sets span{border-radius:7px;border:1px solid rgba(198,40,40,.5);background:rgba(198,40,40,.13);padding:5px 11px}
.sets b{color:#FFE0E0}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- universal set -->
  <rect x="466" y="112" width="300" height="192" rx="8" fill="none" stroke="#7A2020" stroke-width="2"/>
  <text x="476" y="130" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#B36A6A">&#8496;</text>

  <!-- the two sets -->
  <circle cx="580" cy="208" r="76" fill="#C62828" opacity=".16" stroke="#C62828" stroke-width="2.2"/>
  <circle cx="656" cy="208" r="76" fill="#C62828" opacity=".16" stroke="#C62828" stroke-width="2.2"/>

  <!-- the intersection, shaded -->
  <path d="M618 148 A 76 76 0 0 0 618 268 A 76 76 0 0 0 618 148 Z" fill="#FFAFAF" opacity=".38"/>

  <g font-family="'JetBrains Mono',monospace" font-size="12" font-weight="700" fill="#FFE0E0">
    <text x="516" y="212" text-anchor="middle">A</text>
    <text x="720" y="212" text-anchor="middle">B</text>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#FFE0E0" text-anchor="middle">
    <text x="540" y="240">7</text>
    <text x="618" y="240">5</text>
    <text x="696" y="240">9</text>
    <text x="486" y="292">4</text>
  </g>
  <text x="618" y="180" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#3A0A0A">A &#8745; B</text>
</svg>

<div class="sets">
  <span>n(A &#8745; B) = <b>5</b></span>
  <span>n(A &#8746; B) = <b>21</b></span>
  <span>n(&#8496;) = <b>25</b></span>
</div>`,
};
