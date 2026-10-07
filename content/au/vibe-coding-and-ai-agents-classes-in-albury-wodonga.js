'use strict';
// Albury-Wodonga (cg- regional city page, Australia cluster Phase 7, row 146). Shaped page: vibe coding and AI
// agents, leading with teenagers and adults. A twin city across the Murray: Albury is in New South Wales
// (AlburyCity, alburycity.nsw.gov.au) and Wodonga is in Victoria (Wodonga Council, wodonga.vic.gov.au). The ABS
// treats the pair as one Significant Urban Area, code 1001, and its QuickStats compare it with New South Wales.
// Spine: what does an agent's timetable tool get wrong if it ignores exception dates? Data: Transport Victoria
// GTFS Schedule (data.vic.gov.au, Creative Commons Attribution), gtfs.zip downloaded 7 October 2026, regional
// bus feed (folder 6): 14 routes whose names mention Wodonga, 279 trips, 3 service calendars, all valid
// 1 October to 31 December 2026. Calendars: T0 Monday to Friday, 135 trips, removed on 3 November, 25 December
// and 28 December; UU Tuesday only, 129 trips, removed on every Tuesday in the window except 3 November; T2
// Saturday only, 15 trips on routes 150 and 160, removed on 26 December. 16 exception rows in all. Our code
// (scratchpad au/r2/albw_cal.py): of 92 days, a tool reading calendar.txt alone gives the wrong trip count on 16
// days, 1,968 trips in error; on an ordinary Tuesday it reports 264 trips where the feed runs 135; on Tuesday
// 3 November it reports 264 where 129 run; on 25 December 135 where none run. Lesson family: GTFS service
// calendars with exception dates as an agent tool; screened 0 location-page hits on 7 October 2026; claimed by
// AU-R2.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Significant Urban Area 1001 Albury -
// Wodonga: 97,793 people; median age 38; 25,718 families; 43,012 private dwellings; 2.4 people per household;
// separate house 31,941 (83.9%; New South Wales 65.6%; Australia 72.3%); flat or apartment 611 (1.6%; New South
// Wales 21.7%; Australia 14.2%); Professionals 8,689 (18.8%; New South Wales 25.8%; Australia 24.0%); Bachelor
// Degree level and above 13,944 (17.7%; New South Wales 27.8%; Australia 26.3%); aged 15 to 19 6,009 (6.1%; New
// South Wales 5.7%; Australia 5.7%). School calendars for 2027: Victoria, government school students start
// Thursday 28 January (vic.gov.au); New South Wales Eastern division Term 1 Wednesday 3 February to Friday
// 9 April (education.nsw.gov.au). IANA tz: Australia/Sydney and Australia/Melbourne share the same daylight
// saving dates. Excluded: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ALBURY-WODONGA', label: 'Albury-Wodonga', blurb: 'Albury-Wodonga on the Murray, Wodonga\'s bus calendars, and why an agent\'s tool must read exception dates.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-albury-wodonga',
  code: 'albw',
  accent: '#386082',
  accentRationale: 'Albury-Wodonga: a Murray River blue (HSV saturation 0.57, value 0.51, hue 207), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, and 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Albury-Wodonga',
    eyebrow: 'Albury, New South Wales and Wodonga, Victoria',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Albury-Wodonga, NSW and Victoria',
  title: 'Vibe Coding and AI Agents Classes in Albury-Wodonga | Online',
  description: 'Live online vibe coding and AI agents classes for Albury and Wodonga teens and adults: build agents, test their tools and own the code. First lesson free.',
  ogDescription: 'AI agents classes for Albury-Wodonga, with a project showing how an agent\'s bus tool goes wrong on 16 days when it ignores exception dates.',
  twitterDescription: 'Albury-Wodonga vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Albury-Wodonga Learners',
    description: 'Level-matched online vibe coding, AI agents, Python and tool design for teenagers and adults in Albury and Wodonga, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Albury-Wodonga',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Albury-Wodonga?',
  capsule: 'For teenagers and adults on both sides of the Murray, live classes where you describe a program to an AI, then test and steer what it builds until it is genuinely right. The statistics bureau counted 97,793 people in the Albury - Wodonga urban area at the 2021 Census, a city split between New South Wales and Victoria. Lessons are online, one to one or in small groups, and the first one is free.',
  lead: 'Ask an AI agent how many buses run in Wodonga next Tuesday and it will call a tool, and the tool will read a timetable. Transport Victoria publishes Wodonga\'s buses as open data, and the timetable comes in two parts: a weekly pattern, and a list of dates that break the pattern. A tool written quickly, by a person or by an AI, often reads only the first part. We tested exactly that. Across the 92 days the current feed covers, the shortcut gives the wrong number of trips on 16 days. On an ordinary Tuesday it reports 264 trips when 135 actually run, and on Christmas Day it promises 135 buses when none run at all.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Albury-Wodonga.',

  picks: {
    eyebrow: 'Course picks for Albury-Wodonga',
    h2: 'Courses for agent builders on the Murray',
    intro: 'Four options that match the timetable-tool project. Your free trial settles which, and you do not need a card.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Build Python and web projects with an AI assistant, then learn to read, test and fix everything it writes.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python an agent builder needs: functions, files, dates and tests, understood line by line.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Full-stack projects built alongside AI, backed by the data structures and testing that keep them correct.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults', note: 'Language models, tools and agents, designed and evaluated rather than simply used.' }
    ]
  },

  sections: [
    {
      id: 'twin', tint: '', eyebrow: 'One urban area, two states',
      h2: 'Albury in New South Wales, Wodonga in Victoria',
      intro: 'The statistics bureau counts the two cities as a single Significant Urban Area. Its 2021 QuickStats compare the area with New South Wales and Australia.',
      body: [
        { kind: 'table', caption: '2021 Census QuickStats, Albury - Wodonga urban area, with New South Wales and Australia', head: ['Measure', 'Albury - Wodonga', 'New South Wales', 'Australia'], rows: [
          ['People', '97,793', 'not shown', 'not shown'],
          ['Median age', '38', 'not shown', 'not shown'],
          ['Families', '25,718', 'not shown', 'not shown'],
          ['Private dwellings', '43,012', 'not shown', 'not shown'],
          ['Separate houses, share of occupied homes', '83.9%', '65.6%', '72.3%'],
          ['Flats or apartments, share of occupied homes', '1.6%', '21.7%', '14.2%'],
          ['Aged 15 to 19', '6,009 (6.1%)', '5.7%', '5.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two councils', p: 'AlburyCity governs the New South Wales side of the river and Wodonga Council the Victorian side; each runs its own services and website.' },
          { h3: 'Houses on both banks', p: '31,941 occupied homes were separate houses, 83.9%, while flats and apartments made up just 1.6%.' },
          { h3: 'Workforce', p: '8,689 employed residents were professionals, 18.8%, and 13,944 people aged 15 and over held a bachelor degree or above.' }
        ] },
        { kind: 'p', text: 'Because the urban area crosses a state border, we quote only the bureau\'s own figures for it as a whole and never add a separate Albury count to a separate Wodonga count to make one up. The bureau\'s privacy adjustments mean such sums would not match its published total anyway.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What does an agent\'s bus tool get wrong without exception dates?',
      intro: 'Wodonga\'s buses in Transport Victoria\'s open GTFS feed, read two ways: weekly pattern only, and weekly pattern plus the dates that override it.',
      body: [
        { kind: 'table', caption: 'Wodonga bus calendars in the feed downloaded on 7 October 2026 (our reading)', head: ['Calendar', 'Weekly pattern', 'Trips', 'Exception dates'], rows: [
          ['T0', 'Monday to Friday', '135', 'removed on 3 November, 25 December and 28 December'],
          ['UU', 'Tuesday only', '129', 'removed on every Tuesday except 3 November'],
          ['T2', 'Saturday only, routes 150 and 160', '15', 'removed on 26 December']
        ] },
        { kind: 'table', mt: true, caption: 'Trips per day: weekly pattern only versus the full calendar (our calculation)', head: ['Date', 'Pattern-only tool says', 'Feed actually runs'], rows: [
          ['An ordinary Tuesday, such as 13 October 2026', '264', '135'],
          ['Tuesday 3 November 2026', '264', '129'],
          ['Friday 25 December 2026', '135', '0'],
          ['Saturday 26 December 2026', '15', '0'],
          ['Monday 28 December 2026', '135', '0'],
          ['Days wrong out of the 92 in the feed', '16', 'none']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read the pattern', p: 'calendar.txt says which weekdays each service runs between a start and an end date. Easy to code, and only half the story.' },
          { h3: '2. Apply the exceptions', p: 'calendar_dates.txt adds or removes a service on single dates. Removed always wins over the weekly pattern on that day.' },
          { h3: '3. Count and compare', p: 'Run both versions over every date in the feed. They disagree on 16 of 92 days and by 1,968 trips in total.' }
        ] },
        { kind: 'callout', h3: 'The Tuesday surprise', p: 'Calendar UU looks like a Tuesday timetable of 129 trips. Its exception list then removes it from every Tuesday in the feed bar one, 3 November 2026, when the ordinary weekday calendar is removed instead. So the feed runs a different set of buses on exactly one Tuesday, and a tool that ignores exceptions doubles every other Tuesday. We report what the file says; the reason for that day is not given in the data.' },
        { kind: 'p', text: 'Every count here is ours, computed from Transport Victoria\'s regional bus feed as downloaded on 7 October 2026, filtered to routes whose names mention Wodonga, several of which cross the river to Albury. The feed ends on 31 December 2026, and a careful tool must say "unknown" for any date after that rather than guess.' }
      ]
    },
    {
      id: 'agent', tint: 'tint', eyebrow: 'Building the agent',
      h2: 'Four rules for a tool an agent can trust',
      intro: 'An agent is only as reliable as the functions it calls. These rules came straight out of the Wodonga timetable.',
      body: [
        { kind: 'table', caption: 'Tool design rules, each tested on the Wodonga feed', head: ['Rule', 'Wodonga test case', 'Failure it prevents'], rows: [
          ['Read every file the format defines', 'calendar_dates.txt alongside calendar.txt', 'Doubled Tuesdays and buses on Christmas Day'],
          ['Respect the data\'s date range', 'Answers only between 1 October and 31 December 2026', 'Confident answers about January from an expired file'],
          ['Return structured results', 'Trip counts plus the calendars that produced them', 'An agent that cannot explain its answer'],
          ['Test the edge dates', '3 November, 25, 26 and 28 December', 'Bugs that hide on ordinary days'],
          ['Keep a golden list', 'The 16 dates where the two readings differ', 'Old bugs creeping back after a change']
        ] },
        { kind: 'p', text: 'Vibe coding speeds up the first draft enormously: describe the tool, and an AI writes a working version in seconds. Our learners then do the part that matters. They check the draft against the format\'s rules, write the date tests above and watch the shortcut fail on 16 of 92 days before an agent ever relies on it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Read the timetable files in Python, count buses by date and find the exceptions themselves before any AI is involved.' },
          { h3: 'University students', p: 'Design tool interfaces for agents, with typed results, error states and automated tests on real feeds.' },
          { h3: 'Adults', p: 'Build small agents for work that call your own data safely, and learn where they must refuse to guess.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders works independently of Transport Victoria, both state governments, AlburyCity, Wodonga Council and the statistics bureau, and claims no partnership with any of them. Census figures are the bureau\'s; all trip counts and comparisons come from our own code.' }
      ]
    },
    {
      id: 'border', tint: '', eyebrow: 'Life on the border',
      h2: 'Two school calendars, one clock',
      intro: 'Families in Albury and Wodonga follow different state school years but share the same time zone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Victoria starts first', p: 'Victorian government school students begin 2027 on Thursday 28 January, according to the Victorian Government.' },
          { h3: 'New South Wales starts later', p: 'Eastern division schools in New South Wales run Term 1 from Wednesday 3 February to Friday 9 April 2027.' },
          { h3: 'Same daylight saving', p: 'New South Wales and Victoria change their clocks on the same Sundays, so a lesson time means the same thing on either bank.' }
        ] },
        { kind: 'spec', title: 'A border is an edge case too', p: 'Two calendars meeting at a river is exactly the kind of detail an automated tool misses. An agent that answers "when does school start?" for an Albury-Wodonga family must first ask which side of the Murray the school is on.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading data files to designing agent tools',
    intro: 'The age labels are suggestions; the free lesson places each learner properly.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Dates and files', p: 'Python that reads timetable files, handles dates correctly and counts what runs on a given day.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Ages 15 to 18', h3: 'Vibe coding with tests', p: 'Building with an AI assistant, then proving its code right with tests on awkward dates and inputs.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course'] },
      { band: 'University', h3: 'Agents and tools', p: 'Tool interfaces, structured outputs and evaluation for agents built on real public data.', courses: ['complete-generative-ai-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Coding agents and automation for professional tasks, with the checks that keep them honest.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI agent can answer timetable questions already. Why should an Albury-Wodonga learner build its tools?',
    intro: 'Because the agent sounds equally sure on the 16 days its tool is wrong as on the 76 days it is right.',
    p1: 'Agents speak fluently whatever their tools return. If the timetable function ignores exception dates, the agent will tell a Wodonga rider that 135 buses run on Christmas Day, in the same calm tone it uses for a normal Thursday. Nothing in the reply signals a problem. The error lives in a function the user never sees.',
    p2: 'That is why our classes teach agent building from the tool upwards. Learners write the function, find the file the shortcut skipped, build a list of dates where answers must change and run it after every edit. Once you have seen an agent confidently wrong, you design tools that report their limits and refuse to answer outside their data.',
    closer: 'In 2026 agents are easy to start and hard to trust; an Albury-Wodonga learner who tests the tools beneath them will build the ones people can rely on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lavington, Thurgoona or West Wodonga, one live lesson',
    intro: 'The twin city spreads along both banks of the Murray, and an online lesson crosses the border without a bridge.',
    cells: [
      { h3: 'Either side of the river', p: 'A learner in North Albury and one in Baranduda can join the same class from home, whichever state they live in.' },
      { h3: 'Two state systems understood', p: 'Teachers work with New South Wales and Victorian year levels and term dates, and senior students can link projects to their own state\'s courses. Lessons are in English.' },
      { h3: 'The trial is a lesson', p: 'Your free session is real teaching that ends with a suggested level, course and time, with no card asked for.' },
      { h3: 'Five to ten per group', p: 'Learners at one stage from the twin city and beyond, so even small regional cohorts get complete classes.' },
      { h3: 'Eight lessons a month', p: 'Two lessons a week at a fixed time, with holidays and exam weeks arranged with your teacher in advance.' },
      { h3: 'Teachers in India', p: 'A 6pm lesson in Albury-Wodonga starts at 12:30pm for our teachers during daylight saving and at 1:30pm in winter.' }
    ],
    spec: { title: 'One time zone for both states', p: 'Albury and Wodonga always show the same time, and both move to daylight saving together. India does not, so the gap to our teachers is five and a half hours in summer and four and a half in winter.' }
  },

  fees: {
    h2: 'What classes cost in Albury-Wodonga',
    intro: 'Three figures, the same on both sides of the river.',
    first: 'One complete lesson for free, finishing with a recommended level, course and time.',
    group: 'About eight lessons a month, learning alongside five to ten others at your level.',
    private: 'Roughly eight lessons a month at the same pace, with one teacher for one learner.',
    closer: 'Fees are in US dollars for every country except India, so a family in East Albury and one in Wodonga pay exactly the same, whatever the state. Invoices begin only after the trial has chosen a course and a time; the pricing page covers holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Reviews families have posted on Google',

  book: {
    h2: 'Book a free vibe coding or agents lesson',
    intro: 'Tell us an age and an interest. A Year 9 student might begin by counting buses on a single date; an adult might go straight to designing and testing the full timetable tool.',
    success: 'Thank you. Someone will contact you soon about an Albury-Wodonga class.'
  },

  faq: {
    h2: 'Albury-Wodonga vibe coding and AI agents questions',
    intro: 'What learners and families in the twin city ask most.',
    items: [
      { q: 'How many people live in Albury-Wodonga?', a: 'The 2021 Census counted 97,793 people in the Albury - Wodonga urban area, which the statistics bureau treats as one area across the New South Wales and Victorian border.' },
      { q: 'What is vibe coding?', a: 'Describing what you want a program to do in everyday language and letting an AI assistant write the code. Done properly, the person still reads, tests and corrects that code, which is the part we teach.' },
      { q: 'What is an AI agent tool?', a: 'A function an AI agent can call to get information or take an action, such as counting the buses that run on a date. The agent decides when to call it, but the tool alone decides whether the answer is correct.' },
      { q: 'What is the Wodonga timetable project?', a: 'Learners read Transport Victoria\'s open bus feed for Wodonga twice: once using only the weekly pattern and once including exception dates. The shortcut gives the wrong trip count on 16 of the 92 days the feed covers.' },
      { q: 'Do you teach students from both states?', a: 'Yes. We work with New South Wales and Victorian year levels and calendars, and help senior students in computing and maths. Work submitted for assessment at school is always the student\'s own.' },
      { q: 'What time are lessons in Albury-Wodonga?', a: 'Most families pick a weekday after-school slot or a weekend morning at the trial. Albury and Wodonga always share one clock, and the India-based teachers sit five and a half hours earlier from October to April, an hour less across the cooler months.' },
      { q: 'Can younger children learn about AI?', a: 'Yes. Children from six start with Scratch and simple AI activities. This page focuses on teenagers and adults, but the free lesson suits any age.' },
      { q: 'Is there a Modern Age Coders centre in Albury-Wodonga?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Albury-Wodonga classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Albury-Wodonga learners',
    html: 'Learners on the New South Wales side can explore the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a>, and those in Wodonga the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria page</a>. For more on testing what AI writes, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>. Every Australian page is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Albury-Wodonga and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-albw .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.4vw, 2.7rem); }
.cg-root.cg-albw .cg-hero h1 { font-weight: 760; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-albw .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.6rem 0 0.8rem 1rem; }
.cg-root.cg-albw .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-albw .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-albw .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-albw .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-albw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-albw .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-albw .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Albury - Wodonga, ABS Census 2021 QuickStats, Significant Urban Area 1001 (read 7 October 2026; compared by the ABS with New South Wales): 97,793 people; median age 38; 25,718 families; 43,012 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 31,941 (83.9 percent; New South Wales 65.6; Australia 72.3), flat or apartment 611 (1.6 percent; New South Wales 21.7; Australia 14.2); occupation: Professionals 8,689 (18.8 percent; New South Wales 25.8; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 13,944 (17.7 percent; New South Wales 27.8; Australia 26.3); aged 15 to 19 6,009 (6.1 percent; New South Wales 5.7; Australia 5.7). Councils: AlburyCity (alburycity.nsw.gov.au) and Wodonga Council (wodonga.vic.gov.au). vic.gov.au: 2027 government school students start Thursday 28 January. education.nsw.gov.au: 2027 Eastern division Term 1 Wednesday 3 February to Friday 9 April. IANA tz database: Australia/Sydney and Australia/Melbourne share daylight saving dates; Asia/Kolkata UTC+5:30.',
    localProject: 'GTFS service calendars with exception dates as an agent tool. Transport Victoria, GTFS Schedule (data.vic.gov.au, CC BY 4.0), gtfs.zip downloaded 7 October 2026 (250,188,897 bytes, last-modified 4 October 2026), regional bus feed 6/google_transit.zip: routes whose long or short name contains Wodonga 14 (AW Wodonga - Albury; 150 Wodonga (South) - Albury; 160 Wodonga (North) - Albury; B, C, E, F, G, M, O, S, T, WS; Albury - Wodonga - Myrtleford); 279 trips; service_ids T0 (1111100, 135 trips, exceptions type 2 on 20261103, 20261225, 20261228), UU (0100000, 129 trips, type 2 on every Tuesday 20261006 to 20261229 except 20261103), T2 (0000010, 15 trips, routes 150 and 160, type 2 on 20261226); all start 20261001, end 20261231; 16 exception rows. Over 92 days, calendar.txt-only counts differ from calendar plus calendar_dates on 16 days, 1,968 trips in total: ordinary Tuesdays 264 versus 135; 20261103 264 versus 129; 20261225 135 versus 0; 20261226 15 versus 0; 20261228 135 versus 0.',
    requiredMentions: [
      '97,793',
      '25,718',
      '43,012',
      '13,944',
      '8,689',
      '31,941',
      '16 of the 92 days',
      '1,968 trips',
      'Victorian government school students begin 2027',
      'Wednesday 3 February to Friday 9 April 2027'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Albury - Wodonga Significant Urban Area (1001): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1001' },
      { claim: 'Transport Victoria GTFS Schedule (CC BY 4.0), regional bus feed including Wodonga routes.', url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule' },
      { claim: 'Victorian Government, school term dates and holidays, 2027.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'NSW Department of Education, future and past term and vacation dates, 2027.', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney and Australia/Melbourne.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why the feed runs a different timetable on Tuesday 3 November 2026: the reason is not in the data and the Victorian public holiday page could not be fetched (business.vic.gov.au returned 403, not circumvented), so no reason is given.',
      'New South Wales bus services on the Albury side: the NSW open transport feed needs an API key and was not used; only Transport Victoria routes are counted.',
      'Separate Albury and Wodonga population figures added together: never summed; only the bureau\'s combined urban area figure is used.',
      'Which New South Wales school division Albury schools follow: not verified, so only the Eastern division dates are quoted as the state\'s standard calendar.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Transport Victoria, the New South Wales or Victorian governments, AlburyCity, Wodonga Council or the ABS.'
    ]
  }
};
