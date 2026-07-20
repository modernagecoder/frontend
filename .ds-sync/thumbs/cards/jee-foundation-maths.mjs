// JEE Foundation Maths — the move that separates a JEE answer from a
// school one: use the relations, do not find the roots.
export default {
  bg: 'linear-gradient(120deg,#2E1408 0%,#1A0B04 54%,#070301 100%)',
  a1: '#FFBFA0', a2: '#F4511E', a3: '#C33A0F', a4: '#7C2306',
  glow: '244,81,30',
  sub: '#B3958A',

  badge: 'CLASS 8-10',
  kicker: 'JEE FOUNDATION MATHS',
  title: 'JEE Foundation<br><span class="ac">Maths</span>',
  tagline: 'Build the habits early, not in Class 11',
  meta: 'ALGEBRA<i>·</i>NUMBER THEORY<i>·</i>PROBLEM CRAFT',
  titleMax: 372,
  titleSize: 45,

  head: `
.pq{position:absolute;left:452px;top:104px;z-index:3;font-family:'Fraunces',Georgia,serif;
  font-size:19px;font-weight:800;color:#F8E7DE;line-height:1.4;max-width:320px}
.pq i{font-style:italic;color:#FFBFA0}
.work{position:absolute;left:452px;top:186px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:12px;line-height:2;color:#C9A897}
.work b{color:#FFBFA0}
.work .hi{color:#FFE0D2;font-weight:700}
.note{position:absolute;left:452px;top:334px;z-index:3;border-radius:7px;border:1px solid rgba(244,81,30,.5);
  background:rgba(244,81,30,.12);padding:5px 12px;font-family:'JetBrains Mono',monospace;
  font-size:10px;font-weight:700;letter-spacing:.05em;color:#FFBFA0}`,

  motif: `
<div class="pq">If <i>&#945;</i>, <i>&#946;</i> are roots of <i>x</i>&#178; &#8722; 5<i>x</i> + 6 = 0,<br>find <i>&#945;</i>&#178; + <i>&#946;</i>&#178;</div>

<div class="work">
  <div><b>&#945; + &#946;</b> = 5 &nbsp;&nbsp; <b>&#945;&#946;</b> = 6</div>
  <div>&#945;&#178; + &#946;&#178; = (&#945; + &#946;)&#178; &#8722; 2&#945;&#946;</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 25 &#8722; 12 = <span class="hi">13</span></div>
</div>

<div class="note">NEVER SOLVED FOR THE ROOTS</div>`,
};
