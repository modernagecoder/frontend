'use strict';
// Kingswood (cg- district page, UK cluster Phase 9, row 467). Keyword slug per the owner's 2026-09-30 ruling (rotation with
// city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Kingswood is in South
// Gloucestershire, outside the Bristol City council area; the -bristol suffix follows the Phase 9 plan.
// Spine: how do photo apps pull detail out of a flat-looking picture? (histogram equalisation: remapping grey levels by the
// cumulative distribution so each tone band holds a similar share of pixels, against a plain linear stretch).
// Data (read 30 September 2026): OpenTopoData public API, eudem25m (Copernicus EU-DEM v1.1): a 48 by 40 grid (1,920 heights)
// over bbox -2.560,51.430,-2.470,51.470 (about 6.2 km by 4.4 km around Kingswood); heights 7.8 to 114.4 m, median 53.3 m.
// Our run (scratchpad kws/heq.py): heights mapped to 256 grey levels by a linear stretch, then equalised through the
// cumulative histogram. Share of cells in each quarter of the grey scale (darkest to lightest): linear 16.9 / 46.5 / 24.4 /
// 12.2%; equalised 24.6 / 25.1 / 25.1 / 25.3%. Heights shown by the second grey quarter: linear 34.4 to 61.1 m, equalised
// 39.8 to 53.1 m; lightest quarter: linear 88.0 to 114.4 m, equalised 69.9 to 114.4 m. Grey levels in use: linear 251,
// equalised 187. Mean grey difference between neighbouring cells: linear 9.52, equalised 12.2 (grey spread 57.2 to 73.6).
// Cells per tenth of the height range: 99, 121, 253, 391, 353, 255, 130, 133, 95, 90.
// Lesson family: histogram equalisation (image contrast by CDF remapping). Screened: "histogram equalisation" 0 hits in
// content/ (the American spelling appears only in course syllabus files), rm.js and famq.js clean; claimed in claims.txt.
// Place facts: South Gloucestershire (E06000025) TS001 290,424 (Nomis TS001, via county.py). ONS 2021 built-up
// area "Kingswood and Fishponds" 160,270 (published; it straddles South Gloucestershire and Bristol, so no share is
// claimed). postcodes.io (South Gloucestershire, BS15/BS16/BS30): Hanham, Cadbury Heath, Longwell Green, Staple Hill, Lower
// and Upper Soundwell, Warmley Hill (suburban areas); Warmley (village); Kingswood (other settlement).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KINGSWOOD', label: 'Kingswood', blurb: 'Online coding and Python classes for Kingswood in South Gloucestershire, with an image project that pulls hidden detail out of a height map.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-kingswood-bristol',
  code: 'kws',
  accent: '#1F5E8C',
  accentRationale: 'Kingswood: a steel cobalt blue (6.91:1 contrast), chosen by hand to differ in hue from neighbouring Phase 9 pages',
  pageType: 'city',
  place: {
    name: 'Kingswood',
    eyebrow: 'Kingswood, South Gloucestershire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Gloucestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-bristol', name: 'Bristol' }],
  nav: [
    { label: 'Bristol', href: '/best-coding-class-in-bristol' },
    { label: 'South West England', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kingswood, South Gloucestershire',
  title: 'Online Coding and Python Classes in Kingswood | AI, 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Kingswood, Hanham, Staple Hill and Warmley learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Online coding and Python classes for Kingswood, with a Python image project that uses histogram equalisation to bring out detail in a height map.',
  twitterDescription: 'Kingswood online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Kingswood',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Kingswood and South Gloucestershire, taught live with reasoning first.'
  },

  h1: 'Online coding and Python classes in Kingswood',
  capsuleQ: 'Which are the best online coding and Python classes in Kingswood?',
  capsule: 'South Gloucestershire, the council area Kingswood belongs to, counted 290,424 residents at the 2021 census, and the ONS counts it inside the Kingswood and Fishponds built-up area of 160,270 people, which runs across the boundary with Bristol. Hanham, Cadbury Heath, Longwell Green, Staple Hill and Warmley are among the places recorded around it. Coding, Python, AI, vibe coding and maths are on offer for ages six to 67, in live video lessons led from India, either solo or alongside four to nine classmates working at the same level. We start with reasoning, so learners can say why a program or an AI tool did what it did. The trial lesson is free and ends with the course we suggest. The Kingswood project turns 1,920 real ground heights into a picture and uses Python to make its hidden detail visible. Once the trial is over, group tuition is USD 100 per month and private tuition USD 150 per month.',
  lead: 'Take a photo on a grey day and most of it sits in a narrow band of middle tones, so it looks flat. Photo editors fix this with an old trick called histogram equalisation: count how many pixels have each shade, then stretch the crowded shades apart and squeeze the rare ones together, so every band of the grey scale ends up with a similar share of the picture. The same idea works on any grid of numbers. This project builds a picture of the ground around Kingswood from 1,920 heights in the European EU-DEM elevation model, where most of the land sits in a middle band, and shows in Python what equalisation gains and what it gives up.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Kingswood?',

  picks: {
    eyebrow: 'Kingswood course picks',
    h2: 'Kingswood courses in thinking, Python and AI',
    intro: 'Choose a course by age; each opens with one free live lesson, booked without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sorting, counting and seeing patterns hidden in a crowd of numbers.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games described to an AI, built together and tested by the learner.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to images and data, including the Kingswood height-map project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, images, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kingswood and South Gloucestershire',
      h2: 'Kingswood, Hanham, Staple Hill and Warmley',
      intro: 'ONS figures for the council area and the built-up area, and places recorded nearby.',
      body: [
        { kind: 'table', caption: 'ONS 2021 census figures for areas that include Kingswood', head: ['Area', 'Residents (2021)'], rows: [
          ['South Gloucestershire council area', '290,424'],
          ['Kingswood and Fishponds built-up area', '160,270']
        ] },
        { kind: 'p', text: 'The two figures describe different, overlapping areas, and the built-up area crosses into Bristol, so we neither add them nor split them. Postcodes.io lists Hanham, Cadbury Heath, Longwell Green, Staple Hill, Lower and Upper Soundwell and Warmley Hill as suburban areas of South Gloucestershire in the BS15, BS16 and BS30 districts, Warmley as a village and Kingswood itself as a settlement. Schools here teach England\'s national curriculum; send us the term dates and lessons will fit around the holidays.' },
        { kind: 'callout', h3: 'Bristol, the South West and why reasoning first', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a> for more local options. Our case for thinking before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kingswood project',
      h2: 'Histogram equalisation in Python: bringing out the hidden detail in a Kingswood height map',
      intro: 'Turn heights into shades, count the shades, and redistribute them so no band hogs the picture.',
      body: [
        { kind: 'p', text: 'The learner requests heights from the OpenTopoData service for a 48 by 40 grid, about 6.2 km by 4.4 km, around Kingswood: 1,920 cells ranging from 7.8 m to 114.4 m, with a median of 53.3 m. A linear stretch maps the lowest cell to black and the highest to white. But the land is not spread evenly: split the height range into ten equal slices and the middle two hold 391 and 353 cells, while the top slice holds only 90. Equalisation replaces each shade with its position in the cumulative count, using NumPy, so a shade that sits above half the picture becomes a middle grey.' },
        { kind: 'table', caption: 'Share of the 1,920 cells in each quarter of the grey scale, our Python run on EU-DEM heights', head: ['Grey quarter', 'Linear stretch', 'Equalised'], rows: [
          ['Darkest', '16.9%', '24.6%'],
          ['Second', '46.5%', '25.1%'],
          ['Third', '24.4%', '25.1%'],
          ['Lightest', '12.2%', '25.3%']
        ] },
        { kind: 'p', text: 'With a linear stretch nearly half the picture, 46.5%, crowds into one quarter of the grey scale, covering heights from 34.4 m to 61.1 m. After equalisation that band of greys covers only 39.8 m to 53.1 m, so small differences in the busy middle ground become visible, and the average grey difference between neighbouring cells rises from 9.52 to 12.2. Nothing comes free, though. The lightest quarter now has to cover everything from 69.9 m to 114.4 m, so detail on the highest ground is squashed, and the picture uses 187 grey levels instead of 251 because some rare shades merge. Equalisation redistributes contrast; it does not create information.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Colour a grid of numbers with four crayons, first by equal ranges and then so each colour gets a quarter of the squares.' },
          { h3: 'Ages 11 to 15', p: 'Fetch Kingswood heights in Python, draw a histogram and turn the grid into a grey picture.' },
          { h3: 'Ages 15 and up', p: 'Write histogram equalisation with NumPy from the cumulative count and measure what it gains and loses.' }
        ] },
        { kind: 'callout', h3: 'EU-DEM heights, our pictures', p: 'Heights come from the Copernicus EU-DEM v1.1 via OpenTopoData; produced using Copernicus data and information funded by the European Union. The grid, the grey mappings and every figure are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Images and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Every enhancement decides which details win and which lose.',
      body: [
        { kind: 'table', caption: 'From the Kingswood height map to working with AI', head: ['In the image project', 'When AI processes images or data'], rows: [
          ['46.5% of cells crowded one grey band', 'Raw data is often unevenly spread'],
          ['Equalisation gave each quarter about 25%', 'Rescaling can reveal hidden structure'],
          ['Neighbour contrast rose from 9.52 to 12.2', 'Measure an improvement, do not just admire it'],
          ['High ground lost detail', 'Every enhancement has a cost somewhere'],
          ['Grey levels fell from 251 to 187', 'Processing can quietly discard information']
        ] },
        { kind: 'p', text: 'Image-recognition systems often normalise or equalise pictures before a model sees them, and an AI image editor will happily "enhance" a photo without saying what it traded away. Vibe coding lets the learner describe the program while an AI writes it; our Kingswood learners then print the before-and-after histograms and check what was lost. Agents that process images or tables automatically need those checks written into their instructions. Agent projects come after the learner can write Python without prompting, which for most means sixteen or older; Copilot Studio is taught in private sessions only. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> for the thinking, and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents route for UK learners</a> for the steps.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with OpenTopoData, the Copernicus programme, the ONS or postcodes.io; we used their open data only, and the pictures and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From colouring grids to image processing',
    intro: 'The school year is a first guide; the free lesson shows where to begin.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Counting, grouping and seeing patterns in numbers.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and images', p: 'Arrays, histograms and real data alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Image and data processing and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and images',
    h2: 'What is histogram equalisation, and how do you do it in Python?',
    intro: 'Histogram equalisation boosts contrast by remapping each shade according to how many pixels are darker than it, so the shades spread evenly across the grey scale; in Python it takes a histogram, a cumulative sum and a lookup table with NumPy.',
    p1: 'On a 1,920-cell height map of Kingswood, a linear stretch put 46.5% of the picture into one quarter of the grey scale, while equalisation gave each quarter about a quarter of the cells and raised neighbouring contrast from 9.52 to 12.2.',
    p2: 'Learners who have built it ask of every AI-enhanced image: what did the processing favour, and what did it squash?',
    closer: 'A Kingswood teenager who has written equalisation by hand will ask what any AI filter threw away, and Python is where that question starts.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Hanham to Staple Hill, online',
    intro: 'You need a computer with a webcam and a connection that can carry a video call.',
    cells: [
      { h3: 'Learner does the work', p: 'Students type, prompt and run every step while the tutor follows the shared screen and asks what each number means.' },
      { h3: 'Where to begin', p: 'The trial tells us the right first topic; any exam board is written down.' },
      { h3: 'Trial on us', p: 'The first session is unpaid and closes with the course we would pick for you.' },
      { h3: 'Level, not postcode', p: 'Groups of five to ten are formed by what learners can already do, drawing on the whole country.' },
      { h3: 'Two a week', p: 'Paused in the school holidays.' },
      { h3: 'Fixed time', p: 'Our tutors follow the UK clock changes so your slot stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening, rarely live near each other. Video solves that.' }
  },

  fees: {
    h2: 'Kingswood fees',
    intro: 'Kingswood learners pay our international rates, which apply to every country except India.',
    first: 'A full free lesson, then our recommendation.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'We charge in US dollars and have no sterling tariff. Invoices begin once the trial has fixed a course and a regular slot; breaks, absences and format changes are handled on the pricing page.'
  },

  reviewsH2: 'Google reviews from Bristol-area parents and learners nationwide',

  book: {
    h2: 'Book a free Kingswood lesson',
    intro: 'An age or year group plus one interest is all we need. The trial might be a crayon-grid puzzle, a Scratch game made with an AI, a first Python program, or turning real heights into a picture.',
    success: 'Thank you. Your Kingswood request is with us.'
  },

  faq: {
    h2: 'Kingswood questions',
    intro: 'Image contrast, the height-map project, Python, vibe coding and practical points.',
    items: [
      { q: 'Is Kingswood part of Bristol?', a: 'Kingswood is in South Gloucestershire, not the Bristol City council area, but the ONS counts it within the Kingswood and Fishponds built-up area, which crosses into Bristol.' },
      { q: 'Are online Python classes available in Kingswood?', a: 'They are. Every lesson is a live video call, so Hanham, Warmley and the rest of South Gloucestershire are all covered, for ages 6 to 67.' },
      { q: 'What does a histogram show?', a: 'How many values fall into each range. For a picture, it shows how many pixels have each shade, which reveals whether the tones are bunched together.' },
      { q: 'Does histogram equalisation always improve a picture?', a: 'No. It spreads crowded tones apart but squeezes rare ones together. On our Kingswood map the busy middle heights gained detail while the highest ground lost some.' },
      { q: 'What does the Kingswood project involve?', a: 'Building a grey picture from 1,920 EU-DEM heights around Kingswood and comparing a linear stretch with histogram equalisation in Python.' },
      { q: 'Does vibe coding feature?', a: 'Throughout, at every age: learners describe what they want and then test and fix what the AI builds.' },
      { q: 'When can learners build AI agents?', a: 'When Python stops needing a safety net, which for most is sixteen or older; Copilot Studio work is one-to-one only.' },
      { q: 'Is there support for GCSE and A level?', a: 'For computer science and maths, yes. We aim at real understanding and never promise a grade.' },
      { q: 'How much are lessons?', a: 'Nothing for the trial. Carrying on costs USD 100 each month as part of a class, or USD 150 each month with a tutor to yourself.' },
      { q: 'What happens in school holidays?', a: 'We take a break; tell us your dates and lessons skip those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Bristol and South West pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a>, <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-weston-super-mare">Weston-super-Mare</a> and <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a>. Everywhere else is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kingswood and South Gloucestershire',
  footerPlaces: [
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-kws .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-kws .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-kws .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-kws .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-kws .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-kws .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-kws .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kws .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-kws .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-kws .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'South Gloucestershire (E06000025), Census 2021 TS001 usual residents 290,424. ONS 2021 BUA (published): Kingswood and Fishponds 160,270 (crosses into Bristol; not shared out). postcodes.io (South Gloucestershire, BS15/BS16/BS30): Hanham, Cadbury Heath, Longwell Green, Staple Hill, Lower and Upper Soundwell, Warmley Hill (suburban areas); Warmley (village); Kingswood (other settlement).',
    localProject: 'OpenTopoData eudem25m 48 x 40 grid (1,920 heights), bbox -2.560,51.430,-2.470,51.470, 7.8 to 114.4 m, median 53.3. Grey quarter shares linear 16.9/46.5/24.4/12.2%, equalised 24.6/25.1/25.1/25.3%. Second quarter heights linear 34.4-61.1 m, equalised 39.8-53.1 m; lightest quarter equalised 69.9-114.4 m. Levels used 251 vs 187; neighbour grey difference 9.52 vs 12.2. Lesson family: histogram equalisation.',
    requiredMentions: [
      '290,424',
      '160,270',
      '1,920',
      'Hanham',
      'Cadbury Heath',
      'Longwell Green',
      'Staple Hill',
      'Warmley',
      'histogram equalisation'
    ],
    sources: [
      { claim: 'OpenTopoData API, EU-DEM 25 m dataset (Copernicus EU-DEM v1.1).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 via Nomis and ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas and villages in South Gloucestershire.', url: 'https://api.postcodes.io/places?q=Hanham' }
    ],
    rejectedClaims: [
      'Coalfield, chapel or forest history: not read from a source; not claimed.',
      'That Kingswood is in Bristol: not claimed; it is in South Gloucestershire, inside a built-up area that crosses the boundary.',
      'A population for Kingswood alone: none found; the council and built-up area figures are quoted separately and not combined.',
      'Named hills or streets on the height map: not identified; the grid is described by coordinates only.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
