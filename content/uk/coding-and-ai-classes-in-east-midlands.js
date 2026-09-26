'use strict';
// East Midlands (region index, UK cluster Phase 7, row 310). ONS region E12000004. Spine: June is the wettest month on
// average, so why does a typical year's wettest month bring far more rain than an average June? Data (downloaded raw 26
// September 2026): Met Office historic station data, suttonboningtondata.txt ("Location: 450700E 325900N, Lat 52.833 Lon
// -1.250, 48 metres amsl", monthly from January 1959). Monthly rain in mm.
// Our sums, 1991 to 2020 (30 complete years): monthly means Jan 50.7, Feb 41.2, Mar 40.6, Apr 44.3, May 47.2, Jun 63.7,
// Jul 61.8, Aug 55.2, Sep 49.4, Oct 61.7, Nov 57.0, Dec 58.2 (June largest). Wettest month of each year: June 8 times, July
// 4, August 4, January 3, December 3, September 2, November 2, February, March, April and October once each; never May.
// Mean of the 30 yearly maxima 104.4 mm vs maximum of the monthly means 63.7 mm. Driest month of each year spread over ten
// months (February and September 5 each).
// Lesson family: mean of the maxima vs maximum of the means (order of operations on max and mean), distribution of the
// argmax; screened (mean of the maxima, maximum of the means, Jensen, flaw of averages: 0 hits).
// Region facts: ONS Census 2021 TS001 via Nomis TYPE480: East Midlands 4,880,054. ONS LAD22 to RGN22: 35 local
// authorities. ONS Census 2021 BUAs wholly in region: Leicester 406,580; Nottingham 299,790; Derby 275,575; Northampton
// 243,520; Lincoln 104,555; Chesterfield 76,420; Corby 68,160; Loughborough 64,860; Mansfield 63,445; Kettering 63,150;
// Wellingborough 54,425. Sheffield, Milton Keynes, Nuneaton, Rugby and Burton upon Trent BUAs are Part, omitted.

const AREAS = [['Derby', 'best-coding-class-in-derby'], ['Derbyshire', 'coding-classes-in-derbyshire'], ['Leicester', 'coding-classes-in-leicester'],
  ['Leicestershire', 'coding-classes-in-leicestershire'], ['Lincoln', 'best-coding-class-in-lincoln'], ['Lincolnshire', 'coding-classes-in-lincolnshire'],
  ['Northamptonshire', 'coding-classes-in-northamptonshire'], ['Nottingham', 'best-coding-class-in-nottingham'], ['Nottinghamshire', 'coding-classes-in-nottinghamshire'],
  ['Rutland', 'coding-classes-in-rutland']];

