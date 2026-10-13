'use strict';
// Baldivis, Perth (cg- district page, Australia cluster Phase 8, row 302). Keyword slug ai-and-programming-classes-in-*,
// suburb page (ABS SAL50054) inside the City of Rockingham (our grid test: all sampled points in LGA57490) under Perth and WA.
// Spine: a datasheet for a dataset (Gebru et al., 2018) written for the WA Department of Education schools list before any
// model touches it: 1,153 rows, 319 non-government, 79 blank in-range year cells at 44 schools and no zeros anywhere, UPR empty,
// coordinates at 3 to 8 decimals; Baldivis has 10 government schools, 0 in-range blanks. Script: scratchpad au/b13/a_bldv.py.
// Lesson family: datasheet for a dataset; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BALDIVIS',
    label: 'Baldivis, Perth',
    blurb: 'AI and programming classes for Baldivis, with a project that writes a datasheet for the WA schools list before any AI model is allowed near it.'
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
  slug: 'ai-and-programming-classes-in-baldivis-perth',
  code: 'bldv',
  accent: '#785E20',
  accentRationale: 'Baldivis: a muted ochre (hue 42.3, s 0.73, v 0.47), at least 27.3 RGB from every WA page accent, 13.6 from other AU accents and 8.8 from every other site colour; 5.0:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Baldivis',
    eyebrow: 'Baldivis, City of Rockingham, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Baldivis' },
      { type: 'AdministrativeArea', name: 'City of Rockingham' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Baldivis, Perth',
  title: 'AI and Programming Classes in Baldivis, Perth',
  description: 'Live online AI and programming classes for Baldivis, ages 6 to adult, with a project that documents a real WA schools dataset before training any model on it.',
  ogDescription: 'Before training an AI on WA school data, a Baldivis learner writes its datasheet: 1,153 rows, 79 blank cells and not one zero.',
  twitterDescription: 'Baldivis AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Baldivis',
    description: 'AI, data and programming lessons for Baldivis children, teenagers and adults in the City of Rockingham, matched by level and taught live online.'
  },
  h1: 'AI and programming classes in Baldivis',
  capsuleQ: 'Why does the Baldivis AI project start with paperwork?',
  capsule: 'Because most AI mistakes begin in the data. Learners write a datasheet, a short structured description of a dataset, for the WA Department of Education schools list. It records what the file covers, what a blank cell might mean and how precise the locations are. Only then do they decide which questions the data can honestly answer.',
  lead: 'Baldivis is one of Perth\'s youngest suburbs. Its median age at the 2021 Census was 31, and children aged 5 to 9 made up 9.4% of residents, well above the state share. Ten government schools sit inside its outline, so a dataset about schools is something many Baldivis families already know from the inside.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Baldivis.',
  picks: {
    eyebrow: 'Course picks for Baldivis',
    h2: 'AI, data and Python courses',
    intro: 'Courses that pair coding with careful handling of data. The free trial confirms the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning from data checks to model testing.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python and charts on public datasets, documented as you go.' },
      {
        course: 'artificial-intelligence-complete-masterclass-college',
        band: 'University and adult',
        note: 'How AI systems are built, evaluated and documented.'
      },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'What AI learns from, explained with examples children can test.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Baldivis in the 2021 Census',
      h2: 'Young families in new houses',
      intro: 'Figures for the Baldivis suburb and locality (ABS SAL50054), a suburb of the City of Rockingham, from 2021 Census QuickStats read on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Baldivis headline counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '37,697'],
            ['Median age', '31'],
            ['Families', '10,280'],
            ['Private dwellings', '13,660'],
            ['People per household', '2.9'],
            ['Bedrooms per dwelling', '3.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Baldivis shares compared with Western Australia',
          head: ['Share', 'Baldivis', 'WA'],
          rows: [
            ['Residents aged 5 to 9', '9.4% (3,526)', '6.5%'],
            ['Residents aged 10 to 14', '8.5% (3,192)', '6.4%'],
            ['Separate houses', '95.5% (11,843)', '79.7%'],
            ['Technicians and trades workers', '18.7% (3,456)', '15.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Families', p: 'Couples with children made up 53.0% of Baldivis families, or 5,444, against 44.6% across the state.' },
            { h3: 'Work', p: 'Of employed residents, 60.1% worked full time, and the trades were a larger share of jobs than in WA overall.' },
            { h3: 'Census caution', p: 'Census night came during the pandemic, so commuting figures may describe an unusual week rather than a typical one.' }
          ]
        },
        {
          kind: 'p',
          text: 'The ABS rounds shares and lightly adjusts small counts, so parts of a table can miss the total by a little. We quote each published figure unchanged and never build totals by adding rows.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'A datasheet before a model',
      intro: 'In 2018 Timnit Gebru and colleagues proposed that every dataset should come with a datasheet: who made it, what it contains, how it was collected and what it should not be used for. Baldivis learners write one for the WA schools list, measuring each answer from the file rather than guessing.',
      body: [
        {
          kind: 'table',
          caption: 'Datasheet findings for the WA schools list (our measurements on the file downloaded 12 October 2026)',
          head: ['Datasheet question', 'What the file shows'],
          rows: [
            ['What is one row?', 'A currently active school: 1,153 rows, 319 of them non-government'],
            ['When was it counted?', 'Student numbers as at the 2026 Semester 1 census, one snapshot'],
            [
              'What does a blank mean?',
              '79 blank year-level cells inside schools\' own year ranges, at 44 schools; no cell anywhere holds a zero'
            ],
            ['Are all columns used?', 'The UPR column is empty in every row; USE has one value'],
            [
              'How precise are locations?',
              'Most coordinates have 8 decimal places, but 5 schools have only 3, roughly 100 metres'
            ],
            ['What is incomplete?', '3 rows lack a total, 1 lacks coordinates, 1 lacks a classification']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The blank question',
              p: 'With no zeros in the file, a blank probably means no students in that year. It could also mean a value not reported. The datasheet records both readings and says which one the project assumes.'
            },
            {
              h3: 'One snapshot only',
              p: 'Year 1 and Year 6 in the same census are different children. A model that reads the gap between them as growth over time is misusing the file, and the datasheet says so.'
            },
            {
              h3: 'Baldivis is clean',
              p: 'For the 10 government schools inside the Baldivis outline, every year level in range has a number, and coordinates carry 6 or 8 decimals.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why this is AI work',
          p: 'Models inherit every gap and guess in their training data. A one-page datasheet is the cheapest safety check there is, and it often decides that a planned model should not be built, or should answer a narrower question.'
        },
        {
          kind: 'p',
          text: 'The file is the Department of Education\'s Western Australian Schools Lists spreadsheet, licensed CC BY 4.0. Which schools fall inside Baldivis is decided by our point-in-polygon test, and it agrees with the suburb field for all ten. Counts of blanks, decimals and columns are our own measurements.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Writing the datasheet',
      h2: 'Questions first, then code to answer them',
      intro: 'Each datasheet question becomes a few lines of Python, and each answer goes into a plain-text document that travels with the file.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load the spreadsheet, find the real header row and count rows by classification.'],
            ['2', 'For each school, check every year level between its lowest and highest year for blanks or zeros.'],
            ['3', 'Measure coordinate precision and list rows missing totals, locations or classes.'],
            ['4', 'Write the datasheet, then list two questions the data can answer and two it cannot.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 1 has its own surprise: the header sits several rows down, beneath a title block, and many columns in between are empty spacers. A learner who reads the file blindly gets shifted columns and wrong year levels. Baldivis numbers make a good check after loading, because the eight primary schools\' Kindergarten counts run from 54 to 85 and the two secondary colleges list 273 and 182 students in Year 7.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Make an information card for a class collection: what was counted, when, and what is missing.' },
            { h3: 'Teenagers', p: 'Write the datasheet in Python and Markdown, then argue for or against a model idea.' },
            { h3: 'Adults', p: 'Draft datasheets for datasets at work before they reach an analytics or AI project.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Baldivis',
      h2: 'Schools, roads and the 2027 calendar',
      intro: 'Details from the schools list, the Main Roads Traffic Digest and the WA Department of Education calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Ten government schools',
              p: 'Eight primary schools and two senior high schools lie inside the outline, all in the South Metropolitan education region.'
            },
            {
              h3: 'Counted roads',
              p: 'Our map test finds 17 Main Roads count sites inside Baldivis, including three on Kwinana Freeway and two each on Safety Bay Road and Baldivis Road.'
            },
            { h3: 'Term 3, 2027', p: 'WA public schools run Term 3 from Monday 19 July to Friday 24 September 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Baldivis is the ABS suburb outline of about 87.3 square kilometres. Our grid test of that outline against the ABS council areas places all of it within the City of Rockingham.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From information cards to model documentation',
    intro: 'Ages are a guide; the trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Sorting and labels',
        p: 'Block code about collecting and describing things.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'First data',
        p: 'Counting, tables and first Python programs.',
        courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Data and models',
        p: 'Machine learning with documented, checked data.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Responsible AI',
        p: 'Building and documenting AI systems for work.',
        courses: ['artificial-intelligence-complete-masterclass-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Do learners still need this when AI can read files?',
    intro: 'More than ever, because AI tools read files confidently even when the file is ambiguous.',
    p1: 'Hand the schools spreadsheet to an AI assistant and it will summarise it. It may not notice the header buried beneath the title block, the empty spacer columns or that blanks might hide missing reports.',
    p2: 'A Baldivis learner who has written the datasheet can ask the right follow-up questions and spot an answer built on a misread column. That judgement does not come from the tool.',
    closer: 'In our AI classes, understanding the data comes before training on it.',
    blogAnchor: 'whether learning to code is still worth it in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Baldivis lessons work',
    intro: 'Every class is live online, so learners join from home with no trip up the freeway.',
    cells: [
      { h3: 'Taught live', p: 'Teachers lead each lesson and look at learners\' code as they write it.' },
      { h3: 'WA calendar', p: 'Lessons follow WA school terms and stop for holidays.' },
      { h3: 'Free trial', p: 'The first lesson costs nothing and ends with a plan.' },
      { h3: 'Group sizes', p: 'Fifteen to twenty learners per group, or private lessons.' },
      { h3: 'Rhythm', p: 'Two lessons each week, about eight a month.' },
      { h3: 'India time', p: 'A 4:30pm Baldivis lesson begins at 2pm in India.' }
    ],
    spec: {
      title: 'Western Australian time',
      p: 'According to the IANA time zone database, WA has not used daylight saving since March 2009, so the difference from India is always two and a half hours.'
    }
  },
  fees: {
    h2: 'Baldivis fees',
    intro: 'Every learner pays the same published fees.',
    first: 'The opening lesson is free, with a course plan.',
    group: 'Group lessons: about eight a month, fifteen to twenty learners each.',
    private: 'Private lessons: about eight a month with a single teacher.',
    closer: 'Fees are in US dollars and only start after the trial has agreed a course and a weekly time. The pricing page lists holiday and missed-lesson terms.'
  },
  reviewsH2: 'Family reviews on Google',
  book: {
    h2: 'Book a free Baldivis lesson',
    intro: 'Let us know the learner\'s age and interests. A primary student might make an information card; a teenager might start the schools datasheet.',
    success: 'Thank you. We will be in touch about a Baldivis lesson.'
  },
  faq: {
    h2: 'Baldivis AI and programming questions',
    intro: 'Questions from Baldivis parents and adult learners.',
    items: [
      { q: 'How many people live in Baldivis?', a: 'The 2021 Census counted 37,697 people in the Baldivis suburb, with a median age of 31.' },
      { q: 'Which council covers Baldivis?', a: 'The City of Rockingham. Our test of the ABS outlines places the whole suburb inside that council area.' },
      {
        q: 'What is a datasheet for a dataset?',
        a: 'A short document describing a dataset\'s purpose, contents, collection, gaps and suitable uses, proposed by Gebru and colleagues in 2018.'
      },
      {
        q: 'Why not train a model straight away?',
        a: 'Because blanks, snapshots and imprecise locations can mislead a model without any error message. The datasheet finds them first.'
      },
      {
        q: 'Is this suitable for children?',
        a: 'Younger learners make simple information cards for their own collections. Full datasheets suit teenagers and adults.'
      },
      {
        q: 'How many schools are in Baldivis?',
        a: 'The Department of Education list places 13 schools in Baldivis, 10 of them government schools, as at the 2026 Semester 1 census.'
      },
      {
        q: 'Do you have a centre in Baldivis?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Baldivis classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups put together?',
        a: 'By level and pace, fifteen to twenty learners each, not by age or suburb. One-to-one lessons cover anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults take AI classes?', a: 'Yes. Adults study in adult groups or one to one, often using datasets from their own jobs.' }
    ]
  },
  next: {
    eyebrow: 'More for Perth learners',
    h2: 'Explore further',
    html: 'The <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth page</a> covers the city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">Western Australia guide</a> the state, and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> the secondary years.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Baldivis and Perth',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-bldv .cg-hero-grid { align-items: stretch; gap: clamp(1.2rem, 2.8vw, 2.3rem); }
.cg-root.cg-bldv .cg-hero h1 { font-weight: 720; letter-spacing: -0.032em; line-height: 1.0; }
.cg-root.cg-bldv .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 6px; padding: 0.9rem 1rem; }
.cg-root.cg-bldv .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-bldv .cg-section-head h2 { max-width: 17ch; }
.cg-root.cg-bldv .cg-grid-3 { gap: clamp(1rem, 3vw, 2rem); }
.cg-root.cg-bldv .cg-table caption { text-align: left; font-weight: 640; font-size: 0.87rem; }
.cg-root.cg-bldv .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-bldv .cg-ladder-col { border-left: 6px solid var(--cg-accent); padding-left: 0.65rem; }
.cg-root.cg-bldv .cg-callout { border-radius: 0; }
`,
  dossier: {
    curriculumAuthority: 'Baldivis (SAL50054), ABS Census 2021 QuickStats (read 12 October 2026): 37,697 people; median age 31; 10,280 families; 13,660 private dwellings; 2.9 people per household; 3.7 bedrooms per dwelling; aged 5-9 3,526 (9.4%, WA 6.5%); aged 10-14 3,192 (8.5%, WA 6.4%); separate houses 11,843 (95.5%, WA 79.7%); technicians and trades 3,456 (18.7%, WA 15.3%); couple families with children 5,444 (53.0%, WA 44.6%); worked full time 60.1%. ABS SAL area 87.3153 sq km; our 60x60 grid test puts all 2,254 interior points in City of Rockingham LGA57490. WA Dept of Education schools list (2026 Semester 1 census): 13 rows with suburb BALDIVIS, 10 government (8 primary, 2 senior high, all South Metropolitan region), matching our point-in-polygon test; Kindergarten counts 54 to 85; Year 7 at the two secondaries 273 and 182. Main Roads Traffic Digest: 17 sites inside the SAL by our test (Kwinana Fwy 3, Safety Bay Rd 2, Baldivis Rd 2). Datasheets for Datasets, Gebru et al., arXiv 1803.09010, submitted 23 March 2018. WA 2027 Term 3: Monday 19 July to Friday 24 September. Perth +8:00, last DST ended March 2009 (IANA 2026e).',
    localProject: 'Datasheet for the WA schools list (xlsx downloaded 12 October 2026): 1,153 rows; 319 NON-GOVT; header row below a title block with spacer columns; 9,756 in-range year-level cells, 79 blank at 44 schools, 0 zeros anywhere; UPR empty in all rows, USE 1 value; coordinate decimals 8 (879 rows), 6 (158), 7 (81), 5 (23), 4 (5), 3 (5); 3 rows no total, 1 no coordinates, 1 no classification. Baldivis 10 government schools: 0 in-range blanks; coordinates 6 or 8 decimals. Our measurements. Script: scratchpad au/b13/a_bldv.py.',
    requiredMentions: ['37,697', '13,660', '9.4% (3,526)', '95.5% (11,843)', '18.7% (3,456)', '1,153 rows', '79 blank', 'Timnit Gebru', '273 and 182'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Baldivis suburb and locality (SAL50054), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL50054'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'WA Department of Education, Western Australian Schools Lists (Excel), currently active schools with student numbers as at the 2026 Semester 1 census, Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists'
      },
      {
        claim: 'Main Roads Western Australia, Traffic Digest (count sites with average weekday, weekend and all-day volumes and heavy vehicle shares for the latest count year), Creative Commons Attribution 4.0, downloaded 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/mrwa-traffic-digest'
      },
      {
        claim: 'Gebru, Morgenstern, Vecchione, Vaughan and others, Datasheets for Datasets, arXiv 1803.09010, submitted 23 March 2018.',
        url: 'https://arxiv.org/abs/1803.09010'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 Term 1 Monday 1 February to Friday 9 April; Term 3 Monday 19 July to Friday 24 September.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth at +8:00 on rule AW, whose last daylight saving period ended on the last Sunday of March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Enrolment growth or trends: not claimed; the list is a single 2026 Semester 1 snapshot.',
      'Summing student numbers across Baldivis schools: not done; each school\'s published figures stand alone.',
      'Naming schools: not used.',
      'City of Rockingham council-wide figures: kept off this suburb page.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Rockingham or the WA Department of Education.'
    ]
  }
};
