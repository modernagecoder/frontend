'use strict';
// Athlone (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables published for "Athlone, Counties Westmeath & Roscommon", read
// 18 September 2026, the Irish Rail station page for Athlone and the Athlone
// Castle Visitor Centre site. Spine: what the numbers on a label are for. The
// town education table orders eleven qualifications, so numbering them 1 to 11
// and averaging gives 5.82 for the 13,007 people who stated one, 5.85 if two
// middle labels swap places and 5.35 on a ten-point numbering, none of which is
// a qualification anybody holds. The median category, technical or vocational
// qualification, needs only the order and is reported with that assumption
// stated. The travel table is nominal, so only the most common mode can be
// named. New to the cluster: what arithmetic a column allows. Westmeath owns the
// town-list population 22,869 and the TUS and civic centre eircodes, so the
// usual-resident count is used here and neither address appears. The cross-
// county town label is stated as a fact only: Louth and Carlow own that lesson.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'ATHLONE', blurb: 'Eleven qualifications, three different averages, not one of them held by anybody. Data work on the Shannon.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-athlone',
  code: 'ath',
  accent: '#6A4F3A',
  accentRationale: 'Athlone: a river-bank ochre from the solver, distinct from the Westmeath and Roscommon county accents on either side of the Shannon',
  pageType: 'city',
  place: {
    name: 'Athlone',
    eyebrow: 'Athlone, Westmeath and Roscommon',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Westmeath' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-westmeath', name: 'County Westmeath' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Westmeath', href: '/coding-classes-in-county-westmeath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Athlone, County Westmeath, Ireland',
  title: 'Best Coding Class in Athlone | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Athlone learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Athlone, with a project on why averaging a list of qualifications produces a number nobody holds.',
  twitterDescription: 'Coding and AI classes for Athlone, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Athlone',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Athlone, on the Westmeath and Roscommon border, taught live in English.'
  },

  h1: 'Coding classes in Athlone',
  capsuleQ: 'What is the best coding class in Athlone?',
  capsule: 'The census records 22,664 usual residents for Athlone, in 8,439 households, of which 6,649 report a broadband connection. None of them has to travel to learn with us: lessons run live on video twice in most weeks, either in a group of five to ten learners at the same level or one to one, and the age range runs from six to sixty-seven. The first lesson is free of charge. After it, a group place costs USD 100 a month and private lessons cost USD 150.',
  lead: 'Somebody will eventually ask for the average level of education in Athlone, and a spreadsheet will answer. Number the eleven qualifications in the census table from one to eleven, weight them by the 13,007 residents who stated one, and out comes 5.82. Put two of the middle labels the other way round and it becomes 5.85. Use a ten-point numbering instead and it is 5.35. Every one of those answers is arithmetic done correctly, and not one of them is a qualification any person in the town holds, because the labels were never numbers. What the order does support is a middle: the 6,504th person in the list sits in the technical or vocational qualification group. That is the whole project on this page, and it is one of the most useful hours a learner can spend with real data.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Athlone.',

  picks: {
    eyebrow: 'Course picks for Athlone',
    h2: 'Where an Athlone learner starts',
    intro: 'Pick on age and interest. The free lesson is taught by the course teacher, and it decides the level rather than a form.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Ordering, ranking and comparing in block code, which is where the difference between a label and a number starts.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Averages, middles and totals written as small programs, then tested on real figures.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Census tables in Python, with the right summary chosen for each kind of column.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who automate reports and would rather the automation not average a rating scale.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What the numbers on a label are for',
      intro: 'Highest level of education completed, Athlone, Census 2022. The 14,439 people in the table include 1,432 who did not state a level, so the shares below are out of the 13,007 who did.',
      body: [
        { kind: 'table', caption: 'Highest qualification, Athlone residents, in the order the table publishes', head: ['Qualification as published', 'People', 'Share of stated', 'Running total'], rows: [
          ['No formal education', '360', '2.8%', '360'],
          ['Primary education', '1,081', '8.3%', '1,441'],
          ['Lower secondary', '1,772', '13.6%', '3,213'],
          ['Upper secondary', '2,767', '21.3%', '5,980'],
          ['Technical or vocational qualification', '974', '7.5%', '6,954'],
          ['Advanced certificate or completed apprenticeship', '566', '4.4%', '7,520'],
          ['Higher certificate', '774', '5.9%', '8,294'],
          ['Ordinary bachelor degree or national diploma', '1,174', '9.0%', '9,468'],
          ['Honours bachelor degree, professional qualification or both', '1,814', '13.9%', '11,282'],
          ['Postgraduate diploma or degree', '1,593', '12.2%', '12,875'],
          ['Doctorate or higher', '132', '1.0%', '13,007']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three kinds of column, three kinds of summary', p: 'Names with no order, such as travel modes, allow only a count and a most common value. Ordered labels, such as these qualifications, allow a middle. Real quantities, such as minutes or people, allow a total and an average. Match the summary to the column and the numbers stay defensible.' },
          { h3: 'The average that moves', p: 'Numbering the eleven rows one to eleven gives a weighted mean of 5.82 for the same 13,007 people. Swap the technical or vocational row with the advanced certificate row and it is 5.85. Merge two rows into a ten-point scale and it is 5.35. The figure follows our numbering, not the town.' },
          { h3: 'The middle, with its condition stated', p: 'Half of 13,007 is 6,503.5, and the running total passes it inside the technical or vocational group, so that is the median category. This holds only if the published order is taken as a ranking, which we state as an assumption rather than claiming the middle rungs are ranked.' }
        ] },
        { kind: 'callout', h3: 'The same mistake, in almost every dashboard', p: 'Satisfaction scored one to five and reported as 3.7. Severity levels averaged across a support queue. Star ratings added up and divided. School grades converted to points and then averaged across subjects. Each of those turns labels into arithmetic, and the resulting figure moves whenever somebody changes the scoring rather than the world. The fix is not more statistics; it is asking what the column actually holds before choosing a summary, and writing the choice down where the next reader can see it.' },
        { kind: 'p', text: 'The project is a program in three parts. It reads the table, tags each column as names, ordered labels or quantities, and then computes only what the tag permits: a most common value for names, a median category and a share above a stated threshold for ordered labels, a mean for quantities. For Athlone that last part reports the honest summary of this table, 5,487 of the 13,007 who stated a level, which is 42.2%, hold a higher certificate or above. Then the learner deliberately writes the wrong version, prints 5.82, 5.85 and 5.35 side by side, and explains in two sentences why the changing answer is the proof.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Athlone in the town tables',
      h2: 'A town counted across a county line',
      intro: 'The CSO publishes this built-up area as Athlone, Counties Westmeath and Roscommon, because the town lies on both banks of the Shannon. Every figure below is for the town as published.',
      body: [
        { kind: 'table', caption: 'Athlone, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '22,664'],
          ['Households', '8,439'],
          ['Households with a broadband connection', '6,649'],
          ['Working residents in the travel table', '9,794'],
          ['Residents travelling to school, college or childcare', '5,877'],
          ['Children under fifteen in childcare', '1,351']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Home working', p: 'A table that asks about home working directly records 2,723 working residents doing some work from home, 5,480 who never do and 1,591 who did not state.' },
          { h3: 'The school journey', p: 'Of the 5,877 travelling to school, college or childcare, 2,742 go as a car passenger, 1,178 walk, 845 take a bus, 178 drive themselves and 119 cycle.' },
          { h3: 'Broadband', p: 'Broadband reaches about 78.8% of Athlone households by our arithmetic, with 665 households recording no internet access, 162 another kind of connection and 963 not stating.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Athlone station as Southern Station Road, Athlone, Co. Westmeath, Eircode N37 DF24, on the Dublin Heuston to Galway, Dublin Heuston to Westport and Ballina, and Galway to Limerick routes, with a car park of 96 spaces including 6 accessible bays and 2 electric charging points, a booking office open on weekday mornings and afternoons, and a filtered water refill unit on the platform.' }
      ]
    },
    {
      id: 'modes', tint: 'tint', eyebrow: 'A column with no order at all',
      h2: 'How Athlone travels to work',
      intro: 'The 9,794 working residents in the travel table, by the main means of travel each reported. Shares are our arithmetic, out of the full total including those who did not state.',
      body: [
        { kind: 'table', caption: 'Main means of travel to work, Athlone residents', head: ['Mode as published', 'Residents', 'Share'], rows: [
          ['Car driver', '4,898', '50.0%'],
          ['On foot', '1,044', '10.7%'],
          ['Work mainly at or from home', '968', '9.9%'],
          ['Car passenger', '541', '5.5%'],
          ['Bus, minibus or coach', '391', '4.0%'],
          ['Van', '376', '3.8%'],
          ['Bicycle', '251', '2.6%'],
          ['Train, DART or Luas', '121', '1.2%'],
          ['Not stated', '1,160', '11.8%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No middle exists here', p: 'These modes have no order, so there is no median mode and no average mode. The only summaries available are the counts, the shares and the most common value, which for Athlone is driving a car at 4,898 residents.' },
          { h3: 'Groups you make yourself', p: 'Adding the bus and train rows gives 512 residents, 5.2%, on public transport, and adding walking and cycling gives 1,295, 13.2%. Those groups are ours, not the table\'s, so the page says which rows went into each.' },
          { h3: 'The label sets the detail', p: 'One row covers bus, minibus and coach together and another covers train, DART and Luas, so a question about any one of those cannot be answered from this table. Detail not published is detail not available.' }
        ] },
        { kind: 'spec', title: 'The castle, currently closed', p: 'Athlone Castle Visitor Centre gives its address as St Peter\'s Square, Athlone, County Westmeath, N37 A6D7, and its own site announces a closure and redevelopment, saying that reopening is likely to extend into 2027. We name it because the address and the notice are published, not as somewhere to visit this term.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Athlone',
      h2: 'Where the lessons happen',
      intro: 'At home, at a fixed hour, with the same teacher each week.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary and post-primary', p: 'Block coding for younger children, then Python, web and AI projects through Junior Cycle, Transition Year and the senior cycle.' },
          { h3: 'Students in the town', p: 'Athlone counts 1,938 people aged fifteen and over still at school or college, so evening lessons here run alongside college timetables as well as school ones.' },
          { h3: 'Adults', p: 'Python, data and AI for working adults, including the 2,723 residents who already do part of their work from home.' }
        ] },
        { kind: 'p', text: 'This page names Irish Rail and Athlone Castle Visitor Centre only from their own published pages, and claims no relationship with either, nor with Westmeath County Council, Roscommon County Council or any school or college in the town. The census counts are reproduced exactly as the Central Statistics Office publishes them for the built-up area, the percentages and the three averages in the project are our own arithmetic, and any grouping of rows that the table does not itself publish is described as ours where it appears.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From ordering things to summarising them honestly',
    intro: 'Bands are a guide; the free lesson decides where a learner actually starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Order and count', p: 'Sorting, ranking and tallying in block code, and seeing that a position is not a score.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Middles and averages', p: 'Writing mean, median and mode from scratch in Python, then arguing about which one fits.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'The right summary', p: 'Choosing summaries for named, ordered and numeric columns in real published data.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Metrics that hold up', p: 'Designing measures for work that do not change meaning when somebody edits the scoring.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask for the average education level and you will get one',
    intro: 'To two decimal places, with no warning attached.',
    p1: 'Feed this table to an assistant and request an average, and it will oblige: a number appears, formatted neatly, sometimes with a category name beside it. The arithmetic will be right. The idea will be wrong, and nothing in the output says so, because the request was answerable in form even though it was meaningless in substance.',
    p2: 'A learner who has run the three numberings knows the reply to give instead: this column is ordered labels, so here is the median category, here is the share above a stated threshold, and here is why no mean is reported. That answer takes longer to produce and survives being questioned, which is the only test that counts.',
    closer: 'The skill worth having in 2026 is not asking a model for a number. It is knowing which numbers should never have been calculated.',
    blogAnchor: 'why learning to code still pays'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How the lessons run in Athlone',
    intro: 'Six practical points.',
    cells: [
      { h3: 'Live teaching only', p: 'A teacher on the call for the whole hour, reading the learner\'s screen and correcting as the work happens.' },
      { h3: 'Ability grouping', p: 'Five to ten learners at one level, joining from Athlone, elsewhere in Ireland and abroad.' },
      { h3: 'A protected hour', p: 'Two lessons in most weeks, roughly eight a month, in a slot agreed at the start and then kept.' },
      { h3: 'Term calendar', p: 'Mid-terms, holidays and exam weeks are factored in when the schedule is agreed, not improvised later.' },
      { h3: 'Kit at home', p: 'A laptop or desktop, working sound and a connection that carries video, verified in the free lesson.' },
      { h3: 'Private option', p: 'If no group at the right level runs at a suitable hour, the same course is taught one to one.' }
    ],
    spec: { title: 'One journey the town does not make', p: 'Half of working Athlone drives to work, and 2,742 school and college travellers go as car passengers. The coding lesson is the rare one that arrives at the house instead.' }
  },

  fees: {
    h2: 'Athlone class fees',
    intro: 'The complete list, three lines long.',
    first: 'A full first lesson, taught and assessed, at no charge and with no obligation.',
    group: 'A month of group lessons, five to ten learners at one level, about eight lessons.',
    private: 'A month of one to one lessons, same weekly frequency, one teacher and one learner.',
    closer: 'Every fee is monthly and quoted in US dollars, the single rate we use for families outside India, so an Athlone household sees the same figure as one in Galway and no euro price list beside it. Billing begins after the free lesson has fixed a course and an hour, and the pricing page covers pauses, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Six families, quoted from Google exactly as they wrote it',

  book: {
    h2: 'Book a free Athlone lesson',
    intro: 'Tell us an age and what the learner likes, and the first hour is built around that: a game to finish, a program to fix, or a table that needs a better summary.',
    success: 'Thank you. Somebody will contact you shortly about the Athlone lesson.'
  },

  faq: {
    h2: 'Athlone coding class questions',
    intro: 'The questions Athlone families ask before they book.',
    items: [
      { q: 'How many people live in Athlone?', a: 'The Census 2022 small area tables count 22,664 usual residents in the built-up area, which the CSO publishes as Athlone, Counties Westmeath and Roscommon because the town sits on both sides of the Shannon. Our Westmeath page quotes the census town list, which counts the same town on a different basis.' },
      { q: 'What is the Athlone data project?', a: 'Learners take the town education table, try to average eleven ordered labels, watch the answer change from 5.82 to 5.85 to 5.35 as the numbering changes, and then produce the summaries the column really supports: a median category and the share holding a higher certificate or above, which is 42.2% of those who stated a level.' },
      { q: 'Why can an average be wrong when the arithmetic is right?', a: 'Because averaging needs equal steps between values. Qualification labels have an order but no measured distance between them, so any mean depends on the numbers somebody attached to the labels rather than on the people counted.' },
      { q: 'How do Athlone residents travel to work?', a: 'Of the 9,794 working residents in the travel table, 4,898 drive, 1,044 walk, 968 work mainly at or from home, 391 take a bus, 251 cycle and 121 take a train, while 1,160 did not state a mode.' },
      { q: 'When do lessons take place?', a: 'After school, in the evening and on weekend mornings. Our teachers are in India, four and a half hours ahead of Irish clocks in summer and five and a half in winter, and the weekly hour is agreed during the free lesson.' },
      { q: 'Do you teach adults in Athlone?', a: 'Yes, up to sixty-seven, and from a complete standing start if needed. The free lesson decides whether an adult joins a group at the same level or works one to one.' },
      { q: 'Does the learner need to prepare anything?', a: 'Nothing. A laptop or desktop, sound and a connection are all that is required, and the teacher sets everything else up during the first lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Athlone?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Athlone cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Athlone',
    html: 'The county pages on either side of the river are <a class="cg-inline-link" href="/coding-classes-in-county-westmeath">County Westmeath</a> and <a class="cg-inline-link" href="/coding-classes-in-county-roscommon">County Roscommon</a>, inside the provinces of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-connacht">Connacht</a>. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> puts us beside other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page we have built.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Athlone, Westmeath and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-westmeath', label: 'County Westmeath' },
    { href: '/coding-classes-in-county-roscommon', label: 'County Roscommon' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ath .cg-hero-grid { align-items: start; gap: clamp(1.16rem, 3.06vw, 2.58rem); }
.cg-root.cg-ath .cg-hero h1 { font-weight: 700; letter-spacing: -0.0186em; line-height: 1.055; }
.cg-root.cg-ath .cg-capsule { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.11rem; }
.cg-root.cg-ath .cg-eyebrow { letter-spacing: 0.166em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ath .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0126em; }
.cg-root.cg-ath .cg-grid-3 { gap: clamp(1.09rem, 2.63vw, 2.11rem); }
.cg-root.cg-ath .cg-table caption { letter-spacing: 0.026em; font-weight: 700; }
.cg-root.cg-ath .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ath .cg-table td:last-child { color: var(--cg-muted); }
.cg-root.cg-ath .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.99rem; }
.cg-root.cg-ath .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Athlone, the built-up area published as "Athlone, Counties Westmeath & Roscommon", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T10T4TOWN22, highest level of education completed, total 14,439: no formal education 360, primary 1,081, lower secondary 1,772, upper secondary 2,767, technical or vocational 974, advanced certificate or completed apprenticeship 566, higher certificate 774, ordinary bachelor degree or national diploma 1,174, honours bachelor degree or professional qualification 1,814, postgraduate diploma or degree 1,593, doctorate or higher 132, not stated 1,432; the eleven stated categories sum to 13,007 and the running totals are 360, 1,441, 3,213, 5,980, 6,954, 7,520, 8,294, 9,468, 11,282, 12,875 and 13,007. Our arithmetic on that distribution: weighted mean 5.82 numbering the rows 1 to 11, 5.85 with the technical or vocational and advanced certificate rows exchanged, 5.35 on a ten-point numbering that merges those two; median category technical or vocational qualification, since half of 13,007 is 6,503.5 and the running total reaches 6,954 there; higher certificate or above 5,487, which is 42.2 percent. SAP2022T2T1TOWN22 usual residents 22,664. SAP2022T15T2TOWN22: households 8,439, broadband 6,649, other 162, none 665, not stated 963. SAP2022T11T1TOWN22 to work total 9,794: car driver 4,898, on foot 1,044, mainly at or from home 968, car passenger 541, bus minibus or coach 391, van 376, bicycle 251, train DART or Luas 121, other including lorry 30, motorcycle or scooter 14, not stated 1,160; to school, college or childcare total 5,877: car passenger 2,742, on foot 1,178, bus 845, car driver 178, bicycle 119, train 80. SAP2022T11T4TOWN22: 9,794 working persons, 2,723 work from home at least some of the time, 5,480 never, 1,591 not stated. SAP2022T11T5TOWN22: 1,351 children under 15 in childcare, 606 aged 0 to 4 and 745 aged 5 to 14. SAP2022T10T2TOWN22: 1,938 still at school or college. Irish Rail, Athlone station: "Southern Station Road Athlone Co. Westmeath", "Eircode N37 DF24", routes "Dublin Heuston - Galway", "Dublin Heuston - Westport and Ballina", "Galway - Limerick", "Spaces : 96", "Disabled Parking : 6", "Electric Car Charging : 2", booking office "Monday to Friday: 07:45 - 12:45 and 13:45 - 16:00", "Ecofill Triple filtered water refill unit". Athlone Castle Visitor Centre: "St Peter\'s Square, Athlone, County Westmeath, N37 A6D7"; "Athlone Castle Visitor Centre: Closure & Redevelopment Update"; "The reopening is likely to extend into 2027".',
    localProject: 'What the numbers on a label are for. The Athlone education table publishes eleven qualification categories in order, and 13,007 residents stated one of them. Numbering the categories 1 to 11 and weighting by those counts gives a mean of 5.82; exchanging the technical or vocational row with the advanced certificate row gives 5.85; a ten-point numbering that merges the two gives 5.35. All three are correct arithmetic and none corresponds to a qualification anybody holds, because the labels carry an order but no measured distance. What the order does support is a middle: half of 13,007 is 6,503.5, the running total passes it inside the technical or vocational group, so that is the median category, reported with the stated assumption that the published order is a ranking. The defensible summary for the page is 5,487 of 13,007, or 42.2 percent, holding a higher certificate or above. The travel table is then used as the nominal contrast: its modes have no order, so only counts, shares and the most common value, car driver at 4,898 of 9,794, can be quoted, and any grouping such as bus plus train at 512 or walking plus cycling at 1,295 is labelled as ours. New to the cluster: what arithmetic a column allows, and the difference between named, ordered and numeric data.',
    requiredMentions: [
      '22,664',
      '8,439',
      '6,649',
      '9,794',
      '4,898',
      '5,877',
      '2,742',
      '2,767',
      '1,814',
      '13,007',
      'N37 DF24',
      'N37 A6D7'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T10T4TOWN22, highest level of education completed, Athlone, Counties Westmeath & Roscommon: no formal education 360, primary 1,081, lower secondary 1,772, upper secondary 2,767, technical or vocational 974, advanced certificate or completed apprenticeship 566, higher certificate 774, ordinary bachelor degree or national diploma 1,174, honours bachelor degree or professional qualification 1,814, postgraduate diploma or degree 1,593, doctorate 132, not stated 1,432, total 14,439.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T10T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel, Athlone: to work 9,794 with car driver 4,898, on foot 1,044, mainly at or from home 968, car passenger 541, bus 391, van 376, bicycle 251, train 121, not stated 1,160; to school, college or childcare 5,877 with car passenger 2,742, on foot 1,178, bus 845, car driver 178, bicycle 119, train 80.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T10T2TOWN22, Athlone: usual residents 22,664; households 8,439, broadband 6,649, no internet 665, not stated 963; 2,723 work from home at least some of the time, 5,480 never, 1,591 not stated; 1,351 children under 15 in childcare; 1,938 still at school or college.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Athlone station: "Southern Station Road Athlone Co. Westmeath", "Eircode N37 DF24"; routes "Dublin Heuston - Galway", "Dublin Heuston - Westport and Ballina", "Galway - Limerick"; "Spaces : 96", "Disabled Parking : 6", "Electric Car Charging : 2"; booking office "Monday to Friday: 07:45 - 12:45 and 13:45 - 16:00"; "Ecofill Triple filtered water refill unit".', url: 'https://www.irishrail.ie/en-ie/station/athlone' },
      { claim: 'Athlone Castle Visitor Centre: "St Peter\'s Square, Athlone, County Westmeath, N37 A6D7"; "Athlone Castle Visitor Centre: Closure & Redevelopment Update"; "The reopening is likely to extend into 2027".', url: 'https://www.athlonecastle.ie/' }
    ],
    rejectedClaims: [
      'Any average education level for Athlone presented as a finding: the three values 5.82, 5.85 and 5.35 appear only as a demonstration that the number follows the numbering.',
      'A claim that the middle rungs of the education list are strictly ranked: the median category is reported with the published order stated as an assumption.',
      'The cross-county town as the page\'s lesson: the Louth and Carlow pages own the cross-county town trap, so the two-county label is stated as a fact only.',
      'The census town-list population of Athlone, the Technological University of the Shannon address and the Athlone Civic Centre address: the County Westmeath page owns all three.',
      'Any residual-category lesson from the Athlone industry table: the Naas page owns that project.',
      'Athlone Castle as somewhere to visit, or any euro admission price: the centre\'s own site says it is closed for redevelopment.',
      'Any reason for the share of Athlone residents who did not state a travel mode or a qualification.'
    ]
  }
};
