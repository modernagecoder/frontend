'use strict';
// West Midlands region (region index, UK cluster Phase 7, row 309). ONS region E12000005. Distinct from the West Midlands
// metropolitan county page (coding-classes-in-the-west-midlands). Spine: has the growing season got longer? Data (downloaded
// raw 26 September 2026): Met Office historic station data, shawburydata.txt ("Location: 355200E 322100N, Lat 52.794 Lon
// -2.663, 72 metres amsl", monthly from January 1946). Monthly mean = (tmax + tmin) / 2.
// Our sums: 1961 to 1990 (all 360 months): Jan 3.42, Feb 3.41, Mar 5.36, Apr 7.50, ... Nov 5.99, Dec 4.16. 1991 to 2020 (all
// 360): Jan 4.30, Feb 4.64, Mar 6.31, Apr 8.56, ... Nov 6.91, Dec 4.53. Season = days between the upward and downward
// crossings of a threshold, by linear interpolation between mid-month points (day of year of the 15th). Threshold 5.5 C:
// 1961-90 17 Mar to 23 Nov, 251 days; 1991-2020 1 Mar to 3 Dec, 276 days (+25). Threshold 6.0: 236 -> 262. Threshold 10.0:
// 160 -> 172. Step-function slip (count whole months above 5.5): 1961-90 April to November = 8 months; 1991-2020 March to
// November = 9 months; a 0.95 degree change in March jumps the answer by a whole month.
// Lesson family: threshold crossings by linear interpolation, growing season length, comparing normals; screened (growing
// season, Shawbury: 0 hits). Official definitions use daily runs; ours is a simplified monthly version, said on the page.
// Region facts: ONS Census 2021 TS001 via Nomis TYPE480: West Midlands 5,950,757. ONS LAD22 to RGN22: 30 local authorities.
// ONS Census 2021 BUAs wholly in region: Birmingham 1,121,375; Coventry 344,285; Stoke-on-Trent 260,560; Wolverhampton
// 234,025; Telford 156,910; Solihull 107,735; Worcester 105,465; West Bromwich 103,110; Royal Sutton Coldfield 93,375;
// Newcastle-under-Lyme 76,505; Tamworth 76,090; Shrewsbury 76,015. Nuneaton, Rugby, Burton upon Trent: Part, omitted.

const AREAS = [['Birmingham', 'coding-classes-in-birmingham'], ['Coventry', 'best-coding-class-in-coventry'], ['Hereford', 'best-coding-class-in-hereford'],
  ['Herefordshire', 'coding-classes-in-herefordshire'], ['Lichfield', 'best-coding-class-in-lichfield'], ['Shropshire', 'coding-classes-in-shropshire'],
  ['Staffordshire', 'coding-classes-in-staffordshire'], ['Stoke-on-Trent', 'best-coding-class-in-stoke-on-trent'], ['Warwickshire', 'coding-classes-in-warwickshire'],
  ['the West Midlands county', 'coding-classes-in-the-west-midlands'], ['Wolverhampton', 'best-coding-class-in-wolverhampton'], ['Worcester', 'best-coding-class-in-worcester'],
  ['Worcestershire', 'coding-classes-in-worcestershire']];

