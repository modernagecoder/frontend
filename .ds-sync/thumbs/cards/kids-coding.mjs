// Kids Coding Adventure — a 24-month journey, drawn as the route itself.
export default {
  bg: 'linear-gradient(120deg,#0F2B2E 0%,#08191C 54%,#03090B 100%)',
  a1: '#9EF3E4', a2: '#2DD4BF', a3: '#12A594', a4: '#0A6A60',
  glow: '45,212,191',
  sub: '#8FA9A6',

  badge: 'KIDS 7-12',
  kicker: 'BEGINNER CODING JOURNEY',
  title: 'Kids Coding<br><span class="ac">Adventure</span>',
  tagline: 'From "what is code?" to your own games',
  meta: '24 MONTHS<i>·</i>BLOCKS TO REAL GAMES',
  titleMax: 366,
  titleSize: 52,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs>
    <linearGradient id="road" x1="452" y1="336" x2="748" y2="132" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0A6A60"/><stop offset=".55" stop-color="#2DD4BF"/><stop offset="1" stop-color="#D8FFF8"/>
    </linearGradient>
    <filter id="kblur" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="9"/></filter>
    <filter id="kblur2" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="4"/></filter>
  </defs>

  <!-- the route -->
  <path d="M452 334 C 500 334 512 272 560 262 C 612 251 616 208 664 196 C 706 186 722 160 748 132"
        stroke="#2DD4BF" stroke-width="13" opacity=".22" fill="none" stroke-linecap="round" filter="url(#kblur)"/>
  <path d="M452 334 C 500 334 512 272 560 262 C 612 251 616 208 664 196 C 706 186 722 160 748 132"
        stroke="url(#road)" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="9 8"/>

  <!-- 1 · blocks -->
  <g>
    <circle cx="452" cy="334" r="17" fill="#07211F" stroke="#12A594" stroke-width="2.4"/>
    <g fill="#2DD4BF"><rect x="444" y="327" width="16" height="4" rx="2"/><rect x="444" y="333" width="16" height="4" rx="2"/><rect x="444" y="339" width="11" height="4" rx="2"/></g>
    <text x="452" y="365" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" letter-spacing="1.2" fill="#6E8F8B">BLOCKS</text>
  </g>
  <!-- 2 · logic -->
  <g>
    <circle cx="560" cy="262" r="17" fill="#07211F" stroke="#12A594" stroke-width="2.4"/>
    <g stroke="#2DD4BF" stroke-width="2.2" fill="none" stroke-linecap="round">
      <path d="M552 269 L557 262 L552 255"/><path d="M557 262 L568 262"/><path d="M564 256 L568 262 L564 268"/>
    </g>
    <text x="560" y="293" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" letter-spacing="1.2" fill="#6E8F8B">LOGIC</text>
  </g>
  <!-- 3 · games -->
  <g>
    <circle cx="664" cy="196" r="17" fill="#07211F" stroke="#12A594" stroke-width="2.4"/>
    <rect x="653" y="190" width="22" height="13" rx="6" fill="none" stroke="#2DD4BF" stroke-width="2"/>
    <circle cx="658.5" cy="196.5" r="1.8" fill="#2DD4BF"/><circle cx="669.5" cy="196.5" r="1.8" fill="#2DD4BF"/>
    <text x="664" y="227" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" letter-spacing="1.2" fill="#6E8F8B">GAMES</text>
  </g>
  <!-- 4 · create, the goal -->
  <g>
    <circle cx="748" cy="132" r="34" fill="#2DD4BF" opacity=".28" filter="url(#kblur2)"/>
    <circle cx="748" cy="132" r="24" fill="none" stroke="#9EF3E4" stroke-width="1.6" stroke-dasharray="4 6" opacity=".7"/>
    <circle cx="748" cy="132" r="18" fill="#07211F" stroke="#9EF3E4" stroke-width="2.6"/>
    <path d="M748 122 L751 129.6 L759 130 L752.8 135 L755 142.6 L748 138.2 L741 142.6 L743.2 135 L737 130 L745 129.6 Z" fill="#9EF3E4"/>
    <text x="748" y="167" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="9.5" font-weight="700" letter-spacing="1.2" fill="#9EF3E4">CREATE</text>
  </g>
</svg>`,
};
