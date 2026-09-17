'use strict';
// Drogheda (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables published for "Drogheda, Counties Louth & Meath", read 18
// September 2026, the Irish Rail station page for Drogheda (MacBride) and
// Highlanes Gallery's own site. Spine: a rate we work out is not a rate anybody
// publishes. The town's principal economic status table gives 438 looking for a
// first regular job, 725 short term unemployed and 1,287 long term unemployed,
// 2,450 together. Over the 35,128 people aged 15 and over in the same table that
// is 7.0%; over the 21,741 who are either at work or in those three categories
// it is 11.3%. Both divisions are defensible, the gap is 4.3 points, and neither
// figure is called an unemployment rate anywhere on the page, because that name
// belongs to a statistic the CSO publishes from its own series. New to the
// cluster: naming and provenance of a derived figure. Louth owns Drogheda's
// population 44,135 and the cross-county town lesson, so neither appears here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'DROGHEDA', blurb: 'One numerator, two defensible denominators, and a name the figure has not earned. On the Boyne, across two counties.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-drogheda',
  code: 'dro',
  accent: '#2E5B6B',
  accentRationale: 'Drogheda: a Boyne slate teal from the solver, distinct from the Louth county ochre and the Meath indigo either side of the town',
  pageType: 'city',
  place: {
    name: 'Drogheda',
    eyebrow: 'Drogheda, Louth and Meath',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Louth' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-louth', name: 'County Louth' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Louth', href: '/coding-classes-in-county-louth' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Drogheda, County Louth, Ireland',
  title: 'Best Coding Class in Drogheda | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Drogheda learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Drogheda, with a project on why one census figure produces two honest rates and no official name.',
  twitterDescription: 'Coding and AI classes for Drogheda, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Drogheda',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Drogheda, on the Louth and Meath boundary, taught live in English.'
  },

  h1: 'Coding classes in Drogheda',
  capsuleQ: 'What is the best coding class in Drogheda?',
  capsule: 'Drogheda counts 43,929 usual residents in the census town tables, living in 15,751 households, 12,860 of which report broadband. Our teaching arrives at the address: a live teacher twice in most weeks, with a group of five to ten learners at one level or with a single learner, for ages six through to sixty-seven. The opening lesson carries no charge. After it, a shared place is USD 100 a month and private teaching is USD 150.',
  lead: 'Three rows of one Drogheda census table count people who are not in work and are looking for it: 438 seeking a first regular job, 725 described as short term unemployed and 1,287 as long term unemployed. Add them and you have 2,450. Now choose a denominator. Against the 35,128 people aged fifteen and over in that same table, 2,450 is 7.0%. Against the 21,741 who are either at work or in those three rows, it is 11.3%. Both divisions are defensible and they differ by 4.3 points. What neither of them is allowed to be called is the unemployment rate for Drogheda, because that name belongs to a figure the Central Statistics Office produces from its own series and not to our arithmetic on one town table. Learning to keep those apart is the project on this page.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free coding lesson for a learner in Drogheda.',

  picks: {
    eyebrow: 'Course picks for Drogheda',
    h2: 'Courses Drogheda learners start with',
    intro: 'Choose on age and interest. The course teacher takes the free lesson and decides the level from what they see.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where the program has to say exactly what it measured.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from first principles, with results that carry a label rather than floating free.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real tables in Python, deriving figures and documenting exactly how each was made.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who publish numbers internally and need each one to carry its own definition.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two honest rates, no official name',
      intro: 'One numerator and two denominators, all four figures taken from the same Census 2022 table for Drogheda. The percentages are ours.',
      body: [
        { kind: 'table', caption: 'Building a rate from the principal economic status table', head: ['Part of the calculation', 'Rows used, as published', 'Figure'], rows: [
          ['Numerator', 'Looking for first regular job, short term unemployed, long term unemployed', '2,450'],
          ['Denominator one', 'Everyone aged 15 and over in the table', '35,128'],
          ['Result one', 'Our division', '7.0%'],
          ['Denominator two', 'At work, 19,291, plus the three rows above', '21,741'],
          ['Result two', 'Our division', '11.3%'],
          ['Same pair, all towns combined', 'Same rows, all-towns row of the table', '5.7% and 9.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The grouping is a choice too', p: 'The table publishes three separate rows and we added them. Somebody counting only the two described as unemployed would start from 2,012 instead of 2,450, and get different percentages from identical data. The grouping belongs in the definition.' },
          { h3: 'Both denominators are reasonable', p: 'Everyone aged fifteen and over is a clean, stated population. People at work plus people looking for work is closer to what most readers picture. Neither is wrong; publishing a percentage without saying which was used is.' },
          { h3: 'The name is the part that travels', p: 'A number quoted onwards loses its footnotes within one forward. Give it an official-sounding name and it will be compared with official series that were built differently. Our figures are described as our division of one census table, every time they appear.' }
        ] },
        { kind: 'callout', h3: 'Rates that need their definition attached', p: 'Conversion rate: out of visitors, sessions, or qualified leads. Churn rate: by customer, by revenue, monthly or annual. Vacancy rate: of posts, of budgeted posts, or of headcount. Pass rate: of entrants, of those who finished, or of those who sat the paper. In each case several honest numbers exist, they can differ by a factor rather than a few points, and the argument that follows is usually about definitions while sounding like it is about facts. A number that carries its own definition ends that argument before it starts.',
        },
        { kind: 'p', text: 'The project is a function with one required extra return value. Given the rows and a chosen denominator it returns the percentage and a definition string naming the numerator rows, the denominator and the table, and the program prints the two together or not at all. The learner produces both Drogheda figures, 7.0% and 11.3%, and then writes the sentence that a careless version would have produced instead, so that the difference between the two is on the page in front of them.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Drogheda in the town tables',
      h2: 'The town as the census counts it',
      intro: 'The CSO publishes this built-up area as Drogheda, Counties Louth and Meath, since the town sits on both sides of the Boyne and the county boundary. All figures below are for that area.',
      body: [
        { kind: 'table', caption: 'Drogheda, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '43,929'],
          ['Households', '15,751'],
          ['Households with a broadband connection', '12,860'],
          ['Working residents in the travel table', '19,199'],
          ['Working residents who drive', '9,508'],
          ['Children under fifteen in childcare', '2,457']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How working residents travel', p: 'Of 19,199, some 9,508 drive, 2,739 walk, 1,552 give home as their main answer, 1,126 take a bus, 1,025 travel as a car passenger, 822 use a van, 445 take a train and 291 cycle.' },
          { h3: 'Broadband', p: '12,860 of 15,751 households report broadband, 81.6% by our arithmetic, with 1,223 reporting no internet access, 277 another kind of connection and 1,391 not stating.' },
          { h3: 'Working from home', p: 'A separate table records 4,530 working residents doing at least some work at home, 12,291 who never do and 2,378 who did not state.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Drogheda (MacBride) as McBride Station, Dublin Road, Drogheda, Co. Louth, Eircode A92 W422. It is staffed from 05:30 until 01:30 on weekdays, with a booking office in the mornings, toilets, an enclosed waiting room, free Wi-Fi, a weekday coffee cart, a drinks machine on platform 1 and a filtered water refill unit.' }
      ]
    },
    {
      id: 'labels', tint: 'tint', eyebrow: 'The table in full',
      h2: 'Every row, with the wording the census uses',
      intro: 'The principal economic status table for Drogheda, all rows, out of 35,128 people aged fifteen and over. The labels are the table\'s own and the shares are ours.',
      body: [
        { kind: 'table', caption: 'Principal economic status, Drogheda residents aged 15 and over', head: ['Row as published', 'People', 'Share'], rows: [
          ['At work', '19,291', '54.9%'],
          ['Retired', '5,084', '14.5%'],
          ['Student', '3,853', '11.0%'],
          ['Looking after home or family', '2,318', '6.6%'],
          ['Unable to work due to permanent sickness or disability', '1,914', '5.4%'],
          ['Long term unemployed', '1,287', '3.7%'],
          ['Short term unemployed', '725', '2.1%'],
          ['Looking for first regular job', '438', '1.2%'],
          ['Other', '218', '0.6%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Nine rows, one person each', p: 'Everybody aged fifteen and over appears once, under the status recorded for them, so the rows sum to 35,128 and the shares sum to 100% give or take rounding. That is what makes any rate built from them arithmetically clean.' },
          { h3: 'Words matter in a table too', p: 'Short term and long term unemployed are separate published rows, as is looking for a first regular job. Reporting any total built from them without naming which rows went in leaves a reader unable to check the figure.' },
          { h3: 'No commentary attached', p: 'This page counts and labels. It offers no explanation for the size of any row, and nothing here is advice to anybody about work, study or benefits.' }
        ] },
        { kind: 'spec', title: 'The town gallery', p: 'Highlanes Gallery describes itself as Drogheda\'s Municipal Art Gallery, at 36 Saint Laurence Street, A92 F7PH, open from 10.30 to 5.00 Tuesday to Saturday. Its own site records that the gallery opened on 4 October 2006 and that the Drogheda Municipal Art Collection has grown to more than 100 artworks. We have no connection with it and reproduce none of its prices.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Drogheda',
      h2: 'How a course runs from here',
      intro: 'A weekly hour, a teacher who stays for all of it, and work set at the learner\'s own level.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary', p: 'Block coding and small games, taught early enough in the evening to suit a younger child.' },
          { h3: 'Secondary', p: 'Python, real websites and AI projects, from the junior years through to the exam classes.' },
          { h3: 'Adults', p: 'Data, Python and AI for adults at any starting point, including the 4,530 residents already working from home part of the week.' }
        ] },
        { kind: 'p', text: 'Irish Rail and Highlanes Gallery are named only from their own published pages, and neither is connected with us, nor is Louth County Council or Meath County Council. Census counts on this page come from Central Statistics Office Census 2022 tables for this built-up area, unchanged. The two rates in the project and the 81.6% broadband figure are ours, each printed with the rows and the denominator used, and none of them is given an official name, because a derived figure that borrows one is the exact mistake this page is written about.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From working it out to writing it down',
    intro: 'Ages are a guide; the free lesson sets the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Say what you counted', p: 'Counting in block code and labelling the answer so somebody else understands it.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Fractions with names', p: 'Building percentages in Python where the denominator is chosen deliberately and named.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Derived figures', p: 'Producing new numbers from published data and documenting how each was made.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Definitions that ship', p: 'Writing measures for work whose definition travels with the number into every report.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask for the unemployment rate in Drogheda',
    intro: 'Something will come back, named as though it were official.',
    p1: 'Hand a model this table and ask for a rate and it will divide two numbers and hand back a percentage, usually without saying which rows it summed or which denominator it used. Ask twice and the figure can change. Neither reply is likely to point out that the phrase requested names a statistic produced elsewhere, on a different basis.',
    p2: 'A learner who has built the definition string asks the question properly and answers it properly: here is the numerator, here is the denominator, here is the table, and here is why this is not the official series. It takes one extra sentence and it is the sentence that makes the number usable.',
    closer: 'Calculating is the easy half. Saying exactly what was calculated, and refusing a name the figure has not earned, is the half worth teaching.',
    blogAnchor: 'why learning to code is still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practicalities for a Drogheda household',
    intro: 'Six short points.',
    cells: [
      { h3: 'Taught as it happens', p: 'A teacher on the call throughout, working from the learner\'s screen rather than a script.' },
      { h3: 'Levels, not year groups', p: 'Five to ten learners at the same stage, from Drogheda, elsewhere in Ireland and other countries.' },
      { h3: 'Two a week', p: 'Roughly eight lessons a month, in a slot fixed once and then protected.' },
      { h3: 'Term dates first', p: 'Mid-terms, holidays and exam weeks are agreed into the plan before lessons start.' },
      { h3: 'What is needed', p: 'A computer with a keyboard, working sound, and a household connection that carries video.' },
      { h3: 'One to one', p: 'Where nothing at the right level runs at a workable hour, the course is taught privately.' }
    ],
    spec: { title: 'The lesson with no journey', p: 'Drogheda sends 9,508 residents out by car each working day and 445 by train. The coding lesson is the appointment that stays at the kitchen table.' }
  },

  fees: {
    h2: 'Drogheda class fees',
    intro: 'Three lines, all of it.',
    first: 'A full opening lesson, taught and assessed, at no cost.',
    group: 'One month in an ability group of five to ten, about eight live lessons.',
    private: 'One month of private teaching on the same weekly pattern.',
    closer: 'Fees are monthly and priced in US dollars on the single rate for families outside India, so Drogheda sees the same figure as Dundalk or Navan and no euro list beside it. Nothing is charged until the opening lesson has fixed a course and an hour, and the pricing page explains breaks, missed weeks and moves between group and private teaching.'
  },

  reviewsH2: 'Six of our families, printed from Google as written',

  book: {
    h2: 'Book a free Drogheda lesson',
    intro: 'Send an age and an interest and we plan the first hour around it, whether that is a game to build, a program to debug or a figure that needs its definition written beside it.',
    success: 'Thank you. We will be in touch about the Drogheda lesson shortly.'
  },

  faq: {
    h2: 'Drogheda coding class questions',
    intro: 'What Drogheda families ask us first.',
    items: [
      { q: 'How many people live in Drogheda?', a: 'The Census 2022 small area tables count 43,929 usual residents in the built-up area, which the CSO publishes as Drogheda, Counties Louth and Meath because the town crosses the county boundary. Our Louth page works through how a cross-county town is handled in the county figures.' },
      { q: 'What is the Drogheda data project?', a: 'Learners build a rate from the town\'s principal economic status table twice over: 2,450 people across three published rows, divided first by the 35,128 aged fifteen and over for 7.0%, then by the 21,741 at work or in those rows for 11.3%, with a definition string printed beside each figure.' },
      { q: 'Is 11.3% the unemployment rate in Drogheda?', a: 'No, and the page never calls it that. It is our division of three rows of one census table by a denominator we chose and named. The unemployment rate is a statistic the Central Statistics Office publishes from its own series, built on its own definitions.' },
      { q: 'How do Drogheda residents travel to work?', a: 'Of the 19,199 working residents in the travel table, 9,508 drive, 2,739 walk, 1,552 give working mainly at or from home, 1,126 take a bus, 1,025 go as a car passenger, 822 use a van, 445 take a train and 291 cycle.' },
      { q: 'What times do lessons run?', a: 'Afternoons, evenings and weekend mornings. The teachers are in India, whose clocks lead Irish ones by four and a half hours in summer and five and a half in winter, and we fix a weekly hour that works at both ends during the free lesson.' },
      { q: 'Do you teach adults in Drogheda?', a: 'Yes, to the age of sixty-seven, beginners included. After the free lesson an adult joins a group at their own level or is taught one to one.' },
      { q: 'What if a learner misses a lesson?', a: 'Tell us in advance where possible. The pricing page sets out how missed lessons and short breaks are handled, and nothing is decided after the fact.' },
      { q: 'Is there a Modern Age Coders classroom in Drogheda?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Drogheda cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Drogheda',
    html: 'The county pages on either side of the town are <a class="cg-inline-link" href="/coding-classes-in-county-louth">County Louth</a> and <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a>, with <a class="cg-inline-link" href="/best-coding-class-in-ashbourne">Ashbourne</a> to the south west and all of it inside <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> sets us beside other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists everything we have built.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Drogheda, Louth and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-louth', label: 'County Louth' },
    { href: '/coding-classes-in-county-meath', label: 'County Meath' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dro .cg-hero-grid { align-items: start; gap: clamp(1.21rem, 3.29vw, 2.69rem); }
.cg-root.cg-dro .cg-hero h1 { font-weight: 700; letter-spacing: -0.0201em; line-height: 1.049; }
.cg-root.cg-dro .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-dro .cg-eyebrow { letter-spacing: 0.186em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dro .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.0142em; }
.cg-root.cg-dro .cg-grid-3 { gap: clamp(1.14rem, 2.83vw, 2.21rem); }
.cg-root.cg-dro .cg-table caption { letter-spacing: 0.039em; font-weight: 700; }
.cg-root.cg-dro .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dro .cg-table tr:nth-child(odd) td:first-child { font-weight: 600; }
.cg-root.cg-dro .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 1.07rem; }
.cg-root.cg-dro .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Drogheda, the built-up area published as "Drogheda, Counties Louth & Meath", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T8T1TOWN22, principal economic status, both sexes, total 35,128: at work 19,291, retired 5,084, student 3,853, looking after home or family 2,318, unable to work due to permanent sickness or disability 1,914, long term unemployed 1,287, short term unemployed 725, looking for first regular job 438, other 218. Our arithmetic on those rows: the three job-seeking rows sum to 2,450; over 35,128 that is 7.0 percent; over 19,291 plus 2,450, which is 21,741, it is 11.3 percent; the all-towns row of the same table gives 27,967 plus 54,527 plus 83,826, which is 166,320, over 2,921,013 for 5.7 percent and over 1,810,813 for 9.2 percent. SAP2022T2T1TOWN22: usual residents 43,929, born in Ireland 33,153, rest of world 3,949, other EU 3,368, United Kingdom 1,763, Poland 1,053, India 643. SAP2022T15T2TOWN22: households 15,751, broadband 12,860, other 277, none 1,223, not stated 1,391. SAP2022T11T1TOWN22 to work total 19,199: car driver 9,508, on foot 2,739, not stated 1,578, work mainly at or from home 1,552, bus 1,126, car passenger 1,025, van 822, train DART or Luas 445, bicycle 291, motorcycle 64, other including lorry 49. SAP2022T11T4TOWN22: 19,199 working persons, 4,530 work from home at least some of the time, 12,291 never, 2,378 not stated. SAP2022T11T5TOWN22: 2,457 children under 15 in childcare, 1,057 aged 0 to 4 and 1,400 aged 5 to 14. Irish Rail, Drogheda (MacBride): "McBride Station Dublin Road Drogheda Co. Louth", "Eircode A92 W422", staffing "Monday to Friday: 05:30 to 01:30", booking office "Monday to Friday: 05:40 - 12:20", "There is Free wi-fi at the station", "Coffee Cart (Monday - Friday 05:30 to 12:30)", "Drinks vending machine on platform 1", "Ecofill Triple filtered water refill unit". Highlanes Gallery: "Drogheda\'s Municipal Art Gallery", "36 Saint Laurence Street, A92 F7PH Drogheda, Ireland", "Open 10.30 am-5.00 pm, Tuesday - Saturday", "the gallery opened its doors on October 4, 2006", "the Drogheda Municipal Art Collection has grown to include more than 100 artworks".',
    localProject: 'Two honest rates, no official name. Drogheda\'s principal economic status table publishes 438 people looking for a first regular job, 725 short term unemployed and 1,287 long term unemployed, which we group into one numerator of 2,450. Divided by the 35,128 people aged fifteen and over in the same table it is 7.0 percent; divided by the 21,741 who are either at work, 19,291, or in those three rows, it is 11.3 percent. Both denominators are defensible, the gap is 4.3 percentage points, and the grouping of the three rows is itself a choice, since a stricter reading of two rows would start at 2,012. The page therefore never uses the phrase unemployment rate for either figure: that name belongs to a statistic the CSO publishes from its own series on its own definitions, and a derived figure which borrows an official name gets compared with series built differently. The learner writes a function returning both the percentage and a definition string naming the rows, the denominator and the table, printing them together or not at all, and the all-towns row gives 5.7 and 9.2 percent on the same pair of readings for scale. New to the cluster: naming and provenance of a derived figure.',
    requiredMentions: [
      '43,929',
      '15,751',
      '12,860',
      '19,199',
      '9,508',
      '1,552',
      '2,450',
      '21,741',
      '35,128',
      '2,457',
      'A92 W422',
      'A92 F7PH'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T8T1TOWN22, principal economic status, Drogheda, Counties Louth & Meath, both sexes: at work 19,291, retired 5,084, student 3,853, looking after home or family 2,318, unable to work due to permanent sickness or disability 1,914, long term unemployed 1,287, short term unemployed 725, looking for first regular job 438, other 218, total 35,128. All-towns row: 27,967, 54,527 and 83,826 across the same three job-seeking rows, at work 1,644,493, total 2,921,013.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T8T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Drogheda: usual residents 43,929; households 15,751, broadband 12,860, no internet 1,223, not stated 1,391; to work 19,199 with car driver 9,508, on foot 2,739, mainly at or from home 1,552, bus 1,126, car passenger 1,025, van 822, train 445, bicycle 291; 4,530 work from home at least some of the time, 12,291 never, 2,378 not stated; 2,457 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Drogheda (MacBride) station: "McBride Station Dublin Road Drogheda Co. Louth", "Eircode A92 W422"; staffed "Monday to Friday: 05:30 to 01:30"; booking office "Monday to Friday: 05:40 - 12:20"; "There is Free wi-fi at the station"; "Coffee Cart (Monday - Friday 05:30 to 12:30)"; "Ecofill Triple filtered water refill unit".', url: 'https://www.irishrail.ie/en-ie/station/drogheda-macbride' },
      { claim: 'Highlanes Gallery: "Drogheda\'s Municipal Art Gallery"; "36 Saint Laurence Street, A92 F7PH Drogheda, Ireland"; "Open 10.30 am-5.00 pm, Tuesday - Saturday"; "the gallery opened its doors on October 4, 2006"; "the Drogheda Municipal Art Collection has grown to include more than 100 artworks".', url: 'https://highlanes.ie/' }
    ],
    rejectedClaims: [
      'Calling either 7.0 percent or 11.3 percent an unemployment rate, or comparing either with an officially published rate.',
      'Any explanation for the size of any row in the principal economic status table, and any advice to any reader about work, study or benefits.',
      'The census town-list population of Drogheda and the cross-county town lesson: the County Louth page owns both, so the two-county label is stated as a fact only.',
      'Mixing the 19,291 at work in the status table with the 19,199 in the travel table: each figure is used only with its own table.',
      'Any Highlanes Gallery admission price, and any claim about the gallery beyond its own published description.',
      'Any figure for the Meath side of the built-up area separately: the CSO publishes Drogheda as one area.'
    ]
  }
};
