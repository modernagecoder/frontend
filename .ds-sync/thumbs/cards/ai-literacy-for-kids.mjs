// AI Literacy for Kids — a model's own confidence, including the one it
// gets wrong. Understanding, not just using.
export default {
  bg: 'linear-gradient(120deg,#0D2233 0%,#07141F 54%,#02070C 100%)',
  a1: '#B7E6FF', a2: '#38BDF8', a3: '#0E8FCC', a4: '#075780',
  glow: '56,189,248',
  sub: '#8CA4B8',

  badge: 'AGES 8-14',
  kicker: 'AI LITERACY COURSE',
  title: 'AI Literacy<br><span class="ac">for Kids</span>',
  tagline: 'How AI learns, and where it gets things wrong',
  meta: '16 WEEKS<i>·</i>TRAIN A MODEL<i>·</i>SPOT ERRORS',
  titleMax: 366,
  titleSize: 52,

  head: `
.panel{position:absolute;left:454px;top:104px;width:306px;z-index:2;border-radius:12px;overflow:hidden;
  background:#08151F;border:1px solid rgba(56,189,248,.36);
  box-shadow:0 24px 54px rgba(0,0,0,.64),0 0 34px rgba(56,189,248,.18)}
.panel .hd{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#0C1F2E;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;
  font-weight:700;letter-spacing:.12em;color:#7FB6D4}
.panel .hd b{width:8px;height:8px;border-radius:50%;background:#38BDF8;box-shadow:0 0 8px #38BDF8}
.row{display:flex;align-items:center;gap:10px;padding:9px 12px;border-bottom:1px solid rgba(255,255,255,.05)}
.row:last-child{border-bottom:none}
.row .th{width:32px;height:32px;border-radius:7px;flex:0 0 32px;display:flex;align-items:center;justify-content:center}
.row .lb{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:#E4F2FA;width:64px}
.row .bar{flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,.09);overflow:hidden}
.row .bar i{display:block;height:100%;border-radius:4px;font-style:normal}
.row .pc{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;width:38px;text-align:right}
.row.ok .pc{color:#5EE9A0}.row.mid .pc{color:#38BDF8}.row.bad .pc{color:#FF8A7A}
.flag{position:absolute;left:470px;top:322px;z-index:3;display:flex;align-items:center;gap:8px;
  border-radius:9px;border:1px solid rgba(255,138,122,.5);background:rgba(255,138,122,.12);
  padding:7px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;
  letter-spacing:.06em;color:#FFC6BD}
.flag b{color:#FF8A7A}`,

  motif: `
<div class="panel">
  <div class="hd"><b></b>MODEL PREDICTION</div>
  <div class="row ok">
    <span class="th" style="background:rgba(94,233,160,.14)">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="4" stroke="#5EE9A0" stroke-width="1.8"/><path d="M3.5 17 C4.5 12.5 15.5 12.5 16.5 17" stroke="#5EE9A0" stroke-width="1.8" stroke-linecap="round"/></svg>
    </span>
    <span class="lb">person</span>
    <span class="bar"><i style="width:94%;background:#5EE9A0"></i></span>
    <span class="pc">94%</span>
  </div>
  <div class="row mid">
    <span class="th" style="background:rgba(56,189,248,.14)">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="6" width="14" height="9" rx="2" stroke="#38BDF8" stroke-width="1.8"/><path d="M6 6 L8 3 H12 L14 6" stroke="#38BDF8" stroke-width="1.8" stroke-linejoin="round" fill="none"/></svg>
    </span>
    <span class="lb">camera</span>
    <span class="bar"><i style="width:61%;background:#38BDF8"></i></span>
    <span class="pc">61%</span>
  </div>
  <div class="row bad">
    <span class="th" style="background:rgba(255,138,122,.14)">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 3 L18 16 H2 Z" stroke="#FF8A7A" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 8 V11.6" stroke="#FF8A7A" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13.8" r="1" fill="#FF8A7A"/></svg>
    </span>
    <span class="lb">muffin</span>
    <span class="bar"><i style="width:38%;background:#FF8A7A"></i></span>
    <span class="pc">38%</span>
  </div>
</div>

<div class="flag"><b>?</b> WHY DID IT GUESS THAT<b>?</b></div>`,
};
