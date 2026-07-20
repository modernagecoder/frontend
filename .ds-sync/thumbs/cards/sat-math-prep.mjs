// SAT Math 800 — the digital SAT's own Desmos calculator is on screen, so
// the skill being taught is choosing the fastest route.
export default {
  bg: 'linear-gradient(120deg,#042730 0%,#02161B 54%,#00080B 100%)',
  a1: '#9DE7F0', a2: '#26C6DA', a3: '#0E96A8', a4: '#065C69',
  glow: '38,198,218',
  sub: '#84A6AD',

  badge: 'DIGITAL SAT',
  kicker: 'SAT MATH 800 PREP',
  title: 'SAT Math<br><span class="ac">800 Prep</span>',
  tagline: 'The fastest correct route, every time',
  meta: 'BOTH MODULES<i>·</i>DESMOS STRATEGY<i>·</i>TIMED SETS',
  titleMax: 372,
  titleSize: 51,

  head: `
.qq{position:absolute;left:436px;top:100px;width:330px;z-index:3;border-radius:9px;background:#03181D;
  border:1px solid rgba(38,198,218,.4);padding:9px 12px;box-shadow:0 16px 36px rgba(0,0,0,.6)}
.qq .n{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.1em;color:#5E8F99}
.qq .t{font-family:'Fraunces',Georgia,serif;font-size:17px;font-weight:800;color:#E4F6F9;margin-top:4px}
.two{position:absolute;left:436px;top:186px;width:330px;z-index:3;display:flex;gap:9px}
.two .w{flex:1;border-radius:9px;border:1px solid rgba(38,198,218,.3);background:#03181D;padding:8px 10px}
.two .w.fast{border-color:#26C6DA;background:#06303A;box-shadow:0 0 20px rgba(38,198,218,.24)}
.two .h{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;letter-spacing:.1em;color:#5E8F99}
.two .b{font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#C4E7ED;margin-top:5px;line-height:1.6}
.two .tm{margin-top:6px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700}
.two .w .tm{color:#8A9EA2}
.two .w.fast .tm{color:#8FD8A0}
.ansr{position:absolute;left:436px;top:326px;z-index:3;display:flex;align-items:center;gap:10px;
  font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.05em;color:#9DE7F0}
.ansr span{border-radius:7px;border:1px solid rgba(38,198,218,.5);background:rgba(38,198,218,.12);padding:5px 11px}
.ansr b{color:#E4F6F9;font-family:'Fraunces',Georgia,serif;font-size:16px}`,

  motif: `
<div class="qq">
  <div class="n">MODULE 2 &#183; ALGEBRA</div>
  <div class="t">3x + 2y = 18 &nbsp; x &#8722; y = 1</div>
</div>

<div class="two">
  <div class="w">
    <div class="h">BY HAND</div>
    <div class="b">substitute, expand,<br>solve, back-substitute</div>
    <div class="tm">~90s</div>
  </div>
  <div class="w fast">
    <div class="h">BUILT-IN DESMOS</div>
    <div class="b">type both lines,<br>read the intersection</div>
    <div class="tm">~15s</div>
  </div>
</div>

<div class="ansr"><span>x = <b>4</b></span><span>y = <b>3</b></span></div>`,
};
