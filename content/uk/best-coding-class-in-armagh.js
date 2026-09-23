'use strict';
// Armagh (cg- city page, UK cluster Phase 4, Northern Ireland). Spine: how out of order is Dreyer's catalogue today?
// Counting inversions with merge sort on OpenNGC (Mattia Verga, CC BY-SA 4.0; database_files/NGC.csv, read 23 September
// 2026; scratchpad arm/inv.py, inv2.py): 13,970 rows; 7,840 plain NGC numbers (1 to 7840) with J2000 positions, listed in
// catalogue order and compared by right ascension. Raw count: 359,626 inversions of 30,728,880 pairs (1.170 percent);
// merge sort 63,917 comparisons against 30,728,880 for checking every pair. Right ascension is circular: the last 40
// entries (NGC 7801 to 7840) now sit just after 0h (NGC 7840 at 00:07:08.8, NGC 1 at 00:07:15.8); unwrapping them
// leaves 47,634 inversions (0.155 percent), so the wrap alone produced 311,992. Adjacent pairs out of order: 3,126 of
// 7,839. Displacement from sorted position: median 4 places, 90th percentile 19, largest 1,923 (NGC 2573, declination
// -89 20 04, in Octans). By declination band after unwrapping: south of -60, 571 entries, 0.760 percent, median
// displacement 16; within 30 of the equator, 4,459 entries, 0.076 percent, median 3; north of +60, 413 entries, 0.343
// percent, median 19.
// Lesson family: counting inversions by divide and conquer (merge sort, O(n log n) against O(n squared), circular
// quantities, measuring how unsorted a list is). Screened 23 September 2026: merge sort and counting inversions 0 hits
// ("inversion" appears only in unrelated senses); distinct from Southampton hashing and Cambridge heaps.
// Place facts read raw 23 September 2026: NISRA Census 2021 MS-A01: Armagh settlement 16,310; Armagh DEA 32,405;
// Armagh City, Banbridge and Craigavon LGD 218,656; Northern Ireland 1,903,175. MS-A02 (LGD total 218,656; NI 1,903,174
// by table protection): 0 to 4 14,175 (6.5 percent, NI 6.0), 5 to 9 15,431 (7.1, NI 6.5), 10 to 14 15,814 (7.2, NI 6.7),
// 20 to 24 11,570 (5.3, NI 5.9). Settlements (MS-A01): Keady 3,343; Tandragee 3,545; Richhill 2,738; Markethill 1,912;
// Hamiltonsbawn 1,041; Banbridge 17,400. Armagh Observatory and Planetarium, History: opened in 1790 by Archbishop
// Robinson; Thomas Romney Robinson appointed director in 1823 and served 59 years; he died on 28 February 1882 and was
// succeeded by John Louis Emil Dreyer, a Dane; Howard Grubb built a 10-inch refractor in 1885 in the new Robinson
// Memorial Dome; Dreyer's New General Catalogue of Nebulae and Clusters of Stars remains the principal catalogue of
// nebulae and galaxies used by astronomers. Weather pages: measurements began in 1794 and daily in 1795, uninterrupted
// since; a Stevenson Screen installed in 1865; on 6 January 1839, the Night of the Big Wind, Robinson logged a
// "tremendous gale in the night", which inspired his cup anemometer.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'ARMAGH', blurb: 'The observatory city, with a project that measures how far Dreyer\'s star catalogue has drifted out of order since he compiled it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-armagh',
  code: 'agh',
  accent: '#153F79',
  accentRationale: 'Armagh: a night-sky blue for the Observatory, from the solver (8.44:1 on every paper tint, dE 6.2 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Armagh',
    eyebrow: 'Armagh, Northern Ireland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Armagh City, Banbridge and Craigavon' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Armagh, Northern Ireland',
  title: 'Best Coding Classes in Armagh | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Armagh learners aged 6 to 67, and in Richhill, Markethill and Keady too. The first lesson is completely free.',
  ogDescription: 'Coding and AI lessons for Armagh, on a page that counts how far Dreyer\'s New General Catalogue has drifted out of order since he compiled it.',
  twitterDescription: 'Armagh learners aged six to sixty-seven can study coding, Python and AI with us in live online lessons, and the first one is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Armagh Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, algorithms and astronomy data, AI and mathematics taught live online in English to Armagh children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Armagh',
  capsuleQ: 'What are the best coding classes in Armagh?',
  capsule: 'The Armagh settlement had 16,310 usual residents at the 2021 census, within the Armagh City, Banbridge and Craigavon district of 218,656. Armagh Observatory and Planetarium says the Observatory opened in 1790 and that its director J.L.E. Dreyer compiled the New General Catalogue, still the principal catalogue of nebulae and galaxies used by astronomers. Armagh learners aged six to sixty-seven study with our teachers in India over live video, individually or in a group of five to ten at the same stage, at times set around the Northern Ireland school and working day. The first lesson is free; after that a group place is USD 100 a month and one-to-one lessons USD 150.',
  lead: 'Dreyer\'s New General Catalogue numbers 7,840 objects, and it runs very nearly in order of position across the sky. But the sky coordinates astronomers use today are not the ones of the 1880s. How out of order is the list now? Our teenagers answer by counting inversions, the pairs listed in the wrong order, using merge sort. Checking every pair would take 30,728,880 comparisons; merge sort needs 63,917. The first answer, 359,626 inversions, is wrong: right ascension goes round in a circle, and the last 40 entries have slipped past midnight. Treat the circle properly and the true count is 47,634, with the objects near the poles by far the most scrambled.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Armagh.',

  picks: {
    eyebrow: 'Course picks for Armagh',
    h2: 'Four courses for the observatory city',
    intro: 'Choose the course closest to what the learner already enjoys. All four open with a free live lesson that needs no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards programs that sort a list and spot what is out of place.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to complete projects, enough to load a star catalogue and write merge sort from scratch.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data in Python, including catalogues where the tidy-looking order hides surprises.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who handle large lists and records and need fast, correct ways to sort and compare them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Armagh today',
      h2: 'A small city in a district of young families',
      intro: 'Census 2021 figures from the Northern Ireland Statistics and Research Agency for the Armagh settlement, the Armagh District Electoral Area and the Armagh City, Banbridge and Craigavon district.',
      body: [
        { kind: 'table', caption: 'Armagh and its district, Census 2021, usual residents', head: ['Area', 'Usual residents'], rows: [
          ['Armagh settlement', '16,310'],
          ['Armagh District Electoral Area', '32,405'],
          ['Armagh City, Banbridge and Craigavon', '218,656'],
          ['Northern Ireland', '1,903,175']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Children', p: 'In the district, 7.2% of residents were aged 10 to 14 and 7.1% aged 5 to 9 in 2021, against 6.7% and 6.5% across Northern Ireland.' },
          { h3: 'Young adults', p: 'People aged 20 to 24 were 5.3% of the district, a little below Northern Ireland\'s 5.9%, and 14,175 residents were under five.' },
          { h3: 'Villages around the city', p: 'Nearby settlements include Tandragee with 3,545 residents, Keady with 3,343, Richhill with 2,738 and Markethill with 1,912.' }
        ] },
        { kind: 'p', text: 'Our Armagh groups bring the city and its villages together. A P5 child in Richhill might be building a first game, a Year 11 student in Armagh working towards CCEA GCSE Digital Technology, and an adult in Tandragee learning Python for work, each in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The Observatory',
      h2: 'Stars and weather since the 1790s',
      intro: 'From Armagh Observatory and Planetarium\'s own history and weather pages.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1790', p: 'The Observatory opened, founded by Archbishop Robinson. Weather measurements began in 1794 and daily readings in 1795, and they have continued uninterrupted ever since.' },
          { h3: '6 January 1839', p: 'On the Night of the Big Wind, director Thomas Romney Robinson logged a "tremendous gale in the night", an event the Observatory says inspired his cup anemometer.' },
          { h3: '1882 onwards', p: 'After Robinson\'s death on 28 February 1882, having served as director for 59 years, J.L.E. Dreyer, a Dane, took over and compiled the New General Catalogue of Nebulae and Clusters of Stars.' }
        ] },
        { kind: 'p', text: 'The Observatory says Dreyer\'s catalogue is probably the single most important contribution to science to have come from Armagh, and that it remains the principal catalogue of nebulae and galaxies used by astronomers around the world. We have no connection with Armagh Observatory and Planetarium, Armagh City, Banbridge and Craigavon Borough Council or the OpenNGC project. The catalogue is on this page because it is a real, famous, carefully ordered list, which makes it the ideal test of how to measure order.' },
        { kind: 'spec', title: 'Where the positions come from', p: 'OpenNGC is a free database of the NGC and IC catalogues, released under a Creative Commons attribution share-alike licence, giving each object\'s modern position as right ascension and declination for the year 2000.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How out of order is Dreyer\'s catalogue today?',
      intro: 'An inversion is a pair of items listed in the wrong order. Counting them measures how unsorted a list is: zero for a perfect order, and every possible pair for a list in reverse.',
      body: [
        { kind: 'table', caption: 'OpenNGC, 7,840 NGC entries in catalogue order, compared by modern right ascension', head: ['Measure', 'Result'], rows: [
          ['Pairs to check one by one', '30,728,880'],
          ['Comparisons made by merge sort', '63,917'],
          ['Inversions, counting right ascension as a straight line', '359,626'],
          ['Inversions, treating right ascension as a circle', '47,634 (0.155% of pairs)'],
          ['Typical distance from sorted position', '4 places']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Split and merge', p: 'Merge sort splits the list in half, sorts each half and merges them. When an item from the right half jumps ahead of items still waiting on the left, each of those is one inversion.' },
          { h3: '2. Spot the wrap', p: 'Right ascension runs from 0 to 24 hours and then starts again. NGC 7840 now sits at 0 hours 7 minutes, seconds away from NGC 1, so the last 40 entries look out of order when they are not.' },
          { h3: '3. Count by region', p: 'Split the sky by declination and count again. Near the equator only 0.076% of pairs are inverted; south of minus 60 degrees it is 0.760%, and north of plus 60, 0.343%.' }
        ] },
        { kind: 'callout', h3: 'A circle is not a line', p: 'Our first count, 359,626, was almost entirely an artefact: 311,992 of those inversions came from 40 objects that had crossed midnight in right ascension. Nothing about the sky was wrong; the code had treated a circular quantity like a ruler. It is one of the most common mistakes with angles, times of day and dates across New Year, and the only cure is to think about what the numbers mean before trusting a count.' },
        { kind: 'p', text: 'Once the circle is handled, the pattern makes physical sense. The slow wobble of the Earth\'s axis shifts sky coordinates over the years, and right ascension shifts fastest close to the poles, where the lines of right ascension crowd together. The most displaced entry of all is NGC 2573, just 40 arcminutes from the south celestial pole: it now sits 1,923 places from where its modern right ascension would put it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Measuring order',
      h2: 'Five questions before trusting a sorted list',
      intro: 'Learned on Dreyer\'s catalogue, then used for search results, rankings of every kind, version histories and the checks that compare two recommendation lists.',
      body: [
        { kind: 'table', caption: 'Choices behind an inversion count', head: ['Question', 'For the NGC', 'What goes wrong if you skip it'], rows: [
          ['What is the sort key?', 'Modern right ascension for each entry', 'Comparing positions from different eras'],
          ['Is the key circular?', 'Yes: 24 hours wraps to 0', 'Hundreds of thousands of false inversions'],
          ['How fast is the count?', 'Merge sort, 63,917 comparisons', 'Tens of millions of checks for one number'],
          ['What counts as an entry?', 'The 7,840 plain NGC numbers', 'Sub-components counted twice'],
          ['Where is the disorder?', 'By declination band', 'A single average hiding the poles']
        ] },
        { kind: 'p', text: 'The fourth row is a judgement call. OpenNGC also lists extra entries for objects that split into parts; we used only the 7,840 plain numbers so that each catalogue number counts once. A different choice would change the count slightly, and the honest report says which was used.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Lining up numbered cards, counting how many pairs are in the wrong order, and finding the quickest way to tidy them.' },
          { h3: 'Teenagers', p: 'Merge sort in Python with an inversion counter, run on 7,840 real catalogue entries, with the circular right ascension handled properly.' },
          { h3: 'Adults', p: 'Comparing orderings at work, from rankings to schedules, with keys, wrap-arounds and duplicates checked first.' }
        ] },
        { kind: 'p', text: 'We are not connected with Armagh Observatory and Planetarium, the OpenNGC project, NISRA or Armagh City, Banbridge and Craigavon Borough Council. The catalogue data and census tables are published openly; the counts, unwrapping and band comparison on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From numbered cards to merge sort',
    intro: 'Treat the ages as a guide; the free lesson finds where each learner should start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Out of order', p: 'Sorting numbered cards and counting the pairs that are in the wrong order along the way.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Sorting in code', p: 'Writing simple sorts in Python and timing them on longer and longer lists.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Divide and conquer', p: 'Merge sort with an inversion count, tested against checking every pair on a real star catalogue.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Orderings at work', p: 'Measuring how much two rankings or schedules disagree, fast and without wrap-around mistakes.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI ranks everything from search results to songs. Why should an Armagh teenager count inversions in a star catalogue?',
    intro: 'Because comparing two orderings is how ranking systems are tested, and the count only means something if the keys are handled correctly.',
    p1: 'When an AI system ranks results, engineers measure how far its order is from a trusted one, often by counting pairs in the wrong order. A learner who has done exactly that on 7,840 real objects, and caught a 311,992-pair error caused by a circular key, knows both the method and its most common trap.',
    p2: 'The speed lesson matters too. Checking every pair of 7,840 items takes over thirty million comparisons; merge sort does it in under sixty-four thousand. As data grows to millions of items, choosing the right algorithm is the difference between an answer now and an answer never.',
    closer: 'So an Armagh teenager should keep learning to code in 2026, in the city where Dreyer ordered the heavens: computers can sort anything instantly, but someone has to know what the numbers mean before they count them.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Armagh, Keady or Markethill, all from home',
    intro: 'The city is ringed by villages and small towns. Online, each of them is the same distance from the lesson.',
    cells: [
      { h3: 'City and villages', p: 'A learner in Hamiltonsbawn and another in Keady can share one class without a journey into Armagh.' },
      { h3: 'Northern Ireland school years', p: 'Lessons use the names local schools use, from P1 to Year 14, including the transfer test years and CCEA GCSEs and A levels, and teaching is in English.' },
      { h3: 'A lesson, not a pitch', p: 'The free session teaches a genuine task and ends with a recommended level, course and weekly slot. No card details are taken.' },
      { h3: 'Stage, not postcode', p: 'Five to ten learners at the same level, from Armagh, across the UK and abroad, so every stage has a sensible time.' },
      { h3: 'A twice-weekly pattern', p: 'Two fixed lessons each week, around eight a month, with holidays and exam weeks agreed with the teacher in advance.' },
      { h3: 'Evenings in two time zones', p: 'A 5 pm lesson in Armagh begins at 9.30 pm in India during summer time and 10.30 pm in winter, because India never changes its clocks; our teachers plan their evenings around families here.' }
    ],
    spec: { title: 'Across County Armagh and beyond', p: 'Families in Portadown, Lurgan, Banbridge or Newry join exactly the same groups, since every lesson is online and groups are formed by level.' }
  },

  fees: {
    h2: 'Armagh lesson fees',
    intro: 'The first lesson is free, then there is one monthly fee.',
    first: 'A full lesson at no charge, ending with our advice on level, course and weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'About eight live lessons a month, with the teacher focused on your learner alone.',
    closer: 'Families in Richhill or Tandragee pay in US dollars, as every family outside India does, and our pages carry no pound prices. The free lesson comes first, with billing only after a course and weekly time are agreed; the pricing page explains pauses, missed lessons and switching between group and one-to-one teaching.'
  },

  reviewsH2: 'Six Google reviews from families, exactly as written',

  book: {
    h2: 'Book a free lesson for an Armagh learner',
    intro: 'The first task is chosen for the learner: a card-sorting game for a young child, a short Python program that sorts a list for a beginner, or Dreyer\'s catalogue and merge sort for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Armagh learner.'
  },

  faq: {
    h2: 'Armagh coding class questions',
    intro: 'The questions Armagh families ask us most.',
    items: [
      { q: 'How many people live in Armagh?', a: 'Census 2021 counted 16,310 usual residents in the Armagh settlement, 32,405 in the Armagh District Electoral Area and 218,656 in the Armagh City, Banbridge and Craigavon district.' },
      { q: 'How does the district compare with Northern Ireland?', a: 'It has slightly more children: 7.2% of residents were aged 10 to 14 and 7.1% aged 5 to 9 in 2021, against 6.7% and 6.5% across Northern Ireland, while 5.3% were aged 20 to 24, against 5.9%.' },
      { q: 'What is an inversion count?', a: 'The number of pairs in a list that appear in the wrong order. It is zero for a perfectly sorted list, and it can be counted quickly with merge sort instead of checking every pair.' },
      { q: 'How out of order is the New General Catalogue today?', a: 'Using modern positions from OpenNGC, 47,634 of its 30,728,880 pairs are in the wrong order, 0.155%, once right ascension is treated as a circle. Objects near the celestial poles are the most displaced.' },
      { q: 'Where does the catalogue data come from?', a: 'From OpenNGC, a free database of NGC and IC objects released under a Creative Commons attribution share-alike licence, which gives each object\'s position for the year 2000.' },
      { q: 'Who was Dreyer?', a: 'John Louis Emil Dreyer, a Dane, became director of Armagh Observatory after Thomas Romney Robinson died in 1882, and compiled the New General Catalogue of Nebulae and Clusters of Stars. We are not connected with the Observatory.' },
      { q: 'When are Armagh lessons?', a: 'Families in Armagh usually pick a slot after school, on a weekday evening or at the weekend, and we agree the time in the free lesson. India is four and a half hours ahead of Northern Ireland in summer and five and a half in winter.' },
      { q: 'Is there a centre in Armagh?', a: 'No. There is no Armagh centre and we have no premises anywhere in the UK, as every lesson is live online. A learner needs a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'What do lessons cost for an Armagh learner?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one lessons on the same timetable are USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. When no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Northern Ireland and the UK',
    h2: 'Northern Ireland and beyond',
    html: 'In Belfast, the <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast page</a> runs PageRank over the city\'s bus stops. Learners working towards <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology</a> or <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">A level Software Systems Development</a> have their own pages. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland guide</a> explains school years, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Armagh and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-belfast', label: 'Belfast' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/ccea-gcse-digital-technology-programming-help', label: 'CCEA GCSE Digital Technology' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-agh .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-agh .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-agh .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-agh .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-agh .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-agh .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.15rem); }
.cg-root.cg-agh .cg-table th { letter-spacing: 0.026em; }
.cg-root.cg-agh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-agh .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-agh .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'NISRA Census 2021 MS-A01: Armagh settlement 16,310; Armagh DEA 32,405; Armagh City, Banbridge and Craigavon 218,656; Northern Ireland 1,903,175; settlements Tandragee 3,545, Keady 3,343, Richhill 2,738, Markethill 1,912, Hamiltonsbawn 1,041. MS-A02 (LGD): 0 to 4 14,175 (6.5 percent, NI 6.0), 5 to 9 15,431 (7.1, NI 6.5), 10 to 14 15,814 (7.2, NI 6.7), 20 to 24 11,570 (5.3, NI 5.9); NI total 1,903,174 in MS-A02 by table protection, so the MS-A01 total is used. Armagh Observatory and Planetarium: opened 1790 (Archbishop Robinson); weather from 1794, daily from 1795; Night of the Big Wind 6 January 1839 and the cup anemometer; Thomas Romney Robinson director from 1823 for 59 years, died 28 February 1882; J.L.E. Dreyer; Grubb 10-inch refractor 1885; New General Catalogue the principal catalogue of nebulae and galaxies.',
    localProject: 'How out of order is Dreyer\'s catalogue today? OpenNGC (CC BY-SA 4.0), 7,840 plain NGC entries with J2000 positions. Merge sort inversion count: 63,917 comparisons against 30,728,880 pairs. Raw 359,626 inversions (1.170 percent); last 40 entries (NGC 7801 to 7840) wrapped past 0h; unwrapped 47,634 (0.155 percent), wrap artefact 311,992. Adjacent descents 3,126 of 7,839. Median displacement 4 places; 90th percentile 19; max 1,923 (NGC 2573, -89 20). Bands: south of -60 0.760 percent (median displacement 16); equator band 0.076 (3); north of +60 0.343 (19). Lesson family: counting inversions with merge sort.',
    requiredMentions: [
      '16,310',
      '218,656',
      '32,405',
      'Dreyer',
      'New General Catalogue',
      'Romney Robinson',
      'Big Wind',
      'Richhill',
      'Markethill',
      'Tandragee',
      'Keady',
      'OpenNGC'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 MS-A01 usual resident population: settlement, DEA, LGD and Northern Ireland tables.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'NISRA, Census 2021 MS-A02 usual residents by age: Armagh City, Banbridge and Craigavon and Northern Ireland.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a02.xlsx' },
      { claim: 'Armagh Observatory and Planetarium, History: 1790; Thomas Romney Robinson; Dreyer and the New General Catalogue.', url: 'https://armagh.space/heritage/armagh-observatory/history' },
      { claim: 'Armagh Observatory and Planetarium, Weather History and Overview of Meteorology: records from 1794, daily from 1795; Night of the Big Wind 1839.', url: 'https://armagh.space/weather/history' },
      { claim: 'OpenNGC (Mattia Verga), NGC.csv, released under CC BY-SA 4.0.', url: 'https://github.com/mattiaverga/OpenNGC' }
    ],
    rejectedClaims: [
      'A claim about the epoch Dreyer used for his positions: not taken from a fetched source; the page says only that coordinates have changed since the 1880s and that the catalogue runs very nearly in position order, which our own count shows.',
      'The Observatory\'s description of Robinson\'s 59 years as a world record for an observatory director: not repeated.',
      'A test of the 1865 Stevenson Screen change on the Met Office Armagh file: temperatures there begin in 1865, so no before-and-after comparison is possible from that source.',
      'OpenNGC component entries such as lettered parts: excluded so each NGC number counts once, and the page says so.',
      'Nationality, religion, community background and other identity data: excluded by the cluster rules.',
      'Any affiliation with Armagh Observatory and Planetarium, OpenNGC, NISRA or Armagh City, Banbridge and Craigavon Borough Council.'
    ]
  }
};
