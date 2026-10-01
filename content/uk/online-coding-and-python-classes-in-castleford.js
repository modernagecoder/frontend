'use strict';
// Castleford (cg- town page, UK cluster Phase 10, towns band B, row 531). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you fill a hole in a grid of heights
// by repeatedly averaging neighbours, and how do you know when to stop? (relaxation method: Jacobi, Gauss-Seidel and
// successive over-relaxation on a Castleford elevation grid).
// Data (read 30 September 2026): OpenTopoData public API, eudem25m (Copernicus EU-DEM v1.1), 61 x 61 points about 50 m
// apart centred on the postcodes.io place point for Castleford (53.72580 N, 1.35354 W); 3,721 heights, 5.56 to 74.68 m.
// Our run (scratchpad cfd/relax2.py): nine hidden blocks of 19 x 19 points (361 heights each) tiling the grid; each
// refilled from its surrounding ring by the discrete Laplace equation, solved exactly with scipy for reference.
// Sweeps to come within 1 cm of the exact fill everywhere: Jacobi 219 to 356 (mean 300.9); Gauss-Seidel 111 to 214
// (mean 163.4); SOR with omega = 2 / (1 + sin(pi / 20)) = 1.729: 24 to 40 (mean 33.3). Naive stop (no point moved more
// than 1 cm in the last sweep): Jacobi after 45 to 135 sweeps, still 0.27 to 0.43 m from the exact fill; Gauss-Seidel
// after 33 to 84 sweeps, 0.16 to 0.30 m off; SOR after 23 to 41 sweeps, at most 0.01 m off. Against the real heights:
// relaxation RMS error per block 1.25 to 4.74 m, filling with the ring average 1.96 to 16.71 m; relaxation closer in 9
// of 9 blocks; largest single-point miss 16.3 m. The fill never rises above the highest ring height or below the lowest;
// in 2 of the 9 blocks the real heights rise above the ring's highest point.
// Lesson family: relaxation method (Jacobi, Gauss-Seidel, successive over-relaxation), stopping rules.
// Place facts: Wakefield (E08000036) TS001 353,368. ONS 2021 BUAs wholly inside it (published): Wakefield 97,870;
// Castleford 45,355; Pontefract 32,975; Normanton (Wakefield) 21,980; Ossett 21,855.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CASTLEFORD', label: 'Castleford', blurb: 'Online coding and Python classes for Castleford in West Yorkshire, with a Python project that fills holes in a height map by averaging neighbours.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-castleford',
  code: 'cfd',
  accent: '#9C484C',
  accentRationale: 'Castleford: a dusty brick rose (6.1:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Castleford',
    eyebrow: 'Castleford, City of Wakefield, West Yorkshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Wakefield', href: '/best-coding-class-in-wakefield' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Castleford, West Yorkshire',
  title: 'Online Coding and Python Classes in Castleford, West Yorkshire',
  description: 'Online coding, Python, AI and vibe coding classes for Castleford, Airedale, Whitwood, Cutsyke and Half Acres, taught live for ages 6 to 67. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Castleford, with a numerical Python project: refill hidden patches of a height map by Jacobi, Gauss-Seidel and over-relaxation.',
  twitterDescription: 'Castleford, West Yorkshire: coding, Python, AI and vibe coding lessons live online for ages 6 to 67. The first one is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Castleford, West Yorkshire',
    description: 'Coding, Python, AI, vibe coding and maths for children, teenagers and adults in Castleford and the City of Wakefield district, taught live online with numerical projects checked against real data.'
  },

  h1: 'Online coding and Python classes in Castleford',
  capsuleQ: 'Which online coding and Python classes suit Castleford learners best?',
  capsule: 'At the 2021 census the ONS counted 45,355 people in the Castleford built-up area and 353,368 in the City of Wakefield district. Airedale, Whitwood, Cutsyke, Half Acres, Wheldale, Townville, Whitwood Mere and New Fryston appear in postcodes.io as suburban areas whose nearest postcode is inside that built-up area. We teach coding, Python, AI, vibe coding and maths to anyone from six to 67 on live video, with tutors based in India, either one-to-one or in a class of five to ten learners who have reached the same point. The teaching aims at understanding: a learner should be able to predict what a loop will do before running it. In the Castleford project Python hides patches of a real height map and refills them by averaging, and learners find out that the obvious rule for when to stop gives an answer that looks finished and is not. The first lesson is free and closes with a course recommendation. After that, monthly fees are USD 100 for group lessons and USD 150 for private ones.',
  lead: 'Here is a rule a ten-year-old can follow: to guess a missing number in a grid, take the average of the four numbers around it. Now suppose a whole block of numbers is missing. Each guess depends on its neighbours, which are guesses too. The way out is to sweep through the block again and again, updating every guess from its neighbours, until nothing changes. Mathematicians call this relaxation, and the order in which you update turns out to matter enormously. Castleford makes a good test because its height map, from the EU-DEM model, runs from under 6 m to nearly 75 m within a single 3 km square.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python lesson for a learner in Castleford.',

  picks: {
    eyebrow: 'Choosing a course',
    h2: 'Coding, Python and AI courses for Castleford',
    intro: 'Match a course to the learner\'s age. Every one starts with a free live lesson, reserved without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: fill the blanks in a number grid so every square is the average of its neighbours.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Get an AI to draft a Scratch game with a hidden map, then check where its guesses go wrong.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through loops, arrays and numerical methods, with the Castleford height map as a project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Web and Python projects built alongside an AI assistant, with every result checked against the data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wakefield district',
      h2: 'Castleford and the other towns of the district',
      intro: 'Five built-up areas that lie wholly inside the City of Wakefield district, with their 2021 populations.',
      body: [
        { kind: 'table', caption: 'Built-up areas wholly inside the City of Wakefield district, residents at the 2021 census (ONS)', head: ['Built-up area', 'Residents'], rows: [
          ['Wakefield', '97,870'],
          ['Castleford', '45,355'],
          ['Pontefract', '32,975'],
          ['Normanton', '21,980'],
          ['Ossett', '21,855']
        ] },
        { kind: 'p', text: 'These are the ONS\'s published figures, printed as they stand and never added together; the district total of 353,368 is a separate census count. Around Castleford, postcodes.io also records Hightown as a suburban area, and Featherstone, Knottingley and Sharlston appear as places in their own right with their own built-up areas. Castleford schools teach the national curriculum for England, and our timetable works around the term dates you give us.' },
        { kind: 'callout', h3: 'West Yorkshire, the region and our approach', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">coding classes in West Yorkshire</a>, and the regional page is <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. Why every course puts thinking ahead of tools is set out in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Castleford project',
      h2: 'Relaxation in Python: Jacobi, Gauss-Seidel and over-relaxation',
      intro: 'Hide part of a real height map, refill it by averaging, and measure how fast and how well each method works.',
      body: [
        { kind: 'p', text: 'The grid comes from the OpenTopoData service, which serves the Copernicus EU-DEM elevation model. We asked for 61 by 61 points about 50 m apart, centred on Castleford, and got back 3,721 heights between 5.6 m and 74.7 m. The learner then cuts nine square holes, each 19 points by 19, so that 361 heights at a time disappear, and tries to put them back using nothing but the ring of known heights around each hole.' },
        { kind: 'p', text: 'The rule for every missing point is the same: become the average of your four neighbours. There is exactly one set of numbers that satisfies it everywhere at once, and Python can find it directly with a sparse matrix solver, which gives us a reference answer to measure against. The interesting part is getting there by sweeping. Jacobi\'s method updates every point from the old values of its neighbours. Gauss-Seidel uses each new value the moment it is computed. Successive over-relaxation, or SOR, does the same but deliberately overshoots each update by a factor, here 1.729, the figure theory recommends for a hole of this size.' },
        { kind: 'table', caption: 'Sweeps needed across the nine hidden blocks (our Python, EU-DEM heights)', head: ['Method', 'Sweeps to get within 1 cm of the exact fill', 'Where "stop when nothing moves 1 cm" stops', 'How far off it still is then'], rows: [
          ['Jacobi', '219 to 356', '45 to 135', '0.27 to 0.43 m'],
          ['Gauss-Seidel', '111 to 214', '33 to 84', '0.16 to 0.30 m'],
          ['SOR, factor 1.729', '24 to 40', '23 to 41', 'no more than 0.01 m']
        ] },
        { kind: 'p', text: 'Two lessons come out of that table. The first is speed. On average Gauss-Seidel needed about half the sweeps of Jacobi, and SOR needed about a fifth of Gauss-Seidel\'s. One line of code, multiplying each correction by 1.729, cut the work by that much. The second lesson is subtler and more useful. The natural stopping rule, quit when no point moves by more than a centimetre, is badly wrong for the slow methods. Jacobi\'s updates shrink to a centimetre while its answer is still up to 43 cm from where it will end up; each step is small only because the method is slow, not because it has arrived. SOR is the only one of the three for which small steps really do mean done.' },
        { kind: 'table', caption: 'How close the refilled heights come to the real ones (our comparison)', head: ['Fill', 'Error per block, root mean square', 'Closer of the two'], rows: [
          ['Relaxation from the ring', '1.25 to 4.74 m', '9 blocks of 9'],
          ['Every hole set to the ring\'s average', '1.96 to 16.71 m', '0 blocks of 9']
        ] },
        { kind: 'p', text: 'Relaxation always beat the lazy fill, but it has a built-in blind spot. An average can never be larger than the largest thing it averages, so the refilled patch can never rise above the highest point of its ring or sink below the lowest. In two of the nine blocks the real ground inside rose above every point on the ring, and relaxation smoothed that high ground away. The worst single height was off by 16.3 m. No amount of sweeping fixes that; the information was simply not in the ring.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Fill a paper grid with missing numbers by averaging neighbours, round after round, and watch the numbers settle.' },
          { h3: 'Ages 11 to 15', p: 'Write the Jacobi sweep with two nested loops in Python and count the rounds on a small grid.' },
          { h3: 'Ages 15 and up', p: 'Use NumPy on the real heights, add Gauss-Seidel and SOR, and design a stopping rule that tells the truth.' }
        ] },
        { kind: 'callout', h3: 'Data and caveats', p: 'Heights from the EU-DEM v1.1 model through the OpenTopoData API, produced using Copernicus data and information funded by the European Union. A 25 m elevation model smooths buildings and banks, and our points are about 50 m apart, so none of these figures describes a particular street. The holes, the fills and every count above come from our own code.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Knowing when to stop',
      h2: 'What averaging a height map teaches about AI and vibe coding',
      intro: 'A process that has stopped changing much has not necessarily reached the right answer.',
      body: [
        { kind: 'table', caption: 'From Castleford\'s grid to AI work', head: ['In the project', 'In AI and vibe coding'], rows: [
          ['Jacobi 0.43 m off when its steps were tiny', 'Small changes can mean slow progress, not arrival'],
          ['SOR 1.729 cut sweeps about fivefold', 'A well-chosen setting can matter more than more computing'],
          ['An exact solver to compare against', 'Keep a trusted answer to test the fast one'],
          ['Hidden hills in 2 of 9 blocks', 'A model cannot invent what its inputs do not contain'],
          ['Relaxation closer in 9 of 9 blocks', 'Measure against a simple baseline before trusting a method']
        ] },
        { kind: 'p', text: 'Training a neural network is also an iterative process, and people stop it when the loss "flattens out". That is the Jacobi trap in a new setting: a flat curve can mean the network has learned what it can, or that the learning rate is too small to make visible progress. Ask an AI assistant to vibe code an iterative solver and it usually writes the plain Jacobi loop with an update-size stopping test, because that is what most examples look like. Castleford learners know to compare against an exact answer on a small case before trusting the loop on a large one. For those who can write Python unaided, typically sixth-formers and adults, the next step is AI agents; Copilot Studio agents are taught one-to-one only. Read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page is our own work. OpenTopoData, the Copernicus programme, the Office for National Statistics and postcodes.io have not reviewed it and are named only as sources of open data.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From number grids to numerical methods',
    intro: 'School years give a rough starting point; the free lesson tells us more.',
    cols: [
      { band: 'Years 1 to 6', h3: 'How to think', p: 'Averages, patterns and puzzles that settle down step by step.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games drafted with an AI and then tested for mistakes.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and numerical work', p: 'Loops, arrays and methods that converge, in step with GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Python for real problems', p: 'Sound Python, then data structures, algorithms and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and iteration',
    h2: 'What is the relaxation method in programming?',
    intro: 'The relaxation method is a way of solving a large set of linked equations by starting from a guess and repeatedly replacing each unknown with a value computed from its neighbours, such as their average, until the values stop changing; Jacobi, Gauss-Seidel and successive over-relaxation are its three classic versions.',
    p1: 'Refilling nine hidden blocks of Castleford heights, Jacobi needed 219 to 356 sweeps, Gauss-Seidel 111 to 214 and over-relaxation with a factor of 1.729 only 24 to 40.',
    p2: 'Stopping as soon as no height moved more than 1 cm left Jacobi\'s answers up to 0.43 m short of the true fill.',
    closer: 'Castleford teenagers who have caught a loop looking finished too early bring that suspicion to every AI result they meet. It comes from writing and testing the loop themselves, which is one more reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'Airedale, Whitwood and Cutsyke, one online class',
    intro: 'The learner needs a computer, a webcam and a connection that can carry video.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner writes and runs everything; the tutor watches the shared screen and questions.' },
      { h3: 'Level found first', p: 'The trial shows us what the learner can already do and which board they sit.' },
      { h3: 'No-cost first lesson', p: 'A full lesson with no card required, ending in our recommendation.' },
      { h3: 'Groups of equals', p: 'Five to ten learners at one stage, recruited nationally.' },
      { h3: 'Two sessions a week', p: 'We skip whatever holiday weeks you list.' },
      { h3: 'Fixed through the year', p: 'Clock changes are handled at our end, so the lesson time stays put.' }
    ],
    spec: { title: 'Why the class is online', p: 'Learners at exactly the same stage are spread thinly across any one district. Online, the whole country is the pool.' }
  },

  fees: {
    h2: 'Castleford lesson fees',
    intro: 'Castleford pays our international rates, which apply everywhere except India.',
    first: 'One full live lesson, free, ending with our course advice.',
    group: 'About eight group lessons in a month.',
    private: 'About eight private lessons in a month.',
    closer: 'Fees are in US dollars only, with no sterling figure. Billing begins after the trial, when a course and a regular time are settled. The pricing page covers holidays, missed sessions and moving between formats.'
  },

  reviewsH2: 'Google reviews from Yorkshire families and learners across the UK',

  book: {
    h2: 'Reserve a free Castleford lesson',
    intro: 'Give us an age or school year and something the learner enjoys. The trial could be a number-grid puzzle, a Scratch game drafted with AI, first steps in Python, or a first numerical method.',
    success: 'Thank you. We have your Castleford request and will reply soon.'
  },

  faq: {
    h2: 'Castleford FAQs',
    intro: 'The relaxation project, Python, AI, vibe coding and how lessons work.',
    items: [
      { q: 'What is the population of Castleford?', a: 'On ONS figures the Castleford built-up area had 45,355 usual residents at the 2021 census, within a City of Wakefield district of 353,368.' },
      { q: 'Are online coding and Python lessons available in Castleford?', a: 'Yes, live on video for ages 6 to 67, covering Castleford, Airedale, Whitwood, Cutsyke, Half Acres and the wider district.' },
      { q: 'What is the difference between Jacobi and Gauss-Seidel?', a: 'Jacobi updates every value using only the previous sweep\'s numbers. Gauss-Seidel uses each new value straight away, so information spreads faster and it usually needs about half as many sweeps.' },
      { q: 'What is over-relaxation?', a: 'A tweak to Gauss-Seidel that pushes each update further than the average suggests, by a factor between 1 and 2. With a good factor it converges many times faster.' },
      { q: 'What do learners build in the Castleford project?', a: 'A Python program that hides blocks of a real height map, refills them three ways, checks each against an exact solution, and tests an honest stopping rule.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at every age. Learners describe a program to an AI, then read and test whatever it writes.' },
      { q: 'When can learners build AI agents?', a: 'When they write Python confidently without help, commonly in sixth form or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Can you help with GCSE or A level?', a: 'Yes, in computer science and maths, aiming at real understanding. We do not guarantee grades.' },
      { q: 'How much are lessons?', a: 'Nothing for lesson one; from then on USD 100 monthly as part of a class, or USD 150 monthly with a tutor to yourself.' },
      { q: 'Do lessons stop for school holidays?', a: 'They can. Tell us the dates and we will pause.' }
    ]
  },

  next: {
    eyebrow: 'Around West Yorkshire',
    h2: 'Other West Yorkshire and Yorkshire pages',
    html: 'Different projects run on the pages for <a class="cg-inline-link" href="/best-coding-class-in-wakefield">Wakefield</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-dewsbury">Dewsbury</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-keighley">Keighley</a>, and the county has its own page at <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Castleford and West Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cfd .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.5rem); }
.cg-root.cg-cfd .cg-hero h1 { font-weight: 740; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-cfd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-cfd .cg-eyebrow { letter-spacing: 0.09em; font-weight: 690; font-size: 0.8rem; }
.cg-root.cg-cfd .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.016em; }
.cg-root.cg-cfd .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-cfd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cfd .cg-table th { font-size: 0.83rem; font-weight: 700; letter-spacing: 0.01em; }
.cg-root.cg-cfd .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-cfd .cg-callout { border-left-width: 4px; border-radius: 6px; }
`,

  dossier: {
    curriculumAuthority: 'City of Wakefield (E08000036), Census 2021 TS001 usual residents 353,368. ONS 2021 BUAs wholly inside the district (published): Wakefield 97,870; Castleford 45,355; Pontefract 32,975; Normanton (Wakefield) 21,980; Ossett 21,855. postcodes.io suburban areas whose nearest postcode lies in the Castleford BUA: Airedale, Whitwood, Cutsyke, Hightown, Half Acres, Wheldale, Townville, Whitwood Mere, New Fryston. England national curriculum.',
    localProject: 'OpenTopoData eudem25m (Copernicus EU-DEM v1.1): 61 x 61 points ~50 m apart centred on 53.72580 N, 1.35354 W; 3,721 heights 5.56-74.68 m. Nine hidden 19 x 19 blocks (361 heights each) refilled from the ring by the discrete Laplace equation; exact reference by scipy sparse solve. Sweeps to within 1 cm of exact: Jacobi 219-356, Gauss-Seidel 111-214, SOR omega 1.729 24-40 (means 300.9, 163.4, 33.3). Update-size stop (<1 cm): Jacobi 45-135 sweeps, 0.27-0.43 m off; Gauss-Seidel 33-84, 0.16-0.30 m off; SOR 23-41, <=0.01 m off. RMS error vs real heights: relaxation 1.25-4.74 m, ring-average fill 1.96-16.71 m; relaxation closer in 9 of 9; worst single point 16.3 m; real interior above ring maximum in 2 of 9 blocks (maximum principle). Lesson family: relaxation method (Jacobi, Gauss-Seidel, successive over-relaxation), stopping rules.',
    requiredMentions: [
      '45,355',
      '32,975',
      'Airedale',
      'Whitwood',
      'Cutsyke',
      'Half Acres',
      'Whitwood Mere',
      'New Fryston',
      'Gauss-Seidel',
      'successive over-relaxation',
      '1.729'
    ],
    sources: [
      { claim: 'OpenTopoData API, EU-DEM 25 m dataset (Copernicus EU-DEM v1.1).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest postcodes for the City of Wakefield district.', url: 'https://api.postcodes.io/places?q=Cutsyke' },
      { claim: 'Young, D. (1954), Iterative methods for solving partial difference equations of elliptic type, Transactions of the American Mathematical Society 76, 92 to 111: successive over-relaxation and its best factor.', url: 'https://doi.org/10.1090/S0002-9947-1954-0059635-7' }
    ],
    rejectedClaims: [
      'What lies on the higher ground in the grid (spoil heaps, buildings or anything else): not identified; not claimed.',
      'That relaxation is a good way to repair real elevation data: not claimed; it cannot recreate hidden hills.',
      'Glasshoughton, Fryston and Smawthorne as named suburbs: not found in postcodes.io; not listed.',
      'Sum of the listed built-up areas: not added.',
      'Named schools and term dates: none named.',
      'Sterling prices: none.'
    ]
  }
};
