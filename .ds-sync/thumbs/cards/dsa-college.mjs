// Data Structures & Algorithms (college) — a DP table being filled, which
// is the interview pattern the teens BST card does not cover.
export default {
  bg: 'linear-gradient(120deg,#2C0A18 0%,#19050E 54%,#070105 100%)',
  a1: '#FFB3C6', a2: '#E11D48', a3: '#B01238', a4: '#6E0A23',
  glow: '225,29,72',
  sub: '#B08D98',

  badge: 'COLLEGE & BEYOND',
  kicker: 'DSA & INTERVIEW PREP',
  title: 'Data Structures<br><span class="ac">& Algorithms</span>',
  tagline: 'The patterns interviews are built on',
  meta: '26 WEEKS<i>·</i>DP<i>·</i>GRAPHS<i>·</i>MOCK INTERVIEWS',
  titleMax: 372,
  titleSize: 43,

  head: `
.prob{position:absolute;left:452px;top:96px;width:314px;z-index:3;border-radius:9px;
  background:#1A0710;border:1px solid rgba(225,29,72,.42);padding:8px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;color:#E8C2CC;
  box-shadow:0 14px 32px rgba(0,0,0,.6)}
.prob b{color:#FFB3C6}
.cx{position:absolute;left:452px;top:334px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:8px;border:1px solid rgba(225,29,72,.5);background:rgba(225,29,72,.13);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.06em;color:#FFB3C6}
.cx b{color:#FF6B8A}`,

  motif: `
<div class="prob">longest common subsequence &#183; <b>"ACE"</b> vs <b>"ABCDE"</b></div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" text-anchor="middle">
    <!-- column headers -->
    <g fill="#B0687E" font-size="10">
      <text x="516" y="152">&#8709;</text><text x="558" y="152">A</text><text x="600" y="152">B</text>
      <text x="642" y="152">C</text><text x="684" y="152">D</text><text x="726" y="152">E</text>
    </g>
    <!-- row headers -->
    <g fill="#B0687E" font-size="10">
      <text x="478" y="182">&#8709;</text><text x="478" y="220">A</text><text x="478" y="258">C</text><text x="478" y="296">E</text>
    </g>
  </g>

  <!-- cells: the real LCS table for ACE vs ABCDE -->
  <g>
    <g fill="#22080F" stroke="#5C2233" stroke-width="1.2">
      <rect x="498" y="164" width="36" height="28" rx="4"/><rect x="540" y="164" width="36" height="28" rx="4"/>
      <rect x="582" y="164" width="36" height="28" rx="4"/><rect x="624" y="164" width="36" height="28" rx="4"/>
      <rect x="666" y="164" width="36" height="28" rx="4"/><rect x="708" y="164" width="36" height="28" rx="4"/>
      <rect x="498" y="202" width="36" height="28" rx="4"/><rect x="540" y="202" width="36" height="28" rx="4"/>
      <rect x="582" y="202" width="36" height="28" rx="4"/><rect x="624" y="202" width="36" height="28" rx="4"/>
      <rect x="666" y="202" width="36" height="28" rx="4"/><rect x="708" y="202" width="36" height="28" rx="4"/>
      <rect x="498" y="240" width="36" height="28" rx="4"/><rect x="540" y="240" width="36" height="28" rx="4"/>
      <rect x="582" y="240" width="36" height="28" rx="4"/><rect x="624" y="240" width="36" height="28" rx="4"/>
      <rect x="666" y="240" width="36" height="28" rx="4"/><rect x="708" y="240" width="36" height="28" rx="4"/>
      <rect x="498" y="278" width="36" height="28" rx="4"/><rect x="540" y="278" width="36" height="28" rx="4"/>
      <rect x="582" y="278" width="36" height="28" rx="4"/><rect x="624" y="278" width="36" height="28" rx="4"/>
      <rect x="666" y="278" width="36" height="28" rx="4"/>
    </g>
    <!-- the answer cell -->
    <rect x="708" y="278" width="36" height="28" rx="4" fill="#4A0C22" stroke="#FF6B8A" stroke-width="2"/>
  </g>

  <g font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" text-anchor="middle" fill="#8A5A68">
    <text x="516" y="183">0</text><text x="558" y="183">0</text><text x="600" y="183">0</text><text x="642" y="183">0</text><text x="684" y="183">0</text><text x="726" y="183">0</text>
    <text x="516" y="221">0</text><text x="558" y="221">1</text><text x="600" y="221">1</text><text x="642" y="221">1</text><text x="684" y="221">1</text><text x="726" y="221">1</text>
    <text x="516" y="259">0</text><text x="558" y="259">1</text><text x="600" y="259">1</text><text x="642" y="259">2</text><text x="684" y="259">2</text><text x="726" y="259">2</text>
    <text x="516" y="297">0</text><text x="558" y="297">1</text><text x="600" y="297">1</text><text x="642" y="297">2</text><text x="684" y="297">2</text>
  </g>
  <text x="726" y="297" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="12" font-weight="700" fill="#FFD9E1">3</text>
</svg>

<div class="cx">LCS = <b>3</b> <span style="color:#B01238">&#183;</span> O(m&#215;n) TABLE</div>`,
};
