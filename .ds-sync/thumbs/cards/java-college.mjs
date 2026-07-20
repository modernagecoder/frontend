// Java (college) — Spring Boot and microservices, so the card shows a
// @RestController and the services around it, not a first class.
export default {
  bg: 'linear-gradient(120deg,#0E2610 0%,#07160A 54%,#020803 100%)',
  a1: '#BEEB9A', a2: '#6DB33F', a3: '#4A8A26', a4: '#2A5615',
  glow: '109,179,63',
  sub: '#93A88A',

  badge: 'COLLEGE & BEYOND',
  kicker: 'JAVA & SPRING BOOT',
  title: 'Java<br><span class="ac">Enterprise</span>',
  tagline: 'Spring Boot, microservices, the corporate stack',
  meta: '52 WEEKS<i>·</i>SPRING<i>·</i>HIBERNATE<i>·</i>MICROSERVICES',
  titleMax: 372,
  titleSize: 52,

  head: `
.jc{position:absolute;left:434px;top:96px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#071409;border:1px solid rgba(109,179,63,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(109,179,63,.16)}
.jc .bar{display:flex;align-items:center;padding:8px 12px;background:#0C2210;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#6E9459}
.jc .bar b{margin-left:auto;color:#BEEB9A;font-weight:700;font-size:8.5px;letter-spacing:.1em}
.jc .co{padding:10px 13px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;white-space:nowrap}
.an{color:#BEEB9A}.kw{color:#FF9BC4}.ty{color:#8FD4FF}.nm{color:#E3F2DA}.st{color:#FFD08A}
.svc{position:absolute;top:264px;z-index:2;border-radius:8px;background:#0C2210;
  border:1px solid rgba(109,179,63,.4);padding:7px 10px;text-align:center;
  font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.06em;color:#D3EFC2;
  box-shadow:0 12px 26px rgba(0,0,0,.5)}
.s1{left:436px;width:96px}
.s2{left:548px;width:96px;border-color:#6DB33F;background:#153A1B;box-shadow:0 14px 30px rgba(0,0,0,.55),0 0 20px rgba(109,179,63,.3)}
.s3{left:660px;width:96px}
.svc small{display:block;font-size:7.5px;color:#6E9459;letter-spacing:.1em;margin-top:2px;font-weight:700}`,

  motif: `
<div class="jc">
  <div class="bar"><span>OrderController.java</span><b>SPRING BOOT</b></div>
  <div class="co">
    <div><span class="an">@RestController</span></div>
    <div><span class="an">@RequestMapping</span><span class="nm">(</span><span class="st">"/orders"</span><span class="nm">)</span></div>
    <div><span class="kw">public class</span><span class="ty"> OrderController</span><span class="nm"> {</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="an">@GetMapping</span><span class="nm">(</span><span class="st">"/{id}"</span><span class="nm">)</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="ty">Order</span><span class="nm"> get(</span><span class="an">@PathVariable</span><span class="nm"> Long id) {</span></div>
  </div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="#3F6B2B" stroke-width="2" stroke-dasharray="4 5">
    <path d="M532 284 H548"/><path d="M644 284 H660"/>
  </g>
</svg>

<div class="svc s1">ORDERS<small>SERVICE</small></div>
<div class="svc s2">PAYMENTS<small>SERVICE</small></div>
<div class="svc s3">SHIPPING<small>SERVICE</small></div>`,
};
