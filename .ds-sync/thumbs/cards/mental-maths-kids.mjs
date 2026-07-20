// Mental Maths Mastery — the bridging-to-ten trick, drawn as the split it is.
export default {
  bg: 'linear-gradient(120deg,#1E2708 0%,#111704 54%,#050701 100%)',
  a1: '#DCF58A', a2: '#AEEA00', a3: '#82B000', a4: '#4E6A00',
  glow: '174,234,0',
  sub: '#A4B489',

  badge: 'AGES 5-10',
  kicker: 'MENTAL MATHS MASTERY',
  title: 'Mental Maths<br><span class="ac">Mastery</span>',
  tagline: 'Fast, without a calculator or fingers',
  meta: 'NUMBER BONDS<i>·</i>BRIDGING<i>·</i>SPEED DRILLS',
  titleMax: 372,
  titleSize: 47,

  head: `
.q{position:absolute;left:452px;top:112px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:40px;font-weight:800;color:#F3FBDC}
.q b{color:#AEEA00}
.ans{position:absolute;left:452px;top:300px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:32px;font-weight:800;color:#DCF58A}
.ans small{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.14em;
  color:#7E9450;display:block;margin-bottom:2px}
.tip{position:absolute;left:600px;top:308px;z-index:3;border-radius:8px;border:1px solid rgba(174,234,0,.45);
  background:rgba(174,234,0,.11);padding:6px 12px;font-family:'JetBrains Mono',monospace;font-size:10px;
  font-weight:700;letter-spacing:.05em;color:#DCF58A}`,

  motif: `
<div class="q">8 <b>+</b> 5</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- split the 5 into 2 and 3 -->
  <g stroke="#5E7A18" stroke-width="2.4" fill="none" stroke-linecap="round">
    <path d="M596 176 L560 216"/>
    <path d="M596 176 L648 216"/>
  </g>
  <circle cx="596" cy="170" r="17" fill="#1E2708" stroke="#AEEA00" stroke-width="2.4"/>
  <text x="596" y="176" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="18" font-weight="800" fill="#F3FBDC">5</text>

  <circle cx="556" cy="232" r="17" fill="#26330A" stroke="#DCF58A" stroke-width="2.4"/>
  <text x="556" y="238" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="18" font-weight="800" fill="#F3FBDC">2</text>
  <circle cx="652" cy="232" r="17" fill="#1E2708" stroke="#AEEA00" stroke-width="2.4"/>
  <text x="652" y="238" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="18" font-weight="800" fill="#F3FBDC">3</text>

  <!-- 8 + 2 makes ten -->
  <path d="M540 240 C 500 250 496 190 486 178" stroke="#AEEA00" stroke-width="2.4" stroke-dasharray="4 5" fill="none" stroke-linecap="round"/>
  <text x="486" y="256" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#9EB85E">8 + 2 = 10</text>
  <text x="632" y="272" font-family="'JetBrains Mono',monospace" font-size="10.5" font-weight="700" fill="#9EB85E">10 + 3</text>
</svg>

<div class="ans"><small>ANSWER</small>13</div>
<div class="tip">MAKE A TEN FIRST</div>`,
};
