'use strict';
// Highland (cg- council area page, UK cluster Phase 7, row 267). One council; searched as "the Highlands". Spine: how
// does a computer draw a perfect arch when its curves cannot make a circle? Anchor (read raw 26 September 2026): Historic
// Environment Scotland LB310, Category A, Glenfinnan Railway Viaduct over River Finnan: "Opened 1901; long 21 arched
// concrete viaduct built on curve"; "continuous semi-circular arch rings"; "416 yards (380 m) long"; "The longest concrete
// viaduct in Scotland"; "West Highland Extension Railway opened from Ft William to Mallaig in 1901".
// Our model (scratchpad hld/bezier.py): semicircle of radius 1 drawn with cubic Bezier pieces, handle length
// 4/3 tan(angle/4), evaluated by de Casteljau at 2,001 points per piece. Max radial error: 1 piece 1.835 per cent;
// 2 pieces (handle 0.5523) 0.02725 per cent; 3 pieces 0.00239; 4 pieces 0.00042; 6 pieces 0.00004. Naive handle =
// chord/3: 2 pieces 4.289 per cent, 4 pieces 0.290 per cent. Invented arch radius 7.5 m: worst error 137.63 mm (1 piece),
// 2.04 mm (2), 0.03 mm (4). 416 yards = 380.4 m (ours).
// Lesson family: Bezier curves, de Casteljau, approximation error; screened (Bezier, de Casteljau: 0 hits).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Highland S12000017 235,400; 111,700 households; 9.2 per
// square kilometre; 0 to 14 34,700 (14.7 per cent), 65+ 55,700 (23.7 per cent) by our addition. NRS mid-2020 localities.
// Inverness has its own city page (earthquake lesson); linked, not repeated. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'HIGHLAND', blurb: 'Inverness, Thurso, Aviemore and Portree across the Highlands, and a Glenfinnan Viaduct lesson on how computers draw arches.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-highland',
  code: 'hld',
  accent: '#4B5C29',
  accentRationale: 'Highland: a hill-grass olive from the solver (5.91:1 on the darkest paper tint), yellower than the East Dunbartonshire and Nottinghamshire greens',
  pageType: 'governorate',
  place: {
    name: 'Highland',
    eyebrow: 'Highland council area',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Inverness', href: '/best-coding-class-in-inverness' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Highland',
  title: 'Coding Classes in the Highlands | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across the Highlands, from Inverness, Nairn, Thurso and Wick to Fort William, Aviemore, Portree and Mallaig.',
  ogDescription: 'Coding classes for the whole Highland council area, and a Glenfinnan Viaduct project: draw arches with Bezier curves in Python and measure how far off a circle they are.',
  twitterDescription: 'Highlands coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the Highlands',
    description: 'Ability-placed online coding, Python, computer graphics maths and mathematics for children, teenagers and adults across the Highland council area, taught live in English.'
  },

  h1: 'Coding classes in the Highlands',
  capsuleQ: 'What are the best coding classes in the Highlands?',
  capsule: 'Dividing the census population by its density, we estimate Highland covers roughly a third of Scotland\'s land, yet the 2022 census counted about 235,400 residents in roughly 111,700 households. Inverness is by far the biggest place, with Nairn, Thurso, Wick, Alness and Fort William some way behind, and a long list of villages from Mallaig to Grantown-on-Spey. Distance is exactly why live online lessons suit the Highlands; our teachers work from India, and a free first lesson decides each learner\'s starting stage, P1 to S6 or adult. Anyone from 6 to 67 can learn coding, Python or maths in a group of five to ten or one-to-one. The Highland project comes from the Glenfinnan Viaduct. After the free lesson it costs USD 100 a month in a group, or USD 150 a month one-to-one.',
  lead: 'Historic Environment Scotland lists the Glenfinnan Viaduct at Category A. Opened in 1901 on the railway from Fort William to Mallaig, it is described in the listing as a 21-arch concrete viaduct built on a curve, 380 metres long, with continuous semicircular arch rings, and as the longest concrete viaduct in Scotland. Semicircles look simple, but the curves inside every drawing program, font and web page cannot make an exact circle. They make Bezier curves, and a circle is only ever an approximation. How close can the approximation get, and how would you measure it? This page\'s project draws an arch in Python and finds out.',
  wa: 'Hello Modern Age Coders, we are in the Highlands and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for the Highlands',
    h2: 'Where Highland learners usually start',
    intro: 'A P3 in Thurso who loves drawing, an S1 in Aviemore curious about games, an S4 in Portree working towards National 5, and an adult in Invergordon learning to code for work. Each begins with one free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding that draws shapes, arcs and patterns with a moving pen.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Coordinates, angles and curves learned by drawing them in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, including the trigonometry and polynomials behind curves.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, through to graphics, data and automation.' }
    ]
  },

  sections: [
    {
      id: 'highland', tint: '', eyebrow: 'Highland in numbers',
      h2: 'About 235,400 people over a vast area',
      intro: 'Council totals come from the 2022 census first results, rounded to hundreds by National Records of Scotland. Town sizes are NRS estimates for mid-2020 and are not directly comparable.',
      body: [
        { kind: 'table', caption: 'Highland localities above 3,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Inverness', '47,790', 'Invergordon', '3,930'],
          ['Nairn', '10,190', 'Culloden', '3,830'],
          ['Thurso', '7,390', 'Tain', '3,570'],
          ['Wick', '6,870', 'Caol', '3,310'],
          ['Alness', '5,950', 'Aviemore', '3,230'],
          ['Fort William', '5,600', 'Milton of Leys', '3,160'],
          ['Westhill (Highland)', '5,470', '', ''],
          ['Dingwall', '5,360', '', '']
        ] },
        { kind: 'p', text: 'There are only 9.2 people per square kilometre across Highland, compared with 69.8 for Scotland, so most learners live a long way from any evening coding club. The census age bands, added up by us, give 14.7 per cent of residents under 15 and 23.7 per cent aged 65 and over; Scotland\'s shares are 15.3 and 20.1. Muir of Ord, Grantown-on-Spey, Portree and Conon Bridge are among the places just below the table. Highland Council sets the school terms; we have not read them and plan breaks around each family\'s dates.' },
        { kind: 'callout', h3: 'Inverness and the exams', p: 'The city has a page of its own, <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a>, with a different project. Senior pupils can see <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Highland project',
      h2: 'Drawing an arch that is almost a circle',
      intro: 'Four control points, one algorithm, and an error you can measure.',
      body: [
        { kind: 'p', text: 'A cubic Bezier curve is defined by four points: it starts at the first, ends at the last, and is pulled towards the two in between, called handles. It is how fonts describe letters, how SVG images store shapes, and how drawing apps turn a drag of the mouse into a smooth line. The learner writes the de Casteljau algorithm, which finds any point on the curve by repeatedly taking points part of the way along straight lines, then tries to draw a semicircular arch of radius 1, like the arch rings in the listing. The test is simple: every point on a true circle is exactly 1 from the centre, so the program measures how far each point on the curve strays.' },
        { kind: 'table', caption: 'Our Bezier arches, worst distance from a true semicircle, 26 September 2026', head: ['Pieces for the semicircle', 'Handle length', 'Worst error', 'On an invented 7.5 m radius arch'], rows: [
          ['1 piece', '1.3333', '1.835 per cent', 'About 138 mm'],
          ['2 pieces', '0.5523', '0.027 per cent', 'About 2 mm'],
          ['3 pieces', '0.3573', '0.0024 per cent', 'Under 1 mm'],
          ['4 pieces', '0.2652', '0.0004 per cent', 'About 0.03 mm'],
          ['2 pieces, handle set to a third of the chord', '0.4714', '4.289 per cent', 'Not computed']
        ] },
        { kind: 'p', text: 'A single Bezier curve makes a poor semicircle: it bulges nearly 2 per cent off, which on an arch 15 metres across would be some 138 millimetres. Split the arch into two quarter circles and use the handle length 4/3 times the tangent of a quarter of the angle, which gives the famous 0.5523 for a quarter circle, and the worst error falls to 0.027 per cent. Four pieces bring it below a thousandth of a per cent. Each extra piece cuts the error dramatically, which is why software splits curves rather than using one long one.' },
        { kind: 'p', text: 'The last row is the warning. A tempting guess, handles a third of the chord long, looks smooth on screen but is more than 150 times worse than the right choice for two pieces. Both curves look like arches. Only measurement tells them apart, and the learner who wrote the error check sees it at once. We make no claim about how the real viaduct was drawn or set out in 1901; it was built long before Bezier curves were developed for car design around 1960.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw arches with a Scratch pen from many short straight steps and see how the number of steps changes the smoothness.' },
          { h3: 'Ages 11 to 15', p: 'Write de Casteljau in Python for a single curve, plot it with its handles, and drag the handles to shape an arch.' },
          { h3: 'Ages 15 and up', p: 'Measure the radial error for 1 to 6 pieces, derive 4/3 tan of a quarter angle, and compare with the naive handle length.' }
        ] },
        { kind: 'callout', h3: 'Real listing, invented arch', p: 'The viaduct facts come from Historic Environment Scotland. The 7.5 metre radius and every error figure are from our own program, and do not describe any real arch at Glenfinnan.' }
      ]
    },
    {
      id: 'glenfinnan', tint: 'deep', eyebrow: 'Why Glenfinnan',
      h2: '21 concrete arches from 1901',
      intro: 'What the Category A listing records.',
      body: [
        { kind: 'table', caption: 'Glenfinnan Railway Viaduct over River Finnan, HES listing LB310', head: ['Listing detail', 'What it says'], rows: [
          ['Opened', '1901'],
          ['Form', 'Long 21-arched concrete viaduct built on a curve'],
          ['Arches', 'Continuous semicircular arch rings, with thicker pylons flanking the centre portion'],
          ['Length', '416 yards, which the listing gives as 380 metres (380.4 by our conversion)'],
          ['Significance', 'The longest concrete viaduct in Scotland'],
          ['Railway', 'West Highland Extension, Fort William to Mallaig, opened 1901']
        ] },
        { kind: 'p', text: 'Bezier curves run through almost every screen people use: the letters of this sentence, logos, maps, animation paths in games, and the curves a CNC machine or 3D printer follows. Knowing that they only approximate circles, and how to measure by how much, is the difference between drawing something that looks right and something that is right. A Highland pupil who has measured 138 millimetres of bulge on a one-piece arch will not trust a curve by eye again.' },
        { kind: 'p', text: 'We have no connection with Historic Environment Scotland, Network Rail or Highland Council. The listing\'s facts are theirs; the arch program, its numbers and any slips belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From pen arcs to Bezier curves',
    intro: 'Stages here are approximate. The free lesson finds the real starting point.',
    cols: [
      { band: 'P1 to P4', h3: 'Pens and shapes', p: 'Block coding with a pen that draws squares, stars and rainbows.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Coordinates in Python', p: 'Typed Python drawing on a grid, with angles, points and loops.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Curves and functions', p: 'Trigonometry, polynomials and graphics programs beside National 5, Higher and Advanced Higher.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Graphics and data', p: 'Python for adults, from plotting data to generating shapes and files.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and curves',
    h2: 'An AI can write SVG in seconds. Will its circles really be round?',
    intro: 'A curve can look perfect and be measurably wrong.',
    p1: 'Ask an assistant to draw arches in SVG or Python and it will produce smooth curves that pass a glance. Whether it picked the right handle length, or used enough pieces, is invisible until someone measures, and a CNC cutter or a technical drawing will not be forgiving.',
    p2: 'A Highland learner who has written the radial error check knows how to test generated geometry instead of admiring it. That habit carries over to any drawing, model or file an AI produces.',
    closer: 'So for a young person in the Highlands, learning to code in 2026 means knowing how to check that a curve is what it claims to be.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Classes that cross the Highlands for you',
    intro: 'From Caithness to Lochaber and Skye, the distances that make clubs hard make online lessons easy.',
    cells: [
      { h3: 'Home, croft or flat', p: 'Any quiet corner with a laptop and a connection works; the teacher follows the learner\'s shared screen.' },
      { h3: 'Scottish stages, always', p: 'We say P5, S2, National 5, Higher and Advanced Higher, as Highland schools do, and teach in English.' },
      { h3: 'First lesson on us', p: 'The first lesson is free and complete. We then give an honest view of level and course.' },
      { h3: 'Classmates at the same stage', p: 'Groups of five to ten learners at one level, joining from several countries.' },
      { h3: 'Lessons follow the term', p: 'Twice a week during term; school holidays are breaks.' },
      { h3: 'UK time that stays put', p: 'Your booked UK time holds through the clock changes; our India time teachers do the adjusting.' }
    ],
    spec: { title: 'Why a class by level, not by glen', p: 'Across a council area this size, finding five learners at one stage free on the same evening in any one town is nearly impossible. Pooling by level means a pupil near Tain or Muir of Ord still gets a class that fits.' }
  },

  fees: {
    h2: 'Fees in the Highlands',
    intro: 'Wick or Fort William, the fee does not change, and it is the fee we charge everywhere outside India.',
    first: 'A complete lesson at no cost, then a recommendation.',
    group: 'About eight lessons a month in a group of five to ten at one stage.',
    private: 'About eight lessons a month, learner and teacher only.',
    closer: 'We price in US dollars and keep no sterling price list. No payment is taken until after the free lesson, when a course and weekly slot are agreed; holidays, missed lessons and switching formats are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a free Highland lesson',
    intro: 'Tell us the learner\'s age or school stage and something they enjoy. The first lesson might be a Scratch drawing, a first Python program, or the arch on this page.',
    success: 'Thank you. Your Highland request has arrived.'
  },

  faq: {
    h2: 'Highland questions',
    intro: 'The council area, the viaduct project and practical points.',
    items: [
      { q: 'How many people live in the Highland council area?', a: 'About 235,400 people in roughly 111,700 households, from the rounded first results of Scotland\'s 2022 census.' },
      { q: 'What are the biggest towns in the Highlands?', a: 'From NRS mid-2020 estimates: Inverness 47,790, then Nairn 10,190, Thurso 7,390, Wick 6,870 and Alness 5,950.' },
      { q: 'What is the Glenfinnan project?', a: 'Learners draw a semicircular arch with cubic Bezier curves in Python and measure the error: 1.8 per cent with one piece, 0.027 per cent with two, and under a thousandth of a per cent with four.' },
      { q: 'What is a Bezier curve?', a: 'A smooth curve set by a start point, an end point and handle points that pull it into shape. Fonts, SVG images and drawing apps are built from them.' },
      { q: 'When did the Glenfinnan Viaduct open?', a: 'In 1901, according to Historic Environment Scotland, which lists it at Category A as the longest concrete viaduct in Scotland.' },
      { q: 'Do learners in remote places need anything special?', a: 'A computer and an internet connection that can handle a video call. Lessons are online, so Portree and Thurso join like anywhere else.' },
      { q: 'Can you help with Higher Maths?', a: 'Yes, and with National 5 Maths and Computing Science. We aim for real understanding and do not promise grades.' },
      { q: 'What ages can join?', a: 'Ages 6 to 67: blocks for young children, Python and maths for secondary pupils, and Python for adults from the very beginning.' },
      { q: 'What are the fees?', a: 'The first lesson is free. Then USD 100 a month for a group place or USD 150 a month one-to-one.' },
      { q: 'Do you stop for Highland school holidays?', a: 'Yes. Send us your school\'s holiday dates and lessons pause for them.' }
    ]
  },

  next: {
    eyebrow: 'More pages',
    h2: 'Near the Highlands',
    html: 'Visit <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a>, or the <a class="cg-inline-link" href="/coding-classes-in-argyll-and-bute">Argyll and Bute</a> and <a class="cg-inline-link" href="/coding-classes-in-aberdeenshire">Aberdeenshire</a> council pages. Every council is listed on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'The Highlands and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-inverness', label: 'Inverness' },
    { href: '/national-5-computing-science-help', label: 'National 5 Computing Science' }
  ],

  personalityCss: `
.cg-root.cg-hld .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-hld .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-hld .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-hld .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hld .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.016em; }
.cg-root.cg-hld .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-hld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hld .cg-table th { letter-spacing: 0.04em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-hld .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-hld .cg-callout { border-left-width: 5px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Highland (S12000017), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 235,400 (females 120,000, males 115,400); households 111,700; density 9.2 per square kilometre (Scotland 69.8); ages 0 to 14 34,700 (14.7 per cent), 65+ 55,700 (23.7 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Inverness 47,790; Nairn 10,190; Thurso 7,390; Wick 6,870; Alness 5,950; Fort William 5,600; Westhill (Highland) 5,470; Dingwall 5,360; Invergordon 3,930; Culloden 3,830; Tain 3,570; Caol 3,310; Aviemore 3,230; Milton of Leys 3,160; Muir of Ord 2,840; Grantown-on-Spey 2,510; Portree 2,310; Conon Bridge 2,190. HES LB310 (Category A, added 05/10/1971), Glenfinnan Railway Viaduct over River Finnan, parish Arisaig and Moidart: "Opened 1901; long 21 arched concrete viaduct built on curve"; "Thicker pylons flank centre portion of continuous semi-circular arch rings"; "416 yards (380 m) long"; "The longest concrete viaduct in Scotland"; "West Highland Extension Railway opened from Ft William to Mallaig in 1901".',
    localProject: 'Cubic Bezier semicircle, radius 1, handle 4/3 tan(theta/4), de Casteljau at 2,001 points per piece. Max radial error: 1 piece 1.83501 per cent (handle 1.3333); 2 pieces 0.02725 (0.5523); 3 pieces 0.00239 (0.3573); 4 pieces 0.00042 (0.2652); 6 pieces 0.00004. Naive chord/3: 2 pieces 4.2893 (0.4714); 4 pieces 0.2897. Radius 7.5 m: 137.63 mm, 2.04 mm, 0.03 mm. 416 yd = 380.4 m. Bezier curves attributed to 1960s car industry (general knowledge, Bezier at Renault, de Casteljau at Citroen); page says only "car industry of the 1960s". Lesson family: Bezier approximation error.',
    requiredMentions: [
      'Glenfinnan',
      'LB310',
      'de Casteljau',
      'Thurso',
      'Invergordon',
      'Aviemore',
      'Mallaig',
      'Portree',
      'Grantown-on-Spey',
      'Culloden',
      'Muir of Ord'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB310: Glenfinnan Railway Viaduct over River Finnan.', url: 'https://portal.historicenvironment.scot/designation/LB310' }
    ],
    rejectedClaims: [
      'Film and tourist-train associations of the viaduct: not in the listing, not used.',
      'Arch spans, radii or curve radius of the real viaduct: not in the listing, not claimed; 7.5 m is invented.',
      'How the viaduct was set out in 1901: not claimed.',
      'Gaelic-language statistics: excluded by rule.',
      'Named Highland schools and school term dates: none named or read.',
      'Travel times between Highland towns: not claimed.'
    ]
  }
};
