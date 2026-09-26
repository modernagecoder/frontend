'use strict';
// East Dunbartonshire (cg- council area page, UK cluster Phase 7, row 262). One council. Spine: how should you split a
// long walk into days? Anchor: the official West Highland Way website (westhighlandway.org, read raw 26 September 2026):
// "The West Highland Way stretches 96 miles (154 Km) from Milngavie to Fort William"; section pages give Milngavie to
// Drymen 12 miles (19 km); Drymen to Rowardennan 15 (22.5); Rowardennan to Inverarnan 14 (22.5); Inverarnan to Tyndrum
// 12 (19.3); Tyndrum to Inveroran 9 (14.5); Inveroran to Kingshouse 10 (16); Kingshouse to Kinlochleven 9 (14.5);
// Kinlochleven to Fort William 15 (24).
// Our planner (scratchpad edb/part.py): section miles add to 96, matching the stated total; section km add to 152.3
// against 154 stated. Every split at section ends, best by longest day then spread: 4 days 27 miles (27, 26, 19, 24);
// 5 days 26 (12, 15, 26, 19, 24); 6 days 21 (12, 15, 14, 21, 19, 15); 7 days 19; 8 days 15. Plans checked: 35 for 4
// or 5 days, 21 for 6, 7 for 7, 1 for 8. A greedy rule with a 20-mile target gives 7 days and a longest day of 19. Ways
// to split a 100-section route into 10 days: 1,731,030,945,644.
// Lesson family: linear partition by exhaustive search under a discrete constraint, greedy comparison, combinatorial
// growth; screened (West Highland Way, Milngavie: 0 hits; "partition" elsewhere means grouping, a different idea).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: East Dunbartonshire S12000045 109,000; 46,500 households;
// 624.7 per square kilometre; ages 0 to 14 17,900 (16.4 per cent), 65+ 26,200 (24.0 per cent) by our addition. NRS
// mid-2020 localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'EAST DUNBARTONSHIRE', blurb: 'Bearsden, Bishopbriggs, Kirkintilloch and Milngavie, and a West Highland Way lesson in splitting 96 miles into fair days.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-east-dunbartonshire',
  code: 'edb',
  accent: '#295C30',
  accentRationale: 'East Dunbartonshire: a Campsie Fells green from the solver (6.34:1 on the darkest paper tint), brighter than the South Yorkshire and Nottinghamshire greens',
  pageType: 'governorate',
  place: {
    name: 'East Dunbartonshire',
    eyebrow: 'East Dunbartonshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'East Dunbartonshire',
  title: 'Coding Classes in East Dunbartonshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across East Dunbartonshire, from Bearsden, Bishopbriggs and Kirkintilloch to Milngavie, Lenzie and Lennoxtown.',
  ogDescription: 'Coding classes for all of East Dunbartonshire, and a Milngavie project: plan the 96-mile West Highland Way in Python, day by day, and see why an extra day can barely help.',
  twitterDescription: 'East Dunbartonshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for East Dunbartonshire',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across East Dunbartonshire, taught live in English.'
  },

  h1: 'Coding classes in East Dunbartonshire',
  capsuleQ: 'What are the best coding classes in East Dunbartonshire?',
  capsule: 'East Dunbartonshire is a compact council area north of Glasgow, home to about 109,000 people in some 46,500 households according to Scotland\'s Census 2022, at 624.7 people per square kilometre. Bearsden, Bishopbriggs and Kirkintilloch are the largest towns, with Milngavie, Lenzie and Lennoxtown next. We teach live by video from India, and the class each learner joins depends on their level, from Primary 1 to S6 and adults, not on their age. Anyone from 6 to 67 can study coding, Python, algorithms or maths, in a group of five to ten or one-to-one. The East Dunbartonshire project starts in Milngavie, at the beginning of the West Highland Way. Your first lesson is free; after that a group costs USD 100 a month and one-to-one USD 150.',
  lead: 'The official West Highland Way website describes the route as 96 miles from Milngavie to Fort William, in eight sections from village to village. Every walker faces the same planning puzzle: how many days, and where to stop each night, so that no single day is brutal? Stops can only fall at the ends of sections, where there is somewhere to sleep, so the days cannot be made perfectly equal. This page\'s project hands the puzzle to Python. It checks the official numbers, tries every possible way of splitting the walk into four to eight days, and finds a result that surprises most people: one of those extra days hardly helps at all.',
  wa: 'Hello Modern Age Coders, we are in East Dunbartonshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for East Dunbartonshire',
    h2: 'Where East Dunbartonshire learners start',
    intro: 'A P3 pupil in Lenzie who loves maps, an S1 in Kirkintilloch starting Python, an S5 in Bearsden heading for Higher Computing Science, and an adult in Milngavie who plans projects for a living. Each starts with a free lesson.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic puzzles and computational thinking, with step-by-step strategies and real-world challenges.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, including combinations and planning problems in Python.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms for teenagers, from trying every option to cleverer methods, judged by what they cost.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults', note: 'Data structures and algorithms for adults, including search and dynamic programming.' }
    ]
  },

  sections: [
    {
      id: 'east-dunbartonshire', tint: '', eyebrow: 'East Dunbartonshire in figures',
      h2: 'About 109,000 people between Glasgow and the Campsies',
      intro: 'Council-level numbers come from the first results of Scotland\'s 2022 census, published in hundreds. The towns are National Records of Scotland locality estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'East Dunbartonshire localities, NRS mid-2020 estimates', head: ['Locality', 'Residents'], rows: [
          ['Bearsden', '28,470'],
          ['Bishopbriggs', '23,680'],
          ['Kirkintilloch', '21,870'],
          ['Milngavie', '12,840'],
          ['Lenzie', '8,090'],
          ['Lennoxtown', '4,260'],
          ['Milton of Campsie', '3,910'],
          ['Torrance', '2,320'],
          ['Twechar', '1,340']
        ] },
        { kind: 'p', text: 'With 624.7 residents per square kilometre, East Dunbartonshire is suburban in character, far denser than Scotland\'s 69.8. Our own sums of the census age bands give 16.4 per cent under 15 and 24.0 per cent aged 65 or over; the Scottish shares are 15.3 and 20.1. East Dunbartonshire Council sets the school calendar, which we have not read, so lesson breaks follow each family\'s dates.' },
        { kind: 'callout', h3: 'Glasgow on the doorstep', p: 'The city has its own page: <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>. Exam support for Scottish pupils is on our <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East Dunbartonshire project',
      h2: 'Splitting the West Highland Way into days',
      intro: 'Eight official sections, every possible plan, and an extra day that barely helps.',
      body: [
        { kind: 'p', text: 'The learner copies the eight section distances from the official website into a Python list: 12, 15, 14, 12, 9, 10, 9 and 15 miles. The first job is a check. In miles, the sections add up to exactly 96, matching the route total. In kilometres they add up to 152.3, while the site gives 154 for the whole route. Neither figure is wrong: each section is rounded separately, and rounded parts need not add up to a rounded total, which is why careful analysts never build a total by adding rounded pieces.' },
        { kind: 'table', caption: 'The fairest plans for each number of days, found by checking every option, 26 September 2026', head: ['Days', 'Plans checked', 'Longest day', 'Daily miles in the fairest plan'], rows: [
          ['4', '35', '27 miles', '27, 26, 19, 24'],
          ['5', '35', '26 miles', '12, 15, 26, 19, 24'],
          ['6', '21', '21 miles', '12, 15, 14, 21, 19, 15'],
          ['7', '7', '19 miles', '12, 15, 14, 12, 9, 19, 15'],
          ['8', '1', '15 miles', 'one section a day']
        ] },
        { kind: 'p', text: 'A plan is a choice of which of the seven overnight stops to use. For five days that means choosing 4 of the 7, and there are 35 ways, few enough to try them all. The program keeps the plan whose longest day is shortest. Adding a fifth day to a four-day plan only cuts the longest day from 27 miles to 26, because the sections cannot be split and the long middle stretch has to go somewhere. Adding a sixth day cuts it to 21. Where the stopping points lie matters as much as how many days you have.' },
        { kind: 'p', text: 'The learner then compares a quick rule of thumb: keep walking until the next section would take you past a target, then stop. With a 20-mile target it produces a seven-day plan whose longest day is 19 miles, matching the exhaustive search. Trying everything is fine for eight sections, but it does not scale: a route of 100 sections split into 10 days has 1,731,030,945,644 possible plans. That is where cleverer methods such as dynamic programming earn their place.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Cut a paper strip into eight labelled lengths and try grouping them into five piles as evenly as you can.' },
          { h3: 'Ages 11 to 15', p: 'List every five-day plan in Python with itertools.combinations and pick the one with the shortest longest day.' },
          { h3: 'Ages 15 and up', p: 'Write a dynamic programming solution, compare it with brute force and the greedy rule, and time all three as the route grows.' }
        ] },
        { kind: 'callout', h3: 'The official figures and our plans', p: 'The route length and section distances are from the official West Highland Way website. The day plans, counts and comparisons are ours, and ignore climbing, terrain and where beds are actually free. Walkers should plan with the official guidance, not this page.' }
      ]
    },
    {
      id: 'milngavie', tint: 'deep', eyebrow: 'Why Milngavie',
      h2: 'The start of a 96-mile walk',
      intro: 'The East Dunbartonshire link, from the official route website.',
      body: [
        { kind: 'table', caption: 'The West Highland Way sections, as the official website lists them', head: ['Section', 'Distance'], rows: [
          ['Milngavie to Drymen', '12 miles (19 km)'],
          ['Drymen to Rowardennan', '15 miles (22.5 km)'],
          ['Rowardennan to Inverarnan', '14 miles (22.5 km)'],
          ['Inverarnan to Tyndrum', '12 miles (19.3 km)'],
          ['Tyndrum to Inveroran', '9 miles (14.5 km)'],
          ['Inveroran to Kingshouse', '10 miles (16 km)'],
          ['Kingshouse to Kinlochleven', '9 miles (14.5 km)'],
          ['Kinlochleven to Fort William', '15 miles (24 km)']
        ] },
        { kind: 'p', text: 'Splitting work into fair chunks is one of the most common problems in computing: dividing a book into chapters for printing, spreading jobs across computers, or cutting a video into equal parts. Each has the same shape as the walker\'s problem, with pieces that cannot be broken. An East Dunbartonshire student who has planned the Way in code has met a classic algorithm problem on their own doorstep.' },
        { kind: 'p', text: 'We have no connection with the West Highland Way or East Dunbartonshire Council. The route facts are theirs; our planning code and any errors are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> is immediately south and <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a> north-east; the Way itself heads towards <a class="cg-inline-link" href="/coding-classes-in-argyll-and-bute">Argyll and Bute</a> and <a class="cg-inline-link" href="/coding-classes-in-highland">Highland</a>. All councils are on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From sharing sweets fairly to dynamic programming',
    intro: 'The free lesson settles where each learner begins. The stage at school is a pointer, not a rule.',
    cols: [
      { band: 'P1 to P4', h3: 'Fair shares', p: 'Block coding games about sharing, grouping and taking turns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Try every option', p: 'Puzzles and Python that list all the possibilities and pick the winner.', courses: ['problem-solving-and-computational-thinking-for-kids', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Smarter algorithms', p: 'Greedy methods and dynamic programming, useful for National 5, Higher and beyond.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Planning with code', p: 'Algorithms and Python for adults who schedule, allocate and plan.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and plans',
    h2: 'An AI can suggest a walking plan. Is it the fairest one, or just a plausible one?',
    intro: 'A sensible-looking plan and the optimal plan are not always the same.',
    p1: 'Ask an assistant for a five-day West Highland Way plan and you will get something reasonable. Whether its longest day is 26 miles or 30 is hard to tell by reading. Our program checked all 35 possibilities and can say for certain that 26 is the lowest achievable with the official sections, and that a sixth day brings it down to 21.',
    p2: 'An East Dunbartonshire learner who has done the exhaustive check knows the difference between a plausible answer and a proven one, and knows to ask an AI tool how it chose. That question matters for any plan an AI proposes, from timetables to delivery routes.',
    closer: 'So a young person in East Dunbartonshire should learn to code in 2026 to tell a good plan from the optimal one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson logistics',
    h2: 'Bearsden to Twechar, straight from home',
    intro: 'Getting across the council area and into Glasgow for an evening class eats time. Online lessons give it back.',
    cells: [
      { h3: 'Classes at your own desk', p: 'A semi in Bishopbriggs, a flat in Milngavie, a house in Lennoxtown. Teacher and pupil look at the same screen while the pupil codes.' },
      { h3: 'School words from Scotland', p: 'Our teachers know exactly what P5, S2, National 5, Higher and Advanced Higher mean to East Dunbartonshire pupils, and teach in English.' },
      { h3: 'One lesson on us', p: 'The first lesson is a real one, with an honest view of level and course at the end. No card details.' },
      { h3: 'Matched classmates', p: 'Groups of five to ten are formed by stage, so a learner meets others at exactly their level.' },
      { h3: 'Holiday pauses', p: 'Two lessons a week during term, pausing when East Dunbartonshire\'s school holidays arrive.' },
      { h3: 'Booked in UK time', p: 'Your lesson keeps its UK time through the clock changes; our India-based teachers, several hours ahead, move theirs.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Even in a busy suburban council area, five learners at one stage who are free on the same evening are hard to gather. Level-based groups let a pupil in Torrance or Twechar join the right class.' }
  },

  fees: {
    h2: 'Fees in East Dunbartonshire',
    intro: 'Bearsden or Bishopbriggs, the fee is identical, as it is in every country we teach bar India.',
    first: 'One whole lesson of real work, then advice on level and course.',
    group: 'Roughly eight lessons a month in a group of five to ten at one level.',
    private: 'Roughly eight lessons a month, one-to-one.',
    closer: 'We invoice in US dollars and quote no pound prices. No charge is made until the free lesson has fixed a course and a weekly slot; the pricing page explains breaks, missed lessons and switching between group and private.'
  },

  reviewsH2: 'What our families say on Google',

  book: {
    h2: 'Book a free East Dunbartonshire lesson',
    intro: 'Tell us the learner\'s school stage or goal and a favourite interest. A first lesson might be a Scratch map game, a Python planner, or the West Highland Way puzzle on this page.',
    success: 'Thank you. Your East Dunbartonshire request is safely with us.'
  },

  faq: {
    h2: 'East Dunbartonshire questions',
    intro: 'The council area, the walking project and how lessons run.',
    items: [
      { q: 'How many people live in East Dunbartonshire?', a: 'About 109,000 usual residents in roughly 46,500 households, from the first results of Scotland\'s Census 2022, rounded to hundreds.' },
      { q: 'What are the largest towns in East Dunbartonshire?', a: 'By NRS mid-2020 locality estimates: Bearsden 28,470, Bishopbriggs 23,680, Kirkintilloch 21,870, Milngavie 12,840 and Lenzie 8,090.' },
      { q: 'What is the West Highland Way project?', a: 'Learners use the official section distances to try every way of splitting the 96-mile route into four to eight days, find the plan with the shortest longest day, and compare it with a quick greedy rule.' },
      { q: 'Why does an extra day not always help?', a: 'Stops can only fall at section ends. In our analysis, going from four days to five only shortens the longest day from 27 to 26 miles, while a sixth day cuts it to 21.' },
      { q: 'How long is the West Highland Way?', a: 'The official website gives 96 miles (154 km) from Milngavie to Fort William.' },
      { q: 'Do you have a centre in East Dunbartonshire?', a: 'No. Lessons are live online only, so pupils join from home anywhere in the council area.' },
      { q: 'Do you help with Scottish exams?', a: 'Yes, through our National 5 and Higher Computing Science pages and courses. We support understanding and do not promise grades.' },
      { q: 'Who can join?', a: 'Learners from 6 to 67: block coding in the early years, Python from around P6, algorithms and exam courses in secondary, and algorithms or Python for adults.' },
      { q: 'What are the fees?', a: 'The first lesson is free. Groups are then USD 100 a month and one-to-one lessons USD 150 a month.' },
      { q: 'Do lessons stop for school holidays?', a: 'They can. East Dunbartonshire Council publishes term dates; share yours and we plan pauses to match.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near East Dunbartonshire',
    html: 'Glasgow is next door on the <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> page, with <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a> beyond the Campsies. Every Scottish council is listed on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'East Dunbartonshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/higher-computing-science-help', label: 'Higher Computing' }
  ],

  personalityCss: `
.cg-root.cg-edb .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-edb .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-edb .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-edb .cg-eyebrow { letter-spacing: 0.18em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-edb .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.017em; }
.cg-root.cg-edb .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-edb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-edb .cg-table th { letter-spacing: 0.045em; font-weight: 700; }
.cg-root.cg-edb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-edb .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Dunbartonshire (S12000045), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 109,000 (females 56,500, males 52,400); households 46,500; density 624.7 per square kilometre (Scotland 69.8); ages 0 to 14 17,900 (16.4 per cent), 65+ 26,200 (24.0 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Bearsden 28,470; Bishopbriggs 23,680; Kirkintilloch 21,870; Milngavie 12,840; Lenzie 8,090; Lennoxtown 4,260; Milton of Campsie 3,910; Torrance 2,320; Twechar 1,340. Official West Highland Way website: "The West Highland Way stretches 96 miles (154 Km) from Milngavie to Fort William"; sections: Milngavie to Drymen "Distance 12 Miles (19 km)"; Drymen to Rowardennan 15 Miles (22.5 km); Rowardennan to Inverarnan 14 Miles (22.5 km); Inverarnan to Tyndrum 12 Miles (19.3 km); Tyndrum to Inveroran 9 Miles (14.5 km); Inveroran to Kingshouse 10 Miles (16 km); Kingshouse to Kinlochleven 9 Miles (14.5 km); Kinlochleven to Fort William 15 Miles (24 km).',
    localProject: 'Linear partition of 8 sections [12, 15, 14, 12, 9, 10, 9, 15] miles into k days, stops at section ends, exhaustive over C(7, k-1) plans, minimise longest day then spread: k 4: 27 (27, 26, 19, 24), 35 plans; k 5: 26 (12, 15, 26, 19, 24), 35; k 6: 21 (12, 15, 14, 21, 19, 15), 21; k 7: 19, 7; k 8: 15, 1. Greedy target 20: 7 days, max 19; target 24: 6 days, max 21; target 27: 4 days, max 27. Miles sum 96 = stated; km sum 152.3 vs stated 154 (separate rounding). C(99, 9) = 1,731,030,945,644. Page labels plans as ours and not walking advice. AI angle: plausible vs proven plan. Lesson family: linear partition, exhaustive search, greedy, combinatorial growth, rounded parts vs total.',
    requiredMentions: [
      '109,000',
      '46,500',
      'West Highland Way',
      'Milngavie',
      'Rowardennan',
      'Kinlochleven',
      'Bishopbriggs',
      'Kirkintilloch',
      'Lenzie',
      'Lennoxtown',
      'Torrance',
      'Twechar'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Official West Highland Way website: route length and section distances.', url: 'https://www.westhighlandway.org/the-route/' }
    ],
    rejectedClaims: [
      'Accommodation availability, ascent and difficulty of each section: not used; the page warns the plans ignore them.',
      'The Antonine Wall in East Dunbartonshire: not researched for this page.',
      'The official suggested itineraries: not read; our plans are our own.',
      'East Dunbartonshire school term dates: none read.',
      'Named East Dunbartonshire schools: none named.',
      'Walking times: not claimed.'
    ]
  }
};
