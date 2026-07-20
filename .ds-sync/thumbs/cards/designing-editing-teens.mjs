// Design & Video Editing — an edit timeline, which is where the work happens.
export default {
  bg: 'linear-gradient(120deg,#2E1310 0%,#1A0A08 54%,#080302 100%)',
  a1: '#FFC0B6', a2: '#FF7A6B', a3: '#D4503F', a4: '#8A2C1F',
  glow: '255,122,107',
  sub: '#B3948E',

  badge: 'TEENS 13-18',
  kicker: 'DESIGN & VIDEO COURSE',
  title: 'Design &<br><span class="ac">Video Editing</span>',
  tagline: 'Make content people actually stop for',
  meta: 'GRAPHIC DESIGN<i>·</i>PHOTO<i>·</i>VIDEO',
  titleMax: 372,
  titleSize: 50,

  head: `
.prev{position:absolute;left:452px;top:96px;width:300px;height:150px;z-index:2;border-radius:10px;overflow:hidden;
  background:#120705;border:1px solid rgba(255,122,107,.4);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(255,122,107,.16)}
.prev .sh{position:absolute;inset:0;background:linear-gradient(150deg,#FF9E70 0%,#D4503F 46%,#5B1A12 100%)}
.prev .cap{position:absolute;left:16px;bottom:16px;font-family:'Fraunces',Georgia,serif;font-size:26px;
  font-weight:800;color:#fff;line-height:1;text-shadow:0 3px 14px rgba(0,0,0,.5)}
.prev .safe{position:absolute;inset:11px;border:1px dashed rgba(255,255,255,.32);border-radius:5px}
.prev .tc{position:absolute;right:10px;top:9px;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;color:#fff;background:rgba(0,0,0,.42);border-radius:4px;padding:2px 6px}
.tl{position:absolute;left:452px;top:262px;width:300px;z-index:2;border-radius:9px;overflow:hidden;
  background:#160806;border:1px solid rgba(255,122,107,.3);padding:9px 10px;
  box-shadow:0 16px 36px rgba(0,0,0,.6)}
.tl .row{display:flex;align-items:center;gap:5px;margin-bottom:6px}
.tl .row:last-child{margin-bottom:0}
.tl .lb{width:26px;font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;color:#8A6058;letter-spacing:.06em}
.tl .clip{height:16px;border-radius:4px;background:linear-gradient(160deg,#FF9E70,#C4432F)}
.tl .clip.b{background:linear-gradient(160deg,#7A98C4,#33507A)}
.tl .wave{height:16px;border-radius:4px;background:#2E1512;position:relative;overflow:hidden}
.tl .wave i{position:absolute;bottom:2px;width:2px;background:#FF7A6B;border-radius:1px;font-style:normal}
.play{position:absolute;left:596px;top:256px;width:2px;height:76px;background:#FFE0DA;z-index:3;
  box-shadow:0 0 10px rgba(255,224,218,.9)}
.play::before{content:"";position:absolute;left:-5px;top:-5px;width:12px;height:8px;border-radius:2px;background:#FFE0DA}`,

  motif: `
<div class="prev">
  <div class="sh"></div>
  <div class="safe"></div>
  <span class="tc">00:07 / 00:15</span>
  <div class="cap">New drop.<br>Friday.</div>
</div>

<div class="tl">
  <div class="row">
    <span class="lb">V2</span>
    <span class="clip" style="width:64px"></span>
    <span class="clip b" style="width:96px"></span>
    <span class="clip" style="width:78px"></span>
  </div>
  <div class="row">
    <span class="lb">V1</span>
    <span class="clip b" style="width:118px"></span>
    <span class="clip" style="width:130px"></span>
  </div>
  <div class="row">
    <span class="lb">A1</span>
    <span class="wave" style="flex:1">
      <i style="left:6px;height:7px"></i><i style="left:12px;height:11px"></i><i style="left:18px;height:5px"></i>
      <i style="left:24px;height:12px"></i><i style="left:30px;height:8px"></i><i style="left:36px;height:13px"></i>
      <i style="left:42px;height:6px"></i><i style="left:48px;height:10px"></i><i style="left:54px;height:12px"></i>
      <i style="left:60px;height:4px"></i><i style="left:66px;height:9px"></i><i style="left:72px;height:13px"></i>
      <i style="left:78px;height:7px"></i><i style="left:84px;height:11px"></i><i style="left:90px;height:5px"></i>
      <i style="left:96px;height:12px"></i><i style="left:102px;height:8px"></i><i style="left:108px;height:6px"></i>
      <i style="left:114px;height:13px"></i><i style="left:120px;height:9px"></i><i style="left:126px;height:4px"></i>
      <i style="left:132px;height:11px"></i><i style="left:138px;height:7px"></i><i style="left:144px;height:12px"></i>
      <i style="left:150px;height:6px"></i><i style="left:156px;height:10px"></i><i style="left:162px;height:13px"></i>
      <i style="left:168px;height:5px"></i><i style="left:174px;height:9px"></i><i style="left:180px;height:11px"></i>
      <i style="left:186px;height:7px"></i><i style="left:192px;height:12px"></i><i style="left:198px;height:8px"></i>
      <i style="left:204px;height:4px"></i><i style="left:210px;height:10px"></i><i style="left:216px;height:13px"></i>
      <i style="left:222px;height:6px"></i><i style="left:228px;height:9px"></i><i style="left:234px;height:11px"></i>
      <i style="left:240px;height:5px"></i><i style="left:246px;height:12px"></i><i style="left:252px;height:7px"></i>
    </span>
  </div>
</div>
<div class="play"></div>`,
};
