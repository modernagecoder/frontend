// Data & AI Analytics (No Coding) — a dashboard assembled by dragging
// fields, and a question asked in plain English.
export default {
  bg: 'linear-gradient(120deg,#042535 0%,#021620 54%,#00080C 100%)',
  a1: '#9BD9F5', a2: '#0288D1', a3: '#0166A0', a4: '#013F66',
  glow: '2,136,209',
  sub: '#84A2B3',

  badge: 'PROFESSIONAL',
  kicker: 'DATA & AI, NO CODING',
  title: 'Data & AI<br><span class="ac">Analytics</span>',
  tagline: 'Answers from your data, without writing code',
  meta: 'NO CODE<i>·</i>DASHBOARDS<i>·</i>AI QUESTIONS',
  titleMax: 372,
  titleSize: 50,

  head: `
.fields{position:absolute;left:430px;top:106px;width:106px;z-index:3}
.fields .h{font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;letter-spacing:.14em;
  color:#5E8A9E;margin-bottom:6px}
.fields .f{border-radius:6px;background:#05202D;border:1px solid rgba(2,136,209,.36);padding:5px 8px;
  margin-bottom:5px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:#C4E4F5}
.fields .f.drag{border-color:#9BD9F5;background:#0A3A52;transform:rotate(-3deg);
  box-shadow:0 8px 20px rgba(0,0,0,.6),0 0 16px rgba(2,136,209,.34)}
.dash{position:absolute;left:558px;top:100px;width:208px;z-index:2;border-radius:10px;overflow:hidden;
  background:#F5FAFD;box-shadow:0 22px 48px rgba(0,0,0,.64)}
.dash .t{padding:7px 10px;background:#E4EEF4;font-family:'JetBrains Mono',monospace;font-size:8.5px;
  font-weight:700;letter-spacing:.08em;color:#5E7A8A}
.dash .b{padding:10px}
.dash .kpi{font-family:'Fraunces',Georgia,serif;font-size:26px;font-weight:800;color:#0B2634;line-height:1}
.dash .kc{font-family:'JetBrains Mono',monospace;font-size:7.5px;letter-spacing:.1em;color:#6E8898;margin-top:2px}
.dash .bars{display:flex;align-items:flex-end;gap:5px;height:42px;margin-top:9px}
.dash .bars i{flex:1;border-radius:3px 3px 0 0;background:#0288D1;font-style:normal}
.ask{position:absolute;left:430px;top:314px;width:336px;z-index:3;border-radius:9px;background:#05202D;
  border:1px solid rgba(2,136,209,.5);padding:8px 12px;box-shadow:0 14px 32px rgba(0,0,0,.6)}
.ask .q{font-family:'JetBrains Mono',monospace;font-size:10px;color:#DCEEF7}
.ask .a{font-family:'JetBrains Mono',monospace;font-size:10px;color:#8FD8A0;font-weight:700;margin-top:4px}`,

  motif: `
<div class="fields">
  <div class="h">FIELDS</div>
  <div class="f">region</div>
  <div class="f drag">revenue</div>
  <div class="f">quarter</div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <path d="M540 168 C 552 168 548 186 560 190" stroke="#0288D1" stroke-width="2" stroke-dasharray="4 4" fill="none" stroke-linecap="round"/>
  <path d="M560 190 L551 186 M560 190 L552 196" stroke="#0288D1" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>

<div class="dash">
  <div class="t">REVENUE BY QUARTER</div>
  <div class="b">
    <div class="kpi">&#8377;12.8L</div>
    <div class="kc">THIS QUARTER</div>
    <div class="bars"><i style="height:52%"></i><i style="height:74%"></i><i style="height:44%"></i><i style="height:92%"></i></div>
  </div>
</div>

<div class="ask">
  <div class="q">&#8220;why did west drop last quarter?&#8221;</div>
  <div class="a">&#8594; two accounts churned in March</div>
</div>`,
};
