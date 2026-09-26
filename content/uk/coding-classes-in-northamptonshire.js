'use strict';
// Northamptonshire (cg- county index, UK cluster Phase 7, row 242). Two unitary councils: North Northamptonshire and
// West Northamptonshire. Spine: which call should a lift answer next? Anchor: Express Lift Tower, Northampton, National
// Heritage List for England entry 1031518, Grade II (NHLE ArcGIS layer and Historic England official list entry text,
// read raw 26 September 2026): "Lift testing tower. Commissioned 1978, built 1980-2 by Stimpson and Walton for the
// Express Lift Company Limited"; "127m in height, tapering from 14.6m at the bottom to 8.4m at the top"; "The high
// speed lift shaft ... is for testing lifts at speeds of up to 7 metres per second"; "This is the only lift testing
// tower in Britain and one of only two in Europe" (as written when listed); "a significant local landmark".
// Our model (scratchpad nth/lift.py, seed 20260926): one lift in an invented 30-floor building, 3.5 m floors at 7 m/s
// (0.5 s per floor, ignoring acceleration), 12 s per stop; 300 calls, 35 per cent at the ground floor; wait counted
// until the lift reaches the caller. Quiet (a call every 30 s on average): first come avg 16.7 s, max 89.5; nearest
// 14.1, max 109.5; LOOK 14.0, max 109.5. Busy (every 9 s): first come avg 127.2 s, 95th 278.1, max 317.4, 1,640 floors;
// nearest avg 122.4, 95th 482.2, max 734.5, 616 floors; LOOK avg 98.3, 95th 261.3, max 337.4, 654 floors.
// Lesson family: scheduling a single server (FCFS vs shortest-seek vs LOOK), average vs worst case, starvation;
// screened (elevator, SCAN, LOOK algorithm, starvation: 0 lesson hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 785,250); ONS built-up areas, all inside,
// agree with our OA sums. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'NORTHAMPTONSHIRE', blurb: 'Two councils, from Northampton to Corby and Brackley, and a lesson from the Express Lift Tower on which call a lift should answer next.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-northamptonshire',
  code: 'nth',
  accent: '#515C0E',
  accentRationale: 'Northamptonshire: a deep olive from the solver (5.86:1 on the darkest paper tint), far yellower than the Lincoln green and the Warwickshire olive',
  pageType: 'governorate',
  place: {
    name: 'Northamptonshire',
    eyebrow: 'Northamptonshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Leicestershire', href: '/coding-classes-in-leicestershire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Northamptonshire',
  title: 'Coding Classes in Northamptonshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Northamptonshire, from Northampton, Corby and Kettering to Wellingborough, Rushden, Daventry and Brackley.',
  ogDescription: 'Coding classes for all of Northamptonshire, and a lift project: simulate three ways of answering calls and find the one that is quickest on average but leaves someone waiting twelve minutes.',
  twitterDescription: 'Northamptonshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Northamptonshire',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across Northamptonshire, taught live in English.'
  },

  h1: 'Coding classes in Northamptonshire',
  capsuleQ: 'What are the best coding classes in Northamptonshire?',
  capsule: 'Northamptonshire is run by two unitary councils, North Northamptonshire and West Northamptonshire, and the 2021 Census counted 785,250 people across the pair, our addition of their two totals. Northampton is by far the biggest town, followed by Corby, Kettering and Wellingborough. We teach over live video from India and put every learner in a class by level, so what they already know matters more than how old they are. Our youngest learners are 6 and our oldest 67; they study coding, Python, algorithms or maths either one-to-one or alongside four to nine others. The Northamptonshire project starts at the Express Lift Tower in Northampton. Nothing is charged for lesson one; staying on is USD 100 a month in a group or USD 150 a month privately.',
  lead: 'The Express Lift Tower rises 127 metres over Northampton. Its official listing says it was built between 1980 and 1982 for testing lifts at speeds of up to 7 metres per second, and calls it a significant local landmark. Every lift it tested faced the same everyday puzzle: with people waiting on several floors, which call should it answer next? Answer the nearest and the lift saves travel, but someone at the far end can wait a very long time. This page\'s project simulates one lift in Python with three different rules and measures both the average wait and the worst one. The rule that wins on one measure loses badly on the other.',
  wa: 'Hello Modern Age Coders, please could we book a free lesson for a learner in Northamptonshire?',

  picks: {
    eyebrow: 'Courses for Northamptonshire',
    h2: 'Where Northamptonshire learners get going',
    intro: 'A seven-year-old in Rushden making a first game, a Year 9 in Kettering who likes puzzles with rules, a Year 12 in Brackley aiming at computer science, and an adult in Northampton preparing for technical interviews. Each starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards programs that decide what to do next.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms and problem solving for teenagers, with sorting, searching and choosing between methods by what they cost.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults', note: 'Interview-ready data structures and algorithms, including queues, priority queues and a task scheduler project.' }
    ]
  },

  sections: [
    {
      id: 'northamptonshire', tint: '', eyebrow: 'Northamptonshire in figures',
      h2: '785,250 people under two councils',
      intro: 'Council counts are from the 2021 Census on Nomis, with the county total our own sum. For towns we use the ONS built-up area figures, having recounted each from its census output areas.',
      body: [
        { kind: 'table', caption: 'Northamptonshire\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Northampton', '243,520', 'Brackley', '16,190'],
          ['Corby', '68,160', 'Desborough', '11,900'],
          ['Kettering', '63,150', 'Towcester', '11,330'],
          ['Wellingborough', '54,425', 'Burton Latimer', '10,445'],
          ['Rushden', '31,685', 'Raunds', '10,230'],
          ['Daventry', '27,790', 'Irthlingborough', '9,310']
        ] },
        { kind: 'p', text: 'West Northamptonshire, with Northampton, Daventry, Brackley and Towcester, had 425,725 residents; North Northamptonshire, with Corby, Kettering, Wellingborough and Rushden, had 359,525. Below the table sit Higham Ferrers, Rothwell and Thrapston, and many villages between. Every town in the list lies wholly inside the county, and every published figure matches our own count within a few people. Holiday dates come from the two councils and from academy trusts. We have not read those calendars, so families tell us their dates and we pause accordingly.' },
        { kind: 'callout', h3: 'Neighbouring county pages', p: 'Northamptonshire borders several counties with pages of their own, including <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a>, <a class="cg-inline-link" href="/coding-classes-in-oxfordshire">Oxfordshire</a>, <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">Bedfordshire</a> and <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Northamptonshire project',
      h2: 'Which floor should the lift go to next?',
      intro: 'One lift, three rules for choosing the next call, and two ways of judging them.',
      body: [
        { kind: 'p', text: 'The learner builds an invented 30-floor building with one lift. Floors are 3.5 metres apart and the lift moves at 7 metres per second, the top speed the Northampton tower was built to test, so each floor takes half a second, and every stop costs 12 seconds for doors and people. Three hundred calls arrive at random times, a third of them from the ground floor. The program then tries three rules. First come, first served answers calls strictly in order. Nearest first always goes to the closest waiting call. The LOOK rule, often called the elevator algorithm, keeps travelling in one direction while anyone ahead is waiting, then turns round.' },
        { kind: 'table', caption: 'Our simulated busy period: a call every 9 seconds on average, run 26 September 2026', head: ['Rule', 'Average wait', '1 in 20 waited longer than', 'Longest wait', 'Floors travelled'], rows: [
          ['First come, first served', '127.2 s', '278.1 s', '317.4 s', '1,640'],
          ['Nearest first', '122.4 s', '482.2 s', '734.5 s', '616'],
          ['LOOK', '98.3 s', '261.3 s', '337.4 s', '654']
        ] },
        { kind: 'p', text: 'Nearest first looks efficient: it travels only 616 floors, well under half the distance of first come, first served, and its average wait is a little lower. But its longest wait is 734.5 seconds, more than twelve minutes, because while calls keep appearing near the lift, someone at the far end is never the closest. Computer scientists call this starvation. LOOK travels almost as little, has the lowest average wait of the three, and keeps the longest wait to 337.4 seconds, because a lift that sweeps up and down must reach every floor eventually.' },
        { kind: 'p', text: 'In a quiet period, with a call every 30 seconds, the three rules are much closer: averages of 16.7, 14.1 and 14.0 seconds. Rules only really show their character when the system is under pressure. That is the second lesson: test a design at its busiest, and judge it by the unluckiest user as well as the average one.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Act out a lift in the classroom with cards for floors, try answering the nearest call, and see who ends up waiting longest.' },
          { h3: 'Ages 11 to 15', p: 'Write the three rules as Python functions on a list of waiting floors, then run a small simulation and print average and longest waits.' },
          { h3: 'Ages 15 and up', p: 'Add random arrivals, measure percentiles, change the call rate, and find the load at which nearest first starts to starve distant floors.' }
        ] },
        { kind: 'callout', h3: 'What is real and what is modelled', p: 'The tower\'s dates, height and testing speed come from its Historic England list entry. The building, the calls and all the waiting times are our own simplified model: it ignores acceleration and counts only the wait until the lift arrives, not the ride. It says nothing about how any real lift is controlled.' }
      ]
    },
    {
      id: 'tower', tint: 'deep', eyebrow: 'Why Northampton',
      h2: 'A 127-metre tower built only to test lifts',
      intro: 'The Northamptonshire link, from the official list entry.',
      body: [
        { kind: 'table', caption: 'The Express Lift Tower in its Historic England list entry, number 1031518', head: ['Item', 'The list entry says'], rows: [
          ['Grade', 'Listed at Grade II.'],
          ['Dates', 'Commissioned 1978 and built 1980 to 1982 by Stimpson and Walton for the Express Lift Company.'],
          ['Size', '127 metres high, tapering from 14.6 metres across at the bottom to 8.4 metres at the top.'],
          ['Purpose', 'A high-speed shaft for testing lifts at up to 7 metres per second, where faults are simulated.'],
          ['Rarity', 'When listed, the only lift testing tower in Britain and one of only two in Europe.']
        ] },
        { kind: 'p', text: 'A tower built purely to test lifts is a reminder that everyday machines are engineered and checked with great care, and that more and more of that engineering is software. The same scheduling question the lift faces appears in computer disk drives, printer queues, delivery rounds and the order in which a computer handles its tasks. A Northamptonshire student who has watched nearest first starve the top floor has met one of the classic trade-offs in computer science.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Historic England, the owners of the Express Lift Tower and both Northamptonshire councils. The list entry\'s words are Historic England\'s; the simulation and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> is just south, with <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a> to the north and <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">Bedfordshire</a> to the south-east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From button presses to scheduling algorithms',
    intro: 'The free lesson finds the right first step. Age is a starting guess and nothing more.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Press and respond', p: 'Block coding where sprites react to button presses, and a first look at doing things in order.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 to 13', h3: 'Lists and rules', p: 'Typed Python with lists and simple rules for choosing what comes next.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 13 to 18', h3: 'Algorithms compared', p: 'Queues, sorting and searching for teenagers, with methods judged on average and worst cases.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Structures for work', p: 'Data structures and algorithms for adults, from queues to priority queues and interview problems.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and fairness in systems',
    h2: 'An AI can optimise the average. Who looks after the unluckiest person?',
    intro: 'Optimising one number can quietly make another much worse.',
    p1: 'Ask an assistant to write lift logic that minimises waiting, and nearest first is an obvious answer: it cuts travel and shaves the average. Unless someone asks about the worst case, nobody sees the twelve-minute wait on the top floor. Many automated systems are tuned the same way, to an average, and the people at the edges pay for it.',
    p2: 'A Northamptonshire learner who has printed the longest wait next to the average knows to ask for both, and to ask which users a change helps and which it harms. That habit matters wherever AI is used to allocate anything: appointments, deliveries, or places in a queue.',
    closer: 'So a young person in Northamptonshire should learn to code in 2026 to check who a clever system leaves waiting.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson logistics',
    h2: 'Corby to Brackley, no drive required',
    intro: 'Evening traffic around Northampton and between the towns eats time. Lessons online remove it completely.',
    cells: [
      { h3: 'Learn where you live', p: 'A bedroom in Wellingborough, a kitchen table in Towcester, a study in Desborough. Learner and teacher look at the same shared screen, and the learner types.' },
      { h3: 'School language we share', p: 'Year groups, key stages, GCSEs and A levels mean the same to us as to Northamptonshire schools, and teaching is in English.' },
      { h3: 'Try it free', p: 'A real lesson with real work, then a frank suggestion of level and course. No card details are needed.' },
      { h3: 'Groups by level', p: 'Classmates are matched on stage, not postcode, so a group of five to ten might mix learners from Kettering, Kent and much further afield.' },
      { h3: 'Your holidays respected', p: 'Two lessons a week is normal, with breaks for the holidays your own school keeps.' },
      { h3: 'Set in UK time', p: 'We fix your slot in UK time and leave it alone when the clocks change; our teachers run on India time, several hours ahead, and absorb the shift.' }
    ],
    spec: { title: 'Why we sort by level', p: 'A single town seldom has five learners at the same point free on the same evening. Level-based groups let a learner in Raunds or Irthlingborough join a class that suits them.' }
  },

  fees: {
    h2: 'Fees in Northamptonshire',
    intro: 'Northampton or Thrapston, you pay the same, and it is what families pay in every country we teach except India.',
    first: 'One whole lesson of genuine work, then advice on level and course.',
    group: 'Roughly eight lessons a month, in a group of five to ten at one level.',
    private: 'Roughly eight lessons a month, taught one-to-one.',
    closer: 'All prices are in US dollars and none in pounds. You are never charged before the free lesson has pinned down a course and a regular weekly slot. How pauses, missed lessons and a move between group and private classes work is set out on our pricing page.'
  },

  reviewsH2: 'In families\' words, from Google',

  book: {
    h2: 'Book a free lesson in Northamptonshire',
    intro: 'Let us know the learner\'s age or school year and one thing they enjoy. A first lesson could be a Scratch game with buttons, a first Python list, or the lift simulation on this page.',
    success: 'Thank you. Your Northamptonshire request is in.'
  },

  faq: {
    h2: 'Northamptonshire questions',
    intro: 'The county, the lift project and practical details.',
    items: [
      { q: 'How many people live in Northamptonshire?', a: 'West Northamptonshire had 425,725 usual residents and North Northamptonshire 359,525 when the 2021 Census was taken. Put together, that is 785,250, a sum we worked out from the two ONS figures on Nomis.' },
      { q: 'What are the largest towns in Northamptonshire?', a: 'By ONS built-up area: Northampton 243,520, Corby 68,160, Kettering 63,150, Wellingborough 54,425 and Rushden 31,685.' },
      { q: 'What is the lift project?', a: 'Learners simulate one lift in Python with three rules for picking the next call, and find that nearest first travels least but, in a busy period, leaves one person waiting 734.5 seconds, while the LOOK rule keeps the worst wait to 337.4 seconds.' },
      { q: 'What is the Express Lift Tower?', a: 'A 127-metre lift testing tower in Northampton, built 1980 to 1982 and listed at Grade II, with a shaft for testing lifts at up to 7 metres per second, according to its Historic England list entry.' },
      { q: 'What is starvation in computing?', a: 'When a rule for sharing something keeps favouring others so that one request waits far longer than it should, or forever. Nearest first can starve distant floors when the lift is busy.' },
      { q: 'Do you have a centre in Northamptonshire?', a: 'No. We only teach live online, so learners join from home anywhere in the county.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Young children usually begin with blocks, typed Python tends to start somewhere between eight and ten, teenagers go deeper into algorithms, and adults often pick Python or data structures. Where each person starts is decided in the free lesson.' },
      { q: 'Can adults learn data structures and algorithms?', a: 'Yes. The college and adult course covers data structures and algorithms up to interview level, including queues, priority queues and a task scheduler.' },
      { q: 'How much are the lessons?', a: 'The first one is free. Continuing costs USD 100 monthly for a group or USD 150 monthly for one-to-one, and there is neither an enrolment fee nor a minimum period.' },
      { q: 'Do lessons stop for Northamptonshire school holidays?', a: 'They can. North Northamptonshire, West Northamptonshire and academy trusts publish their dates, and we plan breaks around your school\'s.' }
    ]
  },

  next: {
    eyebrow: 'Around the county',
    h2: 'Other pages nearby',
    html: 'Neighbours include <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a>, <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">Bedfordshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Northamptonshire and neighbours',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-leicestershire', label: 'Leicestershire' },
    { href: '/best-coding-class-in-milton-keynes', label: 'Milton Keynes' }
  ],

  personalityCss: `
.cg-root.cg-nth .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.6rem); }
.cg-root.cg-nth .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-nth .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-nth .cg-eyebrow { letter-spacing: 0.21em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nth .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.016em; }
.cg-root.cg-nth .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-nth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nth .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-nth .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-nth .cg-callout { border-left-width: 5px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'Northamptonshire: unitary councils North Northamptonshire and West Northamptonshire. ONS Census 2021 TS001 via Nomis: West Northamptonshire 425,725; North Northamptonshire 359,525; our sum 785,250. ONS built-up areas (published; agree with our OA sums, all inside): Northampton 243,520; Corby 68,160; Kettering 63,150; Wellingborough 54,425; Rushden 31,685; Daventry 27,790; Brackley 16,190; Desborough 11,900; Towcester 11,330; Burton Latimer 10,445; Raunds 10,230; Irthlingborough 9,310; Higham Ferrers 8,825; Rothwell 8,620; Thrapston 7,245. Historic England NHLE 1031518, Express Lift Tower, Tower Square, Northampton, Grade II: "Lift testing tower. Commissioned 1978, built 1980-2 by Stimpson and Walton for the Express Lift Company Limited"; "127m in height, tapering from 14.6m at the bottom to 8.4m at the top"; "for testing lifts at speeds of up to 7 metres per second"; "This is the only lift testing tower in Britain and one of only two in Europe"; "a significant local landmark".',
    localProject: 'Single-lift scheduling simulation (ours, seed 20260926): 30 floors, 3.5 m at 7 m/s = 0.5 s per floor, 12 s per stop, 300 calls, 35 per cent at ground; wait = time until the lift reaches the caller. Quiet (mean gap 30 s): FCFS avg 16.7 s, 95th 54.6, max 89.5, 2,998 floors; nearest 14.1, 44.4, 109.5, 2,768; LOOK 14.0, 44.4, 109.5, 2,750. Busy (mean gap 9 s): FCFS 127.2, 278.1, 317.4, 1,640; nearest 122.4, 482.2, 734.5, 616; LOOK 98.3, 261.3, 337.4, 654. Page labels the model as ours, simplified, and not describing real lift control. AI angle: optimising the average hides the worst case. Lesson family: single-server scheduling (FCFS, shortest-seek, LOOK), starvation, testing under load.',
    requiredMentions: [
      '785,250',
      'Express Lift Tower',
      '1031518',
      'Stimpson and Walton',
      '7 metres per second',
      '734.5',
      'Burton Latimer',
      'Irthlingborough',
      'Higham Ferrers',
      'Thrapston'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for North and West Northamptonshire, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Northamptonshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Historic England, National Heritage List for England entry 1031518: Express Lift Tower, Northampton.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1031518' }
    ],
    rejectedClaims: [
      'Whether the tower is still the only lift testing tower in Britain today: the list entry speaks as of listing, so the page says "when listed".',
      'Current owners, uses or public access to the tower: not read, not claimed.',
      'How real lift controllers choose calls: not researched; the page states the model says nothing about real lifts.',
      'Silverstone, Althorp and the Daventry 1935 radar experiment: considered as anchors, no primary source read, not mentioned.',
      'Northamptonshire school term dates: none read.',
      'Named Northamptonshire schools: none named.'
    ]
  }
};
