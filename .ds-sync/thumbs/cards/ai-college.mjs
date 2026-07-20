// Artificial Intelligence — a network with real weights, and the ethics
// checkpoint the syllabus actually includes.
export default {
  bg: 'linear-gradient(120deg,#0C1638 0%,#070C21 54%,#02040D 100%)',
  a1: '#B9C9FF', a2: '#4D7CFF', a3: '#2F55C4', a4: '#193282',
  glow: '77,124,255',
  sub: '#94A0C4',

  badge: 'COLLEGE & BEYOND',
  kicker: 'ARTIFICIAL INTELLIGENCE',
  title: 'Artificial<br><span class="ac">Intelligence</span>',
  tagline: 'Build systems that learn, and know their limits',
  meta: 'NEURAL NETWORKS<i>·</i>APPLICATIONS<i>·</i>AI ETHICS',
  titleMax: 372,
  titleSize: 50,

  head: `
.eth{position:absolute;left:452px;top:330px;z-index:3;display:flex;align-items:center;gap:8px;
  border-radius:8px;border:1px solid rgba(143,216,160,.45);background:rgba(143,216,160,.09);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.05em;color:#B7E8C4}
.eth b{color:#8FD8A0}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs><filter id="nb" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="7"/></filter></defs>

  <!-- edges -->
  <g stroke="#26356E" stroke-width="1.4">
    <path d="M482 140 L588 122"/><path d="M482 140 L588 186"/><path d="M482 140 L588 250"/>
    <path d="M482 200 L588 122"/><path d="M482 200 L588 186"/><path d="M482 200 L588 250"/>
    <path d="M482 260 L588 122"/><path d="M482 260 L588 186"/><path d="M482 260 L588 250"/>
    <path d="M588 122 L700 168"/><path d="M588 186 L700 168"/><path d="M588 250 L700 168"/>
    <path d="M588 122 L700 234"/><path d="M588 186 L700 234"/><path d="M588 250 L700 234"/>
  </g>
  <!-- the strongest path -->
  <g stroke="#4D7CFF" stroke-width="2.6">
    <path d="M482 200 L588 186"/><path d="M588 186 L700 168"/>
  </g>

  <!-- nodes -->
  <g>
    <circle cx="482" cy="140" r="12" fill="#111A44" stroke="#4D7CFF" stroke-width="2"/>
    <circle cx="482" cy="200" r="12" fill="#1A2A6E" stroke="#B9C9FF" stroke-width="2.4"/>
    <circle cx="482" cy="260" r="12" fill="#111A44" stroke="#4D7CFF" stroke-width="2"/>
    <circle cx="588" cy="122" r="12" fill="#111A44" stroke="#4D7CFF" stroke-width="2"/>
    <circle cx="588" cy="186" r="12" fill="#1A2A6E" stroke="#B9C9FF" stroke-width="2.4"/>
    <circle cx="588" cy="250" r="12" fill="#111A44" stroke="#4D7CFF" stroke-width="2"/>
    <circle cx="700" cy="168" r="18" fill="#4D7CFF" opacity=".3" filter="url(#nb)"/>
    <circle cx="700" cy="168" r="13" fill="#22357E" stroke="#B9C9FF" stroke-width="2.6"/>
    <circle cx="700" cy="234" r="12" fill="#111A44" stroke="#4D7CFF" stroke-width="2"/>
  </g>

  <g font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" letter-spacing="1.2" fill="#6E7AAC" text-anchor="middle">
    <text x="482" y="298">INPUT</text>
    <text x="588" y="288">HIDDEN</text>
    <text x="700" y="272">OUTPUT</text>
  </g>
  <text x="546" y="178" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#8FA0D8">w=0.82</text>
</svg>

<div class="eth"><b>&#10003;</b> BIAS, LIMITS AND WHO IT AFFECTS</div>`,
};
