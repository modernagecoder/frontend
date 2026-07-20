// MySQL Database — a query and the rows it returns.
export default {
  bg: 'linear-gradient(120deg,#04262E 0%,#02161B 54%,#00080A 100%)',
  a1: '#9DE4F2', a2: '#00A3C4', a3: '#04788F', a4: '#034A59',
  glow: '0,163,196',
  sub: '#84A5AD',

  badge: 'TEENS 13-18',
  kicker: 'DATABASE COURSE',
  title: 'MySQL<br><span class="ac">Database</span>',
  tagline: 'Every app needs one. Build it right.',
  meta: 'SQL QUERIES<i>·</i>JOINS<i>·</i>REAL SCHEMAS',
  titleMax: 366,

  head: `
.sql{position:absolute;left:436px;top:98px;width:328px;z-index:2;border-radius:11px;overflow:hidden;
  background:#03181D;border:1px solid rgba(0,163,196,.4);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(0,163,196,.18)}
.sql .q{padding:11px 13px;font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1.72;
  border-bottom:1px solid rgba(255,255,255,.07);white-space:nowrap}
.kw{color:#FF9BC4;font-weight:700}.fn{color:#9DE4F2}.nm{color:#DFF2F6}.st{color:#FFD08A}
.sql table{width:100%;border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:10px}
.sql th,.sql td{padding:4px 13px;text-align:left;color:#DBECF0}
.sql th{color:#5E8E99;font-size:8.5px;letter-spacing:.12em;font-weight:700;background:#052229}
.sql td{border-top:1px solid rgba(255,255,255,.05)}
.sql td.n{text-align:right;color:#9DE4F2;font-weight:700}
.sql .ft{padding:6px 13px;background:#021216;font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#4E7C86;
  border-top:1px solid rgba(255,255,255,.06)}`,

  motif: `
<div class="sql">
  <div class="q">
    <div><span class="kw">SELECT</span><span class="nm"> city, </span><span class="fn">COUNT</span><span class="nm">(*) </span><span class="kw">AS</span><span class="nm"> players</span></div>
    <div><span class="kw">FROM</span><span class="nm"> scores </span><span class="kw">GROUP BY</span><span class="nm"> city</span></div>
    <div><span class="kw">ORDER BY</span><span class="nm"> players </span><span class="kw">DESC</span><span class="nm">;</span></div>
  </div>
  <table>
    <tr><th>CITY</th><th style="text-align:right">PLAYERS</th></tr>
    <tr><td>Mumbai</td><td class="n">1,204</td></tr>
    <tr><td>Chennai</td><td class="n">870</td></tr>
    <tr><td>Kolkata</td><td class="n">655</td></tr>
  </table>
  <div class="ft">3 rows in set (0.004 sec)</div>
</div>`,
};
