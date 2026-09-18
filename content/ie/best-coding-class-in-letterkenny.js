'use strict';
// Letterkenny (cg- town page, Ireland cluster, Phase 7). Facts from the CSO
// Census 2022 town tables for "Letterkenny, Co Donegal", read 19 September 2026,
// the HSE page for Letterkenny University Hospital and An Grianan Theatre's own
// site. Spine: a table is one long list. The internet access table arrives from
// the CSO as 4,340 numbers in a single array, 5 answer categories times 868 area
// labels, with the town varying fastest. Letterkenny's broadband count, 6,875, is
// at position 688. Assume the dimensions the other way round and the same code
// reads 2, which is Ballybrittas's Other row; step one place too far and it reads
// 99, Drumkeen's broadband count. All run in this session against the file. New
// family for the cluster: data formats, array indexing and identifiers. Donegal
// owns the town-list population 22,549 and the ATU eircode F92 FC93, so neither
// appears. Northern Ireland is outside this cluster and is not discussed.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'LETTERKENNY', blurb: 'Four thousand three hundred and forty numbers in one line, and the arithmetic that finds the right one. Letterkenny, and how data files really store a table.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-letterkenny',
  code: 'lky',
  accent: '#5E2E3A',
  accentRationale: 'Letterkenny: a Swilly claret from the solver, distinct from the Donegal county accent and the other north-west pages',
  pageType: 'city',
  place: {
    name: 'Letterkenny',
    eyebrow: 'Letterkenny, County Donegal',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Donegal' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-donegal', name: 'County Donegal' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Donegal', href: '/coding-classes-in-county-donegal' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Letterkenny, County Donegal, Ireland',
  title: 'Best Coding Class in Letterkenny | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Letterkenny learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Letterkenny, with a project on how a census table is really stored and how one wrong index returns the wrong town.',
  twitterDescription: 'Coding and AI classes for Letterkenny, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Letterkenny',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Letterkenny, County Donegal, taught live in English.'
  },

  h1: 'Coding classes in Letterkenny',
  capsuleQ: 'What is the best coding class in Letterkenny?',
  capsule: 'Letterkenny has 22,252 usual residents in the census town tables, the 21st largest of 867 towns, and 8,431 households, 6,875 of them on broadband. Every lesson with us is live on video, twice in most weeks, with a teacher who works through the course with a group of five to ten at the same level or with one learner alone. Anyone from six to sixty-seven can join. The opening lesson is free, and after it a place costs USD 100 a month in a group or USD 150 one to one.',
  lead: 'A census table looks like a grid, and it does not arrive as one. The CSO sends the internet access table as a single line of 4,340 numbers: five answer categories multiplied by 868 area labels, one after another, with a short description of which dimension varies fastest. Letterkenny\'s broadband count, 6,875, is number 688 in that line. A program that reads the description correctly finds it. A program that assumes the dimensions run the other way round reads number 3,440 instead and gets 2, which is the Other row for Ballybrittas in County Laois. A program that is off by one gets 99, the broadband count for Drumkeen down the road. None of those mistakes raises an error. Every one of them was run against the real file while writing this page.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free coding lesson for a learner in Letterkenny.',

  picks: {
    eyebrow: 'Course picks for Letterkenny',
    h2: 'Courses Letterkenny learners begin with',
    intro: 'Choose on age and interest, and let the opening lesson with that course\'s teacher confirm where the learner should start.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with lists, where item three and item four are different things and it matters which you pick.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python lists and indexes from the start, including why counting begins at zero.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Real data files, nested structures and the index arithmetic that turns a flat list back into a table.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults pulling data from APIs, where a quietly wrong index is worse than a crash.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A table is one long list',
      intro: 'How the CSO internet access table is actually stored, and what three ways of reading it return for Letterkenny. Every line was run against the downloaded file on 19 September 2026.',
      body: [
        { kind: 'table', caption: 'Finding one number in a flat array', head: ['Step or mistake', 'What happens'], rows: [
          ['The file\'s own description of its shape', 'Statistic 1, census year 1, internet answer 5, area label 868: 4,340 values in one array'],
          ['Which dimension varies fastest', 'The area label, so neighbouring positions hold neighbouring towns for the same answer'],
          ['Correct position for Letterkenny broadband', 'Answer 0 times 868, plus town 688, gives position 688: the value is 6,875'],
          ['Dimensions assumed the other way round', 'Town 688 times 5, plus answer 0, gives position 3,440: the value is 2, the Other row for Ballybrittas, Co Laois'],
          ['One position too far', 'Position 689 holds 99, the broadband count for Drumkeen, Co Donegal'],
          ['One answer too far', 'Position 1,556 holds 658, Letterkenny\'s No row rather than its broadband row']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The shape is data too', p: 'The order of the dimensions and their sizes travel with the numbers. Code that reads them from the file works on the next table; code that assumes them works until the publisher adds one category, and then silently reads the wrong column.' },
          { h3: 'The dangerous error is the plausible one', p: 'Reading 2 for a town of 22,000 people is obviously wrong and gets caught. Reading 99 or 658 might not be. A test that checks one known value against the published table is the cheapest insurance in data work.' },
          { h3: 'Towns carry identifiers, not just names', p: 'Each area label in the file has a 36-character identifier; Letterkenny\'s begins f5f669fb. Names change, repeat and carry accents. The identifier is what a program should join on.' }
        ] },
        { kind: 'callout', h3: 'Numbers that are really names', p: 'The same trap runs the other way. The HSE prints Letterkenny University Hospital\'s number as 074 912 5888; store that as a number and it becomes 749125888, zero gone, which we checked in code. Phone numbers, eircodes, school roll numbers, account numbers and product codes are identifiers that happen to contain digits. They are never added up, so they should never be stored as numbers. A learner who asks "would I ever do arithmetic on this?" before choosing a type has avoided a whole family of bugs.',
        },
        { kind: 'p', text: 'The project is a reader for the CSO file format written from scratch, no library. The learner loads the JSON, prints each dimension and its size, writes a function that turns a set of positions into one flat index, and checks it by fetching Letterkenny\'s five internet answers and confirming they sum to the published total of 8,431. Then they break it on purpose, swapping two dimensions, and write down how quickly they would have noticed if they had not been looking. The last line of the exercise is a single assertion against a known value, kept in the code forever after.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Letterkenny in the town tables',
      h2: 'The numbers at position 688, and around it',
      intro: 'Published for the built-up area Letterkenny, Co Donegal, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Letterkenny, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '22,252'],
          ['Households', '8,431'],
          ['Households reporting broadband', '6,875'],
          ['Working residents in the travel table', '9,631'],
          ['Residents travelling to school, college or childcare', '6,068'],
          ['Working residents who work from home at least sometimes', '2,574']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of the 9,631 working residents, 5,342 drive, 1,281 give home as their main answer, 967 walk, 672 travel as a car passenger, 416 by van, 87 by bus and 66 by bicycle, with 759 not stating.' },
          { h3: 'The school journey', p: 'Of 6,068 journeys to school, college or childcare, 3,069 are as a car passenger, 1,217 by bus, 905 on foot and 245 driving, with 555 not stating.' },
          { h3: 'Internet in full', p: 'The five answers that sit at positions 688, 1,556 and onwards in the file: 6,875 broadband, 658 no internet, 773 not stated and 125 another connection, totalling 8,431 households.' }
        ] },
        { kind: 'spec', title: 'The hospital', p: 'The HSE lists Letterkenny University Hospital at Kilmacrennan Road, Letterkenny, Donegal, F92 AE81. We name it here as the town\'s largest public institution with a published address, and because its printed phone number carries the leading zero that the project warns about. We have no connection with the hospital.' }
      ]
    },
    {
      id: 'order', tint: 'tint', eyebrow: 'Reading the file honestly',
      h2: 'Four checks before trusting any value',
      intro: 'What the Letterkenny exercise turns into, as a routine for any data file a learner loads.',
      body: [
        { kind: 'table', caption: 'Checks that catch indexing mistakes', head: ['Check', 'Applied to this file'], rows: [
          ['Does the array length equal the product of the dimension sizes?', 'Yes: 1 times 1 times 5 times 868 is 4,340, the length of the value array'],
          ['Do the parts add up to the published total?', 'Yes: 6,875 plus 658 plus 773 plus 125 is 8,431, the Total answer for Letterkenny'],
          ['Does a value you already know come back unchanged?', 'Yes: position 688 returns 6,875, which matches the town profile'],
          ['Is the category order what you assumed?', 'No: the file lists Broadband, No, Not stated, Other, Total, which is not the order a reader might guess']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The order of categories is a surprise', p: 'Nothing says the answers arrive in a logical order. Here Total comes last and Not stated sits between No and Other. Code that assumes an order instead of reading the labels will mislabel every row it prints.' },
          { h3: 'The order of towns is a surprise too', p: 'The file starts with Carlingford, Co Louth, not with any alphabetical or population order. Position 688 means nothing about Letterkenny except where it happens to sit in this one file.' },
          { h3: 'Checks cost seconds', p: 'Each of the four checks above is one line of code. Together they would have caught every mistake in the project table before a single wrong number reached a report.' }
        ] },
        { kind: 'spec', title: 'The theatre', p: 'An Grianan Theatre describes itself on its own site as an arts, music and comedy venue in Letterkenny, Donegal. We have no connection with it, and none of its prices appears here.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Letterkenny',
      h2: 'How the lessons run from here',
      intro: 'Two lessons in most weeks, a teacher who is present for all of each one, and work pitched at the learner\'s level.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary school years', p: 'Block coding and games, where lists and positions turn up early and naturally.' },
          { h3: 'Secondary school years', p: 'Python, working websites and AI projects, with real files and real data once the basics are secure.' },
          { h3: 'Adult learners', p: 'Plenty start with no background at all, and 2,574 working residents here already do part of their job from home.' }
        ] },
        { kind: 'p', text: 'The HSE and An Grianan Theatre are named from their own published pages, and neither has any connection with us, nor does Donegal County Council. Census counts are Central Statistics Office figures for this built-up area, printed as published. The array positions, the wrong-index results and the leading-zero example were all produced by running code on 19 September 2026 against the files and pages quoted, and the page reports what the code returned rather than what it ought to have returned.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a list of items to a table in a file',
    intro: 'Treat the ages as a starting guess; the opening lesson decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'First, second, third', p: 'Lists and positions in block code, and why picking the right item matters.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Counting from zero', p: 'Python lists and indexes, off-by-one errors, and how to test for them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Reading real formats', p: 'JSON, nested data and index arithmetic, with checks against known values.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Data pipelines at work', p: 'Pulling data from APIs and files and proving the right number came out.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask a model to parse this file',
    intro: 'The code will run. Whether it reads the right cell is another question.',
    p1: 'Generated parsers for formats like this one often hard-code an assumed dimension order, because the example in the prompt happened to have one. On the next file, or after the publisher adds a category, the same code returns neighbouring values without complaint. It looks finished, it passes a glance, and it reports Drumkeen as Letterkenny.',
    p2: 'A learner who has built the reader by hand checks three things in any generated version: that it reads the shape from the file, that it verifies one known value, and that the parts add up to the total. None of those takes more than a minute, and together they turn plausible code into trustworthy code.',
    closer: 'Generating a parser takes seconds. Knowing how it could be quietly wrong is the part a person has to supply.',
    blogAnchor: 'why coding is worth a young person\'s time'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The practical arrangements',
    intro: 'What a Letterkenny household needs to know.',
    cells: [
      { h3: 'Live every time', p: 'A teacher on the call for the whole lesson, working from what is on the learner\'s screen.' },
      { h3: 'Groups at one level', p: 'Five to ten learners at the same stage, joining from Letterkenny, the rest of Ireland and abroad.' },
      { h3: 'Most weeks, twice', p: 'Roughly eight lessons a month at the hour chosen when the course begins.' },
      { h3: 'The school calendar', p: 'Holidays, mid-terms and exam weeks are allowed for when the timetable is set.' },
      { h3: 'Equipment', p: 'A desktop or laptop, a microphone with speakers or a headset, and broadband able to carry an hour of video.' },
      { h3: 'One to one', p: 'Where a learner\'s level has no matching group at a sensible hour, the course goes private.' }
    ],
    spec: { title: 'Stored as written', p: 'A learner\'s contact number goes into our records as text, leading zero and all, for the same reason the project gives. It is a small thing and exactly the kind that breaks otherwise.' }
  },

  fees: {
    h2: 'Letterkenny class fees',
    intro: 'The whole price list.',
    first: 'An opening lesson, taught in full and assessed, at no charge.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of private lessons at the same weekly frequency.',
    closer: 'The monthly price is set in US dollars and is the same for every household outside India, so there is no euro figure to compare it with. Payment follows the decision, never the other way round: course and hour first, invoice second, and the pricing page explains the awkward weeks, from school holidays to a missed lesson or a change of format.'
  },

  reviewsH2: 'Google reviews from six of our families, as posted',

  book: {
    h2: 'Book a free Letterkenny lesson',
    intro: 'Say how old the learner is and what they are into. The first hour is shaped around that and might finish with a game, a working program, or a file read correctly on the second attempt.',
    success: 'Thank you. We will be in touch about the Letterkenny lesson shortly.'
  },

  faq: {
    h2: 'Letterkenny coding class questions',
    intro: 'What people in Letterkenny ask before they book.',
    items: [
      { q: 'How many people live in Letterkenny?', a: 'The Census 2022 small area tables give 22,252 usual residents for the built-up area of Letterkenny, in 8,431 households. Our Donegal page relies on the census town list, a separate product with its own count.' },
      { q: 'What is the Letterkenny data project?', a: 'Learners write a reader for the CSO data format from scratch, find Letterkenny\'s broadband count at position 688 of a 4,340-number array, and then deliberately swap two dimensions to see the same code return 2, a figure belonging to a different town and a different answer.' },
      { q: 'Why would a program return the wrong town without an error?', a: 'Because every position in the array holds a real number. An index that is off by one or built in the wrong order still lands on a valid value, just the wrong one, which is why checking a known value matters.' },
      { q: 'How do Letterkenny residents travel to work?', a: 'Of the 9,631 working residents in the travel table, 5,342 drive, 1,281 give working mainly at or from home, 967 walk, 672 travel as a car passenger, 416 by van, 87 by bus and 66 by bicycle, with 759 not stating.' },
      { q: 'When are lessons scheduled?', a: 'After school, in the evening and at weekends. Ireland runs four and a half hours behind India while Irish clocks are forward and five and a half once they fall back, and that gap decides which evening slots we can offer.' },
      { q: 'Can adults in Letterkenny sign up?', a: 'Yes, up to sixty-seven. Plenty of adults begin with no coding at all, and the opening lesson settles whether they learn in a matched group or with a teacher alone.' },
      { q: 'What does counting from zero mean?', a: 'Most programming languages number the first item in a list as zero, so the 689th town in the file sits at position 688. It is the most common source of off-by-one mistakes, and the project makes a learner meet it deliberately.' },
      { q: 'Is there a Modern Age Coders classroom in Letterkenny?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Letterkenny cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Letterkenny',
    html: 'The county is covered on the <a class="cg-inline-link" href="/coding-classes-in-county-donegal">County Donegal</a> page, part of the three-county <a class="cg-inline-link" href="/coding-and-ai-classes-in-ulster">Ulster</a> page for Cavan, Donegal and Monaghan, with <a class="cg-inline-link" href="/coding-classes-in-county-sligo">County Sligo</a> to the south. To see how we compare with other online providers, <a class="cg-inline-link" href="/best-online-coding-classes-ireland">start here</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> gathers every town and county page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Letterkenny, Donegal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-donegal', label: 'County Donegal' },
    { href: '/coding-and-ai-classes-in-ulster', label: 'Ulster page' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lky .cg-hero-grid { align-items: start; gap: clamp(1.17rem, 3.23vw, 2.6rem); }
.cg-root.cg-lky .cg-hero h1 { font-weight: 700; letter-spacing: -0.0197em; line-height: 1.052; }
.cg-root.cg-lky .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-lky .cg-eyebrow { letter-spacing: 0.178em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lky .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0128em; }
.cg-root.cg-lky .cg-grid-3 { gap: clamp(1.1rem, 2.75vw, 2.15rem); }
.cg-root.cg-lky .cg-table caption { letter-spacing: 0.031em; font-weight: 700; }
.cg-root.cg-lky .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lky .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-lky .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.08rem; }
.cg-root.cg-lky .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Letterkenny, the built-up area "Letterkenny, Co Donegal", CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T15T2TOWN22 as delivered in JSON-stat: dimensions in the order Statistic (1), Census Year (1), Internet (5: Broadband, No, Not stated, Other, Total, in that file order), Towns 2022 (868 area labels, the first being Carlingford, Co Louth); value array length 4,340; Letterkenny at town position 688 counting from zero, identifier f5f669fb-6aa8-431b-acb2-8bf88185665a; Broadband at answer position 0; flat index 688 holds 6,875. Run in this session: treating the town as the outer dimension gives index 3,440, which holds 2, the Other answer for Ballybrittas, Co Laois; index 689 holds 99, Broadband for Drumkeen, Co Donegal; index 1,556 holds 658, Letterkenny\'s No answer. Letterkenny internet answers: broadband 6,875, no 658, not stated 773, other 125, total 8,431. SAP2022T2T1TOWN22: usual residents 22,252, born in Ireland 15,363, 21st largest of the 867 towns. SAP2022T11T1TOWN22 to work total 9,631: car driver 5,342, work mainly at or from home 1,281, on foot 967, not stated 759, car passenger 672, van 416, bus 87, bicycle 66, train 10; to school, college or childcare total 6,068: car passenger 3,069, bus 1,217, on foot 905, not stated 555, car driver 245, bicycle 20. SAP2022T11T4TOWN22: 2,574 work from home at least some of the time, 5,930 never, 1,127 not stated. SAP2022T11T5TOWN22: 1,452 children under 15 in childcare. HSE: Letterkenny University Hospital, "Kilmacrennan Road, Letterkenny, Donegal, F92 AE81", phone printed as "074 912 5888"; in JavaScript Number applied to "0749125888" returns 749125888, run in this session. An Grianan Theatre: own site title describes it as an arts, music and comedy venue in Letterkenny, Donegal.',
    localProject: 'A table is one long list. The CSO delivers the internet access table in JSON-stat as a single array of 4,340 numbers, five answer categories times 868 area labels, together with the order and size of each dimension; here the area label varies fastest. Letterkenny\'s broadband count of 6,875 is at position 688. The page runs three wrong readings against the real file: assuming the dimensions the other way round gives position 3,440, which holds 2, the Other answer for Ballybrittas, Co Laois; stepping one position too far gives 99, the broadband count for Drumkeen, Co Donegal; stepping one answer too far gives 658, Letterkenny\'s No row. None raises an error, and the plausible ones are the dangerous ones. Four checks catch all of them: array length equals the product of the dimension sizes, the parts sum to the published total of 8,431, a known value returns unchanged, and the category order is read from the labels, which in this file run Broadband, No, Not stated, Other, Total. The callout extends the point to identifiers that contain digits, using the hospital number printed as 074 912 5888, which becomes 749125888 when stored as a number. The learner writes the reader from scratch, verifies it, breaks it deliberately and keeps one assertion against a known value. New family for the cluster: data formats, array indexing and identifiers.',
    requiredMentions: [
      '22,252',
      '8,431',
      '6,875',
      '9,631',
      '5,342',
      '6,068',
      '3,069',
      '1,217',
      '2,574',
      '688',
      '4,340',
      'F92 AE81'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T15T2TOWN22 in JSON-stat: dimension order Statistic, Census Year, Internet (5), Towns 2022 (868); 4,340 values; Letterkenny, Co Donegal at town position 688 with identifier f5f669fb-6aa8-431b-acb2-8bf88185665a; broadband 6,875, no 658, not stated 773, other 125, total 8,431; position 689 holds Drumkeen, Co Donegal broadband 99; position 3,440 holds Ballybrittas, Co Laois Other 2.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Letterkenny: usual residents 22,252; to work 9,631 with car driver 5,342, mainly at or from home 1,281, on foot 967, car passenger 672, van 416, bus 87, bicycle 66, not stated 759; to school, college or childcare 6,068 with car passenger 3,069, bus 1,217, on foot 905, car driver 245; 2,574 work from home at least some of the time; 1,452 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Health Service Executive: Letterkenny University Hospital, "Kilmacrennan Road, Letterkenny, Donegal, F92 AE81", phone "074 912 5888".', url: 'https://www2.hse.ie/services/hospitals/letterkenny-university-hospital/' },
      { claim: 'An Grianan Theatre, own site: an arts, music and comedy venue in Letterkenny, Donegal.', url: 'https://www.angrianan.com/' }
    ],
    rejectedClaims: [
      'Any array position or wrong-index value quoted from reasoning rather than execution: all were run against the downloaded file.',
      'Any meaning attached to Letterkenny\'s position in the file: the town order is the file\'s, not alphabetical or by size.',
      'The census town-list population of Letterkenny and the ATU Donegal eircode: the County Donegal page owns both.',
      'An address for An Grianan Theatre or the Regional Cultural Centre: neither appeared in their page text, so none is quoted.',
      'Any mention of places across the border: Northern Ireland is outside this cluster.',
      'Any reason for Letterkenny\'s travel shares or broadband level.'
    ]
  }
};
