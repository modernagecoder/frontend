// Vibe Coding for Kids — describe it, then build it: a prompt and the scene
// it turns into.
export default {
  bg: 'linear-gradient(120deg,#2E1710 0%,#1B0D08 54%,#080403 100%)',
  a1: '#FFC2A3', a2: '#FF7847', a3: '#DB4F1E', a4: '#8E2E0D',
  glow: '255,120,71',
  sub: '#B49A8E',

  badge: 'KIDS 8-12',
  kicker: 'AI + BLOCK CODING',
  title: 'Vibe Coding<br><span class="ac">for Kids</span>',
  tagline: 'Say the idea out loud, then build it for real',
  meta: '12 WEEKS<i>·</i>AI TOOLS<i>·</i>GAMES & STORIES',
  titleMax: 362,
  titleSize: 52,

  head: `
.ask{position:absolute;left:432px;top:112px;width:330px;z-index:3;display:flex;align-items:center;gap:10px;
  border-radius:12px;background:#160B06;border:1px solid rgba(255,120,71,.5);padding:11px 13px;
  box-shadow:0 18px 40px rgba(0,0,0,.6),0 0 30px rgba(255,120,71,.24)}
.ask .q{font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:600;color:#FFE4D6;white-space:nowrap}
.ask .car{display:inline-block;width:6px;height:12px;background:#FF7847;vertical-align:-2px;margin-left:5px;border-radius:1px}
.ask .go{margin-left:auto;width:24px;height:24px;border-radius:7px;flex:0 0 24px;
  background:linear-gradient(140deg,#FF9E70,#DB4F1E);display:flex;align-items:center;justify-content:center}
.made{position:absolute;left:474px;top:196px;width:290px;height:158px;z-index:2;border-radius:12px;overflow:hidden;
  background:linear-gradient(160deg,#1B1030,#0B0716);border:1px solid rgba(255,120,71,.42);
  box-shadow:0 22px 50px rgba(0,0,0,.62),0 0 32px rgba(255,120,71,.18)}
.made .tag{position:absolute;left:10px;top:8px;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.12em;color:#FF9E70}`,

  motif: `
<div class="ask">
  <span class="q">make a rocket fly to the moon<span class="car"></span></span>
  <span class="go">
    <svg width="13" height="13" viewBox="0 0 14 14"><path d="M7 0.6 L8.5 5 L13 6.5 L8.5 8 L7 12.4 L5.5 8 L1 6.5 L5.5 5 Z" fill="#2A0F05"/></svg>
  </span>
</div>

<div class="made">
  <span class="tag">YOUR GAME</span>
  <svg width="290" height="158" viewBox="0 0 290 158" fill="none">
    <defs>
      <radialGradient id="moonG"><stop offset="0" stop-color="#FFF4DC"/><stop offset="1" stop-color="#F2D9A0"/></radialGradient>
      <filter id="vb" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="6"/></filter>
    </defs>
    <g fill="#FFE4D6">
      <rect x="30" y="30" width="3" height="3" opacity=".7"/><rect x="86" y="18" width="2.5" height="2.5" opacity=".5"/>
      <rect x="140" y="40" width="3" height="3" opacity=".45"/><rect x="60" y="86" width="2.5" height="2.5" opacity=".4"/>
      <rect x="196" y="102" width="2.5" height="2.5" opacity=".4"/><rect x="118" y="118" width="3" height="3" opacity=".35"/>
    </g>
    <circle cx="236" cy="44" r="32" fill="#F2D9A0" opacity=".3" filter="url(#vb)"/>
    <circle cx="236" cy="44" r="21" fill="url(#moonG)"/>
    <g fill="#D9BE86" opacity=".75"><circle cx="230" cy="39" r="4"/><circle cx="242" cy="50" r="3"/><circle cx="233" cy="53" r="2"/></g>
    <path d="M28 138 C 96 138 150 104 202 60" stroke="#FF7847" stroke-width="2.4" stroke-dasharray="5 7" fill="none" stroke-linecap="round" opacity=".85"/>
    <g transform="rotate(-42 202 60)">
      <path d="M202 46 C 210 54 210 66 202 74 C 194 66 194 54 202 46 Z" fill="#FFE4D6"/>
      <path d="M196 66 L190 78 L200 72 Z" fill="#FF7847"/>
      <path d="M208 66 L214 78 L204 72 Z" fill="#FF7847"/>
      <circle cx="202" cy="58" r="4" fill="#5BC8E8"/>
      <path d="M198 76 C 200 84 204 84 206 76 Z" fill="#FFB07A"/>
    </g>
  </svg>
</div>`,
};
