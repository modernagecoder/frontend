// PSLE Maths — the Singapore bar model, which is the method the paper is
// built around.
export default {
  bg: 'linear-gradient(120deg,#2E0C0C 0%,#1A0606 54%,#070202 100%)',
  a1: '#FFB3B0', a2: '#EF5350', a3: '#C22E2B', a4: '#7C1614',
  glow: '239,83,80',
  sub: '#B38F8E',

  badge: 'PRIMARY 5-6',
  kicker: 'PSLE MATHS MASTERY',
  title: 'PSLE Maths<br><span class="ac">Mastery</span>',
  tagline: 'Bar models that crack the hard problems',
  meta: 'BAR MODELS<i>·</i>HEURISTICS<i>·</i>PAPER 2 TECHNIQUE',
  titleMax: 372,
  titleSize: 48,

  head: `
.qq{position:absolute;left:452px;top:102px;width:320px;z-index:3;font-size:12px;line-height:1.5;color:#F4DEDD}
.qq b{color:#FFB3B0}
.lbl{position:absolute;z-index:3;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;
  letter-spacing:.08em;color:#B08280}
.lb1{left:452px;top:184px}.lb2{left:452px;top:236px}
.ans{position:absolute;left:452px;top:322px;z-index:3;display:flex;align-items:center;gap:10px;
  font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.05em;color:#FFB3B0}
.ans span{border-radius:7px;border:1px solid rgba(239,83,80,.5);background:rgba(239,83,80,.12);padding:5px 11px}
.ans b{color:#FFDCDB;font-family:'Fraunces',Georgia,serif;font-size:17px}`,

  motif: `
<div class="qq">Ali has <b>3&#215;</b> as much as Bina. Together they have <b>$480</b>.</div>

<span class="lbl lb1">BINA</span>
<span class="lbl lb2">ALI</span>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- Bina: 1 unit -->
  <rect x="516" y="176" width="62" height="34" rx="5" fill="#C22E2B" stroke="#FFB3B0" stroke-width="1.8"/>
  <text x="547" y="198" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#FFE4E3">1u</text>

  <!-- Ali: 3 units -->
  <g>
    <rect x="516" y="228" width="62" height="34" rx="5" fill="#EF5350" stroke="#FFB3B0" stroke-width="1.8"/>
    <rect x="582" y="228" width="62" height="34" rx="5" fill="#EF5350" stroke="#FFB3B0" stroke-width="1.8"/>
    <rect x="648" y="228" width="62" height="34" rx="5" fill="#EF5350" stroke="#FFB3B0" stroke-width="1.8"/>
    <g font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#FFE4E3" text-anchor="middle">
      <text x="547" y="250">1u</text><text x="613" y="250">1u</text><text x="679" y="250">1u</text>
    </g>
  </g>

  <!-- total brace -->
  <path d="M724 176 C 736 176 736 218 748 218 C 736 218 736 262 724 262" stroke="#FFB3B0" stroke-width="2" fill="none"/>
  <text x="756" y="222" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#FFB3B0">$480</text>

  <!-- unit value -->
  <text x="516" y="292" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#B08280">4 units = $480 &#8594; 1 unit = $120</text>
</svg>

<div class="ans"><span>ALI = 3 &#215; $120 = <b>$360</b></span></div>`,
};
