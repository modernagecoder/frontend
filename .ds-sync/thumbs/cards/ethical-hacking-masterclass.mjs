// Ethical Hacking — the deliverable of real pentest work is the report, and
// the scope line that makes it legal. Both are on the card on purpose.
export default {
  bg: 'linear-gradient(120deg,#2B1C05 0%,#181003 54%,#070501 100%)',
  a1: '#FFD68A', a2: '#FFA502', a3: '#C67C01', a4: '#7C4E00',
  glow: '255,165,2',
  sub: '#B3A183',

  badge: 'COLLEGE & BEYOND',
  kicker: 'ETHICAL HACKING & VAPT',
  title: 'Ethical<br><span class="ac">Hacking</span>',
  tagline: 'Find it, prove it, write it up, fix it',
  meta: 'LINUX<i>·</i>NETWORKING<i>·</i>WEB SECURITY<i>·</i>VAPT',
  titleMax: 372,
  titleSize: 53,

  head: `
.rep{position:absolute;left:434px;top:96px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#120C02;border:1px solid rgba(255,165,2,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(255,165,2,.14)}
.rep .bar{display:flex;align-items:center;padding:8px 12px;background:#201502;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#9A8552}
.rep .bar b{margin-left:auto;color:#FFD68A;font-weight:700;font-size:9px;letter-spacing:.08em}
.f{display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.05)}
.f:last-of-type{border-bottom:none}
.f .sev{border-radius:4px;padding:2px 7px;font-family:'JetBrains Mono',monospace;font-size:8.5px;
  font-weight:700;letter-spacing:.06em;width:62px;text-align:center}
.crit{background:rgba(255,107,107,.16);border:1px solid rgba(255,107,107,.55);color:#FF9B9B}
.high{background:rgba(255,165,2,.16);border:1px solid rgba(255,165,2,.55);color:#FFD68A}
.med{background:rgba(255,224,138,.1);border:1px solid rgba(255,224,138,.35);color:#D8C48A}
.f .nm{font-family:'JetBrains Mono',monospace;font-size:10px;color:#EDE2CC}
.f .st{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;color:#8FD8A0;font-weight:700}
.scope{position:absolute;left:434px;top:312px;width:332px;z-index:3;display:flex;align-items:center;gap:8px;
  border-radius:8px;border:1px solid rgba(143,216,160,.45);background:rgba(143,216,160,.09);padding:7px 12px;
  font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.04em;color:#B7E8C4}
.scope b{color:#8FD8A0}`,

  motif: `
<div class="rep">
  <div class="bar"><span>VAPT REPORT &#183; acme-staging</span><b>3 FINDINGS</b></div>
  <div class="f">
    <span class="sev crit">CRITICAL</span>
    <span class="nm">SQL injection &#183; /login</span>
    <span class="st">FIXED</span>
  </div>
  <div class="f">
    <span class="sev high">HIGH</span>
    <span class="nm">Session cookie without HttpOnly</span>
    <span class="st">FIXED</span>
  </div>
  <div class="f">
    <span class="sev med">MEDIUM</span>
    <span class="nm">Verbose error messages</span>
    <span class="st">OPEN</span>
  </div>
</div>

<div class="scope">
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1 L12.5 3.4 V7 C12.5 10 7 13 7 13 C7 13 1.5 10 1.5 7 V3.4 Z" stroke="#8FD8A0" stroke-width="1.5" fill="none"/><path d="M4.6 7 L6.3 8.8 L9.4 5.4" stroke="#8FD8A0" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
  <b>AUTHORISED SCOPE</b> &#183; LAB TARGETS ONLY
</div>`,
};
