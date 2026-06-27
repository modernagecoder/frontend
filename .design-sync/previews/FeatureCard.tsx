import * as React from 'react';
import { FeatureCard } from '@modernagecoders/ledger-proof';

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const instructor = 'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z';
const paths = 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75';
const projects = 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42';

export const Default = () => (
  <div className="lp-root" style={{ padding: '1.5rem', maxWidth: 320 }}>
    <FeatureCard
      icon={<Icon d={instructor} />}
      title="Expert Instructors"
      description="Learn from industry professionals who bring real-world experience to every lesson."
    />
  </div>
);

export const Grid = () => (
  <div className="lp-root" style={{ padding: '1.5rem' }}>
    <div className="features-grid">
      <FeatureCard icon={<Icon d={instructor} />} title="Expert Instructors" description="Learn from industry professionals who bring real-world experience to every lesson." />
      <FeatureCard icon={<Icon d={paths} />} title="Personalized Paths" description="Our curriculum adapts to your learning style, so you master concepts thoroughly." />
      <FeatureCard icon={<Icon d={projects} />} title="Creative Projects" description="Apply your knowledge by building a portfolio of impressive, real-world projects." />
    </div>
  </div>
);

export const LeftAligned = () => (
  <div className="lp-root" style={{ padding: '1.5rem', maxWidth: 360 }}>
    <FeatureCard
      align="left"
      icon={<Icon d={projects} />}
      title="Live Online Classes"
      description="No pre-recorded videos — only interactive, camera-on sessions with a real teacher."
    />
  </div>
);
