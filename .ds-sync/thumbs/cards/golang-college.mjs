// Go — goroutines and a channel, which is the whole reason people pick Go
// for backends.
export default {
  bg: 'linear-gradient(120deg,#032630 0%,#02161D 54%,#00080B 100%)',
  a1: '#8FE3F5', a2: '#00ADD8', a3: '#0284A6', a4: '#02546B',
  glow: '0,173,216',
  sub: '#83A3AD',

  badge: 'COLLEGE & BEYOND',
  kicker: 'GO BACKEND ENGINEERING',
  title: 'Go<br><span class="ac">Backend</span>',
  tagline: 'Concurrency that stays readable',
  meta: 'GOROUTINES<i>·</i>CHANNELS<i>·</i>REST<i>·</i>MICROSERVICES',
  titleMax: 372,
  titleSize: 54,

  head: `
.go{position:absolute;left:434px;top:98px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#03151B;border:1px solid rgba(0,173,216,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(0,173,216,.16)}
.go .bar{padding:8px 12px;background:#062733;font-family:'JetBrains Mono',monospace;font-size:10px;
  color:#5B8A99;border-bottom:1px solid rgba(255,255,255,.06)}
.go .co{padding:10px 13px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;white-space:nowrap}
.kw{color:#FF9BC4}.fn{color:#8FE3F5}.nm{color:#DCF0F6}.st{color:#FFD08A}.cm{color:#4A7684}
.wk{position:absolute;top:262px;z-index:2;width:72px;border-radius:8px;background:#062733;
  border:1px solid rgba(0,173,216,.45);padding:7px 0;text-align:center;
  font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:#CFEEF6;
  box-shadow:0 12px 26px rgba(0,0,0,.5)}
.w1{left:452px}.w2{left:540px}.w3{left:628px}
.ch{position:absolute;left:452px;top:326px;width:316px;z-index:2;border-radius:8px;
  background:rgba(0,173,216,.13);border:1px solid rgba(0,173,216,.5);padding:6px 0;text-align:center;
  font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.1em;color:#8FE3F5}`,

  motif: `
<div class="go">
  <div class="bar">worker.go</div>
  <div class="co">
    <div><span class="nm">results := </span><span class="kw">make</span><span class="nm">(</span><span class="kw">chan</span><span class="nm"> Result)</span></div>
    <div>&nbsp;</div>
    <div><span class="kw">for</span><span class="nm"> _, job := </span><span class="kw">range</span><span class="nm"> jobs {</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="kw">go</span><span class="fn"> handle</span><span class="nm">(job, results)</span><span class="cm">  // 3 at once</span></div>
    <div><span class="nm">}</span></div>
  </div>
</div>

<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <g stroke="#0A6C86" stroke-width="2" stroke-dasharray="4 5">
    <path d="M488 302 V326"/><path d="M576 302 V326"/><path d="M664 302 V326"/>
  </g>
</svg>

<div class="wk w1">goroutine</div>
<div class="wk w2">goroutine</div>
<div class="wk w3">goroutine</div>
<div class="ch">&#8594; chan Result &#8594;</div>`,
};
