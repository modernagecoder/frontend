import * as React from 'react';
import { Hero } from '@modernagecoders/ledger-proof';

export const Homepage = () => (
  <div className="lp-root" style={{ padding: '1rem 0' }}>
    <Hero
      eyebrow="Coding + Maths · Ages 6–65 · Live 1-on-1"
      title={
        <>
          <span style={{ whiteSpace: 'nowrap' }}>
            <span className="highlight">Ma</span>ths + Co<span className="highlight">de</span>
          </span>
          <br />
          <span className="highlight-made">Made</span> for Each Other.
        </>
      }
      description={
        <>
          We don't just teach coding and maths. We teach you how to{' '}
          <span className="hero-emphasis">think, build, and solve problems</span> that actually matter — real
          skills that work in the real world, at any age, any stage.
        </>
      }
      primaryCtaLabel="Book a Free Demo"
      primaryCtaHref="#"
      secondaryCtaLabel="View Courses →"
      secondaryCtaHref="#"
      trust={
        <>
          <span>
            <span className="star">★</span> <b>4.9</b>
          </span>
          <span className="dot" />
          <span>
            <b>547</b> reviews
          </span>
          <span className="dot" />
          <span>
            <b>15+</b> countries
          </span>
          <span className="dot" />
          <span>
            since <b>2020</b>
          </span>
        </>
      }
    />
  </div>
);
