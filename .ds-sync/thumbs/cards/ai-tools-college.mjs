// AI Tools Mastery — the professional pattern: AI drafts, a human signs off.
export default {
  bg: 'linear-gradient(120deg,#141A22 0%,#0B0F15 54%,#040608 100%)',
  a1: '#D6E2EE', a2: '#9BB0C9', a3: '#6F87A3', a4: '#43566E',
  glow: '155,176,201',
  sub: '#93A3B4',

  badge: 'COLLEGE & BEYOND',
  kicker: 'AI TOOLS MASTERY',
  title: 'AI Tools<br><span class="ac">Mastery</span>',
  tagline: 'AI drafts it. You are still accountable.',
  meta: 'CHATGPT<i>·</i>PROMPTING<i>·</i>WORKFLOWS<i>·</i>REVIEW',
  titleMax: 372,
  titleSize: 53,

  head: `
.wf{position:absolute;left:436px;top:104px;width:330px;z-index:2}
.sp{display:flex;align-items:center;gap:11px;border-radius:9px;background:#151C25;
  border:1px solid rgba(155,176,201,.3);padding:9px 12px;margin-bottom:9px;box-shadow:0 12px 28px rgba(0,0,0,.55)}
.sp:last-child{margin-bottom:0}
.sp .ic{width:24px;height:24px;border-radius:7px;flex:0 0 24px;display:flex;align-items:center;justify-content:center;
  background:rgba(155,176,201,.14);font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#D6E2EE}
.sp .n{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#E6EDF4}
.sp .d{font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#7B8DA1;margin-top:2px;letter-spacing:.05em}
.sp .t{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;color:#7B8DA1}
.sp.ai{border-color:rgba(155,176,201,.55);background:#1B2531}
.sp.you{border-color:#8FD8A0;background:#12241A}
.sp.you .n{color:#C7EFD3}
.sp.you .t{color:#8FD8A0;font-weight:700}
.sp.you .ic{background:rgba(143,216,160,.16);color:#8FD8A0}
.saved{position:absolute;left:436px;top:326px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:8px;border:1px solid rgba(155,176,201,.42);background:rgba(155,176,201,.1);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.05em;color:#D6E2EE}
.saved b{color:#9BB0C9}`,

  motif: `
<div class="wf">
  <div class="sp"><span class="ic">1</span><span><span class="n">Brief</span><span class="d">WHAT GOOD LOOKS LIKE</span></span><span class="t">you</span></div>
  <div class="sp ai"><span class="ic">2</span><span><span class="n">AI draft</span><span class="d">3 VARIANTS, CITED</span></span><span class="t">40s</span></div>
  <div class="sp you"><span class="ic">&#10003;</span><span><span class="n">Your review</span><span class="d">FACTS CHECKED &#183; EDITED</span></span><span class="t">SIGNED OFF</span></div>
</div>

<div class="saved">DRAFTING <b>6&#215;</b> FASTER <span style="color:#6F87A3">&#183;</span> JUDGEMENT STILL YOURS</div>`,
};
