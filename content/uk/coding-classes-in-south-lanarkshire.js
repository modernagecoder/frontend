'use strict';
// South Lanarkshire (cg- council area page, UK cluster Phase 7, row 280). One council. Spine: what is the fastest way to
// spread one lesson through a whole school, and what gets lost on the way? Anchor (read raw 26 September 2026): Historic
// Environment Scotland LB37049, Category A, New Lanark, Visitor Centre (formerly New Institution for the Formation of
// Character): "1816; Engine House 1881"; "one component of the ideal industrial community begun by David Dale and
// developed by Robert Owen"; "the Institution served as part of Owen's complex system of education that provided
// facilities for all ages"; "built on the lines that Owen set out in the new 'Articles of Partnership' for a school based
// on the ideas of the educational innovator, Joseph Lancaster - for example in the large apartment at the upper level
// with galleries on three sides"; "including a library and a reading room". LB37051 (Mill No 1): "originally built in
// 1785 and spinning started in 1786"; "burnt down on 9 October 1788"; "New Lanark was a pioneering cotton-spinning
// village, which became a model for industrial communities".
// Our model (scratchpad slk/bcast.py; an invented school of 500): each round, anyone who knows the lesson may teach k new
// pupils; each hand-off keeps the lesson intact with probability 0.98 (invented). Teacher alone, 10 a round: 50 rounds,
// 1 hand-off, 98.0 per cent. Monitorial (teacher trains monitors 10 a round, then each monitor teaches 10): 6 rounds,
// 2 hand-offs, 96.0 per cent (Monte Carlo 95.99). Everyone teaches 1 a round: 9 rounds, longest chain among the 500 is 8
// hand-offs (85.1 per cent at worst), mean depth 4.44, average intact 91.5 per cent. Everyone teaches 3: 5 rounds, up to
// 5 (90.4). Everyone teaches 10: 3 rounds, up to 3 (94.1).
// Lesson family: broadcast trees, fan-out versus depth, logarithmic rounds, error accumulating along chains; screened
// (gossip, broadcast, fan-out, monitorial, Lancaster: 0 hits). We do not describe how Lancaster's system actually worked
// beyond the listing's mention of his ideas.
// Place facts: NRS, Scotland's Census 2022 rounded estimates: South Lanarkshire S12000029 327,200; 147,800 households;
// 184.7 per square kilometre; 0 to 14 51,600 (15.8 per cent), 65+ 66,300 (20.3 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SOUTH LANARKSHIRE', blurb: 'East Kilbride, Hamilton, Rutherglen, Cambuslang and Lanark, and a New Lanark lesson on spreading one lesson through a school.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-south-lanarkshire',
  code: 'slk',
  accent: '#37377A',
  accentRationale: 'South Lanarkshire: a slate indigo from the solver (8.5:1 on the darkest paper tint), bluer than the Inverclyde violet and lighter than the Dumfries and Galloway indigo',
  pageType: 'governorate',
  place: {
    name: 'South Lanarkshire',
    eyebrow: 'South Lanarkshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'South Lanarkshire',
  title: 'Coding Classes in South Lanarkshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across South Lanarkshire, from East Kilbride, Hamilton and Rutherglen to Cambuslang, Blantyre and Lanark.',
  ogDescription: 'Coding classes for all of South Lanarkshire, and a New Lanark project: spread one lesson through a school of 500 in Python and see what each hand-off costs.',
  twitterDescription: 'South Lanarkshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for South Lanarkshire',
    description: 'Ability-placed online coding, Python, algorithms and networks and mathematics for children, teenagers and adults across South Lanarkshire, taught live in English.'
  },

  h1: 'Coding classes in South Lanarkshire',
  capsuleQ: 'What are the best coding classes in South Lanarkshire?',
  capsule: 'South Lanarkshire is one of Scotland\'s bigger council areas, with about 327,200 residents in roughly 147,800 households at the 2022 census and 184.7 people per square kilometre. East Kilbride is its largest town, then Hamilton, with Rutherglen and Cambuslang each around 30,000 and Blantyre, Larkhall, Carluke and Lanark further down. Classes run live over video from India, and a free first lesson settles each learner\'s stage, P1 through S6 or adult. Anyone aged 6 to 67 can take coding, Python and maths, in a group of five to ten or with a private teacher. The South Lanarkshire project starts in the schoolrooms of New Lanark. Staying on costs USD 100 a month for a group place or USD 150 a month for one-to-one.',
  lead: 'At New Lanark, the cotton-spinning village begun by David Dale and developed by Robert Owen, Historic Environment Scotland lists the building of 1816 once called the New Institution for the Formation of Character at Category A. The listing says it served Owen\'s system of education for all ages, and was built on lines Owen set out for a school based on the ideas of Joseph Lancaster, an educational innovator known for having older pupils help to teach younger ones. That raises a question computer networks face every day: what is the quickest way to pass one message to hundreds of people, and how much of it survives being passed on? This page\'s project answers it in Python for an invented school of 500.',
  wa: 'Hello Modern Age Coders, we are in South Lanarkshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for South Lanarkshire',
    h2: 'Starting courses across South Lanarkshire',
    intro: 'A P2 in Hamilton who loves games, a P7 in East Kilbride ready for typed code, an S4 in Carluke working towards National 5, and an adult in Rutherglen learning to build web tools. Each of them opens with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with messages passed between sprites, from one to many.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A first typed language, including simple simulations of groups and chains.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms and data structures for teenagers, including trees and graphs.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'Adults', note: 'Web development for adults, where requests fan out across servers every day.' }
    ]
  },

  sections: [
    {
      id: 'south-lanarkshire', tint: '', eyebrow: 'South Lanarkshire by numbers',
      h2: 'About 327,200 people in South Lanarkshire',
      intro: 'The council figure is a rounded first result of the 2022 census from National Records of Scotland. Town figures are separate NRS estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'South Lanarkshire localities above 5,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['East Kilbride', '75,310', 'Carluke', '13,810'],
          ['Hamilton', '54,480', 'Lanark', '8,880'],
          ['Rutherglen', '30,950', 'Strathaven', '8,090'],
          ['Cambuslang', '30,790', 'Bothwell', '6,870'],
          ['Blantyre', '16,800', 'Uddingston', '6,300'],
          ['Larkhall', '15,030', 'Stonehouse', '5,550']
        ] },
        { kind: 'p', text: 'At 184.7 residents per square kilometre, South Lanarkshire is well above the Scottish average of 69.8. Adding up the census age bands ourselves, we find 15.8 per cent of residents under 15 and 20.3 per cent aged 65 or older, both very close to Scotland\'s 15.3 and 20.1. We have not checked South Lanarkshire Council\'s school calendar; each family gives us its own holiday weeks.' },
        { kind: 'callout', h3: 'Glasgow and exams', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> page covers the city. For qualifications: <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> and <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The South Lanarkshire project',
      h2: 'One lesson, 500 pupils, many ways to pass it on',
      intro: 'Rounds, trees and the cost of every hand-off.',
      body: [
        { kind: 'p', text: 'The school is invented. One teacher knows a lesson and 500 pupils need it. Time passes in rounds, and in each round anyone who already knows the lesson may teach a small number of new people. Every time the lesson passes from one person to another, there is a small chance it gets garbled; the model says each hand-off keeps it intact 98 times in 100. The learner codes several schemes in Python and counts two things: how many rounds until everyone knows, and how many hand-offs separate the last pupil from the teacher.' },
        { kind: 'table', caption: 'Our invented school of 500, five ways to spread one lesson, 26 September 2026', head: ['Scheme', 'Rounds needed', 'Longest chain of hand-offs', 'Lesson intact at the end of it'], rows: [
          ['Teacher alone, 10 pupils a round', '50', '1', '98.0 per cent'],
          ['Teacher trains monitors, each monitor teaches 10', '6', '2', '96.0 per cent'],
          ['Everyone who knows teaches 1 new pupil a round', '9', '8', '85.1 per cent'],
          ['Everyone who knows teaches 3 a round', '5', '5', '90.4 per cent'],
          ['Everyone who knows teaches 10 a round', '3', '3', '94.1 per cent']
        ] },
        { kind: 'p', text: 'A lone teacher is faithful but slow: 50 rounds. Letting everyone who has learned teach just one other person is dramatic at first, because the number who know doubles every round, and 500 pupils are reached in only 9 rounds. But the chains get long. The last pupils hear the lesson eight hand-offs away from the teacher, and by then the chance it has survived intact has fallen to 85 per cent. A monitor tree sits in between: 6 rounds and never more than two hand-offs, so 96 per cent arrives unchanged. The fastest scheme here, everyone teaching ten, needs 3 rounds with chains of 3.' },
        { kind: 'p', text: 'The pattern is the key idea of broadcast trees. Rounds fall like a logarithm as each person teaches more, while every extra layer of the tree costs accuracy. The learner checks the arithmetic with a simulation, running the monitor scheme 200,000 times and getting 95.99 per cent against the formula\'s 96.04. Real computer networks, from software updates to the way a message spreads in a group chat, make exactly this trade-off between how many copies each node sends and how many hops a message travels.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play whispers in a line and in a tree, compare what arrives, and build a Scratch version where sprites pass on a message.' },
          { h3: 'Ages 11 to 15', p: 'Code the doubling scheme in Python and count how many rounds it takes to reach 500 people.' },
          { h3: 'Ages 15 and up', p: 'Compare all five schemes, derive the logarithmic rounds, and confirm the fidelity figures with a Monte Carlo simulation.' }
        ] },
        { kind: 'callout', h3: 'Real village, invented school', p: 'New Lanark and its Institute come from the Historic Environment Scotland listings. The 500 pupils, the 98 per cent figure and every result are invented for teaching, and do not describe how lessons were actually given there.' }
      ]
    },
    {
      id: 'new-lanark', tint: 'deep', eyebrow: 'Why New Lanark',
      h2: 'A mill village built around learning',
      intro: 'What the listings for the Institute and Mill No 1 record.',
      body: [
        { kind: 'table', caption: 'New Lanark, HES listings LB37049 (Institute) and LB37051 (Mill No 1), both Category A', head: ['Listing detail', 'What it records'], rows: [
          ['Institute built', '1816, with an engine house added in 1881'],
          ['Purpose', 'Part of Robert Owen\'s system of education providing for all ages'],
          ['Design', 'On lines Owen set out for a school based on the ideas of Joseph Lancaster'],
          ['Inside', 'A large upper room with galleries on three sides, a library and a reading room'],
          ['Mill No 1', 'Built 1785, spinning from 1786, burnt on 9 October 1788 and rebuilt'],
          ['Significance', 'A pioneering cotton-spinning village that became a model for industrial communities']
        ] },
        { kind: 'p', text: 'Spreading information efficiently is one of the central problems of computing: it decides how fast a software update reaches millions of phones, how a search engine copies its index, and how blockchains and chat apps pass messages between machines. A South Lanarkshire pupil who has watched a lesson degrade along a long chain understands why engineers prefer shallow, wide trees.' },
        { kind: 'p', text: 'Historic Environment Scotland and South Lanarkshire Council have no connection with us. The listing facts are theirs; the invented school, the simulations and any errors belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From passing notes to network trees',
    intro: 'A rough guide only; the free lesson decides where each learner begins.',
    cols: [
      { band: 'P1 to P4', h3: 'Messages and sprites', p: 'Block coding with sprites that send and receive messages.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Counting and doubling', p: 'Typed Python with loops, doubling and simple simulations.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Trees and graphs', p: 'Data structures and algorithms beside National 5, Higher and Advanced Higher Computing Science.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Systems that scale', p: 'Web development and Python for adults building connected tools.', courses: ['full-stack-web-development-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and trade-offs',
    h2: 'An AI can design a message network in seconds. Will it weigh speed against accuracy?',
    intro: 'The fastest design is not always the most faithful.',
    p1: 'Ask a chatbot for the quickest way to spread information to a large group and it will usually suggest letting everyone pass it on, since the numbers double each round. It seldom mentions that every extra hop is another chance for the message to be garbled.',
    p2: 'A South Lanarkshire learner who has tabulated rounds against fidelity knows to ask what a design costs, not just how fast it is. Weighing trade-offs is the part of engineering that still needs people.',
    closer: 'Weighing speed against accuracy is exactly why a South Lanarkshire teenager should still learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson logistics',
    h2: 'From East Kilbride to Strathaven, at home',
    intro: 'Large towns and rural villages across the council area join the same way.',
    cells: [
      { h3: 'The learner drives', p: 'Pupils type and run their own code while the teacher follows on the shared screen.' },
      { h3: 'Familiar stage names', p: 'A Larkhall P6 or a Bothwell S3 hears the Curriculum for Excellence terms they use at school, up to Advanced Higher. Lessons are in English.' },
      { h3: 'Trial lesson, no charge', p: 'One complete lesson free, then candid advice about what fits.' },
      { h3: 'Stage-based classes', p: 'Five to ten learners working at one stage, joining from many places.' },
      { h3: 'Twice weekly in term', p: 'Regular lessons in term time, and none during the holidays.' },
      { h3: 'UK time kept steady', p: 'When the clocks change, the lesson stays at its UK hour and the teachers in India time adapt.' }
    ],
    spec: { title: 'Why not a class per town?', p: 'Even in East Kilbride, five learners at one stage free at the same moment are hard to find. Grouping by stage across a wider pool finds a real class for a pupil in Blantyre or Uddingston.' }
  },

  fees: {
    h2: 'Fees in South Lanarkshire',
    intro: 'Hamilton or Lanark, the fee is the same, and it is our fee for every country apart from India.',
    first: 'One complete trial lesson, free, then a recommendation.',
    group: 'About eight lessons a month with five to ten classmates at one stage.',
    private: 'About eight lessons a month with a teacher of your own.',
    closer: 'We charge in US dollars and keep no sterling price list. Invoices start only once a course and a weekly time are agreed after the trial; our pricing page covers holidays, missed lessons and changing format.'
  },

  reviewsH2: 'Reviews and ratings on Google',

  book: {
    h2: 'Book a free South Lanarkshire lesson',
    intro: 'Share the learner\'s age or school stage and an interest, and we will shape the first lesson around it, perhaps a Scratch messaging game, some Python, or the New Lanark school on this page.',
    success: 'Thank you. Your South Lanarkshire request has arrived.'
  },

  faq: {
    h2: 'South Lanarkshire questions',
    intro: 'The council area, the New Lanark project and practical points.',
    items: [
      { q: 'How many people live in South Lanarkshire?', a: 'Rounded 2022 census results give roughly 327,200 residents living in about 147,800 households.' },
      { q: 'What are the largest towns in South Lanarkshire?', a: 'NRS mid-2020 estimates: East Kilbride 75,310, Hamilton 54,480, Rutherglen 30,950, Cambuslang 30,790 and Blantyre 16,800.' },
      { q: 'What is the New Lanark project?', a: 'Learners model five ways of spreading one lesson through an invented school of 500 in Python, counting rounds and hand-offs, and find that fast doubling leaves the last pupils eight hand-offs from the teacher.' },
      { q: 'What is a broadcast tree?', a: 'A plan for passing one message from a source to many receivers, where each receiver may pass it on. Its width sets the speed and its depth sets how many hops a message makes.' },
      { q: 'When was the New Lanark Institute built?', a: 'In 1816, according to Historic Environment Scotland, which lists it at Category A as part of Robert Owen\'s system of education.' },
      { q: 'Where do lessons take place?', a: 'Entirely online; a learner in Strathaven connects exactly as one in Cambuslang does.' },
      { q: 'Do you teach Higher Computing Science?', a: 'Yes, and National 5, with maths at both levels. We focus on understanding and do not promise grades.' },
      { q: 'What ages can learn?', a: 'Any age from 6 to 67, from block coding for children to algorithms for teenagers and web or Python skills for adults.' },
      { q: 'How much do lessons cost?', a: 'The trial lesson is free; afterwards USD 100 a month buys a group place and USD 150 a month one-to-one teaching.' },
      { q: 'Do lessons run in the school holidays?', a: 'No. Tell us when your school is off and those weeks stay free.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'Around South Lanarkshire',
    html: '<a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">North Lanarkshire</a> tests colour codes from a Shotts factory, <a class="cg-inline-link" href="/coding-classes-in-east-renfrewshire">East Renfrewshire</a> controls a reservoir sluice, and <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> has its own city page. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page lists every council, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South Lanarkshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/higher-computing-science-help', label: 'Higher Computing Science' }
  ],

  personalityCss: `
.cg-root.cg-slk .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.7rem); }
.cg-root.cg-slk .cg-hero h1 { font-weight: 710; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-slk .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-slk .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-slk .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-slk .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-slk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-slk .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-slk .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-slk .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'South Lanarkshire (S12000029), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 327,200 (females 168,900, males 158,300); households 147,800; density 184.7 per square kilometre (Scotland 69.8); ages 0 to 14 51,600 (15.8 per cent), 65+ 66,300 (20.3 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: East Kilbride 75,310; Hamilton 54,480; Rutherglen 30,950; Cambuslang 30,790; Blantyre 16,800; Larkhall 15,030; Carluke 13,810; Lanark 8,880; Strathaven 8,090; Bothwell 6,870; Uddingston 6,300; Stonehouse 5,550. HES LB37049 (Category A, added 12/01/1971), New Lanark, Visitor Centre (formerly New Institution for the Formation of Character): "1816; Engine House 1881"; "ideal industrial community begun by David Dale and developed by Robert Owen"; "Owen\'s complex system of education that provided facilities for all ages"; "a school based on the ideas of the educational innovator, Joseph Lancaster"; "galleries on three sides"; "a library and a reading room". HES LB37051 (Category A), Mill No 1: "originally built in 1785 and spinning started in 1786"; "burnt down on 9 October 1788"; "a pioneering cotton-spinning village, which became a model for industrial communities". Lancaster\'s use of older pupils to teach younger ones is general knowledge, stated briefly.',
    localProject: 'Invented school of 500, hand-off fidelity 0.98. Teacher alone k=10: 50 rounds, depth 1, 98.0. Monitorial k=10: 6 rounds, depth 2, 96.0 (MC 95.99 of 200,000). Doubling k=1: 9 rounds, max depth among 500 = 8 (85.1), mean depth 4.44, mean intact 91.5. k=3: 5 rounds, depth 5, 90.4. k=10 everyone: 3 rounds, depth 3, 94.1. Lesson family: broadcast trees, fan-out vs depth.',
    requiredMentions: [
      '327,200',
      '147,800',
      '184.7',
      'Rutherglen',
      'Cambuslang',
      'Blantyre',
      'Larkhall',
      'Carluke',
      'Strathaven',
      'Bothwell',
      'Uddingston',
      'New Lanark',
      'LB37049',
      'Joseph Lancaster'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB37049: New Lanark, Visitor Centre (formerly New Institution for the Formation of Character).', url: 'https://portal.historicenvironment.scot/designation/LB37049' },
      { claim: 'Historic Environment Scotland, LB37051: New Lanark, Mill No 1.', url: 'https://portal.historicenvironment.scot/designation/LB37051' }
    ],
    rejectedClaims: [
      'How lessons were actually organised at New Lanark, class sizes or outcomes: not in the listing, not claimed.',
      'World Heritage status of New Lanark: not read from a primary source today, not claimed.',
      'David Livingstone and Hunter brothers sites: not used.',
      'Robert Owen\'s wider politics: not discussed.',
      'Named South Lanarkshire schools and school term dates: none named or read.',
      'Directions or distances between towns: not claimed.'
    ]
  }
};
