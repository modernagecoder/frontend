import * as React from 'react';

export interface FooterLink {
  label: React.ReactNode;
  href: string;
}

export interface FooterColumn {
  heading: React.ReactNode;
  links: FooterLink[];
}

export interface FooterSocial {
  label: string;
  href: string;
  /** Icon node (inline SVG). */
  icon: React.ReactNode;
}

export interface FooterProps {
  /** Brand wordmark. */
  logoText: React.ReactNode;
  /** Logo image URL. Falls back to a monogram tile. */
  logoSrc?: string;
  /** Short brand tagline under the logo. */
  tagline?: React.ReactNode;
  /** Link columns (rendered in a 3-up grid beside the brand block). */
  columns: FooterColumn[];
  /** Optional social icon links. */
  socials?: FooterSocial[];
  /** Bottom copyright line. */
  copyright?: React.ReactNode;
  className?: string;
}

/**
 * The dark ink footer: a brand block (logo, tagline, social links) beside a
 * grid of link columns with mono amber headings, closed by a centered
 * copyright rule.
 */
export function Footer({
  logoText,
  logoSrc,
  tagline,
  columns,
  socials,
  copyright,
  className,
}: FooterProps) {
  const mono = typeof logoText === 'string' ? logoText.trim()[0]?.toUpperCase() ?? 'M' : 'M';
  return (
    <footer className={['site-footer', className].filter(Boolean).join(' ')}>
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <a className="logo" href="#">
              {logoSrc ? (
                <img className="logo-img" src={logoSrc} alt="" width={38} height={38} />
              ) : (
                <span className="logo-img">{mono}</span>
              )}
              <span className="logo-text">{logoText}</span>
            </a>
            {tagline ? <p className="footer-tagline">{tagline}</p> : null}
            {socials && socials.length ? (
              <div className="social-links">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {columns.map((col, i) => (
            <div key={i}>
              <div className="footer-heading">{col.heading}</div>
              <ul className="footer-links">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {copyright ? (
          <div className="footer-bottom">
            <p>{copyright}</p>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
