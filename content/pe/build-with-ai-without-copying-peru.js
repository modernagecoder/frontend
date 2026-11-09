// SHIP: market (en guide, think-not-copy, AI) | the AI makers' own terms say check it; a review routine for Peru | removing from a list while looping over it: AI code that passes one test and skips items
'use strict';
// Build with AI without copying, for Peru (ag- English guide door, row PE028, hubGroup guides, code bwa).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: teenagers of 13 to 17 (with a parent's permission where a tool's terms ask), university students and
// adults in Peru. Spine (different from the Spanish twin's leap-year tests and six steps): the AI vendors' own documents
// tell users to review and confirm every output, so the page turns those sentences into a review routine of our own.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/build-with-ai-without-copying-peru/,
// fetched 9 November 2026 with curl; quotes grepped in the extracted text):
//  - GitHub Docs, "Application card: GitHub Copilot inline suggestions" (gh_copilot_resp.txt): "You should always
//    review Copilot's suggestions before accepting them"; "Hallucinations are a known risk of large language models and
//    are a key reason that human review of AI-generated output is important."
//  - Anthropic Consumer Terms of Service, effective Oct 8, 2025 (anthropic_terms.txt): "You must be at least 18 years
//    old or the minimum age required to consent to use the Services in your location, whichever is higher."; "Outputs
//    may not always be accurate and may contain material inaccuracies even if they appear accurate because of their
//    level of detail or specificity."; "You should not rely on any Outputs or Actions without independently confirming
//    their accuracy."
//  - Google, Gemini Apps Privacy Hub, last updated October 26, 2026 (gemini_help.txt): "Gemini can make mistakes.";
//    "LLM experiences (Gemini Apps included) can hallucinate and present inaccurate information as factual."
//  - OpenAI terms: openai.com returned 403 on 9 November 2026 (BLOCKED.txt), not retried. The ChatGPT age rule is taken
//    from content/ai-tool-age-audit.json (vendor page quoted verbatim, audited 2026-07-15): "If you are under 18 you must
//    have your parent or legal guardian's permission to use the Services."; Microsoft Copilot in the same file: "You must
//    be at least 13 years old to use Copilot".
//  - Python tutorial, section 4 "More Control Flow Tools" (py_controlflow.txt): "Code that modifies a collection while
//    iterating over that same collection can be tricky to get right. Instead, it is usually more straight-forward to loop
//    over a copy of the collection or to create a new collection".
//  - MINEDU (n-ia-rural/text.txt): AI for learning planning "en 205 instituciones educativas del ámbito rural" serving
//    "cerca de 27 000 estudiantes", announced for the following year (2026).
//  - MINEDU Hackathon 2025 (n-hackathon2025/text.txt): projects "de IA y robótica"; female participation up "28 %"
//    between 2023 and 2025.
//  - UTEC, Reglamento OPI 2025 (facts-school opi-reglamento-2025): "Queda prohibido el uso de IA generativa para la
//    resoluci´on de problemas."
// Our own calculations (python3 -I, scratchpad pe/e7/bwa_v1.py to v3.py), printed output:
//   v1: "['Ana', 'Luis', 'Rosa']", "['Ana', '', 'Luis', 'Rosa']", "['', 'Rosa']"; v2 trace ends "step 3 sees 'Rosa'
//   list is now ['Ana', '', 'Luis', 'Rosa']"; v3: five rows, each "no blanks left: True | input untouched: True".
// Lesson family: mutating a list while iterating over it (the loop index skips the item that slides into the removed
// slot), found with a trace that prints the list each step, fixed with a new list built by a comprehension.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  '# A plausible answer to: "remove the blank names from a list"',
  'def drop_blanks(names):',
  '    for name in names:',
  "        if name == '':",
  '            names.remove(name)',
  '    return names',
  '',
  "print(drop_blanks(['Ana', '', 'Luis', '', 'Rosa']))",
  "print(drop_blanks(['Ana', '', '', 'Luis', 'Rosa']))",
  "print(drop_blanks(['', '', '', 'Rosa']))"
].join('\n');

const OUT1 = [
  "['Ana', 'Luis', 'Rosa']",
  "['Ana', '', 'Luis', 'Rosa']",
  "['', 'Rosa']"
].join('\n');

