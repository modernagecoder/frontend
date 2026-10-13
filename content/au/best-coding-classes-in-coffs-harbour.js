'use strict';
// Coffs Harbour (cg- city page, Australia cluster Phase 7, row 151). Shaped page: leads with teenagers and
// adults; younger learners are covered by the kids pages and the national hub.
// Spine: which public schools are each other's nearest neighbour? Data: NSW Department of Education, "Master
// dataset: NSW government school locations and student enrolment numbers" (data.nsw.gov.au, Creative Commons
// Attribution), CSV downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA "Coffs Harbour": 26
// schools (20 Primary School, 5 Secondary School, 1 Schools for Specific Purposes). Nearest neighbour of each
// school by haversine distance on the file's Latitude and Longitude (our calculation, scratchpad au/r3/cfh_rnn.py):
// 6 reciprocal (mutual) nearest-neighbour pairs covering 12 of the 26 schools: Tyalla Public School and Orara
// High School 126 m; Toormina Public School and Toormina High School 291 m; Woolgoolga Public School and
// Woolgoolga High School 1,487 m; Coffs Harbour Public School and Coffs Harbour High School 1,532 m; Lowanna
// Public School and Ulong Public School 4,236 m; Coramba Public School and Karangi Public School 4,887 m.
// 9 schools are nobody's nearest neighbour; no school is the nearest neighbour of more than 2 others. Median
// nearest-neighbour distance 2,079 m (mean of the 13th and 14th of 26), smallest 126 m, largest 9,572 m (Nana
// Glen Public School, whose nearest is Coramba Public School). Earliest Date_1st_teacher 1884-02-01 (Corindi
// Public School and Woolgoolga Public School); Coffs Harbour Senior College teaches Year 11 to Year 12 only.
// Lesson family: reciprocal (mutual) nearest neighbours as an asymmetric relation; screened free site-wide on
// 7 October 2026 ("mutual nearest", "reciprocal nearest": 0 page hits; claimed by AU-R3).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Coffs Harbour Significant Urban Area
// (1011): 74,195 people; median age 44 (NSW 39, Australia 38); 19,961 families; 32,710 private dwellings; 2.4
// people per household; separate house 21,024 (74.6%; NSW 65.6%; Australia 72.3%); flat or apartment 3,074
// (10.9%; NSW 21.7%; Australia 14.2%); Professionals 6,369 (19.9%; NSW 25.8%; Australia 24.0%); Bachelor
// Degree level and above 11,180 (18.3%; NSW 27.8%; Australia 26.3%); aged 15 to 19 4,245 (5.7%); aged 10 to 14
// 4,834 (6.5%). NSW Department of Education, 2027 term dates, Eastern division: Term 1 Wednesday 3 February to
// Friday 9 April; Term 4 Tuesday 12 October to Monday 20 December. IANA tz: Australia/Sydney daylight saving
// Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, and
// the dataset's ICSEA, Indigenous and LBOTE columns.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'COFFS HARBOUR', label: 'Coffs Harbour', blurb: 'Coffs Harbour teens and adults, and a project that finds which of 26 public schools are each other\'s nearest neighbour.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-coffs-harbour',
  code: 'cfh',
  accent: '#282882',
  accentRationale: 'Coffs Harbour: a deep night-sea navy (HSV saturation 0.69, value 0.51, hue 240), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 12.2:1 on white and 9.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Coffs Harbour',
    eyebrow: 'Coffs Harbour, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Coffs Harbour, New South Wales',
  title: 'Best Coding Classes in Coffs Harbour | Live Online Teacher',
  description: 'Live online coding, Python and data classes for Coffs Harbour teenagers and adults, with a real teacher, in small groups or one to one. The first lesson is free.',
  ogDescription: 'Coding classes for Coffs Harbour teens and adults, with a project on the NSW schools list that finds six pairs of schools that are each other\'s nearest neighbour.',
  twitterDescription: 'Coffs Harbour coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Data Classes for Coffs Harbour Learners',
    description: 'Level-matched online Python, geometry in code, data handling and problem solving for teenagers and adults across the Coffs Harbour coast and hinterland, taught live in English.'
  },

  h1: 'Coding classes in Coffs Harbour',
  capsuleQ: 'What are the best coding classes in Coffs Harbour?',
  capsule: 'Live lessons in which a teacher writes real programs alongside each Coffs Harbour teenager or adult, from first Python lines to geometry and data, using open data about the Coffs coast itself. The 2021 Census counted 74,195 people in the Coffs Harbour urban area, with a median age of 44. Lessons run over video, one to one or with a small group at your level, and the first one costs nothing.',
  lead: 'Ask which school is closest to Tyalla Public School and the answer is Orara High School, 126 metres away. Ask which school is closest to Orara High School and the answer comes straight back: Tyalla. Pairs like that, where two places choose each other, are rarer than you might expect. Our Coffs Harbour project takes the state government\'s list of 26 public schools in the council area, finds each school\'s nearest neighbour in Python, and then asks which of those choices are returned. Only six pairs are. Nine schools are not the nearest neighbour of anything at all.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Coffs Harbour.',

  picks: {
    eyebrow: 'Course picks for Coffs Harbour',
    h2: 'Four places a Coffs Harbour learner might start',
    intro: 'Each course connects to the project on this page. The free first lesson decides which one fits, and no card details are asked for.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the ground up, reading real files of places and turning them into answers.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Searches, distances and relations between points, each idea tried on genuine data first.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A thorough Python course for adults who want to write their own tools rather than borrow them.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning, joining and summarising public datasets so the conclusions hold up.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Coffs Harbour in the Census',
      h2: 'An older, house-based coast with a young streak',
      intro: 'Figures published by the statistics bureau for the Coffs Harbour Significant Urban Area after the 2021 Census, beside New South Wales and Australia.',
      body: [
        { kind: 'table', caption: 'Counts for the Coffs Harbour urban area, 2021 Census QuickStats', head: ['Census item', 'Coffs Harbour count'], rows: [
          ['Residents', '74,195'],
          ['Families', '19,961'],
          ['Private dwellings', '32,710'],
          ['Average people per household', '2.4']
        ] },
        { kind: 'table', mt: true, caption: 'Coffs Harbour shares set against the state and the country', head: ['Share or age', 'Coffs Harbour', 'NSW', 'Australia'], rows: [
          ['Median age in years', '44', '39', '38'],
          ['Separate houses, as a share of occupied homes', '74.6% (21,024 homes)', '65.6%', '72.3%'],
          ['Bachelor degree or higher, residents 15 and over', '18.3% (11,180 people)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five years older than the state', p: 'A median age of 44 puts Coffs Harbour five years above New South Wales as a whole, which sits at 39.' },
          { h3: 'Professionals', p: '6,369 employed residents worked as professionals, 19.9% of workers, against 25.8% across the state.' },
          { h3: 'Ten to nineteen', p: 'The Census counted 4,834 residents aged 10 to 14 and 4,245 aged 15 to 19, together a little over 12% of the population.' }
        ] },
        { kind: 'p', text: 'How we handle census tables: the bureau adds small random adjustments to protect privacy, so rows rarely sum exactly to the printed totals. We copy totals and percentages as published and never build a new total by adding rows together.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Coffs Harbour schools are each other\'s nearest neighbour?',
      intro: 'The NSW Department of Education publishes the location of every government school. We took the 26 in the Coffs Harbour council area, found each one\'s closest school, and checked which choices are returned.',
      body: [
        { kind: 'table', caption: 'The six reciprocal pairs, measured on 7 October 2026 (our calculation, straight-line distance)', head: ['Pair', 'Distance apart'], rows: [
          ['Tyalla Public School and Orara High School', '126 m'],
          ['Toormina Public School and Toormina High School', '291 m'],
          ['Woolgoolga Public School and Woolgoolga High School', '1,487 m'],
          ['Coffs Harbour Public School and Coffs Harbour High School', '1,532 m'],
          ['Lowanna Public School and Ulong Public School', '4,236 m'],
          ['Coramba Public School and Karangi Public School', '4,887 m']
        ] },
        { kind: 'table', mt: true, caption: 'What the nearest-neighbour relation looks like across all 26 schools (our calculation)', head: ['Measure', 'Result'], rows: [
          ['Schools in a reciprocal pair', '12 of 26'],
          ['Schools that are nobody\'s nearest neighbour', '9'],
          ['Most schools pointing at a single school', '2'],
          ['Median distance to the nearest school', '2,079 m'],
          ['Longest distance to the nearest school', '9,572 m, from Nana Glen Public School']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Point', p: 'For each school, loop over the other 25, measure the distance with the haversine formula, and keep the smallest. Every school ends up pointing at exactly one other.' },
          { h3: '2. Check the return', p: 'A pair is reciprocal when A points at B and B points back at A. One line of Python tests it: nearest[nearest[a]] == a.' },
          { h3: '3. Read the pattern', p: 'Four of the six pairs join a primary school to a high school. The other two are small schools in the hills west of the city, each other\'s only close company.' }
        ] },
        { kind: 'callout', h3: 'Nearest is not a two-way street', p: 'Nana Glen Public School\'s closest school is Coramba, 9.6 km away, but Coramba\'s closest school is Karangi. Being someone\'s nearest neighbour does not make them yours. Relations like this one, where the arrow can point one way only, turn up everywhere in computing, from recommendation systems to the way a search engine links pages, and learners who have seen one on a real map recognise the next one quickly.' },
        { kind: 'p', text: 'Every count above is ours, made from the department\'s file with straight-line distances between the published coordinates. Road distance would give different pairs. We make no statement about any school\'s quality, size or enrolment area; the project is about a mathematical relation on a set of points.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Thinking in relations',
      h2: 'Questions the same code can answer next',
      intro: 'Once a learner has a nearest-neighbour table, a whole family of questions opens up, each one a short step in Python.',
      body: [
        { kind: 'table', caption: 'Follow-on questions on the Coffs Harbour schools file', head: ['Question', 'What the code does', 'What it teaches'], rows: [
          ['Who is nobody\'s nearest?', 'Count how many arrows point at each school; find the zeros', 'Counting with a dictionary'],
          ['Is any school chosen three times?', 'Look for the largest count', 'The limits of a geometric relation'],
          ['What if we used the second nearest?', 'Sort each school\'s distances and keep the first two', 'k nearest neighbours'],
          ['Do the pairs change on roads?', 'Replace the formula with a routing service', 'How a modelling choice changes the answer']
        ] },
        { kind: 'p', text: 'In the flat plane, a point can be the nearest neighbour of at most six others, a classic result that learners can test by drawing. In the Coffs file the busiest school is chosen by only two, so the coast and the hinterland spread the schools out more than the theoretical crowding allows.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the loops by hand first, then rewrite them with dictionaries, and check the six pairs against a map.' },
          { h3: 'University students', p: 'Spatial indexes, k-nearest-neighbour graphs and why the brute-force loop stops scaling past a few thousand points.' },
          { h3: 'Adults', p: 'Practical Python for matching customers, sites or suppliers to the closest option, with the asymmetry kept in mind.' }
        ] },
        { kind: 'p', text: 'We have no link to the NSW Department of Education, Coffs Harbour City Council or the Australian Bureau of Statistics; they publish the data and we simply use it. Population figures come from the bureau; the school coordinates come from the department\'s open file; every pair, count and distance was produced by our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Coffs Harbour',
      h2: 'Schools from 1884 and a college for the final two years',
      intro: 'More details from the same open file and the state\'s own calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The earliest dates', p: 'Corindi Public School and Woolgoolga Public School both record a first teacher in February 1884, the oldest dates among the 26 schools in the file.' },
          { h3: 'A senior college', p: 'Coffs Harbour Senior College is listed as a Year 11 to Year 12 school, so many local students change school for their last two years.' },
          { h3: 'Terms in 2027', p: 'NSW Eastern division schools start Term 1 on Wednesday 3 February 2027 and finish Term 4 on Monday 20 December 2027.' }
        ] },
        { kind: 'spec', title: 'Why the date column is a good second exercise', p: 'The file stores each school\'s first-teacher date as text such as 1884-02-01. Converting those strings into dates, sorting them and working out each school\'s age is a short, satisfying task that rehearses the same reading and checking habits as the nearest-neighbour project.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From measuring a distance to reasoning about relations',
    intro: 'Treat the ages as a rough guide; the free trial sets the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Distances in code', p: 'Python programs that read coordinates, measure the gap between two places and find the closest one in a list.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Relations and graphs', p: 'Nearest-neighbour tables, directed relations and simple graphs built from the Coffs schools file and other open data.', courses: ['problem-solving-dsa-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'University', h3: 'Scaling up', p: 'Spatial indexing, k-nearest-neighbour graphs and the cost of brute force on larger datasets.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Useful matching', p: 'Matching people, sites and services to their closest options in real work data, with checks that catch one-way surprises.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can find nearest neighbours instantly. Why should a Coffs Harbour learner code it?',
    intro: 'Because the interesting part is not the search, it is noticing that the answer only points one way.',
    p1: 'Many AI systems lean on nearest-neighbour searches: find the most similar song, image or document, and recommend it. An assistant can write that search in seconds. What it will rarely mention unprompted is that similarity found this way is lopsided. Item A can be B\'s closest match while B prefers something else entirely, exactly as Nana Glen points at Coramba and Coramba points at Karangi.',
    p2: 'A learner who has coded the Coffs Harbour pairs carries that awareness into every AI tool they use. They ask whether a match is mutual, whether some items are never recommended at all, like the nine schools nobody chooses, and whether the measure of closeness is the right one in the first place.',
    closer: 'In 2026 the search is free and the judgement is scarce, and a Coffs Harbour learner who has checked a relation both ways is the one who spots a lopsided answer.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Woolgoolga to Sawtell, the same live class',
    intro: 'The schools in our project stretch about 40 kilometres from north to south, and an online lesson reaches every one of their neighbourhoods equally.',
    cells: [
      { h3: 'Coast and hinterland', p: 'A learner in Mullaway and one in Coramba can share a lesson without either making the drive along the highway or up the valley.' },
      { h3: 'NSW stages, English lessons', p: 'Lesson plans follow the NSW stages, from Stage 4 in Year 7 up to the HSC years, and pause with the state\'s term breaks. Older students can tie projects to their computing subjects.' },
      { h3: 'A real first lesson', p: 'The free trial is an ordinary class rather than a sales call; at the end the teacher proposes a level, a course and a slot, and no payment details are taken.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners at the same stage, from Coffs Harbour and other places, so a regional city still has full classes.' },
      { h3: 'Twice a week', p: 'Two lessons each week at the same hour, roughly eight per month, pausing for school holidays and exams by arrangement.' },
      { h3: 'A teacher in India', p: 'A 6pm lesson in Coffs Harbour in June starts at 1:30pm India time; once NSW clocks move forward in October, the same lesson starts at 12:30pm there.' }
    ],
    spec: { title: 'Clocks on the north coast', p: 'New South Wales moves to daylight saving on Sunday 4 October 2026 and back on Sunday 4 April 2027. India keeps one time all year, so the gap to our teachers grows by an hour in summer, and every lesson time is quoted in Coffs Harbour time.' }
  },

  fees: {
    h2: 'What classes cost in Coffs Harbour',
    intro: 'Three figures, with nothing hidden.',
    first: 'One full lesson free, followed by a suggested level, course and lesson time.',
    group: 'A month of lessons, usually eight, shared with fifteen to twenty learners at the same level.',
    private: 'Around eight lessons a month on the same pattern, one teacher with one learner.',
    closer: 'Outside India every invoice is in US dollars, so Toormina and Korora families pay identical amounts and no Coffs Harbour price list exists. Nothing is charged until the trial has fixed a course and a time, and the pricing page covers breaks, missed lessons and switching between formats.'
  },

  reviewsH2: 'What families say, from Google',

  book: {
    h2: 'Tell us what the learner would like to build',
    intro: 'An age and an interest are enough. A Year 9 student might start by measuring distances between two towns; an adult might go straight to the full nearest-neighbour project.',
    success: 'Thank you. Our team will contact you shortly about a Coffs Harbour class.'
  },

  faq: {
    h2: 'Coffs Harbour coding class questions',
    intro: 'The questions Coffs Harbour learners and parents tend to ask first.',
    items: [
      { q: 'How many people live in the Coffs Harbour urban area?', a: '74,195, according to the 2021 Census QuickStats for the Coffs Harbour Significant Urban Area, with a median age of 44 against 39 for New South Wales.' },
      { q: 'What is a reciprocal nearest neighbour?', a: 'Two points are reciprocal nearest neighbours when each is the other\'s closest point. Nearest neighbour is a one-way relation in general, so these mutual pairs are the special cases where the choice is returned.' },
      { q: 'What is the Coffs Harbour schools project?', a: 'Learners load the NSW Department of Education\'s list of 26 public schools in the Coffs Harbour council area, find each school\'s nearest school in Python, and check which choices are mutual. Six pairs are, covering 12 schools, while 9 schools are nobody\'s nearest.' },
      { q: 'Does the project rank or judge schools?', a: 'No. It uses only the published coordinates to study a mathematical relation. Nothing on this page says anything about a school\'s results, size, quality or enrolment area.' },
      { q: 'Do you teach HSC computing students?', a: 'Yes. We follow NSW year levels and terms and support students taking computing and maths in Years 11 and 12. Anything a school marks has to be the student\'s own writing; we teach the method and never produce assessed work.' },
      { q: 'What time are lessons for Coffs Harbour learners?', a: 'Most learners choose a slot after school or on a weekend morning, fixed at the trial and quoted in New South Wales time. In India the clock reads four and a half hours earlier during the NSW winter, and five and a half hours earlier once daylight saving starts.' },
      { q: 'Can younger children learn too?', a: 'Yes, from age six. Younger children build with Scratch blocks and drawings before typing code, and the projects on this page are pitched at older students.' },
      { q: 'Is there a Modern Age Coders centre in Coffs Harbour?', a: 'No, and none is claimed. Every lesson is live and online, and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Coffs Harbour coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Coffs Harbour and New South Wales learners',
    html: 'Senior students will find help for their course on <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a> and <a class="cg-inline-link" href="/hsc-maths-advanced-tutoring">HSC Mathematics Advanced tutoring</a>. For the whole state, read <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>; the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a> gathers the rest of the country.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Coffs Harbour and Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/vibe-coding-and-ai-agents-classes-in-port-macquarie', label: 'Port Macquarie' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-cfh .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-cfh .cg-hero h1 { font-weight: 780; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-cfh .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.4rem 0 0.4rem 1rem; }
.cg-root.cg-cfh .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-cfh .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-cfh .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-cfh .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-cfh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cfh .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-cfh .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Coffs Harbour, ABS Census 2021 QuickStats, Significant Urban Area 1011 (read 7 October 2026): 74,195 people; median age 44 (New South Wales 39, Australia 38); 19,961 families; 32,710 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 21,024 (74.6 percent; NSW 65.6; Australia 72.3), flat or apartment 3,074 (10.9 percent; NSW 21.7; Australia 14.2); occupation, employed people aged 15 and over: Professionals 6,369 (19.9 percent; NSW 25.8; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 11,180 (18.3 percent; NSW 27.8; Australia 26.3); aged 10 to 14 4,834 (6.5 percent); aged 15 to 19 4,245 (5.7 percent). NSW Department of Education, 2027 term dates, Eastern division, first to last days for students: Term 1 Wednesday 3 February to Friday 9 April; Term 2 Thursday 29 April to Friday 2 July; Term 3 Tuesday 20 July to Friday 24 September; Term 4 Tuesday 12 October to Monday 20 December. IANA tz database: Australia/Sydney, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Reciprocal (mutual) nearest neighbours. NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA = Coffs Harbour: 26 (Primary School 20, Secondary School 5, Schools for Specific Purposes 1). Nearest neighbour per school by haversine distance (R = 6,371,008.8 m) on Latitude and Longitude, brute force over the other 25. Reciprocal pairs (6, covering 12 schools): Tyalla Public School / Orara High School 126 m; Toormina Public School / Toormina High School 291 m; Woolgoolga Public School / Woolgoolga High School 1,487 m; Coffs Harbour Public School / Coffs Harbour High School 1,532 m; Lowanna Public School / Ulong Public School 4,236 m; Coramba Public School / Karangi Public School 4,887 m. In-degree of the nearest-neighbour relation: 9 schools 0, maximum 2 (William Bayldon Public School, Karangi Public School, Coramba Public School, Orara High School). Nearest-neighbour distance: median 2,079 m (mean of 13th and 14th values), minimum 126 m, maximum 9,572 m (Nana Glen Public School to Coramba Public School). North-south span of the 26 schools about 39.8 km. Earliest Date_1st_teacher 1884-02-01 (Corindi Public School, Woolgoolga Public School); Coffs Harbour Senior College School_subtype Year 11 to Year 12. Lesson family: reciprocal nearest neighbours as an asymmetric relation; distinct from Voronoi, Delaunay, Gabriel and relative-neighbourhood graphs and from k-means used elsewhere on the site.',
    requiredMentions: [
      '74,195',
      '19,961',
      '32,710',
      '11,180',
      '21,024',
      'Tyalla Public School and Orara High School',
      'Lowanna Public School and Ulong Public School',
      '2,079 m',
      '9,572 m'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Coffs Harbour Significant Urban Area (1011): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1011' },
      { claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why four of the six pairs join a primary school to a high school (shared sites, planning history): not verified, so no reason is given.',
      'Road or walking distances between schools: not computed; all distances are straight lines between published coordinates.',
      'Enrolment, ICSEA, Indigenous and LBOTE figures from the master dataset: excluded by the cluster rules or not needed.',
      'The specialty description of the one School for Specific Purposes: not printed, to keep the page about geometry rather than individual students.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Coffs Harbour City Council or the ABS.'
    ]
  }
};
