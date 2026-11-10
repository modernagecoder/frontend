'use strict';
// SHIP: market | Vibe coding classes in Peru: building with AI by describing, then proving it works, in English | property testing: 1,000 random bills break an AI-style split that looked right
// Vibe coding classes, Peru (ag- English subject door, Peru cluster row PE026, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible at any hour.
// Audience: children 8 to 12 (via parents), teenagers and adults in Peru searching "vibe coding classes", "vibe coding course",
// "learn to code with AI" (appendix B prompt 10: "vibe coding classes online Peru"). Spanish twin (live): vibe-coding-curso-en-
// ingles (tests first: expected outputs asserted before trusting generated code). This page has its own spine and lesson.
// Spine: what vibe coding is (Stack Overflow 2025 uses the Wikipedia definition, "the process of generating software from LLM
// prompts") and how many developers actually do it; the "almost right" problem (Stack Overflow 2025 frustrations and trust);
// the lesson (state a property, then test 1,000 random cases); which tools each age may use (vendor terms via our audit,
// including GitHub Copilot's 13 floor and Replit's 13 to 17 gap); OPI 2025 rules on generative AI; devices (INEI 2026).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vibe-coding-classes-peru/, read 9 Nov 2026):
//  - Stack Overflow Developer Survey 2025, AI (so-ai-2025.raw/.txt): "84% of respondents are using or planning to use AI tools
//    in their development process, an increase over last year (76%)."; "51% of professional developers use AI tools daily";
//    "Most respondents are not vibe coding (72%), and an additional 5% are emphatic it not being part of their development
//    workflow."; "we define vibe coding according to the Wikipedia definition , the process of generating software from LLM
//    prompts"; "The biggest single frustration, cited by 66% of developers, is dealing with "AI solutions that are almost right,
//    but not quite,""; ""Debugging AI-generated code is more time-consuming" (45%)"; "More developers actively distrust the
//    accuracy of AI tools (46%) than trust it (33%), and only a fraction (3%) report "highly trusting" the output.";
//    "the #1 reason developers would still ask a person for help is "When I don’t trust AI’s answers" (75%)".
//  - Vendor terms via content/ai-tool-age-audit.json: GitHub Copilot "Vendor terms set a 13 floor." (note: "The only AI coding
//    assistant of eight that survived."); Replit "You must be an adult to use the Service. If you are younger than 13 we will
//    allow you to use the Service if you first provide us with your parent or guardian's written consent." (note: a 13 to 17
//    drafting gap); ChatGPT 13+, parent permission under 18; Claude 18+.
//  - OPI 2025 rules (opi-reglamento-2025/text.txt): "Queda prohibido el uso de IA generativa para la resoluci´on de problemas."
//    (paraphrased); OPI home: "abiertas gratuitamente a todos los estudiantes de secundaria del país".
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "laptop (18,9%), computadora (14,0%)"; "el 90,2% de la población usuaria
//    de Internet de 6 y más años usó Internet a través de un teléfono celular".
//  - Merriam-Webster and Collins (for a dictionary definition) returned Cloudflare challenges on 9 November 2026; not retried,
//    not used.
//  - Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
// Our own calculation: 100 - 72 - 5 = 23% of respondents not in either "not vibe coding" group (not printed: the survey's
// other answer categories are not quoted, so the page avoids implying 23% vibe code).
// Code (cuenta.py, python3 -I; the task wording and the generated-style function are ours; random seed 2026):
//    generated fails 762 of 1000 | first: [(7807, 6)]
//    checked fails 0 of 1000 | first: []
//    generated(1000, 3) -> [333, 333, 333] sum 999
//    checked(1000, 3)   -> [334, 333, 333] sum 1000
// Lesson family: property-based testing: state a rule the output must obey, then check it on 1,000 random inputs.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'import random',
  '',
  '# Task given to an AI assistant (our wording): "split a bill of total_cents between',
  '# `people` friends, in whole cents". This is the kind of answer it often gives:',
  'def split_bill_generated(total_cents, people):',
  '    share = round(total_cents / people)',
  '    return [share] * people',
  '',
  '# A version written to a rule we state first: the parts must add back to the total,',
  '# and no two parts may differ by more than one cent.',
  'def split_bill_checked(total_cents, people):',
  '    base, extra = divmod(total_cents, people)',
  '    return [base + 1] * extra + [base] * (people - extra)',
  '',
  'def property_holds(parts, total_cents):',
  '    return sum(parts) == total_cents and max(parts) - min(parts) <= 1',
  '',
  'rng = random.Random(2026)',
  'cases = [(rng.randint(1, 50000), rng.randint(1, 12)) for _ in range(1000)]',
  '',
  'for name, f in [("generated", split_bill_generated), ("checked", split_bill_checked)]:',
  '    failures = [(t, p) for t, p in cases if not property_holds(f(t, p), t)]',
  '    print(name, "fails", len(failures), "of", len(cases), "| first:", failures[:1])',
  '',
  'print("generated(1000, 3) ->", split_bill_generated(1000, 3), "sum", sum(split_bill_generated(1000, 3)))',
  'print("checked(1000, 3)   ->", split_bill_checked(1000, 3), "sum", sum(split_bill_checked(1000, 3)))'
].join('\n');

