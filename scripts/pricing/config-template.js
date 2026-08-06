/**
 * The single renderer for pricing/pricing.config.jsonc.
 *
 * Both the repo's committed config and the local price-editor page write the
 * file through this template, so the comments that explain the file to the
 * owner can never drift from the numbers or get destroyed by a save.
 *
 * The worldwide/PPP layer was REMOVED at the owner's request on 2026-08-01:
 * pricing is deliberately flat again — one USD price list for everyone
 * outside India, rupees inside India.
 */

'use strict';

/** The editable numbers, with their meaning. null = not sold. */
const FIELDS = [
    ['coding.india.group', 'India coding — Group'],
    ['coding.india.miniBatch', 'India coding — Mini Batch'],
    ['coding.india.personal', 'India coding — 1-on-1'],
    ['maths.india.group', 'India maths — Group'],
    ['maths.india.miniBatch', 'India maths — Mini Batch'],
    ['maths.india.personal', 'India maths — 1-on-1'],
    ['agents.india.group', 'Premium agents (Codex/Claude, Copilot Studio) — Group (India)'],
    ['agents.india.miniBatch', 'Premium agents (Codex/Claude, Copilot Studio) — Mini Batch (India)'],
    ['agents.india.personal', 'Premium agents (Codex/Claude, Copilot Studio) — 1-on-1 (India)'],
    ['school.india.group', 'School bootcamp — Group (India)'],
    ['school.india.personal', 'School bootcamp — 1-on-1 (India)'],
    ['camps.india.oneTime', 'Holiday camp — one payment (India)'],
    ['intl.group', 'OUTSIDE India — Group (USD, all courses)'],
    ['intl.personal', 'OUTSIDE India — 1-on-1 (USD, all courses)'],
    ['camps.intl.oneTime', 'Holiday camp — one payment (USD)']
];

function num(v) {
    return (v === null || v === undefined) ? 'null' : String(v);
}

/**
 * Render the complete config file text from a flat values object keyed by the
 * FIELDS ids above.
 */
