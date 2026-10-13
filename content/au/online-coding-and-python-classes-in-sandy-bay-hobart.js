'use strict';
// Sandy Bay, Hobart (cg- district page, Australia cluster Phase 8, row 341). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL60585, City of Hobart) under Hobart and Tasmania.
// Spine: the LIST map service returns Sandy Bay's 1,404 road segments as nested JSON: each feature holds an attributes
// dictionary (17 fields) and a geometry dictionary of paths. pd.DataFrame(features) gives 2 columns of dictionaries;
// pd.json_normalize(features) gives 18 usable columns; exploding the paths gives 8,494 vertex rows. Our run,
// scratchpad au/b17/sdby_flatten.py (pandas 3.0.0). Lesson family: flattening nested JSON; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SANDY BAY',
    label: 'Sandy Bay, Hobart',
    blurb: 'Online coding and Python classes for Sandy Bay, where 1,404 road segments arrive as nested JSON and become a usable table in one call.'
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
  slug: 'online-coding-and-python-classes-in-sandy-bay-hobart',
  code: 'sdby',
  accent: '#733042',
  accentRationale: 'Sandy Bay: a deep plum red (hue 343.9), 7.64:1 on #EDE7DA; 31.3 RGB from the nearest Tasmanian accent, 12.8 from any other Australian accent and 7.7 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Sandy Bay',
    eyebrow: 'Sandy Bay, City of Hobart, Tasmania',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Sandy Bay' },
      { type: 'AdministrativeArea', name: 'City of Hobart' },
      { type: 'City', name: 'Hobart' },
      { type: 'AdministrativeArea', name: 'Tasmania' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-tasmania', name: 'Tasmania' },
    { slug: 'best-coding-classes-in-hobart', name: 'Hobart' }
  ],
  nav: [
    { label: 'Hobart', href: '/best-coding-classes-in-hobart' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Sandy Bay, Hobart',
  title: 'Online Coding and Python Classes in Sandy Bay, Hobart',
  description: 'Live online coding and Python classes for Sandy Bay children, teens and adults, using real Tasmanian open data, in small groups or one to one. First lesson free.',
  ogDescription: 'Sandy Bay Python project: 1,404 road segments as nested JSON, two columns of dictionaries, and the one function that turns them into 18 real columns.',
  twitterDescription: 'Online Python for Sandy Bay learners, taught live.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Sandy Bay',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in Sandy Bay, Hobart, taught live in English.'
  },
  h1: 'Online coding and Python classes in Sandy Bay',
  capsuleQ: 'What do Sandy Bay learners gain from online Python classes?',
  capsule: 'The confidence to take messy real-world data, such as the nested JSON government map services return, and turn it into clean tables they can analyse. Children start in Scratch at six; older learners use Python. Sandy Bay had 12,315 residents at the 2021 Census.',
  lead: 'Ask Tasmania\'s LIST map service for the roads in Sandy Bay and it sends back 1,404 road segments, each a little bundle of dictionaries inside lists inside dictionaries. Loaded naively into pandas, that becomes two columns of tangled data. One function call unpacks it into a table.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Sandy Bay.',
  picks: {
    eyebrow: 'Course picks for Sandy Bay',
    h2: 'Courses that make real data usable',
    intro: 'The road-segment project needs Python dictionaries, JSON and pandas. These courses teach each step; the free trial lesson finds the starting point.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Dictionaries, lists and JSON from the ground up.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'pandas, reshaping and cleaning data from real services.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Public datasets turned into tables and charts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python with small, readable data.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Sandy Bay in the Census',
      h2: 'A university suburb on the Derwent',
      intro: 'Census 2021 QuickStats for the suburb of Sandy Bay (ABS code SAL60585), compared with Tasmania.',
      body: [
        {
          kind: 'table',
          caption: 'Sandy Bay, 2021',
          head: ['Measure', 'Sandy Bay'],
          rows: [
            ['Residents', '12,315'],
            ['Median age', '39'],
            ['Families', '3,060'],
            ['Private dwellings', '5,529'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Sandy Bay against Tasmania',
          head: ['Indicator', 'Sandy Bay', 'Tasmania'],
          rows: [
            ['People in education attending university', '33.6% (1,344)', '12.8%'],
            ['Adults with a bachelor degree or higher', '53.5% (5,772)', '21.9%'],
            ['Workers who took a bus to work', '6.7% (412)', '2.5%'],
            ['Flats or apartments', '17.0% (807)', '5.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School ages', p: 'Sandy Bay had 515 residents aged 5 to 9, 585 aged 10 to 14 and 613 aged 15 to 19.' },
            { h3: 'Professionals', p: '35.2% of employed residents, 2,150 people, worked as professionals, against 20.0% across Tasmania.' },
            { h3: 'Area', p: 'The ABS boundary of Sandy Bay covers about 6.9 square kilometres south of central Hobart.' }
          ]
        },
        { kind: 'p', text: 'The Census bureau slightly adjusts small counts for privacy, so we quote its figures unchanged and do not total them.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'From nested JSON to a flat table',
      intro: 'We asked the LIST\'s transport layer for every road segment intersecting the Sandy Bay boundary. The reply is JSON: a features list, and in each feature an attributes dictionary of 17 fields plus a geometry dictionary holding a list of paths, each a list of coordinate pairs.',
      body: [
        {
          kind: 'table',
          caption: 'Three ways to load the reply (our run, pandas 3.0.0)',
          head: ['Code', 'Result'],
          rows: [
            ['pd.DataFrame(features)', '1,404 rows, 2 columns of dictionaries'],
            ['pd.json_normalize(features)', '1,404 rows, 18 columns such as attributes.TRAN_CLASS'],
            ['explode the geometry.paths column twice', '8,494 rows, one per road vertex']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What the flat table shows (our calculation)',
          head: ['Road class', 'Segments', 'Length'],
          rows: [
            ['Local Road', '594', '42.13 km'],
            ['Access Road', '461', '30.73 km'],
            ['Sub Arterial Road', '118', '6.61 km'],
            ['Arterial Road', '114', '6.78 km'],
            ['Collector Road', '73', '4.87 km'],
            ['Vehicular Track', '44', '7.00 km']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Why nesting happens', p: 'Map services keep each feature\'s descriptive fields separate from its shape. That suits maps and confuses tables.' },
            { h3: 'What normalising does', p: 'json_normalize walks into nested dictionaries and turns each inner key into its own column, named with a dot path.' },
            { h3: 'Lists need exploding', p: 'Paths are lists, not dictionaries, so they stay in one column until explode() gives each item its own row.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Decide what a row means',
          p: 'One row per road segment answers questions about lengths and classes. One row per vertex suits mapping. Flattening is not a single step but a choice about the unit of analysis, and the same JSON supports both.'
        },
        {
          kind: 'p',
          text: 'Road segments are open data from the LIST, State of Tasmania. Segments that cross the suburb boundary are included whole, so lengths describe segments touching Sandy Bay, not roads cut exactly at its edge. The table shapes and totals come from our own run.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Working with JSON',
      h2: 'Flattening, step by step',
      intro: 'The same pattern works for most web APIs, from transport feeds to weather services.',
      body: [
        {
          kind: 'table',
          caption: 'A flattening checklist',
          head: ['Step', 'Tool', 'Sandy Bay result'],
          rows: [
            ['Look at one record first', 'json.dumps(features[0], indent=2)', '17 attribute fields and a path'],
            ['Normalise dictionaries', 'pd.json_normalize', '18 columns'],
            ['Rename dotted columns', 'str.replace on column names', 'TRAN_CLASS, COMP_LEN and so on'],
            ['Explode lists when needed', 'DataFrame.explode', '8,494 vertex rows']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Unpack a box of boxes onto a table and line every item up in one row.' },
            { h3: 'Secondary learners', p: 'Load the Sandy Bay JSON three ways and explain why the first attempt is unusable.' },
            { h3: 'Adults', p: 'Flatten exports from work systems carefully, keeping track of what one row represents.' }
          ]
        },
        {
          kind: 'p',
          text: 'Plain Python can do the same with a loop: build a dictionary per feature by merging feature[\'attributes\'] with a count of vertices. Knowing both routes helps when a library is not available.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Sandy Bay',
      h2: 'Sandy Bay Road and the campus roads',
      intro: 'Local markers from the LIST open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Main roads', p: 'Sandy Bay Road accounts for 111 of the segments and Churchill Avenue 74, the two most segmented roads in the suburb data.' },
            {
              h3: 'Who looks after them',
              p: 'Council manages 967 of the segments, private owners 370 and the University of Tasmania 52, according to the authority field.'
            },
            { h3: 'Addresses', p: 'The LIST holds 5,811 address points inside or on the Sandy Bay boundary, a count only.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Sandy Bay, City of Hobart',
          p: 'Figures here describe the suburb of Sandy Bay within the City of Hobart, not Greater Hobart. Battery Point, Dynnyrne, Mount Nelson, Taroona and central Hobart border it and have separate figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From boxes of boxes to clean tables',
    intro: 'The ages below are a starting guide; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Lists and simple data inside games.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Dictionaries and lists in small projects.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'JSON, pandas and public data.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Data work',
        p: 'Cleaning and reshaping real data for work.',
        courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can flatten JSON. Does it know what a row should be?',
    intro: 'Only if told. The flattening call is easy; the decision behind it is not.',
    p1: 'Paste a sample of the LIST reply into an assistant and it will suggest json_normalize, often with an explode as well. If it explodes the paths when you wanted one row per road, the length totals will be counted once per vertex, and nobody will notice.',
    p2: 'Learners who have built both tables themselves know to state the unit of analysis first. That small step keeps AI-assisted data work honest.',
    closer: 'In Sandy Bay, the learner who decides what a row means gets totals that add up.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Sandy Bay lessons online',
    intro: 'All classes run live on video, so learners join from home or a college room.',
    cells: [
      { h3: 'Data on screen', p: 'Learner and teacher inspect real JSON together before flattening it.' },
      { h3: 'Tasmanian terms', p: 'Lessons follow the state school year, breaking for holidays.' },
      { h3: 'Free first class', p: 'One full lesson at no cost, then a clear recommendation.' },
      { h3: 'Fifteen to twenty per group', p: 'Level-matched groups, or private teaching.' },
      { h3: 'Twice weekly', p: 'Two regular lessons a week, near eight a month.' },
      { h3: 'India time', p: 'Teachers are in India: a 5pm Sandy Bay lesson is 11:30am India time in summer and 12:30pm from April.' }
    ],
    spec: {
      title: 'Hobart summer time',
      p: 'Hobart uses daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database); India does not, so the gap is five and a half hours in summer and four and a half otherwise.'
    }
  },
  fees: {
    h2: 'Sandy Bay class fees',
    intro: 'Three straightforward prices.',
    first: 'The first lesson is free and ends with a written plan.',
    group: 'About eight group lessons a month with fifteen to twenty learners.',
    private: 'About eight private lessons a month.',
    closer: 'Sandy Bay learners pay in US dollars after the trial, once course and time are settled. The pricing page explains holidays and absences.'
  },
  reviewsH2: 'Families and students on Google',
  book: {
    h2: 'Book a free Sandy Bay lesson',
    intro: 'Tell us the learner\'s age and interests. A student might flatten the LIST road data; a younger child might sort Scratch items into rows.',
    success: 'Thank you. We will be in touch soon about a Sandy Bay lesson.'
  },
  faq: {
    h2: 'Sandy Bay Python questions',
    intro: 'Questions from Sandy Bay families, students and adults.',
    items: [
      {
        q: 'How many people live in Sandy Bay?',
        a: 'The 2021 Census QuickStats count 12,315 residents in the suburb of Sandy Bay, with 5,529 private dwellings and a median age of 39.'
      },
      {
        q: 'What does pandas json_normalize do?',
        a: 'It turns nested JSON records into a flat table, creating a column for each key inside nested dictionaries and naming it with a dotted path such as attributes.TRAN_CLASS.'
      },
      {
        q: 'Why are some JSON columns still lists after normalising?',
        a: 'json_normalize unpacks dictionaries, not lists. List columns, such as a road\'s coordinate paths, need DataFrame.explode to give each item its own row.'
      },
      {
        q: 'How many road segments are in Sandy Bay?',
        a: 'The LIST transport layer returned 1,404 road segments intersecting the Sandy Bay boundary in October 2026, totalling 98.12 km by their recorded lengths.'
      },
      { q: 'When can a child start Python?', a: 'Usually between eight and ten, after a grounding in Scratch. The trial lesson checks.' },
      { q: 'Can teenagers use Claude in lessons?', a: 'No. Claude-based courses are for adults aged 18 and over; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Sandy Bay?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Sandy Bay learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio taught in Sandy Bay groups?', a: 'No. Copilot Studio is one to one only; groups build agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Hobart and Tasmania',
    h2: 'More for Sandy Bay learners',
    html: 'See <a class="cg-inline-link" href="/best-coding-classes-in-hobart">the Hobart page</a> for Greater Hobart, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-tasmania">the Tasmania guide</a> for the state. In the north, <a class="cg-inline-link" href="/best-coding-classes-in-launceston">Launceston</a> has its own page.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Sandy Bay and Hobart',
  footerPlaces: [
    { href: '/best-coding-classes-in-hobart', label: 'Hobart' },
    { href: '/best-coding-classes-in-launceston', label: 'Launceston' },
    { href: '/ai-and-programming-classes-in-devonport', label: 'Devonport' },
    { href: '/coding-and-ai-classes-in-tasmania', label: 'Tasmania' }
  ],
  personalityCss: `
.cg-root.cg-sdby .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.42rem); }
.cg-root.cg-sdby .cg-hero h1 { font-weight: 661; letter-spacing: -0.016em; line-height: 1.1; }
.cg-root.cg-sdby .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 0.99rem; }
.cg-root.cg-sdby .cg-eyebrow { letter-spacing: 0.129em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-sdby .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.012em; }
.cg-root.cg-sdby .cg-grid-3 { gap: clamp(0.83rem, 2.17vw, 1.65rem); }
.cg-root.cg-sdby .cg-table caption { font-weight: 648; text-align: left; letter-spacing: 0.013em; }
.cg-root.cg-sdby .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sdby .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.96rem; }
.cg-root.cg-sdby .cg-callout { border-left-width: 6px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Sandy Bay (SAL60585), City of Hobart (ABS LGA point query). ABS Census 2021 QuickStats (read 12 October 2026): 12,315 people; median age 39; 3,060 families; 5,529 private dwellings; 2.4 per household; university 1,344 (33.6%, Tas 12.8%); bachelor or higher 5,772 (53.5%, Tas 21.9%); bus 412 (6.7%, Tas 2.5%); flats 807 (17.0%, Tas 5.3%); professionals 2,150 (35.2%, Tas 20.0%); aged 5-9 515; 10-14 585; 15-19 613. ABS SAL area 6.9353 sq km. LIST Transport Segments (CC BY 3.0 AU) intersecting the SAL: 1,404 segments, 98.12 km COMP_LEN; class Local 594, Access 461, Sub Arterial 118, Arterial 114, Collector 73, Vehicular Track 44; Sandy Bay Road 111 segments, Churchill Avenue 74; authority Council 967, Private 370, UTAS 52. LIST Address Points intersecting: 5,811 (count only). Neighbours (ABS touches): Battery Point, Dynnyrne, Hobart, Mount Nelson, Taroona. Tas 2027 Term 1 4 February to 9 April. Hobart daylight saving first Sunday October to first Sunday April (IANA).',
    localProject: 'Flattening nested JSON. LIST TopographyAndRelief/MapServer/8 query (geometry intersects SAL60585, outSR 4326): 1,404 features, each {attributes: 17 fields, geometry: {paths: [[x, y], ...]}}, 1 path each, 8,494 vertices. pd.DataFrame(features): (1404, 2); pd.json_normalize(features): (1404, 18); explode twice: 8,494 rows. groupby TRAN_CLASS lengths as listed. pandas 3.0.0.',
    requiredMentions: ['5,529', 'Taroona', '613', 'Churchill Avenue', 'json_normalize', '1,404', '8,494', '5,811', 'Dynnyrne'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Sandy Bay suburb and locality (SAL60585), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL60585'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'the LIST, State of Tasmania, Transport Segments (All Transport layer), Creative Commons Attribution 3.0 Australia; queried from the LIST map service on 13 and 14 October 2026.',
        url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/TopographyAndRelief/MapServer/8'
      },
      {
        claim: 'the LIST, State of Tasmania, Address Points, Creative Commons Attribution 3.0 Australia; counts only, queried 13 October 2026.',
        url: 'https://services.thelist.tas.gov.au/arcgis/rest/services/Public/CadastreAndAdministrative/MapServer/43'
      },
      {
        claim: 'pandas documentation, pandas.json_normalize: normalise semi-structured JSON data into a flat table.',
        url: 'https://pandas.pydata.org/docs/reference/api/pandas.json_normalize.html'
      },
      {
        claim: 'Tasmanian Department for Education, Children and Young People, 2027 school term dates for school and college students.',
        url: 'https://www.decyp.tas.gov.au/learning/term-dates/'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Hobart, rule AT, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Figures for Greater Hobart from the Hobart page: not used.',
      'Exact road length inside the suburb: not claimed; segments crossing the boundary are counted whole.',
      'Any individual address: not published; address points are counted only.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Hobart, the LIST or the University of Tasmania.'
    ]
  }
};
