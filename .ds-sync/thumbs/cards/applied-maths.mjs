// Applied Mathematics — a model with a maximum, which is what applied maths
// is usually hired to find.
export default {
  bg: 'linear-gradient(120deg,#2E1B05 0%,#1A0F03 54%,#070401 100%)',
  a1: '#FFCB8A', a2: '#FB8C00', a3: '#C56900', a4: '#7C4200',
  glow: '251,140,0',
  sub: '#B39A82',

  badge: 'COLLEGE & BEYOND',
  kicker: 'APPLIED MATHEMATICS',
  title: 'Applied<br><span class="ac">Mathematics</span>',
  tagline: 'Model the real thing, then optimise it',
  meta: 'MODELLING<i>·</i>OPTIMISATION<i>·</i>NUMERICAL METHODS',
  titleMax: 372,
  titleSize: 50,

  head: `
.mdl{position:absolute;left:452px;top:102px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:24px;font-weight:800;color:#FFEEDC}
.mdl i{font-style:italic;color:#FFCB8A}
.opt{position:absolute;left:452px;top:332px;z-index:3;display:flex;gap:9px}
.opt span{border-radius:7px;border:1px solid rgba(251,140,0,.5);background:rgba(251,140,0,.12);
  padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#FFCB8A}
.opt b{color:#FB8C00}`,

  motif: `
<div class="mdl">P(<i>x</i>) = &#8722;2<i>x</i>&#178; + 24<i>x</i> &#8722; 40</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="rgba(255,203,138,.08)" stroke-width="1">
    <path d="M470 180 H768"/><path d="M470 226 H768"/><path d="M470 272 H768"/>
  </g>
  <path d="M470 306 H768" stroke="rgba(255,203,138,.4)" stroke-width="1.8"/>
  <path d="M490 150 V306" stroke="rgba(255,203,138,.4)" stroke-width="1.8"/>

  <!-- the profit curve, peaking at x = 6 -->
  <path d="M508 300 Q 610 108 712 300" fill="none" stroke="#FFCB8A" stroke-width="3" stroke-linecap="round"/>

  <!-- the maximum -->
  <g>
    <path d="M610 172 V306" stroke="#FB8C00" stroke-width="2" stroke-dasharray="4 5"/>
    <path d="M490 172 H610" stroke="#FB8C00" stroke-width="2" stroke-dasharray="4 5"/>
    <circle cx="610" cy="172" r="18" fill="#FB8C00" opacity=".25"/>
    <circle cx="610" cy="172" r="8" fill="#2E1B05" stroke="#FFEEDC" stroke-width="2.8"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#C99A5E">
    <text x="610" y="324" text-anchor="middle">x = 6</text>
    <text x="482" y="176" text-anchor="end">32</text>
  </g>
  <text x="640" y="150" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#FFCB8A">P&#8242;(x) = 0</text>
</svg>

<div class="opt">
  <span>BEST PRICE <b>&#8377;6</b></span>
  <span>MAX PROFIT <b>32</b></span>
</div>`,
};
