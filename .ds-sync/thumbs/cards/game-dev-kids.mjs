// Game Development (kids) — a platformer level with a live HUD and the jump
// arc the player takes. Straight-on side view, so it never reads like the
// isometric Roblox/Minecraft cards.
export default {
  bg: 'linear-gradient(120deg,#32143A 0%,#1A0B22 54%,#09040D 100%)',
  a1: '#FFB3C8', a2: '#FF3D7F', a3: '#D41E5D', a4: '#8A0F3A',
  glow: '255,61,127',
  sub: '#B79BAE',

  badge: 'KIDS 6-12',
  kicker: 'GAME DESIGN COURSE',
  title: 'Game<br><span class="ac">Development</span>',
  tagline: 'Build platformers, puzzles and adventures',
  meta: 'SCRATCH + MAKECODE<i>·</i>YOUR OWN LEVELS',
  titleMax: 366,

  head: `
.hud{position:absolute;left:452px;top:96px;width:308px;display:flex;align-items:center;gap:10px;z-index:3;
  font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;letter-spacing:.12em;color:#FFD9E5}
.hud .sc{color:#FFB3C8}
.hud .lv{margin-left:auto;border:1px solid rgba(255,61,127,.6);background:rgba(255,61,127,.15);
  border-radius:6px;padding:3px 9px;font-size:10.5px;color:#FFB3C8}`,

  motif: `
<div class="hud">
  <span class="sc">SCORE</span><span>012400</span>
  <svg width="52" height="13" viewBox="0 0 52 13" fill="none">
    <path d="M6.5 12 C-1 6 1 1 6.5 3.4 C12 1 14 6 6.5 12 Z" fill="#FF3D7F"/>
    <path d="M25.5 12 C18 6 20 1 25.5 3.4 C31 1 33 6 25.5 12 Z" fill="#FF3D7F"/>
    <path d="M44.5 12 C37 6 39 1 44.5 3.4 C50 1 52 6 44.5 12 Z" fill="none" stroke="#FF3D7F" stroke-width="1.6" opacity=".55"/>
  </svg>
  <span class="lv">LEVEL 3</span>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs>
    <linearGradient id="plat" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FF5C90"/><stop offset="1" stop-color="#B81852"/>
    </linearGradient>
    <radialGradient id="coinG"><stop offset="0" stop-color="#FFE9A8"/><stop offset="1" stop-color="#F2B33D"/></radialGradient>
    <filter id="gblur" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="8"/></filter>
  </defs>

  <!-- distant pixel stars -->
  <g fill="#FFD9E5">
    <rect x="470" y="150" width="4" height="4" opacity=".5"/><rect x="700" y="140" width="5" height="5" opacity=".4"/>
    <rect x="600" y="128" width="4" height="4" opacity=".35"/><rect x="762" y="196" width="4" height="4" opacity=".45"/>
    <rect x="512" y="206" width="3" height="3" opacity=".3"/>
  </g>

  <!-- the jump arc: where the player goes -->
  <path d="M496 300 C 530 214 592 214 626 268" stroke="#FF9CBE" stroke-width="2.4" stroke-dasharray="3 8"
        fill="none" stroke-linecap="round" opacity=".85"/>

  <!-- coins on the arc -->
  <g>
    <circle cx="536" cy="238" r="15" fill="#F2B33D" opacity=".3" filter="url(#gblur)"/>
    <circle cx="536" cy="238" r="9" fill="url(#coinG)"/><circle cx="536" cy="238" r="9" fill="none" stroke="#C98A1C" stroke-width="1.5"/>
    <rect x="534" y="233" width="2.6" height="10" rx="1.3" fill="#C98A1C" opacity=".55"/>
  </g>
  <g>
    <circle cx="586" cy="232" r="15" fill="#F2B33D" opacity=".3" filter="url(#gblur)"/>
    <circle cx="586" cy="232" r="9" fill="url(#coinG)"/><circle cx="586" cy="232" r="9" fill="none" stroke="#C98A1C" stroke-width="1.5"/>
    <rect x="584" y="227" width="2.6" height="10" rx="1.3" fill="#C98A1C" opacity=".55"/>
  </g>

  <!-- platforms -->
  <g>
    <rect x="438" y="300" width="118" height="20" rx="6" fill="url(#plat)"/>
    <rect x="438" y="300" width="118" height="6" rx="3" fill="#FF87AE"/>
  </g>
  <g>
    <rect x="600" y="268" width="104" height="20" rx="6" fill="url(#plat)"/>
    <rect x="600" y="268" width="104" height="6" rx="3" fill="#FF87AE"/>
  </g>
  <g>
    <rect x="452" y="372" width="300" height="20" rx="6" fill="url(#plat)" opacity=".65"/>
    <rect x="452" y="372" width="300" height="6" rx="3" fill="#FF87AE" opacity=".7"/>
  </g>

  <!-- goal flag on the high platform -->
  <g>
    <circle cx="684" cy="238" r="30" fill="#FF3D7F" opacity=".3" filter="url(#gblur)"/>
    <rect x="681" y="222" width="4" height="48" rx="2" fill="#FFD9E5"/>
    <path d="M685 224 L716 232 L685 242 Z" fill="#FF3D7F"/>
    <path d="M685 224 L716 232 L685 242 Z" fill="none" stroke="#FFB3C8" stroke-width="1.4"/>
  </g>
</svg>`,
};
