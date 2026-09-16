'use strict';
// County Roscommon (cg- county page, Ireland cluster, Phase 4). Spine: how a
// missing value is written down decides whether your tools can see it. Measured
// in Roscommon County Council's Record of Protected Structures, CC BY 4.0, 559
// records: the TOWN column records "no town" five different ways, na 93 times,
// blank 3, n/a 3, Na 2 and NA 1, which is 102 rows or 18.2 per cent. pandas with
// its default settings (3.0.0 as measured) recognises only 7 of them, so a plain
// value count reports "na" as the second most common town in the county with
// 93 structures, behind Boyle at 109 and ahead of Roscommon town at 91. A second
// fresh trap in the same file: 679 lines but 559 records, because long text
// fields contain line breaks inside quotes. Supporting: Ballaghaderreen is
// spelled Ballaghdereen in 18 of its 19 rows. NOT USED: the two coordinate
// systems in the same file (County Cork owns coordinate-system traps), the
// duplicated registration number (Kilkenny owns non-unique keys), the three
// electoral areas that sum to the county total (County Galway), and the Athlone,
// Carrick-on-Shannon and Lanesborough-Ballyleague cross-county towns (Louth and
// Carlow), which appear as one labelling note. Facts read at primary sources on
// 16 September 2026.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY ROSCOMMON', blurb: 'Roscommon town, Boyle and Castlerea, with a project on a missing value spelled five ways.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-roscommon',
  code: 'rsc',
  accent: '#2C5E44',
  accentRationale: 'County Roscommon: a pasture green from the solver, set apart from the teals of the north west pages',
  pageType: 'governorate',
  place: {
    name: 'County Roscommon',
    eyebrow: 'County Roscommon, Connacht',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-galway', name: 'County Galway' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'County Galway', href: '/coding-classes-in-county-galway' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Roscommon, Ireland',
  title: 'Coding Classes in County Roscommon | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Roscommon, from Roscommon town and Boyle to Castlerea, Ballaghaderreen and Strokestown, ages 6 to 67.',
  ogDescription: 'Coding and AI classes for County Roscommon, with a project on a council file where the second biggest town appears to be called na.',
  twitterDescription: 'Coding classes across County Roscommon, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Roscommon Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Roscommon, taught live in English.'
  },

  h1: 'Coding classes in County Roscommon',
  capsuleQ: 'What are the best coding classes in County Roscommon?',
  capsule: 'Roscommon grew by 5,715 people between the last two censuses to reach 70,259, a little faster than the country. Its largest town, Roscommon itself, has 6,555 residents; Boyle, Ballaghaderreen and Castlerea each hold between two and three thousand. Seven in ten commuters here drive, the joint highest share in Ireland. A free trial lesson comes first. After it, a seat in a small ability group costs USD 100 a month and private tuition USD 150, all of it taught live at a set time each week to learners from six up to sixty-seven.',
  lead: 'Open the county council\'s list of protected buildings in any ordinary data tool and ask it which towns hold the most. Boyle comes first with 109. Second, with 93 structures, is a town called na. There is no such town. Somebody typing into a form wrote na when a building had no town, and a colleague wrote n/a, and another left it blank, and others wrote NA and Na. Five spellings of nothing, and pandas, a very widely used analysis library, left on its defaults, recognises three of them and treats the other ninety-five rows as a real place. The file is honest, public and licensed for reuse. It just records absence in a way software was never told about, which happens in almost every spreadsheet anybody inherits.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Roscommon.',

  picks: {
    eyebrow: 'Course picks for County Roscommon',
    h2: 'Where a Roscommon learner begins',
    intro: 'Pick by age and interest. The trial lesson is given by the teacher who would take the course, and you are never asked for card details to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where an empty box, a zero and the word none all have to be handled differently.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python first steps, and an early lesson in checking what a program has actually read in.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'A real council file of 559 buildings, cleaned properly and then mapped.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults whose reports are built on spreadsheets typed by many different people.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The second biggest town is called na',
      intro: 'Roscommon County Council\'s Record of Protected Structures, 559 buildings, examined before any chart is drawn.',
      body: [
        { kind: 'table', caption: 'How the TOWN column says "no town", counted row by row', head: ['Written as', 'Rows', 'Seen as missing by default?'], rows: [
          ['na', '93', 'No, read as a town name'],
          ['n/a', '3', 'Yes'],
          ['A blank cell', '3', 'Yes'],
          ['Na', '2', 'No, read as a town name'],
          ['NA', '1', 'Yes'],
          ['All five together', '102 of 559, or 18.2%', 'Only 7 caught automatically']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the naive count says', p: 'Boyle 109, na 93, Roscommon 91, then Castlerea 33 and Strokestown 25. A chart made from that would put a non-existent town in second place, above the county town itself.' },
          { h3: 'The line count that lies too', p: 'The downloaded file has 679 lines, one of them the header, but only 559 records. Long descriptions of the buildings contain line breaks inside quotation marks, so counting lines instead of reading the format overstates the rows by 119.' },
          { h3: 'A town spelled two ways', p: 'Ballaghaderreen appears correctly once and as Ballaghdereen eighteen times. Group by that column and one town becomes two, with nearly all of its buildings under the misspelling.' }
        ] },
        { kind: 'callout', h3: 'Why missing values are a design decision, not an accident', p: 'Every system that collects information has to decide how to write down that something is not known. Most never decide, so each person entering data improvises, and the file ends up with a blank here, a dash there, na, n/a, unknown and zero all meaning the same thing. Software then has to guess which of those are absence and which are data, and its guesses are conservative by design. The fix is never cleverness afterwards. It is a list, written before any analysis, of every way this particular file says nothing, which is exactly what the table above is.' },
        { kind: 'p', text: 'The deliverable is a short cleaning note and one honest chart. The note lists the five spellings of missing, the line-versus-record gap and the split town name. The chart shows protected structures by town with those fixed and with the unknown-town rows reported as their own labelled bar rather than quietly dropped, because 102 buildings without a recorded town is a fact about the register worth showing. The file is published under a Creative Commons Attribution licence and was last edited in December 2022, and the page says so.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Roscommon by the numbers',
      intro: 'Everything below is quoted from the statistics office\'s Roscommon releases.',
      body: [
        { kind: 'table', caption: 'Roscommon, April 2022', head: ['Item', 'Census 2022'], rows: [
          ['Residents', '70,259, up 5,715 or 9% since 2016, against 8% for the State'],
          ['Women and men', '35,089 and 35,170, or 100 males for every 100 females'],
          ['Average age', '40.8, up from 39.7'],
          ['Born outside the State', '12,948 people, 19%, up from 16% in 2016'],
          ['Dual Irish citizens', '2,043, up from 1,152'],
          ['Third level qualifications', 'More than 19,000 people, a rate of 40% against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Roscommon town', p: '6,555 people across 7.0 square kilometres, with an average age of 38.4 and 22.8% of residents under 15, younger than the county as a whole.' },
          { h3: 'The other towns', p: 'Boyle 2,915, Ballaghaderreen 2,387, Castlerea 2,348 and Strokestown 850. Ballaghaderreen and Termonbarry share the youngest average age at 36.8, and Boyle is oldest at 43.9.' },
          { h3: 'Where people come from', p: 'Only 41% of residents were born in the county and a further 40% elsewhere in the State. The largest non-Irish groups are UK citizens at 2,239, Polish at 1,228, Brazilian at 547 and Lithuanian at 433.' }
        ] },
        { kind: 'p', text: 'Three of the larger places people associate with Roscommon are recorded by the statistics office as towns shared with a neighbouring county: Athlone with Westmeath, Carrick-on-Shannon with Leitrim, and Lanesborough-Ballyleague with Longford. Their published populations describe the whole town on both sides of the line, so none of them is quoted here as a Roscommon figure.' }
      ]
    },
    {
      id: 'roads', tint: 'tint', eyebrow: 'Travel and work',
      h2: 'The county that drives furthest',
      intro: 'Two national comparisons, both stated by the statistics office itself.',
      body: [
        { kind: 'table', caption: 'Getting to work from Roscommon', head: ['Reported', 'Value'], rows: [
          ['Commuters', '26,488'],
          ['Travelling by car', '18,552, which is 70% of working commuters and the joint highest rate in the country'],
          ['Average distance', '24.9 kilometres, the second longest in the country'],
          ['Average journey time', '29.1 minutes, up from 26.4 in 2016'],
          ['At work', 'More than 29,600, up 15% since 2016, with unemployment at 8% against 13%'],
          ['Working from home at least one day a week', '7,861 people, 27% of the workforce against 32% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What 24.9 kilometres means', p: 'That is the average one-way distance to work. A parent who has already covered it twice in a day is not keen to add an evening round trip to Roscommon town or Athlone for a class.' },
          { h3: 'The trains that do run', p: 'Irish Rail\'s Roscommon station at Abbeytown carries eircode F42 KF85 and Castlerea on Church Road F45 HH34, both on the Westport and Ballina line out of Heuston, with free parking at each.' },
          { h3: 'Participation', p: 'Labour force participation is 58% against 61% nationally, partly a reflection of an average age more than two years above the national one.' }
        ] },
        { kind: 'spec', title: 'Why an online class fits a driving county', p: 'Where 70% of commuters already drive and the average trip is among the longest in Ireland, every activity that needs a car competes with work for the same hours and the same fuel. A weekly lesson that arrives at the kitchen table is not a second-best version of a class in a hall. For a family outside the towns it is usually the only version that survives the winter.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Places in the county',
      h2: 'Three visitor sites and a council office',
      intro: 'Each checked on the website of the organisation that runs it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'King House, Boyle', p: 'A restored Georgian mansion on Military Road, eircode F52 WR26, presenting over 400 years of Irish history and housing the Mary McAleese Collection and the Boyle Civic Art Collection.' },
          { h3: 'Lough Key Forest Park', p: 'Coillte describes a 350 hectare estate on the N4 between Boyle and Carrick-on-Shannon, one of its flagship destinations with almost 200,000 visits recorded in 2025.' },
          { h3: 'Strokestown Park', p: 'Home of the National Famine Museum, eircode F42 H282, cared for by the Irish Heritage Trust, an independent charity.' }
        ] },
        { kind: 'p', text: 'Roscommon County Council itself is at Aras an Chontae, Roscommon, F42 VR98, and it publishes 187 datasets on the national data portal, which is why this page has a real file to work with rather than a note about an empty catalogue. None of these organisations is connected with us, and nor is any school. We checked the January 2018 list of forty schools that started Leaving Certificate Computer Science first and Roscommon does not appear on it, which is a statement about that list only. The census figures are the statistics office\'s; the counts in the project are ours, taken from the council\'s published file.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From an empty box to a cleaning note',
    intro: 'Treat the ages as rough. Placement happens in the trial lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Nothing is something', p: 'Games that must behave sensibly when a box is empty, zero, or says none.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'What did it read in?', p: 'Loading a small file and checking it matches what is on screen before trusting any total.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Cleaning with a record', p: 'Fixing a real public file and writing down every change so someone else could repeat it.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Many hands, one sheet', p: 'Working with data typed by lots of people without inheriting all of their habits.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A summary of that file would mention the town of na',
    intro: 'Not because anything is broken, but because nothing told the reader that na means nothing.',
    p1: 'Hand the protected structures file to any automated summary and ask for the towns with the most listed buildings. The honest arithmetic produces na in second place, and a fluent paragraph will describe it with the same confidence as Boyle. The error is not in the arithmetic. It is upstream, in how absence was typed, and it is invisible to anything that only reads the values.',
    p2: 'A learner who has once counted the five spellings of nothing looks for them in every file afterwards. That is a small habit with a large effect, because the people entering data never stop improvising and the tools will never be told what they meant.',
    closer: 'Knowing what a blank really is remains a human judgement in 2026, and it is one of the most useful things a young programmer can be good at.',
    blogAnchor: 'is learning to code still worth it in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The format, plainly',
    intro: 'What happens each week for a learner anywhere between Boyle and Athlone.',
    cells: [
      { h3: 'Taught, not recorded', p: 'A real teacher runs every lesson live and the learner is expected to answer, ask and try things out loud.' },
      { h3: 'Placed with equals', p: 'Five to ten learners working at the same level, drawn from Roscommon and a number of other countries so the match is genuine.' },
      { h3: 'The same slot each week', p: 'Normally two lessons weekly, about eight a month, at a day and time fixed at the start.' },
      { h3: 'Irish school rhythm', p: 'Junior Cycle, Transition Year and the Leaving Certificate years, with holidays and exam weeks planned around.' },
      { h3: 'A home setup', p: 'A computer rather than a phone, sound that works and a connection steady enough for video. The trial lesson confirms it.' },
      { h3: 'One to one when needed', p: 'If no group at the right level meets at a time that suits, we teach the learner privately instead.' }
    ],
    spec: { title: 'For the western half of the county', p: 'Castlerea, Ballaghaderreen and the villages around Frenchpark and Loughglynn are a long way from any town with a computing club, and a train timetable is no help to a fourteen year old who wants a class on a Tuesday evening. An online group at the right level, meeting at a fixed hour, is the arrangement that actually reaches them.' }
  },

  fees: {
    h2: 'What classes cost in Roscommon',
    intro: 'Three prices, stated once.',
    first: 'The trial lesson: complete, free, and ending with a level and a suggested course.',
    group: 'Monthly group place, around eight lessons, with five to ten learners at one level.',
    private: 'Monthly one to one teaching on the same weekly pattern.',
    closer: 'Invoices are monthly and in US dollars, the one rate we use for families outside India, so Strokestown and Roscommon town pay the same and no second currency is involved. You pay nothing until the trial lesson has settled a course and a time. The pricing page covers pauses, missed lessons and switching format.'
  },

  reviewsH2: 'Six reviews families left for us on Google, unaltered',

  book: {
    h2: 'Book the trial lesson',
    intro: 'Tell us how old the learner is and what they like doing. We plan the first hour around that, whether it is a first Scratch game or a real council file with a town called na in it.',
    success: 'Thank you. Somebody will be in touch about your County Roscommon class shortly.'
  },

  faq: {
    h2: 'County Roscommon coding class questions',
    intro: 'Asked most often by Roscommon families.',
    items: [
      { q: 'How many people live in County Roscommon?', a: 'The 2022 census counted 70,259, which is 5,715 more than in 2016 and growth of 9%, slightly ahead of the State.' },
      { q: 'What is the Roscommon data project?', a: 'Learners examine the council\'s register of 559 protected buildings and find that "no town" is written five different ways, so a basic count makes na look like the second biggest town. They clean it and document every step.' },
      { q: 'How big are the main towns?', a: 'Roscommon town had 6,555 residents in 2022, Boyle 2,915, Ballaghaderreen 2,387, Castlerea 2,348 and Strokestown 850.' },
      { q: 'Why does the page say Roscommon commuters drive further?', a: 'Because the statistics office says so: an average of 24.9 kilometres to work, the second longest in the country, with 70% going by car, the joint highest rate.' },
      { q: 'Was a Roscommon school among the first to offer Leaving Certificate Computer Science?', a: 'No. Roscommon does not appear on the January 2018 list of forty schools that started first. That tells you about that list, not about what schools offer now.' },
      { q: 'Does Roscommon have a Gaeltacht?', a: 'No. The statistics office defines the Gaeltacht by electoral divisions in seven named counties, and Roscommon is not one of them.' },
      { q: 'What time of day are lessons?', a: 'Mostly after school, in the evening and on weekend mornings. Our teachers are based in India, four and a half to five and a half hours ahead of Ireland depending on the season, and the exact slot is fixed in the trial lesson.' },
      { q: 'Is there a Modern Age Coders classroom in County Roscommon?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Roscommon coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Next door to Roscommon',
    html: 'The county touches several others with their own pages: <a class="cg-inline-link" href="/coding-classes-in-county-galway">County Galway</a> and <a class="cg-inline-link" href="/coding-classes-in-county-mayo">County Mayo</a> to the west, <a class="cg-inline-link" href="/coding-classes-in-county-leitrim">Leitrim</a> and <a class="cg-inline-link" href="/coding-classes-in-county-sligo">Sligo</a> to the north, and <a class="cg-inline-link" href="/coding-classes-in-county-westmeath">Westmeath</a> across the Shannon. If you want a side by side look at online schools, <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this comparison</a> covers it, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland page</a> lists everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Roscommon and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-galway', label: 'County Galway' },
    { href: '/coding-classes-in-county-westmeath', label: 'County Westmeath' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-rsc .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.21vw, 2.69rem); }
.cg-root.cg-rsc .cg-hero h1 { font-weight: 700; letter-spacing: -0.0193em; line-height: 1.064; }
.cg-root.cg-rsc .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.14rem; }
.cg-root.cg-rsc .cg-eyebrow { letter-spacing: 0.171em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rsc .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0138em; }
.cg-root.cg-rsc .cg-grid-3 { gap: clamp(1.07rem, 2.55vw, 2.04rem); }
.cg-root.cg-rsc .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-rsc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rsc .cg-table tr:last-child td { font-weight: 600; }
.cg-root.cg-rsc .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.01rem; }
.cg-root.cg-rsc .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'County Roscommon, a single-tier council area covering the county, Census 2022 (CSO Roscommon releases): population 70,259, up 5,715 (9 percent) since 2016, against State growth of 8 percent; 35,089 female and 35,170 male, 100 males per 100 females; average age 40.8 against 39.7 in 2016 and a national 38.8. Towns: Roscommon 6,555 at 936.8 per sq km over 7.0 sq km, average age 38.4 with 22.8 percent under 15; Boyle 2,915 at 540.0 over 5.4 sq km; Castlerea 2,348 at 1,038.9, average age 43.0; Ballaghaderreen 2,387, average age 36.8 with 24.9 percent under 15; Strokestown 850, average age 43.1. Ballaghaderreen and Termonbarry share the youngest average age at 36.8 and Boyle is oldest at 43.9. The CSO records Athlone (Westmeath and Roscommon, 22,869), Carrick-on-Shannon (Leitrim and Roscommon, 4,743) and Lanesborough-Ballyleague (Roscommon and Longford, 1,733) as cross-county built-up areas, none quoted as a Roscommon figure. Birthplace: 41 percent (28,743) born in the county, 40 percent (27,841) elsewhere in the State and 19 percent (12,948) outside the State, up from 16 percent. Citizenship: non-Irish 11 percent, UK 2,239, Polish 1,228, Brazilian 547, Lithuanian 433; dual Irish citizens up from 1,152 to 2,043. Work and travel (Profile 7): more than 29,600 at work, up 15 percent; unemployment 8 percent against 13 percent in 2016; participation 58 percent against 61 percent nationally; 7,861 people working from home at least one day a week, 27 percent against 32 percent nationally; 26,488 people travelling to work of whom 18,552 drove, "70% of working commuters went to work by car, the joint highest rate in the country"; "The average distance travelled by Roscommon commuters was 24.9km, the second longest in the country"; average journey time 29.1 minutes against 26.4 in 2016. Education: third level up from almost 14,800 to more than 19,000, a rate of 40 percent against 45 percent nationally. Roscommon has no Gaeltacht: the CSO defines it as electoral divisions in seven named counties, which do not include Roscommon. FINDING: no Roscommon school on the gov.ie first-phase Leaving Certificate Computer Science list of 4 January 2018. Sites from their owners: Roscommon County Council, Aras an Chontae, F42 VR98; King House, Military Road, Boyle, F52 WR26, a restored Georgian mansion housing the Mary McAleese Collection and the Boyle Civic Art Collection; Lough Key Forest Park, described by Coillte as a 350 hectare estate with almost 200,000 visits in 2025; Strokestown Park and the National Famine Museum, F42 H282, managed by the Irish Heritage Trust; Irish Rail stations at Roscommon, Abbeytown, F42 KF85, and Castlerea, Church Road, F45 HH34, both on the Dublin Heuston to Westport and Ballina route with free parking.',
    localProject: 'How a missing value is written decides whether software can see it. Roscommon County Council\'s Record of Protected Structures, County Development Plan 2022 to 2028, published on data.gov.ie under Creative Commons Attribution 4.0, has 559 records and 13 columns, a count confirmed against the ArcGIS service\'s own count endpoint, with the layer last edited on 8 December 2022. Measured: the TOWN column records the absence of a town five ways, "na" 93 times, blank 3, "n/a" 3, "Na" 2 and "NA" 1, for 102 rows or 18.2 percent. pandas 3.0.0 read_csv with default settings recognises only the blank, "NA" and "n/a" forms, so isna reports 7 and value_counts ranks "na" second with 93, behind Boyle at 109 and ahead of Roscommon at 91, then Castlerea 33 and Strokestown 25. Second trap: the downloaded CSV has 679 lines but csv parsing yields 559 records, because the APPRAISAL and FEATURES text fields contain line breaks inside quoted values, so line counting overstates the file. Third: Ballaghaderreen appears as "Ballaghdereen" in 18 of its 19 rows, splitting one town into two groups. Deliverable: a cleaning note listing every spelling of missing and each fix, plus a chart of structures by town with unknown-town rows shown as a labelled bar rather than dropped. Not used, because other pages own the trap: the Irish Grid and ITM coordinate columns (County Cork), registration number 04400070 appearing twice (Kilkenny), the three electoral areas summing to 70,259 (County Galway), and the cross-county towns (Louth and Carlow).',
    requiredMentions: [
      '70,259',
      '6,555',
      '2,915',
      '2,387',
      '18,552',
      '24.9 kilometres',
      'F42 VR98',
      'F52 WR26',
      'F45 HH34',
      '2,043',
      '7,861',
      '12,948'
    ],
    sources: [
      { claim: 'CSO Roscommon summary press statement, 30 May 2023: "the population of Roscommon grew by 9% to 70,259, which means the number of people in the county rose by 5,715 between April 2016 and April 2022. Over the same period, Ireland\'s population grew by 8%"; average age 40.8 against 39.7; "35,089 were female and 35,170 were male, which means there were 100 males for every 100 females"; "In Roscommon, 7,861 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 27% of the workforce."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsroscommon/' },
      { claim: 'CSO Profile 1 Roscommon: "Roscommon was the largest town, with a population of 6,555 in April 2022"; "Ballaghaderreen and Termonbarry were the youngest, with both having an average age of 36.8 years. The oldest was Boyle, with an average age of 43.9 years"; 41 percent (28,743) born in the county, 40 percent (27,841) elsewhere in the State, 19 percent (12,948) outside it, up from 16 percent.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementsroscommon/' },
      { claim: 'CSO PxStat tables F1013 and F1015: Roscommon 6,555 at 936.8 per sq km over 7.0 sq km, average age 38.4, 22.8 percent under 15; Boyle 2,915 at 540.0 over 5.4; Castlerea 2,348 at 1,038.9, average age 43.0; Ballaghaderreen 2,387, average age 36.8, 24.9 percent under 15; Strokestown 850; and cross-county rows "Athlone, Counties Westmeath & Roscommon" 22,869, "Carrick-On-Shannon, Counties Leitrim & Roscommon" 4,743, "Lanesborough-Ballyleague, Counties Roscommon & Longford" 1,733.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Roscommon: "In Roscommon non-Irish citizens accounted for 11% of the county\'s population. Among the non-Irish residents, the largest group were UK citizens (2,239 people) followed by Polish citizens (1,228), Brazilian (547) and Lithuanian (433)"; dual Irish citizens up from 1,152 in 2016 to 2,043.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionroscommon/' },
      { claim: 'CSO Profile 7 Roscommon: "There were 26,488 people travelling to work in the county in April 2022. The majority of these drove to work, with 18,552 people driving to work by car in 2022. This meant that 70% of working commuters went to work by car, the joint highest rate in the country"; "The average distance travelled by Roscommon commuters was 24.9km, the second longest in the country"; "an average journey time of 29.1 minutes compared with 26.4 minutes in 2016"; more than 29,600 at work, up 15 percent; unemployment 8 percent against 13 percent; participation 58 percent against 61 percent nationally.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingroscommon/' },
      { claim: 'CSO Profile 8 Roscommon: third level up from almost 14,800 in 2016 to more than 19,000, "a rate of 40% compared with 45% nationally"; editor\'s note defining the Gaeltacht as electoral divisions in Cork, Donegal, Galway, Kerry, Mayo, Meath and Waterford.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationroscommon/' },
      { claim: 'Department of Education, 4 January 2018: a full-text search of the first-phase Leaving Certificate Computer Science release for Roscommon returns no match.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Roscommon County Council: "Aras an Chontae / Roscommon / County Roscommon / F42 VR98". Its Record of Protected Structures, County Development Plan 2022 to 2028, is licensed creativecommons.org/licenses/by/4.0 on data.gov.ie, and measured by us at 559 records in 679 CSV lines, with the TOWN column holding na 93, blank 3, n/a 3, Na 2 and NA 1, and Ballaghdereen 18 against Ballaghaderreen 1.', url: 'https://data.gov.ie/dataset/record-of-protected-structures-roscommon-cdp-2022-2028' },
      { claim: 'King House: "A unique Visitor Centre in a beautifully restored Georgian Mansion", "Walk through over 400 years of Irish history", collections including the Mary McAleese Collection and Boyle Civic Art Collection, at "King House, Military Road, Boyle, County Roscommon, F52 WR26".', url: 'https://www.visitkinghouse.ie/contact/' },
      { claim: 'Coillte: Lough Key Forest Park, "the 350-hectare estate", "one of Coillte\'s flagship visitor destinations... With almost 200,000 visits recorded in 2025", with its entrance "on the N4 between Boyle and Carrick-on-Shannon".', url: 'https://www.coillte.ie/site/lough-key-forest-park/' },
      { claim: 'Strokestown Park: "National Famine Museum | Strokestown Park, Strokestown, Co. Roscommon, F42 H282", "Cared for and managed by the Irish Heritage Trust, an independent not-for-profit".', url: 'https://strokestownpark.ie/' },
      { claim: 'Iarnrod Eireann: Roscommon station, Abbeytown, eircode F42 KF85, 25 free spaces; Castlerea station, Church Road, eircode F45 HH34, 34 free spaces; both served by the Dublin Heuston to Westport and Ballina route.', url: 'https://www.irishrail.ie/en-ie/station/castlerea' }
    ],
    rejectedClaims: [
      'The Irish Grid and ITM coordinate pairs in the protected structures file as a project: County Cork owns coordinate-system traps.',
      'The duplicated registration number 04400070 as a project: County Kilkenny owns non-unique keys.',
      'The three local electoral areas summing exactly to 70,259: County Galway owns reconciliation.',
      'Athlone, Carrick-on-Shannon or Lanesborough-Ballyleague populations as Roscommon figures: each is recorded as spanning two counties.',
      'Town-level unemployment and participation extremes for Ballaghaderreen and Boyle: accurate, but left off a page aimed at families in those towns without context that would do them justice.',
      'A county population density figure: no CSO release or table publishes one for Roscommon.',
      'Any claim that Roscommon schools do not teach computer science today: only the January 2018 first-phase list was checked.'
    ]
  }
};
