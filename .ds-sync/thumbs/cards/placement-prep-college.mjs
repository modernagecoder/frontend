// Placement prep — the hiring loop itself, round by round.
export default {
  bg: 'linear-gradient(120deg,#2E1508 0%,#1A0C04 54%,#070301 100%)',
  a1: '#FFBE9E', a2: '#F26430', a3: '#C24314', a4: '#7C2A08',
  glow: '242,100,48',
  sub: '#B3968A',

  badge: 'COLLEGE & BEYOND',
  kicker: 'PLACEMENT & CONTEST PREP',
  title: 'Competitive<br><span class="ac">Programming</span>',
  tagline: 'Speed, accuracy, and the rounds that follow',
  meta: 'ADVANCED ALGORITHMS<i>·</i>MOCK INTERVIEWS',
  titleMax: 372,
  titleSize: 47,

  head: `
.loop{position:absolute;left:436px;top:104px;width:330px;z-index:2}
.rd{display:flex;align-items:center;gap:11px;border-radius:9px;background:#180B04;
  border:1px solid rgba(242,100,48,.32);padding:9px 12px;margin-bottom:8px;box-shadow:0 12px 28px rgba(0,0,0,.55)}
.rd:last-child{margin-bottom:0}
.rd .n{width:22px;height:22px;border-radius:6px;flex:0 0 22px;display:flex;align-items:center;justify-content:center;
  background:rgba(242,100,48,.16);font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;color:#FFBE9E}
.rd .t{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#F7E4DA}
.rd .d{font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#9A7462;margin-top:2px;letter-spacing:.05em}
.rd .s{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700}
.rd.pass{border-color:rgba(143,216,160,.45)}
.rd.pass .s{color:#8FD8A0}
.rd.pass .n{background:rgba(143,216,160,.16);color:#8FD8A0}
.rd.now{border-color:#F26430;background:#2E1207;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 22px rgba(242,100,48,.3)}
.rd.now .s{color:#FFBE9E}`,

  motif: `
<div class="loop">
  <div class="rd pass"><span class="n">&#10003;</span><span><span class="t">Online assessment</span><span class="d">2 PROBLEMS &#183; 90 MIN</span></span><span class="s">CLEARED</span></div>
  <div class="rd pass"><span class="n">&#10003;</span><span><span class="t">DSA round</span><span class="d">GRAPHS &#183; DP</span></span><span class="s">CLEARED</span></div>
  <div class="rd now"><span class="n">3</span><span><span class="t">System design</span><span class="d">SCALE A URL SHORTENER</span></span><span class="s">TODAY</span></div>
  <div class="rd"><span class="n">4</span><span><span class="t">Hiring manager</span><span class="d">PROJECTS &#183; TRADE-OFFS</span></span><span class="s">NEXT</span></div>
</div>`,
};