const V2 = [
  'def drop_blanks_traced(names):',
  '    for i, name in enumerate(names):',
  "        print('step', i, 'sees', repr(name), 'list is now', names)",
  "        if name == '':",
  '            names.remove(name)',
  '    return names',
  '',
  "print(drop_blanks_traced(['Ana', '', '', 'Luis', 'Rosa']))"
].join('\n');

const OUT2 = [
  "step 0 sees 'Ana' list is now ['Ana', '', '', 'Luis', 'Rosa']",
  "step 1 sees '' list is now ['Ana', '', '', 'Luis', 'Rosa']",
  "step 2 sees 'Luis' list is now ['Ana', '', 'Luis', 'Rosa']",
  "step 3 sees 'Rosa' list is now ['Ana', '', 'Luis', 'Rosa']",
  "['Ana', '', 'Luis', 'Rosa']"
].join('\n');

const V3 = [
  'def drop_blanks(names):',
  "    return [name for name in names if name != '']",
  '',
  'tests = [',
  "    ['Ana', '', 'Luis', '', 'Rosa'],",
  "    ['Ana', '', '', 'Luis', 'Rosa'],",
  "    ['', '', '', 'Rosa'],",
  "    ['', ''],",
  '    [],',
  ']',
  'for t in tests:',
  '    original = list(t)',
  '    result = drop_blanks(t)',
  "    print(result, '| no blanks left:', '' not in result, '| input untouched:', t == original)"
].join('\n');

