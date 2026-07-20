// Java Programming — a class on the left, the object it makes on the right.
// That one picture is what object-oriented programming means.
export default {
  bg: 'linear-gradient(120deg,#2B1A0C 0%,#180E06 54%,#070302 100%)',
  a1: '#FFC58A', a2: '#E76F00', a3: '#B85400', a4: '#753500',
  glow: '231,111,0',
  sub: '#B39A82',

  badge: 'TEENS 13-18',
  kicker: 'JAVA & OOP COURSE',
  title: 'Java<br><span class="ac">Programming</span>',
  tagline: 'Object-oriented programming, done right',
  meta: 'CLASSES & OBJECTS<i>·</i>ANDROID<i>·</i>PROJECTS',
  titleMax: 372,
  titleSize: 52,

  head: `
.cls{position:absolute;left:420px;top:100px;width:216px;z-index:2;border-radius:11px;overflow:hidden;
  background:#120A04;border:1px solid rgba(231,111,0,.4);
  box-shadow:0 22px 48px rgba(0,0,0,.64),0 0 30px rgba(231,111,0,.18)}
.cls .bar{padding:7px 11px;background:#1C1006;font-family:'JetBrains Mono',monospace;font-size:10px;
  font-weight:700;letter-spacing:.08em;color:#9A7550;border-bottom:1px solid rgba(255,255,255,.06)}
.cls .co{padding:10px 12px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;
  white-space:nowrap;font-weight:500}
.kw{color:#FF9E5E}.ty{color:#FFC58A}.nm{color:#EDE3D8}.st{color:#9FD98A}.no{color:#7FC4E8}
.obj{position:absolute;left:596px;top:170px;width:172px;z-index:3;border-radius:11px;
  background:#1E1207;border:1px solid #E76F00;padding:11px 13px;
  box-shadow:0 20px 44px rgba(0,0,0,.62),0 0 28px rgba(231,111,0,.34)}
.obj .h{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.16em;color:#B8823F}
.obj .n{font-family:'Fraunces',Georgia,serif;font-size:19px;font-weight:800;color:#FFF1E2;margin:3px 0 8px}
.obj .r{display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:10.5px;
  padding:3px 0;color:#C9B29A}
.obj .r b{color:#FFC58A}
.obj .g{margin-top:8px;text-align:center;border-radius:7px;background:rgba(231,111,0,.16);
  border:1px solid rgba(231,111,0,.5);padding:5px 0;font-family:'JetBrains Mono',monospace;
  font-size:11px;font-weight:700;color:#FFC58A;letter-spacing:.08em}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <path d="M572 236 C 584 236 584 226 594 226" stroke="#E76F00" stroke-width="2.2" stroke-dasharray="4 6" fill="none" stroke-linecap="round" opacity=".85"/>
  <path d="M594 226 L585 221 M594 226 L586 232" stroke="#E76F00" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".85"/>
  <text x="512" y="262" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" letter-spacing="1.6" fill="#8A6743">new Student()</text>
</svg>

<div class="cls">
  <div class="bar">Student.java</div>
  <div class="co">
    <div><span class="kw">class</span><span class="ty"> Student</span><span class="nm"> {</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="kw">String</span><span class="nm"> name;</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="kw">int</span><span class="nm"> marks;</span></div>
    <div>&nbsp;</div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="kw">char</span><span class="ty"> grade</span><span class="nm">() {</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kw">return</span><span class="nm"> marks &gt;= </span><span class="no">90</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;? </span><span class="st">'A'</span><span class="nm"> : </span><span class="st">'B'</span><span class="nm">;</span></div>
    <div><span class="nm">&nbsp;&nbsp;}</span></div>
    <div><span class="nm">}</span></div>
  </div>
</div>

<div class="obj">
  <div class="h">OBJECT</div>
  <div class="n">Student</div>
  <div class="r"><span>name</span><b>"Aarav"</b></div>
  <div class="r"><span>marks</span><b>93</b></div>
  <div class="g">grade() &#8594; A</div>
</div>`,
};
