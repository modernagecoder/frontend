'use strict';
// Glasgow (cg- city page, UK cluster Phase 4). Spine: how long is Glasgow's boundary? It depends on the ruler.
// The coastline paradox measured on the ONS Local Authority Districts December 2023 boundary for Glasgow City
// (S12000049), read 21 September 2026 (scratchpad gla/fractal.py, fractal2.py). Full-resolution extent file (BFE):
// one ring, 4,078 corner points, 108.66 km as drawn, 176.36 km2. Richardson divider walk: 25 m ruler 106.38 km,
// 50 m 104.64, 100 m 101.32, 200 m 96.47, 400 m 88.96, 800 m 83.43, 1,600 m 70.81, 3,200 m 62.49; log-log slope
// -0.109, divider dimension about 1.11 (1.14 using rulers of 100 m and up). Box counting on the densified ring:
// 2,651 boxes at 50 m down to 28 at 3,200 m, dimension about 1.09. Simplified ONS versions: 112 corner points
// 95.67 km, 50 corner points 87.93 km. The full-resolution file clipped to the coastline (BFC) splits the city
// into a northern piece of 111.16 km2 and a southern piece of 63.47 km2 along the river, with 135.60 km of
// outline in total. Lesson family: fractals and the coastline paradox (divider method, box counting, fractal
// dimension, resolution dependence). Screened free site-wide on 21 September 2026 (coastline paradox, fractal
// dimension, box counting, Richardson: 0 hits).
// Place facts read raw on 21 September 2026: National Records of Scotland, Scotland's Census 2022 first results,
// rounded population estimates data (published 14 September 2023; rounded to the nearest hundred): Glasgow City
// 620,700 usual residents (2011: 593,245), 293,800 households (2011: 285,693), 58,400 aged 20 to 24 and 58,900
// aged 25 to 29 (Scotland 337,000 and 338,200), age shares 14.5% aged 0 to 14, 71.5% aged 15 to 64, 14.0% aged 65
// and over (Scotland 15.3%, 64.6%, 20.1%), 3,554.5 residents per square kilometre (Scotland 69.8); Demography and
// migration chart data: 21.3% of households with dependent children. University of Glasgow, history and explore
// pages (established 1451, the fourth oldest university in the UK; Adam Smith entered in 1737 aged 14; in 1881
// William Thomson, later Lord Kelvin, created one of the first houses in the world fully lit by electricity on the
// campus). SPT, Subway page (Inner and Outer Circle; every four minutes at peak; 24 minutes to complete a circuit
// of the fifteen stations).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'GLASGOW', blurb: 'Kelvin\'s city, with a project that measures Glasgow\'s boundary with eight different rulers and gets eight different answers.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-glasgow',
  code: 'gla',
  accent: '#1B4A6A',
  accentRationale: 'Glasgow: a deep Clyde blue from the solver (7.63:1 on every paper tint, dE 6.3 from the nearest used accent), lighter and greener than the Oxford petrol blue and far from the Edinburgh violet',
  pageType: 'city',
  place: {
    name: 'Glasgow',
    eyebrow: 'Glasgow, Scotland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Glasgow City' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Glasgow, Scotland',
  title: 'Best Coding Classes in Glasgow | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Glasgow learners aged 6 to 67, from the West End and Partick to Shawlands and Dennistoun. First lesson free.',
  ogDescription: 'Coding and AI lessons for Glasgow, on a page that measures the city boundary with eight rulers, gets eight answers and explains why that is fractal geometry.',
  twitterDescription: 'Glasgow learners aged six to sixty-seven can learn coding and AI with us live online; the opening lesson is free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Glasgow Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, AI, data and mathematics taught live online in English to Glasgow children, teenagers and adults, in level-based groups or one to one.'
  },

  h1: 'Coding classes in Glasgow',
  capsuleQ: 'What are the best coding classes in Glasgow?',
  capsule: 'About 620,700 people lived in Glasgow City at Scotland\'s 2022 census, up from 593,245 in 2011, with 71.5% aged 15 to 64 compared with 64.6% nationally. The University of Glasgow, established in 1451, is the fourth oldest university in the UK, and in 1881 William Thomson, later Lord Kelvin, lit one of the world\'s first fully electric houses on its campus. Glaswegians from six to sixty-seven learn with Modern Age Coders live online, privately or in small groups of five to ten matched by level, taught by teachers in India on a UK timetable. There is no fee for the first lesson; after it, groups are USD 100 a month and private lessons USD 150 a month.',
  lead: 'How long is Glasgow\'s boundary? It sounds like a question with one answer, but measure the official ONS outline with a 3.2-kilometre ruler, walking it stride by stride, and you get 62.49 kilometres. Shrink the ruler to 400 metres and it grows to 88.96. At 25 metres it reaches 106.38, and it would keep growing with a finer map. Every bend in a burn or a road hides smaller bends, so a shorter ruler always finds more length. This is the coastline paradox, and it is the doorway to fractal geometry: plot length against ruler size on logarithmic scales and the points fall close to a straight line, whose slope gives the boundary a fractal dimension of about 1.1, a little more than a smooth line\'s 1. Measuring it two independent ways, and understanding why the number of kilometres is the wrong question, is the lesson Glasgow\'s map teaches our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free coding lesson for a learner in Glasgow.',

  picks: {
    eyebrow: 'Course picks for Glasgow',
    h2: 'Four courses for Kelvin\'s city',
    intro: 'Choose from what the learner already enjoys. Every course begins with a free live lesson, booked without a card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding towards games and art, where a pattern that repeats inside itself is a favourite early project.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Geometry and turtle graphics in Python, the natural home for drawing a shape that gets more detailed the closer you look.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Secondary years', note: 'Algebra, logarithms and trigonometry, the tools that turn a log-log plot into a fractal dimension.' },
      { course: 'college-mathematics-complete-masterclass', band: 'University and adult', note: 'Calculus, linear algebra and proof for adults, the mathematics under measurement, scale and dimension.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Glasgow today',
      h2: 'Scotland\'s most populous council area, and its densest',
      intro: 'Figures from National Records of Scotland\'s first results for the 2022 census. NRS rounds each count to the nearest hundred; we print them exactly as released and never total them ourselves.',
      body: [
        { kind: 'table', caption: 'Glasgow City council area, Scotland\'s Census 2022', head: ['Measure', 'Glasgow', 'Scotland'], rows: [
          ['Usual residents, rounded', '620,700', '5,436,600'],
          ['Usual residents in 2011', '593,245', 'Not compared'],
          ['Households, rounded', '293,800', 'Not compared'],
          ['Households in 2011', '285,693', 'Not compared'],
          ['Aged 25 to 29, rounded', '58,900', '338,200'],
          ['Share aged 0 to 14', '14.5%', '15.3%'],
          ['Share aged 15 to 64', '71.5%', '64.6%'],
          ['Share aged 65 and over', '14.0%', '20.1%'],
          ['Residents per square kilometre', '3,554.5', '69.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A working-age city', p: 'People aged 15 to 64 made up 71.5% of Glasgow\'s residents in 2022, well above Scotland\'s 64.6%.' },
          { h3: 'Younger than Scotland', p: 'Only 14.0% of Glaswegians were 65 or over, compared with 20.1% across the country, while 14.5% were under 15.' },
          { h3: 'The densest council area', p: 'At 3,554.5 residents per square kilometre, Glasgow is the densest of Scotland\'s 32 council areas, against a national average of 69.8.' }
        ] },
        { kind: 'p', text: 'In 2022, 21.3% of Glasgow households included dependent children, according to NRS. Learners here come at every stage: a P4 pupil in Shawlands with a first animation, an S5 student in Knightswood working towards Higher Computing Science, or someone in their late twenties in Finnieston learning to code for a new career, and each joins five to ten others at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A university and a subway',
      h2: 'Adam Smith, Lord Kelvin and a fifteen-station circle',
      intro: 'From the University of Glasgow and from Strathclyde Partnership for Transport.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1451', p: 'The University of Glasgow says it was established that year, making it the fourth oldest university in the UK. Adam Smith entered it in 1737, at the age of 14.' },
          { h3: '1881', p: 'According to the University, William Thomson, later Lord Kelvin, created one of the first houses in the world to be fully lit by electricity on its campus that year.' },
          { h3: 'Fifteen stations', p: 'Strathclyde Partnership for Transport says the Subway runs an Inner and an Outer Circle, every four minutes at peak, taking 24 minutes to complete a circuit of its fifteen stations.' }
        ] },
        { kind: 'p', text: 'We have no connection with the University of Glasgow or Strathclyde Partnership for Transport. We mention them because Glasgow has a long habit of turning mathematics into machinery, from Kelvin\'s electric house to a railway that runs in a closed loop, and the project on this page takes a very old question about measurement and answers it with code.' },
        { kind: 'spec', title: 'One boundary, several maps', p: 'The Office for National Statistics publishes the same council boundary at several levels of detail. The full-detail outline has 4,078 corner points and measures 108.66 kilometres as drawn; simplified versions with 112 and 50 corner points measure 95.67 and 87.93. The file clipped to the coast leaves out tidal water, splitting Glasgow into a northern and a southern piece along the river.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Eight rulers, eight lengths',
      intro: 'The divider method walks a fixed ruler round a boundary and counts the steps. We walked Glasgow\'s full-detail ONS boundary with rulers from 25 metres to 3.2 kilometres.',
      body: [
        { kind: 'table', caption: 'Glasgow City boundary measured with different ruler lengths, ONS December 2023 full-detail outline', head: ['Ruler length', 'Measured boundary'], rows: [
          ['3,200 m', '62.49 km'],
          ['1,600 m', '70.81 km'],
          ['800 m', '83.43 km'],
          ['400 m', '88.96 km'],
          ['200 m', '96.47 km'],
          ['100 m', '101.32 km'],
          ['50 m', '104.64 km'],
          ['25 m', '106.38 km']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Walk the ruler', p: 'From a starting point, find where a circle of the ruler\'s radius first cuts the boundary, step there, and repeat until you are back where you began.' },
          { h3: '2. Plot on log scales', p: 'Put the logarithm of the length against the logarithm of the ruler. The points lie close to a straight line with a slope of about minus 0.11.' },
          { h3: '3. Read the dimension', p: 'One minus that slope gives a fractal dimension of about 1.11: rougher than a smooth line, which would score exactly 1, but far from filling the plane.' }
        ] },
        { kind: 'callout', h3: 'Two methods, one conclusion', p: 'Box counting is a completely different route: cover the map with a grid of squares and count how many the boundary passes through, then shrink the squares. For Glasgow the count rises from 28 boxes at 3.2 kilometres to 2,651 at 50 metres, giving a dimension of about 1.09. Two independent methods landing close together is the strongest evidence that the number describes the boundary rather than the method.' },
        { kind: 'p', text: 'The figures also expose a trap in the data. Every map has a finest detail, and below it a smaller ruler finds nothing new: the full-detail file stops at 108.66 kilometres, however short the ruler. The simplified ONS versions stop far sooner, at 95.67 and 87.93. So a boundary length quoted without its map and ruler is not really a measurement at all, which is why learners always report both.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Measuring rough shapes',
      h2: 'Five habits for anything that looks different up close',
      intro: 'Learned on a council boundary, used afterwards on coastlines, rivers, cracks in materials, stock charts, clouds and the surfaces in computer graphics.',
      body: [
        { kind: 'table', caption: 'Measuring a rough shape honestly', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Report the ruler', 'Give every length with the ruler or resolution used', 'Lengths that cannot be compared or repeated'],
          ['Name the map', 'Say which version of the boundary file was measured', 'Differences caused by simplification passed off as real'],
          ['Use two methods', 'Estimate the dimension by the divider and by box counting', 'A number that only reflects one algorithm'],
          ['Know the floor', 'Stop shrinking the ruler once the map has no finer detail', 'A fitted slope flattened by the map\'s own limits'],
          ['Choose the right question', 'Ask how rough a boundary is, not only how long', 'Arguing over lengths that depend on the ruler']
        ] },
        { kind: 'p', text: 'The fourth habit changes the answer. Using every ruler from 25 metres gives a dimension of about 1.11; using only rulers of 100 metres and more gives about 1.14, because the smallest rulers are already running into the limit of the map\'s detail. Deciding which range to trust, and saying why, is the judgement this project asks of every learner.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Measuring a wiggly line on paper with a long stick, then a short one, and discovering the second answer is always bigger.' },
          { h3: 'Teenagers', p: 'The ONS boundary downloaded and walked with rulers in Python, a log-log fit made, and box counting written to check it.' },
          { h3: 'Adults', p: 'Scale-dependent measurements at work, from network maps to graphics, reported with their resolution and method.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Office for National Statistics, National Records of Scotland, the University of Glasgow or Strathclyde Partnership for Transport. The boundaries and census figures are published for public use; the measurements and dimensions are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a wiggly line to a fractal dimension',
    intro: 'Treat the ages as a first guess; the free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Long stick, short stick', p: 'Measuring curvy lines with different lengths, noticing the pattern and drawing shapes that repeat inside themselves.', courses: ['kids-coding-blocks-masterclass', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Self-similar drawings', p: 'Turtle graphics that draw a pattern, then a smaller copy on every edge, and a count of how the length grows.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Fractal dimension in Python', p: 'A real boundary walked with many rulers, a log-log fit and box counting, with the limits of the map respected.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Scale and measurement at work', p: 'Measurements that depend on resolution, from geography to graphics, handled and reported with care.', courses: ['college-mathematics-complete-masterclass', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will tell you how long Glasgow\'s boundary is. Why should a Glasgow teenager measure it?',
    intro: 'Because the answer depends on a choice the assistant will not mention.',
    p1: 'Ask an AI tool for the length of Glasgow\'s boundary and it may well give a single confident number. On the official outline, that number could be anything from about 62 kilometres to 106, depending on the ruler, and more on a finer map. A learner who has walked the boundary with eight rulers knows that the honest reply starts with a question: measured at what scale?',
    p2: 'Fractals also run through modern computing. Film and game graphics grow mountains, coastlines and clouds from simple repeated rules, image compression has used self-similarity, and scientists use fractal dimension to describe everything from river networks to the texture of materials. A teenager who has computed one from real data understands a real idea rather than a pretty picture.',
    closer: 'So a Glasgow teenager should still learn to program in 2026, in Kelvin\'s city: tools will hand you any number you ask for, and knowing which numbers only make sense with their scale attached is what makes a programmer\'s answer worth trusting.',
    blogAnchor: 'why learning to code still pays in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The West End, the Southside or the East End, from home',
    intro: 'Glasgow\'s Subway is quick, but a live online lesson needs no journey at all.',
    cells: [
      { h3: 'North or south of the Clyde', p: 'A learner in Maryhill and another in Pollokshields can share one lesson without either crossing the river.' },
      { h3: 'Primary, secondary and national levels', p: 'Primary 1 to 7, the secondary years S1 to S6, then National 5, Higher and Advanced Higher: lessons follow the names Glasgow schools use, taught in English.' },
      { h3: 'A free lesson with a plan', p: 'The first lesson teaches something real and closes with a recommended level, course and regular time. No card is requested.' },
      { h3: 'Placed by level', p: 'Five to ten learners at one stage, from Glasgow, the rest of the UK and abroad, which keeps a sensible slot open for every level.' },
      { h3: 'Two lessons every week', p: 'Two fixed lessons a week, about eight a month, with breaks for holidays and exams arranged with the teacher ahead of time.' },
      { h3: 'Teachers on India time', p: 'India Standard Time stays the same all year. Glasgow is four and a half hours behind it during British Summer Time and five and a half behind in winter, which puts after-school and evening slots comfortably inside the teaching day.' }
    ],
    spec: { title: 'Across the west of Scotland', p: 'Families in Paisley, East Kilbride or Bearsden join exactly the same groups, because every lesson is online and groups are formed by level rather than postcode.' }
  },

  fees: {
    h2: 'Glasgow lesson fees',
    intro: 'A free first lesson, then one of two monthly prices.',
    first: 'A complete lesson with nothing to pay, ending with a level, a suggested course and a weekly slot.',
    group: 'About eight live lessons each month in a group of five to ten learners at one level.',
    private: 'About eight live lessons each month with the teacher focused on one learner.',
    closer: 'Everyone outside India pays one US dollar fee, so Hyndland and Parkhead pay exactly the same, and we list no prices in pounds. We only bill once the free lesson has settled a course and a weekly slot, and our pricing page explains how pausing, missed lessons and a move between group and private teaching work.'
  },

  reviewsH2: 'Google reviews from six families, word for word',

  book: {
    h2: 'Book a free lesson for a Glasgow learner',
    intro: 'We choose the opening task by level: measuring a wiggly line with two sticks for a young child, a turtle program that draws a self-similar pattern, or Glasgow\'s real boundary and a fractal dimension for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a Glasgow lesson.'
  },

  faq: {
    h2: 'Glasgow coding class questions',
    intro: 'What Glasgow families ask us most often.',
    items: [
      { q: 'How many people live in Glasgow?', a: 'Scotland\'s Census 2022 counted about 620,700 usual residents in Glasgow City, rounded to the nearest hundred, compared with 593,245 in 2011, in about 293,800 households.' },
      { q: 'How does Glasgow\'s population compare with Scotland\'s?', a: 'In 2022, 71.5% of Glasgow residents were aged 15 to 64 against 64.6% for Scotland, and 14.0% were 65 or over against 20.1%. Glasgow had 3,554.5 residents per square kilometre.' },
      { q: 'What is the coastline paradox?', a: 'The discovery that a wiggly boundary gets longer the shorter the ruler you measure it with. Glasgow\'s official outline measures 62.49 kilometres with a 3.2-kilometre ruler and 106.38 with a 25-metre one.' },
      { q: 'What is a fractal dimension?', a: 'A number describing how rough a shape is across scales. A smooth line scores 1; Glasgow\'s boundary comes out at about 1.1 by two independent methods.' },
      { q: 'How old is the University of Glasgow?', a: 'The University says it was established in 1451, making it the fourth oldest university in the UK. We are not connected with the University.' },
      { q: 'Can Glasgow learners get help with National 5 or Higher?', a: 'Yes. Lessons follow the Scottish stages, and learners working towards National 5 or Higher Computing Science get teaching matched to those courses; our National 5 and Higher pages set out what each one asks for.' },
      { q: 'When are Glasgow lessons held?', a: 'Lessons run on weekday afternoons and evenings or at weekends, at a UK time fixed during the free lesson; India is 4.5 hours ahead of Glasgow in summer and 5.5 hours in winter.' },
      { q: 'Is there a Modern Age Coders centre in Glasgow?', a: 'No. There is no Glasgow centre and no premises anywhere in the UK; all teaching is live online. Learners need a computer with sound and a steady connection, and our phone number is an Indian one.', boiler: true },
      { q: 'How much do Glasgow lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Glasgow groups formed?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group meets at a good time, we propose one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Scotland and the UK',
    h2: 'Scottish pages and other cities',
    html: 'Along the M8, the <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh page</a> computes why its summer nights never go properly dark. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland guide</a> covers coding across the Curriculum for Excellence, and exam help is on the <a class="cg-inline-link" href="/national-5-computing-science-help">National 5</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> gathers every city and guide in the series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Glasgow and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/higher-computing-science-help', label: 'Higher' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-gla .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3.2vw, 2.8rem); }
.cg-root.cg-gla .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-gla .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-gla .cg-eyebrow { letter-spacing: 0.17em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-gla .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-gla .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2.3rem); }
.cg-root.cg-gla .cg-table caption { font-weight: 700; letter-spacing: 0.012em; }
.cg-root.cg-gla .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gla .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-gla .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Glasgow, National Records of Scotland, Scotland\'s Census 2022 first results rounded population estimates data (published 14 September 2023, rounded to the nearest hundred): Glasgow City S12000049 620,700 usual residents (2011: 593,245), 293,800 households (2011: 285,693), 58,900 aged 25 to 29 (Scotland 338,200), 14.5 percent aged 0 to 14, 71.5 percent 15 to 64, 14.0 percent 65 and over (Scotland 15.3, 64.6, 20.1), 3,554.5 residents per square kilometre (Scotland 69.8); Demography and migration chart data: 21.3 percent of households with dependent children. University of Glasgow: established 1451, fourth oldest university in the UK; Adam Smith entered in 1737 at 14; Lord Kelvin\'s fully electric-lit house on campus in 1881. SPT Subway: Inner and Outer Circle, every four minutes at peak, 24-minute circuit of fifteen stations.',
    localProject: 'Eight rulers, eight lengths. ONS LAD December 2023 boundaries for Glasgow City S12000049: full-resolution extent (BFE) one ring, 4,078 points, 108.66 km drawn, 176.36 km2. Divider walk: 25 m 106.38 km, 50 m 104.64, 100 m 101.32, 200 m 96.47, 400 m 88.96, 800 m 83.43, 1,600 m 70.81, 3,200 m 62.49; divider dimension about 1.11 (1.14 for rulers 100 m and up). Box counting: 2,651 boxes at 50 m to 28 at 3,200 m, dimension about 1.09. Simplified versions: 112 points 95.67 km; 50 points 87.93 km. Clipped full-resolution file: two pieces, 111.16 and 63.47 km2. Lesson family: fractals and the coastline paradox; distinct from convex hull, point-in-polygon and Monte Carlo area.',
    requiredMentions: [
      '620,700',
      '593,245',
      '293,800',
      '285,693',
      '3,554.5',
      'fourth oldest',
      'Lord Kelvin',
      'coastline paradox',
      'fractal dimension',
      'box counting',
      'Adam Smith',
      '106.38'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates: Glasgow population, households, age groups, density.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 demography and migration chart data: households with dependent children.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-demography-and-migration-chart-data/' },
      { claim: 'ONS Open Geography, Local Authority Districts December 2023, full-resolution extent (BFE) and other versions: the Glasgow City boundary.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2023_Boundaries_UK_BFE/FeatureServer/0' },
      { claim: 'University of Glasgow, history: 1451, fourth oldest in the UK, Adam Smith 1737, Lord Kelvin 1881.', url: 'https://www.gla.ac.uk/explore/history/' },
      { claim: 'SPT, Subway: Inner and Outer Circle, every four minutes at peak, 24-minute circuit of fifteen stations.', url: 'https://www.spt.co.uk/travel-with-spt/subway/' }
    ],
    rejectedClaims: [
      'Subway fare figures on the SPT page: pound amounts, excluded by the one-currency rule.',
      'Subway opening year: not stated on the SPT page read, so not given.',
      'Student numbers for Glasgow: the Scotland\'s Census 2022 education tables are behind an interactive tool, so no student share is stated.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the ONS, National Records of Scotland, the University of Glasgow or Strathclyde Partnership for Transport.'
    ]
  }
};
