import * as React from 'react';

export interface SectionHeadingProps {
  /** Optional mono eyebrow shown above the title. */
  eyebrow?: React.ReactNode;
  /** The section title (Fraunces display, with the amber underline accent). */
  title: React.ReactNode;
  /** Optional supporting sentence below the title. */
  subtitle?: React.ReactNode;
  /** Alignment. Centered by default; `left` for left-aligned section intros. */
  align?: 'center' | 'left';
  /** Heading level for the title element. */
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

/**
 * The standard section intro: optional eyebrow, a Fraunces display title with
 * the signature amber underline, and an optional subtitle. Centered by default.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as = 'h2',
  className,
}: SectionHeadingProps) {
  const Tag = as;
  const left = align === 'left';
  return (
    <div className={['section-heading', left ? 'is-left' : '', className].filter(Boolean).join(' ')}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag className={['section-title', left ? 'is-left' : ''].filter(Boolean).join(' ')}>{title}</Tag>
      {subtitle ? (
        <p className={['section-subtitle', left ? 'is-left' : ''].filter(Boolean).join(' ')}>{subtitle}</p>
      ) : null}
    </div>
  );
}
