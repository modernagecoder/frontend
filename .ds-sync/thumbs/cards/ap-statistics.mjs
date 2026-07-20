// AP Statistics — a confidence interval, and the sentence you must write to
// earn the point.
export default {
  bg: 'linear-gradient(120deg,#06280F 0%,#031808 54%,#010803 100%)',
  a1: '#A8E8AE', a2: '#43A047', a3: '#2C7A2F', a4: '#17501B',
  glow: '67,160,71',
  sub: '#88AC8C',

  badge: 'AP EXAM',
  kicker: 'AP STATISTICS',
  title: 'AP<br><span class="ac">Statistics</span>',
  tagline: 'The interval, and the sentence that scores',
  meta: 'ALL 9 UNITS<i>·</i>FRQ WORDING<i>·</i>MOCK EXAMS',
  titleMax: 372,
  titleSize: 53,

  head: `
.ci{position:absolute;left:452px;top:110px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:25px;font-weight:800;color:#EAF7EC}
.ci b{color:#A8E8AE}
.say{position:absolute;left:452px;top:296px;width:316px;z-index:3;border-radius:9px;
  border:1px solid rgba(67,160,71,.5);background:rgba(67,160,71,.11);padding:9px 12px}
.say .h{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;letter-spacing:.14em;color:#6E9C72}
.say .t{font-size:11px;line-height:1.45;color:#DCF2DE;margin-top:4px}
.say .t b{color:#A8E8AE}`,

  motif: `
<div class="ci">(<b>0.42</b>, <b>0.58</b>)</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- scale -->
  <path d="M470 226 H768" stroke="rgba(168,232,174,.35)" stroke-width="1.8"/>
  <g stroke="rgba(168,232,174,.35)" stroke-width="1.6">
    <path d="M500 220 V232"/><path d="M566 220 V232"/><path d="M632 220 V232"/><path d="M698 220 V232"/><path d="M764 220 V232"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#6E9C72" text-anchor="middle">
    <text x="500" y="248">0.30</text><text x="566" y="248">0.40</text><text x="632" y="248">0.50</text>
    <text x="698" y="248">0.60</text><text x="764" y="248">0.70</text>
  </g>

  <!-- the interval -->
  <path d="M579 196 H685" stroke="#43A047" stroke-width="9" stroke-linecap="round" opacity=".4"/>
  <path d="M579 196 H685" stroke="#A8E8AE" stroke-width="3" stroke-linecap="round"/>
  <g stroke="#A8E8AE" stroke-width="3" stroke-linecap="round">
    <path d="M579 186 V206"/><path d="M685 186 V206"/>
  </g>
  <!-- the point estimate -->
  <circle cx="632" cy="196" r="7" fill="#06280F" stroke="#EAF7EC" stroke-width="2.8"/>
  <text x="632" y="176" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#EAF7EC">p&#770; = 0.50</text>
  <text x="712" y="200" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#6E9C72">&#177; 0.08</text>
</svg>

<div class="say">
  <div class="h">WHAT EARNS THE POINT</div>
  <div class="t">"We are <b>95% confident</b> the true proportion of all voters lies between <b>0.42 and 0.58</b>."</div>
</div>`,
};
