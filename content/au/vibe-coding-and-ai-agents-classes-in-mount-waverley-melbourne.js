'use strict';
// Mount Waverley, Melbourne (cg- district page, Australia cluster Phase 8, row 276). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL21816, Mount Waverley, City of Monash) under Melbourne
// and Victoria. The Monash council page carries council-wide figures; this page uses suburb figures only.
// Spine: checkpoint and resume for a long-running agent job. 1,555 station-year rows of the metropolitan patronage
// file (FY18-19 to FY24-25) processed one task at a time by a scripted job; after each task a random interruption with
// chance p. 100 seeds per setting (our simulation). p=0.001: never checkpoint 3,440 tasks run on average, 1,884.9
// duplicate rows if results are appended; checkpoint every 100: 1,626 / 71.4; every 10: 1,562 / 7.5; every task:
// 1,555 / 0. p=0.002: never 12,303 / 10,747.5; every 100 1,727 / 171.8; every 10 1,570 / 14.9; every task 1,555 / 0.
// Script: scratchpad au/b10/mtwv.py.
// Lesson family: checkpoint and resume; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MOUNT WAVERLEY',
    label: 'Mount Waverley, Melbourne',
    blurb: 'Vibe coding and AI agents classes for Mount Waverley, with a project on making a long agent job survive being interrupted.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-mount-waverley-melbourne',
  code: 'mtwv',
  accent: '#3A4764',
  accentRationale: 'Mount Waverley: a dusk slate blue (hue 221), picked by a full search of the muted range: 26.0 RGB units from every Victorian page accent, 13.0 from every other Australian accent and 8.1 from every other colour in content, the stylesheets and the claims logs; 7.52:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Mount Waverley',
    eyebrow: 'Mount Waverley, City of Monash, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Mount Waverley, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in Mount Waverley, Melbourne',
  description: 'Live online vibe coding and AI agents classes for Mount Waverley teenagers and adults, plus coding for children, with projects that make agent jobs safe to restart.',
  ogDescription: 'AI agents classes for Mount Waverley: in our simulation a job with no checkpoint ran 12,303 tasks to finish 1,555. Saving progress after each task cut that to 1,555.',
  twitterDescription: 'Mount Waverley vibe coding and AI agents classes, live online, first class free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Mount Waverley',
    description: 'Level-matched online lessons in vibe coding, AI agents, automation and Python for learners in Mount Waverley, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Mount Waverley',
  capsuleQ: 'What does an AI agents class teach Mount Waverley learners?',
  capsule: 'How to set an AI agent working on a long job and make sure it can stop and carry on without repeating itself. Mount Waverley households lean towards this kind of work: on Census day 2021, 35.6% of employed residents worked from home, well above the state.',
  lead: 'An AI agent asked to work through every row of a big file will, sooner or later, be stopped halfway: a laptop lid closes, a network drops, a usage limit is hit. What happens next depends on one design choice made at the start. Either the job remembers how far it got, or it starts again from row one and quietly writes some results twice.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Mount Waverley.',
  picks: {
    eyebrow: 'Course picks for Mount Waverley',
    h2: 'Courses for agents that finish the job',
    intro: 'These courses all build programs that run for a while on their own, the setting for the checkpoint project. The free first class settles the starting level.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Projects built with an AI partner, then made reliable by hand.'
      },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Getting real work out of AI tools, including long multi-step tasks.' },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Scripts and automations that save progress and recover cleanly.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents on real repositories, with reviews and restarts built in.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Mount Waverley in the Census',
      h2: 'Houses, units and a home office',
      intro: 'Figures for the Mount Waverley suburb (ABS code SAL21816) from the 2021 Census QuickStats, next to Victoria. The City of Monash page covers the wider council area.',
      body: [
        {
          kind: 'table',
          caption: 'Mount Waverley suburb, 2021 Census headline counts',
          head: ['Headline', 'Mount Waverley'],
          rows: [
            ['Residents', '35,340'],
            ['Median age', '40'],
            ['Families', '9,879'],
            ['Private dwellings', '13,873'],
            ['Average people per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Mount Waverley beside Victoria',
          head: ['Measure', 'Mount Waverley', 'Victoria'],
          rows: [
            ['Separate houses', '68.6% (8,561)', '73.4%'],
            ['Flats or apartments', '21.5% (2,681)', '12.1%'],
            ['Workers who drove to work', '42.6% (7,256)', '49.9%'],
            ['Workers who took the train', '2.6% (436)', '1.6%'],
            ['Employed residents who worked at home', '35.6% (6,055)', '25.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'More apartments', p: 'Just over a fifth of Mount Waverley homes were flats or apartments, nearly double the Victorian share.' },
            { h3: 'Area', p: 'The bureau puts the suburb at 15.18 square kilometres, within the City of Monash.' },
            {
              h3: 'Read with care',
              p: 'The 2021 Census was held during a Victorian lockdown, so the work-from-home share describes that August week rather than a normal one.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats applies small random changes to each cell for confidentiality, so a column of parts may miss its own total. We print figures exactly as released and never add them up ourselves.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A long agent job, interrupted on purpose',
      intro: 'The state station patronage file has 1,555 station-year rows from FY18-19 to FY24-25. We wrote a scripted job that handles one row per task, the way an agent works through a list, and after every task gave it a small random chance of being cut off. Each setting ran 100 times with different random seeds. This is our simulation, not a measurement of any real agent.',
      body: [
        {
          kind: 'table',
          caption: 'Average tasks run to finish 1,555, and duplicate rows if results are appended (our simulation, 100 runs each)',
          head: ['Progress saved', 'Chance 0.1% per task', 'Chance 0.2% per task'],
          rows: [
            ['Never', '3,440 tasks, 1,884.9 duplicates', '12,303 tasks, 10,747.5 duplicates'],
            ['Every 100 tasks', '1,626 tasks, 71.4 duplicates', '1,727 tasks, 171.8 duplicates'],
            ['Every 10 tasks', '1,562 tasks, 7.5 duplicates', '1,570 tasks, 14.9 duplicates'],
            ['After every task', '1,555 tasks, 0 duplicates', '1,555 tasks, 0 duplicates']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Restarting from zero',
              p: 'Doubling the interruption chance from 0.1% to 0.2% more than tripled the work for a job with no checkpoint, from 3,440 tasks to 12,303.'
            },
            {
              h3: 'Small gaps, small waste',
              p: 'Saving every 10 tasks kept the extra work under 1% at both rates, because each interruption costs at most the tasks since the last save.'
            },
            {
              h3: 'The quiet damage',
              p: 'Duplicates do not crash anything. They sit in the output and inflate any total taken from it, which is the harder failure to spot.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The fix that is not a checkpoint',
          p: 'Writing each result under its own key, one row per station and year, makes a repeat harmless: the second write replaces the first. With keyed writes, even a job that restarts from zero ends with exactly 1,555 rows. It still wastes the time, which is what the checkpoint saves.'
        },
        {
          kind: 'p',
          text: 'The 1,555 rows come from the published patronage file; the job, the interruptions and every average above come from our own script. Real agents fail in less tidy ways, so the numbers show the shape of the problem rather than a forecast.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The pattern',
      h2: 'Save the place, then make repeats harmless',
      intro: 'A checkpoint is a small file that records the last task finished. On start, the job reads it and skips ahead. The order of the two writes matters: save the result first, then move the bookmark.',
      body: [
        {
          kind: 'table',
          caption: 'Three habits for a job that can be stopped at any time',
          head: ['Habit', 'What it prevents', 'Cost'],
          rows: [
            ['Checkpoint after each task', 'Redoing finished work after a stop', 'One small file write per task'],
            ['Keyed or upsert writes', 'Duplicate rows when a task does run twice', 'A unique key for every result'],
            ['Result before bookmark', 'A bookmark that points past a lost result', 'Nothing; it is only an order']
          ]
        },
        {
          kind: 'p',
          text: 'If the bookmark moves before the result is safely written, an interruption between the two silently loses a row. If the result is written first, the worst case is one task done twice, and keyed writes absorb that. Agent frameworks, data pipelines and long model training runs all use versions of the same idea.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Save points in a Scratch game: what has to be remembered so a player can carry on?' },
            { h3: 'Teenagers', p: 'Write a Python job over the station file, pull the plug mid-run, and make it resume cleanly.' },
            { h3: 'Adults', p: 'Add checkpoints and keyed writes to an agent workflow that runs overnight on work data.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Mount Waverley',
      h2: 'Two stations on the Glen Waverley line',
      intro: 'From the station entry file and the 2025 school locations file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Mount Waverley station', p: 'Entries reached 658,250 in FY24-25, 60th of 222 metropolitan stations, against 820,100 in FY18-19.' },
            { h3: 'Jordanville station', p: 'Jordanville, also inside the suburb boundary, recorded 388,950 entries, down from 498,850 six years earlier.' },
            {
              h3: 'Schools',
              p: 'The file places 10 open schools in the suburb, seven of them government, including Pinewood Primary School and Mount Waverley Secondary College.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 3, 2027',
          p: 'Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From save points to agents that resume',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch games',
        p: 'Games with levels and save points, built and debugged in blocks.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python first steps',
        p: 'Files, loops and a first program that reads and writes data.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Vibe coding and agents',
        p: 'Building with an AI, then making the result dependable.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Agents at work',
        p: 'Automation and coding agents that run for hours and recover.',
        courses: ['python-ai-automation-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and AI',
    h2: 'If an agent writes the loop, who decides where it saves its place?',
    intro: 'The person who asked for the loop, because the agent will rarely add a checkpoint unless told to.',
    p1: 'Ask an AI to process a file row by row and it will usually produce a clean, correct loop that works perfectly when nothing goes wrong. It is the first interruption that exposes the missing bookmark, and by then the output may already hold thousands of repeated rows.',
    p2: 'A learner who has watched 1,555 tasks swell to 12,303 knows to ask for a checkpoint, keyed writes and the right order of saves before the job ever starts. That is the difference between vibe coding something and owning it.',
    closer: 'The Mount Waverley learner who plans for interruption is the one whose agent can be trusted to run unattended.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for Mount Waverley',
    intro: 'Classes take place over video, so learners join from home with nothing to travel to.',
    cells: [
      { h3: 'Coding together', p: 'Learners write on their own machine with the screen shared, and the teacher steps in as the code grows.' },
      { h3: 'Term rhythm', p: 'Courses run in Victorian school terms and pause for the holidays.' },
      { h3: 'A real trial', p: 'The first class is free and complete. At the end the teacher recommends a course and a weekly time.' },
      { h3: 'Matched groups', p: 'Groups hold five to ten learners who are at a similar point.' },
      { h3: 'Regular slots', p: 'Two lessons on fixed days each week, around eight a month, with holidays known ahead.' },
      {
        h3: 'Teachers in India',
        p: 'Teachers are based in India, so a 4:15pm Mount Waverley lesson in daylight saving is 10:45am India time, or 11:45am in Melbourne winter.'
      }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Mount Waverley class fees',
    intro: 'Three prices cover every course.',
    first: 'A free opening lesson that ends with a clear next step.',
    group: 'A month of group lessons, generally eight, in a group of five to ten at one level.',
    private: 'Roughly eight one-to-one lessons a month with the same teacher.',
    closer: 'We bill families outside India in US dollars, so Mount Waverley pays exactly what other overseas families pay. No payment is taken until the trial has fixed the course and the time; the pricing page sets out holidays, missed lessons and changes of format.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free Mount Waverley class',
    intro: 'Share an age and an interest. An eight-year-old might start with a save-point game in Scratch; a Year 10 student might start by building an agent job that can be stopped and resumed.',
    success: 'Thank you. Our team will be in touch shortly about a Mount Waverley class.'
  },
  faq: {
    h2: 'Mount Waverley vibe coding and agents questions',
    intro: 'Questions from Mount Waverley parents, students and working adults.',
    items: [
      {
        q: 'How many people live in Mount Waverley?',
        a: 'The 2021 Census QuickStats for the Mount Waverley suburb record 35,340 residents in 9,879 families, with 13,873 private dwellings and a median age of 40.'
      },
      {
        q: 'What is a checkpoint in a long-running job?',
        a: 'A saved record of how far the job has got, usually the last task completed. When the job restarts, it reads the checkpoint and carries on from there instead of starting over.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Building software by describing what you want to an AI and shaping its code through conversation. Our classes add the part that makes it safe: reading, testing and fixing what the AI wrote.'
      },
      {
        q: 'What did the Mount Waverley checkpoint project show?',
        a: 'With a 0.2% chance of interruption per task, our simulated job ran 12,303 tasks on average to finish 1,555 when it never saved progress, and exactly 1,555 when it saved after every task.'
      },
      {
        q: 'Is building AI agents suitable for teenagers?',
        a: 'Yes, with sensible tools and supervision. Teenagers learn to plan an agent\'s steps, check its output and make it recover from failure, which are habits worth having at any age.'
      },
      { q: 'What do younger Mount Waverley children learn?', a: 'Children from six start with Scratch, building games with levels, scores and save points.' },
      {
        q: 'Where do Mount Waverley classes take place?',
        a: 'Online only. We have no Australian premises, and the phone number on our site is an Indian one.',
        boiler: true
      },
      {
        q: 'What do classes cost for Mount Waverley learners?',
        a: 'The first lesson is free. After it, group classes cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one classes cost USD 150 a month. Course, format and time are agreed before any payment.',
        boiler: true
      },
      { q: 'How large are the groups?', a: 'Five to ten learners grouped on level, pace and goals, or one to one if no group time fits.', boiler: true },
      {
        q: 'Do adults take AI agents classes?',
        a: 'Many do. Working adults join their own groups or learn one to one, often to automate a slow task at work with an agent they can actually rely on.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Mount Waverley learners',
    html: 'The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-monash-melbourne">City of Monash page</a> covers the council area around Mount Waverley, and the <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-glen-waverley-melbourne">Glen Waverley page</a> the suburb next door. For parents of younger children there is a guide to <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding classes in Melbourne</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Mount Waverley and Melbourne',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-monash-melbourne', label: 'City of Monash' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-mtwv .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.6vw, 2.8rem); }
.cg-root.cg-mtwv .cg-hero h1 { font-weight: 660; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-mtwv .cg-capsule { border-left: 5px double var(--cg-accent); padding: 0.55rem 0 0.55rem 1.2rem; }
.cg-root.cg-mtwv .cg-eyebrow { letter-spacing: 0.19em; font-weight: 600; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-mtwv .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.01em; }
.cg-root.cg-mtwv .cg-grid-3 { gap: clamp(0.7rem, 2vw, 1.6rem); }
.cg-root.cg-mtwv .cg-table caption { font-weight: 600; text-align: left; text-transform: none; font-style: italic; }
.cg-root.cg-mtwv .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-mtwv .cg-ladder-col { border-left: 2px dashed var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-mtwv .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Mount Waverley, ABS Census 2021 QuickStats, Mount Waverley suburb SAL21816 (read 11 October 2026): 35,340 people; median age 40; 9,879 families; 13,873 private dwellings; 2.7 people per household; separate house 68.6% (8,561; Victoria 73.4%); flat or apartment 21.5% (2,681; Victoria 12.1%); car as driver 42.6% (7,256; Victoria 49.9%); train 2.6% (436; Victoria 1.6%); worked at home 35.6% (6,055; Victoria 25.7%; lockdown Census). ABS SAL area 15.18 square kilometres, City of Monash. Metropolitan stations inside the boundary: Mount Waverley 658,250 FY24-25 (rank 60 of 222; FY18-19 820,100) and Jordanville 388,950 (FY18-19 498,850). Victorian School Locations 2025: 10 open schools (Government 7, Catholic 2, Independent 1), including Pinewood Primary School and Mount Waverley Secondary College. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Checkpoint and resume for a long-running agent job (our simulation). 1,555 station-year rows of the metropolitan station patronage file FY18-19 to FY24-25, one task each; after each task an interruption with chance p; a restart resumes from the last checkpoint (or from zero when none). 100 seeds per setting. p=0.001: never 3,440 tasks executed on average, 1,884.9 duplicate rows if appended; every 100 1,626 / 71.4; every 10 1,562 / 7.5; every task 1,555 / 0. p=0.002: never 12,303 / 10,747.5; every 100 1,727 / 171.8; every 10 1,570 / 14.9; every task 1,555 / 0. Keyed writes leave exactly 1,555 rows in every setting. Script: scratchpad au/b10/mtwv.py.',
    requiredMentions: ['35,340', '9,879', '13,873', '15.18 square kilometres', '658,250', '820,100', '388,950', '12,303', '3,440', 'Pinewood Primary School'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Mount Waverley suburb (SAL21816).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL21816' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL21816 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'Python documentation, json module (reading and writing a small progress file).', url: 'https://docs.python.org/3/library/json.html' },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Failure rates of any real AI agent or service: not measured; interruption chances are inputs to our simulation.',
      'Wall-clock times: not measured; only tasks executed were counted.',
      'Reasons for the fall in Mount Waverley and Jordanville station entries since FY18-19: not claimed.',
      'Names of Catholic or independent schools: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Monash, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
