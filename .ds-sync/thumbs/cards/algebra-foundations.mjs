// Algebra Foundations — an equation as a balance, which is the whole rule:
// do the same to both sides.
export default {
  bg: 'linear-gradient(120deg,#1B1A3A 0%,#100F22 54%,#04040C 100%)',
  a1: '#C4BCFF', a2: '#7C6BF5', a3: '#5546C4', a4: '#332880',
  glow: '124,107,245',
  sub: '#9A96C0',

  badge: 'CLASS 6-9',
  kicker: 'ALGEBRA FOUNDATIONS',
  title: 'Algebra<br><span class="ac">Foundations</span>',
  tagline: 'Whatever you do to one side, do to the other',
  meta: 'EQUATIONS<i>·</i>EXPRESSIONS<i>·</i>WORD PROBLEMS',
  titleMax: 372,
  titleSize: 50,

  head: `
.eq{position:absolute;left:452px;top:110px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:34px;font-weight:800;color:#EDEAFF}
.eq b{color:#7C6BF5}
.step{position:absolute;left:452px;top:318px;z-index:3;display:flex;align-items:center;gap:12px;
  font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.05em;color:#9A93C8}
.step span{border-radius:7px;border:1px solid rgba(124,107,245,.45);background:rgba(124,107,245,.12);padding:5px 11px}
.step b{color:#C4BCFF}`,

  motif: `
<div class="eq">2<b>x</b> + 3 = 11</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- stand -->
  <path d="M614 292 V182" stroke="#4A4290" stroke-width="4" stroke-linecap="round"/>
  <path d="M576 296 H652" stroke="#4A4290" stroke-width="5" stroke-linecap="round"/>
  <!-- beam -->
  <path d="M486 182 H742" stroke="#C4BCFF" stroke-width="4" stroke-linecap="round"/>
  <circle cx="614" cy="182" r="7" fill="#7C6BF5"/>
  <!-- hangers -->
  <g stroke="#4A4290" stroke-width="2">
    <path d="M528 182 V204"/><path d="M700 182 V204"/>
  </g>

  <!-- left pan: 2x + 3 -->
  <g>
    <rect x="470" y="204" width="116" height="46" rx="8" fill="#171540" stroke="#7C6BF5" stroke-width="2"/>
    <g>
      <rect x="480" y="214" width="26" height="26" rx="5" fill="#3A2F96" stroke="#C4BCFF" stroke-width="1.6"/>
      <text x="493" y="232" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="15" font-weight="800" fill="#EDEAFF">x</text>
      <rect x="510" y="214" width="26" height="26" rx="5" fill="#3A2F96" stroke="#C4BCFF" stroke-width="1.6"/>
      <text x="523" y="232" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="15" font-weight="800" fill="#EDEAFF">x</text>
      <g fill="#7C6BF5">
        <circle cx="548" cy="221" r="6"/><circle cx="564" cy="221" r="6"/><circle cx="556" cy="235" r="6"/>
      </g>
    </g>
  </g>

  <!-- right pan: 11 -->
  <g>
    <rect x="642" y="204" width="116" height="46" rx="8" fill="#171540" stroke="#7C6BF5" stroke-width="2"/>
    <g fill="#7C6BF5">
      <circle cx="656" cy="216" r="5.4"/><circle cx="672" cy="216" r="5.4"/><circle cx="688" cy="216" r="5.4"/>
      <circle cx="704" cy="216" r="5.4"/><circle cx="720" cy="216" r="5.4"/><circle cx="736" cy="216" r="5.4"/>
      <circle cx="664" cy="234" r="5.4"/><circle cx="680" cy="234" r="5.4"/><circle cx="696" cy="234" r="5.4"/>
      <circle cx="712" cy="234" r="5.4"/><circle cx="728" cy="234" r="5.4"/>
    </g>
  </g>
</svg>

<div class="step">
  <span>&#8722;3 both sides</span>
  <span>&#247;2 both sides</span>
  <b>x = 4</b>
</div>`,
};
