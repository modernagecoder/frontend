'use strict';
// North West England (region index, UK cluster Phase 7, row 312). ONS region E12000002. Spine: annual rain got a little
// higher; did it also get less predictable? Data (downloaded raw 26 September 2026): Met Office historic station data,
// newtonriggdata.txt ("Newton Rigg ... Location 349300E 530800N, Lat 54.670 Lon -2.786, 169 metres amsl", monthly from
// January 1959). Rain in mm. Every rain month from 1961 to 2020 present.
// Our sums (population standard deviation, n = 30 years each): 1961-1990 mean annual 912.0 mm, SD 111.6, CV 0.122, driest
// 1964 694, wettest 1967 1,203. 1991-2020 mean 981.1, SD 162.8, CV 0.166, driest 1996 674, wettest 2020 1,326. Mean +7.6
// per cent; SD +45.9 per cent; CV 0.122 -> 0.166. Sample SD (divide by 29): 113.5 and 165.6, same story.
// Ringway (Manchester Airport) considered: its file ends in October 2004, so no 1991-2020 comparison; not used.
// Lesson family: comparing variability when means differ (coefficient of variation), population vs sample SD; screened
// (coefficient of variation, Newton Rigg: 0 hits; Torfaen used a CV only as a tie-break inside a spiral test).
// Region facts: ONS Census 2021 TS001 via Nomis TYPE480: North West 7,417,397. ONS LAD22 to RGN22: 39 local authorities.
// ONS Census 2021 BUAs wholly in region: Liverpool 506,565; Manchester 470,405; Bolton 184,090; Warrington 174,970;
// Blackpool 149,070; Blackburn 124,955; Stockport 117,935; Rochdale 111,255; Oldham 110,720; Birkenhead 109,835; Salford
// 108,410; St Helens 107,680; Wythenshawe 97,660; Preston 94,490; Southport 94,440. Chester BUA is Part, omitted.

const AREAS = [['Carlisle', 'best-coding-class-in-carlisle'], ['Cheshire', 'coding-classes-in-cheshire'], ['Chester', 'best-coding-class-in-chester'],
  ['Cumbria', 'coding-classes-in-cumbria'], ['Greater Manchester', 'coding-classes-in-greater-manchester'], ['Lancashire', 'coding-classes-in-lancashire'],
  ['Lancaster', 'best-coding-class-in-lancaster'], ['Liverpool', 'best-coding-class-in-liverpool'], ['Manchester', 'best-coding-class-in-manchester'],
  ['Merseyside', 'coding-classes-in-merseyside'], ['Preston', 'best-coding-class-in-preston'], ['Salford', 'best-coding-class-in-salford']];

