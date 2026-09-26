'use strict';
// Falkirk (cg- council area page, UK cluster Phase 7, row 265). One council. Spine: why does a plant place each new
// seed at 137.5 degrees from the last? Anchor (read raw 26 September 2026): Historic Environment Scotland LB2109,
// Category A, Garden Wall and Pineapple, Dunmore Park (parish Airth): "Dated 1761 (bothy ranges); circa 1771, pineapple
// crown"; "elaborate pineapple crown of masonry with exhuberant fronces and finial sited at head of large walled
// garden"; "Built by the Earl of Dunmore"; "acquired that year by Landmark Trust as restoring tenants" (1973), "now let by
// Landmark and owned by National Trust for Scotland".
// Our model (scratchpad flk/phyllo.py): Vogel's model, seed n at angle n x theta, radius sqrt(n), 1,000 seeds; nearest
// two neighbours measured for seeds 600 to 1,000. Golden angle 137.5078: neighbour index gaps 55 and 89, nearest-neighbour
// distance mean 1.724 (min 1.678), spread 1.7 per cent. 137.0: gap 21, mean 1.516, spread 6.4. 138.0: gap 60, mean 1.053.
// 140.0: gap 18 (18 spokes), mean 0.319. 144.0: gap 5, mean 0.089. 135.0: gap 8, mean 0.142. Golden rings: seeds 20-60
// gaps 13 and 21; 100-200 34 and 21; 300-500 55 and 34; 800-1,000 55 and 89. Fibonacci ratios reach 1.61803.
// Lesson family: phyllotaxis, golden angle, Fibonacci neighbour gaps; screened (phyllotaxis, golden angle, Fibonacci,
// sunflower: 0 hits). No claim about spirals on real pineapples or on the masonry.
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Falkirk S12000014 158,400; 72,500 households; 533.1 per
// square kilometre; 0 to 14 25,300 (16.0 per cent), 65+ 31,100 (19.6 per cent) by our addition. NRS mid-2020 localities.
// Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'FALKIRK', blurb: 'Falkirk, Grangemouth, Bo\'ness and Larbert, and a Dunmore Pineapple lesson on the golden angle and why seeds spiral.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-falkirk',
  code: 'flk',
  accent: '#5C4820',
  accentRationale: 'Falkirk: a weathered ochre for the Dunmore Pineapple\'s stone, picked by the solver (7.04:1 on the darkest paper tint) and well clear of the East Ayrshire and Rutland browns',
  pageType: 'governorate',
  place: {
    name: 'Falkirk',
    eyebrow: 'Falkirk council area',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Stirling', href: '/best-coding-class-in-stirling' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Falkirk',
  title: 'Coding Classes in Falkirk | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across the Falkirk council area, from Falkirk and Grangemouth to Bo\'ness, Larbert, Stenhousemuir and Denny.',
  ogDescription: 'Coding classes for the whole Falkirk council area, and a Dunmore Pineapple project: place seeds at the golden angle in Python and find Fibonacci numbers.',
  twitterDescription: 'Falkirk coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the Falkirk Council Area',
    description: 'Ability-placed online coding, Python, generative geometry and mathematics for children, teenagers and adults across the Falkirk council area, taught live in English.'
  },

  h1: 'Coding classes in Falkirk',
  capsuleQ: 'What are the best coding classes in Falkirk?',
  capsule: 'The Falkirk council area had about 158,400 residents in roughly 72,500 households at Scotland\'s 2022 census, living at 533.1 people per square kilometre. Falkirk town is the largest place, with Grangemouth, Bo\'ness, Larbert, Stenhousemuir and Denny next. Lessons happen live on video with teachers in India, and a free opening lesson fixes each learner\'s level, whether they are in P2, S5 or working. Coding, Python and maths are taught to people aged 6 to 67 in small groups of five to ten or one-to-one. The Falkirk project starts at the Dunmore Pineapple, a stone pineapple on a garden folly near Airth. Beyond the free lesson, fees are USD 100 a month for a group and USD 150 a month for one-to-one.',
  lead: 'Near Airth, at the head of a walled garden, sits one of Scotland\'s most surprising follies: a folly crowned by a giant pineapple carved in stone. Historic Environment Scotland lists the Dunmore Pineapple at Category A, dates the crown to about 1771 and credits it to the Earl of Dunmore. A pineapple is a fruit built from many small units packed around a core, and plants that pack units like that, from seeds in a flower head to scales on a cone, face a geometry puzzle: at what angle should each new unit sit from the last so they fit together without gaps? This page\'s project answers it in Python, and the answer involves an angle of 137.5 degrees and the Fibonacci numbers.',
  wa: 'Hello Modern Age Coders, we are in the Falkirk area and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for the Falkirk area',
    h2: 'Four starting courses around Falkirk',
    intro: 'An eight-year-old in Larbert drawing patterns, a P7 in Grangemouth trying Python, an S4 in Bo\'ness heading for National 5 Maths, an adult in Polmont retraining. These are their usual first steps, each after a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with pens and stamps, where a turn and a repeat make a pattern.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Angles, sequences and ratios made concrete by drawing them with code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, from trigonometry to sequences and irrational numbers.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from nothing for adults, through to programs that draw and measure.' }
    ]
  },

  sections: [
    {
      id: 'falkirk', tint: '', eyebrow: 'The council area in figures',
      h2: 'About 158,400 people across the council area',
      intro: 'Council-wide numbers are rounded first results from the 2022 census, published by National Records of Scotland. Town sizes are NRS estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'Falkirk council area localities above 3,800 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Falkirk', '35,590', 'Bonnybridge', '5,200'],
          ['Grangemouth', '16,120', 'Polmont', '5,040'],
          ['Bo\'ness', '14,840', 'Brightons', '4,270'],
          ['Larbert', '12,180', 'Maddiston', '3,910'],
          ['Stenhousemuir', '9,620', 'Redding', '3,860'],
          ['Denny', '8,500', '', '']
        ] },
        { kind: 'p', text: 'The area is densely settled at 533.1 residents per square kilometre, against 69.8 for Scotland. Working from the census age bands, we calculate that 16.0 per cent of people are under 15 and 19.6 per cent are 65 or over; the Scottish figures are 15.3 and 20.1. Many smaller villages follow the table, including Hallglen, Carronshore, Laurieston, Dunipace, Banknock and Airth. Falkirk Council sets school holidays, which we have not looked up; each family gives us its own dates.' },
        { kind: 'callout', h3: 'Stirling and the exams', p: 'There is a separate page for <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a>. Pupils in the senior phase can see <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Falkirk project',
      h2: 'The angle that packs seeds perfectly',
      intro: 'One rule, one angle, a thousand seeds.',
      body: [
        { kind: 'p', text: 'The model is a famous one from botany, usually credited to Helmut Vogel. Seed number n is placed at an angle of n times some fixed turn, at a distance from the centre equal to the square root of n. Each new seed turns by the same amount from the last and sits a little further out. The only choice is the turn. The learner writes it in about ten lines of Python, draws a thousand seeds, then measures how close each seed is to its nearest neighbours.' },
        { kind: 'table', caption: 'Our seed-packing runs, 1,000 seeds, measured on seeds 600 to 1,000, 26 September 2026', head: ['Turn per seed', 'What the picture shows', 'Typical gap to nearest seed'], rows: [
          ['144 degrees (two fifths of a turn)', '5 straight spokes, seeds piled up', '0.089'],
          ['140 degrees', '18 spokes', '0.319'],
          ['138 degrees', 'Spirals, but seeds bunch', '1.053'],
          ['137.0 degrees', 'Spirals, uneven gaps', '1.516'],
          ['137.5078 degrees (golden angle)', 'Even packing, no gaps', '1.724']
        ] },
        { kind: 'p', text: 'Any turn that is a simple fraction of a circle fails. Two fifths of a turn means every fifth seed lands on the same line, so seeds pile along five spokes with empty wedges between them. A turn of 140 degrees is seven eighteenths of a circle and makes 18 spokes. The winner is the golden angle, 360 divided by the square of the golden ratio, about 137.5078 degrees. The golden ratio is the number hardest to approximate by fractions, so no seed ever lines up exactly behind an earlier one, and the nearest gaps are the largest and most even of all: they vary by just 1.7 per cent. Move the angle by half a degree to 137.0 and the variation nearly quadruples to 6.4 per cent.' },
        { kind: 'p', text: 'Then comes the surprise. For every seed the learner records how many places back in the sequence its two nearest neighbours are. With the golden angle those gaps are always Fibonacci numbers, 1, 2, 3, 5, 8, 13, 21 and so on, each the sum of the two before. Near the centre the neighbours are 13 and 21 steps apart; further out 21 and 34, then 34 and 55, and at the rim 55 and 89. Those are the spirals the eye picks out, winding both ways. At 138 degrees the gap becomes 60, which is not a Fibonacci number, and the pattern loses its balance.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Use a Scratch pen to stamp dots with a fixed turn each time, try 90, 144 and 137.5 degrees, and describe the difference.' },
          { h3: 'Ages 11 to 15', p: 'Draw the seed head in Python, count the spirals in each direction, and list the Fibonacci numbers up to 1,000.' },
          { h3: 'Ages 15 and up', p: 'Measure nearest-neighbour gaps, show why fractions of a circle make spokes, and relate the golden angle to continued fractions.' }
        ] },
        { kind: 'callout', h3: 'Model, not measurement', p: 'The pineapple on this page is stone, and we have not counted its carved fronds or the scales of any real pineapple. Everything in the table comes from our own simulation of Vogel\'s model.' }
      ]
    },
    {
      id: 'dunmore', tint: 'deep', eyebrow: 'Why the Dunmore Pineapple',
      h2: 'A stone fruit from about 1771',
      intro: 'The Falkirk anchor, as its heritage listing records it.',
      body: [
        { kind: 'table', caption: 'Garden Wall and Pineapple, Dunmore Park, HES listing LB2109', head: ['Listing detail', 'What it records'], rows: [
          ['Category', 'A, added to the list in 1972'],
          ['Dates', 'Bothy ranges dated 1761; pineapple crown circa 1771'],
          ['Builder', 'The Earl of Dunmore'],
          ['Crown', 'An elaborate pineapple of masonry, at the head of a large walled garden'],
          ['Care', 'Restored by the Landmark Trust from 1973; owned by the National Trust for Scotland']
        ] },
        { kind: 'p', text: 'Packing problems like this one turn up wherever things must be placed evenly without a grid: points on an LED ring, sample positions for camera sensors, speaker arrays, and the loading screens of games that spiral dots outwards. Programmers borrow the golden angle for the same reason the model rewards it, because it never repeats. A Falkirk student who has watched five spokes turn into perfect spirals by changing one number has learned that small constants can decide everything.' },
        { kind: 'p', text: 'We are not part of, or linked to, Historic Environment Scotland, the Landmark Trust, the National Trust for Scotland or Falkirk Council. The listing details belong to HES; the seed model, its results and any errors belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From stamped patterns to spirals',
    intro: 'The free lesson places each learner. Stage is only a first guess.',
    cols: [
      { band: 'P1 to P4', h3: 'Turns and repeats', p: 'Block coding where a turn inside a loop draws a shape or a star.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Angles in code', p: 'Typed Python drawing polygons, spirals and sequences, with the maths explained.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Sequences and proof', p: 'Deeper programs next to National 5, Higher and Advanced Higher Maths and Computing Science.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Code that draws', p: 'Python for adults, including graphics, data and small automation projects.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and constants',
    h2: 'An AI can draw a sunflower spiral instantly. Will it get the angle right?',
    intro: 'One digit can turn spirals into spokes.',
    p1: 'Ask an assistant for seed-head code and it will usually produce something that looks right. But round the golden angle to 137 or 138 degrees, or compute it in radians and paste it in as degrees, and the picture quietly changes: spirals bunch, gaps open, or spokes appear. A casual glance may not notice.',
    p2: 'A Falkirk learner who has measured the gaps can tell a correct pattern from a nearly correct one, and knows which number to check. Knowing what to measure is the skill that matters when AI writes the first draft.',
    closer: 'For a Falkirk teenager, then, learning to code in 2026 is how you catch the one wrong constant that an AI slipped in.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Taught from India, joined from Falkirk',
    intro: 'Towns and villages across the council area join the same way, from home.',
    cells: [
      { h3: 'Screen shared, teacher present', p: 'Learners type the code themselves while the teacher sees every line and helps at the moment it goes wrong.' },
      { h3: 'P and S stages, not years', p: 'We use the Scottish words: P5, S2, National 5, Higher and Advanced Higher. Teaching is in English.' },
      { h3: 'A free, real first lesson', p: 'Nothing to pay and nothing to promise. At the end we suggest a starting stage and a course.' },
      { h3: 'Level-matched classes', p: 'Groups of five to ten, all at one stage, with classmates from different countries.' },
      { h3: 'Two lessons a week', p: 'Lessons run in term and pause for the holidays your school sets.' },
      { h3: 'Booked in UK time', p: 'The time you book stays the same UK time all year; teachers in India time handle the clock changes.' }
    ],
    spec: { title: 'Why not a local class?', p: 'Even a town as big as Falkirk rarely has five learners at one level free at one time. Pooling by level means a pupil from Maddiston or Brightons finds a class that fits.' }
  },

  fees: {
    h2: 'Fees across the Falkirk area',
    intro: 'Bo\'ness or Bonnybridge, the monthly fee is identical, and matches the one we charge outside India everywhere.',
    first: 'A complete lesson, free, with an honest placement at the end.',
    group: 'About eight lessons a month in a group of five to ten matched by stage.',
    private: 'About eight lessons a month, just learner and teacher.',
    closer: 'Fees are in US dollars and we publish no sterling prices. Billing begins only after the free lesson, once a course and a weekly time are agreed; the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Reviews left on Google',

  book: {
    h2: 'Book a free Falkirk lesson',
    intro: 'Tell us the learner\'s age or school stage and what they like. A first lesson could be a Scratch pattern, a first Python program, or this page\'s golden angle.',
    success: 'Thank you. Your Falkirk request is in.'
  },

  faq: {
    h2: 'Falkirk questions',
    intro: 'The council area, the pineapple project and the practical side.',
    items: [
      { q: 'How many people live in the Falkirk council area?', a: 'About 158,400 people in roughly 72,500 households, according to the rounded first results of Scotland\'s 2022 census.' },
      { q: 'Which towns are largest in the Falkirk council area?', a: 'From NRS mid-2020 estimates: Falkirk 35,590, Grangemouth 16,120, Bo\'ness 14,840, Larbert 12,180 and Stenhousemuir 9,620.' },
      { q: 'What is the Dunmore Pineapple project?', a: 'Learners place 1,000 seeds with a fixed turn in Python and measure the gaps. Simple fractions of a circle make spokes; the golden angle of about 137.5 degrees packs evenly, and neighbours turn out to be Fibonacci numbers of steps apart.' },
      { q: 'What is the golden angle?', a: 'About 137.5078 degrees: a full circle divided by the square of the golden ratio. It is the turn that keeps new points from ever lining up with old ones.' },
      { q: 'How old is the Dunmore Pineapple?', a: 'Historic Environment Scotland dates the pineapple crown to about 1771 and the bothy ranges to 1761, and lists the building at Category A.' },
      { q: 'Are lessons held in Falkirk itself?', a: 'No, every lesson is online, so learners in Grangemouth, Denny or Airth join from home.' },
      { q: 'Do you teach National 5 Maths?', a: 'Yes, and Higher Maths and Computing Science too. We teach for understanding and make no promises about grades.' },
      { q: 'Who can join?', a: 'Anyone aged 6 to 67. Children start with blocks, older pupils work in Python and exam maths, and adults can start from zero.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Then it is USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons stop in the school holidays?', a: 'Yes. Share your school\'s holiday dates and we pause around them.' }
    ]
  },

  next: {
    eyebrow: 'Also nearby',
    h2: 'More pages around Falkirk',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a> and <a class="cg-inline-link" href="/coding-classes-in-clackmannanshire">Clackmannanshire</a>, which has a beam engine project, or the whole list on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest of the country.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Falkirk area and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-stirling', label: 'Stirling' },
    { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' }
  ],

  personalityCss: `
.cg-root.cg-flk .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-flk .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-flk .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-flk .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-flk .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.015em; }
.cg-root.cg-flk .cg-table caption { font-weight: 600; text-align: left; font-size: 0.95rem; }
.cg-root.cg-flk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-flk .cg-table th { letter-spacing: 0.06em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-flk .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-flk .cg-callout { border-left-width: 4px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Falkirk (S12000014), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 158,400 (females 81,400, males 77,100); households 72,500; density 533.1 per square kilometre (Scotland 69.8); ages 0 to 14 25,300 (16.0 per cent), 65+ 31,100 (19.6 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Falkirk 35,590; Grangemouth 16,120; Bo\'ness 14,840; Larbert 12,180; Stenhousemuir 9,620; Denny 8,500; Bonnybridge 5,200; Polmont 5,040; Brightons 4,270; Maddiston 3,910; Redding 3,860; Hallglen 3,080; Carronshore 2,970; Laurieston 2,650; Dunipace 2,460; Banknock 2,400; Airth 1,960. HES LB2109 (Category A, added 25/10/1972), Garden Wall and Pineapple, Dunmore Park, parish Airth: "Dated 1761 (bothy ranges); circa 1771, pineapple crown"; "elaborate pineapple crown of masonry with exhuberant fronces and finial sited at head of large walled garden"; "acquired that year by Landmark Trust" (1973); "owned by National Trust for Scotland"; "Built by the Earl of Dunmore".',
    localProject: 'Vogel model, 1,000 seeds, radius sqrt(n), two nearest neighbours for seeds 600-1,000. Golden 137.5078: gaps 55/89, mean nn 1.724, min 1.678, CV 1.7 per cent. 137.0: gap 21, mean 1.516, CV 6.4. 137.3: gap 21, mean 1.658. 138.0: gap 60, mean 1.053. 140.0: gap 18, mean 0.319. 144.0: gap 5, mean 0.089. 135.0: gap 8, mean 0.142. Golden by ring: 20-60 13/21; 100-200 34/21; 300-500 55/34; 800-1,000 55/89. Fibonacci ratio 1.61803. No claim about real pineapple or masonry spirals. AI angle: wrong constant. Lesson family: phyllotaxis and golden angle.',
    requiredMentions: [
      '158,400',
      '72,500',
      'Dunmore Pineapple',
      'LB2109',
      'Grangemouth',
      'Bo\'ness',
      'Larbert',
      'Stenhousemuir',
      'Bonnybridge',
      'Polmont',
      'golden angle'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB2109: Garden Wall and Pineapple, Dunmore Park.', url: 'https://portal.historicenvironment.scot/designation/LB2109' }
    ],
    rejectedClaims: [
      'That real pineapples or the carved fronds show Fibonacci spiral counts: not counted, not claimed.',
      'Falkirk Wheel and Kelpies facts: not researched for this page.',
      'The Earl of Dunmore\'s colonial career: in the listing but not needed.',
      'Grangemouth refinery or industry facts: not researched.',
      'Named Falkirk schools: none named.',
      'Falkirk school term dates: none read.'
    ]
  }
};
