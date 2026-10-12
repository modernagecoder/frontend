'use strict';
// Mawson Lakes, Adelaide (cg- district page, Australia cluster Phase 8, row 315). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL40844, City of Salisbury) under Adelaide and South Australia.
// Spine: the Adelaide Metro timetable arrives as one 18.2 MB zip that expands to 102 MB. Streaming stop_times.txt out of
// the zip with zipfile and io.TextIOWrapper finds the 11,134 rows for Mawson Lakes stop records with a Python peak of
// 0.11 MB (tracemalloc); reading the whole file and splitting lines peaks at 185.6 MB. Feed version 1708, our run.
// Lesson family: reading a file inside a zip without extracting; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MAWSON LAKES',
    label: 'Mawson Lakes, Adelaide',
    blurb: 'Coding and AI classes for Mawson Lakes, where a 102 MB timetable is read straight out of its zip file without ever unpacking it.'
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
  slug: 'best-coding-and-ai-classes-in-mawson-lakes-adelaide',
  code: 'mwsl',
  accent: '#0C4D1D',
  accentRationale: 'Mawson Lakes: a deep reed green (hue 135.7), 8.14:1 on #EDE7DA; 71.5 RGB from the nearest South Australian accent, 14.2 from any other Australian accent and 9.0 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Mawson Lakes',
    eyebrow: 'Mawson Lakes, City of Salisbury, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Mawson Lakes' },
      { type: 'AdministrativeArea', name: 'City of Salisbury' },
      { type: 'City', name: 'Adelaide' },
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' },
    { slug: 'ai-and-programming-classes-in-adelaide', name: 'Adelaide' }
  ],
  nav: [
    { label: 'Adelaide', href: '/ai-and-programming-classes-in-adelaide' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Mawson Lakes, Adelaide',
  title: 'Best Coding and AI Classes in Mawson Lakes, Adelaide',
  description: 'Live online coding and AI classes for Mawson Lakes learners aged 6 to 67, from Scratch to Python, data and AI projects, in groups or one to one. First lesson free.',
  ogDescription: 'A Mawson Lakes coding project: an 18.2 MB zip, 1,152,604 timetable rows, and how to read the 11,134 that matter without unpacking anything.',
  twitterDescription: 'Coding and AI for Mawson Lakes, live online with a teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Mawson Lakes',
    description: 'Level-matched online coding, Python and AI lessons for children, teenagers and adults in Mawson Lakes, Adelaide, taught live in English.'
  },
  h1: 'Coding and AI classes in Mawson Lakes',
  capsuleQ: 'Where can Mawson Lakes learners find the best coding and AI classes?',
  capsule: 'Through live video classes, private or in a small group, which open with Scratch for six-year-olds and climb to Python, data and AI for older students and adults, all built on real South Australian data. Mawson Lakes counted 13,794 residents at the 2021 Census.',
  lead: 'South Australia\'s public transport timetable is published as a single zip file of 18.2 MB. Unpacked it fills 102 MB, and one file inside holds 1,152,604 rows. A Mawson Lakes learner can pull out the suburb\'s rows without unpacking anything, and without loading the whole file into memory.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Mawson Lakes.',
  picks: {
    eyebrow: 'Course picks for Mawson Lakes',
    h2: 'Courses that handle real-sized data',
    intro: 'The timetable project needs Python files, the standard library and some care with memory. Each course below covers part of it, and the no-cost first class tells us where to begin.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Files, modules and the standard library, used on real downloads.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Working with large public datasets one sensible step at a time.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from the start to efficient, well-structured programs.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'A first taste of Python and AI in small projects.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Mawson Lakes in the Census',
      h2: 'A young suburb of students and graduates',
      intro: 'Mawson Lakes (ABS code SAL40844) in the 2021 Census, measured against South Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Mawson Lakes at a glance, 2021',
          head: ['Measure', 'Mawson Lakes'],
          rows: [
            ['Residents', '13,794'],
            ['Median age', '33'],
            ['Families', '3,623'],
            ['Private dwellings', '5,498'],
            ['People per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Mawson Lakes compared with South Australia',
          head: ['Indicator', 'Mawson Lakes', 'South Australia'],
          rows: [
            ['People in education attending university', '28.3% (1,323)', '16.7%'],
            ['Adults with a bachelor degree or higher', '35.3% (3,959)', '22.7%'],
            ['Flats or apartments', '14.9% (755)', '6.8%'],
            ['Workers who drove to work', '65.7% (5,108)', '63.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'There were 847 children under five, 912 aged 5 to 9 and 815 aged 10 to 14.' },
            { h3: 'Median age 33', p: 'Half the residents were 33 or younger, and households averaged 2.6 people.' },
            { h3: 'Area', p: 'The ABS boundary of Mawson Lakes covers about 6.2 square kilometres in Adelaide\'s north.' }
          ]
        },
        { kind: 'p', text: 'Because the ABS fuzzes small counts slightly to protect privacy, these figures are shown untouched and we build no sums from them.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Reading inside the zip',
      intro: 'Python\'s zipfile module opens an archive and hands back any file inside it as a stream of bytes. Wrapped in io.TextIOWrapper and fed to csv.DictReader, that stream becomes rows, one at a time, and nothing is written to disk.',
      body: [
        {
          kind: 'table',
          caption: 'The timetable archive, version 1708 (our measurement)',
          head: ['Item', 'Size'],
          rows: [
            ['The zip file as downloaded', '18,189,702 bytes'],
            ['All twelve files once unpacked', '102,063,356 bytes'],
            ['stop_times.txt, unpacked', '60,937,589 bytes'],
            ['stop_times.txt, compressed inside the zip', '8,509,615 bytes'],
            ['Rows in stop_times.txt', '1,152,604']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Two ways to find the Mawson Lakes rows (our run, Python 3.13.6)',
          head: ['Method', 'Rows found', 'Peak Python memory'],
          rows: [
            ['Stream the file row by row from the zip', '11,134', '0.11 MB'],
            ['Read the whole file, decode and split into lines', '11,134', '185.6 MB']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'No unpacking', p: 'The archive stays as it was downloaded. Nothing needs cleaning up afterwards, and the code works the same on any machine.' },
            { h3: 'Constant memory', p: 'Streaming keeps one row in hand at a time, so memory stays tiny whether the file has a thousand rows or a million.' },
            {
              h3: 'What the rows say',
              p: 'Of the 11,134 Mawson Lakes rows, 4,056 are trips that run on Wednesday 21 October 2026; the rest belong to other days in the feed.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'One detail that trips people up',
          p: 'zipfile returns bytes, and csv needs text. io.TextIOWrapper with encoding set to utf-8-sig does the conversion and quietly drops a byte order mark if a file has one, so the first column name reads cleanly.'
        },
        {
          kind: 'p',
          text: 'The timetable is Adelaide Metro open data. Membership of Mawson Lakes is our point-in-boundary check; the sizes, row counts and memory peaks are our own measurements with Python\'s tracemalloc module, which counts memory Python allocates rather than everything the process uses.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Working with archives',
      h2: 'Three lines that replace an unzip',
      intro: 'The whole technique fits on one screen, and every part is in Python\'s standard library.',
      body: [
        {
          kind: 'table',
          caption: 'Steps and what each does',
          head: ['Step', 'Code idea', 'Result here'],
          rows: [
            ['Open the archive', 'zipfile.ZipFile(path)', '12 files listed'],
            ['Open one member', 'z.open(\'stop_times.txt\')', 'A byte stream'],
            ['Turn bytes into text rows', 'csv.DictReader(io.TextIOWrapper(...))', 'One row at a time'],
            ['Filter while reading', 'if row[\'stop_id\'] in mawson_stops', '11,134 rows kept']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Pack a box of toys and take out only the red ones without emptying the whole box onto the floor.' },
            { h3: 'Secondary learners', p: 'Stream the timetable, count rows for their own stop and time the difference against reading everything.' },
            { h3: 'Adults', p: 'Process large zipped exports at work directly, without filling a disk or a laptop\'s memory.' }
          ]
        },
        {
          kind: 'p',
          text: 'The same idea works for gzip files with the gzip module and for remote downloads read in chunks. Learning to stream data is one of the habits that separates scripts that work on samples from scripts that work on real data.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Mawson Lakes',
      h2: 'An interchange and a railway station',
      intro: 'Local markers from the timetable for Wednesday 21 October 2026.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Stop visits', p: 'Our boundary check finds 60 stop records in Mawson Lakes, with 4,056 scheduled visits on 30 routes that Wednesday.' },
            { h3: 'Interchange', p: 'Zone D at Mawson Interchange was the busiest stop record, with 281 scheduled visits.' },
            { h3: 'Trains', p: 'Mawson Lakes Railway Station had 129 scheduled train visits; 70 more visits were by school bus services.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Mawson Lakes only',
          p: 'Figures describe the suburb of Mawson Lakes in the City of Salisbury. Pooraka, Parafield, Cavan, Dry Creek, Green Fields and Globe Derby Park border it and keep their own figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From toy boxes to streamed data',
    intro: 'A trial lesson decides the starting point; these ages are only a guide.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games that build careful thinking.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Files, loops and simple data in code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Large public datasets handled properly.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at scale',
        p: 'Efficient scripts and data pipelines for work or study.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can unzip the file. Should it?',
    intro: 'Often it will, because extracting first is the most common pattern in its training data.',
    p1: 'Ask an assistant to analyse the timetable and it will probably write code that extracts the archive and reads stop_times.txt in one go. On a laptop that works. In a small cloud function or an online notebook, 185.6 MB of memory for one question can be the difference between an answer and a crash.',
    p2: 'Learners who have streamed the file themselves know to ask for it, and can check that the suggested code really does. Knowing the cheaper way is what lets you direct an AI rather than accept its first draft.',
    closer: 'In Mawson Lakes, the learner who streams the data gets answers where others run out of memory.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Mawson Lakes lessons run',
    intro: 'Lessons are live over video, so learners join from wherever they are.',
    cells: [
      { h3: 'Typing and talking', p: 'The learner writes the code; the teacher follows and asks questions.' },
      { h3: 'South Australian terms', p: 'Plans follow the state school year and pause in the holidays.' },
      { h3: 'A free start', p: 'Lesson one is on us, and we follow it with written advice.' },
      { h3: 'Class size', p: 'Between five and ten students who share a level, unless private teaching suits better.' },
      { h3: 'Two classes weekly', p: 'Fixed times, around eight lessons a month.' },
      { h3: 'India time', p: 'Teachers are in India: a 5pm Mawson Lakes lesson is 12 noon India time until 4 April 2027, then 1pm.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Adelaide moves its clocks forward on the first Sunday in October and back on the first Sunday in April (IANA time zone database); India does not, so the gap is five hours in summer and four in winter.'
    }
  },
  fees: {
    h2: 'Mawson Lakes class fees',
    intro: 'Three prices for everyone.',
    first: 'The first lesson is free and ends with a clear suggestion.',
    group: 'About eight group lessons a month with five to ten learners.',
    private: 'About eight lessons a month with one teacher.',
    closer: 'Families pay in US dollars, only after the trial and once course and time are agreed. The pricing page covers holidays, missed lessons and changing format.'
  },
  reviewsH2: 'Feedback from families, posted on Google',
  book: {
    h2: 'Book a first Mawson Lakes lesson',
    intro: 'Drop us a note with the student\'s age and hobbies. Secondary students may like streaming the timetable for their own stop; little ones often enjoy a Scratch sorting game.',
    success: 'Thank you. We will be in touch soon about a Mawson Lakes lesson.'
  },
  faq: {
    h2: 'Mawson Lakes coding and AI questions',
    intro: 'Questions families and adult learners in Mawson Lakes ask.',
    items: [
      {
        q: 'How many people live in Mawson Lakes?',
        a: 'The 2021 Census QuickStats record 13,794 residents in the suburb of Mawson Lakes, with a median age of 33 and 3,623 families.'
      },
      {
        q: 'Can Python read a file inside a zip without extracting it?',
        a: 'Yes. zipfile.ZipFile opens the archive and its open() method returns a file-like object for any member, which can be read directly or wrapped in io.TextIOWrapper for text.'
      },
      {
        q: 'Why stream a large file instead of reading it all?',
        a: 'Streaming processes one row at a time, so memory use stays small and constant. Reading everything at once needs memory proportional to the file, which can exceed what a machine has.'
      },
      {
        q: 'What did the Mawson Lakes timetable test show?',
        a: 'Streaming stop_times.txt from the 18.2 MB zip found the 11,134 Mawson Lakes rows with a Python memory peak of 0.11 MB; reading the whole file first peaked at 185.6 MB.'
      },
      {
        q: 'Is six too young for coding?',
        a: 'Not at all. Six-year-olds do well with Scratch, and most move to typed Python once reading and keyboard skills settle, usually nearer nine.'
      },
      {
        q: 'Are Claude-based courses open to teenagers?',
        a: 'No. Our Claude courses enrol grown-ups from 18 upward, while school pupils work with different AI tools.'
      },
      {
        q: 'Is there a classroom in Mawson Lakes?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Mawson Lakes learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Could a Mawson Lakes group study Copilot Studio?',
        a: 'No. That platform is reserved for private tuition; our groups write their agents in Python instead.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Mawson Lakes learners',
    html: 'See <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">the Adelaide page</a> for the whole city and <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">coding for Adelaide children</a> for younger learners. <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">The South Australia guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Mawson Lakes and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/online-coding-and-python-classes-in-whyalla', label: 'Whyalla' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-mwsl .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-mwsl .cg-hero h1 { font-weight: 650; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-mwsl .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 1.1rem; }
.cg-root.cg-mwsl .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-mwsl .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.012em; }
.cg-root.cg-mwsl .cg-grid-3 { gap: clamp(0.8rem, 2.1vw, 1.6rem); }
.cg-root.cg-mwsl .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-mwsl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mwsl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-mwsl .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Mawson Lakes (SAL40844), City of Salisbury. ABS Census 2021 QuickStats (read 13 October 2026): 13,794 people; median age 33; 3,623 families; 5,498 private dwellings; 2.6 per household; university 1,323 (28.3%, SA 16.7%); bachelor or higher 3,959 (35.3%, SA 22.7%); flats 755 (14.9%, SA 6.8%); drove 5,108 (65.7%, SA 63.9%); aged 0-4 847; 5-9 912; 10-14 815. ABS SAL area 6.1623 sq km; council by ABS LGA point query (Salisbury). Adelaide Metro GTFS v1708, Wednesday 21 October 2026: 60 stop records inside the SAL polygon; 4056 scheduled visits (bus 3857, train 129, school bus route type 712 70); 30 routes; busiest Zone D Mawson Interchange (281); Mawson Lakes Railway Station. Neighbours (ABS touches): Cavan, Dry Creek, Globe Derby Park, Green Fields, Parafield, Pooraka. Adelaide daylight saving first Sunday October to first Sunday April (IANA).',
    localProject: 'zipfile streaming. google_transit.zip v1708: 18,189,702 bytes; 12 members, 102,063,356 bytes uncompressed; stop_times.txt 60,937,589 bytes (8,509,615 compressed), 1,152,604 rows. Streaming csv.DictReader(io.TextIOWrapper(z.open(...), encoding="utf-8-sig")) filtered to Mawson Lakes stop ids: 11,134 rows, tracemalloc peak 0.11 MB; z.read + decode + splitlines filtered on stop_id: 11,134 rows, peak 185.6 MB. Wednesday 21 Oct 2026 subset 4,056 rows.',
    requiredMentions: ['Pooraka', '755', '847', 'Mawson Interchange', 'Mawson Lakes Railway Station', '18,189,702', '1,152,604', '11,134', 'TextIOWrapper'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Mawson Lakes suburb and locality (SAL40844), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL40844'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department for Infrastructure and Transport (South Australia), Adelaide Metro General Transit Feed, version 1708 (valid 9 October 2026 to 9 April 2027), Creative Commons Attribution 3.0 Australia per its data.gov.au listing; downloaded 13 October 2026.',
        url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au'
      },
      {
        claim: 'Python documentation, zipfile: ZipFile.open() returns a file-like object for reading a member of the archive.',
        url: 'https://docs.python.org/3/library/zipfile.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Passenger numbers at Mawson Lakes stops: not claimed; the timetable gives scheduled visits only.',
      'That streaming is always faster: not claimed; the page measures memory, not speed.',
      'School term dates for South Australia: not given; the official term-date pages refused automated access (HTTP 403) and were not circumvented.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Salisbury or Adelaide Metro.'
    ]
  }
};
