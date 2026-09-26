'use strict';
// West Sussex (cg- county index, UK cluster Phase 7, row 252). West Sussex County Council over seven districts: Adur,
// Arun, Chichester, Crawley, Horsham, Mid Sussex, Worthing. Spine: do people's journeys to work follow county lines?
// Data: 2011 Census WU01UK (location of usual residence and place of work, local authority level, all persons; Nomis
// NM_1203_1, read 26 September 2026) for 21 districts: the seven in West Sussex, six in East Sussex (Brighton and Hove,
// Lewes, Wealden, Eastbourne, Hastings, Rother), five in Surrey (Mole Valley, Reigate and Banstead, Tandridge, Waverley,
// Guildford) and three in Hampshire (East Hampshire, Havant, Portsmouth).
// Our analysis (scratchpad wsx/comm.py, networkx 3.5): undirected graph, edge weight = commuters both ways; 293,311
// commuters crossed between these districts and 496,591 worked in their home district. Greedy modularity and Louvain
// (seed 20260926) give the same four groups, modularity 0.417: (1) Arun, Chichester, East Hampshire, Havant, Portsmouth,
// Guildford, Waverley; (2) Crawley, Horsham, Mid Sussex, Mole Valley, Reigate and Banstead, Tandridge; (3) Adur,
// Worthing, Brighton and Hove, Lewes; (4) Eastbourne, Hastings, Rother, Wealden. County grouping modularity 0.342.
// Largest flows: Havant to Portsmouth 10,915; Arun to Chichester 10,551; Lewes to Brighton and Hove 8,478; Waverley to
// Guildford 7,730; Mid Sussex to Crawley 7,119; Adur to Brighton and Hove 6,615. Crawley: 30,706 in-commuters from the
// other 20 districts against 28,828 residents working in Crawley; top origins Mid Sussex 7,119, Horsham 6,159, Reigate
// and Banstead 4,735, Brighton and Hove 3,715.
// Lesson family: community detection by modularity on a weighted flow network; screened (community detection,
// modularity, Louvain: 0 hits). Same WU01UK source as North Yorkshire's gravity model, different area and lesson.
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 882,676); ONS built-up areas checked against
// our OA sums (Burgess Hill and Haywards Heath straddle slightly; Haslemere and Emsworth mostly outside, left out).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WEST SUSSEX', blurb: 'Seven districts from Chichester to Crawley, and a lesson that lets commuting data draw its own map, ignoring county lines.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-west-sussex',
  code: 'wsx',
  accent: '#40325C',
  accentRationale: 'West Sussex: a slate indigo from the solver (9.25:1 on the darkest paper tint), bluer than the Somerset and North Yorkshire purples',
  pageType: 'governorate',
  place: {
    name: 'West Sussex',
    eyebrow: 'West Sussex',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Chichester', href: '/best-coding-class-in-chichester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West Sussex',
  title: 'Coding Classes in West Sussex | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across West Sussex, from Crawley, Worthing and Bognor Regis to Horsham, Haywards Heath, Chichester and Littlehampton.',
  ogDescription: 'Coding classes for all of West Sussex, and a network project: feed census commuting data to a community-detection algorithm and see which towns really belong together.',
  twitterDescription: 'West Sussex coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for West Sussex',
    description: 'Ability-placed online coding, Python, data science and mathematics for children, teenagers and adults across West Sussex, taught live in English.'
  },

  h1: 'Coding classes in West Sussex',
  capsuleQ: 'What are the best coding classes in West Sussex?',
  capsule: 'West Sussex has one county council and seven districts, which together held 882,676 people at the 2021 Census by our sum of the seven published counts. Crawley and Worthing are the largest towns, then Bognor Regis, Horsham and Haywards Heath. We run every lesson live over video from India and match learners to classes by ability, so a quick nine-year-old and a careful adult can each start in the right place. Coding, Python, data science and maths are taught to anyone from 6 to 67, one-to-one or in small groups of five to ten. The West Sussex project lets census commuting data draw its own map. Your first lesson is free of charge. From then on a group seat is USD 100 monthly and one-to-one teaching USD 150 monthly.',
  lead: 'County boundaries were drawn long before anyone commuted by car or train, so do they still describe how people live? The 2011 Census recorded where every worker lived and where they worked, which turns the South East into a network: districts are the points, and the numbers of people travelling between them are the links. Programs that find communities in networks, the same kind used on social media and in biology, can then group the districts by how strongly they are tied together, without being told any county names. This page\'s project runs that analysis on 21 districts in and around West Sussex. The map it draws cuts across county lines in three places.',
  wa: 'Hello Modern Age Coders, we are in West Sussex and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for West Sussex',
    h2: 'Where West Sussex learners begin',
    intro: 'An eight-year-old in Littlehampton who likes drawing maps, a Year 9 in Horsham who wants to know how social networks work, a Year 12 in Chichester doing real data science, and an adult in Crawley who analyses figures at work. Each begins with a free lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, including networks, tables and patterns found by programs.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data in Python for teenagers, from tables and charts to models that find structure.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Spreadsheets, statistics and SQL, then Python and dashboards, for adults who work with data.' }
    ]
  },

  sections: [
    {
      id: 'west-sussex', tint: '', eyebrow: 'West Sussex in figures',
      h2: '882,676 people from the Downs to the Weald',
      intro: 'District counts are 2021 Census figures from Nomis, with the total our own sum. The towns listed are ONS built-up areas; every one was recounted by us from its census output areas.',
      body: [
        { kind: 'table', caption: 'West Sussex\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Crawley', '120,550', 'Burgess Hill', '33,355'],
          ['Worthing', '111,620', 'Chichester', '31,710'],
          ['Bognor Regis', '68,435', 'Lancing and Sompting', '27,930'],
          ['Horsham', '50,215', 'East Grinstead', '26,350'],
          ['Haywards Heath', '40,185', 'Shoreham-by-Sea', '23,660'],
          ['Rustington', '33,885', 'Littlehampton', '19,065']
        ] },
        { kind: 'p', text: 'Arun is the largest district at 164,889 and Adur the smallest at 64,544. The ONS Crawley area reaches into Horsham district and the Worthing area into Arun. Burgess Hill and Haywards Heath each have several hundred residents just over the county edge, by our count, while Haslemere and Emsworth are left off because most of each lies outside West Sussex. Smaller towns include Hassocks and Hurstpierpoint, Southwick, Southwater, Selsey, Billingshurst and Storrington. School holidays are decided by West Sussex County Council and by academy trusts. We have not read their calendars, so we ask each family for its dates.' },
        { kind: 'callout', h3: 'Pages nearby', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-chichester">Chichester</a> page has its own project, and <a class="cg-inline-link" href="/coding-classes-in-east-sussex">East Sussex</a>, <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> and <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a> border the county.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Sussex project',
      h2: 'Letting commuters draw the map',
      intro: 'Twenty-one districts, the census record of who works where, and an algorithm that has never seen a county boundary.',
      body: [
        { kind: 'p', text: 'The learner downloads census table WU01UK from Nomis for 21 districts: all seven in West Sussex and fourteen neighbours in East Sussex, Surrey and Hampshire. Between them, 293,311 people commuted from one of these districts to another, and 496,591 worked in the district where they lived. Each district becomes a point in a network, and each pair is joined by a line whose weight is the number of people travelling between them in either direction.' },
        { kind: 'p', text: 'A community-detection algorithm then looks for groups of districts with many more links inside the group than you would expect by chance. The score it tries to raise is called modularity. Two different methods, a greedy one and the Louvain method, found exactly the same four groups, with a modularity of 0.417. Grouping the districts by county instead scores only 0.342: the counties are a worse description of how people actually move.' },
        { kind: 'table', caption: 'The four commuter communities our program found, 26 September 2026', head: ['Group', 'Districts', 'Counties it spans'], rows: [
          ['West coast and Portsmouth', 'Arun, Chichester, East Hampshire, Havant, Portsmouth, Guildford, Waverley', 'West Sussex, Hampshire, Surrey'],
          ['Crawley and the north', 'Crawley, Horsham, Mid Sussex, Mole Valley, Reigate and Banstead, Tandridge', 'West Sussex, Surrey'],
          ['Brighton and the coast', 'Adur, Worthing, Brighton and Hove, Lewes', 'West Sussex, East Sussex'],
          ['East Sussex east', 'Eastbourne, Hastings, Rother, Wealden', 'East Sussex only']
        ] },
        { kind: 'p', text: 'West Sussex does not appear as one community at all. Its seven districts split three ways: the west joins Portsmouth and the Hampshire border, the north joins Surrey around Crawley, and Adur and Worthing join Brighton. The strongest single links explain why: Arun to Chichester carries 10,551 commuters, Mid Sussex to Crawley 7,119 and Adur to Brighton and Hove 6,615. Crawley is a magnet: 30,706 people from the other 20 districts worked there, more than the 28,828 Crawley residents who worked in their own town.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Draw your own network of friends or clubs on paper, then circle the groups that are tightly linked.' },
          { h3: 'Ages 12 to 15', p: 'Build the commuting network in Python with the networkx library, draw it, and find the biggest flows.' },
          { h3: 'Ages 15 and up', p: 'Run community detection, compute modularity for the found groups and for the counties, and write up which lines the data ignores.' }
        ] },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'The commuting counts are from the 2011 Census, published by the ONS on Nomis, and they describe 2011, not today. The network, the four groups and the modularity scores are our own analysis. A different set of districts or a different method could draw the lines somewhat differently.' }
      ]
    },
    {
      id: 'network', tint: 'deep', eyebrow: 'Why West Sussex',
      h2: 'A county pulled three ways',
      intro: 'The West Sussex link, in the census flows themselves.',
      body: [
        { kind: 'table', caption: 'The six largest flows between the 21 districts, 2011 Census WU01UK', head: ['From', 'To', 'Commuters'], rows: [
          ['Havant', 'Portsmouth', '10,915'],
          ['Arun', 'Chichester', '10,551'],
          ['Lewes', 'Brighton and Hove', '8,478'],
          ['Waverley', 'Guildford', '7,730'],
          ['Mid Sussex', 'Crawley', '7,119'],
          ['Adur', 'Brighton and Hove', '6,615']
        ] },
        { kind: 'p', text: 'Community detection is one of the most useful tools in network science. It finds friendship groups in social networks, families of proteins that work together, and clusters of websites that link to each other. Planners use the same ideas to draw travel-to-work areas. A West Sussex student who has watched an algorithm split their own county three ways has learned to look at data as connections, and to question boundaries that were drawn for other reasons.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with West Sussex County Council, the ONS or any council named here. The census counts are theirs; our network analysis and any mistakes in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-chichester">Chichester</a> and <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> have their own pages; <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> is north, <a class="cg-inline-link" href="/coding-classes-in-east-sussex">East Sussex</a> east and <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a> west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From friendship maps to network science',
    intro: 'The free lesson shows where to start. Age gives a hint; skill settles it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Maps and links', p: 'Block coding with maps, paths and characters that connect places together.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 13', h3: 'Tables and patterns', p: 'Typed Python reading small tables and finding the biggest numbers and the strongest links.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Networks and data', p: 'Data science in Python, including networks, grouping and honest reporting of results.', courses: ['data-science-course-for-teens-python-data', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Analysis for work', p: 'Spreadsheets, SQL and Python for adults who need to find structure in business data.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and hidden structure',
    h2: 'Algorithms find groups we never asked for. Should we trust them?',
    intro: 'Finding structure is powerful; knowing what it means is the human part.',
    p1: 'Community detection found four commuter groups without being told a single county name, and they make sense: Crawley with its Surrey neighbours, the coast with Brighton, the west with Portsmouth. Many AI systems do something similar when they group customers, songs or patients. The groups can be genuinely revealing, and they can also reflect quirks of the data, such as which districts were included or which year was measured.',
    p2: 'A West Sussex student who has run the analysis both ways, and compared it with the county map, knows to ask what an algorithm\'s groups are based on and what would change them. That is the difference between using AI results and understanding them.',
    closer: 'Learning to code in 2026 gives a West Sussex teenager the means to understand the patterns algorithms find, instead of simply accepting them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson logistics',
    h2: 'Selsey to East Grinstead, from your own room',
    intro: 'West Sussex runs a long way from the coast to the Surrey border, and weekday traffic makes a weekly class a real trip. Online lessons remove it.',
    cells: [
      { h3: 'Right at home', p: 'A flat in Bognor Regis, a semi in Southwater, a house in Haywards Heath. The teacher and learner share a screen, and the learner codes.' },
      { h3: 'Familiar school terms', p: 'Key stages, year groups, GCSEs and A levels mean what they mean in West Sussex schools, and lessons are in English.' },
      { h3: 'Free first lesson', p: 'A real lesson, then an honest recommendation on level and course, with no card details asked for.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at one level, whether in Sussex or far beyond.' },
      { h3: 'Breaks for holidays', p: 'Most learners take two lessons a week and pause for their school\'s own holidays.' },
      { h3: 'Always UK time', p: 'Your lesson time is fixed in UK time through the clock changes; the teacher, on India time several hours ahead, does the adjusting.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Even Crawley or Worthing seldom has five learners at the same stage free on the same evening. Grouping by level lets a learner in Storrington or Selsey join the right class.' }
  },

  fees: {
    h2: 'Fees in West Sussex',
    intro: 'Rustington or Horsham, the fee is the same, and it matches every country we teach except India.',
    first: 'A complete lesson with real work, then our advice on level and course.',
    group: 'Roughly eight lessons a month in a group of five to ten at one level.',
    private: 'Roughly eight lessons a month, one teacher with one learner.',
    closer: 'Prices are in US dollars only. No invoice is raised until the free lesson ends with an agreed course and a regular weekly slot. The pricing page describes pausing, missing a lesson, and changing between group and private classes.'
  },

  reviewsH2: 'Google reviews from parents and learners',

  book: {
    h2: 'Book a free West Sussex lesson',
    intro: 'Send the learner\'s age or year and one or two interests. A first lesson might be a Scratch map game, a Python table, or the commuter network on this page.',
    success: 'Thank you. Your West Sussex request is with us.'
  },

  faq: {
    h2: 'West Sussex questions',
    intro: 'The county, the network project and how lessons work.',
    items: [
      { q: 'How many people live in West Sussex?', a: '882,676 usual residents in the 2021 Census, which is our own total of the seven district counts the ONS publishes on Nomis.' },
      { q: 'What are the largest towns in West Sussex?', a: 'By ONS built-up area: Crawley 120,550, Worthing 111,620, Bognor Regis 68,435, Horsham 50,215 and Haywards Heath 40,185.' },
      { q: 'What is the commuting network project?', a: 'Learners build a network of 21 districts from 2011 Census commuting flows, run community detection, and find four groups that split West Sussex three ways and score higher than the county map.' },
      { q: 'What is community detection?', a: 'A family of algorithms that find groups in a network with many more links inside than between them. It is used for social networks, biology and travel-to-work areas.' },
      { q: 'What is modularity?', a: 'A score for how well a set of groups captures a network\'s structure, comparing links inside groups with what chance would give. Our commuter groups score 0.417 against 0.342 for counties.' },
      { q: 'Are lessons held in West Sussex?', a: 'No. All teaching is live online, so learners join from anywhere in the county.' },
      { q: 'Which ages do you teach?', a: 'Ages 6 to 67. Blocks for young children, Python from about eight to ten, data science and algorithms for teenagers, and data skills for adults. The free lesson sets the level.' },
      { q: 'Can teenagers learn network analysis?', a: 'Yes. The teen data science course works with real data in Python, and projects like this one add networks.' },
      { q: 'What will lessons cost us?', a: 'Nothing for the first one. Groups then cost USD 100 each month and one-to-one teaching USD 150 each month; there is no entry fee, and no term you must sign up for.' },
      { q: 'Do you pause for West Sussex school holidays?', a: 'Yes, if you wish. West Sussex County Council and academy trusts publish their own dates, and we plan around yours.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Pages around West Sussex',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-chichester">Chichester</a>, then <a class="cg-inline-link" href="/coding-classes-in-east-sussex">East Sussex</a>, <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a>, <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West Sussex and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-chichester', label: 'Chichester' },
    { href: '/coding-classes-in-surrey', label: 'Surrey' }
  ],

  personalityCss: `
.cg-root.cg-wsx .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-wsx .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-wsx .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-wsx .cg-eyebrow { letter-spacing: 0.21em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-wsx .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-wsx .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-wsx .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsx .cg-table th { letter-spacing: 0.045em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-wsx .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-wsx .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Sussex: West Sussex County Council over Adur, Arun, Chichester, Crawley, Horsham, Mid Sussex, Worthing. ONS Census 2021 TS001 via Nomis: Arun 164,889; Mid Sussex 152,566; Horsham 146,778; Chichester 124,068; Crawley 118,493; Worthing 111,338; Adur 64,544; our sum 882,676. ONS built-up areas (published): Crawley 120,550 (Crawley, Horsham); Worthing 111,620 (Arun, Worthing); Bognor Regis 68,435; Horsham 50,215; Haywards Heath 40,185 (39,779 inside); Rustington 33,885; Burgess Hill 33,355 (32,489 inside); Chichester 31,710; Lancing and Sompting 27,930; East Grinstead 26,350; Shoreham-by-Sea 23,660; Littlehampton 19,065; Hassocks and Hurstpierpoint 14,215; Wick 13,225; Southwick 12,240; Southwater 11,205; Selsey 10,735; Barnham 10,145; Billingshurst 9,120; Storrington 8,710. Excluded: Haslemere, Emsworth. 2011 Census WU01UK (Nomis NM_1203_1), 21 districts: cross-district 293,311; same-district 496,591; Havant to Portsmouth 10,915; Arun to Chichester 10,551; Lewes to Brighton and Hove 8,478; Waverley to Guildford 7,730; Mid Sussex to Crawley 7,119; Adur to Brighton and Hove 6,615; Crawley in-commuters from the other 20 districts 30,706; Crawley residents working in Crawley 28,828.',
    localProject: 'Community detection on an undirected weighted commuting network (21 districts, 210 edges, weight = flows both ways). networkx greedy_modularity_communities and louvain_communities (seed 20260926) agree: 4 groups, modularity 0.417; county partition 0.342. Groups: Arun, Chichester, East Hampshire, Havant, Portsmouth, Guildford, Waverley | Crawley, Horsham, Mid Sussex, Mole Valley, Reigate and Banstead, Tandridge | Adur, Worthing, Brighton and Hove, Lewes | Eastbourne, Hastings, Rother, Wealden. Page labels the analysis as ours and the data as 2011. AI angle: unsupervised grouping reveals and can mislead. Lesson family: community detection, modularity, boundaries vs behaviour.',
    requiredMentions: [
      '882,676',
      'community detection',
      'modularity',
      '0.417',
      '30,706',
      'Littlehampton',
      'East Grinstead',
      'Rustington',
      'Lancing and Sompting',
      'Hassocks and Hurstpierpoint',
      'Southwater'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the seven West Sussex districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for West Sussex towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS 2011 Census WU01UK location of usual residence and place of work, local authority level, via Nomis.', url: 'https://www.nomisweb.co.uk/' }
    ],
    rejectedClaims: [
      'Gatwick Airport facts: not read from a primary page, so the airport is not described.',
      'That the found groups match official travel-to-work areas: not checked, not claimed.',
      'Commuting patterns today: not measured; the page says the data describe 2011.',
      'Reasons for individual flows beyond distance and town size: not researched.',
      'West Sussex school term dates: none read.',
      'Named West Sussex schools: none named.'
    ]
  }
};
