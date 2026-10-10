'use strict';
// Pennant Hills, Sydney (cg- district page, Australia cluster Phase 8, row 240). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*). Pennant Hills is an ABS suburb and locality (SAL13194); its two state
// schools are in Hornsby council. Parents: Australia, NSW, Sydney.
// Spine: an AI agent answers "which month was busiest at Pennant Hills station?" with a tool that turns each
// month stamp into UTC. Every month moves back by one, and the agent says February 2026. Why do naive and aware
// datetimes disagree, and how is the tool fixed?
// Data: Transport for NSW, Train station entries and exits (Opal, CC BY), monthly, October 2024 to August 2026.
// Our run (scratchpad au/b5/pnh_tz.py): 23 Pennant Hills entry months; busiest March 2026 65,719, quietest
// January 2025 26,935; month stamps are local midnights with no zone; attaching Australia/Sydney and converting
// to UTC moves all 23 of 23 file-wide month stamps to the previous day, so the tool labels 65,719 as February
// 2026 and returns 53,599 (the April figure) for March. Offsets at month starts: +10 hours May to October,
// +11 hours November to April. Average 44,111 a month (ours), 107th of 270 train stations with all 23 months.
// Neighbours (ours): Beecroft average 31,103, Thornleigh 38,127.
// Lesson family: naive vs aware datetimes (changed from half-open intervals, which AU-B4 claimed); claimed 10 Oct 2026.
// Place facts: ABS Census 2021 QuickStats, Pennant Hills (NSW) SAL13194; ABS ASGS 2021 SAL area 6.1227 square km.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health, journey to work and
// working at home; enrolment, ICSEA, Indigenous, LBOTE and selective columns. No causes given for monthly changes.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'PENNANT HILLS',
    label: 'Pennant Hills, Sydney',
    blurb: 'Vibe coding and AI agents for Pennant Hills, with a project where a time-zone slip makes an agent name the wrong busiest month at the station.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'vibe-coding-and-ai-agents-classes-in-pennant-hills-sydney',
  code: 'pnhl',
  accent: '#562B29',
  accentRationale: 'Pennant Hills: a deep blackbutt-bark red-brown (hue 4), chosen by hand at least 10 RGB units from every accent declared in content, the shared stylesheets and the claims log, with strong contrast on white and the paper tints',
  pageType: 'city',
  place: {
    name: 'Pennant Hills',
    eyebrow: 'Pennant Hills, upper north Sydney',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Pennant Hills, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Pennant Hills, Sydney',
  description: 'Live online vibe coding and AI agent classes for Pennant Hills learners aged 6 to 67, with a project on station data and time zones. First lesson free.',
  ogDescription: 'Vibe coding and AI agents for Pennant Hills: one time-zone conversion moves every month back by one, and the agent names the wrong busiest month.',
  twitterDescription: 'Pennant Hills vibe coding and AI agents classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Pennant Hills',
    description: 'Level-matched online lessons in AI-assisted coding and AI agents for children, teenagers and adults in Pennant Hills, Sydney, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Pennant Hills',
  capsuleQ: 'What should Pennant Hills learners expect from vibe coding and AI agent classes?',
  capsule: 'Live online lessons in small groups where AI helps write the code and the learner checks every answer it gives. Children start with Scratch at six; teenagers and adults build agents in Python. Pennant Hills spans about 6.12 square kilometres; the 2021 Census counted 7,588 residents there.',
  lead: 'Ask an AI agent which month was busiest at Pennant Hills station and it may reply February 2026, confidently and wrongly. The busiest month in the Transport for NSW figures was March 2026, with 65,719 entries. The agent\'s tool did one sensible-looking thing: it converted each month stamp to UTC. Because the stamps are Sydney midnights, every one of them slid back into the previous day, and so into the previous month. Fixing it is a lesson in naive and aware datetimes that every agent builder needs.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI agents lesson for a learner in Pennant Hills.',
  picks: {
    eyebrow: 'Course picks for Pennant Hills',
    h2: 'Courses where AI writes and learners verify',
    intro: 'Every course pairs AI help with checking: tests, sample answers and a look at the raw data. The trial lesson is free and sets the level, with no card needed.',
    items: [
      {
        course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev',
        band: 'Ages 6 to 12',
        note: 'Games described in words, built with AI help, then played to find bugs.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 12 to 17',
        note: 'Python and web projects with AI, including dates, times and data files.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The datetime module, files and tests behind any agent tool.' },
      {
        course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
        band: 'University and adult',
        note: 'Agents and full-stack apps that store and show times correctly.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Pennant Hills in the Census',
      h2: 'A station suburb with many graduates',
      intro: 'Figures for the Pennant Hills suburb and locality from the 2021 Census, next to the state and the nation.',
      body: [
        {
          kind: 'table',
          caption: 'Pennant Hills, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '7,588'],
            ['Median age', '43'],
            ['Families', '2,151'],
            ['Private dwellings', '2,876'],
            ['Average people per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Pennant Hills compared',
          head: ['Indicator', 'Pennant Hills', 'NSW', 'Australia'],
          rows: [
            ['Bachelor degree or higher (aged 15 and over)', '48.6% (3,055)', '27.8%', '26.3%'],
            ['Professionals among employed residents', '38.5% (1,431)', '25.8%', '24.0%'],
            ['Students at university or other higher education', '22.4% (528)', '15.3%', '15.4%'],
            ['Residents aged 10 to 14', '6.8% (514)', '6.2%', '6.2%'],
            ['Flats or apartments among occupied homes', '14.9% (389)', '21.7%', '14.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Nearly half with degrees', p: 'At 48.6%, the share of residents with a bachelor degree or higher was well above the state\'s 27.8%.' },
            { h3: 'University students', p: 'Of people in education, 22.4% were at university or another higher education provider.' },
            { h3: 'An older profile', p: 'A median age of 43, with 2.8 people in an average household and 2,151 families.' }
          ]
        },
        {
          kind: 'p',
          text: 'Numbers here are for the suburb and locality. The bureau perturbs small counts to protect privacy, so its published parts are never summed on this page.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The month that moved back by one',
      intro: 'The data has one row per station, month and direction, stamped with a time such as 2026-03-01 00:00:00 and no time zone. The agent\'s helper tool attached Sydney time, converted to UTC and grouped by month.',
      body: [
        {
          kind: 'table',
          caption: 'Pennant Hills station entries: what the data says and what the tool reported (our Python run)',
          head: ['Question', 'Correct answer', 'Tool after UTC conversion'],
          rows: [
            ['Busiest month', 'March 2026, 65,719 entries', 'February 2026, 65,719'],
            ['Quietest month', 'January 2025, 26,935 entries', 'December 2024, 26,935'],
            ['Entries in March 2026', '65,719', '53,599 (the April figure)'],
            ['First month in the file', 'October 2024', 'September 2024'],
            ['Last month in the file', 'August 2026', 'July 2026']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Why it happens: Sydney midnight in UTC',
          head: ['Month stamp (Sydney)', 'UTC offset that day', 'Same instant in UTC'],
          rows: [
            ['1 March 2026, 00:00', '+11 hours', '28 February 2026, 13:00'],
            ['1 July 2025, 00:00', '+10 hours', '30 June 2025, 14:00'],
            ['1 October 2024, 00:00', '+10 hours', '30 September 2024, 14:00']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Naive datetimes',
              p: 'A datetime with no zone attached is naive. Grouping naive month stamps by month gives the right answer, because nothing moves them.'
            },
            {
              h3: 'Aware datetimes',
              p: 'Attaching Australia/Sydney makes them aware, which is correct. The error is the next step, converting to UTC before grouping, which shifted all 23 month stamps in the file.'
            },
            {
              h3: 'Two offsets',
              p: 'Month starts from November to April fall in daylight saving at +11 hours; May to October at +10. A tool that assumed a fixed offset would be wrong in a different way.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The fix the agent needed',
          p: 'Group by the local month first and convert only when an instant is truly needed. Formatting the stamp with <code>strftime("%Y-%m")</code> while it is still in Sydney time keeps March as March; calling <code>astimezone(timezone.utc)</code> first sends it to February.'
        },
        {
          kind: 'p',
          text: 'Entry counts are from Transport for NSW\'s monthly station figures; the conversions, averages and rankings are our own calculation.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Checking the agent',
      h2: 'Pennant Hills against its neighbours',
      intro: 'With the months fixed, learners compare stations on the same line using only stations with all 23 months present.',
      body: [
        {
          kind: 'table',
          caption: 'Average monthly entries, October 2024 to August 2026 (our calculation)',
          head: ['Station', 'Average entries a month', 'Note'],
          rows: [
            ['Pennant Hills', '44,111', '107th of 270 train stations with complete data'],
            ['Thornleigh', '38,127', 'Next station towards Hornsby'],
            ['Beecroft', '31,103', 'Next station towards Epping']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Make a Scratch clock that shows Sydney and India time side by side and changes when daylight saving starts.' },
            { h3: 'Teenagers', p: 'Write the station tool twice, naive and aware, and a test that fails if March ever becomes February.' },
            { h3: 'Adults', p: 'Audit an agent workflow for every place a date crosses a time zone, and decide where conversion belongs.' }
          ]
        },
        { kind: 'p', text: 'Transport for NSW publishes the station figures under a Creative Commons licence and has no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and the school year',
      h2: 'Two state schools, both in Hornsby council',
      intro: 'The NSW school locations file lists two government schools with a Pennant Hills address.',
      body: [
        {
          kind: 'table',
          caption: 'Government schools with a Pennant Hills address',
          head: ['School', 'Level', 'First teacher'],
          rows: [
            ['Pennant Hills Public School', 'Primary', '1925'],
            ['Pennant Hills High School', 'Secondary', '1966']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Summer 2026 to 2027', p: 'Eastern division holidays run from Friday 18 December 2026 to Wednesday 27 January 2027.' },
            { h3: 'Term 1 2027', p: 'The first term of 2027 ends on Friday 9 April, before the autumn break.' },
            { h3: 'Our classes', p: 'Pennant Hills groups rest during state holidays and return on their normal day.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Scratch clocks to agent tools',
    intro: 'Age bands are rough; the first lesson finds the right starting point.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch with AI help',
        p: 'Timers, clocks and games designed in words, then tested by playing.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'scratch-programming-complete-course']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'First Python',
        p: 'Variables, loops and the first dates and times.',
        courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Data and agents',
        p: 'datetime, files and small agent tools that answer from real data.',
        courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course']
      },
      {
        band: 'University and adult',
        h3: 'Reliable agents',
        p: 'Agent workflows with tests on every tool they call.',
        courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'The agent was fluent and one month out',
    intro: 'Nothing in its answer hinted at a problem.',
    p1: 'The agent quoted a real number, 65,719, and a plausible month. It had called its tool correctly; the tool itself moved every month back by one. Reading the reply gives no clue. Only someone who opens the tool and checks one month against the source would find it.',
    p2: 'That habit, testing a known answer before trusting the rest, is what we teach alongside vibe coding. Pennant Hills learners write the March check first and the agent second.',
    closer: 'In 2026 agents call tools for us; Pennant Hills learners who can read those tools decide which answers to believe.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Pennant Hills learners at home',
    intro: 'Every class is a live video session, held from the learner\'s own desk in Pennant Hills.',
    cells: [
      { h3: 'Teacher beside the code', p: 'Each step, including what the AI suggested, is talked through as the learner types.' },
      { h3: 'Aligned with NSW', p: 'Stage and year language and the state school calendar are built into planning.' },
      { h3: 'No-cost opening class', p: 'Try one complete lesson free and get a recommended course and time.' },
      { h3: 'Level-matched groups', p: 'Between five and ten learners of similar ability, or one-to-one on request.' },
      { h3: 'A steady rhythm', p: 'Two sessions every week, around eight a month, with any pauses notified early.' },
      { h3: 'Teachers in India', p: 'A 4:30pm Pennant Hills lesson is 11am India time during Sydney summer time and noon otherwise.' }
    ],
    spec: {
      title: 'Time zones, again',
      p: 'Sydney daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027, while India keeps one time all year, so the two are 5 hours 30 minutes apart in summer and 4 hours 30 minutes the rest of the year. Our timetable is always written in Sydney time.'
    }
  },
  fees: {
    h2: 'Pennant Hills lesson fees',
    intro: 'One flat fee applies to every course we teach.',
    first: 'The first lesson costs nothing and finishes with a suggested course and slot.',
    group: 'A group place: two lessons weekly, about eight a month, five to ten learners at one level.',
    private: 'One-to-one lessons at the same pace of about eight a month.',
    closer: 'Pennant Hills fees are paid in US dollars, starting only after the trial has fixed a course and a time. Holidays, missed lessons and format changes are explained on the pricing page.'
  },
  reviewsH2: 'Reviews left on Google',
  book: {
    h2: 'Ask for a free first lesson',
    intro: 'Send the learner\'s age and an interest. A young child might build a Scratch clock; a teenager or adult might write the station tool and its March test.',
    success: 'Thank you. We will be in touch soon about a Pennant Hills class.'
  },
  faq: {
    h2: 'Pennant Hills vibe coding and AI agent questions',
    intro: 'Common questions from Pennant Hills families.',
    items: [
      {
        q: 'How many people live in Pennant Hills?',
        a: 'The 2021 Census QuickStats for the Pennant Hills suburb and locality counted 7,588 residents, median age 43, in 2,151 families and 2,876 private dwellings.'
      },
      {
        q: 'What is the difference between naive and aware datetimes?',
        a: 'A naive datetime has no time zone; an aware one carries its zone and UTC offset. Python treats them differently, and converting an aware time to another zone can move it to a different day or month.'
      },
      {
        q: 'Which month was busiest at Pennant Hills station?',
        a: 'In the Transport for NSW monthly figures from October 2024 to August 2026, March 2026 had the most entries, 65,719. A tool that converts the month stamps to UTC reports it as February.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Describing what a program should do and letting an AI assistant write much of the code. In our classes the learner then tests and explains every part, so mistakes like the shifted month are caught.'
      },
      {
        q: 'Which state schools are in Pennant Hills?',
        a: 'The NSW Department of Education lists Pennant Hills Public School, first teacher 1925, and Pennant Hills High School, 1966, both in Hornsby council.'
      },
      { q: 'What age can my child start?', a: 'From six with Scratch and AI-assisted games. Agent projects with Python suit learners from about 13.' },
      {
        q: 'What does a learner need at home?',
        a: 'A computer with a keyboard and an up-to-date browser, a headset or speakers and microphone, and a stable connection.'
      },
      {
        q: 'Do you run classes in Pennant Hills itself?',
        a: 'No. We teach only online and have no premises anywhere in Australia, including Pennant Hills. Our contact phone number is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do Pennant Hills lessons cost?',
        a: 'The first lesson is free. A group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one is USD 150 a month on the same plan. Nothing is charged before a course and time are agreed.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Five to ten learners, grouped by level and goals rather than age. If no group fits the learner\'s schedule, one-to-one lessons are offered instead.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Nearby guides',
    h2: 'More for Pennant Hills learners',
    html: 'Hornsby, further up the line, has its own guide at <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hornsby-sydney">online coding and Python classes in Hornsby</a>, with nearby suburbs at <a class="cg-inline-link" href="/ai-and-programming-classes-in-cherrybrook-sydney">AI and programming classes in Cherrybrook</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-epping-sydney">vibe coding and AI agents classes in Epping</a>. The city guide is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Pennant Hills and the upper north',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-hornsby-sydney', label: 'Hornsby' },
    { href: '/ai-and-programming-classes-in-cherrybrook-sydney', label: 'Cherrybrook' },
    { href: '/vibe-coding-and-ai-agents-classes-in-epping-sydney', label: 'Epping' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' }
  ],
  personalityCss: `
.cg-root.cg-pnhl .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 2.8vw, 2.4rem); }
.cg-root.cg-pnhl .cg-hero h1 { font-weight: 680; letter-spacing: -0.02em; line-height: 1.09; }
.cg-root.cg-pnhl .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1rem; }
.cg-root.cg-pnhl .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-pnhl .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-pnhl .cg-grid-3 { gap: clamp(0.85rem, 1.9vw, 1.45rem); }
.cg-root.cg-pnhl .cg-table caption { font-weight: 700; text-align: left; padding-bottom: 0.55rem; }
.cg-root.cg-pnhl .cg-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-pnhl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-pnhl .cg-callout { border-left-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Pennant Hills, ABS Census 2021 QuickStats, Pennant Hills (NSW) suburb and locality SAL13194 (read 10 October 2026): 7,588 people; median age 43; 2,151 families; 2,876 private dwellings; average 2.8 people per household; bachelor degree or higher 48.6% (3,055); professionals 38.5% (1,431); university or other higher education 22.4% (528); aged 10 to 14 6.8% (514); flats 14.9% (389). ABS ASGS 2021 SAL area 6.1227 square kilometres. NSW Department of Education master dataset: Pennant Hills Public School (1925), Pennant Hills High School (1966), Hornsby council. NSW 2026 to 2027 Eastern division: summer holidays Friday 18 December 2026 to Wednesday 27 January 2027; Term 1 2027 ends Friday 9 April.',
    localProject: 'Naive vs aware datetimes on Transport for NSW monthly station entries (Opal, CC BY), Oct 2024 to Aug 2026, Pennant Hills station (ours): busiest March 2026 65,719, quietest January 2025 26,935; Sydney month stamps converted to UTC move all 23 months back one (busiest reported as February 2026; March query returns 53,599, the April figure); offsets +11 November to April, +10 May to October; average 44,111 a month, 107th of 270 train stations with all 23 months; Thornleigh 38,127, Beecroft 31,103.',
    requiredMentions: ['7,588', '2,876', '65,719', '53,599', '26,935', '44,111', 'Pennant Hills Public School', '6.12 square kilometres', '107th of 270'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Pennant Hills (NSW) suburb and locality (SAL13194): people, median age, families, dwellings, qualifications, occupation, education, age, dwelling structure.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13194'
      },
      {
        claim: 'Transport for NSW, Train station entries and exits, monthly Opal data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'Python documentation, datetime: aware and naive objects; astimezone.',
        url: 'https://docs.python.org/3/library/datetime.html#aware-and-naive-objects'
      },
      { claim: 'Python documentation, zoneinfo: IANA time zone support (Australia/Sydney).', url: 'https://docs.python.org/3/library/zoneinfo.html' },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations (Creative Commons Attribution); names, suburbs, councils and first-teacher dates only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates and holidays, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' }
    ],
    rejectedClaims: [
      'Any reason why March 2026 was the busiest month or January 2025 the quietest: not known from the data, so none is given.',
      'Journey to work and working at home figures from the 2021 Census: excluded because the Census was taken during a lockdown period.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the school dataset: excluded by the cluster rules.',
      'Any total built by adding published Census parts or the monthly station figures of other stations.',
      'Any affiliation with the ABS, Transport for NSW, Hornsby Shire Council or the NSW Department of Education.'
    ]
  }
};
