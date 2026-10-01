'use strict';
// Didsbury, Manchester (cg- district page, UK cluster Phase 9, row 455). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: can carefully spread points beat random ones?
// (quasi-Monte Carlo: the Halton low-discrepancy sequence against pseudo-random sampling, estimating an area).
// Data (read 30 September 2026): ONS Open Geography Portal, Wards (December 2022) Boundaries UK BGC (generalised to 20 m),
// ArcGIS FeatureServer query WD22CD in (E05011362, E05011363), British National Grid: Didsbury East polygon 46 points,
// 3,647,598 square metres; Didsbury West 50 points, 3,353,073 square metres (our shoelace areas of the generalised
// outlines); both together 7.001 square km inside a bounding box 3.808 km by 3.536 km (13.465 square km, 52.0% filled).
// Our run (scratchpad dsb/qmc.py): throw n points into the box, count those inside either ward, scale by the box area.
// Median error against the shoelace area over 200 repeats (pseudo-random seeds; Halton bases 2 and 3 with a random
// shift each repeat): n 100: random 5.79%, Halton 3.83%; n 1,000: 2.48% / 0.56%; n 10,000: 0.71% / 0.11%; n 100,000:
// 0.19% / 0.018%. Ratio 1.5, 4.4, 6.2, 10.5.
// Lesson family: quasi-Monte Carlo, low-discrepancy (Halton / van der Corput) sequences. Screened: "quasi-random",
// "quasi-Monte", "low-discrepancy", "van der Corput" 0 hits ("Halton" elsewhere is the Cheshire borough). Claimed in
// claims.txt. Plain Monte Carlo is used on other pages; the comparison with a designed sequence is the lesson here.
// Manchester city page = cross-correlation of river level changes.
// Place facts: Census 2021 TS001 (Nomis): Didsbury East ward 14,709; Didsbury West ward 15,083 (not summed on the page).
// postcodes.io places (Manchester, M20) suburban areas: Didsbury, East Didsbury, West Didsbury.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DIDSBURY', label: 'Didsbury, Manchester', blurb: 'Online coding and Python classes for Didsbury in Manchester, with a project that measures the area of two wards by throwing points at a map, randomly and then cleverly.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-didsbury-manchester',
  code: 'dsb',
  accent: '#7A3A1F',
  accentRationale: 'Didsbury: a warm chestnut (hand-picked for hue distance from other Phase 9 pages, contrast above 7:1)',
  pageType: 'city',
  place: {
    name: 'Didsbury',
    eyebrow: 'Didsbury, Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-manchester', name: 'Manchester' }],
  nav: [
    { label: 'Manchester', href: '/best-coding-class-in-manchester' },
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Didsbury, Manchester',
  title: 'Online Coding and Python Classes in Didsbury, Manchester | 6-67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Didsbury, East Didsbury and West Didsbury learners in Manchester M20, ages 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Didsbury, Manchester, with a project comparing random points and Halton points for measuring an area.',
  twitterDescription: 'Didsbury, Manchester: online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Didsbury, Manchester',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Didsbury and the M20 postcode district, taught live with careful reasoning first.'
  },

  h1: 'Online coding and Python classes in Didsbury',
  capsuleQ: 'Which are the best online coding and Python classes in Didsbury?',
  capsule: 'Didsbury is covered by two Manchester wards: Didsbury East, with 14,709 usual residents at the 2021 census, and Didsbury West, with 15,083. Didsbury, East Didsbury and West Didsbury are the suburban areas recorded in the M20 postcode district. Our tutors, based in India, teach coding, Python, AI, vibe coding and maths on live video to anyone aged six to 67, privately or in a group of five to ten working at one level. Lessons put reasoning ahead of tools, so a learner can judge whether a simulation deserves to be believed. The opening lesson is free and finishes with a course recommendation. The Didsbury project estimates the area of the two wards by scattering points over a map, first at random and then with a Halton sequence, and finds the second is up to ten times more accurate for the same effort. After the trial, a group place is USD 100 a month and one-to-one lessons are USD 150 a month.',
  lead: 'A favourite first simulation is to measure an awkward shape by throwing darts: scatter points over a rectangle, count how many land inside the shape, and scale up. It is called the Monte Carlo method, and its weakness is that random points clump and leave gaps. There is a better kind of scatter. A low-discrepancy sequence, such as the Halton sequence, places each new point where the gaps are, so the rectangle is covered evenly at every stage. Using it is called quasi-Monte Carlo. This project pits the two against each other on a real shape: the outline of the two Didsbury wards, taken from the Office for National Statistics boundary files.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Didsbury, Manchester?',

  picks: {
    eyebrow: 'Didsbury course picks',
    h2: 'Didsbury courses in thinking, Python and AI',
    intro: 'Start from the learner\'s age. Whichever course fits, lesson one is a free live class and booking takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think course: estimating by sampling, and why spreading your samples out matters.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games explained to an AI in plain words, then tested by the child who asked.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to simulation, including the Didsbury area experiment.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for numerical work, data and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Didsbury and M20',
      h2: 'Didsbury East, Didsbury West and the M20 neighbourhoods',
      intro: 'Census counts for the two Didsbury wards, and the places recorded in the postcode district.',
      body: [
        { kind: 'table', caption: 'The two Didsbury wards in the 2021 census (ONS table TS001, via Nomis)', head: ['Ward', 'Usual residents'], rows: [
          ['Didsbury East', '14,709'],
          ['Didsbury West', '15,083']
        ] },
        { kind: 'p', text: 'These are separate published figures for two council wards and we leave them separate. Postcodes.io lists Didsbury, East Didsbury and West Didsbury as suburban areas of Manchester in M20, a district that also takes in parts of the Withington, Burnage, Old Moat and Chorlton Park wards. Manchester schools teach England\'s national curriculum; give us the term dates and no lesson will land in a holiday.' },
        { kind: 'callout', h3: 'Manchester, Greater Manchester and our approach', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-manchester">coding classes in Manchester</a> for the city and <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> for the county. The thinking-first idea is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Didsbury project',
      h2: 'Measuring Didsbury with darts: random points against the Halton sequence',
      intro: 'One outline, one rectangle, two ways of scattering points, 200 repeats of each.',
      body: [
        { kind: 'p', text: 'The learner fetches the outlines of Didsbury East and Didsbury West from the ONS ward boundary service, in its generalised form, as lists of grid coordinates. The shoelace formula gives their areas exactly: 3,647,598 and 3,353,073 square metres for these simplified outlines, about 7.0 square kilometres together. That is the answer to aim at. The two wards sit inside a rectangle 3.808 km by 3.536 km and fill 52.0% of it. The estimate is simple: scatter points in the rectangle, find the share that fall inside either ward, multiply by the rectangle\'s area.' },
        { kind: 'p', text: 'Random points come from Python\'s usual generator. Halton points come from a short function: write the point\'s number in base 2 and mirror the digits about the decimal point for one coordinate, do the same in base 3 for the other. Each experiment is repeated 200 times, with a different random seed or a different random shift of the Halton pattern.' },
        { kind: 'table', caption: 'Typical error when estimating the area of the two Didsbury wards, median of 200 repeats, our Python run on ONS boundaries', head: ['Points thrown', 'Random points', 'Halton points', 'Halton advantage'], rows: [
          ['100', '5.79%', '3.83%', '1.5 times'],
          ['1,000', '2.48%', '0.56%', '4.4 times'],
          ['10,000', '0.71%', '0.11%', '6.2 times'],
          ['100,000', '0.19%', '0.018%', '10.5 times']
        ] },
        { kind: 'p', text: 'With random points, a hundred times more darts buys about ten times less error: 5.79% at 100 points, 0.71% at 10,000. That square-root rule is the signature of random sampling. Halton points improve much faster, so the gap widens as the sample grows, from 1.5 times at 100 points to more than ten times at 100,000. Put another way, 1,000 Halton points (0.56%) beat 10,000 random ones (0.71%). The advantage comes from evenness, not luck, and it is largest for smooth, low-dimensional problems like this one; in problems with many dimensions it shrinks.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Drop rice on a map and count the grains inside a shape, then try placing dots in a neat pattern instead.' },
          { h3: 'Ages 11 to 15', p: 'Code the dart-throwing estimate in Python and watch the answer wobble as points are added.' },
          { h3: 'Ages 15 and up', p: 'Write the Halton sequence from scratch, repeat both methods 200 times and plot error against sample size.' }
        ] },
        { kind: 'callout', h3: 'ONS boundaries, our simulation', p: 'Ward outlines are from the ONS Open Geography Portal: contains OS data, Crown copyright and database right, Open Government Licence. They are generalised outlines, so the areas are those of the simplified shapes. The sampling and every error figure are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Sampling and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'How you choose your samples can matter more than how many you take.',
      body: [
        { kind: 'table', caption: 'From the Didsbury darts to working with AI', head: ['In the area project', 'When AI tests or estimates something'], rows: [
          ['Random error fell with the square root', 'More samples help, but slowly'],
          ['Halton points were up to 10.5 times closer', 'Well-spread test cases find more for less'],
          ['The true area was known first', 'Check a method where you know the answer'],
          ['200 repeats showed the typical error', 'One run says little about reliability'],
          ['Generalised outlines set the target', 'Be clear what exactly is being measured']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to estimate something by simulation and it will reach for random numbers, run once and report the result to six decimal places. Vibe coding puts a learner in the role of describing the program while the AI writes it; in Didsbury lessons that description includes how samples are chosen, how many runs there are and what error to expect. The same goes for AI agents that test software or search for good settings: spreading trials evenly covers more ground than chance does. Agent projects come once a learner\'s Python no longer needs propping up, usually in the later teens or as an adult, and Copilot Studio agents are one-to-one lessons only. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> for the principle and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> for the route.' },
        { kind: 'p', text: 'We have no tie to the Office for National Statistics, Ordnance Survey, Nomis or postcodes.io. Their open data made the project possible; the code and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From rice on a map to quasi-Monte Carlo',
    intro: 'We read the school year as a hint, then let the trial show the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimating, sampling and fair spreading.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps built with an AI and checked by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and simulation', p: 'Random numbers, sequences and error, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Numerical Python and agents', p: 'Simulation, estimation and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and simulation',
    h2: 'What is quasi-Monte Carlo, and how is it different from Monte Carlo?',
    intro: 'Quasi-Monte Carlo replaces random sample points with a low-discrepancy sequence, such as the Halton sequence, that fills the space evenly, so estimates usually converge much faster than with ordinary Monte Carlo.',
    p1: 'Estimating the area of the two Didsbury wards, random points were typically 0.71% out at 10,000 samples while Halton points were 0.11% out, and at 100,000 samples the Halton estimate was 10.5 times closer.',
    p2: 'Learners who have run both ask of any AI-made simulation: how were the samples chosen, and how far off could one run be?',
    closer: 'Knowing that a smarter scatter can beat a bigger one helps Didsbury teenagers question simulations an AI hands them, which is a good reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Live lessons for Didsbury, on video',
    intro: 'A laptop or desktop with a webcam and a connection fit for a video call is the whole kit.',
    cells: [
      { h3: 'Learners at the keyboard', p: 'The student writes and runs the code; our tutor watches by screen share and asks what result they expect before they press run.' },
      { h3: 'Level from the trial', p: 'A free first session tells us where to begin and which exam board, if any, applies.' },
      { h3: 'Free opener', p: 'There is no fee for lesson one, which ends with a course suggestion.' },
      { h3: 'Small matched groups', p: 'Five to ten learners at one stage, drawn from across the UK.' },
      { h3: 'Two lessons a week', p: 'Paused in the school holidays.' },
      { h3: 'Same time each week', p: 'UK clock changes are handled on our side, so your slot stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same stage who are all free at the same hour rarely live in one suburb. Online, they do not have to.' }
  },

  fees: {
    h2: 'Didsbury fees',
    intro: 'Manchester learners pay our international prices, which apply in every country except India.',
    first: 'A free full-length lesson, followed by our advice.',
    group: 'Around eight live small-group lessons a month.',
    private: 'Around eight live private lessons a month.',
    closer: 'Fees are quoted in US dollars, not pounds. Nothing is charged until the trial has fixed a course and a weekly time; holidays, absences and switching format are explained on the pricing page.'
  },

  reviewsH2: 'What Manchester families and learners around the UK say on Google',

  book: {
    h2: 'Book a free Didsbury lesson',
    intro: 'Send the learner\'s age or year group and a hobby. The trial could be a rice-on-a-map estimate, a Scratch game made with an AI, a first Python program, or a small dart-throwing simulation.',
    success: 'Thank you. We have your Didsbury request.'
  },

  faq: {
    h2: 'Didsbury questions',
    intro: 'Sampling, the area project, vibe coding, Python and practical points.',
    items: [
      { q: 'How many people live in Didsbury?', a: 'At the 2021 census, Didsbury East ward had 14,709 usual residents and Didsbury West ward 15,083. The census does not publish a single Didsbury figure.' },
      { q: 'Can Didsbury learners take Python classes online?', a: 'Yes, by live video, for ages 6 to 67 in Didsbury, East Didsbury, West Didsbury and the rest of M20.' },
      { q: 'What is the Halton sequence?', a: 'A list of points that covers a square evenly. Each coordinate comes from writing the point\'s number in a different prime base and reflecting its digits about the decimal point.' },
      { q: 'What is a low-discrepancy sequence?', a: 'A sequence designed so that any region receives close to its fair share of points, without the clumps and gaps of random sampling. Halton and Sobol sequences are well-known examples.' },
      { q: 'What does the Didsbury project involve?', a: 'Estimating the area of the two Didsbury wards by scattering points over their outline, with random points and with Halton points, and measuring the error of each over 200 repeats.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, to every age group. The learner says what the program should do, an AI drafts it, and the learner tests it.' },
      { q: 'When do learners move on to AI agents?', a: 'After Python stands on its own, which tends to be the later teens or adulthood; Copilot Studio agents are private lessons only.' },
      { q: 'Is there help for GCSE and A level?', a: 'Yes, in computer science and maths, taught for understanding. We never promise a grade.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the first. Then USD 100 a month for a group place or USD 150 a month for one-to-one.' },
      { q: 'Are lessons held in the school holidays?', a: 'No, they pause; just share the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Manchester pages',
    html: 'Each of these runs a different experiment: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-withington-manchester">Withington</a> (hexagons against squares), <a class="cg-inline-link" href="/ai-and-programming-classes-in-chorlton-manchester">Chorlton</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-wythenshawe-manchester">Wythenshawe</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stockport">Stockport</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Didsbury and Manchester',
  footerPlaces: [
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-dsb .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-dsb .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-dsb .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-dsb .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dsb .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.021em; }
.cg-root.cg-dsb .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-dsb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dsb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-dsb .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-dsb .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Manchester (E08000003). Census 2021 TS001: Didsbury East ward (E05011362) 14,709; Didsbury West ward (E05011363) 15,083 (not summed). postcodes.io places (Manchester, M20): Didsbury, East Didsbury, West Didsbury (suburban areas); M20 wards also Withington, Burnage, Old Moat, Chorlton Park. England national curriculum, GCSE and A level.',
    localProject: 'ONS Wards (December 2022) Boundaries UK BGC: Didsbury East 3,647,598 sq m, Didsbury West 3,353,073 sq m (shoelace on generalised outlines), total 7.001 sq km in a 3.808 x 3.536 km box (52.0%). Area by sampling, median error of 200 repeats, random / Halton: n 100 5.79 / 3.83%; 1,000 2.48 / 0.56%; 10,000 0.71 / 0.11%; 100,000 0.19 / 0.018% (ratios 1.5, 4.4, 6.2, 10.5). Lesson family: quasi-Monte Carlo, low-discrepancy sequences.',
    requiredMentions: [
      '14,709',
      '15,083',
      'East Didsbury',
      'West Didsbury',
      '3,647,598',
      'Halton sequence',
      'low-discrepancy',
      'quasi-Monte Carlo',
      '3,353,073'
    ],
    sources: [
      { claim: 'ONS Open Geography Portal, Wards (December 2022) Boundaries UK BGC (generalised), Open Government Licence.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 TS001 usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and outcode M20: suburban areas and wards in Manchester.', url: 'https://api.postcodes.io/outcodes/M20' }
    ],
    rejectedClaims: [
      'A single population for Didsbury: not published; the two ward figures are given separately and not added.',
      'The exact legal area of the wards: only the generalised outlines were measured, and the page says so.',
      'That Halton points always win: stated as largest for smooth, low-dimensional problems.',
      'Village, park or transport claims about Didsbury: not read from a source; not made.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
