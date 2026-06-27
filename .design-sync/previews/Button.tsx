import * as React from 'react';
import { Button } from '@modernagecoders/ledger-proof';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="lp-root" style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap', alignItems: 'center', padding: '1.5rem' }}>
    {children}
  </div>
);

export const Variants = () => (
  <Row>
    <Button variant="solid">Book a Free Demo</Button>
    <Button variant="ink">Talk to an Advisor</Button>
    <Button variant="outline">View Courses</Button>
  </Row>
);

export const Sizes = () => (
  <Row>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </Row>
);

export const WithIcon = () => (
  <Row>
    <Button variant="solid" iconRight={<Arrow />}>
      Start Learning
    </Button>
    <Button variant="outline" iconRight={<Arrow />}>
      View Courses
    </Button>
  </Row>
);

export const Disabled = () => (
  <Row>
    <Button variant="solid" disabled>
      Enrolling…
    </Button>
    <Button variant="outline" disabled>
      Unavailable
    </Button>
  </Row>
);
