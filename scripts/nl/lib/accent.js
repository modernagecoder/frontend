'use strict';
/**
 * Accent solver for cluster market colours.
 *
 * Hard rule (feedback_page_ui_qa_checklist): an accent must clear 4.5:1 WCAG
 * contrast against ALL THREE paper tints, #FBF8F2 / #F5F1E8 / #EDE7DA, because
 * it is used as link and button colour on every one of them. Second rule
 * (project_brunei_cluster): maximise contrast, not distance. Greedy max-min
 * separation across a hundred accents drifts into magenta, primary blue and
 * near-black, which is the "AI look" the owner rejected. So separation is only
 * measured against the handful of accents a page actually links to, and the
 * candidate grid stays inside a deep editorial band.
 *
 * Pure maths, no dependency. OKLab per Bjorn Ottosson.
 */

const PAPERS = ['#FBF8F2', '#F5F1E8', '#EDE7DA'];

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
}
function rgbToHex(rgb) {
  return '#' + rgb.map(v => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
}
function srgbToLinear(c) { return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }
function linearToSrgb(c) { return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055; }

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(srgbToLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a, b) {
  const la = luminance(a), lb = luminance(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

// OKLab <-> linear sRGB
function linearToOklab([r, g, b]) {
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
  ];
}
function oklabToLinear([L, a, b]) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ * l_ * l_, m = m_ * m_ * m_, s = s_ * s_ * s_;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  ];
}
function hexToOklab(hex) { return linearToOklab(hexToRgb(hex).map(srgbToLinear)); }
function oklchToHex(L, C, hDeg) {
  const h = hDeg * Math.PI / 180;
  const lin = oklabToLinear([L, C * Math.cos(h), C * Math.sin(h)]);
  if (lin.some(v => v < -0.002 || v > 1.002)) return null; // out of gamut
  return rgbToHex(lin.map(linearToSrgb));
}
function dist(hexA, hexB) {
  const a = hexToOklab(hexA), b = hexToOklab(hexB);
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

/**
 * solve({ avoid: [hex...], hueRange: [from, to] (degrees, may wrap), minContrast })
 * Returns the in-gamut OKLCH candidate that clears the contrast floor on every
 * paper tint, sits outside the retired neon band, and maximises the minimum
 * OKLab distance from `avoid`. Ties go to the higher contrast.
 */
function solve(opts) {
  const o = Object.assign({ avoid: [], hueRange: null, minContrast: 4.5,
    lightness: [0.36, 0.54], chroma: [0.07, 0.15] }, opts || {});
  const inHue = (h) => {
    if (!o.hueRange) return true;
    const [a, b] = o.hueRange;
    return a <= b ? (h >= a && h <= b) : (h >= a || h <= b);
  };
  // Retired look: saturated purple/magenta and saturated cyan/electric blue.
  const retired = (h, C) => (C > 0.09 && ((h >= 255 && h <= 345) || (h >= 195 && h <= 255)));
  let best = null;
  for (let L = o.lightness[0]; L <= o.lightness[1] + 1e-9; L += 0.02) {
    for (let C = o.chroma[0]; C <= o.chroma[1] + 1e-9; C += 0.01) {
      for (let h = 0; h < 360; h += 4) {
        if (!inHue(h) || retired(h, C)) continue;
        const hex = oklchToHex(L, C, h);
        if (!hex) continue;
        const cMin = Math.min(...PAPERS.map(p => contrast(hex, p)));
        if (cMin < o.minContrast) continue;
        const sep = o.avoid.length ? Math.min(...o.avoid.map(a => dist(hex, a))) : 1;
        // Separation only needs to be "clearly a different colour" (about 0.12 in
        // OKLab); beyond that, reward the editorial band (mid lightness, moderate
        // chroma) so the solver does not run off to near-black or neon.
        const score = Math.min(sep, 0.12) * 100 + cMin - 40 * Math.abs(L - 0.46) - 40 * Math.abs(C - 0.115);
        if (!best || score > best.score) best = { hex, score, sep, cMin, L, C, h };
      }
    }
  }
  if (!best) throw new Error('accent.solve: no candidate cleared the floor');
  return best.hex;
}

function report(hex) {
  return PAPERS.map(p => p + ':' + contrast(hex, p).toFixed(2)).join(' ');
}

module.exports = { solve, contrast, dist, report, PAPERS };
