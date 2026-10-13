'use strict';
// Queanbeyan (cg- regional city page, Australia cluster Phase 7, row 196). Shaped page (online coding and Python).
// Spine: how many towns hold the public schools of Queanbeyan-Palerang, and why does Python's groupby give three
// different answers? Data: NSW Department of Education, NSW public schools master dataset (Data.NSW), extracted
// 2 October 2026 (scratchpad au/r5/nsw_master.csv, 2,210 rows). Our code (au/r8/qby_group.py): 15 schools with LGA
// Queanbeyan-Palerang; Town_suburb spellings include trailing spaces and capitals ('Queanbeyan ' x6, 'Queanbeyan' x1,
// 'CAPTAINS FLAT'). itertools.groupby on file order 11 groups; after sorting raw strings 10; normalised (strip,
// casefold) but unsorted 11; normalised and sorted 7 (queanbeyan 7, bungendore 2, jerrabomberra 2, braidwood 1,
// captains flat 1, googong 1, karabar 1). Levels: Primary 8, Secondary 4, Central/Community 2, Schools for Specific
// Purposes 1. Date_1st_teacher: Braidwood Central School 1 August 1849 (earliest); Bungendore High School and
// Jerrabomberra High School 27 January 2023 (latest). Statewide: LGA field in file order 2,094 runs for 129 distinct
// LGAs; Town_suburb 1,620 distinct raw spellings, 1,328 after strip and casefold. Lesson family: itertools.groupby
// groups only consecutive items (sort first); screened free site-wide on 10 October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Queanbeyan-Palerang Regional LGA (LGA16490),
// with New South Wales and Australia: 63,304 people; median age 38; 17,312 families; 26,503 private dwellings; 2.6
// people per household; separate house 17,078 (73.9 percent; NSW 65.6; Australia 72.3); flat or apartment 2,661
// (11.5; NSW 21.7; Australia 14.2); Professionals 7,654 (22.0; NSW 25.8; Australia 24.0); Technicians and Trades
// Workers 4,624 (13.3; NSW 11.9; Australia 12.9); Bachelor Degree level and above 14,348 (28.2; NSW 27.8; Australia
// 26.3); industry: Central Government Administration 3,836 (11.0; NSW 0.8; Australia 1.1), Defence 2,660 (7.6; NSW
// 0.6; Australia 0.7). ABS ERP Queanbeyan-Palerang LGA (16490) 30 June 2025: 67,633. NSW term dates from
// education.nsw.gov.au. Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language,
// religion, health; school electorate fields not used.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'QUEANBEYAN', label: 'Queanbeyan', blurb: 'Queanbeyan, next door to Canberra, where fifteen school records and one Python function give three different town counts.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-queanbeyan',
  code: 'qbyn',
  accent: '#20582E',
  accentRationale: 'Queanbeyan: a deep river-flat green (HSV saturation 0.64, value 0.35, hue 135), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 8.6:1 on white and 6.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Queanbeyan',
    eyebrow: 'Queanbeyan, New South Wales, beside Canberra',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Canberra', href: '/vibe-coding-and-ai-agents-classes-in-canberra' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Queanbeyan, New South Wales',
  title: 'Online Coding and Python Classes in Queanbeyan | Live Teacher',
  description: 'Live online Python and coding classes for Queanbeyan teenagers and adults, with a project that groups real NSW school records and finds why the counts disagree.',
  ogDescription: 'Python classes for Queanbeyan learners, built on fifteen public school records that a single function manages to count three different ways.',
  twitterDescription: 'Online Python for Queanbeyan teens and adults, live with a teacher, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Queanbeyan Learners',
    description: 'Level-matched online Python, data cleaning, grouping and analysis for teenagers and adults in Queanbeyan, Bungendore, Braidwood and nearby, taught live in English.'
  },

  h1: 'Online coding and Python classes in Queanbeyan',
  capsuleQ: 'What are the best online coding and Python classes in Queanbeyan?',
  capsule: 'Live Python classes where a Queanbeyan teenager or adult cleans and groups real public records, then explains to a teacher why each count can be trusted. Queanbeyan-Palerang counted 63,304 residents at the 2021 Census. Teaching runs online, privately or in a small group of learners at the same level, and the opening lesson is free.',
  lead: 'The NSW Department of Education publishes a master list of every public school in the state, and 15 of them sit in the Queanbeyan-Palerang council area. How many towns do those schools belong to? Python\'s itertools.groupby looks like the obvious tool, and run on the file as it arrives it answers 11. Sort the list first and it says 10. Clean the spellings and sort and it says 7, which is right. The function was never broken: it only ever groups items that sit next to each other, and the town names carried hidden spaces and capital letters. Our Queanbeyan learners find out why a correct function can still give a wrong answer.',
  wa: 'Hello Modern Age Coders, I would like a free online Python class for a learner in Queanbeyan.',

  picks: {
    eyebrow: 'Course picks for Queanbeyan',
    h2: 'Python routes for Queanbeyan learners',
    intro: 'Every one of these reaches the school-records project below. The free lesson recommends one, and no card is requested.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the first line to reading a CSV, sorting it and counting what is inside.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Pandas, grouping and the cleaning that has to happen before any count.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'The standard library in depth, itertools included, with tests for every function.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults working with records', note: 'Cleaning, matching and summarising administrative data that was never meant to be analysed.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Queanbeyan-Palerang in the Census',
      h2: 'A council area of 63,304 on the Canberra border',
      intro: 'The 2021 Census for the Queanbeyan-Palerang Regional council area, which takes in Queanbeyan, Googong, Jerrabomberra, Bungendore and Braidwood, beside NSW and Australia.',
      body: [
        { kind: 'p', text: 'The council area held 63,304 people with a median age of 38, forming 17,312 families across 26,503 private dwellings and averaging 2.6 residents per household.' },
        { kind: 'table', caption: 'Queanbeyan-Palerang shares against NSW and Australia (2021 Census)', head: ['Share', 'Queanbeyan-Palerang', 'NSW', 'Australia'], rows: [
          ['Working in central government administration (3,836 people)', '11.0%', '0.8%', '1.1%'],
          ['Working in defence (2,660 people)', '7.6%', '0.6%', '0.7%'],
          ['Bachelor degree or above (14,348 people)', '28.2%', '27.8%', '26.3%'],
          ['Flats or apartments (2,661 dwellings)', '11.5%', '21.7%', '14.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Professional jobs', p: 'Professionals numbered 7,654, 22.0% of workers, a little under the NSW share of 25.8%.' },
          { h3: 'Trades', p: 'Technicians and trades workers numbered 4,624, 13.3% of workers, against 11.9% for the state.' },
          { h3: 'Mostly houses', p: 'Separate houses made up 17,078 dwellings, 73.9% of the total, compared with 65.6% across NSW.' }
        ] },
        { kind: 'p', text: 'The ABS estimate for the council area at 30 June 2025 is 67,633. Census cells carry small random adjustments for privacy, so rows may not sum to totals; we quote every figure as published and never build a total by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why does one Python function count three different numbers of towns?',
      intro: 'The 15 Queanbeyan-Palerang schools in the NSW public schools master dataset, grouped by their town field with itertools.groupby.',
      body: [
        { kind: 'table', caption: 'Four ways to group the same 15 records (our code, 10 October 2026)', head: ['What we did first', 'Groups returned', 'Is that the number of towns?'], rows: [
          ['Nothing: groupby on the file as it arrives', '11', 'No: Queanbeyan turns up as three separate groups'],
          ['Sorted the raw town names', '10', 'No: spaces at the end split three towns in two'],
          ['Cleaned the names but did not sort', '11', 'No: the repeats are still apart'],
          ['Cleaned the names, then sorted', '7', 'Yes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Groups only touch neighbours', p: 'groupby walks the list once and starts a new group whenever the key changes. Two Queanbeyan schools separated by a Jerrabomberra school become two Queanbeyan groups.' },
          { h3: '2. Invisible differences', p: 'Six records say \'Queanbeyan \' with a trailing space and one says \'Queanbeyan\' without. One town is entered entirely in capitals. To a computer these are different strings.' },
          { h3: '3. The honest count', p: 'After stripping spaces, ignoring case and sorting: Queanbeyan 7 schools, Bungendore 2, Jerrabomberra 2, and Braidwood, Captains Flat, Googong and Karabar one each.' }
        ] },
        { kind: 'callout', h3: 'The same trap across the whole state', p: 'Run groupby on the council field of all 2,210 NSW records in file order and it finds 2,094 groups, although there are only 129 council areas. The town field holds 1,620 different spellings, which shrink to 1,328 once spaces and capitals are tidied. Nothing in the output warns that the grouping went wrong; the numbers simply look plausible.' },
        { kind: 'p', text: 'The records are the department\'s, extracted on 2 October 2026; the grouping and counts are ours. Among the 15 schools are 8 primary, 4 secondary, 2 central or community schools and 1 school for specific purposes. The earliest first teacher on record was at Braidwood Central School on 1 August 1849, and the newest are Bungendore High School and Jerrabomberra High School, both dated 27 January 2023.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Counting records properly',
      h2: 'A routine for grouping messy records',
      intro: 'Learned on fifteen school records, then reused for customer lists, survey answers and any export typed by people.',
      body: [
        { kind: 'table', caption: 'Steps and what each fixed in the Queanbeyan records', head: ['Step', 'Python', 'Effect here'], rows: [
          ['Look at the raw values', 'print(repr(name))', 'Reveals the trailing spaces'],
          ['Normalise', 'name.strip().casefold()', 'Merges Queanbeyan and Queanbeyan with a space'],
          ['Sort by the same key', 'sorted(names, key=norm)', 'Puts every repeat side by side'],
          ['Cross-check with a counter', 'collections.Counter', 'Agrees: 7 towns, 15 schools']
        ] },
        { kind: 'p', text: 'repr() is the quiet hero here, because print() hides trailing spaces. Counting the same thing two independent ways, groupby after sorting and Counter without it, is a cheap test that would have caught every wrong answer in the table above.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Read the 15 rows, print their towns with repr, and get groupby to agree with a hand count.' },
          { h3: 'University students', p: 'Compare groupby, dictionaries and pandas grouping on the full 2,210-row file, and time each approach.' },
          { h3: 'Adults at work', p: 'Spreadsheet exports and form responses hide the same spaces and capitals; the routine carries straight over.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with the NSW Department of Education, the ABS or Queanbeyan-Palerang Regional Council. The school records and Census figures belong to them; the analysis is our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Queanbeyan',
      h2: 'New South Wales schools on Canberra time',
      intro: 'What decides when a Queanbeyan learner can join a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Same clock as Canberra', p: 'Queanbeyan keeps eastern time, UTC plus 10, moving to UTC plus 11 for daylight saving from October to April, exactly like the ACT next door.' },
          { h3: 'India time', p: 'India time is four and a half hours behind Queanbeyan in winter and five and a half hours behind during daylight saving.' },
          { h3: 'A NSW school system', p: 'Despite living beside the ACT, Queanbeyan students follow NSW stages and the HSC, and our teachers plan with that in mind.' }
        ] },
        { kind: 'spec', title: 'NSW term dates ahead', p: 'The department lists Term 4 of 2027 from Monday 11 October to Monday 20 December. For Term 1 of 2027 it gives two starts, Thursday 28 January for the Eastern division and Thursday 4 February for the Western, both finishing on Friday 9 April.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first list to trustworthy counts',
    intro: 'The age bands are approximate; the free lesson sets the true starting stage.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and loops', p: 'Storing names, counting with loops and printing results clearly.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Files and cleaning', p: 'Reading CSV files, tidying text and grouping records correctly.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'The standard library', p: 'itertools, collections and functional tools, each with tests and edge cases.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Records at work', p: 'Cleaning and summarising administrative data with checks built in.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant sort before grouping?',
    intro: 'Sometimes, but rarely does it inspect the data first.',
    p1: 'Ask a chatbot to count schools by town and it may well write groupby with a sort in front, which already beats the naive version. It will seldom think to strip the trailing spaces, so on the Queanbeyan records it would report 10 towns and mean it.',
    p2: 'Our Queanbeyan learners let AI write the first draft, then print the raw values with repr and count a second way with Counter. When the two counts differ, they know to look harder before trusting either.',
    closer: 'A Queanbeyan learner who has watched three wrong counts appear from one correct function will check the data, not just the code, whatever AI tools arrive after 2026.',
    blogAnchor: 'why learning Python still matters for teenagers'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Next door to the capital, a class at home',
    intro: 'An online lesson removes the drive across the border.',
    cells: [
      { h3: 'Eastern time, written down', p: 'Lessons are fixed in Queanbeyan time, which matches Canberra and Sydney all year round.' },
      { h3: 'Built for NSW students', p: 'Teachers plan around NSW stages and the HSC, and every lesson is in English.' },
      { h3: 'A coding lesson, not a pitch', p: 'The free first session is real Python with a teacher; you then get a suggested course and time, and we never take payment details.' },
      { h3: 'Small groups by level', p: 'Fifteen to twenty learners at the same stage, drawn from many places so each level has a workable hour.' },
      { h3: 'Two sessions a week', p: 'About eight a month; school holidays and exam periods are agreed beforehand.' },
      { h3: 'Public servants welcome', p: 'Adults working office hours can take evening groups or book one-to-one lessons.' }
    ],
    spec: { title: 'One local time for everything', p: 'Times are given in Queanbeyan time, so families on either side of the border read them the same way.' }
  },

  fees: {
    h2: 'Online Python fees in Queanbeyan',
    intro: 'Three options, nothing hidden.',
    first: 'A free lesson that finishes with our suggestion of level, course and time.',
    group: 'Around eight group lessons a month, with fifteen to twenty learners at one level.',
    private: 'Around eight one-to-one lessons a month with a single teacher.',
    closer: 'Queanbeyan families pay the same US dollar fee as families anywhere else in Australia. No charge applies until the trial settles a course and a time, and the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Reviews of our teaching on Google',

  book: {
    h2: 'Tell us about the learner and we will plan their trial',
    intro: 'We prepare the first task beforehand: printing and counting a short list for a Year 8 beginner, the groupby puzzle for a Year 11 student, or the statewide records for an adult.',
    success: 'Thank you. We will be in touch soon about an online Python class in Queanbeyan.'
  },

  faq: {
    h2: 'Queanbeyan Python class questions',
    intro: 'What Queanbeyan parents and adult learners ask us most.',
    items: [
      { q: 'How many people live in Queanbeyan-Palerang?', a: 'The 2021 Census counted 63,304 people in the Queanbeyan-Palerang Regional council area. The ABS estimate at 30 June 2025 is 67,633.' },
      { q: 'What does itertools.groupby do?', a: 'itertools.groupby walks through a sequence and bundles together items that are next to each other and share the same key. It does not look ahead, so equal items that are apart end up in separate groups unless the data is sorted by that key first.' },
      { q: 'What is the Queanbeyan school records project?', a: 'Learners load the NSW public schools master dataset, pick out the 15 schools in Queanbeyan-Palerang, group them by town with itertools.groupby, and find out why the count changes from 11 to 10 to 7 as the data is sorted and cleaned.' },
      { q: 'Why do trailing spaces matter?', a: 'To Python, a name with a space at the end is a different string from the same name without one. In the Queanbeyan records six schools list their town with a trailing space and one without, so they never group together until the names are stripped.' },
      { q: 'Do Queanbeyan students follow the ACT or NSW system?', a: 'Queanbeyan is in New South Wales, so its students follow NSW stages and the HSC. We plan lessons around that, while times match Canberra\'s clock.' },
      { q: 'When do lessons run for Queanbeyan?', a: 'After school, in the evenings or at weekends, agreed in the trial and written in Queanbeyan time. India time is four and a half hours behind in winter and five and a half in summer.' },
      { q: 'Can younger children learn with you?', a: 'Yes, from age 6 with visual tools like Scratch. The records project on this page is pitched at teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Queanbeyan?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do online Python classes in Queanbeyan cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Canberra and NSW',
    h2: 'Nearby pages for Queanbeyan learners',
    html: 'Across the border there are <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">vibe coding and AI agents classes in Canberra</a> and <a class="cg-inline-link" href="/coding-classes-for-kids-canberra">coding classes for kids in Canberra</a>, plus the territory guide, <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">coding and AI classes in the ACT</a>. Up the road is <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-goulburn">a Goulburn page</a>, and the state overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Queanbeyan, Canberra and NSW',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/vibe-coding-and-ai-agents-classes-in-goulburn', label: 'Goulburn' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-qbyn .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-qbyn .cg-hero h1 { font-weight: 710; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-qbyn .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-qbyn .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-qbyn .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.011em; }
.cg-root.cg-qbyn .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.85rem); }
.cg-root.cg-qbyn .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-qbyn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-qbyn .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-qbyn .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Queanbeyan-Palerang Regional LGA, ABS Census 2021 QuickStats, area code LGA16490, with New South Wales and Australia (read 10 October 2026): 63,304 people; median age 38; 17,312 families; 26,503 private dwellings; 2.6 people per household; separate house 17,078 (73.9 percent; NSW 65.6; Australia 72.3); flat or apartment 2,661 (11.5 percent; NSW 21.7; Australia 14.2); Professionals 7,654 (22.0 percent; NSW 25.8; Australia 24.0); Technicians and Trades Workers 4,624 (13.3 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 14,348 (28.2 percent; NSW 27.8; Australia 26.3); industry of employment: Central Government Administration 3,836 (11.0 percent; NSW 0.8; Australia 1.1); Defence 2,660 (7.6 percent; NSW 0.6; Australia 0.7). ABS ERP Queanbeyan-Palerang LGA (16490) 30 June 2025: 67,633. NSW Department of Education 2027 term dates: Term 1 Eastern Thursday 28 January, Western Thursday 4 February, to Friday 9 April; Term 4 Monday 11 October to Monday 20 December. IANA tz Australia/Sydney (same rules as Australia/ACT): UTC+10, daylight saving UTC+11 from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'itertools.groupby groups only consecutive items. NSW public schools master dataset (Data.NSW), Date_extracted 2026-10-02, 2,210 rows. LGA Queanbeyan-Palerang: 15 schools; Town_suburb raw values Braidwood(trailing space), Bungendore(trailing space), CAPTAINS FLAT, Queanbeyan(trailing space) x6, Jerrabomberra(trailing space), Queanbeyan, Googong, Karabar, Bungendore, Jerrabomberra. groupby file order 11 groups; sorted raw 10; normalised unsorted 11; normalised sorted 7 (queanbeyan 7, bungendore 2, jerrabomberra 2, braidwood 1, captains flat 1, googong 1, karabar 1); collections.Counter agrees. Level_of_schooling: Primary School 8, Secondary School 4, Central/Community School 2, Schools for Specific Purposes 1. Date_1st_teacher earliest Braidwood Central School 1849-08-01; latest Bungendore High School and Jerrabomberra High School 2023-01-27. Statewide: LGA in file order 2,094 groupby runs, 129 distinct LGAs; Town_suburb 1,620 distinct raw, 1,328 after strip and casefold.',
    requiredMentions: [
      '63,304',
      '17,312',
      '26,503',
      '67,633',
      '2,094 groups',
      '1,620 different spellings',
      'Braidwood Central School on 1 August 1849',
      'Captains Flat',
      'Next door to the capital, a class at home'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Queanbeyan-Palerang Regional LGA (LGA16490): people, median age, families, dwellings, dwelling structure, occupation, education, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA16490' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Queanbeyan-Palerang LGA 16490, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.16490.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'NSW public schools master dataset (Data.NSW): school names, town, LGA, level of schooling and date of first teacher.', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'Python documentation, itertools.groupby.', url: 'https://docs.python.org/3/library/itertools.html#itertools.groupby' },
      { claim: 'NSW Department of Education, future and past NSW term dates and school holidays (2027 dates).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-dates-and-school-holidays' }
    ],
    rejectedClaims: [
      'Enrolment, ICSEA or other per-school measures from the master dataset: not needed for the grouping lesson and not shown.',
      'Which NSW term division Queanbeyan schools follow: the department page lists both without naming schools, so both are shown.',
      'Electorate fields in the master dataset: political boundaries are not used on this page.',
      'Commuting figures between Queanbeyan and Canberra: not part of the verified sources used here.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, the ABS or Queanbeyan-Palerang Regional Council.'
    ]
  }
};
