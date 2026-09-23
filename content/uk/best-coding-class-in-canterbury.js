'use strict';
// Canterbury (cg- city page, UK cluster Phase 4). Spine: how many words did Chaucer know? It depends what a word is.
// Heaps' law and tokenisation on The Canterbury Tales, Project Gutenberg eBook 22120 (Chaucer's Works, Volume 4,
// edited by Walter W. Skeat; plain text read 23 September 2026; scratchpad cnt/clean.py, heaps.py). Chaucer's text
// taken from "HERE BIGINNETH THE BOOK OF THE TALES OF CAUNTERBURY" to the closing colophon; editorial variant notes,
// line numbers and bracketed page references removed (21,494 lines kept). Distinct words by tokenisation rule:
// split on spaces 23,609 (187,345 tokens); lower case 22,164; lower case with punctuation removed 12,132 (182,905
// tokens); hyphenated words split 11,593 (185,932 tokens); accents removed 11,567. Heaps' law fitted by least squares
// on log-log points from 1,000 tokens: V = 7.63 n^0.612; observed and fitted at 1,001 tokens 447 and 524; 10,037
// tokens 2,284 and 2,148; 46,650 tokens 5,619 and 5,502; 100,569 tokens 8,491 and 8,806; all 185,931 tokens 11,567
// and 12,827. Fit on the first 10 percent predicts 16,538 words for the whole text (exponent 0.677); first 25
// percent 14,949 (0.653); first half 13,832 (0.633). Words used once: 5,374 of 11,567 (46.5 percent). Spellings of
// said: seyde 370, seyd 66, sayde 26, seide 12, sayd 11, seid 1. Words in the second half not seen in the first:
// 3,381. Most common: and 8,435, that 5,598, the 5,399, of 5,279.
// Lesson family: Heaps' law and tokenisation (vocabulary growth, power-law fitting, extrapolation risk, spelling
// variation). Screened 23 September 2026: Heaps' law, Chaucer and type-token 0 hits (Heaps appears only as binary
// heaps on the Cambridge page); distinct from Cardiff Zipf rank-size and York entropy of street endings.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Canterbury E07000106: TS001 157,432 usual residents,
// 148,198 in households, 9,234 in communal establishments; TS007A 12,600 aged 15 to 19 (8.0 percent, England 5.7),
// 15,788 aged 20 to 24 (10.0, England 6.0), 9,382 aged 70 to 74 (6.0, England 5.0); TS068 38,832 students of 150,606
// aged 5 and over (25.8 percent, England 20.4); TS006 509.9 usual residents per square km (England 433.5).
// Canterbury Cathedral, Our story: founded by St Augustine in 597 AD, sent by Pope Gregory the Great; Archbishop
// Thomas Becket martyred on 29 December 1170 and canonised as St Thomas of Canterbury; Canterbury was already a site
// of pilgrimage, and the shrine made it one of the most important in medieval Christendom. The Tales' own line 16:
// "Of Engelond, to Caunterbury they wende".

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'CANTERBURY', blurb: 'The pilgrims\' city, with a project that counts the words in The Canterbury Tales and finds the answer depends on what counts as a word.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-canterbury',
  code: 'cby',
  accent: '#5C2C96',
  accentRationale: 'Canterbury: a pilgrim purple from the solver (7.56:1 on every paper tint, dE 7.5 from the nearest used accent), bluer and brighter than the Sunderland and Doncaster purples',
  pageType: 'city',
  place: {
    name: 'Canterbury',
    eyebrow: 'Canterbury, Kent',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Canterbury' },
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Canterbury, England',
  title: 'Best Coding Classes in Canterbury | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Canterbury learners aged 6 to 67, from Whitstable and Herne Bay to Sturry. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Canterbury, on a page that counts the words in The Canterbury Tales and shows how the count depends on what a word is.',
  twitterDescription: 'Canterbury learners from age six to sixty-seven can study coding, Python and AI with us live online, and the first lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Canterbury Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, text analysis, AI and mathematics taught live online in English to Canterbury children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Canterbury',
  capsuleQ: 'What are the best coding classes in Canterbury?',
  capsule: 'The 2021 census counted 157,432 usual residents in the Canterbury district, and 10.0% of them were aged 20 to 24, against 6.0% in England. Canterbury Cathedral dates its founding by St Augustine to 597 AD, and says the shrine of Thomas Becket made the city one of the great pilgrimage sites of medieval Christendom. Canterbury learners aged six to sixty-seven can take lessons with us on live video, alone with a teacher or in a class of five to ten at their stage, taught from India at hours suited to UK families. The first lesson is free; then a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Chaucer\'s pilgrims set out, as line 16 of the Tales puts it, "to Caunterbury". How many different words did he use to tell their stories? Split Walter Skeat\'s edition on spaces and the answer is 23,609. Ignore capital letters and it drops to 22,164. Strip punctuation and it halves, to 12,132, and treating hyphens and accents consistently brings it to 11,567. Even then, "said" appears in six spellings, from seyde to seid. The vocabulary also keeps growing as you read: Heaps\' law describes that growth with a simple power curve, but a curve fitted to the first tenth of the book predicts 16,538 words, far more than there are. Our teenagers learn that counting starts with deciding what to count.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Canterbury.',

  picks: {
    eyebrow: 'Course picks for Canterbury',
    h2: 'Four courses for the pilgrims\' city',
    intro: 'Choose the course that suits what the learner enjoys. Every course starts with a free live lesson, and we never take a card to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Stories and games built from blocks, including simple word games that count and sort what a player types.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, including reading a whole book from a file and counting its words.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning for teenagers, where turning text into tokens is the first step for every language model.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who work with documents, from cleaning text to summarising and searching it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Canterbury today',
      h2: 'A university city among coastal towns',
      intro: 'Census 2021 figures for the City of Canterbury district, which includes Whitstable and Herne Bay, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Canterbury district, Census 2021', head: ['Measure', 'Canterbury', 'England'], rows: [
          ['Usual residents', '157,432', '56,490,048'],
          ['Living in households', '148,198', 'Not compared'],
          ['Living in communal establishments', '9,234', 'Not compared'],
          ['Aged 15 to 19', '12,600 (8.0%)', '5.7%'],
          ['Aged 20 to 24', '15,788 (10.0%)', '6.0%'],
          ['Aged 70 to 74', '9,382 (6.0%)', '5.0%'],
          ['Students among residents aged 5 and over', '38,832 (25.8%)', '20.4%'],
          ['Usual residents per square kilometre', '509.9', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Students and the young', p: 'In 2021, 10.0% of residents were aged 20 to 24 and 8.0% were 15 to 19, and 38,832 of the 150,606 residents aged five and over were in study.' },
          { h3: 'Older coastal towns', p: 'People aged 70 to 74 were 6.0% of the district, above England\'s 5.0%; the district includes the seaside towns of Whitstable and Herne Bay as well as the city.' },
          { h3: 'Halls and homes', p: 'Some 9,234 residents lived in communal establishments such as student halls, while 148,198 lived in ordinary households.' }
        ] },
        { kind: 'p', text: 'Our Canterbury learners come from across that mix. A Year 5 child in Whitstable might be writing a first word game, a Year 12 student in Wincheap working on A level Computer Science, and a retired reader in Herne Bay learning Python to explore old texts, each in a small group at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A city of pilgrims',
      h2: 'From St Augustine to Chaucer\'s travellers',
      intro: 'From Canterbury Cathedral\'s own account and from the text of the Tales.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '597 AD', p: 'The Cathedral says it was founded by St Augustine, sent by Pope Gregory the Great as a missionary, and that in time it became the principal seat of the Archbishop of Canterbury.' },
          { h3: '29 December 1170', p: 'Archbishop Thomas Becket was killed in the Cathedral and later canonised. The Cathedral says his shrine made Canterbury one of the most important pilgrimage sites in medieval Christendom.' },
          { h3: 'The Tales', p: 'Chaucer\'s pilgrims gather at the Tabard in Southwark and ride "to Caunterbury", telling stories on the way, in the Middle English that makes this project so interesting.' }
        ] },
        { kind: 'p', text: 'We have no connection with Canterbury Cathedral. Chaucer belongs on this page because his book is a large, freely available text written before English spelling settled down, which makes it a perfect place to learn how computers count words and why the counting rules matter so much.' },
        { kind: 'spec', title: 'Where the text comes from', p: 'Project Gutenberg publishes Walter W. Skeat\'s edition of The Canterbury Tales as free plain text. The edition includes the editor\'s notes on manuscript variants, which have to be removed first so that only Chaucer\'s words are counted.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many words are in The Canterbury Tales?',
      intro: 'Tokenisation is the rule that splits text into words. Heaps\' law says the number of different words grows as a power of the total number read.',
      body: [
        { kind: 'table', caption: 'Distinct words in Chaucer\'s text under different tokenisation rules, Skeat\'s edition with editorial notes removed', head: ['Rule', 'Tokens', 'Distinct words'], rows: [
          ['Split on spaces only', '187,345', '23,609'],
          ['Also ignore capital letters', '187,345', '22,164'],
          ['Also remove punctuation', '182,905', '12,132'],
          ['Also split hyphenated words', '185,932', '11,593'],
          ['Also ignore accents', '185,932', '11,567']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Clean the source', p: 'Keep Chaucer and drop the editor. Variant notes, line numbers and page references are removed, leaving 21,494 lines of verse and prose.' },
          { h3: '2. Decide what a word is', p: 'Each rule on the left changes the answer. Removing punctuation alone halves the count, because "pilgrimage," and "pilgrimage" stop being different words.' },
          { h3: '3. Watch the vocabulary grow', p: 'Count distinct words after every few hundred tokens. The curve rises fast, then slows, following roughly V = 7.63 n to the power 0.612.' }
        ] },
        { kind: 'callout', h3: 'A power law that runs ahead of itself', p: 'Fit Heaps\' law to the first tenth of the book and it predicts 16,538 distinct words by the end. The real figure is 11,567. Fit it to the first half and the prediction falls to 13,832, still too high. The vocabulary grows more slowly as the book goes on than an early fit expects, so extrapolating from a small sample overestimates, a pattern that matters whenever someone estimates how large a vocabulary or dataset will become.' },
        { kind: 'p', text: 'Middle English makes the lesson sharper. The word said appears as seyde 370 times, seyd 66, sayde 26, seide 12, sayd 11 and seid once, six spellings of one word. Nearly half the distinct words, 5,374 of 11,567, appear only once, and 3,381 words in the second half of the book never appear in the first. Counting words is easy; deciding which strings are the same word is the real work.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Text as data',
      h2: 'Five decisions before counting words in anything',
      intro: 'Learned on Chaucer, then used on search engines, spelling checkers, social media posts, customer reviews and the tokenisers inside every large language model.',
      body: [
        { kind: 'table', caption: 'Choices that change a word count', head: ['Decision', 'For The Canterbury Tales', 'What happens if you skip it'], rows: [
          ['What is the text?', 'Chaucer only, editorial notes removed', 'The editor\'s words counted as Chaucer\'s'],
          ['Capital letters?', 'Ignored', 'Sentence starts double some words'],
          ['Punctuation?', 'Removed', 'Word counts nearly twice too high'],
          ['Spelling variants?', 'Kept separate, and reported', 'Six spellings of said counted as six words silently'],
          ['How far to extrapolate?', 'Not beyond the text measured', 'An early fit promising far too many words']
        ] },
        { kind: 'p', text: 'The fourth row has no single right answer. Merging seyde, sayde and seyd into one word needs knowledge of Middle English that a simple rule does not have, and merging too eagerly would join genuinely different words. The honest approach is to choose a rule, report it, and show how much the answer depends on it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Counting different words in a short story, and arguing about whether Cat and cat are one word or two.' },
          { h3: 'Teenagers', p: 'The Gutenberg file in Python, a cleaning step, several tokenisation rules, and Heaps\' law fitted and tested on part of the book.' },
          { h3: 'Adults', p: 'Text analysis at work, from documents to reviews, with the cleaning and counting rules written down before any chart is drawn.' }
        ] },
        { kind: 'p', text: 'We have no connection with Canterbury Cathedral, Project Gutenberg or Canterbury City Council. The text is in the public domain and the census tables are published openly; the cleaning, counts and fitted curves are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting words to Heaps\' law',
    intro: 'Use the age bands as a rough guide; the free lesson finds the proper starting level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Words and rules', p: 'Counting words in a short story, and seeing how the total changes when capital letters and commas are treated differently.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Text in code', p: 'Reading a story from a file in Python, splitting it into words and counting each one with a dictionary.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Tokens and power laws', p: 'Cleaning a real book, comparing tokenisation rules and fitting Heaps\' law on log-log axes.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Text analysis at work', p: 'Processing documents and reviews, with cleaning rules and vocabulary estimates explained plainly.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Language models read billions of words. Why should a Canterbury teenager count Chaucer\'s?',
    intro: 'Because every language model starts by deciding what a word is, and that choice shapes everything after.',
    p1: 'Before a language model learns anything, a tokeniser chops text into pieces, and the rules it uses decide which words it treats as the same. A learner who has watched Chaucer\'s vocabulary halve when punctuation is removed, and seen said split six ways, understands why models stumble on spelling variants, old texts and unusual names.',
    p2: 'Vocabulary growth matters for AI too. Heaps\' law describes how new words keep appearing as more text is read, which is why no fixed dictionary ever covers everything and why modern tokenisers break rare words into smaller pieces. Watching the law bend on a single medieval book makes that engineering choice easy to understand.',
    closer: 'So a Canterbury teenager should still learn to program in 2026, in the city Chaucer\'s pilgrims rode towards: machines can read faster than any pilgrim, but someone still has to decide what counts as a word.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Wincheap, Whitstable or Herne Bay, from home',
    intro: 'The district runs from the city walls to the north Kent coast. Online, a learner in Herne Bay is as close to the lesson as one in the city centre.',
    cells: [
      { h3: 'City and coast', p: 'A learner in Sturry and another in Whitstable can share the same class without a bus ride into Canterbury.' },
      { h3: 'English stages throughout', p: 'We follow the stages Kent schools use, Reception and Key Stages 1 to 4 through GCSE and A level, and teach entirely in English.' },
      { h3: 'A lesson, not a sales call', p: 'The free session teaches a real task and ends with our suggested level, course and weekly slot. We never ask for card details.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners working at one level, from Canterbury, elsewhere in the UK and abroad, so every stage has a sensible time.' },
      { h3: 'Two regular lessons', p: 'Two set lessons a week, about eight a month, with holidays and exam weeks planned with the teacher well ahead.' },
      { h3: 'Evening classes from India', p: 'A 5 pm lesson in Canterbury starts at 9.30 pm in India during British Summer Time and 10.30 pm in winter, as India keeps one time all year; our teachers work late for UK learners.' }
    ],
    spec: { title: 'Across east Kent', p: 'Families in Faversham, Ashford, Margate or Dover join exactly the same classes, since lessons are online and groups are formed by level.' }
  },

  fees: {
    h2: 'Canterbury lesson fees',
    intro: 'A free first lesson, then one monthly fee.',
    first: 'A full lesson with nothing to pay, ending with a suggested level, course and weekly time.',
    group: 'Around eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'Around eight live lessons a month, with the teacher focused on your learner alone.',
    closer: 'Thanington and Tankerton pay what every family outside India pays: one fee in US dollars, with no pound prices anywhere on our site. The free lesson comes first, and billing starts only once a course and a weekly time are agreed; pausing, missed lessons and moving between group and private teaching are explained on the pricing page.'
  },

  reviewsH2: 'Six families on Google, quoted as they wrote',

  book: {
    h2: 'Book a free lesson for a Canterbury learner',
    intro: 'We choose the first task by level: a word-counting game for a young child, a short Python program that counts words in a paragraph for a beginner, or the Gutenberg text and Heaps\' law for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Canterbury learner.'
  },

  faq: {
    h2: 'Canterbury coding class questions',
    intro: 'What Canterbury families most often ask us.',
    items: [
      { q: 'How many people live in the Canterbury district?', a: 'Census 2021 counted 157,432 usual residents in the City of Canterbury district, which includes Whitstable and Herne Bay; 148,198 lived in households and 9,234 in communal establishments.' },
      { q: 'How does Canterbury compare with England?', a: 'It has many students and young adults: 10.0% of residents were aged 20 to 24 in 2021 (England 6.0%), and 25.8% of those aged five and over were in study (England 20.4%). Density was 509.9 residents per square kilometre (England 433.5).' },
      { q: 'What is Heaps\' law?', a: 'An observation that the number of different words in a text grows roughly as a power of its total length, quickly at first and then more slowly, so a longer text keeps introducing new words at a falling rate.' },
      { q: 'How many different words are in The Canterbury Tales?', a: 'It depends on the rules. In Skeat\'s edition with editorial notes removed, splitting on spaces gives 23,609; ignoring capitals, punctuation, hyphens and accents consistently gives 11,567.' },
      { q: 'Where does the text come from?', a: 'Project Gutenberg\'s free plain-text copy of Walter W. Skeat\'s edition of The Canterbury Tales, from which we removed the editor\'s notes before counting.' },
      { q: 'Why is Canterbury a place of pilgrimage?', a: 'Canterbury Cathedral says it was founded by St Augustine in 597 AD and that the shrine of Thomas Becket, killed there in 1170, made it one of the most important pilgrimage sites in medieval Christendom. We are not connected with the Cathedral.' },
      { q: 'At what times are Canterbury lessons?', a: 'Weekday afternoons or evenings, or weekends, at a UK time agreed during the free lesson. India is four and a half hours ahead of Canterbury in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Canterbury?', a: 'No. There is no Canterbury centre and no premises anywhere in the UK, as every lesson is live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Canterbury lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Canterbury groups formed?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The south east and beyond',
    html: 'Along the coast, the <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove page</a> slides a window along a year of ozone readings, and in <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> street names are measured for surprise. <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> tests whether its size fits Zipf\'s law, a close cousin of Heaps\'. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Canterbury and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-brighton-and-hove', label: 'Brighton and Hove' },
    { href: '/best-coding-class-in-york', label: 'York' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-cby .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-cby .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-cby .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-cby .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cby .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-cby .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.15rem); }
.cg-root.cg-cby .cg-table th { letter-spacing: 0.025em; }
.cg-root.cg-cby .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cby .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-cby .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Canterbury, Census 2021 via Nomis (E07000106): TS001 157,432 usual residents, 148,198 in households, 9,234 in communal establishments; TS007A 12,600 aged 15 to 19 (8.0 percent, England 5.7), 15,788 aged 20 to 24 (10.0 percent, England 6.0), 9,382 aged 70 to 74 (6.0 percent, England 5.0); TS068 38,832 students of 150,606 residents aged 5 and over (25.8 percent, England 20.4); TS006 509.9 usual residents per square kilometre (England 433.5). Canterbury Cathedral, Our story: founded by St Augustine in 597 AD, sent by Pope Gregory the Great; Thomas Becket martyred 29 December 1170, canonised; his shrine made Canterbury one of the most important pilgrimage sites in medieval Christendom.',
    localProject: 'How many words are in The Canterbury Tales? Project Gutenberg eBook 22120 (Skeat edition), Chaucer\'s text only, editorial notes, line numbers and page references removed (21,494 lines). Distinct words: split on spaces 23,609; lower case 22,164; punctuation removed 12,132; hyphens split 11,593; accents removed 11,567 (185,932 tokens). Heaps\' law fit V = 7.63 n^0.612; full-text fitted 12,827 against 11,567 observed. Extrapolation from first 10 percent 16,538, first 25 percent 14,949, first half 13,832. Hapax 5,374 (46.5 percent). Said: seyde 370, seyd 66, sayde 26, seide 12, sayd 11, seid 1. Second-half words not in first half 3,381. Lesson family: Heaps\' law and tokenisation; distinct from Cardiff Zipf and York entropy.',
    requiredMentions: [
      '157,432',
      '148,198',
      '509.9',
      '15,788',
      '38,832',
      '150,606',
      'Becket',
      'St Augustine',
      'Heaps\' law',
      'seyde',
      '11,567',
      'Skeat'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Canterbury: 157,432 usual residents; 148,198 in households; 9,234 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000106' },
      { claim: 'Nomis, Census 2021 TS007A: Canterbury and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000106,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Canterbury 38,832 students of 150,606 aged 5 and over (25.8 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000106,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Canterbury 509.9 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000106,E92000001' },
      { claim: 'Project Gutenberg eBook 22120, Chaucer\'s Works Volume 4, The Canterbury Tales (Skeat edition), plain text.', url: 'https://www.gutenberg.org/ebooks/22120' },
      { claim: 'Canterbury Cathedral, Our story: St Augustine 597 AD, Thomas Becket 29 December 1170, pilgrimage.', url: 'https://www.canterbury-cathedral.org/our-story/' }
    ],
    rejectedClaims: [
      'A single definitive count of Chaucer\'s vocabulary: the page shows how the count depends on tokenisation rules and gives each result.',
      'Merging Middle English spelling variants automatically: a simple rule cannot do it reliably, so variants are reported, not merged.',
      'Canterbury Cathedral history pages under other paths: returned 404; the Our story page is used instead.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules. The Cathedral is described as heritage only.',
      'Any affiliation with Canterbury Cathedral, Project Gutenberg or Canterbury City Council.'
    ]
  }
};
