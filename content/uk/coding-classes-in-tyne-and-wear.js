'use strict';
// Tyne and Wear (cg- county index, UK cluster Phase 7, row 251). Five metropolitan boroughs: Newcastle upon Tyne,
// Gateshead, North Tyneside, South Tyneside, Sunderland. Spine: how many random Metro trips before you have been to every
// station? Data: DfT NaPTAN access-nodes API, national area 940 (CSV read 26 September 2026): 68 active MET stop areas
// with ATCO codes beginning 9400ZZTW, of which 8 are named "(Edinburgh Trams)" (Newhaven, Ocean Terminal, Port of Leith,
// The Shore, Foot of the Walk, Balfour Street, McDonald Road, Picardy Place; latitude 55.96 to 55.98; created
// 2022-11-11), while the other 17 Edinburgh Trams stops carry 9400ZZED. The remaining 60 are Tyne and Wear Metro stations
// (latitude 54.90 to 55.04), for example Brockley Whins, Callerton Parkway, Newcastle Airport, South Hylton.
// Our model (scratchpad tyw/coupon.py): equal chances, expected trips 60 x H(60) = 280.8; first 30 new stations 41.1
// trips, last 30 239.7, the final one alone 60 on average; 20,000 simulations (seed 20260926): mean 280.0, median 267,
// 10th percentile 198, 90th 376, longest 861. Made-up unequal popularity (busiest 10 times the quietest): mean 671.7,
// median 604, 90th 1,047; quietest station 1 in 330 per trip.
// Lesson family: coupon collector (harmonic numbers, the long tail of the last few), plus a data-cleaning check on a
// code prefix; screened (coupon collector: 0 hits; NaPTAN used before for Nottingham, Coventry and others as data, with
// different lessons).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 1,127,191); ONS built-up areas checked
// against our OA sums, all inside. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'TYNE AND WEAR', blurb: 'Newcastle, Gateshead, Sunderland and the Tyneside towns, and a Metro puzzle: how many random trips until you have seen all 60 stations?' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-tyne-and-wear',
  code: 'tyw',
  accent: '#6B5910',
  accentRationale: 'Tyne and Wear: a deep mustard from the solver (5.53:1 on the darkest paper tint), a darkened nod to Metro yellow, greener than the Merseyside ochre',
  pageType: 'governorate',
  place: {
    name: 'Tyne and Wear',
    eyebrow: 'Tyne and Wear',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'North East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Newcastle', href: '/best-coding-class-in-newcastle-upon-tyne' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Tyne and Wear',
  title: 'Coding Classes in Tyne and Wear | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Tyne and Wear, from Newcastle, Sunderland and Gateshead to South Shields, Tynemouth, Washington and Wallsend.',
  ogDescription: 'Coding classes for all of Tyne and Wear, and a Metro project: clean the official station list, then find how many random trips it takes to visit all 60 stations.',
  twitterDescription: 'Tyne and Wear coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Tyne and Wear',
    description: 'Ability-placed online coding, Python, probability and mathematics for children, teenagers and adults across Tyne and Wear, taught live in English.'
  },

  h1: 'Coding classes in Tyne and Wear',
  capsuleQ: 'What are the best coding classes in Tyne and Wear?',
  capsule: 'Tyne and Wear is five boroughs: Newcastle upon Tyne, Sunderland, North Tyneside, Gateshead and South Tyneside. At the 2021 Census they held 1,127,191 people between them, by our sum of the five published counts. The Newcastle built-up area is the largest, followed by Sunderland, Gateshead and South Shields. Teachers in India run every class live over video, and each learner joins the group that matches their skills, whatever their age. We teach everyone from 6 to 67, in groups of five to ten or one-to-one, in coding, Python, probability and maths. The Tyne and Wear project uses the official list of Metro stations. Lesson one is on us; stay, and a group costs USD 100 a month while one-to-one costs USD 150.',
  lead: 'Suppose you set out to visit every Tyne and Wear Metro station, but each trip takes you to a station chosen at random. The first few trips almost always bring somewhere new, yet the last few stations can take an age to turn up. Mathematicians call this the coupon collector problem, after collecting every card in a set. This page\'s project starts with the government\'s official register of public transport stops, discovers that the obvious way to pick out Metro stations quietly lets in eight tram stops from Edinburgh, cleans the list down to 60 stations, and then works out exactly how many random trips a full set should take.',
  wa: 'Hello Modern Age Coders, we are in Tyne and Wear and would like to try a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Tyne and Wear',
    h2: 'Where Tyne and Wear learners start',
    intro: 'A seven-year-old in Whitley Bay who collects cards, a Year 8 in Washington who wants to know the odds, a Year 12 in Gateshead working with real data, and an adult in Jarrow who handles records at work. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including collecting games and random events.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with chance, averages and experiments repeated thousands of times.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability built step by step, from expected values to long-tailed outcomes.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Spreadsheets, statistics and SQL, then Python and dashboards, including checking and cleaning real data.' }
    ]
  },

  sections: [
    {
      id: 'tyne-and-wear', tint: '', eyebrow: 'Tyne and Wear in figures',
      h2: '1,127,191 people in five boroughs',
      intro: 'Borough counts are 2021 Census figures on Nomis, and the total is our addition. The town list uses ONS built-up areas, and we cross-checked every figure by totting up census output areas ourselves.',
      body: [
        { kind: 'table', caption: 'Tyne and Wear\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Newcastle upon Tyne', '286,445', 'Wallsend', '45,355'],
          ['Sunderland', '168,315', 'Whitley Bay', '36,880'],
          ['Gateshead', '115,280', 'Jarrow', '29,470'],
          ['South Shields', '73,345', 'Longbenton', '26,880'],
          ['Tynemouth', '60,605', 'Hebburn', '21,345'],
          ['Washington', '51,320', 'Shiney Row and Penshaw', '16,900']
        ] },
        { kind: 'p', text: 'Newcastle upon Tyne borough had 300,125 residents, Sunderland 274,172, North Tyneside 208,967, Gateshead 196,151 and South Tyneside 147,776. The ONS draws the Newcastle built-up area across into North Tyneside and the Gateshead area into South Tyneside, while Tynemouth, Wallsend and Whitley Bay are counted as towns in their own right. Whickham comes next after the table. Every town lies inside the county, and every published figure matches our own count to within a few dozen people. Holiday dates vary by borough and by academy trust; we have not read them, so each family simply lets us know.' },
        { kind: 'callout', h3: 'City pages already', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> page colours a map of wards, and <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland</a> is about skipping work that cannot matter. This page covers all five boroughs.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Tyne and Wear project',
      h2: 'Every Metro station by random trips',
      intro: 'An official stop register, a filter that lets in the wrong city, and the arithmetic of collecting a full set.',
      body: [
        { kind: 'p', text: 'The learner downloads NaPTAN, the Department for Transport\'s national register of public transport stops, for the national rail and tram area. Metro station codes start with 9400ZZTW, so filtering on that prefix should give the Metro. It gives 68 stations, and eight of them are named "Edinburgh Trams": Newhaven, Ocean Terminal, Port of Leith, The Shore, Foot of the Walk, Balfour Street, McDonald Road and Picardy Place. Their latitudes sit near 55.97 degrees, far north of Tyne and Wear\'s 54.90 to 55.04, and they were added on the same day in 2022, while the other Edinburgh tram stops use a different prefix. Checking names and coordinates, not only codes, leaves the true 60.' },
        { kind: 'p', text: 'Now the puzzle. If each trip goes to one of 60 stations at random, the first trip is always new. After that, the chance of a new station falls as the collection grows: with 59 already seen, only 1 station in 60 is new, so that last one takes 60 trips on average. Adding up the waits for each new station gives 60 × (1 + 1/2 + 1/3 + … + 1/60), about 280.8 trips. The sum in brackets is called a harmonic number, and it grows only slowly, which is why doubling the number of stations roughly doubles the trips and adds a little more.' },
        { kind: 'table', caption: 'Collecting all 60 Metro stations by random trips, our model, 26 September 2026', head: ['Question', 'Answer'], rows: [
          ['Expected trips for the full set, equal chances', '280.8'],
          ['Trips for the first 30 new stations', 'About 41'],
          ['Trips for the last 30', 'About 240'],
          ['20,000 simulated collectors: middle result', '267 trips (one in ten needed 376 or more)'],
          ['If the busiest station is 10 times as likely as the quietest', 'About 672 trips on average']
        ] },
        { kind: 'p', text: 'The table holds two lessons. First, the work is lopsided: the first half of the set takes about 41 trips and the second half about 240, because the last few stations are so hard to hit. Second, unequal chances make things much worse. In a made-up version where some stations are ten times as likely as others, the average climbs to about 672, because everything waits on the quietest station, reached on only 1 trip in 330. Real collections, from sticker albums to testing every screen in an app, behave the same way.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Roll a six-sided die until every number has appeared, record the rolls, and compare the class average with 14.7, the answer for six.' },
          { h3: 'Ages 11 to 15', p: 'Load the NaPTAN file in Python, filter it properly, then simulate random trips until all 60 stations are seen.' },
          { h3: 'Ages 15 and up', p: 'Derive the harmonic formula, compare it with thousands of simulations, and study how unequal chances stretch the tail.' }
        ] },
        { kind: 'callout', h3: 'Official data and our model', p: 'The station list comes from NaPTAN, published by the Department for Transport; we report exactly what the downloaded file contained. The random-trip model, its unequal version and all the results are ours, invented for teaching. Real Metro journeys are not random, and nothing here describes how people travel.' }
      ]
    },
    {
      id: 'metro', tint: 'deep', eyebrow: 'Why the Metro',
      h2: 'Sixty stations from the airport to the coast',
      intro: 'The Tyne and Wear link, straight from the national stops register.',
      body: [
        { kind: 'table', caption: 'What the NaPTAN file showed for codes beginning 9400ZZTW, 26 September 2026', head: ['Check', 'Result'], rows: [
          ['Active tram and metro stations with the prefix', '68'],
          ['Named as Edinburgh Trams stops', '8, all created on 11 November 2022'],
          ['Tyne and Wear Metro stations after cleaning', '60'],
          ['Latitude range of the 60', '54.90 to 55.04 degrees'],
          ['Some of the 60', 'Newcastle Airport, Callerton Parkway, South Hylton, Brockley Whins, Tynemouth, South Shields']
        ] },
        { kind: 'p', text: 'Official registers are generally excellent, and still every large dataset has surprises. A programmer who filters by one field and trusts the result would have counted 68 stations and put eight of them in the wrong country. Checking with a second, independent field, here the coordinates, is the habit that catches it. A Tyne and Wear student who has done this and then solved the collector puzzle has practised both halves of real data work: cleaning, then thinking.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Nexus, the Department for Transport or any Tyne and Wear council. NaPTAN is the Department\'s; our filtering, model and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> and <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland</a> have their own pages; <a class="cg-inline-link" href="/coding-classes-in-northumberland">Northumberland</a> is north and <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a> south.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From collecting games to the maths of chance',
    intro: 'The free lesson settles where to begin. Age is a first guess; ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Collect them all', p: 'Block coding games that collect items at random and count how long a full set takes.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 13', h3: 'Chance in code', p: 'Typed Python with dice, cards and random picks, repeated thousands of times.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Probability and data', p: 'Probability, expected values and real datasets cleaned and analysed in Python.', courses: ['statistics-probability-maths-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Clean data, sound conclusions', p: 'Spreadsheets, SQL and Python for adults who need to trust the numbers they report.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and messy data',
    h2: 'An AI can count Metro stations from a file. Would it notice eight are in Edinburgh?',
    intro: 'Clean-looking data can hide errors that only a second check reveals.',
    p1: 'Ask an assistant to count Tyne and Wear Metro stations in the NaPTAN file using the 9400ZZTW prefix, and it will quite reasonably answer 68. The code prefix looks authoritative, and nothing in the question invites a check. Only by looking at names or coordinates do the eight Edinburgh stops stand out, and every calculation built on 68 would then be quietly wrong.',
    p2: 'AI systems are trained and tested on data like this, and their answers are only as good as its cleaning. A Tyne and Wear student who has caught the Edinburgh stops knows to check a dataset from two directions before building anything on it.',
    closer: 'So a young person in Tyne and Wear should learn to code in 2026 to check the data before trusting the answer.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Both rivers, every borough, one screen',
    intro: 'Getting across Tyne and Wear for a weekly evening class takes time. Online lessons give it back.',
    cells: [
      { h3: 'At home, anywhere', p: 'A terrace in Hebburn, a semi in Longbenton, a flat in Sunderland. The learner types and the teacher follows on the shared screen.' },
      { h3: 'The school words', p: 'A Year 9 option choice or an A level coursework deadline means the same to our teachers as to a Tyneside classroom, and every lesson is in English.' },
      { h3: 'Try a lesson free', p: 'A proper lesson, then clear advice on level and course. No card details are requested.' },
      { h3: 'A group at your level', p: 'Five to ten learners at the same stage, whether they log in from Tyneside or much further away.' },
      { h3: 'Pauses for holidays', p: 'Two lessons a week is usual, and we stop for your school\'s own holidays.' },
      { h3: 'Booked in UK time', p: 'Your slot stays at the same UK time all year; the teacher, whose clock runs on India time several hours ahead, adjusts at the changes.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Even in a county of over a million, five learners at one stage free on the same evening are rarely neighbours. Level-based groups let a learner in Whickham or Shiney Row join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Tyne and Wear',
    intro: 'Jarrow or Jesmond, the fee is the same, and it is the fee in every country we teach except India.',
    first: 'A full lesson of real work, then advice on level and course.',
    group: 'Around eight lessons a month with five to ten learners at one level.',
    private: 'Around eight lessons a month, one-to-one.',
    closer: 'We charge in US dollars and list no pound prices. The first invoice waits until the free lesson has produced a chosen course and a regular weekly time. Our pricing page sets out what happens with holidays, a missed class, or a move from group to private.'
  },

  reviewsH2: 'Reviews from families on Google',

  book: {
    h2: 'Book a free Tyne and Wear lesson',
    intro: 'Say how old the learner is, or their school year, and what they are keen on. A first lesson might be a Scratch collecting game, a Python dice experiment, or the Metro puzzle on this page.',
    success: 'Thank you. Your Tyne and Wear request has arrived.'
  },

  faq: {
    h2: 'Tyne and Wear questions',
    intro: 'The county, the Metro project and practical details.',
    items: [
      { q: 'How many people live in Tyne and Wear?', a: '1,127,191 usual residents at the 2021 Census, a total we reached by adding the five borough counts the ONS publishes on Nomis.' },
      { q: 'What are the largest towns in Tyne and Wear?', a: 'By ONS built-up area: Newcastle upon Tyne 286,445, Sunderland 168,315, Gateshead 115,280, South Shields 73,345 and Tynemouth 60,605.' },
      { q: 'What is the Metro project?', a: 'Learners clean the official NaPTAN list of Metro stations, which includes eight Edinburgh tram stops under the same code prefix, and then work out that visiting all 60 stations by random trips takes about 280.8 trips on average.' },
      { q: 'What is the coupon collector problem?', a: 'How many random draws you need to collect every item in a set. For 60 equally likely items the answer is 60 times the 60th harmonic number, about 280.8, and most of the effort goes on the last few.' },
      { q: 'How many Tyne and Wear Metro stations are there?', a: 'The NaPTAN file we downloaded lists 60 Tyne and Wear Metro stations once eight Edinburgh Trams stops with the same code prefix are removed.' },
      { q: 'Are lessons held in Tyne and Wear?', a: 'Not in person. Every lesson is live online, so learners join from anywhere in the county.' },
      { q: 'What ages can learn with you?', a: 'Ages 6 to 67. Children start with blocks and games, Python often begins around eight to ten, teenagers move on to probability and data, and adults take data and Python. The free lesson finds the right starting point.' },
      { q: 'Do you teach data cleaning?', a: 'Yes. Our teen data science and adult data analysis courses both work with real, messy datasets and how to check them.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. Continuing is USD 100 per month in a group of five to ten, or USD 150 per month on your own with a teacher; nobody pays to register and there is no minimum spell.' },
      { q: 'Do you break for Tyne and Wear school holidays?', a: 'Yes, if you like. Each borough and each academy trust fixes its own term dates, so send us your school\'s and we will pause to match.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Pages around Tyne and Wear',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> and <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland</a>, then <a class="cg-inline-link" href="/coding-classes-in-northumberland">Northumberland</a> and <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tyne and Wear and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-newcastle-upon-tyne', label: 'Newcastle' },
    { href: '/best-coding-class-in-sunderland', label: 'Sunderland' }
  ],

  personalityCss: `
.cg-root.cg-tyw .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.1vw, 2.7rem); }
.cg-root.cg-tyw .cg-hero h1 { font-weight: 800; letter-spacing: -0.028em; line-height: 1.02; }
.cg-root.cg-tyw .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-tyw .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tyw .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-tyw .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-tyw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tyw .cg-table th { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-tyw .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-tyw .cg-callout { border-left-width: 5px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Tyne and Wear: metropolitan boroughs Newcastle upon Tyne, Gateshead, North Tyneside, South Tyneside, Sunderland. ONS Census 2021 TS001 via Nomis: Newcastle upon Tyne 300,125; Sunderland 274,172; North Tyneside 208,967; Gateshead 196,151; South Tyneside 147,776; our sum 1,127,191. ONS built-up areas (published; agree with our OA sums, all inside): Newcastle upon Tyne 286,445 (Newcastle, North Tyneside); Sunderland 168,315; Gateshead 115,280 (Gateshead, South Tyneside); South Shields 73,345; Tynemouth 60,605; Washington 51,320; Wallsend 45,355; Whitley Bay 36,880; Jarrow 29,470; Longbenton 26,880; Hebburn 21,345; Shiney Row and Penshaw 16,900; Whickham 15,685. DfT NaPTAN access-nodes, national area 940 CSV: 68 active StopType MET rows with ATCOCode prefix 9400ZZTW; 8 named "(Edinburgh Trams)" (9400ZZTWWJN Newhaven to 9400ZZTWWJU Picardy Place; latitudes 55.957 to 55.980; CreationDateTime 2022-11-11); other 17 Edinburgh Trams MET rows use 9400ZZED; 60 Tyne and Wear Metro stations, latitude 54.902 to 55.042.',
    localProject: 'Coupon collector over 60 Metro stations: E = 60 H(60) = 280.8; first 30 new 41.1, last 30 239.7, last one 60. Simulation 20,000 (seed 20260926): mean 280.0, median 267, 10th 198, 90th 376, max 861. Made-up weights 1 to 10 evenly spread: mean 671.7, median 604, 90th 1,047; quietest 1 in 330 per trip. Die example: 6 H(6) = 14.7. Data cleaning: prefix filter 68 minus 8 Edinburgh = 60, confirmed by names and coordinates. Page labels model as ours and not describing travel. AI angle: a prefix-based count answers 68. Lesson family: coupon collector, harmonic numbers, long tail, unequal probabilities; data cleaning with a second field.',
    requiredMentions: [
      '1,127,191',
      'coupon collector',
      '9400ZZTW',
      '280.8',
      'Longbenton',
      'Hebburn',
      'Shiney Row and Penshaw',
      'Whickham',
      'Tynemouth',
      'Jarrow',
      'Brockley Whins',
      'Callerton Parkway'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the five Tyne and Wear boroughs, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Tyne and Wear towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Department for Transport, NaPTAN access nodes (national area 940), downloaded as CSV.', url: 'https://naptan.api.dft.gov.uk/' }
    ],
    rejectedClaims: [
      'Why the Edinburgh stops carry 9400ZZTW codes: not known; the page reports what the file contained without guessing.',
      'Metro passenger numbers or busiest stations: not read; the unequal model uses invented weights.',
      'Tyne bridges and their history: considered for this page, but not used.',
      'Nexus facts about the Metro: not read from Nexus; only NaPTAN is used.',
      'Tyne and Wear school term dates: none read.',
      'Named Tyne and Wear schools: none named.'
    ]
  }
};
