'use strict';
// North East England (region index, UK cluster Phase 7, row 313). ONS region E12000001. Spine: was last year warm? It
// depends which "normal" you compare it with. Data (downloaded raw 26 September 2026): Met Office historic station data,
// durhamdata.txt ("Durham ... Location: 426700E 541500N, Lat 54.768 Lon -1.585, 102 metres amsl", monthly from January 1880).
// Annual mean = average of 12 monthly (tmax + tmin) / 2; only complete years used (1883 incomplete).
// Our sums: tercile boundaries (midpoint between the 10th and 11th, and 20th and 21st, ranked years): 1881-1910 (29 years)
// 7.90 / 8.44; 1961-1990 (30) 8.37 / 8.79; 1991-2020 (30) 9.27 / 9.77. Classifying the 30 years 1991-2020: against 1881-1910,
// 28 warm, 2 normal, 0 cold; against 1961-1990, 25 warm, 4 normal, 1 cold; against 1991-2020 itself, 10 / 10 / 10 by
// construction. 2021 to 2025 against 1961-1990: all five warm (9.75, 10.57, 10.33, 10.28, 10.47). Warmest complete year 2022
// 10.57; coldest 1892 7.23.
// Lesson family: tercile categories and the shifting baseline (labels depend on the reference period); screened (tercile,
// shifting baseline: 0 hits; Glanmire used a reference period for another purpose; Durham city page = line of sight).
// Region facts: ONS Census 2021 TS001 via Nomis TYPE480: North East 2,647,013. ONS LAD22 to RGN22: 12 local authorities.
// ONS Census 2021 BUAs wholly in region: Newcastle upon Tyne 286,445; Sunderland 168,315; Middlesbrough 148,215; Gateshead
// 115,280; Hartlepool 87,995; Stockton-on-Tees 84,815; South Shields 73,345; Tynemouth 60,605; Washington 51,320; Durham
// 50,510; Wallsend 45,355; Redcar 37,660. Darlington BUA is Part, omitted.

const AREAS = [['County Durham', 'coding-classes-in-county-durham'], ['Durham', 'best-coding-class-in-durham'], ['Newcastle upon Tyne', 'best-coding-class-in-newcastle-upon-tyne'],
  ['Northumberland', 'coding-classes-in-northumberland'], ['Sunderland', 'best-coding-class-in-sunderland'], ['Tyne and Wear', 'coding-classes-in-tyne-and-wear']];

