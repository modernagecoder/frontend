// Backend Coding — one real request and the response it gets back.
export default {
  bg: 'linear-gradient(120deg,#0A2618 0%,#05160E 54%,#010805 100%)',
  a1: '#A7F3C4', a2: '#22C55E', a3: '#12924A', a4: '#0A5A2E',
  glow: '34,197,94',
  sub: '#8AA895',

  badge: 'TEENS 13-18',
  kicker: 'BACKEND CODING',
  title: 'Backend<br><span class="ac">Coding</span>',
  tagline: 'The engine behind every app you use',
  meta: 'NODE + EXPRESS<i>·</i>APIs<i>·</i>DATABASES',
  titleMax: 366,

  head: `
.req,.res{position:absolute;z-index:2;width:314px;border-radius:11px;overflow:hidden;
  background:#07160E;border:1px solid rgba(34,197,94,.34);
  box-shadow:0 20px 44px rgba(0,0,0,.62),0 0 28px rgba(34,197,94,.14)}
.req{left:446px;top:96px}
.res{left:446px;top:214px;border-color:rgba(34,197,94,.55);box-shadow:0 22px 48px rgba(0,0,0,.64),0 0 30px rgba(34,197,94,.26)}
.hd{display:flex;align-items:center;gap:9px;padding:8px 12px;background:#0C2317;border-bottom:1px solid rgba(255,255,255,.06)}
.hd .m{border-radius:5px;padding:2px 8px;font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.06em}
.hd .p{font-family:'JetBrains Mono',monospace;font-size:11px;color:#DCF5E6}
.hd .st{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#6FA684}
.bdy{padding:9px 13px 11px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;white-space:nowrap}
.k{color:#7FD4A0}.s{color:#DCF5E6}.n{color:#FFD08A}.p2{color:#5E8A6E}`,

  motif: `
<div class="req">
  <div class="hd">
    <span class="m" style="background:rgba(34,197,94,.2);color:#7FE8A8">GET</span>
    <span class="p">/api/players/12</span>
  </div>
  <div class="bdy">
    <div><span class="p2">Authorization: </span><span class="s">Bearer &#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</span></div>
  </div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <path d="M602 168 L602 206" stroke="#22C55E" stroke-width="2.2" stroke-dasharray="4 5" stroke-linecap="round"/>
  <path d="M602 206 L596 197 M602 206 L608 197" stroke="#22C55E" stroke-width="2.2" stroke-linecap="round" fill="none"/>
</svg>

<div class="res">
  <div class="hd">
    <span class="m" style="background:rgba(34,197,94,.28);color:#A7F3C4">200 OK</span>
    <span class="p">application/json</span>
    <span class="st">31ms</span>
  </div>
  <div class="bdy">
    <div><span class="p2">{</span></div>
    <div><span class="p2">&nbsp;&nbsp;</span><span class="k">"name"</span><span class="p2">: </span><span class="s">"Aarav"</span><span class="p2">,</span></div>
    <div><span class="p2">&nbsp;&nbsp;</span><span class="k">"level"</span><span class="p2">: </span><span class="n">14</span><span class="p2">,</span></div>
    <div><span class="p2">&nbsp;&nbsp;</span><span class="k">"streak"</span><span class="p2">: </span><span class="n">7</span></div>
    <div><span class="p2">}</span></div>
  </div>
</div>`,
};
