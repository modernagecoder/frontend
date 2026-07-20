// Vedic Maths — the base method on 97 x 96, worked exactly as the sutra
// "all from nine, last from ten" does it.
export default {
  bg: 'linear-gradient(120deg,#2E1B05 0%,#1A0F03 54%,#070401 100%)',
  a1: '#FFCFA0', a2: '#FF9933', a3: '#CC6E11', a4: '#7F4207',
  glow: '255,153,51',
  sub: '#B39C82',

  badge: 'CLASS 4-10',
  kicker: 'VEDIC MATHS MASTERY',
  title: 'Vedic Maths<br><span class="ac">Mastery</span>',
  tagline: 'Two-digit products, in one line',
  meta: 'SUTRAS<i>·</i>BASE METHOD<i>·</i>MENTAL SPEED',
  titleMax: 372,
  titleSize: 48,

  head: `
.vd{position:absolute;left:470px;top:112px;z-index:3;font-family:'Fraunces',Georgia,serif;color:#FFF1E2}
.vd .row{display:flex;align-items:center;gap:16px;font-size:31px;font-weight:800}
.vd .row .df{font-family:'JetBrains Mono',monospace;font-size:15px;font-weight:700;color:#FF9933}
.vd .rule{height:2px;background:rgba(255,153,51,.4);margin:11px 0}
.ans{position:absolute;left:470px;top:266px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:44px;font-weight:800;color:#FFCFA0;letter-spacing:.02em}
.ans span{color:#FF9933}
.how{position:absolute;left:470px;top:334px;z-index:3;display:flex;gap:9px}
.how span{border-radius:7px;border:1px solid rgba(255,153,51,.5);background:rgba(255,153,51,.12);
  padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#FFCFA0}
.how b{color:#FF9933}
.base{position:absolute;left:660px;top:118px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:10px;font-weight:700;letter-spacing:.1em;color:#A87E4E}`,

  motif: `
<div class="base">BASE 100</div>

<div class="vd">
  <div class="row"><span>97</span><span class="df">&#8722;3</span></div>
  <div class="row"><span>96</span><span class="df">&#8722;4</span></div>
  <div class="rule"></div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- the cross subtraction -->
  <path d="M486 132 C 528 148 528 178 550 190" stroke="#FF9933" stroke-width="2" stroke-dasharray="4 5" fill="none" stroke-linecap="round"/>
  <path d="M486 186 C 528 172 528 142 550 132" stroke="#FF9933" stroke-width="2" stroke-dasharray="4 5" fill="none" stroke-linecap="round"/>
  <text x="580" y="164" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#FFCFA0">97 &#8722; 4 = 93</text>
  <text x="580" y="222" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#FFCFA0">3 &#215; 4 = 12</text>
</svg>

<div class="ans">93<span>12</span></div>

<div class="how">
  <span>LEFT <b>93</b></span>
  <span>RIGHT <b>12</b></span>
  <span>NO LONG MULTIPLICATION</span>
</div>`,
};
