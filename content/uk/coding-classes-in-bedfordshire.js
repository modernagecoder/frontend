'use strict';
// Bedfordshire (cg- county index, UK cluster Phase 7, row 223). Three unitary councils: Bedford, Central
// Bedfordshire, Luton. Spine: the shortest route does not keep one heading. London Luton Airport destinations page
// (read raw 26 September 2026): "Flying to and from more than 30 countries and over 130 destinations across Europe,
// the Middle East and North Africa". Airport coordinates: OurAirports open data (airports.csv, public domain), LTN
// 51.874699 N 0.368333 W. Our run (scratchpad bed, 26 September 2026), haversine on a 6,371.0088 km sphere for 33
// listed destinations: farthest Hurghada 3,952 km, Sharm El Sheikh 3,916, Yerevan 3,627, Tel Aviv 3,601, Tbilisi
// 3,568; Reykjavik (Keflavik) 1,862 km is nearer than Tromso 2,217 and Kittila 2,222; nearest Jersey 323. Initial
// great-circle bearing from Luton to Tbilisi 90.3 degrees, return bearing from Tbilisi 304.3 degrees (not 270.3);
// constant-heading (rhumb) route 3,619 km against great circle 3,568, 51 km longer; to Yerevan rhumb 3,677 against
// 3,627. Flat-grid estimate treating degrees as 111.195 km both ways: Yerevan 5,146 km (42 per cent too long),
// Tbilisi 5,166, Reykjavik 2,816. Lesson family: great circles, initial and final bearings, and the rhumb line;
// screened 26 September 2026 (great circle: 0 lesson hits; haversine appears on other pages only as a distance tool;
// Stillorgan's degree-projection area lesson is a different teaching point).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (704,739, our sum); ONS built-up areas with our
// OA check (all 18 inside the county; Luton BUA 233,525 spans Luton and Central Bedfordshire; Wixams spans Bedford
// and Central Bedfordshire). Term dates: set by three councils and academies; none read, none printed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'BEDFORDSHIRE', blurb: 'Three councils, eighteen towns, and every flight from Luton measured along the curve of the Earth.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-bedfordshire',
  code: 'bdc',
  accent: '#292D5C',
  accentRationale: 'Bedfordshire: a night-flight indigo from the solver (10.42:1 on the lightest paper), lighter and greyer than the Kent and Oxfordshire blues',
  pageType: 'governorate',
  place: {
    name: 'Bedfordshire',
    eyebrow: 'County of Bedfordshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East of England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bedfordshire',
  title: 'Coding Classes in Bedfordshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, app development and maths classes across Bedfordshire, from Luton and Bedford to Leighton Buzzard, Dunstable and Biggleswade.',
  ogDescription: 'Coding classes for every Bedfordshire town, and a project that measures each flight from Luton along the Earth\'s curve, and finds out why the way home has a different heading.',
  twitterDescription: 'Bedfordshire coding, Python and app classes for ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and App Development Classes for Bedfordshire',
    description: 'Ability-placed online coding, Python, app development, databases and mathematics for children, teenagers and adults across Bedford, Central Bedfordshire and Luton, taught live in English.'
  },

  h1: 'Coding classes in Bedfordshire',
  capsuleQ: 'What are the best coding classes in Bedfordshire?',
  capsule: 'Bedfordshire has three unitary councils, Central Bedfordshire, Luton and Bedford, and 704,739 residents at the 2021 Census. Luton\'s built-up area is the largest place, bigger than the borough because it runs over into Central Bedfordshire; Bedford is second, and then come Leighton Buzzard, Dunstable, Kempston and Biggleswade with a ring of smaller towns. We run the same classes for all of them. A teacher in India works live with each learner over video, placement depends on what the learner can already do and not on age, and we teach anyone aged 6 to 67, in a group of five to ten or individually. Programming, Python, app building, databases and maths are all covered. The Bedfordshire project starts at Luton Airport. Your first lesson is free, and afterwards a group place is USD 100 a month and a private teacher USD 150.',
  lead: 'London Luton Airport says it flies to more than thirty countries and over 130 destinations. On a flat map, the line from Luton to Tbilisi runs due east. On the real, round Earth, the shortest route does leave Luton heading due east, but it curves northwards and then south again, and a plane flying the reverse trip sets off on a heading of about 304 degrees, not the 270 you would expect for "due west". That surprise is where this page\'s project begins. It takes the airport\'s own destination list, measures every route along the curve of the Earth, and compares the true shortest path with the constant-heading line a map suggests.',
  wa: 'Hello Modern Age Coders, I would like to book a free lesson for a learner in Bedfordshire.',

  picks: {
    eyebrow: 'Courses for Bedfordshire',
    h2: 'Four places Bedfordshire learners begin',
    intro: 'A nine-year-old in Houghton Regis designing a racing game, a Year 7 in Flitwick who collects facts about planes, a Year 11 in Kempston who wants to publish a phone app, and a warehouse supervisor in Dunstable learning to query the stock database. Each starts with one free lesson.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Real games built in Scratch, then Roblox and Minecraft worlds, with physics, levels and scores.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python for children, where maths functions such as sine and cosine become tools rather than homework.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'JavaScript, React and React Native with Expo and Firebase, ending with a launched capstone app.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'Adults', note: 'SQL, database design, stored procedures and transactions, with Python integration for real work.' }
    ]
  },

  sections: [
    {
      id: 'bedfordshire', tint: '', eyebrow: 'Three councils, one county',
      h2: 'Bedfordshire: 704,739 people, and a Luton bigger than its borough',
      intro: 'Council populations come from the 2021 Census on Nomis. The town list is the ONS built-up areas, each checked against our own sum of census output areas inside Bedfordshire.',
      body: [
        { kind: 'table', caption: 'The three Bedfordshire unitary councils, usual residents at Census 2021', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Central Bedfordshire', '294,252', 'Leighton Buzzard, Dunstable, Biggleswade, Houghton Regis, Flitwick, Sandy'],
          ['Luton', '225,262', 'Luton'],
          ['Bedford', '185,225', 'Bedford, Kempston, Wootton, Wixams in part']
        ] },
        { kind: 'p', text: 'Luton borough held 225,262 people, but the ONS Luton built-up area held 233,525, because the continuous town reaches across the boundary into Central Bedfordshire. Central Bedfordshire, the largest council, has no single big town at all: it is a network of market towns and villages strung between Luton, Bedford and Milton Keynes. That is exactly the kind of area where a weekly evening class in one place serves only the people who happen to live nearby.' },
        { kind: 'table', caption: 'Every Bedfordshire built-up area above 5,000 residents, 2021 Census, largest first', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Luton', '233,525', 'Ampthill', '8,825'],
          ['Bedford', '97,235', 'Wootton', '7,565'],
          ['Leighton Buzzard', '42,735', 'Shefford', '7,310'],
          ['Dunstable', '34,500', 'Cranfield', '7,050'],
          ['Kempston', '22,785', 'Marston Moretaine', '6,350'],
          ['Biggleswade', '21,950', 'Wixams', '6,050'],
          ['Houghton Regis', '18,820', 'Arlesey', '6,025'],
          ['Flitwick', '13,660', 'Potton', '5,230'],
          ['Stotfold', '12,310', 'Sandy', '11,375']
        ] },
        { kind: 'p', text: 'All eighteen agree with our own count to within rounding and every one sits inside the county. Two cross council lines within it: Luton spills into Central Bedfordshire, and the new settlement at Wixams straddles Bedford and Central Bedfordshire. The three councils each set their own school calendars, as academies may; we did not read them for this page, and lesson breaks are agreed with each family.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bedfordshire project',
      h2: 'Every flight from Luton, measured on a round Earth',
      intro: 'The airport\'s own destination list, open airport coordinates, and two formulas a learner can write in an afternoon.',
      body: [
        { kind: 'p', text: 'The learner takes 33 destinations from Luton\'s published list, looks up each airport\'s latitude and longitude in the OurAirports open dataset, and computes the great-circle distance: the length of the shortest path over the surface of a sphere, using the haversine formula. Then they compute two more things for each route. The initial bearing is the compass heading a plane sets off on. The rhumb line is the path that keeps one compass heading the whole way, which is what a straight line on a standard map looks like.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: selected Luton routes, great circle against flat-map guesswork', head: ['Destination', 'Great-circle distance', 'Leaves Luton heading', 'Flat-grid guess'], rows: [
          ['Hurghada, the farthest', '3,952 km', '121 degrees', '4,688 km'],
          ['Yerevan', '3,627 km', '93 degrees', '5,146 km'],
          ['Tbilisi', '3,568 km', '90.3 degrees', '5,166 km'],
          ['Tromso', '2,217 km', '20 degrees', '2,919 km'],
          ['Reykjavik', '1,862 km', '325 degrees', '2,816 km'],
          ['Jersey, the nearest', '323 km', '204 degrees', '359 km']
        ] },
        { kind: 'p', text: 'The last column is what you get by treating latitude and longitude as if they were an ordinary square grid, 111 km per degree in both directions. It is wrong everywhere, and worst for routes that run east-west at high latitude, because a degree of longitude shrinks as you go north. Yerevan comes out 42 per cent too far. Reykjavik comes out further than Tromso, when in fact Reykjavik, at 1,862 km, is the nearer of the two by more than 350 km.' },
        { kind: 'p', text: 'The bearing column hides the biggest surprise. A plane leaving Luton for Tbilisi sets off almost exactly due east, at 90.3 degrees. A plane leaving Tbilisi for Luton sets off at 304.3 degrees, not the 270.3 you would get by simply turning round. On a sphere, the shortest path keeps changing its compass heading. A pilot who instead held one heading the whole way, the rhumb line, would fly 3,619 km instead of 3,568, an extra 51 km for the comfort of never turning the wheel.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Find five destinations on a globe and on a flat map, guess which is farthest, then check with a distance website and discuss why the guesses were wrong.' },
          { h3: 'Ages 13 to 16', p: 'Write the haversine function, run it on the airport list, sort the results, and print the nearest and farthest destinations.' },
          { h3: 'Ages 16 and up', p: 'Add initial bearings and rhumb-line distances, find the route where the two differ most, and plot a great-circle path on a map.' }
        ] },
        { kind: 'callout', h3: 'What these distances are', p: 'They are distances between airport reference points on a sphere of radius 6,371 km. Real flights follow air routes, winds and controlled airspace, so they fly further than any of these figures. The destinations come from the airport\'s own page on 26 September 2026 and may change; the coordinates come from an open dataset; the arithmetic is ours.' }
      ]
    },
    {
      id: 'luton', tint: 'deep', eyebrow: 'Why Luton',
      h2: 'An airport that reaches from the Arctic Circle to the Red Sea',
      intro: 'The county link, from London Luton Airport\'s own destinations page.',
      body: [
        { kind: 'table', caption: 'London Luton Airport\'s route list, as published', head: ['What the page says', 'Examples it lists'], rows: [
          ['More than 30 countries and over 130 destinations', 'Across Europe, the Middle East and North Africa'],
          ['The far north', 'Tromso, Rovaniemi, Kittila, Reykjavik'],
          ['The far south-east', 'Hurghada, Sharm El-Sheikh, Tel Aviv, Larnaca'],
          ['The Atlantic islands', 'Tenerife, Gran Canaria, Lanzarote, Fuerteventura, Madeira'],
          ['Close to home', 'Jersey, Dublin, Belfast, Edinburgh, Inverness, the Isle of Man']
        ] },
        { kind: 'p', text: 'That spread, from inside the Arctic Circle to the Red Sea, makes a Bedfordshire airport the ideal place to learn why a flat map lies about distance. The same maths runs every satnav, delivery app and flight tracker a teenager uses, and building it from two formulas and a public dataset is how a learner discovers that the tools on their phone are made of ideas they can understand.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with London Luton Airport, any airline, the OurAirports project or any Bedfordshire council, and nothing here implies one. The destinations are the airport\'s; the coordinates are the open dataset\'s; the calculations and any errors are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> is just south, <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> are west, and <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a> is north-east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners move up',
    h2: 'From a sprite that flies to a map that measures',
    intro: 'The free lesson finds the right starting point. Year group is a clue; ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Movement on screen', p: 'Scratch and game projects where things fly, turn and land, and children meet direction and distance for the first time.', courses: ['game-development-masterclass-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Maths as tools', p: 'Python functions for distance and angle, and the moment when trigonometry turns out to be useful.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Apps with maps', p: 'Mobile and web apps that use location, with the geometry behind them understood rather than copied.', courses: ['complete-app-development-masterclass-for-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Data that scales', p: 'Databases and Python for adults, storing thousands of routes and asking precise questions of them.', courses: ['mysql-database-complete-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and geometry',
    h2: 'Ask an AI how far Luton is from Tbilisi and it will tell you. Will it tell you the way back is a different heading?',
    intro: 'Rarely, unless you already know that is worth asking.',
    p1: 'A chatbot will usually give a sensible distance between two airports, and if asked it will write the haversine formula correctly. What it seldom volunteers is that the heading changes along the route, that the return bearing is not the outbound one turned round, or that a quick calculation on raw degrees would be wrong by tens of per cent. Those facts matter to anyone building a map, a delivery system or a drone flight plan, and they only come up if someone asks.',
    p2: 'A Bedfordshire student who has computed 90.3 degrees out and 304.3 back will ask the follow-up questions automatically: along what path, on what model of the Earth, and how far off is the flat approximation? That habit of checking the assumptions behind a number, not just the number, is the one that keeps AI-assisted work honest.',
    closer: 'So a Bedfordshire teenager should learn to code in 2026 to understand the geometry inside the apps they use, and to catch the moment an answer quietly assumes the world is flat.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson logistics',
    h2: 'Potton to Leighton Buzzard without the A507',
    intro: 'Bedfordshire\'s towns are close on the map and slow on the road. Online lessons cut out the journey altogether.',
    cells: [
      { h3: 'Taught at home', p: 'A bedroom in Arlesey, a kitchen in Shefford, a desk in Marston Moretaine: the learner stays put and the lesson arrives.' },
      { h3: 'UK school terms throughout', p: 'We use the names Bedfordshire schools use, Year 7, GCSE choices, sixth form, and teach in English.' },
      { h3: 'Nothing to pay at first', p: 'A full first lesson with a teacher, then a plain recommendation of level and course. No card is requested.' },
      { h3: 'A group at your level', p: 'Five to ten learners who have reached the same point, gathered widely, so the pace suits each of them.' },
      { h3: 'Breaks that match school', p: 'Usually two lessons a week, paused for your own school\'s holidays, which vary between the three councils and academies.' },
      { h3: 'Times given in UK time', p: 'Teaching comes from India, 4.5 hours ahead in the UK summer and 5.5 hours ahead in the UK winter; your timetable shows UK time only.' }
    ],
    spec: { title: 'Why groups are formed by level', p: 'Three councils and eighteen towns, most of them small, mean few places have enough learners at the same stage on the same evening. Level-based groups let a Sandy learner and a Luton learner share a class.' }
  },

  fees: {
    h2: 'Bedfordshire fees',
    intro: 'The same prices for every Bedfordshire town and every country outside India.',
    first: 'One complete lesson of real work, finishing with a suggested level and course.',
    group: 'About eight lessons per month, in a group of five to ten learners at one level.',
    private: 'About eight lessons per month, one teacher with one learner.',
    closer: 'Everything is priced in US dollars, as it is for all families outside India, and there is no version in pounds. You are invoiced only once the free lesson has fixed a course and a weekly slot; see the pricing page for pausing, missed lessons and swapping between group and one-to-one.'
  },

  reviewsH2: 'Six reviews families left on Google',

  book: {
    h2: 'Claim the free lesson',
    intro: 'Share an age or school year and one interest. The first lesson could be a game with flying sprites, a first Python distance function, or the Luton routes project on this page.',
    success: 'Thank you. Your Bedfordshire request has been sent.'
  },

  faq: {
    h2: 'Bedfordshire questions',
    intro: 'On the county, the flight project and how lessons work.',
    items: [
      { q: 'How many people live in Bedfordshire?', a: 'Central Bedfordshire, Luton and Bedford together held 704,739 usual residents at the 2021 Census, from ONS figures on Nomis. Central Bedfordshire is the largest council at 294,252.' },
      { q: 'What are the largest towns in Bedfordshire?', a: 'By ONS built-up area: Luton 233,525, Bedford 97,235, Leighton Buzzard 42,735, Dunstable 34,500 and Kempston 22,785. The page lists all eighteen above five thousand residents.' },
      { q: 'What is the Luton flights project?', a: 'Learners take the airport\'s published destinations, compute great-circle distances and bearings with the haversine formula, and compare them with flat-map estimates and constant-heading routes. Hurghada is the farthest at 3,952 km.' },
      { q: 'Why is the return heading different from the outbound one?', a: 'Because the shortest path on a sphere keeps changing direction. From Luton to Tbilisi a plane starts at 90.3 degrees; from Tbilisi to Luton it starts at 304.3 degrees, not 270.3.' },
      { q: 'How many destinations does Luton Airport serve?', a: 'Its destinations page says more than 30 countries and over 130 destinations across Europe, the Middle East and North Africa. We used 33 of them in the project.' },
      { q: 'Is there a classroom in Luton or Bedford?', a: 'We do not have one. Lessons are live on video, so a learner in Cranfield and one in Houghton Regis can be in the same class without travelling.' },
      { q: 'What ages do you teach?', a: 'Anyone from six to sixty-seven. Games and Scratch for young children, typed Python from about ten, apps and algorithms for teenagers, and databases, data and software for adults. The free lesson sets the level.' },
      { q: 'Can my teenager learn to build a phone app?', a: 'Yes. The teen app development course uses JavaScript, React and React Native with Expo and Firebase, and ends with a launched capstone app.' },
      { q: 'How much are lessons?', a: 'Lesson one is free. From then on a group place is USD 100 a month and private lessons USD 150 a month, with no joining fee and no set term.' },
      { q: 'When are Bedfordshire school holidays?', a: 'Each of the three councils sets its own dates, and academies may differ. We fit lesson breaks around the dates your own school gives you.' }
    ]
  },

  next: {
    eyebrow: 'Further afield',
    h2: 'Other pages near Bedfordshire',
    html: 'Neighbouring county pages include <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a>, <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> and <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a>, and <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> has a city page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everything.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Bedfordshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/best-coding-class-in-milton-keynes', label: 'Milton Keynes' }
  ],

  personalityCss: `
.cg-root.cg-bdc .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.8rem); }
.cg-root.cg-bdc .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-bdc .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-bdc .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-bdc .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-bdc .cg-table caption { font-style: italic; font-weight: 600; }
.cg-root.cg-bdc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bdc .cg-table th { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-bdc .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-bdc .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Bedfordshire (three unitary councils). ONS Census 2021 TS001 via Nomis: Central Bedfordshire 294,252; Luton 225,262; Bedford 185,225; total 704,739 (our sum). ONS Census 2021 built-up areas (published; all 18 agree with our OA sums within rounding and lie inside the county): Luton 233,525 (Luton, Central Bedfordshire); Bedford 97,235; Leighton Buzzard 42,735; Dunstable 34,500; Kempston 22,785; Biggleswade 21,950; Houghton Regis 18,820; Flitwick 13,660; Stotfold 12,310; Sandy 11,375; Ampthill 8,825; Wootton 7,565; Shefford 7,310; Cranfield 7,050; Marston Moretaine 6,350; Wixams 6,050 (Bedford, Central Bedfordshire); Arlesey 6,025; Potton 5,230. London Luton Airport, Our Destinations: "Flying to and from more than 30 countries and over 130 destinations across Europe, the Middle East and North Africa"; the list includes Tromso, Rovaniemi, Kittila, Reykjavik, Hurghada, Sharm El-Sheikh, Tel Aviv, Larnaca, Tenerife, Gran Canaria, Lanzarote, Fuerteventura, Madeira, Jersey, Dublin, Belfast, Edinburgh, Inverness, Isle of Man, Yerevan and Tbilisi. OurAirports airports.csv (open data): LTN 51.874699, -0.368333.',
    localProject: 'Great circles, bearings and the rhumb line. 33 destinations from the Luton list with OurAirports coordinates; haversine on a sphere of 6,371.0088 km. Distances from LTN: Hurghada 3,952 km (initial bearing 120.7), Sharm El Sheikh 3,916, Yerevan 3,627 (93.1), Tel Aviv 3,601, Tbilisi 3,568 (90.3; return bearing 304.3), Larnaca 3,288, Tenerife Sur 2,973, Kittila 2,222, Tromso 2,217 (19.7), Rovaniemi 2,179, Reykjavik Keflavik 1,862 (324.8), Jersey 323 (204.2). Rhumb line to Tbilisi 3,619 km (51 km longer than the great circle); to Yerevan 3,677. Flat grid at 111.195 km per degree: Yerevan 5,146 (42 per cent too long), Tbilisi 5,166, Hurghada 4,688, Tromso 2,919, Reykjavik 2,816. Page states distances are between airport reference points on a sphere and real flights are longer. AI angle: assistants give distances but rarely note heading change or the flat-grid error. Lesson family: great circles, initial and final bearings, rhumb line; distinct from Stillorgan (area on raw degrees).',
    requiredMentions: [
      '704,739',
      '3,952 km',
      '304.3 degrees',
      '5,146 km',
      '3,619 km',
      '1,862 km',
      '2,217 km',
      'over 130 destinations',
      'Marston Moretaine',
      '233,525'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Bedford, Central Bedfordshire and Luton, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Bedfordshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'London Luton Airport: more than 30 countries and over 130 destinations; the published destination list.', url: 'https://www.london-luton.co.uk/destinations' },
      { claim: 'OurAirports open data: airport latitudes and longitudes.', url: 'https://ourairports.com/data/' }
    ],
    rejectedClaims: [
      'Airline schedules, flight times or passenger numbers at Luton: not read at a primary source for this build; only the destination list is used.',
      'Actual flown distances: real routes follow airways and winds, so only sphere distances are printed and the page says so.',
      'Bedfordshire school term dates: set by three councils and academies; none read for this build.',
      'The Cardington airship hangars: not read at a primary source for this build, so not mentioned.',
      'Destinations with ambiguous airports on the list (Paris, Belfast, Cairo): left out of the calculation rather than guessed.',
      'Named Bedfordshire schools: none is named.'
    ]
  }
};
