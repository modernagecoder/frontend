import * as React from 'react';
import { Navbar } from '@modernagecoders/ledger-proof';

export const Default = () => (
  <div className="lp-root" style={{ minHeight: 360 }}>
    <Navbar
      logoText="Modern Age Coders"
      ctaLabel="Book a Free Demo"
      links={[
        {
          label: 'Courses',
          dropdown: [
            { label: 'View All Courses', href: '#', highlight: true },
            { label: 'For Kids (Ages 6–12)', href: '#' },
            { label: 'For Teens (Ages 13–18)', href: '#' },
            { label: 'For College Students', href: '#' },
            { label: 'Customized Training', href: '#' },
            { label: 'Special For Girls', href: '#', highlight: true },
          ],
        },
        {
          label: 'Practice',
          dropdown: [
            { label: 'Coding Challenges', href: '#' },
            { label: 'Maths Challenges', href: '#' },
            { label: 'Mistakes Students Make', href: '#' },
          ],
        },
        { label: 'Pricing', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
      ]}
    />
  </div>
);
