// Frontend Coding — one layout, three breakpoints. Responsive shown, not said.
export default {
  bg: 'linear-gradient(120deg,#2B0D24 0%,#180716 54%,#070208 100%)',
  a1: '#FBB6D9', a2: '#EC4899', a3: '#BE2A73', a4: '#7A1748',
  glow: '236,72,153',
  sub: '#B08FA2',

  badge: 'TEENS 13-18',
  kicker: 'FRONTEND CODING',
  title: 'Frontend<br><span class="ac">Coding</span>',
  tagline: 'One layout that fits every screen',
  meta: 'HTML<i>·</i>CSS<i>·</i>JAVASCRIPT<i>·</i>RESPONSIVE',
  titleMax: 366,

  head: `
.dev{position:absolute;z-index:2;background:#FBF6F9;border-radius:9px;overflow:hidden;
  box-shadow:0 20px 44px rgba(0,0,0,.6)}
.dev .tb{background:#E8DAE2;padding:5px 7px;display:flex;gap:3px;align-items:center}
.dev .tb b{width:5px;height:5px;border-radius:50%;background:#C3A8B6}
.dev .bd{padding:8px}
.dev .hero{border-radius:5px;background:linear-gradient(135deg,#EC4899,#8B1E56);height:26px;margin-bottom:6px}
.dev .g{display:flex;gap:5px}
.dev .g i{flex:1;height:20px;border-radius:4px;background:#E3D3DB;font-style:normal}
.dev .l{height:4px;border-radius:2px;background:#E3D3DB;margin-top:6px}
.d1{left:432px;top:112px;width:186px}
.d2{left:632px;top:132px;width:80px}
.d3{left:726px;top:150px;width:48px}
.d3 .hero{height:16px}.d3 .g i{height:12px}
.bp{position:absolute;z-index:3;font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;
  letter-spacing:.12em;color:#B0708F}
.b1{left:432px;top:96px}.b2{left:632px;top:116px}.b3{left:726px;top:134px}
.q{position:absolute;left:432px;top:296px;z-index:3;border-radius:9px;background:#150512;
  border:1px solid rgba(236,72,153,.42);padding:9px 13px;font-family:'JetBrains Mono',monospace;
  font-size:11px;font-weight:600;white-space:nowrap;
  box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 24px rgba(236,72,153,.2)}
.q .at{color:#EC4899}.q .v{color:#F6E3EE}.q .n{color:#FFD08A}`,

  motif: `
<span class="bp b1">1440px</span>
<span class="bp b2">768px</span>
<span class="bp b3">390px</span>

<div class="dev d1">
  <div class="tb"><b></b><b></b><b></b></div>
  <div class="bd">
    <div class="hero"></div>
    <div class="g"><i></i><i></i><i></i></div>
    <div class="l" style="width:88%"></div>
    <div class="l" style="width:62%"></div>
  </div>
</div>

<div class="dev d2">
  <div class="tb"><b></b><b></b></div>
  <div class="bd">
    <div class="hero"></div>
    <div class="g"><i></i><i></i></div>
    <div class="l" style="width:84%"></div>
  </div>
</div>

<div class="dev d3">
  <div class="tb"><b></b></div>
  <div class="bd">
    <div class="hero"></div>
    <div class="g"><i></i></div>
    <div class="l" style="width:78%"></div>
  </div>
</div>

<div class="q">
  <span class="at">@media</span><span class="v"> (max-width: </span><span class="n">768px</span><span class="v">) {</span>
</div>`,
};
