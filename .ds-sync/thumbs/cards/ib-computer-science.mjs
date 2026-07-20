// IB DP Computer Science — the three things you are assessed on, including
// the Paper 1 case study, taught to the new guide.
export default {
  bg: 'linear-gradient(120deg,#0C1E3A 0%,#071223 54%,#02060E 100%)',
  a1: '#AECDFF', a2: '#3B82F6', a3: '#2260C4', a4: '#143C7E',
  glow: '59,130,246',
  sub: '#8FA3BE',

  badge: 'IB DIPLOMA',
  kicker: 'IB DP COMPUTER SCIENCE',
  title: 'IB DP<br><span class="ac">Computer Science</span>',
  tagline: 'Taught to the new guide, SL and HL',
  meta: 'BOTH THEMES<i>·</i>CASE STUDY<i>·</i>IA SUPPORT',
  titleMax: 372,
  titleSize: 44,

  head: `
.pp{position:absolute;z-index:2;width:104px;border-radius:9px;background:#F7FAFF;padding:9px 9px 10px;
  box-shadow:0 18px 40px rgba(0,0,0,.6)}
.pp .t{font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;letter-spacing:.12em;color:#5F7CA8}
.pp .n{font-family:'Fraunces',Georgia,serif;font-size:15px;font-weight:800;color:#0F2340;margin-top:2px}
.pp .l{height:4px;border-radius:2px;background:#DCE5F2;margin-top:5px}
.pp .cs{margin-top:7px;border-radius:5px;background:#EAF1FE;border:1px solid #B8D0F5;padding:4px 6px;
  font-family:'JetBrains Mono',monospace;font-size:7.5px;font-weight:700;color:#2260C4;letter-spacing:.04em}
.q1{left:436px;top:120px}
.q2{left:556px;top:136px}
.q3{left:676px;top:152px}
.yr{position:absolute;left:436px;top:312px;z-index:3;display:flex;align-items:center;gap:8px;
  border-radius:8px;border:1px solid rgba(59,130,246,.5);background:rgba(59,130,246,.13);padding:6px 13px;
  font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;letter-spacing:.08em;color:#AECDFF}
.yr b{color:#3B82F6}`,

  motif: `
<div class="pp q1">
  <div class="t">PAPER 1</div>
  <div class="n">Themes</div>
  <div class="l" style="width:92%"></div>
  <div class="l" style="width:70%"></div>
  <div class="cs">+ CASE STUDY</div>
</div>

<div class="pp q2">
  <div class="t">PAPER 2</div>
  <div class="n">Applied</div>
  <div class="l" style="width:88%"></div>
  <div class="l" style="width:64%"></div>
  <div class="l" style="width:78%"></div>
</div>

<div class="pp q3">
  <div class="t">INTERNAL</div>
  <div class="n">The IA</div>
  <div class="l" style="width:80%"></div>
  <div class="l" style="width:92%"></div>
  <div class="l" style="width:58%"></div>
</div>

<div class="yr">FIRST ASSESSMENT <b>2027</b></div>`,
};
