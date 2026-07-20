// C++ Programming — pointers and memory, which is the actual answer to
// "how computers really work under the hood".
export default {
  bg: 'linear-gradient(120deg,#1B1A3A 0%,#100F22 54%,#04040C 100%)',
  a1: '#C4BCFF', a2: '#7C6BF5', a3: '#5546C4', a4: '#332880',
  glow: '124,107,245',
  sub: '#9A96C0',

  badge: 'TEENS 13-18',
  kicker: 'C++ PROGRAMMING',
  title: 'C++<br><span class="ac">Programming</span>',
  tagline: 'How computers really work, under the hood',
  meta: 'MEMORY & POINTERS<i>·</i>OOP<i>·</i>GAME ENGINES',
  titleMax: 372,
  titleSize: 53,

  head: `
.cc{position:absolute;left:430px;top:98px;width:230px;z-index:3;border-radius:11px;overflow:hidden;
  background:#0C0B1C;border:1px solid rgba(124,107,245,.42);
  box-shadow:0 22px 48px rgba(0,0,0,.64),0 0 30px rgba(124,107,245,.2)}
.cc .bar{padding:7px 11px;background:#15142C;font-family:'JetBrains Mono',monospace;font-size:10px;
  font-weight:700;color:#7E77B0;border-bottom:1px solid rgba(255,255,255,.06)}
.cc .co{padding:10px 12px 12px;font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1.8;white-space:nowrap}
.kw{color:#FF9BC4}.ty{color:#7FD4FF}.nm{color:#E8E5FF}.no{color:#FFD08A}.op{color:#C4BCFF}
.mem{position:absolute;left:498px;top:246px;width:262px;z-index:2}
.cell{border-radius:9px;background:#12112A;border:1px solid rgba(124,107,245,.38);padding:8px 11px;margin-bottom:9px;
  box-shadow:0 12px 28px rgba(0,0,0,.5)}
.cell.hot{border-color:#7C6BF5;background:#1B1840;box-shadow:0 14px 32px rgba(0,0,0,.55),0 0 22px rgba(124,107,245,.35)}
.cell .top2{display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:8.5px;
  letter-spacing:.1em;color:#6F68A0}
.cell .val{font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:700;color:#EDEAFF;margin-top:3px}
.cell .val b{color:#C4BCFF}
.memlbl{position:absolute;left:432px;top:250px;z-index:3;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.16em;color:#6F68A0;writing-mode:vertical-rl;transform:rotate(180deg)}`,

  motif: `
<span class="memlbl">MEMORY</span>

<div class="cc">
  <div class="bar">main.cpp</div>
  <div class="co">
    <div><span class="ty">int</span><span class="nm"> score = </span><span class="no">42</span><span class="nm">;</span></div>
    <div><span class="ty">int</span><span class="op">*</span><span class="nm"> ptr = </span><span class="op">&amp;</span><span class="nm">score;</span></div>
    <div>&nbsp;</div>
    <div><span class="op">*</span><span class="nm">ptr = </span><span class="no">99</span><span class="nm">;</span></div>
  </div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:4">
  <path d="M700 330 C 738 330 742 292 706 292" stroke="#7C6BF5" stroke-width="2.2" stroke-dasharray="4 5" fill="none" stroke-linecap="round"/>
  <path d="M706 292 L715 287 M706 292 L714 298" stroke="#7C6BF5" stroke-width="2.2" fill="none" stroke-linecap="round"/>
</svg>

<div class="mem">
  <div class="cell hot">
    <div class="top2"><span>score</span><span>0x7ffd4a2c</span></div>
    <div class="val">99</div>
  </div>
  <div class="cell">
    <div class="top2"><span>ptr</span><span>0x7ffd4a34</span></div>
    <div class="val"><b>0x7ffd4a2c</b></div>
  </div>
</div>`,
};
