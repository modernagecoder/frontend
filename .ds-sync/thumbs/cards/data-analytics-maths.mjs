// Data Analytics Math — a correlation matrix, and the warning that comes
// with every one of them.
export default {
  bg: 'linear-gradient(120deg,#2A2408 0%,#171404 54%,#060501 100%)',
  a1: '#F2DE9A', a2: '#C9A227', a3: '#9A7A12', a4: '#5E4A08',
  glow: '201,162,39',
  sub: '#AFA684',

  badge: 'PROFESSIONAL',
  kicker: 'DATA ANALYTICS MATH',
  title: 'Data<br><span class="ac">Analytics Math</span>',
  tagline: 'The maths under the dashboard',
  meta: 'CORRELATION<i>·</i>REGRESSION<i>·</i>PROBABILITY',
  titleMax: 372,
  titleSize: 48,

  head: `
.warn{position:absolute;left:452px;top:334px;z-index:3;border-radius:7px;border:1px solid rgba(201,162,39,.5);
  background:rgba(201,162,39,.11);padding:5px 12px;font-family:'JetBrains Mono',monospace;
  font-size:10px;font-weight:700;letter-spacing:.05em;color:#F2DE9A}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#9A8A5E">
    <text x="530" y="118" text-anchor="middle">spend</text>
    <text x="602" y="118" text-anchor="middle">reach</text>
    <text x="674" y="118" text-anchor="middle">sales</text>
    <text x="746" y="118" text-anchor="middle">churn</text>
    <text x="486" y="152" text-anchor="end">spend</text>
    <text x="486" y="212" text-anchor="end">reach</text>
    <text x="486" y="272" text-anchor="end">sales</text>
    <text x="486" y="332" text-anchor="end">churn</text>
  </g>

  <!-- matrix cells: value drives opacity -->
  <g>
    <rect x="500" y="128" width="60" height="48" rx="4" fill="#C9A227" opacity="1"/>
    <rect x="572" y="128" width="60" height="48" rx="4" fill="#C9A227" opacity=".78"/>
    <rect x="644" y="128" width="60" height="48" rx="4" fill="#C9A227" opacity=".62"/>
    <rect x="716" y="128" width="60" height="48" rx="4" fill="#7A5FC9" opacity=".3"/>

    <rect x="500" y="188" width="60" height="48" rx="4" fill="#C9A227" opacity=".78"/>
    <rect x="572" y="188" width="60" height="48" rx="4" fill="#C9A227" opacity="1"/>
    <rect x="644" y="188" width="60" height="48" rx="4" fill="#C9A227" opacity=".84"/>
    <rect x="716" y="188" width="60" height="48" rx="4" fill="#7A5FC9" opacity=".22"/>

    <rect x="500" y="248" width="60" height="48" rx="4" fill="#C9A227" opacity=".62"/>
    <rect x="572" y="248" width="60" height="48" rx="4" fill="#C9A227" opacity=".84"/>
    <rect x="644" y="248" width="60" height="48" rx="4" fill="#C9A227" opacity="1"/>
    <rect x="716" y="248" width="60" height="48" rx="4" fill="#7A5FC9" opacity=".44"/>

    <rect x="500" y="308" width="60" height="48" rx="4" fill="#7A5FC9" opacity=".3"/>
    <rect x="572" y="308" width="60" height="48" rx="4" fill="#7A5FC9" opacity=".22"/>
    <rect x="644" y="308" width="60" height="48" rx="4" fill="#7A5FC9" opacity=".44"/>
    <rect x="716" y="308" width="60" height="48" rx="4" fill="#C9A227" opacity="1"/>
  </g>

  <g font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#241E06" text-anchor="middle">
    <text x="530" y="158">1.00</text><text x="602" y="158">.81</text><text x="674" y="158">.64</text>
    <text x="602" y="218">1.00</text><text x="674" y="218">.87</text>
    <text x="530" y="218">.81</text>
    <text x="530" y="278">.64</text><text x="602" y="278">.87</text><text x="674" y="278">1.00</text>
    <text x="746" y="338">1.00</text>
  </g>
  <g font-family="'JetBrains Mono',monospace" font-size="10" font-weight="700" fill="#CFC0F0" text-anchor="middle">
    <text x="746" y="158">-.22</text><text x="746" y="218">-.15</text><text x="746" y="278">-.38</text>
    <text x="530" y="338">-.22</text><text x="602" y="338">-.15</text><text x="674" y="338">-.38</text>
  </g>
</svg>

<div class="warn">STRONG r &#8800; CAUSE. FIND THE CONFOUNDER.</div>`,
};
