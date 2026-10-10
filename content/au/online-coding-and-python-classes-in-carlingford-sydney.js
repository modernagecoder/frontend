'use strict';
// Carlingford, Sydney (cg- district page, Australia cluster Phase 8, row 241). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*). Carlingford is an ABS suburb and locality (SAL10817); its seven state
// schools are in City of Parramatta council. Parents: Australia, NSW, Sydney.
// Spine: arrange the Parramatta Light Rail's monthly stop entries as a 21 x 16 NumPy matrix. One matrix product
// gives monthly line entries, another gives totals by stop; the wrong one raises a shape error. Where does the
// Carlingford terminus rank?
// Data: Transport for NSW, monthly entries and exits (Opal, CC BY), the 16 Parramatta Light Rail stops present in
// the file, December 2024 (first light rail month in the file) to August 2026; no suppressed cells.
// Our run (scratchpad au/b5/crl_mm.py): M shape (21, 16); M @ ones(16) gives monthly line entries, min 91,771
// (December 2024), max 429,899 (March 2026); ones(21) @ M gives stop totals; Carlingford 416,808, 5th of 16,
// 6.07% of recorded entries; Telopea 266,656, Dundas 198,407; Carlingford monthly min 11,621 (Dec 2024), max
// 23,923 (Aug 2026); two termini via M @ w: 19,720 (Dec 2024), 46,532 (Aug 2026); M @ ones(21) raises
// "matmul: Input operand 1 has a mismatch in its core dimension 0".
// Lesson family: matrix multiplication with NumPy; claimed 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Carlingford (NSW) SAL10817; ABS ASGS 2021 SAL area 8.5522 square km.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health, journey to work and
// working at home; enrolment, ICSEA, Indigenous, LBOTE and selective columns (no school described as selective);
// the line's opening date and any cause of monthly changes; hospital stop names not used.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CARLINGFORD',
    label: 'Carlingford, Sydney',
    blurb: 'Online coding and Python for Carlingford, with a NumPy project that turns light rail stop entries into a matrix and ranks the Carlingford terminus.'
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
  slug: 'online-coding-and-python-classes-in-carlingford-sydney',
  code: 'crlf',
  accent: '#363384',
  accentRationale: 'Carlingford: a deep indigo (hue 242) for the end of the line, chosen by hand at least 10 RGB units from every accent declared in content, the shared stylesheets and the claims log, with strong contrast on white and the paper tints',
  pageType: 'city',
  place: {
    name: 'Carlingford',
    eyebrow: 'Carlingford, City of Parramatta',
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
  routeLabel: 'Carlingford, Sydney',
  title: 'Online Coding and Python Classes in Carlingford, Sydney',
  description: 'Live online coding and Python classes for Carlingford learners aged 6 to 67, with a NumPy project on Parramatta Light Rail stop data. First lesson free.',
  ogDescription: 'Python for Carlingford: light rail stop entries as a 21 by 16 matrix, two matrix products, one shape error and the terminus ranked.',
  twitterDescription: 'Carlingford online coding and Python classes, live for ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Carlingford',
    description: 'Level-matched online coding, Python and data lessons for children, teenagers and adults in Carlingford, Sydney, taught live in English.'
  },
  h1: 'Online coding and Python classes in Carlingford',
  capsuleQ: 'What do online coding and Python classes offer Carlingford learners?',
  capsule: 'Live teaching in small groups matched by level, from Scratch at six to Python, NumPy and data work for teenagers and adults. Carlingford covers about 8.55 square kilometres in the City of Parramatta; the 2021 Census counted 28,044 residents, median age 38.',
  lead: 'Carlingford sits at the northern end of the Parramatta Light Rail, and Transport for NSW publishes how many people tap on at each of the 16 stops every month. Put those numbers in a grid, one row per month and one column per stop, and you have a matrix. Multiply it by a column of ones and you get each month\'s entries for the whole line; multiply a row of ones by it and you get each stop\'s total. Get the order wrong and NumPy refuses. It is the cleanest first lesson in matrix multiplication we know, and it ranks Carlingford fifth of 16.',
  wa: 'Hello Modern Age Coders, we would like a free coding or Python lesson for a learner in Carlingford.',
  picks: {
    eyebrow: 'Course picks for Carlingford',
    h2: 'Python courses that reach real data and maths',
    intro: 'Each course works up to arrays, tables and calculations on public data. The opening lesson is free and places the learner, and booking needs no card.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python, lists of numbers and simple totals.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'NumPy, pandas and charts on real datasets.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 17', note: 'Functions, files and data structures for bigger programs.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Arrays, linear algebra and analysis for work or study.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Carlingford in the Census',
      h2: 'Houses, apartments and young families',
      intro: 'The 2021 Census profile of the Carlingford suburb and locality alongside the state and the country.',
      body: [
        {
          kind: 'table',
          caption: 'Carlingford, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '28,044'],
            ['Median age', '38'],
            ['Families', '8,017'],
            ['Private dwellings', '10,144'],
            ['Average people per household', '3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Carlingford next to NSW and Australia',
          head: ['Indicator', 'Carlingford', 'NSW', 'Australia'],
          rows: [
            ['Flats or apartments among occupied homes', '29.5% (2,682)', '21.7%', '14.2%'],
            ['Bachelor degree or higher (aged 15 and over)', '44.7% (9,911)', '27.8%', '26.3%'],
            ['Children aged 5 to 9', '8.6% (2,419)', '6.2%', '6.2%'],
            ['Professionals among employed residents', '35.5% (4,365)', '25.8%', '24.0%'],
            ['Couple families with children', '56.4% (4,518)', '44.7%', '43.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Apartments', p: 'Close to three occupied homes in ten were flats or apartments, above the state share of 21.7%.' },
            { h3: 'Primary-age children', p: 'Children aged 5 to 9 made up 8.6% of residents, against 6.2% across New South Wales.' },
            { h3: 'Graduates', p: '44.7% of residents aged 15 and over held a bachelor degree or higher.' }
          ]
        },
        {
          kind: 'p',
          text: 'These numbers describe the suburb and locality only. Because small Census cells are randomly adjusted, the page never adds published parts together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The light rail as a 21 by 16 matrix',
      intro: 'Rows are the 21 months from December 2024, the first light rail month in the file, to August 2026. Columns are the 16 Parramatta Light Rail stops. Each cell is that stop\'s entries in that month; none of the 336 cells is suppressed.',
      body: [
        {
          kind: 'table',
          caption: 'Three products of the matrix M (our NumPy run)',
          head: ['Expression', 'Result shape', 'What it means'],
          rows: [
            ['M @ ones(16)', '21 numbers', 'Entries on the whole line each month'],
            ['ones(21) @ M', '16 numbers', 'Entries at each stop over all 21 months'],
            ['M @ ones(21)', 'ValueError', 'Inner sizes 16 and 21 do not match']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What the products show (our calculation of recorded entries)',
          head: ['Measure', 'Value'],
          rows: [
            ['Quietest month on the line', 'December 2024, 91,771'],
            ['Busiest month on the line', 'March 2026, 429,899'],
            ['Carlingford stop, 21 months', '416,808, 5th of 16 stops'],
            ['Carlingford share of the line', '6.07%'],
            ['Telopea and Dundas, the next stops south', '266,656 and 198,407']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Inner sizes must agree',
              p: 'An (a, b) matrix times a (b, c) matrix gives (a, c). M is (21, 16), so it can only be multiplied on the right by something with 16 rows.'
            },
            {
              h3: 'A weight vector',
              p: 'Put 1 under Westmead and Carlingford and 0 elsewhere, and M @ w gives the two ends of the line: 19,720 in December 2024 and 46,532 in August 2026.'
            },
            {
              h3: 'One stop, by month',
              p: 'Column Carlingford alone runs from 11,621 entries in December 2024 to 23,923 in August 2026, its highest month in the file.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The error worth reading',
          p: 'NumPy\'s message for <code>M @ ones(21)</code> begins "matmul: Input operand 1 has a mismatch in its core dimension 0". Translating that sentence into "the inner sizes differ" is the point where matrix multiplication starts to make sense.'
        },
        {
          kind: 'p',
          text: 'Stop entries come from Transport for NSW\'s monthly Opal figures. Entries count tap-ons, not different people; the sums, shares and ranks are our own calculation, not published totals.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Going further',
      h2: 'From one product to linear algebra',
      intro: 'The same matrix supports a sequence of harder exercises.',
      body: [
        {
          kind: 'table',
          caption: 'Follow-on exercises with M',
          head: ['Exercise', 'NumPy idea', 'Carlingford angle'],
          rows: [
            ['Shares by stop', 'Divide the stop totals by their sum', 'Carlingford 6.07% of recorded entries'],
            ['Month-on-month change', 'np.diff along axis 0', 'Which months rise or fall at the terminus'],
            ['Exits too', 'A second matrix of the same shape', 'Compare entries and exits stop by stop'],
            ['Ranking', 'np.argsort on the stop totals', 'Fifth of 16, behind four stops nearer Parramatta']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Fill a small times-table grid and add up its rows and columns by hand, then in Python.' },
            { h3: 'Teenagers', p: 'Build M from the CSV, compute both products and explain each shape before running the code.' },
            { h3: 'Adults', p: 'Replace spreadsheet SUM formulas with one matrix product and check the results agree.' }
          ]
        },
        { kind: 'p', text: 'Transport for NSW publishes the entry figures openly and is not connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and the school year',
      h2: 'Seven state schools in Carlingford',
      intro: 'All seven are in City of Parramatta council, with first-teacher dates from 1883 to 1969.',
      body: [
        {
          kind: 'table',
          caption: 'NSW government schools with a Carlingford address',
          head: ['School', 'Level', 'First teacher'],
          rows: [
            ['Carlingford Public School', 'Primary', '1883'],
            ['Cumberland High School', 'Secondary', '1962'],
            ['James Ruse Agricultural High School', 'Secondary', '1962'],
            ['Roselea Public School', 'Primary', '1965'],
            ['Carlingford West Public School', 'Primary', '1967'],
            ['Carlingford High School', 'Secondary', '1968'],
            ['Murray Farm Public School', 'Primary', '1969']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Winter holidays 2027', p: 'For Eastern division schools, Monday 5 July to Friday 16 July 2027.' },
            { h3: 'Spring holidays 2027', p: 'Monday 27 September to Friday 8 October, between Terms 3 and 4.' },
            { h3: 'Lessons in the breaks', p: 'Carlingford groups pause for state holidays and restart in the usual weekly slot.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From grids in Scratch to matrices in NumPy',
    intro: 'Ages are indicative; the trial lesson sets the actual level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and grids',
        p: 'Games on a grid, with rows and columns the player moves through.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'First Python',
        p: 'Lists, nested lists and adding up rows.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'NumPy and data',
        p: 'Arrays, shapes, products and charts from open data.',
        courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Linear algebra in code',
        p: 'Matrices for analysis, statistics and machine learning.',
        courses: ['data-science-complete-masterclass-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Matrix products are what AI models run on',
    intro: 'The operation in this project is the same one inside every neural network.',
    p1: 'A language model spends most of its time multiplying large matrices. An assistant can write M @ ones(16) for you, but if it swaps the order it either crashes or, with a square matrix, silently computes the wrong thing. Knowing which axis is which is what lets you tell.',
    p2: 'Carlingford learners who have built the light rail matrix by hand can read the shape of any array an AI tool hands back, and spot the transposed one.',
    closer: 'In 2026 assistants write NumPy quickly; Carlingford learners who understand shapes are the ones who catch the wrong product before it reaches a report.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Carlingford learners at home',
    intro: 'Each session is live on video, so Carlingford learners join from home.',
    cells: [
      { h3: 'Coding together', p: 'Learner and teacher work through the code in real time, screen shared.' },
      { h3: 'NSW school framing', p: 'Plans use the state\'s stages and years and respect its calendar.' },
      { h3: 'Free starter lesson', p: 'A full first class costs nothing and ends with a course and time suggested.' },
      { h3: 'Groups by ability', p: 'Five to ten learners at a similar level; one-to-one also available.' },
      { h3: 'Two slots weekly', p: 'About eight lessons a month at the same times, with breaks listed ahead.' },
      { h3: 'Teachers in India', p: 'A 7pm Carlingford lesson is 1:30pm India time in Sydney summer time and 2:30pm outside it.' }
    ],
    spec: {
      title: 'Sydney and India time',
      p: 'From Sunday 4 October 2026 to Sunday 4 April 2027 Sydney is on daylight saving, and India never changes its clocks, so the difference is 5 hours 30 minutes in that period and 4 hours 30 minutes otherwise. All our lesson times are stated in Sydney time.'
    }
  },
  fees: {
    h2: 'Carlingford lesson fees',
    intro: 'The same flat rate for every course and every age.',
    first: 'Your first lesson is free and comes with a recommended course and timetable.',
    group: 'Group classes twice a week, close to eight a month, with five to ten learners at one level.',
    private: 'One-to-one lessons at the same frequency, about eight a month.',
    closer: 'Carlingford families are billed in US dollars, and only once the trial has led to an agreed course and time. Holidays, missed lessons and changing format are covered on the pricing page.'
  },
  reviewsH2: 'Google reviews',
  book: {
    h2: 'Request a free first lesson',
    intro: 'Just give an age and something the learner likes. A six-year-old might start with a Scratch grid game; a teenager or adult might build the light rail matrix.',
    success: 'Thank you. We will be in touch soon about a Carlingford class.'
  },
  faq: {
    h2: 'Carlingford coding and Python questions',
    intro: 'Questions Carlingford families send us.',
    items: [
      {
        q: 'How many people live in Carlingford?',
        a: 'The 2021 Census QuickStats for the Carlingford suburb and locality counted 28,044 residents, median age 38, in 8,017 families and 10,144 private dwellings.'
      },
      {
        q: 'What is matrix multiplication in NumPy?',
        a: 'The @ operator multiplies arrays whose inner sizes match: a (21, 16) matrix times a vector of 16 values gives 21 values. If the sizes do not match, NumPy raises a ValueError.'
      },
      {
        q: 'How busy is the Carlingford light rail stop?',
        a: 'In Transport for NSW monthly figures from December 2024 to August 2026, the Carlingford stop recorded 416,808 entries, 5th of the 16 Parramatta Light Rail stops by our calculation.'
      },
      {
        q: 'What will my child learn from the project?',
        a: 'How to build an array from a CSV file, what its shape means, how to total rows and columns with one product, and how to read a shape error.'
      },
      {
        q: 'Which state schools are in Carlingford?',
        a: 'Carlingford, Carlingford West, Roselea and Murray Farm public schools, and Carlingford, Cumberland and James Ruse Agricultural high schools, all in City of Parramatta council.'
      },
      { q: 'From what age can a child start?', a: 'Scratch from six. NumPy projects suit learners from about 13 who are comfortable with Python lists.' },
      {
        q: 'Which device should a learner use?',
        a: 'A laptop or desktop with a keyboard, any current browser, a microphone and a reliable internet connection.'
      },
      {
        q: 'Do you run classes in Carlingford itself?',
        a: 'No. We teach only online and have no premises anywhere in Australia, including Carlingford. Our contact phone number is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do Carlingford lessons cost?',
        a: 'The first lesson is free. A group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one is USD 150 a month on the same plan. Nothing is charged before a course and time are agreed.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Five to ten learners, grouped by level and goals rather than age. If no group fits the learner\'s schedule, one-to-one lessons are offered instead.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Nearby guides',
    h2: 'More for Carlingford learners',
    html: 'The other end of the light rail is covered on <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-parramatta-sydney">coding and AI classes in Parramatta</a>, and the suburb to the east on <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-epping-sydney">vibe coding and AI agents classes in Epping</a>. To the north-west is <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-baulkham-hills-sydney">coding and AI classes in Baulkham Hills</a>, and the city guide is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Carlingford and the City of Parramatta',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/vibe-coding-and-ai-agents-classes-in-epping-sydney', label: 'Epping' },
    { href: '/best-coding-and-ai-classes-in-baulkham-hills-sydney', label: 'Baulkham Hills' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' }
  ],
  personalityCss: `
.cg-root.cg-crlf .cg-hero-grid { align-items: start; gap: clamp(0.95rem, 2.3vw, 2rem); }
.cg-root.cg-crlf .cg-hero h1 { font-weight: 720; letter-spacing: -0.016em; line-height: 1.13; }
.cg-root.cg-crlf .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.7rem 0; }
.cg-root.cg-crlf .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-crlf .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.011em; }
.cg-root.cg-crlf .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.65rem); }
.cg-root.cg-crlf .cg-table caption { font-weight: 700; text-align: left; padding-bottom: 0.5rem; }
.cg-root.cg-crlf .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-crlf .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-crlf .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Carlingford, ABS Census 2021 QuickStats, Carlingford (NSW) suburb and locality SAL10817 (read 10 October 2026): 28,044 people; median age 38; 8,017 families; 10,144 private dwellings; average 3 people per household; flats 29.5% (2,682); bachelor degree or higher 44.7% (9,911); aged 5 to 9 8.6% (2,419); professionals 35.5% (4,365); couple families with children 56.4% (4,518). ABS ASGS 2021 SAL area 8.5522 square kilometres. NSW Department of Education master dataset, suburb Carlingford, City of Parramatta: Carlingford Public School (1883), Cumberland High School (1962), James Ruse Agricultural High School (1962), Roselea Public School (1965), Carlingford West Public School (1967), Carlingford High School (1968), Murray Farm Public School (1969). NSW 2027 Eastern division: winter holidays Monday 5 July to Friday 16 July; spring holidays Monday 27 September to Friday 8 October.',
    localProject: 'NumPy matrix multiplication on Transport for NSW monthly entries (Opal, CC BY) at the 16 Parramatta Light Rail stops, Dec 2024 to Aug 2026, M shape (21, 16), ours: M @ ones(16) monthly line entries min 91,771 (Dec 2024) max 429,899 (Mar 2026); ones(21) @ M stop totals, Carlingford 416,808, 5th of 16, 6.07%; Telopea 266,656, Dundas 198,407; Carlingford monthly 11,621 (Dec 2024) to 23,923 (Aug 2026); termini M @ w 19,720 to 46,532; M @ ones(21) raises a core dimension mismatch ValueError.',
    requiredMentions: ['28,044', '10,144', '416,808', '6.07%', '429,899', '91,771', 'Murray Farm Public School', 'Roselea Public School', '8.55 square kilometres'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Carlingford (NSW) suburb and locality (SAL10817): people, median age, families, dwellings, dwelling structure, qualifications, age, occupation, family composition.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10817'
      },
      {
        claim: 'Transport for NSW, monthly Opal entries and exits by station and light rail stop (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NumPy documentation, numpy.matmul and the @ operator: shapes and broadcasting rules.',
        url: 'https://numpy.org/doc/stable/reference/generated/numpy.matmul.html'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations (Creative Commons Attribution); names, suburbs, councils and first-teacher dates only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates and holidays, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      {
        claim: 'ABS ASGS Edition 3 (2021) suburbs and localities: Carlingford area.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      }
    ],
    rejectedClaims: [
      'The Parramatta Light Rail opening date: not stated; December 2024 is only described as the first light rail month in the file.',
      'Any reason for the monthly rise or fall in entries: not known from the data, so none is given.',
      'Any description of a Carlingford school as selective, or any enrolment, ICSEA, Indigenous or LBOTE figure: excluded by the cluster rules.',
      'Journey to work and working at home figures from the 2021 Census: excluded because the Census was taken during a lockdown period.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the ABS, Transport for NSW, City of Parramatta Council or the NSW Department of Education.'
    ]
  }
};
