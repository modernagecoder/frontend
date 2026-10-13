'use strict';
// Maitland, Newcastle (cg- district page, Australia cluster Phase 8, row 349). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council page (ABS LGA15050, Maitland City Council) under Newcastle and New South Wales.
// Spine: greedy vs lazy regex. Transport for NSW writes "Maitland  Station" with two spaces; (.*)\s+Station keeps a trailing
// space and matches 0 of the 9 station points NSW Spatial Services places inside the council; (.*?)\s+Station matches all 9.
// Our run in scratchpad au/b19/mtld_regex.py. Lesson family: greedy vs lazy quantifiers; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MAITLAND',
    label: 'Maitland, Newcastle',
    blurb: 'Online coding and Python for Maitland, where one regular expression matched none of the council\'s nine railway stations.'
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
  slug: 'online-coding-and-python-classes-in-maitland-newcastle',
  code: 'mtld',
  accent: '#742325',
  accentRationale: 'Maitland: a Hunter shiraz red (hue 358.5), 8.48:1 on #EDE7DA; 23.6 RGB from the nearest New South Wales accent, 12.7 from any other Australian accent and 7.2 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Maitland',
    eyebrow: 'Maitland City Council, Hunter, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Maitland City Council' },
      { type: 'City', name: 'Newcastle' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'online-coding-and-python-classes-in-newcastle-nsw', name: 'Newcastle' }
  ],
  nav: [
    { label: 'Newcastle', href: '/online-coding-and-python-classes-in-newcastle-nsw' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Maitland, Newcastle',
  title: 'Online Coding and Python Classes in Maitland, Newcastle',
  description: 'Live online coding and Python classes across the Maitland council area, with Scratch from age six and Python, data and AI for teenagers and adults.',
  ogDescription: 'Maitland station project: one greedy regular expression matched 0 of 9 railway stations. Adding a single question mark matched all 9.',
  twitterDescription: 'Online coding and Python for Maitland learners.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Maitland',
    description: 'Level-matched online lessons in Scratch, Python, data and AI for learners across the Maitland council area in the Hunter, New South Wales.'
  },
  h1: 'Online coding and Python classes in Maitland',
  capsuleQ: 'What can a Maitland learner get from online Python classes?',
  capsule: 'Python taught live by a teacher, with real data from their own region and the habit of checking results that look wrong. Children begin with Scratch at six; teenagers and adults move on to Python, data and AI. The Maitland council area counted 90,226 residents in 2021.',
  lead: 'Two data sets should agree on Maitland\'s nine railway stations. A regular expression meant to pull station names from Transport for NSW\'s usage file matched none of them. The same pattern with one extra question mark matched all nine. The difference was two spaces in the source text.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python class for a learner in Maitland.',
  picks: {
    eyebrow: 'Course picks for Maitland',
    h2: 'Python courses that handle messy text',
    intro: 'The station project needs strings, regular expressions and careful joins. These courses teach them in that order; a free first lesson finds the right starting point.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Strings, the re module and joining two data sets.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 14', note: 'First Python with text and lists, then simple AI projects.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Matching and comparing in Scratch before any typing.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults 18 and over', note: 'Data cleaning and AI tools for real work.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Maitland in the Census',
      h2: 'A growing river city in the lower Hunter',
      intro: 'Census 2021 figures for the Maitland local government area (ABS code LGA15050), with New South Wales alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Maitland council area, 2021',
          head: ['Measure', 'Maitland'],
          rows: [
            ['Residents', '90,226'],
            ['Median age', '36'],
            ['Families', '25,244'],
            ['Private dwellings', '35,413'],
            ['People per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Maitland beside New South Wales',
          head: ['Indicator', 'Maitland', 'New South Wales'],
          rows: [
            ['Separate houses', '87.3% (28,499)', '65.6%'],
            ['Flats or apartments', '2.3% (752)', '21.7%'],
            ['Adults with a bachelor degree or higher', '15.4% (10,950)', '27.8%'],
            ['Employed people in professional jobs', '17.0% (7,369)', '25.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young families', p: 'Maitland had 6,571 residents aged 5 to 9 and 6,480 aged 10 to 14, with a median age of 36.' },
            { h3: 'Teenagers', p: '5,568 residents were aged 15 to 19.' },
            { h3: 'Council size', p: 'The council area spans roughly 392 square kilometres of the lower Hunter.' }
          ]
        },
        {
          kind: 'p',
          text: 'Close to nine in ten Maitland homes were separate houses. QuickStats publishes each cell with small privacy adjustments, so the figures stand as printed and are never totalled by us.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Nine stations, zero matches',
      intro: 'NSW Spatial Services places nine railway station points inside the Maitland council boundary. Transport for NSW publishes monthly entries and exits for every station. To join them, a script has to turn "Maitland  Station" into "Maitland".',
      body: [
        {
          kind: 'table',
          caption: 'Two patterns on the same names (our run)',
          head: ['Pattern', 'Captured from "Maitland  Station"', 'Stations matched'],
          rows: [
            ['(.*)\\s+Station, greedy', '"Maitland " with a trailing space', '0 of 9'],
            ['(.*?)\\s+Station, lazy', '"Maitland"', '9 of 9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'August 2026 entries at Maitland council stations (Transport for NSW)',
          head: ['Station', 'Entries'],
          rows: [
            ['Maitland', '9,315'],
            ['Victoria Street', '6,927'],
            ['Thornton', '5,551'],
            ['Telarah', '3,407'],
            ['Metford', '1,665'],
            ['East Maitland', '1,097'],
            ['High Street', '275'],
            ['Lochinvar', 'Less than 50'],
            ['Mindaribba', 'Less than 50']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Greedy grabs',
              p: '.* takes as much text as it can and gives back only what the rest of the pattern needs. \\s+ needs one space, so the other stays in the name.'
            },
            { h3: 'Lazy waits', p: '.*? takes as little as it can, so \\s+ swallows both spaces and the name comes out clean.' },
            {
              h3: 'The source',
              p: 'Of 296 train station names in the file, 295 have two spaces before "Station". Newcastle Interchange is the one with a single space.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Print what you captured',
          p: 'A join that matches nothing is a clue, not a result. Printing repr() of the captured text shows the hidden space at once, where an ordinary print hides it.'
        },
        {
          kind: 'p',
          text: 'Station points come from NSW Spatial Services and monthly usage from Transport for NSW\'s Opal-based file. Two stations are published only as "Less than 50" and are shown exactly that way. The matching and the boundary test are our own.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Regular expressions',
      h2: 'Greedy, lazy and anchored',
      intro: 'Small symbols that change what a pattern returns.',
      body: [
        {
          kind: 'table',
          caption: 'Quantifiers in Python\'s re module',
          head: ['Quantifier', 'Takes', 'Lazy form'],
          rows: [
            ['*', 'Zero or more, as many as possible', '*?'],
            ['+', 'One or more, as many as possible', '+?'],
            ['?', 'Zero or one, one if possible', '??'],
            ['{2,5}', 'Two to five, as many as possible', '{2,5}?']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Cut words from a sentence strip and argue about where each one ends.' },
            { h3: 'Secondary learners', p: 'Test both patterns on ten station names and explain each result before running the code.' },
            { h3: 'Adults', p: 'Add .strip() or a lazy quantifier to any name-extraction pattern before joining on it.' }
          ]
        },
        {
          kind: 'p',
          text: 'Calling .strip() on the captured name would also have fixed it. Knowing why both fixes work is what lets a learner choose between them next time.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Maitland',
      h2: 'Stations, addresses and the school year',
      intro: 'Council-wide markers from NSW open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Busiest station', p: 'Maitland station recorded 9,315 entries in August 2026, the most of the nine in the council area.' },
            { h3: 'Address points', p: 'NSW Spatial Services lists 46,627 address points in or on the council boundary, counted only.' },
            { h3: 'Term 1, 2027', p: 'Eastern division NSW public schools return on 28 January 2027, and Term 1 ends on 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Maitland council area',
          p: 'These figures describe the Maitland local government area, not Greater Newcastle. The ABS boundaries show it meeting Cessnock, Dungog, Newcastle, Port Stephens and Singleton.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sentence strips to regular expressions',
    intro: 'Ages are rough guides; the trial lesson sets the level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Comparing words and building simple games.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Strings, lists and small text projects.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Regular expressions, files and joins.',
        courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Data and AI',
        p: 'Cleaning real data before trusting it.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'AI and regular expressions',
    h2: 'Can an AI tool write the pattern for you?',
    intro: 'It can, and it may write the greedy one.',
    p1: 'Ask an assistant for a pattern that takes the name before the word Station and (.*)\\s+Station is a very likely reply. It works on the examples in your prompt if they have one space. Against a file with two spaces, it quietly leaves one behind.',
    p2: 'A learner who has seen 0 of 9 become 9 of 9 knows to test a pattern on the real data and to print what it captured. That check takes a minute and catches a mistake that no error message reports.',
    closer: 'Maitland learners who test every pattern on the real file trust their joins for good reasons.',
    blogAnchor: 'why programming still repays the effort'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Maitland lessons run',
    intro: 'Lessons are live on video, so the learner stays at home.',
    cells: [
      { h3: 'Real files', p: 'Learners work with public data from their own region, not toy examples.' },
      { h3: 'NSW terms', p: 'Classes follow the New South Wales school calendar and stop for holidays.' },
      { h3: 'Free trial', p: 'One full lesson costs nothing and ends with a written recommendation.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at a similar stage, or one to one.' },
      { h3: 'Twice weekly', p: 'Two set lessons a week, around eight in a month.' },
      { h3: 'India time', p: 'Our teachers are in India: a 7pm Maitland class is 1:30pm India time during daylight saving and 2:30pm from April.' }
    ],
    spec: {
      title: 'Hunter clocks',
      p: 'New South Wales moves to daylight saving on the first Sunday in October and back on the first Sunday in April (IANA time zone database); India does not change.'
    }
  },
  fees: {
    h2: 'Maitland class fees',
    intro: 'The same price list in every council area.',
    first: 'Your first lesson is free, with written advice to follow.',
    group: 'Around eight group lessons a month, five to ten learners each.',
    private: 'Around eight private lessons a month.',
    closer: 'Maitland families pay in US dollars once the trial lesson has fixed the course and the class times. The pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'Families review us on Google',
  book: {
    h2: 'Book a free Maitland class',
    intro: 'Share the learner\'s age and interests. A teenager might fix the station pattern; a younger learner might make a Scratch word game.',
    success: 'Thank you. We will get back to you about a Maitland class.'
  },
  faq: {
    h2: 'Maitland Python and coding questions',
    intro: 'Questions from across the Maitland council area.',
    items: [
      {
        q: 'What is the population of the Maitland council area?',
        a: 'The 2021 Census QuickStats count 90,226 residents in the Maitland local government area, with 25,244 families and 35,413 private dwellings.'
      },
      {
        q: 'What is a greedy quantifier in a regular expression?',
        a: 'One that matches as much text as possible, such as * or +, giving back characters only when the rest of the pattern needs them.'
      },
      {
        q: 'How do I make a regex quantifier lazy in Python?',
        a: 'Add a question mark after it: *? or +? match as little as possible while still letting the whole pattern succeed.'
      },
      {
        q: 'How many railway stations are in the Maitland council area?',
        a: 'NSW Spatial Services places nine railway station points inside the council boundary: Maitland, Victoria Street, Thornton, Telarah, Metford, East Maitland, High Street, Lochinvar and Mindaribba.'
      },
      {
        q: 'Is online Python suitable for a ten-year-old?',
        a: 'Often, yes. Many children are ready for typed Python around ten, after some Scratch; the trial lesson shows whether that is the right step.'
      },
      { q: 'Can teenagers use Claude in our classes?', a: 'No. Claude is used only in courses for adults aged 18 and over.' },
      {
        q: 'Is there a classroom in Maitland?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Maitland learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do Maitland group classes cover Copilot Studio?', a: 'No. Copilot Studio is taught one to one only; groups write their projects in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Newcastle and the Hunter',
    h2: 'More for Maitland learners',
    html: '<a class="cg-inline-link" href="/online-coding-and-python-classes-in-newcastle-nsw">The Newcastle page</a> covers the wider urban area and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">the New South Wales guide</a> the state. Families with young children may like <a class="cg-inline-link" href="/coding-classes-for-kids-newcastle">coding classes for kids in Newcastle</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Maitland and Newcastle',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/coding-classes-for-kids-newcastle', label: 'Kids in Newcastle' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-mtld .cg-hero-grid { align-items: start; gap: clamp(1.09rem, 3.22vw, 2.57rem); }
.cg-root.cg-mtld .cg-hero h1 { font-weight: 624; letter-spacing: -0.023em; line-height: 1.09; }
.cg-root.cg-mtld .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.52rem 0 0.52rem 1.14rem; }
.cg-root.cg-mtld .cg-eyebrow { letter-spacing: 0.109em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-mtld .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-mtld .cg-grid-3 { gap: clamp(0.69rem, 1.81vw, 1.43rem); }
.cg-root.cg-mtld .cg-table caption { font-weight: 603; text-align: left; letter-spacing: 0.021em; }
.cg-root.cg-mtld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtld .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.03rem; }
.cg-root.cg-mtld .cg-callout { border-left-width: 5px; border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Maitland local government area (LGA15050). ABS Census 2021 QuickStats (read 14 October 2026): 90,226 people; median age 36; 25,244 families; 35,413 private dwellings; 2.7 per household; separate houses 28,499 (87.3%, NSW 65.6%); flats 752 (2.3%, NSW 21.7%); bachelor or higher 10,950 (15.4%, NSW 27.8%); professionals 7,369 (17.0%, NSW 25.8%); aged 5-9 6,571; 10-14 6,480; 15-19 5,568. ABS LGA area 391.5089 sq km; LGAs intersecting: Cessnock, Dungog, Newcastle, Port Stephens, Singleton. NSW Spatial Services TransportFacilityPoint inside LGA: 68 points, 9 RAILWAY STATION. NSW AddressPoint count 46,627. TfNSW entry_exit.csv (17,218 rows, 2024-10 to 2026-08): August 2026 entries Maitland 9,315; Victoria Street 6,927; Thornton 5,551; Telarah 3,407; Metford 1,665; East Maitland 1,097; High Street 275; Lochinvar Less than 50; Mindaribba Less than 50. 296 train station names, 295 with two spaces before Station (Newcastle Interchange the exception). NSW 2027 Term 1 (Eastern) 28 January to 9 April. Census work-from-home and travel figures not used.',
    localProject: 'Greedy vs lazy regex. re.fullmatch(r"(.*)\\s+Station", name) captures "Maitland " and matches 0 of 9 station points; r"(.*?)\\s+Station" captures "Maitland" and matches 9 of 9. Script au/b19/mtld_regex.py.',
    requiredMentions: ['90,226', '25,244', '5,568', 'Port Stephens', 'Mindaribba', '9,315', '46,627', 'lazy', 'Newcastle Interchange'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Maitland local government area (LGA15050), read 14 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA15050'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'NSW Spatial Services, NSW Transport Theme, TransportFacilityPoint layer (railway station points), (c) Spatial Services; spatial query against the ABS boundary on 14 October 2026.',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Transport_Theme/MapServer/0'
      },
      {
        claim: 'Transport for NSW, Train, Metro and Light Rail Station Monthly Usage, based on Opal batch data (entry_exit.csv, October 2024 to August 2026, resource updated 15 September 2026), Creative Commons Attribution; downloaded 14 October 2026.',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer, counts only, queried 14 October 2026.',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1'
      },
      {
        claim: 'Python documentation, re module: the *, +, ? qualifiers are greedy; adding ? after them performs the match in non-greedy or minimal fashion.',
        url: 'https://docs.python.org/3/library/re.html'
      },
      {
        claim: 'NSW Department of Education, future and past NSW term and vacation dates: 2027 Term 1 (Eastern division) 28 January to 9 April, Term 2 27 April to 2 July, Term 3 19 July to 24 September, Term 4 11 October to 20 December.',
        url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Sydney, rule AN, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Newcastle - Maitland urban area figures and the Newcastle page\'s school counts: not used here.',
      'Any total of station entries for the council: not given; values printed as published.',
      'Census work-from-home and travel-to-work figures: not used.',
      'Any individual address: not published; counts only.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Maitland City Council or Transport for NSW.'
    ]
  }
};
