'use strict';
// Rochdale (cg- town page, UK cluster Phase 8, towns band A, row 348). Keyword slug per the owner's 2026-09-27
// instruction. Spine: how hard is a canal to climb? Anchor (read raw 27 September 2026): Project Gutenberg ebook 47435,
// Edwin A. Pratt, "British Canals: Is their resuscitation practicable?": "between Manchester and Sowerby Bridge, on the
// Rochdale Canal, there are ninety-two locks in 32 miles, to enable the boats to pass over an elevation 600 feet above sea
// level"; "Between Huddersfield and Ashton, on the Huddersfield Narrow Canal, there are seventy-four locks in 20 miles";
// "In the 16 miles between Worcester and Tardebigge ... there are fifty-eight locks"; Tardebigge "a 'flight' of thirty
// locks" over "about 250 feet in 3 miles or so"; Devizes "twenty-nine locks in a distance of 2-1/2 miles" (caption: "A
// difference in level of 239 feet"); Grand Junction "ninety in 100 miles"; Birmingham Canal "forty-three in 17 miles";
// Shropshire Union "forty-six in 66 miles"; Trent and Mersey "fifty-nine locks in 67 miles"; Kennet and Avon Reading to
// Hanham "one hundred and six locks in 86 miles"; Warwick and Birmingham "22-1/2 miles ... thirty-four locks"; "an average
// of one lock for every 1-1/4 mile of navigation"; Hamburg to Berlin "in 230 miles of waterway there are only three
// locks"; Bingley "five 'staircase' locks give a total lift of 59 feet 2 inches".
// Our run (27 September 2026, scratchpad roc/locks.py): a digit-only pattern "N locks in N miles" finds 0 matches (every
// lock count is in words); a words-to-number parser with the strict pattern "X locks in Y miles" finds 15, and misses the
// other phrasings above (for example "ninety in 100 miles", "thirty-four locks" after the miles). Locks per mile: Devizes
// 11.6; Tardebigge flight about 10; Huddersfield Narrow 3.70; Worcester to Tardebigge 3.63; Rochdale 2.88 (92/32);
// Birmingham to Aldersley 2.53; Warwick and Birmingham 1.51; Kennet and Avon Reading to Hanham 1.23; Grand Junction 0.90;
// Trent and Mersey 0.88; Pratt's British average 0.8 (1 / 1.25, not 1.25); Shropshire Union 0.70; Hamburg to Berlin 0.013.
// Lift per lock: Devizes 239/29 = 8.2 ft; Tardebigge about 250/30 = 8.3 ft; Bingley 59 ft 2 in / 5 = 11 ft 10 in. The
// Rochdale 600 feet is a summit height above sea level, not the climb, so 600/92 is not a lift per lock (not computed).
// Lesson family: number words to integers, mixed-number parsing (2-1/2), pattern recall, inverse rate, rate normalisation
// (locks per mile), flight vs whole-canal granularity; screened (number words, words to number, mixed number, locks per
// mile, staircase, Tardebigge, Pratt, Rochdale Canal: 0 hits; regex/fraction/inverse exist elsewhere in other families).
// Place facts: Nomis Census 2021 TS007A, Rochdale E08000005: total 223,773; 0 to 4 14,639 (6.5%; England 5.4%); 5 to 9
// 15,475 (6.9%; 5.9%); 10 to 14 15,728 (7.0%; 6.0%); 15 to 19 13,457 (6.0%; 5.7%); 80 to 84 4,591 (2.1%; 2.5%); 85 and over
// 4,105 (1.8%; 2.4%). ONS 2021 BUAs wholly or almost wholly inside: Rochdale 111,255; Middleton 46,630; Heywood 29,725;
// Littleborough 12,160; Milnrow 9,235 (Bury and Royton BUAs only touch the borough; not mentioned).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ROCHDALE', label: 'Rochdale', blurb: 'Online coding and Python classes for Rochdale, with a project that reads a 1906 canal survey and ranks waterways by locks per mile.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-rochdale',
  code: 'roc',
  accent: '#29555C',
  accentRationale: 'Rochdale: a canal-water teal (6.64:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Rochdale',
    eyebrow: 'Rochdale, Greater Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Rochdale, England',
  title: 'Online Coding and Python Classes in Rochdale | AI for 6 to 67',
  description: 'Live online coding, Python and AI lessons for Rochdale, Middleton, Heywood and Littleborough learners aged 6 to 67, one-to-one or in small groups. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Rochdale, and a project that turns a canal survey written in words into a table of locks per mile.',
  twitterDescription: 'Rochdale online coding, Python and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Rochdale',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Rochdale, taught live at the right level.'
  },

  h1: 'Online coding and Python classes in Rochdale',
  capsuleQ: 'Which are the best online coding and Python classes in Rochdale?',
  capsule: 'Rochdale borough counted 223,773 people in the 2021 census. The ONS gives 111,255 for the Rochdale built-up area, 46,630 for Middleton and 29,725 for Heywood, with Littleborough and Milnrow smaller. Children under 15 make up a clearly larger share than across England, and people over 75 a smaller one. Learners from 6 to 67 anywhere in the borough can take coding, Python, AI and maths live online with our tutors in India, either alone or in a class of five to ten at one level. The free first lesson settles which course fits. Rochdale\'s project starts with the canal that shares the town\'s name. After the trial, a group place costs USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'In 1906 the writer Edwin A. Pratt asked whether Britain\'s canals could be brought back to life, and his answer rested on locks. "Between Manchester and Sowerby Bridge, on the Rochdale Canal," he wrote, "there are ninety-two locks in 32 miles." He gives similar figures for a dozen other waterways and compares them with a stretch in Germany that has only three locks in 230 miles. A Python learner can turn his prose into a ranked table of locks per mile. The catch is that Pratt, like many writers of his day, spells almost every count out in words, so the first program written finds nothing at all.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a Rochdale learner?',

  picks: {
    eyebrow: 'Rochdale course picks',
    h2: 'Good first courses for Rochdale',
    intro: 'Each course below begins with a free live lesson, and no card is needed to book.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Scratch games about boats, water levels and gates.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Beginner Python that reads sentences and pulls out numbers.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete teen Python, including the canal survey project.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults and students', note: 'Python and AI for automating text and data tasks at work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Rochdale borough',
      h2: 'A younger borough than England',
      intro: 'Census 2021 age bands from Nomis for Rochdale, shown with the matching England share.',
      body: [
        { kind: 'table', caption: 'Rochdale and England, selected age bands (TS007A, 2021)', head: ['Ages', 'Rochdale count', 'Rochdale %', 'England %'], rows: [
          ['0 to 4', '14,639', '6.5%', '5.4%'],
          ['5 to 9', '15,475', '6.9%', '5.9%'],
          ['10 to 14', '15,728', '7.0%', '6.0%'],
          ['15 to 19', '13,457', '6.0%', '5.7%'],
          ['80 to 84', '4,591', '2.1%', '2.5%'],
          ['85 and over', '4,105', '1.8%', '2.4%']
        ] },
        { kind: 'p', text: 'Each of the three youngest bands is about a percentage point above England, while the oldest bands sit below it. Beyond the main town, the ONS lists Middleton, Heywood, Littleborough (12,160) and Milnrow (9,235) as built-up areas inside the borough. Schools follow the national curriculum for England, and we fit lessons around the local term dates you send.' },
        { kind: 'callout', h3: 'County and region', p: 'The county has its own <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> page, and the region is covered by <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Rochdale project',
      h2: 'Ranking canals by locks per mile',
      intro: 'Find every lock count in an old book, turn words into numbers, then compare fairly.',
      body: [
        { kind: 'p', text: 'The learner downloads Pratt\'s book from Project Gutenberg and writes a pattern for sentences like "92 locks in 32 miles". It finds zero matches. Reading the text shows why: Pratt writes "ninety-two", "seventy-four" and even "two hundred and eighty-two". So the next job is a small function that turns number words into integers, handling hyphens, "hundred" and the "and" in the middle. With that in place, the pattern "X locks in Y miles" finds 15 figures. It still misses others, such as "ninety in 100 miles" on the Grand Junction Canal, where the word locks is left out, so the learner lists what the program missed and decides whether to widen the pattern or add them by hand.' },
        { kind: 'table', caption: 'Locks per mile from Pratt\'s figures, our Python run, 27 September 2026', head: ['Stretch (Pratt)', 'Locks', 'Miles', 'Locks per mile'], rows: [
          ['Huddersfield Narrow, Huddersfield to Ashton', '74', '20', '3.70'],
          ['Worcester and Birmingham, Worcester to Tardebigge', '58', '16', '3.63'],
          ['Rochdale Canal, Manchester to Sowerby Bridge', '92', '32', '2.88'],
          ['Birmingham Canal, Birmingham to Aldersley', '43', '17', '2.53'],
          ['Grand Junction, Paddington to Braunston', '90', '100', '0.90'],
          ['Pratt\'s average for Britain', '1 per 1¼ miles', '', '0.80'],
          ['Hamburg to Berlin', '3', '230', '0.013']
        ] },
        { kind: 'p', text: 'Two more parsing traps appear. Pratt writes two and a half as "2-1/2", which a careless parser reads as 2 minus a half, or as a range. And his national figure is written the other way up, one lock for every 1-1/4 miles, so the rate is 1 divided by 1.25, which is 0.8 locks per mile, not 1.25. With everything on one scale, the Rochdale Canal has almost 2.9 locks for every mile, well over three times the British average he quotes, and more than 200 times the German stretch.' },
        { kind: 'p', text: 'The last lesson is about comparing like with like. Pratt also describes short flights: 29 locks in 2-1/2 miles at Devizes and 30 at Tardebigge in "3 miles or so". Their rates, above 10 locks per mile, would top the table, but a flight is the steepest part of a canal, not a whole canal, and the Tardebigge flight sits inside the Worcester stretch already listed. So flights go in a separate table. Pratt also says the Rochdale Canal crosses "an elevation 600 feet above sea level". Dividing 600 by 92 is tempting, but it is a height, not a climb, and boats go up one side and down the other, so the learner declines to compute a lift per lock for Rochdale.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Write numbers as words and back again, then share out locks along a drawn canal.' },
          { h3: 'Ages 11 to 15', p: 'Build the words-to-number function in Python and compute locks per mile.' },
          { h3: 'Ages 15 and up', p: 'Measure what the pattern missed, separate flights, and chart the ranking.' }
        ] },
        { kind: 'callout', h3: 'Pratt\'s figures, our arithmetic', p: 'Every lock count and distance is quoted from Edwin A. Pratt\'s British Canals as published on Project Gutenberg. The parsing, the rates and the rankings are ours.' }
      ]
    },
    {
      id: 'flights', tint: 'deep', eyebrow: 'Flights of locks',
      h2: 'How much does one lock lift?',
      intro: 'Pratt gives both height and lock count for three places, so the lift per lock can be worked out there.',
      body: [
        { kind: 'table', caption: 'Lift per lock where Pratt gives both figures (our division)', head: ['Place (Pratt)', 'Height overcome', 'Locks', 'Average lift per lock'], rows: [
          ['Devizes, Kennet and Avon', '239 feet in 2-1/2 miles', '29', 'About 8.2 feet'],
          ['Tardebigge, Worcester and Birmingham', '"about 250 feet"', '30', 'About 8.3 feet'],
          ['Bingley staircase, Leeds and Liverpool', '59 feet 2 inches', '5', '11 feet 10 inches'],
          ['Rochdale Canal', 'Summit 600 feet above sea level', '92', 'Not computable from this']
        ] },
        { kind: 'p', text: 'Mixing feet and inches is one more small test: 59 feet 2 inches is 710 inches, and 710 divided by 5 is 142 inches, or 11 feet 10 inches. The Rochdale row stays blank on purpose, and explaining why is part of the project. Turning prose into data like this is everyday work for data teams and for the AI systems that read documents, and the same failures appear there: numbers written as words, fractions in odd formats, rates written upside down, and figures that sound alike but measure different things.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Project Gutenberg and the census office. The book and the figures are theirs; the parsing, the calculations and any errors in them belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From number words to data projects',
    intro: 'The school year is a starting guess; the free lesson makes the final call.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Games and counting', p: 'Scratch projects with counting, patterns and simple maps.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Python and text', p: 'Strings, numbers from words and first calculations.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Parsing and AI', p: 'Text parsing, rates and AI projects beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Automation', p: 'Adult Python for automating documents and data.', courses: ['python-ai-automation-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and old books',
    h2: 'Would an AI read "ninety-two" correctly?',
    intro: 'Often they do; checking each figure is still the job.',
    p1: 'Ask a chatbot for the locks per mile on Pratt\'s canals and it will probably produce a neat table. It may also quietly flip the national average to 1.25, or divide the Rochdale summit height by the lock count.',
    p2: 'A Rochdale learner who has written the parser knows exactly where those slips hide and checks each figure against the sentence it came from.',
    closer: 'Checking a machine\'s reading of a document is a good reason for Rochdale teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Middleton to Littleborough, live online',
    intro: 'Lessons reach every corner of the borough through a laptop or desktop and a steady connection.',
    cells: [
      { h3: 'The learner types', p: 'Every line is written by the student, while the tutor watches over screen share and nudges with questions.' },
      { h3: 'Level first, year second', p: 'A Year 5 or a Year 11 starts wherever the free lesson places them, with the exam board in view.' },
      { h3: 'Free opening lesson', p: 'It costs nothing and finishes with a straightforward course recommendation.' },
      { h3: 'Classes by stage', p: 'Five to ten UK learners at the same level in each group.' },
      { h3: 'Two lessons weekly', p: 'Paused for school holidays.' },
      { h3: 'Same UK hour all year', p: 'Tutors adjust when British clocks change.' }
    ],
    spec: { title: 'Why the classes meet online', p: 'Five Rochdale learners at the same stage, all free at one hour, are unlikely to live near each other. Online, each can join the right class.' }
  },

  fees: {
    h2: 'Rochdale fees',
    intro: 'Rochdale families pay the rate we charge everywhere outside India.',
    first: 'A whole lesson at no charge, then a course recommendation.',
    group: 'Roughly eight live group lessons each month.',
    private: 'Roughly eight live private lessons each month.',
    closer: 'We bill in US dollars, not sterling. No payment is taken until the trial has agreed the course and a regular weekly slot; holidays, missed lessons and switching formats are all set out on the pricing page.'
  },

  reviewsH2: 'Greater Manchester and UK families on Google',

  book: {
    h2: 'Book a free Rochdale lesson',
    intro: 'Send the learner\'s age or school year and one thing they like. A first lesson could be a Scratch boat game, a first Python program, a short AI experiment, or turning Pratt\'s number words into digits.',
    success: 'Thank you. Your Rochdale request is with us.'
  },

  faq: {
    h2: 'Rochdale questions',
    intro: 'The canal project, local figures and practical details.',
    items: [
      { q: 'What is the population of Rochdale?', a: 'The 2021 census counted 223,773 in Rochdale borough; the ONS gives 111,255 for the Rochdale built-up area.' },
      { q: 'Can Rochdale learners take coding and Python classes online?', a: 'Yes. Anyone aged 6 to 67 in the borough can join our live online coding, Python, AI and maths lessons.' },
      { q: 'What is the canal project?', a: 'Learners extract lock counts and distances from Edwin A. Pratt\'s British Canals and rank the waterways by locks per mile.' },
      { q: 'How many locks does Pratt give for the Rochdale Canal?', a: 'Ninety-two locks in 32 miles between Manchester and Sowerby Bridge, almost 2.9 per mile.' },
      { q: 'Why did the first program find nothing?', a: 'Pratt writes lock counts in words, so a pattern looking for digits never matched.' },
      { q: 'Are classes in person?', a: 'No. All lessons are live online.' },
      { q: 'Do you support GCSE and A level students?', a: 'Yes, in maths and computing, for real understanding; no grades are promised.' },
      { q: 'What age range do you teach?', a: 'Six to 67.' },
      { q: 'How much are lessons?', a: 'The trial is free. After it, a place in a group is USD 100 a month and one-to-one tuition is USD 150 a month.' },
      { q: 'Are there breaks for school holidays?', a: 'Yes; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Nearby pages',
    html: 'Across the county, <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bolton">Bolton</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stockport">Stockport</a> each have a page, and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-huddersfield">Huddersfield</a> sits at the other end of the Huddersfield Narrow Canal. See <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> for the county, <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a> for the region, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for everything.',
    waLabel: 'Send us a WhatsApp message'
  },

  footerHeading: 'Rochdale and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-roc .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.4vw, 2.8rem); }
.cg-root.cg-roc .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-roc .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-roc .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-roc .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.018em; }
.cg-root.cg-roc .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-roc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-roc .cg-table th { letter-spacing: 0.06em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-roc .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-roc .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Rochdale (E08000005). Nomis Census 2021 TS007A: total 223,773; 0 to 4 14,639 (6.5%, England 5.4%); 5 to 9 15,475 (6.9%, 5.9%); 10 to 14 15,728 (7.0%, 6.0%); 15 to 19 13,457 (6.0%, 5.7%); 80 to 84 4,591 (2.1%, 2.5%); 85 and over 4,105 (1.8%, 2.4%). ONS 2021 BUAs: Rochdale 111,255; Middleton 46,630; Heywood 29,725; Littleborough 12,160; Milnrow 9,235. Project Gutenberg 47435, Edwin A. Pratt, British Canals: "between Manchester and Sowerby Bridge, on the Rochdale Canal, there are ninety-two locks in 32 miles, to enable the boats to pass over an elevation 600 feet above sea level"; Huddersfield Narrow "seventy-four locks in 20 miles"; Worcester to Tardebigge 16 miles, "fifty-eight locks"; Grand Junction "ninety in 100 miles"; Birmingham to Aldersley "forty-three in 17 miles"; "one lock for every 1-1/4 mile"; Hamburg to Berlin "230 miles ... only three locks"; Devizes "twenty-nine locks in a distance of 2-1/2 miles", "239 feet"; Tardebigge "about 250 feet", "thirty locks"; Bingley "59 feet 2 inches", five locks.',
    localProject: 'Digit-only pattern: 0 matches; words-to-number + strict pattern: 15 matches. Locks per mile: Huddersfield Narrow 3.70, Worcester to Tardebigge 3.63, Rochdale 2.88, Birmingham to Aldersley 2.53, Grand Junction 0.90, British average 0.80 (inverse of 1.25), Hamburg to Berlin 0.013; flights Devizes 11.6, Tardebigge about 10. Lift per lock: Devizes 8.2 ft, Tardebigge 8.3 ft, Bingley 11 ft 10 in; Rochdale not computable (summit height). Lesson family: number words to integers, mixed numbers, pattern recall, inverse rate, locks per mile, flight vs canal granularity.',
    requiredMentions: [
      '223,773',
      '111,255',
      'Middleton',
      'Heywood',
      'Littleborough',
      'Sowerby Bridge',
      'Edwin A. Pratt',
      'locks per mile',
      'Huddersfield Narrow',
      'Tardebigge'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Rochdale and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Edwin A. Pratt, British Canals: Is their resuscitation practicable? (ebook 47435).', url: 'https://www.gutenberg.org/ebooks/47435' }
    ],
    rejectedClaims: [
      'The canal route through the town, today\'s lock count or restoration history: not read from a source; not claimed.',
      'The Rochdale Pioneers and co-operative history: no readable source found (Holyoake\'s history is not on Project Gutenberg); not claimed.',
      'Canal share prices of 1824 in Pratt: money figures, not used.',
      'Travel-time estimates per lock: extrapolation family already used elsewhere; not included.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
