'use strict';
// Cambridge (cg- city page, UK cluster Phase 4). Spine: keep the top ten without sorting the lot. The Met
// Office historic station record for Cambridge NIAB (26 metres above sea level; monthly means from January 1959
// to a provisional August 2026, read 21 September 2026; scratchpad cam/heap.py): 812 months, 23 estimated values
// marked *, 24 missing values marked ---, 8 provisional months. A min-heap of size ten streams the record once
// and keeps the ten warmest months by mean daily maximum: July 2006 28.3C, July 2026 27.0C (provisional), July
// 2018 26.7C, August 2022 26.6C, August 1997 26.3C, July 2022 26.1C, August 2026 26.1C (provisional), and July
// 1983, 1994 and 1995 at 25.8C (the 11th is 25.7C, so no tie crosses the cut-off). Six of the ten are from 2000
// onward, two of them provisional. The heap was updated 44 times after it filled; rough comparison counts for
// 812 values are about 7,800 for a full sort (n log2 n) against about 2,700 for the heap (n log2 10). Wettest
// month: September 2005, 166.2 mm. Lesson family: priority queues (binary heaps) and top-k selection in one
// pass, with provisional values that can still move. Screened free site-wide on 21 September 2026 (priority
// queue, min-heap, binary heap: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for the Cambridge district (145,674 usual
// residents; 126,382 in households; 19,292 in communal establishments), TS007A (20,309 aged 20 to 24, 13.9%;
// 16,272 aged 25 to 29, 11.2%; England 6.0% and 6.6%; band total 145,676, never summed), TS068 (46,205
// schoolchildren and full-time students of 139,327 residents aged 5 and over, 33.2%; England 20.4%); University
// of Cambridge, Cambridge at a glance (24,927 students in 2025-2026, 13,113 staff, 31 colleges, 22,513
// applicants for around 4,890 undergraduate places in 2025, a cluster of over 5,000 knowledge-intensive
// companies); University story on the EDSAC blue plaque (two tons, a whole room at the then Mathematical
// Laboratory, now the Department of Computer Science and Technology; contributed to three Nobel Prizes; the
// Manchester Baby preceded it by 11 months); Department of Computer Science and Technology news (first
// successful program on 6 May 1949).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'CAMBRIDGE', blurb: 'The home of EDSAC, with a project that keeps the ten warmest months of a 67-year weather record in a heap.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-cambridge',
  code: 'cam',
  accent: '#962C7A',
  accentRationale: 'Cambridge: a deep mulberry from the solver (5.80:1 on every paper tint, dE 8.2 from the nearest used accent); the light Cambridge blue cannot reach 4.5:1 on paper',
  pageType: 'city',
  place: {
    name: 'Cambridge',
    eyebrow: 'Cambridge, Cambridgeshire, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Cambridgeshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Cambridge, England',
  title: 'Best Coding Classes in Cambridge | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Cambridge learners aged 6 to 67, from Chesterton to Cherry Hinton, with a live teacher. First lesson free.',
  ogDescription: 'Coding and AI classes for Cambridge, home of EDSAC, on a page that keeps the ten warmest months of 67 years of weather without ever sorting the record.',
  twitterDescription: 'Cambridge coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Cambridge Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Cambridge, taught live in English.'
  },

  h1: 'Coding classes in Cambridge',
  capsuleQ: 'What are the best coding classes in Cambridge?',
  capsule: 'Cambridge is a small city dominated by learning. Its 2021 Census count was 145,674, of whom 19,292 lived in communal establishments such as colleges, and 33.2% of residents aged five and over were schoolchildren or full-time students, far above England\'s 20.4%. It is also where EDSAC, the first practical stored-program computer, ran its first program on 6 May 1949. Modern Age Coders teaches Cambridge learners from six to sixty-seven in live online lessons, either in a group of five to ten at one level or one to one, with teachers in India and a weekly time pinned to UK hours. The first lesson is free; afterwards, a group place is USD 100 and private lessons USD 150 each month.',
  lead: 'The Met Office has kept monthly weather for a station at NIAB in Cambridge since January 1959, and the record now runs to 812 months. Which ten months were the warmest? The obvious method is to sort all 812 by temperature and read off the top. A better one, used everywhere from search engines to game leaderboards, reads the record once and keeps only a small pile of the top ten so far, always knowing which of the ten is weakest. That pile is a heap, and it needs about a third of the comparisons a full sort does. Run it on Cambridge and the answer arrives with a twist: July 2006 is warmest at 28.3C, but second place goes to July 2026, and that value is still marked provisional. Six of the ten warmest months come from 2000 or later. How the heap works, and why a provisional number deserves an asterisk in any top ten, is the lesson Cambridge\'s own weather record teaches our teenage learners here.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Cambridge.',

  picks: {
    eyebrow: 'Course picks for Cambridge',
    h2: 'Four courses for the city of EDSAC',
    intro: 'Choose by the learner\'s interests. Every course starts with a free, live lesson, and no card is needed to book it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding towards games, apps and AI, including a scoreboard that only keeps the top ten.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Heaps, stacks and queues built from scratch, with the weather record as the test data.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 13 to 18', note: 'Contest-style problems where choosing the right data structure, such as a priority queue, decides whether a solution runs in time.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Interview-standard data structures and algorithms, with priority queues and complexity worked through properly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cambridge today',
      h2: 'A city where a third of residents are studying',
      intro: 'Census 2021 figures for the Cambridge local authority district, from the Office for National Statistics tables on Nomis.',
      body: [
        { kind: 'table', caption: 'Cambridge district, Census 2021', head: ['What the Census counted', 'Cambridge', 'England'], rows: [
          ['Usual residents', '145,674', 'Not compared'],
          ['In households', '126,382', 'Not compared'],
          ['In communal establishments', '19,292', 'Not compared'],
          ['Aged 20 to 24', '20,309, 13.9%', '6.0%'],
          ['Aged 25 to 29', '16,272, 11.2%', '6.6%'],
          ['Schoolchildren and full-time students, of 139,327 aged five and over', '46,205, 33.2%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Students everywhere', p: 'A 33.2% share of residents aged five and over in school or full-time study puts Cambridge far ahead of England\'s 20.4%.' },
          { h3: 'College living', p: 'The 19,292 people in communal establishments are a large share of such a small city; the category includes student accommodation such as college rooms.' },
          { h3: 'Twenties heavy', p: 'Residents aged 20 to 24 made up 13.9% and those aged 25 to 29 another 11.2%, against 6.0% and 6.6% nationally.' }
        ] },
        { kind: 'p', text: 'Totalling the five-year age bands gives 145,676, two more than the headline 145,674, because every census table is adjusted separately for privacy. We quote the headline figure and never build our own total from the parts. For families here, the point is simpler: a child in Cambridge grows up among people who study, and we teach from the first Scratch game to university-level algorithms.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'EDSAC and the university',
      h2: 'Two tons of computer, and three Nobel Prizes',
      intro: 'From the University of Cambridge and its Department of Computer Science and Technology.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '6 May 1949', p: 'The department records that EDSAC ran its first successful program on 6 May 1949, describing it as the world\'s first fully functional stored-program computer.' },
          { h3: 'A machine the size of a room', p: 'The university says EDSAC weighed two tons and filled a whole room at the then Mathematical Laboratory, now the Department of Computer Science and Technology.' },
          { h3: 'Science it made possible', p: 'According to the university, EDSAC contributed to three Nobel Prizes in the 1960s and 1970s, in chemistry, physiology or medicine, and physics.' }
        ] },
        { kind: 'p', text: 'The university itself is careful about the order of events: its own account notes that the Manchester Baby preceded EDSAC by 11 months, but that EDSAC was the first fully functional computer to be used practically. Today the University of Cambridge reports 24,927 students for 2025 to 2026, 13,113 staff and 31 colleges, with 22,513 people applying for around 4,890 undergraduate places in 2025. We are not connected with the university. We mention it because learning to program here means learning in a place that helped invent the subject, which is a good reason to learn it properly.' },
        { kind: 'spec', title: 'A cluster of companies', p: 'The university describes the Cambridge technology cluster as home to over 5,000 knowledge-intensive companies. Many of the ideas taught on this page, heaps and priority queues among them, sit at the heart of the software those companies write.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The ten warmest months, without sorting 812',
      intro: 'A priority queue keeps the highest-ranked items seen so far and always knows which one to throw out next. We ran one over the Met Office\'s Cambridge NIAB record.',
      body: [
        { kind: 'table', caption: 'The ten warmest months at Cambridge NIAB by mean daily maximum, January 1959 to August 2026', head: ['Rank', 'Month', 'Mean daily maximum'], rows: [
          ['1', 'July 2006', '28.3C'],
          ['2', 'July 2026 (provisional)', '27.0C'],
          ['3', 'July 2018', '26.7C'],
          ['4', 'August 2022', '26.6C'],
          ['5', 'August 1997', '26.3C'],
          ['6 and 7', 'July 2022, and August 2026 (provisional)', '26.1C each'],
          ['8 to 10', 'July 1983, July 1994 and July 1995', '25.8C each']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Fill the heap', p: 'The first ten months go straight into a min-heap, a tree arranged so the coolest of the ten always sits at the top where it can be checked instantly.' },
          { h3: '2. Challenge the weakest', p: 'Each later month is compared with the top of the heap only. If it is warmer, it replaces the weakest and the tree rearranges in a few steps. This happened 44 times in 812 months.' },
          { h3: '3. Count the work', p: 'Sorting 812 values takes roughly 7,800 comparisons; the heap needs roughly 2,700, and the gap widens as the record grows.' }
        ] },
        { kind: 'callout', h3: 'The asterisk in second place', p: 'July 2026 ranks second at 27.0C and August 2026 shares sixth, but the Met Office marks both as provisional, so they can still change once checked. A top ten built without looking at that flag would present them as settled. The heap does its job perfectly; deciding whether a provisional value belongs in a ranking is a judgement about the data, and a good program reports it alongside the answer.' },
        { kind: 'p', text: 'Other flags in the file need handling too. Twenty-three values are marked as estimates with an asterisk and 24 are missing, shown as three dashes. A parser that stumbles on the asterisk or treats the dashes as zero will rank the months wrongly without any warning. Learners write the parser first, count each kind of flag, and only then let the heap loose. The same pass also finds the wettest month on record: September 2005, with 166.2 millimetres.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Finding the top k',
      h2: 'Five habits for leaderboards and rankings',
      intro: 'Learned on a weather record, used afterwards on game scores, search results, recommendation lists and anything that needs the top few from a great many.',
      body: [
        { kind: 'table', caption: 'How to build a top-k ranking you can trust', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Keep only k', 'Hold a heap of size k and compare each new item with its weakest member', 'Storing and sorting everything to use ten items'],
          ['Parse the flags', 'Handle estimates, missing values and provisional markers before ranking', 'Missing months ranked as the coldest on record'],
          ['Decide on ties', 'Say what happens when several items share the cut-off value', 'A ranking that changes depending on input order'],
          ['Mark what can change', 'Label provisional or estimated values in the output', 'A draft number presented as a record'],
          ['Measure the work', 'Count comparisons for the heap and for a full sort', 'Claiming efficiency without checking it']
        ] },
        { kind: 'p', text: 'The third habit happens not to bite in this record: three months tie at 25.8C in eighth to tenth place, and the eleventh month is cooler at 25.7C, so no tie crosses the line. Learners test their program on a made-up record where it does, because a ranking rule that has never met a tie has not really been tested.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A game high-score table that only has room for the top five, and a program that decides who gets bumped off.' },
          { h3: 'Teenagers', p: 'A real heap in Python, the Cambridge record parsed flag by flag, the top ten found, and comparisons counted.' },
          { h3: 'Adults', p: 'Top-k queries over large data at work, with ties, flags and provisional values handled explicitly.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Met Office, the University of Cambridge or its Department of Computer Science and Technology. The station record is published for public use; the ranking and comparison counts are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a high-score table to a heap you can prove',
    intro: 'The ages are a starting guide. The free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Ordering things', p: 'Sorting cards by number and building a small high-score list that keeps only the top five.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Lists that stay sorted', p: 'Inserting new scores into the right place and noticing when that becomes slow.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Heaps and priority queues', p: 'Building a binary heap, streaming a real record through it and counting comparisons.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'Ages 18 to 67', h3: 'Rankings at scale', p: 'Top-k queries, complexity and the handling of ties and flags in real data systems.', courses: ['data-structures-algorithms-masterclass-college', 'competitive-programming-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can list the warmest months in a moment. Why should a Cambridge teenager build a heap?',
    intro: 'Because a list without its asterisks is quietly telling you something false.',
    p1: 'Ask an AI tool for Cambridge\'s ten warmest months and it will likely sort the file and return a clean list, with July 2026 in second place and no mention that the Met Office marks it provisional. It may also trip over the asterisks and dashes in the file without saying so. The ranking will look authoritative. Knowing to check the flags, and to say which entries could still move, is what turns a list into an honest answer.',
    p2: 'The heap itself is worth understanding for a second reason. Priority queues decide which task a computer runs next, which route a map app tries first and which results a search engine shows. A learner who has built one understands a small, essential piece of almost every system they use, including the ones that run AI models.',
    closer: 'That is the case for a Cambridge teenager learning to program in 2026, in the city where EDSAC ran its first program: tools can rank anything, but knowing how a ranking is built, and what it leaves out, still has to be learned.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Chesterton, Cherry Hinton or Trumpington, straight from home',
    intro: 'Cambridge is compact, but even a short cycle across town is time a live online lesson gives back.',
    cells: [
      { h3: 'No ride across town', p: 'A learner in Arbury and one in Newnham can take the same lesson from their own desks, and nobody has to cross Parker\'s Piece in the rain.' },
      { h3: 'English school stages', p: 'Reception, the Key Stages, Year 9 options, GCSEs and A levels keep the names Cambridge schools use, and all teaching is in English.' },
      { h3: 'A free first session', p: 'A proper lesson on a real task, followed by a clear suggestion of level, course and time, with no card requested.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at the same stage, drawn from Cambridge, across the UK and abroad, so each level finds a workable slot.' },
      { h3: 'A fixed weekly rhythm', p: 'Two lessons a week at the same time, around eight a month, with pauses for holidays and exams agreed with the teacher.' },
      { h3: 'Taught from India', p: 'India keeps one clock all year, so our teachers run four and a half hours ahead of Cambridge in summer and five and a half in winter, which places after-school and evening slots within their day.' }
    ],
    spec: { title: 'University students and schoolchildren alike', p: 'In a city where a third of residents aged five and over are studying, we get requests for early after-school lessons and for late-evening ones from university students in roughly equal numbers, and both fit.' }
  },

  fees: {
    h2: 'What classes cost in Cambridge',
    intro: 'The complete price list is three lines long.',
    first: 'A full lesson at no cost, ending with a level, a recommended course and a proposed weekly slot.',
    group: 'One month of teaching, usually eight lessons, in a group of five to ten learners at one level.',
    private: 'About eight lessons a month on the same schedule, with a teacher for one learner alone.',
    closer: 'Fees are charged in US dollars at the one rate that applies everywhere outside India, so Chesterton and Cherry Hinton pay exactly the same and we keep no pound price list. Charges start only when the free lesson has set a course and a slot, and our pricing page explains breaks, missed lessons and changes between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families, unaltered',

  book: {
    h2: 'Book a free lesson for a Cambridge learner',
    intro: 'We pick the opening task to match: a high-score game for a young child, a first program that sorts a list, or the Cambridge weather record and a heap for a teenager ready for real data structures.',
    success: 'Thanks. The team will contact you about a Cambridge class very soon.'
  },

  faq: {
    h2: 'Cambridge coding class questions',
    intro: 'What Cambridge families most often ask.',
    items: [
      { q: 'How many people live in Cambridge?', a: 'The 2021 Census counted 145,674 usual residents in the Cambridge district: 126,382 in households and 19,292 in communal establishments, a large share for a city of its size.' },
      { q: 'How many students are in Cambridge?', a: 'In 2021, 46,205 residents aged five and over were schoolchildren or full-time students, 33.2% of that age group against 20.4% nationally. The University of Cambridge reports 24,927 students for 2025 to 2026.' },
      { q: 'What was EDSAC?', a: 'A computer built at the University of Cambridge\'s Mathematical Laboratory, which ran its first successful program on 6 May 1949. The university describes it as the first fully functional stored-program computer used practically. We are not connected with the university.' },
      { q: 'What is the heap project?', a: 'Learners stream the Met Office\'s Cambridge NIAB record of 812 months through a min-heap of size ten to find the ten warmest months, then compare the work with a full sort: about 2,700 comparisons against about 7,800.' },
      { q: 'Which was Cambridge\'s warmest month?', a: 'In the NIAB record, July 2006, with a mean daily maximum of 28.3C. July 2026 is second at 27.0C, but the Met Office still marks it provisional.' },
      { q: 'When are lessons for Cambridge learners?', a: 'After school, in the evening or at weekends, with the time set in UK hours during the free lesson. Our teachers are four and a half hours ahead of Cambridge in summer and five and a half in winter.' },
      { q: 'Can we pause for exams or holidays?', a: 'Yes. Families often stop for GCSE and A level revision, the exams and school holidays, and agree the dates with the teacher beforehand.' },
      { q: 'Is there a Modern Age Coders centre in Cambridge?', a: 'No. We have no premises in Cambridge or anywhere in the UK, and every lesson is live online. Learners need a computer with sound and a reliable connection; our phone number is an Indian one.', boiler: true },
      { q: 'How much are Cambridge lessons?', a: 'The first lesson costs nothing. A group place is then USD 100 a month for two live lessons weekly, around eight a month, with five to ten learners; one-to-one lessons on the same schedule are USD 150 a month. Course, format and time are agreed first.', boiler: true },
      { q: 'How are Cambridge groups formed?', a: 'By ability, pace and aims: five to ten learners at one level, whatever their age or postcode. When no suitable group meets at a good time, we propose one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Other cities and the national guide',
    html: 'EDSAC\'s older sibling was the Baby, and the <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester page</a> tells that story beside its river project. Closer to Cambridge, <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> has Colossus and a Monte Carlo map, and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> its Datastore. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> covers the school stages, and every UK page is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cambridge and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/best-coding-class-in-milton-keynes', label: 'Milton Keynes' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-cam .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3.1vw, 2.7rem); }
.cg-root.cg-cam .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-cam .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-cam .cg-eyebrow { letter-spacing: 0.22em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cam .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-cam .cg-grid-3 { gap: clamp(1.2rem, 2.6vw, 2.2rem); }
.cg-root.cg-cam .cg-table caption { letter-spacing: 0.014em; font-weight: 700; }
.cg-root.cg-cam .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cam .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-cam .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge, Census 2021 via Nomis: TS001 Cambridge local authority district (E07000008) 145,674 usual residents, 126,382 in households, 19,292 in communal establishments; TS007A 20,309 aged 20 to 24 (13.9 percent) and 16,272 aged 25 to 29 (11.2 percent), against England 6.0 and 6.6 percent (band total 145,676, never summed on the page); TS068 46,205 schoolchildren and full-time students of 139,327 residents aged 5 and over, 33.2 percent, against 20.4 percent in England. University of Cambridge, Cambridge at a glance: 24,927 students (2025-2026), 13,113 staff, 31 colleges, 22,513 applicants for around 4,890 undergraduate places in 2025, a cluster of over 5,000 knowledge-intensive companies. University story, Blue Plaque for EDSAC: weighed two tons, took up a whole room at the then Mathematical Laboratory (now the Department of Computer Science and Technology), came into operation in May 1949, contributed to three Nobel Prizes in the 1960s and 1970s, the Manchester Baby preceded it by 11 months. Department of Computer Science and Technology, 70 years news: EDSAC ran its first successful program on 6 May 1949.',
    localProject: 'Keep the top ten without sorting the lot. Met Office historic station data, Cambridge NIAB, 26 m amsl, read 21 September 2026: 812 months January 1959 to August 2026 (provisional); flags: 23 estimated (*), 24 missing (---), 8 provisional months. Min-heap of size 10 on mean daily maximum: 2006-07 28.3, 2026-07 27.0 provisional, 2018-07 26.7, 2022-08 26.6, 1997-08 26.3, 2022-07 26.1, 2026-08 26.1 provisional, 1983-07, 1994-07, 1995-07 25.8; 11th value 25.7; 44 replacements after filling; comparisons about n log2 n 7,848 against n log2 10 2,697; six of ten from 2000 onward. Wettest month 2005-09 166.2 mm. Lesson family: priority queues (binary heaps) and top-k selection; distinct from stable sort (tie order), percentiles and record counting.',
    requiredMentions: [
      '145,674',
      '126,382',
      '19,292',
      '20,309',
      '16,272',
      '46,205',
      '139,327',
      '24,927',
      '6 May 1949',
      'EDSAC',
      'NIAB',
      'Mathematical Laboratory'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Cambridge: 145,674 usual residents; 126,382 in households; 19,292 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000008&measures=20100' },
      { claim: 'Nomis, Census 2021 TS007A: Cambridge and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000008,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Cambridge 46,205 students of 139,327 aged 5 and over (33.2 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000008,E92000001' },
      { claim: 'Met Office historic station data, Cambridge NIAB: monthly record from 1959, flags and provisional values.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/cambridgedata.txt' },
      { claim: 'University of Cambridge, Cambridge at a glance: students, staff, colleges, applications, the technology cluster.', url: 'https://www.cam.ac.uk/about-the-university/cambridge-at-a-glance' },
      { claim: 'University of Cambridge, Blue Plaque for EDSAC: two tons, the Mathematical Laboratory, three Nobel Prizes, the Manchester Baby 11 months earlier.', url: 'https://www.cam.ac.uk/stories/edsac-cambridge-computer-blue-plaque' },
      { claim: 'Department of Computer Science and Technology, 70 years since the first computer designed for practical everyday use: first program on 6 May 1949.', url: 'https://www.cst.cam.ac.uk/news/70-years-first-computer-designed-practical-everyday-use' }
    ],
    rejectedClaims: [
      'Raspberry Pi and Arm founding facts: not read from primary pages for this build, so not stated.',
      'Anglia Ruskin University facts: not needed, and none claimed.',
      'That the provisional 2026 values are final: the page marks them provisional.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Met Office, the University of Cambridge or its department.'
    ]
  }
};
