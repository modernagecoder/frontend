'use strict';
// Geraldton (cg- regional city page, Australia cluster Phase 7, row 167). Shaped page (best): leads with teenagers
// and adults. Spine: how many separate pieces is Geraldton's planned cycle network, and why does the answer depend on a
// tolerance you choose? Data: WA Department of Transport, Regional Long-Term Cycle Network (DOT-036), file
// rltcn20260319.shp.zip from data.wa.gov.au, Creative Commons Attribution 4.0, downloaded 8 October 2026. Measured by
// us (scratchpad au/r5/ger_snap.py): 222 line features with Strategy 'Geraldton 2050'; lengths on a local flat
// projection of the GDA2020 coordinates (an approximation, labelled as such): 460.97 km in all, of which Existing
// (adequate) 24.12 km, Existing (needs improvement) 189.06 km, Proposed 247.78 km. 444 line ends; ends that share an
// exact coordinate with another feature's end: 4; within 1 m: 111; within 5 m: 225; within 10 m: 258; within 50 m: 312.
// Connected pieces when ends closer than a tolerance are joined: 0 m 218 (largest 59.57 km, 12.9 percent of length);
// 0.5 m 194; 1 m 164; 2 m 128; 5 m 104; 10 m 84 (largest 67.58 km); 20 m 70; 50 m 51 (largest 118.64 km, 25.7 percent);
// 100 m 37 (largest 221.34 km, 48.0 percent). Lesson family: endpoint snapping tolerance when building a network graph
// from line segments; screened free site-wide on 9 October 2026 and claimed by AU-R5.
// Place facts read raw on 8 October 2026: ABS Census 2021 QuickStats, Geraldton Significant Urban Area (5006), with
// Western Australia and Australia: 38,595 people; median age 40; 9,955 families; 17,434 private dwellings; 2.4 people
// per household; separate house 12,062 (86.0 percent; WA 79.7; Australia 72.3); flat or apartment 227 (1.6; WA 6.5);
// Professionals 2,992 (17.0; WA 22.0; Australia 24.0); Technicians and Trades Workers 2,989 (17.0; WA 15.3);
// Bachelor Degree level and above 3,801 (12.3; WA 23.8; Australia 26.3); aged 15 to 19: 2,454 (6.4); aged 20 to 24:
// 2,033 (5.3); industry: Iron Ore Mining 500 (2.8; WA 2.9; Australia 0.4), Primary Education 663 (3.8). WA Department
// of Education term dates: 2026 Term 4 Monday 12 October to Thursday 17 December; 2027 Term 1 Monday 1 February to
// Friday 9 April. IANA tz: Australia/Perth UTC+8 with no daylight saving. Excluded by the cluster rules: income, rent,
// mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GERALDTON', label: 'Geraldton', blurb: 'Geraldton, a planned cycle network drawn as 222 lines, and the tolerance that decides whether they join up.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-geraldton',
  code: 'grld',
  accent: '#62662E',
  accentRationale: 'Geraldton: a dry saltbush olive (HSV saturation 0.55, value 0.40, hue 64), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 6.0:1 on white and 4.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Geraldton',
    eyebrow: 'Geraldton, Western Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Western Australia', href: '/coding-and-ai-classes-in-western-australia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Geraldton, Western Australia',
  title: 'Best Coding Classes in Geraldton | Live Online, Teens and Adults',
  description: 'Live online coding, Python and data classes for Geraldton teenagers and adults, built on real WA open data, with a teacher in small groups or one to one.',
  ogDescription: 'Coding classes for Geraldton teens and adults, with a project that turns a planned cycle network into a graph and finds it is 218 pieces.',
  twitterDescription: 'Geraldton coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Data Classes for Geraldton Learners',
    description: 'Level-matched online Python, graphs, geospatial data and problem solving for teenagers and adults across Geraldton and the Midwest, taught live in English.'
  },

  h1: 'Coding classes in Geraldton',
  capsuleQ: 'What are the best coding classes in Geraldton?',
  capsule: 'Ones where a Geraldton teenager or adult writes real programs against real Western Australian data while a teacher watches the reasoning, not just the output. The urban area counted 38,595 residents at the 2021 Census. Our lessons are live and online, one to one or in a small group at your level, and the first is free.',
  lead: 'The WA Department of Transport publishes its regional long-term cycle network as an open map layer, and 222 of its lines belong to the Geraldton 2050 strategy. Load them into Python, treat every line end as a junction, and ask a simple question: how many separate networks are there? Taken literally, the answer is 218, because only 4 of the 444 line ends land on exactly the same coordinate as another. Allow ends within one metre to join and the count drops to 164; allow 100 metres and it falls to 37. Our Geraldton learners discover that the number of networks is partly a choice, and learn how to make that choice honestly.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Geraldton.',

  picks: {
    eyebrow: 'Course picks for Geraldton',
    h2: 'Where a Geraldton learner might start',
    intro: 'Four routes matched to the project on this page. The free first lesson settles which one, with no card details asked for.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch to reading map data, loops over coordinates and small graph programs.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Graphs, connected pieces and search, the ideas behind joining up a network.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Union of nearby points, spatial indexes and why a tolerance changes an answer.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults working with data', note: 'Checking a published dataset before trusting the totals it produces.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Geraldton in the Census',
      h2: 'A coastal city of 38,595 on the Midwest coast',
      intro: 'Figures from the 2021 Census QuickStats for the Geraldton urban area, set beside Western Australia and the nation where the bureau publishes them.',
      body: [
        { kind: 'table', caption: 'Geraldton in the 2021 Census', head: ['Measure', 'Geraldton', 'Western Australia', 'Australia'], rows: [
          ['People counted', '38,595', 'Not shown', 'Not shown'],
          ['Median age', '40', 'Not shown', 'Not shown'],
          ['Families', '9,955', 'Not shown', 'Not shown'],
          ['Private dwellings', '17,434', 'Not shown', 'Not shown'],
          ['Occupied dwellings that are separate houses', '12,062, or 86.0%', '79.7%', '72.3%'],
          ['Technicians and trades workers', '2,989, or 17.0%', '15.3%', '12.9%'],
          ['Residents 15 and over with a bachelor degree or higher', '3,801, or 12.3%', '23.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trades as common as professions', p: 'Geraldton counted 2,992 professionals and 2,989 technicians and trades workers, each 17.0% of employed residents.' },
          { h3: 'Iron ore in the mix', p: 'Iron ore mining employed 500 residents, 2.8% of workers, close to the WA share of 2.9% and far above the national 0.4%.' },
          { h3: 'Teenagers and young adults', p: 'There were 2,454 residents aged 15 to 19 and 2,033 aged 20 to 24 on Census night.' }
        ] },
        { kind: 'p', text: 'The ABS randomly adjusts small cells to protect privacy, so the parts of a table can miss the published total. Every figure above is printed exactly as published, and none of them is a total we added up ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many separate cycle networks does Geraldton plan, one or two hundred?',
      intro: 'The Geraldton 2050 lines in the WA Department of Transport\'s Regional Long-Term Cycle Network, turned into a graph in Python.',
      body: [
        { kind: 'table', caption: 'Connected pieces by snapping tolerance (our measurement, 8 October 2026)', head: ['Ends joined when closer than', 'Separate pieces', 'Largest piece'], rows: [
          ['Exact match only', '218', '59.57 km, 12.9% of the length'],
          ['1 metre', '164', '59.57 km'],
          ['5 metres', '104', '59.57 km'],
          ['10 metres', '84', '67.58 km'],
          ['50 metres', '51', '118.64 km, 25.7%'],
          ['100 metres', '37', '221.34 km, 48.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Lines become a graph', p: 'Every line end becomes a node and every line becomes an edge joining its two ends. Counting connected pieces is then a standard graph search.' },
          { h3: '2. Exact matching fails', p: 'Only 4 of the 444 ends share a coordinate exactly with another line, so a strict program reports 218 islands for a network that was clearly drawn to connect.' },
          { h3: '3. Snapping with a tolerance', p: 'Joining ends that sit within a chosen distance merges the near misses. A spatial index finds every close pair without comparing all 444 ends with each other.' }
        ] },
        { kind: 'callout', h3: 'Reading the gaps before choosing', p: 'The distance from each end to the closest end of another line tells the story. 4 ends are within 0.1 m, but 111 are within 1 m and 225 within 5 m: a jump that looks like drawing slack, the kind of near touch a person intended as a join. Beyond about 20 m the extra merges start joining lines that may simply run side by side, and by 100 m nearly half the network has fused into one piece. The page prints the full table so you can see where the choice bites.' },
        { kind: 'p', text: 'Lengths are our own approximate measurements on a flat projection of the map coordinates: 460.97 km in all, of which 247.78 km are marked Proposed, 189.06 km Existing (needs improvement) and 24.12 km Existing (adequate). These describe the planning layer as published; they are not a survey of paths on the ground.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Building a network from lines',
      h2: 'Four decisions every map-to-graph program makes',
      intro: 'Practised on the Geraldton layer, then useful for road, pipe, trail or river data anywhere.',
      body: [
        { kind: 'table', caption: 'Decisions behind the count', head: ['Decision', 'What we did', 'What changes if you choose differently'], rows: [
          ['What counts as a node', 'The two ends of each line', 'Using every vertex finds crossings mid-line that ends alone miss'],
          ['How close is close enough', 'A tolerance from 0 to 100 m', 'The number of pieces moves from 218 to 37'],
          ['Which distance', 'Metres on a local flat projection', 'Raw degrees mix east-west and north-south scales'],
          ['How to find close pairs', 'A k-d tree spatial index', 'A double loop compares every end with every other']
        ] },
        { kind: 'p', text: 'None of these choices is wrong on its own. What matters is stating them, testing more than one value and reporting how sensitive the answer is. A result that only holds at one carefully picked tolerance deserves less trust than one that holds across a range.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Count pieces at three tolerances, chart the result and write two paragraphs on which value they would defend and why.' },
          { h3: 'University students', p: 'Graph construction, spatial indexing and sensitivity analysis, practised on a public dataset with real imperfections.' },
          { h3: 'Adults at work', p: 'The same habit applies to customer addresses, asset registers or any data where near-duplicates should probably be one record.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not linked to the WA Department of Transport or the ABS. The map layer is the department\'s and the census figures are the bureau\'s; the piece counts, distances and lengths come from our own analysis.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Geraldton',
      h2: 'School terms and a clock that never changes',
      intro: 'Local details that shape when and how Geraldton learners study.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4 in 2026', p: 'The WA Department of Education lists Term 4 as Monday 12 October to Thursday 17 December 2026.' },
          { h3: 'Term 1 in 2027', p: 'School returns on Monday 1 February 2027, with Term 1 running to Friday 9 April.' },
          { h3: 'No daylight saving', p: 'Western Australia stays on UTC plus 8 all year, so a Geraldton lesson time never shifts against India time.' }
        ] },
        { kind: 'spec', title: 'A fixed gap all year', p: 'India time is two and a half hours behind Geraldton in every month. A 5pm lesson in Geraldton is 2:30pm for our teachers in January and in July alike.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to programs that handle messy maps',
    intro: 'Ages are signposts only; the free lesson finds where each learner should start.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Points and lines', p: 'Reading coordinates, measuring distances and drawing simple routes in Python.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Graphs', p: 'Nodes, edges and connected pieces, with the Geraldton layer as the test case.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'University', h3: 'Spatial algorithms', p: 'Spatial indexes, tolerance choices and sensitivity analysis on public data.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Trustworthy data work', p: 'Checking published layers and registers before building reports on them.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant have noticed the 218 pieces were mostly an artefact?',
    intro: 'Probably not, unless the person asking already suspected the near misses.',
    p1: 'Ask a chatbot to count connected networks in a set of lines and it will usually write correct code that compares coordinates exactly. On the Geraldton layer that code runs cleanly and reports 218 pieces, a confident answer that mostly measures how the lines were drawn. Nothing in the output warns that 111 line ends sit within a metre of another line, waiting to be joined.',
    p2: 'Our Geraldton learners look at the distribution of gaps before trusting any count, then ask an assistant for a snapping version and test it across several tolerances. The assistant writes the code faster; the learner supplies the suspicion that makes the result worth reading.',
    closer: 'A Geraldton learner who has seen one map turn into 218 islands and then into 37 knows that an answer can depend on a setting nobody mentioned, and that habit is worth more than any single tool in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Waggrakine to Wandina, one live class',
    intro: 'Geraldton stretches a long way along the coast, and an online lesson reaches every part of it equally.',
    cells: [
      { h3: 'No travel at all', p: 'A learner at home in any Geraldton suburb joins the same live lesson as one in Perth or overseas.' },
      { h3: 'WA year levels', p: 'Teachers use Western Australian year levels, from primary through Years 11 and 12, and teach in English.' },
      { h3: 'A free first lesson', p: 'You write real code with a teacher, then hear which stage, course and weekly time would suit; no card is requested.' },
      { h3: 'Groups of fifteen to twenty', p: 'Classmates at the same stage from across Australia and abroad, so every level has a workable time.' },
      { h3: 'Two lessons a week', p: 'Usually about eight lessons a month, with holidays and exam weeks planned with the teacher.' },
      { h3: 'A steady clock', p: 'Because WA does not use daylight saving, a Geraldton lesson stays at the same India time all year.' }
    ],
    spec: { title: 'Times written in Geraldton time', p: 'Every lesson time is agreed and shown in Western Australian time, so families never have to convert anything themselves.' }
  },

  fees: {
    h2: 'What coding classes cost in Geraldton',
    intro: 'The whole price list in three lines.',
    first: 'A free opening lesson that ends with a recommended stage, course and time.',
    group: 'A month of lessons, usually eight, with fifteen to twenty learners at your level.',
    private: 'About eight one-to-one lessons a month with a single teacher.',
    closer: 'Geraldton families pay one rate in US dollars, the same as everywhere else in Australia, with no regional loading. Nothing is charged until the trial has settled a course and a time; the pricing page covers holidays, missed lessons and switching format.'
  },

  reviewsH2: 'From Google reviews: families describe the lessons',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'We plan the first task to fit: a coordinate-drawing exercise for a Year 8 beginner, a graph-counting problem for a Year 11 student, or the full cycle-network layer and its tolerance question for an adult.',
    success: 'Thank you. We will be in touch soon about a coding class in Geraldton.'
  },

  faq: {
    h2: 'Geraldton coding class questions',
    intro: 'The questions Geraldton learners and parents tend to ask first.',
    items: [
      { q: 'How many people live in Geraldton?', a: 'The urban area counted 38,595 residents in 2021, with a median age of 40.' },
      { q: 'What is a snapping tolerance?', a: 'A snapping tolerance is the distance within which two points are treated as the same place. When a program builds a network from map lines, ends closer than the tolerance are joined into one junction, which fixes tiny drawing gaps but can also join lines that never meet.' },
      { q: 'What is the Geraldton cycle network project?', a: 'Learners load the 222 Geraldton 2050 lines from the WA Department of Transport\'s cycle network layer, build a graph, and count connected pieces at tolerances from zero to 100 metres. The count falls from 218 to 37, and the task is to explain which value is defensible.' },
      { q: 'Do I need advanced maths for this?', a: 'No. Distances, coordinates and counting are enough to begin; the graph ideas are taught as part of the course.' },
      { q: 'Do Year 11 and 12 students join these classes?', a: 'Yes. Senior students fit weekly lessons around their ATAR or general courses, planned against WA term dates. School assessments remain the student\'s own work.' },
      { q: 'When do Geraldton lessons run?', a: 'After school, in the evening or at the weekend, agreed in the trial and written in WA time. India time is two and a half hours behind Geraldton all year.' },
      { q: 'Can younger children learn with you?', a: 'Yes, from age 6, usually starting with Scratch and visual projects. This page is written for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Geraldton?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Geraldton coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Western Australia',
    h2: 'More for Geraldton and WA learners',
    html: 'Down the coast there is <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">online coding and Python classes in Perth</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-bunbury">a Bunbury page on vibe coding and AI agents</a>. Younger learners can start with <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding classes for kids in Perth</a>, and the state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">coding and AI classes in Western Australia</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Geraldton and Western Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/vibe-coding-and-ai-agents-classes-in-bunbury', label: 'Bunbury' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-grld .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-grld .cg-hero h1 { font-weight: 730; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-grld .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-grld .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-grld .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-grld .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.7rem); }
.cg-root.cg-grld .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-grld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-grld .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-grld .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Geraldton Significant Urban Area, ABS Census 2021 QuickStats, area code 5006, with Western Australia and Australia (read 8 October 2026): 38,595 people; median age 40; 9,955 families; 17,434 private dwellings; 2.4 people per household; separate house 12,062 (86.0 percent; WA 79.7; Australia 72.3); flat or apartment 227 (1.6 percent; WA 6.5); Professionals 2,992 (17.0 percent; WA 22.0; Australia 24.0); Technicians and Trades Workers 2,989 (17.0 percent; WA 15.3; Australia 12.9); Bachelor Degree level and above 3,801 (12.3 percent; WA 23.8; Australia 26.3); aged 15 to 19: 2,454 (6.4 percent); aged 20 to 24: 2,033 (5.3 percent); industry: Iron Ore Mining 500 (2.8 percent; WA 2.9; Australia 0.4). WA Department of Education term dates: 2026 Term 4 Monday 12 October to Thursday 17 December; 2027 Term 1 Monday 1 February to Friday 9 April. IANA tz database: Australia/Perth UTC+8, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Endpoint snapping tolerance when building a network graph. WA Department of Transport, Regional Long-Term Cycle Network (DOT-036), rltcn20260319.shp.zip from data.wa.gov.au, CC BY 4.0, downloaded 8 October 2026, GDA2020 geographic coordinates. Strategy = Geraldton 2050: 222 line features (single-part). Lengths on a local equirectangular projection (approximation): total 460.97 km; Infra_Clas Existing (adequate) 24.12 km, Existing (needs improvement) 189.06 km, Proposed 247.78 km. Graph: two nodes per line (its ends), one edge per line, plus edges between ends of different lines closer than the tolerance (scipy cKDTree query_pairs), networkx connected components. Pieces: 0 m 218 (largest 59.57 km, 12.9 percent of total length); 0.5 m 194; 1 m 164; 2 m 128; 5 m 104; 10 m 84 (largest 67.58 km); 20 m 70 (largest 74.30 km); 50 m 51 (largest 118.64 km, 25.7 percent); 100 m 37 (largest 221.34 km, 48.0 percent). Nearest end of another line: exact 4 of 444 ends; within 1 m 111; within 5 m 225; within 10 m 258; within 50 m 312.',
    requiredMentions: [
      '38,595',
      '9,955',
      '17,434',
      '12,062',
      '2,989',
      '3,801',
      '218 islands',
      '460.97 km',
      'Waggrakine to Wandina'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Geraldton Significant Urban Area (5006): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5006' },
      { claim: 'WA Department of Transport, Regional Long-Term Cycle Network (DOT-036), Creative Commons Attribution 4.0, on data.wa.gov.au.', url: 'https://catalogue.data.wa.gov.au/dataset/regional-long-term-cycle-network-ltcn-dot-036' },
      { claim: 'WA Department of Education, future school term dates: 2026 Term 4 and 2027 Term 1.', url: 'https://www.education.wa.edu.au/future-term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Perth offset and absence of daylight saving.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any statement that the cycle network is or is not built on the ground beyond the Infra_Clas labels in the layer: the layer is a planning dataset, and its labels are reported as published.',
      'Any claim about why line ends miss each other by small distances: the cause is not documented, so only the measured distances are shown.',
      'A full list of Geraldton suburbs: only Waggrakine and Wandina are named, both checked as school suburbs (postcode 6530) in the WA Department of Education schools list read on 8 October 2026.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and BOM 403 to this machine in October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the WA Department of Transport, the WA Department of Education or the ABS.'
    ]
  }
};
