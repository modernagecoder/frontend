'use strict';
// Box Hill, Melbourne (cg- district page, Australia cluster Phase 8, row 244). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL20314, Box Hill (Vic.), City of Whitehorse) under
// Melbourne and Victoria.
// Spine: the station-entries file has three weekday columns (Pax_weekday, Pax_norm_weekday, Pax_sch_hol_weekday);
// an agent tool that picks a column by matching the word "weekday" answers half of our questions with the wrong one.
// Data: Department of Transport and Planning annual metropolitan station entries FY24-25 (CC BY 4.0, rounded to 50).
// Box Hill: annual 2,648,350 (10th of 222 stations listed), Pax_weekday 8,350, Pax_norm_weekday 8,650,
// Pax_sch_hol_weekday 7,100, Saturday 5,350, Sunday 4,100. Our scripted test (scratchpad au/b6/bxhl.py), 8 questions:
// keyword tool 4 right, 4 wrong; tool with column descriptions 7 right, 1 clarifying question, 0 wrong.
// Implied share of school-holiday weekdays (norm-weekday)/(norm-holiday): Box Hill 19.4% (16.1% to 22.6% within
// rounding); median 21.4% over 49 stations with a gap of at least 500.
// Lesson family: column disambiguation for an agent tool; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BOX HILL',
    label: 'Box Hill, Melbourne',
    blurb: 'Vibe coding and AI agents classes for Box Hill, with a project on how an agent picks the wrong column from three that all say weekday.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-box-hill-melbourne',
  code: 'bxhl',
  accent: '#9E3862',
  accentRationale: 'Box Hill: a muted raspberry rose (hue 336), chosen by hand at least 10 RGB units from all 1,278 accent declarations in content, the shared stylesheets and the claims log, 6.6:1 on white and 5.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Box Hill',
    eyebrow: 'Box Hill, City of Whitehorse, Melbourne, Victoria',
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
  routeLabel: 'Box Hill, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in Box Hill, Melbourne',
  description: 'Live online vibe coding and AI agents classes for Box Hill teenagers and adults, plus coding for children, teaching how to build, test and check AI tools.',
  ogDescription: 'AI agents classes for Box Hill, with a project on three weekday columns: an agent that matches the word weekday answered 4 of our 8 questions with the wrong one.',
  twitterDescription: 'Box Hill vibe coding and AI agents classes, live online, first class free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Box Hill',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for learners in Box Hill, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Box Hill',
  capsuleQ: 'What do Box Hill learners gain from classes in vibe coding and AI agents?',
  capsule: 'They learn to describe a program to an AI, then test what comes back and fix it, so the agent does what was asked rather than what was guessed. Box Hill is young and apartment-heavy: the 2021 Census counted 14,353 residents with a median age of 33, and 53.1% of homes were flats or apartments.',
  lead: 'Victoria\'s station-entry file gives every station three different weekday figures. An AI agent asked "how busy is Box Hill on a school-term weekday?" has to choose between columns called Pax_weekday, Pax_norm_weekday and Pax_sch_hol_weekday. Match on the word "weekday" alone and it picks the first one every time, which is right for some questions and wrong for others.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Box Hill.',
  picks: {
    eyebrow: 'Course picks for Box Hill',
    h2: 'Courses for building agents you can check',
    intro: 'Each course here teaches the testing habit behind the weekday project. A free first class decides where each learner starts, and any Copilot Studio work happens in private lessons.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Describe a program to an AI, then test and repair the result line by line.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'The Python needed to write a tool an agent can call, and the tests to check it.'
      },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Agent tools, data lookups and automation for work, with checks at each step.'
      },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Reading data dictionaries and choosing the right column before analysing anything.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Box Hill in the Census',
      h2: 'Young residents, apartments and the train',
      intro: 'Figures for the Box Hill suburb (ABS code SAL20314, named Box Hill (Vic.) by the bureau) from the 2021 Census QuickStats, with the Victorian figures alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Box Hill, 2021 Census headline counts',
          head: ['Headline', 'Box Hill'],
          rows: [
            ['Residents', '14,353'],
            ['Median age', '33'],
            ['Families', '3,422'],
            ['Private dwellings', '7,777'],
            ['Average people per household', '2.2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Box Hill beside Victoria',
          head: ['Measure', 'Box Hill', 'Victoria'],
          rows: [
            ['Homes that are flats or apartments', '53.1% (3,168)', '12.1%'],
            ['Workers who took the train to work', '6.7% (464)', '1.6%'],
            ['Workers who drove to work', '33.9% (2,348)', '49.9%'],
            ['Adults with a bachelor degree or higher', '39.9% (5,173)', '29.2%'],
            ['Workers employed as professionals', '30.1% (2,088)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Twenties', p: 'The Census counted 1,899 residents aged 20 to 24 and 2,111 aged 25 to 29, the two largest age groups in the suburb.' },
            { h3: 'Students', p: 'Of residents attending an educational institution, 1,701, 32.2%, were at university or another higher education provider.' },
            { h3: 'Census day', p: 'During the August 2021 lockdown, 1,839 employed residents, 26.5%, worked from home that day.' }
          ]
        },
        {
          kind: 'p',
          text: 'Privacy adjustments mean QuickStats cells need not add up to their totals, so we quote each number as published and never build totals from parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Three columns called weekday: which one does the agent pick?',
      intro: 'We wrote eight plain-English questions about Box Hill station and two small lookup tools an agent could call. One picks a column by keyword; the other reads a short description of every column and asks when two descriptions both fit.',
      body: [
        {
          kind: 'table',
          caption: 'Box Hill station, FY24-25 daily averages (Department of Transport and Planning, rounded to 50)',
          head: ['Column in the file', 'What it measures', 'Box Hill'],
          rows: [
            ['Pax_weekday', 'Average weekday across the whole year', '8,350'],
            ['Pax_norm_weekday', 'Average school-term weekday', '8,650'],
            ['Pax_sch_hol_weekday', 'Average school-holiday weekday', '7,100'],
            ['Pax_Saturday', 'Average Saturday', '5,350'],
            ['Pax_Sunday', 'Average Sunday', '4,100']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Our two tools on eight questions (our own scripted test)',
          head: ['Tool', 'Right', 'Asked to clarify', 'Wrong'],
          rows: [
            ['Matches the word "weekday" or "Saturday"', '4', '0', '4'],
            ['Reads a one-line description of each column', '7', '1', '0']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The quiet error',
              p: 'Asked about a school-term weekday, the keyword tool returned 8,350 instead of 8,650. Asked about the holidays, it returned 8,350 instead of 7,100.'
            },
            {
              h3: 'The honest pause',
              p: 'For "an average weekday across the whole year", two descriptions matched, so the second tool asked which was meant instead of guessing.'
            },
            { h3: 'Why weekdays differ', p: 'The all-year average sits between the term and holiday figures, because it mixes both kinds of weekday together.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'A number hidden in three columns',
          p: 'If the all-year figure is a blend, the blend tells us how many weekdays were holidays. For Box Hill, (8,650 minus 8,350) divided by (8,650 minus 7,100) gives 19.4%. Rounding to 50 widens that to anywhere from 16.1% to 22.6%; across the 49 stations where term and holiday weekdays differ by at least 500, the middle value is 21.4%.'
        },
        {
          kind: 'p',
          text: 'The eight questions, both tools and the scores are ours, so they show what happened in our test rather than how any real assistant behaves. The station figures are the publisher\'s, quoted as published.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The agent behind it',
      h2: 'Give the tool a data dictionary, not a guess',
      intro: 'Agents call tools with a short text request. How the tool turns that text into a column decides whether the answer is right.',
      body: [
        {
          kind: 'table',
          caption: 'Two designs for the same lookup tool',
          head: ['Design', 'How it chooses a column', 'Weak point'],
          rows: [
            [
              'Keyword match',
              'First column whose name contains a word from the question',
              'Every weekday question lands on Pax_weekday'
            ],
            [
              'Described columns',
              'Matches the question against a one-line description of each column',
              'Needs someone to write good descriptions'
            ],
            [
              'Described columns plus a check',
              'Asks a follow-up when more than one description fits',
              'One extra turn in the conversation'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'The same idea appears whenever an agent reads a spreadsheet: column names are written for the person who made the file, not for the question being asked. A short description of each column is the cheapest fix there is.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Sort question cards into labelled boxes, then find a card that fits two boxes and decide what to ask.' },
            { h3: 'Secondary students', p: 'Write both tools in Python, add the eight questions as tests and make the failing ones pass.' },
            { h3: 'Adults', p: 'Write descriptions for a real work spreadsheet before letting an assistant answer questions from it.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Box Hill',
      h2: 'A big interchange in a small suburb',
      intro: 'More from the station and school files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Tenth busiest', p: 'With 2,648,350 entries in FY24-25, Box Hill ranked tenth among the 222 metropolitan stations listed.' },
            { h3: 'Small area', p: 'The bureau measures the Box Hill suburb at 3.52 square kilometres; Box Hill North and Box Hill South are separate suburbs.' },
            { h3: 'Term 1, 2027', p: 'Victorian government school students return on Thursday 28 January 2027, and Term 1 ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Which Box Hill',
          p: 'This page is about Box Hill in Melbourne\'s east. New South Wales also has a Box Hill, in The Hills Shire in Sydney, with a high school of the same name and its own figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From labelled boxes to agent tools',
    intro: 'Treat the ages as a rough guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and sorting',
        p: 'Programs that sort and label things, built from blocks.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and data',
        p: 'Reading small tables and asking them careful questions.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding with tests',
        p: 'Building with an AI, then proving each answer is right.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Agents for work',
        p: 'Tools, lookups and automation that explain themselves.',
        courses: ['python-ai-automation-masterclass-college', 'complete-generative-ai-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent can read the file itself, why should a Box Hill learner understand the columns?',
    intro: 'Because the agent will always return a number, and only someone who knows what the columns mean can tell whether it is the right one.',
    p1: 'Our keyword tool never crashed and never said it was unsure. It simply answered four of eight questions from the wrong column, with figures that looked perfectly reasonable. An agent built on top of it would pass that confidence straight on to the person asking.',
    p2: 'A learner who has written the descriptions, run the eight tests and watched the second tool stop to ask a question understands what makes an agent trustworthy. That understanding transfers to every tool an agent calls.',
    closer: 'The Box Hill learner who reads the data dictionary is the one whose agents can be trusted with real questions.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Box Hill lessons, delivered to the screen',
    intro: 'Lessons happen online at home, so a learner in an apartment near the station joins just as one on a quiet side street does.',
    cells: [
      { h3: 'Straight in', p: 'Open the link, share a screen and build with the teacher from the first minute.' },
      { h3: 'Term-time plans', p: 'Plans follow the Victorian school terms and stop for the state school holidays.' },
      { h3: 'Trial in full', p: 'The free class runs like any normal lesson, and afterwards we propose a starting course and a weekly slot.' },
      { h3: 'Five to ten', p: 'Each group holds fifteen to twenty learners at one level, drawn from many suburbs.' },
      { h3: 'Weekly rhythm', p: 'Two set lessons a week, around eight a month, with any pauses agreed beforehand.' },
      {
        h3: 'India-based teachers',
        p: 'Our teachers work from India, so a Box Hill class at 5pm in summer is 11:30am for them, moving to 12:30pm when Melbourne leaves daylight saving.'
      }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Melbourne clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India does not change its clocks. We always state lesson times in Melbourne time.'
    }
  },
  fees: {
    h2: 'Box Hill class fees',
    intro: 'Three amounts, stated plainly.',
    first: 'The first lesson is free and closes with a straight recommendation.',
    group: 'A month of group lessons, normally eight, with fifteen to twenty learners at a matching level.',
    private: 'About eight lessons a month, one teacher with one learner.',
    closer: 'Outside India we bill in US dollars, so every Box Hill family pays the same rate. Billing starts only once the trial has fixed a course and time; holidays, absences and switching format are explained on the pricing page.'
  },
  reviewsH2: 'What Google reviewers say about learning with us',
  book: {
    h2: 'Book a first Box Hill class',
    intro: 'Send the learner\'s age and something they enjoy. A ten-year-old might start with a sorting game in Scratch; a university student might start by writing the agent\'s lookup tool.',
    success: 'Thank you. Our team will contact you soon about a Box Hill class.'
  },
  faq: {
    h2: 'Box Hill vibe coding and AI agents questions',
    intro: 'What Box Hill learners and parents ask before they start.',
    items: [
      { q: 'How many people live in Box Hill?', a: 'The 2021 Census QuickStats for the Box Hill suburb record 14,353 residents with a median age of 33.' },
      {
        q: 'What is an AI agent tool?',
        a: 'It is a small function an AI agent can call to fetch or change something, such as looking up a number in a file. The agent decides when to call it; the tool decides how the request becomes an answer.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Describing what a program should do in plain words, letting an AI draft the code, then testing and correcting it. Our lessons put most of the time into the testing and correcting.'
      },
      {
        q: 'What did the Box Hill weekday project show?',
        a: 'In our test of eight questions, a tool that matched the word weekday answered four with the wrong column. A tool that read a description of each column got seven right and asked a clarifying question on the eighth.'
      },
      {
        q: 'Are agent classes suitable for children?',
        a: 'Children from six start with Scratch and simple AI activities. Building agents comes later, usually in the teenage years, once Python is comfortable.'
      },
      {
        q: 'Is Microsoft Copilot Studio part of the group course?',
        a: 'It is not. We cover Copilot Studio only in private lessons, while group classes build their agents in Python.'
      },
      {
        q: 'Do you have an office in Box Hill?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number shown is an Indian number.',
        boiler: true
      },
      {
        q: 'How much are classes for Box Hill learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many learners are in each group?',
        a: 'Between five and ten, grouped by level, pace and goals. One-to-one lessons are available when no group suits the learner\'s time.',
        boiler: true
      },
      {
        q: 'Can adults join AI agents classes?',
        a: 'Yes. Adult learners have their own groups, or private lessons, and many arrive with a job they hope an agent could take off their hands.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Box Hill learners',
    html: 'In the neighbouring City of Manningham, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-doncaster-melbourne">Doncaster</a> has a page of its own, and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-glen-waverley-melbourne">Glen Waverley</a> covers the City of Monash. The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Box Hill and Melbourne',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-doncaster-melbourne', label: 'Doncaster' },
    { href: '/best-coding-and-ai-classes-in-glen-waverley-melbourne', label: 'Glen Waverley' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-bxhl .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.4vw, 2.7rem); }
.cg-root.cg-bxhl .cg-hero h1 { font-weight: 690; letter-spacing: -0.014em; line-height: 1.1; }
.cg-root.cg-bxhl .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.25rem; }
.cg-root.cg-bxhl .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-bxhl .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.01em; }
.cg-root.cg-bxhl .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.8rem); }
.cg-root.cg-bxhl .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bxhl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bxhl .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-bxhl .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Box Hill, ABS Census 2021 QuickStats, Box Hill (Vic.) suburb SAL20314 (read 10 October 2026): 14,353 people; median age 33; 3,422 families; 7,777 private dwellings; 2.2 people per household; 1.1 motor vehicles per dwelling; professionals 30.1% (2,088; Victoria 25.0%); flats 53.1% (3,168; Victoria 12.1%); train to work 6.7% (464); drove 33.9% (2,348; Victoria 49.9%); bachelor degree or higher 39.9% (5,173); aged 20-24 1,899; aged 25-29 2,111; university or other higher education 1,701 (32.2% of those attending); worked at home 26.5% (1,839, lockdown Census day). ABS SAL area 3.52 square kilometres. Box Hill station inside the boundary. Victorian School Locations 2025: 3 schools inside the boundary (1 primary, 2 secondary), including Box Hill High School. Victorian 2027 Term 1: students start Thursday 28 January, ends Thursday 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Column disambiguation for an agent tool. FY24-25 annual metropolitan station entries, Box Hill: Pax_annual 2,648,350 (rank 10 of 222 rows), Pax_weekday 8,350, Pax_norm_weekday 8,650, Pax_sch_hol_weekday 7,100, Pax_Saturday 5,350, Pax_Sunday 4,100. 8 scripted questions (term weekday, all-year average weekday, holiday weekday, Saturday, Sunday, whole year, term time, schools closed). Keyword tool (first column whose last name part appears in the question): 4 right, 4 wrong (all four returned Pax_weekday). Described-column tool: 7 right, 1 clarifying question (all-year average weekday matched two descriptions), 0 wrong. Implied school-holiday share of weekdays (norm - weekday)/(norm - holiday): Box Hill 19.4%, 16.1% to 22.6% across +/-25 rounding; median 21.4% (16.7% to 30.0%) over 49 stations with norm - holiday >= 500. 178 stations have Pax_weekday different from Pax_norm_weekday. Script: scratchpad au/b6/bxhl.py.',
    requiredMentions: ['14,353', '3,422', '7,777', '1,701', '1,839', '1,899', '2,648,350', 'Pax_norm_weekday', '3.52 square kilometres'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Box Hill (Vic.) suburb (SAL20314).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20314' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20314 area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
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
      'How any commercial AI assistant would answer the weekday questions: not tested; the scores are for our own two scripted tools.',
      'The exact number of school-holiday weekdays in FY24-25: not claimed; the implied share is our estimate, widened by the publisher\'s rounding to 50.',
      'A reason why Richmond and a few other stations show a higher all-year weekday than term weekday: not claimed.',
      'A total for Box Hill, Box Hill North and Box Hill South: not computed; published parts are never summed.',
      'Catholic or independent school names and any sector breakdown: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Whitehorse, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
