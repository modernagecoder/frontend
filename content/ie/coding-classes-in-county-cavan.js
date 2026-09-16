'use strict';
// County Cavan (cg- county page, Ireland cluster, Phase 4). Spine: order and
// dates are data too. Cavan County Council publishes no datasets, so the project
// uses the CSO's county population table, and two traps in it that no other page
// in this cluster uses. First, the counties are stored in insertion order, not
// alphabetical order: the first six are Cork City, Clare, Cavan, Cork County,
// Carlow and Dublin City, so pairing values with an alphabetically sorted list
// by position mislabels the counties with no error raised.
// Second, the table's "updated" timestamp is 29 June 2023, while every figure in
// it describes census night, 3 April 2022, fourteen months earlier. NOT USED:
// the same table's "Ireland" pseudo-row that doubles a naive sum (Kerry and
// Fingal own it). REPUBLIC ONLY: Cavan borders Northern Ireland, the CSO's Cavan
// Profile 7 release contains no cross-border commuting sentence, and no Northern
// Ireland figure appears. Town-level unemployment for Belturbet is left off, as
// on the Roscommon page, and the county museum's euro admission prices are not
// reproduced. Facts read at primary sources on 16 September 2026.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY CAVAN', blurb: 'Cavan town, Virginia, Cootehill and Bailieborough, with a project on tables whose order and dates mislead.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-cavan',
  code: 'cvn',
  accent: '#863048',
  accentRationale: 'County Cavan: a lake-country crimson from the solver, distinct from the wines and clarets of the midland pages',
  pageType: 'governorate',
  place: {
    name: 'County Cavan',
    eyebrow: 'County Cavan, Ulster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-meath', name: 'County Meath' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'County Meath', href: '/coding-classes-in-county-meath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Cavan, Ireland',
  title: 'Coding Classes in County Cavan | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Cavan, from Cavan town and Virginia to Cootehill, Bailieborough, Kingscourt and Belturbet, ages 6 to 67.',
  ogDescription: 'Coding and AI classes for County Cavan, with a project on a table whose row order and update date both quietly mislead.',
  twitterDescription: 'Coding classes across County Cavan, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Cavan Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Cavan, taught live in English.'
  },

  h1: 'Coding classes in County Cavan',
  capsuleQ: 'What are the best coding classes in County Cavan?',
  capsule: 'Cavan is a young county by Irish standards. Its 81,704 people have an average age of 38.5, below the national 38.8, and 17,752 of them are aged 15 or under. Cavan town holds 11,741, then a run of similar-sized towns: Virginia 3,211, Bailieborough, Kingscourt and Ballyjamesduff each just under 3,000. Two Cavan schools were among the first forty to teach Leaving Certificate Computer Science. For our classes the first lesson is on us; a group place after that is USD 100 monthly and one to one USD 150, taught live each week to anyone aged six to sixty-seven.',
  lead: 'Here is a mistake that produces no error message and hands county after county the wrong population. The statistics office publishes its county table with Cavan third, after Cork City Council and Clare, and before Cork County Council, Carlow and Dublin City. That is neither alphabetical nor anything else obvious. It is simply the order the rows were stored in. Sort a list of county names alphabetically, line it up against those values by position, and Carlow gets Cork City\'s figure, Cavan gets Clare\'s, and so on down the list. Every number is real, every name is real, and the pairings are wrong. The same table also says it was updated in June 2023, for a count taken on a night in April 2022. Neither trap is exotic. Both are everywhere.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Cavan.',

  picks: {
    eyebrow: 'Course picks for County Cavan',
    h2: 'Starting points for a Cavan learner',
    intro: 'Choose by age and appetite; the first lesson confirms the choice. It is taught by the teacher who would take the course, and nobody asks for card details to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where two lists must stay lined up, and a shuffle in one breaks everything.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python built up steadily through the Junior Cycle, into Transition Year work with real tables.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Joining two tables by a key instead of by position, and proving the join worked.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who copy columns between spreadsheets and need to know the rows still match.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Cavan is third on the list',
      intro: 'Cavan County Council publishes no open datasets, so the project uses the national county population table and two things about it that fool careful people.',
      body: [
        { kind: 'table', caption: 'The first six counties as the table stores them, and as an alphabetical list would', head: ['Position', 'Stored order', 'Alphabetical order'], rows: [
          ['1', 'Cork City Council', 'Carlow County Council'],
          ['2', 'Clare County Council', 'Cavan County Council'],
          ['3', 'Cavan County Council', 'Clare County Council'],
          ['4', 'Cork County Council', 'Cork City Council'],
          ['5', 'Carlow County Council', 'Cork County Council'],
          ['6', 'Dublin City Council', 'Donegal County Council']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What goes wrong', p: 'Pair the two columns by row number and not one county in those six lines gets its own figure. The script runs, the chart draws and every bar carries a real county name above a real population belonging to somewhere else.' },
          { h3: 'How to catch it', p: 'Check one pair you already know. Cavan\'s population is 81,704. If the row labelled Cavan says anything else, the join is broken, and it takes ten seconds to find out.' },
          { h3: 'How to prevent it', p: 'Never match by position. Match by the code or name stored alongside each value, which the table provides for exactly this reason.' }
        ] },
        { kind: 'callout', h3: 'The second trap: updated is not the same as current', p: 'The table\'s own metadata gives an update date of 29 June 2023. The figures inside it describe the population on 3 April 2022, census night, fourteen months before. Anyone reading that timestamp as the date the numbers describe will think the data is more recent than it is. Nearly every published dataset has at least two dates attached to it, when the thing was measured and when the file was last touched, and they are routinely confused in reports, dashboards and news stories. A learner who asks which date a figure is actually as of has avoided an error most adults make without noticing.' },
        { kind: 'p', text: 'The written output is two short paragraphs. One explains why joining by position is unsafe and shows the one-pair check that exposes it. The other states, for every figure used in the project, the date it describes rather than the date the file changed. That second habit is worth a great deal more than it looks, because it is the difference between reporting how things were and implying how things are.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'A young county of middle-sized towns',
      intro: 'Taken from the statistics office\'s Cavan releases for Census 2022.',
      body: [
        { kind: 'table', caption: 'Cavan on census night 2022', head: ['What was counted', 'Result'], rows: [
          ['Residents', '81,704, up 5,528 or 7% since 2016'],
          ['Female and male', '40,644 and 41,060, or 101 males per 100 females'],
          ['Average age', '38.5, up from 37.2 and still below the national 38.8'],
          ['Aged 15 and under', '17,752, with 6,104 of them in childcare'],
          ['Non-Irish citizens', '12% of the county, led by Polish at 1,719, UK at 1,564 and Lithuanian at 1,398'],
          ['Holding dual Irish citizenship', '2,335, up from 1,297']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Cavan town', p: '11,741 people over 12.4 square kilometres, an average age of 35.8 and 24.3% under 15, a young town inside a young county.' },
          { h3: 'The ring of towns', p: 'Virginia 3,211, Bailieborough 2,974, Kingscourt 2,955, Ballyjamesduff 2,917, Cootehill 1,856, Mullagh 1,651 and Belturbet 1,610, which squeezes its population into a single square kilometre.' },
          { h3: 'Youngest and oldest', p: 'Among places of at least 500 people, Mullagh has the youngest average age at 34.1 and Cootehill the oldest at 40.4.' }
        ] },
        { kind: 'p', text: 'Irish is spoken by 26,591 of the 78,633 people aged three and over, 35.9%, up slightly on 2016, and Cavan has no Gaeltacht area. We teach in English and programming keywords are English in every language, so nothing on that front affects a learner here. The county\'s religious make-up has also shifted quickly: the Catholic share fell from 82% to 74% between the two censuses and the number stating no religion rose by 77% to almost 6,900.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Schools and travel',
      h2: 'Two first-wave schools and a thirty minute commute',
      intro: 'Cavan is one of the counties that had computer science in the Leaving Certificate from the very start.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Breifne College', p: 'Published on the January 2018 list at Cootehill Road, Cavan. The road is named for Cootehill but the school is in Cavan town, which is worth knowing before anybody files it under the wrong place.' },
          { h3: 'St Aidan\'s Comprehensive', p: 'In Cootehill itself, and the county\'s second school among the forty that began the subject in September 2018 and sat the first exam in 2020.' },
          { h3: 'Getting to school', p: 'The statistics office reports that Cootehill had the second highest rate in the country of primary pupils travelling to school by public transport, at 31%.' }
        ] },
        { kind: 'table', mt: true, caption: 'How Cavan gets to work', head: ['Mode or measure', 'People or time'], rows: [
          ['Travelling to work', '32,111'],
          ['By car', '21,127'],
          ['On foot', '2,075, up from 1,834'],
          ['By bicycle', '169, with Cavan and Donegal commuters the least likely in the country to cycle, at 0.5%'],
          ['Average journey', '30.7 minutes, up from 28.5 in 2016'],
          ['Working from home at least one day a week', '7,898 people, 22% of the workforce against 32% nationally']
        ] },
        { kind: 'spec', title: 'Where the first-wave schools leave everyone else', p: 'Two schools with the subject from the start is a real advantage for pupils at those two schools. For a teenager in Kingscourt, Belturbet or Virginia it changes very little, and with the average commute already past half an hour, a weekly evening trip into Cavan town for a class is a hard sell. Third level attainment here is 38% against 45% nationally, and the average age of finishing full time education, 19.8, is a year below the national figure, so the case for an accessible way to go further is strong.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Two Cavan addresses',
      h2: 'One county, two routing keys',
      intro: 'Both read on the organisation\'s own website.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Cavan County Museum', p: 'Virginia Road, Ballyjamesduff, eircode A82 YP70. It holds the Killycluggin Stone and a First World War trench that the museum describes as the largest outdoor replica trench open to the public in Ireland and the UK.' },
          { h3: 'Cavan County Council', p: 'Cavan Courthouse, Farnham Street, Abbeyland, Cavan, eircode H12 R6V2, a different routing key from the museum in the same county.' },
          { h3: 'The council\'s data', p: 'Its publisher page on the national portal lists no datasets at all, which is why the project above works from national statistics instead.' }
        ] },
        { kind: 'p', text: 'This page covers the Republic of Ireland only. Cavan borders Northern Ireland, but the statistics office\'s Cavan employment and commuting release says nothing about travel across the border, so we publish no figure for it and use no Northern Ireland statistic anywhere. Nor are we connected with Cavan County Council, the museum or either school. Population and travel figures are the statistics office\'s, and the stored order and update date described in the project were read directly from its published table.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From lining up lists to joining tables',
    intro: 'The age bands are guidance; the first lesson sets the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Keeping lists in step', p: 'Programs where names and scores live in two lists and must never slip out of line.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Checking a known answer', p: 'Testing any result against one fact you already know before believing the rest.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Joins by key', p: 'Merging real tables safely and recording the date each figure describes.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Spreadsheets that stay honest', p: 'Copying, merging and refreshing data at work without silently mismatching rows.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Generated code joins tables the way you describe them',
    intro: 'Say "line these up" and that is precisely what you will get.',
    p1: 'Ask for two lists to be combined and a tool will often pair them by position, because that is the literal meaning of the request and it works on every tidy example it has seen. On the county table it produces a clean, plausible, entirely wrong result, and nothing in the output hints at it, since every name and every number is individually genuine.',
    p2: 'The protection is not a better prompt. It is the ten-second habit of checking one pair you already know. Cavan is 81,704; if the row labelled Cavan says otherwise, stop. People who have been caught once by a positional join do that forever, and they are the people you want checking anything important.',
    closer: 'That is why the case for learning to program properly has, if anything, grown: somebody still has to know what a correct answer looks like.',
    blogAnchor: 'the case for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons reach Kingscourt, Belturbet and Virginia',
    intro: 'The practical shape of the teaching.',
    cells: [
      { h3: 'Live with a real teacher', p: 'Every lesson is taught as it happens, with questions both ways, rather than watched as a video.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at one ability level, gathered from Cavan and other countries, so nobody is waiting for the room to catch up.' },
      { h3: 'Weekly and fixed', p: 'Two lessons most weeks, about eight a month, at a slot agreed once and kept.' },
      { h3: 'Matched to Irish schooling', p: 'Junior Cycle through Leaving Certificate, with exam seasons and holidays planned around rather than ignored.' },
      { h3: 'At the kitchen table', p: 'A computer, sound that works and a connection able to carry video. The first lesson doubles as a test of all three.' },
      { h3: 'Private if it suits better', p: 'Where no group at the right level meets at a workable time, the same course is taught one to one.' }
    ],
    spec: { title: 'For the lake country and the border villages', p: 'Much of Cavan lives outside its towns, among lakes and small roads where a thirty minute drive is normal and a bus to an evening class is not. Gathering learners at the right level into one online group, at an hour fixed once for the whole term, reaches families that no class in a hall in Cavan town could.' }
  },

  fees: {
    h2: 'Cavan class fees',
    intro: 'Three figures, with nothing further to find.',
    first: 'A first lesson in full at no charge, which ends with a level and a recommendation.',
    group: 'Group lessons for a month, around eight of them, with five to ten learners at one level.',
    private: 'One to one lessons for a month on the same schedule.',
    closer: 'Monthly billing is in US dollars at the single rate we set for families outside India, so Cootehill and Cavan town pay the same and there is no euro price to compare it with. No payment is taken before a course and a time are agreed in that first lesson, and the pricing page spells out pauses, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Six Google reviews from families we teach, copied exactly',

  book: {
    h2: 'Arrange the first lesson',
    intro: 'Let us know the learner\'s age and interests. The opening hour is planned around them, from a Scratch game about keeping two lists in step to the county table that pairs every name with the wrong number.',
    success: 'Thank you. Somebody will be in touch about your County Cavan class shortly.'
  },

  faq: {
    h2: 'County Cavan coding class questions',
    intro: 'What Cavan families tend to ask first.',
    items: [
      { q: 'How many people live in County Cavan?', a: 'The 2022 census counted 81,704, up 5,528 or 7% since 2016, with an average age of 38.5, slightly younger than the country as a whole.' },
      { q: 'Which Cavan schools were among the first to teach Leaving Certificate Computer Science?', a: 'Two of the first forty: Breifne College on Cootehill Road in Cavan town, and St Aidan\'s Comprehensive School in Cootehill.' },
      { q: 'What is the Cavan data project?', a: 'Learners discover that the national county table stores Cavan third, not in alphabetical order, so pairing values by position mislabels the counties, and that its update date is fourteen months later than the census night its figures describe.' },
      { q: 'How big is Cavan town?', a: 'It held 11,741 people in 2022, with an average age of 35.8 and nearly a quarter of residents under 15.' },
      { q: 'Does this page include Northern Ireland?', a: 'No. Everything here is from Republic of Ireland sources, and the statistics office\'s Cavan commuting release contains no cross-border figure, so none is given.' },
      { q: 'Do you teach outside Cavan town?', a: 'Yes. Virginia, Bailieborough, Kingscourt, Ballyjamesduff, Cootehill and Belturbet all get exactly the same teacher at exactly the same hour.' },
      { q: 'What hours are lessons taught?', a: 'After school, evenings and weekend mornings. Our teaching staff are in India, which is four and a half hours ahead of Ireland in summer and five and a half in winter; the slot is fixed in the first lesson.' },
      { q: 'Is there a Modern Age Coders classroom in County Cavan?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Cavan coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Cavan',
    html: 'South of the county sit <a class="cg-inline-link" href="/coding-classes-in-county-meath">Meath</a> and <a class="cg-inline-link" href="/coding-classes-in-county-westmeath">Westmeath</a>, west lie <a class="cg-inline-link" href="/coding-classes-in-county-leitrim">Leitrim</a> and <a class="cg-inline-link" href="/coding-classes-in-county-longford">Longford</a>, and each has its own page. There is a plain comparison of online coding schools <a class="cg-inline-link" href="/best-online-coding-classes-ireland">here</a>, and every Irish page is gathered on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Cavan and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-meath', label: 'County Meath' },
    { href: '/coding-classes-in-county-leitrim', label: 'County Leitrim' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cvn .cg-hero-grid { align-items: start; gap: clamp(1.12rem, 3.17vw, 2.64rem); }
.cg-root.cg-cvn .cg-hero h1 { font-weight: 700; letter-spacing: -0.0184em; line-height: 1.067; }
.cg-root.cg-cvn .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.18rem; }
.cg-root.cg-cvn .cg-eyebrow { letter-spacing: 0.169em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cvn .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0131em; }
.cg-root.cg-cvn .cg-grid-3 { gap: clamp(1.05rem, 2.57vw, 2.05rem); }
.cg-root.cg-cvn .cg-table caption { letter-spacing: 0.029em; font-weight: 700; }
.cg-root.cg-cvn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cvn .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-cvn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-cvn .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'County Cavan, whose council area is the county, Census 2022 (CSO Cavan releases, Republic of Ireland only): population 81,704, up 5,528 (7 percent) since 2016, against State growth of 8 percent; 40,644 female and 41,060 male, 101 males per 100 females; average age 38.5 against 37.2 in 2016 and a national 38.8; 17,752 children aged 15 and under, of whom 6,104 (34 percent) were in childcare against 33 percent nationally. Towns: Cavan 11,741 at 947.4 per sq km over 12.4 sq km, average age 35.8, 24.3 percent under 15; Virginia 3,211, average age 36.3; Bailieborough 2,974, average age 38.3; Kingscourt 2,955; Ballyjamesduff 2,917, average age 34.9; Cootehill 1,856 at 905.8 over 2.0 sq km; Mullagh 1,651; Belturbet 1,610 at 1,563.5 over 1.0 sq km, average age 40.1. Mullagh is youngest at average age 34.1 and Cootehill oldest at 40.4 among places of at least 500 people. Citizenship: non-Irish 12 percent, Polish 1,719, UK 1,564, Lithuanian 1,398, Latvian 783; dual Irish citizens up from 1,297 to 2,335. Religion: almost 61,000 Catholics (74 percent), down from 82 percent; almost 6,900 stating no religion, up 77 percent from just over 3,900. Work and travel (Profile 7): almost 34,400 at work; 7,898 working from home at least one day a week, 22 percent against 32 percent nationally; 32,111 travelling to work, 21,127 by car, 562 by bus, 33 by train, 2,075 on foot up from 1,834, and 169 by bicycle, with "Working commuters in both Cavan and Donegal ... the least likely to cycle to work with only 0.5% doing so"; average journey time 30.7 minutes against 28.5 in 2016; "Cootehill had the second highest rate nationally of primary students going to school by public transport, at 31%". The release contains no sentence on cross-border commuting. Education and Irish: third level up from nearly 15,600 to almost 20,000, a rate of 38 percent against 45 percent nationally; average age of completing full time education up from 18.9 to 19.8 against a national 20.8; 26,591 of 78,633 people aged three and over could speak Irish, 35.9 percent, up from 25,210 and 35.4 percent; no Gaeltacht in Cavan under the CSO\'s seven-county definition. Schools: the gov.ie first-phase Leaving Certificate Computer Science list of 4 January 2018 includes two Cavan schools, "Breifne College / Cootehill Rd, Cavan, Co. Cavan", which is in Cavan town, and "St Aidan\'s Comprehensive School / Cootehill, Co. Cavan". Sites from their owners: Cavan County Museum, Virginia Road, Ballyjamesduff, A82 YP70, holding the Killycluggin Stone and a trench it describes as "the largest outdoor replica trench open to the public in Ireland and the UK"; Cavan County Council, Cavan Courthouse, Farnham St, Abbeyland, Cavan, H12 R6V2, a different routing key. Cavan County Council\'s data.gov.ie publisher page lists zero datasets.',
    localProject: 'Order and dates are data too. With no council datasets available, learners use CSO PxStat table F1010, population by administrative county and aggregate town size, 448 cells, and two traps in it that no other page in this cluster uses. One, stored order: the Administrative Counties dimension holds its categories in insertion order, the first six being Cork City Council, Clare County Council, Cavan County Council, Cork County Council, Carlow County Council and Dublin City Council, so Cavan is third rather than second as alphabetical order would place it. Pairing the values with an alphabetically sorted list of names by position assigns counties the wrong populations and raises no error, because each name and each value is individually genuine. The check that exposes it is one known pair: Cavan\'s population is 81,704, and any row labelled Cavan showing a different figure proves the join is broken. The fix is to join on the stored code or label, never on position. Two, metadata date against reference date: the table\'s updated field reads 29 June 2023, while every figure in it describes census night, 3 April 2022, fourteen months earlier, so reading the timestamp as the as-of date overstates how recent the data is. Output: a paragraph on positional joins with the one-pair check, and a statement of the as-of date for every figure used. Not used: the table\'s "Ireland" pseudo-county row that doubles a naive sum, which the Kerry and Fingal pages own.',
    requiredMentions: [
      '81,704',
      '11,741',
      '3,211',
      '17,752',
      '26,591',
      '21,127',
      '30.7 minutes',
      'A82 YP70',
      'H12 R6V2',
      '2,335',
      '7,898',
      '1,856'
    ],
    sources: [
      { claim: 'CSO Cavan summary press statement, 30 May 2023: "the population of Cavan grew by 7% to 81,704, which means the number of people in the county rose by 5,528 between April 2016 and April 2022. Over the same period, Ireland\'s population grew by 8%"; "The average age of Cavan\'s population in April 2022 was 38.5 years, compared to 37.2 years in April 2016. Nationally, the average age of the population was 38.8"; "40,644 were female and 41,060 were male"; "There were 17,752 children aged 15 and under in Cavan in April 2022. Of these 6,104 were in childcare (34%)"; "In Cavan, 7,898 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 22% of the workforce."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultscavan/' },
      { claim: 'CSO Profile 1 Cavan: "Cavan was the largest town, with a population of 11,741 in April 2022"; "Mullagh was the youngest with an average age of 34.1 years. The oldest was Cootehill, with an average age of 40.4 years."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementscavan/' },
      { claim: 'CSO PxStat tables F1013 and F1015: Cavan town 11,741 at 947.4 per sq km over 12.4 sq km, average age 35.8, 24.3 percent under 15; Virginia 3,211; Bailieborough 2,974; Kingscourt 2,955; Ballyjamesduff 2,917; Cootehill 1,856 at 905.8 over 2.0 sq km; Mullagh 1,651; Belturbet 1,610 at 1,563.5 over 1.0 sq km.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1015/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat table F1010: the Administrative Counties dimension stores categories in the order Cork City Council, Clare County Council, Cavan County Council, Cork County Council, Carlow County Council, Dublin City Council for its first six positions; the Cavan County Council grand total is 81,704; the table metadata gives updated 2023-06-29, for figures describing census night on 3 April 2022.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1010/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Cavan: "In Cavan non-Irish citizens accounted for 12% of the county\'s population. Among the non-Irish residents, the largest group were Polish citizens (1,719 people), followed by UK citizens (1,564), Lithuanian (1,398) and Latvian (783)"; dual Irish citizens up from 1,297 to 2,335; Catholic share 74 percent down from 82 percent; almost 6,900 stating no religion, up 77 percent.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligioncavan/' },
      { claim: 'CSO Profile 7 Cavan: "There were 32,111 people travelling to work in the county in April 2022. The majority of these drove to work, with 21,127 people driving to work by car"; 562 by bus, 33 by train; "2,075 people walked to work, up from 1,834 in 2016, while 169 people cycled"; "Working commuters in both Cavan and Donegal were the least likely to cycle to work with only 0.5% doing so"; "an average journey time of 30.7 minutes compared with 28.5 minutes in 2016"; "Cootehill had the second highest rate nationally of primary students going to school by public transport, at 31%". No sentence on cross-border commuting appears in the release.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingcavan/' },
      { claim: 'CSO Profile 8 Cavan: third level up from nearly 15,600 to almost 20,000, "a rate of 38% compared with 45% nationally"; average age of completing education up from 18.9 to 19.8 against a national 20.8; "There were 78,633 people aged three years and over living in Cavan in Census 2022. Of these, 26,591 people could speak Irish... Irish speakers made up 35.9% of the county\'s population"; Gaeltacht defined by the editor\'s note as electoral divisions in seven counties not including Cavan.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationcavan/' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes "Breifne College / Cootehill Rd, Cavan, Co. Cavan" and "St Aidan\'s Comprehensive School / Cootehill, Co. Cavan".', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Cavan County Museum: "Virginia Road, Ballyjamesduff, Cavan, A82YP70", "see the ancient Killycluggin Stone", and "the World War One Trench Experience, the largest outdoor replica trench open to the public in Ireland and the UK".', url: 'https://www.cavanmuseum.ie/' },
      { claim: 'Cavan County Council: "Cavan County Council, Cavan Courthouse, Farnham St, Abbeyland, Cavan, H12 R6V2".', url: 'https://www.cavancoco.ie/' },
      { claim: 'data.gov.ie, Cavan County Council publisher page: "Datasets 0 / Total Views 0", with a dataset search returning no results.', url: 'https://data.gov.ie/organization/cavan-county-council' }
    ],
    rejectedClaims: [
      'The F1010 "Ireland" pseudo-county row doubling a naive national sum: the County Kerry and Fingal pages own that trap.',
      'Any Northern Ireland or cross-border commuting figure: the CSO Cavan release contains none and the cluster covers the Republic only.',
      'Belturbet\'s town unemployment rate: accurate, but left off a page addressed to families in that town, as on the Roscommon page.',
      'The museum\'s euro admission prices: no euro figure is placed on a page carrying our USD fees.',
      'A county population density figure for Cavan: no CSO release or table publishes one.',
      'Any headcount for a named Cavan employer: nothing beyond a headline could be verified at a primary source.',
      'The "Cootehill Rd" address as a substring trap project: County Longford owns that, so it is stated here only as a geography note.'
    ]
  }
};
