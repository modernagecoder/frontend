'use strict';
// Blaenau Gwent (cg- county page, UK cluster Phase 7, row 284). One principal area. Spine: how does a camera turn a 21
// metre clock and a round street into a flat picture? Anchor (read raw 26 September 2026): Cadw listed building record
// 1861, Grade II*, The Town Clock, Tredegar: "Cast iron clock erected in 1858, cast by Charles Jordan of Newport,
// ironfounder"; "The clock was to be illuminated (by gas) and to be prominently visible, in order to be viewed by
// ironworkers and other townspeople day and night"; "the clock struck on the quater and half-hours"; "The Circle
// originally grew as a square in the early C19, but the forceful prescence of the clock inclined later developers to follow
// its radius"; "standing on a giant Tuscan column, 70 feet (21.34 metres) high"; "cardinal faces, Roman numerals to dials";
// "Listed as an extremely rare and remarkable cast iron town clock".
// Our model (scratchpad wal/persp.py; camera and street invented): pinhole camera at eye height 1.6 m, level, 26 mm
// 35mm-equivalent lens, frame 24 mm tall (half-angle 24.8 deg). Angles to the clock top / base: 10 m 63.1 / 9.09; 20 m
// 44.6 / 4.57; 40 m 26.3 / 2.29; 80 m 13.9 / 1.15; 160 m 7.0 / 0.57 deg. Image height of the whole clock: 55.5, 27.7, 13.9,
// 6.9, 3.5 mm. A level camera fits the top from 42.8 m. Invented circular street radius 25 m around the clock, projected
// with x = X/Z, y = -eye/Z: height/width 0.051 at 40 m, 0.029 at 60 m, 0.017 at 100 m, 0.008 at 200 m; roughly eye / d
// (0.027, 0.016, 0.008).
// Lesson family: perspective projection, pinhole camera, circles becoming ellipses; screened (perspective projection,
// vanishing point, pinhole, focal length, field of view: 0 hits).
// Place facts: ONS Census 2021 TS001 via Nomis: Blaenau Gwent W06000019 66,904. ONS built-up areas (published; our OA sums
// within 5): Ebbw Vale 19,630; Tredegar 14,530; Abertillery 10,245; Brynmawr 5,250; Blaina 4,555; Nantyglo 4,545; Cwm
// 2,505; Llanhilleth 2,450. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'BLAENAU GWENT', blurb: 'Ebbw Vale, Tredegar, Abertillery and Brynmawr, and a Tredegar town clock lesson on how cameras flatten the world.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-blaenau-gwent',
  code: 'bgt',
  accent: '#22364C',
  accentRationale: 'Blaenau Gwent: a cast-iron blue-black for the Tredegar clock, picked by the solver (9.95:1 on the darkest paper tint), greyer than the Moray navy',
  pageType: 'governorate',
  place: {
    name: 'Blaenau Gwent',
    eyebrow: 'Blaenau Gwent',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Newport', href: '/best-coding-class-in-newport-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Blaenau Gwent',
  title: 'Coding Classes in Blaenau Gwent | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Blaenau Gwent, from Ebbw Vale, Tredegar and Abertillery to Brynmawr, Blaina, Nantyglo and Llanhilleth.',
  ogDescription: 'Coding classes for all of Blaenau Gwent, and a Tredegar clock project: build a pinhole camera in Python and watch a round street collapse into a thin ellipse.',
  twitterDescription: 'Blaenau Gwent coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Blaenau Gwent',
    description: 'Ability-placed online coding, Python, graphics maths and mathematics for children, teenagers and adults across Blaenau Gwent, taught live in English.'
  },

  h1: 'Coding classes in Blaenau Gwent',
  capsuleQ: 'What are the best coding classes in Blaenau Gwent?',
  capsule: 'Blaenau Gwent had 66,904 usual residents at the 2021 census. Ebbw Vale is its largest built-up area, followed by Tredegar and Abertillery, then Brynmawr, Blaina and Nantyglo, with smaller places such as Cwm and Llanhilleth. Our teachers work from India and teach in real time on camera; the first lesson, free of charge, pins down a starting level for anyone from Year 1 to Year 13, or an adult. Learners aged 6 to 67 take coding, Python and maths, one-to-one or in a class of five to ten. The Blaenau Gwent project begins beside the Tredegar town clock. Families who continue pay USD 100 each month for a class place or USD 150 each month for a private tutor.',
  lead: 'In the middle of Tredegar stands a cast-iron clock on a giant column, 70 feet or 21.34 metres high. Cadw lists it at Grade II* and records that it was cast by Charles Jordan of Newport and erected in 1858, lit by gas so that ironworkers could see it day and night. The record adds a lovely detail: the town square around it later grew into The Circle, because builders chose to follow the clock\'s radius. Photograph that scene and two puzzles appear. You must stand surprisingly far back to fit the clock in, and the round street looks nothing like a circle. This page\'s project explains both with the mathematics every camera and 3D game uses, in Python.',
  wa: 'Hello Modern Age Coders, we are in Blaenau Gwent and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Blaenau Gwent',
    h2: 'Where Blaenau Gwent learners begin',
    intro: 'Picture a six-year-old in Nantyglo who draws all day, a Year 8 in Tredegar itching to type real code, a Year 10 in Abertillery starting WJEC GCSE Computer Science, and a parent in Brynmawr picking up Python. A free lesson is where all four start.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with drawing, shapes and simple 3D-looking scenes.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Coordinates, ratios and angles, learned by drawing them with code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, including trigonometry and similar triangles.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from the first line for adults, up to graphics and data.' }
    ]
  },

  sections: [
    {
      id: 'blaenau-gwent', tint: '', eyebrow: 'Blaenau Gwent in figures',
      h2: 'The county borough in numbers',
      intro: 'ONS counted 66,904 usual residents here on census day in 2021, a figure we read through Nomis. The towns below are ONS built-up areas from that same census.',
      body: [
        { kind: 'table', caption: 'Towns and villages of Blaenau Gwent with over 2,000 people (ONS built-up areas, 2021)', head: ['Place', 'People', 'Place', 'People'], rows: [
          ['Ebbw Vale', '19,630', 'Blaina', '4,555'],
          ['Tredegar', '14,530', 'Nantyglo', '4,545'],
          ['Abertillery', '10,245', 'Cwm', '2,505'],
          ['Brynmawr', '5,250', 'Llanhilleth', '2,450']
        ] },
        { kind: 'p', text: 'Our own sums of census output areas agree with each published built-up area figure to within five people. Schools here follow the Curriculum for Wales, organised in progression steps, and older pupils take WJEC GCSE and A level courses. Term dates belong to Blaenau Gwent County Borough Council, and since we have not looked them up, families let us know theirs.' },
        { kind: 'callout', h3: 'Newport and Welsh exams', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a> has its own page. For qualifications, see <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Blaenau Gwent project',
      h2: 'A pinhole camera, a clock and a round street',
      intro: 'Divide by distance: the one rule behind every photograph.',
      body: [
        { kind: 'p', text: 'A pinhole camera, the model inside every photo app and 3D game, maps a point in the world to the picture by dividing its sideways and upward distances by how far away it is. The learner places a camera at an adult\'s eye height, 1.6 metres, held perfectly level, with a lens like a typical phone\'s main camera, and points it at a 21.34 metre clock. The camera and street are our assumptions; only the clock\'s height comes from the record. The program works out the angle from the level line up to the clock\'s top and down to its base at different distances, and how tall the clock would appear in the frame.' },
        { kind: 'table', caption: 'Our pinhole model of the Tredegar clock, level camera at 1.6 m, 26 September 2026', head: ['Distance', 'Angle up to the top', 'Angle down to the base', 'Clock fits a level phone frame?'], rows: [
          ['10 m', '63.1 degrees', '9.1 degrees', 'No, the top is far out of the frame'],
          ['20 m', '44.6 degrees', '4.6 degrees', 'No'],
          ['40 m', '26.3 degrees', '2.3 degrees', 'Not quite'],
          ['About 43 m', '24.8 degrees', '2.1 degrees', 'Just, top at the edge'],
          ['80 m', '13.9 degrees', '1.1 degrees', 'Yes, easily']
        ] },
        { kind: 'p', text: 'Held level, our phone-like camera sees about 24.8 degrees above the horizon and the same below. The clock\'s top is 19.7 metres above the camera, so it only fits once the camera is about 43 metres back. Stand closer and you must tilt the phone upwards, and then the column\'s sides stop looking parallel and lean in towards each other, the converging verticals every architecture photographer fights. The learner can see this by projecting the column\'s edges with the camera tilted.' },
        { kind: 'p', text: 'Now the street. The model draws an invented circular street of radius 25 metres around the clock and projects every point of it. The circle comes out as a very flat ellipse. From 60 metres away, its height in the picture is only 0.029 of its width; from 200 metres, 0.008. That ratio is close to the eye height divided by the distance, 1.6 over 60 or 1.6 over 200, which is why round plazas and roundabouts look like thin lines from the pavement and only show their shape from above. It is also why maps are drawn from overhead.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Hold a hoop at arm\'s length, lower it until it is level with your eyes, and draw how its shape changes, then recreate it in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Code the pinhole rule in Python for the clock at five distances and plot the angle to its top.' },
          { h3: 'Ages 15 and up', p: 'Project a whole circle, measure the ellipse, test the eye-over-distance rule, and add camera tilt to show converging verticals.' }
        ] },
        { kind: 'callout', h3: 'A real clock, a model camera', p: 'The clock\'s height and history come from Cadw\'s record. The camera, lens, eye height and the circular street\'s radius are our assumptions, so the table describes the mathematics, not measurements taken in Tredegar.' }
      ]
    },
    {
      id: 'tredegar-clock', tint: 'deep', eyebrow: 'Why the Tredegar clock',
      h2: 'A cast-iron clock from 1858',
      intro: 'Details from the Cadw record, in its own terms.',
      body: [
        { kind: 'table', caption: 'The Town Clock, Tredegar, Cadw listed building record 1861, Grade II*', head: ['Record detail', 'What it says'], rows: [
          ['Erected', '1858, cast by Charles Jordan of Newport, ironfounder; clock by J. Joyce of Whitchurch, Shropshire'],
          ['Height', 'On a giant Tuscan column 70 feet, 21.34 metres, high'],
          ['Purpose', 'Lit by gas and prominently visible, to be seen by ironworkers and townspeople day and night'],
          ['Sound', 'Struck on the quarter and half hours'],
          ['Town plan', 'The Circle grew from a square, as later builders followed the clock\'s radius'],
          ['Why listed', 'An extremely rare and remarkable cast-iron town clock']
        ] },
        { kind: 'p', text: 'Perspective projection is how photos, films, virtual reality, self-driving cars and computer games turn a three-dimensional world into a flat image, and how they work backwards from an image to the world. The dividing-by-distance rule in this project is the first line of every 3D graphics pipeline. A Blaenau Gwent learner who has turned a round street into an ellipse has started where game engines start.' },
        { kind: 'p', text: 'We have no connection with Cadw or Blaenau Gwent County Borough Council. Cadw\'s descriptions remain theirs, while the camera model, its numbers and any slips are our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From hoops to 3D graphics',
    intro: 'Treat these year bands as rough; the trial lesson places each learner properly.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Drawing with code', p: 'Block coding with pens, shapes and moving pictures.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Coordinates and scale', p: 'Typed Python with grids, ratios and simple drawings.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Trigonometry and graphics', p: 'Angles, projection and bigger programs alongside WJEC GCSE and A level work.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Visual Python', p: 'Python for adults, from charts to images and simple 3D.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and images',
    h2: 'An AI can draw a town square in seconds. Will its circles obey perspective?',
    intro: 'Generated pictures often get the geometry wrong in ways people only notice later.',
    p1: 'Ask an image generator for a view along a street and the result looks convincing at a glance. Look closely and round objects may be drawn too round, lines that should meet at a vanishing point may wander, and tall columns may have no convergence at all.',
    p2: 'A Blaenau Gwent learner who can compute where every point should land knows how to check a picture against the rules of perspective. That kind of checking is what separates people who use AI from people fooled by it.',
    closer: 'Seeing when a picture breaks the rules of geometry is a strong reason for Blaenau Gwent teenagers to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Tredegar to Abertillery, at home',
    intro: 'Every town in the county borough joins lessons the same way.',
    cells: [
      { h3: 'Learners do the typing', p: 'Every line is written by the pupil; the teacher watches it appear on the shared screen and asks the question that unlocks the next step.' },
      { h3: 'Years 1 to 13, WJEC included', p: 'A Tredegar Year 9 or an Ebbw Vale sixth-former is matched on the year they are in and what the Curriculum for Wales expects; exam courses carry their WJEC names. Teaching is in English.' },
      { h3: 'A free first lesson', p: 'One complete lesson with no charge, then straightforward advice.' },
      { h3: 'Small classes, one level', p: 'Between five and ten classmates, all working at the same level, some from Wales and many from further afield.' },
      { h3: 'Term time lessons', p: 'Two a week in term, none in the school holidays.' },
      { h3: 'No confusion in March or October', p: 'British clock changes leave your lesson at its usual UK hour; our teachers on India time make the adjustment.' }
    ],
    spec: { title: 'Why groups go beyond one town', p: 'Five learners at one level, free at the same hour, rarely live in one small town. Grouping by level gives a pupil in Blaina or Cwm a class that fits.' }
  },

  fees: {
    h2: 'Fees in Blaenau Gwent',
    intro: 'Ebbw Vale or Brynmawr, the fee is the same, our standard for every country outside India.',
    first: 'A full free lesson, then a recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Fees are set in US dollars; there is no sterling list. Payment begins only after the free lesson, once a course and weekly time are agreed, and the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Ratings left by families on Google',

  book: {
    h2: 'Book a free Blaenau Gwent lesson',
    intro: 'A short message with the school year and a hobby is plenty. We could start with a Scratch drawing, a first Python script, or the clock and camera on this page.',
    success: 'Thank you. Your Blaenau Gwent request has been received.'
  },

  faq: {
    h2: 'Blaenau Gwent questions',
    intro: 'The county borough, the clock project and practical points.',
    items: [
      { q: 'How many people live in Blaenau Gwent?', a: 'The 2021 census counted 66,904 usual residents in Blaenau Gwent.' },
      { q: 'What are the largest towns in Blaenau Gwent?', a: 'ONS 2021 built-up area figures: Ebbw Vale 19,630, Tredegar 14,530, Abertillery 10,245 and Brynmawr 5,250.' },
      { q: 'What is the Tredegar clock project?', a: 'Learners build a pinhole camera model in Python, find that a level phone camera must stand about 43 metres from the 21.34 metre clock to fit it in, and watch a round street become a thin ellipse.' },
      { q: 'What is perspective projection?', a: 'The rule that maps a 3D point to a flat picture by dividing its sideways and upward position by its distance from the camera.' },
      { q: 'How old is the Tredegar town clock?', a: 'Cadw records that it was erected in 1858, cast by Charles Jordan of Newport, and lists it at Grade II*.' },
      { q: 'Where are lessons held?', a: 'On video only; a pupil in Llanhilleth and one in Ebbw Vale log in the same way from home.' },
      { q: 'Can you help with WJEC GCSE Computer Science?', a: 'Yes, and with GCSE maths in Wales. Results depend on the learner, so we build understanding rather than promise grades.' },
      { q: 'What ages can learn?', a: 'Anyone from 6 to 67, from block coding for children to Python for adults.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the trial; USD 100 per month for a group seat afterwards, or USD 150 per month for one-to-one teaching.' },
      { q: 'Do lessons pause for school holidays?', a: 'They do. Pass on the holiday weeks from your school and no lessons fall in them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More South Wales pages',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-newport-wales">Newport</a>, <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> and <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a>. Every principal area gets a link on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page as its page goes live, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Blaenau Gwent and South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-newport-wales', label: 'Newport' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-bgt .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-bgt .cg-hero h1 { font-weight: 730; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-bgt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-bgt .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bgt .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-bgt .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-bgt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bgt .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-bgt .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-bgt .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Blaenau Gwent (W06000019), Blaenau Gwent County Borough Council. ONS Census 2021 TS001 via Nomis: 66,904. ONS built-up areas (published; OA sums within 5): Ebbw Vale 19,630; Tredegar 14,530; Abertillery 10,245; Brynmawr 5,250; Blaina 4,555; Nantyglo 4,545; Cwm 2,505; Llanhilleth 2,450. Cadw listed building record 1861, Grade II*, The Town Clock, Tredegar: "Cast iron clock erected in 1858, cast by Charles Jordan of Newport, ironfounder"; "made by J. Joyce of Whitchurch, Shropshire"; "illuminated (by gas) and to be prominently visible, in order to be viewed by ironworkers and other townspeople day and night"; "struck on the quater and half-hours"; "The Circle originally grew as a square in the early C19, but the forceful prescence of the clock inclined later developers to follow its radius"; "a giant Tuscan column, 70 feet (21.34 metres) high"; "Listed as an extremely rare and remarkable cast iron town clock".',
    localProject: 'Pinhole, level camera at 1.6 m, 26 mm equiv (24 mm frame, half-angle 24.8 deg). Up/down angles: 10 m 63.1/9.09; 20 m 44.6/4.57; 40 m 26.3/2.29; 80 m 13.9/1.15; 160 m 7.0/0.57. Fits from 42.8 m. Circle radius 25 m (invented): h/w 0.051 (40 m), 0.029 (60), 0.017 (100), 0.008 (200) vs eye/d 0.027, 0.016, 0.008. Lesson family: perspective projection.',
    requiredMentions: [
      'Ebbw Vale',
      'Tredegar',
      'Abertillery',
      'Brynmawr',
      'Blaina',
      'Nantyglo',
      'Llanhilleth',
      'Charles Jordan',
      'perspective projection',
      'pinhole'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Blaenau Gwent, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 1861: The Town Clock, Tredegar.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=1861' }
    ],
    rejectedClaims: [
      'Real radius of The Circle or viewing distances in Tredegar: invented in the model.',
      'Nantyglo roundhouses and worker unrest: not used.',
      'Ironworks and steelworks history beyond the clock record: not researched for this page.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Phone camera specifications beyond a typical 26 mm equivalent: labelled as an assumption.'
    ]
  }
};
