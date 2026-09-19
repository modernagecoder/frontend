'use strict';
// Castletroy, Limerick (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: OPW waterlevel.ie station 25001
// Annacotty (1.07 km from Castletroy College by limerick.ie map coordinates), month files for
// level, Temperature, turbidity, conductivity, salinity, dissolved oxygen and pH; Castletroy
// College's own site and limerick.ie page; limerick.ie page for Gaelscoil Chaladh an
// Treoigh; University Concert Hall's own contact page and UL's venue page. Spine: checking
// sensor channels against each other before analysis. Six water-quality channels, 837
// hourly readings each, 15 August to 19 September 2026: of 15 channel pairs, salinity and
// pH are identical at all 837 times; the next closest pair (turbidity and temperature)
// coincides once. Salinity 7.24 to 8.89 "psu" beside conductivity 0.167 to 0.409 mS/cm.
// Scratchpad dist/wl_25001_*.csv. The Limerick page owns UL's campus size, student numbers,
// Nexus and Kneat at Plassey (V94 5F68), TUS Moylish and the Shannon Bridge counter.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'CASTLETROY', blurb: 'A river sensor whose salinity column is an exact copy of its pH column. A page on checking data channels against each other.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-castletroy-limerick',
  code: 'ctr',
  accent: '#473E15',
  accentRationale: 'Castletroy: a river-bank olive bronze from the widened solver search, apart from the Limerick rust and the Navan olive',
  pageType: 'district',
  place: {
    name: 'Castletroy',
    eyebrow: 'Castletroy, Limerick',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Limerick City and County' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-limerick', name: 'Limerick' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Limerick', href: '/best-coding-class-in-limerick' },
    { label: 'Munster', href: '/coding-and-ai-classes-in-munster' }
  ],
  routeLabel: 'Castletroy, Limerick, Ireland',
  title: 'Coding Classes in Castletroy, Limerick | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for Castletroy learners aged 6 to 67, taught live online in small level-matched groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Castletroy, with a data project on a river sensor whose salinity and pH columns turn out to be identical.',
  twitterDescription: 'Live online coding, Python and AI for Castletroy, Limerick, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Castletroy',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Castletroy, Limerick, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Castletroy',
  capsuleQ: 'What are the best coding classes in Castletroy?',
  capsule: 'Castletroy learners join a teacher live on video for every lesson, working in a small group at a single level or on their own, usually across two days a week, with enrolment open to all ages from six to sixty-seven. There is no journey involved. The first lesson is on us; after that, a monthly group place costs USD 100 and monthly private lessons USD 150.',
  lead: 'About a kilometre from Castletroy College, the Office of Public Works runs a monitoring station at Annacotty that reports not just the river\'s level but six measures of the water itself, among them turbidity, conductivity, salinity, oxygen and pH. Before analysing any of them, a careful learner compares the columns with each other. In the 35 days to 19 September 2026, two of them match at every single reading: the column labelled salinity holds exactly the same number as the column labelled pH, 837 times out of 837. Two independent instruments never agree to the last decimal place every hour for five weeks. This page shows how to find a problem like that in a few lines of code, before it quietly spoils an analysis.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Castletroy.',

  picks: {
    eyebrow: 'Courses for Castletroy',
    h2: 'Courses Castletroy learners start with',
    intro: 'Pick by age; in the free opening lesson the teacher either keeps the course or recommends another.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and matching: a spot-the-difference game where two pictures that should differ turn out identical.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with two lists compared item by item, counting where they agree and where they differ.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Sensor data in Python: comparing every pair of columns and testing values against what is physically plausible.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who inherit data pipelines and need automatic checks that catch a copied or mislabelled field.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Compare every column with every other before trusting any of them',
      intro: 'The OPW\'s Annacotty station, six water-quality channels, 837 hourly readings each from 15 August to 19 September 2026, as published on waterlevel.ie. Each pair of channels was compared reading by reading.',
      body: [
        { kind: 'table', caption: 'Annacotty station: how often two channels give the same value', head: ['Channel pair', 'Readings compared', 'Identical'], rows: [
          ['Salinity and pH', '837', '837'],
          ['Turbidity and Temperature', '837', '1'],
          ['Any of the other 13 pairs', '837 each', '0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One pair, all the time', p: 'Out of 15 possible pairings of the six channels, salinity and pH agree at all 837 readings. The next closest pair, turbidity and the channel labelled Temperature, coincides once, which is what chance produces.' },
          { h3: 'A second clue', p: 'The salinity column runs from 7.24 to 8.89, the same range as pH, while conductivity in the same water reads between 0.167 and 0.409. Salinity and conductivity normally move together; here salinity follows pH instead.' },
          { h3: 'What it does not tell us', p: 'The check shows that two columns are copies. It cannot say which label is right, whether the fault is in the instrument or in publishing, or what the real salinity was. Those are questions for the data owner.' }
        ] },
        { kind: 'callout', h3: 'Validate channels against each other before you analyse them', p: 'A sensor file can look perfect row by row and still be wrong as a whole: a column copied from another, two labels swapped, a unit changed without notice. Checks that compare columns catch what a glance at one column never will. Look for pairs that are identical far more often than chance allows, for columns whose range belongs to a different quantity, and for relationships that ought to hold and do not. Then report what was found to the publisher, and keep the suspect column out of the analysis until it is explained. This is about the relationships inside the data, which is a different habit from checking a file against its written description.' },
        { kind: 'p', text: 'The learner\'s program downloads the month file for each channel, lines the readings up by timestamp, and for every pair counts how many times the two values are exactly equal. With six channels that makes 15 pairs, a double loop of a few lines. It prints a small grid of counts, flags any pair above a threshold such as half the readings, and then prints the minimum and maximum of every column beside its label so that a human can see whether each range makes sense for what the label claims. On this file the grid has one glaring cell and fourteen near-zeros.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The other channels', p: 'Nothing in the other columns looks copied. Turbidity reached 44.1 at its highest in these weeks, dissolved oxygen ranged up to 107.7 percent of saturation, and the water level itself was read every 15 minutes, 3,348 times.' },
          { h3: 'Data the OPW has not checked', p: 'The OPW describes the readings on waterlevel.ie as provisional and unvalidated and asks users to credit the site. A flaw found in unchecked data is exactly the kind of thing validation exists to catch, and it says nothing about the river.' },
          { h3: 'A fixed window', p: 'The counts refer to the month file downloaded on 20 September 2026. A later file may have been corrected, which is the outcome a good report hopes for.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Castletroy, named',
      h2: 'Castletroy, as its schools and venues describe it',
      intro: 'Facts that each organisation publishes itself, on its own site or on the council\'s pages, with eircodes where they are given.',
      body: [
        { kind: 'table', caption: 'Named places in Castletroy', head: ['Place', 'What its own source says'], rows: [
          ['Castletroy College', 'Newtown, Castletroy, V94 6D85'],
          ['Gaelscoil Chaladh an Treoigh', 'Founded by the community in 2001, 438 pupils'],
          ['University Concert Hall', 'Foundation Building, Sreelane, V94 PX58'],
          ['OPW Annacotty station', '1.07 km from Castletroy College']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The secondary school', p: 'Castletroy College describes itself as a co-educational community college of over 1,200 students under the auspices of Limerick and Clare Education and Training Board.' },
          { h3: 'Primary through Irish', p: 'The council\'s page for Gaelscoil Chaladh an Treoigh says the school was founded by the community in 2001 to provide primary education through Irish, and has grown to 438 pupils with 26 full-time staff.' },
          { h3: 'The concert hall', p: 'The University of Limerick says University Concert Hall opened in 1993, officially opened by Taoiseach Albert Reynolds and US Ambassador Jean Kennedy Smith, and has a 1,000-seat tiered lecture theatre.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Castletroy, because the page uses only facts that named organisations publish about the place. The sensor project says nothing about water quality or safety at Annacotty or anywhere else; it is about checking data before using it.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Learning from Castletroy, week to week',
      intro: 'Two lessons fill most weeks, and each one is taught live by a teacher from start to finish.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children begin with block code and matching games, noticing when two things that should be different are the same.' },
          { h3: 'Teenagers', p: 'Teenagers take on Python, websites, AI projects and real sensor files like the Annacotty station.' },
          { h3: 'Adults', p: 'Adults can start from nothing; the first lesson settles the course.' }
        ] },
        { kind: 'p', text: 'Sensor readings come from the OPW through waterlevel.ie; the pairwise counts, ranges and distance are our own calculations, run on 20 September 2026. The schools, the council and the university are quoted from their own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From spot-the-difference to a column audit',
    intro: 'Bands give a starting guess, and lesson one confirms the right level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Same or different', p: 'Block-coded games that compare two sets of shapes and count the matches.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Matching lists', p: 'Python that lines up two lists and counts where they agree.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Pairwise checks', p: 'Every pair of columns compared, ranges tested and suspect data set aside.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Data validation at work', p: 'Automatic checks in pipelines that catch copied, swapped and mislabelled fields.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to summarise the Annacotty water readings',
    intro: 'It will usually describe each column as labelled.',
    p1: 'Give an AI assistant the six Annacotty channels and ask for a summary of the water, and it will often report a salinity of around 8.4 as though it were real, perhaps even comment on it. Each column is summarised correctly. Nothing in that process compares the columns, so the copy goes straight through.',
    p2: 'After running the pairwise check, the learner asks the assistant which columns ever share values, whether each range suits its label, and whether the columns that should move together actually do. An assistant that answers those has actually validated the file.',
    closer: 'Summarising a column is quick. Noticing that two columns are secretly the same is the skill.',
    blogAnchor: 'why learning to code still pays off for a learner'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Castletroy',
    intro: 'The specifics.',
    cells: [
      { h3: 'Teacher-led, live', p: 'Each lesson is run live by a teacher who follows every learner\'s screen and code as they work.' },
      { h3: 'Same level, same group', p: 'Five to ten learners at one level, from Castletroy, the rest of Ireland or abroad.' },
      { h3: 'Weekly pair', p: 'About eight lessons a month, on the same two weekly times set at the start.' },
      { h3: 'School rhythm', p: 'The plan allows for holidays, mid-terms and exam weeks from day one.' },
      { h3: 'Your equipment', p: 'A laptop or desktop, a microphone and speakers or headphones, and a connection that handles video.' },
      { h3: 'Individual teaching', p: 'One-to-one lessons for a learner who is ahead, needs more time, or can only attend when no group meets.' }
    ],
    spec: { title: 'Only online', p: 'We have no premises in Castletroy, in Limerick or anywhere in Ireland. Lessons happen over video and are identical wherever the learner joins from.' }
  },

  fees: {
    h2: 'Castletroy fees',
    intro: 'All in one place.',
    first: 'A first lesson, with a level check, free of charge.',
    group: 'A month in a same-level group of five to ten, about eight live lessons.',
    private: 'A month of private lessons on the same schedule.',
    closer: 'Every family outside India pays the same monthly US dollar fee. The free lesson commits no one, charges start with the course, and the pricing page covers holidays, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six family reviews from Google, untouched',

  book: {
    h2: 'Book a free first lesson in Castletroy',
    intro: 'Let us know the learner\'s age and what interests them, and the first hour will be shaped around it. It might end with a game, a working first program, or two columns caught being secretly the same.',
    success: 'Thank you. We will be in touch soon about the first lesson.'
  },

  faq: {
    h2: 'Castletroy coding class questions',
    intro: 'Questions Castletroy families ask.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Castletroy?', a: 'No. Lessons are taught live on video and we have no premises in Ireland. A learner needs a computer, sound and a microphone, and a reliable connection. The phone number here is our number in India.', boiler: true },
      { q: 'What happens in the sensor project?', a: 'Learners download the OPW\'s Annacotty water-quality files and compare every pair of columns. In the five weeks to 19 September 2026 the salinity and pH columns were identical at all 837 readings, which no two real instruments would produce.' },
      { q: 'Does this mean the river water is unsafe?', a: 'No. The project is about checking data, not judging water quality. It uses provisional, unvalidated readings, and questions about the river are for the responsible authorities.' },
      { q: 'Why does the page give no population for Castletroy?', a: 'District pages use only facts that named organisations publish about the place, here the schools, the council, the university and the OPW, and none of them gives a head count.' },
      { q: 'When are lessons held?', a: 'Weekday afternoons after school and into the evening, and weekend daytimes. All times are in Irish time; our teachers work from India, four and a half hours ahead during Irish summer time and five and a half in winter, and only hours that suit both sides are offered.' },
      { q: 'Are there classes for adults?', a: 'Yes, for anyone up to sixty-seven, beginners included. After the first lesson an adult chooses a small group at their level or lessons on their own.' },
      { q: 'Will my child study with other Castletroy children?', a: 'Not necessarily. Groups depend on level, so classmates may be in Limerick, elsewhere in Ireland or overseas.' },
      { q: 'What do coding classes in Castletroy cost?', a: 'The first lesson is free. A group place is then USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, grouped by level, pace and aims rather than age or address. If no group fits a workable hour, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Castletroy and the Shannon',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a> page covers the city and its university, <a class="cg-inline-link" href="/best-coding-class-in-shannon">Shannon</a> is across the estuary with an airport data project, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a> page links the province together. For more sensor data, the Cork district of <a class="cg-inline-link" href="/coding-classes-in-ballincollig-cork">Ballincollig</a> reads the Lee below a dam, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Castletroy, Limerick and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/coding-and-ai-classes-in-munster', label: 'Munster' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ctr .cg-hero-grid { align-items: center; gap: clamp(1.08rem, 3.27vw, 2.52rem); }
.cg-root.cg-ctr .cg-hero h1 { font-weight: 650; letter-spacing: -0.0169em; line-height: 1.07; }
.cg-root.cg-ctr .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.19rem; }
.cg-root.cg-ctr .cg-eyebrow { letter-spacing: 0.139em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ctr .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0131em; }
.cg-root.cg-ctr .cg-grid-3 { gap: clamp(1.1rem, 2.81vw, 2.23rem); }
.cg-root.cg-ctr .cg-table caption { letter-spacing: 0.033em; font-weight: 650; }
.cg-root.cg-ctr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ctr .cg-table td:last-child { font-weight: 650; }
.cg-root.cg-ctr .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-ctr .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Castletroy, Limerick, named sources only (owner rule for districts), read 20 September 2026. OPW waterlevel.ie station 25001 Annacotty, month files 2026-08-15 06:00 to 2026-09-19 06:00: labels "Temperature (0002)", "TB Turbidity (NTU) (1002)", "Specific conductivity (ms/cm) (1003)", "Salinity (psu) (1004)", "TB Dissolved Oxygen (% SAT) (1006)", "pH (1008)"; level 0001 3,348 readings (0.288 to 1.115 m); 837 hourly readings for each quality channel (Temperature 838). Our arithmetic: of 15 channel pairs matched on timestamp, 1004 and 1008 identical at 837 of 837; 1002 and 0002 identical at 1 of 837; all other pairs 0. Ranges: salinity and pH 7.24 to 8.89; conductivity 0.167 to 0.409; turbidity 0 to 44.1; dissolved oxygen 82.9 to 107.7; Temperature 13.6 to 18.9. Station 52.6693 N 8.5291 W; Castletroy College map point on limerick.ie 52.66346 N 8.54176 W; haversine 1.07 km. OPW disclaimer: data provisional, unchecked and not validated; CC-BY with credit to waterlevel.ie. Castletroy College own site: "Newtown, Castletroy, Co. Limerick, V94 6D85"; "a coeducational Community College of over 1200 students under the auspices of LCETB". limerick.ie Gaelscoil Chaladh An Treoigh: "a publicly funded, progressive school founded by the community in 2001. Since this time, we have grown to 438 pupils with a full-time staff of 26. Our aim is to serve the demand for primary education through the medium of Irish." University Concert Hall contact page: "Foundation Building, Sreelane, Castletroy, Co. Limerick", Eircode printed "V94PX58". University of Limerick venue page: opening in 1993 "by An Taoiseach Mr. Albert Reynolds and U.S. Ambassador Mrs. Jean Kennedy Smith"; "1,000-seat tiered lecture theatre".',
    localProject: 'Checking sensor channels against each other. The learner downloads the OPW\'s six water-quality channels for Annacotty, 1.07 km from Castletroy College, aligns them on timestamps and counts exact matches for all 15 pairs: salinity and pH are identical at 837 of 837 hourly readings, the next pair coincides once, the rest never. Ranges then show salinity sitting at 7.24 to 8.89 like pH, while conductivity reads 0.167 to 0.409. The finding is reported without guessing its cause and the suspect column is set aside. Lessons: validate relationships between columns, not only each column alone; distinguish this from checking a file against its documentation (the Monaghan page\'s lesson). New family for the cluster: cross-channel validation.',
    requiredMentions: [
      '837',
      '1.07',
      '7.24',
      '8.89',
      '0.409',
      '44.1',
      '107.7',
      '15 pairs',
      '438',
      '2001',
      'V94 6D85',
      'V94 PX58'
    ],
    sources: [
      { claim: 'OPW waterlevel.ie, station 25001 Annacotty: water level and six water-quality channels (Temperature, turbidity, specific conductivity, salinity, dissolved oxygen, pH), month files.', url: 'https://waterlevel.ie/0000025001/1004/' },
      { claim: 'OPW waterlevel.ie, station 25001 Annacotty, pH channel.', url: 'https://waterlevel.ie/0000025001/1008/' },
      { claim: 'OPW waterlevel.ie disclaimer: data provisional, unchecked and not validated; reuse under CC-BY crediting waterlevel.ie.', url: 'https://waterlevel.ie/' },
      { claim: 'Castletroy College: Newtown, Castletroy, V94 6D85; a co-educational community college of over 1,200 students under LCETB.', url: 'https://www.castletroycollege.ie/' },
      { claim: 'limerick.ie, Castletroy College page with map coordinates 52.66346, -8.54176.', url: 'https://www.limerick.ie/discover/living/your-community/local-services/schools/castletroy-college' },
      { claim: 'limerick.ie, Gaelscoil Chaladh an Treoigh: founded by the community in 2001, 438 pupils, 26 full-time staff, primary education through Irish.', url: 'https://www.limerick.ie/discover/living/your-community/local-services/schools/gaelscoil-chaladh-treoigh' },
      { claim: 'University Concert Hall: Foundation Building, Sreelane, Castletroy, V94 PX58 (printed without the space).', url: 'https://www.uch.ie/contact/' },
      { claim: 'University of Limerick, University Concert Hall venue page: opened 1993 by Taoiseach Albert Reynolds and US Ambassador Jean Kennedy Smith; 1,000-seat tiered lecture theatre.', url: 'https://www.ul.ie/campus-life-services/conferences-sports-events/venues/university-concert-hall' }
    ],
    rejectedClaims: [
      'Any statement about which channel is correct, or the cause of the duplication: the data cannot show it.',
      'Any water-quality or safety statement about the river at Annacotty: the page is about data validation.',
      'A computed "true" salinity from conductivity: not sourced here.',
      'UL campus size, student numbers, Nexus, Kneat at Plassey, TUS Moylish and the Shannon Bridge counter: the Limerick page owns them.',
      'Any population figure for Castletroy and any aggregation of census small areas: owner rule for district pages.',
      'gov.ie school profiles: bot-protected (502/403) elsewhere in this session; own sites and limerick.ie used instead.'
    ]
  }
};
