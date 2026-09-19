'use strict';
// Crumlin, Dublin 12 (cg- district page, Ireland cluster, Phase 6). Named sources only (owner rule
// for districts), read 20 September 2026: the National Transport Authority's Dublin Bus GTFS feed
// (transportforireland.ie GTFS_Dublin_Bus.zip, valid 18 September 2026 to 18 September 2027); the
// GTFS Schedule Reference (gtfs.org) on times after midnight; DCC Eamonn Ceannt Park and Willie
// Pearse Park pages; City of Dublin FET College Crumlin's own site. Spine: clock times live on a
// circle. Scratchpad crm/last.js. Tuesday 22 September 2026, the 9 stops whose names contain
// "Crumlin" (Crumlin Road x3, Crumlin Village, Crumlin SC, Crumlin Coll x2, Crumlin Hospl x2):
// 1,775 departures on 9 routes; 77X has a single 08:18 trip and is left out (rule: at least 10
// departures), leaving 8 routes and 1,774 departures. Last departures: 150 23:29, 122 23:30, 151
// 23:54, 27 23:56, 56A 23:58, S2 24:02, 74 24:08, 77A 24:16. Mean of clock times (00:02 etc.)
// 14:54; mean of GTFS service-day times 23:54; circular mean 23:54 with resultant length 0.998.
// Clock-time sort puts 00:02, 00:08, 00:16 first. First departures 05:45 to 06:35, mean 06:11.
// EPA-49 (Davitt Road, which the EPA places in Inchicore) was tested for this lesson and NOT used,
// because it is not a Crumlin source.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'CRUMLIN', blurb: 'The last buses out of Crumlin, and why their average time comes out as mid-afternoon if you are not careful.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-crumlin-dublin',
  code: 'crm',
  accent: '#3E1E31',
  accentRationale: 'Crumlin: a night-bus plum from the widened solver search, clear of the Killarney and Rathmines wines',
  pageType: 'district',
  place: {
    name: 'Crumlin',
    eyebrow: 'Crumlin, Dublin 12',
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
    { label: 'Rathmines', href: '/coding-classes-in-rathmines-dublin' }
  ],
  routeLabel: 'Crumlin, Dublin 12, Ireland',
  title: 'Coding Classes in Crumlin, Dublin | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Crumlin learners aged 6 to 67, in small same-level groups or one to one. The first lesson is completely free.',
  ogDescription: 'Coding and AI classes for Crumlin, with a data project on the last buses of the night and how to average times that cross midnight.',
  twitterDescription: 'Live online coding, Python, AI and maths for Crumlin, ages 6 to 67. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Crumlin',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Crumlin, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Crumlin',
  capsuleQ: 'What are the best coding classes in Crumlin?',
  capsule: 'Crumlin learners have a teacher leading every lesson live over video, in a small group of learners at one level or one to one, on two days in a normal week, for any age from six to sixty-seven. It all happens at home. Lesson one carries no charge, and from then on each month is USD 100 as part of a group or USD 150 taught privately.',
  lead: 'Eight Dublin Bus routes stop at places the timetable names after Crumlin, and each has a last departure of the night. Three of them leave after midnight: at 00:02, 00:08 and 00:16. Average the eight last buses as a clock shows them and the answer is 14:54, the middle of the afternoon, when every one of those buses is still running. The mistake is not in the arithmetic. Clock times go round in a circle, and an ordinary average treats 00:16 as the earliest time of day rather than the latest. This page teaches a learner two ways to average times properly, and why the bus timetable itself writes 00:16 as 24:16.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Crumlin.',

  picks: {
    eyebrow: 'Courses for Crumlin',
    h2: 'Four first courses for Crumlin',
    intro: 'Use the age band to choose a starting point; the free first lesson is where the teacher checks the level and switches course if another fits better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and clocks: a clock face game where the hands go round and the numbers start again after 12.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Angles, sine and cosine made useful: turning times of day into points on a circle and back.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Python with a real bus timetable feed: filtering stops, finding last departures and averaging them correctly.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who summarise shift times, delivery windows or opening hours that cross midnight.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When is the last bus, on average? Times that cross midnight',
      intro: 'The departures come from the National Transport Authority\'s Dublin Bus timetable feed for Tuesday 22 September 2026, at the nine stops whose names contain Crumlin. Routes with fewer than 10 departures from those stops that day are left out, which removes one route that runs a single morning trip.',
      body: [
        { kind: 'table', caption: 'Last weekday departures from Crumlin stops, and three ways to average them', head: ['What is averaged', 'Result'], rows: [
          ['Last buses: 150, 122, 151, 27, 56A', '23:29, 23:30, 23:54, 23:56, 23:58'],
          ['Last buses: S2, 74, 77A (clock time)', '00:02, 00:08, 00:16'],
          ['Ordinary average of the clock times', '14:54'],
          ['Average of the timetable times (24:02, 24:08, 24:16)', '23:54'],
          ['Average on a circle', '23:54, concentration 0.998']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why 14:54 appears', p: 'Written as a clock shows it, 00:16 is a small number and 23:58 a large one, so an ordinary average treats the three buses after midnight as the earliest of the day and drags the answer to mid-afternoon. Sort the same list by clock time and the three latest buses come out on top, as if they were the first.' },
          { h3: 'The timetable\'s own fix', p: 'The GTFS standard behind the timetable says that for times after midnight on the service day, the time is entered as a value greater than 24:00:00, so a trip at 1:35 in the morning is written 25:35:00. The feed writes Crumlin\'s latest bus as 24:16, and with that convention the ordinary average is 23:54.' },
          { h3: 'The general fix', p: 'Times of day, compass bearings and months of the year all go round in circles. Turn each time into a point on a circle, average the points, and turn the result back into a time. For the eight last buses that gives 23:54 as well, and the length of the averaged point, 0.998 out of a possible 1, says the times are tightly bunched.' }
        ] },
        { kind: 'callout', h3: 'If the numbers wrap around, average them on a circle', p: 'An average assumes that the biggest and smallest values are the furthest apart. On a clock, 23:58 and 00:02 are four minutes apart, not almost a whole day. Before averaging anything that wraps, whether hours, angles or days of the week, either unroll it the way the timetable does, with times past 24:00, or map it to a circle and back. The circle method also tells you when an average means little: if the times are spread all round the clock, the averaged point lands near the centre and its length drops towards zero.' },
        { kind: 'p', text: 'The learner\'s program opens the timetable feed, a set of plain text files. It reads the calendar to find which services run on the chosen Tuesday, selects the stops whose names contain Crumlin, and scans more than two million lines of stop times for departures at those stops, 1,774 of them on the eight routes. For each route it finds the first and last departure. Then it averages the last departures three ways: as clock times, as the timetable writes them, and on a circle using sine and cosine, and prints all three beside each other so the wrong one is impossible to miss. As a check, the same code averages the first departures, which run from 05:45 to 06:35 and do not cross midnight, and all three methods agree at 06:11.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Decide what counts', p: 'One route calls at a Crumlin stop only once that day, at 08:18. Its last bus and its first bus are the same bus, so the program sets a rule, at least 10 departures, before calling anything a last bus. Defining the question comes before averaging the answer.' },
          { h3: 'A timetable, not a record', p: 'These are planned departures for one weekday in the feed. Buses run early or late, and weekend and holiday timetables differ, so the page makes no claim about any particular night\'s last bus.' },
          { h3: 'Beyond buses', p: 'The same trap waits in shift rotas that end after midnight, in wind directions near north, and in birthdays around New Year. Anything measured on a dial needs the circle treatment.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Crumlin, named',
      h2: 'Crumlin by its parks, its college and its bus stops',
      intro: 'Each line is taken from the body that runs the place.',
      body: [
        { kind: 'table', caption: 'Named places in Crumlin', head: ['Place', 'What its own source says'], rows: [
          ['Eamonn Ceannt Park', '237 Clogher Road, Crumlin, D12 DP78, with the city\'s velodrome'],
          ['Willie Pearse Park', '159 Windmill Road, Crumlin, D12 H4C8, opened 1949'],
          ['City of Dublin FET College, Crumlin', 'D12 N921, ten minutes\' walk from the Suir Road Luas stop'],
          ['Bus stops named Crumlin', 'Nine in the Dublin Bus timetable feed']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eamonn Ceannt Park', p: 'Dublin City Council says the park is named after one of the executed leaders of the 1916 Rising and has soccer pitches, a 9-a-side all-weather pitch, tennis courts, a basketball court, a running track and an outdoor gym, and is home to Dublin City\'s velodrome.' },
          { h3: 'Willie Pearse Park', p: 'The council says the park first opened in 1949 and is named after Willie Pearse, younger brother of Pádraig Pearse. Its facilities include a bowling green, a boxing club, a GAA pitch and an all-weather pitch.' },
          { h3: 'The college', p: 'City of Dublin FET College, Crumlin, gives its eircode as D12 N921 and says it is ten minutes\' walk from the Suir Road Luas stop and well served by buses on the Crumlin Road.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Crumlin, because the page prints only what named bodies publish about the place. The bus figures are planned times for one weekday, taken from the national timetable feed, and the page says nothing about how busy any bus is.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'A Crumlin learner\'s week of lessons',
      intro: 'Most weeks bring two lessons, and a teacher leads each one live all the way through.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children begin with block code and clock games, where the numbers start again after twelve.' },
          { h3: 'Teenagers', p: 'Teenagers progress to Python, web pages, AI projects and real timetable feeds, with the geometry done in code.' },
          { h3: 'Adults', p: 'Adults can join with no background; the first lesson settles where to start.' }
        ] },
        { kind: 'p', text: 'Departure times are the National Transport Authority\'s published timetable feed; the route filtering, first and last departures and all three averages were worked out by us on 20 September 2026. Park details are Dublin City Council\'s and college details the college\'s own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a clock face to averages on a circle',
    intro: 'Take the bands as a first guess; lesson one places the learner.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Round and round', p: 'Block-coded clocks and spinners that wrap back to the start.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Times as angles', p: 'Python that turns a time into an angle and a point, and back again.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Circular averages', p: 'Real timetable data, first and last departures, and three averages side by side.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Shifts and schedules', p: 'Summarising times that cross midnight without producing nonsense.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant for the average last bus',
    intro: 'It may convert the times carefully and still get mid-afternoon.',
    p1: 'Give an AI assistant the eight last departures as a clock shows them and ask for the average, and a straightforward answer converts each to minutes, averages them and reports 14:54. Every step is correct and the result is absurd, because the method treats 00:16 as sixteen minutes into the day instead of sixteen minutes after 23:59.',
    p2: 'The learner who has done this project asks the assistant to average the times on a circle, or to use the timetable\'s own times past 24:00, and to report how bunched they are. The same learner knows to check the answer against common sense: a last bus at mid-afternoon cannot be right.',
    closer: 'Arithmetic assumes numbers lie on a line. Some live on a circle, and code has to be told.',
    blogAnchor: 'what a learner of any age still gains from coding'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Crumlin',
    intro: 'The practicalities.',
    cells: [
      { h3: 'A teacher every time', p: 'Each lesson is led live, and the teacher watches and helps with each learner\'s code as it comes together.' },
      { h3: 'Levelled groups', p: 'Five to ten learners at one level, joining from Crumlin, the rest of Ireland or abroad.' },
      { h3: 'Two slots a week', p: 'Lessons on the same two days each week, about eight in a month.' },
      { h3: 'Holidays planned', p: 'The course plan works around school holidays, mid-terms and exams.' },
      { h3: 'Equipment', p: 'A desktop or laptop, a microphone, headphones or speakers, and internet good enough for a video call.' },
      { h3: 'Solo teaching', p: 'One-to-one lessons for learners who are ahead, need extra time, or need hours no group runs.' }
    ],
    spec: { title: 'No local premises', p: 'We have no building in Crumlin, in Dublin or anywhere in Ireland. Lessons happen live on video and are the same from any home.' }
  },

  fees: {
    h2: 'Fees for Crumlin',
    intro: 'In brief.',
    first: 'A first lesson with a level check, at no charge.',
    group: 'A month in a same-level group of five to ten, around eight live lessons.',
    private: 'A month of one-to-one lessons on the same timetable.',
    closer: 'All families outside India pay the same US dollar fee, one month at a time. The free lesson involves no commitment, charges begin only with the course, and the pricing page sets out holidays, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Google reviews from families, copied exactly',

  book: {
    h2: 'Book a free first lesson in Crumlin',
    intro: 'Tell us how old the learner is and what grabs their attention, and the opening lesson will be shaped to match. It might close with a small game, a working program, or a clock that averages midnight properly.',
    success: 'Thank you. We will be in touch soon to arrange the lesson.'
  },

  faq: {
    h2: 'Crumlin coding class questions',
    intro: 'Questions Crumlin families often ask.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Crumlin?', a: 'No. Lessons are live on video and we have no premises in Ireland. The learner needs a computer, a microphone and sound, and a reliable connection. The phone number on the page is an Indian one.', boiler: true },
      { q: 'What is the last bus project?', a: 'The learner takes the Dublin Bus timetable feed, finds the last weekday departure of each route from stops named Crumlin, and averages them: 14:54 as clock times, which is absurd, and 23:54 either with the timetable\'s times past 24:00 or on a circle.' },
      { q: 'Does the page say when the last bus actually leaves?', a: 'It lists planned last departures for one weekday from the national timetable feed. Real buses can run early or late, and other days have other timetables, so check the operator before travelling.' },
      { q: 'Why is there no population figure for Crumlin?', a: 'The page prints only what named organisations publish about Crumlin itself, here the National Transport Authority, Dublin City Council and the FET college, and none of them gives a head count.' },
      { q: 'What times are lessons?', a: 'Weekdays from after school into the evening, and daytimes at weekends. Every slot is listed in Irish time. The teaching team is in India, which runs five and a half hours ahead of Crumlin in winter and four and a half in summer, and every slot we offer is sensible for both.' },
      { q: 'Do you take adult learners?', a: 'Adults are very welcome, right up to sixty-seven and with or without experience; once the free lesson is over they choose between a same-level group and private lessons.' },
      { q: 'Will my child be with other Crumlin children?', a: 'Only by chance. Groups are made by level, so classmates can live anywhere in Ireland or further afield.' },
      { q: 'What do coding classes in Crumlin cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How big is each group?', a: 'Five to ten learners, matched by level, pace and goals rather than age or address. If no group fits a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Crumlin',
    html: 'To the east, <a class="cg-inline-link" href="/coding-classes-in-rathmines-dublin">Rathmines</a> has a project on library loans. The <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page covers the city, and for every other county, town and district there is the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Crumlin, Dublin and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-rathmines-dublin', label: 'Rathmines' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-crm .cg-hero-grid { align-items: center; gap: clamp(1.18rem, 3.14vw, 2.46rem); }
.cg-root.cg-crm .cg-hero h1 { font-weight: 680; letter-spacing: -0.0172em; line-height: 1.09; }
.cg-root.cg-crm .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.08rem; }
.cg-root.cg-crm .cg-eyebrow { letter-spacing: 0.138em; font-weight: 610; text-transform: uppercase; }
.cg-root.cg-crm .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.0131em; }
.cg-root.cg-crm .cg-grid-3 { gap: clamp(1.09rem, 2.76vw, 2.13rem); }
.cg-root.cg-crm .cg-table caption { letter-spacing: 0.027em; font-weight: 700; }
.cg-root.cg-crm .cg-table td { font-variant-numeric: tabular-nums; letter-spacing: 0.005em; }
.cg-root.cg-crm .cg-table tr:nth-child(3) td { font-style: italic; }
.cg-root.cg-crm .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.01rem; }
.cg-root.cg-crm .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Crumlin, named sources only (owner rule for districts), read 20 September 2026. National Transport Authority, Dublin Bus GTFS (https://www.transportforireland.ie/transitData/Data/GTFS_Dublin_Bus.zip; feed_info: National Transport Authority, feed_start_date 20260918, feed_end_date 20270918). Stops whose stop_name contains "Crumlin": 8220DB001409 Crumlin Road, 8220DB001424 Crumlin Hospl, 8220DB001436 Crumlin Road, 8220DB002095 Crumlin Coll, 8220DB002099 Crumlin Hospl, 8220DB002188 Crumlin Coll, 8220DB002189 Crumlin SC, 8220DB002329 Crumlin Village, 8220DB007938 Crumlin Road. Our arithmetic (crm/last.js), Tuesday 22 September 2026: 1,775 departures on 9 routes; 77X a single trip at 08:18:15, excluded by the rule of at least 10 departures; remaining 8 routes, 1,774 departures; last departures 150 23:29:27 (Crumlin Village), 122 23:30:33, 151 23:54:00, 27 23:56:00, 56A 23:58:45, S2 24:02:04, 74 24:08:45, 77A 24:16:00; mean of clock times 14:54; mean of GTFS times 23:54; circular mean 23:54, mean resultant length 0.998; first departures 05:45 to 06:35, mean 06:11 by all three methods. GTFS Schedule Reference (gtfs.org): "For times occurring after midnight on the service day, enter the time as a value greater than 24:00:00 in HH:MM:SS. Example: 14:30:00 for 2:30PM or 25:35:00 for 1:35AM on the next day." Dublin City Council, Eamonn Ceannt Park: "Eamonn Ceannt Park in Crumlin is named after one of the executed leaders of the 1916 Rising. The park has soccer pitches, a 9-a-side all weather pitch, changing facilities, tennis courts, a basketball court, running track and an outdoor gym. It is also home to Dublin City\'s velodrome."; "237 Clogher Rd Crumlin Dublin 12 Co. Dublin D12 DP78". Dublin City Council, Willie Pearse Park: "Dublin City Council\'s Willie Pearse Park first opened in 1949. The park was named after Willie Pearse, younger brother of Padraig Pearse, a leader of the 1916 Easter Rising."; facilities "All Weather Pitch Bowling Green Boxing Club Changing Facilities GAA Pitch Playground Soccer Pitch"; "159 Windmill Rd Crumlin Dublin Co. Dublin D12 H4C8". City of Dublin FET College, Crumlin: "Eir Code: D12 N921"; "We are 10 minutes walk from the Suir Road Luas stop and well served by buses on the Crumlin Road."',
    localProject: 'Clock times live on a circle. From the National Transport Authority\'s Dublin Bus timetable feed, the learner finds the last weekday departure of the eight routes serving stops named Crumlin (23:29 to 00:16, three after midnight) and averages them three ways: as clock times (14:54, absurd), as the timetable writes them with times past 24:00 (23:54), and on a circle with sine and cosine (23:54, resultant length 0.998). A single-trip route is excluded by a stated rule before any averaging; first departures (05:45 to 06:35) agree under every method as a check. Lessons: averages assume a line; hours, angles and months wrap; unroll or use the circle; the resultant length shows whether an average means anything. New family site-wide: CIRCULAR STATISTICS (mean resultant, averaging on a circle); distinct from Rustaq (modular arithmetic of slots), Balbriggan (date parsing) and Blackrock (waiting times).',
    requiredMentions: [
      '14:54',
      '23:54',
      '0.998',
      '24:16',
      '1,774',
      '05:45',
      '25:35:00',
      'D12 DP78',
      'D12 H4C8',
      'D12 N921',
      'Suir Road',
      'velodrome'
    ],
    sources: [
      { claim: 'National Transport Authority, Dublin Bus GTFS timetable feed valid from 18 September 2026: departures at stops named Crumlin on Tuesday 22 September 2026.', url: 'https://www.transportforireland.ie/transitData/Data/GTFS_Dublin_Bus.zip' },
      { claim: 'GTFS Schedule Reference: times after midnight on the service day are entered as values greater than 24:00:00.', url: 'https://gtfs.org/documentation/schedule/reference/' },
      { claim: 'Dublin City Council, Eamonn Ceannt Park: named after an executed leader of the 1916 Rising; sports facilities; home to Dublin City\'s velodrome; 237 Clogher Road, D12 DP78.', url: 'https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/eamonn-ceannt-park' },
      { claim: 'Dublin City Council, Willie Pearse Park: opened 1949; named after Willie Pearse; bowling green, boxing club and pitches; 159 Windmill Road, D12 H4C8.', url: 'https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/willie-pearse-park' },
      { claim: 'City of Dublin FET College, Crumlin: D12 N921; ten minutes\' walk from the Suir Road Luas stop.', url: 'https://www.crumlincollege.ie/' }
    ],
    rejectedClaims: [
      'EPA station 49 as a Crumlin source: the EPA places it on Davitt Road, Inchicore; tested and not used.',
      'Any course fee in euro from the college site.',
      'The Crumlin swimming pool: its operator\'s page did not load, so no fact from it is used.',
      'Date parsing (Balbriggan), modular slot arithmetic (Rustaq) and waiting times (Blackrock): other pages own them.',
      'Any population figure for Crumlin and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
