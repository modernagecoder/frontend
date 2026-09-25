'use strict';
// Camden (cg- London borough page, UK cluster Phase 5, row 174). Named sources only.
// Spine: did the worst hours improve as much as the typical ones? DEFRA UK-AIR site London Bloomsbury (CLL2), urban
// background, 530119E 182039N, inside the ONS December 2024 BFC boundary of Camden (E09000007) by ray casting. Hourly
// nitrogen dioxide from the UK-AIR flat files (GMT, hour ending), 2010-2025, 134,366 hours. Observed annual percentiles
// 2010 -> 2025 (ug/m3): 10th 29.0 -> 9.1 (-69%), median 57.0 -> 19.6 (-66%), 90th 88.0 -> 43.7 (-50%), 99th 118.0 ->
// 67.8 (-43%). Linear quantile regression (check-loss minimised with Nelder-Mead; statsmodels unavailable) on time in
// years: slopes 10th -1.38, median -2.70, 90th -3.36, 99th -3.68 ug/m3 per year. Straight lines fitted to 2010-2025
// undershoot 2025 (median line 14.3 vs 19.6 observed) because the fall levelled off from 2021 (medians 22.7, 21.6,
// 20.5, 19.9, 19.6). Hours per year about 8,500 (2020 6,832; 2022 7,609). No cause is claimed.
// Lesson family: absolute vs relative change across a distribution, and residual checks that show a straight trend
// has stopped fitting. Percentile lines are the tool; Ripon (River Ure) already used quantile regression to ask whether
// big flows rise while ordinary ones stay put, so this page's teaching point is the framing and the residuals.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'CAMDEN', blurb: 'The British Museum, King\'s Cross and a project on whether the dirtiest hours of air got better as fast as the typical ones.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-camden-london',
  code: 'cmd',
  accent: '#49642B',
  accentRationale: 'Camden: a Heath moss green from the solver (5.43:1 on every paper tint), yellower than the Bromley green and unlike any other London page',
  pageType: 'governorate',
  place: {
    name: 'Camden',
    eyebrow: 'London Borough of Camden',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Camden, London',
  title: 'Coding Classes in Camden and Hampstead | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Camden: Hampstead, Kentish Town, King\'s Cross, Bloomsbury, Holborn and Swiss Cottage. Ages 6 to 67.',
  ogDescription: 'Camden coding and Python classes, with a project on sixteen years of hourly air readings from Bloomsbury where learners compare how the typical and the worst hours changed.',
  twitterDescription: 'Camden coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Camden Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Camden, taught live in English.'
  },

  h1: 'Coding classes in Camden',
  capsuleQ: 'What are the best coding classes in Camden?',
  capsule: 'Camden is the north London borough of Camden Town, Hampstead, Kentish Town, King\'s Cross, Bloomsbury, Holborn, Swiss Cottage and West Hampstead, with 210,136 residents at the 2021 Census and 57 Grade I listed entries, the British Museum and King\'s Cross station among them. A coding class that earns its place teaches a learner to look past the average to the whole spread of the data, and this page does that with air quality: sixteen years of hourly nitrogen dioxide readings from Bloomsbury, and a method that tracks the cleanest, typical and worst hours separately. Lessons run live on video with teachers in India, for ages 6 to 67, one to one or in groups of five to ten at the same stage. We charge nothing for the first lesson; after it, groups cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'Since 1992 a government air monitoring station in Bloomsbury, called London Bloomsbury, has measured the air every hour, and DEFRA publishes each reading. Our learners take the nitrogen dioxide readings for 2010 to 2025, more than 134,000 hours of them. The average fell a great deal: the middle hour of 2025 was about two thirds cleaner than the middle hour of 2010. But an average is only one line through a cloud of points. What about the worst hours, the ones on still winter evenings? Learners use quantile regression, which fits a separate trend to the cleanest tenth, the middle, and the dirtiest hundredth of hours. The dirtiest hours fell by the most micrograms per year, and yet by the smallest percentage.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Camden.',

  picks: {
    eyebrow: 'Course picks for Camden',
    h2: 'Where Camden learners begin',
    intro: 'Imagine a Year 3 child in Kentish Town who counts buses from the window, a Year 10 pupil in Hampstead who cycles to school and wonders about the air, a Year 13 student in Bloomsbury bound for environmental science or statistics, and a researcher in King\'s Cross who wants to code their own analysis. A free lesson opens the door for each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch street where traffic makes a cloud grow and wind clears it, and a meter that shows the change.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real air readings: the cleanest hour, the dirtiest hour and the middle one.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including percentiles and quantile regression on this page\'s data.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who report on trends and want to describe the extremes as well as the average.' }
    ]
  },

  sections: [
    {
      id: 'camden', tint: '', eyebrow: 'Camden by the numbers',
      h2: '210,136 residents and 1,964 listed buildings',
      intro: 'All figures are published by the body named, unless we say we counted them from its data.',
      body: [
        { kind: 'table', caption: 'Camden: headline figures', head: ['Topic', 'Figure', 'Who publishes it'], rows: [
          ['Residents counted in 2021', '210,136', 'Office for National Statistics, Census TS001'],
          ['Listed entries we counted inside the borough', '1,964: 57 Grade I, 153 Grade II*, 1,754 Grade II', 'Historic England list data, 25 September 2026'],
          ['Hours of nitrogen dioxide data used', '134,366, from 2010 to 2025', 'DEFRA UK-AIR, site London Bloomsbury'],
          ['Council libraries named on its website', '9', 'Camden Council, read 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Museums and stations', p: 'The British Museum, King\'s Cross Station, and St Pancras Station with the former Midland Grand Hotel are all listed at Grade I.' },
          { h3: 'Houses', p: 'Burgh House and Fenton House in Hampstead, and Charles Dickens House, are Grade I, as is the Royal College of Physicians.' },
          { h3: 'Churches and a cemetery', p: 'St Giles in the Fields is Grade I, and so are the Egyptian Avenue and Lebanon Circle, and the tomb of Sir John Soane in St Pancras.' }
        ] },
        { kind: 'p', text: 'Camden Council names libraries at Camden Town, Highgate, Holborn, Kentish Town, Kilburn, Pancras Square, Queens Crescent, Swiss Cottage and West Hampstead.' }
      ]
    },
    {
      id: 'air', tint: 'tint', eyebrow: 'The data',
      h2: 'One monitor, sixteen years, an hour at a time',
      intro: 'London Bloomsbury is an urban background site: it measures the general air of the area rather than a single busy kerb. Its grid reference lies inside Camden. UK-AIR stamps each reading with the end of its hour in Greenwich Mean Time.',
      body: [
        { kind: 'table', caption: 'Nitrogen dioxide at London Bloomsbury, micrograms per cubic metre', head: ['Year', 'Cleanest tenth of hours, up to', 'Middle hour', 'Dirtiest tenth, from', 'Dirtiest hundredth, from'], rows: [
          ['2010', '29.0', '57.0', '88.0', '118.0'],
          ['2015', '23.6', '46.9', '75.0', '100.4'],
          ['2020', '9.2', '23.2', '55.8', '85.1'],
          ['2025', '9.1', '19.6', '43.7', '67.8']
        ] },
        { kind: 'p', text: 'Every column fell, but not equally. From 2010 to 2025 the middle hour dropped by about 66% and the cleanest tenth by 69%; the dirtiest tenth dropped by 50% and the dirtiest hundredth by 43%. Most years have about 8,500 hours of readings; 2020 has 6,832 and 2022 has 7,609, and learners note those gaps before drawing any conclusion.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Fell most, or fell least? It depends how you measure',
      intro: 'Ordinary regression fits one line through the average. Quantile regression fits a line through any chosen percentile, so learners can see whether the extremes moved with the middle.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Lopsided penalties', p: 'To fit the 90th percentile, points above the line cost nine times as much as points below it. Minimising that cost puts the line where 90% of hours fall beneath it.' },
          { h3: '2. Four lines', p: 'Fit the 10th, 50th, 90th and 99th percentiles against time, using all 134,366 hours. Each gives its own slope in micrograms per year.' },
          { h3: '3. Absolute and relative', p: 'Compare slopes in micrograms, then compare each as a share of where it started. The two comparisons tell different stories.' }
        ] },
        { kind: 'table', caption: 'Straight-line trends by percentile, 2010 to 2025, run 25 September 2026', head: ['Percentile', 'Level at the start of 2010', 'Change per year', 'Fitted change over 16 years'], rows: [
          ['10th, clean hours', '27.0', '-1.38', '-82%'],
          ['50th, middle hour', '57.5', '-2.70', '-75%'],
          ['90th, dirty hours', '90.9', '-3.36', '-59%'],
          ['99th, dirtiest hours', '120.8', '-3.68', '-49%']
        ] },
        { kind: 'p', text: 'In micrograms, the dirtiest hours fell fastest, by about 3.7 a year against 2.7 for the middle hour. In percentages, they fell slowest. Both statements are true, and which one a report leads with changes what a reader takes away. There is a second lesson: the straight lines predict a middle hour of about 14 for the end of 2025, but the real figure was 19.6. The fall levelled off after 2021, and a straight line cannot bend. Learners plot the leftover errors year by year and see the curve for themselves.' },
        { kind: 'callout', h3: 'Why this is more than an AI can summarise', p: 'Ask an AI whether Camden\'s air has improved and you will get a sentence about averages, perhaps with a percentage. It is unlikely to separate the typical hour from the worst hours, or to point out that a straight-line trend has stopped fitting. Learners who have fitted the four lines themselves know that "how much did it improve?" needs the follow-up "for which hours, and measured how?", a question that matters for health, traffic and policy alike.' }
      ]
    },
    {
      id: 'careful', tint: 'tint', eyebrow: 'Reading it carefully',
      h2: 'What this data does and does not say',
      intro: 'A careful analyst states the limits alongside the findings.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One site', p: 'London Bloomsbury measures background air at one spot. Busy roads elsewhere in Camden will read differently.' },
          { h3: 'No causes', p: 'Fewer or cleaner vehicles, weather and the pandemic years may all play a part. This data cannot separate them, and the page does not try.' },
          { h3: 'Missing hours', p: 'Gaps, especially in 2020 and 2022, mean some years are measured from fewer hours. Learners count them rather than ignore them.' }
        ] },
        { kind: 'p', text: 'GCSE students can work with the percentiles and the table; A-level students can write the check-loss function and fit the quantile lines themselves. The hourly readings are DEFRA\'s, from UK-AIR; the percentiles, fitted lines and percentages are our own calculations dated 25 September 2026. DEFRA, Camden Council, Historic England, TfL and the ONS are unconnected with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'King\'s Cross St Pancras, and your own desk',
      intro: 'Camden holds one of the country\'s great rail hubs. Our lessons need none of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'King\'s Cross St Pancras', p: 'TfL\'s record for the hub lists the Circle, Hammersmith & City, Metropolitan, Piccadilly and Victoria lines, alongside main-line operators such as Thameslink.' },
          { h3: 'Highgate to Holborn', p: 'A learner at the northern edge of the borough and another near Holborn can share one lesson from home.' },
          { h3: 'Every learner counts', p: 'Classes stay small, five to ten at one stage, so the quieter learners are seen as well as the confident ones.' }
        ] },
        { kind: 'spec', title: 'Camden in London', p: 'Camden is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers all of them and the City, linking each page as it appears, including <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a> and <a class="cg-inline-link" href="/coding-classes-in-brent-london">Brent</a> to the north west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting buses to fitting quantile lines',
    intro: 'We find the right starting rung in the free lesson, by watching what the learner can already do.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'More and less', p: 'Children build Scratch scenes where numbers go up and down and learn to say which is biggest and smallest.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Middles and extremes', p: 'Python that sorts a year of readings and finds the median, the top tenth and the bottom tenth.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Trends by percentile', p: 'Quantile regression, residual plots and honest limits on real government data, a strong base for a statistics or environmental project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Beyond the average', p: 'Adults learn to report the spread and the extremes, not just the mean, and to spot when a trend line has stopped fitting.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can describe a trend instantly. Why should a Camden teenager learn to fit one?',
    intro: 'Because the average is rarely the whole story, and the rest of the story is where decisions are made.',
    p1: 'AI summaries lean on averages because averages are easy to state. The Bloomsbury readings show why that is not enough: the typical hour improved by about two thirds, the worst hours by well under half, and a straight line fitted to the whole period has already stopped matching recent years. Someone who has fitted quantile lines and plotted the leftovers can see all three at once, and can tell when an automated summary has left something out.',
    p2: 'That skill carries into medicine, finance and engineering, where the tails of a distribution often matter more than its centre. Tools will keep producing tidy summaries. People who know what those summaries hide will keep being needed.',
    closer: 'Camden has measured its air every hour for over thirty years. A Camden learner who can read that record in full, extremes included, is ready for serious data work anywhere.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hampstead to Holborn, taught live online',
    intro: 'Across Camden, a learner joins class simply by opening the video link.',
    cells: [
      { h3: 'Any room will do', p: 'A laptop or desktop, headphones, and broadband steady enough for video are the full list of equipment.' },
      { h3: 'Key Stages, plainly', p: 'We report progress in the Key Stages English schools use, from Key Stage 1 to sixth form, and mention GCSE and A level only where they apply. We teach in English.' },
      { h3: 'Try it free', p: 'The first lesson is real teaching, and at its end the teacher recommends a level and course. No bank card is needed for it.' },
      { h3: 'Matched by stage', p: 'We gather five to ten learners at one stage into each class from all over the UK and beyond, so there is usually a time that suits.' },
      { h3: 'A twice-weekly rhythm', p: 'Classes usually meet on two evenings a week and pause for school holidays and exam periods by agreement.' },
      { h3: 'On London time', p: 'Our teachers are in India; all times we send are already in UK time.' }
    ],
    spec: { title: 'A central borough, a wide class', p: 'Camden has about 210,000 residents, and a good class still needs five learners at the same stage free together, so ours draw from far beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Camden families',
    intro: 'The first lesson is free; then one monthly fee, the same in Kilburn as in King\'s Cross.',
    first: 'A complete first lesson with a teacher, free, closing with a recommended level, course and time.',
    group: 'Near enough eight live lessons a month, in a class of five to ten at the same stage.',
    private: 'Near enough eight live lessons a month, one to one.',
    closer: 'Camden families pay in US dollars, as do all families outside India, and no sterling prices appear on the site. Nothing is charged before the free lesson or before you pick a course and weekly time. The pricing page explains pausing, missed lessons and switching between class and private teaching.'
  },

  reviewsH2: 'What families wrote about us on Google',

  book: {
    h2: 'Book a free lesson',
    intro: 'Tell us an age or school year and a favourite subject or hobby. The first lesson could be a Scratch traffic scene, a Python look at a year of air readings, or the quantile project on this page.',
    success: 'Thank you. Your Camden lesson request is with our team.'
  },

  faq: {
    h2: 'Camden families\' questions',
    intro: 'About the borough, the air project and our lessons.',
    items: [
      { q: 'What was Camden\'s population in 2021?', a: 'Census 2021 counted 210,136 usual residents in the London Borough of Camden, published in ONS table TS001.' },
      { q: 'Where is the London Bloomsbury air monitor?', a: 'UK-AIR gives its grid reference as 530119 east, 182039 north, which lies inside Camden. It is an urban background site, measuring the general air of the area rather than a roadside.' },
      { q: 'Has Camden\'s air improved?', a: 'At London Bloomsbury, yes. The middle hour for nitrogen dioxide fell from 57.0 micrograms per cubic metre in 2010 to 19.6 in 2025. The dirtiest hundredth of hours fell less in percentage terms, from 118.0 to 67.8.' },
      { q: 'What is quantile regression?', a: 'A way of fitting a trend line through a chosen percentile of the data, such as the median or the 90th percentile, rather than through the average. It shows whether the extremes change in the same way as the middle.' },
      { q: 'Does the page say why the air changed?', a: 'No. Vehicles, weather and the pandemic years may all play a part, and one monitor\'s readings cannot separate them. The project is about measuring the change carefully, not assigning causes.' },
      { q: 'When would a Camden learner have lessons?', a: 'Once the free lesson has shown the right level, we offer a weekly slot in a class with space. The teacher is in India; the slot is given in UK time.' },
      { q: 'What does a learner need?', a: 'A computer with sound and a reliable connection. The air project needs Python and the free yearly files from UK-AIR.' },
      { q: 'Is there a Modern Age Coders centre in Camden?', a: 'No. There is no Camden centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Camden cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Beyond Camden',
    html: 'Our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists each borough and the City and adds a link as each page is published, including <a class="cg-inline-link" href="/coding-classes-in-enfield-london">Enfield</a> further north and <a class="cg-inline-link" href="/coding-classes-in-wandsworth-london">Wandsworth</a> across the river. Once percentiles and trend lines feel natural, our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a> are the obvious next step, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> sets out school years across the four nations for families moving within the UK.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Camden and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-barnet-london', label: 'Barnet' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-cmd .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.4vw, 2.8rem); }
.cg-root.cg-cmd .cg-hero h1 { font-weight: 750; letter-spacing: -0.02em; line-height: 1.03; }
.cg-root.cg-cmd .cg-capsule { border-left: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0 0 0.9rem 0.9rem; }
.cg-root.cg-cmd .cg-eyebrow { letter-spacing: 0.14em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-cmd .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-cmd .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.8rem); }
.cg-root.cg-cmd .cg-table caption { font-weight: 700; letter-spacing: 0.017em; }
.cg-root.cg-cmd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cmd .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-cmd .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 0.65rem; }
.cg-root.cg-cmd .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Camden. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000007): 210,136 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 1,964 (I 57, II* 153, II 1,754); Grade I include THE BRITISH MUSEUM, KINGS CROSS STATION, ST PANCRAS STATION AND FORMER MIDLAND GRAND HOTEL, BURGH HOUSE, FENTON HOUSE, CHARLES DICKENS HOUSE AND ATTACHED RAILINGS, ROYAL COLLEGE OF PHYSICIANS, CHURCH OF ST GILES IN THE FIELDS, THE EGYPTIAN AVENUE AND LEBANON CIRCLE, TOMB OF SIR JOHN SOANE, HIS WIFE AND SON IN ST PANCRAS. Camden Council /libraries, 25 September 2026: Camden Town, Highgate, Holborn, Kentish Town, Kilburn, Pancras Square, Queens Crescent, Swiss Cottage, West Hampstead libraries. TfL Unified API HUBKGX (King\'s Cross & St Pancras International), 25 September 2026: Circle, Hammersmith & City, Metropolitan, Piccadilly, Victoria, plus East Midlands Railway, Grand Central, Great Northern, Hull Trains, LNER, Lumo, Southeastern, Thameslink.',
    localProject: 'UK-AIR site info CLL2 London Bloomsbury: Urban Background, Easting/Northing 530119, 182039 (51.522290, -0.125889); point inside the Camden BFC polygon. Flat files datastore/data_files/site_data/CLL2_YYYY.csv, 2010-2025, "All Data GMT hour ending"; column Nitrogen dioxide. 134,366 hourly values (2010-01-01 01:00 to 2025-12-31 23:00; the 24:00 row of 31 Dec 2025 dropped). Annual hours: about 8,500 (2020 6,832; 2022 7,609). Percentiles 2010 p10 29.0, p50 57.0, p90 88.0, p99 118.0; 2015 23.6, 46.9, 75.0, 100.4; 2020 9.2, 23.2, 55.8, 85.1; 2025 9.1, 19.6, 43.7, 67.8. Medians 2021-2025 22.7, 21.6, 20.5, 19.9, 19.6. Quantile regression (check loss, Nelder-Mead, t in years from 2010-01-01): q0.1 27.0 - 1.381 t; q0.5 57.5 - 2.702 t; q0.9 90.9 - 3.357 t; q0.99 120.8 - 3.676 t; fitted t = 16: 4.9, 14.3, 37.2, 62.0. OLS 59.07 - 2.594 t. Lesson family: absolute vs relative change by percentile and residual curvature (percentile trend lines as the tool; Ripon used quantile regression on river flow for a different question).',
    requiredMentions: [
      '210,136',
      'London Bloomsbury',
      'Kentish Town',
      'Burgh House',
      'Fenton House',
      'Charles Dickens House',
      'Egyptian Avenue',
      'Pancras Square',
      'Queens Crescent'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Camden E09000007: 210,136 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000007&measures=20100' },
      { claim: 'DEFRA UK-AIR, London Bloomsbury (CLL2): site information and hourly data files.', url: 'https://uk-air.defra.gov.uk/networks/site-info?site_id=CLL2' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Camden on 25 September 2026: 1,964 (57 I, 153 II*, 1,754 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Camden Council libraries list.', url: 'https://www.camden.gov.uk/libraries' },
      { claim: 'TfL Unified API, StopPoint HUBKGX (King\'s Cross & St Pancras International).', url: 'https://api.tfl.gov.uk/StopPoint/HUBKGX' }
    ],
    rejectedClaims: [
      'Causes of the fall (ULEZ, vehicle standards, pandemic): not separable in one site\'s data; not claimed.',
      'Legal limits and objectives for nitrogen dioxide: not read at a primary source for this build, so no limit is quoted.',
      'The monitor\'s street address: UK-AIR gives only "London"; the page gives the grid reference instead.',
      'The Northern line at King\'s Cross St Pancras: not in the TfL hub record we read, so only the lines listed there are named.',
      'Camden schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Camden: never a standout; used only to order the build.'
    ]
  }
};
