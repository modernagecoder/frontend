'use strict';
// UKMT Kangaroo rounds practice (ag- competition spoke, UK cluster Phase 2).
// UKMT facts read on 20 September 2026:
//  - Competitions calendar 2026-27: Andrew Jobbings Senior Kangaroo 18 November 2026; Primary Kangaroo,
//    Grey Kangaroo and Pink Kangaroo all 18 March 2027; Junior Kangaroo 15 June 2027.
//  - Grey and Pink Kangaroos page: "60 minute, 25 multiple choice challenges", follow-on rounds to the
//    Intermediate Maths Challenge; Grey is "England and Wales: Year 9 and below", "Scotland: S2 or
//    below", "Northern Ireland: Year 10 or below"; Pink is "England and Wales: Year 10 and 11",
//    "Scotland: S3 and S4", "Northern Ireland: Year 11 or 12"; entry is "by invitation based on a
//    qualifying IMC score, or by discretionary entry", with schools registering and buying entries;
//    "Several thousand UK-based students qualify from the IMC each year"; UKMT is "the UK member of the
//    Association Kangourou sans Frontieres" and "Around six million young people take Kangaroo
//    competitions each year".
//  - Junior Kangaroo: "a 60 minute, 25 multiple choice question follow-on round aimed at students year 8
//    or below". Senior Kangaroo: the same length and question count, "aimed at students year 13 or
//    below". Primary Kangaroo: "a 20 question multiple choice paper aimed at students aged 9-11",
//    England and Wales Year 5/6 or below, Scotland and Northern Ireland P6/P7 or below.
// Entry prices are published by UKMT in pounds and are not printed here.
// Nothing is said about negative marking or guessing: UKMT does not publish a marking scheme on the
// pages we could read, so no guessing advice appears anywhere on this page.
// Spine: the wrong answers are somebody's working. Our own worked example, computed 20 September 2026:
// a price rises by 10 per cent and then falls by 10 per cent, finishing at 99. The answer is 100, and
// the five most natural mistakes give 99 (the changes cancel), 108.9 (add 10 per cent to the final),
// 89.1 (take 10 per cent off it), 110 (divide by 0.9 only) and 90 (divide by 1.1 only). Every one of
// them is a printable option, which is why finding your answer on the list proves nothing.
// No UKMT question is reproduced; UKMT publishes its own past papers free.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'KANGAROO', label: 'UKMT Kangaroo rounds', blurb: 'Five papers, twenty-five questions in an hour, and six million entrants worldwide.' },
  slug: 'ukmt-kangaroo-rounds-practice',
  code: 'kan',
  accent: '#6922A0',
  accentRationale: 'Kangaroo rounds: a rich violet from the solver (7.29:1 on every paper tint) with the largest perceptual separation available in the palette, and a blue-violet against the red-plum of the Primary Maths Challenge page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UKMT Kangaroo rounds practice',
  title: 'UKMT Kangaroo Practice | Primary, Junior, Grey, Pink and Senior',
  description: 'Preparing for the UKMT Kangaroo rounds: 25 multiple choice questions in 60 minutes, who sits which paper, and why the wrong options are somebody else\'s working.',
  ogDescription: 'Around six million young people sit a Kangaroo paper each year. The wrong answers on it are not random: each one is the result of a specific ordinary mistake.',
  twitterDescription: 'UKMT Kangaroo preparation: five papers, 25 questions in an hour, and what the wrong options are for.',
  pageName: 'UKMT Kangaroo Rounds Practice',
  webPageDescription: 'Preparation guidance for the UK Mathematics Trust Kangaroo rounds, covering the Primary, Junior, Grey, Pink and Senior papers, eligibility by nation, the format, and how multiple-choice distractors are built.',
  courseDescription: 'Live online mathematics classes that build the speed, estimation and error-checking the UKMT Kangaroo rounds reward, for ages 9 upwards.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'UKMT Kangaroo rounds',
  navLinks: [
    { href: '#papers', label: 'Five papers' },
    { href: '#distractors', label: 'The wrong options' },
    { href: '#practise', label: 'How to practise' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 9 to 18 &middot; November, March and June',
  h1: 'UKMT Kangaroo rounds practice',
  lede: 'The Kangaroo is the biggest school mathematics competition on earth and most British parents have never heard of it. UKMT is the UK member of the Association Kangourou sans Frontières, and around six million young people sit a Kangaroo paper somewhere in the world each year. In Britain it arrives as a follow-on round: a pupil does well in a Challenge, and a few weeks later sits twenty-five multiple-choice questions in sixty minutes at a level a notch above. The format looks familiar and the questions are not, and there is one thing about a good multiple-choice paper that almost nobody explains to a child before they sit one.',
  secondaryCta: { href: '#distractors', label: 'See where the wrong answers come from' },
  wa: 'Hello Modern Age Coders, my child has qualified for a UKMT Kangaroo round and I would like a free maths class.',
  heroNote: 'Quoted from UKMT with the date we read it &middot; Our own practice questions &middot; No guessing advice, because no marking scheme is published',
  spec: [
    ['Organiser', 'UK Mathematics Trust'],
    ['Part of', 'Kangourou sans Frontières'],
    ['Worldwide', 'Around six million entrants a year'],
    ['Format', '25 questions in 60 minutes'],
    ['Primary paper', '20 questions, ages 9 to 11'],
    ['Five papers', 'Primary, Junior, Grey, Pink, Senior'],
    ['Entry', 'From a Challenge score, or discretionary'],
    ['Entered by', 'A school, not by us']
  ],
  capsuleQ: 'In short',
  capsule: 'The UKMT Kangaroo rounds are follow-on papers to the Mathematical Challenges. Grey and Pink are described by UKMT as "60 minute, 25 multiple choice challenges" following the Intermediate Maths Challenge, with Grey for "England and Wales: Year 9 and below" and Pink for "England and Wales: Year 10 and 11"; both fall on 18 March 2027 alongside the Primary Kangaroo, "a 20 question multiple choice paper aimed at students aged 9-11". The Junior Kangaroo, 60 minutes and 25 questions for "students year 8 or below", is on 15 June 2027, and the Andrew Jobbings Senior Kangaroo, same length for "students year 13 or below", on 18 November 2026. Entry is by invitation on a qualifying Challenge score or by discretionary entry, and UKMT says several thousand UK students qualify from the Intermediate Challenge each year. We teach the mathematics underneath, live online for ages 6 to 67. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a Kangaroo candidate',
    lede: 'Speed comes from fluency, and fluency is the thing a course can actually build.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'KAN / 01', title: 'Mental maths for kids', note: 'For the Primary and Junior papers: calculation that arrives instead of being worked out.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'KAN / 02', title: 'Middle school maths mastery', note: 'For Grey and Pink: the algebra, ratio and geometry those questions are built from.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'KAN / 03', title: 'Olympiad and competition maths', note: 'For a pupil who finds the Challenge easy and wants questions that resist a first look.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The five papers',
      h2: 'One format, five age groups, three dates',
      lede: 'Facts read at UKMT\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The UKMT Kangaroo rounds, as UKMT publishes them', head: ['Paper', '2026-27 date', 'Format', 'Who sits it'], rows: [
          ['Primary Kangaroo', '18 March 2027', '20 multiple choice questions', 'Aged 9 to 11: Year 5 or 6 and below in England and Wales, P6 or P7 and below in Scotland and Northern Ireland'],
          ['Junior Kangaroo', '15 June 2027', '25 questions in 60 minutes', '"students year 8 or below", following the Junior Mathematical Challenge'],
          ['Grey Kangaroo', '18 March 2027', '25 questions in 60 minutes', 'Year 9 and below in England and Wales, S2 or below in Scotland, Year 10 or below in Northern Ireland'],
          ['Pink Kangaroo', '18 March 2027', '25 questions in 60 minutes', 'Year 10 and 11 in England and Wales, S3 and S4 in Scotland, Year 11 or 12 in Northern Ireland'],
          ['Andrew Jobbings Senior Kangaroo', '18 November 2026', '25 questions in 60 minutes', '"students year 13 or below", following the Senior Mathematical Challenge']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Every one of these is a follow-on. A pupil does not enter a Kangaroo paper directly: they sit a Mathematical Challenge first, and UKMT invites those above a qualifying score, with discretionary entries also possible through a school. Several thousand UK students qualify from the Intermediate Challenge each year.',
            'That means the honest answer to "how do I get my child into the Kangaroo" is to make sure their school enters the Challenge. Nothing a tutor does can shortcut it, and we could not enter anyone if we tried.'
          ],
          right: [
            'The international scale is worth knowing because it explains the style. UKMT is the UK member of the Association Kangourou sans Frontières, and around six million young people take a Kangaroo paper each year across dozens of countries. Questions that work in that many places tend to be short, visual and language-light, which suits some pupils very well and surprises others.',
            'Two of these papers share their date with an olympiad. The Grey and Pink papers fall on 18 March 2027, the same afternoon as Cayley, Hamilton and Maclaurin, and the Junior Kangaroo shares 15 June 2027 with the Junior Mathematical Olympiad. They are entirely different papers, and a pupil sits one.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukmt.org.uk/intermediate-challenges/grey-and-pink-kangaroos" rel="noopener" target="_blank">UKMT, Grey and Pink Kangaroos</a>, <a class="ag-inline-link" href="https://ukmt.org.uk/junior-challenges/primary-kangaroo" rel="noopener" target="_blank">Primary Kangaroo</a> and the <a class="ag-inline-link" href="https://ukmt.org.uk/competitions" rel="noopener" target="_blank">competitions calendar</a>, read 20 September 2026. We have no connection with the UK Mathematics Trust or Kangourou sans Frontières.' }
      ]
    },
    {
      id: 'distractors', tint: 'deep', eyebrow: 'The method',
      h2: 'The wrong answers are somebody\'s working',
      lede: 'In a well-written multiple-choice paper the options are not decoration. Each wrong one is the number a particular ordinary mistake produces.',
      body: [
        { kind: 'p', html: 'Take a question of the right shape. <strong>A price goes up by 10 per cent, then down by 10 per cent, and finishes at 99. What was it before?</strong> Most pupils get to an answer inside a minute. The interesting part is how many different answers a minute produces.' },
        { kind: 'table', caption: 'Our arithmetic of 20 September 2026: one question, six plausible numbers', head: ['Number', 'The thinking that produces it', 'Right?'], rows: [
          ['100', 'Up 10 per cent then down 10 per cent multiplies by 0.99, so the start was 99 divided by 0.99', 'Yes'],
          ['99', 'The two changes look as though they cancel, so nothing happened', 'No, and this is the one that catches most people'],
          ['110', 'Undoing only the 10 per cent fall: 99 divided by 0.9', 'No'],
          ['90', 'Undoing only the 10 per cent rise: 99 divided by 1.1', 'No'],
          ['108.9', 'Adding 10 per cent to the final figure instead of undoing it', 'No'],
          ['89.1', 'Taking 10 per cent off the final figure', 'No']
        ] },
        { kind: 'three', cells: [
          { h3: 'Why this matters', p: 'Five of those six numbers could be printed as options, and each one would feel right to the pupil who produced it. Finding your answer on the list is not evidence that you are correct.' },
          { h3: 'The habit that helps', p: 'Work the answer out before looking at the options, then look. If the number is there, ask once what mistake would also land there. It costs five seconds.' },
          { h3: 'Why 99 is the trap', p: 'A rise and fall of the same percentage never cancel, because the second percentage is taken of a bigger number. That single fact is worth more Kangaroo marks than any amount of speed.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'This is the part of multiple-choice technique that is actually mathematics rather than exam craft. A pupil who understands why the naive answer is wrong has learned something that stays; a pupil who has been taught to eliminate options has learned a trick that only works on papers.',
            'It also explains a pattern parents notice and misread: a child scoring well on school tests and poorly on a Kangaroo paper is usually not slower. They are being caught by options built out of the mistakes school tests never punish, because school tests ask them to show working and the error shows up.'
          ],
          right: [
            'We give no advice on guessing anywhere on this page. UKMT does not publish a marking scheme for these papers on the pages we could read, so whether a wrong answer costs anything is not something we know, and a guessing rule built on an assumption is worse than none.',
            'What we do teach is that the answer should be arrived at before the options are read. Everything else about multiple choice follows from that one habit.'
          ] },
        { kind: 'source', html: 'The question and all six numbers are ours, computed on 20 September 2026. No UKMT question is reproduced anywhere on this page; UKMT publishes its own past papers free.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'How to practise',
      h2: 'Twenty-five questions, sixty minutes, and the ones to leave',
      lede: 'Two minutes and twenty-four seconds a question is the average, and a pupil should almost never spend it evenly.',
      body: [
        { kind: 'table', caption: 'What helps on a Kangaroo paper, and what does not', head: ['Worth doing', 'Why', 'Not worth doing'], rows: [
          ['Arriving at an answer before reading the options', 'The options are built from likely errors and will confirm one of them', 'Scanning the options first to narrow down'],
          ['Practising mental arithmetic to fluency', 'Every second not spent calculating is a second spent thinking', 'Drilling past papers against a clock with shaky tables'],
          ['Learning to leave a question and come back', 'Six minutes on one question costs two and a half others', 'Refusing to move on out of stubbornness'],
          ['Checking the size of an answer', 'Most wrong options are the right size, but some are absurd once you look', 'Trusting a calculation that was never sanity-checked'],
          ['Doing UKMT past papers with the solutions', 'The organiser publishes both, free, and the solutions explain the traps', 'Buying a course to teach what the organiser gives away']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The step up from a Challenge to a Kangaroo catches families out. It is the same format at a harder level, so a pupil who was comfortable in the Challenge can find the follow-on genuinely difficult, and read that as a verdict on themselves. It is not: the paper is sat by pupils already in the top slice of the Challenge.',
            'For the Primary Kangaroo the picture is gentler still: twenty questions, ages nine to eleven, and most schools enter a handful of pupils who enjoy the Primary Maths Challenge.'
          ],
          right: [
            'A pupil who wants harder mathematics after a Kangaroo should look at the written papers rather than more multiple choice. The <a class="ag-inline-link" href="/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation">Cayley, Hamilton and Maclaurin</a> olympiads run on the same afternoon as Grey and Pink, and they ask for something completely different.',
            'The whole season, with every organiser named and every date checked, is on the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to a comfortable hour',
    lede: 'A pupil moves up when the previous habit needs no thought, not when a year passes.',
    table: { caption: 'From arithmetic to unfamiliar questions at speed', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Ages 9 to 10', '1. Recall', 'Tables, doubles and percentages of round numbers arrive without working'],
      ['Ages 10 to 12', '2. Methods that do not wobble', 'Fractions, ratio and area come out right when the numbers are awkward'],
      ['Ages 12 to 14', '3. Answer before options', 'Reaches a number first and then looks at what is printed'],
      ['Ages 14 to 18', '4. Knowing when to leave', 'Abandons a question at two minutes without it costing any confidence']
    ] },
    left: { h3: 'If the paper is next week', ps: [
      'Work UKMT\'s own past papers with the published solutions, and read why each wrong option is there. That is the whole of useful last-minute preparation.',
      'Do not add topics. A Kangaroo paper is built from mathematics the pupil has already met.'
    ] },
    right: { h3: 'If a pupil wants more', ps: [
      'The olympiad papers on the same dates ask for written arguments instead, which is a different and deeper skill.',
      'Pupils who enjoy fast puzzle work often take to programming quickly, which is what <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> is built for.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses behind a fast, accurate hour',
    lede: 'Grouped by age, with the syllabus behind every card.',
    bands: [
      { num: 'I', h3: 'Primary and Junior', sub: 'Ages 9 to 13', courses: [
        { code: 'KAN / A / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Calculation that stops costing thinking time.' },
        { code: 'KAN / A / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The number work every fast paper assumes.' },
        { code: 'KAN / A / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From first beads to calculating with none.' }
      ] },
      { num: 'II', h3: 'Grey and Pink', sub: 'Years 9 to 11', courses: [
        { code: 'KAN / B / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Ratio, algebra and geometry at the level these papers use.' },
        { code: 'KAN / B / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'The school course, taught to the board in use.' },
        { code: 'KAN / B / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speed methods for the arithmetic underneath.' }
      ] },
      { num: 'III', h3: 'Senior', sub: 'Years 12 and 13', courses: [
        { code: 'KAN / C / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra through to calculus, at sixth-form pace.' },
        { code: 'KAN / C / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A-level maths', blurb: 'The qualification running alongside the competitions.' },
        { code: 'KAN / C / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'For questions that do not announce their method.' }
      ] },
      { num: 'IV', h3: 'Sideways', sub: 'For pupils who also build', courses: [
        { code: 'KAN / D / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a way of seeing why a method works.' },
        { code: 'KAN / D / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language for a curious ten-year-old.' },
        { code: 'KAN / D / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting and how long a method takes.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Short weekly sessions, with the arithmetic done out loud',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer. Younger pupils take an early evening slot, agreed in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'For pupils of primary and lower secondary age.' },
      { time: 'Later weekday evening', l: 'For Year 10 upwards.' },
      { time: 'Weekend morning', l: 'For a longer session on a set of questions.' }
    ],
    cells: [
      { h3: 'Answers before options', p: 'Every practice question is worked to a number before anything printed is looked at.' },
      { h3: 'Mistakes named', p: 'When a pupil lands on a wrong option we work out which mistake produced it, rather than moving on.' },
      { h3: 'Five to ten pupils', p: 'Enough for a quicker method to surface, small enough that nobody hides at the back.' },
      { h3: 'Our own questions', p: 'Written by us in the same style. UKMT publishes its past papers free and that is where the real ones live.' },
      { h3: 'One to one when useful', p: 'For a pupil far ahead of their year, or one who freezes in a timed group.' },
      { h3: 'Nothing promised', p: 'We cannot enter anyone for a Kangaroo paper and promise no score or certificate.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, none of them competition entries. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left on our Google profile, reproduced word for word.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly rate in US dollars for families outside India, with nothing to pay to register and no minimum term.',
    free: ['A full lesson with a teacher', 'A straight read on the level', 'No card details taken'],
    group: ['Five to ten pupils at one level', 'The same teacher every week', 'Work marked and discussed', 'A certificate at the end'],
    one: ['A teacher working with one pupil', 'Shaped around the specific gap', 'Useful when a group hour will not fit']
  },

  faq: {
    eyebrow: 'Kangaroo questions',
    h2: 'What parents and pupils ask',
    items: [
      { q: 'What is the UKMT Kangaroo?', a: 'A set of follow-on papers to the Mathematical Challenges. UKMT is the UK member of the Association Kangourou sans Frontières, and around six million young people take a Kangaroo paper worldwide each year.' },
      { q: 'When are the Kangaroo rounds in 2026-27?', a: 'The Andrew Jobbings Senior Kangaroo is on 18 November 2026; the Primary, Grey and Pink Kangaroos on 18 March 2027; the Junior Kangaroo on 15 June 2027.' },
      { q: 'How long is the paper and how many questions?', a: 'UKMT describes the Junior, Grey, Pink and Senior papers as 60 minutes and 25 multiple-choice questions. The Primary Kangaroo is a 20-question multiple-choice paper for pupils aged 9 to 11.' },
      { q: 'Which paper does my child sit?', a: 'Grey is for Year 9 and below in England and Wales, S2 or below in Scotland and Year 10 or below in Northern Ireland; Pink is Year 10 and 11, S3 and S4, or Year 11 or 12. Junior is for Year 8 or below and Senior for Year 13 or below.' },
      { q: 'How does a pupil qualify?', a: 'By sitting a Mathematical Challenge first. UKMT invites pupils above a qualifying score and also accepts discretionary entries through a school. Several thousand UK students qualify from the Intermediate Challenge each year.' },
      { q: 'Should my child guess if they are unsure?', a: 'We do not give guessing advice. UKMT does not publish a marking scheme for these papers on the pages we could read, so we do not know whether a wrong answer costs anything, and a rule built on an assumption would be worse than none.' },
      { q: 'Why did my child pick a wrong answer that looked right?', a: 'Because the wrong options are usually built from real mistakes. A price that rises 10 per cent and falls 10 per cent ends at 99 per cent of where it started, so "the changes cancel" produces a number that will very often be printed.' },
      { q: 'Is the Kangaroo the same as the olympiad on that date?', a: 'No. The Grey and Pink papers fall on the same afternoon as the Cayley, Hamilton and Maclaurin olympiads, and the Junior Kangaroo shares its day with the Junior Mathematical Olympiad. Kangaroo papers are multiple choice; olympiad papers want full written solutions.' },
      { q: 'How should a pupil practise?', a: 'With UKMT\'s own past papers and published solutions, reading why each wrong option is there, and with mental arithmetic until calculation stops costing time. Not by drilling against a clock with shaky tables.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other papers on the same dates',
    lede: 'The written papers that share a calendar with these, and where the whole year is set out.',
    items: [
      { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton and Maclaurin', p: 'Same afternoon as Grey and Pink, entirely different paper.' },
      { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Mathematical Olympiad', p: 'Shares 15 June 2027 with the Junior Kangaroo.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'The November paper for ages 9 to 11.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Dates for every contest, checked with the people who run them.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'How to tell a serious provider from a well-designed one.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us the year group and which paper is coming. The free lesson is a real one, and afterwards we say honestly where the time is being lost.',
    readFirst: 'Rather read? Each course keeps its syllabus on its own <a class="ag-inline-link" href="/courses">course page</a>, the method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows what follows what.',
    note: 'A WhatsApp message costs a UK mobile nothing and usually reaches us first. Our number belongs to India, which we state on every page, and there is no British office.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/junior-mathematical-olympiad-preparation', label: 'Junior olympiad' },
        { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton, Maclaurin' }
      ] },
      { h4: 'Maths courses', links: [
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the arithmetic; UKMT sets the hour'
  },

  personalityCss: `
.ag-root.ag-kan .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-kan .ag-capsule { border-left-width: 9px; border-radius: 0 14px 14px 0; }
.ag-root.ag-kan .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-kan .ag-table caption { text-align: left; font-weight: 600; font-size: 0.97em; }
.ag-root.ag-kan .ag-table td:first-child { font-variant-numeric: tabular-nums; font-weight: 600; }
.ag-root.ag-kan .ag-spec dt { letter-spacing: 0.145em; }
.ag-root.ag-kan .ag-three h3 { letter-spacing: -0.009em; }
.ag-root.ag-kan .ag-slots { gap: 1.35rem; }
`,

  mustMention: ['60 minute, 25 multiple choice', 'Association Kangourou sans Fronti', 'six million young people', 'Year 9 and below', '20 question multiple choice paper', '18 March 2027', '99']
};
