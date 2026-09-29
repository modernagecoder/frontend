'use strict';
// Portadown (cg- town page, UK cluster Phase 8, towns band A, row 425; first Northern Ireland town of the band). Keyword
// slug per the owner's rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: where is
// the centre of a town, and does "most connected" mean "most central"? (degree centrality against closeness centrality on
// a real walking network).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -6.480,54.400,-6.405,54.440 in 6 tiles (ODbL): walkable
// ways (all highways except motorways, trunk roads, construction, platforms, foot=no, private), 272.9 km; largest connected
// piece simplified to 4,504 junctions and dead ends joined by 5,625 segments; 6,407 building outlines; the node OSM uses to
// label the town (place=town "Portadown", id 267762608).
// Our run (scratchpad ptd/cen.py): all-pairs walking distances (scipy Dijkstra). Degree = streets meeting at a junction:
// 1 (dead ends) 1,200; 2 188; 3 2,797; 4 313; 5 5; 6 1. Closeness = 1 / average walking distance to every other junction.
// Most central junction: average 1,620 m (median junction 2,440 m, least central 5,079 m); it lies 91 m from the town
// label point; half the network is within 1,659 m of it. Spearman correlation between degree and closeness 0.205; the 20
// most central junctions have 3 or 4 streets; the 6 junctions with 5 or more streets have a median closeness rank of
// 1,904 of 4,504 (2 of the 6 in the top tenth). Closeness also correlates 0.777 with distance from the rectangle's edge.
// Lesson family: degree and closeness centrality on a spatial network (local versus global importance), edge effects.
// Screened: "closeness centrality", "degree centrality" 0 hits; Belfast owns PageRank on the bus network (random-surfer
// importance), a different measure and data set.
// Place facts: NISRA Census 2021 MS-A01 (usual residents): Portadown DEA 32,926; Lurgan DEA 38,198; Craigavon DEA 29,188;
// settlement "Craigavon Urban Area including Aghacommon" 72,301 (NISRA publishes no separate settlement figure for
// Portadown); Armagh City, Banbridge and Craigavon LGD 218,656. Neighbourhood names: OpenStreetMap place=suburb nodes in the
// rectangle (postcodes.io places does not cover Northern Ireland).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'PORTADOWN', label: 'Portadown', blurb: 'Coding and AI classes for Portadown, with a network project that asks which junction is truly central and finds that the busiest ones are not.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-portadown',
  code: 'ptd',
  accent: '#8A1572',
  accentRationale: 'Portadown: a deep magenta (6.96:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Portadown',
    eyebrow: 'Portadown, County Armagh, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Armagh City, Banbridge and Craigavon' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Armagh', href: '/best-coding-class-in-armagh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Portadown, Northern Ireland',
  title: 'Coding and AI Classes in Portadown | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Portadown, Seagoe, Killycomain and Mahon learners aged 6 to 67, taught live online. First lesson free.',
  ogDescription: 'Coding and AI classes for Portadown, with a network project comparing the busiest junctions with the truly central ones on 272.9 km of mapped paths.',
  twitterDescription: 'Portadown coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Portadown',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Portadown and County Armagh, taught live with network thinking first.'
  },

  h1: 'Coding and AI classes in Portadown',
  capsuleQ: 'Where can Portadown learners find the best coding and AI classes?',
  capsule: 'NISRA\'s Census 2021 tables count 32,926 usual residents in the Portadown District Electoral Area, within the Armagh City, Banbridge and Craigavon council area; the town itself sits inside the settlement NISRA calls Craigavon Urban Area, 72,301 people in all. Seagoe, Killycomain, Mahon, Tavanagh and Bocombra are among the neighbourhoods OpenStreetMap names around the centre. Our India-based tutors teach coding, AI, Python, vibe coding and maths over live video to Portadown learners from primary age to 67, singly or in a class of five to ten matched by stage. Lessons start from reasoning, so a learner can question what a model, a map or a chatbot claims. We give the opening lesson free and close it by recommending a course. The Portadown project measures 4,504 junctions on the town\'s mapped paths two ways, and shows that the most connected junctions are not the most central ones. After the trial, group lessons are USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'Ask where the centre of a town is and you will get different answers depending on what "centre" means. One idea is local: the junction where the most streets meet, which network scientists call degree centrality. Another is global: the junction from which you can reach everywhere else with the least walking on average, called closeness centrality. They sound similar and behave very differently. This project computes both for every junction on Portadown\'s walking network as mapped on OpenStreetMap, 272.9 km of streets and paths, and checks the answer against the point the map itself uses to label the town.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Portadown?',

  picks: {
    eyebrow: 'Portadown course picks',
    h2: 'Four courses Portadown learners start with',
    intro: 'Sorted by age, from P3 to grown-ups. The first class on any of them is live, free of charge, and booked without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: maps, networks and deciding what "central" should mean before measuring it.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and tested properly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to graphs and data, including the Portadown centrality project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI ranks and recommends, network data, and AI agents built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Portadown in the census',
      h2: 'Portadown, Seagoe, Killycomain and Mahon',
      intro: 'NISRA Census 2021 counts for the district electoral areas around the town and for the urban settlement they share.',
      body: [
        { kind: 'table', caption: 'Usual residents, NISRA Census 2021 table MS-A01', head: ['Area', 'Census geography', 'Usual residents'], rows: [
          ['Portadown', 'District Electoral Area', '32,926'],
          ['Lurgan', 'District Electoral Area', '38,198'],
          ['Craigavon', 'District Electoral Area', '29,188'],
          ['Craigavon Urban Area including Aghacommon', 'Settlement', '72,301']
        ] },
        { kind: 'p', text: 'NISRA treats Portadown, Lurgan and Craigavon as one urban settlement, so there is no separate settlement count for Portadown; the electoral area also takes in countryside around the town. The figures come from different geographies and are never added together here. Ballyhannon, Ballyoran, Baltytum, Bocombra, Kernan, Killycomain, Mahon, Seagoe and Tavanagh are neighbourhood names placed on OpenStreetMap inside our study area. Schools here follow the Northern Ireland Curriculum, so we plan by primary class and post-primary year and help with CCEA GCSE and A level subjects. Send the holiday dates and lessons will fit round them.' },
        { kind: 'callout', h3: 'Northern Ireland pages and CCEA help', p: 'See <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">coding and AI classes in Northern Ireland</a>, <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a> and <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology help</a>. Our reasons for teaching thinking first are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Portadown project',
      h2: 'Degree against closeness: which Portadown junction is really central?',
      intro: 'Two definitions of importance, every junction measured, and a check against the map\'s own label.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle around Portadown and keeps every way a pedestrian may use. Joining points where a path merely bends leaves 4,504 junctions and dead ends linked by 5,625 segments. Degree is easy to count: the number of streets meeting at each junction. Closeness needs the walking distance from every junction to every other, over 20 million pairs, which Python computes with Dijkstra\'s algorithm on a sparse matrix; a junction\'s closeness is one over its average distance to all the rest.' },
        { kind: 'table', caption: 'Centrality on Portadown\'s mapped walking network, our Python run on OpenStreetMap data', head: ['Measure', 'Result'], rows: [
          ['Junctions where three streets meet', '2,797'],
          ['Dead ends (one street)', '1,200'],
          ['Junctions with five or six streets', '6'],
          ['Average walk from the most central junction', '1,620 m'],
          ['Average walk from a typical junction', '2,440 m'],
          ['Most central junction to the town label point', '91 m'],
          ['Correlation between degree and closeness', '0.205']
        ] },
        { kind: 'p', text: 'Closeness finds the town centre with surprising accuracy: the junction with the shortest average walk to everywhere else sits 91 m from the point OpenStreetMap uses to label Portadown, and half the network lies within 1,659 m of it. Degree tells a different story. The twenty most central junctions all have just three or four streets, while the six junctions where five or more streets meet have a median closeness rank of 1,904 out of 4,504. A rank correlation of 0.205 means that knowing how many streets meet somewhere tells you very little about how central it is.' },
        { kind: 'p', text: 'One caution: closeness also rises with distance from the edge of our rectangle (correlation 0.777), partly because the town centre really is in the middle and partly because cutting the map makes edge junctions look remote. Moving the rectangle would shift the scores near its borders, which is why the learner reruns it before trusting the details.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Draw a small street map, count the roads at each crossing, then find the crossing closest to everywhere on average.' },
          { h3: 'Years 8 to 10', p: 'Build a little network of Portadown streets in Python and work out degree for each junction.' },
          { h3: 'Years 11 to 14', p: 'Compute closeness with Dijkstra on the full network and compare the two rankings.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap paths, our measures', p: 'Paths, streets and buildings are from OpenStreetMap and its contributors under the Open Database Licence. The rectangle, the network and every centrality figure are our own calculations, not a planning assessment.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Importance and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Behind any league table sits a choice about what counts.',
      body: [
        { kind: 'table', caption: 'From the Portadown centrality project to working with AI', head: ['In the network project', 'When AI ranks things for you'], rows: [
          ['Degree and closeness disagreed', 'Different definitions give different winners'],
          ['Busiest junctions were not central', 'A local signal can mislead about the whole'],
          ['Closeness found the centre within 91 m', 'A good measure can be checked against reality'],
          ['Edge junctions looked remote', 'The boundary of the data shapes the answer'],
          ['Correlation was only 0.205', 'Two plausible scores may barely agree']
        ] },
        { kind: 'p', text: 'Search results, recommendations and AI assistants all rank things, and every ranking rests on a choice of what counts as important. Ask an AI to "find the most important places" and it will pick a definition without telling you. Vibe coding means the learner explains a program in plain words while an AI drafts the code; in Portadown lessons the learner also names the measure the code must use and tests the output against an outside check, the way the town label served here. AI agents that rank options for you should be asked the same question. Agents enter the course when a learner writes Python without a crutch, which for most is Year 12 onwards or adulthood, and Copilot Studio agents are covered in private lessons alone. Two pages go further: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>, and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how UK learners move on to building agents</a>.' },
        { kind: 'p', text: 'We are not connected with OpenStreetMap, NISRA or Armagh City, Banbridge and Craigavon Borough Council. We used only their openly published data; the network analysis and any mistakes in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counting crossroads to network algorithms',
    intro: 'Primary class or school year gives us a starting point; the free lesson confirms it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Maps, counting and asking what a word like "central" means.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and networks', p: 'Graphs, shortest paths and rankings alongside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Data, AI and agents', p: 'Network data, ranking and AI agents, step by step in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Networks and code',
    h2: 'What is closeness centrality, and how is it different from degree centrality?',
    intro: 'Closeness centrality ranks a point by how short its average distance is to every other point in a network, while degree centrality simply counts how many links meet at that point; the first measures global reach, the second local busyness.',
    p1: 'On Portadown\'s 4,504-junction walking network, the most central junction by closeness sat 91 m from the map\'s town label, while the six junctions with the most streets ranked a median 1,904th for closeness, with a correlation between the two measures of only 0.205.',
    p2: 'Learners who have compared the two ask of any AI ranking: important by what definition, and has anyone checked it?',
    closer: 'A Portadown teenager who asks which definition sits behind a ranking will not take an AI league table on trust, and writing the code yourself is the quickest way to learn that.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Seagoe to Tavanagh, all online',
    intro: 'A computer with a webcam and a connection that manages video calls is all you need.',
    cells: [
      { h3: 'Hands on the keys', p: 'Every keystroke is the learner\'s own. Watching via screen share, the tutor keeps asking what each figure tells us.' },
      { h3: 'Level from the trial', p: 'The free lesson shows where to start, and any CCEA exam is noted.' },
      { h3: 'First lesson free', p: 'We charge nothing for the opening lesson and suggest a course at the end.' },
      { h3: 'Small matched classes', p: 'Five to ten learners from around the UK, grouped by stage.' },
      { h3: 'Two a week in term', p: 'Lessons stop for school holidays.' },
      { h3: 'Clock changes handled', p: 'When summer time starts or ends, the tutor adjusts and your lesson hour does not move.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening, rarely live on the same street. Video removes the distance.' }
  },

  fees: {
    h2: 'Portadown fees',
    intro: 'For Portadown we use the international price list, the same one that applies everywhere outside India.',
    first: 'A full free lesson, then our recommendation.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'County Armagh families are invoiced in US dollars; there is no pound price. The first bill follows the trial once a course and a regular slot are settled, and the pricing page explains breaks, absences and changes of format.'
  },

  reviewsH2: 'Google reviews: what Armagh, Banbridge and Craigavon families say',

  book: {
    h2: 'Book a free Portadown lesson',
    intro: 'An age or school year and one interest are all we ask. We might open with counting roads at crossings on a map, an AI-assisted Scratch game, a first Python script, or ranking real Portadown junctions.',
    success: 'Thank you. Your Portadown request is with us.'
  },

  faq: {
    h2: 'Portadown questions',
    intro: 'Centrality, the network project, Python, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Portadown?', a: 'NISRA\'s Census 2021 counts 32,926 usual residents in the Portadown District Electoral Area. The town is part of the Craigavon Urban Area settlement, 72,301 people, for which NISRA gives no separate Portadown figure.' },
      { q: 'Are coding and AI classes available online in Portadown?', a: 'Yes, as live video lessons for ages 6 to 67 across Portadown and County Armagh.' },
      { q: 'What is degree centrality?', a: 'The number of links meeting at a point in a network. For a street network it is how many streets join at a junction, a measure of local busyness rather than overall reach.' },
      { q: 'How can you find the centre of a town with data?', a: 'One way is closeness centrality: find the junction with the shortest average walk to every other junction. On Portadown\'s mapped paths it landed 91 m from the map\'s town label.' },
      { q: 'What does the Portadown project involve?', a: 'Computing degree and closeness centrality for 4,504 junctions on 272.9 km of mapped Portadown paths, then comparing the two rankings and checking for edge effects.' },
      { q: 'Is vibe coding included?', a: 'From primary age up: learners set out what they want, then test and repair the AI\'s code.' },
      { q: 'At what stage do learners build AI agents?', a: 'Once Python is secure, usually from Year 12 or as adults; Copilot Studio agents are one-to-one only.' },
      { q: 'Do you help with CCEA GCSE and A level?', a: 'Yes, in computing and maths subjects, taught for understanding; we never promise grades.' },
      { q: 'How much are lessons?', a: 'No fee for the trial. After that it is USD 100 per month in a class or USD 150 per month with a tutor to yourself.' },
      { q: 'Do lessons pause in the holidays?', a: 'We break when the schools do; just pass on the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Northern Ireland pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-lurgan">Lurgan</a> (an agent that plans for slips), <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a>, <a class="cg-inline-link" href="/best-coding-class-in-newry">Newry</a> and <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a>. Further afield, start from <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Portadown and County Armagh',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-class-in-armagh', label: 'Armagh' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ptd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-ptd .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-ptd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-ptd .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ptd .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-ptd .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-ptd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ptd .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-ptd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-ptd .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Armagh City, Banbridge and Craigavon (N09000002). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: Portadown DEA 32,926; Lurgan DEA 38,198; Craigavon DEA 29,188; settlement Craigavon Urban Area including Aghacommon 72,301; LGD 218,656 (no separate Portadown settlement figure). Neighbourhoods (OpenStreetMap place=suburb): Ballyhannon, Ballyoran, Baltytum, Bocombra, Kernan, Killycomain, Mahon, Seagoe, Tavanagh.',
    localProject: 'OSM API 0.6 bbox -6.480,54.400,-6.405,54.440: walkable network 272.9 km, 4,504 junctions, 5,625 segments. Degree: 1 1,200; 2 188; 3 2,797; 4 313; 5 5; 6 1. Closeness (1/mean walking distance): best 1,620 m average (median 2,440, worst 5,079), 91 m from place=town node 267762608; half the network within 1,659 m. Spearman degree vs closeness 0.205; top 20 closeness all degree 3-4; degree 5+ median closeness rank 1,904 of 4,504. Closeness vs distance from box edge 0.777. Lesson family: degree vs closeness centrality, edge effects.',
    requiredMentions: [
      '32,926',
      '72,301',
      '272.9 km',
      '4,504',
      'Seagoe',
      'Killycomain',
      'Tavanagh',
      'Bocombra',
      'closeness centrality',
      'degree centrality'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 main statistics table MS-A01, usual residents by settlement, district electoral area and LGD.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap paths, streets, buildings and place names around Portadown, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'CCEA qualifications used in Northern Ireland schools (GCSE and A level).', url: 'https://ccea.org.uk/' }
    ],
    rejectedClaims: [
      'A Portadown settlement population: NISRA publishes none; only the DEA and the combined urban-area figures are used.',
      'Linen, railway or river history: not read from a source; not claimed.',
      'Parades, politics or identity topics: excluded; the neighbourhood list deliberately leaves out names associated with them.',
      'That the most central junction is a named street or landmark: not named.',
      'Named schools, term dates or transfer test advice: none.',
      'Sterling prices: none.'
    ]
  }
};
