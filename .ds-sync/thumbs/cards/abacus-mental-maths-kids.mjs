// Abacus & Mental Maths — a soroban actually set to a number, heaven and
// earth beads in the right places.
export default {
  bg: 'linear-gradient(120deg,#2B1F08 0%,#181104 54%,#070501 100%)',
  a1: '#F2D89A', a2: '#D9A441', a3: '#A87B18', a4: '#6B4D0A',
  glow: '217,164,65',
  sub: '#B0A184',

  badge: 'AGES 6-12',
  kicker: 'ABACUS & MENTAL MATHS',
  title: 'Abacus &<br><span class="ac">Mental Maths</span>',
  tagline: 'Picture the beads, then drop the abacus',
  meta: 'SOROBAN<i>·</i>VISUALISATION<i>·</i>SPEED',
  titleMax: 372,
  titleSize: 47,

  head: `
.reads{position:absolute;left:452px;top:322px;z-index:3;display:flex;align-items:center;gap:11px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.1em;color:#9A8656}
.reads b{font-family:'Fraunces',Georgia,serif;font-size:24px;color:#F2D89A;letter-spacing:.02em}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- frame -->
  <rect x="464" y="104" width="292" height="196" rx="10" fill="#3A2A0E" stroke="#8A6A20" stroke-width="3"/>
  <!-- reckoning bar -->
  <rect x="464" y="158" width="292" height="9" fill="#8A6A20"/>
  <!-- rods -->
  <g stroke="#7A5C18" stroke-width="3">
    <path d="M512 112 V292"/><path d="M576 112 V292"/><path d="M640 112 V292"/><path d="M704 112 V292"/>
  </g>

  <!-- thousands = 4 : four earth beads up -->
  <g fill="#D9A441" stroke="#5C4210" stroke-width="1.6">
    <ellipse cx="512" cy="132" rx="20" ry="9"/>
    <ellipse cx="512" cy="176" rx="20" ry="9"/><ellipse cx="512" cy="196" rx="20" ry="9"/>
    <ellipse cx="512" cy="216" rx="20" ry="9"/><ellipse cx="512" cy="236" rx="20" ry="9"/>
  </g>

  <!-- hundreds = 0 : all beads away from the bar -->
  <g fill="#8A6A20" stroke="#5C4210" stroke-width="1.6">
    <ellipse cx="576" cy="126" rx="20" ry="9"/>
    <ellipse cx="576" cy="228" rx="20" ry="9"/><ellipse cx="576" cy="248" rx="20" ry="9"/>
    <ellipse cx="576" cy="268" rx="20" ry="9"/><ellipse cx="576" cy="288" rx="20" ry="9"/>
  </g>

  <!-- tens = 7 : heaven bead down + two earth up -->
  <g fill="#D9A441" stroke="#5C4210" stroke-width="1.6">
    <ellipse cx="640" cy="148" rx="20" ry="9"/>
    <ellipse cx="640" cy="176" rx="20" ry="9"/><ellipse cx="640" cy="196" rx="20" ry="9"/>
  </g>
  <g fill="#8A6A20" stroke="#5C4210" stroke-width="1.6">
    <ellipse cx="640" cy="268" rx="20" ry="9"/><ellipse cx="640" cy="288" rx="20" ry="9"/>
  </g>

  <!-- ones = 3 : three earth up -->
  <g fill="#D9A441" stroke="#5C4210" stroke-width="1.6">
    <ellipse cx="704" cy="176" rx="20" ry="9"/><ellipse cx="704" cy="196" rx="20" ry="9"/>
    <ellipse cx="704" cy="216" rx="20" ry="9"/>
  </g>
  <g fill="#8A6A20" stroke="#5C4210" stroke-width="1.6">
    <ellipse cx="704" cy="126" rx="20" ry="9"/>
    <ellipse cx="704" cy="288" rx="20" ry="9"/>
  </g>

  <g font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#9A8656" text-anchor="middle">
    <text x="512" y="316">4</text><text x="576" y="316">0</text><text x="640" y="316">7</text><text x="704" y="316">3</text>
  </g>
</svg>

<div class="reads">READS <b>4,073</b></div>`,
};
