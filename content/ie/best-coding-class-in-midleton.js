'use strict';
// Midleton (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Midleton, Co Cork" and CSO table F7140 (persons at work by
// working-from-home days and broad industry, State), read 19 September 2026, and
// the Irish Rail station page for Midleton. Spine: the ecological fallacy. Across
// the 262 towns with 500 or more working residents, towns with a larger share of
// workers in agriculture, forestry and fishing have lower home-working shares
// (median 39.1 percent in the lowest band down to 20.8 in the highest; unweighted
// line 33.9 - 2.97 x share, r = -0.43, same shape without the five cities). Read
// about people, that says farm workers seldom work from home. The national table
// of individuals says the reverse: 54.9 percent of agriculture workers who answered
// work from home at least one day, against 36.3 percent of all workers. All run in
// this session (scratchpad eco/eco.js). Midleton: 30 of 6,455 at work in
// agriculture, 1,918 of 5,936 who answered work from home. The Cork county page
// owns the census-night population, density and average age; none used here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'MIDLETON', blurb: 'Across 262 towns, more farm workers means less home-working. Among the workers themselves it runs the other way. A page on patterns that change sign between places and people.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-midleton',
  code: 'mdt',
  accent: '#6B6447',
  accentRationale: 'Midleton: a barley-olive from the solver, apart from the Cork county, Cobh and Carrigaline accents around the harbour',
  pageType: 'city',
  place: {
    name: 'Midleton',
    eyebrow: 'Midleton, County Cork',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Cork' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-cork', name: 'County Cork' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Cork', href: '/coding-classes-in-county-cork' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Midleton, County Cork, Ireland',
  title: 'Best Coding Class in Midleton | Modern Age Coders',
  description: 'Live online coding, Python, data and AI classes for Midleton learners aged 6 to 67, in small level-matched groups or one to one. The first lesson costs nothing.',
  ogDescription: 'Coding and AI classes for Midleton, with a data project on a pattern across towns that points the opposite way for the people in them.',
  twitterDescription: 'Coding, Python, data and AI for Midleton learners aged 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Midleton',
    description: 'Online coding, Python, AI, data and mathematics grouped by level for children, teenagers and adults in Midleton, County Cork, taught live in English.'
  },

  h1: 'Coding classes in Midleton',
  capsuleQ: 'What is the best coding class in Midleton?',
  capsule: 'Midleton\'s 13,779 usual residents live in 4,969 households, and 4,163 of those households have broadband, which is the only connection our lessons need. A teacher takes each lesson live on video, with a few learners at the same stage or with one learner alone, about twice a week, for ages six to sixty-seven. The first lesson is free. After it, a place in a group costs USD 100 a month and private teaching USD 150.',
  lead: 'Census 2022 asked every worker whether they work from home, and in Midleton 1,918 of the 5,936 who answered said they do, at least some of the time. Put the same answer for 262 towns on a chart against the share of each town\'s workers in farming, forestry and fishing, and a clear line appears: the more farm workers a town has, the less home-working. It is tempting to read that as a fact about farm workers. The CSO also publishes the answer for workers themselves, grouped by industry, and it points the other way: 54.9 percent of workers in agriculture, forestry and fishing work from home at least one day, against 36.3 percent of all workers. This page builds both views and explains how a pattern among places can reverse among the people who live in them.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Midleton.',

  picks: {
    eyebrow: 'Course picks for Midleton',
    h2: 'Starting points for Midleton learners',
    intro: 'Choose on age and interest; the course teacher uses the first lesson to confirm where to start.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that sort sprites into groups and count them, the first step to any chart.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Percentages, averages and simple charts made by a program, then questioned by the learner.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Scatter plots, fitted lines and correlation on real census tables, with the limits spelled out.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who read regional or branch-level figures at work and must not turn them into claims about individuals.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Draw the chart across 262 towns, then ask the people',
      intro: 'Two census tables answer what sounds like the same question. One compares towns, the other compares workers. The learner builds both and finds they disagree about the direction of the effect.',
      body: [
        { kind: 'table', caption: 'Towns with 500 or more working residents, grouped by the share of their workers in agriculture, forestry and fishing', head: ['Share of workers in farming', 'Towns', 'Median share who work from home'], rows: [
          ['Under 0.5 percent', '38', '39.1%'],
          ['0.5 to 1 percent', '64', '30.0%'],
          ['1 to 2 percent', '86', '24.5%'],
          ['2 to 4 percent', '62', '22.3%'],
          ['4 percent or more', '12', '20.8%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The town line', p: 'Fitted through the 262 towns, the line starts at 33.9 percent working from home and falls 2.97 points for every extra point of farm workers. The correlation is minus 0.43, and the slope keeps its sign with the five cities taken out.' },
          { h3: 'The people', p: 'Across the State, 36,996 of the 67,394 agriculture, forestry and fishing workers who answered work from home at least one day, 54.9 percent. For all workers it is 747,961 of 2,061,239, or 36.3 percent. Farm workers are above average, not below.' },
          { h3: 'Where Midleton sits', p: 'Thirty of Midleton\'s 6,455 people at work are in farming, forestry or fishing, 0.46 percent, which puts the town in the first band. Its home-working share is 32.3 percent: 1,918 of the 5,936 who answered.' }
        ] },
        { kind: 'table', mt: true, caption: 'Share who work from home at least one day, by industry, all workers in the State who answered (CSO table F7140)', head: ['Industry', 'Work from home'], rows: [
          ['Information and communication', '87.6%'],
          ['Agriculture, forestry and fishing', '54.9%'],
          ['All workers', '36.3%'],
          ['Construction', '16.7%'],
          ['Accommodation and food service', '10.8%']
        ] },
        { kind: 'callout', h3: 'A pattern across places is not a pattern across people', p: 'The town chart is a true statement about towns: in 2022, towns where more of the workforce farmed had lower home-working shares. It is not a statement about farm workers, and treating it as one gives exactly the wrong answer. Pushed to its limit, the fitted line would give a town where every worker farms a home-working rate of minus 263 percent, which no group of people could have. Questions about people need data recorded about people. Data about places answers questions about places, and nothing more.' },
        { kind: 'p', text: 'In code the learner builds the town view first: one row per town with its farm share and home-working share, a scatter chart of all 262 with Midleton marked, and a fitted line. Then they load the national table of workers by industry and compute the individual rates. The two results disagree in sign, and the exercise that follows is to write two sentences, one the chart supports and one it does not. "Towns with more farm workers had lower home-working shares" passes. "Farm workers seldom work from home" fails, and the learner can show which table proves it wrong.' }
      ]
    },
    {
      id: 'levels', tint: 'tint', eyebrow: 'Two levels, two answers',
      h2: 'How the town view and the worker view can disagree',
      intro: 'Nothing is miscounted in either table. The difference is in what each one compares.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Different comparisons', p: 'The chart compares towns with other towns. The national table compares farm workers with other workers. A result at one level carries no guarantee at the other, even when both come from the same census question.' },
          { h3: 'Something else about the towns', p: 'Whatever makes a town\'s workforce more agricultural may also go with fewer of the jobs that can be done from home. The chart cannot say what that is, and this page does not guess. It only shows that the town line is not about farm workers.' },
          { h3: 'The name for it', p: 'Statisticians call reading a group-level pattern as an individual one the ecological fallacy. It turns up whenever results by county, school, branch or country are used to describe the people inside them.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not say why farm-heavy towns have less home-working. It also notes that the national table covers every worker in the State, including those who live outside towns, so it is the individual answer for all farm workers rather than for town residents alone.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Midleton in the resident tables',
      intro: 'Published for the town Midleton, Co Cork, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Midleton, Co Cork, Census 2022', head: ['Counted', 'Number'], rows: [
          ['Usual residents', '13,779'],
          ['Households', '4,969'],
          ['Households with broadband', '4,163'],
          ['Working residents in the travel table', '6,408'],
          ['Journeys to school, college or childcare', '4,013'],
          ['Children under fifteen in childcare', '1,019'],
          ['People at work in agriculture, forestry and fishing', '30 of 6,455']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Journeys to work', p: 'Of 6,408 working residents, 4,002 drive. Then 687 work mainly at or from home, 542 walk, 279 travel as a car passenger, 264 by van, 186 by train, 102 by bus and 66 by bicycle.' },
          { h3: 'Journeys to school', p: 'Of 4,013 journeys to school, college or childcare, 2,181 are made as a car passenger and 837 on foot; 386 go by bus, 173 by train and 143 learners drive.' },
          { h3: 'Home-working', p: 'Asked directly, 1,918 working residents work from home at least some of the time, 4,018 never do, and 472 left the question unanswered.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the station as Midleton, Co.Cork, Eircode P25 RX85, with sheltered bike parking there. It has no connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Midleton learners',
      intro: 'A regular pair of lessons in most weeks, with the teacher live all the way through.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The census-night age table counts 1,561 children aged six to twelve in Midleton. They begin with blocks and games and learn to count and sort before they chart anything.' },
          { h3: 'Teenagers', p: 'For the 1,414 aged thirteen to eighteen: Python, websites, AI and data work with real tables, from first year through the Leaving Cert years.' },
          { h3: 'Adults', p: 'Adults join with whatever they bring, including nothing. The opening lesson places them and the course takes it from there.' }
        ] },
        { kind: 'p', text: 'Census counts are Central Statistics Office figures printed as published. Bands, medians, the fitted line and the industry rates were computed from the town tables and table F7140 on 19 September 2026. Irish Rail is quoted from its own station page and is not connected with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting into groups to reading groups honestly',
    intro: 'Ages are only a guide; the first lesson finds the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sort and count', p: 'Block-coded games that put things into groups and count each group correctly.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'First charts', p: 'Programs that turn a small table into a chart, and a habit of asking what each dot stands for.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Lines and levels', p: 'Scatter plots, fitted lines and correlation, and the difference between data on places and data on people.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Regional figures at work', p: 'Reading branch, county or country results without making claims about the individuals inside them.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant what the chart means',
    intro: 'Show it the scatter plot and it will describe it. Whether the description is about towns or people is the part to check.',
    p1: 'Give an AI assistant the town chart and ask what it shows, and a natural-sounding summary is that farm workers are less likely to work from home. It reads well, and it is the ecological fallacy in one line. Nothing in the chart supports a claim about individuals, and the national table contradicts it.',
    p2: 'A learner who has done this project asks the assistant to label every sentence it writes as being about towns or about people, then checks each one against the table that would support it. That habit transfers to every chart they will ever be shown.',
    closer: 'An assistant can draw the chart in seconds. Knowing which kind of question it can answer is still the analyst\'s job.',
    blogAnchor: 'why learning to code still repays the time'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons are run for Midleton',
    intro: 'The arrangements.',
    cells: [
      { h3: 'Taught live', p: 'The teacher leads every lesson in real time and works from what the learner has built.' },
      { h3: 'Level groups', p: 'Five to ten learners at one stage, from East Cork, the rest of Ireland and abroad.' },
      { h3: 'Twice most weeks', p: 'About eight lessons in a month, on days and at times agreed before starting.' },
      { h3: 'Around the school year', p: 'Mid-terms, holidays and exam periods are allowed for from the start.' },
      { h3: 'Equipment', p: 'A laptop or desktop is needed rather than a tablet, with a microphone and speakers or a headset, on the kind of home broadband 4,163 Midleton households already have.' },
      { h3: 'Private option', p: 'When a learner\'s level has no group at a time they can attend, or they want the teacher to themselves, lessons run one to one.' }
    ],
    spec: { title: 'Taught from nowhere in particular', p: 'Midleton learners join every lesson on video. We have no premises in Midleton or elsewhere in Ireland, and the lesson is the same at any kitchen table with a connection.' }
  },

  fees: {
    h2: 'Fees for Midleton',
    intro: 'The full list.',
    first: 'A full first lesson with a level assessment, free.',
    group: 'A month in a group of five to ten at the same level, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same weekly frequency.',
    closer: 'We charge by the month, in US dollars, at one rate for every country outside India. The opening lesson is free with no obligation, the first charge follows only once a course and a time are agreed, and the pricing page deals with holidays, missed lessons and changing between a group and private lessons.'
  },

  reviewsH2: 'What six families wrote on Google, reproduced without edits',

  book: {
    h2: 'Book a free first lesson for Midleton',
    intro: 'Let us know the learner\'s age and interests and we will plan the first hour to suit. It could end with a game, a first program, or a chart that says exactly what it can and no more.',
    success: 'Thank you. We will contact you about the lesson shortly.'
  },

  faq: {
    h2: 'Midleton coding class questions',
    intro: 'What Midleton families usually want to know first.',
    items: [
      { q: 'How many people live in Midleton?', a: 'The Census 2022 resident tables count 13,779 usual residents in Midleton, in 4,969 households, of which 4,163 have broadband.' },
      { q: 'What is the data project on this page?', a: 'Charting 262 towns by their share of farm workers and their share of home-workers, which shows a clear downward line, then checking it against the national figures for workers themselves, where 54.9 percent of agriculture workers work from home against 36.3 percent of all workers. The two levels disagree.' },
      { q: 'So do farm workers work from home more or less?', a: 'More, according to the census table of individual workers: 54.9 percent at least one day a week, compared with 36.3 percent overall. The town chart cannot answer that question at all, because it describes towns, not the people in them.' },
      { q: 'How do Midleton residents get to work?', a: 'Of 6,408 working residents, 4,002 drive, 687 work mainly at or from home, 542 walk, 279 go as a car passenger, 264 by van, 186 by train and 102 by bus.' },
      { q: 'When are lessons?', a: 'After school, in the evening and at weekends. Our teachers in India are four and a half hours ahead of Midleton for the Irish summer and five and a half hours ahead in winter, and slots are picked to work for both.' },
      { q: 'Are adults welcome?', a: 'Yes, up to sixty-seven and from any starting point. After the first lesson an adult learns either in a group at the right level or one to one.' },
      { q: 'Will Midleton learners be grouped together?', a: 'Only by chance. Groups are made by level, so a Midleton learner may share a lesson with others in Cobh, Cork city or another country.' },
      { q: 'Is there a Modern Age Coders classroom in Midleton?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Midleton cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'More of East Cork and beyond',
    html: 'Close by in the series are <a class="cg-inline-link" href="/best-coding-class-in-cobh">Cobh</a> and <a class="cg-inline-link" href="/best-coding-class-in-carrigaline">Carrigaline</a>, with <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork city</a> and the <a class="cg-inline-link" href="/coding-classes-in-county-cork">County Cork</a> page above them and <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a> above that. If you are weighing up online coding schools, <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this comparison</a> sets them side by side, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists the lot.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Midleton, Cork and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-cork', label: 'County Cork' },
    { href: '/best-coding-class-in-cobh', label: 'Cobh' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-mdt .cg-hero-grid { align-items: start; gap: clamp(1.14rem, 3.25vw, 2.64rem); }
.cg-root.cg-mdt .cg-hero h1 { font-weight: 650; letter-spacing: -0.0166em; line-height: 1.06; }
.cg-root.cg-mdt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.26rem; }
.cg-root.cg-mdt .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mdt .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.0141em; }
.cg-root.cg-mdt .cg-grid-3 { gap: clamp(1.04rem, 2.77vw, 2.18rem); }
.cg-root.cg-mdt .cg-table caption { letter-spacing: 0.045em; font-weight: 700; }
.cg-root.cg-mdt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mdt .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-mdt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.08rem; }
.cg-root.cg-mdt .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Midleton, Co Cork, CSO Census 2022 Small Area Population town tables and CSO table F7140, read 19 September 2026. SAP2022T11T4TOWN22: all working persons 6,408, work from home 1,918, never 4,018, not stated 472 (1,918 of 5,936 answering, 32.3 percent). SAP2022T14T1TOWN22: persons at work 6,455, agriculture, forestry and fishing 30 (0.46 percent). SAP2022T2T1TOWN22: usual residents 13,779. SAP2022T15T2TOWN22: households 4,969, broadband 4,163, no internet 358, other 140, not stated 308. SAP2022T11T1TOWN22 to work total 6,408: car driver 4,002, work mainly at or from home 687, on foot 542, car passenger 279, van 264, train DART or Luas 186, bus 102, bicycle 66, not stated 254; to school, college or childcare total 4,013: car passenger 2,181, on foot 837, bus 386, train 173, car driver 143, not stated 193. SAP2022T11T5TOWN22: 1,019 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,561, ages 13 to 18 to 1,414. Town-level analysis in this session over the 262 towns with 500 or more all working persons in T11T4, home-working share = work from home / (all working persons less not stated), farm share = agriculture, forestry and fishing / total at work in T14T1. Bands by farm share, towns and median home-working share: under 0.5 percent 38, 39.1; 0.5 to 1 percent 64, 30.0; 1 to 2 percent 86, 24.5; 2 to 4 percent 62, 22.3; 4 percent or more 12, 20.8. Unweighted least-squares line 33.9 percent minus 2.97 times farm share, r = -0.43, value at a farm share of 100 percent -263 percent; worker-weighted slope -6.66, r = -0.60; without the five city and suburbs rows the weighted slope is -3.83, r = -0.44, and band medians are unchanged or near-unchanged. CSO F7140, Population Aged 15 Years and Over at Work by Working from Home Days, 2022, State: total at work 1 or more days working from home 747,961, does not work from home 1,313,278 (36.3 percent of those answering); Agriculture, forestry and fishing (A) 36,996 and 30,398 (54.9 percent); Construction (F) 16.7 percent; Accommodation and food service activities (I) 10.8 percent; Information and communication (J) 87.6 percent. Irish Rail, Midleton: "Midleton, Co.Cork", "Eircode P25 RX85", "There is sheltered bike parking at the station".',
    localProject: 'The ecological fallacy, found in real tables. Across the 262 towns with 500 or more working residents, the share of workers who work from home falls as the share in agriculture, forestry and fishing rises: median 39.1 percent in towns under 0.5 percent farm workers, 30.0 from 0.5 to 1, 24.5 from 1 to 2, 22.3 from 2 to 4 and 20.8 at 4 or more; the unweighted line is 33.9 minus 2.97 times the farm share, r = -0.43, and the sign holds with the cities removed and with worker weighting. Read about people, that says farm workers seldom work from home. The CSO\'s national table of workers by industry (F7140) says the opposite: 54.9 percent of agriculture, forestry and fishing workers who answered work from home at least one day, against 36.3 percent of all workers. Extending the town line to a town made entirely of farm workers gives -263 percent, an impossible rate for people. Midleton sits in the first band with 30 of 6,455 at work in farming and 1,918 of 5,936 working from home. The learner writes one sentence the town chart supports and one it does not, and names the table that decides each. New family for the cluster: level of analysis, places versus people.',
    requiredMentions: [
      '13,779',
      '4,969',
      '4,163',
      '6,408',
      '4,002',
      '1,918',
      '4,013',
      '2,181',
      '1,019',
      '54.9',
      '262',
      'P25 RX85'
    ],
    sources: [
      { claim: 'CSO Census 2022 tables SAP2022T11T4TOWN22 and SAP2022T14T1TOWN22, all towns: working from home status and persons at work by industry, used for the 262-town analysis. Midleton, Co Cork: all working persons 6,408, work from home 1,918, never 4,018, not stated 472; persons at work 6,455, agriculture, forestry and fishing 30.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T14T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO table F7140, Population Aged 15 Years and Over at Work by Working from Home Days, 2022, State: total 747,961 work from home 1 or more days and 1,313,278 do not; Agriculture, forestry and fishing (A) 36,996 and 30,398; Construction (F), Accommodation and food service activities (I) and Information and communication (J) as used for the industry rates.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F7140/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Midleton, Co Cork: usual residents 13,779; households 4,969, broadband 4,163; to work 6,408 with car driver 4,002, mainly at or from home 687, on foot 542, car passenger 279, van 264, train 186, bus 102, bicycle 66; to school, college or childcare 4,013 with car passenger 2,181, on foot 837, bus 386, train 173, car driver 143; 1,019 children under 15 in childcare; 1,561 aged 6 to 12 and 1,414 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Midleton station: "Midleton, Co.Cork", "Eircode P25 RX85", "There is sheltered bike parking at the station".', url: 'https://www.irishrail.ie/en-ie/station/midleton' }
    ],
    rejectedClaims: [
      'Any reason why towns with more farm workers have less home-working.',
      'Any statement about farm workers drawn from the town chart.',
      'Treating the national industry rates as rates for town residents only: F7140 covers every worker in the State.',
      'Mapping the other seven town industry groups onto national industry sections: only agriculture, forestry and fishing carries the same name in both tables.',
      'The census-night population, density and average age for Midleton: the County Cork page owns them.',
      'Any claim about the Midleton rail line\'s history or service levels.'
    ]
  }
};
