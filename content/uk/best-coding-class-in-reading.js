'use strict';
// Reading (cg- town page, UK cluster Phase 8, towns band A, row 315). Spine: when you copy a copy, whose mistake is it?
// Anchor (read raw 27 September 2026): Reading Museum, "The History of Britain's Bayeux Tapestry"
// (readingmuseum.org.uk/collections/britains-bayeux-tapestry/history-britains-bayeux-tapestry): original "over 70 metres long
// and although it is called a tapestry it is in fact an embroidery, stitched not woven in woollen yarns on linen"; "It was
// the idea of Elizabeth Wardle to make the replica"; "a member of the Leek Embroidery Society in Staffordshire"; "visiting
// Bayeux in 1885"; "based the replica on 1872-74 hand-coloured photographs of the tapestry held by the South Kensington
// Museum, now called the Victoria & Albert Museum"; "the thirty-five women who worked on the reproduction. It was completed
// on Whitsuntide 1886"; "completed in just over a year"; "Each embroiderer stitched her name beneath her completed panel";
// the pants: "The women of Leek were not responsible for this prudish addition as is often repeated - they had simply copied
// them from the set of photographs that had been 'cleaned-up' by the male staff at the South Kensington Museum"; first
// shown in Leek June 1886, toured for ten years including Germany and America; "In 1895 ... exhibited in the Town Hall at
// Reading"; Alderman Arthur Hill "offered to buy the replica" and "presented the tapestry as a gift to Reading". Britain's
// Bayeux Tapestry page: "It is 70 metres long"; held at Reading Museum.
// Our model (simulated inline, seed 1886, 5,000 trials; every rate invented): 1,000 details; photographs alter 0.5 per cent
// (about 5), stitching slips 1 per cent (about 10). Replica vs photographs: 9.99 differences on average; replica vs
// original: 14.92. Chain of copies each 99 per cent faithful: 1 copy 99.0, 5 copies 95.1, 10 copies 90.4, 30 copies 74.0,
// 69 copies 50.0 per cent unchanged (half after about 69 copies).
// Lesson family: copy-chain error accumulation and choosing the right reference to blame; screened (copying error, copy of
// a copy, generations of copies, lineage, Bayeux: 0 hits; Clondalkin's error propagation is measurement uncertainty; the
// Scotland hub's edit distance is fuzzy matching).
// Place facts: Nomis Census 2021 TS007A, Reading E06000038: total 174,224; 20 to 24 14,690 (8.4%; England 6.0%); 25 to 29
// 14,572 (8.4%; 6.6%); 30 to 34 15,640 (9.0%; 7.0%); 5 to 9 10,486 (6.0%; 5.9%); 65 to 69 5,844 (3.4%; 4.9%); 85 and over
// 2,895 (1.7%; 2.4%). ONS 2021 BUAs: Reading 203,795 (crosses three councils; 141,187 inside the borough by our OA sum),
// Caversham 33,040 (inside). Bands never summed. No schools named; 11+ page separate.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'READING', blurb: 'Home of Britain\'s Bayeux Tapestry, with a project on how mistakes build up when you copy a copy.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-reading',
  code: 'rdg',
  accent: '#66466B',
  accentRationale: 'Reading: a dyed-wool mulberry from the solver (6.38:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Reading',
    eyebrow: 'Reading, Berkshire, England',
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
  routeLabel: 'Reading, England',
  title: 'Best Coding Classes in Reading | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for learners in Reading and Caversham, aged 6 to 67, taught by a live teacher. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Reading, home of Britain\'s Bayeux Tapestry, and a Python project on how errors pile up when every copy is made from the last.',
  twitterDescription: 'Reading coding and AI classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Reading Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Reading and Caversham, taught live in English.'
  },

  h1: 'Coding classes in Reading',
  capsuleQ: 'What are the best coding classes in Reading?',
  capsule: 'Reading had 174,224 residents at the 2021 census and is a town of young adults: people aged 20 to 24 made up 8.4 per cent of residents and those aged 30 to 34 made up 9.0, against 6.0 and 7.0 per cent across England. Caversham, inside the borough, is a built-up area of 33,040 on its own. Reading Museum also holds Britain\'s Bayeux Tapestry, a full-size Victorian copy. Our teachers work from India and teach every lesson live by video, in coding, Python, AI and maths, for anyone from 6 to 67, one-to-one or in a small class of five to ten at one level. A free first lesson finds the right course. The Reading project asks whose mistake is whose when copies are made from copies. Continuing costs USD 100 a month for a class or USD 150 a month with a private tutor.',
  lead: 'In 1885 Elizabeth Wardle of the Leek Embroidery Society visited Bayeux, and soon thirty-five women were stitching a full-size copy of its famous embroidery, over 70 metres long, finished at Whitsuntide 1886. Reading Museum has displayed it since the town was given it. The museum\'s history page tells a lovely story about mistakes. In the Reading copy one naked figure in the border wears pants. The embroiderers are often blamed for adding them, but the museum explains they simply copied hand-coloured photographs whose images had already been "cleaned up" by staff at the South Kensington Museum. The copy was faithful to its source; the source had changed. How do errors build up when every copy is made from the last, and how do you tell who made them? This page\'s project works it out in Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Reading.',

  picks: {
    eyebrow: 'Course picks for Reading',
    h2: 'Four courses for Reading learners',
    intro: 'Choose by what the learner wants to make. Every course starts with a free live lesson and needs no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch stories and comic strips, told scene by scene like a tapestry.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python and first AI ideas, including a copying game that counts its own mistakes.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to GCSE depth and beyond, with simulation, randomness and testing.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Python for data work, where tracing a number back to its true source matters most.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Reading today',
      h2: 'A town of young adults',
      intro: 'These figures come from the 2021 census age table TS007A, read through Nomis; each band is shown as published and none are added together.',
      body: [
        { kind: 'table', caption: 'Reading and England, selected age bands, Census 2021 table TS007A', head: ['Age band', 'Reading residents', 'Share in Reading', 'Share in England'], rows: [
          ['20 to 24', '14,690', '8.4%', '6.0%'],
          ['25 to 29', '14,572', '8.4%', '6.6%'],
          ['30 to 34', '15,640', '9.0%', '7.0%'],
          ['5 to 9', '10,486', '6.0%', '5.9%'],
          ['65 to 69', '5,844', '3.4%', '4.9%'],
          ['85 and over', '2,895', '1.7%', '2.4%']
        ] },
        { kind: 'p', text: 'Reading leans towards people in their twenties and early thirties, with a smaller share of older residents than England as a whole, while its share of young children is close to the national figure. The ONS counts Caversham as its own built-up area of 33,040 inside the borough; the wider Reading built-up area, 203,795 people, reaches across three councils. Schools follow the national curriculum for England, and families tell us their own term dates.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> page covers the county, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page indexes the region, and there is a separate <a class="cg-inline-link" href="/11-plus-maths-tuition-reading">Reading 11+ maths</a> page for families preparing for selective tests.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Reading project',
      h2: 'Whose mistake is it?',
      intro: 'Copy a copy, and errors from every stage arrive together.',
      body: [
        { kind: 'p', text: 'The learner imagines the embroidery as 1,000 small details in a row and simulates two stages of copying, with rates we invented for the lesson. First the photographs: each detail has a half-per-cent chance of being altered, as the retouching did. Then the stitching: each detail has a one-per-cent chance of a slip. The program compares the finished copy two ways, against the photographs it was made from and against the original, and repeats the whole thing 5,000 times to average out the luck.' },
        { kind: 'table', caption: 'Our copying simulation, 1,000 invented details, 5,000 trials, 27 September 2026', head: ['Comparison', 'Average differences found', 'What it measures', 'Who gets blamed'], rows: [
          ['Replica against the photographs', '10', 'Only the stitchers\' slips', 'The embroiderers alone'],
          ['Replica against the original', '15', 'Slips plus inherited changes', 'Both stages together'],
          ['Photographs against the original', '5', 'Only the retouching', 'The photographers']
        ] },
        { kind: 'p', text: 'The table explains the pants story in numbers. Judged against its source, the replica looks like a fine copy with about ten slips. Judged against the original, it has about fifteen differences, a third of which were never the stitchers\' fault. Blaming the last person in the chain for everything, as the often-repeated story did, is exactly what happens when you only compare the final copy with the original and skip the middle.' },
        { kind: 'p', text: 'Then the learner extends the chain. If every copy keeps 99 per cent of details right, ten copies later about 90 per cent survive, thirty copies later about 74, and after around 69 copies only half are unchanged. That is why programmers keep one master source and copy from it, instead of copying the copies, and why version control records who changed each line. The rates here are ours; the lesson is how errors multiply and where to look for them.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a drawing-copying game down a line of friends, then count the changes at each step.' },
          { h3: 'Ages 11 to 15', p: 'Simulate the two copying stages in Python and compare the copy with each source.' },
          { h3: 'Ages 15 and up', p: 'Model long copy chains, find the half-way point with logarithms, and connect it to version control.' }
        ] },
        { kind: 'callout', h3: 'Museum history, our simulation', p: 'The story of the replica, the photographs and the pants comes from Reading Museum\'s history page. Every rate and count in the table is invented for the simulation, so it illustrates how errors build up, not how many the real replica contains.' }
      ]
    },
    {
      id: 'tapestry', tint: 'deep', eyebrow: 'Why the tapestry',
      h2: 'Britain\'s Bayeux Tapestry',
      intro: 'What Reading Museum\'s history page says.',
      body: [
        { kind: 'table', caption: 'Britain\'s Bayeux Tapestry, from Reading Museum\'s history page', head: ['From the page', 'Detail'], rows: [
          ['The original', 'Over 70 metres long, an embroidery stitched in wool on linen rather than a woven tapestry'],
          ['The idea', 'Elizabeth Wardle of the Leek Embroidery Society, who visited Bayeux in 1885'],
          ['The sources', 'Hand-coloured photographs of 1872 to 1874 held by the South Kensington Museum, now the V&A'],
          ['The makers', 'Thirty-five women, each stitching her name beneath her panel; finished at Whitsuntide 1886'],
          ['The pants', 'Copied from photographs already retouched at the South Kensington Museum'],
          ['Coming to Reading', 'Shown at Reading Town Hall in 1895, bought by Alderman Arthur Hill and given to the town']
        ] },
        { kind: 'p', text: 'Tracing an error back to where it entered is a daily task in software and data. A wrong figure in a report may have come from a spreadsheet, which came from an export, which came from a form. Engineers keep a single source of truth and a record of every change precisely so that the right stage gets fixed. A Reading learner who has separated inherited errors from new ones has learned how that detective work begins.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Reading Museum and the Office for National Statistics. The history is theirs; the simulation and any mistakes in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From picture stories to version control',
    intro: 'These bands are a sketch; the free lesson sets the starting point.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Stories in blocks', p: 'Block coding that tells stories scene by scene.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Chance in code', p: 'Python with random numbers, counting and simple simulations.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Models and testing', p: 'Simulation, probability and testing alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data you can trace', p: 'Adult Python for data work with a clear record of every step.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and sources',
    h2: 'An AI can repeat a story. Will it check the source it came from?',
    intro: 'A retold story can carry an old mistake as confidently as a true fact.',
    p1: 'Ask a chatbot about the pants on the Reading tapestry and it may repeat the popular version, that the embroiderers added them. Chatbots learn from what is often written, and an often-repeated error is easy to inherit.',
    p2: 'A Reading learner who has compared a copy with each of its sources knows to ask where a claim first entered the chain.',
    closer: 'Tracing a claim back to where it started is a strong reason for a Reading teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'From Caversham to the town centre, online',
    intro: 'Every part of Reading joins by video.',
    cells: [
      { h3: 'Learners at the keyboard', p: 'Students type their own code; the teacher watches the shared screen and nudges with questions.' },
      { h3: 'By year group', p: 'A Year 3 or a Year 11 in Reading starts at a level fitting their school year, using exam board names.' },
      { h3: 'Trial first', p: 'The opening lesson is free and ends with a straight recommendation.' },
      { h3: 'Classes at one stage', p: 'Five to ten learners working at one level, from all over the UK.' },
      { h3: 'School terms', p: 'Two lessons each week in term; the holidays are left free.' },
      { h3: 'On UK time', p: 'Your lesson stays at its UK hour through the clock changes; teachers move instead.' }
    ],
    spec: { title: 'Why online groups', p: 'Five learners at one level and one free hour rarely live on the same street. Online, a Caversham learner joins exactly the right class.' }
  },

  fees: {
    h2: 'Fees in Reading',
    intro: 'Reading pays the same fee as every country we teach outside India.',
    first: 'A complete free lesson and honest advice.',
    group: 'Roughly eight lessons a month with five to ten classmates.',
    private: 'Roughly eight lessons a month with one tutor.',
    closer: 'All fees are in US dollars and never in sterling. You pay only after the trial has settled a course and a weekly slot; holidays, missed lessons and format changes are set out on the pricing page.'
  },

  reviewsH2: 'Google ratings from our families',

  book: {
    h2: 'Book a free Reading lesson',
    intro: 'Share a school year or age and one interest. The trial could be a Scratch comic strip, a first Python program, or the copying-chain puzzle.',
    success: 'Thank you. Your Reading request has been received.'
  },

  faq: {
    h2: 'Reading questions',
    intro: 'The town, the tapestry project and practical details.',
    items: [
      { q: 'How many people live in Reading?', a: 'The 2021 census age table records 174,224 residents in the Borough of Reading.' },
      { q: 'Is Reading a young town?', a: 'Its share of people in their twenties and early thirties is well above England\'s, on the 2021 census.' },
      { q: 'What is the Reading copying project?', a: 'Learners simulate a copy made from retouched photographs and count which differences came from which stage.' },
      { q: 'What is Britain\'s Bayeux Tapestry?', a: 'A full-size Victorian embroidered copy of the Bayeux Tapestry, made by thirty-five women and held at Reading Museum.' },
      { q: 'Did the embroiderers add the pants?', a: 'Reading Museum says no: they copied photographs that had already been retouched at the South Kensington Museum.' },
      { q: 'Are the lessons in Reading?', a: 'Every lesson is online, joined from home anywhere in the borough.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, maths and computing, with understanding as the aim and no grade promises.' },
      { q: 'What ages can learn?', a: 'Six to 67.' },
      { q: 'How much are lessons?', a: 'Free first lesson; then USD 100 a month for a class or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in the holidays?', a: 'No, they pause. Share your school dates with us.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near Reading',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-slough">Slough</a> measures Herschel\'s giant mirror, <a class="cg-inline-link" href="/coding-classes-in-oxfordshire">Oxfordshire</a> has its own county project, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page indexes the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Reading and Berkshire',
  footerPlaces: [
    { href: '/coding-classes-in-berkshire', label: 'Berkshire' },
    { href: '/11-plus-maths-tuition-reading', label: 'Reading 11+ maths' },
    { href: '/best-coding-class-in-slough', label: 'Slough' }
  ],

  personalityCss: `
.cg-root.cg-rdg .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-rdg .cg-hero h1 { font-weight: 705; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-rdg .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-rdg .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rdg .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-rdg .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-rdg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rdg .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-rdg .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-rdg .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Reading (E06000038). Nomis Census 2021 TS007A: total 174,224; 20 to 24 14,690 (8.4%, England 6.0%); 25 to 29 14,572 (8.4%, 6.6%); 30 to 34 15,640 (9.0%, 7.0%); 5 to 9 10,486 (6.0%, 5.9%); 65 to 69 5,844 (3.4%, 4.9%); 85+ 2,895 (1.7%, 2.4%). ONS 2021 BUAs: Reading 203,795 (crosses three councils), Caversham 33,040. Reading Museum, The History of Britain\'s Bayeux Tapestry: original "over 70 metres long"; "the idea of Elizabeth Wardle"; "Leek Embroidery Society"; "visiting Bayeux in 1885"; "1872-74 hand-coloured photographs ... South Kensington Museum"; "the thirty-five women who worked on the reproduction. It was completed on Whitsuntide 1886"; pants copied "from the set of photographs that had been \'cleaned-up\'"; "In 1895 ... Town Hall at Reading"; Alderman Arthur Hill bought it and presented it to Reading.',
    localProject: 'Simulation, 1,000 invented details, seed 1886, 5,000 trials: photo alteration 0.5% (5.02 avg), stitch slips 1% ; replica vs photos 9.99, replica vs original 14.92. Copy chain at 99%: 1 99.0, 5 95.1, 10 90.4, 30 74.0, 69 50.0. Lesson family: copy-chain error accumulation and choosing the reference.',
    requiredMentions: [
      'Caversham',
      'Elizabeth Wardle',
      'Leek Embroidery Society',
      'Arthur Hill',
      'Bayeux Tapestry',
      'Reading Museum',
      'Whitsuntide',
      'thirty-five',
      '174,224'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Reading and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Reading Museum, The History of Britain\'s Bayeux Tapestry.', url: 'https://www.readingmuseum.org.uk/collections/britains-bayeux-tapestry/history-britains-bayeux-tapestry' },
      { claim: 'Reading Museum, Britain\'s Bayeux Tapestry.', url: 'https://www.readingmuseum.org.uk/bayeux-tapestry' }
    ],
    rejectedClaims: [
      'The actual number of differences between the replica and the original: not known; all counts are simulated.',
      'Huntley and Palmers and Reading Abbey facts: considered, not used.',
      'Named schools, admissions and term dates: none; the 11+ page is separate.',
      'Distances and travel times: not claimed.',
      'Opening times and visiting details: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
