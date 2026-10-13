'use strict';
// Maroondah, Melbourne (cg- district page, Australia cluster Phase 8, row 265). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page (ABS LGA24410, Maroondah City Council) under Melbourne and Victoria.
// Spine: count Maroondah's rows in a 56.6 MB train timetable file by streaming it with a generator instead of loading
// it whole; tracemalloc peak memory and timings, plus the Heatherdale boundary disagreement between two data sets.
// Scripts: scratchpad au/b8/mrdh.py and mrdh2.py. Lesson family: lazy streaming with generators; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MAROONDAH',
    label: 'Maroondah, Melbourne',
    blurb: 'Online coding and Python classes for Maroondah, with a project that streams a 56.6 MB timetable file without filling memory.'
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
  slug: 'online-coding-and-python-classes-in-maroondah-melbourne',
  code: 'mrdh',
  accent: '#58429E',
  accentRationale: 'Maroondah: a clear amethyst violet (hue 254) chosen by hand at least 10 RGB units from 1,456 accent declarations in content, the shared stylesheets and the claims log, 7.8:1 on white and 6.3:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Maroondah',
    eyebrow: 'Maroondah City Council, Melbourne, Victoria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Maroondah City Council' },
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
  routeLabel: 'Maroondah, Melbourne',
  title: 'Online Coding and Python Classes in Maroondah, Melbourne',
  description: 'Live online coding and Python classes for Maroondah children, teenagers and adults: Scratch, Python, data files and AI, taught in small groups or one to one.',
  ogDescription: 'A Maroondah Python project: read a 688,380-row train timetable one line at a time, and watch peak memory drop from 90.1 MB to almost nothing.',
  twitterDescription: 'Maroondah online coding and Python classes, live, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Maroondah',
    description: 'Level-matched coding and Python lessons, including working with large data files, for children, teenagers and adults in Maroondah City Council, taught live online.'
  },
  h1: 'Online coding and Python classes in Maroondah',
  capsuleQ: 'What can a Maroondah student learn in an online Python class?',
  capsule: 'To write Python that copes with real files, not just classroom examples. In our Maroondah project, reading the state\'s train timetable file whole used 90.1 MB of memory at its peak; reading it line by line with a generator peaked at 0.035 MB and found the same 12,164 rows.',
  lead: 'The metropolitan train timetable that Victoria publishes contains a stop_times file of 688,380 rows, 56.6 MB on disk. We wanted only the rows for stations whose timetable points fall inside the ABS outline of Maroondah City Council: Ringwood, Ringwood East, Croydon, Heathmont and Heatherdale. A learner\'s first instinct is to read everything into a list. Python offers a lazier way, and measuring the difference is the lesson.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Maroondah.',
  picks: {
    eyebrow: 'Course picks for Maroondah',
    h2: 'Python courses for every stage',
    intro: 'The courses below all reach real files and real data. A free first lesson tells us where the learner should begin.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python fundamentals through files, generators and clean code.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Reading, filtering and charting public data sets in Python.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'From beginner Python to iterators, generators and profiling.'
      },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Practical data analysis with large files for work and study.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Maroondah, 2021 Census',
      h2: 'Maroondah in figures',
      intro: 'Copied on 10 October 2026 from the ABS QuickStats page for Maroondah (LGA24410), 2021 Census.',
      body: [
        {
          kind: 'table',
          caption: 'Maroondah City Council, headline counts',
          head: ['Count', 'Value'],
          rows: [
            ['People', '115,043'],
            ['Median age', '39'],
            ['Families', '31,842'],
            ['Private dwellings', '46,870'],
            ['People per household (average)', '2.6'],
            ['Vehicles per dwelling (average)', '1.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Maroondah and Victoria side by side',
          head: ['Measure', 'Maroondah', 'Victoria'],
          rows: [
            ['Separate houses (of dwellings)', '87.2% (37,499)', '73.4%'],
            ['Flats or apartments (of dwellings)', '4.0% (1,711)', '12.1%'],
            ['Bachelor degree or above', '30.1% (28,262)', '29.2%'],
            ['Professionals (of employed people)', '26.5% (15,617)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children 5 to 9', p: 'Maroondah recorded 7,251 residents in this age band, 6.3% of the council.' },
            { h3: 'Children under 5', p: '6,862 residents, 6.0%, were aged 0 to 4.' },
            {
              h3: 'Lockdown caveat',
              p: 'The Census was held while Melbourne was in lockdown. 28.7% of Maroondah workers (16,913) worked at home that day, a figure tied to those restrictions.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Published percentages are rounded and small cells are randomly adjusted by the ABS for privacy. We reproduce the numbers exactly and do not combine categories into new totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Reading 688,380 rows without holding them',
      intro: 'First we found the 82 stop points (platforms, entrances and other station nodes) that fall inside the ABS outline of Maroondah. Then we scanned stop_times for rows at those points in two ways: readlines() into a list, and a plain for loop over the open file, which yields one line at a time. tracemalloc recorded the peak memory of each.',
      body: [
        {
          kind: 'table',
          caption: 'Same answer, very different memory (our measurements)',
          head: ['Approach', 'Rows found', 'Peak memory', 'Median time, 3 runs'],
          rows: [
            ['Read the whole file into a list', '12,164', '90.1 MB', '1.1 s'],
            ['Stream line by line', '12,164', '0.035 MB', '0.92 s'],
            ['First 200,000 lines into a list (islice)', '4,971', '25.67 MB', 'not timed'],
            ['First 200,000 lines streamed (islice)', '4,971', '0.035 MB', 'not timed']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Timetable rows at Maroondah stations in the feed (our count)',
          head: ['Station', 'Rows in stop_times'],
          rows: [
            ['Ringwood', '3,787'],
            ['Heatherdale', '2,995'],
            ['Heathmont', '1,802'],
            ['Croydon', '1,790'],
            ['Ringwood East', '1,790']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Memory, not speed',
              p: 'Streaming was only a little quicker here, 0.92 s against 1.1 s. The real gain is memory: the list version holds every line at once, while the stream holds one.'
            },
            {
              h3: 'When a list is fine',
              p: 'A 56.6 MB file fits easily on a laptop, and a list lets you loop twice or jump to row 500. For a file this size, the simple version is a reasonable choice.'
            },
            {
              h3: 'When streaming wins',
              p: 'Feeds grow, and servers have less memory than laptops. Code written as a stream keeps working when the file is ten times bigger, without a single change.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Two data sets, one station, two answers',
          p: 'Heatherdale\'s two platform points in the timetable feed fall 62 m and 86 m inside the ABS outline of Maroondah by our calculation. The same station\'s point in the patronage file sits about 50 m outside it. Which council a boundary station "belongs" to depends on whose coordinates you use.'
        },
        {
          kind: 'p',
          text: 'Rows count every scheduled stop in the feed downloaded on 10 October 2026, across all its service days, so they are not trains per day. Taking just the first 200,000 lines with islice found 4,971 of the 12,164 rows, a quick way to test code before the full run.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Generators in plain words',
      h2: 'Lazy by design',
      intro: 'A Python file object is already an iterator. Looping over it reads one line, hands it over, and forgets it.',
      body: [
        {
          kind: 'table',
          caption: 'Tools in this exercise',
          head: ['Tool', 'What it does here'],
          rows: [
            ['for line in f', 'Reads the file one line at a time.'],
            ['A generator expression', 'Filters lines without building a list.'],
            ['itertools.islice', 'Takes only the first N lines, for quick tests.'],
            ['tracemalloc', 'Reports the peak memory a block of code used.']
          ]
        },
        {
          kind: 'p',
          text: 'The pattern is short enough to remember: open the file, loop, keep only the count. Learners then wrap it in a function that yields matching rows, so the next step of a pipeline can consume them one by one.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger coders', p: 'Read a story one page at a time instead of photocopying the whole book first, then do it in Scratch with a list.' },
            { h3: 'Secondary students', p: 'Measure both versions with tracemalloc and explain the difference in a sentence.' },
            { h3: 'Adult learners', p: 'Convert a script that loads a big export into one that streams it.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Maroondah facts',
      h2: 'Schools and trains in Maroondah',
      intro: 'Taken from the 2025 school locations file and the station entries file for FY24-25.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: '23 government schools', p: 'The 2025 file shows 17 primary, 5 secondary and 1 specific-purpose government school in Maroondah.' },
            {
              h3: 'Ringwood leads',
              p: 'Ringwood recorded 1,514,250 entries in FY24-25, ahead of Croydon, Ringwood East and Heathmont among stations inside the outline.'
            },
            { h3: '2027 Term 1', p: 'Students at Victorian government schools return on Thursday 28 January 2027, and the term ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Area covered',
          p: 'This page uses the ABS boundary of Maroondah City Council, about 61.4 square kilometres. School addresses inside it include Ringwood, Croydon, Heathmont, Warranwood and Bayswater North.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one page at a time to pipelines',
    intro: 'A guide only. The free lesson places each learner properly.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Scratch',
        p: 'Loops, lists and stories built from blocks.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'Python starts',
        p: 'Typed code, loops and reading a small file.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Python with data',
        p: 'Files, generators and public data sets.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at scale',
        p: 'Profiling, large files and data analysis.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will AI tools make Python skills less useful for Maroondah students?',
    intro: 'Not for anyone who wants to know whether the code will survive real data.',
    p1: 'An AI assistant asked to "count the Ringwood rows" will often write the readlines() version, because it is the most common pattern online. On this file it works. On a file ten times larger, on a small server, it may not.',
    p2: 'A learner who has measured 90.1 MB against 0.035 MB recognises the pattern in generated code and asks for the streaming version. Knowing what to ask for is the skill AI cannot supply on its own.',
    closer: 'Maroondah learners who understand memory get far more out of AI tools.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Maroondah classes, live online',
    intro: 'Lessons run on a video call for learners in Ringwood, Croydon or anywhere in Maroondah.',
    cells: [
      { h3: 'Working together', p: 'The learner shares their screen and the teacher guides changes in their own code.' },
      { h3: 'Victorian terms', p: 'The class calendar follows state school terms, with holiday breaks.' },
      { h3: 'Free first session', p: 'One whole lesson with no charge, ending with our course advice.' },
      { h3: 'Small groups', p: 'Fifteen to twenty learners per group, matched on level rather than location.' },
      { h3: 'Twice weekly', p: 'Two regular lessons each week, near eight per month.' },
      { h3: 'Across time zones', p: 'A 3:30pm Maroondah lesson is 10am India time while Melbourne is on daylight saving, and 11am after it ends.' }
    ],
    spec: {
      title: 'Time zones',
      p: 'Melbourne daylight saving is in effect from Sunday 4 October 2026 to Sunday 4 April 2027. India has no daylight saving, so we always write lesson times in Melbourne time.'
    }
  },
  fees: {
    h2: 'Maroondah class fees',
    intro: 'Straightforward fees, the same for everyone.',
    first: 'Your first lesson is free and comes with honest advice.',
    group: 'In a group: a month of lessons, normally eight, with fifteen to twenty learners.',
    private: 'On their own: a month of lessons, normally eight, with a dedicated teacher.',
    closer: 'Maroondah families pay in US dollars. Nothing is charged until the trial confirms a course and weekly time; the pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'Our Google reviews from parents and learners',
  book: {
    h2: 'Book a free Maroondah class',
    intro: 'Send the learner\'s age and a couple of interests. A younger child might begin with a Scratch story; a teenager might stream the timetable file.',
    success: 'Thank you. We will be in touch soon about a Maroondah class.'
  },
  faq: {
    h2: 'Maroondah coding and Python questions',
    intro: 'What Maroondah parents and adult learners ask us.',
    items: [
      { q: 'How many people live in Maroondah?', a: 'Maroondah City Council had 115,043 residents at the 2021 Census, and the median age was 39.' },
      {
        q: 'What is a generator in Python?',
        a: 'A generator produces values one at a time, only when asked, instead of building a whole list in memory. Generator functions use the yield keyword.'
      },
      {
        q: 'What does itertools.islice do?',
        a: 'itertools.islice takes a slice of any iterator, such as the first 200,000 lines of a file, without reading the rest.'
      },
      {
        q: 'How do you measure memory use in Python?',
        a: 'The standard tracemalloc module traces memory allocations; get_traced_memory() returns the current and peak sizes for the code you run.'
      },
      { q: 'What age is right for Python?', a: 'Most children are ready for typed Python between nine and twelve. Scratch suits younger learners.' },
      { q: 'Do you teach data analysis to adults?', a: 'Yes. Adults can study Python and data analysis in groups or one to one.' },
      {
        q: 'Is there a Maroondah office?',
        a: 'No. Teaching is live online only; we have no office in Australia, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What are the fees for Maroondah classes?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How do you choose a group?',
        a: 'We match fifteen to twenty learners on level and pace, not age or suburb, and offer one-to-one lessons if no group time suits.',
        boiler: true
      },
      {
        q: 'Which council is Heatherdale station in?',
        a: 'It depends on the data. Timetable platform points fall just inside Maroondah\'s ABS outline and the patronage file point just outside, by our calculation.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Maroondah learners',
    html: 'Read the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> for the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> for the state, and <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for kids in Melbourne</a> for the youngest learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Maroondah and Melbourne',
  footerPlaces: [
    { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids in Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-mrdh .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-mrdh .cg-hero h1 { font-weight: 620; letter-spacing: -0.012em; line-height: 1.14; }
.cg-root.cg-mrdh .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.65rem; }
.cg-root.cg-mrdh .cg-eyebrow { letter-spacing: 0.08em; font-weight: 640; font-size: 0.79rem; }
.cg-root.cg-mrdh .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.014em; }
.cg-root.cg-mrdh .cg-grid-3 { gap: clamp(0.8rem, 2.4vw, 1.8rem); }
.cg-root.cg-mrdh .cg-table caption { text-align: left; font-weight: 620; font-size: 0.93rem; }
.cg-root.cg-mrdh .cg-table td:last-child { white-space: nowrap; }
.cg-root.cg-mrdh .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-mrdh .cg-callout { border-radius: 6px; border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Maroondah City Council, ABS Census 2021 QuickStats, LGA24410 (read 10 October 2026): 115,043 people; median age 39; 31,842 families; 46,870 private dwellings; 2.6 people per household; 1.9 vehicles per dwelling; aged 0-4 6,862 (6.0%); 5-9 7,251 (6.3%); bachelor or higher 28,262 (30.1%, Victoria 29.2%); professionals 15,617 (26.5%, Victoria 25.0%); worked at home 16,913 (28.7%, lockdown Census day); separate houses 37,499 (87.2%, Victoria 73.4%); flats 1,711 (4.0%, Victoria 12.1%). ABS LGA area 61.41 square kilometres. Victorian School Locations 2025: 23 government schools in Maroondah (C): 17 primary, 5 secondary, 1 special. DTP FY24-25 metro stations inside the polygon: Ringwood 1,514,250; Croydon 447,350; Ringwood East 268,800; Heathmont 199,600 (Heatherdale DTP point about 50 m outside). 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Streaming vs loading the Transport Victoria metropolitan train GTFS stop_times.txt (feed downloaded 10 October 2026; 688,380 data rows, 56.6 MB). 82 stop points inside the ABS LGA24410 polygon. Rows at those points: 12,164 (Ringwood Station 3,787; Heatherdale 2,995; Heathmont 1,802; Croydon 1,790; Ringwood East 1,790). readlines list: peak 90.1 MB, median 1.1 s of 3; file iteration: peak 0.035 MB, median 0.92 s. islice first 200,000 lines: list peak 25.67 MB, stream 0.035 MB, 4,971 matches. First matching line 16,976. Heatherdale GTFS platform points 62 m and 86 m inside; DTP patronage point about 50 m outside (local equirectangular). Scripts: scratchpad au/b8/mrdh.py, mrdh2.py.',
    requiredMentions: ['115,043', '31,842', '46,870', '7,251', '37,499', '28,262', '688,380', '12,164', '1,514,250'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Maroondah local government area (LGA24410).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA24410'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council polygons and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan train and bus feeds.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
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
        claim: 'Python documentation, tracemalloc: trace memory allocations, get_traced_memory() current and peak.',
        url: 'https://docs.python.org/3/library/tracemalloc.html'
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
      'Trains per day at any station: not claimed; rows span every service day in the feed.',
      'Which council Heatherdale officially belongs to: not claimed; the two data sets disagree and the page says so.',
      'That streaming is much faster: not claimed; the measured gain is memory, time was similar.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with Maroondah City Council or the Victorian Department of Education.'
    ]
  }
};
