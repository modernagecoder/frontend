'use strict';
// School holiday coding course, Australia (ag- topic door; AU cluster Phase 2, row 39).
// Sources, read raw on 7 October 2026 (each state's education department):
//  - NSW Department of Education, 2027 term dates (Eastern division school holidays).
//  - Victoria, School term dates and holidays (2026 and 2027 terms; summer holidays 21 December 2026 to
//    27 January 2027).
//  - Queensland Department of Education, School holidays and term dates (2026 summer: Saturday 12 December to
//    Tuesday 26 January 2027, 46 days) and Future school dates (2027 holidays).
//  - WA Department of Education, Future term dates (2027 breaks; "Term dates published in the Western Australian
//    Government Gazette").
//  - Tasmania Department for Education, Children and Young People, Term dates (2027 term holidays).
//  SA, the ACT and the NT returned 403 to an automated read and were not circumvented; they are omitted.
// Our computation (Python): days every one of the five states is on holiday at once, per break.
// Lesson family: a Gantt chart of state school holidays and their overlap.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'SCHOOL HOLIDAYS', blurb: 'School holiday coding for Australian students: the 2026-27 holiday dates by state, the weeks five states share, and how to plan a holiday project with a Gantt chart.' },
  slug: 'school-holiday-coding-course-australia',
  code: 'shau',
  accent: '#1C2858',
  accentRationale: 'School holiday coding, Australia: a deep night navy chosen by hand, at least 11 RGB units from every accent in use',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'School holiday coding course, Australia',
  title: 'School Holiday Coding Course in Australia | 2026-27 Dates',
  description: 'Planning school holiday coding in Australia? The 2026-27 holiday dates for five states, the weeks they all share, and a Gantt chart plan for a holiday code project.',
  ogDescription: 'School holiday coding for Australian students: verified holiday dates by state, the overlap weeks, and how to turn a break into a finished coding project.',
  twitterDescription: 'School holiday coding in Australia: 2026-27 dates by state, shared weeks, and a Gantt chart project plan.',
  pageName: 'School Holiday Coding Course in Australia',
  webPageDescription: 'A planning guide for Australian families using school holidays for coding: verified 2026-27 holiday dates for five states, their overlaps and a project planning method.',
  courseDescription: 'Live online coding lessons for Australian students that continue through school holidays, or pause for them, with holiday projects planned week by week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'School holiday coding',
  navLinks: [
    { href: '#dates', label: 'Holiday dates' },
    { href: '#overlap', label: 'Shared weeks' },
    { href: '#gantt', label: 'Gantt chart' },
    { href: '#plan', label: 'Holiday plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 18 &middot; Holidays, planned',
  h1: 'School holiday coding course in Australia',
  lede: 'School holidays are the most-loved weeks of the year and, for many children, the only time long enough to finish a real coding project. They are also different in every state: a Brisbane family and a Hobart family can be weeks apart in January and a few days apart in April. This page sets out the 2026 to 2027 school holiday dates for five states, read from each state\'s education department, shows the weeks when all five are on holiday together, and explains how a child can plan a holiday coding project with a Gantt chart, the same tool used to plan real software.',
  secondaryCta: { href: '#dates', label: 'Holiday dates' },
  wa: 'Hello Modern Age Coders, we would like our child to do some coding in the Australian school holidays. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; lessons through the holidays, or a pause, your choice',
  spec: [
    ['For', 'Ages 6 to 18'],
    ['When', 'Any school holiday, any state'],
    ['Dates shown', 'NSW, Victoria, Queensland, WA, Tasmania'],
    ['Project tool', 'A Gantt chart'],
    ['Format', 'Live online video'],
    ['Group', 'Five to ten, or one to one'],
    ['Times', 'Set for your state'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A school holiday coding course gives an Australian student focused time to finish a project when school is out. Holiday dates differ by state: in winter 2027, NSW, Victoria, Queensland, WA and Tasmania all share only Monday 5 July to Sunday 11 July. Modern Age Coders teaches live online lessons that can continue through any state\'s holidays, and students can plan a holiday project with a Gantt chart.',

  picks: {
    eyebrow: 'Good holiday projects',
    h2: 'Three courses that suit a holiday push',
    lede: 'Each has a clear end product that fits a two-week break. The free first lesson picks the right one.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'SHAU / 01', title: 'A holiday game, start to finish', note: 'Ages 8 to 12. A Scratch, Roblox or Minecraft game finished before school goes back.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'SHAU / 02', title: 'A website of your own', note: 'Teens. A responsive site about a hobby, published by the end of the break.' },
      { course: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', code: 'SHAU / 03', title: 'A hackathon-style build', note: 'Ages 13 to 17. An idea, a team-style sprint and a demo.' }
    ]
  },

  sections: [
    {
      id: 'dates', tint: 'tint', eyebrow: 'Holiday dates',
      h2: 'School holidays by state, summer 2026 to spring 2027',
      lede: 'These are the government school holiday windows as each state publishes them, or, where a state publishes term dates only, the days between the end of one term and the start of the next. Independent and Catholic schools can differ, so check your own school.',
      body: [
        { kind: 'table', caption: 'Government school holidays, 2026 to 2027 (read from each education department, 7 October 2026)', head: ['State', 'Summer 2026 to 2027', 'Autumn 2027', 'Winter 2027', 'Spring 2027'], rows: [
          ['NSW (Eastern division)', 'Friday 18 December to Wednesday 27 January', 'Monday 12 April to Friday 23 April', 'Monday 5 July to Friday 16 July', 'Monday 27 September to Friday 8 October'],
          ['Victoria', 'Monday 21 December to Wednesday 27 January', 'Friday 26 March to Sunday 11 April (between terms)', 'Saturday 26 June to Sunday 11 July (between terms)', 'Saturday 18 September to Sunday 3 October (between terms)'],
          ['Queensland', 'Saturday 12 December to Tuesday 26 January 2027, 46 days', 'Friday 26 March to Sunday 11 April', 'Saturday 26 June to Sunday 11 July', 'Saturday 18 September to Monday 4 October'],
          ['Western Australia', 'Friday 18 December to Sunday 31 January (between terms)', 'Saturday 10 April to Sunday 25 April', 'Saturday 3 July to Sunday 18 July', 'Saturday 25 September to Sunday 10 October'],
          ['Tasmania', 'Saturday 19 December to Wednesday 3 February (between terms)', 'Saturday 10 April to Sunday 25 April', 'Saturday 3 July to Sunday 18 July', 'Saturday 25 September to Sunday 10 October']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to read the table',
          left: [
            'NSW publishes its holidays as weekday spans; the other states mostly include the weekends at either end. Where we wrote "between terms", the state publishes term dates and we counted the days in between ourselves.',
            'Western Australia notes that its dates are "Term dates published in the Western Australian Government Gazette" and are inclusive. NSW\'s Western division schools start the school year later, with extra days at the start of summer.'
          ],
          rightH3: 'States not shown',
          right: [
            'South Australia, the ACT and the Northern Territory did not allow our automated reading of their term-date pages, and we do not get around such blocks. Families there should check their own department\'s dates.',
            'Lesson times and pauses are always set around your own state\'s calendar, wherever you live.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/calendars/2027" rel="noopener" target="_blank">NSW 2027 term dates</a>; <a class="ag-inline-link" href="https://www.vic.gov.au/school-term-dates-and-holidays-victoria" rel="noopener" target="_blank">Victorian school term dates</a>; Queensland <a class="ag-inline-link" href="https://education.qld.gov.au/about-us/calendar/term-dates" rel="noopener" target="_blank">term dates</a> and <a class="ag-inline-link" href="https://education.qld.gov.au/about-us/calendar/future-dates" rel="noopener" target="_blank">future dates</a>; <a class="ag-inline-link" href="https://www.education.wa.edu.au/future-term-dates" rel="noopener" target="_blank">WA future term dates</a>; <a class="ag-inline-link" href="https://www.decyp.tas.gov.au/learning/term-dates/" rel="noopener" target="_blank">Tasmanian term dates</a>. Dates can change; always confirm with the department.' }
      ]
    },
    {
      id: 'overlap', tint: 'deep', eyebrow: 'Shared weeks',
      h2: 'When are all five states on holiday at once?',
      lede: 'We put the five states\' windows side by side and found the days they all share. The answer is surprisingly short outside summer.',
      body: [
        { kind: 'table', caption: 'Days when NSW, Victoria, Queensland, WA and Tasmania are all on holiday (our calculation)', head: ['Break', 'Shared by all five', 'Days', 'Weekdays'], rows: [
          ['Summer 2026 to 2027', 'Monday 21 December 2026 to Tuesday 26 January 2027', '37', '27'],
          ['Autumn 2027', 'No shared day: Victoria and Queensland finish on Sunday 11 April, the day before NSW starts', '0', '0'],
          ['Winter 2027', 'Monday 5 July to Sunday 11 July', '7', '5'],
          ['Spring 2027', 'Monday 27 September to Sunday 3 October', '7', '5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why it matters',
          left: [
            'For a family, the shared weeks matter when cousins in different states want to code together, or when a national event runs in the holidays.',
            'For us, the differences matter more: a holiday in Brisbane is a school week in Sydney, so we plan holiday lessons around each family\'s own state, not a national calendar.'
          ],
          rightH3: 'The autumn gap',
          right: [
            'In autumn 2027, Victoria and Queensland finish their break on Sunday 11 April, and NSW begins on Monday 12 April. Not a single day is shared by all five.',
            'Children enjoy discovering this with code, because it looks impossible until the dates are drawn side by side.'
          ] },
        { kind: 'p', mt: true, html: 'Summer is the exception. From Monday 21 December 2026 to Tuesday 26 January 2027, all five states are on holiday together for 37 days, which includes 27 weekdays. That long shared stretch is the natural time for a larger project: a game with several levels, a first app, or a website with a small database behind it. A learner who plans it in the first week, using the method further down this page, usually finishes with time left to share it before school returns.' }
      ]
    },
    {
      id: 'gantt', tint: 'tint', eyebrow: 'Gantt chart',
      h2: 'Draw it as a Gantt chart',
      lede: 'A Gantt chart draws each task, or here each state\'s holiday, as a horizontal bar against a timeline. Overlaps appear where the bars line up. It is how software teams plan releases, and it is a perfect first data-visualisation project.',
      body: [
        { kind: 'table', caption: 'Winter 2027 as a text Gantt chart, one character per day from Saturday 26 June to Sunday 18 July', head: ['State', 'Bar'], rows: [
          ['NSW', '.........############..'],
          ['Victoria', '################.......'],
          ['Queensland', '################.......'],
          ['Western Australia', '.......################'],
          ['Tasmania', '.......################'],
          ['All five', '.........#######.......']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Building it in Python',
          left: [
            'Store each state\'s start and end as dates, loop over every day in the season, and print a hash where that state is on holiday and a dot where it is not. A final row prints a hash only where every state has one.',
            'Older students draw the same thing with a plotting library, one coloured bar per state, which makes a lovely holiday poster.'
          ],
          rightH3: 'What it teaches',
          right: [
            'Dates as data, loops over ranges, the logical AND that finds the overlap, and the habit of checking a computed answer against the source table.',
            'It is also honest about its inputs: the chart is only as good as the dates read from each department, which is why we list every source.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Holiday plan',
      h2: 'A two-week holiday project, planned like software',
      lede: 'The same Gantt idea turns a holiday into a finished project rather than a half-built one. Here is a plan we use for a ten-weekday break.',
      body: [
        { kind: 'table', caption: 'A ten-weekday holiday project plan', head: ['Days', 'Task', 'Finished when'], rows: [
          ['1 and 2', 'Design: what the game or site does, sketched on paper', 'A one-page plan exists'],
          ['3 to 6', 'Build: the core working version', 'It runs from start to end'],
          ['7 and 8', 'Test: friends and family try it; bugs are listed', 'The bug list is empty or accepted'],
          ['9', 'Polish: sound, colours, instructions', 'A newcomer can use it without help'],
          ['10', 'Show: present it to family or share it', 'Someone else has played it']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lessons through the break', p: 'Weekly lessons can continue in the holidays for families who want them, giving a check-in at the start and end of the plan.' },
          { h3: 'Or a pause', p: 'Families can pause for the break and pick up again in the new term. You pay month by month, so pausing is simple.' },
          { h3: 'Short holidays', p: 'Some families use the holidays for a few extra lessons on a project, then return to the usual weekly slot when term starts.' }
        ] },
        { kind: 'p', mt: true, html: 'Planning around the long summer break? Our <a class="ag-inline-link" href="/online-coding-summer-camp">online coding camp page</a> shows current camp dates, and our guide to <a class="ag-inline-link" href="/online-coding-classes-for-kids-australia">online classes for Australian kids</a> covers year levels and time zones.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From a holiday idea to a finished project',
    lede: 'How holiday learners typically progress across a break.',
    table: { caption: 'Four stages of a holiday project', head: ['Stage', 'What happens'], rows: [
      ['1. Choose', 'Pick one project small enough to finish in the break'],
      ['2. Plan', 'Draw a Gantt chart of the days available'],
      ['3. Build', 'Work in short, daily sessions, checking the plan'],
      ['4. Share', 'Show the finished project before school returns']
    ] },
    left: { h3: 'For younger children', ps: [
      'Short daily sessions of thirty to forty-five minutes work well, with a parent seeing progress each evening.',
      'A finished Scratch game is a proud way to start the new term.'
    ] },
    right: { h3: 'For teenagers', ps: [
      'A website, an app or a small AI project fits a two-week break.',
      'Planning it as a Gantt chart is itself a skill employers and senior courses value.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that fit the holidays',
    lede: 'Grouped by age. Each produces something finished. The free first lesson places the learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'SHAU / CHD / 01', slug: 'game-development-masterclass-for-kids', title: 'Holiday games', blurb: 'Scratch, Roblox or Minecraft.' },
        { code: 'SHAU / CHD / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft builds with code', blurb: 'MakeCode projects.' },
        { code: 'SHAU / CHD / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Kids hackathon prep', blurb: 'An idea taken to a demo.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'SHAU / TEN / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'A first real website', blurb: 'HTML and CSS, published.' },
        { code: 'SHAU / TEN / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Unity game sprint', blurb: 'C# and a playable build.' },
        { code: 'SHAU / TEN / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Teen hackathon track', blurb: 'Build, test, present.' }
      ] },
      { num: 'III', h3: 'Projects with AI', sub: 'Ages 8 to 18', courses: [
        { code: 'SHAU / AI / 01', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'AI-assisted games, understood.' },
        { code: 'SHAU / AI / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Python, web and AI projects.' },
        { code: 'SHAU / AI / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI works, by experiment.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Holiday lessons built around a finish line',
    lede: 'In the holidays, every lesson points at a finished project by the first day of term.',
    slots: [
      { time: 'Mornings', l: 'Popular in the holidays, in your state\'s time.' },
      { time: 'Afternoons', l: 'The usual after-school slot still works.' },
      { time: 'Weekends', l: 'Saturday and Sunday options.' }
    ],
    cells: [
      { h3: 'A clear goal', p: 'One project, defined in the first holiday lesson.' },
      { h3: 'A plan', p: 'A Gantt chart of the days available.' },
      { h3: 'Check-ins', p: 'A teacher reviews progress against the plan.' },
      { h3: 'Your state\'s dates', p: 'Planned around your own holiday window.' },
      { h3: 'Small groups', p: 'Fifteen to twenty learners, or one to one.' },
      { h3: 'Pause if you prefer', p: 'Taking the holidays off is fine too.' }
    ]
  },

  projectsH2: 'Projects finished in the holidays',
  projectsLede: 'Games, sites and tools our students completed over breaks. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families\' Google reviews, reproduced as written.',

  fees: {
    h2: 'Fees',
    lede: 'We bill monthly in US dollars outside India, one rate for every country. Nothing is charged to join and no term commitment applies, which makes it easy to keep going through a holiday or pause for one.',
    free: ['A free first lesson', 'Help choosing a holiday project', 'No card asked'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Similar age and level', 'Monthly, pause any time'],
    one: ['A teacher to yourself', 'Holiday times that suit you', 'Your own project pace']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Common questions about school holiday coding',
    items: [
      { q: 'Do you run coding lessons in the Australian school holidays?', a: 'Yes. Weekly online lessons can continue through school holidays for families who want them, and families can also pause for a break and return in the new term.' },
      { q: 'What is a Gantt chart?', a: 'A Gantt chart is a planning chart that shows each task, or each period, as a horizontal bar along a timeline, so overlaps and gaps are easy to see. Software teams use it to plan work.' },
      { q: 'When are the 2027 winter school holidays?', a: 'They differ by state. In 2027, NSW Eastern division schools break from Monday 5 July to Friday 16 July, while Victoria and Queensland break from Saturday 26 June to Sunday 11 July, and WA and Tasmania from Saturday 3 July to Sunday 18 July.' },
      { q: 'Is there a week when all states are on holiday together?', a: 'Among the five states we checked, all share Monday 5 July to Sunday 11 July in winter 2027 and Monday 27 September to Sunday 3 October in spring 2027, but no single day in autumn 2027.' },
      { q: 'Why are SA, the ACT and the NT not listed?', a: 'Their term-date pages did not allow our automated reading, and we do not work around such blocks. Families in those places should check their education department\'s dates.' },
      { q: 'What can my child build in a two-week holiday?', a: 'A small game, a website, an app or a simple AI project, planned so it is finished and shared before school returns.' },
      { q: 'Do lesson times change in the holidays?', a: 'They can. Many families move to a morning slot in the holidays, set in their own state\'s time, then return to the usual time when term starts.' },
      { q: 'Do independent schools have the same holidays?', a: 'Not always. The dates on this page are for government schools; independent and Catholic schools can set different dates.' },
      { q: 'Are holiday lessons live?', a: 'Yes. Every lesson is live online with a teacher, in a small group or one to one.' },
      { q: 'How much do holiday lessons cost?', a: 'The first lesson is free. After that, fees are monthly with no joining fee and no term lock-in, so you can continue or pause around the holidays.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian families planning coding around the school year.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids', p: 'Year levels and time zones.' },
      { href: '/coding-and-ai-classes-in-new-south-wales', label: 'Coding and AI in NSW', p: 'The NSW school system.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Events to aim a holiday project at.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'A good holiday project path.' },
      { href: '/free-coding-classes-for-kids-australia-what-you-get', label: 'Free coding options', p: 'Clubs and self-guided projects.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your number, a good time and your state. In the first lesson the learner picks a holiday project and sketches its plan with a teacher.',
    readFirst: 'Want to read first? See <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'WhatsApp from Australia is the fastest route. We work from India, so replies come from a +91 number; there is no Australian office.',
    formNote: 'Free first lesson; no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Holiday planning', links: [
        { href: '/online-coding-summer-camp', label: 'Online coding camp' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/game-development-for-kids-australia', label: 'Holiday game projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' }
      ] }
    ],
    bottomRight: 'Five calendars, one shared week in winter'
  },

  personalityCss: `
.ag-root.ag-shau .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-shau .ag-capsule { border-left-width: 3px; border-radius: 6px; }
.ag-root.ag-shau .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-shau .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-shau .ag-band-head h3 { letter-spacing: -0.011em; }
.ag-root.ag-shau .ag-slots { gap: 1.35rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, government school holidays 2026-27, read from each education department on 7 October 2026. NSW Eastern division 2027: summer 2026-27 Friday 18 December 2026 to Wednesday 27 January 2027; autumn Monday 12 April to Friday 23 April; winter Monday 5 July to Friday 16 July; spring Monday 27 September to Friday 8 October. Victoria: summer Monday 21 December 2026 to Wednesday 27 January 2027; 2027 terms end Thursday 25 March, Friday 25 June, Friday 17 September and restart Monday 12 April, Monday 12 July, Monday 4 October. Queensland: summer Saturday 12 December to Tuesday 26 January 2027, 46 days; 2027 holidays Friday 26 March to Sunday 11 April, Saturday 26 June to Sunday 11 July, Saturday 18 September to Monday 4 October. WA 2027 breaks Saturday 10 April to Sunday 25 April, Saturday 3 July to Sunday 18 July, Saturday 25 September to Sunday 10 October; "Term dates published in the Western Australian Government Gazette". Tasmania 2027 holidays 10 April to 25 April, 3 July to 18 July, 25 September to 10 October.',
    localProject: 'A Gantt chart of five states\' 2026-27 school holidays and their overlap (Python): all five share Monday 21 December 2026 to Tuesday 26 January 2027 (37 days, 27 weekdays), no day in autumn 2027 (Victoria and Queensland end Sunday 11 April, NSW starts Monday 12 April), Monday 5 July to Sunday 11 July in winter (7 days, 5 weekdays) and Monday 27 September to Sunday 3 October in spring (7 days, 5 weekdays). Lesson family: Gantt chart.',
    requiredMentions: ['Gantt', 'Monday 5 July to Sunday 11 July', 'Monday 27 September to Sunday 3 October', 'Monday 21 December 2026 to Tuesday 26 January 2027', 'Saturday 12 December to Tuesday 26 January 2027', 'Friday 26 March to Sunday 11 April', 'Saturday 25 September to Sunday 10 October', 'Western Australian Government Gazette'],
    sources: [
      { claim: 'NSW Department of Education, 2027 term dates and school holidays (Eastern and Western divisions).', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'Victoria, school term dates and holidays, 2026 and 2027.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'Queensland Department of Education, term dates (2026 summer holiday, 46 days).', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'Queensland Department of Education, future school dates (2027 holidays).', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' },
      { claim: 'WA Department of Education, future term dates (2027 breaks; Government Gazette note).', url: 'https://www.education.wa.edu.au/future-term-dates' },
      { claim: 'Tasmania Department for Education, Children and Young People, term dates (2027 holidays).', url: 'https://www.decyp.tas.gov.au/learning/term-dates/' }
    ],
    rejectedClaims: [
      'South Australia, ACT and Northern Territory holiday dates: their pages returned 403 and were not circumvented; omitted.',
      'Summer windows for WA and Tasmania and all Victorian holidays are derived from term dates and labelled "between terms".',
      'Any claim about camp dates for Australian summer: not made; the camp page is linked for current dates.',
      'Independent and Catholic school holiday dates: not covered; the page says they can differ.',
      'Public holiday dates within school holidays: not read raw, so not discussed.'
    ]
  }
};
