// AI Tools for Teens (13+) — a prompt, what it returned, and the disclosure
// line the course insists on. Age floors are contract terms here.
export default {
  bg: 'linear-gradient(120deg,#151A38 0%,#0B0E21 54%,#04050D 100%)',
  a1: '#C3CBFF', a2: '#6366F1', a3: '#4348C7', a4: '#282C82',
  glow: '99,102,241',
  sub: '#98A0C4',

  badge: 'AGE 13+',
  kicker: 'AI TOOLS COURSE',
  title: 'AI Tools<br><span class="ac">for Teens</span>',
  tagline: 'Prompt well, check it, then credit it',
  meta: 'PROMPTING<i>·</i>IMAGE & AUDIO<i>·</i>HONEST USE',
  titleMax: 366,
  titleSize: 52,

  head: `
.pr{position:absolute;left:434px;top:100px;width:332px;z-index:3;display:flex;align-items:center;gap:9px;
  border-radius:11px;background:#0C1030;border:1px solid rgba(99,102,241,.5);padding:10px 13px;
  box-shadow:0 18px 40px rgba(0,0,0,.62),0 0 28px rgba(99,102,241,.22)}
.pr .q{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;color:#E4E7FF;white-space:nowrap}
.pr .go{margin-left:auto;width:22px;height:22px;border-radius:6px;flex:0 0 22px;
  background:linear-gradient(140deg,#8B92FF,#4348C7);display:flex;align-items:center;justify-content:center}
.gr{position:absolute;left:462px;top:170px;width:276px;z-index:2;display:grid;
  grid-template-columns:1fr 1fr;gap:9px}
.gr .im{height:70px;border-radius:9px;position:relative;overflow:hidden;border:1px solid rgba(99,102,241,.32)}
.gr .im span{position:absolute;left:7px;bottom:6px;font-family:'JetBrains Mono',monospace;font-size:8px;
  font-weight:700;letter-spacing:.06em;color:rgba(255,255,255,.85)}
.note{position:absolute;left:434px;top:330px;z-index:3;display:flex;align-items:center;gap:8px;
  border-radius:8px;border:1px solid rgba(143,216,160,.45);background:rgba(143,216,160,.1);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.05em;color:#B7E8C4}
.note b{color:#8FD8A0}`,

  motif: `
<div class="pr">
  <span class="q">a poster for our school science fair</span>
  <span class="go">
    <svg width="12" height="12" viewBox="0 0 14 14"><path d="M7 .6 L8.5 5 L13 6.5 L8.5 8 L7 12.4 L5.5 8 L1 6.5 L5.5 5 Z" fill="#0C1030"/></svg>
  </span>
</div>

<div class="gr">
  <div class="im" style="background:linear-gradient(140deg,#8B92FF,#2A2E86)"><span>v1</span></div>
  <div class="im" style="background:linear-gradient(140deg,#5FD4C4,#0E6E63)"><span>v2</span></div>
  <div class="im" style="background:linear-gradient(140deg,#FFB86B,#A85A10)"><span>v3</span></div>
  <div class="im" style="background:linear-gradient(140deg,#F58BB0,#8E2A56)"><span>v4</span></div>
</div>

<div class="note"><b>&#10003;</b> "MADE WITH AI" &#183; CREDIT IT EVERY TIME</div>`,
};
