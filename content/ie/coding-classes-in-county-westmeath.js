'use strict';
// County Westmeath (cg- county page, Ireland cluster, Phase 4). Spine: a column
// where an empty cell and the word NO mean different things, in the council's
// own recycling dataset. Facts read at primary sources on 16 September 2026:
// CSO PxStat F1015 and the Westmeath summary and Profile 1, 5, 7 and 8 press
// statements; gov.ie's January 2018 LCCS list (Colaiste Mhuire in Mullingar and
// Moate Community School); tus.ie; the council's own civic offices dataset for
// eircodes. GEOGRAPHY: Athlone is published as "Athlone, Counties Westmeath &
// Roscommon" at 22,869, so it is never written as a Westmeath figure; Mullingar
// at 22,667 is the largest single-county town. The CSO states the non-Irish
// share as 11% in its summary release and 12% in Profile 5; both are quoted
// rather than reconciled, and the page keeps this to one line because the
// Wicklow page leads on a similar point. Dataset measured by us: Westmeath
// Recycle Bring Banks, CC BY 4.0, 49 sites, where the Textiles column holds YES
// 42 times, NO 6 times and one empty string, at Horseleap, so a filter on NO and
// a fill of blanks treat "confirmed absent" and "never recorded" as the same
// thing. Coordinates were checked and are consistent, which is reported too.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY WESTMEATH', blurb: 'The lakeland midlands, Athlone to Mullingar, with a project on the difference between no and not recorded.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-westmeath',
  code: 'wmh',
  accent: '#1E4D8C',
  accentRationale: 'County Westmeath: a deep lake blue from the solver for a county of loughs, distinct from both Irish greens and every other Ireland page',
  pageType: 'governorate',
  place: {
    name: 'County Westmeath',
    eyebrow: 'County Westmeath, Leinster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'County Westmeath, Ireland',
  title: 'Coding Classes in County Westmeath | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Westmeath, from Mullingar and Athlone to Moate and Kinnegad, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Westmeath, on a page about a council dataset where an empty cell and the word no mean two different things.',
  twitterDescription: 'Coding classes across County Westmeath, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Westmeath Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Westmeath, taught live in English.'
  },

  h1: 'Coding classes in County Westmeath',
  capsuleQ: 'What are the best coding classes in County Westmeath?',
  capsule: 'Westmeath holds 96,221 people, up 8% since 2016, spread between two towns of almost identical size and a great deal of lake and farmland. Home working is low here at 26% against a national 32%, so most families need an evening class rather than an afternoon one, and few of them live near a centre that runs one. That is precisely the gap a live online class fills: the same teacher, the same hour every week, whether a learner is in Mullingar, Moate or out towards Lough Ree. We teach ages 6 to 67, in ability groups of five to ten or one to one. The first lesson costs nothing; then a group place is USD 100 a month and a private one USD 150.',
  lead: 'Westmeath County Council publishes a list of its 49 recycling bring banks, and it is a tidy file: no duplicate rows, sensible coordinates, a column for each material. Four of the five material columns say YES on every single site. The fifth, for textiles, is more interesting. Forty-two sites say YES. Six say NO, meaning the council has confirmed that site does not take textiles. And one site, at Horseleap, says nothing at all: the cell is empty. Those last two are not the same thing, and no ordinary piece of code will tell them apart unless somebody thought about it first. Ask for the sites that take textiles and you get 42. Ask for the sites that do not and you get six, or seven, depending entirely on how your code treats an empty cell. One bring bank in the county falls into the gap between confirmed absent and never recorded, and finding it is the best half hour a young data learner here can spend.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Westmeath.',

  picks: {
    eyebrow: 'Course picks for County Westmeath',
    h2: 'Four courses for the midlands',
    intro: 'Go by what the learner wants to build, not by the age on the label. Each option opens with a free lesson, taught live, with no card details taken.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and first programs, where a missing answer and the answer no have to be handled differently.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python for a learner ready to leave blocks behind, reading real council files rather than invented ones.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Forty-nine recycling points, one empty cell, and two defensible answers to the same question.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults working with records: code that refuses to treat a blank as a decision.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Two towns of the same size, one of them in two counties',
      intro: 'Westmeath is unusual in having its two largest towns within a couple of hundred people of each other, and in one of them not being entirely its own.',
      body: [
        { kind: 'table', caption: 'County Westmeath in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '96,221, up 8% or 7,451 since 2016'],
          ['Average age', '38.6 years, against 38.8 nationally'],
          ['Aged 65 and over', '14,369, an increase of 26%'],
          ['Worked from home at least one day a week', '11,096 people, 26% of the workforce against 32% nationally'],
          ['At work', '42,077 people aged 15 and over, up 6,788 or 19% since 2016'],
          ['Third-level qualifications', 'Just over 26,200 people, a rate of 42% against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Mullingar, cleanly counted', p: 'Mullingar holds 22,667 people entirely within Westmeath, with an average age of 36.8 and 22.5% of its people aged under 15.' },
          { h3: 'Athlone, across the Shannon', p: 'Athlone is published as "Athlone, Counties Westmeath and Roscommon" with 22,869 people, because the town spans the river and the county line. It is not a Westmeath-only figure.' },
          { h3: 'The younger towns', p: 'Kinnegad, at 3,064 people, has an average age of 34.1, the youngest of any Westmeath town of at least 500 people, with Moate close behind at 3,013 people.' }
        ] },
        { kind: 'p', text: 'Where people come from is worth a line of its own. Just over half of Westmeath residents, 52% or 50,115 people, were born in the county; 29% were born elsewhere in Ireland; and 18%, some 17,565 people, were born outside the State, up from 16% in 2016. The largest non-Irish groups are Polish at 1,832, UK at 1,357, Indian at 1,034 and Lithuanian at 1,005. One small honesty note: the statistics office puts the non-Irish share at 11% in one release and 12% in another, and we quote both rather than choose.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Westmeath schools',
      h2: 'Two schools, one in each town',
      intro: 'Westmeath did better than several larger counties when Leaving Certificate Computer Science began in September 2018.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The two', p: 'Coláiste Mhuire in Mullingar and Moate Community School on Church Street in Moate were both on the January 2018 first-phase list.' },
          { h3: 'What that is worth', p: 'It means the subject arrived here at the start rather than years later, in both the county town and a smaller one. It does not tell you the position today, since no current official list exists.' },
          { h3: 'Where we fit', p: 'We teach the programming, data handling and problem solving the subject assumes, live and weekly, and never anything that will be submitted for marks.' }
        ] },
        { kind: 'p', text: 'After school, the county holds a university campus. The Technological University of the Shannon gives its Athlone address as University Road, Athlone, N37 HD68, and it is the natural local route into a computing degree for students on the western side of the county. The council\'s own records confirm two routing keys across Westmeath: N37 at the Athlone Civic Centre on Church Street, and N91 at County Buildings on Mount Street in Mullingar, which is a neat reminder that a county of this size can still be split down the middle by something as ordinary as a postcode.' },
        { kind: 'spec', title: 'Work in the county', p: 'Unemployment fell from 16% to 9% between censuses, with more than 4,400 people unemployed in April 2022, a drop of 34%. Labour force participation is 61%, exactly the national figure. The largest employing sectors are wholesale and retail at almost 5,400 workers, health and social work at just over 5,100, and manufacturing at more than 4,500.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Where one bring bank disappears',
      intro: 'A short, complete dataset, published by the county itself with an admirably honest disclaimer, and exactly one cell that changes the answer.',
      body: [
        { kind: 'table', caption: 'What we measured in the published file, read 16 September 2026', head: ['Value in the textiles column', 'Sites', 'What it means'], rows: [
          ['YES', '42', 'The council records textile recycling at this site'],
          ['NO', '6', 'The council records that this site does not take textiles'],
          ['An empty cell', '1, at Horseleap', 'Nothing was recorded either way'],
          ['Total sites', '49', 'Matching the count the council states on the dataset page'],
          ['Duplicate rows', '0', 'The file is otherwise clean']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the blank is dangerous', p: 'Most quick fixes treat it as a no, or drop the row entirely. Either choice silently converts an unknown into a fact, and the site at Horseleap either loses a service it may have or gains one it may not.' },
          { h3: 'The right handling', p: 'Three categories, not two: yes, no and not recorded. Report all three, and say in the write-up how many rows fell into the third.' },
          { h3: 'The disclaimer matters too', p: 'The council states plainly that it provides the information without guaranteeing that it is accurate, correct or complete. That sentence is permission to check, not a reason to dismiss the file.' }
        ] },
        { kind: 'callout', h3: 'What we checked and did not find', p: 'It is worth saying what this file gets right, because most of our other county pages are about things going wrong. The coordinates are consistent: the eastings and northings are in Irish Transverse Mercator metres, and they agree with the separate latitude and longitude columns, so there is no coordinate trap here at all. There are no duplicate rows. Athlone and Mullingar each appear several times, which is correct, because each town genuinely has several bring banks. One settlement name looks misspelled, rendered as Ballnacarrigy where the usual spellings run Ballinacarrigy or Ballynacargy, and we flag that rather than correct it, since the file contains no second spelling to prove a pattern against.' },
        { kind: 'p', text: 'The output is a count of sites offering textile recycling, a count of those confirmed not to, a count of those unrecorded, and a sentence explaining why the third number exists. A learner who produces that has understood something most adults handling spreadsheets never do.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Blanks are not answers',
      h2: 'Five rules for missing values',
      intro: 'The most common source of quietly wrong analysis, and the easiest to guard against once you have been caught by it.',
      body: [
        { kind: 'table', caption: 'Handling what is not there', head: ['Rule', 'In practice', 'What it prevents'], rows: [
          ['Count the blanks first', 'Report how many cells are empty before doing anything else', 'Silent conversion of unknowns into answers'],
          ['Keep three categories', 'Yes, no and not recorded, never two', 'A blank becoming a decision nobody made'],
          ['Never fill without saying so', 'If you must substitute a value, state it in the write-up', 'Invisible assumptions inside a result'],
          ['Watch what filters drop', 'Check how many rows a condition excluded, not just what it kept', 'Rows vanishing without a trace'],
          ['Read the publisher\'s disclaimer', 'Take seriously any statement about completeness', 'Treating a best effort as a guarantee']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A quiz program where leaving an answer blank is not the same as answering no, and the score has to show the difference.' },
          { h3: 'Teenagers', p: 'The real council file in Python: count all three categories, find Horseleap, and write the sentence that explains it.' },
          { h3: 'Adults', p: 'The same rules on work records, where blanks in a status column are the usual cause of a report nobody can reconcile.' }
        ] },
        { kind: 'p', text: 'We have no connection with Westmeath County Council, the Technological University of the Shannon or either school named here. Census figures are the Central Statistics Office\'s for 2022, and the counts from the recycling file are ours, taken from the council\'s published data under its Creative Commons Attribution licence.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'Two routing keys, two lakes and a long drive to anywhere',
      intro: 'Westmeath sits in the middle of Ireland, which is convenient for crossing and awkward for getting to a class.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'How people travel', p: 'Of 37,866 people travelling to work, 24,378 drove, 2,897 walked, 893 took a bus, 518 cycled and 339 went by train, with an average journey of 30.4 minutes, up from 28.8 in 2016.' },
          { h3: 'Students on the road', p: 'Of 3,390 third-level students commuting, driving was the most popular option at 975 people, which tells you plenty about public transport in the midlands.' },
          { h3: 'Who has moved here', p: '3,028 people moved into the county in the year before the census, 1,748 from elsewhere in Ireland and 1,280 from outside the State, while dual Irish citizenship rose from 1,826 to 3,180. The county also recorded 974 Irish Travellers, down 3% on 2016.' }
        ] },
        { kind: 'spec', title: 'Why 26% matters here', p: 'Only 26% of the Westmeath workforce works from home at least one day a week, against 32% nationally, so most households have both parents out of the house until the evening. The classes that fill first here are the later ones, and they are the ones we open first.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a blank answer to a defensible count',
    intro: 'Ages here are only indicative. The free lesson settles where a learner actually starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Nothing is not no', p: 'Programs that tell the difference between an empty answer and a negative one.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Counting carefully', p: 'Opening real files, counting categories and noticing the rows that fit none of them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Missing data', p: 'Handling blanks honestly, reporting three categories and defending the choice in writing.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Rules in code', p: 'Writing checks that refuse to fill a blank silently, and run before anyone sees a result.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will answer this in one line. Why should a Mullingar teenager count three ways?',
    intro: 'Because the question has two defensible answers and a tool will give you one of them.',
    p1: 'Ask how many bring banks in Westmeath take textiles and the answer is 42, which is correct. Ask how many do not and the honest answer is six confirmed, plus one unrecorded, and almost no automated approach will separate those. A tool asked to tidy the column will usually fill the blank with something plausible, and the resulting file will look complete while quietly containing a decision nobody made.',
    p2: 'What a learner brings is the willingness to keep a third category and to write down what it means. That is not a technical skill so much as an honest one, and it is the difference between a result that holds up and one that merely looks finished.',
    closer: 'So a Westmeath child learning to code in 2026 is learning to notice what is absent, which is a harder and more useful habit than noticing what is there.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Mullingar, Athlone, Moate or out by the lakes',
    intro: 'This is a wide county with two centres at opposite ends, which makes any class held in a room inconvenient for half the population.',
    cells: [
      { h3: 'Both ends at once', p: 'A learner in Athlone and one in Kinnegad sit in the same group, which no room in either town could manage on a weekday evening.' },
      { h3: 'Irish school stages', p: 'Junior Cycle, Transition Year, fifth and sixth year, named the way the family and the school name them.' },
      { h3: 'A free lesson that counts', p: 'Real teaching on a real task, closing with a level, a course and an hour, and no request for card details.' },
      { h3: 'Sorted by ability', p: 'Five to ten learners at one level, drawn from Westmeath and several other countries so each level meets at a workable hour.' },
      { h3: 'Weekly and fixed', p: 'Two lessons in most weeks, around eight a month, at the same hour, with pauses for mid-terms and exams agreed in advance.' },
      { h3: 'The clocks', p: 'India holds one time all year while Ireland changes twice, so our teachers are four and a half hours ahead in summer and five and a half in winter.' }
    ],
    spec: { title: 'A county where the car is the commute', p: 'With 24,378 people driving to work and only 339 taking a train, Westmeath families organise their evenings around the car. A class that needs no journey at all is worth more here than a slightly cheaper one that does.' }
  },

  fees: {
    h2: 'What classes cost in County Westmeath',
    intro: 'Three figures, and that is the whole of it.',
    first: 'One full lesson free, ending with a level named and a course recommended.',
    group: 'A month of classes, normally eight, with five to ten learners of similar ability.',
    private: 'The same month of classes, with the teacher working with a single learner.',
    closer: 'Billing is monthly in US dollars at the one rate charged outside India, so Moate pays what Mullingar pays and there is no euro list. Nothing is charged until the free lesson has settled a course and a weekly hour, and the pricing page covers pauses, missed lessons and changing format.'
  },

  reviewsH2: 'Six Google reviews from our families, printed unedited',

  book: {
    h2: 'Tell us about the learner',
    intro: 'The first task fits the person: a blank-versus-no quiz for a young child, a first file opened in code for the middle years, or the Horseleap puzzle for a teenager.',
    success: 'Thank you. We will be in touch about your County Westmeath class shortly.'
  },

  faq: {
    h2: 'County Westmeath coding class questions',
    intro: 'What families in the midlands ask before booking.',
    items: [
      { q: 'How many people live in County Westmeath?', a: 'Census 2022 counted 96,221, up 8% or 7,451 since 2016, with an average age of 38.6, just below the national 38.8.' },
      { q: 'Is Athlone or Mullingar the bigger town?', a: 'Athlone is published at 22,869 and Mullingar at 22,667, but Athlone\'s figure spans Westmeath and Roscommon because the town crosses the Shannon. Mullingar is the largest town wholly inside the county.' },
      { q: 'Which Westmeath schools first offered Leaving Certificate Computer Science?', a: 'Coláiste Mhuire in Mullingar and Moate Community School were both on the January 2018 first-phase list, which is better than several larger counties managed.' },
      { q: 'What is the Westmeath data project?', a: 'Students take the council\'s list of 49 recycling bring banks and work out how many offer textile recycling. The answer depends on how their code treats one empty cell, at Horseleap, which is neither a yes nor a no.' },
      { q: 'Is the dataset unreliable?', a: 'No, it is a good file: no duplicate rows and consistent coordinates. The council also states openly that it does not guarantee the information is complete, which is exactly the kind of honesty that invites checking.' },
      { q: 'Is there third level in the county?', a: 'The Technological University of the Shannon has its Athlone campus at University Road, N37 HD68. We are not connected with the university.' },
      { q: 'What hours do classes run?', a: 'Late afternoons, evenings and weekend mornings, with evening slots most popular here. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders classroom in Westmeath?', a: 'No, and we never suggest one. Teaching is live over video only, with no premises anywhere in Ireland. A learner needs a laptop or desktop, sound that works and a steady connection, and the number shown belongs to India.', boiler: true },
      { q: 'What do County Westmeath coding classes cost?', a: 'The first lesson is free. Continuing costs USD 100 a month for a shared place, which brings two live lessons a week and about eight a month with five to ten learners, or USD 150 a month one to one on the same schedule. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped on ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Across the midlands',
    html: 'East of here, <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a> and <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> have pages of their own, and south lies <a class="cg-inline-link" href="/coding-classes-in-county-laois">County Laois</a>. For choosing between online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>. Everything is gathered on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Westmeath and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-meath', label: 'County Meath' },
    { href: '/coding-classes-in-county-laois', label: 'County Laois' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-wmh .cg-hero-grid { align-items: start; gap: clamp(1.12rem, 3.42vw, 2.88rem); }
.cg-root.cg-wmh .cg-hero h1 { font-weight: 700; letter-spacing: -0.0188em; line-height: 1.068; }
.cg-root.cg-wmh .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.12rem; }
.cg-root.cg-wmh .cg-eyebrow { letter-spacing: 0.195em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wmh .cg-section-head h2 { max-width: 38ch; letter-spacing: -0.0095em; }
.cg-root.cg-wmh .cg-grid-3 { gap: clamp(1.09rem, 2.66vw, 2.12rem); }
.cg-root.cg-wmh .cg-table caption { letter-spacing: 0.026em; font-weight: 700; }
.cg-root.cg-wmh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wmh .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-wmh .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.08rem; }
.cg-root.cg-wmh .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'County Westmeath, Census 2022 (CSO): population 96,221, up 8 percent or 7,451 since 2016; average age 38.6 against 38.8 nationally; those aged 65 and over up 26 percent to 14,369; 11,096 people working from home at least one day a week, 26 percent of the workforce against 32 percent nationally; 42,077 people aged 15 and over at work, up 6,788 or 19 percent; 68 percent of households owning and 26 percent renting; 52 percent of residents, 50,115 people, born in the county, 29 percent or 27,937 elsewhere in the State and 18 percent or 17,565 outside it, up from 16 percent in 2016; non-Irish citizens stated as 11 percent in the summary release and 12 percent in Profile 5, with Polish 1,832, UK 1,357, Indian 1,034 and Lithuanian 1,005 the largest groups; dual Irish citizenship up from 1,826 to 3,180, most commonly Irish-UK 527, Irish-US 521 and Irish-Polish 332; 3,028 people moving into the county in the previous year, 1,748 from within Ireland and 1,280 from outside the State; 974 Travellers, down 3 percent on 2016; Catholics almost 70,600, 73 percent, down from 83 percent, with more than 10,200 stating no religion, 11 percent against 6 percent in 2016; unemployment 9 percent against 16 percent in 2016, with more than 4,400 unemployed, a fall of 34 percent; labour force participation 61 percent, the same as nationally; wholesale and retail the largest sector at almost 5,400 workers, health and social work just over 5,100 and manufacturing more than 4,500; 37,866 people travelling to work, 24,378 driving, 2,897 walking, 893 by bus, 518 cycling and 339 by train, with an average journey of 30.4 minutes against 28.8 in 2016; 3,390 third-level students commuting, most by car at 975; third-level qualifications just over 26,200, a rate of 42 percent against 45 percent nationally; almost 16,900 people, 27 percent, completing education at upper secondary level, with the average leaving age rising to 20.5. Towns: Mullingar 22,667 wholly within the county, average age 36.8 and 22.5 percent under 15; Athlone published as "Athlone, Counties Westmeath & Roscommon" at 22,869, average age 37.1 and 20.4 percent under 15, never used as a Westmeath figure; Kinnegad 3,064 with an average age of 34.1, the youngest town of at least 500 people; Moate 3,013. Gov.ie, 4 January 2018: Colaiste Mhuire in Mullingar and Moate Community School, Church Street, Moate were the county\'s first-phase Leaving Certificate Computer Science schools. TUS Athlone: University Road, Athlone, N37 HD68. The council\'s own civic offices file gives Athlone Civic Centre, Church Street at N37DN02 and County Buildings, Mount Street, Mullingar at N91FH4N.',
    localProject: 'A column where blank and NO are different answers. Westmeath County Council publishes Westmeath Recycle Bring Banks under a Creative Commons Attribution 4.0 licence, stating on the dataset page that there are 49 bring bank locations and that the council provides the information without guaranteeing it is accurate, correct or complete. Measured across the 49 rows: the Textiles column holds YES 42 times, NO 6 times and one empty string, at the Saint Peter and Paul Church car park in Horseleap, while the other four material columns are populated on every row. A filter on NO returns six sites and a fill or drop of blanks silently reclassifies the Horseleap row, so the honest reporting keeps three categories, yes, no and not recorded. Checked and found clean: zero duplicate rows; Athlone and Mullingar appearing on several rows each, which is legitimate because each town has several sites; and coordinates in Irish Transverse Mercator metres that agree with the separate latitude and longitude columns, so no coordinate-unit trap exists in this file. One settlement is rendered Ballnacarrigy, a likely misspelling flagged rather than corrected because the file holds no second spelling to prove a pattern.',
    requiredMentions: [
      '96,221',
      '22,869',
      '22,667',
      '14,369',
      '11,096',
      '17,565',
      '1,832',
      '974',
      '30.4 minutes',
      '26,200',
      'N37 HD68',
      'Horseleap',
      'Kinnegad'
    ],
    sources: [
      { claim: 'CSO summary results, Westmeath: "the population of Westmeath grew by 8% to 96,221, which means the number of people in the county rose by 7,451"; average age 38.6 against a national 38.8; those aged 65 and over up 26% to 14,369; "In Westmeath, 11,096 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 26% of the workforce. The national figure was 32%"; 42,077 at work, up 19%.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultswestmeath/' },
      { claim: 'CSO Profile 1, Westmeath: "Athlone was the largest town, with a population of 22,869 in April 2022"; 52% of residents born in the county, 29% elsewhere in the State and 18% or 17,565 outside it; Kinnegad the youngest town at an average age of 34.1.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementswestmeath/' },
      { claim: 'CSO table F1015: Athlone labelled "Athlone, Counties Westmeath & Roscommon" at 22,869; Mullingar, Co Westmeath 22,667 with average age 36.8 and 22.5% aged under 15; Kinnegad 3,064; Moate 3,013.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'CSO Profile 5, Westmeath: "In Westmeath non-Irish citizens accounted for 12% of the county\'s population", with Polish 1,832, UK 1,357, Indian 1,034 and Lithuanian 1,005; dual citizenships Irish-UK 527, Irish-US 521 and Irish-Polish 332; 3,028 people moving in during the previous year; 974 Travellers against 1,002 in 2016.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionwestmeath/' },
      { claim: 'CSO Profile 7, Westmeath: unemployment 9% against 16% in 2016 with more than 4,400 unemployed, a decrease of 34%; participation 61%, the same as nationally; 37,866 travelling to work with 24,378 driving, 893 by bus and 339 by train; average journey 30.4 minutes against 28.8; 3,390 third-level students commuting, 975 by car.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingwestmeath/' },
      { claim: 'CSO Profile 8, Westmeath: third-level qualifications just over 26,200, "a rate of 42% compared with 45% nationally"; almost 16,900 people, 27%, completing at upper secondary level; average leaving age rising to 20.5.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationwestmeath/' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes "Coláiste Mhuire / Mullingar, Co. Westmeath" and "Moate Community School / Church Street, Moate, Co. Westmeath".', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Technological University of the Shannon: Athlone campus at University Road, Athlone, N37 HD68.', url: 'https://tus.ie/contact-us/athlone-reception/' },
      { claim: 'Westmeath County Council civic offices dataset: "Athlone Civic Centre,Church Street,Athlone,Westmeath,N37DN02" and "Westmeath County Council,County Buildings,Mount Street,Mullingar,Westmeath,N91FH4N".', url: 'https://data.gov.ie/organization/westmeath-county-council' },
      { claim: 'Westmeath Recycle Bring Banks, licensed Creative Commons Attribution 4.0: 49 locations, with the council stating it "provides this information with the understanding that it is not guaranteed to be accurate, correct or complete"; the Textiles column holds YES 42 times, NO 6 times and one empty value at Horseleap.', url: 'https://data.gov.ie/dataset/westmeath-recycle-bring-banks' }
    ],
    rejectedClaims: [
      'Using Athlone\'s 22,869 as a Westmeath figure: the CSO publishes it across Westmeath and Roscommon.',
      'Reconciling the CSO\'s two published non-Irish shares of 11% and 12%: both are quoted instead.',
      'Correcting the settlement spelling Ballnacarrigy: it is flagged, since the file holds no second spelling to prove a pattern.',
      'Treating the blank textiles value as a no: it is reported as a third category.',
      'A county-level population density: the CSO publishes density only at electoral division level.',
      'A named private employer in the county: none met the standard of a quote from the employer\'s own page.',
      'Anything owned by the Meath, Laois, Kildare or other county pages in this cluster.'
    ]
  }
};
