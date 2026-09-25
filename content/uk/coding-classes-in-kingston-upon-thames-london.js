'use strict';
// Kingston upon Thames (cg- London borough page, UK cluster Phase 5, row 168). Named sources only.
// Spine: the start year decides the story. UKCEH National River Flow Archive station 39001, Thames at Kingston
// (517780E 169850N, inside the ONS December 2024 BFC boundary of Kingston upon Thames, E09000021, by ray casting), daily
// flows 1 January 1883 to 30 September 2025 (52,137 days). NRFA summary: record dating from 1883, recognised by the WMO in
// May 2023 for more than 100 years of observations; early low flows (1930s, 1940s) may be underestimated; gauged flow
// fell to zero in August 1976; 1894 flood peak reassessed in 2002 at 800 m3/s. Water years October-September, 142 complete
// (1884-2025). Mann-Kendall + Sen's slope: annual mean no trend (p 0.83); annual maximum no trend (p 0.19); lowest 7-day
// mean flow falls -0.34 m3/s per decade (p 0.0005). Start-year sweep for the low flow, 112 starts 1884-1995 to 2025:
// 76 give p < 0.05; 1951 start -0.60/decade p 0.0002; 1976 start +0.33 p 0.41; 1990 start +1.20 p 0.040 (a significant
// RISE). Robustness: annual maxima least-squares slope +0.36/decade, +1.62 without water year 1895 (the 800 m3/s day of
// 18 November 1894); Sen's slope 2.89 -> 3.33. Lesson family: start-date sensitivity and robust (Sen) slopes. Mann-Kendall
// itself was used at Chichester (winterbourne flowing days, autocorrelation); this page's point is different.
// Kingston Council's libraries page returned HTTP 403 on 25 September 2026: not circumvented, no list.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'KINGSTON', blurb: 'The Coronation Stone, a river gauge running since 1883 and a project on how the start year changes a trend.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-kingston-upon-thames-london',
  code: 'kgt',
  accent: '#364F59',
  accentRationale: 'Kingston: a Thames slate from the solver (7.04:1 on every paper tint), greyer and darker than the Newham steel blue',
  pageType: 'governorate',
  place: {
    name: 'Kingston upon Thames',
    eyebrow: 'Royal Borough of Kingston upon Thames',
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
  routeLabel: 'Kingston upon Thames, London',
  title: 'Coding Classes in Kingston upon Thames | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Kingston upon Thames: Surbiton, New Malden, Tolworth, Chessington and Norbiton. Ages 6 to 67.',
  ogDescription: 'Kingston coding and Python classes, with a project on 142 years of Thames flows where learners find that the start year can turn a falling trend into a rising one.',
  twitterDescription: 'Kingston upon Thames coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Kingston upon Thames Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the Royal Borough of Kingston upon Thames, taught live in English.'
  },

  h1: 'Coding classes in Kingston upon Thames',
  capsuleQ: 'What are the best coding classes in Kingston upon Thames?',
  capsule: 'Kingston upon Thames is the south west London borough of Kingston, Surbiton, New Malden, Tolworth, Chessington and Norbiton, with 168,063 residents at the 2021 Census and a river gauge that has measured the Thames since 1883. A class that deserves the name teaches a learner to be suspicious of their own results, and this page does that with the river: 142 years of daily flows, and a trend that falls, vanishes or even rises depending on the year you start counting. We teach live over video from India, for anyone between 6 and 67, one to one or in a small group of five to ten matched by level. Your first lesson is free. After it, a group place costs USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'Since 1883 someone has been measuring how much water the Thames carries past Kingston. The UK Centre for Ecology and Hydrology\'s National River Flow Archive publishes the whole record, one number a day, more than 52,000 of them, and says the World Meteorological Organization recognised the station in 2023 for its century of observations. Our learners turn those days into one number per year and ask the obvious question: is the Thames changing? For the average flow, no. For the driest week of each year, yes, falling steadily over 142 years. Then they slide the starting year along, one year at a time, and watch the answer change. Start in 1951 and the fall is strong. Start in 1990 and it becomes a significant rise.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Kingston upon Thames.',

  picks: {
    eyebrow: 'Course picks for Kingston',
    h2: 'Good first courses from Kingston',
    intro: 'Picture a Year 2 child in Surbiton who watches the river from the towpath, a Year 9 pupil in New Malden who likes charts that go up and down, a Year 12 student in Norbiton considering geography or environmental science, and a commuter in Tolworth who reads climate headlines and wants to check them. Every one of them can begin with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch river that rises in winter and shrinks in summer, and a first chart of a year of water.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real river numbers: the wettest year, the driest week and a line graph.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the trend tests and start-year sweep on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who meet trend claims at work or in the news and want to test them before believing them.' }
    ]
  },

  sections: [
    {
      id: 'kingston', tint: '', eyebrow: 'Kingston in numbers',
      h2: '168,063 residents and a river record from 1883',
      intro: 'Nothing here is estimated by us from thin air: the Census, the heritage list, the river archive and TfL are the sources, and where a number is our own count of their data we say so.',
      body: [
        { kind: 'table', caption: 'The borough and its river in four numbers', head: ['Measure', 'Number', 'Where it comes from'], rows: [
          ['People living in the borough on Census day 2021', '168,063', 'Office for National Statistics, TS001'],
          ['Heritage List entries we counted within the boundary', '161, of which 3 are Grade I and 13 Grade II*', 'Historic England open data, 25 September 2026'],
          ['Daily flows at the Thames at Kingston gauge', '52,137, from 1 January 1883 to 30 September 2025', 'National River Flow Archive, station 39001'],
          ['Services at Kingston station', 'South Western Railway', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three at Grade I', p: 'Historic England lists the Coronation Stone, the Clattern Bridge and the Church of All Saints at Grade I, all three inside the borough.' },
          { h3: 'By the river', p: 'Kingston Bridge is listed at Grade II*, as are the Lovekyn Chapel, the Market House and Cleave\'s Almshouses.' },
          { h3: 'Water houses', p: 'Two conduit houses are at Grade II*: the Coombe Conduit House and the Gallows Conduit House, in the grounds of Hampton Spring.' }
        ] }
      ]
    },
    {
      id: 'gauge', tint: 'tint', eyebrow: 'The data',
      h2: 'One number a day, for 142 years',
      intro: 'The National River Flow Archive gives flow in cubic metres per second, the volume passing the gauge each second. We checked the gauge\'s grid reference against the borough boundary: it lies inside Kingston.',
      body: [
        { kind: 'table', caption: 'Extremes in the Kingston record, National River Flow Archive station 39001', head: ['Record', 'Value', 'When'], rows: [
          ['Highest daily flow', '800 cubic metres a second', '18 November 1894'],
          ['Lowest daily flow', '0.01 cubic metres a second', '27 August 1976'],
          ['Driest water year, average flow', '10.8', 'October 1975 to September 1976'],
          ['Wettest water year, average flow', '142.0', 'October 2000 to September 2001'],
          ['Average over all 142 water years', '65.6', '1884 to 2025']
        ] },
        { kind: 'p', text: 'The archive\'s own notes matter as much as the numbers. It says the 1894 flood peak was reassessed in 2002, that low flows in the 1930s and 1940s may be underestimated, that gauged flow fell to zero in August 1976, and that abstractions, reservoirs and effluent all affect the river. A learner who reads those notes before running a single test is already doing better science than most headlines.' },
        { kind: 'p', text: 'We meant to list Kingston\'s libraries here. The council\'s libraries page refused our automated reader with an access error, and we never try to get around such a block, so no list appears; Kingston Council\'s own site has one.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Slide the start year and watch the trend flip',
      intro: 'Learners use a rank-based trend test and a robust slope, then ask the question most analyses skip: would the answer survive a different starting point?',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Three questions', p: 'For each water year, October to September, take the average flow, the highest day, and the lowest seven-day average. Three summaries, three separate trend tests.' },
          { h3: '2. A rank test', p: 'The Mann-Kendall test compares every year with every later year and counts ups against downs. Sen\'s slope takes the middle of all the pairwise slopes, so one extreme year cannot drag it far.' },
          { h3: '3. The sweep', p: 'Repeat the low-flow test starting from every year between 1884 and 1995, always ending in 2025, and plot the answers side by side.' }
        ] },
        { kind: 'table', caption: 'Lowest seven-day flow: trend from each start year to 2025, run 25 September 2026', head: ['Start', 'Years', 'Sen\'s slope, per decade', 'Chance with no trend'], rows: [
          ['1884', '142', '-0.34', '0.05%'],
          ['1934', '92', '-0.27', '7.1%'],
          ['1951', '75', '-0.60', '0.02%'],
          ['1964', '62', '-0.49', '5.5%'],
          ['1976', '50', '+0.33', '41%'],
          ['1990', '36', '+1.20', '4.0%']
        ] },
        { kind: 'p', text: 'Over the whole record, the average flow shows no trend at all and neither do the highest days. The driest week of each year does fall, clearly. But slide the start: beginning in the dry 1930s weakens the fall, beginning in 1951 strengthens it, beginning just after the 1976 drought erases it, and beginning in 1990 produces a statistically significant rise. Of 112 start years tried, 76 pass the usual 5% test. Someone who wanted a story could pick a start year to suit it, and every number they quoted would be correctly calculated.' },
        { kind: 'callout', h3: 'Why an AI summary is not the same as this analysis', p: 'Ask an assistant whether the Thames is drying up and it will give a fluent answer, perhaps quoting a trend. It will rarely tell you that the answer hinges on the start year, which of three summaries was tested, or what the archive says about early low flows and abstraction. Learners who have run the sweep themselves know to ask "starting when, measured how?" of every trend they meet, including the ones produced by AI.' }
      ]
    },
    {
      id: 'robust', tint: 'tint', eyebrow: 'One more test',
      h2: 'How much can one flood move a line?',
      intro: 'The largest flow in the record, 800 cubic metres a second on 18 November 1894, sits at the very start of the series. Learners test how much it matters.',
      body: [
        { kind: 'table', caption: 'Trend in each year\'s highest daily flow, per decade', head: ['Method', 'All 142 years', 'Without the 1894 flood year'], rows: [
          ['Least-squares line', '+0.36', '+1.62'],
          ['Sen\'s slope', '+2.89', '+3.33']
        ] },
        { kind: 'p', text: 'Removing one year multiplies the ordinary least-squares slope by about four and a half, while Sen\'s slope moves by about a seventh. Neither trend in flood peaks is statistically significant either way. The lesson is about tools, not floods: a method built on ranks and medians is far harder for one extreme value to push around. Pupils taking GCSE geography or maths can follow the idea of a trend line and an outlier; sixth formers can code both slopes and the sweep themselves.' },
        { kind: 'p', text: 'A trend test says that something changed, never why. The archive itself names abstraction, reservoirs, effluent and uncertain early low flows, so learners list possible causes rather than choosing the one they like. The flows belong to the National River Flow Archive; the water years, tests, slopes and sweep are our own work, run on 25 September 2026. We are not linked to UKCEH, the World Meteorological Organization, Kingston Council, Historic England, TfL or the ONS, and none of them has reviewed this page.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'South Western Railway, and no train at all',
      intro: 'Kingston has no Underground station. For our lessons, that makes no difference whatsoever.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Kingston station', p: 'TfL\'s open data lists South Western Railway services at Kingston.' },
          { h3: 'Chessington to Norbiton', p: 'Learners from the south of the borough and from its riverside centre can join one class from their own rooms.' },
          { h3: 'A steady flow', p: 'Unlike the Thames, our groups keep a constant size: five to ten learners at one stage, meeting at an agreed UK time.' }
        ] },
        { kind: 'spec', title: 'Kingston among the boroughs', p: 'Kingston upon Thames is one of London\'s 32 boroughs, and one of its smaller ones by population. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists all 32 and the City, linking each page as it goes live, including <a class="cg-inline-link" href="/coding-classes-in-sutton-london">Sutton</a> to the east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a river chart to a trend that survives scrutiny',
    intro: 'The free lesson shows us a learner\'s real starting point; school year is only where we begin guessing.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Up and down', p: 'Children chart a year of river levels in Scratch and describe the pattern in their own words.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Years and averages', p: 'Python that turns daily numbers into yearly averages, finds the extremes and draws them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Trends under pressure', p: 'Rank tests, robust slopes and start-year sweeps on a real record, excellent for a geography, maths or computing project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Reading trend claims', p: 'Adults learn to ask what was measured, from when, and how, before accepting any claim that something is rising or falling.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can fit a trend line instantly. Why should a Kingston teenager learn to doubt one?',
    intro: 'Because a trend can be correct in every calculation and still be misleading.',
    p1: 'Fitting a line takes a computer no time, and AI tools will fit one and describe it confidently. On the Kingston record, the same kind of test gives a strong fall, nothing, or a significant rise, depending only on the first year included, and a least-squares line can shift fourfold when one old flood is removed. None of that shows up unless someone thinks to check. The checking is the valuable part.',
    p2: 'Learners who have run the start-year sweep carry a habit into every subject: before believing a trend, ask when it starts, what exactly was measured, and whether a single extreme is doing the work. Tools will keep producing lines faster. People who know when to distrust them will keep being needed.',
    closer: 'Kingston has kept count of its river for over 140 years. A Kingston learner who can read that record honestly, doubts included, is ready for any data they meet.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Surbiton to New Malden, live lessons at home',
    intro: 'Anywhere in the borough, a learner is in class as soon as the video connects.',
    cells: [
      { h3: 'No travel needed', p: 'Bring a computer, a headset and a connection that holds up for an hour; that is the whole kit list.' },
      { h3: 'English Key Stages', p: 'Progress is described in the Key Stages English schools use, from Key Stage 1 to sixth form, mentioning GCSE and A level where relevant. All teaching is in English.' },
      { h3: 'Start free', p: 'Lesson one is taught for real, and the teacher uses it to judge where the learner should begin. We take no payment details for it.' },
      { h3: 'Classes by stage', p: 'Five to ten learners share a stage in each class, drawn from all over the UK and elsewhere, so a suitable hour is rarely a problem.' },
      { h3: 'Two evenings weekly', p: 'Most classes meet twice a week in the evening and pause for half terms, holidays and exam periods by agreement.' },
      { h3: 'Clock on the Thames', p: 'The teacher may be in India; the lesson time on your invitation is simply Kingston\'s own.' }
    ],
    spec: { title: 'A smaller borough, a well-matched class', p: 'Kingston has about 168,000 residents, and a good class needs five learners at one level free at the same hour, which is why our groups draw on learners far beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Kingston families',
    intro: 'The first lesson is free, then one monthly fee, the same in Surbiton as in Chessington.',
    first: 'A full lesson with a teacher, free, ending with our recommendation of level, course and time.',
    group: 'Roughly eight live lessons a month in a group of five to ten at one stage.',
    private: 'Roughly eight live lessons a month, taught one to one.',
    closer: 'Kingston families pay in US dollars, as does every family outside India, and there are no sterling prices anywhere on the site. Payment starts only after the free lesson, and only once you have picked a course and a regular slot. The pricing page explains pausing, missed lessons and swapping between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from our families',

  book: {
    h2: 'Request your free lesson',
    intro: 'Tell us an age or year group and something the learner is into. We might begin with a Scratch river, a Python chart of Thames flows, or the trend sweep from this page.',
    success: 'Thank you. Your Kingston lesson request has reached us.'
  },

  faq: {
    h2: 'Kingston questions',
    intro: 'About the borough, the river project and our lessons.',
    items: [
      { q: 'How many people live in Kingston upon Thames?', a: 'The Royal Borough of Kingston upon Thames counted 168,063 usual residents in March 2021; the ONS publishes that figure in Census table TS001.' },
      { q: 'Where does the Thames flow data come from?', a: 'From the National River Flow Archive, run by the UK Centre for Ecology and Hydrology. Station 39001, Thames at Kingston, has daily flows from 1883; we used every day up to 30 September 2025.' },
      { q: 'Is the Thames at Kingston drying up?', a: 'The average flow shows no trend over 142 water years. The driest week of each year has fallen over the full record, but starting the count after 1976 removes the fall, and starting in 1990 shows a rise. The archive also warns that early low flows may be underestimated.' },
      { q: 'What is Sen\'s slope?', a: 'A robust way to measure a trend: take the slope between every pair of years and use the middle value. Because it relies on the median, one extreme year, such as the 1894 flood, moves it far less than it moves an ordinary least-squares line.' },
      { q: 'Why does the start year matter so much?', a: 'Because the record contains dry and wet spells. Starting just before or just after a spell like the 1976 drought changes which years dominate the comparison, so a fair analysis reports how sensitive the result is rather than one chosen start.' },
      { q: 'When are Kingston lessons held?', a: 'Once we have met the learner in the free lesson, we suggest a class at their level with a seat free and a fixed weekly slot. Teachers work from India; slot times are quoted in UK time.' },
      { q: 'What does a learner need for lessons?', a: 'Any ordinary computer with sound and a connection that does not drop. The river project needs Python and one free download from the National River Flow Archive.' },
      { q: 'Is there a Modern Age Coders centre in Kingston upon Thames?', a: 'No. There is no Kingston upon Thames centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Kingston upon Thames cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Downstream, upstream and beyond London',
    html: 'Our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> is the index for the capital, adding each borough as we publish it, among them <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a>, just across the Thames, and <a class="cg-inline-link" href="/coding-classes-in-enfield-london">Enfield</a> at the far northern edge. After this project, the natural next step is machine learning, which our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">London AI classes</a> teach, while the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> sets English Key Stages beside the Scottish, Welsh and Northern Irish systems.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kingston and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-sutton-london', label: 'Sutton' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-kgt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-kgt .cg-hero h1 { font-weight: 740; letter-spacing: -0.019em; line-height: 1.04; }
.cg-root.cg-kgt .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-kgt .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-kgt .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-kgt .cg-grid-3 { gap: clamp(0.95rem, 2.6vw, 1.85rem); }
.cg-root.cg-kgt .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-kgt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kgt .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-kgt .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-kgt .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Kingston upon Thames. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000021): 168,063 usual residents (164,689 households, 3,374 communal); third smallest of the 33 London LADs after the City (8,583) and Kensington and Chelsea (143,375). Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 161 (I 3, II* 13, II 145); Grade I 1080064 Clattern Bridge, 1080066 Coronation Stone, 1358437 Church of All Saints; II* include 1300232 KINGSTON BRIDGE, 1358425 Lovekyn Chapel, 1358428 MARKET HOUSE, 1184584 CLEAVE\'S ALMSHOUSES, 1080099 COOMBE CONDUIT HOUSE, 1080062 GALLOWS CONDUIT HOUSE (IN GROUNDS OF HAMPTON SPRING). TfL Unified API 910GKGSTON (Kingston Rail Station), 25 September 2026: South Western Railway. kingston.gov.uk/libraries returned HTTP 403 on 25 September 2026: not circumvented, no library list used.',
    localProject: 'NRFA station-info 39001 (Thames at Kingston, TQ17786985, 517780 169850, catchment 9,948 km2, opened 1883-01-01; description: one of the longest UK flow records, WMO recognition May 2023 for more than 100 years of observations; early low flows particularly 1930s and 1940s may be underestimated; gauged flow fell to zero August 1976; 1894 flood peak reassessed 2002 at 800 cumecs; abstractions, reservoirs, effluent affect runoff). NRFA time-series gdf 39001: 52,137 days 1883-01-01 to 2025-09-30. Water years Oct-Sep, 142 complete (WY1884-WY2025). Mann-Kendall with ties, Sen slope per decade: mean flow 65.62, S -121, p 0.832, Sen -0.13; annual max 310.8, S 746, p 0.189, Sen +2.89, OLS +0.36 (without WY1895: Sen +3.33, OLS +1.62, p 0.124); lowest 7-day mean 10.22, S -1,978, p 0.0005, Sen -0.337. Start sweep (min7, starts 1884-1995 to WY2025): 1884 p 0.0005 -0.337; 1934 0.0712 -0.274; 1951 0.0002 -0.598; 1964 0.0549 -0.487; 1976 0.4124 +0.328; 1990 0.0397 +1.199; 76 of 112 starts p < 0.05. Extremes: max day 1894-11-18 800; min day 1976-08-27 0.01; driest WY1976 mean 10.8; wettest WY2001 mean 142.0. Lesson family: start-date sensitivity and robust Sen slope, screened 25 September 2026 under the reuse rule (Mann-Kendall at Chichester had a different teaching point).',
    requiredMentions: [
      '168,063',
      'Thames at Kingston',
      'Sen\'s slope',
      'Coronation Stone',
      'Clattern Bridge',
      'Lovekyn Chapel',
      'Cleave\'s Almshouses',
      'Coombe Conduit House',
      '18 November 1894'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Kingston upon Thames E09000021: 168,063 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000021&measures=20100' },
      { claim: 'UKCEH National River Flow Archive, station 39001 Thames at Kingston: station information and daily flows 1883-2025.', url: 'https://nrfa.ceh.ac.uk/data/station/info/39001' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Kingston upon Thames on 25 September 2026: 161 (3 I, 13 II*, 145 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Kingston upon Thames E09000021.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint 910GKGSTON (Kingston), 25 September 2026: South Western Railway.', url: 'https://api.tfl.gov.uk/StopPoint/910GKGSTON' }
    ],
    rejectedClaims: [
      'Whether the NRFA daily series for 39001 is naturalised or gauged at each date: the station notes mention both, so the page calls it the archive\'s daily flow series and quotes its caveats.',
      'Causes of the low-flow decline (climate, abstraction growth): not established by a trend test; the page lists possible causes only.',
      'Coronation Stone history (Saxon coronations): not read beyond the list entry name for this build, so not stated.',
      'Kingston library list: council page returned 403; no libraries named.',
      'Kingston schools and 11+ admissions: left to Phase 6 maths pages; not mentioned here.',
      'Census ethnicity, religion or country of birth for Kingston: never a standout; used only to order the build.'
    ]
  }
};
