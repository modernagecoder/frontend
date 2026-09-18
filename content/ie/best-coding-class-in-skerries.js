'use strict';
// Skerries (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Skerries, Co Dublin" and the Irish Rail station page for
// Skerries, read 19 September 2026. Skerries Mills' site returned 403 and is not
// quoted. Spine: composite indicators, where the weights choose the winner. A
// made-up score for the 53 towns of 10,000+ usual residents combines three census
// shares (broadband share of households; honours degree or higher among the
// education-ceased population; journeys under 15 minutes), min-max scaled, under
// all 66 weightings in steps of 0.1. Skerries: 94.2, 37.2, 37.9 percent; alone 13th,
// 7th, 26th; equal weights 4th; range 3rd to 26th; top five in 19 of 66, top ten in
// 47. Winners: Maynooth 38 weightings, Shannon 18, Letterkenny 6, Portmarnock 4.
// Correlations across the 53: broadband and degrees 0.70, broadband and short
// journeys -0.74, degrees and short journeys -0.50. Median rank range across towns
// 33 places. Lower-ranked towns deliberately not named. Scratchpad eco/index.js. The
// composite was built and shelved for Mallow and Gorey (both near the bottom); the
// Fingal page owns the census-night population.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'SKERRIES', blurb: 'A made-up league table of 53 towns, tried with 66 different weightings. Skerries lands anywhere from 3rd to 26th, and four towns can come first.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-skerries',
  code: 'skr',
  accent: '#2A499D',
  accentRationale: 'Skerries: a harbour cobalt from the widened solver search, apart from the Fingal, Rush and Portmarnock accents',
  pageType: 'city',
  place: {
    name: 'Skerries',
    eyebrow: 'Skerries, Fingal, County Dublin',
    schemaType: 'City',
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
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Skerries, Fingal, County Dublin, Ireland',
  title: 'Best Coding Class in Skerries | Modern Age Coders',
  description: 'Live online coding, Python, data and AI lessons for Skerries learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free of charge.',
  ogDescription: 'Coding and AI classes for Skerries, with a data project that builds a league table of towns and shows how the weights pick the winner.',
  twitterDescription: 'Coding, Python and AI for Skerries learners aged 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Skerries',
    description: 'Online coding, Python, AI, data and mathematics in groups matched by level for children, teenagers and adults in Skerries, Fingal, County Dublin, taught live in English.'
  },

  h1: 'Coding classes in Skerries',
  capsuleQ: 'What is the best coding class in Skerries?',
  capsule: 'Skerries has 10,666 usual residents, and 3,410 of its households report broadband, the one connection a lesson with us needs. Every lesson is live on video, with a teacher and either a few learners at the same level or a single learner, usually twice a week, for ages six to sixty-seven. A first lesson costs nothing; after it, the monthly price is USD 100 in a group or USD 150 one to one.',
  lead: 'Lists that rank places, from top towns to live in to leading counties for families, are usually built the same way: pick a few indicators, give each a weight, add them up. This page builds one from three census shares for the 53 towns of 10,000 or more people, and Skerries does well under equal weights, coming fourth. Then the learner tries every weighting in steps of a tenth, 66 in all. Skerries lands anywhere from third to twenty-sixth, and four different towns take first place depending on the weights. Nothing about the towns changed. Only the opinion built into the weights did, and that is the lesson worth taking to every league table.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Skerries.',

  picks: {
    eyebrow: 'Course picks for Skerries',
    h2: 'Where Skerries learners usually start',
    intro: 'Four starting courses by age; whichever is chosen, the first lesson is free and decides the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with scoring games, where changing the points for each action changes who wins.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Weighted averages, scaling and ranking built in code and tested on real numbers.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Composite scores, normalisation and sensitivity checks on public data.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who build scorecards, rankings or dashboards and need to defend the weights.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Build a score for towns, then watch the weights pick the winner',
      intro: 'Three census shares, scaled so that the lowest town scores 0 and the highest 1, then combined with weights that add up to one. The learner runs all 66 combinations in steps of a tenth.',
      body: [
        { kind: 'table', caption: 'The three ingredients, with Skerries\' value and its rank on each alone among 53 towns', head: ['Indicator', 'Skerries', 'Rank alone'], rows: [
          ['Households with broadband', '94.2%', '13th'],
          ['Adults with an honours degree or higher', '37.2%', '7th'],
          ['Journeys taking under 15 minutes', '37.9%', '26th']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Equal weights', p: 'Give each indicator a third of the score and Skerries comes fourth of the 53 towns. On its own that looks like a finding about Skerries. It is really a finding about equal weights.' },
          { h3: 'Every weighting', p: 'Across the 66 weightings Skerries ranks anywhere from 3rd to 26th. It is in the top five under 19 of them and the top ten under 47. Put all the weight on short journeys and it falls to 26th.' },
          { h3: 'Four winners', p: 'The town in first place changes too: Maynooth under 38 of the weightings, Shannon under 18, Letterkenny under 6 and Portmarnock under 4. Each could headline its own "number one town" list without a single figure being wrong.' }
        ] },
        { kind: 'table', mt: true, caption: 'Why the weights matter: how the three shares move together across the 53 towns', head: ['Pair of indicators', 'Correlation'], rows: [
          ['Broadband and degrees', '0.70'],
          ['Broadband and short journeys', 'minus 0.74'],
          ['Degrees and short journeys', 'minus 0.50']
        ] },
        { kind: 'callout', h3: 'A league table is a set of weights, dressed as a fact', p: 'When indicators pull in opposite directions, as broadband and short journeys do here, the weights decide the order. Across all 53 towns the median gap between a town\'s highest and lowest position is 33 places. Any ranking built this way should come with its ingredients, its weights and a note of how far the order moves when the weights change. Without those three, it is an opinion that happens to be arithmetic.' },
        { kind: 'p', text: 'The learner computes each share for every town, rescales each so the lowest town scores 0 and the highest 1, and writes a function that takes three weights and returns the ranked list. A double loop generates every weighting that adds to one in steps of a tenth and records where each town lands. From that record come the numbers on this page: Skerries\' highest and lowest position, how often each town is first, and how widely each town\'s rank swings. The final exercise is to write the paragraph that would have to accompany a published version of the table.' }
      ]
    },
    {
      id: 'rankings', tint: 'tint', eyebrow: 'Reading any ranking',
      h2: 'Three questions for every list of places',
      intro: 'The same questions work for rankings of towns, schools, universities or products.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'What went in?', p: 'A different trio of indicators would produce a different table. Choosing them is already a view about what matters.' },
          { h3: 'How was it weighted?', p: 'Equal weights sound neutral but are a choice like any other. Here they put Skerries fourth; other defensible weights put it twenty-sixth.' },
          { h3: 'How much does it move?', p: 'A result that survives most reasonable weightings is worth reporting. One that flips with small changes is a result about the weights.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'The score is made up for teaching and says nothing about where anyone should live. The three indicators were chosen to show the effect of weights, not to measure quality of life, and the towns at the bottom of any weighting are deliberately not named.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Skerries, as recorded in 2022',
      intro: 'Census 2022 small area figures for the town of Skerries, Co Dublin, covering people who usually live there and their households.',
      body: [
        { kind: 'table', caption: 'Skerries, selected census counts', head: ['Topic', 'Skerries'], rows: [
          ['Usual residents', '10,666'],
          ['Households with broadband', '3,410'],
          ['Working residents in the travel table', '4,688'],
          ['Journeys to school, college or childcare', '3,014'],
          ['Children under fifteen in childcare', '836'],
          ['Journeys taking under 15 minutes', '2,315'],
          ['Working residents who take the train', '783']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Travelling to work', p: 'Of 4,688 working residents, 2,146 drive, 841 work mainly at or from home and 783 take the train; 265 walk, 187 go by van, 168 by bus, 93 as a car passenger and 52 by bicycle.' },
          { h3: 'Travelling to school', p: 'Of 3,014 journeys to school, college or childcare, 1,284 are on foot and 817 as a car passenger, with 339 by train, 266 by bicycle and 135 by bus.' },
          { h3: 'Working from home', p: 'The home-working question drew these answers from Skerries workers: 2,311 at least partly from home, 2,138 never, and 239 unanswered.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the address as Skerries train station, Station Road, Skerries, Co. Dublin, Eircode K34 CF63, with sheltered bike parking. It has no connection with us. The Skerries Mills website refused automated requests on 19 September 2026, so nothing is quoted from it.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Skerries learners',
      intro: 'Two teacher-led live lessons fill a normal week.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The census-night age table counts 1,169 children aged six to twelve in Skerries. They begin with blocks and scoring games, and learn that changing the points changes the winner.' },
          { h3: 'Teenagers', p: 'The 919 Skerries residents aged thirteen to eighteen are at the point where Python, making websites, AI projects and data work like this weighting exercise make sense.' },
          { h3: 'Adults', p: 'Adults start from any level, including none, and the first lesson finds the right course.' }
        ] },
        { kind: 'p', text: 'All census numbers are the Central Statistics Office\'s as issued. The score is ours, built only to show how weighting works, and all 66 weightings were run on 19 September 2026. The station details come from Irish Rail.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From points in a game to weights in a ranking',
    intro: 'Ages are indicative only; the level is found in lesson one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Points and winners', p: 'Block-coded games where changing the points for each action changes who comes first.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Weighted averages', p: 'Python that combines scores with weights and ranks the results.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Sensitivity', p: 'Scaling, weighting and testing how far a ranking moves, on real data.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Scorecards at work', p: 'Supplier, staff and project scorecards whose weights have to be stated and defended.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to rank towns for a family move',
    intro: 'It will give a confident answer. Ask what it weighted and how.',
    p1: 'An AI assistant asked to rank towns will usually produce a list with reasons, drawing on whatever rankings it has seen. Every such list rests on weights, and on this page four different towns come top from the same three census figures depending on the weights alone. A list that does not show its weights cannot be checked.',
    p2: 'A learner who has run the 66 weightings asks the assistant to name its criteria, state their weights and say which towns would change places if the weights moved. The answer that comes back is less exciting and far more useful.',
    closer: 'Rankings are easy to produce. Showing how much of a ranking is choice is what makes it honest.',
    blogAnchor: 'why coding repays the time it takes'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Skerries',
    intro: 'The arrangements.',
    cells: [
      { h3: 'Live with a teacher', p: 'Every lesson is taught in real time, and the teacher works from the learner\'s code.' },
      { h3: 'Same-stage groups', p: 'Groups hold between five and ten learners, all at one stage, joining from Fingal, elsewhere in Ireland or abroad.' },
      { h3: 'Two a week', p: 'A typical month has about eight lessons, at hours agreed at the start.' },
      { h3: 'The school year', p: 'Holidays, mid-terms and exams are allowed for in advance.' },
      { h3: 'At home', p: 'A computer with a keyboard, working sound in and out, and a broadband connection reliable enough for video.' },
      { h3: 'Private lessons', p: 'Private lessons suit anyone the current groups do not fit, whether by level, by speed or by timetable.' }
    ],
    spec: { title: 'No local premises', p: 'Skerries learners take every lesson on video. We have no classroom in Skerries or anywhere in Ireland, and a lesson is the same from any connected home.' }
  },

  fees: {
    h2: 'Fees for Skerries',
    intro: 'Every charge.',
    first: 'A full first lesson with the level assessed, free.',
    group: 'A month in a group of five to ten at one stage, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same weekly rhythm.',
    closer: 'The monthly fee is in US dollars and is the same in every country except India. There is no charge for the first lesson, the first month is billed when the course starts, and holidays, missed lessons and a switch of format follow the rules on the pricing page.'
  },

  reviewsH2: 'Six families, their Google reviews in their own words',

  book: {
    h2: 'Book a free first lesson in Skerries',
    intro: 'Tell us the learner\'s age and interests and we will plan their first hour. It might end with a game, a working program, or a score whose weights they chose and can defend.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Skerries coding class questions',
    intro: 'What Skerries families ask before booking.',
    items: [
      { q: 'How many people live in Skerries?', a: 'Census 2022 recorded 10,666 usual residents in Skerries, and 3,410 of the town\'s households have broadband.' },
      { q: 'What is the data project on this page?', a: 'Building a made-up score for the 53 towns of 10,000 or more from three census shares, then trying all 66 weightings. Skerries comes fourth with equal weights but anywhere from third to twenty-sixth across the weightings, and four different towns can come first.' },
      { q: 'So where does Skerries really rank?', a: 'There is no single answer. The position depends on which indicators are used and how they are weighted, which is the point of the project; a fair summary is that Skerries is in the top ten under 47 of the 66 weightings tried.' },
      { q: 'How do Skerries residents get to work?', a: 'Of 4,688 working residents in the travel table, 2,146 drive, 841 work mainly at or from home, 783 take the train, 265 walk and 187 use a van.' },
      { q: 'When are lessons?', a: 'On school days from late afternoon, and at weekends. Our teachers are in India, which is four and a half hours ahead of Skerries during Irish summer time and five and a half ahead in winter; Skerries lessons are set in Irish time at hours that suit both.' },
      { q: 'Can adults join?', a: 'They can, up to sixty-seven and with or without experience. Whether an adult is happier in a small group of the same level or learning one to one usually becomes clear in the first lesson.' },
      { q: 'Will a Skerries learner be grouped with others from the town?', a: 'Groups follow level, not address, so classmates may be in Fingal, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Skerries?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Skerries cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Up the Fingal coast',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> page covers the area, and the neighbouring town pages include <a class="cg-inline-link" href="/best-coding-class-in-rush">Rush</a>, <a class="cg-inline-link" href="/best-coding-class-in-balbriggan">Balbriggan</a> and <a class="cg-inline-link" href="/best-coding-class-in-portmarnock">Portmarnock</a>, all in <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. There is also <a class="cg-inline-link" href="/best-online-coding-classes-ireland">a comparison of online coding schools</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> covers every county and town.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Skerries, Fingal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/best-coding-class-in-rush', label: 'Rush' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-skr .cg-hero-grid { align-items: start; gap: clamp(1.12rem, 3.3vw, 2.68rem); }
.cg-root.cg-skr .cg-hero h1 { font-weight: 650; letter-spacing: -0.019em; line-height: 1.05; }
.cg-root.cg-skr .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.12rem; }
.cg-root.cg-skr .cg-eyebrow { letter-spacing: 0.145em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-skr .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0124em; }
.cg-root.cg-skr .cg-grid-3 { gap: clamp(1.03rem, 2.72vw, 2.19rem); }
.cg-root.cg-skr .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-skr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-skr .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-skr .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.13rem; }
.cg-root.cg-skr .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Skerries, Co Dublin, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 10,666. SAP2022T15T2TOWN22: households 3,771, broadband 3,410, no internet 162, not stated 151. SAP2022T11T1TOWN22 to work total 4,688: car driver 2,146, work mainly at or from home 841, train DART or Luas 783, on foot 265, van 187, bus 168, car passenger 93, bicycle 52, not stated 129; to school, college or childcare total 3,014: on foot 1,284, car passenger 817, train 339, bicycle 266, bus 135, car driver 66, not stated 87. SAP2022T11T3TOWN22: total 6,452, not stated 347, under 15 minutes 2,315 (37.9 percent of stated). SAP2022T11T4TOWN22: 2,311 work from home at least some of the time, 2,138 never, 239 not stated. SAP2022T11T5TOWN22: 836 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,169, ages 13 to 18 to 919. Composite score computed in this session over the 53 towns with 10,000 or more usual residents: broadband share of households (not stated removed), honours degree, postgraduate or doctorate share of the education-ceased population aged 15+ (not stated removed, SAP2022T10T4TOWN22), share of journeys under 15 minutes (not stated removed); each min-max scaled across the 53; weights in steps of 0.1 summing to 1, 66 combinations. Skerries: 94.2, 37.2, 37.9 percent; rank alone 13th, 7th, 26th; equal weights 4th (z-scores 5th); best 3rd, worst 26th (all weight on short journeys); top five under 19 weightings, top ten under 47. First place: Maynooth 38, Shannon 18, Letterkenny 6, Portmarnock 4. Correlations across the 53: broadband with degrees 0.70, broadband with short journeys -0.74, degrees with short journeys -0.50. Median width of a town\'s rank range 33 places, maximum 50. Irish Rail, Skerries: "Station Address Skerries train station, Station Road, Skerries, Co. Dublin", "Eircode K34 CF63", "You can use the sheltered bike parking in Skerries station". Skerries Mills website: HTTP 403 to automated requests on 19 September 2026, not quoted.',
    localProject: 'Composite indicators: the weights choose the winner. The learner builds a made-up score for the 53 towns of 10,000 or more from three census shares, broadband households, adults with an honours degree or higher, and journeys under 15 minutes, each scaled from 0 to 1, and ranks the towns under all 66 weightings in steps of a tenth. Skerries (94.2, 37.2 and 37.9 percent; 13th, 7th and 26th on each alone) comes 4th with equal weights but anywhere from 3rd to 26th across the weightings, in the top five under 19 and the top ten under 47. First place goes to Maynooth under 38 weightings, Shannon under 18, Letterkenny under 6 and Portmarnock under 4. The indicators pull against each other (broadband and short journeys correlate at -0.74), which is why the weights decide the order; the median town\'s rank moves across 33 places. Lessons: publish the ingredients, the weights and the sensitivity with any ranking. Lower-ranked towns are deliberately not named. New family for the cluster: composite indices and weight sensitivity.',
    requiredMentions: [
      '10,666',
      '3,410',
      '4,688',
      '2,146',
      '783',
      '3,014',
      '1,284',
      '2,315',
      '836',
      '919',
      '1,169',
      'K34 CF63'
    ],
    sources: [
      { claim: 'CSO Census 2022 tables SAP2022T15T2TOWN22, SAP2022T10T4TOWN22 and SAP2022T11T3TOWN22, all towns: broadband households, highest level of education completed and journey time, used for the three-indicator score over the 53 towns of 10,000 or more usual residents. Skerries: broadband 3,410 of 3,771 households (151 not stated); journeys under 15 minutes 2,315 of 6,452 (347 not stated).', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T10T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Skerries, Co Dublin: usual residents 10,666; to work 4,688 with car driver 2,146, mainly at or from home 841, train 783, on foot 265, van 187, bus 168, car passenger 93, bicycle 52; to school, college or childcare 3,014 with on foot 1,284, car passenger 817, train 339, bicycle 266, bus 135; 2,311 work from home at least some of the time, 2,138 never, 239 not stated; 836 children under 15 in childcare; 1,169 aged 6 to 12 and 919 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Skerries station: "Station Address Skerries train station, Station Road, Skerries, Co. Dublin", "Eircode K34 CF63", "You can use the sheltered bike parking in Skerries station".', url: 'https://www.irishrail.ie/en-ie/station/skerries' }
    ],
    rejectedClaims: [
      'Any claim that Skerries, or any town, is the best place to live: the score is made up for teaching.',
      'Naming the towns at the bottom of any weighting.',
      'Any single rank for Skerries presented without its weights.',
      'Skerries Mills: the site returned 403 to automated requests on 19 September 2026, so nothing is quoted.',
      'The census-night population: the Fingal page owns it.'
    ]
  }
};
