'use strict';
// Auburn, Sydney (cg- district page, Australia cluster Phase 8, row 224). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), suburb page under Sydney and New South Wales.
// Auburn suburb (ABS SAL10107), wholly inside Cumberland LGA (4,000-point sample against the ASGS LGA boundary).
// Spine: when should an AI agent stop and ask a person? Confidence-gated escalation, measured on a
// nearest-school lookup from 11 Cumberland railway stations with simulated location noise.
// Data: NSW Spatial Services station points (11 inside Cumberland); NSW Department of Education master
// dataset (CC BY, Date_extracted 2026-10-02), 23 Cumberland Primary and Infants schools (no secondary,
// single-sex or specific-purpose schools used). True nearest school by straight-line distance; Auburn
// Station: Auburn Public School 522 m, runner-up Auburn North Public School 1,003 m (gap 480 m); smallest
// gap Clyde 325 m. Simulation (our calculation): 2,000 noisy lookups per station, Gaussian noise per axis,
// seed 42. Noise 250 m: threshold 0 m wrong 7.56% overall (Auburn 333 of 2,000); 100 m escalates 6.0%,
// wrong 4.55%; 200 m escalates 11.8%, wrong 2.69% (Auburn 422 escalated, 156 wrong); 400 m escalates 24.4%,
// wrong 1.01% (Auburn 823 escalated, 64 wrong). Noise 100 m: threshold 0 wrong 0.22%; 200 m escalates
// 4.5%, wrong 0.01%. Transport for NSW entries August 2026: Auburn 379,198 (highest of the 11),
// Lidcombe 347,831; Auburn peak in the 23 months October 2024, 388,451.
// Lesson family: human-in-the-loop, confidence-gated escalation of an agent's answers; screened 0
// location-page hits.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'AUBURN',
    label: 'Auburn, Sydney',
    blurb: 'Vibe coding and AI agents classes for Auburn, where learners measure when an agent should answer alone and when it should hand the question to a person.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-auburn-sydney',
  code: 'aubn',
  accent: '#521C1C',
  accentRationale: 'Auburn: a muted oxblood (hue 0), at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 13.6:1 on white and 11.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Auburn',
    eyebrow: 'Auburn, Cumberland Council, Sydney',
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
  routeLabel: 'Auburn, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Auburn, Sydney',
  description: 'Live online vibe coding, AI agents and Python classes for Auburn children, teens and adults, with real teachers in small groups or one to one. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Auburn, with a measured project on when an agent should hand a question to a person: 22,000 simulated lookups across 11 Cumberland stations.',
  twitterDescription: 'Auburn vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Auburn',
    description: 'Level-matched online vibe coding, AI agents, human review of agent answers and Python for learners in Auburn, Sydney, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Auburn',
  capsuleQ: 'Which are the best vibe coding and AI agents classes for Auburn learners?',
  capsule: 'Live online classes where learners build with AI and then decide, with evidence, how far to trust it. Auburn is a young suburb: the 2021 Census counted 39,333 residents with a median age of 31, eight years below NSW, and 11.7% aged 20 to 24 against 6.1% statewide. Teaching is in small level-matched groups or one to one, and the first lesson is free.',
  lead: 'An agent that is never allowed to say "I am not sure" will be wrong in silence. In this project an agent answers a simple question, which public primary school is nearest to this railway station, from a location that may be a few hundred metres off. Learners give it a rule: if the two closest schools are nearly tied, hand the question to a person. Then they measure the trade. At Auburn Station, with 250 metres of noise and no rule, the agent named the wrong school 333 times in 2,000 tries. With a 400 metre rule it asked for help 823 times and was wrong 64 times.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Auburn.',
  picks: {
    eyebrow: 'Course picks for Auburn',
    h2: 'Courses for building agents that know their limits',
    intro: 'Each course reaches agent design and checking at its own level. The free trial confirms the fit before anything is paid.',
    items: [
      {
        course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev',
        band: 'Ages 8 to 12',
        note: 'Games planned by the child and built with AI help, with every step tested by hand.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Python and web projects built with an assistant, then checked line by line.'
      },
      {
        course: 'python-ai-automation-masterclass-college',
        band: 'University and adult',
        note: 'Python automation and AI workflows with review steps where a person signs off.'
      },
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        band: 'Adults 18 and over',
        note: 'Coding agents for real software work, including when to stop them and review.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Auburn in the Census',
      h2: 'Young adults and apartments',
      intro: 'Census 2021 QuickStats for the suburb of Auburn against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Auburn, 2021 Census headline counts',
          head: ['Headline', 'Auburn'],
          rows: [
            ['Residents', '39,333'],
            ['Families', '8,583'],
            ['Private dwellings', '12,921'],
            ['People per household', '3.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Auburn against NSW and Australia',
          head: ['Measure', 'Auburn', 'NSW', 'Australia'],
          rows: [
            ['Median age', '31', '39', '38'],
            ['Residents aged 20 to 24', '11.7% (4,606)', '6.1%', '6.2%'],
            ['Flats or apartments among occupied homes', '47.3% (5,189)', '21.7%', '14.2%'],
            ['Separate houses among occupied homes', '42.0% (4,615)', '65.6%', '72.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'One council', p: 'Every one of 4,000 random points inside the suburb boundary fell inside Cumberland Council in the bureau\'s map.' },
            { h3: 'Children too', p: 'The Census counted 2,523 children under five, 6.4% of residents, above the NSW share of 5.8%.' },
            { h3: 'Degrees', p: 'Some 7,803 residents aged 15 and over held a bachelor degree or higher, 24.0% of that group.' }
          ]
        },
        { kind: 'p', text: 'The bureau adjusts small cells to protect privacy, so we quote each published figure as printed and never total the rows.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'When should the agent ask a person?',
      intro: 'The agent finds the nearest primary school to a station from a noisy position. Its confidence is the gap between the closest and second closest school. Below a chosen gap, it escalates.',
      body: [
        {
          kind: 'table',
          caption: 'True nearest schools by straight-line distance (our calculation from published coordinates)',
          head: ['Station', 'Nearest school', 'Second nearest', 'Gap'],
          rows: [
            ['Auburn', 'Auburn Public School, 522 metres', 'Auburn North Public School, 1,003 metres', '480 metres'],
            ['Lidcombe', 'Lidcombe Public School, 360 metres', 'Auburn Public School, 1,570 metres', '1,210 metres'],
            ['Clyde', 'Granville Public School, 1,174 metres', 'Granville East Public School, 1,499 metres', '325 metres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'All 11 Cumberland stations, 250 metres of simulated noise, 22,000 lookups (our calculation)',
          head: ['Escalate when the gap is under', 'Sent to a person', 'Answered wrongly by the agent'],
          rows: [
            ['0 metres (never)', '0%', '7.56%'],
            ['100 metres', '6.0%', '4.55%'],
            ['200 metres', '11.8%', '2.69%'],
            ['400 metres', '24.4%', '1.01%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Auburn Station',
              p: 'With no rule, 333 of 2,000 answers were wrong. A 200 metre rule escalated 422 and left 156 wrong; a 400 metre rule escalated 823 and left 64.'
            },
            {
              h3: 'Less noise',
              p: 'At 100 metres of noise the agent alone was wrong only 0.22% of the time, and a 200 metre rule cut that to 0.01% while escalating 4.5%.'
            },
            {
              h3: 'The hard station',
              p: 'Clyde has the smallest gap, 325 metres, so it is the station where escalation helps most and where an unguarded agent errs most.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The honest limits',
          p: 'The noise is simulated, Gaussian on each axis with a fixed seed, and distances are straight lines, not walking routes. The project measures the shape of a trade-off; it says nothing about school catchments or which school any child attends.'
        },
        {
          kind: 'p',
          text: 'Station points come from NSW Spatial Services and school coordinates from the NSW Department of Education file dated 2 October 2026. Only the 23 primary and infants schools in Cumberland are used. Every rate on this page is our own calculation.'
        }
      ]
    },
    {
      id: 'method',
      tint: 'tint',
      eyebrow: 'Why it matters',
      h2: 'Escalation is a design choice, not a failure',
      intro: 'Every agent that touches real decisions needs a rule for when a person takes over. Setting that rule well is an engineering skill.',
      body: [
        {
          kind: 'table',
          caption: 'The trade a learner must explain',
          head: ['Rule', 'Cost', 'Benefit'],
          rows: [
            ['No escalation', 'Silent mistakes', 'No human time used'],
            ['Low threshold', 'A few questions for people', 'The worst guesses are caught'],
            ['High threshold', 'Many questions for people', 'Very few mistakes left']
          ]
        },
        {
          kind: 'p',
          text: 'Learners write the lookup, add noise, sweep the threshold and plot escalation against error. Then they argue for one setting in writing, as a team would before shipping an agent. The right answer depends on how costly a wrong answer is and how much human time is available, and the code makes both visible.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Play a guessing game where a player may say "ask the teacher" and count how often that saves a wrong answer.' },
            { h3: 'Teenagers', p: 'Build the lookup in Python with an AI assistant, then test it against the true answers.' },
            { h3: 'Adults', p: 'Design review queues for agents in workflows, with thresholds chosen from measured error.' }
          ]
        },
        {
          kind: 'p',
          text: 'The NSW Department of Education, NSW Spatial Services, Transport for NSW, Cumberland Council and the statistics bureau publish the data used here and have no link with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Auburn',
      h2: 'A busy station and schools from 1886',
      intro: 'More facts from the station and school files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Busiest in the council',
              p: 'In August 2026 Auburn Station had 379,198 entries, the most of the 11 stations inside Cumberland, ahead of Lidcombe at 347,831.'
            },
            { h3: 'Peak month', p: 'Across the 23 months from October 2024, Auburn\'s highest count was October 2024 itself, at 388,451 entries.' },
            {
              h3: 'Three Auburn schools',
              p: 'Auburn Public School records its first teacher in March 1886, Auburn North Public School in 1891 and Auburn West Public School in August 1934.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Year on year',
          p: 'Auburn Station entries rose from 363,950 in August 2025 to 379,198 in August 2026 in Transport for NSW\'s file. The file gives no reason, and we do not offer one.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From asking the teacher to designing review queues',
    intro: 'Ages are a guide only; the free trial finds the right starting point.',
    cols: [
      {
        band: 'Ages 8 to 12',
        h3: 'Building with AI',
        p: 'Scratch games built with AI help and checked by the child.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 13 to 15',
        h3: 'Checking AI code',
        p: 'Python written with an assistant and tested against known answers.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Small agents',
        p: 'Agents with tools, confidence scores and a way to ask for help.',
        courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents at work',
        p: 'Automation with human sign-off and measured thresholds.',
        courses: ['python-ai-automation-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Vibe coding and AI',
    h2: 'Will an AI agent tell an Auburn learner when it is unsure?',
    intro: 'Only if someone designs it to. Most assistants answer every question in the same confident tone.',
    p1: 'An assistant will happily write the nearest-school lookup in a few seconds. It will not, unless asked, measure how often the answer flips when the input is slightly off, or add a rule that hands close calls to a person.',
    p2: 'Learners who have swept the threshold themselves know what to ask for and how to check the result. That is the difference between using an agent and being responsible for one.',
    closer: 'In 2026 the Auburn learners who can set and defend an escalation rule are the ones teams will trust with agents.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons at home in Auburn',
    intro: 'Every lesson runs online with a live teacher, so nobody travels.',
    cells: [
      { h3: 'At home', p: 'A computer, a stable connection and headphones are all a learner needs.' },
      { h3: 'NSW terms', p: 'Lessons pause for the NSW school holidays when families ask.' },
      { h3: 'Free first lesson', p: 'A complete trial lesson, then a suggested course and timetable.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners matched by level, or a private teacher.' },
      { h3: 'Two a week', p: 'Two fixed lessons weekly, about eight a month, with agreed breaks.' },
      { h3: 'India time', p: 'A 6pm Auburn lesson starts at 12:30pm India time during daylight saving and 1:30pm after it ends.' }
    ],
    spec: {
      title: 'Sydney clock changes',
      p: 'Daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027 in Sydney; India does not change its clocks. Timetables are written in Sydney time.'
    }
  },
  fees: {
    h2: 'Auburn class fees',
    intro: 'The fees come down to three numbers.',
    first: 'The first lesson costs nothing and ends with honest advice on level.',
    group: 'A month in a group, usually eight lessons, with fifteen to twenty learners.',
    private: 'About eight private lessons a month with one teacher.',
    closer: 'Families outside India are invoiced in US dollars. Nothing is paid until after the trial and an agreed timetable; the pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Book a first lesson in Auburn',
    intro: 'Tell us an age and an interest. A ten-year-old might start with an AI-assisted Scratch game; an adult might start by adding an escalation rule to a small agent.',
    success: 'Thank you. We will be in touch soon to arrange the lesson.'
  },
  faq: {
    h2: 'Auburn vibe coding and AI agents questions',
    intro: 'What Auburn families and adult learners usually ask first.',
    items: [
      {
        q: 'How many people live in Auburn?',
        a: 'The 2021 Census QuickStats for the suburb of Auburn record 39,333 residents, 8,583 families and a median age of 31.'
      },
      {
        q: 'What is human-in-the-loop escalation?',
        a: 'Human-in-the-loop escalation is a rule that sends an AI agent\'s low-confidence answers to a person instead of acting on them. The threshold sets the trade between human workload and the agent\'s mistakes.'
      },
      {
        q: 'What is the Auburn agent project?',
        a: 'Learners build an agent that names the nearest primary school to each of 11 Cumberland railway stations from a noisy location, then measure how escalation thresholds change its error rate. At 250 metres of noise, a 400 metre rule cut errors from 7.56% to 1.01% while escalating 24.4% of questions.'
      },
      {
        q: 'Is the noise real GPS data?',
        a: 'No. The noise is simulated so the experiment can be repeated exactly. The station and school positions are real published coordinates.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Building software by describing what you want to an AI assistant. We teach it alongside reading and testing the code, so learners stay in charge.'
      },
      {
        q: 'Can younger children learn about AI agents?',
        a: 'Children from eight build simple AI-assisted games and learn when to check an answer. Agent building starts in the teenage courses.'
      },
      { q: 'Are adult classes available?', a: 'Yes, in adult groups or one to one, for work, study or a new career.' },
      {
        q: 'Do you have a centre in Auburn?',
        a: 'No. All lessons are live online and we have no premises in Australia. The phone number on our site is Indian.',
        boiler: true
      },
      {
        q: 'What do classes cost in Auburn?',
        a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Fifteen to twenty, grouped by level and pace. One-to-one lessons are available if no group suits.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Auburn learners',
    html: 'Next door, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-homebush-sydney">Homebush</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-rhodes-sydney">Rhodes</a> have pages of their own, and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-canterbury-bankstown-sydney">Canterbury-Bankstown</a> covers the council area to the south. See the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> for the city and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI in New South Wales</a> for the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Auburn and Sydney',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-homebush-sydney', label: 'Homebush' },
    { href: '/ai-and-programming-classes-in-rhodes-sydney', label: 'Rhodes' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-aubn .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.2vw, 2.5rem); }
.cg-root.cg-aubn .cg-hero h1 { font-weight: 720; letter-spacing: -0.021em; line-height: 1.08; }
.cg-root.cg-aubn .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.85rem 1rem; border-radius: 4px; }
.cg-root.cg-aubn .cg-eyebrow { letter-spacing: 0.13em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-aubn .cg-section-head h2 { max-width: 25ch; }
.cg-root.cg-aubn .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.75rem); }
.cg-root.cg-aubn .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-aubn .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-aubn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-aubn .cg-callout { border-left-width: 3px; border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Auburn, ABS Census 2021 QuickStats, suburb Auburn SAL10107 (read 10 October 2026): 39,333 people; median age 31 (NSW 39, Australia 38); 8,583 families; 12,921 private dwellings; 3.3 people per household; age 0 to 4 2,523 (6.4 percent; NSW 5.8); age 20 to 24 4,606 (11.7 percent; NSW 6.1, Australia 6.2); flat or apartment 5,189 (47.3 percent; NSW 21.7, Australia 14.2); separate house 4,615 (42.0 percent; NSW 65.6, Australia 72.3); Bachelor Degree level and above 7,803 (24.0 percent). ABS ASGS 2021: 4,000 random points in SAL10107 all inside Cumberland LGA. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Human-in-the-loop confidence-gated escalation. NSW Spatial Services NSW_Transport_Theme railway station points inside Cumberland LGA: 11 (Granville, Auburn, Merrylands, Guildford, Regents Park, Pendle Hill, Wentworthville, Westmead, Clyde, Berala, Lidcombe). NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02: 23 Cumberland schools with Level_of_schooling Primary School or Infants School. Haversine distance, true nearest: Auburn Station Auburn Public School 522 m, Auburn North Public School 1,003 m, gap 480 m; Lidcombe Public School 360 m vs Auburn Public School 1,570 m; Clyde Granville Public School 1,174 m vs Granville East Public School 1,499 m, gap 325 m (smallest). Simulation (our calculation), Gaussian noise per axis, Python random seed 42, 2,000 lookups per station: sigma 250 m, threshold 0/100/200/400 m: escalated 0/6.0/11.8/24.4 percent, wrong 7.56/4.55/2.69/1.01 percent; Auburn Station wrong 333 (threshold 0), 422 escalated and 156 wrong (200), 823 escalated and 64 wrong (400). Sigma 100 m: wrong 0.22 percent at 0; 1.2 percent escalated, 0.03 wrong at 100; 4.5 escalated, 0.01 wrong at 200. Transport for NSW monthly entries (CC BY): August 2026 Auburn Station 379,198 (highest of the 11), Lidcombe 347,831; August 2025 Auburn 363,950; Auburn October 2024 388,451 (highest of 23 months). School first teacher dates: Auburn Public School 1886-03-01, Auburn North Public School 1891-01-01, Auburn West Public School 1934-08-01.',
    requiredMentions: ['39,333', '2,523', '12,921', '4,606', '363,950', '379,198', '388,451', 'Auburn North Public School', '7.56%'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Auburn (SAL10107).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10107' },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Spatial Services, NSW Transport Theme feature service (station points).',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Transport_Theme/FeatureServer'
      },
      {
        claim: 'ABS ASGS Edition 3 boundaries (SAL and LGA), geo.abs.gov.au map services.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Method of travel to work: not used, because Census day 2021 fell in an unusual period for Sydney commuting and the page would need context we did not verify.',
      'Secondary, single-sex and specific-purpose schools: excluded from the project; only primary and infants schools are used.',
      'School catchments or enrolment: not claimed; nearest straight-line distance is not a catchment.',
      'Why Auburn Station entries rose year on year: not claimed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, NSW Spatial Services, Transport for NSW, Cumberland Council or the ABS.'
    ]
  }
};
