'use strict';
// Castlebar (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Castlebar, Co Mayo", read 19 September 2026, the Irish Rail
// station page for Castlebar and the HSE page for Mayo University Hospital. The
// National Museum's Country Life page returned 403 and is not quoted. Spine:
// nearest neighbours, a constructive machine-learning page. "Which towns are most
// like Castlebar?" is answered for the 94 towns of 5,000+ usual residents under
// eight set-ups: four feature sets (travel-to-work mode shares, journey-time shares,
// both, both plus degree and broadband shares) by two scalings (raw shares,
// standardised). The nearest town is Ballina in five set-ups, Westport in two and
// Clonmel in one; the eight top-five lists name 15 towns; Ballina appears in seven
// and is sixth in the eighth. All run in this session (scratchpad eco/knn.js). The
// Mayo county page owns the census-night population, density, average age, LEA and
// the ATU Mayo campus; none used here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'CASTLEBAR', blurb: 'Which towns are most like Castlebar? Eight reasonable ways of measuring similarity name 15 different towns, and only one survives nearly all of them.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-castlebar',
  code: 'cbr',
  accent: '#74622F',
  accentRationale: 'Castlebar: an ochre bronze from the solver, apart from the Mayo county blue and the Sligo and Galway pages nearby',
  pageType: 'city',
  place: {
    name: 'Castlebar',
    eyebrow: 'Castlebar, County Mayo',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Mayo' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-mayo', name: 'County Mayo' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Mayo', href: '/coding-classes-in-county-mayo' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Castlebar, County Mayo, Ireland',
  title: 'Best Coding Class in Castlebar | Modern Age Coders',
  description: 'Coding, Python, AI and data lessons for Castlebar learners aged 6 to 67, taught live online in small groups at one level or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Castlebar, with a machine-learning project that asks which towns are most like Castlebar, and shows the answer is a choice.',
  twitterDescription: 'Live online coding, Python and AI classes for Castlebar, ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Castlebar',
    description: 'Online coding, Python, AI, data and mathematics in groups matched by level for children, teenagers and adults in Castlebar, County Mayo, taught live in English.'
  },

  h1: 'Coding classes in Castlebar',
  capsuleQ: 'What is the best coding class in Castlebar?',
  capsule: 'Castlebar\'s 12,907 usual residents live in 5,153 households, 4,146 of them with broadband, and that connection is the whole route our lessons take. A teacher leads each one live on video for a small group at the same stage, or for one learner, about twice a week, at any age from six to sixty-seven. There is no charge for the first lesson. Groups then cost USD 100 a month, private lessons USD 150.',
  lead: 'Which towns are most like Castlebar? It sounds like a question with one answer. A program that measures similarity, the same idea behind shopping recommendations and many machine-learning systems, cannot answer it until someone decides which features to compare and how to scale them. Compare how people travel to work and Castlebar\'s nearest match is Ballina. Compare journey times instead and it is Westport. Compare everything at once, unscaled, and Clonmel comes first, a whisker ahead of Wexford. Across eight reasonable set-ups, the top-five lists name 15 different towns. One town appears in seven of them. This page builds the search and shows how to report an answer that depends on choices.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Castlebar.',

  picks: {
    eyebrow: 'Course picks for Castlebar',
    h2: 'First courses for Castlebar learners',
    intro: 'Choose by age and interest; the first lesson, with the course teacher, fixes the starting point.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with sorting and matching games, where the rule for "alike" is the learner\'s own.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python and a first taste of AI: comparing things by their features and finding the closest match.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning from the ground up, including nearest-neighbour methods and why scaling features matters.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who build peer groups, benchmarks or comparisons at work and need to defend how they were chosen.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Ask a program which towns are most like Castlebar',
      intro: 'The 94 towns with 5,000 or more usual residents are each described by census shares. Distance between two towns is measured across those shares, and the closest towns are the most similar. Everything turns on which shares are used and how they are scaled.',
      body: [
        { kind: 'table', caption: 'Castlebar\'s nearest towns under eight set-ups, closest first', head: ['Compared on', 'Scaled', 'Nearest', 'Next four'], rows: [
          ['Travel to work, 8 shares', 'No', 'Ballina', 'Nenagh, Thurles, Tuam, Dungarvan'],
          ['Travel to work, 8 shares', 'Yes', 'Ballina', 'Tuam, Gorey, Thurles, Mullingar'],
          ['Journey time, 6 shares', 'No', 'Westport', 'Letterkenny, Wexford, Ballina, Clonmel'],
          ['Journey time, 6 shares', 'Yes', 'Westport', 'Letterkenny, Tralee, Ballina, Clonmel'],
          ['Both, 14 shares', 'No', 'Ballina', 'Wexford, Clonmel, Ballinasloe, Thurles'],
          ['Both, 14 shares', 'Yes', 'Ballina', 'Clonmel, Wexford, Roscommon, Tralee'],
          ['Both plus degrees and broadband', 'No', 'Clonmel', 'Wexford, Tullamore, Tralee, Roscommon'],
          ['Both plus degrees and broadband', 'Yes', 'Ballina', 'Clonmel, Roscommon, Wexford, Tralee']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Features decide', p: 'On travel to work, where 62.1 percent of Castlebar\'s workers drive and 16.8 percent walk, Ballina is closest. On journey time, where 54.5 percent of Castlebar\'s trips take under a quarter of an hour, Westport is. Neither answer is wrong; they answer different questions.' },
          { h3: 'Scaling decides', p: 'Left as raw shares, a big category such as driving dominates the distance, because a few points of difference there outweigh everything else. Standardised, each feature pulls equally. Nenagh is second on raw travel shares and missing from the scaled list, where Gorey and Mullingar appear instead.' },
          { h3: 'What survives', p: 'Fifteen towns appear across the eight top-five lists. Ballina is in seven and sixth in the eighth; Clonmel is in six and Wexford in five. A neighbour that survives most reasonable choices is a far safer answer than any single list.' }
        ] },
        { kind: 'callout', h3: 'Similar is a choice, not a fact', p: 'Any claim that one thing is like another hides two decisions: like in what, and measured how. A recommendation engine, a face-matching system and a list of comparable towns all make those decisions, usually without saying so. The honest report names the features, names the scaling, and says how stable the answer is when either changes. "Castlebar\'s twin is Ballina" overstates it. "Ballina is among the five closest towns in seven of eight set-ups" is something the data actually supports.' },
        { kind: 'p', text: 'The learner describes every town as a list of numbers, one per feature, then measures the straight-line distance between Castlebar\'s list and each other town\'s, and sorts. Scaling is one extra step: subtract each feature\'s average across the 94 towns and divide by its spread, so every feature is measured in the same currency. A loop runs all four feature sets both ways and tallies how often each town appears. That tally, not any one list, goes in the report. The same code, with a few more lines, becomes a k-nearest-neighbours classifier, one of the first machine-learning methods most courses teach.' }
      ]
    },
    {
      id: 'uses', tint: 'tint', eyebrow: 'Where the idea turns up',
      h2: 'Nearest neighbours outside this page',
      intro: 'The search on this page is a small copy of a method used widely, and the same two decisions follow it everywhere.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Recommendations', p: 'Suggestions of the "people who liked this also liked" kind are often found by looking for the nearest neighbours of a person or a product. Which features count, and how they are weighted, is the builder\'s decision.' },
          { h3: 'Classifiers', p: 'A k-nearest-neighbours classifier labels a new case by looking at its closest known examples. How accurate it is depends heavily on the features chosen and on whether they were scaled.' },
          { h3: 'Benchmarks at work', p: 'Hospitals, schools, branches and councils are routinely compared with their "peers". A peer group chosen on one set of features can look very different from one chosen on another.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not rank towns or judge any of them, and similarity here means only closeness on the census shares listed. It says nothing about what Castlebar and Ballina are like to live in, and nothing about why their numbers are close.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'The census on Castlebar',
      intro: 'Small area figures for the town Castlebar, Co Mayo, from Census 2022, counting the people and households usually resident there.',
      body: [
        { kind: 'table', caption: 'Castlebar: selected Census 2022 counts', head: ['Figure', 'Total'], rows: [
          ['Usual residents', '12,907'],
          ['Households', '5,153'],
          ['Households with broadband', '4,146'],
          ['Working residents in the travel table', '5,632'],
          ['Journeys to school, college or childcare', '3,142'],
          ['Children under fifteen in childcare', '769'],
          ['Journeys under 15 minutes', '3,872']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work commute', p: 'Of 5,632 working residents, 3,228 drive and 874 walk. Next are 353 working mainly at or from home, 313 by van, 273 as a car passenger, 73 cycling, 48 by bus and 10 by train.' },
          { h3: 'The school run', p: 'Of 3,142 journeys to school, college or childcare, 1,702 are made as a car passenger and 751 on foot; 182 go by bus, 136 learners drive, 49 cycle and 16 take the train.' },
          { h3: 'Home working', p: 'Asked directly, 1,096 working residents do some of their work from home, 3,892 never do, and 644 did not answer.' }
        ] },
        { kind: 'spec', title: 'Two named places', p: 'Irish Rail gives Castlebar station\'s address as Station Road, Castlebar, Co. Mayo, Eircode F23 R670, with sheltered bike parking. The HSE lists Mayo University Hospital at Westport Road, Knockaphunta, Castlebar, Mayo, F23 H529. Neither is connected with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Castlebar learners',
      intro: 'A fixed pair of lessons in most weeks, with the teacher live throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'The census-night age table counts 1,205 children aged six to twelve in Castlebar. They begin with blocks and games, sorting and matching things by rules they write themselves.' },
          { h3: 'Secondary age', p: 'With 953 residents aged thirteen to eighteen, Castlebar has plenty of learners at the stage for Python, web building, AI and data projects on real numbers.' },
          { h3: 'Adults', p: 'Adults start from whatever they know, including nothing at all about code, and the course is planned from the first lesson.' }
        ] },
        { kind: 'p', text: 'The census figures quoted are the Central Statistics Office\'s own, without adjustment. The eight nearest-neighbour searches were run on the town tables on 19 September 2026. Irish Rail and the HSE are quoted from their own pages; the National Museum\'s Country Life page refused automated requests that day, so nothing is quoted from it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From matching games to nearest neighbours',
    intro: 'Ages are only a guide; the first lesson finds the right level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Alike and different', p: 'Block-coded games that group things by a rule and ask why two items ended up together.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Closest match', p: 'Python that describes things as lists of numbers and finds which two are closest.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Neighbours and scaling', p: 'Nearest-neighbour search and classification, feature scaling, and testing how stable an answer is.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Defensible comparisons', p: 'Building peer groups and benchmarks at work, and writing down the choices behind them.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant which town is Castlebar\'s twin',
    intro: 'It will name one. The interesting part is what it left unsaid.',
    p1: 'Ask an AI assistant which Irish town is most like Castlebar and it will probably offer a confident answer with reasons. Every such answer rests on features and a way of weighing them, chosen silently. On the census shares used here, three different towns come first depending on those choices, so a single confident name is only one of several defensible answers.',
    p2: 'A learner who has built this search asks the follow-up that matters: similar in what, measured how, and would the answer change if either changed? Asking that turns a confident sentence into a claim that can be checked.',
    closer: 'Similarity sits at the heart of a great deal of AI. Deciding what similar should mean remains a human decision, and a teachable one.',
    blogAnchor: 'why coding still deserves a place in a learner\'s week'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Castlebar lessons work',
    intro: 'The practical points.',
    cells: [
      { h3: 'Real time', p: 'The teacher leads every lesson live and responds to the code the learner is writing.' },
      { h3: 'Stage-matched', p: 'Five to ten learners at one stage of a course, from Mayo, the rest of Ireland and abroad.' },
      { h3: 'Two a week, mostly', p: 'Roughly eight lessons a month, at times agreed before the course begins.' },
      { h3: 'School calendar', p: 'The plan allows for holidays, mid-term breaks and exam weeks from the start.' },
      { h3: 'For each lesson', p: 'A computer with a keyboard, a way to hear and be heard, and a broadband connection that can carry video.' },
      { h3: 'Private teaching', p: 'Learners who need their own pace or their own time slot are taught privately, one teacher to one learner.' }
    ],
    spec: { title: 'Online only', p: 'Castlebar learners take every lesson over video. We have no premises in the town or anywhere in Ireland, and nothing about a lesson depends on where the learner sits.' }
  },

  fees: {
    h2: 'Fees for Castlebar',
    intro: 'Every price, in one place.',
    first: 'A full first lesson with the level assessed, free.',
    group: 'A month in a group of five to ten at the same level, about eight live lessons.',
    private: 'A month of private lessons at the same weekly frequency.',
    closer: 'Fees run monthly in US dollars, one rate for every family outside India. The free lesson commits nobody, and the first charge is made when the course itself begins. For holidays, missed lessons and switching between a group and private teaching, the pricing page has the rules.'
  },

  reviewsH2: 'Six families we teach, quoted from Google as written',

  book: {
    h2: 'Book a free first lesson in Castlebar',
    intro: 'Tell us the learner\'s age and interests and the first hour is planned around them. It could finish with a game, a first program, or a list of nearest neighbours with the choices written beside it.',
    success: 'Thank you. We will contact you about the lesson soon.'
  },

  faq: {
    h2: 'Castlebar coding class questions',
    intro: 'What Castlebar families ask before starting.',
    items: [
      { q: 'How many people live in Castlebar?', a: 'Castlebar\'s usual residents numbered 12,907 in the Census 2022 small area tables, in 5,153 households, 4,146 of them with broadband.' },
      { q: 'What is the data project on this page?', a: 'A nearest-neighbour search that asks which of 94 towns are most like Castlebar. Run eight reasonable ways, it names Ballina, Westport or Clonmel as the closest, and 15 towns across its top-five lists, which is why the report gives the choices and the stability of the answer rather than one twin.' },
      { q: 'So which town is most like Castlebar?', a: 'On these census shares, Ballina is the most stable answer: it is among the five closest in seven of the eight set-ups and sixth in the other. But the closest single town depends on the features compared and how they are scaled.' },
      { q: 'How do Castlebar residents get to work?', a: 'Of 5,632 working residents in the travel table, 3,228 drive, 874 walk, 353 work mainly at or from home, 313 go by van and 273 as a car passenger.' },
      { q: 'When are lessons?', a: 'After school, in the evening and at weekends, scheduled on Irish time. India is four and a half hours ahead while Irish summer time lasts and five and a half hours ahead for the rest of the year, and we choose slots that suit teachers there in both periods.' },
      { q: 'Do you teach adults?', a: 'Yes, up to sixty-seven, and complete beginners are welcome. An adult\'s first lesson is where we see whether a level-matched group or private lessons will suit better.' },
      { q: 'Will a Castlebar learner be grouped with local learners?', a: 'Groups are formed by level, not by town, so the others in a lesson may be in Mayo, elsewhere in Ireland or overseas.' },
      { q: 'Is there a Modern Age Coders classroom in Castlebar?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Castlebar cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Across the west',
    html: 'Castlebar sits under the <a class="cg-inline-link" href="/coding-classes-in-county-mayo">County Mayo</a> page and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-connacht">Connacht</a> page. Nearby pages in the series include <a class="cg-inline-link" href="/best-coding-class-in-galway">Galway city</a> and <a class="cg-inline-link" href="/best-coding-class-in-sligo">Sligo</a>. For a plain look at online coding schools side by side, see <a class="cg-inline-link" href="/best-online-coding-classes-ireland">the comparison</a>; the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links every county and town page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Castlebar, Mayo and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-mayo', label: 'County Mayo' },
    { href: '/coding-and-ai-classes-in-connacht', label: 'Connacht' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cbr .cg-hero-grid { align-items: start; gap: clamp(1.12rem, 3.28vw, 2.66rem); }
.cg-root.cg-cbr .cg-hero h1 { font-weight: 650; letter-spacing: -0.0183em; line-height: 1.05; }
.cg-root.cg-cbr .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.14rem; }
.cg-root.cg-cbr .cg-eyebrow { letter-spacing: 0.135em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cbr .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0131em; }
.cg-root.cg-cbr .cg-grid-3 { gap: clamp(1.07rem, 2.71vw, 2.16rem); }
.cg-root.cg-cbr .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-cbr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cbr .cg-table td:nth-child(3) { font-weight: 700; }
.cg-root.cg-cbr .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-cbr .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Castlebar, Co Mayo, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 12,907. SAP2022T15T2TOWN22: households 5,153, broadband 4,146, not stated 427. SAP2022T11T1TOWN22 to work total 5,632: car driver 3,228, on foot 874, work mainly at or from home 353, van 313, car passenger 273, bicycle 73, bus 48, train DART or Luas 10, not stated 438; to school, college or childcare total 3,142: car passenger 1,702, on foot 751, bus 182, car driver 136, bicycle 49, train 16, not stated 258. SAP2022T11T3TOWN22: under 15 minutes 3,872 of 7,107 stated (54.5 percent). SAP2022T11T4TOWN22: 1,096 work from home at least some of the time, 3,892 never, 644 not stated. SAP2022T11T5TOWN22: 769 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,205, ages 13 to 18 to 953. Nearest-neighbour search run in this session over the 94 towns with 5,000 or more usual residents. Features, each a share with not stated removed: eight travel-to-work modes (on foot, bicycle, bus, train, car driver, car passenger, van, work mainly at or from home; Castlebar 16.8, 1.4, 0.9, 0.2, 62.1, 5.3, 6.0, 6.8 percent), six journey-time bands (Castlebar 54.5, 27.4, 10.9, 2.0, 3.1, 2.0), degree share of the education-ceased population (26.7) and broadband share of households (87.7). Euclidean distance; raw shares or standardised to mean 0 and standard deviation 1 across the 94. Top five, closest first: modes raw Ballina, Nenagh, Thurles, Tuam, Dungarvan; modes scaled Ballina, Tuam, Gorey, Thurles, Mullingar; journey raw Westport, Letterkenny, Wexford, Ballina, Clonmel; journey scaled Westport, Letterkenny, Tralee, Ballina, Clonmel; both raw Ballina, Wexford, Clonmel, Ballinasloe, Thurles; both scaled Ballina, Clonmel, Wexford, Roscommon, Tralee; all raw Clonmel (0.08893), Wexford (0.08926), Tullamore, Tralee, Roscommon, with Ballina sixth; all scaled Ballina, Clonmel, Roscommon, Wexford, Tralee. Fifteen distinct towns; appearances Ballina 7, Clonmel 6, Wexford 5, Tralee 4. Irish Rail, Castlebar: "Station Address Station Road Castlebar Co. Mayo", "Eircode F23 R670", "There is sheltered bike parking at the station". HSE, Mayo University Hospital: "Westport Road, Knockaphunta, Castlebar, Mayo, F23 H529". National Museum of Ireland, Country Life page: HTTP 403 to automated requests on 19 September 2026, not quoted.',
    localProject: 'Nearest neighbours, and similarity as a choice. The learner asks which of the 94 towns of 5,000 or more usual residents are most like Castlebar, describing each town by census shares and measuring Euclidean distance. Eight set-ups, four feature sets (eight travel-to-work mode shares; six journey-time shares; both; both plus degree and broadband shares) each run on raw and on standardised values, give three different nearest towns (Ballina five times, Westport twice, Clonmel once, a whisker ahead of Wexford) and 15 distinct towns across the top-five lists. Ballina appears in seven lists and is sixth in the eighth; Clonmel appears in six and Wexford in five. Raw shares let the dominant driving share decide the distance; standardising gives each feature equal pull, which drops Nenagh and brings in Gorey and Mullingar on travel modes. The report names the features and the scaling and states stability ("Ballina among the five closest in seven of eight set-ups") rather than a single twin. The code extends directly to a k-nearest-neighbours classifier. New family for the cluster: similarity, feature choice and scaling.',
    requiredMentions: [
      '12,907',
      '5,153',
      '4,146',
      '5,632',
      '3,228',
      '874',
      '1,096',
      '3,142',
      '1,702',
      '769',
      '3,872',
      'F23 R670'
    ],
    sources: [
      { claim: 'CSO Census 2022 tables SAP2022T11T1TOWN22, SAP2022T11T3TOWN22, SAP2022T10T4TOWN22 and SAP2022T15T2TOWN22, all towns: travel-to-work mode shares, journey-time shares, degree share and broadband share used for the 94-town nearest-neighbour search. Castlebar, Co Mayo: to work 5,632 with car driver 3,228, on foot 874, mainly at or from home 353, van 313, car passenger 273, bicycle 73, bus 48, train 10; to school, college or childcare 3,142 with car passenger 1,702, on foot 751, bus 182, car driver 136, bicycle 49, train 16; journeys under 15 minutes 3,872; households 5,153, broadband 4,146.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Castlebar, Co Mayo: usual residents 12,907; 1,096 work from home at least some of the time, 3,892 never, 644 not stated; 769 children under 15 in childcare; 1,205 aged 6 to 12 and 953 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Castlebar station: "Station Address Station Road Castlebar Co. Mayo", "Eircode F23 R670", "There is sheltered bike parking at the station".', url: 'https://www.irishrail.ie/en-ie/station/castlebar' },
      { claim: 'HSE, Mayo University Hospital: "Westport Road, Knockaphunta, Castlebar, Mayo, F23 H529".', url: 'https://www2.hse.ie/services/hospitals/mayo-university-hospital/' }
    ],
    rejectedClaims: [
      'Any single "twin" for Castlebar stated without its features and scaling.',
      'Any ranking or judgement of towns: similarity here is closeness on census shares only.',
      'Any reason why Castlebar and Ballina, Westport or Clonmel have similar shares.',
      'The National Museum of Ireland, Country Life at Turlough Park: the site returned 403 to automated requests on 19 September 2026, so nothing is quoted.',
      'The census-night population, density, average age, local electoral area figure and the ATU Mayo campus: the County Mayo page owns them.'
    ]
  }
};
