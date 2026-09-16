'use strict';
// County Donegal (cg- county page, Ireland cluster, Phase 4). Spine: small and
// clean is not the same as safe. Donegal County Council publishes one dataset
// and, alone among the counties in this phase, it downloads: a 397 byte file,
// five rows, nine columns, no missing values anywhere. It still holds four
// distinct traps. One municipal district is named Donegal, the same as the
// county, so an exact-match filter returns 1,083.68 square kilometres instead of
// 4,835.72. Only the first numeric column is in square kilometres; the other six
// are road lengths in kilometres with no unit marker. One column name lost a
// character on export. And the zero-missing-values count is itself a measured
// finding rather than an assumption. REPUBLIC ONLY: Donegal borders Northern
// Ireland and no NISRA or Northern Ireland figure appears anywhere here. The CSO
// publishes no cross-border commuting figure for Donegal, checked across all
// five of its county releases, and the page says so. NOT USED: the Gaeltacht
// count-versus-rate framing, which the County Mayo page owns, and the regional
// broadband limitation as a project, which the County Offaly page owns. Facts
// read at primary sources on 16 September 2026.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY DONEGAL', blurb: 'Letterkenny, Buncrana and the Gaeltacht, with a project on a tiny clean file that is still wrong four ways.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-donegal',
  code: 'dgl',
  accent: '#4A3E86',
  accentRationale: 'County Donegal: a north west indigo from the solver, kept clear of the purples used elsewhere in the cluster',
  pageType: 'governorate',
  place: {
    name: 'County Donegal',
    eyebrow: 'County Donegal, Ulster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-mayo', name: 'County Mayo' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'County Mayo', href: '/coding-classes-in-county-mayo' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Donegal, Ireland',
  title: 'Coding Classes in County Donegal | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Donegal, from Letterkenny and Buncrana to Donegal Town, Ballybofey and Dungloe, ages 6 to 67.',
  ogDescription: 'Coding and AI classes for County Donegal, with a project on a five row public file that is clean, complete and still wrong in four different ways.',
  twitterDescription: 'Coding classes across County Donegal, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Donegal Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Donegal, taught live in English.'
  },

  h1: 'Coding classes in County Donegal',
  capsuleQ: 'What are the best coding classes in County Donegal?',
  capsule: 'Donegal is a county of 167,084 people with 34,092 children aged 15 and under, a Gaeltacht of 24,220 people, and in Letterkenny a town with an average age of just 36.5 years. It has two schools on the original national computer science list. We teach live, one fixed hour a week, in ability groups of five to ten or one to one, to anyone aged six to sixty-seven. The first lesson costs nothing. After that it is USD 100 a month for a group place and USD 150 one to one.',
  lead: 'Donegal County Council publishes exactly one dataset, and it is the only council file in this whole run of pages that actually downloaded. It is 397 bytes. Five rows, nine columns, and not a single empty cell anywhere in it. By every quick measure it is a clean file. It is also wrong in four separate ways for anyone who uses it without looking, starting with the fact that one of its five rows is called Donegal, which is not the county but a district inside it. Ask that file for Donegal and it will hand you a fifth of Donegal, with no error and no warning. Small, tidy and complete are not the same thing as safe, and that is the most useful sentence on this page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Donegal.',

  picks: {
    eyebrow: 'Course picks for County Donegal',
    h2: 'Four routes in',
    intro: 'Each one opens with a free lesson from the teacher who would take the course, with no card details collected first.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with a group and a member of it sharing a name, and a program that keeps picking the wrong one.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the start, aimed at the Junior Cycle and at Transition Year work with real files.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'A file of five rows, read properly, before anything larger is attempted.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults automating work with files whose column names nobody has ever questioned.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Five rows, four traps',
      intro: 'The county council\'s one published dataset, opened properly. Nothing here needs a big computer or a long afternoon.',
      body: [
        { kind: 'table', caption: 'What we measured in a 397 byte council file', head: ['Trap', 'What is actually there', 'What a careless read produces'], rows: [
          ['A part named after the whole', 'One of the five districts is called Donegal', 'Asking for Donegal returns 1,083.68 square kilometres, not the county'],
          ['The real county figure', 'The five districts sum to 4,835.72 square kilometres', 'A county roughly a fifth of its true size'],
          ['Mixed units, one naming style', 'Only the first numeric column is in square kilometres', 'Road lengths in kilometres added up as if they were areas'],
          ['A broken column name', 'One heading lost a character when the file was exported', 'A field nobody can interpret, quietly ignored'],
          ['Missing values', 'None at all, in any of the 45 cells', 'Nothing, and we checked rather than assumed']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the first trap is the deep one', p: 'Matching exactly does not save you here. The word is spelled correctly, the row is real, and the filter does what it was told. The problem is that a container and one of its contents share a name, which no amount of careful string handling can detect.' },
          { h3: 'Why the units matter', p: 'Six of the nine columns hold road lengths in kilometres under a file whose one unit-bearing name says square kilometres. Nothing in the file marks the difference. Only reading the values and asking what could possibly be that size reveals it.' },
          { h3: 'Why we checked for blanks', p: 'A count of zero missing values is a finding. Assuming there are none is a guess that happens to be right, which is a different thing entirely and produces the same sentence.' }
        ] },
        { kind: 'callout', h3: 'The point of using a tiny file', p: 'Every instinct says a serious data project needs a big dataset. This one is 397 bytes and holds four genuine faults, each of a kind that appears in files a million times larger, where they are much harder to see and much more expensive to get wrong. A learner who works this file to the bottom can describe a name collision, a unit mismatch, a corrupted field name and a verified absence of gaps, having found all four themselves. That is a real skill set, demonstrated on something that fits on one screen, and it is a far better use of an afternoon than downloading something enormous and computing an average of it.' },
        { kind: 'p', text: 'The output is a short data note: what each column holds, in what unit, which one cannot be trusted, and a single warning sentence for the next person about the row called Donegal. Writing that note is the project. Anybody who has written one will read the next file differently for the rest of their life.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'The far north west, on its own terms',
      intro: 'Everything below comes from Central Statistics Office releases naming Donegal, and covers the Republic only.',
      body: [
        { kind: 'table', caption: 'County Donegal at the 2022 census', head: ['Counted', 'Number'], rows: [
          ['People in the county', '167,084, up 7,892 since 2016'],
          ['Children aged 15 and under', '34,092, of whom 10,972 were in childcare'],
          ['Average age', '40.1 years, against a national 38.8'],
          ['Born in the county', '113,828 people, 69% of residents'],
          ['Born outside the State', '36,998 people, 22%, above the national 20%'],
          ['Holding dual Irish citizenship', '4,307, up from 2,405 in 2016'],
          ['Able to speak Irish, aged three and over', '59,130, up by almost 2,400, or 38.5% of that group']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Letterkenny', p: '22,549 people spread across 26.5 square kilometres at only 850.2 per square kilometre, and an average age of 36.5 years, young for an Irish town.' },
          { h3: 'Buncrana', p: '6,971 people over 9.9 square kilometres, an average age of 39.2 and 21.6% of residents under 15, a slightly larger share of children than Letterkenny.' },
          { h3: 'Towns and their areas', p: 'As electoral areas, Letterkenny covers 32,266 people and Buncrana 22,618, both considerably larger than the towns they are named after.' }
        ] },
        { kind: 'p', text: 'Donegal keeps its people. At 69%, the share of residents born in the county is the highest we have found anywhere in this cluster, and yet 22% were born outside the State, above the national rate of 20%. Both facts are true of the same county. Among places of at least 500 people, Manorcunningham has the youngest average age at 33.3 years and Doiri Beaga in the Gaeltacht the oldest at 46.1. Non-Irish citizens make up 7% of the county, led by UK citizens at 4,276, then Polish at 1,609, Indian at 1,128 and American at 335.' }
      ]
    },
    {
      id: 'irish', tint: 'tint', eyebrow: 'Irish, and schools',
      h2: 'A Gaeltacht of more than 24,000 people',
      intro: 'Gaeltacht figures describe a defined area inside the county and are kept separate from county figures throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Donegal Gaeltacht', p: 'Its population rose from over 23,300 to 24,220, including 23,554 people aged three and over, of whom 15,549 can speak Irish. The number able to speak Irish there fell by 2% between the two censuses.' },
          { h3: 'Fluency across the county', p: 'Of Donegal people who can speak Irish, 11,621 speak it very well, which is 20% of speakers here against 10% across the country. A further 18,937 speak it well and 27,122 do not speak it well.' },
          { h3: 'What that means for our classes', p: 'Nothing, in the best way. We teach in English, every programming language uses English keywords, and a pupil from a Gaeltacht school sits down on exactly the same footing as a pupil from Letterkenny or from Lagos.' }
        ] },
        { kind: 'table', mt: true, caption: 'Donegal on the first national computer science list, January 2018', head: ['School', 'Address as the department published it'], rows: [
          ['Abbey Vocational School', 'The Glebe, Donegal Town, Co. Donegal'],
          ['Saint Eunan\'s College', 'Letterkenny, Co. Donegal'],
          ['A note on the first address', 'Donegal Town is a specific town, not shorthand for the county, which is the same confusion the data project is built on']
        ] },
        { kind: 'spec', title: 'Higher education in the county', p: 'Atlantic Technological University describes its Letterkenny campus as more than 18,000 square metres of teaching and support accommodation at Port Road, eircode F92 FC93, with library, dining, meeting and sports facilities on site. More than 41,300 people in the county hold a third level qualification, up from almost 32,600 in 2016, which is 37% of those aged 15 and over, up from 31%, and still below the national 45%.' }
      ]
    },
    {
      id: 'work', tint: '', eyebrow: 'Work, distance and the border',
      h2: 'What we can say, and what nobody publishes',
      intro: 'Including one absence that matters a great deal in this county.',
      body: [
        { kind: 'table', caption: 'Working in Donegal, Census 2022', head: ['What the CSO reported', 'Figure'], rows: [
          ['At work', 'More than 67,900 people, up 16% since 2016'],
          ['Unemployment', '11%, down from 18% in 2016, and one of the highest rates in the country'],
          ['Long-term unemployment', '6%, also among the highest'],
          ['Lifford', 'Among towns of at least 1,500 people, one of the highest unemployment rates in the country at 22%'],
          ['Labour force participation', '57% against 61% nationally'],
          ['Working from home at least one day a week', '15,350 people, 23% of the workforce against 32% nationally'],
          ['Average journey to work', '23.6 minutes, and among the least likely commuters in the country to cycle, at 0.5%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The figure that does not exist', p: 'Donegal borders Northern Ireland, and the obvious question is how many people cross it for work. We searched all five of the county\'s census releases for any mention of Northern Ireland, the border, Derry or Strabane. There is none. The CSO publishes no cross-border commuting figure for Donegal in those releases, so we publish none either.' },
          { h3: 'What this page covers', p: 'The Republic of Ireland only. Every figure here comes from Republic sources, and we make no claim about Northern Ireland, its schools, its statistics or its services anywhere in this cluster.' },
          { h3: 'Connections', p: 'No county broadband figure is published. For the Border region as a whole, covering Cavan, Donegal, Leitrim, Monaghan and Sligo, 91% of households have an internet connection and 79% have fixed broadband, the lowest regional rate in the country. Your own line is tested in the free lesson.' }
        ] },
        { kind: 'p', text: 'We are not connected with Donegal County Council, Atlantic Technological University or any school named here. Population, language, education and employment figures are quoted from Central Statistics Office releases naming Donegal, with Gaeltacht figures kept distinct from county ones. Every measurement in the data project is ours, made on a file the council publishes under a Creative Commons Attribution licence. One small honest note: unlike other councils in this cluster, Donegal County Council\'s own contact page does not carry a postal address or eircode, so we do not print one for it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading a row to writing a data note',
    intro: 'Ages are a guide. The free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Whole and part', p: 'Programs where a group and one of its members share a name, and the machine cannot tell them apart.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'What is this column?', p: 'Opening a small real file and saying what every single column holds, and in what unit.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'The data note', p: 'A written page that lets the next person use a file safely, including the warnings.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Inherited files', p: 'Taking over somebody else\'s spreadsheet without inheriting their assumptions with it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Nothing in that file tells a machine which Donegal you meant',
    intro: 'A district and a county with the same name is not a spelling problem, and no tool can infer its way out of it.',
    p1: 'Ask for code to pull the Donegal row and you will get code that pulls the Donegal row. It will be correct code and the wrong answer, because the ambiguity is not in the syntax, it is in the world the file describes. Nothing in the text of that column says one of these five things is also the name of the thing containing all five.',
    p2: 'What catches it is a person looking at a number and thinking that seems small for a county. That is not a technical skill. It is knowing roughly how big Donegal is, and caring enough to check, and it is the part of this work that stays with the human indefinitely.',
    closer: 'Which is the honest case for learning to code in 2026: not to out-type a machine, but to be the one who notices the answer is a fifth of what it should be.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How this works from Inishowen or the Rosses',
    intro: 'Six plain facts about the format.',
    cells: [
      { h3: 'Live, with a teacher present', p: 'One hour a week with a person who asks questions and waits for answers, not a recorded course to work through alone.' },
      { h3: 'No travel in either direction', p: 'Dungloe to Letterkenny is over an hour each way on winter roads. The class that needs no car is the one that is still running in March.' },
      { h3: 'Ability groups of five to ten', p: 'Learners at one level, gathered from Donegal and several other countries, so a genuine peer group exists at a workable hour.' },
      { h3: 'What a household needs', p: 'A laptop or desktop, sound that works and a line steady enough for video. The free lesson is the test.' },
      { h3: 'Irish school stages', p: 'Junior Cycle, Transition Year and senior cycle, with mid-terms and exam weeks planned around.' },
      { h3: 'Our hours', p: 'Afternoons, evenings and weekend mornings, taught by a team working several hours ahead of Irish time.' }
    ],
    spec: { title: 'A county the size of a small country', p: 'Donegal runs from Inishowen in the north to Bundoran in the south, and the drive between them is longer than many people expect. Carndonagh, Dungloe, Glenties, Killybegs and Ballyshannon each sit a long way from the next option of any kind. An online group does not shrink that distance, it removes it from the question entirely, which for a great many families here is the difference between a child learning this subject and not.' }
  },

  fees: {
    h2: 'Donegal class fees',
    intro: 'Three figures with the terms stated, not implied.',
    first: 'A full opening lesson at no charge, which also settles whether the connection is good enough.',
    group: 'A month of group classes, around eight lessons, five to ten learners at one level.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'Billing is monthly in US dollars at the single rate we use outside India, so Carndonagh pays what Letterkenny pays and there is no euro list to set against it. Nothing is charged until a course and an hour are agreed, and pauses, missed lessons and moving between group and one to one are all written out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews our families left, printed word for word',

  book: {
    h2: 'Start with a free lesson',
    intro: 'Send us the learner\'s age and what they are drawn to. The first hour is built around that, whether it is a Scratch game where two things share a name or a real council file with four things wrong in it.',
    success: 'Thank you. Somebody will be in touch about your County Donegal class shortly.'
  },

  faq: {
    h2: 'County Donegal coding class questions',
    intro: 'What Donegal families ask us first.',
    items: [
      { q: 'How many people live in County Donegal?', a: 'The 2022 census counted 167,084, an increase of 7,892 since 2016, including 34,092 children aged 15 and under.' },
      { q: 'What is the Donegal data project?', a: 'Students open the council\'s single published dataset, all 397 bytes of it, and find four faults: a district named after the county, mixed units, a column name broken during export, and zero missing values, which they verify rather than assume.' },
      { q: 'How big is Letterkenny?', a: 'Letterkenny held 22,549 people in 2022 with an average age of 36.5 years. Buncrana held 6,971. The electoral areas of the same names hold 32,266 and 22,618.' },
      { q: 'Do you teach children from the Donegal Gaeltacht?', a: 'Yes. The Gaeltacht here holds 24,220 people, of whom 15,549 can speak Irish. Our classes are in English and programming keywords are English everywhere, so nobody is at a disadvantage.' },
      { q: 'Which Donegal schools first offered Leaving Certificate Computer Science?', a: 'Two: Abbey Vocational School in Donegal Town and Saint Eunan\'s College in Letterkenny, both on the national list published in January 2018.' },
      { q: 'Do you cover Northern Ireland?', a: 'No. Every figure on this page and across this cluster comes from Republic of Ireland sources, and we make no claim about Northern Ireland. We also found no published cross-border commuting figure for Donegal, so we quote none.' },
      { q: 'When do classes run?', a: 'Afternoons, evenings and weekend mornings, at an hour agreed in the free lesson. Our teaching team is several hours ahead of Irish time, which keeps those hours easy to staff.' },
      { q: 'Is there a Modern Age Coders classroom in County Donegal?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Donegal coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The north west',
    html: 'South of here, <a class="cg-inline-link" href="/coding-classes-in-county-mayo">County Mayo</a> and <a class="cg-inline-link" href="/coding-classes-in-county-galway">County Galway</a> have their own pages, as does the city of <a class="cg-inline-link" href="/best-coding-class-in-galway">Galway</a>. To compare online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and the full set is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Donegal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-mayo', label: 'County Mayo' },
    { href: '/best-coding-class-in-galway', label: 'Galway city' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dgl .cg-hero-grid { align-items: start; gap: clamp(1.18rem, 2.98vw, 2.49rem); }
.cg-root.cg-dgl .cg-hero h1 { font-weight: 700; letter-spacing: -0.0204em; line-height: 1.051; }
.cg-root.cg-dgl .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.11rem; }
.cg-root.cg-dgl .cg-eyebrow { letter-spacing: 0.174em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dgl .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0129em; }
.cg-root.cg-dgl .cg-grid-3 { gap: clamp(1.12rem, 2.41vw, 1.92rem); }
.cg-root.cg-dgl .cg-table caption { letter-spacing: 0.028em; font-weight: 700; }
.cg-root.cg-dgl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dgl .cg-table th:first-child { letter-spacing: 0.008em; }
.cg-root.cg-dgl .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-dgl .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'County Donegal, whose council area is the county, Census 2022 (CSO Donegal releases, Republic of Ireland only, with no NISRA or Northern Ireland figure used anywhere): population 167,084, up 7,892 (5 percent) since 2016; average age 40.1 against 38.5 in 2016; 34,092 children aged 15 and under, of whom 10,972 (32 percent) were in childcare against 33 percent nationally. Birthplace: 113,828 people (69 percent) born in the county, 13,838 (8 percent) elsewhere in the State and 36,998 (22 percent) outside the State, above the national 20 percent. Towns: Letterkenny 22,549 at 850.2 per sq km over 26.5 sq km, average age 36.5 with 21.5 percent under 15; Buncrana 6,971 at 703.0 over 9.9 sq km, average age 39.2 with 21.6 percent under 15. Local electoral areas: Letterkenny 32,266, Buncrana 22,618. Among places of at least 500 people, Manorcunningham is youngest at average age 33.3 and Doiri Beaga oldest at 46.1. Citizenship: non-Irish citizens 7 percent of the county, largest group UK at 4,276, then Polish 1,609, Indian 1,128 and American 335; dual Irish citizens up from 2,405 in 2016 to 4,307. Work: more than 67,900 at work, up 16 percent since 2016; almost 8,100 unemployed, a rate of 11 percent against 18 percent in 2016, which the CSO calls one of the highest rates in the country, with long-term unemployment at 6 percent also among the highest, and Lifford, among towns of at least 1,500 people, having one of the highest unemployment rates in the country at 22 percent of which 12 percent was long term; labour force participation 57 percent against 61 percent nationally; 15,350 people working from home at least one day a week, 23 percent of the workforce against 32 percent nationally; average journey time 23.6 minutes against 22.1 in 2016, with Donegal commuters among the least likely in the country to cycle at 0.5 percent. Education and Irish: third level qualifications up from almost 32,600 in 2016 to more than 41,300, which is 37 percent of those aged 15 and over, up from 31 percent and below the national 45 percent; county-wide 59,130 people aged three and over could speak Irish, up by almost 2,400, or 38.5 percent of that group, of whom 11,621 spoke it very well, 20 percent of speakers against 10 percent nationally, 18,937 well and 27,122 not well. GAELTACHT, a defined sub-county area kept separate from county figures: population up from over 23,300 to 24,220, including 23,554 aged three and over of whom 15,549 could speak Irish, while the number able to speak Irish in the Donegal Gaeltacht fell 2 percent between the censuses. Schools: two Donegal entries on the gov.ie first-phase Leaving Certificate Computer Science list of 4 January 2018, Abbey Vocational School at The Glebe, Donegal Town, and Saint Eunan\'s College, Letterkenny. Higher education: ATU Donegal Letterkenny, Port Road, F92 FC93, described by the university as over 18,000 square metres of educational and support accommodation. DOCUMENTED ABSENCE: none of the five Donegal census releases contains the terms Northern Ireland, border, Derry or Strabane, so no cross-border commuting figure is published for Donegal in them and none is quoted.',
    localProject: 'Small, tidy and complete is not the same as safe. Donegal County Council publishes one dataset, Co. Donegal Municipal Districts, under Creative Commons Attribution 4.0, and unlike every other council file checked in this phase it downloads: 397 bytes, five data rows, nine columns, and zero empty cells across all 45, a count verified rather than assumed. It nonetheless carries four distinct faults. One, a name collision between a part and its container: one of the five municipal districts is named Donegal, identical to the county, so an exact-match filter for Donegal returns that district\'s 1,083.68 square kilometres instead of the county total of 4,835.72 produced by summing all five, and there is no grand total row to catch the error. Two, mixed units under one naming convention: only the first numeric column, Area_sq_kms, is in square kilometres, while the other six numeric columns hold road network lengths in kilometres with no unit marker of their own. Three, a corrupted field name: one column heading lost a character during export and cannot be interpreted from the file alone. Four, the verified absence of missing values, recorded as a measurement. The deliverable is a data note stating what each column holds, in what unit, which cannot be trusted, and one warning sentence about the row called Donegal.',
    requiredMentions: [
      '167,084',
      '22,549',
      '6,971',
      '34,092',
      '59,130',
      '24,220',
      '15,549',
      'F92 FC93',
      '32,266',
      '4,307',
      '41,300',
      '113,828'
    ],
    sources: [
      { claim: 'CSO Donegal summary press statement, 30 May 2023: "the population of Donegal grew by 5% to 167,084, which means the number of people in the county rose by 7,892 between April 2016 and April 2022"; average age 40.1 against 38.5; "There were 34,092 children aged 15 and under in Donegal in April 2022. Of these, 10,972 (32%) were in childcare"; "In Donegal, 15,350 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 23% of the workforce."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsdonegal/' },
      { claim: 'CSO Profile 1 Donegal: "Letterkenny was the largest town, with a population of 22,549 in April 2022"; Manorcunningham the youngest town at average age 33.3 and Doiri Beaga the oldest at 46.1; 69 percent (113,828) born in the county, 8 percent (13,838) elsewhere in the State and 22 percent (36,998) outside it against a national 20 percent.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementsdonegal/' },
      { claim: 'CSO PxStat tables F1013 and F1015: Buncrana 6,971 at 703.0 per sq km over 9.9 sq km, average age 39.2 with 21.6 percent under 15; Letterkenny at 850.2 per sq km over 26.5 sq km, average age 36.5 with 21.5 percent under 15. Table F1016: Letterkenny LEA 32,266 and Buncrana LEA 22,618.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Donegal: "In Donegal non-Irish citizens accounted for 7% of the county\'s population. Among the non-Irish residents, the largest group were UK citizens (4,276 people), followed by Polish citizens (1,609), Indian (1,128) and American (335)"; dual Irish citizens up from 2,405 in 2016 to 4,307.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligiondonegal/' },
      { claim: 'CSO Profile 7 Donegal: "The unemployment rate was 11% compared with 18% in 2016. This was one of the highest rates in the country"; long-term unemployment 6 percent; "Lifford had one of the highest rates of unemployment at 22%, of which 12% was long-term unemployment"; "The labour force participation rate was 57% in Donegal compared with 61% nationally"; more than 67,900 at work, up 16 percent; "an average journey time of 23.6 minutes compared with 22.1 minutes in 2016"; "Commuters in Donegal were among the least likely to cycle to work at just 0.5%".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingdonegal/' },
      { claim: 'CSO Profile 8 Donegal: third level up from almost 32,600 to more than 41,300, 37 percent of those aged 15 and over against a national 45 percent; "The population of the Donegal Gaeltacht increased from over 23,300 to 24,220. This included 23,554 people aged three and over and of these 15,549 could speak Irish. The number of people who could speak Irish in the Donegal Gaeltacht fell by 2% between the censuses in 2016 and 2022"; county-wide 59,130 Irish speakers, up almost 2,400, 38.5 percent of that group; "In Donegal, 11,621 people who could speak Irish spoke it very well (20%), while 18,937 could speak it well (32%), and 27,122 people did not speak it well (46%). In Ireland overall, 10% of Irish speakers could speak the language very well."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationdonegal/' },
      { claim: 'Department of Education, 4 January 2018: Donegal has two entries on the first-phase Leaving Certificate Computer Science list, "Abbey Vocational School, The Glebe, Donegal Town, Co. Donegal" and "Saint Eunan\'s College, Letterkenny, Co. Donegal".', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Atlantic Technological University: "The Letterkenny campus is at the heart of the university town. It includes over 18,000 square meters of educational and support accommodation", address "ATU Donegal Letterkenny, Port Road, Letterkenny, Co. Donegal, F92 FC93, Ireland."', url: 'https://www.atu.ie/campus/donegal-letterkenny' },
      { claim: 'data.gov.ie, Co. Donegal Municipal Districts, licensed Creative Commons Attribution 4.0: a 397 byte CSV of five municipal districts, measured by us as containing a district named Donegal at 1,083.68 sq km against a five-district total of 4,835.72 sq km, six road-length columns in kilometres alongside one area column in square kilometres, one column name corrupted on export, and zero missing values across all 45 cells.', url: 'https://data.gov.ie/dataset/co-donegal-municipal-districts' },
      { claim: 'CSO Internet Coverage and Usage in Ireland 2023: the Border region, comprising Cavan, Donegal, Leitrim, Monaghan and Sligo, at 91 percent of households with an internet connection and 79 percent on fixed broadband, the lowest regional fixed broadband rate in the country. No county-level figure is published.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-isshict/internetcoverageandusageinireland2023/householdinternetconnectivity/' },
      { claim: 'Donegal County Council contact page: gives a telephone number and email but no postal address or eircode, so none is printed for the council.', url: 'https://www.donegalcoco.ie/contact/' }
    ],
    rejectedClaims: [
      'Any Northern Ireland figure, statistic, school or service: this cluster covers the Republic of Ireland only.',
      'Any cross-border commuting figure for Donegal: none of the five Donegal census releases mentions Northern Ireland, the border, Derry or Strabane.',
      'The Gaeltacht count-versus-rate framing as a project: the County Mayo page owns it, so Donegal states its Gaeltacht figures without that structure.',
      'Regional broadband limits as a project: the County Offaly page owns that, so the Border region figure appears here in one cell, labelled regional.',
      'A Donegal County Council postal address or eircode: its own contact page does not publish one.',
      'A CSO county land area or density figure for Donegal: the 4,835.72 sq km figure on this page is our own sum of the council\'s five municipal districts and is described as such.',
      'Any ranking of Donegal\'s two listed schools against other counties: the count is stated without a comparison we cannot sustain as more pages ship.'
    ]
  }
};
