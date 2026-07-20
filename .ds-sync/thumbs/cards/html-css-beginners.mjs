// HTML & CSS for Beginners — semantic structure made visible, which is the
// difference between this and the kids "first website" card.
export default {
  bg: 'linear-gradient(120deg,#2E1408 0%,#1A0B04 54%,#070301 100%)',
  a1: '#FFB894', a2: '#E34F26', a3: '#B53A18', a4: '#73230D',
  glow: '227,79,38',
  sub: '#B3948A',

  badge: 'AGES 10+',
  kicker: 'HTML & CSS COURSE',
  title: 'HTML & CSS<br><span class="ac">for Beginners</span>',
  tagline: 'Semantic markup and modern layout, from a blank file',
  meta: '16 WEEKS<i>·</i>SEMANTIC HTML<i>·</i>CSS GRID',
  titleMax: 372,
  titleSize: 45,

  head: `
.doc{position:absolute;left:448px;top:100px;width:306px;z-index:2;border-radius:10px;overflow:hidden;
  background:#130803;border:1px solid rgba(227,79,38,.4);padding:12px;
  box-shadow:0 24px 52px rgba(0,0,0,.66),0 0 30px rgba(227,79,38,.16)}
.el{position:relative;border:1.4px dashed rgba(227,79,38,.65);border-radius:6px;margin-bottom:9px;padding:9px 10px 10px}
.el:last-child{margin-bottom:0}
.el .tg{position:absolute;top:-8px;left:8px;background:#2A1006;color:#FF9A70;border-radius:4px;padding:1px 6px;
  font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700}
.el .h{font-family:'Fraunces',Georgia,serif;font-size:15px;font-weight:800;color:#FBEDE6}
.el .l{height:4px;border-radius:2px;background:#4A2716;margin-top:5px}
.nav{display:flex;gap:6px}
.nav i{height:7px;border-radius:3px;background:#5C3320;flex:1;font-style:normal}
.grid2{display:flex;gap:8px}
.grid2 .c{flex:1;border:1.2px solid rgba(227,79,38,.42);border-radius:5px;height:38px;background:rgba(227,79,38,.09)}
.gl{position:absolute;left:448px;top:330px;z-index:3;border-radius:8px;background:#150803;
  border:1px solid rgba(227,79,38,.45);padding:7px 12px;font-family:'JetBrains Mono',monospace;
  font-size:10.5px;font-weight:600;white-space:nowrap;box-shadow:0 14px 32px rgba(0,0,0,.6)}
.gl .p{color:#8A5A44}.gl .v{color:#FFB894}`,

  motif: `
<div class="doc">
  <div class="el">
    <span class="tg">&lt;header&gt;</span>
    <div class="h">Aarav builds</div>
  </div>
  <div class="el">
    <span class="tg">&lt;nav&gt;</span>
    <div class="nav"><i></i><i></i><i></i><i></i></div>
  </div>
  <div class="el">
    <span class="tg">&lt;main&gt;</span>
    <div class="grid2"><div class="c"></div><div class="c"></div><div class="c"></div></div>
    <div class="l" style="width:84%"></div>
  </div>
  <div class="el">
    <span class="tg">&lt;footer&gt;</span>
    <div class="l" style="width:46%;margin-top:0"></div>
  </div>
</div>

<div class="gl">
  <span class="p">display: </span><span class="v">grid</span><span class="p">; gap: </span><span class="v">1rem</span><span class="p">;</span>
</div>`,
};
