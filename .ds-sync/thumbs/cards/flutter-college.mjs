// Flutter — one widget tree, both platforms, rendered identically.
export default {
  bg: 'linear-gradient(120deg,#062036 0%,#031320 54%,#01070C 100%)',
  a1: '#A9D9FF', a2: '#4AA8FF', a3: '#1C7DD4', a4: '#0D4C86',
  glow: '74,168,255',
  sub: '#8AA4BE',

  badge: 'COLLEGE & BEYOND',
  kicker: 'FLUTTER MASTERCLASS',
  title: 'Flutter<br><span class="ac">App Development</span>',
  tagline: 'One codebase, both app stores',
  meta: 'FLUTTER<i>·</i>DART<i>·</i>FIREBASE<i>·</i>REST APIs',
  titleMax: 372,
  titleSize: 46,

  head: `
.tree{position:absolute;left:426px;top:112px;width:196px;z-index:2;border-radius:10px;overflow:hidden;
  background:#04121D;border:1px solid rgba(74,168,255,.36);box-shadow:0 20px 44px rgba(0,0,0,.62)}
.tree .bar{padding:7px 11px;background:#082237;font-family:'JetBrains Mono',monospace;font-size:9.5px;
  color:#5F86A8;border-bottom:1px solid rgba(255,255,255,.06)}
.tree .co{padding:9px 11px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.78;white-space:nowrap}
.w{color:#A9D9FF}.nm{color:#DCEAF6}.st{color:#FFD08A}.p{color:#4A6A85}
.ph{position:absolute;z-index:2;width:96px;height:194px;border-radius:15px;background:#04121D;
  border:2px solid #17456E;overflow:hidden;box-shadow:0 20px 44px rgba(0,0,0,.66)}
.ph .sc{position:absolute;inset:11px 7px 7px;border-radius:9px;background:#F6FAFE;padding:8px 7px}
.ph .ab{background:#4AA8FF;border-radius:5px;padding:4px 6px;font-size:8px;font-weight:800;color:#fff}
.ph .card{margin-top:6px;height:26px;border-radius:5px;background:#E2ECF6}
.ph .fab{position:absolute;right:12px;bottom:12px;width:20px;height:20px;border-radius:50%;background:#4AA8FF;
  display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;line-height:1}
.pi{left:640px;top:96px}
.pa{left:672px;top:150px}
.plat{position:absolute;z-index:3;font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;
  letter-spacing:.12em;color:#6E90AC}
.li{left:640px;top:80px}
.la{left:672px;top:352px}`,

  motif: `
<div class="tree">
  <div class="bar">main.dart</div>
  <div class="co">
    <div><span class="w">Scaffold</span><span class="nm">(</span></div>
    <div><span class="nm">&nbsp;&nbsp;appBar: </span><span class="w">AppBar</span><span class="nm">(...),</span></div>
    <div><span class="nm">&nbsp;&nbsp;body: </span><span class="w">ListView</span><span class="nm">(</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;children: [</span><span class="w">Card</span><span class="nm">(...)],</span></div>
    <div><span class="nm">&nbsp;&nbsp;),</span></div>
    <div><span class="nm">)</span></div>
  </div>
</div>

<span class="plat li">iOS</span>
<span class="plat la">ANDROID</span>

<div class="ph pi">
  <div class="sc">
    <div class="ab">Today</div>
    <div class="card"></div><div class="card"></div><div class="card"></div>
  </div>
  <span class="fab">+</span>
</div>

<div class="ph pa">
  <div class="sc">
    <div class="ab">Today</div>
    <div class="card"></div><div class="card"></div><div class="card"></div>
  </div>
  <span class="fab">+</span>
</div>`,
};
