'use strict';
// San Jose (cg- metro page, US cluster Phase 5, row 117). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: a San Jose parent comparing coding class formats for a child; a nearest-neighbor project that measures how far
// each San Jose library is from the nearest open neighborhood park, using the City's own open data; California figures
// in brief; Pacific Time. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/best-coding-classes-for-kids-in-san-jose/):
//  - City of San Jose Open Data (data.sanjoseca.gov), "Library" (licence "Creative Commons Attribution"): "The
//    representation of libraries in San Jose, CA.Data is published on Mondays on a weekly basis."; GeoJSON download, 25
//    features, all STATUS "Open". Contact names and emails in the file are not printed.
//  - City of San Jose Open Data, "Park" (Creative Commons Attribution, Enterprise GIS): "This dataset includes open,
//    closed, future, seasonal, and under construction parks and trails in San Jose, Santa Clara County, and parts of San
//    Mateo County."; GeoJSON, 611 features; CURRENTSTATUS Open 526, Closed 36, Future Park 30; PARKTYPE NEIG 231.
//  - Our calculation (ours): centroid of each polygon as the mean of its outer-ring vertices, haversine distance (Earth
//    radius 3,958.8 miles) from each of the 25 libraries to the nearest of the 211 open NEIG parks with geometry: median
//    0.27 miles, mean 0.26, 23 of 25 within half a mile, none over a mile, farthest 0.64 miles (Bascom Library), nearest
//    0.02 miles (Rose Garden Library); Alviso Library 0.06 to Alviso Park, Calabazas Library 0.10 to Calabazas Park,
//    Hillview Library 0.35 to Hillview Park. Park names that honor people are not printed.
//  - Code.org (2025), 2025 State of AI + CS Education: California latest access value about 58% (Most Recent tab
//    1,325 of 2,282, source "School Course Catalogs and Teacher Surveys"); high schools only; year withheld (tabs
//    disagree).
//  - cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) could not be read on 18 October 2026; not retried.
//  - IANA tzdb: America/Los_Angeles; Rule US 2007 max Mar Sun>=8, Nov Sun>=1.
// Lesson family: nearest-neighbor search with straight-line distance on latitude and longitude.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'SAN JOSE', label: 'San Jose', blurb: 'Coding classes for San Jose kids, with a library-to-park distance project on the City of San Jose open data.' },
  market: US,
  slug: 'best-coding-classes-for-kids-in-san-jose',
  code: 'bksj',
  accent: '#1A1380',
  accentRationale: 'San Jose: #1A1380, the allocated deep indigo, a cool violet-blue set well apart from the Bay Area navy in hue, strong contrast on every paper',
  pageType: 'city',
  place: {
    name: 'San Jose',
    eyebrow: 'San Jose, California',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'California' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-united-states', name: 'United States' },
    { slug: 'coding-classes-in-california', name: 'California' }
  ],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'California', href: '/coding-classes-in-california' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'San Jose',
  title: 'Best Coding Classes for Kids in San Jose | Live Online',
  description: 'How San Jose parents can compare the best coding classes for kids: three formats side by side, a library and park distance project, and live online lessons.',
  ogDescription: 'Comparing kids coding classes in San Jose: in-person club, recorded course or live online, plus a project measuring how far each city library is from a park.',
  twitterDescription: 'Coding classes for San Jose kids, live online, with a library and park map project.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for San Jose Kids',
    description: 'Block coding, Scratch, Roblox game design and first Python for San Jose children in elementary and middle school, taught live online by a teacher, in batches or one to one.'
  },

  h1: 'The best coding classes for kids in San Jose: comparing your options',
  capsuleQ: 'What is the best type of coding class for a child in San Jose?',
  capsule: 'For most San Jose children aged 6 to 13, the best fit is a live class with a teacher who watches them work, placed by level. Modern Age Coders runs exactly that online: block coding and Scratch, then Roblox and Python, taught to level-matched groups of fifteen to twenty or privately, on Pacific Time. The first class is free. Older kids measure distances on the City of San Jose&rsquo;s own map data.',
  lead: 'In San Jose, a child can be surrounded by technology and still never write a line of code. Parents here tend to ask sharper questions than most: not whether coding matters, but which format actually teaches it. So this page starts with an honest comparison of the three formats families usually weigh, then shows a project built on open data the City publishes about its own libraries and parks, and ends with how our live classes fit a Silicon Valley school week.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding class for my child in San Jose.',

  picks: {
    eyebrow: 'Starting courses',
    h2: 'Where San Jose kids usually begin',
    intro: 'The placement class confirms the level. These four cover most children between first and seventh grade.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades 1 to 3', note: 'Blocks first: sequences, loops and simple games that a six-year-old can build and explain.' },
      { course: 'scratch-programming-complete-course', band: 'Grades 3 to 5', note: 'Scratch projects with variables, levels and scoring, finished and shared at the end of each unit.' },
      { course: 'roblox-game-coding-for-kids-lua-course', band: 'Grades 4 to 7', note: 'Luau scripting in Roblox Studio for children who already love the platform and want to make, not just play.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 7', note: 'Typed Python, from turtle art to the library distance project, with a first look at how AI guesses.' }
    ]
  },

  sections: [
    {
      id: 'formats', tint: '', eyebrow: 'Comparing formats',
      h2: 'Three kinds of kids coding class, side by side',
      intro: 'Most San Jose families end up choosing between these. Each suits some children; the table is our honest summary of the trade-offs.',
      body: [
        { kind: 'table', caption: 'Kids coding class formats compared (our own assessment, not a ranking of providers)', head: ['What matters', 'In-person club or camp', 'Recorded video course', 'Live online class'], rows: [
          ['Teacher sees the child work', 'Yes, if the group is small', 'No', 'Yes, through a shared screen'],
          ['Help when stuck', 'Depends on the ratio', 'Forums or none', 'In the moment, from the teacher'],
          ['Travel', 'Drive and wait', 'None', 'None'],
          ['Placement by level', 'Often by age', 'Self-chosen', 'A placement lesson'],
          ['Year-round rhythm', 'Often seasonal', 'Easy to drift off', 'Weekly, with the same teacher']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'When in person wins', p: 'A great club ten minutes away, with a teacher who knows your child, is hard to beat. If you have one, keep it. Many families add an online class for depth, not instead.' },
          { h3: 'When video works', p: 'Recorded courses suit a self-driven twelve-year-old who reads error messages calmly. Most younger children need someone to ask, and stall without one.' },
          { h3: 'When live online fits', p: 'For busy families across a spread-out city, a live class removes the drive while keeping the teacher. That is the format we teach in, so weigh our view accordingly.' }
        ] },
        { kind: 'p', text: 'Search results for the best kids coding class in San Jose mix all three formats, and no independent ranking covers them fairly. A useful test for any option is a trial: watch one class from the doorway and count how often your child is helped to think rather than told what to type.' }
      ]
    },
    {
      id: 'libraries', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How far is each San Jose library from a park? A nearest-neighbor project',
      intro: 'The City of San Jose publishes its libraries and its parks as open map data. Students find, for each of the 25 libraries, the closest open neighborhood park, using nothing but latitude, longitude and a loop.',
      body: [
        { kind: 'table', caption: 'Straight-line distance from San Jose libraries to the nearest open neighborhood park (our calculation from City of San Jose Open Data, downloaded 18 October 2026)', head: ['Result', 'Our number'], rows: [
          ['Libraries in the Library dataset', '25, all listed as open'],
          ['Open neighborhood parks used', '211'],
          ['Median distance to the nearest one', '0.27 miles'],
          ['Libraries within half a mile of one', '23 of 25'],
          ['Closest pair', 'Rose Garden Library, 0.02 miles'],
          ['Farthest library from its nearest park', 'Bascom Library, 0.64 miles']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Find a center', p: 'Libraries and parks arrive as outlines, not points. Students average each outline&rsquo;s corner coordinates to get an approximate center, then check a few on a map to see that the method behaves.' },
          { h3: 'Measure the curve', p: 'Degrees of longitude shrink away from the equator, so subtracting coordinates is not enough. The haversine formula, with the Earth&rsquo;s radius as 3,958.8 miles, gives distance across the curved surface.' },
          { h3: 'Search every pair', p: 'For each library, a loop measures all 211 parks and keeps the smallest. That is 25 times 211, or 5,275 distances, which Python finishes before a child can blink.' }
        ] },
        { kind: 'p', text: 'Some pairs read like a riddle with an easy answer. Alviso Library sits 0.06 miles from Alviso Park, Calabazas Library 0.10 miles from Calabazas Park, and Hillview Library 0.35 miles from Hillview Park. Children enjoy predicting the match from the names, then discovering that the nearest park is not always the one with the matching name.' },
        { kind: 'p', text: 'The bigger lesson is about filters. The park file has 611 records, and only 526 are currently open; others are closed, planned as future parks or under construction. It also covers land beyond the city, from Santa Clara County to parts of San Mateo County, and includes school grounds and trails. Before measuring anything, a student must decide which records count as a park a family could walk to, and write that rule down.' },
        { kind: 'callout', h3: 'About these distances', p: 'All distances here are ours: straight lines between approximate centers, not walking routes, from one download on 18 October 2026. The City publishes the library data weekly on Mondays under a Creative Commons Attribution licence, so this project credits City of San Jose Open Data and expects later numbers to shift.' }
      ]
    },
    {
      id: 'california', tint: 'tint', eyebrow: 'California context',
      h2: 'What California data says, and what it does not',
      intro: 'One published number, honestly scoped.',
      body: [
        { kind: 'p', text: 'Code.org (2025). 2025 State of AI + CS Education puts its most recent California figure at a little under six in ten high schools offering computer science, based on course catalogs and teacher surveys. That number tells a San Jose parent nothing about elementary school, where most of our younger students are, and the sheet dates it inconsistently, so we give no year. The state education department&rsquo;s site did not let us read it directly on 18 October 2026, so state rules are not quoted here; see the <a class="cg-inline-link" href="/coding-classes-in-california">California page</a> for those.' }
      ]
    },
    {
      id: 'hours', tint: '', eyebrow: 'Timing',
      h2: 'Pacific Time lessons that work around school',
      intro: 'Teachers teach from India, and every San Jose class time is quoted in Pacific Time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Pick what suits you', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Next morning in India', p: 'A late afternoon class in San Jose is the next morning in India: twelve and a half hours later in summer, thirteen and a half after the clocks go back.' },
          { h3: 'Change days', p: 'California changes its clocks on November 1, 2026 and March 14, 2027. Around both days we resend each family its class time.' }
        ] },
        { kind: 'spec', title: 'Same zone, same name', p: 'San Jose shares the IANA zone America/Los_Angeles with the rest of California. Kids who later code a lesson timer learn to name the zone instead of guessing the offset.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Path through the grades',
    h2: 'From first grade blocks to seventh grade Python',
    intro: 'A rough map. The teacher moves a child up when the projects show it.',
    cols: [
      { band: 'Grades 1 to 2', h3: 'Thinking in steps', p: 'Order, loops and events, with puzzles and stories rather than syntax.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Grades 3 to 4', h3: 'Making games', p: 'Scratch games with scores, levels and sound, tested on a friend.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 5 to 6', h3: 'Scripts and Python', p: 'Luau in Roblox or typed Python, and the first map project.', courses: ['roblox-game-coding-for-kids-lua-course', 'python-ai-kids-masterclass'] },
      { band: 'Grade 7 and up', h3: 'Web and AI literacy', p: 'Websites and an honest understanding of how AI tools work and fail.', courses: ['kids-ai-web-development-course', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Kids in an AI valley',
    h2: 'Should a San Jose child learn to code when AI can?',
    intro: 'Yes, for the same reason children still learn arithmetic in a world of calculators.',
    p1: 'A child who has written the nearest-park loop knows why the farthest library is 0.64 miles away and why that number is a straight line, not a walk. A chatbot asked the same question might give a tidy answer with no way to check it. Understanding comes from building, and young children build best with a teacher beside them.',
    p2: 'For children under thirteen we keep AI tools out of the lesson and teach the logic underneath. AI literacy comes later as a subject: how a model guesses, where it goes wrong, and why its answers need checking.',
    closer: 'Children growing up next to the companies building AI deserve to understand it from the inside, starting with simple code they wrote.',
    blogAnchor: 'why coding is still worth learning'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Willow Glen to Berryessa, no driving',
    intro: 'Class happens at home, between school pickup and dinner.',
    cells: [
      { h3: 'Any neighborhood', p: 'A child in Willow Glen and one in Berryessa can join the same live class, each from a desk at home.' },
      { h3: 'Teacher on the screen', p: 'Each child shares their screen, which lets the teacher spot a stuck block or a typo and ask the child to hunt for it.' },
      { h3: 'Free trial lesson', p: 'A real activity, a chat with the parent, and a recommended level. No card is requested for the trial.' },
      { h3: 'Batches by stage', p: 'Fifteen to twenty children at the same level, from San Jose and other US cities.' },
      { h3: 'Private option', p: 'One teacher and one child, at hours the family chooses, for a faster or gentler pace.' },
      { h3: 'School-year aware', p: 'Lessons are pitched by US grade and paused for the school district&rsquo;s breaks.' }
    ],
    spec: { title: 'No San Jose classroom', p: 'Modern Age Coders has no center in San Jose and claims none. Lessons are live online from India; a child needs a computer, a headset and stable internet.' }
  },

  fees: {
    h2: 'Fees for San Jose families',
    intro: 'Start free, then choose group or private.',
    first: 'One complete trial lesson, free, finishing with a suggested course and time slot.',
    group: 'A month of live lessons in a batch of fifteen to twenty children at one level.',
    private: 'A month of lessons with one teacher working only with your child.',
    closer: 'San Jose families are billed in US dollars, at the rate every US family pays. Nothing is billed until after the trial lesson and an agreed plan, and the pricing page sets out what happens over holidays.'
  },

  reviewsH2: 'Parents and students reviewing us on Google',

  book: {
    h2: 'Book a free trial for a San Jose child',
    intro: 'Share your child&rsquo;s grade and what they like. Younger children begin by dragging blocks to move a character; older ones might start measuring library distances.',
    success: 'Thank you. We will get in touch shortly to arrange a free trial for your child in San Jose.'
  },

  faq: {
    h2: 'San Jose parents ask',
    intro: 'Answers to the questions San Jose families send most often.',
    items: [
      { q: 'What age should my child start coding?', a: 'Around six for block coding with a live teacher. Children usually move to typed Python between ten and twelve.' },
      { q: 'Is the class in person anywhere in San Jose?', a: 'No. Lessons are live online, so there is nothing to drive to and no class to miss because of traffic.' },
      { q: 'When are lessons scheduled?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are given in Pacific Time.' },
      { q: 'Which format suits a young child best?', a: 'Most children under eleven do better with a live teacher than with recorded videos, because they need help at the moment they get stuck.' },
      { q: 'What is the library and park project?', a: 'Students use City of San Jose open data to find the nearest open neighborhood park to each of the 25 libraries, using centers, the haversine formula and a loop.' },
      { q: 'Can my child learn Roblox coding?', a: 'Yes. Our Roblox course teaches Luau scripting in Roblox Studio to children who already play and want to build their own games.' },
      { q: 'How big is each group?', a: 'Groups run with fifteen to twenty children who are all at one stage. Private lessons are the alternative.' },
      { q: 'Do young children use AI tools in class?', a: 'No. Under-thirteens learn to build and debug first. AI literacy is taught later as a subject, not used as a shortcut.' },
      { q: 'Does California require coding in elementary school?', a: 'This page does not say, because the California Department of Education site blocked our direct reading on 18 October 2026. For statewide detail, use our California page.' },
      { q: 'Are you connected with the City of San Jose or its libraries?', a: 'No. The library and park files are public, and using them in lessons does not make us part of the City of San Jose, its library system or any school.' }
    ]
  },

  next: {
    eyebrow: 'Further reading',
    h2: 'More for San Jose families',
    html: 'Young game makers can read <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a> or see <a class="cg-inline-link" href="/roblox-coding-classes-for-kids">Roblox coding classes for kids</a>. For California as a whole, start with <a class="cg-inline-link" href="/coding-classes-in-california">coding classes in California</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'San Jose and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-california', label: 'California' },
    { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding for kids' },
    { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' }
  ],

  personalityCss: `
.cg-root.cg-bksj .cg-hero h1 { font-weight: 760; letter-spacing: -0.022em; line-height: 1.06; max-width: 21ch; }
.cg-root.cg-bksj .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding-left: 1rem; padding-right: 1rem; }
.cg-root.cg-bksj .cg-eyebrow { letter-spacing: 0.13em; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; }
.cg-root.cg-bksj .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.014em; }
.cg-root.cg-bksj .cg-table caption { text-align: left; font-weight: 700; font-size: 0.95rem; }
.cg-root.cg-bksj .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bksj .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.9rem); }
.cg-root.cg-bksj .cg-ladder-col { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding-top: 0.7rem; padding-bottom: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'California, 18 October 2026: cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) unreadable, so no state rule is quoted; Code.org (2025): most recent California high school access a little under six in ten (School Course Catalogs and Teacher Surveys), year withheld because the tabs disagree. IANA America/Los_Angeles and the US DST rule.',
    localProject: 'City of San Jose Open Data, Library (25 features, all Open, CC BY, published Mondays weekly) and Park (611 features; Open 526, Closed 36, Future Park 30; NEIG 231; covers San Jose, Santa Clara County and parts of San Mateo County), GeoJSON downloaded 18 October 2026. Our nearest-neighbor calculation from vertex-mean centers with haversine (3,958.8 miles) to 211 open NEIG parks: median 0.27 miles, 23 of 25 within half a mile, closest Rose Garden Library 0.02, farthest Bascom Library 0.64; Alviso 0.06, Calabazas 0.10, Hillview 0.35. Ours. Lesson family: nearest-neighbor search on latitude and longitude.',
    requiredMentions: [
      'each of the 25 libraries',
      '0.27 miles',
      '23 of 25',
      'Bascom Library, 0.64 miles',
      'Rose Garden Library, 0.02 miles',
      'Alviso Library sits 0.06 miles from Alviso Park',
      'all 211 parks',
      'only 526 are currently open',
      '5,275 distances',
      'parts of San Mateo County'
    ],
    sources: [
      { claim: 'City of San Jose Open Data: Library dataset, licence and publishing schedule.', url: 'https://data.sanjoseca.gov/dataset/library' },
      { claim: 'City of San Jose Open Data: Park dataset, coverage, licence and fields.', url: 'https://data.sanjoseca.gov/dataset/park' },
      { claim: 'City of San Jose GIS: Library GeoJSON download used for our distances.', url: 'https://gisdata-csj.opendata.arcgis.com/api/download/v1/items/a38f861803b24d4ba51aa1d11dcbb90a/geojson?layers=337' },
      { claim: 'Code.org (2025), State of AI + CS Education data: California high school access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb: America/Los_Angeles and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'California state CS rules: cde.ca.gov and leginfo.legislature.ca.gov could not be read; not retried, nothing quoted.',
      'Library contact names and emails in the dataset: not printed.',
      'Park names that honor individuals: not printed; only place-named parks appear.',
      'Walking distances: not computed; only straight-line distances between approximate centers, labelled ours.',
      'Any ranking of San Jose coding classes: none verified, none claimed; the format table is our own assessment.',
      'Any affiliation with the City of San Jose, San Jose Public Library or Code.org.'
    ]
  }
};
