'use strict';
// Australian coding competitions for primary kids (ag- competition hub, Australia cluster Phase 3, row 104).
// Facts read raw on 7 October 2026 (curl default agent): AMT pages for Bebras (Years 3 to 12; 60 minutes
// Middle Primary, 45 other divisions; 15 questions; teams of up to four; 2026 window and entry close;
// delivered by CSIRO until 2023, AMT from 2024), CAT (Years 5 to 12; 60 minutes; no programming; three-stage
// tasks; CAT Coding) and the Raspberry Pi Foundation Coding Challenge (Years 5 to 12; 45 minutes; free;
// four skill divisions; 10 tasks; scoring), the AMT 2026 key dates PDF, and the organisers behind our other
// competition pages (ICAS, RoboCup Junior Australia, FIRST Australia, Young ICT Explorers, Girls'
// Programming Network). Hub page: links each competition page instead of repeating it. Spine: a sorting
// network of comparators, unplugged (family checked free site-wide on 7 October 2026; verified by
// enumerating all 24 orders).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'PRIMARY CODING CONTESTS', label: 'Coding competitions for primary kids', blurb: 'Every coding and computational thinking competition open to Australian primary students, by year level.' },
  slug: 'australian-coding-competitions-for-primary-kids',
  code: 'cpka',
  accent: '#14544C',
  accentRationale: 'Coding competitions for primary kids: a deep teal green chosen by hand, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding competitions for primary kids in Australia',
  title: 'Coding Competitions for Primary Kids in Australia: A Guide',
  description: 'Coding and computational thinking competitions open to Australian primary students, by year level: Bebras, the CAT, the coding challenge, ICAS, robotics and more.',
  ogDescription: 'A guide for Australian parents and teachers to every coding and computational thinking competition a primary student can enter, which year levels each suits, and how to try a competition-style puzzle at home.',
  twitterDescription: 'Coding competitions for Australian primary students, by year level, with an unplugged puzzle to try.',
  pageName: 'Coding Competitions for Primary Kids in Australia',
  webPageDescription: 'A hub guide to coding, computational thinking and robotics competitions for Australian primary school students: Bebras, the Computational and Algorithmic Thinking competition, the Raspberry Pi Foundation Coding Challenge, ICAS Digital Technologies, RoboCup Junior, FIRST LEGO League, Young ICT Explorers and GPN Junior, with a worked unplugged lesson on sorting networks.',
  courseDescription: 'Live online coding and computational thinking classes for Australian primary students, from Scratch and puzzles to first Python, with preparation for competitions such as Bebras and the CAT.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Primary coding competitions',
  navLinks: [
    { href: '#by-year', label: 'By year level' },
    { href: '#amt', label: 'AMT contests' },
    { href: '#network', label: 'Puzzle to try' },
    { href: '#choosing', label: 'Choosing one' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 1 to 6 &middot; Checked at each organiser',
  h1: 'Coding competitions for primary kids',
  lede: 'Australian primary students can take part in more coding and computational thinking competitions than most parents expect, and several need no coding at all. Some are a single sitting at school; others run over a term as a team project or a robot build. This page brings them together by year level, with every detail checked at the organiser, and links to our fuller guide for each one. It also includes a short unplugged puzzle in the style these competitions use, which children can try at the kitchen table with four cards. We are independent of every organiser named here.',
  secondaryCta: { href: '#network', label: 'Try the puzzle' },
  wa: 'Hello Modern Age Coders, I would like a free class about coding competitions for my primary school child in Australia.',
  heroNote: 'Checked at each organiser on 7 October 2026 &middot; Independent of all of them &middot; Several need no coding',
  spec: [
    ['Covers', 'Coding, computational thinking, robotics, projects'],
    ['Year levels', 'Years 1 to 6'],
    ['No coding needed', 'Bebras, the CAT'],
    ['Free to enter', 'Raspberry Pi Foundation Coding Challenge'],
    ['Team events', 'RoboCup Junior, FIRST LEGO League, Young ICT Explorers'],
    ['Dates shown for', '2026, checked 7 October 2026'],
    ['We provide', 'Preparation classes in the underlying skills'],
    ['We are not', 'An organiser of any competition']
  ],
  capsuleQ: 'In short',
  capsule: 'Australian primary students can enter Bebras from Year 3, the Computational and Algorithmic Thinking competition and the free Raspberry Pi Foundation Coding Challenge from Year 5, and ICAS Digital Technologies from Year 2. Team options include RoboCup Junior, FIRST LEGO League from Year 1 and Young ICT Explorers from Year 3. Bebras and the CAT need no coding experience, according to the Australian Maths Trust.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for young competitors',
    lede: 'Thinking skills first, then code. Every competition on this page rewards both.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CPK / 01', title: 'Computational thinking', note: 'Puzzles, patterns and logic, the exact ground Bebras and the CAT test.' },
      { course: 'scratch-programming-complete-course', code: 'CPK / 02', title: 'Scratch for kids', note: 'Block coding that suits the Novice and Explorer coding challenge divisions.' },
      { course: 'python-ai-kids-masterclass', code: 'CPK / 03', title: 'Python and AI for kids', note: 'For upper primary students ready for text code and the Navigator division.' }
    ]
  },

  sections: [
    {
      id: 'by-year', tint: 'tint', eyebrow: 'By year level',
      h2: 'Which competitions a primary student can enter',
      lede: 'Year levels are as each organiser publishes them. Most entries go through a school; each linked guide explains how that competition works.',
      body: [
        { kind: 'table', caption: 'Coding, computational thinking and robotics competitions open to Australian primary students', head: ['Competition', 'Primary years', 'Type', 'Our guide'], rows: [
          ['FIRST LEGO League Explore', 'Years 1 to 4 (ages 6 to 10)', 'Team model build, no matches', '<a class="ag-inline-link" href="/first-lego-league-australia-coding-help">FIRST LEGO League</a>'],
          ['ICAS Digital Technologies', 'Years 2 to 6 (and Year 7)', 'Individual paper, 30 to 35 questions', '<a class="ag-inline-link" href="/icas-digital-technologies-practice">ICAS Digital Technologies</a>'],
          ['Bebras', 'Years 3 to 6 (and secondary)', 'Puzzles, alone or in teams of up to four', '<a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">AMT competitions</a>'],
          ['Young ICT Explorers', 'Years 3-4 and 5-6 categories', 'Project, alone or in teams of up to four', '<a class="ag-inline-link" href="/young-ict-explorers-project-help">Young ICT Explorers</a>'],
          ['GPN Junior (workshops)', 'Years 3 to 6, Sydney', 'Free coding program, not a contest', '<a class="ag-inline-link" href="/girls-programming-network-next-step-australia">GPN next steps</a>'],
          ['FIRST LEGO League Challenge', 'From Year 4 (age 9)', 'Team robot season with 2:30 matches', '<a class="ag-inline-link" href="/first-lego-league-australia-coding-help">FIRST LEGO League</a>'],
          ['Computational and Algorithmic Thinking (CAT)', 'Years 5 and 6 (and secondary)', 'Individual paper, 60 minutes', '<a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">AMT competitions</a>'],
          ['Raspberry Pi Foundation Coding Challenge', 'Years 5 and 6 (and secondary)', 'Free, 45 minutes, divisions by skill', 'This page, below'],
          ['RoboCup Junior Australia', 'Primary divisions and entry levels', 'Team robots: OnStage, Rescue, Soccer', '<a class="ag-inline-link" href="/robocup-junior-australia-coding-help">RoboCup Junior</a>']
        ] },
        { kind: 'p', mt: true, text: 'For a month-by-month view of the same competitions, including the secondary ones, see our <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a>. Entry fees, where they exist, are set by each organiser and are not shown on this page.' }
      ]
    },
    {
      id: 'amt', tint: 'deep', eyebrow: 'The three AMT contests',
      h2: 'Bebras, the CAT and the coding challenge in detail',
      lede: 'The Australian Maths Trust runs three of the most accessible options for primary students. The details below come from its 2026 pages.',
      body: [
        { kind: 'table', caption: 'Australian Maths Trust computing competitions for primary students, 2026', head: ['', 'Bebras', 'CAT', 'Raspberry Pi Foundation Coding Challenge'], rows: [
          ['Primary eligibility', 'Middle Primary (Years 3 and 4), Upper Primary (Years 5 and 6)', 'Upper Primary (Years 5 and 6)', 'From Year 5'],
          ['Time', '60 minutes for Middle Primary, 45 for others', '60 minutes', '45 minutes'],
          ['Questions', '15, mixing multiple choice, integer and interactive', 'Three-stage tasks on test data of growing size', '10 tasks in two sections'],
          ['Coding needed?', 'No', 'No', 'Yes, in blocks or text, by chosen division'],
          ['2026 dates', 'Monday 9 February to Sunday 8 March', '19 to 21 May', '16 to 18 June'],
          ['Also worth knowing', 'Teams of up to four allowed', 'Free CAT Coding long-form challenge', 'Free to enter']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Bebras is an international computational thinking challenge; the AMT says it involves over 2.9 million students from 60 countries. Bebras Australia began in 2014, was delivered by CSIRO until 2023, and has been run by the AMT since 2024. A follow-up event is held in Term 4 for international Bebras week.',
            'The CAT, according to the AMT, uses unique three-stage tasks that encourage students to develop informal algorithms and apply them to test data of increasing size or complexity. It needs no programming experience and suits any maths class.'
          ],
          right: [
            'The Raspberry Pi Foundation Coding Challenge was previously delivered as the Coding Challenge and the Oxford University Computing Challenge. Its four divisions are chosen by skill, not age: Novice and Explorer for block-based programmers, Navigator and Trailblazer for text-based programmers.',
            'In the coding challenge, questions 1 to 7 are worth 4 marks each and questions 8 to 10 worth 8 marks each. The AMT points to the UK Bebras website for practice challenges.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://amt.edu.au/bebras" rel="noopener" target="_blank">AMT Bebras</a>; <a class="ag-inline-link" href="https://amt.edu.au/cat" rel="noopener" target="_blank">AMT CAT</a>; <a class="ag-inline-link" href="https://amt.edu.au/rpfcc" rel="noopener" target="_blank">AMT Raspberry Pi Foundation Coding Challenge</a>; <a class="ag-inline-link" href="https://amt.edu.au/wp-content/uploads/2025/2026-Competitions-and-Programs-Key-Dates-Calendar.pdf" rel="noopener" target="_blank">AMT 2026 key dates</a>. Read 7 October 2026. Entry prices printed there are not shown.' }
      ]
    },
    {
      id: 'network', tint: 'tint', eyebrow: 'Puzzle to try',
      h2: 'A sorting network with four cards',
      lede: 'Computational thinking competitions love puzzles about putting things in order with simple, fixed steps. This one is ours, and needs only four numbered cards and a pencil.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The rule', p: 'Lay four cards face up in positions 1 to 4. A "comparator" looks at two positions and swaps the cards if the left one is bigger. Nothing else is allowed.' },
          { h3: 'The network', p: 'Compare positions 1 and 2, and 3 and 4. Then 1 and 3, and 2 and 4. Finally 2 and 3. That is five comparators in a fixed order, whatever the cards are.' },
          { h3: 'The challenge', p: 'Shuffle the cards and run the five comparators. Do they always end up in order? Try several shuffles, then try to explain why it works.' }
        ] },
        { kind: 'table', mt: true, caption: 'One run of the network, starting from the cards 7, 3, 9, 1', head: ['Step', 'Compare positions', 'Cards after the step'], rows: [
          ['Start', '', '7, 3, 9, 1'],
          ['1', '1 and 2 (7 is bigger, swap)', '3, 7, 9, 1'],
          ['2', '3 and 4 (9 is bigger, swap)', '3, 7, 1, 9'],
          ['3', '1 and 3 (3 is bigger, swap)', '1, 7, 3, 9'],
          ['4', '2 and 4 (7 is smaller, no swap)', '1, 7, 3, 9'],
          ['5', '2 and 3 (7 is bigger, swap)', '1, 3, 7, 9']
        ] },
        { kind: 'p', mt: true, text: 'We checked all 24 possible orders of four different cards: this five-step network sorts every one of them. Leave out the last comparator, though, and 16 of the 24 orders finish with the middle two cards the wrong way round, which shows exactly why that step is there. Steps 1 and 2 never touch the same cards, so two children could do them at the same moment, and the same is true of steps 3 and 4. The whole network therefore runs in three rounds of work, where checking every pair one after another, as a simple bubble sort does, takes six comparisons in a row. Doing work at the same time like this is called parallel processing.' },
        { kind: 'two', mt: true,
          leftH3: 'Making it a game',
          left: [
            'Draw four lines on paper, one for each position, and join pairs with short bridges for the comparators. Children walk cards along the lines, swapping at each bridge if needed. With several children as cards, it works in a playground too.',
            'For a harder challenge, ask whether any network with only four comparators can sort four cards every time. Exploring that question is real computer science.'
          ],
          rightH3: 'Where it leads',
          right: [
            'The same thinking underlies how computers sort data with many processors at once. It also prepares children for competition questions that ask them to follow fixed rules exactly, a skill Bebras and the CAT both test.',
            'Once the card version is easy, children can build the network in Scratch: four variables, five "if bigger then swap" blocks, and a check that the result is sorted.'
          ] }
      ]
    },
    {
      id: 'choosing', tint: '', eyebrow: 'Choosing one',
      h2: 'Picking a first competition, and preparing well',
      lede: 'The right first competition depends on what a child enjoys and how they like to work. A short, low-pressure one is usually a better start than an ambitious one.',
      body: [
        { kind: 'table', caption: 'A starting guide for primary students', head: ['If your child likes', 'Years 1 and 2', 'Years 3 and 4', 'Years 5 and 6'], rows: [
          ['Puzzles and logic', 'Unplugged puzzles at home', 'Bebras', 'Bebras, the CAT'],
          ['Building with LEGO', 'FIRST LEGO League Explore', 'FIRST LEGO League Explore', 'FIRST LEGO League Challenge, RoboCup Junior'],
          ['Making apps or games', 'Scratch projects for fun', 'Young ICT Explorers (Years 3-4)', 'Young ICT Explorers (Years 5-6), the coding challenge'],
          ['Using computers well', 'Everyday software skills', 'ICAS Digital Technologies', 'ICAS Digital Technologies']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Our classes teach the thinking these competitions reward: reading instructions carefully, spotting patterns, tracing steps, and building small working programs in Scratch and later Python. Practice uses our own puzzles, never copied competition papers.',
            'For team events, we teach children to program and debug; the team\'s robot or project stays the team\'s own work.'
          ],
          right: [
            'We are independent of every organiser on this page and do not enter students, run competitions or handle results. Most entries go through schools, and each organiser explains how families can take part.',
            'We do not promise a score, a certificate level or a place. For a primary child, the main value of a first competition is the experience of thinking hard and enjoying it.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a young coder',
    h2: 'Four rungs through primary school',
    lede: 'Children move at their own pace; this is the usual order.',
    table: { caption: 'From following steps to designing algorithms', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 1 and 2', '1. Follows exact steps', 'Carries out a short sequence of instructions without skipping'],
      ['Years 3 and 4', '2. Spots patterns', 'Predicts what comes next in a sequence or puzzle'],
      ['Years 4 and 5', '3. Builds working programs', 'Makes a Scratch project that does what was planned'],
      ['Years 5 and 6', '4. Designs algorithms', 'Writes a step-by-step method and tests it on new cases']
    ] },
    left: { h3: 'After a first competition', ps: [
      'Ask which question was most fun and which was most confusing. Both answers point to what to explore next.',
      'Keep the focus on enjoyment and effort. A primary child\'s first result says little about later ability.'
    ] },
    right: { h3: 'Maths competitions too', ps: [
      'For maths contests at primary level, see our <a class="ag-inline-link" href="/australian-maths-competitions-for-primary-kids">guide to maths competitions for primary kids</a>.',
      'For online coding lessons, see <a class="ag-inline-link" href="/online-coding-classes-for-kids-australia">coding classes for kids in Australia</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for primary coders',
    lede: 'From unplugged thinking to first text code. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Thinking', sub: 'Bebras and the CAT', courses: [
        { code: 'CPK / TH / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic and patterns first.' },
        { code: 'CPK / TH / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense for puzzles.' },
        { code: 'CPK / TH / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Maths and code together.' }
      ] },
      { num: 'II', h3: 'Blocks', sub: 'Novice and Explorer coders', courses: [
        { code: 'CPK / BL / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Games and stories in blocks.' },
        { code: 'CPK / BL / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to apps and simple AI.' },
        { code: 'CPK / BL / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft.' }
      ] },
      { num: 'III', h3: 'First text code', sub: 'Upper primary', courses: [
        { code: 'CPK / TX / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A gentle first text language.' },
        { code: 'CPK / TX / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Pages that do something.' },
        { code: 'CPK / TX / 03', slug: 'microsoft-office-kids-mastery', title: 'Office skills for kids', blurb: 'Everyday software, used well.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Short, lively online classes after school',
    lede: 'Lessons are taught live by teachers in India. Australia is ahead of India on the clock: Adelaide by four hours in winter and five in summer, Brisbane by four and a half all year. A class after an Australian school day falls in the Indian afternoon, so younger children can learn at a sensible hour.',
    slots: [
      { time: 'After school', l: 'Puzzles and Scratch for younger children.' },
      { time: 'Saturday morning', l: 'A longer build or a puzzle set.' },
      { time: 'Before a competition', l: 'Practice with our own puzzles in the competition style.' }
    ],
    cells: [
      { h3: 'Play first', p: 'Young children learn best through puzzles and making things.' },
      { h3: 'Our own puzzles', p: 'Competition-style practice written by us, never copied.' },
      { h3: 'Small classes', p: 'Five to ten children at a similar level.' },
      { h3: 'One-to-one option', p: 'For a child who needs a different pace.' },
      { h3: 'Team-friendly', p: 'We teach the coding; teams keep their own projects.' },
      { h3: 'No result promised', p: 'Organisers set and mark every competition.' }
    ]
  },

  projectsH2: 'Projects our students have made',
  projectsLede: 'Made because they wanted to, not for a contest. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From our Google listing, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Classes are billed per month in US dollars, our rate for families outside India. There is no sign-up charge and no fixed term. Competition entries, where they cost anything, are paid to the organisers, usually through schools.',
    free: ['A first class at no charge', 'A short puzzle and coding check', 'No card details'],
    group: ['Five to ten children at one level', 'The same teacher each week', 'Puzzles and projects shared', 'A certificate at the end'],
    one: ['A teacher for one child', 'A plan matched to the child\'s pace', 'Times that suit the family']
  },

  faq: {
    eyebrow: 'Questions about primary coding competitions',
    h2: 'What parents and teachers ask',
    items: [
      { q: 'Is there a coding competition for primary students in Australia?', a: 'Yes, several. Bebras from Year 3, the CAT and the Raspberry Pi Foundation Coding Challenge from Year 5, ICAS Digital Technologies from Year 2, plus team events such as RoboCup Junior, FIRST LEGO League and Young ICT Explorers.' },
      { q: 'Which competitions need no coding?', a: 'Bebras and the Computational and Algorithmic Thinking competition need no coding experience, according to the Australian Maths Trust. ICAS Digital Technologies includes some programming questions but is mostly about digital skills.' },
      { q: 'Is any primary coding competition free?', a: 'The Raspberry Pi Foundation Coding Challenge, run in Australia through the AMT, is free. GPN Junior workshops in Sydney are free too, though they are a program rather than a competition.' },
      { q: 'What is a sorting network?', a: 'A fixed set of compare-and-swap steps that puts any list of a given length in order. Four items can be sorted by five comparators done in three rounds.' },
      { q: 'What is Bebras?', a: 'An international computational thinking challenge delivered in Australia by the Australian Maths Trust. In 2026 it ran from 9 February to 8 March, with 60 minutes for Years 3 and 4 and 45 minutes for older divisions.' },
      { q: 'What are the coding challenge divisions?', a: 'Novice and Explorer for block-based programmers, Navigator and Trailblazer for text-based programmers. Students choose by skill, not age.' },
      { q: 'Can Year 1 or 2 children take part in anything?', a: 'FIRST LEGO League Explore is for ages 6 to 10 (Years 1 to 4), and ICAS Digital Technologies starts with an Introductory paper for Year 2.' },
      { q: 'How do children enter?', a: 'Usually through their school. Each organiser explains its own entry process, and some team events can be entered through community groups.' },
      { q: 'Do you prepare children for these competitions?', a: 'We teach the thinking and coding skills they reward, with our own practice puzzles. We are independent of every organiser and do not promise any result.' },
      { q: 'What happens in the free class?', a: 'Your child tries a short puzzle and a small Scratch task with a teacher, and you get honest advice on which competition might suit them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for primary families',
    lede: 'Competitions, coding and maths for younger students.',
    items: [
      { href: '/australian-maths-competitions-for-primary-kids', label: 'Maths competitions for primary kids', p: 'The maths side of the same picture.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest by month.' },
      { href: '/icas-digital-technologies-practice', label: 'ICAS Digital Technologies', p: 'Papers for Years 2 to 7.' },
      { href: '/coding-classes-for-7-and-8-year-olds-australia', label: 'Coding for 7 and 8 year olds', p: 'What lessons look like at that age.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Coding classes for kids', p: 'Live online classes explained.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The national guide.' }
    ]
  },

  start: {
    h2: 'Book a free class for your child',
    lede: 'Tell us your child\'s year level and what they enjoy. The free class tries one competition-style puzzle and one small coding task, then suggests a good first competition.',
    readFirst: 'Curious about the courses first? Each syllabus is listed on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a typical class.',
    note: 'We usually reply fastest on WhatsApp. It is an Indian number because our school operates from India; there is no Australian branch.',
    formNote: 'Free, with no card and nothing to sign. We reply once to book it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Coding for kids' },
        { href: '/coding-games-for-kids-australia', label: 'Coding games for kids' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' }
      ] },
      { h4: 'Competitions', links: [
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/australian-maths-competitions-for-primary-kids', label: 'Primary maths contests' },
        { href: '/icas-digital-technologies-practice', label: 'ICAS Digital Technologies' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of every organiser named; facts checked at source'
  },

  personalityCss: `
.ag-root.ag-cpka .ag-hero-grid { gap: clamp(1rem, 2.6vw, 2.3rem); }
.ag-root.ag-cpka .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cpka .ag-capsule { border-left-width: 7px; }
.ag-root.ag-cpka .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cpka .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cpka .ag-table th { letter-spacing: 0.012em; }
.ag-root.ag-cpka .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-cpka .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Organisers\' own pages, read 7 October 2026. AMT Bebras: "Monday 9 February to Sunday 8 March 2026"; "60 minutes for Middle Primary Years 3 and 4, 45 minutes for all other divisions"; "Students can participate individually or in teams of up to four"; "15 questions"; "over 2.9 million students from 60 countries"; "Bebras Australia began in 2014 and was delivered by CSIRO until 2023. From 2024, the AMT is delivering the Bebras Challenge in Australia"; follow-up event in Term 4. AMT CAT: 19 to 21 May 2026; 60 minutes; "three-stage tasks"; "requires no programming experience"; CAT Coding. AMT RPFCC: 16 to 18 June 2026; 45 minutes; FREE; divisions Novice, Explorer, Navigator, Trailblazer by skill; "10 tasks in two sections"; questions 1-7 4 marks, 8-10 8 marks; formerly Coding Challenge and OUCC; practice on the UK Bebras website. AMT 2026 PDF: CAT Years 5 to 12; RPFCC Years 5 to 12. ICAS: Digital Technologies Years 2 to 7 in Australia. FIRST Australia: Explore 6-10 (Years 1-4); Challenge 9-16 (Years 4-10). YICTE: categories 3-4 and 5-6, teams up to four. GPN Junior: Years 3 to 6 in Sydney.',
    localProject: 'An unplugged sorting network written by us: comparators (1,2), (3,4), (1,3), (2,4), (2,3) on four cards. Trace from 7, 3, 9, 1 gives 3,7,9,1; 3,7,1,9; 1,7,3,9; 1,7,3,9; 1,3,7,9. Checked by enumeration: all 24 orders of four distinct cards are sorted; without the last comparator 16 of 24 fail. Three parallel rounds versus six sequential comparisons in a simple bubble sort.',
    requiredMentions: ['sorting network', 'comparators', 'Trailblazer', 'Navigator', 'three-stage tasks', 'CAT Coding', 'Bebras Australia began in 2014', '16 of the 24', 'FIRST LEGO League Explore'],
    sources: [
      { claim: 'AMT Bebras: dates, times, divisions, team size, format, history.', url: 'https://amt.edu.au/bebras' },
      { claim: 'AMT CAT: dates, time, three-stage tasks, no programming needed, CAT Coding.', url: 'https://amt.edu.au/cat' },
      { claim: 'AMT Raspberry Pi Foundation Coding Challenge: dates, time, free entry, divisions, format and scoring.', url: 'https://amt.edu.au/rpfcc' },
      { claim: 'AMT 2026 competitions and programs key dates: eligibility and dates.', url: 'https://amt.edu.au/wp-content/uploads/2025/2026-Competitions-and-Programs-Key-Dates-Calendar.pdf' },
      { claim: 'FIRST Australia compare programs: Explore and Challenge ages and years.', url: 'https://www.firstaustralia.org/compare-programs' },
      { claim: 'ICAS year levels: Digital Technologies Years 2 to 7 in Australia.', url: 'https://www.icasassessments.com/icas-year-levels-and-exam-papers/' }
    ],
    rejectedClaims: [
      'Entry prices for Bebras, the CAT and ICAS printed by the organisers: not shown (one-currency rule).',
      'Any 2027 date: not published by the organisers on the pages read.',
      'Competitions whose primary eligibility could not be confirmed at the organiser: not listed.',
      'Any claim that the network shown is the only or shortest one: not made; the page poses the four-comparator question as a challenge.',
      'Any promise of a score or award: none made.',
      'Affiliation with any organiser: none; stated on the page.'
    ]
  }
};
