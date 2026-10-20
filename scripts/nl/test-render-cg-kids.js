#!/usr/bin/env node
'use strict';
/**
 * Proves render-cg.js keeps 18+ courses off pages for children: a module with audience 'kids' gets the
 * kids flagship set (no Codex and Claude Code professionals card, no college automation card), and a
 * module without it renders exactly as before. Renders in memory, writes nothing.
 *
 *   node scripts/nl/test-render-cg-kids.js
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const cg = require('./lib/render-cg');
let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };
const base = require(path.join(ROOT, 'content/us/coding-and-ai-classes-in-north-carolina.js'));
const adultSlug = '/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals';
const kids = cg.render(Object.assign({}, base, { audience: 'kids' }));
const all = cg.render(base);
ok(!kids.includes(adultSlug), 'kids page: no Codex and Claude Code professionals card');
ok(!kids.includes('/courses/python-ai-automation-masterclass-college'), 'kids page: no college automation card');
ok(kids.includes('/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev') && kids.includes('/courses/python-ai-kids-masterclass'), 'kids page: kids flagships present');
ok(all.includes(adultSlug), 'all-ages page: unchanged flagship set');
console.log(fails ? `${fails} FAILED` : 'render-cg kids flagships: all checks pass');
process.exit(fails ? 1 : 0);
