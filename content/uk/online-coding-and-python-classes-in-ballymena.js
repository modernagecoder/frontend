'use strict';
// Ballymena (cg- town page, UK cluster Phase 8, towns band A, row 427). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: when a quick rule of thumb gives an answer, how do you
// know how far it is from the best possible one? (integer programming: set cover solved greedily, by LP relaxation for a
// lower bound, and exactly with a MILP solver in Python).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -6.320,54.845,-6.235,54.885 (6 tiles, ODbL): 11,579 ways
// tagged building (11,552 with a centre inside the box); street junctions where 3 or more drivable ways meet: 2,473.
// NISRA Census 2021 MS-A01: settlement BALLYMENA 31,205; DEA Ballymena 24,295; LGD Mid and East Antrim 138,994.
// Our run (scratchpad bym/ilp.py, ilp2.py): puzzle = the fewest junctions such that every building lies within 400 m
// (straight line) of a chosen one. 11,534 of 11,552 buildings are within 400 m of some junction (18 are not, left out).
// Greedy (always take the junction covering most uncovered buildings): 69 junctions in about 1 s. LP relaxation (HiGHS):
// 48.27, so at least 49 are needed. MILP (scipy.optimize.milp, HiGHS, 10-minute limit): best found 50, not proven optimal
// within the limit; the true minimum is therefore 49 or 50. Greedy is 19 or 20 junctions (38% to 41%) above it. A second
// run with identical coverage rows merged (9,789 distinct sets; greedy on merged rows 66) reached 51 in 7 minutes with a
// proven solver bound of 49.0, consistent with the above.
// Lesson family: integer programming, set cover, greedy versus exact, LP relaxation as a lower bound. Screened: "integer
// programming", "LP relaxation", "MILP", "set cover" 0 hits in content/uk except a passing course-page mention of set
// cover; greedy algorithms are mentioned widely, the solver and the bound are new. Mid and East Antrim page = compound growth.
// Place facts: postcodes.io outcodes BT42 and BT43 list electoral wards including Academy, Ardeevin, Ballee and Harryville,
// Ballykeel, Braidwater, Castle Demesne, Fair Green, Galgorm, Kirkinriola, Park (the districts also reach Ahoghill,
// Broughshane and Cullybackey wards).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BALLYMENA', label: 'Ballymena', blurb: 'Online coding and Python classes for Ballymena, with a Python project that solves a real coverage puzzle both quickly and exactly to see how far a rule of thumb falls short.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-ballymena',
  code: 'bmy',
  accent: '#5B1B6B',
  accentRationale: 'Ballymena: a deep damson purple (9.33:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Ballymena',
    eyebrow: 'Ballymena, Mid and East Antrim, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Mid and East Antrim' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Mid and East Antrim', href: '/coding-classes-in-mid-and-east-antrim' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ballymena, Northern Ireland',
  title: 'Online Coding and Python Classes in Ballymena | AI, 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Ballymena, Galgorm, Harryville and Broughshane learners in County Antrim, aged 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Ballymena, with an integer programming project that measures how far a quick greedy answer is from the true optimum.',
  twitterDescription: 'Ballymena online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Ballymena',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Ballymena and Mid and East Antrim, taught live with problem solving first.'
  },

  h1: 'Online coding and Python classes in Ballymena',
  capsuleQ: 'Which are the best online coding and Python classes in Ballymena?',
  capsule: 'Census 2021 recorded 31,205 usual residents in the Ballymena settlement, according to NISRA, part of Mid and East Antrim with its 138,994 people. Galgorm, Ballee and Harryville, Ballykeel, Ardeevin, Fair Green and Kirkinriola are among the electoral wards listed for the BT42 and BT43 districts. Anyone aged six to 67 can study coding, Python, AI, vibe coding and maths on camera with an India-based tutor, alone or in a small class of five to ten matched by level. We teach problem solving before tools, so a learner can tell a good-enough answer from an optimal one. The opening lesson costs nothing, and we close it by naming the course we would choose. The Ballymena project sets a coverage puzzle on 11,552 mapped buildings, solves it with a quick greedy rule and with an exact integer programming solver in Python, and measures the gap. Carrying on after the trial costs USD 100 a month in a class or USD 150 a month one-to-one.',
  lead: 'Many real decisions are puzzles of the form "pick the fewest things that still cover everything": sites for bins or chargers, shifts that cover every hour, tests that check every feature. The fast way is a greedy rule, grabbing whatever covers the most right now. It is quick, but is it any good? Integer programming answers that. A solver searches for the true minimum, and a clever trick called the LP relaxation proves how low the answer could possibly go. This project poses one such puzzle on Ballymena as mapped on OpenStreetMap: choose the fewest street junctions so that every building lies within 400 m of one.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Ballymena?',

  picks: {
    eyebrow: 'Ballymena course picks',
    h2: 'Ballymena courses in problem solving, Python and AI',
    intro: 'Four ways in, by age. Whichever you pick, the first live lesson is free and we take no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: covering puzzles, quick guesses and proving an answer cannot be beaten.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and properly tested.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to optimisation, including the Ballymena coverage puzzle.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, optimisation, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ballymena and Mid and East Antrim',
      h2: 'Ballymena, Galgorm, Harryville and Ballykeel',
      intro: 'Census 2021 counts from NISRA, quoted exactly and never summed.',
      body: [
        { kind: 'table', caption: 'Ballymena in Census 2021, usual residents (NISRA MS-A01)', head: ['Area', 'Type of area', 'Usual residents'], rows: [
          ['Ballymena', 'Settlement', '31,205'],
          ['Ballymena', 'District electoral area', '24,295'],
          ['Mid and East Antrim', 'Council area', '138,994']
        ] },
        { kind: 'p', text: 'The settlement and the district electoral area of the same name cover different ground, so their totals differ, and NISRA marks settlement figures as approximations. Postcodes.io lists Academy, Ardeevin, Ballee and Harryville, Ballykeel, Braidwater, Castle Demesne, Fair Green, Galgorm, Kirkinriola and Park among the electoral wards of BT42 and BT43, districts that also take in Ahoghill, Broughshane and Cullybackey. Lessons follow the Northern Ireland Curriculum from P1 to Year 14, with CCEA GCSE and A level support in Digital Technology, Computer Science and Maths; send the holiday dates and we will work round them.' },
        { kind: 'callout', h3: 'Mid and East Antrim and Northern Ireland', p: 'See <a class="cg-inline-link" href="/coding-classes-in-mid-and-east-antrim">coding classes in Mid and East Antrim</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a>. Why we teach problem solving before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ballymena project',
      h2: 'Greedy against exact: an integer programming puzzle on Ballymena\'s map',
      intro: 'Fewest junctions, every building within 400 m, three ways to answer, and a proof of how good an answer can be.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data over Ballymena and finds 2,473 street junctions where three or more roads meet, and 11,552 buildings. For each building Python lists every junction within 400 m in a straight line; 11,534 buildings have at least one, and the 18 that do not are set aside. The puzzle is a classic called set cover: choose as few junctions as possible so that every remaining building has a chosen junction within 400 m. It is a thought experiment about coverage, the same shape as siting bins or chargers, not a plan for anything real.' },
        { kind: 'table', caption: 'Three ways to solve the Ballymena coverage puzzle, our Python run on OpenStreetMap data', head: ['Method', 'Junctions needed', 'What it tells you'], rows: [
          ['Greedy rule', '69', 'A good answer in about a second'],
          ['LP relaxation (HiGHS)', '48.27', 'No answer can use fewer than 49'],
          ['Integer programming (scipy milp, 10-minute limit)', '50', 'Smallest cover found; the true minimum is 49 or 50']
        ] },
        { kind: 'p', text: 'The greedy rule, always taking the junction that covers the most still-uncovered buildings, finishes almost instantly with 69. The solver, scipy\'s milp using the HiGHS engine, searches much harder and finds a cover of 50. The LP relaxation, the same problem with the rule "each junction is fully chosen or not" loosened to allow fractions, has a smallest total of 48.27, and since a real answer must be a whole number of junctions, nothing below 49 is possible. So the greedy answer uses 19 or 20 more junctions than necessary, roughly 40% extra, and we can say that with certainty without ever finding the exact optimum.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Place counters on a grid so every square is next to one, first quickly, then with the fewest you can manage.' },
          { h3: 'Years 8 to 10', p: 'Write the greedy rule in Python for a small patch of Ballymena and count the junctions it picks.' },
          { h3: 'Years 11 and up', p: 'Set up the integer program with scipy, solve it, and use the LP relaxation to prove a lower bound.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our puzzle', p: 'Buildings and streets are from OpenStreetMap and its contributors under the Open Database Licence. The junction list, distances, puzzle and every result are our own work; straight-line distances ignore walls, rivers and roads.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Answers and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Speed is worth having only when you also know the size of the shortfall.',
      body: [
        { kind: 'table', caption: 'From the Ballymena coverage puzzle to working with AI', head: ['In the optimisation project', 'When AI solves a problem for you'], rows: [
          ['Greedy gave 69 in a second', 'Quick heuristics are often what an AI writes'],
          ['The solver found 50', 'A better method can cut the cost a lot'],
          ['The relaxation proved at least 49', 'Bounds tell you how good an answer is'],
          ['The exact optimum stayed unproven', 'Some certainty is enough to decide'],
          ['18 buildings could not be covered', 'Check which cases a method silently drops']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for code to "pick the fewest locations" and you will very often get a greedy loop, which runs and looks convincing. In vibe coding the learner describes the program and the AI writes it; our Ballymena learners then ask how far the answer could be from the optimum, and compute a bound to find out. AI agents that make choices with real costs, scheduling people or placing resources, should report that kind of gap too. Agent building comes after a learner can write Python without support, commonly in the sixth form or as an adult, and Copilot Studio agents are kept to private lessons. The pathway is described on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents for UK students</a>; the thinking behind it on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The data behind this page is open data from OpenStreetMap, NISRA and postcodes.io, none of whom is linked to us; the puzzle, the code and any slip are Modern Age Coders\' own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counter puzzles to integer programs',
    intro: 'A school year gives a starting guess; the free lesson pins it down.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Covering puzzles, quick guesses and checking for better.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and small apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and optimisation', p: 'Algorithms, solvers and bounds beside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Python for real decisions', p: 'Optimisation, data and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and optimisation',
    h2: 'What is integer programming, and how can Python tell you how good a greedy answer is?',
    intro: 'Integer programming finds optimal whole-number choices under constraints, and its LP relaxation, the same problem with fractions allowed, gives a lower bound that shows how far any quick greedy answer could be from the optimum.',
    p1: 'On a coverage puzzle over 11,552 mapped Ballymena buildings, a greedy rule needed 69 junctions, an integer programming solver in Python found 50, and the LP relaxation proved that no answer could use fewer than 49.',
    p2: 'Learners who have solved it ask of any AI-written heuristic: how far from optimal could this be, and can we bound it?',
    closer: 'Knowing how to check a quick answer keeps Ballymena teenagers in charge of AI-written code, a solid reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Galgorm to Harryville, online',
    intro: 'Any computer with a webcam and a connection good enough for video will do.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'Every line and prompt is typed by the student, and the tutor, watching on screen share, keeps asking whether a cheaper answer exists.' },
      { h3: 'Where to begin', p: 'Worked out in the trial, and any CCEA exam goes straight into the plan.' },
      { h3: 'Taster at no cost', p: 'We teach a full opening session for free and recommend a course afterwards.' },
      { h3: 'Classes by ability', p: 'A group means five to ten learners working at one level, from all over the UK.' },
      { h3: 'Twice a week', p: 'Paused for school holidays.' },
      { h3: 'Steady time', p: 'Our tutors adjust for UK clock changes, so your slot stays the same.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening and living near each other, are hard to find. Online, they need not be neighbours.' }
  },

  fees: {
    h2: 'Ballymena fees',
    intro: 'Ballymena learners pay our international prices, the rates for every country except India.',
    first: 'One whole lesson free, then our advice.',
    group: 'Roughly eight live group lessons each month.',
    private: 'Roughly eight live private lessons each month.',
    closer: 'Ballymena families pay in US dollars, with no sterling list, from the point the trial has agreed a course and a time. Holiday breaks, missed sessions and format swaps are all laid out on the pricing page.'
  },

  reviewsH2: 'Antrim families and learners elsewhere in the UK, reviewing us on Google',

  book: {
    h2: 'Book a free Ballymena lesson',
    intro: 'Share the learner\'s age or school year and a favourite interest. The trial might be a counter-covering puzzle, a Scratch game built with an AI, early Python, or a small optimisation on real map data.',
    success: 'Thank you. Your Ballymena request is in.'
  },

  faq: {
    h2: 'Ballymena questions',
    intro: 'Solvers, bounds, the Ballymena puzzle, vibe coding and lesson arrangements.',
    items: [
      { q: 'What is the population of Ballymena?', a: 'NISRA counted 31,205 usual residents in the Ballymena settlement at the 2021 census.' },
      { q: 'Are online Python classes available in Ballymena?', a: 'Classes run over live video, so learners aged 6 to 67 in Ahoghill, Broughshane or anywhere else in Mid and East Antrim can join.' },
      { q: 'What is the set cover problem?', a: 'Choosing the smallest collection of options that together cover every item. In our Ballymena puzzle the options are junctions and the items are buildings within 400 m.' },
      { q: 'What is an LP relaxation?', a: 'The same optimisation with whole-number choices loosened to fractions. It is quick to solve and gives a bound: here 48.27, so no cover can use fewer than 49 junctions.' },
      { q: 'What does the Ballymena project involve?', a: 'Setting a coverage puzzle on OpenStreetMap buildings and junctions, then solving it greedily, exactly with scipy\'s milp solver, and by LP relaxation to measure the gap.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at every age; learners describe the program, then test and correct what the AI writes.' },
      { q: 'When do learners build AI agents?', a: 'When a learner can build small Python tools unaided, typically sixth-form age or older; Copilot Studio is private-only.' },
      { q: 'Do you support CCEA GCSE and A level?', a: 'Yes, in Digital Technology, Computer Science and Maths, taught for understanding without promised grades.' },
      { q: 'How much are the classes?', a: 'We charge nothing for the taster. Regular classes are USD 100 per month grouped, or USD 150 per month individually.' },
      { q: 'Do lessons pause in the holidays?', a: 'They stop for school holidays; share the dates and we plan round them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Northern Ireland pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/coding-classes-in-mid-and-east-antrim">Mid and East Antrim</a> (growth rates in an old gasworks record), <a class="cg-inline-link" href="/coding-classes-in-antrim-and-newtownabbey">Antrim and Newtownabbey</a>, <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-newtownards">Newtownards</a>. Everywhere else is on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ballymena and Mid and East Antrim',
  footerPlaces: [
    { href: '/coding-classes-in-mid-and-east-antrim', label: 'Mid and East Antrim' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bmy .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-bmy .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-bmy .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-bmy .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bmy .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-bmy .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-bmy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bmy .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bmy .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-bmy .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Mid and East Antrim (N09000008). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: settlement BALLYMENA 31,205; DEA Ballymena 24,295; LGD Mid and East Antrim 138,994. postcodes.io outcodes BT42 and BT43 wards include Academy, Ardeevin, Ballee and Harryville, Ballykeel, Braidwater, Castle Demesne, Fair Green, Galgorm, Kirkinriola, Park.',
    localProject: 'OSM API 0.6 bbox -6.320,54.845,-6.235,54.885: 2,473 junctions (3+ drivable ways), 11,552 buildings, 11,534 within 400 m of a junction. Set cover at 400 m: greedy 69 (about 1 s); LP relaxation 48.27 (so at least 49); scipy milp with HiGHS, 10-minute limit, best 50, not proven optimal; true minimum 49 or 50. Lesson family: integer programming, set cover, greedy vs exact, LP relaxation bound.',
    requiredMentions: [
      '31,205',
      '24,295',
      '138,994',
      '11,552',
      'Galgorm',
      'Ballee and Harryville',
      'Ballykeel',
      'Ardeevin',
      'Kirkinriola',
      'integer programming',
      'LP relaxation'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual residents by settlement, DEA and LGD.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap buildings and streets in Ballymena, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io outcodes BT42 and BT43: administrative wards listed for the districts.', url: 'https://api.postcodes.io/outcodes/BT43' }
    ],
    rejectedClaims: [
      'Linen, market town or castle history: not read from a source; not claimed.',
      'That the chosen junctions are a proposal for any real service: stated as a thought experiment.',
      'An exact optimum: not proven within the solver time limit; reported as 49 or 50.',
      'That the BT42 and BT43 wards are all inside the Ballymena settlement: not claimed.',
      'Named schools, transfer test advice and term dates: none.',
      'Sterling prices: none.'
    ]
  }
};
