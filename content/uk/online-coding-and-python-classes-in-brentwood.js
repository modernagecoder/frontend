'use strict';
// Brentwood (cg- town page, UK cluster Phase 10, towns band B, row 491). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: your program is slow; which line is to blame?
// (profiling with cProfile: measure before optimising, find the hotspot, fix it, measure again.)
// Data (read 30 September 2026): OS Code-Point Open, dataset version 2026.3.0, file cm.csv: 2,144 postcodes whose admin
// district code is E07000068 (Brentwood): CM13 679, CM14 615, CM15 594, CM4 250, CM5 4, CM12 2. All have coordinates.
// Our run (scratchpad bwd/prof.py): for every postcode find the closest other postcode. Version 1 (a dist() helper with
// math.sqrt inside a double loop): 2,144 x 2,143 = 4,594,592 distance calls. cProfile: 9,193,940 function calls in
// 6.495 s; dist() called 4,594,592 times, 4.386 s cumulative (67.5%); reading the file 0.121 s (1.9%). Unprofiled
// timings, median of 5 on our laptop: version 1 3.54 s; version 2 (squared distance written inline, one square root at
// the end) 1.04 s, 3.4 times faster; version 3 (500 m grid, only nearby cells searched) 0.11 s, 32 times faster, with
// 291,987 pair checks (6.36% of all pairs). All three versions give identical answers for all 2,144 postcodes. Median
// distance to the closest other postcode 62.8 m; 86 postcodes share their coordinate with another.
// Lesson family: profiling (cProfile), hotspots, measure-then-optimise. Screened: "cProfile" and "profiler" 0 hits in
// content/ city pages; claimed in claims.txt. Essex county page = headway and fleet size on a pier railway; Basildon =
// quicksort pivots; Corby = sort comparisons on postcodes (different question: that page counts comparisons in sorting).
// Place facts: Brentwood borough TS001 77,047. ONS 2021 BUA (published): Brentwood 55,340. postcodes.io (Brentwood):
// Shenfield (CM15), Hutton, Warley (CM13), Brook Street (CM14), Pilgrims' Hatch (CM15) suburban areas; Ingatestone (CM4)
// and Great Warley (CM13) villages.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BRENTWOOD', label: 'Brentwood', blurb: 'Online coding and Python classes for Brentwood, with a profiling project that finds the slow line in a postcode program and makes it 32 times faster.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-brentwood',
  code: 'bwd',
  accent: '#6B4E00',
  accentRationale: 'Brentwood: a dark ochre brown (7.74:1 contrast), chosen by hand to stand apart from recent accents',
  pageType: 'city',
  place: {
    name: 'Brentwood',
    eyebrow: 'Brentwood, Essex, East of England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Essex', href: '/coding-classes-in-essex' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Brentwood, Essex',
  title: 'Online Coding and Python Classes in Brentwood | AI, Ages 6 to 67',
  description: 'Python, coding, AI and vibe coding lessons online with a live tutor for Brentwood, Shenfield, Hutton and Ingatestone, ages 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Brentwood, with a profiling project on 2,144 local postcodes using cProfile.',
  twitterDescription: 'Brentwood Python, coding, AI and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Brentwood',
    description: 'Online Python, coding, AI, vibe coding and maths for children, teenagers and adults in Brentwood and Essex, taught live with an emphasis on measuring what code does.'
  },

  h1: 'Online coding and Python classes in Brentwood',
  capsuleQ: 'Which are the best online coding and Python classes in Brentwood?',
  capsule: 'Brentwood borough had 77,047 residents at the 2021 census, and the ONS built-up area of Brentwood held 55,340. Shenfield, Hutton, Warley and Brook Street are recorded suburbs, with Ingatestone and Great Warley as villages in the borough. Our tutors, who work from India, teach Python, coding, AI, vibe coding and maths on live video calls to anyone here from six years old to 67. You can have a tutor to yourself or share one with five to ten learners of your own standard. We want learners who test their beliefs about code instead of trusting a hunch. You try one lesson for nothing and we tell you which course we would pick. In the Brentwood project a Python program that takes three and a half seconds is put under a profiler, the guilty function is found, and two rewrites bring it down to a tenth of a second. After the trial it is USD 100 per month for group lessons and USD 150 per month for private ones.',
  lead: 'Every programmer eventually writes something that works but crawls. The tempting response is to guess what is slow and start rewriting. The guess is usually wrong. A profiler replaces the guess with a measurement: it runs the program and reports how many times each function was called and how long each one took. Python ships with one, called cProfile. This project points it at a small, real task, finding the closest neighbour of every postcode in the Brentwood borough, and follows the evidence. AI assistants now write a great deal of code, and they are no better than people at knowing which part will be slow without measuring.',
  wa: 'Hello Modern Age Coders, I would like a free Python or coding lesson for someone in Brentwood.',

  picks: {
    eyebrow: 'Brentwood course picks',
    h2: 'Python and coding courses to begin with in Brentwood',
    intro: 'Choose the row that matches the learner. In each case the first live lesson is a free trial and we never ask for card details to book it.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A first Python course for children, with small AI projects and the habit of timing what they write.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think before coding: counting steps, spotting repeated work, finding a shorter way.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, from loops to data structures, including the Brentwood profiling exercise.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Algorithms and data structures with measured running times, for degrees, interviews and real projects.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Brentwood borough',
      h2: 'Brentwood, Shenfield, Hutton and Ingatestone',
      intro: 'Census populations, recorded place names and the postcode districts the project uses.',
      body: [
        { kind: 'table', caption: 'Brentwood at the 2021 census (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Brentwood built-up area', '55,340'],
          ['Brentwood borough', '77,047']
        ] },
        { kind: 'p', text: 'The built-up area and the borough are different boundaries, published separately. According to postcodes.io, Shenfield and Pilgrims\' Hatch are suburban areas in CM15, Hutton and Warley in CM13 and Brook Street in CM14, while Ingatestone in CM4 and Great Warley in CM13 are villages in the borough. Pupils here study the English national curriculum. Tell us a school year between Year 2 and Year 13, or an adult\'s goals, and we fit the lessons around GCSE or A level work if there is any.' },
        { kind: 'callout', h3: 'More for Essex', p: 'See also <a class="cg-inline-link" href="/coding-classes-in-essex">coding classes in Essex</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-basildon">Basildon</a> and <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford</a>. Our view on thinking before tools is at <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Brentwood project',
      h2: 'Profiling with cProfile: find the slow line before you fix anything',
      intro: 'A working program, a wrong guess, a measurement, and two fixes of very different size.',
      body: [
        { kind: 'p', text: 'Ordnance Survey\'s Code-Point Open file gives a map coordinate for every postcode in Great Britain. In the CM file, 2,144 postcodes carry the Brentwood district code, most of them in CM13, CM14 and CM15. The learner writes the obvious program: read the file, then for each postcode loop over all the others, call a small dist() function, and remember the closest. It is correct and it takes about 3.5 seconds. Asked why, most people blame reading the file from disk.' },
        { kind: 'table', caption: 'What cProfile reported for the first version (profiled run, 6.495 seconds in total, our laptop)', head: ['Part of the program', 'Times called', 'Share of run time'], rows: [
          ['dist() and the square root inside it', '4,594,592', '67.5%'],
          ['The double loop around it', '1', '30.6%'],
          ['Reading the postcode file', '1', '1.9%']
        ] },
        { kind: 'p', text: 'The profiler disagrees with the guess. Reading the file is under 2% of the run. Two thirds of the time goes on dist(), which is tiny but is called 4,594,592 times, once for every ordered pair of postcodes (2,144 times 2,143). That number, not the function\'s length, is the problem. Profiling slows a program down, which is why the profiled run took 6.495 seconds; the timings below are from ordinary runs.' },
        { kind: 'table', caption: 'Three versions of the same program, median of five ordinary runs on our laptop', head: ['Version', 'Pairs compared', 'Time', 'Speed-up'], rows: [
          ['1. dist() helper with a square root', '4,594,592', '3.54 s', 'baseline'],
          ['2. Squared distance written inside the loop', '4,594,592', '1.04 s', '3.4 times'],
          ['3. 500 m grid, search nearby squares only', '291,987', '0.11 s', '32 times']
        ] },
        { kind: 'p', text: 'Version 2 attacks the cost of each call: it compares squared distances, so no function call and no square root are needed until the very end. That is worth 3.4 times. Version 3 attacks the count: it drops each postcode into a 500 metre grid square and looks only in neighbouring squares, widening the search only when needed. It compares 291,987 pairs, 6.36% of the original number, and runs 32 times faster. All three versions return exactly the same answer for all 2,144 postcodes, which the learner checks in code. Timings depend on the machine; the call counts do not.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Time two ways of finding the closest pin on a board, and count the measurements each one needs.' },
          { h3: 'Ages 11 to 15', p: 'Write the double loop in Python, run cProfile on it and read the call counts.' },
          { h3: 'Ages 15 and up', p: 'Build the grid version, prove it matches, and explain why changing the count beat changing the cost.' }
        ] },
        { kind: 'callout', h3: 'Source and licence', p: 'Contains OS data (C) Crown copyright and database right 2026, and Royal Mail and National Statistics data (C) Crown copyright and database right 2026, from Code-Point Open version 2026.3.0 under the Open Government Licence. The programs, call counts and timings are our own work on one laptop.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Measuring AI-written code',
      h2: 'What profiling teaches about vibe coding and AI agents',
      intro: 'An assistant can write a loop in a second. Whether the loop is fast is a separate question.',
      body: [
        { kind: 'table', caption: 'Lessons from the Brentwood profile', head: ['In the postcode program', 'When an AI writes your code'], rows: [
          ['The file-reading guess was wrong', 'Do not accept a guess about speed, yours or the AI\'s'],
          ['One small function ate 67.5% of the time', 'Ask where the time goes before asking for a rewrite'],
          ['Tidying the call gave 3.4 times', 'Micro-fixes help a little'],
          ['Cutting the number of calls gave 32 times', 'A better method helps a lot'],
          ['All versions were checked to agree', 'Faster code must still be the same code']
        ] },
        { kind: 'p', text: 'Vibe coding is the practice of describing a program in everyday words and letting an AI produce it. The first draft an AI gives for a task like this is very often the double loop, because it is the simplest thing that works. A Brentwood learner who has used a profiler knows what to do next: run cProfile, paste the report back to the AI, and ask for a change aimed at the line that matters. AI agents that run code on your behalf need the same discipline, since an agent that loops wastefully also spends money wastefully. Learners come to agent projects when their Python is dependable, which is typically at 16 or older, and Copilot Studio agents are available as one-to-one tuition only. Two further pages: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Ordnance Survey, Royal Mail, the Office for National Statistics and postcodes.io have no connection with Modern Age Coders. We used their openly licensed data, and what we did with it is our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Course ladder',
    h2: 'Counting steps, then writing fast Python',
    intro: 'School year is where we start guessing. One free lesson is how we find out.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Count the steps in a method and look for a shorter one.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'First Python', p: 'Real typed code, with AI used as a helper the child can question.', courses: ['python-ai-kids-masterclass', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Years 9 to 13', h3: 'Python in depth', p: 'Functions, data structures and profiling next to GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Algorithms and AI', p: 'Efficient code, machine learning and agents for work or study.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and performance',
    h2: 'What is profiling in Python, and can AI tell you why code is slow?',
    intro: 'Profiling is measuring where a running program spends its time, function by function; an AI can suggest why code is slow, but only a measurement such as a cProfile report can confirm it.',
    p1: 'For 2,144 Brentwood postcodes, cProfile showed one helper function called 4,594,592 times and taking 67.5% of the run, while reading the file took 1.9%; a grid-based rewrite then ran 32 times faster.',
    p2: 'A learner with that experience asks an AI for the profile before the fix, and checks that the faster version still gives the same output.',
    closer: 'It is a small habit, and it is one reason a Brentwood teenager who can code gets far more from AI tools than one who can only ask.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Online lessons for Brentwood, step by step',
    intro: 'Lessons run over video. A laptop or desktop is strongly preferred to a tablet, because the learner will be typing code.',
    cells: [
      { h3: 'Code typed by the learner', p: 'We never hand over finished programs. The student writes, runs and debugs while the tutor coaches.' },
      { h3: 'One trial, then a plan', p: 'A free lesson tells us the right level, and you get a suggested course at the end of it.' },
      { h3: 'Nothing to pay up front', p: 'The trial has no cost and needs no card.' },
      { h3: 'Small, matched groups', p: 'Five to ten learners at one level, joining from anywhere in the UK.' },
      { h3: 'Two sessions weekly', p: 'During term. Essex school holidays are skipped once we have your dates.' },
      { h3: 'Steady UK timing', p: 'We absorb the hour when the clocks change, so your slot holds.' }
    ],
    spec: { title: 'Why online suits coding', p: 'The tutor sees the learner\'s actual screen, every error message included, and a class can be filled by level from across the country.' }
  },

  fees: {
    h2: 'Lesson fees for Brentwood',
    intro: 'Outside India we charge one set of prices, shown here.',
    first: 'Your first complete lesson is free, and we recommend a course after it.',
    group: 'Small-class teaching, approximately eight lessons per month.',
    private: 'Private teaching, approximately eight lessons per month.',
    closer: 'All fees are in US dollars; there is no sterling price list. No invoice goes out until the trial is finished and you have chosen a course and a time. For holidays, missed lessons and changes of format, see the pricing page.'
  },

  reviewsH2: 'Essex families and UK learners reviewing us on Google',

  book: {
    h2: 'Book your free Brentwood lesson',
    intro: 'Let us know the age or year group and any interest at all. A trial can be a step-counting puzzle, a Scratch game made with an AI helper, a first Python program, or timing two versions of the same code.',
    success: 'Thank you. Your Brentwood request is with us.'
  },

  faq: {
    h2: 'Brentwood: common questions',
    intro: 'About profiling, the postcode project, Python, vibe coding and arrangements.',
    items: [
      { q: 'What is the population of Brentwood?', a: 'Brentwood borough had 77,047 usual residents at the 2021 census. The ONS built-up area of Brentwood had 55,340.' },
      { q: 'Do you offer online Python classes for Brentwood?', a: 'Yes. Python and coding are taught by live video to ages 6 to 67 across Brentwood, Shenfield, Hutton, Ingatestone and the rest of the borough.' },
      { q: 'What is cProfile?', a: 'cProfile is the profiler built into Python. It records how many times each function is called and how much time each takes.' },
      { q: 'What is a hotspot in code?', a: 'A hotspot is the small part of a program where most of the running time is spent. Speeding up anything else makes little difference.' },
      { q: 'What did the Brentwood project show?', a: 'A distance function called 4,594,592 times used 67.5% of the run. Rewriting it inline was 3.4 times faster, and a grid search was 32 times faster with identical results.' },
      { q: 'Is vibe coding taught as well?', a: 'Yes. Learners of all ages practise telling an AI what to build and then checking, measuring and correcting it.' },
      { q: 'When do learners start on AI agents?', a: 'Once they write Python reliably, generally from 16 upwards. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Can you help with GCSE or A level computer science?', a: 'Yes, including the programming project work. We teach the understanding and do not promise grades.' },
      { q: 'What do classes cost?', a: 'The first lesson costs nothing. Group lessons are USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Do you teach during school holidays?', a: 'Not unless you ask. Normally lessons pause for the dates you give us.' }
    ]
  },

  next: {
    eyebrow: 'Around Essex',
    h2: 'Other Essex pages and their projects',
    html: 'Try <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-basildon">Basildon</a> (choosing a quicksort pivot), <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford</a> or the county page for <a class="cg-inline-link" href="/coding-classes-in-essex">Essex</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'Brentwood and Essex',
  footerPlaces: [
    { href: '/coding-classes-in-essex', label: 'Essex' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bwd .cg-hero-grid { align-items: center; gap: clamp(1.5rem, 3vw, 2.75rem); }
.cg-root.cg-bwd .cg-hero h1 { font-weight: 780; letter-spacing: -0.028em; line-height: 1.06; }
.cg-root.cg-bwd .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-bwd .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.78rem; }
.cg-root.cg-bwd .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.021em; }
.cg-root.cg-bwd .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; letter-spacing: 0.01em; }
.cg-root.cg-bwd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bwd .cg-table th { font-weight: 700; font-size: 0.82rem; letter-spacing: 0.04em; }
.cg-root.cg-bwd .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-bwd .cg-callout { border-left-width: 4px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'Brentwood (E07000068), Census 2021 TS001 usual residents 77,047. ONS 2021 BUA (published): Brentwood 55,340. English national curriculum, GCSE and A level. postcodes.io (Brentwood): Shenfield, Pilgrims\' Hatch (CM15), Hutton, Warley (CM13), Brook Street (CM14) suburban areas; Ingatestone (CM4), Great Warley (CM13) villages.',
    localProject: 'OS Code-Point Open 2026.3.0, cm.csv, 2,144 postcodes with district code E07000068. Nearest other postcode for each. cProfile on version 1: 9,193,940 calls in 6.495 s; dist() 4,594,592 calls, 4.386 s cumulative (67.5%); double loop body 1.985 s (30.6%); file load 0.121 s (1.9%). Unprofiled medians of 5: v1 3.54 s; v2 inline squared distance 1.04 s (3.4x); v3 500 m grid 0.11 s (32x), 291,987 pair checks (6.36%). Identical results for all 2,144. Lesson family: profiling with cProfile, hotspots, measure before optimising.',
    requiredMentions: [
      '77,047',
      '55,340',
      '2,144',
      '4,594,592',
      'Shenfield',
      'Hutton',
      'Brook Street',
      'Ingatestone',
      'Great Warley',
      'cProfile'
    ],
    sources: [
      { claim: 'OS Code-Point Open, version 2026.3.0 (Ordnance Survey, Open Government Licence).', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas and villages in Brentwood.', url: 'https://api.postcodes.io/places?q=Shenfield' }
    ],
    rejectedClaims: [
      'That the timings hold on other machines: not claimed; one laptop, stated.',
      'That the 2,144 postcodes are every postcode in the borough: not claimed; they are the Brentwood-coded rows of the CM file.',
      'That the grid is the fastest possible method: not claimed.',
      'Commuting, rail services and local history: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
