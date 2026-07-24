#!/usr/bin/env node
/**
 * fix-dead-course-links.js
 *
 * 24 pages (the whole Gulf cluster plus the homepage) link to /courses/<slug>
 * values that do not exist. `/courses/*` rewrites to
 * /content/courses/generated/:splat/index.html, so every one of those cards
 * 404s silently.
 *
 * This adds 301 aliases from the dead slug to the real course, following the
 * pattern already used for retired slugs in _redirects.
 *
 * ORDERING IS THE WHOLE GAME. The aliases must be written ABOVE the
 * `/courses/*` catch-all, or the catch-all matches first and the alias never
 * runs. Same in netlify.toml. This script finds those rules and inserts above.
 *
 * Splat form is `/old/* -> /new/:splat`, never `/courses/:slug.ext`, which
 * Netlify parses as a single placeholder and which took production down on
 * 2026-05-06.
 *
 * Idempotent.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// dead slug -> real course slug (stays under /courses/)
const COURSE_MAP = {
  'ai-ml-teens': 'ai-ml-masterclass-teens',
  'python-ai-kids': 'python-ai-kids-masterclass',
  'python-teens': 'python-complete-masterclass-teens',
  // The old kids AI-tools course was re-pitched to 13+, so sending a kids card
  // there would land a 9 year old's parent on a 13+ page. AI Literacy for Kids
  // (ages 8 to 14) is the age-appropriate equivalent of what the card promises.
  'ai-tools-kids': 'ai-literacy-for-kids-course',
  'vibe-coding-for-kids': 'vibe-coding-for-kids-beginners-ai-scratch-game-dev',
  'ai-ml-college': 'ai-ml-masterclass-complete-college',
  'gen-ai': 'complete-generative-ai-masterclass-college',
  'python-mastery-college': 'python-programming-masterclass-zero-to-advanced-college',
  'vibe-coding-for-teens': 'vibe-coding-for-teens-python-web-ai-projects-course',
  'python-ai-automation-college': 'python-ai-automation-masterclass-college',
  'codex-claude-code-adults': 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
  'codex-claude-code-teens': 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  'complete-app-development-masterclass': 'complete-app-development-masterclass-college',
  'computational-thinking-ai-kids': 'cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8',
  'computational-thinking-ai-teens': 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843'
};

// dead /courses/<slug> that is really a root landing page, not a course
const PAGE_MAP = {
  'deep-learning-with-tensorflow-and-pytorch': '/deep-learning-with-tensorflow-and-pytorch',
  'large-language-models-course': '/large-language-models-course',
  'machine-learning-course-for-beginners': '/machine-learning-course-for-beginners',
  'neural-networks-course': '/neural-networks-course',
  'natural-language-processing-course': '/natural-language-processing-course',
  'computer-vision-course': '/computer-vision-course'
};

function verifyTargets() {
  const problems = [];
  for (const [from, to] of Object.entries(COURSE_MAP)) {
    if (!fs.existsSync(path.join(ROOT, 'content/courses/generated', to))) {
      problems.push(`course target missing: /courses/${to} (from /courses/${from})`);
    }
  }
  for (const [from, to] of Object.entries(PAGE_MAP)) {
    if (!fs.existsSync(path.join(ROOT, 'src/pages', to.slice(1) + '.html'))) {
      problems.push(`page target missing: ${to} (from /courses/${from})`);
    }
  }
  return problems;
}

function fixRedirects() {
  const file = path.join(ROOT, '_redirects');
  let src = fs.readFileSync(file, 'utf8');
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  const idx = lines.findIndex(l => /^\/courses\/\*\s/.test(l));
  if (idx === -1) throw new Error('could not find the /courses/* rule in _redirects');

  const add = [];
  const push = (from, to) => {
    const a = `/courses/${from} ${to} 301!`;
    const b = `/courses/${from}/* ${to}/:splat 301!`;
    if (!lines.some(l => l.trim() === a)) add.push(a);
    if (!lines.some(l => l.trim() === b)) add.push(b);
  };
  for (const [from, to] of Object.entries(COURSE_MAP)) push(from, `/courses/${to}`);
  for (const [from, to] of Object.entries(PAGE_MAP)) push(from, to);

  if (!add.length) return 0;
  const block = [
    '',
    '# Dead /courses/ slugs referenced by 24 pages (Gulf cluster + homepage).',
    '# These slugs never existed as course dirs, so /courses/* rewrote them to a',
    '# missing index.html and every card 404d. MUST stay above /courses/*.',
    ...add,
    ''
  ];
  lines.splice(idx, 0, ...block);
  fs.writeFileSync(file, lines.join(eol), 'utf8');
  return add.length;
}

function fixNetlifyToml() {
  const file = path.join(ROOT, 'netlify.toml');
  let src = fs.readFileSync(file, 'utf8');
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  // locate the [[redirects]] block whose from is "/courses/*"
  const fromIdx = lines.findIndex(l => /^\s*from\s*=\s*"\/courses\/\*"\s*$/.test(l));
  if (fromIdx === -1) throw new Error('could not find the /courses/* block in netlify.toml');
  let insertAt = fromIdx;
  for (let i = fromIdx; i >= 0; i--) {
    if (/^\s*\[\[redirects\]\]/.test(lines[i])) { insertAt = i; break; }
  }

  const add = [];
  const push = (from, to) => {
    if (!new RegExp(`from\\s*=\\s*"/courses/${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(src)) {
      add.push('[[redirects]]', `  from = "/courses/${from}"`, `  to = "${to}"`, '  status = 301', '  force = true', '');
    }
    if (!new RegExp(`from\\s*=\\s*"/courses/${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/\\*"`).test(src)) {
      add.push('[[redirects]]', `  from = "/courses/${from}/*"`, `  to = "${to}/:splat"`, '  status = 301', '  force = true', '');
    }
  };
  for (const [from, to] of Object.entries(COURSE_MAP)) push(from, `/courses/${to}`);
  for (const [from, to] of Object.entries(PAGE_MAP)) push(from, to);

  if (!add.length) return 0;
  const block = [
    '# Dead /courses/ slugs referenced by 24 pages. MUST precede the /courses/* rule.',
    '',
    ...add
  ];
  lines.splice(insertAt, 0, ...block);
  fs.writeFileSync(file, lines.join(eol), 'utf8');
  return add.filter(l => l === '[[redirects]]').length;
}

const problems = verifyTargets();
if (problems.length) {
  console.error('Refusing to write. Targets do not exist:');
  problems.forEach(p => console.error('  ' + p));
  process.exit(1);
}

const r = fixRedirects();
const t = fixNetlifyToml();
console.log('All ' + (Object.keys(COURSE_MAP).length + Object.keys(PAGE_MAP).length) + ' targets verified to exist.');
console.log('  _redirects lines added ...... ' + r);
console.log('  netlify.toml blocks added ... ' + t);
