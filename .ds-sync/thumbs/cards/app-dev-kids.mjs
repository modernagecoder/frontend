// App Building for Kids — drag a component, watch it land in the app.
export default {
  bg: 'linear-gradient(120deg,#0C2A20 0%,#071912 54%,#020806 100%)',
  a1: '#A7F3D0', a2: '#34D399', a3: '#0F9D6E', a4: '#075E42',
  glow: '52,211,153',
  sub: '#8CA89C',

  badge: 'KIDS 6-12',
  kicker: 'APP BUILDING COURSE',
  title: 'App Building<br><span class="ac">for Kids</span>',
  tagline: 'Drag, drop and publish an app of your own',
  meta: '26 WEEKS<i>·</i>NO TYPING NEEDED<i>·</i>REAL APP',
  titleMax: 366,
  titleSize: 51,

  head: `
.phone{position:absolute;left:606px;top:96px;width:154px;height:280px;z-index:2;border-radius:22px;
  background:#0A1F18;border:2px solid #1B4A38;overflow:hidden;
  box-shadow:0 26px 56px rgba(0,0,0,.66),0 0 34px rgba(52,211,153,.2)}
.phone .notch{position:absolute;left:50%;transform:translateX(-50%);top:7px;width:46px;height:5px;border-radius:3px;background:#1B4A38}
.phone .app{position:absolute;inset:16px 10px 10px;border-radius:12px;background:#F6FBF8;padding:9px 10px}
.phone .hd{background:#0F9D6E;border-radius:7px;padding:6px 8px;font-size:9.5px;font-weight:800;color:#fff;letter-spacing:.04em}
.phone .score{margin-top:9px;text-align:center;font-family:'Fraunces',Georgia,serif;font-size:27px;font-weight:800;color:#0B3B2B;line-height:1}
.phone .cap{text-align:center;font-family:'JetBrains Mono',monospace;font-size:7.5px;letter-spacing:.1em;color:#79918A;margin-top:2px}
.phone .b1,.phone .b2{margin-top:9px;border-radius:8px;padding:7px 0;text-align:center;font-size:9.5px;font-weight:800;color:#fff}
.phone .b1{background:#34D399}.phone .b2{background:#F2B33D}
.phone .dots{display:flex;gap:4px;justify-content:center;margin-top:11px}
.phone .dots i{width:5px;height:5px;border-radius:50%;background:#CFE3DA;font-style:normal}
.phone .dots i.on{background:#0F9D6E}
.tray{position:absolute;left:428px;top:150px;width:148px;z-index:3}
.chip{border-radius:9px;background:#0B231B;border:1px solid rgba(52,211,153,.42);padding:8px 11px;margin-bottom:9px;
  display:flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;color:#CFF3E4;
  box-shadow:0 10px 22px rgba(0,0,0,.5)}
.chip.hot{border-color:#34D399;background:#0F3427;box-shadow:0 14px 30px rgba(0,0,0,.55),0 0 22px rgba(52,211,153,.35);transform:rotate(-3deg)}
.chip b{width:9px;height:9px;border-radius:3px;background:#34D399;flex:0 0 9px}`,

  motif: `
<div class="tray">
  <div class="chip"><b style="background:#5BC8E8"></b>Image</div>
  <div class="chip hot"><b></b>Button</div>
  <div class="chip"><b style="background:#F2B33D"></b>Sound</div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <path d="M580 206 C 622 206 626 240 660 244" stroke="#34D399" stroke-width="2.4" stroke-dasharray="4 7"
        fill="none" stroke-linecap="round" opacity=".8"/>
  <path d="M660 244 L650 238 M660 244 L652 252" stroke="#34D399" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/>
</svg>

<div class="phone">
  <span class="notch"></span>
  <div class="app">
    <div class="hd">My Pet App</div>
    <div class="score">128</div>
    <div class="cap">TREATS GIVEN</div>
    <div class="b1">Feed</div>
    <div class="b2">Play</div>
    <div class="dots"><i class="on"></i><i></i><i></i></div>
  </div>
</div>`,
};
