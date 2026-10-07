'use strict';
// Australian coding, maths and AI competitions calendar (ag- competition hub, Australia cluster
// Phase 1 preview, row 9). Every date read raw at the organiser's own site on 7 October 2026:
// Australian Maths Trust 2026 Competitions and Programs key dates calendar (PDF on amt.edu.au,
// fetched with curl's own default agent; the 403 seen earlier came from a short spoofed browser
// string, not from a block on automated reading): Bebras 9 February to 8 March; Kangourou sans
// Frontieres 24 to 26 March; Maths Challenge 2 March to 26 June; Maths Enrichment 30 March to
// 16 October; CAT 19 to 21 May; Raspberry Pi Foundation Coding Challenge 16 to 18 June; AMC 4 to
// 6 August; AIO 27 August; AIMO 10 September; registrations opened Tuesday 27 January 2026. APSMO
// Maths Olympiad Years 5-6: 6 May, 10 June, 29 July, 9 September 2026. ICAS 2026 sitting windows:
// Digital Technologies 3 to 7 August, Mathematics 24 to 28 August. Young ICT Explorers 2026:
// registration 1 July, submission 31 July, State Awards 29 October, national judging 9 to 21 November,
// National Awards 26 November. RoboCup Junior Australia and Tournament of Minds publish no 2026 date
// we could confirm; listed without dates. No entry fees are printed (one-currency rule). The AMT
// had not published a 2027 calendar on the day of checking. Spine: backward planning from a
// competition date (family checked free site-wide on 7 October 2026). Preparation, never affiliation.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'COMPETITIONS CALENDAR', label: 'Australian competitions calendar', blurb: 'Coding, maths and AI contests for Australian students, month by month, with every date checked at the organiser.' },
  slug: 'australian-coding-maths-and-ai-competitions-calendar',
  code: 'auc',
  accent: '#756012',
  accentRationale: 'Australian competitions calendar: a muted wattle ochre (5.0:1 on #EDE7DA), at least 12 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Australian coding, maths and AI competitions calendar',
  title: 'Coding and Maths Competitions in Australia: 2026 Calendar',
  description: 'Coding, maths and AI competitions for Australian students, month by month: Bebras, AMC, AIO, CAT, ICAS, APSMO and Young ICT Explorers, every date checked at source.',
  ogDescription: 'A month-by-month calendar of school competitions in coding, maths and AI open to Australian students, with each 2026 date checked at the organiser and a simple way to plan preparation backwards from the day.',
  twitterDescription: 'Australian coding, maths and AI competitions for 2026, month by month, checked at each organiser.',
  pageName: 'Australian Coding, Maths and AI Competitions Calendar',
  webPageDescription: 'A calendar of coding, mathematics and computational thinking competitions open to Australian school students in 2026, with dates, year levels and formats taken from each organiser, guidance on which suits which student, and a backward-planning method for preparation.',
  courseDescription: 'Live online coding and maths classes for Australian students preparing for competitions such as Bebras, the AMC, CAT and the Australian Informatics Olympiad, taught as problem solving rather than drilling.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Competitions calendar',
  navLinks: [
    { href: '#calendar', label: 'The calendar' },
    { href: '#who', label: 'Which one' },
    { href: '#planning', label: 'Planning' },
    { href: '#rules', label: 'How entry works' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 3 to 12 &middot; Checked at each organiser',
  h1: 'Australian coding and maths competitions',
  lede: 'Australian students have more coding, maths and computational thinking competitions open to them than most families realise, and they are spread across the whole school year. Some take forty-five minutes in a classroom; others ask for months of project work. The trouble is that dates live on a dozen different websites, often in PDFs, and change every year. This page gathers the 2026 calendar in one place, with every date checked at the organiser\'s own site, explains which competitions suit which students, and shows how to plan preparation backwards from the day so nothing is crammed. We are not affiliated with any of these organisers. We help students get ready.',
  secondaryCta: { href: '#planning', label: 'See the planning method' },
  wa: 'Hello Modern Age Coders, I would like a free class about preparing for coding or maths competitions in Australia.',
  heroNote: 'Dates checked at source &middot; Independent of every organiser &middot; Preparation, not drilling',
  spec: [
    ['Covers', 'Coding, maths and computational thinking'],
    ['Year levels', 'Years 3 to 12'],
    ['Dates for', '2026, checked 7 October 2026'],
    ['Organisers', 'AMT, APSMO, ICAS, Young ICT Explorers and more'],
    ['Still to come in 2026', 'Young ICT Explorers judging and awards'],
    ['2027 dates', 'Not yet published by the AMT when checked'],
    ['We provide', 'Preparation classes'],
    ['We are not', 'An organiser or official partner']
  ],
  capsuleQ: 'In short',
  capsule: 'Australian school students can enter coding, maths and computational thinking competitions all year. In 2026, Bebras ran 9 February to 8 March, the CAT 19 to 21 May, the AMC 4 to 6 August and the Australian Informatics Olympiad on 27 August, all run by the Australian Maths Trust. Young ICT Explorers judges national finalists from 9 to 21 November 2026. Every date here was checked at the organiser.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for competition-minded students',
    lede: 'Problem solving first; the competitions reward thinking more than speed.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'AUC / 01', title: 'Computational thinking for primary', note: 'Patterns, logic and step-by-step reasoning: the ground Bebras and the CAT stand on.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'AUC / 02', title: 'Competition maths', note: 'Problem solving for the AMC, APSMO and the harder olympiad papers.' },
      { course: 'competitive-programming-for-teens-course', code: 'AUC / 03', title: 'Competitive programming', note: 'Correct, efficient code under time pressure, for the Australian Informatics Olympiad.' }
    ]
  },

  sections: [
    {
      id: 'calendar', tint: 'tint', eyebrow: 'The 2026 calendar',
      h2: 'Month by month, with every date checked at source',
      lede: 'Dates below are the organisers\' 2026 dates, read on their own sites on 7 October 2026. Most entries go through a school; check the organiser for entry details and for 2027 dates when they appear.',
      body: [
        { kind: 'table', caption: 'Coding, maths and computational thinking competitions open to Australian students, 2026', head: ['When (2026)', 'Competition', 'Organiser', 'Year levels', 'Format'], rows: [
          ['9 February to 8 March', 'Bebras computational thinking challenge', 'Australian Maths Trust', 'Years 3 to 12', '60 minutes for Middle Primary, 45 for other divisions; Australia only'],
          ['2 March to 26 June', 'Maths Challenge', 'Australian Maths Trust', 'Years 3 to 10', 'Problem-solving program over 3 to 4 weeks'],
          ['24 to 26 March', 'Kangourou sans Frontières', 'Australian Maths Trust', 'Years 3 to 12', '60 minutes primary, 75 minutes secondary'],
          ['30 March to 16 October', 'Maths Enrichment', 'Australian Maths Trust', 'Years 4 to 10', 'Extension program over 12 to 16 flexible weeks'],
          ['6 May, 10 June, 29 July, 9 September', 'Maths Olympiad, Years 5 and 6', 'APSMO', 'Years 5 and 6', 'Four separate contests about six weeks apart'],
          ['19 to 21 May', 'Computational and Algorithmic Thinking (CAT)', 'Australian Maths Trust', 'Years 5 to 12', '60 minutes; no coding experience required'],
          ['16 to 18 June', 'Raspberry Pi Foundation Coding Challenge', 'Australian Maths Trust', 'Years 5 to 12', '45 minutes; divisions by skill level, free activity'],
          ['1 July and 31 July', 'Young ICT Explorers: registration, then project submission', 'Young ICT Explorers', 'School students in teams', 'Project-based technology competition'],
          ['3 to 7 August', 'ICAS Digital Technologies', 'ICAS Assessments', 'See organiser', 'Sitting window'],
          ['4 to 6 August', 'Australian Mathematics Competition (AMC)', 'Australian Maths Trust', 'Years 3 to 12', '60 minutes primary, 75 minutes secondary'],
          ['24 to 28 August', 'ICAS Mathematics', 'ICAS Assessments', 'See organiser', 'Sitting window'],
          ['27 August', 'Australian Informatics Olympiad (AIO)', 'Australian Maths Trust', 'Years 7 to 12', '3 hours; students must be able to write code'],
          ['10 September', 'Australian Intermediate Mathematics Olympiad (AIMO)', 'Australian Maths Trust', 'Years 7 to 10', '4 hours; pitched at Year 10'],
          ['29 October', 'Young ICT Explorers State Awards', 'Young ICT Explorers', 'Finalists', 'Ceremony via Zoom, 1pm AEST'],
          ['9 to 21 November', 'Young ICT Explorers national judging', 'Young ICT Explorers', 'National finalists', 'Judging sessions'],
          ['26 November', 'Young ICT Explorers National Awards', 'Young ICT Explorers', 'National finalists', 'Ceremony, 1pm AEST']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two well-known competitions are missing dates on purpose. RoboCup Junior Australia runs regional events and national championships across the year, and Tournament of Minds runs its own program; neither published a 2026 date we could confirm on the day we checked, so both sit in the table below without one.',
            'The Australian Maths Trust opened 2026 registrations on Tuesday 27 January 2026. It had not published its 2027 calendar when we checked, so 2027 dates are not given here.'
          ],
          right: [
            'Entry fees are not shown. They are set by each organiser, often paid through schools, and quoted in Australian dollars, so the organiser\'s own page is the place to check them.',
            'Formats change. The AMT notes, for example, that its coding challenge now runs as the Raspberry Pi Foundation Coding Challenge, formerly the OUCC. Treat this page as a map and the organiser\'s page as the final word.'
          ] },
        { kind: 'table', caption: 'Competitions listed without a confirmed 2026 date', head: ['Competition', 'What it involves', 'Where to check'], rows: [
          ['RoboCup Junior Australia', 'Robotics challenges, with regional events and national championships', 'robocupjunior.org.au'],
          ['Tournament of Minds', 'Team problem-solving across disciplines', 'tom.edu.au']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://amt.edu.au/wp-content/uploads/2025/2026-Competitions-and-Programs-Key-Dates-Calendar.pdf" rel="noopener" target="_blank">Australian Maths Trust, 2026 Competitions and Programs key dates</a>; <a class="ag-inline-link" href="https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/" rel="noopener" target="_blank">APSMO, Maths Olympiad Years 5-6</a>; <a class="ag-inline-link" href="https://www.icasassessments.com/event-calendar/" rel="noopener" target="_blank">ICAS event calendar</a>; <a class="ag-inline-link" href="https://www.youngictexplorers.net.au/competition-details/key-dates/" rel="noopener" target="_blank">Young ICT Explorers key dates</a>. Each organiser\'s page was read on 7 October 2026. We have no tie to any organiser listed.' }
      ]
    },
    {
      id: 'who', tint: 'deep', eyebrow: 'Which one fits',
      h2: 'Matching a competition to a student',
      lede: 'The right first competition depends on what a student enjoys and how they like to work, not only on their year level.',
      body: [
        { kind: 'table', caption: 'A starting guide, by stage and interest', head: ['Stage', 'Likes puzzles and logic', 'Likes numbers', 'Likes building things'], rows: [
          ['Years 3 and 4', 'Bebras', 'Kangourou sans Frontières, Maths Challenge', 'A first Scratch project, ahead of later team events'],
          ['Years 5 and 6', 'Bebras, CAT', 'APSMO Maths Olympiad, AMC', 'Raspberry Pi Foundation Coding Challenge, Young ICT Explorers'],
          ['Years 7 to 10', 'CAT', 'AMC, AIMO', 'Australian Informatics Olympiad, Young ICT Explorers'],
          ['Years 11 and 12', 'Bebras senior division', 'AMC senior division', 'Australian Informatics Olympiad, Young ICT Explorers']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A short first competition is usually wiser than an ambitious one. Bebras and the CAT need no coding experience at all, according to the AMT, and they show quickly whether a student enjoys algorithmic puzzles. The AIO is different: the AMT says students need some programming experience and must be able to write code.',
            'For younger students, the point of a first competition is the experience of thinking hard for a sustained period. A result is information, not a verdict.'
          ],
          right: [
            'Project competitions such as Young ICT Explorers suit students who like making something over weeks. They reward planning, teamwork and explaining a project to judges, which a timed paper never tests.',
            'Many students enjoy one maths contest and one computing contest in the same year. The calendar above shows how they can be spaced so preparation for one does not crowd out the other.'
          ] }
      ]
    },
    {
      id: 'planning', tint: 'tint', eyebrow: 'The method',
      h2: 'Backward planning from the competition date',
      lede: 'Preparation goes better when it is planned backwards from the day, so the hardest practice happens early and the final week is about calm and timing.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Fix the date', p: 'Start from the competition day or window. Mark it, then count back in weeks. Everything else hangs from that one date.' },
          { h3: '2. Place the stages', p: 'Put new skills furthest from the date, mixed practice in the middle, and timed practice close to the end. Leave the last few days light.' },
          { h3: '3. Check progress', p: 'At each stage, one honest question: can the student now do the thing this stage was for? If not, move the next stage, not the date.' }
        ] },
        { kind: 'table', caption: 'A worked plan, counting back from the Australian Informatics Olympiad on 27 August 2026', head: ['Weeks before', 'Approximate dates', 'Focus'], rows: [
          ['12 to 9', 'Early June to late June', 'Core skills: loops, arrays, reading input carefully'],
          ['8 to 5', 'Early July to late July', 'Problem patterns: searching, sorting, simple dynamic programming'],
          ['4 to 2', 'Early August to mid August', 'Timed practice on past-style problems, reviewing every mistake'],
          ['Final week', '20 to 26 August', 'Light practice, rest, and a plan for reading every task first']
        ] },
        { kind: 'p', text: 'The same backward plan works for a primary student and Bebras, only shorter: two weeks of puzzle play, one week of timed sets, then a quiet day before. What matters is the direction of planning. Students who plan forwards from today tend to discover the date too late; students who plan backwards from the date know each week what the week is for.' }
      ]
    },
    {
      id: 'rules', tint: '', eyebrow: 'How entry works',
      h2: 'Entering, and what we do and do not do',
      lede: 'Most of these competitions are entered through a school; some accept individual or team registrations. The organiser decides, and the organiser\'s page has the rules.',
      body: [
        { kind: 'two',
          left: [
            'If a school does not offer a competition, it is worth asking a teacher first: many schools enter students when asked. Where an organiser allows home or individual entry, its site explains how.',
            'Past papers and official practice belong to the organisers. We link to them where they are public and never reproduce them.'
          ],
          right: [
            'We are independent of the Australian Maths Trust, APSMO, ICAS, Young ICT Explorers, RoboCup Junior Australia and Tournament of Minds. We do not run any competition, enter students, or handle results.',
            'We teach the problem solving, mathematics and programming these competitions reward, with our own practice problems. No score, medal or selection is promised.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a competitor',
    h2: 'Four rungs from first contest to olympiad',
    lede: 'Most students climb gradually, and the rungs matter more than the year.',
    table: { caption: 'From a first competition to olympiad-level work', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 3 to 5', '1. Enjoying puzzles', 'Sticks with a hard puzzle for twenty minutes'],
      ['Years 5 to 7', '2. Explaining reasoning', 'Can say why an answer is right, not just that it is'],
      ['Years 7 to 9', '3. Writing algorithms', 'Turns a method into steps, then into working code'],
      ['Years 9 to 12', '4. Olympiad problems', 'Attacks unfamiliar problems with a plan and checks the result']
    ] },
    left: { h3: 'If a result disappoints', ps: [
      'One paper on one day is a narrow sample. Look at which questions were attempted and how, not only at the score.',
      'A student who keeps entering, with steady preparation between, usually sees more change than one who crams once.'
    ] },
    right: { h3: 'Going further', ps: [
      'Our <a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">Australian Maths Trust page</a> covers the AMC, CAT and AIO in more depth.',
      'For harder mathematics, see <a class="ag-inline-link" href="/math-olympiad-amc-tutoring">maths olympiad tutoring</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Australian competitors',
    lede: 'Grouped by the kind of competition they prepare for. Full syllabuses open from each card.',
    bands: [
      { num: 'I', h3: 'Computational thinking', sub: 'Bebras and the CAT', courses: [
        { code: 'AUC / CT / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking for kids', blurb: 'Logic and patterns, before any code.' },
        { code: 'AUC / CT / 02', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Algorithms made visible, with real games.' },
        { code: 'AUC / CT / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms and data structures, reasoned first.' }
      ] },
      { num: 'II', h3: 'Mathematics', sub: 'AMC, APSMO and olympiads', courses: [
        { code: 'AUC / MA / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense for younger competitors.' },
        { code: 'AUC / MA / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving for AMC-style papers and harder.' },
        { code: 'AUC / MA / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'The algebra and geometry competitions lean on.' }
      ] },
      { num: 'III', h3: 'Programming', sub: 'The AIO and coding challenges', courses: [
        { code: 'AUC / PR / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most students use in the AIO.' },
        { code: 'AUC / PR / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Efficient code under time limits.' },
        { code: 'AUC / PR / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first text-based language for younger coders.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly classes, fitted around the school term',
    lede: 'Teaching happens from India, where the clock trails Australia: Adelaide is four hours ahead of India time in winter, Perth two and a half all year. That gap puts Australian after-school sessions in the Indian working afternoon, which is why weekly competition practice is easy to schedule.',
    slots: [
      { time: 'Weekday after school', l: 'Steady weekly practice through the term.' },
      { time: 'Weekend morning', l: 'Longer problem-solving sessions.' },
      { time: 'Before a competition', l: 'A short timed-practice block in the last weeks.' }
    ],
    cells: [
      { h3: 'Problem solving first', p: 'Students learn to read, plan and check, not to memorise answers.' },
      { h3: 'Our own problems', p: 'Practice written by us, in the style competitions use, never copied papers.' },
      { h3: 'Squads of five to ten', p: 'Competitors at a similar standard, arguing over methods until one is clearly right.' },
      { h3: 'Individual coaching', p: 'For an olympiad hopeful or a student repairing one weak area.' },
      { h3: 'Planned backwards', p: 'Each student\'s plan is built from their competition date.' },
      { h3: 'No promises', p: 'No score, medal or selection is promised.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Things students built because they wanted to, separate from any contest. Browse them all in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Unedited reviews, reproduced from our Google listing.',

  fees: {
    h2: 'Fees',
    lede: 'Classes are charged each month in US dollars, our international rate, with no sign-up charge and no lock-in. Any competition entry fee is separate and goes to the organiser, not to us.',
    free: ['A real lesson with a teacher', 'An honest view of readiness', 'No card details'],
    group: ['Five to ten students at one level', 'The same teacher each week', 'Practice reviewed together', 'A certificate at the end'],
    one: ['A teacher for one student', 'A plan built from the competition date', 'Flexible weekly times']
  },

  faq: {
    eyebrow: 'Questions about competitions',
    h2: 'What Australian families ask',
    items: [
      { q: 'What is the Bebras challenge?', a: 'A computational thinking challenge for students in Years 3 to 12. In Australia it is delivered by the Australian Maths Trust; in 2026 it ran from 9 February to 8 March. No coding is needed.' },
      { q: 'What is the Australian Informatics Olympiad?', a: 'A programming competition run by the Australian Maths Trust for Years 7 to 12. In 2026 it was held on 27 August and ran for 3 hours. The AMT says students need some programming experience and must be able to write code.' },
      { q: 'When was the AMC in 2026?', a: 'The Australian Mathematics Competition ran from 4 to 6 August 2026, for Years 3 to 12, with 60 minutes for primary and 75 minutes for secondary students.' },
      { q: 'Is there a coding competition for primary students?', a: 'Yes. Bebras and the CAT suit primary students and need no coding, and the Raspberry Pi Foundation Coding Challenge is open from Year 5 with divisions by skill level.' },
      { q: 'What is backward planning?', a: 'Planning preparation from the competition date back to today: new skills furthest from the date, mixed practice in the middle, timed practice near the end, and a light final week.' },
      { q: 'Are the 2027 dates available?', a: 'The Australian Maths Trust had not published its 2027 calendar when we checked on 7 October 2026. Each organiser\'s own site will have 2027 dates first.' },
      { q: 'How do students enter?', a: 'Usually through their school. Some organisers accept individual or team registrations. Each organiser\'s page sets out who can enter and how.' },
      { q: 'Do you run any of these competitions?', a: 'No. We are independent of every organiser on this page. We teach the skills the competitions reward and help students plan their preparation.' },
      { q: 'Why are entry fees not listed?', a: 'They are set by each organiser, often paid through schools, and change each year, so the organiser\'s page is the reliable place to check them.' },
      { q: 'Can classes fit around sport and other activities?', a: 'Usually. The weekly slot is chosen with the family after the trial, and Australian afternoons and evenings fall in Indian working hours, so there is room to move it around a training night.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian students',
    lede: 'Deeper preparation pages, exams and the national picture.',
    items: [
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'Australian Maths Trust competitions', p: 'The AMC, CAT and AIO in depth.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Maths olympiad tutoring', p: 'For students ready for harder problems.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering help', p: 'The NSW course, its exam and its testing habit.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy practice', p: 'How the test works and estimation practice.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state and every age.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring online', p: 'Weekly maths alongside competition practice.' }
    ]
  },

  start: {
    h2: 'Start with a free problem-solving class',
    lede: 'Tell us the year level and which competition is on the horizon. The free class tries the kind of problem it uses and ends with a backward plan from the date.',
    readFirst: 'Want to look around first? Each course outline is listed on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and our page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method.',
    note: 'Messaging on WhatsApp is normally the fastest route to a reply. The number is an Indian one, because that is where we operate; there is no Australian branch.',
    formNote: 'No card, no obligation. One reply to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'Competitions', links: [
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/math-olympiad-amc-tutoring', label: 'Olympiad tutoring' },
        { href: '/maths-challenges', label: 'Maths challenges' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Independent of every organiser; dates checked at source'
  },

  personalityCss: `
.ag-root.ag-auc .ag-hero-grid { gap: clamp(1rem, 2.7vw, 2.3rem); }
.ag-root.ag-auc .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-auc .ag-capsule { border-left-width: 8px; }
.ag-root.ag-auc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-auc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-auc .ag-table th { letter-spacing: 0.01em; }
.ag-root.ag-auc .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-auc .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Organisers\' own 2026 pages, read 7 October 2026. Australian Maths Trust 2026 key dates calendar: Bebras 9 February to 8 March (Years 3 to 12, AU only, 60 minutes Middle Primary, 45 other divisions); Kangourou sans Frontières 24 to 26 March; Maths Challenge 2 March to 26 June (Years 3 to 10); Maths Enrichment 30 March to 16 October (Years 4 to 10); CAT 19 to 21 May (Years 5 to 12, 60 minutes); Raspberry Pi Foundation Coding Challenge 16 to 18 June (Years 5 to 12, 45 minutes, free, formerly OUCC); AMC 4 to 6 August (Years 3 to 12, 60/75 minutes, first run in 1978); AIO 27 August (Years 7 to 12, 3 hours); AIMO 10 September (Years 7 to 10, 4 hours); "Registrations open Tuesday 27 January 2026." APSMO Maths Olympiad Years 5-6: Competition One Wednesday 6 May, Two 10 June, Three 29 July, Four 9 September 2026. ICAS sitting windows: Digital Technologies 3 to 7 August, Mathematics 24 to 28 August. Young ICT Explorers 2026: registration deadline 1 July, submission 31 July, State Awards 29 October 1pm AEST, national judging 9 to 21 November, National Awards 26 November 1pm AEST.',
    localProject: 'A backward plan counted from the Australian Informatics Olympiad on 27 August 2026: weeks 12 to 9 core skills, 8 to 5 problem patterns, 4 to 2 timed practice, final week 20 to 26 August light practice and rest; plus a stage-by-interest table mapping Years 3 to 12 to the competitions on the calendar.',
    requiredMentions: ['Kangourou sans Frontières', '19 to 21 May', '27 August', '10 September', '9 to 21 November', '16 to 18 June', '24 to 28 August', 'backward planning', 'Tuesday 27 January 2026', 'Young ICT Explorers'],
    sources: [
      { claim: 'Australian Maths Trust, 2026 Competitions and Programs key dates calendar (PDF): dates, durations, divisions and eligibility for Bebras, KSF, Maths Challenge, Maths Enrichment, CAT, RPF Coding Challenge, AMC, AIO and AIMO.', url: 'https://amt.edu.au/wp-content/uploads/2025/2026-Competitions-and-Programs-Key-Dates-Calendar.pdf' },
      { claim: 'APSMO, Maths Olympiad Years 5-6: 2026 competition dates.', url: 'https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/' },
      { claim: 'ICAS event calendar: 2026 sitting windows for Digital Technologies and Mathematics.', url: 'https://www.icasassessments.com/event-calendar/' },
      { claim: 'Young ICT Explorers, 2026 key dates and deadlines.', url: 'https://www.youngictexplorers.net.au/competition-details/key-dates/' },
      { claim: 'RoboCup Junior Australia, national news: 2026 National Championships referenced without a date.', url: 'https://www.robocupjunior.org.au/category/challenge-region/national/' }
    ],
    rejectedClaims: [
      'RoboCup Junior Australia national championship dates: no 2026 date found on the pages read.',
      'Tournament of Minds 2026 dates: not confirmed; listed without a date.',
      'All entry fees, including those printed on organiser pages: not shown (they are in Australian dollars, and the page shows one currency only).',
      'ICAS year levels per subject: not read, so the page says "See organiser".',
      'APSMO competitions other than the Years 5-6 Maths Olympiad: dates not read, so not listed.',
      'Any 2027 date: the AMT had not published a 2027 calendar when checked.',
      'Any affiliation with any organiser, or any promise of a score, medal or selection: none, stated on the page.'
    ]
  }
};
