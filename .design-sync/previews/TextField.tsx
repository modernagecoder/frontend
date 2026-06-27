import * as React from 'react';
import { TextField } from '@modernagecoders/ledger-proof';

const Cell = ({ children }: { children: React.ReactNode }) => (
  <div className="lp-root" style={{ padding: '1.75rem', maxWidth: 460, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {children}
  </div>
);

export const TextInput = () => (
  <Cell>
    <TextField label="Parent / Student Name" name="name" placeholder="e.g. Aarav Sharma" />
    <TextField label="Email Address" name="email" type="email" placeholder="you@example.com" />
  </Cell>
);

export const Select = () => (
  <Cell>
    <TextField
      label="Choose a Programme"
      name="programme"
      as="select"
      options={[
        { label: 'Coding for Kids (6–12)', value: 'kids' },
        { label: 'Coding for Teens (13–18)', value: 'teens' },
        { label: 'AI & Machine Learning', value: 'aiml' },
        { label: 'Mathematics Mastery', value: 'maths' },
      ]}
    />
  </Cell>
);

export const Textarea = () => (
  <Cell>
    <TextField
      label="What would you like to learn?"
      name="goals"
      as="textarea"
      placeholder="Tell us about your child's age, interests, and goals…"
    />
  </Cell>
);

export const WithError = () => (
  <Cell>
    <TextField
      label="Phone Number"
      name="phone"
      type="tel"
      placeholder="+91 91234 56161"
      error="Please enter a valid 10-digit phone number."
    />
  </Cell>
);
