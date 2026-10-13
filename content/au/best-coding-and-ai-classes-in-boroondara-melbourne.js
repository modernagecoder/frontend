'use strict';
// Boroondara, Melbourne (cg- district page, Australia cluster Phase 8, row 259). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council-area page (ABS LGA21110, City of Boroondara) under Melbourne and Victoria.
// Spine: a pandas pivot table of train station entries, station by financial year, and what its margins can and
// cannot tell you when stations open and close.
// Data: Department of Transport and Planning annual metropolitan station entries FY18-19 to FY24-25 (CC BY 4.0),
// stations placed in the council by point-in-polygon on the ABS boundary (scratchpad au/b8/boro.py).
// Lesson family: pandas pivot_table with margins; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BOROONDARA',
    label: 'Boroondara, Melbourne',
    blurb: 'Coding and AI classes for the City of Boroondara, with a pandas pivot table of fifteen train stations over seven financial years.'
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
  slug: 'best-coding-and-ai-classes-in-boroondara-melbourne',
  code: 'boro',
  accent: '#4C3692',
  accentRationale: 'Boroondara: a muted violet blue (hue 254) chosen by hand at least 10 RGB units from 1,456 accent declarations in content, the shared stylesheets and the claims log, 9.3:1 on white and 7.6:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Boroondara',
    eyebrow: 'City of Boroondara, Melbourne, Victoria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Boroondara' },
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
  routeLabel: 'Boroondara, Melbourne',
  title: 'Best Coding and AI Classes in Boroondara, Melbourne',
  description: 'Live online coding and AI classes for Boroondara children, teenagers and adults: Scratch, Python, data and AI, in small groups or one to one, first class free.',
  ogDescription: 'Boroondara coding classes built on a real pandas project: fifteen train stations, seven financial years, and a pivot table whose margins need reading with care.',
  twitterDescription: 'Boroondara coding and AI classes, live online, with a station data project.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Boroondara',
    description: 'Level-matched online coding, Python, data and AI lessons for children, teenagers and adults in the City of Boroondara, taught live in English.'
  },
  h1: 'Coding and AI classes in Boroondara',
  capsuleQ: 'What makes the best coding and AI classes for Boroondara learners?',
  capsule: 'Live lessons where a learner writes real code on real public data, at their own level. Boroondara is a council of 167,900 residents (2021 Census) where 52.3% of adults hold a bachelor degree or higher, so many families want depth: Python, data handling and AI, not only games.',
  lead: 'Fifteen railway stations sit inside the City of Boroondara, from Glenferrie to Alamein, and the state publishes how many people entered each one every financial year. Put those numbers into a pandas pivot table and you get a neat grid, plus a margin row that looks like a council total. Reading that margin honestly is the lesson.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Boroondara.',
  picks: {
    eyebrow: 'Course picks for Boroondara',
    h2: 'Courses that reach real data work',
    intro: 'Each course here builds toward the table-handling skills in the station project, at a pace set by the learner. The free first lesson settles where to begin.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to files, dictionaries and small data programs.' },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'pandas tables, grouping and charts, then first machine learning models.'
      },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Spreadsheets, SQL and Python side by side, including pivot tables in each.'
      },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'From clean data to models that predict, with honest evaluation.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Boroondara in the Census',
      h2: 'An older, highly qualified council of apartments and houses',
      intro: 'Figures for the City of Boroondara local government area (ABS code LGA21110) from the 2021 Census QuickStats, read in October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'City of Boroondara, 2021 Census headline counts',
          head: ['Headline', 'Boroondara'],
          rows: [
            ['Residents', '167,900'],
            ['Median age', '40'],
            ['Families', '44,611'],
            ['Private dwellings', '72,817'],
            ['Average people per household', '2.5'],
            ['Average motor vehicles per dwelling', '1.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Boroondara beside Victoria',
          head: ['Measure', 'Boroondara', 'Victoria'],
          rows: [
            ['Adults with a bachelor degree or higher', '52.3% (73,669)', '29.2%'],
            ['Workers employed as professionals', '40.3% (35,030)', '25.0%'],
            ['Homes that are separate houses', '55.4% (34,771)', '73.4%'],
            ['Homes that are flats or apartments', '24.2% (15,162)', '12.1%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Ten to fourteen', p: '11,314 residents, 6.7%, were aged 10 to 14, a common age to move from blocks into Python.' },
            { h3: 'Five to nine', p: '8,964 residents, 5.3%, were aged 5 to 9 on Census night.' },
            {
              h3: 'A lockdown Census',
              p: 'The count was taken during a Melbourne lockdown, so the 42.0% of workers at home (36,499) says more about August 2021 than a usual week.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats rounds its percentages and adjusts small counts for privacy. We print each figure as published and do not add bands together into new totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A pivot table of Boroondara\'s fifteen stations',
      intro: 'We took the annual station entry files for FY18-19 to FY24-25, kept the stations whose published coordinates fall inside the ABS council boundary, and pivoted them: one row per station, one column per financial year, entries in each cell. Every sum below is our own, built from estimates the department rounds to the nearest 50.',
      body: [
        {
          kind: 'table',
          caption: 'Annual entries, selected stations (published figures)',
          head: ['Station', 'FY18-19', 'FY20-21', 'FY24-25'],
          rows: [
            ['Glenferrie', '2,729,100', '749,450', '1,978,650'],
            ['Camberwell', '1,969,600', '641,150', '1,260,400'],
            ['Auburn', '744,050', '278,650', '650,000'],
            ['Hawthorn', '709,100', '243,600', '531,400'],
            ['Surrey Hills', '725,200', '245,900', 'no row'],
            ['Union', 'no row', 'no row', '593,100'],
            ['Willison', '102,600', '32,400', '73,100']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What the margins say (our calculation)',
          head: ['Margin cell', 'Value', 'Read it as'],
          rows: [
            ['All stations, FY18-19', '9,092,350', 'sum of 14 station rows that year'],
            ['All stations, FY24-25', '6,525,800', 'sum of a different set of 14 rows'],
            ['Surrey Hills, all years', '1,956,750', 'five years of data'],
            ['Union, all years', '1,156,750', 'three years of data']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Six empty cells',
              p: 'Fifteen station names across seven years make 105 cells, but only 99 hold a number. Surrey Hills has no row after FY22-23 and Union none before it; pandas leaves those cells as NaN.'
            },
            {
              h3: 'Unequal columns',
              p: 'The FY24-25 margin, 6,525,800, is 71.8% of the FY18-19 margin. Keeping only the 13 stations present in both years gives 70.9%: close here, but a different calculation.'
            },
            {
              h3: 'One station, a third',
              p: 'Glenferrie\'s 1,978,650 entries in FY24-25 are 30.3% of that year\'s margin, so any change there moves the council figure.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Sum and mean margins answer different questions',
          p: 'With aggfunc set to mean, the grand margin is the average of all 99 filled cells, 414,727 entries. The average of each station\'s own average is 413,171. Missing cells are why the two differ, and pandas will not warn you.'
        },
        {
          kind: 'p',
          text: 'We report the movements and claim no reason for any of them. Station coordinates come from the patronage file itself, so a station that sits on the council line is placed by that point alone.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Inside the pivot',
      h2: 'One function call, four arguments to understand',
      intro: 'pandas.pivot_table turns a long list of rows into a grid. The learner chooses what forms the rows, the columns, the values and the way cells combine.',
      body: [
        {
          kind: 'table',
          caption: 'The arguments, in plain words',
          head: ['Argument', 'In this project'],
          rows: [
            ['index', 'station name, one row each'],
            ['columns', 'financial year, one column each'],
            ['values and aggfunc', 'annual entries, combined by sum or by mean'],
            ['margins', 'adds an All row and column computed from the same rows']
          ]
        },
        {
          kind: 'p',
          text: 'The margins are not computed from the rounded cells you see on screen; they are computed again from the underlying rows. With sum that makes no difference here. With mean it does, which is why a learner should print both and explain the gap before trusting either.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Build a tally chart of classmates\' favourite fruits by day, then add the totals row by hand.' },
            { h3: 'Secondary students', p: 'Rebuild the station grid, then find which stations make the margins unequal.' },
            { h3: 'Adults', p: 'Pivot a work spreadsheet and write one sentence on what each margin cell means.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Boroondara',
      h2: 'Schools, stations and the school year',
      intro: 'From the Victorian school locations file, the station entry files and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: '27 government schools',
              p: 'The 2025 school locations file lists 27 government schools in the council: 20 primary, 6 secondary and 1 specific-purpose school.'
            },
            { h3: 'Fourteen stations now', p: 'Fourteen stations have FY24-25 entry figures inside the boundary, from Glenferrie to Alamein.' },
            { h3: 'Term 1, 2027', p: 'Victorian government school students start on Thursday 28 January 2027, and Term 1 ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council boundary',
          p: 'Every count on this page uses the ABS boundary of the City of Boroondara, about 60.2 square kilometres. Neighbouring councils are not included.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From tally charts to pandas',
    intro: 'The starting rung depends on the learner, not the birthday. A free first lesson finds it.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks and patterns',
        p: 'Scratch projects that count, sort and draw simple charts.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Lists, loops and small programs that read a file of numbers.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data with pandas',
        p: 'Tables, grouping, pivots and charts on public data.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Analysis and models',
        p: 'SQL, Python and machine learning for study or work.',
        courses: ['data-analysis-mastery-course-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write the pivot table, so why should a Boroondara student learn it?',
    intro: 'Because the code is the easy part; reading the margins is not.',
    p1: 'Ask an assistant for "entries by station and year with totals" and it will hand back a correct pivot_table call in seconds. The output will show a tidy All row, and nothing on screen says that two of the stations in it did not exist for the whole period.',
    p2: 'A student who has counted the empty cells knows to ask which rows feed each margin, and can say whether a fall in the council figure is a fall at the stations or a change in the list of stations. That habit is what turns generated code into a figure worth repeating.',
    closer: 'The skill Boroondara learners take away is asking what each number is a sum of.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Boroondara lessons run',
    intro: 'Lessons happen on a video call with a shared screen, so the learner stays at home in Kew, Hawthorn or Balwyn alike.',
    cells: [
      { h3: 'Live with a teacher', p: 'The teacher watches the learner\'s own code run and fixes misunderstandings on the spot.' },
      { h3: 'Victorian terms', p: 'The timetable follows the four state school terms and pauses for the holidays.' },
      { h3: 'Trial lesson', p: 'The first full lesson is free and ends with a course and time recommendation.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners at the same level, drawn from many places, never sorted by postcode.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons each week, around eight a month, keep skills from fading.' },
      { h3: 'Teachers in India', p: 'A 6pm Boroondara lesson is 12:30pm India time while Melbourne is on daylight saving, and 1:30pm after it ends.' }
    ],
    spec: {
      title: 'Melbourne time on every message',
      p: 'Daylight saving in Melbourne runs from Sunday 4 October 2026 to Sunday 4 April 2027; India keeps one time all year, so we always quote lesson times in Melbourne time.'
    }
  },
  fees: {
    h2: 'Boroondara class fees',
    intro: 'The same three choices for every family.',
    first: 'Your first lesson is free and comes with an honest recommendation.',
    group: 'One month of group lessons, usually eight, with fifteen to twenty learners at a matched level.',
    private: 'One month of private lessons, usually eight, with a single teacher.',
    closer: 'Boroondara families pay in US dollars, as everyone outside India does. Nothing is charged until the trial has fixed the course and lesson time, and the pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'What families say about us on Google',
  book: {
    h2: 'Book a free Boroondara class',
    intro: 'Share the learner\'s age and what they enjoy. A younger child might begin with a Scratch tally game; a senior student might start on the station pivot table.',
    success: 'Thank you. We will be in touch shortly about a Boroondara class.'
  },
  faq: {
    h2: 'Boroondara coding and AI questions',
    intro: 'Questions Boroondara parents and adult learners ask before they book.',
    items: [
      { q: 'How many people live in the City of Boroondara?', a: 'The 2021 Census counted 167,900 residents in the council, with a median age of 40.' },
      {
        q: 'What is a pivot table?',
        a: 'A pivot table regroups a long list of records into a grid, with one category down the side, another across the top and a combined value in each cell. Spreadsheets, SQL and pandas all have one.'
      },
      {
        q: 'What are margins in a pandas pivot table?',
        a: 'Margins add an All row and an All column that combine the same underlying rows with the same function. They are only as comparable as the rows behind them, which is why our Boroondara grid needs care.'
      },
      {
        q: 'Which Boroondara station had the most entries in FY24-25?',
        a: 'Glenferrie, with 1,978,650 entries in the department\'s FY24-25 file, ahead of Camberwell at 1,260,400.'
      },
      {
        q: 'Is my child too young for Python?',
        a: 'Most children start Python somewhere between nine and twelve, once typing is comfortable. Before that, blocks teach the same logic.'
      },
      {
        q: 'Do you help with VCE computing subjects?',
        a: 'Yes, with technique and practice for VCE Applied Computing and Algorithmics. Assessed school work stays the student\'s own.'
      },
      {
        q: 'Is there a Boroondara campus?',
        a: 'No. All teaching is live online, we have no Australian office, and the phone number we list is in India.',
        boiler: true
      },
      {
        q: 'What do classes cost in Boroondara?',
        a: 'The first lesson is free. Group classes are USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty; one-to-one classes are USD 150 a month. Course and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Fifteen to twenty, matched on level and pace rather than age or suburb, with private lessons when no group time suits.',
        boiler: true
      },
      { q: 'Can adults join?', a: 'Yes. Adults learn in adult groups or one to one, often starting from data they use at work.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Boroondara learners',
    html: 'The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> covers the wider city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> explains the state system, and senior students can read about <a class="cg-inline-link" href="/vce-applied-computing-data-analytics-help">VCE Applied Computing: Data Analytics</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Boroondara and Melbourne',
  footerPlaces: [
    { href: '/vce-applied-computing-data-analytics-help', label: 'VCE Data Analytics' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids in Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-boro .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.4vw, 2.1rem); }
.cg-root.cg-boro .cg-hero h1 { font-weight: 610; letter-spacing: -0.012em; line-height: 1.14; }
.cg-root.cg-boro .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-boro .cg-eyebrow { letter-spacing: 0.08em; font-weight: 640; font-size: 0.8rem; }
.cg-root.cg-boro .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.006em; }
.cg-root.cg-boro .cg-grid-3 { gap: clamp(0.85rem, 2vw, 1.6rem); }
.cg-root.cg-boro .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-boro .cg-table td:first-child { font-weight: 560; }
.cg-root.cg-boro .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-boro .cg-callout { border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'City of Boroondara, ABS Census 2021 QuickStats, LGA21110 (read 10 October 2026): 167,900 people; median age 40; 44,611 families; 72,817 private dwellings; 2.5 people per household; 1.7 vehicles per dwelling; aged 0-4 6,653 (4.0%); 5-9 8,964 (5.3%); 10-14 11,314 (6.7%); bachelor or higher 73,669 (52.3%, Victoria 29.2%); professionals 35,030 (40.3%, Victoria 25.0%); worked at home 36,499 (42.0%, lockdown Census day); separate houses 34,771 (55.4%, Victoria 73.4%); flats 15,162 (24.2%, Victoria 12.1%). ABS LGA area 60.18 square kilometres. Victorian School Locations 2025: 27 government schools in Boroondara (C): 20 primary, 6 secondary, 1 special. Victorian 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'pandas pivot_table with margins on DTP annual metropolitan station entries FY18-19 to FY24-25, stations inside the ABS LGA21110 polygon by point-in-polygon on the file coordinates. 15 station names, 7 years, 99 filled cells of 105 (Surrey Hills FY18-19 to FY22-23 only; Union FY22-23 to FY24-25 only). Sum margins: FY18-19 9,092,350; FY20-21 2,887,000; FY24-25 6,525,800; all-years 41,057,950; Surrey Hills all-years 1,956,750; Union 1,156,750; Glenferrie FY24-25 1,978,650 (30.3% of FY24-25 margin), FY18-19 2,729,100, FY20-21 749,450; Camberwell 1,969,600 / 641,150 / 1,260,400; Auburn 744,050 / 278,650 / 650,000; Hawthorn 709,100 / 243,600 / 531,400; Willison 102,600 / 32,400 / 73,100. FY24-25 over FY18-19 margin 0.718; 13 stations present both years 0.709. Mean margins: grand mean 414,727; mean of station means 413,171. Script: scratchpad au/b8/boro.py.',
    requiredMentions: ['167,900', '44,611', '72,817', '73,669', '35,030', '15,162', '9,092,350', '6,525,800', '1,956,750'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Boroondara local government area (LGA21110).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA21110'
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
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council polygons and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'pandas documentation, pandas.pivot_table (index, columns, values, aggfunc, margins, margins_name).',
        url: 'https://pandas.pydata.org/docs/reference/api/pandas.pivot_table.html'
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
      'Any reason for the fall in entries after FY18-19 or for Surrey Hills and Union appearing and disappearing: not claimed.',
      'A council-wide passenger total: our margins are sums of rounded station estimates, labelled as our calculation, not a published figure.',
      'Catholic or independent school counts and any sector breakdown: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with the City of Boroondara or the Victorian Department of Education.'
    ]
  }
};
