// Canva Design Studio — an artboard mid-edit, selection handles and all.
export default {
  bg: 'linear-gradient(120deg,#2B0F26 0%,#180818 54%,#070208 100%)',
  a1: '#FFB3DC', a2: '#E8449B', a3: '#B92273', a4: '#74134A',
  glow: '232,68,155',
  sub: '#B394AA',

  badge: 'KIDS 6-12',
  kicker: 'GRAPHIC DESIGN COURSE',
  title: 'Canva<br><span class="ac">Design Studio</span>',
  tagline: 'Posters, cards and social graphics',
  meta: '26 WEEKS<i>·</i>REAL BRIEFS<i>·</i>A PORTFOLIO',
  titleMax: 372,
  titleSize: 50,

  head: `
.board{position:absolute;left:498px;top:92px;width:250px;height:206px;z-index:2;border-radius:10px;
  background:#FBF7F4;box-shadow:0 24px 54px rgba(0,0,0,.66),0 0 34px rgba(232,68,155,.22)}
.poster{position:absolute;inset:14px;border-radius:7px;overflow:hidden;
  background:linear-gradient(150deg,#00C4CC 0%,#6C3CE0 58%,#E8449B 100%)}
.poster .ttl{position:absolute;left:16px;top:22px;right:16px;font-family:'Fraunces',Georgia,serif;
  font-size:27px;font-weight:800;line-height:1.02;color:#fff;letter-spacing:-.01em}
.poster .sub2{position:absolute;left:16px;top:88px;font-family:'JetBrains Mono',monospace;font-size:9px;
  letter-spacing:.18em;color:rgba(255,255,255,.85)}
.poster .dot{position:absolute;right:-18px;bottom:-22px;width:96px;height:96px;border-radius:50%;
  background:rgba(255,255,255,.16)}
.poster .bar{position:absolute;left:16px;bottom:18px;width:64px;height:7px;border-radius:4px;background:#FFE47A}
/* selection handles on the headline */
.sel{position:absolute;left:508px;top:112px;width:230px;height:62px;border:1.6px solid #E8449B;border-radius:3px;z-index:3}
.sel i{position:absolute;width:8px;height:8px;background:#fff;border:1.6px solid #E8449B;border-radius:2px;font-style:normal}
.sel i.tl{left:-5px;top:-5px}.sel i.tr{right:-5px;top:-5px}.sel i.bl{left:-5px;bottom:-5px}.sel i.br{right:-5px;bottom:-5px}
.swat{position:absolute;left:498px;top:314px;display:flex;align-items:center;gap:9px;z-index:3}
.swat b{width:24px;height:24px;border-radius:7px;box-shadow:0 6px 14px rgba(0,0,0,.5)}
.swat b.on{outline:2px solid #FFB3DC;outline-offset:2px}
.swat span{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.14em;color:#9C7A8C;margin-left:4px}`,

  motif: `
<div class="board">
  <div class="poster">
    <div class="ttl">Bake<br>Sale!</div>
    <div class="sub2">SATURDAY &#183; 10AM</div>
    <div class="bar"></div>
    <div class="dot"></div>
  </div>
</div>
<div class="sel"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i></div>
<div class="swat">
  <b style="background:#00C4CC"></b>
  <b class="on" style="background:#E8449B"></b>
  <b style="background:#FFE47A"></b>
  <b style="background:#6C3CE0"></b>
  <span>BRAND KIT</span>
</div>`,
};
