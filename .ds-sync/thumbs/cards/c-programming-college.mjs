// C Programming — the memory layout of a running process, which is the
// honest answer to "how a computer actually runs your program".
export default {
  bg: 'linear-gradient(120deg,#2B1D08 0%,#181004 54%,#070501 100%)',
  a1: '#F0C88A', a2: '#D08B3A', a3: '#A26620', a4: '#6B4111',
  glow: '208,139,58',
  sub: '#B0A085',

  badge: 'COLLEGE & BEYOND',
  kicker: 'C PROGRAMMING MASTERCLASS',
  title: 'C<br><span class="ac">Programming</span>',
  tagline: 'Pointers, memory, and what really runs',
  meta: '24 WEEKS<i>·</i>POINTERS<i>·</i>MEMORY<i>·</i>REAL PROGRAMS',
  titleMax: 372,
  titleSize: 53,

  head: `
.seg{position:absolute;left:520px;width:238px;z-index:2;border-radius:8px;padding:8px 12px;
  border:1px solid rgba(208,139,58,.4);background:#1A1006;box-shadow:0 12px 26px rgba(0,0,0,.5)}
.seg .n{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.1em;color:#F0C88A}
.seg .d{font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:.08em;color:#8A7148;margin-top:2px}
.g1{top:100px}
.g2{top:158px;border-color:#D08B3A;background:#2A1A08;box-shadow:0 14px 30px rgba(0,0,0,.55),0 0 20px rgba(208,139,58,.28)}
.g3{top:216px}
.g4{top:274px}
.arrows{position:absolute;left:470px;top:100px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:8.5px;font-weight:700;letter-spacing:.08em;color:#8A7148}
.hi{position:absolute;left:520px;top:332px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:9.5px;font-weight:700;letter-spacing:.06em;color:#8A7148}
.hi b{color:#F0C88A}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <path d="M498 112 V180" stroke="#8A6A34" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M498 180 L493 170 M498 180 L503 170" stroke="#8A6A34" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M498 300 V240" stroke="#8A6A34" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M498 240 L493 250 M498 240 L503 250" stroke="#8A6A34" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <text x="480" y="150" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#8A7148">grows</text>
  <text x="480" y="162" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#8A7148">down</text>
  <text x="480" y="272" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#8A7148">grows</text>
  <text x="480" y="284" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#8A7148">up</text>
</svg>

<div class="seg g1"><div class="n">STACK</div><div class="d">LOCALS &#183; RETURN ADDRESSES</div></div>
<div class="seg g2"><div class="n">HEAP</div><div class="d">MALLOC &#183; YOU FREE IT</div></div>
<div class="seg g3"><div class="n">DATA / BSS</div><div class="d">GLOBALS &#183; STATICS</div></div>
<div class="seg g4"><div class="n">TEXT</div><div class="d">YOUR COMPILED CODE</div></div>

<div class="hi">one process, <b>four segments</b></div>`,
};
