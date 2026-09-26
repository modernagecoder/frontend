'use strict';
// South East England (region index, UK cluster Phase 7, row 306). The ONS region E12000008. Spine: two weather stations
// with the same yearly average but different seasons. Data (downloaded raw 26 September 2026): Met Office historic station
// data, manstondata.txt ("Manston ... Lat 51.346 Lon 1.337, 49m amsl", from 1934) and oxforddata.txt ("Oxford ... 63 metres
// amsl", from 1853); monthly tmax and tmin; estimated values marked *; we use (tmax + tmin) / 2 as the monthly mean.
// Our sums, 1991 to 2020 (Manston missing 2001-08 and 2005-09; estimated months kept: Manston 2, Oxford 11):
// Manston Jan 5.09, Apr 9.50, May 12.49, Jul 17.88, Aug 18.07, Sep 15.51, Oct 12.13; annual mean 11.04; warmest August;
// range 12.99. Oxford Jan 5.19, Apr 9.84, May 12.92, Jul 18.08, Aug 17.75, Sep 15.05, Oct 11.54; annual mean 11.04; warmest
// July; range 12.90. October minus April: Manston 2.63, Oxford 1.69. September minus May: 3.02 vs 2.13. Slip: Oxford 1861 to
// 1890 mean 9.68 (Oct minus Apr 1.14): comparing different 30-year windows invents a 1.36 degree gap.
// Lesson family: seasonal lag from autumn-minus-spring asymmetry and warmest month, like-for-like normals; screened
// (seasonal lag, phase lag, continentality, Manston: 0 hits; circular mean spent at St Asaph, Fourier at Liverpool, so
// neither is used).
// Region facts: ONS Census 2021 TS001 via Nomis TYPE480: South East 9,278,065. ONS LAD22 to RGN22 lookup: 64 local
// authorities. ONS BUA22 to region lookup + Census 2021 BUA tables (whole-in-region only): Brighton and Hove 277,105;
// Southampton 249,620; Portsmouth 223,305; Reading 203,795; Oxford 170,805; Slough 166,855; Crawley 120,550; Basingstoke
// 117,210; Worthing 111,620; Maidstone 109,490; Eastbourne 99,180; Hastings 91,490; Guildford 77,880. Milton Keynes BUA
// crosses into the East of England (Part), not tabulated. London is its own region and is not part of this page.

const AREAS = [['Berkshire', 'coding-classes-in-berkshire'], ['Brighton and Hove', 'best-coding-class-in-brighton-and-hove'], ['Buckinghamshire', 'coding-classes-in-buckinghamshire'],
  ['Canterbury', 'best-coding-class-in-canterbury'], ['Chichester', 'best-coding-class-in-chichester'], ['East Sussex', 'coding-classes-in-east-sussex'],
  ['Hampshire', 'coding-classes-in-hampshire'], ['Isle of Wight', 'coding-classes-in-isle-of-wight'], ['Kent', 'coding-classes-in-kent'],
  ['Milton Keynes', 'best-coding-class-in-milton-keynes'], ['Oxford', 'best-coding-class-in-oxford'], ['Oxfordshire', 'coding-classes-in-oxfordshire'],
  ['Portsmouth', 'best-coding-class-in-portsmouth'], ['Southampton', 'best-coding-class-in-southampton'], ['Surrey', 'coding-classes-in-surrey'],
  ['West Sussex', 'coding-classes-in-west-sussex'], ['Winchester', 'best-coding-class-in-winchester']];

