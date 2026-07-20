// IGCSE Computer Science 0478 — Boolean logic with its truth table, which is
// pure 0478 and nothing like any other card in the catalogue.
export default {
  bg: 'linear-gradient(120deg,#2E0F12 0%,#1A080A 54%,#070202 100%)',
  a1: '#FFB8B8', a2: '#E5484D', a3: '#BB2A2F', a4: '#78161A',
  glow: '229,72,77',
  sub: '#B08F90',

  badge: 'IGCSE 0478',
  kicker: 'CAMBRIDGE IGCSE CS',
  title: 'IGCSE<br><span class="ac">Computer Science</span>',
  tagline: 'Both papers, taught in full',
  meta: 'ALGORITHMS<i>·</i>PYTHON<i>·</i>SQL<i>·</i>LOGIC GATES',
  titleMax: 372,
  titleSize: 44,

  head: `
.tt{position:absolute;left:648px;top:132px;z-index:3;border-radius:9px;overflow:hidden;
  background:#150506;border:1px solid rgba(229,72,77,.42);box-shadow:0 18px 40px rgba(0,0,0,.62)}
.tt table{border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:10px}
.tt th,.tt td{padding:4px 11px;text-align:center;color:#F2DADA}
.tt th{background:#230809;color:#B07A7B;font-size:8px;letter-spacing:.1em;font-weight:700}
.tt td{border-top:1px solid rgba(255,255,255,.06)}
.tt tr.on td{background:rgba(229,72,77,.18);color:#FFD9D9;font-weight:700}
.tt td.q{color:#E5484D;font-weight:700}`,

  motif: `
<svg width="800" height="450" viewBox="0 0 800 450" fill="none" style="position:absolute;inset:0;z-index:1">
  <!-- inputs -->
  <g font-family="'JetBrains Mono',monospace" font-size="12" font-weight="700" fill="#FFB8B8">
    <text x="430" y="176">A</text>
    <text x="430" y="248">B</text>
  </g>
  <g stroke="#8A4144" stroke-width="2">
    <path d="M444 172 H492"/>
    <path d="M444 244 H492"/>
  </g>

  <!-- AND gate -->
  <path d="M492 148 H516 A32 32 0 0 1 516 212 H492 Z" fill="#20090A" stroke="#E5484D" stroke-width="2.4"/>
  <text x="508" y="185" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#B07A7B">AND</text>
  <path d="M492 172 H492" stroke="#8A4144" stroke-width="2"/>
  <path d="M492 196 H480 V244" stroke="#8A4144" stroke-width="2" fill="none"/>

  <!-- NOT gate -->
  <path d="M492 268 L528 288 L492 308 Z" fill="#20090A" stroke="#E5484D" stroke-width="2.4"/>
  <circle cx="533" cy="288" r="5" fill="#20090A" stroke="#E5484D" stroke-width="2.4"/>
  <path d="M444 288 H492" stroke="#8A4144" stroke-width="2"/>
  <text x="430" y="293" font-family="'JetBrains Mono',monospace" font-size="12" font-weight="700" fill="#FFB8B8">C</text>

  <!-- OR gate, combining -->
  <path d="M556 180 C 572 180 588 192 592 212 C 588 232 572 244 556 244 C 566 224 566 200 556 180 Z"
        fill="#20090A" stroke="#E5484D" stroke-width="2.4"/>
  <text x="570" y="216" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="700" fill="#B07A7B">OR</text>
  <path d="M548 180 H556" stroke="#8A4144" stroke-width="2"/>
  <path d="M538 288 H564 V244" stroke="#8A4144" stroke-width="2" fill="none"/>
  <path d="M548 180 V180" stroke="#8A4144" stroke-width="2"/>

  <!-- output -->
  <path d="M592 212 H632" stroke="#E5484D" stroke-width="2.6"/>
  <text x="640" y="217" font-family="'JetBrains Mono',monospace" font-size="12" font-weight="700" fill="#FFD9D9">X</text>
</svg>

<div class="tt">
  <table>
    <tr><th>A</th><th>B</th><th>C</th><th>X</th></tr>
    <tr><td>0</td><td>0</td><td>0</td><td class="q">1</td></tr>
    <tr><td>0</td><td>1</td><td>1</td><td class="q">0</td></tr>
    <tr class="on"><td>1</td><td>1</td><td>0</td><td class="q">1</td></tr>
    <tr><td>1</td><td>0</td><td>1</td><td class="q">0</td></tr>
  </table>
</div>`,
};
