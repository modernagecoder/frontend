// App Development (college) — the end of the job: both stores, reviewed and
// live. Keeps it distinct from the Flutter card's widget tree.
export default {
  bg: 'linear-gradient(120deg,#1E2408 0%,#111404 54%,#050601 100%)',
  a1: '#E8F5A8', a2: '#C7E63F', a3: '#96B31C', a4: '#5E7010',
  glow: '199,230,63',
  sub: '#A8B489',

  badge: 'COLLEGE & BEYOND',
  kicker: 'CROSS-PLATFORM APP DEV',
  title: 'App<br><span class="ac">Development</span>',
  tagline: 'One codebase, two stores, real users',
  meta: 'FLUTTER<i>·</i>REACT NATIVE<i>·</i>iOS + ANDROID',
  titleMax: 372,
  titleSize: 53,

  head: `
.rel{position:absolute;left:436px;top:104px;width:330px;z-index:2;border-radius:11px;overflow:hidden;
  background:#111503;border:1px solid rgba(199,230,63,.34);
  box-shadow:0 22px 48px rgba(0,0,0,.64),0 0 28px rgba(199,230,63,.14)}
.rel .bar{display:flex;align-items:center;padding:8px 12px;background:#1B2106;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#8A9660}
.rel .bar b{margin-left:auto;color:#E8F5A8;font-weight:700}
.st{display:flex;align-items:center;gap:11px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.05)}
.st:last-child{border-bottom:none}
.st .ic{width:26px;height:26px;border-radius:7px;flex:0 0 26px;display:flex;align-items:center;justify-content:center;
  background:rgba(199,230,63,.14)}
.st .n{font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;color:#EFF7D6}
.st .v{font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#8A9660;margin-top:2px;letter-spacing:.06em}
.st .tag{margin-left:auto;border-radius:5px;padding:3px 9px;font-family:'JetBrains Mono',monospace;
  font-size:9px;font-weight:700;letter-spacing:.06em}
.ok{background:rgba(143,216,160,.16);border:1px solid rgba(143,216,160,.5);color:#8FD8A0}
.wait{background:rgba(199,230,63,.14);border:1px solid rgba(199,230,63,.5);color:#E8F5A8}
.one{position:absolute;left:436px;top:318px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:8px;border:1px solid rgba(199,230,63,.45);background:rgba(199,230,63,.11);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.06em;color:#E8F5A8}`,

  motif: `
<div class="rel">
  <div class="bar"><span>release &#183; v2.4.0</span><b>build 118</b></div>
  <div class="st">
    <span class="ic"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M11 1.6c.1 1-.3 1.9-.9 2.5-.6.7-1.5 1.2-2.4 1.1-.1-.9.3-1.9.9-2.5.6-.7 1.6-1.1 2.4-1.1Z" fill="#E8F5A8"/><path d="M13.6 11.4c-.4 1-.6 1.4-1.1 2.2-.7 1.1-1.7 2.5-3 2.5-1.1 0-1.4-.7-2.9-.7s-1.9.7-3 .7c-1.3 0-2.2-1.2-3-2.3C-1 10.5-.4 6 1.9 4.7c1-.6 2-.6 2.9-.6 1 0 1.6.7 2.9.7 1.3 0 2-.7 3.2-.7.9 0 1.8.2 2.6.9-2.3 1.3-1.9 4.6.1 6.4Z" fill="#E8F5A8"/></svg></span>
    <span><span class="n">App Store</span><span class="v">TESTFLIGHT &#183; REVIEW</span></span>
    <span class="tag ok">APPROVED</span>
  </div>
  <div class="st">
    <span class="ic"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M2 1.6 9.6 8 2 14.4V1.6Z" fill="#C7E63F"/><path d="M11.4 6.2 13.6 7.4c.6.3.6 1 0 1.3l-2.2 1.2L9.4 8l2-1.8Z" fill="#E8F5A8"/></svg></span>
    <span><span class="n">Google Play</span><span class="v">PRODUCTION TRACK</span></span>
    <span class="tag ok">LIVE</span>
  </div>
  <div class="st">
    <span class="ic"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.4" stroke="#C7E63F" stroke-width="1.5"/><path d="M8 4.6V8l2.4 1.6" stroke="#C7E63F" stroke-width="1.5" stroke-linecap="round"/></svg></span>
    <span><span class="n">Staged rollout</span><span class="v">20% OF USERS</span></span>
    <span class="tag wait">RAMPING</span>
  </div>
</div>

<div class="one">ONE CODEBASE &#183; BOTH PLATFORMS</div>`,
};
