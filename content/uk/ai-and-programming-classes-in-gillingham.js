'use strict';
// Gillingham, Medway (cg- town page, UK cluster Phase 8, towns band A, row 352). Keyword slug per the owner's 2026-09-27
// instruction. Spine: were William Adams's miles wrong, or was his Gillingham somewhere else? Anchor (read raw 28 September
// 2026): Project Gutenberg 46803, "Diary of Richard Cocks, Cape-Merchant in the English Factory in Japan, 1615-1622", ed.
// Edward Maunde Thompson (Hakluyt Society), introduction quoting Adams's letter: William Adams, "a Kentish man, born in a town
// called Gillingham, two English miles from Rochester, one mile from Chatham where the king's ships do lie"; Adams "learned
// him some points of geometry and understanding of the arts of mathematics" (of Iyeyasu); the Charity anchored in Bungo "on
// the 19th of April, 1600".
// Positions: OS Open Names town points via postcodes.io /places (read 28 September 2026): Gillingham 51.369207, 0.578556;
// Rochester 51.389791, 0.503628; Chatham 51.384905, 0.525525 (all Medway). Our run (geographiclib WGS84 geodesic, 1 statute
// mile = 1,609.344 m): Gillingham to Rochester 5,697 m (3.54 mi); Gillingham to Chatham 4,085 m (2.54 mi); Chatham to Rochester
// 1,618 m (1.01 mi). GC + CR - GR = 6 m, so the three points are almost exactly in line with Chatham between. Ratio GR/GC
// 1.39 (Adams 2.0). Implied length of one "Adams mile": 2.85 km from GR, 4.08 km from GC (no single unit fits both). Shortfall
// in statute miles: 1.54 and 1.54 (one constant offset fits both). Adams's figures imply CR = 1 mile if collinear; measured
// 1.01.
// Lesson family: diagnosing a systematic error, scale (unit) vs offset (reference point), using a collinearity check and
// ratio test. Screened: systematic error, scale factor, unit-free, betweenness, William Adams, Cocks 0 hits (Redbridge did
// trilateration of stations; Nottingham convex hull; Newham additive vs multiplicative seasonal decomposition).
// Place facts: Nomis Census 2021 TS007A, Medway E06000035: total 279,776; 0 to 4 17,308 (6.2%; England 5.4%); 5 to 9 18,336
// (6.6%; 5.9%); 30 to 34 20,368 (7.3%; 7.0%); 75 to 79 8,934 (3.2%; 3.6%); 80 to 84 6,025 (2.2%; 2.5%); 85 and over 5,163
// (1.8%; 2.4%). ONS 2021 BUAs: Gillingham (Medway) 108,480 (our OA sum inside Medway 107,877); Chatham 76,955 (mostly inside;
// our sum 71,345); Rochester 67,285; Hoo St Werburgh 8,760; Cuxton 3,040.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GILLINGHAM', label: 'Gillingham (Medway)', blurb: 'AI and programming classes for Gillingham in Medway, with a project that tests William Adams\'s distances from Gillingham to Rochester and Chatham.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-gillingham',
  code: 'gil',
  accent: '#3E3E8A',
  accentRationale: 'Gillingham: a dockyard navy blue (7.48:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Gillingham',
    eyebrow: 'Gillingham, Medway, Kent, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gillingham, Medway, England',
  title: 'AI and Programming Classes in Gillingham | Coding for 6 to 67',
  description: 'Online AI, programming and Python classes for Gillingham, Chatham, Rochester and Hoo learners in Medway aged 6 to 67, one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Gillingham in Medway, and a Python project that tests William Adams\'s distances to Rochester and Chatham.',
  twitterDescription: 'Gillingham AI, programming and coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Gillingham',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Gillingham and across Medway, taught live at the right level.'
  },

  h1: 'AI and programming classes in Gillingham',
  capsuleQ: 'Which are the best AI and programming classes in Gillingham?',
  capsule: 'Gillingham is the largest built-up area in Medway: the ONS gives it 108,480 people at the 2021 census, reaching slightly past the council boundary, while Medway as a whole had 279,776. Chatham, Rochester and Hoo St Werburgh are the other main places. Under-tens make up a larger share than across England and people over 75 a smaller one. Learners from 6 to 67 anywhere in Medway can take AI, programming, Python and maths live online with our tutors in India, on their own or in a group of five to ten at the same level. The first lesson is free and ends with a course recommendation. Gillingham\'s project checks a sailor\'s description of his home town. After the trial it is USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'In October 1611, far away in Japan, the navigator William Adams wrote a letter to his "unknown friends and countrymen". He introduced himself as "a Kentish man, born in a town called Gillingham, two English miles from Rochester, one mile from Chatham where the king\'s ships do lie". The editor of Richard Cocks\'s diary quotes it, and adds that Adams taught the ruler of Japan "some points of geometry". Four centuries later a Python learner can test the geometry of that sentence. Measured today, both of Adams\'s distances are too short. The interesting question is why, and code can tell two very different explanations apart.',
  wa: 'Hello Modern Age Coders, we would love a free AI or programming lesson for a learner in Gillingham.',

  picks: {
    eyebrow: 'Gillingham course picks',
    h2: 'Courses Gillingham learners often start with',
    intro: 'Let age and interests guide the choice; each course begins with a free live lesson and needs no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with ships, maps and treasure-hunt games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with distances, coordinates and small AI jobs.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete teen Python, including the Adams distances project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from scratch through to data and maps.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Medway',
      h2: 'A young-leaning Medway',
      intro: 'Census results are published for Medway as a whole; six age bands from Nomis, set beside England.',
      body: [
        { kind: 'table', caption: 'Medway and England, six age bands (TS007A, 2021)', head: ['Ages', 'Medway total', 'Medway %', 'England %'], rows: [
          ['0 to 4', '17,308', '6.2%', '5.4%'],
          ['5 to 9', '18,336', '6.6%', '5.9%'],
          ['30 to 34', '20,368', '7.3%', '7.0%'],
          ['75 to 79', '8,934', '3.2%', '3.6%'],
          ['80 to 84', '6,025', '2.2%', '2.5%'],
          ['85 and over', '5,163', '1.8%', '2.4%']
        ] },
        { kind: 'p', text: 'The youngest bands sit well above England and the oldest below it, with adults in their early thirties slightly over the national share. The ONS lists Chatham at 76,955 and Rochester at 67,285, along with Hoo St Werburgh and Cuxton, among Medway\'s built-up areas. Medway schools teach the national curriculum for England; send us your term dates and lessons will stay clear of the holidays.' },
        { kind: 'callout', h3: 'County and region', p: 'For the county see <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a>, and for the region <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Gillingham project',
      h2: 'Two miles to Rochester, one to Chatham?',
      intro: 'Measure the three towns, compare with Adams, and work out what kind of error it is.',
      body: [
        { kind: 'p', text: 'The learner looks up the three towns in the Ordnance Survey\'s gazetteer of place names, which gives a single reference point for each, and measures the distances between them on the Earth\'s surface with the geographiclib package. Gillingham to Rochester comes out at 5,697 metres, which is 3.54 statute miles. Gillingham to Chatham is 4,085 metres, or 2.54 miles. Chatham to Rochester is 1,618 metres, 1.01 miles. Adams said 2 and 1. So both of his figures are short by a mile and a half. The obvious guess is that the "English mile" of 1611 was a different length from ours, and that guess is exactly what the program is built to test.' },
        { kind: 'table', caption: 'Adams\'s distances against the modern gazetteer points, our Python run, 28 September 2026', head: ['Pair', 'Adams (English miles)', 'Measured (statute miles)', 'Measured minus Adams'], rows: [
          ['Gillingham to Rochester', '2', '3.54', '1.54'],
          ['Gillingham to Chatham', '1', '2.54', '1.54'],
          ['Chatham to Rochester', '1 (implied, if in a line)', '1.01', '0.01'],
          ['Ratio of the first two', '2.0', '1.39', 'Does not match'],
          ['Straightness: GC + CR minus GR', 'Zero if in a line', '6 metres', 'Almost perfectly in line']
        ] },
        { kind: 'p', text: 'If the problem were the unit, every distance would be off by the same factor, so the ratio of the two distances would survive. It does not: Adams\'s ratio is 2.0 and today\'s is 1.39. Working backwards, his "mile" would have to be 2.85 kilometres long from one pair and 4.08 kilometres from the other, which is impossible for a single unit. Now try the other explanation, a shifted starting point. The differences are 1.54 and 1.54 miles, identical to two decimal places. One constant offset explains both numbers perfectly.' },
        { kind: 'p', text: 'The geometry shows why. Adding Gillingham to Chatham and Chatham to Rochester gives only 6 metres more than the direct Gillingham to Rochester distance, so the three reference points lie almost exactly on one line with Chatham in the middle. Adams\'s own numbers make the same shape: 2 miles minus 1 mile leaves 1 mile from Chatham to Rochester, and today\'s figure is 1.01. His description fits the modern map beautifully, provided his Gillingham stood about a mile and a half nearer Chatham than the point the gazetteer uses today. The learner concludes that the evidence points to a reference-point difference, not a faulty mile, and writes down what would be needed to go further: where the town centre lay in 1611.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Put three coins in a line, measure between them with a ruler, then move one and see what changes.' },
          { h3: 'Ages 11 to 15', p: 'Compute the three distances in Python and compare differences and ratios.' },
          { h3: 'Ages 15 and up', p: 'Test scale against offset properly and check how straight the line really is.' }
        ] },
        { kind: 'callout', h3: 'Adams\'s words, our measurements', p: 'The quotations come from the Project Gutenberg edition of the Diary of Richard Cocks, edited by Edward Maunde Thompson. Town positions are Ordnance Survey Open Names points, read through postcodes.io. All distances and comparisons are our own calculations.' }
      ]
    },
    {
      id: 'adams', tint: 'deep', eyebrow: 'Why William Adams',
      h2: 'A Kentish pilot who taught geometry in Japan',
      intro: 'What the editor of Cocks\'s diary records about him.',
      body: [
        { kind: 'table', caption: 'William Adams in the introduction to the Diary of Richard Cocks (Project Gutenberg)', head: ['Detail', 'From the source'], rows: [
          ['Birthplace', '"a town called Gillingham"'],
          ['His distances', '"two English miles from Rochester, one mile from Chatham"'],
          ['His role at sea', 'Senior pilot of a Dutch trading fleet that sailed in 1598'],
          ['Arrival in Japan', 'The ship anchored in Bungo on 19 April 1600'],
          ['What he taught', '"some points of geometry and understanding of the arts of mathematics"'],
          ['Our finding', 'Both distances short by 1.54 miles; an offset, not a unit']
        ] },
        { kind: 'p', text: 'Diagnosing a systematic error, and in particular telling a scale error from an offset error, is a daily task in science and engineering. A thermometer that always reads two degrees high needs a different fix from one that reads ten percent high; a GPS track shifted sideways is a different fault from one stretched along its length. Sensors, surveys and machine learning models all get checked this way, by looking at differences and ratios side by side. A Gillingham learner who has done it with a four-hundred-year-old letter will recognise the pattern in any dataset.' },
        { kind: 'p', text: 'Modern Age Coders has no link with Project Gutenberg, Ordnance Survey, postcodes.io or the census office. Their texts and data are theirs; the measurements and any error in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From rulers to real error analysis',
    intro: 'Year groups are a starting guess; the free lesson makes the call.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Maps in blocks', p: 'Block coding with maps, routes and measuring.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and distance', p: 'Coordinates, distances and comparisons in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Errors, data and AI', p: 'Error analysis, geometry and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data and measurement', p: 'Adult Python towards data and measurement work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and old claims',
    h2: 'Would an AI blame the old mile?',
    intro: 'A neat story can be more tempting than a test.',
    p1: 'Ask a chatbot why Adams\'s distances look wrong and it may explain, confidently, that old English miles were longer. It sounds right, but the numbers on this page show that no single mile length fits both distances.',
    p2: 'A Gillingham learner who has compared ratios and differences knows to test an explanation against every number, not just the one that suits it.',
    closer: 'Testing a plausible explanation before accepting it is a strong reason for Gillingham teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Rochester to Rainham, all online',
    intro: 'Any home in Medway with a computer and reliable broadband is ready.',
    cells: [
      { h3: 'Code by the learner', p: 'Students type every program themselves, and the tutor, watching by screen share, helps them along with questions.' },
      { h3: 'Placed by ability', p: 'A Year 5 or a Year 12 begins at the level the free lesson finds, with the exam board noted.' },
      { h3: 'Opening lesson free', p: 'A complete lesson with no charge, ending in a clear course suggestion.' },
      { h3: 'One level per group', p: 'Five to ten UK learners at a shared stage.' },
      { h3: 'Two lessons a week', p: 'None in the school holidays.' },
      { h3: 'A time that stays put', p: 'Our tutors handle the UK clock changes.' }
    ],
    spec: { title: 'Why small groups meet online', p: 'Five Medway learners at the same level, free at the same hour, rarely live on one street. Online classes let each join a well-matched group.' }
  },

  fees: {
    h2: 'Gillingham fees',
    intro: 'Gillingham families pay our standard rate for every country except India.',
    first: 'One whole lesson for free, followed by a course suggestion.',
    group: 'Roughly eight live small-group lessons per month.',
    private: 'Roughly eight live private lessons per month.',
    closer: 'We charge in US dollars, not sterling. Billing begins only after the trial has chosen a course and a regular weekly time; holidays, missed lessons and switching formats are all on the pricing page.'
  },

  reviewsH2: 'Kent and UK families on Google',

  book: {
    h2: 'Book a free Gillingham lesson',
    intro: 'Tell us how old the learner is, or their school year, plus one interest. First-lesson ideas: a Scratch ship game, a first Python program, a short AI experiment, or measuring Adams\'s three distances.',
    success: 'Thank you. The Gillingham request is with us now.'
  },

  faq: {
    h2: 'Gillingham questions',
    intro: 'The Adams project, Medway figures and practical points.',
    items: [
      { q: 'What is the population of Gillingham?', a: 'The ONS gives 108,480 for the Gillingham built-up area at the 2021 census; Medway as a whole had 279,776.' },
      { q: 'Can Gillingham learners take AI and programming classes online?', a: 'Yes. Learners aged 6 to 67 across Medway join our live online AI, programming, Python and maths lessons.' },
      { q: 'Who was William Adams?', a: 'A navigator who described himself as born in Gillingham, two English miles from Rochester and one from Chatham; he reached Japan in 1600.' },
      { q: 'Were his distances right?', a: 'Measured between today\'s gazetteer points, both are 1.54 miles too short, which fits a different starting point better than a different mile.' },
      { q: 'How can you tell a unit error from an offset?', a: 'A unit error keeps ratios the same; an offset keeps differences the same. Here the differences match and the ratios do not.' },
      { q: 'Are lessons held face to face?', a: 'No. Lessons happen live online only.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in maths and computing, focused on understanding and never on promised grades.' },
      { q: 'Which ages can join?', a: 'Everyone from 6 to 67.' },
      { q: 'How much does it cost?', a: 'The trial lesson is free. Afterwards it is USD 100 per month in a group, or USD 150 per month one-to-one.' },
      { q: 'Do you pause for school holidays?', a: 'Yes; tell us when they are.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages in Kent and the South East',
    html: 'Elsewhere in Kent, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a> has a Hazlitt project, and <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a> has its own page. County options are on <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>, and every page is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Gillingham and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-gil .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.3vw, 2.7rem); }
.cg-root.cg-gil .cg-hero h1 { font-weight: 790; letter-spacing: -0.029em; line-height: 1.02; }
.cg-root.cg-gil .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-gil .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gil .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-gil .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-gil .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gil .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-gil .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-gil .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Medway (E06000035). Nomis Census 2021 TS007A: total 279,776; 0 to 4 17,308 (6.2%, England 5.4%); 5 to 9 18,336 (6.6%, 5.9%); 30 to 34 20,368 (7.3%, 7.0%); 75 to 79 8,934 (3.2%, 3.6%); 80 to 84 6,025 (2.2%, 2.5%); 85 and over 5,163 (1.8%, 2.4%). ONS 2021 BUAs: Gillingham (Medway) 108,480; Chatham 76,955; Rochester 67,285; Hoo St Werburgh 8,760; Cuxton 3,040. Project Gutenberg 46803, Diary of Richard Cocks vol. 1, ed. Edward Maunde Thompson: William Adams "a Kentish man, born in a town called Gillingham, two English miles from Rochester, one mile from Chatham where the king\'s ships do lie"; "learned him some points of geometry"; anchored in Bungo "on the 19th of April, 1600". OS Open Names via postcodes.io: Gillingham 51.369207, 0.578556; Rochester 51.389791, 0.503628; Chatham 51.384905, 0.525525.',
    localProject: 'Geodesic WGS84: GR 5,697 m (3.54 mi), GC 4,085 m (2.54 mi), CR 1,618 m (1.01 mi); GC + CR - GR = 6 m (collinear, Chatham between). Ratio GR/GC 1.39 vs Adams 2.0; implied Adams mile 2.85 km vs 4.08 km (no single unit); shortfalls 1.54 and 1.54 mi (constant offset). Lesson family: systematic error diagnosis, scale vs offset, ratio vs difference test, collinearity check.',
    requiredMentions: [
      '279,776',
      '108,480',
      'Hoo St Werburgh',
      'Cuxton',
      'William Adams',
      'Richard Cocks',
      'Kentish man',
      'systematic error'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Medway and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Diary of Richard Cocks, Volume 1, ed. Edward Maunde Thompson (ebook 46803).', url: 'https://www.gutenberg.org/ebooks/46803' },
      { claim: 'OS Open Names place points for Gillingham, Rochester and Chatham, via postcodes.io.', url: 'https://postcodes.io/' }
    ],
    rejectedClaims: [
      'Where Gillingham\'s centre stood in 1611: not established; the page says only what the offset implies.',
      'The length of an "English mile" in 1611: not claimed; the test shows no single unit fits.',
      'The date of Adams\'s letter: October 1611, as stated in the editor\'s introduction ("written in October, 1611").',
      'Chatham Dockyard history: not read from a source; only Adams\'s phrase is quoted.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
