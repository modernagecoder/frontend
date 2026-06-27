# design-sync NOTES — Ledger & Proof

This design system is a **hand-authored port** of the Modern Age Coders homepage
brand ("Ledger & Proof") into a real React + TS component library, so the
claude.ai/design agent can build with the actual brand. It is NOT the production
website — the website (`src/pages/*.html`) stays plain HTML/CSS, untouched.

## Source of truth
- Library lives in `design-system/` (package `@modernagecoders/ledger-proof`).
- Components: `design-system/src/components/*.tsx`; styling: `design-system/src/styles/ledger-proof.css`.
- The CSS is a **copy** of `src/css/index-redesign.css` (the homepage redesign), plus
  three additions: a Google Fonts `@import` (Fraunces/Inter/JetBrains Mono), a
  `.lp-root` base layer (brand font/color/paper for standalone rendering), and a
  `.lp-btn` button class layer (clean variant API over the brand button visuals).
  **If the homepage redesign CSS changes, re-port the relevant rules here by hand.**

## Build / converter
- `buildCmd`: `npm --prefix ./design-system run build` (tsup → `dist/index.js` ESM + `dist/index.d.ts`).
- Converter run (from repo root):
  `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./design-system/node_modules --entry ./design-system/dist/index.js --out ./ds-bundle`
- `--node-modules` MUST point at `design-system/node_modules` (where react + @types/react resolve), not repo root.
- Playwright for the render check: pinned **playwright@1.59.0** in `.ds-sync` to match the
  already-cached chromium build **1217** (no 200MB download). If the cache changes, map the
  cached `chromium-<rev>` to its playwright version before installing.

## Fonts
- Fonts load via a remote Google Fonts `@import` at the top of `ledger-proof.css`
  (→ `_ds_bundle.css`). Validate prints `[FONT_REMOTE] "Fira Code"` — expected, non-blocking
  (Fira Code is only a `--font-mono` fallback name). `runtimeFontPrefixes` suppresses
  `[FONT_MISSING]` for Fraunces/Inter/JetBrains Mono.

## Known render warns (triaged-clean)
- `[FONT_REMOTE] "Fira Code"` — expected (remote font host); not new.

## Card modes
- Full-width components use `cfg.overrides.<Name>.cardMode = "column"`: Navbar (was `[GRID_OVERFLOW]`),
  Hero, Footer, Tabs.

## Gotcha fixed (keep)
- A `.lp-root a {color:inherit}` rule out-specified the single-class button color rules
  (`.plan-button`, `.cta-button`, `.card-button`, `.hero-cta`, `.nav-link`) and made ink
  buttons render text invisibly (ink-on-ink). Fixed by demoting to a bare `a{color:inherit}`.
  Keep it bare-element specificity.

## Re-sync risks (watch list)
- The CSS is a manual copy of `index-redesign.css` — it can silently drift from the live
  homepage. On re-sync, diff the two and re-port deliberate brand changes.
- Component props are hand-written, not derived from the site. New homepage patterns won't
  appear here until a component is added by hand.
- Previews use self-contained data-URI thumbnails and `#` links (no dependency on the live
  site), so they won't rot if site URLs change.
