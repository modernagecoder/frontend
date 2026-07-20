// TypeScript — the moment it earns its keep: an error caught before it runs.
export default {
  bg: 'linear-gradient(120deg,#0A1C33 0%,#06111F 54%,#02060C 100%)',
  a1: '#9FC7F0', a2: '#3178C6', a3: '#215A9B', a4: '#123761',
  glow: '49,120,198',
  sub: '#8CA3BC',

  badge: 'COLLEGE & BEYOND',
  kicker: 'TYPESCRIPT MASTERCLASS',
  title: 'TypeScript<br><span class="ac">Full-Stack</span>',
  tagline: 'Catch it at compile time, not in production',
  meta: 'TYPES<i>·</i>NODE + EXPRESS<i>·</i>FRONTEND FRAMEWORKS',
  titleMax: 372,
  titleSize: 50,

  head: `
.ts{position:absolute;left:432px;top:100px;width:336px;z-index:2;border-radius:11px;overflow:hidden;
  background:#04101C;border:1px solid rgba(49,120,198,.4);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 30px rgba(49,120,198,.16)}
.ts .bar{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#0A1E33;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#6A8AA8}
.ts .bar i{width:16px;height:16px;border-radius:3px;background:#3178C6;color:#fff;font-style:normal;
  font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;display:flex;align-items:center;justify-content:center}
.ts .co{padding:11px 13px 12px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.78;white-space:nowrap}
.kw{color:#FF9BC4}.ty{color:#4EC9B0}.nm{color:#DCEAF6}.st{color:#CE9178}.no{color:#B5CEA8}.fn{color:#DCDCAA}
.sq{border-bottom:2px wavy #FF6B6B;padding-bottom:1px}
.err{position:absolute;left:466px;top:280px;width:302px;z-index:3;border-radius:9px;background:#1E0A0C;
  border:1px solid rgba(255,107,107,.55);padding:9px 12px;box-shadow:0 16px 36px rgba(0,0,0,.62)}
.err .t{display:flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.08em;color:#FF9B9B}
.err .m{font-family:'JetBrains Mono',monospace;font-size:10px;color:#F2D6D6;margin-top:5px;line-height:1.5}
.err .m b{color:#FFC9C9}`,

  motif: `
<div class="ts">
  <div class="bar"><i>TS</i><span>checkout.ts</span></div>
  <div class="co">
    <div><span class="kw">function</span><span class="fn"> total</span><span class="nm">(qty: </span><span class="ty">number</span><span class="nm">, price: </span><span class="ty">number</span><span class="nm">) {</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="kw">return</span><span class="nm"> qty * price;</span></div>
    <div><span class="nm">}</span></div>
    <div>&nbsp;</div>
    <div><span class="fn">total</span><span class="nm">(</span><span class="no">3</span><span class="nm">, </span><span class="st sq">"499"</span><span class="nm">);</span></div>
  </div>
</div>

<div class="err">
  <div class="t">
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#FF6B6B" stroke-width="1.5"/><path d="M7 4 V7.8" stroke="#FF6B6B" stroke-width="1.6" stroke-linecap="round"/><circle cx="7" cy="10" r=".9" fill="#FF6B6B"/></svg>
    TS2345
  </div>
  <div class="m">Argument of type <b>'string'</b> is not assignable to parameter of type <b>'number'</b>.</div>
</div>`,
};
