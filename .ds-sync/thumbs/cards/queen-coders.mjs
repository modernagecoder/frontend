// Queen Coders — the middle tier: you stop writing features and start
// drawing the system they run on.
export default {
  bg: 'linear-gradient(120deg,#141A38 0%,#0B0F21 54%,#04050D 100%)',
  a1: '#C7CEFF', a2: '#818CF8', a3: '#5A63D6', a4: '#333A8E',
  glow: '129,140,248',
  sub: '#98A0C4',

  badge: 'GIRLS · INTERMEDIATE',
  kicker: 'GIRLS IN TECH · TIER 2',
  title: 'Queen<br><span class="ac">Coders</span>',
  tagline: 'Design the system, not just the screen',
  meta: 'CLOUD<i>·</i>AI<i>·</i>SYSTEM DESIGN<i>·</i>MENTORSHIP',
  titleMax: 366,

  head: `
.nd{position:absolute;z-index:2;border-radius:9px;background:#111634;border:1px solid rgba(129,140,248,.42);
  padding:7px 10px;box-shadow:0 14px 32px rgba(0,0,0,.55)}
.nd .t{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.08em;color:#E4E7FF}
.nd .s{font-family:'JetBrains Mono',monospace;font-size:7.5px;letter-spacing:.1em;color:#6E76A8;margin-top:2px}
.nd.hot{border-color:#818CF8;background:#1B2150;box-shadow:0 16px 36px rgba(0,0,0,.6),0 0 22px rgba(129,140,248,.32)}
.n1{left:436px;top:132px;width:104px}
.n2{left:588px;top:106px;width:104px}
.n3{left:588px;top:186px;width:104px}
.n4{left:588px;top:266px;width:104px}
.n5{left:712px;top:186px;width:64px}
.sla{position:absolute;left:436px;top:326px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:8px;border:1px solid rgba(129,140,248,.5);background:rgba(129,140,248,.13);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.06em;color:#C7CEFF}
.sla b{color:#8FD8A0}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="#39407A" stroke-width="2" fill="none">
    <path d="M540 152 C 566 152 562 128 588 128"/>
    <path d="M540 152 C 566 152 566 208 588 208"/>
    <path d="M540 152 C 566 152 562 288 588 288"/>
    <path d="M692 128 C 706 128 700 200 712 200"/>
    <path d="M692 208 H712"/>
    <path d="M692 288 C 706 288 700 216 712 216"/>
  </g>
  <g stroke="#818CF8" stroke-width="2.6" fill="none">
    <path d="M540 152 C 566 152 566 208 588 208"/>
    <path d="M692 208 H712"/>
  </g>
</svg>

<div class="nd n1"><div class="t">API GATEWAY</div><div class="s">EDGE</div></div>
<div class="nd n2"><div class="t">AUTH</div><div class="s">SERVICE</div></div>
<div class="nd n3 hot"><div class="t">INFERENCE</div><div class="s">GPU POOL</div></div>
<div class="nd n4"><div class="t">BILLING</div><div class="s">SERVICE</div></div>
<div class="nd n5"><div class="t">STORE</div><div class="s">DB</div></div>

<div class="sla">UPTIME <b>99.9%</b> <span style="color:#5A63D6">&#183;</span> AUTOSCALING ON</div>`,
};
