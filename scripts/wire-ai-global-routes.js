#!/usr/bin/env node
/**
 * wire-ai-global-routes.js
 *
 * Wires the global Build-AI cluster pages into every place a page needs to exist
 * or it 404s in production:
 *
 *   1. _redirects            /<slug>      -> /src/pages/<slug>.html  200
 *   2. _redirects            /<slug>.md   -> /src/pages/<slug>.md    200
 *   3. netlify.toml          both of the above as [[redirects]] blocks
 *   4. sitemap.xml           <url> entry
 *   5. sitemap-international.xml  <url> entry
 *
 * Two ordering hazards this script exists to respect:
 *   - _redirects has a `/* -> 404` catch-all. Netlify applies the FIRST matching
 *     rule, so anything written after that line is dead. We insert before it.
 *   - netlify.toml has its own `/*` catch-all block. Same rule, same treatment.
 *
 * Idempotent: running it twice changes nothing the second time.
 *
 * Usage:  node scripts/wire-ai-global-routes.js [slug ...]
 *         node scripts/wire-ai-global-routes.js            (wires every slug in SLUGS)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TODAY = new Date().toISOString().slice(0, 10);

// The full cluster. Pages that do not exist on disk yet are skipped with a note.
const SLUGS = [
  'learn-to-build-ai',
  // exam family
  'ap-computer-science-a-online-classes',
  'ap-computer-science-principles-online-coaching',
  'cambridge-igcse-computer-science-tuition',
  'cambridge-a-level-computer-science-online-classes',
  'uk-gcse-computer-science-tutoring',
  'ib-computer-science-online-tuition',
  'usaco-preparation-online-coaching',
  'ioi-olympiad-informatics-training',
  'python-certification-pcep-pcap-course',
  'canadian-computing-competition-ccc-prep',
  // depth series
  'agentic-coding-classes',
  'model-context-protocol-mcp-course',
  'rag-systems-course',
  'ai-evaluations-course',
  'context-engineering-course',
  'how-to-think-like-a-programmer',
  'how-to-actually-learn-to-code',
  'how-to-read-code',
  'how-to-debug-code',
  'how-llms-actually-work',
  'ai-and-machine-learning-classes-in-oman',
  'ai-and-machine-learning-classes-in-muscat',
  'ai-and-machine-learning-classes-in-kuwait',
  'ai-and-machine-learning-classes-in-kuwait-city',
  'ai-and-machine-learning-classes-in-bahrain',
  'ai-and-machine-learning-classes-in-uae',
  'ai-and-machine-learning-classes-in-saudi-arabia',
  'ai-and-machine-learning-classes-in-qatar',
  'ai-and-machine-learning-classes-in-usa',
  'ai-and-machine-learning-classes-in-uk',
  'ai-and-machine-learning-classes-in-london',
  'ai-and-machine-learning-classes-in-switzerland',
  'ai-and-machine-learning-classes-in-zurich',
  'ai-and-machine-learning-classes-in-singapore',
  'ai-and-machine-learning-classes-in-canada',
  'ai-and-machine-learning-classes-in-australia',
  'ai-and-machine-learning-classes-in-germany',
  'ai-and-machine-learning-classes-in-netherlands',
  'ai-and-machine-learning-classes-in-ireland',
  'ai-and-machine-learning-classes-in-hong-kong',
  'ai-and-machine-learning-classes-in-brunei',
  // Oman AI and Python Academy family
  'ai-and-python-academy-oman',
  'ai-and-python-academy-salalah',
  'ai-and-python-academy-sohar',
  'ai-and-python-academy-nizwa',
  'ai-and-python-academy-for-girls-oman',
  'ai-agents-course-for-students-oman',
  'python-to-ai-roadmap-for-students-oman',
  'build-real-ai-projects-oman',
  'machine-learning-for-school-students-oman',
  'vibe-coding-vs-building-ai-oman',
  // Bahamas family
  'coding-and-ai-classes-in-nassau',
  'coding-and-ai-classes-in-bahamas',
  'coding-classes-for-kids-in-nassau',
  'python-and-ai-track-for-students-bahamas',
  'one-to-one-coding-classes-in-nassau',
  'github-portfolio-for-students-bahamas',
  'coding-competitions-for-students-bahamas',
  'year-round-coding-classes-vs-summer-camps-bahamas',
  'coding-and-ai-alongside-bjc-and-bgcse-bahamas',
  'ai-and-machine-learning-classes-in-bahamas',
  // vibe coding and AI series
  'what-is-vibe-coding',
  'vibe-coding-for-teens',
  'vibe-coding-for-beginners',
  'parents-guide-to-vibe-coding',
  'vibe-coding-projects-for-students',
  'learn-to-code-with-ai',
  'ai-coding-course',
  'build-apps-with-ai',
  'ai-agents-for-teens',
  'ai-literacy-for-students',
  'should-my-child-learn-ai',
  'best-ai-courses-for-teens-2026',
  'ai-projects-for-kids',
  'ai-classes-for-adults',
  'one-on-one-ai-classes',
  'ai-and-python-academy-netherlands',
  'ai-and-python-academy-groningen',
  'ai-and-python-academy-amsterdam',
  'ai-and-python-academy-eindhoven',
  'ai-and-python-academy-the-hague',
  'ai-and-python-academy-utrecht',
  'ai-and-python-academy-rotterdam',
  'coding-classes-for-teens-netherlands',
  'coding-classes-for-kids-netherlands',
  'coding-and-ai-classes-for-adults-netherlands',
  'coding-for-college-students-netherlands',
  'ai-agents-course-for-professionals-netherlands',
  'build-real-ai-projects-netherlands',
  'machine-learning-for-school-students-netherlands',
  'one-to-one-coding-classes-netherlands',
  'python-classes-netherlands',
  'ai-and-python-academy-for-girls-netherlands',
  'ai-agents-course-for-students-netherlands',
  'java-classes-netherlands',
  'coding-alongside-informatica-havo-vwo-netherlands',
  'full-stack-software-development-course-netherlands',
  'data-science-course-netherlands',
  'app-development-course-netherlands',
  'python-to-ai-roadmap-for-students-netherlands',
  'vibe-coding-vs-building-ai-netherlands',
  'best-coding-class-in-the-world',
  'best-online-coding-classes-ireland',
  'understand-the-code-dont-copy-paste-ireland',
  'leaving-cert-computer-science-grinds-online',
  'after-coderdojo-next-step-coding-ireland',
  'ai-and-python-academy-for-girls-ireland',
  'junior-cycle-coding-short-course-help',
  'best-coding-classes-for-kids-ireland',
  'best-coding-classes-for-teens-ireland',
  'transition-year-coding-course-ireland',
  'ai-agents-course-for-students-ireland',
  'online-coding-summer-course-ireland',
  'learn-to-think-not-just-use-ai-tools-ireland',
  'problem-solving-skills-through-coding-ireland',
  'best-coding-classes-for-adults-ireland',
  'coding-for-college-students-ireland',
  'full-stack-software-development-course-ireland',
  'best-python-classes-online-ireland',
  'build-real-ai-projects-ireland',
  'data-science-course-ireland',
  'learn-to-train-ai-not-just-prompt-it-ireland',
  'ai-agents-course-for-professionals-ireland',
  'java-classes-ireland',
  'app-development-course-ireland',
  'best-online-coding-classes-uk',
  'uk-coding-maths-and-ai-competitions-calendar',
  'british-informatics-olympiad-preparation',
  'a-level-computer-science-nea-help',
  '11-plus-maths-tuition-kent',
  'primary-maths-challenge-practice',
  'scottish-mathematical-challenge-practice',
  'bebras-computational-thinking-challenge-practice-uk',
  'oxford-university-computing-challenge-preparation',
  'junior-mathematical-olympiad-preparation',
  'intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation',
  'british-mathematical-olympiad-bmo-preparation',
  'mathematical-olympiad-for-girls-preparation',
  'ukmt-kangaroo-rounds-practice',
  'ukmt-team-maths-challenge-practice',
  'perse-coding-team-challenge-preparation',
  'national-cipher-challenge-preparation',
  'cyberfirst-girls-competition-preparation',
  'astro-pi-mission-zero-and-space-lab-help',
  'uk-olympiad-in-artificial-intelligence-preparation',
  'coolest-projects-uk-project-ideas',
  'big-bang-competition-project-help',
  'first-lego-league-uk-coding-help',
  'sentinus-young-innovators-coding-help',
  'student-hackathons-uk',
  'first-competitions-for-primary-school-children-uk',
  'maths-olympiad-training-uk',
  'best-coding-classes-for-teens-uk',
  'best-coding-classes-for-adults-uk',
  'best-python-classes-online-uk',
  'ai-classes-for-kids-uk',
  'online-coding-tutor-uk',
  'understand-the-code-dont-copy-paste-uk',
  'problem-solving-skills-through-coding-uk',
  'learn-to-think-not-just-use-ai-tools-uk',
  'learn-to-train-ai-not-just-prompt-it-uk',
  'aqa-gcse-computer-science-8525-help',
  'ocr-gcse-computer-science-j277-help',
  'edexcel-gcse-computer-science-1cp2-help',
  'aqa-a-level-computer-science-7517-help',
  'choosing-gcse-computer-science-year-9-options',
  'ocr-a-level-computer-science-h446-help',
  'ks2-coding-lessons-online',
  'ks3-computing-tuition-online',
  'new-computing-gcse-explained',
  't-level-digital-coding-help',
  'national-5-computing-science-help',
  'higher-computing-science-help',
  'advanced-higher-computing-science-project-help',
  'wjec-gcse-computer-science-help-wales',
  'wjec-gcse-digital-technology-help-wales',
  'ccea-gcse-digital-technology-programming-help',
  'ccea-a-level-software-systems-development-help',
  'multiplication-tables-check-year-4-practice',
  'national-5-maths-tuition-online',
  'higher-maths-tuition-online',
  'advanced-higher-maths-tuition-online',
  'gcse-maths-and-numeracy-wales-help',
  'ccea-gcse-maths-help',
  'transfer-test-maths-practice-northern-ireland',
  'after-code-club-next-step-coding-uk',
  'after-microbit-next-step-python-uk',
  'raspberry-pi-coding-projects-uk',
  'coding-for-home-educated-children-uk',
  'online-coding-summer-course-uk',
  'learn-to-code-over-50-uk',
  'ai-agents-course-for-professionals-uk',
  'ai-agents-course-for-students-uk',
  'coding-for-university-students-uk',
  'coding-before-a-degree-apprenticeship-uk',
  'cyber-security-course-for-teens-uk',
  'java-classes-uk',
  'app-development-course-uk',
  'full-stack-software-development-course-uk',
  'data-science-course-uk',
  'build-real-ai-projects-uk',
  'ai-and-python-academy-for-girls-uk',
  '11-plus-maths-tuition-buckinghamshire',
  '11-plus-maths-tuition-birmingham',
  '11-plus-maths-tuition-trafford',
  '11-plus-maths-tuition-sutton',
  '11-plus-maths-tuition-bexley',
  '11-plus-maths-tuition-kingston',
  '11-plus-maths-tuition-barnet',
  '11-plus-maths-tuition-enfield',
  '11-plus-maths-tuition-redbridge',
  '11-plus-maths-tuition-slough',
  '11-plus-maths-tuition-reading',
  '11-plus-maths-tuition-southend',
  '11-plus-maths-tuition-essex',
  '11-plus-maths-tuition-wirral',
  '11-plus-maths-tuition-gloucestershire',
  '11-plus-maths-tuition-warwickshire',
  '11-plus-maths-tuition-medway',
  '11-plus-maths-tuition-plymouth',
  '11-plus-maths-tuition-torbay',
  '11-plus-maths-tuition-bournemouth-christchurch-and-poole',
  '11-plus-maths-tuition-calderdale',
  '11-plus-maths-tuition-hertfordshire',
  '11-plus-maths-tuition-wolverhampton-and-walsall',
  'maths-tuition-in-manchester',
  'maths-tuition-in-birmingham',
  'maths-tuition-in-milton-keynes',
  'maths-tuition-in-london',
  'maths-tuition-in-leicester',
  'maths-tuition-in-reading',
  'maths-tuition-in-cardiff',
  'maths-tuition-in-coventry',
  'maths-tuition-in-slough',
  'maths-tuition-in-nottingham',
  'maths-tuition-in-bristol',
  'maths-tuition-in-luton',
  'maths-tuition-in-liverpool',
  'maths-tuition-in-sheffield',
  'maths-tuition-in-glasgow',
  'maths-tuition-in-leeds',
  'maths-tuition-in-oxford',
  'maths-tuition-in-edinburgh',
  'maths-tuition-in-cambridge',
  'maths-tuition-in-belfast',
  'game-development-for-kids-australia',
  'online-coding-classes-for-kids-australia',
  'australian-coding-maths-and-ai-competitions-calendar',
  'naplan-numeracy-practice-online',
  'hsc-software-engineering-help',
  'kids-coding-languages-australia',
  'coding-games-for-kids-australia',
  'coding-for-year-7-australia',
  'coding-classes-for-5-and-6-year-olds-australia',
  'game-programming-course-australia',
  'coding-classes-for-7-and-8-year-olds-australia',
  'free-coding-classes-for-kids-australia-what-you-get',
  'video-game-design-for-kids-australia',
  'coding-classes-for-9-and-10-year-olds-australia',
  'roblox-coding-classes-australia',
  'coding-classes-near-me-australia-online-or-local',
  'coding-classes-for-11-and-12-year-olds-australia',
  'learn-to-think-not-just-use-ai-tools-australia',
  'after-scratch-next-step-python-australia',
  'minecraft-coding-classes-australia',
  'understand-the-code-dont-copy-paste-australia',
  'coding-for-homeschool-kids-australia',
  'learn-to-train-ai-not-just-prompt-it-australia',
  'python-ai-course-for-kids-australia',
  'problem-solving-through-coding-australia',
  'ai-courses-for-kids-australia',
  'online-coding-tutor-australia',
  'ai-classes-for-teens-australia',
  'one-on-one-coding-tutor-australia',
  'school-holiday-coding-course-australia',
  'naplan-year-3-numeracy-practice',
  'hsc-maths-advanced-tutoring',
  'naplan-year-5-numeracy-practice',
  'hsc-maths-extension-1-tutoring',
  'vce-algorithmics-hess-help',
  'naplan-year-7-numeracy-practice',
  'hsc-maths-extension-2-tutoring',
  'naplan-year-9-numeracy-practice',
  'hsc-maths-standard-tutoring',
  'nsw-selective-test-mathematical-reasoning-practice',
  'preliminary-hsc-maths-year-11-help',
  'nsw-selective-test-thinking-skills-practice',
  'hsc-enterprise-computing-help',
  'vce-applied-computing-software-development-help',
  'vce-applied-computing-data-analytics-help',
  'vce-maths-methods-tutoring',
  'vce-specialist-maths-tutoring',
  'vce-general-maths-tutoring',
  'vce-foundation-maths-help',
  'oc-test-maths-practice-nsw',
  'victorian-selective-entry-exam-maths-practice',
  'software-engineering-major-project-help-hsc',
  'queensland-academies-entry-maths-practice',
  'atar-explained-for-coding-students',
  'wa-gate-aset-maths-practice',
  'choosing-year-11-computing-subjects-australia',
  'year-10-maths-methods-preparation',
  'sa-ignite-entry-maths-practice',
  'year-12-maths-holiday-revision-australia',
  'australian-curriculum-digital-technologies-help',
  'sace-digital-technologies-help',
  'sace-mathematical-methods-tutoring',
  'icas-digital-technologies-practice',
  'digital-technologies-years-7-to-10-coding',
  'robocup-junior-australia-coding-help',
  'digital-technologies-primary-coding-help',
  'sace-specialist-mathematics-tutoring',
  'first-lego-league-australia-coding-help',
  'australian-curriculum-maths-year-7-to-10-help',
  'young-ict-explorers-project-help',
  'tasc-computer-science-help',
  'australian-student-hackathons',
  'bebras-challenge-australia-practice',
  'tasc-mathematics-methods-tutoring',
  'girls-programming-network-next-step-australia',
  'australian-informatics-olympiad-preparation',
  'australian-mathematical-olympiad-preparation',
  'aio-to-ioi-pathway-australia',
  'australian-mathematics-competition-practice-by-year',
  'australian-coding-competitions-for-primary-kids',
  'maths-challenge-for-young-australians-practice',
  'australian-maths-competitions-for-primary-kids',
  'apsmo-maths-olympiad-practice',
  'online-vs-in-person-coding-classes-australia',
  'coding-classes-vs-coding-camps-australia',
  'icas-maths-practice-online',
  'tutor-vs-tutoring-centre-maths-australia',
  'coding-class-or-maths-tutor-first-australia',
  'online-coding-classes-australia-compared',
  'after-school-coding-club-vs-online-class-australia',
  'java-classes-online-australia',
  'app-development-course-australia',
  'coding-for-university-students-australia',
  'learn-to-code-over-50-australia',
  'coding-classes-for-adults-australia',
  'coding-classes-for-teens-australia',
  'ai-agents-course-for-students-australia',
  'ai-agents-course-for-professionals-australia',
  'build-real-ai-projects-australia',
  'software-development-course-australia',
  'python-classes-online-australia',
  'web-development-course-for-teens-australia',
  'data-science-course-australia',
  'cyber-security-course-for-teens-australia',
  'ai-and-python-academy-for-girls-australia',
  'competitive-programming-australia',
  'coding-for-career-changers-australia',
  'javascript-classes-online-australia',
  'c-plus-plus-classes-online-australia',
  'maths-tutor-sydney',
  'maths-tutor-perth-wa',
  'maths-tutor-hobart',
  'maths-tutor-melbourne',
  'maths-tutor-parramatta',
  'maths-tutor-adelaide',
  'maths-tutor-glen-waverley',
  'maths-tutor-canberra',
  'maths-tutor-box-hill',
  'maths-tutor-sunnybank',
  'maths-tutor-brisbane',
  'maths-tutor-chatswood',
  'maths-tutor-gold-coast',
  'maths-tutor-newcastle-nsw',
  'how-to-make-a-roblox-game',
  'congressional-app-challenge-guide',
  'computer-science-summer-programs-for-high-school-students',
  'coding-summer-camp-for-middle-schoolers',
  'game-design-summer-camp-for-teens',
  'free-coding-programs-for-high-school-students',
  'computer-science-internships-for-high-school-students',
  'homeschool-computer-science-high-school-credit',
  'coding-bootcamp-for-teens',
  'python-indentation-error-explained',
  'python-turtle-not-working',
  'jupyter-notebook-errors-for-students',
  'vs-code-setup-for-students',
  'google-colab-help-for-students',
  'github-classroom-help-for-students',
  'coding-classes-for-elementary-students',
  'coding-classes-for-middle-school-students',
  'coding-classes-for-high-school-students',
  'coding-milestones-by-age',
  'ai-literacy-for-elementary-students',
  'lua-for-kids',
  'how-to-make-a-video-game-for-kids',
  'godot-for-kids-and-teens',
  'unity-for-teens',
  'game-design-classes-for-teens',
  'video-game-coding-classes-for-kids',
  'learn-to-code-minecraft-mods',
  'python-games-for-kids',
  'how-to-make-a-3d-game-for-kids',
  'roblox-studio-errors-fixed',
  'makecode-arcade-help-for-students',
  'codehs-help-for-students',
  'code-org-app-lab-help',
];

const BASE = 'https://learn.modernagecoders.com';

function read(f) { return fs.readFileSync(path.join(ROOT, f), 'utf8'); }
function write(f, s) { fs.writeFileSync(path.join(ROOT, f), s, 'utf8'); }
function exists(f) { return fs.existsSync(path.join(ROOT, f)); }

const report = { wired: [], skipped: [], missing: [] };

// ---------------------------------------------------------------- _redirects
function wireRedirects(slugs) {
  const file = '_redirects';
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  // Netlify applies the first matching rule; everything after `/*` is unreachable.
  let catchAll = lines.findIndex(l => /^\/\*\s/.test(l));
  if (catchAll === -1) catchAll = lines.length;

  const additions = [];
  for (const slug of slugs) {
    const html = `/${slug} /src/pages/${slug}.html 200`;
    const md = `/${slug}.md /src/pages/${slug}.md 200`;
    if (!lines.some(l => l.trim() === html)) additions.push(html);
    if (!lines.some(l => l.trim() === md)) additions.push(md);
  }
  if (!additions.length) return 0;

  const block = ['', '# Global Build-AI cluster (ai-global.css). Inserted before the /* catch-all.', ...additions];
  lines.splice(catchAll, 0, ...block);
  write(file, lines.join(eol));
  return additions.length;
}

// -------------------------------------------------------------- netlify.toml
function wireNetlifyToml(slugs) {
  const file = 'netlify.toml';
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  // Find the [[redirects]] block whose `from` is the "/*" catch-all, then walk
  // back to that block's opening header so we insert above the whole block.
  let fromIdx = lines.findIndex(l => /^\s*from\s*=\s*"\/\*"\s*$/.test(l));
  let insertAt = lines.length;
  if (fromIdx !== -1) {
    for (let i = fromIdx; i >= 0; i--) {
      if (/^\s*\[\[redirects\]\]/.test(lines[i])) { insertAt = i; break; }
    }
  }

  const additions = [];
  for (const slug of slugs) {
    if (!new RegExp(`from\\s*=\\s*"/${slug}"`).test(src)) {
      additions.push(
        '[[redirects]]',
        `  from = "/${slug}"`,
        `  to = "/src/pages/${slug}.html"`,
        '  status = 200',
        ''
      );
    }
    if (!new RegExp(`from\\s*=\\s*"/${slug}\\.md"`).test(src)) {
      additions.push(
        '[[redirects]]',
        `  from = "/${slug}.md"`,
        `  to = "/src/pages/${slug}.md"`,
        '  status = 200',
        ''
      );
    }
  }
  if (!additions.length) return 0;

  const block = ['# Global Build-AI cluster (ai-global.css). Must precede the /* catch-all.', '', ...additions];
  lines.splice(insertAt, 0, ...block);
  write(file, lines.join(eol));
  return additions.filter(l => l === '[[redirects]]').length;
}

// ------------------------------------------------------------------ sitemaps
function wireSitemap(file, slugs, priority) {
  if (!exists(file)) return 0;
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  let added = 0;
  const entries = [];

  for (const slug of slugs) {
    const loc = `${BASE}/${slug}`;
    if (src.includes(`<loc>${loc}</loc>`)) continue;
    entries.push(
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${TODAY}</lastmod>`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${priority}</priority>`,
      '  </url>'
    );
    added++;
  }
  if (!added) return 0;

  src = src.replace(/<\/urlset>\s*$/, entries.join(eol) + eol + '</urlset>' + eol);
  write(file, src);
  return added;
}

// ------------------------------------------------------------------ llms.txt
// AI answer engines read llms.txt. A page that is routed and in the sitemap but
// absent here is invisible to exactly the audience this cluster targets.
const LLMS_HEADING = '## Build AI, Not Just Use It (AI & machine learning by market)';

const LLMS_LABELS = {
  'learn-to-build-ai': 'Learn to Build AI (cluster hub)',
  'ap-computer-science-a-online-classes': 'AP Computer Science A',
  'ap-computer-science-principles-online-coaching': 'AP Computer Science Principles',
  'cambridge-igcse-computer-science-tuition': 'Cambridge IGCSE Computer Science 0478',
  'cambridge-a-level-computer-science-online-classes': 'Cambridge AS and A Level Computer Science 9618',
  'uk-gcse-computer-science-tutoring': 'UK GCSE Computer Science',
  'ib-computer-science-online-tuition': 'IB Diploma Computer Science',
  'usaco-preparation-online-coaching': 'USACO preparation',
  'ioi-olympiad-informatics-training': 'IOI and informatics olympiad training',
  'python-certification-pcep-pcap-course': 'Python Institute PCEP and PCAP',
  'canadian-computing-competition-ccc-prep': 'Canadian Computing Competition',
  'agentic-coding-classes': 'Agentic Coding Classes',
  'model-context-protocol-mcp-course': 'Model Context Protocol (MCP) Course',
  'rag-systems-course': 'RAG Systems Course',
  'ai-evaluations-course': 'AI Evaluations Course',
  'context-engineering-course': 'Context Engineering Course',
  'how-to-think-like-a-programmer': 'How to Think Like a Programmer',
  'how-to-actually-learn-to-code': 'How to Actually Learn to Code',
  'how-to-read-code': 'How to Read Code',
  'how-to-debug-code': 'How to Debug Code',
  'how-llms-actually-work': 'How LLMs Actually Work',
  'ai-and-machine-learning-classes-in-oman': 'Oman',
  'ai-and-machine-learning-classes-in-muscat': 'Muscat',
  'ai-and-machine-learning-classes-in-kuwait': 'Kuwait',
  'ai-and-machine-learning-classes-in-kuwait-city': 'Kuwait City',
  'ai-and-machine-learning-classes-in-bahrain': 'Bahrain',
  'ai-and-machine-learning-classes-in-uae': 'United Arab Emirates',
  'ai-and-machine-learning-classes-in-saudi-arabia': 'Saudi Arabia',
  'ai-and-machine-learning-classes-in-qatar': 'Qatar',
  'ai-and-machine-learning-classes-in-usa': 'United States',
  'ai-and-machine-learning-classes-in-uk': 'United Kingdom',
  'ai-and-machine-learning-classes-in-london': 'London',
  'ai-and-machine-learning-classes-in-switzerland': 'Switzerland',
  'ai-and-machine-learning-classes-in-zurich': 'Zurich',
  'ai-and-machine-learning-classes-in-singapore': 'Singapore',
  'ai-and-machine-learning-classes-in-canada': 'Canada',
  'ai-and-machine-learning-classes-in-australia': 'Australia',
  'ai-and-machine-learning-classes-in-germany': 'Germany',
  'ai-and-machine-learning-classes-in-netherlands': 'Netherlands',
  'ai-and-machine-learning-classes-in-ireland': 'Ireland',
  'ai-and-machine-learning-classes-in-hong-kong': 'Hong Kong',
  'ai-and-machine-learning-classes-in-brunei': 'Brunei',
  'ai-and-python-academy-oman': 'AI and Python Academy, Oman',
  'ai-and-python-academy-salalah': 'AI and Python Academy, Salalah (Dhofar)',
  'ai-and-python-academy-sohar': 'AI and Python Academy, Sohar (North Al Batinah)',
  'ai-and-python-academy-nizwa': 'AI and Python Academy, Nizwa (Ad Dakhiliyah)',
  'ai-and-python-academy-for-girls-oman': 'AI and Python Academy for girls, Oman',
  'ai-agents-course-for-students-oman': 'AI agents course for students, Oman',
  'python-to-ai-roadmap-for-students-oman': 'Python to AI roadmap for students, Oman',
  'build-real-ai-projects-oman': 'Build real AI projects, Oman',
  'machine-learning-for-school-students-oman': 'Machine learning for school students, Oman',
  'vibe-coding-vs-building-ai-oman': 'Vibe coding vs building AI, Oman',
  'coding-and-ai-classes-in-nassau': 'Coding and AI classes in Nassau, Bahamas',
  'coding-and-ai-classes-in-bahamas': 'Coding and AI classes in The Bahamas',
  'coding-classes-for-kids-in-nassau': 'Coding classes for kids in Nassau',
  'python-and-ai-track-for-students-bahamas': 'The 12-month Python and AI track, Bahamas',
  'one-to-one-coding-classes-in-nassau': 'One to one coding classes in Nassau',
  'github-portfolio-for-students-bahamas': 'GitHub portfolios for Bahamian students',
  'coding-competitions-for-students-bahamas': 'Coding competitions for students, Bahamas',
  'year-round-coding-classes-vs-summer-camps-bahamas': 'Year-round classes vs summer camps, Bahamas',
  'coding-and-ai-alongside-bjc-and-bgcse-bahamas': 'Coding and AI alongside BJC and BGCSE',
  'ai-and-machine-learning-classes-in-bahamas': 'AI and machine learning classes in The Bahamas',
  'what-is-vibe-coding': 'What Is Vibe Coding',
  'vibe-coding-for-teens': 'Vibe Coding for Teens',
  'vibe-coding-for-beginners': 'Vibe Coding for Beginners',
  'parents-guide-to-vibe-coding': 'A Parents Guide to Vibe Coding',
  'vibe-coding-projects-for-students': 'Vibe Coding Projects for Students',
  'learn-to-code-with-ai': 'Learn to Code with AI',
  'ai-coding-course': 'AI Coding Course',
  'build-apps-with-ai': 'Build Apps with AI',
  'ai-agents-for-teens': 'AI Agents for Teens',
  'ai-literacy-for-students': 'AI Literacy for Students',
  'should-my-child-learn-ai': 'Should My Child Learn AI',
  'best-ai-courses-for-teens-2026': 'Best AI Courses for Teens 2026',
  'ai-projects-for-kids': 'AI Projects for Kids',
  'ai-classes-for-adults': 'AI Classes for Adults',
  'one-on-one-ai-classes': 'One to One AI Classes',
  'ai-and-python-academy-netherlands': 'AI and Python Academy, Netherlands',
  'ai-and-python-academy-groningen': 'AI and Python Academy, Groningen',
  'ai-and-python-academy-amsterdam': 'AI and Python Academy, Amsterdam',
  'ai-and-python-academy-eindhoven': 'AI and Python Academy, Eindhoven',
  'ai-and-python-academy-the-hague': 'AI and Python Academy, The Hague',
  'ai-and-python-academy-utrecht': 'AI and Python Academy, Utrecht',
  'ai-and-python-academy-rotterdam': 'AI and Python Academy, Rotterdam',
  'coding-classes-for-teens-netherlands': 'Coding classes for teens, Netherlands',
  'coding-classes-for-kids-netherlands': 'Coding classes for kids, Netherlands',
  'coding-and-ai-classes-for-adults-netherlands': 'Coding and AI classes for adults, Netherlands',
  'coding-for-college-students-netherlands': 'Coding for college students, Netherlands',
  'ai-agents-course-for-professionals-netherlands': 'AI agents course for professionals, Netherlands',
  'build-real-ai-projects-netherlands': 'Build real AI projects, Netherlands',
  'machine-learning-for-school-students-netherlands': 'Machine learning for school students, Netherlands',
  'one-to-one-coding-classes-netherlands': 'One-to-one coding classes, Netherlands',
  'python-classes-netherlands': 'Python classes, Netherlands',
  'ai-and-python-academy-for-girls-netherlands': 'AI and Python Academy for girls, Netherlands',
  'ai-agents-course-for-students-netherlands': 'AI agents course for students, Netherlands',
  'java-classes-netherlands': 'Java classes, Netherlands',
  'coding-alongside-informatica-havo-vwo-netherlands': 'Coding alongside informatica, havo and vwo',
  'full-stack-software-development-course-netherlands': 'Full stack software development course, Netherlands',
  'data-science-course-netherlands': 'Data science course, Netherlands',
  'app-development-course-netherlands': 'App development course, Netherlands',
  'python-to-ai-roadmap-for-students-netherlands': 'Python to AI roadmap for students, Netherlands',
  'vibe-coding-vs-building-ai-netherlands': 'Vibe coding vs building AI, Netherlands',
  'best-coding-class-in-the-world': 'Best coding class in the world: eight tests',
  'best-online-coding-classes-ireland': 'Best online coding classes in Ireland',
  'understand-the-code-dont-copy-paste-ireland': 'Understand the code, do not copy-paste, Ireland',
  'leaving-cert-computer-science-grinds-online': 'Leaving Cert Computer Science grinds online',
  'after-coderdojo-next-step-coding-ireland': 'After CoderDojo: the next step in coding, Ireland',
  'ai-and-python-academy-for-girls-ireland': 'AI and Python academy for girls, Ireland',
  'junior-cycle-coding-short-course-help': 'Junior Cycle Coding short course help',
  'best-coding-classes-for-kids-ireland': 'Best coding classes for kids in Ireland',
  'best-coding-classes-for-teens-ireland': 'Best coding classes for teens in Ireland',
  'transition-year-coding-course-ireland': 'Transition Year coding course, Ireland',
  'ai-agents-course-for-students-ireland': 'AI agents course for students, Ireland',
  'online-coding-summer-course-ireland': 'Online coding summer course, Ireland',
  'learn-to-think-not-just-use-ai-tools-ireland': 'Learn to think, not just use AI tools, Ireland',
  'problem-solving-skills-through-coding-ireland': 'Problem solving skills through coding, Ireland',
  'best-coding-classes-for-adults-ireland': 'Best coding classes for adults in Ireland',
  'coding-for-college-students-ireland': 'Coding for college students, Ireland',
  'full-stack-software-development-course-ireland': 'Full stack software development course, Ireland',
  'best-python-classes-online-ireland': 'Best Python classes online, Ireland',
  'build-real-ai-projects-ireland': 'Build real AI projects, Ireland',
  'data-science-course-ireland': 'Data science course, Ireland',
  'learn-to-train-ai-not-just-prompt-it-ireland': 'Learn to train AI, not just prompt it, Ireland',
  'ai-agents-course-for-professionals-ireland': 'AI agents course for professionals, Ireland',
  'java-classes-ireland': 'Java classes, Ireland',
  'app-development-course-ireland': 'App development course, Ireland',
  'best-online-coding-classes-uk': 'Best online coding classes in the UK',
  'uk-coding-maths-and-ai-competitions-calendar': 'UK coding, maths and AI competitions calendar',
  'british-informatics-olympiad-preparation': 'British Informatics Olympiad preparation',
  'a-level-computer-science-nea-help': 'A-level Computer Science coursework help',
  '11-plus-maths-tuition-kent': '11 plus maths tuition in Kent',
  'primary-maths-challenge-practice': 'Primary Maths Challenge practice',
  'scottish-mathematical-challenge-practice': 'Scottish Mathematical Challenge practice',
  'bebras-computational-thinking-challenge-practice-uk': 'UK Bebras Challenge practice',
  'oxford-university-computing-challenge-preparation': 'Oxford University Computing Challenge preparation',
  'junior-mathematical-olympiad-preparation': 'Junior Mathematical Olympiad preparation',
  'intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation': 'Cayley, Hamilton and Maclaurin olympiad preparation',
  'british-mathematical-olympiad-bmo-preparation': 'British Mathematical Olympiad preparation',
  'mathematical-olympiad-for-girls-preparation': 'Mathematical Olympiad for Girls preparation',
  'ukmt-kangaroo-rounds-practice': 'UKMT Kangaroo rounds practice',
  'ukmt-team-maths-challenge-practice': 'UKMT Team Maths Challenge practice',
  'perse-coding-team-challenge-preparation': 'Perse Coding Team Challenge preparation',
  'national-cipher-challenge-preparation': 'National Cipher Challenge preparation',
  'cyberfirst-girls-competition-preparation': 'CyberFirst Girls Competition preparation',
  'astro-pi-mission-zero-and-space-lab-help': 'Astro Pi Mission Zero and Space Lab help',
  'uk-olympiad-in-artificial-intelligence-preparation': 'UK Olympiad in AI preparation',
  'coolest-projects-uk-project-ideas': 'Coolest Projects UK project ideas',
  'big-bang-competition-project-help': 'Big Bang Competition project help',
  'first-lego-league-uk-coding-help': 'FIRST LEGO League UK coding help',
  'sentinus-young-innovators-coding-help': 'Sentinus Young Innovators coding help',
  'student-hackathons-uk': 'Student hackathons in the UK',
  'first-competitions-for-primary-school-children-uk': 'First competitions for primary school children',
  'maths-olympiad-training-uk': 'Maths olympiad training in the UK',
  'best-coding-classes-for-teens-uk': 'Best coding classes for teens in the UK',
  'best-coding-classes-for-adults-uk': 'Best coding classes for adults in the UK',
  'best-python-classes-online-uk': 'Best Python classes online in the UK',
  'ai-classes-for-kids-uk': 'AI classes for kids in the UK',
  'online-coding-tutor-uk': 'Online coding tutor in the UK',
  'understand-the-code-dont-copy-paste-uk': 'Understand the code, do not copy-paste it',
  'problem-solving-skills-through-coding-uk': 'Problem-solving skills through coding',
  'learn-to-think-not-just-use-ai-tools-uk': 'Learn to think, not just use AI tools',
  'learn-to-train-ai-not-just-prompt-it-uk': 'Learn to train AI, not just prompt it',
  'aqa-gcse-computer-science-8525-help': 'AQA GCSE Computer Science 8525 help',
  'ocr-gcse-computer-science-j277-help': 'OCR GCSE Computer Science J277 help',
  'edexcel-gcse-computer-science-1cp2-help': 'Edexcel GCSE Computer Science 1CP2 help',
  'aqa-a-level-computer-science-7517-help': 'AQA A-level Computer Science 7517 help',
  'choosing-gcse-computer-science-year-9-options': 'Choosing GCSE Computer Science at Year 9 options',
  'ocr-a-level-computer-science-h446-help': 'OCR A-level Computer Science H446 help',
  'ks2-coding-lessons-online': 'Key Stage 2 coding lessons online',
  'ks3-computing-tuition-online': 'Key Stage 3 computing tuition online',
  'new-computing-gcse-explained': 'The new Computing GCSE explained',
  't-level-digital-coding-help': 'T Level digital coding help',
  'national-5-computing-science-help': 'National 5 Computing Science help',
  'higher-computing-science-help': 'Higher Computing Science help',
  'advanced-higher-computing-science-project-help': 'Advanced Higher Computing Science project help',
  'wjec-gcse-computer-science-help-wales': 'WJEC GCSE Computer Science help',
  'wjec-gcse-digital-technology-help-wales': 'WJEC GCSE Digital Technology help',
  'ccea-gcse-digital-technology-programming-help': 'CCEA GCSE Digital Technology programming help',
  'ccea-a-level-software-systems-development-help': 'CCEA A level Software Systems Development help',
  'multiplication-tables-check-year-4-practice': 'Multiplication tables check practice',
  'national-5-maths-tuition-online': 'National 5 Maths tuition online',
  'higher-maths-tuition-online': 'Higher Maths tuition online',
  'advanced-higher-maths-tuition-online': 'Advanced Higher Maths tuition online',
  'gcse-maths-and-numeracy-wales-help': 'GCSE Mathematics and Numeracy help, Wales',
  'ccea-gcse-maths-help': 'CCEA GCSE Maths help',
  'transfer-test-maths-practice-northern-ireland': 'Transfer test maths practice, Northern Ireland',
  'after-code-club-next-step-coding-uk': 'After Code Club: the next step',
  'after-microbit-next-step-python-uk': 'After the micro:bit: the step to Python',
  'raspberry-pi-coding-projects-uk': 'Raspberry Pi coding projects',
  'coding-for-home-educated-children-uk': 'Coding for home-educated children',
  'online-coding-summer-course-uk': 'Online coding summer course, UK',
  'learn-to-code-over-50-uk': 'Learn to code over 50',
  'ai-agents-course-for-professionals-uk': 'AI agents course for professionals, UK',
  'ai-agents-course-for-students-uk': 'AI agents course for students, UK',
  'coding-for-university-students-uk': 'Coding for university students, UK',
  'coding-before-a-degree-apprenticeship-uk': 'Coding before a degree apprenticeship',
  'cyber-security-course-for-teens-uk': 'Cyber security course for teens, UK',
  'java-classes-uk': 'Java classes, UK',
  'app-development-course-uk': 'App development course, UK',
  'full-stack-software-development-course-uk': 'Full stack software development course, UK',
  'data-science-course-uk': 'Data science course, UK',
  'build-real-ai-projects-uk': 'Build real AI projects, UK',
  'ai-and-python-academy-for-girls-uk': 'AI and Python academy for girls, UK',
  '11-plus-maths-tuition-buckinghamshire': '11 plus maths tuition in Buckinghamshire',
  '11-plus-maths-tuition-birmingham': '11 plus maths tuition in Birmingham',
  '11-plus-maths-tuition-trafford': '11 plus maths tuition in Trafford',
  '11-plus-maths-tuition-sutton': '11 plus maths tuition in Sutton',
  '11-plus-maths-tuition-bexley': '11 plus maths tuition in Bexley',
  '11-plus-maths-tuition-kingston': '11 plus maths tuition in Kingston upon Thames',
  '11-plus-maths-tuition-barnet': '11 plus maths tuition in Barnet',
  '11-plus-maths-tuition-enfield': '11 plus maths tuition in Enfield',
  '11-plus-maths-tuition-redbridge': '11 plus maths tuition in Redbridge',
  '11-plus-maths-tuition-slough': '11 plus maths tuition in Slough',
  '11-plus-maths-tuition-reading': '11 plus maths tuition in Reading',
  '11-plus-maths-tuition-southend': '11 plus maths tuition in Southend-on-Sea',
  '11-plus-maths-tuition-essex': '11 plus maths tuition in Essex',
  '11-plus-maths-tuition-wirral': '11 plus maths tuition on the Wirral',
  '11-plus-maths-tuition-gloucestershire': '11 plus maths tuition in Gloucestershire',
  '11-plus-maths-tuition-warwickshire': '11 plus maths tuition in Warwickshire',
  '11-plus-maths-tuition-medway': '11 plus maths tuition in Medway',
  '11-plus-maths-tuition-plymouth': '11 plus maths tuition in Plymouth',
  '11-plus-maths-tuition-torbay': '11 plus maths tuition in Torbay',
  '11-plus-maths-tuition-bournemouth-christchurch-and-poole': '11 plus maths tuition in Bournemouth, Christchurch and Poole',
  '11-plus-maths-tuition-calderdale': '11 plus maths tuition in Calderdale',
  '11-plus-maths-tuition-hertfordshire': '11 plus maths tuition in Hertfordshire',
  '11-plus-maths-tuition-wolverhampton-and-walsall': '11 plus maths tuition in Wolverhampton and Walsall',
  'maths-tuition-in-manchester': 'Maths tuition in Manchester',
  'maths-tuition-in-birmingham': 'Maths tuition in Birmingham',
  'maths-tuition-in-milton-keynes': 'Maths tuition in Milton Keynes',
  'maths-tuition-in-london': 'Maths tuition in London',
  'maths-tuition-in-leicester': 'Maths tuition in Leicester',
  'maths-tuition-in-reading': 'Maths tuition in Reading',
  'maths-tuition-in-cardiff': 'Maths tuition in Cardiff',
  'maths-tuition-in-coventry': 'Maths tuition in Coventry',
  'maths-tuition-in-slough': 'Maths tuition in Slough',
  'maths-tuition-in-nottingham': 'Maths tuition in Nottingham',
  'maths-tuition-in-bristol': 'Maths tuition in Bristol',
  'maths-tuition-in-luton': 'Maths tuition in Luton',
  'maths-tuition-in-liverpool': 'Maths tuition in Liverpool',
  'maths-tuition-in-sheffield': 'Maths tuition in Sheffield',
  'maths-tuition-in-glasgow': 'Maths tuition in Glasgow',
  'maths-tuition-in-leeds': 'Maths tuition in Leeds',
  'maths-tuition-in-oxford': 'Maths tuition in Oxford',
  'maths-tuition-in-edinburgh': 'Maths tuition in Edinburgh',
  'maths-tuition-in-cambridge': 'Maths tuition in Cambridge',
  'maths-tuition-in-belfast': 'Maths tuition in Belfast',
  'game-development-for-kids-australia': 'Game development for kids, Australia',
  'online-coding-classes-for-kids-australia': 'Online coding classes for kids, Australia',
  'australian-coding-maths-and-ai-competitions-calendar': 'Australian coding, maths and AI competitions calendar',
  'naplan-numeracy-practice-online': 'NAPLAN numeracy practice online',
  'hsc-software-engineering-help': 'HSC Software Engineering help',
  'kids-coding-languages-australia': 'Kids coding languages, Australia',
  'coding-games-for-kids-australia': 'Coding games for kids, Australia',
  'coding-for-year-7-australia': 'Coding for Year 7, Australia',
  'coding-classes-for-5-and-6-year-olds-australia': 'Coding classes for 5 and 6 year olds, Australia',
  'game-programming-course-australia': 'Game programming course, Australia',
  'coding-classes-for-7-and-8-year-olds-australia': 'Coding classes for 7 and 8 year olds, Australia',
  'free-coding-classes-for-kids-australia-what-you-get': 'Free coding classes for kids, Australia',
  'video-game-design-for-kids-australia': 'Video game design for kids, Australia',
  'coding-classes-for-9-and-10-year-olds-australia': 'Coding classes for 9 and 10 year olds, Australia',
  'roblox-coding-classes-australia': 'Roblox coding classes, Australia',
  'coding-classes-near-me-australia-online-or-local': 'Coding classes near me, Australia',
  'coding-classes-for-11-and-12-year-olds-australia': 'Coding classes for 11 and 12 year olds, Australia',
  'learn-to-think-not-just-use-ai-tools-australia': 'Learn to think, not just use AI tools, Australia',
  'after-scratch-next-step-python-australia': 'After Scratch: Python, Australia',
  'minecraft-coding-classes-australia': 'Minecraft coding classes, Australia',
  'understand-the-code-dont-copy-paste-australia': 'Understand the code, do not copy-paste, Australia',
  'coding-for-homeschool-kids-australia': 'Coding for homeschool kids, Australia',
  'learn-to-train-ai-not-just-prompt-it-australia': 'Learn to train AI, not just prompt it, Australia',
  'python-ai-course-for-kids-australia': 'Python AI course for kids, Australia',
  'problem-solving-through-coding-australia': 'Problem solving through coding, Australia',
  'ai-courses-for-kids-australia': 'AI courses for kids, Australia',
  'online-coding-tutor-australia': 'Online coding tutor, Australia',
  'ai-classes-for-teens-australia': 'AI classes for teens, Australia',
  'one-on-one-coding-tutor-australia': 'One-on-one coding tutor, Australia',
  'school-holiday-coding-course-australia': 'School holiday coding course, Australia',
  'naplan-year-3-numeracy-practice': 'NAPLAN Year 3 numeracy practice',
  'hsc-maths-advanced-tutoring': 'HSC Maths Advanced tutoring',
  'naplan-year-5-numeracy-practice': 'NAPLAN Year 5 numeracy practice',
  'hsc-maths-extension-1-tutoring': 'HSC Maths Extension 1 tutoring',
  'vce-algorithmics-hess-help': 'VCE Algorithmics (HESS) help',
  'naplan-year-7-numeracy-practice': 'NAPLAN Year 7 numeracy practice',
  'hsc-maths-extension-2-tutoring': 'HSC Maths Extension 2 tutoring',
  'naplan-year-9-numeracy-practice': 'NAPLAN Year 9 numeracy practice',
  'hsc-maths-standard-tutoring': 'HSC Maths Standard tutoring',
  'nsw-selective-test-mathematical-reasoning-practice': 'NSW selective test Mathematical Reasoning practice',
  'preliminary-hsc-maths-year-11-help': 'Year 11 HSC maths help',
  'nsw-selective-test-thinking-skills-practice': 'NSW selective test Thinking Skills practice',
  'hsc-enterprise-computing-help': 'HSC Enterprise Computing help',
  'vce-applied-computing-software-development-help': 'VCE Software Development help',
  'vce-applied-computing-data-analytics-help': 'VCE Data Analytics help',
  'vce-maths-methods-tutoring': 'VCE Maths Methods tutoring',
  'vce-specialist-maths-tutoring': 'VCE Specialist Maths tutoring',
  'vce-general-maths-tutoring': 'VCE General Maths tutoring',
  'vce-foundation-maths-help': 'VCE Foundation Maths help',
  'oc-test-maths-practice-nsw': 'OC test maths practice (NSW)',
  'victorian-selective-entry-exam-maths-practice': 'Victorian selective entry exam maths practice',
  'software-engineering-major-project-help-hsc': 'Software Engineering project help',
  'queensland-academies-entry-maths-practice': 'Queensland Academies entrance test maths practice',
  'atar-explained-for-coding-students': 'The ATAR explained',
  'wa-gate-aset-maths-practice': 'WA GATE ASET maths practice',
  'choosing-year-11-computing-subjects-australia': 'Choosing Year 11 computing subjects',
  'year-10-maths-methods-preparation': 'Year 10 maths for Methods',
  'sa-ignite-entry-maths-practice': 'SA Ignite assessment maths practice',
  'year-12-maths-holiday-revision-australia': 'Year 12 maths holiday revision',
  'australian-curriculum-digital-technologies-help': 'Australian Curriculum Digital Technologies help',
  'sace-digital-technologies-help': 'SACE Digital Technologies help',
  'sace-mathematical-methods-tutoring': 'SACE Mathematical Methods tutoring',
  'icas-digital-technologies-practice': 'ICAS Digital Technologies practice',
  'digital-technologies-years-7-to-10-coding': 'Digital Technologies Years 7 to 10 coding',
  'robocup-junior-australia-coding-help': 'RoboCup Junior Australia coding help',
  'digital-technologies-primary-coding-help': 'Digital Technologies primary coding help',
  'sace-specialist-mathematics-tutoring': 'SACE Specialist Mathematics tutoring',
  'first-lego-league-australia-coding-help': 'FIRST LEGO League Australia coding help',
  'australian-curriculum-maths-year-7-to-10-help': 'Australian Curriculum maths Years 7 to 10 help',
  'young-ict-explorers-project-help': 'Young ICT Explorers project help',
  'tasc-computer-science-help': 'TASC Computer Science help',
  'australian-student-hackathons': 'Student hackathons in Australia',
  'bebras-challenge-australia-practice': 'Bebras Challenge Australia practice',
  'tasc-mathematics-methods-tutoring': 'TASC Mathematics Methods tutoring',
  'girls-programming-network-next-step-australia': 'Girls\' Programming Network: next steps',
  'australian-informatics-olympiad-preparation': 'Australian Informatics Olympiad preparation',
  'australian-mathematical-olympiad-preparation': 'Australian Mathematical Olympiad preparation',
  'aio-to-ioi-pathway-australia': 'AIO to IOI pathway in Australia',
  'australian-mathematics-competition-practice-by-year': 'Australian Mathematics Competition practice by year',
  'australian-coding-competitions-for-primary-kids': 'Coding competitions for primary kids in Australia',
  'maths-challenge-for-young-australians-practice': 'Maths Challenge for Young Australians practice',
  'australian-maths-competitions-for-primary-kids': 'Maths competitions for primary kids in Australia',
  'apsmo-maths-olympiad-practice': 'APSMO Maths Olympiad practice',
  'online-vs-in-person-coding-classes-australia': 'Online vs in-person coding classes, Australia',
  'coding-classes-vs-coding-camps-australia': 'Coding classes vs coding camps, Australia',
  'icas-maths-practice-online': 'ICAS Maths practice online',
  'tutor-vs-tutoring-centre-maths-australia': 'Maths tutor vs tutoring centre, Australia',
  'coding-class-or-maths-tutor-first-australia': 'Coding class or maths tutor first, Australia',
  'online-coding-classes-australia-compared': 'Online coding classes compared, Australia',
  'after-school-coding-club-vs-online-class-australia': 'After-school coding club vs online class, Australia',
  'java-classes-online-australia': 'Java classes online, Australia',
  'app-development-course-australia': 'App development course, Australia',
  'coding-for-university-students-australia': 'Coding for university students, Australia',
  'learn-to-code-over-50-australia': 'Learn to code over 50, Australia',
  'coding-classes-for-adults-australia': 'Coding classes for adults, Australia',
  'coding-classes-for-teens-australia': 'Coding classes for teens, Australia',
  'ai-agents-course-for-students-australia': 'AI agents course for students, Australia',
  'ai-agents-course-for-professionals-australia': 'AI agents course for professionals, Australia',
  'build-real-ai-projects-australia': 'Build real AI projects, Australia',
  'software-development-course-australia': 'Software development course, Australia',
  'python-classes-online-australia': 'Python classes online, Australia',
  'web-development-course-for-teens-australia': 'Web development course for teens, Australia',
  'data-science-course-australia': 'Data science course, Australia',
  'cyber-security-course-for-teens-australia': 'Cyber security course for teens, Australia',
  'ai-and-python-academy-for-girls-australia': 'AI and Python academy for girls, Australia',
  'competitive-programming-australia': 'Competitive programming, Australia',
  'coding-for-career-changers-australia': 'Coding for career changers, Australia',
  'javascript-classes-online-australia': 'JavaScript classes online, Australia',
  'c-plus-plus-classes-online-australia': 'C++ classes online, Australia',
  'maths-tutor-sydney': 'Maths tutor in Sydney',
  'maths-tutor-perth-wa': 'Maths tutor in Perth',
  'maths-tutor-hobart': 'Maths tutor in Hobart',
  'maths-tutor-melbourne': 'Maths tutor in Melbourne',
  'maths-tutor-parramatta': 'Maths tutor in Parramatta',
  'maths-tutor-adelaide': 'Maths tutor in Adelaide',
  'maths-tutor-glen-waverley': 'Maths tutor in Glen Waverley',
  'maths-tutor-canberra': 'Maths tutor in Canberra',
  'maths-tutor-box-hill': 'Maths tutor in Box Hill',
  'maths-tutor-sunnybank': 'Maths tutor in Sunnybank',
  'maths-tutor-brisbane': 'Maths tutor in Brisbane',
  'maths-tutor-chatswood': 'Maths tutor in Chatswood',
  'maths-tutor-gold-coast': 'Maths tutor on the Gold Coast',
  'maths-tutor-newcastle-nsw': 'Maths tutor in Newcastle, NSW',
  'how-to-make-a-roblox-game': 'How to make a Roblox game',
  'congressional-app-challenge-guide': 'Congressional App Challenge guide',
  'computer-science-summer-programs-for-high-school-students': 'CS summer programs for high school students',
  'coding-summer-camp-for-middle-schoolers': 'Coding summer camp for middle schoolers',
  'game-design-summer-camp-for-teens': 'Game design summer camp for teens',
  'free-coding-programs-for-high-school-students': 'Free coding programs for high school students',
  'computer-science-internships-for-high-school-students': 'CS internships for high school students',
  'homeschool-computer-science-high-school-credit': 'Homeschool CS high school credit',
  'coding-bootcamp-for-teens': 'Coding bootcamp for teens',
  'python-indentation-error-explained': 'Python indentation errors explained',
  'python-turtle-not-working': 'Python turtle not working',
  'jupyter-notebook-errors-for-students': 'Jupyter Notebook errors for students',
  'vs-code-setup-for-students': 'VS Code setup for students',
  'google-colab-help-for-students': 'Google Colab help for students',
  'github-classroom-help-for-students': 'GitHub Classroom help for students',
  'coding-classes-for-elementary-students': 'Coding classes for elementary students',
  'coding-classes-for-middle-school-students': 'Coding classes for middle school students',
  'coding-classes-for-high-school-students': 'Coding classes for high school students',
  'coding-milestones-by-age': 'Coding milestones by age',
  'ai-literacy-for-elementary-students': 'AI literacy for elementary students',
  'lua-for-kids': 'Lua for kids',
  'how-to-make-a-video-game-for-kids': 'How to make a video game for kids',
  'godot-for-kids-and-teens': 'Godot for kids and teens',
  'unity-for-teens': 'Unity for teens',
  'game-design-classes-for-teens': 'Game design classes for teens',
  'video-game-coding-classes-for-kids': 'Video game coding classes for kids',
  'learn-to-code-minecraft-mods': 'Learn to code Minecraft mods',
  'python-games-for-kids': 'Python games for kids',
  'how-to-make-a-3d-game-for-kids': 'How to make a 3D game for kids',
  'roblox-studio-errors-fixed': 'Roblox Studio errors fixed',
  'makecode-arcade-help-for-students': 'MakeCode Arcade help',
  'codehs-help-for-students': 'CodeHS help for students',
  'code-org-app-lab-help': 'Code.org App Lab help',
};

function wireLlms(slugs) {
  const file = 'llms.txt';
  if (!exists(file)) return 0;
  let src = read(file);
  const eol = src.includes('\r\n') ? '\r\n' : '\n';

  const wanted = slugs.filter(s => !src.includes(`${BASE}/${s}`));
  if (!wanted.length) return 0;

  const lines = wanted.map(s => `- ${LLMS_LABELS[s] || s}: ${BASE}/${s}`);

  if (src.includes(LLMS_HEADING)) {
    // append inside the existing block, before the next "## " heading
    const start = src.indexOf(LLMS_HEADING);
    const rest = src.slice(start + LLMS_HEADING.length);
    const nextIdx = rest.indexOf(eol + '## ');
    const insertAt = nextIdx === -1 ? src.length : start + LLMS_HEADING.length + nextIdx;
    src = src.slice(0, insertAt) + eol + lines.join(eol) + src.slice(insertAt);
  } else {
    // new section, placed just before the International Country Pages block so
    // the two geo clusters sit together
    const anchor = '## International Country Pages';
    const block = LLMS_HEADING + eol + eol +
      'Live AI and machine learning classes taught by building models, not by prompting tools.' + eol +
      // Price comes from pricing/pricing.config.jsonc: international group is
      // USD 100. USD 40 is retired and must never reappear here, because AI
      // answer engines read this file and will quote it at prospects.
      'Ages 6 to 67, small live batches, priced from USD 100 a month.' + eol + eol +
      lines.join(eol) + eol + eol;
    src = src.includes(anchor) ? src.replace(anchor, block + anchor) : src + eol + block;
  }

  write(file, src);
  return wanted.length;
}

// ---------------------------------------------------------------------- main
function main() {
  const argv = process.argv.slice(2);
  const requested = argv.length ? argv : SLUGS;

  const live = [];
  for (const slug of requested) {
    if (exists(`src/pages/${slug}.html`)) live.push(slug);
    else report.missing.push(slug);
  }

  if (!live.length) {
    console.log('No built pages found for the requested slugs. Nothing wired.');
    if (report.missing.length) console.log('Missing HTML: ' + report.missing.join(', '));
    process.exit(0);
  }

  const r = wireRedirects(live);
  const t = wireNetlifyToml(live);
  const s1 = wireSitemap('sitemap.xml', live, '0.80');
  const s2 = wireSitemap('sitemap-international.xml', live, '0.80');
  const lm = wireLlms(live);

  console.log('Wired ' + live.length + ' page(s):');
  live.forEach(s => console.log('  /' + s));
  console.log('');
  console.log('  _redirects lines added ............ ' + r);
  console.log('  netlify.toml blocks added ......... ' + t);
  console.log('  sitemap.xml entries added ......... ' + s1);
  console.log('  sitemap-international entries ..... ' + s2);
  console.log('  llms.txt entries added ............ ' + lm);

  const noMd = live.filter(s => !exists(`src/pages/${s}.md`));
  if (noMd.length) {
    console.log('');
    console.log('WARNING: .md twin missing for: ' + noMd.join(', '));
    console.log('The route is wired but will 404 until the file exists.');
  }
  if (report.missing.length) {
    console.log('');
    console.log('Not built yet, skipped: ' + report.missing.join(', '));
  }
}

main();
