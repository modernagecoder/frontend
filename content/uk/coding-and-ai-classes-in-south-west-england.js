'use strict';
// South West England (region index, UK cluster Phase 7, row 308). ONS region E12000009. Spine: how far does the
// temperature swing between night and day, and why is it so small in Cornwall? Data (downloaded raw 26 September 2026):
// Met Office historic station data, cambornedata.txt ("Location 162700E 40700N, Lat 50.218 Lon -5.327, 87m amsl") and
// yeoviltondata.txt ("Location: 355100E 123200N, Lat 51.006 Lon -2.641, 20 metres amsl"). Monthly mean tmax and tmin.
// Our sums, 1991 to 2020, all 360 months complete at both: mean diurnal range (tmax - tmin) by month. Camborne: Jan 4.31,
// May 5.72 (largest), Oct 4.66, Dec 4.31; year 5.04. Yeovilton: Jan 6.64, May 9.71 (largest), Jul 9.69, Oct 7.73, Dec 6.74;
// year 8.40 (1.67 times Camborne). May minus January: Camborne 1.41, Yeovilton 3.07. Annual range of monthly means (the
// thing people confuse it with): Camborne 9.29 (warmest August 16.17, coldest February 6.88), Yeovilton 11.79 (July 17.08,
// January 5.29). Yearly mean temperature: Camborne 11.11, Yeovilton 10.67. Distance to tidal water by our check against
// ONS Countries (December 2022) GB BFC: Camborne station 2.4 km, Yeovilton 17.2 km.
// Lesson family: diurnal temperature range, maritime damping, range-of-means vs mean-of-ranges; screened (diurnal range,
// temperature range, Yeovilton: 0 hits).
// Region facts: ONS Census 2021 TS001 via Nomis TYPE480: South West 5,701,186. ONS LAD22 to RGN22 lookup: 30 local
// authorities. ONS Census 2021 BUAs wholly in region: Bristol 425,215; Plymouth 266,955; Bournemouth 196,455; Swindon
// 183,680; Kingswood and Fishponds 160,270; Poole 141,005; Exeter 126,175; Gloucester 118,555; Cheltenham 115,940; Bath
// 94,080; Weston-super-Mare 84,605; Paignton 67,520; Taunton 61,665; Torquay 52,035.

const AREAS = [['Bath', 'best-coding-class-in-bath'], ['Bristol', 'best-coding-class-in-bristol'], ['Cornwall', 'coding-classes-in-cornwall'],
  ['Devon', 'coding-classes-in-devon'], ['Dorset', 'coding-classes-in-dorset'], ['Exeter', 'best-coding-class-in-exeter'],
  ['Gloucester', 'best-coding-class-in-gloucester'], ['Gloucestershire', 'coding-classes-in-gloucestershire'], ['Plymouth', 'best-coding-class-in-plymouth'],
  ['Salisbury', 'best-coding-class-in-salisbury'], ['Somerset', 'coding-classes-in-somerset'], ['Truro', 'best-coding-class-in-truro'],
  ['Wells', 'best-coding-class-in-wells'], ['Wiltshire', 'coding-classes-in-wiltshire']];

