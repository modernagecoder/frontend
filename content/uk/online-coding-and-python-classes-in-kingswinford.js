'use strict';
// Kingswinford (cg- town page, UK cluster Phase 10, towns band B, row 503). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: Shell sort is one loop run several times
// with different gaps; how much does the choice of gaps matter? (Shell sort gap sequences, comparisons counted.)
// Data (read 30 September 2026): one Overpass query for named highway ways in the rectangle around the ONS centroids of
// the Kingswinford built-up area (52.4713 to 52.5109 N, 2.1886 to 2.1210 W): 1,767 named ways, 810 distinct names, kept
// in the order they first appear in the reply. The box is a rectangle, not the town boundary.
// Our run (scratchpad kwf/shell.py), comparisons of two names: plain insertion sort (gap 1 only) 169,625; Shell's
// halving gaps 405, 202, 101, 50, 25, 12, 6, 3, 1: 12,471; Knuth's 121, 40, 13, 4, 1: 10,571; Ciura's 701, 301, 132,
// 57, 23, 10, 4, 1: 10,067; Python sorted() 6,799; log2(810!) about 6,664. Twenty random shuffles, mean: halving
// 12,154, Knuth 10,769, Ciura 10,127. Already-sorted input: insertion 809, halving 6,485, Knuth 3,871, Ciura 5,251.
// Reversed input: insertion 327,645, halving 8,980, Knuth 7,554, Ciura 7,487. Endings: Road 147, Close 128, Drive 102.
// Lesson family: Shell sort and gap sequences. Screened: "shell sort", "gap sequence", "ciura" 0 hits in content/;
// claimed in claims.txt. Dudley page = Big O measured (quadratic vs linear, joins); Stourbridge = deviational ellipse;
// Halesowen and the West Midlands county page (linear programming) are different families.
// Place facts: Dudley TS001 323,486. ONS 2021 BUA (published): Kingswinford 51,910. postcodes.io suburban areas whose
// closest postcode is in the Kingswinford BUA: Wall Heath (DY6), Wordsley (DY8), Pensnett, Bromley (DY5).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KINGSWINFORD', label: 'Kingswinford', blurb: 'Online coding and Python classes for Kingswinford, with a Shell sort project that alphabetises 810 local street names and counts every comparison.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-kingswinford',
  code: 'kwf',
  accent: '#7A5240',
  accentRationale: 'Kingswinford: a fired-clay brown (6.76:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Kingswinford',
    eyebrow: 'Kingswinford, Dudley, West Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Dudley', href: '/online-coding-and-python-classes-in-dudley' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kingswinford, West Midlands',
  title: 'Online Coding and Python Classes in Kingswinford | Ages 6 to 67',
  description: 'Live online coding and Python classes for Kingswinford, Wall Heath, Wordsley and Pensnett, ages 6 to 67, with vibe coding and AI. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Kingswinford, with a Shell sort project on 810 local street names.',
  twitterDescription: 'Kingswinford coding and Python lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Kingswinford',
    description: 'Online Python, coding, AI and maths lessons for children, teenagers and adults in Kingswinford and the borough of Dudley, taught live through algorithms the learner measures for themselves.'
  },

  h1: 'Online coding and Python classes in Kingswinford',
  capsuleQ: 'What are the best online coding and Python classes for Kingswinford?',
  capsule: 'Kingswinford is an ONS built-up area of 51,910 people (Census 2021) within the borough of Dudley, which had 323,486. Wall Heath, Wordsley, Pensnett and Bromley are gazetteer suburbs that fall inside it. Modern Age Coders teaches Python, coding, vibe coding, AI and maths live online to learners there aged six to 67. Tutors based in India take each lesson over video, either one-to-one or with a group of five to ten working at a shared level. We have learners count what their code does instead of assuming it. After a free first lesson we recommend a course. In the Kingswinford project a learner writes Shell sort in Python, puts 810 local street names into alphabetical order, and counts how the number of comparisons changes with the gaps chosen. Lessons then cost USD 100 a month in a group, or USD 150 a month one-to-one.',
  lead: 'In 1959 Donald Shell noticed something about the simple card-player\'s way of sorting, where each new item is walked back past its neighbours until it fits. The method is slow because items only ever move one place at a time. His fix was to run the same loop first on items far apart, then closer, then adjacent. The code barely changes: one extra loop and one number, the gap. What nobody could say for certain, then or since, is which gaps to use. That makes it an unusually good lesson, because the learner can test the question on real data and get a clear answer in an afternoon.',
  wa: 'Hello Modern Age Coders, could we book a free Python or coding trial lesson? We are in Kingswinford.',

  picks: {
    eyebrow: 'Course picks',
    h2: 'Python and coding courses for Kingswinford learners',
    intro: 'One suggestion per age band. Whichever you choose, lesson one is live, free and booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think like a programmer: sorting cards, spotting patterns and writing steps someone else can follow.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children, building Scratch games with an AI and checking each piece works.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Typed Python from the ground up, with sorting, searching and the Kingswinford street-name project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from zero to algorithms, data work and a first AI agent.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'About the area',
      h2: 'Kingswinford, Wall Heath, Wordsley and Pensnett',
      intro: 'Census counts for the town and its borough, with the suburb names the postcode gazetteer holds.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents (ONS)', head: ['Area', 'Count'], rows: [
          ['Kingswinford built-up area', '51,910'],
          ['Dudley borough', '323,486']
        ] },
        { kind: 'p', text: 'The ONS built-up area called Kingswinford spans more than one postcode district. postcodes.io records Wall Heath in the DY6 postcode district, Wordsley in DY8 and Pensnett and Bromley in DY5 as suburban areas in Dudley borough, and the postcode closest to each gazetteer point belongs to the Kingswinford built-up area. The borough figure covers Dudley, Stourbridge, Halesowen and the other towns as well, so the two rows are separate counts. Local schools teach the English national curriculum; give us a year group from Year 2 to Year 13 and we can fit lessons around GCSE or A level computer science.' },
        { kind: 'callout', h3: 'West Midlands pages', p: 'See also <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-stourbridge">Stourbridge</a> and the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands county page</a>. Our case for thinking skills first is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kingswinford project',
      h2: 'Shell sort: the same loop, run with different gaps',
      intro: 'Eight hundred and ten street names, four sets of gaps, and a counter on every comparison.',
      body: [
        { kind: 'p', text: 'The learner asks OpenStreetMap for every named road in a rectangle drawn around the census centres of the Kingswinford built-up area. The reply holds 1,767 named stretches of road carrying 810 different names, from Abbots Mews to Zaria Court. Names ending in Road are the most common with 147, then Close with 128 and Drive with 102. The list is kept in the order the names first turn up in the reply, which is neither sorted nor properly random, much like real data usually is.' },
        { kind: 'p', text: 'Shell sort picks a gap, say 40, and sorts the names that are 40 apart from one another using the card-player\'s method. Then it picks a smaller gap and repeats, finishing with a gap of 1. By that last pass the list is nearly in order, so little work remains. The Python is about ten lines, and the gaps are just a list handed to the function. The learner wraps each name so that every "is this one before that one?" adds 1 to a counter.' },
        { kind: 'table', caption: 'Comparisons needed to alphabetise 810 street names, our Python run', head: ['Gaps used', 'As downloaded', 'Mean of 20 shuffles', 'Already sorted'], rows: [
          ['1 only (no Shell passes)', '169,625', '165,423', '809'],
          ['Shell 1959: 405, 202, 101, 50, 25, 12, 6, 3, 1', '12,471', '12,154', '6,485'],
          ['Knuth: 121, 40, 13, 4, 1', '10,571', '10,769', '3,871'],
          ['Ciura: 701, 301, 132, 57, 23, 10, 4, 1', '10,067', '10,127', '5,251']
        ] },
        { kind: 'p', text: 'Adding gaps cut the work from 169,625 comparisons to between 10,067 and 12,471, and which gaps mattered. Shell\'s own rule, halve each time, was the weakest of the three. Knuth\'s list, where each gap is three times the next plus one, saved about 15% on it. Ciura\'s list, found by experiment in 2001 and not by a formula, did slightly better again. The last column shows the price. Give a plain one-gap sort a list that is already in order and it checks each neighbour once, 809 comparisons, and stops. Shell sort cannot know that and still makes every pass, so it takes thousands.' },
        { kind: 'p', text: 'For scale, Python\'s built-in sorted() used 6,799 comparisons on the same list, and no method based on comparing pairs can promise fewer than about 6,664 for 810 items. The counts are for this one list of names; the rectangle is a box around the town and takes in some roads beyond it.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort twenty name cards by comparing cards five apart, then two apart, then neighbours, and tally the comparisons.' },
          { h3: 'Ages 11 to 15', p: 'Write the one-gap sort in Python, add a counter, and watch it grow as the list doubles.' },
          { h3: 'Ages 15 and up', p: 'Pass the gaps in as a list, test three published sequences, then invent a fourth and try to beat them.' }
        ] },
        { kind: 'callout', h3: 'Where the data came from', p: 'Street names are from OpenStreetMap contributors under the Open Database Licence, fetched with a single Overpass query. The gap sequences are from Shell (1959), Knuth and Ciura (2001). The counting and every figure in the table are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Python with AI beside you',
      h2: 'What counting comparisons teaches about coding with AI',
      intro: 'A claim that code is "faster" is an invitation to measure it.',
      body: [
        { kind: 'table', caption: 'From sorting street names to working with an AI assistant', head: ['In the Kingswinford run', 'Carry it over'], rows: [
          ['One number, the gap, changed the cost more than thirteenfold', 'Small parameters deserve attention'],
          ['Three published gap lists gave three results', 'Ask the AI which variant it wrote, and why'],
          ['Sorted input made Shell sort look wasteful', 'Test on more than one kind of input'],
          ['sorted() beat all our versions', 'Know when the library is the right answer'],
          ['Every count came from a counter in the code', 'Measure before you believe']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to sort a list in Python and it will call sorted(), which is correct and the right choice in real work. Ask it to write Shell sort and it will pick a gap sequence without telling you there was a choice. Kingswinford learners practise vibe coding with that in mind: describe the task, read what comes back, find the decisions hidden in it, and add a counter or a timer to check the claim. That habit is what makes AI agents safe to build later on. We introduce agents after a learner writes Python confidently alone, usually in the later teens or as an adult, and Copilot Studio agents are taught one-to-one only. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of OpenStreetMap, the Office for National Statistics and postcodes.io. Their open data fed the exercise; the analysis is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The route through',
    h2: 'Card sorting at seven, measured Python at seventeen',
    intro: 'We place learners by what they can do in the trial lesson, with the school year as a starting hint.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Order, pattern and clear steps, practised away from the screen too.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'First real code', p: 'Scratch with AI help, then a gentle move into typed Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python properly', p: 'Functions, lists, sorting and searching, with counts and tests.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Algorithms and agents', p: 'Data structures, then Python agents built on code you understand.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python, sorting and AI',
    h2: 'What is Shell sort, and does it still matter when AI writes the code?',
    intro: 'Shell sort is a sorting method that repeats a simple insertion pass on items a fixed gap apart, shrinking the gap to 1, and it still matters because choosing the gaps is a design decision an AI will make silently unless the learner knows to ask.',
    p1: 'On 810 Kingswinford street names, a one-gap sort needed 169,625 comparisons, Shell\'s halving gaps 12,471, Knuth\'s 10,571 and Ciura\'s 10,067, while Python\'s sorted() needed 6,799.',
    p2: 'A learner who has produced that table treats any code, their own or an AI\'s, as something to be counted and compared, not admired.',
    closer: 'For a Kingswinford teenager, being able to measure what a program does is the difference between using AI and being led by it, and that skill is learned by coding.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Teaching method',
    h2: 'What a Kingswinford lesson looks like',
    intro: 'Lessons happen on a video call from your home. A computer with a keyboard and camera is required; a tablet alone is not enough for Python.',
    cells: [
      { h3: 'The learner drives', p: 'They type and run the code on a shared screen while the tutor asks why each line is there.' },
      { h3: 'Level found, not guessed', p: 'The free lesson shows us what the learner already knows before we name a course.' },
      { h3: 'A trial with no strings', p: 'No fee, no card and no commitment for the first session.' },
      { h3: 'Five to ten per class', p: 'Classmates are at the same stage and log in from around the UK.' },
      { h3: 'About eight lessons a month', p: 'Twice a week in term, with Dudley school holidays left clear on request.' },
      { h3: 'Clock changes handled', p: 'Your UK lesson time is fixed through the year; tutors shift at their end.' }
    ],
    spec: { title: 'Why live, and why online', p: 'Python is learned by typing it and being asked questions about it, which needs a live person. Teaching online lets us group learners by level instead of by postcode.' }
  },

  fees: {
    h2: 'What Kingswinford lessons cost',
    intro: 'One price list applies outside India, and Kingswinford families are on it.',
    first: 'First lesson: free and full length, ending with a course recommendation.',
    group: 'Group class, roughly eight lessons in a month.',
    private: 'One-to-one tuition, roughly eight lessons in a month.',
    closer: 'All prices are in US dollars, with no sterling equivalent quoted by us. You pay nothing before the trial, and billing begins only once you have accepted a course and a time. Holiday pauses, missed lessons and switching format are covered on the pricing page.'
  },

  reviewsH2: 'West Midlands families and UK learners on Google',

  book: {
    h2: 'Request a free Kingswinford lesson',
    intro: 'Tell us the learner\'s age or year and what they like doing. The trial might be a card-sorting race, a Scratch game made with AI, a first Python program, or a sort with a counter attached.',
    success: 'Thank you. Your Kingswinford request is with us.'
  },

  faq: {
    h2: 'Kingswinford FAQs',
    intro: 'Shell sort, the street-name project, Python, vibe coding and how lessons are arranged.',
    items: [
      { q: 'What is the population of Kingswinford?', a: 'The ONS built-up area of Kingswinford had 51,910 usual residents at the 2021 census. The borough of Dudley had 323,486.' },
      { q: 'Are there online coding and Python classes for Kingswinford?', a: 'Yes. Lessons are live online for ages 6 to 67 in Kingswinford, Wall Heath, Wordsley, Pensnett and the wider borough of Dudley.' },
      { q: 'What is a comparison sort?', a: 'A comparison sort is any sorting method that works only by asking which of two items should come first. Its cost is usually counted in comparisons.' },
      { q: 'What did the Kingswinford project measure?', a: 'Sorting 810 street names took 169,625 comparisons with one gap, 12,471 with Shell\'s halving gaps, 10,571 with Knuth\'s and 10,067 with Ciura\'s.' },
      { q: 'Is Shell sort used in real programs?', a: 'Rarely for large jobs. Python\'s sorted() used 6,799 comparisons on the same list. Shell sort is taught because it is short and shows how one design choice changes cost.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is writing software by describing it to an AI, then reading, running and improving the result. We teach it alongside typed Python so learners can check the AI\'s work.' },
      { q: 'Do you teach AI agents?', a: 'Yes, after a learner can write Python independently, which is usually in the later teens or adulthood. Copilot Studio agents are one-to-one only.' },
      { q: 'Does this help with GCSE computer science?', a: 'Sorting and searching algorithms are part of GCSE and A level courses, and we teach them in depth. We make no promises about grades.' },
      { q: 'What are the fees?', a: 'The first lesson is free. Group lessons are USD 100 a month and one-to-one lessons USD 150 a month.' },
      { q: 'Can we pause for holidays?', a: 'Yes. Let us know the dates and those weeks are left out.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Other pages in the West Midlands set',
    html: 'Have a look at <a class="cg-inline-link" href="/online-coding-and-python-classes-in-dudley">Dudley</a> (timing slow and fast joins), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-stourbridge">Stourbridge</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-halesowen">Halesowen</a>. The <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the others.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Kingswinford and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-kwf .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 2.8vw, 2.3rem); }
.cg-root.cg-kwf .cg-hero h1 { font-weight: 775; letter-spacing: -0.024em; line-height: 1.08; }
.cg-root.cg-kwf .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-kwf .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-kwf .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.017em; }
.cg-root.cg-kwf .cg-table caption { font-weight: 550; text-align: left; font-size: 0.9rem; }
.cg-root.cg-kwf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kwf .cg-table th { font-weight: 720; letter-spacing: 0.02em; }
.cg-root.cg-kwf .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-kwf .cg-callout { border-left-width: 6px; border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Dudley (E08000027), Census 2021 TS001 usual residents 323,486. ONS 2021 BUA (published): Kingswinford 51,910. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Kingswinford BUA: Wall Heath (DY6), Wordsley (DY8), Pensnett, Bromley (DY5).',
    localProject: 'One Overpass query, named highway ways in the rectangle around the Kingswinford BUA centroids: 1,767 ways, 810 distinct names (Road 147, Close 128, Drive 102). Comparisons to alphabetise them in download order: one gap 169,625; Shell halving gaps 12,471; Knuth 121, 40, 13, 4, 1: 10,571; Ciura 701 down to 1: 10,067; Python sorted() 6,799; log2(810!) about 6,664. Mean of 20 shuffles: 165,423, 12,154, 10,769, 10,127. Already sorted: 809, 6,485, 3,871, 5,251. Lesson family: Shell sort and gap sequences, comparisons counted.',
    requiredMentions: [
      '51,910',
      'Wall Heath',
      'Wordsley',
      'Pensnett',
      'Shell sort',
      '169,625',
      '12,471',
      '10,067',
      'Ciura',
      'Zaria Court'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors, named highway ways via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Shell D. L. (1959), A high-speed sorting procedure, Communications of the ACM 2(7), 30 to 32.', url: 'https://doi.org/10.1145/368370.368387' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output area centroids.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Dudley.', url: 'https://api.postcodes.io/places?q=Wall%20Heath' }
    ],
    rejectedClaims: [
      'That the 810 names are exactly the streets of Kingswinford: the query was a rectangle around the town, and the page says so.',
      'That any gap sequence is optimal: not proved for Shell sort, not claimed.',
      'Timings in seconds: none given; only comparison counts, which do not depend on the computer.',
      'That Brockmoor is inside the Kingswinford built-up area: its closest postcode is in Brierley Hill; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
