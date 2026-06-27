import * as React from 'react';
import { TestimonialCard } from '@modernagecoders/ledger-proof';

export const Default = () => (
  <div className="lp-root" style={{ padding: '1.5rem', maxWidth: 380 }}>
    <TestimonialCard
      name="Sonam Oswal"
      course="Mother of Dhairya"
      rating={5}
      quote="My child Dhairya is really enjoying the Modern Age Coders IT classes. This is his first online class, and he eagerly looks forward to it. I can already see his improvement."
    />
  </div>
);

export const Grid = () => (
  <div className="lp-root" style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
    <TestimonialCard
      name="Shradha Saraf"
      course="Mother of Mivaan"
      rating={5}
      quote="Mivaan enjoys the class. He understands the concepts and completes his tasks with excitement. He started taking interest in coding — truly an amazing class."
    />
    <TestimonialCard
      name="Shweta Singh"
      course="Mother of Ishan"
      rating={5}
      quote="My son struggled with math for years. Integrating it into coding projects has transformed his understanding and confidence. Highly recommended!"
    />
  </div>
);
