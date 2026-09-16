'use strict';
// County Kerry (cg- county page, Ireland cluster, Phase 4). Spine: what to do
// when the source disagrees with itself. The CSO's Kerry summary release of
// 30 May 2023 gives 62,887 Irish speakers aged three and over; its Profile 8
// release of 19 December 2023 gives 62,877 for the same measure in the same
// county in the same census. Ten people, two official releases, seven months
// apart. The page teaches the professional answer, which is to publish both
// with their dates rather than to pick the prettier one. Second half: the CSO's
// own F1010 slice for Kerry, where the row labelled "Ireland" is really the
// Kerry total, so a script that sums every row returns 312,916, double the
// county. Facts read at primary sources on 16 September 2026: the Kerry
// Summary, Profile 1, Profile 5, Profile 7 and Profile 8 press statements;
// PxStat F1010, F1013 and F1016; gov.ie's January 2018 LCCS list; mtu.ie;
// fexco.com; data.gov.ie. DELIBERATELY EXCLUDED: the Fexco Killorglin eircode
// reported elsewhere as V93 WN9T, which is not on Fexco's own contact page, and
// any county land area or density figure, which the CSO does not publish at
// council level. The euro value of the Fexco investment is left out so no euro
// figure sits anywhere near our USD fees.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY KERRY', blurb: 'Tralee, Killarney, Listowel and the Gaeltacht, with a project on two official numbers that disagree.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-kerry',
  code: 'kry',
  accent: '#1F5E52',
  accentRationale: 'County Kerry: a deep sea green from the solver, held apart from the tones used on the Munster city pages',
  pageType: 'governorate',
  place: {
    name: 'County Kerry',
    eyebrow: 'County Kerry, Munster',
    schemaType: 'AdministrativeArea',
    chain: [
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
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Kerry, Ireland',
  title: 'Coding Classes in County Kerry | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Kerry, from Tralee and Killarney to Listowel, Dingle and Kenmare, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Kerry, built around a project on two official figures for the same thing that do not agree.',
  twitterDescription: 'Coding classes across County Kerry, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Kerry Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Kerry, taught live in English.'
  },

  h1: 'Coding classes in County Kerry',
  capsuleQ: 'What are the best coding classes in County Kerry?',
  capsule: 'County Kerry holds 156,458 people, up by 8,751 since 2016, with 28,756 of them aged 15 and under. Tralee is the largest town at 26,079 and Killarney follows at 14,412, while the rest of the county lives in smaller towns and townlands from Listowel down to Kenmare and out along the peninsulas. One Kerry school was on the first national list for Leaving Certificate Computer Science. We teach ages 6 to 67 live online at a fixed weekly hour, in ability groups of five to ten or one to one, starting with a free lesson and then USD 100 a month in a group or USD 150 privately.',
  lead: 'Here is a real problem, and a Kerry one. The Central Statistics Office published how many people in this county could speak Irish. In its summary release of 30 May 2023 the figure was 62,887. In its Profile 8 release of 19 December 2023, describing the same measure from the same census in the same county, the figure was 62,877. Ten people apart, two official documents, seven months between them. Nobody has done anything wrong, and neither number is fake. So which one do you put in your project, and what do you say about the other? That question has a right answer, it takes about four sentences to write down, and almost nobody is ever taught it. It is the centre of this page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Kerry.',

  picks: {
    eyebrow: 'Course picks for County Kerry',
    h2: 'Four courses, four different starting points',
    intro: 'The free lesson decides which one fits. It is taught by the teacher who would take the course, and we ask for no card details at any stage.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games where two parts of the screen have to agree with each other, and do not until the child fixes them.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the ground up, aimed at the Junior Cycle and at Transition Year projects that need real data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Working with published figures that contradict each other, and writing the note that explains it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who report numbers to other people and need a defensible way to handle conflicting sources.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Kerry in the 2022 census',
      intro: 'Every figure here names Kerry County Council or a Kerry town, taken from the statistics office\'s Kerry releases.',
      body: [
        { kind: 'table', caption: 'County Kerry, Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '156,458, up 8,751 on 2016'],
          ['Women and men', '79,071 female and 77,387 male, or 98 males for every 100 females'],
          ['Average age', '41.5 years, up from 40.2 in 2016'],
          ['Children aged 15 and under', '28,756'],
          ['Born in the county', '98,126 people, 65% of residents'],
          ['Third level qualifications', 'More than 44,200 people, 41% of those aged 15 and over, against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The two big towns', p: 'Tralee holds 26,079 people across 17.8 square kilometres and Killarney 14,412 across 9.1, which makes Killarney the denser of the two at 1,576.9 people per square kilometre.' },
          { h3: 'Youngest and oldest', p: 'Among towns of at least 500 people, Fieries has the youngest average age at 32.2 years and Tarbert the oldest at 46.' },
          { h3: 'Who lives here', p: 'Non-Irish citizens make up 10% of the county. The largest groups are UK at 3,783, Polish at 3,362, Lithuanian at 767 and German at 558.' }
        ] },
        { kind: 'p', text: 'Kerry is one of a small number of counties with a Gaeltacht. Its Gaeltacht population rose to 9,036, of whom 8,791 were aged three and over, and 6,068 of those could speak Irish, with 2,733 speaking it very well. Our teaching is in English, and every programming language uses English keywords, so a pupil from a Gaeltacht school is at no disadvantage whatsoever in one of our groups.' }
      ]
    },
    {
      id: 'work', tint: 'tint', eyebrow: 'Work and study',
      h2: 'One listed school, one university campus, a long commute',
      intro: 'What the county offers a learner who wants to go further than the school timetable allows.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The listed school', p: 'Coláiste na Ríochta in Listowel was the only Kerry school on the national first-phase list for Leaving Certificate Computer Science published in January 2018.' },
          { h3: 'The university campus', p: 'MTU Kerry North Campus in Tralee, eircode V92 HD4V, teaches computing alongside business and engineering and shares a site with Kerry Technology Park, where a quarter of those working are MTU graduates.' },
          { h3: 'The technology employer', p: 'Fexco, headquartered on the Iveragh Road in Killorglin, opened a research, development and innovation building there housing over 125 staff across 37,000 square feet.' }
        ] },
        { kind: 'table', mt: true, caption: 'Getting to work in Kerry, Census 2022', head: ['Measure', 'Figure'], rows: [
          ['People travelling to work in the county', '58,541'],
          ['Driving by car', '38,084'],
          ['Walking', '5,303, up from 4,812 in 2016'],
          ['Cycling', '876'],
          ['By bus and by train', '652 and 96'],
          ['Average journey time', '24.6 minutes, up from 22.7 minutes in 2016']
        ] },
        { kind: 'spec', title: 'Working from home is not yet normal here', p: 'More than 67,500 people work in Kerry. Of those, over 42,900 never work from home while more than 17,100 do at least some of the time, which the statistics office puts at 25% of the workforce against 32% nationally. Kerry is a driving county with lengthening journeys, and an evening class that requires another trip in the car is a real cost to a family, not a small one.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When the source disagrees with itself',
      intro: 'Two official documents, one measure, ten people between them. What does a careful person publish?',
      body: [
        { kind: 'table', caption: 'The same measure, Irish speakers aged three and over in Kerry, Census 2022', head: ['Release', 'Date', 'Figure'], rows: [
          ['Kerry summary results', '30 May 2023', '62,887'],
          ['Profile 8, the Irish language and education, Kerry', '19 December 2023', '62,877'],
          ['Difference', '', 'Ten people, or 0.016%'],
          ['What both releases agree on', '', 'That the number rose since 2016 and is about 44% of the county aged three and over']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The wrong move', p: 'Quietly picking one, usually whichever was found first, and presenting it as the figure with no note attached.' },
          { h3: 'The other wrong move', p: 'Deciding the whole source is unreliable and throwing away a census, which is the most carefully built dataset most learners will ever touch.' },
          { h3: 'The right move', p: 'Publish both, name the release and date beside each, state the size of the difference, and say which you used and why. Four sentences, and the work becomes checkable.' }
        ] },
        { kind: 'callout', h3: 'Why this matters more than it looks', p: 'A ten-person gap in a county of 156,458 changes nothing about Kerry. The point is what the gap teaches. Every serious dataset has revisions, late returns and small corrections between releases, and the difference between an amateur and a professional is not that the professional finds sources without discrepancies. It is that the professional writes down the discrepancy instead of hiding it. A teenager who has practised that once will do it instinctively in a college project, and later in a job where somebody is relying on the number.' },
        { kind: 'p', text: 'The second half of the project is a structural trap in the same statistics office\'s own tables. Filter the population table to Kerry County Council and you get one row for each town-size band, plus a row labelled "Ireland". That row is not the national population at all; it is Kerry\'s own total. The eight band rows sum to exactly 156,458, and so does the row called "Ireland". A script that sums the whole column therefore reports 312,916 people in Kerry, twice the real figure, and prints it without complaint. Learners find it themselves, then write the rule: before summing a column, check whether the totals are sitting in it.' }
      ]
    },
    {
      id: 'opendata', tint: 'tint', eyebrow: 'The county\'s own data',
      h2: 'Three datasets, none of them a table',
      intro: 'We looked for Kerry council data a learner could open, and what we found is itself worth teaching.',
      body: [
        { kind: 'table', caption: 'Kerry County Council on the national open data portal, read 16 September 2026', head: ['What we checked', 'What we found'], rows: [
          ['Number of datasets published', 'Three'],
          ['Their titles', 'Architectural conservation areas, record of protected structures, and the county road network'],
          ['Licence on all three', 'Creative Commons Attribution 4.0'],
          ['Format', 'Map layers and a map service, with no spreadsheet or comma-separated file among them'],
          ['A separate council data portal', 'None that resolved when we tried the usual addresses']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The honest conclusion', p: 'A learner in Kerry who wants council figures in a spreadsheet cannot have them today. That is a finding about the county, not a failure of the learner.' },
          { h3: 'What they do instead', p: 'Use the national statistics tables, which are open, machine readable and carry the trap described above, so the project loses nothing.' },
          { h3: 'The wider point', p: 'Half of data work is finding out what does not exist. Writing that down clearly is a skill, and it is the part people skip.' }
        ] },
        { kind: 'p', text: 'We are not connected with Kerry County Council, Munster Technological University, Fexco or any school named here. Population, employment and language figures are quoted from Central Statistics Office releases that name Kerry, with each release and date given where two of them differ; the dataset count and licences come from the national portal; the row-sum arithmetic is our own, run on the published table. One figure often repeated elsewhere, an eircode for the Killorglin headquarters, does not appear on the company\'s own contact page, so we do not print it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two answers to one defensible note',
    intro: 'Ages are a guide only. Where a learner starts is settled in the free lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two counts, one box', p: 'Counting the same things twice, getting different answers, and working out which count to trust.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Where numbers come from', p: 'Reading a published table, finding the total, and noticing when the total is also a row.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Conflicting sources', p: 'Two releases, one measure, and a written note that a teacher or examiner can check.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reporting under scrutiny', p: 'Handling revisions and restatements in work reporting without losing anyone\'s trust.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant for the Kerry figure and it will give you one. Which one?',
    intro: 'It will give you whichever it saw more often, and it will not tell you the other one exists.',
    p1: 'This is not a flaw anyone can patch out. A generated answer is a confident single sentence by design, and confidence is exactly the wrong shape for a measure that two official documents state differently. The model is not choosing to hide the second figure. It has no way to know that the reader needed to see both.',
    p2: 'A learner who has sat with the Kerry contradiction asks a different question afterwards. Not what is the number, but where does this number come from and is there another version of it. That question costs two minutes and it is the difference between a project that survives a hard look and one that does not.',
    closer: 'So the skill worth building in 2026 is not producing answers faster. It is knowing which answers need a note attached, and being willing to write it.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Tralee, Killarney, Dingle, Kenmare',
    intro: 'Kerry is long, mountainous and slow to cross, which decides a great deal about evening classes.',
    cells: [
      { h3: 'No second car journey', p: 'With an average commute of 24.6 minutes already, a class that needs another drive is a class that gets dropped in November.' },
      { h3: 'Irish school stages', p: 'We work to the Junior Cycle, Transition Year, fifth year and sixth year, and plan around exam weeks.' },
      { h3: 'A free first lesson', p: 'Real teaching, a level identified, a course suggested and an hour proposed. No card details are requested.' },
      { h3: 'Groups of five to ten', p: 'Learners at one ability level, gathered across Kerry and several countries so the right group runs at a workable hour.' },
      { h3: 'The same hour each week', p: 'Usually two lessons a week, around eight a month, fixed once and kept.' },
      { h3: 'Teachers ahead of you', p: 'Our teachers work from India, four and a half hours ahead of Irish time in summer and five and a half in winter.' }
    ],
    spec: { title: 'For families on the peninsulas', p: 'From Waterville or Ballyferriter, the nearest town with a serious after-school computing option is an hour away in each direction, in winter, on roads that do not reward hurrying. There is no version of a weekly evening class in a room that works for those families. A live online group at the right level is not a compromise here. It is the only thing that actually functions.' }
  },

  fees: {
    h2: 'Kerry class fees',
    intro: 'Three numbers, and nothing hidden behind them.',
    first: 'The first lesson, taught in full, at no charge.',
    group: 'A month of group classes, normally eight lessons, five to ten learners at one level.',
    private: 'A month of one to one classes on the same weekly pattern.',
    closer: 'We bill monthly in US dollars, at the one rate we charge outside India, so Cahersiveen and Tralee pay the same and there is no euro price list. Nothing is charged until the free lesson has agreed a course and a weekly hour, and the pricing page sets out pauses, missed lessons and moves between group and private.'
  },

  reviewsH2: 'Six Google reviews from our families, exactly as they were written',

  book: {
    h2: 'Tell us who the learner is',
    intro: 'The first task is matched to the person: a two-counts puzzle for a young child, a table with a hidden total for the middle years, or the two Kerry releases for a teenager who wants the real thing.',
    success: 'Thank you. Somebody will be in touch about your County Kerry class shortly.'
  },

  faq: {
    h2: 'County Kerry coding class questions',
    intro: 'What families across Kerry ask us before starting.',
    items: [
      { q: 'How many people live in County Kerry?', a: 'The 2022 census recorded 156,458 people in Kerry, an increase of 8,751 since 2016, including 28,756 children aged 15 and under.' },
      { q: 'What is the Kerry data project about?', a: 'Two official releases give different figures for the number of Irish speakers in Kerry, 62,887 and 62,877. Students learn to publish both with their dates rather than quietly choose one.' },
      { q: 'Which Kerry school first offered Leaving Certificate Computer Science?', a: 'Coláiste na Ríochta in Listowel was the only Kerry school on the national first-phase list published in January 2018.' },
      { q: 'What are the biggest towns in Kerry?', a: 'Tralee at 26,079 and Killarney at 14,412. As electoral areas rather than towns, Tralee covers 35,922 people and Killarney 31,086, because those include the countryside around them.' },
      { q: 'Do you teach children in the Kerry Gaeltacht?', a: 'Yes. Our classes are taught in English and every programming language uses English keywords, so a pupil from a Gaeltacht school starts on exactly the same footing as anyone else.' },
      { q: 'Why does this page mention the road to work so often?', a: 'Because 38,084 people in Kerry drive to work and the average journey has grown to 24.6 minutes. An online class removes the second journey of the day rather than adding one.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed in the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in County Kerry?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Kerry coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Across Munster and beyond',
    html: 'The nearest city pages are <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> and <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a>, and the county east of here is covered at <a class="cg-inline-link" href="/coding-classes-in-county-cork">County Cork</a>. If you are comparing providers, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and the full set sits on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Kerry and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-kry .cg-hero-grid { align-items: start; gap: clamp(1.09rem, 3.36vw, 2.81rem); }
.cg-root.cg-kry .cg-hero h1 { font-weight: 700; letter-spacing: -0.0177em; line-height: 1.073; }
.cg-root.cg-kry .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.22rem; }
.cg-root.cg-kry .cg-eyebrow { letter-spacing: 0.181em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-kry .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0116em; }
.cg-root.cg-kry .cg-grid-3 { gap: clamp(1.11rem, 2.63vw, 2.09rem); }
.cg-root.cg-kry .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-kry .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kry .cg-table th:last-child { text-align: left; }
.cg-root.cg-kry .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.08rem; }
.cg-root.cg-kry .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'County Kerry, Census 2022 (CSO Kerry releases): population 156,458, up 8,751 (6 percent) since 2016; 79,071 female and 77,387 male, 98 males per 100 females; average age 41.5 against 40.2 in 2016; 28,756 children aged 15 and under. Birthplace: 98,126 people (65 percent) born in the county, 26,341 (17 percent) elsewhere in the State, 27,524 (18 percent) outside the State, up from 17 percent in 2016. Citizenship: non-Irish citizens 10 percent of the county, largest groups UK 3,783, Polish 3,362, Lithuanian 767, German 558; dual Irish citizens up from 3,039 in 2016 to 5,471, largest Irish-US 1,724, Irish-UK 1,281, Irish-Polish 513. Towns (F1013): Tralee 26,079 at 1,468.6 per sq km across 17.8 sq km; Killarney 14,412 at 1,576.9 across 9.1 sq km; as local electoral areas (F1016) Tralee 35,922 and Killarney 31,086, larger because an LEA includes rural hinterland. Among towns of at least 500 people, Fieries is youngest at average age 32.2 and Tarbert oldest at 46. Work (Profile 7): more than 67,500 at work; over 42,900 never working from home against more than 17,100 who do at least some of the time, 25 percent of the workforce against 32 percent nationally, including more than 4,100 five days a week, 2,908 one day and 2,404 two days; 58,541 travelling to work, of whom 38,084 drive, 652 take the bus, 96 the train, 5,303 walk (up from 4,812 in 2016) and 876 cycle; average journey time 24.6 minutes against 22.7 in 2016; Dingle-Daingean Uí Chuís the most likely town of at least 1,500 people to walk to work at 44 percent. Education (Profile 8): third level qualifications up from almost 35,700 in 2016 to more than 44,200, which is 41 percent of those aged 15 and over against a national 45 percent. Gaeltacht (Profile 8): population up from almost 8,800 to 9,036, of whom 8,791 were aged three and over and 6,068 could speak Irish, with 2,733 speaking it very well, 1,945 well and 1,268 not well. THE CONTRADICTION: the Kerry summary release of 30 May 2023 states 62,887 people aged three and over could speak Irish, while the Profile 8 release of 19 December 2023 states 62,877 for the same measure, a ten-person difference between two official releases, reproduced here exactly as each was published and not resolved. Schools and employers: Coláiste na Ríochta, Listowel, the only Kerry school on the gov.ie first-phase Leaving Certificate Computer Science list of 4 January 2018; MTU Kerry North Campus, Tralee, eircode V92 HD4V, teaching computing among other fields on a shared site with Kerry Technology Park, where MTU states 25 percent of those working are its graduates; Fexco, Fexco Centre, Iveragh Road, Killorglin, whose own announcement describes a new research, development and innovation building with over 125 staff in 37,000 square feet.',
    localProject: 'What to publish when the source disagrees with itself. Learners are given the two CSO Kerry releases side by side, the summary of 30 May 2023 giving 62,887 Irish speakers aged three and over and Profile 8 of 19 December 2023 giving 62,877, and must decide what to do. The taught answer is to print both, name the release and date against each, state the difference and say which was used and why, rather than silently selecting one or discarding the source. The second half is a structural trap measured in the CSO\'s own table F1010: filtered to Kerry County Council, the table returns one row per town-size band plus a row labelled "Ireland" which is in fact the Kerry total. The eight band rows, Towns 10,000+ 40,491, Towns 5,000-9,999 zero, Towns 2,000-4,999 12,059, Towns 1,500-1,999 3,289, Towns 1,000-1,499 2,415, Towns 500-999 6,274, Towns under 500 with at least 50 houses 5,471 and remainder of county 86,459, sum to exactly 156,458, the same as the row named "Ireland", so a script that sums every row in the column reports 312,916 and raises no error. Learners find the doubling themselves and then write the rule that totals often sit inside the same column as the parts. Kerry County Council\'s own open data footprint is also examined as a finding in itself: exactly three datasets on the national portal, all Creative Commons Attribution 4.0, none of them a downloadable table.',
    requiredMentions: [
      '156,458',
      '26,079',
      '14,412',
      '28,756',
      '62,887',
      '62,877',
      '38,084',
      '24.6 minutes',
      'V92 HD4V',
      'Listowel',
      '9,036',
      '44,200'
    ],
    sources: [
      { claim: 'CSO Kerry summary press statement, 30 May 2023: "the population of Kerry grew by 6% to 156,458, which means the number of people in the county rose by 8,751 between April 2016 and April 2022"; "79,071 were female and 77,387 were male"; average age 41.5 against 40.2; "There were 28,756 children aged 15 and under in Kerry in April 2022"; and "The number of people (aged three and over) who stated that they could speak Irish in Kerry was 62,887 compared with 61,597 in 2016."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultskerry/' },
      { claim: 'CSO Profile 8 Kerry, 19 December 2023: "The number of people (aged three and over) who could speak Irish in Kerry increased by almost 1,300 to 62,877 in Census 2022", the ten-person contradiction with the summary release; third level up from almost 35,700 to more than 44,200, 41 percent against a national 45 percent; Gaeltacht population 9,036, with 8,791 aged three and over and 6,068 able to speak Irish.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationkerry' },
      { claim: 'CSO Profile 1 Kerry: "Tralee was the largest town, with a population of 26,079 in April 2022"; Fieries the youngest town at average age 32.2 and Tarbert the oldest at 46; 65 percent (98,126) born in the county, 17 percent (26,341) elsewhere in the State and 18 percent (27,524) outside it.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementskerry/' },
      { claim: 'CSO Profile 7 Kerry: "There were more than 67,500 people at work in Kerry in April 2022. Of these, over 42,900 never worked from home, while more than 17,100 people worked from home at least some of the time"; "There were 58,541 people travelling to work in the county"; 38,084 driving, 652 by bus, 96 by train, 5,303 walking up from 4,812, 876 cycling; average journey time 24.6 minutes against 22.7 in 2016.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingkerry/' },
      { claim: 'CSO Profile 5 Kerry: non-Irish citizens 10 percent of the county, UK 3,783, Polish 3,362, Lithuanian 767, German 558; dual Irish citizens up from 3,039 in 2016 to 5,471.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionkerry' },
      { claim: 'CSO PxStat table F1013: Tralee 26,079 at 1,468.6 per sq km over 17.8 sq km; Killarney 14,412 at 1,576.9 over 9.1 sq km. Table F1016: Tralee LEA 35,922 and Killarney LEA 31,086.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat table F1010, filtered to Kerry County Council: the eight town-size band rows sum to exactly 156,458, matching the row labelled "Ireland", so summing all nine rows returns 312,916, double the county population.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1010/JSON-stat/2.0/en' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes "Coláiste na Ríochta, Listowel, Co. Kerry", the only Kerry entry.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Munster Technological University: "MTU Kerry North Campus is home to students pursuing qualifications in business, engineering, computing, creative media... It operates on a shared site with Kerry Technology Park... In fact, 25% of those working in the Technology Park are MTU graduates", with the campus address given as "MTU - Kerry Campus, Tralee, Kerry, Ireland. V92 HD4V."', url: 'https://www.mtu.ie/about-mtu/our-campuses/mtu-kerry-north-campus/' },
      { claim: 'Fexco: its own announcement of a new research, development and innovation building in Killorglin, County Kerry, states "Over 125 Fexco staff will work in 37,000 sq ft of the building", with the head office address given as Fexco Centre, Iveragh Road, Killorglin.', url: 'https://www.fexco.com/news-and-insights/fexco-opens-21m-research-and-development-facility/' },
      { claim: 'data.gov.ie, Kerry County Council publisher page: three datasets, all licensed Creative Commons Attribution 4.0, titled Co. Kerry Architectural Conservation Areas, Co. Kerry Record of Protected Structures and Co. Kerry Road Network, none of them a downloadable tabular file.', url: 'https://data.gov.ie/organization/kerry-county-council' }
    ],
    rejectedClaims: [
      'A single Kerry figure for Irish speakers presented without its release and date: two official releases give 62,887 and 62,877.',
      'The Fexco Killorglin eircode reported elsewhere as V93 WN9T, which does not appear on the company\'s own contact page.',
      'A county land area or population density figure for Kerry: the CSO publishes density only at electoral division and town level.',
      'Any county-to-county commuting destination figure: no such table was found at a primary source.',
      'The euro value of the Fexco investment, kept off the page so no euro figure sits near our USD fees.',
      'Treating the F1010 row labelled "Ireland" under the Kerry filter as a national figure: it is the Kerry total.'
    ]
  }
};
