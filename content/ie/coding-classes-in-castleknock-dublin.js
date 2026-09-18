'use strict';
// Castleknock, Dublin 15 (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 19 September 2026: Irish Rail Castleknock station,
// St Vincent's Castleknock College, Castleknock Community College, Farmleigh (OPW),
// the Phoenix Park (OPW), Fingal County Council's Castleknock visitor page, and Met
// Eireann's rescued long-term data for Phoenix Park Dublin (daily max and min
// 1831-1958 plus the parallel "outside observatory" file for 1842-1847 and the
// "not corrected" file for 1855-1857, with the station metadata workbook).
// Spine: paired versus unpaired comparison when a method changes. Inside minus outside
// the observatory, same days: minimum +0.83 C (2,034 days, higher on 92.4%), maximum
// -0.42 C (1,978 days). Unpaired decades 1832-1841 (window) against 1843-1852
// (observatory): summer mean minimum 11.99 against 10.51, winter 2.95 against 2.88.
// Corrected minus uncorrected maxima 1855-1857: -0.36 C. Scratchpad dist/pp.js.
// The Bilham/Stevenson 1953-1955 files were checked and NOT used: they disagree with the
// published 1954 comparison, which would make this a documentation-vs-data page
// (Monaghan's family). Fingal owns the Castleknock LEA figure.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'CASTLEKNOCK', blurb: 'Thermometers moved from a window to an observatory in 1842, and for six years were read both ways. A page on paired comparisons.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-castleknock-dublin',
  code: 'cnk',
  accent: '#432419',
  accentRationale: 'Castleknock: a dark castle-stone brown from the widened solver search, apart from the Blanchardstown olive, the Fingal plum and the Wicklow reds',
  pageType: 'district',
  place: {
    name: 'Castleknock',
    eyebrow: 'Castleknock, Dublin 15',
    schemaType: 'Place',
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
    { label: 'Blanchardstown', href: '/coding-classes-in-blanchardstown-dublin' }
  ],
  routeLabel: 'Castleknock, Dublin 15, Ireland',
  title: 'Coding Classes in Castleknock, Dublin 15 | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for Castleknock learners aged 6 to 67, taught live online in level-matched groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Castleknock, with a data project on the Phoenix Park temperature record and what moving a thermometer does to it.',
  twitterDescription: 'Live online coding, Python and AI for Castleknock, Dublin 15, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Castleknock',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Castleknock, Dublin 15, taught live in English to groups at one level or one to one.'
  },

  h1: 'Coding classes in Castleknock',
  capsuleQ: 'What are the best coding classes in Castleknock?',
  capsule: 'Castleknock learners are taught live by a teacher on a video call, either in a small class of learners at the same level or one to one, in two sessions most weeks, with places open to anyone from six to sixty-seven. There is no building to get to. Lesson one is free. Group places then cost USD 100 each month, and private lessons USD 150 each month.',
  lead: 'The Phoenix Park, which Fingal County Council places on Castleknock\'s doorstep, has a temperature record that begins in 1831. Met Éireann has rescued the daily maximum and minimum readings, taken first at a second-floor window of the Ordnance Survey Office and, from March 1842, in an observatory built in the grounds. For almost six years after the move the thermometers were read both inside that observatory and outside it on the same days, and that overlap is worth more than the decades on either side, because it shows how much the move alone changed the numbers. No comparison of one decade with another can do that. This page teaches the difference between a paired comparison and an unpaired one, using the park next door.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Castleknock.',

  picks: {
    eyebrow: 'Courses for Castleknock',
    h2: 'Where Castleknock learners start',
    intro: 'One suggested course for each age band; the free first lesson with its teacher confirms the fit or changes it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and fair tests: two sprites run the same race so that only one thing changes.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with two lists side by side, subtracting one from the other day by day.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Historic weather data in Python: joining two files on the date and comparing like with like.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults comparing before and after a change of system, supplier or method, who need the difference to mean something.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Same days, two thermometers: what moving the instruments did to the readings',
      intro: 'Met Éireann\'s rescued Phoenix Park records for 1842 to 1847, when the minimum and maximum thermometers were read inside the new observatory and outside it, compared day by day. Temperatures in degrees Celsius.',
      body: [
        { kind: 'table', caption: 'Phoenix Park 1842 to 1847: inside the observatory against outside', head: ['Measure', 'Days with both', 'Inside compared with outside'], rows: [
          ['Daily minimum', '2,034', '0.83 degrees higher on average'],
          ['Daily maximum', '1,978', '0.42 degrees lower on average'],
          ['Minimum higher inside', '2,034', 'On 92.4 percent of days']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Warmer nights inside', p: 'Inside the observatory the overnight minimum averaged 0.83 degrees above the outside reading, and it was higher on 92.4 percent of the 2,034 days read both ways. Shelter keeps the coldest part of the night away from the bulb.' },
          { h3: 'Cooler days inside', p: 'The daytime maximum went the other way, 0.42 degrees lower inside across 1,978 paired days. Housing that softens both ends of the day narrows the daily range without any change in the weather.' },
          { h3: 'Why pairing works', p: 'Each of those differences sets two readings from the same day against each other, so that day\'s weather cancels out. What remains is the effect of where the thermometer hung, which is exactly the question.' }
        ] },
        { kind: 'callout', h3: 'Compare the decades and the answer is muddled', p: 'Set the last ten years at the window, 1832 to 1841, against the first ten in the observatory, 1843 to 1852, and summer nights appear about 1.5 degrees colder after the move, averaging 11.99 before against 10.51 after, while winter nights hardly shift, 2.95 against 2.88. Part of that gap is the move and part is simply two different decades of weather, and nothing in those numbers can say how much is which. The paired years can. That is the lesson in one line: when a method changes, only measurements taken both ways at the same time separate the change of method from a change in the thing being measured.' },
        { kind: 'p', text: 'The station history Met Éireann publishes with the data explains why a move would matter. Until 1 March 1842 the instruments hung in a window recess on the second floor, shut off from the room by glass folding doors, and the practice was to open the window for some minutes before reading them; the registers note each autumn that "Fires were commenced in the room for the Winter". It also records corrections: a minimum thermometer used from 4 March 1835 to 9 November 1836 was "stated to have been too low by 2", in the Fahrenheit degrees the record was kept in, and its readings were raised accordingly. For 1855 to 1857 both the raw and the corrected readings survive, and the corrected maxima average 0.36 degrees Celsius lower. A series that looks like one long column is really several instruments, several places and several sets of corrections.' },
        { kind: 'p', text: 'The learner\'s program loads the main file and the outside-observatory file, joins them on the date, keeps only days where both carry a reading, and subtracts. The same program then runs the unpaired version, one decade against another, and prints both answers side by side with the number of days behind each. Seeing a 0.83-degree paired effect next to a 1.5-degree decade gap, for the same move, is the point.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Gaps belong in the answer', p: 'The 1830s carry minimum readings for 2,543 of 3,287 days, the registers noting interruptions "owing to breakages", and the station history finds no traceable daily registers at all for 1853 and 1854.' },
          { h3: 'A frozen Liffey', p: 'The notes keep the observers\' own remarks too. On 14 March 1845: "The frost was so intense that the River Liffey was frozen over, above King\'s-bridge".' },
          { h3: 'From 1880, a standard screen', p: 'The history quotes the Irish Meteorological Service in 1983: since 1879 to 1880, when the thermometers were housed in a Stevenson screen, "the data may be considered to have a high level of accuracy".' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Castleknock, named',
      h2: 'Castleknock, as its own institutions describe it',
      intro: 'Facts that each place publishes about itself, checked on its own website, with an eircode shown only where the owner prints one.',
      body: [
        { kind: 'table', caption: 'Named places in Castleknock', head: ['Place', 'What its own site says'], rows: [
          ['Castleknock station', 'Dublin 15, D15 CX21'],
          ['St Vincent\'s Castleknock College', 'College Road, D15 PD95'],
          ['Castleknock Community College', 'Dublin and Dún Laoghaire ETB, established 1995'],
          ['Farmleigh', '78 acres, the official State Guest House'],
          ['Phoenix Park, Castleknock Gate', 'One of two main gates open 24 hours']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A Norman castle', p: 'Fingal County Council describes Castleknock Castle as a ruined Norman castle established by Hugh Tyrell, who was later appointed the first Baron of Castleknock, and places the area just inside the M50 ring road.' },
          { h3: 'Farmleigh and the Guinness years', p: 'Farmleigh sits on the north-west edge of the Phoenix Park and was owned by the Guinness family from 1873 to 1999. Its oldest tree, a great sycamore, is over 220 years old, and it holds the Benjamin Iveagh Library.' },
          { h3: 'Two secondary schools', p: 'St Vincent\'s Castleknock College, a Vincentian boys\' school, cites 190 years of experience in boys\' education. Castleknock Community College, part of the Dublin and Dún Laoghaire Education and Training Board, dates from 1995.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'The temperature record belongs to the Phoenix Park, where the station history places the early instruments at the Ordnance Survey Office; it is used here as the nearest long series, not as a Castleknock measurement. The page prints no population for Castleknock, because we only use figures that a named source publishes for the place itself.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Teaching for Castleknock, week by week',
      intro: 'Each week normally brings two lessons, both of them live and both led by a teacher throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Younger children begin with block code and fair tests, changing one thing at a time and watching what happens, the habit behind every good comparison.' },
          { h3: 'Teenagers', p: 'Teenagers take up Python, websites, AI projects and data work on real historic records such as the Phoenix Park readings.' },
          { h3: 'Adults', p: 'Adults may start from scratch; the first lesson sets the course and the pace.' }
        ] },
        { kind: 'p', text: 'The readings and the station history are Met Éireann\'s, as published with its rescued long-term data; the paired and unpaired comparisons are our own arithmetic, run on 19 September 2026. Everything said about the station, the schools, Farmleigh, the park and the council comes from those bodies\' own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a fair race to a paired test',
    intro: 'Bands are approximate; in the first lesson the teacher finds the true starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fair tests', p: 'Block-coded races where only one setting changes between runs.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Side by side', p: 'Python lists compared item by item, then averaged.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Joins and pairs', p: 'Joining files on a date, paired differences and why they beat comparing two eras.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Before and after', p: 'Measuring the effect of a change at work with parallel runs rather than two periods.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant whether moving the thermometers mattered',
    intro: 'It will usually compare the decade before with the decade after.',
    p1: 'Give an AI assistant the Phoenix Park record and ask whether moving the thermometers in 1842 changed the readings, and it will often set the decade before against the decade after, report a difference and explain it. The two decades differ in weather as well as in method, so that answer mixes the two together.',
    p2: 'With the paired analysis done, the learner asks the assistant whether any days were measured both ways, how many, and what the average same-day difference was. An answer resting on paired days can be trusted in a way that a decade-against-decade answer cannot.',
    closer: 'Subtracting two averages is easy. Knowing which two averages may fairly be subtracted is the skill.',
    blogAnchor: 'why learning to code still earns its keep'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Castleknock',
    intro: 'The essentials.',
    cells: [
      { h3: 'Teacher on the call', p: 'A teacher leads the lesson in real time and watches each learner\'s code as it is written.' },
      { h3: 'Grouped by ability', p: 'Five to ten learners working at the same level, from Castleknock, other parts of Ireland or abroad.' },
      { h3: 'A steady schedule', p: 'About eight lessons a month, on two regular days set when the course starts.' },
      { h3: 'Breaks planned in', p: 'Mid-term breaks, holidays and exam periods are part of the plan from the outset.' },
      { h3: 'The setup', p: 'A laptop or desktop, sound and a microphone, and broadband steady enough for video.' },
      { h3: 'Private lessons', p: 'One to one for a learner who is ahead of every group, wants more time, or needs an hour no group uses.' }
    ],
    spec: { title: 'Video lessons only', p: 'There is no Modern Age Coders centre in Castleknock, in Fingal or anywhere in Ireland. Every lesson is on video, and it is the same lesson wherever the learner logs in.' }
  },

  fees: {
    h2: 'What lessons cost in Castleknock',
    intro: 'Three prices.',
    first: 'Lesson one, including a level check: free.',
    group: 'A month of group lessons, five to ten learners at one level, about eight sessions.',
    private: 'A month of private lessons at the same pace.',
    closer: 'Outside India every family pays the same US dollar amount per month. The free lesson is exactly that, the first payment falls due when the course starts, and holidays, missed lessons and a switch between group and private teaching are all explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, copied without edits',

  book: {
    h2: 'Book a free first lesson in Castleknock',
    intro: 'Let us know the learner\'s age and interests and the teacher will plan the first hour from them. It could close with a game, a first program, or two columns of old readings compared day by day.',
    success: 'Thank you. We will be in touch shortly about the lesson.'
  },

  faq: {
    h2: 'Castleknock coding class questions',
    intro: 'Common questions from Castleknock families.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Castleknock?', a: 'No. Lessons are taught live on video, and we have no premises in Ireland. A computer, sound and a microphone, and a reliable connection are all a learner needs. The phone number on this page is our number in India.', boiler: true },
      { q: 'What is the data project on this page?', a: 'Comparing thermometer readings taken inside and outside the Phoenix Park observatory on the same days between 1842 and 1847. The paired minimum difference is 0.83 degrees over 2,034 days; comparing whole decades instead suggests about 1.5 degrees and cannot separate the move from the weather.' },
      { q: 'Is the Phoenix Park weather record a Castleknock record?', a: 'No. It comes from the Phoenix Park, where the station history places the early instruments at the Ordnance Survey Office. The council describes the park as being on Castleknock\'s doorstep, and the page uses the record as the nearest long series, labelled as the park\'s.' },
      { q: 'Where are the census numbers for Castleknock?', a: 'There are none on this page by design. District pages print only facts that a named source publishes about the place itself, such as the station, the schools, Farmleigh and the council\'s own description.' },
      { q: 'When do lessons take place?', a: 'After school on weekdays, in the evenings, and in the daytime at weekends. India, where our teachers are, runs ahead of Ireland by five and a half hours in winter and four and a half in summer, and lesson times are chosen to suit both.' },
      { q: 'Do you teach adults in Castleknock?', a: 'We do, up to sixty-seven, and beginners are welcome. Whether an adult learns in a group at their level or one to one is decided together after the first lesson.' },
      { q: 'Who will my child learn alongside?', a: 'Learners at the same level, who might live in Castleknock, elsewhere in Ireland or in another country altogether.' },
      { q: 'What do coding classes in Castleknock cost?', a: 'The first lesson is free. A group place is then USD 100 a month for around eight live lessons, two a week, with five to ten learners; one-to-one lessons on the same pattern are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many learners are in each group?', a: 'Between five and ten, matched on level, pace and aims rather than on age or address. Where no group suits at a workable hour, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Castleknock and Dublin 15',
    html: '<a class="cg-inline-link" href="/coding-classes-in-blanchardstown-dublin">Blanchardstown</a> has its own page next door in Dublin 15, the <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> page covers the wider council area, and the <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page covers the city across the park. Learners drawn to historic data can see the <a class="cg-inline-link" href="/data-science-course-ireland">data science course</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> leads to every other county and town.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Castleknock, Fingal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-blanchardstown-dublin', label: 'Blanchardstown' },
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cnk .cg-hero-grid { align-items: end; gap: clamp(1.03rem, 3.29vw, 2.46rem); }
.cg-root.cg-cnk .cg-hero h1 { font-weight: 650; letter-spacing: -0.0179em; line-height: 1.08; }
.cg-root.cg-cnk .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1.09rem; }
.cg-root.cg-cnk .cg-eyebrow { letter-spacing: 0.142em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-cnk .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.0108em; }
.cg-root.cg-cnk .cg-grid-3 { gap: clamp(1.08rem, 2.71vw, 2.13rem); }
.cg-root.cg-cnk .cg-table caption { letter-spacing: 0.038em; font-weight: 650; }
.cg-root.cg-cnk .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-cnk .cg-table th { letter-spacing: 0.015em; }
.cg-root.cg-cnk .cg-ladder-col { border-left: 5px double var(--cg-accent); padding-left: 1.11rem; }
.cg-root.cg-cnk .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Castleknock, Dublin 15, named sources only (owner rule for districts), read 19 September 2026. Met Eireann long-term data sets, Phoenix Park Dublin: files 1831-1958 (daily max and min, both F and C), outside-observatory 1842-1847, not-corrected 1855-1857, and the metadata workbook. Metadata: "Meteorological observations have been registered in Phoenix Park Dublin since 1829 whereas daily observations of maximum and minimum self-registering thermometers commenced in 1831"; "The observations were taken by staff related to the Royal Engineers at the Ordnance Survey Office in Phoenix Park, Dublin"; readings "were made at the window of a room on the second floor, at the west end of the main building of the Survey Office, until 1st March 1842, on which date the instruments were removed to an Observatory constructed in the grounds"; "The window recess ... was shut off from the rest of the room by a pair of glass folding doors, and the practice was to open the window for some minutes before reading the instruments"; each autumn "Fires were commenced in the room for the Winter."; minimum thermometer in use "from the 4th March 1835 to the 9th November 1836, the readings of which are stated to have been too low by 2, and have accordingly been increased by that amount"; 1831-1838 recording kept "with some interruptions owing to breakages"; April 1842 to December 1847 readings made "in observatory" and "outside observatory"; 1853-1854 "No traceable handwritten registers of continuous daily maximum and minimum air temperature observations"; 14 March 1845 "The frost was so intense that the River Liffey was frozen over, above King\'s-bridge"; since 1879/1880 in a Stevenson screen "the data may be considered to have a high level of accuracy". Our arithmetic (dist/pp.js): inside minus outside, minimum n 2,034, mean +0.83 C, inside higher on 92.4 percent; maximum n 1,978, mean -0.42 C. Decades 1832-1841 against 1843-1852: summer (Jun-Aug) mean minimum 11.99 against 10.51, winter (Dec-Feb) mean minimum 2.95 against 2.88. Corrected minus not-corrected maxima 1855-1857 n 881 mean -0.36 C. Minimum readings in the 1830s 2,543 of 3,287 days. Irish Rail Castleknock: "Dublin 15", "Eircode D15 CX21". St Vincent\'s Castleknock College: "College Road, Castleknock, Dublin 15 D15 PD95"; "St Vincent\'s Castleknock College has 190 years experience" in boys\' education; Vincentian. Castleknock Community College: "part of the Dublin and Dún Laoghaire Education and Training Board and was established in 1995". Farmleigh: "Set within seventy-eight acres of landscaped parkland on the north-west edge of Dublin\'s Phoenix Park"; "the official Irish State Guest House"; owned by the Guinness family from 1873 to 1999 (paraphrased; the source separates the years with a dash); "The oldest tree at Farmleigh is the great sycamore ... over 220 years in age"; the Benjamin Iveagh Library. Phoenix Park (OPW): "The main gates of the Park at Parkgate Street and Castleknock Gate are open 24 hours." Fingal County Council Castleknock page: located just inside the M50 ring road with the Phoenix Park on its doorstep; "Castleknock Castle ... is a ruined Norman castle which was established by the Norman knight, Hugh Tyrell, who was later appointed as the first Baron of Castleknock"; Farmleigh "is situated on an elevated position above the River Liffey to the north-west of the Phoenix Park, in Castleknock".',
    localProject: 'Paired against unpaired comparison when a method changes. The Phoenix Park thermometers moved from a second-floor window to an observatory on 1 March 1842, and from April 1842 to December 1847 were read inside and outside the observatory on the same days. Paired: inside minimum +0.83 C over 2,034 days (higher on 92.4 percent), inside maximum -0.42 C over 1,978 days. Unpaired decades 1832-1841 against 1843-1852: summer minimum 11.99 against 10.51, a 1.5-degree gap that mixes the move with a decade of weather. Corrected against raw maxima 1855-1857: -0.36 C. The learner joins two files on date, keeps days with both readings, subtracts, then runs the decade comparison beside it. New family for the cluster: paired comparison and method change (homogeneity).',
    requiredMentions: [
      '0.83',
      '92.4',
      '2,034',
      '0.42',
      '1,978',
      '0.36',
      '11.99',
      '10.51',
      '2,543',
      '78 acres',
      'D15 CX21',
      'D15 PD95'
    ],
    sources: [
      { claim: 'Met Eireann, long-term data sets, Phoenix Park Dublin: daily maximum and minimum 1831-1958; outside-observatory readings 1842-1847; not-corrected readings 1855-1857; metadata workbook with the station history quoted above.', url: 'https://www.met.ie/climate/available-data/long-term-data-sets' },
      { claim: 'Met Eireann data file Phoenix-Park-Dublin_1831-1958.csv (Year, Month, Day, Max and Min in Fahrenheit and Celsius).', url: 'https://www.met.ie/cms/assets/uploads/2020/05/Phoenix-Park-Dublin_1831-1958.csv' },
      { claim: 'Met Eireann data file Phoenix-Park-Dublin_outside-observatory_1842-1847.csv, paired with the main file by date.', url: 'https://www.met.ie/cms/assets/uploads/2020/05/Phoenix-Park-Dublin_outside-observatory_1842-1847.csv' },
      { claim: 'Met Eireann station metadata workbook, Phoenix Park Dublin.', url: 'https://www.met.ie/cms/assets/uploads/2020/05/Phoenix-Park-Dublin_metadata.xlsx' },
      { claim: 'Irish Rail, Castleknock station: "Dublin 15", "Eircode D15 CX21".', url: 'https://www.irishrail.ie/en-ie/station/castleknock' },
      { claim: 'St Vincent\'s Castleknock College: "College Road, Castleknock, Dublin 15 D15 PD95"; "190 years experience" in boys\' education.', url: 'https://www.castleknockcollege.ie/' },
      { claim: 'Castleknock Community College: "part of the Dublin and Dún Laoghaire Education and Training Board and was established in 1995".', url: 'https://www.castleknockcc.ie/' },
      { claim: 'Farmleigh: "seventy-eight acres of landscaped parkland on the north-west edge of Dublin\'s Phoenix Park"; "the official Irish State Guest House"; Guinness family ownership 1873 to 1999; great sycamore over 220 years; Benjamin Iveagh Library.', url: 'https://farmleigh.ie/' },
      { claim: 'Phoenix Park: "The main gates of the Park at Parkgate Street and Castleknock Gate are open 24 hours."', url: 'https://www.phoenixpark.ie/' },
      { claim: 'Fingal County Council, Castleknock: just inside the M50 ring road with the Phoenix Park on its doorstep; Castleknock Castle a ruined Norman castle established by Hugh Tyrell, later first Baron of Castleknock; Farmleigh "to the north-west of the Phoenix Park, in Castleknock".', url: 'https://www.fingal.ie/visitor/locations/castleknock' }
    ],
    rejectedClaims: [
      'Any statement that the Phoenix Park record is a Castleknock measurement: it is the park\'s, used as the nearest long series.',
      'The 1953-1955 Bilham screen comparison: the rescued files disagree with the published 1954 comparison, and documentation against data belongs to the Monaghan page\'s family.',
      'Any climate-trend claim from the 1831-1958 record: the page is about method changes, not warming.',
      'Any population figure for Castleknock and any aggregation of census small areas: owner rule for district pages.',
      'The Castleknock local electoral area figure: the Fingal page owns it.',
      'Fingal\'s sporting superlatives (largest tennis court, one of the largest GAA clubs): promotional, not verified here.'
    ]
  }
};
