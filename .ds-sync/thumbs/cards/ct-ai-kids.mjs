// CBSE Computational Thinking & AI (Classes 3-8) — the four pillars of CT,
// which is exactly what the CBSE syllabus is built on.
export default {
  bg: 'linear-gradient(120deg,#151A3A 0%,#0B0E22 54%,#04050D 100%)',
  a1: '#C3CBFF', a2: '#6366F1', a3: '#4348C7', a4: '#282C82',
  glow: '99,102,241',
  sub: '#98A0C4',

  badge: 'CLASS 3-8',
  kicker: 'CBSE-ALIGNED AI COURSE',
  title: 'Computational<br><span class="ac">Thinking & AI</span>',
  tagline: 'The four pillars, then the AI project cycle',
  meta: 'SCRATCH + PYTHON<i>·</i>PATHWAY TO AI CODE 417',
  titleMax: 372,
  titleSize: 45,

  head: `
.pil{position:absolute;z-index:2;width:150px;height:96px;border-radius:12px;background:#101533;
  border:1px solid rgba(99,102,241,.4);box-shadow:0 18px 40px rgba(0,0,0,.55);padding:11px 13px}
.pil .n{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.16em;color:#5D66B8}
.pil .t{font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;letter-spacing:.06em;color:#E3E7FF;margin-top:3px}
.pil .g{position:absolute;right:11px;bottom:10px}
.p1{left:452px;top:112px}
.p2{left:614px;top:112px}
.p3{left:452px;top:222px}
.p4{left:614px;top:222px;border-color:#6366F1;background:#1A2050;box-shadow:0 18px 40px rgba(0,0,0,.55),0 0 26px rgba(99,102,241,.34)}`,

  motif: `
<div class="pil p1">
  <div class="n">01</div><div class="t">DECOMPOSE</div>
  <svg class="g" width="42" height="34" viewBox="0 0 42 34" fill="none">
    <rect x="1" y="4" width="15" height="11" rx="2.5" stroke="#8B92FF" stroke-width="1.8"/>
    <rect x="25" y="1" width="12" height="9" rx="2.5" stroke="#8B92FF" stroke-width="1.6" opacity=".8"/>
    <rect x="25" y="14" width="12" height="9" rx="2.5" stroke="#8B92FF" stroke-width="1.6" opacity=".8"/>
    <rect x="25" y="27" width="12" height="6" rx="2" stroke="#8B92FF" stroke-width="1.6" opacity=".55"/>
    <path d="M17 10 H23" stroke="#8B92FF" stroke-width="1.6"/>
  </svg>
</div>

<div class="pil p2">
  <div class="n">02</div><div class="t">PATTERNS</div>
  <svg class="g" width="44" height="32" viewBox="0 0 44 32" fill="none">
    <circle cx="6" cy="26" r="4.5" fill="#8B92FF" opacity=".55"/>
    <rect x="14.5" y="21" width="9" height="9" rx="2" fill="#8B92FF" opacity=".55"/>
    <circle cx="32" cy="26" r="4.5" fill="#8B92FF" opacity=".55"/>
    <circle cx="6" cy="10" r="4.5" fill="#8B92FF" opacity=".9"/>
    <rect x="14.5" y="5" width="9" height="9" rx="2" fill="#8B92FF" opacity=".9"/>
    <circle cx="32" cy="10" r="4.5" fill="none" stroke="#C3CBFF" stroke-width="1.8" stroke-dasharray="3 3"/>
  </svg>
</div>

<div class="pil p3">
  <div class="n">03</div><div class="t">ABSTRACTION</div>
  <svg class="g" width="42" height="34" viewBox="0 0 42 34" fill="none">
    <path d="M4 30 C 10 8 20 26 26 12 C 30 3 34 9 38 5" stroke="#8B92FF" stroke-width="1.6" opacity=".4" fill="none"/>
    <path d="M4 26 L38 9" stroke="#C3CBFF" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="4" cy="26" r="2.8" fill="#C3CBFF"/><circle cx="38" cy="9" r="2.8" fill="#C3CBFF"/>
  </svg>
</div>

<div class="pil p4">
  <div class="n">04</div><div class="t">ALGORITHMS</div>
  <svg class="g" width="42" height="34" viewBox="0 0 42 34" fill="none">
    <rect x="12" y="1" width="18" height="8" rx="2.5" fill="#C3CBFF"/>
    <path d="M21 9 V14" stroke="#C3CBFF" stroke-width="1.8"/>
    <path d="M21 14 L30 20 L21 26 L12 20 Z" fill="none" stroke="#C3CBFF" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M30 20 H38" stroke="#8B92FF" stroke-width="1.8"/>
    <path d="M21 26 V32" stroke="#8B92FF" stroke-width="1.8"/>
    <path d="M18 29.5 L21 32.5 L24 29.5" stroke="#8B92FF" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  </svg>
</div>`,
};
