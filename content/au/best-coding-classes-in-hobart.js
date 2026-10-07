'use strict';
// Hobart (cg- city page, Australia cluster Phase 6). Shaped page: leads with teenagers and adults;
// coding-classes-for-kids-hobart, if built later, owns the primary and lower-secondary intent.
// Spine: can Euler's formula check a council's road map? Data: City of Hobart Open Data "Road Centre
// Lines" (ArcGIS item 22ff6fa713bb452c975e4c78202ce1cf, Creative Commons Attribution 4.0, with the council's
// disclaimer that the data may not be complete), GeoJSON downloaded 7 October 2026: 2,343 line pieces; types
// roaloc 1,358, roacol 418, roaart 379, roapat 188 (local, collector, arterial, path). Car roads (the first
// three types): 2,155 pieces, 350.4 km by haversine over the coordinates (our calculation; the file's
// Shape__Length gives the same within 0.2 km), 673 distinct road names, 1,924 pieces signed 50 km/h. Graph
// built by us on 7 October 2026 (scratchpad au/c1/hob_euler.py, hob2.py): piece ends joined when within
// 1 m; 113 separate networks, 85 of them a single piece. Largest network: V = 1,573 junctions and ends,
// E = 1,861 pieces; regions traced from the file's own geometry F = 262; Euler's formula for a connected
// network drawn flat with crossings only at junctions expects F = E - V + 2 = 290, so V - E + F comes out -26
// instead of 2, a gap of 28 regions. A segment-intersection search finds 176 places where two car-road
// pieces cross without sharing a point, among them pairs named Domain Highway and Tasman Highway, Brooker
// Highway and Domain Highway, and Elizabeth Street and Melville Street. Lesson family: Euler's formula for
// planar graphs used as a data check; screened free site-wide on 7 October 2026 ("Euler's formula": 0 page
// hits; claimed by AU-C1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Hobart (GCCSA 6GHOB): 247,086
// people; median age 39 (Tasmania 42, Australia 38); 66,185 families; 106,298 private dwellings; 2.4 people
// per household; separate house 80,846 (85.1%; Tasmania 87.7%); flat or apartment 7,759 (8.2%; Tasmania
// 5.3%; Australia 14.2%); Professionals 28,533 (24.0%; Tasmania 20.0%; Australia 24.0%); Bachelor Degree
// level and above 59,920 (29.2% of people aged 15 and over; Tasmania 21.9%; Australia 26.3%); aged 15 to 19
// 13,323 (5.4%). Department for Education, Children and Young People term dates page, 2027: Term 1 4 February
// to 9 April, Term 2 26 April to 2 July, Term 3 19 July to 24 September, Term 4 11 October to 16 December.
// IANA tz database: Australia/Hobart, daylight saving 4 October 2026 to 4 April 2027; Asia/Kolkata UTC+5:30.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'HOBART', label: 'Hobart', blurb: 'Greater Hobart, a council road map with 2,155 car-road pieces, and Euler\'s formula used as a data check.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-hobart',
  code: 'hba',
  accent: '#185420',
  accentRationale: 'Hobart: a deep forest green (HSV saturation 0.71, value 0.33, hue 127), chosen by hand at least 10 RGB units from every accent in content and the shared stylesheets, 9.0:1 on white and 7.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Hobart',
    eyebrow: 'Hobart, Tasmania, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Tasmania' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-tasmania', name: 'Tasmania' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Hobart, Tasmania',
  title: 'Best Coding Classes in Hobart | Live Online, Teens and Adults',
  description: 'Live online coding, Python, graphs and data classes for Hobart teenagers and adults, taught by a real teacher in small groups or one to one. First lesson free.',
  ogDescription: 'Coding classes for Hobart teens and adults, with a project that checks the council\'s road map using Euler\'s formula and finds 28 missing regions.',
  twitterDescription: 'Hobart coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Data Classes for Hobart Learners',
    description: 'Level-matched online Python, graph algorithms, data checking and problem solving for teenagers and adults across Greater Hobart, taught live in English.'
  },

  h1: 'Coding classes in Hobart',
  capsuleQ: 'What are the best coding classes in Hobart?',
  capsule: 'For a Hobart teenager or adult, a live class where a teacher works through real problems with you, from Python basics to graphs and data checking, using real Tasmanian data. The 2021 Census put Greater Hobart at 247,086 people, nearly three in ten of those aged 15 or older with a degree. We teach over video, one to one or in a small class of learners at your stage, and you pay nothing for the opening lesson.',
  lead: 'Leonhard Euler noticed that any network drawn flat on paper obeys a simple rule: count the points, subtract the lines, add the regions, and you always get 2. Our Hobart project turns that rule into a data checker. The City of Hobart publishes its road centre lines as open data, 2,155 car-road pieces in the main council file. We joined the pieces into a network and counted. The largest connected part has 1,573 junctions and ends and 1,861 road pieces, so Euler says it should enclose 290 regions. Tracing them from the file\'s own geometry finds only 262. Those 28 missing regions are a signal that somewhere, roads cross without meeting, and learners write the code to find out where.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Hobart.',

  picks: {
    eyebrow: 'Course picks for Hobart',
    h2: 'Where a Hobart teenager or adult might begin',
    intro: 'Four courses that suit the projects on this page. The opening lesson places you on one of them, free and without a card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the first line to working with files of real places, one careful step at a time.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Graphs, searches and counting arguments, each one tested on a real network rather than a textbook drawing.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Checking, cleaning and analysing public data with Python and SQL, so results can be trusted.' },
      { course: 'java-programming-masterclass-for-teens', band: 'Ages 14 to 18', note: 'Object-oriented programming in Java, useful for learners heading towards senior computing in Tasmania.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Greater Hobart in the Census',
      h2: 'A small capital of houses and degree holders',
      intro: 'QuickStats published for the Greater Hobart capital city area after the 2021 Census, next to Tasmania and Australia.',
      body: [
        { kind: 'table', caption: 'Census QuickStats 2021: Greater Hobart beside Tasmania and Australia', head: ['Measure', 'Greater Hobart', 'Tasmania', 'Australia'], rows: [
          ['People', '247,086', 'Not compared', 'Not compared'],
          ['Median age', '39', '42', '38'],
          ['Families', '66,185', 'Not compared', 'Not compared'],
          ['Private dwellings', '106,298', 'Not compared', 'Not compared'],
          ['Occupied homes that are separate houses', '80,846, or 85.1%', '87.7%', '72.3%'],
          ['Residents aged 15 and over with a bachelor degree or higher', '59,920, or 29.2%', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger than Tasmania', p: 'Greater Hobart\'s median age of 39 sits three years below Tasmania\'s 42, though still a year above Australia\'s 38.' },
          { h3: 'Professionals', p: '28,533 employed residents worked as professionals, 24.0%, level with the national share and well above Tasmania\'s 20.0%.' },
          { h3: 'Teenagers', p: 'The Census counted 13,323 Greater Hobart residents aged 15 to 19, 5.4% of the population.' }
        ] },
        { kind: 'p', text: 'A rule we follow with census tables. Each cell is altered very slightly by the bureau to protect privacy, so rows will not always add up to a published total. We reproduce the totals and percentages exactly as printed and never make new totals by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can Euler\'s formula check a council road map?',
      intro: 'The City of Hobart\'s open road centre lines, joined into a network and tested against Euler\'s formula for flat networks: junctions minus roads plus regions should equal 2.',
      body: [
        { kind: 'table', caption: 'The council file, counted on 7 October 2026 (our calculation)', head: ['Item', 'Figure'], rows: [
          ['Line pieces in the file', '2,343'],
          ['Car-road pieces (local, collector, arterial)', '2,155, totalling 350.4 km'],
          ['Distinct road names on those pieces', '673'],
          ['Separate networks after joining ends within 1 metre', '113, of which 85 are a single piece'],
          ['Largest network: junctions and dead ends (V)', '1,573'],
          ['Largest network: road pieces (E)', '1,861']
        ] },
        { kind: 'table', mt: true, caption: 'Euler\'s formula on the largest network (our calculation)', head: ['Quantity', 'Value'], rows: [
          ['Regions Euler expects, E minus V plus 2', '290'],
          ['Regions traced from the file\'s own geometry (F)', '262'],
          ['V minus E plus F', '-26, where a flat network gives 2'],
          ['Places where two car-road pieces cross without sharing a point', '176']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count', p: 'Join road ends that sit within a metre of each other, then count junctions, road pieces and the regions they enclose, which for a street map are roughly the city blocks.' },
          { h3: '2. Compare', p: 'For any connected network drawn flat with crossings only at junctions, junctions minus roads plus regions is exactly 2. Hobart\'s file gives -26.' },
          { h3: '3. Investigate', p: 'A crossing search finds 176 places where two pieces cross without a shared point. Pairs include Domain Highway with Tasman Highway, and Elizabeth Street with Melville Street.' }
        ] },
        { kind: 'callout', h3: 'A formula as a quality check', p: 'Euler\'s formula cannot tell a flyover from a junction that was drawn without a shared point; both break the count in the same way. What it does is tell you, in one line of arithmetic, that something needs a closer look, and roughly how much. Telling the two cases apart needs a second source, such as a check of each crossing on the ground or in another dataset, and that is the next task learners take on. The council itself notes that its data may not be complete.' },
        { kind: 'p', text: 'Every number in this project is ours, computed from the council\'s file as downloaded on 7 October 2026 with ends joined within 1 metre; a different tolerance gives slightly different counts. We make no claim about the condition or design of any road. The exercise is about using mathematics to test a dataset.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Checking any dataset',
      h2: 'Five ways to test a dataset before you trust it',
      intro: 'Learned on a road map, then used on spreadsheets, sensor logs and any file someone else made.',
      body: [
        { kind: 'table', caption: 'Invariants and other checks worth automating', head: ['Check', 'In the Hobart project', 'What it reveals'], rows: [
          ['A rule that must always hold', 'Junctions minus roads plus regions equals 2', 'Breaks that point to hidden problems'],
          ['Count the pieces', '113 separate networks, 85 of them single pieces', 'Gaps where lines should meet'],
          ['Measure two ways', 'Length from coordinates against the file\'s own length field', 'Fields that disagree with the geometry'],
          ['Look at the extremes', 'The places where pieces cross without meeting', 'Specific rows to check by hand'],
          ['Write down the tolerance', 'Ends joined within 1 metre', 'Results nobody else can reproduce']
        ] },
        { kind: 'p', text: 'Our two length calculations agreed: 350.4 km by measuring between coordinates, within 0.2 km of the file\'s own length field. That agreement is worth as much as the disagreement in Euler\'s count. It tells learners which parts of the file they can lean on while they investigate the parts they cannot.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Draw small networks by hand, check Euler\'s formula on each, then load the Hobart file in Python and count for real.' },
          { h3: 'University students', p: 'Planar graphs, face tracing and segment intersection, with code that scales to thousands of road pieces.' },
          { h3: 'Adults', p: 'Build automatic checks into the data your work relies on, so errors are caught before anyone acts on them.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders works independently of the City of Hobart, the Tasmanian Government and the statistics bureau, and claims no partnership with them. Population figures come from the bureau, while the network counts, lengths and crossings were all produced by our own code from the council file.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Hobart',
      h2: 'Fifty-kilometre streets and a four-term school year',
      intro: 'A few details from the same open data and the state\'s own calendars.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Mostly 50 km/h', p: '1,924 of the 2,155 car-road pieces in the council file carry a speed limit of 50 km/h, the most common value by far.' },
          { h3: 'Terms in 2027', p: 'The Department for Education, Children and Young People lists Term 1 of 2027 from 4 February to 9 April and Term 4 from 11 October to 16 December.' },
          { h3: 'Daylight saving', p: 'Tasmania moves its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027, the same dates as the eastern mainland.' }
        ] },
        { kind: 'spec', title: 'Why a speed-limit field is a gift to a learner', p: 'A column with a handful of common values and a few rare ones is perfect for a first data project. Learners count each value, look up the rare ones and decide whether they are genuine or typing slips, the same habit that the Euler check builds on a larger scale.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting points and lines to checking real datasets',
    intro: 'Read the ages as signposts; the free trial decides where each learner starts.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Points and lines', p: 'Python programs that store small networks, count their parts and test Euler\'s rule on drawings learners make themselves.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Graphs in code', p: 'Adjacency lists, searches and connected parts, applied to the Hobart road file and other real networks.', courses: ['problem-solving-dsa-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'University', h3: 'Geometry and graphs', p: 'Planar graphs, face tracing and intersection tests at scale, with careful handling of tolerances.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Trustworthy data', p: 'Automated checks, cleaning and reporting for the spreadsheets and databases a job depends on.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can analyse a dataset in seconds. Why should a Hobart learner learn to check one?',
    intro: 'Because an AI analysis of the road file would happily report city blocks without noticing that 28 of them are missing.',
    p1: 'Hand an AI assistant a road dataset and ask how many blocks Hobart has, and it will write code, run it and give a confident number. It will not, unless asked, check that the number is even possible. Euler\'s formula is a one-line test that would have flagged the problem, but only someone who knows the formula exists will think to apply it, and only someone who understands networks will know what a result of -26 means.',
    p2: 'That is why we teach the checks alongside the code. A Hobart learner who has seen a famous formula expose a dataset will look for invariants in everything: totals that must match, counts that cannot be negative, lengths that should agree. Applied to an AI\'s output, those habits catch mistakes before anyone relies on them.',
    closer: 'In 2026 analysis is cheap and checking is rare, and a Hobart learner who has used Euler\'s formula to test a real map will be the one who notices when an answer cannot be right.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kingston, Glenorchy or Sandy Bay, the same live lesson',
    intro: 'Greater Hobart wraps around the river and up the hillsides, and a live online lesson reaches every part of it equally.',
    cells: [
      { h3: 'Both sides of the Derwent', p: 'Bellerive and Moonah are a bridge apart, yet two learners there can sit in one lesson without either of them leaving home.' },
      { h3: 'Tasmanian year levels', p: 'Teachers use Tasmanian year levels and plan around the state\'s four terms; senior learners can connect projects to TASC courses. Lessons are in English.' },
      { h3: 'Start with a real task', p: 'The trial is a genuine lesson with a teacher, ending with a suggested level, course and time. Card details are never requested.' },
      { h3: 'Groups at the same stage', p: 'Five to ten learners working at a matching level, from Hobart and elsewhere, so small cities still get full groups.' },
      { h3: 'A twice-weekly rhythm', p: 'Around eight lessons a month in a fixed slot, with holiday and exam breaks agreed with the teacher beforehand.' },
      { h3: 'Teachers on the other side of the Indian Ocean', p: 'When it is 6pm in Hobart in July, it is 1:30pm where our teachers sit; once Tasmanian clocks go forward in October, the same 6pm lesson starts at 12:30pm for them.' }
    ],
    spec: { title: 'Clocks in Tasmania', p: 'Tasmania follows the same daylight saving dates as the eastern mainland. India does not, so the gap to our teachers is one hour wider in summer, and every lesson time is confirmed in Hobart time.' }
  },

  fees: {
    h2: 'What classes cost in Hobart',
    intro: 'Three figures, stated plainly.',
    first: 'A full lesson without charge, after which you receive a level, a suggested course and a lesson time.',
    group: 'A month of lessons, normally eight, sharing the class with five to ten learners at your level.',
    private: 'Roughly eight lessons a month in the same rhythm, with one teacher and one learner.',
    closer: 'Our fees are set in US dollars for every country except India, which means a family in Lindisfarne and one in Lenah Valley see identical invoices and no local price list exists. You are invoiced once the trial has settled a course and a time, and the pricing page answers questions about breaks, absences and changing format.'
  },

  reviewsH2: 'Families in their own words, from Google',

  book: {
    h2: 'Tell us what the learner wants to make',
    intro: 'Give us an age and an interest and the opening task will match: drawing and counting networks for a Year 8 student, or the whole council road-map audit for someone older.',
    success: 'Thank you. The team will be in touch shortly about a Hobart class.'
  },

  faq: {
    h2: 'Hobart coding class questions',
    intro: 'What Hobart learners and families usually ask first.',
    items: [
      { q: 'How many people live in Greater Hobart?', a: '247,086, according to the 2021 Census QuickStats for Greater Hobart. The middle resident was 39 years old, compared with 42 for Tasmania as a whole.' },
      { q: 'What is Euler\'s formula for networks?', a: 'For any connected network drawn flat on paper with lines crossing only at junctions, the number of junctions minus the number of lines plus the number of regions always equals 2. The outside area counts as one region.' },
      { q: 'What is the Hobart road map project?', a: 'Learners join the City of Hobart\'s open road centre lines into a network, count junctions, road pieces and regions, and test Euler\'s formula. The largest network gives -26 instead of 2, a gap of 28 regions, and a crossing search then finds 176 places where pieces cross without sharing a point.' },
      { q: 'Does the result mean Hobart\'s roads are wrong?', a: 'No. It means the digital file joins some roads differently from a flat network: some crossings are probably bridges or flyovers and some may be junctions drawn without a shared point. Telling them apart needs a second source, which is part of the exercise.' },
      { q: 'Do you teach Tasmanian senior students?', a: 'Yes. We use Tasmanian year levels, plan around the school terms and support learners taking computing and maths in senior years. Anything submitted for marks at school is written by the student, not by us.' },
      { q: 'What time are lessons for Hobart learners?', a: 'Most Hobart learners pick a slot between school pick-up and dinner, or on Saturday morning; the time is fixed at the trial and quoted in Tasmanian time. Our teachers are four and a half hours behind in winter and five and a half behind in summer.' },
      { q: 'Are classes available for younger children too?', a: 'Yes. Children from six begin with Scratch and picture-based projects, and move to typed code when they are ready; the projects on this page simply aim at older learners.' },
      { q: 'Is there a Modern Age Coders centre in Hobart?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Hobart coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Hobart and Australian learners',
    html: 'Year 11 and 12 learners in Tasmania will find two pages written for their courses: <a class="cg-inline-link" href="/tasc-computer-science-help">TASC Computer Science help</a> and <a class="cg-inline-link" href="/tasc-mathematics-methods-tutoring">TASC Mathematics Methods tutoring</a>. Learners who enjoy proofs and puzzles should look at <a class="cg-inline-link" href="/problem-solving-through-coding-australia">problem solving through coding</a>. Every Australian page is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hobart and Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/tasc-computer-science-help', label: 'TASC Computer Science' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-hba .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-hba .cg-hero h1 { font-weight: 800; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-hba .cg-capsule { border-top: 2px solid var(--cg-accent); border-left: 2px solid var(--cg-accent); padding: 0.9rem 0 0 0.9rem; }
.cg-root.cg-hba .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-hba .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.013em; }
.cg-root.cg-hba .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-hba .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-hba .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hba .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hba .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Greater Hobart, ABS Census 2021 QuickStats, GCCSA 6GHOB (read 7 October 2026): 247,086 people; median age 39 (Tasmania 42, Australia 38); 66,185 families; 106,298 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 80,846 (85.1 percent; Tasmania 87.7; Australia 72.3), flat or apartment 7,759 (8.2 percent; Tasmania 5.3; Australia 14.2); occupation, employed people aged 15 and over: Professionals 28,533 (24.0 percent; Tasmania 20.0; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 59,920 (29.2 percent; Tasmania 21.9; Australia 26.3); aged 15 to 19 13,323 (5.4 percent). Department for Education, Children and Young People, 2027 school term dates: Term 1 4 February to 9 April; Term 2 26 April to 2 July; Term 3 19 July to 24 September; Term 4 11 October to 16 December. IANA tz database: Australia/Hobart, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Euler\'s formula for planar graphs as a data check. City of Hobart Open Data, Road Centre Lines (ArcGIS item 22ff6fa713bb452c975e4c78202ce1cf, CC BY 4.0), GeoJSON downloaded 7 October 2026: 2,343 LineString features; Type_Description roaloc 1,358, roacol 418, roaart 379, roapat 188. Car roads (roaloc, roacol, roaart): 2,155 pieces; haversine length 350.4 km (Shape__Length sum agrees within 0.2 km); 673 distinct Road_Name values; Speed_Limit 50 on 1,924 pieces. Graph with piece endpoints snapped at 1 m (local metric projection at 42.88 degrees south): 113 connected components, 85 of a single edge; largest component V = 1,573, E = 1,861 (2 closed pieces excluded), faces traced by the rotation of edges at each node from first and last segment bearings F = 262; planar expectation E - V + 2 = 290; V - E + F = -26. Segment-intersection search between car-road pieces (proper crossings away from shared points): 176, including pairs named Domain Highway / Tasman Highway, Brooker Highway / Domain Highway, Olinda Grove / Southern Outlet, Elizabeth Street / Melville Street. Lesson family: Euler\'s formula and invariants as data-quality tests; distinct from Eulerian paths, shoelace areas and the other graph pages on the site.',
    requiredMentions: [
      '247,086',
      '66,185',
      '106,298',
      '59,920',
      '28,533',
      '2,155',
      '1,573',
      '1,861',
      '350.4 km',
      'Elizabeth Street with Melville Street'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Hobart (6GHOB): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/6GHOB' },
      { claim: 'City of Hobart Open Data, Road Centre Lines (CC BY 4.0), with the council\'s completeness disclaimer.', url: 'https://data-1-hobartcc.opendata.arcgis.com/datasets/hobartcc::road-centre-lines' },
      { claim: 'Department for Education, Children and Young People, Tasmanian school term dates 2027.', url: 'https://www.decyp.tas.gov.au/learning/term-dates/' },
      { claim: 'IANA time zone database, australasia file: Australia/Hobart rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Which of the 176 crossings are flyovers and which are drawing gaps: not verified against a second source, so no individual crossing is labelled either way.',
      'The number of city blocks in Hobart: the traced regions depend on the file and the 1 m joining tolerance and are not an official count.',
      'Tasmanian Government transport data (GTFS): transport.tas.gov.au returned 403 and was not circumvented.',
      'Bureau of Meteorology station names: the observations feed returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the City of Hobart, the Tasmanian Government or the ABS.'
    ]
  }
};