function linkedAreas() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return AREAS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'region', tag: 'NORTH EAST ENGLAND', label: 'North East England', blurb: 'Every North East county and city page in one index, and a Durham lesson on how the choice of "normal" decides whether a year counts as warm.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-north-east-england',
  code: 'rne',
  accent: '#7A1273',
  accentRationale: 'North East England: a deep Tyne-bridge magenta from the solver (7.83:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'North East England',
    eyebrow: 'North East England',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-england', name: 'England' }],
  nav: [
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Newcastle', href: '/best-coding-class-in-newcastle-upon-tyne' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'North East England',
  title: 'Coding and AI Classes in North East England | Ages 6 to 67',
  description: 'Live online coding, AI, Python and maths classes across North East England, with pages for Newcastle, Sunderland, Durham, Northumberland and Tyne and Wear.',
  ogDescription: 'Coding and AI classes for the North East, and a Met Office project: sort Durham\'s years since 1880 into cold, normal and warm in Python, and see the labels shift.',
  twitterDescription: 'North East England coding, AI, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Maths Classes for North East England',
    description: 'Online coding, AI, Python, statistics and mathematics for children, teenagers and adults across North East England, taught live in English and placed by level.'
  },

  h1: 'Coding and AI classes in North East England',
  capsuleQ: 'What are the best coding and AI classes in North East England?',
  capsule: 'North East England had 2,647,013 usual residents in the 2021 census, across 12 local authorities, the fewest of any English region. Newcastle upon Tyne is its largest built-up area, followed by Sunderland, Middlesbrough and Gateshead, with Hartlepool, Stockton-on-Tees, South Shields, Washington and Durham among the other towns. Every lesson we teach is live over video, from India. Anyone aged 6 to 67 can take coding, AI, Python and maths, with a private tutor or in a same-level class of five to ten. The first lesson is free and sets the course. Here you will find our North East pages and a project built on a weather record that reaches back to 1880. Learners who stay on pay USD 100 per month in a class, or USD 150 per month for lessons alone with a tutor.',
  lead: 'The Met Office station at Durham has monthly temperatures going back to January 1880. Forecasters often describe a year as cold, normal or warm by splitting a set of past years into three equal groups, called terciles, and seeing which third a new year falls into. That sounds objective, until you ask which past years. Measure the years from 1991 to 2020 against Durham\'s 1961 to 1990 and 25 of the 30 count as warm. Measure them against 1881 to 1910 and 28 do. Measure them against themselves and exactly ten are warm, by definition. The same temperatures, three different stories. This page\'s project builds the terciles in Python and shows why the reference period must always be stated.',
  wa: 'Hello Modern Age Coders, we are in North East England and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses across the North East',
    h2: 'North East starting courses',
    intro: 'A Year 2 pupil in Hartlepool who sorts toys into groups, a Year 8 in Gateshead trying Python, a Year 12 in Middlesbrough on A level maths, and a Washington adult learning data skills. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding that sorts, groups and labels things.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'Python and early AI ideas, classifying real data.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Thorough Python for teenagers, from sorting to data projects.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for adults turning raw records into clear findings.' }
    ]
  },

  sections: [
    {
      id: 'north-east-england', tint: '', eyebrow: 'Counting the North East',
      h2: '2,647,013 people in North East England',
      intro: 'Nomis provides the ONS 2021 census count for the region. The table shows ONS built-up areas that lie wholly inside it.',
      body: [
        { kind: 'table', caption: 'ONS 2021 built-up areas lying wholly inside North East England', head: ['Place', 'Usual residents', 'Place', 'Usual residents'], rows: [
          ['Newcastle upon Tyne', '286,445', 'Stockton-on-Tees', '84,815'],
          ['Sunderland', '168,315', 'South Shields', '73,345'],
          ['Middlesbrough', '148,215', 'Tynemouth', '60,605'],
          ['Gateshead', '115,280', 'Washington', '51,320'],
          ['Hartlepool', '87,995', 'Durham', '50,510'],
          ['Wallsend', '45,355', 'Redcar', '37,660']
        ] },
        { kind: 'p', text: 'The ONS lookup lists 12 local authorities in the North East, the smallest count of the English regions. Darlington is not in the table because its built-up area crosses the regional boundary. Classrooms across the region use the English national curriculum, with GCSE and A level papers set by more than one exam board. School holidays differ from council to council, so we simply work to the calendar each family gives us.' },
        { kind: 'p', text: 'Our North East pages, each with a separate local project, link from here once published: ' + linkedAreas() + '.' },
        { kind: 'callout', h3: 'England and NEA help', p: 'Read our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page for the school system, and <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science NEA help</a> for the project year.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The North East project',
      h2: 'Cold, normal or warm, compared with when?',
      intro: 'Sort thirty years, cut them into thirds, and label new years by the cuts.',
      body: [
        { kind: 'p', text: 'The learner computes each complete year\'s mean temperature at Durham from its twelve monthly values, skipping 1883 because a month is missing. For a reference period of thirty years, the program sorts the annual means and places two cut points: one between the 10th and 11th coolest years and one between the 20th and 21st. Anything at or below the first cut is cold, anything above the second is warm, and the rest is normal. Then it labels the thirty years from 1991 to 2020 against three different reference periods.' },
        { kind: 'table', caption: 'Our Durham tercile labels for 1991 to 2020 from Met Office station data, 26 September 2026', head: ['Reference period', 'Cut points', 'Warm years', 'Normal and cold years'], rows: [
          ['1881 to 1910 (29 complete years)', '7.90 and 8.44 C', '28 of 30', '2 normal, 0 cold'],
          ['1961 to 1990', '8.37 and 8.79 C', '25 of 30', '4 normal, 1 cold'],
          ['1991 to 2020 itself', '9.27 and 9.77 C', '10 of 30', '10 normal, 10 cold']
        ] },
        { kind: 'p', text: 'Every row is correct, and together they tell a clear story: Durham\'s recent years sit well above the older normals. Against 1961 to 1990, all five years from 2021 to 2025 are warm as well, and 2022, at 10.57 degrees, is the warmest complete year in the whole record, while the coldest is 1892 at 7.23. But the last row shows the trap. Terciles built from the same years they classify must split ten, ten and ten, whatever happened. A report that says "a third of recent years were warm" without naming its baseline could be hiding a big shift.' },
        { kind: 'p', text: 'Two programming details matter. The cut points need a rule for where exactly to cut between two ranked years; we take the midpoint, and other rules move the boundary slightly, so the rule must be written down. And a year sitting exactly on a cut needs a tie rule too. The learner writes tests: labels against their own baseline must come out ten, ten and ten, and shifting every year up by a degree must never make any year colder.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort thirty cards into three piles in Scratch, then see which pile new cards land in.' },
          { h3: 'Ages 11 to 15', p: 'Compute annual means in Python, sort them, find the cuts and label the years.' },
          { h3: 'Ages 15 and up', p: 'Compare baselines, write the tie and cut rules, and test the ten-ten-ten property.' }
        ] },
        { kind: 'callout', h3: 'Met Office data, our labels', p: 'The monthly temperatures come from the Met Office Durham file. The annual means, cut points and labels are our calculations, not the Met Office\'s own classifications.' }
      ]
    },
    {
      id: 'durham-record', tint: 'deep', eyebrow: 'Why Durham',
      h2: 'Nearly 150 years of monthly temperatures',
      intro: 'How the Durham station file describes itself.',
      body: [
        { kind: 'table', caption: 'Durham, Met Office historic station data: header details', head: ['Header line', 'Content'], rows: [
          ['Grid position', '426700E 541500N'],
          ['Coordinates', 'Lat 54.768, Lon -1.585'],
          ['Altitude', '102 m above mean sea level'],
          ['Earliest month', 'January 1880'],
          ['Complete years in 1881 to 1910', '29 (1883 has a missing month)']
        ] },
        { kind: 'p', text: 'Labels like high, normal and low appear everywhere, from school reports to medical tests to product ratings, and every one depends on a reference group. A learner in North East England who has seen the same year called warm or normal depending on the baseline will always ask what a label is being compared with.' },
        { kind: 'p', text: 'Modern Age Coders is not linked to the Met Office or the ONS. The records are theirs; the terciles and labels here, including any mistake, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning route',
    h2: 'From sorting cards to classification',
    intro: 'Treat year bands as a starting guess; the free lesson confirms the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Sorting and grouping', p: 'Block coding that sorts and groups objects.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Sorting in Python', p: 'Python lists, sorting and simple labels.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Classification and AI', p: 'Quantiles, classification and machine learning basics with GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Honest reporting', p: 'Adult Python for analysis and clear, fair summaries.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and labels',
    h2: 'An AI can call a year warm. Compared with which years?',
    intro: 'A label without a baseline is only half an answer.',
    p1: 'Ask a chatbot whether a recent year was unusually warm and it may answer yes or no without saying which period it compared against. Different baselines can give opposite answers from the same data.',
    p2: 'A North East learner who has built terciles against three baselines knows to ask what any label is measured against.',
    closer: 'Always checking the yardstick behind a label is a habit a North East teenager builds by coding through 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'From Redcar to Newcastle, all online',
    intro: 'Every town in the region can join by video.',
    cells: [
      { h3: 'Typing is theirs', p: 'The learner writes the code; the tutor looks on via the shared screen and prompts only when useful.' },
      { h3: 'Placed by school year', p: 'A Year 5 in Wallsend or a Year 11 in Stockton-on-Tees joins at the level their year suggests, with exams named by their board.' },
      { h3: 'First lesson free', p: 'A complete trial lesson at no charge, then direct advice.' },
      { h3: 'Classes at one level', p: 'Five to ten learners per class, all at the same stage, from across the UK.' },
      { h3: 'Term-time lessons', p: 'Two a week in term, none in the holidays.' },
      { h3: 'UK time kept', p: 'The clocks change; your lesson time does not. Our teachers adjust instead.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five learners at one level and one free hour are rarely in the same town. Online, a learner in Redcar or South Shields joins the right class.' }
  },

  fees: {
    h2: 'Fees in the North East',
    intro: 'There is one fee for the whole region, and it is the same in every country we teach outside India.',
    first: 'A full lesson free, then an honest recommendation.',
    group: 'About eight lessons each month in a group of five to ten.',
    private: 'About eight lessons each month with a personal tutor.',
    closer: 'Prices are in US dollars only, never sterling. Billing starts once the trial has agreed a course and a weekly slot, and the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'What North East families say on Google',

  book: {
    h2: 'Book a free North East lesson',
    intro: 'Tell us a school year or age and one interest. The trial might be a Scratch sorting game, a first Python program, or the Durham tercile puzzle.',
    success: 'Thank you. Your North East request is with us.'
  },

  faq: {
    h2: 'North East England questions',
    intro: 'Headcounts, the Durham baseline study, and the way classes run.',
    items: [
      { q: 'What is the population of North East England?', a: 'The 2021 census counted 2,647,013 usual residents in the North East region.' },
      { q: 'What are the largest places in North East England?', a: 'Among ONS built-up areas wholly in the region: Newcastle upon Tyne 286,445, Sunderland 168,315 and Middlesbrough 148,215.' },
      { q: 'What is the Durham project?', a: 'Learners split reference periods of Durham\'s annual temperatures into thirds in Python and label 1991 to 2020 as cold, normal or warm against each.' },
      { q: 'What are terciles?', a: 'The two cut points that divide a sorted set into three equal-sized groups.' },
      { q: 'Which was Durham\'s warmest year?', a: 'On our sums of the Met Office file, 2022, at an annual mean of 10.57 degrees.' },
      { q: 'Are lessons online?', a: 'All classes happen live over video, joined from home.' },
      { q: 'What support is there for exam years?', a: 'GCSE and A level maths and computing, taught for real understanding; we make no promises about grades.' },
      { q: 'Who can join?', a: 'Learners aged 6 to 67.' },
      { q: 'What does it cost?', a: 'Your opening lesson is free of charge; after it a group costs USD 100 monthly and one-to-one tuition USD 150 monthly.' },
      { q: 'Are there lessons in school holidays?', a: 'No. Tell us your holiday weeks and we skip them.' }
    ]
  },

  next: {
    eyebrow: 'Other regions',
    h2: 'The other English regions',
    html: 'All eight English regions now have index pages, including <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains schools, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'North East England',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/best-coding-class-in-newcastle-upon-tyne', label: 'Newcastle upon Tyne' },
    { href: '/best-coding-class-in-durham', label: 'Durham' }
  ],

  personalityCss: `
.cg-root.cg-rne .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-rne .cg-hero h1 { font-weight: 730; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-rne .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-rne .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rne .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-rne .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-rne .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rne .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-rne .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-rne .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'North East region (E12000001). ONS Census 2021 TS001 via Nomis TYPE480: 2,647,013. ONS LAD22 to RGN22: 12 local authorities. ONS Census 2021 BUAs wholly in region: Newcastle upon Tyne 286,445; Sunderland 168,315; Middlesbrough 148,215; Gateshead 115,280; Hartlepool 87,995; Stockton-on-Tees 84,815; South Shields 73,345; Tynemouth 60,605; Washington 51,320; Durham 50,510; Wallsend 45,355; Redcar 37,660. Met Office historic station data: Durham "Location: 426700E 541500N, Lat 54.768 Lon -1.585, 102 metres amsl", monthly from January 1880.',
    localProject: 'Durham annual means (complete years). Terciles (midpoint rule): 1881-1910 (29 yrs) 7.90/8.44; 1961-1990 8.37/8.79; 1991-2020 9.27/9.77. 1991-2020 labelled: vs 1881-1910 28 warm 2 normal 0 cold; vs 1961-1990 25/4/1; vs itself 10/10/10. 2021-2025 all warm vs 1961-90. Warmest 2022 10.57; coldest 1892 7.23. Lesson family: tercile categories and shifting baseline.',
    requiredMentions: [
      'Middlesbrough',
      'Gateshead',
      'Hartlepool',
      'Stockton-on-Tees',
      'South Shields',
      'Washington',
      'Wallsend',
      'Redcar',
      'tercile',
      'reference period'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by region, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal lookups: LAD22 to RGN22 and BUA22 to region.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Met Office historic station data, Durham.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/durhamdata.txt' }
    ],
    rejectedClaims: [
      'Met Office official year classifications: not quoted; our terciles are labelled as ours.',
      'Causes of the warming: not discussed.',
      'Darlington BUA: crosses the boundary, omitted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
