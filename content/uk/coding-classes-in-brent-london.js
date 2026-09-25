'use strict';
// Brent (cg- London borough page, UK cluster Phase 5, row 157). Named sources only.
// Spine: a contour is a guess between grid points, and the guess is weakest where the ground is flattest.
// Learners trace 10 m contours with marching squares on OS Terrain 50 (50 m height grid, tiles TQ18 and TQ28,
// release dated 29 May 2026), clip them to the ONS full-resolution boundary of Brent (E09000005, December 2024),
// and compare each traced segment with OS's own Terrain 50 contour lines of the same height, from the same
// release. Our run of 25 September 2026: 17,197 grid cells inside Brent; median distance from our line to the
// OS line 4.6 m at the 80 m level, rising to 11.8 m at 30 m, where the land falls to the River Brent and its
// valley floor; 90th percentile 12.0 m at 80 m against 79.7 m at 30 m; traced length 2.81 km vs 2.74 km at 80 m
// and 21.2 km vs 25.86 km at 30 m. Grid vs the 21 OS spot heights inside Brent (bilinear): mean absolute
// difference 0.87 m, largest 2.56 m. Highest spot height 90 m by Summit Avenue and Buck Lane, Kingsbury; Barn
// Hill 85 m (OS Open Names places Barn Hill 2 m from that spot); Dollis Hill 76 m by Hawarden Hill.
// Lesson family: marching squares / contour extraction and interpolation uncertainty. Screened 25 September
// 2026 (marching squares 0, isoline 0 across content/uk, ie, nl and src/pages; "contour" appears only as a CSS
// texture word). Distinct from Sobel slope/hillshade (St Asaph), line of sight (Durham), flood fill (Hull),
// percolation (Ely), Delaunay/TIN (Carlisle) and Douglas-Peucker (Lichfield).
// OS does not state in the tile metadata whether its grid was made from its contours or the reverse, so the
// page never calls either one the truth: it measures agreement between two OS products and says so.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'BRENT', blurb: 'Barn Hill, six libraries and a project that traces Brent\'s contour lines from a height grid.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-brent-london',
  code: 'brt',
  accent: '#A54F1D',
  accentRationale: 'Brent: a burnt earth orange from the solver (4.56:1 on every paper tint), for a page about hills and heights, clear of the Harrow violet and the London red',
  pageType: 'governorate',
  place: {
    name: 'Brent',
    eyebrow: 'London Borough of Brent',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Brent, London',
  title: 'Coding Classes in Brent, Wembley and Kilburn | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Brent, from Wembley and Kingsbury to Harlesden, Willesden and Kilburn, ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and Python classes for Brent, on a page that traces the borough\'s contour lines from a height grid and checks them against Ordnance Survey.',
  twitterDescription: 'Brent coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Brent Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Brent, taught live in English.'
  },

  h1: 'Coding classes in Brent',
  capsuleQ: 'What are the best coding classes in Brent?',
  capsule: 'Brent is the north-west London borough of Wembley, Kingsbury, Harlesden, Willesden and Kilburn, where the 2021 Census counted 339,816 residents, Brent Council keeps six public libraries open, and Wembley Park is served by both the Jubilee and the Metropolitan line. A class worth your family\'s time here should leave a learner able to test a result instead of trusting it, which is the thread of this page: a program that draws Brent\'s contour lines from a grid of heights, and then measures how far its lines stray from the ones Ordnance Survey publishes. We teach live on video from India, one to one or in groups of five to ten at the same level, for anyone from 6 to 67. You pay nothing for the first lesson; staying on costs USD 100 each month for a group place, or USD 150 each month for teaching on your own.',
  lead: 'A map shows Barn Hill as a set of rings, but nobody walked those rings. Ordnance Survey publishes Brent\'s ground as a grid of heights, one number every 50 metres, and a contour line is what you get when a program guesses where the ground crosses 30 m, 40 m or 80 m between those numbers. We wrote that program, the one called marching squares, traced Brent\'s contours ourselves and laid them over the lines OS draws. On the steep slopes around Kingsbury and Barn Hill our lines sit a few metres from theirs. Down on the low, flat ground near the River Brent they wander by tens of metres, and in places by more than 80. Same method, same data, very different confidence. That difference, and knowing where to expect it, is what this page teaches.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Brent.',

  picks: {
    eyebrow: 'Course picks for Brent',
    h2: 'Four courses for Brent learners',
    intro: 'Picture a Year 2 child in Harlesden who fills notebooks with maze drawings, a Year 8 pupil in Kingsbury who likes maps more than maths homework, a Year 12 student in Willesden choosing a computing project, and a parent in Kilburn who wants a spreadsheet to answer questions without errors. Every one of them starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games on a grid of squares, where a sprite colours in every square above a chosen number: marching squares before it has a name.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'School maths written as Python: coordinates, proportion and the straight-line interpolation that puts a contour between two heights.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Full Python for Key Stages 3 and 4 and beyond, with this page\'s project on real Ordnance Survey data from Brent.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who inherit numbers at work and want to know how much a smooth-looking chart or map can really be trusted.' }
    ]
  },

  sections: [
    {
      id: 'brent', tint: '', eyebrow: 'Brent in figures',
      h2: '339,816 residents, six libraries and 94 listed buildings',
      intro: 'Each figure is taken from the body that publishes it, named in the last column.',
      body: [
        { kind: 'table', caption: 'Brent, figure by figure', head: ['What was counted', 'Count', 'Who publishes it'], rows: [
          ['Usual residents, Census 2021', '339,816', 'Office for National Statistics, table TS001 on Nomis'],
          ['Public libraries', '6', 'Brent Council'],
          ['Entries on the National Heritage List inside the borough boundary', '94: 1 Grade I, 8 Grade II*, 85 Grade II', 'Historic England list data, counted 25 September 2026'],
          ['Lines at Wembley Park station', 'Jubilee and Metropolitan', 'TfL open data, checked 25 September 2026'],
          ['Highest Ordnance Survey spot height in the borough', '90 m, by Summit Avenue in Kingsbury', 'OS Terrain 50, May 2026 release']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A borough of hills and a river', p: 'Brent climbs from about 16 m near Stonebridge to 90 m at the top of Kingsbury, with Barn Hill at 85 m and Dollis Hill at 76 m in between, every figure from Ordnance Survey\'s height data.' },
          { h3: 'A station on the list', p: 'Among the borough\'s eight Grade II* entries on Historic England\'s National Heritage List is Sudbury Town Underground Station, alongside parish churches, a farm outbuilding and a bingo hall.' },
          { h3: 'Counted, not guessed', p: 'The 94 listed entries are the Historic England list points that fall inside the Office for National Statistics boundary of Brent: a count anyone can repeat, and the same point-in-polygon test the project below uses.' }
        ] }
      ]
    },
    {
      id: 'libraries', tint: 'tint', eyebrow: 'Brent\'s libraries',
      h2: 'Six libraries from Wembley Park to Kilburn',
      intro: 'Addresses as Brent Council lists them. A library computer is a fine place to write a first program, and a quiet corner of one works for an online lesson on a noisy evening.',
      body: [
        { kind: 'table', caption: 'Brent Council\'s six libraries', head: ['Library', 'Address'], rows: [
          ['Ealing Road Library', 'Coronet Parade, Ealing Road, Wembley, HA0 4BA'],
          ['Harlesden Library', 'Craven Park Road, Harlesden, NW10 8SE'],
          ['Kilburn Library', '42 Salusbury Road, Kilburn, NW6 6NN'],
          ['Kingsbury Library', 'Kingsbury Road, Kingsbury, NW9 9HE'],
          ['Wembley Library', '32 Engineers Way, Wembley Park, HA9 0FJ'],
          ['The Library at Willesden Green', '95 High Road, Willesden Green, NW10 2SF']
        ] },
        { kind: 'p', text: 'Brent\'s library service also runs the Willesden Gallery, Brent Museum and Brent Archives. For an online lesson a learner needs a laptop or desktop, sound and a reliable connection; for the project on this page, nothing else, because every file it uses is free to download.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Drawing Brent\'s contours, then measuring how wrong they could be',
      intro: 'Learners turn a grid of heights into contour lines with marching squares, then test their lines against the ones Ordnance Survey publishes for the same ground.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. A grid of heights', p: 'OS Terrain 50 gives the height of the ground at the centre of every 50 m square. Two 10 km tiles, TQ18 and TQ28, cover Brent, and 17,197 of their squares fall inside the borough boundary.' },
          { h3: '2. March the squares', p: 'For a level such as 40 m, the program looks at every block of four neighbouring heights. If some are above 40 and some below, the line must cross between them, and straight-line interpolation says where. Sixteen patterns cover every case.' },
          { h3: '3. Check against OS', p: 'Ordnance Survey also publishes its own 10 m contour lines for the same release. For every piece of line we drew, we measured the distance to the nearest OS line at the same height.' }
        ] },
        { kind: 'table', caption: 'Our run, 25 September 2026: our 10 m contours against OS Terrain 50 contours, inside Brent', head: ['Level', 'Our line', 'OS line', 'Typical gap (median)', 'Wide gap (90th percentile)'], rows: [
          ['80 m', '2.81 km', '2.74 km', '4.6 m', '12.0 m'],
          ['70 m', '8.44 km', '8.13 km', '5.8 m', '17.1 m'],
          ['60 m', '23.07 km', '23.09 km', '7.2 m', '27.7 m'],
          ['50 m', '40.16 km', '41.75 km', '9.3 m', '38.6 m'],
          ['40 m', '45.09 km', '50.58 km', '11.0 m', '49.8 m'],
          ['30 m', '21.2 km', '25.86 km', '11.8 m', '79.7 m']
        ] },
        { kind: 'p', text: 'Read the table from the top. On the hills, where height changes quickly from one square to the next, our lines and OS\'s agree to within a few metres. Lower down the gaps grow, and at 30 m a tenth of our line lies nearly 80 m from theirs. Most of the stretches that stray furthest lie within a kilometre of the River Brent, where the land is almost flat: when four neighbouring heights are all close to 30 m, a difference of a few centimetres in one of them can swing the crossing point from one side of a 50 m square to the other. The grid itself is sound; checked against the 21 OS spot heights inside Brent, it is out by 0.87 m on average and 2.56 m at worst.' },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'Ask an assistant for contour lines from a height grid and you will get a working marching squares function, or a single call to a plotting library, in seconds. Both will draw smooth, confident rings. Neither will tell you that the ring at 30 m across the flat ground near the River Brent could honestly sit 80 m to one side. A learner who has measured the gap for their own borough knows to ask how steep the ground is before trusting a line, and that question applies to every smooth curve a computer draws between measured points.' }
      ]
    },
    {
      id: 'heights', tint: 'tint', eyebrow: 'Spot heights',
      h2: 'The highest points in Brent, named from Ordnance Survey data',
      intro: 'Spot heights are the individual heights OS prints on the map. The name beside each is the nearest feature in OS Open Names.',
      body: [
        { kind: 'table', caption: 'Five highest OS spot heights inside Brent, with the grid\'s value at the same point', head: ['Spot height', 'Beside', 'Grid value there'], rows: [
          ['90 m', 'Summit Avenue and Buck Lane, Kingsbury', '89.1 m'],
          ['89 m', 'Sudbury Court Road, Sudbury', '87.1 m'],
          ['85 m', 'Barn Hill', '84.5 m'],
          ['76 m', 'Hawarden Hill and Dollis Hill Lane', '75.8 m'],
          ['69 m', 'Linden Lawns, Wembley', '68.6 m']
        ] },
        { kind: 'p', text: 'The grid reads slightly lower than the spot heights at the very tops, which is what you would expect: a 50 m square averages the ground around a summit, and a summit is its single highest point. Learners find this themselves by comparing the two, a useful early lesson in what a gridded number does and does not mean.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Brent Council, Historic England, Ordnance Survey, Transport for London or the Office for National Statistics, and nothing here suggests one. The library addresses are Brent Council\'s; the contour comparison, the counts and the table of spot heights are our own work with published open data, run on 25 September 2026.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Across the borough',
      h2: 'From Kingsbury\'s heights to the Brent valley, the same lesson',
      intro: 'Brent runs from the high ground of the north to the river flats and on to Kilburn in the south-east. An online class does not care which end you live at.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wembley Park', p: 'TfL\'s open data lists the Jubilee and Metropolitan lines at Wembley Park, a short walk from Wembley Library on Engineers Way.' },
          { h3: 'North and south', p: 'A learner near Kingsbury Library and another near Kilburn Library can share one group, each at home, with no journey across the borough.' },
          { h3: 'Beyond the borough line', p: 'Brent\'s boundary is a line in a file like any other. The same test that counted 94 listed buildings inside it can tell a learner which side of it their own street is on.' }
        ] },
        { kind: 'spec', title: 'Brent and the rest of London', p: 'Brent is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists them all and links each borough as its page goes live, including neighbouring <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From colouring squares to measuring a map\'s uncertainty',
    intro: 'A learner\'s first lesson places them by what they can already do, which can be well ahead of, or behind, their school year.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Squares above and below', p: 'Children colour a grid by a rule and watch shapes appear, the picture version of a contour.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'A number between two numbers', p: 'Python programs that estimate a value part-way between two known ones, and check the estimate against a third.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Algorithms on real maps', p: 'Marching squares, point-in-polygon tests and error measurement on open data, the kind of work that fills a strong GCSE or A level project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'How far to trust a smooth line', p: 'Adults learn to ask where a chart or map is solid and where it is interpolation, before a decision rests on it.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A computer can draw Brent\'s contour lines in a second. Why should a Brent teenager learn how?',
    intro: 'Because the drawing looks equally certain everywhere, and it is not.',
    p1: 'Hand a height grid to a plotting library or an AI assistant and a tidy contour map appears at once, every ring the same crisp line. In our run the ring at 80 m sat within about 5 m of Ordnance Survey\'s, while stretches of the ring at 30 m sat 80 m away, and the picture gave no hint of the difference. Weather maps, flood maps, heat maps of house prices and the curves an AI draws through data all share that habit of looking sure.',
    p2: 'A learner who has written marching squares and measured its error on their own borough knows the two questions to ask of any smooth line: how dense were the measurements, and how quickly was the quantity changing between them? The tool can draw. Knowing which parts of the drawing to believe is the skill.',
    closer: 'So the case for a Brent child learning to code in 2026 is not that computers cannot draw maps without them. It is that someone has to know which of the confident-looking lines are guesses, and say so.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Kingsbury to Kilburn, taught on your screen',
    intro: 'The whole borough is exactly as close to an online lesson as your nearest desk.',
    cells: [
      { h3: 'At home or at the library', p: 'Most learners join from home; on a busy evening a quiet library table with a headset works too.' },
      { h3: 'English school stages', p: 'Key Stage 1 to Key Stage 5, Year 9 options, GCSEs and A levels are used as English schools use them, and all teaching is in English.' },
      { h3: 'A real lesson first', p: 'The free first lesson is proper work with a teacher and ends with a clear recommendation of level and course. No card details are asked for.' },
      { h3: 'Groups by level', p: 'Five to ten learners at the same stage, from Brent and from further away, so a group can meet at a workable hour.' },
      { h3: 'Fitted around term dates', p: 'Most groups meet twice a week, and families agree breaks for half terms, holidays and exam revision with the teacher.' },
      { h3: 'UK times on every booking', p: 'Teachers in India start their evenings while Brent is still at school or work, so the calendar does the converting: whatever the season, the time you book and see is UK time.' }
    ],
    spec: { title: 'Many schools, one well-matched group', p: 'Brent has six libraries and a great many schools, yet a good coding group needs five learners at one level, on one subject, at one hour, which is why ours draw on Brent and far beyond.' }
  },

  fees: {
    h2: 'Fees for Brent families',
    intro: 'One set of fees for the whole borough: the first lesson free, then a monthly fee.',
    first: 'A full working lesson at no cost, ending with a recommended level, course and weekly time.',
    group: 'Around eight live lessons a month in a class of five to ten learners at the same stage.',
    private: 'Around eight live lessons a month with one teacher and your learner alone.',
    closer: 'Whether you are in Wembley or Willesden, you are billed in US dollars, as every family outside India is, and the site shows no pound prices. Nothing is payable until the free lesson is over and a course and regular slot are agreed; our pricing page covers pausing, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'What six families wrote on Google, unedited',

  book: {
    h2: 'Tell us about your learner',
    intro: 'Age or school year, and what they enjoy, is all we need. Their first task might be a Scratch grid game, a first Python program, or the Brent contour project on this page.',
    success: 'Thank you. Your Brent class request has reached our team.'
  },

  faq: {
    h2: 'Brent coding class questions',
    intro: 'About the borough, the contour project and how lessons work.',
    items: [
      { q: 'How many people live in Brent?', a: 'The 2021 Census counted 339,816 usual residents in the London Borough of Brent, according to Office for National Statistics table TS001.' },
      { q: 'What are the libraries in Brent?', a: 'Brent Council lists six: Ealing Road Library, Harlesden Library, Kilburn Library, Kingsbury Library, Wembley Library on Engineers Way, and The Library at Willesden Green.' },
      { q: 'What is the highest point in Brent?', a: 'The highest Ordnance Survey spot height inside the borough is 90 m, beside Summit Avenue and Buck Lane in Kingsbury. Barn Hill has a spot height of 85 m and Dollis Hill one of 76 m.' },
      { q: 'What is the contour project?', a: 'Learners draw Brent\'s 10 m contour lines from OS Terrain 50 heights using marching squares, then measure the gap to Ordnance Survey\'s own contours. In our run the typical gap was 4.6 m at 80 m but 11.8 m at 30 m, where the ground is flattest.' },
      { q: 'What is marching squares?', a: 'An algorithm that draws a contour through a grid of values. It looks at every block of four neighbouring points, works out whether the chosen level passes between them, and places the line by straight-line interpolation. Sixteen patterns of above and below cover every case.' },
      { q: 'What time are lessons for Brent learners?', a: 'That depends on which groups at the learner\'s level have space, and it is settled after the free lesson. The clocks in India run 4.5 hours ahead of British Summer Time and 5.5 hours ahead of Greenwich Mean Time, so our confirmations always quote UK time.' },
      { q: 'Can my child take a lesson from a Brent library?', a: 'Yes, where the library\'s computers and connection allow, with a headset. Most learners join from home, which is usually quieter.' },
      { q: 'Do you have a centre in Brent?', a: 'No. We have no Brent centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Brent cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched by level, pace and aims rather than by age or neighbourhood. If no group at the right level meets at a workable time, one-to-one lessons are the alternative.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Beyond Brent: other boroughs and other nations',
    html: 'Harrow sits just north-west, and the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> gathers all 32 boroughs plus the City, adding a link as each borough page is published. Families interested in machine learning can read about <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI classes across London</a>, while England, Scotland, Wales and Northern Ireland each get their own school stages on our <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Brent and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-harrow-london', label: 'Harrow' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-brt .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-brt .cg-hero h1 { font-weight: 800; letter-spacing: -0.02em; line-height: 1.04; }
.cg-root.cg-brt .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-brt .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-brt .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-brt .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.6rem); }
.cg-root.cg-brt .cg-table caption { font-weight: 700; letter-spacing: 0.01em; }
.cg-root.cg-brt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-brt .cg-table th { border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-brt .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-brt .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Brent. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000005): 339,816 usual residents (335,806 in households, 4,010 in communal establishments). Brent Council, Libraries page, "Find a library in Brent": Ealing Road Library, Coronet Parade, Ealing Rd, Wembley HA0 4BA; Harlesden Library, Craven Park Road, Harlesden NW10 8SE; Kilburn Library, 42 Salusbury Road, Kilburn NW6 6NN; Kingsbury Library, Kingsbury Road, Kingsbury NW9 9HE; Wembley Library, 32 Engineers Way, Wembley Park, Wembley HA9 0FJ; The Library at Willesden Green, 95 High Road, Willesden Green NW10 2SF; the page also names The Willesden Gallery, Brent Museum and Brent Archives. Historic England NHLE ArcGIS FeatureServer (National_Heritage_List_for_England_NHLE_v02_VIEW, layer 0 Listed Building points), queried 25 September 2026, points inside the ONS LAD December 2024 BFC boundary of Brent: 94 (Grade I 1, II* 8, II 85); II* entries include 1294594 SUDBURY TOWN UNDERGROUND STATION, 1078889 Mecca Bingo, 1078876 HUNDRED ELMS FARM OUTBUILDING. TfL Unified API StopPoint 940GZZLUWYP (Wembley Park Underground Station), 25 September 2026: lines Jubilee, Metropolitan.',
    localProject: 'Contours are guesses between grid points. OS Terrain 50 ASCII grids TQ18 and TQ28 (50 m, release 2026-05-29) mosaicked; cell centres tested against the ONS LAD Dec 2024 BFC polygon of Brent (E09000005): 17,197 cells. Marching squares at 10 m levels with linear edge interpolation and a centre-average saddle rule; segments kept when their midpoint is inside Brent. Compared with OS Terrain 50 GML contours (OST50CONT, same release) clipped the same way: for each of our segments, distance from its midpoint to the nearest OS segment of equal height. Results: 80 m 2.81 km vs 2.74 km, median 4.6 m, p90 12.0 m; 70 m 8.44 vs 8.13, 5.8 / 17.1; 60 m 23.07 vs 23.09, 7.2 / 27.7; 50 m 40.16 vs 41.75, 9.3 / 38.6; 40 m 45.09 vs 50.58, 11.0 / 49.8; 30 m 21.2 vs 25.86, 11.8 / 79.7; 20 m 1.23 vs 2.9 (short, not tabled). At 30 m, 99 of 560 segments lie more than 50 m from the OS line; 77% of those are within 1 km of the River Brent (OS Open Rivers WatercourseLink name1 River Brent), median 678 m. No segment was more than 300 m from an OS line. 21 OS spot heights inside Brent vs bilinear grid: median difference -0.81 m, mean absolute 0.87 m, max absolute 2.56 m. Highest grid cell 89.3 m at 520725,188875; lowest 15.8 m at 519525,183725 (OS Open Names nearest suburban area Stonebridge, 410 m). Spot heights named from OS Open Names (tiles TQ08, TQ28): 90 m 520760,188890 (Mount View Road 56 m, Summit Avenue 96 m, Buck Lane 131 m; Kingsbury Library is on Kingsbury Road); 89 m 516240,186150 (Sudbury Court Road 108 m); 85 m 519310,187360 (Barn Hill, Hill Or Mountain, 2 m); 76 m 522320,186180 (Hawarden Hill 36 m, Dollis Hill Lane 91 m); 69 m 518660,185520 (Linden Lawns 36 m). Contour tiles and Open Names tiles read from the OS Downloads API zips by HTTP range requests. Lesson family: marching squares / contour interpolation uncertainty, screened free on 25 September 2026.',
    requiredMentions: [
      '339,816',
      'Coronet Parade',
      'Craven Park Road',
      'Salusbury Road',
      'Engineers Way',
      'Summit Avenue',
      'Barn Hill',
      'Sudbury Town',
      'marching squares',
      '17,197'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Brent E09000005: 339,816 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000005&measures=20100' },
      { claim: 'Brent Council: six libraries with addresses; Willesden Gallery, Brent Museum and Brent Archives.', url: 'https://www.brent.gov.uk/libraries-arts-and-heritage/libraries' },
      { claim: 'Historic England NHLE listed building points (open data), counted inside the ONS boundary of Brent on 25 September 2026: 94, of which 1 Grade I, 8 Grade II*, 85 Grade II, including Sudbury Town Underground Station (1294594).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Brent E09000005.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'OS Terrain 50 grid and contours (GML), release dated 29 May 2026, tiles TQ18 and TQ28; OS Open Names tiles TQ08 and TQ28. OS OpenData, Open Government Licence.', url: 'https://api.os.uk/downloads/v1/products/Terrain50/downloads' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUWYP (Wembley Park), 25 September 2026: Jubilee and Metropolitan lines.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUWYP' }
    ],
    rejectedClaims: [
      'Whether OS derives its Terrain 50 grid from its contours or the reverse: not stated in the tile metadata we read, so the page measures agreement between the two products and calls neither the truth.',
      'Wembley Stadium facts (capacity, arch height): not read at a primary source for this build and not needed.',
      'Neighbouring boroughs by shared boundary beyond Harrow (linked as a live page): not asserted.',
      'Individual Brent state schools: not read at their own sites for this build, so none is named.',
      'Census ethnicity, religion or country of birth for Brent: never a standout; used only to order the build.'
    ]
  }
};
