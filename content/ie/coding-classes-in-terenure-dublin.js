'use strict';
// Terenure, Dublin 6W (cg- district page, Ireland cluster, Phase 6). Named sources only (owner
// rule for districts), read 20 September 2026: the National Transport Authority's Dublin Bus GTFS
// feed (valid 18 September 2026 to 18 September 2027); DCC Terenure Library and Bushy Park pages.
// Spine: set similarity (Jaccard) and what counts as the same element. Scratchpad trn/jac.js.
// Tuesday 22 September 2026: 13 stops whose names contain "Terenure"; 7 routes (15, 15A, 16, 16D,
// 65, 65B, 74), 13 route-directions; main stop pattern per route-direction. Jaccard by stop ID:
// 16|0 vs 16D|0 0.896 (69 of 77; 6 stops only on 16, 2 only on 16D); 65 vs 65B 0.307 (31 of 101);
// 15 vs 15A 0.205; 65 vs 74 0.000 (0 of 141); 65B vs 74 0; 15A vs 74 0. Same route both
// directions: 15 by ID 0.008 (1 of 132), by stop name 0.859 (61 of 71), by location within 100 m
// 0.662 (53 of 80); 16: 0.007 / 0.686 / 0.543; 65: 0.007 / 0.793 / 0.585; 74: 0.047 / 0.517 /
// 0.583. Feed: 4,337 stops, 2,579 distinct names. Terenure College is listed on the Dublin page;
// not used here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'TERENURE', blurb: 'Seven bus routes through one village, and a similarity score that swings from 0.008 to 0.859 depending on what counts as the same stop.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-terenure-dublin',
  code: 'trn',
  accent: '#1C165A',
  accentRationale: 'Terenure: a route-map indigo from the widened solver search, clear of the Arklow and Clondalkin blues',
  pageType: 'district',
  place: {
    name: 'Terenure',
    eyebrow: 'Terenure, Dublin 6W',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dublin City' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-dublin', name: 'Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' },
    { label: 'Rathfarnham', href: '/coding-classes-in-rathfarnham-dublin' }
  ],
  routeLabel: 'Terenure, Dublin 6W, Ireland',
  title: 'Coding Classes in Terenure, Dublin | Modern Age Coders',
  description: 'Coding, Python, AI and maths lessons for Terenure learners aged 6 to 67, taught live online in small same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Terenure, with a data project on the bus routes through the village and how to measure how alike two lists are.',
  twitterDescription: 'Live online coding, Python, AI and maths for Terenure, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Terenure',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Terenure, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Terenure',
  capsuleQ: 'What are the best coding classes in Terenure?',
  capsule: 'For Terenure learners every lesson is taught live over video by a teacher, in a small group of learners at the same level or one to one, usually twice a week, and the classes take anyone aged six to sixty-seven. There is nowhere to get to. The opening lesson is free, then a month of lessons is USD 100 in a group or USD 150 privately.',
  lead: 'Seven Dublin Bus routes stop in Terenure. How alike are they? A standard answer compares the stops two routes share with all the stops either one uses, a score called the Jaccard index that runs from 0, nothing in common, to 1, identical. Routes 16 and 16D score 0.896; routes 65 and 74 both pass through Terenure and score 0. Then comes the surprise: route 15 compared with itself going the other way scores 0.008, because a stop in the timetable is one side of the road. Count stops by name instead and the same comparison gives 0.859. This page teaches a learner to measure similarity, and to decide first what counts as the same thing.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Terenure.',

  picks: {
    eyebrow: 'Courses for Terenure',
    h2: 'Four first courses for Terenure',
    intro: 'Pick an age band to begin; the teacher uses the free first lesson to confirm the level and will move the learner if another course fits better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and sorting games: which items two lists share, and which belong to only one.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python sets: union, intersection and a similarity score computed from real bus stops.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Real timetable data in Python: stop patterns, Jaccard scores, and matching places by identifier, name or distance.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who compare customer lists, product catalogues or service areas and need a fair overlap measure.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How alike are two bus routes? It depends on what counts as the same stop',
      intro: 'Everything here comes from one day of the national timetable feed for Dublin Bus, Tuesday 22 September 2026. For each route and direction that stops at one of the 13 stops named Terenure, the program takes the stop list used by most of that day\'s trips, then compares routes as sets of stops.',
      body: [
        { kind: 'table', caption: 'Jaccard similarity: shared stops divided by all stops used by either route', head: ['Comparison', 'By stop identifier', 'By stop name', 'Within 100 metres'], rows: [
          ['Route 15, one direction against the other', '0.008', '0.859', '0.662'],
          ['Route 65, one direction against the other', '0.007', '0.793', '0.585'],
          ['Routes 16 and 16D, same direction', '0.896', '0.896', 'not needed'],
          ['Routes 65 and 74, same direction', '0.000', '0.000', 'not needed']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Near twins', p: 'Routes 16 and 16D share 69 of the 77 stops either one uses, a score of 0.896. Six stops are on the 16 alone and two on the 16D alone, which is the whole difference between them on a weekday.' },
          { h3: 'Strangers in one village', p: 'Routes 65 and 74 both stop in Terenure, yet of the 141 stops either uses they share none. The 65 calls at the Terenure stops named Rd E, Lbry and Coll, the 74 at Road West, Garda Stn and South, so as sets they are completely separate.' },
          { h3: 'A stop is a side of the road', p: 'Route 15 going out and route 15 coming back share just 1 stop identifier out of 132, a score of 0.008, because each kerb has its own stop. Matched by name the same pair scores 0.859; matched by distance, treating stops within 100 metres as one place, 0.662.' }
        ] },
        { kind: 'callout', h3: 'Before you measure overlap, decide what counts as the same', p: 'A similarity score is only as meaningful as the things it compares. Identifiers are exact but can be too fine: two stops facing each other across a road are different to them. Names are coarser but can merge different places, and in this feed 4,337 stops share only 2,579 distinct names. A distance rule sits between the two and needs a threshold someone has to choose. None is right in general; the question decides, and the answer should say which was used.' },
        { kind: 'p', text: 'The learner\'s program reads the feed\'s calendar, trips and stop times, keeps the trips that run on the chosen Tuesday and touch a Terenure stop, and groups them by route and direction. Some routes run more than one stop pattern in a day, so it picks the pattern most trips use and says how many trips follow it. It then turns each pattern into a set and computes the Jaccard index for every pair: the size of the intersection over the size of the union. Finally it repeats the comparison three ways, by stop identifier, by stop name and by location within 100 metres, and prints the three scores side by side so the effect of that one choice is plain.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why direction matters', p: 'The program only compares routes heading the same way when it asks whether two routes are alike, because otherwise every pair would look almost unrelated for the kerb-side reason above. Choosing the comparison is part of the analysis.' },
          { h3: 'The main pattern', p: 'Route 65 runs three different stop patterns in one direction on the chosen day, and its most common one covers 11 of 17 trips. Using a single pattern per route is a simplification the page states rather than hides.' },
          { h3: 'A timetable, not the street', p: 'The figures describe planned stop lists for one weekday. They say nothing about how many people use each stop, or about weekend and evening variations.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Terenure, named',
      h2: 'Terenure from its library, its park and its bus stops',
      intro: 'Nothing below is our own description; each line repeats what the responsible body publishes.',
      body: [
        { kind: 'table', caption: 'Named places in Terenure', head: ['Place', 'What its own source says'], rows: [
          ['Terenure Library', 'Templeogue Road, Dublin 6W, D6W YC59'],
          ['Bushy Park', 'In Terenure, with walks along the River Dodder'],
          ['Bus stops named Terenure', '13 stops in the Dublin Bus timetable feed'],
          ['Routes stopping there on a weekday', '15, 15A, 16, 16D, 65, 65B and 74']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The park\'s history', p: 'Dublin City Council traces Bushy Park to 1700, when Arthur Bushe built a house on a site of four hectares. John Hobson renamed it Bushy Park in 1772, Abraham Wilkinson added almost 40 hectares from 1791, and the Shaw family sold the estate to Dublin Corporation in 1951.' },
          { h3: 'The park today', p: 'The council lists walks along the River Dodder, GAA pitches, tennis, padel and boules courts, a duck pond, a playground and a skatepark, and a native tree trail available in English or Irish.' },
          { h3: 'The library', p: 'According to the council, the Templeogue Road branch keeps late hours, until 8 pm, on Mondays and Wednesdays, closes at 5 pm on Tuesdays and Thursdays, and has a hearing loop for visitors who use hearing aids.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Terenure, because the page prints only what named bodies publish about the place. The bus figures are planned stop patterns on one weekday from the national timetable feed.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'The lessons in a Terenure learner\'s week',
      intro: 'Two lessons in a typical week, each led live by the teacher for its full length.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The youngest start in block code, sorting objects into two overlapping groups and spotting what both share.' },
          { h3: 'Teenagers', p: 'Older learners build up to Python, web pages, AI work and genuine timetable files, handling sets and similarity in their own code.' },
          { h3: 'Adults', p: 'Adults can begin with no experience at all; the first lesson points to the course.' }
        ] },
        { kind: 'p', text: 'The stop patterns are published by the National Transport Authority; grouping them by route, comparing them as sets and applying the three matching rules is our own work of 20 September 2026. Park and library details are Dublin City Council\'s.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting cards to comparing sets',
    intro: 'Bands are only a starting guide; lesson one sets the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'In both, in one', p: 'Block-coded sorting games with two overlapping groups.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Sets in Python', p: 'Union, intersection and a similarity score on small lists.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Matching rules', p: 'Real bus data, Jaccard scores and three ways of deciding two stops are the same.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Overlap at work', p: 'Comparing customer lists, catalogues and coverage areas with a clear matching rule.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how similar two routes are',
    intro: 'It will compute a score. It may not ask what a stop is.',
    p1: 'Give an AI assistant the stop lists for route 15 in both directions and ask how similar they are, and it will likely compute a Jaccard index on the stop identifiers and report almost no overlap. Correct, and very misleading: the bus runs along the same roads both ways, but each kerb has its own identifier.',
    p2: 'A learner who has worked through this project requests three versions, by identifier, by name and by distance, and then chooses the one that suits the question. An assistant is quick at the arithmetic; deciding what the elements of a set should be is the part that needs a person who understands the data.',
    closer: 'Similarity depends on sameness. Define sameness first, then let the code count.',
    blogAnchor: 'why learning to code matters more with AI around'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Terenure',
    intro: 'The main points.',
    cells: [
      { h3: 'Live lessons', p: 'A teacher leads each lesson in real time and works through each learner\'s code alongside them.' },
      { h3: 'Grouped by level', p: 'Five to ten learners on the same level, joining from Terenure, around Ireland or abroad.' },
      { h3: 'Two days a week', p: 'The same pair of days each week, which comes to roughly eight lessons a month.' },
      { h3: 'School calendar', p: 'Breaks for holidays, mid-terms and exams are part of the plan.' },
      { h3: 'Equipment check', p: 'A proper computer rather than a phone, a working mic, a way to hear the teacher, and broadband that keeps video smooth.' },
      { h3: 'Just the two of you', p: 'Private lessons pair one learner with one teacher, useful for anyone racing ahead, wanting a gentler pace, or free only at unusual times.' }
    ],
    spec: { title: 'All online', p: 'There are no Modern Age Coders premises in Terenure or anywhere in Ireland. Lessons are live on video and run the same wherever the learner is.' }
  },

  fees: {
    h2: 'Fees for Terenure',
    intro: 'Clearly.',
    first: 'A free first lesson, with a check of the learner\'s level.',
    group: 'A month in a group of five to ten at one level, around eight live lessons.',
    private: 'A month of one-to-one lessons on the same pattern.',
    closer: 'Outside India the fee is a single US dollar amount for every family, paid monthly. Taking the free lesson signs you up to nothing; the first bill arrives only when the course begins, and anything about holidays, missed sessions or changing format is set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families, left as written',

  book: {
    h2: 'Book a free first lesson in Terenure',
    intro: 'Tell us the learner\'s age and interests and the first lesson will be built for them. Some learners leave that hour with a tiny game, some with their first running program, and some with two lists compared properly.',
    success: 'Thank you. We will be in touch to arrange the lesson.'
  },

  faq: {
    h2: 'Terenure coding class questions',
    intro: 'What Terenure families usually ask.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Terenure?', a: 'No. Lessons are live on video and we have no premises in Ireland. A learner needs a computer, a microphone and sound, and a dependable connection. The phone number on the page is Indian.', boiler: true },
      { q: 'What is the bus route project?', a: 'The learner takes the Dublin Bus timetable feed, collects the stop lists of the seven routes through Terenure, and measures how alike they are with the Jaccard index: 0.896 for routes 16 and 16D, 0 for routes 65 and 74, and 0.008 or 0.859 for route 15 against itself depending on whether stops are matched by identifier or by name.' },
      { q: 'Does the page say which bus to take?', a: 'No. It compares planned stop patterns for one weekday as a data exercise. For journeys, check the operator\'s current timetable.' },
      { q: 'Why is there no population figure for Terenure?', a: 'The page uses only facts that named organisations publish about Terenure itself, here the National Transport Authority and Dublin City Council, and neither publishes a head count.' },
      { q: 'When are lessons held?', a: 'On weekday afternoons and evenings after school, and during the day at weekends. Times are given in Irish time. The teaching team is in India; Irish winter puts them five and a half hours ahead of Terenure and Irish summer four and a half, so the timetable only uses hours that are reasonable in both countries.' },
      { q: 'Can adults take part?', a: 'Yes, up to sixty-seven, beginners included. After the free lesson an adult chooses between a group at their level and one-to-one lessons.' },
      { q: 'Will my child be with other Terenure children?', a: 'Possibly, but groups are organised by level, so classmates may live anywhere in Ireland or overseas.' },
      { q: 'What do coding classes in Terenure cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched by level, pace and goals rather than age or address. If no group runs at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Terenure',
    html: 'South along the Dodder, <a class="cg-inline-link" href="/coding-classes-in-rathfarnham-dublin">Rathfarnham</a> has a project on the shortest route between heritage sites, and to the north <a class="cg-inline-link" href="/coding-classes-in-rathmines-dublin">Rathmines</a> one on library loans. The <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page covers the city, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Terenure, Dublin and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-rathfarnham-dublin', label: 'Rathfarnham' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-trn .cg-hero-grid { align-items: end; gap: clamp(1.14rem, 3.22vw, 2.55rem); }
.cg-root.cg-trn .cg-hero h1 { font-weight: 715; letter-spacing: -0.0186em; line-height: 1.06; }
.cg-root.cg-trn .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1.13rem; }
.cg-root.cg-trn .cg-eyebrow { letter-spacing: 0.121em; font-weight: 660; text-transform: uppercase; }
.cg-root.cg-trn .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0124em; }
.cg-root.cg-trn .cg-grid-3 { gap: clamp(1.06rem, 2.88vw, 2.19rem); }
.cg-root.cg-trn .cg-table caption { letter-spacing: 0.031em; font-weight: 675; }
.cg-root.cg-trn .cg-table td { font-variant-numeric: tabular-nums slashed-zero; }
.cg-root.cg-trn .cg-table td:nth-child(2) { font-weight: 640; }
.cg-root.cg-trn .cg-ladder-col { border-left: 4px double var(--cg-accent); padding-left: 1.03rem; }
.cg-root.cg-trn .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Terenure, named sources only (owner rule for districts), read 20 September 2026. National Transport Authority, Dublin Bus GTFS (https://www.transportforireland.ie/transitData/Data/GTFS_Dublin_Bus.zip; feed_start_date 20260918, feed_end_date 20270918). Stops whose stop_name contains "Terenure": 13 (Terenure Rd E x2, Terenure Road West x2, Terenure Garda Stn, Terenure Lbry x2, Terenure Coll x2, Terenure North x2, Terenure South x2). Our arithmetic (trn/jac.js), Tuesday 22 September 2026: 7 routes, 13 route-directions (15 116 and 117 trips; 15A 52 and 49; 16 78 and 89; 16D 6; 65 17 and 18, three patterns each way, main pattern 11 of 17 outbound; 65B 20 and 19; 74 37 and 38). Jaccard on main patterns, stop identifiers, same direction_id: 16 and 16D 0.896 (69 shared of 77; 6 only on 16, 2 only on 16D); 65 and 65B 0.307 (31 of 101); 15 and 65B 0.223; 15 and 15A 0.205 (18 of 88); 15 and 65 0.197 (23 of 117); 65 and 74 0.000 (0 of 141); 65B and 74 0.000 (0 of 127); 15A and 74 0.000 (0 of 107). Same route, both directions (identifier / name / within 100 m): 15 0.008 (1 of 132) / 0.859 (61 of 71) / 0.662 (53 of 80); 16 0.007 / 0.686 / 0.543; 65 0.007 / 0.793 / 0.585; 74 0.047 / 0.517 / 0.583; 15A 0.013 / 0.674 / 0.540; 65B 0.009 / 0.681 / 0.568. Feed has 4,337 stops with 2,579 distinct names. Dublin City Council, Terenure Library: "Templeogue Road Dublin 6W Co. Dublin D6W YC59"; "Locate 53.308974, -6.285274"; Monday 13:00 to 20:00, Tuesday 10:00 to 17:00, Wednesday 13:00 to 20:00, Thursday 10:00 to 17:00; "An induction loop system for use with hearing aids is available". Dublin City Council, Bushy Park: "Bushy Park is in Terenure on the Southside of Dublin city. The park has scenic walks along the River Dodder, GAA pitches, tennis courts, padel and boules courts, a duck pond, a playground and a skatepark."; "Bushy Park dates back to 1700 when Arthur Bushe, Secretary to the Revenue Commissioners, built the house known as \\"Bushes House\\" on a site of four hectares. The property was obtained by John Hobson in 1772. He changed the name to Bushy Park. In 1791, the park was purchased by Abraham Wilkinson who added almost 40 hectares to the estate."; "The Shaws ... remained connected with Bushy Park until 1951, when they sold the estate to Dublin Corporation."; "Bushy Park Native Tree Trail in English or Irish".',
    localProject: 'Jaccard similarity and what counts as the same element. From the NTA\'s Dublin Bus timetable feed, the learner builds the main stop pattern of each of the seven routes through Terenure\'s 13 named stops and computes the Jaccard index for pairs: 16 and 16D 0.896 (69 of 77 stops), 65 and 74 zero though both serve Terenure. Comparing a route with its own opposite direction exposes the definitional choice: route 15 scores 0.008 by stop identifier, 0.859 by stop name and 0.662 by location within 100 metres, and the feed has 4,337 stops but 2,579 names. Lessons: set operations; similarity is intersection over union; decide what counts as the same before counting; state the matching rule. New family site-wide: SET SIMILARITY (JACCARD) (jaccard, set similarity, intersection over union had no prior hits; Enniscorthy owns Frechet bounds on overlaps, Galway deduplication by name against identifier).',
    requiredMentions: [
      '0.008',
      '0.859',
      '0.662',
      '0.896',
      '69 of the 77',
      '4,337',
      '2,579',
      'D6W YC59',
      '40 hectares',
      '1951',
      '13 stops',
      'Jaccard index'
    ],
    sources: [
      { claim: 'National Transport Authority, Dublin Bus GTFS timetable feed valid from 18 September 2026: stop patterns of routes serving stops named Terenure on Tuesday 22 September 2026.', url: 'https://www.transportforireland.ie/transitData/Data/GTFS_Dublin_Bus.zip' },
      { claim: 'Dublin City Council, Terenure Library: Templeogue Road, D6W YC59; opening hours; induction loop.', url: 'https://www.dublincity.ie/libraries/find-library/terenure-library' },
      { claim: 'Dublin City Council, Bushy Park: in Terenure; Dodder walks and sports facilities; history from 1700 to the sale to Dublin Corporation in 1951.', url: 'https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/bushy-park' }
    ],
    rejectedClaims: [
      'Terenure College details: the Dublin page lists the college; not repeated here.',
      'The 2012 library loan file for the Terenure branch: its location quotient lesson is owned by Rathmines and truncation by other pages.',
      'Ridership or passenger numbers at any stop: the timetable feed does not contain them.',
      'Shortest paths and graph search: Diemen and Rathfarnham own those; this page compares sets only.',
      'Any population figure for Terenure and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
