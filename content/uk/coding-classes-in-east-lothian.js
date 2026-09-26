'use strict';
// East Lothian (cg- council area page, UK cluster Phase 7, row 263). One council. Spine: why do predators and prey rise
// and fall in cycles? Anchors (read raw 26 September 2026): Scottish Seabird Centre, North Berwick (seabird.org): live
// cameras on "the amazing Bass Rock, one of the world's largest Northern gannet colonies". Historic Environment Scotland
// LB14738, Bass Rock lighthouse, Category C: "David Alan Stevenson, 1902"; "built on fortified outcrop contemporary with
// Bass Rock Castle"; "Erected on site of the Governor's House of Bass Rock Castle".
// Our model (scratchpad elo/lv.py; every parameter invented, not Bass Rock data): Lotka-Volterra fish x and gannets y,
// dx/dt = x - 0.02xy, dy/dt = 0.01xy - 0.8y, start 60 and 40; equilibrium fish 80, gannets 50. RK4 with step 0.01 over
// 50 years: fish peaks every 7.09 years, gannet peaks 1.52 years after fish peaks; fish 54.2 to 112.9, gannets 35.4 to
// 68.1; conserved quantity H = 0.01x - 0.8 ln x + 0.02y - ln y drifts 0.00 per cent. Euler step 0.01: fish 49.6 to
// 120.2, H drift +0.47 per cent. Euler step 0.05: fish 24.9 to 175.7, fish peaks grow from 120.7 to 175.7, H drift +5.98
// per cent.
// Lesson family: predator-prey (Lotka-Volterra) cycles and lag, with a conserved quantity as a test of the numerical
// method; screened (Lotka: 0 hits). Euler drift appeared once for a pendulum in Leidschendam, a different system and
// point.
// Place facts: NRS, Scotland's Census 2022 rounded estimates: East Lothian S12000010 112,300; 48,800 households; 165.3 per
// square kilometre; ages 0 to 14 18,700 (16.7 per cent), 65+ 23,800 (21.2 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'EAST LOTHIAN', blurb: 'Musselburgh, Haddington, Dunbar and North Berwick, and a Bass Rock lesson on why predators and prey rise and fall in cycles.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-east-lothian',
  code: 'elo',
  accent: '#224C4A',
  accentRationale: 'East Lothian: a Firth of Forth teal from the solver (7.69:1 on the darkest paper tint), greener and darker than the Aberdeenshire and Norfolk sea colours',
  pageType: 'governorate',
  place: {
    name: 'East Lothian',
    eyebrow: 'East Lothian',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'East Lothian',
  title: 'Coding Classes in East Lothian | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across East Lothian, from Musselburgh, Tranent and Prestonpans to Haddington, Dunbar and North Berwick.',
  ogDescription: 'Coding classes for all of East Lothian, and a Bass Rock project: model gannets and fish with the Lotka-Volterra equations in Python, and catch a method that drifts.',
  twitterDescription: 'East Lothian coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for East Lothian',
    description: 'Ability-placed online coding, Python, modelling and mathematics for children, teenagers and adults across East Lothian, taught live in English.'
  },

  h1: 'Coding classes in East Lothian',
  capsuleQ: 'What are the best coding classes in East Lothian?',
  capsule: 'East Lothian is a single council area, home to about 112,300 people in roughly 48,800 households at the 2022 census, at 165.3 people per square kilometre. Musselburgh is the largest town, followed by Tranent, Prestonpans, Haddington and Dunbar, with North Berwick on the coast. Our teachers are in India and teach in real time on camera; a free first lesson sets the level for every learner, whether they are in Primary 1, S6 or long past school. Anyone aged 6 to 67 can study coding, Python or maths, alone with a teacher or among five to ten classmates. The East Lothian project looks out to the Bass Rock and its gannets. A first lesson is free of charge; continuing is USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'The Scottish Seabird Centre in North Berwick trains live cameras on the Bass Rock, which it calls one of the world\'s largest Northern gannet colonies, and Historic Environment Scotland lists the lighthouse David Alan Stevenson built on the rock in 1902. Gannets eat fish, and predator and prey numbers affect each other: more fish feed more birds, more birds eat down the fish, fewer fish mean fewer birds, and the cycle repeats. Two short equations, the Lotka-Volterra model, capture that loop. This page\'s project runs them in Python with invented numbers, watches the cycles and the lag between them, and uses a quantity the equations should keep constant to catch a numerical method that quietly goes wrong.',
  wa: 'Hello Modern Age Coders, we are in East Lothian and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for East Lothian',
    h2: 'Where East Lothian learners begin',
    intro: 'A P4 pupil in Dunbar who loves seabirds, an S1 in Tranent starting Python, an S5 in Haddington taking Higher Maths, and an adult in Musselburgh building models at work. All four start the same way, with a lesson that costs nothing.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including simple animal population games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with growth, rates of change and graphs built in Python.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, with calculus and rates of change that models like this rely on.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, up to simulations and models checked properly.' }
    ]
  },

  sections: [
    {
      id: 'east-lothian', tint: '', eyebrow: 'East Lothian in figures',
      h2: 'About 112,300 people in East Lothian',
      intro: 'Council-wide figures below come from the first 2022 census results, which NRS rounds to the nearest hundred. Town sizes are NRS locality estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'East Lothian localities above 2,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Musselburgh', '21,100', 'Cockenzie', '5,370'],
          ['Tranent', '11,910', 'Wallyford', '3,370'],
          ['Prestonpans', '10,460', 'Gullane', '2,810'],
          ['Haddington', '10,360', 'Longniddry', '2,340'],
          ['Dunbar', '10,270', 'Ormiston', '2,110'],
          ['North Berwick', '7,840', '', '']
        ] },
        { kind: 'p', text: 'East Lothian has 165.3 residents per square kilometre, well above the Scottish 69.8. Summing the age bands ourselves, we get 16.7 per cent of East Lothian residents under 15, against 15.3 per cent nationally, and 21.2 per cent aged 65 and over, against 20.1. East Linton is the next town after the table. East Lothian Council sets the school terms; we have not read its calendar and arrange breaks with each family.' },
        { kind: 'callout', h3: 'Edinburgh next door', p: 'The capital has its own page, <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>. For Scottish exams, see <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East Lothian project',
      h2: 'Gannets, fish and a cycle that repeats',
      intro: 'Two equations, two ways of solving them, and a number that should never change.',
      body: [
        { kind: 'p', text: 'The model is invented, not a survey of the Bass Rock. Fish grow on their own and are eaten when they meet gannets; gannets thrive when they catch fish and decline without them. In symbols, the fish change at a rate of x minus 0.02xy and the gannets at 0.01xy minus 0.8y. Starting from 60 units of fish and 40 of gannets, the learner steps the equations forward in time with a method called RK4, in hundredths of a year, for fifty years.' },
        { kind: 'table', caption: 'Our Lotka-Volterra runs over fifty years, 26 September 2026', head: ['Method and step', 'Fish range', 'Gannet range', 'Drift in the conserved quantity'], rows: [
          ['RK4, step 0.01 year', '54.2 to 112.9', '35.4 to 68.1', 'None to two decimal places'],
          ['Euler, step 0.01 year', '49.6 to 120.2', '33.0 to 72.4', '+0.47 per cent'],
          ['Euler, step 0.05 year', '24.9 to 175.7', '20.4 to 104.7', '+5.98 per cent']
        ] },
        { kind: 'p', text: 'With RK4 the two populations rise and fall forever in a steady loop. Fish peak every 7.09 years, and gannets peak about 1.52 years after each fish peak: the predators need time to breed on the back of plenty, by which point the fish are already falling. Neither ever settles at the balance point of 80 fish and 50 gannets unless it starts there. The lag between prey and predator peaks is the signature of this kind of system, and ecologists look for it in real records.' },
        { kind: 'p', text: 'Now the check. These equations have a hidden quantity that stays exactly the same along any true solution, a mixture of the two populations and their logarithms. RK4 keeps it constant. The simpler Euler method, which takes each step in a straight line, lets it creep upwards, and with larger steps the cycles spiral outwards: fish peaks grow from 120.7 to 175.7 over the fifty years. The graph still looks like a plausible ecosystem, yet it is an artefact of the method. A quantity that must not change is one of the strongest tests a simulation can have.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a counting game with beads for fish and counters for birds, round by round, and record how both numbers change.' },
          { h3: 'Ages 11 to 15', p: 'Write the Euler step in Python, plot fish and gannets over time, and measure the gap between their peaks.' },
          { h3: 'Ages 15 and up', p: 'Add RK4, compute the conserved quantity at every step, and compare how each method behaves as the step size grows.' }
        ] },
        { kind: 'callout', h3: 'Real place, invented numbers', p: 'The Bass Rock facts come from the Scottish Seabird Centre and Historic Environment Scotland. The model, its parameters and every result are invented for teaching; they do not describe the real gannet colony or the fish it feeds on.' }
      ]
    },
    {
      id: 'bass-rock', tint: 'deep', eyebrow: 'Why the Bass Rock',
      h2: 'A gannet colony and a Stevenson lighthouse',
      intro: 'The East Lothian link, from the people who watch and list it.',
      body: [
        { kind: 'table', caption: 'The Bass Rock in its sources', head: ['Source', 'What it says'], rows: [
          ['Scottish Seabird Centre', 'Its live cameras show the Bass Rock, one of the world\'s largest Northern gannet colonies.'],
          ['HES listing LB14738', 'A lighthouse by David Alan Stevenson, 1902, Category C.'],
          ['HES listing LB14738', 'Built on a fortified outcrop, on the site of the Governor\'s House of Bass Rock Castle.']
        ] },
        { kind: 'p', text: 'Models of populations that feed on each other are used for fish stocks, disease spread, pests and crops, and even for competing apps and products. The lessons of this project, cycles, lags and the need to check the method, carry straight across. An East Lothian student who has watched a simulation invent a boom that does not exist has learned to test a model before believing its story.' },
        { kind: 'p', text: 'We have no link with the Scottish Seabird Centre, Historic Environment Scotland or East Lothian Council. What the two bodies publish belongs to them; the equations, numbers and errors on this page belong to us.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> lies west. For coding exams, see <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page lists every council.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From population games to simulation',
    intro: 'The free lesson decides the first step. Stage suggests, ability decides.',
    cols: [
      { band: 'P1 to P4', h3: 'Counting creatures', p: 'Block coding games where animals appear, move and multiply.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Growth in Python', p: 'Typed Python and maths with growth, rates and graphs over time.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Modelling change', p: 'Rates of change, calculus and simulation, alongside National 5, Higher and Advanced Higher Maths.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Models you can trust', p: 'Python for adults who build simulations and forecasts and need them checked.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and simulations',
    h2: 'An AI can write a population model in seconds. Will it test whether the answer drifts?',
    intro: 'A simulation can look right and still be wrong.',
    p1: 'Ask an assistant for a predator-prey simulation and it will often write the simplest version, the Euler method, and draw a convincing graph. With a large step the cycles grow every time round, and the graph shows a booming ecosystem that the equations themselves do not predict. Nothing in the picture warns you.',
    p2: 'An East Lothian student who has tracked the conserved quantity knows how to catch this: find something that should not change, and check it. That habit applies to any model an AI helps build, in science, business or engineering.',
    closer: 'That is why coding still matters for an East Lothian teenager in 2026: it teaches you to question a simulation before trusting it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'Musselburgh to Dunbar, online',
    intro: 'East Lothian has towns and villages of every size, and an evening class in Edinburgh means getting there and back. Lessons at home need no journey.',
    cells: [
      { h3: 'Right at home', p: 'A flat in Musselburgh, a house in Gullane, a cottage near East Linton. The pupil codes and the teacher follows the shared screen.' },
      { h3: 'Scottish stages spoken here', p: 'P1 to P7, S1 to S6, National 5, Higher, Advanced Higher: the terms East Lothian pupils use are the ones we use, in English.' },
      { h3: 'First lesson free', p: 'Real coding from the first minute, then our view of where the learner should start. No card details are asked for.' },
      { h3: 'Classmates at your stage', p: 'Five to ten learners working at one level, drawn from many countries.' },
      { h3: 'School holiday breaks', p: 'Two lessons a week during term; we pause for the holidays.' },
      { h3: 'UK time, all year', p: 'We book your lesson in UK time and hold it there through the clock changes, while teachers in India time adjust their side.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Five learners at one stage free on the same evening are rarely neighbours, even in Musselburgh. Grouping by level lets a pupil in Ormiston or Longniddry join the right class.' }
  },

  fees: {
    h2: 'Fees in East Lothian',
    intro: 'A learner in Tranent pays what one in North Berwick pays, the rate we charge in every country outside India.',
    first: 'A full lesson of real work, then a suggested level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Fees are set in US dollars; there are no sterling prices. We bill only once the free lesson has fixed a course and a weekly time, and the pricing page covers holidays, missed lessons and changes of format.'
  },

  reviewsH2: 'Google reviews from parents and learners',

  book: {
    h2: 'Book a free East Lothian lesson',
    intro: 'Tell us who is learning, their P or S stage (or an adult goal), and what excites them. A first lesson could be a Scratch animal game, a Python growth graph, or the gannet model on this page.',
    success: 'Thank you. Your East Lothian request has been received.'
  },

  faq: {
    h2: 'East Lothian questions',
    intro: 'The council area, the Bass Rock project and practical details.',
    items: [
      { q: 'How many people live in East Lothian?', a: 'The 2022 census put it at about 112,300 residents living in roughly 48,800 households, as rounded by NRS.' },
      { q: 'What are the largest towns in East Lothian?', a: 'By NRS mid-2020 locality estimates: Musselburgh 21,100, Tranent 11,910, Prestonpans 10,460, Haddington 10,360 and Dunbar 10,270.' },
      { q: 'What is the Bass Rock project?', a: 'Learners model gannets and fish with the Lotka-Volterra equations in Python, using invented numbers, find cycles about 7.1 years long with gannets peaking 1.5 years after fish, and use a conserved quantity to show the simple Euler method drifts.' },
      { q: 'What are the Lotka-Volterra equations?', a: 'Two equations for how a predator and its prey affect each other\'s numbers. They produce repeating cycles in which the predator peaks after the prey.' },
      { q: 'Is the Bass Rock a gannet colony?', a: 'The Scottish Seabird Centre describes it as one of the world\'s largest Northern gannet colonies, and shows it on live cameras.' },
      { q: 'Are lessons held in East Lothian?', a: 'No. Every class runs over video, so a pupil in Gullane joins exactly as one in Wallyford does.' },
      { q: 'Do you teach Higher Maths?', a: 'Yes, from National 5 through Higher, with dedicated pages for both; the aim is real understanding, and nobody can promise a grade.' },
      { q: 'What ages can learn?', a: 'From 6 up to 67. Younger children drag blocks, most move to Python near P6, secondary pupils add modelling and exam maths, and adults start Python at any point.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. After that it is USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do you pause for East Lothian school holidays?', a: 'Yes. Tell us the dates your East Lothian school gives you and lessons stop for those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near East Lothian',
    html: 'Look west to <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> or browse every council on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'East Lothian and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/higher-maths-tuition-online', label: 'Higher Maths' }
  ],

  personalityCss: `
.cg-root.cg-elo .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-elo .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-elo .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-elo .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-elo .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-elo .cg-table caption { font-weight: 600; font-style: italic; text-align: left; }
.cg-root.cg-elo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-elo .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-elo .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-elo .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Lothian (S12000010), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 112,300 (females 58,500, males 53,800); households 48,800; density 165.3 per square kilometre (Scotland 69.8); ages 0 to 14 18,700 (16.7 per cent), 65+ 23,800 (21.2 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Musselburgh 21,100; Tranent 11,910; Prestonpans 10,460; Haddington 10,360; Dunbar 10,270; North Berwick 7,840; Cockenzie 5,370; Wallyford 3,370; Gullane 2,810; Longniddry 2,340; Ormiston 2,110; East Linton 1,790. Scottish Seabird Centre: "live panoramic views of the amazing Bass Rock, one of the world\'s largest Northern gannet colonies". HES LB14738 (Category C), Bass Rock lighthouse: "David Alan Stevenson, 1902"; "built on fortified outcrop contemporary with Bass Rock Castle"; "Erected on site of the Governor\'s House of Bass Rock Castle".',
    localProject: 'Lotka-Volterra with invented parameters a 1.0, b 0.02, d 0.01, g 0.8; start fish 60, gannets 40; equilibrium 80 and 50. RK4 dt 0.01, 50 years: fish peaks 2.86, 9.95, 17.05, 24.14 (period 7.09), gannet peaks 4.38, 11.47, 18.57, 25.66 (lag 1.52); fish 54.2 to 112.9; gannets 35.4 to 68.1; H drift 0.00 per cent. Euler dt 0.01: fish 49.6 to 120.2, gannets 33.0 to 72.4, H +0.47 per cent. Euler dt 0.05: fish 24.9 to 175.7, gannets 20.4 to 104.7, H +5.98 per cent; fish peaks 120.7 rising to 175.7. Page labels model as invented. AI angle: plausible-looking drifting simulations. Lesson family: predator-prey cycles, lag, conserved quantity as integrator test.',
    requiredMentions: [
      '112,300',
      '48,800',
      'Bass Rock',
      'Lotka-Volterra',
      'LB14738',
      'Tranent',
      'Prestonpans',
      'Haddington',
      'North Berwick',
      'Cockenzie',
      'Wallyford',
      'Gullane'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Scottish Seabird Centre: Bass Rock, one of the world\'s largest Northern gannet colonies.', url: 'https://www.seabird.org/' },
      { claim: 'Historic Environment Scotland, LB14738: Bass Rock lighthouse.', url: 'https://portal.historicenvironment.scot/designation/LB14738' }
    ],
    rejectedClaims: [
      'Gannet counts, fish stocks or disease effects at the Bass Rock: not read, not claimed; the model is invented.',
      'John Muir and the National Museum of Flight: not researched for this page.',
      'That real gannet and fish numbers follow Lotka-Volterra cycles: not claimed.',
      'East Lothian school term dates: none read.',
      'Named East Lothian schools: none named.',
      'Boat trip details: not needed.'
    ]
  }
};
