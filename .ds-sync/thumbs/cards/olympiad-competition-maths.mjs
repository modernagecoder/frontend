// Math Olympiad Prep (elementary) — counting squares in a 4x4 grid: the
// first problem that teaches a child to count systematically.
export default {
  bg: 'linear-gradient(120deg,#2C1C08 0%,#191004 54%,#070401 100%)',
  a1: '#F0C08A', a2: '#CD7F32', a3: '#9E5D18', a4: '#653A0B',
  glow: '205,127,50',
  sub: '#B09880',

  badge: 'CLASS 3-6',
  kicker: 'MATH OLYMPIAD PREP',
  title: 'Math Olympiad<br><span class="ac">Prep</span>',
  tagline: 'Puzzles that reward thinking, not speed',
  meta: 'COUNTING<i>·</i>PATTERNS<i>·</i>LOGIC<i>·</i>PAST PAPERS',
  titleMax: 372,
  titleSize: 47,

  head: `
.qq{position:absolute;left:452px;top:104px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:20px;font-weight:800;color:#F7E9D8}
.tally{position:absolute;left:640px;top:154px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:11px;line-height:1.95;color:#C0A180}
.tally b{color:#F0C08A;font-weight:700}
.tally .tot{border-top:1px solid rgba(205,127,50,.4);margin-top:5px;padding-top:5px;color:#F7E9D8;font-weight:700}
.tally .tot b{color:#CD7F32}`,

  motif: `
<div class="qq">How many squares?</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- the 4x4 grid -->
  <g stroke="#8A5A22" stroke-width="1.8">
    <rect x="452" y="152" width="164" height="164" fill="#1E1206"/>
    <path d="M493 152 V316"/><path d="M534 152 V316"/><path d="M575 152 V316"/>
    <path d="M452 193 H616"/><path d="M452 234 H616"/><path d="M452 275 H616"/>
  </g>
  <!-- three sizes highlighted -->
  <rect x="452" y="152" width="41" height="41" fill="none" stroke="#F0C08A" stroke-width="2.6"/>
  <rect x="493" y="193" width="82" height="82" fill="none" stroke="#CD7F32" stroke-width="2.6"/>
  <rect x="452" y="152" width="164" height="164" fill="none" stroke="#9E5D18" stroke-width="2.6" stroke-dasharray="6 5"/>
</svg>

<div class="tally">
  <div>1&#215;1 &nbsp;<b>16</b></div>
  <div>2&#215;2 &nbsp;<b>9</b></div>
  <div>3&#215;3 &nbsp;<b>4</b></div>
  <div>4&#215;4 &nbsp;<b>1</b></div>
  <div class="tot">TOTAL &nbsp;<b>30</b></div>
</div>`,
};
