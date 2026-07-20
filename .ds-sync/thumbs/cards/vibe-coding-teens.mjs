// Vibe Coding for Teens — an AI suggestion sitting in the editor as ghost
// text, waiting to be accepted. That is what the workflow actually is.
export default {
  bg: 'linear-gradient(120deg,#062A28 0%,#031A18 54%,#010908 100%)',
  a1: '#9EF3E4', a2: '#2DD4BF', a3: '#12A594', a4: '#0A6A60',
  glow: '45,212,191',
  sub: '#87A8A3',

  badge: 'TEENS 13-18',
  kicker: 'AI-ASSISTED CODING',
  title: 'Vibe Coding<br><span class="ac">for Teens</span>',
  tagline: 'Build real projects with AI beside you',
  meta: 'PYTHON<i>·</i>WEB<i>·</i>AI PROJECTS<i>·</i>PORTFOLIO',
  titleMax: 366,
  titleSize: 52,

  head: `
.ed{position:absolute;left:428px;top:100px;width:336px;z-index:2;border-radius:12px;overflow:hidden;
  background:#04100F;border:1px solid rgba(45,212,191,.36);
  box-shadow:0 24px 52px rgba(0,0,0,.66),0 0 32px rgba(45,212,191,.18)}
.ed .bar{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#082220;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:10px;color:#5E8F89}
.ed .bar .ai{margin-left:auto;display:flex;align-items:center;gap:5px;color:#9EF3E4;font-weight:700;font-size:9px;letter-spacing:.1em}
.ed .src{display:flex;padding:11px 0 12px}
.ed .ln{flex:0 0 30px;text-align:right;padding-right:11px;font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.8;color:#2E514E}
.ed .co{font-family:'JetBrains Mono',monospace;font-size:10.5px;line-height:1.8;white-space:nowrap}
.kw{color:#FF9BC4}.fn{color:#9EF3E4}.nm{color:#DFF5F1}.st{color:#FFD08A}.gh{color:#43706B;font-style:italic}
.hint{position:absolute;left:452px;top:300px;z-index:3;display:flex;align-items:center;gap:8px;
  border-radius:8px;background:#07201E;border:1px solid rgba(45,212,191,.55);padding:6px 12px;
  font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.06em;color:#9EF3E4;
  box-shadow:0 12px 28px rgba(0,0,0,.6),0 0 22px rgba(45,212,191,.24)}
.hint kbd{background:#0F3B37;border:1px solid #1D6E66;border-radius:4px;padding:1px 6px;font-size:9px;color:#CFFAF3}`,

  motif: `
<div class="ed">
  <div class="bar">
    <span>app.py</span>
    <span class="ai">
      <svg width="11" height="11" viewBox="0 0 14 14"><path d="M7 .6 L8.5 5 L13 6.5 L8.5 8 L7 12.4 L5.5 8 L1 6.5 L5.5 5 Z" fill="#2DD4BF"/></svg>
      AI ON
    </span>
  </div>
  <div class="src">
    <div class="ln">1<br>2<br>3<br>4<br>5</div>
    <div class="co">
      <div><span class="kw">def</span><span class="fn"> top_scores</span><span class="nm">(rows, n=</span><span class="st">5</span><span class="nm">):</span></div>
      <div><span class="gh">&nbsp;&nbsp;&nbsp;&nbsp;ranked = sorted(rows, reverse=True)</span></div>
      <div><span class="gh">&nbsp;&nbsp;&nbsp;&nbsp;return ranked[:n]</span></div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  </div>
</div>

<div class="hint"><kbd>Tab</kbd> accept &#183; <kbd>Esc</kbd> write it yourself</div>`,
};
