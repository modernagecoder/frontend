// React Development — a UI with its component boundaries shown, which is the
// one idea React is really about.
export default {
  bg: 'linear-gradient(120deg,#0C2030 0%,#06131E 54%,#02070C 100%)',
  a1: '#B5ECFF', a2: '#61DAFB', a3: '#28A8CE', a4: '#106C88',
  glow: '97,218,251',
  sub: '#8AA6B8',

  badge: 'TEENS 13-18',
  kicker: 'REACT DEVELOPMENT',
  title: 'React<br><span class="ac">Development</span>',
  tagline: 'The framework behind Netflix and Airbnb',
  meta: 'COMPONENTS<i>·</i>STATE<i>·</i>REAL WEB APPS',
  titleMax: 372,
  titleSize: 52,

  head: `
.ui{position:absolute;left:470px;top:98px;width:266px;z-index:2;border-radius:12px;background:#F7FAFC;
  padding:12px;box-shadow:0 24px 54px rgba(0,0,0,.64),0 0 32px rgba(97,218,251,.2)}
.cmp{position:relative;border:1.5px dashed #61DAFB;border-radius:8px;padding:9px 10px;margin-bottom:9px;background:#fff}
.cmp:last-child{margin-bottom:0}
.cmp .tagn{position:absolute;top:-8px;left:9px;background:#0C2030;color:#61DAFB;border-radius:4px;
  padding:1px 6px;font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;letter-spacing:.04em}
.cmp .h{font-family:'Fraunces',Georgia,serif;font-size:15px;font-weight:800;color:#12283A}
.cmp .l{height:5px;border-radius:3px;background:#DCE6ED;margin-top:6px}
.cmp .row{display:flex;gap:8px;align-items:center}
.cmp .th{width:34px;height:34px;border-radius:6px;background:linear-gradient(140deg,#61DAFB,#1C7FA0);flex:0 0 34px}
.cmp .bt{background:#12283A;color:#fff;border-radius:6px;padding:6px 0;text-align:center;
  font-size:10.5px;font-weight:700}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs><filter id="rb" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="9"/></filter></defs>
  <!-- the react mark, orbiting behind the UI -->
  <g transform="translate(424,300)" opacity=".95">
    <circle r="52" fill="#61DAFB" opacity=".2" filter="url(#rb)"/>
    <ellipse rx="42" ry="16" fill="none" stroke="#61DAFB" stroke-width="2.6"/>
    <ellipse rx="42" ry="16" fill="none" stroke="#61DAFB" stroke-width="2.6" transform="rotate(60)"/>
    <ellipse rx="42" ry="16" fill="none" stroke="#61DAFB" stroke-width="2.6" transform="rotate(120)"/>
    <circle r="8" fill="#61DAFB"/>
  </g>
</svg>

<div class="ui">
  <div class="cmp">
    <span class="tagn">&lt;Header /&gt;</span>
    <div class="h">Trending</div>
  </div>
  <div class="cmp">
    <span class="tagn">&lt;Card /&gt;</span>
    <div class="row">
      <span class="th"></span>
      <span style="flex:1">
        <span class="l" style="width:82%;display:block"></span>
        <span class="l" style="width:56%;display:block"></span>
      </span>
    </div>
  </div>
  <div class="cmp">
    <span class="tagn">&lt;Button /&gt;</span>
    <div class="bt">Watch now</div>
  </div>
</div>`,
};
