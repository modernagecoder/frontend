'use strict';
// Cheshunt (cg- town page, UK cluster Phase 10, towns band B, row 541). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how big is a lake when you can only see
// it through pixels, and why do jagged edges give wrong answers? (anti-aliasing: centre sampling vs supersampling).
// Data (read 30 September 2026): OpenStreetMap via one Overpass query, natural=water ways and relations in the box
// 51.68 to 51.73 N, 0.06 W to 0.01 E. Kept: 17 named features that are not tagged canal, pond or pool, outer rings
// joined, islands (inner rings) removed. Exact areas by the shoelace formula on a flat local projection: Holyfield
// Lake 50.10 ha, Seventy Acres Lake 20.14, North Metropolitan Pit 16.89 (19 islands), Bowyers Water 13.13, Hooks
// Marsh Lake 9.49 (24 islands), Police Pit 8.52, Cheshunt Lake 5.96, Ashley 5.46, Friday Lake 4.55, Cheshunt
// Reservoir North 2.45, Lee Pit 2.11, Railway Pit 1.90, Marsh Pit 1.12, Britannia Lake 0.98, Boot Pit 0.88, Turnford
// Pit South 0.58, New Hill Clay Pit 0.56.
// Rasterised (scratchpad csh/ras.py, seed 2026) at 100 m and 50 m pixels with 8 random grid positions and at 20 m
// with 3; one sample per pixel centre vs 16 (4 x 4) per pixel. Mean absolute area error over the 17 lakes: 100 m
// 29.4% vs 3.6%; 50 m 9.9% vs 1.2%; 20 m 3.7% vs 0.3%. Mean spread across grid positions (range / area): 100 m 93.8%
// vs 11.8%; 50 m 36.5% vs 4.0%; 20 m 5.6% vs 0.6%. Worst lake, 100 m centre sampling: 111.3%. Cheshunt Lake 5.96 ha:
// 100 m centre 3.0 to 9.0 ha, 16 samples 5.69 to 6.19; 50 m centre 5.25 to 6.00, 16 samples 5.92 to 6.02. New Hill
// Clay Pit 0.56 ha: 100 m centre 0.0 to 1.0 ha, 16 samples 0.56 to 0.69. Holyfield Lake: 100 m centre 45.0 to 54.0 ha,
// 16 samples 49.88 to 50.31.
// Lesson family: anti-aliasing and supersampling (rasterisation, coverage, grid-position dependence).
// Place facts: Broxbourne (E07000095) TS001 99,009. ONS 2021 BUAs (published): Cheshunt 43,680; Waltham Cross 11,940.
// postcodes.io suburban areas with nearest postcode in the Cheshunt BUA: Flamstead End, Rosedale, Hammond Street,
// Bury Green, Churchgate. Turnford and Wormley: nearest postcode in the Hoddesdon BUA.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CHESHUNT', label: 'Cheshunt', blurb: 'Coding and AI classes for Cheshunt in Broxbourne, with a graphics project that measures the local lakes through pixels.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-cheshunt',
  code: 'csh',
  accent: '#744426',
  accentRationale: 'Cheshunt: a muted clay brown (8.08:1 contrast on white, 6.56:1 on the darkest paper tint), picked by hand under the muted-accent rule, at least 40 RGB steps from East of England pages and neighbouring rows',
  pageType: 'city',
  place: {
    name: 'Cheshunt',
    eyebrow: 'Cheshunt, Broxbourne, Hertfordshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'Enfield', href: '/coding-classes-in-enfield-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cheshunt, Hertfordshire',
  title: 'Coding and AI Classes in Cheshunt, Hertfordshire | Ages 6 to 67',
  description: 'Live online coding, AI, Python and vibe coding classes for Cheshunt, Flamstead End, Rosedale, Hammond Street and Bury Green, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Cheshunt, Hertfordshire, with a graphics project: 17 local lakes drawn in pixels, and how supersampling cuts area errors from 29.4% to 3.6%.',
  twitterDescription: 'Cheshunt, Hertfordshire: coding, AI, Python and vibe coding lessons on live video for ages 6 to 67, beginning with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Cheshunt, Hertfordshire',
    description: 'Coding, AI, Python, graphics, vibe coding and maths for children, teenagers and adults in Cheshunt and across Broxbourne, taught live online by tutors who ask learners to measure how wrong an answer could be.'
  },

  h1: 'Coding and AI classes in Cheshunt, Hertfordshire',
  capsuleQ: 'What are the best coding and AI classes for Cheshunt learners?',
  capsule: 'The Cheshunt built-up area had 43,680 residents at the 2021 census and the borough of Broxbourne 99,009, according to the ONS. Flamstead End, Rosedale, Hammond Street, Bury Green and Churchgate are suburban areas of the town in postcode data. We teach coding, AI, Python, vibe coding and maths to Cheshunt learners from six to 67, live online with tutors based in India, as private lessons or in level-matched groups of five to ten. Learners here are taught to ask how far wrong an answer could be, a question that matters just as much when the answer comes from an AI. The Cheshunt project draws 17 local lakes as grids of pixels and shows how the way you colour each pixel decides whether a lake keeps its true size. Lesson one is on us and closes with a course recommendation; carrying on is USD 100 per month in a group or USD 150 per month on your own with a tutor.',
  lead: 'Every image on a screen is a grid of little squares, and every smooth shape has to be squeezed into that grid. Do it carelessly and edges turn into staircases, thin features vanish, and anything measured from the picture comes out wrong. The fix, used in video games, photo software and mapping alike, is called anti-aliasing: instead of asking one question per pixel, ask several and average. The lakes and flooded pits mapped around Cheshunt, from Holyfield Lake at about 50 hectares down to New Hill Clay Pit at little more than half a hectare, make a handy test set. Draw each one in pixels, measure its area, and see how far the two ways of drawing drift from the truth.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Cheshunt.',

  picks: {
    eyebrow: 'Cheshunt course picks',
    h2: 'Coding, thinking and AI courses chosen for Cheshunt',
    intro: 'Four starting points by age. Whichever you choose, lesson one is live, free and booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: colour a pond on squared paper two ways and decide which drawing tells the truth about its size.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children have an AI draw Scratch sprites, then spot and smooth the jagged edges themselves.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Images, pixels and machine learning, with the Cheshunt lakes as a rasterisation project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web graphics made with AI help, each one checked against an exact answer.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town',
      h2: 'Cheshunt, Flamstead End and the neighbourhoods around them',
      intro: 'Places named in postcode data around Cheshunt, with the outward code and built-up area of each one\'s nearest postcode.',
      body: [
        { kind: 'table', caption: 'Places around Cheshunt in postcodes.io, with the postcode district and ONS built-up area of the nearest postcode', head: ['Place', 'Postcode district', 'Built-up area'], rows: [
          ['Flamstead End', 'EN7', 'Cheshunt'],
          ['Rosedale', 'EN7', 'Cheshunt'],
          ['Hammond Street', 'EN7', 'Cheshunt'],
          ['Bury Green', 'EN7', 'Cheshunt'],
          ['Churchgate', 'EN8', 'Cheshunt'],
          ['Waltham Cross', 'EN8', 'Waltham Cross'],
          ['Turnford', 'EN10', 'Hoddesdon'],
          ['Wormley', 'EN10', 'Hoddesdon']
        ] },
        { kind: 'p', text: 'The ONS published 43,680 residents for the Cheshunt built-up area and 11,940 for Waltham Cross in 2021, each rounded and each its own figure; Broxbourne\'s 99,009 counts the whole borough. Turnford and Wormley sit in the Hoddesdon built-up area on this measure, so they are not listed as parts of Cheshunt. Schools across the borough use the national curriculum for England, and holiday weeks you share with us stay lesson-free.' },
        { kind: 'callout', h3: 'Hertfordshire, the East of England and why we teach this way', p: 'See <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">coding classes in Hertfordshire</a> for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> for the region. Our case for thinking first and tools second is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cheshunt project',
      h2: 'Seventeen lakes in pixels: centre sampling against supersampling',
      intro: 'Measure each lake exactly from its outline, draw it on a pixel grid two ways, and compare the areas.',
      body: [
        { kind: 'p', text: 'The learner downloads the 17 named lakes, reservoirs and old pits that OpenStreetMap shows in a box around Cheshunt, leaving out canals, ponds and pools. Several have islands, 24 of them in Hooks Marsh Lake alone, and the islands are cut out. The shoelace formula, a few lines of Python, gives each outline\'s exact area: 50.10 ha for Holyfield Lake, 5.96 ha for Cheshunt Lake and 0.56 ha for New Hill Clay Pit. Then the lakes are drawn on square grids of pixels 100 m, 50 m and 20 m across. The simple way colours a pixel if its centre falls in water. The anti-aliased way tests 16 points spread through each pixel and colours it by the share that are wet.' },
        { kind: 'table', caption: 'Average area error over the 17 lakes, by pixel size and drawing method (our Python run, several random grid positions)', head: ['Pixel size', 'One sample per pixel', '16 samples per pixel'], rows: [
          ['100 m', '29.4%', '3.6%'],
          ['50 m', '9.9%', '1.2%'],
          ['20 m', '3.7%', '0.3%']
        ] },
        { kind: 'p', text: 'The bigger surprise is how much the simple drawing depends on luck. Slide the grid a few metres and the answer jumps. With 100 m pixels and one sample each, Cheshunt Lake came out anywhere from 3.0 ha to 9.0 ha over eight grid positions, and New Hill Clay Pit was either missing altogether or a full hectare, nothing in between. Averaged over all 17 lakes, the gap between the largest and smallest answer was 93.8% of the true area. With 16 samples per pixel that gap fell to 11.8%, and Cheshunt Lake stayed between 5.69 ha and 6.19 ha. That jumpiness is what the word aliasing describes: a pattern finer than the grid gets misread as something else, and a small shift changes the story.' },
        { kind: 'p', text: 'There is also a trade worth noticing. Anti-aliased 100 m pixels, at 16 samples per hectare, came within 3.6% on average, about the same as simple 20 m pixels at 25 samples per hectare, 3.7%. Where the samples go matters as much as how many there are.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Trace a pond onto squared paper, colour squares two ways, count them, and compare with a careful measurement.' },
          { h3: 'Ages 11 to 15', p: 'Code the shoelace formula and a point-in-polygon test in Python, then draw one lake at three pixel sizes.' },
          { h3: 'Ages 15 and up', p: 'Rasterise all 17 lakes, randomise the grid position, and chart error and spread for both methods.' }
        ] },
        { kind: 'callout', h3: 'Where the outlines come from, and the limits', p: 'Lake outlines are from OpenStreetMap contributors under the Open Database Licence. A mapped outline is itself an approximation of the shore, so "exact" here means exact for the outline, not for the water on any given day. Areas use a flat projection that is accurate to far better than 1% over a few kilometres. The pixel grids, sample patterns and error figures are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Pixels and AI',
      h2: 'Why this matters for AI and vibe coding',
      intro: 'Much of what AI knows about the world arrives as grids of pixels, with all the errors that brings.',
      body: [
        { kind: 'table', caption: 'From Cheshunt lakes to AI practice', head: ['In the Cheshunt run', 'In AI practice'], rows: [
          ['A small pit vanished or doubled at 100 m', 'Small objects can disappear when images are shrunk'],
          ['Sliding the grid changed the answer', 'Test whether a result survives a small shift in input'],
          ['16 samples per pixel cut error from 29.4% to 3.6%', 'How data is sampled matters as much as how much'],
          ['The exact area came from the outline', 'Keep an exact check beside every approximation'],
          ['Anti-aliasing smooths games the same way', 'One idea runs through graphics, maps and vision']
        ] },
        { kind: 'p', text: 'Image recognition systems work on pixel grids, often after the picture has been shrunk to save computing time, and a feature a pixel or two wide can blur away or turn into something it is not. Researchers test vision models by shifting images a few pixels and checking whether the answer changes, which is the Cheshunt experiment in another form. Vibe coders meet the same issue on day one: ask an assistant to draw a circle or measure a shape in pixels and it will, but whether its answer depends on where the grid happens to sit is for the learner to check. Agent building follows fluent Python, usually from sixth form; anything in Copilot Studio is taught privately. Our views on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">reading code instead of pasting it</a> and the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">student agents route</a> go further.' },
        { kind: 'p', text: 'OpenStreetMap contributors, the Office for National Statistics and postcodes.io supplied the data and do not endorse this page. The drawings and measurements are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From squared paper to rendering',
    intro: 'We begin with a school year as a guide and set the level in the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimating, measuring and asking how wrong an estimate might be.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Pictures and games made with an AI helper and checked by eye and by count.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, graphics and AI', p: 'Geometry in code, images and models, next to GCSE and A level study.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI with a sense of error', p: 'Solid Python, then generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Graphics and AI',
    h2: 'What is anti-aliasing?',
    intro: 'Anti-aliasing is any technique that reduces the jagged edges and false patterns that appear when a smooth shape is drawn on a grid of pixels, most simply by taking several samples inside each pixel and averaging them.',
    p1: 'Drawing 17 lakes near Cheshunt with 100 m pixels, one sample per pixel missed the true area by 29.4% on average, while 16 samples per pixel missed by 3.6%.',
    p2: 'The simple method also depended on luck: moving the grid changed Cheshunt Lake from 3.0 ha to 9.0 ha, against 5.69 ha to 6.19 ha with anti-aliasing.',
    closer: 'A Cheshunt teenager who has seen a lake double in size because a grid moved will look harder at any measurement a computer, or an AI, produces. You only get that instinct by writing code and seeing it go wrong, so learning to code keeps its value in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons',
    h2: 'Flamstead End, Rosedale and Hammond Street on a live call',
    intro: 'Use a desktop or laptop with a webcam; a typical home connection is enough.',
    cells: [
      { h3: 'Learning by building', p: 'Hands on their own keyboard, learners build while the tutor watches the screen and asks them to guess each outcome first.' },
      { h3: 'Placed after the trial', p: 'During the free session the tutor works out the right starting course, and notes any exam board too.' },
      { h3: 'Free first lesson', p: 'It costs nothing, needs no card, and closes with a course suggestion.' },
      { h3: 'Groups at one level', p: 'Five to ten learners who share a stage, gathered from across the UK.' },
      { h3: 'Twice weekly', p: 'Holiday dates you send stay free of lessons.' },
      { h3: 'Unmoved by clock changes', p: 'When the clocks change, our tutors adjust and your lesson time holds.' }
    ],
    spec: { title: 'Why online', p: 'Matching learners by level takes more learners than any one borough has. Across the UK, there are enough.' }
  },

  fees: {
    h2: 'Cheshunt fees',
    intro: 'Our international price list, which covers every country apart from India, is what Cheshunt families pay.',
    first: 'A free full-length lesson ending in a suggested course.',
    group: 'Roughly eight live group lessons a month.',
    private: 'Roughly eight live private lessons a month.',
    closer: 'Fees are charged in US dollars, with no sterling figure given. Nothing is charged before you have agreed a course and a weekly slot after the trial. Breaks, missed lessons and format changes are all explained on the pricing page.'
  },

  reviewsH2: 'Reviews on Google from Hertfordshire and further afield',

  book: {
    h2: 'Book a free lesson for Cheshunt',
    intro: 'Give us the learner\'s age, or their year at school, plus something they like doing. The trial might be a pixel-drawing puzzle, an AI-assisted Scratch game, a first Python program, or measuring a real lake from its outline.',
    success: 'Thank you. The Cheshunt request is with us and we will respond soon.'
  },

  faq: {
    h2: 'Cheshunt questions',
    intro: 'Pixels, the lake project, coding, AI and the practical points.',
    items: [
      { q: 'How many people live in Cheshunt?', a: 'At the 2021 census the ONS counted 43,680 residents in the Cheshunt built-up area; the borough of Broxbourne had 99,009.' },
      { q: 'Are coding and AI classes available online in Cheshunt?', a: 'Yes. All lessons are live video for ages 6 to 67, so Flamstead End, Rosedale, Hammond Street, Bury Green and Churchgate are covered.' },
      { q: 'What does supersampling mean?', a: 'Taking several samples inside each pixel instead of one and colouring the pixel by their average, which smooths edges and makes measurements from the image more accurate.' },
      { q: 'What is the shoelace formula?', a: 'A way to find the area of any polygon from the coordinates of its corners by cross-multiplying neighbouring pairs, named for the criss-cross pattern of the working.' },
      { q: 'What happens in the Cheshunt project?', a: 'Learners load 17 lake outlines in Python, find exact areas, draw each lake at 100 m, 50 m and 20 m pixels two ways, and measure the error and the luck involved.' },
      { q: 'Does the course include vibe coding?', a: 'Yes, at every age. The learner asks an AI for code, then checks it, here against an exact area the AI did not compute.' },
      { q: 'How soon can a learner build AI agents?', a: 'As soon as their Python stands up without help, which for most means sixth form onward. Copilot Studio agents are a private-lesson course.' },
      { q: 'Can you support GCSE and A level?', a: 'Yes, for computer science and maths, focused on understanding. Grades are never promised.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After that a group place is USD 100 per month and one-to-one lessons are USD 150 per month.' },
      { q: 'Can lessons pause for school holidays?', a: 'Yes. Send us the dates and we keep those weeks clear.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Cheshunt',
    h2: 'More pages for Hertfordshire and the East of England',
    html: 'More projects are on the <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-harlow">Harlow</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-welwyn-garden-city">Welwyn Garden City</a> and <a class="cg-inline-link" href="/coding-classes-in-enfield-london">Enfield</a> pages, and the county page is <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everything else.',
    waLabel: 'Contact us on WhatsApp'
  },

  footerHeading: 'Cheshunt and Hertfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-csh .cg-hero-grid { align-items: center; gap: clamp(1.3rem, 3.9vw, 3.2rem); }
.cg-root.cg-csh .cg-hero h1 { font-weight: 730; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-csh .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 4px; padding: 0.95rem 1.05rem; }
.cg-root.cg-csh .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-csh .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.019em; }
.cg-root.cg-csh .cg-table caption { text-align: left; font-size: 0.88rem; font-weight: 650; }
.cg-root.cg-csh .cg-table td { font-variant-numeric: tabular-nums slashed-zero; }
.cg-root.cg-csh .cg-table th { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em; }
.cg-root.cg-csh .cg-ladder-col { border: 1px solid var(--cg-accent); border-radius: 4px; padding: 0.7rem 0.8rem; }
.cg-root.cg-csh .cg-callout { border-left-width: 3px; border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Broxbourne (E07000095), Census 2021 TS001 usual residents 99,009. ONS 2021 BUAs (published): Cheshunt 43,680; Waltham Cross 11,940. The Hoddesdon BUA (40,615) extends beyond the borough and is not quoted. postcodes.io: Flamstead End (EN7), Rosedale (EN7), Hammond Street (EN7), Bury Green (EN7), Churchgate (EN8): suburban areas with nearest postcode in the Cheshunt BUA; Waltham Cross (EN8, own BUA); Turnford and Wormley (EN10, nearest postcode in the Hoddesdon BUA).',
    localProject: 'OpenStreetMap via one Overpass query: natural=water ways and relations in 51.68 to 51.73 N, 0.06 W to 0.01 E; 17 named features not tagged canal, pond or pool; outer rings joined, islands removed. Exact areas (shoelace, flat local projection): Holyfield Lake 50.10 ha; Seventy Acres Lake 20.14; North Metropolitan Pit 16.89 (19 islands); Bowyers Water 13.13; Hooks Marsh Lake 9.49 (24 islands); Police Pit 8.52; Cheshunt Lake 5.96; Ashley 5.46; Friday Lake 4.55; Cheshunt Reservoir North 2.45; Lee Pit 2.11; Railway Pit 1.90; Marsh Pit 1.12; Britannia Lake 0.98; Boot Pit 0.88; Turnford Pit South 0.58; New Hill Clay Pit 0.56. Rasterised with random grid offsets (8 at 100 m and 50 m, 3 at 20 m; seed 2026). Mean absolute area error, 1 vs 16 samples per pixel: 100 m 29.4% vs 3.6%; 50 m 9.9% vs 1.2%; 20 m 3.7% vs 0.3%. Mean spread across offsets (range / area): 100 m 93.8% vs 11.8%; 50 m 36.5% vs 4.0%; 20 m 5.6% vs 0.6%. Worst lake at 100 m, 1 sample: 111.3%. Cheshunt Lake: 100 m 1 sample 3.0 to 9.0 ha, 16 samples 5.69 to 6.19; 50 m 5.25 to 6.00 vs 5.92 to 6.02. New Hill Clay Pit: 100 m 1 sample 0.0 to 1.0 ha, 16 samples 0.56 to 0.69. Lesson family: anti-aliasing and supersampling in rasterisation.',
    requiredMentions: [
      '99,009',
      '43,680',
      'Flamstead End',
      'Hammond Street',
      'Bury Green',
      'Holyfield Lake',
      'New Hill Clay Pit',
      'anti-aliasing',
      'supersampling',
      '29.4%',
      'Hooks Marsh Lake'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors: water areas around Cheshunt, via the Overpass API, under the Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest postcodes: suburban areas of Cheshunt, their postcode districts and built-up areas.', url: 'https://api.postcodes.io/places?q=Flamstead%20End' }
    ],
    rejectedClaims: [
      'County or park that each lake lies in: not claimed; some lie outside Hertfordshire and ownership was not read.',
      'History of the gravel pits or glasshouse industry: not read from a source; not claimed.',
      'That supersampling always beats a finer grid: not claimed; one comparison at similar sample density gave similar error.',
      'Turnford and Wormley as parts of Cheshunt: rejected; their nearest postcodes lie in the Hoddesdon built-up area.',
      'Rank of Cheshunt among Broxbourne towns: not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
