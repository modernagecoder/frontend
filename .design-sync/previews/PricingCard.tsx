import * as React from 'react';
import { PricingCard } from '@modernagecoders/ledger-proof';

const Cell = ({ children }: { children: React.ReactNode }) => (
  <div className="lp-root" style={{ padding: '2rem 1.5rem 2.5rem', maxWidth: 340 }}>
    {children}
  </div>
);

export const Standard = () => (
  <Cell>
    <PricingCard
      planTitle="Group Classes"
      tagline="Up to 10 students · learn with peers"
      currency="₹"
      price="1,499"
      period="/month"
      features={[
        'Weekly two classes (1 hr each)',
        'Batch of up to 10 students',
        'Collaborative projects',
        'Recorded session access',
        'Course completion certificate',
      ]}
      ctaLabel="Choose Plan"
    />
  </Cell>
);

export const Popular = () => (
  <Cell>
    <PricingCard
      highlight="popular"
      badge="Most Popular"
      planTitle="Mini Batch"
      tagline="3–4 students · near 1-on-1 attention"
      currency="₹"
      price="2,499"
      period="/month"
      features={[
        <><strong>Micro batch of just 3–4 students</strong></>,
        'Near 1-on-1 teacher attention',
        'Live doubt-clearing every class',
        'Project-based learning',
        'Course completion certificate',
      ]}
      ctaLabel="Choose Plan"
    />
  </Cell>
);

export const Featured = () => (
  <Cell>
    <PricingCard
      highlight="featured"
      badge="Best Results"
      planTitle="Personalized 1-on-1"
      tagline="Private mentor · your pace, your goals"
      currency="₹"
      price="4,999"
      period="/month"
      features={[
        <><strong>Weekly two 1-on-1 classes</strong></>,
        '100% customized curriculum',
        'Dedicated expert mentor',
        'Career guidance & portfolio help',
        'Lifetime recording access',
      ]}
      ctaLabel="Choose Plan"
    />
  </Cell>
);
