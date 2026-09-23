'use strict';
// Salisbury (cg- city page, UK cluster Phase 4). Spine: find a sentence in Magna Carta without reading every letter.
// Rabin-Karp rolling-hash string search and word shingles on the Avalon Project's English translation of Magna Carta
// 1215 (Yale Law School, medieval/magna.asp, read 23 September 2026; scratchpad sal/rk.py). Preamble, 63 clauses and
// closing: 4,871 words, 993 distinct; 27,150 characters after lower-casing and collapsing spaces. Five-word windows
// 4,867; distinct five-word phrases 4,726; 128 repeat. Most repeated: "the five and twenty barons" 4; "the law of the
// land" 3; "lawful judgment of his peers" 3; "us and our heirs forever" 3. Clause 40 in Avalon: "To no one will we sell,
// to no one will we refuse or delay, right or justice" (75 characters as searched): found at character 13,980; naive
// search 29,146 character comparisons; Rabin-Karp (base 256, modulus 2^61-1) 1 hash match, 75 characters checked;
// hashing every window from scratch 27,076 x 75 = 2,030,700 character operations against 75 + 2 x 27,075 = 54,225 for
// the rolling update. Salisbury Cathedral's quotation of Clause 40, "To no one will we sell, to no one deny or delay
// right or justice": not found by exact search; word 3-shingles 9 of 12 shared (Jaccard 0.60), 2-shingles 0.71,
// 4-shingles 0.50. The preamble names "William, earl of Salisbury".
// Lesson family: string search with rolling hashes (Rabin-Karp) and shingling for near-duplicate text. Screened 23
// September 2026: Rabin-Karp, rolling hash 0 hits; distinct from Southampton hash tables (lookup, chaining, birthday
// collisions), which is why no collision table is shown here.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Wiltshire E06000054: TS001 510,333 usual residents,
// 498,138 in households, 12,195 communal; TS007A 24,238 aged 20 to 24 (4.7 percent, England 6.0), 29,911 aged 70 to 74
// (5.9, England 5.0); TS068 84,967 students of 484,705 aged 5 and over (17.5 percent, England 20.4); TS006 156.8 per
// square km (England 433.5). Salisbury MSOAs (House of Commons Library names): Bishopsdown 6,868; Bemerton 7,623;
// Stratford 5,889; Churchfields 6,905; Town North and Milford 6,156; Cathedral and Harnham 5,038 (13.7 percent students,
// 2,464.8 per square km); East Harnham 6,048. Salisbury Cathedral, Magna Carta page: one of only four surviving
// original documents from 1215; agreed by King John on 15 June 1215; delivered to the first Salisbury Cathedral at Old
// Sarum in 1215, probably by Elias Dereham, who later became a priest at Salisbury Cathedral and oversaw the building of
// the current cathedral from 1220; the others are held in the British Library and Lincoln Castle. NHLE: Cathedral
// Church of St Mary 1023581, Grade I, listed 28 February 1952; Old Sarum scheduled monument 1015675, scheduled 7 August
// 1916.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'SALISBURY', blurb: 'The city of a 1215 Magna Carta, with a project that finds any sentence in the charter without reading every letter.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-salisbury',
  code: 'sal',
  accent: '#5C1F31',
  accentRationale: 'Salisbury: a sealing-wax crimson for the charter\'s seal, from the solver (10.05:1 on every paper tint, dE 7.3 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Salisbury',
    eyebrow: 'Salisbury, Wiltshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Wiltshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Salisbury, England',
  title: 'Best Coding Classes in Salisbury | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Salisbury learners aged 6 to 67, from Harnham and Bemerton to Laverstock. The first lesson is free of charge.',
  ogDescription: 'Coding and AI lessons for Salisbury, on a page where learners search Magna Carta with a rolling hash and discover why two translations will not match.',
  twitterDescription: 'Salisbury learners aged six to sixty-seven can study coding, Python and AI with us in live online lessons. We never charge for the first one.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Salisbury Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, text search, AI and mathematics taught live online in English to Salisbury children, teenagers and adults, one to one or in small groups by level.'
  },

  h1: 'Coding classes in Salisbury',
  capsuleQ: 'What are the best coding classes in Salisbury?',
  capsule: 'Wiltshire, the council area that includes Salisbury, had 510,333 usual residents at the 2021 census, at 156.8 people per square kilometre against 433.5 for England. Salisbury Cathedral says its Magna Carta is one of only four surviving original documents from 1215, delivered to the first cathedral at Old Sarum. We teach Salisbury learners aged six to sixty-seven from India in live video lessons, one to one or in a group of five to ten at the same level, at times that fit the UK day. The first lesson is free; after that a group place costs USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Magna Carta runs to 4,871 words in the Avalon Project\'s English translation. How does a computer find one sentence in it quickly? Our teenagers build Rabin-Karp search, which gives every stretch of text a number, a hash, and slides that number along one letter at a time instead of recalculating it. To find Clause 40, "to no one will we sell", the rolling hash does about 54,000 small steps where recalculating every window would take over two million. Then comes the twist. Salisbury Cathedral quotes the same clause as "to no one deny or delay", a different translation, and exact search finds nothing at all. Measuring overlapping three-word pieces shows the two versions share 9 of 12.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Salisbury.',

  picks: {
    eyebrow: 'Course picks for Salisbury',
    h2: 'Four courses for the cathedral city',
    intro: 'Start from what the learner already enjoys. A free live lesson opens each course, and no card details are needed to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, the first step before programs that hunt for a word in a story.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first program to full projects, enough to load a historic text and search it with your own algorithm.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning for teenagers, where splitting text into small overlapping pieces is where language models begin.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who search and compare documents, from contracts to reports that were copied with small changes.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Salisbury today',
      h2: 'A cathedral city in a large rural county',
      intro: 'Census 2021 figures for the Wiltshire unitary authority and for the middle-layer areas of Salisbury named by the House of Commons Library, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Wiltshire and seven Salisbury areas, Census 2021, usual residents', head: ['Area', 'Usual residents'], rows: [
          ['Wiltshire', '510,333'],
          ['Salisbury Bishopsdown', '6,868'],
          ['Salisbury Bemerton', '7,623'],
          ['Salisbury Stratford', '5,889'],
          ['Salisbury Churchfields', '6,905'],
          ['Salisbury Town North and Milford', '6,156'],
          ['Salisbury Cathedral and Harnham', '5,038'],
          ['Salisbury East Harnham', '6,048']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Older than average', p: 'Across Wiltshire, people aged 70 to 74 were 5.9% of residents in 2021, above England\'s 5.0%, while those aged 20 to 24 were 4.7%, against 6.0%.' },
          { h3: 'In education', p: 'Of Wiltshire\'s 484,705 residents aged five and over, 84,967 were students, 17.5%, a little below the national 20.4%.' },
          { h3: 'Around the Close', p: 'The area named Salisbury Cathedral and Harnham had 5,038 residents at 2,464.8 people per square kilometre, far denser than the county\'s 156.8.' }
        ] },
        { kind: 'p', text: 'Our Salisbury classes bring together learners from all over the city. A Year 2 child in Bishopsdown might be making a first animation, a Year 11 student in Bemerton preparing GCSE Computer Science, and an adult in Laverstock learning Python for work, each placed in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Magna Carta',
      h2: 'A charter carried to Old Sarum',
      intro: 'From Salisbury Cathedral\'s own Magna Carta page, the charter\'s text, and Historic England\'s open data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '15 June 1215', p: 'Salisbury Cathedral says King John agreed Magna Carta on this day to make peace with a group of barons and church leaders. The charter itself lists "William, earl of Salisbury" among those on whose advice the king acted.' },
          { h3: 'Old Sarum', p: 'The cathedral\'s copy was delivered to the first Salisbury Cathedral at Old Sarum, probably by Elias Dereham. Historic England schedules Old Sarum as an ancient monument.' },
          { h3: 'From 1220', p: 'Elias Dereham later became a priest at Salisbury and oversaw the building of the present cathedral from 1220 onwards. Historic England lists the Cathedral Church of St Mary at Grade I.' }
        ] },
        { kind: 'p', text: 'The cathedral names the other surviving 1215 originals as those held by the British Library and Lincoln Castle. We have no connection with Salisbury Cathedral, Wiltshire Council, the Avalon Project or Historic England. Magna Carta belongs on this page because it is a real document with 63 clauses, famous phrases and more than one English translation, which is exactly what makes searching it interesting.' },
        { kind: 'spec', title: 'Where the text comes from', p: 'The Avalon Project at Yale Law School publishes an English translation of the 1215 Magna Carta online, clause by clause. The original is in Latin; every English version is someone\'s translation, and translations differ.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can you find a sentence without reading every letter?',
      intro: 'Rabin-Karp search turns each stretch of text the length of the target into a number, and only compares letters when the numbers match. The trick is updating that number as the window slides, instead of starting again.',
      body: [
        { kind: 'table', caption: 'Searching the Avalon translation of Magna Carta 1215 (27,150 characters) for Clause 40 as Avalon words it (75 characters)', head: ['Method', 'Work done', 'Result'], rows: [
          ['Check every position letter by letter', '29,146 character comparisons', 'Found at character 13,980'],
          ['Hash every window from scratch', '2,030,700 character operations', 'Found, but slowly'],
          ['Rolling hash (Rabin-Karp)', '54,225 character operations, then 75 checked', 'Found, one hash match'],
          ['Exact search for the cathedral\'s wording', 'Same work', 'Not found: different translation']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Clean the text', p: 'Take the preamble, the 63 clauses and the closing from the Avalon page, lower-case everything and collapse spaces, leaving 4,871 words and 27,150 characters.' },
          { h3: '2. Roll the hash', p: 'Treat the 75-character window as a number in base 256. To slide it, remove the leftmost letter\'s share, multiply by 256 and add the new letter. Each slide is a handful of sums.' },
          { h3: '3. Check before you believe', p: 'Two different strings can share a hash, so every match is confirmed letter by letter. Here the one match was real: the 75 letters at position 13,980 are Clause 40.' }
        ] },
        { kind: 'callout', h3: 'Same clause, different words', p: 'Salisbury Cathedral quotes Clause 40 as "To no one will we sell, to no one deny or delay right or justice". The Avalon translation reads "To no one will we sell, to no one will we refuse or delay, right or justice". Exact search, however fast, finds nothing. Break both into overlapping three-word pieces, called shingles, and 9 of the 12 match; with two-word pieces the overlap is 0.71, with four-word pieces 0.50. Fast exact matching and forgiving fuzzy matching answer different questions.' },
        { kind: 'p', text: 'Shingles also show what the charter repeats. Of 4,726 different five-word phrases, 128 occur more than once. The most repeated is "the five and twenty barons", four times, followed by "the law of the land" and "lawful judgment of his peers", three times each, both phrases from Clause 39.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Searching text',
      h2: 'Five questions before searching any document',
      intro: 'Learned on Magna Carta, then used in search boxes, plagiarism checkers, DNA matching, spam filters and tools that spot copied code.',
      body: [
        { kind: 'table', caption: 'Choices behind a text search', head: ['Question', 'For Magna Carta', 'What goes wrong if you skip it'], rows: [
          ['Which version of the text?', 'The Avalon English translation, named', 'Searching one translation for another\'s words'],
          ['Exact or approximate?', 'Exact for Clause 40, shingles for comparison', 'A near-match reported as no match'],
          ['What counts as the same letter?', 'Lower case, spaces collapsed', 'Capitals and line breaks hiding real matches'],
          ['Is every hash match checked?', 'Yes, letter by letter', 'A false match reported as found'],
          ['How long a shingle?', 'Three words, with two and four for comparison', 'An overlap score that depends on an unstated choice']
        ] },
        { kind: 'p', text: 'The last row is a real judgement. Short shingles make almost any two texts look alike; long ones miss sentences with a single word changed. Reporting the scores at more than one length, as the callout does, lets a reader see how much the choice matters.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Hunting for a word in a page by sliding a paper window along each line, and counting how many letters they check.' },
          { h3: 'Teenagers', p: 'Naive search and Rabin-Karp in Python on the full charter, then shingles to compare two translations of the same clause.' },
          { h3: 'Adults', p: 'Searching and comparing documents at work, with the version, matching rules and thresholds stated alongside every result.' }
        ] },
        { kind: 'p', text: 'We are not connected with Salisbury Cathedral, the Avalon Project, Wiltshire Council or Historic England. The translation is published online and the census and listing data are open; the searches, counts and overlap scores on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a paper window to Rabin-Karp',
    intro: 'Age bands are a rough guide; the free lesson shows where to start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Finding words', p: 'Sliding a paper window across a page to find a hidden word, and counting the letters checked on the way.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Search in code', p: 'Writing a Python loop that finds a word in a paragraph, then counting how much work it does.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Rolling hashes', p: 'Rabin-Karp on the whole charter, verified matches, and shingles to compare two translations.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Documents at work', p: 'Finding exact and near matches in real document collections, with every matching rule written down.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can quote any document. Why should a Salisbury teenager search Magna Carta by hand?',
    intro: 'Because quoting is only trustworthy when you can check the quote against a named text.',
    p1: 'AI tools often produce quotations that sound right but come from a different translation, or from no text at all. A learner who has seen Clause 40 fail an exact search because two translations differ by a few words knows to ask which version a quote comes from, and knows how to check it in seconds.',
    p2: 'Shingles are also how many systems spot copied or near-copied text, including checks for AI-generated content and duplicated training data. Building the idea on a famous 1215 document, with numbers a learner can verify, makes a powerful technique feel simple.',
    closer: 'So a Salisbury teenager should keep learning to code in 2026, in the city that keeps a 1215 Magna Carta: machines can search millions of pages, but someone has to know which words they are really looking for.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Harnham, Stratford or Wilton, and nowhere to travel',
    intro: 'Salisbury sits at the centre of a wide rural area. Online, a learner in a Wiltshire village is exactly as close to the lesson as one beside the Close.',
    cells: [
      { h3: 'City and villages together', p: 'A learner in Churchfields and another in Wilton can take the same class with no drive into the city centre.' },
      { h3: 'English school stages', p: 'Lessons follow the stages Wiltshire schools use, from Reception and Key Stages 1 to 4 to GCSE and A level, taught in English.' },
      { h3: 'A real first lesson', p: 'The free session is a proper lesson on a real task, ending with a suggested level, course and weekly slot. No card is asked for.' },
      { h3: 'Classes by stage', p: 'Five to ten learners at one level, from Salisbury, the rest of the UK and abroad, so every stage has workable times.' },
      { h3: 'Twice a week', p: 'Two regular lessons each week, about eight a month, with holidays and exam weeks agreed with the teacher in advance.' },
      { h3: 'After school here, evening there', p: 'A 4 pm lesson in Salisbury begins at 8.30 pm in India in British Summer Time and 9.30 pm in winter, as India keeps a single time all year; our teachers work evenings for UK learners.' }
    ],
    spec: { title: 'Across south Wiltshire and beyond', p: 'Families in Amesbury, Warminster, Andover or Romsey join exactly the same classes, since every group is online and set by level.' }
  },

  fees: {
    h2: 'Salisbury lesson fees',
    intro: 'A free lesson to begin, then one fee each month.',
    first: 'A complete lesson free of charge, ending with advice on level, course and a weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'About eight live lessons a month, with your learner having the teacher to themselves.',
    closer: 'A family in Milford or Churchfields pays in US dollars, like every family outside India, and there are no pound prices anywhere on our site. The free lesson always comes first, and charges start only when the course and weekly time are agreed; the pricing page covers pausing, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families, reproduced as written',

  book: {
    h2: 'Book a free lesson for a Salisbury learner',
    intro: 'The first task suits the learner: a hunt-the-word game for a young child, a short Python loop that finds a word in a paragraph for a beginner, or the full text of Magna Carta and a rolling hash for a teenager ready for real text.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Salisbury learner.'
  },

  faq: {
    h2: 'Salisbury coding class questions',
    intro: 'What Salisbury families most often ask.',
    items: [
      { q: 'How many people live in and around Salisbury?', a: 'Census 2021 counted 510,333 usual residents in Wiltshire, the council area that includes Salisbury, 498,138 of them living in households. The city\'s middle-layer areas range from 5,038 residents in Salisbury Cathedral and Harnham to 7,623 in Salisbury Bemerton.' },
      { q: 'How does Wiltshire compare with England?', a: 'It is rural and older than average: 156.8 residents per square kilometre against 433.5, and 5.9% of residents aged 70 to 74 against 5.0%. People aged 20 to 24 were 4.7%, below England\'s 6.0%.' },
      { q: 'What is Rabin-Karp search?', a: 'A way of finding a piece of text by giving each window of the same length a number, a hash, and updating that number as the window slides one letter along. Letters are compared only when the numbers match, and every match is checked.' },
      { q: 'Why did the cathedral\'s quotation of Clause 40 not match?', a: 'Because it comes from a different English translation. Salisbury Cathedral quotes "to no one deny or delay right or justice"; the Avalon Project translation says "to no one will we refuse or delay, right or justice". Exact search finds nothing, but 9 of the 12 three-word pieces are shared.' },
      { q: 'Where does the text come from?', a: 'From the Avalon Project at Yale Law School, which publishes an English translation of the 1215 Magna Carta clause by clause. We lower-cased it and collapsed the spacing before searching.' },
      { q: 'Why does Salisbury have a Magna Carta?', a: 'Salisbury Cathedral says its copy is one of only four surviving originals from 1215 and was delivered to the first cathedral at Old Sarum, probably by Elias Dereham. We are not connected with the cathedral.' },
      { q: 'When are Salisbury lessons held?', a: 'On weekday afternoons, weekday evenings or at weekends, at a UK time chosen together in the free lesson. India runs four and a half hours ahead of Salisbury in summer and five and a half hours ahead in winter.' },
      { q: 'Do you have premises in Salisbury?', a: 'No. There is no Salisbury centre and we have no UK premises, because every lesson is live online. A learner needs a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are lessons for a Salisbury learner?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one teaching on the same pattern is USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners matched into groups?', a: 'By level, pace and goals rather than age or location, with five to ten learners at the same stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The South West and beyond',
    html: 'To the south, the <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton page</a> uses hash tables to find any postcode in about one step, a close cousin of this page\'s rolling hash. <a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a>, home to another 1215 original, counts frosty nights, and <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a> measures how alike Jane Austen\'s novels are. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Salisbury and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-southampton', label: 'Southampton' },
    { href: '/best-coding-class-in-lincoln', label: 'Lincoln' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-sal .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.45rem); }
.cg-root.cg-sal .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-sal .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-sal .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-sal .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.017em; }
.cg-root.cg-sal .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 2rem); }
.cg-root.cg-sal .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-sal .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sal .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-sal .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Wiltshire, Census 2021 via Nomis (E06000054): TS001 510,333 usual residents, 498,138 in households, 12,195 in communal establishments; TS007A 24,238 aged 20 to 24 (4.7 percent, England 6.0), 29,911 aged 70 to 74 (5.9 percent, England 5.0); TS068 84,967 students of 484,705 residents aged 5 and over (17.5 percent, England 20.4); TS006 156.8 per square kilometre (England 433.5). Salisbury MSOAs (House of Commons Library names): Bishopsdown 6,868; Bemerton 7,623; Stratford 5,889; Churchfields 6,905; Town North and Milford 6,156; Cathedral and Harnham 5,038 (2,464.8 per square kilometre); East Harnham 6,048. Salisbury Cathedral: one of only four surviving 1215 originals; agreed 15 June 1215; delivered to Old Sarum probably by Elias Dereham, who oversaw building from 1220; other originals at the British Library and Lincoln Castle. NHLE: Cathedral Church of St Mary 1023581, Grade I; Old Sarum scheduled monument 1015675.',
    localProject: 'Can you find a sentence without reading every letter? Avalon Project English translation of Magna Carta 1215: 4,871 words, 993 distinct, 27,150 characters, 63 clauses. Clause 40 (Avalon wording, 75 characters) at character 13,980: naive 29,146 comparisons; hashing every window 2,030,700 character operations; rolling hash 54,225 plus 75 checked, one hash match. Cathedral wording not found by exact search; 3-word shingles 9 of 12 shared (Jaccard 0.60; 2-word 0.71; 4-word 0.50). 5-word phrases: 4,726 distinct, 128 repeated; top "the five and twenty barons" 4, "the law of the land" 3, "lawful judgment of his peers" 3. Lesson family: rolling-hash string search and shingling; distinct from Southampton hash tables.',
    requiredMentions: [
      '510,333',
      '498,138',
      '84,967',
      '484,705',
      '156.8',
      'Elias Dereham',
      'Old Sarum',
      'Rabin-Karp',
      'Harnham',
      'Bemerton',
      'five and twenty barons',
      'Clause 40'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Wiltshire 510,333 usual residents; Salisbury middle-layer areas.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000054,E02006666,E02006667,E02006668,E02006670,E02006671,E02006673,E02006674' },
      { claim: 'Nomis, Census 2021 TS007A: Wiltshire and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000054,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Wiltshire 84,967 students of 484,705 aged 5 and over (17.5 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000054,E02006673,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, Wiltshire 156.8; Salisbury Cathedral and Harnham 2,464.8 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000054,E02006673,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: Salisbury areas.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Salisbury Cathedral, Magna Carta: one of four surviving 1215 originals; 15 June 1215; Old Sarum; Elias Dereham; building from 1220; Clause 40 quotation.', url: 'https://www.salisburycathedral.org.uk/magna-carta' },
      { claim: 'The Avalon Project, Yale Law School: Magna Carta 1215, English translation.', url: 'https://avalon.law.yale.edu/medieval/magna.asp' },
      { claim: 'Historic England NHLE open data: Cathedral Church of St Mary 1023581, Grade I; Old Sarum scheduled monument 1015675.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1023581' }
    ],
    rejectedClaims: [
      'Comparing the 1215 charter with the 1225 reissue or the 1297 statute: the 1297 text on legislation.gov.uk returned a 202 challenge and was not circumvented; the National Archives translation path returned 404.',
      'A hash-collision table with small moduli: computed, but left out because the Southampton page owns hash collisions; the page says only that every match is checked.',
      'The cathedral\'s claim that its copy is the best preserved: a superlative, not repeated.',
      'Summing the Salisbury middle-layer areas into a city total: not a published figure, so not presented.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Salisbury Cathedral, the Avalon Project, Wiltshire Council or Historic England.'
    ]
  }
};