function render(v) {
    return `// ═══════════════════════════════════════════════════════════════════════════
//  MODERN AGE CODERS — THE ONLY FILE YOU EDIT TO CHANGE A PRICE
// ═══════════════════════════════════════════════════════════════════════════
//
//  Easiest way: run  npm run dev  and open  http://localhost:3001/__pricing
//  — a form that edits this file and updates every page for you.
//
//  By hand: change a number below, then run
//
//    npm run pricing:check      is my file valid? shows the resulting prices
//    npm run pricing:preview    exactly what would change, changes nothing
//    npm run pricing:apply      write it into every page
//    npm run pricing:verify     prove nothing broke
//
//  PRICING MODEL (deliberately simple, owner's decision 2026-08-01):
//  one USD price list for every country outside India, rupees inside India.
//  Detection is automatic; international visitors are charged in USD.
//
//  Rules: plain digits only (7500, never 7,500 or "7500" or ₹7500).
//  null means "we do not sell this" — the plan is hidden, never given a
//  made-up price. Comments are allowed; trailing commas are not.
//
//  DO NOT hand-edit the structure — the price editor rewrites this file from
//  scripts/pricing/config-template.js. Change VALUES here or use the editor.
// ═══════════════════════════════════════════════════════════════════════════
{
  "version": 2,
  "updated": "${v.updated}",

  // ───────────────────────────────────────────────────────────────────────
  //  THE PRICES  (subject.region.tier — e.g. coding.india.group)
  // ───────────────────────────────────────────────────────────────────────
  "plans": {

    "coding": {
      "india":         { "group": ${num(v['coding.india.group'])}, "miniBatch": ${num(v['coding.india.miniBatch'])}, "personal": ${num(v['coding.india.personal'])} },
      "international": { "group": ${num(v['intl.group'])},  "miniBatch": null, "personal": ${num(v['intl.personal'])} }
    },

    // Maths is listed separately so it can differ from coding — today only
    // the India 1-on-1 rate does.
    "maths": {
      "india":         { "group": ${num(v['maths.india.group'])}, "miniBatch": ${num(v['maths.india.miniBatch'])}, "personal": ${num(v['maths.india.personal'])} },
      "international": { "group": ${num(v['intl.group'])},  "miniBatch": null, "personal": ${num(v['intl.personal'])} }
    },

    // The premium AI agents courses (Codex + Claude Code, and AI Agents with
    // Copilot Studio — see courseOverrides below). 1-on-1 runs at a premium;
    // the Copilot Studio courses are sold 1-on-1 ONLY (their pages hide the
    // Group and Mini Batch plans, so those two numbers never show there).
    "agents": {
      "india":         { "group": ${num(v['agents.india.group'])}, "miniBatch": ${num(v['agents.india.miniBatch'])}, "personal": ${num(v['agents.india.personal'])} },
      "international": { "group": ${num(v['intl.group'])},  "miniBatch": null, "personal": ${num(v['intl.personal'])} }
    },

    // In-school bootcamp programmes (published inside school-page FAQ schema).
    "school": {
      "india":         { "group": ${num(v['school.india.group'])}, "miniBatch": null, "personal": ${num(v['school.india.personal'])} },
      "international": { "group": null, "miniBatch": null, "personal": null }
    },

    // Holiday camps: one payment, not monthly.
    "camps": {
      "india":         { "oneTime": ${num(v['camps.india.oneTime'])} },
      "international": { "oneTime": ${num(v['camps.intl.oneTime'])} }
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  //  COURSES PRICED DIFFERENTLY — add a slug to move a course onto another
  //  price set. pricing:check errors on a slug that matches no course.
  // ───────────────────────────────────────────────────────────────────────
  "courseOverrides": {
    "codex-and-claude-code-ai-coding-agents-course-for-teens":                  "agents",
    "codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals": "agents",
    "ai-agents-with-microsoft-copilot-studio-course-for-teens":                 "agents",
    "ai-agents-with-microsoft-copilot-studio-course-for-college-students":      "agents",
    "ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals":    "agents"
  },

  // ───────────────────────────────────────────────────────────────────────
  //  DISPLAY
  // ───────────────────────────────────────────────────────────────────────
  "display": {
    "chargeCurrencies": { "india": "INR", "international": "USD" },
    "periodLabels": { "monthly": "/month", "oneTime": "" },
    // Used to recalculate the "per class" figures on some pages.
    "classesPerMonth": 8,
    "hoursPerClass": 1
  },

  // ───────────────────────────────────────────────────────────────────────
  //  NUMBERS THE CHECKER MUST IGNORE (lesson content, competitor prices)
  // ───────────────────────────────────────────────────────────────────────
  "allowlist": {
    "files": [
      "src/pages/coding-fee-calculator.html",
      "content/courses/data/*.json",
      "src/pages/*sql*.html",
      "src/pages/*quiz*.html"
    ],
    "patterns": ["z-index", "border-radius", "9999px", "competitor", "exam fee", "prize"]
  }
}
`;
}

/** Pull the flat values object back out of a parsed config. */
function extract(cfg) {
    const g = (s, r, t) => (cfg.plans[s] && cfg.plans[s][r]) ? cfg.plans[s][r][t] : null;
    return {
        updated: cfg.updated,
        'coding.india.group': g('coding', 'india', 'group'),
        'coding.india.miniBatch': g('coding', 'india', 'miniBatch'),
        'coding.india.personal': g('coding', 'india', 'personal'),
        'maths.india.group': g('maths', 'india', 'group'),
        'maths.india.miniBatch': g('maths', 'india', 'miniBatch'),
        'maths.india.personal': g('maths', 'india', 'personal'),
        'agents.india.group': g('agents', 'india', 'group'),
        'agents.india.miniBatch': g('agents', 'india', 'miniBatch'),
        'agents.india.personal': g('agents', 'india', 'personal'),
        'school.india.group': g('school', 'india', 'group'),
        'school.india.personal': g('school', 'india', 'personal'),
        'camps.india.oneTime': g('camps', 'india', 'oneTime'),
        'intl.group': g('coding', 'international', 'group'),
        'intl.personal': g('coding', 'international', 'personal'),
        'camps.intl.oneTime': g('camps', 'international', 'oneTime')
    };
}

module.exports = { render, extract, FIELDS };
