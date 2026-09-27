'use strict';
// Bracknell (cg- town page, UK cluster Phase 8, towns band A, row 321). Keyword slug per the owner's 2026-09-27
// instruction. Spine: a rain gauge that counts in steps. Anchors (read raw 27 September 2026, Science Museum Group):
// co462443 "Standard pattern Meteorological Office 5-inch rain gauge in stainless steel, devised by Martin N. Parker of the
// Meteorological Office's Engineering Design Services, Beaufort Park, Bracknell, UK, unsigned, 1998"; "Simple rain gauges
// have a horizontal circular aperture of known diameter"; "Networks of these instruments can be used to provide regular
// measurements to reveal the amount and distribution of precipitation"; "made of stainless steel rather than previously
// traditional copper"; "Inside the can a glass bottle collects the water". co474350 "Met Office pattern tipping bucket rain
// gauge, Met Ref 9991631, 1997". co474307 "Sea temperature bucket, Mk 3B, made by Meteorological Office Market Engineering,
// Bracknell, UK, 1997".
// Our model (computed inline; tip size 0.2 mm is a common design value, labelled, not from the record; events invented):
// events 0.15, 3.70, 0.05, 12.35, 0.10, 0.08 mm (sum 16.43). Bucket keeps its part-fill between events: reported 0.0, 3.8,
// 0.0, 12.4, 0.0, 0.2 (sum 16.4). Slip: resetting after each event: 0.0, 3.6, 0.0, 12.2, 0.0, 0.0 (sum 15.8). Intensity
// steps: 2.4 mm/h from 5-minute counts, 12 mm/h from 1-minute counts. 5-inch aperture = 127 mm: area 12,668 mm2; 1 mm of
// rain = 12.7 ml.
// Lesson family: quantisation and resolution (counting in fixed steps, carried remainder, rate from counts); screened
// (quantis, quantiz, tipping bucket, rain gauge: 0 hits). RLE was ruled out (spent at Almelo, Oxford, Derby).
// Place facts: Nomis Census 2021 TS007A, Bracknell Forest E06000036: total 124,607; under 5 7,119 (5.7%; England 5.4%);
// 5 to 9 7,859 (6.3%; 5.9%); 10 to 14 8,081 (6.5%; 6.0%); 35 to 39 9,400 (7.5%; 6.7%); 40 to 44 9,155 (7.3%; 6.3%); 20 to 24
// 6,377 (5.1%; 6.0%); 85+ 2,372 (1.9%; 2.4%). ONS 2021 BUAs: Bracknell 78,675; Sandhurst (Bracknell Forest) 20,215;
// Binfield 4,850 (Ascot and Crowthorne cross the boundary). Bands never summed. No schools named.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BRACKNELL', label: 'Bracknell', blurb: 'Online coding and Python classes for Bracknell, with a project on a Met Office rain gauge that can only count in steps.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-bracknell',
  code: 'bnl',
  accent: '#7E308A',
  accentRationale: 'Bracknell: a storm-cloud violet from the solver (6.32:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Bracknell',
    eyebrow: 'Bracknell, Berkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Berkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Berkshire', href: '/coding-classes-in-berkshire' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bracknell, England',
  title: 'Online Coding and Python Classes in Bracknell | Ages 6 to 67',
  description: 'Online coding, Python, AI and programming classes for Bracknell, Sandhurst and Binfield learners aged 6 to 67, taught live in small groups. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Bracknell, and a project on a Met Office rain gauge designed in Bracknell that measures rain only in small steps.',
  twitterDescription: 'Bracknell coding, Python and AI classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Bracknell',
    description: 'Online coding, Python programming, AI, data and mathematics for children, teenagers and adults in Bracknell Forest, taught live in English and placed by level.'
  },

  h1: 'Online coding and Python classes in Bracknell',
  capsuleQ: 'What are the best coding and Python classes in Bracknell?',
  capsule: 'Bracknell Forest had 124,607 residents at the 2021 census, with Bracknell itself a built-up area of 78,675 and Sandhurst at 20,215. It is a borough of young families: children aged 10 to 14 made up 6.5 per cent of residents against 6.0 across England, and people aged 35 to 39 made up 7.5 against 6.7. For every age from 6 to 67 we teach coding, Python, AI and maths in live video lessons from India, privately or in classes of five to ten learners at one level. One free lesson finds the right course. The Bracknell project comes from a Met Office rain gauge designed at Beaufort Park, Bracknell. Lessons then cost USD 100 a month in a class or USD 150 a month one-to-one.',
  lead: 'In 1998 Martin N. Parker of the Meteorological Office\'s Engineering Design Services at Beaufort Park, Bracknell, devised a new standard 5-inch rain gauge in stainless steel, now in the Science Museum Group collection. Alongside it the collection holds a Met Office tipping bucket rain gauge from 1997. A tipping bucket gauge is clever: rain fills a tiny seesaw bucket until it tips, empties and counts one tip. That makes it automatic, but it also means the gauge can only count rain in steps, like a ruler with no marks between the centimetres. What happens to a light shower smaller than one step? And how does a sensible gauge avoid losing those scraps? This page\'s project simulates it in Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Bracknell.',

  picks: {
    eyebrow: 'Course picks for Bracknell',
    h2: 'Where Bracknell learners usually start',
    intro: 'Start from what the learner enjoys. The opening live lesson of each course is free, and we do not ask for card details.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with weather, rain drops and counting games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python and AI basics, including a program that counts rain in tips.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to GCSE depth and beyond, with sensors, data and simulation.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults, from first steps to working with real measurements.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bracknell today',
      h2: 'Young families across the borough',
      intro: 'Borough figures from 2021 census table TS007A, read through Nomis; the bands are shown separately and never totalled.',
      body: [
        { kind: 'table', caption: 'Bracknell Forest and England by selected age, 2021 census TS007A', head: ['Ages', 'Bracknell Forest', 'Borough share', 'England share'], rows: [
          ['Under 5', '7,119', '5.7%', '5.4%'],
          ['5 to 9', '7,859', '6.3%', '5.9%'],
          ['10 to 14', '8,081', '6.5%', '6.0%'],
          ['35 to 39', '9,400', '7.5%', '6.7%'],
          ['40 to 44', '9,155', '7.3%', '6.3%'],
          ['85 and over', '2,372', '1.9%', '2.4%']
        ] },
        { kind: 'p', text: 'Children and parents in their late thirties and early forties sit above the national pattern, while the oldest residents are fewer. Besides Bracknell and Sandhurst, the ONS counts Binfield at 4,850 people inside the borough. Schools follow the national curriculum for England, and our timetable pauses for whichever holiday weeks your family names.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'See our <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> page for the county and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page for the wider region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bracknell project',
      h2: 'Measuring rain in steps',
      intro: 'Quantisation: a measurement that can only move in fixed jumps.',
      body: [
        { kind: 'p', text: 'The learner models a tipping bucket that tips once for every 0.2 millimetres of rain, a common size for such gauges rather than a figure from the museum\'s record. Six invented showers fall over a week, from 0.05 millimetres to 12.35. Python keeps a running total of true rain, uses whole-number division to count completed tips, and reports each shower as its tips times 0.2. The key design choice is that water left in a part-full bucket stays there and counts towards the next tip.' },
        { kind: 'table', caption: 'Our tipping bucket simulation with invented showers and a 0.2 mm tip, 27 September 2026', head: ['Shower', 'True rain', 'Reported, part-fill kept', 'Reported, bucket emptied each time'], rows: [
          ['1', '0.15 mm', '0.0 mm', '0.0 mm'],
          ['2', '3.70 mm', '3.8 mm', '3.6 mm'],
          ['3', '0.05 mm', '0.0 mm', '0.0 mm'],
          ['4', '12.35 mm', '12.4 mm', '12.2 mm'],
          ['5 and 6', '0.18 mm', '0.2 mm', '0.0 mm'],
          ['Week total', '16.43 mm', '16.4 mm', '15.8 mm']
        ] },
        { kind: 'p', text: 'Each single shower is only accurate to one step, and tiny showers vanish or appear late. But because the part-fill is carried forward, nothing is lost: the week\'s total is out by less than one tip. Throw that remainder away after every shower, the slip in the last column, and the errors pile up in one direction, leaving the week 0.63 millimetres short. The same idea explains rain rates. Counting tips in five-minute blocks, the rate can only be a multiple of 2.4 millimetres per hour, so a gentle drizzle reads as zero, then suddenly as 2.4.' },
        { kind: 'p', text: 'The learner writes two tests: the reported total must never differ from the true total by a whole tip or more, and a shower of exactly 0.2 millimetres must produce exactly one tip, not zero because of a rounding slip in floating point. We also convert the classic gauge\'s size: a 5-inch opening is 127 millimetres across, about 12,668 square millimetres, so each millimetre of rain puts about 12.7 millilitres of water in the bottle.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Fill a cup a spoonful at a time and count only full cups, then build a Scratch rain counter.' },
          { h3: 'Ages 11 to 15', p: 'Use whole-number division in Python to count tips and keep the remainder between showers.' },
          { h3: 'Ages 15 and up', p: 'Compare carrying and discarding the remainder, and test the floating-point edge case.' }
        ] },
        { kind: 'callout', h3: 'Museum records, our simulation', p: 'The gauges and their Bracknell origins come from the Science Museum Group records. The 0.2 millimetre tip and every shower are our illustration, not the performance of those instruments.' }
      ]
    },
    {
      id: 'the-gauges', tint: 'deep', eyebrow: 'Why the rain gauges',
      h2: 'Instruments designed in Bracknell',
      intro: 'What the Science Museum Group records say.',
      body: [
        { kind: 'table', caption: 'Met Office instruments linked to Bracknell, Science Museum Group records co462443, co474350 and co474307', head: ['Record', 'What it says'], rows: [
          ['Standard 5-inch rain gauge, 1998', 'Devised by Martin N. Parker of the Met Office Engineering Design Services, Beaufort Park, Bracknell'],
          ['Its material', 'Stainless steel rather than the previously traditional copper'],
          ['How it works', 'A horizontal circular opening of known diameter; a glass bottle inside the can collects the water'],
          ['Why networks matter', 'Many gauges together reveal the amount and distribution of rain'],
          ['Tipping bucket rain gauge', 'A Met Office pattern gauge from 1997'],
          ['Sea temperature bucket', 'Made by Met Office Market Engineering, Bracknell, 1997']
        ] },
        { kind: 'p', text: 'Every digital sensor quantises: phone cameras record light in steps, microphones sample sound in steps, and step counters count whole steps. Programmers who handle sensor data decide what to do with the leftovers, just like the tipping bucket. A Bracknell learner who has watched carried remainders keep a week\'s rain honest has met one of the core ideas of digital measurement.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Met Office, the Science Museum Group and the ONS. The records are theirs; the simulation and any error in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From spoonfuls to sensor data',
    intro: 'A rough guide; the free lesson makes the final call.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Counting games', p: 'Block coding that counts, collects and tallies.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Division and remainders', p: 'Python with whole-number division and running totals.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Measurement and AI', p: 'Sensors, data and machine learning basics alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Python for data', p: 'Adult Python for measurements, files and reports.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and measurement',
    h2: 'An AI can process sensor data. Does it know the readings come in steps?',
    intro: 'Treating stepped readings as smooth ones creates errors nobody sees.',
    p1: 'Ask a chatbot to analyse rainfall or step-count data and it will usually treat every value as exact. It rarely asks about the size of the step, or whether leftovers were carried or thrown away.',
    p2: 'A Bracknell learner who has simulated a tipping bucket knows to ask about a sensor\'s resolution before trusting fine detail in its readings.',
    closer: 'Asking how finely a sensor can really measure is a strong reason for a Bracknell teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Sandhurst to Binfield, by video',
    intro: 'Any home in the borough can join a live lesson.',
    cells: [
      { h3: 'Learners at the keys', p: 'The student writes every line; the tutor reads their screen and asks the question that unlocks the next step.' },
      { h3: 'Right level', p: 'A Year 4 or a Year 12 from Bracknell starts where their year and the trial suggest, with exam board terms.' },
      { h3: 'Free opening lesson', p: 'Nothing to pay for the first lesson, which ends with clear advice.' },
      { h3: 'Classes by ability', p: 'Five to ten learners at one stage in each class, from across the UK.' },
      { h3: 'Term weeks', p: 'Two lessons each week in term; school holidays stay free.' },
      { h3: 'Constant UK time', p: 'Your lesson time does not change when British clocks do.' }
    ],
    spec: { title: 'Why groups are online', p: 'Five Bracknell learners at the same level and free at the same hour are rarely neighbours. Online groups bring the right classmates together.' }
  },

  fees: {
    h2: 'Fees in Bracknell',
    intro: 'Bracknell families pay the same fee we charge in every country outside India.',
    first: 'A full free lesson with an honest recommendation.',
    group: 'About eight live lessons a month in a class of five to ten.',
    private: 'About eight live lessons a month with a dedicated tutor.',
    closer: 'Our fees are in US dollars only, never sterling. You pay nothing until the trial has fixed a course and a weekly slot; the pricing page covers holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Bracknell-area families on Google',

  book: {
    h2: 'Book a free Bracknell lesson',
    intro: 'Share the learner\'s age or year and one thing they enjoy. The trial could be a Scratch weather game, a first Python program, an AI project, or the rain gauge puzzle.',
    success: 'Thank you. Your Bracknell request has been received.'
  },

  faq: {
    h2: 'Bracknell questions',
    intro: 'The borough, the rain gauge project and practical details.',
    items: [
      { q: 'How many people live in Bracknell?', a: 'The Bracknell built-up area had 78,675 residents in the 2021 census, and Bracknell Forest as a whole 124,607.' },
      { q: 'Do you teach Python and AI online in Bracknell?', a: 'Yes. Bracknell learners from age 6 to adults take our live online Python, AI and coding lessons.' },
      { q: 'What is the rain gauge project?', a: 'Learners simulate a tipping bucket rain gauge in Python and see why carrying the part-full bucket keeps the weekly total honest.' },
      { q: 'What is quantisation?', a: 'Measuring in fixed steps, so any value between two steps has to be rounded to one of them.' },
      { q: 'Was a Met Office rain gauge designed in Bracknell?', a: 'Yes. The Science Museum Group records a standard 5-inch gauge devised at Beaufort Park, Bracknell, in 1998.' },
      { q: 'Are classes held in Bracknell?', a: 'They run online, so learners join from home anywhere in the borough.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, maths and computing, focused on real understanding with no grade promises.' },
      { q: 'What ages can learn?', a: 'Six to 67.' },
      { q: 'How much are lessons?', a: 'The first is free; after that USD 100 a month for a class or USD 150 a month for one-to-one.' },
      { q: 'Are there lessons in school holidays?', a: 'No, they pause. Share your holiday dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near Bracknell',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-reading">Reading</a> traces a copied tapestry, <a class="cg-inline-link" href="/ai-and-programming-classes-in-maidenhead">Maidenhead</a> measures the push of Brunel\'s arches, and the <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> page covers the county. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bracknell and Berkshire',
  footerPlaces: [
    { href: '/coding-classes-in-berkshire', label: 'Berkshire' },
    { href: '/best-coding-class-in-reading', label: 'Reading' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' }
  ],

  personalityCss: `
.cg-root.cg-bnl .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-bnl .cg-hero h1 { font-weight: 710; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-bnl .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bnl .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bnl .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-bnl .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-bnl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bnl .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-bnl .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bnl .cg-callout { border-left-width: 4px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Bracknell Forest (E06000036). Nomis Census 2021 TS007A: total 124,607; under 5 7,119 (5.7%, England 5.4%); 5 to 9 7,859 (6.3%, 5.9%); 10 to 14 8,081 (6.5%, 6.0%); 35 to 39 9,400 (7.5%, 6.7%); 40 to 44 9,155 (7.3%, 6.3%); 85+ 2,372 (1.9%, 2.4%). ONS 2021 BUAs: Bracknell 78,675; Sandhurst 20,215; Binfield 4,850. Science Museum Group co462443: "Standard pattern Meteorological Office 5-inch rain gauge in stainless steel, devised by Martin N. Parker of the Meteorological Office\'s Engineering Design Services, Beaufort Park, Bracknell, UK, unsigned, 1998"; "a horizontal circular aperture of known diameter"; "stainless steel rather than previously traditional copper". co474350: "Met Office pattern tipping bucket rain gauge, Met Ref 9991631, 1997". co474307: sea temperature bucket "made by Meteorological Office Market Engineering, Bracknell, UK, 1997".',
    localProject: 'Tipping bucket, 0.2 mm tip (common design value, labelled). Invented showers 0.15, 3.70, 0.05, 12.35, 0.10, 0.08 (16.43). Carry-over: 0.0, 3.8, 0.0, 12.4, 0.0, 0.2 (16.4). Reset slip: 0.0, 3.6, 0.0, 12.2, 0.0, 0.0 (15.8). Rate steps 2.4 mm/h (5-min), 12 mm/h (1-min). 5-inch = 127 mm, 12,668 mm2, 12.7 ml per mm. Lesson family: quantisation, remainders, resolution.',
    requiredMentions: [
      'Beaufort Park',
      'rain gauge',
      'tipping bucket',
      'Sandhurst',
      'Binfield',
      '78,675',
      'Martin N. Parker',
      'quantisation'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Bracknell Forest and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Science Museum Group collection, standard Met Office 5-inch rain gauge (co462443).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co462443' },
      { claim: 'Science Museum Group collection, Met Office tipping bucket rain gauge (co474350).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co474350' },
      { claim: 'Science Museum Group collection, sea temperature bucket Mk 3B (co474307).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co474307' }
    ],
    rejectedClaims: [
      'The actual tip size of the 1997 gauge: not in the record; 0.2 mm is labelled as a common value.',
      'Dates of the Met Office move to and from Bracknell: not read from a source, not claimed.',
      'Ascot and Crowthorne built-up areas: cross the boundary, not tabulated.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
