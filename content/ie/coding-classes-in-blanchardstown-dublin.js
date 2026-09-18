'use strict';
// Blanchardstown, Dublin 15 (cg- district page, Ireland cluster, Phase 6, first district).
// Owner rule 2026-09-17: districts use NAMED SOURCES ONLY (institutions' own sites),
// never our aggregation of census small areas, and are skipped below 8 facts.
// Named sources read 19 September 2026: EPA airquality.ie station EPA-29 (description
// and hourly readings, provisional), EPA air quality standards page (current limits),
// Directive (EU) 2024/2881 on EUR-Lex (Annex I Table 1 limits for 1 January 2030;
// Annex V Points B, C and D on coverage, aggregation and partial years), TU Dublin
// Blanchardstown campus page, Sport Ireland National Aquatic Centre, Fingal County
// Council visitor and library pages, Irish Rail Clonsilla, Draiocht's own site.
// Not readable: HSE Connolly Hospital pages (404), Fingal Blanchardstown library page
// (404), Draiocht contact page (404). Spine: data coverage as a validity gate and
// limits as rules (threshold + window + allowed count). 2025 NO2: 6,862 of 8,760
// hours (78.3%); Q1 99.5, Q2 100.0, Q3 99.8, Q4 14.7%; gap 2025-10-14 to 2026-02-05
// (2,728 h); max hour 126.2; 0 hours over 200; 285 valid days, 20 over 50, max 64.7
// (6 February); mean of available hours 24.6; January 29.9, April 35.2, June 15.4.
// Scratchpad dist/no2.js, dist/aq_parse.py, dist/epa29.json. Fingal owns the LEA and
// ED figures and three Dublin 15 LCCS schools; Dublin owns the D15 Eircode point.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'BLANCHARDSTOWN', blurb: 'A roadside air monitor, a year of hourly readings and five rules that give three answers. A page on coding a limit as the rule it is.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-blanchardstown-dublin',
  code: 'bdt',
  accent: '#354319',
  accentRationale: 'Blanchardstown: a deep olive from the widened solver search, the most distant colour left in its band and apart from the Fingal plum and the Dublin red',
  pageType: 'district',
  place: {
    name: 'Blanchardstown',
    eyebrow: 'Blanchardstown, Dublin 15',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Fingal' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-fingal', name: 'Fingal' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Fingal', href: '/coding-classes-in-fingal' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' }
  ],
  routeLabel: 'Blanchardstown, Dublin 15, Ireland',
  title: 'Coding Classes in Blanchardstown, Dublin 15 | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Blanchardstown and Dublin 15, ages 6 to 67, in same-level groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Blanchardstown, with a data project that tests a year of air readings against the rules that govern them.',
  twitterDescription: 'Live online coding, Python and AI for Blanchardstown, Dublin 15, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Blanchardstown',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Blanchardstown and across Dublin 15, taught live in English in level-matched groups or one to one.'
  },

  h1: 'Coding classes in Blanchardstown',
  capsuleQ: 'What are the best coding classes in Blanchardstown?',
  capsule: 'Blanchardstown learners take every lesson live with a teacher over video, in a small group matched by level or on their own, generally twice a week and at any age from six to sixty-seven. Nobody travels anywhere in Dublin 15 to attend. A first lesson is given free, and from then on the monthly fee is USD 100 for a place in a group or USD 150 for lessons one to one.',
  lead: 'Beside the M50 and N3 interchange, the Environmental Protection Agency runs a monitoring site that records nitrogen dioxide every hour and publishes the readings online. Take its 2025 readings and a simple question, whether the air stayed within the limit, turns out to have several answers. The same numbers sit inside today\'s rules and outside two of the rules due in 2030, and the yearly average most people reach for first is one the rules would not accept, because a whole season of readings is missing. This page shows a learner how to write a limit as the rule it really is, and how to check whether the data can answer the question at all.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Blanchardstown.',

  picks: {
    eyebrow: 'Courses for Dublin 15',
    h2: 'Four starting points in Blanchardstown',
    intro: 'The course follows the learner\'s age and interests, and the teacher checks the level in the free opening lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and rules: a game that only lets a character pass when three conditions all hold.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with lists of readings, averages and simple if-rules that count how often a line is crossed.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Hourly sensor data in Python: grouping by day and year, coverage checks and rules as functions.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who report against targets or thresholds and need the window and the data coverage stated.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One year of hourly readings, five rules and three different answers',
      intro: 'Nitrogen dioxide at the EPA\'s Blanchardstown site: the provisional readings for 2025 published on airquality.ie, in micrograms per cubic metre. Each rule is written out with its threshold, its time window and the number of times it may be passed.',
      body: [
        { kind: 'table', caption: 'Blanchardstown nitrogen dioxide in 2025, rule by rule', head: ['Rule', 'Threshold and window', 'In the 2025 readings'], rows: [
          ['Current hourly limit', 'Over 200 in an hour, 18 times allowed', '0 hours'],
          ['Current annual limit', 'Year average over 40', '24.6, from the hours available'],
          ['2030 hourly limit', 'Over 200 in an hour, 3 times allowed', '0 hours'],
          ['2030 daily limit', 'Day average over 50, 18 times allowed', '20 days'],
          ['2030 annual limit', 'Year average over 20', '24.6, from the hours available']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Hours: well clear', p: 'The highest single hour in 2025 read 126.2. No hour went above 200, so neither hourly rule, with 18 passes allowed now or 3 from 2030, is troubled by these readings.' },
          { h3: 'Days: the 2030 rule bites', p: 'Of 285 days with at least 18 hourly readings, 20 averaged above 50, the highest 64.7 on 6 February. The 2030 daily rule allows 18 such days a year. A count like this can only grow as missing days are filled in.' },
          { h3: 'The year: an average with a hole', p: 'The hours available average 24.6, under the current 40 and over the 2030 figure of 20. But the average rests on 6,862 of the year\'s 8,760 hours, 78.3 percent, and the rules ask for at least 85.' }
        ] },
        { kind: 'callout', h3: 'Coverage decides whether an average can be reported at all', p: 'The 2024 air quality directive sets a minimum data coverage of 85 percent for a nitrogen dioxide annual mean from fixed measurements, and says that coverage must hold across parts of the year, by quarter, month or weekday, so that lost data cannot skew the result. Blanchardstown\'s 2025 readings cover 99.5, 100.0 and 99.8 percent of the first three quarters and 14.7 percent of the last: the published series stops on 14 October 2025 and resumes on 5 February 2026, a gap of 2,728 hours. The missing weeks are colder ones, and in the months that were measured the cooler months ran higher, January at 29.9 and April at 35.2 against June at 15.4, so the average that can be computed is more likely too low than too high. It takes one line of code to calculate it. Whether it counts as an annual mean under the rules is a separate test, and these readings do not pass it.' },
        { kind: 'p', text: 'This is a different problem from a survey question left blank. Nobody declined to answer; an instrument\'s record has a hole in it, and the rules for handling that were written down before the data arrived. The learner\'s program reads the hourly series, keeps only hours that carry a value, and groups them three ways: by hour for the hourly rules; by day for the daily rule, keeping only days with at least 18 hourly values, as the directive requires; and by year, with a coverage check by quarter before any annual figure is printed. Each rule becomes one small function taking a threshold, a window and an allowed count, and returning the result together with the coverage behind it. Moving from today\'s rules to the 2030 ones is then a change of three numbers, not a rewrite.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Provisional, not validated', p: 'The site says its data "has been collected automatically from the monitoring sites and has not yet been validated", may be revised after validation, and that "Sharp spikes should be treated cautiously". Official assessments use validated data.' },
          { h3: 'Two sets of rules, two dates', p: 'The limits the EPA lists now are 200 for an hour, passed no more than 18 times a calendar year, and 40 for the year. Directive (EU) 2024/2881 sets, for 1 January 2030, 200 for an hour no more than 3 times, 50 for a day no more than 18 times, and 20 for the year.' },
          { h3: 'Partial years still count', p: 'The same directive says an assessment goes ahead whatever the coverage if the data allow a conclusive answer, and that short-term exceedances found in a partial year may still count. Missing data can hide a problem; it cannot prove there is none.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Dublin 15, named',
      h2: 'Blanchardstown in the words of its own institutions',
      intro: 'Facts that the places themselves publish, each checked on its own site, with an eircode printed only where the owner gives one.',
      body: [
        { kind: 'table', caption: 'Named places in and around Blanchardstown', head: ['Place', 'What its own site says'], rows: [
          ['TU Dublin Blanchardstown', 'Ten buildings, over 22,000 square metres, Blanchardstown Road North'],
          ['National Aquatic Centre', 'Ten-lane 50-metre pool, 2,500 seats, D15 EPN4'],
          ['EPA monitoring site', 'Near the M50 and N3 interchange, nitrogen oxides and particles'],
          ['Clonsilla station', 'Clonsilla Road, Dublin 15, D15 YA36'],
          ['Draíocht', 'Titled Draíocht Blanchardstown, runs a D15 Youth Theatre']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A campus for the north-west', p: 'TU Dublin says its Blanchardstown campus, in the IDA College Business and Technology Park, serves the greater Blanchardstown area and the north and west of Dublin city and county, and students from Meath, Kildare, Cavan and Louth.' },
          { h3: 'Pools with moving floors', p: 'The Sport Ireland National Aquatic Centre on Snugborough Road describes a ten-lane, 50-metre by 25-metre pool with two moveable floors so it can be set up for other uses, and a separate 25-metre diving pool.' },
          { h3: 'The council\'s own description', p: 'Fingal County Council calls Blanchardstown "the most populous and urban area of the county" and its shopping centre "one of the largest retail areas in Ireland". Those are the council\'s words, not a measured figure.' }
        ] },
        { kind: 'spec', title: 'Pages we could not read', p: 'Connolly Hospital\'s HSE pages, the council\'s Blanchardstown library page and Draíocht\'s contact page all returned "not found" when checked on 19 September 2026, so this page prints no address or details for them rather than borrowing one from somewhere less reliable.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for learners across Dublin 15',
      intro: 'Two lessons a week is the usual pattern, each one taught live by a teacher from its first minute to its last.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Younger learners start with block code and simple rules: a door that opens only when a key is held and a switch is on, which is the same logic as a limit with conditions.' },
          { h3: 'Teenagers', p: 'Teenagers move to Python, websites, AI projects and data work with real published series like the hourly readings on this page.' },
          { h3: 'Adults', p: 'Adults can begin with no experience at all; the first lesson settles where they start and which course follows.' }
        ] },
        { kind: 'p', text: 'The readings and the limits are quoted from the EPA and the directive as published; the counts, averages and coverage figures are our own arithmetic on the provisional readings, done on 19 September 2026. The campus, the aquatic centre, the station, the arts centre and the council are quoted from their own websites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a rule in blocks to a rule with a window',
    intro: 'Ages here are a rough guide only; the first lesson finds the right rung for each learner.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'If and only if', p: 'Block-coded games where something happens only when every condition holds.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Counting crossings', p: 'Python that counts how many values in a list pass a line, then averages them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Windows and coverage', p: 'Grouping sensor data by hour, day and year, and refusing to report an average the data cannot support.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reporting against targets', p: 'Thresholds, windows and allowed counts written into code, with coverage stated beside every figure.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant whether Blanchardstown\'s air was within the limit',
    intro: 'It will usually average the numbers and compare them with one figure.',
    p1: 'Hand an AI assistant the 2025 readings and ask whether they were within the limit, and it will often average them, find 24.6, compare that with 40 and say yes. Every step is arithmetic done correctly. The answer still skips the daily rule due in 2030, the allowed counts, and the fact that the average rests on too little of the year to count.',
    p2: 'Once the rule functions are written, the learner asks the assistant which limit it used and from which year, what time window that limit applies to, how many passes it allows, and what share of the year the data cover. An answer that cannot name all four is not yet an answer.',
    closer: 'Averaging a column takes one line. Knowing which rule the question is really about is the skill.',
    blogAnchor: 'why learning to code still repays the hours'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Blanchardstown',
    intro: 'The details.',
    cells: [
      { h3: 'A teacher, live', p: 'Each lesson is taught in real time by a teacher who follows every learner\'s work on screen.' },
      { h3: 'Same-stage classmates', p: 'Groups of five to ten learners at one level, who may be in Dublin 15, elsewhere in Ireland or overseas.' },
      { h3: 'Twice in a week', p: 'Around eight lessons a month, on two regular days fixed at the start.' },
      { h3: 'Term-time aware', p: 'Mid-terms, holidays and exam weeks are allowed for in the plan from day one.' },
      { h3: 'At home', p: 'A laptop or desktop with a keyboard, a headset or speakers and microphone, and a connection that carries video.' },
      { h3: 'On your own', p: 'One-to-one lessons for a learner who is well ahead, needs a slower pace, or has hours no group shares.' }
    ],
    spec: { title: 'Online, never on site', p: 'We have no centre in Blanchardstown, in Fingal or elsewhere in Ireland. Every lesson happens over video, so a learner in Clonsilla or Mulhuddart has exactly the same class as one anywhere else.' }
  },

  fees: {
    h2: 'Fees for Blanchardstown families',
    intro: 'In full.',
    first: 'A free first lesson, with the learner\'s level checked.',
    group: 'A monthly group place, five to ten learners at one stage, around eight live lessons.',
    private: 'Monthly one-to-one lessons on the same pattern.',
    closer: 'Families living outside India pay the same US dollar fee each month, wherever they are. The first lesson places no obligation on anyone, charges begin when the course begins, and the pricing page covers holidays, missed lessons and changes between group and private teaching.'
  },

  reviewsH2: 'Six families on Google, in their own words',

  book: {
    h2: 'Book a free first lesson in Blanchardstown',
    intro: 'Tell us the learner\'s age and what interests them, and the teacher will build the first hour around that. It might finish with a game, a first program, or a rule written in code and tested on real readings.',
    success: 'Thank you. We will be in touch soon to arrange the lesson.'
  },

  faq: {
    h2: 'Blanchardstown coding class questions',
    intro: 'What families in Dublin 15 ask most often.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Blanchardstown?', a: 'No. All teaching is live over video and we have no premises in Ireland. A learner needs a computer with a keyboard, working sound and a steady connection, and the phone number on this page is our number in India.', boiler: true },
      { q: 'What is the data project on this page?', a: 'Testing the 2025 hourly nitrogen dioxide readings from the EPA\'s Blanchardstown site against five rules, current and 2030, each with its own threshold, window and allowed count. The same readings give three different answers, and the annual average fails the rules\' own coverage test.' },
      { q: 'So is the air in Blanchardstown within the limits?', a: 'This page does not say, and neither should anyone working from the provisional readings. The EPA assesses compliance by zone using validated data, and the 2030 limits apply from 1 January 2030. The project is about what the published readings can and cannot support.' },
      { q: 'Why is there no population figure on this page?', a: 'Because we only print figures that the place or its institutions publish for it. District facts here come from named sources such as TU Dublin, the National Aquatic Centre, the EPA, Irish Rail and Fingal County Council.' },
      { q: 'When are lessons held?', a: 'Weekday afternoons once school finishes, weekday evenings and weekend daytimes. Times are fixed in Irish time; our teachers are in India, which is four and a half hours ahead in Irish summer time and five and a half in winter, and we only offer slots that work for both.' },
      { q: 'Can adults in Dublin 15 join?', a: 'Yes, at any level up to the age of sixty-seven. After the first lesson an adult can choose a small same-level group or private lessons.' },
      { q: 'Will my child be grouped with other Blanchardstown children?', a: 'Only by coincidence. Learners are grouped by level, so classmates may come from Dublin 15, from other parts of Ireland or from abroad.' },
      { q: 'What do coding classes in Blanchardstown cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Nothing is paid before the plan is agreed.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, grouped by level, pace and aim rather than by age or area. If no group fits at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Dublin 15 and Fingal',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> page covers the council area around Blanchardstown, the <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page maps the city, and the north of Fingal has its own town pages for <a class="cg-inline-link" href="/best-coding-class-in-swords">Swords</a> and <a class="cg-inline-link" href="/best-coding-class-in-malahide">Malahide</a>. The <a class="cg-inline-link" href="/data-science-course-ireland">data science course</a> page goes further with real data, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Blanchardstown, Fingal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-bdt .cg-hero-grid { align-items: start; gap: clamp(1.07rem, 3.18vw, 2.51rem); }
.cg-root.cg-bdt .cg-hero h1 { font-weight: 700; letter-spacing: -0.0197em; line-height: 1.06; }
.cg-root.cg-bdt .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.12rem; }
.cg-root.cg-bdt .cg-eyebrow { letter-spacing: 0.128em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bdt .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0126em; }
.cg-root.cg-bdt .cg-grid-3 { gap: clamp(1.11rem, 2.86vw, 2.19rem); }
.cg-root.cg-bdt .cg-table caption { letter-spacing: 0.032em; font-weight: 700; }
.cg-root.cg-bdt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bdt .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-bdt .cg-ladder-col { border-top: 6px double var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-bdt .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Blanchardstown, Dublin 15, named sources only (owner rule for districts), read 19 September 2026. EPA airquality.ie station EPA-29: "The Blanchardstown site is located close to the M50/N3 Interchange. Monitoring is done using continuous monitors for nitrogen oxides and particulate matter." Readings page note: data "has been collected automatically from the monitoring sites and has not yet been validated. Therefore, following validation this data may be subject to revision. Sharp spikes should be treated cautiously and may be the result of a calibration or a monitor malfunction." Hourly NO2 downloaded for 1 January 2025 to 30 June 2026 (three six-month requests, the site maximum): 2025 has 6,862 non-null hourly values of 8,760 hours (78.3 percent); by quarter 2,150 of 2,160 (99.5), 2,184 of 2,184 (100.0), 2,204 of 2,208 (99.8), 324 of 2,208 (14.7); no values from 2025-10-14 11:00 to 2026-02-05 03:00 (2,728 hours); highest hourly value 126.2; hours above 200: 0; days with at least 18 hourly values 285, of which 20 have a mean above 50 (highest 64.7 on 2025-02-06); mean of the available 2025 hours 24.6; monthly means January 29.9, February 24.6, March 32.7, April 35.2, May 32.0, June 15.4, July 19.1, August 17.3, September 18.5, October (324 hours) 16.5. 2026 to 30 June: 2,628 hours, 5 days above 50. Days follow the site\'s hour stamps. EPA air quality standards page (2008/50/EC values): NO2 1 hour 200 micrograms per cubic metre "Not to be exceeded more than 18 times in a calendar year"; calendar year 40, annual mean. Directive (EU) 2024/2881, Annex I Table 1, "Limit values for the protection of human health to be attained by 1 January 2030": NO2 1 hour 200 "not to be exceeded more than 3 times per calendar year", 1 day 50 "not to be exceeded more than 18 times per calendar year", calendar year 20. Annex V Point B: minimum data coverage for NO2 fixed measurements 85 percent for annual means and for 1-hour, 8-hour or 24-hour means, and "the minimum data coverage requirements shall be met for specific periods (quarter, month, weekday) of the whole year". Point C: 24-hour means need "75 % of the 1-hour means (i.e. at least 18 hourly values during the day)". Point D: assessment "shall be carried out regardless of whether the data quality objectives for data coverage are achieved, provided the available data allows for a conclusive assessment" and partial-year short-term exceedances "may still constitute non-compliance". TU Dublin Blanchardstown campus page: "ten component buildings, with a total area of over 22,000 square metres, located within the IDA College Business and Technology Park on Blanchardstown Road North. The campus directly serves the greater Blanchardstown area and the north and west of Dublin city and county. It also serves students from neighbouring counties of Meath, Kildare, Cavan, Louth". Sport Ireland National Aquatic Centre: "Snugborough Road, Blanchardstown, Dublin 15, D15 EPN4"; "A 10-lane 50-metre x 25-metre international-standard swimming pool with two moveable floors which will allow it to be reconfigured for other uses"; "A 25-metre international standard diving pool/warm-up pool; Seating for 2,500 spectators". Fingal County Council visitor page: "Blanchardstown is the most populous and urban area of the county, boasting Blanchardstown Shopping Centre, one of the largest retail areas in Ireland." Irish Rail Clonsilla: "Clonsilla Road, Dublin 15", "Eircode D15 YA36". Draiocht own site: title "Draiocht Blanchardstown", programme "D15 Youth Theatre".',
    localProject: 'Limits as rules and coverage as a validity gate. The learner downloads a year of provisional hourly NO2 from the EPA Blanchardstown site and writes each limit as a function of threshold, window and allowed count. On the 2025 readings: 0 hours above 200 (current rule allows 18, 2030 rule 3); 20 of 285 valid days above a daily mean of 50 (2030 rule allows 18); a mean of the available hours of 24.6 (current limit 40, 2030 limit 20). The annual figure fails the directive\'s own 85 percent coverage requirement (78.3 percent, with the fourth quarter at 14.7 percent and a 2,728-hour gap from 14 October 2025 to 5 February 2026), and the missing months are the higher ones, so the computable mean is more likely biased low. Exceedance counts can only grow as gaps fill; averages can move either way. Distinct from census non-response (Longford) and from spread hidden by an average (Sligo): a published rule disqualifies a number that can still be computed. New family for the cluster: rule windows and coverage validity.',
    requiredMentions: [
      '6,862',
      '78.3',
      '126.2',
      '24.6',
      '64.7',
      '285',
      '2,728',
      '35.2',
      '22,000',
      '2,500',
      'D15 EPN4',
      'D15 YA36'
    ],
    sources: [
      { claim: 'EPA airquality.ie, Blanchardstown station EPA-29: "The Blanchardstown site is located close to the M50/N3 Interchange. Monitoring is done using continuous monitors for nitrogen oxides and particulate matter."; hourly NO2 readings for 2025 and 2026 with the note that the data "has not yet been validated" and "Sharp spikes should be treated cautiously".', url: 'https://airquality.ie/readings?station=EPA-29' },
      { claim: 'EPA, Air Quality Standards: nitrogen dioxide 1 hour 200 micrograms per cubic metre "Not to be exceeded more than 18 times in a calendar year"; calendar year 40, annual mean.', url: 'https://airquality.ie/information/air-quality-standards' },
      { claim: 'Directive (EU) 2024/2881, Annex I Table 1 (to be attained by 1 January 2030): nitrogen dioxide 1 hour 200 not to be exceeded more than 3 times per calendar year, 1 day 50 not more than 18 times, calendar year 20. Annex V: minimum data coverage 85 percent for NO2 fixed measurements, met for specific periods of the year; 24-hour means need at least 18 hourly values; partial-year short-term exceedances may still constitute non-compliance.', url: 'https://eur-lex.europa.eu/eli/dir/2024/2881/oj/eng' },
      { claim: 'TU Dublin, Blanchardstown campus: "ten component buildings, with a total area of over 22,000 square metres, located within the IDA College Business and Technology Park on Blanchardstown Road North"; serves the greater Blanchardstown area, the north and west of Dublin city and county, and students from Meath, Kildare, Cavan and Louth.', url: 'https://www.tudublin.ie/explore/our-campuses/blanchardstown/' },
      { claim: 'Sport Ireland National Aquatic Centre: "Snugborough Road, Blanchardstown, Dublin 15, D15 EPN4"; a 10-lane 50-metre by 25-metre pool "with two moveable floors"; a 25-metre diving pool; "Seating for 2,500 spectators".', url: 'https://www.nationalaquaticcentre.ie/' },
      { claim: 'Fingal County Council visitor page: "Blanchardstown is the most populous and urban area of the county, boasting Blanchardstown Shopping Centre, one of the largest retail areas in Ireland."', url: 'https://www.fingal.ie/visitor/locations/blanchardstown' },
      { claim: 'Irish Rail, Clonsilla station: "Clonsilla Road, Dublin 15", Eircode "D15 YA36".', url: 'https://www.irishrail.ie/en-ie/station/clonsilla' },
      { claim: 'Draiocht, own site: titled "Draiocht Blanchardstown", with a programme named "D15 Youth Theatre".', url: 'https://www.draiocht.ie/' }
    ],
    rejectedClaims: [
      'Any statement that Blanchardstown\'s air does or does not meet a limit value: compliance is assessed by the EPA on validated data by zone, and the 2030 limits apply from 1 January 2030.',
      'Any health claim drawn from the readings.',
      'Any population figure for Blanchardstown, and any aggregation of census small areas into a district: owner rule for district pages.',
      'The Blanchardstown-Mulhuddart LEA and Blanchardstown-Blakestown ED figures and the three Dublin 15 LCCS schools: the Fingal page owns them.',
      'The Dublin postal district and Eircode argument and Luttrellstown Community College: the Dublin page owns them.',
      'Any detail for Connolly Hospital, Blanchardstown Library or a Draiocht address: their pages returned 404 on 19 September 2026.',
      'Coolmine station as a Blanchardstown address: Irish Rail gives it as Carpenterstown.'
    ]
  }
};
