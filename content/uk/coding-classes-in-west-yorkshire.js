'use strict';
// West Yorkshire (cg- county index, UK cluster Phase 7, row 253). Five metropolitan boroughs: Leeds, Bradford,
// Kirklees, Wakefield, Calderdale. Spine: can a word list read the mood of a novel? Sources read raw 26 September 2026:
// Brontë Parsonage Museum ("the West Yorkshire village of Haworth ... when the Brontës arrived here in 1820"; "Between
// them, Charlotte, Emily, and Anne Brontë wrote seven books, including 'Jane Eyre', 'Wuthering Heights', and 'The Tenant
// of Wildfell Hall' respectively. They penned their novels here in the Parsonage"; address Church Street, Haworth BD22
// 8DR). Texts: Project Gutenberg 1260 Jane Eyre, 768 Wuthering Heights, 767 Agnes Grey, 969 The Tenant of Wildfell
// Hall. Lexicon: AFINN-165 (Finn Arup Nielsen, 3,382 words scored -5 to +5; repository licence Apache 2.0).
// Our analysis (scratchpad wyk/senti.py): lexicon coverage 6.8 to 7.7 per cent of words. Net score per 1,000 words:
// Jane Eyre +12.37 (189,614 words, 38 chapters), Wuthering Heights -14.88 (119,376, 34), Agnes Grey +24.56 (69,410, 25),
// Tenant +16.13 (173,037, 53). AFINN scores "miss" -2: Jane Eyre uses "miss" 310 times, 262 as a title before a name,
// adding -620; Wuthering Heights 131 (82 titles), Agnes Grey 183 (151), Tenant 82 (74). Scored words within three
// words after not/no/never/nor/cannot: 5.6 to 7.7 per cent; flipping them moves Agnes Grey from +24.56 to +23.41.
// Lowest chapter Jane Eyre 2 (-48.7; -39.4 without "miss"), Wuthering Heights 11 (-44.6); highest Jane Eyre 32 (+73.4).
// Lesson family: lexicon sentiment analysis and its failure modes (word sense, coverage, negation); screened
// (sentiment, lexicon, Brontë: 0 hits). Text classification appeared in Cumbria (naive Bayes) and similarity in Bath.
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 2,351,583); ONS built-up areas, all
// inside, agree with our OA sums. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WEST YORKSHIRE', blurb: 'Leeds, Bradford, Huddersfield, Wakefield and Halifax, and a Haworth lesson on what a mood-reading program gets right and wrong about the Brontës.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-west-yorkshire',
  code: 'wyk',
  accent: '#5C0E47',
  accentRationale: 'West Yorkshire: a dark moorland berry from the solver (10.52:1 on the darkest paper tint), redder than the Somerset and North Yorkshire purples',
  pageType: 'governorate',
  place: {
    name: 'West Yorkshire',
    eyebrow: 'West Yorkshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Yorkshire and the Humber' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Leeds', href: '/best-coding-class-in-leeds' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West Yorkshire',
  title: 'Coding Classes in West Yorkshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across West Yorkshire, from Leeds, Bradford and Huddersfield to Wakefield, Halifax, Dewsbury, Keighley and Batley.',
  ogDescription: 'Coding classes for all of West Yorkshire, and a Haworth project: score four Brontë novels with a sentiment word list and catch the mistakes, starting with every "Miss".',
  twitterDescription: 'West Yorkshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for West Yorkshire',
    description: 'Ability-placed online coding, Python, AI, data science and mathematics for children, teenagers and adults across West Yorkshire, taught live in English.'
  },

  h1: 'Coding classes in West Yorkshire',
  capsuleQ: 'What are the best coding classes in West Yorkshire?',
  capsule: 'West Yorkshire is five boroughs, Leeds, Bradford, Kirklees, Wakefield and Calderdale, with 2,351,583 residents at the 2021 Census by our addition of the five totals. Leeds and Bradford are the two big cities, followed by Huddersfield, Wakefield and Halifax. We teach every lesson live over video from India, and learners are grouped by ability, never simply by the year they were born. Anyone aged 6 to 67 can study coding, Python, AI, data science or maths with us, one-to-one or in a group of five to ten. The West Yorkshire project goes to Haworth and the Brontës. You can try one lesson free. Staying on means USD 100 per month for a group place or USD 150 per month for private teaching.',
  lead: 'The Brontë Parsonage Museum says the Brontë family arrived in the West Yorkshire village of Haworth in 1820, and that Charlotte, Emily and Anne wrote their novels there, including Jane Eyre, Wuthering Heights and The Tenant of Wildfell Hall. Two centuries later, computers are asked to read the mood of text all the time, from product reviews to social media. The simplest method is a word list that scores each word as positive or negative. This page\'s project runs one of those lists over four Brontë novels in Python, finds that it does spot the darkest book, and then hunts down the mistakes, the most striking of which is hiding in the word "Miss".',
  wa: 'Hello Modern Age Coders, we are in West Yorkshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for West Yorkshire',
    h2: 'Where West Yorkshire learners begin',
    intro: 'A seven-year-old in Pudsey who loves stories, a Year 9 in Halifax curious about how AI understands words, a Year 12 in Huddersfield ready for real machine learning, and an adult in Leeds who reads customer feedback for a living. Each begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including stories and characters that talk.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Python to real machine learning for teenagers, including natural language processing and the transformer idea.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Data and AI tools for adults who do not code yet, including reading what text analysis really measures.' }
    ]
  },

  sections: [
    {
      id: 'west-yorkshire', tint: '', eyebrow: 'West Yorkshire in figures',
      h2: '2,351,583 people in five boroughs',
      intro: 'Each borough count is a 2021 Census figure on Nomis; adding the five is our own step. Towns are ONS built-up areas, recounted by us from census output areas.',
      body: [
        { kind: 'table', caption: 'West Yorkshire\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Leeds', '536,280', 'Keighley', '48,750'],
          ['Bradford', '333,950', 'Castleford', '45,355'],
          ['Huddersfield', '141,675', 'Batley', '44,500'],
          ['Wakefield', '97,870', 'Pudsey', '34,850'],
          ['Halifax', '88,115', 'Brighouse', '33,160'],
          ['Dewsbury', '63,720', 'Pontefract', '32,975']
        ] },
        { kind: 'p', text: 'Leeds borough had 811,956 residents, Bradford 546,412, Kirklees 433,216, Wakefield 353,368 and Calderdale 206,631. The ONS separates Leeds itself from towns such as Pudsey and Morley, while its Bradford area reaches into Kirklees and Leeds, and Huddersfield spans Kirklees and Calderdale. Morley and Shipley come just after the table. No town in the list crosses the county line, and our own output-area totals agree with each ONS figure to within a few dozen. Holiday dates differ from council to council and from trust to trust; we have not read them and simply ask each family.' },
        { kind: 'callout', h3: 'City pages inside the county', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a>, <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a> and <a class="cg-inline-link" href="/best-coding-class-in-wakefield">Wakefield</a> pages each have their own project, and <a class="cg-inline-link" href="/11-plus-maths-tuition-calderdale">Calderdale 11+ maths</a> covers entrance-test preparation.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Yorkshire project',
      h2: 'Reading the Brontës with a word list',
      intro: 'Four novels, one sentiment lexicon, and the three ways it goes wrong.',
      body: [
        { kind: 'p', text: 'The learner downloads four novels from Project Gutenberg, Jane Eyre, Wuthering Heights, Agnes Grey and The Tenant of Wildfell Hall, and a sentiment word list called AFINN, which gives 3,382 English words a score from −5 for very negative to +5 for very positive. The program splits each book into words, adds up the scores, and reports the result per thousand words so that long and short books can be compared. It then does the same chapter by chapter.' },
        { kind: 'table', caption: 'Our sentiment scores for four Brontë novels, per 1,000 words, 26 September 2026', head: ['Novel', 'Net score', 'Words the list knows', 'Times "miss" appears'], rows: [
          ['Agnes Grey', '+24.6', '7.7%', '183'],
          ['The Tenant of Wildfell Hall', '+16.1', '7.7%', '82'],
          ['Jane Eyre', '+12.4', '6.8%', '310'],
          ['Wuthering Heights', '−14.9', '7.1%', '131']
        ] },
        { kind: 'p', text: 'The headline looks sensible: Wuthering Heights is the only one of the four with a negative score, and its darkest chapter scores −44.6. But three problems appear as soon as the learner looks closer. First, coverage: the list knows only about 7 per cent of the words in each book, so more than nine words in ten count for nothing. Second, negation: in phrases like "not happy" the list still scores "happy" as positive. Between 5.6 and 7.7 per cent of scored words follow a "not", "no" or "never" within three words; flipping them moves Agnes Grey only from +24.6 to +23.4, so here it matters less than you might fear.' },
        { kind: 'p', text: 'The third problem teaches the most. AFINN scores "miss" as −2, meaning to fail or to long for something. But in a Victorian novel, "Miss" is usually a title. Jane Eyre uses the word 310 times, 262 of them directly before a capitalised name, and every one drags the score down. The list reads a polite form of address as a small sadness, 310 times over. Removing it lifts Jane Eyre\'s darkest chapter from −48.7 to −39.4 per thousand words. A word can have several meanings, and a program that ignores context counts the wrong one.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Give words from a short story a happy or sad score, add them up, and find a sentence where the total gets it wrong.' },
          { h3: 'Ages 12 to 15', p: 'Load a novel and the AFINN list in Python, score each chapter, and draw the mood of the book as a line.' },
          { h3: 'Ages 15 and up', p: 'Add negation handling, detect "Miss" as a title, measure coverage, and compare the results with a modern language model.' }
        ] },
        { kind: 'callout', h3: 'Whose words and whose scores', p: 'The novels are the Brontës\' own, from Project Gutenberg, and the word list is AFINN by Finn Arup Nielsen. The facts about Haworth come from the Brontë Parsonage Museum. The scores, the chapter results and the fixes are ours, and no single number can capture what a novel means to its readers.' }
      ]
    },
    {
      id: 'haworth', tint: 'deep', eyebrow: 'Why Haworth',
      h2: 'A Parsonage where three sisters wrote',
      intro: 'The West Yorkshire link, in the museum\'s own words.',
      body: [
        { kind: 'table', caption: 'The Brontës and Haworth, as the Brontë Parsonage Museum describes them', head: ['Point', 'The museum says'], rows: [
          ['Arrival', 'The Brontë family arrived in the West Yorkshire village of Haworth in 1820.'],
          ['The sisters', 'Charlotte, Emily and Anne Brontë wrote seven books between them.'],
          ['Famous titles', 'Including Jane Eyre, Wuthering Heights and The Tenant of Wildfell Hall.'],
          ['Where they wrote', 'They wrote their novels in the Parsonage, now the Brontë Parsonage Museum.'],
          ['Address today', 'Church Street, Haworth BD22 8DR.']
        ] },
        { kind: 'p', text: 'Novels are a demanding test for any program that claims to understand language, because they are full of irony, old-fashioned words and meanings that change with context. Modern AI language models handle much of this far better than a word list, but they are built on the same starting question: how do you turn words into numbers? A West Yorkshire student who has built the simple version, and caught it misreading "Miss", understands both why the newer methods were needed and what to test them for.' },
        { kind: 'p', text: 'We have no connection with the Brontë Parsonage Museum, Project Gutenberg, the author of AFINN or any West Yorkshire council. Their texts and facts are theirs; our analysis and any errors are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a>, <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a> and <a class="cg-inline-link" href="/best-coding-class-in-wakefield">Wakefield</a> have their own pages; <a class="cg-inline-link" href="/coding-classes-in-north-yorkshire">North Yorkshire</a> is north, <a class="cg-inline-link" href="/coding-classes-in-south-yorkshire">South Yorkshire</a> south and <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From story games to language AI',
    intro: 'The free lesson shows where a learner fits. Age is only a starting guess.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Stories in code', p: 'Block coding with characters that speak, react and tell a story.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 13', h3: 'Words as data', p: 'Typed Python that counts words, finds the most common ones and scores simple sentences.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Language and AI', p: 'Machine learning for teenagers, including natural language processing and how models read text.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Text at work', p: 'Data and AI skills for adults who handle reviews, surveys or reports.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and meaning',
    h2: 'An AI can tell you a review is negative. Does it know when "miss" is a name?',
    intro: 'Measuring mood from words is useful, and easy to get wrong in ways nobody notices.',
    p1: 'Businesses run sentiment analysis over thousands of reviews and messages, and modern AI models are far better at it than a simple word list. They still make mistakes with irony, local expressions and words with more than one meaning, and a dashboard showing an average score hides every one of them. Our word list read 262 uses of "Miss" as a title in Jane Eyre as sadness, and the book\'s total moved without anyone noticing.',
    p2: 'A West Yorkshire student who has found that error knows to read the actual sentences behind a score, check which words drive it, and ask what the method cannot see. That habit is the difference between trusting an AI\'s summary and understanding it.',
    closer: 'Learning to code in 2026 lets a young person in West Yorkshire check what a language tool is really measuring.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Getting started',
    h2: 'From the Pennine valleys to the Aire, online',
    intro: 'West Yorkshire is busy, and getting across it for a weekly evening class takes real time. Online lessons give that time back.',
    cells: [
      { h3: 'At your own table', p: 'A terrace in Keighley, a semi in Batley, a flat in Leeds. The screen is shared; the learner writes the code while the teacher watches and guides.' },
      { h3: 'The same school words', p: 'Teachers know what a Year 11 mock or an A level set text means to a pupil in Halifax or Wakefield, and they teach in English.' },
      { h3: 'Start free', p: 'A proper first lesson, then plain advice on level and course, without card details.' },
      { h3: 'A class that fits', p: 'Five to ten learners at one stage, whether they are in Yorkshire or far away.' },
      { h3: 'Holiday breaks', p: 'Most learners take two lessons a week and pause for their school\'s own holidays.' },
      { h3: 'UK time throughout', p: 'The slot we give you stays fixed in UK time through the clock changes; the teacher, working on India time several hours ahead, adjusts.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Even in a county of over two million, five learners at one stage free on the same evening seldom live near each other. Level-based groups let a learner in Brighouse or Pontefract join a class that fits.' }
  },

  fees: {
    h2: 'Fees in West Yorkshire',
    intro: 'Families in Dewsbury and Shipley pay exactly the same, as do families everywhere we teach except India.',
    first: 'A full lesson of genuine work, followed by a recommendation for level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month, one-to-one with a teacher.',
    closer: 'We bill in US dollars and quote no prices in pounds. Payment starts only once the free lesson has settled a course and a weekly slot. For pauses, missed lessons or a change between group and private, see the pricing page.'
  },

  reviewsH2: 'Families on Google say',

  book: {
    h2: 'Book a free West Yorkshire lesson',
    intro: 'Tell us the learner\'s age or school year and a favourite subject. A first lesson could be a Scratch story, a Python word counter, or the Brontë project on this page.',
    success: 'Thank you. Your West Yorkshire request is in.'
  },

  faq: {
    h2: 'West Yorkshire questions',
    intro: 'The county, the Brontë project and practical details.',
    items: [
      { q: 'How many people live in West Yorkshire?', a: 'The five boroughs had 2,351,583 usual residents at the 2021 Census, by our sum of the ONS figures on Nomis.' },
      { q: 'What are the largest towns in West Yorkshire?', a: 'By ONS built-up area: Leeds 536,280, Bradford 333,950, Huddersfield 141,675, Wakefield 97,870 and Halifax 88,115.' },
      { q: 'What is the Brontë project?', a: 'Learners score four Brontë novels with the AFINN sentiment word list in Python, find Wuthering Heights the only negative one, and then investigate coverage, negation and the word "Miss", which the list wrongly counts as negative when it is a title.' },
      { q: 'What is sentiment analysis?', a: 'Using a program to estimate whether text is positive or negative. Simple versions add up scores from a word list; modern AI models use context, but can still misread irony and words with several meanings.' },
      { q: 'Where did the Brontës live?', a: 'The Brontë Parsonage Museum says the family arrived in Haworth, West Yorkshire, in 1820, and that the sisters wrote their novels in the Parsonage.' },
      { q: 'Are lessons held in West Yorkshire?', a: 'No. Lessons happen live on video, so a learner in Haworth is as close to the class as one in central Leeds.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67. Young children begin with blocks and stories, Python often starts around eight to ten, teenagers go on to AI and data science, and adults learn data and AI skills. The free lesson sets the level.' },
      { q: 'Can teenagers learn how AI understands language?', a: 'Yes. The teen AI and machine learning course includes natural language processing, and projects like this one show where simple methods fail.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After that, a group place is USD 100 a month and one-to-one lessons are USD 150 a month, with no joining fee.' },
      { q: 'Do you pause for West Yorkshire school holidays?', a: 'We can. The five councils and academy trusts publish their dates; tell us yours and we plan breaks around them.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near West Yorkshire',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a>, <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a> and <a class="cg-inline-link" href="/best-coding-class-in-wakefield">Wakefield</a>, then <a class="cg-inline-link" href="/coding-classes-in-north-yorkshire">North Yorkshire</a>, <a class="cg-inline-link" href="/coding-classes-in-south-yorkshire">South Yorkshire</a> and <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West Yorkshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/best-coding-class-in-bradford', label: 'Bradford' }
  ],

  personalityCss: `
.cg-root.cg-wyk .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.8rem); }
.cg-root.cg-wyk .cg-hero h1 { font-weight: 800; letter-spacing: -0.027em; line-height: 1.02; }
.cg-root.cg-wyk .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wyk .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wyk .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.021em; }
.cg-root.cg-wyk .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-wyk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wyk .cg-table th { letter-spacing: 0.04em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-wyk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-wyk .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Yorkshire: metropolitan boroughs Leeds, Bradford, Kirklees, Wakefield, Calderdale. ONS Census 2021 TS001 via Nomis: Leeds 811,956; Bradford 546,412; Kirklees 433,216; Wakefield 353,368; Calderdale 206,631; our sum 2,351,583. ONS built-up areas (published; agree with our OA sums, all inside): Leeds 536,280; Bradford 333,950 (Bradford, Kirklees, Leeds); Huddersfield 141,675 (Calderdale, Kirklees); Wakefield 97,870; Halifax 88,115; Dewsbury 63,720; Keighley 48,750; Castleford 45,355; Batley 44,500; Pudsey 34,850; Brighouse 33,160; Pontefract 32,975; Morley 32,550; Shipley 29,225. Brontë Parsonage Museum: "the West Yorkshire village of Haworth ... when the Brontës arrived here in 1820"; "Between them, Charlotte, Emily, and Anne Brontë wrote seven books, including \'Jane Eyre\', \'Wuthering Heights\', and \'The Tenant of Wildfell Hall\' respectively. They penned their novels here in the Parsonage"; "Church Street Haworth BD22 8DR". AFINN-165 (github.com/fnielsen/afinn), 3,382 words, Apache 2.0.',
    localProject: 'Lexicon sentiment on Gutenberg 1260, 768, 767, 969 with AFINN-165; tokens [a-z\']+. Per 1,000 words: Agnes Grey +24.56 (69,410 words, 25 chapters, coverage 7.7 per cent, negation flip +23.41); Tenant +16.13 (173,037, 53, 7.7, +15.42); Jane Eyre +12.37 (189,614, 38, 6.8, +12.31); Wuthering Heights -14.88 (119,376, 34, 7.1, -14.66). "miss" = -2: Jane Eyre 310 (262 before a capitalised name), -620; WH 131 (82); Agnes Grey 183 (151); Tenant 82 (74). Scored words after a negator within 3: 5.6 to 7.7 per cent. Lowest chapters: Jane Eyre 2 -48.7 (-39.4 without miss); WH 11 -44.6; highest Jane Eyre 32 +73.4. Page labels scores as ours. AI angle: dashboards hide word-sense errors. Lesson family: lexicon sentiment, coverage, negation, word sense.',
    requiredMentions: [
      '2,351,583',
      'sentiment',
      'AFINN',
      'Parsonage',
      'BD22 8DR',
      'Huddersfield',
      'Batley',
      'Pudsey',
      'Agnes Grey',
      'Wildfell Hall'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the five West Yorkshire boroughs, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for West Yorkshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Brontë Parsonage Museum: the Brontës in Haworth from 1820 and the novels written in the Parsonage.', url: 'https://www.bronte.org.uk/about-the-brontes/the-bronte-novels' },
      { claim: 'Project Gutenberg texts of Jane Eyre, Wuthering Heights, Agnes Grey and The Tenant of Wildfell Hall.', url: 'https://www.gutenberg.org/' },
      { claim: 'AFINN sentiment lexicon by Finn Arup Nielsen (AFINN-165).', url: 'https://github.com/fnielsen/afinn' }
    ],
    rejectedClaims: [
      'Plot descriptions of the lowest and highest scoring chapters: not needed and not given; only chapter numbers are reported.',
      'That modern AI sentiment models would score these books a particular way: not tested, not claimed.',
      'Dates of publication of the novels: not read from the museum pages used, so none are given.',
      'Individual members of the Brontë family beyond the three sisters: not described.',
      'West Yorkshire school term dates: none read.',
      'Named West Yorkshire schools: none named.'
    ]
  }
};
