'use strict';
// Dun Laoghaire-Rathdown (cg- county/local-authority page, Ireland cluster,
// Phase 1). Spine: results that are not numbers. The council's bathing water
// quality files for 2022 to 2024 (data.gov.ie, CC BY 4.0) store E. coli and
// Enterococci results below the detection limit as text such as "<10" and
// "<1", and some above the range as ">2000" or ">24196". Coercing the columns
// to numbers silently drops those rows: E. coli "<10" is 102 of 337 samples in
// 2022, 67 of 355 in 2023 and 89 of 318 in 2024, and the very worst readings
// become blanks too. A second trap: 2022 names "Beach Gardens Dun Laoghaire"
// (36 rows) and "Dun Laoghaire Baths" (1 row); 2023 and 2024 use only the
// latter, so a Dun Laoghaire trend line silently changes site. Place facts
// read at primary sources on 16 September 2026: CSO table F1004A and the CSO
// Dublin press statements (Profiles 3, 5, 7, 8), dlrcoco.ie, the library
// service, TFI, Irish Rail, Sandyford Business District, the Dalkey School
// Project, IADT and Newpark Comprehensive. Owned by the Dublin page and NOT
// used here: Dublin City's 10,308 Indian citizens and the county-wide figures.

module.exports = {
  clusterName: 'Ireland',
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-dun-laoghaire-rathdown',
  code: 'dlr',
  accent: '#2A5B88',
  accentRationale: 'Dun Laoghaire-Rathdown: a Dublin Bay blue from the solver for the county of the DART coast, separated from the Dublin red, both Irish greens and every other Ireland preview page',
  pageType: 'governorate',
  place: {
    name: 'Dún Laoghaire-Rathdown',
    eyebrow: 'Dún Laoghaire-Rathdown, County Dublin',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-dublin', name: 'Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dún Laoghaire-Rathdown, County Dublin, Ireland',
  title: 'Coding Classes in Dún Laoghaire-Rathdown | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Dún Laoghaire-Rathdown, from Blackrock and Dundrum to Dalkey and Shankill, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Dún Laoghaire-Rathdown, on a page about bathing water tests at the Forty Foot and the results that arrive as text instead of numbers.',
  twitterDescription: 'Coding classes for Dún Laoghaire-Rathdown, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Dún Laoghaire-Rathdown Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across Dún Laoghaire-Rathdown, taught live in English.'
  },

  h1: 'Coding classes in Dún Laoghaire-Rathdown',
  capsuleQ: 'What are the best coding classes in Dún Laoghaire-Rathdown?',
  capsule: 'Dún Laoghaire-Rathdown had 233,860 people at the 2022 census, and the statistics office found it had the highest rate in the country of people working from home at least part of the time. It is home to 4,958 Indian citizens, 42,303 children and the Sandyford Business District, whose own figures are 1,000 companies and 26,000 employees. For a family here the best coding class is one that fits a household already used to working and learning from home: live, at a fixed hour, with a teacher who reads the learner\'s code. Modern Age Coders teaches online from India to learners aged 6 to 67, in groups of five to ten placed by ability or one to one. There is no charge for the first lesson; from then on it is USD 100 a month in a group or USD 150 a month with a private teacher.',
  lead: 'Every summer the council tests the water at the county\'s bathing places, from Seapoint and Sandycove to the Forty Foot and Killiney Bay, and publishes the results. Download the files for 2022 to 2024 and something odd appears in the columns that should hold numbers. Many E. coli results read "&lt;10": the laboratory found less than it can measure, so it wrote the limit instead of a number. A few read "&gt;2000", or in 2024 "&gt;24196": more than it can count. To a person those entries are perfectly clear. To a spreadsheet or a line of Python asked to average the column, they are not numbers at all, and they vanish. In 2022, 102 of the 337 E. coli results were written "&lt;10". Drop them and the average is taken over the dirtier samples only; drop the "greater than" results too and the worst days disappear with them. The water did not change. The arithmetic did. That quiet loss is what this page teaches, because it happens in every dataset with measurements that have limits.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Dún Laoghaire-Rathdown.',

  picks: {
    eyebrow: 'Course picks for the county',
    h2: 'Four courses for the coast between Booterstown and Shankill',
    intro: 'A child in Glenageary who wants to make a game, a teenager in Stillorgan curious about data, a student in Dundrum heading for third level, and a parent in Cabinteely who works from home and wants to automate the weekly report. Each one starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with a beach thermometer game, where some readings are too small to show and the child decides what the game should do with them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Python on the council\'s bathing water files: find the results written as text, and decide honestly what to do with them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Models trained and tested by the learner, including what a model does when its training data hides the extreme cases.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Spreadsheets and AI tools for people who work from home, with an eye for cells that look like numbers and are not.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'A county of 233,860 that leads the country for working from home',
      intro: 'The council describes itself as one of three local authorities that succeeded the former Dublin County Council on its abolition in 1994. The figures below are the statistics office\'s Census 2022 results for the council area.',
      body: [
        { kind: 'table', caption: 'Dún Laoghaire-Rathdown in Census 2022, Central Statistics Office', head: ['Measure', 'Figure', 'What the statistics office says'], rows: [
          ['Population', '233,860', '112,032 men and 121,828 women'],
          ['Working from home at least part of the time', 'just over 60,300', 'The highest rate in the country; almost 39,900 never worked from home'],
          ['Unemployment', '6 percent', 'Joint lowest in the country, with long-term unemployment at a joint lowest 3 percent'],
          ['Professional, scientific and technical work', 'almost 14,000 people', 'Working in that sector'],
          ['Children', '42,303', 'And 37 percent of under-15s, 15,859 children, in childcare'],
          ['Families', '59,431', 'Up 6 percent on 2016'],
          ['Indian citizens', '4,958', 'Beside 3,639 UK citizens'],
          ['Average age at the end of full-time education', '22.5 years', 'Up from 21.7 in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Six areas, forty councillors', p: 'The council has 40 councillors across six local electoral areas: Blackrock, Dundrum, Dún Laoghaire, Glencullen-Sandyford, Killiney-Shankill and Stillorgan. The first meeting of the present council took place on 21 June 2024.' },
          { h3: 'The town that was Kingston', p: 'Dún Laoghaire, about 12 kilometres from Dublin city centre, is the county\'s administrative centre. It was named Kingston in 1821 when King George IV visited, and Ireland\'s first railway, opened in 1834, ran from Dublin to Kingston.' },
          { h3: 'A county that stays in education', p: 'People here finished full-time education at 22.5 years on average, the highest of the four Dublin council areas the statistics office compared, and almost 12,800 third-level students commuted from the county.' }
        ] }
      ]
    },
    {
      id: 'places', tint: 'tint', eyebrow: 'Town by town',
      h2: 'From Stillorgan\'s first shopping centre to Dalkey\'s castles',
      intro: 'The council keeps a short page for each of its towns. Four of them, in the council\'s own words, and the postcodes that show how mixed the county\'s addresses are.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Stillorgan', p: 'A busy village with original cottages and the Stillorgan Shopping Centre, which the council calls the first in the country. It was built in 1966 and still keeps some original features.' },
          { h3: 'Dalkey', p: 'Originally a Viking settlement. Its main street has a 10th-century church and two 14th-century Norman castles, one of which, Goat\'s Castle, houses the heritage centre.' },
          { h3: 'Dundrum and Blackrock', p: 'Dundrum mixes a main street of cottages with one of the largest shopping complexes in Ireland. In Blackrock the old baths were demolished in 2013 after a routine inspection raised safety concerns.' }
        ] },
        { kind: 'table', mt: true, caption: 'One county, four routing keys: addresses as published by the council and its libraries', head: ['Routing key', 'Address', 'Place'], rows: [
          ['A94', '48 Main Street, Blackrock, A94 YF76', 'Blackrock Library'],
          ['A96', 'County Hall, Marine Road, Dún Laoghaire, A96 K6C9', 'The council\'s headquarters'],
          ['D14', 'Upper Churchtown Road, Dundrum, Dublin 14, D14 VP97', 'Dundrum Library'],
          ['D18', 'Old Bray Road, Cabinteely, Dublin 18, D18 W773', 'Cabinteely Library']
        ] },
        { kind: 'p', text: 'The table is a small lesson in itself. A program that assumes every County Dublin postcode begins with D, or that the first three characters say which town an address is in, fails on the council\'s own headquarters. Data about places is full of rules that are nearly true, and the only defence is to test them against real addresses before trusting them.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in the county',
      h2: 'The first multi-denominational school, a library with a Maker Space, and 26,000 people at work in Sandyford',
      intro: 'Schools, a library, an art and technology college and a business district, each described in its own words.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Dalkey School Project', p: 'When it opened in Dún Laoghaire in September 1978, the school says, it was the first multi-denominational school in the country. Since 1985 it has been at Glenageary Lodge, and it now has well over 200 pupils.' },
          { h3: 'dlr LexIcon', p: 'Opened in 2015 in Dún Laoghaire, the library service calls it Ireland\'s largest and most visited public library. Its facilities include a Maker Space Lab and 3D printers, alongside eight branch libraries across the county.' },
          { h3: 'IADT and Newpark', p: 'The Institute of Art, Design and Technology sits on Kill Avenue in Dún Laoghaire, a campus it says is home to over 2,500 students and staff. Newpark Comprehensive School is on Newtownpark Avenue in Blackrock.' }
        ] },
        { kind: 'spec', title: 'Sandyford Business District', p: 'Established in January 2017, the district says it represents 1,000 companies, 26,000 employees and over 6,000 residents across four business parks: Central Park, Sandyford Business Park, South County Business Park and Stillorgan Business Park. Its board includes two representatives of the county council.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Water tests at the Forty Foot, and the results that are not numbers',
      intro: 'The council publishes bathing water quality samples for 2022 to 2024 on the national open data portal, under a Creative Commons licence. Learners use the three files to see what happens to measurements with limits when a computer is asked to average them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Read the columns', p: 'Each file lists a location, a sample date, E. coli, Enterococci, pH and salinity. Before any sum, learners scroll the E. coli column and list every value that is not a plain number.' },
          { h3: '2. Count what would vanish', p: 'They count the results written as below or above a limit, and see how many rows a numeric conversion would silently throw away in each year.' },
          { h3: '3. Choose, and say so', p: 'Keep the limits as limits, substitute a stated value, or report the censored results separately. Any choice can be defended; hiding it cannot.' }
        ] },
        { kind: 'table', caption: 'Our count from the council\'s published files', head: ['Year', 'E. coli samples', 'Written as below 10', 'Share', 'Enterococci written as below 1'], rows: [
          ['2022', '337', '102', '30.3 percent', '25'],
          ['2023', '355', '67', '18.9 percent', '15'],
          ['2024', '318', '89', '28.0 percent', '29']
        ] },
        { kind: 'callout', h3: 'Why AI does not make the problem go away', p: 'Ask an AI assistant for the average E. coli reading at each bathing place and it will write the code in seconds, and very often that code converts the column to numbers and moves on. The results written as below a limit become blanks, the greater-than results at the top of the range become blanks too, and the average that comes back looks precise. Nothing in the answer says that nearly a third of the 2022 samples were left out. A learner who has counted them knows to ask of any measurement: what did the instrument do when the value was too small or too large to read? That question matters for air quality, blood tests, water meters and every dashboard built on them.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Measurements with limits',
      h2: 'Five habits for data that says less than or more than',
      intro: 'For environmental data, lab results, school experiments and any column an AI tool is asked to summarise.',
      body: [
        { kind: 'table', caption: 'Handling censored values honestly', head: ['Habit', 'In practice', 'What it avoids'], rows: [
          ['Look before converting', 'List every value in a column that is not a plain number', 'Rows that disappear without a warning'],
          ['Keep the limit', 'Store "below 10" as a limit, not as zero and not as a blank', 'Averages that are too high or too low'],
          ['Watch both ends', 'Check for greater-than values as well as less-than values', 'The worst days quietly left out'],
          ['Check the place names', 'Confirm that each location keeps the same name from year to year', 'A trend that changes site halfway'],
          ['Say what was done', 'State the rule used for censored values beside the result', 'Precise-looking numbers nobody can check']
        ] },
        { kind: 'p', text: 'The fourth habit has its own example in the files. In 2022 the Dún Laoghaire samples appear under two names, Beach Gardens Dun Laoghaire in 36 rows and Dun Laoghaire Baths in one; in 2023 and 2024 only Dun Laoghaire Baths appears. A trend line for Dún Laoghaire drawn across the three years switches site without saying so. The files also mix two date formats, and a program that reads 05/01 as the first of May mistakes January for spring.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A thermometer game in blocks where some readings are too low to show, and a class vote on what the game should display instead.' },
          { h3: 'For teenagers', p: 'Python on the real files: count the censored results, try three honest ways of handling them, and compare the averages each one gives.' },
          { h3: 'For adults', p: 'The spreadsheets already used at work, checked for cells that look like numbers and are not, before the next report or AI summary is built on them.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Dún Laoghaire-Rathdown County Council, its libraries, Sandyford Business District, IADT or any school named here, and nothing on this page suggests one. Census figures are those the Central Statistics Office published for 2022; the bathing water counts are our own, from the council\'s published files.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a thermometer game to results with honest limits',
    intro: 'The free lesson sets the starting level by watching the learner at work on a real task, whatever their age or school year.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Too small to show', p: 'Children build games where some values are out of range, and decide what the game should do.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Numbers and not numbers', p: 'Learners read small tables in Python and learn to spot text hiding in a column of figures.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Censored data', p: 'Teenagers handle limits, missing values and renamed places in real council data.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reports that can be checked', p: 'Adults build analyses that state their rules, so that a summary made by a person or an AI can be verified.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can average a summer of water tests in a second. Why should a teenager in Dún Laoghaire learn what below 10 means?',
    intro: 'Because the average an AI returns is only as honest as the rows it quietly left out.',
    p1: 'The code an assistant writes for this file is short and looks correct: read the sheet, convert E. coli to numbers, group by location, take the mean. Every step is standard. The problem hides in the conversion, where a result written as below 10 stops being a result at all. In 2022 that was 102 of the 337 samples. The mean that comes back is taken over the rest, and nothing on the screen says so.',
    p2: 'A learner who has counted those rows once asks the right questions for life: what did the instrument report when the value was too small, or too large; what did my code do with that; and does my answer say so? Choosing how to treat a censored value is a judgement about the world, not a line of syntax, and it stays with the person. The assistant can write the loop. Deciding what the loop is allowed to throw away is the programmer\'s part.',
    closer: 'So the case for a child in Dún Laoghaire-Rathdown learning to code in 2026 is not the business parks at Sandyford. It is that people who notice when data has limits, and say so, will be needed wherever measurements decide something, from a beach notice to a hospital result.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'On the DART line and off it, the same class at the same hour',
    intro: 'The DART runs along the county\'s coast through Blackrock, Monkstown, Dún Laoghaire, Dalkey, Killiney and Shankill, and the Luas Green Line has park and ride stops at Carrickmines, Stillorgan, Sandyford and Balally. An online lesson needs neither.',
    cells: [
      { h3: 'From home, like the work', p: 'In a county where more people work from home part of the week than anywhere else in Ireland, a lesson at the same desk at a fixed hour fits the pattern families already keep.' },
      { h3: 'Irish school terms kept', p: 'First Year, Junior Cycle, Transition Year and the Leaving Cert are used as Irish families use them, while every lesson is taught in English.' },
      { h3: 'No charge to start', p: 'The first lesson is a real one on a real task. The teacher then proposes a level, a course and a weekly hour, with no card details requested.' },
      { h3: 'Groups beyond the county', p: 'Five to ten learners at one level, from Ireland and other countries, so that each stage has a group at a workable time.' },
      { h3: 'Around the school year', p: 'Two lessons a week, about eight a month, with pauses for mid-term breaks, school holidays and exam weeks agreed with the family.' },
      { h3: 'Teaching from India', p: 'Irish time is five and a half hours behind India time in winter and four and a half in summer, so after-school hours, evenings and weekend mornings in the county all suit the teachers.' }
    ],
    spec: { title: '86,000 commuters, and one lesson that needs no commute', p: 'The statistics office counted 86,000 daily commuters in the county in 2022, half of them by car and over 13,000 by train, DART or Luas, and its Dublin statement says commuters here were the most likely to use the train, at 15 percent. A live online lesson adds nothing to any of those journeys.' }
  },

  fees: {
    h2: 'What classes cost in Dún Laoghaire-Rathdown',
    intro: 'The whole price list, in three lines.',
    first: 'A first lesson on a real task, finishing with a level and a course to follow.',
    group: 'Monthly, around eight lessons, in a group of five to ten at one level.',
    private: 'Monthly, around eight lessons, with a teacher for a single learner.',
    closer: 'The fee is in US dollars, the one rate used for every country outside India, so a family in Dalkey pays the same as one in Dundrum, with no euro price list to compare. Nothing is charged until the free lesson has agreed a course and a regular hour. Pauses, a change of format and missed lessons are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as their authors wrote them',

  book: {
    h2: 'What can the learner do already?',
    intro: 'The first task might be a block game with a thermometer, a Python script that reads a table, or a count of the results written as text in a real council file.',
    success: 'Thank you. Your request for a Dún Laoghaire-Rathdown class has been sent.'
  },

  faq: {
    h2: 'Dún Laoghaire-Rathdown coding class questions',
    intro: 'The county, its figures and the lessons.',
    items: [
      { q: 'How many people live in Dún Laoghaire-Rathdown?', a: 'The statistics office counted 233,860 in Census 2022: 112,032 men and 121,828 women. The council itself describes a population of approximately 233,000.' },
      { q: 'Which areas does the county include?', a: 'The council\'s six local electoral areas are Blackrock, Dundrum, Dún Laoghaire, Glencullen-Sandyford, Killiney-Shankill and Stillorgan, and its towns include Dalkey, Stillorgan, Dundrum and Blackrock.' },
      { q: 'Why is Dún Laoghaire linked to Kingston?', a: 'The town, formerly Dunleary, was named Kingston in 1821 when King George IV visited, the council records, and Ireland\'s first railway ran from Dublin to Kingston in 1834.' },
      { q: 'What is the bathing water project?', a: 'Learners use the council\'s bathing water quality files for 2022 to 2024, count the E. coli results written as below or above a limit, and see how a numeric average silently drops them: 102 of 337 samples in 2022.' },
      { q: 'Is the Dalkey School Project really the first of its kind?', a: 'The school states that when it opened in Dún Laoghaire in September 1978 it was the first multi-denominational school in the country. It has been at Glenageary Lodge since 1985.' },
      { q: 'When are lessons for families in the county?', a: 'The hour is agreed in the free lesson. Irish time is five and a half hours behind India time in winter and four and a half in summer, so late afternoons, evenings and weekend mornings all work.' },
      { q: 'Does this page cover Dublin city too?', a: 'No. Dublin city has a page of its own, linked at the end of this page. This one is for the Dún Laoghaire-Rathdown council area.' },
      { q: 'Is there a Modern Age Coders centre in the county?', a: 'No. Every lesson is live and online, and no premises in Dún Laoghaire-Rathdown or anywhere in Ireland is claimed. A computer with working audio and a reliable connection is all a learner needs, and the phone number shown is Indian and says so.', boiler: true },
      { q: 'What does it cost?', a: 'The first lesson is free. A group place is then USD 100 a month for two live lessons a week, about eight across the month, with five to ten learners, and one-to-one lessons are USD 150 a month at the same pace. Course, format and hour are confirmed before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, placed by level and goal rather than by age or school. When no group suits, one-to-one lessons are available, or the family can wait for the next group at that level.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Dublin and Ireland',
    h2: 'North to the city, and back to the national page',
    html: 'The city next door has its own page, <a class="cg-inline-link" href="/best-coding-class-in-dublin">coding classes in Dublin</a>. For AI and machine learning from the start there is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-ireland">AI and machine learning classes in Ireland</a>, and for the tests any class should pass, <a class="cg-inline-link" href="/best-coding-class-in-the-world">the best coding class in the world</a>. The whole country is on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Dún Laoghaire-Rathdown and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/best-coding-class-in-the-world', label: 'Eight tests for a class' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dlr .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-dlr .cg-hero h1 { font-weight: 600; letter-spacing: -0.016em; line-height: 1.08; }
.cg-root.cg-dlr .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-dlr .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-dlr .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.01em; }
.cg-root.cg-dlr .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.6rem); }
.cg-root.cg-dlr .cg-table caption { font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-dlr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dlr .cg-table td:last-child { font-style: italic; }
.cg-root.cg-dlr .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-dlr .cg-spec { border-top: 2px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Dun Laoghaire-Rathdown County Council area, Census 2022 (CSO table F1004A): 233,860 (112,032 male, 121,828 female); council: approximately 233,000, one of three local authorities that succeeded the former Dublin County Council on its abolition in 1994. CSO Profile 5 Dublin (26 October 2023): 4,958 Indian citizens and 3,639 UK citizens in Dun Laoghaire-Rathdown; Irish-US 2,282 and Irish-UK 2,082 the largest dual groups; 10,854 moved in in the year before the census. Profile 7 Dublin (5 December 2023): almost 39,900 never worked from home, just over 60,300 did at least part of the time, the highest rate nationally; joint lowest unemployment nationally at 6 percent, long-term 3 percent; almost 14,000 in professional, scientific and technical activities; 86,000 daily commuters, half by car, over 13,000 by train/DART/Luas, almost 7,900 by bus, most likely to use the train at 15 percent; almost 12,800 third-level students commuting. Profile 8 Dublin: average age completing full-time education 22.5, up from 21.7 (Dublin City 21.4, Fingal 21.2, South Dublin 20.5); Irish speakers almost 94,000 from just over 83,000. Profile 3 Dublin: 42,303 children; 37 percent of under-15s in childcare (15,859); families up 6 percent to 59,431. Council: 40 councillors, six LEAs (Blackrock 6, Dundrum 7, Dun Laoghaire 7, Glencullen-Sandyford 7, Killiney-Shankill 7, Stillorgan 6), first meeting 21 June 2024; Dun Laoghaire the administrative centre about 12 km from the city centre, named Kingston in 1821, first railway 1834 Dublin to Kingston; Stillorgan Shopping Centre first in the country, built 1966; Dalkey a Viking settlement, 10th-century church, two 14th-century Norman castles, Goat\'s Castle heritage centre; Dundrum one of the largest shopping complexes in Ireland; Blackrock baths demolished 2013. TFI: Green Line Park and Ride at Carrickmines, Stillorgan, Sandyford, Balally. Irish Rail: DART stations Blackrock to Shankill on the south coast. Sandyford Business District: established January 2017, 1,000 companies, 26,000 employees, over 6,000 residents, four business parks. dlr LexIcon: opened 2015, Ireland\'s largest and most visited public library in its own words, Maker Space Lab, 3D printers; eight branch libraries. Dalkey School Project: September 1978 in Dun Laoghaire, first multi-denominational school in the country, Glenageary Lodge since 1985, well over 200 pupils. IADT: Kill Avenue, Dun Laoghaire, A96 KH79, over 2,500 students and staff. Newpark Comprehensive: Newtownpark Avenue, Blackrock, A94 EV70. Routing keys in published addresses: A94, A96, D14, D18.',
    localProject: 'Censored values in council water data. The bathing water quality files for 2022 to 2024 store results below the detection limit as text ("<10" for E. coli, "<1" for Enterococci) and some above the range as ">2000" or ">24196". Converting the columns to numbers silently drops them: E. coli "<10" is 102 of 337 samples in 2022 (30.3 percent), 67 of 355 in 2023 (18.9 percent) and 89 of 318 in 2024 (28.0 percent); Enterococci "<1" is 25, 15 and 29. The average then covers only the samples above the limit, and the greater-than results at the top vanish too. Secondary traps: 2022 has Beach Gardens Dun Laoghaire (36 rows) and Dun Laoghaire Baths (1 row), 2023 and 2024 only the latter, so a Dun Laoghaire trend switches site; the files mix Excel serial dates with day-first text. For AI, assistant code usually coerces the column and returns a precise-looking mean. Chosen after a case-sensitive check of every dossier and Netherlands module found no page using censored, detection limit or bathing water.',
    requiredMentions: [
      '233,860',
      '4,958',
      '42,303',
      '59,431',
      '15,859',
      'Glencullen-Sandyford',
      'Kingston',
      'Goat\'s Castle',
      'Dalkey School Project',
      'Kill Avenue',
      'Sandyford Business District',
      'Forty Foot',
      'A96 K6C9'
    ],
    sources: [
      { claim: 'Census 2022 table F1004A: Dun Laoghaire Rathdown County Council, population 233860 (112032 male, 121828 female).', url: 'https://data.cso.ie/table/F1004A' },
      { claim: 'CSO Profile 5, Dublin: "There were 4,958 Indian citizens living in Dún Laoghaire-Rathdown and 3,639 UK citizens."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligiondublin' },
      { claim: 'CSO Profile 7, Dublin: highest rate nationally of people who worked from home at least part of the time; joint lowest unemployment rate nationally at 6% and long-term 3%; almost 14,000 in professional, scientific and technical activities; 86,000 daily commuters, over 13,000 by train/DART/Luas, most likely to use the train at 15%.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingdublin/' },
      { claim: 'CSO Profile 8, Dublin: average age completing full-time education 22.5, up from 21.7; almost 94,000 Irish speakers.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationdublin/' },
      { claim: 'CSO Profile 3, Dublin: 42,303 children; 37% of under-15s in childcare (15,859); families up 6% to 59,431.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile3-householdsfamiliesandchildcaredublin' },
      { claim: 'Council: 40 councillors in six LEAs, first meeting 21 June 2024.', url: 'https://www.dlrcoco.ie/councillors-democracy/local-elections-2024' },
      { claim: 'Council: Dun Laoghaire the administrative centre about 12km from the city centre; named Kingston in 1821; first railway 1834 Dublin to Kingston.', url: 'https://www.dlrcoco.ie/d%C3%BAn-laoghaire' },
      { claim: 'Council town pages: Stillorgan Shopping Centre first in the country, built 1966; Dalkey Viking settlement, 10th-century church, two 14th-century Norman castles, Goat\'s Castle heritage centre.', url: 'https://www.dlrcoco.ie/stillorgan' },
      { claim: 'Sandyford Business District: represents 1,000 companies, 26,000 employees and over 6,000 residents in four business parks; established January 2017.', url: 'https://www.sandyford.ie/' },
      { claim: 'dlr LexIcon: opened 2015; Ireland\'s largest and most visited public library; Maker Space Lab, 3D printers.', url: 'https://libraries.dlrcoco.ie/dun-laoghaire-lexicon' },
      { claim: 'Dalkey School Project: opened September 1978 in Dun Laoghaire, the first multi-denominational school in the country; at Glenageary Lodge since 1985.', url: 'https://www.dspns.ie/about-us/history/' },
      { claim: 'IADT: Kill Avenue, Dun Laoghaire, A96 KH79, over 2500 students and staff.', url: 'https://iadt.ie/contact/' },
      { claim: 'DLR Bathing Water Quality 2022-2024: samples at the nine locations; Location, Sample Date, E. coli, Enterococci, ph, Salinity; CC BY 4.0.', url: 'https://data.gov.ie/dataset/dlr-bathing-water-quality-2022-2024' },
      { claim: 'TFI: Luas Green Line Park and Ride at Carrickmines, Stillorgan, Sandyford, Balally.', url: 'https://www.transportforireland.ie/getting-around/by-tram/about-luas/' }
    ],
    rejectedClaims: [
      'County area and coastline length: only search summaries, and the council plan PDF returned an error.',
      'dlr LexIcon study spaces and item counts: two council pages give different figures.',
      'That Dun Laoghaire-Rathdown commuters were the most likely nationally to use the train: the statement does not say nationally.',
      'That 22.5 years is the highest nationally: the statement only compares the Dublin council areas.',
      'Sandyford opening year and resident companies from encyclopaedias: not read at a primary source.',
      'A D16 routing key for the county: no primary address shows one.',
      'Anything the Dublin page owns, including Dublin City\'s 10,308 Indian citizens and the county-wide census figures.'
    ]
  }
};
