// Swift iOS — SwiftUI is declarative, so the card shows the code and the
// view it produces, side by side.
export default {
  bg: 'linear-gradient(120deg,#2E1208 0%,#1A0A05 54%,#070302 100%)',
  a1: '#FFB49E', a2: '#F05138', a3: '#C13418', a4: '#7C1F0C',
  glow: '240,81,56',
  sub: '#B3928A',

  badge: 'COLLEGE & BEYOND',
  kicker: 'SWIFT iOS MASTERCLASS',
  title: 'Swift<br><span class="ac">iOS Development</span>',
  tagline: 'SwiftUI, UIKit and shipping on Apple',
  meta: 'SWIFT<i>·</i>SWIFTUI<i>·</i>UIKIT<i>·</i>XCODE',
  titleMax: 372,
  titleSize: 47,

  head: `
.sw{position:absolute;left:428px;top:104px;width:212px;z-index:2;border-radius:10px;overflow:hidden;
  background:#120704;border:1px solid rgba(240,81,56,.4);box-shadow:0 20px 44px rgba(0,0,0,.64)}
.sw .bar{padding:7px 11px;background:#1F0C06;font-family:'JetBrains Mono',monospace;font-size:9.5px;
  color:#9A6A5C;border-bottom:1px solid rgba(255,255,255,.06)}
.sw .co{padding:9px 11px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.72;white-space:nowrap}
.kw{color:#FF9BC4}.ty{color:#7FD4B8}.nm{color:#F2E2DC}.st{color:#FFD08A}.md{color:#FFB49E}
.dev{position:absolute;left:664px;top:96px;width:104px;height:212px;z-index:2;border-radius:17px;
  background:#0C0503;border:2px solid #4A2015;overflow:hidden;box-shadow:0 22px 48px rgba(0,0,0,.7)}
.dev .nt{position:absolute;left:50%;transform:translateX(-50%);top:6px;width:30px;height:4px;border-radius:3px;background:#4A2015}
.dev .sc{position:absolute;inset:14px 8px 8px;border-radius:10px;background:#FCF7F5;padding:9px 8px}
.dev .h{font-family:'Fraunces',Georgia,serif;font-size:14px;font-weight:800;color:#2A1108;line-height:1.05}
.dev .s{font-family:'JetBrains Mono',monospace;font-size:7px;letter-spacing:.1em;color:#9A7A70;margin-top:3px}
.dev .bt{margin-top:10px;background:#F05138;border-radius:7px;padding:6px 0;text-align:center;
  font-size:8.5px;font-weight:800;color:#fff}
.dev .row{display:flex;gap:5px;margin-top:9px}
.dev .row i{flex:1;height:22px;border-radius:5px;background:#F3E2DC;font-style:normal}
.arw{position:absolute;left:646px;top:196px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:14px;color:#F05138}`,

  motif: `
<div class="sw">
  <div class="bar">ContentView.swift</div>
  <div class="co">
    <div><span class="ty">VStack</span><span class="nm">(spacing: </span><span class="st">12</span><span class="nm">) {</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="ty">Text</span><span class="nm">(</span><span class="st">"Today"</span><span class="nm">)</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="md">.font</span><span class="nm">(</span><span class="st">.largeTitle</span><span class="nm">)</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="ty">Button</span><span class="nm">(</span><span class="st">"Start"</span><span class="nm">) { }</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="md">.buttonStyle</span><span class="nm">(...)</span></div>
    <div><span class="nm">}</span></div>
  </div>
</div>

<span class="arw">&#8594;</span>

<div class="dev">
  <span class="nt"></span>
  <div class="sc">
    <div class="h">Today</div>
    <div class="s">3 SESSIONS</div>
    <div class="bt">Start</div>
    <div class="row"><i></i><i></i></div>
    <div class="row"><i></i><i></i></div>
  </div>
</div>`,
};
