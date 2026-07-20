// Microsoft Office Basics — the spreadsheet from the course description:
// tracking your own game scores, chart and all.
export default {
  bg: 'linear-gradient(120deg,#16212E 0%,#0C141D 54%,#04080C 100%)',
  a1: '#D6E6F5', a2: '#A9C0D8', a3: '#7794B2', a4: '#4A6B8C',
  glow: '169,192,216',
  sub: '#8FA1B4',

  badge: 'KIDS 6-12',
  kicker: 'PRODUCTIVITY COURSE',
  title: 'Microsoft<br><span class="ac">Office Basics</span>',
  tagline: 'Real projects in Word, PowerPoint and Excel',
  meta: '26 WEEKS<i>·</i>DOCS<i>·</i>SLIDES<i>·</i>SHEETS',
  titleMax: 372,
  titleSize: 50,

  head: `
.sheet{position:absolute;left:452px;top:104px;width:308px;z-index:2;border-radius:10px;overflow:hidden;
  background:#FCFBF9;box-shadow:0 24px 54px rgba(0,0,0,.64),0 0 30px rgba(169,192,216,.16)}
.sheet .hd{display:flex;align-items:center;gap:7px;background:#217346;padding:7px 10px}
.sheet .hd b{width:9px;height:9px;border-radius:2px;background:rgba(255,255,255,.85)}
.sheet .hd span{font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.06em;color:#fff}
.sheet table{width:100%;border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:9.5px}
.sheet td,.sheet th{border:1px solid #E2DED7;padding:4px 8px;text-align:left;color:#3A3A38}
.sheet th{background:#F1EEE9;color:#6E6A63;font-weight:700;font-size:8.5px;letter-spacing:.06em}
.sheet td.n{text-align:right;font-weight:700}
.sheet tr.sel td{background:#E4F0E9;box-shadow:inset 0 0 0 1.4px #217346}
.chart{display:flex;align-items:flex-end;gap:7px;height:56px;padding:9px 12px 11px;background:#FCFBF9;
  border-top:1px solid #EDE9E3}
.chart b{flex:1;border-radius:3px 3px 0 0;background:#5B9BD5}
.chart b.hi{background:#217346}
.tiles{position:absolute;left:452px;top:322px;display:flex;gap:8px;z-index:3}
.tiles span{display:flex;align-items:center;gap:6px;border-radius:7px;padding:5px 10px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#DCE7F2;
  background:rgba(255,255,255,.05);border:1px solid rgba(169,192,216,.28)}
.tiles i{width:9px;height:9px;border-radius:2px;font-style:normal}`,

  motif: `
<div class="sheet">
  <div class="hd"><b></b><span>game-scores.xlsx</span></div>
  <table>
    <tr><th>GAME</th><th>SCORE</th><th>BEST</th></tr>
    <tr><td>Maze Run</td><td class="n">1,240</td><td class="n">1,240</td></tr>
    <tr class="sel"><td>Sky Jump</td><td class="n">2,180</td><td class="n">2,180</td></tr>
    <tr><td>Robot Lab</td><td class="n">1,905</td><td class="n">2,010</td></tr>
  </table>
  <div class="chart"><b style="height:52%"></b><b class="hi" style="height:92%"></b><b style="height:78%"></b><b style="height:40%"></b><b style="height:66%"></b></div>
</div>

<div class="tiles">
  <span><i style="background:#2B579A"></i>Word</span>
  <span><i style="background:#D24726"></i>PowerPoint</span>
  <span><i style="background:#217346"></i>Excel</span>
</div>`,
};
