// Data Analysis — a pivot with the answer already found in it.
export default {
  bg: 'linear-gradient(120deg,#2A2408 0%,#171404 54%,#060501 100%)',
  a1: '#F2DE9A', a2: '#C9A227', a3: '#9A7A12', a4: '#5E4A08',
  glow: '201,162,39',
  sub: '#AFA684',

  badge: 'COLLEGE & BEYOND',
  kicker: 'DATA ANALYSIS',
  title: 'Data<br><span class="ac">Analysis</span>',
  tagline: 'Be the one who finds the answer',
  meta: 'EXCEL<i>·</i>PYTHON<i>·</i>SQL<i>·</i>STATISTICS',
  titleMax: 372,
  titleSize: 53,

  head: `
.pv{position:absolute;left:436px;top:100px;width:330px;z-index:2;border-radius:10px;overflow:hidden;
  background:#FCFAF3;box-shadow:0 24px 52px rgba(0,0,0,.64),0 0 30px rgba(201,162,39,.14)}
.pv .hd{padding:7px 12px;background:#EDE7D6;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.08em;color:#6E6448;border-bottom:1px solid #DED7C4}
.pv table{width:100%;border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:9.5px}
.pv th,.pv td{padding:5px 12px;text-align:right;color:#3A3628;border-top:1px solid #E8E2D2}
.pv th{background:#F5F1E6;color:#6E6448;font-size:8.5px;letter-spacing:.08em;font-weight:700;border-top:none}
.pv td:first-child,.pv th:first-child{text-align:left;color:#5C553F}
.pv tr.tot td{background:#F0EADA;font-weight:700;color:#2E2A1E}
.pv td.up{color:#1E7A4A;font-weight:700}
.pv td.dn{color:#B0392E;font-weight:700}
.pv tr.hi td{background:#FBF2CF;box-shadow:inset 0 0 0 1.4px #C9A227}
.ins{position:absolute;left:436px;top:322px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:8px;border:1px solid rgba(201,162,39,.5);background:rgba(201,162,39,.12);padding:7px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.04em;color:#F2DE9A}
.ins b{color:#C9A227}`,

  motif: `
<div class="pv">
  <div class="hd">PIVOT &#183; REVENUE BY REGION &#215; QUARTER</div>
  <table>
    <tr><th>REGION</th><th>Q1</th><th>Q2</th><th>CHANGE</th></tr>
    <tr><td>North</td><td>4.20</td><td>4.55</td><td class="up">+8%</td></tr>
    <tr class="hi"><td>West</td><td>6.80</td><td>4.90</td><td class="dn">-28%</td></tr>
    <tr><td>South</td><td>3.10</td><td>3.35</td><td class="up">+8%</td></tr>
    <tr class="tot"><td>Total</td><td>14.10</td><td>12.80</td><td class="dn">-9%</td></tr>
  </table>
</div>

<div class="ins"><b>&#9656;</b> THE DROP IS ALL WEST, NOT THE WHOLE BUSINESS</div>`,
};
