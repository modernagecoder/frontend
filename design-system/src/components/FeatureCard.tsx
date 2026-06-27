import * as React from 'react';

export interface FeatureCardProps {
  /** Icon node, rendered inside the amber-tinted icon tile. Inline SVG works well. */
  icon?: React.ReactNode;
  /** Feature title. */
  title: React.ReactNode;
  /** Supporting description. */
  description: React.ReactNode;
  /** Alignment of the card contents. */
  align?: 'center' | 'left';
  className?: string;
}

/**
 * A single "advantage" / feature tile: an amber-tinted icon badge, a Fraunces
 * title, and a muted description. Used in the homepage advantage grid.
 */
export function FeatureCard({ icon, title, description, align = 'center', className }: FeatureCardProps) {
  return (
    <div className={['feature-item', align === 'left' ? 'is-left' : '', className].filter(Boolean).join(' ')}>
      {icon ? <div className="feature-icon">{icon}</div> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
