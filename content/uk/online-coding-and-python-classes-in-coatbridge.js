'use strict';
// Coatbridge (cg- town page, UK cluster Phase 8, towns band A, row 415). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how grid-like are a town's streets, and how can
// a program measure it? (street orientation: bearings of every road segment weighted by length, a 36-bin compass
// histogram, orientation entropy and an order score from 0 = all directions equal to 1 = perfect four-way grid).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls (ODbL). Coatbridge: bbox -4.065,55.845,-3.995,55.878, 6
// tiles. Contrast: Glasgow city centre, bbox -4.268,55.857,-4.245,55.868, 1 tile. Public roads only (motorway to living
// street, links), segments inside the box, both directions counted.
// Our run (scratchpad ctb/ori.py): Coatbridge 159.2 km of road in 7,195 segments; entropy 3.488 (maximum ln 36 = 3.584,
// perfect grid ln 4 = 1.386); order 1 - ((H - 1.386) / (3.584 - 1.386))^2 = 0.085; share of length within 15 degrees
// of the four main axes 33.3% (exactly what evenly spread directions give). Glasgow centre 27.9 km in 1,067 segments;
// entropy 2.179; order 0.870; 92.7% within 15 degrees of its four main axes, the strongest bins centred near 10 and 100
// degrees from north (18.7% and 21.4% of length).
// Lesson family: street network orientation (bearings, compass histogram, orientation entropy and order). Screened:
// "street orientation", "orientation order", "compass rose", "polar histogram" 0 hits. Wiltshire used atan2 bearings for
// grid versus true north; St Asaph circular means; York Shannon entropy of letters. Here entropy is only the scoring tool.
// Place facts: NRS mid-2020 localities: Coatbridge 43,950 (second in North Lanarkshire after Cumbernauld 50,530, per the
// North Lanarkshire page). postcodes.io (North Lanarkshire, ML5) suburban areas: Blairhill, Carnbroe, Cliftonville,
// Dunbeth, Gartsherrie, Greenend, Kirkwood, Langloan, Old Monkland, Rosehall, Shawhead, Sikeside, Townhead, Whifflet;
// Glenboig village.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'COATBRIDGE', label: 'Coatbridge', blurb: 'Online coding and Python classes for Coatbridge, with a project that measures how grid-like the town\'s streets are and compares them with Glasgow city centre.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-coatbridge',
  code: 'ctb',
  accent: '#7A4359',
  accentRationale: 'Coatbridge: a muted plum rose (6.1:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Coatbridge',
    eyebrow: 'Coatbridge, North Lanarkshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Lanarkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'North Lanarkshire', href: '/coding-classes-in-north-lanarkshire' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Coatbridge, Scotland',
  title: 'Online Coding and Python Classes in Coatbridge | AI, 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Coatbridge, Whifflet, Kirkwood and Carnbroe learners aged 6 to 67, live online. First lesson free.',
  ogDescription: 'Online coding and Python classes for Coatbridge, with a map project that measures how grid-like the streets are, against Glasgow city centre.',
  twitterDescription: 'Coatbridge online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Coatbridge',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Coatbridge and North Lanarkshire, taught live with sound reasoning first.'
  },

  h1: 'Online coding and Python classes in Coatbridge',
  capsuleQ: 'Which are the best online coding and Python classes in Coatbridge?',
  capsule: 'Among North Lanarkshire\'s localities only Cumbernauld is bigger than Coatbridge, which National Records of Scotland estimated at 43,950 people for mid-2020. Whifflet, Kirkwood, Carnbroe, Sikeside, Gartsherrie and Blairhill are suburbs recorded in its ML5 postcode district. Our India-based tutors teach coding, Python, AI, vibe coding and maths on live video to anyone six to 67, as one-to-one lessons or with five to ten peers at the same stage. Reasoning is taught before tools, so every learner can check a program or a chatbot answer for themselves. There is no charge for the first lesson, which ends with our course recommendation. The Coatbridge project turns 159.2 km of mapped roads into a compass chart and a single score for how grid-like the town is, then runs the same test on Glasgow city centre. After that first lesson, a group place costs USD 100 a month and one-to-one tuition USD 150.',
  lead: 'Some places are laid out on a grid, with streets running in two directions at right angles; others grew along old routes and hills, so their streets point every way. You can see the difference on a map, but a program can put a number on it. Take every road segment, work out its compass bearing, add up the length pointing in each direction, and ask how spread out those directions are. An even spread means no dominant grid; a few sharp peaks mean a strong one. This project measures Coatbridge\'s streets from OpenStreetMap and, for contrast, a rectangle of Glasgow city centre.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Coatbridge?',

  picks: {
    eyebrow: 'Coatbridge course picks',
    h2: 'Coatbridge courses in thinking, Python and AI',
    intro: 'Choose by age and interest; each course starts with a free live lesson, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: compass directions, patterns and describing order with a number.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and tested thoroughly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to maps and charts, including the Coatbridge compass project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, geometry, visualisation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Coatbridge and North Lanarkshire',
      h2: 'Coatbridge, Whifflet, Kirkwood and Carnbroe',
      intro: 'The NRS estimate for Coatbridge, and suburbs recorded in ML5.',
      body: [
        { kind: 'table', caption: 'Coatbridge in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Coatbridge locality, mid-2020', '43,950']
        ] },
        { kind: 'p', text: 'Postcodes.io records Blairhill, Carnbroe, Cliftonville, Dunbeth, Gartsherrie, Greenend, Kirkwood, Langloan, Old Monkland, Rosehall, Shawhead, Sikeside, Townhead and Whifflet as suburban areas of North Lanarkshire in the ML5 district, and Glenboig as a village. North Lanarkshire schools follow the Curriculum for Excellence, which we mirror with Scottish primary and secondary stages and SQA exam support from National 5 upward. Give us the holiday dates and lessons will leave those weeks alone.' },
        { kind: 'callout', h3: 'North Lanarkshire, Glasgow and SQA exams', p: 'More on <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">coding classes in North Lanarkshire</a>, <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> and <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths tuition</a>. Our case for thinking first is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Coatbridge project',
      h2: 'How grid-like is Coatbridge? Street orientation from OpenStreetMap',
      intro: 'Every road segment\'s bearing, a 36-slice compass chart and one order score.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle over Coatbridge and keeps the public roads: 159.2 km in 7,195 short segments. For each segment Python works out its bearing from north with atan2, counts the road both ways (a street running north also runs south), and adds its length to one of 36 slices of ten degrees. The result is a compass chart of the town. Two numbers summarise it. Orientation entropy measures how evenly the length is spread: it is 3.584 if every slice is equal and 1.386 for a perfect grid using only four directions. The order score rescales that from 0, no preferred directions, to 1, a perfect grid.' },
        { kind: 'table', caption: 'Street orientation of Coatbridge and Glasgow city centre, our Python run on OpenStreetMap data', head: ['Measure', 'Coatbridge', 'Glasgow centre'], rows: [
          ['Road length measured', '159.2 km', '27.9 km'],
          ['Orientation entropy', '3.488', '2.179'],
          ['Order score (0 to 1)', '0.085', '0.870'],
          ['Length within 15 degrees of its four main directions', '33.3%', '92.7%']
        ] },
        { kind: 'p', text: 'Coatbridge scores 0.085, close to having no preferred direction at all. A third of its road length lies near its four main directions, which is exactly what you would expect if streets pointed every way equally, since those directions cover a third of the compass. Glasgow city centre scores 0.870: 92.7% of its road length runs along four directions, with the two strongest slices, centred about 10 and 100 degrees east of north, holding 18.7% and 21.4% of all the length. The compass chart shows a cross for Glasgow and something much closer to a circle for Coatbridge.' },
        { kind: 'p', text: 'The score describes streets, not quality, and it depends on choices: the size of each slice, which roads count, and where the rectangle is drawn. Part of the exercise is changing those choices and seeing how much the answer moves.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Mark the direction of each street on a small map with a compass and tally them into eight slices.' },
          { h3: 'S1 to S3', p: 'Use atan2 in Python to find the bearing of a few Coatbridge roads and draw a compass chart.' },
          { h3: 'S4 and up', p: 'Compute orientation entropy and the order score, then test how the result depends on slice size.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap roads, our measurement', p: 'Road geometry is from OpenStreetMap and its contributors under the Open Database Licence. The rectangles, bearings, charts and scores are our own calculations and are not an official planning measure.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Measuring and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Every score hides decisions somebody made.',
      body: [
        { kind: 'table', caption: 'From the Coatbridge compass project to working with AI', head: ['In the orientation project', 'When AI turns data into a score'], rows: [
          ['Coatbridge scored 0.085, Glasgow 0.870', 'A single number can capture a real difference'],
          ['A third of length near main axes was chance level', 'Compare every result with what chance gives'],
          ['Slice size and road choice affect the score', 'Every score depends on hidden settings'],
          ['Both directions of each road were counted', 'Small modelling decisions need stating'],
          ['The compass chart showed the pattern', 'Always look at the data behind a number']
        ] },
        { kind: 'p', text: 'Ask an AI assistant whether a place is "grid-like" and you may get a confident description with nothing measured. Vibe coding means describing a program while an AI writes it; our Coatbridge learners also decide exactly what should be measured, then check the code measures that and nothing else. AI agents that summarise data into scores make many such choices silently, so a learner who knows to ask about them is far harder to mislead. Building agents is saved for learners who can already write Python unaided, typically in the last years of school or adulthood, and Copilot Studio is covered in private lessons alone. Two pages explain more: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students across the UK</a>.' },
        { kind: 'p', text: 'The page is our own work; OpenStreetMap, National Records of Scotland and postcodes.io only supplied open data, and any mistakes in the analysis are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From compass tallies to street-network analysis',
    intro: 'We take the school year as a first estimate and let the trial lesson refine it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Directions, tallies and turning a pattern into a number.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and small apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and data', p: 'Trigonometry, charts and real map data alongside SQA Maths and Computing Science.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Geospatial data, visualisation and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and maps',
    h2: 'How can you measure how grid-like a town\'s streets are with Python?',
    intro: 'Work out the compass bearing of every road segment, total the road length in each direction, and compute the orientation entropy; an order score rescales it from 0 for no preferred direction to 1 for a perfect grid.',
    p1: 'From OpenStreetMap, Coatbridge\'s 159.2 km of roads scored 0.085 on that order scale, close to no preferred direction, while a rectangle of Glasgow city centre scored 0.870 with 92.7% of its road length on four main directions.',
    p2: 'Learners who have built that measure ask of any AI-generated score: what exactly was counted, and what would chance have given?',
    closer: 'Questioning how a number was made lets Coatbridge teenagers use AI analysis without being taken in by it, a sound reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Whifflet to Carnbroe, all online',
    intro: 'Lessons need a computer with a camera and an internet line that can hold a video call.',
    cells: [
      { h3: 'Learner does the coding', p: 'Students type, prompt and run each step themselves; tutors watch through screen share and ask why each line is there.' },
      { h3: 'First topic from the trial', p: 'The free session reveals the level, and any SQA course is written down.' },
      { h3: 'Opening lesson free', p: 'No charge for lesson one, which ends with our course suggestion.' },
      { h3: 'Same-stage classes', p: 'Between five and ten UK learners at one level make up a class.' },
      { h3: 'Twice weekly', p: 'Lessons pause for school holidays.' },
      { h3: 'Steady time', p: 'Tutors cover the UK clock changes, so your slot stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening, rarely live close together. On video, they do not need to.' }
  },

  fees: {
    h2: 'Coatbridge fees',
    intro: 'Coatbridge learners pay our international prices, the ones used everywhere outside India.',
    first: 'A complete free lesson, then a recommendation.',
    group: 'Around eight live lessons a month in a small group.',
    private: 'Around eight live one-to-one lessons a month.',
    closer: 'We quote in US dollars with no sterling alternative; invoices start once the trial has fixed a course and a time each week. Holidays, absences and changing format are covered on the pricing page.'
  },

  reviewsH2: 'Lanarkshire families and learners across Britain on Google',

  book: {
    h2: 'Book a free Coatbridge lesson',
    intro: 'Share the learner\'s age or year group and what they enjoy. The trial could be a compass-tally challenge, a Scratch game built with an AI, some first Python, or drawing a real street chart.',
    success: 'Thank you. Your Coatbridge request is in.'
  },

  faq: {
    h2: 'Coatbridge questions',
    intro: 'Compass charts, the Coatbridge road study, Python, vibe coding and lesson logistics.',
    items: [
      { q: 'What is the population of Coatbridge?', a: 'National Records of Scotland estimated 43,950 people in the Coatbridge locality in mid-2020.' },
      { q: 'Are online Python classes available in Coatbridge?', a: 'They are, over live video, open to ages 6 to 67 from Whifflet to Glenboig and anywhere in North Lanarkshire.' },
      { q: 'What does atan2 do in Python?', a: 'It gives the angle of a line from its two coordinate differences, handling every direction correctly, which makes it the usual tool for working out a bearing.' },
      { q: 'What is orientation entropy?', a: 'A measure of how evenly street length is spread across compass directions: highest when every direction is equally common, lowest when streets follow a strict grid.' },
      { q: 'What is the Coatbridge project?', a: 'Measuring the bearing of 159.2 km of Coatbridge roads from OpenStreetMap, drawing a compass chart and scoring how grid-like the town is against Glasgow city centre.' },
      { q: 'Is vibe coding included?', a: 'At every age. Learners describe what they want built, then check and fix what the AI produces.' },
      { q: 'How soon can a learner try building agents?', a: 'After their Python is steady, most often S5 and S6 pupils or grown-ups; Copilot Studio needs one-to-one sessions.' },
      { q: 'What SQA support is there?', a: 'National 5 through Advanced Higher Maths and Computing Science, focused on genuine understanding; grades are never promised.' },
      { q: 'How much are lessons?', a: 'Trial free; after that a class seat is USD 100 per month and private tuition USD 150 per month.' },
      { q: 'Do lessons run in the holidays?', a: 'No; tell us your school holiday weeks and we skip them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Lanarkshire pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-cumbernauld">Cumbernauld</a> (how far routes stray from a straight line), <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-hamilton-scotland">Hamilton</a>, <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">North Lanarkshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reach everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Coatbridge and North Lanarkshire',
  footerPlaces: [
    { href: '/coding-classes-in-north-lanarkshire', label: 'North Lanarkshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ctb .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.3vw, 2.7rem); }
.cg-root.cg-ctb .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-ctb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-ctb .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ctb .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.02em; }
.cg-root.cg-ctb .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-ctb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ctb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ctb .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-ctb .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Lanarkshire (S12000050). Scotland: Curriculum for Excellence, SQA National 5 upward. NRS mid-2020 settlement and locality estimates: Coatbridge 43,950 (Cumbernauld 50,530). postcodes.io (North Lanarkshire, ML5): Blairhill, Carnbroe, Cliftonville, Dunbeth, Gartsherrie, Greenend, Kirkwood, Langloan, Old Monkland, Rosehall, Shawhead, Sikeside, Townhead, Whifflet (suburban areas); Glenboig (village).',
    localProject: 'OSM API 0.6 public roads. Coatbridge bbox -4.065,55.845,-3.995,55.878 (6 tiles): 159.2 km, 7,195 segments, entropy 3.488, order 0.085, 33.3% within 15 degrees of four main axes. Glasgow centre bbox -4.268,55.857,-4.245,55.868: 27.9 km, 1,067 segments, entropy 2.179, order 0.870, 92.7%; top slices near 10 and 100 degrees (18.7% and 21.4%). Lesson family: street network orientation, compass histogram, orientation entropy.',
    requiredMentions: [
      '43,950',
      '159.2 km',
      'Whifflet',
      'Kirkwood',
      'Carnbroe',
      'Sikeside',
      'Gartsherrie',
      'Blairhill',
      'orientation entropy',
      'order score'
    ],
    sources: [
      { claim: 'OpenStreetMap road data for Coatbridge and Glasgow city centre, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in North Lanarkshire.', url: 'https://api.postcodes.io/places?q=Whifflet' }
    ],
    rejectedClaims: [
      'Iron-town or canal history, and why the streets are laid out as they are: not read from a source; not claimed.',
      'That a grid is better or worse: the score describes streets only.',
      'Glasgow city centre as a whole: only the stated rectangle was measured.',
      'Second locality in North Lanarkshire: per NRS mid-2020 figures quoted on the North Lanarkshire page (Cumbernauld 50,530, Coatbridge 43,950).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
