import * as React from 'react';

export interface CourseCardProps {
  /** Course title. */
  title: React.ReactNode;
  /** One- or two-line description. */
  description: React.ReactNode;
  /** Thumbnail image URL (rendered 16:9). */
  thumbnail?: string;
  /** Alt text for the thumbnail. */
  thumbnailAlt?: string;
  /** Skill / topic tags shown as mono chips. */
  skills?: string[];
  /** Call-to-action label. Omit to hide the button. */
  ctaLabel?: React.ReactNode;
  /** Call-to-action href. */
  ctaHref?: string;
  /** `coding` (amber accent) or `math` (ink accent) hover treatment. */
  variant?: 'coding' | 'math';
  className?: string;
}

/**
 * The catalogue card for a single course: optional 16:9 thumbnail, title,
 * description, a row of mono skill tags, and an outlined CTA. Lifts and reveals
 * an amber top-rule on hover (`math` variant uses the ink accent instead).
 */
export function CourseCard({
  title,
  description,
  thumbnail,
  thumbnailAlt = '',
  skills,
  ctaLabel,
  ctaHref = '#',
  variant = 'coding',
  className,
}: CourseCardProps) {
  return (
    <article className={['course-card', variant === 'math' ? 'math' : '', className].filter(Boolean).join(' ')}>
      <div className="card-content">
        {thumbnail ? (
          <div className="card-thumbnail-container">
            <img src={thumbnail} alt={thumbnailAlt} loading="lazy" />
          </div>
        ) : null}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {skills && skills.length ? (
          <ul className="card-skills">
            {skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        ) : null}
        {ctaLabel ? (
          <div className="card-button-container">
            <a className="card-button" href={ctaHref}>
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
