import * as React from 'react';
import { CourseCard } from '@modernagecoders/ledger-proof';

// Self-contained on-brand placeholder thumbnail (no dependency on the live site).
const thumb = (label: string, bg = '#F4EEE3', fg = '#B45309') =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>` +
      `<rect width='800' height='450' fill='${bg}'/>` +
      `<text x='48' y='250' font-family='monospace' font-weight='700' font-size='72' fill='${fg}'>${label}</text>` +
      `</svg>`,
  );

const Cell = ({ children }: { children: React.ReactNode }) => (
  <div className="lp-root" style={{ padding: '1.5rem', maxWidth: 360 }}>
    {children}
  </div>
);

export const Coding = () => (
  <Cell>
    <CourseCard
      variant="coding"
      thumbnail={thumb('{ } kids')}
      title="Kids Coding"
      description="A complete journey into coding — from basics to advanced. Kids learn block coding, game design, animations, and web apps in a fun, interactive way."
      skills={['Block Coding', 'Game Design', 'Web Apps']}
      ctaLabel="Start Learning"
    />
  </Cell>
);

export const Maths = () => (
  <Cell>
    <CourseCard
      variant="math"
      thumbnail={thumb('∑ maths', '#1C1814', '#E0A158')}
      title="Olympiad & Competition Math"
      description="Problem-solving mastery for ambitious students — number theory, combinatorics, and proof technique, taught the way real mathematicians think."
      skills={['Number Theory', 'Proofs', 'Olympiad Prep']}
      ctaLabel="Explore Track"
    />
  </Cell>
);

export const NoThumbnail = () => (
  <Cell>
    <CourseCard
      title="AI & Machine Learning"
      description="Build real models with Python — from data wrangling to neural networks. For serious teens and college students ready to ship."
      skills={['Python', 'Pandas', 'Neural Nets']}
      ctaLabel="View Curriculum"
    />
  </Cell>
);
