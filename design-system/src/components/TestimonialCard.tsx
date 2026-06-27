import * as React from 'react';

export interface TestimonialCardProps {
  /** The quote / review body. */
  quote: React.ReactNode;
  /** Reviewer name. */
  name: React.ReactNode;
  /** Course or relationship line, e.g. "Parent · Python for Kids". */
  course?: React.ReactNode;
  /** Avatar image URL. Falls back to an amber monogram from the name. */
  avatar?: string;
  /** Star rating out of 5 (default 5). */
  rating?: number;
  className?: string;
}

function initials(name: React.ReactNode): string {
  if (typeof name !== 'string') return '★';
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '');
}

/**
 * A parent / student testimonial: avatar (or amber monogram), name, course
 * line, star rating, and the quote — with the signature oversized amber quote
 * mark in the corner.
 */
export function TestimonialCard({
  quote,
  name,
  course,
  avatar,
  rating = 5,
  className,
}: TestimonialCardProps) {
  const stars = '★'.repeat(Math.max(0, Math.min(5, rating)));
  return (
    <figure className={['testimonial-card', className].filter(Boolean).join(' ')}>
      <div className="testimonial-header">
        <div className="parent-avatar">
          {avatar ? (
            <img src={avatar} alt="" />
          ) : (
            <span className="parent-avatar placeholder">{initials(name).toUpperCase()}</span>
          )}
        </div>
        <div className="testimonial-info">
          <div className="name">{name}</div>
          {course ? <div className="course">{course}</div> : null}
          <div className="star-rating">
            <span className="star" aria-label={`${rating} out of 5`}>
              {stars}
            </span>
          </div>
        </div>
      </div>
      <blockquote>{quote}</blockquote>
    </figure>
  );
}
