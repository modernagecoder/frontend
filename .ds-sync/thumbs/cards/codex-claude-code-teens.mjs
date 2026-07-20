// Codex + Claude Code (teens) — an agent working: plan, tool calls, PR.
export default {
  bg: 'linear-gradient(120deg,#22201C 0%,#131210 54%,#050505 100%)',
  a1: '#F4E7C8', a2: '#E8D5A8', a3: '#B9A473', a4: '#7A6B45',
  glow: '232,213,168',
  sub: '#A8A093',

  badge: 'TEENS 13-18',
  kicker: 'AI CODING AGENTS',
  title: 'Codex +<br><span class="ac">Claude Code</span>',
  tagline: 'Drive the agent. Review what it ships.',
  meta: '24 CLASSES<i>·</i>CLI + MCP<i>·</i>REAL GITHUB PRs',
  titleMax: 372,
  titleSize: 50,

  head: `
.ag{position:absolute;left:428px;top:98px;width:336px;z-index:2;border-radius:12px;overflow:hidden;
  background:#0C0B0A;border:1px solid rgba(232,213,168,.32);
  box-shadow:0 24px 52px rgba(0,0,0,.7),0 0 32px rgba(232,213,168,.12)}
.ag .bar{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#171512;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#8A8272}
.ag .bar .md{margin-left:auto;border:1px solid rgba(232,213,168,.42);border-radius:5px;padding:1px 7px;
  font-size:8.5px;font-weight:700;letter-spacing:.1em;color:#E8D5A8}
.ag .bd{padding:11px 13px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.85;white-space:nowrap}
.you{color:#F4E7C8;font-weight:700}
.ok{color:#8FD8A0}
.dim{color:#6E685C}
.act{color:#E8D5A8}
.pr{color:#9BC4F0}
.cur{display:inline-block;width:6px;height:12px;background:#E8D5A8;vertical-align:-2px;margin-left:5px;border-radius:1px}`,

  motif: `
<div class="ag">
  <div class="bar">
    <span>claude</span>
    <span class="md">PLAN MODE</span>
  </div>
  <div class="bd">
    <div><span class="dim">&gt; </span><span class="you">add a leaderboard to the game</span></div>
    <div><span class="ok">&#10003;</span><span class="dim"> read </span><span class="act">src/game.js</span><span class="dim">, </span><span class="act">src/api.js</span></div>
    <div><span class="ok">&#10003;</span><span class="dim"> wrote </span><span class="act">src/leaderboard.js</span></div>
    <div><span class="ok">&#10003;</span><span class="dim"> tests </span><span class="ok">12 passed</span></div>
    <div><span class="dim">&#8594; opened </span><span class="pr">PR #18</span><span class="dim"> for review</span><span class="cur"></span></div>
  </div>
</div>`,
};
