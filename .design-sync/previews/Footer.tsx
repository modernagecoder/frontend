import * as React from 'react';
import { Footer } from '@modernagecoders/ledger-proof';

const Ico = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={d} />
  </svg>
);

const instagram =
  'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.22.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.22-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.22-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1018.6 12 6.6 6.6 0 0012 5.4zm0 10.9A4.3 4.3 0 1116.3 12 4.3 4.3 0 0112 16.3zm6.8-11.2a1.54 1.54 0 11-1.54-1.54 1.54 1.54 0 011.54 1.54z';
const youtube =
  'M23 7.5a3 3 0 00-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 001 7.5 31 31 0 00.5 12 31 31 0 001 16.5a3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1A31 31 0 0023.5 12 31 31 0 0023 7.5zM9.8 15.3V8.7l5.7 3.3z';
const linkedin =
  'M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04s-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 013.38-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.07 2.07 0 112.06-2.07 2.07 2.07 0 01-2.06 2.07zM7.12 20.45H3.56V9h3.56z';

export const Default = () => (
  <div className="lp-root">
    <Footer
      logoText="Modern Age Coders"
      tagline="Forging the next generation of innovators."
      socials={[
        { label: 'Instagram', href: '#', icon: <Ico d={instagram} /> },
        { label: 'YouTube', href: '#', icon: <Ico d={youtube} /> },
        { label: 'LinkedIn', href: '#', icon: <Ico d={linkedin} /> },
      ]}
      columns={[
        {
          heading: 'Quick Links',
          links: [
            { label: 'About Us', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Courses', href: '#' },
            { label: 'Success Stories', href: '#' },
            { label: 'Free Resources', href: '#' },
          ],
        },
        {
          heading: 'Categories',
          links: [
            { label: 'For Kids', href: '#' },
            { label: 'For Teens', href: '#' },
            { label: 'For College', href: '#' },
            { label: 'For Professionals', href: '#' },
            { label: 'For Corporate', href: '#' },
          ],
        },
        {
          heading: 'Contact & Legal',
          links: [
            { label: '+91 91233 66161', href: '#' },
            { label: 'contact@modernagecoders.com', href: '#' },
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
          ],
        },
      ]}
      copyright="© 2026 Modern Age Coders. All rights reserved."
    />
  </div>
);
