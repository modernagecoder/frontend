// Early Math Foundations (K-2) — counting on a number line, which is how
// addition first becomes real.
export default {
  bg: 'linear-gradient(120deg,#2E1610 0%,#1A0C08 54%,#070302 100%)',
  a1: '#FFC4AE', a2: '#FF8A65', a3: '#D45A34', a4: '#8A3418',
  glow: '255,138,101',
  sub: '#B3968C',

  badge: 'AGES 5-7',
  kicker: 'EARLY MATHS FOUNDATIONS',
  title: 'Early Math<br><span class="ac">Foundations</span>',
  tagline: 'Counting, adding and number sense',
  meta: 'NUMBER LINE<i>·</i>COUNTING ON<i>·</i>PLACE VALUE',
  titleMax: 372,
  titleSize: 48,

  head: `
.sum{position:absolute;left:452px;top:114px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:38px;font-weight:800;color:#FFF0E9;letter-spacing:-.01em}
.sum b{color:#FF8A65}
.sum i{font-style:normal;color:#FFC4AE}`,

  motif: `
<div class="sum">5 <b>+</b> 3 <b>=</b> <i>8</i></div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- the line -->
  <path d="M452 292 H774" stroke="#7A4432" stroke-width="2.4" stroke-linecap="round"/>
  <g stroke="#7A4432" stroke-width="2">
    <path d="M462 286 V298"/><path d="M496 286 V298"/><path d="M530 286 V298"/><path d="M564 286 V298"/>
    <path d="M598 286 V298"/><path d="M632 286 V298"/><path d="M666 286 V298"/><path d="M700 286 V298"/>
    <path d="M734 286 V298"/><path d="M768 286 V298"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#A87A66" text-anchor="middle">
    <text x="462" y="316">0</text><text x="496" y="316">1</text><text x="530" y="316">2</text><text x="564" y="316">3</text>
    <text x="598" y="316">4</text><text x="632" y="316">5</text><text x="666" y="316">6</text><text x="700" y="316">7</text>
    <text x="734" y="316">8</text><text x="768" y="316">9</text>
  </g>

  <!-- start at 5 -->
  <circle cx="632" cy="292" r="7" fill="#FF8A65" stroke="#2E1610" stroke-width="2.4"/>

  <!-- three hops -->
  <g fill="none" stroke="#FFC4AE" stroke-width="2.6" stroke-linecap="round">
    <path d="M632 286 C 640 262 658 262 666 286"/>
    <path d="M666 286 C 674 262 692 262 700 286"/>
    <path d="M700 286 C 708 262 726 262 734 286"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#FFC4AE" text-anchor="middle">
    <text x="649" y="252">+1</text><text x="683" y="252">+1</text><text x="717" y="252">+1</text>
  </g>

  <!-- land on 8 -->
  <circle cx="734" cy="292" r="11" fill="#FF8A65" opacity=".35"/>
  <circle cx="734" cy="292" r="7.5" fill="#FFC4AE" stroke="#2E1610" stroke-width="2.4"/>

  <!-- counters for 5 and 3 -->
  <g>
    <g fill="#FF8A65">
      <circle cx="466" cy="196" r="10"/><circle cx="492" cy="196" r="10"/><circle cx="518" cy="196" r="10"/>
      <circle cx="544" cy="196" r="10"/><circle cx="570" cy="196" r="10"/>
    </g>
    <g fill="#FFC4AE">
      <circle cx="616" cy="196" r="10"/><circle cx="642" cy="196" r="10"/><circle cx="668" cy="196" r="10"/>
    </g>
    <text x="594" y="202" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="20" font-weight="800" fill="#8A5A48">+</text>
  </g>
</svg>`,
};
