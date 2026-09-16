'use strict';
// County Kilkenny (cg- county page, Ireland cluster, Phase 4). Spine: missing
// data is almost never missing at random. Measured in the council's own 2016
// road traffic counts file, published CC BY 4.0: the gaps in the two traffic
// columns track road classification exactly, because a different counting
// method applies to each class, and the road class column itself is
// contaminated with four rows of legend text that leaked out of the key. A
// second file supplies two more fresh traps, a sign convention and a supplier
// legitimately named TOTAL. DELIBERATELY NOT USED: that same purchase order
// file's embedded grand total, which doubles a naive column sum, because the
// County Kerry and Fingal pages already own that trap. No euro figure appears
// anywhere on this page, so nothing in a public spending file can be confused
// with our USD fees. Kilkenny has no school on the first-phase Leaving
// Certificate Computer Science list, stated plainly as a finding. Facts read at
// primary sources on 16 September 2026: the Kilkenny Summary, Profile 1, 5, 7
// and 8 press statements; PxStat F1013 and F1016; gov.ie's January 2018 list
// read in full; glanbia.com; heritageireland.ie; data.gov.ie. EXCLUDED: the
// 5,766 people counted under Kilkenny County Council as part of Waterford city
// and suburbs, which belong to the Waterford page.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY KILKENNY', blurb: 'Kilkenny city, Castlecomer and the south east, with a project on why gaps in data are never accidental.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-kilkenny',
  code: 'kkn',
  accent: '#8C4A00',
  accentRationale: 'County Kilkenny: a burnt amber from the solver, set apart from the browns used on the other south eastern pages',
  pageType: 'governorate',
  place: {
    name: 'County Kilkenny',
    eyebrow: 'County Kilkenny, Leinster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-waterford', name: 'Waterford' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Waterford', href: '/best-coding-class-in-waterford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Kilkenny, Ireland',
  title: 'Coding Classes in County Kilkenny | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Kilkenny, from Kilkenny city and Castlecomer to Thomastown and Callan, ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and AI classes for County Kilkenny, built on a project about why the gaps in a dataset are usually the most informative part of it.',
  twitterDescription: 'Coding classes across County Kilkenny, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Kilkenny Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Kilkenny, taught live in English.'
  },

  h1: 'Coding classes in County Kilkenny',
  capsuleQ: 'What are the best coding classes in County Kilkenny?',
  capsule: 'Kilkenny is a county of 104,160 people, 21,094 of them aged 15 and under, with one large town and a great many small ones: the city holds 27,184 while Castlecomer holds 1,496. Nobody in this county sat the first cohort of Leaving Certificate Computer Science, because no Kilkenny school was on that first list. Our classes run live, in ability groups of five to ten or one to one, for anyone from six years old to sixty-seven. The opening lesson costs nothing; after that a group place is USD 100 a month and a private one is USD 150.',
  lead: 'Open Kilkenny County Council\'s road traffic file and two columns are full of blanks. The temptation is to fill them in, average them out, or drop the rows. Look closer and the blanks are the most informative thing in the file. Every local road has one column filled and the other empty. Every motorway has the opposite. The gaps are not accidental and they are not random: they record which counting method was used on which class of road. Fill them in and you have invented traffic that nobody measured. This is one of the deepest ideas in working with data, it is visible here in a small public spreadsheet from a small Irish county, and a fifteen year old can see it in an afternoon.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Kilkenny.',

  picks: {
    eyebrow: 'Course picks for County Kilkenny',
    h2: 'Four courses, by age and appetite',
    intro: 'Each begins with a free lesson from the teacher who would take the course. Nothing is charged and no card details are collected before a family decides.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where some of the information is missing on purpose, and the program has to cope rather than pretend.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python plus a grounded first look at what a generated answer is actually made of.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real spreadsheets with real gaps, and the difference between a blank and a zero.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who inherit other people\'s files and have to decide what the empty cells mean.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The blanks are the data',
      intro: 'Two council files, four traps, and one idea that changes how somebody reads every spreadsheet afterwards.',
      body: [
        { kind: 'table', caption: 'What the gaps in the 2016 traffic counts actually track', head: ['Road class', 'Daily traffic column', 'Annual daily traffic column'], rows: [
          ['Local primary, 11 sites', 'Reported', 'Blank in every one'],
          ['Local secondary, 4 sites', 'Reported', 'Blank in every one'],
          ['Motorway, 6 sites', 'Blank in every one', 'Reported'],
          ['Regional and national roads', 'Mixed', 'Mixed'],
          ['What that means', 'The gaps follow the counting method, not chance', 'So averaging or filling them invents numbers']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Missing at random, and not', p: 'Statistics has a name for the assumption most people make without noticing: that a blank could have landed anywhere. Here it could not. Knowing the road class tells you exactly which cell will be empty.' },
          { h3: 'The legend that leaked', p: 'The road class column holds M, NP, NS, LP, LS and R, and also four rows of explanatory text that escaped from the key, including one that describes heavy vehicles and misspells commercial. Group by that column and you invent four road types that do not exist.' },
          { h3: 'What a learner writes', p: 'Not an imputation. A sentence: these columns are not comparable across road classes, here is why, and here is the question we can still answer with them.' }
        ] },
        { kind: 'callout', h3: 'Two more traps, from the council\'s spending file', p: 'The same council publishes quarterly purchase order files, and they contain two beautiful hazards that have nothing to do with arithmetic. First, every value in the sheet carries a minus sign, all sixty of sixty, which is a bookkeeping convention rather than a claim that the council was paid. Second, one of the suppliers is a road maintenance company whose registered name begins with the word total. A tidy little script that deletes any row containing the word total, in order to strip out summary lines, quietly deletes a real transaction with a real company. The clever filter is the bug. We do not print any of the money figures from that file on this page, because a page with our fees on it is no place for somebody else\'s spending.' },
        { kind: 'p', text: 'A third finding from the same file is worth a sentence for its own sake: ten of the sixty rows share an order number with another row, and none of those is an error. The same order number is legitimately reused across several invoices and periods. Removing duplicates by order number, the most natural cleaning step in the world, throws away ten genuine transactions. Every one of these traps rewards reading the file before writing code against it, which is the entire lesson.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'One city and a scatter of small places',
      intro: 'Figures below are quoted from national statistics releases naming Kilkenny.',
      body: [
        { kind: 'table', caption: 'County Kilkenny at the 2022 census', head: ['What was counted', 'How many'], rows: [
          ['People in the county', '104,160, an increase of 4,928 since 2016'],
          ['Female and male', '52,277 and 51,883, or 99 males for every 100 females'],
          ['Average age', '39.7 years, up from 37.9'],
          ['Children aged 15 and under', '21,094'],
          ['Born in the county', '59,811 people, 58% of residents'],
          ['Able to speak Irish, aged three and over', '41,037, up by more than 2,300, or 42.8% of that group'],
          ['Holding dual Irish citizenship', '2,628, up from 1,604 in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A town and an area with one name', p: 'The town of Castlecomer holds 1,496 people. The electoral area called Castlecomer holds 24,863, more than sixteen times as many, because it is named after the town but covers a wide stretch of countryside.' },
          { h3: 'Why that matters here', p: 'Quote the wrong one and you are out by a factor of sixteen. Kilkenny city itself is 27,184 as a town and 29,653 as an electoral area, a much smaller gap, which is exactly why the error is easy to miss.' },
          { h3: 'Young and old', p: 'Among places of at least 500 people, Paulstown has the youngest average age at 33 years and Freshford the oldest at 45.3.' }
        ] },
        { kind: 'p', text: 'One more boundary is worth stating plainly, because it catches people out. Part of Waterford city\'s built-up area lies inside County Kilkenny, on the far side of the river, and the statistics office lists that settlement separately as belonging to two counties at once. Those residents are counted in Kilkenny\'s council figures and in Waterford\'s city figures, and neither is a mistake. This page uses only the standalone Kilkenny figures, and the Waterford city numbers stay on the Waterford page where they belong.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Schools, work and travel',
      h2: 'A county with no school on the first list',
      intro: 'The honest version of Kilkenny\'s computer science story, plus where the county works and how it gets there.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Zero, and we checked', p: 'We read all forty schools on the January 2018 first-phase list line by line. Not one address reads County Kilkenny. The nearest is in Waterford city, which is a different county.' },
          { h3: 'What that does not mean', p: 'It says nothing about Kilkenny schools today, and nothing about any pupil here. It means that when the subject started, the nearest cohort was across a county boundary.' },
          { h3: 'What it does mean for a family', p: 'If a teenager here wants to go further than their timetable allows, something outside the school has to provide it. That is the gap we exist to fill, and it is a plain statement rather than a criticism of anybody.' }
        ] },
        { kind: 'table', mt: true, caption: 'Working and commuting in Kilkenny, Census 2022', head: ['Measured', 'Count'], rows: [
          ['At work in the county', 'Almost 46,200 people'],
          ['Largest sector', 'Human health and social work, with more than 6,300'],
          ['Travelling to work', '40,560'],
          ['Driving', '27,846'],
          ['Walking and cycling', '3,537 and 565, with Kilkenny among the ten towns with the highest share of commuters cycling at 3.6%'],
          ['Average journey', '27 minutes, up from 25.6 minutes in 2016']
        ] },
        { kind: 'spec', title: 'Home working, and what it makes possible', p: 'More than 29,100 people in this county never work from home, while just over 12,900 do at least some of the time, which the statistics office puts at 28% of the workforce against 32% nationally. Nearly 3,100 are at home all five days. Those households already run on video calls at fixed times, which is exactly the shape of a weekly class.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Addresses, quoted exactly',
      h2: 'Where the county keeps its records',
      intro: 'Three Kilkenny addresses, each taken from the organisation that owns it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A plc registered office', p: 'Glanbia plc gives its registered office in its own annual general meeting notice as Leggetsrath Business Park, Carlow Road, Kilkenny, eircode R95 YTD5.' },
          { h3: 'A co-operative', p: 'The same document gives Tirlan Co-operative Society Limited at Abbey Quarter, Kilkenny, eircode R95 DXR1, a reminder that two organisations in one town can be closely related and still separate legal entities.' },
          { h3: 'A twelfth century castle', p: 'The Office of Public Works gives Kilkenny Castle at The Parade, Kilkenny City, eircode R95 YRK1, and describes it as the principal seat of the Butlers for almost 600 years.' }
        ] },
        { kind: 'p', text: 'We are not connected with Kilkenny County Council, Glanbia, Tirlan, the Office of Public Works or any school mentioned here. Population, education and travel figures are quoted from Central Statistics Office releases naming Kilkenny; the dataset counts, licences and every measurement described in the project are ours, taken from files the council publishes under a Creative Commons Attribution licence; and the absence of a Kilkenny school on the 2018 list comes from reading that list in full rather than from a summary of it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From an empty box to a stated assumption',
    intro: 'Ages guide the grouping. The free lesson decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Something is missing', p: 'Programs that behave properly when a piece of information simply is not there.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Blank is not zero', p: 'The difference between nothing recorded and a recorded nothing, in a real spreadsheet.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Patterns in the gaps', p: 'Cross-tabulating what is missing against everything else, and reporting what that shows.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Assumptions on the record', p: 'Writing down what you assumed about missing values, so a reviewer can disagree with it.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Every tool will offer to fill in the blanks for you',
    intro: 'Ask about missing values and you will be handed a mean, a median or a forward fill within seconds.',
    p1: 'All three are real techniques, and in the Kilkenny traffic file all three are wrong. Averaging annual daily traffic across road classes to fill the motorway gaps takes numbers produced by one counting method and uses them to invent numbers for another. The output looks complete. It is worse than the file with holes in it, because the holes at least told the truth.',
    p2: 'Nothing in the suggestion is dishonest. The tool cannot see that the missingness is structural, because that fact lives in how the counts were collected, not in the numbers themselves. Only somebody who looked at the file and asked why these cells and not those would ever find it.',
    closer: 'That question, asked before any code is written, is the habit we teach. It is also the one thing in this whole subject that gets more valuable as the tools get better.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The practical details for a Kilkenny family',
    intro: 'Six things worth knowing before the first lesson.',
    cells: [
      { h3: 'A person, not a playlist', p: 'Lessons are taught live by a teacher who expects the learner to talk, ask and get things wrong out loud.' },
      { h3: 'Scheduling across time zones', p: 'Our teaching team works from India, several hours ahead of Ireland, which is why afternoon and evening slots here are straightforward to fill.' },
      { h3: 'Grouped by what they can do', p: 'Five to ten learners at one level, gathered from Kilkenny and other countries, so a genuine peer group exists rather than a room of mixed abilities.' },
      { h3: 'Equipment', p: 'A laptop or desktop, sound that works, a steady connection. Tools are installed together in the first lessons.' },
      { h3: 'Term-time aware', p: 'Junior Cycle, Transition Year and the senior cycle are planned around, including mid-terms and exam weeks.' },
      { h3: 'Weekly, not occasional', p: 'Two lessons in most weeks, roughly eight a month, in a slot fixed at the start and then kept.' }
    ],
    spec: { title: 'Why the format fits this county', p: 'Kilkenny is one city surrounded by villages. Thomastown, Graiguenamanagh, Callan, Ballyragget and Castlecomer are each a real drive from the city, and 27,846 people here are already doing a daily drive of around 27 minutes to work. A weekly class that needs no car is the version that survives a wet February.' }
  },

  fees: {
    h2: 'What Kilkenny families pay',
    intro: 'Three lines, and the conditions in plain view.',
    first: 'The opening lesson is free and complete, ending with a level and a recommended course.',
    group: 'A month of group classes, around eight lessons, with five to ten learners at one level.',
    private: 'A month of one to one lessons on the same weekly rhythm.',
    closer: 'Billing is monthly and in US dollars, the one rate we use outside India, so a family in Graiguenamanagh pays exactly what a family in the city pays. Nothing is taken until a course and a weekly hour have been agreed in the free lesson, and the pricing page explains pauses, missed lessons and switching format.'
  },

  reviewsH2: 'Six reviews our families left on Google, unedited',

  book: {
    h2: 'Book the free lesson',
    intro: 'Give us the learner\'s age and what they are interested in. We shape the first hour around it, from a Scratch project with missing information to a real spreadsheet full of meaningful blanks.',
    success: 'Thank you. Somebody will be in touch about your County Kilkenny class shortly.'
  },

  faq: {
    h2: 'County Kilkenny coding class questions',
    intro: 'The things Kilkenny families ask first.',
    items: [
      { q: 'How many people live in County Kilkenny?', a: 'The 2022 census counted 104,160, an increase of 4,928 on 2016, including 21,094 children aged 15 and under.' },
      { q: 'Did any Kilkenny school offer Leaving Certificate Computer Science from the start?', a: 'No. We read the full list of forty first-phase schools published in January 2018 and no Kilkenny address appears on it. That is a statement about 2018, not about any school today.' },
      { q: 'What is the Kilkenny data project?', a: 'Students examine the council\'s own traffic counts file and discover that the gaps in it follow road classification exactly, so filling them in would invent traffic nobody measured.' },
      { q: 'How big is Kilkenny city?', a: 'The town itself held 27,184 people in 2022 and the surrounding electoral area 29,653. Castlecomer shows the same trap far more sharply: 1,496 in the town against 24,863 in the area named after it.' },
      { q: 'Is part of Waterford city in County Kilkenny?', a: 'Yes. The statistics office lists that settlement as spanning both counties. Those residents appear in Kilkenny council figures and in Waterford city figures, and this page uses only standalone Kilkenny numbers.' },
      { q: 'Do you teach children outside Kilkenny city?', a: 'Yes, and it makes no difference where they are. Thomastown, Callan, Ballyragget and Graiguenamanagh all get exactly the same class as the city at exactly the same hour.' },
      { q: 'When do classes run?', a: 'Afternoons, evenings and weekend mornings, at a slot fixed during the free lesson. Our teachers work several hours ahead of Irish time, which is what makes those slots easy to staff.' },
      { q: 'Is there a Modern Age Coders classroom in County Kilkenny?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Kilkenny coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The south east, and the rest',
    html: 'Kilkenny sits between <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a>, <a class="cg-inline-link" href="/coding-classes-in-county-carlow">County Carlow</a>, <a class="cg-inline-link" href="/coding-classes-in-county-wexford">County Wexford</a> and <a class="cg-inline-link" href="/coding-classes-in-county-tipperary">County Tipperary</a>, all of which have their own pages. For a straight comparison of online schools read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and the full index is on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Kilkenny and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-waterford', label: 'Waterford' },
    { href: '/coding-classes-in-county-carlow', label: 'County Carlow' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-kkn .cg-hero-grid { align-items: start; gap: clamp(1.21rem, 2.94vw, 2.44rem); }
.cg-root.cg-kkn .cg-hero h1 { font-weight: 700; letter-spacing: -0.0166em; line-height: 1.081; }
.cg-root.cg-kkn .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.27rem; }
.cg-root.cg-kkn .cg-eyebrow { letter-spacing: 0.176em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-kkn .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.0124em; }
.cg-root.cg-kkn .cg-grid-3 { gap: clamp(1.14rem, 2.36vw, 1.88rem); }
.cg-root.cg-kkn .cg-table caption { letter-spacing: 0.033em; font-weight: 700; }
.cg-root.cg-kkn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kkn .cg-table th { letter-spacing: 0.012em; }
.cg-root.cg-kkn .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.13rem; }
.cg-root.cg-kkn .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'County Kilkenny, Census 2022 (CSO Kilkenny releases): population 104,160, up 4,928 (5 percent) since 2016; 52,277 female and 51,883 male, 99 males per 100 females; average age 39.7 against 37.9 in 2016; 21,094 children aged 15 and under. Birthplace: 59,811 people (58 percent) born in the county, 28,716 (28 percent) elsewhere in the State, 14,308 (14 percent) outside the State. Towns (F1013): Kilkenny city 27,184 at 2,347.5 per sq km over 11.6 sq km; Castlecomer 1,496 at 1,363.7 over 1.1 sq km. Local electoral areas (F1016): Kilkenny 29,653 and Castlecomer 24,863, the latter more than sixteen times the Castlecomer town figure because the area is named after the town but covers a wide rural stretch. Among places of at least 500 people, Paulstown is youngest at average age 33 and Freshford oldest at 45.3. Citizenship: non-Irish citizens 8 percent of the county, largest groups UK 1,645, Polish 1,566, Indian 528, Romanian 414; dual Irish citizens up from 1,604 in 2016 to 2,628. Irish language: 41,037 people aged three and over could speak Irish, up by more than 2,300, which is 42.8 percent of that group against 41.5 percent in 2016, with no Gaeltacht in the county. Education: third level qualifications up from almost 24,900 in 2016 to nearly 30,600, a rate of 44 percent just below the national 45 percent. Work and travel (Profile 7): almost 46,200 at work; more than 29,100 never working from home against just over 12,900 who do at least some of the time, 28 percent of the workforce against 32 percent nationally, including almost 3,100 five days a week, 2,226 one day and 1,891 two days; 40,560 travelling to work, of whom 27,846 drive, 498 take the bus, 164 the train, 3,537 walk and 565 cycle, with Kilkenny among the top ten towns for commuter cycling at 3.6 percent; average journey time 27 minutes against 25.6 in 2016; human health and social work the largest sector at more than 6,300 workers. FINDING, stated plainly: no County Kilkenny school appears anywhere on the forty-school first-phase Leaving Certificate Computer Science list of 4 January 2018, established by reading the published list in full; the nearest listed school is in Waterford city, a different county. Addresses quoted from their owners: Glanbia plc registered office, Leggetsrath Business Park, Carlow Road, Kilkenny, R95 YTD5, and Tirlan Co-operative Society Limited, Abbey Quarter, Kilkenny, R95 DXR1, both from Glanbia\'s own 2026 annual general meeting notice; Kilkenny Castle, The Parade, Kilkenny City, R95 YRK1, described by the Office of Public Works as the principal seat of the Butlers for almost 600 years.',
    localProject: 'Missingness is structural, not accidental. Measured in Kilkenny County Council\'s own Road Traffic Counts 2016 file, published under Creative Commons Attribution 4.0: cross-tabulating road classification against missing values shows the gaps track the class exactly. All 11 local primary and all 4 local secondary sites report average daily traffic and leave annual average daily traffic blank; all 6 motorway sites do the reverse; regional and national roads are mixed. The blanks therefore record which counting methodology applied, so mean, median or forward fill imputation would manufacture traffic nobody measured. The same file carries a contaminated category column: the road class field, which should hold only M, NP, NS, LP, LS and R, also contains four rows of legend text that leaked out of the key, including one describing heavy commercial vehicles as a percentage and misspelling commercial, so a naive group-by invents four road types. Two further traps come from the council\'s quarterly purchase order file: every one of the 60 values carries a minus sign, a bookkeeping convention rather than income, and one supplier is a road maintenance company whose registered name begins with the word TOTAL, so a filter that deletes rows containing "total" in order to strip summary lines destroys a genuine transaction. A third: 10 of the 60 rows share an order number with another row and none is an error, the same order number being legitimately reused across invoices and periods, so removing duplicates by order number discards ten real transactions. NOT USED, because the Kerry and Fingal pages already own it: the same purchase order file embeds its grand total as a 60th data row, doubling a naive column sum. No monetary figure from either file appears on the page.',
    requiredMentions: [
      '104,160',
      '27,184',
      '59,811',
      '21,094',
      '41,037',
      '27,846',
      '3.6%',
      'R95 YTD5',
      'R95 YRK1',
      '24,863',
      '2,628',
      '6,300'
    ],
    sources: [
      { claim: 'CSO Kilkenny summary press statement, 30 May 2023: "the population of Kilkenny grew by 5% to 104,160, which means the number of people in the county rose by 4,928 between April 2016 and April 2022"; "52,277 were female and 51,883 were male"; average age 39.7 against 37.9; "There were 21,094 children aged 15 and under in Kilkenny in April 2022."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultskilkenny/' },
      { claim: 'CSO Profile 1 Kilkenny: "Kilkenny was the largest town, with a population of 27,184 in April 2022"; Paulstown the youngest town at average age 33 and Freshford the oldest at 45.3; 58 percent (59,811) born in the county, 28 percent (28,716) elsewhere in the State and 14 percent (14,308) outside it.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementskilkenny/' },
      { claim: 'CSO PxStat table F1013: the standalone rows "Kilkenny, Co Kilkenny" 27,184 at 2,347.5 per sq km and "Castlecomer, Co Kilkenny" 1,496 at 1,363.7, kept separate from the row "Waterford city and suburbs, Counties Waterford & Kilkenny". Table F1016: Kilkenny LEA 29,653 and Castlecomer LEA 24,863.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Kilkenny: non-Irish citizens 8 percent of the county, UK 1,645, Polish 1,566, Indian 528, Romanian 414; dual Irish citizens up from 1,604 in 2016 to 2,628.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionkilkenny' },
      { claim: 'CSO Profile 7 Kilkenny: "There were almost 46,200 people at work in Kilkenny in April 2022. Of these, more than 29,100 never worked from home while just over 12,900 people worked from home at least some of the time"; "There were 40,560 people travelling to work in the county"; 27,846 driving, 498 by bus, 164 by train, 3,537 walking, 565 cycling; "Kilkenny was among the top 10 towns with the highest percentage of work commuters cycling at 3.6%"; average journey time 27 minutes against 25.6 in 2016; "Human Health and Social Work Activities accounted for the largest number of workers in the county with more than 6,300."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingkilkenny' },
      { claim: 'CSO Profile 8 Kilkenny: "The number of people (aged three and over) who could speak Irish in Kilkenny increased by more than 2,300 to 41,037 in Census 2022. This was 42.8% of the county\'s population aged three and over"; third level up from almost 24,900 to nearly 30,600, a rate of 44 percent just below the national 45 percent.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationkilkenny' },
      { claim: 'Department of Education, 4 January 2018: the full forty-school first-phase Leaving Certificate Computer Science list contains no County Kilkenny address, established by reading the published list in full.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Glanbia plc Notice of Annual General Meeting, 25 March 2026: "REGISTERED OFFICE ... Leggetsrath Business Park, Carlow Road, Kilkenny, R95 YTD5", and Tirlan Co-operative Society Limited at "Abbey Quarter, Kilkenny, R95 DXR1".', url: 'https://www.glanbia.com/sites/glanbia-plc/files/glanbia/investors/agm/2026/Glanbia-plc-Notice-of-AGM-25-March-2026.pdf' },
      { claim: 'Office of Public Works, Heritage Ireland: "Built in the twelfth century, Kilkenny Castle was the principal seat of the Butlers, earls, marquesses and dukes of Ormond for almost 600 years", at "The Parade, Kilkenny City, R95 YRK1".', url: 'https://www.heritageireland.ie/places-to-visit/kilkenny-castle/' },
      { claim: 'data.gov.ie, Kilkenny County Council publisher page: 18 datasets, each licensed Creative Commons Attribution 4.0, including the road traffic counts and quarterly purchase order files used in the project.', url: 'https://data.gov.ie/organization/kilkenny-county-council' },
      { claim: 'Kilkenny Road Traffic Counts 2016, measured by us: all 11 local primary and all 4 local secondary rows report average daily traffic with annual average daily traffic blank; all 6 motorway rows do the reverse; the road class column also contains four rows of legend text, one misspelling commercial.', url: 'https://data.gov.ie/dataset/kilkenny-road-traffic-counts-2016' }
    ],
    rejectedClaims: [
      'The purchase order file\'s embedded grand total, which doubles a naive column sum: the County Kerry and Fingal pages already carry that trap.',
      'Any euro figure from the council\'s spending or purchase order files, kept off a page that also states our fees.',
      'The 5,766 people counted under Kilkenny County Council as part of Waterford city and suburbs: that figure belongs to the Waterford page.',
      'Any claim that Kilkenny schools do not teach computer science today: the finding concerns the January 2018 first-phase list only.',
      'A county land area or population density figure for Kilkenny: the CSO publishes density only at electoral division and town level.',
      'Any claim about how many Kilkenny residents commute into Waterford: no such table was found at a primary source.',
      'Any assumption that the traffic file\'s missing values could be imputed: the missingness tracks road classification exactly.'
    ]
  }
};