function linkedAreas() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return AREAS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'region', tag: 'NORTH WEST ENGLAND', label: 'North West England', blurb: 'Every North West county and city page in one index, and a Newton Rigg lesson on whether rain has become less predictable.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-north-west-england',
  code: 'rnw',
  accent: '#6A158A',
  accentRationale: 'North West England: a wet-slate purple from the solver (8.11:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'North West England',
    eyebrow: 'North West England',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-england', name: 'England' }],
  nav: [
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Manchester', href: '/best-coding-class-in-manchester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'North West England',
  title: 'Coding and AI Classes in North West England | Ages 6 to 67',
  description: 'Live online coding, AI, Python and maths classes across North West England, with pages for Manchester, Liverpool, Preston, Cumbria, Lancashire and more.',
  ogDescription: 'Coding and AI classes for the North West, and a Met Office project: measure in Python whether yearly rain at Newton Rigg has become less predictable since the 1960s.',
  twitterDescription: 'North West England coding, AI, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Maths Classes for North West England',
    description: 'Online coding, AI, Python, statistics and mathematics for children, teenagers and adults across North West England, taught live in English and placed by level.'
  },

  h1: 'Coding and AI classes in North West England',
  capsuleQ: 'What are the best coding and AI classes in North West England?',
  capsule: 'North West England counted 7,417,397 usual residents in the 2021 census, in 39 local authorities. Liverpool and Manchester are its two largest built-up areas, followed by Bolton, Warrington and Blackpool, with Blackburn, Stockport, Rochdale, Oldham, Birkenhead and Southport among the other large towns. Our lessons are all live on video, taught from India. Learners of any age from 6 to 67 study coding, AI, Python and maths, one-to-one or in classes of five to ten at a single level. The opening lesson is free and chooses the course. This page links every North West page we have and runs a rainfall project. Beyond it, expect USD 100 monthly for group learning or USD 150 monthly for a tutor of your own.',
  lead: 'The Met Office has kept monthly rainfall at Newton Rigg, in Cumbria, since 1959, and every month from 1961 to 2020 is present. Split that record into two thirty-year halves and the average year got wetter, from about 912 millimetres to about 981. That is a rise of under 8 per cent. But look at how much the years differ from one another, and something bigger shows up: the typical gap between a year and the average grew by nearly half. So has rain become less predictable, or simply more plentiful? Answering fairly means comparing spread in a way that allows for the bigger average. This page\'s project does exactly that in Python with a measure called the coefficient of variation.',
  wa: 'Hello Modern Age Coders, we are in North West England and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses across the North West',
    h2: 'Where North West learners begin',
    intro: 'A Year 1 pupil in Southport who loves puddles, a Year 9 in Warrington starting Python, a Year 12 in Stockport on A level maths, and a Bolton adult learning data analysis. A free lesson places each one.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Scratch projects with rain, rivers and simple charts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'Python and early AI ideas using real measurements.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Rigorous secondary maths, including spread and standard deviation.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for adults exploring real datasets.' }
    ]
  },

  sections: [
    {
      id: 'north-west-england', tint: '', eyebrow: 'The North West in figures',
      h2: '7,417,397 people across the North West',
      intro: 'ONS\'s 2021 census count of usual residents for the region comes via Nomis. Towns below are ONS built-up areas found wholly inside the region.',
      body: [
        { kind: 'table', caption: 'North West England built-up areas, wholly within the region, ONS 2021', head: ['Built-up area', 'People', 'Built-up area', 'People'], rows: [
          ['Liverpool', '506,565', 'Rochdale', '111,255'],
          ['Manchester', '470,405', 'Oldham', '110,720'],
          ['Bolton', '184,090', 'Birkenhead', '109,835'],
          ['Warrington', '174,970', 'Salford', '108,410'],
          ['Blackpool', '149,070', 'Preston', '94,490'],
          ['Blackburn', '124,955', 'Southport', '94,440'],
          ['Stockport', '117,935', '', '']
        ] },
        { kind: 'p', text: 'The ONS lookup counts 39 local authorities in the North West. Chester\'s built-up area crosses the regional boundary, so it is not in the table. North West classrooms follow the English national curriculum, and older pupils sit GCSEs and A levels set by a range of boards. Because councils fix their own term dates, we work from whatever calendar your school gives you.' },
        { kind: 'p', text: 'Each North West page below has its own project, and the names link as pages go live: ' + linkedAreas() + '.' },
        { kind: 'callout', h3: 'England and coursework help', p: 'Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains schooling, and <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science NEA help</a> covers the programming project.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The North West project',
      h2: 'Wetter, or just less predictable?',
      intro: 'Standard deviation divided by the mean puts spread on a fair footing.',
      body: [
        { kind: 'p', text: 'The learner adds up twelve months of rain for every year from 1961 to 2020, then splits the years into two thirty-year halves. For each half, Python computes the mean annual total and the standard deviation, which measures how far a typical year sits from that mean. Because a wetter place naturally has bigger swings in millimetres, the fair comparison divides the standard deviation by the mean. That ratio, the coefficient of variation, says how large the typical swing is as a fraction of the typical year.' },
        { kind: 'table', caption: 'Our Newton Rigg rainfall statistics from Met Office station data, 26 September 2026', head: ['Measure', '1961 to 1990', '1991 to 2020', 'Change'], rows: [
          ['Mean annual rain', '912 mm', '981 mm', 'Up 7.6%'],
          ['Standard deviation', '112 mm', '163 mm', 'Up 46%'],
          ['Coefficient of variation', '0.122', '0.166', 'Up about a third'],
          ['Driest year', '1964, 694 mm', '1996, 674 mm', ''],
          ['Wettest year', '1967, 1,203 mm', '2020, 1,326 mm', '']
        ] },
        { kind: 'p', text: 'The spread rose much faster than the mean, so the coefficient of variation rose too: from about 12 per cent of a typical year to about 17. In plain terms, a year at Newton Rigg is now more likely to be far from average, in either direction, even after allowing for the wetter average. The driest year of the later half, 1996, was drier than the driest of the earlier half, and its wettest, 2020, was wetter than any year in the earlier half. Thirty years is not a long sample, so this is evidence of a change at one station, not proof of a regional trend.' },
        { kind: 'p', text: 'There is a technical choice that trips people up. Python\'s statistics module offers two standard deviations: one divides by the number of years, the other by one fewer. With thirty years they give 111.6 and 113.5 millimetres for the first half, close but not equal, and a report must say which it used. The bigger slip is comparing raw standard deviations between a dry place and a wet one, which almost always makes the wet place look more erratic. The learner computes both versions and writes a check that the coefficient of variation has no units.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plot yearly rain as bars in Scratch and spot which years stick out furthest from the rest.' },
          { h3: 'Ages 11 to 15', p: 'Total each year in Python, then compute means and standard deviations for both halves.' },
          { h3: 'Ages 15 and up', p: 'Compare the two standard deviations, compute the coefficient of variation, and discuss how much thirty years can prove.' }
        ] },
        { kind: 'callout', h3: 'Met Office data, our statistics', p: 'The monthly rainfall comes from the Met Office\'s Newton Rigg file. The yearly totals, standard deviations and ratios are our calculations, not official climate statistics.' }
      ]
    },
    {
      id: 'newton-rigg', tint: 'deep', eyebrow: 'Why Newton Rigg',
      h2: 'A complete record from Cumbria',
      intro: 'What the station file says about itself.',
      body: [
        { kind: 'table', caption: 'Newton Rigg station facts, copied from the header of the Met Office file', head: ['Item', 'Value in the header'], rows: [
          ['Easting and northing', '349300E 530800N'],
          ['Position in degrees', 'Latitude 54.670 N, longitude 2.786 W'],
          ['Elevation', '169 m amsl'],
          ['First month on file', 'January 1959'],
          ['Gaps in rain, 1961 to 2020', 'None']
        ] },
        { kind: 'p', text: 'Comparing variability fairly is central to quality control, finance and science: whether a machine\'s output is steady relative to its size, whether an investment\'s swings are large relative to its returns, whether an experiment is repeatable. A learner in North West England who has shown that spread grew faster than the average has a tool that works far beyond the weather.' },
        { kind: 'p', text: 'We are independent of the Met Office and the ONS. The data is theirs; the statistics here, and any slip in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing skills',
    h2: 'From rain bars to standard deviation',
    intro: 'Years are a guide only; the trial lesson decides.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Charts and totals', p: 'Block coding with totals and bar charts.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Averages and spread', p: 'Python with sums, means and simple spread.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Statistics and AI', p: 'Standard deviation, sampling and machine learning basics with GCSE and A level.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Real-world data', p: 'Adult Python for analysis and honest reporting.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and variability',
    h2: 'An AI can compute a standard deviation. Is it the fair comparison?',
    intro: 'Raw spread and relative spread can tell opposite stories.',
    p1: 'Ask a chatbot which of two places has more variable rain and it may compare raw standard deviations, which nearly always makes the wetter place look more erratic. It may not say whether it divided by n or n minus one.',
    p2: 'A North West learner who has used the coefficient of variation knows to ask whether spread was compared relative to the average.',
    closer: 'Knowing when a bigger spread is only a bigger average in disguise is worth a North West teenager learning to code for in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'From Blackpool to Oldham, live on screen',
    intro: 'Big city or small village, every learner joins by video.',
    cells: [
      { h3: 'Learners code', p: 'The student types every program, and the tutor, watching the shared screen, asks rather than tells.' },
      { h3: 'Year groups', p: 'A Year 6 in Rochdale or a Year 13 in Birkenhead starts at the right point for their year, with exam names from their board.' },
      { h3: 'Free opener', p: 'The first full lesson costs nothing and ends with a clear plan.' },
      { h3: 'Same-stage classes', p: 'Five to ten learners at one level, drawn from across Britain.' },
      { h3: 'Term time', p: 'Two lessons weekly in term, with the holidays off.' },
      { h3: 'UK clock', p: 'Spring and autumn clock changes do not move your lesson; our teachers adjust.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five learners at one level and hour are rarely in one town, even in a region of over seven million. Online, a Southport or Warrington learner joins the class that fits.' }
  },

  fees: {
    h2: 'North West fees',
    intro: 'Liverpool and Carlisle pay the same, as does each country we teach outside India.',
    first: 'A complete lesson free, with honest advice.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month with your own tutor.',
    closer: 'Fees are charged in US dollars only, never sterling. Payment starts after the trial has agreed a course and weekly time, and holidays, missed lessons and format changes are explained on the pricing page.'
  },

  reviewsH2: 'North West families on Google',

  book: {
    h2: 'Book a free North West lesson',
    intro: 'Tell us a school year or age and one interest. A first session might build a rainy-day game in Scratch, write a short Python script, or start on the Newton Rigg spread question.',
    success: 'Thank you. Your North West request has arrived.'
  },

  faq: {
    h2: 'North West England questions',
    intro: 'Population, the Newton Rigg rain study, and how classes run.',
    items: [
      { q: 'What is the population of North West England?', a: 'The 2021 census counted 7,417,397 usual residents in the North West region.' },
      { q: 'What are the largest places in North West England?', a: 'Among ONS built-up areas wholly in the region: Liverpool 506,565, Manchester 470,405 and Bolton 184,090.' },
      { q: 'What is the Newton Rigg project?', a: 'Learners compare 1961 to 1990 with 1991 to 2020 yearly rain in Python and find that spread grew faster than the average.' },
      { q: 'What is the coefficient of variation?', a: 'The standard deviation divided by the mean, which compares spread fairly between things with different averages.' },
      { q: 'Did Newton Rigg get wetter?', a: 'On our sums the average year rose from about 912 mm to about 981 mm between the two periods.' },
      { q: 'Are lessons online?', a: 'All of them; every class runs live over video.' },
      { q: 'Can you support exam-year students?', a: 'Yes, GCSE and A level maths and computing; we build understanding and never sell grade guarantees.' },
      { q: 'What ages can join?', a: 'Anyone from 6 to 67.' },
      { q: 'How much are lessons?', a: 'The trial lesson costs nothing. Continuing is USD 100 per month in a class or USD 150 per month on your own with a tutor.' },
      { q: 'Do lessons run in holidays?', a: 'No. Share your school holidays and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Other regions',
    h2: 'More region indexes',
    html: 'See <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains schools, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the full series.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'North West England',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/best-coding-class-in-liverpool', label: 'Liverpool' }
  ],

  personalityCss: `
.cg-root.cg-rnw .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-rnw .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-rnw .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-rnw .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rnw .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.018em; }
.cg-root.cg-rnw .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-rnw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rnw .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-rnw .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 0.75rem; }
.cg-root.cg-rnw .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'North West region (E12000002). ONS Census 2021 TS001 via Nomis TYPE480: 7,417,397. ONS LAD22 to RGN22: 39 local authorities. ONS Census 2021 BUAs wholly in region: Liverpool 506,565; Manchester 470,405; Bolton 184,090; Warrington 174,970; Blackpool 149,070; Blackburn 124,955; Stockport 117,935; Rochdale 111,255; Oldham 110,720; Birkenhead 109,835; Salford 108,410; Preston 94,490; Southport 94,440. Met Office historic station data: Newton Rigg "Location 349300E 530800N, Lat 54.670 Lon -2.786, 169 metres amsl", monthly from January 1959.',
    localProject: 'Newton Rigg annual rain (population SD). 1961-1990: mean 912.0, SD 111.6, CV 0.122, driest 1964 694, wettest 1967 1,203. 1991-2020: mean 981.1, SD 162.8, CV 0.166, driest 1996 674, wettest 2020 1,326. Mean +7.6%, SD +45.9%. Sample SD 113.5 / 165.6. Lesson family: coefficient of variation, relative vs raw spread.',
    requiredMentions: [
      'Blackpool',
      'Bolton',
      'Warrington',
      'Stockport',
      'Rochdale',
      'Oldham',
      'Birkenhead',
      'Southport',
      'Newton Rigg',
      'coefficient of variation'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by region, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal lookups: LAD22 to RGN22 and BUA22 to region.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Met Office historic station data, Newton Rigg.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/newtonriggdata.txt' }
    ],
    rejectedClaims: [
      'A regional rainfall trend: explicitly not claimed from one station.',
      'Ringway (Manchester Airport) record: ends in 2004, not used.',
      'Chester BUA: crosses the boundary, omitted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
