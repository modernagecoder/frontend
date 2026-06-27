import * as React from 'react';
import { Eyebrow } from '@modernagecoders/ledger-proof';

export const Default = () => (
  <div className="lp-root" style={{ padding: '2rem' }}>
    <Eyebrow>Coding + Maths · Ages 6–65 · Live 1-on-1</Eyebrow>
  </div>
);

export const Examples = () => (
  <div className="lp-root" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
    <Eyebrow>What Parents Say</Eyebrow>
    <Eyebrow>The Modern Age Coders Advantage</Eyebrow>
    <Eyebrow>Find your programme</Eyebrow>
  </div>
);
