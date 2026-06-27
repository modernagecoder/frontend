# Ledger & Proof — how to build with this kit

Editorial-premium design system for **Modern Age Coders**: amber + ink on warm
paper. **Fraunces** (display headings), **Inter** (body/UI), **JetBrains Mono**
(eyebrows, code, prices, tags). Import components from
`@modernagecoders/ledger-proof`; at runtime they live on `window.LedgerProof.*`.

## Wrapping & setup (required)

Wrap every composed screen in **`<div className="lp-root">`**. It establishes the
brand base — Inter body font, ink (`--ink`) text color, and the warm paper
(`--paper`) background. Without it, text falls back to browser defaults and looks
off-brand. Add `lp-root--paper` for the subtle graph-paper texture. There is no
JS provider to mount — styling is all CSS, shipped via `styles.css` (which
`@import`s `_ds_bundle.css`).

## Styling idiom

**Style components through their props first** — they carry the design language:
`Button variant="solid|ink|outline"`, `PricingCard highlight="popular|featured"`,
`SectionHeading align="center|left"`, `Chip color="default|pink"`,
`CourseCard variant="coding|math"`. Do **not** restyle a component with ad-hoc CSS.

For your **own layout glue**, use the brand tokens (CSS custom properties) — never
hard-code colors or fonts:

| Token | Use |
|---|---|
| `--paper` `#FBF8F2`, `--paper-2`, `--surface` | backgrounds |
| `--ink` `#1C1814`, `--ink-soft`, `--muted` | text |
| `--amber` `#B45309`, `--amber-deep`, `--amber-tint` | primary accent / highlights |
| `--rose` `--green` `--red` | secondary / status |
| `--line` | hairline borders |
| `--font-display` (Fraunces), `--font-body` (Inter), `--font-mono` (JetBrains Mono) | type |
| `--container` (1140px), `--radius` (14px) | layout |

Shipped layout/typography helper classes you may reuse: **`.eyebrow`** (mono amber
kicker), **`.section-title`** (Fraunces + amber underline), **`.section-subtitle`**,
the grids **`.courses-grid`** / **`.pricing-grid`** / **`.features-grid`**, and the
button class layer **`.lp-btn`** (`.lp-btn--solid|ink|outline`, `--sm|lg`, `--block`).

## Where the truth lives

- `styles.css` and the `_ds_bundle.css` it imports — the full token + class vocabulary.
- Per component: `<Name>.d.ts` (the exact prop API) and `<Name>.prompt.md` (usage).

## Idiomatic example

```tsx
import { SectionHeading, CourseCard, Button } from '@modernagecoders/ledger-proof';

export function Programmes() {
  return (
    <div className="lp-root">
      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <SectionHeading
          eyebrow="Find your programme"
          title="Built for every age and stage"
          subtitle="From first block of code to placement-ready engineering."
        />
        <div className="courses-grid">
          <CourseCard variant="coding" title="Kids Coding"
            description="Block coding, game design, and web apps — a playful first journey."
            skills={['Scratch', 'Web Apps']} ctaLabel="Start Learning" />
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button variant="solid" href="/courses">View all courses</Button>
        </div>
      </section>
    </div>
  );
}
```
