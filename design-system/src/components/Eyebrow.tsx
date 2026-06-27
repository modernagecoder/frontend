import * as React from 'react';

export interface EyebrowProps {
  /** Eyebrow text — short, set in mono uppercase amber. */
  children: React.ReactNode;
  className?: string;
}

/**
 * Small mono, letter-spaced, amber uppercase label that sits above a heading —
 * the "section kicker" used throughout the site (hero, sections, footer headings).
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return <span className={['eyebrow', className].filter(Boolean).join(' ')}>{children}</span>;
}
