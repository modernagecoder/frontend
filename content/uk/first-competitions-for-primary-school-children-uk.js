'use strict';
// First competitions for primary school children in the UK (ag- competition hub, UK cluster Phase 2).
// Every figure here was read at the organiser's own site on 20 September 2026 while building this
// cluster's spoke pages, and each is re-cited in the table on this page:
//  - Primary Maths Challenge: pupils aged 9 to 11 in primary school, held 9 to 20 November 2026, 25
//    questions in 45 minutes, schools order packs of ten papers.
//  - UK Bebras Challenge: Raspberry Pi Foundation, "open to all young people aged 6 to 19", "entirely
//    free to enter", 45 minutes, 9 to 20 November 2026, "a teacher must sign up as the main school
//    coordinator", more than 526,000 UK students last year.
//  - Primary Kangaroo: UKMT, "a 20 question multiple choice paper aimed at students aged 9-11",
//    18 March 2027, a follow-on round.
//  - Scottish Mathematical Challenge: Scottish Mathematical Council, a Primary division for P7, three
//    rounds a year, entry through a teacher, "marks are given for explanations of answers".
//  - Astro Pi Mission Zero: ESA Education with the Raspberry Pi Foundation, age 19 and under, "up to 4
//    young people" with a mentor who may be a "teacher, educator, parent or code club leader", about an
//    hour, free, deadline 22 March 2027 at 12:00 noon CET.
//  - Coolest Projects: Raspberry Pi Foundation, all ages, under 13s registered by an adult, seven
//    categories, every checked entry shown in the gallery or at an event.
//  - FIRST LEGO League Explore: "suitable for children age 6 to 10", delivered in the UK by the IET.
// Spine: almost all of them are entered by a school, and exactly two are not. Of the seven above, only
// Astro Pi Mission Zero (a mentor may be a parent) and Coolest Projects (an adult registers an under-13)
// can be entered by a family without a school, and both are run or co-run by the Raspberry Pi
// Foundation. That is the single most useful thing a parent of a primary-age child can know.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'PRIMARY', label: 'First competitions for primary children', blurb: 'Seven things a primary-age child can enter, and the two that do not need a school.' },
  slug: 'first-competitions-for-primary-school-children-uk',
  code: 'fcp',
  accent: '#8B5718',
  accentRationale: 'First competitions: a warm ochre from the solver (4.91:1 on every paper tint), darker and more orange than the informatics olympiad copper it sits nearest',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'First competitions for primary school children',
  title: 'First Competitions for Primary School Children UK | What to Enter',
  description: 'Seven UK competitions a primary-age child can enter, with ages, dates and cost, and the two that a family can enter without going through a school.',
  ogDescription: 'Almost every competition open to a primary child in Britain is entered by their school. Exactly two are not, and both are run by the Raspberry Pi Foundation.',
  twitterDescription: 'First competitions for primary school children in the UK: ages, dates, and who actually enters them.',
  pageName: 'First Competitions for Primary School Children in the UK',
  webPageDescription: 'A guide for parents and teachers to the competitions open to primary-age children in the United Kingdom, comparing ages, dates, format and cost, and identifying which can be entered without a school.',
  courseDescription: 'Live online maths and coding classes for primary-age children in the UK, from first Scratch projects to competition-level problem solving.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'First competitions, primary',
  navLinks: [
    { href: '#seven', label: 'The seven' },
    { href: '#school', label: 'Who enters a child' },
    { href: '#choosing', label: 'Which one first' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 6 to 11 &middot; Seven competitions compared',
  h1: 'First competitions for primary school children',
  lede: 'A parent who notices that their eight-year-old likes numbers, or will not get off the computer, eventually asks what there is to enter. The answer in Britain is more than most people think and harder to reach than it should be: there are at least seven things a primary-age child can take part in, several are free, one of them had more than half a million entrants last year, and almost all of them are entered by a school rather than by a family. This page compares them honestly, including who actually has to sign the child up, and names the two that a parent can enter on their own.',
  secondaryCta: { href: '#school', label: 'See which two need no school' },
  wa: 'Hello Modern Age Coders, my primary-age child is interested in maths or coding and I would like a free class.',
  heroNote: 'Every figure read at the organiser with the date &middot; No fees in pounds &middot; We enter nobody for anything',
  spec: [
    ['Youngest entry', 'Age 6, at Bebras and FIRST LEGO League Explore'],
    ['Largest', 'UK Bebras, 526,000 students'],
    ['Free', 'Bebras, Astro Pi and others'],
    ['November window', 'Two competitions share it'],
    ['Entered by a school', 'Five of the seven'],
    ['Entered by a parent', 'Two of the seven'],
    ['Ranked', 'Some; one has no ranking at all'],
    ['Our part', 'Teaching, never entering']
  ],
  capsuleQ: 'In short',
  capsule: 'Seven competitions are open to primary-age children in the UK. The Primary Maths Challenge is for pupils aged 9 to 11 and runs from 9 to 20 November 2026, 25 questions in 45 minutes. The UK Bebras Challenge is "open to all young people aged 6 to 19", is "entirely free to enter", takes 45 minutes and runs in the same fortnight; more than 526,000 UK students took it last year. The Primary Kangaroo is "a 20 question multiple choice paper aimed at students aged 9-11" on 18 March 2027. The Scottish Mathematical Challenge has a Primary division for P7 with three rounds a year. Astro Pi Mission Zero runs a child\'s Python program on the International Space Station in about an hour, free, by 22 March 2027. Coolest Projects shows every checked entry in a gallery, at any age. FIRST LEGO League Explore is "suitable for children age 6 to 10". Five of the seven are entered by a school; two are not. We teach the maths and the coding: the first class is free, a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a primary-age child',
    lede: 'None of these is a competition course. All three build what the competitions happen to reward.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'FCP / 01', title: 'Mental maths for kids', note: 'Number sense rather than tricks, which is what makes a timed paper feel calm instead of rushed.' },
      { course: 'scratch-programming-complete-course', code: 'FCP / 02', title: 'Scratch for kids', note: 'A first language and, more importantly, a first finished thing that somebody else can use.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'FCP / 03', title: 'Primary maths, Years 1 to 5', note: 'The whole primary ladder, taught until the arithmetic stops costing thinking time.' }
    ]
  },

  sections: [
    {
      id: 'seven', tint: 'tint', eyebrow: 'The seven',
      h2: 'What a primary-age child can actually enter',
      lede: 'Each row was read at the organiser\'s own site on 20 September 2026 while we were writing the page behind it.',
      body: [
        { kind: 'table', caption: 'Competitions open to primary-age children in the UK', head: ['Competition', 'Ages', 'When and how long', 'Cost'], rows: [
          ['UK Bebras Challenge', '"All young people aged 6 to 19"', '9 to 20 November 2026, 45 minutes online', '"Entirely free to enter"'],
          ['Primary Maths Challenge', 'Aged 9 to 11, in primary school', '9 to 20 November 2026, 25 questions in 45 minutes', 'Schools buy packs of ten papers'],
          ['Primary Kangaroo', '"Students aged 9-11"', '18 March 2027, 20 multiple-choice questions', 'A follow-on round, entered through a school'],
          ['Scottish Mathematical Challenge', 'Primary division, mainly P7', 'Three rounds across the year', 'Entered through a teacher'],
          ['Astro Pi Mission Zero', '"Age 19 and under"', 'About an hour, by 22 March 2027', 'Free'],
          ['Coolest Projects', 'All ages', 'Entries open, shown in a gallery or at an event', 'A showcase, with no ranking'],
          ['FIRST LEGO League Explore', '"Children age 6 to 10"', 'A season of club sessions', 'Through a school or club, delivered by the IET']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two things jump out of that table. The first is the November fortnight: the UK Bebras Challenge and the Primary Maths Challenge occupy exactly the same two weeks, 9 to 20 November 2026, and they ask for opposite things. One is arithmetic against a clock; the other has no arithmetic and no programming in it at all. A Year 6 child could reasonably sit both.',
            'The second is the scale of Bebras. More than 526,000 UK students took it last year, which makes it the largest computing competition in British schools by a distance, and most parents have never heard of it because it arrives inside an ordinary lesson.'
          ],
          right: [
            'Not everything here is a competition in the ranking sense. Coolest Projects checks every entry and then shows it, with no elimination at all, and Astro Pi runs every valid program on the space station. For a child who finds competition unpleasant, those two are the ones to look at first.',
            'Every page linked from this one carries the organiser\'s own words, the date we read them and a link to their site. We do not print entry fees, because they are published in pounds and every price on this site is in dollars.'
          ] },
        { kind: 'source', html: 'Sources: the organisers of each competition, read on 20 September 2026 and cited in full on the individual pages linked throughout. Modern Age Coders is not connected with any of them.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'The finding',
      h2: 'Five need a school. Two do not.',
      lede: 'This is the question parents actually ask, and almost nobody answers it in one place.',
      body: [
        { kind: 'table', caption: 'Who signs the child up, from each organiser\'s own rules', head: ['Competition', 'Who registers the child', 'Can a parent do it alone?'], rows: [
          ['Primary Maths Challenge', 'A school orders packs of ten papers and runs the paper', 'No'],
          ['UK Bebras Challenge', '"A teacher must sign up as the main school coordinator"', 'No'],
          ['Primary Kangaroo', 'Through a school, as a follow-on to a challenge', 'No'],
          ['Scottish Mathematical Challenge', 'Through a teacher, who downloads the problems and entry form', 'No'],
          ['FIRST LEGO League Explore', 'A school or club team', 'No'],
          ['Astro Pi Mission Zero', 'A mentor, who may be a "teacher, educator, parent or code club leader"', 'Yes'],
          ['Coolest Projects', 'An adult registers a child under 13', 'Yes']
        ] },
        { kind: 'three', cells: [
          { h3: 'Why this matters', p: 'A parent who wants to encourage a keen eight-year-old finds five closed doors and two open ones, and nothing online tells them which is which until they have filled in a form.' },
          { h3: 'The two that are open', p: 'Astro Pi Mission Zero and Coolest Projects. Both are run or co-run by the Raspberry Pi Foundation, which is not a coincidence: it is a charity whose purpose includes reaching children outside school structures.' },
          { h3: 'What to do about the other five', p: 'Ask the school, in September, in writing, and name the competition. Most primary teachers have never heard of the Primary Maths Challenge and will say yes if asked early.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'We have not found a single UK page that sets this out, which is why it is on ours. It also changes the advice we give. If a family asks what their nine-year-old can do this term without involving the school, the honest answer is two specific things, and both take about an hour.',
            'The home-educated position is slightly better than the table suggests in one case: UK Bebras contacts home-educated students directly about its follow-on coding round, so a family outside school is not wholly shut out there.'
          ],
          right: [
            'None of this is a criticism of the organisers. Running a paper in a hall is a school-shaped job, and entering thirty children is far easier than entering one. But it does mean the answer to "how do I enter my child" is usually "you cannot, but their teacher can".',
            'And a teacher who says yes to one competition usually says yes to the next, so the first ask is the expensive one.'
          ] },
        { kind: 'source', html: 'Each entry route in the table is taken from the organiser\'s own pages, read on 20 September 2026 and quoted in full on the page for that competition.' }
      ]
    },
    {
      id: 'choosing', tint: 'plain', eyebrow: 'Choosing',
      h2: 'Which one first, by what the child is like',
      lede: 'There is no ladder here and no right order. There is a child who enjoys one kind of thing.',
      body: [
        { kind: 'table', caption: 'Matching a child to a first competition', head: ['If a child', 'Start with', 'Because'], rows: [
          ['Likes number puzzles and is quick', 'Primary Maths Challenge', 'Twenty-five graded questions, and the last five have no options to choose from'],
          ['Is thoughtful rather than fast', 'UK Bebras Challenge', 'Forty-five minutes, no arithmetic, and it rewards noticing a rule'],
          ['Wants to make things', 'Coolest Projects', 'Every checked entry is shown, and there is no ranking to fall out of'],
          ['Finds competition upsetting', 'Astro Pi Mission Zero', 'Nothing is judged: a valid program runs on the space station and gets a certificate'],
          ['Likes building with others', 'FIRST LEGO League Explore', 'A team activity across a term, from age six'],
          ['Is in Scotland', 'Scottish Mathematical Challenge', 'Three rounds spread across the year, and marks for explaining'],
          ['Has already done the Challenge', 'Primary Kangaroo', 'The follow-on, on 18 March 2027']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The honest advice for almost every family is to start with whichever one the school already does, and only go looking if the answer is none. A child sitting a paper alongside their friends in an ordinary lesson has a much better time than one entered specially.',
            'And a low score is not information about a child. The Primary Maths Challenge is graded so that the last five questions are hard for everyone, and a nine-year-old who gets ten right has done well at something most adults would find awkward.'
          ],
          right: [
            'What a parent can usefully do at home is smaller than a competition and more valuable: twenty minutes a week of puzzles, out loud, with somebody listening to the reasoning rather than checking the answer.',
            'The full year for every age, with each organiser named and each date checked, is on the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs through primary school',
    lede: 'Nothing here is preparation for a competition. It is what makes a competition enjoyable if one turns up.',
    table: { caption: 'From counting to unfamiliar problems', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Years 1 to 2', '1. Number sense', 'Sees that six and four make ten without counting'],
      ['Years 3 to 4', '2. Recall', 'Tables and halves arrive rather than being worked out'],
      ['Year 5', '3. Unfamiliar shapes', 'Reads a wordy question and can say what kind of maths it is'],
      ['Year 6', '4. Answers with no options', 'Produces and checks a number with nothing to choose from']
    ] },
    left: { h3: 'If a competition is next month', ps: [
      'Do nothing special. These papers are designed to be sat without preparation, and a child told it matters does worse.',
      'If you want to do something, do one past question together, slowly, with no clock.'
    ] },
    right: { h3: 'If a child loves it', ps: [
      'Secondary school opens the olympiad ladder, which is set out on <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">the junior olympiad</a>.',
      'A child who enjoys the puzzles usually enjoys writing them as programs, which is what <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> exists for.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for primary-age children',
    lede: 'Grouped by what a child is ready for, with the syllabus behind every card.',
    bands: [
      { num: 'I', h3: 'Number', sub: 'Ages 5 to 11', courses: [
        { code: 'FCP / A / 01', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Playful and concrete, for ages four to seven.' },
        { code: 'FCP / A / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Every primary topic, taught to automatic.' },
        { code: 'FCP / A / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense rather than tricks.' }
      ] },
      { num: 'II', h3: 'Puzzles', sub: 'For a child who likes hard things', courses: [
        { code: 'FCP / B / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Questions that hide what they are about.' },
        { code: 'FCP / B / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From first beads to calculating with none.' },
        { code: 'FCP / B / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Sixteen rules for calculating faster in the head.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Ages 6 to 11', courses: [
        { code: 'FCP / C / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A first language and a first finished thing.' },
        { code: 'FCP / C / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'Games, apps and a first look at AI.' },
        { code: 'FCP / C / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding for kids', blurb: 'Real code in a world a child knows.' }
      ] },
      { num: 'IV', h3: 'Into secondary', sub: 'Year 6 and beyond', courses: [
        { code: 'FCP / D / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed language, taught patiently.' },
        { code: 'FCP / D / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that show why a method works.' },
        { code: 'FCP / D / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Where a Year 6 goes when primary stops stretching them.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Short, weekly, and early enough that a child is still awake',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer. Primary children take an early evening slot, agreed in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'While a child is still fresh enough to think.' },
      { time: 'Saturday or Sunday morning', l: 'For households where weekday evenings are gone.' },
      { time: 'School holidays', l: 'Little and often, rather than one long session.' }
    ],
    cells: [
      { h3: 'Reasoning out loud', p: 'A child says why before saying what, which is the habit every one of these competitions rewards.' },
      { h3: 'Our own puzzles', p: 'Written by us. We do not reproduce any competition\'s questions in a lesson.' },
      { h3: 'Five to ten children', p: 'Enough to hear a better method than your own, few enough that nobody stays silent.' },
      { h3: 'Parents told plainly', p: 'A short honest note after each block, not a score to put on the fridge.' },
      { h3: 'One to one when it helps', p: 'For a child far ahead of their year, or one who freezes in a group.' },
      { h3: 'We enter nobody', p: 'Every competition here is entered by a school or a parent. We teach, and that is all.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, most of them older than this and all of them once eight. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'What parents have written about us on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly rate in US dollars, the same in every country outside India, with nothing to join and no fixed term.',
    free: ['A real lesson, taught not sold', 'An honest read on where the maths is', 'No card details'],
    group: ['Five to ten children at one level', 'The same teacher every week', 'Work marked and talked through', 'A certificate at the end'],
    one: ['One child with one teacher', 'Built around a particular gap', 'Useful when a group hour will not fit']
  },

  faq: {
    eyebrow: 'Primary competition questions',
    h2: 'What parents of primary children ask',
    items: [
      { q: 'What competitions can a primary-age child enter in the UK?', a: 'At least seven: the UK Bebras Challenge, the Primary Maths Challenge, the Primary Kangaroo, the Scottish Mathematical Challenge, Astro Pi Mission Zero, Coolest Projects and FIRST LEGO League Explore.' },
      { q: 'Can I enter my child myself?', a: 'For two of them. Astro Pi Mission Zero allows a mentor who may be a teacher, educator, parent or code club leader, and Coolest Projects has an adult register a child under 13. The other five are entered by a school.' },
      { q: 'Which is the biggest?', a: 'The UK Bebras Challenge. More than 526,000 UK students took it last year, and it is entirely free to enter.' },
      { q: 'Which is free?', a: 'Bebras and Astro Pi Mission Zero are free. The others involve a school buying papers or running a team, and entry prices are published by the organisers in pounds, which we do not print.' },
      { q: 'What is the youngest age?', a: 'Six, for the UK Bebras Challenge and for FIRST LEGO League Explore. Coolest Projects has no lower age limit at all.' },
      { q: 'Do any of them have no ranking?', a: 'Yes. Coolest Projects checks every entry and then shows it with no elimination, and Astro Pi Mission Zero runs every valid program and issues a certificate.' },
      { q: 'Two of them are in the same fortnight, aren\'t they?', a: 'Yes. The UK Bebras Challenge and the Primary Maths Challenge both run from 9 to 20 November 2026, and they ask for opposite things: one is arithmetic against a clock, the other has no arithmetic in it.' },
      { q: 'How should we prepare?', a: 'Barely at all. These papers are designed to be sat without preparation. Twenty minutes a week of puzzles talked through out loud, with somebody listening to the reasoning, is worth more than any drilling.' },
      { q: 'What if our school does not enter anything?', a: 'Ask in September, in writing, naming the competition. Most primary teachers have not heard of the Primary Maths Challenge and will say yes if asked early enough to plan.' },
      { q: 'What does a class cost?', a: 'The first is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to join.' }
    ]
  },

  elsewhere: {
    eyebrow: 'The pages behind this one',
    h2: 'Each competition in full',
    lede: 'Every row of the table above has its own page, with the organiser\'s words and the date we read them.',
    items: [
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'Twenty-five questions, and the five with no options.' },
      { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge', p: 'Free, 45 minutes, no programming at all.' },
      { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi Mission Zero', p: 'An hour of Python that runs in space.' },
      { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK', p: 'Seven categories and no ranking.' },
      { href: '/first-lego-league-uk-coding-help', label: 'FIRST LEGO League', p: 'Explore from age six, delivered by the IET.' },
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'Marks for the explanation, from P7 upwards.' }
    ]
  },

  start: {
    h2: 'Book a free lesson',
    lede: 'Tell us your child\'s school year and what they enjoy. The free lesson teaches something real, and afterwards we say plainly what we saw.',
    readFirst: 'Rather read first? Each course keeps its syllabus on its own <a class="ag-inline-link" href="/courses">course page</a>, our approach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows what follows what.',
    note: 'WhatsApp is free from a UK mobile and reaches us soonest. Our number belongs to India, which we say on every page, and no British office exists.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary competitions', links: [
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge' },
        { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi' },
        { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK' }
      ] },
      { h4: 'Primary courses', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Primary maths' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch for kids' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the child; the school enters them'
  },

  personalityCss: `
.ag-root.ag-fcp .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-fcp .ag-capsule { border-left-width: 6px; border-radius: 0 20px 20px 0; }
.ag-root.ag-fcp .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-fcp .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.022em; }
.ag-root.ag-fcp .ag-table td:last-child { font-size: 0.95em; }
.ag-root.ag-fcp .ag-spec dt { letter-spacing: 0.108em; }
.ag-root.ag-fcp .ag-three h3 { letter-spacing: -0.002em; }
.ag-root.ag-fcp .ag-slots { gap: 1.42rem; }
`,

  mustMention: ['9 to 20 November 2026', '526,000', 'teacher, educator, parent or code club leader', 'Primary Kangaroo', 'age 6 to 10', 'no ranking', 'aged 9 to 11']
};