function linkedAreas() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return AREAS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'region', tag: 'SOUTH WEST ENGLAND', label: 'South West England', blurb: 'Every South West county and city page in one index, and a Camborne and Yeovilton lesson on why nights and days differ so little in Cornwall.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-south-west-england',
  code: 'rsw',
  accent: '#3F0B4C',
  accentRationale: 'South West England: a deep heather-moor purple from the solver (12.41:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'South West England',
    eyebrow: 'South West England',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-england', name: 'England' }],
  nav: [
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Bristol', href: '/best-coding-class-in-bristol' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'South West England',
  title: 'Coding and AI Classes in South West England | Ages 6 to 67',
  description: 'Live online coding, AI, Python and maths classes across South West England, with pages for Bristol, Plymouth, Exeter, Cornwall, Devon, Dorset and more.',
  ogDescription: 'Coding and AI classes for the South West, and a Met Office project: compare the gap between day and night temperatures at Camborne and Yeovilton in Python.',
  twitterDescription: 'South West England coding, AI, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Maths Classes for South West England',
    description: 'Online coding, AI, Python, data and mathematics for children, teenagers and adults across South West England, taught live in English with learners grouped by level.'
  },

  h1: 'Coding and AI classes in South West England',
  capsuleQ: 'What are the best coding and AI classes in South West England?',
  capsule: 'South West England had 5,701,186 usual residents at the 2021 census, spread over 30 local authorities. Bristol is by far its biggest built-up area at 425,215, then Plymouth, Bournemouth, Swindon and Poole, with Exeter, Gloucester, Cheltenham, Bath, Taunton and Torquay among the other large towns. Every lesson we run is live, on video, with teachers in India. Children, teenagers and adults from 6 to 67 learn coding, AI, Python and maths, alone with a tutor or in a small class of five to ten at matching level. Nothing is charged for the first lesson, which picks the course. Below you will find our South West pages and a weather project. Afterwards it costs USD 100 a month for a class or USD 150 a month for private tuition.',
  lead: 'Stand outside in Cornwall on a summer afternoon and again before dawn, and the temperature has not moved as much as you might expect. Meteorologists call the gap between the day\'s highest and lowest temperature the diurnal range, and it tells you a lot about a place. The Met Office publishes long monthly records for Camborne, in Cornwall, and for Yeovilton, in Somerset, and averaged over 1991 to 2020 our sums put Camborne\'s typical daily swing at about 5 degrees and Yeovilton\'s at more than 8. Why so different, when the two yearly averages sit within half a degree of each other? And why is the swing biggest in May, not midsummer? This page\'s project works it out from the raw files in Python.',
  wa: 'Hello Modern Age Coders, we are in South West England and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses across the South West',
    h2: 'Where South West learners start',
    intro: 'A Year 1 pupil in Torquay who watches the thermometer, a Year 7 in Swindon beginning Python, a Year 13 in Cheltenham on A level maths, and an adult in Taunton learning to handle data. The free lesson finds each a course.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with thermometers, day and night, and charts.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Subtraction, averages and graphs explored in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'In-depth secondary maths, including statistics and data handling.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for adults working with files, tables and charts.' }
    ]
  },

  sections: [
    {
      id: 'south-west-england', tint: '', eyebrow: 'South West figures',
      h2: '5,701,186 residents in the South West',
      intro: 'This region total comes from Nomis, which publishes the ONS 2021 census counts. Every town listed is an ONS built-up area contained completely within the region.',
      body: [
        { kind: 'table', caption: 'South West towns and cities: ONS 2021 built-up areas that lie completely within the region', head: ['Place', 'People', 'Place', 'People'], rows: [
          ['Bristol', '425,215', 'Exeter', '126,175'],
          ['Plymouth', '266,955', 'Gloucester', '118,555'],
          ['Bournemouth', '196,455', 'Cheltenham', '115,940'],
          ['Swindon', '183,680', 'Bath', '94,080'],
          ['Kingswood and Fishponds', '160,270', 'Taunton', '61,665'],
          ['Poole', '141,005', 'Torquay', '52,035']
        ] },
        { kind: 'p', text: 'ONS counts Kingswood and Fishponds as a built-up area of its own, separate from Bristol. According to the ONS lookup the region holds 30 local authorities. Schooling follows England\'s national curriculum, Reception to Year 13, with GCSE and A level papers from several boards; term dates vary between councils, so we ask each family for theirs.' },
        { kind: 'p', text: 'Each of our South West pages has its own local project, and they are linked below as they go live: ' + linkedAreas() + '.' },
        { kind: 'callout', h3: 'England and exam support', p: 'For how schooling works nationally, see our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page, and for the coursework year, <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science NEA help</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The South West project',
      h2: 'Day against night at two stations',
      intro: 'Subtract the night from the day, month by month, and compare.',
      body: [
        { kind: 'p', text: 'Each line of a Met Office station file gives a month\'s average daily maximum and average daily minimum. Subtracting one from the other gives the average diurnal range for that month. The learner parses both files, keeps 1991 to 2020, confirms that all 360 months are present at each station, and averages each calendar month. Then comes a neat bit of algebra: because averaging is linear, the average of the differences equals the difference of the averages, and the program checks that the two routes agree to the last decimal.' },
        { kind: 'table', caption: 'Our diurnal ranges from Met Office station data, 1991 to 2020, 26 September 2026', head: ['Measure', 'Camborne, Cornwall', 'Yeovilton, Somerset', 'Comment'], rows: [
          ['Yearly average daily swing', '5.04 C', '8.40 C', 'Yeovilton swings 1.67 times as much'],
          ['January', '4.31 C', '6.64 C', 'Smallest in winter at both'],
          ['May', '5.72 C', '9.71 C', 'Largest month at both'],
          ['May minus January', '1.41 C', '3.07 C', 'The inland station changes more with the seasons'],
          ['Warmest minus coldest month', '9.29 C', '11.79 C', 'A different measure: the yearly range']
        ] },
        { kind: 'p', text: 'Camborne\'s station sits about 2.4 kilometres from tidal water by our check against the ONS coastline boundary, and the sea changes temperature slowly, so it keeps nights mild and days cool. Yeovilton, about 17 kilometres from the nearest tidal water, heats and cools more freely. May tops both lists, most likely because its long days warm the afternoons while its nights can still be cold; by midsummer the nights are warmer too. The yearly averages are close, 11.11 at Camborne and 10.67 at Yeovilton, which shows how little an average alone can say about what a place feels like.' },
        { kind: 'p', text: 'The slip worth hunting is confusing two kinds of range. The diurnal range is the gap within a typical day; the yearly range is the gap between the warmest and coldest months. At Camborne they are about 5 and 9 degrees, at Yeovilton about 8 and 12. Mix them in a report and the numbers look plausible but mean something else entirely. The learner labels every result with what it measures and writes a test that the yearly range is computed from monthly means, not from maxima and minima.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Read a thermometer morning and afternoon for a week, then plot the gaps in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Parse the files in Python, subtract, average, and check both routes give the same answer.' },
          { h3: 'Ages 15 and up', p: 'Explain the May peak, compare more stations, and write tests that stop the two ranges being confused.' }
        ] },
        { kind: 'callout', h3: 'Met Office values, our arithmetic', p: 'The monthly maxima and minima come from the Met Office\'s station files. The ranges and averages are our own sums, and the distances come from our check of the ONS boundary, so they are careful estimates rather than official figures.' }
      ]
    },
    {
      id: 'about-the-stations', tint: 'deep', eyebrow: 'About the two stations',
      h2: 'Cornwall and Somerset records',
      intro: 'How the two station files describe their sites.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data for Camborne and Yeovilton, as stated in each file', head: ['Detail', 'Camborne', 'Yeovilton'], rows: [
          ['Grid reference', '162700E 40700N', '355100E 123200N'],
          ['Latitude and longitude', 'Lat 50.218, Lon -5.327', 'Lat 51.006, Lon -2.641'],
          ['Height', '87 m above mean sea level', '20 m above mean sea level'],
          ['Complete months, 1991 to 2020', 'All 360', 'All 360'],
          ['Measurements', 'Monthly maximum and minimum temperature, frost days, rain, sunshine', 'The same set']
        ] },
        { kind: 'p', text: 'Knowing exactly what a number measures is at the heart of data science, engineering and good reporting. Energy companies care about the daily swing because it drives heating demand overnight; farmers care because it shapes frost and ripening. A South West learner who can state precisely which range they have computed, and prove two calculations agree, is doing the careful work that makes data trustworthy.' },
        { kind: 'p', text: 'We are not connected with the Met Office or the Office for National Statistics; they publish the data, and the ranges on this page, with any slip in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The learning path',
    h2: 'From thermometers to data analysis',
    intro: 'Year groups here are indicative; the trial lesson decides.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Measure and plot', p: 'Block coding that records and charts simple measurements.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Files and averages', p: 'Python that reads data files and averages them.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Statistics, algebra and machine learning basics, alongside GCSE and A level.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Practical analysis', p: 'Python for adults, from reading files to reporting results.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and definitions',
    h2: 'An AI can quote a temperature range. Which range does it mean?',
    intro: 'Two correct numbers can answer two different questions.',
    p1: 'Ask a chatbot for the temperature range of a place and it may give a daily swing, a yearly swing or a record extreme without saying which. All three are real numbers; only one answers your question.',
    p2: 'A South West learner who has computed both ranges from raw files knows to ask what exactly a number measures before relying on it.',
    closer: 'Pinning down what a number really measures is a good reason for a South West teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'From Penzance to Gloucester, all online',
    intro: 'Coast, moor or city, one video link reaches every home.',
    cells: [
      { h3: 'Code by the learner', p: 'Students do all the typing themselves; the tutor follows their screen and asks the question that moves them on.' },
      { h3: 'School years in England', p: 'A Year 6 in Poole or a Year 11 in Bath is placed by year group and key stage, and we use each board\'s own exam names.' },
      { h3: 'A free first session', p: 'Your first full lesson carries no charge and ends with a clear suggestion.' },
      { h3: 'Classes at one level', p: 'Every class has five to ten learners at the same stage, gathered nationwide.' },
      { h3: 'Weeks in term', p: 'Lessons run twice weekly through term and stop for the holidays.' },
      { h3: 'British time, all year', p: 'Clock changes in March and October leave your lesson time unchanged; our teachers move theirs.' }
    ],
    spec: { title: 'Why a long, rural region suits online classes', p: 'Even in a region of 5.7 million, five learners at one level and hour are rarely neighbours. Online, a learner in Taunton or Torquay joins exactly the right class.' }
  },

  fees: {
    h2: 'South West fees',
    intro: 'Bristol and Truro pay one and the same fee, matching every country we teach outside India.',
    first: 'A full lesson for free, then our honest view.',
    group: 'Near eight lessons a month in a class of five to ten.',
    private: 'Near eight lessons a month with a dedicated tutor.',
    closer: 'Billing is in US dollars, never pounds, and begins only after the trial has fixed a course and a weekly time. Holidays, missed lessons and switching between group and private are all set out on the pricing page.'
  },

  reviewsH2: 'South West families on Google',

  book: {
    h2: 'Book a free South West lesson',
    intro: 'Let us know a school year or age and something the learner enjoys. The trial could be a Scratch thermometer, a first Python script, or the Camborne and Yeovilton comparison.',
    success: 'Thank you. We have your South West request.'
  },

  faq: {
    h2: 'South West England questions',
    intro: 'The region, the temperature project and how lessons work.',
    items: [
      { q: 'What is the population of South West England?', a: 'The South West region had 5,701,186 usual residents at the 2021 census.' },
      { q: 'What are the largest towns in South West England?', a: 'Among ONS built-up areas wholly in the region: Bristol 425,215, Plymouth 266,955 and Bournemouth 196,455.' },
      { q: 'What is the Camborne and Yeovilton project?', a: 'Learners compute the average daily temperature swing at two Met Office stations in Python and explain why Camborne\'s is so much smaller.' },
      { q: 'What is the diurnal range?', a: 'The difference between a day\'s highest and lowest temperature, usually averaged over a month or a year.' },
      { q: 'Why is Camborne\'s daily swing smaller?', a: 'Its station is close to tidal water, and the sea keeps nights milder and days cooler than further from it.' },
      { q: 'Are lessons held online?', a: 'Yes, every lesson is live online from home.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, in maths and computing, with understanding as the goal rather than promised grades.' },
      { q: 'Which ages do you teach?', a: 'Six to 67: first blocks for children through to adult Python and AI.' },
      { q: 'How much do lessons cost?', a: 'No charge for the trial; after that USD 100 a month for a class or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in the school holidays?', a: 'No. Tell us your holiday weeks and we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'More regions',
    h2: 'Other English regions',
    html: '<a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> have their own region indexes. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everything in the series.',
    waLabel: 'Chat to us on WhatsApp'
  },

  footerHeading: 'South West England',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/coding-classes-in-cornwall', label: 'Cornwall' }
  ],

  personalityCss: `
.cg-root.cg-rsw .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-rsw .cg-hero h1 { font-weight: 735; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-rsw .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; border-radius: 0 12px 12px 0; }
.cg-root.cg-rsw .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rsw .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.02em; }
.cg-root.cg-rsw .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-rsw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rsw .cg-table th { letter-spacing: 0.055em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-rsw .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-rsw .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'South West region (E12000009). ONS Census 2021 TS001 via Nomis TYPE480: 5,701,186. ONS LAD22 to RGN22 lookup: 30 local authorities. ONS Census 2021 BUAs wholly in region: Bristol 425,215; Plymouth 266,955; Bournemouth 196,455; Swindon 183,680; Kingswood and Fishponds 160,270; Poole 141,005; Exeter 126,175; Gloucester 118,555; Cheltenham 115,940; Bath 94,080; Taunton 61,665; Torquay 52,035. Met Office historic station data: Camborne "Location 162700E 40700N, Lat 50.218 Lon -5.327, 87m amsl"; Yeovilton "Location: 355100E 123200N, Lat 51.006 Lon -2.641, 20 metres amsl".',
    localProject: 'Diurnal range 1991-2020 (360 of 360 months at both). Camborne: Jan 4.31, May 5.72, year 5.04. Yeovilton: Jan 6.64, May 9.71, year 8.40. May-Jan 1.41 vs 3.07. Annual range of monthly means 9.29 vs 11.79; yearly means 11.11 vs 10.67. Distance to tidal water (ONS GB BFC check): 2.4 km vs 17.2 km. Lesson family: diurnal temperature range, linearity of averages, daily vs yearly range.',
    requiredMentions: [
      'Bournemouth',
      'Swindon',
      'Poole',
      'Cheltenham',
      'Taunton',
      'Torquay',
      'Kingswood and Fishponds',
      'Yeovilton',
      'diurnal range'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by region, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal lookups (LAD22 to RGN22, BUA22 to region) and Countries (December 2022) GB BFC boundaries.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Met Office historic station data, Camborne.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/cambornedata.txt' },
      { claim: 'Met Office historic station data, Yeovilton.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/yeoviltondata.txt' }
    ],
    rejectedClaims: [
      'Official Met Office averages: not quoted; our averages are labelled as ours.',
      'Why May peaks: explained in general terms, no cloud or sunshine figures claimed.',
      'Distances beyond our boundary check: none claimed.',
      'Named schools and school term dates: none named or read.',
      'Heating demand and farming effects: stated generally, no figures.',
      'Sterling prices: none.'
    ]
  }
};
