// Scratch Programming — the first script every Scratcher writes, and the
// stage behaviour it produces (move 10 steps / if on edge, bounce).
export default {
  bg: 'linear-gradient(120deg,#2A2047 0%,#171029 54%,#090613 100%)',
  a1: '#FFD08A', a2: '#F79A2B', a3: '#D97A12', a4: '#8E4E08',
  glow: '247,154,43',
  sub: '#A79BC0',

  badge: 'KIDS 6-12',
  kicker: 'SCRATCH CODING COURSE',
  title: 'Scratch<br><span class="ac">Programming</span>',
  tagline: 'Drag blocks, build real games',
  meta: 'GAMES<i>·</i>ANIMATIONS<i>·</i>STORIES',
  titleMax: 336,
  titleSize: 48,

  head: `
.stage{position:absolute;left:552px;top:80px;width:226px;height:170px;z-index:2;border-radius:12px;
  background:linear-gradient(#FDFCF8,#EFEADF);border:1px solid rgba(247,154,43,.5);overflow:hidden;
  box-shadow:0 22px 50px rgba(0,0,0,.6),0 0 34px rgba(247,154,43,.22)}
.stage .lbl{position:absolute;left:9px;top:7px;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.1em;color:#9A8F7C}
.blocks{position:absolute;left:422px;top:236px;width:228px;z-index:3;transform:rotate(-1.5deg);
  filter:drop-shadow(0 16px 32px rgba(0,0,0,.6))}
.hat{background:#FFBF00;border-radius:15px 15px 6px 6px;padding:9px 13px 8px;display:flex;align-items:center;gap:7px;
  border-bottom:3px solid #CC9800}
.hat span{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:#4A3300}
.ctl{background:#FFAB19;border-radius:7px;margin-top:4px;padding-bottom:9px;border-bottom:3px solid #CC8514}
.ctl .hd{padding:8px 13px;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:#5C3B00}
.ctl .body{padding-left:13px;padding-right:8px}
.mv{background:#4C97FF;border-radius:7px;padding:8px 12px;font-family:'JetBrains Mono',monospace;
  font-size:11px;font-weight:700;color:#fff;border-bottom:3px solid #3373CC;margin-bottom:5px;white-space:nowrap}
.mv:last-child{margin-bottom:0}
.mv b{color:#FFE9A8;font-weight:700}`,

  motif: `
<div class="stage">
  <span class="lbl">STAGE</span>
  <svg width="226" height="170" viewBox="0 0 226 170" fill="none">
    <!-- the bounce path the script produces -->
    <path d="M22 132 L200 62" stroke="#F79A2B" stroke-width="2.4" stroke-dasharray="6 6" opacity=".7"/>
    <path d="M200 62 L54 34" stroke="#F79A2B" stroke-width="2.4" stroke-dasharray="6 6" opacity=".4"/>
    <!-- edges it bounces off -->
    <path d="M216 10 L216 160" stroke="#4C97FF" stroke-width="3.4" opacity=".45" stroke-linecap="round"/>
    <path d="M10 10 L10 160" stroke="#4C97FF" stroke-width="3.4" opacity=".45" stroke-linecap="round"/>
    <!-- the sprite, mid-flight -->
    <circle cx="200" cy="62" r="24" fill="#F79A2B" opacity=".25"/>
    <circle cx="200" cy="62" r="14" fill="#FF7A2F"/>
    <circle cx="200" cy="62" r="14" fill="none" stroke="#C4520F" stroke-width="1.8"/>
    <circle cx="195" cy="57" r="4" fill="#FFD9AE" opacity=".95"/>
    <!-- motion ticks -->
    <g stroke="#C4520F" stroke-width="2.2" stroke-linecap="round" opacity=".5">
      <path d="M172 72 L158 78"/><path d="M176 84 L164 89"/>
    </g>
  </svg>
</div>

<div class="blocks">
  <div class="hat">
    <svg width="13" height="13" viewBox="0 0 12 12"><path d="M2 1 L2 11" stroke="#2F6B2F" stroke-width="1.7" stroke-linecap="round"/><path d="M2.8 1.6 C5 .6 7 2.6 9.6 1.8 L9.6 6 C7 6.8 5 4.8 2.8 5.8 Z" fill="#4CBF56"/></svg>
    <span>when clicked</span>
  </div>
  <div class="ctl">
    <div class="hd">forever</div>
    <div class="body">
      <div class="mv">move <b>10</b> steps</div>
      <div class="mv">if on edge, bounce</div>
    </div>
  </div>
</div>`,
};
