// Shared skeleton for Modern Age Coders course thumbnails (800x450).
// The skeleton is fixed so the catalog reads as one family; every card supplies
// its own palette and a motif built from that course's real subject matter.
//
// spec = {
//   bg,                       // page background (css)
//   a1..a4,                   // accent ramp: lightest -> darkest
//   glow,                     // "r,g,b" used for the ambient glows
//   sub,                      // muted body colour
//   badge, kicker,            // top-right pill, mono eyebrow
//   title,                    // may contain <span class="ac">word</span>
//   tagline, meta,            // supporting line, mono fact row (use <i>·</i>)
//   titleMax,                 // px, keeps the headline clear of the motif
//   titleSize,                // px, default 57
//   motif,                    // absolutely-positioned html/svg, z-index 1-3
//   head,                     // extra <style> rules for the motif
// }

const LOGO = `<svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
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

export function renderCard(s) {
  const titleSize = s.titleSize || 57;
  const titleMax = s.titleMax || 372;
  const grid = s.grid === false ? '' : `body::before{content:"";position:absolute;inset:0;
  background-image:linear-gradient(rgba(251,248,242,.045) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(251,248,242,.045) 1px,transparent 1px);
  background-size:32px 32px}`;

  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600..900;1,9..144,600..900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:800px;height:450px;overflow:hidden}
:root{--paper:#FBF8F2;--dusk:${s.sub || '#A8A49C'};--a1:${s.a1};--a2:${s.a2};--a3:${s.a3};--a4:${s.a4}}
body{font-family:'Inter',system-ui,sans-serif;color:var(--paper);position:relative;background:${s.bg}}
${grid}
.glow-a{position:absolute;left:44%;top:-8%;width:560px;height:450px;
  background:radial-gradient(closest-side,rgba(${s.glow},.24),rgba(${s.glow},.07) 55%,transparent 74%)}
.glow-b{position:absolute;left:-150px;bottom:-190px;width:520px;height:420px;
  background:radial-gradient(closest-side,rgba(${s.glow},.22),transparent 70%)}
.vignette{position:absolute;inset:0;
  background:radial-gradient(120% 105% at 46% 42%,transparent 54%,rgba(0,0,0,.5) 100%)}
.grain{position:absolute;inset:0;opacity:.055;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")}
.frame{position:absolute;inset:11px;border:1px solid rgba(${s.glow},.3);border-radius:10px;pointer-events:none;z-index:6}

.card{position:absolute;inset:0;padding:26px 40px 20px;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:5}
.wordmark{display:flex;align-items:center;gap:10px;font-size:13px;font-weight:800;letter-spacing:.2em;color:rgba(251,248,242,.92)}
.wordmark svg{display:block;border-radius:7px;box-shadow:0 3px 12px rgba(0,0,0,.5)}
.badge{border:1.5px solid rgba(${s.glow},.75);background:rgba(${s.glow},.15);color:var(--a1);
  padding:8px 17px;border-radius:999px;font-weight:800;font-size:13.5px;letter-spacing:.13em;
  box-shadow:0 0 20px rgba(${s.glow},.28),inset 0 0 14px rgba(${s.glow},.13)}

.titleblock{position:absolute;left:40px;top:114px;max-width:${titleMax}px;z-index:4}
.kicker{font-family:'JetBrains Mono',monospace;font-size:12.5px;font-weight:700;letter-spacing:.3em;color:var(--a2);margin-bottom:15px;display:flex;align-items:center;gap:12px}
.kicker::before{content:"";width:28px;height:2px;background:linear-gradient(90deg,var(--a1),var(--a4))}
h1{font-family:'Fraunces',Georgia,serif;font-weight:800;font-size:${titleSize}px;line-height:1.05;letter-spacing:-.015em;color:var(--paper);text-shadow:0 3px 28px rgba(0,0,0,.65)}
h1 .ac{font-style:italic;font-weight:700;display:inline-block;
  background:linear-gradient(92deg,var(--a1) 5%,var(--a2) 48%,var(--a3) 95%);
  -webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none;
  filter:drop-shadow(0 0 20px rgba(${s.glow},.45));padding-right:.08em}
.sub{margin-top:14px;font-size:16.5px;line-height:1.45;color:var(--dusk);font-weight:500;max-width:${titleMax - 16}px}
.meta{margin-top:13px;font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:700;letter-spacing:.09em;color:var(--a1);opacity:.9}
.meta i{font-style:normal;color:var(--a3);padding:0 7px}

.bottom{display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(251,248,242,.16);
  padding-top:13px;font-size:11px;letter-spacing:.12em;font-weight:700;color:rgba(251,248,242,.55);
  position:relative;z-index:5;margin-top:auto}
.bottom .dot{color:var(--a2)}
${s.head || ''}
</style>
</head>
<body>
<div class="glow-a"></div>
<div class="glow-b"></div>
<div class="vignette"></div>
<div class="grain"></div>
<div class="frame"></div>

${s.motif}

<div class="card">
  <div class="top">
    <div class="wordmark">${LOGO}MODERN AGE CODERS</div>
    <div class="badge">${s.badge}</div>
  </div>

  <div class="titleblock">
    <div class="kicker">${s.kicker}</div>
    <h1>${s.title}</h1>
    <p class="sub">${s.tagline}</p>
    <p class="meta">${s.meta}</p>
  </div>

  <div class="bottom"><span>LIVE ONLINE CLASSES</span><span>learn<span class="dot">.</span>modernagecoders<span class="dot">.</span>com</span></div>
</div>
</body>
</html>`;
}
