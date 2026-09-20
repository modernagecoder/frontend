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
