'use strict';
// Clontarf, Dublin 3 (cg- district page, Ireland cluster, Phase 6). Named sources only (owner
// rule for districts), read 20 September 2026: Marine Institute ERDDAP (erddap.marine.ie)
// IrishNationalTideGaugeNetwork, station "Dublin Port", and imiTidePrediction, stationID
// "Dublin_Port", both on OD Malin; imiSurgePrediction summary for the storm-surge product;
// Dublin City Council North Bull Island and St Anne's Park pages; Irish Rail Clontarf Road
// station page. Spine: residuals, observed minus predicted. Scratchpad cnt/res.js.
// 1 Jan to 31 Aug 2026 UTC: 69,984 five-minute prediction slots, 68,800 observations paired
// (98.3%); all QC_Flag 0 ("unknown"; 1 good, 9 missing). Variance explained 97.9%; residual
// mean +0.072 m, sd 0.144; |residual| median 0.087, 90th pct 0.278, 99th 0.465; 8.04% over
// 0.3 m. Largest +1.013 m at 2026-01-27T05:35Z (obs 2.03, pred 1.02); 27 Jan daily mean +0.506.
// Largest negative -0.41 on 9 Jan. Residual autocorrelation 0.95 at 1 h, 0.70 at 6 h, 0.51 at
// 24 h, 0.37 at 48 h; corr with the prediction's rate of change 0.015; best time shift 0 within
// +/- 60 min. Highest observed high water 2.31 m on 3 Feb 12:25Z (pred 1.98); highest predicted
// 2.03 m on 15 Aug 00:40Z (obs 1.88). Gauge at 53.3457 N, -6.2217 E, 4.04 km from the St Anne's
// Park coordinates DCC publishes (53.3718307, -6.1793446).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'CLONTARF', blurb: 'Eight months at the Dublin Port tide gauge, a prediction that explains almost everything, and the metre it missed.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-clontarf-dublin',
  code: 'ctf',
  accent: '#12492A',
  accentRationale: 'Clontarf: a saltmarsh green for Bull Island from the widened solver search, clear of the Clare and Roscommon greens',
  pageType: 'district',
  place: {
    name: 'Clontarf',
    eyebrow: 'Clontarf, Dublin 3',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dublin City' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-dublin', name: 'Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' },
    { label: 'Drumcondra', href: '/coding-classes-in-drumcondra-dublin' }
  ],
  routeLabel: 'Clontarf, Dublin 3, Ireland',
  title: 'Coding Classes in Clontarf, Dublin | Modern Age Coders',
  description: 'Coding, Python, AI and maths classes for Clontarf learners aged 6 to 67, taught live online in small same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Clontarf, with a data project on the Dublin Port tide gauge and what the tide prediction leaves over.',
  twitterDescription: 'Live online coding, Python, AI and maths for Clontarf, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Clontarf',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Clontarf, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Clontarf',
  capsuleQ: 'What are the best coding classes in Clontarf?',
  capsule: 'For Clontarf, each lesson is a live video class with a teacher, taken in a small group of learners at one level or one to one, twice in most weeks, and open to anyone aged six up to sixty-seven. It all happens from home. The opening lesson costs nothing; from the second month on it is USD 100 monthly in a group or USD 150 monthly one to one.',
  lead: 'The Marine Institute predicts the tide at Dublin Port years ahead, and its tide gauge there records what the sea actually does every five minutes. Over the first eight months of 2026 the prediction explained 97.9 percent of how the water rose and fell. That sounds like the end of the story, and it is the start. Subtract the prediction from the reading and what is left over, the residual, reached 1.01 metres before dawn on 27 January. This page teaches a learner to build that residual, test whether it is the model\'s fault or something outside it, and read what it shows.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Clontarf.',

  picks: {
    eyebrow: 'Courses for Clontarf',
    h2: 'Four first courses for Clontarf',
    intro: 'Pick the age band first; the teacher uses the free lesson to check the level and will suggest another course if it fits better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and guesses: predict the next number in a pattern, then count how far off each guess was.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with two lists, a prediction and a measurement, and the differences between them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real tide data in Python: lining up time stamps, residuals, variance explained and autocorrelation.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who judge forecasts at work and want to know what a good-looking fit is hiding.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What the tide table missed: observed minus predicted at Dublin Port',
      intro: 'Both series come from the Marine Institute: the tide gauge readings for Dublin Port and its tide prediction for the same station, each in metres above Ordnance Datum Malin, from 1 January to 31 August 2026.',
      body: [
        { kind: 'table', caption: 'Dublin Port, 1 January to 31 August 2026', head: ['What was compared', 'Result'], rows: [
          ['Five-minute readings with a matching prediction', '68,800, or 98.3 percent of the period'],
          ['Share of the rise and fall the prediction explains', '97.9 percent'],
          ['Average of reading minus prediction', 'plus 0.07 metres'],
          ['Largest excess, 27 January at 05:35', '1.01 metres'],
          ['Highest water recorded, 3 February', '2.31 metres, with 1.98 predicted']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Almost everything', p: 'Over eight months the prediction accounts for 97.9 percent of the variation in the water level at Dublin Port. A learner who stopped there would have a very good model and would miss the most interesting 2.1 percent.' },
          { h3: 'A metre above the table', p: 'At 05:35 on 27 January the sea stood 1.01 metres above the predicted level, and across that whole day it averaged half a metre over. The residual shows that something beyond the tide raised the water; this page does not guess what it was.' },
          { h3: 'The highest tides', p: 'The highest water of the eight months came on 3 February at 2.31 metres, against 1.98 predicted. The tide the table rated highest, 2.03 metres in mid-August, arrived at 1.88.' }
        ] },
        { kind: 'callout', h3: 'A good fit still leaves something over, and that is where to look', p: 'Subtract the prediction from the observation and ask two questions of what remains. Does it rise and fall with the thing being modelled? Then the model is wrong in a regular way, such as its timing. Does it drift slowly and last for hours or days? Then something outside the model is at work. At Dublin Port the answer is the second, and the Marine Institute forecasts that part separately, as sea surface elevation due to storm surge.' },
        { kind: 'p', text: 'The learner\'s program downloads both series from the Marine Institute\'s data server, lines them up on their time stamps, and subtracts. It then measures how much of the variation the prediction explains, finds the largest excesses, averages them by day, and checks how long the residual persists: readings an hour apart have a correlation of 0.95, six hours apart 0.70, and a day apart still 0.51. Last, it tests the model\'s timing. The residual has almost no link with how fast the predicted tide is rising or falling, a correlation of 0.015, and sliding the prediction up to an hour earlier or later never shrinks the residual, so the table\'s clock is right and the leftover is not a timing error.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Unknown, not good', p: 'Every one of the 68,800 readings carries quality flag 0, which the dataset defines as unknown; 1 would mean good and 9 missing. The program uses them and says so, rather than treating an unknown as a pass.' },
          { h3: 'One zero for both', p: 'Readings and predictions each come in two versions, measured above Lowest Astronomical Tide and above Ordnance Datum Malin. The program uses Malin for both, because levels measured from different zeros cannot be subtracted.' },
          { h3: 'Where the gauge is', p: 'The Dublin Port gauge sits at 53.3457 north, 6.2217 west, about 4 kilometres from the coordinates the council gives for St Anne\'s Park. The page reports the gauge, not the Clontarf shoreline itself.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Clontarf, named',
      h2: 'Clontarf from its island, its park and its station',
      intro: 'Each fact is taken from the body that looks after the place.',
      body: [
        { kind: 'table', caption: 'Named places in and off Clontarf', head: ['Place', 'What its own source says'], rows: [
          ['North Bull Island', 'About 5 km long and 1 km wide, nearly 15 square kilometres'],
          ['St Anne\'s Park', 'Clontarf East, Raheny, D05 EA31'],
          ['Clontarf Road station', 'Clontarf Road, Dublin 3, D03 K6E8'],
          ['Dublin Port tide gauge', 'Marine Institute, a reading every five minutes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An island made by a wall', p: 'Dublin City Council says Bull Island is man-made, created about 200 years ago when the North Bull Wall was built, and that it keeps growing seaward, which the council calls a rare natural occurrence in Ireland. Its figure for the area, nearly 15 square kilometres, includes both land and seashore.' },
          { h3: 'Protected ground', p: 'The island became the country\'s first official bird sanctuary in the 1930s and a UNESCO Biosphere Reserve in 1981, and the causeway out to it was built from 1962 to 1964.' },
          { h3: 'The station', p: 'Irish Rail lists Clontarf Road as unstaffed, with lifts and a footbridge to both platforms and 20 bike spaces, none of them sheltered.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Clontarf, since the page uses only what named bodies publish about the place. The tide figures come from one gauge at Dublin Port, and the page makes no claim about flooding or flood risk anywhere on the Clontarf shore.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'A week of lessons for a Clontarf learner',
      intro: 'There are two lessons in an ordinary week, and the teacher takes each one live from start to finish.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children open with block code and prediction games, keeping score of how far each guess missed.' },
          { h3: 'Teenagers', p: 'Teenagers go on to Python, websites, AI projects and live data services like the Marine Institute\'s, with the statistics worked out in code.' },
          { h3: 'Adults', p: 'Adults can start with no experience; the first lesson decides where.' }
        ] },
        { kind: 'p', text: 'Readings and predictions are the Marine Institute\'s; the pairing, residuals, variance explained, persistence and timing tests were computed by us on 20 September 2026. Island, park and station details are taken from Dublin City Council and Irish Rail.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a guessing game to a model check',
    intro: 'The bands are only a starting point; lesson one confirms the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'How far off?', p: 'Block-coded guessing games that keep the gap between each guess and the answer.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Two lists', p: 'Python that lines up predictions and measurements and subtracts them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Residuals', p: 'Variance explained, autocorrelation and timing tests on real tide data.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Judging a forecast', p: 'Reading what a model leaves over before trusting its headline accuracy.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how good the tide prediction is',
    intro: 'It will report a high score. The residual is the better answer.',
    p1: 'Give an AI assistant the two series and ask how well the prediction performs, and it will probably report a correlation or a variance explained close to 98 percent and call the model excellent. It would be right, and it would say nothing about the morning the sea stood a metre higher than the table.',
    p2: 'The learner who has built this project asks for the residual, plots it, and asks whether it tracks the tide or drifts on its own. With that question an assistant can help write the tests; without it, a single summary number hides the part that matters most.',
    closer: 'A model\'s score tells you how often it is right. Its residual tells you when, and how badly, it is wrong.',
    blogAnchor: 'why learning to code still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Clontarf',
    intro: 'The details.',
    cells: [
      { h3: 'Taught as it happens', p: 'The teacher leads every lesson live and follows each learner\'s code as they type it.' },
      { h3: 'Level-matched', p: 'Five to ten learners sharing a level, whether they are in Clontarf, elsewhere in Ireland or abroad.' },
      { h3: 'Steady routine', p: 'Two set days a week, which works out at about eight lessons a month.' },
      { h3: 'School year in mind', p: 'The plan allows for holidays, mid-term breaks and exam season.' },
      { h3: 'Needed at home', p: 'A desktop or laptop, a microphone, a way to hear, and an internet connection that holds up on video.' },
      { h3: 'Just one learner', p: 'Private lessons for a learner who is ahead, wants more time, or needs hours no group offers.' }
    ],
    spec: { title: 'No premises', p: 'There is no Modern Age Coders site in Clontarf or anywhere in Ireland. Every lesson is live on video and runs the same wherever the learner joins.' }
  },

  fees: {
    h2: 'Fees for Clontarf',
    intro: 'Clearly stated.',
    first: 'A no-cost first lesson that includes a level check.',
    group: 'A month in a group of five to ten at the same level, about eight live lessons.',
    private: 'A month of one-to-one lessons in the same pattern.',
    closer: 'Outside India one US dollar fee applies to every family, month by month. The free lesson involves no commitment, charging starts when the course does, and the pricing page covers holidays, missed lessons and moving between group and private lessons.'
  },

  reviewsH2: 'Google reviews from families, left exactly as written',

  book: {
    h2: 'Book a free first lesson in Clontarf',
    intro: 'Tell us the learner\'s age and interests and we will shape the first lesson to fit. It might end with a small game, a program that runs, or a chart of how far a prediction missed.',
    success: 'Thank you. We will be in touch to set up the lesson.'
  },

  faq: {
    h2: 'Clontarf coding class questions',
    intro: 'What Clontarf families ask us most.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Clontarf?', a: 'No. We teach live on video, with no premises anywhere in Ireland. A learner needs a computer, a microphone and sound, and a dependable connection. The contact number on the page is in India.', boiler: true },
      { q: 'What is the tide gauge project?', a: 'The learner pairs the Marine Institute\'s Dublin Port tide readings with its tide prediction for January to August 2026, 68,800 matched readings, and studies the difference: the prediction explains 97.9 percent of the rise and fall, yet the leftover reached 1.01 metres on 27 January.' },
      { q: 'Does the page say anything about flooding in Clontarf?', a: 'No. It reports one gauge at Dublin Port and what a prediction leaves over. Flood risk on the Clontarf shore is a different question, and the page does not attempt it.' },
      { q: 'Why is there no population for Clontarf on this page?', a: 'District pages use only what named organisations publish about the place itself, here the Marine Institute, Dublin City Council and Irish Rail, and none of them gives a head count for Clontarf.' },
      { q: 'What hours are the lessons?', a: 'Weekday lessons run from after school into the evening, and weekend ones in the daytime. We keep times in Irish time. The teachers work from India, which is four and a half hours ahead of Clontarf in the Irish summer and five and a half hours ahead in winter, so every slot we offer is chosen to be workable at both ends.' },
      { q: 'Can adults enrol?', a: 'Yes, anyone up to sixty-seven, whether or not they have coded before. After the free lesson an adult chooses a group at their level or one-to-one teaching.' },
      { q: 'Will my child learn alongside other Clontarf children?', a: 'Maybe, but we group by level, so classmates are just as likely to be elsewhere in Ireland or overseas.' },
      { q: 'What do coding classes in Clontarf cost?', a: 'The first lesson is free. Then a group place is USD 100 a month for about eight live lessons, two a week, in a group of five to ten, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many are in each group?', a: 'Five to ten learners, put together by level, pace and goals rather than age or neighbourhood. Where no group suits a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Along the north shore',
    html: 'Inland, <a class="cg-inline-link" href="/coding-classes-in-drumcondra-dublin">Drumcondra</a> has a project on noise readings and <a class="cg-inline-link" href="/coding-classes-in-glasnevin-dublin">Glasnevin</a> one on temperature records. The <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page covers the city, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> gathers every other page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Clontarf, Dublin and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-glasnevin-dublin', label: 'Glasnevin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ctf .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.24vw, 2.63rem); }
.cg-root.cg-ctf .cg-hero h1 { font-weight: 690; letter-spacing: -0.0169em; line-height: 1.08; }
.cg-root.cg-ctf .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.21rem; }
.cg-root.cg-ctf .cg-eyebrow { letter-spacing: 0.137em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-ctf .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.0116em; }
.cg-root.cg-ctf .cg-grid-3 { gap: clamp(1.06rem, 2.87vw, 2.24rem); }
.cg-root.cg-ctf .cg-table caption { letter-spacing: 0.035em; font-weight: 660; }
.cg-root.cg-ctf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ctf .cg-table td:last-child { font-weight: 580; }
.cg-root.cg-ctf .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1.04rem; }
.cg-root.cg-ctf .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Clontarf, named sources only (owner rule for districts), read 20 September 2026. Marine Institute ERDDAP: IrishNationalTideGaugeNetwork ("Irish National Tide Gauge Network Real Time Data", time_coverage_resolution PT5M), station_id "Dublin Port", latitude 53.3457, longitude -6.2217, variables Water_Level_LAT ("sea level above Lowest Astronomical Tide"), Water_Level_OD_Malin ("sea level above Ordnance Datum Malin"), QC_Flag (flag_values "0, 1, 9", flag_meanings "unknown good missing_value"); imiTidePrediction ("Marine Institute Tide Prediction"; summary: "Tidal predictions are generated from measured data via the Irish National Tide Gauge Network and via modelled data from the MI operational hydrodynamic model"; time coverage 2026-01-01 to 2029-01-01), stationID "Dublin_Port", Water_Level ("sea surface height above local LAT"), Water_Level_ODM ("sea surface height relative to OD Malin"); imiSurgePrediction summary: "Tidal predictions and modelled surge forecasts ... The modelled surge forecasts are extracted from the NE_Atlantic operational model", variable "sea surface elevation due to storm surge". Our arithmetic (cnt/res.js), 1 January to 31 August 2026 UTC, OD Malin: prediction slots 69,984; readings 68,800, all paired (98.3%), all QC_Flag 0; variance explained 97.9%; residual mean +0.072 m, standard deviation 0.144 m; median absolute residual 0.087 m, 90th percentile 0.278, 99th 0.465; 8.04% of readings more than 0.3 m from the prediction; largest excess +1.013 m at 2026-01-27T05:35Z (reading 2.03, prediction 1.02); 27 January daily mean +0.506; largest shortfall about -0.41 m on 9 January; residual autocorrelation 0.95 at 1 hour, 0.70 at 6 hours, 0.51 at 24 hours, 0.37 at 48 hours; correlation with the prediction\'s rate of change 0.015; best shift of the prediction within +/- 60 minutes is 0; highest high water 2.31 m on 2026-02-03T12:25Z (prediction 1.98); highest predicted high water 2.03 m on 2026-08-15T00:40Z (reading 1.88); gauge 4.04 km from the St Anne\'s Park coordinates. Dublin City Council, North Bull Island: "Bull Island is man-made. It was created 200 years ago when the North Bull Wall was constructed. It continues to grow seaward, a rare natural occurrence in Ireland. It is now 5 km in length and 1 km wide; and covers an area nearly 15 km² in size, including both land and seashore. In the 1930\'s Bull Island became the country\'s first official bird sanctuary and in 1981 it achieved UNESCO Biosphere Reserve status. The causeway to the Island was built in 1962 to 1964". Dublin City Council, St Anne\'s Park: "Locate 53.3718307, -6.1793446"; "St Anne\'s Park Clontarf East Raheny Dublin 5 Co. Dublin D05 EA31". Irish Rail, Clontarf Road: "Station Address Clontarf Road Dublin 3 Eircode D03 K6E8"; "This station is not staffed"; "No sheltered bike parking available Number of bike spaces: 20"; "Lifts and footbridge to both platforms".',
    localProject: 'Residuals: observed minus predicted. From the Marine Institute\'s Dublin Port tide gauge and its tide prediction for January to August 2026 (68,800 paired five-minute readings on OD Malin), the learner finds that the prediction explains 97.9 percent of the variation, then builds the residual: mean +0.07 m, largest +1.01 m on 27 January, highest water 2.31 m on 3 February against 1.98 predicted while the highest predicted tide (2.03 m in August) arrived at 1.88. Tests: persistence (0.95 at 1 hour, 0.51 at a day) and timing (correlation 0.015 with the tide\'s rate of change; no better shift within an hour) show the leftover is not a timing error; the Marine Institute forecasts that part separately as storm surge. Side lessons: QC flag 0 means unknown, not good; subtract only on a shared datum. New family site-wide: RESIDUALS / OBSERVED MINUS PREDICTED (residual, surge, predicted tide had no prior hits in that sense; Naas uses residual for census catch-all categories).',
    requiredMentions: [
      '68,800',
      '97.9 percent',
      '1.01 metres',
      '2.31 metres',
      '1.98',
      '0.95',
      'D03 K6E8',
      'D05 EA31',
      '15 square kilometres',
      '1981',
      '1962 to 1964',
      '20 bike spaces'
    ],
    sources: [
      { claim: 'Marine Institute, Irish National Tide Gauge Network: Dublin Port five-minute water levels, OD Malin, January to August 2026, with quality flags.', url: 'https://erddap.marine.ie/erddap/tabledap/IrishNationalTideGaugeNetwork.html' },
      { claim: 'Marine Institute Tide Prediction, station Dublin_Port, OD Malin.', url: 'https://erddap.marine.ie/erddap/tabledap/imiTidePrediction.html' },
      { claim: 'Marine Institute Surge Prediction: modelled storm surge from the NE Atlantic operational model, published separately from the tide.', url: 'https://erddap.marine.ie/erddap/info/imiSurgePrediction/index.html' },
      { claim: 'Dublin City Council, North Bull Island: man-made, created when the North Bull Wall was built, growing seaward; 5 km by 1 km, nearly 15 square kilometres; first official bird sanctuary in the 1930s; UNESCO Biosphere Reserve in 1981; causeway built 1962 to 1964.', url: 'https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/north-bull-island' },
      { claim: 'Dublin City Council, St Anne\'s Park: Clontarf East, Raheny, D05 EA31; coordinates 53.3718307, -6.1793446.', url: 'https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/st-annes-park' },
      { claim: 'Irish Rail, Clontarf Road station: D03 K6E8; not staffed; 20 bike spaces, none sheltered; lifts and footbridge to both platforms.', url: 'https://www.irishrail.ie/en-ie/station/clontarf-road' }
    ],
    rejectedClaims: [
      'Any named storm or weather cause for 27 January 2026: not established from these sources.',
      'Any flood risk or flood defence claim for the Clontarf shore.',
      'Aliasing and sampling rate on tide data: Douglas owns them; this page uses the full five-minute series.',
      'Treating QC flag 0 as good data: the dataset defines it as unknown.',
      'Any population figure for Clontarf and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
