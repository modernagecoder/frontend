'use strict';
// East of England (region index, UK cluster Phase 7, row 307). ONS region E12000006. Spine: the East is dry, but is its
// rain spread evenly through the year? Data (downloaded raw 26 September 2026): Met Office historic station data,
// lowestoftdata.txt ("Location 654300E 294600N 25m amsl to July 2007 & from Sept 2007 653000E 293800N, Lat 52.483 Lon
// 1.727, 18m amsl"), cambridgedata.txt ("Lat 52.245 Lon 0.102, 26 metres amsl"), and for contrast cambornedata.txt
// ("Lat 50.218 Lon -5.327, 87m amsl"). Monthly rain in mm.
// Our sums, 1991 to 2020 monthly means: Lowestoft (3 missing months) annual 636.2 mm, wettest October 67.0, driest April
// 36.7, seasonality index 0.150, October to December 30.2 per cent of the year. Cambridge (none missing) 562.9 mm, wettest
// October 58.7, driest March 32.9, SI 0.136, February to April 18.9 per cent (even share 25). Camborne (none missing)
// 1,076.0 mm, wettest November 129.8, driest May 61.2, SI 0.249. SI = sum over months of |monthly mean - annual/12| divided
// by annual; 0 = perfectly even, 11/6 = 1.83 = all in one month. Slip: dropping the absolute value always gives 0.
// Lesson family: rainfall seasonality index (mean absolute deviation from an even share); screened (seasonality index,
// Walsh, mean absolute deviation, evenness: 0 hits). Cambridge city page used the same station for top-k selection only.
// Region facts: ONS Census 2021 TS001 via Nomis TYPE480: East 6,335,074. ONS LAD22 to RGN22 lookup: 45 local authorities.
// ONS Census 2021 BUAs wholly in region: Luton 233,525; Norwich 200,770; Peterborough 190,605; Southend-on-Sea 182,305;
// Cambridge 152,740; Ipswich 151,565; Colchester 130,245; Basildon 115,955; Chelmsford 110,625; Bedford 97,235; Hemel
// Hempstead 95,985; Stevenage 94,470; Harlow 93,580. Milton Keynes and Watford BUAs cross the boundary (Part), omitted.

const AREAS = [['Bedfordshire', 'coding-classes-in-bedfordshire'], ['Cambridge', 'best-coding-class-in-cambridge'], ['Cambridgeshire', 'coding-classes-in-cambridgeshire'],
  ['Chelmsford', 'best-coding-class-in-chelmsford'], ['Colchester', 'best-coding-class-in-colchester'], ['Ely', 'best-coding-class-in-ely'],
  ['Essex', 'coding-classes-in-essex'], ['Hertfordshire', 'coding-classes-in-hertfordshire'], ['Norfolk', 'coding-classes-in-norfolk'],
  ['Norwich', 'best-coding-class-in-norwich'], ['Peterborough', 'best-coding-class-in-peterborough'], ['Southend-on-Sea', 'best-coding-class-in-southend-on-sea'],
  ['St Albans', 'best-coding-class-in-st-albans'], ['Suffolk', 'coding-classes-in-suffolk']];

