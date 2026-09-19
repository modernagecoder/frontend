'use strict';
// Ballincollig, Cork (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: OPW waterlevel.ie 15-minute levels
// (19109 Inniscarra Tailrace and 19103 Ovens Bridge, the month file to 19 September 2026,
// with the site disclaimer and CC-BY terms); ESB's Inniscarra hydro page; Cork City
// Council's heritage page on the Ballincollig Gunpowder Mills; Cork City Council library
// dataset (data.corkcity.ie); Ballincollig Community School's own site. Spine: steps in a
// regulated series. Tailrace, 15 Aug to 19 Sep 2026: 3,343 readings, range 0.132 to 0.872 m,
// 17 changes of 5 cm or more within 15 minutes (11 up, 6 down), largest +15.4 cm, two in a
// row on 15 September (+15.4 then +15.0); they fall around 09:00 and 14:00-15:30 in the
// file's timestamps. Ovens Bridge: 3,357 readings, range 0.113 to 0.270 m, none, largest
// 1.9 cm. Main and backup sensors at the tailrace agree within 0.4 cm. Scratchpad
// dist/steps.js. The Cork city page owns the Ballincollig electoral division figure,
// Colaiste Choilm and the city footfall counters; the county page owns the 2019 boundary.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'BALLINCOLLIG', blurb: 'A river below a power station moves in steps, not curves. A page on finding decisions inside a data series.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-ballincollig-cork',
  code: 'bcg',
  accent: '#622718',
  accentRationale: 'Ballincollig: a gunpowder-mill brick red from the widened solver search, apart from the Cork city plum and the other district accents',
  pageType: 'district',
  place: {
    name: 'Ballincollig',
    eyebrow: 'Ballincollig, Cork',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cork City' },
      { type: 'AdministrativeArea', name: 'County Cork' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-cork', name: 'Cork' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Cork', href: '/best-coding-class-in-cork' },
    { label: 'County Cork', href: '/coding-classes-in-county-cork' }
  ],
  routeLabel: 'Ballincollig, Cork, Ireland',
  title: 'Coding Classes in Ballincollig, Cork | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Ballincollig learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Ballincollig, with a data project on the river below Inniscarra and how to spot decisions inside a series.',
  twitterDescription: 'Live online coding, Python and AI for Ballincollig, Cork, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Ballincollig',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Ballincollig, Cork, taught live in English to small same-level groups or one to one.'
  },

  h1: 'Coding classes in Ballincollig',
  capsuleQ: 'What are the best coding classes in Ballincollig?',
  capsule: 'For Ballincollig learners every lesson is a live video class with a teacher, in a small group of learners at the same stage or alone with the teacher, most often on two days of the week, and anyone aged six to sixty-seven can enrol. The classroom is wherever the learner sits. The opening lesson is free, and after that the fee each month is USD 100 for a group or USD 150 for one-to-one lessons.',
  lead: 'A few kilometres upstream of Ballincollig, the Office of Public Works measures the level of the Lee every 15 minutes at a station called Inniscarra Tailrace, just below the ESB\'s hydro station. In the 35 days to 19 September 2026 its level jumped by five centimetres or more within a single quarter of an hour 17 times, once by 15.4 centimetres, and the jumps came at particular times of day. At the nearest station that is not beside a power station, Ovens Bridge, the level never moved more than 1.9 centimetres in 15 minutes. Rivers rise and fall with rain; this one also moves in steps. This page teaches a learner to find those steps in data, check when they happen, and tell a decision apart from the weather.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Ballincollig.',

  picks: {
    eyebrow: 'Courses for Ballincollig',
    h2: 'Where Ballincollig learners can begin',
    intro: 'A course for each age band, with the free opening lesson used by its teacher to check that it fits.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and change: a sprite that notices when a number jumps and when it only drifts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with lists of readings, the difference between each pair, and a rule that spots big ones.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Sensor time series in Python: differencing, thresholds, timing and comparison with a second station.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults whose monitoring data mixes natural change with switches, deployments and manual interventions.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Below the dam the river moves in steps: find them, then ask when they happen',
      intro: 'Water levels every 15 minutes from 15 August to 19 September 2026, as published by the Office of Public Works on waterlevel.ie, in metres on each station\'s own gauge. A step here means a change of 5 centimetres or more between one reading and the next.',
      body: [
        { kind: 'table', caption: 'Two OPW stations near Ballincollig, 35 days of 15-minute readings', head: ['Station', 'Readings', 'Range of level', 'Steps of 5 cm'], rows: [
          ['Inniscarra Tailrace', '3,343', '0.132 to 0.872 m', '17'],
          ['Ovens Bridge', '3,357', '0.113 to 0.270 m', '0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Seventeen steps', p: 'At the tailrace, 11 steps went up and 6 went down. The largest were back to back on 15 September, 15.4 centimetres and then 15.0 in the next quarter hour, so the river rose about 30 centimetres in half an hour.' },
          { h3: 'The time of day', p: 'In the file\'s timestamps the steps cluster in two windows: five between 09:00 and 09:30 and eleven between 14:15 and 15:45, with one at 17:15, and all seventeen fall on just four days, 11, 14, 15 and 16 September. A pattern like that points to operation, though the data alone cannot say who turned what.' },
          { h3: 'The quiet station', p: 'At Ovens Bridge the biggest change between two readings was 1.9 centimetres, and the level wandered only between 0.113 and 0.270 metres in 35 days. It changes gradually, with no sign of sudden switching.' }
        ] },
        { kind: 'callout', h3: 'Some changes in a series are decisions, and they look different', p: 'Natural processes tend to change a little at a time; switches, releases, price changes and software deployments change a lot at once. Differencing a series, taking each reading minus the one before, turns those sudden changes into spikes that a simple threshold can catch. The next step matters as much: check when the spikes fall, and compare with a similar series that no one controls. Steps at regular hours, absent from the comparison station, are evidence of a managed system. They are not proof of who did what, and the report should say exactly that.' },
        { kind: 'p', text: 'The learner\'s program downloads the month file for each station, keeps only readings exactly 15 minutes apart so that a gap is never mistaken for a jump, and subtracts each reading from the next. It counts the changes of 5 centimetres or more, records their direction and hour, and prints a small table for both stations side by side. Then it tries other thresholds to show the answer is not an accident of one setting: at 3 centimetres the tailrace has 38 steps and Ovens Bridge none, and at 10 centimetres the tailrace has 3 and Ovens Bridge still none. Each station also reports a backup sensor, and at the tailrace the two agree to within 0.4 centimetres throughout, so the steps are not a fault in one instrument.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The power station', p: 'ESB describes its Lee hydro stations at Inniscarra and Carrigadrohid, built between 1952 and 1957, as having a combined capacity of 27 MW, with two generating units at Inniscarra of 15 MW and 4 MW working under an average head of 30 metres.' },
          { h3: 'Provisional data', p: 'The OPW\'s own disclaimer says the data "is provisional, unchecked, and has not been validated to remove invalid or improbable values", and asks that derived work credit waterlevel.ie. This page does both.' },
          { h3: 'A moving window', p: 'The month file always holds the latest few weeks, so a learner who downloads it later will get different numbers. The method stays the same; the counts are for the 35 days ending 19 September 2026.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Ballincollig, named',
      h2: 'Ballincollig, in the records of those who run it',
      intro: 'Facts published by the council, the ESB, the school and the OPW, each on its own site or in its own data.',
      body: [
        { kind: 'table', caption: 'Named places in and near Ballincollig', head: ['Place', 'What its own source says'], rows: [
          ['Ballincollig Gunpowder Mills', 'About 52 hectares, 2.4 km along the Lee'],
          ['Ballincollig Library', 'The Village Shopping Centre, P31 H674'],
          ['Ballincollig Community School', 'Inishmore, Ballincollig, P31 E030'],
          ['Lee hydro stations', 'Built 1952 to 1957, 27 MW combined'],
          ['Inniscarra Tailrace station', '2.80 km from the library, by haversine']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Water power, twice', p: 'Cork City Council\'s heritage page says the gunpowder mills were developed in 1794 by Charles Leslie and John Travers, who built a weir and a main canal a mile and a half long, and that the mills closed in 1903. The same river now turns the ESB\'s turbines upstream.' },
          { h3: 'What survives', p: 'The council calls the mills the second largest in Britain and Ireland, with the remains of about 100 buildings surviving. Cork County Council bought the site in 1974, which led to the Ballincollig Regional Park.' },
          { h3: 'The library', p: 'Cork City Council\'s library data lists Ballincollig Library at The Village Shopping Centre, closed on Mondays and open from 9:30am to 5:30pm Tuesday to Saturday.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Ballincollig, because the page uses only facts that named organisations publish about the place itself. The river project describes 35 days of provisional readings; it says nothing about flooding, water supply or safety, and it does not claim to know why any particular step happened.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'A typical week for Ballincollig learners',
      intro: 'Two sessions make up most weeks, and a teacher is teaching live for all of both.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Younger learners start with block code that reacts to changes, a sprite that notices the difference between a sudden jump and a slow drift.' },
          { h3: 'Teenagers', p: 'Teenagers go on to Python, websites, AI projects and live sensor data such as the OPW river readings.' },
          { h3: 'Adults', p: 'Adults can join as complete beginners; the first lesson sets the direction.' }
        ] },
        { kind: 'p', text: 'Water levels and the disclaimer are the Office of Public Works\', from waterlevel.ie; the step counts, ranges and distances are our own calculations, run on 20 September 2026. The ESB, Cork City Council and the school are quoted from their own websites and data.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a jumping sprite to a step detector',
    intro: 'Treat the bands as rough; the teacher finds the right rung in lesson one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Jump or drift', p: 'Block-coded games that react differently to a big change and a small one.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Differences', p: 'Python that subtracts each value from the next and flags the large ones.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Steps in time', p: 'Differencing, thresholds, timing and a comparison station, on real sensor data.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Changes at work', p: 'Separating deployments and switches from natural drift in monitoring data.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant why the Lee jumped on 15 September',
    intro: 'It will usually offer a confident cause.',
    p1: 'Show an AI assistant the tailrace readings and ask why the level rose 30 centimetres in half an hour on 15 September, and it may put it down to heavy rain or explain it as a dam release with some certainty. The readings on their own support neither story, and the comparison station, which barely moved, argues against rain.',
    p2: 'After running the step detector, the learner asks the assistant what the comparison station showed at the same time, at what hours the other steps fell, and what evidence would actually be needed to name a cause. An answer that skips those checks is a guess, however fluent.',
    closer: 'Spotting a jump in a list is easy. Saying honestly what caused it is the skill.',
    blogAnchor: 'why learning to code still earns its time'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Ballincollig',
    intro: 'In practice.',
    cells: [
      { h3: 'Teacher in real time', p: 'A teacher leads each lesson live and reads every learner\'s code as they write it.' },
      { h3: 'Groups of equals', p: 'Five to ten learners who are at the same point, from Ballincollig, the rest of Ireland or abroad.' },
      { h3: 'Two days a week', p: 'Around eight lessons a month at the same times each week, agreed at the start.' },
      { h3: 'Around school', p: 'Mid-terms, holidays and exam periods are planned for in advance.' },
      { h3: 'At the desk', p: 'A laptop or desktop, a microphone and headphones or speakers, and broadband that can carry video.' },
      { h3: 'Private option', p: 'One-to-one lessons for learners ahead of every group, needing more time, or free only at unusual hours.' }
    ],
    spec: { title: 'No building to visit', p: 'We have no premises in Ballincollig, in Cork or anywhere in Ireland. Lessons are given on video and are the same wherever the learner joins from.' }
  },

  fees: {
    h2: 'Ballincollig fees',
    intro: 'The full picture.',
    first: 'A free first lesson, including a check of the learner\'s level.',
    group: 'A month in a same-stage group of five to ten, about eight live lessons.',
    private: 'A month of one-to-one lessons on the same timetable.',
    closer: 'Families outside India all pay the same monthly amount in US dollars. The free lesson commits nobody, payment begins when the course does, and the pricing page sets out how holidays, missed lessons and a move between group and private teaching are handled.'
  },

  reviewsH2: 'Six families\' reviews from Google, word for word',

  book: {
    h2: 'Book a free first lesson in Ballincollig',
    intro: 'Tell us the learner\'s age and what catches their interest, and the first hour will be built for them. It could finish with a game, a first program, or a river series with its steps picked out.',
    success: 'Thank you. We will be in touch soon to arrange the first lesson.'
  },

  faq: {
    h2: 'Ballincollig coding class questions',
    intro: 'What Ballincollig families ask us.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Ballincollig?', a: 'No. Lessons are live on video and we have no premises in Ireland. A learner needs a computer, a microphone and sound, and a dependable connection. The phone number on this page is in India.', boiler: true },
      { q: 'What happens in the river project?', a: 'Learners take 35 days of 15-minute OPW water levels from the station below Inniscarra and from Ovens Bridge, find every change of 5 centimetres or more, and compare the two. The tailrace had 17 such steps, clustered at particular hours; Ovens Bridge had none.' },
      { q: 'Does the project say anything about flood risk?', a: 'No. It uses provisional readings to teach step detection and says nothing about flooding, water supply or safety. Those are matters for the responsible authorities.' },
      { q: 'Why is there no population for Ballincollig on this page?', a: 'District pages use only facts that named bodies publish about the place, such as the council, the ESB, the OPW and the school. None of those publish a head count.' },
      { q: 'When are lessons?', a: 'On weekdays from the end of school into the evening, and in the daytime at weekends. Times are fixed in Irish time; our teachers are in India, which is ahead by four and a half hours in the Irish summer and five and a half in winter, and we only offer hours that work for both.' },
      { q: 'Do you teach adults?', a: 'Yes, up to sixty-seven and from any starting point. After the first lesson an adult chooses a small same-level group or private lessons.' },
      { q: 'Will my child learn with other Ballincollig children?', a: 'Only by chance. Groups are made by level, so classmates may be in Cork, elsewhere in Ireland or abroad.' },
      { q: 'What do coding classes in Ballincollig cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners; one-to-one lessons on the same timetable are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, sorted by level, pace and goals rather than by age or address. If no group fits at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Ballincollig and the Lee valley',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> page covers the city Ballincollig belongs to, the <a class="cg-inline-link" href="/coding-classes-in-county-cork">County Cork</a> page covers the county around it, and the harbour towns have their own pages for <a class="cg-inline-link" href="/best-coding-class-in-carrigaline">Carrigaline</a>, <a class="cg-inline-link" href="/best-coding-class-in-cobh">Cobh</a> and <a class="cg-inline-link" href="/best-coding-class-in-midleton">Midleton</a>. The <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ballincollig, Cork and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/coding-classes-in-county-cork', label: 'County Cork' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-bcg .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.16vw, 2.53rem); }
.cg-root.cg-bcg .cg-hero h1 { font-weight: 650; letter-spacing: -0.0192em; line-height: 1.08; }
.cg-root.cg-bcg .cg-capsule { border-left: 8px solid var(--cg-accent); padding-left: 1.14rem; }
.cg-root.cg-bcg .cg-eyebrow { letter-spacing: 0.144em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-bcg .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.0122em; }
.cg-root.cg-bcg .cg-grid-3 { gap: clamp(1.07rem, 2.88vw, 2.21rem); }
.cg-root.cg-bcg .cg-table caption { letter-spacing: 0.036em; font-weight: 700; }
.cg-root.cg-bcg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bcg .cg-table td:last-child { font-weight: 700; }
.cg-root.cg-bcg .cg-ladder-col { border-left: 6px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-bcg .cg-callout { border-left-width: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Ballincollig, Cork, named sources only (owner rule for districts), read 20 September 2026. OPW waterlevel.ie month files (15-minute readings 2026-08-15 06:00 to 2026-09-19 06:00): 19109 Inniscarra Tailrace water level 0001, 3,343 readings, min 0.132, max 0.872 m, 3,324 consecutive 15-minute differences, median 0.001, 99th percentile 0.031, 17 of 5 cm or more (11 up, 6 down), largest +0.154 at 2026-09-15 09:00 then +0.150 at 09:15, +0.143 at 2026-09-11 15:30, -0.088 at 2026-09-16 15:30, +0.088 at 2026-09-14 14:30; times 09-11 15:15, 15:30; 09-14 14:15, 14:30, 14:45, 17:15; 09-15 09:00, 09:15, 09:30; 09-16 09:00, 09:15, 14:15, 14:30, 14:45, 15:15, 15:30, 15:45; changes of 3 cm or more 38, of 10 cm or more 3; main minus backup sensor mean 0.000, max absolute 0.004 m over 3,337 pairs. 19103 Ovens Bridge water level 0001, 3,357 readings, min 0.113, max 0.270 m, no difference of 5 cm or more, largest 0.019 m. Station positions from waterlevel.ie geojson: Inniscarra Tailrace 51.8920 N 8.6334 W, Ovens Bridge 51.8803 N 8.6550 W; haversine from Ballincollig Library 2.80 km and 4.32 km. OPW disclaimer: "Data is provisional, unchecked, and has not been validated to remove invalid or improbable values."; CC-BY, derived works should reference waterlevel.ie and the disclaimer. ESB Inniscarra hydro page: "Capacity: 27 MW", "Commissioned: 1952-57"; "Our Lee Hydro Stations span two locations at Inniscarra and Carrigadrohid in the Lee Valley, around 14 km from Cork City. Built between 1952 and 1957"; "Inniscarra has two generating units: one produces 15 MW and the other produces 4 MW. Both units use Voith turbine with Brown Boveri generators, which operate under an average head of 30m." Cork City Council heritage page, Ballincollig Gunpowder Mills: "Address: Lackenshoneen, Ballincollig"; "the second largest Gunpowder Mills in Britain and in Ireland"; "Located in the Ballincollig Regional Park the site covers approximately 52 hectares (130 acres) and the linear Powder Mills run along 2.4 kms of the River Lee"; "the remains of about 100 buildings associated with the gunpowder manufacturing process survive"; "The Powder Mills was originally developed in 1794 by Cork man Charles Leslie from Wilton, and his partner John Travers. They built a weir and main canal 1.5 miles long."; "in 1903 the Ballincollig Powder Mills closed"; "In 1974 the site was bought by Cork County Council, and this facilitated the development of the highly successful Ballincollig Regional Park." Cork City Council library dataset: "Ballincollig Library", "The Village Shopping Centre", Eircode printed "P31H674", Monday "Closed", Tuesday to Saturday "9:30am-5:30pm", 51.887639, -8.593167. Ballincollig Community School: "Inishmore, Ballincollig, Co. Cork. P31 E030".',
    localProject: 'Steps in a regulated series. From the OPW\'s 15-minute water levels, the learner compares Inniscarra Tailrace, just below the ESB\'s Lee hydro station, with Ovens Bridge, the nearest station not beside a power station, over 35 days to 19 September 2026. Keeping only readings exactly 15 minutes apart and differencing them, the tailrace shows 17 changes of 5 cm or more (largest 15.4 cm, two in a row on 15 September for about 30 cm in half an hour), clustered at 09:00 to 09:30 and 14:15 to 15:45 in the file\'s timestamps, all on 11, 14, 15 and 16 September; at 3 cm the tailrace has 38 and at 10 cm 3; Ovens Bridge shows none at any of these thresholds (largest 1.9 cm). Backup sensors rule out a single faulty instrument. Lessons: sudden changes signal switches and decisions; detect them by differencing and thresholds, check timing, compare with an uncontrolled series, and do not claim a cause the data cannot show. New family for the cluster: step detection in managed systems.',
    requiredMentions: [
      '3,343',
      '0.270',
      '0.872',
      '15.4',
      '1.9 centimetres',
      '2.80',
      '52 hectares',
      '27 MW',
      '2.4 km',
      '1794',
      'P31 H674',
      'P31 E030'
    ],
    sources: [
      { claim: 'OPW waterlevel.ie, station 19109 Inniscarra Tailrace, water level, 15-minute readings (month file).', url: 'https://waterlevel.ie/0000019109/0001/' },
      { claim: 'OPW waterlevel.ie, station 19103 Ovens Bridge, water level, 15-minute readings (month file).', url: 'https://waterlevel.ie/0000019103/0001/' },
      { claim: 'OPW waterlevel.ie disclaimer: "Data is provisional, unchecked, and has not been validated to remove invalid or improbable values."; reuse under CC-BY with reference to waterlevel.ie.', url: 'https://waterlevel.ie/' },
      { claim: 'ESB, Inniscarra hydro: Lee hydro stations at Inniscarra and Carrigadrohid built 1952 to 1957, combined 27 MW; Inniscarra units of 15 MW and 4 MW under an average head of 30 m.', url: 'https://esb.ie/what-we-do/generation-and-trading/inniscarra---hyrdo' },
      { claim: 'Cork City Council, Ballincollig Gunpowder Mills: second largest in Britain and Ireland; about 52 hectares, 2.4 km along the Lee; about 100 buildings survive; developed 1794 by Charles Leslie and John Travers with a weir and 1.5-mile canal; closed 1903; bought by Cork County Council in 1974, leading to the Regional Park.', url: 'https://www.corkcity.ie/en/cork-heritage-open-day/online-buildings/ballincollig-gunpowder-mills/' },
      { claim: 'Cork City Council library dataset: Ballincollig Library, The Village Shopping Centre, P31 H674 (printed without the space), closed Monday, 9:30am to 5:30pm Tuesday to Saturday.', url: 'https://data.corkcity.ie/dataset/98f4a10c-7a31-49e2-bcd4-961bbbfa62d5/resource/db14a7fc-b9c8-4a24-b3f7-7987070dbb5e/download/library.csv' },
      { claim: 'Ballincollig Community School: Inishmore, Ballincollig, Co. Cork, P31 E030.', url: 'https://www.balcs.ie/' }
    ],
    rejectedClaims: [
      'Any claim about why a particular step happened: the readings show timing, not cause.',
      'Any flood, water-supply or safety statement: the data are provisional and the project is about method.',
      'The river at Ovens Bridge by name: the OPW station page does not name it.',
      'The 1805 sale price in the heritage text: a currency figure this site does not print.',
      'The Ballincollig electoral division population, Colaiste Choilm and the city footfall counters: the Cork city page owns them; the 2019 boundary change belongs to the County Cork page.',
      'Any population figure for Ballincollig and any aggregation of census small areas: owner rule for district pages.'
    ]
  }
};
