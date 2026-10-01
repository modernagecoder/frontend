'use strict';
// Boston, Lincolnshire (cg- town page, UK cluster Phase 10, towns band B, row 533). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when you fit a straight
// line to points, which way should the errors be measured, and does the answer change if you turn the map? (total
// least squares / orthogonal regression against ordinary least squares, on the waterways around Boston).
// Data (read 30 September 2026): one Overpass query for ways tagged waterway = drain, canal, river or ditch with a name,
// box 52.92 to 53.05 N, 0.16 W to 0.10 E (148 ways, OSM base 2026-09-30T18:12Z). Coordinates to OSGB36 metres (our
// Helmert code); every named waterway resampled at 10 m steps; 26 names with at least 1.5 km inside the box.
// Our run (scratchpad bos/tls.py): three straight-line fits per waterway: ordinary least squares of northing on easting
// (y on x), of easting on northing (x on y), and total least squares (the line minimising perpendicular distance).
// Bearings folded to 0-180. Selected: New Hammond Beck 5.8 km, TLS 80.9 deg, perpendicular RMS 10.1 m, y-on-x off by
// 0.0, x-on-y 0.0, worst y-on-x miss over 180 one-degree rotations 0.8 deg; Maud Foster Drain 4.2 km, 169.3, 47.9 m,
// 0.5, 0.0, 16.3; Hobhole Drain 13.4 km, 3.5, 179.8 m, 2.1, 0.0, 14.7; Old Hammond Beck 8.5 km, 91.5, 291.2 m, 0.0,
// 33.8, 64.5; South Forty Foot Drain 26.9 km, 50.0, 2,236.1 m, 5.6, 8.0, 89.9. Of 26: y-on-x off by more than 1 deg for
// 11, x-on-y for 13; worst rotated miss above 10 deg for 22; below 1 deg only for New Hammond Beck (0.8) and Clay Dike
// (0.0, perpendicular RMS 0.7 m). TLS direction identical at every rotation (by construction; checked).
// Lesson family: total least squares / orthogonal regression against ordinary least squares.
// Place facts: Boston (E07000136) TS001 70,502. ONS 2021 BUAs wholly inside it (published): Boston 45,340; Kirton
// (Boston) 5,570; Swineshead 2,650; Butterwick 1,365; Old Leake 1,175; Fishtoft 1,075; Sutterton 1,070.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BOSTON', label: 'Boston', blurb: 'Coding and AI classes for Boston in Lincolnshire, with a line-fitting project on 26 fenland waterways that asks which way the errors run.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-boston',
  code: 'bos',
  accent: '#646438',
  accentRationale: 'Boston: a fen olive (6.14:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Boston',
    eyebrow: 'Boston, Lincolnshire, East Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lincolnshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Lincolnshire', href: '/coding-classes-in-lincolnshire' },
    { label: 'Lincoln', href: '/best-coding-class-in-lincoln' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Boston, Lincolnshire',
  title: 'Coding and AI Classes in Boston, Lincolnshire | Ages 6 to 67',
  description: 'Coding, AI, Python and vibe coding classes taught live online for Boston, Skirbeck, Wyberton, Fishtoft and Kirton in Lincolnshire, ages 6 to 67. Lesson one is free.',
  ogDescription: 'Coding and AI classes for Boston, Lincolnshire, with a regression project: fit straight lines to 26 fenland waterways and see ordinary least squares change its mind when the map turns.',
  twitterDescription: 'Boston, Lincolnshire: coding, AI, Python and vibe coding taught live online for ages 6 to 67, with a free first lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Boston, Lincolnshire',
    description: 'Coding, AI, Python, vibe coding and maths for children, teenagers and adults in Boston and the surrounding Lincolnshire villages, taught live online with projects that test a method before trusting it.'
  },

  h1: 'Coding and AI classes in Boston, Lincolnshire',
  capsuleQ: 'What are the best coding and AI classes open to Boston learners?',
  capsule: 'The ONS gives the Boston built-up area 45,340 residents at the 2021 census, and the borough of Boston 70,502. Skirbeck, Wyberton and Wyberton Fen are suburban areas in postcodes.io whose nearest postcode is inside the town\'s built-up area, and Fishtoft, Kirton, Sutterton, Swineshead, Old Leake, Butterwick, Freiston, Wrangle and Algarkirk are recorded as villages. Modern Age Coders teaches coding, AI, Python, vibe coding and maths live online to everyone from age six to 67. Tutors work from India; learners choose one-to-one lessons or a group of five to ten at one level. A method is only trusted in our lessons once a learner has seen where it breaks. In the Boston project, three ways of drawing a straight line through the same fenland waterway give three different directions, and only one of them stays put when the map is turned. The first lesson is free and finishes with a course recommendation. Carrying on costs USD 100 a month for a group or USD 150 a month for private tuition.',
  lead: 'Fit a straight line through some points and most software reaches for ordinary least squares, the method taught in school statistics and hidden inside a great deal of machine learning. It makes a quiet assumption: that all the error is in the up-and-down direction and none in the sideways one. For predicting one quantity from another that can be fine. For a shape on a map, where north and east are equally uncertain, it is a choice, and the fens around Boston show what that choice costs. Many of the waterways there are drains, OpenStreetMap\'s term for artificial channels built to carry water off the land, and they run in every direction.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Boston, Lincolnshire.',

  picks: {
    eyebrow: 'First courses',
    h2: 'Coding, thinking and AI courses picked for Boston',
    intro: 'Each band below has one suggestion. Its opening live lesson is free and you can book it without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: lay a ruler through scattered dots as closely as you can, then argue about what "fits" means.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Have an AI draw a line-of-dots game in Scratch, then turn the stage and see if its line turns too.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Regression, error and machine learning, with the Boston waterways as a line-fitting project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web builds made with AI help, each tested by changing the input and watching the output.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Boston borough',
      h2: 'Boston and the built-up areas around it',
      intro: 'The ONS lists these built-up areas of 1,000 people or more as lying wholly inside the borough.',
      body: [
        { kind: 'table', caption: 'Built-up areas wholly inside Boston borough with at least 1,000 residents, 2021 census (ONS)', head: ['Built-up area', 'Residents'], rows: [
          ['Boston', '45,340'],
          ['Kirton', '5,570'],
          ['Swineshead', '2,650'],
          ['Butterwick', '1,365'],
          ['Old Leake', '1,175'],
          ['Fishtoft', '1,075'],
          ['Sutterton', '1,070']
        ] },
        { kind: 'p', text: 'Each figure is the ONS\'s own, and we have not added them up; 70,502 for the whole borough is a separate count. Beyond these, postcodes.io records Bicker, Benington, Leverton, Amber Hill, Holland Fen, Hubbert\'s Bridge, Kirton End, Kirton Holme and Swineshead Bridge as villages and Brothertoft as a hamlet. Schools across the borough follow the national curriculum for England, and we build lessons round the term dates you send.' },
        { kind: 'callout', h3: 'Lincolnshire, the East Midlands and our method', p: 'County-wide options are on <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">coding classes in Lincolnshire</a>, and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">the East Midlands</a>. Why we put thinking ahead of any tool is explained in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Boston project',
      h2: 'Three straight lines through 26 fenland waterways',
      intro: 'Fit each waterway three ways, then rotate the map one degree at a time and see which answers move.',
      body: [
        { kind: 'p', text: 'The learner sends one request to the Overpass service for every named drain, canal, river and ditch in a box around Boston, converts the coordinates to metres on the British National Grid, and places a point every 10 m along each waterway so that heavily mapped stretches do not count for more. Twenty-six named waterways have at least 1.5 km inside the box. For each one the program draws three straight lines. The first is ordinary least squares with northing predicted from easting, the line that makes the vertical gaps smallest. The second swaps the roles, making the horizontal gaps smallest. The third is total least squares, also called orthogonal regression, which makes the perpendicular distance from each point to the line smallest and treats north and east alike.' },
        { kind: 'table', caption: 'Five of the 26 waterways (our Python on OpenStreetMap geometry; bearings in degrees, folded to 0 to 180)', head: ['Waterway', 'Length in box', 'Total least squares bearing', 'Typical distance from that line', 'Northing-on-easting line differs by', 'Easting-on-northing line differs by', 'Worst northing-on-easting error as the map turns'], rows: [
          ['New Hammond Beck', '5.8 km', '80.9', '10.1 m', '0.0', '0.0', '0.8'],
          ['Maud Foster Drain', '4.2 km', '169.3', '47.9 m', '0.5', '0.0', '16.3'],
          ['Hobhole Drain', '13.4 km', '3.5', '179.8 m', '2.1', '0.0', '14.7'],
          ['Old Hammond Beck', '8.5 km', '91.5', '291.2 m', '0.0', '33.8', '64.5'],
          ['South Forty Foot Drain', '26.9 km', '50.0', '2,236.1 m', '5.6', '8.0', '89.9']
        ] },
        { kind: 'p', text: 'Read the table from the top. New Hammond Beck is almost ruler straight, 10.1 m from its own line on average over 5.8 km, and all three methods agree. As a waterway wanders, they part company. Hobhole Drain runs close to north and south, and the method that measures vertical gaps tilts its answer by 2.1 degrees, because for a line that steep the vertical gap is a poor measure of how far a point really is from it. Old Hammond Beck runs close to east and west, and there it is the other ordinary method that goes wrong, by 33.8 degrees. Across all 26, the northing-on-easting line differed from total least squares by more than a degree for 11 waterways and the easting-on-northing line for 13.' },
        { kind: 'p', text: 'The last column is the real test. The program turns the whole map one degree at a time, 180 times, refits, and turns the answer back. Total least squares gives the same direction every time, because perpendicular distance does not care which way is up. Ordinary least squares does care. For 22 of the 26 waterways its answer swung by more than 10 degrees at some angle, and for the long South Forty Foot Drain by 89.9 degrees, which means it ended up almost at right angles to the truth. Only New Hammond Beck and Clay Dike, the two straightest, held within a degree. A method whose answer depends on which way you hold the map is telling you about your choice of axes, not about the drain.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a steep line of dots on squared paper, fit a line by eye, then turn the paper and try again.' },
          { h3: 'Ages 11 to 15', p: 'Code ordinary least squares in Python for a handful of points and swap which variable is predicted.' },
          { h3: 'Ages 15 and up', p: 'Fit all three lines to the real waterways, add the rotation test, and explain why only one stays still.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Waterway geometry © OpenStreetMap contributors under the Open Database Licence. The resampling, the fits and the rotations are ours. A straight line is a crude summary of a winding river; the point of the exercise is the fitting method, not a survey of the channels, and a different box would clip them differently.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Fitting and AI',
      h2: 'Why this matters for AI and vibe coding',
      intro: 'Most machine learning inherits the assumptions of ordinary least squares, and few people check them.',
      body: [
        { kind: 'table', caption: 'From fenland drains to machine learning', head: ['In the project', 'In AI practice'], rows: [
          ['Three methods, three directions', 'Different loss functions answer different questions'],
          ['Vertical gaps only', 'Standard regression assumes the inputs are exact'],
          ['89.9 degree swing when the map turned', 'Check whether a result survives a harmless change'],
          ['Straight drains, no disagreement', 'Clean data hides the weakness of a method'],
          ['Perpendicular distance treats both axes alike', 'Choose the method that matches the error you expect']
        ] },
        { kind: 'p', text: 'Linear regression, the first model in almost every machine learning course, is ordinary least squares. It is the right tool when the inputs are known precisely and only the output is noisy. When the inputs are noisy too, as they are with measurements, sensors and survey data, it systematically flattens the slope, and no amount of extra data fixes that. Ask an AI assistant to vibe code "fit a line to these points" and it will produce ordinary least squares every time without asking where the error lives. Boston learners have watched that line swing round on a real map, so they ask. Learners who can write Python unaided, typically in the sixth form or as adults, go on to AI agents; Copilot Studio agents are taught one-to-one only. There is more at <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents: a pathway for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the Office for National Statistics and postcodes.io are independent of us and have not endorsed this page. We use their open data and take responsibility for the analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Step by step',
    h2: 'From rulers on dots to fitting models',
    intro: 'School years are a loose guide; what a learner does in the free lesson decides the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns in points, estimates and asking what "closest" means.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games an AI helps build and the child checks by changing things.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, statistics and AI', p: 'Regression and model testing on real data, beside GCSE and A level work.', courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data and AI in practice', p: 'Solid Python, then machine learning and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and line fitting',
    h2: 'What is total least squares, and how is it different from ordinary regression?',
    intro: 'Total least squares, also called orthogonal regression, fits a line by making the perpendicular distances from the points to the line as small as possible, so it allows for error in every coordinate, whereas ordinary least squares minimises only the vertical distances and assumes the horizontal values are exact.',
    p1: 'Fitted to 26 waterways around Boston, total least squares gave the same direction however the map was turned, while ordinary least squares swung by more than 10 degrees for 22 of them.',
    p2: 'The two methods agreed only where a waterway was almost perfectly straight, such as New Hammond Beck, 10.1 m from its line on average.',
    closer: 'Boston teenagers who have turned a map and watched a regression line move ask what any AI model is assuming about its errors. That habit comes from coding the fit themselves, one of the strongest reasons to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Online lessons',
    h2: 'Skirbeck, Wyberton and Fishtoft, one live lesson',
    intro: 'A computer with a webcam and a connection that holds a video call is all that is needed.',
    cells: [
      { h3: 'The learner builds', p: 'Every line is typed by the learner on a shared screen; the tutor asks and nudges.' },
      { h3: 'Level first', p: 'The free lesson shows us where a learner is before any course is suggested.' },
      { h3: 'Genuinely free trial', p: 'Full length, no card, and a recommendation at the end.' },
      { h3: 'Classes at one stage', p: 'Five to ten learners at the same level, drawn from the whole UK.' },
      { h3: 'Two lessons weekly', p: 'Holiday weeks are skipped once you have told us the dates.' },
      { h3: 'Same slot all year', p: 'We absorb the clock changes so your time never shifts.' }
    ],
    spec: { title: 'Why we teach online', p: 'One town seldom has enough learners at exactly the same stage to fill a class. The whole country does.' }
  },

  fees: {
    h2: 'Fees for Boston learners',
    intro: 'Boston comes under our international prices, which apply outside India.',
    first: 'A full first lesson, free, closing with our course advice.',
    group: 'About eight group lessons per month.',
    private: 'About eight private lessons per month.',
    closer: 'Prices are set in US dollars, with no sterling version. We only invoice after the trial, once a course and weekly slot are fixed. The pricing page explains holidays, missed lessons and switching format.'
  },

  reviewsH2: 'Google reviews from East Midlands families and UK learners',

  book: {
    h2: 'Book a free lesson from Boston',
    intro: 'Share an age or year group and a favourite subject or hobby. The trial might be a dots-and-ruler puzzle, a Scratch game made with an AI, first Python, or a first line fitted to real data.',
    success: 'Thank you. We have your Boston request and will get back to you.'
  },

  faq: {
    h2: 'Boston: questions and answers',
    intro: 'Line fitting, the waterways project, coding, AI and the practical side.',
    items: [
      { q: 'How many people live in Boston, Lincolnshire?', a: 'The Boston built-up area had 45,340 usual residents at the 2021 census, on ONS figures, and Boston borough had 70,502.' },
      { q: 'Are coding and AI classes available online in Boston?', a: 'Yes. Live video lessons for ages 6 to 67 cover Boston, Skirbeck, Wyberton, Fishtoft, Kirton and the villages of the borough.' },
      { q: 'What is ordinary least squares?', a: 'The standard way to fit a straight line: choose the line that makes the sum of squared vertical gaps between the points and the line as small as possible.' },
      { q: 'Why did turning the map change the answer?', a: 'Because ordinary least squares measures gaps straight up and down. Turn the map and "up" points somewhere else, so different gaps are measured. Total least squares uses perpendicular gaps, which do not depend on the direction of the axes.' },
      { q: 'What do learners build in the Boston project?', a: 'A Python program that downloads the named waterways around Boston, fits three kinds of straight line to each, and rotates the map 180 times to see which fits stay put.' },
      { q: 'Do you teach vibe coding as well?', a: 'Yes, for all ages. Learners instruct an AI, then read, run and question what it produces.' },
      { q: 'When can a learner move on to AI agents?', a: 'Once they can write Python unaided, usually in sixth form or as an adult. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, for computer science and maths, with understanding as the aim. We make no promises about grades.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free; after that it is USD 100 a month in a group or USD 150 a month for one-to-one.' },
      { q: 'Do you stop for school holidays?', a: 'Yes, whenever you ask; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Lincolnshire and nearby',
    h2: 'More Lincolnshire and East Midlands pages',
    html: 'Other projects run on the pages for <a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-grimsby">Grimsby</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-scunthorpe">Scunthorpe</a>, and the county has a page at <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a>. Elsewhere, start from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Boston and Lincolnshire',
  footerPlaces: [
    { href: '/coding-classes-in-lincolnshire', label: 'Lincolnshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bos .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.4rem); }
.cg-root.cg-bos .cg-hero h1 { font-weight: 730; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-bos .cg-capsule { border: 1px solid color-mix(in srgb, var(--cg-accent) 35%, transparent); padding: 0.9rem 1rem; border-radius: 4px; }
.cg-root.cg-bos .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.8rem; }
.cg-root.cg-bos .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.018em; }
.cg-root.cg-bos .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-bos .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bos .cg-table th { font-size: 0.81rem; font-weight: 700; letter-spacing: 0.01em; }
.cg-root.cg-bos .cg-ladder-col { border-left: 2px dashed var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-bos .cg-callout { border-left-width: 6px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Boston (E07000136), Census 2021 TS001 usual residents 70,502. ONS 2021 BUAs of 1,000+ wholly inside the borough (published): Boston 45,340; Kirton (Boston) 5,570; Swineshead 2,650; Butterwick 1,365; Old Leake 1,175; Fishtoft 1,075; Sutterton 1,070. postcodes.io (Boston): Skirbeck, Wyberton, Wyberton Fen (suburban areas, nearest postcode in Boston BUA); Fishtoft, Kirton, Sutterton, Frampton, Swineshead, Old Leake, Butterwick, Freiston, Wrangle, Benington, Leverton, Algarkirk, Bicker, Amber Hill, Holland Fen, Hubbert\'s Bridge, Kirton End, Kirton Holme, Swineshead Bridge (villages); Brothertoft (hamlet). England national curriculum.',
    localProject: 'Overpass: named ways waterway=drain|canal|river|ditch, box 52.92-53.05 N, 0.16 W-0.10 E, 148 ways (base 2026-09-30T18:12Z). OSGB36 metres; resampled every 10 m; 26 names with >=1.5 km in box. Fits: OLS northing-on-easting, OLS easting-on-northing, total least squares (perpendicular). New Hammond Beck 5.8 km TLS 80.9 deg, RMS 10.1 m, OLS diffs 0.0/0.0, worst rotated 0.8; Maud Foster Drain 4.2 km 169.3, 47.9 m, 0.5/0.0, 16.3; Hobhole Drain 13.4 km 3.5, 179.8 m, 2.1/0.0, 14.7; Old Hammond Beck 8.5 km 91.5, 291.2 m, 0.0/33.8, 64.5; South Forty Foot Drain 26.9 km 50.0, 2,236.1 m, 5.6/8.0, 89.9. Of 26: y-on-x >1 deg 11; x-on-y >1 deg 13; worst rotated >10 deg 22; <1 deg only New Hammond Beck and Clay Dike (RMS 0.7 m). TLS invariant to rotation. Lesson family: total least squares / orthogonal regression vs ordinary least squares; errors-in-variables.',
    requiredMentions: [
      '45,340',
      '70,502',
      'Skirbeck',
      'Wyberton',
      'Fishtoft',
      'Sutterton',
      'Swineshead',
      'Maud Foster Drain',
      'Hobhole Drain',
      'New Hammond Beck',
      'total least squares',
      'orthogonal regression'
    ],
    sources: [
      { claim: 'OpenStreetMap waterways (ODbL) fetched through the Overpass API for a box around Boston; waterway=drain defined in the OSM wiki as an artificial drainage channel.', url: 'https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest postcodes for Boston borough.', url: 'https://api.postcodes.io/places?q=Skirbeck' },
      { claim: 'Golub and Van Loan (1980), An analysis of the total least squares problem, SIAM Journal on Numerical Analysis 17(6), 883 to 893.', url: 'https://doi.org/10.1137/0717073' }
    ],
    rejectedClaims: [
      'History of fen drainage or who dug any drain: not claimed.',
      'That any waterway is straight or winding beyond the measured distances: only measured figures used.',
      'Flooding or flood risk: excluded.',
      'Sum of the listed built-up areas: not added.',
      'Named schools and term dates: none named.',
      'Sterling prices: none.'
    ]
  }
};
