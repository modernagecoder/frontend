'use strict';
// Vibe coding and AI agents classes in Germany (ag- English door, Germany cluster P2 row DE041), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. Audience: teens 13 to 17 and adults. Honest limits: AI writes plausible code that can be
// wrong; the learner tests it. Under-18 learners never use Claude or any other 18+ tool.
// Spine: tests before trust. An original exercise in which a typical AI-style answer for checking a German postcode
// passes five of eight tests written before reading it.
// Sources (read raw 3 Nov 2026; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/vibe-coding-and-ai-agents-classes-germany/):
//  - Anthropic consumer terms: "You must be at least 18 years old or the minimum age required to consent to use the
//    Services in your location, whichever is higher."
//  - Cursor terms of service: "You must be at least the age of majority in your jurisdiction (e.g., 18 years old in the
//    United States) or 18 years old, whichever is higher, to use the Service."
//  - GitHub Terms of Service: "A User must be at least 13 years of age."; "If you are a resident of a country outside the
//    United States, your country's minimum age may be older".
//  - Regulation (EU) 2024/1689 (AI Act), via the EU Publications Office (32024R1689): Article 4 "Providers and deployers of
//    AI systems must take measures to ensure, as far as they can, a sufficient level of AI literacy of their staff and
//    other persons dealing with the operation and use of AI systems on their behalf"; definition (56) "'AI literacy'
//    means skills, knowledge and understanding ..."; Article 113 "It shall apply from 2 August 2026. However: (a)
//    Chapters I and II shall apply from 2 February 2025". Article 4 sits in Chapter I. Later amendments not checked.
//  - KMK, Bildung in der digitalen Welt (FACTS 102, 103): 2026 framework update with AI competences; 2024 recommendation
//    on AI in schools.
//  - Blocked, not retried: openai.com (HTTP 403), collinsdictionary.com (HTTP 403).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own example (scratchpad de/w/G7/vca/v1.py, v2.py, python3 -I): v1 prints "valid_postcode_ai passed 5 of 8 | failed:
// ['01067', ' 10115', '10_115']"; v2 adds "valid_postcode passed 8 of 8 | failed: []". int() drops a leading zero,
// ignores surrounding spaces and accepts underscores between digits.
// Lesson family: write the tests before you trust generated code.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# The kind of answer an AI assistant often gives (written by us to show a typical mistake)',
  'def valid_postcode_ai(code):',
  '    try:',
  '        n = int(code)',
  '    except ValueError:',
  '        return False',
  '    return 10000 <= n <= 99999',
  '',
  '# Our tests, written BEFORE reading the code: input -> the answer we expect',
  'tests = {',
  '    "10115": True, "80331": True, "01067": True,',
  '    "1234": False, "123456": False, "12a45": False,',
  '    " 10115": False, "10_115": False,',
  '}',
  '',
  'def check(fn):',
  '    failed = [code for code, want in tests.items() if fn(code) != want]',
  '    print(fn.__name__, "passed", len(tests) - len(failed), "of", len(tests), "| failed:", failed)',
  '',
  'check(valid_postcode_ai)'
].join('\n');

