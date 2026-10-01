'use strict';
// Penarth (cg- town page, UK cluster Phase 10, towns band B, row 565). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what is the longest chain of years in which
// each one was warmer than the last, and why does the obvious way to find it never finish? (longest increasing
// subsequence: brute force over subsets vs O(n^2) dynamic programming vs O(n log n) patience sorting; LIS vs
// longest consecutive run; a shuffle test.)
// Local data (read 1 October 2026): Met Office historic station data, Cardiff Bute Park (51.488 N 3.187 W, 9 m), monthly
// mean daily maximum temperature, September 1977 to August 2026 (2026 provisional; 47 monthly values marked estimated).
// 48 complete calendar years 1978 to 2025; each year = mean of its 12 monthly values (our calculation). Coolest 1979
// 13.03 C, warmest 2022 16.36 C. Our run (scratchpad pnh/lis.py): LIS 16 (DP and patience agree); one chain 1979, 1985,
// 1987, 1991, 1992, 1994, 1998, 2000, 2002, 2004, 2005, 2006, 2014, 2020, 2023, 2025. Longest run of consecutive rises: 5
// years, 1986 to 1990. DP 1,128 comparisons; patience sorting 141. Brute force: 20 years = 1,048,575 subsets in 0.8 s on
// this laptop; 48 years = 2^48 - 1 subsets, roughly 7 years at that rate. 10,000 shuffles (seed 20261001): mean LIS 10.9,
// 10 reached 16 (0.1%). Bute Park lies about 6 km north of Penarth town centre.
// Lesson family: longest increasing subsequence / patience sorting. Screened: increasing subsequence, patience sort,
// bute park: 0 hits in cluster pages and dossiers (course syllabi only); claimed. Vale of Glamorgan county page =
// pigeonhole; Barry = k-anonymity; Cardiff = Zipf; Roath and Llandaff checked.
// Place facts: Vale of Glamorgan TS001 131,939. ONS 2021 BUA (published): Penarth 28,395 (the BUA reaches into Cardiff,
// so only the published figure is printed). postcodes.io suburban areas whose nearest postcode is in the Penarth BUA:
// Cogan, Lower Penarth, Cosmeston. Wards of CF64 postcodes in the BUA: St Augustine's, Plymouth, Cornerswell, Stanwell,
// Llandough. Sully (Barry BUA) and Dinas Powys (own BUA) left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'PENARTH', label: 'Penarth', blurb: 'Coding and AI classes for Penarth, with a project that hunts for the longest chain of ever-warmer years in 48 years of Cardiff weather.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-penarth',
  code: 'pnh',
  accent: '#9C3038',
  accentRationale: 'Penarth: a muted pier-rail red (7.26:1 contrast on white), chosen by hand and kept clear of the other Cardiff-area pages',
  pageType: 'city',
  place: {
    name: 'Penarth',
    eyebrow: 'Penarth, Vale of Glamorgan, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Vale of Glamorgan' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Vale of Glamorgan', href: '/coding-classes-in-vale-of-glamorgan' },
    { label: 'Cardiff', href: '/best-coding-class-in-cardiff' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Penarth, Vale of Glamorgan',
  title: 'Coding and AI Classes in Penarth | Ages 6 to 67',
  description: 'Live online coding and AI classes for Penarth, Cogan, Llandough and Stanwell, ages 6 to 67, with Python and maths. Book a free first lesson with no card needed.',
  ogDescription: 'Coding and AI classes for Penarth, with a project on the longest increasing subsequence and patience sorting.',
  twitterDescription: 'Penarth coding and AI lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Penarth',
    description: 'Online coding, AI, Python and maths lessons for children, teenagers and adults in Penarth and the Vale of Glamorgan, taught through algorithms the learner writes and times.'
  },

  h1: 'Coding and AI classes in Penarth',
  capsuleQ: 'Where can Penarth families find the best coding and AI classes?',
  capsule: 'The ONS gives the Penarth built-up area 28,395 usual residents in the 2021 census; the Vale of Glamorgan as a whole had 131,939. Cogan, Lower Penarth and Cosmeston fall inside the built-up area, and its postcodes sit in the St Augustine\'s, Plymouth, Cornerswell, Stanwell and Llandough wards. Penarth learners between six and 67 study coding, AI, Python, vibe coding and maths with us over live video; tutors in India take them one at a time or in level-matched groups of five to ten. A free trial lesson comes first, then a course suggestion. The Penarth project takes 48 years of temperature records from the Met Office station in Bute Park, Cardiff, and asks for the longest chain of years in which each was warmer than the one before, a question whose obvious solution would take years to run. After the free lesson, joining a group costs USD 100 per month; a personal tutor costs USD 150 per month.',
  lead: 'Some questions sound tiny and hide an enormous search. Here is one: in a list of 48 yearly temperatures, which years can you pick, keeping them in order, so that each is warmer than the last, and how long can that chain get? Checking every possible selection means looking at more than 281 trillion of them. A cleverer method needs 1,128 comparisons, and a cleverer one still, borrowed from a card game called patience, needs 141. Penarth learners write all three and time them.',
  wa: 'Hello Modern Age Coders, we would like to book a free coding or AI trial lesson. We are in Penarth.',

  picks: {
    eyebrow: 'Good places to start',
    h2: 'Coding and AI courses for Penarth learners',
    intro: 'Choose by age. Every course starts with a live lesson that is free and asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Card games, chains and patterns that turn into algorithms later.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'A Scratch game made by describing it to an AI, then testing and repairing it.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Algorithms and data structures in Python, including the Bute Park chain project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the beginning to efficient algorithms and data work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Penarth by the numbers',
      h2: 'Penarth, Cogan, Llandough, Stanwell and Cornerswell',
      intro: 'Headline census counts and the areas the Penarth built-up area covers.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Penarth built-up area', '28,395'],
          ['Vale of Glamorgan', '131,939']
        ] },
        { kind: 'p', text: 'The Vale also contains Barry, Llantwit Major and many villages, and the Penarth built-up area itself crosses slightly into Cardiff, so the two rows are separate counts and should not be compared as town and total. On postcodes.io, Cogan, Lower Penarth and Cosmeston are suburban areas whose nearest postcode is inside the built-up area, and the CF64 postcodes in it belong to five wards: St Augustine\'s, Plymouth, Cornerswell, Stanwell and Llandough. Sully and Dinas Powys have built-up areas of their own and are not counted here. Pupils in Penarth learn under the Curriculum for Wales and later sit WJEC papers; we teach through English, and a Welsh year group is simply where the trial lesson begins its checking.' },
        { kind: 'callout', h3: 'Cardiff and the Vale', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-barry">Barry</a>, <a class="cg-inline-link" href="/coding-classes-in-vale-of-glamorgan">the Vale of Glamorgan</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. Our argument for learning to solve problems, not just call tools, is in <a class="cg-inline-link" href="/problem-solving-skills-through-coding-uk">problem-solving skills through coding</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Penarth project',
      h2: 'The longest chain of ever-warmer years',
      intro: 'Forty-eight years of Bute Park temperatures, one question, and three algorithms that differ by trillions of steps.',
      body: [
        { kind: 'p', text: 'The Met Office publishes monthly records for its historic station in Bute Park, Cardiff, about 6 km north of Penarth\'s town centre, going back to September 1977. The learner takes the average daily maximum temperature for each month, keeps the 48 complete calendar years from 1978 to 2025, and averages the twelve months of each year. The coolest year by this measure was 1979 at 13.03 °C and the warmest 2022 at 16.36 °C. A few dozen monthly values are marked by the Met Office as estimated, and the page treats the averages as our own calculation, not an official statistic.' },
        { kind: 'p', text: 'The question is the longest increasing subsequence: pick years in time order, skipping as many as you like, so that each picked year is warmer than the one picked before it. The longest run of years rising one after another without a gap is only 5, from 1986 to 1990. Allow gaps and the chain gets far longer. The learner finds a chain of 16: 1979, 1985, 1987, 1991, 1992, 1994, 1998, 2000, 2002, 2004, 2005, 2006, 2014, 2020, 2023 and 2025, each warmer than the last.' },
        { kind: 'table', caption: 'Three ways to find the longest chain in 48 years, our Python run', head: ['Method', 'Work needed', 'Practical?'], rows: [
          ['Check every possible selection of years', '2^48 selections, over 281 trillion', 'No: about seven years at our measured speed'],
          ['Dynamic programming (longest chain ending at each year)', '1,128 comparisons', 'Yes'],
          ['Patience sorting with binary search', '141 comparisons', 'Yes']
        ] },
        { kind: 'p', text: 'Brute force really is hopeless. The learner times it on the first 20 years, which already means 1,048,575 selections and 0.8 seconds on our laptop; each extra year doubles the work, so all 48 years would take roughly seven years of computing. Dynamic programming works year by year, asking for each one: what is the longest chain that ends here? Patience sorting deals the temperatures into piles like the card game, always placing a card on the leftmost pile whose top card is warmer, and the number of piles at the end is the answer. Dynamic programming and patience sorting both give 16, and on the first 12, 16 and 20 years, where brute force can finish, all three agree.' },
        { kind: 'p', text: 'Is 16 a lot? The learner shuffles the 48 values into random order 10,000 times and finds the longest chain in each. Shuffled years give chains of 10.9 on average, and only 10 of the 10,000 shuffles reached 16. So the real order of the years produces a much longer rising chain than chance usually does. The project stops at that statement. It does not try to explain why, which would need far more than one weather station and one algorithm.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play patience with a shuffled pack of numbered cards and count the piles: that is the longest rising chain.' },
          { h3: 'Ages 11 to 15', p: 'Load the Bute Park file in Python, average each year and find the longest unbroken rise.' },
          { h3: 'Ages 15 and up', p: 'Write brute force, dynamic programming and patience sorting, count their steps and run the shuffle test.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Temperatures are Met Office historic station data for Cardiff Bute Park, published under the Open Government Licence; 2026 values are provisional and some months are estimated. The yearly averages, the three algorithms, the timings and the 10,000 shuffles (seed 20261001) come from our own run. We make no claim about the causes of any change in the record.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Algorithms and AI',
      h2: 'What a chain of warm years teaches about AI-written algorithms',
      intro: 'The difference between an answer in a blink and an answer in seven years is the algorithm.',
      body: [
        { kind: 'table', caption: 'From Bute Park to working with AI', head: ['What the project showed', 'Why it matters when AI writes code'], rows: [
          ['Brute force was correct but hopeless', 'Working code can still be useless at full size'],
          ['Dynamic programming cut the work to 1,128 steps', 'Ask how the work grows, not just whether it runs'],
          ['Patience sorting needed only 141', 'A known better algorithm is worth looking for'],
          ['All three agreed where they could be compared', 'Check a fast method against a slow, sure one'],
          ['The shuffle test gave the 16 meaning', 'A number needs a comparison before it means much']
        ] },
        { kind: 'p', text: 'Ask an AI to "find the longest rising run of years" and you may get the consecutive version, the brute force, or the clever one, and they give different answers or different running times. Telling them apart needs exactly what this project practises: a small test where you know the answer, and a count of how the work grows. That is how we approach vibe coding. Agents of their own come once a learner writes Python without leaning on the tutor, for most from Year 12; Copilot Studio is offered in private lessons and nowhere else. Further reading: <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' },
        { kind: 'p', text: 'We have no tie to the Met Office, the ONS or postcodes.io beyond using their published open data; every calculation here is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'From patience at seven to dynamic programming at seventeen',
    intro: 'The Welsh school year gives a first guess, and the trial lesson corrects it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Chains and patterns', p: 'Card games, ordering and spotting rules, often before any screen time.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Creating with AI', p: 'Scratch projects built with an AI helper, then a move into Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Algorithms that scale', p: 'Searching, sorting and dynamic programming, with steps counted and compared.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Efficient Python', p: 'Python for work, with the algorithm choices that keep programs fast.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Sequences and AI',
    h2: 'What is the longest increasing subsequence, and why does the method matter?',
    intro: 'The longest increasing subsequence of a list is the longest selection of its items, kept in their original order but not necessarily next to each other, in which every item is larger than the one before, and the method matters because checking every selection grows exponentially while patience sorting finds the answer in a number of steps close to the length of the list.',
    p1: 'For 48 years of Bute Park temperatures the longest such chain was 16 years, found with 141 comparisons by patience sorting and 1,128 by dynamic programming, where checking every selection would have needed more than 281 trillion.',
    p2: 'Learners who see that gap ask an AI not only for an answer but for how its method grows.',
    closer: 'For a teenager in Penarth, knowing why one algorithm finishes and another never will lets them judge AI-written code instead of trusting it, and that judgement is learned by writing algorithms.',
    blogAnchor: 'why algorithms are still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Classes for a Penarth learner',
    intro: 'Each lesson is a live video call. Bring a laptop or desktop with a keyboard; Python on a tablet alone is too limited.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'Each line is typed and run by the learner, with the tutor asking for reasons.' },
      { h3: 'We place before we suggest', p: 'The trial lesson shows a learner\'s level before we name a course.' },
      { h3: 'First lesson free', p: 'There is no charge and no card for the trial.' },
      { h3: 'Five to ten per class', p: 'Learners at one level, joining from around the UK.' },
      { h3: 'Weekly rhythm', p: 'About eight lessons a month in term, with Vale of Glamorgan holidays kept free on request.' },
      { h3: 'Same UK hour', p: 'Clock changes do not move your lesson.' }
    ],
    spec: { title: 'Why we teach online', p: 'Finding five to ten learners at exactly one level is far easier across the UK than in one town by the sea, and video means no travelling.' }
  },

  fees: {
    h2: 'Fees for Penarth families',
    intro: 'Penarth learners pay the same as all learners outside India.',
    first: 'First lesson: free and full length, closing with a course recommendation.',
    group: 'Group class, around eight lessons a month.',
    private: 'Private lessons, around eight a month.',
    closer: 'Fees are charged in US dollars, and we publish no figure in pounds. The trial is free, and billing starts once you have agreed a course and a regular slot. The pricing page explains holidays, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Google reviews from Welsh families and UK learners',

  book: {
    h2: 'Book a free Penarth lesson',
    intro: 'Let us know the learner\'s age or year group and their interests. Possible first sessions: a round of patience with numbered cards, an AI-assisted Scratch game, a few lines of Python, or the Bute Park temperature chain.',
    success: 'Thank you. Your Penarth request has been received.'
  },

  faq: {
    h2: 'Penarth questions',
    intro: 'Questions about the warm-years chain, algorithms in general, vibe coding and lesson logistics.',
    items: [
      { q: 'How many people live in Penarth?', a: 'The ONS counted 28,395 usual residents in the Penarth built-up area at the 2021 census. The Vale of Glamorgan had 131,939.' },
      { q: 'Can Penarth learners join these coding and AI classes?', a: 'Yes. Live online lessons are open to ages 6 to 67 in Penarth, Cogan, Llandough, Stanwell and across the Vale of Glamorgan.' },
      { q: 'What is patience sorting?', a: 'A way of dealing a sequence into piles, each card going on the leftmost pile whose top card is larger. The number of piles equals the length of the longest increasing subsequence.' },
      { q: 'What is dynamic programming?', a: 'Solving a big problem by solving smaller versions of it once each and reusing those answers, instead of recomputing them again and again.' },
      { q: 'What did the Penarth project find?', a: 'In 48 years of Bute Park temperatures the longest chain of ever-warmer years was 16, and only 10 of 10,000 shuffled orders produced a chain that long.' },
      { q: 'What is vibe coding?', a: 'Describing a program to an AI, then running, reading and fixing the code it writes. We teach it in typed Python so learners can tell a good method from a bad one.' },
      { q: 'When do learners build AI agents?', a: 'Once they write Python confidently without help, usually in Year 12 or as adults. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Does this help with WJEC GCSE computer science?', a: 'Efficiency and algorithm design feature heavily in WJEC computer science from GCSE upward, so lessons spend real time on them; grades are not promised.' },
      { q: 'How much are lessons?', a: 'There is no fee for the trial. A shared class is USD 100 monthly afterwards, and private teaching USD 150 monthly.' },
      { q: 'Can lessons pause for school holidays?', a: 'Yes. Send us the Vale of Glamorgan term dates and the holidays stay free.' }
    ]
  },

  next: {
    eyebrow: 'Around Cardiff',
    h2: 'More pages for Cardiff and the Vale',
    html: 'Visit <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-roath-cardiff">Roath</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-barry">Barry</a> and <a class="cg-inline-link" href="/coding-classes-in-vale-of-glamorgan">the Vale of Glamorgan</a>. For anywhere else, try <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">the Wales page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Penarth and the Vale of Glamorgan',
  footerPlaces: [
    { href: '/coding-classes-in-vale-of-glamorgan', label: 'Vale of Glamorgan' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-pnh .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 2.75vw, 2.45rem); }
.cg-root.cg-pnh .cg-hero h1 { font-weight: 790; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-pnh .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-pnh .cg-eyebrow { letter-spacing: 0.105em; font-weight: 725; text-transform: uppercase; font-size: 0.84rem; }
.cg-root.cg-pnh .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-pnh .cg-table caption { font-weight: 565; text-align: left; font-size: 0.9rem; }
.cg-root.cg-pnh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pnh .cg-table th { font-weight: 715; letter-spacing: 0.02em; }
.cg-root.cg-pnh .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.6rem; }
.cg-root.cg-pnh .cg-callout { border-left-width: 4px; border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Vale of Glamorgan (W06000014), Census 2021 TS001 usual residents 131,939. ONS 2021 BUA (published): Penarth 28,395 (reaches into Cardiff). Curriculum for Wales, WJEC GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the Penarth BUA: Cogan, Lower Penarth, Cosmeston. Wards of CF64 postcodes in the BUA: St Augustine\'s, Plymouth, Cornerswell, Stanwell, Llandough.',
    localProject: 'Met Office historic station data, Cardiff Bute Park (about 6 km north of Penarth town centre), monthly mean daily maximum temperature, Sept 1977 to Aug 2026 (47 months estimated; 2026 provisional). 48 complete years 1978 to 2025, each the mean of 12 months (ours): coolest 1979 13.03 C, warmest 2022 16.36 C. LIS 16 (1979, 1985, 1987, 1991, 1992, 1994, 1998, 2000, 2002, 2004, 2005, 2006, 2014, 2020, 2023, 2025); longest consecutive rise 5 (1986 to 1990). DP 1,128 comparisons, patience 141; brute force 20 years 1,048,575 subsets 0.8 s, 48 years about 7 years. 10,000 shuffles: mean LIS 10.9, 10 reached 16. Lesson family: longest increasing subsequence, patience sorting, dynamic programming, exponential brute force, shuffle test.',
    requiredMentions: [
      '28,395',
      'Cogan',
      'Cosmeston',
      'Cornerswell',
      'Bute Park',
      'patience sorting',
      'longest increasing subsequence',
      '1,128',
      '16.36'
    ],
    sources: [
      { claim: 'Met Office historic station data, Cardiff Bute Park, monthly values (Open Government Licence).', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/cardiffdata.txt' },
      { claim: 'Fredman M. L. (1975), On computing the length of longest increasing subsequences, Discrete Mathematics 11(1), 29 to 35.', url: 'https://doi.org/10.1016/0012-365X(75)90103-X' },
      { claim: 'Aldous D., Diaconis P. (1999), Longest increasing subsequences: from patience sorting to the Baik-Deift-Johansson theorem, Bulletin of the AMS 36(4), 413 to 432.', url: 'https://doi.org/10.1090/S0273-0979-99-00796-X' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations; postcodes.io lookups for CF64.', url: 'https://api.postcodes.io/places?q=Cogan' }
    ],
    rejectedClaims: [
      'Any statement about the cause of warming or about climate change: none made; the page says the project stops at the shuffle result.',
      'That the yearly averages are official Met Office statistics: they are our means of monthly values; the page says so.',
      'That Bute Park readings describe Penarth itself: the station is in Cardiff, about 6 km north; stated.',
      'That Sully or Dinas Powys are part of the Penarth built-up area: they are not; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
