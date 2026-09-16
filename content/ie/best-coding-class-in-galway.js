'use strict';
// Galway (cg- city page, Ireland cluster, Phase 3). Spine: the city's car park
// file, seventeen rows long, and the four separate ways it can mislead you.
// GEOGRAPHY: Galway City Council (84,414) and Galway County Council (193,323)
// are separate bodies, and the CSO's Galway statements split city from county,
// so city-level figures here really are city figures. The built-up city and
// suburbs is 85,910, which is 1,496 larger than the council area. Facts read at
// primary sources on 16 September 2026: CSO tables F1015, SAP2022T1T1ACTY and
// URLIA43, the Galway summary and Profile 5, 7 and 8 statements, gov.ie's
// January 2018 LCCS list (the only County Galway school was in Tuam and none
// was in the city), universityofgalway.ie, atu.ie, medtronic.com, irishrail.ie,
// galwaycity.ie and galwaycitymuseum.ie. Boston Scientific's Ballybrit
// headcount is a July 2011 statement and is date-stamped as such. Dataset
// measured by us: Galway City Council car parks, CC BY 4.0, 17 rows and 12
// columns; three rows store the space count as a single space character in a
// text column, so a plain integer conversion raises an error while pandas
// silently concatenates the strings instead of summing them; the clean total is
// 3,718 spaces, of which multistorey car parks hold 2,748; Eyre Square Centre
// appears twice with 452 and 480 spaces, so deduplicating by name loses one;
// and the X column holds longitude in some files on the same portal and metres
// in others. The portal's 2026 metadata date is a harvest date, while the layer
// itself was last edited in 2021. Cork owns its footfall counters, Limerick its
// bridge counter, Dublin its bikes.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'city', tag: 'GALWAY', blurb: 'The walking city, with a project on a seventeen-row file that can still be got wrong four ways.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-galway',
  code: 'gwy',
  accent: '#004168',
  accentRationale: 'Galway: a deep Atlantic blue from the solver, clear of both Irish greens and of every other Ireland page',
  pageType: 'city',
  place: {
    name: 'Galway',
    eyebrow: 'Galway, Connacht',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Galway' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Galway, Ireland',
  title: 'Best Coding Classes in Galway | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Galway learners, city and Gaeltacht, ages 6 to 67, at a fixed weekly hour. First lesson free.',
  ogDescription: 'Coding and AI classes for Galway, taught around a seventeen-row city file that four different mistakes can turn into nonsense.',
  twitterDescription: 'Galway coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Galway Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Galway, taught live in English.'
  },

  h1: 'Coding classes in Galway',
  capsuleQ: 'What are the best coding classes in Galway?',
  capsule: 'Galway City Council covers 84,414 people, while the built-up city and suburbs reaches 85,910, spilling 1,496 past the council boundary. It is the most walkable city in the country after one other: 16% of city commuters walk to work, students walk to college at a rate of 45%, and the average city journey takes 23 minutes. More than half its adults, 53%, hold a third-level qualification against a national 45%, and 17,496 people live in the Galway City Gaeltacht. A live online class fits a place like this: no parking, no journey, and a teacher at the same hour every week for ages 6 to 67, in groups of five to ten or one to one. The first lesson is free, and a place afterwards is USD 100 a month in a group or USD 150 with a teacher to yourself.',
  lead: 'Galway City Council publishes a file listing the city\'s car parks. It has seventeen rows. You could read the whole thing on a phone screen. And it can still be got wrong four separate ways, each of them the kind of mistake that quietly survives into a report. Three of the rows record their number of spaces as a single space character rather than a number, so a straightforward conversion crashes, and a popular data library, asked to add the column up, silently glues the values together into a piece of nonsense instead of refusing. One car park name appears twice for two genuinely different locations, so tidying the duplicates away removes hundreds of real spaces. And a column called X holds longitude in this file and metres in a sibling file on the same portal, which will place your map several hundred kilometres out to sea. A learner who meets all four in one afternoon, on a file small enough to check by hand, learns something they will use for the rest of their working life.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Galway.',

  picks: {
    eyebrow: 'Course picks for Galway',
    h2: 'Four courses for a walking city',
    intro: 'Chosen by what a learner wants to build rather than by school year alone. Each starts with a free lesson taught live by the teacher who would go on to teach the course.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'First programs in blocks, where a list of places has to be counted, sorted and kept tidy enough for a game to use.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through the secondary years, with the city\'s own open files as the practice ground rather than invented examples.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Models trained on data the student has cleaned themselves, which is the only way the cleaning ever gets taken seriously.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults working with spreadsheets and portals: types, duplicates, units and the checks that catch all three.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Galway today',
      h2: 'A city that walks, studies and speaks Irish',
      intro: 'Galway is one of the few Irish cities whose council and county publish separately, so the figures below really do describe the city.',
      body: [
        { kind: 'table', caption: 'Galway in Census 2022, Central Statistics Office', head: ['Measure', 'Figure', 'Which Galway'], rows: [
          ['Galway City Council', '84,414', 'The city council area'],
          ['Galway city and suburbs', '85,910, or 1,496 more than the council area', 'The built-up city, which spills past the boundary'],
          ['Average age, built-up city', '37.4', 'With 15.5% aged under 15'],
          ['Third-level qualifications', 'Almost 28,500 people, a rate of 53% against 45% nationally', 'City area'],
          ['Walked to work', '16% of city commuters, the second highest rate in the country', 'City area'],
          ['Living in the Galway City Gaeltacht', '17,496', 'City Gaeltacht area']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Short journeys', p: 'City commuters had the shortest average journey in the country at 23 minutes, only 4% travelled for an hour or more, and Galway students were the likeliest in Ireland to walk to college, at 45%, with an average commute of 20.9 minutes.' },
          { h3: 'Who lives here', p: 'In Galway City the largest non-Irish groups were Polish citizens at 2,597, then Indian at 1,392 and UK at 1,137. In the year before the census, 5,470 people moved into the city, 2,583 of them from outside the State.' },
          { h3: 'Irish, spoken and not', p: 'Of 82,073 city residents aged three and over, 32,708 could speak Irish, 45% against 43% in 2016. Yet the City Gaeltacht has the lowest proportion of daily Irish speakers of any Gaeltacht area, at 4%.' }
        ] },
        { kind: 'p', text: 'Work in the city is more industrial than its student reputation suggests. Over 39,000 people work in Galway City, with manufacturing the largest sector at almost 5,900, then health and social work at over 5,200 and retail at almost 4,400. Unemployment in the city stood at 9%, against 7% in the county. Over 12,300 city workers did some work from home, just over 4,000 of them five days a week, while almost 21,500 never did.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science and Galway schools',
      h2: 'Nothing in the city, one school in Tuam',
      intro: 'When Leaving Certificate Computer Science began in September 2018, the named first-phase schools included exactly one in County Galway.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The county\'s single school', p: 'St Brigids Mercy Secondary School in Tuam was the only County Galway school on the January 2018 list. No school in Galway city was among the first forty, and Tuam, with 9,647 people, is the largest town in the county.' },
          { h3: 'What families did', p: 'Students in the city who wanted programming in those years found it in clubs, at home, or not at all. We found no current official list showing where the subject is taught now, so we make no claim about today.' },
          { h3: 'What a class adds', p: 'We do not teach the Leaving Certificate subject or prepare its examination. We teach programming, data work and problem solving, at a weekly hour that fits around whatever the school offers.' }
        ] },
        { kind: 'p', text: 'The city itself is thick with computing. The University of Galway began in 1845 as Queen\'s College Galway and opened four years later to a first intake of 68 students; today it has over 19,000. Atlantic Technological University\'s Dublin Road campus is recognisable by three sail-shaped copper panels, which house its Library and IT Centre, and it teaches computing, engineering, science and business. Medtronic gives its Irish headquarters and principal executive offices as Parkmore Business Park in Galway, says it has had roots in Ireland since 1981, and reports more than 4,000 employees across five sites in Galway, Dublin and Athlone. Boston Scientific has a plant at Ballybrit, which the company described in July 2011 as employing more than 2,500 people and being its largest manufacturing centre in the world; we could find no newer published figure, so that one is dated here rather than presented as current.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Seventeen rows, four ways to be wrong',
      intro: 'Galway City Council publishes its car parks as open data under a Creative Commons Attribution licence. It is the smallest dataset in this cluster and, row for row, the most instructive.',
      body: [
        { kind: 'table', caption: 'What we measured in the published file, read 16 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Rows and columns', '17 rows, 12 columns'],
          ['Rows whose space count is stored as a single space character', '3'],
          ['Clean total once those are excluded', '3,718 spaces'],
          ['Held in multistorey car parks', '2,748, or 73.9% of the total'],
          ['Car parks sharing the name Eyre Square Centre', '2, holding 452 and 480 spaces at different coordinates'],
          ['Date the portal reports for the file, against the date the layer was last edited', 'September 2026 as a harvest date, against a last edit in September 2021']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trap one: a blank that is not blank', p: 'Three rows hold a single space instead of a number. A check for an empty value passes straight over it, because a space is not empty. Converting it to a number raises an error, which is the honest outcome.' },
          { h3: 'Trap two: a library that does not complain', p: 'Ask a popular data library to add that column and it will not fail. The column is text, so it concatenates the values and returns a long meaningless string. Asking for the average is the error that saves you; asking for the sum is the one that ruins the report.' },
          { h3: 'Trap three: the same name twice', p: 'Eyre Square Centre appears as two rows, with 452 and 480 spaces at different coordinates, and Salthill appears twice as well. Deduplicating on the name drops real capacity; the identifier column is the one to trust.' }
        ] },
        { kind: 'callout', h3: 'Trap four: a column called X that changes meaning', p: 'In this file, X holds longitude, a number around minus nine. In the parking meters file on the same portal, X holds around 528,000, because it is a distance in metres on the Irish Transverse Mercator grid. In the attractions file it is around 128,000, on the older Irish Grid. Three files, one column name, three coordinate systems. Joining or plotting them together without checking puts your points somewhere in the Atlantic, hundreds of kilometres from Galway, and the map will look perfectly confident about it. This is the single most common way a beginner\'s map goes wrong, and it takes a file this small to see it clearly.' },
        { kind: 'p', text: 'There is a fifth lesson in the metadata. The national portal shows the file as modified in September 2026, but the underlying layer records its last edit in September 2021. The recent date is when the portal last harvested the record, not when anyone touched the data. A student who cites the newer date in a project has said something untrue without meaning to, which is why we teach them to check both.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Small file, full discipline',
      h2: 'Five checks that fit on one screen',
      intro: 'Every one of these takes seconds on a seventeen-row file and saves hours on a seventeen-thousand-row one.',
      body: [
        { kind: 'table', caption: 'Checks to run before trusting any table', head: ['Check', 'What you do', 'What it catches'], rows: [
          ['Look at the types', 'Ask what type each column is before any arithmetic', 'Numbers stored as text'],
          ['Look at the odd values', 'Print the values that are not numbers, including whitespace', 'Blanks that are not empty'],
          ['Count by identifier', 'Group by the identifier column, not by the name', 'Two real places sharing one name'],
          ['Check the coordinate system', 'Compare the magnitude of coordinates against what the system expects', 'Maps that land in the sea'],
          ['Separate harvest from edit', 'Distinguish when a portal copied a file from when the data changed', 'Stale data described as current']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A game that reads a list of places and breaks amusingly when one of them has a blank where a number should be.' },
          { h3: 'Teenagers', p: 'The real file in Python: find all four traps, fix them, map the car parks correctly and write the fixes up as a short method note.' },
          { h3: 'Adults', p: 'The same discipline on work data, where a type error in a spreadsheet column is the commonest cause of a wrong total.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of Galway City Council, the University of Galway, Atlantic Technological University, Medtronic, Boston Scientific, Iarnród Éireann and every school named here; no connection is implied by naming them. The census figures are the Central Statistics Office\'s for 2022, and the file measurements are our own from the council\'s published data.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'H91, the Spanish Arch and a wood being replanted',
      intro: 'Galway is small enough to cross on foot and busy enough to reward knowing it. None of which a live class requires.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One routing key', p: 'City Hall on College Road is H91 X4K8, Ceannt Station is H91 T9CE, Atlantic Technological University on the Dublin Road is H91 T8NW, the University of Galway is H91 TK33 and Medtronic at Parkmore West is H91 4K49.' },
          { h3: 'The city museum', p: 'Galway City Museum, beside the Spanish Arch, opened in April 2007 as a Galway City Council initiative, in a building designed by the Office of Public Works, replacing an earlier museum in Comerford House.' },
          { h3: 'Merlin Woods', p: 'The council is replanting Merlin Woods as native woodland after the damage done by Storm Éowyn in January 2025, which is the kind of long project a city dataset will record for years.' }
        ] },
        { kind: 'spec', title: 'Ceannt Station, for the days you do travel', p: 'The station offers sheltered bike parking and ten rentable bicycle lockers, its car parking is privately operated, and Eyre Square outside runs a one-way system. Everything a family needs for a day out, and nothing they need for a lesson.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a tidy list to a table you have tested',
    intro: 'These bands describe the usual route. Where a learner actually starts is decided by what they do in the free lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Lists and order', p: 'Programs that hold a list of things and keep it correct while a game changes it.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Types and values', p: 'The difference between a number and text that looks like one, met in real files rather than in theory.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Cleaning and mapping', p: 'Finding duplicates, fixing types, checking coordinate systems, then building something on the cleaned data.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Trustworthy pipelines', p: 'Checks written once and run every time, so a bad column is caught before anybody sees a chart.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will total this column happily. Why should a Galway teenager check it by hand?',
    intro: 'Because a column of text that looks numeric is the one thing a confident tool handles worst.',
    p1: 'Give an AI assistant the car park file and ask how many spaces the city has. It will write a line of code that adds the column up. Depending on the library and the phrasing, it will either raise an error, which is fine, or return a long string of digits glued together, which is not, because that answer looks like a number and is not one. The three rows holding a single space instead of a count are the cause, and nothing in the file or the assistant\'s answer mentions them.',
    p2: 'The habit that protects you is small and old-fashioned: look at the data before you compute on it, and check any total you cannot sanity-test against something you know. Seventeen car parks and 3,718 spaces is checkable by eye. A file with two million rows is not, which is why the habit has to be built on the small one first.',
    closer: 'So a Galway child learning to code in 2026 is not learning it because the city has medical device plants, though it has. They are learning the judgement to ask whether the number in front of them means what it appears to mean, which is the part of this work that is not being automated.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Knocknacarra, Renmore or out towards Barna',
    intro: 'The city is compact but its families are spread wide, and a live online lesson ignores the distance entirely.',
    cells: [
      { h3: 'The commute is a chair', p: 'A learner in Salthill and one in Oranmore join the same group at the same second, and neither looks for a parking space to do it.' },
      { h3: 'Irish school stages by name', p: 'Teachers speak in First Year, Junior Cycle, Transition Year and sixth year, which keeps conversations with parents straightforward.' },
      { h3: 'The trial lesson is real', p: 'It is a proper lesson on a real task, and it ends in a recommendation about level, course and hour. No card details are requested.' },
      { h3: 'Grouped by ability', p: 'Five to ten learners who can move at one pace, drawn from Galway and several other countries, which is what allows a workable hour at every level.' },
      { h3: 'A fixed weekly hour', p: 'Usually two lessons a week, about eight a month, with pauses for mid-terms, exams and holidays agreed with the family in advance.' },
      { h3: 'Teachers in India', p: 'Their clock stays put while Ireland\'s moves, leaving them four and a half hours ahead in summer and five and a half in winter; Galway afternoons and evenings both sit comfortably inside their day.' }
    ],
    spec: { title: 'A student city, and a working one', p: 'With 53% of city adults holding a third-level qualification and manufacturing the largest employer, Galway families ask for both ends of our range: primary-school block coding in the afternoon, and adult data courses after work. Both run from the same timetable.' }
  },

  fees: {
    h2: 'What classes cost in Galway',
    intro: 'Three figures, stated once, with nothing added afterwards.',
    first: 'A full lesson, free, ending with an honest placement and a recommended course.',
    group: 'A month of teaching, usually eight lessons, shared with five to ten learners of similar ability.',
    private: 'The same month and the same number of lessons, with the teacher working with one learner only.',
    closer: 'Fees are charged in US dollars on the one rate used outside India, so there is no euro price list and Knocknacarra pays what Renmore pays. Nothing is charged until the free lesson has settled a course and a weekly hour, and the pricing page sets out pauses, missed lessons and changes of format.'
  },

  reviewsH2: 'Six Google reviews from our families, printed as written',

  book: {
    h2: 'Tell us about the learner',
    intro: 'The first task is chosen to fit: a list-keeping game for a younger child, a first script that opens a file, or a hunt for the four traps in a real Galway dataset.',
    success: 'Thanks. We will be in touch shortly about your Galway class.'
  },

  faq: {
    h2: 'Galway coding class questions',
    intro: 'The city, its data and the way our classes run.',
    items: [
      { q: 'How many people live in Galway?', a: 'Census 2022 counted 84,414 in the Galway City Council area and 85,910 in the built-up city and suburbs, which reaches 1,496 people past the council boundary. Galway County Council covers a further 193,323.' },
      { q: 'Did Galway schools offer Leaving Certificate Computer Science from the start?', a: 'No city school did. St Brigids Mercy Secondary School in Tuam was the only County Galway school in the January 2018 first phase. What the position is today we cannot say, as no current official list is published.' },
      { q: 'What is the Galway car parks project?', a: 'Learners take the council\'s seventeen-row car park file and find four separate traps in it: space counts stored as blanks, a library that concatenates instead of summing, one name used for two car parks, and a coordinate column whose units differ between files.' },
      { q: 'How many parking spaces does the file actually record?', a: '3,718 across the fourteen car parks that carry a number, with 2,748 of those in multistorey car parks. Three rows record no usable figure at all.' },
      { q: 'Why do Galway addresses start with H91?', a: 'H91 is the routing key for the Galway post town, and it appears in the published addresses of City Hall, Ceannt Station, the University of Galway, Atlantic Technological University and Medtronic at Parkmore alike.' },
      { q: 'Are lessons available through Irish?', a: 'Teaching is in English. Many of our Galway learners come from Irish-speaking households or Gaeltacht schools, and programming keywords are in English regardless of the language a learner is taught in at school.' },
      { q: 'What hours suit Galway learners?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed during the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Galway?', a: 'No. Teaching is live and online only and we hold no premises in Ireland, which we never suggest otherwise. A learner needs a laptop or desktop, sound that works and a reliable connection. The number on this page is an Indian one.', boiler: true },
      { q: 'What do Galway coding classes cost?', a: 'Nothing for the first lesson. After that a shared place is USD 100 a month, covering two live lessons a week and about eight a month with five to ten learners, and private tuition is USD 150 a month on the same schedule. Course, format and hour are agreed before any payment.', boiler: true },
      { q: 'How big is a group?', a: 'Five to ten learners, matched on ability, pace and ambition rather than on age or address. If nothing suitable runs at a workable hour, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The other cities, and the national page',
    html: 'Pages of their own exist for <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a>, <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> and <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. For working out what to look for in an online school, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and for models and data there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-ireland">AI and machine learning classes in Ireland</a>. The <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a> links the lot.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Galway and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-gwy .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 2.9vw, 2.55rem); }
.cg-root.cg-gwy .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.04; }
.cg-root.cg-gwy .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-gwy .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gwy .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.014em; }
.cg-root.cg-gwy .cg-grid-3 { gap: clamp(0.95rem, 2.3vw, 1.85rem); }
.cg-root.cg-gwy .cg-table caption { letter-spacing: 0.05em; font-weight: 700; }
.cg-root.cg-gwy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gwy .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-gwy .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-gwy .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Galway, Census 2022 (CSO): Galway City Council 84,414 and Galway County Council 193,323 (SAP2022T1T1ACTY); Galway city and suburbs 85,910, which is 1,496 more than the council area, average age 37.4, 15.5 percent aged under 15 (F1015). City-level figures, which the CSO publishes separately from the county: non-Irish citizens led by Polish 2,597, then Indian 1,392 and UK 1,137; 5,470 people moved into the city in the year before the census, 2,887 from within Ireland and 2,583 from outside the State; over 39,000 people at work in the city, manufacturing largest at almost 5,900, health and social work over 5,200, retail almost 4,400, unemployment 9 percent against 7 percent in the county; over 12,300 worked from home at least some of the time, just over 4,000 for five days, while almost 21,500 never did; 16 percent of city commuters walked to work, the second highest rate in the country, with the shortest average journey at 23 minutes and only 4 percent commuting an hour or more; city students were the likeliest in Ireland to walk to college at 45 percent, with an average commute of 20.9 minutes; almost 28,500 people held a third-level qualification, a rate of 53 percent against a national 45 percent, and the average age at which full-time education ceased rose to 22.6; of 82,073 residents aged three and over, 32,708 could speak Irish, 45 percent against 43 percent in 2016; the Galway City Gaeltacht holds 17,496 people and has the lowest proportion of daily Irish speakers of any Gaeltacht area at 4 percent. CSO table URLIA43 gives 46,363 people working in Galway city and suburbs, with 10.9 percent from satellite urban towns. Gov.ie, 4 January 2018: St Brigids Mercy Secondary School, Tuam was the only County Galway school in the first-phase Leaving Certificate Computer Science list, and no Galway city school appeared; Tuam is the county\'s largest town at 9,647. Addresses: City Hall, College Road H91 X4K8; Ceannt Station H91 T9CE; ATU Dublin Road H91 T8NW; University of Galway H91 TK33; Medtronic Parkmore Business Park West H91 4K49. University of Galway founded 1845 as Queen\'s College Galway, opened four years later to 68 students, now over 19,000. ATU Galway City: three sail-shaped copper panels housing the Library and IT Centre. Medtronic: Irish headquarters and principal executive offices at Parkmore, roots in Ireland since 1981, more than 4,000 employees across five sites in Galway, Dublin and Athlone. Boston Scientific, Ballybrit: more than 2,500 employees and the company\'s largest manufacturing centre in the world, as stated in July 2011 and date-stamped as such. Galway City Museum opened April 2007 beside the Spanish Arch as a Galway City Council initiative, in a building designed by the Office of Public Works. The council is replanting Merlin Woods as native woodland after Storm Éowyn in January 2025. Ceannt Station: sheltered bike parking, ten rentable lockers, privately operated car park, one-way system in Eyre Square.',
    localProject: 'Four traps in seventeen rows. Galway City Council\'s car parking open data, licensed CC BY 4.0, holds 17 rows and 12 columns. Measured: three rows store the space count as the single character space in a string field, so a plain integer conversion raises ValueError while a truthiness check misses it entirely; pandas reads the column as text, reports no missing values, and its sum concatenates the strings instead of failing, while converting with errors coerced gives the correct 3,718 spaces, of which multistorey car parks hold 2,748, or 73.9 percent. Eyre Square Centre appears twice, as 452 spaces and 480 spaces at different coordinates, and Salthill appears twice as well, so deduplicating by name loses 12 to 13 percent of the capacity; the identifier column is the correct key. The column named X holds WGS84 longitude in the car parks and beaches files, Irish Transverse Mercator eastings around 528,000 in the parking meters file and older Irish Grid eastings around 128,000 in the attractions file, so joining on X or plotting it directly displaces points by hundreds of kilometres. Finally, the national portal reports the record as modified in September 2026 while the underlying layer records its last edit as September 2021, so the recent date is a harvest date rather than a data date.',
    requiredMentions: [
      '84,414',
      '85,910',
      '1,496',
      '2,597',
      '1,392',
      '5,470',
      '17,496',
      '20.9 minutes',
      '3,718',
      '2,748',
      '9,647',
      'H91 X4K8',
      'Parkmore Business Park',
      'Merlin Woods'
    ],
    sources: [
      { claim: 'CSO table SAP2022T1T1ACTY: Galway City Council 84,414 and Galway County Council 193,323.', url: 'https://data.cso.ie/table/SAP2022T1T1ACTY' },
      { claim: 'CSO table F1015: Galway city and suburbs 85,910, average age 37.4, 15.5% aged under 15.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'CSO Profile 5, Galway: "Among the non-Irish residents in Galway City, the largest group were Polish citizens (2,597 people), followed by Indian (1,392) and the UK (1,137)"; 5,470 people had moved into the city in the previous year, 2,887 from within Ireland and 2,583 from outside the State.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligiongalway/' },
      { claim: 'CSO Profile 7, Galway: "In the city area, 16% of commuters walked to work, the second highest rate in the country"; city commuters had the shortest average journey at 23 minutes; "Galway City students were the most likely to walk to college, at 45%" with an average commute of 20.9 minutes; over 39,000 at work in the city, manufacturing almost 5,900, unemployment 9%.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutinggalway/' },
      { claim: 'CSO Profile 8, Galway: almost 28,500 people in the city area with a third-level qualification, a rate of 53% against a national 45%; 17,496 people in the Galway City Gaeltacht; the City Gaeltacht had the lowest proportion of daily Irish speakers at 4%; 32,708 of 82,073 residents aged three and over could speak Irish.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationgalway' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list contains "St Brigids Mercy Secondary School / Convent Of Mercy, Tuam, Co. Galway" and no Galway city school.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'University of Galway: "IT ALL BEGAN IN 1845 ... the University opened its doors four years later to the first cohort of just 68 students ... with a student population today of over 19,000."', url: 'https://www.universityofgalway.ie/about-us/' },
      { claim: 'Atlantic Technological University, Galway City: "three distinctive sail-shaped copper panels at the front of the main building ... housing the Library and IT Centre"; address Dublin Road, Galway City, H91 T8NW.', url: 'https://www.atu.ie/galway-city' },
      { claim: 'Medtronic: headquarters and principal executive offices in Parkmore Business Park, Galway; roots in Ireland since 1981; more than 4,000 people across five sites in Galway, Dublin and Athlone.', url: 'https://www.medtronic.com/en-ie/our-company/medtronic-ireland.html' },
      { claim: 'Boston Scientific newsroom, dated Galway, Ireland, 5 July 2011: "Boston Scientific employs more than 2,500 people at its facility in Ballybrit Business Park, Galway. It is the Company\'s largest manufacturing centre in the world".', url: 'https://news.bostonscientific.com/news-releases?item=59354' },
      { claim: 'Galway City Museum: the new museum "was officially opened in April 2007", designed by the Office of Public Works and a Galway City Council initiative, replacing the museum in Comerford House beside the Spanish Arch.', url: 'https://www.galwaycitymuseum.ie/about/' },
      { claim: 'Galway City Council: City Hall, College Road, Galway, H91 X4K8; and plans to replant Merlin Woods as native woodland after Storm Eowyn in January 2025.', url: 'https://www.galwaycity.ie/' },
      { claim: 'Iarnród Éireann, Galway Ceannt: eircode H91 T9CE; sheltered bike parking with ten rentable lockers; privately operated car parking; a one-way system in Eyre Square.', url: 'https://www.irishrail.ie/en-ie/station/galway-ceannt' },
      { claim: 'Galway City Council car parking open data, licensed under Creative Commons Attribution 4.0: 17 rows and 12 columns, with NO_SPACES held as a string field.', url: 'https://data.gov.ie/dataset/carparkingopendata3' }
    ],
    rejectedClaims: [
      'A current Boston Scientific headcount for Galway: the company\'s location pages return 404, so the 2011 statement is used and dated.',
      'A Medtronic eircode other than the one published on its own locations page.',
      'City-level population density or birthplace figures: the CSO tables that carry them are electoral division tables with no Galway city row.',
      'The portal\'s September 2026 date as a data date: it is a harvest date, and the layer was last edited in 2021.',
      'Any claim about which Galway schools teach Leaving Certificate Computer Science today: no current official list was found.',
      'Anything owned by the Cork, Limerick or Dublin pages, including their datasets and census figures.'
    ]
  }
};
