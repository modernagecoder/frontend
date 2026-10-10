'use strict';
// Castle Hill, Sydney (cg- district page, Australia cluster Phase 8, row 217). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*). Castle Hill is an ABS suburb and locality (SAL10846) that straddles two
// councils: our grid estimate against ABS 2021 polygons puts most of it in The Hills Shire and the rest in Hornsby
// Shire. Parents: Australia, NSW, Sydney.
// Spine: a Python dictionary that maps each suburb to one council quietly mislabels schools in suburbs that span two
// councils, Castle Hill among them. How does inverting the mapping with defaultdict(set) expose it?
// Data: NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, 2,210 rows, columns
// Town_suburb and LGA only (address data). Our checks (scratchpad au/b2/p7_csh.py): 1,620 raw Town_suburb keys,
// 1,328 after collapsing spaces and case; on raw keys 18 suburb names map to two LGAs, after normalising 25; 81
// schools sit in those 25 suburbs. A plain dict on cleaned keys where the last row wins mislabels 33 schools (first row wins: 32); on raw keys 21 (first: 23).
// Castle Hill rows: Castle Hill Public School, Castle Hill High School, Excelsior Public School, Samuel Gilbert
// Public School (LGA The Hills) and Oakhill Drive Public School (LGA Hornsby); the plain dict returns The Hills.
// 129 distinct LGA values; Hornsby 22 suburb names, The Hills 16.
// Lesson family: inverting a one-to-many mapping with defaultdict(set); screened 0 page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Castle Hill (NSW) SAL10846.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and selective columns. Castle Hill station usage is left to The Hills Shire page.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CASTLE HILL',
    label: 'Castle Hill, Sydney',
    blurb: 'Online coding and Python for Castle Hill, with a project on the suburb that one Python dictionary cannot place in a single council.'
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
  slug: 'online-coding-and-python-classes-in-castle-hill-sydney',
  code: 'cshl',
  accent: '#952C18',
  accentRationale: 'Castle Hill: a brick red (hue 10), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with strong contrast on white and on the paper tints',
  pageType: 'city',
  place: {
    name: 'Castle Hill',
    eyebrow: 'Castle Hill, north-west Sydney',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Castle Hill, Sydney',
  title: 'Online Coding and Python Classes in Castle Hill, Sydney',
  description: 'Live online coding and Python classes for Castle Hill children, teenagers and adults: Scratch at six, Python data projects later. First lesson free.',
  ogDescription: 'Python classes for Castle Hill, with a project on why a plain dictionary mislabels 33 NSW schools and defaultdict(set) does not.',
  twitterDescription: 'Castle Hill online coding and Python classes, live for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Castle Hill',
    description: 'Level-matched online coding and Python lessons for children, teenagers and adults in Castle Hill, Sydney, taught live in English.'
  },
  h1: 'Online coding and Python classes in Castle Hill',
  capsuleQ: 'What makes the best online coding and Python classes for Castle Hill learners?',
  capsule: 'A live teacher, a group at the right level, and projects built on real data. Our classes run from Scratch at six to Python for teenagers and adults. Castle Hill is a suburb of about 18.8 square kilometres that crosses two council areas; the 2021 Census counted 40,874 people there, median age 42.',
  lead: 'Write a Python dictionary that maps every NSW government school suburb to its council, and Castle Hill gets a single answer: The Hills. Four of its five public schools agree. Oakhill Drive Public School does not; the department lists it under Hornsby. Across the state, with suburb spellings tidied, the same shortcut mislabels 33 schools, and the program never complains. Flip the mapping round with defaultdict(set) and every suburb that belongs to two councils announces itself.',
  wa: 'Hello Modern Age Coders, we would like a free coding or Python lesson for a learner in Castle Hill.',
  picks: {
    eyebrow: 'Course picks for Castle Hill',
    h2: 'Python courses built around real data',
    intro: 'Each course reaches dictionaries and sets, the tools in this page\'s project. The free trial lesson decides the starting point, with no card details asked for.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python: lists, simple dictionaries and games that remember things.' },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 12 to 17',
        note: 'Dictionaries, sets and the collections module, applied to real public files.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'Ages 16 to adult',
        note: 'Hash maps, sets and graphs, and when a one-to-one mapping is the wrong model.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'From beginner to confident Python for data cleaning, automation and reporting.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Castle Hill in the Census',
      h2: 'A suburb of family houses that spans two councils',
      intro: 'QuickStats from the statistics bureau for the Castle Hill suburb and locality, against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Castle Hill, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '40,874'],
            ['Families', '11,503'],
            ['All private dwellings', '14,345'],
            ['Average people per household', '3'],
            ['Suburb area', 'About 18.8 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Castle Hill against the state and the country',
          head: ['Indicator', 'Castle Hill', 'NSW', 'Australia'],
          rows: [
            ['Separate houses among occupied homes', '73.7% (9,748)', '65.6%', '72.3%'],
            ['Couple families with children', '55.8% (6,423)', '44.7%', '43.7%'],
            ['Bachelor degree or higher', '42.9% (14,244)', '27.8%', '26.3%'],
            ['Managers among employed residents', '19.5% (3,770)', '14.6%', '13.7%'],
            ['Residents aged 15 to 19', '6.7% (2,739)', '5.7%', '5.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Mostly family houses', p: 'Nearly three in four occupied homes are separate houses, with flats or apartments at 15.3% and townhouses at 10.9%.' },
            {
              h3: 'Lots of school-age learners',
              p: 'Children aged 10 to 14 made up 7.9% of residents and teenagers aged 15 to 19 6.7%, both above the state shares.'
            },
            { h3: 'Two councils', p: 'Our check of the bureau\'s 2021 boundaries puts most of the suburb in The Hills Shire and a smaller part in Hornsby Shire.' }
          ]
        },
        {
          kind: 'p',
          text: 'Castle Hill is a suburb rather than a council, so these numbers describe the suburb itself. The bureau adjusts small cells for privacy, so table parts may not reach published totals, and we never add them up to make one.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One suburb, two councils: a Python dictionary that cannot cope',
      intro: 'The education department\'s school location file gives each school a suburb and a council. We used only those two address columns from its 2,210 rows.',
      body: [
        {
          kind: 'table',
          caption: 'Government schools with a Castle Hill address (NSW Department of Education)',
          head: ['School', 'Council in the file', 'First teacher'],
          rows: [
            ['Castle Hill Public School', 'The Hills', '1880'],
            ['Castle Hill High School', 'The Hills', '1963'],
            ['Excelsior Public School', 'The Hills', '1971'],
            ['Samuel Gilbert Public School', 'The Hills', '1986'],
            ['Oakhill Drive Public School', 'Hornsby', '1992']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Building suburb-to-council lookups three ways (our run on the file)',
          head: ['Approach', 'Suburbs found in two councils', 'Schools given the wrong council'],
          rows: [
            ['Plain dict, raw suburb text', 'Cannot tell', '21 if the last row wins, 23 if the first'],
            ['Plain dict, spaces and case cleaned', 'Cannot tell', '33 if the last row wins, 32 if the first'],
            ['defaultdict(set), raw suburb text', '18', 'None, but variants split'],
            ['defaultdict(set), spaces and case cleaned', '25', 'None']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The quiet overwrite',
              p: 'lookup[suburb] = council replaces the old value every time, so the answer for Castle Hill depends on which school happens to come last. Nothing warns you.'
            },
            {
              h3: 'Collect, do not replace',
              p: 'councils = defaultdict(set) and councils[suburb].add(council) keep every value. Castle Hill ends up holding both The Hills and Hornsby.'
            },
            {
              h3: 'Clean the keys first',
              p: 'The raw file has 1,620 suburb spellings; collapsing spaces and case leaves 1,328. Castle Hill itself is stored with a trailing space.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Castle Hill is not alone',
          p: 'Twenty-five suburb names point to two councils once the text is cleaned, among them Glenorie, Rouse Hill, Wahroonga, North Turramurra, West Ryde and Lane Cove. Together they hold 81 schools, which is why the overwrite bug reaches 33 of them statewide.'
        },
        {
          kind: 'p',
          text: 'Only school addresses are used: the suburb and council columns of the department\'s file. The counts of suburbs, keys and mislabelled schools are our own Python results, not departmental figures.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'After the fix',
      h2: 'More questions the inverted mapping can answer',
      intro: 'Once councils[suburb] is a set, a learner can turn the data round again and keep going.',
      body: [
        {
          kind: 'table',
          caption: 'Follow-on Python exercises',
          head: ['Question', 'Python idea', 'Result on the file'],
          rows: [
            ['How many councils appear?', 'len of a set of values', '129 council names'],
            [
              'Which suburbs does each council cover?',
              'Invert again into council to set of suburbs',
              'Hornsby 22 names, The Hills 16'
            ],
            ['Which suburbs are shared?', 'A comprehension filtering len(s) > 1', '25 suburb names'],
            ['Which council pairs share most?', 'Counter over frozenset pairs', 'A good open exercise']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Read the CSV, build both lookups, and print every school the plain dictionary gets wrong.' },
            { h3: 'University students', p: 'Discuss one-to-many and many-to-many relationships, and how a database would model suburbs and councils.' },
            { h3: 'Adults', p: 'Check the lookup tables in your own spreadsheets and scripts for the same silent overwrite.' }
          ]
        },
        {
          kind: 'p',
          text: 'The NSW Department of Education and the statistics bureau publish these open files and are not connected with Modern Age Coders; every count above comes from our own scripts.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'School year',
      h2: 'The 2027 school calendar for Castle Hill learners',
      intro: 'Lessons pause in the NSW school holidays, so the calendar shapes the class timetable.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Summer break', p: 'In the Eastern division, the summer holidays run from Friday 18 December 2026 to Wednesday 27 January 2027.' },
            { h3: 'Back to school', p: 'Students return for Term 1 on Wednesday 3 February 2027, after school development days for staff.' },
            { h3: 'Our timetable', p: 'Regular weekly classes pick up again once Term 1 is under way, at the time agreed for each learner.' }
          ]
        },
        {
          kind: 'spec',
          title: 'An address detail worth noticing',
          p: 'Sorting the five first-teacher dates is a quick warm-up: Castle Hill Public School is the oldest at 1880, and the Hornsby-listed Oakhill Drive Public School is the newest at 1992.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Scratch lists to Python dictionaries and sets',
    intro: 'The ages are approximate; the free first lesson finds the right rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and lists',
        p: 'Games that keep lists of scores and names, the first taste of storing data.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'Python basics',
        p: 'Variables, loops, lists and simple dictionaries, written and tested by hand.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Data structures',
        p: 'Sets, dictionaries, the collections module and real CSV files.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Modelling relationships',
        p: 'Hash maps, graphs and databases, and choosing the right structure for messy data.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant have caught the Castle Hill bug?',
    intro: 'Often not, unless the person asking knows to look for it.',
    p1: 'Ask an assistant for a suburb-to-council lookup and the most common answer is a plain dictionary built in a loop, the exact code that mislabels Oakhill Drive Public School. It runs cleanly and returns a tidy result, so the mistake hides.',
    p2: 'A learner who has inverted the mapping knows to ask whether any key can have more than one value, and can prompt for, or write, the defaultdict(set) version. Understanding data structures is what turns AI-written code from a guess into something checked.',
    closer: 'In 2026 code is cheap to generate; Castle Hill learners who understand why one suburb can belong to two councils write code that respects the real world.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online, whichever council your street is in',
    intro: 'The Hills Shire side or the Hornsby side, every Castle Hill learner joins the same live video lesson from home.',
    cells: [
      { h3: 'Real-time teaching', p: 'A teacher on video follows the learner\'s screen and corrects mistakes the moment they appear.' },
      { h3: 'Built around NSW', p: 'Lessons use NSW stage and syllabus language, and stop for state school holidays.' },
      { h3: 'Free trial', p: 'The opening lesson is a full class at no charge, ending with a suggested course, level and time.' },
      { h3: 'Same-level groups', p: 'Groups of five to ten learners of similar ability, or individual lessons where preferred.' },
      { h3: 'Regular schedule', p: 'Two lessons a week at fixed times, roughly eight a month, with breaks planned ahead.' },
      { h3: 'Teachers in India', p: 'A 4:15pm Castle Hill lesson in summer is 10:45am India time, and 11:45am once Sydney leaves daylight saving.' }
    ],
    spec: {
      title: 'Two time zones',
      p: 'Sydney daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027; India does not change its clocks. That moves the gap between 5 hours 30 minutes and 4 hours 30 minutes, and our times are always given in Sydney time.'
    }
  },
  fees: {
    h2: 'Castle Hill lesson fees',
    intro: 'Straightforward prices, identical for every course.',
    first: 'One whole lesson free, with a course and timetable suggested at the end.',
    group: 'Two weekly lessons for a month, about eight, with five to ten learners at one level.',
    private: 'One-to-one teaching at the same rhythm, around eight lessons a month.',
    closer: 'Outside India we invoice in US dollars, so Castle Hill households on either side of the council line pay the same. Payment starts only after the trial agrees a course and time; the pricing page sets out breaks, missed lessons and format changes.'
  },
  reviewsH2: 'What parents write on Google',
  book: {
    h2: 'Start with an age and an interest',
    intro: 'That lets a teacher prepare a fitting first lesson. A seven-year-old might build a Scratch game with a high-score list; a teenager or adult might load the school file in Python and find the suburbs shared by two councils.',
    success: 'Thank you. We will be in touch soon about a Castle Hill class.'
  },
  faq: {
    h2: 'Castle Hill coding and Python questions',
    intro: 'What Castle Hill families usually want to know.',
    items: [
      {
        q: 'How many people live in Castle Hill?',
        a: 'The 2021 Census QuickStats for the Castle Hill suburb and locality counted 40,874 people, with a median age of 42 and 11,503 families.'
      },
      {
        q: 'Is Castle Hill in The Hills Shire or Hornsby Shire?',
        a: 'Both. Our check against the statistics bureau\'s 2021 boundaries places most of the suburb in The Hills Shire and a smaller part in Hornsby Shire, and the education department lists one Castle Hill school under Hornsby.'
      },
      {
        q: 'What is defaultdict(set) in Python?',
        a: 'It is a dictionary from the collections module that creates an empty set the first time a key is used. Adding values to that set keeps all of them, which suits one-to-many data such as a suburb with two councils.'
      },
      {
        q: 'What does the Castle Hill project find?',
        a: 'With suburb spellings cleaned, a plain dictionary from suburb to council mislabels 33 NSW government schools, including Oakhill Drive Public School. Building sets instead reveals 25 suburb names shared by two councils.'
      },
      {
        q: 'Does the course help with HSC subjects?',
        a: 'Teachers follow NSW syllabus terms and can explain programming ideas met in senior subjects, while all assessed work stays the student\'s own.'
      },
      { q: 'What age can a child start?', a: 'Six is a good age to begin with Scratch. Python projects like this one usually start around 12 or 13.' },
      {
        q: 'What equipment is needed?',
        a: 'A laptop or desktop computer with a microphone, speakers or headphones, and a reliable internet connection. Tablets are not ideal for typing Python.'
      },
      {
        q: 'Do you teach in Castle Hill in person?',
        a: 'No. We teach only online and have no premises in Australia, including Castle Hill. Our contact phone number is an Indian one.',
        boiler: true
      },
      {
        q: 'What do online coding classes cost for Castle Hill learners?',
        a: 'The first lesson is free. Group classes are USD 100 a month for two live lessons a week, about eight each month, with five to ten learners; one-to-one costs USD 150 a month on the same plan. No payment is taken until the course and time are agreed.',
        boiler: true
      },
      {
        q: 'How large are the groups?',
        a: 'Five to ten learners, grouped by level and goals rather than age. If no group fits the learner\'s availability, one-to-one lessons are offered.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Nearby guides',
    h2: 'More for Castle Hill learners',
    html: 'Castle Hill sits across two council pages: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-the-hills-shire-sydney">coding and AI classes in The Hills Shire</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hornsby-sydney">online coding and Python classes in Hornsby</a>. For the whole city see <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>, and children leaving Scratch behind can read <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">after Scratch: the next step to Python</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Castle Hill and the Hills district',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/best-coding-and-ai-classes-in-the-hills-shire-sydney', label: 'The Hills Shire' },
    { href: '/online-coding-and-python-classes-in-hornsby-sydney', label: 'Hornsby' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-cshl .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 2.7vw, 2.4rem); }
.cg-root.cg-cshl .cg-hero h1 { font-weight: 700; letter-spacing: -0.017em; line-height: 1.1; }
.cg-root.cg-cshl .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1rem; }
.cg-root.cg-cshl .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-cshl .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-cshl .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.7rem); }
.cg-root.cg-cshl .cg-table caption { font-weight: 700; text-align: left; padding-bottom: 0.35rem; }
.cg-root.cg-cshl .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-cshl .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-cshl .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Castle Hill, ABS Census 2021 QuickStats, Castle Hill (NSW) suburb and locality SAL10846 (read 10 October 2026): 40,874 people; median age 42; 11,503 families; 14,345 private dwellings; average 3 people per household; separate houses 73.7% (9,748), flats or apartments 15.3% (2,026), semi-detached 10.9% (1,436); couple families with children 55.8% (6,423); bachelor degree or higher 42.9% (14,244); managers 19.5% (3,770); professionals 34.7% (6,722); aged 10 to 14 7.9%; aged 15 to 19 6.7% (2,739). ABS ASGS 2021 SAL area 18.8102 square kilometres; our grid estimate splits it between The Hills Shire (most) and Hornsby (the rest). NSW Department of Education 2027 calendar, Eastern division: summer holidays Friday 18 December 2026 to Wednesday 27 January 2027; students Term 1 from Wednesday 3 February 2027.',
    localProject: 'Inverting a one-to-many mapping with defaultdict(set). NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, 2,210 rows, Town_suburb and LGA columns. 1,620 raw suburb keys, 1,328 normalised; 18 multi-council suburb names on raw keys, 25 normalised, holding 81 schools; plain dict on cleaned keys mislabels 33 schools (last wins) or 32 (first wins); on raw keys 21 or 23. Castle Hill: Castle Hill Public School 1880, Castle Hill High School 1963, Excelsior Public School 1971, Samuel Gilbert Public School 1986 (The Hills), Oakhill Drive Public School 1992 (Hornsby); stored with a trailing space. 129 LGA values; Hornsby 22 suburb names, The Hills 16.',
    requiredMentions: ['40,874', '11,503', '14,345', '9,748', '6,423', '14,244', 'Oakhill Drive Public School', 'Excelsior Public School', '1,328'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Castle Hill (NSW) suburb and locality (SAL10846): people, median age, families, dwellings, dwelling structure, family composition, education, occupation, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10846'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution); suburb and council columns only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) suburbs and localities: Castle Hill boundary and area, used for the council split.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'Python documentation, collections.defaultdict.', url: 'https://docs.python.org/3/library/collections.html#collections.defaultdict' },
      {
        claim: 'NSW Department of Education, 2027 term dates and school holidays, Eastern division.',
        url: 'https://education.nsw.gov.au/schooling/calendars/2027'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'An exact percentage split of Castle Hill between the two councils: our grid estimate is approximate, so the page says only most and the rest.',
      'Castle Hill metro station usage: covered on The Hills Shire page and not repeated here.',
      'Which streets fall in which council: not verified.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the master dataset: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, The Hills Shire Council, Hornsby Shire Council or the ABS.'
    ]
  }
};
