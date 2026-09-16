'use strict';
// Waterford (cg- city page, Ireland cluster, Phase 3). Spine: a school-gathered
// placenames survey with no licence declared, and the question of whether you
// may use a dataset at all. GEOGRAPHY: there is no city-only council; the local
// authority is Waterford City and County Council with 127,363 people, while the
// built-up city and suburbs is 60,079 and straddles two counties, 54,313 in
// Waterford and 5,766 in Kilkenny. Facts read at primary sources on 16
// September 2026: CSO tables F1010, F1011, F1013, F1015 and F1016, the
// Waterford summary and Profile 5, 7 and 8 statements, gov.ie's January 2018
// LCCS list (Mount Sion CBS on Barrack Street was the only Waterford school),
// hea.ie for SETU, waterfordcouncil.ie, irishrail.ie, bausch.com, sanofi.com
// and the Department of Enterprise. Bausch and Lomb's 1,500 staff is a July
// 2021 figure and is date-stamped. The Mount Sion electoral division is NOT
// linked to the school, because that was not checked. Dataset measured by us:
// the council's Placenames Survey, published as two ArcGIS layers with 407 and
// 503 rows, where all 407 published rows also appear in the larger layer and
// the 96 extra rows all carry one authorisation value; 227 raw townland strings
// collapse to 216 once zero-width and non-breaking characters are stripped;
// 40.5% of rows are coded Other, one category is spelled five ways, school
// names are truncated at 31 characters and curly against straight apostrophes
// split one school into two. NO licence is declared on either layer, and the
// larger layer carries an editor's personal email address, so no row content is
// reproduced here. Cork, Limerick, Galway and Dublin own their own datasets.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'city', tag: 'WATERFORD', blurb: 'Ireland\'s oldest city, with a project about a dataset nobody licensed and what to do about that.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-waterford',
  code: 'wfd',
  accent: '#595C2B',
  accentRationale: 'Waterford: a deep moss-olive from the solver, clear of both Irish greens and of every other Ireland page',
  pageType: 'city',
  place: {
    name: 'Waterford',
    eyebrow: 'Waterford, Munster',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Waterford' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Waterford, Ireland',
  title: 'Best Coding Classes in Waterford | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Waterford learners, city and county, ages 6 to 67, at a fixed weekly hour. First lesson free.',
  ogDescription: 'Coding and AI classes for Waterford, taught around a local dataset that raises the first question of all: are you allowed to use this?',
  twitterDescription: 'Waterford coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Waterford Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Waterford, taught live in English.'
  },

  h1: 'Coding classes in Waterford',
  capsuleQ: 'What are the best coding classes in Waterford?',
  capsule: 'Waterford is a built-up city of 60,079 people sitting inside a council area of 127,363, and the city itself crosses a county line: 54,313 of its residents are in Waterford and 5,766 in Kilkenny. It is denser than Cork city and younger too, with 18.9% of people aged under 15. Only 25% of workers here did any work from home against 32% nationally, so evening classes matter more than afternoon ones, and that is exactly what a live online school can offer. We teach ages 6 to 67 at a fixed weekly hour, in groups of five to ten matched by ability or one to one, with teachers working from India. The first lesson costs nothing. After it, a group place is USD 100 a month and private tuition USD 150.',
  lead: 'Primary schools around Waterford spent years collecting the Irish names of local fields, roads, coves and townlands from the people who still use them, and the council put the results online as a map. It is a lovely thing, and for a young programmer it raises the first question that any real dataset raises, long before any code is written: am I allowed to use this? Because no licence is declared on it at all. Not an open one, not a restrictive one, none. There is a second question close behind, because one of the two published versions of the survey carries an editor\'s personal email address in every row, which means republishing it raw would hand out somebody\'s contact details. And then, only then, come the technical problems: two versions of the same survey with 407 rows and 503, and invisible characters that make a townland recorded once look like two different places. That order, permission, then privacy, then code, is the order we teach it in.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Waterford.',

  picks: {
    eyebrow: 'Course picks for Waterford',
    h2: 'Four courses for the oldest city',
    intro: 'What a learner wants to build matters more than their school year. Every course below opens with a free lesson taught by the teacher who would take the class.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A map game in Scratch where places have two names, and the program has to keep both of them straight.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python for a child ready to leave blocks behind, reading small real files rather than invented ones.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Two versions of one survey, invisible characters, and the question of which count to publish and why.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults working with council, health or business data: licences, personal information and the checks that come before analysis.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Waterford today',
      h2: 'A city across a county line',
      intro: 'Waterford has one local authority covering city and county together, and a built-up city that does not stop at the county boundary. Both facts shape how its statistics read.',
      body: [
        { kind: 'table', caption: 'Waterford in Census 2022, Central Statistics Office', head: ['Measure', 'Figure', 'Which Waterford'], rows: [
          ['Waterford city and suburbs', '60,079, of whom 54,313 are in Waterford and 5,766 in Kilkenny', 'The built-up city, which crosses the county line'],
          ['Waterford City and County Council', '127,363, up 10% or 11,187 since 2016', 'The whole council area; there is no separate city council'],
          ['Density of the built-up city', '1,191.7 people per square kilometre across 50.4 square kilometres', 'Built-up city'],
          ['Average age', '38.7, with 18.9% aged under 15', 'Built-up city'],
          ['Worked from home at least one day a week', '13,908 people, 25% of the workforce against 32% nationally', 'Council area'],
          ['Third-level qualifications', '41% of those aged 15 and over, against 45% nationally', 'Council area']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three electoral areas', p: 'The city splits into Waterford City South with 26,011 people, Tramore and Waterford City West with 24,803, and Waterford City East with 24,397. The densest electoral division, The Glen, holds 11,099.4 people per square kilometre.' },
          { h3: 'A city that draws workers in', p: 'There were 27,704 people working in the city and suburbs, 56% of whom lived there. Tramore is the largest feeder town, sending nearly 2,000 workers into the city.' },
          { h3: 'Who lives here', p: 'Non-Irish citizens are 11% of the county. The largest groups are UK citizens at 2,678, then Polish at 2,058, Indian at 831 and Croatian at 590.' }
        ] },
        { kind: 'p', text: 'Two more facts worth keeping. The Waterford Gaeltacht grew from just over 1,800 people to 2,063 between censuses, a rise of 274 or 14%, the fastest growth of any Gaeltacht area in the country. And commuting by train is almost theoretical here: 73 workers and 8 secondary students travelled by train, against 1,252 workers and 2,278 students by bus. A class that arrives over the internet removes the journey question entirely, which in a county shaped like this one is not a small thing.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science and Waterford schools',
      h2: 'One school in the first forty',
      intro: 'Leaving Certificate Computer Science started in a named set of schools in September 2018, with the first examination in 2020.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The city\'s single school', p: 'Mount Sion CBS on Barrack Street was the only Waterford school on the January 2018 first-phase list. Every other student in the county who wanted the subject in those years had to look elsewhere for it.' },
          { h3: 'Where it stands now', p: 'We found no current official list of schools offering the subject, so we make no claim about today. The first-phase list tells you how recently this arrived, not where it is taught.' },
          { h3: 'What we teach instead', p: 'Not the examination subject. Programming, data handling and problem solving, in a weekly class that fits whatever the school timetable does or does not offer.' }
        ] },
        { kind: 'p', text: 'The city has a technological university of its own. South East Technological University was established on 1 May 2022 as Ireland\'s fifth technological university, formed from Waterford Institute of Technology and Institute of Technology Carlow, with 18,500 students across campuses in Waterford, Carlow, Wexford and Wicklow. In Waterford it teaches at Cork Road and College Street. The city\'s industry is on the same roads: Bausch and Lomb has been on the Cork Road Industrial Estate for four decades, employed more than 1,500 people there as of July 2021, and developed its Biotrue contact lens in Waterford, while Sanofi runs a manufacturing site on the Old Kilmeaden Road. Both are places where the difference between a clean dataset and a dirty one is somebody\'s job.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A survey of Irish field names, and three questions before the code',
      intro: 'The council publishes a placenames survey gathered by primary schools: the Irish name of a field, road or cove, its English version, its meaning, the townland, and who remembered it. It is the best teaching dataset in the county, and it starts with a problem that has nothing to do with programming.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Question one: may I use it?', p: 'No licence is declared on either published version of the survey. Not open, not closed, absent. So the honest first step is to write to the council and ask, and to treat the data as look-only until somebody answers.' },
          { h3: 'Question two: whose data is this?', p: 'The larger published version records who edited each row, including a personal email address. Republishing those rows would publish a private individual\'s contact details, which is a decision no student should make by accident.' },
          { h3: 'Question three: which version?', p: 'One published layer holds 407 rows and the other 503. All 407 appear in the larger one; the 96 extras all carry a single authorisation value. So the answer to "how many names were collected?" depends on which address you loaded.' }
        ] },
        { kind: 'table', mt: true, caption: 'What we measured in the published layers, read 16 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Rows in the two published versions', '407 and 503'],
          ['Rows in the larger version only', '96, all carrying the same authorisation value'],
          ['Distinct townland strings before cleaning', '227'],
          ['Distinct townlands after stripping invisible characters', '216'],
          ['Rows whose feature type is recorded as Other', '40.5%'],
          ['Ways one category is spelled in the free-text field', '5']
        ] },
        { kind: 'callout', h3: 'The invisible characters', p: 'Fifty of the townland values contain zero-width or non-breaking characters: marks that occupy no space on screen, survive copying and paste, and make two identical names compare as different. Counting the raw values gives 227 townlands. Stripping the invisible characters and collapsing extra spaces gives 216. Eleven places would otherwise have been counted twice, and nobody looking at the map would ever see why. The same problem splits the schools: one school appears under a curly apostrophe 26 times and under a straight one once, and several school names are cut off at exactly 31 characters by whatever collected them.' },
        { kind: 'p', text: 'Once those are handled, the project itself is a joy. Learners map the names their own neighbourhood still uses, compare the Irish and English versions, and write up what they had to decide. Because we cannot be sure of the licence, our students work with counts, structure and their own cleaned copies rather than republishing the survey, and the write-up says so plainly. That restraint is the lesson: real data belongs to somebody, and the first professional question is always whether you may use it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Permission, privacy, then code',
      h2: 'Five questions to ask before analysing anything',
      intro: 'In this order, because the last one cannot fix mistakes made in the first two.',
      body: [
        { kind: 'table', caption: 'The order of questions for any dataset', head: ['Question', 'What you check', 'What goes wrong if you skip it'], rows: [
          ['May I use this?', 'Look for a stated licence, and treat silence as a no until asked', 'Publishing work built on data you had no right to use'],
          ['Is anyone identifiable?', 'Scan for names, emails, precise locations and free text', 'Handing out a private person\'s details by accident'],
          ['Which version is this?', 'Compare row counts and identifiers across published copies', 'Two correct answers to one question'],
          ['Is the text what it looks like?', 'Strip invisible characters and normalise spacing and quotes', 'Identical values counted as different ones'],
          ['What do the codes mean?', 'List every distinct value in coded columns before grouping', 'A category that swallows 40% of the rows']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A game about places with two names, and what happens when a name is typed with an invisible extra character that nobody can see.' },
          { h3: 'Teenagers', p: 'The real layers in Python: compare the versions, clean the text, count honestly, and write a method note explaining every choice.' },
          { h3: 'Adults', p: 'The same sequence applied at work, where the licence question and the personal data question are the two that carry real consequences.' }
        ] },
        { kind: 'p', text: 'We have no connection with Waterford City and County Council, South East Technological University, Bausch and Lomb, Sanofi, Iarnród Éireann or Mount Sion CBS, and naming them implies none. Census figures are the Central Statistics Office\'s for 2022. The dataset measurements are our own, taken from the council\'s published layers, and no row content from those layers is reproduced on this page.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'X91, a greenway and a station whose car park fills by nine',
      intro: 'The oldest city in Ireland, as its council describes it, is also a compact one. None of which a live lesson needs.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One routing key', p: 'City Hall on The Mall is X91 PK15, Plunkett Station is X91 A2PV, Bausch and Lomb on the Cork Road Industrial Estate is X91 V383 and Sanofi on the Old Kilmeaden Road is X91 TP27.' },
          { h3: 'The Waterford Greenway', p: 'The council\'s trail from the city through Kilmacthomas to Dungarvan opened on 25 March 2017, fifty years to the day after the last passenger train ran that line, and in 2020 became the first Irish greenway to win a Green Flag Award.' },
          { h3: 'Plunkett Station', p: 'Trains run to Dublin Heuston, and west through Clonmel to Limerick Junction. Irish Rail warns that the station car park is normally full from early morning on Tuesdays to Thursdays.' }
        ] },
        { kind: 'spec', title: 'A greenway built on a closed railway', p: 'It is worth noticing what the greenway is: a dataset of its own kind, a disused line turned into a public amenity, recorded and mapped by the council. Cities keep their history in their infrastructure, and increasingly in their open data, which is why learning to read both matters here.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two names for one place to a dataset you may publish',
    intro: 'The bands below are typical rather than fixed. What a learner does in the free lesson decides where they begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Names and matching', p: 'Programs that hold two names for the same thing and keep them together as the game changes.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Text that misbehaves', p: 'First real files, and the discovery that two identical-looking words can fail to match.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Versions and cleaning', p: 'Comparing published versions, normalising text, and defending a published count.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Permission and privacy', p: 'Checking licences and personal data before analysis, then automating the routine parts.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will clean this survey on request. Why should a Waterford teenager learn to do it themselves?',
    intro: 'Because the two questions that matter here are not technical, and a tool will not raise either of them.',
    p1: 'Ask an AI assistant to summarise the placenames survey and it will get to work immediately. It will not ask whether the data carries a licence, because it has no way of knowing there is none. It will not notice that one version of the file records a private individual\'s email address in every row. It may well count 227 townlands rather than 216, because invisible characters look like nothing to a language model too. Every one of those failures produces output that reads perfectly well.',
    p2: 'A learner who has worked through this file asks the questions in the right order and can explain their answers. That is the difference between using a tool and supervising one, and it is the skill that stays valuable when the tools improve again next year.',
    closer: 'So the case for a Waterford child learning to code in 2026 has little to do with any particular employer. It is that somebody in every organisation has to be able to say we may not publish this, or this count is wrong and here is why, and mean it.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Ferrybank, Tramore or west towards Dungarvan',
    intro: 'The council area runs from the Kilkenny border out along the coast, and an online lesson reaches the whole of it without anybody starting a car.',
    cells: [
      { h3: 'No travel, no car park', p: 'A learner in Ferrybank and one in Dungarvan attend the same class, which matters in a county where only 73 people commute by train.' },
      { h3: 'School stages named properly', p: 'Teachers use First Year, Junior Cycle, Transition Year and sixth year as Irish schools do, so nothing needs translating for parents.' },
      { h3: 'A real trial lesson', p: 'Genuine teaching on a genuine task, ending in a recommendation on level, course and weekly hour, with no card details requested.' },
      { h3: 'Matched by ability', p: 'Groups of five to ten learners working at one pace, drawn from Waterford and other countries, which is how a sensible hour exists at every level.' },
      { h3: 'A steady weekly rhythm', p: 'Usually two lessons a week, around eight a month, at a fixed hour, pausing for mid-terms, exams and holidays by agreement.' },
      { h3: 'Teachers on a fixed clock', p: 'India does not change its clocks, so our teachers sit four and a half hours ahead of Ireland in summer and five and a half in winter; Waterford evenings land squarely in their working day.' }
    ],
    spec: { title: 'Why evening slots fill first here', p: 'With only 25% of the county\'s workforce doing any work from home, against 32% nationally, most Waterford families need a class after the working day rather than during it. Evening groups are the ones that fill first, and they are the ones we open first.' }
  },

  fees: {
    h2: 'What classes cost in Waterford',
    intro: 'Three figures, given once, with nothing arriving later.',
    first: 'A complete lesson at no cost, ending in an honest placement and a recommended course.',
    group: 'A month of teaching, normally eight lessons, alongside five to ten learners of similar ability.',
    private: 'The same month of roughly eight lessons, with the teacher working with a single learner.',
    closer: 'Billing is in US dollars on the one rate used outside India, so there is no euro list and Tramore pays what Ferrybank pays. Nothing is charged until a course and a weekly hour have been agreed in the free lesson, and the pricing page covers pauses, missed lessons and changing format.'
  },

  reviewsH2: 'Six Google reviews, printed exactly as our families wrote them',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'The opening task suits the learner: a naming game for a younger child, a first script that opens a file, or the version-and-cleaning puzzle in a real Waterford survey for a teenager.',
    success: 'Thank you. The team will contact you shortly about your Waterford class.'
  },

  faq: {
    h2: 'Waterford coding class questions',
    intro: 'The city, its data and how the lessons work.',
    items: [
      { q: 'How many people live in Waterford?', a: 'Census 2022 counted 60,079 in the built-up city and suburbs, which crosses into Kilkenny, and 127,363 in the Waterford City and County Council area. There is no separate city council.' },
      { q: 'Which Waterford school first offered Leaving Certificate Computer Science?', a: 'Mount Sion CBS on Barrack Street was the only Waterford school in the January 2018 first phase. That list shows where the subject began, not where it is taught now.' },
      { q: 'What is the placenames project?', a: 'Learners work with the council\'s school-gathered survey of local Irish placenames. They start with whether the data may be used at all, since no licence is declared, then handle the two published versions, which hold 407 and 503 rows.' },
      { q: 'Why does cleaning text matter so much?', a: 'Because fifty of the townland values contain invisible characters. Counting the raw values gives 227 distinct townlands; counting them properly gives 216. Nothing on screen shows the difference.' },
      { q: 'Do you publish the survey data?', a: 'No. There is no declared licence, and one published version contains an editor\'s personal email address, so our students work with counts, structure and their own cleaned copies instead of republishing anything.' },
      { q: 'Why do Waterford addresses start with X91?', a: 'X91 is the routing key for the Waterford post town, and it appears in the published addresses of City Hall on The Mall, Plunkett Station, Bausch and Lomb on the Cork Road and Sanofi on the Old Kilmeaden Road.' },
      { q: 'What hours suit Waterford learners?', a: 'Evenings mostly, with weekend mornings also popular. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the hour is fixed in the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Waterford?', a: 'No, and none is claimed. All teaching happens live online, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the phone number on this page is an Indian one.', boiler: true },
      { q: 'What do Waterford coding classes cost?', a: 'The first lesson is free. After it, a group place costs USD 100 a month, which covers two live lessons a week and roughly eight a month with five to ten learners, while private tuition is USD 150 a month on the same rhythm. Course, format and hour are agreed before any payment.', boiler: true },
      { q: 'How many learners in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where no suitable group runs at a workable hour, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The rest of the country',
    html: 'Each of the other cities has its own page: <a class="cg-inline-link" href="/best-coding-class-in-galway">Galway</a>, <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a>, <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> and <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. For choosing between online schools, see <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>; for models and data, <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-ireland">AI and machine learning classes in Ireland</a>. Everything is gathered on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Waterford and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-galway', label: 'Galway' },
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-wfd .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 3.1vw, 2.8rem); }
.cg-root.cg-wfd .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-wfd .cg-capsule { border-left: 8px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-wfd .cg-eyebrow { letter-spacing: 0.22em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wfd .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.011em; }
.cg-root.cg-wfd .cg-grid-3 { gap: clamp(1.15rem, 2.7vw, 2.15rem); }
.cg-root.cg-wfd .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-wfd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wfd .cg-table th:first-child { letter-spacing: 0.01em; }
.cg-root.cg-wfd .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-wfd .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Waterford, Census 2022 (CSO): city and suburbs 60,079, labelled by the CSO as spanning Counties Waterford and Kilkenny, with 54,313 of those residents in Waterford City and County Council and 5,766 in Kilkenny County Council; 29,525 male and 30,554 female; area 50.4 sq km, density 1,191.7 per sq km, average age 38.7, 18.9 percent aged under 15. Waterford City and County Council area 127,363, up 10 percent or 11,187 since 2016, and there is no separate city-only council. Three local electoral areas cover the city: Waterford City South 26,011, Tramore and Waterford City West 24,803, Waterford City East 24,397. The densest electoral division is The Glen at 11,099.4 per sq km with 1,068 residents. City and suburbs work: 27,704 workers, 56 percent of them resident in the city and suburbs, with Tramore the largest commuter town at nearly 2,000 workers. County figures: non-Irish citizens 11 percent, UK 2,678, Polish 2,058, Indian 831, Croatian 590; 13,908 people worked from home at least one day a week, 25 percent against a national 32 percent; third-level qualifications rose from almost 27,200 in 2016 to just over 34,900, which is 41 percent of those aged 15 and over against a national 45 percent; the Waterford Gaeltacht grew from just over 1,800 to 2,063, up 274 or 14 percent, the fastest growth of any Gaeltacht area; 1,252 people travelled to work by bus against 73 by train, and 2,278 secondary students by bus against 8 by train. Gov.ie, 4 January 2018: Mount Sion CBS, Barrack Street was the only Waterford school in the first-phase Leaving Certificate Computer Science list. Addresses: City Hall, The Mall X91 PK15; Plunkett Station X91 A2PV; Bausch and Lomb, Cork Road Industrial Estate X91 V383; Sanofi, Old Kilmeaden Road X91 TP27. South East Technological University: established 1 May 2022 as Ireland\'s fifth technological university from Waterford Institute of Technology and IT Carlow, 18,500 students across Waterford, Carlow, Wexford and Wicklow, with Cork Road and College Street campuses in Waterford. Bausch and Lomb: more than 1,500 staff as of July 2021, the Biotrue lens developed in Waterford, and forty years on the site. Sanofi: manufacturing site at the IDA Industrial Park, Old Kilmeaden Road. Plunkett Station: Dublin Heuston services and a Waterford to Limerick Junction line through Clonmel, with a car park normally full from early morning Tuesday to Thursday. Waterford Greenway: opened 25 March 2017 on the fiftieth anniversary of the last passenger train between Dungarvan and Waterford City, and the first Irish greenway to receive a Green Flag Award, in 2020; the council describes Waterford as Ireland\'s Oldest City.',
    localProject: 'A dataset with no licence, and text that lies. Waterford City and County Council publishes a school-gathered Placenames Survey as two ArcGIS layers: one of 407 rows and one of 503, with fields for the Irish name, English name, feature type, meaning, townland, source and school. Measured: all 407 rows of the smaller layer appear in the larger, 96 rows appear only in the larger, and every one of those 96 carries the same authorisation value, so the answer to how many names were collected depends on which layer is loaded. Fifty townland values contain zero-width or non-breaking characters, so 227 distinct raw townland strings collapse to 216 once those are stripped and spacing is normalised, and eleven places would otherwise be double counted; eleven Irish names carry leading or trailing spaces. Feature types are bilingual coded tokens, with 40.5 percent of rows coded as Other, and the free-text Other field spells one category five different ways. School labels are truncated at 31 characters and split by curly against straight apostrophes, one school appearing 26 times under one form and once under the other. 18 rows have no English name, 40 no meaning and 123 no source. Critically, NO licence is declared on either layer, and the larger layer records an editor\'s personal email address on every row, so the page reports counts and structure only and reproduces no row content.',
    requiredMentions: [
      '60,079',
      '127,363',
      '54,313',
      '5,766',
      '1,191.7',
      '26,011',
      '27,704',
      '13,908',
      '2,063',
      '407',
      '503',
      '227',
      'X91 PK15',
      'Mount Sion CBS'
    ],
    sources: [
      { claim: 'CSO tables F1013 and F1015: Waterford city and suburbs, Counties Waterford and Kilkenny, 60,079 people (29,525 male, 30,554 female), area 50.4 sq km, density 1,191.7, average age 38.7, 18.9% aged under 15.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'CSO table F1010: of the built-up city, 54,313 residents are in Waterford City and County Council and 5,766 in Kilkenny County Council; the council area totals 127,363.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'CSO table F1016: Waterford City South 26,011, Tramore-Waterford City West 24,803, Waterford City East 24,397.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO table F1011: The Glen is the densest Waterford electoral division at 11,099.4 persons per sq km with 1,068 residents.', url: 'https://data.cso.ie/table/F1011' },
      { claim: 'CSO summary results, Waterford: "the population of Waterford grew by 10% to 127,363, which means the number of people in the county rose by 11,187"; 13,908 people worked from home at least one day a week, 25% against a national 32%.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultswaterford/' },
      { claim: 'CSO Profile 7, Waterford: "Waterford city and suburbs had 27,704 workers, of whom 56% lived in the city and suburbs. The largest commuter town was Tramore"; 1,252 travelling by bus against 73 by train; 2,278 students by bus and 8 by train.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingwaterford/' },
      { claim: 'CSO Profile 5, Waterford: non-Irish citizens 11% of the county, with UK 2,678, Polish 2,058, Indian 831 and Croatian 590.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionwaterford' },
      { claim: 'CSO Profile 8, Waterford: third-level qualifications 41% of those aged 15 and over against a national 45%; the Waterford Gaeltacht rose from just over 1,800 to 2,063, an increase of 274 or 14%, the highest rate of growth in Gaeltacht areas.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationwaterford' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list contains "Mount Sion CBS / Barrack Street, Waterford".', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Higher Education Authority: "South East Technological University is Ireland\'s fifth technological university following its establishment on 1 May 2022", with 18,500 students across Waterford, Carlow, Wexford and Wicklow.', url: 'https://hea.ie/higher-education-institutions/south-east-technological-university/' },
      { claim: 'Department of Enterprise, July 2021: "The Waterford site currently employs more than 1,500 people"; "The Biotrue lens was developed by the team in Waterford".', url: 'https://enterprise.gov.ie/en/news-and-events/department-news/2021/july/20210721.html' },
      { claim: 'Waterford City and County Council: City Hall, The Mall, Waterford X91 PK15; and the Waterford Greenway "was officially opened on March 25th 2017 ... on the 50th anniversary of the last passenger train journey between Dungarvan and Waterford City", the first Irish greenway to receive a Green Flag Award, in 2020.', url: 'https://waterfordcouncil.ie/waterford-greenway-celebrates-fifth-birthday/' },
      { claim: 'Iarnród Éireann, Waterford Plunkett: eircode X91 A2PV, Dublin Heuston and Limerick Junction services, and a car park "normally full from early in the morning on Tuesdays to Thursdays".', url: 'https://www.irishrail.ie/en-ie/station/waterford-plunkett' },
      { claim: 'Waterford City and County Council Placenames Survey, published as two public ArcGIS feature layers with 407 and 503 rows and no declared licence.', url: 'https://share-open-data-waterfordcouncil.hub.arcgis.com/' }
    ],
    rejectedClaims: [
      'Any claim that the placenames survey is openly licensed: no licence is declared on either layer, so the page says exactly that.',
      'Reproducing row content from the survey, including placenames: the larger layer carries an editor\'s personal email address, so counts and structure only are used.',
      'A current Bausch and Lomb headcount: the 1,500 figure is from July 2021 and is dated here.',
      'A Sanofi Waterford headcount: none was verified.',
      'Linking Mount Sion CBS to the Mount Sion electoral division: not checked.',
      'A visitor figure for the Waterford Greenway: the published number comes from a 2022 post and is not treated as current.',
      'Summing electoral divisions labelled Waterford to reach the council total: the sum falls short, so no such claim is made.',
      'Anything owned by the Cork, Limerick, Galway or Dublin pages.'
    ]
  }
};