function linkedAreas() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return AREAS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'region', tag: 'WEST MIDLANDS REGION', label: 'West Midlands region', blurb: 'Every West Midlands region county and city page in one index, and a Shawbury lesson on whether the growing season has lengthened.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-west-midlands-region',
  code: 'rwm',
  accent: '#43127A',
  accentRationale: 'West Midlands region: an ironworks-dusk violet from the solver (10.54:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'West Midlands region',
    eyebrow: 'West Midlands region',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-england', name: 'England' }],
  nav: [
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West Midlands region',
  title: 'Coding and AI Classes in the West Midlands Region | Ages 6 to 67',
  description: 'Live online coding, AI, Python and maths classes across the West Midlands region, from Birmingham and Coventry to Shropshire, Herefordshire and Staffordshire.',
  ogDescription: 'Coding and AI classes for the whole West Midlands region, and a Met Office project: find in Python whether the growing season at Shawbury has got longer.',
  twitterDescription: 'West Midlands region coding, AI, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Maths Classes for the West Midlands Region',
    description: 'Online coding, AI, Python, data and mathematics for children, teenagers and adults across the West Midlands region, taught live in English and placed by level.'
  },

  h1: 'Coding and AI classes in the West Midlands region',
  capsuleQ: 'What are the best coding and AI classes in the West Midlands region?',
  capsule: 'The West Midlands region counted 5,950,757 residents at the 2021 census, in 30 local authorities. Birmingham, at 1,121,375, is the largest built-up area in England outside London, and Coventry, Stoke-on-Trent and Wolverhampton follow, with Telford, Solihull, Worcester, West Bromwich, Tamworth and Shrewsbury among the big towns. We teach every lesson live by video from India. Learners from 6 to 67 take coding, AI, Python and maths, individually or in a same-level group of five to ten. The first lesson is on us and settles the starting point. This page links our pages across the region and runs a project on a Shropshire weather record. Continuing is USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'At Shawbury in Shropshire the Met Office has kept monthly temperature records since 1946. Gardeners and farmers care about one number above most others: how many days of the year are warm enough for grass and crops to grow. A common rule of thumb puts the line at an average of about 5.5 or 6 degrees. Temperatures are published month by month, though, so the exact days when the average climbs past the line in spring and falls back below it in autumn have to be estimated. Has that growing season changed between the thirty years from 1961 to 1990 and the thirty from 1991 to 2020? This page\'s project estimates both in Python, and shows why a lazy method would get it badly wrong.',
  wa: 'Hello Modern Age Coders, we are in the West Midlands region and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses across the region',
    h2: 'First courses for West Midlands learners',
    intro: 'A Year 2 pupil in Telford who grows seeds on the windowsill, a Year 9 in Solihull starting Python, a Year 12 in Shrewsbury on A level maths, and a Tamworth adult learning data skills. Each begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Scratch projects with growing plants, seasons and timers.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Straight lines, rates and averages made clear with code.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Complete Python for teenagers, from loops to data projects.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from a blank page to working tools.' }
    ]
  },

  sections: [
    {
      id: 'west-midlands-region', tint: '', eyebrow: 'The region by the numbers',
      h2: '5,950,757 people in the West Midlands region',
      intro: 'The region figure is the ONS 2021 census usual-resident count, taken from Nomis. The towns below are ONS built-up areas that fall entirely inside the region.',
      body: [
        { kind: 'table', caption: 'West Midlands region: ONS 2021 built-up areas entirely within the region', head: ['Built-up area', 'Population', 'Built-up area', 'Population'], rows: [
          ['Birmingham', '1,121,375', 'Worcester', '105,465'],
          ['Coventry', '344,285', 'West Bromwich', '103,110'],
          ['Stoke-on-Trent', '260,560', 'Royal Sutton Coldfield', '93,375'],
          ['Wolverhampton', '234,025', 'Newcastle-under-Lyme', '76,505'],
          ['Telford', '156,910', 'Tamworth', '76,090'],
          ['Solihull', '107,735', 'Shrewsbury', '76,015']
        ] },
        { kind: 'p', text: 'The ONS lookup names 30 local authorities here. Nuneaton, Rugby and Burton upon Trent are left out because their built-up areas cross the regional boundary. This region page is not the same as our page for the West Midlands metropolitan county, which covers the seven metropolitan boroughs, Birmingham among them. Schools teach the national curriculum for England through to GCSE and A level, and each council sets its own term dates, so families pass theirs on.' },
        { kind: 'p', text: 'Our pages across the region, each with its own project, are linked here as they appear: ' + linkedAreas() + '.' },
        { kind: 'callout', h3: 'England and coursework help', p: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains the school system, and <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science NEA help</a> covers the programming project.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Midlands project',
      h2: 'Has the growing season got longer?',
      intro: 'Draw straight lines between months and find where they cross the line.',
      body: [
        { kind: 'p', text: 'The learner averages each calendar month at Shawbury for two thirty-year spans, then places each monthly mean on the 15th of its month. Between two neighbouring months the temperature is assumed to change in a straight line. Where that line crosses the threshold, simple proportion gives the day: if March sits at 5.4 and April at 7.5, a 5.5 degree line is crossed a small fraction of the way from mid March to mid April. The program finds the spring crossing, the autumn crossing, and the number of days between them.' },
        { kind: 'table', caption: 'Our growing-season estimates for Shawbury from Met Office station data, 26 September 2026', head: ['Threshold', '1961 to 1990', '1991 to 2020', 'Change'], rows: [
          ['5.5 C', '17 March to 23 November, 251 days', '1 March to 3 December, 276 days', '25 days longer'],
          ['6.0 C', '236 days', '262 days', '26 days longer'],
          ['10.0 C', '160 days', '172 days', '12 days longer']
        ] },
        { kind: 'p', text: 'Every month at Shawbury is warmer in the later period, by between about 0.4 and 1.2 degrees, and that shifts the spring crossing earlier and the autumn one later. At the 5.5 degree line the season has grown by about 25 days, starting roughly two weeks sooner and ending about ten days later. The choice of threshold matters: moving it by half a degree changes the length by over two weeks, which is why any growing-season figure must state its threshold. These are simplified estimates from monthly means; official definitions count runs of warm days in daily data.' },
        { kind: 'p', text: 'Now the lazy method. Count only the months whose mean is above 5.5 and call each one a full month. For 1961 to 1990 March averages 5.36, just under the line, so the season is April to November, eight months. For 1991 to 2020 March averages 6.31, so it becomes nine months. A change of under one degree in March adds a whole month at a stroke, which is an artefact of the method, not the weather. Interpolation turns the jump into the smooth two-week shift it really is.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plot monthly temperatures in Scratch, draw the threshold line, and spot where the curve crosses it.' },
          { h3: 'Ages 11 to 15', p: 'Write the proportion step in Python and find the spring and autumn crossing days.' },
          { h3: 'Ages 15 and up', p: 'Compare thresholds and periods, and show why counting whole months creates false jumps.' }
        ] },
        { kind: 'callout', h3: 'Met Office data, our estimates', p: 'The monthly temperatures come from the Met Office\'s Shawbury file. The mid-month placement, straight-line interpolation and thresholds are our choices, so the dates are illustrations of the method rather than official growing-season statistics.' }
      ]
    },
    {
      id: 'shawbury', tint: 'deep', eyebrow: 'Why Shawbury',
      h2: 'Eighty years of Shropshire weather',
      intro: 'How the Shawbury file describes the station.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data for Shawbury, as stated in the file', head: ['Detail', 'What the file says'], rows: [
          ['Grid reference', '355200E 322100N'],
          ['Latitude and longitude', 'Lat 52.794, Lon -2.663'],
          ['Height', '72 metres above mean sea level'],
          ['Record starts', 'January 1946'],
          ['Complete months used', 'All 360 in each of our two periods']
        ] },
        { kind: 'p', text: 'Finding where a smooth quantity crosses a line from a few measurements is everyday work in science and engineering: when a tank will be full, when a battery drops below a safe level, when a trend passes a target. A learner in the West Midlands region who has turned monthly averages into crossing dates, and seen a crude method invent a whole extra month, has learned to be careful with thresholds everywhere.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Met Office and the ONS. Their data underpins this page; the estimates and any mistakes in them are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Through the school years',
    h2: 'From seed trays to interpolation',
    intro: 'Year groups are approximate; the trial lesson places each learner.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Growing and counting', p: 'Block coding with timers, growth and counting days.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Lines and proportion', p: 'Python with proportion, straight lines and data.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Modelling and AI', p: 'Linear models, data and first AI ideas, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Working with data', p: 'Adult Python for analysis and everyday automation.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and method',
    h2: 'An AI can tell you the growing season. Which method did it use?',
    intro: 'The same data can give answers a month apart.',
    p1: 'Ask a chatbot how long the growing season is somewhere and you may get a single confident number. Whether it counted whole months, interpolated, or used daily data, and which threshold it chose, is rarely mentioned.',
    p2: 'A West Midlands learner who has watched a crude method add a month from a tiny change knows to ask how any figure was calculated.',
    closer: 'Asking how a number was calculated, not just what it is, is a lasting reason for a West Midlands teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Running lessons',
    h2: 'From Shrewsbury to Coventry, by video',
    intro: 'City, town or village, a connection at home is enough.',
    cells: [
      { h3: 'Learner-typed code', p: 'The student writes the program; the tutor follows the shared screen and steps in with a question when progress stalls.' },
      { h3: 'By year group', p: 'A Year 3 in West Bromwich or a Year 12 in Newcastle-under-Lyme is placed by year and key stage, with exam names from their board.' },
      { h3: 'Free starting lesson', p: 'A full first lesson at no cost, then a clear next step.' },
      { h3: 'Matched classes', p: 'Five to ten learners on one level in each class, from anywhere in the UK.' },
      { h3: 'Term weeks', p: 'Twice a week during term, with holidays off.' },
      { h3: 'UK time held', p: 'Your lesson stays at its UK time through the clock changes; our teachers adapt.' }
    ],
    spec: { title: 'Why even a big city region uses online groups', p: 'Five learners at one level and one hour are rarely in the same place, even around Birmingham. Online, a learner in Tamworth or Telford joins a class that fits.' }
  },

  fees: {
    h2: 'Fees across the West Midlands region',
    intro: 'Coventry and Shrewsbury pay the same, as does every country we teach outside India.',
    first: 'A full free lesson with honest advice.',
    group: 'About eight lessons monthly in a group of five to ten.',
    private: 'About eight lessons monthly with your own tutor.',
    closer: 'Our fees are in US dollars; we never price in sterling. Nothing is billed before the trial has agreed a course and weekly time, and the pricing page covers holidays, missed sessions and changing between group and private.'
  },

  reviewsH2: 'Family feedback on Google',

  book: {
    h2: 'Book a free West Midlands lesson',
    intro: 'A school year or age and one interest is plenty to start. The trial could be a Scratch seed tray, a first Python program, or the Shawbury growing-season puzzle.',
    success: 'Thank you. Your West Midlands request has reached us.'
  },

  faq: {
    h2: 'West Midlands region questions',
    intro: 'The region, the growing-season project and practical points.',
    items: [
      { q: 'What is the population of the West Midlands region?', a: 'The 2021 census counted 5,950,757 usual residents in the West Midlands region.' },
      { q: 'What are the largest places in the West Midlands region?', a: 'Among ONS built-up areas wholly in the region: Birmingham 1,121,375, Coventry 344,285 and Stoke-on-Trent 260,560.' },
      { q: 'What is the Shawbury project?', a: 'Learners interpolate Met Office monthly temperatures in Python to estimate when the growing season starts and ends, and compare 1961 to 1990 with 1991 to 2020.' },
      { q: 'What is the growing season?', a: 'The part of the year warm enough for plants to grow, often estimated from when the average passes about 5.5 or 6 degrees.' },
      { q: 'Is this the same as the West Midlands county page?', a: 'No. This page covers the whole region; the county page covers the seven metropolitan boroughs.' },
      { q: 'Are the lessons online?', a: 'Yes, every lesson is live by video.' },
      { q: 'Do you support GCSE and A level?', a: 'Yes, for maths and computing, focusing on understanding with no promised grades.' },
      { q: 'What ages can join?', a: 'From six up to 67.' },
      { q: 'What does it cost?', a: 'The trial is free, then USD 100 a month for a group or USD 150 a month for one-to-one.' },
      { q: 'Do lessons stop in the holidays?', a: 'Yes. Send us your school holiday weeks.' }
    ]
  },

  next: {
    eyebrow: 'Other regions',
    h2: 'More English regions',
    html: 'See also <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">the East of England</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page covers schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the full series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West Midlands region',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-classes-in-shropshire', label: 'Shropshire' }
  ],

  personalityCss: `
.cg-root.cg-rwm .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-rwm .cg-hero h1 { font-weight: 710; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-rwm .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-rwm .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rwm .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-rwm .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-rwm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rwm .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-rwm .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-rwm .cg-callout { border-left-width: 5px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Midlands region (E12000005). ONS Census 2021 TS001 via Nomis TYPE480: 5,950,757. ONS LAD22 to RGN22: 30 local authorities. ONS Census 2021 BUAs wholly in region: Birmingham 1,121,375; Coventry 344,285; Stoke-on-Trent 260,560; Wolverhampton 234,025; Telford 156,910; Solihull 107,735; Worcester 105,465; West Bromwich 103,110; Royal Sutton Coldfield 93,375; Newcastle-under-Lyme 76,505; Tamworth 76,090; Shrewsbury 76,015. Met Office historic station data: Shawbury "Location: 355200E 322100N, Lat 52.794 Lon -2.663, 72 metres amsl", monthly from January 1946.',
    localProject: 'Shawbury monthly means ((tmax+tmin)/2). Growing season by mid-month linear interpolation: 5.5 C 1961-90 17 Mar-23 Nov 251 d; 1991-2020 1 Mar-3 Dec 276 d (+25). 6.0 C 236 -> 262. 10.0 C 160 -> 172. Whole-month slip: 8 months -> 9 months (March 5.36 -> 6.31). Lesson family: threshold crossing by interpolation, growing season length.',
    requiredMentions: [
      'Telford',
      'Solihull',
      'West Bromwich',
      'Royal Sutton Coldfield',
      'Newcastle-under-Lyme',
      'Tamworth',
      'Shrewsbury',
      'Shawbury',
      'growing season'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by region, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal lookups: LAD22 to RGN22 and BUA22 to region.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Met Office historic station data, Shawbury.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/shawburydata.txt' }
    ],
    rejectedClaims: [
      'Official growing-season statistics: not quoted; our simplified monthly estimates are labelled.',
      'Causes of the warming: not discussed.',
      'Nuneaton, Rugby and Burton upon Trent BUAs: cross the regional boundary, omitted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