function linkedAreas() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return AREAS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'region', tag: 'EAST OF ENGLAND', label: 'East of England', blurb: 'Every East of England county and city page in one index, and a Lowestoft and Cambridge lesson on how evenly the rain falls.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-east-of-england',
  code: 'ree',
  accent: '#2A0B4C',
  accentRationale: 'East of England: a dark fenland-sky violet from the solver (13.53:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'East of England',
    eyebrow: 'East of England',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-england', name: 'England' }],
  nav: [
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Cambridge', href: '/best-coding-class-in-cambridge' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'East of England',
  title: 'Coding and AI Classes in the East of England | Ages 6 to 67',
  description: 'Live online coding, AI, Python and maths classes across the East of England, with pages for Essex, Hertfordshire, Norfolk, Suffolk, Cambridge and more.',
  ogDescription: 'Coding and AI classes for the whole East of England, and a Met Office project: measure in Python how evenly rain falls through the year at Lowestoft and Cambridge.',
  twitterDescription: 'East of England coding, AI, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Maths Classes for the East of England',
    description: 'Online coding, AI, Python, statistics and mathematics for children, teenagers and adults across the East of England, taught live in English and placed by level.'
  },

  h1: 'Coding and AI classes in the East of England',
  capsuleQ: 'What are the best coding and AI classes in the East of England?',
  capsule: 'At the 2021 census the East of England region had 6,335,074 residents in 45 local authorities. Luton and Norwich are its largest built-up areas, followed by Peterborough, Southend-on-Sea, Cambridge, Ipswich and Colchester, with Basildon, Chelmsford, Bedford, Stevenage and Harlow close behind. All our teaching is live by video from India. Coding, AI, Python and maths are open to learners between 6 and 67, taught solo or in classes of five to ten grouped by level. The first lesson is free and settles the starting course. This page indexes our East of England pages and runs a rainfall project. Stay on and you pay USD 100 monthly for a class place or USD 150 monthly for solo lessons.',
  lead: 'The Met Office keeps long monthly records for two stations in the East of England: Lowestoft in Suffolk and Cambridge. Over 1991 to 2020 our averages give Cambridge about 563 millimetres of rain a year and Lowestoft about 636, both far less than Camborne in Cornwall, at about 1,076. Being dry is only half the story, though. A farmer, a reservoir engineer or a gardener also wants to know whether the rain comes evenly through the year or in a wet season. Geographers measure that with a seasonality index: add up how far each month strays from an even twelfth of the year, and divide by the year\'s total. This page\'s project computes it in Python for three stations.',
  wa: 'Hello Modern Age Coders, we are in the East of England and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses across the East',
    h2: 'Starting points in the East of England',
    intro: 'A Year 3 pupil in Stevenage who keeps a rain gauge, a Year 8 in Ipswich trying Python, a Year 12 in Bedford on A level maths, and an adult in Luton learning data skills. A free lesson places each one.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Scratch projects with rain, rivers and bar charts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'Python and early AI ideas using real measurements.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Complete secondary maths, including statistics and averages.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for adults analysing real public datasets.' }
    ]
  },

  sections: [
    {
      id: 'east-of-england', tint: '', eyebrow: 'The region by census',
      h2: '6,335,074 people in the East of England',
      intro: 'The total is the ONS Census 2021 usual-resident count for the region, read through Nomis. The town list uses ONS built-up areas that do not cross the regional boundary.',
      body: [
        { kind: 'table', caption: 'East of England towns: ONS 2021 built-up areas that sit entirely inside the region', head: ['Town', 'Population', 'Town', 'Population'], rows: [
          ['Luton', '233,525', 'Colchester', '130,245'],
          ['Norwich', '200,770', 'Basildon', '115,955'],
          ['Peterborough', '190,605', 'Chelmsford', '110,625'],
          ['Southend-on-Sea', '182,305', 'Bedford', '97,235'],
          ['Cambridge', '152,740', 'Hemel Hempstead', '95,985'],
          ['Ipswich', '151,565', 'Stevenage', '94,470']
        ] },
        { kind: 'p', text: 'The ONS lookup lists 45 local authorities in the region. Milton Keynes and Watford are left out of the table because their built-up areas cross the regional boundary. Schools follow the national curriculum for England, from Reception through GCSE and A level with a choice of exam boards, and holiday dates differ by council, so each family tells us its own.' },
        { kind: 'p', text: 'Our pages for the region, each with a separate local project, link here once they are live: ' + linkedAreas() + '.' },
        { kind: 'callout', h3: 'England and A level help', p: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page covers the school system, and <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science NEA help</a> covers the project year.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East of England project',
      h2: 'How evenly does the rain fall?',
      intro: 'Twelve deviations from an even share, added up and scaled.',
      body: [
        { kind: 'p', text: 'The learner reads each station\'s raw file, keeps the rain column, skips months marked missing, and averages each calendar month over 1991 to 2020. The year\'s total divided by twelve is what every month would get if rain fell evenly. Each month\'s gap from that even share is measured without its sign, the gaps are added, and the sum is divided by the year\'s total. The result, a seasonality index of the kind introduced by the geographers Walsh and Lawler in 1981, is 0 for perfectly even rain and about 1.83 if a whole year fell in one month.' },
        { kind: 'table', caption: 'Our rainfall seasonality from Met Office station data, 1991 to 2020 monthly means, 26 September 2026', head: ['Station', 'Rain a year', 'Wettest and driest month', 'Seasonality index'], rows: [
          ['Cambridge', '563 mm', 'October 58.7, March 32.9 mm', '0.136'],
          ['Lowestoft', '636 mm', 'October 67.0, April 36.7 mm', '0.150'],
          ['Camborne, Cornwall (contrast)', '1,076 mm', 'November 129.8, May 61.2 mm', '0.249']
        ] },
        { kind: 'p', text: 'The East is not just dry; its rain is also fairly even. Both East stations score under 0.16, while Camborne, far wetter, has a much stronger winter season, with November more than twice as wet as May. Within the East there is still a pattern: Cambridge\'s February to April gets under 19 per cent of the year\'s rain against an even 25, and at Lowestoft the last three months of the year bring about 30 per cent. Spring is the dry season in both places, which matters for crops that are growing fast just when rain is scarcest.' },
        { kind: 'p', text: 'The telling slip is forgetting to ignore the sign. Months above the even share and months below it always cancel exactly, so without absolute values every station scores zero, and the code seems to prove that all rain is perfectly even. The learner writes a test with an invented year of all rain in one month, which must score 1.83. Our figures are averages from the station files, Lowestoft\'s record spans a small site move in 2007 that the file itself notes, and three Lowestoft months are missing, so the index is a careful estimate rather than an official statistic.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw monthly rain bars for two stations in Scratch and guess which is more even.' },
          { h3: 'Ages 11 to 15', p: 'Read the files in Python, average each month, and compute the index step by step.' },
          { h3: 'Ages 15 and up', p: 'Test the edge cases, try other stations, and compare the index with a simple wettest-over-driest ratio.' }
        ] },
        { kind: 'callout', h3: 'Met Office data, our index', p: 'Monthly rainfall comes from the Met Office station files. The averaging, the index and the percentages are our calculations, so they may differ slightly from published climate averages.' }
      ]
    },
    {
      id: 'why-lowestoft-and-cambridge', tint: 'deep', eyebrow: 'Why these stations',
      h2: 'Two long records in a dry region',
      intro: 'Each file opens with a short description of its own site.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data, as stated in each file', head: ['Detail', 'Lowestoft', 'Cambridge'], rows: [
          ['Position', 'Lat 52.483, Lon 1.727 (from September 2007)', 'Lat 52.245, Lon 0.102'],
          ['Height', '18 m above mean sea level (25 m before July 2007)', '26 m above mean sea level'],
          ['Site history', 'Moved in 2007, as the file records', 'One site listed'],
          ['Values given', 'Monthly temperature, air frost, rain and sunshine', 'The same set'],
          ['Gaps, 1991 to 2020', 'Three missing rain months', 'None missing']
        ] },
        { kind: 'p', text: 'Measuring how evenly something is spread is a common task in data work: how evenly sales fall across the year, how evenly traffic hits a website, how evenly a class\'s marks are spread. A learner in the East of England who has built a seasonality index, and found the bug that makes everything look even, has a tool that transfers to all of them.' },
        { kind: 'p', text: 'Neither the Met Office nor the ONS is linked to us; they publish the numbers, and the seasonality sums on this page, slips included, are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'From rain bars to statistics',
    intro: 'Years are a rough guide; placement happens in the free lesson.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Measuring and charting', p: 'Block coding with bar charts and simple measurements.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Averages in code', p: 'Python that reads data and computes averages.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Statistics and AI', p: 'Spread, deviation and first machine learning alongside GCSE and A level.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Data skills', p: 'Adult Python for analysis, from files to clear results.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and checking',
    h2: 'An AI can write a statistics function. Will it test the edge case?',
    intro: 'A formula that always returns zero can pass for working code.',
    p1: 'Ask a chatbot for a seasonality index and it may drop the absolute value or mix up the divisor. The code runs, prints tidy numbers, and nothing flags that every answer is now zero.',
    p2: 'An East of England learner who has tested the all-in-one-month case knows to check any function against a result that must be true.',
    closer: 'Checking a program against an answer you already know is a habit an East of England teenager builds by coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons in practice',
    h2: 'From Harlow to Norwich, live online',
    intro: 'Towns, villages and fen, all join the same way.',
    cells: [
      { h3: 'Learners type', p: 'Students write their own code, while the tutor reads the shared screen and nudges with questions.' },
      { h3: 'By school year', p: 'A Year 4 in Basildon or a Year 12 in Hemel Hempstead is placed by year and key stage, using each exam board\'s own names.' },
      { h3: 'Free first lesson', p: 'A full trial lesson without charge, then straight advice.' },
      { h3: 'Classes by level', p: 'Each class holds five to ten learners working at one stage, drawn from all over Britain.' },
      { h3: 'Term time only', p: 'Two lessons a week in term; holidays left free.' },
      { h3: 'On UK time', p: 'Lessons keep their UK hour when the clocks change; our teachers move.' }
    ],
    spec: { title: 'Why a region this size still needs online groups', p: 'Five learners at one exact level and hour rarely live in the same town. Online, a Harlow or Ipswich learner joins the right class.' }
  },

  fees: {
    h2: 'East of England fees',
    intro: 'Every town in the region pays the same fee, as does every country we teach outside India.',
    first: 'One complete lesson free, then a recommendation.',
    group: 'Roughly eight lessons a month with five to ten classmates.',
    private: 'Roughly eight lessons a month with one tutor.',
    closer: 'We bill in US dollars, never sterling, and nothing is charged before the trial has agreed a course and a regular time; the pricing page explains breaks, absences and swaps between group and private.'
  },

  reviewsH2: 'How East of England families rate us',

  book: {
    h2: 'Book a free East of England lesson',
    intro: 'A school year or age and one hobby is all we need. The trial could be a Scratch rain chart, a first Python program, or the seasonality index.',
    success: 'Thank you. Your East of England request is in.'
  },

  faq: {
    h2: 'East of England questions',
    intro: 'The region, the rainfall project and the details.',
    items: [
      { q: 'What is the population of the East of England?', a: 'The 2021 census counted 6,335,074 usual residents in the East of England region.' },
      { q: 'What are the largest towns in the East of England?', a: 'Among ONS built-up areas wholly in the region: Luton 233,525, Norwich 200,770 and Peterborough 190,605.' },
      { q: 'What is the rainfall project?', a: 'Learners compute a rainfall seasonality index in Python from Met Office data for Lowestoft, Cambridge and, for contrast, Camborne.' },
      { q: 'What is a seasonality index?', a: 'The total of each month\'s gap from an even share of the year\'s rain, divided by the year\'s total: 0 means perfectly even.' },
      { q: 'How much rain does Cambridge get?', a: 'About 563 mm a year on our 1991 to 2020 averages from the Met Office station file.' },
      { q: 'Are the lessons online?', a: 'Yes, every lesson is live on video from home.' },
      { q: 'Can you support GCSE and A level students?', a: 'Yes, across maths and computing, aiming at real understanding rather than promised results.' },
      { q: 'Who can learn?', a: 'Six-year-olds through to adults of 67, each on a course pitched at their level.' },
      { q: 'What are the fees?', a: 'Nothing for the trial; after it, a class place is USD 100 per month and private tuition USD 150 per month.' },
      { q: 'Do lessons continue in the holidays?', a: 'No. Give us your holiday weeks and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Wider pages',
    h2: 'Beyond the East of England',
    html: 'Next door, <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a> has its own region index. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page covers schools, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page in the series.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'East of England',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/best-coding-class-in-cambridge', label: 'Cambridge' },
    { href: '/coding-classes-in-essex', label: 'Essex' }
  ],

  personalityCss: `
.cg-root.cg-ree .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-ree .cg-hero h1 { font-weight: 705; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-ree .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-ree .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ree .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-ree .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-ree .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ree .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-ree .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-ree .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'East of England region (E12000006). ONS Census 2021 TS001 via Nomis TYPE480: 6,335,074. ONS LAD22 to RGN22 lookup: 45 local authorities. ONS Census 2021 BUAs wholly in region: Luton 233,525; Norwich 200,770; Peterborough 190,605; Southend-on-Sea 182,305; Cambridge 152,740; Ipswich 151,565; Colchester 130,245; Basildon 115,955; Chelmsford 110,625; Bedford 97,235; Hemel Hempstead 95,985; Stevenage 94,470; Harlow 93,580. Met Office historic station data: Lowestoft "25m amsl to July 2007 & from Sept 2007 ... Lat 52.483 Lon 1.727, 18m amsl"; Cambridge "Lat 52.245 Lon 0.102, 26 metres amsl"; Camborne "Lat 50.218 Lon -5.327, 87m amsl".',
    localProject: 'Rain 1991-2020 monthly means. Lowestoft (3 missing) 636.2 mm, Oct 67.0 wettest, Apr 36.7 driest, SI 0.150, Oct-Dec 30.2%. Cambridge 562.9, Oct 58.7, Mar 32.9, SI 0.136, Feb-Apr 18.9%. Camborne 1,076.0, Nov 129.8, May 61.2, SI 0.249. SI range 0 to 11/6. Slip: no absolute value -> 0. Lesson family: rainfall seasonality index (Walsh and Lawler 1981).',
    requiredMentions: [
      'Luton',
      'Ipswich',
      'Basildon',
      'Bedford',
      'Hemel Hempstead',
      'Stevenage',
      'Harlow',
      'Camborne',
      'seasonality index',
      'Walsh and Lawler'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by region, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal lookups: LAD22 to RGN22 and BUA22 to region.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Met Office historic station data, Lowestoft.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/lowestoftdata.txt' },
      { claim: 'Met Office historic station data, Cambridge NIAB.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/cambridgedata.txt' },
      { claim: 'Met Office historic station data, Camborne.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/cambornedata.txt' }
    ],
    rejectedClaims: [
      'Official Met Office rainfall averages: not quoted; our averages from the station files are labelled.',
      'Driest region in England: not claimed as a ranking.',
      'Milton Keynes and Watford BUAs: cross the boundary, omitted.',
      'Named schools and school term dates: none named or read.',
      'Crop and water-supply effects: stated generally, no figures.',
      'Sterling prices: none.'
    ]
  }
};
