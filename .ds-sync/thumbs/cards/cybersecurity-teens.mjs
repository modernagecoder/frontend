// Cybersecurity for Teens — spotting a fake message. Defensive, white-hat,
// no coding, exactly as the course is scoped.
export default {
  bg: 'linear-gradient(120deg,#0A2233 0%,#05141F 54%,#01070C 100%)',
  a1: '#B7E6FF', a2: '#38BDF8', a3: '#0E8FCC', a4: '#075780',
  glow: '56,189,248',
  sub: '#8CA4B8',

  badge: 'TEENS 13-18',
  kicker: 'ONLINE SAFETY COURSE',
  title: 'Cybersecurity<br><span class="ac">for Teens</span>',
  tagline: 'Spot the attack before it works',
  meta: '24 WEEKS<i>·</i>WHITE-HAT ONLY<i>·</i>NO CODING NEEDED',
  titleMax: 372,
  titleSize: 48,

  head: `
.mail{position:absolute;left:434px;top:98px;width:330px;z-index:2;border-radius:11px;overflow:hidden;
  background:#F7FAFC;box-shadow:0 24px 52px rgba(0,0,0,.66),0 0 30px rgba(56,189,248,.16)}
.mail .hd{padding:9px 12px;border-bottom:1px solid #E2E8EE}
.mail .fr{display:flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#4A5A6A}
.mail .fr b{color:#0F1E2B;font-weight:700}
.mail .sub2{font-family:'Fraunces',Georgia,serif;font-size:15px;font-weight:800;color:#12222F;margin-top:5px}
.mail .bd{padding:10px 12px 12px;font-size:11px;line-height:1.5;color:#3B4A58}
.mail .lnk{display:inline-block;margin-top:7px;background:#E8EEF3;border-radius:5px;padding:4px 8px;
  font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#2F6B93}
.warns{position:absolute;left:434px;top:252px;width:334px;z-index:3;display:flex;flex-wrap:wrap;gap:7px}
.warn{display:flex;align-items:center;gap:6px;border-radius:7px;
  background:#2A0F0C;border:1px solid rgba(255,122,106,.6);padding:5px 10px;
  font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.05em;color:#FFB0A4;
  box-shadow:0 8px 20px rgba(0,0,0,.55)}
.warn b{color:#FF7A6A}
.verdict{position:absolute;left:434px;top:322px;z-index:3;display:flex;align-items:center;gap:8px;
  font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.1em;color:#B7E6FF;
  border:1px solid rgba(56,189,248,.5);background:rgba(56,189,248,.12);border-radius:8px;padding:6px 12px}`,

  motif: `
<div class="mail">
  <div class="hd">
    <div class="fr">from <b>paytm-secure@ma1l-verify.co</b></div>
    <div class="sub2">Urgent: your account will be closed</div>
  </div>
  <div class="bd">
    Your KYC failed. Confirm your card details within
    <b>2 hours</b> or your wallet is blocked permanently.
    <span class="lnk">http://paytm-kyc.verify-now.co/login</span>
  </div>
</div>

<div class="warns">
  <div class="warn"><b>!</b> LOOK-ALIKE DOMAIN</div>
  <div class="warn"><b>!</b> FAKE URGENCY</div>
  <div class="warn"><b>!</b> LINK GOES ELSEWHERE</div>
</div>

<div class="verdict">
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1 L12.5 3.4 V7 C12.5 10 7 13 7 13 C7 13 1.5 10 1.5 7 V3.4 Z" stroke="#38BDF8" stroke-width="1.6" fill="none"/><path d="M4.6 7 L6.3 8.8 L9.4 5.4" stroke="#38BDF8" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>
  PHISHING &#183; DO NOT CLICK
</div>`,
};
