import * as React from 'react';
import { SectionHeading } from '@modernagecoders/ledger-proof';

export const Centered = () => (
  <div className="lp-root" style={{ padding: '2.5rem 1.5rem' }}>
    <SectionHeading
      eyebrow="The Advantage"
      title="The Modern Age Coders Advantage"
      subtitle="Discover what makes our approach unique and effective for learners of all ages."
    />
  </div>
);

export const LeftAligned = () => (
  <div className="lp-root" style={{ padding: '2.5rem 1.5rem' }}>
    <SectionHeading
      align="left"
      eyebrow="Find your programme"
      title="Built for every age and stage"
      subtitle="From first block of code at age six to placement-ready engineering — one ladder, taught live."
    />
  </div>
);

export const TitleOnly = () => (
  <div className="lp-root" style={{ padding: '2.5rem 1.5rem' }}>
    <SectionHeading title="What Parents Say" />
  </div>
);
