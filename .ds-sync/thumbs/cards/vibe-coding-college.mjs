// Vibe Coding for College — same turquoise family as the teens card, but
// the grown-up version: AI writes the diff, you review it.
export default {
  bg: 'linear-gradient(120deg,#062A28 0%,#031A18 54%,#010908 100%)',
  a1: '#9EF3E4', a2: '#2DD4BF', a3: '#12A594', a4: '#0A6A60',
  glow: '45,212,191',
  sub: '#87A8A3',

  badge: 'COLLEGE & BEYOND',
  kicker: 'AI-ASSISTED ENGINEERING',
  title: 'Vibe Coding<br><span class="ac">for College</span>',
  tagline: 'Ship with AI, and still own the code',
  meta: 'AI PAIRING<i>·</i>CODE REVIEW<i>·</i>REAL PROJECTS',
  titleMax: 372,
  titleSize: 48,

  head: `
.pr{position:absolute;left:434px;top:96px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#04100F;border:1px solid rgba(45,212,191,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(45,212,191,.16)}
.pr .bar{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#082220;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#5E8F89}
.pr .bar .who{margin-left:auto;border:1px solid rgba(45,212,191,.45);border-radius:5px;padding:1px 7px;
  font-size:8.5px;font-weight:700;letter-spacing:.08em;color:#9EF3E4}
.diff{padding:8px 0;font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.7}
.diff div{padding:0 13px;white-space:nowrap}
.diff .rm{background:rgba(255,107,107,.1);color:#E8A0A0}
.diff .ad{background:rgba(143,216,160,.1);color:#A8E8BC}
.diff .ctx{color:#5E8F89}
.rev{position:absolute;left:466px;top:296px;width:300px;z-index:3;border-radius:9px;background:#07201E;
  border:1px solid rgba(45,212,191,.5);padding:9px 12px;box-shadow:0 16px 36px rgba(0,0,0,.62)}
.rev .h{display:flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.08em;color:#9EF3E4}
.rev .m{font-family:'JetBrains Mono',monospace;font-size:10px;color:#DCF2EE;margin-top:5px;line-height:1.45}`,

  motif: `
<div class="pr">
  <div class="bar"><span>PR #204 &#183; cache the lookup</span><span class="who">AI DRAFTED</span></div>
  <div class="diff">
    <div class="ctx">&nbsp;&nbsp;def get_player(id):</div>
    <div class="rm">-&nbsp;&nbsp;&nbsp;&nbsp;return db.query(id)</div>
    <div class="ad">+&nbsp;&nbsp;&nbsp;&nbsp;if id in cache:</div>
    <div class="ad">+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return cache[id]</div>
    <div class="ad">+&nbsp;&nbsp;&nbsp;&nbsp;return db.query(id)</div>
  </div>
</div>

<div class="rev">
  <div class="h">
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#9EF3E4" stroke-width="1.4"/><path d="M7 4v3.4l2.2 1.4" stroke="#9EF3E4" stroke-width="1.4" stroke-linecap="round"/></svg>
    YOUR REVIEW
  </div>
  <div class="m">Cache is never invalidated on update. Fix before merge.</div>
</div>`,
};
