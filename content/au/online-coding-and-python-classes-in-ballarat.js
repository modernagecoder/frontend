'use strict';
// Ballarat (cg- regional city page, Australia cluster Phase 7, row 144). Shaped page: online coding and Python,
// leading with teenagers and adults.
// Spine: what can you honestly say about data stored as ranges? Data: City of Ballarat, "Ballarat Trees"
// (data.gov.au package ballarattrees, Creative Commons Attribution 3.0 Australia, metadata modified 30 September
// 2026), CSV downloaded 7 October 2026: 75,347 rows, 2,025 distinct location values, 352 distinct genus values
// (35,487 rows 'Not Assessed'). Size fields are stored as text ranges. Height: 37,230 assessed, 38,117 'Not
// Assessed' (50.6%); classes <3 12,255, 3-6 9,672, 6-10 6,178, 10-15 4,883, 15-25 3,942, 25-40 300; median class
// 3-6; mean between 4.88 and 9.14 m (lower and upper ends), 7.01 m from midpoints. Trunk diameter (dbh): 37,470
// assessed, 37,877 'Not Assessed' (50.3%); classes <15cm 17,045, 16cm - 30cm 6,989, 31cm - 60cm 6,559, 61cm-90cm
// 3,660, > 90cm 3,217; gaps between 15 and 16, 30 and 31, 60 and 61 cm; open top class, so the mean has a lower
// bound (22.10 cm) and no upper bound. Crown: 62,651 assessed, 12,696 'Not Assessed' (16.9%); median class 3-6m;
// mean between 3.04 and 6.59 m. Height and trunk both 'Not Assessed' 35,558; height only 2,559; trunk only 2,319.
// All counts ours (scratchpad au/r2/bal_bins.py). Lesson family: binned range strings parsed into intervals,
// bounds rather than midpoints; screened 0 location-page hits on 7 October 2026; claimed by AU-R2.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Significant Urban Area 2003 Ballarat:
// 111,973 people; median age 38; 29,291 families; 49,430 private dwellings; 2.4 people per household; separate
// house 37,386 (85.0%; Victoria 73.4%; Australia 72.3%); flat or apartment 1,121 (2.5%; Victoria 12.1%;
// Australia 14.2%); Professionals 11,915 (22.8%; Victoria 25.0%; Australia 24.0%); Bachelor Degree level and above
// 21,174 (23.3%; Victoria 29.2%; Australia 26.3%); aged 15 to 19 6,815 (6.1%; Victoria 5.6%; Australia 5.7%).
// vic.gov.au 2027 Victorian school term dates: Term 1 Wednesday 27 January (government school students start
// Thursday 28 January) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to
// Friday 17 September; Term 4 Monday 4 October to Friday 17 December. IANA tz: Australia/Melbourne, daylight
// saving from the first Sunday in October to the first Sunday in April. Excluded: income, rent, mortgage,
// ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BALLARAT', label: 'Ballarat', blurb: 'Ballarat, the council\'s register of 75,347 trees, and turning text ranges into numbers you can defend.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-ballarat',
  code: 'blrt',
  accent: '#603E10',
  accentRationale: 'Ballarat: a dark goldfields brown (HSV saturation 0.83, value 0.38, hue 35), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, and 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Ballarat',
    eyebrow: 'Ballarat, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Ballarat, Victoria',
  title: 'Online Coding and Python Classes in Ballarat | Live Teacher',
  description: 'Live online Python and data classes for Ballarat teenagers and adults, built on real council data and taught one to one or in small groups. First lesson is free.',
  ogDescription: 'Python classes for Ballarat teens and adults, with a project that parses the council\'s tree register and works out what range data can honestly tell you.',
  twitterDescription: 'Ballarat Python classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Python and Data Classes for Ballarat Learners',
    description: 'Level-matched online Python, data cleaning and analysis for teenagers and adults in Ballarat and the Central Highlands, taught live in English.'
  },

  h1: 'Online coding and Python classes in Ballarat',
  capsuleQ: 'What are the best online coding and Python classes in Ballarat?',
  capsule: 'Live Python lessons for Ballarat teenagers and adults, where a teacher works through real council data with you instead of toy examples. Ballarat\'s urban area held 111,973 people at the 2021 Census, a city of houses with 85.0% of occupied homes standing alone. Classes run online, privately or with a small group working at the same level, and you can try the first one without paying.',
  lead: 'The City of Ballarat keeps a register of 75,347 trees and publishes it as open data. Look at the columns for height, trunk width and crown spread and you will find no numbers at all, only text such as "3-6", "16cm - 30cm" and "> 90cm". A beginner tends to swap each range for its middle and carry on. Our Ballarat project asks a better question: what can you honestly conclude from a range? Learners write a Python function that turns every label into a lower and upper bound, and the answers change. The average tree height is not one number but anywhere from 4.88 to 9.14 metres, and the average trunk has no upper limit at all.',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Ballarat.',

  picks: {
    eyebrow: 'Course picks for Ballarat',
    h2: 'Python courses that suit a Ballarat learner',
    intro: 'These four line up with the tree-register project. The free trial lesson decides which fits, and booking it needs no card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for teenagers, from the first print statement to reading and cleaning real CSV files.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A thorough Python course for adults, from basics to functions, files, testing and larger programs.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Cleaning, checking and analysing public data with pandas and SQL, with the uncertainty kept in view.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Ages 13 to adult', note: 'Preparation for the Python Institute PCEP and PCAP exams, with every topic written as working code first.' }
    ]
  },

  sections: [
    {
      id: 'census', tint: '', eyebrow: 'Ballarat by the numbers',
      h2: 'A goldfields city where almost every home is a house',
      intro: 'Figures from the statistics bureau\'s 2021 QuickStats for the Ballarat Significant Urban Area, next to Victoria and Australia.',
      body: [
        { kind: 'table', caption: '2021 Census QuickStats: Ballarat urban area compared with Victoria and Australia', head: ['Measure', 'Ballarat', 'Victoria', 'Australia'], rows: [
          ['Residents', '111,973', 'n/a', 'n/a'],
          ['Median age', '38', 'n/a', 'n/a'],
          ['Families', '29,291', 'n/a', 'n/a'],
          ['Private dwellings', '49,430', 'n/a', 'n/a'],
          ['Separate houses, per cent of occupied homes', '85.0', '73.4', '72.3'],
          ['Flats or apartments, per cent of occupied homes', '2.5', '12.1', '14.2'],
          ['People aged 15 to 19', '6,815 (6.1%)', '5.6%', '5.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Detached living', p: 'Only 1,121 occupied homes in urban Ballarat were flats or apartments, 2.5%, against more than 12% across Victoria.' },
          { h3: 'Teenagers', p: 'The urban area counted 6,815 people aged 15 to 19, a slightly larger share than Victoria\'s or the nation\'s.' },
          { h3: 'Qualifications', p: '21,174 residents aged 15 and over held a bachelor degree or above, 23.3% against 29.2% for Victoria, and 11,915 worked as professionals.' }
        ] },
        { kind: 'p', text: 'Census tables come with a quirk worth knowing. To protect privacy, the bureau adjusts small counts by tiny random amounts, so the categories of a table need not add up exactly to its total. We print each figure as published and never invent a total by summing pieces.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What can a range like "3-6" honestly tell you?',
      intro: 'The City of Ballarat tree register stores sizes as text ranges. Parsing them into lower and upper bounds, rather than midpoints, changes what you are entitled to say.',
      body: [
        { kind: 'table', caption: 'Tree heights in the register, as published classes (our count, 7 October 2026)', head: ['Height label', 'Trees', 'Running share'], rows: [
          ['<3', '12,255', '32.9%'],
          ['3-6', '9,672', '58.9%'],
          ['6-10', '6,178', '75.5%'],
          ['10-15', '4,883', '88.6%'],
          ['15-25', '3,942', '99.2%'],
          ['25-40', '300', '100.0%']
        ] },
        { kind: 'table', mt: true, caption: 'What the ranges allow you to conclude (our calculation)', head: ['Field', 'Assessed trees', 'Middle tree falls in', 'Average size could be'], rows: [
          ['Height', '37,230', '3 to 6 metres', '4.88 to 9.14 metres'],
          ['Crown spread', '62,651', '3 to 6 metres', '3.04 to 6.59 metres'],
          ['Trunk diameter', '37,470', '16 to 30 cm', 'at least 22.10 cm, with no upper limit']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Parse', p: 'Write one function that reads "<3", "3-6", "16cm - 30cm" and "> 90cm" and returns a pair of numbers, with None standing for "no upper limit".' },
          { h3: '2. Bound', p: 'Average the lower ends and the upper ends separately. The true average sits somewhere between, and the gap is the honest uncertainty.' },
          { h3: '3. Inspect', p: 'Check the edges of every class. The trunk classes leave gaps: a 15.5 cm trunk fits no label at all.' }
        ] },
        { kind: 'callout', h3: 'Why the midpoint is a guess dressed as a fact', p: 'Replacing "3-6" with 4.5 assumes the trees in that class are spread evenly across it, which nobody measured. Take every midpoint and the average height comes out at 7.01 metres, a confident single figure. The ranges themselves only support 4.88 to 9.14 metres. For trunks the problem is worse: 3,217 trees sit in the open class "> 90cm", so no upper bound exists and any average you print is an invention.' },
        { kind: 'p', text: 'All counts and bounds here are ours, computed from the council file downloaded on 7 October 2026. About half the register is marked "Not Assessed" for height and for trunk diameter, so every statistic describes assessed trees only. Nothing on this page comments on the health or condition of any tree.' }
      ]
    },
    {
      id: 'python', tint: 'tint', eyebrow: 'The Python behind it',
      h2: 'Messy labels, one careful function',
      intro: 'The register uses several styles for the same idea. A good parser handles all of them and refuses what it does not understand.',
      body: [
        { kind: 'table', caption: 'Label styles in the Ballarat register and how the parser treats them', head: ['Label as stored', 'Style', 'Parsed as'], rows: [
          ['<3', 'Less than, no unit', '0 to 3'],
          ['3-6m', 'Range with a metre suffix', '3 to 6'],
          ['16cm - 30cm', 'Range with spaces and units on both ends', '16 to 30'],
          ['61cm-90cm', 'Range with units and no spaces', '61 to 90'],
          ['> 90cm', 'Greater than, open ended', '90 to no limit'],
          ['Not Assessed', 'A word in a numeric column', 'Missing, kept separate']
        ] },
        { kind: 'p', text: 'Missing values deserve their own table. 35,558 trees have neither height nor trunk recorded, 2,559 lack only height and 2,319 lack only trunk. A learner who silently drops "Not Assessed" rows changes the population being described; one who counts them first knows exactly whose trees the averages are about.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'String methods, functions and tests: write the parser, then try to break it with labels it should reject.' },
          { h3: 'University students', p: 'Interval arithmetic, missing-data patterns and pandas pipelines that keep the uncertainty attached to every result.' },
          { h3: 'Adults', p: 'Clean the spreadsheets your work produces, and report ranges where a single figure would mislead.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of the City of Ballarat, the Victorian Government and the statistics bureau, and claims no partnership with them. Census figures are the bureau\'s; the tree counts, classes and bounds come from our own Python code run on the council file.' }
      ]
    },
    {
      id: 'calendar', tint: '', eyebrow: 'Ballarat\'s school year',
      h2: 'Victorian terms and a clock that moves twice a year',
      intro: 'Two details from official calendars that decide when Ballarat learners can study.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '2027 begins in January', p: 'Victorian government school students start on Thursday 28 January 2027, and Term 1 finishes on Thursday 25 March.' },
          { h3: 'Four terms', p: 'Term 4 of 2027 runs from Monday 4 October to Friday 17 December, according to the state\'s published dates.' },
          { h3: 'Daylight saving', p: 'Victoria moves its clocks forward on the first Sunday of October and back on the first Sunday of April.' }
        ] },
        { kind: 'spec', title: 'A register is a living file', p: 'The tree register\'s metadata was last updated on 30 September 2026, so counts drift as trees are planted, assessed and removed. Recording the download date alongside every result lets anyone repeat the analysis and see what has changed.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first strings to trustworthy analysis',
    intro: 'Age bands are rough; the free lesson finds the right starting rung.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Text into numbers', p: 'Python strings, splitting and converting, practised on labels copied from the Ballarat register.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Functions and tests', p: 'Parsers with unit tests, error handling and summaries that report a range when a range is all you know.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Data with uncertainty', p: 'pandas, interval bounds and missing-data patterns on real public datasets.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] },
      { band: 'Adults', h3: 'Reliable automation', p: 'Python that cleans, checks and reports on work data, with results others can reproduce.', courses: ['python-ai-automation-masterclass-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will happily average those ranges. Why should a Ballarat learner know better?',
    intro: 'Because a generated analysis that turns "> 90cm" into 90 reports a tidy average that the data cannot support.',
    p1: 'Give an AI assistant the Ballarat tree file and ask for the average trunk width, and it will usually convert each label to a number and divide. The open class gets treated as exactly 90, the gaps between classes vanish, and the half of the register marked "Not Assessed" is quietly dropped. The result looks precise. It is a guess about trees nobody measured.',
    p2: 'We teach learners to see those choices. Someone who has written the range parser by hand knows to ask how open-ended classes were handled, whether missing rows were removed and what the answer would be at the lower and upper bounds. Asked of AI-written code, those three questions catch most of what goes wrong with summaries of real-world data.',
    closer: 'In 2026 any tool can produce a number; a Ballarat learner who knows when a range is all the data allows will produce the one worth believing.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Sebastopol, Wendouree or Lake Gardens, one live classroom',
    intro: 'Ballarat\'s suburbs ring the lake and the old diggings, and a video lesson reaches all of them equally.',
    cells: [
      { h3: 'Across the Central Highlands', p: 'Learners in Alfredton and in Mount Clear can share a class, each at their own kitchen table.' },
      { h3: 'Victorian terms, Victorian levels', p: 'Lessons follow Victoria\'s year levels and four terms, and senior students can tie projects to the computing studies they take. All teaching is in English.' },
      { h3: 'A trial that teaches', p: 'The opening session is a normal lesson. At the end you get a recommended level, a course and a weekly time, with no card required.' },
      { h3: 'Small, level-matched groups', p: 'Between five and ten learners at the same stage, drawn from Ballarat and further afield, so classes stay full without mixing levels.' },
      { h3: 'Twice a week', p: 'Roughly eight lessons a month at a set time, with holidays and exam periods planned with the teacher in advance.' },
      { h3: 'Teachers in India', p: 'A 6pm Ballarat lesson starts at 12:30pm for our teachers in summer and at 1:30pm in winter, once Victoria turns its clocks back.' }
    ],
    spec: { title: 'Summer and winter times', p: 'Victoria uses daylight saving and India does not, so the gap to our teachers is five and a half hours from October to April and four and a half for the rest of the year. Every lesson time is agreed in Ballarat time.' }
  },

  fees: {
    h2: 'What classes cost in Ballarat',
    intro: 'The prices, without small print.',
    first: 'One full lesson at no cost, ending with a level, a course suggestion and a time that suits.',
    group: 'A month of classes, normally eight, with five to ten learners working at your stage.',
    private: 'About eight classes a month on the same schedule, taught one to one.',
    closer: 'Outside India every family pays in US dollars, so Delacombe and Brown Hill see the same invoice and no Victorian price list exists. You are billed only once the trial has chosen a course and a time; the pricing page sets out what happens with holidays, absences and moving between group and private lessons.'
  },

  reviewsH2: 'Families on Google, in their own words',

  book: {
    h2: 'Book a free first Python lesson',
    intro: 'An age and an interest is enough. A Year 9 student might start by turning tree labels into numbers; an adult might go straight to bounding the averages for the whole register.',
    success: 'Thanks. We will be in touch shortly about a Ballarat class.'
  },

  faq: {
    h2: 'Ballarat Python class questions',
    intro: 'The questions Ballarat learners and parents ask most.',
    items: [
      { q: 'How many people live in Ballarat?', a: 'The 2021 Census counted 111,973 people in the Ballarat urban area. The median age was 38, and 85.0% of occupied homes were separate houses.' },
      { q: 'What is binned or range data?', a: 'Data recorded as a class such as "3-6" or "> 90cm" instead of an exact measurement. You know which interval each value falls in, but not where inside it, so any average has a lower and an upper bound rather than one true value.' },
      { q: 'What is the Ballarat tree project?', a: 'Learners load the City of Ballarat\'s open register of 75,347 trees, write a Python function that turns each size label into bounds, and work out what the data can honestly say. Average height comes out somewhere between 4.88 and 9.14 metres.' },
      { q: 'Why not just use the middle of each range?', a: 'Midpoints assume values are spread evenly inside each class, which nobody checked. They also fail on open classes like "> 90cm", which has no middle. Reporting the lower and upper bounds is more honest and still useful.' },
      { q: 'Do you help with VCE computing?', a: 'Yes, as tuition alongside school. We use Victorian year levels and support senior students in computing and maths, while any work submitted for assessment stays entirely the student\'s own.' },
      { q: 'When are lessons for Ballarat learners?', a: 'Usually after school, in the evening or on weekends, agreed at the trial and always quoted in Ballarat time. Our teachers are five and a half hours behind during daylight saving and four and a half hours behind otherwise.' },
      { q: 'Do you teach children under 13?', a: 'Yes. We teach from age six with Scratch and visual projects, moving to Python once reading and typing are comfortable. This page focuses on older learners.' },
      { q: 'Is there a Modern Age Coders centre in Ballarat?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Ballarat Python classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Ballarat and Victorian learners',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria coding page</a> covers the whole state, and Melbourne has its own <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding and AI agents page</a>. Senior students should look at <a class="cg-inline-link" href="/vce-applied-computing-data-analytics-help">VCE Applied Computing: Data Analytics help</a>, and anyone who copies code from the internet will find <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a> useful. Every Australian page is linked from the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ballarat and Victoria',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/vce-applied-computing-data-analytics-help', label: 'VCE Data Analytics' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-blrt .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-blrt .cg-hero h1 { font-weight: 750; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-blrt .cg-capsule { border-bottom: 2px solid var(--cg-accent); padding: 0 0 0.85rem 0; }
.cg-root.cg-blrt .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-blrt .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-blrt .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.8rem); }
.cg-root.cg-blrt .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-blrt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-blrt .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-blrt .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Ballarat, ABS Census 2021 QuickStats, Significant Urban Area 2003 (read 7 October 2026): 111,973 people; median age 38; 29,291 families; 49,430 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 37,386 (85.0 percent; Victoria 73.4; Australia 72.3), flat or apartment 1,121 (2.5 percent; Victoria 12.1; Australia 14.2); occupation: Professionals 11,915 (22.8 percent; Victoria 25.0; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 21,174 (23.3 percent; Victoria 29.2; Australia 26.3); aged 15 to 19 6,815 (6.1 percent; Victoria 5.6; Australia 5.7). vic.gov.au, 2027 Victorian school term dates: Term 1 Wednesday 27 January (government school students start Thursday 28 January) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Monday 4 October to Friday 17 December. IANA tz database: Australia/Melbourne daylight saving rule AV, from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Binned range strings parsed into intervals. City of Ballarat, Ballarat Trees (data.gov.au ballarattrees, CC BY 3.0 AU, metadata modified 2026-09-30), ballarattrees.csv downloaded 7 October 2026: 75,347 rows; 2,025 distinct location values; genus 352 distinct values, 35,487 Not Assessed. Height (no unit): Not Assessed 38,117 (50.6 percent); <3 12,255; 3-6 9,672; 6-10 6,178; 10-15 4,883; 15-25 3,942; 25-40 300; assessed 37,230; median class 3-6 (cumulative 58.9 percent); mean bounds 4.88 to 9.14 m; midpoint mean 7.01 m. dbh: Not Assessed 37,877 (50.3 percent); <15cm 17,045; 16cm - 30cm 6,989; 31cm - 60cm 6,559; 61cm-90cm 3,660; > 90cm 3,217; assessed 37,470; median class 16cm - 30cm; gaps 15 to 16, 30 to 31, 60 to 61; lower-bound mean 22.10 cm, upper bound undefined (open class). Crown (m suffix): Not Assessed 12,696 (16.9 percent); assessed 62,651; median class 3-6m; mean bounds 3.04 to 6.59 m. Joint missingness: height and dbh both Not Assessed 35,558; height only 2,559; dbh only 2,319.',
    requiredMentions: [
      '111,973',
      '29,291',
      '49,430',
      '21,174',
      '11,915',
      '75,347',
      '4.88 to 9.14 metres',
      'at least 22.10 cm',
      '35,558',
      'Thursday 28 January 2027'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Ballarat Significant Urban Area (2003): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2003' },
      { claim: 'City of Ballarat, Ballarat Trees open dataset (CC BY 3.0 AU) on data.gov.au.', url: 'https://data.gov.au/data/dataset/ballarattrees' },
      { claim: 'Victorian Government, school term dates and holidays, 2027.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne and rule AV.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'The condition, health or safety of any tree: the register\'s health and structure fields are empty in the download, and no claim is made.',
      'The true average height or trunk width of Ballarat\'s trees: only bounds are supported by range data, and half the register is not assessed.',
      'Why the trunk classes leave one-centimetre gaps: not explained by the council, so only the gap itself is reported.',
      'Bureau of Meteorology station data: the observations feed returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the City of Ballarat, the Victorian Government or the ABS.'
    ]
  }
};
