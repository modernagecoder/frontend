# Social Weeks 3-5 — Creative System & Design

**Date:** 2026-07-04
**Goal:** Weeks 3-5 of Instagram/Meta content that stops looking same-y and becomes memorable, "like big companies." Coding aggressive (W3), coding+maths bridge (W4), maths aggressive (W5).

## Problem
Weeks 1-2 (28 posts) reuse identical outer chrome — same cream frame, same header row, same dark footer pill — so only the middle ever changes. Reads as one template. Diagnosis confirmed by reading `marketing/week2/html/*` + `base.css`.

## Principle (how big brands stay memorable)
Keep an unmistakable **brand DNA**, vary the **format** hard. One soul, many faces.

**Brand DNA (never breaks, from BRAND-SOCIAL-KIT.md):** ink #201E24, cream ruled paper #FBF7EC, pine #15795A / coral #D55B3D / amber #B7770F / yellow #FFD15A, Bricolage Grotesque (headlines), Caveat (handwriting), JetBrains Mono (code/labels), the real MAC logo SVG, no emoji, no em dash, no AI-neon look, real facts only. Every post carries logo + mono URL so it is unmistakably MAC.

## The anti-sameness system: format franchises
A rotating set of post "formats," each with distinct chrome. No two adjacent posts share a look.

1. **POSTER** — frame-broken, full-bleed cream, one giant Bricolage word/line + coral highlight. (Cred/Spotify energy.)
2. **TERMINAL** — frame-broken, full-bleed real code editor (owned warm-dark, not neon-AI). For "guess the output," live code.
3. **RECEIPT** — skeuomorphic printed receipt itemising the VALUE you get (no currency — dodges the INR/USD split, kills price objection with worth not price). Coral stamp.
4. **EXHIBIT / BUILD LOG** — skeuomorphic museum placards / Polaroids of real student builds. Proof.
5. **NOTEBOOK** — the original framed look, now reserved for actual course promos with fact cards + CTA (so it feels intentional).
6. **MEME** — square, relatable coder/maths humour.
7. **DIAGRAM (60-sec concept)** — one big hand-drawn sketch explaining a concept, Caveat labels + arrows.
8. **SPLIT (Myth vs Truth)** — torn-paper vertical split, muted myth vs coral/pine truth.
9. **CAROUSEL** — multi-frame swipe story (flagship).

## Decisions (chosen; user was away — recommended path)
- Structure: **W3 all-coding ("Ship Week") → W4 coding+maths together (the USP bridge) → W5 all-maths ("Maths, Actually")**.
- Volume: **~10 hero posts/week** (30 total), incl. 2-3 carousels/week. Quality over quantity.
- Size: **portrait 1080x1350** primary, carousels 1080x1350, memes square 1080x1080.
- Boldness: **bold** — hero posts break the frame (poster/terminal/receipt/exhibit); promos+memes keep the frame.

## Production
- Shared `base3.css` per week folder (extends week2 tokens with poster/terminal/receipt/exhibit/split/diagram classes).
- One self-contained HTML per post, inline logo SVG + icons, Google Fonts @import.
- Render: `playwright-core` driving installed Chrome, viewport from `<body data-w data-h>`, wait `document.fonts.ready`, deviceScaleFactor 2, clip screenshot. Script proven working on week2.
- **Verify: read every output PNG, fix any broken layout, re-render, before calling done.**
- Output PNGs into `marketing/week3|4|5/`, HTML into `marketing/weekN/html/`, plus `WEEK-N-PLAN-AND-CAPTIONS.md` (human captions, 8-12 hashtags incl #ModernAgeCoders).

## Week 3 — "SHIP WEEK" (coding, aggressive) lineup
1. POSTER — "SHIP WEEK" manifesto opener (new live batches)
2. TERMINAL — Guess the output (engagement)
3. RECEIPT — what one live class is really worth (price-objection)
4. EXHIBIT — "by week 4 you'll have shipped" (website/game/app proof)
5. MEME (square) — my code before vs after class
6. POSTER — giant code line `while(you.alive){ you.build() }`
7. NOTEBOOK — the course promo (Python+AI / web dev, small batches, free demo) [conversion]
8. DIAGRAM — what actually happens when you run code
9. SPLIT — Myth "coding is for maths geniuses" vs Truth
10. CAROUSEL (4) — Zero to shipped: your first month
