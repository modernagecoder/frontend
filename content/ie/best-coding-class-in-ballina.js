'use strict';
// Ballina (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Ballina, Co Mayo" and the Irish Rail station page for Ballina,
// read 19 September 2026. The Jackie Clarke Collection pages tried (clarkecollection.ie
// timed out; the council page returned 404) are not quoted. Spine: honest charts and
// the lie factor. Ballina: 3,347 of 3,987 answering households on broadband (83.95
// percent); all 867 towns together 1,083,309 of 1,203,105 (90.04). True shortfall
// 6.8 percent. Bar chart with the axis from 0: looks 6.8 percent shorter (factor
// 1.0); from 50: 15.2 (2.2); from 80: 60.7 (9.0); from 83: 86.5 (12.8). Complement
// framing: no internet 543 of 3,987 (13.62 percent) against 7.95, 1.71 times. The
// all-towns figure is the TOWN22 all-towns row, labelled as such, not the State.
// Portlaoise owns linear versus log scales; Ulster owns points versus per cent. The
// Mayo county page owns the census-night population, density and ATU; Castlebar
// owns the nearest-neighbour project in which Ballina appears.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'BALLINA', blurb: 'The same two percentages drawn twice. One bar chart shows a gap of 6.8 percent; the other shows 60.7. The project measures how much a chart can lie.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-ballina',
  code: 'bln',
  accent: '#64471B',
  accentRationale: 'Ballina: a river-bronze from the widened solver search, apart from the Mayo county blue and the Castlebar ochre',
  pageType: 'city',
  place: {
    name: 'Ballina',
    eyebrow: 'Ballina, County Mayo',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Mayo' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-mayo', name: 'County Mayo' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Mayo', href: '/coding-classes-in-county-mayo' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ballina, County Mayo, Ireland',
  title: 'Best Coding Class in Ballina | Modern Age Coders',
  description: 'Coding, Python, AI and data lessons for Ballina learners aged 6 to 67, taught live online in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Ballina, with a data project that draws one comparison twice and measures how much the chart exaggerates.',
  twitterDescription: 'Live online coding, Python and AI classes for Ballina, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Ballina',
    description: 'Online coding, Python, AI, data and mathematics in level-based groups for children, teenagers and adults in Ballina, County Mayo, taught live in English.'
  },

  h1: 'Coding classes in Ballina',
  capsuleQ: 'What is the best coding class in Ballina?',
  capsule: 'Ballina has 10,500 usual residents in 4,165 households, and 3,347 of those households have broadband, all a live lesson with us requires. A teacher runs each lesson on video with a small group at one level or with one learner, about twice a week, for any age from six to sixty-seven. Nothing is charged for the first lesson; afterwards it is USD 100 a month in a group or USD 150 a month one to one.',
  lead: 'In Ballina, 3,347 of the 3,987 households that answered the census question have broadband: 84.0 percent. Across all 867 census towns together the figure is 90.0 percent. Draw those two numbers as bars starting from zero and Ballina\'s bar is a little shorter, which is the truth: 6.8 percent lower. Start the axis at 80 instead, a choice many chart tools make without asking, and Ballina\'s bar looks less than half the height of the other. The data has not changed; the picture now exaggerates the gap nine times over. This page draws the same comparison both ways, measures the exaggeration, and shows a second trick that needs no axis at all.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Ballina.',

  picks: {
    eyebrow: 'Course picks for Ballina',
    h2: 'First courses for Ballina learners',
    intro: 'A course for each age band below; a free first lesson with the course teacher confirms the fit.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that draw bars and scores on screen, and what happens when the ruler moves.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python charts made from real numbers, drawn honestly and then deliberately dishonestly to compare.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Full Python projects with charting libraries, axis settings and the checks a good chart needs.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who read or make charts at work and want to spot an exaggerated one at a glance.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Draw one comparison twice, and measure how much the chart lies',
      intro: 'Two percentages, one honest bar chart, one that starts its axis higher up. The learner computes how much larger the gap looks than it is, a ratio sometimes called the lie factor.',
      body: [
        { kind: 'table', caption: 'The two numbers being charted, Census 2022', head: ['', 'Households answering', 'With broadband', 'Share'], rows: [
          ['Ballina', '3,987', '3,347', '84.0%'],
          ['All 867 towns together', '1,203,105', '1,083,309', '90.0%']
        ] },
        { kind: 'table', mt: true, caption: 'Where the bar chart\'s axis starts, and what it does to the picture', head: ['Axis starts at', 'Ballina\'s bar looks shorter by', 'Exaggeration'], rows: [
          ['0 percent', '6.8%', '1.0 times'],
          ['50 percent', '15.2%', '2.2 times'],
          ['80 percent', '60.7%', '9.0 times'],
          ['83 percent', '86.5%', '12.8 times']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The honest version', p: 'With both bars starting at zero, Ballina\'s is 6.8 percent shorter, because its share is 6.8 percent lower than the all-towns figure. The length of each bar is the quantity, so the eye reads the difference correctly.' },
          { h3: 'The dramatic version', p: 'Start the axis at 80 and the bars show only what sits above 80: 4.0 units for Ballina against 10.0. The eye now sees a gap of 60.7 percent where the data holds 6.8, nine times too much, with every label on the chart still correct.' },
          { h3: 'The other side of the fact', p: 'Chart the homes without internet instead and the story flips: 543 of 3,987 Ballina households, 13.6 percent, against 8.0 in all towns, which makes Ballina 1.71 times the rate. Same census, same households; only the side being counted changed.' }
        ] },
        { kind: 'callout', h3: 'Bars start at zero, and every chart says which side it counts', p: 'A bar chart asks the eye to compare lengths, so a bar must start at zero or it misreports the quantity it stands for. Chart software often chooses a tighter axis automatically, because it makes small differences visible, and that is exactly how a 6.8 percent gap becomes a picture of a 60 percent one. The second habit is subtler: 84 percent connected and 13.6 percent unconnected are the same fact, but one makes Ballina look nearly level and the other makes it look far behind. An honest chart shows the quantity from zero and says plainly which side it chose to count.' },
        { kind: 'p', text: 'The learner draws both bar charts with a plotting library, changing a single setting, the lower limit of the axis. Then they write a small function that takes two values and an axis start and returns the exaggeration: the difference the picture shows divided by the difference in the data. Running it for axis starts of 0, 50, 80 and 83 produces the table above. A last exercise redraws the comparison as unconnected homes and asks the learner to write one honest sentence that uses both framings.' }
      ]
    },
    {
      id: 'rules', tint: 'tint', eyebrow: 'Charts that tell the truth',
      h2: 'When a tight axis is fine, and when it is not',
      intro: 'Not every chart has to start at zero. The rule depends on what the ink stands for.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Bars and areas', p: 'When the length or area of a shape is the quantity, the scale must start at zero. Anything else changes the ratio the reader sees.' },
          { h3: 'Lines and dots', p: 'A line chart of change over time, or a dot plot, encodes values by position rather than length, so a narrower axis can be reasonable, provided it is clearly labelled.' },
          { h3: 'Say what is counted', p: 'Whether a chart counts the connected or the unconnected, the working or the not working, should be stated in its title. Readers take the framing from the picture.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'The comparison figure is the census row for all 867 towns combined, not the whole State. The page takes no view on why Ballina\'s share differs, and it does not rank Ballina against other towns; it uses two numbers only to show what charts can do to them.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Ballina through the census',
      intro: 'Small area counts from Census 2022 for the town of Ballina, Co Mayo: its usual residents and the homes they live in.',
      body: [
        { kind: 'table', caption: 'Ballina in the census, April 2022', head: ['Counted in Ballina', 'Total'], rows: [
          ['Usual residents', '10,500'],
          ['Households', '4,165'],
          ['Households with broadband', '3,347'],
          ['Working residents in the travel table', '4,009'],
          ['Journeys to school, college or childcare', '2,578'],
          ['Children under fifteen in childcare', '667'],
          ['Households with no internet', '543']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'To work', p: 'Of 4,009 working residents, 2,447 drive and 579 walk; 246 travel as a car passenger, 242 work mainly at or from home, 222 go by van, 68 by bicycle, 47 by bus and 2 by train.' },
          { h3: 'To school', p: 'Of 2,578 journeys to school, college or childcare, 1,372 are made as a car passenger, 504 by bus and 393 on foot, with 73 learners driving.' },
          { h3: 'At home', p: 'On home-working, 782 of Ballina\'s working residents said yes for at least part of the week and 2,888 said no, while 339 skipped the question.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the station address as Station Road, Ballina, Co. Mayo, Eircode F26 EH76, with bike parking available. It has no connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Ballina learners',
      intro: 'Lessons happen live, two in a usual week, with the teacher there throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger learners', p: 'The census-night age table counts 1,069 children aged six to twelve in Ballina. They start with blocks and games, drawing and measuring things on screen.' },
          { h3: 'Teenagers', p: 'Ballina counts 810 people aged thirteen to eighteen, who are at the age for Python, websites, AI projects and data work such as honest charting.' },
          { h3: 'Adults', p: 'Adults join at any level, beginners included, and the course is fitted to them from the first lesson.' }
        ] },
        { kind: 'p', text: 'Every census number here comes straight from the Central Statistics Office; the chart arithmetic is ours, worked out on 19 September 2026. Irish Rail supplied the station details on its own page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing bars to drawing them honestly',
    intro: 'The bands overlap on purpose; lesson one places each learner.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Bars and scores', p: 'Block-coded games that draw scores as bars and compare their lengths.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'First charts', p: 'Python charts from real data, and what each axis setting does to the picture.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Honest charting', p: 'Chart choices, scales and framing, with a measure of how much a chart exaggerates.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Charts at work', p: 'Reports and slides whose charts compare fairly, and spotting the ones that do not.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to chart Ballina against other towns',
    intro: 'It will produce a chart in seconds. Check where the axis starts.',
    p1: 'Ask an AI tool to chart Ballina\'s broadband share against the all-towns figure and it will generate the code and the picture almost instantly. Plotting libraries often pick an axis range that fits the data tightly, which for 84.0 and 90.0 means a picture that exaggerates the gap many times over, and nothing in the output warns you.',
    p2: 'Once a learner has built both charts, they ask the assistant to start the axis at zero, to title the chart with the side being counted, and to state the ratio between the two values in a sentence underneath. The chart becomes slower to make and much harder to misread.',
    closer: 'Charts are cheap to make now. Making them truthful is the part that still needs a person.',
    blogAnchor: 'why learning to code is still time well invested'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Ballina lessons run',
    intro: 'How it is arranged.',
    cells: [
      { h3: 'In real time', p: 'Lessons are live, and the teacher responds to what the learner is building.' },
      { h3: 'Level-based groups', p: 'Five to ten learners who share a level, from Mayo, other parts of Ireland and abroad.' },
      { h3: 'Weekly rhythm', p: 'Two lessons in most weeks, about eight in a month, at times set at the start.' },
      { h3: 'School-year planning', p: 'Holidays, mid-terms and exams are built into the plan.' },
      { h3: 'At home', p: 'A laptop or desktop, a microphone and speakers or a headset, and an internet connection steady enough for live video.' },
      { h3: 'One to one', p: 'One-to-one lessons are arranged for learners who need a different pace or an hour that no group offers.' }
    ],
    spec: { title: 'No premises in Ballina', p: 'Ballina learners take every lesson by video. We have no classroom in Ballina or anywhere in Ireland, and a lesson is the same from any connected home.' }
  },

  fees: {
    h2: 'Fees for Ballina',
    intro: 'The full prices.',
    first: 'A full first lesson with the level assessed, at no charge.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same weekly frequency.',
    closer: 'Families outside India all pay the same monthly fee in US dollars. Nothing is charged for the first lesson, the first month is charged as the course begins, and holidays, missed lessons and a switch between group and private are explained on the pricing page.'
  },

  reviewsH2: 'Six reviews our families left on Google, unedited',

  book: {
    h2: 'Book a free first lesson in Ballina',
    intro: 'Give us the learner\'s age and interests and we will plan their first hour. It may end with a game, a working program, or two versions of one chart and a verdict on which is honest.',
    success: 'Thank you. We will contact you about the lesson soon.'
  },

  faq: {
    h2: 'Ballina coding class questions',
    intro: 'What families in Ballina ask first.',
    items: [
      { q: 'How many people live in Ballina?', a: 'Ballina had 10,500 usual residents in the Census 2022 small area tables, in 4,165 households; 3,347 of the households have broadband.' },
      { q: 'What is the data project on this page?', a: 'Drawing one comparison twice: Ballina\'s broadband share, 84.0 percent, against 90.0 percent in all towns together. With the bar chart\'s axis at zero the gap looks like the real 6.8 percent; with the axis at 80 it looks like 60.7 percent, an exaggeration of nine times.' },
      { q: 'Is Ballina badly connected, then?', a: 'The page does not judge that. It shows that the same two numbers can look like a small gap or a large one depending on how they are drawn, and that counting the unconnected homes instead, 13.6 percent against 8.0, changes the impression again.' },
      { q: 'How do Ballina residents travel to work?', a: 'Of 4,009 working residents in the travel table, 2,447 drive, 579 walk, 246 travel as a car passenger, 242 work mainly at or from home and 222 use a van.' },
      { q: 'When are lessons?', a: 'Afternoons once school is out, evenings, and weekends. Ballina lessons follow Irish time; India, where our teachers are, is four and a half hours ahead while Irish summer time runs and five and a half through the winter, so we offer hours that are sensible for both.' },
      { q: 'Do you teach adults?', a: 'Yes, to sixty-seven, whether or not they have coded before. The first lesson is also where an adult chooses, with the teacher, between learning in a small group and learning alone.' },
      { q: 'Will a Ballina learner be in a group with local learners?', a: 'Groups are formed by level, so classmates may be in Mayo, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Ballina?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Ballina cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around north Mayo',
    html: 'Ballina belongs to the <a class="cg-inline-link" href="/coding-classes-in-county-mayo">County Mayo</a> page. The <a class="cg-inline-link" href="/best-coding-class-in-castlebar">Castlebar</a> page, whose similarity project picked Ballina as its most consistent match, and the <a class="cg-inline-link" href="/best-coding-class-in-sligo">Sligo</a> page are nearby, all within <a class="cg-inline-link" href="/coding-and-ai-classes-in-connacht">Connacht</a>. For a fair comparison of online coding schools see <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this page</a>; the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ballina, Mayo and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-mayo', label: 'County Mayo' },
    { href: '/best-coding-class-in-castlebar', label: 'Castlebar' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-bln .cg-hero-grid { align-items: start; gap: clamp(1.14rem, 3.19vw, 2.59rem); }
.cg-root.cg-bln .cg-hero h1 { font-weight: 700; letter-spacing: -0.0176em; line-height: 1.06; }
.cg-root.cg-bln .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-bln .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bln .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0133em; }
.cg-root.cg-bln .cg-grid-3 { gap: clamp(1.08rem, 2.73vw, 2.14rem); }
.cg-root.cg-bln .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-bln .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bln .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-bln .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-bln .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Ballina, Co Mayo, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 10,500. SAP2022T15T2TOWN22: households 4,165, broadband 3,347, no internet 543, not stated 178 (3,987 answering; broadband 83.95 percent, no internet 13.62 percent). All-towns row of the same table (the 867 towns combined, not the State): total 1,317,616, not stated 114,511, broadband 1,083,309, no internet 95,677 (1,203,105 answering; 90.04 and 7.95 percent). Our arithmetic: Ballina lower by 6.8 percent of the all-towns share; bar-chart visual shortfall with axis starting at 0, 50, 80 and 83 percent: 6.8, 15.2, 60.7, 86.5 percent, exaggeration 1.0, 2.2, 9.0, 12.8; no-internet ratio 1.71. SAP2022T11T1TOWN22 to work total 4,009: car driver 2,447, on foot 579, car passenger 246, work mainly at or from home 242, van 222, bicycle 68, bus 47, train 2, not stated 140; to school, college or childcare total 2,578: car passenger 1,372, bus 504, on foot 393, car driver 73, not stated 174. SAP2022T11T4TOWN22: 782 work from home at least some of the time, 2,888 never, 339 not stated. SAP2022T11T5TOWN22: 667 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,069, ages 13 to 18 to 810. Irish Rail, Ballina: "Station Address Station Road Ballina Co.Mayo", "Eircode F26 EH76", "Bike parking available". Jackie Clarke Collection: clarkecollection.ie did not respond and mayo.ie/jackie-clarke-collection returned 404 on 19 September 2026, not quoted.',
    localProject: 'Honest charts and the lie factor. Ballina\'s broadband share is 84.0 percent of the 3,987 households that answered (3,347), against 90.0 percent across all 867 census towns together (1,083,309 of 1,203,105), a shortfall of 6.8 percent. Drawn as bars from zero, Ballina\'s bar is 6.8 percent shorter; with the axis starting at 50, 80 or 83 percent, it looks 15.2, 60.7 or 86.5 percent shorter, exaggerations of 2.2, 9.0 and 12.8 times, with every label still correct. Counting the other side, 543 households with no internet, 13.6 percent against 8.0, makes Ballina 1.71 times the rate: the same fact framed to look small or large. The learner draws both bar charts by changing one axis setting, writes a function that returns the exaggeration for any axis start, and ends with one honest sentence that uses both framings. Rules drawn: bars and areas start at zero; line and dot charts may use a labelled narrower axis; titles say which side is counted. Portlaoise owns linear versus logarithmic scales and Ulster percentage points versus per cent; this page is about bar baselines and complement framing. New family for the cluster: chart integrity.',
    requiredMentions: [
      '10,500',
      '4,165',
      '3,347',
      '3,987',
      '543',
      '4,009',
      '2,447',
      '782',
      '2,578',
      '1,372',
      '667',
      'F26 EH76'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T15T2TOWN22, households with internet access: Ballina, Co Mayo total 4,165, broadband 3,347, no internet 543, not stated 178; all-towns row (867 towns combined) total 1,317,616, broadband 1,083,309, no internet 95,677, not stated 114,511.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Ballina, Co Mayo: usual residents 10,500; to work 4,009 with car driver 2,447, on foot 579, car passenger 246, mainly at or from home 242, van 222, bicycle 68, bus 47, train 2; to school, college or childcare 2,578 with car passenger 1,372, bus 504, on foot 393, car driver 73; 782 work from home at least some of the time, 2,888 never, 339 not stated; 667 children under 15 in childcare; 1,069 aged 6 to 12 and 810 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Ballina station: "Station Address Station Road Ballina Co.Mayo", "Eircode F26 EH76", "Bike parking available".', url: 'https://www.irishrail.ie/en-ie/station/ballina' }
    ],
    rejectedClaims: [
      'Presenting the all-towns row as a national figure: it is the 867 towns combined.',
      'Any judgement on why Ballina\'s broadband share differs, or any ranking of Ballina against other towns.',
      'The Jackie Clarke Collection: its site did not respond and the council page returned 404 on 19 September 2026.',
      'Linear versus logarithmic axes (Portlaoise) and percentage points versus per cent (Ulster): owned elsewhere.',
      'The census-night population, density and the ATU Mayo campus: the County Mayo page owns them.'
    ]
  }
};
