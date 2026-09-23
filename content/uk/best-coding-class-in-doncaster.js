'use strict';
// Doncaster (cg- city page, UK cluster Phase 4). Spine: when you cannot try every answer, search cleverly and say how.
// Facility location (the p-median problem) solved by greedy search, hill climbing and simulated annealing over
// Doncaster's 199 lower layer super output areas: Census 2021 TS001 usual residents by LSOA (Nomis NM_2021_1,
// E08000017TYPE151) and ONS LSOA 2021 population weighted centroids (ArcGIS LSOA_PopCentroids_EW_2021_V4), read 23
// September 2026 (scratchpad dnc/anneal.py). Hubs chosen among the 199 centroids; cost = resident-weighted mean
// straight-line distance to the nearest hub. Centroids span 28.2 km. Ten hubs: C(199,10) = 2.13e16 possible sets.
// 2,000 random sets: best 2.015 km, median 2.863, worst 5.696. Greedy: 1.822. Hill climbing (swap moves) from 10
// random starts: best 1.767, worst 1.820, 8 distinct results, about 8,490 cost evaluations each. Simulated annealing,
// 10 seeds x 40,000 steps (temperature 0.5 to 0.001, geometric): best 1.767, worst 1.779, 7 distinct. Only 2,000
// steps: best 1.781, worst 1.863. Started cold: best 1.767, worst 1.799. Best set: 67.4 percent of residents within
// 2 km of a hub, 96.5 percent within 5 km, farthest 6.47 km. Greedy by number of hubs: 1 6.417 km, 3 4.160, 5 2.973,
// 10 1.822, 15 1.335. LSOA counts are used as weights only and never summed on the page.
// Lesson family: simulated annealing and heuristic optimisation (combinatorial explosion, greedy, local search,
// escaping local minima, cooling schedule, repeatability across seeds). Screened 23 September 2026: simulated
// annealing and hill climbing 0 hits; distinct from Bristol Voronoi (partitioning given sites) and Rathfarnham
// travelling salesman.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Doncaster E08000017: TS001 308,106 usual residents,
// 303,172 in households, 4,934 in communal establishments; TS007A 16,942 aged 4 and under (5.5 percent), 18,119 aged
// 5 to 9 (5.9), 16,214 aged 20 to 24 (5.3, England 6.0), 22,003 aged 55 to 59 (7.1, England 6.7); TS068 52,064
// students of 291,164 aged 5 and over (17.9 percent, England 20.4); TS006 542.4 usual residents per square km
// (England 433.5). National Railway Museum: Mallard, an A4 class locomotive designed by Sir Nigel Gresley, built in
// March 1938, reached 126 mph down Stoke Bank on 3 July 1938, a steam record never surpassed; the A4 shape was honed
// in a wind tunnel; Mallard was the 28th of 35 A4s; Gresley (1876 to 1941), LNER Chief Mechanical Engineer, is
// photographed at the Doncaster Works with the A4 named after him. The museum pages do not say where Mallard was
// built, so the page does not claim it.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'DONCASTER', blurb: 'The railway city on the Don, with a project that places ten hubs for 199 neighbourhoods when checking every option would take centuries.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-doncaster',
  code: 'dnc',
  accent: '#4C2E46',
  accentRationale: 'Doncaster: an aubergine from the solver (9.54:1 on every paper tint, dE 7.9 from the nearest used accent), duskier than the Dundee plum and browner than the Sunderland purple',
  pageType: 'city',
  place: {
    name: 'Doncaster',
    eyebrow: 'Doncaster, South Yorkshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Doncaster' },
      { type: 'AdministrativeArea', name: 'South Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Doncaster, England',
  title: 'Best Coding Classes in Doncaster | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Doncaster learners aged 6 to 67, from Bessacarr and Balby to Thorne and Mexborough. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Doncaster, on a page that uses simulated annealing to place ten hubs for 199 neighbourhoods when checking every option is impossible.',
  twitterDescription: 'Doncaster learners from six to sixty-seven can study coding, Python and AI live online with us, beginning with a free lesson.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Doncaster Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, algorithms, AI and mathematics taught live online in English to Doncaster children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Doncaster',
  capsuleQ: 'What are the best coding classes in Doncaster?',
  capsule: 'The 2021 census counted 308,106 usual residents in the Doncaster borough, and 7.1% of them were aged 55 to 59, against 6.7% in England. The National Railway Museum shows Sir Nigel Gresley, designer of the record-breaking locomotive Mallard, photographed at the Doncaster Works. Doncaster learners from six to sixty-seven join our teachers live on screen, either in a group of five to ten at the same level or one to one, with lessons arranged in UK hours by our team in India. The first lesson is free; after it a group place costs USD 100 a month and private teaching USD 150.',
  lead: 'Suppose Doncaster wanted ten study hubs, placed so that the average resident lives as close as possible to one. The census divides the borough into 199 neighbourhoods, and there are about 21 million billion ways to choose ten of them. No computer can try them all. Pick ten at random and the average trip is about 2.9 kilometres. Add hubs one at a time, always taking the most helpful, and it falls to 1.822. Simulated annealing does better, 1.767, by sometimes accepting a worse arrangement on purpose so that it can escape a dead end, then cooling until it settles. Our teenagers write all three and learn to report not just the answer but how sure they can be of it.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Doncaster.',

  picks: {
    eyebrow: 'Course picks for Doncaster',
    h2: 'Four courses for the railway city',
    intro: 'Follow the learner\'s interests. Each course starts with a free live lesson, and booking it never asks for a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Puzzles where the obvious move is not the smartest one, and learning to try, undo and try again.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Search, greedy methods and heuristics built from scratch, the tools behind this page\'s project.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 13 to 18', note: 'Hard optimisation problems for keen teenagers, where knowing when to stop searching is part of the skill.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who want to automate decisions at work, from scheduling to choosing locations.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Doncaster today',
      h2: 'A spread-out borough with an older middle',
      intro: 'Census 2021 figures for the City of Doncaster council area, published by the Office for National Statistics and read through Nomis.',
      body: [
        { kind: 'table', caption: 'Doncaster, Census 2021', head: ['Measure', 'Doncaster', 'England'], rows: [
          ['Usual residents', '308,106', '56,490,048'],
          ['Living in households', '303,172', 'Not compared'],
          ['Living in communal establishments', '4,934', 'Not compared'],
          ['Aged 20 to 24', '16,214 (5.3%)', '6.0%'],
          ['Aged 55 to 59', '22,003 (7.1%)', '6.7%'],
          ['Students among residents aged 5 and over', '52,064 (17.9%)', '20.4%'],
          ['Usual residents per square kilometre', '542.4', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Towns and villages', p: 'At 542.4 residents per square kilometre, the borough reaches well beyond its town centre into many smaller towns and villages, which is exactly why where things go matters.' },
          { h3: 'Late fifties', p: 'People aged 55 to 59 were 7.1% of residents in 2021, above England\'s 6.7%, while the early twenties were below the national share.' },
          { h3: 'Fewer students', p: 'Of 291,164 residents aged five and over, 52,064 were at school or in full-time study, 17.9% against 20.4% for England.' }
        ] },
        { kind: 'p', text: 'Our Doncaster learners span that range. A Year 3 child in Bessacarr might be solving first puzzles in code, a Year 11 student in Armthorpe revising for GCSE Computer Science, and an adult in Conisbrough learning Python to change career, each in a small group at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Engineering for speed',
      h2: 'Gresley, the A4s and a record from 1938',
      intro: 'From the National Railway Museum\'s accounts of Mallard and its designer.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Doncaster Works', p: 'The museum shows Sir Nigel Gresley, Chief Mechanical Engineer of the London and North Eastern Railway, photographed at the Doncaster Works with the A4 locomotive named after him.' },
          { h3: 'A shape from a wind tunnel', p: 'The museum says the A4s\' streamlined shape was honed in a wind tunnel so they could cut through the air cleanly at 120 mph and above. Mallard, built in March 1938, was the 28th of 35.' },
          { h3: '3 July 1938', p: 'Mallard reached 126 mph down Stoke Bank, a steam locomotive world speed record the museum says has never been surpassed.' }
        ] },
        { kind: 'p', text: 'We have no connection with the National Railway Museum. The A4s belong on this page because they were designed by testing, measuring and improving, not by guessing. Wind tunnel shapes were tried, compared and refined until one worked. The project below does the same with an arrangement of places, trying, comparing and improving until it can do no better.' },
        { kind: 'spec', title: 'Where the neighbourhood figures come from', p: 'The Office for National Statistics publishes Census 2021 populations for lower layer super output areas, small neighbourhoods of about 1,500 people, and a population-weighted centre point for each. Doncaster has 199 of them.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Placing ten hubs among 199 neighbourhoods',
      intro: 'The p-median problem asks where to put a set number of facilities so that people are, on average, as close to one as possible. It is too big to solve by trying everything.',
      body: [
        { kind: 'table', caption: 'Average straight-line distance from home to the nearest of ten hubs, weighted by residents, for different search methods', head: ['Method', 'Lowest average', 'Highest average', 'Notes'], rows: [
          ['2,000 random choices', '2.015 km', '5.696 km', 'Median 2.863 km'],
          ['Greedy, one hub at a time', '1.822 km', 'Same', 'Always the same answer'],
          ['Hill climbing, 10 random starts', '1.767 km', '1.820 km', '8 different end points'],
          ['Simulated annealing, 10 runs', '1.767 km', '1.779 km', '40,000 steps each'],
          ['Simulated annealing, too short', '1.781 km', '1.863 km', '2,000 steps each']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count the options', p: 'Choosing 10 places from 199 can be done in about 2.13 times ten to the sixteen ways. Checking a million a second, that is more than 600 years of work.' },
          { h3: '2. Climb, then get stuck', p: 'Hill climbing swaps one hub at a time whenever that helps and stops when nothing does. Ten runs ended in eight different places, because a swap that looks bad can lead to a better arrangement.' },
          { h3: '3. Accept some bad moves', p: 'Simulated annealing sometimes takes a worse swap on purpose, more often early on while it is hot, less as it cools. That lets it climb out of dead ends before settling.' }
        ] },
        { kind: 'callout', h3: 'Heuristics do not prove anything', p: 'The lowest average we found, 1.767 kilometres, appeared in several runs of both hill climbing and annealing, but no method here can prove it is the true optimum. What annealing did was narrow the spread: its worst run was 1.779, against 1.820 for hill climbing. Rush the cooling to 2,000 steps and the worst run slips to 1.863. An honest report gives the lowest value found, the range across runs and the settings used.' },
        { kind: 'p', text: 'The lowest-scoring arrangement puts 67.4% of residents within two kilometres of a hub and 96.5% within five; the farthest neighbourhood is 6.47 kilometres away. More hubs help less and less: one hub gives an average of 6.417 kilometres, five give 2.973, ten 1.822 and fifteen 1.335 by the greedy method. Distances are straight lines between population-weighted centres, not journeys by road or bus.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Searching huge spaces',
      h2: 'Five things to report with any heuristic answer',
      intro: 'Learned on hubs for a borough, then used on delivery routes, school timetables, chip layouts, warehouse picking and the training of neural networks.',
      body: [
        { kind: 'table', caption: 'Making an optimisation result trustworthy', head: ['Report', 'For the Doncaster hubs', 'Why it matters'], rows: [
          ['What was minimised', 'Resident-weighted straight-line distance', 'A different goal gives a different map'],
          ['How big the search space is', 'About 2.13 times ten to the sixteen', 'Explains why no proof is possible'],
          ['Range across runs', '1.767 to 1.779 km for annealing', 'Shows how repeatable the answer is'],
          ['The settings', '40,000 steps, cooling from 0.5 to 0.001', 'Lets someone else reproduce it'],
          ['A simple baseline', 'Greedy 1.822 km, random median 2.863 km', 'Shows the effort was worth it']
        ] },
        { kind: 'p', text: 'The first row is where real decisions go wrong. Minimising the average distance favours dense neighbourhoods; minimising the worst distance would pull hubs towards outlying villages. Neither is the right answer in general. A learner has to say which goal they chose, because the algorithm will optimise whatever it is told.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Placing three counters on a map so every house is near one, then trying swaps to see if it gets better.' },
          { h3: 'Teenagers', p: 'Census neighbourhoods in Python, a cost function, greedy search, hill climbing and simulated annealing compared over many runs.' },
          { h3: 'Adults', p: 'Optimisation at work, from rotas to routes, with the goal, settings and spread of results reported openly.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Office for National Statistics, the National Railway Museum or City of Doncaster Council. The census counts and centroids are published openly; the hub arrangements, distances and comparisons are our own calculations and are not a proposal for real sites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From moving counters to simulated annealing',
    intro: 'The age bands are a rough guide only; the free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Try and improve', p: 'Placing counters on a map, measuring how far each house is, and swapping to make things better.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Distances in code', p: 'Working out distances between points in Python and finding the nearest one for each house.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Heuristic search', p: 'Greedy methods, hill climbing and simulated annealing on real census data, with runs compared and settings recorded.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'Ages 18 to 67', h3: 'Optimisation at work', p: 'Scheduling, routing and location problems, and how to explain a heuristic answer to people who must act on it.', courses: ['python-ai-automation-masterclass-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can suggest locations in seconds. Why should a Doncaster teenager learn how the search works?',
    intro: 'Because the suggestion depends on a goal and a search that the answer does not show.',
    p1: 'Ask an assistant where to put ten hubs in Doncaster and it will offer a list. It will not say what it minimised, how it searched or whether another run would give a different list. A learner who has run annealing ten times and watched the results vary knows those questions matter, and knows how to answer them for their own work.',
    p2: 'Training an AI model is itself a search through a vast space, and it borrows ideas from the same family: taking steps downhill, adding randomness to escape poor positions and reducing the step size over time. Understanding annealing on a map of a borough makes those ideas concrete long before anyone meets them in a neural network.',
    closer: 'So a Doncaster teenager should still learn to program in 2026, in a borough whose railway engineers shaped a locomotive in a wind tunnel: the computer does the searching, but people still decide what counts as good.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bessacarr, Thorne or Mexborough, from home',
    intro: 'Doncaster borough stretches from Askern to Tickhill and from Thorne to Mexborough. Online lessons turn every one of those places into the same distance: none.',
    cells: [
      { h3: 'Town and village alike', p: 'A learner in Rossington and another in Adwick can join the same class without either travelling into town.' },
      { h3: 'School stages, English style', p: 'Reception, Key Stages 1 to 4, GCSE choices and A levels, named as Doncaster schools name them, with lessons taught in English.' },
      { h3: 'A free lesson that counts', p: 'The first session involves genuine work and ends with a suggested level, course and weekly slot. You will not be asked for a card.' },
      { h3: 'Classmates at your level', p: 'Groups of five to ten learners at one stage, from Doncaster, the rest of Britain and abroad, so there is a sensible time for every level.' },
      { h3: 'Two lessons each week', p: 'A regular pair of weekly lessons, about eight a month, with holidays and exams planned with the teacher ahead of time.' },
      { h3: 'Late evenings in India', p: 'A 5 pm class in Doncaster starts at 9.30 pm in India in the British summer and 10.30 pm in winter, because India keeps one time all year; our teachers work those hours for UK learners.' }
    ],
    spec: { title: 'Around South Yorkshire', p: 'Families in Rotherham, Barnsley, Worksop or Scunthorpe join exactly the same classes, since lessons are online and groups are formed by level.' }
  },

  fees: {
    h2: 'Doncaster lesson fees',
    intro: 'The first lesson is free, then a single monthly fee.',
    first: 'A complete lesson at no charge, closing with a recommended level, course and weekly time.',
    group: 'Roughly eight live lessons a month in a group of five to ten learners at the same level.',
    private: 'Roughly eight live lessons a month, with the teacher working only with your learner.',
    closer: 'Wheatley and Hatfield pay the same as any family elsewhere outside India: one fee, set in US dollars, and nothing on our site is priced in pounds. Billing starts only when the free lesson has settled a course and a lesson time; the pricing page covers pausing, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six family reviews from Google, unchanged',

  book: {
    h2: 'Book a free lesson for a Doncaster learner',
    intro: 'We choose the first task by level: a move-the-counters puzzle for a young child, a short Python program that finds the nearest point for a beginner, or census neighbourhoods and simulated annealing for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Doncaster learner.'
  },

  faq: {
    h2: 'Doncaster coding class questions',
    intro: 'The questions Doncaster families ask us most often.',
    items: [
      { q: 'How many people live in Doncaster?', a: 'The 2021 census counted 308,106 usual residents in the Doncaster borough, with 303,172 living in households and 4,934 in communal establishments such as care homes and student halls.' },
      { q: 'How does Doncaster compare with England?', a: 'Doncaster has a slightly older middle and fewer students: 7.1% of residents were aged 55 to 59 in 2021 (England 6.7%), and 17.9% of those aged five and over were students (England 20.4%). It had 542.4 residents per square kilometre (England 433.5).' },
      { q: 'What is simulated annealing?', a: 'A search method for problems with too many possible answers to check. It improves a solution step by step but sometimes accepts a worse step on purpose, less often as it cools, so it can escape arrangements that only look optimal.' },
      { q: 'What did the Doncaster project find?', a: 'Ten hubs placed by simulated annealing brought the average straight-line distance from home to about 1.767 kilometres, against 1.822 for a simple greedy method and about 2.9 for random choices.' },
      { q: 'Where does the neighbourhood data come from?', a: 'Census 2021 populations and population-weighted centre points for Doncaster\'s 199 lower layer super output areas, published by the Office for National Statistics.' },
      { q: 'What is Mallard?', a: 'An A4 class steam locomotive designed by Sir Nigel Gresley, which the National Railway Museum says reached 126 mph on 3 July 1938, a steam record never surpassed. We are not connected with the museum.' },
      { q: 'When do Doncaster lessons happen?', a: 'On weekday afternoons and evenings or at weekends, at a UK time set in the free lesson. India is four and a half hours ahead of Doncaster in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Doncaster?', a: 'No. There is no centre in Doncaster and no premises anywhere in the UK; every lesson is taught live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Doncaster lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Doncaster groups arranged?', a: 'By level, pace and goals rather than age or postcode, with five to ten learners at one stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'South Yorkshire and beyond',
    html: 'Up the A1, the <a class="cg-inline-link" href="/best-coding-class-in-wakefield">Wakefield page</a> adds up a year of river flow, and to the west <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> tests how a trend line shifts with its start. <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a> finds the fewest roads that cut its island off. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains key stages and exams, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads to every town and city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Doncaster and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-sheffield', label: 'Sheffield' },
    { href: '/best-coding-class-in-wakefield', label: 'Wakefield' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-dnc .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-dnc .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-dnc .cg-capsule { border-left: 5px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); padding: 0.9rem 0 0 1rem; }
.cg-root.cg-dnc .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dnc .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.017em; }
.cg-root.cg-dnc .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 2.1rem); }
.cg-root.cg-dnc .cg-table th { letter-spacing: 0.026em; }
.cg-root.cg-dnc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dnc .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-dnc .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Doncaster, Census 2021 via Nomis (E08000017): TS001 308,106 usual residents, 303,172 in households, 4,934 in communal establishments; TS007A 16,214 aged 20 to 24 (5.3 percent, England 6.0), 22,003 aged 55 to 59 (7.1 percent, England 6.7); TS068 52,064 students of 291,164 residents aged 5 and over (17.9 percent, England 20.4); TS006 542.4 usual residents per square kilometre (England 433.5). National Railway Museum: Mallard, A4 class, designed by Sir Nigel Gresley, built March 1938, 28th of 35 A4s, 126 mph down Stoke Bank on 3 July 1938, a steam record never surpassed; A4 shape honed in a wind tunnel; Gresley photographed at the Doncaster Works with the A4 named after him.',
    localProject: 'Placing ten hubs among 199 neighbourhoods. Census 2021 LSOA populations (Nomis) and ONS LSOA 2021 population weighted centroids, read 23 September 2026; resident-weighted mean straight-line distance to nearest of ten hubs chosen among centroids; C(199,10) = 2.13e16. Random (2,000): best 2.015 km, median 2.863, worst 5.696. Greedy 1.822. Hill climbing from 10 starts: 1.767 to 1.820, 8 distinct. Simulated annealing 10 x 40,000 steps: 1.767 to 1.779; 2,000 steps: 1.781 to 1.863; cold start 1.767 to 1.799. Best set: 67.4 percent within 2 km, 96.5 within 5 km, farthest 6.47 km. Greedy by hub count: 1 6.417, 3 4.160, 5 2.973, 10 1.822, 15 1.335. Lesson family: simulated annealing and heuristic optimisation; distinct from Bristol Voronoi and Rathfarnham travelling salesman.',
    requiredMentions: [
      '308,106',
      '303,172',
      '4,934',
      '542.4',
      '22,003',
      '52,064',
      '291,164',
      'Mallard',
      'Gresley',
      'Stoke Bank',
      'simulated annealing',
      '1.767'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Doncaster: 308,106 usual residents; 303,172 in households; 4,934 in communal establishments; LSOA populations.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000017' },
      { claim: 'Nomis, Census 2021 TS007A: Doncaster and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000017,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Doncaster 52,064 students of 291,164 aged 5 and over (17.9 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000017,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Doncaster 542.4 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E08000017,E92000001' },
      { claim: 'ONS, Lower Layer Super Output Areas (December 2021) population weighted centroids.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/ArcGIS/rest/services/LSOA_PopCentroids_EW_2021_V4/FeatureServer' },
      { claim: 'National Railway Museum, Mallard: the world\'s fastest steam locomotive (126 mph, Gresley, wind tunnel).', url: 'https://www.railwaymuseum.org.uk/whats-on/mallard-worlds-fastest-steam-locomotive' },
      { claim: 'National Railway Museum, Mallard 75: 3 July 1938, Stoke Bank, built March 1938, 28th of 35 A4s, Gresley at the Doncaster Works.', url: 'https://www.railwaymuseum.org.uk/what-was-on/mallard-75' }
    ],
    rejectedClaims: [
      'That Mallard was built in Doncaster: the museum pages used do not say so, so the page links Gresley to the Doncaster Works only through the museum photograph.',
      'Science Museum Group collection record for Mallard: returned 429 (rate limited) and was not retried.',
      'Any claim that the ten computed hubs are real or recommended sites: they are an exercise in search on straight-line distances.',
      'A Doncaster total built by adding the 199 neighbourhood counts: neighbourhood populations are weights only; the council-area figure is used for totals.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Office for National Statistics, the National Railway Museum or City of Doncaster Council.'
    ]
  }
};
