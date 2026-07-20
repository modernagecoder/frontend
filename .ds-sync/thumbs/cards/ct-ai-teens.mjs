// CBSE AI (Class 9-12, Code 417 & 843) — the AI Project Cycle, which is the
// framework both codes are examined on.
export default {
  bg: 'linear-gradient(120deg,#052A22 0%,#031913 54%,#010806 100%)',
  a1: '#8FEFCB', a2: '#10B981', a3: '#0A8A60', a4: '#065640',
  glow: '16,185,129',
  sub: '#88A99C',

  badge: 'CLASS 9-12',
  kicker: 'CBSE AI · CODE 417 & 843',
  title: 'CBSE<br><span class="ac">AI & Python</span>',
  tagline: 'Both codes, taught to the board syllabus',
  meta: 'AI PROJECT CYCLE<i>·</i>ML + DL<i>·</i>PRACTICAL FILE',
  titleMax: 366,
  titleSize: 52,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs><filter id="cb" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="8"/></filter></defs>

  <circle cx="620" cy="200" r="92" fill="none" stroke="#10B981" stroke-width="12" opacity=".1" filter="url(#cb)"/>
  <circle cx="620" cy="200" r="92" fill="none" stroke="rgba(16,185,129,.4)" stroke-width="2" stroke-dasharray="7 7"/>

  <text x="620" y="196" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" letter-spacing="1.8" fill="#5E8F7E">AI PROJECT</text>
  <text x="620" y="212" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" letter-spacing="1.8" fill="#5E8F7E">CYCLE</text>

  <g font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" letter-spacing="1.1">
    <g>
      <circle cx="620" cy="108" r="9" fill="#0A2A21" stroke="#8FEFCB" stroke-width="2.4"/>
      <text x="620" y="94" text-anchor="middle" fill="#8FEFCB">SCOPING</text>
    </g>
    <g>
      <circle cx="707" cy="172" r="9" fill="#0A2A21" stroke="#10B981" stroke-width="2.4"/>
      <text x="724" y="164" text-anchor="start" fill="#69C4A4">DATA</text>
    </g>
    <g>
      <circle cx="674" cy="274" r="9" fill="#0A2A21" stroke="#10B981" stroke-width="2.4"/>
      <text x="690" y="292" text-anchor="start" fill="#69C4A4">EXPLORE</text>
    </g>
    <g>
      <circle cx="566" cy="274" r="9" fill="#0A2A21" stroke="#10B981" stroke-width="2.4"/>
      <text x="550" y="292" text-anchor="end" fill="#69C4A4">MODEL</text>
    </g>
    <g>
      <circle cx="533" cy="172" r="9" fill="#0A2A21" stroke="#10B981" stroke-width="2.4"/>
      <text x="516" y="164" text-anchor="end" fill="#69C4A4">EVALUATE</text>
    </g>
  </g>

  <!-- direction of travel -->
  <path d="M676 118 A 92 92 0 0 1 700 150" stroke="#8FEFCB" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <path d="M700 150 L692 141 M700 150 L705 139" stroke="#8FEFCB" stroke-width="2.6" fill="none" stroke-linecap="round"/>
</svg>`,
};
