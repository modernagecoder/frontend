// C++ (college) — modern C++: ownership via smart pointers, not the raw
// pointer diagram on the teens card.
export default {
  bg: 'linear-gradient(120deg,#062036 0%,#031320 54%,#01070C 100%)',
  a1: '#9BC9F5', a2: '#3D8FD1', a3: '#00599C', a4: '#023963',
  glow: '61,143,209',
  sub: '#89A2BA',

  badge: 'COLLEGE & BEYOND',
  kicker: 'MODERN C++ MASTERCLASS',
  title: 'C++<br><span class="ac">Masterclass</span>',
  tagline: 'Ownership, the STL and code that stays fast',
  meta: '52 WEEKS<i>·</i>MODERN C++<i>·</i>STL<i>·</i>SYSTEMS',
  titleMax: 372,
  titleSize: 52,

  head: `
.cc{position:absolute;left:432px;top:98px;width:336px;z-index:2;border-radius:11px;overflow:hidden;
  background:#04121D;border:1px solid rgba(61,143,209,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(61,143,209,.16)}
.cc .bar{padding:8px 12px;background:#082336;font-family:'JetBrains Mono',monospace;font-size:10px;
  color:#5E86A8;border-bottom:1px solid rgba(255,255,255,.06)}
.cc .co{padding:10px 13px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;white-space:nowrap}
.kw{color:#FF9BC4}.ty{color:#9BC9F5}.nm{color:#DDEAF6}.st{color:#FFD08A}.cm{color:#4A6A85}
.own{position:absolute;left:456px;top:256px;width:288px;z-index:2;display:flex;align-items:center;gap:11px}
.bx{border-radius:9px;background:#082336;border:1px solid rgba(61,143,209,.45);padding:8px 11px;text-align:center;
  font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;color:#CFE4F7;box-shadow:0 12px 26px rgba(0,0,0,.5)}
.bx small{display:block;font-size:7.5px;color:#5E86A8;letter-spacing:.1em;margin-top:2px}
.res{flex:0 0 auto;border-color:#3D8FD1;background:#0C3355;box-shadow:0 14px 30px rgba(0,0,0,.55),0 0 22px rgba(61,143,209,.32)}
.rc{position:absolute;left:456px;top:326px;z-index:3;display:flex;align-items:center;gap:8px;
  border-radius:8px;border:1px solid rgba(61,143,209,.5);background:rgba(61,143,209,.13);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.06em;color:#9BC9F5}
.rc b{color:#8FD8A0}`,

  motif: `
<div class="cc">
  <div class="bar">buffer.cpp</div>
  <div class="co">
    <div><span class="kw">auto</span><span class="nm"> buf = std::</span><span class="ty">make_shared</span><span class="nm">&lt;</span><span class="ty">Buffer</span><span class="nm">&gt;(</span><span class="st">4096</span><span class="nm">);</span></div>
    <div><span class="nm">worker.</span><span class="ty">attach</span><span class="nm">(buf);</span><span class="cm">   // count 2</span></div>
    <div>&nbsp;</div>
    <div><span class="cm">// no delete, no leak</span></div>
  </div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="#3D8FD1" stroke-width="2" stroke-dasharray="4 5">
    <path d="M540 282 H566"/><path d="M690 282 H716"/>
  </g>
</svg>

<div class="own">
  <div class="bx">owner A<small>SHARED_PTR</small></div>
  <div class="bx res">Buffer<small>4096 B</small></div>
  <div class="bx">owner B<small>SHARED_PTR</small></div>
</div>

<div class="rc">use_count <b>2</b> <span style="color:#3D8FD1">&#183;</span> freed at 0</div>`,
};
