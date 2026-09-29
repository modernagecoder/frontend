'use strict';
// Corby (cg- town page, UK cluster Phase 8, towns band A, row 403). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does Python sort a list, and when does a
// sort that never compares win? (Timsort's run detection / adaptive sorting against merge sort, and LSD radix sort).
// Data (read 29 September 2026): Ordnance Survey Code-Point Open (dataset version 2026.3.0, RM update 17 July 2026, OGL),
// file nn.csv: 1,567 postcodes in the NN17 (909) and NN18 (658) districts, all in North Northamptonshire (E06000061),
// every one 8 characters long ("NN17 1AA" form). The file is already in alphabetical order.
// Our run (scratchpad cby/srt.py, CPython 3.13): comparisons counted with a key wrapper. Python sorted() / plain top-down
// merge sort: already in order 1,566 / 8,073; reversed 1,566 / 8,683; 15 random pairs swapped 4,384 / 10,654; ordered by
// easting (west to east) 12,390 / 14,388; shuffled (seed 2026) 14,617 / 14,702. n log2 n = 16,632. LSD radix sort: one
// stable bucket pass per character, 7 varying characters (the space is constant), 7 x 1,567 = 10,969 placements in any
// order, no comparisons; output identical to sorted().
// Lesson family: adaptive sorting (natural runs, Timsort / Powersort merge policy) and non-comparison sorting (LSD radix
// sort, counting sort passes). Screened: "radix", "Timsort", "counting sort" 0 hits. Basildon = quicksort pivots, Armagh =
// merge sort inversion counting, Cambridge = heaps; Southampton used Code-Point Open for hash tables.
// Place facts: North Northamptonshire (E06000061) TS001 359,525. ONS 2021 BUAs (published): Corby 68,160; Kettering 63,150
// (not a mention here, registered by the Kettering page). postcodes.io outcodes NN17 and NN18: parishes include Corby,
// Weldon, Gretton, Stanion; places: Great Oakley (suburban area), Weldon, Stanion, Gretton, Cottingham, Rockingham
// (villages).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CORBY', label: 'Corby', blurb: 'Online coding and Python classes for Corby, with a sorting project on 1,567 real postcodes that shows how Python\'s own sort thinks.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-corby',
  code: 'cbn',
  accent: '#7A4377',
  accentRationale: 'Corby: a muted plum (5.84:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Corby',
    eyebrow: 'Corby, North Northamptonshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Northamptonshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Northamptonshire', href: '/coding-classes-in-northamptonshire' },
    { label: 'Kettering', href: '/vibe-coding-and-ai-agents-classes-in-kettering' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Corby, England',
  title: 'Online Coding and Python Classes in Corby | AI and Maths, 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Corby, Weldon, Great Oakley and Gretton learners aged 6 to 67, private or in groups. First lesson free.',
  ogDescription: 'Online coding and Python classes for Corby, with a project that sorts every NN17 and NN18 postcode to see how Python\'s built-in sort works.',
  twitterDescription: 'Corby online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Corby',
    description: 'Online coding, Python, algorithms, AI, vibe coding and maths for children, teenagers and adults in Corby and North Northamptonshire, taught live with reasoning first.'
  },

  h1: 'Online coding and Python classes in Corby',
  capsuleQ: 'Which are the best online coding and Python classes in Corby?',
  capsule: 'At the 2021 census the ONS counted 68,160 people in the Corby built-up area, within North Northamptonshire, a council area of 359,525. Great Oakley is recorded as a suburban area in the council area, and Weldon, Stanion and Gretton are villages inside the NN17 and NN18 postcode districts. Coding, Python, AI, vibe coding and maths are open to anyone there from age six to 67, taught live over video by tutors in India, one-to-one or in a small class of five to ten at a shared level. We teach how to reason before how to prompt, so learners can check what an AI assistant writes. Lesson one is free and ends with our course advice. The Corby project sorts all 1,567 postcodes in those two districts and counts every step Python takes. Group lessons then cost USD 100 per month and private lessons USD 150 per month.',
  lead: 'Sorting sounds solved: call sorted() and move on. But how many steps it takes depends on the data you hand it, and Python\'s built-in sort is cleverer than most people realise. It looks for stretches that are already in order, called runs, and merges them, so a list that is nearly sorted costs far less than a shuffled one. A completely different idea, radix sort, never compares two items at all; it deals them into buckets one character at a time. Corby\'s 1,567 postcodes, from the Ordnance Survey\'s open postcode file, make an ideal test, because every one has exactly the same shape.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Corby?',

  picks: {
    eyebrow: 'Corby course picks',
    h2: 'Corby courses in reasoning, Python and AI',
    intro: 'Pick by age and interest. The first lesson on each course is live and free, and no card is needed to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: putting things in order, spotting patterns and counting the steps a method takes.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games explained to an AI, then built and tested by the learner.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, among them the Corby postcode sort.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first steps to algorithms, data work and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Corby and North Northamptonshire',
      h2: 'Corby, Great Oakley, Weldon and the villages around',
      intro: 'The ONS built-up area count for Corby, and places recorded inside its two postcode districts.',
      body: [
        { kind: 'table', caption: 'Corby in the 2021 census, ONS figures', head: ['Area', 'Residents (2021)'], rows: [
          ['Corby built-up area', '68,160'],
          ['North Northamptonshire council area', '359,525']
        ] },
        { kind: 'p', text: 'The two figures come from different ONS tables and measure different areas, so neither is part of a sum here. Postcodes.io lists Great Oakley as a suburban area, and Weldon, Stanion, Gretton, Cottingham and Rockingham as villages in North Northamptonshire; the NN17 and NN18 districts include the parishes of Corby, Weldon, Gretton and Stanion. Northamptonshire schools follow England\'s national curriculum, so let us know the holiday dates and lessons will fall outside them.' },
        { kind: 'callout', h3: 'Northamptonshire, the East Midlands and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-northamptonshire">coding classes in Northamptonshire</a> or the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a> page for more. Why reasoning comes first is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Corby project',
      h2: 'Sorting 1,567 Corby postcodes: Timsort runs against radix sort buckets',
      intro: 'One list of real postcodes, five different starting orders, and a count of every comparison.',
      body: [
        { kind: 'p', text: 'The learner downloads Ordnance Survey Code-Point Open, the free national postcode file, and keeps the 1,567 postcodes in the NN17 and NN18 districts: 909 and 658 of them. Every postcode is eight characters, such as NN17 1AA. A small wrapper counts each time Python compares two postcodes. The same list is then sorted from five starting orders, by Python\'s built-in sort and by a plain merge sort that splits the list in half every time.' },
        { kind: 'table', caption: 'Comparisons needed to sort Corby\'s 1,567 postcodes, our Python count on OS Code-Point Open data', head: ['Starting order', 'Python sorted()', 'Plain merge sort'], rows: [
          ['Already alphabetical', '1,566', '8,073'],
          ['Reverse alphabetical', '1,566', '8,683'],
          ['Alphabetical, 15 random pairs swapped', '4,384', '10,654'],
          ['Ordered west to east on the map', '12,390', '14,388'],
          ['Shuffled at random', '14,617', '14,702']
        ] },
        { kind: 'p', text: 'On a list that is already in order, Python makes 1,566 comparisons, the minimum possible: it checks each neighbouring pair once, sees one long run and stops. A reversed list is spotted as a single descending run and flipped, so it costs the same. With only 15 pairs out of place, Python still needs fewer than half as many comparisons as merge sort. Once the order is random the advantage disappears and both need around 14,600 to 14,700, a little under the textbook n log2 n of about 16,600 for this list. Python\'s sort is called Timsort; since Python 3.11 it merges its runs using a refined rule known as Powersort.' },
        { kind: 'p', text: 'Radix sort takes another route. It sorts by the last character first, dealing every postcode into a bucket for that character while keeping their order within each bucket, then repeats for each character moving left. Seven characters vary, so seven passes of 1,567 placements, 10,969 in all, give exactly the same result as sorted(), whatever the starting order, without a single comparison. The catch is that it needs keys of a fixed shape, which postcodes happen to have.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort a pile of address cards by dealing them into piles, last letter first, and watch order appear.' },
          { h3: 'Ages 11 to 15', p: 'Sort Corby\'s postcodes in Python and count how many comparisons it made on sorted and shuffled lists.' },
          { h3: 'Ages 15 and up', p: 'Write radix sort and merge sort from scratch, count steps and explain when each wins.' }
        ] },
        { kind: 'callout', h3: 'OS postcodes, our counts', p: 'Postcodes are from Ordnance Survey Code-Point Open, contains OS data, Crown copyright and database right, under the Open Government Licence. The sorting code and every count in the tables are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Algorithms and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An AI will happily write a sort; knowing which one fits your data is still your job.',
      body: [
        { kind: 'table', caption: 'From the Corby postcode sort to coding with AI', head: ['In the sorting project', 'When AI writes code for you'], rows: [
          ['Sorted input took 1,566 comparisons', 'Performance depends on the data, not only the code'],
          ['Merge sort ignored existing order', 'A textbook method can waste work on real data'],
          ['Radix sort made no comparisons', 'There is often more than one kind of solution'],
          ['Radix needed fixed-shape keys', 'Every clever trick has conditions'],
          ['Counting steps settled the argument', 'Measure before believing a claim about speed']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for "a fast sort in Python" and you may get a hand-written quicksort that is slower than the one-word built-in. Vibe coding hands the typing to the AI while the learner describes what is wanted; our Corby learners then count steps and time the result against sorted() before accepting it. AI agents that write and run code for you make the same kind of choice silently, so measuring becomes part of the instruction. Agent building follows once Python is well understood, typically in the late teens or as an adult, and Copilot Studio agents are taught one-to-one only. Our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents route for UK students</a> goes further, grounded in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is not linked with Ordnance Survey, the ONS or postcodes.io. We only used their open data, and the code and any mistakes in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From card piles to algorithm analysis',
    intro: 'The school year gives a first idea; the trial lesson sets the real level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Ordering, patterns and counting how much work a method takes.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and algorithms', p: 'Sorting, searching and counting steps, in step with GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Algorithms, data handling and AI agents, one stage at a time.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and sorting',
    h2: 'What sorting algorithm does Python use, and how is radix sort different?',
    intro: 'Python uses Timsort, which finds runs that are already in order and merges them, while radix sort never compares items and instead deals them into buckets one character at a time.',
    p1: 'On Corby\'s 1,567 postcodes, Python needed 1,566 comparisons for an already sorted list and 14,617 for a shuffled one, while radix sort took seven passes, 10,969 placements, whatever the order.',
    p2: 'Learners who have counted those steps ask of any code an AI hands them: what does this cost on my data, and is the built-in already better?',
    closer: 'Measuring rather than guessing lets Corby teenagers judge AI-written code for themselves, a solid reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Great Oakley to Gretton, taught online',
    intro: 'A computer, a webcam and an internet connection able to carry a video call are all it takes.',
    cells: [
      { h3: 'Hands-on from minute one', p: 'The student types, prompts and runs each piece of code; the tutor watches the shared screen and keeps asking why.' },
      { h3: 'Pitched by the trial', p: 'What the free lesson shows decides topic one, and exam boards are recorded where they apply.' },
      { h3: 'Opening lesson free', p: 'Lesson one has no charge and ends with a suggested course.' },
      { h3: 'Classes by stage', p: 'Five to ten learners from across the UK at the same level form each class.' },
      { h3: 'Twice a week', p: 'Lessons break for school holidays.' },
      { h3: 'Consistent hours', p: 'UK clock changes are handled by our tutors, so your time stays the same.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one stage, free on the same evening and living close together, are hard to find. Video makes the distance irrelevant.' }
  },

  fees: {
    h2: 'Corby fees',
    intro: 'Corby learners pay our international prices, used for every country apart from India.',
    first: 'A whole free lesson, followed by our recommendation.',
    group: 'Some eight live lessons a month in a small group.',
    private: 'Some eight live one-to-one lessons a month.',
    closer: 'Prices are in US dollars rather than pounds, and nothing is invoiced until the trial has agreed a course and a weekly slot. The pricing page explains holidays, absences and moving between private and group lessons.'
  },

  reviewsH2: 'Reviews on Google from Northamptonshire families and learners across Britain',

  book: {
    h2: 'Book a free Corby lesson',
    intro: 'Give us the learner\'s age or school year and a hobby or two. A trial could be a card-sorting race, a Scratch game planned with an AI, early Python steps, or sorting real postcodes.',
    success: 'Thank you. Your Corby request has arrived.'
  },

  faq: {
    h2: 'Corby questions',
    intro: 'Sorting, the postcode project, Python, vibe coding and the practical side.',
    items: [
      { q: 'What is the population of Corby?', a: 'The ONS counted 68,160 residents in the Corby built-up area at the 2021 census.' },
      { q: 'Are online Python classes available in Corby?', a: 'Yes, as live video lessons for ages 6 to 67 in Corby, Weldon, Great Oakley and the surrounding villages.' },
      { q: 'What is radix sort?', a: 'A sorting method that never compares two items. It groups them by one digit or character at a time, starting from the last, keeping earlier order within each group, until the whole key has been used.' },
      { q: 'Why is Python\'s sort so fast on nearly sorted data?', a: 'Timsort looks for runs already in order and merges them, so on sorted input it needs only one comparison per neighbouring pair. For Corby\'s 1,567 postcodes that was 1,566.' },
      { q: 'What does the Corby project involve?', a: 'Sorting every NN17 and NN18 postcode from five starting orders, counting Python\'s comparisons against merge sort, and writing a radix sort that uses none.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at every age, with the learner planning the program and testing what the AI produces.' },
      { q: 'When can a learner build AI agents?', a: 'Once Python feels natural, generally in the late teens or later; Copilot Studio agents are private lessons only.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, in computer science and maths, for understanding rather than a promised grade.' },
      { q: 'What does it cost?', a: 'The first lesson is free; afterwards USD 100 a month for a group or USD 150 a month for one-to-one.' },
      { q: 'Are lessons paused for holidays?', a: 'Yes, school holidays are skipped; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Northamptonshire and Midlands pages',
    html: 'Neighbouring pages with their own projects: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kettering">Kettering</a> (an agent that finds its way), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-northampton">Northampton</a>, <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a> and <a class="cg-inline-link" href="/best-coding-class-in-leicester">Leicester</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Corby and Northamptonshire',
  footerPlaces: [
    { href: '/coding-classes-in-northamptonshire', label: 'Northamptonshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cbn .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-cbn .cg-hero h1 { font-weight: 790; letter-spacing: -0.027em; line-height: 1.05; }
.cg-root.cg-cbn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-cbn .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cbn .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.021em; }
.cg-root.cg-cbn .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-cbn .cg-table td { font-variant-numeric: tabular-nums; font-family: var(--font-mono, monospace); font-size: 0.92rem; }
.cg-root.cg-cbn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-cbn .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-cbn .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Northamptonshire (E06000061), Census 2021 TS001 usual residents 359,525. ONS 2021 BUA (published): Corby 68,160. postcodes.io outcodes NN17/NN18 parishes include Corby, Weldon, Gretton, Stanion; places in North Northamptonshire: Great Oakley (suburban area); Weldon, Stanion, Gretton, Cottingham, Rockingham (villages).',
    localProject: 'OS Code-Point Open 2026.3.0 (RM 17 July 2026): 1,567 postcodes NN17 (909) + NN18 (658), all 8 characters, file already sorted. Comparisons, Python sorted() / merge sort: sorted 1,566 / 8,073; reversed 1,566 / 8,683; 15 pairs swapped 4,384 / 10,654; west to east 12,390 / 14,388; shuffled 14,617 / 14,702; n log2 n 16,632. LSD radix: 7 passes x 1,567 = 10,969 placements. Lesson family: adaptive sorting (runs, Timsort/Powersort) and non-comparison radix sort.',
    requiredMentions: [
      '68,160',
      '359,525',
      'NN17',
      'NN18',
      'Great Oakley',
      'Stanion',
      'Gretton',
      'radix sort',
      'Timsort'
    ],
    sources: [
      { claim: 'Ordnance Survey Code-Point Open, dataset version 2026.3.0, Open Government Licence.', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io outcodes NN17 and NN18 and places in North Northamptonshire.', url: 'https://api.postcodes.io/outcodes/NN17' }
    ],
    rejectedClaims: [
      'Steel-town or new-town history: not read from a source; not claimed.',
      'Timings in seconds: not reported; only counted comparisons and placements.',
      'Python sort internals beyond run detection and the 3.11 Powersort merge rule: not claimed.',
      'Corby built-up area as a share of the council area: different tables; not compared.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
