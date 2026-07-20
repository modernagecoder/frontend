// AP CS Principles — the Create Performance Task checked against the four
// things it must actually contain.
export default {
  bg: 'linear-gradient(120deg,#052637 0%,#031621 54%,#01080D 100%)',
  a1: '#A5E4FF', a2: '#0EA5E9', a3: '#0A7FB5', a4: '#064E70',
  glow: '14,165,233',
  sub: '#87A6B8',

  badge: 'AP EXAM',
  kicker: 'AP CS PRINCIPLES',
  title: 'AP Computer<br><span class="ac">Science Principles</span>',
  tagline: 'The Create task, and the exam around it',
  meta: 'FIVE BIG IDEAS<i>·</i>70-QUESTION EXAM<i>·</i>MOCKS',
  titleMax: 372,
  titleSize: 43,

  head: `
.ct{position:absolute;left:436px;top:98px;width:328px;z-index:2;border-radius:11px;overflow:hidden;
  background:#04141D;border:1px solid rgba(14,165,233,.38);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(14,165,233,.16)}
.ct .hd{padding:8px 12px;background:#082432;font-family:'JetBrains Mono',monospace;font-size:9.5px;
  font-weight:700;letter-spacing:.1em;color:#6E9CB3;border-bottom:1px solid rgba(255,255,255,.06)}
.ct .co{padding:10px 13px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;
  white-space:nowrap;border-bottom:1px solid rgba(255,255,255,.06)}
.kw{color:#FF9BC4}.fn{color:#A5E4FF}.nm{color:#DDEEF6}.no{color:#FFD08A}.st{color:#8FD8A0}
.ck{padding:8px 13px 10px;display:flex;flex-wrap:wrap;gap:6px}
.ck span{display:flex;align-items:center;gap:5px;border-radius:6px;border:1px solid rgba(14,165,233,.42);
  background:rgba(14,165,233,.12);padding:4px 9px;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.03em;color:#BEE6F8}
.ck span b{color:#8FD8A0}`,

  motif: `
<div class="ct">
  <div class="hd">CREATE PERFORMANCE TASK</div>
  <div class="co">
    <div><span class="nm">scores = [</span><span class="no">88</span><span class="nm">, </span><span class="no">92</span><span class="nm">, </span><span class="no">75</span><span class="nm">]</span></div>
    <div>&nbsp;</div>
    <div><span class="kw">def</span><span class="fn"> grade</span><span class="nm">(s):</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kw">if</span><span class="nm"> s &gt;= </span><span class="no">90</span><span class="nm">: </span><span class="kw">return</span><span class="nm"> </span><span class="st">"A"</span></div>
    <div><span class="nm">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="kw">return</span><span class="nm"> </span><span class="st">"B"</span></div>
  </div>
  <div class="ck">
    <span><b>&#10003;</b> LIST</span>
    <span><b>&#10003;</b> PROCEDURE + PARAMETER</span>
    <span><b>&#10003;</b> SELECTION</span>
    <span><b>&#10003;</b> ITERATION</span>
  </div>
</div>`,
};
