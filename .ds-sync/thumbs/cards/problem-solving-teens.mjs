// Problem Solving & DSA — a binary search tree with the lookup path lit,
// and the complexity that makes it worth learning.
export default {
  bg: 'linear-gradient(120deg,#141A38 0%,#0B0F21 54%,#04050D 100%)',
  a1: '#C7CEFF', a2: '#818CF8', a3: '#5A63D6', a4: '#333A8E',
  glow: '129,140,248',
  sub: '#98A0C4',

  badge: 'TEENS 13-18',
  kicker: 'DSA & INTERVIEW PREP',
  title: 'Problem Solving<br><span class="ac">& DSA</span>',
  tagline: 'The algorithms interviews are built on',
  meta: '52 WEEKS<i>·</i>TREES<i>·</i>GRAPHS<i>·</i>COMPLEXITY',
  titleMax: 372,
  titleSize: 44,

  head: `
.cx{position:absolute;left:466px;top:330px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:8px;border:1px solid rgba(129,140,248,.5);background:rgba(129,140,248,.13);
  padding:6px 13px;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;
  letter-spacing:.06em;color:#C7CEFF}
.cx b{color:#818CF8}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs><filter id="tb" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="7"/></filter></defs>

  <!-- edges -->
  <g stroke="#39407A" stroke-width="2">
    <path d="M614 128 L544 190"/><path d="M614 128 L684 190"/>
    <path d="M544 190 L500 252"/><path d="M544 190 L588 252"/>
    <path d="M684 190 L640 252"/><path d="M684 190 L728 252"/>
  </g>
  <!-- the search path for 40 -->
  <g stroke="#818CF8" stroke-width="3.4" stroke-linecap="round">
    <path d="M614 128 L544 190"/><path d="M544 190 L588 252"/>
  </g>

  <!-- nodes -->
  <g font-family="'JetBrains Mono',monospace" font-size="13" font-weight="700" text-anchor="middle">
    <g><circle cx="614" cy="128" r="21" fill="#1B2150" stroke="#818CF8" stroke-width="2.6"/><text x="614" y="133" fill="#E6EAFF">50</text></g>
    <g><circle cx="544" cy="190" r="21" fill="#1B2150" stroke="#818CF8" stroke-width="2.6"/><text x="544" y="195" fill="#E6EAFF">30</text></g>
    <g><circle cx="684" cy="190" r="21" fill="#111634" stroke="#39407A" stroke-width="2.2"/><text x="684" y="195" fill="#6E76A8">70</text></g>
    <g><circle cx="500" cy="252" r="19" fill="#111634" stroke="#39407A" stroke-width="2.2"/><text x="500" y="257" fill="#6E76A8">20</text></g>
    <g>
      <circle cx="588" cy="252" r="30" fill="#818CF8" opacity=".32" filter="url(#tb)"/>
      <circle cx="588" cy="252" r="21" fill="#2A3080" stroke="#C7CEFF" stroke-width="3"/>
      <text x="588" y="257" fill="#FFFFFF">40</text>
    </g>
    <g><circle cx="640" cy="252" r="19" fill="#111634" stroke="#39407A" stroke-width="2.2"/><text x="640" y="257" fill="#6E76A8">60</text></g>
    <g><circle cx="728" cy="252" r="19" fill="#111634" stroke="#39407A" stroke-width="2.2"/><text x="728" y="257" fill="#6E76A8">80</text></g>
  </g>

  <!-- the comparisons made -->
  <g font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" fill="#7078B8">
    <text x="646" y="160">40 &lt; 50</text>
    <text x="556" y="228">40 &gt; 30</text>
  </g>
</svg>

<div class="cx">FOUND IN <b>3</b> STEPS <span style="color:#5A63D6">&#183;</span> <b>O(log n)</b></div>`,
};
