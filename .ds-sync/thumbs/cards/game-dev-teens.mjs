// Game Development (teens) — Unity: a physics arc in the scene, the
// Rigidbody inspector that produced it.
export default {
  bg: 'linear-gradient(120deg,#2E1113 0%,#1A090B 54%,#080303 100%)',
  a1: '#FFB4AC', a2: '#EF4444', a3: '#C22525', a4: '#7C1414',
  glow: '239,68,68',
  sub: '#B4938F',

  badge: 'TEENS 13-18',
  kicker: 'GAME DEVELOPMENT',
  title: 'Game<br><span class="ac">Development</span>',
  tagline: 'Unity, physics and games people finish',
  meta: 'UNITY<i>·</i>GAME PHYSICS<i>·</i>LEVEL DESIGN',
  titleMax: 372,
  titleSize: 52,

  head: `
.insp{position:absolute;left:598px;top:130px;width:164px;z-index:3;border-radius:9px;overflow:hidden;
  background:#1F1416;border:1px solid rgba(239,68,68,.4);
  box-shadow:0 20px 44px rgba(0,0,0,.66),0 0 26px rgba(239,68,68,.2)}
.insp .t{background:#2C1B1D;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.12em;color:#C08A86;border-bottom:1px solid rgba(255,255,255,.06)}
.insp .sec{padding:7px 10px;border-bottom:1px solid rgba(255,255,255,.05)}
.insp .sec:last-child{border-bottom:none}
.insp .nm{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#FFE3E0;margin-bottom:4px}
.insp .r{display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:9px;
  color:#A98884;padding:1.5px 0}
.insp .r b{color:#FFB4AC;font-weight:700}
.insp .chk{display:flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:9px;color:#A98884}
.insp .chk i{width:9px;height:9px;border-radius:2px;background:#EF4444;font-style:normal;display:inline-block}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs>
    <filter id="gb" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="9"/></filter>
    <linearGradient id="grnd" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8A2B2B"/><stop offset="1" stop-color="#3A1112"/>
    </linearGradient>
  </defs>

  <!-- scene grid -->
  <g stroke="rgba(255,180,172,.14)" stroke-width="1">
    <path d="M424 356 H784"/><path d="M424 322 H784"/><path d="M424 288 H784"/>
    <path d="M462 262 V370"/><path d="M534 262 V370"/><path d="M606 262 V370"/><path d="M678 262 V370"/><path d="M750 262 V370"/>
  </g>

  <!-- ground -->
  <rect x="424" y="356" width="360" height="16" rx="4" fill="url(#grnd)"/>

  <!-- the trajectory a rigidbody takes -->
  <path d="M448 340 C 496 232 572 232 616 336" stroke="#EF4444" stroke-width="2.4" stroke-dasharray="4 7" fill="none" stroke-linecap="round" opacity=".9"/>
  <path d="M616 336 C 640 300 668 300 690 344" stroke="#EF4444" stroke-width="2.2" stroke-dasharray="4 7" fill="none" stroke-linecap="round" opacity=".45"/>

  <!-- ghost positions -->
  <circle cx="448" cy="340" r="8" fill="none" stroke="#EF4444" stroke-width="1.8" opacity=".45"/>
  <circle cx="532" cy="256" r="8" fill="none" stroke="#EF4444" stroke-width="1.8" opacity=".55"/>

  <!-- the ball, mid-bounce -->
  <g>
    <circle cx="616" cy="336" r="26" fill="#EF4444" opacity=".35" filter="url(#gb)"/>
    <circle cx="616" cy="336" r="13" fill="#FF6B5A"/>
    <circle cx="616" cy="336" r="13" fill="none" stroke="#FFB4AC" stroke-width="1.6"/>
    <circle cx="611" cy="331" r="3.6" fill="#FFD9D4" opacity=".9"/>
  </g>
  <!-- collision normal -->
  <path d="M616 352 L616 372" stroke="#FFB4AC" stroke-width="2" stroke-linecap="round" opacity=".75"/>
  <text x="626" y="370" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#B4837E">collision</text>
</svg>

<div class="insp">
  <div class="t">INSPECTOR</div>
  <div class="sec">
    <div class="nm">Transform</div>
    <div class="r"><span>Position X</span><b>4.2</b></div>
    <div class="r"><span>Position Y</span><b>1.8</b></div>
  </div>
  <div class="sec">
    <div class="nm">Rigidbody</div>
    <div class="r"><span>Mass</span><b>1.0</b></div>
    <div class="r"><span>Bounciness</span><b>0.8</b></div>
    <div class="chk" style="margin-top:5px"><i></i>Use Gravity</div>
  </div>
</div>`,
};
