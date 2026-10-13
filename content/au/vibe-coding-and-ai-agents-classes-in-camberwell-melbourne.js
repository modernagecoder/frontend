'use strict';
// Camberwell, Melbourne (cg- district page, Australia cluster Phase 8, row 252). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page (ABS SAL20453, Camberwell (Vic.), City of Boroondara) under
// Melbourne and Victoria.
// Spine: temporal grounding for an agent. Today is 10 October 2026 (FY 2026-27); the newest station-entry file is
// FY24-25. 12 scripted date phrases about Camberwell station; a naive resolver (calendar arithmetic from today, no
// check that a file exists) answers 2 of 12 right; a grounded resolver (Australian financial years, anchored to the
// newest file, refuses unpublished years, asks on ambiguous calendar years) answers 12 of 12. Script: au/b7/cmbw.py.
// Camberwell station entries (DTP, CC BY 4.0, rounded to 50): FY18-19 1,969,600; FY19-20 1,496,350; FY20-21 641,150;
// FY21-22 789,300; FY22-23 1,631,400; FY23-24 1,241,500; FY24-25 1,260,400.
// Lesson family: temporal grounding of relative dates; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CAMBERWELL',
    label: 'Camberwell, Melbourne',
    blurb: 'Vibe coding and AI agents classes for Camberwell, with a project on teaching an agent what last financial year means.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-camberwell-melbourne',
  code: 'cmbw',
  accent: '#414E7C',
  accentRationale: 'Camberwell: a slate navy (hue 227), picked by search at least 10 RGB units from all 1,485 accent declarations in content, the shared stylesheets and the claims log; 6.54:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Camberwell',
    eyebrow: 'Camberwell, City of Boroondara, Melbourne, Victoria',
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
  routeLabel: 'Camberwell, Melbourne',
  title: 'Vibe Coding and AI Agents Classes in Camberwell, Melbourne',
  description: 'Live online vibe coding and AI agents classes for Camberwell teenagers and adults, plus coding for children, with projects that test what an agent gets wrong.',
  ogDescription: 'AI agents classes for Camberwell, with a project on dates: a resolver that ignored financial years answered 10 of our 12 questions about the station wrongly.',
  twitterDescription: 'Camberwell vibe coding and AI agents classes, live online, first class free.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Camberwell',
    description: 'Level-matched online lessons in vibe coding, AI agents and Python for learners in Camberwell, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Camberwell',
  capsuleQ: 'What should Camberwell learners expect from vibe coding and AI agents classes?',
  capsule: 'Learners build small programs and agents with an AI, then write tests that catch the agent when it guesses. Camberwell suits it: in the 2021 Census, 52.2% of adults held a bachelor degree or higher, against 29.2% across Victoria, and 7.0% of the 21,965 residents were aged 15 to 19.',
  lead: 'Ask an assistant how many people used Camberwell station "last financial year" and it has to know three things: today\'s date, that Australian financial years end on 30 June, and which years have actually been published. Get any one of them wrong and it either answers about the wrong year or quietly answers nothing at all.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Camberwell.',
  picks: {
    eyebrow: 'Course picks for Camberwell',
    h2: 'Courses for agents that check their facts',
    intro: 'These courses all spend time on the testing habit at the heart of the dates project. The free first class decides the starting point, and Copilot Studio is taught one to one only.',
    items: [
      {
        course: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
        band: 'Ages 13 to 17',
        note: 'Working with coding agents, then reviewing every change they propose.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Describe a program, let the AI draft it, then test and repair it.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'University and adult',
        note: 'Agents for real work, with tests that pin down what correct means.'
      },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Python automation with dates, files and checks at each step.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Camberwell in the Census',
      h2: 'Degrees, teenagers and five stations',
      intro: 'Figures for the Camberwell suburb (ABS code SAL20453, recorded as Camberwell (Vic.)) from the 2021 Census QuickStats, with Victoria alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Camberwell suburb, 2021 Census headline counts',
          head: ['Headline', 'Camberwell'],
          rows: [
            ['Residents', '21,965'],
            ['Median age', '43'],
            ['Families', '5,875'],
            ['Private dwellings', '9,041'],
            ['Average people per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Camberwell compared with Victoria',
          head: ['Measure', 'Camberwell', 'Victoria'],
          rows: [
            ['Adults with a bachelor degree or higher', '52.2% (9,658)', '29.2%'],
            ['Workers employed as professionals', '39.9% (4,399)', '25.0%'],
            ['Residents aged 15 to 19', '7.0% (1,539)', '5.6%'],
            ['Workers who drove to work', '32.6% (3,588)', '49.9%'],
            ['Semi-detached, row or terrace houses and townhouses', '21.7% (1,713)', '13.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Five stations', p: 'The suburb holds five metropolitan stations: Camberwell, East Camberwell, Riversdale, Willison and Hartwell.' },
            { h3: 'Lockdown day', p: 'The Census was taken in the August 2021 lockdown, when 4,840 employed residents, 43.9%, worked from home.' },
            { h3: 'Area', p: 'The bureau puts the suburb at 7.59 square kilometres, inside the City of Boroondara.' }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats perturbs small counts to protect privacy, so the parts of a table need not match its total. We give each figure exactly as published and do not add rows together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'What does an agent mean by last financial year?',
      intro: 'We wrote 12 everyday ways of naming a year, from "FY23" to "the year to June 2024", and two small resolvers that turn each phrase into one of the seven published station files for Camberwell. Today, for the test, is 10 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Camberwell station entries by financial year (Department of Transport and Planning, rounded to 50)',
          head: ['Financial year', 'Entries'],
          rows: [
            ['FY18-19', '1,969,600'],
            ['FY19-20', '1,496,350'],
            ['FY20-21', '641,150'],
            ['FY21-22', '789,300'],
            ['FY22-23', '1,631,400'],
            ['FY23-24', '1,241,500'],
            ['FY24-25', '1,260,400']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Two resolvers on 12 phrases (our own scripted test)',
          head: ['Resolver', 'Right', 'Wrong year', 'No answer, no warning'],
          rows: [
            ['Calendar arithmetic from today', '2', '5', '5'],
            ['Grounded in financial years and the newest file', '12', '0', '0']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Close but wrong',
              p: 'For "the year to June 2024" the naive resolver read FY24-25 and reported 1,260,400. The right file, FY23-24, says 1,241,500: only 1.5% apart, which is why nobody would notice.'
            },
            {
              h3: 'Silent gaps',
              p: 'Asked about "last financial year", the naive resolver looked for FY25-26, found no file and returned nothing. The grounded one said FY25-26 is not published yet and the newest year is FY24-25.'
            },
            {
              h3: 'Asking back',
              p: 'For "last year" and "in 2024" the grounded resolver asked which financial year was meant, because each calendar year straddles two of them.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Where the simple version is fine',
          p: 'When the question already names the year in the file\'s own style, "2023-24", both resolvers answered correctly, and the naive one also got "two financial years ago" right. Plain lookup is enough when the wording matches the file; grounding earns its keep the moment people speak naturally.'
        },
        {
          kind: 'p',
          text: 'The 12 phrases, both resolvers and the scores are ours. They describe our own scripts, not how any particular assistant behaves. Station figures are the publisher\'s estimates, quoted unchanged.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The agent behind it',
      h2: 'Three facts an agent must hold before it touches a date',
      intro: 'Grounding means tying a vague phrase to something the program actually knows. For dates, that is a short list.',
      body: [
        {
          kind: 'table',
          caption: 'What the grounded resolver checks',
          head: ['Fact', 'Value in our test', 'Mistake it prevents'],
          rows: [
            ['Today', '10 October 2026, in FY 2026-27', 'Treating the newest file as this year'],
            [
              'How years are labelled',
              'Australian financial years end 30 June; FY23 means the year to June 2023',
              'Reading FY23 as 2023-24'
            ],
            ['What exists', 'Files from FY18-19 to FY24-25', 'Silently returning nothing for an unpublished year']
          ]
        },
        {
          kind: 'p',
          text: 'The fix is small: hand the agent a tool that lists the available years and a rule for each phrase, and make it say so when a year is missing rather than answering about a different one. Most of the work is writing the 12 test phrases, because that is where the hidden assumptions show up.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Work out together which school term "next holidays" means on different days of the year.' },
            { h3: 'Secondary students', p: 'Write both resolvers in Python, turn the 12 phrases into tests and fix each failure.' },
            { h3: 'Adults', p: 'List the date phrases colleagues actually use in reports and test an assistant against them.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Camberwell',
      h2: 'Stations, schools and the 2027 year',
      intro: 'More from the state station and school files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Smaller stations', p: 'In FY24-25 East Camberwell logged 185,950 entries, Riversdale 144,000, Hartwell 138,050 and Willison 73,100.' },
            {
              h3: 'Schools',
              p: 'The 2025 school file puts five open schools inside the suburb, three government and two Catholic, among them Camberwell High School and Hartwell Primary School.'
            },
            {
              h3: 'Back to school',
              p: 'Victorian government school students begin the 2027 year on Thursday 28 January; Term 3 runs from Monday 12 July to Friday 17 September.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Which Camberwell',
          p: 'This page is about Camberwell in Melbourne\'s inner east. London has a Camberwell too, in the borough of Southwark, with its own figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From calendars to grounded agents',
    intro: 'The ages are approximate; the free first class finds each learner\'s level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and sequences',
        p: 'Programs that count days and follow rules, built from blocks.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'Dates, lists and the first careful questions to an AI.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Agents with tests',
        p: 'Coding agents, prompts and test suites that hold them to account.',
        courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'vibe-coding-for-teens-python-web-ai-projects-course']
      },
      {
        band: 'University and adult',
        h3: 'Agents at work',
        p: 'Automation that states its assumptions and reports what is missing.',
        courses: [
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
          'complete-generative-ai-masterclass-college'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent can look up the figure, why should a Camberwell learner care how it reads a date?',
    intro: 'Because the agent will always produce a number, and only someone who has tested its reading of dates can say whether it is the number for the year that was asked about.',
    p1: 'Our naive resolver never crashed. It answered five questions about the wrong year with figures that looked perfectly sensible, and five more with nothing, without saying anything was missing. A report built on it would read smoothly and be wrong.',
    p2: 'A learner who has written the 12 phrases, watched FY23 turn into the wrong year and added the rule that fixed it carries that habit into every agent they build: ask what the program assumes about today, and test it.',
    closer: 'The Camberwell learner who grounds an agent in the calendar is the one whose answers hold up next year too.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons for Camberwell, held online',
    intro: 'Every class is live on screen, so learners join from home without a trip anywhere.',
    cells: [
      { h3: 'Join and build', p: 'Click the lesson link, share the screen and write code alongside the teacher.' },
      { h3: 'Victorian calendar', p: 'Courses run in the Victorian school terms and break for the state holidays.' },
      { h3: 'A real trial', p: 'The free class is an ordinary lesson; afterwards we recommend a course and a weekly time.' },
      { h3: 'Group size', p: 'Fifteen to twenty learners per group, matched by level rather than suburb.' },
      { h3: 'Two a week', p: 'Two scheduled lessons each week, about eight a month, with any breaks arranged ahead.' },
      {
        h3: 'Teachers in India',
        p: 'Teachers work from India: a 5pm Camberwell lesson in summer is 11:30am India time, then 12:30pm after Melbourne\'s clocks go back.'
      }
    ],
    spec: {
      title: 'Daylight saving dates',
      p: 'Melbourne clocks went forward on Sunday 4 October 2026 and go back on Sunday 4 April 2027, while India stays on one time. Lesson times are always given in Melbourne time.'
    }
  },
  fees: {
    h2: 'Camberwell class fees',
    intro: 'Three amounts, stated up front.',
    first: 'The first lesson costs nothing and finishes with a frank recommendation.',
    group: 'A month of group lessons, normally eight, in a group of fifteen to twenty at one level.',
    private: 'Roughly eight lessons a month with one teacher and one learner.',
    closer: 'Outside India we charge in US dollars, so Camberwell families pay the same as everyone else abroad. Billing begins only after the trial has fixed the course and time; holidays, absences and format changes are covered on the pricing page.'
  },
  reviewsH2: 'What reviewers say about us on Google',
  book: {
    h2: 'Book a free Camberwell class',
    intro: 'Share the learner\'s age and an interest. A nine-year-old might start with a calendar game in Scratch; a Year 12 student might start by testing an agent\'s reading of dates.',
    success: 'Thank you. Our team will contact you soon about a Camberwell class.'
  },
  faq: {
    h2: 'Camberwell vibe coding and AI agents questions',
    intro: 'Common questions from Camberwell parents and adult learners.',
    items: [
      {
        q: 'How many people live in Camberwell?',
        a: 'The 2021 Census QuickStats for the Camberwell suburb record 21,965 residents and 5,875 families, with a median age of 43.'
      },
      {
        q: 'What does grounding mean for an AI agent?',
        a: 'Tying what the agent says to facts it can check, such as today\'s date or the list of files that exist, instead of letting it fill gaps with guesses.'
      },
      {
        q: 'What does FY23 mean in Australia?',
        a: 'The financial year ending 30 June 2023, so July 2022 to June 2023. Our naive resolver read it as 2023-24, one of its five wrong-year answers.'
      },
      {
        q: 'What did the Camberwell dates project find?',
        a: 'On our 12 phrases, a resolver doing plain calendar arithmetic got 2 right; one that knew financial years, today\'s date and the published files got all 12 right, including two where it asked a question back.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Describing a program in ordinary words, letting an AI write a first draft, then testing and fixing it. In our classes the testing takes most of the time.'
      },
      {
        q: 'Is Copilot Studio included in group classes?',
        a: 'No. Microsoft Copilot Studio is taught only in private lessons; group classes build agents in Python.'
      },
      {
        q: 'Do you have a Camberwell classroom?',
        a: 'No. Lessons are only live online, there is no office in Australia, and the phone number we show is Indian.',
        boiler: true
      },
      {
        q: 'What do classes cost for Camberwell learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many learners share a group?',
        a: 'Fifteen to twenty, grouped by level, pace and goals; one-to-one lessons are there when no group time works.',
        boiler: true
      },
      {
        q: 'Can adults join agents classes?',
        a: 'Yes. Adults learn in adult groups or privately, often bringing a reporting task they would like an agent to handle reliably.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Camberwell learners',
    html: 'For younger children, see <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding classes for kids in Melbourne</a>. The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> covers the whole city, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Camberwell and Melbourne',
  footerPlaces: [
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-cmbw .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.3rem); }
.cg-root.cg-cmbw .cg-hero h1 { font-weight: 660; letter-spacing: -0.01em; line-height: 1.12; }
.cg-root.cg-cmbw .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.9rem 1.1rem; border-radius: 4px; }
.cg-root.cg-cmbw .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-cmbw .cg-section-head h2 { max-width: 28ch; }
.cg-root.cg-cmbw .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.9rem); }
.cg-root.cg-cmbw .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-cmbw .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-cmbw .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-cmbw .cg-callout { border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Camberwell, ABS Census 2021 QuickStats, Camberwell (Vic.) suburb SAL20453 (read 10 October 2026): 21,965 people; median age 43; 5,875 families; 9,041 private dwellings; 2.6 people per household; bachelor degree or higher 52.2% (9,658; Victoria 29.2%); professionals 39.9% (4,399; Victoria 25.0%); aged 15-19 7.0% (1,539; Victoria 5.6%); car as driver 32.6% (3,588; Victoria 49.9%); semi-detached, row or terrace house, townhouse 21.7% (1,713; Victoria 13.9%); worked at home 43.9% (4,840, lockdown Census day). ABS SAL area 7.589 square kilometres. Five metropolitan stations inside the boundary: Camberwell, East Camberwell (185,950 FY24-25), Riversdale (144,000), Hartwell (138,050), Willison (73,100). Victorian School Locations 2025: 5 open schools inside the boundary (3 government, 2 Catholic), including Camberwell High School and Hartwell Primary School. Victorian 2027: government school students start Thursday 28 January; Term 3 Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Temporal grounding of relative dates for an agent. Today 10 October 2026, current Australian financial year 2026-27; station-entry files FY18-19 to FY24-25. Camberwell entries: 1,969,600; 1,496,350; 641,150; 789,300; 1,631,400; 1,241,500; 1,260,400. 12 scripted phrases. Naive resolver (calendar year arithmetic from today, no existence check): 2 right (2023-24; two financial years ago), 5 wrong year (the year to June 2024 gave FY24-25 1,260,400 not FY23-24 1,241,500; FY23 gave 2023-24 not 2022-23; the 2019 financial year gave 2019-20 not 2018-19; three financial years before the latest one gave 2023-24 not 2021-22; in 2024 gave 2024-25 without asking), 5 silent no-answer (last financial year looked for FY25-26, this financial year FY26-27, the latest year you have, the year to June 2025, last year). Grounded resolver 12 of 12 (says FY25-26 and FY26-27 not published; asks on last year and in 2024). Script: scratchpad au/b7/cmbw.py.',
    requiredMentions: ['21,965', '5,875', '9,041', '1,260,400', '1,241,500', '1,969,600', 'Hartwell', 'Willison', 'Camberwell High School', '7.59 square kilometres'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Camberwell (Vic.) suburb (SAL20453).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20453' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20453 polygon and area).',
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
      'How any commercial AI assistant resolves these phrases: not tested; the scores are for our two scripted resolvers.',
      'Reasons for the change in Camberwell station entries between FY22-23 and FY23-24: not claimed.',
      'Names of Catholic or independent schools: not used; counted only.',
      'A total across the five Camberwell stations: not computed; published parts are never summed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Boroondara, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
