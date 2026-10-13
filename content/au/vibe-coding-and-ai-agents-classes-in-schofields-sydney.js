'use strict';
// Schofields, Sydney (cg- district page, Australia cluster Phase 8, row 236). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*). Schofields is an ABS suburb and locality (SAL13517) in Blacktown's
// north-west growth area. Parents: Australia, NSW, Sydney.
// Spine: an AI agent compares Schofields station with every other station by joining a station list to the monthly
// usage table. Which station-months does its inner join silently drop, and how does an anti-join find them?
// Data: Transport for NSW monthly station usage (Opal batch data, CC BY), October 2024 to August 2026, 23 months.
// Our SQLite checks (scratchpad au/b5/sch_aj.py): 382 named stations (46 UNKNOWN rows set aside); a full
// stations x months grid for entries is 8,786 pairs, 8,586 entry rows exist; the anti-join (LEFT JOIN ... IS NULL)
// returns 200 missing pairs at 27 stations (146 train, 54 light rail), e.g. Hurlstone Park 19 months, Punchbowl 19,
// Wiley Park 18; 368 entry rows read "Less than 50"; 338 stations have all 23 months as numbers; 44 do not
// (26 train, 18 light rail), 22 of them under 12 months, 14 with none. Schofields Station: 23 of 23 months numeric,
// average 95,128 entries (ours), lowest 63,988 (January 2025), highest 117,374 (March 2026), 54th by average among
// 282 train stations with any number and 54th among the 270 complete ones.
// Lesson family: anti-join to expose rows an agent's inner join hides; screened 0 location-page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Schofields (NSW) SAL13517.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health, journey to work; any cause
// for missing months; enrolment, ICSEA, Indigenous, LBOTE and selective columns.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SCHOFIELDS',
    label: 'Schofields, Sydney',
    blurb: 'Vibe coding and AI agent classes for Schofields, with a project on the 200 station-months an agent\'s join quietly leaves out.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-schofields-sydney',
  code: 'schf',
  accent: '#24319E',
  accentRationale: 'Schofields: a strong train-line blue (hue 234), chosen by hand at least 10 RGB units from every accent declared in content, the shared stylesheets and the claims log, with high contrast on white and the paper tints',
  pageType: 'city',
  place: {
    name: 'Schofields',
    eyebrow: 'Schofields, north-west Sydney',
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
  routeLabel: 'Schofields, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Schofields, Sydney',
  description: 'Live online vibe coding and AI agent classes for Schofields learners aged 6 to 67, with a project on the data an agent quietly drops. First lesson free.',
  ogDescription: 'AI agent classes for Schofields: an inner join hides 200 station-months, and an anti-join brings them back into view.',
  twitterDescription: 'Schofields vibe coding and AI agents classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Schofields',
    description: 'Online lessons in vibe coding, AI agents, Python and SQL for children, teenagers and adults in Schofields, Sydney, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Schofields',
  capsuleQ: 'What should Schofields learners look for in vibe coding and AI agent classes?',
  capsule: 'A live teacher, a group at the learner\'s level, and agent projects where every answer is checked against the data. Our lessons run from Scratch at six to Python, SQL and agents for adults. The 2021 Census counted 15,213 people in Schofields, a suburb of about 8.9 square kilometres with a median age of 32.',
  lead: 'Ask an AI agent how Schofields station compares with the rest of Sydney\'s network and it will write a database join, run it, and hand back a confident table. Every station gets an average. What the table never mentions is that some of those averages rest on 23 months of data and some on four. The rows that are missing simply do not appear, so nothing looks wrong. One extra query, an anti-join, lists every station-month the agent never saw: 200 of them.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI agents lesson for a learner in Schofields.',
  picks: {
    eyebrow: 'Course picks for Schofields',
    h2: 'Courses for building and checking agents',
    intro: 'Each course pairs fast building with the habit of checking what the code or the agent actually did. The trial lesson is free and needs no card details.',
    items: [
      {
        course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev',
        band: 'Ages 6 to 12',
        note: 'Describe a game, let AI help build it in Scratch, then test every part.'
      },
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 12 to 17',
        note: 'Python and web projects built with AI help and checked line by line.'
      },
      { course: 'mysql-mastery-for-teens', band: 'Ages 13 to 17', note: 'Tables, joins and the queries that reveal what a join left behind.' },
      {
        course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
        band: 'University and adult',
        note: 'Full-stack and agent projects with data checks built into the workflow.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Schofields in the Census',
      h2: 'One of Sydney\'s youngest family suburbs',
      intro: 'QuickStats from the statistics bureau for the Schofields suburb and locality, against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Schofields, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '15,213'],
            ['Median age', '32'],
            ['Families', '4,222'],
            ['Private dwellings', '4,991'],
            ['Average people per household', '3.2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Schofields beside the state and the nation',
          head: ['Indicator', 'Schofields', 'NSW', 'Australia'],
          rows: [
            ['Children aged 0 to 4', '10.9% (1,656)', '5.8%', '5.8%'],
            ['Children aged 5 to 9', '10.2% (1,554)', '6.2%', '6.2%'],
            ['Separate houses among occupied homes', '83.1% (3,820)', '65.6%', '72.3%'],
            ['Couple families with children', '64.7% (2,733)', '44.7%', '43.7%'],
            ['Bachelor degree or higher', '47.1% (5,150)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Young children everywhere',
              p: 'Children aged 0 to 4 and those aged 5 to 9 each made up more than a tenth of residents, close to double the state share in both bands.'
            },
            { h3: 'Family houses', p: 'Separate houses made up 83.1% of occupied homes, with flats at 10.6% and townhouses at 5.9%.' },
            {
              h3: 'Degree holders',
              p: 'Almost half the residents aged 15 and over held a bachelor degree or higher, and professionals were 34.1% of employed people.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The figures describe the Schofields suburb and locality. Small cells in QuickStats are adjusted for privacy, so a table\'s parts may not equal its total, and we never sum the parts to make a new one.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The 200 station-months an agent\'s join never mentioned',
      intro: 'Transport for NSW publishes monthly entries and exits for each station. We loaded 23 months, October 2024 to August 2026, into SQLite and gave the questions to a scripted agent of our own.',
      body: [
        {
          kind: 'table',
          caption: 'Counting what should be there against what is there (our SQLite run)',
          head: ['Check', 'Result'],
          rows: [
            ['Named stations in the file', '382'],
            ['Months covered', '23'],
            ['Station-months a full entry grid needs', '8,786'],
            ['Entry rows actually present', '8,586'],
            ['Station-months found only by the anti-join', '200, at 27 stations'],
            ['Entry rows that read "Less than 50"', '368']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Inner join',
              p: 'Keeps only pairs that exist in both tables. A station with four months of rows gets an average over four months, and the result looks just like a 23-month average.'
            },
            {
              h3: 'Anti-join',
              p: 'A LEFT JOIN from the full station and month grid, keeping rows where the usage side IS NULL. It returns exactly the pairs the inner join dropped.'
            },
            {
              h3: 'Why agents need it',
              p: 'An agent reports what its query returned. If nobody asks what the query left out, the gaps never reach the person reading the answer.'
            }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Stations with the most missing entry months (anti-join result)',
          head: ['Station', 'Months with no entry row'],
          rows: [
            ['Hurlstone Park', '19'],
            ['Punchbowl', '19'],
            ['Wiley Park', '18'],
            ['Marrickville', '17'],
            ['Dulwich Hill', '17']
          ]
        },
        {
          kind: 'callout',
          h3: 'What it changes for Schofields',
          p: 'Schofields Station has all 23 months as plain numbers, so its own average of about 95,128 entries a month is safe; the monthly figure ran from 63,988 in January 2025 to 117,374 in March 2026. Its rank does not move either: 54th among the 282 train stations with any number, and 54th among the 270 with a complete record. The anti-join matters because the denominator changes, and a careful answer says which one it used.'
        },
        {
          kind: 'p',
          text: 'The missing months come straight from the published file; we give no reason for any of them. All counts are our own SQLite results, and the agent is our own script, not a commercial product.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Checks an agent should run',
      h2: 'Turning one lesson into an agent checklist',
      intro: 'The anti-join generalises into a short list of questions to ask before trusting any joined result.',
      body: [
        {
          kind: 'table',
          caption: 'Before an agent answers',
          head: ['Question', 'Query idea', 'Result on this file'],
          rows: [
            ['How many stations have a full record?', 'GROUP BY station HAVING COUNT(*) = 23', '338 of 382'],
            ['Which records are short?', 'The complement of the line above', '44 stations: 26 train, 18 light rail'],
            ['Which stations never show a number?', 'Count numeric rows per station', '14 stations'],
            ['Which months are absent entirely?', 'Anti-join from the grid', '200 station-months']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Write the inner join and the anti-join in SQL, then explain the difference in a single sentence.' },
            { h3: 'University students', p: 'Build a small agent tool that refuses to report an average without also reporting how many months it covers.' },
            { h3: 'Adults', p: 'Run the same anti-join over a work spreadsheet export and see which customers or products fell out of a report.' }
          ]
        },
        {
          kind: 'p',
          text: 'Station entries count Opal tap-ons, which are trips, not people. Transport for NSW publishes the data and is not connected with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Local schools',
      h2: 'Schofields schools and the next school year',
      intro: 'The education department\'s list names two government schools with a Schofields address, both in Blacktown council.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Schofields Public School', p: 'A primary school whose first teacher started in 1919.' },
            { h3: 'Galungara Public School', p: 'A primary school that opened its doors in 2021.' },
            { h3: 'Term 2 in 2027', p: 'Eastern division students return on Thursday 29 April 2027 after school development days on 27 and 28 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'A warm-up for young coders',
          p: 'The 102 years between Schofields Public School\'s first teacher and Galungara Public School\'s opening make a neat first subtraction for a Scratch timeline project.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Scratch to agents that report their gaps',
    intro: 'The ages are approximate; the free first lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch with AI help',
        p: 'Games designed in words, built with AI suggestions, and tested by the learner.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'scratch-programming-complete-course']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'Python and tables',
        p: 'Lists, dictionaries and the first small data tables.',
        courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'SQL and agents',
        p: 'Joins, grouping and simple agent tools that query real files.',
        courses: ['mysql-mastery-for-teens', 'vibe-coding-for-teens-python-web-ai-projects-course']
      },
      {
        band: 'University and adult',
        h3: 'Trustworthy agents',
        p: 'Agent workflows that check coverage, cite their data and flag what is missing.',
        courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'mysql-database-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can you trust an agent\'s answer about Schofields station?',
    intro: 'Only as far as you know what its query left out.',
    p1: 'An agent that writes SQL for you will usually reach for an inner join because it is the most common pattern. On this file that join returns a tidy table of station averages and silently drops 200 station-months. The agent is not lying; it is reporting exactly what the query returned.',
    p2: 'A learner who has written an anti-join knows to ask the follow-up question, and can make it part of the agent\'s own instructions: whenever you average, also report how many months each average covers.',
    closer: 'In 2026 agents can write queries in seconds; Schofields learners who can check what those queries missed will be the ones people rely on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons that come to Schofields',
    intro: 'Every lesson happens live on video, so a Schofields learner never travels to class.',
    cells: [
      { h3: 'Teaching in real time', p: 'The teacher watches the learner\'s screen and explains each fix as it happens.' },
      { h3: 'NSW stages and terms', p: 'Lessons use NSW syllabus language and pause for state school holidays.' },
      { h3: 'A free start', p: 'The opening class costs nothing and ends with a recommended course, level and time.' },
      { h3: 'Level-matched groups', p: 'Fifteen to twenty learners working at the same level, or one-to-one if preferred.' },
      { h3: 'Two lessons a week', p: 'Fixed weekly times, around eight lessons a month.' },
      { h3: 'Teachers in India', p: 'A 4:30pm Schofields lesson is 11am India time while Sydney is on summer time and noon once it ends.' }
    ],
    spec: {
      title: 'Clock changes',
      p: 'Sydney uses daylight saving from Sunday 4 October 2026 until Sunday 4 April 2027; India does not change its clocks. The gap between the two therefore moves from 5 hours 30 minutes to 4 hours 30 minutes, and lesson times are always given in Sydney time.'
    }
  },
  fees: {
    h2: 'Schofields lesson fees',
    intro: 'A single, simple fee table for every course.',
    first: 'A whole first lesson free, followed by a suggested course and timetable.',
    group: 'Around eight lessons a month, two each week, in a group of fifteen to twenty learners at one level.',
    private: 'One-to-one lessons at the same pace, about eight each month.',
    closer: 'Outside India we bill in US dollars. Billing begins only after the trial confirms a course and a time; the pricing page explains holidays, missed lessons and changing format.'
  },
  reviewsH2: 'Family reviews on Google',
  book: {
    h2: 'Start with an age and a favourite topic',
    intro: 'A teacher uses that to shape the first lesson. A six-year-old might describe a Scratch game for an AI helper to start; a teenager or adult might load the station file and write the anti-join.',
    success: 'Thank you. We will be in touch soon about a Schofields class.'
  },
  faq: {
    h2: 'Schofields vibe coding and AI agents questions',
    intro: 'Answers to what Schofields families usually ask first.',
    items: [
      {
        q: 'How many people live in Schofields?',
        a: 'The 2021 Census QuickStats for the Schofields suburb and locality counted 15,213 people, with a median age of 32, 4,222 families and 4,991 private dwellings.'
      },
      {
        q: 'What is an anti-join?',
        a: 'An anti-join returns the rows of one table that have no match in another. In SQL it is usually a LEFT JOIN followed by a WHERE clause that keeps only rows where the joined side is NULL.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding means describing what a program should do in plain words and letting an AI tool write a first version, which the learner then reads, tests and corrects.'
      },
      {
        q: 'What does the Schofields project find?',
        a: 'A full station and month grid for 23 months needs 8,786 entry rows but the file has 8,586. An anti-join lists the 200 missing station-months, which an inner join would hide without warning.'
      },
      {
        q: 'At what age can my child build AI agents?',
        a: 'Children can start describing and testing programs with AI help in Scratch from about six. Building agents that query data usually starts around 13, once Python and simple SQL are in place.'
      },
      {
        q: 'Which AI tools do learners use?',
        a: 'Tools are chosen to suit the learner\'s age and each provider\'s own age rules; younger learners work inside supervised, age-appropriate setups.'
      },
      {
        q: 'What equipment is needed?',
        a: 'A laptop or desktop computer, a headset or speakers with a microphone, and reliable internet. Tablets are not ideal for typing code.'
      },
      {
        q: 'Do you have a classroom in Schofields?',
        a: 'No. All teaching is online, and we have no premises anywhere in Australia, Schofields included. Our contact phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Schofields learners?',
        a: 'The first lesson is free. A group place costs USD 100 a month for two live lessons a week, roughly eight a month, with fifteen to twenty learners; one-to-one is USD 150 a month on the same plan. No payment is taken until a course and time are agreed.',
        boiler: true
      },
      {
        q: 'How large are the groups?',
        a: 'Fifteen to twenty learners, matched on level and goals rather than age. Where no group fits the learner\'s week, one-to-one teaching is offered.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Nearby guides',
    h2: 'More for Schofields learners',
    html: 'Schofields sits in the Blacktown council area, covered on <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-blacktown-sydney">vibe coding and AI agents classes in Blacktown</a>. Next door is <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rouse-hill-sydney">coding and AI classes in Rouse Hill</a>, and the whole city is on <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. For thinking skills alongside AI tools, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Schofields and Blacktown',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/vibe-coding-and-ai-agents-classes-in-blacktown-sydney', label: 'Blacktown' },
    { href: '/best-coding-and-ai-classes-in-rouse-hill-sydney', label: 'Rouse Hill' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-schf .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.5rem); }
.cg-root.cg-schf .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.1; }
.cg-root.cg-schf .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1rem; }
.cg-root.cg-schf .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-schf .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-schf .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.75rem); }
.cg-root.cg-schf .cg-table caption { font-weight: 700; text-align: left; padding-bottom: 0.3rem; }
.cg-root.cg-schf .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-schf .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-schf .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Schofields, ABS Census 2021 QuickStats, Schofields (NSW) suburb and locality SAL13517 (read 10 October 2026): 15,213 people; median age 32; 4,222 families; 4,991 private dwellings; average 3.2 people per household; aged 0 to 4 10.9% (1,656); aged 5 to 9 10.2% (1,554); separate houses 83.1% (3,820), flats 10.6% (488), townhouses 5.9% (269); couple families with children 64.7% (2,733); bachelor degree or higher 47.1% (5,150); professionals 34.1% (2,636). ABS ASGS 2021 SAL area 8.8765 square kilometres. NSW Department of Education master dataset: Schofields Public School (first teacher 1919) and Galungara Public School (2021), both Blacktown council. NSW Department of Education 2027 Eastern division: Term 2 students Thursday 29 April 2027; development days 27 and 28 April.',
    localProject: 'Anti-join to expose rows an inner join hides. Transport for NSW monthly station usage (Opal batch data, CC BY), October 2024 to August 2026. SQLite: 382 named stations x 23 months = 8,786 entry pairs; 8,586 entry rows present; anti-join returns 200 missing pairs at 27 stations (146 train, 54 light rail): Hurlstone Park 19, Punchbowl 19, Wiley Park 18, Marrickville 17, Dulwich Hill 17. 368 entry rows "Less than 50". 338 stations with all 23 numeric months; 44 without (26 train, 18 light rail), 14 with none. Schofields Station: 23 of 23 numeric, average 95,128 (ours), lowest 63,988 (January 2025), highest 117,374 (March 2026), 54th of 282 and of 270 train stations.',
    requiredMentions: ['15,213', '4,222', '4,991', '8,786', '338 of 382', 'Galungara Public School', '117,374', '63,988', '95,128'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Schofields (NSW) suburb and locality (SAL13517): people, median age, families, dwellings, dwelling structure, family composition, education, occupation, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13517'
      },
      {
        claim: 'Transport for NSW, Train, Metro and Light Rail Station Monthly Usage, Opal batch data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations (Creative Commons Attribution); names, suburbs, councils and first-teacher dates only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'SQLite documentation, the LEFT JOIN operator.', url: 'https://www.sqlite.org/lang_select.html' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why particular stations have missing or suppressed months: not stated in the file, so no cause is given.',
      'Any claim that the agent shown is a commercial product: it is our own script.',
      'Journey to work and working at home figures from the 2021 Census: excluded because the Census was taken during a lockdown period.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the school dataset: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, Blacktown City Council or the ABS.'
    ]
  }
};
