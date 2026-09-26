'use strict';
// Greater Manchester (cg- county index, UK cluster Phase 7, row 221). Ten metropolitan boroughs. Spine: ask a better
// question. Science and Industry Museum, "Baby and modern computing" (read raw 26 September 2026): "On 21 June 1948,
// Baby ran the first of its programs, which was written by Kilburn and consisted of 17 instructions, that would find
// the highest factor of a given number. By August, Baby was successfully running the program with numbers as high
// as 2 to the power 18. To get to the correct answer, Baby ran through 3.5 million calculations in 53 minutes. The
// answer is 131,072"; Baby 17 feet long, 7.4 feet tall, almost a ton; built to test the Williams-Kilburn tube as a
// memory. Our run (26 September 2026): 3.5 million in 53 minutes = about 1,100 a second. Counting candidate
// divisors tested: N = 262,144 (2^18): downward search from N-1 tests 131,072 candidates before 131,072 divides;
// upward search for the smallest factor tests 1 (2), answer N/2. N = 262,143: downward 174,762 tests (answer
// 87,381), upward 2. N = 262,139 (the largest prime below 2^18): downward 262,138 tests to reach 1; upward stops at
// the square root after 510 tests. Lesson family: reformulating a search (highest factor = N / smallest factor),
// early exit at the square root, and worst-case inputs; distinct from the space-time trade-off (Cambridgeshire) and
// Stirling's formula (Stirling). The Manchester city page uses the Baby only as place history (lesson: lag
// correlation on the Medlock).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (2,867,762, our sum of ten boroughs); ONS
// built-up areas with our OA check (Hadfield and Appley Bridge excluded as mostly outside; Wythenshawe 97,660 with
// about 6,700 outside; Manchester BUA 470,405 spans Manchester, Stockport and Trafford). No county-wide term dates
// exist: each of the ten borough councils sets its own, none read for this build.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'GREATER MANCHESTER', blurb: 'Ten boroughs, seventy-three towns, and the first program ever stored in a computer, made faster by asking a better question.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-greater-manchester',
  code: 'gmc',
  accent: '#8A4D3E',
  accentRationale: 'Greater Manchester: a mill-brick terracotta from the solver (5.27:1 on the darkest paper tint), redder and lighter than the other UK county browns',
  pageType: 'governorate',
  place: {
    name: 'Greater Manchester',
    eyebrow: 'Metropolitan county of Greater Manchester',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'North West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Manchester', href: '/best-coding-class-in-manchester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Greater Manchester',
  title: 'Coding Classes in Greater Manchester | Online, Ages 6 to 67',
  description: 'Live online coding, Python, web development and maths classes across Greater Manchester, from Manchester and Salford to Bolton, Wigan, Stockport and Oldham.',
  ogDescription: 'Coding classes for all ten Greater Manchester boroughs, with a project on the Baby\'s first program in 1948: reproduce its answer, then find it 131,072 times faster.',
  twitterDescription: 'Greater Manchester coding, Python and web classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'full-stack-web-development-teens-masterclass',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Web Development Classes for Greater Manchester',
    description: 'Ability-placed online coding, Python, web development, AI and mathematics for children, teenagers and adults across the ten Greater Manchester boroughs, taught live in English.'
  },

  h1: 'Coding classes in Greater Manchester',
  capsuleQ: 'What are the best coding classes in Greater Manchester?',
  capsule: 'Greater Manchester is ten metropolitan boroughs and 2,867,762 people at the 2021 Census, from Wigan in the west to Tameside in the east. Manchester and Salford sit at the centre, with Bolton, Stockport, Rochdale, Oldham, Wigan and Bury as big towns in their own right and dozens of smaller places between. However large the county, our lessons reach a Farnworth kitchen exactly as they reach a flat in Ancoats: taught live on video by a teacher in India, with learners grouped by current skill, ages 6 to 67, five to ten in a group or one to one. The subjects are programming, Python, web development, AI and maths. The county project starts with the Baby, the first computer to run a stored program, here in 1948. We charge nothing for the first lesson; after that it is USD 100 monthly in a group or USD 150 for a private teacher.',
  lead: 'On 21 June 1948, in Manchester, a machine called the Baby ran a 17-instruction program that searched for the highest factor of a number. By August it was doing so for numbers as large as two to the power eighteen, working through 3.5 million calculations in 53 minutes to arrive at 131,072. It was a brilliant test of a new kind of memory, and it is also a perfect first puzzle for a modern learner, because the same answer can be found almost instantly by asking the question a different way. This page\'s project writes both versions, counts how many numbers each has to try, and then hunts for the inputs that make each version work hardest.',
  wa: 'Hello Modern Age Coders, please could I book a free lesson for a learner in Greater Manchester?',

  picks: {
    eyebrow: 'Courses for Greater Manchester',
    h2: 'Four first courses for Greater Manchester learners',
    intro: 'A seven-year-old in Heywood making animations, a Year 7 in Chadderton who enjoys times tables more than most, a Year 11 in Sale who wants to build real websites, and an office worker in Leigh ready for a career change into tech. Each begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch animations and games, the place where children first give a computer a list of instructions.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, factors and primes included, with fractions, algebra and probability as Python projects.' },
      { course: 'full-stack-web-development-teens-masterclass', band: 'Ages 13 to 18', note: 'HTML, CSS, JavaScript, React, Node.js and MongoDB for teenagers, finishing with a deployed capstone.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'Adults', note: 'A full stack route for career switchers, from HTML to React, Node.js, SQL, Docker and CI/CD.' }
    ]
  },

  sections: [
    {
      id: 'greater-manchester', tint: '', eyebrow: 'The county in numbers',
      h2: 'Ten boroughs, 2,867,762 people and a city smaller than its borough',
      intro: 'Borough totals are 2021 Census figures on Nomis. Town sizes are ONS built-up areas, which we checked against our own count of census output areas in the county.',
      body: [
        { kind: 'table', caption: 'The ten Greater Manchester boroughs, usual residents at Census 2021, largest first', head: ['Borough', 'Usual residents', 'Main towns'], rows: [
          ['Manchester', '551,938', 'Manchester, Wythenshawe'],
          ['Wigan', '329,330', 'Wigan, Leigh, Golborne, Hindley, Atherton in part'],
          ['Bolton', '295,963', 'Bolton, Farnworth, Westhoughton, Horwich'],
          ['Stockport', '294,773', 'Stockport, Cheadle Hulme, Reddish, Hazel Grove, Bramhall'],
          ['Salford', '269,923', 'Salford, Eccles, Swinton, Walkden, Irlam'],
          ['Oldham', '242,088', 'Oldham, Chadderton, Royton, Shaw, Failsworth'],
          ['Trafford', '235,052', 'Sale, Altrincham, Urmston, Stretford'],
          ['Tameside', '231,071', 'Ashton-under-Lyne, Hyde, Denton, Stalybridge, Droylsden'],
          ['Rochdale', '223,773', 'Rochdale, Middleton, Heywood, Littleborough'],
          ['Bury', '193,851', 'Bury, Prestwich, Radcliffe, Whitefield, Ramsbottom']
        ] },
        { kind: 'p', text: 'Here is a Greater Manchester oddity. The ONS Manchester built-up area had 470,405 residents, well below the 551,938 living in Manchester borough, even though the built-up area also reaches into Stockport and Trafford. The reason is Wythenshawe, which the ONS counts as a separate built-up area of 97,660. So the answer to "how big is Manchester?" depends on whether you mean the council, the continuous city, or the city plus Wythenshawe, and a careful program asks which before it prints a number.' },
        { kind: 'table', caption: 'The forty largest Greater Manchester towns by ONS built-up area, Census 2021', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Manchester', '470,405', 'Radcliffe', '31,115'],
          ['Bolton', '184,090', 'Heywood', '29,725'],
          ['Stockport', '117,935', 'Farnworth', '28,760'],
          ['Rochdale', '111,255', 'Stretford', '28,015'],
          ['Oldham', '110,720', 'Atherton', '27,575'],
          ['Salford', '108,410', 'Stalybridge', '26,830'],
          ['Wythenshawe', '97,660', 'Ashton-in-Makerfield', '26,375'],
          ['Wigan', '81,580', 'Little Hulton', '25,825'],
          ['Bury', '81,095', 'Golborne', '25,555'],
          ['Sale', '62,550', 'Cheadle Hulme', '24,785'],
          ['Altrincham', '49,680', 'Hindley', '24,490'],
          ['Ashton-under-Lyne', '48,600', 'Droylsden', '23,915'],
          ['Middleton', '46,630', 'Orrell', '23,410'],
          ['Leigh', '45,495', 'Royton', '22,990'],
          ['Urmston', '41,740', 'Swinton', '22,885'],
          ['Eccles', '41,125', 'Reddish', '22,200'],
          ['Chadderton', '37,610', 'Whitefield', '22,185'],
          ['Denton', '35,995', 'Westhoughton', '21,960'],
          ['Hyde', '35,895', 'Old Trafford', '21,445'],
          ['Prestwich', '31,495', 'Dukinfield', '21,155']
        ] },
        { kind: 'p', text: 'Thirty-three more built-up areas in the county have between five and twenty-one thousand residents, from Horwich, Hazel Grove and Failsworth down through Bramhall, Ramsbottom, Bredbury and Woodley, Marple, Standish, Platt Bridge and Abram, Partington and Blackrod. Three rows cross the county line: Wythenshawe has about 6,700 residents outside Greater Manchester, Ashton-in-Makerfield about 4,600 and Orrell about 6,900, so for those we print the ONS total for the whole place. Hadfield and Appley Bridge are mostly in neighbouring counties and are left out.' },
        { kind: 'callout', h3: 'Ten boroughs, ten calendars', p: 'There is no single Greater Manchester school calendar: each of the ten borough councils sets term dates for its own community schools, and academies can set theirs. We did not read any of them for this page, so we print none, and every family agrees lesson breaks with us around the dates their school gives. Trafford\'s selective schools have <a class="cg-inline-link" href="/11-plus-maths-tuition-trafford">their own maths page</a>; nothing here is school advice.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Greater Manchester project',
      h2: 'The Baby\'s first question, and a better one',
      intro: 'Reproduce the answer the Science and Industry Museum publishes, then count how much work two different questions need to reach it.',
      body: [
        { kind: 'p', text: 'The museum tells us what the Baby\'s first program did: find the highest factor of a number, and by August 1948 it could do so for two to the power eighteen, which is 262,144. The obvious method is to start just below the number and count down, testing each candidate until one divides exactly. The learner writes that in a few lines of Python and gets 131,072, the museum\'s answer. Then they add a counter, and it reports that the search tested 131,072 candidates before it stopped.' },
        { kind: 'p', text: 'Now the better question. The highest factor of a number is the number divided by its smallest factor, other than 1. So instead of counting down from the top, count up from 2. For 262,144 the very first test succeeds, because the number is even, and 262,144 divided by 2 is 131,072. Same answer, one test instead of 131,072. Nothing about the computer changed. The only thing that changed was the question.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: candidates tested by each method, near two to the power eighteen', head: ['Number', 'Highest factor', 'Counting down from the top', 'Counting up for the smallest factor'], rows: [
          ['262,144, which is 2 to the power 18', '131,072', '131,072 tests', '1 test'],
          ['262,143', '87,381', '174,762 tests', '2 tests'],
          ['262,139, the largest prime below 2 to the power 18', '1', '262,138 tests', '510 tests']
        ] },
        { kind: 'p', text: 'The last row shows why good programmers always look for the worst case. For a prime number, counting down never finds a factor until it reaches 1, testing 262,138 candidates. Counting up can stop much earlier: if no number up to the square root divides it, nothing above the square root can either, so it gives up after 510 tests. The clever method is fast on easy inputs and still fast on the hardest ones, which is the property that matters when you do not choose the input yourself.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Find the factors of numbers up to 100 by hand, then write a loop that lists them and spot why the highest is always the number divided by the lowest.' },
          { h3: 'Ages 13 to 16', p: 'Code both searches with counters, reproduce 131,072 for two to the power eighteen, and try ten numbers of your own choosing.' },
          { h3: 'Ages 16 and up', p: 'Hunt for worst-case inputs for each method, add the square-root stop, and explain in writing why it is safe to stop there.' }
        ] },
        { kind: 'callout', h3: 'What we are not claiming', p: 'The 17 instructions, the 3.5 million calculations, the 53 minutes and the answer are the museum\'s figures. Dividing one by the other gives about 1,100 calculations a second, our arithmetic. Our test counts measure our Python programs, not the steps the Baby actually took, which the museum does not describe in detail, so we do not try to reproduce its 3.5 million.' }
      ]
    },
    {
      id: 'baby', tint: 'deep', eyebrow: 'Why Manchester',
      h2: 'A machine built to test a memory, and the program that tested it',
      intro: 'The county link, in the words of the Science and Industry Museum.',
      body: [
        { kind: 'table', caption: 'The Baby, as the Science and Industry Museum describes it', head: ['Fact', 'What the museum says'], rows: [
          ['What it was', 'The Small Scale Experimental Machine, nicknamed Baby, "the world\'s first stored-program computer".'],
          ['Why it was built', 'Williams and his team needed to test their idea that a cathode ray tube could be used as a memory, the Williams-Kilburn tube.'],
          ['Its size', '17 feet in length by 7.4 feet tall, weighing almost a ton.'],
          ['Its first program', 'Written by Kilburn, 17 instructions, to find the highest factor of a given number; first run on 21 June 1948.'],
          ['Its hardest run', 'Two to the power 18: 3.5 million calculations in 53 minutes, answer 131,072.']
        ] },
        { kind: 'p', text: 'The museum makes a point worth repeating to any learner: until the Baby, changing what a computer did meant rewiring it. The Baby kept its program in memory, so changing the job meant changing the program. Every Python file a Greater Manchester teenager writes today rests on that idea, first shown in their own county in 1948.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Science and Industry Museum, the University of Manchester or any Greater Manchester council, and nothing on this page suggests one. The museum\'s facts are its own; our programs, counts and any mistakes in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> and <a class="cg-inline-link" href="/best-coding-class-in-salford">Salford</a> have city pages of their own, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every county and city as it goes live.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners progress',
    h2: 'From counting on your fingers to counting a program\'s work',
    intro: 'Where to start is decided in the free lesson, by ability. School year is a useful hint, nothing more.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Instructions in order', p: 'Scratch programs that do one thing after another, and the discovery that a computer follows the list exactly.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Numbers and loops', p: 'Python loops that test numbers for factors, and the habit of counting how many times a loop runs.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Building real things', p: 'Websites and apps that respond quickly because the code behind them asks sensible questions of its data.', courses: ['full-stack-web-development-teens-masterclass', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Software as a career', p: 'Full stack development and AI for adults, with performance and worst cases treated as part of the job.', courses: ['full-stack-web-development-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and better questions',
    h2: 'An AI can write the Baby\'s program instantly. Can it tell you to ask a different question?',
    intro: 'Sometimes. Knowing when to push for it is the skill a learner builds here.',
    p1: 'Ask a chatbot to find the highest factor of a number and you will get working code. It may count down from the top, because that is the plain reading of the request, and for two to the power eighteen it will be fast enough on a modern laptop that nobody notices. Give it a large prime, or ask it to do the job a million times inside a web server, and the difference between 262,138 tests and 510 becomes the difference between a working service and a stalled one.',
    p2: 'A Greater Manchester student who has counted both searches knows to ask: is there a cheaper question that gives the same answer, and what input makes this slowest? Those two questions are how experienced developers review any code, whether a colleague or an AI wrote it, and they are exactly the questions a prompt usually leaves out.',
    closer: 'So a Greater Manchester teenager should still learn to code in 2026, in the county where the first stored program ran, to be the person who asks the better question.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The practical details',
    h2: 'Wigan to Mossley and nobody sits in traffic',
    intro: 'Crossing Greater Manchester at rush hour is slow going. Online, the lesson simply starts where you are.',
    cells: [
      { h3: 'Lessons at home', p: 'A bedroom in Hindley, a kitchen table in Romiley, a desk in Whitefield. The teacher shares a screen and the learner types.' },
      { h3: 'Our words match school\'s', p: 'Year groups, GCSE options and A levels are named as Greater Manchester schools name them, and teaching is in English.' },
      { h3: 'A free first lesson', p: 'A proper lesson of real work, then an honest recommendation. No card details are ever requested.' },
      { h3: 'Classmates at your stage', p: 'Groups of five to ten learners at the same level, gathered from many towns and countries, at a sensible hour.' },
      { h3: 'Breaks you set', p: 'Usually two lessons a week, paused for the holidays your own school keeps, which differ between boroughs and academies.' },
      { h3: 'UK time, always', p: 'India, where the teachers are, is five and a half hours ahead of UK winter time and four and a half ahead of UK summer time; lessons are booked in UK time.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'Even in a county of almost three million, a single town rarely has enough learners at one exact stage on one evening. Grouping by level lets a Littleborough learner and an Altrincham learner share the right class.' }
  },

  fees: {
    h2: 'Fees in Greater Manchester',
    intro: 'Every borough pays the same, as does every country other than India.',
    first: 'A full lesson of real work, finishing with a recommended level and course.',
    group: 'Around eight lessons a month in a group of five to ten at one level.',
    private: 'Around eight lessons a month with a teacher for one learner.',
    closer: 'Prices are set in US dollars, our rate for families outside India, and there is no pound price list. Payment starts only after the free lesson has agreed a course and weekly slot; pausing, missed lessons and switching between group and private teaching are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from real families',

  book: {
    h2: 'Book a free lesson',
    intro: 'An age or school year and one interest is enough. The first lesson might be a Scratch animation, a first Python factor finder, or the Baby\'s program and its faster twin.',
    success: 'Thank you. Your Greater Manchester request has been received.'
  },

  faq: {
    h2: 'Greater Manchester questions',
    intro: 'The county, the Baby project and how lessons run.',
    items: [
      { q: 'How many people live in Greater Manchester?', a: 'The ten Greater Manchester boroughs had 2,867,762 usual residents at the 2021 Census, from ONS figures on Nomis. Manchester was the largest at 551,938 and Bury the smallest at 193,851.' },
      { q: 'Why is the Manchester built-up area smaller than Manchester borough?', a: 'Because the ONS counts Wythenshawe, inside Manchester borough, as a separate built-up area of 97,660. The Manchester built-up area itself had 470,405 residents and reaches into Stockport and Trafford.' },
      { q: 'What is the Baby project?', a: 'Learners reproduce the Baby\'s first program, which found the highest factor of a number, then rewrite it to look for the smallest factor instead. For two to the power eighteen that cuts 131,072 tests to one, and for a large prime from 262,138 tests to 510.' },
      { q: 'What was the Manchester Baby?', a: 'The Small Scale Experimental Machine, which the Science and Industry Museum calls the world\'s first stored-program computer. Its first program ran on 21 June 1948, and by August it worked through 3.5 million calculations in 53 minutes to find 131,072.' },
      { q: 'Do you teach web development to teenagers?', a: 'Yes. The teen full stack course, for ages 13 to 18, covers HTML, CSS, JavaScript, React, Node.js and MongoDB and ends with a deployed capstone project.' },
      { q: 'Is there a classroom in Manchester or Salford?', a: 'No. Every lesson is live online, so a learner in Wigan and one in Stalybridge share a class without either travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Scratch for young children, typed Python from about ten, web development, algorithms and AI for teenagers, and full stack or AI routes for adults. The free lesson settles the starting level.' },
      { q: 'Can adults retrain as developers with you?', a: 'Our adult full stack course runs from HTML to React, Node.js, SQL, MongoDB, Docker and CI/CD. It teaches the skills; we do not promise jobs.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After it, USD 100 a month for a group place or USD 150 a month for private lessons, with no joining fee and no fixed term.' },
      { q: 'When are school holidays in Greater Manchester?', a: 'Each of the ten borough councils sets dates for its community schools, and academies may differ. We arrange lesson breaks around the dates your own school gives you.' }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'More pages from the North West and beyond',
    html: 'City pages for <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> and <a class="cg-inline-link" href="/best-coding-class-in-salford">Salford</a> each run a different project. Other county pages so far include <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a> and <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Greater Manchester and beyond',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/best-coding-class-in-salford', label: 'Salford' }
  ],

  personalityCss: `
.cg-root.cg-gmc .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 2.7vw, 2.4rem); }
.cg-root.cg-gmc .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.01; }
.cg-root.cg-gmc .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-gmc .cg-eyebrow { letter-spacing: 0.19em; font-weight: 800; text-transform: uppercase; }
.cg-root.cg-gmc .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.022em; }
.cg-root.cg-gmc .cg-table caption { font-style: italic; font-weight: 700; }
.cg-root.cg-gmc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gmc .cg-table th { letter-spacing: 0.045em; text-transform: uppercase; }
.cg-root.cg-gmc .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-gmc .cg-callout { border-left-width: 10px; border-radius: 0 5px 5px 0; }
`,

  dossier: {
    curriculumAuthority: 'Greater Manchester (ten metropolitan boroughs). ONS Census 2021 TS001 via Nomis: Manchester 551,938; Wigan 329,330; Bolton 295,963; Stockport 294,773; Salford 269,923; Oldham 242,088; Trafford 235,052; Tameside 231,071; Rochdale 223,773; Bury 193,851; total 2,867,762 (our sum). ONS Census 2021 built-up areas (published; checked with our OA sums): Manchester 470,405 (Manchester, Stockport, Trafford); Bolton 184,090; Stockport 117,935; Rochdale 111,255; Oldham 110,720; Salford 108,410; Wythenshawe 97,660 (90,936 inside); Wigan 81,580; Bury 81,095; Sale 62,550; Altrincham 49,680; Ashton-under-Lyne 48,600; Middleton 46,630; Leigh 45,495; Urmston 41,740; Eccles 41,125; Chadderton 37,610; Denton 35,995; Hyde 35,895; Prestwich 31,495; Radcliffe 31,115; Heywood 29,725; Farnworth 28,760; Stretford 28,015; Atherton 27,575; Stalybridge 26,830; Ashton-in-Makerfield 26,375 (21,741 inside); Little Hulton 25,825; Golborne 25,555; Cheadle Hulme 24,785; Hindley 24,490; Droylsden 23,915; Orrell 23,410 (16,549 inside); Royton 22,990; Swinton 22,885; Reddish 22,200; Whitefield 22,185; Westhoughton 21,960; Old Trafford 21,445; Dukinfield 21,155; and thirty-three more between 5,000 and 21,000 including Horwich 20,700, Hazel Grove 20,170, Failsworth 19,960, Bramhall 17,195, Ramsbottom 17,075, Bredbury and Woodley 17,040, Marple 12,970, Standish 12,940, Platt Bridge and Abram 10,590, Partington 7,710, Blackrod 5,340. Excluded: Hadfield (6,361 of 16,275 inside), Appley Bridge (3,363 of 5,130 inside). Science and Industry Museum, Baby and modern computing: "The Small Scale Experimental Machine, nicknamed \'Baby\', was the world\'s first stored-program computer"; Williams and his team "needed to test their idea that the tube could be used as a memory"; "17 feet in length by 7.4 feet tall, and weighed almost a ton"; "On 21 June 1948, Baby ran the first of its programs, which was written by Kilburn and consisted of 17 instructions, that would find the highest factor of a given number. By August, Baby was successfully running the program with numbers as high as 2 to the power 18. To get to the correct answer, Baby ran through 3.5 million calculations in 53 minutes. The answer is 131,072".',
    localProject: 'Reformulating a search. Highest proper factor of N by counting down from N-1 versus N divided by the smallest factor found counting up from 2 with a stop at floor(sqrt N). Candidates tested: 262,144 = 2^18, down 131,072 (answer 131,072), up 1; 262,143, down 174,762 (answer 87,381), up 2; 262,139 (largest prime below 2^18), down 262,138 (reaches 1), up 510. Rate from the museum\'s figures: 3.5 million in 53 minutes = about 1,100 a second (our arithmetic). Page states our counts are for our Python and do not reproduce the Baby\'s 3.5 million steps. AI angle: generated code follows the plain reading of the request (count down) and the cost only shows on primes or at scale. Lesson family: reformulating a search, early exit at the square root, worst-case inputs; distinct from the space-time trade-off (Cambridgeshire) and Stirling\'s formula (Stirling).',
    requiredMentions: [
      '2,867,762',
      '3.5 million calculations in 53 minutes',
      '17 instructions',
      '262,139',
      '262,138',
      '174,762',
      '470,405',
      '97,660',
      'Platt Bridge and Abram',
      'Williams-Kilburn tube'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the ten Greater Manchester boroughs, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Greater Manchester towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Science and Industry Museum: the Baby, its first program of 17 instructions on 21 June 1948, 3.5 million calculations in 53 minutes, answer 131,072.', url: 'https://www.scienceandindustrymuseum.org.uk/objects-and-stories/baby-and-modern-computing' }
    ],
    rejectedClaims: [
      'Greater Manchester school term dates: set separately by each of the ten boroughs and academies; none read for this build, none printed.',
      'How the Baby\'s program actually computed each test (for example by repeated subtraction): not described on the museum page, so our step counts are for our own Python only.',
      'Alan Turing\'s morphogenesis work in Manchester: the Royal Society page returned 403 and the university page does not describe it, so the planned pattern project was dropped.',
      'Personal details of Alan Turing\'s life: identity matters are left out of place pages.',
      'Hadfield and Appley Bridge as Greater Manchester towns: most of each built-up area lies outside the county.',
      'Named Greater Manchester schools: none is named; Trafford\'s selective system is covered on its own maths page.'
    ]
  }
};
