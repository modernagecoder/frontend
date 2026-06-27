import * as React from 'react';
import { Chip } from '@modernagecoders/ledger-proof';

export const PopularCourses = () => (
  <div className="lp-root" style={{ padding: '2rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '.6rem', justifyContent: 'center' }}>
    <Chip href="#">Python Masterclass</Chip>
    <Chip href="#">AI Automation</Chip>
    <Chip href="#">AI/ML for Teens</Chip>
    <Chip href="#">Web Development</Chip>
    <Chip href="#">Java Programming</Chip>
    <Chip href="#">Data Science</Chip>
    <Chip href="#">Competitive Programming</Chip>
    <Chip href="#" color="pink">Girls Who Code</Chip>
  </div>
);

export const Colors = () => (
  <div className="lp-root" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '.6rem' }}>
    <Chip>Default chip</Chip>
    <Chip color="pink">Rose accent</Chip>
  </div>
);
