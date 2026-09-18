'use strict';
// Lucan, Co Dublin (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 19 September 2026: Met Eireann closed-station data
// on data.gov.ie (Lucan G.S. 4823 daily rainfall, Lucan (U.C.D.) 7623, Lucan (Hermitage
// G.C.) 9423, headers with height and position) and its daily indicator key; Met Eireann's
// ETCCDI page and the ETCCDI list of indices (CDD = longest run of days with RR < 1 mm);
// Irish Rail Adamstown; Lucan Community College; South Dublin County Council's Lucan
// Library page; Fingal County Council's St Catherine's Park dataset descriptions and
// 2026 counter tables. Spine: quality flags and imputed values. Lucan G.S. 1950-1965,
// 5,844 days: satisfactory 4,255, estimated 848, trace 740, estimated trace 1. Estimated
// days: zero 21.0% against 38.8% for satisfactory; under 1 mm 45.6 against 57.0; median
// 1.2 against 0.5 mm. Estimated days per year 0 (1950) to 212 of 366 (1964, 57.9%);
// 1964 total 670.9 mm of which 484.9 (72.3%) on estimated days. CDD longest 34 days,
// 19 February to 24 March 1953, 12 of them trace days, 0.8 mm in all; treating estimated
// days as unknown shortens the longest spell in 1959 (21 to 16), 1962 (19 to 12) and
// 1963 (17 to 13). From 1966 whole months are absent from the file (1,243 days to 1973):
// NOT the lesson (Limerick owns absent rows), so only 1950-1965 is analysed. Scratchpad
// dist/cdd.js. South Dublin owns the Lucan LEA figure, Colaiste Phadraig and Adamstown CC.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'LUCAN', blurb: 'A rain gauge whose 1964 total is mostly estimated. A page on reading the quality flag before trusting the number.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-lucan-dublin',
  code: 'lcn',
  accent: '#124549',
  accentRationale: 'Lucan: a deep river teal from the widened solver search, apart from the South Dublin purple and the Blanchardstown olive',
  pageType: 'district',
  place: {
    name: 'Lucan',
    eyebrow: 'Lucan, County Dublin',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Dublin' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-south-dublin', name: 'South Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'South Dublin', href: '/coding-classes-in-south-dublin' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' }
  ],
  routeLabel: 'Lucan, County Dublin, Ireland',
  title: 'Coding Classes in Lucan, Dublin | Modern Age Coders',
  description: 'Coding, Python, AI and data lessons for Lucan learners aged 6 to 67, taught live online in small same-level groups or one to one. Your first lesson is free.',
  ogDescription: 'Coding and AI classes for Lucan, with a data project on an old rain gauge and the flag that says which of its numbers were measured.',
  twitterDescription: 'Live online coding, Python and AI for Lucan, County Dublin, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Lucan',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Lucan, County Dublin, taught live in English to level-matched groups or individually.'
  },

  h1: 'Coding classes in Lucan',
  capsuleQ: 'What are the best coding classes in Lucan?',
  capsule: 'A Lucan learner joins each lesson on video with a live teacher, as part of a small group at one stage or on their own, normally on two days a week, and any age from six to sixty-seven is welcome. Nothing is taught on site anywhere in Lucan or elsewhere. The first lesson costs nothing, and after it a group place is USD 100 a month while one-to-one lessons are USD 150 a month.',
  lead: 'Met Éireann ran a rain gauge called Lucan G.S. from 1949 to 1973, and every day of its record comes with two numbers: the rainfall, and a code saying how that rainfall was obtained. Most days are marked satisfactory. Some are marked trace, which means rain fell but too little to measure. And some are marked estimated. In 1964, 212 of the year\'s 366 days were estimates, and those days account for 484.9 of the year\'s 670.9 millimetres. A learner who reads only the rainfall column is mostly reading someone\'s estimates without knowing it. This page shows how to read the flag first, and how to write code that reports what was measured separately from what was filled in.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Lucan.',

  picks: {
    eyebrow: 'Starting courses in Lucan',
    h2: 'Four ways into coding for Lucan',
    intro: 'Pick the band that fits the learner; in the free opening lesson the teacher either confirms the course or suggests a better one.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks with labels: sorting cards into piles by the colour on the back before counting them.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python dictionaries and counting, so each number is kept together with the label that explains it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real weather records in Python: quality codes, filtering, and every result computed two ways.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults whose reports mix measured and estimated figures and who need to say which is which.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One rain gauge, three kinds of zero and a year that is mostly estimates',
      intro: 'Daily rainfall at Met Éireann\'s closed Lucan G.S. station for the sixteen complete years 1950 to 1965, 5,844 days, split by the indicator code published with each value.',
      body: [
        { kind: 'table', caption: 'Lucan G.S. daily rainfall 1950 to 1965, by quality code', head: ['Code', 'Days', 'Dry (0 mm)', 'Median'], rows: [
          ['Satisfactory', '4,255', '38.8%', '0.5 mm'],
          ['Estimated', '848', '21.0%', '1.2 mm'],
          ['Trace', '740', '100%', '0 mm'],
          ['Estimated trace', '1', '100%', '0 mm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Estimates look different', p: 'Estimated days are recorded as completely dry on 21.0 percent of occasions, measured days on 38.8 percent, and the typical estimated day is more than twice as wet. Whatever the reason, the two groups cannot be treated as one.' },
          { h3: 'A flag that grows', p: 'The station records no estimated days in 1950 and 24 in 1960, then 101 in 1962, 184 in 1963 and 212 in 1964, 57.9 percent of that year. A trend in any yearly figure over those years is partly a trend in how the figures were obtained.' },
          { h3: 'Three kinds of zero', p: 'A zero can be a measured dry day, a trace, where rain fell but too little to register, or an estimate of no rain. The value column shows 0 in each case; only the code tells them apart.' }
        ] },
        { kind: 'callout', h3: 'Read the flag before the number, and report both', p: 'Every day in this record has a value, so nothing looks missing. The trouble is that the values are not all the same kind of thing. Averages, dry-day counts and longest dry spells all come out differently once estimated days are separated from measured ones, and the direction of the change depends on how the estimates were made, which the file does not say. The honest report gives each figure twice, with and without the estimates, and states how many of each went in. That is a different problem from a gap in the record: here the numbers exist, and the question is how much weight each one can bear.' },
        { kind: 'p', text: 'The constructive half of the project is a dry-spell counter. The international climate indices list, which Met Éireann uses for its own indicators, defines CDD as the largest number of consecutive days with less than 1 mm of rain. The learner writes that as a loop that walks through the days, counts a run while each day stays under 1 mm and resets on a wet day. Run over the whole record, the longest spell is 34 days, from 19 February to 24 March 1953. Twelve of those 34 days are traces, and the whole spell collected 0.8 mm, so the spell survives any reasonable treatment of the traces. The estimates are another matter: count an estimated day as unknown rather than as whatever value it carries, and the longest spell of 1959 shrinks from 21 days to 16, of 1962 from 19 to 12, and of 1963 from 17 to 13.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why stop at 1965', p: 'From 1966 whole months are absent from the file, 1,243 days by the time it ends in October 1973, so yearly figures after 1965 cannot be compared with earlier ones. The project uses the sixteen complete years only.' },
          { h3: 'Three gauges called Lucan', p: 'Met Éireann lists three closed Lucan stations: Lucan G.S. at 29 metres, Lucan (U.C.D.) at 52 metres with climate records from November 1972, and Lucan (Hermitage G.C.) at 46 metres from September 1999. The name alone does not say which one a number came from.' },
          { h3: 'Zeros that mean not yet', p: 'Fingal County Council\'s 2026 counter tables for St Catherine\'s Park show 0 for July to December, months that had not happened when the table was last filled. The pedestrian count to June is 26,367. A zero is only as honest as its label.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Lucan, named',
      h2: 'Lucan in the words of the people who run its places',
      intro: 'Each fact below is published by the body responsible, on its own site; the K78 eircodes come from those same pages.',
      body: [
        { kind: 'table', caption: 'Named places in Lucan', head: ['Place', 'What its own site says'], rows: [
          ['Adamstown station', 'Adamstown, Co Dublin, K78 EF64'],
          ['Lucan Community College', 'Esker Drive, Lucan, K78 TF67'],
          ['Lucan Library', 'Lucan Shopping Centre, Newcastle Road, K78 V295'],
          ['St Catherine\'s Park', '200 acres across Fingal, Kildare and South Dublin']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A park in three counties', p: 'Fingal describes St Catherine\'s Park, also called Lucan Demesne, as 200 acres of woodland and grassland in Fingal, Kildare and South Dublin, with the Liffey dividing the South Dublin lands and a pedestrian bridge linking Leixlip and Lucan.' },
          { h3: 'The river', p: 'The same description notes that the Liffey Descent, a 25-mile canoe race, passes through this stretch, and that canoeing is popular near the weir because of a sluice gate.' },
          { h3: 'The library', p: 'South Dublin County Council runs Lucan Library as a full-time branch in the shopping centre on Newcastle Road, open until 8pm Monday to Thursday and until 4.30pm on Friday and Saturday.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Lucan, because the page uses only facts that named bodies publish about the place itself. The rainfall figures describe one closed gauge in the past, not Lucan\'s weather today, and the reasons behind the estimated days are not given in the data, so none are suggested here.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'How the weeks run for Lucan learners',
      intro: 'A standard week has two live lessons, and the teacher stays and teaches throughout each one.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children start with block code and sorting games, grouping things by a label before counting them, the same habit that keeps estimates apart from measurements.' },
          { h3: 'Teenagers', p: 'Teenagers progress to Python, websites, AI projects and work with real records such as the Lucan rain gauge, flags and all.' },
          { h3: 'Adults', p: 'Adults can arrive knowing nothing about code; the opening lesson settles the course.' }
        ] },
        { kind: 'p', text: 'Rainfall values and indicator codes are Met Éireann\'s, as published for its closed Lucan stations; the counts, medians and dry spells are our own calculations, run on 19 September 2026. The station, the college, the library and the park are described from the websites of the bodies that run them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting by label to reporting by flag',
    intro: 'Use the ages as a starting guess; the teacher confirms the real level in lesson one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Labels first', p: 'Block-coded sorting games where each item carries a label that decides its pile.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Keeping pairs together', p: 'Python that stores each value with its code and counts by code.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Flags and streaks', p: 'Quality codes, filtering and a dry-spell counter written from a published definition.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Measured or estimated', p: 'Reports that show which figures were measured and which were filled in, with results both ways.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how dry 1964 was in Lucan',
    intro: 'It will usually read the rainfall column and nothing else.',
    p1: 'Hand an AI assistant the Lucan G.S. file and ask how many dry days there were in 1964, and it will usually count the zeros and give an answer. The count is arithmetically right. It also quietly mixes measured days, trace days and estimates, in a year where more than half the days are estimates.',
    p2: 'After building the flag-aware version, the learner asks the assistant what the indicator column means, how many 1964 days carry each code, and how the answer changes if estimates are set aside. An assistant that never mentions the codes has not looked at half the file.',
    closer: 'Counting zeros takes one line. Knowing which zeros were measured is the skill.',
    blogAnchor: 'why learning to code is still worth the effort'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Lucan',
    intro: 'The arrangement, briefly.',
    cells: [
      { h3: 'Taught live', p: 'The teacher is there for the whole lesson, working through each learner\'s code as it develops.' },
      { h3: 'Classes by level', p: 'Five to ten learners at a shared stage, some in Lucan, some elsewhere in Ireland and some further afield.' },
      { h3: 'Regular days', p: 'Roughly eight lessons a month, on the same two days each week once agreed.' },
      { h3: 'School calendar', p: 'Holidays, mid-terms and exam weeks are accounted for from the start of the course.' },
      { h3: 'What is needed', p: 'A computer with a keyboard, a microphone and headphones or speakers, and broadband that handles video.' },
      { h3: 'Individual lessons', p: 'One-to-one teaching for learners far ahead of a group, wanting a gentler pace, or free only at unusual hours.' }
    ],
    spec: { title: 'No local premises', p: 'We have no classroom in Lucan, in South Dublin or anywhere in the country. Each lesson takes place on video and is identical wherever the learner joins from.' }
  },

  fees: {
    h2: 'The fees for Lucan learners',
    intro: 'Short and complete.',
    first: 'The first lesson, with its level check, free.',
    group: 'A month in a group of five to ten at one level, around eight live lessons.',
    private: 'A month of one-to-one lessons on the same timetable.',
    closer: 'Every family outside India pays a single monthly fee in US dollars. Taking the free lesson commits nobody, charging begins with the course itself, and the pricing page covers holidays, missed lessons and moving between group and one-to-one teaching.'
  },

  reviewsH2: 'Google reviews from six families, unchanged',

  book: {
    h2: 'Book a free first lesson in Lucan',
    intro: 'Share the learner\'s age and what they enjoy, and the first hour will be planned to match. It may end in a game, a first working program, or a table where every number carries its own label.',
    success: 'Thank you. We will be in touch shortly to set up the lesson.'
  },

  faq: {
    h2: 'Lucan coding class questions',
    intro: 'Questions Lucan families often ask.',
    items: [
      { q: 'Do you have a classroom in Lucan?', a: 'No. Every lesson is live on video and we have no premises in Ireland. A learner needs a computer, a working microphone and sound, and a dependable connection. The phone number on this page is in India.', boiler: true },
      { q: 'What is the data project on this page?', a: 'Reading Met Éireann\'s old Lucan G.S. rain gauge record by its quality codes. In 1964, 212 of 366 days were estimates and held 72.3 percent of the year\'s rain. Learners count, average and find dry spells with and without the estimates and report both.' },
      { q: 'Is this about Lucan\'s weather today?', a: 'No. The gauge closed in 1973, and the page uses its complete years from 1950 to 1965 to teach how to handle quality codes. Nothing here describes Lucan\'s present climate.' },
      { q: 'Why does the page not give Lucan\'s population?', a: 'District pages use only what named bodies publish about the place itself, such as the station, the college, the library and the park, and none of those publish a population.' },
      { q: 'What times are lessons?', a: 'From the end of the school day into the evening on weekdays, and during the day at weekends. All times are in Irish time; our teachers work from India, ahead of Ireland by four and a half hours in summer and five and a half in winter, and only times that suit both are offered.' },
      { q: 'Can adults learn with you?', a: 'Yes, from complete beginners upwards and up to sixty-seven. After the first lesson an adult chooses between a small same-level group and one-to-one lessons.' },
      { q: 'Will my child\'s classmates be local?', a: 'Sometimes, but not by design. Groups are made by level, so classmates may be in Lucan, in another part of Ireland or abroad.' },
      { q: 'What do coding classes in Lucan cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same timetable cost USD 150 a month. Everything is agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Five to ten learners, matched on level, pace and goals rather than on age or address. If nothing fits at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Lucan and the Liffey valley',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-south-dublin">South Dublin</a> page covers the council area Lucan belongs to, and across the river and the county line are <a class="cg-inline-link" href="/best-coding-class-in-leixlip">Leixlip</a> and <a class="cg-inline-link" href="/best-coding-class-in-celbridge">Celbridge</a>. Dublin 15 has its own pages for <a class="cg-inline-link" href="/coding-classes-in-blanchardstown-dublin">Blanchardstown</a> and <a class="cg-inline-link" href="/coding-classes-in-castleknock-dublin">Castleknock</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> connects them all.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lucan, South Dublin and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-south-dublin', label: 'South Dublin' },
    { href: '/best-coding-class-in-leixlip', label: 'Leixlip' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lcn .cg-hero-grid { align-items: center; gap: clamp(1.05rem, 3.36vw, 2.58rem); }
.cg-root.cg-lcn .cg-hero h1 { font-weight: 700; letter-spacing: -0.0203em; line-height: 1.05; }
.cg-root.cg-lcn .cg-capsule { border-left: 6px double var(--cg-accent); padding-left: 1.18rem; }
.cg-root.cg-lcn .cg-eyebrow { letter-spacing: 0.121em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lcn .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0133em; }
.cg-root.cg-lcn .cg-grid-3 { gap: clamp(1.12rem, 2.94vw, 2.24rem); }
.cg-root.cg-lcn .cg-table caption { letter-spacing: 0.029em; font-weight: 700; }
.cg-root.cg-lcn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lcn .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-lcn .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.09rem; }
.cg-root.cg-lcn .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Lucan, County Dublin, named sources only (owner rule for districts), read 19 September 2026. Met Eireann, data.gov.ie dataset "Lucan G.S. Rainfall Data": "Daily and monthly rainfall records for our station at Lucan G.S. in Co. Dublin. This station is now closed."; file dly4823.csv header "Station Name: LUCAN G.S.", "Station Height: 29 M", "Latitude:53.356 ,Longitude: -6.450", date 09 to 09 utc; 7,676 daily rows 1949-06-01 to 1973-10-31; indicators 0 x5,302, 1 x1,497, 4 x876, 5 x1. Indicator key (KeyDly_Rain.txt): "0. Satisfactory", "1. Estimated", "4. Trace", "5. Estimated trace". Lucan (U.C.D.) dly7623.csv: height 52 M, 53.369, -6.471, from 01-nov-1972; Lucan (Hermitage G.C.) dly9423.csv: height 46 M, 53.362, -6.437, from 01-sep-1999; both "now closed". Our arithmetic (dist/cdd.js) on 1950-1965, 5,844 days: satisfactory 4,255 (zero 38.8 percent, under 1 mm 57.0, median 0.5 mm, mean 2.32), estimated 848 (zero 21.0, under 1 mm 45.6, median 1.2, mean 2.93), trace 740, estimated trace 1. Estimated days by year: 1950 0, 1960 24, 1961 68, 1962 101, 1963 184, 1964 212 of 366 (57.9 percent), 1965 193. 1964 total 670.9 mm, of which 484.9 (72.3 percent) on estimated days. Longest run of days under 1 mm (ETCCDI CDD) 34 days, 1953-02-19 to 1953-03-24, 12 trace days, 0.8 mm total, largest day 0.2 mm; with estimated days treated as unknown, yearly maxima change in 1959 (21 to 16), 1962 (19 to 12), 1963 (17 to 13). From 1966, whole months absent: 1,243 days missing by 1973-10-31. ETCCDI list of 27 indices: "CDD. Maximum length of dry spell, maximum number of consecutive days with RR < 1mm". Met Eireann ETCCDI page lists "CDD (Consecutive Dry Days)". Irish Rail Adamstown: "Adamstown, Co Dublin", "Eircode K78 EF64". Lucan Community College: "Esker Drive, Lucan, Co. Dublin, K78 TF67". South Dublin County Council, Lucan Library: "Lucan Shopping Centre, Newcastle Road, Dublin K78 V295"; "Monday to Thursday 9.45am - 8.00pm" (source hyphen); "Friday and Saturday: 9.45am - 4.30pm"; "Lucan Library is a full-time library in the SuperValu Shopping Centre in Lucan". Fingal County Council, St Catherine\'s Park dataset description: "St. Catherine\'s Park /Lucan Demesne is located in counties Fingal, Kildare, and South Dublin. It consists of 200 acres of woodland and grass land, with the river Liffey dividing the southern lands of South Dublin County Council from the remainder of the park."; "pedestrian access between Leixlip and Lucan"; "The famous Liffey Descent, a 25 mile canoe race passes through this section of the river. Canoeing is popular in the vicinity of the weir due to the presence of a sluice gate." Fingal 2026 counter tables: pedestrian footfall January to June 3,182, 2,989, 4,391, 5,179, 5,879, 4,747, July to December 0, total "26,367".',
    localProject: 'Quality flags and imputed values. Met Eireann\'s closed Lucan G.S. gauge publishes a code with every daily value: satisfactory, estimated, trace. Over the complete years 1950-1965 (5,844 days) the 848 estimated days behave differently from the 4,255 measured ones (dry 21.0 against 38.8 percent; median 1.2 against 0.5 mm), and estimated days rise from 0 in 1950 to 212 of 366 in 1964, when they hold 484.9 of 670.9 mm (72.3 percent). The constructive part is an ETCCDI dry-spell counter (CDD, runs under 1 mm): the longest spell is 34 days in spring 1953 with 12 trace days and 0.8 mm; treating estimates as unknown shortens the longest spell in 1959, 1962 and 1963. Every statistic is reported with and without the estimates. Distinct from Blanchardstown (coverage: data absent) and Limerick (absent rows): here every day has a value, and the flag says what kind. New family for the cluster: quality codes and imputed values.',
    requiredMentions: [
      '5,844',
      '4,255',
      '848',
      '740',
      '21.0',
      '38.8',
      '484.9',
      '670.9',
      '57.9',
      'K78 EF64',
      'K78 TF67',
      'K78 V295'
    ],
    sources: [
      { claim: 'Met Eireann via data.gov.ie, Lucan G.S. Rainfall Data (station now closed): daily file with station height 29 M, latitude 53.356, longitude -6.450, and an indicator on every day.', url: 'https://clidata.met.ie/cli/climate_data/webdatac/dly4823.csv' },
      { claim: 'Met Eireann daily indicator key: 0 Satisfactory, 1 Estimated, 4 Trace, 5 Estimated trace.', url: 'https://www.met.ie/cms/assets/uploads/2018/05/KeyDly_Rain.txt' },
      { claim: 'Met Eireann via data.gov.ie, Lucan (U.C.D.) Climate Data: height 52 M, from November 1972; station now closed.', url: 'https://clidata.met.ie/cli/climate_data/webdatac/dly7623.csv' },
      { claim: 'Met Eireann via data.gov.ie, Lucan (Hermitage G.C.) Rainfall Data: height 46 M, from September 1999; station now closed.', url: 'https://clidata.met.ie/cli/climate_data/webdatac/dly9423.csv' },
      { claim: 'ETCCDI list of 27 core indices: "CDD. Maximum length of dry spell, maximum number of consecutive days with RR < 1mm"; Met Eireann lists CDD among the indices it reports.', url: 'https://etccdi.pacificclimate.org/list_27_indices.shtml' },
      { claim: 'Irish Rail, Adamstown station: "Adamstown, Co Dublin", Eircode "K78 EF64".', url: 'https://www.irishrail.ie/en-ie/station/adamstown' },
      { claim: 'Lucan Community College: "Esker Drive, Lucan, Co. Dublin, K78 TF67".', url: 'https://www.lucancc.ie/' },
      { claim: 'South Dublin County Council, Lucan Library: Lucan Shopping Centre, Newcastle Road, K78 V295; open to 8pm Monday to Thursday and to 4.30pm Friday and Saturday; a full-time library.', url: 'https://www.sdcc.ie/en/services/sport-and-recreation/libraries/join-library-login/find-a-library/lucan/' },
      { claim: 'Fingal County Council, St Catherine\'s Park dataset description: 200 acres in Fingal, Kildare and South Dublin; Liffey dividing the South Dublin lands; pedestrian bridge between Leixlip and Lucan; Liffey Descent 25-mile canoe race; canoeing near the weir and sluice gate. 2026 pedestrian counter total to June 26,367 with later months shown as 0.', url: 'https://data.gov.ie/dataset/st-catherines-park-pedestrians-gates-fcc' }
    ],
    rejectedClaims: [
      'Any reason for the estimated days: the data do not say how or why values were estimated.',
      'Any statement about Lucan\'s present-day climate: the gauge closed in 1973.',
      'Absent months after 1965 as the lesson: the Limerick page owns absent rows; the page analyses 1950-1965 only.',
      'Any population figure for Lucan and any aggregation of census small areas: owner rule for district pages.',
      'The Lucan LEA figure, Colaiste Phadraig and Adamstown Community College: the South Dublin page owns them.',
      'Staff names on the library page: individuals, not needed.'
    ]
  }
};
