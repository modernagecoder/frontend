// Problem Solving & Logic — a maze with the route solved, because that is
// what "break a big problem into small steps" looks like.
export default {
  bg: 'linear-gradient(120deg,#2B1220 0%,#190A13 54%,#070305 100%)',
  a1: '#FFC3CD', a2: '#FB7185', a3: '#D2405A', a4: '#892033',
  glow: '251,113,133',
  sub: '#B0929A',

  badge: 'KIDS 6-12',
  kicker: 'LOGIC & THINKING COURSE',
  title: 'Problem Solving<br><span class="ac">& Logic</span>',
  tagline: 'Think like a computer scientist',
  meta: 'PUZZLES<i>·</i>PATTERNS<i>·</i>ALGORITHMS',
  titleMax: 372,
  titleSize: 45,

  head: `
.steps{position:absolute;left:476px;top:308px;z-index:3;display:flex;align-items:center;gap:9px;
  font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.1em;color:#FFC3CD;
  border:1px solid rgba(251,113,133,.45);background:rgba(251,113,133,.12);border-radius:8px;padding:6px 12px}
.steps b{color:#FB7185}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs>
    <linearGradient id="sol" x1="476" y1="209" x2="714" y2="243" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFE1E6"/><stop offset="1" stop-color="#FB7185"/>
    </linearGradient>
    <filter id="pblur" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="8"/></filter>
  </defs>

  <!-- maze walls -->
  <g stroke="#7A3348" stroke-width="3.4" stroke-linecap="round">
    <path d="M476 124 H714"/><path d="M476 294 H714"/>
    <path d="M476 124 V192"/><path d="M476 226 V294"/>
    <path d="M714 124 V226"/><path d="M714 260 V294"/>
    <path d="M510 124 V192"/><path d="M510 226 V294"/>
    <path d="M544 158 H646"/>
    <path d="M578 192 V260"/>
    <path d="M612 226 H714"/>
    <path d="M646 124 V192"/>
    <path d="M510 260 H612"/>
    <path d="M680 124 V226"/>
    <path d="M612 192 H714"/>
  </g>

  <!-- the route out -->
  <polyline points="476,209 527,209 527,175 595,175 595,243 697,243 714,243"
            fill="none" stroke="#FB7185" stroke-width="11" opacity=".28" filter="url(#pblur)"/>
  <polyline points="476,209 527,209 527,175 595,175 595,243 697,243 714,243"
            fill="none" stroke="url(#sol)" stroke-width="3.2" stroke-dasharray="7 6" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- start and finish -->
  <circle cx="476" cy="209" r="6.5" fill="#0E0509" stroke="#FFE1E6" stroke-width="2.4"/>
  <g>
    <circle cx="714" cy="243" r="20" fill="#FB7185" opacity=".35" filter="url(#pblur)"/>
    <circle cx="714" cy="243" r="8" fill="#0E0509" stroke="#FFC3CD" stroke-width="2.6"/>
    <circle cx="714" cy="243" r="3.4" fill="#FFE1E6"/>
  </g>
</svg>

<div class="steps"><b>14</b> STEPS<span style="color:#8E6570">·</span> SOLVED</div>`,
};
