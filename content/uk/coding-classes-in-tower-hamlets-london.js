'use strict';
// Tower Hamlets (cg- London borough page, UK cluster Phase 5, row 185). Named sources only.
// Spine: a tower of a different kind. Historic England NHLE points inside the ONS December 2024 BFC boundary of Tower
// Hamlets (E09000030) include Grade I 1260258 THE WHITE TOWER, 1242062 Tower of London (Inner curtain wall with mural
// towers ...), 1242026 OUTER CURTAIN WALL WITH CASEMENTS AND MURAL TOWERS, 1065766 THE MIDDLE TOWER, 1357540 CHAPEL OF
// ST PETER AD VINCULA. The Tower of Hanoi puzzle: n discs need 2^n - 1 moves; recursive solution checked for n = 1..22;
// Python 3.13 on our computer, 25 September 2026: 20 discs 1,048,575 moves in 0.26 s; 22 discs 4,194,303 in 1.04 s
// (about 4.0 million moves a second). 64 discs: 18,446,744,073,709,551,615 moves; about 145,000 years at our rate and
// about 585 billion years at one move a second (extrapolations). For 10 discs (1,023 moves): the disc moved at step k is
// one more than the number of trailing zeros of k (ruler sequence), and equals the bit that changes between binary
// reflected Gray codes k-1 and k; both checked for every move. Disc 1 moves 512 times, disc 10 once.
// Lesson family: recursion (Tower of Hanoi), exponential growth and the Gray code link; screened 25 September 2026
// (Tower of Hanoi 0, Gray code 0).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'TOWER HAMLETS', blurb: 'The White Tower, Canary Wharf and a project on a puzzle tower that would take billions of years to finish.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-tower-hamlets-london',
  code: 'twh',
  accent: '#632127',
  accentRationale: 'Tower Hamlets: an oxblood from the solver (9.59:1 on every paper tint), a fortress-stone red darker than the Enfield brick',
  pageType: 'governorate',
  place: {
    name: 'Tower Hamlets',
    eyebrow: 'London Borough of Tower Hamlets',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Tower Hamlets, London',
  title: 'Coding Classes in Tower Hamlets, Canary Wharf | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Tower Hamlets: Canary Wharf, Whitechapel, Bow, Bethnal Green, Poplar, Limehouse and Stepney. Ages 6 to 67.',
  ogDescription: 'Tower Hamlets coding and Python classes, with a recursion project on the Tower of Hanoi, a puzzle whose 64-disc version would outlast the stars, and its link to binary Gray codes.',
  twitterDescription: 'Tower Hamlets coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Tower Hamlets Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Tower Hamlets, taught live in English.'
  },

  h1: 'Coding classes in Tower Hamlets',
  capsuleQ: 'What are the best coding classes in Tower Hamlets?',
  capsule: 'Tower Hamlets is the east London borough of Canary Wharf, Whitechapel, Bow, Bethnal Green, Poplar, Limehouse, Stepney and the Isle of Dogs, with 310,306 residents at the 2021 Census and the White Tower of the Tower of London inside its boundary. The coding classes that stick teach one idea so deeply a learner can reuse it everywhere, and this page does it with recursion: the Tower of Hanoi, a puzzle solved by a function that calls itself, whose 64-disc version would need more moves than there are seconds in hundreds of billions of years. Everything is taught live on video by our teachers in India, to anyone from six to sixty-seven, alone or alongside five to nine classmates at the same stage. Lesson one is free; a class seat then costs USD 100 each month and private tuition USD 150 each month.',
  lead: 'The Tower of London\'s White Tower, its curtain walls and its chapel are all Grade I entries on Historic England\'s list, and all stand inside Tower Hamlets. Our learners borrow the name for a very different tower. The Tower of Hanoi is a stack of discs on one of three pegs, largest at the bottom. Move the whole stack to another peg, one disc at a time, never putting a bigger disc on a smaller one. With three discs it takes seven moves; with ten, 1,023. The solution is the classic example of recursion: to move ten discs, move nine out of the way, move the biggest, then move the nine back on top. Learners write that in a few lines, count the moves, time their computer, and discover a hidden pattern shared with the binary counting used in digital sensors.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Tower Hamlets.',

  picks: {
    eyebrow: 'Course picks for Tower Hamlets',
    h2: 'First courses in Tower Hamlets',
    intro: 'Imagine a Year 1 child in Bow who stacks everything into towers, a Year 8 pupil in Whitechapel who enjoys logic puzzles, a Year 12 student in Poplar planning to study computer science, and an office worker at Canary Wharf who has heard of recursion but never quite trusted it. All four can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch Tower of Hanoi with three discs, played by hand and then by a script that follows a rule.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python: count the moves for 1, 2, 3 and 4 discs and spot the doubling pattern.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the recursive solver, timing and Gray code link on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who want to understand exponential growth and recursion through one memorable puzzle.' }
    ]
  },

  sections: [
    {
      id: 'towerhamlets', tint: '', eyebrow: 'Tower Hamlets in figures',
      h2: '310,306 residents and 20 Grade I entries',
      intro: 'Numbers are published by the named organisation, or counted by us from its open data where we say so.',
      body: [
        { kind: 'table', caption: 'Four figures for Tower Hamlets', head: ['Subject', 'Figure', 'From'], rows: [
          ['Usual residents, 2021 Census', '310,306', 'Office for National Statistics, TS001'],
          ['Heritage List entries counted inside the borough', '906: 20 Grade I, 40 Grade II*, 846 Grade II', 'Historic England data, 25 September 2026'],
          ['Lines at Whitechapel', 'District, Hammersmith & City, Elizabeth line and Windrush line', 'TfL open data, checked 25 September 2026'],
          ['Lines at Tower Hill', 'Circle and District', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Tower', p: 'The White Tower, the inner and outer curtain walls with their mural towers, the Middle Tower and the Chapel of St Peter ad Vincula are all Grade I.' },
          { h3: 'East End churches', p: 'Christ Church, the churches of St George in the East, St Anne and St Dunstan and All Saints, and St John on Bethnal Green are among the other Grade I entries.' },
          { h3: 'Docks and almshouses', p: 'Warehouses, quay walls and Blackwall Basin from the old docks are Grade I, as are the Trinity Green almshouses and chapel.' }
        ] },
        { kind: 'p', text: 'Tower Hamlets calls its libraries Idea Stores; the service\'s website names Idea Stores at Bow, Canary Wharf, Chrisp Street, Watney Market and Whitechapel.' }
      ]
    },
    {
      id: 'puzzle', tint: 'tint', eyebrow: 'The puzzle',
      h2: 'Three pegs, a stack of discs, one rule',
      intro: 'The moves needed double, plus one, with every disc you add. Learners find the pattern by counting small cases before any theory.',
      body: [
        { kind: 'table', caption: 'Moves needed for each number of discs, checked by our program', head: ['Discs', 'Moves', 'As a formula'], rows: [
          ['1', '1', '2 - 1'],
          ['3', '7', '8 - 1'],
          ['10', '1,023', '1,024 - 1'],
          ['20', '1,048,575', 'about a million'],
          ['64', '18,446,744,073,709,551,615', '2 to the power 64, minus 1']
        ] },
        { kind: 'p', text: 'Each extra disc doubles the work and adds one, because you must move everything above it twice. Twenty discs need just over a million moves. Sixty-four need more than eighteen quintillion. The pattern is exact, so learners can check the formula against every run of their program, and it is the clearest possible picture of exponential growth: small at first, then impossible.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Recursion, a stopwatch, and a hidden binary pattern',
      intro: 'Learners write the recursive solver, time it, then find a second, surprising way to generate exactly the same moves.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. A function that calls itself', p: 'To move n discs from A to C: move n minus 1 discs to B, move the biggest to C, move the n minus 1 from B to C. Zero discs means do nothing. That is the whole program.' },
          { h3: '2. Time it', p: 'On our computer Python produced 4,194,303 moves for 22 discs in about one second: roughly four million moves a second.' },
          { h3: '3. Find the pattern', p: 'List which disc moves at each step: 1, 2, 1, 3, 1, 2, 1, 4. It is the same sequence as the bit that flips in a binary reflected Gray code.' }
        ] },
        { kind: 'table', caption: 'How long a 64-disc tower would take, run 25 September 2026', head: ['Speed', 'Time for 2 to the 64, minus 1, moves'], rows: [
          ['One move a second, by hand', 'about 585 billion years'],
          ['Our computer, about 4 million moves a second', 'about 145,000 years']
        ] },
        { kind: 'p', text: 'Both times are extrapolations, calculated rather than run, and learners are asked to show the arithmetic. The Gray code discovery is the surprise. In a Gray code, counting from one number to the next changes exactly one binary digit. For all 1,023 moves of a ten-disc tower, the disc moved at each step is exactly the digit that changes in the Gray code, and also one more than the number of zeros at the end of the step number written in binary. Disc 1 moves every other time, 512 times in all; the largest disc moves once.' },
        { kind: 'callout', h3: 'Why this beats asking an AI to solve it', p: 'An AI assistant can print a Tower of Hanoi solver instantly. What it cannot give a learner is the moment recursion clicks: trusting a function to solve the smaller problem before it has finished solving the bigger one. Learners who reach that moment, then time their code and find the Gray code hiding in the output, understand recursion, exponential growth and binary at once, and can reason about why some problems are hopeless even for the fastest machines.' }
      ]
    },
    {
      id: 'gray', tint: 'tint', eyebrow: 'Why Gray codes matter',
      h2: 'Counting where only one digit changes',
      intro: 'Gray codes are not just a puzzle curiosity. They solve a real engineering problem.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ordinary binary', p: 'Going from 3 (011) to 4 (100) flips three digits at once. If a sensor reads them a split second apart, it can briefly report nonsense.' },
          { h3: 'Gray code', p: 'In a Gray code, neighbouring numbers differ in one digit only: 000, 001, 011, 010, 110, 111, 101, 100.' },
          { h3: 'One formula', p: 'The Gray code of k is k combined bit by bit with k shifted right once. Learners code it in a single line and check it against the Hanoi moves.' }
        ] },
        { kind: 'p', text: 'GCSE computer science students meet binary and can follow the doubling pattern; A-level students study recursion formally and can prove the move count by induction. The list entries are Historic England\'s; every count, timing and Gray code check on this page was produced by our own program on 25 September 2026, and other computers will give different speeds. Historic England, Tower Hamlets Council, the Idea Store service, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Whitechapel\'s four lines, and a quiet desk',
      intro: 'Tower Hamlets is threaded with Underground, Elizabeth line, DLR and Overground routes. A lesson with us needs none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Whitechapel', p: 'TfL\'s open data lists the District, Hammersmith & City, Elizabeth and Windrush lines at Whitechapel.' },
          { h3: 'Isle of Dogs to Bow', p: 'A learner at the southern tip of the Isle of Dogs and one in Bow can be in the same class from home.' },
          { h3: 'One step at a time', p: 'Like the discs, learners move up one stage at a time, in groups of five to ten at the same level.' }
        ] },
        { kind: 'spec', title: 'Tower Hamlets in London', p: 'Tower Hamlets is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers them all and the City, linking each page when it is published, including <a class="cg-inline-link" href="/coding-classes-in-hackney-london">Hackney</a> to the north and <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a> across the River Lea.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From stacking discs to recursive proof',
    intro: 'The free lesson shows us a learner\'s real starting point, whatever their year group.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Play and rules', p: 'Children play the three-disc puzzle in Scratch and write down the moves as a rule.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Patterns and doubling', p: 'Python that counts moves for growing towers and finds the doubling-plus-one pattern.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Recursion and binary', p: 'Recursive functions, timing, induction and Gray codes, core A-level computer science and olympiad material.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Thinking in growth', p: 'Adults gain a feel for exponential growth and for why some tasks are out of reach even for computers.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can write recursive code. Why should a Tower Hamlets teenager learn to think recursively?',
    intro: 'Because recursion is a way of thinking, and thinking is what you bring to the tools.',
    p1: 'AI assistants write recursive functions readily. Understanding them is another matter: why the function can trust itself, where it stops, and how fast its work grows. A learner who has written the Tower of Hanoi solver, watched a 22-disc run take a second and calculated that 64 discs would take 145,000 years on the same machine, understands exponential growth in a way that protects them from impossible plans, whether a human or an AI proposes them.',
    p2: 'Recursion appears in file systems, search, parsing and many AI methods. Learning it through a physical puzzle makes it stick. Code generators will keep getting quicker, and the people who can judge the size of a problem before starting will stay in demand.',
    closer: 'Tower Hamlets has stood guard over the Thames for nearly a thousand years. A learner here who can reason about a tower of discs that would outlast the stars has a lasting skill of their own.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Canary Wharf to Bethnal Green, lessons live',
    intro: 'Across Tower Hamlets, the class starts as soon as the video connects.',
    cells: [
      { h3: 'From any room', p: 'A laptop or desktop with headphones and a steady internet connection is all the equipment needed.' },
      { h3: 'Stages used in England', p: 'Progress is described in English Key Stages, from the first years of school to sixth form, with GCSE and A level named where they apply. We teach in English.' },
      { h3: 'A real first lesson', p: 'The free lesson is actual teaching and ends with a recommended level and course. No payment details are requested.' },
      { h3: 'Classes of five to ten', p: 'Each class brings together learners at one stage from across the UK and further away, which keeps a convenient evening time available.' },
      { h3: 'Two evenings a week', p: 'The usual rhythm is two evening lessons a week, with breaks for holidays and exams agreed in advance.' },
      { h3: 'UK clock times', p: 'Our teachers work from India; the times you receive are already in UK time.' }
    ],
    spec: { title: 'A dense borough, a matched class', p: 'More than 310,000 people live in Tower Hamlets, but a good class still needs five learners at the same stage free together, so our groups draw from far beyond it.' }
  },

  fees: {
    h2: 'Fees for Tower Hamlets families',
    intro: 'A free first lesson, then one monthly fee, the same in Stepney as on the Isle of Dogs.',
    first: 'A full first lesson with a teacher, free, ending with a recommended level, course and weekly time.',
    group: 'Close to eight live lessons each month, in a class of five to ten at one stage.',
    private: 'Close to eight live lessons each month, one to one.',
    closer: 'Tower Hamlets families pay in US dollars, as do all families outside India, and there are no sterling prices on the site. Payment starts only after the free lesson, once you have chosen a course and a regular time. The pricing page describes pausing, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Google reviews from families we teach',

  book: {
    h2: 'Ask for a free lesson',
    intro: 'Send us a year group or an age and a favourite hobby, and we will plan around them. Lesson one might be a Scratch three-disc tower, a Python move counter, or the recursion project on this page.',
    success: 'Thank you. Your Tower Hamlets lesson request is with our team.'
  },

  faq: {
    h2: 'Tower Hamlets questions',
    intro: 'About the borough, the Tower of Hanoi project and our lessons.',
    items: [
      { q: 'How many people live in Tower Hamlets?', a: 'The 2021 Census counted 310,306 usual residents in the London Borough of Tower Hamlets, in ONS table TS001.' },
      { q: 'Is the Tower of London in Tower Hamlets?', a: 'Yes. Historic England\'s list entries for the White Tower, the inner and outer curtain walls, the Middle Tower and the Chapel of St Peter ad Vincula, all Grade I, fall inside the borough\'s boundary.' },
      { q: 'How many moves does the Tower of Hanoi need?', a: 'For n discs, 2 to the power n, minus 1. Three discs need 7 moves, ten need 1,023 and sixty-four need 18,446,744,073,709,551,615.' },
      { q: 'What is recursion?', a: 'Solving a problem by using a smaller version of the same problem. To move n discs, the program moves n minus 1 discs, moves the largest, then moves the n minus 1 again, stopping when there are no discs left.' },
      { q: 'What is a Gray code?', a: 'A way of counting in binary where each number differs from the next in only one digit. The digit that changes at each step matches exactly which disc moves in the Tower of Hanoi solution.' },
      { q: 'When would lessons be?', a: 'The free session tells the teacher where the learner stands; we then propose a class at that stage with a seat, meeting on a fixed evening that we always express in UK time.' },
      { q: 'What does a learner need?', a: 'A computer with sound and a reliable connection. The recursion project needs only Python.' },
      { q: 'Is there a Modern Age Coders centre in Tower Hamlets?', a: 'No. There is no Tower Hamlets centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Tower Hamlets cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'On from Tower Hamlets',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City, adding each page as it goes live, from <a class="cg-inline-link" href="/coding-classes-in-southwark-london">Southwark</a> across Tower Bridge to <a class="cg-inline-link" href="/coding-classes-in-barking-and-dagenham-london">Barking and Dagenham</a> further east. Search trees full of recursion reappear in our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">London AI lessons</a>; for how English school years line up with Scottish, Welsh and Northern Irish ones, see the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tower Hamlets and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-hackney-london', label: 'Hackney' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-twh .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-twh .cg-hero h1 { font-weight: 800; letter-spacing: -0.021em; line-height: 1.02; }
.cg-root.cg-twh .cg-capsule { border-left: 6px double var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-twh .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-twh .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-twh .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.8rem); }
.cg-root.cg-twh .cg-table caption { font-weight: 700; letter-spacing: 0.016em; }
.cg-root.cg-twh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-twh .cg-table td:nth-child(2) { font-weight: 650; }
.cg-root.cg-twh .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-twh .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Tower Hamlets. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000030): 310,306 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 906 (I 20, II* 40, II 846); Grade I include 1260258 THE WHITE TOWER, 1242062 Tower of London (Inner curtain wall with mural towers), 1242026 OUTER CURTAIN WALL WITH CASEMENTS AND MURAL TOWERS, 1065766 THE MIDDLE TOWER, 1357540 CHAPEL OF ST PETER AD VINCULA, 1357795 CHRIST CHURCH (INCLUDING GATEPIERS ...), 1357779 CHURCH OF ST GEORGE IN THE EAST, 1357808 CHURCH OF ST ANNE, 1065065 PARISH CHURCH OF ST DUNSTAN AND ALL SAINTS, 1065245 CHURCH OF ST JOHN ON BETHNAL GREEN, 1241071 TRINITY GREEN (ALMSHOUSES AND CHAPEL), 1242449 BLACKWALL BASIN, dock warehouses and quay walls. ideastore.co.uk, 25 September 2026: Idea Store Bow, Canary Wharf, Chrisp Street, Watney Market, Whitechapel. TfL HUBZWL (Whitechapel): District, Elizabeth line, Hammersmith & City, Windrush; 940GZZLUTWH (Tower Hill): Circle, District.',
    localProject: 'Recursive Tower of Hanoi in Python 3.13 (our AMD64 machine, 25 September 2026): move count equals 2^n - 1 for n = 1, 2, 3, 4, 5, 10, 16, 20, 22; n 16: 65,535 moves 0.0178 s; n 20: 1,048,575 moves 0.261 s (4.02 M/s); n 22: 4,194,303 moves 1.04 s (4.03 M/s). 2^64 - 1 = 18,446,744,073,709,551,615; at 4.03 M/s: 1.449e5 years; at 1/s: 5.845e11 years (extrapolated). n = 10: disc moved at step k equals bit_length(k & -k) for all 1,023 k (ruler sequence); equals bit_length(g(k) xor g(k-1)) with g(k) = k xor (k >> 1) (binary reflected Gray code) for all k; first 15 discs 1,2,1,3,1,2,1,4,1,2,1,3,1,2,1; moves per disc 512, 256, ..., 1. Lesson family: recursion, exponential growth, Gray code, screened 25 September 2026.',
    requiredMentions: [
      '310,306',
      'Tower of Hanoi',
      'Gray code',
      'White Tower',
      'St Peter ad Vincula',
      'St George in the East',
      'Trinity Green',
      'Idea Store',
      'Chrisp Street'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Tower Hamlets E09000030: 310,306 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000030&measures=20100' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Tower Hamlets on 25 September 2026: 906 (20 I, 40 II*, 846 II), including the White Tower.', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Idea Store service website: Idea Stores at Bow, Canary Wharf, Chrisp Street, Watney Market, Whitechapel.', url: 'https://www.ideastore.co.uk/' },
      { claim: 'TfL Unified API, StopPoint HUBZWL (Whitechapel).', url: 'https://api.tfl.gov.uk/StopPoint/HUBZWL' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUTWH (Tower Hill): Circle, District.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUTWH' }
    ],
    rejectedClaims: [
      'The legend of monks moving 64 golden discs: not from a primary source; not told.',
      'Tower of London as a World Heritage Site: not read at a primary source for this build; not stated.',
      'Uses of Gray codes in specific commercial sensors: described only in general terms as an engineering motive.',
      'Tower Hamlets schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
