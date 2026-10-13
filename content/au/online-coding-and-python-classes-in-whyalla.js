'use strict';
// Whyalla (cg- regional city page, Australia cluster Phase 7, row 184). Shaped page: online coding and Python for
// teenagers and adults. Spine: what does a running maximum reveal about a population series that "first year minus
// last year" hides? Data: ABS Data API, dataflow ABS_ANNUAL_ERP_ASGS2021 (version 1.2.0), Estimated Resident
// Population, Statistical Area Level 2 "Whyalla" (406011136), 2001 to 2025, read 10 October 2026. Our code
// (scratchpad au/r7/why.py): itertools.accumulate(values, max) gives the running peak; drawdown = peak minus value.
// Results: 22,003 (2001) to 21,641 (2025), a fall of 362 (1.65 percent); peak 22,624 in 2014; largest fall from the
// peak 983 (4.34 percent) in 2025; 11 yearly rises and 13 falls; largest single-year fall 270 (2016 to 2017),
// largest rise 169 (2006 to 2007); the neighbouring SA2 "Whyalla - North" shows 0 in every year. Lesson family:
// running maximum and maximum drawdown with itertools.accumulate; screened 0 location-page hits and 0 claims on
// 10 October 2026 (groupby runs dropped because qbyn claimed groupby); claimed by AU-R7.
// Place facts read raw 10 October 2026: ABS Census 2021 QuickStats, Whyalla Significant Urban Area (4008):
// 21,154 people; median age 41; 5,539 families; 11,112 private dwellings; 2.2 per household; separate house 4,998
// (55.8 percent; SA 78.0; Australia 72.3); semi-detached, row or terrace house, townhouse 3,497 (39.1 percent; SA
// 14.6; Australia 12.6); Technicians and Trades Workers 1,537 (17.4; SA 13.2; Australia 12.9); car as driver 6,045
// (68.4; SA 63.9; Australia 52.7); aged 10 to 14 1,342 (6.3; SA 5.9). ABS ASGS 2021 SUA layer: 40.8706 square
// kilometres. ABS SAL polygons at least 80 percent inside the SUA: Whyalla, Whyalla Stuart, Whyalla Playford,
// Whyalla Norrie, Whyalla Jenkins, Mullaquana. IANA tz Australia/Adelaide, rule AS. SA education pages and
// data.sa.gov.au return 403 to automated reads: no SA term dates and no SA open data are used. Excluded by the
// cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, Indigenous status.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'WHYALLA', label: 'Whyalla', blurb: 'Online coding and Python for Whyalla, and a running maximum that shows how far the population fell from its 2014 peak.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-whyalla',
  code: 'whya',
  accent: '#50623A',
  accentRationale: 'Whyalla: a dry saltbush olive (HSV saturation 0.41, value 0.38, hue 87), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with contrast above 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Whyalla',
    eyebrow: 'Whyalla, South Australia, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' }],
  nav: [
    { label: 'South Australia', href: '/coding-and-ai-classes-in-south-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Whyalla, South Australia',
  title: 'Online Coding and Python Classes in Whyalla | Live Lessons',
  description: 'Online coding and Python classes for Whyalla teens and adults, taught live: real programs on real Spencer Gulf data, one-to-one or in groups. First lesson free.',
  ogDescription: 'Whyalla Python classes, with a project that tracks the city population year by year and measures its biggest fall from a peak.',
  twitterDescription: 'Live online coding and Python classes for Whyalla teens and adults, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Whyalla Learners',
    description: 'Python programming taught live online to teenagers and adults in Whyalla and the Upper Spencer Gulf of South Australia, from first loops to working with real data series.'
  },

  h1: 'Online coding and Python classes in Whyalla',
  capsuleQ: 'What are the best online coding and Python classes in Whyalla?',
  capsule: 'For a Whyalla teenager or adult, a strong choice is a live class where Python is learned by writing programs that answer real questions, with a teacher reading the code alongside. The 2021 Census counted 21,154 people in the Whyalla urban area. Every lesson is online, so the learner works from home, and the first one is free.',
  lead: 'Between 2001 and 2025 the official estimate for the statistical area called Whyalla went from 22,003 people to 21,641. Subtract one from the other and you get a fall of 362, under 2 percent, which sounds like a town holding steady. The yearly numbers tell a different story. The population climbed for most of a decade, peaked at 22,624 in 2014, then slid. A ten-line Python program that keeps a running maximum shows the fall from that peak is 983 people, almost three times what first-minus-last suggests. That program is the Whyalla project, and it teaches a habit every programmer needs: before you summarise a series, look at its whole shape.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python class for a learner in Whyalla.',

  picks: {
    eyebrow: 'Course picks for Whyalla',
    h2: 'Python courses for the Upper Spencer Gulf',
    intro: 'All of these are live and project based, and each can reach a task like the population tracker. The free trial ends with a recommendation and asks for no card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first variables to programs that read files and summarise real data, built one working step at a time.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Working with tables and series in Python, with charts, simple models and honest summaries.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A complete Python path for adults, from basics to modules, testing and larger programs.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Spreadsheets, SQL and Python together, for people who handle numbers at work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Whyalla at the Census',
      h2: 'A steel and trades city on Spencer Gulf',
      intro: 'Figures for the Whyalla Significant Urban Area from the 2021 Census, compared with South Australia and Australia.',
      body: [
        { kind: 'table', caption: 'Whyalla urban area: core 2021 counts', head: ['Measure', 'Whyalla'], rows: [
          ['Residents', '21,154'],
          ['Median age', '41'],
          ['Families', '5,539'],
          ['Private dwellings', '11,112'],
          ['Average people per household', '2.2'],
          ['Area of the urban area', 'about 40.9 square kilometres']
        ] },
        { kind: 'table', mt: true, caption: 'Where Whyalla stands apart', head: ['Measure', 'Whyalla', 'SA', 'Australia'], rows: [
          ['Occupied homes that are separate houses', '4,998 (55.8%)', '78.0%', '72.3%'],
          ['Semi-detached, row or terrace homes and townhouses', '3,497 (39.1%)', '14.6%', '12.6%'],
          ['Technicians and trades workers', '1,537 (17.4%)', '13.2%', '12.9%'],
          ['Commuters who drove themselves to work', '6,045 (68.4%)', '63.9%', '52.7%'],
          ['Children aged 10 to 14', '1,342 (6.3%)', '5.9%', '6.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Unusual housing mix', p: 'Almost two in five occupied Whyalla homes are semi-detached, row or terrace houses or townhouses, close to three times the South Australian share.' },
          { h3: 'Trades town', p: 'Technicians and trades workers make up 17.4% of employed residents, above both the state and the national figure.' },
          { h3: 'Suburbs in the urban area', p: 'Bureau locality boundaries that sit inside the urban area include Whyalla, Whyalla Stuart, Whyalla Playford, Whyalla Norrie, Whyalla Jenkins and Mullaquana.' }
        ] },
        { kind: 'p', text: 'The bureau adds small random changes to Census cells to protect privacy, so parts may not add up to totals exactly. Every figure here is printed as published.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How far did Whyalla fall from its peak?',
      intro: 'Twenty-five yearly estimates, one running maximum, and a gap that a simple subtraction misses.',
      body: [
        { kind: 'table', caption: 'Estimated resident population, statistical area "Whyalla", selected years (ABS Data API, read 10 October 2026)', head: ['Year', 'Estimate', 'Running peak so far', 'Below the peak by'], rows: [
          ['2001', '22,003', '22,003', '0'],
          ['2005', '21,898', '22,003', '105'],
          ['2009', '22,299', '22,299', '0'],
          ['2014', '22,624', '22,624', '0'],
          ['2017', '22,162', '22,624', '462'],
          ['2021', '21,862', '22,624', '762'],
          ['2025', '21,641', '22,624', '983']
        ] },
        { kind: 'table', mt: true, caption: 'Three ways to describe the same 25 numbers (our calculation)', head: ['Summary', 'Result'], rows: [
          ['First year minus last year', 'a fall of 362 (1.65%)'],
          ['Largest fall from any earlier peak', '983 below the 2014 peak (4.34%)'],
          ['Year-on-year changes', '11 rises and 13 falls'],
          ['Biggest single-year fall', '270, from 2016 to 2017'],
          ['Biggest single-year rise', '169, from 2006 to 2007']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Keep a running peak', p: 'itertools.accumulate(values, max) walks the list once and returns, for every year, the highest estimate seen up to that year.' },
          { h3: 'Measure the gap', p: 'Subtract each year from its running peak. The largest of those gaps is the maximum drawdown, here 983 people in 2025.' },
          { h3: 'One pass, not two loops', p: 'Comparing every year with every earlier year takes 300 comparisons for 25 years; the running maximum needs one pass of 25 steps.' }
        ] },
        { kind: 'callout', h3: 'Endpoints can hide the story', p: 'Measured from 2001, Whyalla looks almost flat. Measured from 2014, it has lost close to a thousand residents. Neither number is wrong, but only the running maximum shows both at once, which is why we teach learners to compute it before writing a one-line summary of any series.' },
        { kind: 'p', text: 'These are the bureau\'s estimated resident population figures for the statistical area named Whyalla, which does not have exactly the same boundary as the urban area used in the Census table above, so the two sets of numbers should not be compared directly. The neighbouring statistical area "Whyalla - North" shows zero residents in every year. All differences, peaks and gaps are our own calculation from the published figures.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'From loop to tool',
      h2: 'What the project teaches about Python',
      intro: 'The finished program is short. Getting there exercises most of the language a beginner needs.',
      body: [
        { kind: 'p', text: 'Learners start with a plain for loop: keep a variable called peak, update it whenever a bigger value turns up, and print the gap each year. Once that works, they meet itertools.accumulate, which does the same job in one line, and they check that both versions agree. Then they reshape the output into a small table, format the numbers with thousands separators, and write a test that feeds in a series with a known drop so the function proves itself before it touches real data.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the running maximum by hand, then with accumulate, and draw a text chart of the series with one row per year.' },
          { h3: 'University students', p: 'Generalise to the longest losing streak and the slowest recovery time, and compare the cost of the naive and single-pass versions.' },
          { h3: 'Adults', p: 'Apply the same check to a work series such as monthly sales or stock levels, and report the drawdown alongside the headline change.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not connected with the Australian Bureau of Statistics, the South Australian Government or Whyalla City Council. The bureau published the estimates; the peaks, gaps and counts on this page come from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Whyalla planner',
      h2: 'Clocks and lesson times from Whyalla',
      intro: 'South Australia runs half an hour behind the eastern states, which shapes every booking.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Central time', p: 'Whyalla keeps Australian Central Standard Time, UTC plus nine and a half hours, outside daylight saving.' },
          { h3: 'Daylight saving', p: 'South Australia moves its clocks forward on the first Sunday in October and back on the first Sunday in April, so 4 October 2026 to 4 April 2027.' },
          { h3: 'India time', p: 'India time is four hours behind Whyalla in winter and five hours behind during daylight saving, which suits afternoon and evening lessons in Whyalla.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to analysing series',
    intro: 'Bands are a guide; the free lesson places each learner where they can make steady progress.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Loops and lists', p: 'Variables, lists and loops, used to track a running total and a running highest score.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Data in Python', p: 'Reading files, summarising series and spotting where a single number misleads.', courses: ['data-science-course-for-teens-python-data', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Efficient code', p: 'Algorithms that work in one pass, tests that pin down behaviour, and clean modules.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Numbers at work', p: 'Python and SQL for reports that show trends honestly, including peaks and falls.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant can summarise a series in seconds. Why learn to code the summary?',
    intro: 'Because a quick summary usually compares the first and last values, and in Whyalla that hides a fall almost three times larger.',
    p1: 'Ask a chatbot whether a town is growing and it will often take the earliest and latest figures and report the difference. For Whyalla that answer is a drop of 362 people since 2001, which is true but leaves out the climb to 2014 and the long slide since. Without the yearly series in front of you, there is no way to tell how much the tidy answer has left out.',
    p2: 'Learners who have written the running maximum know to ask for the peak, the drawdown and the direction of recent years, and they can check an assistant\'s answer against the data in a few lines of Python. That is the difference between accepting a summary and understanding a trend.',
    closer: 'In 2026 the useful skill is not producing a summary but knowing which summary the data actually supports.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Whyalla lessons work',
    intro: 'Classes are live video lessons, so a learner in Whyalla has the same teachers as one in Adelaide.',
    cells: [
      { h3: 'From home', p: 'A laptop or desktop, a headset and a steady connection are enough; nobody travels for a lesson.' },
      { h3: 'South Australian years', p: 'Teachers plan with South Australian year levels in mind, and every lesson is in English.' },
      { h3: 'A real first lesson', p: 'The free trial is a proper class that ends with a suggested course and a regular weekly time.' },
      { h3: 'Matched groups', p: 'Groups hold fifteen to twenty learners at the same level, drawn from Whyalla and further afield.' },
      { h3: 'Twice a week', p: 'Group learners meet on two fixed days, which comes to about eight lessons in a month.' },
      { h3: 'Teachers in India', p: 'Lessons are booked in Whyalla time; our teachers work in India, four or five hours behind depending on the season.' }
    ],
    spec: { title: 'Booked in Whyalla time', p: 'Times are always set in Whyalla time, and when South Australian clocks change, the adjustment is handled on our side.' }
  },

  fees: {
    h2: 'Whyalla class fees',
    intro: 'One short price list applies everywhere in Australia.',
    first: 'The first lesson is free and finishes with a level, a course and a weekly time suggested for you.',
    group: 'One month of group lessons, around eight, with fifteen to twenty learners at a matching level.',
    private: 'Around eight one-to-one lessons a month with a dedicated teacher.',
    closer: 'Outside India we charge in US dollars, and Whyalla pays exactly what every other Australian town pays. Billing starts only after the trial has settled the course and the time, and the pricing page covers holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free Python lesson in Whyalla',
    intro: 'Tell us the learner\'s age and what they enjoy. A beginner might write their first loop; someone further along might build the population tracker.',
    success: 'Thank you. We will be in touch soon to arrange a Whyalla lesson.'
  },

  faq: {
    h2: 'Whyalla Python class questions',
    intro: 'Short answers to what Whyalla families and adult learners usually ask first.',
    items: [
      { q: 'What is a running maximum?', a: 'A running maximum is a list where each position holds the largest value seen so far. In Python, itertools.accumulate(values, max) produces it in a single pass over the data.' },
      { q: 'What is a maximum drawdown?', a: 'A maximum drawdown is the largest fall from an earlier peak to a later value. For the Whyalla estimates it is 983 people, from 22,624 in 2014 to 21,641 in 2025.' },
      { q: 'How many people live in Whyalla?', a: 'Census night 2021 counted 21,154 people in the Whyalla urban area, with a median age of 41.' },
      { q: 'Why do the Census figure and the yearly estimate differ?', a: 'They measure different things over different boundaries: the Census counts people in the urban area on one night, while the estimated resident population covers a statistical area and is adjusted for people missed or away.' },
      { q: 'Do you teach Python to complete beginners?', a: 'Yes. Most learners start with no code at all and write a working program in the first lesson.' },
      { q: 'When are lessons for Whyalla learners?', a: 'After-school weekday slots and Saturday mornings are common, and every time is quoted in Whyalla time.' },
      { q: 'Can children under 13 join?', a: 'Yes. Learners from age six start with Scratch and games; the population project suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Whyalla?', a: 'No. We have no premises in Australia and do not claim any. Classes are live online, learners need a computer and a reliable connection, and our listed phone number is an Indian one.', boiler: true },
      { q: 'What do Whyalla Python classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for one-to-one. Everything is agreed before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched by level and goals rather than by age or postcode. If no group time suits, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More from South Australia',
    html: 'The state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">coding and AI classes in South Australia</a>, and Adelaide has its own page on <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">AI and programming classes in Adelaide</a>. For senior students, see <a class="cg-inline-link" href="/sace-digital-technologies-help">SACE Digital Technologies help</a>, and for the habit behind this project, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Whyalla and South Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' },
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/sace-mathematical-methods-tutoring', label: 'SACE Methods' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-whya .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.2rem); }
.cg-root.cg-whya .cg-hero h1 { font-weight: 720; letter-spacing: -0.017em; line-height: 1.1; }
.cg-root.cg-whya .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.75rem 1rem; }
.cg-root.cg-whya .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-whya .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-whya .cg-grid-3 { gap: clamp(0.85rem, 2vw, 1.6rem); }
.cg-root.cg-whya .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-whya .cg-table td + td { font-variant-numeric: tabular-nums; text-align: right; }
.cg-root.cg-whya .cg-ladder-col { border-top: 2px solid rgba(80, 98, 58, 0.4); padding-top: 0.9rem; }
.cg-root.cg-whya .cg-callout { border-left: 4px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Whyalla, ABS Census 2021 QuickStats, Significant Urban Area 4008 (read 10 October 2026): 21,154 people; median age 41; 5,539 families; 11,112 private dwellings; average 2.2 people per household; separate house 4,998 (55.8 percent; SA 78.0; Australia 72.3); semi-detached, row or terrace house, townhouse etc 3,497 (39.1 percent; SA 14.6; Australia 12.6); Technicians and Trades Workers 1,537 (17.4 percent; SA 13.2; Australia 12.9); car as driver 6,045 (68.4 percent; SA 63.9; Australia 52.7); aged 10 to 14 1,342 (6.3 percent; SA 5.9; Australia 6.2). ABS ASGS 2021 SUA layer area 40.8706 square kilometres. ABS SAL 2021 polygons at least 80 percent inside the SUA (our overlay): Whyalla, Whyalla Stuart, Whyalla Playford, Whyalla Norrie, Whyalla Jenkins, Mullaquana. IANA tzdb australasia: Australia/Adelaide 9:30 with rule AS (daylight saving from the first Sunday in October to the first Sunday in April). South Australian education department pages returned 403 to automated reads, so no SA term dates are printed.',
    localProject: 'Running maximum and maximum drawdown with itertools.accumulate. ABS Data API dataflow ABS_ANNUAL_ERP_ASGS2021 version 1.2.0, measure ERP, region type SA2, code 406011136 (Whyalla), annual 2001 to 2025, read 10 October 2026. Values: 2001 22,003; 2002 21,982; 2003 21,920; 2004 21,964; 2005 21,898; 2006 21,955; 2007 22,124; 2008 22,228; 2009 22,299; 2010 22,377; 2011 22,471; 2012 22,538; 2013 22,580; 2014 22,624; 2015 22,591; 2016 22,432; 2017 22,162; 2018 22,010; 2019 21,981; 2020 21,944; 2021 21,862; 2022 21,826; 2023 21,851; 2024 21,793; 2025 21,641. Our code (scratchpad au/r7/why.py): first minus last 362 (1.65 percent); running peak 22,624 (2014); maximum drawdown 983 (4.34 percent) at 2025; 11 rises, 13 falls; largest one-year fall 270 (2016 to 2017); largest rise 169 (2006 to 2007); pairwise comparisons 300 against a single pass of 25. SA2 406011137 (Whyalla - North) is 0 in every year.',
    requiredMentions: [
      '21,154',
      '5,539',
      '11,112',
      '3,497',
      '22,624',
      '21,641',
      'maximum drawdown',
      'Whyalla Norrie',
      'itertools.accumulate(values, max)'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Whyalla Significant Urban Area (4008): people, median age, families, dwellings, dwelling structure, occupation, travel to work, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4008' },
      { claim: 'ABS Data API, Estimated Resident Population by SA2 and above (ASGS Edition 3), dataflow ABS_ANNUAL_ERP_ASGS2021.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA2.406011136.A?startPeriod=2001' },
      { claim: 'ABS ASGS 2021 Significant Urban Area and Suburbs and Localities boundaries (geo.abs.gov.au map services).', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SUA/MapServer/0' },
      { claim: 'Python documentation, itertools.accumulate with a func argument such as max.', url: 'https://docs.python.org/3/library/itertools.html#itertools.accumulate' },
      { claim: 'IANA time zone database, australasia file: Australia/Adelaide and rule AS.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'South Australian school term dates: the SA Department for Education pages returned 403 to automated reads and were not circumvented, so no term dates are printed.',
      'Any cause for the rise to 2014 or the fall since (steelworks, mining or other): the page reports the series and our arithmetic only, with no explanation of why it moved.',
      'A direct comparison between the Census urban-area count and the SA2 estimates: different measures over different boundaries.',
      'Treating "Whyalla - North" as a populated area: the published series is zero in every year and is not used.',
      'Income, rent, ancestry, religion, health and Indigenous status figures: excluded by the cluster rules.',
      'Any affiliation with the ABS, the South Australian Government or Whyalla City Council.'
    ]
  }
};
