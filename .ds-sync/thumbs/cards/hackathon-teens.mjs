// Hackathon for Teens — the sprint board a team actually works from.
// Prep track framing only: no live-event or price claims.
export default {
  bg: 'linear-gradient(120deg,#062832 0%,#03161C 54%,#00080B 100%)',
  a1: '#A8EFFA', a2: '#22D3EE', a3: '#0E9BB8', a4: '#075E70',
  glow: '34,211,238',
  sub: '#86A6AE',

  badge: 'TEENS 13-18',
  kicker: 'HACKATHON PREP TRACK',
  title: 'Hackathon<br><span class="ac">for Teens</span>',
  tagline: 'Twelve weeks from idea to a working demo',
  meta: 'TEAM CODING<i>·</i>AI PROJECTS<i>·</i>PITCHING',
  titleMax: 366,
  titleSize: 53,

  head: `
.brd{position:absolute;left:432px;top:100px;width:334px;z-index:2;display:flex;gap:9px}
.col{flex:1;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(34,211,238,.24);padding:8px 8px 10px}
.col .h{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;letter-spacing:.14em;
  color:#5E8E99;margin-bottom:7px;display:flex;justify-content:space-between}
.col .h b{color:#22D3EE}
.tk{border-radius:7px;background:#08252D;border:1px solid rgba(34,211,238,.3);padding:6px 8px;margin-bottom:6px}
.tk:last-child{margin-bottom:0}
.tk .t{font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;color:#D6F4F9;line-height:1.35}
.tk .m{height:3px;border-radius:2px;background:rgba(34,211,238,.35);margin-top:5px}
.tk.now{border-color:#22D3EE;background:#0B3540;box-shadow:0 8px 20px rgba(0,0,0,.5),0 0 18px rgba(34,211,238,.3);
  transform:rotate(-2deg)}
.tk.done .t{color:#6E9AA3}
.done-ck{color:#22D3EE;margin-right:4px}
.wk{position:absolute;left:432px;top:298px;z-index:3;display:flex;align-items:center;gap:9px;width:334px}
.wk .bar{flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,.09);overflow:hidden}
.wk .bar i{display:block;height:100%;width:75%;border-radius:4px;background:linear-gradient(90deg,#0E9BB8,#A8EFFA);font-style:normal}
.wk .lb{font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.1em;color:#7FBFCB}`,

  motif: `
<div class="brd">
  <div class="col">
    <div class="h"><span>IDEA</span><b>2</b></div>
    <div class="tk done"><div class="t"><span class="done-ck">&#10003;</span>Pick a problem</div></div>
    <div class="tk done"><div class="t"><span class="done-ck">&#10003;</span>Sketch screens</div></div>
  </div>
  <div class="col">
    <div class="h"><span>BUILD</span><b>3</b></div>
    <div class="tk now"><div class="t">Wire the AI model</div><div class="m" style="width:70%"></div></div>
    <div class="tk"><div class="t">Score screen</div><div class="m" style="width:40%"></div></div>
    <div class="tk"><div class="t">Fix login bug</div><div class="m" style="width:20%"></div></div>
  </div>
  <div class="col">
    <div class="h"><span>DEMO</span><b>1</b></div>
    <div class="tk"><div class="t">90-second pitch</div><div class="m" style="width:15%"></div></div>
  </div>
</div>

<div class="wk">
  <span class="lb">WEEK 9</span>
  <span class="bar"><i></i></span>
  <span class="lb">OF 12</span>
</div>`,
};
