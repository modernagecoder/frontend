// Competitive Programming for Teens — a judge verdict, which is the only
// scoreboard that matters in ZCO/INOI/USACO.
export default {
  bg: 'linear-gradient(120deg,#2C1606 0%,#190C03 54%,#070301 100%)',
  a1: '#FFC79A', a2: '#F97316', a3: '#C25708', a4: '#7A3604',
  glow: '249,115,22',
  sub: '#B3977E',

  badge: 'TEENS 13-18',
  kicker: 'OLYMPIAD ALGORITHMS',
  title: 'Competitive<br><span class="ac">Programming</span>',
  tagline: 'Contest algorithms for ZCO, INOI and USACO',
  meta: '24 WEEKS<i>·</i>C++ OR PYTHON<i>·</i>WEEKLY CONTESTS',
  titleMax: 372,
  titleSize: 47,

  head: `
.jd{position:absolute;left:436px;top:96px;width:328px;z-index:2;border-radius:11px;overflow:hidden;
  background:#0E0803;border:1px solid rgba(249,115,22,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(249,115,22,.16)}
.jd .hd{display:flex;align-items:center;gap:9px;padding:9px 12px;background:#1A0D04;
  border-bottom:1px solid rgba(255,255,255,.06)}
.jd .hd .pn{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:#FFE0C4}
.jd .hd .tag{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.1em;color:#9A7451}
.jd .rows{padding:4px 0}
.jd .r{display:flex;align-items:center;gap:10px;padding:6px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px}
.jd .r .t{width:56px;color:#9A7451}
.jd .r .v{font-weight:700;color:#7FE8A8;width:34px}
.jd .r .bar{flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}
.jd .r .bar i{display:block;height:100%;background:#4ADE80;font-style:normal}
.jd .r .ms{width:48px;text-align:right;color:#C9A883}
.jd .foot{display:flex;align-items:center;gap:9px;padding:9px 12px;background:#140A03;
  border-top:1px solid rgba(255,255,255,.06)}
.jd .foot .ac{border-radius:5px;background:rgba(74,222,128,.16);border:1px solid rgba(74,222,128,.5);
  padding:3px 9px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#7FE8A8;letter-spacing:.08em}
.jd .foot .cx{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:10px;color:#FFC79A}`,

  motif: `
<div class="jd">
  <div class="hd">
    <span class="pn">C. Sliding Window Maximum</span>
    <span class="tag">INOI PRACTICE</span>
  </div>
  <div class="rows">
    <div class="r"><span class="t">test 1</span><span class="v">AC</span><span class="bar"><i style="width:100%"></i></span><span class="ms">31 ms</span></div>
    <div class="r"><span class="t">test 2</span><span class="v">AC</span><span class="bar"><i style="width:100%"></i></span><span class="ms">44 ms</span></div>
    <div class="r"><span class="t">test 3</span><span class="v">AC</span><span class="bar"><i style="width:100%"></i></span><span class="ms">96 ms</span></div>
    <div class="r"><span class="t">test 4</span><span class="v">AC</span><span class="bar"><i style="width:100%"></i></span><span class="ms">118 ms</span></div>
  </div>
  <div class="foot">
    <span class="ac">ACCEPTED</span>
    <span class="cx">O(n) deque</span>
  </div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- the sliding window, which is the problem above -->
  <g>
    <rect x="452" y="316" width="34" height="34" rx="5" fill="#20120A" stroke="#5C3A1C" stroke-width="1.4"/>
    <rect x="492" y="316" width="34" height="34" rx="5" fill="#3A2008" stroke="#F97316" stroke-width="1.8"/>
    <rect x="532" y="316" width="34" height="34" rx="5" fill="#3A2008" stroke="#F97316" stroke-width="1.8"/>
    <rect x="572" y="316" width="34" height="34" rx="5" fill="#3A2008" stroke="#F97316" stroke-width="1.8"/>
    <rect x="612" y="316" width="34" height="34" rx="5" fill="#20120A" stroke="#5C3A1C" stroke-width="1.4"/>
    <rect x="652" y="316" width="34" height="34" rx="5" fill="#20120A" stroke="#5C3A1C" stroke-width="1.4"/>
    <rect x="692" y="316" width="34" height="34" rx="5" fill="#20120A" stroke="#5C3A1C" stroke-width="1.4"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="12" font-weight="700" text-anchor="middle" fill="#8A6A4A">
    <text x="469" y="338">3</text><text x="629" y="338">2</text><text x="669" y="338">8</text><text x="709" y="338">4</text>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="12" font-weight="700" text-anchor="middle" fill="#FFD9BC">
    <text x="509" y="338">9</text><text x="549" y="338">1</text><text x="589" y="338">7</text>
  </g>
  <path d="M492 306 H646" stroke="#F97316" stroke-width="1.6" stroke-dasharray="4 4" opacity=".7"/>
  <text x="600" y="300" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#C58B52">window &#8594;</text>
</svg>`,
};
