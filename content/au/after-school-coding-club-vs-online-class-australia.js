'use strict';
// After-school coding club vs online class, Australia (ag- comparison door; AU cluster Phase 4, row 113).
// Sources, read raw on 7 October 2026:
//  - Code Club Australia (codeclubau.org): "Free coding clubs to teach digital making skills to Aussie kids aged 8-13";
//    "Anyone can teach Step-by-step lessons and free online training to help you at every stage"; "Code Club projects are
//    aligned to the Australian Digital Technologies Curriculum (NDTC)"; Code Club Australia "is part of the Telstra
//    Foundation".
//  - Code Club, Raspberry Pi Foundation (codeclub.org): "Code Clubs are free and open to all school-aged young people.";
//    "You don't need any coding experience to run a Code Club."; "100+ countries have active Code Clubs".
//  - Victorian Government, school term dates 2027 (Tuesdays inside the terms: 8, 11, 10 and 11, so 40; our count).
// Our worked example (invented availability figures): a club that needs two volunteers, each present on 90% of club
// days, runs when both come (series): 0.9 x 0.9 = 0.81, so 32.4 sessions in 40 Tuesdays. With a pool of three volunteers
// of whom any two are enough: 0.9^3 + 3(0.9^2)(0.1) = 0.972, so 38.9 sessions. A class with one teacher present 95% of
// the time and a cover teacher also 95% (parallel): 1 - 0.05^2 = 0.9975, so 39.9 sessions.
// Lesson family: series and parallel reliability.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'CLUB OR CLASS', blurb: 'An after-school coding club or a weekly online class for an Australian child: what each offers, honestly, and a reliability model for how often each actually runs.' },
  slug: 'after-school-coding-club-vs-online-class-australia',
  code: 'acvo',
  accent: '#9C284C',
  accentRationale: 'Club vs online class, Australia: a deep raspberry chosen by hand, muted, at least 10 RGB units from every accent in use and outside the excluded hue bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'After-school coding club vs online class, Australia',
  title: 'After-School Coding Club vs Online Class in Australia',
  description: 'A free after-school coding club or a weekly online class? What each offers Australian kids, how volunteer clubs work, and how often each format really runs.',
  ogDescription: 'School and library coding clubs are free and volunteer-run; online classes are paid and taught. What each does well, and a reliability model showing how often each runs.',
  twitterDescription: 'After-school coding club or online class in Australia? What each offers, and how often each runs.',
  pageName: 'After-School Coding Club vs Online Class in Australia',
  webPageDescription: 'A comparison of free after-school coding clubs and paid online coding classes for Australian children, with a worked reliability model.',
  courseDescription: 'Weekly live online coding classes for Australian learners aged 6 to 67, taught by a regular teacher in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Club or online class',
  navLinks: [
    { href: '#clubs', label: 'How clubs work' },
    { href: '#compare', label: 'Compare' },
    { href: '#reliability', label: 'How often each runs' },
    { href: '#both', label: 'Doing both' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 18 &middot; Free club or taught class',
  h1: 'After-school coding club vs online class',
  lede: 'Many Australian schools and libraries host a coding club after the bell, often free and run by volunteers. Online classes, like ours, are paid and taught by a regular teacher. Families sometimes assume one must be a cheaper or dearer version of the other. They are different things, and a lot of children do both. This page explains how volunteer clubs work, compares them fairly with a taught online class, and uses a small reliability model to show something parents rarely think about: how often each format actually runs across a term.',
  secondaryCta: { href: '#reliability', label: 'How often each runs' },
  wa: 'Hello Modern Age Coders, our child goes to a school coding club in Australia and we are thinking about online classes too. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; a regular teacher with cover arranged',
  spec: [
    ['For', 'Ages 6 to 18, and adults'],
    ['Our format', 'Taught live online'],
    ['Teacher', 'Regular, with cover'],
    ['Group size', 'Five to ten, or one to one'],
    ['Alongside clubs', 'Yes, many learners do both'],
    ['Delivery', 'Live online video'],
    ['Times', 'Set for your state'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'An after-school coding club is usually free, run by volunteers in a school or library, and great for trying coding with friends; an online class is paid, taught by a regular teacher and planned to build skills term after term. Clubs also depend on volunteers turning up: in our model, a club needing two volunteers who each come 90% of the time runs on 81% of club days, about 32.4 sessions in 40.',

  picks: {
    eyebrow: 'A next step after a club',
    h2: 'Three courses for children who enjoy their club',
    lede: 'Children who love their club often want more structure and harder challenges.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'ACVO / 01', title: 'Scratch, taught in depth', note: 'Ages 6 to 12. Beyond the club projects, with a teacher.' },
      { course: 'python-ai-kids-masterclass', code: 'ACVO / 02', title: 'Python after Scratch', note: 'Ages 9 to 12. The step most clubs cannot fit in.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'ACVO / 03', title: 'Game development for teens', note: 'Ages 13 to 18. Unity and C#.' }
    ]
  },

  sections: [
    {
      id: 'clubs', tint: 'tint', eyebrow: 'How clubs work',
      h2: 'What a volunteer coding club is, in its own words',
      lede: 'One Australian network of volunteer clubs is Code Club Australia, and it describes itself clearly. These lines are quoted from its site and from the global Code Club site.',
      body: [
        { kind: 'table', caption: 'Code Club, as described on its own websites (read 7 October 2026)', head: ['Point', 'In their words'], rows: [
          ['What it is', '"Free coding clubs to teach digital making skills to Aussie kids aged 8-13" (Code Club Australia)'],
          ['Who can teach', '"Anyone can teach Step-by-step lessons and free online training to help you at every stage" (Code Club Australia)'],
          ['Curriculum link', '"Code Club projects are aligned to the Australian Digital Technologies Curriculum (NDTC)" (Code Club Australia)'],
          ['Who it is for', '"Code Clubs are free and open to all school-aged young people." (codeclub.org)'],
          ['Leaders', '"You don\'t need any coding experience to run a Code Club." (codeclub.org)'],
          ['Reach', '"100+ countries have active Code Clubs" (codeclub.org)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this tells parents',
          left: [
            'Clubs are designed to be open and easy to start. A teacher, librarian or parent can run one with free projects and online training, even without coding experience.',
            'That is a real strength: it puts coding within reach of children whose families would never pay for a class. Code Club Australia says it is part of the Telstra Foundation.'
          ],
          rightH3: 'What it also means',
          right: [
            'Because leaders need no coding experience, a child who gets stuck may find the adult in the room cannot always explain why the code fails. Clubs work through set projects rather than a plan for one child\'s progress.',
            'None of this is a criticism. Clubs and classes simply do different jobs, and knowing the difference helps you use each well.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://codeclubau.org/" rel="noopener" target="_blank">Code Club Australia</a> and <a class="ag-inline-link" href="https://codeclub.org/en" rel="noopener" target="_blank">Code Club, Raspberry Pi Foundation</a>. We are not connected with Code Club and recommend it warmly to families near a club.' }
      ]
    },
    {
      id: 'compare', tint: 'deep', eyebrow: 'Side by side',
      h2: 'Club and online class compared',
      lede: 'A fair comparison, factor by factor.',
      body: [
        { kind: 'table', caption: 'After-school coding club and taught online class', head: ['Factor', 'Volunteer club', 'Taught online class'], rows: [
          ['Cost', 'Usually free', 'Paid monthly'],
          ['Who leads', 'Volunteers, teachers or librarians, with or without coding experience', 'A trained coding teacher'],
          ['What is taught', 'Set projects, step by step', 'A plan built around each learner'],
          ['Ages', 'Code Club Australia targets 8 to 13', 'Six to 67'],
          ['Group', 'Whoever comes, often a mixed group', 'Five to ten at a similar level, or one to one'],
          ['Feedback', 'Informal', 'Specific skills named for families'],
          ['Where', 'School or library, after the bell', 'At home, at a time that suits'],
          ['Runs when', 'Leaders and room are available', 'A teacher with cover arranged']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A club suits a child who',
          left: [
            'Wants to try coding with friends, for free, close to school.',
            'Enjoys following a project through and being part of a group, and does not mind the pace set by the club.'
          ],
          rightH3: 'A taught class suits a child who',
          right: [
            'Has outgrown the club projects, or keeps getting stuck with nobody to explain why.',
            'Wants a plan that moves from blocks to Python and on to their own projects, with a teacher who knows their level.'
          ] }
      ]
    },
    {
      id: 'reliability', tint: 'tint', eyebrow: 'How often each runs',
      h2: 'Series and parallel: a reliability model for weekly sessions',
      lede: 'A weekly activity only helps if it actually happens. Engineers model this with series and parallel reliability, and the same arithmetic works for clubs and classes. The availability figures below are invented for illustration; the method is the point.',
      body: [
        { kind: 'table', caption: 'How many of 40 weekly sessions run (our model, invented availability figures)', head: ['Setup', 'Rule', 'Chance a session runs', 'Sessions out of 40'], rows: [
          ['Club needing two volunteers, each 90% available', 'Both must come (series)', '0.9 &times; 0.9 = 0.81', '32.4 sessions'],
          ['Club with a pool of three volunteers, any two enough', 'Two or three of three (2-of-3)', '0.972', '38.9 sessions'],
          ['Class teacher 95% available, cover teacher 95%', 'Either one is enough (parallel)', '1 &minus; 0.05 &times; 0.05 = 0.9975', '39.9 sessions']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why 40 sessions',
          left: [
            'Counting the Tuesdays between the start and end of each Victorian school term in 2027 gives 8, 11, 10 and 11, so 40 Tuesdays in the school year. A club meeting every Tuesday in term would have 40 chances to run, before public holidays and school events.',
            'In series, every part must work, so reliabilities multiply and fall quickly. In parallel, any part is enough, so failures multiply instead, and the chance of everything failing becomes tiny.'
          ],
          rightH3: 'What the model shows',
          right: [
            'A club that relies on exactly two volunteers loses about one session in five, even if each volunteer is very reliable. Adding a third volunteer to the pool lifts it to about 39 sessions in 40.',
            'This is why good clubs build a roster of helpers, and why we arrange cover teachers: the weakest point of any weekly activity is the one person it cannot run without.'
          ] },
        { kind: 'p', mt: true, html: 'Older learners can test the model by simulation: generate 40 random weeks in Python, mark each volunteer present with probability 0.9, and count how often the club runs. Over many runs the average settles near 32.4 for the two-volunteer club and near 38.9 for the pool of three, matching the formulas. The <a class="ag-inline-link" href="https://www.vic.gov.au/school-term-dates-and-holidays-victoria" rel="noopener" target="_blank">Victorian term dates</a> were read on 7 October 2026; the Tuesday counts and all reliabilities are our own arithmetic.' }
      ]
    },
    {
      id: 'both', tint: 'deep', eyebrow: 'Doing both',
      h2: 'How a club and a class fit together',
      lede: 'For many children, the answer is not either-or. A club and a class can feed each other.',
      body: [
        { kind: 'table', caption: 'Combining a coding club with a taught class', head: ['Pattern', 'How it works', 'Benefit'], rows: [
          ['Club first, class later', 'Start at the club; add a class when projects feel easy', 'Interest is proven before any cost'],
          ['Class plus club', 'Weekly class for skills; club for friends and fun projects', 'Structure and community together'],
          ['Class instead of a club', 'Where no club runs nearby', 'Coding is still within reach'],
          ['Club helper', 'An experienced learner helps younger club members', 'Teaching others deepens understanding']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Bringing club projects to class',
          left: [
            'Learners are welcome to bring a club project to an online lesson. Teachers often use it to explain an idea the club skipped over, such as why a variable resets or a loop never ends.',
            'That turns a half-understood project into a fully understood one.'
          ],
          rightH3: 'No club nearby?',
          right: [
            'Clubs depend on a school, library or volunteer starting one, so many areas have none, especially outside the capitals.',
            'In that case a taught online class, or a free first lesson to see whether coding appeals, fills the gap. Our <a class="ag-inline-link" href="/free-coding-classes-for-kids-australia-what-you-get">guide to free coding options</a> lists other free routes.'
          ] }
      ]
    },
    {
      id: 'questions', tint: '', eyebrow: 'Questions for a club',
      h2: 'Questions worth asking your child\'s club',
      lede: 'Clubs are friendly and informal, so a few questions help you understand what your child is getting.',
      body: [
        { kind: 'table', caption: 'Simple questions for a school or library coding club', head: ['Question', 'Why ask'], rows: [
          ['Which projects will my child work on this term?', 'To see whether they are new or repeated'],
          ['Who helps when a child is stuck?', 'To know whether there is someone who can explain the code'],
          ['What happens if a leader cannot come?', 'To understand how often sessions might be cancelled'],
          ['Can my child move on to Python?', 'To know whether the club can follow their progress'],
          ['How can parents help?', 'Many clubs welcome volunteers, including parents with no coding background']
        ] },
        { kind: 'p', mt: true, html: 'For more on format choices, see <a class="ag-inline-link" href="/online-vs-in-person-coding-classes-australia">online versus in-person classes</a> and <a class="ag-inline-link" href="/coding-classes-vs-coding-camps-australia">weekly classes versus holiday camps</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From club to class',
    h2: 'A common path for club coders',
    lede: 'How children who start at a club often progress.',
    table: { caption: 'Four steps from a club to independent coding', head: ['Step', 'What happens'], rows: [
      ['1. Club', 'Scratch projects with friends, following steps'],
      ['2. Class', 'A teacher explains why the steps work'],
      ['3. Python', 'The move to typed code, with support'],
      ['4. Own projects', 'Ideas of their own, sometimes shown back at the club']
    ] },
    left: { h3: 'For children', ps: [
      'Clubs spark interest; classes turn interest into skills that last.',
      'Many children keep going to their club for friends while learning in class.'
    ] },
    right: { h3: 'For teenagers', ps: [
      'Teenagers who outgrow a primary club often move straight to a taught class in Python, web or game development.',
      'Some return to their old club as helpers.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for club coders ready for more',
    lede: 'All taught live by a regular teacher.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'ACVO / CHD / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'From blocks to apps and games.' },
        { code: 'ACVO / CHD / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch games with a little AI.' },
        { code: 'ACVO / CHD / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds worlds.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'ACVO / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Real projects in Python.' },
        { code: 'ACVO / TEN / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Modern web apps.' },
        { code: 'ACVO / TEN / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Build fast, as a team.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Club helpers and parents', courses: [
        { code: 'ACVO / ADL / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'For parents who want to help.' },
        { code: 'ACVO / ADL / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Websites from scratch.' },
        { code: 'ACVO / ADL / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI tools for adults', blurb: 'Using AI tools well.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Taught lessons with cover arranged',
    lede: 'A class that runs every week it is meant to.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots.' }
    ],
    cells: [
      { h3: 'Regular teacher', p: 'The same teacher each week.' },
      { h3: 'Cover arranged', p: 'A substitute if the teacher is away.' },
      { h3: 'A plan per learner', p: 'Not just the next project.' },
      { h3: 'Club projects welcome', p: 'Bring them and understand them.' },
      { h3: 'Live, online', p: 'At home, any state.' },
      { h3: 'Small groups', p: 'Five to ten, or one to one.' }
    ]
  },

  projectsH2: 'Built by learners who started in clubs',
  projectsLede: 'Projects from learners, including some who began at a school club. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Unedited Google reviews from families.',

  fees: {
    h2: 'Fees',
    lede: 'A club is usually free; our taught online lessons are paid monthly in US dollars, one rate in every country outside India. There is no joining fee and no term contract, so a child can try a term alongside their club and stop at any month\'s end.',
    free: ['A free first lesson', 'Bring a club project', 'No card details'],
    group: ['Five to ten learners', 'One regular teacher', 'Cover arranged', 'Monthly'],
    one: ['A teacher to yourself', 'Your own pace', 'Your own projects']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Coding club or online class: common questions',
    items: [
      { q: 'What is an after-school coding club?', a: 'An after-school coding club is a group that meets at a school or library, usually free and run by volunteers, where children work through coding projects together.' },
      { q: 'What is series and parallel reliability?', a: 'In series, every part must work, so reliabilities multiply and the whole is less reliable than any part. In parallel, any one part is enough, so the whole is more reliable than each part.' },
      { q: 'Are coding clubs free in Australia?', a: 'Many are. Code Club Australia describes its clubs as free coding clubs for Aussie kids aged 8 to 13, and it is part of the Telstra Foundation.' },
      { q: 'Do club leaders need to know how to code?', a: 'Not necessarily. The global Code Club site says you don\'t need any coding experience to run a Code Club, and Code Club Australia offers free online training.' },
      { q: 'Is a club enough to learn coding?', a: 'A club is a great start and keeps coding fun. Children who want structured progress, harder challenges or the move to Python often add a taught class.' },
      { q: 'Can my child do a club and a class?', a: 'Yes, and many do: the club for friends and fun projects, the class for skills built term by term.' },
      { q: 'How often does a club run in a term?', a: 'It depends on leaders turning up. In our illustrative model, a club needing two volunteers who each come 90% of the time runs on about 81% of club days.' },
      { q: 'What if there is no club near us?', a: 'Many areas have none. A taught online class, or a free first lesson, is a way to start coding without one.' },
      { q: 'Can my child bring a club project to your lessons?', a: 'Yes. Teachers often use club projects to explain ideas the club did not have time to cover.' },
      { q: 'How much do online classes cost?', a: 'The first lesson costs nothing. Classes after that are paid month by month, with no joining fee, as set out in the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian families comparing coding options.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'All of our pages for Australia.' },
      { href: '/free-coding-classes-for-kids-australia-what-you-get', label: 'Free coding classes', p: 'What free options include.' },
      { href: '/coding-classes-vs-coding-camps-australia', label: 'Classes or camps', p: 'Weekly versus holiday formats.' },
      { href: '/online-vs-in-person-coding-classes-australia', label: 'Online or in person', p: 'Comparing the two formats.' },
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch', p: 'The step to Python.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A lesson from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us about your child\'s club and what they have made. The teacher picks up from there, so the lesson builds on what they already know.',
    readFirst: 'Curious about the method first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or explore <a class="ag-inline-link" href="/courses">the courses</a>.',
    note: 'WhatsApp reaches us fastest from Australia; we are an India-based team answering on a +91 number, so lessons are online and there is no local office.',
    formNote: 'A free first lesson; we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Comparing options', links: [
        { href: '/free-coding-classes-for-kids-australia-what-you-get', label: 'Free coding classes' },
        { href: '/coding-classes-vs-coding-camps-australia', label: 'Classes or camps' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' },
        { href: '/after-scratch-next-step-python-australia', label: 'After Scratch' },
        { href: '/kids-coding-languages-australia', label: 'Kids coding languages' }
      ] }
    ],
    bottomRight: 'In series it multiplies, in parallel it holds'
  },

  personalityCss: `
.ag-root.ag-acvo .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-acvo .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-acvo .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-acvo .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-acvo .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-acvo .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, after-school clubs versus online classes. Code Club Australia: "Free coding clubs to teach digital making skills to Aussie kids aged 8-13"; "Anyone can teach"; projects "aligned to the Australian Digital Technologies Curriculum (NDTC)"; part of the Telstra Foundation. Code Club (Raspberry Pi Foundation): "Code Clubs are free and open to all school-aged young people"; "You don\'t need any coding experience to run a Code Club"; "100+ countries have active Code Clubs". Victorian Government 2027 term dates (40 Tuesdays inside the terms, our count).',
    localProject: 'Series and parallel reliability (ours, invented availability): two volunteers each 90% present, both needed: 0.81, 32.4 sessions of 40; pool of three, any two enough: 0.972, 38.9 sessions; teacher 95% with a 95% cover teacher in parallel: 0.9975, 39.9 sessions. Tuesdays inside Victoria\'s 2027 terms: 8 + 11 + 10 + 11 = 40. Lesson family: series and parallel reliability.',
    requiredMentions: ['series and parallel', '0.972', '0.9975', '32.4 sessions', '38.9 sessions', '40 Tuesdays', 'digital making skills', 'free and open to all school-aged young people', '100+ countries', 'aligned to the Australian Digital Technologies Curriculum'],
    sources: [
      { claim: 'Code Club Australia: free coding clubs for Aussie kids aged 8-13, anyone can teach, projects aligned to the Digital Technologies Curriculum, part of the Telstra Foundation.', url: 'https://codeclubau.org/' },
      { claim: 'Code Club (Raspberry Pi Foundation): free and open to all school-aged young people; no coding experience needed to run a club; 100+ countries.', url: 'https://codeclub.org/en' },
      { claim: 'Victorian Government: 2027 school term dates.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' }
    ],
    rejectedClaims: [
      'Code Club Australia membership and club counts: already used on another Australian page, so not repeated here.',
      'Real attendance rates for volunteers or teachers: the 90% and 95% figures are invented for illustration, labelled as such.',
      'Claims that clubs are worse than classes: refused; the page recommends clubs warmly and suggests doing both.',
      'Any affiliation with Code Club: none, and the page says so.',
      'Cancellation rates of real clubs: no source read; the model shows the method only.'
    ]
  }
};
