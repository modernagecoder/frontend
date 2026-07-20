// Generative AI — what a model is really doing: ranking the next token.
export default {
  bg: 'linear-gradient(120deg,#2C2008 0%,#191204 54%,#070501 100%)',
  a1: '#FCD98A', a2: '#F2A93B', a3: '#C07E12', a4: '#7A4F06',
  glow: '242,169,59',
  sub: '#B3A382',

  badge: 'COLLEGE & BEYOND',
  kicker: 'GENERATIVE AI MASTERCLASS',
  title: 'Generative<br><span class="ac">AI</span>',
  tagline: 'How it generates, and how to build on it',
  meta: 'LLMs<i>·</i>PROMPTING<i>·</i>AI APIs<i>·</i>REAL APPS',
  titleMax: 372,
  titleSize: 53,

  head: `
.gen{position:absolute;left:434px;top:100px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#120D03;border:1px solid rgba(242,169,59,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(242,169,59,.15)}
.gen .bar{padding:8px 12px;background:#1F1605;font-family:'JetBrains Mono',monospace;font-size:9.5px;
  font-weight:700;letter-spacing:.1em;color:#9A8552;border-bottom:1px solid rgba(255,255,255,.06)}
.gen .pr{padding:11px 13px 4px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#F4E7CE}
.gen .pr .blank{display:inline-block;width:56px;border-bottom:2px solid #F2A93B;margin-left:4px}
.tok{padding:6px 13px 11px}
.tok .r{display:flex;align-items:center;gap:10px;padding:3px 0;font-family:'JetBrains Mono',monospace;font-size:10px}
.tok .w{width:56px;color:#EDE0C6;font-weight:700}
.tok .bar2{flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,.08);overflow:hidden}
.tok .bar2 i{display:block;height:100%;border-radius:4px;background:#8A6C22;font-style:normal}
.tok .p{width:40px;text-align:right;color:#9A8552}
.tok .r.top .w{color:#FFF0D2}
.tok .r.top .bar2 i{background:linear-gradient(90deg,#C07E12,#FCD98A)}
.tok .r.top .p{color:#FCD98A;font-weight:700}`,

  motif: `
<div class="gen">
  <div class="bar">NEXT TOKEN &#183; SAMPLED</div>
  <div class="pr">"The capital of France is<span class="blank"></span>"</div>
  <div class="tok">
    <div class="r top"><span class="w">Paris</span><span class="bar2"><i style="width:94%"></i></span><span class="p">0.94</span></div>
    <div class="r"><span class="w">Lyon</span><span class="bar2"><i style="width:12%"></i></span><span class="p">0.02</span></div>
    <div class="r"><span class="w">Nice</span><span class="bar2"><i style="width:7%"></i></span><span class="p">0.01</span></div>
  </div>
</div>`,
};