const OUT3 = [
  "['Ana', 'Luis', 'Rosa'] | no blanks left: True | input untouched: True",
  "['Ana', 'Luis', 'Rosa'] | no blanks left: True | input untouched: True",
  "['Rosa'] | no blanks left: True | input untouched: True",
  '[] | no blanks left: True | input untouched: True',
  '[] | no blanks left: True | input untouched: True'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Build with AI without copying' },
  slug: 'build-with-ai-without-copying-peru',
  code: 'bwa',
  accent: '#6F1821',
  accentRationale: 'Build with AI without copying: a dark oxblood red #6F1821, the colour of a reviewer\'s pen in the margin, the mark that says "check this" before code is accepted; contrast above 4.5 on the paper #FBF8F2 and its tints, as allocated in alloc.tsv and checked by the build',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Build with AI without copying, for Peru',
  title: 'Build with AI Without Copying: Live Classes for Peru',
  description: 'How teenagers and adults in Peru can build software with AI assistants and still understand every line: live online classes in English, group or one to one.',
  ogDescription: 'What the makers of Copilot, Claude and Gemini tell their own users to check, the review routine we teach, and a Python bug that AI-style code hides until the second test.',
  twitterDescription: 'Live classes in English for learners in Peru who want to build with AI tools and own the code they ship.',
  pageName: 'Build with AI Without Copying, for Peru',
  webPageDescription: 'A guide for teenagers, university students and adults in Peru on building software with AI coding assistants without copying, built from the AI vendors\' own documents (GitHub, Anthropic, Google), the Python tutorial, MINEDU announcements on AI in schools and the OPI 2025 rules, with an original Python lesson on a list modified while it is looped over.',
  courseDescription: 'Live online classes taught in English for learners in Peru aged 13 and over in which AI coding assistants are used as reviewed collaborators, never as answer machines: Python, web and app projects for teenagers with a parent\'s permission where a tool requires it, and full-stack, agents and automation work for university students and adults, in a group of fifteen to twenty or one to one, at any hour.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Build with AI without copying',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#makers', label: 'What the makers say' },
    { href: '#ages', label: 'Age rules' },
    { href: '#lesson', label: 'The hidden bug' },
    { href: '#routine', label: 'Review routine' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; AI as a collaborator &middot; Ages 13 to adult',
  h1: 'Build with AI without copying: live classes for Peru',
  lede: 'An AI assistant can write a working function faster than any student. It can also write one that works on the example you gave it and breaks on the next. The companies that make these tools say so in their own documents. This page shows what they say, which tools a teenager in Peru may use, and the routine we teach so that what you build is still yours.',
  secondaryCta: { href: '#lesson', label: 'See the hidden bug' },
  wa: 'Hello Modern Age Coders, I am in Peru and want to learn to build with AI tools without just copying the code. Could I book a free first class in English?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; AI output treated as a draft, never as the answer',
  spec: [
    ['Who', 'Teenagers of 13 to 17, university students and adults in Peru'],
    ['Tools', 'Chosen by age, following each maker\'s own terms'],
    ['Method', 'Write or plan first, generate second, review always'],
    ['Format', 'A group of fifteen to twenty, or one to one'],
    ['Hours', 'Any day, any hour in Peru time'],
    ['First class', 'Free, without a card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Building with AI without copying means you let an assistant draft code but accept nothing you cannot read, predict, test and explain yourself. Modern Age Coders teaches this live and online, in English, to teenagers from 13, with a parent\'s permission where a tool requires it, and for university students and adults in Peru. Mentors in India teach a fixed review routine, starting from the AI makers\' own warning that output can be wrong. You choose a group of fifteen to twenty or one-to-one lessons, at flexible hours.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses where AI is a reviewed collaborator',
    lede: 'One for teenagers, one for university students and one for working adults. In all three the learner plans and tests; the assistant drafts.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'BWA / 01', title: 'Vibe coding for teens', alt: 'Course thumbnail for Vibe Coding for Teens, Python, web development and AI', note: 'For 13 to 17 year olds. Web and Python builds where the tests exist before a single line is generated.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', code: 'BWA / 02', title: 'Vibe coding for university students', alt: 'Course thumbnail for Vibe Coding for College, full stack, AI and DSA', note: 'From 18. Full-stack builds and data structures, so generated code is judged by someone who knows what good looks like.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'BWA / 03', title: 'Coding agents for professionals', alt: 'Course thumbnail for Codex and Claude Code AI coding agents for adults and professionals', note: 'Adults only. Agents that edit whole projects, supervised with version control, tests and code review.' }
    ]
  },

  sections: [
    {
      id: 'makers',
      eyebrow: 'In their own words',
      h2: 'What do AI companies say about checking AI-generated code?',
      lede: 'They say check all of it. Each major assistant\'s own documentation or terms tells users that output can be wrong while looking right, and that reviewing it is the user\'s job. These are not critics speaking; they are the makers.',
      body: [
        { kind: 'table', numCols: [], caption: 'What three AI makers tell their own users about output, quoted from their documents', head: ['Maker and document', 'What it says', 'What that means for a learner'], rows: [
          ['GitHub, application card for Copilot inline suggestions', '"You should always review Copilot\'s suggestions before accepting them"', 'Accepting a suggestion is a decision you make, so you need to be able to make it'],
          ['GitHub, same document', '"Hallucinations are a known risk of large language models and are a key reason that human review of AI-generated output is important."', 'Code can call functions that do not exist or misuse ones that do'],
          ['Anthropic, Consumer Terms of Service (effective 8 October 2025)', '"Outputs may not always be accurate and may contain material inaccuracies even if they appear accurate because of their level of detail or specificity."', 'A detailed, confident answer is not evidence that it is right'],
          ['Anthropic, same terms', '"You should not rely on any Outputs or Actions without independently confirming their accuracy."', 'Confirming means a test or a check that does not come from the same tool'],
          ['Google, Gemini Apps Privacy Hub (updated 26 October 2026)', '"Gemini can make mistakes." and LLM experiences "can hallucinate and present inaccurate information as factual."', 'The same caution applies whichever assistant you use']
        ] },
        { kind: 'source', html: 'Sources: GitHub Docs, "Application card: GitHub Copilot inline suggestions"; Anthropic, Consumer Terms of Service; Google, Gemini Apps Privacy Hub. All read in English on 9 November 2026. OpenAI\'s site refused our request that day, so ChatGPT appears below only through its age rule, quoted from the vendor page in our July 2026 audit.' },
        { kind: 'two', mt: true,
          leftH3: 'Why a learner should take this seriously',
          left: [
            'A professional who reviews AI code is comparing it with years of their own. A learner has nothing to compare it with yet, which makes copying more tempting and more risky at the same time. The answer is not to avoid the tools. It is to build the judgement first, then use the tools where that judgement can catch their mistakes.',
            'In practice that means a learner should be able to write a small version of the thing on their own before asking an assistant for the big version.'
          ],
          rightH3: 'What "independently confirming" looks like',
          right: [
            'Anthropic\'s phrase is the useful one. Confirming independently means a check that does not depend on the tool\'s own explanation: running the code on inputs you chose, tracing it by hand, reading the official documentation for a function, or comparing with a version you wrote.',
            'Asking the same assistant "are you sure?" is not independent. Its second answer comes from the same place as its first.'
          ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Age rules',
      h2: 'Which AI coding tools can a teenager in Peru use?',
      lede: 'It depends on the tool, and the rule is in each maker\'s own terms, not in a school policy. Some allow 13-year-olds with a parent\'s permission; some require users to be adults. We follow the strictest reading in class.',
      body: [
        { kind: 'two',
          leftH3: 'What the terms say',
          left: [
            'Anthropic\'s consumer terms say: "You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher." So Claude is an adults-only tool in our classes.',
            'OpenAI\'s terms, as quoted in our audit of July 2026, say that users under 18 "must have your parent or legal guardian\'s permission". Microsoft says users must be at least 13 to use Copilot. Google\'s Gemini help says a Family Link account cannot use the Gemini web app, so a supervised child account cannot use it there.'
          ],
          rightH3: 'What we do with that',
          right: [
            'Under 13: no chatbots in class. Children learn how AI works through projects that do not need an account, such as training a tiny model on their own examples.',
            'From 13 to 17: tools whose terms allow the age, with the parent\'s permission where the terms ask for it, and only after the learner has written their own first version. From 18: every tool the course needs, including coding agents. The full list, tool by tool, is on our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.'
          ] },
        { kind: 'p', mt: true, html: 'Tool terms change. We re-read them before a course uses a tool, and a parent can ask the mentor at any time which tools their teenager is using and under whose account. For the AI side of the curriculum for secundaria, our Spanish page on <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">IA para adolescentes</a> explains what we teach about how models work.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'How can AI code pass a test and still be wrong?',
      lede: 'By being tested on the one case it happens to handle. The lesson below is ours. The first function is the kind of short, tidy answer an assistant often gives to "remove the blank names from a list"; we wrote it ourselves to make the point, and we never show students a real tool\'s output as if it were a fixed fact.',
      body: [
        { kind: 'code', label: 'Version 1: the tidy answer', lang: 'Python', code: V1, note: 'It reads well: loop over the names, remove each blank one, return the list. Before running it, the mentor asks the learner to predict all three printed lines.' },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Copied verbatim after we ran it under Python 3. The first test passes. The second leaves a blank behind. The third leaves two. A learner who tried only the first list would have shipped it.' },
        { kind: 'p', mt: true, html: 'The pattern in the failures is the clue: the function fails when two blanks sit next to each other. Rather than ask the assistant to "fix it", the learner makes the function show its work, printing what the loop sees at each step and what the list looks like at that moment.' },
        { kind: 'code', label: 'Version 2: make the loop show what it sees', lang: 'Python', code: V2, note: '<code>enumerate</code> gives the step number alongside each name, and <code>repr</code> prints an empty string as two quote marks, so it is visible.' },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output from our own run. At step 1 the loop sees the first blank and removes it. Every later name slides one place to the left, so the second blank moves into position 1, which the loop has already visited. At step 2 it sees Luis. The second blank is never looked at.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Name the cause in one sentence.</strong> "Removing an item shifts the rest left, but the loop still moves forward one place, so it skips whatever slid into the gap." If the learner can say that, they understand it.',
          '<strong>Check the official source.</strong> The Python tutorial warns about this exact pattern: "Code that modifies a collection while iterating over that same collection can be tricky to get right." It suggests looping over a copy or building a new collection instead.',
          '<strong>Prefer a new list.</strong> Building a fresh list leaves the original alone, which also avoids a second, quieter problem: Version 1 changes the list the caller passed in.',
          '<strong>Write the tests before the fix.</strong> Adjacent blanks, blanks at the start, a list of only blanks and an empty list, plus a check that the input is untouched.'
        ] },
        { kind: 'code', label: 'Version 3: build a new list, then test hard', lang: 'Python', code: V3, note: 'The comprehension reads as one English sentence: keep each name that is not blank. <code>list(t)</code> takes a copy before the call, so the last check can prove the input was not modified.' },
        { kind: 'code', label: 'What Version 3 prints', lang: 'Output', code: OUT3, note: 'Exact output from our own run: five cases, no blanks left in any result, and every input list exactly as it was before the call.' },
        { kind: 'p', mt: true, html: 'Could an assistant have produced Version 3 first time? Often, yes. The point of the lesson is that the learner can now tell Version 1 from Version 3 without running them, and knows which four tests to write next time. That is the difference between building with AI and copying from it.' }
      ]
    },
    {
      id: 'routine',
      eyebrow: 'Our review routine',
      h2: 'How do you review AI-generated code before using it?',
      lede: 'With the same five steps every time, in the same order. The routine is ours and it is deliberately boring: a habit only works if it does not depend on how confident you feel about a particular answer.',
      body: [
        { kind: 'ol', items: [
          '<strong>State the job and the tests first.</strong> Before prompting, write in plain English what the code must do and three to five cases with their expected results, including at least one awkward one.',
          '<strong>Read it aloud, line by line.</strong> For each line, say what it does. Mark any line you cannot explain; marked lines are not accepted until you can.',
          '<strong>Predict, then run your tests.</strong> Say what each test will print before running. A wrong prediction on a passing test still means you do not understand something.',
          '<strong>Shrink it.</strong> If the answer is longer than the problem deserves, rewrite the part you understand in fewer lines, or ask for a smaller version. Long code hides bugs from beginners.',
          '<strong>Explain the change you would make.</strong> Pick one new requirement, such as "also remove names that are only spaces", and describe where it goes. If you cannot, you are not ready to own this code.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'For a teenager', p: 'Steps 1 to 3 every time, step 4 when the answer is longer than a screen. The mentor asks for step 5 aloud at the end of each project.' },
          { h3: 'For a university student', p: 'All five steps, plus version control: every accepted change is its own commit with a message that says why, so a bad suggestion can be undone.' },
          { h3: 'For a professional', p: 'All five, plus a check against the project\'s own rules on data and security. Agents that edit many files get their changes reviewed as if a new colleague had written them.' }
        ] },
        { kind: 'p', mt: true, html: 'For the wider picture, including what vibe coding is and where it differs from this routine, our Spanish guide <a class="ag-inline-link" href="/vibe-coding-curso-en-ingles">vibe coding en inglés</a> is the place to start. Parents of younger children who would rather wait on AI tools can see what we teach before any assistant appears on our Spanish page about <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a>.' }
      ]
    },
    {
      id: 'peru',
      eyebrow: 'AI in Peruvian education',
      h2: 'How is AI being used in Peruvian schools and competitions?',
      lede: 'Cautiously and in specific places. Peruvian institutions have begun using AI for planning and running AI projects, while the computing olympiad keeps it out of the contest room entirely.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Planning in rural secondary schools', p: 'MINEDU announced in December 2025 that from the following year it would use AI for learning planning in 205 rural secondary schools serving about 27,000 students. The tool supports teachers; it does not do the students\' work.' },
          { h3: 'Student projects', p: 'MINEDU\'s Hackathon 2025, its fourth edition, rewarded teams of students and teachers for projects in AI and robotics, and reported that participation by girls grew 28% between 2023 and 2025.' },
          { h3: 'The contest room', p: 'UTEC\'s rules for the 2025 Peruvian Computing Olympiad ban generative AI for solving problems. A teenager who aims at the OPI needs to code alone, which is one more reason to build skill before leaning on tools.' }
        ] },
        { kind: 'p', mt: true, html: 'We are not connected with MINEDU, UTEC or any school, and our classes do not count towards Peruvian grades. They run beside school and work, and a learner who finishes a course receives our own certificate of completion.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes taught in Spanish?',
      lede: 'No. Lessons are live, online and given only in English. The mentors, who work from India, keep their speech clear and unhurried and follow the pace and accent of the person in front of them. For AI work, English carries a practical advantage.',
      body: [
        { kind: 'two',
          leftH3: 'Prompts, errors and documentation',
          left: [
            'Most of the documentation an AI assistant was trained on, and most of the error messages it will explain, are in English. A learner who can write a precise prompt in English, and read the documentation that confirms or contradicts the answer, can check the tool against its sources.',
            'In class, learners write their task statements and test descriptions in English, which doubles as practice in saying exactly what they mean.'
          ],
          rightH3: 'If your English is still growing',
          right: [
            'That is normal and fine. Mentors slow down, repeat in simpler words and type key phrases into the chat. Many adults in Peru read English far better than they speak it, and the classes give daily speaking practice in a low-pressure setting.',
            'You may write to us on WhatsApp in Spanish whenever you like; the lessons themselves stay in English.'
          ] },
        { kind: 'p', mt: true, html: 'For Lima learners at bilingual or international schools, our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> describes how classes fit beside an English-language timetable.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'When can I take a live class from Peru?',
      lede: 'Whenever suits you. Mentors work from India, and the gap between the two clocks never changes, because neither country moves its clocks during the year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time beside India time (conversions only; you choose the hour)', head: ['Peru time', 'India time', 'Day in India'], rows: [
          ['6:30 a.m.', '5:00 p.m.', 'Same day'],
          ['8:30 a.m.', '7:00 p.m.', 'Same day'],
          ['11:30 a.m.', '10:00 p.m.', 'Same day'],
          ['2:30 p.m.', '1:00 a.m.', 'Next day'],
          ['6:30 p.m.', '5:00 a.m.', 'Next day'],
          ['9:00 p.m.', '7:30 a.m.', 'Next day']
        ] },
        { kind: 'source', html: 'Peru is on UTC minus 5 throughout the year and does not use daylight saving (tz database, America/Lima). India is on UTC plus 5:30, also without daylight saving, so India is always 10 hours 30 minutes ahead of Peru.' },
        { kind: 'p', mt: true, html: 'Working adults in Lima often take an early morning class before the office; university students tend to pick late evenings. Either way, you book in Peru time and the conversion is our job.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How does judgement with AI tools grow?',
    lede: 'Five levels of our own. Most learners start at 1 or 2, whatever their age; what moves them up is practice with the review routine, not more prompting.',
    table: { caption: 'Five levels of judgement when coding with an AI assistant (ours)', head: ['Level', 'Typical behaviour', 'Next step'], rows: [
      ['1. Paste and hope', 'Copies output, runs it once, moves on if no error appears', 'Write the expected result before running'],
      ['2. Test the example', 'Checks the case given in the prompt only', 'Add an awkward case: empty, repeated, reversed'],
      ['3. Read every line', 'Can explain each line and marks the ones they cannot', 'Trace the marked lines by hand'],
      ['4. Catch and fix', 'Finds a hidden failure and repairs it without asking the tool', 'Write the tests before generating anything'],
      ['5. Direct the tool', 'Specifies the job and tests, judges drafts, rejects weak ones', 'Review a classmate\'s AI-assisted code']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teenager which level they are on this week and what moved them. A learner at level 3 or above can tell you about a time the AI was wrong.',
      'If the honest answer is level 1, that is where most beginners start. The routine is designed to move them.'
    ] },
    right: { h3: 'For learners', ps: [
      'Keep a short log of every time an assistant gave you something wrong and how you caught it. It becomes a list of your own blind spots.',
      'The fastest route to level 5 is writing the tests before the prompt.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for building with AI',
    lede: 'All live, in English, with one mentor, and all using AI tools within each maker\'s age rules.',
    bands: [
      { num: 'I', h3: 'Teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'BWA / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The foundation that lets a teenager judge generated Python.' },
        { code: 'BWA / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How models learn, so their mistakes make sense.' },
        { code: 'BWA / TEEN / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control, so every AI change can be inspected and undone.' }
      ] },
      { num: 'II', h3: 'University students', sub: '18 and over', courses: [
        { code: 'BWA / UNI / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Scripts and workflows that call models, with error handling.' },
        { code: 'BWA / UNI / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'What large language models are doing when they write code.' },
        { code: 'BWA / UNI / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The knowledge that spots an inefficient suggestion.' }
      ] },
      { num: 'III', h3: 'Professionals', sub: 'Adults at work', courses: [
        { code: 'BWA / PRO / 01', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Agents with Copilot Studio', blurb: 'Business agents built and reviewed one to one.' },
        { code: 'BWA / PRO / 02', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Agents with Gemini Enterprise', blurb: 'Enterprise agents with testing and governance.' },
        { code: 'BWA / PRO / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git for professionals', blurb: 'Branches, reviews and history for teams using AI.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'What happens in a live class with AI tools?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early mornings', l: 'Popular with working adults in Lima.' },
      { time: 'Evenings', l: 'After school or lectures, in Peru time.' },
      { time: 'Set by you', l: 'One-to-one lessons whenever you book them.' }
    ],
    cells: [
      { h3: 'Plan on paper', p: 'Each task begins with a written goal and test cases.' },
      { h3: 'Draft with a tool', p: 'Only tools the learner\'s age allows.' },
      { h3: 'Review aloud', p: 'Line-by-line explanation to the mentor.' },
      { h3: 'Break it on purpose', p: 'Awkward inputs before anything is kept.' },
      { h3: 'Commit with a reason', p: 'Every accepted change explained in a sentence.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners of a similar level, or one to one.' }
    ]
  },

  projectsH2: 'Built with judgement',
  projectsLede: 'Projects by some of our older students. More are collected on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families and learners wrote about us on Google, unedited.',

  fees: {
    h2: 'Fees for learners in Peru',
    lede: 'Plans are priced monthly in US dollars and charged to a debit or credit card. Your bank does the conversion to soles at its own rate, which is why the amount you see on your statement may differ by a little each month.',
    free: ['A free first class with a mentor', 'A short task done with and without an assistant', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One mentor throughout', 'Two live classes a week', 'Monthly, cancel at the end of any month'],
    one: ['You and a mentor only', 'Your own project and tools', 'Days and times you pick']
  },

  faq: {
    eyebrow: 'Learners in Peru ask',
    h2: 'Building with AI without copying: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught only in English. Mentors based in India keep their English plain and steady and adapt to how quickly you follow. You can write to us in Spanish on WhatsApp, but lessons stay in English.' },
      { q: 'Is using AI to code cheating?', a: 'Not in itself. It becomes copying when you accept code you cannot explain or test. In a contest that bans AI, such as the OPI, or in homework where the teacher forbids it, using it anyway is cheating, and we teach learners to follow those rules.' },
      { q: 'What age can my child start using AI coding tools?', a: 'In our classes, from 13, with tools whose own terms allow it and a parent\'s permission where the terms ask for it. Claude requires users to be 18, so only adults use it. Children under 13 learn how AI works without chatbot accounts.' },
      { q: 'Do I need to know how to code before using AI?', a: 'You need enough to read and test what the tool writes. Complete beginners spend their first weeks writing small programs alone, then bring in an assistant once they can check its work.' },
      { q: 'Which tools do you use?', a: 'It depends on the course and the learner\'s age: coding assistants in an editor, chat assistants for explanations, and for adults, coding agents that edit whole projects. Tool terms are re-read before a course uses them.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 8:30 a.m. in Lima is 7:00 p.m. in India.' },
      { q: 'Can a professional with a full-time job join?', a: 'Yes. Many adults take one-to-one classes early in the morning or late in the evening, Peru time, and bring a real problem from work to build during the course.' },
      { q: 'Will I get a certificate?', a: 'You receive our own certificate of completion when you finish a course. It is not a university credit or an official Peruvian qualification, and we are not connected with MINEDU or any university.' },
      { q: 'What if the AI gives a different answer each time?', a: 'That is normal for these tools and one more reason the tests come first. If two different answers both pass your tests, your tests are probably too easy, and the mentor will help you write a harder one.' },
      { q: 'How do I pay?', a: 'By card, monthly, in US dollars; your bank converts the charge into soles. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on AI and code',
    lede: 'English pages that go further into the tools and the thinking behind them.',
    items: [
      { href: '/learn-to-code-with-ai', label: 'Learn to code with AI', p: 'A wider guide to assistants for beginners.' },
      { href: '/parents-guide-to-vibe-coding', label: 'A parent\'s guide to vibe coding', p: 'What teenagers are doing with these tools, explained for parents.' },
      { href: '/how-large-language-models-work', label: 'How large language models work', p: 'Why a model can sound sure and still be wrong.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The age rule for each tool, from its own terms.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding the cause, as in the lesson above.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our courses for Peru in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the free class you try one short task twice: once alone and once with an assistant, then you review the assistant\'s version with the mentor. It shows quickly where your judgement already is, and the mentor suggests a course, a level and the tools that fit your age.',
    readFirst: 'Want to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live class, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Live online classes with mentors in India, taught in English only. WhatsApp is the quickest way to reach us, in Spanish or English.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Courses on this page', links: [
        { href: '/courses/vibe-coding-for-teens-python-web-ai-projects-course', label: 'Vibe coding for teens' },
        { href: '/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course', label: 'Vibe coding for university' },
        { href: '/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', label: 'Coding agents for professionals' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'AI with care', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/learn-to-code-with-ai', label: 'Learn to code with AI' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'The second test is the real one'
  },

  personalityCss: `
.ag-root.ag-bwa .ag-hero h1 { letter-spacing: -0.012em; max-width: 21ch; }
.ag-root.ag-bwa .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-bwa .ag-table td { line-height: 1.5; }
.ag-root.ag-bwa .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-bwa .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'GitHub Docs, application card for Copilot inline suggestions; Anthropic Consumer Terms of Service (effective 8 October 2025); Google Gemini Apps Privacy Hub (updated 26 October 2026); content/ai-tool-age-audit.json for OpenAI and Microsoft (vendor pages quoted July 2026; openai.com refused us on 9 November 2026); Python tutorial, More Control Flow Tools; MINEDU press notes on AI in rural secondary schools and Hackathon 2025; UTEC, Reglamento OPI 2025. Read 9 November 2026. The review routine, levels and Python lesson are our own.',
    localProject: 'AI-style code that passes one test: a drop_blanks function that removes items from the list it is looping over prints [\'Ana\', \'Luis\', \'Rosa\'] for spaced blanks but [\'Ana\', \'\', \'Luis\', \'Rosa\'] for adjacent ones and [\'\', \'Rosa\'] for three at the start; a traced version shows the loop skipping the item that slides into the gap; a list comprehension passes five tests including empty input and leaves the input untouched. Set against the AI makers\' own instructions to review and independently confirm output.',
    requiredMentions: ['What three AI makers tell their own users about output, quoted from their documents', 'You should not rely on any Outputs or Actions without independently confirming their accuracy.', 'You should always review Copilot\'s suggestions before accepting them', 'step 2 sees \'Luis\' list is now', 'Five levels of judgement when coding with an AI assistant (ours)', '205 rural secondary schools serving about 27,000 students', 'participation by girls grew 28% between 2023 and 2025', 'The second test is the real one', 'Asking the same assistant "are you sure?" is not independent'],
    sources: [
      { claim: 'GitHub: always review Copilot suggestions before accepting; hallucinations are a key reason for human review.', url: 'https://docs.github.com/en/copilot/responsible-use/copilot-code-completion' },
      { claim: 'Anthropic: minimum age 18; outputs may be inaccurate even when detailed; confirm independently.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Google: Gemini can make mistakes; LLM experiences can hallucinate (Gemini Apps Privacy Hub, updated 26 October 2026).', url: 'https://support.google.com/gemini/answer/13594961?hl=en' },
      { claim: 'Google Gemini help (quoted in our July 2026 audit): a Google Account managed by Family Link cannot access the Gemini web app.', url: 'https://support.google.com/gemini/' },
      { claim: 'OpenAI: under 18 needs a parent or guardian\'s permission (vendor page quoted in our July 2026 audit).', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Python tutorial: modifying a collection while iterating over it is tricky; loop over a copy or build a new collection.', url: 'https://docs.python.org/3/tutorial/controlflow.html' },
      { claim: 'MINEDU: AI for learning planning in 205 rural secondary schools serving about 27,000 students, from 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1304191-minedu-implementara-uso-de-inteligencia-artificial-para-fortalecer-aprendizajes-de-27-000-estudiantes-del-ambito-rural' },
      { claim: 'MINEDU Hackathon 2025: AI and robotics projects; female participation up 28% between 2023 and 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'OPI 2025 bans generative AI for solving problems.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' }
    ],
    rejectedClaims: [
      'Quoting OpenAI\'s terms fetched today: openai.com returned 403 on 9 November 2026; not retried. The age rule comes from our July 2026 vendor-quoted audit and is labelled so.',
      'Presenting Version 1 as a real tool\'s output: it is our own example of a plausible answer, labelled as ours.',
      'Any statistic on how many Peruvian students use AI to copy homework: no primary source; not claimed.',
      'Recommending Claude or any 18+ tool to under-18s: refused; the page states the 18+ rule.',
      'Any MINEDU, UTEC or university connection: none, and the page says so.',
      'Spanish-language teaching: none; all classes are in English.'
    ]
  }
};
