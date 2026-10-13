'use strict';
// Girls' Programming Network: next steps (ag- door, Australia cluster Phase 3, row 101).
// Facts read raw on 7 October 2026 at girlsprogramming.network (curl default agent): home page (free,
// full-day programming workshops each school term for high school students, run by volunteer tutors;
// nodes Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide, Brisbane), GPN Values, GPN Junior
// (primary Years 3 to 6 in Sydney; Years 9 to 12 past attendees invited to tutor) and More
// Opportunities (install the latest Python 3; Grok Learning Year 4 up, Scratch Year 3 up, MakeCode Year 4
// onward, Khan Academy Year 6 up, ECU programs Years 7 to 12). GPN is described only in its own words.
// Spine: don't repeat yourself, a copied block becomes a function with parameters (family checked free
// site-wide on 7 October 2026; the quiz program is ours). Independent of GPN.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'AFTER A GPN WORKSHOP', label: 'Girls\' Programming Network: next steps', blurb: 'What Girls\' Programming Network workshops offer, and how to keep coding between them.' },
  slug: 'girls-programming-network-next-step-australia',
  code: 'gpns',
  accent: '#504098',
  accentRationale: 'Girls\' Programming Network next steps: a soft blue violet chosen by hand, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Girls\' Programming Network: next steps',
  title: 'After a Girls\' Programming Network Workshop: Next Steps',
  description: 'What Girls\' Programming Network workshops offer in Australia, the cities they run in, and practical ways to keep coding in Python between workshops.',
  ogDescription: 'A guide for students who have been to a Girls\' Programming Network workshop, or want to: what GPN runs and where, and how to turn a great day of coding into a steady habit.',
  twitterDescription: 'After a Girls\' Programming Network workshop: where GPN runs and how to keep coding between events.',
  pageName: 'Girls\' Programming Network Next Steps',
  webPageDescription: 'A guide for Australian students and families about Girls\' Programming Network: its free full-day workshops, the cities where it runs, GPN Junior, tutoring opportunities, the further resources GPN itself recommends, and a worked Python lesson on turning repeated code into a function.',
  courseDescription: 'Live online Python and coding classes for Australian students who want to keep programming between workshops, including a course designed for girls and women.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Girls\' Programming Network next steps',
  navLinks: [
    { href: '#about', label: 'About GPN' },
    { href: '#between', label: 'Between workshops' },
    { href: '#dry', label: 'Python lesson' },
    { href: '#pathway', label: 'A pathway' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Primary and high school &middot; Checked at Girls\' Programming Network',
  h1: 'After a Girls\' Programming Network workshop',
  lede: 'A Girls\' Programming Network workshop is a full day of building something real in code, alongside mentors and new friends, and many students leave wanting more. The gap between one workshop and the next is a whole school term, which is long enough for new skills to fade. This page explains what GPN runs and where, in the organisers\' own words, points to the resources GPN itself recommends, and then sets out a simple way to keep coding between events, including one Python habit that makes every project easier to grow. We are independent of GPN and admire what it does.',
  secondaryCta: { href: '#dry', label: 'Try the Python lesson' },
  wa: 'Hello Modern Age Coders, I would like a free Python class for a student who has been to a Girls\' Programming Network workshop.',
  heroNote: 'Checked at girlsprogramming.network on 7 October 2026 &middot; Independent of GPN &middot; Keep the coding going',
  spec: [
    ['Organisation', 'Girls\' Programming Network (GPN)'],
    ['Workshops', 'Free, full day, each school term'],
    ['Main program', 'High school students'],
    ['GPN Junior', 'Primary Years 3 to 6, Sydney'],
    ['Nodes', 'Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide, Brisbane'],
    ['Run by', 'Volunteer tutors'],
    ['We provide', 'Weekly Python and coding classes'],
    ['We are not', 'Part of GPN']
  ],
  capsuleQ: 'In short',
  capsule: 'Girls\' Programming Network runs free, full-day programming workshops each school term around Australia, which it describes as coding workshops for high school girls and gender minorities, hosted by volunteer technologists and teachers. It has nodes in Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide and Brisbane, and GPN Junior for primary Years 3 to 6 in Sydney. Between workshops, regular practice keeps the skills growing.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for keeping the coding going',
    lede: 'Python is the natural next step for many GPN students, so these lead there.',
    items: [
      { course: 'princess-coders-complete-coding-masterclass', code: 'GPN / 01', title: 'Princess Coders', note: 'Our coding course designed for girls and women, from complete beginner upwards.' },
      { course: 'python-complete-masterclass-teens', code: 'GPN / 02', title: 'Python for teens', note: 'A full path from first programs to structured projects for high school students.' },
      { course: 'python-ai-kids-masterclass', code: 'GPN / 03', title: 'Python and AI for kids', note: 'For primary students coming from GPN Junior who are ready for text code.' }
    ]
  },

  sections: [
    {
      id: 'about', tint: 'tint', eyebrow: 'About GPN',
      h2: 'What Girls\' Programming Network runs, and where',
      lede: 'Everything below is taken from GPN\'s own site, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Girls\' Programming Network at a glance, from the organisers', head: ['What', 'Details'], rows: [
          ['Workshops', 'Free, full-day programming workshops each school term, hosted by local technologists and teachers'],
          ['Who they are for', 'In GPN\'s words, "Coding workshops for high school girls and gender minorities", for beginners and experienced coders alike'],
          ['Where', 'Nodes in Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide and Brisbane'],
          ['GPN Junior', 'A program for primary school students in Years 3 to 6, in Sydney'],
          ['Tutors', 'Volunteers: university students, IT professionals, teachers, parents and hobbyist coders'],
          ['Tutoring path', 'High school students in Years 9 to 12 who have attended a main GPN event can be invited to tutor']
        ] },
        { kind: 'two', mt: true,
          left: [
            'GPN lists six values: fun, aspirational and relevant, challenging, diverse, social, and network. Its workshops mix learning with games, computing puzzles, mentors and new friends, and it says each student will be given an accessible challenge whether it is their first time coding or not.',
            'GPN workshops are run by volunteer tutors, and students who keep coding can return as tutors from Year 9, which GPN presents as a way to build coding, public speaking and leadership skills.'
          ],
          right: [
            'GPN\'s own "more opportunities" page suggests installing the latest Python 3 at home, and lists places to keep learning, including Grok Learning from Year 4, Scratch from Year 3, MakeCode from Year 4 and Khan Academy from Year 6.',
            'Workshop dates are announced by each node. GPN invites students to find their nearest node and join its mailing list to hear about the next event.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.girlsprogramming.network/" rel="noopener" target="_blank">Girls\' Programming Network</a>; <a class="ag-inline-link" href="https://www.girlsprogramming.network/junior" rel="noopener" target="_blank">GPN Junior</a>; <a class="ag-inline-link" href="https://www.girlsprogramming.network/more-opportunities" rel="noopener" target="_blank">More opportunities</a>; <a class="ag-inline-link" href="https://www.girlsprogramming.network/gpn-values" rel="noopener" target="_blank">GPN values</a>. Read 7 October 2026. We are not part of GPN.' }
      ]
    },
    {
      id: 'between', tint: 'deep', eyebrow: 'Between workshops',
      h2: 'Turning one great day into a steady habit',
      lede: 'A school term is roughly ten weeks. Without practice, much of a workshop\'s new learning fades long before the next one. Small, regular sessions keep it alive.',
      body: [
        { kind: 'table', caption: 'A simple between-workshops plan, about an hour a week', head: ['Week', 'Do this', 'Why it helps'], rows: [
          ['1', 'Rebuild the workshop project from memory, without looking', 'Shows exactly which parts were really understood'],
          ['2 and 3', 'Change it: add a feature, alter the rules, new text', 'Changing code teaches more than copying it'],
          ['4 and 5', 'Start a small project of your own choosing', 'Ownership keeps motivation high'],
          ['6 and 7', 'Tidy it up: names, functions, comments', 'Makes the code easy to grow (see the lesson below)'],
          ['8 to 10', 'Show it to someone and explain how it works', 'Explaining is the fastest way to find gaps']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The plan works with any of the free tools GPN recommends. What matters is regularity: an hour every week does more than one long session before the next workshop.',
            'A short coding journal helps too: one line per session saying what was built and what was confusing. By the next workshop, the confusing items make a ready list of questions for a tutor.'
          ],
          right: [
            'Some students want a teacher between workshops, especially once their own projects grow beyond what a single day covers. That is where weekly classes can sit alongside GPN rather than replace it.',
            'Students in Year 9 and above can also aim to return as GPN tutors. Teaching a concept is a powerful way to master it.'
          ] }
      ]
    },
    {
      id: 'dry', tint: 'tint', eyebrow: 'Worked lesson',
      h2: 'Don\'t repeat yourself: turning copied code into a function',
      lede: 'Workshop projects grow fast, and fast-growing code is often copied and pasted. One idea keeps it manageable. The quiz program below is our own example.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The copied version', p: 'A Python quiz asks three questions. For each, it prints the question, reads an answer with input(), compares it with the right answer, and prints "Correct" or "Not quite". Each question takes five lines, copied three times.' },
          { h3: 'The problem', p: 'A student notices that "Paris" is marked wrong when someone types "paris". The fix, comparing answers in lower case, has to be made in three places. Miss one and the bug survives.' },
          { h3: 'The function version', p: 'The five lines become one function, ask(question, answer), with the question and answer as parameters. The questions go in a list, and a loop calls the function for each one.' }
        ] },
        { kind: 'table', mt: true, caption: 'Copied blocks compared with one function, as the quiz grows (counts for our example)', head: ['Task', 'Copied blocks', 'One function and a list'], numCols: [1, 2], rows: [
          ['Lines of code for 3 questions', '15', '13'],
          ['Lines added for a 4th question', '5', '1'],
          ['Lines of code for 10 questions', '50', '20'],
          ['Places to edit to fix the capital-letter bug', '3 (or 10 with 10 questions)', '1'],
          ['Places to edit to change the "Correct" message', '3 (or 10 with 10 questions)', '1']
        ] },
        { kind: 'p', mt: true, text: 'In the function version, the function itself is six lines, the list of questions takes one line per question plus an opening and a closing line, and the loop is two lines. At three questions the saving is small; at ten it is large, and the real benefit is that every improvement, such as ignoring capital letters or changing a message, happens once and applies everywhere. This is the principle programmers call "don\'t repeat yourself". A useful rule for students: if a block of code has been copied a second time, stop and ask whether it should become a function, and what should be its parameters.' },
        { kind: 'two', mt: true,
          leftH3: 'Finding the parameters',
          left: [
            'Compare the copied blocks side by side and highlight what differs between them. Here, only the question text and the right answer change; everything else is identical. The parts that differ become the parameters, and the parts that stay the same become the function body.',
            'That comparison is a skill worth practising on its own, with any project that has grown by copying.'
          ],
          rightH3: 'Why it matters later',
          right: [
            'Every larger program, from a game to a website, is built from functions that are called many times with different inputs. Learning to spot repetition early makes the step to bigger projects much smoother.',
            'It also makes code easier to share with a tutor or teammate, because a named function says what it does in a way five copied lines never can.'
          ] }
      ]
    },
    {
      id: 'pathway', tint: '', eyebrow: 'A pathway',
      h2: 'How weekly classes can sit alongside GPN',
      lede: 'GPN offers a free, social day of coding each term. Weekly classes can fill the weeks in between with steady progress.',
      body: [
        { kind: 'two',
          left: [
            'Our classes pick up where a workshop leaves off: Python fundamentals, functions and data, then small projects the student designs. A student can bring a workshop project to class and grow it with a teacher.',
            'Princess Coders, our course designed for girls and women, runs from complete beginner level, and our Python courses for kids and teens cover the same ground at each age.'
          ],
          right: [
            'We are not part of GPN and do not run its workshops or speak for it. Families should look to GPN directly for workshop dates and eligibility.',
            'We do not promise particular outcomes. Our aim is steady skill and confidence, measured by what a student can build and explain.'
          ] },
        { kind: 'table', mt: true, caption: 'A term of weekly classes alongside GPN workshops', head: ['Weeks', 'Focus', 'Sign of progress'], rows: [
          ['1 and 2', 'Variables, input and decisions', 'Writes a short interactive program unaided'],
          ['3 and 4', 'Loops and lists', 'Repeats work with a loop instead of copying'],
          ['5 and 6', 'Functions and parameters', 'Turns a repeated block into a function'],
          ['7 and 8', 'A small project of her own design', 'Plans and builds a working first version'],
          ['9 and 10', 'Improving and presenting', 'Explains the project and one design choice']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a programmer',
    h2: 'Four rungs from first workshop to tutor',
    lede: 'Every student moves at her own pace; these rungs describe the order.',
    table: { caption: 'From a first workshop to helping others learn', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 3 to 6', '1. Enjoys making things', 'Finishes a small project in Scratch or blocks'],
      ['Years 7 and 8', '2. Writes Python', 'Builds a short program with input, decisions and loops'],
      ['Years 8 to 10', '3. Structures code', 'Uses functions and lists to keep projects tidy'],
      ['Years 9 to 12', '4. Teaches others', 'Explains concepts clearly enough to tutor a beginner']
    ] },
    left: { h3: 'If motivation dips', ps: [
      'Switch to a project that matters to her: a game, a quiz about a favourite topic, a tool for a hobby.',
      'Code with a friend. GPN\'s emphasis on the social side of coding is worth copying at home.'
    ] },
    right: { h3: 'Related reading', ps: [
      'For moving from blocks to text, see <a class="ag-inline-link" href="/after-scratch-next-step-python-australia">after Scratch, the next step is Python</a>.',
      'Students who enjoy building might try <a class="ag-inline-link" href="/young-ict-explorers-project-help">Young ICT Explorers</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students who want more coding',
    lede: 'Grouped by stage. Every card opens its full course outline.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Primary and early secondary', courses: [
        { code: 'GPN / SO / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Projects in blocks, from Year 3.' },
        { code: 'GPN / SO / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first text language.' },
        { code: 'GPN / SO / 03', slug: 'princess-coders-complete-coding-masterclass', title: 'Princess Coders', blurb: 'Designed for girls and women.' }
      ] },
      { num: 'II', h3: 'Building in Python', sub: 'High school', courses: [
        { code: 'GPN / PY / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first programs to projects.' },
        { code: 'GPN / PY / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and algorithms.' },
        { code: 'GPN / PY / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python with real data.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Web, games and apps', courses: [
        { code: 'GPN / MK / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Real websites from scratch.' },
        { code: 'GPN / MK / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#.' },
        { code: 'GPN / MK / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Mobile apps that work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly live classes between workshops',
    lede: 'Our teachers are in India. Burnie and Hobart are four and a half hours ahead of India time in winter and five and a half in summer, and Perth two and a half hours ahead all year. An Australian after-school class lands in the Indian afternoon, so a regular weekly slot is easy to keep.',
    slots: [
      { time: 'After school, midweek', l: 'Concepts practised on short exercises.' },
      { time: 'Weekend', l: 'Growing a project of her own design.' },
      { time: 'Before a workshop', l: 'A quick refresh so she arrives ready to go further.' }
    ],
    cells: [
      { h3: 'Projects she chooses', p: 'Interest keeps students coding between events.' },
      { h3: 'Understanding first', p: 'Every line explained, never just copied.' },
      { h3: 'Friendly groups', p: 'Fifteen to twenty students at a similar level.' },
      { h3: 'One-to-one option', p: 'For a student who wants a personal pace.' },
      { h3: 'Alongside GPN', p: 'Classes complement workshops; they never replace them.' },
      { h3: 'No outcome promised', p: 'We build skill and confidence, week by week.' }
    ]
  },

  projectsH2: 'Projects our students built themselves',
  projectsLede: 'Made because students wanted to. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from our Google listing, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Classes are charged monthly in US dollars, our international rate, with no joining fee and no lock-in. GPN workshops are free and run by GPN; they have nothing to do with our fees.',
    free: ['A first class with a teacher, at no cost', 'Bring a workshop project to look at together', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'The same teacher across the term', 'Projects shared and discussed', 'A certificate at the end'],
    one: ['A teacher for one student', 'Lessons built around her own projects', 'Weekly times chosen with you']
  },

  faq: {
    eyebrow: 'Questions about GPN and next steps',
    h2: 'What students and parents ask',
    items: [
      { q: 'What is the Girls\' Programming Network?', a: 'A volunteer-run organisation that holds free, full-day programming workshops each school term around Australia, described on its site as coding workshops for high school girls and gender minorities.' },
      { q: 'Where does GPN run?', a: 'GPN lists nodes in Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide and Brisbane. Each node announces its own workshop dates.' },
      { q: 'Is there anything for primary students?', a: 'Yes. GPN Junior is a program for primary school students in Years 3 to 6 in Sydney, according to GPN.' },
      { q: 'What does "don\'t repeat yourself" mean?', a: 'A programming principle: when the same code appears more than once, turn it into one function with parameters, so changes and fixes happen in one place.' },
      { q: 'What should my daughter do between workshops?', a: 'About an hour of coding a week: rebuild the workshop project, change it, then start a small project of her own. GPN also recommends installing Python 3 at home.' },
      { q: 'Can students become GPN tutors?', a: 'GPN invites high school students in Years 9 to 12 who have attended a main GPN event to volunteer as tutors.' },
      { q: 'Are your classes part of GPN?', a: 'No. We are independent of GPN. Our weekly classes can sit alongside its free workshops for students who want regular teaching in between.' },
      { q: 'Do you have a course just for girls?', a: 'Yes. Princess Coders is our coding course designed for girls and women, starting from complete beginner level.' },
      { q: 'What language should come after a workshop?', a: 'Python is a natural choice for many students; GPN\'s own resources page starts by recommending Python 3. Younger students may stay with Scratch a little longer.' },
      { q: 'What happens in the free class?', a: 'A teacher looks at what she has built, works through one new idea with her, and suggests a simple plan for the weeks ahead.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian students',
    lede: 'Coding pathways, projects and competitions.',
    items: [
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch, Python', p: 'Making the jump to text code.' },
      { href: '/young-ict-explorers-project-help', label: 'Young ICT Explorers', p: 'A national project competition.' },
      { href: '/australian-student-hackathons', label: 'Student hackathons', p: 'Team builds and who can enter.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Which language for which stage.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state and every age.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Contests through the year.' }
    ]
  },

  start: {
    h2: 'Book a free Python class',
    lede: 'Tell us her year level and what she built at GPN or on her own. The free class grows one idea further and ends with a simple plan to keep coding.',
    readFirst: 'Prefer to explore first? Course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp usually brings the quickest reply. Our number is Indian because the team is based in India; there is no Australian office.',
    formNote: 'No card needed and no obligation. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/after-scratch-next-step-python-australia', label: 'After Scratch' },
        { href: '/kids-coding-languages-australia', label: 'Coding languages' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' }
      ] },
      { h4: 'Projects and contests', links: [
        { href: '/young-ict-explorers-project-help', label: 'Young ICT Explorers' },
        { href: '/australian-student-hackathons', label: 'Student hackathons' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of Girls\' Programming Network; facts checked at source'
  },

  personalityCss: `
.ag-root.ag-gpns .ag-hero-grid { gap: clamp(1rem, 2.7vw, 2.3rem); }
.ag-root.ag-gpns .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-gpns .ag-capsule { border-left-width: 7px; }
.ag-root.ag-gpns .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-gpns .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-gpns .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-gpns .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-gpns .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Girls\' Programming Network pages, read 7 October 2026. Home: "Coding workshops for high school girls and gender minorities"; "Each school term around Australia we run free, full-day programming workshops hosted by local technologists and teachers"; tutors "From uni students to IT professionals, mums, teachers, coding hobbyists and beyond"; nodes Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide, Brisbane. GPN Values: Fun; Aspirational and Relevant; Challenging; Diverse; Social; Network. GPN Junior: "specially designed for primary school girls in years 3-6"; open in Sydney; "High school students in years 9-12 who have attended a main GPN event in the past and our adult GPN tutors are invited to join us as volunteer tutors". More Opportunities: install "the latest version of Python 3"; Grok Learning "Year 4 and up"; Scratch "Year 3 and up"; MakeCode "Year 4 and onward"; Khan Academy "Year 6 and up"; ECU Computing and Security programs "Years 7-12".',
    localProject: 'A worked Python refactoring lesson written by us: a three-question quiz copied as 5-line blocks (15 lines) becomes a function ask(question, answer), a list and a loop (13 lines: a 6-line function, a 5-line list and a 2-line loop); a 4th question costs 5 lines copied versus 1; ten questions cost 50 lines versus 20; fixing case-insensitive comparison or changing the Correct message needs 3 (or 10) edits copied versus 1.',
    requiredMentions: ['GPN Junior', 'Burnie', 'gender minorities', 'volunteer tutors', 'don\'t repeat yourself', 'ask(question, answer)', 'Princess Coders', 'coding journal', 'nearest node'],
    sources: [
      { claim: 'Girls\' Programming Network home page: workshops, tutors, nodes.', url: 'https://www.girlsprogramming.network/' },
      { claim: 'GPN Junior: primary Years 3 to 6 in Sydney; volunteer tutoring from Years 9 to 12.', url: 'https://www.girlsprogramming.network/junior' },
      { claim: 'GPN More Opportunities: Python 3 and further resources with year levels.', url: 'https://www.girlsprogramming.network/more-opportunities' },
      { claim: 'GPN Values: the six values.', url: 'https://www.girlsprogramming.network/gpn-values' }
    ],
    rejectedClaims: [
      'Specific workshop dates by node: not published on the pages read; families are pointed to their nearest node.',
      'GPN\'s reasons for its eligibility policy: not summarised; the page quotes GPN\'s own description only.',
      'Workshop content or projects used at GPN: not described or reproduced.',
      'Any claim that our classes are part of, endorsed by or affiliated with GPN: none; stated on the page.',
      'Any promised outcome: none made.'
    ]
  }
};
