import * as React from 'react';

export interface HeroProps {
  /** Mono eyebrow above the headline. */
  eyebrow?: React.ReactNode;
  /** The headline. Use <span className="highlight"> / "highlight-made" to tint words amber. */
  title: React.ReactNode;
  /** Supporting paragraph. */
  description?: React.ReactNode;
  /** Primary (amber) CTA label. */
  primaryCtaLabel?: React.ReactNode;
  primaryCtaHref?: string;
  /** Secondary (ghost) CTA label. */
  secondaryCtaLabel?: React.ReactNode;
  secondaryCtaHref?: string;
  /** Trust line below the CTAs (rating, counts). */
  trust?: React.ReactNode;
  /** Right-hand visual. Defaults to the brand's `{ } ;` specimen card. */
  media?: React.ReactNode;
  className?: string;
}

function DefaultSpecimen() {
  return (
    <div className="hero-symbol-wrapper">
      <div className="glow-symbol-container" aria-hidden="true">
        <span className="ambient-glow" />
        <span className="sym-char sym-brace">{'{'}</span>
        <span className="sym-char">x</span>
        <span className="sym-char sym-brace">{'}'}</span>
        <span className="sym-char sym-semi">;</span>
      </div>
      <div className="hero-symbol-caption">
        <span>Code</span>
        <span>+ Maths</span>
      </div>
    </div>
  );
}

/**
 * The homepage hero: a two-column editorial layout — eyebrow, large Fraunces
 * headline, description, a pair of CTAs, and a trust line on the left; a visual
 * "specimen" card on the right (the `{ } ;` symbol by default, or pass `media`).
 */
export function Hero({
  eyebrow,
  title,
  description,
  primaryCtaLabel,
  primaryCtaHref = '#',
  secondaryCtaLabel,
  secondaryCtaHref = '#',
  trust,
  media,
  className,
}: HeroProps) {
  return (
    <section className={['hero-section', className].filter(Boolean).join(' ')}>
      <div className="hero-text">
        {eyebrow ? <span className="eyebrow hero-eyebrow">{eyebrow}</span> : null}
        <h1 className="hero-title">{title}</h1>
        {description ? <p>{description}</p> : null}
        {(primaryCtaLabel || secondaryCtaLabel) && (
          <div className="hero-cta-group">
            {primaryCtaLabel ? (
              <a className="hero-cta" href={primaryCtaHref}>
                {primaryCtaLabel}
              </a>
            ) : null}
            {secondaryCtaLabel ? (
              <a className="hero-cta-outline" href={secondaryCtaHref}>
                {secondaryCtaLabel}
              </a>
            ) : null}
          </div>
        )}
        {trust ? <div className="hero-trust">{trust}</div> : null}
      </div>
      <div className="hero-image">{media ?? <DefaultSpecimen />}</div>
    </section>
  );
}
