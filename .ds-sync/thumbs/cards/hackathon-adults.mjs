// Hackathon for Adults & Professionals — a build log across a weekend,
// ending in something demoable. Prep framing, no event or price claims.
export default {
  bg: 'linear-gradient(120deg,#141A38 0%,#0A0E21 54%,#03050D 100%)',
  a1: '#C4CEFF', a2: '#7C8CF8', a3: '#5461CC', a4: '#2F3982',
  glow: '124,140,248',
  sub: '#98A0C4',

  badge: 'PROFESSIONALS',
  kicker: 'HACKATHON PREP TRACK',
  title: 'Hackathon<br><span class="ac">for Professionals</span>',
  tagline: 'Scope it, build it, demo it. On the clock.',
  meta: 'RAPID PROTOTYPING<i>·</i>TEAM BUILD<i>·</i>DEMO CRAFT',
  titleMax: 372,
  titleSize: 44,

  head: `
.log{position:absolute;left:454px;top:106px;width:312px;z-index:2}
.ev{display:flex;align-items:flex-start;gap:12px;position:relative;padding-bottom:14px}
.ev:last-child{padding-bottom:0}
.ev .t{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:#6E76A8;width:42px;padding-top:2px;letter-spacing:.04em}
.ev .dot{width:11px;height:11px;border-radius:50%;background:#1B2150;border:2px solid #7C8CF8;flex:0 0 11px;margin-top:2px;z-index:2}
.ev .dot.hot{background:#7C8CF8;box-shadow:0 0 10px rgba(124,140,248,.8)}
.ev .m{display:block;font-family:'JetBrains Mono',monospace;font-size:10px;color:#E2E6FF;font-weight:700}
.ev .s{display:block;font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#6E76A8;margin-top:3px;letter-spacing:.04em}
.line{position:absolute;left:508px;top:118px;width:2px;height:196px;background:#2A3268;z-index:1}
.ship{position:absolute;left:454px;top:330px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:8px;border:1px solid rgba(124,140,248,.5);background:rgba(124,140,248,.13);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.06em;color:#C4CEFF}
.ship b{color:#8FD8A0}`,

  motif: `
<div class="line"></div>
<div class="log">
  <div class="ev"><span class="t">00:00</span><span class="dot"></span><span><span class="m">Scope cut to one job</span><span class="s">SAY NO TO THREE THINGS</span></span></div>
  <div class="ev"><span class="t">06:20</span><span class="dot"></span><span><span class="m">Ugly version working</span><span class="s">END TO END, NO POLISH</span></span></div>
  <div class="ev"><span class="t">19:40</span><span class="dot"></span><span><span class="m">Feature freeze</span><span class="s">BUGS ONLY FROM HERE</span></span></div>
  <div class="ev"><span class="t">28:10</span><span class="dot hot"></span><span><span class="m">Demo rehearsed twice</span><span class="s">90 SECONDS, NO SLIDES</span></span></div>
</div>

<div class="ship">DEMOABLE <b>&#10003;</b> <span style="color:#5461CC">&#183;</span> NOT JUST BUILT</div>`,
};
