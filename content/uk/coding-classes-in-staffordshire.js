'use strict';
// Staffordshire (cg- county index, UK cluster Phase 7, row 249). Stoke-on-Trent (unitary) plus Staffordshire County
// Council's eight districts. Spine: how would you look up a word the way people open a dictionary? Sources read raw 26
// September 2026: Samuel Johnson Birthplace Museum ("Samuel Johnson (1709-1784)"; "Best known as the author of A
// Dictionary of the English Language (1755)"; "born in 1709, here in his parents' home in Breadmarket Street,
// Lichfield"; the museum "opened to the public in 1901 and holds a collection of over 8,000 items"). Johnson, Preface to
// a Dictionary of the English Language (Project Gutenberg 5430, plain text).
// Our experiment (scratchpad stf/interp.py): the Preface's words, lower-cased, two letters or more: 9,654 running words,
// 2,376 distinct, sorted. First letters: s 238, c 215, a 192, p 189, d 186; x 1, z 2, y 5, k 8. Each word keyed by its
// first six letters as a base-27 fraction. Searching for every word: binary search mean 10.28 probes, max 12;
// interpolation search mean 17.90, max 110 (courting 110, courtier 109, cotemporaries 109, corrupts 109, course 108);
// the same interpolation search on 2,376 evenly spread random numbers mean 3.55, max 8; a straight scan averages
// 1,188.5.
// Lesson family: interpolation search vs binary search, the uniform-distribution assumption; screened (interpolation
// search, Samuel Johnson: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 1,134,470); ONS built-up areas checked
// against our OA sums (Burton upon Trent and Tamworth straddle slightly; Wolverhampton, Royal Sutton Coldfield and
// Streetly are mostly outside and left out). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'STAFFORDSHIRE', blurb: 'The Potteries, Stafford and the towns of the Trent, and a lesson from Johnson\'s Lichfield on why guessing where a word sits can backfire.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-staffordshire',
  code: 'stf',
  accent: '#29415C',
  accentRationale: 'Staffordshire: a deep pottery blue from the solver (8.44:1 on the darkest paper tint), greyer than the Northumberland steel and the Bedfordshire navy',
  pageType: 'governorate',
  place: {
    name: 'Staffordshire',
    eyebrow: 'Staffordshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Stoke-on-Trent', href: '/best-coding-class-in-stoke-on-trent' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Staffordshire',
  title: 'Coding Classes in Staffordshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Staffordshire, from Stoke-on-Trent, Stafford and Burton upon Trent to Tamworth, Cannock, Lichfield and Leek.',
  ogDescription: 'Coding classes for all of Staffordshire, and a Samuel Johnson project: search the words of his Dictionary\'s preface two ways and find why the clever guess loses to plain halving.',
  twitterDescription: 'Staffordshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Staffordshire',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across Staffordshire, taught live in English.'
  },

  h1: 'Coding classes in Staffordshire',
  capsuleQ: 'What are the best coding classes in Staffordshire?',
  capsule: 'Staffordshire here means the city of Stoke-on-Trent and the eight districts of Staffordshire County Council, which the 2021 Census counted at 1,134,470 people between them, our sum of nine published totals. The Stoke-on-Trent built-up area is by far the largest, followed by Newcastle-under-Lyme, Burton upon Trent, Tamworth and Stafford. Lessons run live over video from India, and every learner is grouped by ability, not by year of birth. We welcome ages 6 to 67 to coding, Python, algorithms and maths, in groups of five to ten or one-to-one. The Staffordshire project comes from Lichfield, where Samuel Johnson was born. Lesson one costs nothing, and from then on it is USD 100 monthly for a group seat or USD 150 monthly for a private teacher.',
  lead: 'The Samuel Johnson Birthplace Museum says Johnson was born in 1709 in his parents\' home on Breadmarket Street, Lichfield, and that his most famous work is A Dictionary of the English Language, published in 1755. Anyone who has used a paper dictionary knows the trick: to find "salt" you do not open it in the middle, you open it about three quarters of the way through, because S comes late. Programmers call that interpolation search, and in theory it beats the steady halving of binary search. This page\'s project tests the theory on real English, the words of Johnson\'s own preface, and finds that the clever guess can lose badly.',
  wa: 'Hello Modern Age Coders, we are in Staffordshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Staffordshire',
    h2: 'Where Staffordshire learners start',
    intro: 'A seven-year-old in Leek who loves word games, a Year 8 in Burton who likes beating the clock, a Year 11 in Stafford aiming at computer science, and an adult in Tamworth preparing for technical interviews. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with guessing games and word puzzles.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms for teenagers, including binary search on sorted lists and judging methods by their cost.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults', note: 'Interview-ready data structures and algorithms for adults, from searching and sorting to trees and graphs.' }
    ]
  },

  sections: [
    {
      id: 'staffordshire', tint: '', eyebrow: 'Staffordshire in figures',
      h2: '1,134,470 people in the city and eight districts',
      intro: 'Council figures are 2021 Census counts on Nomis, and the total is our own addition. Towns are ONS built-up areas, which we recounted from census output areas.',
      body: [
        { kind: 'table', caption: 'Staffordshire\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Stoke-on-Trent', '260,560', 'Cannock', '63,065'],
          ['Newcastle-under-Lyme', '76,505', 'Lichfield', '32,580'],
          ['Burton upon Trent', '76,255', 'Burntwood', '27,900'],
          ['Tamworth', '76,090', 'Rugeley', '26,145'],
          ['Stafford', '71,690', 'Leek', '19,385'],
          ['Great Wyrley and Cheslyn Hay', '17,640', 'Biddulph', '17,495']
        ] },
        { kind: 'p', text: 'Stoke-on-Trent city council had 258,366 residents, and the largest district is Stafford at 136,867, the smallest Tamworth at 78,646. Burton upon Trent and Tamworth each reach a little over the county edge: by our output-area counts, about 1,200 Burton residents and about 340 Tamworth residents live just outside Staffordshire. Wolverhampton, Royal Sutton Coldfield and Streetly just touch Staffordshire but lie mostly outside, so they are left off. Next in size come Stone, Kidsgrove, Uttoxeter, Wombourne, Codsall and Cheadle. Holiday dates come from Stoke-on-Trent, from the county council and from academy trusts, and may not match; families simply tell us theirs, since we have not read the calendars.' },
        { kind: 'callout', h3: 'City pages inside the county', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-stoke-on-trent">Stoke-on-Trent</a> page cleans noisy sensor data, and <a class="cg-inline-link" href="/best-coding-class-in-lichfield">Lichfield</a> measures how straight its Roman roads are. This page covers the whole county.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Staffordshire project',
      h2: 'Opening the dictionary at the right page',
      intro: 'Johnson\'s preface as data, two ways to search it, and a lesson about assumptions.',
      body: [
        { kind: 'p', text: 'The learner downloads Johnson\'s Preface to a Dictionary of the English Language from Project Gutenberg, splits it into words, and keeps each different word once: 2,376 of them, from 9,654 words of text, sorted alphabetically like a real dictionary. The program then looks up every one of the 2,376 words two ways and counts how many times it has to peek at the list, which programmers call probes.' },
        { kind: 'p', text: 'Binary search always peeks at the middle of the part still possible and throws away the half that cannot contain the word. Interpolation search guesses the position from the word itself: a word starting with "s" should sit about 70 per cent of the way through, one starting with "c" about 10 per cent. To make that guess the program turns the first six letters into a number between 0 and 1, in the way a decimal turns digits into a fraction.' },
        { kind: 'table', caption: 'Looking up all 2,376 words of the preface, our runs of 26 September 2026', head: ['Method', 'Average probes', 'Worst case'], rows: [
          ['Reading from the start', '1,188.5', '2,376'],
          ['Binary search', '10.28', '12'],
          ['Interpolation search, Johnson\'s words', '17.90', '110 (for "courting")'],
          ['Interpolation search, evenly spread numbers', '3.55', '8']
        ] },
        { kind: 'p', text: 'On evenly spread random numbers, interpolation search is brilliant: 3.55 probes on average, far better than binary search. On Johnson\'s real words it is worse than binary search on average and dreadful in the worst case, taking 110 probes to find "courting". The reason is that letters are not evenly spread. In the preface, 238 different words start with "s" and 215 with "c", but only one with "x" and two with "z". A guess that assumes every letter has an equal share lands in the wrong place, and near crowded stretches like "co" it creeps forward only a few words at a time.' },
        { kind: 'p', text: 'This is the real lesson: an algorithm\'s speed depends on the data it meets, and the promise of a faster method is only as good as its assumptions. Binary search makes no assumption about how words are spread, so it never does worse than 12 probes here. A careful programmer either checks the data first or uses a hybrid that falls back to halving when the guesses stop helping.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play guess-the-number with halving, then try finding words in a paper dictionary and count how many pages you turn.' },
          { h3: 'Ages 11 to 15', p: 'Write binary search in Python on the sorted word list and count probes for every word.' },
          { h3: 'Ages 15 and up', p: 'Add interpolation search with a numeric key, compare the two on words and on random numbers, and design a hybrid that never loses badly.' }
        ] },
        { kind: 'callout', h3: 'What is Johnson\'s and what is ours', p: 'The text is Johnson\'s preface as published by Project Gutenberg, and the facts about his life come from the Samuel Johnson Birthplace Museum. The word list, the numeric key, both searches and every count are ours. The preface is not the dictionary itself, and a different word list would give somewhat different numbers.' }
      ]
    },
    {
      id: 'johnson', tint: 'deep', eyebrow: 'Why Lichfield',
      h2: 'The dictionary maker from Breadmarket Street',
      intro: 'The Staffordshire link, from the museum in the house where he was born.',
      body: [
        { kind: 'table', caption: 'Samuel Johnson, as the Birthplace Museum describes him', head: ['Point', 'The museum says'], rows: [
          ['Born', 'In 1709, in his parents\' home on Breadmarket Street, Lichfield.'],
          ['Life', 'Samuel Johnson, 1709 to 1784.'],
          ['Most famous work', 'A Dictionary of the English Language, 1755.'],
          ['The museum', 'Opened to the public in 1901, with a collection of over 8,000 items.']
        ] },
        { kind: 'p', text: 'A dictionary is one of the oldest sorted data structures people use every day, and searching it is one of the first algorithms children learn without knowing it. Search engines, databases, phone contacts and spell checkers all rely on the same ideas, and all of them have to cope with real data that is lumpy rather than even. A Staffordshire student who has watched a clever method trip over the letter "c" understands why computer scientists test algorithms on real data, not just on tidy examples.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Samuel Johnson Birthplace Museum, Project Gutenberg or any Staffordshire council. The museum\'s facts and Johnson\'s words are theirs; our code and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-stoke-on-trent">Stoke-on-Trent</a> and <a class="cg-inline-link" href="/best-coding-class-in-lichfield">Lichfield</a> have their own pages; <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> and <a class="cg-inline-link" href="/coding-classes-in-derbyshire">Derbyshire</a> border the north, the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands</a> and <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> the south.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From guessing games to algorithm design',
    intro: 'The free lesson decides the first rung. Age is a clue, not the answer.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Higher or lower', p: 'Block coding games that guess a number and learn to halve the range each time.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 13', h3: 'Lists and words', p: 'Typed Python with sorted lists, word games and counting how many steps a search takes.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 13 to 18', h3: 'Searching and sorting', p: 'Algorithms for teenagers, compared honestly by average and worst-case cost.', courses: ['problem-solving-dsa-masterclass-teens', 'gcse-computer-science-course'] },
      { band: 'Ages 18 to 67', h3: 'Interview-level algorithms', p: 'Data structures and algorithms for adults, from search to graphs, explained aloud.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and assumptions',
    h2: 'Ask an AI for the fastest search. Will it ask what your data looks like?',
    intro: 'The textbook answer and the right answer are not always the same.',
    p1: 'Ask an assistant which search is fastest on a sorted list and it may well recommend interpolation search, quoting its excellent average speed. That speed depends on evenly spread keys, which real words, names, prices and dates rarely have. On Johnson\'s preface the recommended method is slower on average than plain binary search and more than nine times worse in its worst case.',
    p2: 'A Staffordshire student who has run both on real data knows to ask the question behind every performance claim: fast on what? The same question applies to AI models themselves, which can shine on the data they were tested on and stumble on data that is spread differently.',
    closer: 'So a young person in Staffordshire should learn to code in 2026 to test a clever method on real data before trusting the promise.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From the Moorlands to Cannock Chase, at home',
    intro: 'Staffordshire stretches a long way, and evening traffic between its towns makes a weekly class a real commitment. Online lessons remove the journey.',
    cells: [
      { h3: 'Lessons at home', p: 'A terrace in Hanley, a semi in Burntwood, a farmhouse near Uttoxeter. The learner does the typing while the teacher watches the same screen.' },
      { h3: 'School terms we know', p: 'Year groups, key stages, GCSEs and A levels mean what they mean in Staffordshire schools, and teaching is in English.' },
      { h3: 'A free lesson first', p: 'A real lesson, then an honest recommendation. We ask for no card details.' },
      { h3: 'Classmates who match', p: 'A group of five to ten at the same stage, wherever they happen to live.' },
      { h3: 'Holidays by your dates', p: 'Most learners take two lessons a week and pause for their own school\'s holidays.' },
      { h3: 'One UK time all year', p: 'Your lesson stays at the same UK time when the clocks change; the teacher, several hours ahead on India time, makes the adjustment.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Five learners at the same stage and free on the same evening are hard to find in any one town. Grouping by level lets a learner in Biddulph or Codsall join a class that suits them.' }
  },

  fees: {
    h2: 'Fees in Staffordshire',
    intro: 'Rugeley or Wombourne, the fee is the same, as it is in every country we teach outside India.',
    first: 'A full lesson of real work, followed by advice on level and course.',
    group: 'Roughly eight lessons a month, in a group of five to ten at one level.',
    private: 'Roughly eight lessons a month, one-to-one.',
    closer: 'Prices are in US dollars, not pounds. We bill nothing until the free lesson has settled a course and a weekly time, and our pricing page explains pauses, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Families review us on Google',

  book: {
    h2: 'Book a free Staffordshire lesson',
    intro: 'Tell us the learner\'s age or year group and what they like. A first lesson might be a Scratch guessing game, a Python word list, or the dictionary search on this page.',
    success: 'Thank you. Your Staffordshire request has been received.'
  },

  faq: {
    h2: 'Staffordshire questions',
    intro: 'The county, the dictionary project and practical details.',
    items: [
      { q: 'How many people live in Staffordshire?', a: 'Counting Stoke-on-Trent with the eight county districts gives 1,134,470 usual residents in the 2021 Census; we added the nine separate ONS figures from Nomis to reach that total.' },
      { q: 'What are the largest towns in Staffordshire?', a: 'By ONS built-up area: Stoke-on-Trent 260,560, Newcastle-under-Lyme 76,505, Burton upon Trent 76,255, Tamworth 76,090 and Stafford 71,690.' },
      { q: 'What is the Samuel Johnson project?', a: 'Learners sort the 2,376 different words in Johnson\'s preface to his Dictionary and search for each one with binary search and interpolation search, finding the clever method slower on real words because letters are unevenly spread.' },
      { q: 'What is interpolation search?', a: 'A way to search a sorted list by guessing where an item should be from its value, like opening a dictionary near the back for words beginning with "s". It is very fast when values are evenly spread and can be slow when they are not.' },
      { q: 'Where was Samuel Johnson born?', a: 'According to the Samuel Johnson Birthplace Museum, in 1709 in his parents\' home on Breadmarket Street, Lichfield.' },
      { q: 'Are lessons held in Staffordshire?', a: 'Not in person. Every lesson is live online, so learners join from anywhere in the county.' },
      { q: 'Which ages can join?', a: 'Ages 6 to 67. Children begin with blocks or early Python, teenagers move on to algorithms and GCSE computer science, and adults can study algorithms to interview level. The free lesson finds the right start.' },
      { q: 'Do you teach algorithms for interviews?', a: 'Yes. The adult data structures and algorithms course is built for interview preparation, including searching, sorting, trees and graphs.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. Afterwards you pay USD 100 per month in a group or USD 150 per month one-to-one, with no sign-up charge and no set contract length.' },
      { q: 'Do you pause for Staffordshire school holidays?', a: 'Yes, if you wish. Stoke-on-Trent City Council, Staffordshire County Council and academy trusts publish dates, and we plan around yours.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages around Staffordshire',
    html: 'Start with <a class="cg-inline-link" href="/best-coding-class-in-stoke-on-trent">Stoke-on-Trent</a> or <a class="cg-inline-link" href="/best-coding-class-in-lichfield">Lichfield</a>, then <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a>, <a class="cg-inline-link" href="/coding-classes-in-derbyshire">Derbyshire</a>, <a class="cg-inline-link" href="/coding-classes-in-shropshire">Shropshire</a> and the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Staffordshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-stoke-on-trent', label: 'Stoke-on-Trent' },
    { href: '/best-coding-class-in-lichfield', label: 'Lichfield' }
  ],

  personalityCss: `
.cg-root.cg-stf .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-stf .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-stf .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-stf .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-stf .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-stf .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-stf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stf .cg-table th { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-stf .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-stf .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Staffordshire: Stoke-on-Trent (unitary) plus Staffordshire County Council districts Cannock Chase, East Staffordshire, Lichfield, Newcastle-under-Lyme, South Staffordshire, Stafford, Staffordshire Moorlands, Tamworth. ONS Census 2021 TS001 via Nomis: Stoke-on-Trent 258,366; Stafford 136,867; East Staffordshire 124,020; Newcastle-under-Lyme 123,299; South Staffordshire 110,472; Lichfield 106,436; Cannock Chase 100,519; Staffordshire Moorlands 95,845; Tamworth 78,646; our sum 1,134,470. ONS built-up areas (published): Stoke-on-Trent 260,560; Newcastle-under-Lyme 76,505; Burton upon Trent 76,255 (75,066 inside); Tamworth 76,090 (75,752 inside); Stafford 71,690; Cannock 63,065; Lichfield 32,580; Burntwood 27,900; Rugeley 26,145; Leek 19,385; Great Wyrley and Cheslyn Hay 17,640; Biddulph 17,495; Stone 17,280; Kidsgrove 15,595; Uttoxeter 14,020; Wombourne 12,815; Codsall 11,865; Cheadle 11,400. Excluded as mostly outside: Wolverhampton, Royal Sutton Coldfield, Streetly. Samuel Johnson Birthplace Museum: "Samuel Johnson (1709-1784)"; "Best known as the author of A Dictionary of the English Language (1755)"; "born in 1709, here in his parents\' home in Breadmarket Street, Lichfield"; "opened to the public in 1901 and holds a collection of over 8,000 items".',
    localProject: 'Interpolation vs binary search on the sorted distinct words of Johnson\'s Preface (Gutenberg 5430; lower-case, length at least 2): 9,654 running, 2,376 distinct; first letters s 238, c 215, a 192, p 189, d 186, x 1, z 2, y 5, k 8. Key = first six letters as base-27 fraction. Searching every word: binary mean 10.28, max 12; interpolation mean 17.90, max 110 (courting; courtier, cotemporaries, corrupts 109; course 108); interpolation on 2,376 uniform randoms mean 3.55, max 8; linear mean 1,188.5. Page labels list, key and counts as ours. AI angle: recommended method fails on non-uniform real data. Lesson family: interpolation search, uniform-distribution assumption, worst case.',
    requiredMentions: [
      '1,134,470',
      'interpolation search',
      'Breadmarket Street',
      'Great Wyrley and Cheslyn Hay',
      'Biddulph',
      'Uttoxeter',
      'Wombourne',
      'Codsall',
      'courting',
      'Samuel Johnson Birthplace Museum'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Stoke-on-Trent and the eight Staffordshire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Staffordshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Samuel Johnson Birthplace Museum: Johnson\'s dates, birthplace, Dictionary, museum history.', url: 'https://www.samueljohnsonbirthplace.org.uk/' },
      { claim: 'Samuel Johnson, Preface to a Dictionary of the English Language, Project Gutenberg eBook 5430.', url: 'https://www.gutenberg.org/ebooks/5430' }
    ],
    rejectedClaims: [
      'The number of words defined in Johnson\'s Dictionary: not read from a primary page, so no figure is given.',
      'Wedgwood and the Potteries history: not researched for this page, not described.',
      'Burton upon Trent and Tamworth overspill: given only as our rounded OA differences (1,189 and 338).',
      'That any real search engine uses interpolation search: not claimed.',
      'Staffordshire school term dates: none read.',
      'Named Staffordshire schools: none named.'
    ]
  }
};
