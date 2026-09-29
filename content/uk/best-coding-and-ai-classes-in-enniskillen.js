'use strict';
// Enniskillen (cg- town page, UK cluster Phase 8, towns band A, row 433). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does a computer draw a smooth curve through a
// few points, and is the smoothest curve the most accurate? (curve reconstruction: straight lines, Chaikin corner cutting,
// Catmull-Rom splines; interpolating against approximating).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -7.680,54.330,-7.600,54.365 (6 tiles, ODbL). Shoreline ways
// natural=water, water=lake: Rossole Lough (way 43494816, 103 points, closed; perimeter 1,826 m, area 158,430 square m) and
// Lough Coole (way 19629113, 78 points, perimeter 1,493 m, area 111,250 square m).
// Our run (scratchpad enk/curve.py): keep 1 point in k (k = 2, 4, 8, 16), rebuild the closed shoreline three ways (straight
// segments; Chaikin corner cutting, 4 rounds; uniform Catmull-Rom spline through the kept points), and measure the distance
// from every original point to the rebuilt curve. Rossole Lough mean error straight / Chaikin / Catmull-Rom (m): 1 in 2:
// 1.87 / 2.83 / 1.55; 1 in 4: 4.24 / 5.37 / 4.10; 1 in 8: 8.07 / 10.79 / 6.90; 1 in 16 (7 points): 20.21 / 28.81 / 12.52.
// Area kept at 1 in 16: 83.3% / 78.4% / 93.3%; length 84.3% / 74.7% / 87.2%. Lough Coole at 1 in 8 (10 points): 16.23 /
// 18.77 / 12.99.
// Lesson family: curve smoothing and reconstruction (Chaikin corner cutting, Catmull-Rom splines, interpolation against
// approximation). Screened: "Chaikin", "Catmull", "spline", "corner cutting", "curve smoothing" 0 hits anywhere in content/;
// Douglas-Peucker simplification is used elsewhere (the reverse problem). Claimed in $S/claims.txt as enk.
// Place facts: NISRA Census 2021 MS-A01: settlement ENNISKILLEN 14,086 (approximation); DEA Enniskillen 18,451 (exact);
// wards listed by postcodes.io for BT74 with NISRA populations: Castlecoole 3,203; Portora 3,185; Erne 3,054; Rossorry
// 2,543. (postcodes.io places does not cover Northern Ireland.)

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ENNISKILLEN', label: 'Enniskillen', blurb: 'Coding and AI classes for Enniskillen, with a project that redraws a lough shoreline from a handful of points and tests which smooth curve is truthful.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-enniskillen',
  code: 'enk',
  accent: '#0F6E6E',
  accentRationale: 'Enniskillen: a deep lough cyan (6.04:1 contrast), chosen by hand to differ in hue from the purples, navies and greens of recent pages',
  pageType: 'city',
  place: {
    name: 'Enniskillen',
    eyebrow: 'Enniskillen, Fermanagh and Omagh, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Fermanagh and Omagh' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Fermanagh and Omagh', href: '/coding-classes-in-fermanagh-and-omagh' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Enniskillen, Northern Ireland',
  title: 'Coding and AI Classes in Enniskillen | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Enniskillen, Portora, Castlecoole and Rossorry learners aged 6 to 67, with CCEA exam help. First lesson free.',
  ogDescription: 'Coding and AI classes for Enniskillen, with a project that rebuilds a lough shoreline from a few points and asks which smooth curve tells the truth.',
  twitterDescription: 'Enniskillen coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Enniskillen',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Enniskillen and Fermanagh, taught live with careful reasoning first.'
  },

  h1: 'Coding and AI classes in Enniskillen',
  capsuleQ: 'Where can Enniskillen learners find the best coding and AI classes?',
  capsule: 'By NISRA\'s approximate settlement count, about 14,086 people lived in Enniskillen at the 2021 census; the surrounding district electoral area held 18,451. For BT74, postcodes.io lists wards including Portora, Castlecoole, Rossorry and Erne. Coding, AI, Python, vibe coding and maths are taught on camera by our India-based tutors to learners from six to 67, alone or in a group of five to ten at one level. We put reasoning before tools, so a learner can tell a curve that looks right from one that is right. The free trial lesson ends with our recommended course. The Enniskillen project takes the mapped shoreline of Rossole Lough, throws away most of its points, and rebuilds it three ways to see which smooth curve comes closest to the real edge. Beyond the trial you pay USD 100 monthly for group tuition or USD 150 monthly for a personal tutor.',
  lead: 'Maps, games, fonts and animation all need smooth curves drawn through a few stored points. There are two broad families of methods. Approximating curves, such as Chaikin\'s corner-cutting method, repeatedly shave off the corners of a shape until it looks smooth, but they do not pass through the original points. Interpolating curves, such as Catmull-Rom splines, are built to pass exactly through every point and bend smoothly between them. Which is closer to reality depends on the data. This project tests both on a real outline: Rossole Lough, a lake mapped on OpenStreetMap inside a rectangle around Enniskillen.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Enniskillen?',

  picks: {
    eyebrow: 'Enniskillen course picks',
    h2: 'Enniskillen courses in reasoning, Python and AI',
    intro: 'Four courses arranged by age. The first live lesson on any of them is free, and booking takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: joining dots, spotting when a neat drawing hides a mistake, and measuring the error.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and checked piece by piece.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to geometry and graphics, including the Rossole Lough curve project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI fills gaps in data, why plausible is not proven, and AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Enniskillen and Fermanagh',
      h2: 'Enniskillen, Portora, Castlecoole and Rossorry',
      intro: 'NISRA census figures and the wards postcodes.io lists for BT74.',
      body: [
        { kind: 'table', caption: 'Census 2021 head counts for Enniskillen areas, NISRA table MS-A01; NISRA calls its settlement numbers approximate', head: ['Geography', 'People'], rows: [
          ['Town (NISRA settlement)', '14,086'],
          ['Enniskillen DEA', '18,451'],
          ['Castlecoole ward', '3,203'],
          ['Portora ward', '3,185'],
          ['Erne ward', '3,054'],
          ['Rossorry ward', '2,543']
        ] },
        { kind: 'p', text: 'Settlement, electoral area and wards cover different ground, so their figures are printed separately and never added. Fermanagh schools follow the Northern Ireland Curriculum; our lessons run by P1 to P7 and Years 8 to 14, and we help with CCEA GCSE and A level in computing and maths. Tell us when your holidays fall and lessons will stop for them.' },
        { kind: 'callout', h3: 'Fermanagh and Omagh, and CCEA help', p: 'See <a class="cg-inline-link" href="/coding-classes-in-fermanagh-and-omagh">coding classes in Fermanagh and Omagh</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and <a class="cg-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE maths help</a>. Why thinking comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Enniskillen project',
      h2: 'Rebuilding Rossole Lough: Chaikin corner cutting against Catmull-Rom splines',
      intro: 'Throw away most of a real shoreline, redraw it three ways, and measure how far each drawing strays.',
      body: [
        { kind: 'p', text: 'OpenStreetMap maps Rossole Lough as a closed outline of 103 points, 1,826 m round and about 158,430 square metres in area. The learner keeps only one point in 2, then 1 in 4, 1 in 8 and 1 in 16, and rebuilds the shoreline from what is left: with straight lines, with four rounds of Chaikin corner cutting, and with a Catmull-Rom spline through the kept points. For every one of the original 103 points, Python measures how far it lies from the rebuilt curve.' },
        { kind: 'table', caption: 'Rossole Lough rebuilt from fewer points, average distance from the true outline in metres, our Python run on OpenStreetMap data', head: ['Points kept', 'Straight lines', 'Chaikin corner cutting', 'Catmull-Rom spline'], rows: [
          ['1 in 2 (51 points)', '1.87', '2.83', '1.55'],
          ['1 in 4 (26 points)', '4.24', '5.37', '4.10'],
          ['1 in 8 (13 points)', '8.07', '10.79', '6.90'],
          ['1 in 16 (7 points)', '20.21', '28.81', '12.52']
        ] },
        { kind: 'p', text: 'Chaikin\'s curve looks the smoothest and is the least accurate at every level. Because it cuts corners inwards, the shape shrinks: from 7 points it keeps only 78.4% of the lake\'s area, against 93.3% for the spline. The Catmull-Rom spline, which passes through every kept point, stays closest throughout, and its lead grows as points get scarcer: 12.52 m against 20.21 m for straight lines when only 7 points remain. A second lake in the rectangle, Lough Coole, shows the same order when rebuilt from 10 points: 12.99 m for the spline, 16.23 m for straight lines and 18.77 m for Chaikin. Every method loses the small wiggles, which is why all the rebuilt shorelines are shorter than the real one.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Trace a lake shape, keep every fourth dot, and redraw it freehand to see what goes missing.' },
          { h3: 'Years 8 to 10', p: 'Plot the Rossole Lough points in Python and join them with straight lines at different spacings.' },
          { h3: 'Years 11 and up', p: 'Code Chaikin and Catmull-Rom curves, measure the error and explain why they differ.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap outlines, our curves', p: 'Lake outlines are from OpenStreetMap and its contributors under the Open Database Licence. The thinning, curves, distances, areas and lengths are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Filling gaps and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Filling the gaps smoothly is not the same as filling them correctly.',
      body: [
        { kind: 'table', caption: 'From the Rossole Lough curves to working with AI', head: ['In the shoreline project', 'When AI fills in missing detail'], rows: [
          ['Chaikin looked smoothest and was least accurate', 'Polish is not evidence of accuracy'],
          ['Its shape shrank to 78.4% of the area', 'Methods can drift in one direction'],
          ['The spline kept to the known points', 'Stay anchored to what is actually known'],
          ['All curves lost the small wiggles', 'Missing data cannot be recovered by style'],
          ['Errors were measured, not judged by eye', 'Test outputs against the real thing']
        ] },
        { kind: 'p', text: 'AI systems constantly fill gaps: upscaling images, completing sentences, estimating values between data points. The result often looks convincing whether or not it is correct, exactly like a smooth curve that has drifted inside the real shoreline. When Enniskillen learners vibe code, the AI drafts from their description, and they hold back its polish until the output has been checked against answers they already know. Agents that summarise or extend data need the same check. Agents arrive in the course when a learner\'s Python stands on its own, for most around Years 13 and 14 or later, and Copilot Studio is taught privately. More on the route is at <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents course for UK learners</a>, and on the approach at <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page draws on open data from OpenStreetMap, NISRA and postcodes.io, none of which is connected with Modern Age Coders; the curve work and any faults in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From joining dots to spline code',
    intro: 'We use the school year as a first guess and let the trial settle the level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Joining dots, estimating and checking a drawing against the real shape.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and small apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and geometry', p: 'Coordinates, curves and measured error alongside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Graphics, AI and agents', p: 'Curves, data and AI agents built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Curves and code',
    h2: 'What is a spline, and how do computers draw smooth curves through points?',
    intro: 'A spline is a smooth curve built from pieces that join seamlessly; interpolating splines such as Catmull-Rom pass through every given point, while approximating methods such as Chaikin corner cutting smooth the shape without passing through the points.',
    p1: 'Rebuilding Rossole Lough, mapped in the rectangle around Enniskillen, from 7 of its 103 points, the Catmull-Rom spline stayed within 12.52 m of the true shoreline on average, straight lines 20.21 m and Chaikin\'s smoother curve 28.81 m.',
    p2: 'Learners who have measured that ask of any polished AI output: is it anchored to real data, or just smooth?',
    closer: 'Checking polish against evidence keeps Enniskillen teenagers in charge of the AI they use, and learning to code is where that habit starts in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Portora to Castlecoole, online',
    intro: 'A computer, a camera and a connection able to hold a video call are all you need.',
    cells: [
      { h3: 'Hands on the code', p: 'The learner writes and runs every step; the tutor watches through screen share and asks how far the output is from the truth.' },
      { h3: 'Set by the trial', p: 'The free lesson shows the starting point, with any CCEA exam recorded.' },
      { h3: 'Free opening lesson', p: 'No charge for lesson one, which ends with a course suggestion.' },
      { h3: 'Level-matched classes', p: 'Five to ten learners from across the UK, grouped by stage.' },
      { h3: 'Two per week', p: 'Paused for school holidays.' },
      { h3: 'Steady time', p: 'Tutors adjust for UK clock changes so your slot stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level who are free on the same evening rarely live close together. Video removes the distance.' }
  },

  fees: {
    h2: 'Enniskillen fees',
    intro: 'For Enniskillen, as for every country other than India, our international price list applies.',
    first: 'One free lesson, then our recommendation.',
    group: 'Roughly eight live group lessons each month.',
    private: 'Roughly eight live one-to-one lessons each month.',
    closer: 'No sterling prices: we charge in US dollars once the trial has agreed a course and a slot, and the pricing page covers holiday weeks, missed sessions and format swaps.'
  },

  reviewsH2: 'Google reviews: Fermanagh parents and learners elsewhere in Britain',

  book: {
    h2: 'Book a free Enniskillen lesson',
    intro: 'An age or year group plus a hobby lets us shape the trial, which could be a dot-joining shape puzzle, a Scratch game built with an AI, first steps in Python, or redrawing a real map outline.',
    success: 'Thank you. Your Enniskillen request is in.'
  },

  faq: {
    h2: 'Enniskillen questions',
    intro: 'Splines, corner cutting, the Rossole Lough outline, vibe coding and how lessons run.',
    items: [
      { q: 'What is the population of Enniskillen?', a: 'NISRA\'s Census 2021 settlement figures put Enniskillen at roughly 14,086 usual residents, and the Enniskillen district electoral area at 18,451.' },
      { q: 'Are coding and AI classes available online in Enniskillen?', a: 'Lessons are live over video, so anyone from 6 to 67 anywhere in Fermanagh and Omagh can take part.' },
      { q: 'What is Chaikin\'s algorithm?', a: 'A way to smooth a shape by repeatedly cutting each corner, replacing every edge with two points a quarter and three quarters along it. It looks smooth but pulls the shape inwards.' },
      { q: 'What is the difference between interpolating and approximating curves?', a: 'An interpolating curve passes through every given point, like a Catmull-Rom spline; an approximating curve only follows their general shape, like Chaikin\'s method.' },
      { q: 'What does the Enniskillen project involve?', a: 'Thinning the 103-point OpenStreetMap outline of Rossole Lough, rebuilding it with straight lines, Chaikin corner cutting and a Catmull-Rom spline, and measuring each error.' },
      { q: 'Is vibe coding part of the course?', a: 'Yes, at every age; learners plan the program and check what the AI writes.' },
      { q: 'At what stage do agents come in?', a: 'Once they write Python unaided, usually in the final school years or as adults; Copilot Studio agents are private lessons.' },
      { q: 'Do you support CCEA exams?', a: 'We do, across CCEA computing and maths at GCSE and A level, teaching for understanding and never promising a result.' },
      { q: 'How much are lessons?', a: 'The trial is free; then USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'Do lessons stop for the holidays?', a: 'Yes, for school holidays; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Northern Ireland pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/coding-classes-in-fermanagh-and-omagh">Fermanagh and Omagh</a> (dating a canal bridge by evidence), <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a>, <a class="cg-inline-link" href="/best-coding-class-in-derry-londonderry">Derry</a> and <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>. Further afield, start from <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Enniskillen and Fermanagh',
  footerPlaces: [
    { href: '/coding-classes-in-fermanagh-and-omagh', label: 'Fermanagh and Omagh' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-enk .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-enk .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-enk .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; border-radius: 0 8px 8px 0; }
.cg-root.cg-enk .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-enk .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-enk .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-enk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-enk .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-enk .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-enk .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Fermanagh and Omagh (N09000006). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: settlement ENNISKILLEN 14,086 (approximation); DEA Enniskillen 18,451; wards Castlecoole 3,203, Portora 3,185, Erne 3,054, Rossorry 2,543 (ward names from postcodes.io outcode BT74).',
    localProject: 'OSM API 0.6 bbox -7.680,54.330,-7.600,54.365: Rossole Lough (way 43494816) 103 points, 1,826 m, 158,430 sq m; Lough Coole (way 19629113) 78 points. Keep 1 in k, rebuild straight / Chaikin (4 rounds) / Catmull-Rom; mean error to all original points (m), Rossole: 1 in 2 1.87/2.83/1.55; 1 in 4 4.24/5.37/4.10; 1 in 8 8.07/10.79/6.90; 1 in 16 20.21/28.81/12.52; area at 1 in 16 83.3/78.4/93.3%. Lough Coole 1 in 8: 16.23/18.77/12.99. Lesson family: curve reconstruction, Chaikin vs Catmull-Rom.',
    requiredMentions: [
      '14,086',
      '18,451',
      'Rossole Lough',
      'Lough Coole',
      'Castlecoole',
      'Portora',
      'Rossorry',
      'Chaikin',
      'Catmull-Rom'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by settlement, DEA and ward.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap lake outlines around Enniskillen, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io outcode BT74: wards in Fermanagh and Omagh.', url: 'https://api.postcodes.io/outcodes/BT74' }
    ],
    rejectedClaims: [
      'Island town, castle, Lough Erne or school history: not read from a source; not claimed.',
      'That the OpenStreetMap outlines match the true lake edge exactly: the mapped outline is treated as the reference only.',
      'That the listed wards make up the town: they are wards postcodes.io lists for BT74.',
      'Sum of settlement, DEA and ward figures: different geographies; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
