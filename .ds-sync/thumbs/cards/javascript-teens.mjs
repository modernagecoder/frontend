// JavaScript for Teens — the listener, and the page element it is driving.
export default {
  bg: 'linear-gradient(120deg,#23200A 0%,#141206 54%,#060501 100%)',
  a1: '#FFF07A', a2: '#F7DF1E', a3: '#C9B300', a4: '#7E7000',
  glow: '247,223,30',
  sub: '#B0AA82',

  badge: 'TEENS 13-18',
  kicker: 'JAVASCRIPT COURSE',
  title: 'JavaScript<br><span class="ac">for Teens</span>',
  tagline: 'Make a page actually do something',
  meta: 'DOM & EVENTS<i>·</i>BROWSER GAMES<i>·</i>LIVE CLASSES',
  titleMax: 366,
  titleSize: 52,

  head: `
.js{position:absolute;left:426px;top:100px;width:330px;z-index:2;border-radius:12px;overflow:hidden;
  background:#0D0C06;border:1px solid rgba(247,223,30,.34);
  box-shadow:0 24px 54px rgba(0,0,0,.66),0 0 32px rgba(247,223,30,.16)}
.js .bar{display:flex;align-items:center;gap:8px;padding:7px 11px;background:#181607;border-bottom:1px solid rgba(255,255,255,.06)}
.js .bar i{width:15px;height:15px;border-radius:3px;background:#F7DF1E;color:#0D0C06;font-style:normal;
  font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 2px 1px 0}
.js .bar span{font-family:'JetBrains Mono',monospace;font-size:10px;color:#8A8258}
.js .co{padding:11px 14px 13px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.78;
  white-space:nowrap;font-weight:500}
.kw{color:#FF9BA6}.fn{color:#F7DF1E}.nm{color:#EFEBD8}.st{color:#9FD98A}.no{color:#7FC4E8}.cm{color:#6B6647}
.live{position:absolute;left:520px;top:266px;width:236px;z-index:3;border-radius:12px;background:#FBFAF4;
  padding:15px 16px 16px;box-shadow:0 22px 48px rgba(0,0,0,.62),0 0 30px rgba(247,223,30,.2)}
.live .lbl{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;letter-spacing:.16em;color:#A39B6E}
.live .btn{margin-top:8px;background:#F7DF1E;border-radius:8px;padding:9px 0;text-align:center;
  font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:#1A1704;
  box-shadow:0 4px 0 #C9B300}
.live .cnt{margin-top:9px;text-align:center;font-family:'Fraunces',Georgia,serif;font-size:15px;
  font-weight:700;color:#2A2716}
.live .cnt b{color:#B39B00}`,

  motif: `
<div class="js">
  <div class="bar"><i>JS</i><span>game.js</span></div>
  <div class="co">
    <div><span class="kw">let</span><span class="nm"> score = </span><span class="no">0</span><span class="nm">;</span></div>
    <div>&nbsp;</div>
    <div><span class="nm">btn.</span><span class="fn">addEventListener</span><span class="nm">(</span><span class="st">"click"</span><span class="nm">, () =&gt; {</span></div>
    <div><span class="nm">&nbsp;&nbsp;score++;</span></div>
    <div><span class="nm">&nbsp;&nbsp;out.textContent = </span><span class="st">"Score: "</span><span class="nm"> + score;</span></div>
    <div><span class="nm">});</span></div>
  </div>
</div>

<div class="live">
  <div class="lbl">IN THE BROWSER</div>
  <div class="btn">Click me</div>
  <div class="cnt">Score: <b>7</b></div>
</div>`,
};
