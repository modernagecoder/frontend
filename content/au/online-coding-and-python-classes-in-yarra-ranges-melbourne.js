'use strict';
// Yarra Ranges, Melbourne (cg- district page, Australia cluster Phase 8, row 273). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page (ABS LGA27450, Shire of Yarra Ranges) under Melbourne and Victoria.
// Spine: save a Python dictionary of the Shire's five stations' entries (int year keys) to JSON and load it back;
// every lookup by year fails because keys came back as strings. Sets, tuples and dates refuse to save; NaN saves as
// invalid JSON.
// Data: DTP annual metropolitan station entries FY18-19 to FY24-25 (CC BY 4.0, rounded to 50); Victorian School
// Locations 2025 (CC BY 4.0). Our measurements (scratchpad au/b9/yrrg.py). Year-label convention FY24-25 -> 2025 is ours.
// Lesson family: JSON round-trip type loss; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'YARRA RANGES',
    label: 'Yarra Ranges, Melbourne',
    blurb: 'Online coding and Python classes for the Yarra Ranges, with a project on what a dictionary loses when it is saved to JSON and read back.'
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
  slug: 'online-coding-and-python-classes-in-yarra-ranges-melbourne',
  code: 'yrrg',
  accent: '#1F0D56',
  accentRationale: 'Yarra Ranges: a near-midnight indigo (hue 253.7), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, about 16:1 on white',
  pageType: 'city',
  place: {
    name: 'Yarra Ranges',
    eyebrow: 'Shire of Yarra Ranges, Melbourne, Victoria',
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
  routeLabel: 'Yarra Ranges, Melbourne',
  title: 'Online Coding and Python Classes in Yarra Ranges, Melbourne',
  description: 'Live online coding and Python classes for children, teens and adults across the Yarra Ranges, from Lilydale to the Dandenongs, in small groups or one to one.',
  ogDescription: 'Yarra Ranges Python classes, with a project: save 35 station figures to JSON, read them back, and watch all 35 year lookups fail.',
  twitterDescription: 'Coding and Python for Yarra Ranges learners, taught live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for the Yarra Ranges',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in the Shire of Yarra Ranges, taught live in English.'
  },
  h1: 'Online coding and Python classes in Yarra Ranges',
  capsuleQ: 'Why do online Python classes suit learners across the Yarra Ranges?',
  capsule: 'Because the Shire is large and spread out, and a live online class reaches Healesville and Belgrave as easily as Lilydale. A teacher codes alongside each learner, from Scratch at six to Python with real data. The Shire of Yarra Ranges counted 156,068 residents in the 2021 Census.',
  lead: 'Python programs often save their data as JSON so another program, or tomorrow\'s run, can read it. JSON looks like a Python dictionary, but it is not one. We saved seven years of entries for the Shire\'s five railway stations and read them straight back. Every single lookup by year failed.',
  wa: 'Hello Modern Age Coders, I would like a free Python or coding class for a learner in the Yarra Ranges.',
  picks: {
    eyebrow: 'Course picks for the Yarra Ranges',
    h2: 'Courses that take data in and out safely',
    intro: 'The JSON project needs dictionaries, files and a careful eye for types. These courses build them; the free trial lesson sets the starting level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Core Python, including dictionaries, files and the json module.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'From first scripts to well-structured programs that store and share data.'
      },
      { course: 'python-web-development-django-flask-course', band: 'Secondary and adult', note: 'Web apps that send and receive JSON every day.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Friendly first Python, with saving and loading small game files.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The Yarra Ranges in the Census',
      h2: 'Houses, hills and long drives to work',
      intro: 'Headline 2021 Census QuickStats for the Shire of Yarra Ranges (ABS code LGA27450), with Victoria for comparison.',
      body: [
        {
          kind: 'table',
          caption: 'Shire totals from the 2021 Census',
          head: ['What was counted', 'Yarra Ranges'],
          rows: [
            ['Residents', '156,068'],
            ['Median age', '40'],
            ['Families', '43,981'],
            ['Private dwellings', '61,491'],
            ['People per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The Shire against the state average',
          head: ['Measure', 'Shire', 'Victorian total'],
          rows: [
            ['Separate houses', '93.7% (52,325)', '73.4%'],
            ['Workers who drove to work', '55.3% (44,209)', '49.9%'],
            ['Workers who took the train to work', '0.7% (559)', '1.6%'],
            ['Adults with a bachelor degree or higher', '21.4% (27,208)', '29.2%'],
            ['Workers employed as professionals', '19.6% (15,672)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children and teenagers', p: 'The Census counted 9,765 residents aged 5 to 9 and 9,963 aged 10 to 14.' },
            { h3: 'Home on Census day', p: 'Under the August 2021 lockdown, 22.5% of employed residents, 17,963 people, worked from home.' },
            { h3: 'A very large shire', p: 'The ABS boundary covers about 2,468 square kilometres, far more than any inner Melbourne council.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau adds small random changes to Census cells for privacy, so we show every number as published and never add published numbers together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'What changes when a dictionary goes through JSON?',
      intro: 'We built a dictionary of FY18-19 to FY24-25 entries for Belgrave, Tecoma, Upwey, Lilydale and Mooroolbark, keyed by station and then by year as a whole number (2019 to 2025, our label for each financial year). That is 35 cells. Then we saved it with json.dumps and read it back with json.loads.',
      body: [
        {
          kind: 'table',
          caption: 'What survived the round trip (our measurement)',
          head: ['What we saved', 'What came back', 'Effect'],
          rows: [
            ['Year keys as integers', 'Year keys as strings', 'All 35 lookups such as data[\'Lilydale\'][2025] fail'],
            ['A ratio as a float', 'The same float', 'Exact match, no change'],
            ['A ratio of NaN', 'The text NaN', 'Python reads it, but strict JSON readers reject it'],
            ['The whole table', '616 characters', 'Small enough to read by eye']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Things json.dumps refused to save (our measurement)',
          head: ['Python value', 'Error message'],
          rows: [
            ['A set of station names', 'Object of type set is not JSON serializable'],
            ['A tuple used as a key', 'keys must be str, int, float, bool or None, not tuple'],
            ['A date', 'Object of type date is not JSON serializable']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'JSON keys are text', p: 'The format only allows string keys, so Python quietly turns 2025 into "2025" when saving and does not turn it back.' },
            { h3: 'Loud failures help', p: 'Sets, tuples and dates fail immediately, which is good: the programmer must choose how to store them.' },
            { h3: 'Convert on the way in', p: 'After loading, rebuild integer keys deliberately, or store years as values in a list of records instead of as keys.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'The numbers inside the file',
          p: 'Lilydale recorded 701,900 entries in FY18-19 and 512,300 in FY24-25; Mooroolbark went from 722,150 to 569,250, 78.8% of the earlier figure; little Tecoma from 75,650 to 47,250. Those figures survive JSON perfectly. Only the shape of the dictionary around them changes, which is why the bug is easy to miss.'
        },
        {
          kind: 'p',
          text: 'Entry figures are the Department of Transport and Planning\'s, rounded to 50. Labelling FY24-25 as 2025 is our convention. The round trip, the failed lookups and the error messages are our own measurement, using Python\'s standard json module.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Python habits',
      h2: 'Saving data so it comes back the same',
      intro: 'Files and APIs carry JSON everywhere. These habits keep a program\'s data intact on the way out and back in.',
      body: [
        {
          kind: 'table',
          caption: 'Habits, with the Yarra Ranges example',
          head: ['Habit', 'In code', 'In the station project'],
          rows: [
            ['Round-trip test', 'Assert loads(dumps(x)) == x', 'Fails at once on the integer keys'],
            ['Prefer records', 'A list of small dictionaries', '{"station": "Upwey", "year": 2025, "entries": 97850}'],
            ['Convert explicitly', 'int(key) after loading', 'Year keys rebuilt in one line'],
            ['Avoid NaN in files', 'Use null for missing', 'allow_nan=False makes Python refuse it']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Save a Scratch-style game score to a file, reload it and check it is still a number.' },
            { h3: 'Secondary learners', p: 'Run the round trip, find every failing lookup and fix the structure.' },
            { h3: 'Adults', p: 'Write round-trip tests for the JSON files that work scripts already produce.' }
          ]
        },
        {
          kind: 'p',
          text: 'Upwey shows why the structure matters: 157,050 entries in FY18-19 and 97,850 in FY24-25, 62.3% of the earlier figure. A dashboard that silently fails to find 2025 would show nothing at all for that change.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around the Yarra Ranges',
      h2: 'Rail ends and seventy-eight schools',
      intro: 'Background from rail entry statistics, the state register of schools and the 2027 school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Stations at line ends',
              p: 'Our boundary check places Belgrave, Tecoma and Upwey on one line and Lilydale and Mooroolbark on another; no other metropolitan station falls inside the boundary.'
            },
            {
              h3: 'Seventy-eight schools',
              p: 'The 2025 list gives 78 schools a Yarra Ranges address: 56 primary, 10 secondary, 8 combined and 4 special. Healesville High School, Upwey High School and Lilydale Heights College are government secondaries.'
            },
            {
              h3: 'Term 1, 2027',
              p: 'From the hills to the valley, government students return for Term 1 of 2027 on Thursday 28 January and leave for holidays on Thursday 25 March.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Shire-wide figures',
          p: 'The Census numbers on this page cover the whole Shire of Yarra Ranges, including the hills, the valley towns and the suburbs near Lilydale; individual towns have their own QuickStats.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From saving a score to sharing data',
    intro: 'Bands overlap; the free trial decides the real starting point.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch projects',
        p: 'Games with lists and saved high scores, built step by step.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Variables, lists, dictionaries and the first files.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'JSON, CSV and public datasets handled carefully.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Programs that share data',
        p: 'Web apps, APIs and scripts that exchange JSON reliably.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-web-development-django-flask-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools write JSON code easily. Why learn it yourself in the Yarra Ranges?',
    intro: 'Because AI-written code usually saves the data correctly and then reads it back with the wrong key type, and nothing complains until a lookup returns nothing.',
    p1: 'Ask an assistant to "cache the station data in a JSON file" and you will get a neat json.dump and json.load. The program runs. Later, data[\'Upwey\'][2025] raises a KeyError, or worse, a .get with a default hides it and a chart shows zero. Spotting why requires knowing that JSON keys are always text.',
    p2: 'Learners who have seen all 35 lookups fail add a round-trip test to anything that touches a file. That small habit catches the same mistake in AI-generated code before it reaches anyone else.',
    closer: 'The Yarra Ranges learner who tests the round trip is the one whose saved data can be trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'No drive needed, from the hills to the valley',
    intro: 'Lessons happen on screen, so a learner in Warburton joins the same way as one in Mooroolbark.',
    cells: [
      { h3: 'Coding together live', p: 'Teacher and learner edit the same file and run it together.' },
      { h3: 'Victorian terms', p: 'Plans follow state school terms and stop for the holidays.' },
      { h3: 'A full first lesson', p: 'The free trial teaches real content and ends with a recommendation.' },
      { h3: 'Groups of five to ten', p: 'Learners matched by level and pace, sometimes from other states.' },
      { h3: 'Two lessons each week', p: 'Fixed times, around eight lessons a month, with breaks planned.' },
      { h3: 'Teachers in India', p: 'A 5pm Yarra Ranges lesson in daylight saving starts at 11:30am India time, and at 12:30pm there after April.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Melbourne clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India keeps one time all year. Lesson times are set in Melbourne time.'
    }
  },
  fees: {
    h2: 'Yarra Ranges class fees',
    intro: 'Three simple prices.',
    first: 'The first lesson is free and closes with an honest recommendation.',
    group: 'A month of group lessons, usually eight, with five to ten learners at a matched level.',
    private: 'About eight lessons a month with one teacher.',
    closer: 'Payments from outside India are made in US dollars. Nothing is billed before the trial lesson, and only after a course and a weekly slot are chosen; for school holidays, missed lessons or a change of format, see the pricing page.'
  },
  reviewsH2: 'Google reviews from families and learners',
  book: {
    h2: 'Book a first Yarra Ranges lesson',
    intro: 'Give us the age of the learner and a favourite subject or pastime. Older learners commonly begin by writing the station table to a JSON file and loading it again; younger ones often start with a Scratch game that remembers its top score.',
    success: 'Thank you. Our team will be in touch soon about a Yarra Ranges lesson.'
  },
  faq: {
    h2: 'Yarra Ranges Python and coding questions',
    intro: 'Questions families and adults in the Yarra Ranges often ask.',
    items: [
      {
        q: 'What is the population of the Yarra Ranges?',
        a: 'The 2021 Census QuickStats record 156,068 residents in the Shire of Yarra Ranges, with a median age of 40 and 43,981 families.'
      },
      {
        q: 'What is JSON?',
        a: 'JSON is a plain-text format for storing and sending data, used by files, websites and APIs. It has strings, numbers, true, false, null, lists and objects with text keys.'
      },
      {
        q: 'Why do integer keys change after json.loads?',
        a: 'JSON only allows text keys, so Python writes the integer 2025 as "2025". When the file is loaded, the key stays a string, and lookups using the integer fail.'
      },
      {
        q: 'What did the Yarra Ranges JSON project show?',
        a: 'After saving 35 station-year figures and reading them back, all 35 integer year lookups failed. Sets, tuple keys and dates refused to save, and NaN saved as text that strict JSON readers reject.'
      },
      {
        q: 'When should children start Python?',
        a: 'Most start with Scratch from six and move to Python around nine to twelve, depending on reading and typing.'
      },
      {
        q: 'Are Copilot Studio agents taught in group classes?',
        a: 'No. Copilot Studio lessons are private only; group learners in the Yarra Ranges code their agents in Python.'
      },
      {
        q: 'Is there a classroom in the Yarra Ranges?',
        a: 'No. Every lesson is live online, we have no premises in Australia, and the phone number we list is Indian.',
        boiler: true
      },
      {
        q: 'How much do classes cost in the Yarra Ranges?',
        a: 'The first lesson is free. Group lessons then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Five to ten learners, matched by level, pace and goal. When no group suits the learner\'s schedule, one-to-one lessons are offered.',
        boiler: true
      },
      {
        q: 'What internet connection is needed?',
        a: 'A steady home connection that handles a video call is enough; the code runs in a browser or on the learner\'s own computer.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Yarra Ranges learners',
    html: 'Closer to the city, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne">Box Hill</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-doncaster-melbourne">Doncaster</a> have their own pages. Hills families can also browse <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">all of Melbourne</a> or <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria as a whole</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Yarra Ranges and Melbourne',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne', label: 'Box Hill' },
    { href: '/online-coding-and-python-classes-in-doncaster-melbourne', label: 'Doncaster' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-yrrg .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-yrrg .cg-hero h1 { font-weight: 700; letter-spacing: -0.012em; line-height: 1.12; }
.cg-root.cg-yrrg .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-yrrg .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-yrrg .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.008em; }
.cg-root.cg-yrrg .cg-grid-3 { gap: clamp(0.85rem, 2.4vw, 1.8rem); }
.cg-root.cg-yrrg .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.015em; }
.cg-root.cg-yrrg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-yrrg .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-yrrg .cg-callout { border-left-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Shire of Yarra Ranges, ABS Census 2021 QuickStats, Yarra Ranges LGA27450 (read 11 October 2026): 156,068 people; median age 40; 43,981 families; 61,491 private dwellings; 2.7 per household; separate house 93.7% (52,325; Victoria 73.4%); drove 55.3% (44,209; Victoria 49.9%); train 0.7% (559; Victoria 1.6%); bachelor or higher 21.4% (27,208); professionals 19.6% (15,672); worked at home 22.5% (17,963, lockdown); aged 5-9 9,765; aged 10-14 9,963. ABS area 2,468.2052 sq km. Victorian School Locations 2025: 78 schools (56 primary, 10 secondary, 8 Pri/Sec, 4 special); Healesville HS, Upwey HS, Lilydale Heights College named. 5 stations inside boundary by our point-in-polygon check (Belgrave, Tecoma, Upwey, Lilydale, Mooroolbark). FY18-19 -> FY24-25: Belgrave 389,750 -> 283,100; Tecoma 75,650 -> 47,250; Upwey 157,050 -> 97,850; Lilydale 701,900 -> 512,300; Mooroolbark 722,150 -> 569,250. Vic 2027 Term 1: 28 January to 25 March. DST 4 Oct 2026 to 4 Apr 2027 (IANA).',
    localProject: 'JSON round-trip type loss. Dictionary of 5 stations x 7 years = 35 int-keyed cells (FY24-25 labelled 2025, our convention). After json.dumps/json.loads, keys are str; all 35 int lookups fail. json.dumps errors: set -> Object of type set is not JSON serializable; tuple key -> keys must be str, int, float, bool or None, not tuple; date -> Object of type date is not JSON serializable. NaN written as NaN (invalid strict JSON). Float ratio round-trips exactly. Serialized table 616 characters. Script: scratchpad au/b9/yrrg.py.',
    requiredMentions: ['156,068', '43,981', '52,325', '9,963', '35 lookups', '701,900', '157,050', 'Healesville High School', 'Tecoma'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Yarra Ranges local government area (LGA27450).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA27450'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) LGA boundary LGA27450, geo.abs.gov.au map service, used for our point-in-boundary checks.',
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
        claim: 'Python documentation, json module: keys in key/value pairs of JSON are always of type str; converting a dictionary to JSON coerces keys to strings.',
        url: 'https://docs.python.org/3/library/json.html'
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
      'Any cause for the change in entries at any station: not claimed.',
      'A total of entries across Yarra Ranges stations: not computed; published parts are never summed.',
      'That the Shire is served only by these five stations: not claimed; the count is stations inside the boundary by our check.',
      'Names of special or non-government schools: not used.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Yarra Ranges Council, the Department of Education or the Department of Transport and Planning.'
    ]
  }
};
