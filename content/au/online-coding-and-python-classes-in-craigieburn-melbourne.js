'use strict';
// Craigieburn, Melbourne (cg- district page, Australia cluster Phase 8, row 249). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL20661, City of Hume) under Melbourne and Victoria.
// Spine: Craigieburn station's entries rose from FY18-19 to FY24-25, but before comparing years you must join two
// files, and the join key decides which stations quietly drop out.
// Data: Department of Transport and Planning annual metropolitan train station entries (CC BY 4.0), FY18-19 and
// FY24-25, 222 rows each, rounded to 50. pandas 3.0.0 outer merge with indicator=True on Stop_name: both 219,
// left_only 3, right_only 3; on Stop_ID: 220 / 2 / 2; on lowercased name: 220 / 2 / 2. Script: scratchpad au/b6/crgb.py.
// Lesson family: pandas merge indicator to audit keys between two years; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CRAIGIEBURN',
    label: 'Craigieburn, Melbourne',
    blurb: 'Online coding and Python classes for Craigieburn, with a pandas project that checks which stations survive a join between two years.'
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
  slug: 'online-coding-and-python-classes-in-craigieburn-melbourne',
  code: 'crgb',
  accent: '#3C4294',
  accentRationale: 'Craigieburn: a cobalt blue (hue 236), chosen by hand at least 10 RGB units from all 1,278 accent declarations in content, the shared stylesheets and the claims log, 8.8:1 on white and 8.3:1 on the paper colour #FBF8F2',
  pageType: 'city',
  place: {
    name: 'Craigieburn',
    eyebrow: 'Craigieburn, City of Hume, Melbourne, Victoria',
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
  routeLabel: 'Craigieburn, Melbourne',
  title: 'Online Coding and Python Classes in Craigieburn, Melbourne',
  description: 'Live online coding and Python classes for Craigieburn children, teenagers and adults, from Scratch games to pandas data projects, in small groups or one to one.',
  ogDescription: 'Craigieburn Python classes with a pandas project: joining two years of station files by name loses 6 rows, by ID only 4. Craigieburn station rose to 1,508,250 entries.',
  twitterDescription: 'Craigieburn online coding and Python classes, live with a teacher, first class free.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Craigieburn',
    description: 'Level-matched online coding, Python and data lessons for children, teenagers and adults in Craigieburn, taught live in English.'
  },
  h1: 'Online coding and Python classes in Craigieburn',
  capsuleQ: 'How do online coding and Python classes work for Craigieburn learners?',
  capsule: 'A teacher meets the learner live online and builds real programs with them, Scratch first for young children, then Python and data analysis. Craigieburn gives the data a local angle: entries at Craigieburn station went from 1,236,250 in FY18-19 to 1,508,250 in FY24-25, by the state\'s published, rounded figures.',
  lead: 'Comparing two years of station figures sounds like one line of pandas. It is, once the two files are joined. The join is where the trouble hides: rows that do not match simply vanish, and the result looks complete. pandas has a switch that shows exactly what went missing.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Craigieburn.',
  picks: {
    eyebrow: 'Course picks for Craigieburn',
    h2: 'Courses that build up to pandas',
    intro: 'The station join uses Python, pandas and careful checking, and each course here reaches that point by its own route. A free first lesson finds the right one.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python foundations, then files and tables of real data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'pandas, joins and charts on public data sets.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Joining, checking and comparing data for reports.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from scratch to confident, tested scripts.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Craigieburn in the Census',
      h2: 'Houses, cars and plenty of children',
      intro: 'Figures for the Craigieburn suburb (ABS code SAL20661) from the 2021 Census QuickStats. Mickleham and Roxburgh Park have their own counts.',
      body: [
        {
          kind: 'table',
          caption: 'Craigieburn, 2021 Census headline counts',
          head: ['Headline', 'Craigieburn'],
          rows: [
            ['Residents', '65,178'],
            ['Median age', '32'],
            ['Families', '16,781'],
            ['Private dwellings', '20,732'],
            ['Average people per household', '3.3'],
            ['Average motor vehicles per dwelling', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Craigieburn beside Victoria',
          head: ['Measure', 'Craigieburn', 'Victoria'],
          rows: [
            ['Homes that are separate houses', '89.2% (16,907)', '73.4%'],
            ['Homes that are flats or apartments', '1.2% (222)', '12.1%'],
            ['Workers who drove to work', '60.4% (16,864)', '49.9%'],
            ['Workers who took the train to work', '2.1% (598)', '1.6%'],
            ['Median age', '32', '38']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary years', p: 'The Census counted 6,067 Craigieburn residents aged 5 to 9, which is 9.3%.' },
            { h3: 'Early teens', p: '4,993 residents were aged 10 to 14 and 4,053 were aged 15 to 19.' },
            { h3: 'Lockdown count', p: 'August 2021 was a Melbourne lockdown, so 16.7% (4,660) of workers were at home and travel figures are lower than usual.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds percentages and perturbs small counts, so we reproduce each number as QuickStats publishes it and never add parts together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which stations disappear when two years are joined?',
      intro: 'The FY18-19 and FY24-25 metropolitan station entry files have 222 rows each. We joined them in pandas three ways with indicator=True, which labels every row "both", "left_only" or "right_only".',
      body: [
        {
          kind: 'table',
          caption: 'The same two files, three join keys (our calculation, pandas 3.0.0)',
          head: ['Join key', 'both', 'left_only (FY18-19)', 'right_only (FY24-25)'],
          rows: [
            ['Station name', '219', '3', '3'],
            ['Station name, lower case', '220', '2', '2'],
            ['Stop_ID', '220', '2', '2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The rows that did not match on station name',
          head: ['Station', 'Label', 'What is going on'],
          rows: [
            ['Mckinnon / McKinnon', 'left_only and right_only', 'Same station, capital K added'],
            ['Surrey Hills', 'left_only', 'In FY18-19 only'],
            ['Mont Albert', 'left_only', 'In FY18-19 only'],
            ['Union', 'right_only', 'In FY24-25 only'],
            ['East Pakenham', 'right_only', 'In FY24-25 only']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'An inner join hides it',
              p: 'A plain inner join on station name returns 219 rows and no warning. McKinnon drops out over a single capital letter.'
            },
            {
              h3: 'Craigieburn survives',
              p: 'Craigieburn matches on every key: 1,236,250 entries in FY18-19 and 1,508,250 in FY24-25, or 122.0% by our calculation.'
            },
            {
              h3: 'In good company',
              p: 'Of the 219 stations matched by name, 19 were above their FY18-19 level in FY24-25. Craigieburn ranked sixth by that ratio.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'validate is a different check',
          p: 'pandas also offers validate="one_to_one", which passed here. It checks that no key repeats; it does not check that every key found a partner. Only the indicator shows that.'
        },
        {
          kind: 'p',
          text: 'The publisher rounds each figure to the nearest 50, so ratios are between rounded values. The files record counts, not causes, so we say nothing about why stations appear or vanish between the years.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The pandas behind it',
      h2: 'One extra argument that audits a join',
      intro: 'merge(..., how="outer", indicator=True) keeps every row from both sides and adds a _merge column saying where each row came from.',
      body: [
        {
          kind: 'table',
          caption: 'Reading the _merge column',
          head: ['Label', 'Meaning', 'What to do'],
          rows: [
            ['both', 'Key found in both files', 'Safe to compare'],
            ['left_only', 'Key only in the first file', 'Check for renames or closures'],
            ['right_only', 'Key only in the second file', 'Check for renames or new rows']
          ]
        },
        {
          kind: 'p',
          text: 'A quick value_counts() on _merge is the whole audit: if anything other than "both" appears, look at those rows before drawing conclusions.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Match two class lists by name and spot who is missing from each.' },
            { h3: 'Secondary students', p: 'Run the three joins on the station files and explain each mismatch.' },
            { h3: 'Adults', p: 'Reconcile two exports from work systems before building a report.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Craigieburn',
      h2: 'Schools, the station and the term dates',
      intro: 'From the Victorian school locations file, the timetable feed and the state calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Thirteen schools',
              p: 'The 2025 school locations file places 13 schools inside Craigieburn, including Aitken Creek Primary School, Willmott Park Primary School and Mount Ridley P-12 College.'
            },
            { h3: 'End of a line', p: 'In the metropolitan train feed, the Craigieburn line runs through 20 stations from Craigieburn to Flinders Street.' },
            { h3: 'Term 1, 2027', p: 'Victorian government school students start Term 1 on Thursday 28 January 2027, and it ends on Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb boundary',
          p: 'Census and school figures use the ABS boundary of the Craigieburn suburb, 35.45 square kilometres, which also holds 201 metropolitan bus stop entries.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From class lists to pandas joins',
    intro: 'The bands are guides. A free first lesson decides the start.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Games about matching, sorting and counting.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python start',
        p: 'Typing real code, with lists and simple files.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python and data',
        p: 'pandas tables, joins and checks.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Data at work',
        p: 'Reconciling, comparing and reporting.',
        courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI writes the merge in a second. Does a Craigieburn learner still need to understand it?',
    intro: 'Yes, because the default join drops rows without a word, and the AI usually writes the default.',
    p1: 'Ask an assistant to compare the two years and it will typically produce an inner merge on the station name. The code runs and the table looks full, with 219 stations. Nothing mentions McKinnon, which fell out over a capital letter.',
    p2: 'A learner who has used indicator=True asks the follow-up question every time: which rows did not match, and why? That one habit catches renames, new rows and missing rows before they reach a chart.',
    closer: 'A Craigieburn learner who audits the join can trust the comparison that follows it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Craigieburn lessons on a screen at home',
    intro: 'All lessons are live online, so Craigieburn learners need no lift or train to attend.',
    cells: [
      { h3: 'Home desk', p: 'Join on a laptop; the teacher sees the screen and guides each step.' },
      { h3: 'In step with school', p: 'Lessons follow Victorian terms and pause in the state school holidays.' },
      { h3: 'Free first class', p: 'A whole lesson first, then a suggested course and lesson time.' },
      { h3: 'Groups by ability', p: 'Fifteen to twenty learners at the same level, from many areas.' },
      { h3: 'Two each week', p: 'Two set lessons a week, close to eight per month.' },
      { h3: 'Teachers in India', p: 'Our teachers work in India: 5pm in Craigieburn is 11:30am India time under daylight saving and 12:30pm afterwards.' }
    ],
    spec: {
      title: 'Times given in Melbourne time',
      p: 'Melbourne\'s daylight saving period is Sunday 4 October 2026 to Sunday 4 April 2027. Since India does not change its clocks, we always state lesson times in Melbourne time.'
    }
  },
  fees: {
    h2: 'Craigieburn class fees',
    intro: 'Three simple options.',
    first: 'A free first lesson, finishing with honest advice on the next step.',
    group: 'A month of group lessons, close to eight, fifteen to twenty learners at one level.',
    private: 'A month of one-to-one lessons, close to eight, one teacher throughout.',
    closer: 'Craigieburn families pay in US dollars, the same as every family outside India. No payment is due until the trial fixes the course and time; see the pricing page for holidays and missed lessons.'
  },
  reviewsH2: 'Our families\' reviews on Google',
  book: {
    h2: 'Book a free Craigieburn class',
    intro: 'Tell us the age and what the learner likes. A seven-year-old might begin with a Scratch matching game; a teenager might begin with the station join.',
    success: 'Thank you. We will be in touch shortly about a Craigieburn class.'
  },
  faq: {
    h2: 'Craigieburn coding and Python questions',
    intro: 'What Craigieburn families and adult learners ask us first.',
    items: [
      {
        q: 'How many people live in Craigieburn?',
        a: 'The 2021 Census QuickStats for the Craigieburn suburb count 65,178 residents, a median age of 32 and 16,781 families.'
      },
      {
        q: 'What is pandas in Python?',
        a: 'pandas is a Python library for working with tables of data: reading files, joining them, filtering rows and calculating summaries.'
      },
      {
        q: 'What does indicator=True do in a pandas merge?',
        a: 'It adds a _merge column that labels each row both, left_only or right_only, so you can see which keys matched and which did not.'
      },
      {
        q: 'How did entries at Craigieburn station change?',
        a: 'The published figures, rounded to 50, are 1,236,250 for FY18-19 and 1,508,250 for FY24-25; FY24-25 is 122.0% of FY18-19 by our calculation.'
      },
      { q: 'When should a child start coding?', a: 'From about six with Scratch. Most move to Python at around ten or eleven.' },
      {
        q: 'Are Copilot Studio lessons available in Craigieburn groups?',
        a: 'No. We offer Copilot Studio only as one-to-one lessons; group courses use Python for agents.'
      },
      {
        q: 'Do you teach in person in Craigieburn?',
        a: 'No. All teaching is live online, there is no Australian office, and the phone number we list is in India.',
        boiler: true
      },
      {
        q: 'How much are classes for Craigieburn learners?',
        a: 'The first lesson is free. After it, group classes cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one classes cost USD 150 a month. We confirm course, format and time before any payment.',
        boiler: true
      },
      {
        q: 'How many learners share a class?',
        a: 'Five to ten, grouped by level, pace and goals, not by age or suburb. One-to-one lessons cover anyone no group time suits.',
        boiler: true
      },
      { q: 'Can adults learn Python with you?', a: 'Yes. Adults learn in adult groups or privately, often starting with data from their own job.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Craigieburn learners',
    html: 'Start from the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a>, read <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for Melbourne kids</a>, or see the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> and the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia overview</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Craigieburn and Melbourne',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Melbourne kids' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-crgb .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-crgb .cg-hero h1 { font-weight: 670; letter-spacing: -0.019em; line-height: 1.09; }
.cg-root.cg-crgb .cg-capsule { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-crgb .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-crgb .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.012em; }
.cg-root.cg-crgb .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.85rem); }
.cg-root.cg-crgb .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-crgb .cg-table th { letter-spacing: 0.015em; }
.cg-root.cg-crgb .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-crgb .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Craigieburn, ABS Census 2021 QuickStats, Craigieburn suburb SAL20661 (read 10 October 2026): 65,178 people; median age 32; 16,781 families; 20,732 private dwellings; 3.3 people per household; 2 vehicles per dwelling; separate houses 89.2% (16,907); flats 1.2% (222); drove to work 60.4% (16,864); train 2.1% (598); worked at home 16.7% (4,660, lockdown Census day); aged 5-9 6,067 (9.3%); 10-14 4,993; 15-19 4,053. Victoria: houses 73.4%, flats 12.1%, drove 49.9%, train 1.6%, median age 38. ABS SAL area 35.4498 square kilometres. Victorian School Locations 2025: 13 schools inside the boundary, including Aitken Creek Primary School, Willmott Park Primary School and Mount Ridley P-12 College. GTFS Schedule: Craigieburn line 20 stations (Craigieburn to Flinders Street); 201 metro bus stop entries inside the boundary; Craigieburn station inside. Victorian 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'pandas merge indicator. Annual metropolitan train station entries FY18-19 (222 rows) and FY24-25 (222 rows), rounded to 50. pandas 3.0.0 outer merge indicator=True. On Stop_name: both 219, left_only 3 (Mckinnon, Mont Albert, Surrey Hills), right_only 3 (East Pakenham, McKinnon, Union). On lowercased name: 220/2/2. On Stop_ID: 220/2/2 (left_only 19895 Surrey Hills, 19896 Mont Albert; right_only 49343 Union, 49458 East Pakenham). Inner merge on name: 219 rows. validate="one_to_one" passes. Craigieburn 1,236,250 -> 1,508,250 (122.0%); 19 of 219 name-matched stations above FY18-19 level; Craigieburn 6th by ratio (Merinda Park 188.2%, Officer 169.7%, Cranbourne 128.9%, Stony Point 128.7%, Hughesdale 125.1%). Script: scratchpad au/b6/crgb.py.',
    requiredMentions: ['65,178', '16,781', '20,732', '16,907', '16,864', '1,236,250', '1,508,250', 'Aitken Creek Primary School', 'Mount Ridley P-12 College'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Craigieburn suburb (SAL20661).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20661' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan train and bus feeds.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'pandas DataFrame.merge: how, indicator (_merge values left_only, right_only, both) and validate.',
        url: 'https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.merge.html'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20661 polygon and area).',
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
      'Why Surrey Hills and Mont Albert are absent from FY24-25 or why Union and East Pakenham appear: not claimed; the files record counts only.',
      'Reasons for the rise at Craigieburn station: not claimed.',
      'Special school and Catholic school names: not printed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'A network total of entries: not computed; published parts are never summed.',
      'Any affiliation with Hume City Council, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
