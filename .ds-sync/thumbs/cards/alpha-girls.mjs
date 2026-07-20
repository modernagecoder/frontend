// Alpha Girls — the senior tier: the work is a design review, where you are
// the one signing it off.
export default {
  bg: 'linear-gradient(120deg,#2B2408 0%,#181404 54%,#070601 100%)',
  a1: '#FBE38A', a2: '#EAB308', a3: '#B98A05', a4: '#755603',
  glow: '234,179,8',
  sub: '#B0A681',

  badge: 'GIRLS · ADVANCED',
  kicker: 'GIRLS IN TECH · TIER 3',
  title: 'Alpha<br><span class="ac">Girls</span>',
  tagline: 'Architecture, review and the deciding vote',
  meta: 'ENTERPRISE DESIGN<i>·</i>LEADERSHIP<i>·</i>MENTORING',
  titleMax: 366,

  head: `
.rfc{position:absolute;left:436px;top:96px;width:328px;z-index:2;border-radius:11px;overflow:hidden;
  background:#0E0B03;border:1px solid rgba(234,179,8,.38);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(234,179,8,.16)}
.rfc .hd{display:flex;align-items:center;gap:9px;padding:8px 12px;background:#1B1505;
  border-bottom:1px solid rgba(255,255,255,.06)}
.rfc .hd .t{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#FBE38A}
.rfc .hd .n{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;color:#9A8B5E}
.rfc .bd{padding:9px 12px 4px}
.rfc .opt{display:flex;align-items:center;gap:9px;padding:5px 0;font-family:'JetBrains Mono',monospace;font-size:10px;color:#B8A97C}
.rfc .opt .k{width:56px;color:#9A8B5E}
.rfc .opt .bar{flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}
.rfc .opt .bar i{display:block;height:100%;background:#8A7430;font-style:normal}
.rfc .opt.win .bar i{background:linear-gradient(90deg,#B98A05,#FBE38A)}
.rfc .opt.win{color:#FBE38A}
.rfc .ft{display:flex;align-items:center;gap:9px;padding:9px 12px;background:#140F03;
  border-top:1px solid rgba(255,255,255,.06)}
.rfc .ft .ap{border-radius:5px;background:rgba(143,216,160,.15);border:1px solid rgba(143,216,160,.5);
  padding:3px 9px;font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;color:#8FD8A0;letter-spacing:.06em}
.rfc .ft .by{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;color:#9A8B5E}`,

  motif: `
<div class="rfc">
  <div class="hd">
    <span class="t">RFC-042 &#183; Multi-region rollout</span>
    <span class="n">3 reviewers</span>
  </div>
  <div class="bd">
    <div class="opt"><span class="k">option A</span><span class="bar"><i style="width:38%"></i></span><span>cost</span></div>
    <div class="opt win"><span class="k">option B</span><span class="bar"><i style="width:86%"></i></span><span>chosen</span></div>
    <div class="opt"><span class="k">option C</span><span class="bar"><i style="width:52%"></i></span><span>latency</span></div>
  </div>
  <div class="ft">
    <span class="ap">APPROVED</span>
    <span class="by">signed off by the architect</span>
  </div>
</div>`,
};
