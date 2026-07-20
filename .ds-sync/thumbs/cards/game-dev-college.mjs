// Game Development (college) — Unity and Unreal: a mesh in the viewport with
// its material, which is where 3D work actually happens.
export default {
  bg: 'linear-gradient(120deg,#1A1338 0%,#0E0A21 54%,#04030D 100%)',
  a1: '#C9BCFF', a2: '#7D5FFF', a3: '#5A3CD6', a4: '#341F8C',
  glow: '125,95,255',
  sub: '#9B93C0',

  badge: 'COLLEGE & BEYOND',
  kicker: 'GAME DEVELOPMENT',
  title: 'Game<br><span class="ac">Development</span>',
  tagline: 'Unity and Unreal, 2D through 3D',
  meta: 'UNITY<i>·</i>UNREAL<i>·</i>C# / C++<i>·</i>SHADERS',
  titleMax: 372,
  titleSize: 53,

  head: `
.mat{position:absolute;left:640px;top:130px;width:128px;z-index:3;border-radius:9px;overflow:hidden;
  background:#141033;border:1px solid rgba(125,95,255,.45);box-shadow:0 18px 40px rgba(0,0,0,.66)}
.mat .h{background:#1E1747;padding:6px 10px;font-family:'JetBrains Mono',monospace;font-size:8.5px;
  font-weight:700;letter-spacing:.1em;color:#B4A8F0;border-bottom:1px solid rgba(255,255,255,.06)}
.mat .b{padding:7px 10px}
.mat .r{display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:8.5px;
  color:#8A82B8;padding:2px 0}
.mat .r b{color:#C9BCFF}
.mat .sw{height:20px;border-radius:5px;margin-top:6px;background:linear-gradient(135deg,#C9BCFF,#4A2FB0)}
.vp{position:absolute;left:424px;top:322px;z-index:3;font-family:'JetBrains Mono',monospace;font-size:8.5px;
  font-weight:700;letter-spacing:.12em;color:#6E67A0}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <defs><filter id="gb2" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="10"/></filter></defs>

  <!-- viewport grid, in perspective -->
  <g stroke="rgba(201,188,255,.13)" stroke-width="1">
    <path d="M424 316 L776 316"/><path d="M448 290 L752 290"/><path d="M468 268 L732 268"/>
    <path d="M424 316 L468 268"/><path d="M512 316 L522 268"/><path d="M600 316 L600 268"/>
    <path d="M688 316 L678 268"/><path d="M776 316 L732 268"/>
  </g>

  <!-- key light -->
  <circle cx="600" cy="200" r="86" fill="#7D5FFF" opacity=".22" filter="url(#gb2)"/>

  <!-- an icosphere-ish mesh, shaded + wireframe -->
  <g>
    <path d="M600 130 L664 168 L640 240 L560 240 L536 168 Z" fill="#3B2A86"/>
    <path d="M600 130 L664 168 L600 196 Z" fill="#5A3CD6"/>
    <path d="M600 130 L536 168 L600 196 Z" fill="#4A31AE"/>
    <path d="M664 168 L640 240 L600 196 Z" fill="#6A49E8"/>
    <path d="M536 168 L560 240 L600 196 Z" fill="#3B2A86"/>
    <path d="M560 240 L640 240 L600 196 Z" fill="#2E2170"/>
    <g stroke="#C9BCFF" stroke-width="1.3" opacity=".85" fill="none">
      <path d="M600 130 L664 168 L640 240 L560 240 L536 168 Z"/>
      <path d="M600 130 L600 196"/><path d="M664 168 L600 196"/><path d="M536 168 L600 196"/>
      <path d="M640 240 L600 196"/><path d="M560 240 L600 196"/>
    </g>
    <g fill="#E4DEFF">
      <circle cx="600" cy="130" r="2.6"/><circle cx="664" cy="168" r="2.6"/><circle cx="536" cy="168" r="2.6"/>
      <circle cx="640" cy="240" r="2.6"/><circle cx="560" cy="240" r="2.6"/><circle cx="600" cy="196" r="2.6"/>
    </g>
  </g>

  <!-- transform gizmo -->
  <g stroke-width="2.4" stroke-linecap="round">
    <path d="M600 196 L600 152" stroke="#8FD8A0"/>
    <path d="M600 196 L648 214" stroke="#FF6B8A"/>
    <path d="M600 196 L556 214" stroke="#6BB8FF"/>
  </g>
</svg>

<div class="mat">
  <div class="h">MATERIAL</div>
  <div class="b">
    <div class="r"><span>Metallic</span><b>0.8</b></div>
    <div class="r"><span>Roughness</span><b>0.25</b></div>
    <div class="sw"></div>
  </div>
</div>

<div class="vp">SCENE VIEW &#183; 60 FPS</div>`,
};
