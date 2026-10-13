'use strict';
// Shepparton (cg- city page, Australia cluster Phase 7, row 156). Shaped page: online coding and Python for
// teenagers and adults. Place facts are for the ABS Shepparton - Mooroopna Significant Urban Area (2016).
// Spine: which playgrounds have a council bin close by, and how few distance checks does it take to find out?
// Data: Greater Shepparton City Council open data on data.gov.au, Creative Commons Attribution 4.0 International:
// "Playgrounds - Greater Shepparton" (playgrounds.csv, 127 rows: Neighbourhood 63, District 21, Recreation
// Reserve 18, Child Care 16, Regional 5, NCA 4), "Bins - Greater Shepparton" (bins.csv, 1,045 rows) and "Seats -
// Greater Shepparton" (seats.csv, 870 rows, one with longitude -81.67 and latitude 17.98, a point in the
// Caribbean Sea, location "City of Greater Shepparton", num_of 98), all downloaded 7 October 2026. Coordinates
// projected to local metres with an equirectangular approximation at latitude -36.38 (our calculation,
// scratchpad au/r3/shp_grid.py). Question: does a bin lie within R metres of each playground? Nested loops:
// 127 x 1,045 = 132,715 distance checks. Spatial hash: a dictionary keyed by (floor(x/R), floor(y/R)), checking
// the 3 x 3 block of cells around each playground: R = 50 m 367 checks, 599 occupied cells, 95 playgrounds with
// a bin and 32 without; R = 25 m 186 checks, 79 with; R = 100 m 770 checks, 108 with. Both methods give
// identical answers at every radius. Lesson family: spatial hash grid join versus nested loops; screened free
// site-wide on 7 October 2026 ("spatial hash", "spatial join", "bucket grid": 0 page hits; claimed by AU-R3).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Shepparton - Mooroopna Significant Urban
// Area (2016): 53,841 people; median age 38 (Victoria 38, Australia 38); 13,653 families; 22,547 private
// dwellings; 2.5 people per household; separate house 16,961 (86.7%; Victoria 73.4%; Australia 72.3%); flat or
// apartment 58 (0.3%; Victoria 12.1%); Technicians and Trades Workers 3,097 (13.3%; Victoria 12.6%); Bachelor
// Degree level and above 6,526 (15.1%; Victoria 29.2%; Australia 26.3%); aged 5 to 9 3,653 (6.8%); aged 15 to
// 19 3,248 (6.0%). Victorian Government, 2027 school term dates: Term 2 Monday 12 April to Friday 25 June; Term 3
// Monday 12 July to Friday 17 September. IANA tz: Australia/Melbourne daylight saving 4 October 2026 to 4 April
// 2027.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'SHEPPARTON', label: 'Shepparton', blurb: 'Online Python for Shepparton teens and adults, and a dictionary trick that cuts 132,715 distance checks to 367.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-shepparton',
  code: 'shp',
  accent: '#505010',
  accentRationale: 'Shepparton: a dark orchard olive (HSV saturation 0.80, value 0.31, hue 60), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 8.4:1 on white and 6.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Shepparton',
    eyebrow: 'Shepparton, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Shepparton, Victoria',
  title: 'Online Coding and Python Classes in Shepparton | Live Teacher',
  description: 'Live online coding and Python classes for Shepparton teenagers and adults: data, dictionaries and fast programs, taught by a real teacher. Your first lesson is free.',
  ogDescription: 'Python classes for Shepparton, with a project on council open data where a dictionary turns 132,715 distance checks into 367.',
  twitterDescription: 'Shepparton online Python and coding classes for teens and adults, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Python and Coding Classes for Shepparton Learners',
    description: 'Level-matched online Python, data structures, efficient algorithms and open data projects for teenagers and adults across Shepparton and Mooroopna, taught live in English.'
  },

  h1: 'Online coding and Python classes in Shepparton',
  capsuleQ: 'What are the best online coding and Python classes in Shepparton?',
  capsule: 'Lessons where a Shepparton teenager or adult writes Python live with a teacher and learns why one program is fast and another slow, using real council data. The 2021 Census counted 53,841 people in the Shepparton and Mooroopna urban area, with a median age of 38. Teaching happens live on camera, privately or with a handful of learners at your stage, and the first session is free.',
  lead: 'Greater Shepparton City Council publishes the location of its 127 playgrounds and 1,045 public bins as open data. Which playgrounds have a bin within 50 metres? The obvious program measures the distance from every playground to every bin: 132,715 checks. A better program drops each bin into a grid of 50-metre squares stored in a Python dictionary, then looks only in the nine squares around each playground. It makes 367 checks and gets exactly the same answer: 95 playgrounds have a bin that close, 32 do not. Our Shepparton project teaches that idea, a spatial hash, from first principles.',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Shepparton.',

  picks: {
    eyebrow: 'Course picks for Shepparton',
    h2: 'Python courses for a Shepparton learner',
    intro: 'Each course builds towards the grid project. The free first lesson places you, and we do not ask for card details.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python fundamentals, with dictionaries and loops practised on council data from the start.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Data structures and the reasoning that makes programs fast, tested on real files.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Hashing, indexing and complexity, the ideas that separate a slow script from a quick one.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python that reads, checks and processes the data your work depends on, automatically.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Shepparton in the Census',
      h2: 'A city of family houses in the Goulburn Valley',
      intro: 'Published figures for the Shepparton - Mooroopna Significant Urban Area from the 2021 Census, with Victoria and Australia for context.',
      body: [
        { kind: 'table', caption: 'Shepparton and Mooroopna urban area, 2021 Census QuickStats', head: ['Census item', 'Total'], rows: [
          ['People', '53,841'],
          ['Families', '13,653'],
          ['Private dwellings', '22,547'],
          ['People per household on average', '2.5']
        ] },
        { kind: 'table', mt: true, caption: 'A few comparisons with Victoria and Australia', head: ['Measure', 'Shepparton - Mooroopna', 'Victoria', 'Australia'], rows: [
          ['Median age', '38', '38', '38'],
          ['Separate houses among occupied homes', '86.7% (16,961)', '73.4%', '72.3%'],
          ['Flats or apartments among occupied homes', '0.3% (58)', '12.1%', '14.2%'],
          ['Bachelor degree or above, residents 15 and over', '15.1% (6,526)', '29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The state\'s median age', p: 'At 38, the urban area\'s median age matches both Victoria and Australia exactly.' },
          { h3: 'Hardly any apartments', p: 'Only 58 occupied homes were flats or apartments, 0.3%, against 12.1% across Victoria.' },
          { h3: 'School-age residents', p: 'The Census counted 3,653 residents aged 5 to 9 and 3,248 aged 15 to 19.' }
        ] },
        { kind: 'p', text: 'Census tables and privacy: the bureau shifts each cell by a tiny random amount so nobody can be identified, which means parts of a table may not total exactly. We report the published totals and percentages and do not construct totals by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Shepparton playgrounds have a bin nearby, and how few checks does it take?',
      intro: 'Greater Shepparton City Council publishes playgrounds, bins and seats as open data. We matched playgrounds to nearby bins twice, once with nested loops and once with a spatial hash, and counted the work.',
      body: [
        { kind: 'table', caption: 'The council files, downloaded 7 October 2026 (our count)', head: ['File', 'Rows', 'Note'], rows: [
          ['Playgrounds', '127', '63 neighbourhood, 21 district, 18 recreation reserve, 16 child care, 5 regional, 4 other'],
          ['Bins', '1,045', 'Every row has a usable location'],
          ['Seats', '870', 'One row sits at latitude 17.98, longitude -81.67, in the Caribbean Sea']
        ] },
        { kind: 'table', mt: true, caption: 'Playgrounds with a bin within a given distance (our calculation)', head: ['Distance', 'Playgrounds with a bin', 'Checks, nested loops', 'Checks, spatial hash'], rows: [
          ['25 m', '79', '132,715', '186'],
          ['50 m', '95', '132,715', '367'],
          ['100 m', '108', '132,715', '770']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Cut the map into squares', p: 'Divide x and y by the search distance and round down. With 50-metre squares, the 1,045 bins fall into 599 different squares.' },
          { h3: '2. Store squares in a dictionary', p: 'Use the pair of square numbers as the key and a list of bins as the value. Building it takes one pass through the file.' },
          { h3: '3. Look only next door', p: 'A bin within 50 m of a playground must sit in the playground\'s square or one of the eight around it, so those nine are the only places worth checking.' }
        ] },
        { kind: 'callout', h3: 'Same answer, a fraction of the work', p: 'At every distance the spatial hash found exactly the playgrounds the nested loops found, while making between 0.1% and 0.6% as many checks. The saving grows with the data: double both files and the nested loops do four times the work, while the grid does roughly twice as much. Learning why that happens is the real lesson, and it carries over to any problem where things need to be matched with what is nearby.' },
        { kind: 'p', text: 'All counts are ours, from the council files as downloaded, using a flat-map approximation of distance that is very accurate across a city. The project is about matching points efficiently; it says nothing about whether any playground needs a bin, and the seat row in the Caribbean is a data-entry curiosity, not a criticism.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Python skills on show',
      h2: 'What the playground project teaches about writing good Python',
      intro: 'The grid trick depends on everyday Python features used carefully.',
      body: [
        { kind: 'table', caption: 'Python ideas in the Shepparton project', head: ['Idea', 'Where it appears', 'Why it matters'], rows: [
          ['Dictionaries with tuple keys', 'The grid of squares', 'Instant lookup of everything in one square'],
          ['Validating input', 'Dropping the seat located in the Caribbean', 'Bad rows silently spoil results'],
          ['Projecting coordinates', 'Degrees turned into metres', 'Distances need consistent units'],
          ['Counting operations', 'Checks made by each method', 'Speed is measured, not guessed'],
          ['Testing against a slow method', 'Nested loops as the reference', 'A fast program must still be right']
        ] },
        { kind: 'p', text: 'The last row is the habit we push hardest. The nested-loop version is slow but obviously correct, so it becomes the test for the clever version. Only when both agree at 25, 50 and 100 metres do learners trust the grid, and that discipline is what makes code safe to change later.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the double loop first, then the grid, and count the checks each one makes on the real council files.' },
          { h3: 'University students', p: 'Spatial hashing, quadtrees and k-d trees compared, with complexity worked out on paper and confirmed in code.' },
          { h3: 'Adults', p: 'Speeding up the scripts that match records at work, from addresses to assets, without breaking their results.' }
        ] },
        { kind: 'p', text: 'We are independent of Greater Shepparton City Council, of the Victorian Government and of the national statistics bureau. Their open data is the raw material; every count, grid and result here was produced by our own Python.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Shepparton',
      h2: 'Council data, school terms and Victorian clocks',
      intro: 'More from the same open data and from Victoria\'s calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Open council data', p: 'Greater Shepparton City Council lists 33 datasets on data.gov.au, mostly under Creative Commons licences, from barbecues and bicycle rails to playgrounds and seats.' },
          { h3: 'Mid-year terms', p: 'Victorian Term 2 runs from Monday 12 April to Friday 25 June 2027, and Term 3 from Monday 12 July to Friday 17 September.' },
          { h3: 'Summer time', p: 'Victorian daylight saving runs from the first Sunday of October 2026, the 4th, until Sunday 4 April 2027.' }
        ] },
        { kind: 'spec', title: 'Why council datasets make good first projects', p: 'Each file is small enough to read on screen, covers places a learner knows, and contains a few honest mistakes. Finding a park bench in the Caribbean is more memorable than any textbook warning about validating input.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to fast, reliable programs',
    intro: 'Ages are a starting guide only; the trial places each learner properly.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Loops and lists', p: 'Reading the playground file, counting by type and measuring simple distances in Python.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Dictionaries and speed', p: 'Grids, hashing and counting operations, comparing slow and fast versions of the same idea.', courses: ['problem-solving-dsa-masterclass-teens', 'pcep-pcap-python-certification-course'] },
      { band: 'University', h3: 'Algorithms properly', p: 'Spatial indexes and complexity analysis, applied to datasets far larger than one council area.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Faster scripts at work', p: 'Matching and cleaning records quickly and safely, with reference tests that keep results correct.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI writes working Python. Why should a Shepparton learner care how fast it is?',
    intro: 'Because the code an assistant writes first is usually the obvious version, and the obvious version does not scale.',
    p1: 'Ask an AI assistant to find playgrounds with a nearby bin and it will very likely write the double loop. On Shepparton\'s files it finishes quickly, so nobody notices that it makes 132,715 checks. Point the same code at a whole state\'s assets and it slows to a crawl. The assistant was not wrong; it simply had no reason to think about scale unless asked.',
    p2: 'Learners who have built the grid themselves know to ask, and to check the answer. They can request a faster version from an AI, read it, and test it against the slow reference exactly as in this project. That partnership, where the human understands the idea and the AI supplies speed, is what we teach.',
    closer: 'In 2026 working code is easy to get; a Shepparton learner who can tell fast from slow and prove both are correct is the one whose programs keep up.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Shepparton, Mooroopna or Kialla, one live lesson',
    intro: 'The urban area spans both sides of the Goulburn River, and an online class joins learners from all of it.',
    cells: [
      { h3: 'Both sides of the river', p: 'A learner in Mooroopna and one in Shepparton East can share a class without crossing the bridge.' },
      { h3: 'Victorian schooling', p: 'Teachers plan around Victorian year levels and terms, and senior students can connect projects to VCE computing. Lessons are given in English.' },
      { h3: 'A genuine trial', p: 'The first class is a real lesson that ends with a level, a course and a regular time; no payment details are requested.' },
      { h3: 'Right-sized groups', p: 'Fifteen to twenty learners at the same point, from the Goulburn Valley and further afield, so each class runs well.' },
      { h3: 'A twice-weekly routine', p: 'Two lessons a week in fixed slots, near eight a month, with school holidays and exams planned around.' },
      { h3: 'Teachers in India', p: 'A 5:30pm Shepparton lesson in June starts at 1pm in India, and at noon once Victorian daylight saving begins.' }
    ],
    spec: { title: 'Lesson times stay in Victorian time', p: 'Victoria changes its clocks twice a year and India does not, so the gap to our teachers shifts by an hour. Families always see lesson times in Shepparton time and never have to convert.' }
  },

  fees: {
    h2: 'Fees for Shepparton learners',
    intro: 'Three amounts, laid out plainly.',
    first: 'A full first lesson free of charge, with a suggested level, course and time at the end.',
    group: 'A month of lessons, normally eight, in a group of fifteen to twenty learners at your stage.',
    private: 'Around eight lessons a month on the same pattern, one learner with one teacher.',
    closer: 'Outside India every family pays in US dollars, so Kialla and Mooroopna households receive identical invoices and there is no local price list. Billing waits until the free class has settled which course you take and when; holiday pauses, missed classes and switching to private lessons are covered on the pricing page.'
  },

  reviewsH2: 'Families\' reviews on Google',

  book: {
    h2: 'Book a first Shepparton lesson',
    intro: 'Send an age and something the learner enjoys. A Year 8 student might count playgrounds by type; an adult could go straight to building the grid.',
    success: 'Thank you. We will be in touch shortly about a Shepparton class.'
  },

  faq: {
    h2: 'Shepparton Python class questions',
    intro: 'What Shepparton learners and parents usually ask first.',
    items: [
      { q: 'How many people live in the Shepparton urban area?', a: 'The 2021 Census counted 53,841 residents in the Shepparton - Mooroopna Significant Urban Area, with a median age of 38.' },
      { q: 'What is a spatial hash?', a: 'A way to find nearby points quickly by dividing the map into equal squares and storing the points in each square under a key, usually in a dictionary. To find neighbours you only look in the squares around a point instead of checking every point.' },
      { q: 'What does the Shepparton playground project show?', a: 'Using Greater Shepparton City Council\'s open data, learners find that 95 of 127 playgrounds have a public bin within 50 m. Nested loops need 132,715 distance checks to work this out; a spatial hash needs 367, with identical results.' },
      { q: 'Why does one seat appear in the Caribbean?', a: 'One row of the council\'s seats file has coordinates of latitude 17.98 and longitude -81.67, which fall in the Caribbean Sea. It is almost certainly a placeholder or entry error, and learners write a check that sets such rows aside.' },
      { q: 'Do you help VCE students?', a: 'Yes. Teachers work with Victorian year levels and terms and support students in senior computing and maths. School-assessed work belongs to the student; our job is to teach the techniques behind it.' },
      { q: 'When are lessons for Shepparton learners?', a: 'Usually after school or on a weekend morning, set at the trial in Victorian time. For our teachers in India it is 4.5 hours earlier than Shepparton in winter, 5.5 hours earlier in summer.' },
      { q: 'Do you teach younger children?', a: 'Yes, from six, starting with Scratch and visual projects and moving to Python when ready; the grid project here is for older learners.' },
      { q: 'Is there a Modern Age Coders centre in Shepparton?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Shepparton Python classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Shepparton and Victorian learners',
    html: 'Senior students taking computing can read <a class="cg-inline-link" href="/vce-applied-computing-software-development-help">VCE Applied Computing: Software Development help</a>. Nearby regional pages include <a class="cg-inline-link" href="/ai-and-programming-classes-in-bendigo">AI and programming in Bendigo</a>, and the state overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Shepparton and Australia',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-bendigo', label: 'Bendigo' },
    { href: '/vibe-coding-and-ai-agents-classes-in-albury-wodonga', label: 'Albury-Wodonga' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-shp .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-shp .cg-hero h1 { font-weight: 770; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-shp .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-shp .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-shp .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.013em; }
.cg-root.cg-shp .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.95rem); }
.cg-root.cg-shp .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-shp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-shp .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-shp .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Shepparton, ABS Census 2021 QuickStats, Shepparton - Mooroopna Significant Urban Area 2016 (read 7 October 2026): 53,841 people; median age 38 (Victoria 38, Australia 38); 13,653 families; 22,547 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 16,961 (86.7 percent; Victoria 73.4; Australia 72.3), semi-detached, row or terrace house, townhouse etc 2,076 (10.6 percent), flat or apartment 58 (0.3 percent; Victoria 12.1; Australia 14.2); occupation: Technicians and Trades Workers 3,097 (13.3 percent; Victoria 12.6), Professionals 4,286 (18.5 percent; Victoria 25.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 6,526 (15.1 percent; Victoria 29.2; Australia 26.3); aged 5 to 9 3,653 (6.8 percent); aged 15 to 19 3,248 (6.0 percent). Victorian Government, school term dates 2027: Term 1 Wednesday 27 January (students start Thursday 28 January in government schools) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Monday 4 October to Friday 17 December. IANA tz database: Australia/Melbourne, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Spatial hash grid join versus nested loops. Greater Shepparton City Council datasets on data.gov.au (Creative Commons Attribution 4.0 International), downloaded 7 October 2026: playgrounds.csv 127 rows (type Neighbourhood 63, District 21, Recreation Reserve 18, Child Care 16, Regional 5, NCA 4; all with valid coordinates), bins.csv 1,045 rows (all valid), seats.csv 870 rows (869 inside a Shepparton bounding box; 1 at longitude -81.67118462143821, latitude 17.982635498046875, location City of Greater Shepparton, num_of 98). Projection: x = longitude x 111,320 x cos(-36.38 degrees), y = latitude x 110,574 (metres). Nested loops: 127 x 1,045 = 132,715 squared-distance comparisons. Spatial hash: dict keyed by (floor(x/R), floor(y/R)), 3 x 3 neighbourhood per playground. R = 25 m: 186 comparisons, 79 playgrounds with a bin, 752 occupied cells; R = 50 m: 367 comparisons, 95 with a bin (32 without), 599 cells; R = 100 m: 770 comparisons, 108 with a bin, 414 cells. Both methods agree at every R. Lesson family: spatial hash grid join; distinct from k-d trees, quadtrees and hash tables for exact keys used elsewhere on the site.',
    requiredMentions: [
      '53,841',
      '13,653',
      '22,547',
      '16,961',
      '6,526',
      '132,715',
      '367 checks',
      '1,045 public bins',
      '127 playgrounds'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Shepparton - Mooroopna Significant Urban Area (2016): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2016' },
      { claim: 'Greater Shepparton City Council, Playgrounds - Greater Shepparton (Creative Commons Attribution 4.0 International).', url: 'https://data.gov.au/data/dataset/playgrounds-greater-shepparton' },
      { claim: 'Greater Shepparton City Council, Bins - Greater Shepparton and Seats - Greater Shepparton (Creative Commons Attribution 4.0 International).', url: 'https://data.gov.au/data/dataset/bins-greater-shepparton' },
      { claim: 'Victorian Government, school term dates and holidays, 2027 dates.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That any playground should have a bin, or that the council\'s bin placement is good or poor: not assessed; the project is about matching points.',
      'The cause of the seat row placed in the Caribbean Sea: not known; it is described as a likely placeholder or entry error only.',
      'Walking distances between playgrounds and bins: straight-line distances on a flat approximation are used.',
      'Bureau of Meteorology facts for Shepparton: the Bureau returned 403 and was not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Greater Shepparton City Council, the Victorian Government or the ABS.'
    ]
  }
};
