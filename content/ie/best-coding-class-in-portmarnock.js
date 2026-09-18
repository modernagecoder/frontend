'use strict';
// Portmarnock (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Portmarnock, Co Dublin", CSO table F7141 (persons at work by
// working-from-home days and detailed occupational group, State) and the Irish Rail
// station page for Portmarnock, read 19 September 2026. Spine: the average that
// describes almost nobody. Nationally 36.3 percent of workers who answered work
// from home at least one day. Across the 250 detailed occupations with 1,000 or more
// answering, the shares form two crowds: 77 occupations under 10 percent, 58 over
// 70; only 19 occupations, holding 4.9 percent of workers, lie within five points of
// the average; 37.6 percent of workers are in occupations under 10 percent and 21.7
// in occupations over 70. Programmers and software development professionals 96.3
// percent of 31,571 (second of 250); primary and nursery teachers 4.8; further and
// higher education 83.1. Portmarnock: 2,675 of 4,466 answering (59.9 percent),
// second of 94 towns of 5,000+ after Malahide (60.6). Scratchpad eco/F7141.json.
// Gorey owns the days breakdown (prevalence versus intensity); Midleton the
// industry-level yes-or-no. The Fingal page owns the census-night population.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'PORTMARNOCK', blurb: 'The national home-working average is 36.3 percent, and almost no occupation is anywhere near it. A page on averages of two-humped distributions.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-portmarnock',
  code: 'pmk',
  accent: '#9D2A41',
  accentRationale: 'Portmarnock: a raspberry red from the widened solver search, distinct from the Fingal, Malahide and Rush accents along the same coast',
  pageType: 'city',
  place: {
    name: 'Portmarnock',
    eyebrow: 'Portmarnock, Fingal, County Dublin',
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
  routeLabel: 'Portmarnock, Fingal, County Dublin, Ireland',
  title: 'Best Coding Class in Portmarnock | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for Portmarnock learners aged 6 to 67, taught live online in small groups at one level or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Portmarnock, with a data project on a national average that describes almost no one who works.',
  twitterDescription: 'Live online coding, Python and AI lessons for Portmarnock, ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Portmarnock',
    description: 'Online coding, Python, AI, data and mathematics in same-level groups for children, teenagers and adults in Portmarnock, Fingal, County Dublin, taught live in English.'
  },

  h1: 'Coding classes in Portmarnock',
  capsuleQ: 'What is the best coding class in Portmarnock?',
  capsule: 'Portmarnock has 10,622 usual residents in 3,827 households, and 3,531 of those households have broadband, the only link our lessons need. A teacher takes every lesson live on video, with a handful of learners at one level or with one learner alone, usually twice a week, for any age from six to sixty-seven. The first lesson is free; the fee after that is USD 100 a month for group lessons or USD 150 for private ones.',
  lead: 'Across Ireland, 36.3 percent of workers who answered the census question work from home at least one day a week. It is a tidy, often quoted figure. The CSO also publishes the same answer for more than 300 detailed occupations, and when the learner draws them as a chart, something surprising appears: almost no occupation is anywhere near 36.3. Most sit in one of two crowds, near none or near all. Only 4.9 percent of workers are in occupations within five points of the average. Portmarnock, where 59.9 percent of working residents who answered do some work at home, second only to Malahide among the larger towns, is a good place to ask what any single average is hiding.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Portmarnock.',

  picks: {
    eyebrow: 'Course picks for Portmarnock',
    h2: 'Courses Portmarnock learners start with',
    intro: 'Let the learner\'s age and interests choose a course; the teacher of that course then pitches the level in a free first lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that draw bar charts of things counted in the game, and spot when one bar hides two groups.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Averages, spreads and histograms built in code from real tables, then questioned.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Distributions, weighting and subgroups on real public data, and when a mean should not be quoted alone.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults whose reports lead with an average and need to show the spread behind it.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Find the average that describes almost nobody',
      intro: 'CSO table F7141 gives the home-working answer for every detailed occupation. The learner keeps the 250 occupations with at least 1,000 workers answering and draws how their home-working shares are spread.',
      body: [
        { kind: 'table', caption: 'Occupations with 1,000 or more workers answering, by the share who work from home at least one day', head: ['Share working from home', 'Occupations'], rows: [
          ['Under 10 percent', '77'],
          ['10 to 20 percent', '29'],
          ['20 to 30 percent', '16'],
          ['30 to 40 percent', '16'],
          ['40 to 50 percent', '16'],
          ['50 to 60 percent', '17'],
          ['60 to 70 percent', '21'],
          ['70 to 80 percent', '22'],
          ['80 to 90 percent', '22'],
          ['90 percent or more', '14']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two crowds', p: 'The chart has two humps: 77 occupations where fewer than one in ten work from home, and 58 where more than seven in ten do. The national figure of 36.3 percent sits in the thin stretch between them.' },
          { h3: 'Counted in workers', p: 'Weighting by the number of workers makes it plainer. 37.6 percent of workers are in occupations below 10 percent, 21.7 percent in occupations above 70, and only 4.9 percent, spread across 19 occupations, sit within five points of the average.' },
          { h3: 'Groups hide the split', p: 'Even one familiar group divides sharply. Among teachers, 4.8 percent of primary and nursery teachers work from home against 83.1 percent in further and higher education. A figure for all teachers would describe neither.' }
        ] },
        { kind: 'table', mt: true, caption: 'Six occupations from the same national table', head: ['Occupation', 'Work from home', 'Workers answering'], rows: [
          ['Programmers and software development professionals', '96.3%', '31,571'],
          ['Further and higher education teaching professionals', '83.1%', '15,652'],
          ['Secondary education teaching professionals', '10.1%', '35,556'],
          ['Nurses and midwives', '6.8%', '59,593'],
          ['Primary and nursery education teaching professionals', '4.8%', '49,155'],
          ['Waiters and waitresses', '2.1%', '11,057']
        ] },
        { kind: 'callout', h3: 'Look at the shape before you quote the average', p: 'An average is a fair summary when most values cluster around it. When they split into two groups, the average lands in the gap and describes a worker who barely exists. The defence takes one step: before reporting a mean, draw the distribution. If it has two humps, report the two groups, or the share in each, and say what separates them. Here the separation is the kind of work: programmers at 96.3 percent and primary teachers at 4.8 percent are both part of the same 36.3.' },
        { kind: 'p', text: 'The learner loads the occupation table, computes each occupation\'s share, and draws two histograms: one counting occupations, one counting workers. Then a short loop finds the occupations within five points of the average and adds up their workers, which gives the 4.9 percent that makes the point. A last step asks for the second-highest share among the 250; it turns out to be programmers and software developers, the occupation many of our learners are working towards, at 96.3 percent.' }
      ]
    },
    {
      id: 'town', tint: 'tint', eyebrow: 'Portmarnock\'s own average',
      h2: 'A town figure is an average too',
      intro: 'Portmarnock\'s home-working rate is high. It is still an average over very different working weeks.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Second of 94', p: 'Of 4,466 working residents who answered, 2,675 work from home at least some of the time, 59.9 percent. Among the 94 towns of 5,000 or more only Malahide, at 60.6, is higher.' },
          { h3: 'What it cannot say', p: 'The town tables do not break home-working down by occupation, so this page does not say which jobs Portmarnock\'s home-workers do. The national pattern only shows how much a single figure can hide.' },
          { h3: 'Two working weeks', p: 'In the same town, 904 residents take the train to work and 866 give home as their main place of work. One figure for "home-working" covers both kinds of week and everything between.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not explain why occupations split as they do, and it does not apply the national occupation shares to Portmarnock. It quotes the national table to show the shape of the data, and the town tables to describe the town.' }
      ]
    },
    {
      id: 'census', tint: '', eyebrow: 'The town in the census',
      h2: 'Counting Portmarnock',
      intro: 'Census 2022 small area tables, town of Portmarnock, Co Dublin, for its usual residents and their homes.',
      body: [
        { kind: 'table', caption: 'Selected figures for Portmarnock', head: ['Figure for Portmarnock', 'Value'], rows: [
          ['Usual residents', '10,622'],
          ['Households', '3,827'],
          ['Households with broadband', '3,531'],
          ['Working residents in the travel table', '4,727'],
          ['Journeys to school, college or childcare', '2,685'],
          ['Children under fifteen in childcare', '877'],
          ['Working residents who take the train to work', '904']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The journey to work', p: 'Of 4,727 working residents, 2,130 drive, 904 take the train, 866 work mainly at or from home, 160 go by van, 158 by bus, 132 walk, 101 cycle and 82 travel as a car passenger.' },
          { h3: 'The journey to school', p: 'Of 2,685 journeys to school, college or childcare, 1,207 are on foot and 844 as a car passenger, with 204 by bus, 181 by train and 78 learners driving.' },
          { h3: 'Home-working', p: 'On the direct question, 2,675 of Portmarnock\'s working residents said they work from home at least some of the time, 1,791 said never, and 261 did not answer.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the station address as Iarnród Éireann, Station Road, Portmarnock, Co. Dublin, Eircode D13 K726, with sheltered bike parking. It has no connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Portmarnock learners',
      intro: 'Each week normally holds two live lessons, each taught from beginning to end by a teacher.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'The census-night age table counts 1,123 children aged six to twelve in Portmarnock. They begin with blocks and games, and soon make charts of the things they count.' },
          { h3: 'Secondary age', p: 'Portmarnock\'s 732 residents aged thirteen to eighteen are the right age for Python, websites, AI projects and data analysis on real tables like the one above.' },
          { h3: 'Adults', p: 'Adults come at every level, including those who have never written code, and the first lesson places them.' }
        ] },
        { kind: 'p', text: 'Town counts come from the Central Statistics Office unchanged, and the occupation figures are from its national table F7141 as published. The histograms, weightings and ranks were computed on 19 September 2026. The station details are Irish Rail\'s own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From bar charts to distributions',
    intro: 'Read the ages loosely; placement happens in the first lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting into bars', p: 'Block-coded games that tally results and draw them as bars.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Mean and spread', p: 'Python that finds an average and draws the values around it, then asks whether the average fits.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Shapes of data', p: 'Histograms, weighting and subgroups on real tables, and reporting a two-humped result honestly.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Averages at work', p: 'Dashboards and reports that show the spread behind the headline number.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how common home-working is',
    intro: 'It will likely give one percentage. Ask it what the distribution looks like.',
    p1: 'An AI assistant asked about home-working in Ireland will usually quote a single national share, since that is the figure most repeated. It is correct and it is misleading, because most workers are in jobs far above or far below it, and a reader who takes the average as typical has learned the wrong thing.',
    p2: 'After this project a learner asks a better question: what does the spread look like, and who is near the middle? When the answer is "almost nobody", the average should come with its two groups attached.',
    closer: 'Summaries are what assistants do fastest. Checking that a summary fits the shape of the data is still a person\'s job.',
    blogAnchor: 'what makes coding worth the effort today'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Portmarnock lessons run',
    intro: 'How it works.',
    cells: [
      { h3: 'Teacher present', p: 'Each lesson is taught live, with the teacher responding to the learner\'s code as they go.' },
      { h3: 'Level first', p: 'Groups of five to ten are formed by stage, with learners from Fingal, the rest of Ireland and abroad.' },
      { h3: 'Regular slots', p: 'Usually two lessons a week, around eight a month, on fixed days.' },
      { h3: 'Around exams and holidays', p: 'The plan leaves room for mid-terms, holidays and exam weeks.' },
      { h3: 'Needed at home', p: 'A computer with a keyboard, a way to talk and listen, and a stable home connection, which 3,531 Portmarnock households already have.' },
      { h3: 'One to one', p: 'Some learners are better served one to one, for instance when they are well ahead of the groups or can only make an unusual hour.' }
    ],
    spec: { title: 'Online only', p: 'Portmarnock learners join every lesson on video. We have no premises in Portmarnock or anywhere in Ireland, and a lesson is the same from any connected home.' }
  },

  fees: {
    h2: 'Fees for Portmarnock',
    intro: 'Prices, in full.',
    first: 'A full first lesson with the level assessed, free.',
    group: 'A month in a group of five to ten at one stage, about eight live lessons.',
    private: 'A month of one-to-one lessons on the same weekly pattern.',
    closer: 'Families anywhere but India pay one monthly price in US dollars. The free lesson costs nothing and binds nobody; the first payment comes with the start of the course, and holidays, missed lessons or a change of format are all covered in the pricing page\'s rules.'
  },

  reviewsH2: 'Six Google reviews from our families, printed in full',

  book: {
    h2: 'Book a free first lesson in Portmarnock',
    intro: 'Share the learner\'s age and what they enjoy, and we will shape a first hour around it. It could end with a game, a working program, or a chart showing why one average can describe almost nobody.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Portmarnock coding class questions',
    intro: 'What Portmarnock families ask first.',
    items: [
      { q: 'How many people live in Portmarnock?', a: 'The Census 2022 small area tables count 10,622 usual residents in Portmarnock, in 3,827 households; 3,531 of those households have broadband.' },
      { q: 'What is the data project on this page?', a: 'Drawing the national home-working rate for 250 detailed occupations and finding that almost none are near the average of 36.3 percent. Most occupations sit near none or near all, and only 4.9 percent of workers are in occupations within five points of the average.' },
      { q: 'Do software developers really work from home that much?', a: 'In the census, 96.3 percent of the 31,571 programmers and software development professionals who answered said they work from home at least one day a week, the second-highest share of the 250 occupations.' },
      { q: 'How do Portmarnock residents get to work?', a: 'Of 4,727 working residents in the travel table, 2,130 drive, 904 take the train, 866 work mainly at or from home, 160 use a van and 158 take the bus.' },
      { q: 'When are lessons?', a: 'From mid-afternoon into the evening on weekdays, and at weekends. We set Portmarnock lessons in Irish time; the teachers work from India, four and a half hours ahead while Ireland is on summer time and five and a half once the clocks go back, so only hours that suit both places are offered.' },
      { q: 'Are adults welcome?', a: 'Certainly; learners up to sixty-seven join, whatever their starting point. Adults leave the first lesson with a clear choice between a small group at their level and one-to-one teaching.' },
      { q: 'Will a Portmarnock learner be grouped with others from the town?', a: 'Groups are formed by level, so classmates may be in Fingal, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Portmarnock?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Portmarnock cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The Fingal coast',
    html: 'Portmarnock appears under the <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> page, next to the town pages for <a class="cg-inline-link" href="/best-coding-class-in-malahide">Malahide</a>, <a class="cg-inline-link" href="/best-coding-class-in-swords">Swords</a> and <a class="cg-inline-link" href="/best-coding-class-in-rush">Rush</a>, with <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> above them. Online coding schools are compared on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">a separate page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links the whole series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Portmarnock, Fingal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/best-coding-class-in-malahide', label: 'Malahide' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-pmk .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.26vw, 2.64rem); }
.cg-root.cg-pmk .cg-hero h1 { font-weight: 700; letter-spacing: -0.0179em; line-height: 1.06; }
.cg-root.cg-pmk .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-pmk .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-pmk .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0141em; }
.cg-root.cg-pmk .cg-grid-3 { gap: clamp(1.05rem, 2.76vw, 2.17rem); }
.cg-root.cg-pmk .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-pmk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pmk .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-pmk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-pmk .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Portmarnock, Co Dublin, CSO Census 2022 Small Area Population town tables and CSO table F7141, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 10,622. SAP2022T15T2TOWN22: households 3,827, broadband 3,531, no internet 96, not stated 174. SAP2022T11T1TOWN22 to work total 4,727: car driver 2,130, train DART or Luas 904, work mainly at or from home 866, van 160, bus 158, on foot 132, bicycle 101, car passenger 82, not stated 165; to school, college or childcare total 2,685: on foot 1,207, car passenger 844, bus 204, train 181, car driver 78, not stated 118. SAP2022T11T4TOWN22: all working persons 4,727, work from home 2,675, not stated 261 (never 1,791); 2,675 of 4,466 answering, 59.9 percent; second of the 94 towns with 5,000 or more usual residents, after Malahide at 60.6. SAP2022T11T5TOWN22: 877 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,123, ages 13 to 18 to 732. CSO F7141, Population Aged 15 Years and Over at Work by Working from Home Days and Detailed Occupational Group, 2022, State: all occupational groups 747,961 work from home 1 or more days and 1,313,278 do not (36.3 percent of those answering). Of the 327 listed occupations (excluding "All occupational groups" and "Other/not stated"), 250 have 1,000 or more answering; their shares: under 10 percent 77, 10-20 29, 20-30 16, 30-40 16, 40-50 16, 50-60 17, 60-70 21, 70-80 22, 80-90 22, 90 or more 14. Worker-weighted over those 250 (1,999,002 answering): 37.6 percent in occupations under 10 percent, 21.7 percent over 70, 40.7 between; 19 occupations within five points of 36.3 hold 4.9 percent. Selected: Programmers and software development professionals 30,388 of 31,571 (96.3, second of 250 after IT project and programme managers 96.9); Further and higher education teaching professionals 13,008 of 15,652 (83.1); Secondary education teaching professionals 3,582 of 35,556 (10.1); Nurses and midwives 4,081 of 59,593 (6.8); Primary and nursery education teaching professionals 2,382 of 49,155 (4.8); Waiters and waitresses 229 of 11,057 (2.1). Irish Rail, Portmarnock: "Station Address Iarnród Éireann, Station Road, Portmarnock, Co. Dublin", "Eircode D13 K726", "You can use the sheltered bike parking in Portmarnock station".',
    localProject: 'The average that describes almost nobody. Nationally, 36.3 percent of workers who answered work from home at least one day. The CSO\'s detailed occupation table shows the shape behind that figure: among the 250 occupations with 1,000 or more answering, 77 are under 10 percent and 58 over 70, and weighting by workers, 37.6 percent of workers are in occupations below 10 percent and 21.7 percent above 70, while only 19 occupations holding 4.9 percent of workers sit within five points of the average. One group, teachers, splits from 4.8 percent (primary and nursery) to 83.1 (further and higher education); programmers and software developers are second of 250 at 96.3 percent of 31,571. The learner draws occupation-count and worker-weighted histograms and finds the near-average occupations. Portmarnock\'s own figure, 2,675 of 4,466 answering or 59.9 percent, second of 94 larger towns after Malahide, is also an average over different working weeks: 904 take the train to work and 866 work mainly at home. Lesson: look at the shape before quoting an average; when it has two humps, report the groups. Gorey owns the days breakdown, Midleton the industry yes-or-no. New family for the cluster: bimodal distributions and the misleading mean.',
    requiredMentions: [
      '10,622',
      '3,827',
      '3,531',
      '4,727',
      '2,130',
      '904',
      '2,675',
      '4,466',
      '2,685',
      '877',
      '31,571',
      'D13 K726'
    ],
    sources: [
      { claim: 'CSO table F7141, Population Aged 15 Years and Over at Work by Working from Home Days and Detailed Occupational Group, 2022, State: all occupational groups 747,961 working from home one day or more and 1,313,278 not; per-occupation counts used for the distribution of 250 occupations, including programmers and software development professionals 30,388 of 31,571, further and higher education teaching 13,008 of 15,652, secondary teaching 3,582 of 35,556, nurses and midwives 4,081 of 59,593, primary and nursery teaching 2,382 of 49,155, waiters and waitresses 229 of 11,057.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F7141/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T4TOWN22, all towns: working from home status, used for the 94-town comparison; Portmarnock, Co Dublin: all working persons 4,727, work from home 2,675, not stated 261; Malahide 60.6 percent of those answering.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Portmarnock, Co Dublin: usual residents 10,622; households 3,827, broadband 3,531; to work 4,727 with car driver 2,130, train 904, mainly at or from home 866, van 160, bus 158, on foot 132, bicycle 101, car passenger 82; to school, college or childcare 2,685 with on foot 1,207, car passenger 844, bus 204, train 181, car driver 78; 877 children under 15 in childcare; 1,123 aged 6 to 12 and 732 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Portmarnock station: "Station Address Iarnród Éireann, Station Road, Portmarnock, Co. Dublin", "Eircode D13 K726", "You can use the sheltered bike parking in Portmarnock station".', url: 'https://www.irishrail.ie/en-ie/station/portmarnock' }
    ],
    rejectedClaims: [
      'Which occupations Portmarnock\'s home-workers are in: the town tables have no occupation breakdown of home-working.',
      'Applying national occupation shares to Portmarnock.',
      'Any reason why occupations split as they do.',
      'The days-per-week breakdown (Gorey owns it) and the industry-level yes-or-no (Midleton owns it).',
      'The census-night population: the Fingal page owns it.'
    ]
  }
};
