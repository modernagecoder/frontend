// 11 Plus Maths — a sequence where the rule is in the differences, which is
// the 11+ house style.
export default {
  bg: 'linear-gradient(120deg,#2E0C1E 0%,#1A0611 54%,#070206 100%)',
  a1: '#FFB6D2', a2: '#F06292', a3: '#C43A6A', a4: '#7C1D3E',
  glow: '240,98,146',
  sub: '#B38DA0',

  badge: 'AGES 9-11',
  kicker: '11 PLUS MATHS (UK)',
  title: '11 Plus<br><span class="ac">Maths</span>',
  tagline: 'Spot the rule before the clock does',
  meta: 'SEQUENCES<i>·</i>REASONING<i>·</i>TIMED PAPERS',
  titleMax: 372,
  titleSize: 53,

  head: `
.seq{position:absolute;left:452px;top:154px;z-index:3;display:flex;align-items:center;gap:12px}
.seq span{width:48px;height:48px;border-radius:9px;display:flex;align-items:center;justify-content:center;
  font-family:'Fraunces',Georgia,serif;font-size:21px;font-weight:800;color:#FFE6EF;
  background:#2A0A18;border:1.8px solid rgba(240,98,146,.55)}
.seq span.q{background:#4A1129;border-color:#FFB6D2;color:#FFB6D2}
.rule{position:absolute;left:452px;top:330px;z-index:3;display:flex;align-items:center;gap:9px;
  font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;letter-spacing:.05em;color:#FFB6D2}
.rule span{border-radius:7px;border:1px solid rgba(240,98,146,.5);background:rgba(240,98,146,.12);padding:5px 11px}
.rule b{color:#FFE6EF}`,

  motif: `
<div class="seq">
  <span>3</span><span>6</span><span>11</span><span>18</span><span>27</span><span class="q">?</span>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- difference arcs -->
  <g fill="none" stroke="#C43A6A" stroke-width="2" stroke-linecap="round">
    <path d="M482 214 C 490 236 508 236 516 214"/>
    <path d="M542 214 C 550 236 568 236 576 214"/>
    <path d="M602 214 C 610 236 628 236 636 214"/>
    <path d="M662 214 C 670 236 688 236 696 214"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#FFB6D2" text-anchor="middle">
    <text x="499" y="256">+3</text><text x="559" y="256">+5</text>
    <text x="619" y="256">+7</text><text x="679" y="256">+9</text>
  </g>
  <!-- the next difference -->
  <path d="M722 214 C 730 236 748 236 756 214" fill="none" stroke="#FFB6D2" stroke-width="2.4" stroke-dasharray="4 4" stroke-linecap="round"/>
  <text x="739" y="256" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#FFE6EF">+11</text>

  <text x="452" y="292" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#A8788C">the gaps go up by 2 each time</text>
</svg>

<div class="rule"><span>ANSWER <b>38</b></span><span>ODD NUMBER DIFFERENCES</span></div>`,
};
