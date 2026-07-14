/**
 * fix-visible-enrollment-numbers.js
 * ------------------------------------------------------------------
 * Replaces fabricated, per-city VISIBLE enrollment counts on the
 * geographic landing pages with truthful org-wide phrasing.
 *
 * CORRECTED 2026-07-15 (Phase 2.3). This script used to write "500+ ... across
 * India", on the stated reasoning that "the real verified base is ~547 students".
 * That was wrong at the root: 547 is the GOOGLE REVIEW count, not the student
 * count. Restating reviews as students is the exact error brand-facts.json rule 4
 * exists to stop, and because this script fans out across the geographic pages it
 * is where most of the site's "500+" claims actually came from — including the
 * hero strip cloned onto 131 city pages.
 *
 * The org-wide count now comes from scripts/brand-facts.json (10,000+). Never
 * hard-code it here again; a number written in a fan-out script becomes a
 * site-wide claim the moment someone re-runs it.
 *
 * The per-city de-fabrication rules below are unchanged and still correct — the
 * only thing that was wrong was the number they replaced the fabrications with.
 *
 * Only touches keyword-anchored enrollment phrases with a 3-4 digit count,
 * so legitimate numbers are SAFE and untouched:
 *   "10+ Projects", "200+ LeetCode", "200+ DSA problems", "18+ in {city}",
 *   "20+ more localities", "400+ IT companies", "4-8 students", "18+".
 *
 * Scope: src/pages/{best-coding-class-in,coding-classes-in,coding-classes-near}-*.{html,md}
 *
 * Usage:
 *   node scripts/fix-visible-enrollment-numbers.js --dry   # preview only
 *   node scripts/fix-visible-enrollment-numbers.js         # apply
 */

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const DRY = process.argv.includes('--dry');
// Single source of truth. See scripts/brand-facts.json.
const FACTS = JSON.parse(fs.readFileSync(path.join(__dirname, 'brand-facts.json'), 'utf8'));
const STUDENTS = FACTS.students; // "10,000+"
const SCOPE = /^(best-coding-class-in|coding-classes-in|coding-classes-near)-.*\.(html|md)$/;

// Each rule: a keyword-anchored regex + replacement. 3-4 digit counts only.
const RULES = [
  // Hero stat strip: "214+ Students Enrolled" -> org-wide
  { name: 'students-enrolled', re: /(\d{3,4})\+ Students Enrolled/g, to: () => `${STUDENTS} Students Across India` },
  // "412+ Ahmedabad families", "623+ Delhi NCR families", "391+ Jammu families have"
  { name: 'city-families', re: /(\d{3,4})\+ [A-Za-z][a-zA-Z]+(?: [A-Za-z][a-zA-Z]+)? families\b/g, to: () => `${STUDENTS} families across India` },
  // "468+ Maharashtra learners", "311+ central Karnataka learners", "367+ Gwalior learners"
  { name: 'region-learners', re: /(\d{3,4})\+ [A-Za-z][a-zA-Z]+(?: [A-Za-z][a-zA-Z]+)? learners\b/g, to: () => `${STUDENTS} learners across India` },
  // CTA sentences keep the local detail, drop the fake number:
  // "Join 214+ students from Sanjay Place, ..." -> "Join students from Sanjay Place, ..."
  // "468+ learners from Tilak Nagar ...", "367+ young coders from ..."
  { name: 'from-locality', re: /(\d{3,4})\+ (students|learners|young coders) from\b/g, to: (_m, _n, noun) => `${noun} from` },
];

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (SCOPE.test(e.name)) out.push(full);
  }
  return out;
}

const samples = {};   // rule -> Set of "before  =>  after" snippets
let filesChanged = 0;
const ruleCounts = {};

for (const full of walk(PAGES_DIR)) {
  let src = fs.readFileSync(full, 'utf8');
  let changed = false;
  for (const rule of RULES) {
    src = src.replace(rule.re, (m, ...args) => {
      const matchStr = m;
      const repl = rule.to(m, ...args);
      ruleCounts[rule.name] = (ruleCounts[rule.name] || 0) + 1;
      if (DRY) {
        (samples[rule.name] = samples[rule.name] || new Set()).add(`"${matchStr}"  =>  "${repl}"`);
      }
      changed = true;
      return repl;
    });
  }
  if (changed) {
    filesChanged += 1;
    if (!DRY) fs.writeFileSync(full, src, 'utf8');
  }
}

console.log(`\n${DRY ? '[DRY RUN] ' : ''}Visible enrollment-number fix`);
console.log(`Files ${DRY ? 'that would change' : 'changed'}: ${filesChanged}`);
for (const r of RULES) console.log(`  ${r.name.padEnd(18)} ${ruleCounts[r.name] || 0} replacements`);
if (DRY) {
  for (const r of RULES) {
    console.log(`\n── ${r.name} — unique transformations (max 10) ──`);
    [...(samples[r.name] || [])].slice(0, 10).forEach((s) => console.log('  ' + s));
  }
}
