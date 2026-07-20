// MySQL (college) — schema design and query optimisation, so the card shows
// relationships and an EXPLAIN, not just a SELECT.
export default {
  bg: 'linear-gradient(120deg,#0E1A38 0%,#080F21 54%,#02040D 100%)',
  a1: '#B9CFFA', a2: '#5B8DEF', a3: '#3663C4', a4: '#1E3C82',
  glow: '91,141,239',
  sub: '#93A3C0',

  badge: 'COLLEGE & BEYOND',
  kicker: 'DATABASE ENGINEERING',
  title: 'MySQL<br><span class="ac">Database Design</span>',
  tagline: 'Design it, query it, then make it fast',
  meta: '52 WEEKS<i>·</i>SCHEMA DESIGN<i>·</i>INDEXES<i>·</i>TUNING',
  titleMax: 372,
  titleSize: 46,

  head: `
.tb{position:absolute;z-index:2;width:118px;border-radius:8px;overflow:hidden;background:#0D1730;
  border:1px solid rgba(91,141,239,.42);box-shadow:0 12px 28px rgba(0,0,0,.55)}
.tb .h{background:#16244A;padding:5px 9px;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.08em;color:#B9CFFA}
.tb .c{padding:5px 9px;font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#7E90B8;line-height:1.7}
.tb .c b{color:#DCE7FA;font-weight:700}
.t1{left:440px;top:104px}
.t2{left:614px;top:104px}
.t3{left:530px;top:212px;border-color:#5B8DEF;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 22px rgba(91,141,239,.28)}
.exp{position:absolute;left:440px;top:314px;width:326px;z-index:3;border-radius:9px;background:#0A1428;
  border:1px solid rgba(91,141,239,.45);padding:8px 12px;
  font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#8FA3C8;box-shadow:0 14px 32px rgba(0,0,0,.6)}
.exp .r{display:flex;gap:10px;align-items:center}
.exp .k{color:#5F7096}
.exp b{color:#8FD8A0}
.exp .bad{color:#FF9BA6;text-decoration:line-through}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="#39508C" stroke-width="1.8" fill="none">
    <path d="M498 190 C 498 210 560 202 570 212"/>
    <path d="M672 190 C 672 210 620 202 610 212"/>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="8" font-weight="700" fill="#6E80AC">
    <text x="506" y="206">1 : N</text>
    <text x="640" y="206">1 : N</text>
  </g>
</svg>

<div class="tb t1">
  <div class="h">users</div>
  <div class="c"><b>id</b> PK<br>email<br>city</div>
</div>
<div class="tb t2">
  <div class="h">games</div>
  <div class="c"><b>id</b> PK<br>title<br>genre</div>
</div>
<div class="tb t3">
  <div class="h">scores</div>
  <div class="c"><b>user_id</b> FK &#183; <b>game_id</b> FK<br>points &#183; played_at</div>
</div>

<div class="exp">
  <div class="r"><span class="k">EXPLAIN</span> type <b>ref</b> <span class="k">key</span> idx_user_game</div>
  <div class="r" style="margin-top:3px"><span class="k">rows scanned</span> <span class="bad">1,204,000</span> &#8594; <b>412</b></div>
</div>`,
};
