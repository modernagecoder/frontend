'use strict';
// Norfolk (cg- county index, UK cluster Phase 7, row 240). Seven districts under Norfolk County Council. Spine: finding
// the top of a curve without calculus, from the wind farms off the Norfolk coast. Operator pages read raw 26 September
// 2026: RWE Scroby Sands ("Commissioned in March 2004 ... one of the UK's first commercial offshore wind farms"; "2.5
// kilometres off the coast of Great Yarmouth"; "installed capacity of 60 megawatts"; turbine count shown only by a
// script counter, so not used). Sheringham Shoal site (operated by Equinor): "The 317MW Sheringham Shoal Offshore Wind
// Farm, located between 17 and 23 kilometres off the coast of North Norfolk ... comprises 88 wind turbines and generates
// around 1.1TWh". Dudgeon site: "located between 32km off the coast of the seaside town of Cromer"; "Since its
// completion in late 2017, this 402MW offshore wind farm"; "67 6MW wind turbine generators".
// Our model (scratchpad nfk/gss.py): power coefficient Cp(a) = 4a(1 - a)^2 on [0, 0.5]; golden-section search reaches
// a = 1/3, Cp = 16/27 = 0.592593 in 15 evaluations at 0.001, 30 at one millionth, 44 at one billionth; ternary search
// 32, 66, 100; a grid 501, 500,001, 500,000,000. On an invented two-peak curve (peaks 1.0 at 0.2 and 1.3 at 0.75)
// golden-section returns the lower peak at 0.2. Our arithmetic on published figures: Sheringham Shoal 1.1 TWh over
// 317 MW x 8,760 h = 39.6 per cent; 317 / 88 = 3.6 MW per turbine; Dudgeon 402 / 67 = 6 MW.
// Lesson family: golden-section search (derivative-free 1-D optimisation), evaluation cost, unimodality assumption;
// screened (golden section, ternary search, Betz, wind farm: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 916,120); ONS built-up areas checked
// against our OA sums (Wisbech is almost wholly in Cambridgeshire and left out). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'NORFOLK', blurb: 'Seven districts from the Fens to the Broads, and a coastal lesson in finding the peak of a curve with as few tries as possible.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-norfolk',
  code: 'nfk',
  accent: '#25546B',
  accentRationale: 'Norfolk: a North Sea blue from the solver (6.61:1 on the darkest paper tint), greener than the Devon and Cumbria blues',
  pageType: 'governorate',
  place: {
    name: 'Norfolk',
    eyebrow: 'Norfolk',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East of England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Norwich', href: '/best-coding-class-in-norwich' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Norfolk',
  title: 'Coding Classes in Norfolk | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Norfolk, from Norwich, King\'s Lynn and Great Yarmouth to Thetford, Dereham, Wymondham and North Walsham.',
  ogDescription: 'Coding classes for all of Norfolk, and a project from its offshore wind farms: find the Betz limit in Python with golden-section search, in 30 tries instead of half a million.',
  twitterDescription: 'Norfolk coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Norfolk',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across Norfolk, taught live in English.'
  },

  h1: 'Coding classes in Norfolk',
  capsuleQ: 'What are the best coding classes in Norfolk?',
  capsule: 'Norfolk has one county council and seven district councils, and at the 2021 Census the seven districts held 916,120 people, a figure we reached by adding their published counts. Norwich is by far the largest place, with King\'s Lynn, Great Yarmouth and Thetford next. Our lessons are live over video, taught from India, and each learner joins a class chosen by level, not by age. Pupils can be as young as 6 or as old as 67, and they learn coding, Python, algorithms or maths in a small group of five to ten or on their own with a teacher. The Norfolk project comes from the wind farms off its coast. The opening lesson costs nothing. Carrying on means USD 100 monthly in a group, or USD 150 monthly for one-to-one teaching.',
  lead: 'RWE says Scroby Sands, 2.5 kilometres off Great Yarmouth, was commissioned in March 2004 as one of the UK\'s first commercial offshore wind farms. Further out now stand Sheringham Shoal and Dudgeon, with turbines several times larger. Every turbine faces the same hard limit: it cannot catch all of the wind\'s power, because air that stopped dead would pile up behind the blades. A short textbook formula gives the share it can catch, and the ideal share sits at the top of a curve. This page\'s project finds that top in Python without any calculus, using a search that needs only thirty tries where a simple list of guesses needs half a million, and then shows the one kind of curve that fools it.',
  wa: 'Hello Modern Age Coders, we are in Norfolk and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Norfolk',
    h2: 'Where Norfolk learners begin',
    intro: 'A seven-year-old in Dereham building a first Scratch game, a Year 8 in Wymondham who enjoys hunting for patterns, a Year 11 in Cromer who wants to solve harder problems, and an adult in King\'s Lynn learning Python for work. All begin with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with guessing games that get smarter each round.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with graphs, patterns and puzzles turned into Python projects.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms and problem solving for teenagers, where every method is judged by how much work it needs.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from the very start for adults, through to projects that save real time at work.' }
    ]
  },

  sections: [
    {
      id: 'norfolk', tint: '', eyebrow: 'Norfolk in figures',
      h2: '916,120 people across seven districts',
      intro: 'District counts are 2021 Census figures from Nomis, and the county number is our own addition. Town figures are the ONS built-up areas, and we cross-checked every one by totalling the census output areas inside it.',
      body: [
        { kind: 'table', caption: 'Norfolk\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Norwich', '200,770', 'Wymondham', '16,330'],
          ['King\'s Lynn', '47,615', 'Taverham and Drayton', '14,985'],
          ['Great Yarmouth', '28,985', 'North Walsham', '12,825'],
          ['Thetford', '25,510', 'Bradwell', '11,630'],
          ['Gorleston-on-Sea', '24,470', 'Watton', '11,545'],
          ['Dereham', '20,785', 'Downham Market', '11,350']
        ] },
        { kind: 'p', text: 'The ONS Norwich area spreads well past the city council\'s edge into Broadland and South Norfolk, which is why it holds 200,770 people while Norwich district has 143,922. After Norwich, no town reaches fifty thousand, and many Norfolk families live in places like Attleborough, Diss, Caister-on-Sea, Swaffham, Fakenham, Cromer, Aylsham and Sheringham. Wisbech is left off because nearly all of it lies in Cambridgeshire. King\'s Lynn and West Norfolk is the largest district at 154,325 and Great Yarmouth the smallest at 99,748. Norfolk County Council and academy trusts set school dates, which we have not read; lesson breaks follow each family\'s calendar.' },
        { kind: 'callout', h3: 'Norwich has its own page', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a> page has a separate project, on the city\'s medieval churches. This page is for everyone else, from Downham Market to Caister.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Norfolk project',
      h2: 'Finding the top of a curve in thirty tries',
      intro: 'A textbook formula for wind power, three ways to search it, and a curve that tricks the fastest one.',
      body: [
        { kind: 'p', text: 'Suppose a turbine slows the wind passing through it by a fraction a. The standard formula for the share of the wind\'s power an ideal rotor can capture is 4a(1 − a)². Slow the air too little and most of it passes straight through; slow it too much and it backs up. Somewhere between 0 and a half is a sweet spot, and the learner\'s job is to find it by trying values of a, counting every try. Calculus gives the answer as a third, with a share of 16/27, about 59.3 per cent, known as the Betz limit. The program should reach the same answer without it.' },
        { kind: 'table', caption: 'Tries needed to pin down the peak, our runs of 26 September 2026', head: ['Precision wanted', 'A list of evenly spaced guesses', 'Ternary search', 'Golden-section search'], rows: [
          ['To 0.001', '501', '32', '15'],
          ['To one millionth', '500,001', '66', '30'],
          ['To one billionth', '500,000,000', '100', '44']
        ] },
        { kind: 'p', text: 'The simple approach tries a value every so often across the range and keeps the largest. It works, but each extra digit of precision multiplies the work by ten. Ternary search is smarter: it tries two points, throws away the third of the range that cannot contain the top, and repeats. Golden-section search does the same but places its two points at the golden ratio, about 0.618, so that one of them can be reused next round. It needs only one new try per step, and it found a = 0.333333 and a share of 0.592593 after 30 tries, against 500,001 for the list of guesses.' },
        { kind: 'p', text: 'Now the trap. Both clever searches assume the curve has a single peak. The learner draws an invented curve with two hills, a lower one of height 1.0 near 0.2 and a higher one of 1.3 near 0.75, and runs golden-section search over the whole range. It returns 0.2, the lower hill, and reports it with complete confidence. Nothing in the answer warns that a better peak exists. The fast method is only as good as the assumption behind it, and checking that assumption is part of the job.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play higher-or-lower for a hidden number, count the guesses, and discover why halving the range each time wins.' },
          { h3: 'Ages 11 to 15', p: 'Plot 4a(1 − a)² in Python, find its peak by listing values, then by ternary search, and compare the counts.' },
          { h3: 'Ages 15 and up', p: 'Write golden-section search with the reused point, prove the 0.618 shrink per step, and build the two-hill counterexample.' }
        ] },
        { kind: 'callout', h3: 'What is published and what is ours', p: 'The wind farm facts come from the operators\' own pages. The power formula is the standard textbook one for an idealised rotor; real turbines capture less. The search counts and the two-hill curve are our own teaching runs, and nothing here describes how any Norfolk turbine is controlled.' }
      ]
    },
    {
      id: 'wind', tint: 'deep', eyebrow: 'Why the Norfolk coast',
      h2: 'Three wind farms, one hard limit',
      intro: 'The Norfolk link, from the operators\' own descriptions.',
      body: [
        { kind: 'table', caption: 'Three wind farms off Norfolk, as their operators describe them', head: ['Wind farm', 'Where', 'What the operator says'], rows: [
          ['Scroby Sands (RWE)', '2.5 km off Great Yarmouth', 'Commissioned March 2004, one of the UK\'s first commercial offshore wind farms; 60 megawatts.'],
          ['Sheringham Shoal', '17 to 23 km off North Norfolk', '317 megawatts from 88 turbines, generating around 1.1 terawatt hours a year.'],
          ['Dudgeon', '32 km off Cromer', 'Completed late 2017; 402 megawatts from 67 turbines of 6 megawatts each.']
        ] },
        { kind: 'p', text: 'Two more pieces of arithmetic come from those figures, and both are ours. Sheringham Shoal\'s 317 megawatts shared over 88 turbines is about 3.6 megawatts each, while Dudgeon\'s are 6, which shows how quickly turbines grew. And if Sheringham Shoal ran flat out all year it would make 317 × 8,760 megawatt hours; its published output of around 1.1 terawatt hours is about 39.6 per cent of that. That share, called a capacity factor, is a reminder that wind does not blow at full strength all the time, and that the Betz limit is a ceiling nobody reaches.' },
        { kind: 'p', text: 'We are not connected with RWE, Equinor, the owners of Sheringham Shoal or Dudgeon, or Norfolk County Council. The operators\' figures are theirs; the searches and our arithmetic are ours, and so are any mistakes.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a> has a page of its own; <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a> is to the west, with <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a>, and <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a> across the Wash.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From higher-or-lower to smart searching',
    intro: 'The free lesson shows where to begin. A birthday suggests a stage; skill decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Guessing games', p: 'Block coding with games that guess a number, a colour or a place, and get better at guessing.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Graphs and patterns', p: 'Python that plots curves, finds the biggest value and explains how it found it.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Algorithms that scale', p: 'Searching, sorting and optimising, with each method measured by the work it needs.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Python at work', p: 'Python for adults, from basics to scripts and analysis that answer real questions quickly.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and optimisation',
    h2: 'Machine learning climbs curves all day. What if there are two hills?',
    intro: 'Training an AI is a search for good settings, and the same trap is waiting.',
    p1: 'Every machine learning model is trained by searching for settings that make its errors as small as possible, one step at a time, much like the searches on this page. Those methods are fast because they assume the ground slopes the right way. On a landscape with more than one valley or hill they can settle on a poor answer and report it with the same confidence as a good one, exactly as golden-section search did on our two-hill curve.',
    p2: 'A Norfolk student who has built the counterexample knows the questions to ask of any optimised result: where did the search start, what did it assume about the shape, and has anyone tried starting somewhere else? Those questions separate people who can use AI tools from people who can judge them.',
    closer: 'So a young person in Norfolk should learn to code in 2026 to understand when a fast answer can be trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From the Fens to the Broads without a drive',
    intro: 'Norfolk is large and rural, and weekly trips to a class in Norwich can swallow an evening. Online lessons save the journey.',
    cells: [
      { h3: 'Learning from home', p: 'A farmhouse near Swaffham, a terrace in Gorleston, a bungalow in Watton. The teacher shares a screen and the learner writes the code.' },
      { h3: 'Familiar school terms', p: 'Teachers talk about Year 9, Key Stage 4, GCSE options and A level choices in the way Norfolk pupils hear them at school, in English throughout.' },
      { h3: 'A first lesson free', p: 'A genuine lesson, followed by honest advice on level and course. We never ask for card details up front.' },
      { h3: 'A group at your pace', p: 'Five to ten learners at the same stage, drawn from Norfolk, the rest of the UK and abroad.' },
      { h3: 'Holidays on your terms', p: 'Most learners have two lessons a week, and we pause for your school\'s own holidays.' },
      { h3: 'Times given in UK time', p: 'Each slot is set in UK time and stays put when the clocks change; the teacher, on India time several hours ahead, takes care of the difference.' }
    ],
    spec: { title: 'Why level beats location', p: 'In a county of small towns, five learners at the same level and free on the same evening rarely live near each other. Level-based groups let a learner in Diss or Fakenham join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Norfolk',
    intro: 'Thetford or Sheringham, the price is the same, and so it is in every country we teach other than India.',
    first: 'A complete lesson with real work, then a recommendation of level and course.',
    group: 'About eight lessons each month, in a group of five to ten at one level.',
    private: 'About eight lessons each month, one-to-one.',
    closer: 'We charge in US dollars and publish no prices in pounds. Billing begins only after the free lesson has agreed a course and a weekly time; the pricing page covers pauses, missed lessons and changes between group and private teaching.'
  },

  reviewsH2: 'What families say about us on Google',

  book: {
    h2: 'Book a free Norfolk lesson',
    intro: 'Tell us how old the learner is, or their school year, plus what they are into. A first lesson might be a guessing game in Scratch, a Python graph, or the wind curve on this page.',
    success: 'Thank you. Your Norfolk request has arrived.'
  },

  faq: {
    h2: 'Norfolk questions',
    intro: 'The county, the wind project and the practical details.',
    items: [
      { q: 'How many people live in Norfolk?', a: 'Norfolk\'s seven districts counted 916,120 usual residents in 2021; we added up the seven ONS district totals published on Nomis to get that figure.' },
      { q: 'What are the largest towns in Norfolk?', a: 'By ONS built-up area: Norwich 200,770, King\'s Lynn 47,615, Great Yarmouth 28,985, Thetford 25,510 and Gorleston-on-Sea 24,470.' },
      { q: 'What is the Norfolk project?', a: 'Learners find the peak of the wind power formula 4a(1 − a)² in Python, compare a list of guesses, ternary search and golden-section search, and build a two-hill curve on which the fastest search picks the wrong peak.' },
      { q: 'What is the Betz limit?', a: 'The largest share of the wind\'s power an ideal turbine rotor can capture, 16/27 or about 59.3 per cent, reached when the rotor slows the wind by a third. Real turbines capture less.' },
      { q: 'What is golden-section search?', a: 'A way to find the top of a curve with one peak by repeatedly narrowing the range, placing test points at the golden ratio so one point can be reused each step. On this page it needed 30 tries for six-figure precision.' },
      { q: 'Is there a Norfolk classroom?', a: 'No. All lessons are live online, so learners anywhere in the county join from home.' },
      { q: 'What ages do you take?', a: 'From 6 to 67. Children begin with block coding, most move to typed Python around ten, teenagers go on to algorithms and advanced Python, and adults learn Python or data. The free lesson decides the starting level.' },
      { q: 'Do you teach algorithms to teenagers?', a: 'Yes. The teen problem solving and algorithms course covers searching, sorting and more, always measuring how much work each method needs.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. After that it is USD 100 a month in a group and USD 150 a month one-to-one, with no joining fee and no lock-in.' },
      { q: 'Do you follow Norfolk school holidays?', a: 'We can. Norfolk County Council and academy trusts publish their own term dates; share yours and we plan breaks around them.' }
    ]
  },

  next: {
    eyebrow: 'Around Norfolk',
    h2: 'Nearby pages',
    html: 'For the city itself see <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a>. Westward are <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a>, and <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a> lies over the Wash. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Norfolk and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-norwich', label: 'Norwich' },
    { href: '/coding-classes-in-cambridgeshire', label: 'Cambridgeshire' }
  ],

  personalityCss: `
.cg-root.cg-nfk .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-nfk .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-nfk .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-nfk .cg-eyebrow { letter-spacing: 0.19em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-nfk .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.017em; }
.cg-root.cg-nfk .cg-table caption { font-style: italic; font-weight: 500; text-align: left; }
.cg-root.cg-nfk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nfk .cg-table th { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-nfk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-nfk .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Norfolk: Norfolk County Council over seven districts (Breckland, Broadland, Great Yarmouth, King\'s Lynn and West Norfolk, North Norfolk, Norwich, South Norfolk). ONS Census 2021 TS001 via Nomis: King\'s Lynn and West Norfolk 154,325; Norwich 143,922; South Norfolk 141,948; Breckland 141,476; Broadland 131,721; North Norfolk 102,980; Great Yarmouth 99,748; our sum 916,120. ONS built-up areas (published; agree with our OA sums): Norwich 200,770 (Broadland, Norwich, South Norfolk); King\'s Lynn 47,615; Great Yarmouth 28,985; Thetford 25,510; Gorleston-on-Sea 24,470; Dereham 20,785; Wymondham 16,330; Taverham and Drayton 14,985; North Walsham 12,825; Bradwell 11,630; Watton 11,545; Downham Market 11,350; Attleborough 11,235; Diss 9,600; Caister-on-Sea 9,095; Swaffham 8,430; Fakenham 8,390; Cromer 7,525; Aylsham 7,185; Sheringham 7,090. Wisbech (26,795; 1,267 inside Norfolk) excluded. RWE Scroby Sands: "Commissioned in March 2004, Scroby Sands is one of the UK\'s first commercial offshore wind farms"; "2.5 kilometres off the coast of Great Yarmouth"; "installed capacity of 60 megawatts". Sheringham Shoal (operated by Equinor): "The 317MW Sheringham Shoal Offshore Wind Farm, located between 17 and 23 kilometres off the coast of North Norfolk"; "88 wind turbines"; "around 1.1TWh". Dudgeon: "32km off the coast of the seaside town of Cromer"; "completion in late 2017"; "402MW"; "67 6MW wind turbine generators".',
    localProject: 'Golden-section search on the idealised rotor power coefficient Cp(a) = 4a(1 - a)^2, a in [0, 0.5]: optimum a = 1/3, Cp = 16/27 = 0.592593. Evaluations: tolerance 0.001 golden 15, ternary 32, grid 501; one millionth 30, 66, 500,001; one billionth 44, 100, 500,000,000. Golden result at one millionth a = 0.333333, Cp = 0.592593. Invented two-peak curve exp(-((x-0.2)/0.08)^2) + 1.3 exp(-((x-0.75)/0.05)^2): golden on [0,1] returns 0.2 (1.0); true maximum 0.75 (1.3). Our arithmetic: Sheringham Shoal 1.1 TWh / (317 MW x 8,760 h) = 39.6 per cent capacity factor; 317/88 = 3.6 MW per turbine; Dudgeon 402/67 = 6 MW. Page labels the formula as textbook and idealised and the runs as ours. AI angle: training as optimisation, local optima reported confidently. Lesson family: golden-section search, evaluation cost, unimodality assumption.',
    requiredMentions: [
      '916,120',
      'Scroby Sands',
      'Sheringham Shoal',
      'Dudgeon',
      '16/27',
      'Gorleston-on-Sea',
      'Taverham and Drayton',
      'Downham Market',
      '500,001',
      'golden-section',
      'Caister-on-Sea'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the seven Norfolk districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Norfolk towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'RWE: Scroby Sands offshore wind farm, commissioning date, distance and capacity.', url: 'https://uk.rwe.com/locations/scroby-sands-offshore-wind-farm/' },
      { claim: 'Sheringham Shoal Offshore Wind Farm: capacity, distance, turbine count, annual output.', url: 'https://sheringhamshoal.co.uk/' },
      { claim: 'Dudgeon Offshore Wind Farm: distance from Cromer, completion, capacity, turbines.', url: 'https://dudgeonoffshorewind.co.uk/' }
    ],
    rejectedClaims: [
      'Scroby Sands turbine count and households figure: shown only by script counters or not needed, so not printed.',
      'Homes-powered and carbon figures on the operator pages: marketing equivalences, not used.',
      'Dudgeon project cost: a money figure, left out.',
      'How any Norfolk turbine is controlled or optimised: not read, not claimed.',
      'Measured efficiency of real turbines against the Betz limit: not read; only "real turbines capture less" is said.',
      'Norfolk school term dates: none read.',
      'Named Norfolk schools: none named.'
    ]
  }
};
