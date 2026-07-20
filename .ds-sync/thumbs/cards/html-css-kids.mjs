// Build Your First Website — the code and the page it renders, side by side.
export default {
  bg: 'linear-gradient(120deg,#182734 0%,#0D161F 54%,#050A0E 100%)',
  a1: '#A8D5FF', a2: '#58A6FF', a3: '#2F7FD8', a4: '#164A80',
  glow: '88,166,255',
  sub: '#93A6B8',

  badge: 'KIDS 6-12',
  kicker: 'WEB DESIGN COURSE',
  title: 'Build Your<br><span class="ac">First Website</span>',
  tagline: 'A real page you can show your friends',
  meta: 'HTML5<i>·</i>CSS3<i>·</i>PUBLISHED ONLINE',
  titleMax: 366,
  titleSize: 53,

  head: `
.brow{position:absolute;left:452px;top:88px;width:308px;z-index:2;border-radius:12px;overflow:hidden;
  background:#F7F4EE;border:1px solid rgba(88,166,255,.45);
  box-shadow:0 24px 54px rgba(0,0,0,.62),0 0 36px rgba(88,166,255,.2)}
.brow .chrome{display:flex;align-items:center;gap:6px;padding:8px 11px;background:#E4DFD6;border-bottom:1px solid #D2CCC1}
.brow .chrome b{width:9px;height:9px;border-radius:50%}
.brow .url{margin-left:6px;flex:1;background:#FAF8F4;border-radius:5px;padding:3px 9px;
  font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#8A8072;border:1px solid #D2CCC1}
.brow .page{padding:15px 17px 17px;background:#FDFBF7}
.brow h2{font-family:'Fraunces',Georgia,serif;font-size:23px;font-weight:800;color:#E34F26;line-height:1.1;letter-spacing:-.01em}
.brow .rule{height:3px;width:56px;background:#58A6FF;border-radius:2px;margin:9px 0 11px}
.brow .ln{height:6px;border-radius:3px;background:#D8D2C7;margin-bottom:6px}
.brow .row{display:flex;gap:8px;margin-top:11px}
.brow .tile{height:44px;border-radius:7px;flex:1}
.brow .btn{margin-top:12px;display:inline-block;background:#E34F26;color:#fff;border-radius:6px;
  padding:6px 13px;font-size:11px;font-weight:800;letter-spacing:.04em}
.tag{position:absolute;left:392px;top:330px;z-index:3;border-radius:10px;background:#0B131B;
  border:1px solid rgba(88,166,255,.42);padding:9px 13px;font-family:'JetBrains Mono',monospace;
  font-size:11.5px;font-weight:600;white-space:nowrap;transform:rotate(-2deg);
  box-shadow:0 14px 34px rgba(0,0,0,.6),0 0 26px rgba(88,166,255,.22)}
.tag .b{color:#5C7A93}.tag .t{color:#58A6FF}.tag .x{color:#F5EFE4}`,

  motif: `
<div class="brow">
  <div class="chrome">
    <b style="background:#E06C5B"></b><b style="background:#E0B65B"></b><b style="background:#6FBF73"></b>
    <div class="url">my-space-page.html</div>
  </div>
  <div class="page">
    <h2>My Space Page</h2>
    <div class="rule"></div>
    <div class="ln" style="width:100%"></div>
    <div class="ln" style="width:88%"></div>
    <div class="ln" style="width:64%"></div>
    <div class="row">
      <div class="tile" style="background:#58A6FF"></div>
      <div class="tile" style="background:#F2B33D"></div>
      <div class="tile" style="background:#6FBF73"></div>
    </div>
    <div class="btn">See my rockets</div>
  </div>
</div>

<div class="tag">
  <span class="b">&lt;</span><span class="t">h1</span><span class="b">&gt;</span><span class="x">My Space Page</span><span class="b">&lt;/</span><span class="t">h1</span><span class="b">&gt;</span>
</div>`,
};
