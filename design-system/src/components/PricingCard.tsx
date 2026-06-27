import * as React from 'react';

export interface PricingCardProps {
  /** Plan name, e.g. "Group Batch". */
  planTitle: React.ReactNode;
  /** Short tagline under the title. */
  tagline?: React.ReactNode;
  /** The price number, e.g. "2,499" or "Custom". */
  price: React.ReactNode;
  /** Currency symbol shown before the price. */
  currency?: string;
  /** Period shown after the price, e.g. "/month". */
  period?: string;
  /** Feature lines. Wrap key words in <strong> for emphasis. */
  features: React.ReactNode[];
  /** CTA label. */
  ctaLabel: React.ReactNode;
  /** CTA href. */
  ctaHref?: string;
  /** Optional badge text (e.g. "Most popular"). */
  badge?: string;
  /** Emphasis treatment: amber border (`popular`) or ink border (`featured`). */
  highlight?: 'popular' | 'featured';
  className?: string;
}

/**
 * A single pricing plan: title, tagline, a large Fraunces price with currency
 * and period, a checked feature list, and a CTA. Set `highlight` to `popular`
 * (amber) or `featured` (ink) and pass `badge` for the floating ribbon.
 */
export function PricingCard({
  planTitle,
  tagline,
  price,
  currency = '₹',
  period,
  features,
  ctaLabel,
  ctaHref = '#',
  badge,
  highlight,
  className,
}: PricingCardProps) {
  const classes = ['pricing-card', highlight ?? '', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {badge ? <span className="popular-badge">{badge}</span> : null}
      <h3 className="plan-title">{planTitle}</h3>
      {tagline ? <p className="plan-tagline">{tagline}</p> : null}
      <div className="plan-price">
        {currency ? <span className="price-currency">{currency}</span> : null}
        <span>{price}</span>
        {period ? <span className="price-period">{period}</span> : null}
      </div>
      <ul className="plan-features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <a className="plan-button" href={ctaHref}>
        {ctaLabel}
      </a>
    </div>
  );
}
