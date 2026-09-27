'use strict';
// Basildon (cg- town page, UK cluster Phase 8, towns band A, row 344). Keyword slug per the owner's 2026-09-27
// instruction. Spine: why does quicksort sometimes crawl? Anchor data (read 27 September 2026): Nomis Census 2021 TS001
// usual residents (NM_2021_1) for the 584 output areas of Basildon (E07000066, TYPE150, household plus communal residents),
// cached by scratchpad p7/county.py: smallest 105, largest 712, median 314.5, 241 distinct values, most common value 302 (13
// output areas). The 584 counts add to 187,542, while the published borough total is 187,571; the page quotes the published
// total and never presents the sum as a total.
// Our run (scratchpad bsn/qs.py, 27 September 2026): three-way quicksort (less / equal / greater) counting comparisons with
// the pivot; results verified against Python's sorted(). File order: first-element pivot 4,520 comparisons, depth 15;
// median of three 4,154, depth 13; random pivot mean 4,822 over 20 seeds. Already sorted: first-element pivot 68,341, depth
// 240; median of three 3,773, depth 9; random mean 4,914 (range 4,496 to 5,359). Reverse sorted: first 72,985; median of three
// 3,818. Reference sizes: n log2 n about 5,367; n squared over 2 = 170,528 (not reached because equal values are grouped).
// Lesson family: quicksort pivot choice, worst case on sorted input, recursion depth, duplicates; screened (quicksort,
// pivot, median of three: 0 hits; Armagh's merge sort counted inversions, a different algorithm and question).
// Place facts: Nomis Census 2021 TS007A, Basildon E07000066: total 187,571; under 5 12,196 (6.5%; England 5.4%); 5 to 9
// 12,480 (6.7%; 5.9%); 20 to 24 9,639 (5.1%; 6.0%); 30 to 34 13,991 (7.5%; 7.0%); 65 to 69 8,365 (4.5%; 4.9%); 75 to 79 6,154
// (3.3%; 3.6%). ONS 2021 BUAs wholly inside: Basildon 115,955; Billericay 34,075; Wickford 27,535 (Runwell crosses the
// boundary; not quoted).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BASILDON', label: 'Basildon', blurb: 'Coding and AI classes for Basildon, with a project that sorts the borough\'s 584 census areas and shows when quicksort slows to a crawl.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-basildon',
  code: 'bsn',
  accent: '#5F127A',
  accentRationale: 'Basildon: a new-town violet (9.13:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Basildon',
    eyebrow: 'Basildon, Essex, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Essex', href: '/coding-classes-in-essex' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Basildon, England',
  title: 'Coding and AI Classes in Basildon | Online Python, Ages 6 to 67',
  description: 'Online coding, AI and Python classes for Basildon, Billericay and Wickford learners aged 6 to 67, taught live one-to-one or in small groups. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Basildon, and a Python project that sorts 584 census areas with quicksort and finds its slow worst case.',
  twitterDescription: 'Basildon coding, AI and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Basildon',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Basildon, Billericay and Wickford, taught live at the right level.'
  },

  h1: 'Coding and AI classes in Basildon',
  capsuleQ: 'Where can Basildon learners find the best coding and AI classes?',
  capsule: 'The 2021 census recorded 187,571 people in Basildon borough; the ONS places 115,955 in the Basildon built-up area, 34,075 in Billericay and 27,535 in Wickford. Young children and adults in their early thirties are above the England share, while people in their early twenties and early seventies are below it. Learners aged 6 to 67 can study coding, AI, Python and maths with us live over video, taught by tutors in India either alone or among five to ten classmates who have reached the same step. One free session is enough for us to recommend a starting course. The Basildon project sorts the borough\'s census areas with one of computing\'s most famous algorithms. Afterwards, group lessons are USD 100 a month and private lessons USD 150 a month.',
  lead: 'For the 2021 census the ONS split Basildon borough into 584 output areas, the smallest areas for which it publishes counts. The smallest had 105 residents, the largest 712. Sorting them from smallest to largest sounds like a job any computer does instantly, and usually it is. Quicksort, the algorithm behind many real sorting routines, picks one value as a pivot, splits everything else into smaller and larger, and repeats. It is usually very fast. But feed it a list that is already in order, with the wrong pivot rule, and it slows to a crawl. A Basildon learner can count exactly how much slower, using the town\'s own census numbers, and then fix it with one small change.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Basildon.',

  picks: {
    eyebrow: 'Basildon course picks',
    h2: 'Courses Basildon learners begin with',
    intro: 'Pick a course by age and interest. Each one starts with a free live lesson, and booking asks for no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with sorting games and lining things up.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python programs with lists, plus simple AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the quicksort project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from scratch, up to algorithms and data structures.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Basildon borough',
      h2: 'Young families in a planned town',
      intro: 'Basildon in the 2021 census age table on Nomis, six bands beside the England figures.',
      body: [
        { kind: 'table', caption: 'Selected ages for Basildon against England (2021 census, TS007A)', head: ['Age band', 'Basildon residents', 'Basildon %', 'England %'], rows: [
          ['Under 5', '12,196', '6.5%', '5.4%'],
          ['5 to 9', '12,480', '6.7%', '5.9%'],
          ['20 to 24', '9,639', '5.1%', '6.0%'],
          ['30 to 34', '13,991', '7.5%', '7.0%'],
          ['65 to 69', '8,365', '4.5%', '4.9%'],
          ['75 to 79', '6,154', '3.3%', '3.6%']
        ] },
        { kind: 'p', text: 'Children under ten stand well above the national share, as do adults in their early thirties. The ONS lists three built-up areas wholly inside the borough: Basildon, Billericay and Wickford. Essex schools teach England\'s national curriculum, and our lessons pause for the holiday weeks you give us.' },
        { kind: 'callout', h3: 'County and region', p: 'See the <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a> page for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> for the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Basildon project',
      h2: 'Quicksort on 584 census areas',
      intro: 'Count the comparisons and watch the pivot rule make or break the algorithm.',
      body: [
        { kind: 'p', text: 'The learner downloads the resident count for each of Basildon\'s 584 output areas from Nomis and writes quicksort in Python, adding a counter every time a value is compared with the pivot. In the order the file arrives, taking the first value as the pivot, the sort finishes after 4,520 comparisons and never recurses more than 15 levels deep. That is close to what theory promises for a good case, about n times log n, here roughly 5,367. The program checks its answer against Python\'s own sorted list every time.' },
        { kind: 'table', caption: 'Our quicksort comparison counts on Basildon\'s 584 output areas, 27 September 2026', head: ['Starting order', 'Pivot rule', 'Comparisons', 'Deepest recursion'], rows: [
          ['File order', 'First value', '4,520', '15'],
          ['File order', 'Median of three', '4,154', '13'],
          ['Already sorted', 'First value', '68,341', '240'],
          ['Already sorted', 'Median of three', '3,773', '9'],
          ['Already sorted', 'Random, 20 runs', '4,914 on average', 'Varies'],
          ['Reverse sorted', 'First value', '72,985', '240']
        ] },
        { kind: 'p', text: 'Now the learner sorts the list again, after it is already sorted, still using the first value as pivot. Every split is lopsided: the pivot is always the smallest value left, so almost everything lands on one side. Comparisons jump from 4,520 to 68,341, fifteen times more, and the recursion reaches 240 levels. With larger lists that depth can crash a program. The fix is tiny: take the median of three values, the first, middle and last. On the same sorted list that takes 3,773 comparisons and 9 levels.' },
        { kind: 'p', text: 'The learner then notices something the textbooks mention in passing. The worst case should be about n squared over two, 170,528 comparisons, yet the program only reached 68,341. The reason is duplicates: only 241 of the 584 counts are different, the value 302 alone appears 13 times, and the program groups values equal to the pivot together so they are never sorted twice. The learner also records that the 584 area counts add to 187,542, slightly different from the published borough total of 187,571, and so always quotes the published total.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort a shuffled pack of numbered cards by picking a pivot card, then try a pack already in order.' },
          { h3: 'Ages 11 to 15', p: 'Write quicksort in Python with a comparison counter and run it on the census list.' },
          { h3: 'Ages 15 and up', p: 'Compare pivot rules, measure recursion depth, and explain the effect of duplicates.' }
        ] },
        { kind: 'callout', h3: 'Census counts, our sorting', p: 'The output-area counts and borough figures come from the 2021 census on Nomis. The sorting runs, counts and depths are ours.' }
      ]
    },
    {
      id: 'areas', tint: 'deep', eyebrow: 'Why output areas',
      h2: 'The census in 584 small pieces',
      intro: 'What the Basildon output-area file looks like.',
      body: [
        { kind: 'table', caption: 'Basildon\'s 2021 output areas, Nomis TS001 (our summary)', head: ['Figure', 'Value'], rows: [
          ['Output areas in the borough', '584'],
          ['Smallest resident count', '105'],
          ['Largest resident count', '712'],
          ['Median count', '314.5'],
          ['Different values among the 584', '241'],
          ['Published borough total', '187,571']
        ] },
        { kind: 'p', text: 'Sorting is one of the most common things computers do, inside spreadsheets, search results, leaderboards and databases, and quicksort ideas sit inside many real sorting routines. Library designers protect against the sorted-input trap exactly as the learner did, with smarter pivots, random choices or a switch to another method when recursion gets too deep. A Basildon learner who has watched 4,520 comparisons become 68,341 understands why those protections exist.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the ONS or Nomis. The census data is theirs; the sorting code, and any bug in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From card sorting to algorithm design',
    intro: 'Treat the years loosely; the trial places each learner.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Ordering in blocks', p: 'Block coding with sorting, sequences and simple rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python lists', p: 'Lists, loops and first sorting methods in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Algorithms and AI', p: 'Recursion, efficiency and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Serious programming', p: 'Adult Python up to algorithms and data work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and algorithms',
    h2: 'Would an AI\'s quicksort survive sorted data?',
    intro: 'Correct code can still be dangerously slow.',
    p1: 'Ask a chatbot for a quicksort and it will often hand back the textbook version with the first value as pivot. It sorts correctly, and on already sorted data it does fifteen times the work and can run out of recursion.',
    p2: 'A Basildon learner who has counted the comparisons knows to test code on sorted, reversed and repeated values, not just random ones.',
    closer: 'Testing code on its worst case, not just its usual one, is a sound reason for Basildon teenagers to keep learning to program in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Billericay to Wickford, live online',
    intro: 'Every part of the borough joins by video.',
    cells: [
      { h3: 'The learner codes', p: 'Each program is typed by the student, while the tutor watches the shared screen and asks questions.' },
      { h3: 'Right starting point', p: 'From Year 3 to Year 13, school year and the trial decide where a learner starts, with the exam board in mind.' },
      { h3: 'First session free', p: 'We charge nothing for a full opening lesson and finish it by naming the course we think fits.' },
      { h3: 'Groups that fit', p: 'Each class brings together five to ten learners from around the UK who are at the same stage.' },
      { h3: 'Two a week in term', p: 'Holidays stay free.' },
      { h3: 'Constant time slot', p: 'Our tutors adjust for UK clock changes, not you.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five Basildon learners at one stage, free at the same time, seldom live nearby. Online classes find each the right group.' }
  },

  fees: {
    h2: 'Basildon fees',
    intro: 'Basildon families pay the one rate we use in every country outside India.',
    first: 'A free full lesson, ending with a course suggestion.',
    group: 'About eight live small-class lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Fees are set in US dollars rather than sterling. Invoices start only after the trial has fixed the course and a regular weekday slot. What happens with holidays, missed sessions and moving between class and private tuition is set out on the pricing page.'
  },

  reviewsH2: 'What Essex and UK families wrote on Google',

  book: {
    h2: 'Book a free Basildon lesson',
    intro: 'An age or school year and a favourite subject are enough to start. A trial could be a Scratch sorting game, a first Python program, an AI mini-project, or the census quicksort.',
    success: 'Thank you. Your Basildon request is with us.'
  },

  faq: {
    h2: 'Basildon questions',
    intro: 'Sorting, census figures and lesson arrangements.',
    items: [
      { q: 'What is the population of Basildon?', a: 'The 2021 census counted 187,571 in Basildon borough; the ONS gives 115,955 for the Basildon built-up area.' },
      { q: 'Is online coding and AI tuition open to Basildon residents?', a: 'They can. Whether in Billericay, Wickford or the town itself, anyone from 6 to 67 can take our live coding, AI, Python and maths lessons.' },
      { q: 'What is the quicksort project?', a: 'Learners sort the resident counts of Basildon\'s 584 census output areas with quicksort in Python and count how pivot choice changes the work.' },
      { q: 'What is an output area?', a: 'The smallest area for which the census publishes counts; Basildon has 584 of them.' },
      { q: 'Why is quicksort slow on sorted data?', a: 'With the first value as pivot, every split is lopsided; on Basildon\'s data the comparisons rise from 4,520 to 68,341.' },
      { q: 'Are lessons held in person?', a: 'No, all lessons are live online.' },
      { q: 'Is there support for exam students?', a: 'GCSE and A level maths and computing are both covered, taught for understanding with no grade guarantee.' },
      { q: 'Is there an age range?', a: 'We teach anyone from six to sixty-seven.' },
      { q: 'How much are lessons?', a: 'Nothing for the trial; after that a class place is USD 100 per month and a personal tutor USD 150 per month.' },
      { q: 'What happens during school breaks?', a: 'We pause for them once we know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Basildon',
    html: 'County choices are on our <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a> page; <a class="cg-inline-link" href="/ai-and-programming-classes-in-stevenage">Stevenage</a> answers census questions with prefix sums, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> covers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Basildon and Essex',
  footerPlaces: [
    { href: '/coding-classes-in-essex', label: 'Essex' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bsn .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.2vw, 2.7rem); }
.cg-root.cg-bsn .cg-hero h1 { font-weight: 790; letter-spacing: -0.029em; line-height: 1.03; }
.cg-root.cg-bsn .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bsn .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bsn .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.021em; }
.cg-root.cg-bsn .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-bsn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bsn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bsn .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-bsn .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Basildon (E07000066). Nomis Census 2021 TS007A: total 187,571; under 5 12,196 (6.5%, England 5.4%); 5 to 9 12,480 (6.7%, 5.9%); 20 to 24 9,639 (5.1%, 6.0%); 30 to 34 13,991 (7.5%, 7.0%); 65 to 69 8,365 (4.5%, 4.9%); 75 to 79 6,154 (3.3%, 3.6%). ONS 2021 BUAs: Basildon 115,955; Billericay 34,075; Wickford 27,535. Nomis Census 2021 TS001 by output area (NM_2021_1, TYPE150): 584 output areas, 105 to 712 residents, median 314.5, 241 distinct values; the 584 add to 187,542 (published total 187,571 quoted instead).',
    localProject: 'Quicksort (three-way partition) on 584 output-area counts: file order first pivot 4,520 comparisons depth 15; median of three 4,154 depth 13; sorted first pivot 68,341 depth 240; sorted median of three 3,773 depth 9; sorted random mean 4,914; reverse first 72,985. n log2 n about 5,367; n squared over 2 = 170,528. Lesson family: quicksort pivots, worst case, recursion depth, duplicates.',
    requiredMentions: [
      '115,955',
      '187,571',
      'Billericay',
      'Wickford',
      'quicksort',
      'median of three',
      'output area',
      '68,341',
      'pivot'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Basildon and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'Nomis Census 2021 TS001 usual residents by output area, Basildon.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' }
    ],
    rejectedClaims: [
      'New town history and designation date: not read from a primary source; not claimed.',
      'Why the output-area counts do not add to the published total: not explained; the published total is quoted.',
      'Runwell built-up area: crosses the boundary, not quoted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
