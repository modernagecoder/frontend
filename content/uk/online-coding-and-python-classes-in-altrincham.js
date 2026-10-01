'use strict';
// Altrincham (cg- town page, UK cluster Phase 10, towns band B, row 515). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how can you be sure a loop is right, and not
// just right on the cases you happened to try? (Loop invariant, checked with assert.)
// Data (read 30 September 2026): OS Code-Point Open 2026.3.0 (copyright date 20 July 2026), postcode units in districts
// WA14 (1,131) and WA15 (1,185): 2,316 postcodes, supplied in sorted order. By local authority code in the file: 2,224
// Trafford, 75 Cheshire East, 17 Manchester, so the list is "WA14 and WA15", not "Altrincham".
// Our run (scratchpad atc/inv.py, seed 2026): binary search for every one of the 2,316 postcodes, and for 2,000 made-up
// postcodes of the right shape that are not in the list.
//   Correct (window a[lo:hi], hi starts at len): 2,316 found; at most 12 probes, mean 10.24; all 2,000 absent reported absent.
//   Version A (hi starts at len - 1): 1 postcode never found, the last one, WA15 9YS; absent cases fine. Twenty random
//     spot checks on existing postcodes all pass with probability 0.991. The invariant assert fails before the first probe.
//   Version B (lo = mid, not mid + 1): all 2,316 existing postcodes found; 1,998 of the 2,000 absent ones never finish
//     (each stopped by us at 200 probes). The invariant holds throughout; the window simply stops shrinking.
//   Version C (hi = mid - 1): 1,023 of 2,316 not found (44.2%); the assert fires for all 1,023, at the probe that
//     discards the target (1, 2, 4, 8 ... 512 targets at probes 1 to 10).
// Lesson family: loop invariant and termination measure, checked by assert, on boundary variants of a search loop.
// Screened: "loop invariant" 0 hits in content/, claims and spent lists; claimed in claims.txt. Differs from Manah
// (binary search on unsorted data), Kuwait (inclusive-range counting) and Stevenage (prefix sums). Greater Manchester
// county page = the Manchester Baby; Sale = association rules; Didsbury, Bolton, Bury have their own families.
// Place facts: Trafford TS001 235,052. ONS 2021 BUA (published): Altrincham 49,680. postcodes.io (Trafford): Broadheath
// and Oldfield Brow (suburban areas, WA14), Bowdon (WA14), Hale (town, WA15), Hale Barns (suburban area, WA15).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ALTRINCHAM', label: 'Altrincham', blurb: 'Online coding and Python classes for Altrincham, with a project that proves a search loop correct instead of hoping it is.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-altrincham',
  code: 'atc',
  accent: '#542414',
  accentRationale: 'Altrincham: a dark walnut brown (12.81:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Altrincham',
    eyebrow: 'Altrincham, Trafford, Greater Manchester',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Trafford' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Altrincham, Greater Manchester',
  title: 'Online Coding and Python Classes in Altrincham | Ages 6 to 67',
  description: 'Live online Python, coding, AI and vibe coding classes for Altrincham, Broadheath, Bowdon, Hale and Hale Barns learners aged 6 to 67. First lesson is free.',
  ogDescription: 'Online coding and Python classes for Altrincham, with a project that uses a loop invariant to catch one-character bugs in a search.',
  twitterDescription: 'Altrincham coding and Python classes online, plus AI and vibe coding, ages 6 to 67. Free trial lesson.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Altrincham',
    description: 'Online Python, coding, AI, vibe coding and maths for children, teenagers and adults in Altrincham and Trafford, taught live with an emphasis on reasoning about why code is correct.'
  },

  h1: 'Online coding and Python classes in Altrincham',
  capsuleQ: 'Which are the best online coding and Python classes in Altrincham?',
  capsule: 'Altrincham is a town in the Greater Manchester borough of Trafford. The Office for National Statistics put its built-up area at 49,680 usual residents in the 2021 census. The postcode gazetteer records Broadheath and Oldfield Brow as suburban areas in the WA14 district, Bowdon in WA14 too, and Hale and Hale Barns in WA15. Whichever of these is home, a learner between six and 67 can take our Python, coding, AI, vibe coding and maths courses. Every lesson is a live video call with a tutor based in India, taken privately or in a class of five to ten learners at one level. What we care about is that a learner can say why their program works, and the typing follows from that. The first lesson is free and ends with a course recommendation from us. In the Altrincham project, learners search a sorted list of 2,316 local postcodes and meet three versions of the search that are each wrong by a single character. One of them fails on exactly one postcode. Past the trial, the monthly fee is USD 100 in a group and USD 150 for a private tutor.',
  lead: 'Binary search is the first fast algorithm most programmers learn. To find a name in a sorted list, look at the middle, throw away the half that cannot contain it, and repeat. It is also well known for being easy to get slightly wrong: a plus one missing here, a less-than that should be less-than-or-equal there. Testing a few cases will not reliably catch that kind of slip. What does catch it is a loop invariant, a statement that must be true every time round the loop, which you can write down and have Python check for you. This project puts the idea to work on the postcodes of Altrincham.',
  wa: 'Hello Modern Age Coders, I would like to try a free Python or coding lesson for a learner in Altrincham.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Python and coding courses for Altrincham',
    intro: 'Four routes by age, each opening with a free live lesson. We do not ask for a card to book it.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'Python for children from the first line, with small AI projects and the habit of checking their own work.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think before coding: guessing games, halving, and rules that must always stay true.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete Python for teenagers, including searching, sorting and the Altrincham invariant project.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Algorithms and data structures with correctness arguments, for degrees, interviews and real code.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Altrincham in numbers',
      h2: 'Altrincham, Broadheath, Bowdon, Hale and Hale Barns',
      intro: 'Census counts as published, and the local names found in the postcode gazetteer.',
      body: [
        { kind: 'table', caption: 'Altrincham and Trafford, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Altrincham built-up area', '49,680'],
          ['Trafford borough', '235,052']
        ] },
        { kind: 'p', text: 'The ONS publishes each of these on its own. Trafford includes Sale, Stretford, Urmston and other places, so the borough figure is no guide to the size of the town. postcodes.io lists Broadheath and Oldfield Brow as suburban areas in the WA14 postcode district, Bowdon as a settlement in WA14, Hale as a town in WA15 and Hale Barns as a suburban area in WA15, all in Trafford. Altrincham pupils follow England\'s national curriculum. Tell us the year, anything from Year 2 to Year 13, and we pitch lessons to it; exam-age learners can have them tied to GCSE or A level computer science and maths.' },
        { kind: 'callout', h3: 'Greater Manchester pages', p: 'See also <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">coding classes in Greater Manchester</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-sale">Sale</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stockport">Stockport</a>. Why we teach reasoning first: <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Altrincham project',
      h2: 'A loop invariant for binary search',
      intro: 'One sentence that stays true on every pass, and what happens when it does not.',
      body: [
        { kind: 'p', text: 'Ordnance Survey\'s open postcode file lists 2,316 postcodes in the WA14 and WA15 districts, already in sorted order. Most are in Trafford; the file also places 75 of them in Cheshire East and 17 in Manchester, so this is a list of two postcode districts and not a list of Altrincham alone. The learner writes a binary search over it. Two markers, lo and hi, fence off the part of the list still in play. The invariant is this: if the postcode we want is in the list at all, it is somewhere from position lo up to, but not including, position hi. It must be true before the loop starts and after every pass. In Python that is one assert line inside the loop.' },
        { kind: 'p', text: 'The correct search finds all 2,316 postcodes. It never needs more than 12 looks at the list and averages 10.24, where reading from the top could need 2,316. It also correctly reports 2,000 made-up postcodes as absent. Then the learner is handed three other versions. Each differs from the correct one by a single character or number, the kind of slip that people and AI assistants both make.' },
        { kind: 'table', caption: 'Four versions of binary search on 2,316 WA14 and WA15 postcodes, plus 2,000 made-up postcodes not in the list (our Python run on OS Code-Point Open)', head: ['Version', 'Real postcodes not found', 'Made-up postcodes that never finish', 'What catches it'], rows: [
          ['Correct', '0', '0', 'Nothing to catch'],
          ['A: hi starts one place too low', '1', '0', 'Reading the first line against the invariant'],
          ['B: lo = mid in place of mid + 1', '0', '1,998', 'A check that the window shrinks'],
          ['C: hi = mid - 1 in place of mid', '1,023', '0', 'The assert, on the pass that loses the target']
        ] },
        { kind: 'p', text: 'Version C is the loud one. It fails on 1,023 postcodes, 44.2% of the list, so almost any testing would notice, and the assert points at the exact pass where the target was thrown away. Version A is the quiet one. It works for 2,315 postcodes and fails on one: WA15 9YS, the very last in the list, which never gets inside the window. If you tested it on 20 postcodes picked at random, it would pass all 20 about 99.1% of the time. An assert inside the loop is no luckier: at run time it trips on WA15 9YS and on nothing else, one search in 2,316. What exposes version A is reading the first line against the invariant. With hi starting one place too low, the promise "if the target is in the list, it is between lo and hi" is already broken for the last postcode before the loop begins. No test input is needed to see that, and the invariant names the one test worth writing: search for the last item.' },
        { kind: 'p', text: 'Version B teaches a second rule. It finds every real postcode, and its invariant is never broken. But give it a postcode that is not in the list and the window stops shrinking: 1,998 of our 2,000 made-up postcodes never finished, and we stopped each after 200 looks. A test suite that only searches for things that exist would pass it completely. So a proof of a loop needs two parts: an invariant, which shows the answer is right if the loop ends, and a quantity that gets smaller on every pass, which shows the loop does end. Here that quantity is hi minus lo.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play guess-the-number with a rule card: "the secret is always between my two fingers". Spot when it breaks.' },
          { h3: 'Ages 11 to 15', p: 'Write binary search in Python, add the assert, and search for every postcode in the list.' },
          { h3: 'Ages 15 and up', p: 'Diagnose versions A, B and C, state the invariant and the shrinking quantity, and test absent items too.' }
        ] },
        { kind: 'callout', h3: 'Data note', p: 'Contains OS data (C) Crown copyright and database right 2026 (Code-Point Open, Open Government Licence), read 30 September 2026. The four search versions, the made-up postcodes and all counts are our own work. Only the postcode strings are used; nothing about any address or resident is involved.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Correctness and AI',
      h2: 'What an invariant teaches about vibe coding and AI agents',
      intro: 'Code that looks right and passes a few tests can still be wrong in one place.',
      body: [
        { kind: 'table', caption: 'From the postcode search to AI-written code', head: ['Found in Altrincham', 'Lesson for working with AI'], rows: [
          ['Version A failed on 1 postcode in 2,316', 'Spot checks miss edge cases'],
          ['Twenty random tests passed it 99.1% of the time', 'Passing tests is not proof'],
          ['Version B only failed on absent postcodes', 'Test what should not be found, too'],
          ['The invariant pointed straight at A\'s one failing case', 'State what must always be true, then check it'],
          ['The window had to shrink every pass', 'An agent\'s loop needs a reason to stop']
        ] },
        { kind: 'p', text: 'Vibe coding is writing software by telling an AI what you want in plain language and letting it produce the code. The code it produces is usually close. Close is the problem: the Altrincham versions are each one character from correct, and an AI assistant can write any of them with total confidence. A learner who can state an invariant has a way to check the work that does not rely on guessing good test cases. They can also ask the AI to state the invariant itself, and see whether its code keeps the promise. The idea scales up to AI agents, which are programs that loop: plan, act, observe, repeat. An agent needs something that stays true while it works and something that guarantees it will finish. Agent building is reserved for learners with sound Python, in practice sixth formers and adults, and Copilot Studio work is done privately with a tutor, not in class. Read on: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Ordnance Survey, the Office for National Statistics and postcodes.io. We worked from their open data and answer for our own results.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners progress',
    h2: 'Guessing games, then Python, then proofs',
    intro: 'The school year gives a first idea of the level; the free lesson makes sure.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Halving games and always-true rules, on paper and in Scratch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'First Python', p: 'Real code typed by the child, with AI as a helper to be checked.', courses: ['python-ai-kids-masterclass', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Years 9 to 13', h3: 'Python in depth', p: 'Searching, sorting, assert and testing beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Algorithms and AI', p: 'Correct, efficient code and machine learning for study or work.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and trust',
    h2: 'What is a loop invariant, and how do you check AI-written Python code?',
    intro: 'A loop invariant is a statement that is true before a loop starts and stays true after every pass, and you check AI-written Python by writing that statement as an assert, adding a quantity that must shrink each pass, and testing inputs that should fail as well as ones that should succeed.',
    p1: 'On 2,316 postcodes from the WA14 and WA15 districts, a binary search with its upper marker one place too low found 2,315 of them and missed only the last, WA15 9YS.',
    p2: 'A different one-character slip found every real postcode but never finished on 1,998 of 2,000 that were not in the list.',
    closer: 'A teenager in Altrincham who can find those faults by reasoning is the person who should be supervising AI-written code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The format',
    h2: 'How Altrincham learners are taught',
    intro: 'Lessons happen over video. You need a computer with a camera, and a desk or table away from distractions.',
    cells: [
      { h3: 'Learners write the code', p: 'On their own shared screen, line by line, with the tutor asking why.' },
      { h3: 'A genuine first lesson', p: 'Free, full length, and used to decide which course to recommend.' },
      { h3: 'Free to book', p: 'No card details, no deposit.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at one stage, from towns all over the UK.' },
      { h3: 'Two lessons per week', p: 'In term time, with a pause for Trafford school holidays on request.' },
      { h3: 'Same slot year round', p: 'When UK clocks change in spring and autumn, we adjust; your lesson time is constant.' }
    ],
    spec: { title: 'Why online', p: 'The tutor sees exactly what the learner types through the shared screen, and groups can be assembled at a single level from a nationwide pool.' }
  },

  fees: {
    h2: 'Fees for Altrincham learners',
    intro: 'There is one international fee for learners outside India.',
    first: 'Free first lesson, a full session with course advice at the end.',
    group: 'Group of five to ten, in the region of eight lessons a month.',
    private: 'One-to-one tuition, in the region of eight lessons a month.',
    closer: 'Our fees are in US dollars and we do not state them in pounds. You pay nothing until the trial is over and a course and time are chosen. Holiday pauses, missed lessons and format changes are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from Greater Manchester families and UK learners',

  book: {
    h2: 'Request a free Altrincham lesson',
    intro: 'All we need is how old the learner is, or which year they are in, and something they enjoy. The first lesson may be a halving game, a Scratch project with an AI helper, a first Python program, or a search with an assert in it.',
    success: 'Thank you. Your Altrincham request has arrived.'
  },

  faq: {
    h2: 'Altrincham: questions and answers',
    intro: 'Invariants, the postcode search, Python, vibe coding and how lessons run.',
    items: [
      { q: 'What is the population of Altrincham?', a: 'The ONS recorded 49,680 usual residents in the Altrincham built-up area at the 2021 census.' },
      { q: 'Can I take online Python classes from Altrincham?', a: 'Yes. Lessons are live online for ages 6 to 67 in Altrincham, Broadheath, Oldfield Brow, Bowdon, Hale and Hale Barns.' },
      { q: 'What is a loop invariant?', a: 'A loop invariant is a condition that holds before a loop begins and after each pass through it. It is the main tool for showing that a loop gives the right answer.' },
      { q: 'What does assert do in Python?', a: 'An assert statement checks that a condition is true and stops the program with an error if it is not, which makes hidden mistakes visible.' },
      { q: 'What did the Altrincham project show?', a: 'Three one-character changes to a binary search missed 1 postcode, 1,023 postcodes, or no real postcodes at all while failing to finish on absent ones. Reasoning with an invariant and a shrinking check exposed all three.' },
      { q: 'Do learners use AI to write code?', a: 'Yes, as vibe coding: they describe the program, read what the AI writes, and test and correct it.' },
      { q: 'When do AI agents come in?', a: 'Once a learner has sound Python, which in practice means sixth form or later. Copilot Studio is covered in private lessons.' },
      { q: 'Is this useful for A level computer science?', a: 'Searching, algorithm correctness and Python are all relevant. We teach for understanding and do not guarantee grades.' },
      { q: 'What are the fees?', a: 'The trial is free. A seat in a group is then USD 100 monthly; a private tutor is USD 150 monthly.' },
      { q: 'Can we pause for holidays?', a: 'Yes. Let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'More to read',
    h2: 'Other Greater Manchester projects',
    html: 'Each town page has its own problem: <a class="cg-inline-link" href="/ai-and-programming-classes-in-sale">Sale</a> (which shops appear together), <a class="cg-inline-link" href="/ai-and-programming-classes-in-stockport">Stockport</a> and <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a>. The wider lists are on <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">our North West England page</a> and at <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the hub for the whole UK</a>.',
    waLabel: 'Reach us on WhatsApp'
  },

  footerHeading: 'Altrincham and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-atc .cg-hero-grid { align-items: end; gap: clamp(1.15rem, 2.9vw, 2.5rem); }
.cg-root.cg-atc .cg-hero h1 { font-weight: 730; letter-spacing: -0.022em; line-height: 1.08; }
.cg-root.cg-atc .cg-capsule { border: 1px solid var(--cg-accent); border-left-width: 5px; padding: 0.9rem 1rem; }
.cg-root.cg-atc .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.82rem; }
.cg-root.cg-atc .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.019em; }
.cg-root.cg-atc .cg-table caption { font-weight: 500; font-style: italic; text-align: left; font-size: 0.9rem; }
.cg-root.cg-atc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-atc .cg-table th { font-weight: 700; border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-atc .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-atc .cg-callout { border-radius: 4px; border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Trafford (E08000009), Greater Manchester, Census 2021 TS001 usual residents 235,052. ONS 2021 BUA (published): Altrincham 49,680. English national curriculum, GCSE and A level. postcodes.io (Trafford): Broadheath, Oldfield Brow (suburban areas, WA14), Bowdon (WA14), Hale (town, WA15), Hale Barns (suburban area, WA15).',
    localProject: 'OS Code-Point Open 2026.3.0: WA14 (1,131) and WA15 (1,185), 2,316 postcodes in sorted order (2,224 Trafford, 75 Cheshire East, 17 Manchester by the file\'s authority code). Binary search tested on all 2,316 and on 2,000 made-up absent postcodes, seed 2026. Correct version: all found, at most 12 probes, mean 10.24. Version A (hi starts at len - 1): 1 not found, the last, WA15 9YS; 20 random tests pass with probability 0.991; invariant false before the first probe. Version B (lo = mid): all real postcodes found, 1,998 of 2,000 absent never finish (stopped at 200 probes); invariant holds, window stops shrinking. Version C (hi = mid - 1): 1,023 not found (44.2%); assert fires on all 1,023. Lesson family: loop invariant, termination measure, assert, boundary variants of a search loop.',
    requiredMentions: [
      '49,680',
      'Broadheath',
      'Oldfield Brow',
      'Bowdon',
      'Hale Barns',
      'loop invariant',
      '2,316',
      '1,023',
      'WA15 9YS',
      '1,998'
    ],
    sources: [
      { claim: 'OS Code-Point Open 2026.3.0, postcode units for WA14 and WA15 (Open Government Licence).', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Altrincham and the named places in Trafford.', url: 'https://api.postcodes.io/places?q=Altrincham' }
    ],
    rejectedClaims: [
      'That the 2,316 postcodes are all in Altrincham: not claimed; they are the WA14 and WA15 districts, which the file spreads over three authorities.',
      'That version B runs forever in a strict sense: each run was stopped at 200 probes, and the page says so.',
      'That AI assistants usually write binary search wrongly: not claimed; only that one-character slips of this kind can occur and are hard to see.',
      'Anything about the addresses or residents behind a postcode: nothing used beyond the postcode strings.',
      'That Bowdon, Hale or Hale Barns are parts of Altrincham: not claimed; they are listed as recorded in Trafford.',
      'Named schools, term dates and sterling prices: none.'
    ]
  }
};
