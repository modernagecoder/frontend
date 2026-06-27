import * as React from 'react';

export interface ButtonProps {
  /** Visual style. `solid` = amber fill (primary action), `ink` = dark fill (amber on hover), `outline` = ghost. */
  variant?: 'solid' | 'ink' | 'outline';
  /** Control size. */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to the full width of the container. */
  block?: boolean;
  /** Render as an anchor (`<a href>`) instead of a `<button>`. */
  href?: string;
  /** Native button type when rendered as a `<button>`. */
  type?: 'button' | 'submit' | 'reset';
  /** Disable the button. */
  disabled?: boolean;
  /** Icon shown before the label. */
  iconLeft?: React.ReactNode;
  /** Icon shown after the label (e.g. an arrow). */
  iconRight?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

/**
 * The primary call-to-action control of the Ledger & Proof system.
 * Three on-brand variants — amber `solid`, dark `ink`, and `outline` ghost —
 * in three sizes. Renders a `<button>` by default, or an `<a>` when `href` is set.
 */
export function Button({
  variant = 'solid',
  size = 'md',
  block = false,
  href,
  type = 'button',
  disabled = false,
  iconLeft,
  iconRight,
  className,
  onClick,
  children,
}: ButtonProps) {
  const classes = [
    'lp-btn',
    `lp-btn--${variant}`,
    size === 'sm' ? 'lp-btn--sm' : size === 'lg' ? 'lp-btn--lg' : '',
    block ? 'lp-btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      {inner}
    </button>
  );
}
