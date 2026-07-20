// Hackathon for Kids — the 12-week prep track as a countdown ring, with the
// four phases marked. Prep only: no live-event claims on the card.
export default {
  bg: 'linear-gradient(120deg,#2E2008 0%,#1A1205 54%,#080502 100%)',
  a1: '#FFD98A', a2: '#FFB020', a3: '#D98B0B', a4: '#8A5606',
  glow: '255,176,32',
  sub: '#B7A489',

  badge: 'AGES 8-12',
  kicker: 'HACKATHON PREP TRACK',
  title: 'Hackathon<br><span class="ac">for Kids</span>',
  tagline: 'Twelve weeks to a project worth demoing',
  meta: 'CODING<i>·</i>AI TOOLS<i>·</i>TEAMWORK<i>·</i>PITCHING',
  titleMax: 366,
  titleSize: 53,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs>
    <linearGradient id="ring" x1="520" y1="90" x2="700" y2="300" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFE9B8"/><stop offset=".55" stop-color="#FFB020"/><stop offset="1" stop-color="#D98B0B"/>
    </linearGradient>
    <filter id="hb" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="10"/></filter>
    <filter id="hb2" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="4"/></filter>
  </defs>

  <!-- countdown ring: 3 of 4 phases complete -->
  <circle cx="608" cy="196" r="86" stroke="#FFB020" stroke-width="16" opacity=".14" filter="url(#hb)"/>
  <circle cx="608" cy="196" r="86" stroke="rgba(255,255,255,.1)" stroke-width="11"/>
  <circle cx="608" cy="196" r="86" stroke="url(#ring)" stroke-width="11" stroke-linecap="round"
          stroke-dasharray="405 540" transform="rotate(-90 608 196)"/>

  <text x="608" y="188" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="52" font-weight="800" fill="#FFF6E2">12</text>
  <text x="608" y="212" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" letter-spacing="2.6" fill="#C9A96E">WEEKS</text>
  <text x="608" y="232" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" letter-spacing="2.6" fill="#C9A96E">OF PREP</text>

  <!-- phase markers around the ring -->
  <g font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" letter-spacing="1.3">
    <circle cx="608" cy="110" r="6.5" fill="#FFD98A" stroke="#2E2008" stroke-width="2.4"/>
    <text x="608" y="94" text-anchor="middle" fill="#FFD98A">LEARN</text>
    <circle cx="694" cy="196" r="6.5" fill="#FFD98A" stroke="#2E2008" stroke-width="2.4"/>
    <text x="716" y="200" text-anchor="start" fill="#FFD98A">BUILD</text>
    <circle cx="608" cy="282" r="6.5" fill="#FFD98A" stroke="#2E2008" stroke-width="2.4"/>
    <text x="608" y="302" text-anchor="middle" fill="#FFD98A">TEST</text>
    <circle cx="522" cy="196" r="6.5" fill="#4A3A18" stroke="#8A6A2A" stroke-width="2.4"/>
    <text x="500" y="200" text-anchor="end" fill="#8A7657">PITCH</text>
  </g>

  <!-- the thing it is all for -->
  <g transform="translate(736,296)">
    <circle r="34" fill="#FFB020" opacity=".34" filter="url(#hb2)"/>
    <path d="M-15 -20 H15 V-8 A15 15 0 0 1 -15 -8 Z" fill="#FFC94D"/>
    <path d="M-15 -17 H-24 A9 9 0 0 0 -15 -6 Z" fill="#D98B0B"/>
    <path d="M15 -17 H24 A9 9 0 0 1 15 -6 Z" fill="#D98B0B"/>
    <rect x="-3.5" y="5" width="7" height="10" fill="#D98B0B"/>
    <rect x="-12" y="15" width="24" height="6" rx="2" fill="#FFC94D"/>
  </g>
</svg>`,
};
