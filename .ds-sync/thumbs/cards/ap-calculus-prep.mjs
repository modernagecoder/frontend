// AP Calculus AB & BC — the secant becoming the tangent, which is the one
// idea the whole course rests on.
export default {
  bg: 'linear-gradient(120deg,#2E2205 0%,#1A1303 54%,#070501 100%)',
  a1: '#FFDC8A', a2: '#FFB300', a3: '#C88700', a4: '#7E5500',
  glow: '255,179,0',
  sub: '#B3A382',

  badge: 'AP EXAM',
  kicker: 'AP CALCULUS AB & BC',
  title: 'AP Calculus<br><span class="ac">AB & BC</span>',
  tagline: 'Limits to series, on the exam rubric',
  meta: 'BOTH COURSES<i>·</i>FRQ TECHNIQUE<i>·</i>MOCKS',
  titleMax: 372,
  titleSize: 50,

  head: `
.lim{position:absolute;left:452px;top:104px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:20px;font-weight:800;color:#FFF3DC;display:flex;align-items:center;gap:9px}
.lim small{font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:.06em;color:#C4A055;display:block}
.lim i{font-style:italic;color:#FFDC8A}
.res{position:absolute;left:452px;top:334px;z-index:3;display:flex;gap:9px}
.res span{border-radius:7px;border:1px solid rgba(255,179,0,.5);background:rgba(255,179,0,.13);
  padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#FFDC8A}
.res b{color:#FFF3DC}`,

  motif: `
<div class="lim"><span><small>lim h&#8594;0</small></span> <span>[<i>f</i>(x+h) &#8722; <i>f</i>(x)] / h</span></div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="rgba(255,220,138,.08)" stroke-width="1">
    <path d="M466 196 H772"/><path d="M466 244 H772"/>
  </g>
  <path d="M466 300 H772" stroke="rgba(255,220,138,.4)" stroke-width="1.8"/>
  <path d="M490 152 V300" stroke="rgba(255,220,138,.4)" stroke-width="1.8"/>

  <!-- the curve -->
  <path d="M498 292 Q 604 292 700 158" fill="none" stroke="#FFDC8A" stroke-width="2.8" stroke-linecap="round"/>

  <!-- secant, further out -->
  <path d="M566 280 L716 176" stroke="#8A6A20" stroke-width="2" stroke-dasharray="5 5"/>
  <!-- the tangent it becomes -->
  <path d="M534 300 L688 168" stroke="#FFB300" stroke-width="2.8" stroke-linecap="round"/>

  <!-- the point -->
  <circle cx="612" cy="234" r="7" fill="#2E2205" stroke="#FFF3DC" stroke-width="2.8"/>
  <circle cx="700" cy="196" r="5" fill="#8A6A20"/>

  <!-- h, shrinking -->
  <g stroke="#C4A055" stroke-width="1.6">
    <path d="M612 316 H700"/>
    <path d="M612 310 V322"/><path d="M700 310 V322"/>
  </g>
  <text x="656" y="336" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#C4A055">h &#8594; 0</text>
</svg>

<div class="res">
  <span>SECANT <b>&#8594;</b> TANGENT</span>
  <span>SLOPE = <b>f&#8242;(x)</b></span>
</div>`,
};
