'use strict';
// City of Whitehorse, Melbourne (cg- district page, Australia cluster Phase 8, row 257). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page (ABS LGA26980, Whitehorse) under Melbourne and Victoria.
// Box Hill has a suburb page; this page uses council-wide figures and does not repeat Box Hill's.
// Spine: pathlib and glob file discovery over the seven yearly station-entry files. Patterns: '*.csv' 7, '*2024*' 2,
// '*fy_2024_*' 1, '*_2024.csv' 1 (FY23-24), exact '..._fy_20??_20??.csv' 7, '*FY*' 7 on Windows (Python 3.13,
// case-insensitive by default), 0 with case_sensitive=True. Rows 222 per file except FY22-23 223; FY24-25 file starts
// with a byte order mark. Mont Albert present FY18-19 to FY22-23 only. Script: scratchpad au/b7/whte.py.
// Lesson family: pathlib and glob discovery; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WHITEHORSE',
    label: 'City of Whitehorse, Melbourne',
    blurb: 'Online coding and Python classes for the City of Whitehorse, with a project on finding the right yearly files with pathlib and glob.'
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
  slug: 'online-coding-and-python-classes-in-whitehorse-melbourne',
  code: 'whte',
  accent: '#2F1781',
  accentRationale: 'Whitehorse: a deep ink violet (hue 254), picked by search at least 10 RGB units from all 1,485 accent declarations in content, the shared stylesheets and the claims log; 10.92:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'City of Whitehorse',
    eyebrow: 'City of Whitehorse, Melbourne, Victoria',
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
  routeLabel: 'City of Whitehorse, Melbourne',
  title: 'Online Coding and Python Classes in Whitehorse, Melbourne',
  description: 'Live online coding and Python classes for City of Whitehorse children, teenagers and adults, from Scratch to Python scripts that handle real files.',
  ogDescription: 'Python classes for the City of Whitehorse: a glob for 2024 found two files, another found the wrong one, and on Windows a pattern in capitals still found all seven.',
  twitterDescription: 'City of Whitehorse coding and Python classes, live online, first class free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for the City of Whitehorse',
    description: 'Level-matched online lessons in Scratch, Python and data for learners in the City of Whitehorse, taught live in English.'
  },
  h1: 'Online coding and Python classes in the City of Whitehorse',
  capsuleQ: 'How can City of Whitehorse learners study coding and Python online?',
  capsule: 'Through live lessons on screen, in groups of five to ten or one to one, writing Python that works on real public files. The City of Whitehorse had 169,346 residents at the 2021 Census, and 24.1% of its homes were townhouses, terraces or semi-detached houses, against 13.9% across Victoria.',
  lead: 'Victoria publishes one file of station entries for each financial year. A script that reads all of them has to find them first, and that is where small mistakes hide. Ask for files containing "2024" and you get two years, not one. Ask for files ending "_2024" and you get the year that finished in 2024, which may not be the one you meant.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in the City of Whitehorse.',
  picks: {
    eyebrow: 'Course picks for the City of Whitehorse',
    h2: 'Courses that teach Python for real files',
    intro: 'Each course here works with folders and files from early on, the skill behind the glob project. The free first class decides the starting course.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python with files, folders and the standard library, including pathlib.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Ages 13 and up', note: 'Python certification preparation that tests exactly these details.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'From first scripts to tidy programs that handle many files safely.'
      },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Automating folders of reports, exports and downloads.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The City of Whitehorse in the Census',
      h2: 'Townhouses, graduates and six stations',
      intro: 'Figures for the City of Whitehorse local government area (ABS code LGA26980) from the 2021 Census QuickStats, compared with Victoria. Box Hill, inside the council area, has a separate page.',
      body: [
        {
          kind: 'table',
          caption: 'City of Whitehorse, 2021 Census headline counts',
          head: ['Headline', 'City of Whitehorse'],
          rows: [
            ['Residents', '169,346'],
            ['Median age', '39'],
            ['Families', '45,342'],
            ['Private dwellings', '71,521'],
            ['Average people per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'City of Whitehorse against Victoria',
          head: ['Measure', 'City of Whitehorse', 'Victoria'],
          rows: [
            ['Semi-detached, row or terrace houses and townhouses', '24.1% (15,216)', '13.9%'],
            ['Adults with a bachelor degree or higher', '41.7% (59,350)', '29.2%'],
            ['Workers employed as professionals', '33.4% (27,848)', '25.0%'],
            ['Workers who took the train', '2.5% (2,118)', '1.6%'],
            ['Workers who drove to work', '40.6% (33,835)', '49.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Area', p: 'The bureau puts the council area at 64.28 square kilometres in Melbourne\'s east.' },
            { h3: 'School age', p: 'Residents aged 10 to 14 numbered 9,692 at the Census, 5.7% of the population.' },
            { h3: 'Lockdown note', p: 'The Census was held in the August 2021 lockdown, when 28,574 employed residents, 34.3%, worked from home.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau makes small random adjustments to Census cells for privacy, so components may not match totals. Each figure is quoted as published; we never total the parts ourselves.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Find the files before you read them',
      intro: 'We downloaded the seven yearly station-entry files, FY18-19 to FY24-25, into one folder and tried seven glob patterns with Python\'s pathlib, running Python 3.13 on Windows. Then we read every file and pulled out the stations inside the council boundary.',
      body: [
        {
          kind: 'table',
          caption: 'What each pattern found (our run on the published file names)',
          head: ['Pattern', 'Files found', 'What happened'],
          rows: [
            ['*.csv', '7', 'Everything, which was right here'],
            ['*2024*', '2', 'FY23-24 and FY24-25 both contain 2024'],
            ['*fy_2024_*', '1', 'FY24-25, the year starting in 2024'],
            ['*_2024.csv', '1', 'FY23-24, the year ending in 2024'],
            ['Full name with fy_20??_20??', '7', 'Exact shape, safe to count'],
            ['*FY*', '7', 'Matched lower-case fy, because Windows ignores case'],
            ['*FY* with case_sensitive=True', '0', 'The same pattern, made strict']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Stations inside the City of Whitehorse, entries (Department of Transport and Planning, rounded to 50)',
          head: ['Station', 'FY18-19', 'FY24-25'],
          rows: [
            ['Blackburn', '1,484,400', '1,206,950'],
            ['Mitcham', '1,241,550', '925,550'],
            ['Nunawading', '1,148,000', '758,050'],
            ['Heatherdale', '605,900', '448,700'],
            ['Laburnum', '414,700', '316,900'],
            ['Mont Albert', '260,850', 'Not in the file']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The missing station',
              p: 'Mont Albert appears in every file up to FY22-23, with 92,300 entries that year, and in none after. A loop expecting every station in every year stops with an error.'
            },
            { h3: 'An extra row', p: 'Six files hold 222 stations; FY22-23 holds 223. A script that assumes a fixed row count would quietly misalign.' },
            {
              h3: 'Hidden bytes',
              p: 'Only the FY24-25 file begins with a byte order mark, so its first column name reads differently unless the file is opened with the right encoding.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'When a plain list is better',
          p: 'For seven files that never change, typing the seven names into a list is simpler than any pattern and just as correct. Globbing earns its place when an eighth file arrives next year, and only if the script also checks that it found the number of files it expected.'
        },
        {
          kind: 'p',
          text: 'The patterns, counts and station table come from our own script on 10 October 2026; the figures inside the files are the department\'s, quoted as published. Box Hill, the council\'s busiest station, is covered on its own page.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The Python behind it',
      h2: 'Three habits for finding files safely',
      intro: 'Python\'s pathlib treats paths as objects, and its glob method finds files that match a pattern. Most bugs come from the pattern, not the code.',
      body: [
        {
          kind: 'table',
          caption: 'Habits that would have caught every problem above',
          head: ['Habit', 'In pathlib', 'Catches'],
          rows: [
            ['Match the whole name shape', 'glob with ? for each digit', 'Two years matching one search'],
            ['Count what you found', 'Compare len(files) with the number expected', 'A file missing or added'],
            ['Say how case should work', 'case_sensitive=True, added in Python 3.12', 'A pattern that only works on Windows']
          ]
        },
        {
          kind: 'p',
          text: 'The Python documentation says glob follows the platform\'s rules unless told otherwise: typically case-sensitive on POSIX systems such as Linux, and case-insensitive on Windows. A script written on a Windows laptop can therefore pass every test and then find nothing on a Linux server.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Name and sort a folder of drawings by date, then find all the ones from one month.' },
            { h3: 'Secondary students', p: 'Write the discovery step for the seven station files and make it fail loudly if the count is wrong.' },
            { h3: 'Adults', p: 'Point pathlib at a downloads folder of monthly exports and build one tidy table from them.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the City of Whitehorse',
      h2: 'Forty-nine schools and the 2027 year',
      intro: 'More from the state files for the council area.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Schools',
              p: 'The 2025 school locations file places 49 open schools inside the council boundary: 31 primary, 9 secondary, 4 combined, 4 specialist and 1 language school.'
            },
            { h3: 'By sector', p: 'Of the 49, 33 are government schools, 10 Catholic and 6 independent.' },
            { h3: 'Station recovery', p: 'Mitcham\'s 925,550 entries in FY24-25 were 74.5% of its FY18-19 figure, by our calculation.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 4, 2027',
          p: 'Victorian government schools run Term 4 from Monday 4 October to Friday 17 December 2027; students start the year on Thursday 28 January.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorted folders to Python pipelines',
    intro: 'Age bands are a starting point only; the free first class confirms the level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Projects with saved files, lists and simple sorting.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Reading a file, looping over lines and printing results.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with real data',
        p: 'Folders of public files, pathlib and careful checks.',
        courses: ['python-complete-masterclass-teens', 'pcep-pcap-python-certification-course']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Automation over many files, built to fail loudly.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI writes the file-reading code, why should a City of Whitehorse learner check the pattern?',
    intro: 'Because the pattern decides which data the program ever sees, and a wrong one fails without a sound.',
    p1: 'Ask an assistant to "load the 2024 station file" and a natural draft globs for 2024. It runs, it returns data, and it has silently mixed two financial years together. On another machine, a pattern written in capitals might return nothing at all.',
    p2: 'A learner who has watched one pattern find two files, another find the wrong one, and a third behave differently on Windows will check what an AI\'s code actually picked up. That check takes one line and saves whole reports.',
    closer: 'The City of Whitehorse learner who counts the files is the one whose results can be trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons across the City of Whitehorse',
    intro: 'Lessons are live on screen, so learners join from home in any suburb of the council area.',
    cells: [
      { h3: 'Shared code', p: 'Learners open a link, share a screen and the teacher works through the code with them live.' },
      { h3: 'State terms', p: 'Courses follow Victoria\'s four school terms and pause in the holidays between.' },
      { h3: 'A first class', p: 'The free trial is a real lesson; afterwards we recommend a course and a fixed weekly time.' },
      { h3: 'Group size', p: 'Five to ten learners in each group, sorted by level rather than location.' },
      { h3: 'Twice a week', p: 'Two lessons a week, about eight a month, with breaks agreed beforehand.' },
      {
        h3: 'Teachers in India',
        p: 'Teachers work from India, so a 5pm Whitehorse lesson in summer is 11:30am India time, and 12:30pm after daylight saving ends.'
      }
    ],
    spec: {
      title: 'Melbourne time',
      p: 'Melbourne\'s daylight saving period runs from Sunday 4 October 2026 to Sunday 4 April 2027. India does not adjust its clocks, so we confirm every lesson time in Melbourne time.'
    }
  },
  fees: {
    h2: 'City of Whitehorse class fees',
    intro: 'Three prices, in plain terms.',
    first: 'The first lesson is free and ends with an honest view of where to go next.',
    group: 'A month of group lessons, usually eight, in a group of five to ten at one level.',
    private: 'About eight one-to-one lessons each month.',
    closer: 'Outside India we bill in US dollars, so a Whitehorse family pays the same as families anywhere else abroad. Payment starts only once the trial has agreed a course and time; holidays, missed lessons and format switches are explained on the pricing page.'
  },
  reviewsH2: 'Google reviews of our teaching',
  book: {
    h2: 'Book a free City of Whitehorse class',
    intro: 'Share the learner\'s age and a favourite subject. An eight-year-old might start by sorting a folder of Scratch projects; a Year 10 student might start by writing the glob for the station files.',
    success: 'Thank you. Our team will contact you soon about a City of Whitehorse class.'
  },
  faq: {
    h2: 'City of Whitehorse coding and Python questions',
    intro: 'What City of Whitehorse parents and adult learners want to know.',
    items: [
      {
        q: 'How many people live in the City of Whitehorse?',
        a: 'The 2021 Census QuickStats for the City of Whitehorse record 169,346 residents, 45,342 families and 71,521 private dwellings.'
      },
      {
        q: 'What is pathlib in Python?',
        a: 'A standard library module that represents file paths as objects, with methods to join, inspect and search them, including glob for matching patterns.'
      },
      {
        q: 'What does glob do?',
        a: 'It finds files whose names match a pattern, where an asterisk stands for any run of characters and a question mark for exactly one. The right pattern finds every file you want and nothing else.'
      },
      {
        q: 'What did the Whitehorse file project show?',
        a: 'A search for 2024 found two yearly files, a search for names ending _2024 found the year ending in June 2024, and on Windows a pattern in capitals matched all seven lower-case names.'
      },
      {
        q: 'Do children need to know about files to start coding?',
        a: 'No. Younger children start with Scratch, where projects save themselves. Files and folders come in once they move to typed Python.'
      },
      {
        q: 'Will learners write Python on their own computer?',
        a: 'Yes, where possible, because working with real folders on their own machine is part of the skill. The teacher helps set it up in the first lessons.'
      },
      {
        q: 'Do you teach from a Whitehorse location?',
        a: 'No. All lessons are live online, we have no Australian premises, and the phone number shown is Indian.',
        boiler: true
      },
      {
        q: 'How much do Python classes cost for City of Whitehorse learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for one-to-one lessons. Course, format and time are agreed before you pay.',
        boiler: true
      },
      {
        q: 'How are groups made up?',
        a: 'Five to ten learners at a matching level, pace and goal; private lessons fill the gap when no group time works.',
        boiler: true
      },
      {
        q: 'Can adults learn Python with you?',
        a: 'Yes. Adult learners study in adult groups or privately, often to automate a weekly job built around folders of files.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for City of Whitehorse learners',
    html: 'Inside the council area, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne">Box Hill</a> has its own page on AI agents. Families with younger children can read about <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding in Melbourne</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'City of Whitehorse and Melbourne',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne', label: 'Box Hill' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-whte .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 3.5vw, 2.75rem); }
.cg-root.cg-whte .cg-hero h1 { font-weight: 710; letter-spacing: -0.017em; line-height: 1.07; }
.cg-root.cg-whte .cg-capsule { border-top: 1px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.75rem 0; }
.cg-root.cg-whte .cg-eyebrow { letter-spacing: 0.14em; font-weight: 660; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-whte .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.011em; }
.cg-root.cg-whte .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.7rem); }
.cg-root.cg-whte .cg-table caption { font-weight: 660; text-align: left; }
.cg-root.cg-whte .cg-table td:first-child { font-family: var(--font-mono, monospace); font-size: 0.9em; }
.cg-root.cg-whte .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-whte .cg-callout { border-left-width: 4px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'City of Whitehorse, ABS Census 2021 QuickStats, Whitehorse (C) local government area LGA26980 (read 10 October 2026): 169,346 people; median age 39; 45,342 families; 71,521 private dwellings; 2.6 people per household; semi-detached, row or terrace house, townhouse 24.1% (15,216; Victoria 13.9%); bachelor degree or higher 41.7% (59,350; Victoria 29.2%); professionals 33.4% (27,848; Victoria 25.0%); train to work 2.5% (2,118; Victoria 1.6%); car as driver 40.6% (33,835; Victoria 49.9%); aged 10-14 5.7% (9,692); worked at home 34.3% (28,574, lockdown Census day). ABS LGA area 64.2801 square kilometres. Stations inside the boundary in FY24-25: Box Hill, Blackburn 1,206,950, Mitcham 925,550, Nunawading 758,050, Heatherdale 448,700, Laburnum 316,900; Mont Albert in files FY18-19 to FY22-23 only (92,300 in FY22-23). Victorian School Locations 2025: 49 open schools inside the boundary (Primary 31, Secondary 9, Pri/Sec 4, Special 4, Language 1; Government 33, Catholic 10, Independent 6). Victorian 2027: students start Thursday 28 January; Term 4 Monday 4 October to Friday 17 December. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'pathlib and glob discovery, Python 3.13 on Windows. Seven official files annual_metropolitan_train_station_entries_fy_YYYY_YYYY.csv (FY18-19 to FY24-25). Patterns: *.csv 7; *2024* 2 (2023_2024, 2024_2025); *fy_2024_* 1 (2024_2025); *_2024.csv 1 (2023_2024); annual_metropolitan_train_station_entries_fy_20??_20??.csv 7; *FY* 7 (case-insensitive on Windows); *FY* with case_sensitive=True 0; *.CSV 7. Name order equals year order. Rows: 222 in six files, 223 in FY22-23. FY24-25 starts with a UTF-8 byte order mark. Whitehorse stations FY18-19 vs FY24-25: Blackburn 1,484,400 / 1,206,950; Mitcham 1,241,550 / 925,550 (74.5%); Nunawading 1,148,000 / 758,050; Heatherdale 605,900 / 448,700; Laburnum 414,700 / 316,900; Mont Albert 260,850 FY18-19, 92,300 FY22-23, absent after. Python docs (3.12 pathlib): Path.glob case_sensitive added in 3.12; default follows platform rules, typically case-insensitive on Windows. Script: scratchpad au/b7/whte.py.',
    requiredMentions: ['169,346', '45,342', '71,521', '15,216', '1,206,950', '925,550', '316,900', 'Mont Albert', '92,300', '64.28 square kilometres'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Whitehorse (C) local government area (LGA26980).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA26980'
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
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (LGA26980 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Python documentation, pathlib: Path.glob case_sensitive parameter (changed in version 3.12) and platform casing rules.',
        url: 'https://docs.python.org/3.12/library/pathlib.html'
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
      'Why Mont Albert stops appearing after FY22-23: not claimed.',
      'Why FY22-23 has one more row: not claimed.',
      'Box Hill suburb figures: not repeated; it has its own page.',
      'School names: not used on this council page; counted only.',
      'A total of entries across stations: not computed; published parts are never summed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Whitehorse City Council, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