function linkedAreas() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return AREAS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'region', tag: 'SOUTH EAST ENGLAND', label: 'South East England', blurb: 'Every South East county and city page in one index, and a Manston and Oxford lesson on why the coast keeps summer longer.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-south-east-england',
  code: 'rse',
  accent: '#35127A',
  accentRationale: 'South East England: a deep Channel-night indigo from the solver (11.14:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'South East England',
    eyebrow: 'South East England',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-england', name: 'England' }],
  nav: [
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'South East England',
  title: 'Coding and AI Classes in South East England | Ages 6 to 67',
  description: 'Live online coding, AI, Python and maths classes across South East England, with pages for every county and city, from Kent and Surrey to Oxfordshire.',
  ogDescription: 'Coding and AI classes for the whole South East, and a Met Office project: Manston and Oxford share a yearly average, yet the coast keeps its summer later.',
  twitterDescription: 'South East England coding, AI, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Maths Classes for South East England',
    description: 'Online coding, AI, Python, data and mathematics for children, teenagers and adults across South East England, taught live in English and placed by level.'
  },

  h1: 'Coding and AI classes in South East England',
  capsuleQ: 'What are the best coding and AI classes in South East England?',
  capsule: 'The South East region counted 9,278,065 residents at the 2021 census, across 64 local authorities, the most of any English region. Its largest built-up areas are Brighton and Hove, Southampton, Portsmouth, Reading, Oxford and Slough, with Crawley, Basingstoke, Worthing and Maidstone each above 100,000. Our teachers run every lesson live on video from India. Learners aged 6 to 67 study coding, AI, Python and maths one-to-one or in a group of five to ten at one level. A first lesson costs nothing and decides the course. Below is the index of our South East county and city pages, and a project built on two weather stations. Continuing costs USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'The Met Office publishes monthly records for a small set of long-running weather stations, and two of them sit in the South East: Manston in Kent, about 3 kilometres from the coastline, and Oxford, more than 60 kilometres from any coast, whose record starts in 1853. Take the thirty years from 1991 to 2020 and a surprise appears. Both stations average exactly 11.04 degrees across the year. Yet their seasons are not the same. At Manston the warmest month is August; at Oxford it is July. The sea warms slowly and cools slowly, so a coastal place should keep its warmth later into autumn and stay cool later into spring. Can two lines of arithmetic prove it from the raw records? This page\'s project finds out in Python.',
  wa: 'Hello Modern Age Coders, we are in South East England and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses across the South East',
    h2: 'First courses for South East learners',
    intro: 'A Year 2 pupil in Hastings who loves weather, a Year 8 in Basingstoke ready for Python, a Year 12 in Guildford on A level maths, and an adult in Maidstone learning data skills. Everyone starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with seasons, temperatures and simple charts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'Python and first AI ideas for younger learners, with real data.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Thorough Python for teenagers, from files to data analysis.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for adults working with real datasets and charts.' }
    ]
  },

  sections: [
    {
      id: 'south-east-england', tint: '', eyebrow: 'The region in figures',
      h2: '9,278,065 people in the South East',
      intro: 'The region total is the ONS Census 2021 count of usual residents, read through Nomis. Town figures are ONS built-up areas lying wholly within the region.',
      body: [
        { kind: 'table', caption: 'Largest built-up areas wholly in the South East region, ONS Census 2021', head: ['Built-up area', 'Residents', 'Built-up area', 'Residents'], rows: [
          ['Brighton and Hove', '277,105', 'Crawley', '120,550'],
          ['Southampton', '249,620', 'Basingstoke', '117,210'],
          ['Portsmouth', '223,305', 'Worthing', '111,620'],
          ['Reading', '203,795', 'Maidstone', '109,490'],
          ['Oxford', '170,805', 'Eastbourne', '99,180'],
          ['Slough', '166,855', 'Hastings', '91,490']
        ] },
        { kind: 'p', text: 'The ONS lookup places 64 local authorities in the region. Milton Keynes is left out of the table because its built-up area crosses into the East of England, and London is a separate region. Schools across the South East teach the national curriculum for England, from Reception and Year 1 through GCSE and A level with several exam boards, and holidays are set council by council, so families tell us their own dates.' },
        { kind: 'p', text: 'Our South East pages, each with its own local project, link from here as they go live: ' + linkedAreas() + '.' },
        { kind: 'callout', h3: 'England and exam help', p: 'Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains the school system. For exams, see <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science NEA help</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The South East project',
      h2: 'Same average, different seasons',
      intro: 'Compare autumn with spring, and the sea gives itself away.',
      body: [
        { kind: 'p', text: 'The learner downloads both raw station files, skips the header lines, and reads each month\'s average maximum and minimum temperature, taking their midpoint as the month\'s mean. Missing months are marked with dashes and estimated ones with a star, so the code has to cope with both; Manston has two gaps in the thirty years. Then it averages each calendar month over 1991 to 2020, the same window the Met Office uses for its standard averages. The yearly means come out identical to two decimal places, which makes the comparison clean.' },
        { kind: 'table', caption: 'Our 1991 to 2020 monthly means from Met Office station data, 26 September 2026', head: ['Measure', 'Manston (coast)', 'Oxford (inland)', 'What it shows'], rows: [
          ['Yearly mean', '11.04 C', '11.04 C', 'Same overall warmth'],
          ['Warmest month', 'August, 18.07 C', 'July, 18.08 C', 'The coast peaks later'],
          ['October minus April', '2.63 C', '1.69 C', 'Autumn holds heat at the coast'],
          ['September minus May', '3.02 C', '2.13 C', 'Same pattern a month closer to summer'],
          ['Warmest minus coldest month', '12.99 C', '12.90 C', 'Almost the same range']
        ] },
        { kind: 'p', text: 'October and April sit the same distance from midsummer, so on a planet with no oceans they would be about equally warm. Both stations are warmer in October, because the ground and air store some summer heat, but Manston by almost a degree more. Spring shows the other side: Oxford is warmer than Manston in April and May, while Manston is warmer from August to November. That is seasonal lag, and the sea is the store of heat that causes more of it. Interestingly, the range from coldest to warmest month is almost the same here, so the timing changes more than the size of the swing.' },
        { kind: 'p', text: 'The key slip is comparing different periods. Oxford\'s record allows a mean for 1861 to 1890, and it comes out at 9.68 degrees, 1.36 below its modern figure. Set that against Manston\'s 1991 to 2020 figure and you would wrongly conclude that the coast is far warmer, when the gap is mostly the difference between centuries. The code enforces one window for both stations, and the learner writes a check that fails if the windows differ.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Chart the months for both stations in Scratch and spot which one peaks later.' },
          { h3: 'Ages 11 to 15', p: 'Read the raw files in Python, handle missing and starred values, and build the table.' },
          { h3: 'Ages 15 and up', p: 'Compare other station pairs, test the window rule, and discuss what the midpoint of maximum and minimum misses.' }
        ] },
        { kind: 'callout', h3: 'Met Office records, our averages', p: 'The monthly values come from the Met Office\'s published station files. The averaging choices, the midpoint rule and every figure in the table are ours, so small differences from official averages are expected.' }
      ]
    },
    {
      id: 'why-weather-data', tint: 'deep', eyebrow: 'Why station data',
      h2: 'A long record in the region',
      intro: 'What the two station files say about themselves.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data for Manston and Oxford, as stated in each file', head: ['Detail', 'Manston', 'Oxford'], rows: [
          ['Position', 'Lat 51.346, Lon 1.337', 'Lat 51.761, Lon -1.262'],
          ['Height', '49 m above mean sea level', '63 m above mean sea level'],
          ['Distance to coastline (our check)', 'About 3 km', 'More than 60 km'],
          ['Record starts', 'July 1934', 'January 1853'],
          ['Values given', 'Monthly maximum and minimum temperature, air frost days, rain, sunshine', 'The same set'],
          ['Markings', 'Star for estimated values, dashes for missing months', 'The same rules']
        ] },
        { kind: 'p', text: 'Reading messy public files, handling gaps honestly and comparing like with like are the everyday skills of data science, from climate research to business reports. A South East learner who has found seasonal lag in two raw text files, and caught the mismatched-window trap, has done real analysis with real government data.' },
        { kind: 'p', text: 'We have no connection with the Met Office or the Office for National Statistics. The data is theirs; the averages and any error in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing through school',
    h2: 'From weather charts to data science',
    intro: 'Years are only a guide; the free lesson sets the real start.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Charts and patterns', p: 'Block coding with simple charts and repeating patterns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Reading data', p: 'Python that reads files, averages and compares.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Statistics and AI', p: 'Data handling, statistics and first machine learning, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data in practice', p: 'Adult Python for real datasets and clear charts.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and data',
    h2: 'An AI can summarise the weather. Will it compare like with like?',
    intro: 'Mixing time periods is one of the easiest ways to be confidently wrong.',
    p1: 'Ask a chatbot whether the coast is warmer than inland England and it may quote figures from different decades or different sources without saying so. The answer can sound precise and still compare apples with pears.',
    p2: 'A South East learner who has enforced one window for both stations knows to ask where every number came from and which years it covers.',
    closer: 'Checking that numbers are truly comparable is a lasting reason for a South East teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Kent to Oxfordshire, one video link',
    intro: 'Anywhere in the region with a connection can join.',
    cells: [
      { h3: 'Learners write the code', p: 'Each student types their own programs while the tutor follows the shared screen and asks guiding questions.' },
      { h3: 'English school years', p: 'A Year 5 in Crawley or a Year 13 in Eastbourne is placed by school year and key stage, and exams keep their board names.' },
      { h3: 'Free trial', p: 'One whole lesson at no charge, then honest advice.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at one level from across the UK.' },
      { h3: 'Term time', p: 'Two lessons a week in term; holidays kept free.' },
      { h3: 'UK clock kept', p: 'Your slot stays on UK time through both clock changes; our teachers adjust.' }
    ],
    spec: { title: 'Why a big region still suits online groups', p: 'Even in a region of over nine million, five learners at exactly one level and hour rarely live close together. Online, a learner in Worthing or Slough joins the right group.' }
  },

  fees: {
    h2: 'Fees in the South East',
    intro: 'The fee is the same in every South East town, and in every country we teach outside India.',
    first: 'A full free lesson with a clear recommendation.',
    group: 'About eight lessons a month in a class of five to ten.',
    private: 'About eight lessons a month with your own tutor.',
    closer: 'We charge in US dollars only; there is no sterling price. Billing starts once the trial has fixed a course and weekly time, and the pricing page covers holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Family ratings on Google',

  book: {
    h2: 'Book a free South East lesson',
    intro: 'Tell us the learner\'s age or school year and an interest. The trial could be a Scratch weather chart, a first Python program, or the Manston and Oxford comparison.',
    success: 'Thank you. Your South East request has arrived.'
  },

  faq: {
    h2: 'South East England questions',
    intro: 'The region, the weather project and practical details.',
    items: [
      { q: 'What is the population of South East England?', a: 'The 2021 census counted 9,278,065 usual residents in the South East region.' },
      { q: 'What are the largest towns in South East England?', a: 'Among ONS built-up areas wholly in the region: Brighton and Hove 277,105, Southampton 249,620 and Portsmouth 223,305.' },
      { q: 'What is the Manston and Oxford project?', a: 'Learners average Met Office station data for 1991 to 2020 in Python and show that the coast peaks later and holds autumn warmth longer, though both average 11.04 degrees.' },
      { q: 'What is seasonal lag?', a: 'The delay between the longest days and the warmest weather, which is larger where the sea stores and releases heat.' },
      { q: 'Does this page cover London?', a: 'No. London is its own region with its own city and borough pages.' },
      { q: 'Are lessons online?', a: 'Yes, all live by video, joined from home.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in maths and computing. We teach for understanding and never promise grades.' },
      { q: 'What ages can join?', a: 'From 6 to 67, from first blocks to adult Python and AI.' },
      { q: 'How much are lessons?', a: 'The first is free; then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do you teach in school holidays?', a: 'No. Send us your holiday dates and we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'Wider pages',
    h2: 'Beyond the South East',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page covers the school system, <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> has its own guide, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every nation, region, city and county we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South East England',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-classes-in-surrey', label: 'Surrey' }
  ],

  personalityCss: `
.cg-root.cg-rse .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-rse .cg-hero h1 { font-weight: 720; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-rse .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-rse .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rse .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-rse .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-rse .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rse .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-rse .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-rse .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'South East region (E12000008). ONS Census 2021 TS001 via Nomis TYPE480: 9,278,065. ONS LAD22 to RGN22 lookup: 64 local authorities. ONS Census 2021 built-up areas wholly in the region (BUA22 to region lookup): Brighton and Hove 277,105; Southampton 249,620; Portsmouth 223,305; Reading 203,795; Oxford 170,805; Slough 166,855; Crawley 120,550; Basingstoke 117,210; Worthing 111,620; Maidstone 109,490; Eastbourne 99,180; Hastings 91,490. Met Office historic station data: Manston, Lat 51.346 Lon 1.337, 49m amsl, from July 1934; Oxford, Lat 51.761 Lon -1.262, 63 metres amsl, from 1853; estimated values marked *, missing months ---.',
    localProject: '1991-2020 monthly means ((tmax+tmin)/2). Manston: annual 11.04, Apr 9.50, May 12.49, Jul 17.88, Aug 18.07, Sep 15.51, Oct 12.13, range 12.99, warmest Aug; missing 2001-08, 2005-09. Oxford: annual 11.04, Apr 9.84, May 12.92, Jul 18.08, Aug 17.75, Sep 15.05, Oct 11.54, range 12.90, warmest Jul. Oct-Apr 2.63 vs 1.69; Sep-May 3.02 vs 2.13. Slip: Oxford 1861-1890 mean 9.68. Lesson family: seasonal lag via autumn-spring asymmetry, like-for-like normals.',
    requiredMentions: [
      'Crawley',
      'Basingstoke',
      'Worthing',
      'Maidstone',
      'Slough',
      'Eastbourne',
      'Hastings',
      'Guildford',
      'Manston',
      'seasonal lag'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by region, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal lookups: LAD22 to RGN22 and BUA22 to region.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Met Office historic station data, Manston.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/manstondata.txt' },
      { claim: 'ONS Countries (December 2022) GB BFC boundaries, used for the coast distance check.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Met Office historic station data, Oxford.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/oxforddata.txt' }
    ],
    rejectedClaims: [
      'Official Met Office 1991-2020 averages: not quoted; our own averages from the station files are labelled as ours.',
      'Milton Keynes built-up area: crosses the region boundary, not tabulated.',
      'Coast distances: our own check against the ONS Countries (December 2022) GB BFC boundary, clipped to the coastline: Manston station 3.2 km from the nearest boundary vertex, Oxford none within 60 km.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.',
      'London: a separate region, not covered.'
    ]
  }
};
