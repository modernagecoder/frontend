'use strict';
// Cornwall (cg- county index, UK cluster Phase 7, row 225). Ceremonial Cornwall: Cornwall Council plus the Council of
// the Isles of Scilly. Spine: the silences carry the meaning. Marconi Centre Poldhu (run by the Poldhu Amateur Radio
// Club on behalf of the National Trust; read raw 26 September 2026): site bought 1900; "Poldhu had been instructed to
// transmit the Morse code letter 'S' (dot, dot, dot) daily from 3.00 pm to 6.00 pm GMT (11.30 am to 2.30 pm, St
// John's local time)"; S chosen because the switching "were unable to withstand the wear that a long series of dashes
// would have involved" and because atmospherics "tended to run all the dots and dashes into each other"; on 12
// December 1901 the three dots were heard at Signal Hill, St John's, Newfoundland; transmitter "roughly 13 kW",
// wavelength "usually estimated at 366 metres". ITU-R M.1677-1 (itu.int PDF, read raw): "A dash is equal to three
// dots"; space inside a letter one dot, between letters three dots, between words seven dots. Our run (scratchpad
// cor/morse.py, 26 September 2026): S lasts 5 dot-units with 3 units of key-down time, O 11 with 9; E shortest (1),
// J, Q and Y longest (13); dot-only letters E, I, S, H. Readings of a word sent with the letter gaps removed,
// counted by memoised recursion: SOS 192; MARCONI 59,364; POLDHU 524,361; CORNWALL 6,138,768, where plain
// recursion makes 12,759,484 calls and memoisation meets 26 distinct subproblems. S sits one flip, drop or extra
// element away from 9 letters (B D F H I L R U V). Lesson family: Morse as a code that is not prefix-free (gaps carry
// the meaning), counting parses with memoisation; screened 26 September 2026 (morse, memoisation: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (Cornwall 570,305; Isles of Scilly 2,053; our
// total 572,358); ONS built-up areas, all 21 above 5,000 inside Cornwall (largest Newquay 24,545). Cornwall Council
// term-dates URL returned 404; none printed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CORNWALL', blurb: 'Two councils, twenty-one towns and none of them large, and the three dots Poldhu sent across the Atlantic in 1901.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-cornwall',
  code: 'cnw',
  accent: '#5B6B1B',
  accentRationale: 'Cornwall: a clifftop-gorse olive green from the solver (4.75:1 on the darkest paper tint), greener than the Warwickshire olive',
  pageType: 'governorate',
  place: {
    name: 'Cornwall',
    eyebrow: 'Duchy and county of Cornwall',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Truro', href: '/best-coding-class-in-truro' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cornwall',
  title: 'Coding Classes in Cornwall | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, algorithms and maths classes across Cornwall and Scilly, from Newquay, St Austell and Falmouth to Truro, Camborne, Penzance and Bude.',
  ogDescription: 'Coding classes for every Cornish town, and a project on the Morse letter Poldhu sent across the Atlantic in 1901: why the gaps matter, and how many ways CORNWALL can be misread.',
  twitterDescription: 'Cornwall coding, Python and algorithms classes for ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'competitive-programming-for-teens-course',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Algorithms Classes for Cornwall',
    description: 'Ability-placed online coding, Python, algorithms, AI and mathematics for children, teenagers and adults across Cornwall and the Isles of Scilly, taught live in English.'
  },

  h1: 'Coding classes in Cornwall',
  capsuleQ: 'What are the best coding classes in Cornwall?',
  capsule: 'Cornwall and the Isles of Scilly held 572,358 people at the 2021 Census, and not one Cornish town reaches 25,000: Newquay, St Austell, Falmouth and Truro are all around 23,000 to 24,500, followed by Camborne, Bodmin, Redruth, Saltash and Penzance. It is a county of small towns a long way apart, which is exactly why online classes suit it. Here is how it works. A teacher in India appears live on the screen in front of the learner; the level is set by what the learner can already do, not how old they are; ages 6 to 67 are all welcome; classes are one to one or small groups of five to ten; and topics range from first programs and Python to algorithms, AI and maths. The Cornwall project is the Morse code signal Poldhu sent in 1901. The first lesson is on us. If you continue, it is USD 100 a month for a place in a group or USD 150 a month for lessons on your own.',
  lead: 'On 12 December 1901, at Signal Hill in Newfoundland, Marconi heard three faint clicks from Cornwall: dot, dot, dot, the Morse letter S, sent from Poldhu on the Lizard. The Marconi Centre\'s history explains why S was chosen: the switches at Poldhu could not take the wear of long dashes, and static tended to smear dots and dashes together, so three dots were easiest to recognise. Hidden in that story is something every programmer eventually learns. Morse only works because of the silences. Take away the gaps between letters and a message can be read in thousands, even millions, of ways. This page\'s project counts them, and in doing so meets one of the most useful ideas in programming: remembering answers you have already worked out.',
  wa: 'Hello Modern Age Coders, please could we have a free lesson for a learner in Cornwall?',

  picks: {
    eyebrow: 'Courses for Cornwall',
    h2: 'Four ways Cornish learners begin',
    intro: 'A seven-year-old in Hayle who makes up secret codes, a Year 6 in Helston who has just visited the Lizard, a Year 10 in Penryn who enjoys hard puzzles, and a parent in Liskeard retraining for remote work. Each begins with a free lesson.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Computational thinking and logic puzzles for children, including codes, patterns and rules.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, where a dictionary turns letters into dots and dashes and back again.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 13 to 18', note: 'Algorithms and contest technique in Python or C++, with recursion, backtracking and dynamic programming.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from nothing for adults, through to object-oriented design, files and exceptions.' }
    ]
  },

  sections: [
    {
      id: 'cornwall', tint: '', eyebrow: 'Cornwall in figures',
      h2: '572,358 people, twenty-one towns, and none of them large',
      intro: 'Head counts for the two councils are Census 2021 figures published on Nomis. For the towns we list the ONS built-up areas and confirmed each one against small-area census counts we summed ourselves.',
      body: [
        { kind: 'table', caption: 'The councils of ceremonial Cornwall, usual residents at Census 2021', head: ['Council', 'Usual residents', 'Largest places'], rows: [
          ['Cornwall Council', '570,305', 'Newquay, St Austell, Falmouth, Truro, Camborne, Bodmin, Redruth'],
          ['Council of the Isles of Scilly', '2,053', 'St Mary\'s and the off-islands']
        ] },
        { kind: 'p', text: 'Most counties this size have a town of fifty or a hundred thousand at their heart. Cornwall does not. Its four biggest built-up areas, Newquay, St Austell, Falmouth and Truro, each hold between about 23,000 and 24,500 people, and the next dozen are smaller still. For a teenager keen on programming, that often means the nearest club with others at their level is an hour away, and on the Isles of Scilly it may be across the sea. A class that comes through the laptop makes the map irrelevant.' },
        { kind: 'table', caption: 'All twenty-one Cornish built-up areas above 5,000 residents at the 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Newquay', '24,545', 'Liskeard', '10,900'],
          ['St Austell', '24,360', 'Hayle', '9,040'],
          ['Falmouth', '24,070', 'Pool and Illogan', '8,585'],
          ['Truro', '23,060', 'Launceston', '8,425'],
          ['Camborne', '20,450', 'Bude', '7,350'],
          ['Bodmin', '16,910', 'Torpoint', '7,160'],
          ['Redruth', '15,455', 'St Blazey', '6,575'],
          ['Saltash', '15,435', 'Wadebridge', '5,625'],
          ['Penzance', '14,960', 'St Ives', '5,410'],
          ['Helston', '11,360', 'Looe', '5,310'],
          ['Penryn', '11,195', '', '']
        ] },
        { kind: 'p', text: 'Every row matches our own output-area count to within rounding, and every town lies wholly inside Cornwall. The Isles of Scilly have no built-up area over five thousand at all. We tried to read Cornwall Council\'s 2026-27 term dates and the address returned "not found", so we print none; lesson breaks are agreed with each family around the dates their school gives.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cornwall project',
      h2: 'Why Morse needs its silences, counted',
      intro: 'The Poldhu story, the international Morse timing rules, and a program that counts every possible misreading.',
      body: [
        { kind: 'p', text: 'The ITU\'s Morse recommendation sets the timing precisely: a dot is one unit, and "A dash is equal to three dots"; the gap inside a letter is one unit, between letters three, between words seven. The learner first writes an encoder and uses those rules to time every letter. E, a single dot, lasts one unit. J, Q and Y each last thirteen. S lasts five units with only three units of key-down time, while O, three dashes, lasts eleven with nine units of key-down. That difference is exactly the wear on Poldhu\'s switches that the Marconi Centre describes.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: how many ways each word can be read if the gaps between letters vanish', head: ['Word', 'Morse with no letter gaps', 'Possible readings', 'Work without memory'], rows: [
          ['SOS', '...---...', '192', '400 calls'],
          ['MARCONI', '--.-.-.-.-.----...', '59,364', '123,808 calls'],
          ['POLDHU', '.--.---.-..-........-', '524,361', '1,089,674 calls'],
          ['CORNWALL', '-.-.---.-.-..--.-.-...-..', '6,138,768', '12,759,484 calls']
        ] },
        { kind: 'p', text: 'Morse is not a prefix-free code: the code for E is the start of the code for S, and S is the start of H. So when the three-unit gaps between letters disappear, a stream of dots and dashes can be carved up in many different ways, each giving valid letters. The learner writes a recursive function that tries every way to take the first letter and then counts the readings of what is left. For CORNWALL there are 6,138,768 of them. The gaps are not decoration. They are the information that makes Morse readable at all.' },
        { kind: 'p', text: 'The last column is the programming lesson. The plain recursive count for CORNWALL makes 12,759,484 function calls, because it keeps re-solving the same tail of the message. Add a memory, so that each tail\'s answer is stored the first time and simply looked up after that, and the program meets only 26 distinct subproblems, one for each position in the 25-element signal plus the empty end. Same answer, a tiny fraction of the work. That trick, memoisation, turns up everywhere from spell checkers to route planners.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Write a Morse encoder with a Python dictionary, send your name, then time each letter using the dot, dash and gap rules.' },
          { h3: 'Ages 13 to 16', p: 'Write the recursive reading counter, reproduce 192 for SOS, and add a counter to see how many calls it makes for longer words.' },
          { h3: 'Ages 16 and up', p: 'Add memoisation, compare call counts, and prove why the memoised version does work proportional to the length of the signal.' }
        ] },
        { kind: 'callout', h3: 'Being fair to the choice of S', p: 'Our own check shows S is only one flipped, missing or extra element away from nine other letters, including I, H and U, so it is not the most distinctive letter in every sense. The Marconi Centre\'s reasons were specific: switch wear from dashes, and static that ran dots and dashes together. An engineering choice is robust against the failures its designers expected, and a good learner asks which failures those were.' }
      ]
    },
    {
      id: 'poldhu', tint: 'deep', eyebrow: 'Why Poldhu',
      h2: 'Three dots from the Lizard to Newfoundland',
      intro: 'The Cornwall link, from the Marconi Centre at Poldhu, run by the Poldhu Amateur Radio Club on behalf of the National Trust.',
      body: [
        { kind: 'table', caption: 'The Poldhu story, as the Marconi Centre tells it', head: ['Topic', 'What the centre says'], rows: [
          ['The site', 'Bought in 1900; built between October 1900 and January 1901.'],
          ['The signal', 'Poldhu was to send the Morse letter S, dot dot dot, daily from 3.00 pm to 6.00 pm GMT, 11.30 am to 2.30 pm in St John\'s.'],
          ['Why S', 'The switches could not stand the wear of long dashes, and static tended to run dots and dashes together.'],
          ['The day', 'On 12 December 1901 the three dots were heard at Signal Hill, St John\'s, Newfoundland.'],
          ['The transmitter', 'Roughly 13 kW, on a wavelength usually estimated at 366 metres.']
        ] },
        { kind: 'p', text: 'The centre points out that many people then believed radio waves could not follow the curve of the Earth, and that Poldhu\'s three dots proved otherwise. For a learner, the equally striking fact is how little was sent. One letter, repeated for hours, chosen for how it would survive the equipment and the weather. Choosing a representation that survives the conditions it will meet is the core of designing any code, from Morse to a QR code to a file format.' },
        { kind: 'p', text: 'We are not connected with the Marconi Centre, the Poldhu Amateur Radio Club, the National Trust, the ITU or Cornwall Council, and should not be taken to be. They supplied the history and the timing rules; the counting, and any slip in it, is our own.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-truro">Truro</a> has a page of its own about Cornish place names, <a class="cg-inline-link" href="/best-coding-class-in-plymouth">Plymouth</a> is just over the Tamar, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everything else.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Levels',
    h2: 'From secret codes to programs that remember',
    intro: 'The free lesson decides where to start. Year group is a guide; ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Codes and patterns', p: 'Scratch and puzzle projects that swap letters for symbols, where children first build a code and break it.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Dictionaries and strings', p: 'Python that translates text both ways, and the discovery that a program can check its own translations.', courses: ['python-ai-kids-masterclass', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Recursion and memory', p: 'Recursive functions, dynamic programming and the habit of counting work before and after an optimisation.', courses: ['competitive-programming-for-teens-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Python for real tasks', p: 'Adults learn Python properly, with files, text processing and the efficiency ideas that make scripts scale.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and old codes',
    h2: 'An AI can decode Morse instantly. Would it notice when the gaps are missing?',
    intro: 'It will usually pick one reading and present it confidently.',
    p1: 'Give a chatbot a string of dots and dashes and it will translate it. If the spacing is damaged, it will still produce an answer, usually the most familiar-looking word, without saying that the same signal has 192 or six million valid readings. That is the general risk with generated answers to ambiguous input: one plausible interpretation is returned, and the ambiguity disappears from view.',
    p2: 'A Cornish student who has counted the readings of CORNWALL knows to ask whether the input actually determines the output, and how many alternatives there are. That question matters well beyond Morse, in speech recognition, handwriting, search queries and every AI system that turns messy input into tidy text.',
    closer: 'So a Cornwall teenager should learn to code in 2026 to recognise when an answer only looks certain, a lesson that goes back to three dots heard off Newfoundland.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Bude to Penzance, and St Mary\'s too',
    intro: 'Cornwall is long and its towns are far apart. An online class treats them all as next door.',
    cells: [
      { h3: 'Taught at home', p: 'A bedroom in Wadebridge, a kitchen in Looe, a table in St Ives. The learner types; the teacher watches the same screen and steers.' },
      { h3: 'School terms you recognise', p: 'Year groups, GCSE options and A levels are called what Cornish schools call them, and teaching is in English.' },
      { h3: 'A free lesson first', p: 'A proper lesson with real work, then a straight recommendation. There is no card to enter.' },
      { h3: 'A group that fits', p: 'Between five and ten learners who can already do roughly what you can, gathered from far and wide so that one exists at your level.' },
      { h3: 'Term time, your way', p: 'Two lessons a week suits most learners, stopping when your own school stops, whoever sets its dates.' },
      { h3: 'UK time, clearly', p: 'Teachers work on India time, 4.5 hours ahead of UK summer time and 5.5 hours ahead of Greenwich Mean Time. We book everything in UK time.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'With no town above 25,000 and many small ones, a class built around one place would rarely fill at any single level. Level-based groups let a Bodmin learner and a Scilly learner share a class.' }
  },

  fees: {
    h2: 'Fees in Cornwall',
    intro: 'The same prices for every Cornish town, the islands included, and every country except India.',
    first: 'A full lesson of real work, ending with a recommended level and course.',
    group: 'About eight lessons a month, in a group of five to ten at the same level.',
    private: 'About eight lessons a month, one teacher for one learner.',
    closer: 'Outside India, prices are always quoted in US dollars, never pounds. No money changes hands until after the free lesson, when the course and a weekly time are agreed; how pauses, missed lessons and moves between group and private places work is explained on the pricing page.'
  },

  reviewsH2: 'From families, on Google',

  book: {
    h2: 'Your free first lesson',
    intro: 'All we ask for is an age or school year, and something the learner enjoys. The first lesson could be a secret-code puzzle, a first Python Morse translator, or the reading counter on this page.',
    success: 'Thank you. Your Cornwall request has reached us.'
  },

  faq: {
    h2: 'Cornwall questions',
    intro: 'The county, the Poldhu project and how lessons run.',
    items: [
      { q: 'How many people live in Cornwall?', a: 'Cornwall and the Isles of Scilly had 572,358 usual residents at the 2021 Census, from ONS figures on Nomis: 570,305 in Cornwall and 2,053 on the Isles of Scilly.' },
      { q: 'What is the largest town in Cornwall?', a: 'By ONS built-up area, Newquay at 24,545, just ahead of St Austell at 24,360, Falmouth at 24,070 and Truro at 23,060. No Cornish town reaches 25,000.' },
      { q: 'What is the Morse project?', a: 'Learners build a Morse encoder using the ITU timing rules, then count how many ways a word could be read if the gaps between letters were lost. CORNWALL has 6,138,768 readings, found with memoised recursion.' },
      { q: 'Why was the letter S sent from Poldhu?', a: 'The Marconi Centre says the switches at Poldhu could not stand the wear of long dashes, and static tended to run dots and dashes together, so three dots were the easiest signal to pick out.' },
      { q: 'When was the Poldhu signal received?', a: 'On 12 December 1901 at Signal Hill, St John\'s, Newfoundland. Poldhu had been told to send the letter S daily from 3.00 pm to 6.00 pm GMT.' },
      { q: 'Is there a classroom anywhere in Cornwall?', a: 'No. All lessons are live online, so a learner in Launceston and one in Penzance share a class without travelling.' },
      { q: 'What ages do you teach?', a: 'From six to sixty-seven. Puzzles and Scratch for young children, typed Python from about ten, algorithms and AI for teenagers, and Python or data routes for adults. The free lesson places each learner.' },
      { q: 'Do you teach algorithms and dynamic programming?', a: 'Yes. The teen competitive programming course covers recursion, backtracking, graphs and dynamic programming in Python or C++.' },
      { q: 'How much are lessons?', a: 'Nothing for the first. Continuing costs USD 100 a month in a small group or USD 150 a month one to one, and there is neither a sign-up charge nor a minimum commitment.' },
      { q: 'Can learners on the Isles of Scilly join?', a: 'Yes. Lessons need only a laptop and an internet connection, so the islands are no different from the mainland.' }
    ]
  },

  next: {
    eyebrow: 'Across the UK',
    h2: 'Pages beyond the Tamar',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-truro">Truro</a> has its own page, and <a class="cg-inline-link" href="/best-coding-class-in-plymouth">Plymouth</a> is the nearest city over the border. Other county pages include <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> and <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cornwall and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-truro', label: 'Truro' },
    { href: '/best-coding-class-in-plymouth', label: 'Plymouth' }
  ],

  personalityCss: `
.cg-root.cg-cnw .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-cnw .cg-hero h1 { font-weight: 800; letter-spacing: -0.027em; line-height: 1.02; }
.cg-root.cg-cnw .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-cnw .cg-eyebrow { letter-spacing: 0.25em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cnw .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-cnw .cg-table caption { font-style: italic; font-weight: 500; letter-spacing: 0.01em; }
.cg-root.cg-cnw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cnw .cg-table th { letter-spacing: 0.05em; text-transform: uppercase; }
.cg-root.cg-cnw .cg-ladder-col { border-left: 3px dotted var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-cnw .cg-callout { border-left-width: 5px; border-radius: 0 13px 13px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cornwall (ceremonial: Cornwall Council and the Council of the Isles of Scilly). ONS Census 2021 TS001 via Nomis: Cornwall 570,305; Isles of Scilly 2,053; total 572,358 (our sum). ONS Census 2021 built-up areas (published; all 21 above 5,000 agree with our OA sums and lie in Cornwall): Newquay 24,545; St Austell 24,360; Falmouth 24,070; Truro 23,060; Camborne 20,450; Bodmin 16,910; Redruth 15,455; Saltash 15,435; Penzance 14,960; Helston 11,360; Penryn 11,195; Liskeard 10,900; Hayle 9,040; Pool and Illogan 8,585; Launceston 8,425; Bude 7,350; Torpoint 7,160; St Blazey 6,575; Wadebridge 5,625; St Ives 5,410; Looe 5,310. Marconi Centre Poldhu (Poldhu Amateur Radio Club, on behalf of the National Trust), History of the Site: plot "bought in 1900, and construction work ran from October 1900 to January 1901"; "The transmitter operated with a power of roughly 13 kW and a wavelength usually estimated at 366 metres"; "On 12 December 1901, Guglielmo Marconi and his colleagues received an extremely short signal from Poldhu (three dots representing the code letter \'s\') whilst listening in at Signal Hill, St John\'s, Newfoundland"; "Poldhu had been instructed to transmit the Morse code letter \'S\' (dot, dot, dot) daily from 3.00 pm to 6.00 pm GMT (11.30 am to 2.30 pm, St John\'s local time)"; S chosen because "the switching arrangements at Poldhu on that occasion were unable to withstand the wear that a long series of dashes would have involved" and because atmospherics "tended to run all the dots and dashes into each other". ITU-R M.1677-1: "A dash is equal to three dots"; "The space between the signals forming the same letter is equal to one dot"; between two letters three dots; between two words seven dots.',
    localProject: 'Morse as a code that is not prefix-free, counted with memoisation. Durations in dot units (dot 1, dash 3, intra-letter gap 1): E 1; I and T 3; S 5 (key-down 3); O 11 (key-down 9); J, Q, Y 13. Dot-only letters E, I, S, H. Readings of a word with letter gaps removed, counting every split into valid letters: SOS 192 (plain recursion 400 calls); MARCONI 59,364 (123,808); POLDHU 524,361 (1,089,674); CORNWALL 6,138,768 (12,759,484 calls; memoised: 26 distinct subproblems for a 25-element signal plus the empty tail). S is one flip, drop or insertion from B, D, F, H, I, L, R, U, V. Illustration: at 0.1 s per dot (our assumption), S plus letter gap repeats 13,500 times in three hours. AI angle: a decoder returns one confident reading of ambiguous input. Lesson family: Morse and prefix-freeness, parse counting with memoisation; screened 26 September 2026.',
    requiredMentions: [
      '572,358',
      '6,138,768',
      '12,759,484',
      '524,361',
      '3.00 pm to 6.00 pm GMT',
      'A dash is equal to three dots',
      'Pool and Illogan',
      '24,545',
      'Signal Hill',
      '366 metres'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Cornwall and the Isles of Scilly, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Cornish towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Marconi Centre Poldhu, History of the Site: the S signal, its timing and the reasons for choosing it; 12 December 1901 at Signal Hill.', url: 'https://marconi-centre-poldhu.org.uk/about/history/' },
      { claim: 'Marconi Centre Poldhu: run by the Poldhu Amateur Radio Club on behalf of the National Trust; site bought in 1900.', url: 'https://marconi-centre-poldhu.org.uk/about/poldhu-site-and-marconi-centre/' },
      { claim: 'ITU-R Recommendation M.1677-1, International Morse code: dash equals three dots; spacing rules.', url: 'https://www.itu.int/rec/R-REC-M.1677-1-200910-I/' }
    ],
    rejectedClaims: [
      'Cornwall Council term dates: the URL tried returned 404 on 26 September 2026; none printed.',
      'Goonhilly Earth Station history: its history URL returned 404, so it is not mentioned.',
      'Whether the 1901 reception was genuine, a debate some historians raise: not read at a primary source for this build; the page reports the Marconi Centre\'s account.',
      'The actual keying speed at Poldhu: not stated on the pages read; the 0.1 second dot in the dossier is our assumption and is not on the page.',
      'Named Cornish schools: none is named.',
      'Cornish language data: identity-related figures are left out of place pages.'
    ]
  }
};
