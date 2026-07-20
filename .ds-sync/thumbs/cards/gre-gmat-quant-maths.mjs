// GRE & GMAT Quant — a data-sufficiency item, which is the format that
// catches everyone who only knows the maths.
export default {
  bg: 'linear-gradient(120deg,#141A22 0%,#0B0F15 54%,#040608 100%)',
  a1: '#D0DCE8', a2: '#78909C', a3: '#556B77', a4: '#33434C',
  glow: '120,144,156',
  sub: '#93A3B0',

  badge: 'PROFESSIONAL',
  kicker: 'GRE & GMAT QUANT',
  title: 'GRE & GMAT<br><span class="ac">Quant Prep</span>',
  tagline: 'The format is half the test',
  meta: 'DATA SUFFICIENCY<i>·</i>TIMING<i>·</i>ADAPTIVE PRACTICE',
  titleMax: 372,
  titleSize: 47,

  head: `
.ds{position:absolute;left:436px;top:98px;width:330px;z-index:2;border-radius:10px;overflow:hidden;
  background:#121820;border:1px solid rgba(120,144,156,.35);box-shadow:0 20px 44px rgba(0,0,0,.64)}
.ds .h{display:flex;align-items:center;padding:7px 12px;background:#1A222C;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.1em;color:#7B8DA0}
.ds .h b{margin-left:auto;color:#D0DCE8}
.ds .q{padding:9px 12px;font-family:'Fraunces',Georgia,serif;font-size:15px;font-weight:800;color:#E8EEF4}
.ds .st{display:flex;align-items:center;gap:10px;padding:8px 12px;border-top:1px solid rgba(255,255,255,.06);
  font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#C4D0DC}
.ds .st .n{width:16px;height:16px;border-radius:4px;flex:0 0 16px;display:flex;align-items:center;justify-content:center;
  background:rgba(120,144,156,.2);font-size:8.5px;font-weight:700;color:#D0DCE8}
.ds .st .v{margin-left:auto;font-size:9px;font-weight:700}
.ds .st.no .v{color:#E8A0A0}
.ds .st.yes .v{color:#8FD8A0}
.pick{position:absolute;left:436px;top:308px;width:330px;z-index:3;border-radius:9px;
  border:1px solid rgba(143,216,160,.45);background:rgba(143,216,160,.09);padding:8px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.03em;color:#C7E8CF}
.pick b{color:#8FD8A0}`,

  motif: `
<div class="ds">
  <div class="h">DATA SUFFICIENCY<b>2 MIN</b></div>
  <div class="q">Is x &gt; 0 ?</div>
  <div class="st no"><span class="n">1</span><span>x&#178; &gt; 4</span><span class="v">NOT ALONE</span></div>
  <div class="st yes"><span class="n">2</span><span>x&#179; &gt; 0</span><span class="v">SUFFICIENT</span></div>
</div>

<div class="pick"><b>&#8594;</b> ANSWER B &#183; STATEMENT 2 ALONE IS ENOUGH</div>`,
};
