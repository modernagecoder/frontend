// Algorithmic Trading — a backtest, shown honestly: the equity curve AND
// the drawdown, with the caveat on the card. Serves both trading courses.
export default {
  bg: 'linear-gradient(120deg,#04262B 0%,#02161A 54%,#000809 100%)',
  a1: '#9EEDE4', a2: '#4FD1C5', a3: '#2A9E93', a4: '#12635C',
  glow: '79,209,197',
  sub: '#85A8A4',

  badge: 'COLLEGE & BEYOND',
  kicker: 'ALGORITHMIC TRADING',
  title: 'Algorithmic<br><span class="ac">Trading</span>',
  tagline: 'Write the rules, then test them properly',
  meta: 'PYTHON<i>·</i>BACKTESTING<i>·</i>RISK MANAGEMENT',
  titleMax: 372,
  titleSize: 50,

  head: `
.bt{position:absolute;left:434px;top:96px;width:332px;z-index:2;border-radius:11px;overflow:hidden;
  background:#03161A;border:1px solid rgba(79,209,197,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 28px rgba(79,209,197,.14)}
.bt .bar{display:flex;align-items:center;padding:8px 12px;background:#062A30;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:9.5px;
  font-weight:700;letter-spacing:.08em;color:#5E9A94}
.bt .bar b{margin-left:auto;color:#9EEDE4}
.bt .pad{padding:10px 12px 8px}
.mets{display:flex;gap:8px;padding:0 12px 11px}
.mets span{flex:1;border-radius:7px;background:rgba(79,209,197,.1);border:1px solid rgba(79,209,197,.3);
  padding:6px 0;text-align:center;font-family:'JetBrains Mono',monospace;font-size:9px;color:#7FBDB6}
.mets b{display:block;font-size:12px;color:#9EEDE4;margin-top:2px}
.mets .dn b{color:#FF9B9B}
.cav{position:absolute;left:434px;top:334px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:9px;font-weight:700;letter-spacing:.06em;color:#5E8A86;
  border:1px solid rgba(94,138,134,.4);border-radius:7px;padding:5px 11px}`,

  motif: `
<div class="bt">
  <div class="bar"><span>BACKTEST &#183; 2019-2024</span><b>SIMULATED</b></div>
  <div class="pad">
    <svg width="308" height="128" viewBox="0 0 308 128" fill="none">
      <defs>
        <linearGradient id="eq" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#4FD1C5" stop-opacity=".28"/><stop offset="1" stop-color="#4FD1C5" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,.06)" stroke-width="1">
        <path d="M6 34 H302"/><path d="M6 68 H302"/><path d="M6 102 H302"/>
      </g>
      <path d="M6 108 L44 92 L74 96 L104 70 L134 84 L150 100 L166 88 L200 58 L232 64 L262 36 L302 24 L302 118 L6 118 Z" fill="url(#eq)"/>
      <polyline points="6,108 44,92 74,96 104,70 134,84 150,100 166,88 200,58 232,64 262,36 302,24"
                fill="none" stroke="#9EEDE4" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
      <!-- the drawdown, marked -->
      <path d="M134 84 L150 100" stroke="#FF9B9B" stroke-width="2.8" stroke-linecap="round"/>
      <circle cx="150" cy="100" r="3.4" fill="#FF9B9B"/>
      <text x="156" y="114" font-family="'JetBrains Mono',monospace" font-size="8" font-weight="700" fill="#C97C7C">drawdown</text>
    </svg>
  </div>
  <div class="mets">
    <span>CAGR<b>11.4%</b></span>
    <span>SHARPE<b>1.28</b></span>
    <span class="dn">MAX DD<b>-18%</b></span>
  </div>
</div>

<div class="cav">BACKTESTED RESULTS &#183; NOT A FORECAST</div>`,
};
