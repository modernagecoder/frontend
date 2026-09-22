'use strict';
// York (cg- city page, UK cluster Phase 4). Spine: how surprising is a York street name?
// Shannon entropy of road-name endings in Ordnance Survey Open Names (CSV, OS Downloads API, file read 21 September
// 2026, reused from the Aberdeen download; scratchpad yrk/entropy.py). Named Road rows with COUNTY_UNITARY York:
// 2,785 distinct names. Suffix = last word; a last word ending in -gate (Stonegate, Coppergate) counts as one
// "-gate word" suffix; single-word names without such an ending count together. 151 distinct suffixes: Close 369
// (13.2 percent), Street 247 (8.9), Avenue 235 (8.4), Lane 225 (8.1), Road 212 (7.6), Court 169 (6.1). Entropy 4.729
// bits; maximum for 151 equally likely suffixes 7.238; fixed-length code 8 bits; Huffman code average 4.760 bits.
// Surprise: Close 2.92 bits, Avenue 3.57, Street 3.50, Lane 3.63, Road 3.72, Drive 4.11, a -gate word 6.05 (42
// names), a suffix used once 11.44 (80 suffixes used once, Shambles among them). Names ending in gate: York 47 of
// 2,785 (1.7 percent), Leeds 86 of 12,005 (0.7), Sheffield 31 of 6,457 (0.5). Full-sample entropy: Leeds 4.987 (253
// suffixes), Newcastle 4.421, Hull 4.122, Bristol 4.092 (Road 30.1 percent), Sheffield 4.067 (Road 25.8 percent),
// Plymouth 4.039, Nottingham 3.969. At York's sample size (mean of 200 random subsamples of 2,785 names): Leeds 4.940
// (about 120 suffixes), York 4.729, Newcastle 4.410, Hull 4.117, Bristol 4.072, Sheffield 4.044, Plymouth 4.034,
// Nottingham 3.962.
// Lesson family: Shannon entropy and information (surprise in bits, entropy as the limit on average code length,
// Huffman against fixed-length codes, sample-size bias of the plug-in estimate). Screened 22 September 2026: entropy
// appears on no place page; only in machine learning tutorials as cross-entropy. Huffman appears only as an OCR
// specification term.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, York E06000014: TS001 202,821 usual residents,
// 191,572 in households, 11,249 in communal establishments; TS007A 15,216 aged 15 to 19 (7.5 percent, England 5.7),
// 20,355 aged 20 to 24 (10.0, England 6.0); TS068 48,779 students of 194,206 aged 5 and over (25.1 percent, England
// 20.4); TS006 745.8 usual residents per square km (England 433.5). University of York, History of the University:
// plans for a university in York first appeared as early as 1617; permission granted in 1960; Heslington before the
// Second World War a quiet rural retreat and working agricultural village. National Railway Museum, About us:
// photographs of locomotives around the turntable in York motive power depot about 1950, the engine shed now the
// museum's Great Hall; the Leeman Road entrance in 1975. Jorvik, York Archaeology and Visit York returned 403.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'YORK', blurb: 'The walled city, with a project that measures in bits how surprising a York street name is.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-york',
  code: 'yrk',
  accent: '#6F2E2A',
  accentRationale: 'York: a walled-city brick red from the solver (8.12:1 on every paper tint, dE 7.7 from the nearest used accent), browner than the Wolverhampton red and far from the Oxford and Cambridge accents',
  pageType: 'city',
  place: {
    name: 'York',
    eyebrow: 'York, North Yorkshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'York' },
      { type: 'AdministrativeArea', name: 'North Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'York, England',
  title: 'Best Coding Classes in York | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for York learners aged 6 to 67, from Acomb and Clifton to Heworth and Fulford. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for York, on a page that measures in bits how predictable a York street name is, and why Coppergate is worth more than a Close.',
  twitterDescription: 'York learners aged six to sixty-seven can learn coding, Python and AI live online with us, and the first lesson is free of charge.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'York Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, information theory, AI and mathematics taught live online in English to York children, teenagers and adults, in small level-based groups or one to one.'
  },

  h1: 'Coding classes in York',
  capsuleQ: 'What are the best coding classes in York?',
  capsule: 'Census 2021 counted 202,821 usual residents in York, and a quarter of those aged five and over were in study, 25.1% against 20.4% for England. The University of York says plans for a university in the city go back to 1617, though permission came only in 1960. Modern Age Coders teaches York learners from six to sixty-seven in live online lessons, one to one or in a group of five to ten set by level, with teachers in India and lessons at UK times. The first lesson is free; after it a group place costs USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Ordnance Survey lists 2,785 named roads in York. Guess how one ends before you read it, and you will be right more often with Close than with anything else, since 369 of them do. You will almost never guess Coppergate, or Shambles, which is the only name in the city with that ending. Information theory turns that feeling into a number. A likely ending carries little surprise, about 2.9 bits for Close, and a rare one carries a lot, 11.4 bits for a one-off. Averaged over the whole city, a York road ending carries 4.729 bits, the second-highest of eight English cities we measured on equal terms. Our teenagers compute it, then build a code that gets within a few hundredths of a bit of it.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in York.',

  picks: {
    eyebrow: 'Course picks for York',
    h2: 'Four courses for the walled city',
    intro: 'Let the learner\'s interests decide. Each course starts with a live lesson that is free, and booking it takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Puzzles, patterns and twenty-questions games, where asking the question that splits the options in half is the first taste of a bit.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first program to full projects, including counting words and letters in a real file of names.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Priority queues, trees and greedy algorithms built by hand, the parts a Huffman code is made from.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who handle text and data at work, from cleaning messy names to summarising them honestly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'York today',
      h2: 'A city of students inside and beyond the walls',
      intro: 'Figures from the 2021 census for the City of York council area, read from Nomis and shown exactly as the Office for National Statistics released them.',
      body: [
        { kind: 'table', caption: 'York, Census 2021', head: ['Measure', 'York', 'England'], rows: [
          ['Usual residents', '202,821', '56,490,048'],
          ['Living in households', '191,572', 'Not compared'],
          ['Living in communal establishments', '11,249', 'Not compared'],
          ['Aged 15 to 19', '15,216 (7.5%)', '5.7%'],
          ['Aged 20 to 24', '20,355 (10.0%)', '6.0%'],
          ['Students among residents aged 5 and over', '48,779 (25.1%)', '20.4%'],
          ['Usual residents per square kilometre', '745.8', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One in four studying', p: 'Of 194,206 residents aged five and over, 48,779 were schoolchildren or full-time students in 2021, a quarter of the total.' },
          { h3: 'Late teens and twenties', p: 'People aged 20 to 24 made up 10.0% of York\'s residents, against 6.0% across England, and those aged 15 to 19 were 7.5%.' },
          { h3: 'Room to breathe', p: 'At 745.8 residents per square kilometre, the council area takes in villages and farmland around the walled centre, so it is far less dense than most cities.' }
        ] },
        { kind: 'p', text: 'Our York learners reflect that spread. A Year 4 child in Haxby might be making a first game in Scratch, a Year 13 student in Fulford finishing A level Computer Science, and an adult in Acomb learning Python to tidy spreadsheets at work, each in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Old plans, old sheds',
      h2: 'A university three centuries in the making, and a museum in an engine shed',
      intro: 'From the University of York\'s own history and the National Railway Museum\'s picture history.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1617', p: 'The University of York says plans for a university in the city first appeared as early as 1617, and that it would be more than three centuries before they came to anything.' },
          { h3: '1960', p: 'Permission to build was finally granted in 1960. The site at Heslington had been, before the Second World War, a quiet rural retreat and a working agricultural village.' },
          { h3: 'The Great Hall', p: 'The National Railway Museum\'s pictures show locomotives around the turntable of York motive power depot in about 1950, in the engine shed that is now the museum\'s Great Hall, and its Leeman Road entrance in 1975.' }
        ] },
        { kind: 'p', text: 'We are not connected with the University of York or the National Railway Museum. Both stories are about a city that keeps its old names and buildings and gives them new jobs, which is also true of York\'s streets. The walled centre is full of road names nothing like those on a modern estate, and that difference can be measured.' },
        { kind: 'spec', title: 'Where the names come from', p: 'Ordnance Survey publishes Open Names as free data under the Open Government Licence, listing named roads with the council area they fall in. For the City of York it lists 2,785 distinct road names, from Coppergate and Fossgate inside the walls to the closes and avenues of the outer villages.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How surprising is a York street name?',
      intro: 'Claude Shannon defined the information in an event as the number of yes-or-no questions it takes to pin it down. Rare events carry more.',
      body: [
        { kind: 'table', caption: 'Endings of York\'s 2,785 road names, and the information each carries', head: ['Ending', 'Names', 'Share', 'Surprise in bits'], rows: [
          ['Close', '369', '13.2%', '2.92'],
          ['Street', '247', '8.9%', '3.50'],
          ['Avenue', '235', '8.4%', '3.57'],
          ['Road', '212', '7.6%', '3.72'],
          ['A -gate word, such as Coppergate', '42', '1.5%', '6.05'],
          ['An ending used only once, such as Shambles', '1 each', 'Under 0.1%', '11.44']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count the endings', p: 'Take the last word of each name. York has 151 different endings, from Close, used 369 times, to 80 that appear only once.' },
          { h3: '2. Average the surprise', p: 'Weight each ending\'s surprise by how often it occurs. That average is the entropy: 4.729 bits for York, against a maximum of 7.238 if all 151 were equally common.' },
          { h3: '3. Build a code', p: 'A fixed-length code needs 8 bits for 151 endings. A Huffman code gives short codes to common endings and averages 4.760 bits, within 0.031 of the entropy.' }
        ] },
        { kind: 'callout', h3: 'Compare cities fairly', p: 'Leeds has 12,005 road names and 253 endings, and its entropy on the full list is 4.987 bits. Measured on random samples the size of York\'s, it falls to 4.940 and shows about 120 endings, because rare endings need a big list to appear. At equal size York comes second of eight cities, below Leeds and above Newcastle at 4.410, Bristol at 4.072 and Sheffield at 4.044. Comparing entropies from lists of different sizes quietly rewards the bigger list.' },
        { kind: 'p', text: 'The ending -gate is a York signature: 47 of its road names end that way, 1.7% of the total, against 86 of 12,005 in Leeds and 31 of 6,457 in Sheffield. Bristol shows the opposite pattern. Road ends 30.1% of its names, so a Bristol ending is easier to guess and, on its full list, carries only 4.092 bits on average.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Measuring information',
      h2: 'Five habits for anyone who counts categories',
      intro: 'Practised on street names, then used on passwords, text compression, survey answers, error messages and the language models behind AI tools.',
      body: [
        { kind: 'table', caption: 'Using entropy without fooling yourself', head: ['Habit', 'On York\'s road names', 'What it prevents'], rows: [
          ['Define the category first', 'Last word, with Stonegate and Coppergate grouped as -gate words', 'Two analysts getting different numbers from the same list'],
          ['Report the maximum too', '4.729 bits out of a possible 7.238', 'A number with no sense of scale'],
          ['Match sample sizes', 'Leeds cut to 2,785 names before comparing', 'Rewarding the bigger list for its size'],
          ['Keep the rare cases', '80 endings appear once, and they carry the most information', 'Throwing away what makes the city distinctive'],
          ['Check against a code', 'A Huffman code averages 4.760 bits', 'Trusting a formula that nothing has tested']
        ] },
        { kind: 'p', text: 'The first habit decides everything else. Treat Stonegate as its own ending and York gains dozens of one-off endings and a higher entropy; group every -gate word together and the number drops. Neither is wrong, but the rule must be stated, and it must be the same for every city in a comparison.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Twenty questions played with street names, and the discovery that a good first question halves the list.' },
          { h3: 'Teenagers', p: 'Open Names read in Python, endings counted, entropy computed, and a Huffman code built and checked against it.' },
          { h3: 'Adults', p: 'Categorical data at work, summarised with entropy and compared across groups of equal size.' }
        ] },
        { kind: 'p', text: 'We have no link with Ordnance Survey, the University of York, the National Railway Museum or City of York Council. Open Names is published under the Open Government Licence and the census figures are public; the counts, entropies and codes on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From twenty questions to Shannon entropy',
    intro: 'Treat the age bands as rough. The free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Good questions', p: 'Guessing games where each yes-or-no question cuts the options, and counting how many questions a guess really needs.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Counting and chance', p: 'Tallying words in code, turning counts into fractions, and seeing that rare things are harder to guess.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Entropy and codes', p: 'Logarithms in bits, Shannon entropy on real names, and a Huffman code built with a priority queue.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Information at work', p: 'Entropy for categorical data, compression and the cross-entropy loss used to train AI models.', courses: ['python-ai-automation-masterclass-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Language models predict the next word for a living. Why should a York teenager learn about surprise?',
    intro: 'Because surprise is exactly what those models are trained to reduce.',
    p1: 'A language model is scored during training by how surprised it is by the real next word, measured in the same bits this page uses. A learner who has computed the surprise of Close against Shambles understands, in a small and concrete way, what the model is being pushed to learn and why common phrases come out fluent while rare facts come out wrong.',
    p2: 'Entropy also explains compression, from zip files to the way images and speech travel across networks. The same few lines of Python that measure York\'s street names measure how much any message can be squeezed, and whether a code is wasting space. It is one of the few ideas in computing that runs from a guessing game to the frontier of AI without changing shape.',
    closer: 'So a York teenager should still learn to program in 2026, in a city whose street names have outlasted most of its buildings: AI is built on prediction, and knowing how to measure a surprise is where understanding it starts.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Haxby, Holgate or Heslington, from home',
    intro: 'Crossing York at school-run time can take longer than the lesson. A live online class takes the trip away.',
    cells: [
      { h3: 'Inside and outside the walls', p: 'A learner in Bishopthorpe and another in Huntington can join the same lesson without anyone driving round the ring road.' },
      { h3: 'Stage names York uses', p: 'Reception, Key Stages 1 to 4, GCSE options and A levels, named as York schools name them, and every lesson taught in English.' },
      { h3: 'A lesson with substance', p: 'The free session teaches something real, then recommends a level, a course and a weekly time. Booking needs no card details.' },
      { h3: 'Matched by stage', p: 'Groups of five to ten learners at one level, from York, elsewhere in the UK and abroad, so every stage has a workable time.' },
      { h3: 'Two lessons, every week', p: 'Two regular weekly lessons, around eight a month, with holidays and exam weeks settled with the teacher in advance.' },
      { h3: 'One steady clock', p: 'India keeps one time all year, four and a half hours ahead of York during British Summer Time and five and a half in winter, which keeps UK after-school and evening lessons inside the teaching day.' }
    ],
    spec: { title: 'Across the Vale of York', p: 'Families in Selby, Tadcaster, Pocklington or Easingwold join exactly the same classes, since everything is online and groups are formed by level.' }
  },

  fees: {
    h2: 'York lesson fees',
    intro: 'A free first lesson, then a single monthly fee.',
    first: 'A full lesson at no cost, ending with a level, a course we recommend and a weekly time to consider.',
    group: 'Around eight live lessons a month in a group of five to ten learners working at one stage.',
    private: 'Around eight live lessons a month, with the teacher giving your learner all of the time.',
    closer: 'Every family outside India pays the same US dollar fee, whether in Dringhouses or Tang Hall, and we publish no prices in pounds. No payment is taken until the free lesson has agreed a course and a slot; the pricing page covers pausing, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families, printed as they wrote them',

  book: {
    h2: 'Book a free lesson for a York learner',
    intro: 'The first task suits the level: a twenty-questions game for a young child, a short Python program that counts words for a beginner, or the Open Names file and an entropy calculation for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your York learner.'
  },

  faq: {
    h2: 'York coding class questions',
    intro: 'What York families ask us most often.',
    items: [
      { q: 'How many people live in York?', a: 'Census 2021 counted 202,821 usual residents in the City of York council area, with 191,572 living in households and 11,249 in communal establishments such as student halls and care homes.' },
      { q: 'How does York compare with England?', a: 'In 2021, 10.0% of York residents were aged 20 to 24 against 6.0% in England, 25.1% of those aged five and over were students against 20.4%, and there were 745.8 residents per square kilometre against 433.5.' },
      { q: 'What is entropy in computing?', a: 'A measure, in bits, of how unpredictable something is on average. Common outcomes carry little information and rare ones carry a lot; entropy is the average, and it sets the shortest possible average length of a code.' },
      { q: 'How unpredictable are York\'s street names?', a: 'In our analysis a York road-name ending carries 4.729 bits of information on average. On lists of equal size that is second of the eight cities we measured, behind Leeds and ahead of Newcastle, Bristol and Sheffield.' },
      { q: 'Where do the street names come from?', a: 'Ordnance Survey Open Names, free data published under the Open Government Licence. For the City of York it lists 2,785 distinct road names, 47 of which end in -gate.' },
      { q: 'How old are the plans for the University of York?', a: 'The University says plans for a university in York first appeared as early as 1617, and permission to build was granted in 1960. We are not connected with the University.' },
      { q: 'When do York lessons take place?', a: 'Weekday afternoons and evenings or weekends, at a UK time settled in the free lesson. India is four and a half hours ahead of York in summer and five and a half hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in York?', a: 'No. There is no centre in York and no premises anywhere in the UK, because all lessons are live online. Learners need a computer with working sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do York lessons cost?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before anything is charged.', boiler: true },
      { q: 'How are York groups formed?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. When no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'Yorkshire cities and beyond',
    html: 'Down the Ouse to the Humber, the <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull page</a> runs a flood fill across a height map of the city, and to the south-west <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> samples a year of footfall fairly. <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle</a> colours a map of its wards with as few colours as possible. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every city we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'York and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/best-coding-class-in-hull', label: 'Hull' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-yrk .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3.1vw, 2.6rem); }
.cg-root.cg-yrk .cg-hero h1 { font-weight: 720; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-yrk .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-yrk .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-yrk .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-yrk .cg-grid-3 { gap: clamp(1rem, 2.7vw, 2.2rem); }
.cg-root.cg-yrk .cg-table th { letter-spacing: 0.028em; }
.cg-root.cg-yrk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-yrk .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-yrk .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'York, Census 2021 via Nomis (E06000014): TS001 202,821 usual residents, 191,572 in households, 11,249 in communal establishments; TS007A 15,216 aged 15 to 19 (7.5 percent, England 5.7), 20,355 aged 20 to 24 (10.0 percent, England 6.0); TS068 48,779 students of 194,206 residents aged 5 and over (25.1 percent, England 20.4); TS006 745.8 usual residents per square kilometre (England 433.5). University of York, History of the University: plans first appeared as early as 1617; permission granted in 1960; Heslington before the Second World War a quiet rural retreat and working agricultural village. National Railway Museum, About us: York motive power depot turntable about 1950, the engine shed now the Great Hall; Leeman Road entrance 1975.',
    localProject: 'How surprising is a York street name? OS Open Names (read 21 September 2026), Named Road rows in York: 2,785 distinct names, 151 endings (last word; -gate words grouped). Close 369 (13.2 percent, 2.92 bits), Street 247 (3.50), Avenue 235 (3.57), Lane 225 (3.63), Road 212 (3.72), -gate words 42 (6.05 bits), 80 endings used once (11.44 bits). Entropy 4.729 bits, maximum 7.238, fixed code 8 bits, Huffman 4.760. Names ending in gate: York 47 (1.7 percent), Leeds 86 of 12,005, Sheffield 31 of 6,457. Equal-size comparison (200 subsamples of 2,785): Leeds 4.940, York 4.729, Newcastle 4.410, Hull 4.117, Bristol 4.072, Sheffield 4.044, Plymouth 4.034, Nottingham 3.962; Leeds full list 4.987 with 253 endings. Lesson family: Shannon entropy, surprise in bits, Huffman coding against entropy, sample-size bias; distinct from Cardiff Zipf rank-size and Wolverhampton trie prefixes.',
    requiredMentions: [
      '202,821',
      '191,572',
      '745.8',
      '20,355',
      '48,779',
      '194,206',
      '4.729',
      'Shambles',
      'Heslington',
      'Coppergate',
      'entropy',
      'Leeman Road'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, York: 202,821 usual residents; 191,572 in households; 11,249 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000014' },
      { claim: 'Nomis, Census 2021 TS007A: York and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000014,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: York 48,779 students of 194,206 aged 5 and over (25.1 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000014,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, York 745.8 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000014,E92000001' },
      { claim: 'Ordnance Survey Open Names (CSV download): named roads with council area.', url: 'https://api.os.uk/downloads/v1/products/OpenNames/downloads' },
      { claim: 'University of York, History of the University: 1617 plans, 1960 permission, Heslington before the Second World War.', url: 'https://www.york.ac.uk/about/history/' },
      { claim: 'National Railway Museum, About us: York motive power depot about 1950, now the Great Hall; Leeman Road entrance 1975.', url: 'https://www.railwaymuseum.org.uk/about-us' }
    ],
    rejectedClaims: [
      'The Old Norse origin of -gate street names: every candidate source tried (Jorvik Viking Centre, York Archaeology, Visit York) returned 403, so the page states the count and not the etymology.',
      'Any claim that York has the most varied street names in England: only eight cities were measured, and Leeds scored higher.',
      'Entropy comparisons on lists of different sizes: replaced by equal-size subsamples after the full-list figures were shown to favour larger lists.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, the University of York, the National Railway Museum or City of York Council.'
    ]
  }
};
