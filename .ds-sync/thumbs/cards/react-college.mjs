// React JS Masterclass — state flow: action to reducer to store to UI.
// The teens card shows components; this one shows what moves between them.
export default {
  bg: 'linear-gradient(120deg,#191C24 0%,#0E1015 54%,#040508 100%)',
  a1: '#E8EEF6', a2: '#B7C4D6', a3: '#8595AC', a4: '#4E5C72',
  glow: '183,196,214',
  sub: '#98A2B2',

  badge: 'COLLEGE & BEYOND',
  kicker: 'REACT JS MASTERCLASS',
  title: 'React JS<br><span class="ac">Masterclass</span>',
  tagline: 'State, routing and rendering that scales',
  meta: 'REACT<i>·</i>REDUX<i>·</i>NEXT.JS<i>·</i>TYPESCRIPT',
  titleMax: 372,
  titleSize: 50,

  head: `
.nd{position:absolute;z-index:2;border-radius:9px;background:#14171E;border:1px solid rgba(183,196,214,.32);
  padding:8px 11px;box-shadow:0 14px 30px rgba(0,0,0,.6)}
.nd .t{font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.06em;color:#E8EEF6}
.nd .s{font-family:'JetBrains Mono',monospace;font-size:7.5px;letter-spacing:.1em;color:#6E7A8C;margin-top:2px}
.a1n{left:436px;top:112px;width:126px}
.a2n{left:436px;top:196px;width:126px}
.a3n{left:436px;top:280px;width:126px}
.ui{position:absolute;left:610px;top:112px;width:152px;z-index:2;border-radius:10px;background:#F6F8FB;
  padding:11px 12px;box-shadow:0 20px 44px rgba(0,0,0,.64)}
.ui .h{font-family:'Fraunces',Georgia,serif;font-size:14px;font-weight:800;color:#161A22}
.ui .ct{font-family:'Fraunces',Georgia,serif;font-size:30px;font-weight:800;color:#161A22;line-height:1;margin-top:6px}
.ui .cp{font-family:'JetBrains Mono',monospace;font-size:7.5px;letter-spacing:.12em;color:#7B8798;margin-top:2px}
.ui .bt{margin-top:9px;background:#161A22;color:#fff;border-radius:6px;padding:6px 0;text-align:center;
  font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700}
.ui .l{height:4px;border-radius:2px;background:#DDE3EB;margin-top:7px}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="#4E5C72" stroke-width="1.8" fill="none">
    <path d="M500 152 V190"/><path d="M500 236 V274"/>
  </g>
  <g stroke="#B7C4D6" stroke-width="1.8" fill="none" stroke-dasharray="4 5">
    <path d="M562 300 C 600 300 596 200 610 190"/>
    <path d="M686 300 C 686 340 512 340 500 320"/>
  </g>
  <g fill="#B7C4D6">
    <path d="M500 190 L495 181 L505 181 Z"/><path d="M500 274 L495 265 L505 265 Z"/>
  </g>
  <text x="600" y="352" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" letter-spacing="1.2" fill="#6E7A8C">dispatch(add)</text>
</svg>

<div class="nd a1n"><div class="t">ACTION</div><div class="s">{ type: 'add' }</div></div>
<div class="nd a2n"><div class="t">REDUCER</div><div class="s">PURE FUNCTION</div></div>
<div class="nd a3n"><div class="t">STORE</div><div class="s">count: 7</div></div>

<div class="ui">
  <div class="h">Cart</div>
  <div class="ct">7</div>
  <div class="cp">ITEMS</div>
  <div class="l" style="width:88%"></div>
  <div class="l" style="width:62%"></div>
  <div class="bt">Add item</div>
</div>`,
};
