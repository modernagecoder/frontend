'use strict';
// Salford (cg- city page, UK cluster Phase 4). Spine: eighteen numbers per neighbourhood, two that matter.
// Principal component analysis of age structure across Salford's 34 middle layer super output areas (Census 2021
// TS007A via Nomis NM_2020_1, geography E08000006TYPE152, 18 five-year age bands as shares of each area's total,
// read 23 September 2026; area names from the House of Commons Library MSOA Names 2.2; scratchpad slf/pca.py).
// Standardised shares: PC1 61.1 percent of variance, PC2 18.9, PC3 9.1; first two 80.0. PC1 loads positive on ages
// 20 to 39 (25 to 29 0.27, 20 to 24 0.27, 30 to 34 0.25, 35 to 39 0.18) and negative on 60 and over (60 to 64,
// 65 to 69, 70 to 74 each -0.28, 80 to 84 -0.27): highest Salford Quays (E02006963), Greengate and Blackfriars
// (E02006959), Ordsall East (E02006962); lowest Worsley (E02001170), Ellenbrook and Boothstown (E02001169), Swinton
// South East and Pendlebury West (E02001171). PC2 loads on children (under 5 -0.47, 5 to 9 -0.47, 10 to 14 -0.42,
// 15 to 19 -0.31, sign flipped for reading): most child-heavy Broughton East (E02006957), Broughton Park
// (E02001166), Little Hulton North (E02001157). Centred but unscaled: PC1 76.3 percent, dominated by 25 to 29 (0.65)
// and 20 to 24 (0.57). Extremes: share aged 20 to 29 from 49.7 percent (Ordsall East) to 8.0 (Worsley); under 15
// from 36.8 (Broughton East) to 5.1 (Salford Quays); 65 and over from 22.3 (Worsley) to 2.7 (Greengate and
// Blackfriars). MSOA totals are not summed on the page.
// Lesson family: principal component analysis (dimension reduction, loadings, scaling choice, variance explained).
// Screened 23 September 2026: principal component 0 hits site-wide; distinct from Kildare k-means clustering.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Salford E08000006: TS001 269,923 usual residents,
// 264,237 in households, 5,686 in communal establishments; TS007A 22,657 aged 20 to 24 (8.4 percent, England 6.0),
// 26,435 aged 25 to 29 (9.8, England 6.6), 24,441 aged 30 to 34 (9.1, England 7.0); TS068 56,815 students of
// 252,666 aged 5 and over (22.5 percent, England 20.4); TS006 2,777.2 usual residents per square km (England 433.5).
// Working Class Movement Library, About: an independent library and archive covering 200 years of working class
// history; founded in the 1950s by Edmund and Ruth Frow, both trade unionists, Eddie an engineer and Ruth a
// teacher, whose Manchester home was packed floor to ceiling with books; a charitable trust from 1971; moved in 1987
// to Jubilee House in Salford, a Grade II listed building. Salford Museum site returned 403.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'SALFORD', blurb: 'The city of the Quays, with a project that squeezes eighteen age bands for every neighbourhood into two numbers that tell its story.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-salford',
  code: 'slf',
  accent: '#3D5971',
  accentRationale: 'Salford: a Quays slate blue from the solver (5.95:1 on every paper tint, dE 6.5 from the nearest used accent), greyer than the Portsmouth navy and lighter than the Aberdeen slate',
  pageType: 'city',
  place: {
    name: 'Salford',
    eyebrow: 'Salford, Greater Manchester',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Salford' },
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Salford, England',
  title: 'Best Coding Classes in Salford | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Salford learners aged 6 to 67, from Salford Quays and Eccles to Worsley and Swinton. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Salford, on a page that uses principal component analysis to boil 18 age bands per neighbourhood down to two telling numbers.',
  twitterDescription: 'Salford learners aged six to sixty-seven can learn coding, Python and AI live online with us, beginning with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Salford Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, data science, AI and mathematics taught live online in English to Salford children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Salford',
  capsuleQ: 'What are the best coding classes in Salford?',
  capsule: 'Census 2021 counted 269,923 usual residents in Salford, and 9.8% of them were aged 25 to 29, against 6.6% in England. The Working Class Movement Library, begun in the 1950s by Eddie and Ruth Frow from the books that filled their home, has been at Jubilee House in Salford since 1987. Anyone in Salford from six to sixty-seven can take our live video lessons, joining a class of five to ten at a matching level or learning privately, with teachers in India who keep UK hours. The first lesson is free; then a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'The 2021 census splits Salford into 34 neighbourhoods and counts each one\'s residents in 18 age bands, from under-fives to over-85s. That is 612 numbers, too many to see at once. Principal component analysis asks which combinations of them vary most from place to place. For Salford, one combination does most of the work: the share of people in their twenties and thirties set against the share over sixty. It alone captures 61.1% of the variation, with Salford Quays, Greengate and Ordsall at one end and Worsley at the other. A second combination, the share of children, adds 18.9%. Our teenagers compute both, and learn why the answer changes if the numbers are not scaled first.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Salford.',

  picks: {
    eyebrow: 'Course picks for Salford',
    h2: 'Four courses for the city of the Quays',
    intro: 'Pick according to what the learner already enjoys. There is a free live lesson at the start of each course, and no card is needed.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Games and animations made from blocks, including simple charts that sort things into groups.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Census tables and other public data in Python, from spreadsheets to the analysis on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning for teenagers, where principal components are a standard first step before training a model.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Data science for adults, including dimension reduction, clustering and communicating what a model found.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Salford today',
      h2: 'A city of young working adults',
      intro: 'Census 2021 figures for the City of Salford, published by the Office for National Statistics and read from Nomis.',
      body: [
        { kind: 'table', caption: 'Salford, Census 2021', head: ['Measure', 'Salford', 'England'], rows: [
          ['Usual residents', '269,923', '56,490,048'],
          ['Living in households', '264,237', 'Not compared'],
          ['Aged 20 to 24', '22,657 (8.4%)', '6.0%'],
          ['Aged 25 to 29', '26,435 (9.8%)', '6.6%'],
          ['Aged 30 to 34', '24,441 (9.1%)', '7.0%'],
          ['Students among residents aged 5 and over', '56,815 (22.5%)', '20.4%'],
          ['Usual residents per square kilometre', '2,777.2', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Twenties and thirties', p: 'Each five-year band from 20 to 34 made up a larger share of Salford\'s residents in 2021 than of England\'s, led by 25 to 29 at 9.8%.' },
          { h3: 'Students too', p: 'Of 252,666 residents aged five and over, 56,815 were at school or in full-time study, 22.5% against 20.4% for England.' },
          { h3: 'One city, many places', p: 'At 2,777.2 residents per square kilometre on average, Salford joins dense riverside flats to the older suburbs and villages of its western side.' }
        ] },
        { kind: 'p', text: 'Our Salford learners cover that range. A Year 3 child in Broughton might be making a first game, a Year 11 student in Eccles revising for GCSE Computer Science, and a young professional at the Quays learning Python for a data role, each in a small group at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A library built from one home',
      h2: 'The Working Class Movement Library and Jubilee House',
      intro: 'From the Working Class Movement Library\'s own account of itself.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The 1950s', p: 'Edmund and Ruth Frow, an engineer and a teacher, began the collection. The Library says their home was packed floor to ceiling with books and drew visitors from all over the country.' },
          { h3: '1971', p: 'The collection became a charitable trust, turning one couple\'s shelves into an institution with a life of its own.' },
          { h3: '1987', p: 'The Library moved into Jubilee House in Salford, a Grade II listed building, where it now cares for material covering 200 years of history.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Working Class Movement Library. It opens this page because it is a story about data before computers: thousands of items gathered, catalogued and made searchable by people who wanted others to find patterns in them. The project below works with a different collection, the census, and asks how to see the pattern in hundreds of numbers at once.' },
        { kind: 'spec', title: 'Where the neighbourhood figures come from', p: 'The Office for National Statistics publishes Census 2021 age counts for middle layer super output areas, neighbourhoods of several thousand residents each, through Nomis. Salford has 34 of them, and the House of Commons Library gives each a readable name.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two numbers that summarise 612',
      intro: 'Principal component analysis finds the direction in which the data spread out most, then the next most, each independent of the ones before.',
      body: [
        { kind: 'table', caption: 'Principal components of age structure across Salford\'s 34 neighbourhoods, age shares standardised first', head: ['Component', 'Share of variation', 'What it measures', 'Highest', 'Lowest'], rows: [
          ['First', '61.1%', 'Ages 20 to 39 against ages 60 and over', 'Salford Quays, Greengate and Blackfriars', 'Worsley, Ellenbrook and Boothstown'],
          ['Second', '18.9%', 'Children and teenagers against everyone else', 'Broughton East, Broughton Park', 'Salford Quays, Greengate and Blackfriars'],
          ['Third', '9.1%', 'Smaller, harder-to-name differences', 'Not described', 'Not described'],
          ['First two together', '80.0%', 'Most of the age story of the city', 'Not applicable', 'Not applicable']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Turn counts into shares', p: 'Divide each age band by the neighbourhood\'s total, so a big neighbourhood and a small one can be compared on the same scale.' },
          { h3: '2. Scale every band', p: 'Standardise each band so it varies on an equal footing. Otherwise the bands that swing most, the twenties, drown out everything else.' },
          { h3: '3. Find the directions', p: 'A singular value decomposition returns the components in order, with a loading for each age band that says how much it counts in each component.' }
        ] },
        { kind: 'callout', h3: 'The scaling choice changes the story', p: 'Skip the standardising step and the first component jumps to 76.3% of the variation, built almost entirely from the 25 to 29 and 20 to 24 bands. Nothing is wrong with that answer; it simply asks a different question, about the bands that vary most in raw terms. A report on principal components should always say whether the data were scaled, because the reader cannot guess.' },
        { kind: 'p', text: 'The two components match what the raw shares show. People aged 20 to 29 make up 49.7% of Ordsall East but only 8.0% of Worsley; people over 65 make up 22.3% of Worsley but 2.7% of Greengate and Blackfriars; and under-fifteens are 36.8% of Broughton East but 5.1% of Salford Quays. The analysis does not discover these facts. It shows that, between them, they describe most of how Salford\'s neighbourhoods differ by age.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Seeing many numbers',
      h2: 'Five decisions in any principal component analysis',
      intro: 'Learned on census age bands, then used on survey answers, sensor readings, images, genetics and the feature sets fed to machine learning models.',
      body: [
        { kind: 'table', caption: 'Running a principal component analysis responsibly', head: ['Decision', 'For Salford', 'What goes wrong otherwise'], rows: [
          ['What is a row?', 'One of 34 neighbourhoods, named', 'Mixing areas of very different types'],
          ['Counts or shares?', 'Shares of each neighbourhood\'s total', 'Big neighbourhoods dominating'],
          ['Scale or not?', 'Standardised, and unscaled shown too', 'The loudest variable taking over'],
          ['How many components?', 'Two, covering 80.0%', 'Keeping noise or throwing away signal'],
          ['What do they mean?', 'Read from the loadings, then checked against raw shares', 'Naming a component by guesswork']
        ] },
        { kind: 'p', text: 'Naming a component is the step people rush. The first Salford component is not called young against old because that sounds plausible; it earns the name because its loadings are positive for every band from 20 to 39 and negative for every band over 60, and because the raw shares in the top and bottom neighbourhoods confirm it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Sorting a pile of objects by the one feature that separates them most clearly, and discovering a second feature that sorts what is left.' },
          { h3: 'Teenagers', p: 'Census tables in Python, shares and standardisation, a principal component analysis written with numpy, and the loadings read carefully.' },
          { h3: 'Adults', p: 'Dimension reduction at work, for surveys, customer data or sensors, with scaling and component counts reported openly.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Office for National Statistics, the House of Commons Library, the Working Class Movement Library or Salford City Council. The census tables and neighbourhood names are published openly; the components, loadings and rankings here are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting objects to principal components',
    intro: 'These age bands are a rough guide; the free lesson confirms the starting level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sort and sort again', p: 'Grouping objects by the most useful feature first, then the next, and talking about why.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Tables into charts', p: 'Turning counts into percentages in code, and drawing charts that compare places fairly.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Principal components', p: 'Standardising data, singular value decomposition with numpy, and reading loadings on real census figures.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Dimension reduction at work', p: 'PCA for surveys, customers and sensors, and explaining what each component means to people who did not run it.', courses: ['data-science-complete-masterclass-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Machine learning libraries run PCA in one line. Why should a Salford teenager learn what it does?',
    intro: 'Because the one line hides the choice that changed the answer on this page.',
    p1: 'An AI assistant will run a principal component analysis and report that one component explains most of the variation. It may not mention whether the data were scaled, even though that choice moved the figure here from 61.1% to 76.3% and changed which ages dominate. A learner who has done both knows to ask, and knows how to read the loadings rather than trust a label.',
    p2: 'Principal components sit inside a great deal of AI. They compress images, shrink the features fed to models, and help people see what a model has learned by projecting it into two dimensions. Understanding them on a city the learner knows makes those later uses far less mysterious.',
    closer: 'So a Salford teenager should still learn to program in 2026, in a city whose library grew from one family\'s shelves: software can summarise hundreds of numbers instantly, but deciding what the summary means is still a person\'s job.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Eccles, Swinton or the Quays, from home',
    intro: 'Salford runs from the Quays out to Irlam and Little Hulton, a long way on a weekday evening. Online, there is no journey.',
    cells: [
      { h3: 'East and west Salford', p: 'A learner in Ordsall and another in Walkden can share the same class without either crossing the city.' },
      { h3: 'Stages named the English way', p: 'Reception, the four Key Stages, Year 9 options, GCSEs and A levels, as Salford schools call them, with every lesson in English.' },
      { h3: 'A first lesson with substance', p: 'The free session works through real material and closes with our suggested level, course and weekly slot, with no card requested.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at one level, from Salford, the rest of the UK and overseas, so every stage has a workable time.' },
      { h3: 'A steady schedule', p: 'Two fixed lessons a week, about eight a month, with holidays and exams planned with the teacher in advance.' },
      { h3: 'Lessons into the Indian night', p: 'A 6 pm lesson in Salford starts at 10.30 pm in India during British Summer Time and 11.30 pm in winter. Our teachers work those hours so Salford learners can join after school or work.' }
    ],
    spec: { title: 'Across Greater Manchester', p: 'Families in Manchester, Trafford, Bolton or Wigan join exactly the same classes, because lessons are online and groups are formed by level.' }
  },

  fees: {
    h2: 'Salford lesson fees',
    intro: 'One free lesson, then a single fee each month.',
    first: 'A complete lesson without charge, ending with a suggested level, course and weekly time.',
    group: 'Around eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'Around eight live lessons a month, with the teacher working with your learner alone.',
    closer: 'Irlam and Pendleton are charged the same as anywhere else outside India: one fee, in US dollars, with no pound prices on our site. We only bill after the free lesson, once a course and a time are settled, and the pricing page explains pausing, missed lessons and moving between group and one-to-one teaching.'
  },

  reviewsH2: 'Six Google reviews, kept exactly as families wrote them',

  book: {
    h2: 'Book a free lesson for a Salford learner',
    intro: 'We pick the first task by level: a sort-and-sort-again game for a young child, a short Python program that turns counts into percentages for a beginner, or the census tables and a principal component analysis for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Salford learner.'
  },

  faq: {
    h2: 'Salford coding class questions',
    intro: 'The questions Salford families ask most often.',
    items: [
      { q: 'How many people live in Salford?', a: 'Census 2021 counted 269,923 usual residents in the City of Salford, of whom 264,237 lived in households and the rest in communal establishments such as student halls and care homes.' },
      { q: 'How does Salford compare with England?', a: 'Salford skews towards young adults: in 2021, 9.8% of residents were aged 25 to 29 (England 6.6%) and 22.5% of those aged five and over were students (England 20.4%). Density was 2,777.2 residents per square kilometre, against 433.5 nationally.' },
      { q: 'What is principal component analysis?', a: 'A method that finds the few combinations of many variables that capture most of how the data vary. It lets you describe each neighbourhood with two numbers instead of eighteen while losing as little as possible.' },
      { q: 'What did it find in Salford?', a: 'One component, young adults against over-sixties, explains 61.1% of the variation in age structure across 34 neighbourhoods; a second, the share of children, adds 18.9%. Salford Quays and Worsley sit at opposite ends of the first.' },
      { q: 'Where do the neighbourhood figures come from?', a: 'Census 2021 age counts for middle layer super output areas, published by the Office for National Statistics on Nomis, with readable names from the House of Commons Library.' },
      { q: 'What is the Working Class Movement Library?', a: 'An independent library and archive, begun in the 1950s by Eddie and Ruth Frow and housed since 1987 in Jubilee House in Salford, according to the Library. We are not connected with it.' },
      { q: 'When do Salford lessons take place?', a: 'After school, in the evening or at weekends, at a UK time agreed during the free lesson. India is four and a half hours ahead of Salford in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Salford?', a: 'No. There is no Salford centre and we have no premises anywhere in the UK; every lesson is live online. A learner needs a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Salford lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Salford groups formed?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'Greater Manchester and beyond',
    html: 'Across the Irwell, the <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester page</a> times a river rise between two gauges, and up the M61 <a class="cg-inline-link" href="/best-coding-class-in-preston">Preston</a> fits a trend that one bad year cannot bend. <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a> asks where its population growth will level off. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out school stages in detail, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads to every city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Salford and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/best-coding-class-in-preston', label: 'Preston' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-slf .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-slf .cg-hero h1 { font-weight: 690; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-slf .cg-capsule { border-left: 6px double var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-slf .cg-eyebrow { letter-spacing: 0.16em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-slf .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.016em; }
.cg-root.cg-slf .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.15rem); }
.cg-root.cg-slf .cg-table th { letter-spacing: 0.025em; }
.cg-root.cg-slf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-slf .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-slf .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Salford, Census 2021 via Nomis (E08000006): TS001 269,923 usual residents, 264,237 in households, 5,686 in communal establishments; TS007A 22,657 aged 20 to 24 (8.4 percent, England 6.0), 26,435 aged 25 to 29 (9.8 percent, England 6.6), 24,441 aged 30 to 34 (9.1 percent, England 7.0); TS068 56,815 students of 252,666 residents aged 5 and over (22.5 percent, England 20.4); TS006 2,777.2 usual residents per square kilometre (England 433.5). Working Class Movement Library, About: independent library and archive covering 200 years of working class history; founded in the 1950s by Edmund and Ruth Frow, an engineer and a teacher; charitable trust 1971; moved in 1987 to Jubilee House, Salford, Grade II listed.',
    localProject: 'Two numbers that summarise 612. Census 2021 TS007A for Salford\'s 34 MSOAs (Nomis, read 23 September 2026), 18 age bands as shares; names from the House of Commons Library MSOA Names 2.2. Standardised PCA: PC1 61.1 percent (ages 20-39 positive, 60 and over negative; highest Salford Quays, Greengate and Blackfriars, Ordsall East; lowest Worsley, Ellenbrook and Boothstown), PC2 18.9 percent (children; highest Broughton East, Broughton Park), PC3 9.1; unscaled PC1 76.3 percent dominated by 20-29. Shares aged 20-29 49.7 (Ordsall East) to 8.0 percent (Worsley); under 15 36.8 (Broughton East) to 5.1 (Salford Quays); 65 and over 22.3 (Worsley) to 2.7 (Greengate and Blackfriars). Lesson family: principal component analysis; distinct from Kildare k-means and Plymouth kernel density.',
    requiredMentions: [
      '269,923',
      '264,237',
      '2,777.2',
      '26,435',
      '56,815',
      '252,666',
      'Jubilee House',
      'Frow',
      'principal component',
      'Salford Quays',
      'Broughton East',
      'Ordsall East'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Salford: 269,923 usual residents; 264,237 in households; 5,686 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000006' },
      { claim: 'Nomis, Census 2021 TS007A: Salford, England and Salford MSOA age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000006TYPE152' },
      { claim: 'Nomis, Census 2021 TS068: Salford 56,815 students of 252,666 aged 5 and over (22.5 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000006,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Salford 2,777.2 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E08000006,E92000001' },
      { claim: 'House of Commons Library, MSOA Names 2.2: readable names for middle layer super output areas.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Working Class Movement Library, About: Frows, 1950s, 1971 trust, 1987 move to Jubilee House.', url: 'https://www.wcml.org.uk/about-us/' }
    ],
    rejectedClaims: [
      'Reasons for the age pattern in any neighbourhood (for example why Broughton East has many children): not in the data, and faith or ethnicity figures are excluded by the cluster rules, so the page reports shares only.',
      'The Library\'s mission statement: not needed for the page and not quoted.',
      'Salford Museum history pages: returned 403, so the museum is not described.',
      'A Salford total built by adding the 34 neighbourhood counts: published parts are never summed; the council-area figure is used instead.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Office for National Statistics, the House of Commons Library, the Working Class Movement Library or Salford City Council.'
    ]
  }
};
