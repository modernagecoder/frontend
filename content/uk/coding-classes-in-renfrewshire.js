'use strict';
// Renfrewshire (cg- council area page, UK cluster Phase 7, row 276). One council. Spine: when a bridge rolls instead of
// swinging, where does its tip go? Anchor (read raw 26 September 2026): Historic Environment Scotland LB40425, Category A,
// Rolling Lift Bridge over White Cart Water, Renfrew: "Built 1923. Single-span Scherzer rolling lift bridge, truss span
// with roadway on lower chord"; "Counterweight and control cabins at E end"; "by Sir William Arrol and Co. and is one of
// only two remaining rolling lift bridges in Scotland (the other is the Queenie Lift Bridge in Peterhead)"; "It first
// opened on 24 March 1923. The bridge was refurbished in 2004."
// Our model (scratchpad ren/roll.py; invented sizes, not the Renfrew bridge): leaf length 20 m, rolling segment radius
// 4 m, rolling without slipping along a flat track, so the rolling centre moves back R x angle; compared with a fixed-hinge
// bascule about (0, 0). Tip positions (rolling | hinge): 15 deg (19.31, 5.31) | (19.32, 5.18); 30 deg (17.23, 10.54) |
// (17.32, 10.00); 45 deg (13.83, 15.31) | (14.14, 14.14); 60 deg (9.28, 19.32) | (10.00, 17.32); 70 deg (5.71, 21.43) |
// (6.84, 18.79); 80 deg (1.83, 23.00) | (3.47, 19.70). Centre moved back: 1.05, 2.09, 3.14, 4.19, 4.89, 5.59 m. Tip path
// length 0 to 70 deg: rolling 27.11 m, hinge 24.43 m. Units bug: R x 70 with degrees = 280 m instead of 4.89 m.
// Lesson family: parametric curves, rolling without slipping, rotation plus translation, unit mixing; screened
// (cycloid, trochoid, parametric, bascule: 0 hits). Statics avoided (Fife, Clackmannanshire).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Renfrewshire S12000038 183,800; 86,700 households; 702.9
// per square kilometre; 0 to 14 27,700 (15.1 per cent), 65+ 35,700 (19.4 per cent) by our addition. NRS mid-2020
// localities (a part of the Glasgow locality falls in Renfrewshire; excluded from the table). Paisley Met Office site
// is closed; not used. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'RENFREWSHIRE', blurb: 'Paisley, Renfrew, Johnstone and Erskine, and a Renfrew rolling lift bridge lesson on the curves a rolling leaf draws.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-renfrewshire',
  code: 'rfw',
  accent: '#2A4C41',
  accentRationale: 'Renfrewshire: a painted-steel green from the solver (7.66:1 on the darkest paper tint), greyer than the North Ayrshire green and bluer than the Highland olive',
  pageType: 'governorate',
  place: {
    name: 'Renfrewshire',
    eyebrow: 'Renfrewshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Renfrewshire',
  title: 'Coding Classes in Renfrewshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Renfrewshire, from Paisley, Renfrew and Johnstone to Erskine, Linwood, Bishopton and Bridge of Weir.',
  ogDescription: 'Coding classes for all of Renfrewshire, and a Renfrew bridge project: trace a rolling lift bridge as parametric curves in Python and compare it with a simple hinge.',
  twitterDescription: 'Renfrewshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Renfrewshire',
    description: 'Ability-placed online coding, Python, geometry and motion and mathematics for children, teenagers and adults across Renfrewshire, taught live in English.'
  },

  h1: 'Coding classes in Renfrewshire',
  capsuleQ: 'What are the best coding classes in Renfrewshire?',
  capsule: 'Renfrewshire had about 183,800 residents in roughly 86,700 households at the 2022 census, living at 702.9 people per square kilometre. Paisley is by far its largest town, followed by Renfrew, Johnstone and Erskine, with Linwood, Bishopton, Houston and Bridge of Weir among the rest. Teaching happens live on video from India, and a free first lesson shows which stage fits each learner, P1 to S6 or adult. Anyone aged 6 to 67 can learn coding, Python and maths, one-to-one or with five to ten classmates. The Renfrewshire project starts at a rare bridge in Renfrew. Once the free lesson is over, a group costs USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Over the White Cart Water in Renfrew stands a bridge that opens by rolling. Historic Environment Scotland lists it at Category A: a Scherzer rolling lift bridge built in 1923 by Sir William Arrol and Company, first opened on 24 March 1923, and one of only two rolling lift bridges left in Scotland. Most opening bridges swing up about a fixed hinge. A rolling lift instead rocks backwards on a curved segment, like a rocking chair, so the whole leaf moves back as it tilts up. Where does the tip of a rolling leaf actually go, and how different is its path from a simple hinge? This page\'s project answers with parametric equations in Python, and meets a units bug that turns a few metres into hundreds.',
  wa: 'Hello Modern Age Coders, we are in Renfrewshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Renfrewshire',
    h2: 'Good places to start in Renfrewshire',
    intro: 'A seven-year-old in Paisley who loves machines, a P6 in Johnstone keen on games, an S5 in Erskine taking Higher Maths, and an adult in Renfrew moving into engineering software. Each begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects with moving parts, turning sprites and simple machines.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Coordinates, angles and motion, understood by animating them in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, including trigonometry, radians and parametric curves.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, up to calculations, plots and simulations.' }
    ]
  },

  sections: [
    {
      id: 'renfrewshire', tint: '', eyebrow: 'Renfrewshire in figures',
      h2: 'About 183,800 people in Renfrewshire',
      intro: 'The council total is a rounded first result of the 2022 census from National Records of Scotland. Town sizes are NRS estimates for mid-2020; part of the Glasgow locality also lies in Renfrewshire and is left out here.',
      body: [
        { kind: 'table', caption: 'Renfrewshire localities above 3,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Paisley', '77,270', 'Bishopton', '7,920'],
          ['Renfrew', '24,270', 'Houston', '6,360'],
          ['Johnstone', '15,930', 'Elderslie', '5,480'],
          ['Erskine', '15,010', 'Bridge of Weir', '4,920'],
          ['Linwood', '8,450', 'Kilbarchan', '3,300']
        ] },
        { kind: 'p', text: 'With 702.9 residents per square kilometre, Renfrewshire is ten times as densely settled as Scotland at 69.8. By our addition of the census age bands, 15.1 per cent of residents are under 15, close to Scotland\'s 15.3, and 19.4 per cent are 65 or older, a little below the national 20.1. Renfrewshire Council sets the school terms; we have not read them and plan breaks from each family\'s dates.' },
        { kind: 'callout', h3: 'Glasgow and qualifications', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> page covers the city. For exams, see <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Renfrewshire project',
      h2: 'A leaf that rolls as it rises',
      intro: 'Rotation, translation and one rule: no slipping.',
      body: [
        { kind: 'p', text: 'The sizes are invented. The leaf is a straight span 20 metres long, lying flat across the channel when closed. For a fixed hinge, the tip simply swings around the pivot: at an angle a it sits at 20 cos a across and 20 sin a up. For a rolling lift, the land end carries a curved segment of radius 4 metres that rolls back along a flat track without slipping. No slipping has a precise meaning: when the segment has turned through an angle a, measured in radians, its centre has moved back by exactly 4 times a metres. The learner writes the tip\'s position as that backwards shift plus a rotation, two equations in the angle, which is what mathematicians call a parametric curve.' },
        { kind: 'table', caption: 'Our tip positions, rolling lift versus fixed hinge, invented 20 m leaf, 26 September 2026', head: ['Opening angle', 'Rolling lift tip (across, up)', 'Hinge tip (across, up)', 'Rolling centre moved back'], rows: [
          ['15 degrees', '19.31 m, 5.31 m', '19.32 m, 5.18 m', '1.05 m'],
          ['45 degrees', '13.83 m, 15.31 m', '14.14 m, 14.14 m', '3.14 m'],
          ['60 degrees', '9.28 m, 19.32 m', '10.00 m, 17.32 m', '4.19 m'],
          ['70 degrees', '5.71 m, 21.43 m', '6.84 m, 18.79 m', '4.89 m'],
          ['80 degrees', '1.83 m, 23.00 m', '3.47 m, 19.70 m', '5.59 m']
        ] },
        { kind: 'p', text: 'At small angles the two designs barely differ. As the leaf rises, the rolling version pulls back and climbs higher: at 70 degrees its tip is more than a metre further back from the channel and 2.6 metres higher than the hinged leaf\'s, so boats get more room. The price is that the whole leaf travels back almost 5 metres, and its tip covers 27.1 metres of path against 24.4 for the hinge. Plotting both paths shows the rolling tip tracing a stretched, cycloid-like curve rather than a circle.' },
        { kind: 'p', text: 'Then the bug. Trigonometry functions in Python expect radians, but it is natural to type the angle in degrees. A learner who uses 70 in the rolling rule instead of 70 degrees converted to radians gets the centre moving back 280 metres instead of 4.89, and a bridge that slides away down the road. The fix is simple, but spotting it depends on checking that the answer is physically possible, which is the real lesson.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Roll a coin with a marked dot along a ruler, sketch the path of the dot, then animate a rolling wheel in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Plot a hinged leaf in Python with sine and cosine, then add the rolling shift and compare the two paths.' },
          { h3: 'Ages 15 and up', p: 'Derive the rolling equations, check the no-slip condition numerically, compute path lengths, and trap the radians bug with an assertion.' }
        ] },
        { kind: 'callout', h3: 'A model bridge, not the real one', p: 'The listing gives the bridge type, builder and dates. The leaf length, segment radius and every position in the table are invented for teaching and do not describe the Renfrew bridge\'s real dimensions or movement.' }
      ]
    },
    {
      id: 'rolling-lift', tint: 'deep', eyebrow: 'Why the Renfrew bridge',
      h2: 'One of two rolling lift bridges left in Scotland',
      intro: 'What Historic Environment Scotland records.',
      body: [
        { kind: 'table', caption: 'Rolling Lift Bridge over White Cart Water, Renfrew, HES listing LB40425', head: ['Listing detail', 'What it records'], rows: [
          ['Type', 'Single-span Scherzer rolling lift bridge, truss span with the roadway on the lower chord'],
          ['Builder', 'Sir William Arrol and Company'],
          ['Opened', '24 March 1923'],
          ['Machinery', 'Counterweight and control cabins at the east end'],
          ['Rarity', 'One of only two remaining rolling lift bridges in Scotland; the other is the Queenie Lift Bridge in Peterhead'],
          ['Care', 'Refurbished in 2004']
        ] },
        { kind: 'p', text: 'Parametric curves describe robot arms, animation paths in films and games, gear teeth, cam profiles, and the toolpaths that CNC machines and 3D printers follow. Rolling without slipping is the rule behind wheels, gears and caterpillar tracks. A Renfrewshire student who has traced a rolling bridge leaf in code, and caught a bridge sliding 280 metres down the road, is ready for all of them.' },
        { kind: 'p', text: 'We have no connection with Historic Environment Scotland or Renfrewshire Council. The listing facts are theirs; the model bridge, its numbers and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From rolling coins to parametric curves',
    intro: 'The stages are a guide only; the free lesson decides.',
    cols: [
      { band: 'P1 to P4', h3: 'Moving things', p: 'Block coding with wheels, turns and simple animations.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P5 to S2', h3: 'Angles and motion', p: 'Typed Python with coordinates, angles and plotting.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Trigonometry in code', p: 'Radians, parametric equations and simulations beside National 5, Higher and Advanced Higher Maths.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Engineering Python', p: 'Python for adults, from calculations and plots to simple simulations.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and units',
    h2: 'An AI can animate a bridge in seconds. Will it notice the bridge has moved 280 metres?',
    intro: 'A units slip produces a confident, impossible answer.',
    p1: 'Ask a chatbot for code that animates a rolling lift and it may well mix degrees and radians, one of the commonest slips in geometry code. The animation still runs; the numbers are simply absurd, and nothing on screen flags them.',
    p2: 'A Renfrewshire learner who checks whether an answer is physically possible catches the slip in seconds. Sanity-checking output against the real world is the habit that makes AI-written code safe to use.',
    closer: 'A teenager in Renfrewshire should still learn to code in 2026 so that an impossible answer looks impossible to them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson details',
    h2: 'From Paisley to Bridge of Weir, online',
    intro: 'Busy towns and villages across Renfrewshire join lessons the same way.',
    cells: [
      { h3: 'Writing real code', p: 'Learners type and run every line; the teacher watches the shared screen and steps in when needed.' },
      { h3: 'Scottish stages throughout', p: 'P and S stages, National 5, Higher and Advanced Higher are our terms too. Teaching is in English.' },
      { h3: 'Free first lesson', p: 'A full lesson at no cost, then a clear recommendation.' },
      { h3: 'Groups matched by stage', p: 'Five to ten learners at one stage per group, often from several countries.' },
      { h3: 'Term-time lessons', p: 'Two a week during term, none in the school holidays.' },
      { h3: 'Your UK time stays fixed', p: 'We keep your slot at the same UK time through the clock changes; teachers in India time adjust.' }
    ],
    spec: { title: 'Why groups cross town lines', p: 'Five learners at one stage, free at the same hour, rarely live in one Renfrewshire town. Grouping by stage gives a pupil in Linwood or Kilbarchan a class that fits.' }
  },

  fees: {
    h2: 'Fees in Renfrewshire',
    intro: 'Paisley or Houston, the fee does not change, and it is the same in every country we teach outside India.',
    first: 'A complete lesson at no charge, followed by advice.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'We price in US dollars only, with no sterling list. Billing starts once the free lesson has fixed a course and weekly time; the pricing page covers holidays, missed lessons and changing formats.'
  },

  reviewsH2: 'Google reviews of Modern Age Coders',

  book: {
    h2: 'Book a free Renfrewshire lesson',
    intro: 'Tell us the learner\'s age or school stage and a favourite subject. The first lesson might be a Scratch machine, a Python plot, or the rolling bridge on this page.',
    success: 'Thank you. Your Renfrewshire request has been received.'
  },

  faq: {
    h2: 'Renfrewshire questions',
    intro: 'The council area, the Renfrew bridge project and practical details.',
    items: [
      { q: 'How many people live in Renfrewshire?', a: 'About 183,800 people in roughly 86,700 households, from the rounded first results of Scotland\'s 2022 census.' },
      { q: 'What are the largest towns in Renfrewshire?', a: 'NRS mid-2020 estimates: Paisley 77,270, Renfrew 24,270, Johnstone 15,930 and Erskine 15,010.' },
      { q: 'What is the rolling lift bridge project?', a: 'Learners model an invented rolling lift leaf and a hinged leaf as parametric curves in Python, compare where their tips go, and catch a degrees-for-radians bug that moves the bridge 280 metres.' },
      { q: 'What is a parametric curve?', a: 'A curve described by giving each coordinate as a formula in a third quantity, here the opening angle, so that changing the angle traces the path.' },
      { q: 'When did the Renfrew rolling lift bridge open?', a: 'On 24 March 1923, according to Historic Environment Scotland, which lists it at Category A and names Sir William Arrol and Company as builders.' },
      { q: 'Where are lessons held?', a: 'Online, so learners join from home anywhere in Renfrewshire.' },
      { q: 'Do you teach Higher Maths?', a: 'Yes, and National 5 Maths and Computing Science. We teach understanding and never promise grades.' },
      { q: 'What ages can learn?', a: 'Every age from 6 to 67, from block coding for children to Python and exam maths for teenagers and Python for adults.' },
      { q: 'What are the fees?', a: 'The first lesson is free, then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause in the holidays?', a: 'Yes. Send us your school\'s holiday dates and we fit around them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'Around Renfrewshire',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-east-renfrewshire">East Renfrewshire</a> page controls a reservoir sluice, <a class="cg-inline-link" href="/coding-classes-in-inverclyde">Inverclyde</a> floods a dry dock, and <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> has its own city page. All councils are on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Renfrewshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/higher-maths-tuition-online', label: 'Higher Maths' }
  ],

  personalityCss: `
.cg-root.cg-rfw .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-rfw .cg-hero h1 { font-weight: 710; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-rfw .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-rfw .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rfw .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.019em; }
.cg-root.cg-rfw .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-rfw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rfw .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-rfw .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-rfw .cg-callout { border-left-width: 4px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Renfrewshire (S12000038), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 183,800 (females 95,000, males 88,800); households 86,700; density 702.9 per square kilometre (Scotland 69.8); ages 0 to 14 27,700 (15.1 per cent), 65+ 35,700 (19.4 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Paisley 77,270; Renfrew 24,270; Johnstone 15,930; Erskine 15,010; Linwood 8,450; Bishopton 7,920; Houston 6,360; Elderslie 5,480; Bridge of Weir 4,920; Kilbarchan 3,300 (Glasgow part excluded). HES LB40425 (Category A, added 13/12/1994), Rolling Lift Bridge over White Cart Water, burgh Renfrew: "Built 1923. Single-span Scherzer rolling lift bridge, truss span with roadway on lower chord"; "Counterweight and control cabins at E end"; "by Sir William Arrol and Co. and is one of only two remaining rolling lift bridges in Scotland (the other is the Queenie Lift Bridge in Peterhead)"; "It first opened on 24 March 1923"; "refurbished in 2004".',
    localProject: 'Invented: leaf 20 m, rolling radius 4 m; centre back R x angle. Tips rolling vs hinge: 15 deg (19.31, 5.31) vs (19.32, 5.18); 30 (17.23, 10.54) vs (17.32, 10.00); 45 (13.83, 15.31) vs (14.14, 14.14); 60 (9.28, 19.32) vs (10.00, 17.32); 70 (5.71, 21.43) vs (6.84, 18.79); 80 (1.83, 23.00) vs (3.47, 19.70). Back: 1.05, 2.09, 3.14, 4.19, 4.89, 5.59 m. Path 0-70: 27.11 vs 24.43 m. Degrees bug: 4 x 70 = 280 m. AI angle: degrees vs radians. Lesson family: parametric curves, rolling without slipping.',
    requiredMentions: [
      '183,800',
      '86,700',
      '702.9',
      'Erskine',
      'Linwood',
      'Houston',
      'Elderslie',
      'Bridge of Weir',
      'Kilbarchan',
      'LB40425',
      'Scherzer',
      'rolling lift',
      'White Cart'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB40425: Rolling Lift Bridge over White Cart Water, Renfrew.', url: 'https://portal.historicenvironment.scot/designation/LB40425' }
    ],
    rejectedClaims: [
      'Real span, radius, opening angle or operating details of the Renfrew bridge: not in the listing, not claimed.',
      'Whether the bridge still opens today: not claimed.',
      'Coats Observatory and Paisley weather records: the Met Office Paisley site is marked closed; not used.',
      'Paisley Abbey and textile history: not researched for this page.',
      'Named Renfrewshire schools and school term dates: none named or read.',
      'Directions or distances between towns: not claimed.'
    ]
  }
};
