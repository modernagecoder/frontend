// College Math Masterclass — the definite integral as the area it measures.
export default {
  bg: 'linear-gradient(120deg,#2C0A20 0%,#190513 54%,#070107 100%)',
  a1: '#FFB0D0', a2: '#EC407A', a3: '#BC2255', a4: '#761232',
  glow: '236,64,122',
  sub: '#B08C9C',

  badge: 'COLLEGE & BEYOND',
  kicker: 'COLLEGE MATHEMATICS',
  title: 'College Math<br><span class="ac">Masterclass</span>',
  tagline: 'Calculus, linear algebra, proof technique',
  meta: 'CALCULUS<i>·</i>LINEAR ALGEBRA<i>·</i>PROOF',
  titleMax: 372,
  titleSize: 47,

  head: `
.int{position:absolute;left:452px;top:100px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:31px;font-weight:800;color:#FDE7EF;display:flex;align-items:center;gap:4px}
.int .s{font-size:44px;line-height:.8;color:#EC407A}
.int i{font-style:italic}
.int .eq{color:#FFB0D0;margin-left:8px}
.rm{position:absolute;left:452px;top:330px;z-index:3;border-radius:7px;border:1px solid rgba(236,64,122,.45);
  background:rgba(236,64,122,.11);padding:5px 11px;font-family:'JetBrains Mono',monospace;
  font-size:10px;font-weight:700;letter-spacing:.05em;color:#FFB0D0}`,

  motif: `
<div class="int"><span class="s">&#8747;</span><span style="font-size:15px;line-height:1">&#8320;<sup style="font-size:11px">&#178;</sup></span> <i>x</i>&#178; d<i>x</i> <span class="eq">= 8/3</span></div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs>
    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#EC407A" stop-opacity=".45"/><stop offset="1" stop-color="#EC407A" stop-opacity=".08"/>
    </linearGradient>
  </defs>

  <!-- axes -->
  <path d="M480 300 H768" stroke="rgba(255,176,208,.4)" stroke-width="1.8"/>
  <path d="M500 160 V300" stroke="rgba(255,176,208,.4)" stroke-width="1.8"/>

  <!-- riemann rectangles -->
  <g fill="#EC407A" opacity=".2" stroke="#EC407A" stroke-width="1">
    <rect x="500" y="297" width="26" height="3"/>
    <rect x="526" y="288" width="26" height="12"/>
    <rect x="552" y="272" width="26" height="28"/>
    <rect x="578" y="248" width="26" height="52"/>
    <rect x="604" y="216" width="26" height="84"/>
    <rect x="630" y="176" width="26" height="124"/>
  </g>

  <!-- area under the curve -->
  <path d="M500 300 Q 578 300 656 172 L656 300 Z" fill="url(#area)"/>
  <!-- the curve y = x^2 -->
  <path d="M500 300 Q 578 300 656 172" fill="none" stroke="#FFB0D0" stroke-width="3" stroke-linecap="round"/>

  <!-- limits -->
  <g stroke="#FFB0D0" stroke-width="2" stroke-dasharray="4 4">
    <path d="M656 172 V300"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#D98BA8" text-anchor="middle">
    <text x="500" y="320">0</text><text x="656" y="320">2</text>
  </g>
</svg>

<div class="rm">RECTANGLES &#8594; EXACT, AS THEY THIN</div>`,
};
