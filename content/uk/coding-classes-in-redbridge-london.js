'use strict';
// Redbridge (cg- London borough page, UK cluster Phase 5, row 161). Named sources only.
// Spine: where your reference points are matters as much as how accurate they are. Trilateration: locate a point from
// its distances to known stations, the principle behind satellite positioning. Stations: the 14 Central and
// Elizabeth line stops TfL lists that fall inside the ONS December 2024 BFC boundary of Redbridge (E09000026),
// converted from TfL WGS84 to National Grid with the OS Helmert transformation (a few metres). Targets: the nine open
// libraries (Vision RCL pages; South Woodford closed for about 12 months), located by postcodes.io postcode centroids
// (not building positions). Each trial adds Gaussian noise of 50 m to every true distance; 1,000 trials per case;
// seed 20260925; Gauss-Newton least squares from a linearised first guess. Results (median / 95th percentile error,
// share of trials more than 1 km off): all 14 stations 21.7-25.8 m / 46-59 m, none off; nearest four stations fine at
// eight libraries (median 40.5-76.8 m) but Hainault library, whose four nearest stations run north-south along the
// Central line, 96.0 m median and 224 of 1,000 more than 1 km off; the four Elizabeth line stations only (all within
// 56 m of one straight line over 4.2 km): 0 to 39.6% of trials more than 1 km off, the mirror image across the line.
// Also shown: started from the middle of the borough instead of the linear guess, Aldersbrook with its nearest four
// stations fails in all 1,000 trials, so a first guess matters as well as geometry.
// Lesson family: trilateration / dilution of precision / mirror ambiguity. Screened 25 September 2026
// (trilateration 0). Distinct from Helmert (St Davids; reused only as a conversion tool), A* (Worcester),
// haversine (spent), Voronoi (Bristol) and Delaunay (Carlisle).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'REDBRIDGE', blurb: 'Nine open libraries, fourteen stations and a project that finds a library from its distances to them.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-redbridge-london',
  code: 'rdb',
  accent: '#913061',
  accentRationale: 'Redbridge: a raspberry from the solver (6.09:1 on every paper tint), clear of the Ealing indigo and the west London greens and browns',
  pageType: 'governorate',
  place: {
    name: 'Redbridge',
    eyebrow: 'London Borough of Redbridge',
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
  routeLabel: 'Redbridge, London',
  title: 'Coding Classes in Redbridge, Ilford, Woodford | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Redbridge: Ilford, Woodford, Wanstead, Gants Hill, Barkingside and Hainault, ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and Python classes for Redbridge, on a page that finds a library from its distances to Tube and Elizabeth line stations, the idea behind GPS.',
  twitterDescription: 'Redbridge coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Redbridge Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Redbridge, taught live in English.'
  },

  h1: 'Coding classes in Redbridge',
  capsuleQ: 'What are the best coding classes in Redbridge?',
  capsule: 'Redbridge is the north-east London borough of Ilford, Woodford, Wanstead, Gants Hill, Barkingside and Hainault, with 310,260 residents at the 2021 Census. Its libraries, run by Vision Redbridge Culture and Leisure, include nine that are open, and the borough holds ten Central line and four Elizabeth line stations. The right class for a learner here should make them ask how much to trust an answer, and our project does that by locating each library from its distances to those stations, the same idea that lets a phone find itself. Anyone from 6 to 67 can join, taught in real time by a teacher in India, either privately or in a class of five to ten who share a level. The first lesson is free; after it, group lessons cost USD 100 a month and private ones USD 150.',
  lead: 'Tell a computer how far a place is from three or four stations and it can work out where the place is. That is trilateration, and it is how satellite positioning works. The catch is that distances are never exact, and the stations are never perfectly placed. Redbridge is a good place to see why. Its four Elizabeth line stations, Ilford, Seven Kings, Goodmayes and Chadwell Heath, sit almost in a straight line: all four within 56 metres of one line across 4.2 kilometres. Give the computer distances to those four alone, each off by a realistic 50 metres, and in up to four tries in ten it puts Aldersbrook Library more than a kilometre away, on the wrong side of the railway. Use all fourteen stations in the borough and the same library lands within about 22 metres, every single time.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Redbridge.',

  picks: {
    eyebrow: 'Course picks for Redbridge',
    h2: 'Four courses for Redbridge learners',
    intro: 'Imagine a Year 3 child in Barkingside who plays treasure-hunt games, a Year 9 pupil in Gants Hill who likes geometry, a Year 13 student in Woodford thinking about engineering, and a parent in Goodmayes who has always wondered how a phone knows where it is. Each of them begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch hide-and-seek game where the player is told only how far away the treasure is, the youngest way into trilateration.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Circles, distances and coordinates written as Python: where two circles cross, and why there are usually two answers.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, with this page\'s trilateration project on real station positions in Redbridge.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who rely on location data at work and want to know when a position can and cannot be trusted.' }
    ]
  },

  sections: [
    {
      id: 'redbridge', tint: '', eyebrow: 'Redbridge by the numbers',
      h2: '310,260 residents, fourteen stations and 139 listed buildings',
      intro: 'Each figure below is published by the organisation in the last column, or counted by us from its data.',
      body: [
        { kind: 'table', caption: 'Redbridge, counted', head: ['Item', 'Count', 'Where it comes from'], rows: [
          ['Residents at the 2021 Census', '310,260', 'ONS Census table TS001, via Nomis'],
          ['Open libraries with their own pages', '9', 'Vision Redbridge Culture and Leisure'],
          ['Central and Elizabeth line stations inside the borough', '10 Central, 4 Elizabeth line', 'TfL open data, positions checked against the ONS boundary'],
          ['National Heritage List entries inside the borough', '139: 1 Grade I, 12 Grade II*, 126 Grade II', 'Historic England list data, counted 25 September 2026'],
          ['Line at Gants Hill station', 'Central', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One Grade I', p: 'Redbridge\'s only Grade I entry on Historic England\'s list is the Church of St Mary. Among its twelve Grade II* entries are Valentines Mansion and the railings, gates and gatepiers of Valentines Park.' },
          { h3: 'A memorial and a chapel', p: 'The Grade II* list also includes Dr Barnardo\'s Memorial at Barnardo\'s, and the chapel of Ilford Hospital of St Mary and St Thomas of Canterbury.' },
          { h3: 'Fourteen stations, counted', p: 'TfL publishes a position for every stop on each line. Converting them to the National Grid and testing each against the ONS boundary leaves ten Central line and four Elizabeth line stations inside Redbridge.' }
        ] }
      ]
    },
    {
      id: 'libraries', tint: 'tint', eyebrow: 'Libraries',
      h2: 'Nine open libraries, from Wanstead to Hainault',
      intro: 'Addresses from each library\'s own page at Vision Redbridge Culture and Leisure. South Woodford Library and Gym is closed for about twelve months for essential remedial works on structural engineers\' advice, so it is left out.',
      body: [
        { kind: 'table', caption: 'Redbridge\'s open libraries', head: ['Library', 'Address'], rows: [
          ['Aldersbrook', '2a Park Road, London, E12 5HQ'],
          ['Fullwell Cross', '140 High Street, Barkingside, IG6 2EA'],
          ['Gants Hill', '490 Cranbrook Road, Gants Hill, IG2 6LA'],
          ['Goodmayes', '76 Goodmayes Lane, Ilford, IG3 9QB'],
          ['Hainault', '100 Manford Way, Ilford, IG7 4DD'],
          ['Redbridge Central', 'Clements Road, Ilford, IG1 1EA'],
          ['Seven Kings', '679 High Road, Seven Kings, IG3 8RQ'],
          ['Wanstead', 'Spratt Hall Road, Wanstead, E11 2RQ'],
          ['Woodford Green', 'Snakes Lane West, Woodford Green, IG8 0DX']
        ] },
        { kind: 'p', text: 'These nine are also the targets of the project below: learners take each library\'s postcode, look up its grid position, and then pretend they know only its distances from the stations. A library computer is a fine place to try it, and a good backup room for an online lesson with headphones.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Finding a library from its distances to the stations',
      intro: 'Learners work out each library\'s position from noisy distances to three different sets of stations, a thousand times each, and discover that where the stations are matters as much as how accurate the distances are.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Stations and targets', p: 'Fourteen station positions from TfL, converted to the National Grid, and nine library positions from their postcodes. The postcode gives the middle of a small area, not the front door, which is fine for this purpose.' },
          { h3: '2. Add realistic error', p: 'Every true distance is blurred by a random error of around 50 metres, as a measured distance would be. The program then solves for the position that agrees most closely with all the distances at once.' },
          { h3: '3. Change only the stations', p: 'Repeat a thousand times with all fourteen stations, with the four nearest to the library, and with the four Elizabeth line stations alone, then compare how often each lands close and how often it lands far away.' }
        ] },
        { kind: 'table', caption: 'Our run, 25 September 2026: 1,000 trials per library, distances blurred by 50 m', head: ['Library', 'All 14 stations: typical miss', 'Nearest 4: typical miss', 'Elizabeth line 4 only: trials over 1 km off'], rows: [
          ['Aldersbrook', '22 m', '42 m', '39.6%'],
          ['Fullwell Cross', '22 m', '53 m', '12.1%'],
          ['Gants Hill', '23 m', '63 m', '19.1%'],
          ['Goodmayes', '25 m', '41 m', '27.2%'],
          ['Hainault', '26 m', '96 m, and 22.4% over 1 km off', '11.3%'],
          ['Redbridge Central', '22 m', '41 m', '0%'],
          ['Seven Kings', '24 m', '48 m', '0.2%'],
          ['Wanstead', '25 m', '42 m', '26.7%'],
          ['Woodford Green', '25 m', '77 m', '13.5%']
        ] },
        { kind: 'p', text: 'With all fourteen stations no trial was ever more than a kilometre out, and 95 in every 100 landed within 59 metres. The Elizabeth line stations alone are the opposite case: they sit almost in a straight line, so the distances cannot tell which side of that line the library is on, and a noisy measurement can flip the answer to its mirror image across the railway. The libraries closest to the line, Redbridge Central and Seven Kings, suffer least, because their mirror image is close by. Hainault shows the same trap in another direction: its four nearest stations run north to south along the Central line, and in 224 of 1,000 trials its position flipped to the far side of them.' },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'Ask an assistant to locate a point from four distances and it will return a confident pair of coordinates. It will rarely add that with those four stations the answer might equally be a kilometre away on the other side of a railway line. A learner who has watched the answer flip knows to look at the arrangement of the reference points before trusting a position, which is the same judgement a surveyor, a drone engineer or a satellite navigation designer makes every day.' }
      ]
    },
    {
      id: 'start', tint: 'tint', eyebrow: 'A second lesson',
      h2: 'A good first guess matters too',
      intro: 'The solving method improves a guess step by step. Where it starts can decide where it ends.',
      body: [
        { kind: 'table', caption: 'The same Aldersbrook problem, two different starting guesses', head: ['Starting guess', 'Nearest 4 stations: typical miss', 'Trials over 1 km off'], rows: [
          ['A linear estimate worked out from the distances first', '42 m', '0 of 1,000'],
          ['The middle of the borough\'s stations', 'about 2.5 km', '1,000 of 1,000']
        ] },
        { kind: 'p', text: 'Nothing about the stations changed between the two rows, only the point the method started from. Beginning in the middle of the borough, it settled on a wrong answer every single time. Learners meet a general lesson here that runs through all of numerical computing: step-by-step methods find an answer near where they start, so a sensible first estimate is part of the method, not an optional extra.' },
        { kind: 'p', text: 'Modern Age Coders has no link with Vision Redbridge Culture and Leisure, Redbridge Council, Transport for London, Historic England or the Office for National Statistics, and nothing on this page says otherwise. Station positions are TfL\'s and library addresses Vision RCL\'s; the conversion, the simulations and every percentage are our own work, run on 25 September 2026 with a fixed random seed so they can be repeated exactly.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'From Wanstead to Hainault, one online class',
      intro: 'Redbridge runs from Wanstead in the south-west to Hainault in the north-east. Online, none of it is far.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Gants Hill', p: 'TfL\'s open data lists the Central line at Gants Hill, a short walk from Gants Hill Library on Cranbrook Road.' },
          { h3: 'Two lines, two directions', p: 'The Elizabeth line crosses the borough east to west through Ilford; the Central line serves the borough\'s northern stations from Woodford across to Hainault. A learner on either can join the same group from home.' },
          { h3: 'Library to library', p: 'A learner near Wanstead Library and another near Hainault Library can share one class without either leaving their desk.' }
        ] },
        { kind: 'spec', title: 'Redbridge and the rest of London', p: 'Redbridge is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City and links each as its page is published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a treasure hunt to dilution of precision',
    intro: 'In the first lesson we place each learner by what they can do already, which may run ahead of or behind their school year.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Hot and cold', p: 'Children build games that say only how far away the prize is, and learn to find it from a few clues.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Circles that cross', p: 'Python that draws circles around known points and finds where they meet, including the case with two answers.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Least squares and geometry', p: 'Trilateration, iterative solvers and simulation with real station data: a strong basis for an A level or EPQ project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Trusting a position', p: 'Adults learn why a location can be precise-looking and wrong, and what to check before relying on it.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Your phone finds itself in a second. Why should a Redbridge teenager learn how, and when it goes wrong?',
    intro: 'Because a position always arrives as a confident pair of numbers, even when it should not.',
    p1: 'Satellite positioning, indoor location, drone navigation and delivery tracking all rest on the same idea as our project: distances to known points, turned into a position. An assistant can write the solver in minutes. What it rarely volunteers is that the arrangement of the reference points can make the answer unstable, so that the same method which lands within 22 metres with fourteen well-spread stations can land a kilometre off, on the wrong side of a railway, with four stations in a row.',
    p2: 'A learner who has watched that happen carries two habits into every problem: look at the geometry of the evidence, not just its accuracy, and give an iterative method a sensible place to start. Tools will keep getting better at computing answers. Knowing when an answer is fragile is still a human skill, and it can be taught.',
    closer: 'Location will only matter more. Someone has to be able to look at a confident position, recognise a coin toss, and go and find better evidence. Learning to code is how a Redbridge child becomes that person.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Woodford to Chadwell Heath, lessons at home',
    intro: 'Every address in Redbridge is exactly as near an online lesson as every other.',
    cells: [
      { h3: 'Your own desk', p: 'Most learners take lessons at home; a library corner with headphones is a good fallback.' },
      { h3: 'School stages we all know', p: 'We talk in the terms your school uses, from Key Stage 1 through to sixth form, and all teaching happens in English.' },
      { h3: 'First lesson free', p: 'A real lesson with a teacher, ending with an honest suggestion of level and course, and no card details asked.' },
      { h3: 'Same-level groups', p: 'Five to ten learners at one stage, from Redbridge and far beyond, so a group can meet at a sensible time.' },
      { h3: 'Twice weekly, flexibly', p: 'Most groups meet twice a week, with breaks for half terms, holidays and exams agreed in advance.' },
      { h3: 'Times as you read them', p: 'Teachers are in India; the times on every booking and reminder are Redbridge times.' }
    ],
    spec: { title: 'Nine libraries, one matched group', p: 'Redbridge has nine open libraries and many schools, but a good coding group needs five learners at the same level and hour, which is why ours reach well beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Redbridge families',
    intro: 'A free first lesson, then one monthly fee, the same anywhere in the borough.',
    first: 'A complete first lesson with a teacher at no cost, ending with a suggested level, course and weekly time.',
    group: 'About eight live lessons a month, in a group of five to ten at one stage.',
    private: 'About eight live lessons a month, one teacher with your learner.',
    closer: 'Whether you live in Ilford or Woodford, invoices come in US dollars, the currency we use for all families outside India; there is no sterling price list. Nothing is taken until the free lesson is done and a course and weekly time are fixed; the pricing page sets out pauses, missed lessons and moving between group and one-to-one.'
  },

  reviewsH2: 'Six Google reviews, word for word',

  book: {
    h2: 'Tell us about your learner',
    intro: 'An age or school year and a line about what they enjoy is all we need. The first task might be a Scratch treasure hunt, a first Python program, or the station project on this page.',
    success: 'Thank you. Your Redbridge class request has reached our team.'
  },

  faq: {
    h2: 'Redbridge coding class questions',
    intro: 'About the borough, the trilateration project and our lessons.',
    items: [
      { q: 'How many people live in Redbridge?', a: 'The 2021 Census counted 310,260 usual residents in the London Borough of Redbridge, according to Office for National Statistics table TS001.' },
      { q: 'Which libraries are open in Redbridge?', a: 'Vision Redbridge Culture and Leisure lists Aldersbrook, Fullwell Cross, Gants Hill, Goodmayes, Hainault, Redbridge Central, Seven Kings and Wanstead, and Woodford Green Library and Gym has its own page. South Woodford Library and Gym is closed for about twelve months for remedial works.' },
      { q: 'What is trilateration?', a: 'Working out a position from its distances to known points. Satellite positioning uses the same idea with satellites as the known points. With three or more well-spread points and fairly accurate distances, the position is pinned down closely.' },
      { q: 'What does the Redbridge station project show?', a: 'Using all fourteen stations in the borough, each library is found within about 22 to 26 metres despite 50-metre errors in every distance. Using only the four Elizabeth line stations, which lie almost in a straight line, up to 39.6% of attempts put the library more than a kilometre away, on the wrong side of the line.' },
      { q: 'Why do stations in a straight line cause trouble?', a: 'A point and its mirror image across the line are exactly the same distance from every station on it, so the distances alone cannot tell the two apart. A small error in one distance can tip the answer to the wrong side.' },
      { q: 'When are lessons for Redbridge learners?', a: 'A regular slot is fixed after the free lesson, among groups at the learner\'s level with space. The teacher works from India, and we always give times as they read on a clock in Redbridge.' },
      { q: 'Can my child take a lesson from a Redbridge library?', a: 'It can work, given a free computer, a reliable connection and a headset. In practice home tends to be calmer, and that is where most of our learners log in.' },
      { q: 'Is there a Modern Age Coders centre in Redbridge?', a: 'No. We have no centre in Redbridge or elsewhere in the UK, because all lessons are live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Redbridge cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are groups arranged?', a: 'By level, pace and goals rather than age or where learners live, with five to ten at one stage. When no group fits, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Other boroughs and other nations',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> brings together all 32 boroughs and the City and links each as its page is published; west London already has <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a>, <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> and <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a>. For machine learning in the capital there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> covers school stages in all four nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Redbridge and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-ealing-london', label: 'Ealing' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-rdb .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-rdb .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-rdb .cg-capsule { border-right: 4px solid var(--cg-accent); padding-right: 1rem; }
.cg-root.cg-rdb .cg-eyebrow { letter-spacing: 0.15em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-rdb .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.012em; }
.cg-root.cg-rdb .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.8rem); }
.cg-root.cg-rdb .cg-table caption { font-weight: 700; }
.cg-root.cg-rdb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rdb .cg-table th { border-bottom: 3px double var(--cg-accent); }
.cg-root.cg-rdb .cg-ladder-col { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.7rem 0; }
.cg-root.cg-rdb .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Redbridge. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000026): 310,260 usual residents (308,491 households, 1,769 communal). Vision Redbridge Culture and Leisure (visionrcl.org.uk), libraries index lists Aldersbrook, Fullwell Cross, Gants Hill, Goodmayes, Hainault, Redbridge Central, Seven Kings and Wanstead libraries; individual pages give: Aldersbrook 2a Park Road, London, E12 5HQ; Fullwell Cross 140 High Street, Barkingside, IG6 2EA; Gants Hill 490 Cranbrook Road, Gants Hill, IG2 6LA; Goodmayes 76 Goodmayes Lane, Ilford, IG3 9QB; Hainault 100 Manford Way, Ilford, IG7 4DD; Redbridge Central Clements Road, Ilford, Essex, IG1 1EA; Seven Kings 679 High Road, Seven Kings, IG3 8RQ; Wanstead Spratt Hall Road, Wanstead, E11 2RQ; Woodford Green Library and Gym, Snakes Lane West, Woodford Green, IG8 0DX (currently open); South Woodford Library and Gym, 116 High Road, E18 2QS: "Following structural engineers\' advice, South Woodford Library & Gym will remain closed for approximately 12 months to allow essential remedial works to take place." Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 139 (I 1, II* 12, II 126); Grade I 1081008 CHURCH OF ST MARY; II* 1081014 VALENTINES MANSION, 1081027 RAILINGS, GATES AND GATEPIERS TO VALENTINES PARK, 1081001 DR BARNARDO\'S MEMORIAL AT BARNARDO\'S, 1300587 CHAPEL, ILFORD HOSPITAL OF ST MARY AND ST THOMAS OF CANTERBURY. TfL Unified API: Line/central/StopPoints and Line/elizabeth/StopPoints; StopPoint 940GZZLUGTH (Gants Hill) lines: Central.',
    localProject: 'Trilateration. Stations: TfL stop lat/lon (WGS84) -> GRS80 XYZ -> OS Helmert (ETRS89 to OSGB36 parameters from the OS guide, as used for St Davids) -> Airy lat/lon -> National Grid; inside Redbridge BFC: Woodford 540947,191744; Hainault 545078,191500; Fairlop 544932,190601; South Woodford 540534,190064; Barkingside 544796,189492; Snaresbrook 540160,188804; Gants Hill 543273,188431; Newbury Park 544926,188387; Redbridge 541831,188357; Wanstead 540667,188242 (Central); Chadwell Heath 547650,187610; Goodmayes 546400,187300; Seven Kings 545455,187100; Ilford 543570,186500 (Elizabeth). Elizabeth four: max offset from best-fit line 55.6 m, spread 4,228 m. Targets: postcodes.io bulk lookup, eastings/northings of the nine library postcodes (all admin_district Redbridge). Noise N(0, 50 m) on each distance, 1,000 trials, numpy default_rng(20260925), Gauss-Newton from a linearised first guess (difference-of-squares least squares). Medians / 95th / count >1 km: all fourteen 21.7-25.8 m / 46.0-58.8 m / 0; nearest four Aldersbrook 41.9, Fullwell Cross 52.5, Gants Hill 62.6, Goodmayes 40.5, Hainault 96.0 (224 >1 km), Redbridge Central 41.4, Seven Kings 47.8, Wanstead 42.3, Woodford Green 76.8; Elizabeth only >1 km: Aldersbrook 396, Fullwell Cross 121, Gants Hill 191, Goodmayes 272, Hainault 113, Redbridge Central 0, Seven Kings 2, Wanstead 267, Woodford Green 135. Centroid start (mean of all 14 stations) instead: Aldersbrook nearest four median 2,514.9 m, 1,000 of 1,000 >1 km. Lesson family: trilateration / geometry and first-guess sensitivity, screened free 25 September 2026.',
    requiredMentions: [
      '310,260',
      'Aldersbrook',
      'Fullwell Cross',
      'Spratt Hall Road',
      'Snakes Lane West',
      'Manford Way',
      'Valentines Mansion',
      'trilateration',
      'Vision Redbridge Culture and Leisure'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Redbridge E09000026: 310,260 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000026&measures=20100' },
      { claim: 'Vision Redbridge Culture and Leisure: libraries index and individual library pages with addresses; South Woodford Library and Gym closed for about 12 months.', url: 'https://visionrcl.org.uk/libraries/' },
      { claim: 'TfL Unified API: Central line and Elizabeth line stop points with positions.', url: 'https://api.tfl.gov.uk/Line/central/StopPoints' },
      { claim: 'Historic England NHLE listed building points, inside the ONS boundary of Redbridge on 25 September 2026: 139 (1 I, 12 II*, 126 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'postcodes.io (ONS Postcode Directory data): eastings and northings of the nine library postcodes.', url: 'https://api.postcodes.io/' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Redbridge E09000026.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' }
    ],
    rejectedClaims: [
      'Real GPS error figures and satellite constellation details: not read at a primary source for this build; the 50 m error is a stated assumption of the simulation, not a claim about any device.',
      'The history of the Central line Hainault loop and station architecture: not read at a primary source; the page describes only what the station positions show.',
      'South Woodford library as a target: closed at the time of writing, so excluded.',
      'Individual Redbridge state schools, grammar school admissions or eleven plus results: not read at their own sites for this build and not used.',
      'Census ethnicity, religion or country of birth for Redbridge: never a standout; used only to order the build.'
    ]
  }
};
