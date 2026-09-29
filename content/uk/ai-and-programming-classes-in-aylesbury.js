'use strict';
// Aylesbury (cg- town page, UK cluster Phase 8, towns band A, row 388). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does a program decide whether a
// point is inside a boundary, and which "Aylesbury" do you mean? (point in polygon: ray casting, winding number, the
// vertex trap, bounding-box shortcut).
// Data (read 29 September 2026): OpenStreetMap relation 3087398 (API 0.6 /full): boundary=administrative, admin_level 10,
// designation civil_parish, council_name "Aylesbury Town Council", ref:gss E04001559; 18 outer ways stitched into one
// ring of 1,584 vertices; area by the shoelace formula 14.01 km2, its bounding box 25.3 km2 (55.4%). OpenStreetMap map
// calls over that bounding box in 12 tiles: 1,405 features tagged shop (314) or amenity (1,091; most common parking 298,
// bench 148, waste_basket 97, post_box 94). ONS 2021 Aylesbury BUA (published) 87,950 (a different boundary).
// Our run (scratchpad ayl/pip.py): inside the bounding box 1,394; inside the parish by ray casting 1,199; in the box but
// outside the parish 195. Winding-number test agrees with ray casting on all 1,394. A naive ray test that counts a
// crossing when the point is level with a vertex (inclusive comparison) disagrees with the correct test on 1,401 of 1,583
// test points placed level with each vertex. 13 features lie within 25 m of the boundary, 8 within 10 m.
// postcodes.io reference points (Buckinghamshire) tested against the ring: inside Walton Court, Bedgrove, Southcourt,
// Quarrendon, Elmhurst, Haydon Hill (suburban areas); outside Watermead, Berryfields, Kingsbrook (suburban areas) and
// Stoke Mandeville, Bierton (villages).
// Lesson family: point in polygon, ray casting vs winding number, degenerate vertex cases, bounding-box pre-filter,
// boundary definitions. Screened: point in polygon, winding, geofence 0 hits; ray casting appears once elsewhere only
// in passing (Sutton, Lomb-Scargle page).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'AYLESBURY', label: 'Aylesbury', blurb: 'AI and programming classes for Aylesbury, with a geometry project that tests 1,394 real places against the Town Council boundary and finds three suburbs outside it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-aylesbury',
  code: 'ayl',
  accent: '#5C5529',
  accentRationale: 'Aylesbury: a deep olive-bronze (6.07:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Aylesbury',
    eyebrow: 'Aylesbury, Buckinghamshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Buckinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Buckinghamshire', href: '/coding-classes-in-buckinghamshire' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Aylesbury, England',
  title: 'AI and Programming Classes in Aylesbury | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Aylesbury, Bedgrove, Walton Court and Watermead learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Aylesbury, and a Python geometry project that tests real places against the Town Council boundary.',
  twitterDescription: 'Aylesbury AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Aylesbury',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Aylesbury and across Buckinghamshire, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Aylesbury',
  capsuleQ: 'Which are the best AI and programming classes in Aylesbury?',
  capsule: 'The ONS gives the Aylesbury built-up area 87,950 people at the 2021 census, and its recorded suburbs include Walton Court, Bedgrove, Southcourt, Quarrendon, Watermead and Berryfields. Home in any of them, a learner aged anywhere from 6 to 67 can study AI, programming, Python, vibe coding and maths on a live call with one of our tutors in India, privately or among five to ten peers at the same stage. Every course begins with how to think, so that learners can question what AI tools produce. We charge nothing for lesson one and end it with a course we think fits. The Aylesbury project answers a question that sounds simple and is not: is a given place inside Aylesbury or not? Ongoing tuition is USD 100 a month for a seat in a small class, or USD 150 a month for a tutor on your own.',
  lead: 'Delivery apps, ride-hailing, planning maps and AI agents can all need to answer the same question, over and over: is this point inside that boundary? It is called the point-in-polygon problem, and it has a famous solution called ray casting that fits in ten lines of Python. This project takes the official boundary of Aylesbury Town Council from OpenStreetMap, 1,584 corner points long, tests 1,394 real shops, cafés, car parks and other places against it, and runs into the traps along the way: a shortcut that is wrong one time in seven, a bug that hides at the corners, and the discovery that "Aylesbury" depends on which boundary you pick.',
  wa: 'Hello Modern Age Coders, we would like a free AI or programming lesson for a learner in Aylesbury.',

  picks: {
    eyebrow: 'Aylesbury course picks',
    h2: 'Thinking, vibe coding and AI courses in Aylesbury',
    intro: 'Choose by age and interest. The first live lesson of each course is free, and booking takes no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: shapes, maps, inside-or-outside puzzles and tricky edge cases.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps built by describing them to AI and testing them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Python, geometry and data on the way to AI, including this boundary project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Language models, tools and agents that work with real maps and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Aylesbury',
      h2: 'Aylesbury, its suburbs and its boundaries',
      intro: 'The census count for the built-up area, and the neighbourhoods recorded around the town.',
      body: [
        { kind: 'table', caption: 'Aylesbury and two more Buckinghamshire built-up areas, 2021 census counts from the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Aylesbury', '87,950'],
          ['Wendover', '8,730'],
          ['Stoke Mandeville', '2,850']
        ] },
        { kind: 'p', text: 'These are separate ONS figures, shown as published. The ONS built-up area is not the same shape as Aylesbury Town Council\'s area, which is a civil parish, and the project below shows how much that matters. Walton Court, Bedgrove, Southcourt, Quarrendon, Elmhurst, Haydon Hill, Watermead, Berryfields and Kingsbrook are all recorded as suburban areas in Buckinghamshire. Local schools teach England\'s national curriculum, and lessons skip whatever holiday weeks you tell us.' },
        { kind: 'callout', h3: 'Buckinghamshire, the region and our approach', p: 'More options are on <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">coding classes in Buckinghamshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Why thinking comes before prompting is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Aylesbury project',
      h2: 'Inside or outside? Testing real places against the Town Council boundary',
      intro: 'Build the boundary from OpenStreetMap, test every shop and amenity with ray casting, and find where the shortcuts and bugs hide.',
      body: [
        { kind: 'p', text: 'OpenStreetMap stores the boundary of Aylesbury Town Council, tagged as a civil parish, as 18 separate lines. The learner joins them end to end into one closed shape with 1,584 corner points, and works out its area with the shoelace formula: 14.01 square kilometres. Then the map data for the surrounding rectangle comes down in twelve tiles, because the full rectangle is too big for one request, giving 1,405 places tagged as a shop or an amenity. In OpenStreetMap "amenity" covers far more than cafés: the commonest are car parks, benches, bins and post boxes.' },
        { kind: 'p', text: 'Ray casting works like this: from the point, imagine a line running off to the right, and count how many times it crosses the boundary. An odd number means inside, even means outside. A second method, the winding number, adds up how many times the boundary wraps around the point. On all 1,394 places in the rectangle the two methods agree exactly, which is a good sign that both are coded correctly.' },
        { kind: 'table', caption: 'Real places checked against the Town Council line (Python, OpenStreetMap data, 29 September 2026)', head: ['Check', 'Outcome'], rows: [
          ['Places inside the boundary\'s rectangle', '1,394'],
          ['Actually inside the boundary (ray casting)', '1,199'],
          ['In the rectangle but outside the boundary', '195'],
          ['Winding number agrees with ray casting', '1,394 of 1,394'],
          ['A naive ray test that miscounts at corners: wrong answers', '1,401 of 1,583 corner-level test points'],
          ['Places within 10 m of the boundary line', '8']
        ] },
        { kind: 'p', text: 'Three lessons stand out. First, the tempting shortcut of checking only the surrounding rectangle is wrong for 195 of the 1,394 places, about one in seven, because the parish fills only 55.4% of its rectangle. The rectangle is still useful as a quick first filter, just never as the answer. Second, ray casting has a famous bug. If the imaginary line passes exactly through a corner, a careless version counts that corner twice, once for each side that meets there. The learner builds that careless version and tests points placed exactly level with each corner: it gives the wrong answer for 1,401 of 1,583 of them. Real data rarely lines up so exactly, which is how such a bug can go unnoticed. Third, eight places sit within 10 m of the line, close enough that small errors in the mapped boundary could flip the answer.' },
        { kind: 'p', text: 'Finally, the same code settles a local puzzle. Testing the reference point for each recorded suburb shows Walton Court, Bedgrove, Southcourt, Quarrendon, Elmhurst and Haydon Hill inside the Town Council area, but Watermead, Berryfields and Kingsbrook outside it, along with the villages of Stoke Mandeville and Bierton. Many people would call all of those "Aylesbury"; the Town Council boundary does not. Neither answer is wrong. They are different definitions, and any program has to pick one on purpose.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a wiggly shape, put dots inside and outside, and count line crossings with a ruler.' },
          { h3: 'Ages 11 to 15', p: 'Code ray casting in Python and test it on a small hand-made shape before real data.' },
          { h3: 'Ages 15 and up', p: 'Stitch the real boundary, compare ray casting with the winding number and hunt the corner bug.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap boundary, our geometry', p: 'The boundary and places are from OpenStreetMap and its contributors under the Open Database Licence, and suburb reference points are from postcodes.io. The stitching, areas, tests and counts are our own work and are not an official statement of any boundary.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Boundaries and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An easy-sounding question can hide a definition and a dozen edge cases.',
      body: [
        { kind: 'table', caption: 'From the Aylesbury boundary to AI-built software', head: ['In the boundary project', 'In AI tools and agents'], rows: [
          ['The rectangle shortcut was wrong for 195 places', 'Fast approximations need a proper check behind them'],
          ['Two methods agreed on every place', 'Test code against an independent method'],
          ['The corner bug hid in exact cases', 'Write tests for the awkward edge cases on purpose'],
          ['Eight places sat within 10 m of the line', 'Answers near a boundary deserve extra care'],
          ['Three suburbs fell outside one definition', 'Decide which definition an agent should use']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for a point-in-polygon function and you will often get ray casting, and whether it handles corners correctly has to be tested. When our Aylesbury learners vibe code, describing a program for an AI to draft, they test the draft against the winding number and against points deliberately placed level with corners. AI agents that answer "is this address in the delivery zone?" or "which school catchment is this?" rest on exactly this test, and on the choice of boundary behind it. Agents are for older teenagers and adults once Python is comfortable, and Copilot Studio agent lessons are one-to-one only. Two pages explain more: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agent building for students in the UK</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Aylesbury Town Council, OpenStreetMap, the ONS and postcodes.io. Their open data made this possible, and the geometry, flaws included, is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From dot-and-shape puzzles to geometry code',
    intro: 'We take the school year as a first clue and let the free lesson decide the starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Shapes, maps and inside-or-outside reasoning.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and geometry', p: 'Coordinates, algorithms and edge-case testing beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Geospatial Python and agents', p: 'Maps, data and AI agents that work with real places.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and geography',
    h2: 'How does a computer know if a place is inside a boundary?',
    intro: 'Usually by ray casting: count how often a line from the point crosses the boundary; odd means inside.',
    p1: 'In Aylesbury it sorted 1,394 places correctly, agreed perfectly with a second method, and exposed a shortcut that was wrong one time in seven. A careless version failed on almost every point level with a corner.',
    p2: 'Learners who have built and broken it themselves check the edge cases in any location-aware tool, including the answers AI agents give about places.',
    closer: 'An Aylesbury teenager who can test geometry code properly will use AI with real judgement, one of the strongest reasons to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Bedgrove to Berryfields, online',
    intro: 'Laptop or desktop plus broadband that can carry video, and you are ready.',
    cells: [
      { h3: 'Hands-on learners', p: 'Students type, prompt and run everything themselves; the tutor watches their screen and asks what should happen next.' },
      { h3: 'Trial-based placement', p: 'The free lesson shows the real starting point, whatever the school year, and exam boards are noted.' },
      { h3: 'Free first session', p: 'No fee for lesson one, which ends with our recommendation.' },
      { h3: 'Level-based groups', p: 'Each class has five to ten learners from around Britain at a shared level.' },
      { h3: 'Twice a week', p: 'Lessons break for school holidays.' },
      { h3: 'Unchanging times', p: 'Tutors adjust for British Summer Time, so your lesson hour holds.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at one level, all free at the same time, are rarely near neighbours. Online, they share a class regardless.' }
  },

  fees: {
    h2: 'Aylesbury fees',
    intro: 'Aylesbury learners pay our international rate, applied everywhere apart from India.',
    first: 'A full lesson free to begin, ending with a course suggestion.',
    group: 'Around eight live group lessons a month.',
    private: 'Around eight live one-to-one lessons a month.',
    closer: 'Fees are set in US dollars rather than pounds. We only raise an invoice after the trial, once a course and a weekly time are fixed; see the pricing page for time away, missed lessons and format changes.'
  },

  reviewsH2: 'Google reviews: Buckinghamshire and the rest of Britain',

  book: {
    h2: 'Book a free Aylesbury lesson',
    intro: 'Share an age or year group and what the learner enjoys. Trial ideas: an inside-or-outside map puzzle, an AI-assisted Scratch game, some first Python, or testing points against a shape they draw.',
    success: 'Thank you. Your Aylesbury request has arrived.'
  },

  faq: {
    h2: 'Aylesbury questions',
    intro: 'The boundary project, point in polygon, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Aylesbury?', a: 'At the 2021 census the Aylesbury built-up area had 87,950 residents, according to the ONS.' },
      { q: 'Do you run AI and programming classes for Aylesbury?', a: 'Yes, live online, for learners aged 6 to 67 in Aylesbury and across Buckinghamshire.' },
      { q: 'What is the point-in-polygon problem?', a: 'Deciding whether a point lies inside a shape such as a boundary; ray casting and the winding number are the two standard methods.' },
      { q: 'What is the Aylesbury project?', a: 'Learners test 1,394 real places against the Aylesbury Town Council boundary from OpenStreetMap, compare two methods, hunt a corner bug and see which suburbs fall inside.' },
      { q: 'Is vibe coding taught?', a: 'Yes, for all ages, with the learner planning and testing everything the AI writes.' },
      { q: 'Do you teach AI agents?', a: 'Python first, agents second: most start in their late teens or as adults, and Copilot Studio agents are taught privately.' },
      { q: 'Are lessons in person?', a: 'No, every lesson is live online.' },
      { q: 'Is there GCSE and A level help?', a: 'Computer science and maths, yes, for real understanding; we never promise a grade.' },
      { q: 'How much are lessons?', a: 'Nothing for the first lesson, then USD 100 monthly in a class or USD 150 monthly one-to-one.' },
      { q: 'Do lessons run during school holidays?', a: 'No, they pause. Let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Buckinghamshire and South East pages',
    html: 'Elsewhere in the county, <a class="cg-inline-link" href="/best-coding-class-in-milton-keynes">Milton Keynes</a> runs a Monte Carlo project, and grammar-school families can use <a class="cg-inline-link" href="/11-plus-maths-tuition-buckinghamshire">11 plus maths tuition in Buckinghamshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Aylesbury and Buckinghamshire',
  footerPlaces: [
    { href: '/coding-classes-in-buckinghamshire', label: 'Buckinghamshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ayl .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-ayl .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-ayl .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-ayl .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ayl .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-ayl .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-ayl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ayl .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ayl .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-ayl .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'ONS 2021 BUAs (published): Aylesbury 87,950; Wendover 8,730; Stoke Mandeville 2,850. OpenStreetMap relation 3087398: Aylesbury Town Council, civil_parish, ref:gss E04001559. postcodes.io (Buckinghamshire) suburban areas: Walton Court, Bedgrove, Southcourt, Quarrendon, Elmhurst, Haydon Hill, Watermead, Berryfields, Kingsbrook.',
    localProject: 'Boundary ring 1,584 vertices from 18 outer ways; area 14.01 km2, bounding box 25.3 km2 (55.4%). 1,405 shop or amenity features (12 tiles); 1,394 in the box; 1,199 inside (ray casting); 195 box-only; winding number agrees 1,394/1,394; naive vertex-inclusive ray test wrong on 1,401 of 1,583 vertex-level points; 8 within 10 m of the line. Suburb reference points inside: Walton Court, Bedgrove, Southcourt, Quarrendon, Elmhurst, Haydon Hill; outside: Watermead, Berryfields, Kingsbrook, Stoke Mandeville, Bierton. Lesson family: point in polygon, ray casting vs winding, vertex trap, bounding-box filter, definitions.',
    requiredMentions: [
      '87,950',
      'Aylesbury Town Council',
      'Bedgrove',
      'Walton Court',
      'Watermead',
      'Southcourt',
      'Berryfields',
      'ray casting',
      'winding number',
      '1,584'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'OpenStreetMap relation 3087398, Aylesbury Town Council civil parish boundary (ODbL).', url: 'https://www.openstreetmap.org/relation/3087398' },
      { claim: 'OpenStreetMap API 0.6 map data for the boundary rectangle (12 tiles), OpenStreetMap and contributors.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas and villages in Buckinghamshire around Aylesbury.', url: 'https://api.postcodes.io/places?q=Bedgrove' }
    ],
    rejectedClaims: [
      'Market town or county town history: not read from a source; not claimed.',
      'That the OpenStreetMap line is the legal boundary: described only as the mapped Town Council area.',
      'That a whole suburb lies inside or outside: only its postcodes.io reference point was tested; stated that way.',
      'Named schools, catchments and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
