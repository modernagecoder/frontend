// Python AI Automation — a scheduled job that scrapes, classifies and
// reports, running without anyone watching.
export default {
  bg: 'linear-gradient(120deg,#0C1638 0%,#070C21 54%,#02040D 100%)',
  a1: '#C2D3FF', a2: '#6E9BFF', a3: '#4470CC', a4: '#254383',
  glow: '110,155,255',
  sub: '#96A3C4',

  badge: 'COLLEGE & BEYOND',
  kicker: 'PYTHON AI AUTOMATION',
  title: 'Python AI<br><span class="ac">Automation</span>',
  tagline: 'Write it once, then stop doing it',
  meta: 'BOTS<i>·</i>SCRAPERS<i>·</i>AI STEPS<i>·</i>SCHEDULING',
  titleMax: 372,
  titleSize: 50,

  head: `
.cron{position:absolute;left:436px;top:98px;width:330px;z-index:3;display:flex;align-items:center;gap:10px;
  border-radius:9px;background:#0B1230;border:1px solid rgba(110,155,255,.5);padding:8px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#DCE5FF;
  box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 24px rgba(110,155,255,.2)}
.cron b{color:#6E9BFF}
.cron .t{margin-left:auto;font-size:9px;color:#7688B8;letter-spacing:.06em}
.steps{position:absolute;left:436px;top:154px;width:330px;z-index:2}
.sp{display:flex;align-items:center;gap:10px;border-radius:9px;background:#101838;
  border:1px solid rgba(110,155,255,.3);padding:9px 12px;margin-bottom:8px;box-shadow:0 10px 24px rgba(0,0,0,.5)}
.sp:last-child{margin-bottom:0}
.sp .i{width:22px;height:22px;border-radius:6px;flex:0 0 22px;display:flex;align-items:center;justify-content:center;
  background:rgba(110,155,255,.16);font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#C2D3FF}
.sp .n{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#E4EAFF}
.sp .o{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;color:#8FD8A0;font-weight:700}
.sp.ai{border-color:rgba(110,155,255,.6);background:#182452}
.done{position:absolute;left:436px;top:334px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:9.5px;font-weight:700;letter-spacing:.06em;color:#7688B8;
  border:1px solid rgba(118,136,184,.4);border-radius:7px;padding:5px 11px}
.done b{color:#8FD8A0}`,

  motif: `
<div class="cron"><b>cron</b> 0 8 * * * &nbsp;run daily<span class="t">NEXT 08:00</span></div>

<div class="steps">
  <div class="sp"><span class="i">1</span><span class="n">scrape 40 listings</span><span class="o">OK</span></div>
  <div class="sp ai"><span class="i">2</span><span class="n">AI: tag &amp; summarise each</span><span class="o">OK</span></div>
  <div class="sp"><span class="i">3</span><span class="n">write to sheet + email digest</span><span class="o">SENT</span></div>
</div>

<div class="done">RAN IN <b>12s</b> &#183; NOBODY WATCHING</div>`,
};
