'use strict';
// Wigston (cg- district page, UK cluster Phase 9, row 463). Keyword slug per the owner's 2026-09-30 ruling. Wigston is in
// the borough of Oadby and Wigston, Leicestershire, a separate district from the City of Leicester; never placed inside the
// city. Spine: how do maps shrink a detailed outline without wrecking its shape? (Visvalingam-Whyatt line simplification:
// repeatedly drop the point whose triangle with its neighbours has the smallest area, using a heap; against keeping every
// n-th point).
// Data (read 30 September 2026): Overpass API (OpenStreetMap, ODbL): boundary relation 162358 "Oadby and Wigston"
// (boundary=administrative), outer ways chained into one closed ring of 1,156 points. Our planar measurement of that ring:
// 23.33 square km, 31.04 km round (not an official area).
// Our run (scratchpad wgs/vw.py): points kept / Visvalingam-Whyatt area error, largest deviation, perimeter / every-n-th
// area error, largest deviation, perimeter: 50% (578) 0.01%, 9 m, 30.87 km / 0.04%, 93 m, 29.30 km; 20% (231) 0.00%, 50 m,
// 29.59 / 0.13%, 168 m, 27.41; 10% (116) 0.03%, 65 m, 28.08 / 0.13%, 284 m, 25.03; 5% (58) 0.10%, 169 m, 26.52 / 0.52%,
// 333 m, 23.22; 2% (23) 1.42%, 459 m, 23.72 / 7.06%, 1,252 m, 20.65. Heap operations to reach 5%: 3,229 pops.
// Lesson family: Visvalingam-Whyatt simplification (effective area, priority queue). Screened: "Visvalingam" 0 hits;
// claimed in the fork claims file. Douglas-Peucker appears on other pages and is not used here.
// Place facts: ONS 2021 built-up area Wigston 34,730 (it extends beyond the district boundary); Oadby and Wigston district
// (E07000135) TS001 57,747 (registered by the Oadby page; not a required mention here). Wards (TS001): Wigston Fields
// 6,863; Wigston St Wolstan's 6,561; Wigston Meadowcourt 6,304; Wigston All Saints 5,874; South Wigston 8,115.
// postcodes.io (Oadby and Wigston, LE18): Wigston, Wigston Magna, Wigston Harcourt, South Wigston.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WIGSTON', label: 'Wigston', blurb: 'Online coding and Python classes for Wigston in Leicestershire, with a project that shrinks the borough boundary from 1,156 points to 58 and measures what is lost.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-wigston-leicester',
  code: 'wgs',
  accent: '#854D0E',
  accentRationale: 'Wigston: a dark amber brown (6.85:1 contrast), chosen by hand against the rubies, teals and navies of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Wigston',
    eyebrow: 'Wigston, Oadby and Wigston, Leicestershire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Leicestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-classes-in-leicestershire', name: 'Leicestershire' }],
  nav: [
    { label: 'Leicestershire', href: '/coding-classes-in-leicestershire' },
    { label: 'Oadby', href: '/vibe-coding-and-ai-agents-classes-in-oadby-leicester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wigston, Leicestershire',
  title: 'Online Coding and Python Classes in Wigston | Leicestershire',
  description: 'Live online coding, Python, AI and vibe coding lessons for Wigston, Wigston Magna, South Wigston and Wigston Harcourt learners aged 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Wigston, with a map project that simplifies the Oadby and Wigston boundary and measures the damage.',
  twitterDescription: 'Wigston online coding, Python, AI and vibe coding classes, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Wigston',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Wigston and the borough of Oadby and Wigston, taught live with careful thinking first.'
  },

  h1: 'Online coding and Python classes in Wigston',
  capsuleQ: 'Which are the best online coding and Python classes in Wigston?',
  capsule: 'Wigston\'s built-up area had 34,730 residents at the 2021 census, on ONS figures. The town sits in the borough of Oadby and Wigston, a Leicestershire district with its own council, distinct from the City of Leicester. Wigston Magna, Wigston Harcourt and South Wigston are recorded there in the LE18 postcode district, and census wards include Wigston Fields and Wigston Meadowcourt. Coding, Python, AI, vibe coding and maths are taught to ages six to 67 over live video by our India-based tutors, either privately or in a group of five to ten at a matching level. Careful thinking comes before tools, so learners can check what a program or an AI has quietly thrown away. A free first lesson ends with our course advice. The Wigston project takes the borough\'s 1,156-point boundary from OpenStreetMap and simplifies it in Python, measuring what each shortcut costs. After the trial it is USD 100 a month for a group place or USD 150 a month one-to-one.',
  lead: 'Zoom out on any web map and the coastlines and boundaries get simpler: fewer points, same recognisable shape. Doing that well is harder than it looks. Keep every tenth point and you may slice off a corner that mattered. A smarter method, published by Visvalingam and Whyatt in 1993, asks of every point how much it contributes: the area of the little triangle it makes with its two neighbours. The point with the smallest triangle goes first, its neighbours are re-measured, and the process repeats. A priority queue keeps it fast. This project runs the method on a real outline, the boundary of Oadby and Wigston as drawn on OpenStreetMap.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Wigston?',

  picks: {
    eyebrow: 'Wigston course picks',
    h2: 'Wigston courses in thinking, Python and AI',
    intro: 'Each course below starts with a live lesson at no charge; choose the one that fits the learner\'s age.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: what to keep, what to drop and how to tell the difference.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs, an AI helps build and the learner tests.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the beginning through geometry and data, including the boundary project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data structures, maps, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wigston and its borough',
      h2: 'Wigston, Wigston Magna, Wigston Harcourt and South Wigston',
      intro: 'ONS counts for Wigston and some of its wards.',
      body: [
        { kind: 'table', caption: 'Wigston in the 2021 census (ONS, via Nomis)', head: ['Area', 'Residents (2021)'], rows: [
          ['Wigston built-up area', '34,730'],
          ['Wigston Fields ward', '6,863'],
          ['Wigston St Wolstan\'s ward', '6,561'],
          ['Wigston Meadowcourt ward', '6,304'],
          ['Wigston All Saints ward', '5,874']
        ] },
        { kind: 'p', text: 'These are separate published figures with different boundaries, so we do not add them; the ONS draws the Wigston built-up area across the district line as well. Postcodes.io records Wigston, Wigston Magna, Wigston Harcourt and South Wigston in LE18, all in Oadby and Wigston, which is a Leicestershire borough and not a part of the City of Leicester. Schools follow England\'s national curriculum, and lessons pause for whatever holiday weeks you tell us about.' },
        { kind: 'callout', h3: 'Leicestershire links', p: 'Continue to <a class="cg-inline-link" href="/coding-classes-in-leicestershire">coding classes in Leicestershire</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a> page, or our argument for reasoning first: <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wigston project',
      h2: 'Simplifying a boundary with Visvalingam-Whyatt: 1,156 points down to 58',
      intro: 'Drop the least important point, re-measure its neighbours, repeat, and keep score.',
      body: [
        { kind: 'p', text: 'The learner fetches the Oadby and Wigston boundary from OpenStreetMap through the Overpass service and joins its pieces into one closed ring of 1,156 points. Measured flat, our ring encloses 23.33 square kilometres and runs 31.04 km round; these are our own measurements of the mapped line, not official statistics. Two simplifiers then thin the ring to the same number of points. One keeps every n-th point. The other is Visvalingam-Whyatt, written with Python\'s heapq module so the least important point is always on top.' },
        { kind: 'table', caption: 'Simplifying the Oadby and Wigston boundary, our Python run on OpenStreetMap data', head: ['Points kept', 'Visvalingam-Whyatt: largest shift', 'Every n-th point: largest shift', 'Area error (VW against n-th)'], rows: [
          ['578 (50%)', '9 m', '93 m', '0.01% against 0.04%'],
          ['231 (20%)', '50 m', '168 m', '0.00% against 0.13%'],
          ['116 (10%)', '65 m', '284 m', '0.03% against 0.13%'],
          ['58 (5%)', '169 m', '333 m', '0.10% against 0.52%'],
          ['23 (2%)', '459 m', '1,252 m', '1.42% against 7.06%']
        ] },
        { kind: 'p', text: 'Largest shift is the furthest any original point ends up from the simplified outline. At every level the area-based method stays closer, and the gap is widest where it matters: with half the points gone it moves nothing more than 9 m, while the every-n-th shortcut has already cut a 93 m corner. Even at 58 points, a twentieth of the original, the enclosed area is within 0.10%. One measure does drift under both methods: the boundary length falls from 31.04 km to 26.52 km at 5%, because smoothing out wiggles always shortens a line. Reaching 58 points took 3,229 heap operations, far fewer than re-scanning every point each time would need.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Redraw a wiggly outline with only ten dots and compare different ways of choosing them.' },
          { h3: 'Ages 11 to 15', p: 'Compute triangle areas for points on the Wigston boundary in Python and remove the smallest by hand.' },
          { h3: 'Ages 15 and up', p: 'Implement Visvalingam-Whyatt with a heap and measure area, length and largest shift at each level.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap boundary, our measurements', p: 'The boundary line is from OpenStreetMap and its contributors under the Open Database Licence. The ring, both simplifiers and all the figures are our own work; for the legal boundary and official area, use Ordnance Survey and ONS sources.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Simplifying and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Every summary throws something away; the skill is knowing what.',
      body: [
        { kind: 'table', caption: 'From the Wigston boundary to working with AI', head: ['In the simplification project', 'When AI condenses something for you'], rows: [
          ['Every n-th point cut a 93 m corner', 'A blind shortcut can drop what matters'],
          ['Area-based removal moved 9 m at most', 'Ranking by importance preserves shape'],
          ['Area held within 0.10% at 5%', 'Some properties survive heavy compression'],
          ['Length fell from 31.04 km to 26.52 km', 'Other properties quietly change'],
          ['A heap kept the work small', 'The right data structure makes it practical']
        ] },
        { kind: 'p', text: 'An AI assistant summarising a document or shortening your code is doing a kind of simplification, and it will not tell you which details it judged unimportant. In vibe coding the learner explains what is wanted and an AI drafts the program; our Wigston learners then measure what changed, as they did with the boundary, instead of assuming the short version is equivalent. The same goes for AI agents that compress context to save space. We introduce agent building once Python is secure, mostly for older teenagers and adults, with Copilot Studio agents taught only in one-to-one lessons. Further reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This study is independent work by Modern Age Coders using open data from OpenStreetMap, the ONS and postcodes.io; none of them has checked it, and any mistake is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From ten-dot drawings to priority queues',
    intro: 'School year suggests a level; the trial lesson confirms or corrects it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Choosing what matters and explaining the choice.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps, designed by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and algorithms', p: 'Geometry, heaps and measurement beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Data structures, mapping and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and maps',
    h2: 'How do maps simplify lines, and what is the Visvalingam-Whyatt algorithm?',
    intro: 'Maps simplify a line by removing points that add little to its shape; the Visvalingam-Whyatt algorithm does it by repeatedly deleting the point whose triangle with its two neighbours has the smallest area.',
    p1: 'On the 1,156-point Oadby and Wigston boundary it kept the largest shift to 9 m with half the points removed, against 93 m for keeping every other point, and held the enclosed area within 0.10% with only 58 points left.',
    p2: 'Learners who have measured that ask of any AI summary or shortened code: what was dropped, and how would I notice?',
    closer: 'Measuring what a shortcut loses gives Wigston teenagers a practical check on AI output, and Python is where they learn to run it in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Wigston lessons by live video',
    intro: 'Any computer with a webcam will do, given broadband that can stream.',
    cells: [
      { h3: 'The learner writes the code', p: 'Tutors watch over screen share and ask questions; they do not type for the student.' },
      { h3: 'We start where the trial points', p: 'That first free session shows what is already known, and exam boards are recorded.' },
      { h3: 'No fee to begin', p: 'Lesson one is free and ends with a recommended course.' },
      { h3: 'Classes of five to ten', p: 'Grouped by level, with learners joining from across the UK.' },
      { h3: 'Two lessons each week', p: 'None in school holidays.' },
      { h3: 'One fixed slot', p: 'Our side absorbs the UK clock changes.' }
    ],
    spec: { title: 'Why online', p: 'In a town of Wigston\'s size, five learners at one level who share a free evening are hard to find. Across the UK, they are not.' }
  },

  fees: {
    h2: 'Wigston fees',
    intro: 'Our international prices apply in Wigston, as in every country other than India.',
    first: 'One complete lesson free, with advice at the end.',
    group: 'Roughly eight live lessons a month in a small class.',
    private: 'Roughly eight live private lessons a month.',
    closer: 'There are no sterling prices: fees are in US dollars and begin after the trial has fixed a course and a weekly time. The pricing page sets out how holidays, missed lessons and format changes work.'
  },

  reviewsH2: 'On Google: Leicestershire families and UK learners',

  book: {
    h2: 'Book a free Wigston lesson',
    intro: 'Tell us how old the learner is, or their school year, and what they like. We could begin with a ten-dot outline challenge, a Scratch game made with AI help, first Python, or thinning a real boundary.',
    success: 'Thank you. Your Wigston request has arrived.'
  },

  faq: {
    h2: 'Wigston questions',
    intro: 'Line simplification, the boundary project, Python, vibe coding and how lessons run.',
    items: [
      { q: 'What is the population of Wigston?', a: 'The ONS gives 34,730 residents for the Wigston built-up area at the 2021 census.' },
      { q: 'Is Wigston in Leicester?', a: 'Wigston is in the borough of Oadby and Wigston, a Leicestershire district separate from the City of Leicester council area.' },
      { q: 'What is a heap in Python?', a: 'A structure that always gives you the smallest item quickly. Python\'s heapq module provides one, and it is what keeps Visvalingam-Whyatt fast.' },
      { q: 'Why does a simplified boundary get shorter?', a: 'Removing points straightens small wiggles, and a straighter line is a shorter one. Our boundary fell from 31.04 km to 26.52 km with 5% of its points kept.' },
      { q: 'What is the Wigston project?', a: 'Thinning the 1,156-point Oadby and Wigston boundary from OpenStreetMap with two methods and measuring area, length and largest shift at each level.' },
      { q: 'Can Wigston learners take Python classes online?', a: 'Yes. Lessons are live video calls for ages 6 to 67, in Wigston, South Wigston and beyond.' },
      { q: 'Is vibe coding included?', a: 'Yes, from the start: learners describe the program, then test and fix what the AI writes.' },
      { q: 'Do you cover GCSE and A level?', a: 'Computer science and maths, yes, taught for understanding; no grade is promised.' },
      { q: 'How much does it cost?', a: 'The trial is free. After it, USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do you teach in the holidays?', a: 'No, lessons pause; give us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Leicestershire and the East Midlands',
    html: 'Each page has a different project: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-oadby-leicester">Oadby</a> (agents bidding for jobs), <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-loughborough">Loughborough</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kettering">Kettering</a>. Start from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for anywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wigston and Leicestershire',
  footerPlaces: [
    { href: '/coding-classes-in-leicestershire', label: 'Leicestershire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wgs .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-wgs .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-wgs .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-wgs .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wgs .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-wgs .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-wgs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wgs .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-wgs .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-wgs .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Oadby and Wigston (E07000135), Leicestershire; separate from the City of Leicester. ONS 2021 BUA Wigston 34,730. Wards (TS001): Wigston Fields 6,863; Wigston St Wolstan\'s 6,561; Wigston Meadowcourt 6,304; Wigston All Saints 5,874. postcodes.io (LE18): Wigston, Wigston Magna, Wigston Harcourt, South Wigston.',
    localProject: 'Overpass (OSM) relation 162358 Oadby and Wigston boundary: ring of 1,156 points, our planar area 23.33 sq km, length 31.04 km. VW vs every n-th, largest shift / area error: 50% 9 m vs 93 m (0.01 vs 0.04%); 20% 50 vs 168 (0.00 vs 0.13); 10% 65 vs 284 (0.03 vs 0.13); 5% 169 vs 333 (0.10 vs 0.52); 2% 459 vs 1,252 (1.42 vs 7.06). Length at 5% 26.52 km (VW). 3,229 heap pops to 5%. Lesson family: Visvalingam-Whyatt simplification, heap.',
    requiredMentions: [
      '34,730',
      'Wigston Magna',
      'Wigston Harcourt',
      'South Wigston',
      'Wigston Fields',
      'Wigston Meadowcourt',
      '23.33',
      '31.04 km',
      'Visvalingam'
    ],
    sources: [
      { claim: 'OpenStreetMap boundary relation for Oadby and Wigston via the Overpass API, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/relation/162358' },
      { claim: 'ONS Census 2021 TS001 ward populations via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places in Oadby and Wigston (LE18).', url: 'https://api.postcodes.io/places?q=Wigston%20Magna' }
    ],
    rejectedClaims: [
      'That Wigston is inside the City of Leicester: false; stated as a separate Leicestershire district.',
      'Official area or boundary length of the borough: not quoted; only our measurements of the mapped line, labelled as ours.',
      'Sum of ward figures or comparison with the built-up area: different boundaries; not added.',
      'Town history, canal or framework-knitting heritage: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
