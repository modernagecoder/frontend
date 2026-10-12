'use strict';
// Scarborough, Perth (cg- district page, Australia cluster Phase 8, row 313). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL51330, Scarborough (WA), City of Stirling) under Perth
// and Western Australia. Slug carries "wa" because England's Scarborough already has a page on this site.
// Spine: a script tallies the asset types of Scarborough's 73 stop records, keeps the largest count in a variable
// named max (20), then calls max() to find the longest stop name and crashes: TypeError: 'int' object is not callable.
// Renaming the variable fixes it; the longest name is 61 characters. Our run, scratchpad au/b14/scwa_bug.py.
// Data: PTA-001 Stops (CC BY 4.0). Lesson family: shadowing a built-in name; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SCARBOROUGH',
    label: 'Scarborough, Perth',
    blurb: 'Online coding and Python classes for Scarborough, WA, where a variable called max quietly breaks Python\'s own max() halfway through a stop survey.'
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
  slug: 'online-coding-and-python-classes-in-scarborough-wa-perth',
  code: 'scwa',
  accent: '#64201C',
  accentRationale: 'Scarborough: a dark oxblood (hue 3.3), 9.66:1 on #EDE7DA; 26.4 RGB from the nearest Western Australian accent, 13.2 from any other Australian accent and 7.9 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Scarborough',
    eyebrow: 'Scarborough, City of Stirling, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Scarborough' },
      { type: 'AdministrativeArea', name: 'City of Stirling' },
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
  routeLabel: 'Scarborough, Perth',
  title: 'Online Coding and Python Classes in Scarborough, Perth',
  description: 'Live online coding and Python classes for Scarborough, WA learners of all ages, from Scratch for children to Python data projects for teens and adults, in groups.',
  ogDescription: 'Scarborough Python project: 73 stop records, a variable named max set to 20, and the TypeError that appears when Python\'s own max() is needed later.',
  twitterDescription: 'Online Python for Scarborough, WA learners, taught live.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Scarborough, WA',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in Scarborough, Western Australia, taught live in English.'
  },
  h1: 'Online coding and Python classes in Scarborough',
  capsuleQ: 'What do Scarborough learners take away from online Python classes?',
  capsule: 'Clean, readable Python and the debugging sense to trace an error back to where it really started, often many lines earlier. Children begin with Scratch at six; teens and adults analyse real data. Scarborough in Western Australia had 17,605 residents in 2021.',
  lead: 'A short survey of Scarborough\'s 73 bus stop records goes well for ten lines. The script counts each kind of stop sign and remembers the biggest count in a variable called max. Ten lines later it asks Python\'s built-in max() for the longest stop name, and crashes.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Scarborough, WA.',
  picks: {
    eyebrow: 'Course picks for Scarborough',
    h2: 'Courses that build tidy Python habits',
    intro: 'The max() bug is about names, scope and reading error messages. These courses teach exactly that; the free trial sets the starting level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Names, functions and built-ins, with real debugging practice.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from first steps to well-structured programs.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Early Python with clear naming from the very start.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Data scripts that are readable, testable and safe to rerun.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Scarborough in the Census',
      h2: 'A coastal suburb of townhouses',
      intro: '2021 Census QuickStats for the suburb of Scarborough, Western Australia (ABS code SAL51330), with the state figure beside it.',
      body: [
        {
          kind: 'table',
          caption: 'Scarborough, WA in 2021',
          head: ['Measure', 'Scarborough'],
          rows: [
            ['Residents', '17,605'],
            ['Median age', '36'],
            ['Families', '4,463'],
            ['Private dwellings', '9,180'],
            ['People per household', '2.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Scarborough compared with the state',
          head: ['Indicator', 'Scarborough', 'Western Australia'],
          rows: [
            ['Semi-detached, row or townhouse homes', '47.6% (3,635)', '13.0%'],
            ['Separate houses', '36.2% (2,765)', '79.7%'],
            ['Flats or apartments', '16.1% (1,227)', '6.5%'],
            ['Adults with a bachelor degree or higher', '39.3% (5,924)', '23.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young children', p: 'Scarborough had 1,014 children under five, more than in either of the next two age bands.' },
            { h3: 'School ages', p: 'There were 832 residents aged 5 to 9 and 697 aged 10 to 14.' },
            { h3: 'On the coast', p: 'The ABS boundary covers about 5 square kilometres of Perth\'s northern beaches.' }
          ]
        },
        { kind: 'p', text: 'Census figures appear as the bureau published them; small privacy adjustments make adding cells unreliable, so we never do.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'When max stops being max()',
      intro: 'The script first counts the asset type of each of the 73 stop records inside Scarborough, by our boundary check. To find the most common type it loops through the counts, keeping the running largest in a variable called max. Later it needs the longest stop name and writes max(len(s) for s in names).',
      body: [
        {
          kind: 'table',
          caption: 'Asset types on Scarborough stop records (our count)',
          head: ['Asset type in the file', 'Records'],
          rows: [
            ['Infounit Narrow', '20'],
            ['Orange Post', '18'],
            ['InfoCube Plus', '17'],
            ['Infounit Small', '11'],
            ['Blue Post', '6'],
            ['InfoCube Real Time', '1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What our run printed (Python 3.13.6)',
          head: ['Step', 'Output'],
          rows: [
            ['max = 0, then the loop over counts', 'largest count 20'],
            ['max(len(s) for s in names)', 'TypeError: \'int\' object is not callable'],
            ['Rename the variable to largest', 'longest name 61 characters']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What went wrong',
              p: 'Assigning max = 0 made the name max point at a number for the rest of the script. Python found that number first and tried to call it.'
            },
            {
              h3: 'Why it is confusing',
              p: 'The error appears on the line that uses max(), not on the line that broke it. Beginners stare at a perfectly correct line.'
            },
            {
              h3: 'The longest name',
              p: 'With the variable renamed, the answer is a 61-character record that repeats Scarborough Beach Bus Stn twice before a Cat Id number.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Names to avoid',
          p: 'max, min, sum, list, dict, str, id, input and type are all built-in names that are easy to reuse by accident. Linters such as Pylint report it as redefining a built-in, which is the quickest way to catch the problem before it bites.'
        },
        {
          kind: 'p',
          text: 'Asset types and stop names come from the Public Transport Authority of Western Australia open data file; we report what the file says rather than what each sign type looks like. Membership of Scarborough and every count are from our own run.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Names in Python',
      h2: 'How Python finds a name',
      intro: 'Python looks for a name in the local scope, then any enclosing function, then the module, and only then the built-ins. A module-level max wins over the built-in max().',
      body: [
        {
          kind: 'table',
          caption: 'Fixes for a shadowed built-in',
          head: ['Fix', 'Code', 'When to use'],
          rows: [
            ['Rename the variable', 'largest = 0', 'Always the first choice'],
            ['Delete the shadowing name', 'del max', 'Quick repair in a notebook'],
            ['Reach the built-in directly', 'import builtins; builtins.max(...)', 'When the name cannot change'],
            ['Use a linter', 'Pylint warns on redefined built-ins', 'Before every commit']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Name a Scratch variable after a block, then see how confusing the program becomes to read aloud.' },
            { h3: 'Secondary learners', p: 'Recreate the Scarborough crash, read the traceback carefully, and trace it back to the line that caused it.' },
            { h3: 'Adults', p: 'In long notebooks, check for reused built-in names whenever a familiar function suddenly fails.' }
          ]
        },
        {
          kind: 'p',
          text: 'Notebooks make this worse: a cell that set max = 0 an hour ago still affects every later cell. Restarting the kernel and running from the top is often the fastest diagnosis.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Scarborough',
      h2: 'The beach bus station and West Coast Highway',
      intro: 'Details belonging to Scarborough itself, from the stops file and the WA school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Stop records', p: 'Our boundary check finds 73 stop records in Scarborough: 66 standard, 6 typed as school stops and 1 marked Standard/CAT.' },
            { h3: 'Busiest roads', p: 'West Coast Highway has the most stop records, 9, followed by Cobb Street with 7 and Stewart Street with 6.' },
            { h3: 'Term 3, 2027', p: 'WA public schools return for Term 3 on Monday 19 July 2027 and break on Friday 24 September.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Scarborough, Western Australia',
          p: 'This page is about the Perth suburb in the City of Stirling, not the English town. Its figures are for the suburb alone; Trigg, Doubleview, Karrinyup, Wembley Downs and City Beach border it and keep their own counts.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From naming sprites to debugging scripts',
    intro: 'A learner\'s trial lesson matters more than these age bands.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch blocks',
        p: 'Programs with clear, sensible names from day one.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Starting Python',
        p: 'Variables, functions and reading error messages.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python and data',
        p: 'Scripts that analyse real data and survive debugging.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Working Python',
        p: 'Readable, linted, automated code.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'When AI-written code crashes, who reads the traceback?',
    intro: 'Someone who can follow it back to the cause. AI tools explain errors well, but only for the code they can see.',
    p1: 'Paste the TypeError into an assistant with only the failing line and it may suggest rewriting a line that was already correct. The real cause, max = 0 ten lines earlier or in another notebook cell, is invisible to it.',
    p2: 'Learners who have chased the Scarborough crash learn to ask what each name currently refers to, and to share enough context for an AI to help properly. That is debugging as a skill, not guesswork.',
    closer: 'In Scarborough, the learner who traces an error to its source fixes it once.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Scarborough lessons, delivered live',
    intro: 'Lessons are given over video, so learners log in from home.',
    cells: [
      { h3: 'Debugging together', p: 'When code breaks, teacher and learner read the traceback side by side.' },
      { h3: 'Term planning', p: 'Classes follow the WA school calendar, with holidays off.' },
      { h3: 'Free first lesson', p: 'An opening class at no charge, with a written suggestion afterwards.' },
      { h3: 'Matched groups', p: 'Five to ten learners of similar level, or private lessons.' },
      { h3: 'Twice a week', p: 'Consistent weekly times, near eight lessons a month.' },
      { h3: 'India time', p: 'Our teachers are in India, so a 7:30pm Scarborough lesson starts at 5pm India time.' }
    ],
    spec: {
      title: 'One time difference',
      p: 'Perth has kept standard time all year since a daylight saving trial ended in March 2009 (IANA time zone database); with India also fixed, lessons never move.'
    }
  },
  fees: {
    h2: 'Scarborough class fees',
    intro: 'Three straightforward prices.',
    first: 'The first lesson costs nothing and finishes with advice in writing.',
    group: 'Close to eight group lessons a month with five to ten learners.',
    private: 'Close to eight one-to-one lessons a month.',
    closer: 'Scarborough families pay in US dollars, after the trial and only when course and time are agreed. Holidays, missed lessons and format changes are on the pricing page.'
  },
  reviewsH2: 'Google reviews from students and families',
  book: {
    h2: 'Book a free Scarborough lesson',
    intro: 'Tell us the learner\'s age and what they enjoy. A teenager might reproduce the max() crash; a younger child might start naming sprites in Scratch.',
    success: 'Thank you. We will get in touch soon about a Scarborough lesson.'
  },
  faq: {
    h2: 'Scarborough, WA Python questions',
    intro: 'Questions Scarborough parents and adult learners often ask.',
    items: [
      {
        q: 'How many people live in Scarborough, WA?',
        a: 'The 2021 Census QuickStats count 17,605 people in the suburb of Scarborough in Western Australia, with 9,180 private dwellings and a median age of 36.'
      },
      {
        q: 'What does "int object is not callable" mean?',
        a: 'Python tried to call something that is a number, as if it were a function. It usually means a variable has reused a function\'s name, such as max = 0 followed later by max(...).'
      },
      {
        q: 'What is shadowing a built-in in Python?',
        a: 'Giving a variable the same name as a built-in function, such as max, list or sum. The variable hides the built-in until it is renamed or deleted.'
      },
      {
        q: 'What did the Scarborough stop survey show?',
        a: 'After a variable called max stored the largest asset count, 20, the call max(len(s) for s in names) failed with a TypeError; renaming the variable gave the longest stop name, 61 characters.'
      },
      { q: 'When do children usually start Python?', a: 'Typically between eight and ten, after a grounding in Scratch. The trial lesson confirms readiness.' },
      { q: 'Can teenagers use Claude in classes?', a: 'No. Our Claude-based courses are for those aged 18 or over; teenagers use different AI tools.' },
      {
        q: 'Is there a classroom in Scarborough?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Scarborough learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do Scarborough groups learn Copilot Studio?', a: 'No. Copilot Studio is taught privately only; group learners create agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Perth and Western Australia',
    h2: 'More for Scarborough learners',
    html: 'Go to <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">the Perth page</a> for the city, or <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a> for children. Far up the coast, <a class="cg-inline-link" href="/ai-and-programming-classes-in-karratha">Karratha</a> has its own page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">the Western Australia guide</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Scarborough and Perth',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/ai-and-programming-classes-in-karratha', label: 'Karratha' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' }
  ],
  personalityCss: `
.cg-root.cg-scwa .cg-hero-grid { align-items: end; gap: clamp(0.98rem, 3.05vw, 2.4rem); }
.cg-root.cg-scwa .cg-hero h1 { font-weight: 655; letter-spacing: -0.016em; line-height: 1.1; }
.cg-root.cg-scwa .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.56rem 0 0.56rem 1.02rem; }
.cg-root.cg-scwa .cg-eyebrow { letter-spacing: 0.128em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-scwa .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.011em; }
.cg-root.cg-scwa .cg-grid-3 { gap: clamp(0.8rem, 2.15vw, 1.64rem); }
.cg-root.cg-scwa .cg-table caption { font-style: italic; font-weight: 630; text-align: left; }
.cg-root.cg-scwa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-scwa .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.92rem; }
.cg-root.cg-scwa .cg-callout { border-left-width: 6px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Scarborough (SAL51330, Scarborough (WA)), City of Stirling. ABS Census 2021 QuickStats (read 12 October 2026): 17,605 people; median age 36; 4,463 families; 9,180 private dwellings; 2.1 per household; semi-detached 3,635 (47.6%, WA 13.0%); separate houses 2,765 (36.2%, WA 79.7%); flats 1,227 (16.1%, WA 6.5%); bachelor or higher 5,924 (39.3%, WA 23.8%); aged 0-4 1,014; 5-9 832; 10-14 697. ABS SAL area 4.9915 sq km; council verified by ABS LGA point query (Stirling). PTA-001: 73 records inside the SAL polygon (Standard 66, School 6, Standard/CAT 1); asset Infounit Narrow 20, Orange Post 18, InfoCube Plus 17, Infounit Small 11, Blue Post 6, InfoCube Real Time 1; 13 names containing Cat Id; West Coast Hwy 9, Cobb St 7, Stewart St 6. Neighbours (ABS touches): City Beach, Doubleview, Karrinyup, Trigg, Wembley Downs. WA 2027 Term 3: Monday 19 July to Friday 24 September. Perth no daylight saving since March 2009 (IANA).',
    localProject: 'Shadowing a built-in. scwa_bug.py (Python 3.13.6): Counter of asset over 73 records; max = 0 loop -> 20; max(len(s) for s in names) -> TypeError: \'int\' object is not callable; after del max / rename, longest name length 61 (Scarborough Beach Bus Stn Scarborough Beach Bus Stn Cat Id 20).',
    requiredMentions: ['9,180', '3,635', '1,014', 'West Coast Highway', 'Cobb Street', 'Infounit Narrow', 'not callable', '61 characters', 'Scarborough Beach Bus Stn'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Scarborough (WA) suburb and locality (SAL51330), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL51330'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Public Transport Authority of Western Australia, Stops (PTA-001), Creative Commons Attribution 4.0, published on data.wa.gov.au; 16,822 stop records read from the SLIP map service on 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/public-transport-authority-stops-bus-stops'
      },
      {
        claim: 'Python documentation, Execution model, Resolution of names: names are looked up in the local, enclosing, global and then built-in namespaces.',
        url: 'https://docs.python.org/3/reference/executionmodel.html'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 public school terms as gazetted.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth follows rule AW, whose last daylight saving period ended in March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'What each asset type looks like on the street: not claimed; the page reports the file values.',
      'Passenger or service numbers at Scarborough stops: not claimed.',
      'Figures for the City of Stirling as a whole: not used.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Stirling or the Public Transport Authority.'
    ]
  }
};
