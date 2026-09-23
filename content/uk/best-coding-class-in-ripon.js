'use strict';
// Ripon (cg- city page, UK cluster Phase 4). Spine: are the floods rising faster than the ordinary flows? Quantile
// regression of log daily mean flow on time at the 10th, 50th, 90th and 99th percentiles (EA Hydrology API, daily mean
// flow, qualified; read 23 September 2026; scratchpad rip/qr.py). Exact fit by a one-dimensional convex search on the
// slope (intercept = tau-quantile of residuals), checked against the full linear program (identical to six decimals);
// 95 percent intervals from 300 bootstrap resamples of whole water years (October to September).
// River Ure at Westwick (station e2db454d, 435608E 467045N, 6.1 km from Ripon's Open Names point; opened 1959): all days,
// water years 1960 to 2025, 24,085 days: 10th +1.2 percent per decade (-1.3 to +4.4), median +1.3 (-1.9 to +4.5), 90th
// +4.1 (+0.5 to +7.3), 99th +4.2 (+1.1 to +6.8). Flags: 1960s all Estimated, 1970s mostly Unchecked, 1982 to 2011 mostly
// Good, 2012 to 2024 Unchecked. Water years 1982 to 2025, Estimated and Suspect days left out, 15,501 days: 10th +4.8
// (-1.1 to +11.5), median +0.1 (-6.0 to +6.6), 90th +3.3 (-1.8 to +8.5), 99th +5.9 (+0.5 to +10.9). Good-only days (10,577,
// leaves out 2012 to 2024): 99th +6.1 (-4.1 to +15.9), reported as a check only.
// River Laver at Ripon Laver Weir (station efe53bb2, 430294E 470949N, 1.0 km from the Open Names point; opened 1977): water
// years 1979 to 2025, 17,167 days (17,309 of 17,878 downloaded days flagged Good): 10th +2.6 (-6.3 to +15.6), median -2.2
// (-8.1 to +7.8), 90th +4.9 (-3.5 to +14.5), 99th +8.7 (-0.5 to +15.0). Estimated and Suspect left out: 99th +6.2 (-1.2 to
// +13.0). River Skell at Alma Weir: 960 Missing days, not analysed.
// Lesson family: quantile regression (different trends at different parts of a distribution), log scale, block bootstrap,
// data-quality flags. Screened 23 September 2026: quantile regression 0 hits in src/pages and content/uk. Distinct from
// Chichester Mann-Kendall (one number per year) and Winchester baseflow filter.
// Heritage read raw 23 September 2026 from Ripon Cathedral's website: home page, the Anglo-Saxon crypt 'the oldest built
// fabric of any English cathedral'; the choir traced back to St Wilfrid, who first introduced singers from Canterbury to
// Ripon; Heritage page, Wilfrid (c634-710), the crypt 'still intact from Wilfrid's original church of 672AD'. NHLE: Ripon
// Minster (Cathedral Church of St Peter and Wilfrid) 1150164, Grade I, listed 27 May 1949; Obelisk 1315492, Grade I, 27 May
// 1949; Ripon Town Hall 1174370, Grade II*; World Heritage Site layer: Studley Royal Park including the ruins of Fountains
// Abbey, list entry 1000094, inscription year 1986, core area 311 hectares.
// Census 2021 via Nomis: Harrogate census district E07000165 162,666 usual residents, 158,140 in households, 4,526
// communal; 27,517 students of 155,382 aged 5 and over (17.7 percent); 124.4 per square km; 5,404 aged 85 and over of
// 162,667 (3.3 percent). MSOAs (House of Commons Library names): Ripon North and West E02005762 6,254, 526 communal, 1,112
// of 6,008 students (18.5 percent), 1,145.5 per square km; Ripon South and East E02005764 10,336, 190 communal, 1,594 of
// 9,908 (16.1 percent), 2,307.9, 424 aged 85 and over (4.1 percent) and 685 aged 70 to 74 (6.6 percent) of 10,336. England
// 20.4 percent, 433.5, 2.4 percent aged 85 and over. OS Open Names places Ripon in North Yorkshire.
// Kill gate: passed. Ripon is small (two MSOAs), but has its own cathedral source, a World Heritage Site on the NHLE, and
// two river gauges inside or beside the city with long daily records.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'RIPON', blurb: 'The small cathedral city where the Ure, Skell and Laver meet, with a project that asks whether floods are rising faster than ordinary flows.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-ripon',
  code: 'rip',
  accent: '#4A4C24',
  accentRationale: 'Ripon: a dark moss green, from the solver (7.25:1 on every paper tint, dE 7.0 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Ripon',
    eyebrow: 'Ripon, North Yorkshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'North Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ripon',
  title: 'Best Coding Classes in Ripon | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Ripon learners aged 6 to 67, from Bondgate and Bishopton to Sharow and Littlethorpe. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Ripon, on a page that uses quantile regression on the River Ure to ask whether the biggest flows are rising while ordinary flows stay put.',
  twitterDescription: 'Ripon learners from six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, starting with a free one.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Ripon Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics and environmental data, mathematics and AI taught live online in English to Ripon children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Ripon',
  capsuleQ: 'What are the best coding classes in Ripon?',
  capsule: 'Ripon South and East, the larger of two middle-layer areas named after the city, had 10,336 usual residents at the 2021 census and 2,307.9 people per square kilometre. Ripon Cathedral describes its Anglo-Saxon crypt as the oldest built fabric of any English cathedral. Ripon learners from six to sixty-seven are taught live on video by our teachers in India, in a private lesson or in a class of five to ten at one stage, at times chosen around the English school day and working hours. There is no charge for the first lesson; afterwards a class place costs USD 100 a month and a private teacher USD 150 a month.',
  lead: 'Rivers meet at Ripon: in Ordnance Survey\'s river network the Laver joins the Skell, and the Skell joins the Ure, within 3 km of the city centre. The Environment Agency measures the Ure at Westwick, 6.1 km downstream, every day since 1959, and the Laver at a weir inside the city since 1977. Our Ripon project asks a sharper question than whether the rivers are rising: are the biggest flows changing in a different way from ordinary ones? Quantile regression answers it by fitting a separate trend line to the 10th, 50th, 90th and 99th percentiles of daily flow. On the Ure since 1982, the top 1% of days has risen by about 5.9% a decade while the middle has hardly moved. On the Laver, the lines point the same way but the record is too short to be sure.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Ripon.',

  picks: {
    eyebrow: 'Course picks for Ripon',
    h2: 'Four courses for the city where the rivers meet',
    intro: 'Go for the course nearest to what the learner already likes doing. Every course here begins with a free live lesson, and no card is needed to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from simple games to a rain gauge chart that grows a bar each day.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to download 67 years of daily river flow and fit trend lines to it.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability, including percentiles, logarithms and how to put an honest range around an estimate.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Data science for adults who need to know whether the extremes in their data are changing, not just the average.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ripon today',
      h2: 'A small city in a wide district',
      intro: 'Results of the 2021 census from the Office for National Statistics, downloaded from Nomis, for the two middle-layer areas the House of Commons Library calls Ripon North and West and Ripon South and East, beside the Harrogate census district and England.',
      body: [
        { kind: 'table', caption: 'Ripon in the 2021 census', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['Ripon North and West', '6,254', '18.5%', '1,145.5'],
          ['Ripon South and East', '10,336', '16.1%', '2,307.9'],
          ['Harrogate census district', '162,666', '17.7%', '124.4'],
          ['England', '56,490,048', '20.4%', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'North and west', p: 'Ripon North and West had 526 residents in communal establishments, and 1,112 of the 6,008 aged five and over were in full-time education.' },
          { h3: 'South and east', p: 'In Ripon South and East, 424 residents were aged 85 or over, 4.1% of the area\'s age table, against 2.4% across England, and 685 were aged 70 to 74.' },
          { h3: 'The district', p: 'The Harrogate census district, which included Ripon in 2021, averaged 124.4 residents per square kilometre, with 158,140 people living in households.' }
        ] },
        { kind: 'p', text: 'Ordnance Survey\'s Open Names now places Ripon in North Yorkshire. Each percentage above uses its own table\'s total, since census tables are adjusted separately for privacy. Our Ripon learners come from the city and the villages around it. A Clotherholme nine-year-old coding a first quiz, a Bishopton student in Year 13 finishing an A level project and a Sharow adult learning Python to track a small farm\'s records could each be placed in a different class by level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Wilfrid\'s city',
      h2: 'A crypt from the 7th century',
      intro: 'From Ripon Cathedral\'s own website, and from Historic England\'s National Heritage List.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'St Wilfrid', p: 'The cathedral gives Wilfrid\'s dates as about 634 to 710 and records that its choir traces back to him, since he first brought singers from Canterbury to Ripon.' },
          { h3: '672', p: 'The cathedral says its crypt is still intact from Wilfrid\'s original church of 672, and describes it as the oldest built fabric of any English cathedral.' },
          { h3: '1986', p: 'Studley Royal Park including the ruins of Fountains Abbey, a few kilometres from the city, is a World Heritage Site; the National Heritage List gives 1986 as its inscription year.' }
        ] },
        { kind: 'p', text: 'The National Heritage List records Ripon Minster, the Cathedral Church of St Peter and Wilfrid, at Grade I, listed on 27 May 1949, together with an obelisk, also listed at Grade I, and Ripon Town Hall at Grade II*. For the World Heritage Site it gives a core area of about 311 hectares. We have no connection with Ripon Cathedral or Historic England, and the descriptions quoted here are theirs.' },
        { kind: 'spec', title: 'Where the river data comes from', p: 'The Environment Agency publishes daily mean flow for the River Ure at Westwick and the River Laver at Ripon Laver Weir, with a quality flag on every day: Good, Estimated, Unchecked, Suspect or Missing. The flags matter for this project, because they change over the decades.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Are the floods rising faster than the ordinary flows?',
      intro: 'An ordinary trend line follows the average. Quantile regression fits a line through a chosen percentile instead, so one line can follow the low flows, another the middle, another the top 1% of days. If the lines slope differently, the shape of the river\'s year is changing, not just its level.',
      body: [
        { kind: 'table', caption: 'Change per decade in daily mean flow at four percentiles, with 95% ranges from 300 resamples of whole water years (October to September). Environment Agency data.', head: ['River and record', '10th percentile', 'Median', '90th percentile', '99th percentile'], rows: [
          ['Ure at Westwick, 1960 to 2025, every day', '+1.2% (-1.3 to +4.4)', '+1.3% (-1.9 to +4.5)', '+4.1% (+0.5 to +7.3)', '+4.2% (+1.1 to +6.8)'],
          ['Ure at Westwick, 1982 to 2025, estimated and suspect days left out', '+4.8% (-1.1 to +11.5)', '+0.1% (-6.0 to +6.6)', '+3.3% (-1.8 to +8.5)', '+5.9% (+0.5 to +10.9)'],
          ['Laver at Ripon, 1979 to 2025, every day', '+2.6% (-6.3 to +15.6)', '-2.2% (-8.1 to +7.8)', '+4.9% (-3.5 to +14.5)', '+8.7% (-0.5 to +15.0)']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Work in logarithms', p: 'Flows range from a trickle to a flood, so take the logarithm of each day\'s flow. A slope then reads as a percentage change per decade, the same for small and large flows.' },
          { h3: '2. Fit each percentile', p: 'For the 99th percentile, find the line with 1% of days above it and 99% below, weighting misses so that the line settles exactly there. Repeat for the 10th, 50th and 90th.' },
          { h3: '3. Resample whole years', p: 'Wet and dry days come in runs, so resample entire water years, 300 times, and refit. The middle 95% of the refitted slopes gives the range in brackets.' }
        ] },
        { kind: 'callout', h3: 'Why the second row matters most', p: 'The Ure\'s full record looks convincing: both high percentiles rise with ranges clear of zero. But every day in the 1960s is flagged Estimated and most of the 1970s Unchecked, so the early years could be steering the answer. Starting in 1982 and leaving out estimated and suspect days, the 99th percentile still rises by 5.9% a decade, with a range from +0.5% to +10.9%, while the median sits at +0.1%. The 90th percentile\'s range now crosses zero. So the firmest statement is about the very top 1% of days, and it survives the check.' },
        { kind: 'p', text: 'The Laver, inside the city, tells the same kind of story without the certainty: its top 1% of days rises by 8.7% a decade in the central estimate and its median falls slightly, but every range includes zero. A smaller river with 47 years of data simply cannot pin a trend down as tightly as the Ure. The honest conclusion is that on the Ure the largest flows have risen since 1982 while typical flows have not, and the Laver is consistent with that but cannot confirm it on its own.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Trends in the extremes',
      h2: 'Five checks before saying the extremes are changing',
      intro: 'Learned on Ripon\'s rivers, then used for delivery delays, hospital waiting times, website load times, exam marks and any measure where the worst cases matter more than the average.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Ripon river study', head: ['Question', 'For the Ure and the Laver', 'What goes wrong if you skip it'], rows: [
          ['Which part of the spread matters?', 'Four percentiles fitted separately', 'An unchanged average hiding rising extremes'],
          ['Is the scale sensible?', 'Logarithms, so slopes are percentages', 'Floods swamping every other day in the fit'],
          ['Are the days independent?', 'Whole water years resampled', 'Ranges far too narrow for runs of wet weather'],
          ['What do the quality flags say?', 'Rerun from 1982 without estimated days', 'Early estimates steering a long-term trend'],
          ['Does a second river agree?', 'The Laver fitted the same way', 'One gauge treated as the whole story']
        ] },
        { kind: 'p', text: 'The fourth row changed the conclusion. Leaving out the 1960s and 1970s did not remove the rise at the very top, but it did remove the certainty at the 90th percentile. Dropping every unchecked day as well would throw away 2012 to 2024, the most recent years, so that version is only a check: its 99th percentile estimate is still +6.1% a decade, with a much wider range. Quality flags are information to weigh, not a filter to apply without thinking.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Lining up a class\'s heights, finding the middle and the tallest few, and noticing that the two can change in different ways.' },
          { h3: 'Teenagers', p: 'Percentiles, logarithms, quantile regression and a block bootstrap in Python on Environment Agency river data.' },
          { h3: 'Adults', p: 'Checking whether the worst cases in a service or process are changing, with data quality weighed rather than ignored.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Environment Agency, Ordnance Survey, Ripon Cathedral, Historic England or North Yorkshire Council. The flow records and census tables are published openly; the quantile regressions and resampling on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the tallest in the class to quantile regression',
    intro: 'The ages are approximate; the free lesson settles where a learner starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Middles and extremes', p: 'Sorting numbers, finding the middle and the biggest, and drawing them as bars in block code.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Percentiles in Python', p: 'Lists, sorting and percentiles in Python, with charts that show how the top and middle of a set differ.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Trends in every part', p: 'Logarithms, quantile regression and resampling on real Environment Agency records.', courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Ages 18 to 67', h3: 'Extremes at work', p: 'Measuring whether the slowest, largest or worst cases are changing, with honest ranges and quality checks.', courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI summarises data with averages. Why should a Ripon teenager look past them?',
    intro: 'Because the average of the Ure has barely moved while its biggest days have risen, and an average-only summary would miss that entirely.',
    p1: 'Ask an AI assistant whether the Ure is changing and it may well report a steady average and move on. The flood days that matter to people along a river sit in the top percentiles, and they need their own line. A learner who has fitted those lines knows to ask what is happening at the edges, not only in the middle.',
    p2: 'The quality flags teach the other habit. An automated analysis would happily use every day, estimated or not. A person who has seen how much the 1960s and 1970s could sway the answer learns to ask how each number was produced before trusting a trend built on it.',
    closer: 'So a Ripon teenager should keep learning to code in 2026, beside a cathedral whose crypt dates from 672: AI can draw the average in an instant, but people still have to look at the extremes.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bondgate, Littlethorpe or Studley Roger, all in the same class',
    intro: 'Ripon is compact, and many of its learners live in the villages along the rivers around it. Online, a village a few miles out is as close to the lesson as the city centre.',
    cells: [
      { h3: 'City and river villages', p: 'A learner in Ure Bank and another in Copt Hewick can take the same class without anyone travelling.' },
      { h3: 'In step with school', p: 'Learners are placed by English school year, and our stages carry the familiar GCSE and A level names; all lessons are taught in English.' },
      { h3: 'The free lesson', p: 'The learner builds something real in the first session, and the teacher then recommends a level, a course and a weekly time. We never take card details.' },
      { h3: 'Classes by stage', p: 'Between five and ten learners at a single level, from Ripon, the rest of the UK and further away, so every stage has good times on offer.' },
      { h3: 'A regular week', p: 'Two fixed lessons a week, about eight a month, with holidays and exam periods agreed with the teacher in good time.' },
      { h3: 'Indian evenings', p: 'Because India stays on one time all year, a 5 pm Ripon lesson is at half past nine in the evening for our teachers in summer and half past ten in winter.' }
    ],
    spec: { title: 'Around North Yorkshire', p: 'Learners in Harrogate, Thirsk, Knaresborough or Boroughbridge join the very same classes, as every lesson is online and classes are set by level.' }
  },

  fees: {
    h2: 'Ripon lesson fees',
    intro: 'A free first lesson, followed by one fee a month.',
    first: 'One full lesson without charge, ending with a suggested level, course and weekly slot.',
    group: 'Around eight live lessons a month in a class of five to ten learners at the same stage.',
    private: 'Around eight live lessons a month, with the teacher\'s attention on your learner alone.',
    closer: 'Families in North Stainley or Bishop Monkton pay in US dollars, like all families outside India, and our site never lists pound prices. We send no bill before the free lesson is over and a course and weekly slot have been agreed; the pricing page explains how breaks, missed lessons and a switch between class and private teaching are handled.'
  },

  reviewsH2: 'Six family reviews from Google, word for word',

  book: {
    h2: 'Book a free lesson for a Ripon learner',
    intro: 'Each first lesson is shaped around the learner: a tallest-and-middle sorting game for a young child, a short Python program that finds percentiles in a list for a beginner, or 67 years of Ure flow data and quantile regression for a teenager ready for real statistics.',
    success: 'Thank you. We will be in touch soon to set up the lesson for your Ripon learner.'
  },

  faq: {
    h2: 'Ripon coding class questions',
    intro: 'Questions we hear most from Ripon families.',
    items: [
      { q: 'How many people live in Ripon?', a: 'Census 2021 counted 6,254 usual residents in Ripon North and West and 10,336 in Ripon South and East, the two middle-layer areas the House of Commons Library names after the city. The Harrogate census district, which included Ripon, had 162,666.' },
      { q: 'How does the area compare with England?', a: 'The Harrogate census district is thinly settled, at 124.4 residents per square kilometre against 433.5 for England. In Ripon South and East, 4.1% of residents were aged 85 or over in 2021, against 2.4% nationally.' },
      { q: 'What is quantile regression?', a: 'A way to fit a trend line through a chosen percentile of the data rather than through the average. Fitting several lines, for low, middle and high values, shows whether different parts of a distribution are changing in different ways.' },
      { q: 'Are floods on the River Ure getting bigger?', a: 'At Westwick, from 1982 to 2025 and leaving out estimated and suspect days, the top 1% of daily flows rose by about 5.9% a decade, with a range from 0.5% to 10.9%, while the median barely changed. The Laver in Ripon points the same way but its range includes zero.' },
      { q: 'Where does the river data come from?', a: 'From the Environment Agency\'s hydrology data service, which publishes daily mean flow for the Ure at Westwick and the Laver at Ripon Laver Weir, with a quality flag on every day. We are not connected with the Environment Agency.' },
      { q: 'How old is Ripon Cathedral?', a: 'The cathedral says its crypt is still intact from St Wilfrid\'s original church of 672, and describes it as the oldest built fabric of any English cathedral. Historic England lists the building at Grade I.' },
      { q: 'When do Ripon lessons take place?', a: 'Ripon families mostly choose a time straight after school, a weekday evening or a weekend morning, and we fix it at the free lesson. With our teachers in India, a North Yorkshire evening is late for them: four and a half hours later on the clock in British Summer Time, five and a half in winter.' },
      { q: 'Do you have a Ripon centre?', a: 'No. We have no centre in Ripon or anywhere else in the UK, since every lesson is live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Ripon lessons cost?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same schedule is USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are Ripon learners grouped?', a: 'By level, pace and goals rather than by age or where they live, with five to ten learners at the same stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'Yorkshire and beyond',
    html: 'Down the road, the <a class="cg-inline-link" href="/best-coding-class-in-york">York page</a> compresses street names with Huffman coding, and <a class="cg-inline-link" href="/best-coding-class-in-wakefield">Wakefield</a> adds up a river\'s flow with the trapezium rule. <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> has its own page too. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out how our levels match English schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ripon and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-york', label: 'York' },
    { href: '/best-coding-class-in-wakefield', label: 'Wakefield' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-rip .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-rip .cg-hero h1 { font-weight: 770; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-rip .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-rip .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rip .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.013em; }
.cg-root.cg-rip .cg-grid-3 { gap: clamp(1.05rem, 2.8vw, 2.25rem); }
.cg-root.cg-rip .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-rip .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rip .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-rip .cg-callout { border-left-width: 5px; border-radius: 1px; }
`,

  dossier: {
    curriculumAuthority: 'Census 2021 via Nomis. Harrogate census district E07000165: TS001 162,666 usual residents, 158,140 in households, 4,526 communal; TS068 27,517 of 155,382 aged 5 and over (17.7 percent); TS006 124.4 per square kilometre. Ripon North and West E02005762 6,254, 526 communal, 1,112 of 6,008 (18.5 percent), 1,145.5; Ripon South and East E02005764 10,336, 190 communal, 1,594 of 9,908 (16.1 percent), 2,307.9, 424 aged 85 and over (4.1 percent), 685 aged 70 to 74. England 20.4 percent, 433.5, 2.4 percent aged 85 and over. Ripon Cathedral: crypt from Wilfrid\'s church of 672, oldest built fabric of any English cathedral (attributed); Wilfrid c634 to 710; singers from Canterbury. NHLE 1150164 and 1315492 (Grade I, 27 May 1949), 1174370 (II*); WHS 1000094, 1986, core area about 311 hectares.',
    localProject: 'Are the floods rising faster than the ordinary flows? EA Hydrology daily mean flow, quantile regression of log flow on time at the 10th, 50th, 90th and 99th percentiles, 300 water-year bootstrap resamples. Ure at Westwick 1960 to 2025 all days: +1.2, +1.3, +4.1 (+0.5 to +7.3), +4.2 (+1.1 to +6.8) percent per decade. Ure 1982 to 2025 without Estimated and Suspect: +4.8, +0.1, +3.3 (-1.8 to +8.5), +5.9 (+0.5 to +10.9). Good-only check 99th +6.1 (-4.1 to +15.9). Laver 1979 to 2025: +2.6, -2.2, +4.9, +8.7 (-0.5 to +15.0). Lesson family: quantile regression.',
    requiredMentions: [
      '1,145.5',
      '2,307.9',
      '162,666',
      'quantile regression',
      'Westwick',
      'Skell',
      'Wilfrid',
      'Studley',
      'Bishopton',
      'Sharow',
      'Littlethorpe',
      'Clotherholme'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Harrogate census district 162,666; Ripon North and West 6,254; Ripon South and East 10,336.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E02005762,E02005764,E07000165' },
      { claim: 'Nomis, Census 2021 TS007A: age bands for the two Ripon areas and the district.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E02005762,E02005764,E07000165' },
      { claim: 'Nomis, Census 2021 TS068: students among usual residents aged 5 and over.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E02005762,E02005764,E07000165,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E02005762,E02005764,E07000165,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: Ripon North and West, Ripon South and East.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Environment Agency hydrology data, River Ure at Westwick: daily mean flow with quality flags.', url: 'https://environment.data.gov.uk/hydrology/id/measures/e2db454d-9cdd-43b0-b47c-6fb047bd6fb4-flow-m-86400-m3s-qualified' },
      { claim: 'Environment Agency hydrology data, River Laver at Ripon Laver Weir: daily mean flow with quality flags.', url: 'https://environment.data.gov.uk/hydrology/id/measures/efe53bb2-d752-4aa6-af43-e2240eae3675-flow-m-86400-m3s-qualified' },
      { claim: 'Ripon Cathedral, home page: Anglo-Saxon crypt, oldest built fabric of any English cathedral; singers from Canterbury.', url: 'https://www.riponcathedral.org.uk/' },
      { claim: 'Ripon Cathedral, Heritage: Wilfrid c634 to 710; crypt still intact from Wilfrid\'s original church of 672AD.', url: 'https://riponcathedral.org.uk/heritage/' },
      { claim: 'Historic England, National Heritage List for England: 1150164, 1315492, 1174370; World Heritage Site 1000094.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1000094' },
      { claim: 'Ordnance Survey, OS Open Names: Ripon and nearby places.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' },
      { claim: 'Ordnance Survey, OS Open Rivers: the Laver joins the Skell and the Skell joins the Ure within 3 km of Ripon.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-rivers' }
    ],
    rejectedClaims: [
      'That the Ure\'s high flows rose because of any particular cause, or that early peaks were capped by the gauge: not established from a fetched source; the page reports only the flags and the fits.',
      'Treating the Good-only fit as the main result: it leaves out every unchecked day from 2012 to 2024, so it is reported as a check only.',
      'The Ripon hornblower tradition: the city council websites tried did not connect, so it is not described.',
      'A date for the change from Harrogate district to North Yorkshire Council: not taken from a fetched source; the page says only that Open Names places Ripon in North Yorkshire.',
      'The location of the Grade I obelisk: the list entry name gives none, so the page does not place it.',
      'A combined population for Ripon: the two middle-layer areas are given separately and not added.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Ripon Cathedral, Historic England, Ordnance Survey or North Yorkshire Council.'
    ]
  }
};
