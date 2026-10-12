'use strict';
// City of Monash, Melbourne (cg- district page, Australia cluster Phase 8, row 256). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page (ABS LGA24970, Monash) under Melbourne and Victoria.
// Glen Waverley and Clayton have suburb pages; this page uses council-wide figures and does not repeat theirs.
// Spine: a verifier step that recomputes every number in an agent's answer from the source file. 8 stations inside
// the LGA polygon (FY24-25 entries). 26 scripted questions (entries 8, busiest 1, growth 8, rounded 8, name match 1);
// a sloppy agent with five planted habits answers 18 wrongly; an exact verifier flags all 18; a 5% tolerance flags
// only 8. Wrong-base growth rounds to the right answer for 4 stations. Script: scratchpad au/b7/mnsh.py.
// Lesson family: verifier recomputation; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MONASH',
    label: 'City of Monash, Melbourne',
    blurb: 'Vibe coding and AI agents classes for the City of Monash, with a project where a verifier rechecks every number an agent gives.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-monash-melbourne',
  code: 'mnsh',
  accent: '#444891',
  accentRationale: 'Monash: a quiet indigo (hue 237), picked by search at least 10 RGB units from all 1,485 accent declarations in content, the shared stylesheets and the claims log; 6.6:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'City of Monash',
    eyebrow: 'City of Monash, Melbourne, Victoria',
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
  routeLabel: 'City of Monash, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in Monash, Melbourne',
  description: 'Live online vibe coding and AI agents classes for City of Monash teenagers and adults, plus coding for children, with projects that check each answer an agent gives.',
  ogDescription: 'AI agents classes for the City of Monash: our test agent got 18 of 26 station questions wrong. An exact verifier caught all 18; a 5% tolerance caught only 8.',
  twitterDescription: 'City of Monash vibe coding and AI agents classes, live online, first class free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for the City of Monash',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for learners in the City of Monash, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in the City of Monash',
  capsuleQ: 'What do vibe coding and AI agents classes teach City of Monash learners?',
  capsule: 'How to build with an AI and then prove its answers right, step by step, before anyone relies on them. The City of Monash suits careful builders: the 2021 Census counted 190,397 residents, and 66,197 adults, 41.2%, had a university degree, well above the 29.2% statewide.',
  lead: 'An agent asked about the City of Monash\'s eight train stations will answer every question confidently. Some answers will be right, some will come from last year\'s file, and some will be rounded so far that they stop being true. The fix is not a better agent but a second step that throws the agent\'s numbers away and works each one out again from the source.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in the City of Monash.',
  picks: {
    eyebrow: 'Course picks for the City of Monash',
    h2: 'Courses for agents with a checker built in',
    intro: 'Every course below teaches learners to check an AI\'s output, the skill behind the verifier project. The free first class fixes where to start, and any Copilot Studio work happens one to one.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Build with an AI, then write the checks that prove the result.'
      },
      { course: 'teens-ai-tools-mastery-course', band: 'Ages 13 to 17', note: 'Using AI tools well, including spotting confident wrong answers.' },
      {
        course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
        band: 'University and adult',
        note: 'Full projects built with AI help, reviewed and tested line by line.'
      },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Automations that verify their own numbers before reporting them.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The City of Monash in the Census',
      h2: 'A large, well-educated council area',
      intro: 'Figures for the City of Monash local government area (ABS code LGA24970) from the 2021 Census QuickStats, set beside Victoria. Suburbs within it, such as Glen Waverley and Clayton, have pages of their own.',
      body: [
        {
          kind: 'table',
          caption: 'City of Monash, 2021 Census headline counts',
          head: ['Headline', 'City of Monash'],
          rows: [
            ['Residents', '190,397'],
            ['Median age', '38'],
            ['Families', '50,528'],
            ['Private dwellings', '76,177'],
            ['Average people per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'City of Monash compared with Victoria',
          head: ['Measure', 'City of Monash', 'Victoria'],
          rows: [
            ['Adults with a bachelor degree or higher', '41.2% (66,197)', '29.2%'],
            ['Workers employed as professionals', '32.0% (29,473)', '25.0%'],
            ['Workers who took the train', '2.6% (2,375)', '1.6%'],
            ['Workers who took the bus', '1.2% (1,102)', '0.6%'],
            ['Flats or apartments', '15.2% (10,187)', '12.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Area', p: 'The bureau measures the council area at 81.48 square kilometres in Melbourne\'s south-east.' },
            { h3: 'Teenagers', p: 'The Census counted 11,078 residents aged 15 to 19, 5.8% of the population, a touch above the Victorian 5.6%.' },
            { h3: 'Lockdown caveat', p: 'Census day fell in the August 2021 lockdown, when 29,062 employed residents, 31.6%, worked from home.' }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats adjusts small cells for privacy, which means the parts of a table may not reach its total. We quote figures as published and do not add council parts together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'An agent, 26 questions and a verifier',
      intro: 'We placed every metropolitan station on the council boundary map and found eight inside. We then wrote 26 questions about them and a deliberately sloppy test agent with five planted habits. A verifier recalculated each answer from the FY24-25 station file.',
      body: [
        {
          kind: 'table',
          caption: 'Stations inside the City of Monash, FY24-25 entries (Department of Transport and Planning, rounded to 50)',
          head: ['Station', 'Entries'],
          rows: [
            ['Oakleigh', '1,624,200'],
            ['Huntingdale', '1,590,050'],
            ['Clayton', '1,514,000'],
            ['Syndal', '698,100'],
            ['Mount Waverley', '658,250'],
            ['Hughesdale', '555,350'],
            ['Jordanville', '388,950'],
            ['Glen Waverley', 'In the file; covered on its own page']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What the verifier caught (our scripted test)',
          head: ['Question type', 'Asked', 'Agent wrong', 'Exact check flagged', '5% tolerance flagged'],
          rows: [
            ['Entries for a station', '8', '4', '4', '2'],
            ['Busiest station', '1', '1', '1', '1'],
            ['Growth on the year before', '8', '4', '4', '2'],
            ['Entries, rounded by the agent', '8', '8', '8', '2'],
            ['Find a station by name', '1', '1', '1', '1']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Busiest',
              p: 'The agent named the first station in alphabetical order, Clayton. Recomputed from the file, the busiest is Oakleigh with 1,624,200 entries.'
            },
            { h3: 'Rounding', p: 'Rounded to the nearest 100,000, Hughesdale became 600,000 against a true 555,350, 8.0% out. Syndal\'s 700,000 was only 0.3% out.' },
            {
              h3: 'The name trap',
              p: 'Asked about "Waverley station", the agent matched part of a name and answered for Glen Waverley. No station is called just Waverley.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The strict check beat the lenient one',
          p: 'Allowing 5% of slack sounds reasonable, but it let 10 of the 18 wrong answers through, including a growth figure built on the wrong year. Exact comparison against the source caught all 18. There is a limit, though: for four stations the agent\'s wrong growth formula still rounded to the right one-decimal answer, so a verifier that checks answers cannot catch a broken method. Test the method separately.'
        },
        {
          kind: 'p',
          text: 'The agent, its habits, the 26 questions and the verifier are ours, so the counts describe our test, not any commercial assistant. Station figures are the department\'s published estimates.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The agent behind it',
      h2: 'Generate, then recompute',
      intro: 'A verifier is a second step in an agent\'s loop. It ignores how the first answer was produced and recalculates it from the source.',
      body: [
        {
          kind: 'table',
          caption: 'The five planted habits and how a verifier sees them',
          head: ['Habit', 'Effect', 'Caught by recomputation?'],
          rows: [
            ['Reads the previous year\'s file', 'Entries off by up to 12.5%', 'Yes'],
            ['Takes the first row instead of sorting', 'Wrong busiest station', 'Yes'],
            ['Divides growth by the new year', 'Small errors, sometimes none after rounding', 'Only when the rounded answer changes'],
            ['Rounds to the nearest 100,000', 'Errors from 0.3% to 8.0%', 'Yes, with an exact check'],
            ['Matches part of a name', 'Answers about the wrong station', 'Yes']
          ]
        },
        {
          kind: 'p',
          text: 'In code the verifier is short: for each claim in the answer, look up the same figure in the file, compare, and reject the answer if anything differs. The hard part is deciding what counts as different, which is why we tested both exact and 5% rules.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Check a partner\'s sums with a calculator and mark which ones were close but wrong.' },
            { h3: 'Secondary students', p: 'Write the sloppy agent and the verifier in Python, then add a sixth habit and see if it is caught.' },
            { h3: 'Adults', p: 'Add a recompute step to any report an assistant drafts from a spreadsheet before it is sent.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the City of Monash',
      h2: 'Schools, stations and the school year',
      intro: 'More from the state files for the whole council area.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Schools',
              p: 'The 2025 school locations file puts 54 open schools inside the council boundary: 34 primary, 13 secondary, 2 combined and 5 specialist.'
            },
            { h3: 'By sector', p: 'Of those 54 schools, 37 are government, 13 Catholic and 4 independent.' },
            { h3: 'Quietest station', p: 'Jordanville had the fewest entries of the council\'s stations in FY24-25, 388,950.' }
          ]
        },
        {
          kind: 'spec',
          title: 'School terms, 2027',
          p: 'Victorian government school students return on Thursday 28 January 2027. Term 2 runs from Monday 12 April to Friday 25 June.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From checking sums to verifying agents',
    intro: 'Treat each band loosely; a trial lesson shows where a learner really sits.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and checking',
        p: 'Games that keep score and test whether the score is right.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI literacy',
        p: 'First programs, and learning that an AI can be confidently wrong.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Vibe coding with proof',
        p: 'Building with AI and writing the tests that hold it to account.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Reliable agents',
        p: 'Agents and automations that check their figures before sharing them.',
        courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If agents keep improving, why should a City of Monash learner build a verifier?',
    intro: 'Because a better agent makes fewer mistakes, not none, and the remaining ones look exactly like right answers.',
    p1: 'Our test agent never refused a question and never hedged. Its rounded figures were plausible, its wrong-year entries were real numbers from a real file, and its name match found a real station. Reading the answers, nothing looked off.',
    p2: 'A learner who has written a verifier knows the uncomfortable result: the lenient check felt sensible and missed most of the errors. That learner will ask what checks an agent\'s work before trusting it, which is the question every team using agents needs someone to ask.',
    closer: 'The City of Monash learner who builds the checker is the one whose agents can be relied on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How City of Monash learners attend',
    intro: 'Every lesson is live online, so learners anywhere in the council area join from home.',
    cells: [
      { h3: 'Shared screen', p: 'The learner opens a link, shares a screen and the teacher reads the code as it is written.' },
      { h3: 'Victorian terms', p: 'Plans follow the Victorian school year and break for the state school holidays.' },
      { h3: 'Free trial', p: 'The first lesson is a full class at no cost, followed by a suggested course and time.' },
      { h3: 'Group of five to ten', p: 'Learners are grouped by level and pace, from many parts of Australia.' },
      { h3: 'Routine', p: 'Two lessons every week, roughly eight a month, with planned breaks agreed early.' },
      {
        h3: 'Teachers in India',
        p: 'Our teachers are in India: a 4:30pm lesson in Melbourne\'s summer is 11am India time, and noon once daylight saving ends.'
      }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Melbourne clocks went forward on Sunday 4 October 2026 and go back on Sunday 4 April 2027. India keeps the same time all year, so every lesson time we give is Melbourne time.'
    }
  },
  fees: {
    h2: 'City of Monash class fees',
    intro: 'Three amounts, given in full.',
    first: 'The opening lesson is free, followed by a candid recommendation.',
    group: 'A month of group lessons, typically eight, with five to ten learners at a matched level.',
    private: 'About eight lessons a month taught one to one.',
    closer: 'Families outside India pay in US dollars, the same rate wherever they live. Invoices start once the trial has chosen a course and a slot; holidays, absences and format changes are explained on the pricing page.'
  },
  reviewsH2: 'Reviews from families on Google',
  book: {
    h2: 'Book a free City of Monash class',
    intro: 'Message us with an age and a favourite hobby. A nine-year-old might start by checking a Scratch game\'s scoring; a Year 11 student might start by writing the station verifier.',
    success: 'Thank you. Our team will contact you shortly about a class for your City of Monash learner.'
  },
  faq: {
    h2: 'City of Monash vibe coding and AI agents questions',
    intro: 'Questions City of Monash parents and adult learners raise most.',
    items: [
      {
        q: 'How many people live in the City of Monash?',
        a: 'The 2021 Census QuickStats for the City of Monash record 190,397 residents in 50,528 families, with a median age of 38.'
      },
      {
        q: 'What is a verifier in an AI agent?',
        a: 'A step that takes the agent\'s answer and checks it independently, usually by recomputing each figure from the source, before the answer is accepted.'
      },
      {
        q: 'Why not let the agent check its own work?',
        a: 'Because it tends to repeat the same mistake. A verifier that ignores the agent\'s method and recalculates from the data catches errors the agent cannot see.'
      },
      {
        q: 'What did the City of Monash verifier project find?',
        a: 'Our test agent got 18 of 26 station questions wrong. An exact verifier flagged all 18; one allowing 5% slack flagged only 8.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Building software by describing it to an AI in plain words, then testing and fixing what it writes. We spend most lesson time on the testing.'
      },
      { q: 'Is Microsoft Copilot Studio taught in groups?', a: 'No. Our groups build agents in Python; Copilot Studio is reserved for one-to-one teaching.' },
      {
        q: 'Is there a centre in the City of Monash?',
        a: 'No. We teach only live online, have no Australian premises, and the phone number shown here is an Indian number.',
        boiler: true
      },
      {
        q: 'What do classes cost for City of Monash learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many learners per group?',
        a: 'Five to ten, grouped by level, pace and goals; private lessons are available if no group time fits.',
        boiler: true
      },
      {
        q: 'Do you teach adults to build agents?',
        a: 'Yes. Adults learn in adult groups or one to one, often with a reporting job in mind that they want an agent to do accurately.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for City of Monash learners',
    html: 'Within the council area, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-glen-waverley-melbourne">Glen Waverley</a> has a suburb page of its own. Younger children can begin with <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding in Melbourne</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'City of Monash and Melbourne',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-glen-waverley-melbourne', label: 'Glen Waverley' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-mnsh .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3vw, 2.4rem); }
.cg-root.cg-mnsh .cg-hero h1 { font-weight: 650; letter-spacing: -0.012em; line-height: 1.1; }
.cg-root.cg-mnsh .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); padding: 0.6rem 1.1rem; }
.cg-root.cg-mnsh .cg-eyebrow { letter-spacing: 0.11em; font-weight: 720; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-mnsh .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.007em; }
.cg-root.cg-mnsh .cg-grid-3 { gap: clamp(0.9rem, 2.6vw, 2rem); }
.cg-root.cg-mnsh .cg-table caption { font-weight: 640; text-align: left; font-size: 0.97rem; }
.cg-root.cg-mnsh .cg-table td { font-variant-numeric: tabular-nums oldstyle-nums; }
.cg-root.cg-mnsh .cg-ladder-col { border-top: 1px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-mnsh .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'City of Monash, ABS Census 2021 QuickStats, Monash (C) local government area LGA24970 (read 10 October 2026): 190,397 people; median age 38; 50,528 families; 76,177 private dwellings; 2.7 people per household; bachelor degree or higher 41.2% (66,197; Victoria 29.2%); professionals 32.0% (29,473; Victoria 25.0%); train to work 2.6% (2,375; Victoria 1.6%); bus 1.2% (1,102; Victoria 0.6%); flat or apartment 15.2% (10,187; Victoria 12.1%); aged 15-19 5.8% (11,078; Victoria 5.6%); worked at home 31.6% (29,062, lockdown Census day). ABS LGA area 81.4829 square kilometres. Eight metropolitan stations inside the boundary: Oakleigh 1,624,200, Huntingdale 1,590,050, Clayton 1,514,000, Syndal 698,100, Mount Waverley 658,250, Hughesdale 555,350, Jordanville 388,950, Glen Waverley (FY24-25). Victorian School Locations 2025: 54 open schools inside the boundary (Primary 34, Secondary 13, Pri/Sec 2, Special 5; Government 37, Catholic 13, Independent 4). Victorian 2027: students start Thursday 28 January; Term 2 Monday 12 April to Friday 25 June. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Verifier recomputation. FY23-24 and FY24-25 station-entry files, 8 stations inside LGA24970. 26 scripted questions: entries 8, busiest 1, growth on previous year 8, entries (agent rounds) 8, name match "Waverley" 1. Sloppy agent habits: previous-year file for every second station alphabetically; first row as busiest (Clayton, truth Oakleigh 1,624,200); growth divided by new year; rounding to nearest 100,000; substring name match (Glen Waverley; no station named Waverley). Wrong answers 18 (entries 4, busiest 1, growth 4, rounded 8, match 1). Exact verifier flags 18; 5% relative tolerance flags 8 (entries 2, busiest 1, growth 2, rounded 2, match 1). Rounding errors 0.3% (Syndal) to 8.0% (Hughesdale 600,000 vs 555,350). Wrong-base growth equals true one-decimal growth for Clayton, Hughesdale, Jordanville and Mount Waverley. Script: scratchpad au/b7/mnsh.py.',
    requiredMentions: ['190,397', '50,528', '76,177', '66,197', '1,624,200', '1,590,050', '555,350', 'Jordanville', '81.48 square kilometres', '29,062'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Monash (C) local government area (LGA24970).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA24970'
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
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (LGA24970 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
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
      'How any commercial AI assistant would answer these questions: not tested; the agent and its habits are ours.',
      'Glen Waverley and Clayton suburb figures: not repeated; they have their own pages.',
      'School names: not used on this council page; counted only.',
      'A total of entries across the eight stations: not computed; published parts are never summed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Monash City Council, Monash University, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