const OUT = [
  'generated fails 762 of 1000 | first: [(7807, 6)]',
  'checked fails 0 of 1000 | first: []',
  'generated(1000, 3) -> [333, 333, 333] sum 999',
  'checked(1000, 3)   -> [334, 333, 333] sum 1000'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Vibe coding classes' },
  slug: 'vibe-coding-classes-peru',
  code: 'vic',
  accent: '#005C40',
  accentRationale: 'Vibe coding classes, Peru: the deep green #005C40, shared by allocation with the kids\' AI page because both start children building with AI; here it reads as a terminal-green cursor on a light screen. Above 4.5:1 on all three papers, as the build checks.',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vibe coding classes in Peru',
  title: 'Vibe Coding Classes in Peru: Build With AI, Live in English',
  description: 'Vibe coding classes for kids, teens and adults in Peru: live online lessons in English on building apps with AI, then proving the code works before trusting it.',
  ogDescription: 'What vibe coding is, how many developers really do it, why "almost right" code is the problem to solve, which AI coding tools each age may use, and a lesson where 1,000 random tests break code that looked fine.',
  twitterDescription: 'Live vibe coding classes in English for Peru: describe it, build it with AI, then prove it works.',
  pageName: 'Vibe Coding Classes in Peru',
  webPageDescription: 'A guide to vibe coding classes for learners in Peru, drawn from the Stack Overflow Developer Survey 2025, vendor age terms for AI coding tools, the OPI 2025 rules and INEI household data for 2026, with an original lesson on property-based testing of AI-style code.',
  courseDescription: 'Live online vibe coding classes for learners in Peru, taught in English: children 8 to 12 build Scratch and web projects with supervised AI help, teenagers build Python and web apps, and adults build full-stack projects, always stating what the code must do and testing it before trusting it, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vibe coding classes',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#what', label: 'What vibe coding is' },
    { href: '#almost', label: 'Almost right' },
    { href: '#project', label: 'Property lesson' },
    { href: '#ages', label: 'Tools by age' },
    { href: '#think', label: 'Thinking, not copying' }
  ],
  eyebrow: 'Peru &middot; Vibe coding &middot; Ages 8 to adult',
  h1: 'Vibe coding classes in Peru',
  lede: 'Vibe coding means describing what you want and letting an AI write the code. It is the fastest way yet to build something that runs, and one of the easiest ways to build something that is quietly wrong. This page is for learners in Peru, and parents of younger ones, who want to build with AI and still understand what they built. It explains what vibe coding is, how many professional developers actually do it, why "almost right" is the problem worth solving, which AI coding tools each age may use, and a lesson in which a thousand random tests catch a bug that looked fine.',
  secondaryCta: { href: '#project', label: 'Try the 1,000-test lesson' },
  wa: 'Hello Modern Age Coders, we are in Peru and interested in your vibe coding classes. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; every class live and taught in English',
  spec: [
    ['Ages', '8 to 12, 13 to 17, adults'],
    ['Builds', 'Games, web apps, Python tools'],
    ['AI tools', 'Only within each vendor\'s age terms'],
    ['Core habit', 'State the rule, then test it'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'Modern Age Coders runs vibe coding classes for learners in Peru: live online lessons, taught in English, where children from 8, teenagers and adults build real projects with AI help, then check that the code does what they meant. Learners describe a project, use AI tools allowed for their age to draft it, and learn to state the rules the code must obey and test them, so they understand and can fix what they build. A mentor in India teaches a group of fifteen to twenty or one learner alone, at hours that suit the family in Peru.',

  picks: {
    eyebrow: 'One course for each age',
    h2: 'Three vibe coding courses',
    lede: 'The same idea at three levels: build quickly with AI, then make sure it is right. The tools and the amount of AI help change with age.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'VIC / 01', title: 'Vibe Coding for Kids', note: 'Ages 8 to 12. Scratch games and simple web pages, with the mentor driving any AI tool on a shared screen. Children describe ideas, test them and explain what each part does.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'VIC / 02', title: 'Vibe Coding for Teens', note: 'Ages 13 to 17. Python and web projects built with AI tools whose terms allow the student\'s age, with a parent\'s permission where required, and a test for every feature.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', code: 'VIC / 03', title: 'Vibe Coding for College', note: 'Ages 18 and over. Full-stack apps built with AI coding assistants, plus the data structures and algorithms you need to judge what they produce.' }
    ]
  },

  sections: [
    {
      id: 'what',
      eyebrow: 'What vibe coding is',
      h2: 'What is vibe coding, and do real developers do it?',
      lede: 'Vibe coding is building software by describing it to an AI in ordinary language and accepting the code it writes. Stack Overflow\'s 2025 Developer Survey defines it, following Wikipedia, as "the process of generating software from LLM prompts". Most professional developers say it is not part of their work.',
      body: [
        { kind: 'table', numCols: [1], caption: 'AI and vibe coding in the Stack Overflow Developer Survey 2025', head: ['Finding', 'Share'], rows: [
          ['Respondents using or planning to use AI tools in development (76% the year before)', '84%'],
          ['Professional developers using AI tools daily', '51%'],
          ['Respondents not vibe coding', '72%'],
          ['Respondents emphatic that vibe coding is not part of their work', '5%'],
          ['Developers whose biggest frustration is AI solutions that are "almost right, but not quite"', '66%']
        ] },
        { kind: 'source', html: 'Source: Stack Overflow, 2025 Developer Survey, AI section, read on 9 November 2026. The survey is global and answered by developers who chose to take part; it is not a Peru sample.' },
        { kind: 'two', mt: true,
          leftH3: 'Two things are true at once',
          left: [
            'Almost every developer now uses AI tools in some way: 84% are using or planning to use them, up from 76% a year earlier. Yet 72% say they are not vibe coding, and another 5% are emphatic about it.',
            'The difference is control. Professionals use AI to draft, suggest and explain, then read, test and own the result. Vibe coding in its pure form skips that step, which is fine for a weekend game and risky for anything that matters.'
          ],
          rightH3: 'What our classes take from each',
          right: [
            'From vibe coding: speed, and the joy of turning an idea into something that runs in an afternoon. That is why children and beginners love it, and why we use it.',
            'From professional practice: stating what the code must do, testing it, and being able to explain every part. Our learners vibe code, then prove it. That habit is what separates a learner who can build from one who can only prompt.'
          ] }
      ]
    },
    {
      id: 'almost',
      tint: 'tint',
      eyebrow: 'Almost right',
      h2: 'Why is "almost right" AI code a problem?',
      lede: 'Because it runs, looks reasonable and passes a quick glance, and then fails on a case nobody tried. In the same survey, 66% of developers named "AI solutions that are almost right, but not quite" as their biggest frustration with AI tools.',
      body: [
        { kind: 'two',
          leftH3: 'What developers report',
          left: [
            'The second-biggest frustration, cited by 45%, follows from the first: debugging AI-generated code takes more time. Code you did not write is harder to fix, especially when it is almost correct.',
            'Trust is low. More developers actively distrust the accuracy of AI tools (46%) than trust it (33%), and only 3% say they highly trust the output. Asked when they would still ask a person for help, 75% chose "When I don\'t trust AI\'s answers".'
          ],
          rightH3: 'What that means for a learner',
          right: [
            'If experienced developers distrust AI output, a beginner who accepts it without checking is in a weak position. The answer is not to avoid AI; it is to learn the checking skills professionals use.',
            'The most powerful of those skills is easy to teach and rarely taught to beginners: say exactly what must always be true about the output, then let the computer test it on hundreds of cases you would never think to try. That is the lesson below.'
          ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'How do you check AI-written code? A thousand random tests',
      lede: 'This is a lesson from our teen and adult vibe coding courses, and a simplified version runs with children. The task is ordinary: split a restaurant bill between friends, in whole cents. The AI-style answer looks right. A rule and a thousand random cases show it is not.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ask for the code.</strong> The learner asks an AI tool to split a bill of a given number of cents between a number of friends. A very common style of answer divides, rounds, and gives everyone the same share. We wrote that version ourselves, below, to stand in for it.',
          '<strong>State the rule before testing.</strong> Whatever the code does, two things must always be true: the shares must add back to the total, and no two people may pay more than one cent apart. Writing the rule down is the real skill; the code to check it is two lines.',
          '<strong>Let the computer try.</strong> Generate 1,000 random bills (up to 50,000 cents) and groups (1 to 12 people), with a fixed random seed so the result can be repeated, and check the rule on every one.'
        ] },
        { kind: 'code', label: 'An AI-style split, a checked split, and 1,000 random tests', lang: 'Python', code: CODE, note: 'The task wording, both functions and the random seed are ours. Run it with Python 3 and it prints the four lines below every time.' },
        { kind: 'code', label: 'Output', lang: 'Output', code: OUT, note: 'The generated-style version breaks the rule in 762 of 1,000 cases. Splitting 1,000 cents between three friends collects only 999.' },
        { kind: 'two', mt: true,
          leftH3: 'Why it looked fine',
          left: [
            'Try it with 1,200 cents and four friends and it is perfect: 300 each. Most people test with numbers that divide evenly, because those are the numbers that come to mind. The bug only appears when there is a remainder, which is three times out of four in our random cases.',
            'Rounding also hides the error in the other direction: sometimes the shares add up to more than the bill. A café that used this code would quietly over- or under-charge on most tables.'
          ],
          rightH3: 'Why the checked version works',
          right: [
            'It starts from the rule. <code>divmod</code> gives each person the whole-cent base share and counts the leftover cents; that many people pay one cent more. The shares always add back exactly, and never differ by more than one.',
            'The learner did not need to be cleverer than the AI. They needed to say what "correct" means, in one sentence, before looking at any code. That is a thinking skill, and it transfers to every program they will ever build or review.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 12, no code.</strong> Share 10 sweets between 3 friends so that nobody gets more than one extra. How many ways are there? What is the rule?',
          '<strong>Ages 13 to 17.</strong> Ask an AI tool your age allows for a function that finds the middle value of a list. Write the rule it must obey, then test it on 1,000 random lists, including empty ones.',
          '<strong>Adults.</strong> Pick a function from a project you vibe coded. Write one property that must always hold, and test it on random inputs. Report what you found in three English sentences.',
          '<strong>Everyone.</strong> Explain why testing with "nice" numbers is not enough, using this lesson as your example.'
        ] }
      ]
    },
    {
      id: 'ages',
      tint: 'tint',
      eyebrow: 'Tools by age',
      h2: 'Which AI coding tools can each age use?',
      lede: 'It depends on each vendor\'s terms, and many popular tools exclude children or teenagers. In our own audit of AI coding assistants, GitHub Copilot, with a minimum age of 13, was the only one of eight that cleared it.',
      body: [
        { kind: 'table', numCols: [], caption: 'AI coding tools and age, from the vendors\' own terms as we read them', head: ['Tool', 'What the terms say', 'Who uses it in our classes'], rows: [
          ['GitHub Copilot', 'A minimum age of 13', 'Teenagers and adults, after they can write the code alone'],
          ['ChatGPT', '13 and over; under 18 needs a parent or guardian\'s permission', 'Teenagers with a parent\'s permission; adults'],
          ['Replit AI', 'Adults; under 13 only with written parental consent; 13 to 17 not clearly covered', 'Adults only'],
          ['Claude', '18 and over', 'Adults only'],
          ['Scratch and plain Python', 'No AI account', 'Everyone; children work here, with the mentor running AI on screen']
        ] },
        { kind: 'source', html: 'Sources: GitHub terms of service, OpenAI terms of use, Replit terms of service and Anthropic consumer terms, as recorded in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>; read on 9 November 2026. Terms change; check the vendor\'s own page before signing up.' },
        { kind: 'p', mt: true, html: 'For children of 8 to 12, vibe coding in our classes means describing ideas aloud, watching the mentor ask an AI tool on a shared screen, and then rebuilding and testing the result themselves in Scratch or simple web code. No child creates an AI account. The excitement is the same; the account and the terms stay with the adult.' }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking, not copying',
      h2: 'Does vibe coding stop learners from thinking for themselves?',
      lede: 'It can, if nobody asks them to explain what they built. Our classes are designed around that risk: every project ends with the learner explaining, testing and changing the code without AI help.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Explain it back', p: 'After AI drafts a feature, the learner explains in English what each part does. If they cannot, they rebuild that part with the mentor until they can.' },
          { h3: 'Change it by hand', p: 'Each project includes a change the learner makes without AI: a new rule, a new level, a bug to fix. That is where understanding shows.' },
          { h3: 'Prove it works', p: 'Every feature has a stated rule and a test, as in the lesson above. Code nobody tested is not finished, however it was written.' }
        ] },
        { kind: 'p', mt: true, html: 'Competitions make the same point from the other side. Peru\'s Olympiad in Informatics, OPI, which UTEC runs free for all secundaria students in the country, prohibits generative AI for solving problems in its 2025 rules. A teenager who wants to compete has to reason and code alone. We are not connected with UTEC or the OPI; we simply make sure our vibe coding students can still code without the vibe.' },
        { kind: 'p', html: 'If you would like to read about vibe coding in Spanish first, our <a class="ag-inline-link" href="/vibe-coding-curso-en-ingles">vibe coding curso en inglés</a> page explains it for Peruvian families with a different lesson. Learners who want to go deeper into one language can continue with <a class="ag-inline-link" href="/curso-de-python-en-ingles-peru">Python in English</a> or <a class="ag-inline-link" href="/curso-de-desarrollo-web-en-ingles-peru">web development in English</a>.' }
      ]
    },
    {
      id: 'setup',
      tint: 'tint',
      eyebrow: 'At home',
      h2: 'What does a learner need for vibe coding classes?',
      lede: 'A laptop or desktop computer, a steady internet connection and a headset. Vibe coding still involves reading and editing code, which a phone screen makes very hard.',
      body: [
        { kind: 'two',
          leftH3: 'Why a computer matters',
          left: [
            'INEI\'s household survey for the second quarter of 2026 reports that nine in ten Peruvian internet users (90.2%, ages 6 and up) go online through a mobile phone, while 18.9% use a laptop and 14.0% a desktop computer. Many families have a phone for everyone and one computer, or none.',
            'For a live coding class, plan the computer first. A shared family laptop at a fixed hour works well; the mentor can work around the household timetable.'
          ],
          rightH3: 'English, and the clock',
          right: [
            'Classes are taught in English only. Mentors speak slowly, repeat in simpler words and put key terms in the chat, and Python looks identical whatever language a family speaks at dinner. We do not teach in Spanish.',
            'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. The Peru to India gap never changes, so a 17:00 class in Lima is always 03:30 the next morning in India, and a 09:00 class is always 19:30.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'From first prompt to code you can defend',
    lede: 'Our own stages for vibe coding learners. They decide which group a learner joins and what their progress notes report.',
    table: { numCols: [], caption: 'Vibe coding stages (ours)', head: ['Stage', 'The learner can', 'Shown by'], rows: [
      ['1. Describe', 'Describe a small project clearly in English', 'A one-paragraph plan'],
      ['2. Build', 'Get a working first version with AI help', 'A project that runs'],
      ['3. Explain', 'Say what each part of the code does', 'A walkthrough to the mentor'],
      ['4. State the rule', 'Write what must always be true about the output', 'One property per feature'],
      ['5. Test widely', 'Check that rule on many random inputs', 'The 1,000-test lesson, on their own code'],
      ['6. Change alone', 'Add or fix a feature without AI help', 'A change made live in class']
    ] },
    left: { h3: 'For learners', ps: [
      'If you cannot say what "correct" means, you cannot know whether the AI got it right.',
      'Test with ugly numbers, not just nice ones.'
    ] },
    right: { h3: 'For parents', ps: [
      'Stage 6 is the one to ask about. A learner who can change their code alone understands it.',
      'Progress notes list projects built, rules stated and bugs found.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses that go with vibe coding',
    lede: 'Each is live and in English, led by one mentor from start to finish.',
    bands: [
      { num: 'I', h3: 'Foundations for younger learners', sub: 'Ages 6 to 12', courses: [
        { code: 'VIC / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and stories built block by block.' },
        { code: 'VIC / KIDS / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Real websites, coded and published.' },
        { code: 'VIC / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python for children ready to type.' }
      ] },
      { num: 'II', h3: 'Depth for teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'VIC / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The whole language, start to advanced.' },
        { code: 'VIC / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'The thinking that lets you judge AI code.' },
        { code: 'VIC / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How the models behind AI tools learn.' }
      ] },
      { num: 'III', h3: 'Building for real', sub: '18 and over', courses: [
        { code: 'VIC / ADULT / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'AI coding agents, every change reviewed.' },
        { code: 'VIC / ADULT / 02', slug: 'python-web-development-django-flask-course', title: 'Python web development', blurb: 'Django and Flask apps, built properly.' },
        { code: 'VIC / ADULT / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git and GitHub', blurb: 'Track and review every change AI makes.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What happens in a live vibe coding class?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning in Peru', l: 'Evening in India, a comfortable teaching hour.' },
      { time: 'Evening in Peru', l: 'Early morning in India; possible with the right mentor.' },
      { time: 'One to one', l: 'A private class at a pace and hour you choose.' }
    ],
    cells: [
      { h3: 'Describe first', p: 'Every project starts with a plan in plain English.' },
      { h3: 'Build fast', p: 'AI drafts, within the learner\'s age rules.' },
      { h3: 'Rule and test', p: 'Each feature gets a stated rule and a test.' },
      { h3: 'Change by hand', p: 'Every project includes a change made without AI.' },
      { h3: 'Age groups', p: 'Children, teens and adults learn separately.' },
      { h3: 'Plain English', p: 'Short sentences; terms written in the chat.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'A selection of work from students on our longer courses. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Parents\' and students\' Google reviews, reproduced as written.',

  fees: {
    h2: 'Fees for vibe coding classes',
    lede: 'Classes are billed in US dollars and paid by card. Each charge reaches your account in soles after your bank converts it at its own rate, so monthly statements can differ by a little.',
    free: ['A free first class', 'Build and test a small project', 'No card asked for'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor every class', 'Two live classes a week', 'Monthly; stop any time'],
    one: ['A private mentor', 'Projects built around the learner\'s ideas', 'Class hours your family sets']
  },

  faq: {
    eyebrow: 'Families in Peru ask',
    h2: 'Vibe coding classes: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our vibe coding classes are live online and taught in English only. Mentors use short, clear sentences, adjust to each learner\'s accent and pace, and show everything on a shared screen, so learners with basic English settle in quickly.' },
      { q: 'What is vibe coding?', a: 'Building software by describing what you want to an AI tool and letting it write the code. Stack Overflow\'s 2025 survey uses Wikipedia\'s definition: "the process of generating software from LLM prompts". In our classes, learners also test and explain everything they build.' },
      { q: 'Can a child do vibe coding?', a: 'Yes, from about 8, in a supervised form. Children describe ideas, watch the mentor use AI on a shared screen, then rebuild and test the result in Scratch or simple web code. No child creates an AI account, because most AI tools set a minimum age of 13 or more.' },
      { q: 'Which AI tools will a teenager use?', a: 'Only tools whose terms allow their age, such as GitHub Copilot, which sets a minimum of 13, and ChatGPT with a parent\'s permission, as OpenAI requires under 18. Claude and Replit are used only by adults in our classes.' },
      { q: 'Will my child just copy what the AI writes?', a: 'No. Every project ends with the learner explaining the code, stating the rules it must obey, testing it, and making a change without AI help. If they cannot explain a part, they rebuild it with the mentor.' },
      { q: 'When are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is always ten and a half hours ahead of Lima, so a 16:30 class in Lima is 03:00 the next day in India.' },
      { q: 'Do professional developers really vibe code?', a: 'Most say they do not. In the Stack Overflow Developer Survey 2025, 72% of respondents said they were not vibe coding, though 84% were using or planning to use AI tools. Professionals use AI and then check its work, which is what we teach.' },
      { q: 'Can vibe coding help in programming olympiads?', a: 'Not during the contest: the OPI 2025 rules ban generative AI for solving problems. But stating rules and testing widely, as in our lesson, are exactly the habits competition coders need. We are not connected with UTEC or the OPI.' },
      { q: 'Is there a certificate?', a: 'Learners who complete a course receive our own certificate of completion. It is not a Peruvian school or university qualification, and we are not connected with MINEDU, any school or any AI company.' },
      { q: 'What does a learner need?', a: 'A laptop or desktop computer, a stable connection and a headset. AI tool accounts, where the learner\'s age allows, are set up during the course with a parent\'s involvement for under-18s.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More about learning with AI.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Everything we teach in Peru.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools a child, teen or adult may sign up for.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Our case for understanding over copying.' },
      { href: '/student-labs', label: 'Student labs', p: 'What our students build.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in one place.' }
    ]
  },

  start: {
    h2: 'Book a free vibe coding class',
    lede: 'In the trial, the learner describes a tiny project, watches it come to life with AI help, and then finds out whether it really works. The mentor sees how they think and how much English they follow, and suggests the right course and format.',
    readFirst: 'Want to know more before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through our classes, and the <a class="ag-inline-link" href="/courses">courses</a> page lists every syllabus.',
    note: 'Lessons run over live video, in English, led by mentors who work from India. A WhatsApp message in English usually gets the fastest answer.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Building with AI', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools and age' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/vibe-coding-curso-en-ingles', label: 'Vibe coding (español)' },
        { href: '/curso-de-python-en-ingles-peru', label: 'Python en inglés' },
        { href: '/curso-de-desarrollo-web-en-ingles-peru', label: 'Desarrollo web en inglés' }
      ] }
    ],
    bottomRight: 'Say what correct means, then test it'
  },

  personalityCss: `
.ag-root.ag-vic .ag-hero h1 { max-width: 16ch; letter-spacing: -0.02em; }
.ag-root.ag-vic .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-vic .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-vic .ag-code-note code { font-weight: 600; }
.ag-root.ag-vic .ag-table td:last-child { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Stack Overflow Developer Survey 2025, AI section (vibe coding, frustrations, trust); vendor terms of GitHub, OpenAI, Replit and Anthropic via our AI tools age audit; UTEC OPI home and 2025 rules; INEI TIC en los Hogares II Trimestre 2026. All read 9 November 2026. Merriam-Webster and Collins were blocked by Cloudflare and not used.',
    localProject: 'An original property-based testing lesson: an AI-style bill-splitting function (divide, round, equal shares) and a checked version built from a stated rule (shares add back to the total and differ by at most one cent); 1,000 random bills with seed 2026 break the generated-style version 762 times (first failure 7807 cents between 6) and the checked version never; 1,000 cents between three collects 999 versus 1000. Plus age-graded tasks. Lesson family: property-based testing of AI-written code.',
    requiredMentions: ['generated fails 762 of 1000', 'generated(1000, 3) -&gt; [333, 333, 333] sum 999', 'the process of generating software from LLM prompts', 'almost right, but not quite', 'Respondents not vibe coding', 'GitHub Copilot, with a minimum age of 13, was the only one of eight', 'only 3% say they highly trust the output', 'Test with ugly numbers, not just nice ones', 'Say what correct means, then test it'],
    sources: [
      { claim: '84% using or planning AI tools (76% prior year); 51% of professionals daily; 72% not vibe coding, 5% emphatic; definition via Wikipedia; 66% almost right; 45% debugging slower; 46% distrust, 33% trust, 3% highly trust; 75% ask a person when they distrust AI.', url: 'https://survey.stackoverflow.co/2025/ai' },
      { claim: 'GitHub Copilot minimum age 13; only one of eight coding assistants cleared in our audit.', url: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service' },
      { claim: 'Replit: adults, under 13 with written parental consent, 13 to 17 not clearly covered.', url: 'https://replit.com/terms-of-service' },
      { claim: 'ChatGPT 13+, parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'OPI free for secundaria; generative AI banned in the 2025 rules.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: '90.2% of internet users connect by phone; laptop 18.9%, desktop 14.0% (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' }
    ],
    rejectedClaims: [
      'A dictionary definition of vibe coding or a word-of-the-year claim: Merriam-Webster and Collins returned Cloudflare challenges; not retried, not used.',
      'That 23% of developers vibe code: the survey\'s other answer categories were not quoted, so the remainder is not printed.',
      'Any Peru-specific figure for AI coding tool use: none found; Stack Overflow figures are global and labelled so.',
      'Claude, Replit or Codex-and-Claude-Code for under-18s: refused under vendor terms.',
      'Job, grade or competition promises: none made.'
    ]
  }
};
