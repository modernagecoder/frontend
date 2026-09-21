'use strict';
// Online coding summer course, UK (ag- community door; UK cluster Phase 3). DATED: summer 2027 examples.
// Sources, read raw on 21 September 2026 (official council and government pages via curl):
//  - gov.uk, School term and holiday dates (England): families are directed to their local council; there are
//    no national term dates.
//  - Nottinghamshire County Council, School Holidays 2026-27 (PDF): Summer Term "7 June - 28 July".
//  - Cyngor Gwynedd: "The term dates directed by Welsh ministers for the 2026–2027 school year"; pupils return
//    "Wednesday, 2 September 2026"; "Summer holidays 21 July 2027 31 August 2027".
//  - West Lothian Council, School Terms and Holidays 2026/2027: pupils resume "Wednesday 12 August 2026";
//    "Last Day of Term (primary, secondary and ASN schools) All break Friday 25 June 2027".
//  - Dundee City Council, School Term Dates: "Friday 2 July 2027 - Term ends"; 2027-28 "Monday 16 August 2027
//    - Staff resume".
//  - Department of Education (Northern Ireland), School holidays: 2024/2025 table, "Schools resume after
//    summer holiday 1 September 2024"; "Summer holiday begins 1 July 2025"; schools may operate on these
//    dates at their discretion.
//  - Blocked and not circumvented: Glasgow, Cardiff, Fife, Swansea, Manchester and Kent returned 403.
// Spine: four summers, not one. Scottish and Northern Irish children finish at the end of June or start of
// July; English and Welsh children around late July; Scottish schools return in mid-August while the rest
// return in early September. A UK summer course has to start when each child's holiday does, not on one date.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'SUMMER', blurb: 'The UK has four school summers, not one. A summer course has to start when each child\'s holiday starts.' },
  slug: 'online-coding-summer-course-uk',
  code: 'sum',
  accent: '#8A2E3C',
  accentRationale: 'Summer course: a warm claret from the solver (6.72:1 on every paper tint, dE 7.8 from the nearest used accent), a summery but serious colour for a planning page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Online coding summer course, UK',
  title: 'Online Coding Summer Course, UK | Four Nations, Four Summers',
  description: 'Online coding over the summer for UK children and teens. Scottish and Northern Irish schools break up weeks before English ones; lessons start when yours does.',
  ogDescription: 'Scottish pupils can be on holiday a month before English ones. A UK summer coding course has to start whenever each child\'s summer does.',
  twitterDescription: 'Summer coding across the UK: four nations with different school holidays, and live lessons that start whenever yours does.',
  pageName: 'Online Coding Summer Course, UK',
  webPageDescription: 'Live online coding and AI lessons over the school summer for UK children and teenagers, planned around the different holiday dates in each nation.',
  courseDescription: 'Live online summer coding for UK children and teenagers: a project-based run of lessons that starts when each family\'s school holiday begins.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Summer coding course',
  navLinks: [
    { href: '#summers', label: 'Four summers' },
    { href: '#plan', label: 'Planning the summer' },
    { href: '#project', label: 'One summer project' },
    { href: '#groups', label: 'Mixed-nation groups' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Summer holidays &middot; Ages 6 to 18',
  h1: 'Online coding summer course, UK',
  lede: 'There is no single UK summer holiday. School dates are set locally, and the four nations follow different calendars. In the 2026 to 2027 school year, pupils in West Lothian finish on Friday 25 June 2027 and Dundee\'s term ends on Friday 2 July, while Nottinghamshire\'s summer term runs to 28 July and Gwynedd\'s summer holidays, on dates directed by Welsh ministers, begin on 21 July. Northern Ireland\'s Department of Education has published the summer holiday starting on 1 July. At the other end, Scottish schools are back in mid-August, a fortnight or more before most of England, Wales and Northern Ireland return in early September. A summer coding course built around one start date suits nobody everywhere. This page explains the four summers and how to plan coding around the one your child actually has.',
  secondaryCta: { href: '#summers', label: 'The four summers' },
  wa: 'Hello Modern Age Coders, I would like to book summer coding lessons for my child.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Dates from official council and government pages',
  spec: [
    ['Earliest finish shown', 'Friday 25 June 2027, West Lothian'],
    ['Northern Ireland', 'Summer holiday from 1 July'],
    ['Wales example', 'Gwynedd, from 21 July 2027'],
    ['England example', 'Nottinghamshire, term to 28 July 2027'],
    ['Start date', 'Whenever your holiday begins'],
    ['Pricing', 'The usual monthly fee, no surcharge'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'UK school summers differ by nation and by council. In official 2026 to 2027 calendars, West Lothian schools break up on Friday 25 June 2027 and Dundee\'s term ends on Friday 2 July 2027; Northern Ireland\'s Department of Education has published the summer holiday beginning on 1 July; Gwynedd\'s summer holidays in Wales run from 21 July to 31 August 2027; and Nottinghamshire\'s summer term in England ends on 28 July 2027. Scottish schools typically return in mid-August, the others in early September. So a child in Scotland can be on holiday about a month before a child in England, and back before them too. Modern Age Coders runs summer coding as ordinary live lessons that can begin whenever a family\'s holiday begins, built around one project a child finishes over the summer, in groups formed by level rather than by nation. Summer lessons cost the usual monthly fee with no surcharge: the first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three summer-friendly courses',
    lede: 'A game for younger children, Python for the middle years, and AI for teenagers. Each card opens its syllabus.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'SU / 01', title: 'Game Development for Kids', note: 'A game a child designs and finishes over the holidays, the classic summer project.' },
      { course: 'python-ai-kids-masterclass', code: 'SU / 02', title: 'Python for Kids', note: 'A summer is long enough to get properly started in typed Python.' },
      { course: 'ai-ml-masterclass-teens', code: 'SU / 03', title: 'AI and Machine Learning', note: 'For teenagers who want a substantial project before the new school year.' }
    ]
  },

  sections: [
    {
      id: 'summers', tint: 'tint', eyebrow: 'Four summers',
      h2: 'Four summers, not one',
      lede: 'Examples from official 2026 to 2027 calendars. Your own council\'s dates may differ.',
      body: [
        { kind: 'table', caption: 'When summer starts and ends, by example', head: ['Nation', 'Example', 'Summer begins', 'Schools return'], rows: [
          ['Scotland', 'West Lothian Council', 'After Friday 25 June 2027', 'Pupils resumed 12 August in 2026'],
          ['Scotland', 'Dundee City Council', 'After Friday 2 July 2027', 'Staff resume 16 August 2027'],
          ['Northern Ireland', 'Department of Education table, 2024/25', 'Summer holiday began 1 July 2025', 'Schools resumed 1 September in 2024'],
          ['Wales', 'Cyngor Gwynedd, dates directed by Welsh ministers', '21 July 2027', 'Pupils returned 2 September in 2026'],
          ['England', 'Nottinghamshire County Council', 'After 28 July 2027', 'Set locally each year']
        ] },
        { kind: 'p', html: 'The pattern is consistent even where the exact dates move. Scottish children stop at the end of June or the start of July and go back in mid-August. Northern Irish children are off through July and August. English and Welsh children finish in the second half of July and return in early September. Within England there are no national term dates at all: gov.uk sends families to their local council, and schools can set some of their own days.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means for families',
          left: [
            'A Scottish family planning around a summer programme that starts in late July may lose a month of their holiday waiting for it.',
            'A family in England booking a course that runs into late August may find it overlaps nothing in Scotland, where school is already back.'
          ],
          rightH3: 'What it means for a course',
          right: [
            'A course has to start when each child\'s holiday starts, not on one national date.',
            'It also has to fit around holidays away, which fall in different weeks in each nation.'
          ] },
        { kind: 'source', html: 'Sources: gov.uk School term and holiday dates; Nottinghamshire County Council school holidays 2026 to 2027; Cyngor Gwynedd school term dates; West Lothian Council school terms and holidays 2026/2027; Dundee City Council school term dates; <a class="ag-inline-link" href="https://www.education-ni.gov.uk/articles/school-holidays" rel="noopener" target="_blank">Department of Education (NI) school holidays</a>. Several other council sites refused automated requests and were not used. Check your own council or school for exact dates.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Planning the summer',
      h2: 'Planning coding around your summer',
      lede: 'A simple way to fit lessons around a holiday that includes time away.',
      body: [
        { kind: 'table', caption: 'A summer plan that bends', head: ['Part of the summer', 'Suggested rhythm', 'Why'], rows: [
          ['First week off', 'A free first lesson and a project chosen', 'Momentum while school habits are fresh'],
          ['Settled weeks at home', 'Two or three lessons a week', 'Enough time together to build something real'],
          ['Weeks away', 'Pause, or one short check-in', 'Holidays matter; the project waits'],
          ['Last fortnight', 'Finish and present the project', 'A finished thing to show at the start of term'],
          ['Back to school', 'Continue weekly, or stop', 'No commitment beyond the month you are in']
        ] },
        { kind: 'p', html: 'The table is a suggestion, not a timetable. What matters is that lessons start when your holiday starts, pause when you are away, and finish with something done. Because lessons are live and online, a week in a caravan with a laptop and a signal can still include a lesson, if the child wants one.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Start early in Scotland', p: 'Scottish families can begin at the end of June and still finish before schools return in mid-August.' },
          { h3: 'Use July in Northern Ireland', p: 'A whole July at home is a generous window for a first project.' },
          { h3: 'Late July in England and Wales', p: 'Start as term ends, and finish before the early September return.' }
        ] }
      ]
    },
    {
      id: 'project', tint: '', eyebrow: 'One summer project',
      h2: 'One summer, one finished project',
      lede: 'A summer goes further with one clear goal a child chooses and finishes.',
      body: [
        { kind: 'table', caption: 'Summer projects by age', head: ['Age', 'A good summer project', 'What it teaches'], rows: [
          ['6 to 9', 'A Scratch game with levels and a score', 'Sequences, loops, events and design'],
          ['9 to 12', 'A quiz or adventure game in Python', 'Variables, conditions, lists and typing real code'],
          ['12 to 15', 'A website about a hobby, or a playable game', 'Structure, styling and building something others use'],
          ['15 to 18', 'A small AI or data project', 'Working with real data and explaining results']
        ] },
        { kind: 'p', html: 'A project gives the summer a shape. It is easier to keep going when there is a thing to finish, and far more satisfying to return to school with something to show. We help each child choose a project that fits the weeks they actually have, which may be seven in Scotland or six in England, and scale it so it gets finished.' },
        { kind: 'two', mt: true,
          leftH3: 'What summer is good for',
          left: [
            'Trying something new without exam pressure: a first language, a first game, a first website.',
            'Going deeper on a project a child has wanted to build all year.'
          ],
          rightH3: 'What we avoid',
          right: [
            'Turning the holiday into extra school. Summer lessons should feel like making, not homework.',
            'Promising outcomes. A summer of coding is valuable in itself; we do not claim it will change grades.'
          ] }
      ]
    },
    {
      id: 'groups', tint: 'tint', eyebrow: 'Mixed-nation groups',
      h2: 'Groups by level, from anywhere in the UK',
      lede: 'Online lessons mean a child in Dundee and a child in Nottingham can share a group.',
      body: [
        { kind: 'p', html: 'Because our groups are online and formed by level, children from different nations can learn together. In summer that has a practical benefit: as Scottish children return to school in August, their places free up, and as English and Welsh children finish in late July, new learners join. Groups are formed so that each child is with others at the same stage, whenever they start.' },
        { kind: 'table', mt: true, caption: 'How summer groups work', head: ['Question', 'Answer'], rows: [
          ['When can we start?', 'Any week; a free first lesson finds the right level'],
          ['What if we go away?', 'Pause for the weeks you are away'],
          ['Can we continue in term?', 'Yes, or stop at the end of the month; there is no minimum term'],
          ['One to one instead?', 'Yes, at the one-to-one monthly fee'],
          ['Is there a summer surcharge?', 'No; summer lessons cost the usual monthly fee']
        ] },
        { kind: 'p', html: 'For school-year options, see <a class="ag-inline-link" href="/best-coding-classes-for-teens-uk">coding classes for teenagers</a>, <a class="ag-inline-link" href="/ks2-coding-lessons-online">Key Stage 2 coding</a> and <a class="ag-inline-link" href="/ai-classes-for-kids-uk">AI classes for children</a>. Children who want a challenge over the summer may like <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">the UK competitions calendar</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four summer goals by stage',
    lede: 'Placement follows what a child can build now; the summer goal follows from that.',
    table: { caption: 'Summer goals', head: ['Stage', 'Usually', 'A realistic summer goal'], rows: [
      ['1. First coding', 'Ages 6 to 9', 'A finished Scratch game or animation of their own design'],
      ['2. First typed code', 'Ages 9 to 12', 'A working Python program they wrote and debugged'],
      ['3. Building', 'Ages 12 to 15', 'A website or game others can use'],
      ['4. Real projects', 'Ages 15 to 18', 'A data or AI project with results explained']
    ] },
    left: { h3: 'One goal is enough', ps: [
      'A single finished project beats several half-started ones.',
      'The longer order of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Summer to term', ps: [
      'Many children carry on weekly after the holiday; many stop. Both are fine.',
      'There is no minimum commitment beyond the month.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for the summer',
    lede: 'Grouped by age. The free lesson settles where to start.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Ages 6 to 11', courses: [
        { code: 'UK / SU1 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Games, animations and first apps.' },
        { code: 'UK / SU1 / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'A summer game from idea to finish.' },
        { code: 'UK / SU1 / 03', slug: 'scratch-programming-complete-course', title: 'Scratch, complete', blurb: 'Deep Scratch for keen young makers.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Ages 10 to 14', courses: [
        { code: 'UK / SU2 / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'A first typed language, started properly.' },
        { code: 'UK / SU2 / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'A hobby website, built from scratch.' },
        { code: 'UK / SU2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Keep maths ticking over through code.' }
      ] },
      { num: 'III', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'UK / SU3 / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'A substantial summer AI project.' },
        { code: 'UK / SU3 / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From basics to real programs.' },
        { code: 'UK / SU3 / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'A real game in a professional engine.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live lessons that bend around a holiday',
    lede: 'Our teachers are in India, which keeps a single time all year, so the UK is four and a half hours behind in summer. Summer daytime in the UK falls in India\'s afternoon and evening, and slots are agreed in UK time.',
    slots: [
      { time: 'Morning', l: 'Popular in summer, before the day gets busy.' },
      { time: 'Afternoon', l: 'Around camps, clubs and trips.' },
      { time: 'Early evening', l: 'For families who prefer a later slot.' }
    ],
    cells: [
      { h3: 'Start any week', p: 'Lessons begin when your holiday begins, whichever nation you are in.' },
      { h3: 'One project', p: 'A single project chosen early and finished by the end of the summer.' },
      { h3: 'Pause for trips', p: 'Weeks away are simply paused.' },
      { h3: 'Groups by level', p: 'Children from across the UK grouped by what they can do.' },
      { h3: 'Show at the end', p: 'Each child presents what they built before term starts.' },
      { h3: 'No surcharge', p: 'The same monthly fee as any other time of year.' }
    ]
  },

  projectsH2: 'Summer-style projects our students made',
  projectsLede: 'Four projects from lessons, each finished by the student. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, as posted.',

  fees: {
    h2: 'Summer fees',
    lede: 'Summer costs what any other month costs: one monthly fee in US dollars, the rate outside India, with no surcharge, no registration fee and no commitment past the month you are in. The first lesson is free.',
    free: ['A first lesson in whichever week your holiday starts', 'A summer project chosen together', 'Only a phone number to book'],
    group: ['Five to ten children at one level', 'Start any week of the summer', 'Pause for weeks away', 'A finished project by the end'],
    one: ['A teacher for one child', 'Scheduled around your trips', 'Suits a teenager with an ambitious project']
  },

  faq: {
    eyebrow: 'Questions about summer coding',
    h2: 'What families ask about summer',
    items: [
      { q: 'When do UK schools break up for summer?', a: 'It depends on the nation and council. In official 2026 to 2027 calendars, West Lothian breaks up on 25 June 2027, Dundee on 2 July, Nottinghamshire\'s term ends on 28 July, and Gwynedd\'s holidays start on 21 July. Northern Ireland has published 1 July as the start of the summer holiday.' },
      { q: 'Why do Scottish holidays start earlier?', a: 'Scottish schools follow their own calendar, finishing around the end of June or start of July and returning in mid-August, several weeks ahead of most of England and Wales.' },
      { q: 'When can we start?', a: 'Any week. Lessons begin whenever your holiday starts, with a free first lesson to find the right level.' },
      { q: 'What if we are away for part of the summer?', a: 'Pause for the weeks you are away. Lessons are live and online, so a lesson from a holiday with a good connection is possible too.' },
      { q: 'Is there a summer camp price?', a: 'No. Summer lessons cost the usual monthly fee, with no surcharge and no registration fee.' },
      { q: 'What will my child make?', a: 'One project chosen at the start and finished by the end: a game, a website, a Python program or, for teenagers, a small AI or data project.' },
      { q: 'Can children from different nations share a group?', a: 'Yes. Groups are online and formed by level, so a child in Scotland and one in England can learn together.' },
      { q: 'Can we continue after the summer?', a: 'Yes, weekly during term, or you can stop at the end of the month. There is no minimum commitment.' },
      { q: 'Are the dates on this page right for my school?', a: 'They are examples from official council and government pages. Always check your own council or school, as dates vary and schools can set some of their own days.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Then USD 100 a month in a group or USD 150 one to one, the same as any other time of year, with nothing paid in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for UK families',
    lede: 'Term-time options, competitions, and the nations.',
    items: [
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teenagers', p: 'Year-round options for 13 to 18.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Challenges to aim for across the year.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI in Scotland', p: 'The Scottish system, with its earlier summer.' },
      { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI in Northern Ireland', p: 'The system with a July and August summer.' },
      { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids', p: 'What children can safely learn about AI.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits. Tell us when your holiday starts; the first lesson can be in that week.',
    readFirst: 'Reading first? Each <a class="ag-inline-link" href="/courses">course page</a> sets out what it covers, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the approach, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows finished projects.',
    note: 'WhatsApp is the quickest way to book and free from a UK phone. We are based in India, so the number begins +91.',
    formNote: 'No card, no contract; one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Summer', links: [
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/best-coding-classes-for-teens-uk', label: 'Classes for teenagers' },
        { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Summer coding, live on UK time'
  },

  personalityCss: `
.ag-root.ag-sum .ag-hero h1 { letter-spacing: -0.023em; font-weight: 710; }
.ag-root.ag-sum .ag-capsule { border-left-width: 6px; border-radius: 8px; }
.ag-root.ag-sum .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-sum .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-sum .ag-table td:first-child { font-weight: 630; }
.ag-root.ag-sum .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['25 June 2027', '1 July', '21 July 2027', '28 July', 'mid-August', 'no surcharge', 'Scotland', 'Northern Ireland', 'Wales', 'England'],

  dossier: {
    curriculumAuthority: 'UK school holidays by nation (dated to 2026 to 2027 examples). gov.uk School term and holiday dates directs families to local councils (England). Nottinghamshire County Council 2026-27: Summer Term 7 June to 28 July. Cyngor Gwynedd: "The term dates directed by Welsh ministers for the 2026–2027 school year"; pupils return Wednesday 2 September 2026; "Summer holidays 21 July 2027 31 August 2027". West Lothian Council 2026/2027: pupils resume Wednesday 12 August 2026; last day of term Friday 25 June 2027. Dundee City Council: term ends Friday 2 July 2027; staff resume Monday 16 August 2027. Department of Education (NI) School holidays, 2024/2025 table: schools resume after summer holiday 1 September 2024; summer holiday begins 1 July 2025; schools may operate on these dates at their discretion. Glasgow, Cardiff, Fife, Swansea, Manchester and Kent council sites returned 403 and were not used.',
    localProject: 'Four summers, not one. The page sets out, from official council and government calendars, how UK school summers differ: Scottish examples break up on 25 June and 2 July 2027 and return in mid-August; Northern Ireland publishes 1 July as the start of the summer holiday; Gwynedd in Wales runs 21 July to 31 August 2027; Nottinghamshire in England ends term on 28 July 2027; England has no national dates at all. It turns that into a planning table for a holiday with time away, a one-project-per-summer approach by age, and mixed-nation groups formed by level, with summer priced as any other month. Lesson family: a single UK product planned around four different national calendars.',
    requiredMentions: ['25 June 2027', '21 July 2027', 'no surcharge', 'mid-August'],
    sources: [
      { claim: 'gov.uk, School term and holiday dates: dates set by local councils in England.', url: 'https://www.gov.uk/school-term-holiday-dates' },
      { claim: 'West Lothian Council, School Terms and Holidays 2026/2027: return 12 August 2026 and last day of term 25 June 2027.', url: 'https://www.westlothian.gov.uk/article/85997/School-Terms-and-Holidays-2026-2027' },
      { claim: 'Dundee City Council, School Term Dates: term ends 2 July 2027; staff resume 16 August 2027.', url: 'https://www.dundeecity.gov.uk/service-area/children-and-families-service/education/school-term-dates' },
      { claim: 'Cyngor Gwynedd, School term dates: dates directed by Welsh ministers; summer holidays 21 July to 31 August 2027.', url: 'https://www.gwynedd.llyw.cymru/en-gb/schools-and-learning/school-term-dates-holidays' },
      { claim: 'Nottinghamshire County Council, School Holidays 2026-27: summer term 7 June to 28 July 2027.', url: 'https://www.nottinghamshire.gov.uk/media/5082842/schoolholidayscalender20262027.pdf' },
      { claim: 'Department of Education (NI), School holidays: 2024/25 table with summer from 1 July and return on 1 September.', url: 'https://www.education-ni.gov.uk/articles/school-holidays' }
    ],
    rejectedClaims: [
      'A single national summer date for any nation: dates are set locally; the page uses named examples.',
      'Northern Ireland dates for 2027: only the 2024/25 table was read, so the pattern is described from it.',
      'Any claim that summer coding prevents learning loss or raises grades: no primary evidence read; the page avoids it.',
      'A separate summer camp price: summer uses the ordinary monthly fee.',
      'Data from council sites that returned 403: not used.'
    ]
  }
};
