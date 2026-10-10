'use strict';
// Balwyn, Melbourne (cg- district page, Australia cluster Phase 8, row 253). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL20123, Balwyn, City of Boroondara) under Melbourne and
// Victoria.
// Spine: Python logging instead of print debugging. A five-step pipeline over Victorian School Locations 2025
// (CC BY 4.0): 2,301 rows; 2,297 open; 57 in Boroondara; Address_Town == "Balwyn" 2; WARNING: same town spelled two
// ways (Balwyn 2, BALWYN 2); case-insensitive 4; inside the ABS Balwyn polygon 4 (same four). Substring "balwyn"
// matches 10 (adds Balwyn North 5 + BALWYN NORTH 1). 730 of 2,297 open schools have an all-caps town. Script:
// scratchpad au/b7/balw.py.
// Lesson family: Python logging module (levels, counts per step); 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BALWYN',
    label: 'Balwyn, Melbourne',
    blurb: 'Online coding and Python classes for Balwyn, with a project where one logging warning explains why a filter found two schools instead of four.'
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
  slug: 'online-coding-and-python-classes-in-balwyn-melbourne',
  code: 'balw',
  accent: '#9E2A59',
  accentRationale: 'Balwyn: a deep mulberry (hue 336), picked by search at least 10 RGB units from all 1,485 accent declarations in content, the shared stylesheets and the claims log; 5.82:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Balwyn',
    eyebrow: 'Balwyn, City of Boroondara, Melbourne, Victoria',
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
  routeLabel: 'Balwyn, Melbourne',
  title: 'Online Coding and Python Classes in Balwyn, Melbourne',
  description: 'Live online coding and Python classes for Balwyn children, teenagers and adults, from Scratch to real data pipelines, taught in small groups or one to one.',
  ogDescription: 'Python classes for Balwyn with a data project: a filter for Balwyn schools found 2, a logging warning showed why, and the right answer was 4.',
  twitterDescription: 'Balwyn coding and Python classes, live online, first class free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Balwyn',
    description: 'Level-matched online lessons in Scratch, Python and data for learners in Balwyn, taught live in English.'
  },
  h1: 'Online coding and Python classes in Balwyn',
  capsuleQ: 'How do Balwyn learners study coding and Python online?',
  capsule: 'In live lessons on screen, in small groups or one to one, writing real Python from the first week. Balwyn has many school-age learners: the 2021 Census counted 13,495 residents, 7.2% of them aged 10 to 14 against 6.0% across Victoria, and 48.5% of adults held a degree.',
  lead: 'Filter Victoria\'s school list for schools in Balwyn and Python hands back two. Look at a map and there are four. Nothing crashed and nothing printed an error; the program just quietly lost half the answer. One line of logging, written before anyone knew there was a problem, is what shows where it went.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Balwyn.',
  picks: {
    eyebrow: 'Course picks for Balwyn',
    h2: 'Courses that build careful Python habits',
    intro: 'Every course below teaches learners to check their own programs, the skill behind the logging project. The free first class decides where to begin.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Python from the ground up, including files, errors and the logging module.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Cleaning messy public data, the kind where a town is spelled two ways.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Professional Python: packages, testing, logging and debugging.'
      },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Pipelines that report what each step kept and dropped.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Balwyn in the Census',
      h2: 'Secondary-age learners and a small suburb',
      intro: 'Figures for the Balwyn suburb (ABS code SAL20123) from the 2021 Census QuickStats, with the Victorian share for comparison. Balwyn North is a separate suburb with its own figures.',
      body: [
        {
          kind: 'table',
          caption: 'Balwyn suburb, 2021 Census headline counts',
          head: ['Headline', 'Balwyn'],
          rows: [
            ['Residents', '13,495'],
            ['Median age', '43'],
            ['Families', '3,766'],
            ['Private dwellings', '5,923'],
            ['Average people per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Balwyn alongside Victoria',
          head: ['Measure', 'Balwyn', 'Victoria'],
          rows: [
            ['Residents aged 10 to 14', '7.2% (979)', '6.0%'],
            ['Residents aged 15 to 19', '7.0% (945)', '5.6%'],
            ['Adults with a bachelor degree or higher', '48.5% (5,490)', '29.2%'],
            ['Workers employed as professionals', '38.4% (2,385)', '25.0%'],
            ['Semi-detached, row or terrace houses and townhouses', '26.0% (1,320)', '13.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'No railway', p: 'No metropolitan train station sits inside the suburb, and only 74 workers, 1.2%, took the train on Census day.' },
            { h3: 'Home workers', p: 'Census day fell in the August 2021 lockdown, when 2,358 employed residents, 38.0%, worked from home.' },
            { h3: 'Compact', p: 'The bureau measures Balwyn at 4.38 square kilometres, within the City of Boroondara.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau adjusts small Census counts for privacy, so parts of a table may not add to its total. We quote each number as published and never sum parts into a new total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Two schools or four? Let the log decide',
      intro: 'We built a five-step pipeline over the Victorian Department of Education\'s 2025 school locations file and logged a count at every step with Python\'s logging module instead of scattering print statements.',
      body: [
        {
          kind: 'table',
          caption: 'What the log recorded at each step (our run on the published file)',
          head: ['Step', 'Level', 'Rows left'],
          rows: [
            ['Load the file', 'INFO', '2,301'],
            ['Keep open schools', 'INFO', '2,297'],
            ['Keep the City of Boroondara', 'INFO', '57'],
            ['Address_Town equals "Balwyn" exactly', 'INFO', '2'],
            ['Same town spelled two ways', 'WARNING', 'Balwyn 2, BALWYN 2'],
            ['Town matched ignoring case', 'INFO', '4'],
            ['Inside the Balwyn boundary on the map', 'INFO', '4']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'The cause', p: 'Two of the four Balwyn schools have their town typed in capitals. Across the whole state, 730 of the 2,297 open schools do.' },
            { h3: 'The check', p: 'We then placed every school on the ABS suburb boundary. The same four landed inside, so the case-insensitive filter was right.' },
            {
              h3: 'The trap next door',
              p: 'A filter for any town containing "balwyn" returns 10, because six more schools give Balwyn North, a different suburb, as their town.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'When print is enough',
          p: 'For a single run in a notebook, a print after each step tells you the same thing with less typing, and we would not push a beginner past that. Logging pays off once the script runs again next month: levels let you hide the routine counts and keep the warnings, and the warning about two spellings would still fire if the file changed.'
        },
        {
          kind: 'p',
          text: 'The pipeline, the counts and the warning are from our own script run on 10 October 2026. The school file is the department\'s, quoted unchanged. One of the four schools is Balwyn Primary School; the other three are specialist or single-sex schools, which we count but do not name.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The Python behind it',
      h2: 'Five logging levels and when to use each',
      intro: 'Python\'s logging module ships with the language. Each message carries a level, and one setting decides which levels are shown.',
      body: [
        {
          kind: 'table',
          caption: 'Logging levels in our pipeline',
          head: ['Level', 'Used for', 'Example from the project'],
          rows: [
            ['DEBUG', 'Detail you only want while fixing something', 'The name of each school kept'],
            ['INFO', 'Routine progress', 'Rows left after each step'],
            ['WARNING', 'Something odd that did not stop the run', 'One town spelled two ways'],
            ['ERROR', 'A step that failed', 'The boundary file would not load'],
            ['CRITICAL', 'The run cannot continue', 'The school file is missing']
          ]
        },
        {
          kind: 'p',
          text: 'The useful habit is logging a count after every filter, before anything goes wrong. When the count falls further than expected, the log already shows which step did it. Print statements usually get deleted once a script works, which is exactly when the next problem arrives.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Keep a tally at each step of a sorting game and spot the step where cards went missing.' },
            { h3: 'Secondary students', p: 'Rebuild the pipeline in Python and add a warning that fires when a filter keeps under half its rows.' },
            { h3: 'Adults', p: 'Add logging to a spreadsheet clean-up script and keep a log file for every monthly run.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Balwyn',
      h2: 'Buses, schools and the school year',
      intro: 'A little more about Balwyn from the state files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Four schools',
              p: 'The 2025 file places four open schools inside Balwyn: two government and two independent, one of them a primary school, Balwyn Primary School.'
            },
            { h3: 'Getting to work', p: 'With no station, 38.8% of Balwyn workers, 2,409 people, drove to work on Census day, against 49.9% statewide.' },
            {
              h3: 'Term dates',
              p: 'Victorian government school students start on Thursday 28 January 2027, and Term 4 runs from Monday 4 October to Friday 17 December.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Balwyn or Balwyn North',
          p: 'This page covers the Balwyn suburb only. Balwyn North, immediately to the north, has its own Census figures and schools, which we have not added to the counts here.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From tallies to logged pipelines',
    intro: 'Ages are a starting guide; the free first class places each learner properly.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Games with counters and simple checks, built from blocks.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Variables, lists and files, plus the first print and log lines.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Reading real public files and proving each filter does its job.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Professional Python',
        p: 'Testing, logging and pipelines that run unattended.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI writes the Python, why should a Balwyn learner learn to log it?',
    intro: 'Because AI-written code fails the same quiet way ours did, and a log is how a person finds out.',
    p1: 'Ask an assistant for "schools in Balwyn" from this file and the likeliest first draft compares the town exactly, which returns two. The code is tidy and runs first time. Nothing about it suggests that half the answer is missing.',
    p2: 'A learner who logs a count after every step sees the drop from 57 to 2 and asks why before trusting it. That habit works whether a person or an AI wrote the code, and it is the habit employers want.',
    closer: 'The Balwyn learner who logs every step is the one who notices when an answer comes back short.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How online lessons work for Balwyn',
    intro: 'Lessons happen live on screen, so there is no drive and no parking.',
    cells: [
      { h3: 'Screen sharing', p: 'The learner joins by link, shares a screen and the teacher follows every line as it is typed.' },
      { h3: 'In term time', p: 'Courses keep to the Victorian school terms and stop for the state holidays.' },
      { h3: 'First lesson', p: 'The free class is a full lesson; then we propose a course and a time each week.' },
      { h3: 'Groups of five to ten', p: 'Learners are grouped by level from many places, not by suburb.' },
      { h3: 'Regular rhythm', p: 'Two set lessons a week, around eight a month, with breaks agreed in advance.' },
      {
        h3: 'Teachers in India',
        p: 'Our teachers are in India; a 4pm Balwyn lesson in summer is 10:30am India time, becoming 11:30am once Melbourne leaves daylight saving.'
      }
    ],
    spec: {
      title: 'Melbourne time',
      p: 'Daylight saving runs in Melbourne from Sunday 4 October 2026 to Sunday 4 April 2027. India does not change its clocks, so every lesson time we confirm is in Melbourne time.'
    }
  },
  fees: {
    h2: 'Balwyn lesson fees',
    intro: 'Three prices, clearly set out.',
    first: 'The first lesson is free and ends with a straightforward recommendation.',
    group: 'A month of group lessons, typically eight, with five to ten learners at one level.',
    private: 'Roughly eight one-to-one lessons a month.',
    closer: 'Outside India all fees are in US dollars, so a Balwyn family pays what any other family abroad pays. Nothing is billed until the trial has fixed a course and a time; holidays, missed lessons and switching between group and private are explained on the pricing page.'
  },
  reviewsH2: 'Google reviews from our learners and parents',
  book: {
    h2: 'Book a free Balwyn class',
    intro: 'Send the learner\'s age and one interest. An eight-year-old might start with a counting game in Scratch; a Year 10 student might start by building the school pipeline in Python.',
    success: 'Thank you. Our team will contact you soon about a Balwyn class.'
  },
  faq: {
    h2: 'Balwyn coding and Python questions',
    intro: 'What Balwyn families and adult learners ask us first.',
    items: [
      {
        q: 'How many people live in Balwyn?',
        a: 'The 2021 Census QuickStats for the Balwyn suburb record 13,495 residents, 3,766 families and 5,923 private dwellings.'
      },
      {
        q: 'What is the Python logging module?',
        a: 'A part of Python\'s standard library that records messages with a level, such as INFO or WARNING, so a program can report what it did without cluttering the output.'
      },
      {
        q: 'Why use logging instead of print?',
        a: 'For a quick one-off check, print is fine. Logging is better for scripts that run again, because levels let you show only warnings in normal runs and the messages can go to a file.'
      },
      {
        q: 'What did the Balwyn school project find?',
        a: 'An exact match on the town found two schools; a warning showed the town was spelled in two ways, and matching without case found four, the same four that sit inside the suburb boundary.'
      },
      {
        q: 'Is Python suitable for a Year 7 student?',
        a: 'Usually, yes. Many learners start typed Python at 11 or 12; younger children begin with Scratch and move across once reading and typing are comfortable.'
      },
      { q: 'Do learners use real data?', a: 'Yes. Projects use public files such as the Victorian school list, so learners meet the mess real data contains.' },
      {
        q: 'Is there a classroom in Balwyn?',
        a: 'No. Teaching is live online only, there is no Australian office, and the phone number on this page is Indian.',
        boiler: true
      },
      {
        q: 'How much do Python classes cost for Balwyn learners?',
        a: 'The first lesson is free. After it, group classes cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one classes cost USD 150 a month. Course, format and time are settled before payment.',
        boiler: true
      },
      {
        q: 'How large is each group?',
        a: 'Five to ten learners, put together on level, pace and goals, with private lessons when no group time suits.',
        boiler: true
      },
      {
        q: 'Can adults learn Python with you?',
        a: 'Yes. Adults join adult groups or take private lessons, and many want Python to automate a task they do at work every week.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Balwyn learners',
    html: 'Younger children can start with <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding classes for kids in Melbourne</a>. See the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> for the city as a whole and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> for state schooling.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Balwyn and Melbourne',
  footerPlaces: [
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-balw .cg-hero-grid { align-items: start; gap: clamp(1.3rem, 3.6vw, 2.8rem); }
.cg-root.cg-balw .cg-hero h1 { font-weight: 640; letter-spacing: -0.008em; line-height: 1.14; }
.cg-root.cg-balw .cg-capsule { border-left: 5px double var(--cg-accent); padding: 0.4rem 0 0.4rem 1.1rem; }
.cg-root.cg-balw .cg-eyebrow { letter-spacing: 0.08em; font-weight: 750; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-balw .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.006em; }
.cg-root.cg-balw .cg-grid-3 { gap: clamp(0.85rem, 2vw, 1.7rem); }
.cg-root.cg-balw .cg-table caption { font-weight: 600; text-align: left; padding-bottom: 0.35rem; }
.cg-root.cg-balw .cg-table td:nth-child(2) { font-family: var(--font-mono, monospace); font-size: 0.92em; }
.cg-root.cg-balw .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-balw .cg-callout { border-left-style: double; border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Balwyn, ABS Census 2021 QuickStats, Balwyn suburb SAL20123 (read 10 October 2026): 13,495 people; median age 43; 3,766 families; 5,923 private dwellings; 2.6 people per household; aged 10-14 7.2% (979; Victoria 6.0%); aged 15-19 7.0% (945; Victoria 5.6%); bachelor degree or higher 48.5% (5,490; Victoria 29.2%); professionals 38.4% (2,385; Victoria 25.0%); semi-detached, row or terrace house, townhouse 26.0% (1,320; Victoria 13.9%); train to work 1.2% (74); car as driver 38.8% (2,409; Victoria 49.9%); worked at home 38.0% (2,358, lockdown Census day). ABS SAL area 4.3843 square kilometres. No metropolitan station inside the boundary. Victorian School Locations 2025: 4 open schools inside the boundary (Primary 1, Pri/Sec 1, Special 2; Government 2, Independent 2), named only Balwyn Primary School. Victorian 2027: students start Thursday 28 January; Term 4 Monday 4 October to Friday 17 December. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Python logging pipeline over Victorian School Locations 2025: loaded 2,301 rows; School_Status O 2,297 (4 C dropped); LGA Boroondara (C) 57; Address_Town == "Balwyn" 2; WARNING same town spelled 2 ways (Balwyn 2, BALWYN 2); case-insensitive 4; inside ABS SAL20123 polygon 4, identical set. Substring "balwyn" in Address_Town: 10 (Balwyn 2, BALWYN 2, Balwyn North 5, BALWYN NORTH 1). 730 of 2,297 open schools have an all-caps Address_Town. Script: scratchpad au/b7/balw.py.',
    requiredMentions: ['13,495', '3,766', '5,923', '5,490', '2,358', '2,301', '2,297', 'Balwyn Primary School', '4.38 square kilometres', 'Address_Town'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Balwyn suburb (SAL20123).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20123' },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20123 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Python documentation, logging module (standard library levels DEBUG, INFO, WARNING, ERROR, CRITICAL).',
        url: 'https://docs.python.org/3/library/logging.html'
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
      'Why some school records use capitals for the town: not claimed.',
      'Names of the specialist and single-sex schools inside Balwyn: not used; counted only.',
      'Balwyn North schools or Census figures: not counted for Balwyn; separate suburb.',
      'A combined Balwyn and Balwyn North total: not computed; published parts are never summed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Boroondara or the Victorian Department of Education.'
    ]
  }
};
