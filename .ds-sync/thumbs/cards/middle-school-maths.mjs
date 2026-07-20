// Middle School Math Mastery — comparing fractions with bars, which is how
// the idea finally clicks.
export default {
  bg: 'linear-gradient(120deg,#04262A 0%,#021618 54%,#000809 100%)',
  a1: '#8FE3DC', a2: '#26A69A', a3: '#178076', a4: '#0A544C',
  glow: '38,166,154',
  sub: '#84A5A2',

  badge: 'CLASS 6-8',
  kicker: 'MIDDLE SCHOOL MATHS',
  title: 'Middle School<br><span class="ac">Math Mastery</span>',
  tagline: 'Fractions, ratios and the start of algebra',
  meta: 'FRACTIONS<i>·</i>RATIO<i>·</i>PERCENTAGES<i>·</i>GEOMETRY',
  titleMax: 372,
  titleSize: 45,

  head: `
.cmp{position:absolute;left:452px;top:326px;z-index:3;display:flex;align-items:center;gap:11px;
  font-family:'Fraunces',Georgia,serif;font-size:22px;font-weight:800;color:#E4F7F4}
.cmp b{color:#8FE3DC}
.cmp small{font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.1em;
  color:#5E8F8A;margin-left:6px}
.lb{position:absolute;z-index:3;font-family:'Fraunces',Georgia,serif;font-size:24px;font-weight:800;color:#E4F7F4}
.b1{left:452px;top:140px}.b2{left:452px;top:230px}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- 3/4 -->
  <g>
    <rect x="508" y="140" width="256" height="44" rx="6" fill="#082E30" stroke="#178076" stroke-width="1.8"/>
    <rect x="508" y="140" width="192" height="44" rx="6" fill="#26A69A"/>
    <g stroke="#0A3A3C" stroke-width="2">
      <path d="M572 140 V184"/><path d="M636 140 V184"/><path d="M700 140 V184"/>
    </g>
  </g>

  <!-- 5/8 -->
  <g>
    <rect x="508" y="230" width="256" height="44" rx="6" fill="#082E30" stroke="#178076" stroke-width="1.8"/>
    <rect x="508" y="230" width="160" height="44" rx="6" fill="#12706A"/>
    <g stroke="#0A3A3C" stroke-width="2">
      <path d="M540 230 V274"/><path d="M572 230 V274"/><path d="M604 230 V274"/><path d="M636 230 V274"/>
      <path d="M668 230 V274"/><path d="M700 230 V274"/><path d="M732 230 V274"/>
    </g>
  </g>

  <!-- the gap that decides it -->
  <path d="M700 128 V292" stroke="#8FE3DC" stroke-width="1.8" stroke-dasharray="5 5" opacity=".8"/>
  <path d="M668 292 H700" stroke="#8FE3DC" stroke-width="2.4"/>
  <text x="684" y="308" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#8FE3DC">1/8</text>
</svg>

<div class="lb b1">&#190;</div>
<div class="lb b2">&#8541;</div>

<div class="cmp">&#190; <b>&gt;</b> &#8541;<small>SAME WHOLE, BIGGER SHARE</small></div>`,
};
