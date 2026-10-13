'use strict';
// Casey, Melbourne (cg- district page, Australia cluster Phase 8, row 261). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page (ABS LGA21610, City of Casey) under Melbourne and Victoria.
// Spine: is this station inside Casey? A point-in-polygon function tested with unittest subTest cases built from real
// stations near the council boundary, and three versions of the function that the tests tell apart.
// Data: ABS ASGS 2021 LGA21610 polygon (7,437 vertices), DTP FY24-25 metropolitan station coordinates.
// Script: scratchpad au/b8/csey.py. Lesson family: parametrised tests with unittest subTest; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CASEY',
    label: 'Casey, Melbourne',
    blurb: 'Online coding and Python classes for the City of Casey, with a testing project on stations near the council boundary.'
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
  slug: 'online-coding-and-python-classes-in-casey-melbourne',
  code: 'csey',
  accent: '#544584',
  accentRationale: 'Casey: a dusky blue violet (hue 254) chosen by hand at least 10 RGB units from 1,456 accent declarations in content, the shared stylesheets and the claims log, 8.2:1 on white and 6.7:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Casey',
    eyebrow: 'City of Casey, Melbourne, Victoria',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Casey' },
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
  routeLabel: 'Casey, Melbourne',
  title: 'Online Coding and Python Classes in Casey, Melbourne',
  description: 'Live online coding and Python classes for Casey children, teenagers and adults: Scratch, Python, testing and AI, in small groups or one to one, first lesson free.',
  ogDescription: 'Casey Python classes with a testing project: is Beaconsfield station inside the council? Ten real stations, one boundary, three versions of the code.',
  twitterDescription: 'Casey online coding and Python classes, live, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Casey',
    description: 'Level-matched online coding and Python lessons, including testing, for children, teenagers and adults in the City of Casey, taught live in English.'
  },
  h1: 'Online coding and Python classes in Casey',
  capsuleQ: 'What do online Python classes look like for Casey learners?',
  capsule: 'A live teacher, the learner\'s own code on screen, and real data to test it against. Casey counted 365,239 residents in the 2021 Census, with a median age of 34 and 28,849 children aged 5 to 9.',
  lead: 'Beaconsfield station sits just outside the City of Casey, about 119 metres beyond the ABS boundary by our measure. That makes it a perfect test case. A function that decides "inside or outside" can pass a dozen easy checks and still be wrong at the edge, and Python\'s unittest module, with subTest, is how a learner proves which version is right.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Casey.',
  picks: {
    eyebrow: 'Course picks for Casey',
    h2: 'Courses that teach Python properly',
    intro: 'Every course below reaches writing and testing real functions, at a pace that suits the learner. Book the free lesson and we will suggest one.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch to functions, files, classes and tests.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Logic, data structures and algorithms, checked with test cases.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'A full Python course, including unittest and good testing habits.'
      },
      { course: 'pcep-pcap-python-certification-course', band: 'Ages 13 and over', note: 'Preparation for the Python Institute PCEP and PCAP certificates.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Casey in the Census',
      h2: 'Houses, cars and young families',
      intro: 'Totals for the City of Casey council area (ABS LGA21610), read from the 2021 Census QuickStats page on 10 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'The City of Casey at a glance',
          head: ['Item', 'Casey'],
          rows: [
            ['Population on Census night', '365,239'],
            ['Median age (years)', '34'],
            ['Families recorded', '97,338'],
            ['Private homes', '122,583'],
            ['Residents per household, average', '3.1'],
            ['Vehicles per home, average', '2.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Casey compares with the state',
          head: ['Share', 'Casey', 'Victoria'],
          rows: [
            ['Detached houses', '90.1% (102,149)', '73.4%'],
            ['Flats and apartments', '0.9% (1,007)', '12.1%'],
            ['Degree holders (bachelor or above)', '22.0% (61,966)', '29.2%'],
            ['Professional workers', '17.2% (29,881)', '25.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Littlest residents', p: '27,841 Casey residents, 7.6%, were under five.' },
            { h3: 'Upper primary age', p: '26,361, or 7.2%, were between 10 and 14, when many learners take up Python.' },
            { h3: 'A lockdown snapshot', p: 'Melbourne was in lockdown on Census night; the 17.9% of Casey workers at home (31,089) reflects those weeks.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds its percentages and adjusts small numbers for privacy. Every figure here is printed as QuickStats shows it, and no bands have been added together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Testing "is this station in Casey?"',
      intro: 'The ABS publishes the council outline as a polygon with 7,437 corner points. A ray-casting function decides whether a point is inside. We wrote one test case per station: the six with FY24-25 entries inside the boundary must come back True, and four nearby stations outside the line must come back False.',
      body: [
        {
          kind: 'table',
          caption: 'The ten real test cases (distances are our calculation)',
          head: ['Station', 'Expected', 'Distance to the boundary'],
          rows: [
            ['Lynbrook', 'inside', '0.50 km'],
            ['Berwick', 'inside', '1.73 km'],
            ['Hallam', 'inside', '1.81 km'],
            ['Merinda Park', 'inside', '2.10 km'],
            ['Cranbourne', 'inside', '3.92 km'],
            ['Narre Warren', 'inside', '4.97 km'],
            ['Beaconsfield', 'outside', '0.12 km'],
            ['Dandenong', 'outside', '1.53 km'],
            ['Officer', 'outside', '2.59 km'],
            ['Yarraman', 'outside', '3.44 km']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Three versions of the function against the ten cases',
          head: ['Version', 'Cases failed', 'Corner point', 'Edge midpoint'],
          rows: [
            ['Strict comparisons (< and >)', '0', 'outside', 'outside'],
            ['Inclusive comparisons (<= and >=)', '0', 'inside', 'inside'],
            ['Latitude and longitude swapped', '6 (all the inside stations)', 'outside', 'outside']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'subTest keeps going',
              p: 'A plain loop with assert stops at the first failure. Wrapping each case in self.subTest(station=name) runs all ten and reports each failing station by name, so the swapped version shows six labelled failures at once.'
            },
            {
              h3: 'Two versions both pass',
              p: 'The strict and inclusive versions agree on every station. They disagree only on points exactly on the outline, which no station is.'
            },
            {
              h3: 'So add boundary cases',
              p: 'We added a corner of the polygon and the midpoint of one edge. The suite then forces a decision: are boundary points in or out? The outline has 28 perfectly horizontal edges, which is where that choice bites.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A test suite is a set of decisions',
          p: 'Passing every real station proved nothing about the edge. Writing the two boundary cases made the team choose a rule and write it down, which is the real value of tests.'
        },
        {
          kind: 'p',
          text: 'Station positions come from the department\'s patronage file and boundary distances are measured to the ABS outline, so a station near the line is placed by those two sources alone. Nothing here says which council a station "belongs" to in any official sense.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'How the tests are written',
      h2: 'One test method, ten labelled cases',
      intro: 'unittest ships with Python, so no install is needed. A subTest block runs once per case and remembers which case failed.',
      body: [
        {
          kind: 'table',
          caption: 'The pattern, in plain words',
          head: ['Step', 'What the learner writes'],
          rows: [
            ['1', 'A list of (station, longitude, latitude, expected) tuples.'],
            ['2', 'One test method that loops over the list.'],
            ['3', 'Inside the loop, a with self.subTest(station=name) block.'],
            ['4', 'An assertEqual comparing the function\'s answer to the expected one.']
          ]
        },
        {
          kind: 'p',
          text: 'pytest offers the same idea through its parametrize marker, and many teams use it. We start with unittest because it is part of the standard library and its failure messages name each case clearly.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Draw a fence on grid paper and test which toy animals are inside, including one standing on the fence.' },
            { h3: 'Secondary students', p: 'Write the ten cases, break the function on purpose, and read the subTest report.' },
            { h3: 'Adults', p: 'Turn a spreadsheet of known answers into a labelled test suite for a work script.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Casey',
      h2: 'Casey schools and stations',
      intro: 'Counted from the 2025 school locations list and the metropolitan entries file, with the state term dates.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: '69 government schools',
              p: 'The 2025 file places 69 government schools in the council: 49 primary, 14 secondary, 3 combined primary and secondary, and 3 specific-purpose schools.'
            },
            {
              h3: 'Six stations',
              p: 'Berwick, Narre Warren, Hallam, Cranbourne, Merinda Park and Lynbrook have FY24-25 entries inside the boundary; Cranbourne recorded 1,054,250.'
            },
            {
              h3: 'First day of 2027',
              p: 'Government school students in Victoria begin the year on Thursday 28 January 2027, with Term 1 closing on Thursday 25 March.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Council boundary',
          p: 'All counts follow the ABS outline of the City of Casey, about 409.4 square kilometres. School addresses inside it include Berwick, Cranbourne, Narre Warren, Clyde North and Endeavour Hills.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From fences on paper to test suites',
    intro: 'Use these ages loosely. The trial lesson decides where each learner starts.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games with rules, then checking the rules by playing them.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Functions, if statements and the first simple checks.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with tests',
        p: 'Real functions, test suites and small algorithms.',
        courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Professional Python',
        p: 'Packages, testing and certificates for study or work.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'pcep-pcap-python-certification-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI writes the code, why should a Casey teenager write tests?',
    intro: 'Because tests are how anyone, human or machine, shows that code is right.',
    p1: 'Ask an assistant for a point-in-polygon function and you will usually get one that works on easy points. Whether it calls a boundary point inside or outside depends on which comparison it happened to use, and the code will not mention that it made a choice.',
    p2: 'A learner who has written the ten station cases plus two boundary cases can paste in any version, generated or not, and know within a second whether it matches the rule the team agreed. That is what makes AI-written code safe to use.',
    closer: 'For Casey learners, the skill that lasts is proving code right, whoever wrote it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Casey classes are taught',
    intro: 'Classes run on a video call, so learners in Berwick, Cranbourne or Hampton Park all join from home.',
    cells: [
      { h3: 'Live teaching', p: 'The learner shares their screen and the teacher reads and runs their code with them.' },
      { h3: 'State terms', p: 'The schedule tracks the Victorian school terms and pauses for the holidays.' },
      { h3: 'No-cost trial', p: 'A full first lesson for free, then a suggested course and weekly slot.' },
      { h3: 'Level-based groups', p: 'Fifteen to twenty learners of similar level, from many different places.' },
      { h3: 'Two lessons weekly', p: 'Two set lessons each week, about eight per month, for steady progress.' },
      { h3: 'Teachers in India', p: 'A 4:30pm Casey class is 11am India time under Melbourne daylight saving, and noon once it ends in April.' }
    ],
    spec: {
      title: 'Melbourne time first',
      p: 'Daylight saving in Melbourne lasts from Sunday 4 October 2026 to Sunday 4 April 2027. India does not change its clocks, so we write every time in Melbourne time.'
    }
  },
  fees: {
    h2: 'Casey class fees',
    intro: 'Simple and the same for every family.',
    first: 'The first lesson is free, and we finish it with clear advice.',
    group: 'A month of group lessons, normally eight, with fifteen to twenty learners at one level.',
    private: 'A month of private lessons, normally eight, just the learner and a teacher.',
    closer: 'Casey families pay in US dollars, as all families outside India do. No charge is made before the trial fixes a course and a time; holidays and missed lessons are covered on the pricing page.'
  },
  reviewsH2: 'Parents and students reviewing us on Google',
  book: {
    h2: 'Book a free Casey class',
    intro: 'Give us the learner\'s age and a hobby or two. A younger child could start with a Scratch game; an older one could write the station tests.',
    success: 'Thank you. We will be in touch soon about a Casey class.'
  },
  faq: {
    h2: 'Casey coding and Python questions',
    intro: 'What Casey families and adult learners ask before booking.',
    items: [
      { q: 'How many people live in the City of Casey?', a: 'The 2021 Census counted 365,239 residents in Casey, with a median age of 34.' },
      {
        q: 'What does subTest do in Python?',
        a: 'self.subTest is a context manager in unittest that runs a block once per case and reports each failing case separately, with its label, instead of stopping at the first failure.'
      },
      {
        q: 'What is a point-in-polygon test?',
        a: 'It decides whether a map point lies inside an outline. Ray casting counts how many edges a line from the point crosses: an odd count means inside.'
      },
      {
        q: 'Is Beaconsfield station in the City of Casey?',
        a: 'By the ABS boundary and the station position in the patronage file, no: it sits about 119 metres outside, by our calculation.'
      },
      { q: 'When should a child start Python?', a: 'Usually between nine and twelve, once typing is comfortable. Scratch builds the same logic earlier.' },
      {
        q: 'Can you prepare students for Python certificates?',
        a: 'Yes. Our PCEP and PCAP course prepares learners aged 13 and over for the Python Institute exams; results depend on the learner.'
      },
      {
        q: 'Do you have a Casey centre?',
        a: 'No. Classes are live online only, there is no Australian office, and the phone number we list is Indian.',
        boiler: true
      },
      {
        q: 'How much are Casey Python classes?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'What size are the groups?',
        a: 'Fifteen to twenty learners, matched by level, pace and goals, not by age or suburb; private lessons are offered when no group time works.',
        boiler: true
      },
      { q: 'Are there classes for adults in Casey?', a: 'Yes. Adults study in adult groups or privately, often testing scripts they already use at work.' }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Casey learners',
    html: 'The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> covers the whole city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> covers the state, and younger learners can start with <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for kids in Melbourne</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Casey and Melbourne',
  footerPlaces: [
    { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids in Melbourne' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-csey .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-csey .cg-hero h1 { font-weight: 630; letter-spacing: -0.015em; line-height: 1.12; }
.cg-root.cg-csey .cg-capsule { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.75rem; }
.cg-root.cg-csey .cg-eyebrow { letter-spacing: 0.07em; font-weight: 650; font-size: 0.81rem; }
.cg-root.cg-csey .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.008em; }
.cg-root.cg-csey .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.75rem); }
.cg-root.cg-csey .cg-table caption { text-align: left; font-style: normal; font-weight: 600; }
.cg-root.cg-csey .cg-table td:nth-child(2) { white-space: nowrap; }
.cg-root.cg-csey .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-csey .cg-callout { border-radius: 5px; }
`,
  dossier: {
    curriculumAuthority: 'City of Casey, ABS Census 2021 QuickStats, LGA21610 (read 10 October 2026): 365,239 people; median age 34; 97,338 families; 122,583 private dwellings; 3.1 people per household; 2.1 vehicles per dwelling; aged 0-4 27,841 (7.6%); 5-9 28,849 (7.9%); 10-14 26,361 (7.2%); bachelor or higher 61,966 (22.0%, Victoria 29.2%); professionals 29,881 (17.2%, Victoria 25.0%); worked at home 31,089 (17.9%, lockdown Census day); separate houses 102,149 (90.1%, Victoria 73.4%); flats 1,007 (0.9%, Victoria 12.1%). ABS LGA area 409.43 square kilometres. Victorian School Locations 2025: 69 government schools in Casey (C): 49 primary, 14 secondary, 3 Pri/Sec, 3 special. DTP FY24-25 metro entries inside the polygon: Berwick 1,008,200; Narre Warren 522,200; Hallam 521,500; Cranbourne 1,054,250; Merinda Park 577,750; Lynbrook 407,450. Victorian 2027 Term 1: 28 January to 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'unittest subTest test suite for a ray-casting point-in-polygon function on the ABS LGA21610 polygon (one ring, 7,437 vertices, 28 horizontal edges). Cases: 6 FY24-25 stations inside (Berwick, Narre Warren, Hallam, Cranbourne, Merinda Park, Lynbrook) and 4 nearby stations outside (Beaconsfield, Dandenong, Officer, Yarraman). Distance to boundary (our calculation, local equirectangular): Lynbrook 0.496 km, Berwick 1.728, Hallam 1.809, Merinda Park 2.095, Cranbourne 3.921, Narre Warren 4.965; Beaconsfield 0.119 km outside, Dandenong 1.525, Officer 2.587, Yarraman 3.437. Strict version 0 failures, inclusive (<=, >=) version 0 failures, swapped coordinates 6 failures (all inside stations). Corner point (vertex 100) and edge midpoint: strict says outside, inclusive says inside. Script: scratchpad au/b8/csey.py.',
    requiredMentions: ['365,239', '97,338', '122,583', '28,849', '102,149', '61,966', '7,437', '27,841', '1,054,250'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Casey local government area (LGA21610).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA21610'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council polygons and areas).',
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
        claim: 'Python documentation, unittest: distinguishing test iterations using subtests (TestCase.subTest).',
        url: 'https://docs.python.org/3/library/unittest.html#distinguishing-test-iterations-using-subtests'
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
      'That Beaconsfield or any station officially belongs to a particular council: not claimed; only position against the ABS outline is used.',
      'That one boundary rule is correct in general: not claimed; the page says the team must choose.',
      'Catholic or independent school counts and any sector breakdown: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Sums of Census age bands into a child total: not computed.',
      'Any affiliation with the City of Casey or the Victorian Department of Education.'
    ]
  }
};
