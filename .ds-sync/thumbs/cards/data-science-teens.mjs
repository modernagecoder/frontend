// Data Science for Teens — a real pandas frame and the chart drawn from it.
export default {
  bg: 'linear-gradient(120deg,#2A2008 0%,#181204 54%,#070501 100%)',
  a1: '#FCD98A', a2: '#F59E0B', a3: '#C27A05', a4: '#7A4C02',
  glow: '245,158,11',
  sub: '#B3A386',

  badge: 'AGES 14-18',
  kicker: 'DATA SCIENCE COURSE',
  title: 'Data Science<br><span class="ac">for Teens</span>',
  tagline: 'Python, pandas and datasets that are real',
  meta: '24 WEEKS<i>·</i>REAL DATA<i>·</i>FIRST ML MODEL',
  titleMax: 366,
  titleSize: 50,

  head: `
.dfp{position:absolute;left:436px;top:96px;width:328px;z-index:2;border-radius:11px;overflow:hidden;
  background:#0E0B04;border:1px solid rgba(245,158,11,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.64),0 0 30px rgba(245,158,11,.16)}
.dfp .cm{padding:8px 12px;background:#191204;font-family:'JetBrains Mono',monospace;font-size:10.5px;
  border-bottom:1px solid rgba(255,255,255,.06)}
.dfp .cm .p{color:#7A6A46}.dfp .cm .f{color:#F59E0B}.dfp .cm .v{color:#F2E9D6}
.dfp table{width:100%;border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:10px}
.dfp th,.dfp td{padding:4px 12px;text-align:right;color:#E8DCC4}
.dfp th{color:#8A7752;font-size:8.5px;letter-spacing:.1em;font-weight:700;border-bottom:1px solid rgba(255,255,255,.08)}
.dfp td:first-child,.dfp th:first-child{text-align:left;color:#C9B78F}
.dfp tr td{border-bottom:1px solid rgba(255,255,255,.04)}`,

  motif: `
<div class="dfp">
  <div class="cm"><span class="p">&gt;&gt;&gt; </span><span class="v">df.</span><span class="f">groupby</span><span class="v">(</span><span class="p">"city"</span><span class="v">).mean()</span></div>
  <table>
    <tr><th>CITY</th><th>RAINFALL</th><th>TEMP</th></tr>
    <tr><td>Chennai</td><td>140.2</td><td>31.4</td></tr>
    <tr><td>Mumbai</td><td>242.7</td><td>29.8</td></tr>
    <tr><td>Delhi</td><td>78.5</td><td>26.1</td></tr>
  </table>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs>
    <linearGradient id="barG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FCD98A"/><stop offset="1" stop-color="#B8730A"/>
    </linearGradient>
  </defs>
  <!-- axis -->
  <path d="M448 356 H768" stroke="rgba(245,158,11,.35)" stroke-width="1.6"/>
  <path d="M448 262 H768" stroke="rgba(255,255,255,.07)" stroke-width="1"/>
  <path d="M448 310 H768" stroke="rgba(255,255,255,.07)" stroke-width="1"/>
  <!-- bars from the frame above -->
  <g>
    <rect x="474" y="278" width="46" height="78" rx="4" fill="url(#barG)"/>
    <rect x="562" y="240" width="46" height="116" rx="4" fill="url(#barG)"/>
    <rect x="650" y="312" width="46" height="44" rx="4" fill="url(#barG)"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#8A7752" text-anchor="middle">
    <text x="497" y="372">CHENNAI</text>
    <text x="585" y="372">MUMBAI</text>
    <text x="673" y="372">DELHI</text>
  </g>
  <text x="448" y="252" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#8A7752">mm</text>
</svg>`,
};
