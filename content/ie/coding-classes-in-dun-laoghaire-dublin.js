'use strict';
// Dun Laoghaire, County Dublin (cg- district page, Ireland cluster, Phase 6). Named sources
// only (owner rule for districts), read 20 September 2026: Dun Laoghaire-Rathdown County
// Council open data on data.smartdublin.ie (Bicycle Counts DLR 2025; Bicycle/Pedestrian
// Counter Locations DLR); DLR's People's Park page; the National Maritime Museum of
// Ireland's own site. Spine: direction by hour, a daily total hiding two opposite flows.
// 2025 hourly cyclist counts, North and South columns, at the three Dun Laoghaire counters
// (installed 31 August and 1 September 2020): Seapoint Beach weekday north share 67.0% at
// 07:00-08:59 and 36.0% at 16:00-18:59, weekend 35.3% and 58.1%, mean 1,008 per weekday and
// 998 per weekend day, year north 160,804 south 175,033; People's Park weekday 28.8% and
// 63.8%, weekend 59.6% and 51.6%, 772 and 933 a day, north 139,449 south 134,690; York
// Road weekday 40.1% and 63.1%, 786 and 841 a day, 6,816 hours with data. Total column
// equals North plus South in every row. The file's clock-change rows (a missing 1am and a
// duplicated 2am on 30 March) are handled in code but not taught (Balbriggan owns dates).
// The DLR county page owns bathing water, dlr LexIcon, Kingstown, IADT, the DART station
// list and County Hall's eircode. Scratchpad dist/dirflow.js.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'DÚN LAOGHAIRE', blurb: 'Two cycle counters with similar daily totals, and morning flows that run in opposite directions. A page on what a total hides.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-dun-laoghaire-dublin',
  code: 'dlg',
  accent: '#833F3F',
  accentRationale: 'Dún Laoghaire: a Victorian-railing brick red from the widened solver search, apart from the Dún Laoghaire-Rathdown blue and the Sandyford green',
  pageType: 'district',
  place: {
    name: 'Dún Laoghaire',
    eyebrow: 'Dún Laoghaire, County Dublin',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dun Laoghaire-Rathdown' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-dun-laoghaire-rathdown', name: 'Dún Laoghaire-Rathdown' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dún Laoghaire-Rathdown', href: '/coding-classes-in-dun-laoghaire-rathdown' },
    { label: 'Sandyford', href: '/coding-classes-in-sandyford-dublin' }
  ],
  routeLabel: 'Dún Laoghaire, County Dublin, Ireland',
  title: 'Coding Classes in Dún Laoghaire, Dublin | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for Dún Laoghaire learners aged 6 to 67, taught live online in same-level groups or one to one. Your first lesson is free.',
  ogDescription: 'Coding and AI classes for Dún Laoghaire, with a data project on seafront cycle counters and the direction a daily total hides.',
  twitterDescription: 'Live online coding, Python and AI for Dún Laoghaire, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Dún Laoghaire',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Dún Laoghaire, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Dún Laoghaire',
  capsuleQ: 'What are the best coding classes in Dún Laoghaire?',
  capsule: 'Every Dún Laoghaire lesson is taught live over video by a teacher, to a few learners at an equal level or to a single learner, with two lessons in an ordinary week, and people aged anywhere from six to sixty-seven can sign up. No travel is involved. The first lesson carries no fee; later months cost USD 100 in a group and USD 150 one to one.',
  lead: 'Dún Laoghaire-Rathdown County Council counts cyclists every hour at three points in Dún Laoghaire, at Seapoint Beach, People\'s Park and York Road, and records which way each one is going. Add the two directions together and Seapoint looks steady: about a thousand cyclists on an average weekday and about a thousand on a weekend day. Split them again and a pattern appears. On weekday mornings two thirds of Seapoint\'s cyclists head north; in the evening nearly two thirds head south. At People\'s Park the morning flow runs the other way. This page teaches a learner to take a total apart and read the direction, and the hour, that the total throws away.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Dún Laoghaire.',

  picks: {
    eyebrow: 'Courses for Dún Laoghaire',
    h2: 'Four first courses for Dún Laoghaire',
    intro: 'Match the learner to an age band; the free opening lesson lets the teacher confirm it or move up or down a course.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and counting: a gate that counts people going in and going out, and a total that forgets which was which.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with hourly counts in two columns, adding them up and then comparing them hour by hour.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real counter data in Python: grouping by hour and day type, shares by direction, and daily profiles.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults whose dashboards show totals, and who need the breakdown that explains them.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Same totals, opposite mornings: take the count apart by direction',
      intro: 'Hourly cyclist counts for 2025 at the council\'s three Dún Laoghaire counters, which record North and South separately. The shares below are the northbound part of all cyclists counted in each window, averaged over the year.',
      body: [
        { kind: 'table', caption: 'Northbound share of cyclists, weekdays in 2025', head: ['Counter', '07:00 to 09:00', '16:00 to 19:00', 'Per weekday'], rows: [
          ['Seapoint Beach', '67.0%', '36.0%', '1,008'],
          ['People\'s Park', '28.8%', '63.8%', '772'],
          ['York Road', '40.1%', '63.1%', '786']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Seapoint', p: 'On weekday mornings two thirds of Seapoint\'s cyclists travel north, and in the evening 64 percent travel south: a there-and-back shape. At weekends it turns around, with only 35.3 percent heading north in the morning and 58.1 percent in the late afternoon.' },
          { h3: 'People\'s Park', p: 'Here the weekday morning flow is mostly southbound, only 28.8 percent north, and the evening flow is northbound, 63.8 percent. Its weekday total of 772 is lower than its weekend figure of 933.' },
          { h3: 'What the totals show', p: 'Seapoint\'s weekday and weekend averages are almost the same, 1,008 and 998 a day. A dashboard showing only those two numbers would call it the same place every day of the week, and it is not.' }
        ] },
        { kind: 'callout', h3: 'A total is a summary, and summaries throw things away', p: 'Adding the two directions answers how many people passed, and forgets where they were going. Adding the hours answers how many in a day, and forgets when. Neither is wrong, but each loses a pattern that only the parts can show. The habit worth building is to keep the parts until the question is clear, and to look at them before trusting the sum. Here that habit turns a flat daily number into a readable picture of a morning and an evening.' },
        { kind: 'p', text: 'The learner\'s program reads the council\'s hourly file, picks out the North and South columns for each counter, and first checks that the published total equals North plus South in every row; in 2025 it does, without exception. It then labels each hour as weekday or weekend, groups the counts by hour of the day, and averages them over the year. Dividing the northbound average by the total in each window gives the shares in the table, and plotting both directions by hour draws the morning and evening peaks side by side. The code also has to cope with the clock change: the file skips one early-morning hour in March and lists another hour twice, and a careful program notices rather than miscounting.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Directions, not destinations', p: 'The counters record which way cyclists pass, not where they are going or why. A flow north in the morning is consistent with a daily trip and back, but the data cannot say it is one, and the page does not claim it.' },
          { h3: 'Uneven coverage', p: 'People\'s Park has counts for 8,039 hours of the year and Seapoint for 8,015, but York Road only for 6,816. The council puts gaps down to a counter fault or a battery needing replacement, so York Road\'s averages rest on less of the year and deserve more caution.' },
          { h3: 'The whole year', p: 'Across 2025 the Seapoint counter recorded 160,804 cyclists going north and 175,033 going south; People\'s Park recorded 139,449 and 134,690. Yearly totals like these hide the daily rhythm entirely.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Dún Laoghaire, named',
      h2: 'Dún Laoghaire, in the words of its park, museum and council data',
      intro: 'Facts that each body publishes itself, with the eircode where it gives one.',
      body: [
        { kind: 'table', caption: 'Named places in Dún Laoghaire', head: ['Place', 'What its own source says'], rows: [
          ['People\'s Park', 'Two hectares, a Sunday market from 11am to 4pm'],
          ['National Maritime Museum of Ireland', 'Haigh Terrace, A96 C8X7'],
          ['Seapoint Beach counter', 'Cyclists and pedestrians, both ways, since 1 September 2020'],
          ['York Road counter', 'Cyclists and pedestrians, both ways, since 31 August 2020']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A Victorian park', p: 'The council says People\'s Park was developed near the end of the 19th century by the town commissioners in the formal Victorian style, with wrought iron railings, stone walls, large gates and a bandstand, a short stroll from the harbour.' },
          { h3: 'The maritime museum', p: 'The National Maritime Museum of Ireland gives its address as Haigh Terrace, Dún Laoghaire, and its opening hours as daily from 11:00 to 17:00.' },
          { h3: 'Where the counters are', p: 'The council\'s counter file gives each device\'s coordinates and start date. The three in Dún Laoghaire record both cyclists and pedestrians in both directions, and all began within a day of each other at the end of summer 2020.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Dún Laoghaire, because the page uses only facts that named bodies publish about the place. The project describes counted cyclists at three points; it says nothing about why people travel, and the county\'s bathing water and libraries belong to the Dún Laoghaire-Rathdown page.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'The week for a Dún Laoghaire learner',
      intro: 'In most weeks there are two lessons, and a teacher leads both of them live from first to last minute.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children open with block code and counting games, tallying things going in and out and noticing what a single total leaves out.' },
          { h3: 'Teenagers', p: 'Teenagers progress to Python, websites, AI projects and real council data such as the seafront cycle counters.' },
          { h3: 'Adults', p: 'Adults may begin from nothing at all; the first lesson settles which course suits.' }
        ] },
        { kind: 'p', text: 'Counts and counter details are Dún Laoghaire-Rathdown County Council\'s open data; the shares, averages and profiles are our own calculations, run on 20 September 2026. The park and the museum are quoted from their own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a tally at a gate to a daily profile',
    intro: 'Treat the bands as a starting point; the teacher settles the level in lesson one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'In and out', p: 'Block-coded counters that tally both ways and then add them up.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Two columns', p: 'Python that compares two columns of hourly counts instead of only summing them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Profiles and shares', p: 'Grouping by hour and day type, direction shares and charts of a typical day.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Behind the dashboard', p: 'Breaking workplace totals into the parts that explain them.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how busy the Seapoint cycle path is',
    intro: 'It will usually report the daily total.',
    p1: 'Ask an AI assistant how busy Seapoint is for cyclists and it will likely quote a daily average of around a thousand and perhaps note that weekends are similar. The numbers are correct. The answer misses the most interesting fact in the file: that the flow points one way in the morning and the other way at night, and flips at weekends.',
    p2: 'After building the direction profiles, the learner asks the assistant what the northbound share is at 8am and at 6pm, how that changes at weekends, and whether the published total always equals the sum of its directions. Those questions pull the pattern out of the total.',
    closer: 'Adding two columns is easy. Knowing what the sum throws away is the skill.',
    blogAnchor: 'why learning to code still opens doors'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Dún Laoghaire',
    intro: 'In short.',
    cells: [
      { h3: 'Live every time', p: 'A teacher runs each lesson in real time and works directly with each learner\'s code.' },
      { h3: 'Peers at one level', p: 'Five to ten learners at the same level, from Dún Laoghaire, the rest of Ireland or overseas.' },
      { h3: 'Two days, set', p: 'Roughly eight lessons a month, on the same two days each week.' },
      { h3: 'School breaks', p: 'Holidays, mid-term breaks and exam weeks are planned into the course.' },
      { h3: 'Bring your own device', p: 'A laptop or desktop, headphones or speakers and a microphone, and a connection fit for video.' },
      { h3: 'Individually', p: 'One-to-one lessons for learners ahead of the groups, needing more time, or keeping unusual hours.' }
    ],
    spec: { title: 'No classroom to visit', p: 'We have no premises in Dún Laoghaire, in the county or anywhere in Ireland. All lessons are on video and are the same wherever the learner joins from.' }
  },

  fees: {
    h2: 'Fees for Dún Laoghaire',
    intro: 'As simple as it gets.',
    first: 'A free first lesson including a level check.',
    group: 'A month in a same-level group of five to ten, around eight live lessons.',
    private: 'A month of one-to-one lessons on the same schedule.',
    closer: 'The fee in US dollars is the same for every family outside India, month by month. Nothing is owed for the free lesson, billing starts when the course starts, and the pricing page explains holidays, missed lessons and a change between group and private teaching.'
  },

  reviewsH2: 'Six families\' words on Google, unchanged',

  book: {
    h2: 'Book a free first lesson in Dún Laoghaire',
    intro: 'Tell us the learner\'s age and interests, and the first hour will be shaped around them. It could end with a game, a first working program, or a daily chart with the morning and evening pulling opposite ways.',
    success: 'Thank you. We will be in touch soon to arrange the lesson.'
  },

  faq: {
    h2: 'Dún Laoghaire coding class questions',
    intro: 'Questions Dún Laoghaire families ask us.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Dún Laoghaire?', a: 'No. Lessons are live on video and we have no premises in Ireland. A learner needs a computer, working sound and a microphone, and a dependable connection. The phone number shown is in India.', boiler: true },
      { q: 'What is the cycle counter project?', a: 'Taking a year of the council\'s hourly cyclist counts at Seapoint Beach, People\'s Park and York Road, splitting them by direction and hour, and finding that similar daily totals hide opposite morning and evening flows: at Seapoint 67.0 percent go north on weekday mornings, at People\'s Park only 28.8 percent.' },
      { q: 'Does the data show where people are cycling to?', a: 'No. The counters record direction at one point, not destination or purpose. The page describes the pattern and leaves the reasons alone.' },
      { q: 'Why is there no population for Dún Laoghaire on this page?', a: 'District pages print only what named bodies publish about the place itself, here the council\'s counter data and park page and the maritime museum, and none of them gives a head count.' },
      { q: 'What time are lessons?', a: 'Weekdays from after school through the evening, and weekend daytimes. Timetables are written in Irish time. India, where the teachers work, is ahead of Dún Laoghaire by five and a half hours in the cold months and by four and a half once the clocks go forward, so the hours offered are ones that suit both.' },
      { q: 'Is there anything for adults?', a: 'Yes. Adults up to sixty-seven can join, including total beginners, and choose after the first lesson between a small same-level group and private lessons.' },
      { q: 'Will my child learn beside other Dún Laoghaire children?', a: 'Perhaps, but groups are made by level, so classmates are just as likely to be elsewhere in Ireland or abroad.' },
      { q: 'What do coding classes in Dún Laoghaire cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, grouped by level, pace and goals rather than by age or address. When no group fits a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Dún Laoghaire and the bay',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a> page covers the county, including its bathing water project, while <a class="cg-inline-link" href="/coding-classes-in-sandyford-dublin">Sandyford</a> and <a class="cg-inline-link" href="/coding-classes-in-dundrum-dublin">Dundrum</a> have district pages inland. Further down the coast is <a class="cg-inline-link" href="/best-coding-class-in-bray">Bray</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dún Laoghaire, Dún Laoghaire-Rathdown and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-dun-laoghaire-rathdown', label: 'Dún Laoghaire-Rathdown' },
    { href: '/coding-classes-in-sandyford-dublin', label: 'Sandyford' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dlg .cg-hero-grid { align-items: end; gap: clamp(1.06rem, 3.17vw, 2.49rem); }
.cg-root.cg-dlg .cg-hero h1 { font-weight: 700; letter-spacing: -0.0172em; line-height: 1.08; }
.cg-root.cg-dlg .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.17rem; }
.cg-root.cg-dlg .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-dlg .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.0118em; }
.cg-root.cg-dlg .cg-grid-3 { gap: clamp(1.09rem, 2.74vw, 2.14rem); }
.cg-root.cg-dlg .cg-table caption { letter-spacing: 0.031em; font-weight: 700; }
.cg-root.cg-dlg .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-dlg .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-dlg .cg-ladder-col { border-bottom: 5px double var(--cg-accent); padding-bottom: 1.05rem; }
.cg-root.cg-dlg .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Dun Laoghaire, named sources only (owner rule for districts), read 20 September 2026. DLR open data on data.smartdublin.ie, "Bicycle Counts DLR": "Bicycle counter data is available from sixteen locations throughout the county. Ten of these locations record bidirectional traffic, with the remaining six recording unidirectional cycle traffic"; "the data at 11:00 am corresponds to the counts saved between 11:00 am and" the next hour (so hours 7 and 8 are 07:00-08:59); "Data gaps are due to a cycle counter fault or due to a battery requiring replacement"; 2025 hourly file dlr_cycle_count2025.csv with columns "Dun Laoghaire @ Peoples Park Cyclist", "... Cyclist North", "... Cyclist South", "Dun Laoghaire @ Seapoint Beach Cyclist", "... South Cyclist", "... North Cyclist", "Dun Laoghaire @ York Road Cyclist", "... Cyclist North", "... Cyclist South"; 8,040 rows; one hour label duplicated (30 March, 2:00 AM, one row blank) and 1:00 AM absent that day. Counter locations file: "Dun Laogaire @ Seapoint Beach" (source spelling) cyclists and pedestrians, 2 way, 53.297513 -6.160875, from 01/09/2020; "Dun Laoghaire @ Peoples Park" cyclists and pedestrians, 2 way, 53.291536 -6.128758, from 01/09/2020; "Dun Laoghaire @ York Road" cyclists and pedestrians, 2 way, 53.296157 -6.142648, from 31/08/2020. Our arithmetic (dist/dirflow.js): Seapoint Beach 8,015 hours with both directions, north 160,804, south 175,033; weekday north share 07:00-08:59 67.0%, 16:00-18:59 36.0%; weekend 35.3% and 58.1%; mean per weekday 1,008, per weekend day 998. People\'s Park 8,039 hours, north 139,449, south 134,690; weekday 28.8% and 63.8%; weekend 59.6% and 51.6%; 772 and 933 per day. York Road 6,816 hours, north 124,189, south 103,520; weekday 40.1% and 63.1%; weekend 69.0% and 43.7%; 786 and 841 per day. Total column equals North plus South in every row with both values. DLR People\'s Park page: "a short stroll from Dún Laoghaire harbour"; "The two hectare park is open to visitors every day"; "Markets take place between 11am and 4pm every Sunday"; "developed near the end of the 19th century by the town commissioners in the formal Victorian style, including wrought iron railings, stone walls, large gates and a bandstand"; "People\'s Park, Park Road, Dún Laoghaire". National Maritime Museum of Ireland: "Haigh Terrace, Dun Laoghaire, Co. Dublin, Ireland. A96 C8X7"; "Open Daily 11:00 to 5:00pm".',
    localProject: 'Direction by hour, the pattern a total hides. From Dún Laoghaire-Rathdown County Council\'s 2025 hourly cyclist counts at Seapoint Beach, People\'s Park and York Road, the learner checks that the total equals North plus South in every row, groups by hour and weekday or weekend, and computes northbound shares: Seapoint 67.0 percent north on weekday mornings and 36.0 percent in the evening, reversing at weekends; People\'s Park the opposite, 28.8 and 63.8 percent. Seapoint\'s daily totals (1,008 weekday, 998 weekend) look identical and hide the pattern. The file\'s clock-change rows are handled in code without being the lesson. Lessons: keep components until the question is clear; direction and hour carry information a sum discards; directions are not destinations. New family for the cluster: disaggregating a total by direction and time.',
    requiredMentions: [
      '67.0%',
      '28.8%',
      '63.8%',
      '36.0%',
      '160,804',
      '175,033',
      '1,008',
      '772',
      '933',
      '139,449',
      '6,816',
      'A96 C8X7'
    ],
    sources: [
      { claim: 'Dún Laoghaire-Rathdown County Council, Bicycle Counts DLR, 2025 hourly cyclist counts with North and South columns for Seapoint Beach, People\'s Park and York Road.', url: 'https://data.smartdublin.ie/dataset/2df0cfd2-eb9c-4d17-ad57-28e24208bdc8/resource/d99b46fd-c523-43fe-b776-0ec7952a35e3/download/dlr_cycle_count2025.csv' },
      { claim: 'Dún Laoghaire-Rathdown County Council, Bicycle/Pedestrian Counter Locations DLR: coordinates, traffic types, directions and start dates (Seapoint Beach and People\'s Park 1 September 2020, York Road 31 August 2020).', url: 'https://data.smartdublin.ie/dataset/c97da275-ae40-4b10-bdad-d389a8889b5b/resource/d2c5901f-98ed-4882-a96a-fa31eceba0bc/download/dlr_cycle_counter_new_locations.csv' },
      { claim: 'Dún Laoghaire-Rathdown County Council, People\'s Park: two hectares; Sunday market 11am to 4pm; developed near the end of the 19th century by the town commissioners in the formal Victorian style; Park Road, Dún Laoghaire.', url: 'https://www.dlrcoco.ie/parks-outdoors/parks/peoples-park' },
      { claim: 'National Maritime Museum of Ireland: Haigh Terrace, Dún Laoghaire, A96 C8X7; open daily 11:00 to 17:00.', url: 'https://www.mariner.ie/' }
    ],
    rejectedClaims: [
      'Any statement of where cyclists are going or why: the counters record direction at a point only.',
      'Clock-change handling as the lesson: dates and times belong to the Balbriggan page.',
      'Bathing water, dlr LexIcon, the Kingstown name, IADT, the DART station list and County Hall\'s eircode: the Dún Laoghaire-Rathdown page owns them.',
      'Any population figure for Dún Laoghaire and any aggregation of census small areas: owner rule for district pages.'
    ]
  }
};
