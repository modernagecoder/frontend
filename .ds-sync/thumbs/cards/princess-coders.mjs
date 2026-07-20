// Princess Coders — the beginner tier of the girls' track: a first real
// project, finished and running.
export default {
  bg: 'linear-gradient(120deg,#2E1024 0%,#1A0815 54%,#070207 100%)',
  a1: '#FBC4E2', a2: '#F472B6', a3: '#C64A8C', a4: '#7E2757',
  glow: '244,114,182',
  sub: '#B393A6',

  badge: 'GIRLS · BEGINNER',
  kicker: 'GIRLS IN TECH · TIER 1',
  title: 'Princess<br><span class="ac">Coders</span>',
  tagline: 'Start from zero, at your own pace',
  meta: 'CODING BASICS<i>·</i>REAL PROJECTS<i>·</i>SMALL BATCHES',
  titleMax: 366,

  head: `
.win{position:absolute;left:462px;top:106px;width:290px;z-index:2;border-radius:11px;overflow:hidden;
  background:#FDF7FA;box-shadow:0 24px 52px rgba(0,0,0,.64),0 0 32px rgba(244,114,182,.22)}
.win .cr{display:flex;align-items:center;gap:5px;padding:7px 10px;background:#F2E2EB}
.win .cr b{width:7px;height:7px;border-radius:50%;background:#D8AFC6}
.win .cr span{margin-left:5px;font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#A5789A}
.win .bd{padding:13px 14px 15px}
.win h3{font-family:'Fraunces',Georgia,serif;font-size:21px;font-weight:800;color:#3E1B30;line-height:1.05}
.win .rule{height:3px;width:44px;border-radius:2px;background:#F472B6;margin:8px 0 10px}
.win .row{display:flex;gap:8px}
.win .card{flex:1;border-radius:8px;height:52px;position:relative;overflow:hidden}
.win .card i{position:absolute;left:7px;bottom:6px;font-style:normal;font-family:'JetBrains Mono',monospace;
  font-size:8px;font-weight:700;color:rgba(255,255,255,.9)}
.win .btn{margin-top:11px;background:#F472B6;border-radius:7px;padding:7px 0;text-align:center;
  font-size:11px;font-weight:800;color:#fff}
.badge2{position:absolute;left:434px;top:318px;z-index:3;display:flex;align-items:center;gap:8px;
  border-radius:8px;border:1px solid rgba(244,114,182,.5);background:rgba(244,114,182,.13);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.08em;color:#FBC4E2}`,

  motif: `
<div class="win">
  <div class="cr"><b></b><b></b><b></b><span>my-first-site.html</span></div>
  <div class="bd">
    <h3>Meera's book club</h3>
    <div class="rule"></div>
    <div class="row">
      <span class="card" style="background:linear-gradient(140deg,#F472B6,#8E2A56)"><i>fantasy</i></span>
      <span class="card" style="background:linear-gradient(140deg,#A78BE8,#4A2C86)"><i>mystery</i></span>
      <span class="card" style="background:linear-gradient(140deg,#6BC7D8,#186B7C)"><i>sci-fi</i></span>
    </div>
    <div class="btn">Add a book</div>
  </div>
</div>

<div class="badge2">
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M4.4 7.2 L6.2 9 L9.8 5" stroke="#F472B6" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="7" r="6" stroke="#F472B6" stroke-width="1.4"/></svg>
  PROJECT 1 SHIPPED
</div>`,
};
