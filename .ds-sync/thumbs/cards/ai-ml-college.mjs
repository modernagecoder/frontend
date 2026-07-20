// AI & ML Complete — deep learning and computer vision: a convolution
// turning pixels into a feature map.
export default {
  bg: 'linear-gradient(120deg,#2C0A1C 0%,#190510 54%,#070106 100%)',
  a1: '#FFB0CC', a2: '#F0407A', a3: '#C01F55', a4: '#780F33',
  glow: '240,64,122',
  sub: '#B08C9C',

  badge: 'COLLEGE & BEYOND',
  kicker: 'AI & ML COMPLETE',
  title: 'AI & Machine<br><span class="ac">Learning</span>',
  tagline: 'Neural networks, deep learning, vision',
  meta: 'CNNs<i>·</i>COMPUTER VISION<i>·</i>DEPLOYMENT',
  titleMax: 372,
  titleSize: 48,

  head: `
.pred{position:absolute;left:452px;top:314px;width:300px;z-index:3;display:flex;align-items:center;gap:10px;
  border-radius:9px;border:1px solid rgba(240,64,122,.5);background:rgba(240,64,122,.12);padding:7px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;letter-spacing:.05em;color:#FFD1E0}
.pred .bar{flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,.1);overflow:hidden}
.pred .bar i{display:block;height:100%;width:97%;border-radius:4px;background:linear-gradient(90deg,#C01F55,#FFB0CC);font-style:normal}
.lbl{position:absolute;z-index:3;font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;
  letter-spacing:.12em;color:#A8697F}
.l1{left:452px;top:112px}.l2{left:592px;top:112px}.l3{left:686px;top:112px}`,

  motif: `
<span class="lbl l1">INPUT 6&#215;6</span>
<span class="lbl l2">3&#215;3 KERNEL</span>
<span class="lbl l3">FEATURE MAP</span>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- input grid -->
  <g>
    <g fill="#2A0C18" stroke="#5C2338" stroke-width="1">
      <rect x="452" y="132" width="22" height="22"/><rect x="474" y="132" width="22" height="22"/><rect x="496" y="132" width="22" height="22"/>
      <rect x="518" y="132" width="22" height="22"/><rect x="540" y="132" width="22" height="22"/><rect x="562" y="132" width="22" height="22"/>
      <rect x="452" y="154" width="22" height="22"/><rect x="518" y="154" width="22" height="22"/><rect x="540" y="154" width="22" height="22"/><rect x="562" y="154" width="22" height="22"/>
      <rect x="452" y="176" width="22" height="22"/><rect x="518" y="176" width="22" height="22"/><rect x="540" y="176" width="22" height="22"/><rect x="562" y="176" width="22" height="22"/>
      <rect x="452" y="198" width="22" height="22"/><rect x="474" y="198" width="22" height="22"/><rect x="496" y="198" width="22" height="22"/>
      <rect x="518" y="198" width="22" height="22"/><rect x="540" y="198" width="22" height="22"/><rect x="562" y="198" width="22" height="22"/>
      <rect x="452" y="220" width="22" height="22"/><rect x="474" y="220" width="22" height="22"/><rect x="496" y="220" width="22" height="22"/>
      <rect x="518" y="220" width="22" height="22"/><rect x="540" y="220" width="22" height="22"/><rect x="562" y="220" width="22" height="22"/>
      <rect x="452" y="242" width="22" height="22"/><rect x="474" y="242" width="22" height="22"/><rect x="496" y="242" width="22" height="22"/>
      <rect x="518" y="242" width="22" height="22"/><rect x="540" y="242" width="22" height="22"/><rect x="562" y="242" width="22" height="22"/>
    </g>
    <!-- the lit pixels: an edge -->
    <g fill="#F0407A" opacity=".8">
      <rect x="474" y="154" width="22" height="22"/><rect x="496" y="154" width="22" height="22"/>
      <rect x="474" y="176" width="22" height="22"/><rect x="496" y="176" width="22" height="22"/>
    </g>
    <!-- kernel window -->
    <rect x="474" y="154" width="66" height="66" fill="none" stroke="#FFB0CC" stroke-width="2.4" stroke-dasharray="5 4"/>
  </g>

  <!-- arrow -->
  <path d="M596 190 H636" stroke="#F0407A" stroke-width="2.2" stroke-dasharray="4 5" stroke-linecap="round"/>
  <path d="M636 190 L628 185 M636 190 L628 195" stroke="#F0407A" stroke-width="2.2" fill="none" stroke-linecap="round"/>

  <!-- feature map -->
  <g>
    <g fill="#2A0C18" stroke="#5C2338" stroke-width="1">
      <rect x="686" y="140" width="26" height="26"/><rect x="712" y="140" width="26" height="26"/><rect x="738" y="140" width="26" height="26"/>
      <rect x="686" y="166" width="26" height="26"/><rect x="738" y="166" width="26" height="26"/>
      <rect x="686" y="192" width="26" height="26"/><rect x="712" y="192" width="26" height="26"/><rect x="738" y="192" width="26" height="26"/>
      <rect x="686" y="218" width="26" height="26"/><rect x="712" y="218" width="26" height="26"/><rect x="738" y="218" width="26" height="26"/>
    </g>
    <rect x="712" y="166" width="26" height="26" fill="#FFB0CC"/>
  </g>
</svg>

<div class="pred">CAT <span class="bar"><i></i></span> 0.97</div>`,
};
