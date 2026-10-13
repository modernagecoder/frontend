'use strict';
// Banyule, Melbourne (cg- district page, Australia cluster Phase 8, row 272). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page (ABS LGA20660, City of Banyule) under Melbourne and Victoria.
// Spine: an agent fires nine parallel tool calls, one per Banyule station, and pairs answers with stations by arrival
// order. How often do labels go wrong as latency jitter grows, and does keying results by station fix it?
// Data: DTP annual metropolitan station entries FY18-19 and FY24-25 (CC BY 4.0, rounded to 50). Simulation is ours
// (scratchpad au/b9/bnyl2.py, seed 42, 10,000 runs, launches 10 ms apart, 120 ms median latency, lognormal jitter).
// Lesson family: parallel tool calls returning out of order; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BANYULE',
    label: 'Banyule, Melbourne',
    blurb: 'Vibe coding and AI agent classes for Banyule, with a simulation of nine parallel tool calls whose answers come back in the wrong order.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-banyule-melbourne',
  code: 'bnyl',
  accent: '#483878',
  accentRationale: 'Banyule: a muted dusk violet (hue 253.9), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, about 10:1 on white',
  pageType: 'city',
  place: {
    name: 'Banyule',
    eyebrow: 'City of Banyule, Melbourne, Victoria',
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
  routeLabel: 'Banyule, Melbourne',
  title: 'Vibe Coding and AI Agent Classes in Banyule, Melbourne',
  description: 'Live online vibe coding and AI agent classes for Banyule teens and adults, plus Scratch for children, with agents tested on public data, in groups or one to one.',
  ogDescription: 'Banyule AI agent classes, with a simulation: nine parallel tool calls, answers out of order, and a one-line fix that brought errors to zero.',
  twitterDescription: 'Vibe coding and AI agents for Banyule learners, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agent Classes for Banyule',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for teenagers and adults in the City of Banyule, with Scratch for younger children, taught live in English.'
  },
  h1: 'Vibe coding and AI agent classes in Banyule',
  capsuleQ: 'What should Banyule learners know before building AI agents?',
  capsule: 'That agents call tools at the same time, and answers can arrive in any order. Our live online classes teach teenagers and adults to build agents that match every answer to its question, after children learn the basics in Scratch from six. The City of Banyule had 126,236 residents in the 2021 Census.',
  lead: 'Modern AI agents can send several tool calls at once, such as nine lookups for nine stations, and wait for the replies. The replies come back whenever each tool finishes. If the code assumes they return in the order they were sent, a station can quietly inherit another station\'s number. We simulated how often that happens.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Banyule.',
  picks: {
    eyebrow: 'Course picks for Banyule',
    h2: 'Courses for agents that keep their answers straight',
    intro: 'Building the station agent needs Python, a feel for timing and the habit of checking results. These courses cover each; the free trial lesson sets the level.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'AI-drafted projects that learners read, test and fix themselves.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Language models, tool calls and agent loops, built step by step.'
      },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Python automations that run many tasks at once and check every result.'
      },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Using AI tools well, including knowing when their answers need checking.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Banyule in the Census',
      h2: 'A leafy council of family houses',
      intro: 'Key 2021 Census QuickStats figures for the City of Banyule (ABS code LGA20660), with Victoria for comparison.',
      body: [
        {
          kind: 'table',
          caption: 'Banyule in five numbers, Census 2021',
          head: ['Statistic', 'Banyule'],
          rows: [
            ['Residents', '126,236'],
            ['Median age', '40'],
            ['Families', '34,785'],
            ['Private dwellings', '52,966'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Banyule compared with the whole state',
          head: ['Share of', 'Banyule figure', 'Statewide'],
          rows: [
            ['Separate houses', '75.9% (36,197)', '73.4%'],
            ['Flats or apartments', '7.6% (3,636)', '12.1%'],
            ['Adults with a bachelor degree or higher', '37.8% (39,257)', '29.2%'],
            ['Workers employed as professionals', '32.8% (20,961)', '25.0%'],
            ['Workers who drove to work', '42.8% (27,371)', '49.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School-age children', p: 'There were 7,822 residents aged 5 to 9 and 7,559 aged 10 to 14 on Census night.' },
            { h3: 'Working from home', p: 'During the August 2021 lockdown, 33.4% of employed residents, 21,341 people, worked from home.' },
            {
              h3: 'The council area',
              p: 'Banyule covers about 62.5 square kilometres in the ABS boundary, from Ivanhoe along the Yarra to Greensborough and Bundoora.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Census cells are lightly adjusted for privacy by the bureau, so we print figures exactly as released and never add them into totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which answer belongs to which station?',
      intro: 'An agent asks for FY24-25 entries at all nine Banyule stations as nine parallel tool calls, launched 10 milliseconds apart, each taking about 120 milliseconds. The naive code labels replies in arrival order. We ran 10,000 simulated runs at five levels of timing jitter.',
      body: [
        {
          kind: 'table',
          caption: 'Labelling by arrival order (our simulation, 10,000 runs per row)',
          head: ['Latency jitter', 'Runs with any mislabel', 'Wrong labels per run', 'Runs naming the wrong busiest station'],
          rows: [
            ['Very low (0.02)', '1.13%', '0.023', '0.31%'],
            ['Low (0.05)', '68.74%', '1.954', '25.03%'],
            ['Moderate (0.1)', '97.55%', '4.76', '60.78%'],
            ['High (0.25)', '99.98%', '6.868', '83.72%'],
            ['Very high (0.5)', '100%', '7.475', '87.95%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Tiny jitter, rare errors',
              p: 'When every tool takes almost exactly the same time, replies usually return in launch order, so the bug hides in testing.'
            },
            { h3: 'Real jitter, constant errors', p: 'At a jitter of 0.1 nearly every run mislabels something, and six in ten name the wrong busiest station.' },
            { h3: 'The fix', p: 'Carry the station name with each reply and merge results by that key. Across every setting it produced zero errors.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why the busiest station is easy to get wrong',
          p: 'Heidelberg leads Banyule with 822,300 entries in FY24-25, ahead of Ivanhoe at 617,600 and Rosanna at 432,900. Mislabel Heidelberg\'s reply and the agent confidently reports a different station as busiest, a mistake no one notices unless they know the numbers.'
        },
        {
          kind: 'p',
          text: 'The entry counts come from the Department of Transport and Planning, rounded to 50. The launch gap, latency and jitter are modelling choices, not measurements of any real service, and every percentage in the table is the output of our simulation.'
        }
      ]
    },
    {
      id: 'agents',
      tint: 'tint',
      eyebrow: 'Building the agent',
      h2: 'Matching every reply to its request',
      intro: 'Agent platforms give each tool call an identifier for exactly this reason. Learners build the matching themselves before relying on a framework.',
      body: [
        {
          kind: 'table',
          caption: 'Order-safe habits for agents',
          head: ['Habit', 'In code', 'In the Banyule agent'],
          rows: [
            ['Tag every call', 'Send an id or name with the request', 'Each lookup carries its station name'],
            ['Merge by key', 'Build a dictionary, not a list', 'results[station] = entries'],
            ['Check completeness', 'Compare keys sent with keys received', 'Nine stations asked, nine answered'],
            ['Test with jitter', 'Randomise delays in tests', 'Shuffled replies must give the same table']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Write the naive version, add random delays, watch it fail, then fix it with a dictionary.' },
            { h3: 'Adults', p: 'Audit an existing automation for any place that trusts the order of parallel replies.' },
            { h3: 'Younger children', p: 'Play a game where cards are handed back shuffled and each must carry its own name.' }
          ]
        },
        {
          kind: 'p',
          text: 'Station numbers make the bug visible: Greensborough held 51.9% of its FY18-19 entries in FY24-25 and Watsonia 44.1%, while Heidelberg reached 103.9%. Swap two replies and those very different stories swap with them.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Banyule',
      h2: 'Banyule stations and schools',
      intro: 'Pulled together from yearly rail entries, the 2025 school register and the Victorian term dates.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Stations by our count',
              p: 'Our boundary check finds nine Banyule stations, from Darebin, Ivanhoe and Eaglemont in the south through Heidelberg and Rosanna to Greensborough and Montmorency.'
            },
            {
              h3: 'The 2025 school list',
              p: 'In the 2025 list Banyule has 42 schools: 29 primary, 8 secondary, 3 combined and 2 special. Viewbank College, Greensborough Secondary College and Montmorency Secondary College are government secondaries.'
            },
            { h3: 'Term 1, 2027', p: 'State schools in Victoria open Term 1 of 2027 on Thursday 28 January and break up for the holidays on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council-wide figures',
          p: 'Every Census number here covers the whole City of Banyule; Ivanhoe, Heidelberg, Greensborough and the other suburbs also have their own QuickStats.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From named cards to reliable agents',
    intro: 'Use the ages loosely; one free lesson is enough to place someone properly.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and order',
        p: 'Games where messages and sprites must stay matched up.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'First Python and an honest picture of what AI tools do.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding with tests',
        p: 'AI-drafted projects checked with tests, including timing tests.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Agents at work',
        p: 'Tool-calling agents with ids, merges and logs.',
        courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent writes the code, why should a Banyule teenager learn it?',
    intro: 'Because ordering bugs pass every quick test. The naive station agent mislabelled only 1.13% of runs at very low jitter, so a short demo looks perfect.',
    p1: 'An AI assistant asked to "look up all nine stations in parallel" will often collect the replies into a list and zip them with station names. It works on the developer\'s laptop, where every call takes the same time. In use, with real timing, the same code puts the wrong number next to the wrong station most of the time.',
    p2: 'Learners who have watched that table fill with errors know to ask how results are matched. That one question, asked of AI-generated code, prevents a whole class of silent mistakes, and it comes from having built the thing by hand.',
    closer: 'A Banyule learner who checks how an agent matches its answers is ready to let agents do real work.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for Banyule homes',
    intro: 'Lessons are on screen, so Ivanhoe, Macleod and Greensborough learners all join the same way.',
    cells: [
      { h3: 'Building side by side', p: 'Teacher and learner share code and run each experiment together.' },
      { h3: 'Term-time plans', p: 'Lessons follow the Victorian school terms with holiday breaks.' },
      { h3: 'A real first lesson', p: 'The free trial covers proper content and ends with a clear suggestion.' },
      { h3: 'Fifteen to twenty per group', p: 'Groups matched by level and pace, sometimes across several states.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons a week, about eight each month, with planned breaks.' },
      { h3: 'Teachers in India', p: 'In daylight saving a 7pm Banyule lesson begins at 1:30pm India time, and at 2:30pm there after April.' }
    ],
    spec: {
      title: 'Time zones',
      p: 'Melbourne daylight saving starts on Sunday 4 October 2026 and ends on Sunday 4 April 2027; India stays on one time all year. Lesson times are agreed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Banyule class fees',
    intro: 'Three clear prices.',
    first: 'The first lesson costs nothing and ends with an honest suggestion.',
    group: 'One month of group lessons, generally eight, with fifteen to twenty learners at a matched level.',
    private: 'Close to eight lessons a month with one teacher and one learner.',
    closer: 'Anyone paying from outside India pays in US dollars. The bill only starts once the trial is over and both course and timeslot are agreed, with term breaks, missed sessions and format changes described on the pricing page.'
  },
  reviewsH2: 'Family and learner reviews on Google',
  book: {
    h2: 'Book a first Banyule lesson',
    intro: 'Send an age plus one thing the learner loves. Teenagers usually open with the nine-call experiment and its tangled replies; younger children start with a Scratch game in which every message must reach the right sprite.',
    success: 'Thank you. Our team will contact you soon about a Banyule lesson.'
  },
  faq: {
    h2: 'Banyule vibe coding and AI agent questions',
    intro: 'Questions Banyule families and adult learners ask most.',
    items: [
      {
        q: 'How many residents does Banyule have?',
        a: 'The 2021 Census QuickStats record 126,236 residents in the City of Banyule, a median age of 40 and 34,785 families.'
      },
      {
        q: 'What are parallel tool calls?',
        a: 'They are several requests an AI agent sends at the same time, such as nine data lookups, instead of waiting for each one in turn. The replies return whenever each tool finishes, not in the order sent.'
      },
      {
        q: 'What did the Banyule simulation find?',
        a: 'Matching replies by arrival order mislabelled at least one station in 97.55% of runs at moderate jitter. Merging replies by station name gave zero errors at every jitter level.'
      },
      {
        q: 'What is vibe coding?',
        a: 'It is a way of programming where you explain the goal in everyday words, an AI writes a first draft, and you check, run and repair what it produced. Our lessons pair it with ordinary coding so the learner can tell good output from bad.'
      },
      {
        q: 'At what age do Banyule children meet agents?',
        a: 'From six they work in Scratch and talk about what AI can and cannot do; writing a real agent tends to come at thirteen or fourteen, after some Python.'
      },
      {
        q: 'Are Claude-based agent courses open to teenagers?',
        a: 'No. Claude-based courses take adults only, aged 18 or more, and teenage agent builders work with other models.'
      },
      {
        q: 'Is there a centre in Banyule?',
        a: 'No. All lessons are live online, there is no office in Australia, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do classes cost for Banyule learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How large are the groups?',
        a: 'Fifteen to twenty learners, matched by level, pace and goal. If no group fits the learner\'s time, one-to-one lessons are offered.',
        boiler: true
      },
      {
        q: 'Are Copilot Studio agents part of group classes?',
        a: 'No. Copilot Studio sits outside the group timetable and is taught privately; in a Banyule group, every agent is written in Python.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Banyule learners',
    html: 'Nearby, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-darebin-melbourne">Darebin</a> has its own page, and to the east <a class="cg-inline-link" href="/online-coding-and-python-classes-in-doncaster-melbourne">Doncaster</a> does too. The wider city is covered by <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding in Melbourne</a>, and the state by <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">our Victoria guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Banyule and Melbourne',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-darebin-melbourne', label: 'Darebin' },
    { href: '/online-coding-and-python-classes-in-doncaster-melbourne', label: 'Doncaster' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-bnyl .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.6vw, 2.7rem); }
.cg-root.cg-bnyl .cg-hero h1 { font-weight: 600; letter-spacing: -0.015em; line-height: 1.1; }
.cg-root.cg-bnyl .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1rem; }
.cg-root.cg-bnyl .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-bnyl .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.01em; }
.cg-root.cg-bnyl .cg-grid-3 { gap: clamp(0.75rem, 2vw, 1.6rem); }
.cg-root.cg-bnyl .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-bnyl .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-bnyl .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-bnyl .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'City of Banyule, ABS Census 2021 QuickStats, Banyule LGA20660 (read 11 October 2026): 126,236 people; median age 40; 34,785 families; 52,966 private dwellings; 2.5 per household; separate house 75.9% (36,197; Victoria 73.4%); flats 7.6% (3,636); bachelor or higher 37.8% (39,257); professionals 32.8% (20,961); drove 42.8% (27,371); worked at home 33.4% (21,341, lockdown); aged 5-9 7,822; aged 10-14 7,559. ABS area 62.5402 sq km. Victorian School Locations 2025: 42 schools (29 primary, 8 secondary, 3 Pri/Sec, 2 special); Viewbank College, Greensborough SC, Montmorency SC named. 9 stations inside boundary by our point-in-polygon check (Darebin, Ivanhoe, Eaglemont, Heidelberg, Rosanna, Macleod, Watsonia, Greensborough, Montmorency). FY24-25: Heidelberg 822,300, Ivanhoe 617,600, Rosanna 432,900; FY24-25 as share of FY18-19: Heidelberg 103.9%, Greensborough 51.9%, Watsonia 44.1%. Vic 2027 Term 1: 28 January to 25 March. DST 4 Oct 2026 to 4 Apr 2027 (IANA).',
    localProject: 'Parallel tool calls returning out of order. Simulation, seed 42, 10,000 runs per setting; nine calls (one per Banyule station) launched 10 ms apart, latency 120 ms times lognormal jitter sigma. Naive arrival-order labelling: sigma 0.02 -> 1.13% runs with any mislabel, 0.023 wrong per run, 0.31% wrong busiest; 0.05 -> 68.74%, 1.954, 25.03%; 0.1 -> 97.55%, 4.76, 60.78%; 0.25 -> 99.98%, 6.868, 83.72%; 0.5 -> 100%, 7.475, 87.95%. Keyed-by-station merge: 0 errors in every setting. Timing parameters are modelling choices, not measurements of any service. Script: scratchpad au/b9/bnyl2.py.',
    requiredMentions: ['126,236', '34,785', '36,197', '7,822', '97.55%', '822,300', '617,600', 'Viewbank College', 'Eaglemont'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Banyule local government area (LGA20660).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA20660'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) LGA boundary LGA20660, geo.abs.gov.au map service, used for our point-in-boundary checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Python documentation, asyncio.as_completed returns results in completion order, not submission order.',
        url: 'https://docs.python.org/3/library/asyncio-task.html'
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
      'That any real agent platform or API has these latencies: not claimed; timing values are modelling choices.',
      'Any cause for the change in entries at any station: not claimed.',
      'A total of entries across Banyule stations: not computed; published parts are never summed.',
      'Names of special or non-government schools: not used.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Banyule City Council, the Department of Education or the Department of Transport and Planning.'
    ]
  }
};
