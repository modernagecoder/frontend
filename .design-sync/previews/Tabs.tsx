import * as React from 'react';
import { Tabs, CourseCard } from '@modernagecoders/ledger-proof';

const Two = ({ children }: { children: React.ReactNode }) => (
  <div className="courses-grid" style={{ marginTop: '1.5rem' }}>
    {children}
  </div>
);

export const Curriculum = () => (
  <div className="lp-root" style={{ padding: '2rem 1.5rem' }}>
    <Tabs
      tabs={[
        {
          label: 'Kids',
          content: (
            <Two>
              <CourseCard variant="coding" title="Kids Coding" description="Block coding, game design, and animations — a playful first journey into building software." skills={['Scratch', 'Game Design']} ctaLabel="Start Learning" />
              <CourseCard variant="coding" title="Web Design for Kids" description="Create colourful websites with HTML & CSS and share them with friends." skills={['HTML', 'CSS']} ctaLabel="Create Websites" />
            </Two>
          ),
        },
        {
          label: 'Teens',
          content: (
            <Two>
              <CourseCard variant="coding" title="Java Programming" description="Object-oriented foundations and the language behind ICSE/ISC computer science." skills={['Java', 'OOP', 'DSA']} ctaLabel="Explore" />
              <CourseCard variant="coding" title="AI & Machine Learning" description="Build real models in Python — from data to neural networks." skills={['Python', 'ML']} ctaLabel="Explore" />
            </Two>
          ),
        },
        {
          label: 'College',
          content: (
            <Two>
              <CourseCard variant="coding" title="Advanced Algorithms & DSA" description="Competitive-programming depth for placements and serious engineering." skills={['DSA', 'CP']} ctaLabel="Explore" />
              <CourseCard variant="coding" title="Cloud Computing & DevOps" description="Ship and operate real systems — containers, CI/CD, and the cloud." skills={['Docker', 'CI/CD']} ctaLabel="Explore" />
            </Two>
          ),
        },
        {
          label: 'Girls Who Code',
          rose: true,
          content: (
            <Two>
              <CourseCard variant="coding" title="Queen Coders" description="A supportive track designed to get more girls building and shipping software." skills={['Projects', 'Mentorship']} ctaLabel="Join" />
              <CourseCard variant="coding" title="Princess Coders" description="A gentle, creative on-ramp into coding for younger girls." skills={['Scratch', 'Creativity']} ctaLabel="Join" />
            </Two>
          ),
        },
      ]}
    />
  </div>
);
