// Codex + Claude Code (adults) — same parchment family as the teens card,
// but the professional version: parallel agents and the review gate.
export default {
  bg: 'linear-gradient(120deg,#22201C 0%,#131210 54%,#050505 100%)',
  a1: '#F4E7C8', a2: '#E8D5A8', a3: '#B9A473', a4: '#7A6B45',
  glow: '232,213,168',
  sub: '#A8A093',

  badge: 'PROFESSIONALS',
  kicker: 'AI CODING AGENTS · ADVANCED',
  title: 'Codex +<br><span class="ac">Claude Code</span>',
  tagline: 'Run agents in parallel. Review like a lead.',
  meta: '24 CLASSES<i>·</i>MCP + SUBAGENTS<i>·</i>AGENT SDK<i>·</i>CI',
  titleMax: 372,
  titleSize: 50,

  head: `
.ag{position:absolute;left:436px;top:100px;width:330px;z-index:2}
.job{display:flex;align-items:center;gap:10px;border-radius:9px;background:#141210;
  border:1px solid rgba(232,213,168,.28);padding:9px 12px;margin-bottom:8px;box-shadow:0 12px 28px rgba(0,0,0,.6)}
.job:last-child{margin-bottom:0}
.job .d{width:8px;height:8px;border-radius:50%;flex:0 0 8px}
.job .n{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#F0E9D8}
.job .b{font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#8A8272;margin-top:2px;letter-spacing:.05em}
.job .s{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700}
.run .d{background:#E8D5A8;box-shadow:0 0 8px rgba(232,213,168,.8)}
.run .s{color:#E8D5A8}
.ok .d{background:#8FD8A0}
.ok .s{color:#8FD8A0}
.gate{position:absolute;left:436px;top:314px;width:330px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:9px;border:1px solid rgba(232,213,168,.5);background:rgba(232,213,168,.09);padding:8px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.04em;color:#F4E7C8}
.gate b{color:#E8D5A8}`,

  motif: `
<div class="ag">
  <div class="job ok"><span class="d"></span><span><span class="n">agent 1 &#183; migrate auth</span><span class="b">14 FILES &#183; TESTS GREEN</span></span><span class="s">PR #71</span></div>
  <div class="job run"><span class="d"></span><span><span class="n">agent 2 &#183; add rate limiting</span><span class="b">RUNNING &#183; STEP 4/6</span></span><span class="s">42s</span></div>
  <div class="job ok"><span class="d"></span><span><span class="n">agent 3 &#183; backfill docs</span><span class="b">9 FILES</span></span><span class="s">PR #73</span></div>
</div>

<div class="gate">
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1 L12.5 3.4 V7 C12.5 10 7 13 7 13 C7 13 1.5 10 1.5 7 V3.4 Z" stroke="#E8D5A8" stroke-width="1.5" fill="none"/></svg>
  NOTHING MERGES WITHOUT <b>YOUR</b> REVIEW
</div>`,
};
