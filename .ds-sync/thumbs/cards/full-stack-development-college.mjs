// Full Stack (college) — the part that makes an app "production-ready":
// the pipeline from commit to live.
export default {
  bg: 'linear-gradient(120deg,#161638 0%,#0C0C21 54%,#04040D 100%)',
  a1: '#C6C4FF', a2: '#6D6BF5', a3: '#4A47CC', a4: '#2A2882',
  glow: '109,107,245',
  sub: '#9B99C2',

  badge: 'COLLEGE & BEYOND',
  kicker: 'FULL STACK DEVELOPMENT',
  title: 'Full Stack<br><span class="ac">Development</span>',
  tagline: 'Ship it, not just build it',
  meta: 'REACT + NODE<i>·</i>MONGODB<i>·</i>CI/CD<i>·</i>DEPLOY',
  titleMax: 372,
  titleSize: 50,

  head: `
.pipe{position:absolute;left:436px;top:110px;width:332px;z-index:2}
.stg{display:flex;align-items:center;gap:11px;border-radius:9px;background:#12122E;
  border:1px solid rgba(109,107,245,.36);padding:9px 12px;margin-bottom:9px;
  box-shadow:0 12px 28px rgba(0,0,0,.55)}
.stg:last-child{margin-bottom:0}
.stg .ic{width:22px;height:22px;border-radius:6px;flex:0 0 22px;display:flex;align-items:center;justify-content:center;
  background:rgba(109,107,245,.18)}
.stg .n{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#E4E3FF;letter-spacing:.04em}
.stg .s{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9px;color:#7B79B8}
.stg.ok{border-color:rgba(143,216,160,.5)}
.stg.ok .s{color:#8FD8A0;font-weight:700}
.stg.live{border-color:#6D6BF5;background:#1D1B52;box-shadow:0 16px 36px rgba(0,0,0,.6),0 0 24px rgba(109,107,245,.32)}
.stg.live .s{color:#C6C4FF;font-weight:700}
.url{position:absolute;left:436px;top:330px;z-index:3;border-radius:8px;background:#0C0C24;
  border:1px solid rgba(109,107,245,.5);padding:6px 12px;font-family:'JetBrains Mono',monospace;
  font-size:10px;font-weight:600;color:#C6C4FF;box-shadow:0 12px 28px rgba(0,0,0,.6)}
.url b{color:#8FD8A0}`,

  motif: `
<div class="pipe">
  <div class="stg ok">
    <span class="ic"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 7.4 L5.8 10 L11 4.4" stroke="#8FD8A0" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    <span class="n">build</span><span class="s">42s</span>
  </div>
  <div class="stg ok">
    <span class="ic"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 7.4 L5.8 10 L11 4.4" stroke="#8FD8A0" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    <span class="n">tests</span><span class="s">128 passed</span>
  </div>
  <div class="stg live">
    <span class="ic"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 L12 12 L7 9.6 L2 12 Z" fill="#C6C4FF"/></svg></span>
    <span class="n">deploy &#183; production</span><span class="s">LIVE</span>
  </div>
</div>

<div class="url">https://yourapp.com &nbsp;<b>200 OK</b></div>`,
};
