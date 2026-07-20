// Django & Flask — urls to views to model, and the migration that makes it
// a real database-backed site.
export default {
  bg: 'linear-gradient(120deg,#08281E 0%,#041812 54%,#010807 100%)',
  a1: '#A6EACB', a2: '#44B78B', a3: '#2A8A66', a4: '#155742',
  glow: '68,183,139',
  sub: '#88AC9C',

  badge: 'COLLEGE & BEYOND',
  kicker: 'DJANGO & FLASK',
  title: 'Python Web<br><span class="ac">Django & Flask</span>',
  tagline: 'First route to a live, database-backed site',
  meta: 'ROUTING<i>·</i>MODELS<i>·</i>MIGRATIONS<i>·</i>DEPLOY',
  titleMax: 372,
  titleSize: 46,

  head: `
.pn{position:absolute;z-index:2;width:332px;left:434px;border-radius:10px;overflow:hidden;
  background:#04160F;border:1px solid rgba(68,183,139,.34);box-shadow:0 18px 40px rgba(0,0,0,.62)}
.pn .h{padding:6px 12px;background:#082A1E;font-family:'JetBrains Mono',monospace;font-size:9px;
  font-weight:700;letter-spacing:.1em;color:#5E9C82;border-bottom:1px solid rgba(255,255,255,.06)}
.pn .c{padding:8px 12px 10px;font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.7;white-space:nowrap}
.u1{top:98px}
.u2{top:186px}
.kw{color:#FF9BC4}.fn{color:#A6EACB}.nm{color:#DDF2E9}.st{color:#FFD08A}.ty{color:#7FD4B8}
.mig{position:absolute;left:434px;top:288px;width:332px;z-index:3;border-radius:9px;background:#04160F;
  border:1px solid rgba(68,183,139,.5);padding:9px 12px;font-family:'JetBrains Mono',monospace;
  font-size:9.5px;line-height:1.7;color:#7FB8A2;box-shadow:0 14px 32px rgba(0,0,0,.6)}
.mig b{color:#8FD8A0}
.mig .d{color:#4E8470}`,

  motif: `
<div class="pn u1">
  <div class="h">urls.py</div>
  <div class="c">
    <div><span class="nm">urlpatterns = [</span></div>
    <div><span class="nm">&nbsp;&nbsp;</span><span class="fn">path</span><span class="nm">(</span><span class="st">"books/&lt;int:pk&gt;/"</span><span class="nm">, views.detail),</span></div>
    <div><span class="nm">]</span></div>
  </div>
</div>

<div class="pn u2">
  <div class="h">models.py</div>
  <div class="c">
    <div><span class="kw">class</span><span class="ty"> Book</span><span class="nm">(models.Model):</span></div>
    <div><span class="nm">&nbsp;&nbsp;title = models.</span><span class="fn">CharField</span><span class="nm">(max_length=</span><span class="st">200</span><span class="nm">)</span></div>
  </div>
</div>

<div class="mig">
  <div><span class="d">$ </span>python manage.py migrate</div>
  <div><span class="d">&nbsp;&nbsp;Applying books.0001_initial... </span><b>OK</b></div>
</div>`,
};
