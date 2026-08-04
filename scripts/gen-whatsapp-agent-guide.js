#!/usr/bin/env node
/**
 * Build marketing/whatsapp-agent-course-guide.md — the knowledge pack the
 * owner feeds to the WhatsApp AI agents.
 *
 * Everything is generated from the same sources the site itself uses, so the
 * guide can never quote a price the checkout would refuse:
 *   - content/courses/data/courses-config.json  (per-course INR prices,
 *     rewritten from pricing/pricing.config.jsonc on every pricing:apply)
 *   - content/courses/data/*.json               (titles, links, curriculum)
 *
 * Rerun after any price or course change:  node scripts/gen-whatsapp-agent-guide.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'content', 'courses', 'data');
const OUT = path.join(ROOT, 'marketing', 'whatsapp-agent-course-guide.md');
const BASE = 'https://learn.modernagecoders.com';

const cfg = JSON.parse(fs.readFileSync(path.join(DATA, 'courses-config.json'), 'utf8'));
const intl = cfg.internationalPricing || {};

function inr(course, tier) {
    const p = (cfg.courses[course] || {}).pricing || cfg.defaultPricing || {};
    return p[tier] && p[tier].display ? p[tier].display : null;
}

// Walk a curriculum section: phase title + description, then the titles of
// nested month/week/module blocks (titles only — detail lives on the page).
function sectionLines(sec, depth) {
    const lines = [];
    if (!sec || typeof sec !== 'object') return lines;
    if (sec.title) lines.push('  '.repeat(depth) + '- ' + sec.title);
    if (depth === 0 && sec.description) lines.push('  ' + sec.description);
    Object.keys(sec).forEach(function (k) {
        if (k === 'title' || k === 'description') return;
        const v = sec[k];
        if (v && typeof v === 'object' && depth < 2) {
            lines.push.apply(lines, sectionLines(v, depth + 1));
        }
    });
    return lines;
}

const CURRICULUM_KEY = /^(phase|module|month|level|part|term|semester|stage|unit|week|curriculum|paper|topic)/i;

const files = fs.readdirSync(DATA).filter(f => f.endsWith('.json') && f !== 'courses-config.json');
const courses = [];
files.forEach(function (f) {
    let d;
    try { d = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8')); }
    catch (e) { console.error('skip ' + f + ': ' + e.message); return; }
    const m = d.meta || {};
    if (!m.slug || !m.title) return;
    courses.push({ file: f, meta: m, data: d });
});
courses.sort((a, b) => (a.meta.category || '').localeCompare(b.meta.category || '') ||
    a.meta.title.localeCompare(b.meta.title));

const out = [];
out.push('# Modern Age Coders — Course & Pricing Guide for WhatsApp Agents');
out.push('');
out.push('_Generated ' + new Date().toISOString().slice(0, 10) + ' from the live pricing config. ' +
    'Regenerate with `node scripts/gen-whatsapp-agent-guide.js` after any change._');
out.push('');
out.push('## How to use this guide (instructions for the AI agent)');
out.push('');
out.push('- Always share the course LINK when discussing a course; the page has the full, always-current details.');
out.push('- When a parent or student asks about the CURRICULUM or PROJECTS, share the outline and project list from this guide for that course in detail, then the link for the complete week-by-week plan. Be transparent — parents should be able to check everything.');
out.push('- PRICING RULES — follow exactly:');
out.push('  - Quote ONLY the fee that applies to where the family lives. If they are in India, give the rupee fee; if they are anywhere else, give the dollar fee. Never say "the Indian price is X and the international price is Y" — one person gets one price: theirs.');
out.push('  - Answer only the pricing question they asked. Do not volunteer other plans, other regions, or extra pricing commentary. If they ask "what does it cost", give the group fee and mention 1-on-1 exists if they want personal attention — nothing more.');
out.push('  - Quote fees exactly as written here. Never invent discounts.');
out.push('- Every course includes a FREE demo class first — always offer to book it (share ' + BASE + '/contact/ or take their phone number for a callback).');
out.push('- Classes are LIVE with a real teacher (never recordings), 2 classes per week (8 per month), for ages 6 to 67.');
out.push('');
out.push('## Fee reference (internal — quote only the line that matches the asker)');
out.push('');
out.push('| Plan | If the student is in India | If the student is outside India |');
out.push('|---|---|---|');
out.push('| Group class (max 10 students) | ₹1,499/month | $100/month |');
out.push('| Mini Batch (3-4 students) | ₹2,999/month | not offered |');
out.push('| Personalized 1-on-1 | ₹7,500/month (₹8,500 for Maths) | $150/month |');
out.push('');
out.push('Courses with their own fees are marked on their entries below.');
out.push('');
out.push('## Holiday camps (Summer & Winter)');
out.push('');
out.push('One-time fee: **₹9,999 (India) / $200 (outside India)** for **8 personalized one-to-one classes** with a dedicated mentor. All ages, three tracks:');
out.push('');
out.push('- Summer camp hub: ' + BASE + '/summer-coding-camp');
out.push('  - Kids: ' + BASE + '/summer-coding-camp-kids · Teens: ' + BASE + '/summer-coding-camp-teens · Adults: ' + BASE + '/summer-coding-camp-adults');
out.push('- Winter camp hub: ' + BASE + '/winter-coding-camp');
out.push('  - Kids: ' + BASE + '/winter-coding-camp-kids · Teens: ' + BASE + '/winter-coding-camp-teens · Adults: ' + BASE + '/winter-coding-camp-adults');
out.push('');
out.push('---');
out.push('');
out.push('## All courses (' + courses.length + ')');

let currentCat = null;
courses.forEach(function (c) {
    const m = c.meta;
    const cat = m.category || 'Other';
    if (cat !== currentCat) {
        currentCat = cat;
        out.push('');
        out.push('### ' + cat);
    }
    out.push('');
    out.push('#### ' + m.title);
    out.push('');
    out.push('- Link: ' + BASE + '/courses/' + m.slug);
    const g = inr(m.slug, 'group'), mb = inr(m.slug, 'miniBatch'), p = inr(m.slug, 'personal');
    const gi = (intl.group && intl.group.display) || '$100/month';
    const pi = (intl.personal && intl.personal.display) || '$150/month';
    out.push('- Fee if the student is in India: Group ' + (g || '₹1,499/month') +
        (mb ? ' · Mini Batch ' + mb : '') + (p ? ' · 1-on-1 ' + p : ''));
    out.push('- Fee if the student is outside India: Group ' + gi + ' · 1-on-1 ' + pi);
    if (m.duration) out.push('- Duration: ' + m.duration);
    if (m.level) out.push('- Level: ' + m.level);
    if (m.description) out.push('- About: ' + m.description);

    const who = c.data.who_is_this_for;
    if (who && typeof who === 'object') {
        const vals = Object.values(who).filter(v => typeof v === 'string').slice(0, 5);
        if (vals.length) out.push('- Who it is for: ' + vals.join('; '));
    }
    const pre = c.data.prerequisites;
    if (pre && typeof pre === 'object') {
        const vals = Object.entries(pre).filter(e => typeof e[1] === 'string')
            .map(e => e[0].replace(/_/g, ' ') + ': ' + e[1]).slice(0, 4);
        if (vals.length) out.push('- Prerequisites: ' + vals.join(' · '));
    }

    const secs = Object.keys(c.data).filter(k => CURRICULUM_KEY.test(k) && c.data[k] && typeof c.data[k] === 'object');
    if (secs.length) {
        out.push('- Curriculum outline:');
        secs.forEach(function (k) {
            sectionLines(c.data[k], 0).forEach(function (l) { out.push('  ' + l); });
        });
    }

    // Every hands-on project in the course, flattened from the week blocks.
    const projects = [];
    (function collect(o) {
        if (!o || typeof o !== 'object') return;
        if (Array.isArray(o.projects)) o.projects.forEach(function (pr) {
            if (typeof pr === 'string' && projects.indexOf(pr) === -1) projects.push(pr);
        });
        Object.keys(o).forEach(function (k) { if (o[k] && typeof o[k] === 'object') collect(o[k]); });
    })(c.data);
    if (projects.length) {
        const shown = projects.slice(0, 15);
        out.push('- Projects students build: ' + shown.join('; ') +
            (projects.length > shown.length
                ? ' — plus ' + (projects.length - shown.length) + ' more on the course page'
                : ''));
    }

    const careers = c.data.career_paths_after_completion;
    if (Array.isArray(careers) && careers.length) {
        out.push('- Career paths after completion: ' + careers.slice(0, 5).map(String).join('; '));
    }
});

out.push('');
out.push('---');
out.push('');
out.push('## Quick answers for common parent questions');
out.push('');
out.push('- **Demo class**: free, no card needed, book at ' + BASE + '/contact/ or via callback.');
out.push('- **Class format**: live online with a real teacher, 2 classes/week, small groups (max 10) or 1-on-1.');
out.push('- **Ages**: 6 to 67 — kids (6-12), teens (13-18), college students and working professionals.');
out.push('- **Certificates**: yes, on course completion.');
out.push('- **Full catalog page**: ' + BASE + '/courses · Course atlas: ' + BASE + '/course-atlas');
out.push('- **Pricing page**: ' + BASE + '/pricing');
out.push('');

fs.writeFileSync(OUT, out.join('\n'));
console.log('Wrote ' + OUT + ' — ' + courses.length + ' courses, ' + out.length + ' lines.');
