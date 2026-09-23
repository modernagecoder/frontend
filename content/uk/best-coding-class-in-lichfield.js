'use strict';
// Lichfield (cg- city page, UK cluster Phase 4). Spine: how straight are the roads that keep Roman names? Douglas-Peucker
// line simplification and sinuosity on OS Open Roads (SK tile, box 400000-424000 E, 298000-320000 N; read 23 September
// 2026; scratchpad lic/dp.py, win.py, named.py, boley.py). Road links chained through start and end nodes, slip roads
// left out, roundabouts kept. Full chains: A38 Barton-under-Needwood to Boley Park 15.65 km along, 15.53 km straight,
// sinuosity 1.008, 186 points, Douglas-Peucker at 10 m keeps 20; A5 Great Wyrley to Drayton Bassett 26.38 km, 25.18 km,
// 1.048, 435 points, keeps 68; A51 Sandfields to Bonehill 10.65 km, 9.51 km, 1.120, 292 points, keeps 39; A5127 5.90,
// 5.80, 1.016, 154, keeps 22. Overlapping 2 km windows every 250 m: A38 55 windows, median 1.0009, range 1.0000 to
// 1.0142, 65 percent under 1.005; A5 98, 1.0164, 1.0001 to 1.0588, 12 percent; A51 35, 1.0588, 1.0058 to 1.1306, 0;
// A5127 16, 1.0160, 1.0114 to 1.0231, 0. OS-named pieces of 0.8 km or more (junction to junction): A5 Watling Street
// 2.23 km 1.0001 (2 of 26 points at 10 m), 2.64 km 1.0006 (4 of 56), 1.56 km 1.0080 (5 of 30), all between Great
// Wyrley and Brownhills West; A38 Rykneld Street 2.41 km 1.0002 (3 of 34), Fradley South to Alrewas; B5404 Watling
// Street 0.92 km 1.0000 and 1.24 km 1.0031; unnumbered Watling Street at Hints 1.09 km 1.0083 (5 of 18); unnumbered
// Ryknild Street at Boley Park 1.078 km along, 0.917 km straight, 1.175, a single chain of 10 links with no branches.
// OS Open Rivers (drawn with fewer points, so only sinuosity compared): Curborough Brook 5.50 km, 4.85 km, 1.134; River
// Tame in the box 24.04 km, 16.69 km, 1.440.
// Lesson family: Douglas-Peucker (Ramer-Douglas-Peucker) line simplification, sinuosity, fair comparison by equal
// windows. Screened 23 September 2026: Douglas-Peucker, Ramer and sinuosity 0 hits in src/pages and content/uk.
// Heritage read raw 23 September 2026: Victoria County History, Staffordshire vol. 14 (british-history.ac.uk): Ryknild
// Street ran through the south-east part of the present city, its line preserved by modern roads; probably influenced
// the choice of Lichfield for an episcopal seat in the later 7th century; it crossed Watling Street near Wall. Wall: a
// fort in the 50s or 60s, Watling Street constructed to the south in the 70s; Letocetum from a Celtic name meaning 'grey
// wood'; bypass to the south completed in 1965. Minster Pool and the larger Stowe Pool south and east of the cathedral;
// Defoe (quoted by VCH): Minster Pool 'parts Lichfield, as it were, into two cities, one is called the Town, and the
// other the Close'; the stream out of Stowe Pool flows north as Curborough brook. Chad bishop 669 to 672; two west spires
// and the central spire finished probably by 1323; 1646 siege brought down the central spire; complete by April 1666;
// rededicated Christmas Eve 1669; Johnson's 'native Lichfield'. Lichfield Cathedral history page: the only English
// medieval cathedral to have three spires, known locally as the Ladies of the Vale; St Chad came in 669. NHLE: Cathedral
// Church of the Blessed Virgin Mary and St Chad 1298431, Johnson Birthplace Museum 1292492, Darwin House 1187355, all
// Grade I listed 5 February 1952; scheduled monument Roman site, Letocetum 1006108, scheduled 21 May 1953.
// Census 2021 via Nomis: Lichfield district E07000194 106,436 usual residents, 105,042 in households, 1,394 communal;
// 16,756 students of 101,207 aged 5 and over (16.6 percent); 321.3 per square km. MSOAs (House of Commons Library names):
// Lichfield Central E02006149 10,724, 18.3 percent students (1,866 of 10,179), 3,097.1 per square km, 657 aged 10 to 14
// of 10,727 (6.1 percent); Lichfield East E02006150 11,451, 14.8 percent (1,627 of 10,994), 2,765.7, 814 aged 65 to 69
// of 11,454 (7.1 percent); Lichfield West and South E02006152 10,403, 18.2 percent (1,794 of 9,871), 1,621.1. England
// 20.4 percent students, 433.5 per square km.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'LICHFIELD', blurb: 'The city of three spires beside two pools, with a project that measures how straight the roads carrying Roman names still run.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-lichfield',
  code: 'lic',
  accent: '#93361A',
  accentRationale: 'Lichfield: a red sandstone brick, after the dark red sandstone of the cathedral, from the solver (6.12:1 on every paper tint, dE 6.9 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Lichfield',
    eyebrow: 'Lichfield, Staffordshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Staffordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lichfield',
  title: 'Best Coding Classes in Lichfield | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Lichfield learners aged 6 to 67, from Boley Park and Leomansley to Streethay. Your first lesson with us is free.',
  ogDescription: 'Coding and AI lessons for Lichfield, on a page that uses Douglas-Peucker simplification to test how straight the roads named Watling Street and Rykneld Street still are.',
  twitterDescription: 'Lichfield learners aged six to sixty-seven can learn coding, Python, maths and AI with us in live online lessons, starting with a free one.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Lichfield Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, geometry and mapping, mathematics and AI taught live online in English to Lichfield children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Lichfield',
  capsuleQ: 'What are the best coding classes in Lichfield?',
  capsule: 'Lichfield district counted 106,436 usual residents at the 2021 census, and Lichfield Central, one of three middle-layer areas named after the city, held 3,097.1 people per square kilometre. The cathedral describes itself as the only English medieval cathedral with three spires. From Lichfield, learners aged six to sixty-seven join our teachers in India on live video, one to one or in a class of five to ten at the same level, at times fitted around the English school and working week. The first lesson is free, and after it a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Two Roman roads met near Lichfield. The Victoria County History records that Ryknild Street ran through what is now the south-east of the city and crossed Watling Street near Wall, where the road was built in the 70s. Ordnance Survey still names stretches of the A38 Rykneld Street and of the A5 Watling Street. Our Lichfield project asks how straight those roads really are, using the Douglas-Peucker algorithm, which throws away every point of a line that it can drop without moving the shape more than a set distance. At 10 metres, it keeps 20 of the 186 points Ordnance Survey uses to draw the A38 here, and 39 of the 292 on the winding A51.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Lichfield.',

  picks: {
    eyebrow: 'Course picks for Lichfield',
    h2: 'Four courses for the city of three spires',
    intro: 'Pick the course closest to what the learner enjoys already. Each one starts with a free live lesson, and you can book it without any card details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, with sprites that walk a route and a count of how many turns it takes.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Coordinates, distance and angles worked out in short programs, the geometry that sits under every digital map.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to read Ordnance Survey road data and simplify a line with recursion.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Algorithms for adults who work with maps, routes or sensor traces and need to shrink large data without losing its shape.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Lichfield today',
      h2: 'Three city areas within a wider district',
      intro: 'Census 2021 figures from the Office for National Statistics on Nomis, for the three middle-layer areas the House of Commons Library names Lichfield Central, Lichfield East and Lichfield West and South, with the district and England alongside.',
      body: [
        { kind: 'table', caption: 'Lichfield, Census 2021', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['Lichfield Central', '10,724', '18.3%', '3,097.1'],
          ['Lichfield East', '11,451', '14.8%', '2,765.7'],
          ['Lichfield West and South', '10,403', '18.2%', '1,621.1'],
          ['Lichfield district', '106,436', '16.6%', '321.3'],
          ['England', '56,490,048', '20.4%', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The centre', p: 'Lichfield Central had 1,866 students among its 10,179 residents aged five and over, and 657 children aged 10 to 14, 6.1% of the area\'s age table.' },
          { h3: 'The east side', p: 'In Lichfield East, 814 residents were aged 65 to 69, 7.1% of its age table, and 1,627 of the 10,994 aged five and over were students.' },
          { h3: 'The district', p: 'Across the district, 105,042 people lived in households and 1,394 in communal establishments, at 321.3 residents per square kilometre.' }
        ] },
        { kind: 'p', text: 'Each share above is worked from its own table\'s total, since census tables are adjusted separately to protect privacy and do not always agree to the last person. Our Lichfield groups draw on the city and the villages around it. A Leomansley eight-year-old making a first maze game, a Year 11 student from Boley Park revising for GCSE Computer Science and a Streethay adult learning Python for a new job might each sit in a different class, grouped by level rather than by age.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Roads, pools and spires',
      h2: 'A Roman crossing, a bishop\'s seat and a city split by water',
      intro: 'From the Victoria County History of Staffordshire, volume 14, which covers Lichfield, and from Lichfield Cathedral\'s own history page.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The 70s', p: 'At Wall, just south-west of Lichfield, the county history records a fort built in the 50s or 60s and Watling Street built to its south in the 70s. The settlement there was Letocetum, from a Celtic name meaning grey wood.' },
          { h3: '669', p: 'The cathedral says St Chad came in 669 to be the first bishop in Lichfield. The county history thinks it probable that Ryknild Street influenced the choice of Lichfield for a bishop\'s seat.' },
          { h3: 'By 1323', p: 'The two west spires and the central spire were probably finished by 1323. The siege of 1646 brought down the central spire; it was complete again by April 1666.' }
        ] },
        { kind: 'p', text: 'Lichfield Cathedral calls itself the only English medieval cathedral to have three spires, known locally as the Ladies of the Vale, and the county history records that it was rededicated on Christmas Eve 1669 after the Civil War damage. Two pools lie beside it, Minster Pool to the south and the larger Stowe Pool to the east. The county history quotes Daniel Defoe in the 1720s saying that Minster Pool \'parts Lichfield, as it were, into two cities, one is called the Town, and the other the Close\', and notes that the stream running out of Stowe Pool flows north as Curborough brook. It also calls Lichfield Samuel Johnson\'s native city. We have no connection with Lichfield Cathedral or the Victoria County History, and their words are quoted as theirs.' },
        { kind: 'spec', title: 'On the National Heritage List', p: 'Historic England lists the Cathedral Church of the Blessed Virgin Mary and St Chad (list entry 1298431), the Johnson Birthplace Museum (1292492) and Darwin House (1187355) at Grade I, all listed on 5 February 1952. The Roman site at Letocetum is a scheduled monument (1006108), scheduled on 21 May 1953.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How straight are the roads with Roman names?',
      intro: 'Ordnance Survey draws a road as a chain of points. Douglas-Peucker asks how many of those points are really needed: keep the two ends, find the point furthest from the straight line between them, keep it only if it lies more than a chosen distance away, then repeat on each half.',
      body: [
        { kind: 'table', caption: 'Roads through a 24 by 22 kilometre box around Lichfield, OS Open Roads, slip roads left out', head: ['Road', 'Between', 'Length along the road', 'Straight line', 'Sinuosity', 'Points kept at 10 metres'], rows: [
          ['A38, parts named Rykneld Street', 'Barton-under-Needwood and Boley Park', '15.65 km', '15.53 km', '1.008', '20 of 186'],
          ['A5, parts named Watling Street', 'Great Wyrley and Drayton Bassett', '26.38 km', '25.18 km', '1.048', '68 of 435'],
          ['A51', 'Sandfields and Bonehill', '10.65 km', '9.51 km', '1.120', '39 of 292']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Join the pieces', p: 'Open Roads splits every road at each junction. Chaining the pieces through their shared end points rebuilds one continuous line for each road.' },
          { h3: '2. Measure the wander', p: 'Sinuosity is the length along the road divided by the straight-line distance between its ends. A ruler-straight road scores exactly 1.' },
          { h3: '3. Simplify', p: 'Run Douglas-Peucker at 1, 5, 10, 25, 50 and 100 metres and count what survives. A straight road collapses to a handful of points; a winding one fights back.' }
        ] },
        { kind: 'callout', h3: 'Making the comparison fair', p: 'Longer lines wander more, so comparing a 26 km road with a 10 km one is unfair. We slid a 2 km window along each road, starting every 250 metres, and measured each window. The A38 had a median sinuosity of 1.0009 across 55 windows, and 65% of them were under 1.005. The A5 had a median of 1.0164 across 98 windows, only 12% under 1.005, because its line includes modern roundabouts and bypasses; the county history records that the bypass taking traffic away from Wall was completed in 1965. The A51\'s median was 1.0588, and none of its 35 windows came under 1.005.' },
        { kind: 'p', text: 'The stretches that actually carry the Roman names, junction to junction, are straighter still. On the A38, the 2.41 km of Rykneld Street between Fradley South and Alrewas scores 1.0002, and at 10 metres Douglas-Peucker keeps just 3 of its 34 points. Three A5 stretches named Watling Street between Great Wyrley and Brownhills West score 1.0001, 1.0006 and 1.0080, and the unnumbered Watling Street at Hints scores 1.0083. Then comes the twist: the street Ordnance Survey names Ryknild Street in Boley Park runs 1.078 km to cover 0.917 km, a sinuosity of 1.175, the most winding line we measured with a Roman name. A name alone does not tell you where a road runs.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Comparing shapes',
      h2: 'Five checks before comparing two lines',
      intro: 'Learned on Lichfield\'s roads, then used for GPS tracks, coastlines, handwriting strokes, stock charts and any time a long line has to be stored or drawn with fewer points.',
      body: [
        { kind: 'table', caption: 'Decisions behind the road comparison', head: ['Question', 'For the Lichfield roads', 'What goes wrong if you skip it'], rows: [
          ['Were the lines drawn to the same detail?', 'All roads from OS Open Roads; rivers compared only by sinuosity', 'A sparsely drawn river looks as if it cannot be simplified'],
          ['Are the lengths comparable?', '2 km windows every 250 metres', 'Short pieces look straighter than long roads'],
          ['What is inside each line?', 'Roundabouts kept and named; slip roads left out', 'A junction mistaken for a bend in the road'],
          ['Does the name match the route?', 'Boley Park\'s Ryknild Street measured separately', 'A street name taken as proof of a Roman line'],
          ['What tolerance was used?', '10 metres stated, and five others tried', 'A result that only holds at one chosen setting']
        ] },
        { kind: 'p', text: 'The first row is easy to miss. OS Open Rivers draws watercourses with far fewer points than Open Roads draws roads: at a 1 metre tolerance, Douglas-Peucker keeps 189 of the 190 points on the River Tame in our box, because there was little left to remove. So the rivers are compared only by sinuosity: Curborough Brook runs 5.50 km to cover 4.85 km, a sinuosity of 1.134, and the River Tame 24.04 km to cover 16.69 km, 1.440. Every result on this page is also within 10 metres of Ordnance Survey\'s line, which is itself a simplified picture of the real road.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Drawing a route on squared paper, then rubbing out every dot that barely changes its shape and counting how many are left.' },
          { h3: 'Teenagers', p: 'Recursion, chaining and Douglas-Peucker in Python on real Ordnance Survey data, with equal windows for a fair test.' },
          { h3: 'Adults', p: 'Simplifying GPS tracks and sensor traces for storage and display, with a stated tolerance and a check on what was lost.' }
        ] },
        { kind: 'p', text: 'We have no connection with Ordnance Survey, the Victoria County History, Lichfield Cathedral, Historic England or Lichfield District Council. The road and river data and the census tables are published openly; the chaining, windows and simplification on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From dot-to-dot routes to Douglas-Peucker',
    intro: 'The age bands are a guide only; the free lesson shows which step a learner is ready for.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Routes and turns', p: 'Moving a sprite along a route in block code and counting the turns, then finding a shorter set of moves.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Points and distances', p: 'Coordinates and the distance formula in Python, measuring a route along its points and in a straight line.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Recursive simplification', p: 'Douglas-Peucker, sinuosity and sliding windows on Ordnance Survey data, with the comparison kept fair.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Shapes in real data', p: 'Shrinking tracks, outlines and time series for work, with a clear tolerance and a record of what was removed.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can summarise almost anything. Why should a Lichfield teenager learn to simplify a line?',
    intro: 'Because every simplification throws something away, and someone has to decide how much can go before the result misleads.',
    p1: 'Douglas-Peucker is a small, honest example of what AI systems do on a grand scale: keep what matters, drop the rest. Its tolerance is written down, so anyone can see exactly how far the simplified line may stray. A learner who has set that tolerance by hand knows to ask what any summary, human or machine, was allowed to leave out.',
    p2: 'The Boley Park street is the other lesson. A system that trusts labels would file it with the Roman roads because of its name; the measurement says otherwise. Learning to test a label against the data is exactly the habit that keeps people in charge of the tools they use.',
    closer: 'So a Lichfield teenager should keep learning to code in 2026, in a city whose roads still carry names from Roman Britain: AI can shorten the story, but a person has to check the shape is still true.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Boley Park, Leomansley or Whittington, all in one class',
    intro: 'Lichfield\'s learners live around the pools and spires and in the villages beyond the bypasses. Online, the Close and a village at the edge of the district are the same distance from the lesson.',
    cells: [
      { h3: 'Town, Close and villages', p: 'A learner in Sandfields and another in Fradley can join the same class without a drive along the A38.' },
      { h3: 'English school stages', p: 'Our levels follow English school years and key stages, and we use GCSE and A level course names; lessons are always in English.' },
      { h3: 'What the free lesson does', p: 'The first session works through a real task and ends with our view of level, course and a regular weekly time. We never ask for a card.' },
      { h3: 'Classes of one level', p: 'Five to ten learners at the same stage, from Lichfield, the rest of the UK and abroad, which keeps sensible times open for every level.' },
      { h3: 'Two lessons every week', p: 'Two fixed lessons a week, around eight a month, with holidays and exam weeks agreed with the teacher beforehand.' },
      { h3: 'Teachers on India time', p: 'A 5 pm lesson in Lichfield begins at 9.30 pm for our teachers in India during British Summer Time and 10.30 pm in winter, as India keeps one time all year; they build their evenings around it.' }
    ],
    spec: { title: 'Around Staffordshire', p: 'Families in Burntwood, Tamworth, Rugeley or Alrewas join the very same classes, because every lesson is online and classes are arranged by level.' }
  },

  fees: {
    h2: 'Lichfield lesson fees',
    intro: 'One free lesson first, then a single monthly fee.',
    first: 'A full lesson at no charge, closing with our recommendation of level, course and weekly time.',
    group: 'About eight live lessons a month, in a class of five to ten learners at one level.',
    private: 'About eight live lessons a month, with the teacher giving your learner their full attention.',
    closer: 'Families in Shenstone or Hammerwich pay in US dollars, like every family outside India, and our site never shows pound prices. Nothing is billed until the free lesson has finished and you have settled on a course and weekly time with us; pausing, missed lessons and switching between a class and one-to-one teaching are all explained on the pricing page.'
  },

  reviewsH2: 'Six families\' Google reviews, exactly as written',

  book: {
    h2: 'Book a free lesson for a Lichfield learner',
    intro: 'The first lesson depends on the learner: a route-drawing puzzle for a young child, a short Python program that measures the distance between two points for a beginner, or real Ordnance Survey road data and Douglas-Peucker for a teenager ready for recursion.',
    success: 'Thank you. We will be in touch shortly to book the lesson for your Lichfield learner.'
  },

  faq: {
    h2: 'Lichfield coding class questions',
    intro: 'What families across Lichfield ask us most.',
    items: [
      { q: 'How many people live in Lichfield?', a: 'Census 2021 counted 106,436 usual residents in Lichfield district. The three middle-layer areas the House of Commons Library names Lichfield Central, Lichfield East and Lichfield West and South had 10,724, 11,451 and 10,403.' },
      { q: 'How does Lichfield compare with England?', a: 'The district is less densely settled, at 321.3 residents per square kilometre against 433.5 for England, and 16.6% of its residents aged five and over were students, against 20.4% nationally.' },
      { q: 'What is the Douglas-Peucker algorithm?', a: 'A way to draw a line with fewer points. It keeps the two ends, finds the point furthest from the straight line joining them and keeps that point only if it is further away than a chosen tolerance, then repeats on each half.' },
      { q: 'Are the Roman roads near Lichfield still straight?', a: 'The roads Ordnance Survey still names after them are very straight: the Rykneld Street stretch of the A38 between Fradley South and Alrewas has a sinuosity of 1.0002. But a street named Ryknild Street in Boley Park winds, at 1.175, so a name alone proves nothing.' },
      { q: 'Where does the road data come from?', a: 'From OS Open Roads, Ordnance Survey\'s free map of Great Britain\'s road network, with rivers from OS Open Rivers. We are not connected with Ordnance Survey.' },
      { q: 'Why does Lichfield Cathedral have three spires?', a: 'The Victoria County History records that the two west spires and the central spire were probably finished by 1323, and that the central spire fell in the siege of 1646 and was rebuilt by April 1666. The cathedral calls itself the only English medieval cathedral with three spires.' },
      { q: 'When do Lichfield lessons run?', a: 'Lichfield families tend to choose an after-school slot, a weekday evening or a weekend morning, and we fix it during the free lesson. India is four and a half hours ahead of Staffordshire in British Summer Time and five and a half hours ahead in winter, and our teachers plan around it.' },
      { q: 'Is there a centre in Lichfield?', a: 'No. We have no centre in Lichfield or anywhere else in the UK, because all our lessons are live online. Learners need a computer with sound and a dependable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Lichfield lessons cost?', a: 'The first lesson is free. Then a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same schedule costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners placed in classes?', a: 'By level, pace and goals rather than age or address, with five to ten learners at the same stage. If no class fits the learner\'s week, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The Midlands and beyond',
    html: 'Across the county, the <a class="cg-inline-link" href="/best-coding-class-in-stoke-on-trent">Stoke-on-Trent page</a> cleans spikes out of air-quality readings with a median filter, and <a class="cg-inline-link" href="/best-coding-class-in-worcester">Worcester</a> races A* search against Dijkstra on the same Ordnance Survey roads. Birmingham has <a class="cg-inline-link" href="/coding-classes-in-birmingham">its own page</a> as well. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> shows how our levels match English schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lichfield and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-stoke-on-trent', label: 'Stoke-on-Trent' },
    { href: '/best-coding-class-in-worcester', label: 'Worcester' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-lic .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.35rem); }
.cg-root.cg-lic .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-lic .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-lic .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lic .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.017em; }
.cg-root.cg-lic .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 2rem); }
.cg-root.cg-lic .cg-table th { letter-spacing: 0.022em; }
.cg-root.cg-lic .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lic .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-lic .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Census 2021 via Nomis. Lichfield district E07000194: TS001 106,436 usual residents, 105,042 in households, 1,394 communal; TS068 16,756 students of 101,207 aged 5 and over (16.6 percent); TS006 321.3 per square kilometre. Lichfield Central E02006149 10,724, 1,866 students of 10,179 (18.3 percent), 3,097.1, TS007A 657 aged 10 to 14 of 10,727; Lichfield East E02006150 11,451, 1,627 of 10,994 (14.8 percent), 2,765.7, 814 aged 65 to 69 of 11,454; Lichfield West and South E02006152 10,403, 1,794 of 9,871 (18.2 percent), 1,621.1. England 20.4 percent, 433.5. VCH Staffordshire 14: Ryknild Street, Watling Street at Wall in the 70s, Letocetum, Wall bypass 1965, pools, Defoe quotation, spires by 1323, 1646, April 1666, rededication Christmas Eve 1669. Cathedral: three spires, Ladies of the Vale, St Chad 669. NHLE 1298431, 1292492, 1187355 (Grade I, 5 February 1952); scheduled 1006108 (21 May 1953).',
    localProject: 'How straight are the roads with Roman names? OS Open Roads SK, chained links, slip roads excluded. Full chains: A38 15.65 km along, 15.53 straight, 1.008, 20 of 186 points at 10 m; A5 26.38, 25.18, 1.048, 68 of 435; A51 10.65, 9.51, 1.120, 39 of 292. 2 km windows every 250 m: A38 median 1.0009 (65 percent under 1.005, 55 windows); A5 1.0164 (12 percent, 98); A51 1.0588 (0, 35). Named pieces: A38 Rykneld Street 2.41 km 1.0002 (3 of 34); A5 Watling Street 1.0001, 1.0006, 1.0080; Hints 1.0083; Boley Park Ryknild Street 1.078 along, 0.917 straight, 1.175. Open Rivers: Curborough Brook 1.134; River Tame 1.440; Tame keeps 189 of 190 points at 1 m. Lesson family: Douglas-Peucker line simplification and sinuosity.',
    requiredMentions: [
      '106,436',
      '10,724',
      '3,097.1',
      'Douglas-Peucker',
      'sinuosity',
      'Rykneld',
      'Letocetum',
      'Minster Pool',
      'Boley Park',
      'Leomansley',
      'Streethay',
      'Fradley'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Lichfield district 106,436; Lichfield Central 10,724; Lichfield East 11,451; Lichfield West and South 10,403.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E02006149,E02006150,E02006152,E07000194' },
      { claim: 'Nomis, Census 2021 TS007A: five-year age bands for the three Lichfield areas.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E02006149,E02006150,E02006152,E07000194' },
      { claim: 'Nomis, Census 2021 TS068: students among usual residents aged 5 and over.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E02006149,E02006150,E02006152,E07000194,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E02006149,E02006150,E02006152,E07000194,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: Lichfield Central, Lichfield East, Lichfield West and South.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Ordnance Survey, OS Open Roads and OS Open Rivers: road links with names and numbers; watercourse links.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-roads' },
      { claim: 'Victoria County History, Staffordshire vol. 14, Lichfield: Domestic buildings and communications (Ryknild Street; crossing of Watling Street near Wall).', url: 'https://www.british-history.ac.uk/vch/staffs/vol14/pp43-47' },
      { claim: 'Victoria County History, Staffordshire vol. 14, Wall with Pipehill: fort in the 50s or 60s, Watling Street in the 70s, Letocetum, bypass completed 1965.', url: 'https://www.british-history.ac.uk/vch/staffs/vol14/pp283-294' },
      { claim: 'Victoria County History, Staffordshire vol. 14, Introduction: Minster Pool and Stowe Pool, Defoe quotations, Curborough brook, Johnson\'s native Lichfield.', url: 'https://www.british-history.ac.uk/vch/staffs/vol14/pp1-3' },
      { claim: 'Victoria County History, Staffordshire vol. 14, The cathedral: Chad 669 to 672; spires probably by 1323; 1646 siege; central spire complete by April 1666; rededicated Christmas Eve 1669.', url: 'https://www.british-history.ac.uk/vch/staffs/vol14/pp47-57' },
      { claim: 'Lichfield Cathedral, History: only English medieval cathedral with three spires, Ladies of the Vale; St Chad came in 669.', url: 'https://www.lichfield-cathedral.org/history' },
      { claim: 'Historic England, National Heritage List for England: 1298431, 1292492, 1187355 (Grade I); scheduled monument 1006108.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1298431' }
    ],
    rejectedClaims: [
      'That the A5 or A38 follow the exact Roman alignment: the page says only that Ordnance Survey names stretches after the Roman roads, and cites the county history for Wall\'s 1965 bypass.',
      'That the Boley Park Ryknild Street is or is not on the Roman line: not established from a fetched source; used only to show that a name does not prove a route.',
      'Comparing Douglas-Peucker point counts between roads and rivers: Open Rivers is drawn with far fewer points, so rivers are compared only by sinuosity.',
      'Samuel Johnson\'s birth year and Erasmus Darwin biography: the Johnson Birthplace Museum and Erasmus Darwin House websites returned 403, not circumvented; the page uses only the county history\'s phrase and NHLE entry names.',
      'English Heritage pages for Wall Roman Site (history and visit) returned 403, not circumvented. The Historic England list entry page returned 403; list data came from the NHLE open data service.',
      'Gutendex did not respond; no Gutenberg text was used.',
      'The cathedral\'s claims that it is one of the most elegant in the country and suffered more than any other cathedral: evaluative, not used.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, the Victoria County History, Lichfield Cathedral, Historic England or Lichfield District Council.'
    ]
  }
};
