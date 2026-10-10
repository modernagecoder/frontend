'use strict';
// Logan (cg- regional city page, Australia cluster Phase 7, row 199). Shaped page (best): leads with teenagers and
// adults. Spine: is Logan level or rugged, and why does the answer depend on the size of the grid? Data: SRTM 1
// arc-second elevation (NASA, public domain) through the OpenTopoData public API, dataset srtm30m, fetched 10 October
// 2026 (scratchpad au/r8/dl/lgn_dem.json): 151 x 201 grid, step 0.0003 degrees (about 29.6 by 33.2 m), latitude
// -27.665 to -27.620, longitude 153.100 to 153.160, 30,351 points, elevation -1 to 127 m (mean 30.4; 8 cells at or below
// 0 m). All four corners and the four edge midpoints fall inside Logan LGA (ABS ASGS 2021 LGA layer, point queries,
// 10 October 2026); centre in Slacks Creek, highest cell (127 m, -27.6236, 153.1582) and most rugged cell (-27.6293,
// 153.1495) in Daisy Hill (ABS SAL layer). Terrain ruggedness index by our code (au/r8/lgn_tri.py), Riley et al. 1999,
// square root of the summed squared differences to the 8 neighbours: 30 m cells 29,651 interior cells, mean 4.99 m,
// median 4.36, 95th percentile 10.25, maximum 29.73; every 3rd cell (about 90 m) mean 12.37; every 9th (about 270 m)
// mean 25.29; every 27th (about 800 m) mean 38.56, maximum 115.12. Riley's classes (level 0 to 80 m, nearly level 81
// to 116, ... extremely rugged 959 to 4,367; derived for 1 km cells): all 29,651 cells at 30 m are level; at about
// 800 m, 22 level and 2 nearly level. Mean absolute difference variant correlates 0.992 with Riley's, mean ratio
// 3.419. Lesson family: terrain ruggedness index (Riley TRI) on an elevation grid; screened free site-wide on 10
// October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Logan LGA (LGA34590), with Queensland and
// Australia: 345,098 people; median age 34; 90,481 families; 125,926 private dwellings; 2.9 people per household;
// separate house 95,721 (85.0 percent; Qld 74.8; Australia 72.3); flat or apartment 3,075 (2.7; Qld 12.5; Australia
// 14.2); Professionals 21,402 (14.1; Qld 21.4; Australia 24.0); Technicians and Trades Workers 23,874 (15.7; Qld
// 13.7; Australia 12.9); Bachelor Degree level and above 36,742 (13.7; Qld 21.9; Australia 26.3); aged 15 to 19:
// 23,169 (6.7; Qld 6.1); aged 20 to 24: 22,856 (6.6; Qld 6.3). ABS ERP Logan LGA (34590) 30 June 2025: 403,515.
// Queensland 2027 term dates from education.qld.gov.au future dates. Excluded by the cluster rules: income, rent,
// mortgage, ancestry, birthplace, language, religion, health, crime.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'LOGAN', label: 'Logan', blurb: 'Logan, where a ruggedness index calls the same hills level or rugged depending on the size of the grid.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-logan',
  code: 'lgan',
  accent: '#36368E',
  accentRationale: 'Logan: a deep evening indigo (HSV saturation 0.62, value 0.56, hue 240), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 9.4:1 on white and 7.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Logan',
    eyebrow: 'Logan, south east Queensland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Logan, Queensland',
  title: 'Best Coding Classes in Logan | Live Online, Teens and Adults',
  description: 'Live online coding and Python classes for Logan teenagers and adults, with a project that measures how rugged the city\'s hills are and why the answer shifts.',
  ogDescription: 'Logan coding classes built on public elevation data and one stubborn question: is Daisy Hill rugged or level?',
  twitterDescription: 'Coding classes for Logan teens and adults, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Logan Learners',
    description: 'Level-matched online Python, grids, NumPy, spatial data and analysis for teenagers and adults across the City of Logan, taught live in English.'
  },

  h1: 'Coding classes in Logan',
  capsuleQ: 'What are the best coding classes in Logan?',
  capsule: 'Classes where a Logan teenager or adult writes code against real public data about their own city, and learns to say exactly what a number means and when it stops meaning it. The City of Logan counted 345,098 people at the 2021 Census. Every lesson happens live over video, either privately or with a few classmates working at the same stage, and nobody pays for the first.',
  lead: 'Go from the low ground of Slacks Creek up into Daisy Hill and the land rises more than a hundred metres. Is that rugged? Geographers have a formula for it, the terrain ruggedness index, which compares each patch of ground with the eight patches around it. Run it on NASA\'s 30 metre elevation grid for a block of Logan and the average answer is about 5 metres, and the published scale for the index calls every single one of 29,651 cells level. Thin the grid out so its points sit about 800 metres apart and the average climbs to almost 39 metres. Same hills, same formula, very different numbers. Our Logan learners find out why a measurement can depend on the ruler as much as on the land.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Logan.',

  picks: {
    eyebrow: 'Course picks for Logan',
    h2: 'Good first courses for Logan learners',
    intro: 'Each heads towards the ruggedness project below. The free lesson decides the fit, and we ask for no card details.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python basics through to grids of numbers, nested loops and simple maps.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'NumPy, summaries and the habit of asking what a statistic depends on.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 16', note: 'Squares, square roots and averages, worked out in code on real numbers.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Spatial data, resampling, scale effects and reporting methods with results.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Logan in the Census',
      h2: 'A city of 345,098 between Brisbane and the Gold Coast',
      intro: 'Figures for the City of Logan council area from the 2021 Census, with Queensland and national comparisons.',
      body: [
        { kind: 'p', text: 'At the Census Logan had 345,098 residents and a median age of 34. They lived as 90,481 families in 125,926 private dwellings, averaging 2.9 people per household.' },
        { kind: 'table', caption: 'Logan compared (2021 Census shares)', head: ['Group', 'Logan', 'Queensland', 'Australia'], rows: [
          ['Separate houses (95,721 dwellings)', '85.0%', '74.8%', '72.3%'],
          ['Technicians and trades workers (23,874 people)', '15.7%', '13.7%', '12.9%'],
          ['Professionals (21,402 people)', '14.1%', '21.4%', '24.0%'],
          ['Bachelor degree or above (36,742 people)', '13.7%', '21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Apartments are rare', p: 'Flats and apartments made up 3,075 dwellings, 2.7% of the total, against 12.5% in Queensland.' },
          { h3: 'Lots of teenagers', p: 'There were 23,169 residents aged 15 to 19, 6.7% of the population, above the state share of 6.1%.' },
          { h3: 'Young adults', p: 'A further 22,856 residents were aged 20 to 24.' }
        ] },
        { kind: 'p', text: 'The ABS estimate for Logan at 30 June 2025 is 403,515. The bureau adds small random changes to Census cells for privacy, so rows and totals may not reconcile; we quote figures exactly as published and never total rows ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is Logan rugged or level, and who decides?',
      intro: 'A 5.9 by 5.0 kilometre block of SRTM elevation inside the City of Logan, centred on Slacks Creek and rising into Daisy Hill, run through the terrain ruggedness index in Python.',
      body: [
        { kind: 'table', caption: 'Ruggedness of the same ground at four grid sizes (our calculation, 10 October 2026)', head: ['Grid spacing', 'Cells measured', 'Average ruggedness', 'Called level on the published scale'], rows: [
          ['About 30 m', '29,651', '4.99 m', 'All of them'],
          ['About 90 m', '3,185', '12.37 m', 'All of them'],
          ['About 270 m', '315', '25.29 m', '313 of 315'],
          ['About 800 m', '24', '38.56 m', '22 of 24']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Compare with neighbours', p: 'For each cell, take the height difference to each of its eight neighbours, square them, add them up and take the square root. A flat cell scores zero; a cell on a steep slope scores high.' },
          { h3: '2. Run it on Logan', p: 'Heights in the block range from about sea level to 127 metres, the highest point falling in Daisy Hill. On 30 metre cells the average score is 4.99 m, with the most rugged cell, also in Daisy Hill, scoring 29.73 m.' },
          { h3: '3. Change the ruler', p: 'Keep every third cell and neighbours are three times further apart, so height differences grow. Each step up in cell size raises the score, from 4.99 m to 38.56 m.' }
        ] },
        { kind: 'callout', h3: 'A scale built for a different grid', p: 'The 1999 paper that introduced the index sorted scores into seven classes, from level (0 to 80 metres) to extremely rugged (959 to 4,367 metres). Those breaks were set for grid cells of one square kilometre in mountain country. Apply them to 30 metre cells and every cell in Logan is level, including the side of Daisy Hill. The formula is fine; the labels only make sense at the cell size they were built for.' },
        { kind: 'p', text: 'All four corners of the block and the midpoints of its edges lie inside the City of Logan on the ABS boundary layer. Eight cells record heights at or below zero, a reminder that radar measurements carry noise. A gentler variant of the index, the mean absolute difference, ranks cells almost identically (correlation 0.992) but gives numbers about 3.4 times smaller. All scores are our own calculations.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Measuring with care',
      h2: 'What to report alongside any terrain number',
      intro: 'Learned on Logan\'s hills, then applied to image analysis, flood mapping, sensor grids and any measurement on a raster.',
      body: [
        { kind: 'table', caption: 'Choices that changed the Logan ruggedness scores', head: ['Choice', 'Options tested', 'Effect'], rows: [
          ['Grid spacing', '30, 90, 270 and 800 m', 'Average rises from 4.99 m to 38.56 m'],
          ['Formula', 'Root of summed squares against mean absolute difference', 'Same ranking, about 3.4 times different scale'],
          ['Class labels', 'Published breaks for 1 km cells', 'Everything at 30 m is called level'],
          ['Data quality', 'Check minimum heights', '8 cells at or below zero metres']
        ] },
        { kind: 'p', text: 'A terrain score without its cell size is half a fact. The same is true of any measurement on a grid, from pixel brightness to rainfall totals: the resolution, the formula and the reference scale belong in the same sentence as the result.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Compute the index for a 3 by 3 patch by hand, then for the whole Logan grid with loops.' },
          { h3: 'University students', p: 'Vectorise with NumPy slicing, resample properly rather than by skipping, and study the scale effect.' },
          { h3: 'Adults at work', p: 'Whenever a dashboard reports a grid-based metric, ask what resolution it was computed at.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with NASA, OpenTopoData, the ABS or Logan City Council. The elevation data and statistics are theirs; the ruggedness analysis is our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Logan',
      h2: 'Queensland clocks and the 2027 school year',
      intro: 'What shapes when a Logan learner can join a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Queensland time', p: 'Logan stays on UTC plus 10 all year, with no daylight saving.' },
          { h3: 'India time', p: 'Logan sits four and a half hours ahead of India time throughout the year.' },
          { h3: 'Across the border', p: 'From October to April the New South Wales side of the border runs an hour ahead of Logan.' }
        ] },
        { kind: 'spec', title: 'First half of 2027 in Queensland schools', p: 'The education department lists Term 1 of 2027 as nine weeks, Wednesday 27 January to Thursday 25 March, and Term 2 as eleven weeks, Monday 12 April to Friday 25 June.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first grid to spatial analysis',
    intro: 'Ages here are rough markers; where a learner actually begins is settled in the free lesson.',
    cols: [
      { band: 'Ages 11 to 14', h3: 'Numbers in a grid', p: 'Lists of lists, neighbours and simple maps drawn with code.', courses: ['maths-through-coding', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Formulas on real data', p: 'Applying a published index to an elevation grid and checking it by hand.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Scale and resampling', p: 'Raster analysis, resolution effects and reproducible methods.', courses: ['data-science-complete-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Grids at work', p: 'Automating spatial summaries and documenting how they were made.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant mention the cell size?',
    intro: 'Not unless asked.',
    p1: 'Ask a chatbot to classify Logan\'s terrain with the ruggedness index and it will likely compute the scores, apply the published classes and announce that the area is level. Every step looks correct, and the conclusion rests on a scale built for a grid 30 times coarser.',
    p2: 'Our Logan learners have AI write the index quickly, then test it on a hand-worked 3 by 3 patch and rerun it at several cell sizes. They report the resolution with every result, which is the part the assistant leaves out.',
    closer: 'A Logan learner who has watched the same hills change from level to rugged as the grid changed will ask what any AI-produced number depends on, long after 2026.',
    blogAnchor: 'the skills that make a good programmer'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Logan homes, live online lessons',
    intro: 'A class online reaches every corner of a large city equally.',
    cells: [
      { h3: 'Queensland time throughout', p: 'Lesson times are set in Logan time and never move for daylight saving.' },
      { h3: 'Queensland curriculum years', p: 'Teachers plan around Queensland year levels, QCE seniors included, and teach in English.' },
      { h3: 'Code in the first hour', p: 'The free lesson is real programming with a teacher. You then receive a recommended course and time, and payment details are never requested.' },
      { h3: 'Five to ten per class', p: 'Learners grouped by level, drawn from several places so each stage has a workable hour.' },
      { h3: 'Two lessons weekly', p: 'Roughly eight a month, with holiday and exam breaks planned with the teacher.' },
      { h3: 'Families with several learners', p: 'Siblings at different levels join separate groups at times that suit the household.' }
    ],
    spec: { title: 'Logan time on every booking', p: 'Every time we send is in Queensland time, so nothing needs converting.' }
  },

  fees: {
    h2: 'Coding class fees in Logan',
    intro: 'All of it in three lines.',
    first: 'A free lesson, then a recommended level, course and time.',
    group: 'Near enough eight group lessons a month, five to ten learners per class.',
    private: 'Near enough eight one-to-one lessons a month with one teacher.',
    closer: 'Logan pays the national US dollar rate, the same as every other Australian city. There is no charge until the trial agrees a course and time; the pricing page explains holidays, missed lessons and changes of format.'
  },

  reviewsH2: 'Reviews on Google from learners and parents',

  book: {
    h2: 'Tell us a little and we will plan the first lesson',
    intro: 'The trial task is set beforehand: a grid of numbers for a Year 7 beginner, the 3 by 3 ruggedness calculation for a Year 11 student, or the full scale comparison for an adult.',
    success: 'Thank you. We will be in touch soon about a coding class in Logan.'
  },

  faq: {
    h2: 'Logan coding class questions',
    intro: 'What Logan families and adult learners want to know first.',
    items: [
      { q: 'How many people live in Logan?', a: 'The 2021 Census counted 345,098 people in the City of Logan council area. The ABS estimate at 30 June 2025 is 403,515.' },
      { q: 'What is the terrain ruggedness index?', a: 'The terrain ruggedness index is a measure introduced in 1999 that compares each cell of an elevation grid with its eight neighbours: the height differences are squared, summed and square-rooted. Larger values mean more uneven ground, but the values depend on the grid cell size.' },
      { q: 'What is the Logan ruggedness project?', a: 'Learners download public SRTM elevation data for a block of Logan around Slacks Creek and Daisy Hill, compute the ruggedness index in Python, repeat it at four grid sizes, and see how both the scores and the published labels change.' },
      { q: 'Why does every cell come out as level?', a: 'The published labels were designed for one square kilometre grid cells. With 30 metre cells, neighbours are much closer, height differences are smaller and every Logan score falls in the lowest class.' },
      { q: 'Can senior students join?', a: 'Yes. Seniors slot the weekly sessions in beside QCE study, and anything assessed at school is done by the student alone.' },
      { q: 'What times work in Logan?', a: 'Weekday afternoons, evenings or weekends, chosen together during the trial and always stated in Logan time, which is four and a half hours ahead of India time.' },
      { q: 'Do you have classes for younger kids?', a: 'Yes, from age 6 with Scratch and other visual tools. The ruggedness project suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Logan?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do Logan coding classes cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in Queensland',
    h2: 'Pages for Logan\'s neighbours',
    html: 'To the north is <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane coding page</a>, and to the south <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">coding classes on the Gold Coast</a>. For primary-aged children see <a class="cg-inline-link" href="/coding-classes-for-kids-gold-coast">coding classes for kids on the Gold Coast</a>, and for the whole state read <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Logan and Queensland',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-lgan .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 3.3vw, 2.7rem); }
.cg-root.cg-lgan .cg-hero h1 { font-weight: 730; letter-spacing: -0.023em; line-height: 1.04; }
.cg-root.cg-lgan .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-lgan .cg-eyebrow { letter-spacing: 0.15em; font-weight: 650; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-lgan .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.015em; }
.cg-root.cg-lgan .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.95rem); }
.cg-root.cg-lgan .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-lgan .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lgan .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-lgan .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Logan LGA, ABS Census 2021 QuickStats, area code LGA34590, with Queensland and Australia (read 10 October 2026): 345,098 people; median age 34; 90,481 families; 125,926 private dwellings; 2.9 people per household; separate house 95,721 (85.0 percent; Qld 74.8; Australia 72.3); flat or apartment 3,075 (2.7 percent; Qld 12.5; Australia 14.2); Professionals 21,402 (14.1 percent; Qld 21.4; Australia 24.0); Technicians and Trades Workers 23,874 (15.7 percent; Qld 13.7; Australia 12.9); Bachelor Degree level and above 36,742 (13.7 percent; Qld 21.9; Australia 26.3); aged 15 to 19: 23,169 (6.7 percent; Qld 6.1); aged 20 to 24: 22,856 (6.6 percent; Qld 6.3). ABS ERP Logan LGA (34590) 30 June 2025: 403,515. Queensland Department of Education future dates: 2027 Term 1 Wednesday 27 January to Thursday 25 March (9 weeks); Term 2 Monday 12 April to Friday 25 June (11 weeks). ABS ASGS 2021 SAL: Slacks Creek at -27.642, 153.13; Daisy Hill (Qld) at -27.6236, 153.1582 and -27.6293, 153.1495. IANA tz Australia/Brisbane UTC+10, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Terrain ruggedness index (Riley, DeGloria and Elliot 1999, Intermountain Journal of Sciences 5: TRI = square root of the sum of squared elevation differences to the 8 neighbours; classes level 0 to 80 m, nearly level 81 to 116, slightly rugged 117 to 161, intermediately rugged 162 to 239, moderately rugged 240 to 497, highly rugged 498 to 958, extremely rugged 959 to 4,367, from 1 km2 cells). SRTM 1 arc-second via OpenTopoData srtm30m, fetched 10 October 2026: 151 x 201, step 0.0003 degrees, 30,351 points, elevation -1 to 127 m, mean 30.4, 8 cells at or below 0. TRI: full grid 29,651 cells mean 4.99 m, median 4.36, p95 10.25, max 29.73 (at -27.6293, 153.1495); stride 3 (about 90 m) 3,185 cells mean 12.37; stride 9 (about 270 m) 315 cells mean 25.29, 313 level and 2 nearly level; stride 27 (about 800 m) 24 cells mean 38.56, max 115.12, 22 level and 2 nearly level. Mean absolute difference variant: correlation 0.992, mean ratio 3.419. Corners and edge midpoints in Logan LGA (ASGS 2021).',
    requiredMentions: [
      '345,098',
      '90,481',
      '125,926',
      '403,515',
      '29,651',
      '38.56 m',
      '29.73 m',
      'correlation 0.992',
      'Logan homes, live online lessons'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Logan LGA (LGA34590): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA34590' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Logan LGA 34590, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.34590.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'OpenTopoData, SRTM 30 m dataset documentation (NASA Shuttle Radar Topography Mission, public domain).', url: 'https://www.opentopodata.org/datasets/srtm/' },
      { claim: 'Riley, DeGloria and Elliot (1999), A terrain ruggedness index that quantifies topographic heterogeneity, Intermountain Journal of Sciences 5: formula, 1 km2 cells and class breaks (scan hosted by the QGIS project).', url: 'https://download.osgeo.org/qgis/doc/reference-docs/Terrain_Ruggedness_Index.pdf' },
      { claim: 'ABS ASGS 2021 boundaries (LGA and Suburbs and Localities layers) used for point checks.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer' },
      { claim: 'Queensland Department of Education, future term dates (2027).', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' }
    ],
    rejectedClaims: [
      'Where the cells at or below zero metres lie: not checked against any land use source, so not described.',
      'Flood, landslip or drainage risk for any Logan suburb: not part of the data and excluded as disaster content.',
      'Any suburb name other than Slacks Creek and Daisy Hill: only those two were verified by point query against the ABS boundary layer.',
      'Crime, health or socio-economic indicators for Logan: excluded by the cluster rules.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with NASA, OpenTopoData, the ABS or Logan City Council.'
    ]
  }
};