const V2 = [
  'def valid_postcode(code):',
  '    # exactly five characters, every one of them an ASCII digit 0 to 9',
  '    return len(code) == 5 and code.isascii() and code.isdigit()',
  '',
  'check(valid_postcode)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Vibe coding and AI agents classes' },
  slug: 'vibe-coding-and-ai-agents-classes-germany',
  code: 'vca',
  accent: '#5E5B00',
  accentRationale: 'Vibe coding and AI agents in Germany: a dark olive #5E5B00, apart from the plum, brown and violet of the sibling AI and summer pages; contrast on the paper #FBF8F2 above 5.7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Vibe coding and AI agents classes in Germany',
  title: 'Vibe Coding and AI Agents Classes in Germany, in English',
  description: 'Live vibe coding and AI agent classes in English for teens and adults in Germany: building with AI, testing what it writes, and keeping to each tool\'s age rules.',
  ogDescription: 'Build software with AI assistants and coding agents, and learn to catch what they get wrong. Live classes in English for teens and adults in Germany, with honest limits and tool age rules kept.',
  twitterDescription: 'Vibe coding and AI coding agents for teens and adults in Germany, live in English, with testing first.',
  pageName: 'Vibe Coding and AI Agents Classes in Germany',
  webPageDescription: 'A guide for teenagers and adults in Germany who want to build software with AI assistants and coding agents: what vibe coding can and cannot do, which tools allow which ages, what the EU AI Act says about AI literacy, and an original test-first exercise.',
  courseDescription: 'Live online vibe coding and AI agents classes in English for learners in Germany: teens from 13 build with age-appropriate AI tools and test every result; adults from 18 work with coding agents such as Codex and Claude Code; in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Vibe coding and AI agents',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#limits', label: 'Limits' },
    { href: '#ages', label: 'Ages' },
    { href: '#tests', label: 'Tests' },
    { href: '#rules', label: 'AI Act' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Vibe coding and AI agents &middot; Ages 13 and up',
  h1: 'Vibe coding and AI agents classes in Germany',
  lede: 'Describe an app in a sentence and an AI assistant will write it. That part is real, and it is why vibe coding caught on. The other part is less often mentioned: the code can look perfect and still be wrong, and the person who asked for it is the only one who can tell. These classes teach both halves, for teenagers and adults in Germany, with every AI tool used inside its own age rules.',
  secondaryCta: { href: '#tests', label: 'See the test-first exercise' },
  wa: 'Hello Modern Age Coders, I am in Germany and would like a free first class in vibe coding and AI agents, taught in English.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; AI writes, the learner checks',
  spec: [
    ['Teens', '13 to 17, with age-appropriate tools'],
    ['Adults', '18 and up, coding agents included'],
    ['Method', 'Tests first, then trust'],
    ['Language', 'English, matched to the learner'],
    ['Format', 'Group or one to one, live'],
    ['First class', 'Free']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Modern Age Coders teaches vibe coding and AI agents to learners in Germany live online, in English. Teenagers from 13 build web and Python projects with the AI tools their age permits, and adults from 18 add coding agents such as Codex and Claude Code. Whatever the age, the AI\'s code gets tested before it is trusted. Learners keep one mentor, who adapts to their pace and accent, alone or with fifteen to twenty others.',

  picks: {
    eyebrow: 'Choose by age',
    h2: 'Which vibe coding course fits which learner?',
    lede: 'The split is by age, because the tools\' own terms are. One course for teenagers, two for adults.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'VCA / 01', title: 'Vibe Coding for Teens', note: 'Ages 13 to 17. Python and web projects built with AI help. For learners in Germany under 18 we use only tools whose terms allow their age, never Claude.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', code: 'VCA / 02', title: 'Vibe Coding for Adults', note: 'Ages 18 and up. Full-stack projects, AI features and the data structures that let you judge AI-written code.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'VCA / 03', title: 'AI Coding Agents for Professionals', note: 'Adults only. Planning work for Codex and Claude Code, reviewing their changes and testing before anything ships.' }
    ]
  },

  sections: [
    {
      id: 'limits',
      eyebrow: 'Honest limits',
      h2: 'What can vibe coding really do, and what can it not?',
      lede: 'Vibe coding means describing what you want and letting an AI write the code. AI agents go one step further: they plan, edit several files and run commands on their own. Both are useful. Neither removes the need to understand.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where AI help is strong and where the learner still decides (our teaching summary)', head: ['Task', 'AI is usually good at', 'The learner still has to'], rows: [
          ['Starting a project', 'A working first version in minutes', 'Say precisely what "working" means'],
          ['Everyday code', 'Common patterns, boilerplate, small functions', 'Spot the case the AI did not think of'],
          ['Fixing errors', 'Explaining a message, suggesting a fix', 'Check the fix did not break something else'],
          ['Larger changes by an agent', 'Edits across many files', 'Review every change before accepting it'],
          ['Anything with users or money', 'Drafting the code', 'Own the result, its security and its mistakes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why learners still need to code',
          left: [
            'An AI assistant predicts plausible code. Plausible and correct are not the same, and the difference shows up in exactly the cases nobody asked about: an empty input, a leading zero, a user who types a space.',
            'A learner who cannot read the code cannot judge it. So every course here still teaches Python, JavaScript and how programs work, with AI as a fast assistant rather than a replacement.'
          ],
          rightH3: 'What we teach instead of copying',
          right: [
            'Write down what the program must do before asking for it. Write tests from that description. Read the AI\'s answer line by line. Run the tests. Ask the AI to explain anything unclear, then check the explanation.',
            'That routine turns vibe coding from a gamble into engineering, and it is the same routine professional teams use with coding agents.'
          ] }
      ]
    },
    {
      id: 'ages',
      tint: 'tint',
      eyebrow: 'Tool age rules',
      h2: 'Which AI coding tools can a teenager use?',
      lede: 'Each company sets a minimum age in its own terms. For an AI coding class with teenagers, those terms decide which tools are allowed, so we read them first.',
      body: [
        { kind: 'table', numCols: [], caption: 'What each provider\'s terms say about age, as read on 3 November 2026', head: ['Tool', 'What the terms say', 'In our classes'], rows: [
          ['Claude and Claude Code (Anthropic)', 'At least 18, or the local age of consent to the service if that is higher', 'Adults only; never with anyone under 18'],
          ['Cursor', 'At least the age of majority in your jurisdiction or 18, whichever is higher', 'Adults only'],
          ['GitHub, including Copilot', 'A user must be at least 13; a country\'s own minimum may be older', 'From 13, within those terms'],
          ['Python, an editor and a browser', 'No age limit', 'Every learner, from the first class']
        ] },
        { kind: 'source', html: 'Sources: Anthropic consumer terms; Cursor terms of service; GitHub Terms of Service. Each read in full on 3 November 2026. Other tools, ChatGPT among them, are covered in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>, with the date each rule was read.' },
        { kind: 'p', mt: true, html: 'Two of the best-known AI coding tools are for adults only. Anthropic sets 18 as the floor for Claude, and Cursor does the same for its editor. So our teen classes in Germany never use either, whatever a course outline elsewhere may list, and a parent will never be asked to sign up a teenager for them. Teenagers vibe code with tools whose terms allow their age, and with plain Python, which needs no account at all. Our adult agents course uses Claude Code and Codex, and it is open to learners aged 18 and over only.' }
      ]
    },
    {
      id: 'tests',
      eyebrow: 'Worked example, ours',
      h2: 'How do you know if AI-written code is right?',
      lede: 'You decide what "right" means before you read the code, and write it down as tests. Here is the exercise our learners do first, on a task that sounds trivial: checking a German postcode.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'A form asks for a German postcode. The program should accept any five digits and refuse everything else. That is a format check only; whether the postcode actually exists is another question.',
            'Before anyone looks at code, the learner writes eight test cases: three good codes, one with a leading zero among them, and five bad ones, including a space and an underscore.'
          ],
          rightH3: 'The AI-style answer',
          right: [
            'The first function below is the kind of answer AI assistants often give. We wrote it ourselves to show the pattern: turn the text into a number, then check the number is between 10000 and 99999.',
            'It is short, readable and looks finished. Most people would accept it.'
          ] },
        { kind: 'code', label: 'Version 1: tests first, then the AI-style function', lang: 'Python', code: V1, note: 'It prints <code>valid_postcode_ai passed 5 of 8 | failed: [\'01067\', \' 10115\', \'10_115\']</code>.' },
        { kind: 'p', mt: true, html: 'Three failures, each with a different cause. A code that starts with 0, such as 01067, becomes the number 1067, which is below 10000, so a perfectly valid five-digit code is refused. A code with a space in front is accepted, because Python\'s int quietly ignores the space. And 10_115 is accepted too, because Python allows underscores between digits in numbers. None of these show up if you test the function with one ordinary postcode, which is what most people do.' },
        { kind: 'code', label: 'Version 2: check the text itself, not a number made from it', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>valid_postcode passed 8 of 8 | failed: []</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Why the AI-style answer failed three tests (our example; Python 3 output from 3 November 2026)', head: ['Input', 'AI-style answer', 'Expected', 'Why it went wrong'], rows: [
          ['01067', 'Refused', 'Accepted', 'Turning text into a number drops the leading zero'],
          [' 10115', 'Accepted', 'Refused', 'int() ignores spaces around the digits'],
          ['10_115', 'Accepted', 'Refused', 'int() allows underscores between digits']
        ] },
        { kind: 'p', mt: true, html: 'Why does the fixed version also check isascii? Because Python\'s isdigit accepts digits from other writing systems too, and a German postcode field should not. A learner who asks an AI "is this correct?" about Version 1 may well be told yes. A learner who wrote the eight tests first knows the answer in a second. With agents the lesson scales up: an agent can change twenty files in a minute, and the tests are what tell you whether you can keep them.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Write tests first.</strong> Pick a small task, a phone number, a date or an email, and write ten tests before asking any AI for code.',
          '<strong>Ask and check.</strong> Get an answer from an AI tool you are allowed to use and run your tests against it. Count the failures.',
          '<strong>Break the fix.</strong> Find an input that Version 2 handles in a way you think is wrong, and argue for your view.',
          '<strong>Adults with agents.</strong> Give a coding agent the tests and the task together, and review its change against the tests before accepting it.'
        ] }
      ]
    },
    {
      id: 'rules',
      tint: 'tint',
      eyebrow: 'Rules in Europe and Germany',
      h2: 'What does the EU AI Act say about AI skills?',
      lede: 'It contains an article on AI literacy. Here is what the text says; it is not advice on how it applies to you or your employer.',
      body: [
        { kind: 'two',
          leftH3: 'The AI Act',
          left: [
            'Article 4 of Regulation (EU) 2024/1689, the AI Act, says that providers and deployers of AI systems must take measures to ensure, as far as they can, a sufficient level of AI literacy of their staff and of other people operating or using AI systems on their behalf. The regulation defines AI literacy as the skills, knowledge and understanding needed to use AI systems in an informed way and to be aware of their opportunities and risks.',
            'Its final article says the regulation applies from 2 August 2026, and that Chapters I and II, which include Article 4, apply from 2 February 2025. We read the text as published in 2024 and did not check later amendments.'
          ],
          rightH3: 'German schools',
          right: [
            'For schools, the KMK, the conference of the Länder education ministers, published a recommendation on AI in schools in 2024 and in 2026 added AI-related competences to its framework Bildung in der digitalen Welt.',
            'None of this makes anyone a programmer. It does mean that understanding how AI produces its answers, and when not to trust them, is now treated as a basic skill at school and at work.'
          ] },
        { kind: 'source', html: 'Sources: Regulation (EU) 2024/1689, Articles 3(56), 4 and 113, read on 3 November 2026 through the EU Publications Office; KMK, Bildung in der digitalen Welt. We are not lawyers, we give no legal advice, and we are not connected with the European Commission or the KMK.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are the classes in German time?',
      lede: 'Teenagers mostly book after lessons end or on Saturdays and Sundays; adults pick lunchtime, early evening or a weekend morning. India, where the mentors are, is ahead of Germany.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample times in Germany and in India', head: ['Germany', 'India, winter (until 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['13:30', '18:00', '17:00'],
          ['17:45', '22:15', '21:15'],
          ['Saturday 14:00', '18:30', '17:30'],
          ['Sunday 09:15', '13:45', '12:45']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz puts Germany one hour ahead of UTC (MEZ) through the winter and two hours ahead (MESZ) through the summer. Winter time began on 25 October 2026; summer time returns on 28 March 2027. India keeps UTC+5:30 throughout. Example rows only; no group time is promised.' },
        { kind: 'p', mt: true, html: 'Trial slots are offered in whatever time zone your device uses. Adults working full time often choose one to one, so that a lesson can move when a meeting runs late.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first prompt to code you can stand behind',
    lede: 'Our own milestones for vibe coding and agent work, used to place learners and to report progress.',
    table: { caption: 'Our milestones for building with AI', head: ['Milestone', 'Often reached', 'What the learner shows'], rows: [
      ['1. Read code', 'First weeks', 'Explain, line by line, a short program an AI wrote'],
      ['2. Test first', 'Month 1 to 2', 'Write tests from a description before reading any code'],
      ['3. Build with help', 'Months 2 to 4', 'Build a small web or Python project with AI, every test passing'],
      ['4. Review', 'Months 4 to 6', 'Find and fix the mistakes in AI-written code without being told where they are'],
      ['5. Agents (18+)', 'Months 6 and up', 'Plan work for a coding agent, review its changes and keep the project tested']
    ] },
    left: { h3: 'For teens', ps: [
      'If the AI\'s code passes every test you wrote, write a harder test.',
      'Use only tools your age is allowed. A good mentor will never ask you to break a tool\'s terms.'
    ] },
    right: { h3: 'For adults', ps: [
      'An agent\'s change is a proposal. Read it as if a stranger had written it, because one did.',
      'Keep the tests in the project, not in your head. They are what lets you hand work to an agent safely.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses around AI-assisted building',
    lede: 'Live, in English, with a regular mentor, in a group or one to one. Courses marked for adults are for learners aged 18 and over only.',
    bands: [
      { num: 'I', h3: 'Teen foundations', sub: 'Ages 13 to 17', courses: [
        { code: 'VCA / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language to read AI output in.' },
        { code: 'VCA / TEEN / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Tracking every change, yours or an AI\'s.' },
        { code: 'VCA / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic that no tool can do for you.' }
      ] },
      { num: 'II', h3: 'Adults who build', sub: 'Ages 18 and up', courses: [
        { code: 'VCA / BUILD / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'React, Node.js and deployment.' },
        { code: 'VCA / BUILD / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation and AI', blurb: 'Scripts and AI services that do real work.' },
        { code: 'VCA / BUILD / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'LLMs, retrieval and agents explained.' }
      ] },
      { num: 'III', h3: 'Agents at work', sub: 'Adults, one to one', courses: [
        { code: 'VCA / WORK / 01', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Gemini Enterprise agents', blurb: 'Agents on Google\'s business platform.' },
        { code: 'VCA / WORK / 02', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Copilot Studio agents', blurb: 'Agents for Microsoft 365 teams.' },
        { code: 'VCA / WORK / 03', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial intelligence', blurb: 'Search, logic and how agents decide.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live vibe coding classes work in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Midday', l: 'Lunchtime slots for adults, from about 13:00 German time.' },
      { time: 'After school', l: 'Late afternoon and early evening for teens.' },
      { time: 'One to one', l: 'A time you agree with your mentor, weekends too.' }
    ],
    cells: [
      { h3: 'Tests before trust', p: 'Every AI answer is checked against tests.' },
      { h3: 'Code you can read', p: 'Python and JavaScript taught properly.' },
      { h3: 'Unhurried English', p: 'Explained again whenever needed.' },
      { h3: 'One mentor', p: 'The same reviewer every week.' },
      { h3: 'Ages respected', p: 'No 18+ tools for anyone under 18.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Some projects by our students in several countries; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Students and parents reviewed us on Google; here are their words, untouched.',

  fees: {
    h2: 'Fees for vibe coding and AI agents classes in Germany',
    lede: 'A month of eight live classes has one fee. We display it in euro at the European Central Bank reference rate and collect it in US dollars, which means your bank handles the conversion and the euro figure on your statement may not match it exactly.',
    free: ['A free first class', 'A short test-first task at your level', 'No card required'],
    group: ['Fifteen to twenty learners at a similar stage', 'The same mentor throughout', 'Two live classes a week', 'Monthly, cancel any month'],
    one: ['You and one mentor', 'Your own project and tools, within their age rules', 'Times arranged around work or school']
  },

  faq: {
    eyebrow: 'Learners in Germany ask',
    h2: 'Vibe coding and AI agents in Germany: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, always live. Mentors work from India and adjust to how fast you learn and how you speak. Prompts, code and AI tools mostly work in English anyway, so the language of the class matches the language of the work.' },
      { q: 'What is vibe coding?', a: 'Building software by describing what you want to an AI assistant and letting it write the code. It is fast for first versions, and it still needs a person who can read, test and fix the result.' },
      { q: 'What is an AI coding agent?', a: 'An AI tool that does more than suggest lines: it plans a task, edits several files and can run commands. Codex and Claude Code are examples. Our agents course is for adults aged 18 and over only.' },
      { q: 'Will my teenager use Claude?', a: 'No. Anthropic\'s terms require users to be at least 18, so we never use Claude or Claude Code with anyone under 18. Cursor\'s terms also require 18. Teenagers build with tools whose terms allow their age, such as GitHub from 13, and with plain Python.' },
      { q: 'Do I need to know how to code first?', a: 'No. Every course starts with reading and writing real code, because judging AI-written code needs that. Learners who already code are started at a later point once the trial lesson shows their level.' },
      { q: 'Can AI-written code be trusted?', a: 'Only after it has been tested. In the exercise on this page, a typical AI-style function passes five of eight tests that were written before reading it. That is normal, and it is why we teach tests first.' },
      { q: 'What does the EU AI Act say about AI skills?', a: 'Article 4 of Regulation (EU) 2024/1689 asks providers and deployers of AI systems to ensure, as far as they can, a sufficient level of AI literacy among their staff. We describe the text only and give no legal advice.' },
      { q: 'At what times do the classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Adults often choose lunchtime or early evening, teens after school.' },
      { q: 'Which currency are fees charged in?', a: 'Fees are shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so your statement may differ slightly. The first class is free.' },
      { q: 'Group or one to one?', a: 'A group of fifteen to twenty suits steady learning with others. One to one suits a learner with their own project, a busy job or a specific tool to master within its age rules.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'Related pages',
    lede: 'Further pages on AI, tools and learning in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Building models rather than prompting them.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages from each provider\'s terms.' },
      { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding and AI agents in Canada', p: 'The same subject for learners in Canada.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'School Informatik support, in German.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class in vibe coding',
    lede: 'The mentor asks what you want to build, gives you a short test-first task and suggests the course that fits your age and goals. In English, at your pace.',
    readFirst: 'Curious about the method? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains it, and <a class="ag-inline-link" href="/courses">the course list</a> shows everything else.',
    note: 'Teaching happens live over video, in English, with mentors who work from India. For quick questions, message us on WhatsApp in English.',
    formNote: 'There is no charge for the first class and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'AI and coding', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Tests before trust'
  },

  personalityCss: `
.ag-root.ag-vca .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-vca .ag-capsule { border-left-width: 4px; }
.ag-root.ag-vca .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-vca .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-vca .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Anthropic consumer terms; Cursor terms of service; GitHub Terms of Service; Regulation (EU) 2024/1689 (AI Act) Articles 3(56), 4 and 113 via the EU Publications Office; KMK Bildung in der digitalen Welt; Einheitenzeitgesetz. Read 3 November 2026.',
    localProject: 'Tests before trust: an original Python exercise in which eight tests written before reading the code catch three faults in a typical AI-style German postcode check (leading zero 01067 refused, " 10115" and "10_115" accepted, because int() drops zeros, ignores spaces and allows underscores); the text-based fix passes 8 of 8. Lesson family: write the tests before you trust generated code.',
    requiredMentions: ['valid_postcode_ai passed 5 of 8 | failed:', 'valid_postcode passed 8 of 8 | failed: []', 'int() allows underscores between digits', 'Regulation (EU) 2024/1689', 'Chapters I and II, which include Article 4, apply from 2 February 2025', 'A user must be at least 13; a country\'s own minimum may be older', 'Tests before trust', 'or 18, whichever is higher'],
    sources: [
      { claim: 'Claude minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Cursor minimum age: age of majority or 18, whichever is higher.', url: 'https://cursor.com/terms-of-service' },
      { claim: 'GitHub users must be at least 13.', url: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service' },
      { claim: 'AI Act Article 4 AI literacy and Article 113 application dates.', url: 'http://publications.europa.eu/resource/celex/32024R1689' },
      { claim: 'KMK 2024 AI recommendation and 2026 framework update.', url: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt.html' }
    ],
    rejectedClaims: [
      'Course JSON for vibe-coding-for-teens lists Claude API and Cursor, both 18+ under their terms: this page states that under-18 learners in Germany never use them; flagged to the owner.',
      'Who coined "vibe coding" and any word-of-the-year claim: collinsdictionary.com returned HTTP 403, not retried; not stated.',
      'ChatGPT age rule: openai.com returned HTTP 403; referred to our AI tools age guide only.',
      'AI Act amendments after the 2024 text, and how Article 4 applies to any reader: not checked, no legal advice given.',
      'Any job or salary promise from AI skills: none made.'
    ]
  }
};
