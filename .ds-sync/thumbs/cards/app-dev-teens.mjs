// App Development (teens) — a real screen flow, which is what mobile UI/UX
// work actually looks like.
export default {
  bg: 'linear-gradient(120deg,#1B2708 0%,#0F1705 54%,#040701 100%)',
  a1: '#DCFCA0', a2: '#A3E635', a3: '#79B31C', a4: '#4A6E0F',
  glow: '163,230,53',
  sub: '#A4B48A',

  badge: 'TEENS 13-18',
  kicker: 'MOBILE APP COURSE',
  title: 'App<br><span class="ac">Development</span>',
  tagline: 'From first screen to the App Store',
  meta: 'UI/UX<i>·</i>MOBILE DEV<i>·</i>SHIP IT',
  titleMax: 356,
  titleSize: 53,

  head: `
.ph{position:absolute;z-index:2;width:112px;height:216px;border-radius:16px;background:#0B1304;
  border:2px solid #35521A;overflow:hidden;box-shadow:0 20px 44px rgba(0,0,0,.66)}
.ph .nt{position:absolute;left:50%;transform:translateX(-50%);top:5px;width:32px;height:4px;border-radius:3px;background:#35521A}
.ph .sc{position:absolute;inset:12px 7px 7px;border-radius:9px;background:#F8FCF2;padding:7px}
.ph .hh{font-family:'Fraunces',Georgia,serif;font-size:12px;font-weight:800;color:#1E2B0C;line-height:1.1}
.ph .rw{display:flex;gap:5px;align-items:center;margin-top:6px}
.ph .th{width:20px;height:20px;border-radius:5px;background:#A3E635;flex:0 0 20px}
.ph .ln{height:4px;border-radius:2px;background:#DCE4D2}
.ph .bt{margin-top:8px;background:#79B31C;border-radius:6px;padding:5px 0;text-align:center;font-size:8px;font-weight:800;color:#fff}
.ph .big{height:52px;border-radius:7px;background:linear-gradient(140deg,#A3E635,#4A6E0F);margin-top:4px}
.p1{left:420px;top:120px}
.p2{left:546px;top:134px}
.p3{left:672px;top:148px}
.fl{position:absolute;z-index:3;font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;
  letter-spacing:.14em;color:#89A06C}
.f1{left:420px;top:104px}.f2{left:546px;top:118px}.f3{left:672px;top:132px}`,

  motif: `
<span class="fl f1">BROWSE</span>
<span class="fl f2">DETAIL</span>
<span class="fl f3">ORDER</span>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="#A3E635" stroke-width="2.2" stroke-dasharray="4 6" stroke-linecap="round" opacity=".85">
    <path d="M534 228 H546"/><path d="M660 242 H672"/>
  </g>
  <g stroke="#A3E635" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".85">
    <path d="M546 228 L539 223 M546 228 L539 233"/>
    <path d="M672 242 L665 237 M672 242 L665 247"/>
  </g>
</svg>

<div class="ph p1">
  <span class="nt"></span>
  <div class="sc">
    <div class="hh">Near you</div>
    <div class="rw"><span class="th"></span><span style="flex:1"><span class="ln" style="width:90%;display:block"></span><span class="ln" style="width:60%;display:block;margin-top:3px"></span></span></div>
    <div class="rw"><span class="th" style="background:#C7EE7A"></span><span style="flex:1"><span class="ln" style="width:84%;display:block"></span><span class="ln" style="width:54%;display:block;margin-top:3px"></span></span></div>
    <div class="rw"><span class="th" style="background:#79B31C"></span><span style="flex:1"><span class="ln" style="width:88%;display:block"></span><span class="ln" style="width:64%;display:block;margin-top:3px"></span></span></div>
  </div>
</div>

<div class="ph p2">
  <span class="nt"></span>
  <div class="sc">
    <div class="big"></div>
    <div class="hh" style="margin-top:6px">Green Bowl</div>
    <div class="ln" style="width:92%;margin-top:5px"></div>
    <div class="ln" style="width:70%;margin-top:3px"></div>
    <div class="bt">Add to order</div>
  </div>
</div>

<div class="ph p3">
  <span class="nt"></span>
  <div class="sc">
    <div class="hh">Order placed</div>
    <div style="display:flex;justify-content:center;margin-top:14px">
      <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="21" fill="#EAF7D6" stroke="#79B31C" stroke-width="2.4"/>
        <path d="M15 24.5 L21.5 31 L33 19" stroke="#79B31C" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="ln" style="width:76%;margin:12px auto 0"></div>
    <div class="ln" style="width:52%;margin:4px auto 0"></div>
  </div>
</div>`,
};
