import * as React from 'react';

export interface ChipProps {
  /** Chip label. */
  children: React.ReactNode;
  /** Render as a link when set. */
  href?: string;
  /** Accent color. `default` = ink/amber, `pink` = the "girls who code" rose accent. */
  color?: 'default' | 'pink';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

/**
 * Pill-shaped tag used for the "popular courses" cloud — a rounded, bordered
 * chip that turns amber (or rose) on hover. Renders an `<a>` when `href` is set.
 */
export function Chip({ children, href, color = 'default', className, onClick }: ChipProps) {
  const classes = ['course-chip', color === 'pink' ? 'chip-pink' : '', className]
    .filter(Boolean)
    .join(' ');
  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
