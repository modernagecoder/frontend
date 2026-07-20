// High School Math Complete — a quadratic with its roots and vertex, the
// three facts every exam asks for.
export default {
  bg: 'linear-gradient(120deg,#141A38 0%,#0B0F21 54%,#04050D 100%)',
  a1: '#C0C7F0', a2: '#5C6BC0', a3: '#3C4998', a4: '#232C63',
  glow: '92,107,192',
  sub: '#98A0C4',

  badge: 'CLASS 9-12',
  kicker: 'HIGH SCHOOL MATHS',
  title: 'High School<br><span class="ac">Math Complete</span>',
  tagline: 'Algebra, trigonometry, calculus foundations',
  meta: 'QUADRATICS<i>·</i>TRIGONOMETRY<i>·</i>COORDINATE GEOMETRY',
  titleMax: 372,
  titleSize: 45,

  head: `
.fx{position:absolute;left:452px;top:104px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:27px;font-weight:800;color:#EAECFA}
.fx i{font-style:italic;color:#C0C7F0}
.facts{position:absolute;left:452px;top:330px;z-index:3;display:flex;gap:9px}
.facts span{border-radius:7px;border:1px solid rgba(92,107,192,.5);background:rgba(92,107,192,.13);
  padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#C0C7F0}
.facts b{color:#8E9AE0}`,

  motif: `
<div class="fx"><i>y</i> = <i>x</i>&#178; &#8722; 4<i>x</i> + 3</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- grid -->
  <g stroke="rgba(192,199,240,.08)" stroke-width="1">
    <path d="M460 186 H768"/><path d="M460 220 H768"/><path d="M460 286 H768"/>
    <path d="M535 146 V320"/><path d="M585 146 V320"/><path d="M635 146 V320"/><path d="M685 146 V320"/>
  </g>
  <!-- axes -->
  <path d="M460 253 H768" stroke="rgba(192,199,240,.42)" stroke-width="1.8"/>
  <path d="M485 146 V320" stroke="rgba(192,199,240,.42)" stroke-width="1.8"/>

  <!-- the curve -->
  <path d="M510 153 Q 560 300 610 287 Q 660 300 710 153"
        fill="none" stroke="#8E9AE0" stroke-width="3" stroke-linecap="round"/>

  <!-- roots -->
  <g>
    <circle cx="560" cy="253" r="6.5" fill="#141A38" stroke="#C0C7F0" stroke-width="2.6"/>
    <circle cx="660" cy="253" r="6.5" fill="#141A38" stroke="#C0C7F0" stroke-width="2.6"/>
    <text x="560" y="276" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#8E9AE0">1</text>
    <text x="660" y="276" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#8E9AE0">3</text>
  </g>
  <!-- vertex -->
  <g>
    <circle cx="610" cy="287" r="7.5" fill="#3C4998" stroke="#EAECFA" stroke-width="2.6"/>
    <text x="610" y="310" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#C0C7F0">(2, &#8722;1)</text>
  </g>
</svg>

<div class="facts">
  <span>ROOTS <b>1, 3</b></span>
  <span>VERTEX <b>(2, &#8722;1)</b></span>
  <span>MIN <b>&#8722;1</b></span>
</div>`,
};
