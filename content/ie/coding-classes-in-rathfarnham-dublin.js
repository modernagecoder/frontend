'use strict';
// Rathfarnham, Dublin 14 and 16 (cg- district page, Ireland cluster, Phase 6). Named sources
// only (owner rule for districts), read 20 September 2026: Heritage Ireland (OPW) pages for
// Rathfarnham Castle, the Pearse Museum and eight other Dublin sites, each with its own map
// point; South Dublin County Council's Ballyroan Library page; St Columba's College's own
// site. parkrun's Marlay course page returned 405 and was not worked around. Spine: route
// optimisation, greedy against exhaustive search. Ten OPW sites, straight-line distances by
// haversine: Heritage Ireland's rounded "approx." figures match (1.7 against 1.69 km to the
// Pearse Museum, 4.9 against 4.87 to St Stephen's Green). Starting at Rathfarnham Castle and
// visiting the other nine: nearest-neighbour 23.26 km; best of all 362,880 orders 21.74 km
// (greedy 7.0% longer); worst order 51.54 km. Orders for 12 sites after the start
// 479,001,600. Scratchpad dist/tour.js, dist/hi/*.html. The South Dublin page owns the
// Rathfarnham-Templeogue LEA figure.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'RATHFARNHAM', blurb: 'Plan a day round ten Dublin heritage sites from Rathfarnham Castle. The obvious route is not the shortest. A page on algorithms that search.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-rathfarnham-dublin',
  code: 'rfn',
  accent: '#5A6827',
  accentRationale: 'Rathfarnham: a castle-lawn moss green from the widened solver search, apart from the South Dublin purple and the Waterford and Wicklow olives',
  pageType: 'district',
  place: {
    name: 'Rathfarnham',
    eyebrow: 'Rathfarnham, Dublin 14 and 16',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Dublin' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-south-dublin', name: 'South Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'South Dublin', href: '/coding-classes-in-south-dublin' },
    { label: 'Dundrum', href: '/coding-classes-in-dundrum-dublin' }
  ],
  routeLabel: 'Rathfarnham, Dublin, Ireland',
  title: 'Coding Classes in Rathfarnham, Dublin | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Rathfarnham learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding classes for Rathfarnham, with a project that plans a tour of Dublin heritage sites and compares a quick route with the shortest one.',
  twitterDescription: 'Live online coding, Python, AI and maths for Rathfarnham, Dublin, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Rathfarnham',
    description: 'Online coding, Python, AI, algorithms and mathematics for children, teenagers and adults in Rathfarnham, Dublin, taught live in English to small same-level groups or one to one.'
  },

  h1: 'Coding classes in Rathfarnham',
  capsuleQ: 'What are the best coding classes in Rathfarnham?',
  capsule: 'Rathfarnham learners meet their teacher live on video for every lesson, sitting in a small class of learners at one level or learning solo, most weeks twice, and anyone from the age of six to sixty-seven can take part. Lessons happen at home. A first lesson is free; afterwards the monthly cost is USD 100 in a group and USD 150 for teaching one to one.',
  lead: 'Start at Rathfarnham Castle and set out to see ten of the heritage sites the Office of Public Works runs in Dublin, from the Pearse Museum down the road to Casino Marino on the north side. The obvious plan is to go to whichever site is closest, then the closest after that, and so on. Measured in straight lines, that route is 23.26 kilometres. A program that tries every possible order, all 362,880 of them, finds one of 21.74. The quick rule is 7 percent worse than the best, and with a few more sites the careful search becomes impossible. This page teaches a learner the difference between an algorithm that guesses well and one that is sure.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Rathfarnham.',

  picks: {
    eyebrow: 'Courses for Rathfarnham',
    h2: 'Where Rathfarnham learners get started',
    intro: 'Select the age band first; the teacher then uses the free opening lesson to confirm the course or switch it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and paths: guiding a character round a map, first by the nearest step, then by planning ahead.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with lists of places, distances and a first program that tries every order of a short trip.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms in Python: greedy choices, exhaustive search, permutations and why some problems explode.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who plan deliveries, rotas or visits and need to know when a quick rule is good enough.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Nearest first, or every order? Plan the heritage tour both ways',
      intro: 'Ten Dublin sites run by the Office of Public Works, each at the map point its Heritage Ireland page gives. Distances are straight lines, which is also how Heritage Ireland\'s own rounded "approx." figures are measured: 1.7 kilometres to the Pearse Museum, where the calculation gives 1.69.',
      body: [
        { kind: 'table', caption: 'A tour of ten OPW sites starting at Rathfarnham Castle', head: ['Method', 'Orders tried', 'Tour length'], rows: [
          ['Nearest site next', '1', '23.26 km'],
          ['Every order checked', '362,880', '21.74 km'],
          ['Worst possible order', '362,880', '51.54 km']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The quick rule', p: 'Going nearest first visits the Pearse Museum, then heads into town for St Stephen\'s Green, Dublin Castle and the Garden of Remembrance, swings west to Arbour Hill, Kilmainham, the War Memorial Gardens and the Phoenix Park, and only then crosses back east to Casino Marino.' },
          { h3: 'The best order', p: 'The shortest tour goes from the Pearse Museum straight to Kilmainham Gaol, loops the west side first through the War Memorial Gardens and the Phoenix Park, then works east through Arbour Hill, Dublin Castle, St Stephen\'s Green and the Garden of Remembrance to finish at Casino Marino.' },
          { h3: 'Why the rule slips', p: 'Nearest-first grabs the cheapest step each time and never looks ahead, so it strands itself far from the last site. Here that costs 1.52 kilometres, 7.0 percent more than necessary.' }
        ] },
        { kind: 'callout', h3: 'A fast guess or a guaranteed answer', p: 'Many real problems, from delivery rounds to school bus routes, ask for the best order in which to visit places. Checking every order guarantees the shortest, but the number of orders is a factorial: 362,880 for nine sites after the start, 479,001,600 for twelve, and more than a trillion for fifteen. So practical software mixes quick rules like nearest-first with smarter improvements, and accepts an answer that is very good rather than proven best. The skill is knowing which kind of answer you have and saying so.' },
        { kind: 'p', text: 'The learner\'s program stores the ten sites with their latitude and longitude, builds a table of straight-line distances with the haversine formula, and then answers the question two ways. The greedy version is a loop: from the current site, pick the nearest one not yet visited. The exhaustive version generates every ordering of the other nine sites, adds up each tour and keeps the shortest, which on an ordinary laptop takes well under a second. A final loop prints how the number of orderings grows as sites are added, which is the moment the learner sees why the exhaustive method cannot scale.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Straight lines, not streets', p: 'Real journeys follow roads and paths, so every figure here is a lower bound on the distance actually travelled. Swapping in road distances changes the numbers, not the method.' },
          { h3: 'Checking the source', p: 'The haversine distances agree with the rounded figures Heritage Ireland prints on its own pages, 1.69 against 1.7 kilometres and 4.87 against 4.9 to St Stephen\'s Green, which is a useful check that the map points were read correctly.' },
          { h3: 'What is left out', p: 'The tour ignores opening hours, travel time and whether ten sites fit in a day at all. Those are extra constraints a fuller version would add, each making the search harder.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Rathfarnham, named',
      h2: 'Rathfarnham, as described by those who run its places',
      intro: 'Facts that each body publishes itself, with the eircode it gives.',
      body: [
        { kind: 'table', caption: 'Named places in Rathfarnham', head: ['Place', 'What its own source says'], rows: [
          ['Rathfarnham Castle', 'Rathfarnham, D14 K3T6; four flanker towers'],
          ['Pearse Museum, St Enda\'s Park', 'Grange Road, D16 Y7Y5; nearly 20 hectares'],
          ['Ballyroan Library', 'Orchardstown Avenue, D14 VY33; opened 18 February 2013'],
          ['St Columba\'s College', 'Whitechurch, D16 CH92']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An Elizabethan castle', p: 'Heritage Ireland says Rathfarnham Castle dates from the Elizabethan period and was built for Adam Loftus, a Yorkshire clergyman who rose to become Archbishop of Dublin and Lord Chancellor of Ireland, and that it has four flanker towers.' },
          { h3: 'A school turned museum', p: 'The Pearse Museum in St Enda\'s Park is where Patrick Pearse lived and ran his Irish-speaking school from 1910 to 1916, in nearly 20 hectares of parkland; Heritage Ireland lists admission as free.' },
          { h3: 'A library with printers', p: 'South Dublin County Council says Ballyroan Library opened on 18 February 2013 with a lecture room, an exhibition space, a digital training suite and a research room, and lists 3D printers among its facilities.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Rathfarnham, because the page uses only facts that named bodies publish about the place; the electoral area figure is on the South Dublin page. The tour is a teaching exercise on straight-line distances, not a travel recommendation.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'A Rathfarnham learner\'s week',
      intro: 'A typical week holds two lessons, and a teacher teaches each one live from its opening minute.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children start with block code and maze games, first taking the nearest step and then learning to plan a whole route.' },
          { h3: 'Teenagers', p: 'Teenagers go on to Python, websites, AI projects and algorithm puzzles like the heritage tour.' },
          { h3: 'Adults', p: 'Adults can begin without any experience; the first lesson finds their course.' }
        ] },
        { kind: 'p', text: 'Site locations and descriptions come from Heritage Ireland\'s own pages; the distances, tours and counts are our own calculations, run on 20 September 2026. The library and the college are quoted from their own sites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a maze to the travelling salesman',
    intro: 'Bands here are indicative; the teacher places each learner properly in lesson one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Mazes', p: 'Block-coded characters that find a way through, one step at a time.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Every order', p: 'Python that lists all the orders of a short trip and picks the shortest.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Greedy or exhaustive', p: 'Heuristics, permutations and factorial growth on real map points.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Routes at work', p: 'Rotas, rounds and schedules, and when a good-enough answer is enough.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant for the shortest heritage tour',
    intro: 'It will usually suggest a sensible-looking order.',
    p1: 'Ask an AI assistant for the shortest route round these ten sites from Rathfarnham Castle and it will often propose an order that looks reasonable on a map, sometimes close to nearest-first. It rarely says whether the order is the shortest possible or just plausible, and it seldom checks.',
    p2: 'With the exhaustive search written, the learner asks the assistant how it chose the order, how long the tour is, whether a shorter one exists, and how it would know. Comparing its answer with the 21.74-kilometre optimum settles the question in seconds.',
    closer: 'Suggesting a route is easy. Proving it is the shortest is the skill.',
    blogAnchor: 'why learning to code rewards patience'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Rathfarnham',
    intro: 'Arrangements in brief.',
    cells: [
      { h3: 'Real teacher, real time', p: 'The teacher leads throughout and responds to each learner\'s code as it is typed.' },
      { h3: 'Matched level', p: 'Five to ten learners at one level, from Rathfarnham, elsewhere in Ireland or overseas.' },
      { h3: 'Fixed pair of days', p: 'Around eight lessons a month on two set days each week.' },
      { h3: 'Breaks built in', p: 'Holidays, mid-terms and exam weeks are allowed for in the course plan.' },
      { h3: 'What to use', p: 'A laptop or desktop, a working microphone and sound, and a connection that holds video.' },
      { h3: 'Private route', p: 'One-to-one lessons for learners who are ahead, need more time, or keep hours no group matches.' }
    ],
    spec: { title: 'Everything online', p: 'We have no premises in Rathfarnham, in South Dublin or anywhere in Ireland. Lessons are on video and identical wherever the learner joins from.' }
  },

  fees: {
    h2: 'Rathfarnham fees',
    intro: 'The full list.',
    first: 'The first lesson and a level check, free.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same rhythm.',
    closer: 'Each family outside India pays the same monthly amount in US dollars. There is no obligation after the free lesson, payment begins only with the course, and the pricing page covers holidays, missed lessons and changing between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from our families, exactly as written',

  book: {
    h2: 'Book a free first lesson in Rathfarnham',
    intro: 'Tell us the learner\'s age and what they enjoy, and the first hour will be built around that. It might end with a game, a first program, or a route that a computer has proved is the shortest.',
    success: 'Thank you. We will be in touch soon to set up the first lesson.'
  },

  faq: {
    h2: 'Rathfarnham coding class questions',
    intro: 'What Rathfarnham families ask most.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Rathfarnham?', a: 'No. Every lesson is live on video and we have no premises in Ireland. A learner needs a computer, sound and a microphone, and a reliable connection. The phone number on this page is our Indian number.', boiler: true },
      { q: 'What is the heritage tour project?', a: 'Planning a route round ten Dublin sites run by the Office of Public Works, starting at Rathfarnham Castle. Taking the nearest site each time gives 23.26 kilometres in straight lines; checking all 362,880 orders finds 21.74. Learners write both methods and see why the second cannot scale.' },
      { q: 'Is this a recommended day out?', a: 'No. It uses straight-line distances and ignores opening hours and travel time. It is a lesson in algorithms, not a travel guide.' },
      { q: 'Why is there no population for Rathfarnham on this page?', a: 'District pages print only facts that named bodies publish about the place itself, here Heritage Ireland, the council\'s library service and St Columba\'s College; the electoral area figure is on the South Dublin page.' },
      { q: 'When do lessons take place?', a: 'Late afternoons and evenings on school days, and daytime at weekends. Irish time is used for every booking. Our teachers are based in India, which sits five and a half hours ahead of Rathfarnham between late autumn and spring and four and a half ahead through the summer, and we choose hours that suit both.' },
      { q: 'Can adults join the classes?', a: 'Yes, anyone up to sixty-seven, including complete beginners. After the first lesson an adult picks a same-level group or private lessons.' },
      { q: 'Will my child be with other Rathfarnham children?', a: 'Not necessarily. Groups are set by level, so classmates may be anywhere in Ireland or abroad.' },
      { q: 'What do coding classes in Rathfarnham cost?', a: 'The first lesson is free. A group place is then USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same timetable are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How big is each group?', a: 'Five to ten learners, grouped by level, pace and goals rather than age or address. If no group fits a workable hour, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Rathfarnham and the south side',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-south-dublin">South Dublin</a> page covers the council area, <a class="cg-inline-link" href="/coding-classes-in-dundrum-dublin">Dundrum</a> and <a class="cg-inline-link" href="/coding-classes-in-tallaght-dublin">Tallaght</a> have district pages close by, and the <a class="cg-inline-link" href="/problem-solving-skills-through-coding-ireland">problem solving through coding</a> page goes further with algorithms. The <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> connects the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Rathfarnham, South Dublin and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-south-dublin', label: 'South Dublin' },
    { href: '/coding-classes-in-dundrum-dublin', label: 'Dundrum' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-rfn .cg-hero-grid { align-items: center; gap: clamp(1.07rem, 3.22vw, 2.46rem); }
.cg-root.cg-rfn .cg-hero h1 { font-weight: 650; letter-spacing: -0.0183em; line-height: 1.06; }
.cg-root.cg-rfn .cg-capsule { border-left: 7px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-rfn .cg-eyebrow { letter-spacing: 0.136em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rfn .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0124em; }
.cg-root.cg-rfn .cg-grid-3 { gap: clamp(1.04rem, 2.85vw, 2.19rem); }
.cg-root.cg-rfn .cg-table caption { letter-spacing: 0.032em; font-weight: 700; }
.cg-root.cg-rfn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rfn .cg-table td:last-child { font-weight: 700; }
.cg-root.cg-rfn .cg-ladder-col { border-top: 5px double var(--cg-accent); padding-top: 1.09rem; }
.cg-root.cg-rfn .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Rathfarnham, Dublin, named sources only (owner rule for districts), read 20 September 2026. Heritage Ireland map points (google maps place links on each site page): Rathfarnham Castle 53.2980764,-6.2836302; Pearse Museum St Enda\'s Park 53.2828815,-6.2816319; St Stephen\'s Green 53.339643567421,-6.2604814392281; Casino Marino 53.3713499,-6.2270344; Kilmainham Gaol 53.3418701,-6.3098048; Dublin Castle 53.3428861,-6.2674284; Phoenix Park Visitor Centre 53.3657737,-6.3305907; Garden of Remembrance 53.3538817,-6.2641429; Irish National War Memorial Gardens 53.3456298,-6.3135432; Arbour Hill 53.3509571,-6.2871173. Rathfarnham Castle page nearby list: Pearse Museum "Approx. 1.7 km", Iveagh Gardens "Approx. 4.4 km", St Stephen\'s Green "Approx. 4.9 km". Our arithmetic (dist/tour.js, haversine R 6371.0088 km): Castle to Pearse Museum 1.69, to St Stephen\'s Green 4.87, to Casino Marino 8.97; open tour from the castle through the other nine: nearest-neighbour 23.26 km (Pearse Museum, St Stephen\'s Green, Dublin Castle, Garden of Remembrance, Arbour Hill, Kilmainham Gaol, War Memorial Gardens, Phoenix Park Visitor Centre, Casino Marino); exhaustive 362,880 orders, shortest 21.74 km (Pearse Museum, Kilmainham Gaol, War Memorial Gardens, Phoenix Park Visitor Centre, Arbour Hill, Dublin Castle, St Stephen\'s Green, Garden of Remembrance, Casino Marino), longest 51.54 km; greedy excess 7.0 percent (1.52 km); orderings 5! 120, 9! 362,880, 12! 479,001,600, 15! 1,307,674,368,000. Heritage Ireland Rathfarnham Castle: "The castle at Rathfarnham dates back to the Elizabethan period. It was built for Adam Loftus, a Yorkshire clergyman and politician. Loftus was ambitious and eventually rose to become Archbishop of Dublin and Lord Chancellor of Ireland. Loftus\'s castle, with its four flanker towers"; "Rathfarnham Dublin 14 D14 K3T6". Heritage Ireland Pearse Museum: "St. Enda\'s Park Grange Road Rathfarnham Dublin 16 D16 Y7Y5"; "where the leader of the 1916 Rising, Patrick Pearse, lived and operated his pioneering Irish-speaking school from 1910 to 1916. Set in nearly 20 hectares of attractive parkland"; "Free Admission". SDCC Ballyroan Library: "Orchardstown Avenue, Rathfarnham, Dublin D14 VY33"; "Ballyroan Library opened its doors on Monday 18th February, 2013, and includes a lecture room, an exhibition space, a digital training suite and a dedicated research room"; "3D printers". St Columba\'s College: "St. Columba\'s College, Whitechurch, Dublin 16, Ireland D16 CH92"; "a 7 day boarding school". parkrun Marlay course page: 405, not used.',
    localProject: 'Route optimisation, greedy against exhaustive. From the map points on Heritage Ireland\'s own pages, the learner builds straight-line distances between ten OPW heritage sites in Dublin, checks them against the site\'s rounded figures (1.69 against 1.7 km), and plans a tour from Rathfarnham Castle: nearest-first gives 23.26 km, trying all 362,880 orders gives 21.74 km (greedy 7.0 percent longer), and the worst order is 51.54 km. Printing factorial growth (479,001,600 orders for twelve sites) shows why exhaustive search cannot scale. Lessons: know whether an answer is proven best or merely good; state what the model leaves out (roads, opening hours). New family for the cluster: route optimisation and combinatorial search (constructive).',
    requiredMentions: [
      '23.26',
      '21.74',
      '362,880',
      '51.54',
      '1.69',
      '4.87',
      '479,001,600',
      '18 February 2013',
      'D14 K3T6',
      'D16 Y7Y5',
      'D14 VY33',
      'D16 CH92'
    ],
    sources: [
      { claim: 'Heritage Ireland, Rathfarnham Castle: Elizabethan, built for Adam Loftus, four flanker towers; Rathfarnham, D14 K3T6; map point; nearby distances approx. 1.7 km (Pearse Museum), 4.9 km (St Stephen\'s Green).', url: 'https://heritageireland.ie/places-to-visit/rathfarnham-castle/' },
      { claim: 'Heritage Ireland, Pearse Museum St Enda\'s Park: Grange Road, Rathfarnham, D16 Y7Y5; Pearse\'s Irish-speaking school 1910 to 1916; nearly 20 hectares; free admission; map point.', url: 'https://heritageireland.ie/places-to-visit/pearse-museum-st-endas-park/' },
      { claim: 'Heritage Ireland site pages giving map points for St Stephen\'s Green, Casino Marino, Kilmainham Gaol, Dublin Castle, Phoenix Park Visitor Centre, Garden of Remembrance, Irish National War Memorial Gardens and Arbour Hill.', url: 'https://heritageireland.ie/places-to-visit/' },
      { claim: 'South Dublin County Council, Ballyroan Library: Orchardstown Avenue, Rathfarnham, D14 VY33; opened 18 February 2013; lecture room, exhibition space, digital training suite, research room; 3D printers.', url: 'https://www.sdcc.ie/en/services/sport-and-recreation/libraries/join-library-login/find-a-library/ballyroan/' },
      { claim: 'St Columba\'s College: Whitechurch, Dublin 16, D16 CH92; a seven-day boarding school.', url: 'https://www.stcolumbas.ie/' }
    ],
    rejectedClaims: [
      'Any travel recommendation: the tour uses straight-line distances and ignores roads, opening hours and time.',
      'Admission prices at Rathfarnham Castle: euro prices are not printed on this site.',
      'parkrun Marlay course details: the page returned 405 and was not worked around.',
      'The Rathfarnham-Templeogue LEA figure: the South Dublin page owns it.',
      'Any population figure for Rathfarnham and any aggregation of census small areas: owner rule for district pages.'
    ]
  }
};
