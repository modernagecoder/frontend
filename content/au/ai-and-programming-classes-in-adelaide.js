'use strict';
// Adelaide (cg- city page, Australia cluster Phase 6). Shaped page: AI and programming for teenagers and adults;
// coding-classes-for-kids-adelaide owns the primary and lower-secondary intent.
// Spine: can a swarm of simple rules find where three study hubs should go, and does it beat plain common
// sense? Data: Adelaide Metro General Transit Feed (google_transit.zip, gtfs.adelaidemetro.com.au, listed on
// data.gov.au under Creative Commons Attribution 3.0 Australia), downloaded 7 October 2026: feed_info
// publisher Adelaide Metro, feed_start_date 20261002, feed_end_date 20270409, feed_version 1705. Filtered to
// the five Adelaide Metro agencies (Rail Commissioner, Rail Commissioner Tram, SouthLink, Torrens Transit,
// Busways): 545 route entries, 21,477 trips and 7,680 stops served; the served stops span about 53.9 km east
// to west and 84.9 km north to south (equirectangular projection at 34.93 degrees south, our calculation).
// Problem (our own, hypothetical): place 3 points to cover as many stops as possible within 800 m.
// Measured by us on 7 October 2026 (scratchpad au/c1/adl_pso.py), 6,000 placements tried per run, 10 runs
// each: random placement anywhere in the bounding box mean 121.3 stops (range 105 to 146); random placement
// on real stops mean 176.9 (171 to 198); particle swarm optimisation (30 particles, inertia 0.72, both pulls
// 1.49) mean 195.1 (167 to 206); a greedy rule over all stop locations (take the spot covering most, then the
// next) 205 (110 after one hub, 159 after two); the highest any method found was 206, 2.68% of stops. Greedy
// hubs sit at Stop V1 King William St - West side, Stop 63C Elizabeth Rd - South side and Stop 3 Ward St -
// North side. Lesson family: particle swarm optimisation and the baseline test; screened free site-wide on
// 7 October 2026 ("particle swarm": 0 page hits; claimed by AU-C1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Adelaide (GCCSA 4GADE):
// 1,387,290 people; median age 39 (South Australia 41, Australia 38); 375,146 families; 593,881 private
// dwellings; 2.5 people per household; separate house 402,136 (75.0%); flat or apartment 43,766 (8.2%; SA
// 6.8%; Australia 14.2%); Professionals 158,286 (23.6%; SA 21.5%; Australia 24.0%); Bachelor Degree level and
// above 298,181 (25.9% of people aged 15 and over; SA 22.7%; Australia 26.3%); aged 15 to 19 78,280 (5.6%).
// IANA tz database: Australia/Adelaide UTC+9:30, with daylight saving (UTC+10:30) from 4 October 2026 to
// 4 April 2027; Asia/Kolkata UTC+5:30. SA education department pages returned 403 and were not circumvented.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ADELAIDE', label: 'Adelaide', blurb: 'AI and programming for Adelaide teens and adults, and a particle swarm that hunts for the busiest corners of the Adelaide Metro network.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-adelaide',
  code: 'adl',
  accent: '#74443C',
  accentRationale: 'Adelaide: a sandstone brown (HSV saturation 0.48, value 0.45, hue 8), chosen by hand at least 10 RGB units from every accent in content and the shared stylesheets, 8.0:1 on white and 6.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Adelaide',
    eyebrow: 'Adelaide, South Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Adelaide, South Australia',
  title: 'AI and Programming Classes in Adelaide | Live Online Lessons',
  description: 'Live online AI and programming classes for Adelaide teenagers and adults: Python, machine learning and optimisation, taught by a real teacher. First lesson free.',
  ogDescription: 'AI and programming classes for Adelaide, with a project that sets a particle swarm loose on 7,680 Adelaide Metro stops and checks it against simple rules.',
  twitterDescription: 'Adelaide AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Adelaide Learners',
    description: 'Level-matched online Python, artificial intelligence, machine learning and optimisation for teenagers and adults across Greater Adelaide, taught live in English.'
  },

  h1: 'AI and programming classes in Adelaide',
  capsuleQ: 'What are the best AI and programming classes in Adelaide?',
  capsule: 'For an Adelaide teenager or adult, live lessons where you write the AI yourself, test it against simple alternatives and understand why it works. Greater Adelaide counted 1,387,290 people at the 2021 Census, with a median age of 39, older than most capitals, so our classes run from Year 9 students to people changing careers. Lessons are online, privately or in small level-matched groups, and the first one is free.',
  lead: 'Some of the most useful ideas in artificial intelligence are borrowed from nature. Particle swarm optimisation copies a flock of birds: dozens of simple agents wander a problem, remember the good spots they have seen and drift towards the good spots their neighbours report. Our Adelaide project gives the swarm a real puzzle. Using Adelaide Metro\'s own open data, 7,680 stops served by its trains, trams and buses, where would you put three study hubs so that as many stops as possible lie within 800 metres? The swarm does well. Then learners try a plain greedy rule, and the result is the most important lesson of the course: always compare a clever method with a simple one before trusting it.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Adelaide.',

  picks: {
    eyebrow: 'Course picks for Adelaide',
    h2: 'Four ways into AI and programming in Adelaide',
    intro: 'Chosen by what you want to build, then pitched at the right level in the free lesson. Starting costs nothing and needs no card.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Python first, then real machine learning models trained and tested on data the learner can inspect.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'Search, optimisation, logic and agents: the classic ideas underneath today\'s AI tools.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The programming foundation every AI project needs, from loops and functions to files and classes.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults', note: 'Python, statistics and machine learning for people who want to work with data seriously.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Greater Adelaide in the Census',
      h2: 'A capital of 1.4 million with an older profile',
      intro: 'QuickStats for the Greater Adelaide capital city area from the 2021 Census, compared with South Australia and the whole country.',
      body: [
        { kind: 'table', caption: 'Greater Adelaide, 2021 Census QuickStats', head: ['Measure', 'Greater Adelaide', 'South Australia', 'Australia'], rows: [
          ['People', '1,387,290', 'Not compared', 'Not compared'],
          ['Median age', '39', '41', '38'],
          ['Families', '375,146', 'Not compared', 'Not compared'],
          ['Private dwellings', '593,881', 'Not compared', 'Not compared'],
          ['Employed residents working as professionals', '158,286, or 23.6%', '21.5%', '24.0%'],
          ['Residents aged 15 and over with a bachelor degree or higher', '298,181, or 25.9%', '22.7%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Older than the nation', p: 'A median age of 39 puts Greater Adelaide a year above Australia\'s 38, though still two years younger than South Australia as a whole.' },
          { h3: 'Mostly separate houses', p: '75.0% of Greater Adelaide\'s occupied private dwellings were separate houses in 2021; only 8.2% were flats or apartments.' },
          { h3: 'Degrees above the state', p: '25.9% of residents aged 15 and over held a bachelor degree or higher, against 22.7% across South Australia.' }
        ] },
        { kind: 'p', text: 'How these census numbers are treated here. The bureau perturbs every table cell slightly to protect privacy, so adding a column\'s pieces may not reproduce its printed total. We quote only the totals and percentages as published and never create totals of our own by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Where should three study hubs go to reach the most Adelaide Metro stops?',
      intro: 'A made-up problem on real data: choose three points so that the largest number of the 7,680 stops served by Adelaide Metro sit within 800 metres of one of them.',
      body: [
        { kind: 'table', caption: 'Stops within 800 m of three hubs, 10 runs each, 6,000 placements tried per run (our calculation, 7 October 2026)', head: ['Method', 'Average stops covered', 'Range over 10 runs'], rows: [
          ['Random points anywhere in the network\'s bounding box', '121.3', '105 to 146'],
          ['Random points placed on real stops', '176.9', '171 to 198'],
          ['Particle swarm, 30 particles', '195.1', '167 to 206'],
          ['Greedy rule: take the spot covering most, then the next', '205', 'Same every run']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The swarm', p: 'Thirty candidate answers move around the map. Each remembers its own top result and is pulled towards the top result of the whole swarm, with some randomness to keep exploring.' },
          { h3: '2. The baselines', p: 'Blind guessing in the bounding box averaged 121.3 stops. Guessing on real stop positions did better, 176.9, because hubs never land in empty paddocks.' },
          { h3: '3. The surprise', p: 'A greedy rule that checks every stop as a possible hub covered 205 stops: 110 with the first hub, 159 with two. The swarm\'s average was lower, though once it reached 206.' }
        ] },
        { kind: 'callout', h3: 'Why the plain rule nearly won', p: 'The greedy hubs land beside Stop V1 on King William Street, Stop 63C on Elizabeth Road and Stop 3 on Ward Street, where the network is densest. When the answer sits in a few obvious clusters, a simple rule finds them quickly. Swarms and other search methods earn their keep on problems where good answers are scattered, hidden or depend on many settings at once. Knowing which kind of problem you have is the skill.' },
        { kind: 'p', text: 'This is a teaching exercise, not a proposal for real hubs. Coverage counts stops, not people or services, and distances are straight lines on a flat projection of the map, not walking routes. The figures are ours, worked out from the Adelaide Metro feed published for 2 October 2026 to 9 April 2027; a later feed will shift them a little.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Testing any AI method',
      h2: 'Five checks before you believe an AI result',
      intro: 'First practised on the swarm, then applied to classifiers, recommenders and anything else that claims to be smart.',
      body: [
        { kind: 'table', caption: 'Habits that keep AI work honest', head: ['Check', 'In the Adelaide project', 'What it stops'], rows: [
          ['Beat random first', 'The swarm had to beat 121.3 stops from blind guessing', 'Calling luck intelligence'],
          ['Beat a simple rule', 'The greedy rule reached 205', 'Using a complex tool where a simple one wins'],
          ['Run it more than once', 'Ten swarm runs ranged from 167 to 206', 'Reporting one lucky run'],
          ['Count the effort', 'Every method got 6,000 placements', 'Unfair comparisons'],
          ['Name the limits', 'Stops, not people; straight lines, not walks', 'Claims the data cannot support']
        ] },
        { kind: 'p', text: 'The third check is where beginners slip most often. A single swarm run might hit 206 and look brilliant, or 167 and look broken. Only the spread across many runs tells you what the method can be relied on to do, and that spread belongs in any honest report.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write a small particle swarm in Python, aim it at a puzzle, and plot how the swarm closes in over time.' },
          { h3: 'University students', p: 'Compare swarms, genetic algorithms and greedy heuristics on the same problem with fair budgets and repeated runs.' },
          { h3: 'Adults', p: 'Learn to question a vendor\'s AI claim: what was it compared against, how many runs, and what was left out.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders works independently of Adelaide Metro, the South Australian Department for Infrastructure and Transport and the statistics bureau. The census counts belong to the bureau; every coverage figure on this page is our own calculation from the open Adelaide Metro feed.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Adelaide',
      h2: 'A network on a grid and a clock half an hour apart',
      intro: 'Two details a programmer in Adelaide runs into early.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Five operators, one feed', p: 'The Adelaide Metro file names the rail, tram and bus operators separately; filtering to those five gives 545 route entries and 21,477 trips.' },
          { h3: 'A wide network', p: 'The stops in our filtered list stretch about 54 km east to west and 85 km north to south, by our measurement on a flat projection.' },
          { h3: 'A half-hour time zone', p: 'Adelaide sits nine and a half hours ahead of UTC in winter and ten and a half in summer, one of the few half-hour offsets in the world.' }
        ] },
        { kind: 'spec', title: 'Why half-hour offsets catch programmers out', p: 'Code that stores time zones as whole numbers of hours breaks in Adelaide. Any program that schedules Adelaide lessons, flights or meetings has to allow offsets in minutes, and to know that South Australia moves its clocks on the first Sundays of October and April.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Python loop to building and testing AI',
    intro: 'The age ranges are guides only; your trial lesson sets the actual level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Programming foundations', p: 'Python variables, loops, functions and lists, with small simulations that already behave a little like agents.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Search and learning', p: 'Random search, greedy rules and swarms, then first machine learning models trained and tested properly.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'AI methods in depth', p: 'Optimisation, search, probabilistic reasoning and neural networks, with fair experiments and written reports.', courses: ['artificial-intelligence-complete-masterclass-college', 'ai-ml-masterclass-complete-college'] },
      { band: 'Adults', h3: 'AI at work', p: 'Applying machine learning and automation to real business data, and judging AI products with a critical eye.', courses: ['data-science-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools can write code already. Why should an Adelaide student learn to build AI from scratch?',
    intro: 'Because building it is the only way to learn how to test it, and our swarm lost to a simple rule.',
    p1: 'A chatbot will happily produce a particle swarm, a genetic algorithm or a neural network on request, and the code will usually run. What it will not do unprompted is ask whether the clever method beats a plain one on your problem. In the Adelaide project the swarm averaged 195.1 stops while a greedy rule reached 205 every time. A learner who only knows how to request code would have shipped the swarm and called it AI.',
    p2: 'Learners who build the method themselves learn the questions that matter: what is the baseline, how many runs, how much effort was each method allowed, and what does the data leave out. Those questions apply just as much to any AI product a school, employer or app offers, and they are what separates a user of AI from someone who understands it.',
    closer: 'In 2026 the scarce skill is not generating code but judging it, and an Adelaide learner who has watched a swarm lose to a greedy rule will judge every AI claim more carefully.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Gawler, Glenelg or the Hills, one live lesson',
    intro: 'Greater Adelaide reaches from the coast up into the Hills, and an online class reaches every part of it the same way.',
    cells: [
      { h3: 'From home, anywhere in the city', p: 'A learner in Salisbury and one in Mount Barker can share a lesson, each from their own room, with no travel at all.' },
      { h3: 'South Australian year levels', p: 'Teachers use the year levels Adelaide schools use and plan around the SA school terms; senior students can link projects to SACE studies. Lessons are in English.' },
      { h3: 'Start with a free lesson', p: 'A proper task with a proper teacher, then a recommended level, course and time. We never ask for card details at this stage.' },
      { h3: 'Groups matched by level', p: 'Five to ten learners at the same stage, from Adelaide and elsewhere, so most evening times have a group.' },
      { h3: 'Two lessons each week', p: 'About eight lessons a month at a fixed time, with holiday and exam breaks planned with the teacher.' },
      { h3: 'Four or five hours to India time', p: 'Adelaide is 4 hours ahead of India time in winter and 5 hours ahead during daylight saving, from 4 October 2026 to 4 April 2027.' }
    ],
    spec: { title: 'Daylight saving, noted once', p: 'South Australia moves its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027. India does not change, so the gap to our teachers grows by an hour in summer. Lesson times are always confirmed in Adelaide time.' }
  },

  fees: {
    h2: 'What classes cost in Adelaide',
    intro: 'Three figures with no extras.',
    first: 'An entire lesson free of charge, ending with a suggested level, course and lesson time.',
    group: 'A month of lessons, usually eight, in a group of five to ten learners at the same stage.',
    private: 'The same rhythm of about eight lessons a month, with one teacher for one learner.',
    closer: 'Families outside India pay in US dollars at one rate, so Port Adelaide and Unley pay the same and there is no Adelaide price list. Billing begins only after the trial, once course and time are settled; the pricing page explains holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'What parents and learners have written on Google',

  book: {
    h2: 'Tell us what you want to learn',
    intro: 'We match the first task to you: a first Python program for a Year 9 student, a small swarm for a Year 11 student, or the full Adelaide Metro coverage project for an adult.',
    success: 'Thank you. The team will be in touch shortly about an Adelaide class.'
  },

  faq: {
    h2: 'Adelaide AI and programming questions',
    intro: 'What Adelaide learners and parents ask before they begin.',
    items: [
      { q: 'How many people live in Greater Adelaide?', a: 'Greater Adelaide counted 1,387,290 people at the 2021 Census. Its median age of 39 is above Australia\'s 38 but below South Australia\'s 41.' },
      { q: 'What is particle swarm optimisation?', a: 'Particle swarm optimisation is a search method inspired by flocks of birds. Many candidate answers move around a problem, each pulled towards the good answers it has found and the good answers the whole group has found, until the swarm settles near a strong solution.' },
      { q: 'What is the Adelaide Metro project?', a: 'Learners use Adelaide Metro\'s open timetable data, 7,680 stops served by its trains, trams and buses, to place three imaginary study hubs so that as many stops as possible are within 800 metres. They compare a particle swarm with random guessing and a greedy rule, and find the greedy rule covers 205 stops against the swarm\'s average of 195.1.' },
      { q: 'What is a baseline in AI?', a: 'A baseline is a simple method you compare against, such as random guessing or an obvious rule. If a clever AI method cannot beat the baseline clearly and repeatedly, it has not earned its complexity.' },
      { q: 'Do you teach SACE students?', a: 'Yes. Senior students practise programming and problem solving that supports their SACE subjects, and we plan around the South Australian school terms. Assessed school work always remains the student\'s own.' },
      { q: 'What time are lessons for Adelaide learners?', a: 'After school, evenings or weekends, agreed during the trial and always given in Adelaide time. Adelaide is four hours ahead of India time in winter and five hours ahead during daylight saving.' },
      { q: 'Can adults with no coding experience join?', a: 'Yes. Many adults start from nothing with Python before moving into AI and data work. The free lesson finds the right starting point and pace.' },
      { q: 'Is there a Modern Age Coders centre in Adelaide?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Adelaide coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Adelaide and Australian learners',
    html: 'Senior students taking computing can read <a class="cg-inline-link" href="/sace-digital-technologies-help">SACE Digital Technologies help</a>, and those taking maths can see <a class="cg-inline-link" href="/sace-mathematical-methods-tutoring">SACE Mathematical Methods tutoring</a>. Younger students preparing for selective entry can start with <a class="cg-inline-link" href="/sa-ignite-entry-maths-practice">SA Ignite entry maths practice</a>, and teenagers curious about AI should look at <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for Australian teens</a>. Everything is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Adelaide and Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/sace-digital-technologies-help', label: 'SACE Digital Technologies' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-adl .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-adl .cg-hero h1 { font-weight: 780; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-adl .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 1rem 0; }
.cg-root.cg-adl .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-adl .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-adl .cg-grid-3 { gap: clamp(0.9rem, 2.1vw, 1.8rem); }
.cg-root.cg-adl .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-adl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-adl .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-adl .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Greater Adelaide, ABS Census 2021 QuickStats, GCCSA 4GADE (read 7 October 2026): 1,387,290 people; median age 39 (South Australia 41, Australia 38); 375,146 families; 593,881 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 402,136 (75.0 percent), flat or apartment 43,766 (8.2 percent; South Australia 6.8; Australia 14.2); occupation, employed people aged 15 and over: Professionals 158,286 (23.6 percent; South Australia 21.5; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 298,181 (25.9 percent; South Australia 22.7; Australia 26.3); aged 15 to 19 78,280 (5.6 percent). IANA tz database: Zone Australia/Adelaide 9:30 AS AC%sT; daylight saving (UTC+10:30) from Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30, so Adelaide is 4 hours ahead of India time in winter and 5 hours ahead during daylight saving. South Australian Department for Education and data.sa.gov.au returned 403 on 7 October 2026 and were not circumvented.',
    localProject: 'Particle swarm optimisation against baselines for a maximum-coverage placement. Adelaide Metro google_transit.zip (data.gov.au listing: Creative Commons Attribution 3.0 Australia), downloaded 7 October 2026: feed_info Adelaide Metro, 20261002 to 20270409, version 1705. Agencies 2, 3, 4, 5 and 8 (Adelaide Metro Rail Commissioner, Rail Commissioner Tram, SouthLink, Torrens Transit, Busways): 545 route entries, 21,477 trips, 7,680 stops served (stop_times join). Equirectangular projection at 34.93 degrees south; extent 53.9 km by 84.9 km. Objective: number of served stops within 800 m of the nearest of 3 points. Budget 6,000 evaluations per run, 10 runs (seeds 0 to 9): random points in the bounding box mean 121.3 (105 to 146); random stop locations mean 176.9 (171 to 198); PSO (30 particles, w 0.72, c1 = c2 = 1.49) mean 195.1 (167 to 206); greedy over all stop locations 205 (110, 159, 205 after 1, 2, 3 hubs); maximum observed 206 = 2.68 percent of stops. Greedy hubs at Stop V1 King William St - West side, Stop 63C Elizabeth Rd - South side, Stop 3 Ward St - North side. Lesson family: particle swarm optimisation and baseline comparison; distinct from simulated annealing, genetic algorithms, k-means and the facility pages elsewhere on the site.',
    requiredMentions: [
      '1,387,290',
      'Stop V1 on King William Street',
      '593,881',
      '298,181',
      '158,286',
      '7,680',
      '21,477',
      '195.1',
      '176.9',
      'Stop 63C on Elizabeth Road'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Adelaide (4GADE): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4GADE' },
      { claim: 'Adelaide Metro General Transit Feed (google_transit.zip), Creative Commons Attribution 3.0 Australia per its data.gov.au listing.', url: 'https://gtfs.adelaidemetro.com.au/v1/static/latest/google_transit.zip' },
      { claim: 'data.gov.au listing: Adelaide Metro General Transit Feed, Department for Infrastructure and Transport.', url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au' },
      { claim: 'IANA time zone database, australasia file: Australia/Adelaide rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'South Australian Department for Education term dates and SACE Board details beyond the committed SACE pages: education.sa.gov.au and sa.gov.au returned 403 and were not circumvented.',
      'Bureau of Meteorology station names: the observations feed returned 403 and was not circumvented.',
      'Any claim that real hubs should be built where the methods placed them: the problem is hypothetical and counts stops, not people or services.',
      'Walking distances or catchment populations: distances are straight lines on a flat projection.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Adelaide Metro, the Department for Infrastructure and Transport or the ABS.'
    ]
  }
};
