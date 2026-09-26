'use strict';
// Ceredigion (cg- county page, UK cluster Phase 7, row 288). One principal area. Spine: if something has never happened in
// the record, how likely could it still be? Anchor (read raw 26 September 2026): Met Office historic station data,
// Aberporth: "Location: 224100E 252100N, Lat 52.139 Lon -4.570, 133 metres amsl"; monthly tmax, tmin, air frost days (af),
// rain and sun; file begins 1941, air frost data complete for 1957 to 2025 (provisional months excluded).
// Our analysis (scratchpad cer/zero.py): 69 years per calendar month. Years with any air frost: Jan 59 (356 frost days),
// Feb 55 (342), Mar 36 (163), Apr 21 (39; latest 2013), May 0, Jun 0, Jul 0, Aug 0, Sep 0, Oct 1 (1 day, 1983), Nov 27
// (56), Dec 52 (253). Zero in 69: rule of three 3/69 = 0.043; exact one-sided 95 per cent Clopper-Pearson bound
// 1 - 0.05^(1/69) = 0.042, about 1 in 24 years at most. Zero in 10 years: 0.300 vs 0.259; 30: 0.100 vs 0.095; 80: 0.037
// vs 0.037.
// Lesson family: the rule of three and exact binomial bounds for zero events; screened (rule of three, Clopper, zero
// events: 0 hits). Distinct from Lincoln (Poisson overdispersion of frost days) and Stornoway (sunshine share).
// Place facts: ONS Census 2021 TS001 via Nomis: Ceredigion W06000008 71,475. ONS built-up areas (published; OA sums
// agree): Aberystwyth 14,640; Cardigan 3,765; Lampeter 2,505; Llanbadarn Fawr 1,765. Newcastle Emlyn BUA 1,840 straddles
// the county boundary (696 inside), excluded. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CEREDIGION', blurb: 'Aberystwyth, Cardigan, Lampeter and Aberaeron, and an Aberporth weather lesson on what "it has never happened" really proves.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-ceredigion',
  code: 'cdg',
  accent: '#0E3D5C',
  accentRationale: 'Ceredigion: a deep bay blue from the solver (9.19:1 on the darkest paper tint), clearer than the Blaenau Gwent blue-black and greener than the Moray navy',
  pageType: 'governorate',
  place: {
    name: 'Ceredigion',
    eyebrow: 'Ceredigion',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Carmarthenshire', href: '/coding-classes-in-carmarthenshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ceredigion',
  title: 'Coding Classes in Ceredigion | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Ceredigion, from Aberystwyth, Cardigan and Lampeter to Aberaeron, New Quay, Tregaron and Borth.',
  ogDescription: 'Coding classes for all of Ceredigion, and an Aberporth project: 69 years without a summer frost, and what the rule of three says about the next one.',
  twitterDescription: 'Ceredigion coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Ceredigion',
    description: 'Ability-placed online coding, Python, statistics and mathematics for children, teenagers and adults across Ceredigion, taught live in English.'
  },

  h1: 'Coding classes in Ceredigion',
  capsuleQ: 'What are the best coding classes in Ceredigion?',
  capsule: 'Ceredigion had 71,475 usual residents at the 2021 census. Aberystwyth is its only large town, with Cardigan, Lampeter and Llanbadarn Fawr next and a scattering of small towns and villages such as Aberaeron, New Quay, Tregaron and Borth. For a county of small towns and villages, live online teaching removes the travel: our teachers in India teach every class on video, and a free first lesson finds the right level for a Year 3 pupil, a Year 12 student or an adult. Learners from 6 to 67 take coding, Python and maths, with a teacher to themselves or in a group of five to ten. The Ceredigion project uses the Aberporth weather record. After the free lesson, it is USD 100 a month for a group place or USD 150 a month one-to-one.',
  lead: 'The Met Office publishes monthly records from its station at Aberporth, 133 metres above sea level, and the air frost counts run unbroken from 1957 to 2025. In those 69 years, not one May, June, July, August or September brought a single day of air frost there. So is a summer frost at Aberporth impossible? Not quite. Never having seen something in 69 tries does not prove it cannot happen; it only limits how common it can be. Statisticians have a beautifully simple rule for exactly this situation, and an exact version to check it against. This page\'s project reads the record in Python and puts a number on never.',
  wa: 'Hello Modern Age Coders, we are in Ceredigion and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Ceredigion',
    h2: 'Where Ceredigion learners start',
    intro: 'A Year 2 pupil in Cardigan who keeps a weather diary, a Year 7 in Lampeter ready to type code, a Year 11 in Aberystwyth preparing for WJEC exams, and an adult in Aberaeron who wants to analyse data. Each begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects with weather games, chance and simple charts.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Probability, fractions and averages, explored by writing code.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, from reading data files to statistics.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Data analysis for adults who need to judge what a record really shows.' }
    ]
  },

  sections: [
    {
      id: 'ceredigion', tint: '', eyebrow: 'Ceredigion in figures',
      h2: '71,475 people in Ceredigion',
      intro: 'The county figure is the 2021 census count of usual residents from ONS, read through Nomis. Town sizes are ONS built-up areas from that census.',
      body: [
        { kind: 'table', caption: 'Ceredigion towns with more than 1,500 people, ONS built-up areas 2021', head: ['Town', 'Usual residents'], rows: [
          ['Aberystwyth', '14,640'],
          ['Cardigan', '3,765'],
          ['Lampeter', '2,505'],
          ['Llanbadarn Fawr', '1,765']
        ] },
        { kind: 'p', text: 'Most people in Ceredigion live outside these four places, in smaller towns and villages. Newcastle Emlyn\'s built-up area is left out of the table because most of it lies across the county boundary; by our output-area count, 696 of its residents live on the Ceredigion side. Schools follow the Curriculum for Wales, with WJEC GCSE and A level courses for older pupils. Ceredigion County Council sets term dates, which we have not read, so families let us know theirs.' },
        { kind: 'callout', h3: 'Nearby pages and WJEC exams', p: 'See <a class="cg-inline-link" href="/coding-classes-in-carmarthenshire">Carmarthenshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-st-davids">St Davids</a>. For exam support: <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ceredigion project',
      h2: 'Putting a number on never',
      intro: 'Sixty-nine years of frost counts, and the rule of three.',
      body: [
        { kind: 'p', text: 'The learner downloads the Aberporth file, reads each month\'s count of air frost days, and skips months marked missing or provisional. Then the program asks, for each calendar month, in how many of the 69 years there was at least one frost. Winter looks as expected: January had frost in 59 of the years, December in 52. The spring and autumn edges are more interesting. April had frost in 21 years, most recently in 2013. October managed it only once, in 1983. And from May to September the answer is zero, every time.' },
        { kind: 'table', caption: 'Air frost at Aberporth, years 1957 to 2025, with our upper bounds, 26 September 2026', head: ['Month', 'Years with any air frost', 'What we can say'], rows: [
          ['January', '59 of 69', 'Frost is usual'],
          ['April', '21 of 69', 'Latest in 2013'],
          ['May to September', '0 of 69 each', 'At most about 4 per cent a year, with 95 per cent confidence'],
          ['October', '1 of 69', 'Once, in 1983'],
          ['December', '52 of 69', 'Frost is usual']
        ] },
        { kind: 'p', text: 'Zero in 69 does not mean the chance is zero. The rule of three says that when something has not happened in n independent tries, you can be about 95 per cent confident its chance per try is below 3 divided by n. Here that is 3 over 69, about 4.3 per cent, so a frosty June at Aberporth is at most roughly a one-in-23-year event, and possibly far rarer. The learner checks the rule against the exact calculation, the Clopper-Pearson bound, which gives 4.2 per cent: the shortcut is remarkably good. With only 10 years of zeros the bound would be much looser, 30 per cent by the rule and 26 by the exact method.' },
        { kind: 'p', text: 'October is the cautionary tale. Anyone reading the record at the end of 1982 would have seen 26 Octobers without frost and might have called it impossible; the next year proved otherwise. The rule of three would have said at most about 12 per cent a year, which was honest. The learner also notes the assumption that years are independent and conditions unchanged, which a warming climate may not respect.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Roll a die 20 times and record whether a six appears; talk about what zero sixes would and would not prove.' },
          { h3: 'Ages 11 to 15', p: 'Read the Aberporth file in Python and count, for each month, the years with at least one frost.' },
          { h3: 'Ages 15 and up', p: 'Compute the rule of three and the exact bound for different numbers of years, and discuss the independence assumption.' }
        ] },
        { kind: 'callout', h3: 'Real record, careful claims', p: 'The frost counts are the Met Office\'s. The bounds come from our own calculations and describe how rare a summer frost could be, not a forecast; they assume each year is an independent try under similar conditions.' }
      ]
    },
    {
      id: 'aberporth', tint: 'deep', eyebrow: 'Why Aberporth',
      h2: 'A weather station 133 metres up',
      intro: 'What the Met Office file states.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data, Aberporth', head: ['File detail', 'What it says'], rows: [
          ['Position', 'Latitude 52.139, longitude -4.570'],
          ['Height', '133 metres above mean sea level'],
          ['Measurements', 'Monthly maximum and minimum temperature, air frost days, rain and sunshine'],
          ['Start of file', '1941, with complete air frost counts from 1957 in our reading'],
          ['Flags', 'Estimated values marked *, missing months ---, recent months provisional']
        ] },
        { kind: 'p', text: 'Reasoning about events that have not happened yet is central to safety engineering, medicine trials, software testing and insurance. If a thousand test runs pass without a crash, the rule of three says the crash rate is probably below three in a thousand, not zero. A Ceredigion student who has put a number on never can apply the same thinking to any "it has never failed" claim.' },
        { kind: 'p', text: 'We have no link with the Met Office or Ceredigion County Council. The weather record belongs to the Met Office; the counts, bounds and any errors in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From dice to confidence bounds',
    intro: 'Year bands are approximate; the free lesson settles the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Chance games', p: 'Block coding with dice, spinners and counting.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Counting in data', p: 'Typed Python reading simple files and counting events.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Probability and statistics', p: 'Probability, binomial models and data work alongside WJEC GCSE and A level courses.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Judging data', p: 'Data analysis and Python for adults who need defensible conclusions.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and never',
    h2: 'An AI can say "that never happens" in seconds. Will it say how sure it is?',
    intro: 'Absence of evidence is not proof of impossibility.',
    p1: 'Ask a chatbot whether Aberporth ever gets a summer frost and it may answer no, based on the record. The honest answer is that none has been recorded in 69 years, and that the chance is at most about 4 per cent a year, which is a different statement.',
    p2: 'A Ceredigion learner who knows the rule of three can turn a flat "never" into a bound with a confidence attached. That is the kind of precision that makes AI answers safe to act on.',
    closer: 'Turning "never" into an honest number is a strong reason for Ceredigion teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Cardigan to Borth, lessons at home',
    intro: 'Across a county of small towns and villages, video lessons remove the journey.',
    cells: [
      { h3: 'Pupils write the code', p: 'Learners type every line; the teacher follows the shared screen and helps at the right moment.' },
      { h3: 'Placed the Welsh way', p: 'A Tregaron Year 4 or an Aberystwyth Year 12 is placed by school year and the Curriculum for Wales, with WJEC exam names. We teach in English.' },
      { h3: 'Free trial first', p: 'One complete lesson for free, then plain advice on what suits.' },
      { h3: 'Classmates at one level', p: 'Five to ten learners working at the same level, some local and many from abroad.' },
      { h3: 'Term time only', p: 'Two lessons a week in term; holidays off.' },
      { h3: 'UK time stays put', p: 'Your lesson keeps its UK hour through the clock changes; teachers on India time adjust.' }
    ],
    spec: { title: 'Why classes reach beyond the county', p: 'In a county of 71,475 people, five learners at one level free at the same time are rare in any one town. Grouping by level gives a pupil in New Quay or Lampeter a class that fits.' }
  },

  fees: {
    h2: 'Fees in Ceredigion',
    intro: 'Aberystwyth or Aberaeron, the fee is identical, the rate we charge everywhere except India.',
    first: 'A full free lesson, then a clear recommendation.',
    group: 'About eight lessons a month with five to ten classmates.',
    private: 'About eight lessons a month, just you and a teacher.',
    closer: 'Prices are in US dollars with no sterling alternative. We only bill after the trial, once a course and weekly slot are agreed; our pricing page explains holidays, absences and changing between group and private lessons.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free Ceredigion lesson',
    intro: 'Say who the learner is, their year or age, and what grabs their interest. We can then open with a Scratch game, a short Python program, or the Aberporth frost record.',
    success: 'Thank you. Your Ceredigion request has been received.'
  },

  faq: {
    h2: 'Ceredigion questions',
    intro: 'The county, the Aberporth project and how lessons work.',
    items: [
      { q: 'How many people live in Ceredigion?', a: 'The 2021 census counted 71,475 usual residents in Ceredigion.' },
      { q: 'What are the largest towns in Ceredigion?', a: 'ONS 2021 built-up areas: Aberystwyth 14,640, Cardigan 3,765, Lampeter 2,505 and Llanbadarn Fawr 1,765.' },
      { q: 'What is the Aberporth project?', a: 'Learners read the Met Office Aberporth record in Python, find no air frost from May to September in 69 years, and use the rule of three and the exact Clopper-Pearson bound to say how rare such a frost could be.' },
      { q: 'What is the rule of three?', a: 'If something has not happened in n independent tries, its chance per try is, with about 95 per cent confidence, below 3 divided by n.' },
      { q: 'Has Aberporth ever had an October frost?', a: 'Once in the years we analysed, in October 1983, according to the Met Office monthly counts.' },
      { q: 'Are lessons held in Aberystwyth?', a: 'All lessons are online, so learners join from home anywhere in Ceredigion.' },
      { q: 'Can you help with WJEC exams?', a: 'Yes, including WJEC GCSE Computer Science and GCSE maths in Wales. We teach for understanding and never promise grades.' },
      { q: 'What ages can learn?', a: 'Anyone aged 6 to 67, from block coding for children to statistics and Python for adults.' },
      { q: 'What does it cost?', a: 'The first lesson is free; afterwards USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do you stop for school holidays?', a: 'Yes. Share your school\'s holiday weeks and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More West Wales pages',
    html: '<a class="cg-inline-link" href="/coding-classes-in-carmarthenshire">Carmarthenshire</a> measures an elliptical arch, <a class="cg-inline-link" href="/best-coding-class-in-st-davids">St Davids</a> has a city page, and <a class="cg-inline-link" href="/coding-classes-in-anglesey">Anglesey</a> tests a castle for symmetry. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page links every area as it is published, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ceredigion and West Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-carmarthenshire', label: 'Carmarthenshire' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-cdg .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-cdg .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-cdg .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-cdg .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cdg .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-cdg .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-cdg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cdg .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-cdg .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-cdg .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Ceredigion (W06000008), Ceredigion County Council. ONS Census 2021 TS001 via Nomis: 71,475. ONS built-up areas (published; OA sums agree): Aberystwyth 14,640; Cardigan 3,765; Lampeter 2,505; Llanbadarn Fawr 1,765; Newcastle Emlyn BUA 1,840 of which 696 inside Ceredigion by our OA sum (excluded from table). Met Office historic station data, Aberporth: "Location: 224100E 252100N, Lat 52.139 Lon -4.570, 133 metres amsl"; monthly air frost days; complete af 1957 to 2025 (provisional excluded).',
    localProject: 'Years with any air frost out of 69 (1957-2025): Jan 59 (356 days), Feb 55 (342), Mar 36 (163), Apr 21 (39, latest 2013), May-Sep 0, Oct 1 (1983, 1 day), Nov 27 (56), Dec 52 (253). Rule of three 3/69 = 0.043; Clopper-Pearson 1 - 0.05^(1/69) = 0.042 (about 1 in 24). n=10: 0.300 vs 0.259; n=30: 0.100 vs 0.095; n=80: 0.037 vs 0.037. October before 1983: 26 frost-free Octobers 1957-1982, rule of three 3/26 = 0.115. Lesson family: rule of three, exact binomial bound for zero events.',
    requiredMentions: [
      'Aberystwyth',
      'Cardigan',
      'Lampeter',
      'Llanbadarn Fawr',
      'Aberaeron',
      'New Quay',
      'Tregaron',
      'Aberporth',
      'rule of three',
      'Clopper-Pearson'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Ceredigion, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Met Office historic station data: Aberporth.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/aberporthdata.txt' }
    ],
    rejectedClaims: [
      'That a summer frost at Aberporth is impossible: explicitly rejected; only an upper bound is given.',
      'Climate trend claims: not computed; independence assumption flagged.',
      'Devil\'s Bridge and Aberystwyth landmarks: not researched for this page.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances between towns: not claimed.'
    ]
  }
};
