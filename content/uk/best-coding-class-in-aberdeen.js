'use strict';
// Aberdeen (cg- city page, UK cluster Phase 4). Spine: a filter that can say no but never wrongly says never.
// Bloom filters over the named places of Aberdeen City in Ordnance Survey Open Names (CSV download from the OS
// Downloads API, read 21 September 2026; scratchpad abd/bloom.py, bloom2.py). Aberdeen City rows excluding
// postcodes: 3,324, of which 3,170 distinct; types include 2,916 named roads, 74 sections of named road, 52
// primary education, 42 suburban areas, 34 hills, 31 woodlands. Non-member pool: 8,588 named places from Glasgow,
// Edinburgh and Dundee. Bloom filter with double hashing (FNV-1a plus djb2), bits per name and k chosen as
// round(bits * ln 2): 4 bits (12,680 bits, k=3) 1,562 false positives, 18.19% against a theoretical 14.69%, 1.5 KB;
// 8 bits 5.09% against 2.16%, 3.1 KB; 10 bits 2.28% against 0.82%, 3.9 KB; 16 bits 0.33% against 0.05%, 6.2 KB.
// False negatives at every size: zero. A Python set of the same names uses about 300 KB. Measured rates run above
// theory because the names share endings and two 32-bit hashes are not the independent ideal the formula assumes.
// Lesson family: Bloom filters and probabilistic membership (one-sided error, bits per element, false positive
// rate against theory). Screened free site-wide on 21 September 2026 (bloom filter: 0 hits outside our own
// Southampton dossier note).
// Place facts read raw on 21 September 2026: National Records of Scotland, Scotland's Census 2022 rounded
// population estimates (published 14 September 2023, rounded to the nearest hundred): Aberdeen City S12000033
// 224,000 usual residents (2011: 222,793), 109,500 households (2011: 103,371), 18,900 aged 20 to 24 and 17,100
// aged 25 to 29, age shares 14.7% aged 0 to 14, 68.2% aged 15 to 64, 17.1% aged 65 and over (Scotland 15.3%, 64.6%,
// 20.1%), 1,207.1 residents per square kilometre (Scotland 69.8); Demography and migration chart data: 21.3% of
// households with dependent children. University of Aberdeen, History (founded 1495; King's College became the
// UK's fifth university, welcoming its first students in 1505; Marischal College founded 1593, its 1906 facade
// making it the second-largest granite building in the world; five Nobel laureates associated with the University,
// including Frederick Soddy, Chemistry 1921, and J J R Macleod, Medicine 1923, for the work leading to insulin).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'ABERDEEN', blurb: 'The Granite City, with a project that squeezes every named place in Aberdeen into six kilobytes and measures what that costs.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-aberdeen',
  code: 'abd',
  accent: '#222A39',
  accentRationale: 'Aberdeen: a granite slate blue from the solver (11.69:1 on every paper tint, dE 7.2 from the nearest used accent), cooler than the Newcastle royal blue and darker than the Glasgow Clyde blue',
  pageType: 'city',
  place: {
    name: 'Aberdeen',
    eyebrow: 'Aberdeen, Scotland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Aberdeen City' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Aberdeen, Scotland',
  title: 'Best Coding Classes in Aberdeen | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Aberdeen learners aged 6 to 67, from Old Aberdeen and Cults to Bridge of Don. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Aberdeen, on a page that packs every named place in the city into a few kilobytes with a Bloom filter and measures the cost.',
  twitterDescription: 'Aberdeen learners from six to sixty-seven can learn coding and AI with us live online, and the first lesson is free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Aberdeen Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, AI, data and mathematics taught live online in English to Aberdeen children, teenagers and adults, in level-based groups or one to one.'
  },

  h1: 'Coding classes in Aberdeen',
  capsuleQ: 'What are the best coding classes in Aberdeen?',
  capsule: 'Scotland\'s Census 2022 put about 224,000 usual residents in Aberdeen City, with 68.2% aged 15 to 64 against 64.6% across Scotland. The University of Aberdeen was founded in 1495, and its Marischal College gained the facade in 1906 that the University calls the second-largest granite building in the world. Modern Age Coders teaches Aberdeen learners aged six to sixty-seven live online, one to one or in groups of five to ten placed by level, with teachers based in India and lessons timed in UK hours. The first lesson is free of charge; after that a group place is USD 100 a month and private teaching USD 150 a month.',
  lead: 'Ordnance Survey\'s Open Names file lists 3,170 distinct named places inside Aberdeen City, from Union Street to Tullos Hill. Suppose a program has to answer one question very fast and very often: is this name in Aberdeen? Storing the names takes about 300 kilobytes. A Bloom filter answers the same question from 6.2 kilobytes, and it never once says no about a name that is really there. The catch is the other direction: asked about names from Glasgow, Edinburgh and Dundee, it wrongly said yes 28 times out of 8,588, a false positive rate of 0.33%. Shrink it to 1.5 kilobytes and that rate climbs to 18%. Understanding a structure whose errors only ever point one way, and choosing how much memory to trade for accuracy, is the lesson Aberdeen\'s place names give our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Aberdeen.',

  picks: {
    eyebrow: 'Course picks for Aberdeen',
    h2: 'Four courses for the Granite City',
    intro: 'Choose by what the learner enjoys. Every course opens with a free live lesson, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic and first programs, where a game of guessing which words are on a secret list makes the idea of a filter obvious.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first line to full projects, including the sets and dictionaries a filter is measured against.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Hash maps, sets and bit manipulation built from scratch, the parts a Bloom filter is assembled from.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Interview-standard data structures for adults, including the memory and accuracy trade-offs behind probabilistic structures.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Aberdeen today',
      h2: 'A working-age city on the north-east coast',
      intro: 'Figures from National Records of Scotland\'s first results for the 2022 census. Counts are rounded to the nearest hundred and printed as released.',
      body: [
        { kind: 'table', caption: 'Aberdeen City council area, Scotland\'s Census 2022', head: ['Measure', 'Aberdeen', 'Scotland'], rows: [
          ['Usual residents, rounded', '224,000', '5,436,600'],
          ['Usual residents in 2011', '222,793', 'Not compared'],
          ['Households, rounded', '109,500', 'Not compared'],
          ['Households in 2011', '103,371', 'Not compared'],
          ['Aged 20 to 24, rounded', '18,900', '337,000'],
          ['Share aged 15 to 64', '68.2%', '64.6%'],
          ['Share aged 65 and over', '17.1%', '20.1%'],
          ['Residents per square kilometre', '1,207.1', '69.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Working age', p: 'People aged 15 to 64 made up 68.2% of Aberdeen\'s residents in 2022, above Scotland\'s 64.6%, while 17.1% were 65 or over against 20.1%.' },
          { h3: 'More homes than before', p: 'Households rose to about 109,500 from 103,371 in 2011, a faster change than the population, which moved from 222,793 to about 224,000.' },
          { h3: 'Compact city', p: 'At 1,207.1 residents per square kilometre, Aberdeen is far denser than the Scottish average of 69.8, though well below Glasgow.' }
        ] },
        { kind: 'p', text: 'National Records of Scotland also reports that 21.3% of Aberdeen households had dependent children in 2022. Our learners here range across every stage: a P4 pupil in Cults making a first animation, an S4 student in Bridge of Don working towards National 5 Computing Science, or someone in their twenties in Torry learning Python for work, each in a group of five to ten at their own level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Granite and learning',
      h2: 'A university from 1495 and a building of granite',
      intro: 'From the University of Aberdeen\'s own history.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1495', p: 'The University says it was founded that year, and that King\'s College became the UK\'s fifth university, welcoming its first students in 1505.' },
          { h3: '1593', p: 'Marischal College was founded. Its medieval buildings were mostly replaced in the 1830s, and the University says its 1906 facade makes it the second-largest granite building in the world.' },
          { h3: 'Five laureates', p: 'The University counts five Nobel laureates among those associated with it, including Frederick Soddy, Chemistry in 1921, and J J R Macleod, Medicine in 1923, for the research leading to insulin.' }
        ] },
        { kind: 'p', text: 'We have no connection with the University of Aberdeen. We tell its story because this is a city that has been recording, naming and measuring things for five centuries, and the project on this page is about doing that economically: how few bits can hold the name of every road, school, hill and suburb in Aberdeen and still answer questions about them.' },
        { kind: 'spec', title: 'Where the names come from', p: 'Ordnance Survey publishes Open Names as free data under the Open Government Licence. Filtered to Aberdeen City and with postcodes left out, it lists 3,324 named features, 3,170 of them distinct: 2,916 named roads, 74 sections of road, 52 primary schools, 42 suburban areas, 34 hills and more besides.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Every place name in Aberdeen, in six kilobytes',
      intro: 'A Bloom filter stores a set as a wall of bits. It can say a name is definitely absent, or probably present, and it is never wrong in the first direction.',
      body: [
        { kind: 'table', caption: 'A Bloom filter holding Aberdeen\'s 3,170 named places, tested against 8,588 names from Glasgow, Edinburgh and Dundee', head: ['Bits per name', 'Memory', 'False positives', 'Measured rate', 'Textbook rate'], rows: [
          ['4', '1.5 KB', '1,562', '18.19%', '14.69%'],
          ['8', '3.1 KB', '437', '5.09%', '2.16%'],
          ['10', '3.9 KB', '196', '2.28%', '0.82%'],
          ['16', '6.2 KB', '28', '0.33%', '0.05%'],
          ['A plain set of the same names', 'about 300 KB', '0', '0%', 'Not applicable']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Hash to bits', p: 'Each name is turned into several positions in a long row of bits, and those bits are switched on. Nothing else is stored: the names themselves are never kept.' },
          { h3: '2. Ask a question', p: 'To test a name, look at the same positions. If any bit is off, the name was certainly never added. If all are on, it is probably present, and might be a collision.' },
          { h3: '3. Measure both errors', p: 'Every one of the 3,170 real names was found, at every size: not a single false negative. The false positives were counted against names from three other cities.' }
        ] },
        { kind: 'callout', h3: 'Errors that only point one way', p: 'A Bloom filter cannot lose a name. If it says no, the answer is certain, which is why real systems use one as a cheap first gate: a browser checking a web address against a huge list, a database avoiding a slow disk read, a spellchecker holding a dictionary in a fraction of the memory. Whatever it lets through is checked properly afterwards, so a false positive costs time, never correctness.' },
        { kind: 'p', text: 'The measured rates sit above the textbook formula, and the reason is worth more than the formula. The standard equation assumes perfectly independent, evenly spread hash values. Real place names share endings, hundreds of them finishing in Street, Road, Place or Crescent, and our two 32-bit hashes are not the ideal the theory imagines. A learner who only quotes the formula reports 0.05% when the honest answer, measured on real names, is 0.33%.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Trading memory for certainty',
      h2: 'Five habits for probabilistic data structures',
      intro: 'Learned on place names, used afterwards on caches, spam filters, duplicate detection, blocklists and any system too big to hold exactly.',
      body: [
        { kind: 'table', caption: 'Using a Bloom filter responsibly', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Know which error is possible', 'State plainly that false positives happen and false negatives cannot', 'Treating a probable yes as a certain one'],
          ['Size it for the data', 'Choose bits per element and hash count together, not separately', 'A filter that is either huge or useless'],
          ['Measure on real keys', 'Test with names from outside the set, not random strings', 'A rate that only holds for tidy made-up data'],
          ['Check it back', 'Send every probable yes to the exact lookup behind it', 'A wrong answer reaching the user'],
          ['Say what you cannot do', 'Remember you cannot list the contents or remove an item', 'Designing a feature the structure cannot support']
        ] },
        { kind: 'p', text: 'The last habit surprises people. Because only bits are stored, a Bloom filter cannot tell you what is inside it, and removing a name would switch off bits that other names rely on. That is the price of the compression, and it is why learners build one and a plain set side by side, then decide which the job actually needs.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A row of boxes ticked by a simple rule, and the discovery that two different words can tick exactly the same boxes.' },
          { h3: 'Teenagers', p: 'The Open Names file filtered to Aberdeen in Python, a Bloom filter written with bit operations, and both error rates measured against theory.' },
          { h3: 'Adults', p: 'Caches, deduplication and membership tests at work, sized deliberately and always checked against the exact source.' }
        ] },
        { kind: 'p', text: 'We are not connected with Ordnance Survey, National Records of Scotland or the University of Aberdeen. Open Names is published under the Open Government Licence and the census figures are public; the filters, counts and rates are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From ticking boxes to a Bloom filter',
    intro: 'The age bands are a rough guide; the free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Ticks and guesses', p: 'Marking boxes by a rule, spotting when two words mark the same ones, and seeing why that causes a wrong yes.', courses: ['problem-solving-and-computational-thinking-for-kids', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Sets and membership', p: 'Storing words in a list and then a set, timing the difference and counting the memory used.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Bloom filters in Python', p: 'Bit operations, several hashes per key, and both kinds of error measured on real place names.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Memory budgets at work', p: 'Probabilistic structures in databases, caches and pipelines, chosen with their guarantees understood.', courses: ['data-structures-algorithms-masterclass-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A computer can hold every place name in Britain. Why should an Aberdeen teenager build a Bloom filter?',
    intro: 'Because scale turns memory into a design decision, and the trade needs understanding.',
    p1: 'On a laptop, 300 kilobytes is nothing, and an AI assistant will rightly suggest a set. Multiply by every name in the country, or by every address a service has seen, and the same question gets expensive. A learner who has built a Bloom filter knows what can be given up safely, what cannot, and how to measure the difference rather than guess it.',
    p2: 'These structures also sit inside the systems that train and serve AI. Huge text collections are deduplicated with hashing filters, databases skip disk reads with them, and network services screen requests with them before doing real work. They are a clear, small example of the rule that runs through the whole field: you can buy speed and space with a little uncertainty, provided you know exactly which way the uncertainty points.',
    closer: 'So an Aberdeen teenager should still learn to program in 2026, in a city that has been naming and measuring itself since 1495: the interesting questions are no longer whether a computer can store something, but what it costs and what it gives up.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Old Aberdeen, Cults or Bridge of Don, from home',
    intro: 'Aberdeen weather makes a short journey feel long; a live online lesson removes it.',
    cells: [
      { h3: 'North or south of the Dee', p: 'A learner in Dyce and another in Kincorth can share one lesson without either crossing the city.' },
      { h3: 'Primary, secondary and national levels', p: 'Primary 1 to 7, S1 to S6, then National 5, Higher and Advanced Higher: lessons use the names Aberdeen schools use, and teaching is in English.' },
      { h3: 'A first lesson that teaches', p: 'The free session covers a real task and ends by recommending a level, a course and a weekly time. No card details are needed.' },
      { h3: 'Matched by level', p: 'Groups of five to ten learners at the same stage, drawn from Aberdeen, elsewhere in Britain and overseas, so every level finds a workable hour.' },
      { h3: 'Two lessons each week', p: 'A fixed pair of weekly slots, roughly eight lessons a month, with holiday and exam breaks agreed with the teacher in advance.' },
      { h3: 'India keeps one clock', p: 'India Standard Time never shifts, so Aberdeen runs four and a half hours behind it in British Summer Time and five and a half behind in winter, which keeps after-school and evening lessons inside the teaching day.' }
    ],
    spec: { title: 'Across the north east', p: 'Families in Westhill, Inverurie or Stonehaven join exactly the same groups, because every lesson is online and groups are formed by level rather than address.' }
  },

  fees: {
    h2: 'Aberdeen lesson fees',
    intro: 'A free first lesson, then one monthly price.',
    first: 'A complete lesson at no cost, ending with a level, a recommended course and a proposed weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners at one level.',
    private: 'About eight live lessons a month with a teacher working only with your learner.',
    closer: 'Every family outside India pays the same US dollar fee, so Rosemount and Mannofield pay alike, and we publish no prices in pounds. Nothing is billed until the free lesson has settled a course and a slot; the pricing page covers pauses, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families, printed as written',

  book: {
    h2: 'Book a free lesson for an Aberdeen learner',
    intro: 'We pick the first task by level: a box-ticking guessing game for a young child, a first Python program that uses a set, or the Open Names file and a Bloom filter for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange an Aberdeen lesson.'
  },

  faq: {
    h2: 'Aberdeen coding class questions',
    intro: 'What Aberdeen families ask us most.',
    items: [
      { q: 'How many people live in Aberdeen?', a: 'Scotland\'s Census 2022 counted about 224,000 usual residents in Aberdeen City, rounded to the nearest hundred, compared with 222,793 in 2011, in about 109,500 households.' },
      { q: 'How does Aberdeen compare with Scotland?', a: 'In 2022, 68.2% of Aberdeen residents were aged 15 to 64 against 64.6% nationally, 17.1% were 65 or over against 20.1%, and there were 1,207.1 residents per square kilometre against 69.8.' },
      { q: 'What is a Bloom filter?', a: 'A compact way of testing whether something is in a set. It can answer definitely not, or probably yes, using only a row of bits, and it never mistakenly says no about something that was added.' },
      { q: 'How small can it be?', a: 'Aberdeen\'s 3,170 named places fit in 6.2 kilobytes with a false positive rate of 0.33% in our test, or 1.5 kilobytes at 18%. A plain set of the same names uses about 300 kilobytes.' },
      { q: 'Where do the place names come from?', a: 'Ordnance Survey Open Names, published as free data under the Open Government Licence. Filtered to Aberdeen City and excluding postcodes, it lists 2,916 named roads among 3,170 distinct names.' },
      { q: 'How old is the University of Aberdeen?', a: 'The University says it was founded in 1495, with King\'s College welcoming its first students in 1505, and it counts five Nobel laureates among those associated with it. We are not connected with the University.' },
      { q: 'When are Aberdeen lessons held?', a: 'Weekday afternoons and evenings or weekends, at a UK time agreed during the free lesson. India runs 4.5 hours ahead of Aberdeen in summer and 5.5 hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in Aberdeen?', a: 'No. There is no Aberdeen centre and no premises anywhere in the UK; every lesson is taught live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Aberdeen lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Aberdeen groups formed?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group meets at a suitable time, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Scotland and the UK',
    h2: 'Scottish pages and other cities',
    html: 'South along the coast, the <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh page</a> works out why its summer nights stay pale, and <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> measures its boundary with eight rulers. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland guide</a> covers the Curriculum for Excellence, with exam help on the <a class="cg-inline-link" href="/national-5-computing-science-help">National 5</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Aberdeen and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-abd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.55rem); }
.cg-root.cg-abd .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-abd .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-abd .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-abd .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.016em; }
.cg-root.cg-abd .cg-grid-3 { gap: clamp(1.05rem, 2.5vw, 2.15rem); }
.cg-root.cg-abd .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-abd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-abd .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-abd .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Aberdeen, National Records of Scotland, Scotland\'s Census 2022 first results rounded population estimates (published 14 September 2023, rounded to the nearest hundred): Aberdeen City S12000033 224,000 usual residents (2011: 222,793), 109,500 households (2011: 103,371), 18,900 aged 20 to 24 and 17,100 aged 25 to 29, 14.7 percent aged 0 to 14, 68.2 percent aged 15 to 64, 17.1 percent aged 65 and over (Scotland 15.3, 64.6, 20.1), 1,207.1 residents per square kilometre (Scotland 69.8); Demography and migration chart data: 21.3 percent of households with dependent children. University of Aberdeen, History: founded 1495; King\'s College the UK\'s fifth university, first students 1505; Marischal College founded 1593, its 1906 facade the second-largest granite building in the world; five Nobel laureates associated with the University, including Frederick Soddy (Chemistry 1921) and J J R Macleod (Medicine 1923, insulin).',
    localProject: 'Every place name in Aberdeen, in six kilobytes. Ordnance Survey Open Names (CSV, OS Downloads API, read 21 September 2026), Aberdeen City rows excluding postcodes: 3,324 features, 3,170 distinct (2,916 named roads, 74 road sections, 52 primary education, 42 suburban areas, 34 hills, 31 woodlands). Bloom filter with double hashing (FNV-1a and djb2), k = round(bits x ln 2), tested against 8,588 names from Glasgow, Edinburgh and Dundee: 4 bits 18.19 percent false positives against a theoretical 14.69 (1.5 KB); 8 bits 5.09 against 2.16 (3.1 KB); 10 bits 2.28 against 0.82 (3.9 KB); 16 bits 0.33 against 0.05 (6.2 KB). Zero false negatives at every size; a Python set of the same names is about 300 KB. Measured rates exceed theory because names share endings and two 32-bit hashes are not independent ideals. Lesson family: Bloom filters and probabilistic membership; distinct from hash tables with chaining, tries and binary search.',
    requiredMentions: [
      '224,000',
      '222,793',
      '109,500',
      '103,371',
      '1,207.1',
      '18,900',
      'Bloom filter',
      'Marischal',
      'false negative',
      'Open Names',
      '2,916',
      'Soddy'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates: Aberdeen City population, households, age shares, density.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 demography and migration chart data: households with dependent children.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-demography-and-migration-chart-data/' },
      { claim: 'Ordnance Survey Open Names (CSV download): named features with council area, used for the Aberdeen name set.', url: 'https://api.os.uk/downloads/v1/products/OpenNames/downloads' },
      { claim: 'University of Aberdeen, History: 1495, King\'s College 1505, Marischal College 1593 and its 1906 facade, five Nobel laureates.', url: 'https://www.abdn.ac.uk/about/history/' }
    ],
    rejectedClaims: [
      'Aberdeen City Council open data: the portal did not respond, so nothing from it is used.',
      'Postcodes: excluded from the name set, so this page does not repeat the Southampton postcode work.',
      'The textbook false positive formula as the answer: the page reports measured rates and explains why they are higher.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, National Records of Scotland or the University of Aberdeen.'
    ]
  }
};
