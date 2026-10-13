'use strict';
// Wyndham, Melbourne (cg- district page, Australia cluster Phase 8, row 260). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page (ABS LGA27260, City of Wyndham) under Melbourne and Victoria.
// Spine: an agent works through one task per Wyndham government school; what happens to the tasks that fail?
// A dead-letter queue keeps them, separates passing glitches from tasks that can never succeed, and stops the agent
// from reporting a job as done when it is not.
// Data: Victorian School Locations 2025 (49 government schools in Wyndham (C)), DTP FY24-25 metropolitan station
// entries for station coordinates; transient tool failures are SIMULATED (12% per call, seeded) and labelled as such;
// the permanent failure is real geometry (a school more than 10 km from any metropolitan station).
// Script: scratchpad au/b8/wynd.py. Lesson family: dead-letter queue; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WYNDHAM',
    label: 'Wyndham, Melbourne',
    blurb: 'Vibe coding and AI agents classes for the City of Wyndham, with an agent project that keeps its failed tasks in a dead-letter queue.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-wyndham-melbourne',
  code: 'wynd',
  accent: '#304299',
  accentRationale: 'Wyndham: a steady mid blue (hue 230) chosen by hand at least 10 RGB units from 1,456 accent declarations in content, the shared stylesheets and the claims log, 8.9:1 on white and 7.2:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Wyndham',
    eyebrow: 'City of Wyndham, Melbourne, Victoria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Wyndham' },
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
  routeLabel: 'Wyndham, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in Wyndham, Melbourne',
  description: 'Live online vibe coding and AI agent classes for Wyndham learners: Python, prompting and agents that handle their own failures, in small groups or one to one.',
  ogDescription: 'Wyndham AI agent classes with a real project: an agent that works through 49 school lookups and keeps every failed task instead of quietly dropping it.',
  twitterDescription: 'Wyndham vibe coding and AI agents classes, live online, first class free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Wyndham',
    description: 'Level-matched online lessons in vibe coding, Python and AI agents for teenagers and adults in the City of Wyndham, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Wyndham',
  capsuleQ: 'What do vibe coding and AI agents classes teach Wyndham learners?',
  capsule: 'How to describe a program to an AI, check what it builds, and design agents that report honestly when a step fails. Wyndham suits young learners: the 2021 Census counted 292,011 residents with a median age of 32, and 26,833 of them, 9.2%, were aged 5 to 9.',
  lead: 'Ask an agent to do 49 small jobs and some will fail. A loose agent shrugs, skips the failures and announces that it is finished. A careful one parks each failure in a dead-letter queue, retries what might work next time, and hands back a list of what never could. We built both on Wyndham\'s government schools.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Wyndham.',
  picks: {
    eyebrow: 'Course picks for Wyndham',
    h2: 'Courses that lead to agents you can trust',
    intro: 'Each course reaches the ideas in the failed-task project at its own depth, from describing programs to an AI up to building multi-step agents. The free first lesson places the learner.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Describe, generate and test real Python and web projects with AI help.'
      },
      {
        course: 'teens-ai-tools-mastery-course',
        band: 'Ages 13 to 17',
        note: 'Prompting and AI tools for teenagers, from first chats to small automated projects.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Language models, retrieval and agents, including how agents recover from errors.'
      },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Scripts and automations that call tools, log results and handle failure.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Wyndham in the Census',
      h2: 'A large, young council of separate houses',
      intro: 'Council-wide numbers for the City of Wyndham (ABS LGA27260), taken from QuickStats for the 2021 Census and checked on 10 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Wyndham council in six numbers',
          head: ['Count', 'City of Wyndham'],
          rows: [
            ['People counted', '292,011'],
            ['Middle age of residents', '32'],
            ['Family households', '76,145'],
            ['Dwellings (private)', '100,326'],
            ['People in a typical home', '3.1'],
            ['Cars and vans per dwelling', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Wyndham beside Victoria',
          head: ['Measure', 'Wyndham', 'Victoria'],
          rows: [
            ['Stand-alone houses among homes', '88.2% (79,221)', '73.4%'],
            ['Apartments among homes', '2.3% (2,045)', '12.1%'],
            ['Bachelor degree or above (people 15+)', '32.4% (70,611)', '29.2%'],
            ['Professionals among employed people', '21.9% (29,780)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Under fives', p: '26,099 residents, 8.9%, were aged 0 to 4 when the Census was taken.' },
            { h3: 'Ten to fourteen', p: '21,187 residents, 7.3%, were aged 10 to 14, the years many learners first meet Python.' },
            {
              h3: 'An unusual week',
              p: 'The 2021 count happened while Melbourne was locked down; 25.3% of Wyndham workers (34,423) reported working from home that week.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Percentages are rounded by the bureau and small counts are adjusted for privacy. We quote them as published and never add separate bands to make a new figure.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Forty-nine tasks, and the ones that fail',
      intro: 'The task list is real: one job per Wyndham government school in the 2025 locations file, asking for the nearest metropolitan station and its FY24-25 entries. The station tool searches 10 km and gives up beyond that. Passing glitches are not real: we made each tool call fail 12% of the time with a fixed random seed, so the strategies can be compared fairly.',
      body: [
        {
          kind: 'table',
          caption: 'Where the real answers point (our calculation, straight-line distance)',
          head: ['Nearest metropolitan station', 'Schools', 'FY24-25 entries'],
          rows: [
            ['Werribee', '21', '1,049,600'],
            ['Hoppers Crossing', '17', '925,850'],
            ['Williams Landing', '11', '1,389,550']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Three ways to handle failure, seed 42 (simulated glitches)',
          head: ['Strategy', 'Answered', 'Tool calls', 'Silently lost', 'Left for a person'],
          rows: [
            ['Skip failures', '38', '49', '11', '0'],
            ['Retry each task up to 5 times', '48', '63', '1', '0'],
            ['Dead-letter queue, 2 retry passes', '48', '61', '0', '1']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Over 1,000 runs',
              p: 'Skipping answered 42.3 tasks on average and lost 6.7. Retrying in place answered 48.0 using 59.6 calls; the queue answered 47.9 using 57.5 calls.'
            },
            {
              h3: 'The task that cannot work',
              p: 'Little River Primary School is 15.88 km from the nearest metropolitan station by our measure, beyond the tool\'s reach. Retrying it five times wastes five calls.'
            },
            {
              h3: 'What the queue adds',
              p: 'Its last entry is marked permanent with a reason, so the final report says "48 of 49, one needs a different tool" instead of "done".'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The point is honesty, not speed',
          p: 'Retrying in place and the queue answer almost the same number of tasks. The difference is that only the queue tells the person what is still missing and why.'
        },
        {
          kind: 'p',
          text: 'Median distance from a Wyndham government school to its nearest metropolitan station is 3.98 km by our calculation. Regional stations are not in the metropolitan entries file, which is why the tool, built on that file alone, cannot see them.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'How the queue works',
      h2: 'Try once, park the failure, come back later',
      intro: 'A dead-letter queue is a second list. Tasks that fail go there with their error, and the main loop carries on.',
      body: [
        {
          kind: 'table',
          caption: 'The loop, in plain words',
          head: ['Step', 'What the agent does'],
          rows: [
            ['1', 'Run every task once and record the answer or the error.'],
            ['2', 'Put each failed task, with its error, in the dead-letter queue.'],
            ['3', 'Retry the queue a fixed number of times, keeping new failures.'],
            ['4', 'Report answers, and list what is left with each reason.']
          ]
        },
        {
          kind: 'p',
          text: 'The Python is short: a list of failures, a loop with a counter, and an error type that separates "try again later" from "this will never work". Cloud message services such as Amazon SQS offer the same idea as a built-in feature for systems that run all day.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Hand out jobs on cards; any card that cannot be done goes in a box with a note, not the bin.' },
            { h3: 'Secondary students', p: 'Rebuild the three strategies and compare them across many random seeds.' },
            { h3: 'Adults', p: 'Add a queue and a failure report to an automation you already run.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Wyndham',
      h2: 'Wyndham schools and trains',
      intro: 'Counts from the state school locations list and the metropolitan entries file, plus the 2027 calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: '49 government schools',
              p: 'The 2025 file lists 49 government schools in the council: 26 primary, 11 combined primary and secondary, 10 secondary and 2 specific-purpose schools.'
            },
            { h3: 'Three metropolitan stations', p: 'Werribee, Hoppers Crossing and Williams Landing have FY24-25 metropolitan entry figures inside the boundary.' },
            {
              h3: 'When school resumes',
              p: 'In 2027, students at Victorian government schools are back on Thursday 28 January; first term finishes on Thursday 25 March.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Council boundary',
          p: 'Figures use the ABS boundary of the City of Wyndham, about 542.1 square kilometres, which takes in Werribee, Point Cook, Tarneit, Truganina and Little River among others.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From job cards to agents',
    intro: 'Age is a rough guide only. The free first lesson sets the real starting point.',
    cols: [
      {
        band: 'Ages 8 to 12',
        h3: 'Vibe coding basics',
        p: 'Describe a game to an AI, then test and fix what it makes.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 12 to 14',
        h3: 'Python by hand',
        p: 'Loops, lists and error messages, so AI output can be checked.',
        courses: ['python-ai-kids-masterclass', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Agents and tools',
        p: 'Programs that call tools, keep logs and handle failure.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Production habits',
        p: 'Retrieval, agents and automations with queues and reports.',
        courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI agent can do the work, what does a Wyndham learner need to know?',
    intro: 'How to tell when it did not. Agents fail quietly unless someone designs them not to.',
    p1: 'An agent built in a hurry treats an error as the end of a step and moves on. Its final message reads as success because nothing in its loop counts what went wrong. In our run that agent skipped 11 of 49 tasks and still said it had finished.',
    p2: 'A learner who has written the queue by hand asks every agent the same questions: what failed, was it worth retrying, and where is the list? Those questions are how people keep control of systems that act on their behalf.',
    closer: 'For Wyndham learners, the lasting skill is building agents that admit what they could not do.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Wyndham classes, live on screen',
    intro: 'Learners join from home anywhere in the council, from Werribee to Truganina, with no travel.',
    cells: [
      { h3: 'A real teacher', p: 'Every lesson is live, with the learner sharing their screen and running their own code.' },
      { h3: 'Term by term', p: 'Lessons follow the Victorian school terms and break for the state holidays.' },
      { h3: 'Free first class', p: 'One complete lesson at no charge, then advice on course and timing.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners grouped by level and goals, from many places at once.' },
      { h3: 'Steady rhythm', p: 'Two lessons a week, roughly eight a month, so projects keep moving.' },
      { h3: 'Teachers in India', p: 'A 5pm Wyndham lesson is 11:30am India time during Melbourne daylight saving and 12:30pm from April.' }
    ],
    spec: {
      title: 'Times quoted in Melbourne time',
      p: 'Melbourne\'s daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027 and India has no clock change, so every time we send is in Melbourne time.'
    }
  },
  fees: {
    h2: 'Wyndham class fees',
    intro: 'Three plain options.',
    first: 'Lesson one is free and finishes with a recommendation.',
    group: 'A month of group lessons, typically eight, with fifteen to twenty learners at one level.',
    private: 'A month of one-to-one lessons, typically eight, with a dedicated teacher.',
    closer: 'Wyndham families, like every family outside India, pay in US dollars. We take no payment until the trial has settled the course and the time, and the pricing page sets out holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews from parents and students',
  book: {
    h2: 'Book a free Wyndham class',
    intro: 'Send an age and one thing the learner enjoys. A nine-year-old might describe a game for an AI to build; a teenager might start the failed-task agent.',
    success: 'Thank you. We will contact you soon about a Wyndham class.'
  },
  faq: {
    h2: 'Wyndham vibe coding and AI agents questions',
    intro: 'What Wyndham parents and adult learners ask us first.',
    items: [
      { q: 'How many people live in the City of Wyndham?', a: 'The 2021 Census counted 292,011 residents in the council, with a median age of 32.' },
      {
        q: 'What is a dead-letter queue?',
        a: 'A dead-letter queue is a separate list where a program puts tasks that failed, together with the error, so they can be retried or handed to a person instead of being lost.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding means describing what you want in plain language and letting an AI write the code, then testing and correcting it yourself. The testing is the part we teach hardest.'
      },
      {
        q: 'Which Wyndham school was hardest for the agent?',
        a: 'Little River Primary School, about 15.88 km from the nearest metropolitan station by our calculation, beyond the 10 km search of the agent\'s tool.'
      },
      {
        q: 'What age can children start building with AI?',
        a: 'From about eight, with supervision and child-friendly tools. Agents that call tools suit teenagers who can already read Python.'
      },
      { q: 'Can groups learn Copilot Studio?', a: 'Copilot Studio agents are taught one to one only. Group learners build their agents in Python.' },
      {
        q: 'Is there a Wyndham office?',
        a: 'No. Teaching is live online only, there is no Australian office, and the phone number we show is in India.',
        boiler: true
      },
      {
        q: 'How much are classes for Wyndham learners?',
        a: 'The first lesson is free. Group classes are USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty; one-to-one classes are USD 150 a month. Nothing is paid until course and time are agreed.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Fifteen to twenty learners, matched by level, pace and goals rather than age or suburb, with private lessons if no group time fits.',
        boiler: true
      },
      {
        q: 'Do adults take these classes?',
        a: 'Yes. Grown-up learners join adult-only groups or private lessons, and often automate a chore from their own job.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Wyndham learners',
    html: 'See the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> for the whole city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> for the state school system, and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> for the next step.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Wyndham and Melbourne',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids in Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-wynd .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 2.8vw, 2.4rem); }
.cg-root.cg-wynd .cg-hero h1 { font-weight: 660; letter-spacing: -0.02em; line-height: 1.1; }
.cg-root.cg-wynd .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.8rem 0.95rem; }
.cg-root.cg-wynd .cg-eyebrow { letter-spacing: 0.05em; font-weight: 660; font-size: 0.84rem; }
.cg-root.cg-wynd .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.01em; }
.cg-root.cg-wynd .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.8rem); }
.cg-root.cg-wynd .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-wynd .cg-table th { text-transform: none; letter-spacing: 0.01em; }
.cg-root.cg-wynd .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-wynd .cg-callout { border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'City of Wyndham, ABS Census 2021 QuickStats, LGA27260 (read 10 October 2026): 292,011 people; median age 32; 76,145 families; 100,326 private dwellings; 3.1 people per household; 1.9 vehicles per dwelling; aged 0-4 26,099 (8.9%); 5-9 26,833 (9.2%); 10-14 21,187 (7.3%); bachelor or higher 70,611 (32.4%, Victoria 29.2%); professionals 29,780 (21.9%, Victoria 25.0%); worked at home 34,423 (25.3%, lockdown Census day); separate houses 79,221 (88.2%, Victoria 73.4%); flats 2,045 (2.3%, Victoria 12.1%). ABS LGA area 542.09 square kilometres. Victorian School Locations 2025: 49 government schools in Wyndham (C): 26 primary, 11 Pri/Sec, 10 secondary, 2 special. DTP FY24-25 metro station entries inside the LGA polygon: Werribee 1,049,600; Hoppers Crossing 925,850; Williams Landing 1,389,550. Victorian 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Dead-letter queue for an agent. 49 tasks (Wyndham (C) government schools, 2025 locations file); tool returns nearest DTP FY24-25 metro station (haversine) and its entries, within 10 km. Nearest stations: Werribee 21, Hoppers Crossing 17, Williams Landing 11; median distance 3.98 km; maximum 15.88 km (Little River Primary School, only school beyond 10 km: permanent failure). Transient failures SIMULATED at 12% per call (Python random, seeds 0-999; seed 42 shown). Seed 42: skip 38 answered / 49 calls / 11 lost; retry in place up to 5 tries 48 / 63 / 1 lost; DLQ with 2 retry passes 48 / 61 / 0 lost / 1 left (permanent). Means over 1,000 seeds: skip 42.289 answered, 6.711 lost; retry 48.0 answered, 59.564 calls; DLQ 47.896 answered, 57.452 calls, 1.104 left in queue. Script: scratchpad au/b8/wynd.py.',
    requiredMentions: ['292,011', '76,145', '100,326', '26,833', '79,221', '70,611', '15.88 km', 'Little River Primary School', '1,389,550'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Wyndham local government area (LGA27260).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA27260'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council polygons and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Amazon SQS Developer Guide, using dead-letter queues.',
        url: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html'
      },
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
      'That any real station tool or agent fails 12% of the time: the transient failure rate is our simulation, labelled on the page.',
      'That Little River has no public transport: not claimed; only that no metropolitan station in the entries file is within 10 km.',
      'Regional station entry figures for Tarneit or Wyndham Vale: not used on this page.',
      'Catholic or independent school counts and any sector breakdown: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Wyndham or the Victorian Department of Education.'
    ]
  }
};
