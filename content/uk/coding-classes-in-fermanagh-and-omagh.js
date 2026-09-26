'use strict';
// Fermanagh and Omagh (cg- county page, UK cluster Phase 7, row 303). One local government district. Spine: how do you date
// a bridge nobody dated? Anchor (read raw 26 September 2026, Department for Communities Historic Buildings database,
// apps.communities-ni.gov.uk/Buildings/buildview.aspx?id=13224, HB12/02/079, Cloncorrick, Newtownbutler, council Fermanagh
// and Omagh): "A single semicircular arch carries a one-and-a-half lane hump-backed road over the Ulster Canal"; "The towpath
// runs through the arch on the south side"; "The span of the arch is approximately 6.12m (20ft 1in), of which the actual canal
// occupies 4.09m (13ft 5in)"; Architects "Cubitt, William"; "The Ulster Canal was constructed between Charlemont (Co Armagh)
// and Wattle Bridge (Co Fermanagh) between 1825 and 1842. The consulting engineer was William Cubitt and the principal
// contractor William Dargan (better known for his railways). This particular bridge is not depicted in the 1834 OS 6" map,
// and must therefore date to later in the same decade"; "The canal was closed in 1931". Companion records use the same
// reasoning: canal store HB12/02/091 id 13043 ("not depicted in the 1834 OS 6" map"), aqueduct HB12/02/078 id 7262 ("cited as
// 'Aqueduct' in the 1857 and 1907 editions").
// Our model (worked inline): each clue an interval [earliest, latest]; intersection = (max of starts, min of ends). Canal
// works 1825 to 1842; absent from 1834 map -> from 1834; closed 1931 -> by 1931; (aqueduct-style) shown on 1857 map -> by
// 1857. Intersection 1834 to 1842 (8 years, from 32 for 1825 to 1857). The record's "same decade" = 1834 to 1839, a further
// judgement. Invented clue: datestone 1829 -> empty intersection; removing the datestone gives 1834 to 1842, removing the
// 1834 map gives 1829 only: two candidate culprits, so judgement decides. Slip: union instead of intersection -> 1825 to 1931.
// Survey-date subtlety: a map shows what was there when surveyed, not when printed (general, hedged).
// Lesson family: dating by evidence intervals (terminus post quem / ante quem), intersection, conflict detection; screened
// (terminus post quem, interval arithmetic, constraint propagation: 0 hits; Northumberland = tide-window intervals;
// Derby = sweep-line overlap counts).
// Place facts: NISRA Census 2021 MS-A01: Fermanagh and Omagh N09000006 116,812. DEAs (exact, not summed): Enniskillen 18,451;
// Erne East 15,944; Erne North 15,083; Erne West 14,661; Mid Tyrone 17,590; Omagh 18,480; West Tyrone 16,603. Settlements
// (NISRA approximations): Omagh Town 20,458; Enniskillen 14,086; Lisnaskea 3,020; Irvinestown 2,320; Ballinamallard 1,364;
// Fintona 1,212; Newtownbutler 972. Membership via HED Council field. No transfer test advice; no identity data; no
// disaster content.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'FERMANAGH AND OMAGH', blurb: 'Enniskillen, Omagh, Lisnaskea and Irvinestown, and an Ulster Canal lesson on dating a bridge from the clues around it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-fermanagh-and-omagh',
  code: 'fom',
  accent: '#501F7A',
  accentRationale: 'Fermanagh and Omagh: a lake-dusk purple from the solver (9.31:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Fermanagh and Omagh',
    eyebrow: 'Fermanagh and Omagh',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Northern Ireland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Armagh', href: '/best-coding-class-in-armagh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Fermanagh and Omagh',
  title: 'Coding Classes in Fermanagh and Omagh | Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Fermanagh and Omagh: Enniskillen, Omagh, Lisnaskea, Irvinestown, Ballinamallard, Fintona and beyond.',
  ogDescription: 'Fermanagh and Omagh coding classes, and an Ulster Canal project: turn each clue into a date range in Python, intersect them, and catch clues that contradict.',
  twitterDescription: 'Fermanagh and Omagh coding, Python and maths for ages 6 to 67, taught live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Fermanagh and Omagh',
    description: 'Online coding, Python, logic and mathematics for children, teenagers and adults across Fermanagh and Omagh, taught live in English and placed by level.'
  },

  h1: 'Coding classes in Fermanagh and Omagh',
  capsuleQ: 'What are the best coding classes in Fermanagh and Omagh?',
  capsule: 'The 2021 census found 116,812 usual residents in Fermanagh and Omagh, according to NISRA. Omagh and Enniskillen are the two main towns, and smaller places include Lisnaskea, Irvinestown, Ballinamallard, Fintona and Newtownbutler. We run every lesson live on video, with teachers working from India. Anyone aged 6 to 67 can study coding, Python and maths, alone with a tutor or in a group of five to ten matched by level. A first lesson at no cost settles where to begin. The district project starts at a small bridge over a closed canal. Carrying on costs USD 100 a month for group classes or USD 150 a month for private tuition.',
  lead: 'Near Newtownbutler a single stone arch carries a humpbacked road over the old Ulster Canal, with a towpath running through beneath it. Nobody carved a date on it. The Historic Environment Division\'s record dates it the way a detective would. The canal was built between 1825 and 1842, with William Cubitt as consulting engineer. The bridge is missing from the Ordnance Survey map of 1834, so it must be later than that. Each clue rules some years in and others out, and together they squeeze the answer into a narrow window. That is a job a computer can do perfectly, and a job where a single bad clue can quietly wreck the answer. This page\'s project turns clues into date ranges in Python and finds out what they really prove.',
  wa: 'Hello Modern Age Coders, we are in Fermanagh and Omagh and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Fermanagh and Omagh',
    h2: 'First steps for Fermanagh and Omagh learners',
    intro: 'A P4 pupil in Lisnaskea who loves mysteries, a Year 8 in Irvinestown trying Python, a Year 13 in Enniskillen taking CCEA A level Software Systems Development, and an Omagh adult learning to code. The free lesson places each one.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with clues, logic puzzles and detective games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'Typed Python for younger learners, with if statements and ranges.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Complete Python for teenagers, from functions to testing and debugging.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for data, cleaning records and checking them for conflicts.' }
    ]
  },

  sections: [
    {
      id: 'fermanagh-and-omagh', tint: '', eyebrow: 'Census figures for the district',
      h2: '116,812 people across Fermanagh and Omagh',
      intro: 'The district total and the seven electoral areas below come from NISRA\'s Census 2021 table MS-A01. We print each area exactly as published and never add them up.',
      body: [
        { kind: 'table', caption: 'Fermanagh and Omagh district electoral areas, NISRA Census 2021 usual residents', head: ['District electoral area', 'People', 'District electoral area', 'People'], rows: [
          ['Enniskillen', '18,451', 'Mid Tyrone', '17,590'],
          ['Erne East', '15,944', 'Omagh', '18,480'],
          ['Erne North', '15,083', 'West Tyrone', '16,603'],
          ['Erne West', '14,661', '', '']
        ] },
        { kind: 'p', text: 'NISRA\'s settlement estimates, which it describes as approximations, put Omagh Town at 20,458 and Enniskillen at 14,086, then Lisnaskea at 3,020, Irvinestown at 2,320, Ballinamallard at 1,364, Fintona at 1,212 and Newtownbutler at 972. Pupils here follow the Northern Ireland Curriculum from P1 through Year 14, sitting CCEA GCSEs and A levels in the final years. We have not checked any school calendars, so families send us their holiday dates.' },
        { kind: 'callout', h3: 'Armagh and CCEA support', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a> page covers the cathedral city. For exams, see <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">CCEA A level Software Systems Development</a> and <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology programming</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Fermanagh and Omagh project',
      h2: 'Dating a bridge from its clues',
      intro: 'Every clue is a range of years; the answer is where they all overlap.',
      body: [
        { kind: 'p', text: 'Historians have Latin names for the two kinds of clue: a terminus post quem is the earliest a thing can be, and a terminus ante quem is the latest. In code both become a pair of numbers, earliest and latest. To combine two ranges you take the later of the two starts and the earlier of the two ends. If the start is still before the end, that overlap is the answer. The learner writes that one small function, feeds it the clues from the record one at a time, and prints how the window shrinks.' },
        { kind: 'table', caption: 'Our clue-by-clue dating of the Cloncorrick canal bridge, 26 September 2026', head: ['Clue', 'Range it allows', 'Window so far', 'Width'], rows: [
          ['Built with the Ulster Canal', '1825 to 1842', '1825 to 1842', '17 years'],
          ['Missing from the 1834 map', '1834 onwards', '1834 to 1842', '8 years'],
          ['Canal closed in 1931', 'Up to 1931', '1834 to 1842', 'No change'],
          ['Record judges it the same decade', '1834 to 1839', '1834 to 1839', '5 years']
        ] },
        { kind: 'p', text: 'Two lessons come out of the table. First, some clues add nothing: the closing date of 1931 is true but does not narrow anything, and a good program can report which clues did the work. Second, the last row is different in kind. The evidence alone gives 1834 to 1842; saying the bridge dates from the same decade adds an expert\'s judgement that it was built during the canal works rather than at their very end. Code keeps the two apart, so a reader can see which part is proof and which is judgement.' },
        { kind: 'p', text: 'Then the learner adds a made-up clue, a datestone reading 1829, and the overlap vanishes: the start comes after the end. The program must not just crash. It tries removing each clue in turn and finds two ways to restore agreement: drop the datestone, or drop the map. Code cannot say which to trust; that takes judgement about sources. There is also a subtler point: a map shows what was standing when it was surveyed, which can be earlier than the year printed on it. And the classic slip is using the earlier start and the later end, which takes the union rather than the overlap and widens the answer to 1825 to 1931.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play guess-the-year with clue cards on a number line, then turn it into a Scratch game.' },
          { h3: 'Ages 11 to 15', p: 'Write the overlap function in Python, feed it the clues and print the shrinking window.' },
          { h3: 'Ages 15 and up', p: 'Detect contradictions, find which clues to drop, and write tests for the union slip.' }
        ] },
        { kind: 'callout', h3: 'The record\'s clues, our code', p: 'Every real clue comes from the Historic Environment Division\'s record. The datestone is invented to show a conflict, and the widths are our arithmetic, so the table demonstrates the method rather than re-dating the bridge.' }
      ]
    },
    {
      id: 'ulster-canal', tint: 'deep', eyebrow: 'Why the Ulster Canal',
      h2: 'A canal bridge with a towpath beneath',
      intro: 'What the Historic Environment Division\'s record says.',
      body: [
        { kind: 'table', caption: 'Canal bridge, Cloncorrick, Newtownbutler, Department for Communities historic building record HB12/02/079', head: ['Record detail', 'What it says'], rows: [
          ['Structure', 'A single semicircular arch carrying a humpbacked road over the Ulster Canal'],
          ['Span', 'About 6.12 m, of which the canal itself takes 4.09 m'],
          ['Towpath', 'Runs through the arch on the south side'],
          ['Canal works', 'Built between 1825 and 1842; consulting engineer William Cubitt, contractor William Dargan'],
          ['Dating', 'Not shown on the 1834 Ordnance Survey map, so later'],
          ['Canal closed', '1931']
        ] },
        { kind: 'p', text: 'Combining ranges and spotting conflicts is everyday work in software. Calendars check meeting times against each other, databases reject records whose dates cannot all be true, and version-control tools work out which changes are compatible. A learner in Fermanagh and Omagh who has turned a heap of clues into a firm window, and found the clue that breaks it, is practising the same reasoning.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with NISRA or the Department for Communities. The record belongs to them; the interval code, with any slip in it, belongs to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing with the learner',
    h2: 'From clue cards to conflict detection',
    intro: 'Use these stages as a rough map; the free lesson does the placing.',
    cols: [
      { band: 'P3 to P7', h3: 'Logic games', p: 'Block coding with clues, choices and yes-or-no rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 8 to 10', h3: 'Conditions in Python', p: 'If statements, comparisons and number ranges in typed code.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 11 to 14', h3: 'Testing and logic', p: 'Functions, tests and inequalities alongside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Checking data', p: 'Adult Python for cleaning and validating real records.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and evidence',
    h2: 'An AI will give you a date. Will it tell you which part is judgement?',
    intro: 'A confident answer often blends proof and guesswork.',
    p1: 'Ask a chatbot when a small bridge was built and it may give one tidy year, mixing firm evidence with assumptions and never saying which is which. If two sources disagree, it may simply pick one.',
    p2: 'A learner who has coded the overlap of clues knows to ask what range the evidence supports, where judgement comes in, and what happens when a source conflicts.',
    closer: 'Separating proof from judgement is a good reason for a Fermanagh and Omagh teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'From Belleek to Beragh, lessons by video',
    intro: 'Lakeside, hillside or town, all anyone needs is a connection.',
    cells: [
      { h3: 'Learner at the controls', p: 'Each student types their own code, and the tutor reads along on the shared screen, asking questions that point the way.' },
      { h3: 'Northern Ireland placement', p: 'A Fintona P7 or an Enniskillen Year 11 is placed by key stage and school year, and CCEA names are used for exams. We teach in English.' },
      { h3: 'First lesson free', p: 'A full lesson without charge, ending with our straight advice.' },
      { h3: 'Classes by level', p: 'Groups of five to ten at one stage, drawn from across the UK.' },
      { h3: 'During term', p: 'Two lessons a week in term, with the holidays left free.' },
      { h3: 'Clock changes handled', p: 'Your lesson hour on the local clock stays put when the clocks change; our teachers move instead.' }
    ],
    spec: { title: 'Why a rural district suits online groups', p: 'In a spread-out district, five learners at one level rarely live near each other. Online, a Newtownbutler or Ballinamallard learner studies beside peers at the same stage.' }
  },

  fees: {
    h2: 'What lessons cost in Fermanagh and Omagh',
    intro: 'Enniskillen and Omagh pay the same, and so does every country we teach outside India.',
    first: 'A full lesson free, with advice on where to go next.',
    group: 'Approximately eight lessons a month in a group of five to ten.',
    private: 'Approximately eight lessons a month with a personal tutor.',
    closer: 'All fees are in US dollars; we publish no sterling price. Billing starts only once the trial has fixed a course and a weekly slot, and the pricing page explains holidays, missed lessons and changing formats.'
  },

  reviewsH2: 'Google ratings from our families',

  book: {
    h2: 'Book a free Fermanagh and Omagh lesson',
    intro: 'Tell us the learner\'s age or school year and a hobby. The trial could be a Scratch detective game, a first Python program, or the Ulster Canal dating puzzle.',
    success: 'Thank you. Your Fermanagh and Omagh request has arrived safely.'
  },

  faq: {
    h2: 'Fermanagh and Omagh questions',
    intro: 'The district, the canal project and the practical side.',
    items: [
      { q: 'What is the population of Fermanagh and Omagh?', a: 'NISRA\'s Census 2021 counted 116,812 usual residents in the district.' },
      { q: 'What are the largest towns in Fermanagh and Omagh?', a: 'NISRA estimates Omagh Town at 20,458 and Enniskillen at 14,086, with Lisnaskea next at 3,020.' },
      { q: 'What is the Ulster Canal project?', a: 'Learners turn each clue about a canal bridge into a range of years in Python, overlap the ranges to date it, and detect clues that contradict each other.' },
      { q: 'What does terminus post quem mean?', a: 'The earliest date something can be, such as the date of a map on which a building does not yet appear.' },
      { q: 'When was the Ulster Canal built?', a: 'Between 1825 and 1842, according to the Historic Environment Division record, which also says it closed in 1931.' },
      { q: 'Are classes held online?', a: 'Yes, every class is live online, joined from home.' },
      { q: 'Do you support CCEA qualifications?', a: 'Yes, in maths and computing. We teach for understanding and never promise results.' },
      { q: 'What ages can join?', a: 'Anyone from 6 to 67, with a course to suit.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Afterwards it is USD 100 a month for a group or USD 150 a month for one-to-one.' },
      { q: 'Do lessons stop for school holidays?', a: 'They do. Send us your holiday weeks and we leave them out.' }
    ]
  },

  next: {
    eyebrow: 'Around Northern Ireland',
    h2: 'Other Northern Ireland pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a> counts how far a star catalogue is out of order, <a class="cg-inline-link" href="/coding-classes-in-causeway-coast-and-glens">Causeway Coast and Glens</a> splits the wind on three runways, and <a class="cg-inline-link" href="/coding-classes-in-antrim-and-newtownabbey">Antrim and Newtownabbey</a> tows aircraft out of a dead-end park. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> guide lists all the districts, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the other nations.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'Fermanagh and Omagh',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-class-in-armagh', label: 'Armagh' },
    { href: '/ccea-a-level-software-systems-development-help', label: 'CCEA A level SSD' }
  ],

  personalityCss: `
.cg-root.cg-fom .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-fom .cg-hero h1 { font-weight: 690; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-fom .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-fom .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-fom .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.017em; }
.cg-root.cg-fom .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-fom .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-fom .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-fom .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-fom .cg-callout { border-left-width: 4px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Fermanagh and Omagh (N09000006). NISRA Census 2021 MS-A01: 116,812. DEAs (exact, not summed): Enniskillen 18,451; Erne East 15,944; Erne North 15,083; Erne West 14,661; Mid Tyrone 17,590; Omagh 18,480; West Tyrone 16,603. Settlements (NISRA approximations): Omagh Town 20,458; Enniskillen 14,086; Lisnaskea 3,020; Irvinestown 2,320; Ballinamallard 1,364; Fintona 1,212; Newtownbutler 972. Department for Communities historic building HB12/02/079, canal bridge, Cloncorrick, Newtownbutler: "A single semicircular arch carries a one-and-a-half lane hump-backed road over the Ulster Canal"; "The towpath runs through the arch on the south side"; "span of the arch is approximately 6.12m (20ft 1in), of which the actual canal occupies 4.09m"; "constructed between Charlemont (Co Armagh) and Wattle Bridge (Co Fermanagh) between 1825 and 1842. The consulting engineer was William Cubitt and the principal contractor William Dargan"; "not depicted in the 1834 OS 6-inch map, and must therefore date to later in the same decade"; "The canal was closed in 1931".',
    localProject: 'Dating by evidence intervals: canal works 1825-1842; absent from 1834 map -> from 1834; closed 1931 -> by 1931 (no change); window 1834-1842 (8 years); record judgement same decade 1834-1839. Invented datestone 1829 -> empty; drop datestone -> 1834-1842, drop map -> 1829: two culprits. Union slip -> 1825-1931. Lesson family: terminus post quem / ante quem interval intersection and conflict detection.',
    requiredMentions: [
      'Lisnaskea',
      'Irvinestown',
      'Newtownbutler',
      'Ballinamallard',
      'Fintona',
      'Erne East',
      'Mid Tyrone',
      'Ulster Canal',
      'William Cubitt',
      'terminus post quem'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by LGD, DEA and settlement.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'Department for Communities Historic Buildings database, record HB12/02/079, canal bridge at Cloncorrick.', url: 'https://apps.communities-ni.gov.uk/Buildings/buildview.aspx?id=13224' },
      { claim: 'Department for Communities Historic Environment Division GIS data (Historic Buildings layer with council field).', url: 'https://services2.arcgis.com/BdBkthNLO9mzGAMO/arcgis/rest/services/Historic_Environment_Division_GIS_Data/FeatureServer' }
    ],
    rejectedClaims: [
      'A firm construction year for the bridge: not in the record; only ranges and the record judgement.',
      'The datestone of 1829: invented for the lesson and labelled so.',
      'The canal line across the border (aqueduct record): not used.',
      'Transfer test advice: excluded by rule.',
      'Community background, religion and identity statistics: excluded by rule.',
      'Named schools, school term dates, distances and travel times: none named, read or claimed.'
    ]
  }
};
