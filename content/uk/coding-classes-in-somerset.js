'use strict';
// Somerset (cg- county index, UK cluster Phase 7, row 247). Ceremonial Somerset: the Somerset Council area (four 2021
// Census districts: Mendip, Sedgemoor, South Somerset, Somerset West and Taunton; ONS LAD April 2023 lists E06000066
// Somerset), Bath and North East Somerset, and North Somerset. Spine: are ancient places laid out in straight lines?
// Data read 26 September 2026: Historic England NHLE Scheduled Monuments (ArcGIS layer 6, centroids, British National
// Grid) inside the Mendip district boundary (ONS LAD December 2022 BGC): 233 monuments, including NHLE 1019390 "St
// Michael's Church, monastic remains, and other settlement remains on Glastonbury Tor", 1006156 "Glastonbury lake
// village" and 1011925 "Gough's Cave, Cheddar Gorge"; 94 of the 233 names begin "Bowl barrow".
// Our test (scratchpad som/ley.py): a triple counts as aligned when one monument lies between two others and within a
// set width of the straight line joining them. 2,081,156 triples. Width 25 m: monuments 14,569; uniform random points
// placed in Mendip by rejection sampling (acceptance 60.6 per cent, 1.65 tries per point), 20 runs, mean 6,325.5 (5,746
// to 6,910). Width 50 m: 29,253 against 12,938.6. Clustered null (each real monument moved up to D, 10 runs): 500 m
// mean 13,158.8 (12,623 to 13,479); 1 km 12,768.0; 3 km 11,217.0. Median nearest-neighbour distance 354 m (monuments)
// against 844 m (uniform random).
// Lesson family: rejection sampling and a null model for coincidence (alignments of random points), clustering as a
// confounder; screened (ley line, rejection sampling in this sense: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 981,683); ONS built-up areas, all inside,
// agree with our OA sums. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SOMERSET', blurb: 'Three councils from Bath to Minehead, and a Glastonbury lesson: are ancient sites really lined up, or would random dots do the same?' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-somerset',
  code: 'som',
  accent: '#5F106B',
  accentRationale: 'Somerset: a deep dusk purple from the solver (9.54:1 on the darkest paper tint), redder than the North Yorkshire heather',
  pageType: 'governorate',
  place: {
    name: 'Somerset',
    eyebrow: 'Somerset',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Bath', href: '/best-coding-class-in-bath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Somerset',
  title: 'Coding Classes in Somerset | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Somerset, from Bath, Weston-super-Mare and Taunton to Yeovil, Bridgwater, Frome, Portishead and Wells.',
  ogDescription: 'Coding classes for all of Somerset, and a Glastonbury project: count the straight lines among 233 ancient monuments, then find out how many random dots would make by chance.',
  twitterDescription: 'Somerset coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Somerset',
    description: 'Ability-placed online coding, Python, statistics and mathematics for children, teenagers and adults across Somerset, taught live in English.'
  },

  h1: 'Coding classes in Somerset',
  capsuleQ: 'What are the best coding classes in Somerset?',
  capsule: 'Somerset as a county is three councils: Somerset Council, which the 2021 Census still counted as four districts, plus Bath and North East Somerset and North Somerset. Their six published counts add up, by our sum, to 981,683 people. Bath and Weston-super-Mare are the largest towns, followed by Taunton, Yeovil and Bridgwater. We teach live over video from India, and learners are placed in classes by ability instead of by age. Anyone from 6 to 67 can learn coding, Python, statistics or maths with us, in a small group of five to ten or one-to-one. The Somerset project tests the idea of ley lines with real monument data. Your first lesson is free; afterwards a group place costs USD 100 a month and private lessons USD 150 a month.',
  lead: 'Glastonbury Tor, with the ruined St Michael\'s Church on top, is a scheduled monument, and around it lie hundreds more: barrows, hillforts, caves and the Glastonbury lake village. People have long noticed that some ancient places seem to fall on straight lines, sometimes called ley lines. But on any map with enough dots, some will line up by pure chance. This page\'s project asks the question properly. It takes the 233 scheduled monuments in the Mendip district, counts every set of three that sits on a near-straight line, and compares the total with the same count for random dots scattered over the same ground. The answer is more interesting than yes or no.',
  wa: 'Hello Modern Age Coders, we are in Somerset and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Somerset',
    h2: 'Where Somerset learners start',
    intro: 'A seven-year-old in Frome who loves dot-to-dot puzzles, a Year 8 in Yeovil who asks "but is that just luck?", a Year 12 in Taunton studying statistics, and an adult in Portishead who works with reports and figures. Each starts with a free lesson.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic puzzles and computational thinking, with patterns, probability problems and Venn diagrams.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, including coordinates, lines and experiments run thousands of times.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability built up step by step, including how to tell a real pattern from chance.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Data and AI tools for adults who do not code yet, with an eye for when a pattern is only luck.' }
    ]
  },

  sections: [
    {
      id: 'somerset', tint: '', eyebrow: 'Somerset in figures',
      h2: '981,683 people from the Severn to Exmoor',
      intro: 'Council counts are 2021 Census figures on Nomis; the county total is our sum. Towns are ONS built-up areas, each compared with our own addition of census output areas.',
      body: [
        { kind: 'table', caption: 'Somerset\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Bath', '94,080', 'Portishead', '26,355'],
          ['Weston-super-Mare', '84,605', 'Clevedon', '21,085'],
          ['Taunton', '61,665', 'Keynsham', '19,255'],
          ['Yeovil', '50,170', 'Burnham-on-Sea', '16,320'],
          ['Bridgwater', '47,860', 'Nailsea', '15,925'],
          ['Frome', '27,905', 'Chard', '14,290']
        ] },
        { kind: 'p', text: 'North Somerset is the largest of the six census areas at 216,726, and Mendip the smallest at 116,089. The four districts the census used, Mendip, Sedgemoor, South Somerset and Somerset West and Taunton, have since become Somerset Council, which appears in the ONS list of councils from April 2023. After the table come Wellington, Midsomer Norton, Street, Wells, Minehead, Radstock and Shepton Mallet, with Glastonbury at 8,300. The three councils and academy trusts set school holidays; we did not read their calendars and plan breaks with each family.' },
        { kind: 'callout', h3: 'Two city pages already', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a> page compares two Jane Austen novels, and <a class="cg-inline-link" href="/best-coding-class-in-wells">Wells</a> predicts full moons. This page covers the rest of the county, from Portishead to Chard.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Somerset project',
      h2: 'Ley lines, or the arithmetic of dots?',
      intro: 'Real monuments, random monuments, and a fairer kind of random that changes the answer.',
      body: [
        { kind: 'p', text: 'The learner downloads the Historic England list of scheduled monuments and keeps the 233 whose centre points fall inside the Mendip district. With 233 points there are 2,081,156 different sets of three. A set counts as a straight line when one monument sits between the other two and within 25 metres of the line joining them. The program checks every set and finds 14,569 alignments. That sounds astonishing, until you ask the only question that matters: how many would random dots give?' },
        { kind: 'p', text: 'To answer it, the program scatters 233 random dots over Mendip using rejection sampling. It picks a random spot in the rectangle around the district, keeps it if it falls inside the boundary and throws it away if not. About 60.6 per cent of spots are kept, so each dot takes about 1.65 tries. Twenty scatterings of random dots give between 5,746 and 6,910 alignments, averaging about 6,326.' },
        { kind: 'table', caption: 'Near-straight triples within 25 metres, our runs of 26 September 2026', head: ['Set of 233 points', 'Straight triples', 'What it tells you'], rows: [
          ['Real Mendip monuments', '14,569', 'The number to explain'],
          ['Random dots, spread evenly', 'About 6,326', 'Monuments beat plain chance by more than two to one'],
          ['Each monument moved up to 3 km', 'About 11,217', 'Keeping the clumps explains much of the gap'],
          ['Each monument moved up to 500 m', 'About 13,159', 'Most of the excess is simply clumping'],
        ] },
        { kind: 'p', text: 'Evenly spread random dots are an unfair comparison, because real monuments are not spread evenly: their typical distance to the nearest neighbour is 354 metres, against 844 for random dots, and 94 of the 233 are bowl barrows, which often sit in groups. Points packed into clumps make far more straight triples. So the program builds a fairer kind of random: each real monument is moved to a random spot within 500 metres of where it is. That keeps the clumps and scrambles any deliberate lines, and it produces about 13,159 alignments. Most of the excess over even chance was clumping all along.' },
        { kind: 'p', text: 'A small gap remains: 14,569 against a highest value of 13,479 across ten scrambled runs. That could mean some monuments really were placed in rows, such as barrows along a ridge or sites beside an old route, or it could come from how the centre points of large monuments are calculated. The honest conclusion is not "ley lines are real" or "ley lines are nonsense", but that the evidence for deliberate lines is far weaker than the raw count suggests, and that finding the real cause means looking closely at the few triples that remain.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Throw twenty counters on a map, draw every straight line through three of them, and count how many you find without trying.' },
          { h3: 'Ages 12 to 15', p: 'Write the three-point line test in Python, scatter random dots with rejection sampling, and count the lines they make.' },
          { h3: 'Ages 15 and up', p: 'Run the full comparison with the real monuments, build the clustered random model, and explain what the remaining gap could and could not mean.' }
        ] },
        { kind: 'callout', h3: 'What is recorded and what is ours', p: 'The monuments and their names come from Historic England\'s National Heritage List, and the Mendip boundary from the ONS. The alignment rule, the random models and every count in the table are ours, and a different width or rule would give different numbers. Nothing here says anything about what the monuments meant to the people who built them.' }
      ]
    },
    {
      id: 'glastonbury', tint: 'deep', eyebrow: 'Why Mendip',
      h2: 'A Tor, a lake village and a gorge full of caves',
      intro: 'The Somerset link, in the list entries themselves.',
      body: [
        { kind: 'table', caption: 'Some of the 233 scheduled monuments in the Mendip data', head: ['List entry', 'Name on the National Heritage List'], rows: [
          ['1019390', 'St Michael\'s Church, monastic remains, and other settlement remains on Glastonbury Tor'],
          ['1006156', 'Glastonbury lake village'],
          ['1011925', 'Gough\'s Cave, Cheddar Gorge'],
          ['Many entries', '94 names beginning Bowl barrow, often with a nearby farm to fix the location']
        ] },
        { kind: 'p', text: 'Mendip is a good place for this test because it holds so many recorded monuments in a small area, from caves in Cheddar Gorge to the Tor above Glastonbury. The same trap waits wherever people search large datasets for patterns: in star maps, stock prices, sports streaks and health records, some patterns will appear by chance alone. A Somerset student who has built a random model for comparison has learned the most important question in data science: compared with what?' },
        { kind: 'p', text: 'Modern Age Coders is independent of Historic England, Somerset Council and the other councils named here. The list entries are Historic England\'s; our counts and any errors are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a> and <a class="cg-inline-link" href="/best-coding-class-in-wells">Wells</a> have their own pages; <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> is just north, with <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a> and <a class="cg-inline-link" href="/coding-classes-in-devon">Devon</a> to the south and west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From dot-to-dot to telling signal from chance',
    intro: 'The free lesson places each learner. Age offers a guess; ability makes the decision.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Dots and shapes', p: 'Block coding with coordinates, shapes and random dots that appear on the screen.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 13', h3: 'Chance experiments', p: 'Python and puzzles that run a random experiment many times and count the results.', courses: ['problem-solving-and-computational-thinking-for-kids', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Real data, fair tests', p: 'Statistics and data science in Python, with random models to compare real patterns against.', courses: ['statistics-probability-maths-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Judging claims', p: 'Data, statistics and AI tools for adults who need to know when a pattern is real.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and patterns',
    h2: 'An AI finds patterns everywhere. Which ones would random data show too?',
    intro: 'Pattern-finding is easy; the comparison is the hard part.',
    p1: 'Finding patterns is the core skill of machine learning, and with enough data it will always find something. Ask an assistant to look for alignments among Somerset\'s monuments and it may well report thousands. Unless it is asked to build a fair random comparison, it will not say that evenly scattered dots make over six thousand, and clumped dots over thirteen thousand.',
    p2: 'A Somerset student who has built the comparison knows to ask of any AI finding what a random version of the same data would show. That one question separates discoveries from coincidences, whether the data are monuments, medical scans or market prices.',
    closer: 'So a young person in Somerset should learn to code in 2026 to ask "compared with what?" before believing a pattern.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From the Levels to the Quantocks, without the drive',
    intro: 'Somerset is long and rural, and a weekly class in one of its towns is out of easy reach for many families. Online lessons fix that.',
    cells: [
      { h3: 'Learning at home', p: 'A farmhouse on the Levels, a terrace in Bridgwater, a flat in Weston. The screen is shared and the learner writes the code.' },
      { h3: 'Words from school', p: 'Year groups, key stages, GCSEs and A levels mean the same here as in Somerset schools, and all teaching is in English.' },
      { h3: 'A first lesson on us', p: 'A real lesson, then a straight recommendation of level and course. We never ask for card details at this stage.' },
      { h3: 'The right group', p: 'Five to ten learners at the same stage, drawn from Somerset, the UK and further afield.' },
      { h3: 'Pauses for holidays', p: 'Two lessons a week suits most learners, with breaks for your school\'s holidays.' },
      { h3: 'Times kept in UK time', p: 'We book you in UK time, unchanged by the clock changes; your teacher works on India time, several hours ahead, and handles the difference.' }
    ],
    spec: { title: 'Why level matters most', p: 'Across a county of market towns and villages, five learners at one stage free on the same evening are rarely neighbours. Level-based groups let a learner in Minehead or Shepton Mallet join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Somerset',
    intro: 'Chard or Clevedon, you pay the same, and so do families in every country we teach except India.',
    first: 'A whole lesson of real work, ending with advice on level and course.',
    group: 'Roughly eight lessons a month in a group of five to ten at one level.',
    private: 'Roughly eight lessons a month, one teacher and one learner.',
    closer: 'Everything is priced in US dollars, with no sterling prices. Nothing is billed until the free lesson has set a course and a weekly time; the pricing page covers pauses, missed lessons and moving between group and private.'
  },

  reviewsH2: 'What families write about us on Google',

  book: {
    h2: 'Book a free lesson in Somerset',
    intro: 'Share an age or school year and a favourite pastime. A first lesson might be a dot game in Scratch, a Python coin-toss experiment, or the monument lines on this page.',
    success: 'Thank you. Your Somerset request has arrived.'
  },

  faq: {
    h2: 'Somerset questions',
    intro: 'The county, the monument project and practical details.',
    items: [
      { q: 'How many people live in Somerset?', a: 'The ceremonial county had 981,683 usual residents at the 2021 Census, by our sum of six ONS figures on Nomis: North Somerset, Bath and North East Somerset, and the four districts now forming Somerset Council.' },
      { q: 'What are the largest towns in Somerset?', a: 'By ONS built-up area: Bath 94,080, Weston-super-Mare 84,605, Taunton 61,665, Yeovil 50,170 and Bridgwater 47,860.' },
      { q: 'What is the ley line project?', a: 'Learners count near-straight triples among 233 scheduled monuments in Mendip, compare them with random dots placed by rejection sampling, then with a fairer clumped random model, and find that clumping explains most of the apparent lines.' },
      { q: 'What is rejection sampling?', a: 'A way to pick random points inside an awkward shape: choose points in a simple rectangle around it and throw away any that fall outside. In Mendip about 60.6 per cent of points are kept.' },
      { q: 'Does this prove ley lines are not real?', a: 'No. It shows that most apparent alignments are what chance and clumping would produce, and that a small excess remains to be investigated. It says nothing about beliefs or meanings.' },
      { q: 'Is there a Somerset centre?', a: 'No. Lessons are live online only, so learners join from home anywhere in the county.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67. Young children begin with blocks and puzzles, Python usually starts around eight to ten, teenagers take statistics and data science further, and adults learn data skills. The free lesson decides the level.' },
      { q: 'Do you teach statistics?', a: 'Yes. Our statistics and probability course builds up from basics, with coding used to run experiments and test whether patterns are real. We do not promise exam grades.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. Then it is USD 100 a month for a group or USD 150 a month one-to-one, with no joining fee and no fixed term.' },
      { q: 'Do you follow Somerset school holidays?', a: 'We can. Somerset Council, Bath and North East Somerset, North Somerset and academy trusts publish dates, and we pause around your school\'s.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Somerset',
    html: 'Within the county see <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a> and <a class="cg-inline-link" href="/best-coding-class-in-wells">Wells</a>; beyond it are <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a>, <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a> and <a class="cg-inline-link" href="/coding-classes-in-devon">Devon</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Somerset and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-bath', label: 'Bath' },
    { href: '/best-coding-class-in-bristol', label: 'Bristol' }
  ],

  personalityCss: `
.cg-root.cg-som .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.2vw, 2.8rem); }
.cg-root.cg-som .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-som .cg-capsule { border-left: 6px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-som .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-som .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.018em; }
.cg-root.cg-som .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-som .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-som .cg-table th { letter-spacing: 0.045em; font-weight: 700; }
.cg-root.cg-som .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-som .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Ceremonial Somerset: Somerset Council area (2021 Census districts Mendip, Sedgemoor, South Somerset, Somerset West and Taunton; ONS LAD April 2023 E06000066 Somerset), Bath and North East Somerset, North Somerset. ONS Census 2021 TS001 via Nomis: North Somerset 216,726; Bath and North East Somerset 193,409; South Somerset 172,671; Somerset West and Taunton 157,445; Sedgemoor 125,343; Mendip 116,089; our sum 981,683. ONS built-up areas (published; agree with our OA sums, all inside): Bath 94,080; Weston-super-Mare 84,605; Taunton 61,665; Yeovil 50,170; Bridgwater 47,860; Frome 27,905; Portishead 26,355; Clevedon 21,085; Keynsham 19,255; Burnham-on-Sea 16,320; Nailsea 15,925; Chard 14,290; Wellington 13,815; Midsomer Norton 13,745; Street 12,710; Wells 12,105; Minehead 11,750; Radstock 9,980; Shepton Mallet 9,645; Glastonbury 8,300. Historic England NHLE Scheduled Monuments inside Mendip (LAD Dec 2022 BGC): 233; entries include 1019390 "St Michael\'s Church, monastic remains, and other settlement remains on Glastonbury Tor", 1006156 "Glastonbury lake village", 1011925 "Gough\'s Cave, Cheddar Gorge"; 94 names begin "Bowl barrow".',
    localProject: 'Alignment test with null models. Triple aligned if middle point lies between the outer two (projection) and within width w of their line. 233 monuments, 2,081,156 triples. w = 25 m: observed 14,569; uniform random by rejection sampling in Mendip (acceptance 60.6 per cent, 1.65 tries per point), 20 runs, mean 6,325.5, range 5,746 to 6,910. w = 50 m: 29,253 vs 12,938.6. Clustered null by jitter within D (10 runs, w = 25): 500 m mean 13,158.8 (12,623 to 13,479); 1 km 12,768.0; 3 km 11,217.0. Median nearest-neighbour 354 m monuments vs 844 m uniform. Page labels rule and counts as ours and makes no claim about meaning. AI angle: patterns need a fair random comparison. Lesson family: rejection sampling, null models for coincidence, clustering as confounder.',
    requiredMentions: [
      '981,683',
      'ley line',
      '14,569',
      'Glastonbury Tor',
      'rejection sampling',
      'Portishead',
      'Nailsea',
      'Burnham-on-Sea',
      'Minehead',
      'Weston-super-Mare',
      'Gough\'s Cave'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the six Somerset census areas, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Somerset towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: OA21 to BUA22 lookup, LAD December 2022 boundaries (Mendip), LAD April 2023 names.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Historic England, National Heritage List for England: scheduled monuments in Mendip.', url: 'https://historicengland.org.uk/listing/the-list/' }
    ],
    rejectedClaims: [
      'Named ley lines through Glastonbury and who proposed them: not read from a primary source, so none are named.',
      'What the remaining excess of alignments means: not investigated; the page lists possibilities only.',
      'Dates or purposes of individual monuments: not read beyond their list names.',
      'Glastonbury Festival and Hinkley Point: not researched for this page, not mentioned.',
      'Somerset school term dates: none read.',
      'Named Somerset schools: none named.'
    ]
  }
};
