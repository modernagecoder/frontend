'use strict';
// Limerick (cg- city page, Ireland cluster, Phase 3). Spine: the Shannon Bridge
// traffic counter and the hours that are simply not there. GEOGRAPHY: Limerick
// has one council, Limerick City and County Council, so the CSO's Limerick
// press statements describe the whole council area of 209,536, never the city,
// unless a quote says "city and suburbs". The built-up city is 102,287 and the
// CSO labels it as spanning Counties Limerick and Clare. Every figure on this
// page is labelled with the geography it belongs to. Facts read at primary
// sources on 16 September 2026: CSO tables F1015, SAP2022T1T1ACTY and URLIA43,
// the Limerick summary and Profile 1, 5, 7 and 8 statements, gov.ie's January
// 2018 LCCS list (the only County Limerick school was Coláiste Chiaráin in
// Croom, and no Limerick city school was among the first forty), ul.ie, tus.ie,
// irishrail.ie, limerick.ie, kingjohnscastle.ie and kneat.com. Dataset measured
// by us: Shannon Bridge Counter Data, Limerick City and County Council, listed
// as Creative Commons Attribution Share-Alike, 71 monthly files and 2,608,032
// rows, every hour holding 56 rows (7 zones by 8 classes) from one sensor. The
// measured traps are the nightly missing hours from late 2022, the February
// 2023 file with no rows at all, the mixed classes in a single volume column,
// and the like-for-like comparison that changes the answer. SPEED has no stated
// unit, so no unit is claimed. Cork owns its pedestrian counters and its census
// figures; Dublin owns Dublin Bikes.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'city', tag: 'LIMERICK', blurb: 'The Shannon city, with a project on the bridge counter whose late-night hours quietly disappear.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-limerick',
  code: 'lmk',
  accent: '#712712',
  accentRationale: 'Limerick: a deep brick-red brown from the solver, clear of both Irish greens and of every other Ireland page',
  pageType: 'city',
  place: {
    name: 'Limerick',
    eyebrow: 'Limerick, Munster',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Limerick' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Limerick, Ireland',
  title: 'Best Coding Classes in Limerick | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for learners across Limerick city and county, ages 6 to 67, at a fixed weekly hour. First lesson free.',
  ogDescription: 'Coding and AI classes for Limerick, built on the city\'s own bridge counter and the two hours a night that vanish from its records.',
  twitterDescription: 'Limerick coding classes, ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Limerick Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Limerick, taught live in English.'
  },

  h1: 'Coding classes in Limerick',
  capsuleQ: 'What are the best coding classes in Limerick?',
  capsule: 'Limerick is a single council area of 209,536 people wrapped around a built-up city of 102,287, and the difference matters: most figures published about "Limerick" describe the whole council, not the city. It is a place where 27% of workers did some work from home against 32% nationally, where 34,381 residents were born outside the State, and where fewer than half the people working in the city actually live in it. A live online class suits that shape of place, because it does not care whether a learner is in Castletroy, Dooradoyle or out past Adare. We teach ages 6 to 67 in groups of five to ten at a single level, or one to one, with teachers working from India at an hour fixed to the Irish clock. Nothing is charged for the first lesson; after it, a shared place is USD 100 a month and a private one USD 150.',
  lead: 'There is a sensor on the Shannon Bridge that counts everything crossing it, hour by hour, sorted into cars, vans, trucks, motorbikes, bikes and people on foot. Limerick City and County Council publishes the lot, a month at a time, and it comes to 2,608,032 rows. Download a few months and something odd shows up: from late 2022 onwards, the last hours of each day are missing. In December 2022, and again in August 2026, the 22:00 and 23:00 readings are absent on all 31 days. In March 2023 only the 23:00 hour is gone. Nothing announces this. There is no note, no gap marker, no data dictionary at all. So anyone comparing a 2021 month against a 2026 month, using the totals as published, is comparing 24 hours a day against 22, and will get a number that is confidently wrong in a direction they cannot predict. Working out how to compare them fairly is the best data lesson this city has to offer, and it is where our teenage learners here start.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Limerick.',

  picks: {
    eyebrow: 'Course picks for Limerick',
    h2: 'Four courses for the Shannon city',
    intro: 'Pick by what the learner wants to make, not by age alone. Each of these begins with one free lesson, taught live, with no payment details asked for.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Stories and games in Scratch, including a bridge counter that keeps score and a discussion about what happens when it stops counting.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python taken seriously across the Junior Cycle years, using the city\'s own traffic files as the practice material.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Seventy-one monthly files, one missing month, and the question of how to compare two Augusts honestly.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For working adults: scripts that download, check and flag gaps in a data feed before anyone builds a report on it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Limerick today',
      h2: 'One council, one city, and two different populations',
      intro: 'Limerick merged its city and county councils, so the word Limerick in an official statistic usually means the whole council area. Here are both figures, kept apart on purpose.',
      body: [
        { kind: 'table', caption: 'Limerick in Census 2022, Central Statistics Office', head: ['Measure', 'Figure', 'Which Limerick'], rows: [
          ['Limerick City and County Council', '209,536, up 8% or 14,637 since 2016', 'The whole council area'],
          ['Limerick city and suburbs', '102,287', 'The built-up city, which the CSO labels as spanning Counties Limerick and Clare'],
          ['Average age of the built-up city', '37.9', 'With 17.6% aged under 15'],
          ['Born outside the State', '34,381, or 17%, up from 14% in 2016', 'Council area'],
          ['Worked from home at least one day a week', '24,866 people, 27% of the workforce against 32% nationally', 'Council area'],
          ['Third-level qualifications', '41% of those aged 15 and over, against 45% nationally, with 1,450 PhD holders', 'Council area']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A city that others travel into', p: 'Fewer than half the people working in Limerick city and suburbs live there: 49% were usual residents. The largest single feeder town is Ennis in County Clare, sending 1,140 people to work in the city.' },
          { h3: 'Who lives here', p: 'Non-Irish citizens make up 11% of the council area. The largest groups are Polish at 4,384, then UK at 2,544, Indian at 2,341 and Brazilian at 1,193.' },
          { h3: 'How Limerick travels', p: 'Of 80,665 people travelling to work, 49,996 drove, 7,091 walked, 2,571 took a bus, 1,308 cycled and 140 went by train. Among secondary students, 4,066 took a bus and 16 the train.' }
        ] },
        { kind: 'p', text: 'One more figure that is easy to misread. The CSO records 45,486 people working in Limerick city and suburbs, and its table of where they come from puts 45.4% in the category called cities. That category means urban areas of any kind, not Limerick city itself, so it cannot be read as "45% live in Limerick". We mention it because that is precisely the sort of column a learner has to interrogate, and this page would rather show the trap than step in it.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science and Limerick schools',
      h2: 'One first-phase school in the county, none in the city',
      intro: 'Leaving Certificate Computer Science started in a named group of schools in September 2018. Limerick barely featured.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The county\'s single school', p: 'Coláiste Chiaráin in Croom was the only County Limerick school on the January 2018 first-phase list. No school inside Limerick city was among the first forty.' },
          { h3: 'What that meant', p: 'Families in the city whose children wanted the subject in those years had to wait, or find the ground elsewhere. Availability has broadened since, but we found no current official list to prove where it stands today.' },
          { h3: 'What we do instead', p: 'Our classes do not deliver the Leaving Certificate subject or its examination. They build the programming, data handling and problem solving the subject assumes, at an hour that fits around school.' }
        ] },
        { kind: 'p', text: 'There is more computing in Limerick than the school list suggests. The University of Limerick sits on a 130 hectare riverside campus with the Shannon running through it and more than 19,000 students, over 3,300 of them international, alongside research centres and the Nexus Innovation Centre. The Technological University of the Shannon has its Moylish campus in the city at V94 EC5T, with the Limerick School of Art and Design on Clare Street. And at Plassey Business Campus in Castletroy, the validation software company Kneat lists its European office at V94 5F68. A child in Limerick grows up surrounded by this work; the question is whether they get to try it before choosing.' },
        { kind: 'spec', title: 'Manufacturing still leads', p: 'The largest single employment sector in the council area is manufacturing, with more than 12,500 workers. Software and data work sit inside those companies too, which is one reason the analytical habits taught here travel well locally.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The Shannon Bridge counter, and the hours that are not there',
      intro: 'Limerick City and County Council publishes the bridge counter monthly under a Creative Commons Attribution Share-Alike licence. It is generous, detailed and entirely undocumented, which makes it an unusually good teacher.',
      body: [
        { kind: 'table', caption: 'What we measured in the published files, read 16 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Monthly files published', '71, from November 2020 to September 2026'],
          ['Rows in total', '2,608,032'],
          ['Rows per hour', '56: seven zones by eight vehicle and pedestrian classes, from a single sensor'],
          ['Missing hours, December 2022', '62: the 22:00 and 23:00 readings on all 31 days'],
          ['Missing hours, March 2023', '63: the 23:00 reading on all 31 days, plus a one-off gap of about 32 hours'],
          ['The February 2023 file', 'Exists, and contains no rows at all']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Prove the shape', p: 'Before anything else, learners check that every hour really does have 56 rows and that the seven zones and eight classes are the same in all 71 files. They are. That confidence makes the next step meaningful.' },
          { h3: '2. Map what is missing', p: 'A grid of month against hour of day shows the late-night gap appearing in late 2022 and staying. It also shows January 2023 stopping on the 18th and February 2023 contributing nothing.' },
          { h3: '3. Compare like with like', p: 'Then, and only then, compare two Augusts, using only the hours present in both. The number changes, and the learner can explain exactly why.' }
        ] },
        { kind: 'callout', h3: 'The measurement that makes the point', p: 'Compare August 2021 with August 2026 using the raw monthly totals and bicycle crossings appear to rise 40.9%. Compare only the hours from midnight to 21:59, which exist in both months, and the rise is 45.6%, from 13.6 bikes an hour to 19.8. The naive comparison understates the change, because the 2021 total includes late-night hours that the 2026 file does not have at all. Pedestrians move from 31.9 to 35.0 an hour on the same fair basis. Neither figure is available to anyone who simply adds up the columns.' },
        { kind: 'p', text: 'Two smaller traps live in the same file and both are worth an evening. Every class shares one volume column, so adding it all up for "people crossing the bridge" in August 2026 gives 713,254, of which cars are 529,663 and actual pedestrians only 23,865, about 3.3%. And the rows marked undefined always carry a volume of zero while still reporting a gap value, so averaging the gap across every class quietly mixes in thousands of rows that measured nothing.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Working with a gappy feed',
      h2: 'Five habits for data with holes in it',
      intro: 'Learned on a bridge counter, used afterwards on sales data, attendance records, sensors and anything an AI assistant is asked to summarise.',
      body: [
        { kind: 'table', caption: 'How to handle a feed that does not tell you what is missing', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Count what should be there', 'Build the full list of expected timestamps and subtract what you have', 'Averages computed over unequal coverage'],
          ['Chart the coverage', 'Draw a grid of period against hour before drawing anything else', 'Discovering a blackout after publishing'],
          ['Open every file', 'Check row counts per file, including the ones you expect to be dull', 'An empty month adding nothing and raising no error'],
          ['Filter before you sum', 'Split by class or category before touching a shared value column', 'Cars counted as pedestrians'],
          ['Say what the units are', 'If the publisher does not state a unit, say so rather than assuming', 'A speed figure quoted in the wrong units']
        ] },
        { kind: 'p', text: 'The last habit has a real example here. The speed column has no documented unit, and the package description on the portal is empty. Pedestrian speeds sit around 4.6 to 4.9, which looks like kilometres per hour, and that is exactly the kind of reasonable guess that should be written down as a guess rather than published as a fact. Our students learn to put a short assumptions note at the top of every analysis for precisely this.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A counting game where the counter switches off at bedtime, and a conversation about what the day\'s total then means.' },
          { h3: 'Teenagers', p: 'The real files in Python: prove the structure, map the gaps, then compare two Augusts fairly and defend the method.' },
          { h3: 'Adults', p: 'The same checks written as reusable code, run before any dashboard or report at work is trusted.' }
        ] },
        { kind: 'p', text: 'We are not connected to Limerick City and County Council, the University of Limerick, the Technological University of the Shannon, Iarnród Éireann, Kneat or any school mentioned here, and no such link is implied. Census figures come from the Central Statistics Office for 2022; the counter measurements are ours, taken from the council\'s published files.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'One routing key, a castle and a station at Parnell Street',
      intro: 'Limerick addresses share a routing key, which makes the city unusually easy to recognise on paper.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'V94 everywhere', p: 'The council\'s headquarters at Merchants Quay is V94 EH90, the University of Limerick is V94 T9PX, Colbert Station on Parnell Street is V94 H2PP, the Moylish campus is V94 EC5T and King John\'s Castle is V94 FX25.' },
          { h3: 'King John\'s Castle', p: 'In the medieval quarter, the council\'s own visitor pages describe over 800 years of history and towers looking out across the Shannon and the rooftops of the city.' },
          { h3: 'Colbert Station', p: 'The city\'s rail station has sheltered bike parking, nine rentable bicycle lockers and a Changing Places toilet, with the taxi rank to the right as you leave.' }
        ] },
        { kind: 'spec', title: 'The largest town is not the city', p: 'When the CSO lists towns in Limerick, the city is counted separately, so the largest town in the county is Newcastle West with 7,209 people. It is a good reminder that official categories rarely match how people talk, which is the same lesson the bridge file teaches with its columns.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a counter that sleeps to a comparison that holds',
    intro: 'Bands are indicative. What decides a learner\'s starting point is the work they do in the first free lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting and noticing', p: 'Small programs that tally things, and the discovery that a stopped counter is not the same as nothing happening.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Files and rows', p: 'Opening real files, counting rows, and checking that a table holds what it claims to hold.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Gaps and fair tests', p: 'Mapping missing periods, filtering by class, and building a comparison that survives questioning.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Checks that run themselves', p: 'Automating coverage checks so a gap is caught before a report is built on it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will compare two Augusts instantly. Why should a Limerick teenager learn to check the comparison?',
    intro: 'Because the file does not mention that one August has 22-hour days.',
    p1: 'Ask an AI tool which August was busier on the Shannon Bridge and it will sum the volume column for each month and answer. It has no way to know that the later file is missing its last two hours every single day, because nothing in the data says so; the gap is only visible if you construct the list of hours that should exist and check which ones do not. The assistant will be confident, quick and wrong by several percentage points, in a direction that flatters the earlier year.',
    p2: 'This is not an argument against the tools. It is an argument for knowing what question to ask them, and for being able to check the answer. A learner who has mapped the blackout on this file will do the same thing instinctively with a sales report that stops recording at month end, a fitness app that loses a week, or a school system that changed its attendance codes halfway through a year.',
    closer: 'So the reason for a Limerick child to learn to code in 2026 is not that a company might one day hire them, though several might. It is that the judgement to ask whether the data covers what it claims to cover is becoming one of the most portable skills there is.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Castletroy, Dooradoyle or out the Ennis road',
    intro: 'The council area stretches far past the city, and a lesson delivered live online lands in every part of it at once.',
    cells: [
      { h3: 'No journey at all', p: 'Whether a learner is in Raheen or thirty kilometres out, the class starts at the same second and the commute is a chair.' },
      { h3: 'Irish school stages, by name', p: 'Teachers talk about First Year, the Junior Cycle, Transition Year and sixth year as Irish schools do, so families are not translating anything.' },
      { h3: 'A genuine free lesson', p: 'Real teaching on a real task, followed by a straight recommendation about level, course and weekly hour. No card is requested at any point.' },
      { h3: 'Ability groups, not age groups', p: 'Five to ten learners who can work at the same pace, gathered from Limerick and several other countries so that each level has a workable hour.' },
      { h3: 'Two lessons most weeks', p: 'About eight a month at a fixed time, with pauses for mid-term, exams and family holidays agreed in advance.' },
      { h3: 'Teachers on Indian time', p: 'Their clock never shifts, so they run four and a half hours ahead of Ireland in summer and five and a half in winter, which puts Limerick afternoons and evenings in their working day.' }
    ],
    spec: { title: 'A county where fewer work from home', p: 'Only 27% of Limerick workers did any work from home in 2022, against 32% nationally, so many households need an evening slot rather than an afternoon one. That is the most common request here, and it is easy to accommodate.' }
  },

  fees: {
    h2: 'What classes cost in Limerick',
    intro: 'Three numbers, and no small print underneath them.',
    first: 'A complete lesson at no charge, ending with a clear statement of level and a recommended course.',
    group: 'A month of teaching, normally eight lessons, in a group of five to ten learners of equal ability.',
    private: 'The same monthly rhythm of roughly eight lessons, with a teacher working with one learner alone.',
    closer: 'Everything is billed in US dollars on the single rate charged outside India, so Castletroy and Croom pay identically and no euro list exists. Charging starts only once a course and a weekly hour have been settled in the free lesson, and the pricing page explains what happens with pauses, missed lessons and changes of format.'
  },

  reviewsH2: 'Six unedited Google reviews from our families',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'The opening task is chosen to suit: a Scratch counter for a younger child, a first script that opens a table, or a coverage map of a real Limerick traffic file for a teenager who likes a puzzle.',
    success: 'Received. The team will be in touch about your Limerick class shortly.'
  },

  faq: {
    h2: 'Limerick coding class questions',
    intro: 'What families here ask most often.',
    items: [
      { q: 'How many people live in Limerick?', a: 'Census 2022 put 209,536 in the Limerick City and County Council area and 102,287 in the built-up city and suburbs. Most published Limerick statistics describe the council area, because the city and county share one council.' },
      { q: 'Did Limerick schools offer Leaving Certificate Computer Science from the start?', a: 'Barely. Coláiste Chiaráin in Croom was the only County Limerick school in the January 2018 first phase, and no school inside the city was among the first forty. Availability has widened since, but no current official list exists to quote.' },
      { q: 'What is the Shannon Bridge project?', a: 'Learners work with the council\'s published bridge counter: 71 monthly files and 2,608,032 rows. They prove its structure, map the hours missing from late 2022 onwards, and then compare two months using only the hours both of them actually contain.' },
      { q: 'Are more people cycling over the bridge?', a: 'On a fair comparison of matching hours, bicycle crossings rose from 13.6 an hour in August 2021 to 19.8 in August 2026, a rise of 45.6%. Comparing raw monthly totals gives 40.9%, because the later file is missing its late-night hours.' },
      { q: 'Why do all Limerick addresses start with V94?', a: 'V94 is the routing key for the Limerick post town, and it appears in the published addresses of the council at Merchants Quay, the University of Limerick, Colbert Station and King John\'s Castle alike.' },
      { q: 'What hours can Limerick learners take classes?', a: 'Afternoons, evenings and weekend mornings all work. Our teachers sit four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is fixed during the free lesson.' },
      { q: 'Can lessons pause for the Junior Cycle or Leaving Cert?', a: 'Yes, and most families do exactly that. Pauses for exam weeks and school holidays are agreed with the teacher, and the course is chosen around the school year.' },
      { q: 'Is there a Modern Age Coders classroom in Limerick?', a: 'No, and we do not claim one. Teaching happens live online only, with no premises anywhere in Ireland. The learner needs a laptop or desktop, working sound and a steady connection, and the telephone number shown is an Indian one.', boiler: true },
      { q: 'What do Limerick coding classes cost?', a: 'The first lesson is free. Continuing costs USD 100 a month for a group place, which covers two live lessons a week and roughly eight a month with five to ten learners, or USD 150 a month for the same schedule taught privately. Course, format and hour are agreed before anything is paid.', boiler: true },
      { q: 'How many learners share a group?', a: 'Five to ten. Learners are matched on ability, working pace and what they want to build, not on age or address. Where no suitable group meets at a workable hour, private lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Down the country and up to the capital',
    html: 'The other cities have pages of their own: <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> and <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. Anyone weighing schools against each other should read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a> first, and learners heading towards models and data will want <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-ireland">AI and machine learning classes in Ireland</a>. Everything Irish hangs off the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Limerick and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lmk .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3.4vw, 2.9rem); }
.cg-root.cg-lmk .cg-hero h1 { font-weight: 700; letter-spacing: -0.019em; line-height: 1.08; }
.cg-root.cg-lmk .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-lmk .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lmk .cg-section-head h2 { max-width: 36ch; letter-spacing: -0.01em; }
.cg-root.cg-lmk .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2.1rem); }
.cg-root.cg-lmk .cg-table caption { letter-spacing: 0.02em; font-weight: 700; }
.cg-root.cg-lmk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lmk .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-lmk .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-lmk .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Limerick, Census 2022 (CSO): Limerick City and County Council 209,536, up 8 percent or 14,637 on 2016; Limerick city and suburbs 102,287, labelled by the CSO as spanning Counties Limerick and Clare, average age 37.9, 17.6 percent under 15. Council-area figures: non-Irish citizens 11 percent, Polish 4,384, UK 2,544, Indian 2,341, Brazilian 1,193; 4,156 people of Asian or Asian Irish Indian, Pakistani or Bangladeshi background; 143,138 born in the county, 29,099 elsewhere in the State and 34,381, or 17 percent, outside it, up from 14 percent in 2016; 24,866 people worked from home at least one day a week, 27 percent against 32 percent nationally; 57,000 with third-level qualifications, 41 percent of those aged 15 and over against a national 45 percent, and 1,450 PhD holders, 4 percent of the State total; average age at which full-time education ceased 20.6. Travel: 80,665 travelling to work, 49,996 by car, 7,091 walking, 2,571 by bus, 1,308 cycling and 140 by train; of 15,272 secondary students, 6,828 driven, 344 driving themselves, 4,066 by bus and 16 by train; manufacturing the largest sector at more than 12,500 workers. City and suburbs: 49 percent of the workforce were usual residents, and Ennis was the largest commuter town at 1,140 people; CSO table URLIA43 gives 45,486 workers with 45.4 percent from areas typed as cities, which is an area type and not Limerick city. Newcastle West is the largest town at 7,209. Gov.ie, 4 January 2018: Coláiste Chiaráin, Croom was the only County Limerick school in the first-phase Leaving Certificate Computer Science list, and no Limerick city school appeared. Addresses: council headquarters Merchants Quay V94 EH90 and Dooradoyle Road V94 WV78, University of Limerick V94 T9PX, Colbert Station Parnell Street V94 H2PP, TUS Moylish V94 EC5T, King John\'s Castle V94 FX25, Kneat at Plassey Business Campus V94 5F68. University of Limerick: a 130 hectare riverside campus on the Shannon, over 19,000 students including more than 3,300 international students, the Nexus Innovation Centre, and the title Ireland\'s Sporting Campus. TUS: Moylish campus in the city, with the Limerick School of Art and Design on Clare Street. Colbert Station: sheltered bike parking, nine rentable lockers, a Changing Places toilet, taxi rank to the right on exit. King John\'s Castle: over 800 years of history in the medieval quarter, per limerick.ie.',
    localProject: 'Hours that are simply absent. Shannon Bridge Counter Data, published monthly by Limerick City and County Council and listed as Creative Commons Attribution Share-Alike, runs to 71 monthly files and 2,608,032 rows, every hour carrying 56 rows, seven zones by eight classes, from the single sensor 0331D5, with no data dictionary at all. Measured: December 2022 is missing 62 hours, the 22:00 and 23:00 readings on all 31 days, and August 2026 the same; March 2023 is missing the 23:00 hour on all 31 days plus a one-off gap of about 32 hours; January 2021 and August 2021 are essentially complete. The February 2023 resource exists and holds zero rows, and January 2023 stops on the 18th. Effect: comparing August 2021 with August 2026 on raw totals gives bikes up 40.9 percent, while comparing only the hours from midnight to 21:59 present in both gives 13.6 to 19.8 an hour, up 45.6 percent; pedestrians go 31.9 to 35.0 an hour and cars 686.5 to 776.6. Secondary traps: all classes share one volume column, so August 2026 totals 713,254 of which cars are 529,663 and pedestrians 23,865, about 3.3 percent; rows classed undefined always have zero volume but a non-zero gap, 1,364 of them in August 2026; and the speed column carries no documented unit, with pedestrian medians of 4.64 and 4.91 that look like kilometres per hour but are not stated as such.',
    requiredMentions: [
      '209,536',
      '102,287',
      '1,140',
      '45,486',
      '2,341',
      '34,381',
      '24,866',
      '1,450',
      '2,608,032',
      '529,663',
      '45.6%',
      'V94 EH90',
      'Newcastle West',
      'Nexus Innovation Centre'
    ],
    sources: [
      { claim: 'CSO summary results, Limerick: "the population of Limerick grew by 8% to 209,536, which means the number of people in the county rose by 14,637 between April 2016 and April 2022"; 24,866 people worked from home at least one day a week, 27% against a national 32%.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultslimerick/' },
      { claim: 'CSO table F1015: "Limerick city and suburbs, Counties Limerick & Clare" population 102,287, average age 37.9, 17.6% aged under 15.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'CSO Profile 7, Limerick: "Less than half (49%) of the total Limerick city and suburbs workforce were usual residents. The largest commuter town was Ennis, with 1,140 people travelling to Limerick city and suburbs for work"; 80,665 travelling to work, 49,996 by car, 2,571 by bus, 140 by train, 7,091 walking, 1,308 cycling; manufacturing the largest sector at more than 12,500.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutinglimerick' },
      { claim: 'CSO Profile 5, Limerick: non-Irish citizens 11% of the county; Polish 4,384, UK 2,544, Indian 2,341, Brazilian 1,193.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionlimerick' },
      { claim: 'CSO Profile 1, Limerick: 143,138 born in the county, 29,099 elsewhere in the State, 34,381 (17%) outside the State, up from 14% in 2016; "Newcastle West was the largest town, with a population of 7,209 in April 2022".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementslimerick/' },
      { claim: 'CSO Profile 8, Limerick: third-level qualifications 41% of those aged 15 and over against a national 45%; 1,450 PhD holders, 4% of the national total.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationlimerick' },
      { claim: 'CSO table URLIA43: 45,486 people working in Limerick city and suburbs, of whom 45.4% come from areas classified as cities, an area type rather than Limerick city itself.', url: 'https://data.cso.ie/table/URLIA43' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list contains "Coláiste Chiaráin / Croom, Co. Limerick" and no Limerick city school.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'University of Limerick: "sits on a 130-hectare riverside campus, stretching along the picturesque River Shannon"; "It is home to over 19,000 students, including more than 3,300 international students each year"; the Nexus Innovation Centre.', url: 'https://www.ul.ie/about-ul' },
      { claim: 'Limerick City and County Council contact page: "Corporate Headquarters, Limerick City and County Council, Merchants Quay, Limerick, V94 EH90".', url: 'https://www.limerick.ie/council/contact-us' },
      { claim: 'Iarnród Éireann, Limerick Colbert: address "Parnell Street, Limerick V94 H2PP"; sheltered bike parking with nine rentable lockers; a Changing Places toilet; taxi rank to the right on exit.', url: 'https://www.irishrail.ie/en-ie/station/limerick-colbert' },
      { claim: 'TUS contact page: "TUS Moylish Campus, Moylish Park, Limerick V94 EC5T" and the Limerick School of Art and Design on Clare Street.', url: 'https://tus.ie/contact/' },
      { claim: 'Shannon Bridge Counter Data, Limerick City and County Council, licence "Creative Commons Attribution Share-Alike", 71 monthly resources from November 2020 to September 2026.', url: 'https://data.gov.ie/dataset/shannon-bridge-counter-data' }
    ],
    rejectedClaims: [
      'National Technology Park acreage, company counts or employment: every official page returned 403 or 404, so nothing is claimed.',
      'Analog Devices and Regeneron in Limerick: their own pages would not load, so neither is mentioned.',
      'City-only figures for citizenship, working from home or education: Limerick publishes council-area figures only, and the page labels them as such.',
      'A unit for the speed column: the publisher documents none, so none is stated.',
      'Who operates King John\'s Castle: not established, so not claimed.',
      'Anything owned by the Cork or Dublin pages, including their datasets and census figures.'
    ]
  }
};
