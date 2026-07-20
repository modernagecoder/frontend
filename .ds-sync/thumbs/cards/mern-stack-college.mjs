// MERN — the document is the thing that makes this stack itself, so the
// card leads with a real Mongo document travelling through M-E-R-N.
export default {
  bg: 'linear-gradient(120deg,#042A18 0%,#02180E 54%,#000805 100%)',
  a1: '#8FFFC4', a2: '#00ED64', a3: '#03B84C', a4: '#02702F',
  glow: '0,237,100',
  sub: '#84AD96',

  badge: 'COLLEGE & BEYOND',
  kicker: 'MERN STACK DEVELOPMENT',
  title: 'MERN Stack<br><span class="ac">Development</span>',
  tagline: 'The stack companies actually hire for',
  meta: 'MONGODB<i>·</i>EXPRESS<i>·</i>REACT<i>·</i>NODE',
  titleMax: 372,
  titleSize: 48,

  head: `
.doc{position:absolute;left:436px;top:96px;width:330px;z-index:2;border-radius:11px;overflow:hidden;
  background:#03170E;border:1px solid rgba(0,237,100,.34);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(0,237,100,.14)}
.doc .bar{display:flex;align-items:center;padding:8px 12px;background:#052A18;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#5C9476}
.doc .bar b{margin-left:auto;color:#8FFFC4;font-size:8.5px;letter-spacing:.1em}
.doc .co{padding:10px 13px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.7;white-space:nowrap}
.k{color:#8FFFC4}.v{color:#E4F7EC}.n{color:#FFD08A}.p{color:#4E8468}
.rail{position:absolute;left:436px;top:276px;width:330px;z-index:2;display:flex;gap:8px}
.rail .st{flex:1;border-radius:8px;background:#052A18;border:1px solid rgba(0,237,100,.4);padding:8px 0;
  text-align:center;font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;color:#B8F5D4;
  box-shadow:0 10px 24px rgba(0,0,0,.5)}
.rail .st b{display:block;font-family:'Fraunces',Georgia,serif;font-size:17px;color:#00ED64;line-height:1;margin-bottom:3px}
.flow{position:absolute;left:436px;top:340px;width:330px;text-align:center;z-index:3;
  font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.1em;color:#5C9476}`,

  motif: `
<div class="doc">
  <div class="bar"><span>db.orders.findOne()</span><b>MONGODB</b></div>
  <div class="co">
    <div><span class="p">{</span></div>
    <div><span class="p">&nbsp;&nbsp;</span><span class="k">_id</span><span class="p">: </span><span class="v">ObjectId("6a1f..."),</span></div>
    <div><span class="p">&nbsp;&nbsp;</span><span class="k">items</span><span class="p">: [{ </span><span class="k">sku</span><span class="p">: </span><span class="v">"MAC-12"</span><span class="p">, </span><span class="k">qty</span><span class="p">: </span><span class="n">2</span><span class="p"> }],</span></div>
    <div><span class="p">&nbsp;&nbsp;</span><span class="k">total</span><span class="p">: </span><span class="n">1499</span><span class="p">, </span><span class="k">paid</span><span class="p">: </span><span class="n">true</span></div>
    <div><span class="p">}</span></div>
  </div>
</div>

<div class="rail">
  <div class="st"><b>M</b>MONGODB</div>
  <div class="st"><b>E</b>EXPRESS</div>
  <div class="st"><b>R</b>REACT</div>
  <div class="st"><b>N</b>NODE</div>
</div>

<div class="flow">one document, all four layers</div>`,
};
