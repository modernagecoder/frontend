'use strict';
// Willenhall (cg- town page, UK cluster Phase 10, towns band B, row 516). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if all you had was a table of distances
// between places, could you redraw the map? (classical multidimensional scaling, then Procrustes alignment).
// Data (read 30 September 2026): OpenStreetMap roads (motorway down to residential and living streets, with link
// roads) from one Overpass query for the box 52.570 to 52.622 north, 2.075 to 2.005 west; postcodes.io places in
// Walsall borough: Willenhall, Short Heath, New Invention, Shepwell Green, Spring Bank, Bentley, Little London,
// Ashmore Lake, Lane Head (each within 5 m of a road point).
// Our run (scratchpad wlh/mds.py): 350.6 km of connected road. 9 places, 36 pairs: mean straight-line distance
// 1,818 m, mean shortest road distance 2,219 m. Classical MDS (double-centred squared distances, top two
// eigenvectors) then Procrustes (rotation or reflection). Straight-line table: 1,374 m mean error before alignment,
// 0.0 m after. Road table: top two eigenvalues 93.7% of the positive total, 3 negative eigenvalues; mean error 285 m
// (largest 624 m, Bentley) without rescaling; with the fitted scale 0.833, mean 134 m, largest 316 m (Bentley).
// 60 random junctions (seed 20260930): mirror image before alignment, top two 78.0%, 24 negative eigenvalues,
// scale 0.804, mean 229 m, largest 891 m.
// Lesson family: multidimensional scaling (classical MDS) with Procrustes alignment.
// Place facts: Walsall (E08000030) TS001 284,124. ONS 2021 BUAs wholly inside Walsall (published): Walsall 70,775;
// Bloxwich 51,875; Willenhall 49,580; Brownhills 21,240; Aldridge 15,835; Pelsall 10,455.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WILLENHALL', label: 'Willenhall', blurb: 'AI and programming classes for Willenhall in Walsall borough, with a project that redraws the local map from nothing but a table of distances.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-willenhall',
  code: 'wlh',
  accent: '#445410',
  accentRationale: 'Willenhall: a canal-side olive (8.33:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Willenhall',
    eyebrow: 'Willenhall, Walsall, West Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Walsall', href: '/best-coding-and-ai-classes-in-walsall' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Willenhall, Walsall',
  title: 'AI and Programming Classes in Willenhall, Walsall | Ages 6 to 67',
  description: 'Live video lessons in AI, programming, Python and vibe coding for Willenhall, Short Heath, New Invention and Bentley, ages 6 to 67. The first one is free.',
  ogDescription: 'AI and programming classes for Willenhall, with a machine learning project: multidimensional scaling redraws nine local places from a table of road distances.',
  twitterDescription: 'Willenhall, Walsall: online AI, programming, Python and vibe coding classes for ages 6 to 67, starting with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Willenhall, Walsall',
    description: 'AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Willenhall and the borough of Walsall, taught live online with the reasoning shown.'
  },

  h1: 'AI and programming classes in Willenhall, Walsall',
  capsuleQ: 'Which AI and programming classes are best for a learner in Willenhall?',
  capsule: 'The ONS counted 49,580 people in the Willenhall built-up area at the 2021 census, inside a Walsall borough of 284,124. Postcode data lists Short Heath, New Invention, Shepwell Green, Spring Bank and Ashmore Lake among the borough\'s suburban areas. We teach AI, programming, Python, vibe coding and maths to anyone from six to 67 on a live video call. The tutors are in India, and a learner either has one to themselves or joins five to ten others working at the same stage. How an answer was reached is taught before any tool, so students can question what a model hands back. In the Willenhall project a program is given a table of distances between nine local places and nothing else, and has to draw the map. Lesson one is free and ends with our course suggestion. After it, a group place is USD 100 a month and a private tutor USD 150 a month.',
  lead: 'Old road atlases printed a triangle of numbers at the back: the mileage from every town to every other. Suppose the maps were torn out and only the triangle survived. Could the map be drawn again from the numbers? A method called multidimensional scaling says yes, and machine learning uses it constantly, to turn a table of how far apart things are into a picture of where they sit. It works perfectly when the distances were measured with a ruler. Roads are not rulers. For Willenhall, a learner builds both tables from open map data and sees exactly how much a flat picture can and cannot hold.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Willenhall.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Thinking, AI and programming courses for Willenhall learners',
    intro: 'Four starting points, sorted by age. Every one opens with a live lesson that is free, and we do not ask for a card to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: place three towns on paper when you know only how far apart each pair is.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Have an AI draft a Scratch treasure map, then check its distances with a ruler of your own.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning opened up, including multidimensional scaling on Willenhall\'s road distances.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with an AI assistant and measured against the truth afterwards.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Walsall borough',
      h2: 'Willenhall among the built-up areas of Walsall',
      intro: 'Six built-up areas that the ONS places wholly inside the borough, and the nine places used in the project.',
      body: [
        { kind: 'table', caption: 'Built-up areas lying wholly within Walsall borough, ONS figures for the 2021 census', head: ['Built-up area', 'Usual residents (2021)'], rows: [
          ['Walsall', '70,775'],
          ['Bloxwich', '51,875'],
          ['Willenhall', '49,580'],
          ['Brownhills', '21,240'],
          ['Aldridge', '15,835'],
          ['Pelsall', '10,455']
        ] },
        { kind: 'p', text: 'Each row is the ONS\'s own rounded figure and we have added nothing together; the borough total of 284,124 is a separate census count. Built-up areas that spill across the borough boundary are left out of the table. postcodes.io records Willenhall as a town in Walsall, and Short Heath, New Invention, Shepwell Green, Spring Bank, Bentley, Little London, Ashmore Lake and Lane Head as suburban areas there. Schools in the borough teach the national curriculum for England. Send us your term dates and lessons will fit around them.' },
        { kind: 'callout', h3: 'The county, the region and our method', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">coding classes in the West Midlands</a>, the borough page is <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a>, and the wider area is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">the West Midlands region</a>. Why we teach thinking ahead of prompting is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Willenhall project',
      h2: 'Multidimensional scaling: nine places, 36 distances, no map',
      intro: 'Make two distance tables, hand each to the same program, and measure how far its map lands from the real one.',
      body: [
        { kind: 'p', text: 'A single Overpass request fetches every road in a box around Willenhall, from motorway to residential street: 350.6 km of connected network. The learner pins the nine postcodes.io places to the road network, each within 5 m of a road point, and fills in two tables of 36 pairs. One holds straight-line distances. The other holds the shortest route along the roads, found with Dijkstra\'s algorithm. The straight lines average 1,818 m and the road routes 2,219 m.' },
        { kind: 'table', caption: 'Five of the 36 pairs, straight line against shortest road route, from our Python run on OpenStreetMap data', head: ['Pair of places', 'Straight line', 'By road'], rows: [
          ['Spring Bank and Little London', '0.16 km', '0.24 km'],
          ['Short Heath and Lane Head', '0.45 km', '0.59 km'],
          ['Willenhall and Bentley', '2.22 km', '2.51 km'],
          ['Bentley and Ashmore Lake', '2.39 km', '3.20 km'],
          ['Willenhall and New Invention', '3.49 km', '3.87 km']
        ] },
        { kind: 'p', text: 'Classical multidimensional scaling squares the distances, centres the table, and takes the two strongest eigenvectors as x and y. The positions that come out have no north. They may be turned to any angle, or flipped like a reflection, because a distance table says nothing about direction. So a second step, Procrustes alignment, rotates or mirrors the result until it sits as closely as possible on the true positions. Before that step the straight-line map is 1,374 m out per place on average. After it the error is 0.0 m. Every position was already hidden in the 36 numbers.' },
        { kind: 'table', caption: 'How well each distance table rebuilds the map, after Procrustes alignment', head: ['Distance table', 'Held by top two eigenvalues', 'Negative eigenvalues', 'Mean error', 'Largest error'], rows: [
          ['Straight line, 9 places', '100%', '0', '0 m', '0 m'],
          ['Road, 9 places, not rescaled', '93.7%', '3', '285 m', '624 m'],
          ['Road, 9 places, shrunk to 0.833', '93.7%', '3', '134 m', '316 m'],
          ['Road, 60 random junctions, shrunk to 0.804', '78.0%', '24', '229 m', '891 m']
        ] },
        { kind: 'p', text: 'The road table gives a map that is too big, since every route is longer than the straight line it replaces. Shrinking it by the fitted factor of 0.833 halves the error, and what remains cannot be removed. Negative eigenvalues are the giveaway: they appear only when no arrangement on a flat sheet can honour all the distances at once. Bentley ends up furthest from its true spot, 316 m away, because its road routes to the other eight are stretched the most: 1.30 times the straight line on average, against 1.18 to 1.27 for the rest. With 60 junctions chosen at random the first picture came out as a mirror image, and the two axes held only 78.0% of the structure. More points, more bends, more that a flat drawing has to give up.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Three towns, three distances, a ruler and compasses: draw the triangle, then notice a friend drew it upside down.' },
          { h3: 'Ages 11 to 15', p: 'Build the two tables in Python for a handful of places and compare the averages before any maths.' },
          { h3: 'Ages 15 and up', p: 'Write the double-centring and eigenvector steps in NumPy, add Procrustes, and chase the negative eigenvalues.' }
        ] },
        { kind: 'callout', h3: 'Credit and limits', p: 'Road data is © OpenStreetMap contributors and used under the Open Database Licence. The tables, maps and errors are our own calculations. Routes ignore one-way rules, turn bans and speed, and they stop at the edge of our box, so they are not driving directions. A different choice of places would give different figures.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Pictures of data',
      h2: 'Why this matters for AI, vibe coding and agents',
      intro: 'Any flat picture of complicated data is a summary, and a summary always leaves something out.',
      body: [
        { kind: 'table', caption: 'From the Willenhall map to everyday AI work', head: ['In the project', 'When using AI'], rows: [
          ['0.0 m error from straight-line distances', 'Check a new method on a case where you know the answer'],
          ['The first map had no north and was once mirrored', 'The angle of an embedding chart carries no meaning'],
          ['93.7% kept with 9 places, 78.0% with 60', 'Ask how much a two-axis plot threw away'],
          ['Negative eigenvalues from road distances', 'Some data cannot be drawn flat without distortion'],
          ['Bentley moved 316 m', 'Look for the items a summary treats worst']
        ] },
        { kind: 'p', text: 'AI systems store words, images and customers as long lists of numbers, and the charts that show them as dots on a screen are made with methods from the same family as this one. A learner who vibe codes such a chart gets it in seconds from an assistant. What the assistant does not volunteer is how much of the truth two axes kept, or that turning the picture upside down would be just as valid. Willenhall students find both out by measuring. They move on to AI agents once their Python stands up without help, usually during sixth form or later, and agents made in Copilot Studio are taught in one-to-one lessons only. There is more on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents pathway for UK students</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the Office for National Statistics and postcodes.io supplied open data and have not endorsed this page. The method choices and any slips are ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From a paper triangle to eigenvectors',
    intro: 'The year groups are a guide. Where someone starts is settled in the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Distances, drawings and the habit of checking a picture against its numbers.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Short builds where an AI writes the first version and the child tests it.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, data and AI', p: 'Machine learning with real measurements, alongside GCSE and A level study.', courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'AI at work', p: 'Python from the ground up, then generative AI and agent projects.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and distance',
    h2: 'What is multidimensional scaling?',
    intro: 'Multidimensional scaling is a method that takes a table of distances between items and works out a position for each one, usually on a flat map, so that the gaps between the positions match the table as closely as they can.',
    p1: 'Given straight-line distances between nine places around Willenhall, it rebuilt the map with 0.0 m of error; given road distances, the closest it could get was a mean error of 134 m, with Bentley 316 m out.',
    p2: 'Roads bend, so their distances do not fit on a flat sheet, and the method reports this honestly through negative eigenvalues.',
    closer: 'A Willenhall teenager who has coded that comparison reads any AI chart with the right question ready: what did this picture have to drop? That instinct comes from programming the method yourself, which is why coding still earns its place in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'One video call for Short Heath, Bentley and New Invention',
    intro: 'A laptop or desktop with a camera and a normal home connection is all the kit required.',
    cells: [
      { h3: 'The learner drives', p: 'Students type and share their screen while the tutor watches, prompts and asks for the reasoning out loud.' },
      { h3: 'Level found first', p: 'We use the trial to see what a learner can already do, and note any exam board.' },
      { h3: 'No-cost trial', p: 'A whole lesson without payment or card, finishing with a recommended course.' },
      { h3: 'Same-stage groups', p: 'Five to ten learners from around the UK who are at one level together.' },
      { h3: 'Twice weekly', p: 'Two lessons a week, paused for any holiday dates you give us.' },
      { h3: 'Clock changes handled', p: 'When British clocks move, our tutors adjust so your slot stays put.' }
    ],
    spec: { title: 'Why we teach by video', p: 'Filling a class with learners at one exact level takes more people than any single town can supply. Online, the whole country is the catchment.' }
  },

  fees: {
    h2: 'What Willenhall families pay',
    intro: 'Willenhall is charged our international rate, the same one used for every learner outside India.',
    first: 'One complete live lesson, free, with a course recommendation to close.',
    group: 'About eight live lessons each month in a small group.',
    private: 'About eight live lessons each month with a tutor of your own.',
    closer: 'We price and bill in US dollars and quote nothing in sterling. Billing begins only when the trial has settled a course and a weekly slot. Holidays, missed lessons and moving between group and private are all covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from West Midlands families and other UK learners',

  book: {
    h2: 'Book a free lesson for Willenhall',
    intro: 'Let us know the learner\'s age or year and one interest. Past trials have been a draw-the-map puzzle, an AI-drafted Scratch game, a first Python program, or a look at real road distances.',
    success: 'Thank you. Your Willenhall request has reached us and a reply is on its way.'
  },

  faq: {
    h2: 'Questions from Willenhall',
    intro: 'Multidimensional scaling, the map project, AI, programming and the practical details.',
    items: [
      { q: 'How many people live in Willenhall?', a: 'The ONS gives 49,580 usual residents for the Willenhall built-up area at the 2021 census. Walsall borough had 284,124.' },
      { q: 'Can I take AI and programming classes online from Willenhall?', a: 'Yes. Lessons are live on video for ages 6 to 67, so Willenhall, Short Heath, New Invention, Bentley and the rest of the borough are all covered.' },
      { q: 'What is multidimensional scaling used for?', a: 'Turning a table of distances or differences into positions that can be plotted. It is used to map survey answers, compare products, and picture the embeddings inside AI models.' },
      { q: 'What is Procrustes alignment?', a: 'A way of laying one set of points over another by shifting, rotating and, if needed, mirroring or resizing it until the two match as closely as possible.' },
      { q: 'What happens in the Willenhall project?', a: 'Learners measure 36 straight-line and 36 road distances between nine places in Python, rebuild the map from each table, and compare: 0.0 m of error against a mean of 134 m.' },
      { q: 'Is vibe coding part of the classes?', a: 'It is, for every age. The learner tells an AI what to build and then has to prove the result is right.' },
      { q: 'At what point do learners make AI agents?', a: 'After they can write Python unaided, which is typically sixth form or adulthood. Copilot Studio agents are one-to-one only.' },
      { q: 'Will you support GCSE and A level study?', a: 'Yes, in computer science and in maths. We teach for understanding and never promise a grade.' },
      { q: 'How much are the lessons?', a: 'Nothing for the first one. Then USD 100 a month in a group, or USD 150 a month one-to-one.' },
      { q: 'Do you stop for school holidays?', a: 'We do, on the dates you tell us about.' }
    ]
  },

  next: {
    eyebrow: 'Further afield',
    h2: 'Other West Midlands pages',
    html: 'Different projects sit on the pages for <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a> and <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a>, and the county is covered on <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">the West Midlands</a>. Everything else is reached from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Willenhall and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wlh .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.3vw, 2.6rem); }
.cg-root.cg-wlh .cg-hero h1 { font-weight: 720; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-wlh .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-wlh .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.8rem; }
.cg-root.cg-wlh .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.016em; }
.cg-root.cg-wlh .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 600; }
.cg-root.cg-wlh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wlh .cg-table th { font-size: 0.82rem; letter-spacing: 0.02em; border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-wlh .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-wlh .cg-callout { border-radius: 6px; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Walsall (E08000030), Census 2021 TS001 usual residents 284,124. ONS 2021 BUAs wholly inside Walsall (published): Walsall 70,775; Bloxwich 51,875; Willenhall 49,580; Brownhills 21,240; Aldridge 15,835; Pelsall 10,455. Darlaston, Streetly, West Bromwich and Bilston straddle the boundary and are excluded. postcodes.io (Walsall): Willenhall (town); Short Heath, New Invention, Shepwell Green, Spring Bank, Bentley, Little London, Ashmore Lake, Lane Head (suburban areas).',
    localProject: 'OpenStreetMap roads (motorway to residential, with links) via one Overpass query, box 52.570-52.622 N, 2.075-2.005 W; 350.6 km connected. Nine postcodes.io places snapped within 5 m. 36 pairs: mean straight line 1,818 m, mean shortest road route (Dijkstra) 2,219 m. Classical multidimensional scaling (double-centred squared distances, top two eigenvectors) then Procrustes alignment (rotation or reflection). Straight-line table: 1,374 m mean error unaligned, 0.0 m aligned. Road table: top two eigenvalues 93.7% of positive total, 3 negative; mean error 285 m, largest 624 m (Bentley) unscaled; fitted scale 0.833, mean 134 m, largest 316 m (Bentley). 60 random junctions (seed 20260930): mirrored before alignment, 78.0%, 24 negative, scale 0.804, mean 229 m, largest 891 m. Mean road-to-straight ratio per place: Bentley 1.30, others 1.18 (New Invention) to 1.27 (Little London). Lesson family: multidimensional scaling (classical MDS), Procrustes alignment, non-Euclidean distances.',
    requiredMentions: [
      '49,580',
      'Short Heath',
      'New Invention',
      'Shepwell Green',
      'Ashmore Lake',
      'Lane Head',
      'Little London',
      'multidimensional scaling',
      'Procrustes',
      '350.6'
    ],
    sources: [
      { claim: 'OpenStreetMap roads (ODbL) fetched through the Overpass API for a box around Willenhall.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: a town and suburban areas in Walsall, with coordinates.', url: 'https://api.postcodes.io/places?q=Shepwell%20Green' }
    ],
    rejectedClaims: [
      'The physical cause of Bentley\'s longer routes (a motorway, canal or railway in the way): not tested; only the measured detour ratio (1.30 against 1.18 to 1.27) is stated.',
      'Driving times or directions: routes ignore one-way rules and speeds; not claimed.',
      'Willenhall lock-making history: belongs to the Walsall page\'s source text; not used here.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
