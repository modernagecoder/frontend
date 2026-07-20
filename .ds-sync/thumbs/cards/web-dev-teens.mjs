// Full Stack Web Development — the whole stack in one picture: browser,
// server, database, and the round trip between them.
export default {
  bg: 'linear-gradient(120deg,#08262A 0%,#04161A 54%,#010809 100%)',
  a1: '#9DF0E4', a2: '#14B8A6', a3: '#0C8577', a4: '#07534A',
  glow: '20,184,166',
  sub: '#87A5A2',

  badge: 'TEENS 13-18',
  kicker: 'FULL STACK COURSE',
  title: 'Full Stack<br><span class="ac">Web Dev</span>',
  tagline: 'Front-end, back-end, database. All of it.',
  meta: 'HTML/CSS/JS<i>·</i>APIs<i>·</i>DATABASES<i>·</i>DEPLOY',
  titleMax: 372,
  titleSize: 53,

  head: `
.lay{position:absolute;z-index:2;left:466px;width:288px;border-radius:11px;overflow:hidden;
  box-shadow:0 18px 40px rgba(0,0,0,.6)}
.l1{top:88px;background:#F5FAF9;border:1px solid rgba(20,184,166,.4)}
.l1 .cr{display:flex;gap:5px;align-items:center;padding:6px 9px;background:#E3EDEB}
.l1 .cr b{width:7px;height:7px;border-radius:50%;background:#B9C9C6}
.l1 .cr span{margin-left:5px;flex:1;background:#fff;border-radius:4px;padding:2px 7px;
  font-family:'JetBrains Mono',monospace;font-size:8px;color:#8FA5A2}
.l1 .bd{padding:9px 11px 11px}
.l1 .hh{font-family:'Fraunces',Georgia,serif;font-size:15px;font-weight:800;color:#123}
.l1 .ll{height:5px;border-radius:3px;background:#D5E2E0;margin-top:5px}
.l2{top:196px;background:#0A2E31;border:1px solid rgba(20,184,166,.55);padding:10px 12px}
.l2 .t{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.16em;color:#5FA79D}
.l2 .c{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#D6F5F0;margin-top:5px;white-space:nowrap}
.l2 .c b{color:#9DF0E4}
.l3{top:290px;background:#0A2E31;border:1px solid rgba(20,184,166,.4);padding:10px 12px;display:flex;align-items:center;gap:11px}
.l3 .t{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.16em;color:#5FA79D}
.l3 .rows{flex:1}
.l3 .r{height:5px;border-radius:3px;background:#14B8A6;opacity:.7;margin-bottom:4px}
.tagl{position:absolute;z-index:3;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;
  letter-spacing:.14em;color:#5FA79D}
.t1{left:410px;top:120px}.t2{left:410px;top:214px}.t3{left:410px;top:306px}`,

  motif: `
<span class="tagl t1">BROWSER</span>
<span class="tagl t2">SERVER</span>
<span class="tagl t3">DATABASE</span>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="#14B8A6" stroke-width="2" stroke-dasharray="4 5" opacity=".8">
    <path d="M760 156 C 782 156 782 196 760 196"/>
    <path d="M760 254 C 782 254 782 292 760 292"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#5FA79D">
    <text x="786" y="180" text-anchor="end" opacity=".9">GET</text>
    <text x="786" y="278" text-anchor="end" opacity=".9">SQL</text>
  </g>
</svg>

<div class="lay l1">
  <div class="cr"><b></b><b></b><b></b><span>yoursite.com</span></div>
  <div class="bd">
    <div class="hh">Your app</div>
    <div class="ll" style="width:90%"></div>
    <div class="ll" style="width:62%"></div>
  </div>
</div>

<div class="lay l2">
  <div class="t">API ROUTE</div>
  <div class="c">app.<b>get</b>("/posts", <b>async</b> (req, res) =&gt; {</div>
</div>

<div class="lay l3">
  <div class="t">POSTS</div>
  <div class="rows">
    <div class="r" style="width:100%"></div>
    <div class="r" style="width:78%"></div>
    <div class="r" style="width:88%;margin-bottom:0"></div>
  </div>
</div>`,
};
