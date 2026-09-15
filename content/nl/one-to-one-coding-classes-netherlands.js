'use strict';
// One-to-one coding classes, Netherlands (ag- track door, national).
// Spine: paid help outside school is already common in the Netherlands.
// Kamerstuk 31289, nr. 371 (25 June 2018), the minister's response to the
// report on schaduwonderwijs: in 2016-2017, 23 percent of secondary pupils
// received paid educational support, at a median cost of 600 euros a year;
// the market was estimated at 74 to 286 million euros a year, 1 to 3 percent
// of a regular secondary budget of about 8 billion; about 60 percent of
// parents cited a lack of individual attention at school. Coding lessons are
// not remedial tutoring, and the page says so; it sets out when one to one
// is the better format and when a group is.

module.exports = {
  cluster: 'ag',
  slug: 'one-to-one-coding-classes-netherlands',
  code: 'ooc',
  accent: '#583400',
  accentRationale: 'One-to-one door: a deep umber from the solver, fourteen units or more from every page it links to, the age doors, the academy hub and both Dutch oranges among them, with an unlinked city as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'One-to-one coding classes, Netherlands',
  title: 'One-to-One Coding Classes in the Netherlands | Live Online',
  description: 'Private one-to-one coding classes in the Netherlands for ages 6 to 67: Python, AI and apps with one teacher, live online at a time that suits you.',
  ogDescription: 'Nearly a quarter of Dutch secondary pupils already have paid help outside school, often because parents want more individual attention. Private coding lessons with one teacher, live online.',
  twitterDescription: 'Private coding lessons with one teacher, for learners in the Netherlands aged 6 to 67. First lesson free.',
  pageName: 'One-to-One Coding Classes in the Netherlands',
  webPageDescription: 'Private one-to-one coding classes for learners in the Netherlands aged 6 to 67: Python, AI, app development, Java, web development and more, taught live online by a single teacher.',
  courseDescription: 'Private live online coding lessons for learners in the Netherlands aged 6 to 67, with one teacher, a syllabus shaped to the learner\'s goal and a pace set around their school, study or work.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the Netherlands', href: '/coding-classes-in-netherlands' }],
  crumbLabel: 'One to one',
  navLinks: [
    { href: '#paid', label: 'Paid help in NL' },
    { href: '#choose', label: 'Group or private' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; One teacher, one learner &middot; Live online',
  h1: 'One-to-one coding classes in the Netherlands',
  lede: 'Paying for help outside school is ordinary in the Netherlands. In a report the education minister sent to parliament in 2018, nearly a quarter of secondary pupils had some form of paid support, and the most common reason parents gave was that their child did not get enough individual attention in class. Coding is different from maths tutoring, because most Dutch pupils never have it at school at all, but the wish behind it is the same: a teacher who works with one learner, at that learner\'s pace, on that learner\'s goal. That is what one-to-one lessons are for. A child who is racing ahead, a teenager with a profile project due, a student preparing for an interview, an adult who needs a specific skill for work: each is taught by a single teacher, live online and in English, at a time that fits. This page explains when a private teacher is worth it, and when a small group is the better choice.',
  secondaryCta: { href: '#choose', label: 'Group or one to one?' },
  wa: 'Hello Modern Age Coders, I would like a free one-to-one coding lesson in the Netherlands.',
  heroNote: 'Teaching live since 2020 &middot; more than 10,000 students &middot; private and group lessons, always with a real teacher',
  spec: [
    ['Ages', '6 to 67'],
    ['Format', 'One teacher, one learner, live'],
    ['Subjects', 'Anything in the catalogue'],
    ['Pace', 'Set by the learner\'s goal'],
    ['Times', 'Agreed around school, study or work'],
    ['Language', 'English'],
    ['Price', 'USD 150 a month'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers private coding lessons to learners in the Netherlands of any age from six to sixty-seven: one teacher and one learner, live online, at a regular time agreed around school, study or work. Any course in the catalogue can be taken this way, and the Copilot Studio courses are only taught one to one. The syllabus is shaped to the learner\'s goal, whether that is a school project, an exam, an interview, a work task or pure curiosity. Private lessons cost USD 150 a month; a small group place, for learners who prefer company, costs USD 100. The first lesson is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses often taken one to one',
    lede: 'One for a teenager who wants a thorough foundation at their own pace, one for a student preparing for technical interviews, and one course that is only ever taught privately. Each card opens its own page.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PRIVATE / 01', title: 'Python for Teens', note: 'Taken one to one, the two-year Python route bends around a teenager\'s school timetable, speeding up in quiet weeks and easing off in test weeks.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'PRIVATE / 02', title: 'Data Structures and Algorithms', note: 'Interview preparation works best privately: the teacher plays interviewer and the student practises reasoning out loud until it feels natural.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', code: 'PRIVATE / 03', title: 'Copilot Studio Agent Masterclass', note: 'Only taught one to one, because every organisation\'s systems differ and a useful agent has to be built around them.' }
    ]
  },

  sections: [
    {
      id: 'paid', tint: 'tint', eyebrow: 'Paid help in the Netherlands',
      h2: 'Nearly a quarter of Dutch secondary pupils already have paid help outside school',
      lede: 'The figures below come from the education minister\'s letter to parliament of 25 June 2018 (Kamerstuk 31289, nr. 371), responding to research on schaduwonderwijs, the Dutch term for paid educational support outside school.',
      body: [
        { kind: 'table', caption: 'Paid support outside school for Dutch secondary pupils, 2016 to 2017', head: ['Measure', 'Figure'], rows: [
          ['Secondary pupils receiving paid educational support', '23 percent'],
          ['Median cost per pupil', '600 euros a year'],
          ['Types of support covered', 'Bijles, huiswerkbegeleiding, examentraining and extra ondersteuning'],
          ['Estimated size of the market', 'Between 74 and 286 million euros a year'],
          ['Compared with the regular secondary education budget', '1 to 3 percent of about 8 billion euros'],
          ['Parents citing too little individual attention at school', 'about 60 percent']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The letter groups parents\' motives into five kinds: catching up on gaps, keeping up with the pressure for high marks, making up for attention the school cannot give, handing over some of the supervision parents would otherwise do at home, and specific needs such as dyslexia, giftedness or anxiety.',
            'These figures describe tutoring in school subjects, and they date from 2016 to 2017. We quote them because they show how normal it is in the Netherlands to pay for a teacher\'s time outside school, and why so many families do it.'
          ],
          right: [
            'Our lessons are not remedial tutoring. Coding is not a compulsory school subject in most Dutch schools, so a learner is not catching up; they are learning something new. But the motive most parents in the report shared, wanting more individual attention, is exactly what a one-to-one coding lesson offers.',
            'The same applies to adults. An adult learning Python for a specific task at work gets far more from a teacher who works on that task than from a group moving through a general syllabus.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://zoek.officielebekendmakingen.nl/kst-31289-371.html" rel="noopener" target="_blank">Kamerstuk 31289, nr. 371, letter of 25 June 2018</a>, read 15 September 2026. The figures concern paid support in school subjects, not coding.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'Group or private',
      h2: 'When one to one is the better choice, and when a group is',
      lede: 'Private lessons are not always better. They are better for some learners and some goals, and a small group suits others. This is our honest advice.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A fixed goal or deadline', p: 'A profielwerkstuk, a thesis with a technical part, an internship interview, a portfolio for an application, a tool needed at work next month. A private teacher can build every lesson around the deadline, which a group cannot.' },
          { h3: 'A pace of one\'s own', p: 'A child far ahead of their age, a learner who needs more time, or someone with the kinds of specific needs the 2018 report mentions. One to one lets the pace follow the learner instead of the group.' },
          { h3: 'A subject that needs it', p: 'The Copilot Studio courses are only taught one to one, because agents must be built around each organisation\'s own systems. Some adults also prefer private lessons for topics tied closely to their work.' }
        ] },
        { kind: 'table', mt: true, caption: 'Group and one-to-one lessons compared', head: ['', 'Small group', 'One to one'], rows: [
          ['Learners per class', 'Five to ten, all at one level', 'One'],
          ['Teacher', 'The same live teacher each week', 'The same live teacher each week'],
          ['Syllabus', 'The course syllabus, at the group\'s pace', 'Shaped to the learner\'s goal and pace'],
          ['Best for', 'Motivation, peers, steady progress', 'Deadlines, specific goals, unusual pace'],
          ['Monthly fee', 'USD 100', 'USD 150']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Groups have real advantages. Learners at the same level from several countries push each other, explain things to each other and keep going when motivation dips. For many children and teenagers, that is worth more than a teacher to themselves.'
          ],
          right: [
            'Many families switch between the two: private lessons for a term before a deadline, then back to a group. The free first lesson is a good moment to ask which suits.'
          ] }
      ]
    },
    {
      id: 'subjects', tint: '', eyebrow: 'Subjects',
      h2: 'Anything in the catalogue, taught to one learner',
      lede: 'Every course can be taken one to one. The pages for each age group describe the routes in more detail.',
      body: [
        { kind: 'two',
          left: [
            'For children, private lessons suit a child who is shy in groups or far ahead; see <a class="ag-inline-link" href="/coding-classes-for-kids-netherlands">coding classes for kids in the Netherlands</a>. For teenagers, they suit exam years and profile projects; see <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">coding classes for teens</a>.',
            'For students, private lessons are the usual format for thesis work and interview preparation; see <a class="ag-inline-link" href="/coding-for-college-students-netherlands">coding for college students</a>.'
          ],
          right: [
            'For adults, private lessons often follow a task from work; see <a class="ag-inline-link" href="/coding-and-ai-classes-for-adults-netherlands">coding and AI classes for adults</a>. Professionals building AI agents usually learn one to one; see the <a class="ag-inline-link" href="/ai-agents-course-for-professionals-netherlands">AI agents course for professionals</a>.',
            'The <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a> sets out the full ladder any private route follows.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs, one to one',
    h2: 'The same ladder, climbed at the learner\'s own speed',
    lede: 'Private lessons do not skip rungs; they climb them at the right speed. A teacher working with one learner sees at once when a rung is secure and when it needs another week.',
    table: { caption: 'The ladder in private lessons', head: ['Rung', 'What changes when it is one to one'], rows: [
      ['1. First code', 'The teacher adapts every example to what interests the learner'],
      ['2. Real data or real apps', 'The project is the learner\'s own, chosen with the teacher'],
      ['3. Models, systems or larger apps', 'Harder topics get as many lessons as they need'],
      ['4. Agents and tools', 'Used on the learner\'s own projects or work tasks'],
      ['5. Portfolio', 'Built around the learner\'s next step: school, university or job']
    ] },
    left: { h3: 'Why a private teacher still follows the order', ps: [
      'Skipping a rung feels faster and turns out slower. A private teacher can move quickly through what a learner already knows, but not past what they do not.',
      'The complete order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Scheduling around life', ps: [
      'Private lessons can move from week to week when school tests, exams or work demand it, as long as the teacher is told in good time.',
      'Two lessons a week is usual; some adults prefer one longer weekly lesson.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Ten courses often taken one to one',
    lede: 'Any course can be private; these are the ones most often chosen that way. Each card opens the course page with its schedule and fee.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'A teacher to themselves', courses: [
        { code: 'PRIVATE / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Block-based games at the child\'s own pace, a gentle start for a child who is shy in groups.' },
        { code: 'PRIVATE / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python for a child ready to move faster than a group would.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Around school, tests and projects', courses: [
        { code: 'PRIVATE / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The two-year Python foundation, paced around the school year.' },
        { code: 'PRIVATE / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Models for a profile project or a university application, with the write-up done properly.' },
        { code: 'PRIVATE / TEEN / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'A teenager\'s own app idea, built step by step with a teacher.' },
        { code: 'PRIVATE / TEEN / 04', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Java at the depth AP Computer Science A or a future degree expects.' }
      ] },
      { num: 'III', h3: 'Students and adults', sub: 'Goal-driven private lessons', courses: [
        { code: 'PRIVATE / PRO / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Python for a specific purpose at work or study, from zero or from wherever the learner is.' },
        { code: 'PRIVATE / PRO / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'Interview preparation with the teacher as interviewer.' },
        { code: 'PRIVATE / PRO / 03', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'Machine learning around a thesis, a work problem or a career change.' },
        { code: 'PRIVATE / PRO / 04', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Copilot Studio Agent Masterclass', blurb: 'Agents built around an organisation\'s own systems; private tuition only.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How private lessons run',
    h2: 'One teacher, a fixed time, and room to move it',
    lede: 'Teachers work from India, which keeps the same clock all year, while the Netherlands moves to summer time and back. In practice that is a three-and-a-half-hour gap in summer and four and a half in winter. Private lessons are the most flexible of all: after school, in the evening, at the weekend or occasionally in the working day, agreed at the free lesson.',
    slots: [
      { time: 'After school', l: 'For children and teenagers, late afternoon Dutch time.' },
      { time: 'Evening', l: 'For students and adults, by arrangement with the teacher.' },
      { time: 'Weekend or daytime', l: 'Saturday, Sunday or a working-day hour, where a teacher is free.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'The teacher works with the learner on a real task, learns their goal and proposes a plan. Nothing is paid until the family or learner agrees.' },
      { h3: 'The same teacher every time', p: 'Private learners keep one teacher, who comes to know how they think and what they are aiming for.' },
      { h3: 'A syllabus shaped to the goal', p: 'The course syllabus is the backbone, bent towards the learner\'s own project, exam or task.' },
      { h3: 'Parents involved for under-sixteens', p: 'For younger learners, a parent is part of every decision about format, time and progress.' },
      { h3: 'In English', p: 'All lessons are in English; Dutch school and study terms are used as learners use them.' },
      { h3: 'Work saved as you go', p: 'Everything the learner builds goes into their own GitHub repository.' }
    ]
  },

  projectsH2: 'Some of what our students have built',
  projectsLede: 'Four projects students published online, many built in private lessons. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google as written by families and students. We do not write or pay for reviews.',

  fees: {
    h2: 'What private lessons cost',
    lede: 'Monthly, in US dollars, at the same rates as every country outside India. One-to-one lessons are USD 150 a month and a small-group place USD 100. No enrolment fee and no annual contract.',
    free: ['A real private lesson', 'A plan built around your goal', 'No card or bank details'],
    group: ['Five to ten learners at one level', 'Peers and steady pace', 'Work reviewed every week', 'A certificate at the end'],
    one: ['One teacher, one learner', 'Syllabus shaped to the goal', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions about private lessons',
    h2: 'What families and learners in the Netherlands ask about one to one',
    items: [
      { q: 'Is this the same as bijles?', a: 'Not quite. Bijles usually helps with a school subject a pupil is struggling in. Coding is rarely a compulsory subject in Dutch schools, so private coding lessons teach something new rather than repair a gap. The shared idea is a teacher\'s full attention.' },
      { q: 'How common is paid help outside school in the Netherlands?', a: 'Common. According to the minister\'s letter to parliament of 25 June 2018, 23 percent of secondary pupils had paid educational support in the 2016 to 2017 school year, at a median cost of 600 euros a year.' },
      { q: 'Is one to one better than a group?', a: 'For deadlines, specific goals and an unusual pace, usually yes. For motivation and steady progress, a small group is often better. Many learners switch between the two.' },
      { q: 'Can my child switch from private to group later?', a: 'Yes, and back again. The teacher helps decide when a group at the right level is available.' },
      { q: 'Can adults take private lessons around work?', a: 'Yes. Most adults who learn one to one do so in the evening or at the weekend, and some during the working day where a teacher is free.' },
      { q: 'Which courses are only taught one to one?', a: 'The Copilot Studio courses, because agents have to be built around each organisation\'s own systems. Every other course can be taken either way.' },
      { q: 'Are private lessons in English?', a: 'Yes, all lessons are in English, with Dutch school terms kept as they are.' },
      { q: 'What does it cost?', a: 'USD 150 a month for private lessons and USD 100 a month for a small-group place, billed in US dollars, with no enrolment fee and no contract for the year. The first lesson is free.' },
      { q: 'What time zone are the teachers in?', a: 'India, which is three and a half hours ahead of the Netherlands in summer and four and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We call at a Dutch hour to arrange the free lesson. After it, the family or learner decides on the format and time; nothing is charged before that.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Pages for every age, in group or private lessons',
    lede: 'The same routes, described for each age group.',
    items: [
      { href: '/coding-classes-for-kids-netherlands', label: 'Coding classes for kids', p: 'Ages 6 to 12, from Scratch to first Python.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'Ages 12 to 18, from the brugklas to the exam year.' },
      { href: '/coding-for-college-students-netherlands', label: 'Coding for college students', p: 'Algorithms, software and AI beside a degree.' },
      { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding and AI classes for adults', p: 'Automation, data and career change.' },
      { href: '/ai-agents-course-for-professionals-netherlands', label: 'AI agents course for professionals', p: 'Copilot Studio and coding agents at work.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national ladder behind every route.' }
    ]
  },

  start: {
    h2: 'Book a free private lesson',
    lede: 'Leave a number and we will call at a Dutch hour. The first lesson is taught one to one by a real teacher, and by the end you will have a plan built around the goal you brought.',
    readFirst: 'Would you like to read first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> and the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'WhatsApp from a Dutch phone costs nothing and is usually the quickest way to reach us. The number is Indian; we have no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call to set up the private lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-for-kids-netherlands', label: 'Coding for kids' },
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' }
      ] },
      { h4: 'One to one', links: [
        { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding for adults' },
        { href: '/ai-agents-course-for-professionals-netherlands', label: 'Agents for professionals' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Private lessons for the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-ooc .ag-hero-grid { gap: clamp(1.15rem, 3vw, 2.6rem); }
.ag-root.ag-ooc .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-ooc .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ooc .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ooc .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-ooc .ag-table caption { text-align: left; }
.ag-root.ag-ooc .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-ooc .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['Kamerstuk 31289', '25 June 2018', 'schaduwonderwijs', '23 percent', '600 euros a year', 'Between 74 and 286 million euros a year', '1 to 3 percent of about 8 billion euros', 'about 60 percent', '2016 to 2017']
};
