// AI & Machine Learning (teens) — a model actually training: loss falling
// epoch by epoch, accuracy climbing.
export default {
  bg: 'linear-gradient(120deg,#2B0D18 0%,#180710 54%,#070206 100%)',
  a1: '#FFB3C4', a2: '#F43F5E', a3: '#C41E42', a4: '#7C1129',
  glow: '244,63,94',
  sub: '#B08F99',

  badge: 'TEENS 13-18',
  kicker: 'AI & MACHINE LEARNING',
  title: 'AI & Machine<br><span class="ac">Learning</span>',
  tagline: 'Teach a computer to recognise and predict',
  meta: '52 WEEKS<i>·</i>IMAGE MODELS<i>·</i>CHATBOTS',
  titleMax: 372,
  titleSize: 48,

  head: `
.tr{position:absolute;left:434px;top:96px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#100509;border:1px solid rgba(244,63,94,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(244,63,94,.16)}
.tr .hd{display:flex;align-items:center;gap:9px;padding:8px 12px;background:#1C0810;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#A8788A}
.tr .hd b{color:#FFB3C4;font-weight:700}
.tr .hd .ep{margin-left:auto}
.tr .pad{padding:10px 12px 12px}
.stat{position:absolute;left:434px;top:322px;display:flex;gap:9px;z-index:3}
.stat span{border-radius:8px;border:1px solid rgba(244,63,94,.42);background:rgba(244,63,94,.12);
  padding:6px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;
  letter-spacing:.06em;color:#FFC6D2}
.stat b{color:#FF7A94}`,

  motif: `
<div class="tr">
  <div class="hd"><b>train.py</b> &#183; fitting model<span class="ep">epoch <b>12/12</b></span></div>
  <div class="pad">
    <svg width="308" height="150" viewBox="0 0 308 150" fill="none">
      <defs>
        <linearGradient id="lossG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#FFB3C4"/><stop offset="1" stop-color="#F43F5E"/>
        </linearGradient>
        <linearGradient id="fillG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F43F5E" stop-opacity=".3"/><stop offset="1" stop-color="#F43F5E" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,.07)" stroke-width="1">
        <path d="M28 20 H296"/><path d="M28 62 H296"/><path d="M28 104 H296"/>
      </g>
      <path d="M28 126 H296" stroke="rgba(244,63,94,.35)" stroke-width="1.4"/>
      <path d="M28 12 V126" stroke="rgba(244,63,94,.35)" stroke-width="1.4"/>
      <!-- loss curve -->
      <path d="M32 18 L56 55 L80 81 L104 101 L128 115 L152 125 L176 132 L200 138 L224 142 L248 145 L272 147 L294 148 L294 126 L32 126 Z" fill="url(#fillG)"/>
      <polyline points="32,18 56,55 80,81 104,101 128,115 152,125 176,132 200,138 224,142 248,145 272,147 294,148"
                fill="none" stroke="url(#lossG)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="294" cy="148" r="4" fill="#FFD9E1"/>
      <text x="10" y="22" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#A8788A">2.5</text>
      <text x="14" y="130" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#A8788A">0</text>
      <text x="34" y="145" font-family="'JetBrains Mono',monospace" font-size="8.5" font-weight="700" fill="#8A6070">loss</text>
    </svg>
  </div>
</div>

<div class="stat">
  <span>ACCURACY <b>94.2%</b></span>
  <span>LOSS <b>0.15</b></span>
</div>`,
};
