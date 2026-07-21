// Locked course-thumbnail skeleton (owner-approved 2026-07-20, "Round 3"):
// centered solid-color letterpress poster. Every card shares this exact
// structure; only the solid ink, the accent and the words change per course.
//
// spec = {
//   field,        // solid background ink, e.g. '#2A5F8A'  (NO gradients)
//   shadow,       // 'r,g,b' of a very dark version of field (letterpress + corner shade)
//   accent,       // solid accent colour (course's second colour), e.g. '#FFD43B'
//   badge,        // true age range, e.g. 'TEENS 13-18' (eyebrow reads BADGE · LIVE ONLINE)
//   title,        // 1-2 lines; accent word(s) wrapped in <span class="ac">
//   ornament,     // ONE real line of the course's tool (code/blocks/maths), html;
//                 //   use <span class="p"> for the prompt/keyword glyph
//   facts,        // outcomes row, e.g. 'REAL PROJECTS<i>·</i>GAMES<i>·</i>AUTOMATION'
//   titleSize,    // px, default 96; drop for long titles (e.g. 68)
//   titleTop,     // px gap above title, default 20
// }

const LOGO = `<svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="110" fill="#007bff"/>
      <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round">
        <path d="M116 85 C 75 85, 70 120, 70 145 V 225 C 70 250, 50 256, 40 256 C 50 256, 70 262, 70 287 V 367 C 70 392, 75 427, 116 427" stroke-width="12"/>
        <path d="M396 85 C 437 85, 442 120, 442 145 V 225 C 442 250, 462 256, 472 256 C 462 256, 442 262, 442 287 V 367 C 442 392, 437 427, 396 427" stroke-width="12"/>
        <line x1="182" y1="190" x2="182" y2="300" stroke-width="10"/>
        <line x1="330" y1="190" x2="330" y2="300" stroke-width="10"/>
        <line x1="182" y1="190" x2="262" y2="256" stroke-width="10"/>
        <line x1="330" y1="190" x2="250" y2="256" stroke-width="10"/>
      </g>
      <g fill="#ffffff">
        <circle cx="182" cy="190" r="41"/>
        <circle cx="330" cy="190" r="41"/>
        <path d="M182 256 A 41 41 0 1 0 182 338 C 182 338 182 380 148 412 L 140 420 C 160 420 200 390 223 300 A 41 41 0 0 0 182 256 Z"/>
        <path d="M330 256 A 41 41 0 1 0 330 338 C 330 338 330 380 296 412 L 288 420 C 308 420 340 390 371 300 A 41 41 0 0 0 330 256 Z"/>
      </g>
    </svg>`;

export function renderPoster(s) {
  const titleSize = s.titleSize || 96;
  const titleTop = s.titleTop == null ? 20 : s.titleTop;
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600..900;1,9..144,600..900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:800px;height:450px;overflow:hidden}
body{font-family:'Inter',system-ui,sans-serif;position:relative;color:#FBF8F2;background:${s.field}}

/* depth: quiet corner shading, printed-paper grain, double keyline frame */
.shade{position:absolute;inset:0;
  background:radial-gradient(115% 105% at 50% 42%,transparent 58%,rgba(${s.shadow},.4) 100%)}
.grain{position:absolute;inset:0;opacity:.06;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")}
.frame-out{position:absolute;inset:14px;border:1px solid rgba(251,248,242,.38);border-radius:3px}
.frame-in{position:absolute;inset:21px;border:2.5px solid rgba(251,248,242,.2);border-radius:2px}

.stack{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;text-align:center;
  padding:38px 60px 34px;z-index:2}

.wordmark{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:800;
  letter-spacing:.26em;color:rgba(251,248,242,.85)}
.wordmark svg{display:block;border-radius:5px;box-shadow:0 2px 6px rgba(${s.shadow},.4)}

.eyebrow{margin-top:17px;display:flex;align-items:center;gap:14px;
  font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:700;letter-spacing:.22em;color:${s.accent}}
.eyebrow::before,.eyebrow::after{content:"";width:44px;height:1px;background:rgba(251,248,242,.4)}
.eyebrow i{font-style:normal;color:rgba(251,248,242,.55);padding:0 2px}

h1{margin-top:${titleTop}px;font-family:'Fraunces',Georgia,serif;font-weight:800;font-size:${titleSize}px;
  line-height:1.0;letter-spacing:-.02em;color:#FBF8F2;
  text-shadow:0 1px 0 rgba(${s.shadow},.35),0 4px 14px rgba(${s.shadow},.38)}
h1 .ac{font-style:italic;font-weight:700;color:${s.accent};padding-right:.05em}

.ornament{margin-top:24px;display:flex;align-items:center;gap:14px;
  font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:500;color:rgba(251,248,242,.62)}
.ornament::before,.ornament::after{content:"";width:30px;height:1px;background:rgba(251,248,242,.32)}
.ornament .p{color:${s.accent};opacity:.85;font-weight:700}

.facts{margin-top:14px;font-family:'JetBrains Mono',monospace;font-size:12.5px;font-weight:700;
  letter-spacing:.2em;color:rgba(251,248,242,.88)}
.facts i{font-style:normal;color:${s.accent};padding:0 9px}

.url{margin-top:auto;font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;
  letter-spacing:.24em;color:rgba(251,248,242,.55)}
</style>
</head>
<body>

<div class="shade"></div>
<div class="grain"></div>
<div class="frame-out"></div>
<div class="frame-in"></div>

<div class="stack">
  <div class="wordmark">${LOGO}MODERN AGE CODERS</div>

  <div class="eyebrow">${s.badge}<i>&#183;</i>LIVE ONLINE</div>

  <h1>${s.title}</h1>

  <div class="ornament"><span>${s.ornament}</span></div>

  <p class="facts">${s.facts}</p>

  <div class="url">LEARN.MODERNAGECODERS.COM</div>
</div>

</body>
</html>`;
}
