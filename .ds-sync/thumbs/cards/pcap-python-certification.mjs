// PCAP Python Certification — the exam blueprint and the pass mark, which
// is what a certification candidate actually needs to see.
export default {
  bg: 'linear-gradient(120deg,#2B2208 0%,#181304 54%,#070501 100%)',
  a1: '#FBDC93', a2: '#F0B429', a3: '#BE8A0C', a4: '#775706',
  glow: '240,180,41',
  sub: '#B2A280',

  badge: 'CERTIFICATION',
  kicker: 'PCAP PYTHON CERTIFICATION',
  title: 'PCAP Python<br><span class="ac">Certification</span>',
  tagline: 'Sit the real exam, and pass it',
  meta: 'BLUEPRINT<i>·</i>TIMED MOCKS<i>·</i>EXAM BOOKING',
  titleMax: 372,
  titleSize: 47,

  head: `
.bp{position:absolute;left:436px;top:98px;width:330px;z-index:2;border-radius:11px;overflow:hidden;
  background:#120E03;border:1px solid rgba(240,180,41,.36);
  box-shadow:0 22px 48px rgba(0,0,0,.66),0 0 28px rgba(240,180,41,.14)}
.bp .h{display:flex;align-items:center;padding:8px 12px;background:#1F1705;
  border-bottom:1px solid rgba(255,255,255,.06);font-family:'JetBrains Mono',monospace;font-size:9.5px;
  font-weight:700;letter-spacing:.08em;color:#9A8552}
.bp .h b{margin-left:auto;color:#FBDC93}
.bp .r{display:flex;align-items:center;gap:10px;padding:7px 12px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#D6C5A0}
.bp .r .w{width:34px;text-align:right;color:#FBDC93;font-weight:700}
.bp .r .bar{flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}
.bp .r .bar i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,#BE8A0C,#FBDC93);font-style:normal}
.sc{position:absolute;left:436px;top:308px;width:330px;z-index:3;display:flex;align-items:center;gap:10px}
.sc .bar{flex:1;height:12px;border-radius:6px;background:rgba(255,255,255,.09);position:relative;overflow:hidden}
.sc .bar i{position:absolute;left:0;top:0;bottom:0;width:82%;border-radius:6px;
  background:linear-gradient(90deg,#BE8A0C,#FBDC93);font-style:normal}
.sc .bar u{position:absolute;left:70%;top:-4px;bottom:-4px;width:2px;background:#8FD8A0;text-decoration:none}
.sc .lb{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;color:#FBDC93}
.pass{position:absolute;left:436px;top:334px;z-index:3;font-family:'JetBrains Mono',monospace;
  font-size:9.5px;font-weight:700;letter-spacing:.05em;color:#8FD8A0}`,

  motif: `
<div class="bp">
  <div class="h">PCAP-31-03 BLUEPRINT<b>40 QUESTIONS</b></div>
  <div class="r"><span style="flex:1">Modules &amp; packages</span><span class="bar"><i style="width:12%"></i></span><span class="w">12%</span></div>
  <div class="r"><span style="flex:1">Exceptions</span><span class="bar"><i style="width:14%"></i></span><span class="w">14%</span></div>
  <div class="r"><span style="flex:1">Strings</span><span class="bar"><i style="width:18%"></i></span><span class="w">18%</span></div>
  <div class="r"><span style="flex:1">OOP</span><span class="bar"><i style="width:34%"></i></span><span class="w">34%</span></div>
  <div class="r"><span style="flex:1">Miscellanea</span><span class="bar"><i style="width:22%"></i></span><span class="w">22%</span></div>
</div>

<div class="sc">
  <span class="lb">MOCK</span>
  <span class="bar"><i></i><u></u></span>
  <span class="lb">82%</span>
</div>
<div class="pass">&#9650; PASS MARK 70% &#183; CLEARED IN PRACTICE</div>`,
};
