// Kotlin Android — MVVM is the thing employers ask about, so the card is
// the layer diagram plus the coroutine that connects them.
export default {
  bg: 'linear-gradient(120deg,#062A1A 0%,#031810 54%,#010806 100%)',
  a1: '#A8F5CD', a2: '#3DDC84', a3: '#22A85E', a4: '#116B39',
  glow: '61,220,132',
  sub: '#87AD98',

  badge: 'COLLEGE & BEYOND',
  kicker: 'KOTLIN ANDROID MASTERCLASS',
  title: 'Kotlin<br><span class="ac">Android</span>',
  tagline: 'Modern Android, architected properly',
  meta: 'KOTLIN<i>·</i>JETPACK<i>·</i>MVVM<i>·</i>COROUTINES',
  titleMax: 372,
  titleSize: 53,

  head: `
.kc{position:absolute;left:434px;top:98px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#04170E;border:1px solid rgba(61,220,132,.34);
  box-shadow:0 20px 44px rgba(0,0,0,.64),0 0 28px rgba(61,220,132,.14)}
.kc .bar{padding:8px 12px;background:#082A1A;font-family:'JetBrains Mono',monospace;font-size:10px;
  color:#5E9C7A;border-bottom:1px solid rgba(255,255,255,.06)}
.kc .co{padding:10px 13px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.72;white-space:nowrap}
.kw{color:#FF9BC4}.fn{color:#A8F5CD}.nm{color:#DFF5EA}.ty{color:#7FD4B8}.cm{color:#4E8468}
.lay{position:absolute;left:434px;top:250px;width:332px;z-index:2}
.lr{display:flex;align-items:center;gap:10px;border-radius:8px;background:#082A1A;
  border:1px solid rgba(61,220,132,.38);padding:8px 12px;margin-bottom:8px;box-shadow:0 10px 24px rgba(0,0,0,.5)}
.lr:last-child{margin-bottom:0}
.lr .n{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#D6F7E5;width:88px}
.lr .d{font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#5E9C7A;letter-spacing:.06em}
.lr .ar{margin-left:auto;color:#3DDC84;font-family:'JetBrains Mono',monospace;font-size:11px}
.lr.mid{border-color:#3DDC84;background:#0D4227;box-shadow:0 12px 28px rgba(0,0,0,.55),0 0 20px rgba(61,220,132,.3)}`,

  motif: `
<div class="kc">
  <div class="bar">ScoreViewModel.kt</div>
  <div class="co">
    <div><span class="kw">viewModelScope</span><span class="nm">.</span><span class="fn">launch</span><span class="nm"> {</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="kw">val</span><span class="nm"> data = repo.</span><span class="fn">load</span><span class="nm">()</span><span class="cm">   // suspend</span></div>
    <div><span class="nm">&nbsp;&nbsp;_state.value = </span><span class="ty">Ui</span><span class="nm">.Success(data)</span></div>
    <div><span class="nm">}</span></div>
  </div>
</div>

<div class="lay">
  <div class="lr"><span class="n">VIEW</span><span class="d">COMPOSE / ACTIVITY</span><span class="ar">&#8593;</span></div>
  <div class="lr mid"><span class="n">VIEWMODEL</span><span class="d">STATE + COROUTINES</span><span class="ar">&#8593;</span></div>
  <div class="lr"><span class="n">REPOSITORY</span><span class="d">ROOM &#183; RETROFIT</span><span class="ar">&#8593;</span></div>
</div>`,
};
