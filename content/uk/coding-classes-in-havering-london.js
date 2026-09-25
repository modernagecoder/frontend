'use strict';
// Havering (cg- London borough page, UK cluster Phase 5, row 172). Named sources only.
// Spine: why the average wind lies. Historic England list entry 1079878, Upminster Windmill, Grade II*: "Tall
// octagonal smock mill, timber-framed on a brick base" (555734E 186725N, 51.557N 0.247E). Data: ERA5 reanalysis hourly
// wind speed at 10 m and 100 m, grid cell 51.5N 0.25E, 2016-01-01 to 2025-12-31 (87,672 hours, GMT), fetched through the
// Open-Meteo archive API (Copernicus Climate Change Service data, CC BY 4.0). 100 m: mean 6.78 m/s, median 6.50,
// Weibull (MLE, location 0) k 2.318, c 7.648; Rayleigh fits worse (KS 0.073 vs 0.021); mean cube 523 vs cube of mean
// 312 (energy pattern factor 1.68); power density with air density 1.225 kg/m3: 321 W/m2 vs 191 from the mean speed;
// windiest 10% of hours carry 43.7% of the energy, windiest 1% 9.6%; 99th percentile 15.31 vs Weibull 14.78. 10 m: mean
// 4.13, k 2.151, c 4.674, EPF 1.82, top 10% of hours 47.0% of energy. Monthly 100 m mean: February 8.26, July 5.69.
// Lesson family: Weibull fitting and the cube law (energy pattern factor); screened 25 September 2026 (Weibull 0).
// Havering Council's libraries page returned HTTP 403 on 25 September 2026: not circumvented, no list.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'HAVERING', blurb: 'Upminster Windmill, Rainham Hall and a project on why the average wind speed hides most of the wind\'s energy.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-havering-london',
  code: 'hav',
  accent: '#7E6225',
  accentRationale: 'Havering: a weathered sailcloth ochre from the solver (4.66:1 on every paper tint), for a windmill page, unlike any London sibling so far',
  pageType: 'governorate',
  place: {
    name: 'Havering',
    eyebrow: 'London Borough of Havering',
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
  routeLabel: 'Havering, London',
  title: 'Coding Classes in Havering and Romford | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Havering: Romford, Hornchurch, Upminster, Rainham, Harold Wood and Gidea Park. Ages 6 to 67.',
  ogDescription: 'Havering coding and Python classes, with a project from Upminster Windmill where learners fit a Weibull curve to ten years of wind and find where the energy really is.',
  twitterDescription: 'Havering coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Havering Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Havering, taught live in English.'
  },

  h1: 'Coding classes in Havering',
  capsuleQ: 'What are the best coding classes in Havering?',
  capsule: 'Havering is the east London borough of Romford, Hornchurch, Upminster, Rainham, Harold Wood, Elm Park and Gidea Park, with 262,052 residents at the 2021 Census and a timber smock mill still standing at Upminster. Good coding classes show a learner that an average can hide what matters most, and this page does exactly that with the wind: ten years of hourly wind speeds near the windmill, a Weibull curve fitted to them, and the discovery that the windiest tenth of hours carries over forty per cent of the energy. We teach over live video, with teachers based in India, for people aged 6 to 67, privately or in a class of five to ten who share a level. The first lesson is free; after it, class places are USD 100 a month and private lessons USD 150 a month.',
  lead: 'Upminster Windmill, listed at Grade II*, is described by Historic England as a tall octagonal smock mill, timber-framed on a brick base. A mill like that depends entirely on the wind, and the wind is far more uneven than it feels. Our learners take ten years of hourly wind speeds, 87,672 of them, from the ERA5 reanalysis for the grid square around Upminster. The average at 100 metres is 6.8 metres per second. Work out the power from that average and you get about 190 watts for every square metre facing the wind. Work it out hour by hour and average the power instead, and you get about 320. The difference comes from one fact of physics, that wind power grows with the cube of speed, and a skewed curve named after Waloddi Weibull describes it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Havering.',

  picks: {
    eyebrow: 'Course picks for Havering',
    h2: 'Four first steps from Havering',
    intro: 'Picture a Year 1 child in Hornchurch who races paper windmills in the garden, a Year 8 pupil in Romford curious about wind turbines, a Year 13 student in Upminster heading for engineering, and a self-employed electrician in Harold Wood thinking about renewables. A free first lesson is open to each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch windmill whose sails turn faster in stronger gusts, with a counter for how much flour it grinds.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real wind data: calm hours, windy hours and the windiest day of a year.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the Weibull fit and the cube-law calculation on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who work with energy or averages and want to see how a skewed distribution changes the answer.' }
    ]
  },

  sections: [
    {
      id: 'havering', tint: '', eyebrow: 'Havering, counted',
      h2: '262,052 residents and 145 listed buildings',
      intro: 'Numbers here come straight from the body named, or from our own count of what that body publishes.',
      body: [
        { kind: 'table', caption: 'Havering facts with their sources', head: ['About Havering', 'The number', 'Who says so'], rows: [
          ['People resident at the 2021 Census', '262,052', 'Census table TS001, Office for National Statistics'],
          ['Heritage List entries we found inside the borough', '145, with 6 at Grade I and 15 at Grade II*', 'Historic England list data, counted 25 September 2026'],
          ['Hours of wind data used in the project', '87,672, from 2016 to 2025', 'ERA5 reanalysis, Copernicus Climate Change Service'],
          ['Lines at Upminster station', 'District, c2c and Liberty', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Churches at Grade I', p: 'Four of Havering\'s six Grade I entries are churches: St Laurence at Upminster, St Andrew at Hornchurch, St Helen and St Giles at Rainham and St Mary Magdalene at North Ockendon.' },
          { h3: 'The Bower House', p: 'The Bower House and its stable block make up the other two Grade I entries.' },
          { h3: 'Halls and a mill', p: 'Rainham Hall, Upminster Hall, Bretons, Great Tomkyns and Upminster Windmill are among the Grade II* entries.' }
        ] }
      ]
    },
    {
      id: 'wind', tint: 'tint', eyebrow: 'The data',
      h2: 'Ten years of wind, one number an hour',
      intro: 'ERA5 is a reanalysis: a weather model run over the past and corrected with real observations, giving a complete hourly record for every square of a global grid. It is a model estimate for a square about 30 kilometres across, not a reading taken at the windmill.',
      body: [
        { kind: 'table', caption: 'Wind speed at the Upminster grid square, 2016 to 2025, metres per second', head: ['Height above ground', 'Average', 'Middle value', 'Calm hours, under 3', 'Strongest hour'], rows: [
          ['10 metres', '4.13', '3.83', '32.7%', '16.9'],
          ['100 metres', '6.78', '6.50', '9.8%', '25.4']
        ] },
        { kind: 'p', text: 'Wind is stronger higher up, which is why modern turbines are tall and why a mill\'s sails were built to catch as much height as possible. It is also seasonal: at 100 metres February averages 8.3 metres per second and July 5.7. Every figure here is from hours logged in Greenwich Mean Time, and all of them describe a model grid square, a caution learners write at the top of their notebook.' },
        { kind: 'p', text: 'We tried to list Havering\'s libraries on this page. The council\'s libraries page turned our automated reader away with an access error, and we never try to get past a block like that, so none are named here; Havering Council\'s website has the list.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The cube law and the Weibull curve',
      intro: 'Learners fit a curve to 87,672 wind speeds, then show why the average speed badly understates the energy.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Shape of the wind', p: 'A histogram of hourly speeds is lopsided: many gentle hours, a long tail of strong ones. The Weibull distribution has two numbers, a shape k and a scale c, that capture that lopsidedness.' },
          { h3: '2. Fit and check', p: 'Fitting by maximum likelihood gives k of about 2.3 and c of about 7.6 at 100 metres. A simpler one-number curve, the Rayleigh, fits noticeably worse on the same data.' },
          { h3: '3. Cube it', p: 'Power in the wind grows with the cube of speed: double the speed, eight times the power. So the average of the cubes is far bigger than the cube of the average.' }
        ] },
        { kind: 'table', caption: 'What the averages hide, at 100 metres, run 25 September 2026', head: ['Measure', 'Value'], rows: [
          ['Power per square metre, from the average speed', 'about 191 watts'],
          ['Power per square metre, averaging hour by hour', 'about 321 watts'],
          ['Ratio, called the energy pattern factor', '1.68'],
          ['Share of the energy in the windiest 10% of hours', '43.7%'],
          ['Share of the energy in the windiest 1% of hours', '9.6%']
        ] },
        { kind: 'p', text: 'Using the average speed alone would underestimate the energy by about forty per cent. Almost half of the wind\'s energy arrives in one hour in ten, and nearly a tenth in one hour in a hundred. At 10 metres the effect is even stronger: the energy pattern factor is 1.82 and the windiest tenth of hours carries 47% of the energy. The Weibull curve reproduces the middle of the data very closely, but it slightly underestimates the extreme tail, 14.8 metres per second at the 99th percentile against 15.3 in the data, so learners check the tail separately rather than trusting the fit everywhere. Power figures assume a standard air density of 1.225 kilograms per cubic metre.' },
        { kind: 'callout', h3: 'Why this is not a job to hand to AI', p: 'An AI assistant asked for the wind power at Upminster may well take an average speed and cube it, a very natural shortcut that is wrong by about forty per cent here. Learners who have computed the energy hour by hour know to distrust any calculation that averages first and applies a curved rule afterwards. The same trap appears in finance, medicine and engineering whenever a quantity does not grow in a straight line.' }
      ]
    },
    {
      id: 'lessons', tint: 'tint', eyebrow: 'The wider lesson',
      h2: 'Average first, or calculate first?',
      intro: 'The order of operations turns out to matter enormously when a rule curves.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Averages and curves', p: 'For a straight-line rule, averaging first or last gives the same answer. For a curved rule like a cube, it does not, and the gap grows with the spread of the data.' },
          { h3: 'Tails matter', p: 'The rare strong hours dominate the energy, so a model that fits the typical day well but misses the extremes can still mislead.' },
          { h3: 'Say what the data is', p: 'ERA5 is a model of a grid square, not a gauge on the mill. Every conclusion carries that label.' }
        ] },
        { kind: 'p', text: 'GCSE pupils can follow the histogram, the cube and the order-of-operations trap; A-level students can derive the Weibull moments and fit the curve by maximum likelihood themselves. The wind values contain modified Copernicus Climate Change Service information, fetched through the Open-Meteo archive; the fits, energy shares and ratios are our own calculations, dated 25 September 2026. Copernicus, ECMWF, Open-Meteo, Havering Council, Historic England, TfL and the ONS have no relationship with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Upminster, end of the District line, and home',
      intro: 'Havering sits at the eastern edge of London. For our classes, the edge of the map makes no difference.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Upminster', p: 'TfL\'s open data lists the District line, c2c and the Liberty line at Upminster.' },
          { h3: 'Harold Hill to Rainham', p: 'Learners at the northern and southern ends of the borough can be in the same lesson without either leaving home.' },
          { h3: 'Steady, not gusty', p: 'Our timetable, unlike the wind, is regular: two evenings a week, same group of five to ten learners at one stage.' }
        ] },
        { kind: 'spec', title: 'Havering and the London boroughs', p: 'Havering is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> links all of them and the City as their pages are published, including <a class="cg-inline-link" href="/coding-classes-in-redbridge-london">Redbridge</a> to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From paper windmills to fitted distributions',
    intro: 'In the free lesson the teacher sees what the learner can do already; that decides the rung, more than any school year.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Wind and motion', p: 'Children make sails spin in Scratch, faster or slower, and count how many turns each gust gives.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Histograms', p: 'Python that sorts thousands of readings into bins and draws the lopsided shape of real wind.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Fit and test', p: 'Distributions, maximum likelihood and the cube law on real data, strong ground for physics, maths or engineering projects.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Energy sense', p: 'Adults learn how renewable energy estimates are built and where simple averages lead them astray.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can fit a curve in a second. Why should a Havering teenager learn what it means?',
    intro: 'Because knowing which calculation to do, and in what order, is where the real errors hide.',
    p1: 'Curve-fitting is automatic now; any tool, AI or otherwise, will return a Weibull shape and scale. The mistakes happen around the fit: averaging before cubing, trusting a curve in its tail, forgetting that a reanalysis grid square is not a gauge. On Havering\'s wind, the averaging mistake alone costs about forty per cent of the energy. A learner who has seen that happen in their own code will catch it in anyone else\'s.',
    p2: 'That understanding travels: from wind farms to drug doses to investment returns, any curved relationship punishes averaging too early. AI will keep producing numbers. People who know when those numbers were computed in the wrong order will keep being valuable.',
    closer: 'Upminster\'s mill ground grain with the wind for generations. A Havering learner who can measure that wind properly with code is working with the same invisible resource.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Romford to Rainham, taught live',
    intro: 'Across Havering, class is as close as the nearest charged laptop.',
    cells: [
      { h3: 'No journey', p: 'Classes happen at home; a computer, a headset and a broadband line that can carry video are the only requirements.' },
      { h3: 'School stages in England', p: 'We track progress by English Key Stages, 1 through 4 and then sixth form, bringing in GCSE and A level where the learner is heading that way. Everything is taught in English.' },
      { h3: 'Nothing to pay first', p: 'The first lesson is free and genuinely teaches something; at the end the teacher suggests a level and a course. Card details are never requested for it.' },
      { h3: 'Level, not location', p: 'We build each class of five to ten from learners at the same stage anywhere in the UK and beyond, which is what makes a sensible hour possible.' },
      { h3: 'Two evenings a week', p: 'The usual pattern is two lessons a week in the evening, paused for school holidays and exam periods when agreed.' },
      { h3: 'London hours', p: 'Teachers are in India, yet the times on every invitation are the times on a Havering clock.' }
    ],
    spec: { title: 'A big outer borough, one well-matched group', p: 'More than 260,000 people live in Havering, and still a good group needs five learners at the same stage free at the same time, so our classes are drawn much more widely.' }
  },

  fees: {
    h2: 'Fees for Havering families',
    intro: 'One free lesson, then one monthly fee, whether you live in Rainham or Harold Wood.',
    first: 'A full first lesson with a teacher, free, ending in a recommended level, course and weekly time.',
    group: 'Close to eight live lessons each month in a class of five to ten at one stage.',
    private: 'Close to eight live lessons each month, just learner and teacher.',
    closer: 'Havering families are charged in US dollars, like everyone outside India, and the site shows no sterling prices. No payment is taken before the free lesson, or before you settle on a course and a regular time. Pausing, missed lessons and moving between class and one-to-one are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews in families\' own words',

  book: {
    h2: 'Book a free first lesson',
    intro: 'A year group or an age, and something the learner is keen on, lets us plan. Lesson one might be a Scratch windmill, a Python wind histogram, or the Weibull project on this page.',
    success: 'Thank you. Our team has received your Havering lesson request.'
  },

  faq: {
    h2: 'Havering families\' questions',
    intro: 'About the borough, the wind project and our lessons.',
    items: [
      { q: 'What was the population of Havering in 2021?', a: '262,052 usual residents, according to Census table TS001 from the Office for National Statistics.' },
      { q: 'Is Upminster Windmill a listed building?', a: 'Yes, at Grade II*. Historic England describes it as a tall octagonal smock mill, timber-framed on a brick base.' },
      { q: 'Where does the wind data come from?', a: 'From ERA5, a reanalysis produced for the Copernicus Climate Change Service, which we fetched hour by hour for the grid square around Upminster through the Open-Meteo archive. It is a model estimate for the square, not a measurement at the mill.' },
      { q: 'What is a Weibull distribution?', a: 'A curve with two numbers, a shape and a scale, that describes quantities with many small values and a long tail of large ones. It is widely used for wind speeds; at 100 metres over Upminster the fitted shape is about 2.3 and the scale about 7.6 metres per second.' },
      { q: 'Why does the average wind speed understate the energy?', a: 'Because wind power grows with the cube of speed. Averaging the speed first and then cubing gives about 191 watts per square metre at 100 metres; cubing each hour first and then averaging gives about 321.' },
      { q: 'When would Havering lessons happen?', a: 'The free lesson settles the level; then we offer a class at that level with room, at a fixed weekly time. That time is quoted in UK time even though the teacher is in India.' },
      { q: 'What is needed at home?', a: 'A computer with sound and a connection that copes with video calls. The wind project runs in Python on one free download of data.' },
      { q: 'Is there a Modern Age Coders centre in Havering?', a: 'No. There is no Havering centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Havering cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Westward across London, and the UK',
    html: 'Each borough and the City has a place on our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, linked as soon as its page is published, from <a class="cg-inline-link" href="/coding-classes-in-bexley-london">Bexley</a> just across the Thames to <a class="cg-inline-link" href="/coding-classes-in-hillingdon-london">Hillingdon</a> at the far western edge. After this project, energy and prediction lead naturally into our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">London AI and machine learning classes</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lines up school years in England with those in the other three nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Havering and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-redbridge-london', label: 'Redbridge' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-hav .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.75rem); }
.cg-root.cg-hav .cg-hero h1 { font-weight: 760; letter-spacing: -0.018em; line-height: 1.04; }
.cg-root.cg-hav .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hav .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hav .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-hav .cg-grid-3 { gap: clamp(0.9rem, 2.6vw, 1.85rem); }
.cg-root.cg-hav .cg-table caption { font-weight: 700; letter-spacing: 0.013em; }
.cg-root.cg-hav .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hav .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-hav .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hav .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Havering. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000016): 262,052 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 145 (I 6, II* 15, II 124); Grade I 1079873 THE BOWER HOUSE, 1079874 STABLE BLOCK AT THE BOWER HOUSE, 1183610 CHURCH OF ST MARY MAGDALENE (558739 184867, North Ockendon), 1184679 CHURCH OF ST LAURENCE (Upminster), 1358505 CHURCH OF ST HELEN AND ST GILES (Rainham), 1358529 PARISH CHURCH OF ST ANDREW (Hornchurch); II* include 1079878 UPMINSTER WINDMILL, 1358506 RAINHAM HALL, 1079889 UPMINSTER HALL, 1079875 BRETONS, 1184797 GREAT TOMKYNS. List entry 1079878: tall octagonal smock mill, timber-framed on a brick base. TfL Unified API HUBUPM (Upminster), 25 September 2026: District, c2c, Liberty. havering.gov.uk/libraries returned HTTP 403 on 25 September 2026: not circumvented, no library list used.',
    localProject: 'Open-Meteo archive API, models=era5, latitude 51.5578 longitude 0.2402 (returned grid 51.5, 0.25, elevation 13 m), hourly wind_speed_10m and wind_speed_100m in m/s, timezone GMT, 2016-01-01T00:00 to 2025-12-31T23:00: 87,672 hours, no missing. 100 m: mean 6.78, median 6.50, max 25.4, under 3 m/s 9.8%, over 15 m/s 1.22%; scipy weibull_min.fit(floc=0) k 2.318 c 7.648; Rayleigh sigma 5.267; KS Weibull 0.021, Rayleigh 0.073; logL difference 1,511; mean v^3 523 (Weibull 520); EPF 1.68; power density 0.5 x 1.225 x mean v^3 = 321 W/m2 vs 191 from mean speed; windiest 10% of hours 43.7% of energy, 1% 9.6%; quantiles 0.1 3.01 (W 2.90), 0.5 6.50 (6.53), 0.9 10.85 (10.96), 0.99 15.31 (14.78). 10 m: mean 4.13, median 3.83, max 16.9, under 3 m/s 32.7%; k 2.151 c 4.674; EPF 1.82; top 10% 47.0%, top 1% 10.6%. Monthly 100 m means Feb 8.26 (max), Jul 5.69 (min). Lesson family: Weibull fit and cube law, screened 25 September 2026.',
    requiredMentions: [
      '262,052',
      'Upminster Windmill',
      'smock mill',
      'Weibull',
      'energy pattern factor',
      'Bower House',
      'Rainham Hall',
      'Great Tomkyns',
      'Bretons'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Havering E09000016: 262,052 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000016&measures=20100' },
      { claim: 'Historic England list entry 1079878, Upminster Windmill, Grade II*: tall octagonal smock mill on a brick base.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1079878' },
      { claim: 'ERA5 hourly wind at 10 m and 100 m, 2016-2025, via the Open-Meteo historical weather API (Copernicus Climate Change Service data).', url: 'https://archive-api.open-meteo.com/v1/archive?latitude=51.5578&longitude=0.2402&start_date=2016-01-01&end_date=2025-12-31&hourly=wind_speed_10m,wind_speed_100m&wind_speed_unit=ms&timezone=GMT&models=era5' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Havering on 25 September 2026: 145 (6 I, 15 II*, 124 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint HUBUPM (Upminster): District, c2c, Liberty.', url: 'https://api.tfl.gov.uk/StopPoint/HUBUPM' }
    ],
    rejectedClaims: [
      'Measured wind at the windmill itself: no public station record there; the page uses a reanalysis grid square and says so.',
      'Upminster Windmill build date and history: not in the list entry text we read beyond the description; not stated.',
      'Havering library list: council page returned 403; no libraries named.',
      'Havering schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Havering: never a standout; used only to order the build.'
    ]
  }
};
