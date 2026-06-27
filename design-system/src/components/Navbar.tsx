import * as React from 'react';

export interface NavDropdownItem {
  label: React.ReactNode;
  href: string;
  /** Render in amber as a highlighted item. */
  highlight?: boolean;
}

export interface NavItem {
  label: React.ReactNode;
  href?: string;
  /** When present, the item becomes a hover dropdown. */
  dropdown?: NavDropdownItem[];
}

export interface NavbarProps {
  /** Brand wordmark. */
  logoText: React.ReactNode;
  /** Logo image URL. Falls back to a monogram tile built from the first letter. */
  logoSrc?: string;
  /** Top-level navigation items (links or hover dropdowns). */
  links: NavItem[];
  /** Right-aligned CTA label. Omit to hide. */
  ctaLabel?: React.ReactNode;
  /** CTA href. */
  ctaHref?: string;
  className?: string;
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
    </svg>
  );
}

/**
 * The sticky, frosted site header: monogram/logo on the left, a row of links
 * and hover dropdowns in the middle, and a dark CTA on the right. Dropdowns
 * open on hover (pure CSS).
 */
export function Navbar({ logoText, logoSrc, links, ctaLabel, ctaHref = '#', className }: NavbarProps) {
  const mono = typeof logoText === 'string' ? logoText.trim()[0]?.toUpperCase() ?? 'M' : 'M';
  return (
    <header className={['lp-header', className].filter(Boolean).join(' ')}>
      <nav>
        <div className="nav-container">
          <a className="logo" href="#">
            {logoSrc ? (
              <img className="logo-img" src={logoSrc} alt="" width={38} height={38} />
            ) : (
              <span className="logo-img">{mono}</span>
            )}
            <span className="logo-text">{logoText}</span>
          </a>

          <ul className="nav-menu">
            {links.map((item, i) => (
              <li key={i} className={['nav-item', item.dropdown ? 'dropdown' : ''].filter(Boolean).join(' ')}>
                {item.dropdown ? (
                  <>
                    <span className="nav-link">
                      {item.label}
                      <Chevron />
                    </span>
                    <ul className="dropdown-content">
                      {item.dropdown.map((d, j) => (
                        <li key={j}>
                          <a className={['dropdown-item', d.highlight ? 'highlight' : ''].filter(Boolean).join(' ')} href={d.href}>
                            {d.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a className="nav-link" href={item.href ?? '#'}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {ctaLabel ? (
            <a className="cta-button" href={ctaHref}>
              {ctaLabel}
            </a>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