function linkedAreas() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return AREAS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'region', tag: 'EAST MIDLANDS', label: 'East Midlands', blurb: 'Every East Midlands county and city page in one index, and a Sutton Bonington lesson on why a typical wettest month beats the wettest average month.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-east-midlands',
  code: 'rem',
  accent: '#501F7A',
  accentRationale: 'East Midlands: a Trent-valley violet from the solver (9.31:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'East Midlands',
    eyebrow: 'East Midlands',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-england', name: 'England' }],
  nav: [
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Nottingham', href: '/best-coding-class-in-nottingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'East Midlands',
  title: 'Coding and AI Classes in the East Midlands | Ages 6 to 67',
  description: 'Live online coding, AI, Python and maths classes across the East Midlands, with pages for Leicester, Nottingham, Derby, Lincoln and every county around them.',
  ogDescription: 'Coding and AI classes for the East Midlands, and a Met Office project: why the average wettest month at Sutton Bonington is much drier than a typical year\'s wettest.',
  twitterDescription: 'East Midlands coding, AI, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Maths Classes for the East Midlands',
    description: 'Online coding, AI, Python, statistics and mathematics for children, teenagers and adults across the East Midlands, taught live in English and grouped by level.'
  },

  h1: 'Coding and AI classes in the East Midlands',
  capsuleQ: 'What are the best coding and AI classes in the East Midlands?',
  capsule: 'The East Midlands region had 4,880,054 usual residents at the 2021 census, in 35 local authorities. Leicester, Nottingham, Derby and Northampton are its largest built-up areas, followed by Lincoln, with Chesterfield, Corby, Loughborough, Mansfield, Kettering and Wellingborough among the larger towns. All our lessons are live over video, taught from India. Anyone between 6 and 67 can study coding, AI, Python or maths, one-to-one or in a class of five to ten at a shared level. A free first lesson decides where to begin. Below are our East Midlands pages and a rainfall project. After the trial, a group place is USD 100 a month and private lessons are USD 150 a month.',
  lead: 'The Met Office station at Sutton Bonington has recorded monthly rain since 1959. Averaged over 1991 to 2020, June is its wettest month, at about 64 millimetres. So a reasonable guess is that a typical year\'s wettest month brings about 64 millimetres, and that it is usually June. Both guesses are wrong, and by a lot. In those thirty years, June was the wettest month only eight times, and the wettest month of a year averaged about 104 millimetres. The gap is not a quirk of the data; it follows from the order in which you take an average and a maximum. This page\'s project finds it in Python and explains why it matters well beyond weather.',
  wa: 'Hello Modern Age Coders, we are in the East Midlands and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses across the East Midlands',
    h2: 'East Midlands starting courses',
    intro: 'A Year 3 pupil in Mansfield who measures puddles, a Year 9 in Loughborough trying Python, a Year 12 in Northampton on A level maths, and an adult in Chesterfield learning data analysis. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with rain gauges, counting and charts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'Python and early AI ideas built on real measurements.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Complete Python for teenagers, from lists to data analysis.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for adults working with messy real-world data.' }
    ]
  },

  sections: [
    {
      id: 'east-midlands', tint: '', eyebrow: 'Numbers for the region',
      h2: '4,880,054 people in the East Midlands',
      intro: 'The regional total is the 2021 census usual-resident figure from ONS via Nomis. Listed towns are ONS built-up areas contained wholly in the region.',
      body: [
        { kind: 'table', caption: 'Built-up areas contained wholly in the East Midlands, ONS 2021', head: ['Town or city', 'People', 'Town or city', 'People'], rows: [
          ['Leicester', '406,580', 'Corby', '68,160'],
          ['Nottingham', '299,790', 'Loughborough', '64,860'],
          ['Derby', '275,575', 'Mansfield', '63,445'],
          ['Northampton', '243,520', 'Kettering', '63,150'],
          ['Lincoln', '104,555', 'Wellingborough', '54,425'],
          ['Chesterfield', '76,420', '', '']
        ] },
        { kind: 'p', text: 'There are 35 local authorities in the region on the ONS lookup. Several large built-up areas, including Sheffield\'s, cross into the region from outside and are left out. Schools teach the national curriculum for England, with GCSEs and A levels from several boards, and term dates are set locally, so families let us know theirs.' },
        { kind: 'p', text: 'Our East Midlands pages each have a project of their own, and link here once they are live: ' + linkedAreas() + '.' },
        { kind: 'callout', h3: 'England and NEA support', p: 'Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page covers schooling, and <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science NEA help</a> covers the project component.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East Midlands project',
      h2: 'Average then maximum, or maximum then average?',
      intro: 'Two orders, two very different answers.',
      body: [
        { kind: 'p', text: 'The learner loads thirty complete years of Sutton Bonington rain into a table, one row per year and one column per month. Route one averages each column first, then takes the largest average: June, 63.7 millimetres. Route two takes the largest value in each row first, the wettest month of that year, then averages those thirty maxima: 104.4 millimetres. Both are honest calculations on the same numbers. They answer different questions, and mixing them up leads to badly wrong planning.' },
        { kind: 'table', caption: 'Our results from Met Office Sutton Bonington rain, 1991 to 2020, 26 September 2026', head: ['Question', 'Method', 'Answer', 'What it tells you'], rows: [
          ['Which month is wettest on average?', 'Average each month, take the largest', 'June, 63.7 mm', 'The long-run seasonal pattern'],
          ['How wet is a typical year\'s wettest month?', 'Largest month of each year, then average', '104.4 mm', 'What a single year usually throws at you'],
          ['How often is June the wettest?', 'Count the wettest month in each year', '8 of 30 years', 'The wettest month moves around'],
          ['Which months ever top a year?', 'The same count, all months', 'Eleven of twelve; never May', 'Almost any month can be the wettest']
        ] },
        { kind: 'p', text: 'Why is the second answer so much bigger? In any one year, some month is unusually wet, but which month that is changes from year to year. Averaging first smooths those wet spells away, spreading them across the column; taking the maximum first catches each year\'s wettest spell wherever it falls. So the maximum of the averages is always at most the average of the maxima, and here the gap is about 40 millimetres. The tally makes the point another way: June wins eight times, July and August four each, and even January, December and February have their turns.' },
        { kind: 'p', text: 'This matters far beyond rain. A drain sized for the average wettest month would overflow in most years. A shop stocking for its average busiest day would run out on a typical busy day. The learner writes both routes as functions, tests them on a tiny invented table where the answers can be checked by hand, and adds a check that the first route never exceeds the second. The slip to avoid is quietly using one route and describing it in the words of the other.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Make a small table of pretend rain, circle each row\'s biggest number, and compare the two averages in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Load the real data in Python, compute both routes and the tally of wettest months.' },
          { h3: 'Ages 15 and up', p: 'Prove the inequality, try it with the driest month, and connect it to sizing drains and stock levels.' }
        ] },
        { kind: 'callout', h3: 'Met Office data, our calculations', p: 'The monthly rain totals come from the Met Office Sutton Bonington file. The averages, maxima and tallies are our sums on those values, not official statistics.' }
      ]
    },
    {
      id: 'sutton-bonington', tint: 'deep', eyebrow: 'Why Sutton Bonington',
      h2: 'A record reaching back to 1959',
      intro: 'How the station file describes its site.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data for Sutton Bonington, as stated in the file', head: ['Detail', 'What the file says'], rows: [
          ['Grid reference', '450700E 325900N'],
          ['Latitude and longitude', 'Lat 52.833, Lon -1.250'],
          ['Height', '48 metres above mean sea level'],
          ['Record starts', 'January 1959'],
          ['Years used', 'All 30 years from 1991 to 2020 complete for rain']
        ] },
        { kind: 'p', text: 'Choosing the right order of operations is one of the quiet skills of data work. Engineers plan for the typical worst case, not the worst average; analysts report which calculation they ran. A learner in the East Midlands who has seen 63.7 become 104.4 just by swapping two steps will read every summary statistic more carefully.' },
        { kind: 'p', text: 'We have no affiliation with the Met Office or the ONS. They publish the data; the calculations here, errors included, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From puddle charts to proofs',
    intro: 'The bands below are a sketch; the free lesson decides.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Tables and charts', p: 'Block coding with small tables and bar charts.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Rows and columns', p: 'Python lists and tables, with averages and maxima.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Statistics and proof', p: 'Inequalities, distributions and machine learning basics with GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data you can trust', p: 'Adult Python for analysis and clear reporting.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and summaries',
    h2: 'An AI can summarise a dataset. Did it average first or take the maximum first?',
    intro: 'The same question in words can hide two different calculations.',
    p1: 'Ask a chatbot for the wettest month or the busiest day and it will usually give one number without saying which route produced it. Both routes sound like a fair answer to the question.',
    p2: 'An East Midlands learner who has computed both, and seen them differ by 40 millimetres, knows to ask exactly how a summary was made.',
    closer: 'Knowing that the order of steps can change the answer is a strong reason for an East Midlands teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From Lincoln to Corby, lessons at home',
    intro: 'City or village, a home internet connection is enough.',
    cells: [
      { h3: 'The learner types', p: 'Every program is typed by the student, with the tutor watching the shared screen and asking rather than telling.' },
      { h3: 'English year groups', p: 'A Year 4 in Kettering or a Year 13 in Wellingborough is placed by year and key stage, with exam names from their board.' },
      { h3: 'Trial lesson free', p: 'The first full lesson is free and ends with plain advice.' },
      { h3: 'Classes of one level', p: 'Five to ten learners at a single stage, gathered from around the UK.' },
      { h3: 'Term-time rhythm', p: 'Two sessions a week in term and a break for holidays.' },
      { h3: 'Local time stays', p: 'Clock changes do not shift your lesson; our teachers adjust their day.' }
    ],
    spec: { title: 'Why online groups work across the region', p: 'Five learners at the same level and free at the same hour are seldom in one town. Online, someone in Loughborough or Mansfield joins exactly the right group.' }
  },

  fees: {
    h2: 'East Midlands fees',
    intro: 'Derby and Lincoln pay the same fee, as do all the countries we teach outside India.',
    first: 'A complete free lesson, then our advice.',
    group: 'Roughly eight lessons monthly with five to ten others.',
    private: 'Roughly eight lessons monthly with a personal tutor.',
    closer: 'All prices are in US dollars and never in sterling. You are billed only after the trial has chosen a course and weekly slot, and the pricing page explains holidays, missed lessons and format changes.'
  },

  reviewsH2: 'East Midlands families on Google',

  book: {
    h2: 'Book a free East Midlands lesson',
    intro: 'Share the learner\'s school year or age and a favourite topic. The trial could be a Scratch rain chart, a first Python program, or the Sutton Bonington puzzle.',
    success: 'Thank you. Your East Midlands request has been received.'
  },

  faq: {
    h2: 'East Midlands questions',
    intro: 'The region, the rainfall project and the details.',
    items: [
      { q: 'What is the population of the East Midlands?', a: 'The 2021 census counted 4,880,054 usual residents in the East Midlands region.' },
      { q: 'What are the largest cities in the East Midlands?', a: 'Among ONS built-up areas wholly in the region: Leicester 406,580, Nottingham 299,790 and Derby 275,575.' },
      { q: 'What is the Sutton Bonington project?', a: 'Learners compare the maximum of monthly average rainfall with the average of each year\'s wettest month in Python, and find a gap of about 40 mm.' },
      { q: 'What is the difference between the mean of the maxima and the maximum of the means?', a: 'The first finds each group\'s largest value and averages them; the second averages each column and takes the largest. The first is never smaller.' },
      { q: 'How often was June the wettest month at Sutton Bonington?', a: 'In 8 of the 30 years from 1991 to 2020, on our count of the Met Office data.' },
      { q: 'Are the lessons online?', a: 'Yes, all live on video from home.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in maths and computing. We build understanding and never promise grades.' },
      { q: 'Who can join?', a: 'Learners from 6 to 67.' },
      { q: 'How much are lessons?', a: 'Free first lesson; then USD 100 a month in a class or USD 150 a month privately.' },
      { q: 'Do lessons continue over the holidays?', a: 'No, they pause. Share your holiday weeks with us.' }
    ]
  },

  next: {
    eyebrow: 'Other regions',
    h2: 'Neighbouring English regions',
    html: 'See the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a> for more region indexes. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everything.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'East Midlands',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/best-coding-class-in-nottingham', label: 'Nottingham' },
    { href: '/coding-classes-in-leicester', label: 'Leicester' }
  ],

  personalityCss: `
.cg-root.cg-rem .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-rem .cg-hero h1 { font-weight: 725; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-rem .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-rem .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rem .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-rem .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-rem .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rem .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-rem .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-rem .cg-callout { border-left-width: 4px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Midlands region (E12000004). ONS Census 2021 TS001 via Nomis TYPE480: 4,880,054. ONS LAD22 to RGN22: 35 local authorities. ONS Census 2021 BUAs wholly in region: Leicester 406,580; Nottingham 299,790; Derby 275,575; Northampton 243,520; Lincoln 104,555; Chesterfield 76,420; Corby 68,160; Loughborough 64,860; Mansfield 63,445; Kettering 63,150; Wellingborough 54,425. Met Office historic station data: Sutton Bonington "Location: 450700E 325900N, Lat 52.833 Lon -1.250, 48 metres amsl", monthly from January 1959.',
    localProject: 'Sutton Bonington rain 1991-2020, 30 complete years. Monthly means: Jun 63.7 largest. Wettest-month tally: Jun 8, Jul 4, Aug 4, Jan 3, Dec 3, Sep 2, Nov 2, Feb 1, Mar 1, Apr 1, Oct 1, May 0. Mean of yearly maxima 104.4 vs max of means 63.7. Lesson family: mean of the maxima vs maximum of the means, argmax distribution.',
    requiredMentions: [
      'Chesterfield',
      'Corby',
      'Loughborough',
      'Mansfield',
      'Kettering',
      'Wellingborough',
      'Northampton',
      'Sutton Bonington',
      'mean of the maxima'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by region, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal lookups: LAD22 to RGN22 and BUA22 to region.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Met Office historic station data, Sutton Bonington.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/suttonboningtondata.txt' }
    ],
    rejectedClaims: [
      'Official Met Office rainfall averages: not quoted; our sums are labelled.',
      'Drain design standards: mentioned only as an illustration, no figures.',
      'Sheffield, Milton Keynes, Nuneaton, Rugby and Burton upon Trent BUAs: cross the boundary, omitted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
