// Data Science Masterclass — a fitted model with the statistics that say
// whether to believe it.
export default {
  bg: 'linear-gradient(120deg,#04262A 0%,#021618 54%,#000809 100%)',
  a1: '#8FE8DC', a2: '#0D9488', a3: '#0A7268', a4: '#054A44',
  glow: '13,148,136',
  sub: '#84A5A1',

  badge: 'COLLEGE & BEYOND',
  kicker: 'DATA SCIENCE MASTERCLASS',
  title: 'Data Science<br><span class="ac">Masterclass</span>',
  tagline: 'Raw data to a decision someone can act on',
  meta: 'STATISTICS<i>·</i>PANDAS<i>·</i>VISUALISATION<i>·</i>ML',
  titleMax: 372,
  titleSize: 48,

  head: `
.stats{position:absolute;left:452px;top:322px;display:flex;gap:9px;z-index:3}
.stats span{border-radius:8px;border:1px solid rgba(13,148,136,.5);background:rgba(13,148,136,.12);
  padding:6px 12px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;
  letter-spacing:.05em;color:#B7EDE6}
.stats b{color:#8FE8DC}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- axes -->
  <path d="M470 296 H768" stroke="rgba(13,148,136,.5)" stroke-width="1.6"/>
  <path d="M470 108 V296" stroke="rgba(13,148,136,.5)" stroke-width="1.6"/>
  <g stroke="rgba(255,255,255,.06)" stroke-width="1">
    <path d="M470 250 H768"/><path d="M470 204 H768"/><path d="M470 158 H768"/>
  </g>

  <!-- scatter -->
  <g fill="#0D9488" opacity=".85">
    <circle cx="500" cy="272" r="4.5"/><circle cx="522" cy="258" r="4.5"/><circle cx="540" cy="266" r="4.5"/>
    <circle cx="560" cy="240" r="4.5"/><circle cx="582" cy="232" r="4.5"/><circle cx="600" cy="244" r="4.5"/>
    <circle cx="620" cy="212" r="4.5"/><circle cx="640" cy="200" r="4.5"/><circle cx="660" cy="208" r="4.5"/>
    <circle cx="680" cy="176" r="4.5"/><circle cx="700" cy="168" r="4.5"/><circle cx="722" cy="152" r="4.5"/>
    <circle cx="742" cy="146" r="4.5"/><circle cx="512" cy="284" r="4.5"/><circle cx="596" cy="222" r="4.5"/>
    <circle cx="668" cy="188" r="4.5"/>
  </g>

  <!-- the fit -->
  <path d="M486 284 L754 140" stroke="#8FE8DC" stroke-width="2.6" stroke-linecap="round"/>
  <!-- confidence band -->
  <path d="M486 296 L754 152 L754 128 L486 272 Z" fill="#0D9488" opacity=".14"/>

  <g font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#5E8F8A">
    <text x="470" y="100">spend</text>
    <text x="768" y="312" text-anchor="end">reach</text>
  </g>
</svg>

<div class="stats">
  <span>R&#178; <b>0.87</b></span>
  <span>p <b>&lt; 0.01</b></span>
  <span>n <b>1,240</b></span>
</div>`,
};
