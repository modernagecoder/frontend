'use strict';
// Online coding summer course, Ireland (ag- door, Ireland cluster, Phase 2).
// Facts read at primary sources on 16 September 2026: Circular 0018/2026 on
// the standardised school year for 2026/27 to 2028/29 (summer holidays not
// standardised; post-primary not open for tuition beyond the Friday preceding
// the June bank holiday; school year normally starts in the week in which
// 1 September falls; minimum 182 days primary, 166 post-primary); gov.ie
// School holiday dates; DCU CTYI pages (Summer Programme 12 to 16, 95th
// percentile, 3-week courses in two sessions in June and July; CAT 12 to 16,
// 85th to 95th percentile, two weeks; Summer Scholars 12 to 17, 1st to 5th
// year, two weeks, non-residential; primary 6 to 12, one-week half-day courses
// in July, some weeks online, entry by assessment); the Department's Summer
// Programme 2026 (complex SEN and educational disadvantage; two weeks at
// post-primary; learning loss "has diminished significantly"). Data project:
// CSO MTM01 rainfall (15 Met Eireann stations, 1958 to 2022; dead stations
// with blank values; three statistics in one file; 2022 totals Valentia
// 1,681.5 mm, Dublin Airport 686.3 mm), from the teens dossier. No summer-slide
// scare, no published national close dates, no CTYI fees or course lists.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'SUMMER', blurb: 'A live online coding course across the Irish summer holidays, for primary and secondary students, from June to the week school reopens.' },
  slug: 'online-coding-summer-course-ireland',
  code: 'osc',
  accent: '#8F4800',
  accentRationale: 'Summer, Ireland: a deep amber-rust from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Online coding summer course, Ireland',
  title: 'Online Coding Summer Course in Ireland | Ages 6 to 18',
  description: 'An online coding summer course for children and teens in Ireland: Python, games, apps and AI, live with a teacher from June to August. First class free.',
  ogDescription: 'Irish summer holidays are long and not set nationally. A live online coding course fits around them: a real project over the summer, with no entrance test and no need to travel.',
  twitterDescription: 'Live online coding across the Irish summer, ages 6 to 18: games, apps, Python and AI. First class free.',
  pageName: 'Online Coding Summer Course in Ireland',
  webPageDescription: 'A live online coding summer course for primary and secondary students in Ireland: when Irish summer holidays actually run, the summer options that already exist, a rainfall data project, and small live classes from June to September.',
  courseDescription: 'Live online coding over the Irish summer holidays for ages 6 to 18: block coding and games for younger children, Python, apps, data and AI for teenagers, placed by level with one project carried through the summer.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Summer coding course, Ireland',
  navLinks: [
    { href: '#dates', label: 'Irish summer dates' },
    { href: '#options', label: 'Summer options' },
    { href: '#rain', label: 'A summer project' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Summer holidays &middot; Ages 6 to 18',
  h1: 'Online coding summer course in Ireland',
  lede: 'An Irish summer holiday is long, and it is not the same for every child. There is no national finishing date: the Department of Education sets the Christmas, mid-term and Easter breaks, but leaves the start and end of the school year to each school. Secondary schools stop teaching by the Friday before the June bank holiday, when the State exams begin, and primary schools, which must open for at least 182 days, usually run later into June. Almost all return in the week that contains 1 September. That gives a secondary student about three months and a primary child about ten weeks. This page is honest about what those weeks are for. We will not tell you your child will fall behind without lessons; the Department itself now says pandemic learning loss has diminished significantly for most children. The better reason to code in summer is time: enough of it to start a real project in June and finish it before school starts again.',
  secondaryCta: { href: '#dates', label: 'When the holidays run' },
  wa: 'Hello Modern Age Coders, I would like a free first coding class for my child over the summer in Ireland.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; one project across the summer',
  spec: [
    ['For', 'Ages 6 to 18'],
    ['Runs', 'June to the week school reopens'],
    ['Builds', 'One project, finished'],
    ['Entry', 'No test, placed by level'],
    ['Group', 'Five to ten, or one to one'],
    ['Travel', 'None, from home or holiday'],
    ['Hours', 'Mornings, afternoons or evenings'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Irish summer holidays are set by each school, not nationally: secondary schools stop teaching by the Friday before the June bank holiday and most schools reopen in the week of 1 September. A good summer coding course uses that time for one real project, a game, an app, a website or a data investigation, taught live by the same teacher each week. Modern Age Coders runs live online coding for ages 6 to 18 across the Irish summer, with no entrance test, in groups of five to ten placed by level or one to one. The first class is free; after that the cost is USD 100 a month in a group or USD 150 a month one to one, and a family can stop when September comes.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three summer projects for three ages',
    lede: 'One for primary school, one for the Junior Cycle years and one for older teenagers. Each card opens its syllabus.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'SUMMER / 01', title: 'Game Development for Kids', note: 'A whole game designed and built over the holidays, with levels, a score and a title screen, ready to play with cousins by August.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'SUMMER / 02', title: 'App Development for Teens', note: 'A working phone app started in June and in friends\' hands before the return to school.' },
      { course: 'ai-ml-masterclass-teens', code: 'SUMMER / 03', title: 'AI and Machine Learning for Teens', note: 'For older students with a long summer: a model trained, tested and explained, the kind of project that stands out later.' }
    ]
  },

  sections: [
    {
      id: 'dates', tint: 'tint', eyebrow: 'Irish summer dates',
      h2: 'When the Irish summer holidays actually run',
      lede: 'Parents often search for a national list of summer dates. There isn\'t one. These are the rules that decide them, from the Department\'s circular on the school year for 2026/27 to 2028/29 and its school holiday page.',
      body: [
        { kind: 'table', caption: 'The rules behind Irish summer holidays', head: ['Rule', 'What the Department says'], rows: [
          ['National summer dates', 'School summer holidays are not standardised; check the dates with your school'],
          ['End of secondary teaching', 'Post-primary schools will not be open for tuition beyond the Friday preceding the June bank holiday, when the State examinations begin'],
          ['Return', 'The school year normally starts in the week in which 1 September falls, or the week before if a school needs it'],
          ['Minimum school days', '182 for primary and special schools, 166 for post-primary'],
          ['What the circular fixes', 'Only the Christmas, Easter and mid-term breaks, for the three school years from 2026/27']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Put together, a secondary student is usually out of class from the start of June, though many sit or supervise State exams through the month. A primary child, with sixteen more required school days, usually finishes later in June.',
            'Those are our readings of the rules, not published dates. Each school sets its own, so the summer course starts whenever a family is ready.'
          ],
          right: [
            'The return is more predictable. For the summer of 2027, the week in which 1 September falls begins on Monday 30 August, and most schools will reopen that week or the one before.',
            'A summer course should end cleanly then. We move students back to a term-time slot or pause, whichever the family prefers.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://assets.gov.ie/static/documents/2602a673/2026.01.30_FINAL_Circular_SSY_2026.29_30_Jan_2026_English.pdf" rel="noopener" target="_blank">Circular 0018/2026, standardisation of the school year</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-education/services/school-holiday-dates/" rel="noopener" target="_blank">gov.ie, School holiday dates</a>.' }
      ]
    },
    {
      id: 'options', tint: 'deep', eyebrow: 'Summer options',
      h2: 'Summer learning options that already exist in Ireland',
      lede: 'Ireland has some well-known summer programmes. They suit different children, and it helps to know how each one works before choosing.',
      body: [
        { kind: 'table', caption: 'Programmes of the Centre for Talented Youth, Ireland (CTYI) at DCU, and the Department\'s Summer Programme, as each describes itself', head: ['Programme', 'Ages', 'Format', 'Entry'], rows: [
          ['CTYI Summer Programme', '12 to 16', 'Three-week courses in two sessions, June and July', 'High ability: the 95th percentile, by Talent Search or psychologist\'s report'],
          ['CTYI CAT Programme', '12 to 16', 'Two weeks', 'Typically the 85th to 95th percentile on the Talent Search'],
          ['DCU Summer Scholars', '12 to 17 (1st to 5th year)', 'Two weeks, non-residential', 'Open to any student in that age range'],
          ['CTYI primary summer courses', '6 to 12', 'One-week half-day courses in July, some weeks online', 'Assessment or psychologist\'s report'],
          ['Department Summer Programme', 'School-age', 'Two weeks at post-primary', 'Students with complex special educational needs or at risk of educational disadvantage']
        ] },
        { kind: 'two', mt: true,
          left: [
            'These are good programmes, and a child with a CTYI place should take it. They are also short, concentrated and, for most of them, selective by test. Some run on campus, which means travel.',
            'The Department\'s programme is something different again: support for particular students, run by schools, not general enrichment.'
          ],
          right: [
            'A live online course fills a different gap. There is no entrance test: a child is placed by what they can already do. It runs across the whole summer instead of a fortnight, and it moves with a family, including to a holiday house or relatives abroad.',
            'None of these options excludes the others. A student can do two weeks on a campus in July and keep a weekly project going either side of it.'
          ] },
        { kind: 'source', html: 'Sources: DCU CTYI, <a class="ag-inline-link" href="https://www.dcu.ie/ctyi/secondary-school-programme-overview-centre-talented-youth-ireland" rel="noopener" target="_blank">Secondary School Programme Overview</a>, <a class="ag-inline-link" href="https://www.dcu.ie/ctyi/young-student-programmes" rel="noopener" target="_blank">Primary School Students</a> and <a class="ag-inline-link" href="https://www.dcu.ie/ctyi/summer-scholars-centre-talented-youth-ireland" rel="noopener" target="_blank">Summer Scholars</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-education/publications/summer-programme-2026/" rel="noopener" target="_blank">Department of Education, Summer Programme 2026</a>. Read 16 September 2026. We have no connection with DCU or CTYI.' }
      ]
    },
    {
      id: 'honest', tint: 'tint', eyebrow: 'An honest reason',
      h2: 'No summer-slide scare: why code in summer at all',
      lede: 'Summer courses are often sold on fear. We would rather quote the Department. In the terms of its 2026 Summer Programme it writes that "it is hoped that for the majority of children, the impact of pandemic-related learning loss has diminished significantly in the following years."',
      body: [
        { kind: 'three', cells: [
          { h3: 'Time for a long project', p: 'In term, a child codes for an hour a week between everything else. In summer there is room to stay with one idea for weeks, which is how real programs get finished.' },
          { h3: 'Choosing what to build', p: 'Summer projects are chosen by the child: a game about their dog, an app for a club, a chart of the weather on holiday. Owning the idea is what keeps them coming back.' },
          { h3: 'A calm restart', p: 'A child who has been building all summer comes back in September with a finished thing to show, and often with a clear idea of what to learn next.' }
        ] }
      ]
    },
    {
      id: 'rain', tint: '', eyebrow: 'A summer project',
      h2: 'A summer data project: where in Ireland does it rain most?',
      lede: 'Every Irish family has an opinion about summer weather. CSO table MTM01 lets a student test it: monthly rainfall at 15 Met Éireann stations from 1958 to 2022.',
      body: [
        { kind: 'table', caption: 'Total rainfall in 2022 at two stations, CSO table MTM01', head: ['Station', 'Total rainfall, 2022'], rows: [
          ['Valentia Observatory, County Kerry', '1,681.5 mm'],
          ['Dublin Airport', '686.3 mm']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Trap 1: silent stations', p: 'Five stations stopped reporting years ago: Birr in 2009, Galway in 2011, and Clones, Kilkenny and Rosslare in 2008. Their later rows are blank. Treat a blank as zero and those towns look like deserts.' },
          { h3: 'Trap 2: three measures in one file', p: 'The table mixes total rainfall in millimetres, the most rain in a single day, and a count of rain days. Add a station\'s rows together and you add millimetres to days.' },
          { h3: 'Trap 3: an old table', p: 'The table was last updated in January 2023 and stops at December 2022. A student who wants this summer\'s rain has to go to Met Éireann\'s own data and join the two.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Younger children do a simpler version: a rain gauge in the garden, a daily tally in Scratch, and a bar chart at the end of the holidays. Teenagers load the table in Python and ask which month is really the wettest where they live.'
          ],
          right: [
            'Either way the lesson is the one every programmer needs: check what a number means and whether it is really there before you draw a conclusion from it.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://data.cso.ie/table/MTM01" rel="noopener" target="_blank">CSO table MTM01, Rainfall</a>, read 16 September 2026; the figures come from Met Éireann stations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The summer plan',
    h2: 'Five stages from June to the return to school',
    lede: 'Secondary students can start in early June; primary children usually join towards the end of the month. The plan stretches or shrinks to fit.',
    table: { caption: 'A summer coding project in Ireland', head: ['When', 'Stage', 'The student'], rows: [
      ['First week', '1. Pick the idea', 'Chooses a project and sketches what it will do'],
      ['Next two or three weeks', '2. Learn what it needs', 'Learns the blocks, Python or tools the project calls for'],
      ['July', '3. Build', 'Makes the first working version, piece by piece'],
      ['Early August', '4. Test and improve', 'Lets family and friends try it, then fixes what breaks'],
      ['Before school reopens', '5. Finish and show', 'Presents the project and picks what to learn in term time']
    ] },
    left: { h3: 'Holidays and trips', ps: [
      'Families go away in summer. Lessons move with a laptop, pause for a week, or switch to a different slot while a child is abroad.',
      'For what comes after the summer, the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> sets the whole route out by stage.'
    ] },
    right: { h3: 'Two courses a summer?', ps: [
      'Some older students take two lessons a week in summer and one in term. Others do a CTYI or DCU fortnight in July and keep their own project going around it.',
      'Children coming from a coding club can start further on; see <a class="ag-inline-link" href="/after-coderdojo-next-step-coding-ireland">after CoderDojo</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for an Irish summer',
    lede: 'Grouped by school stage. The free first class decides which one a child starts with and at what level.',
    bands: [
      { num: 'I', h3: 'Primary school', sub: 'Ages 6 to 12', courses: [
        { code: 'SUMMER / PRIMARY / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks and movement for the youngest coders.' },
        { code: 'SUMMER / PRIMARY / 02', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'A holiday game, from title screen to high score.' },
        { code: 'SUMMER / PRIMARY / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed code for older primary children with time to spare.' }
      ] },
      { num: 'II', h3: 'Junior Cycle years', sub: 'Roughly 12 to 15', courses: [
        { code: 'SUMMER / JUNIOR / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'A summer to become properly fluent.' },
        { code: 'SUMMER / JUNIOR / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'An app finished before September.' },
        { code: 'SUMMER / JUNIOR / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding', blurb: 'Lua scripting inside a game world they already know.' }
      ] },
      { num: 'III', h3: 'Senior students', sub: 'Roughly 15 to 18', courses: [
        { code: 'SUMMER / SENIOR / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'A model built and honestly tested.' },
        { code: 'SUMMER / SENIOR / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Irish open data, questioned properly.' },
        { code: 'SUMMER / SENIOR / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'A full website over a long summer.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Summer hours, including mornings',
    lede: 'Every class is live with a teacher in India, at a fixed time set in Irish time. Through the Irish summer our teachers are four and a half hours ahead, so a ten o\'clock class in Ireland is mid-afternoon for them, and summer is the one season when morning lessons are easy to arrange. From the end of October the gap widens to five and a half hours.',
    slots: [
      { time: 'Morning', l: 'Popular in summer, before the day gets going.' },
      { time: 'Afternoon', l: 'For families with morning camps or sport.' },
      { time: 'Evening', l: 'Carries on into term time without a change.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'The child starts a tiny project with a teacher, who then suggests a course and a level.' },
      { h3: 'Groups of five to ten', p: 'Children at the same level, from Ireland and other countries, showing each other their summer builds.' },
      { h3: 'One to one', p: 'For shy children, very quick ones, or families whose holidays make a group hard.' },
      { h3: 'No entrance test', p: 'Placement is by what a child can do in the free class, nothing else.' },
      { h3: 'From anywhere', p: 'Home, a holiday house or grandparents abroad: a laptop and a steady connection are all it takes.' },
      { h3: 'A finished project', p: 'Every summer ends with something to show, saved so it can be shown again in September.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four projects our students built and published online. The <a class="ag-inline-link" href="/student-labs">student labs</a> page gathers many more.',
  reviewsLede: 'Straight from our Google reviews, untouched. None were bought or ghost-written.',

  fees: {
    h2: 'Summer fees',
    lede: 'The same monthly price in US dollars that families pay in every country except India, with no summer surcharge, no registration fee and no commitment past the month you are in.',
    free: ['A tiny project started with a teacher', 'A suggested course and level', 'No card at all'],
    group: ['Five to ten children at one level', 'The same teacher through the summer', 'Projects looked at each week', 'A certificate on completion'],
    one: ['A teacher for one child', 'Slots that move around holidays', 'Right for shy or very quick children']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What Irish parents ask about summer coding',
    items: [
      { q: 'When do Irish schools break for summer?', a: 'There is no national date. Secondary schools stop teaching by the Friday before the June bank holiday, primary schools usually later in June, and each school sets its own dates.' },
      { q: 'When do schools go back?', a: 'The Department expects the school year to start in the week in which 1 September falls, or the week before if a school needs extra days.' },
      { q: 'Will my child fall behind without summer lessons?', a: 'We do not claim that. The Department has said it hopes pandemic-related learning loss has diminished significantly for most children. Summer coding is about time for a real project.' },
      { q: 'Is there an entrance test?', a: 'No. A child is placed by what they show in the free first class. Some other summer programmes in Ireland do select by assessment.' },
      { q: 'Can my child do this and a CTYI course?', a: 'Yes. Many families combine a short campus programme with a weekly online project either side of it.' },
      { q: 'What if we go away on holiday?', a: 'Lessons can continue from anywhere with a laptop and a steady connection, or pause for a week and resume.' },
      { q: 'What ages is the summer course for?', a: 'From 6 to 18. Younger children start with blocks and games, and teenagers work in Python on apps, data or AI.' },
      { q: 'How much does summer coding cost?', a: 'A first class costs nothing. Continuing is USD 100 a month in a group or USD 150 a month one to one, billed in US dollars, with no summer surcharge and nothing past the current month.' },
      { q: 'Are morning classes possible?', a: 'Yes, and summer is the easiest time for them. Our teachers are four and a half hours ahead of Ireland in summer, so a morning class in Ireland falls in their afternoon.' },
      { q: 'What happens after I send the form?', a: 'We phone at a convenient Irish time and book the free class. You pay only if your child carries on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'After the summer',
    lede: 'Pages for term time, by age.',
    items: [
      { href: '/best-coding-classes-for-kids-ireland', label: 'Best coding classes for kids in Ireland', p: 'Term-time coding for primary school.' },
      { href: '/best-coding-classes-for-teens-ireland', label: 'Best coding classes for teens in Ireland', p: 'The secondary years.' },
      { href: '/transition-year-coding-course-ireland', label: 'Transition Year coding course', p: 'A project for the whole TY year.' },
      { href: '/after-coderdojo-next-step-coding-ireland', label: 'After CoderDojo', p: 'For children who started at a club.' },
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'How to choose any class.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Book a free first class for the summer',
    lede: 'Leave a number and we will ring at a good time for you in Ireland. In the free class your child starts a small project with a teacher, and you find out which course fits the summer ahead.',
    readFirst: 'You can also read up first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">course syllabuses</a> and <a class="ag-inline-link" href="/student-labs">projects from our students</a>.',
    note: 'On WhatsApp we usually reply fastest, and messaging from an Irish phone is free. The number is based in India, where our teachers are; there is no office in Ireland.',
    formNote: 'No payment details and no obligation. A single call to book.'
  },

  footer: {
    cols: [
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-kids-ireland', label: 'Coding for kids, Ireland' },
        { href: '/best-coding-classes-for-teens-ireland', label: 'Coding for teens, Ireland' },
        { href: '/transition-year-coding-course-ireland', label: 'Transition Year coding' }
      ] },
      { h4: 'For families', links: [
        { href: '/best-online-coding-classes-ireland', label: 'Choosing a class' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Coding across the Irish summer holidays'
  },

  personalityCss: `
.ag-root.ag-osc .ag-hero-grid { gap: clamp(1.3rem, 3.5vw, 3rem); }
.ag-root.ag-osc .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-osc .ag-capsule { border-left-width: 6px; }
.ag-root.ag-osc .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-osc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-osc .ag-band-head h3 { letter-spacing: -0.002em; }
.ag-root.ag-osc .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-osc .ag-slots { gap: 1.25rem; }
`,

  mustMention: ['not standardised', 'Friday preceding the June bank holiday', '1 September', '182', '166', 'CTYI', '95th percentile', 'Summer Scholars', 'diminished significantly', 'MTM01', '1,681.5 mm', '686.3 mm']
};
