// IB Mathematics AA & AI — the choice itself, which is the first thing an
// IB student has to get right.
export default {
  bg: 'linear-gradient(120deg,#08213A 0%,#041323 54%,#01070E 100%)',
  a1: '#A8CFF5', a2: '#1E88E5', a3: '#1362AE', a4: '#0A3D6E',
  glow: '30,136,229',
  sub: '#8AA3BE',

  badge: 'IB DIPLOMA',
  kicker: 'IB MATHEMATICS',
  title: 'IB Maths<br><span class="ac">AA & AI</span>',
  tagline: 'Both routes, both levels, and the IA',
  meta: 'SL + HL<i>·</i>PAPER TECHNIQUE<i>·</i>IA SUPPORT',
  titleMax: 372,
  titleSize: 52,

  head: `
.rt{position:absolute;top:106px;z-index:2;width:158px;border-radius:11px;overflow:hidden;
  background:#061A2E;border:1px solid rgba(30,136,229,.4);box-shadow:0 18px 40px rgba(0,0,0,.62)}
.rt .h{padding:9px 12px;background:#0A2842;border-bottom:1px solid rgba(255,255,255,.06)}
.rt .h b{font-family:'Fraunces',Georgia,serif;font-size:21px;font-weight:800;color:#E4F0FB;display:block;line-height:1}
.rt .h span{font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;letter-spacing:.12em;color:#6E93B8;display:block;margin-top:3px}
.rt .b{padding:9px 12px 11px}
.rt .b div{font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#B8D2E8;padding:2.5px 0;display:flex;gap:7px}
.rt .b i{font-style:normal;color:#1E88E5}
.aa{left:440px}
.ai{left:610px}
.lv{position:absolute;left:440px;top:322px;z-index:3;display:flex;gap:9px}
.lv span{border-radius:7px;border:1px solid rgba(30,136,229,.5);background:rgba(30,136,229,.13);
  padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#A8CFF5}`,

  motif: `
<div class="rt aa">
  <div class="h"><b>AA</b><span>ANALYSIS &amp; APPROACHES</span></div>
  <div class="b">
    <div><i>&#8250;</i>proof</div>
    <div><i>&#8250;</i>calculus, deeper</div>
    <div><i>&#8250;</i>algebraic fluency</div>
  </div>
</div>

<div class="rt ai">
  <div class="h"><b>AI</b><span>APPLICATIONS &amp; INTERPRETATION</span></div>
  <div class="b">
    <div><i>&#8250;</i>modelling</div>
    <div><i>&#8250;</i>statistics, deeper</div>
    <div><i>&#8250;</i>tech-heavy</div>
  </div>
</div>

<div class="lv"><span>SL</span><span>HL</span><span>+ INTERNAL ASSESSMENT</span></div>`,
};
