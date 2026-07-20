// Python for Kids — Turtle graphics.
// The rosette is the exact path `for i in range(36): forward(180); left(170)`
// draws, computed from the code printed on the card.
const PATH = '526.0,206.1 758.0,206.1 529.5,165.9 747.5,245.2 546.6,129.2 724.3,278.3 575.2,100.6 691.2,301.5 611.9,83.5 652.1,312.0 652.1,80.0 611.9,308.5 691.2,90.5 575.2,291.4 724.3,113.7 546.6,262.8 747.5,146.8 529.5,226.1 758.0,185.9 526.0,185.9 754.5,226.1 536.5,146.8 737.4,262.8 559.7,113.7 708.8,291.4 592.8,90.5 672.1,308.5 631.9,80.0 631.9,312.0 672.1,83.5 592.8,301.5 708.8,100.6 559.7,278.3 737.4,129.2 536.5,245.2 754.5,165.9 526.0,206.1';

export default {
  bg: 'linear-gradient(120deg,#1B2A42 0%,#0F1727 54%,#070B13 100%)',
  a1: '#FFE873', a2: '#FFD43B', a3: '#E0A82E', a4: '#9C6F14',
  glow: '255,212,59',
  sub: '#9DAAC0',

  badge: 'KIDS 6-12',
  kicker: 'PYTHON CODING COURSE',
  title: 'Python<br><span class="ac">for Kids</span>',
  tagline: 'Real Python code that draws real art',
  meta: 'TURTLE GRAPHICS<i>·</i>PATTERNS<i>·</i>MINI-GAMES',
  titleMax: 368,

  head: `
.pen{position:absolute;left:414px;top:274px;width:222px;z-index:3;border-radius:11px;
  background:#0D141F;border:1px solid rgba(255,212,59,.34);overflow:hidden;
  box-shadow:0 22px 50px rgba(0,0,0,.62),0 0 34px rgba(255,212,59,.18)}
.pen .bar{display:flex;align-items:center;gap:6px;padding:6px 11px;background:#141E2E;border-bottom:1px solid rgba(251,248,242,.07)}
.pen .bar b{width:9px;height:9px;border-radius:50%}
.pen .bar span{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:10px;color:#6D7C93}
.pen .src{padding:8px 13px 9px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;white-space:nowrap;font-weight:500}
.kw{color:#FF9BA6}.fn{color:#FFD43B}.nm{color:#E6EDF7}.no{color:#7FB3DC}.st{color:#A5E8A0}`,

  motif: `
<svg class="motif" width="800" height="450" viewBox="0 0 800 450" fill="none"
     style="position:absolute;inset:0;z-index:1">
  <defs>
    <linearGradient id="rose" x1="526" y1="80" x2="758" y2="312" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#7FB3DC"/>
      <stop offset=".52" stop-color="#FFD43B"/>
      <stop offset="1" stop-color="#FFE873"/>
    </linearGradient>
    <radialGradient id="roseHalo">
      <stop offset="0" stop-color="#FFD43B" stop-opacity=".30"/>
      <stop offset="1" stop-color="#FFD43B" stop-opacity="0"/>
    </radialGradient>
    <filter id="pblur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="7"/></filter>
    <filter id="pblur2" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="3"/></filter>
  </defs>

  <circle cx="642" cy="196" r="152" fill="url(#roseHalo)"/>

  <!-- what the turtle drew -->
  <polyline points="${PATH}" fill="none" stroke="#FFD43B" stroke-width="9" opacity=".28" filter="url(#pblur)"/>
  <polyline points="${PATH}" fill="none" stroke="url(#rose)" stroke-width="2.6" stroke-linejoin="round"/>
  <polyline points="${PATH}" fill="none" stroke="#FFF6D8" stroke-width="1" opacity=".55" stroke-linejoin="round"/>

  <!-- the turtle, back at the start, facing east -->
  <g>
    <circle cx="524" cy="206" r="34" fill="#5B9BCE" opacity=".45" filter="url(#pblur2)"/>
    <ellipse cx="510" cy="195" rx="7" ry="5" fill="#4FA574" transform="rotate(-30 510 195)"/>
    <ellipse cx="510" cy="217" rx="7" ry="5" fill="#4FA574" transform="rotate(30 510 217)"/>
    <ellipse cx="536" cy="195" rx="7" ry="5" fill="#4FA574" transform="rotate(30 536 195)"/>
    <ellipse cx="536" cy="217" rx="7" ry="5" fill="#4FA574" transform="rotate(-30 536 217)"/>
    <circle cx="545" cy="206" r="7.6" fill="#5CBE87"/>
    <circle cx="545" cy="206" r="7.6" fill="none" stroke="#2E6C4A" stroke-width="1.4"/>
    <circle cx="548" cy="203" r="1.9" fill="#0B1220"/>
    <ellipse cx="524" cy="206" rx="18" ry="13.5" fill="#6BA9D8"/>
    <ellipse cx="524" cy="206" rx="18" ry="13.5" fill="none" stroke="#22496E" stroke-width="2"/>
    <g fill="#2B5B84" opacity=".55">
      <circle cx="524" cy="206" r="4.2"/>
      <circle cx="514" cy="200.5" r="2.6"/><circle cx="534" cy="200.5" r="2.6"/>
      <circle cx="514" cy="211.5" r="2.6"/><circle cx="534" cy="211.5" r="2.6"/>
    </g>
  </g>
</svg>

<div class="pen">
  <div class="bar"><b style="background:#E05B4B"></b><b style="background:#FFD43B"></b><b style="background:#3E8A5E"></b><span>star.py</span></div>
  <div class="src">
    <div><span class="kw">from</span><span class="nm"> turtle </span><span class="kw">import</span><span class="nm"> *</span></div>
    <div><span class="kw">for</span><span class="nm"> i </span><span class="kw">in</span><span class="nm"> </span><span class="fn">range</span><span class="nm">(</span><span class="no">36</span><span class="nm">):</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="fn">forward</span><span class="nm">(</span><span class="no">180</span><span class="nm">)</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="fn">left</span><span class="nm">(</span><span class="no">170</span><span class="nm">)</span></div>
  </div>
</div>`,
};
