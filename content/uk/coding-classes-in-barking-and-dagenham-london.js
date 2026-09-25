'use strict';
// Barking and Dagenham (cg- London borough page, UK cluster Phase 5, row 173). Named sources only.
// Spine: which summary makes a place "young"? ONS Census 2021 via Nomis for all 33 London local authorities (32 boroughs
// + City): TS007 age by single year (NM_2027_1) and TS007A age by five-year bands (NM_2020_1). Medians by linear
// interpolation inside the class holding the halfway person. Barking and Dagenham: single-year median 33.40, five-year
// grouped median 33.33; across all 33 areas the grouped estimate differs from the single-year one by at most 0.24 years
// (mean 0.06). Rankings: 6th youngest of 33 by median age (Tower Hamlets 30.68 youngest); 1st of 33 by share under 18,
// 29.0% (Enfield 24.9, Redbridge 24.7); 6th lowest share aged 65+, 8.7%. Most common single ages in B&D: 36 (3,869),
// 9 (3,778). Totals: TS001 218,869; TS007A five-year rows sum to 218,869; TS007 single-year rows sum to 218,863. The page
// quotes the published total and explains that separately published tables need not add to it exactly.
// Lesson family: grouped-data median by interpolation, and how the choice of summary changes a ranking. Screened
// 25 September 2026 (grouped median 0; Leinster rolled grouped data to a total, a different point).
// LBBD libraries page returned HTTP 403 on 25 September 2026: not circumvented, no list.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'BARKING AND DAGENHAM', blurb: 'Eastbury Manor House, Valence House and a project on which way of measuring "young" puts a borough first.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-barking-and-dagenham-london',
  code: 'bkd',
  accent: '#681257',
  accentRationale: 'Barking and Dagenham: a deep damson from the solver (9.40:1 on every paper tint), far from every other London borough colour so far',
  pageType: 'governorate',
  place: {
    name: 'Barking and Dagenham',
    eyebrow: 'London Borough of Barking and Dagenham',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Barking and Dagenham, London',
  title: 'Coding Classes in Barking and Dagenham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Barking and Dagenham: Barking, Dagenham, Becontree, Chadwell Heath and Barking Riverside. Ages 6 to 67.',
  ogDescription: 'Barking and Dagenham coding and Python classes, with a Census project where learners find the borough is sixth youngest by median age but first by share of children.',
  twitterDescription: 'Barking and Dagenham coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Barking and Dagenham Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Barking and Dagenham, taught live in English.'
  },

  h1: 'Coding classes in Barking and Dagenham',
  capsuleQ: 'What are the best coding classes in Barking and Dagenham?',
  capsule: 'Barking and Dagenham is the east London borough of Barking, Dagenham, Becontree, Chadwell Heath, Rush Green, Marks Gate and Barking Riverside, with 218,869 residents at the 2021 Census, a larger share of them under 18 than in any other London borough. Classes worth joining teach a learner that the way you summarise data can change the answer, and this page shows it with the Census itself: by median age the borough is only sixth youngest in London, but by share of children it comes first. We teach live over video from India, for learners aged 6 to 67, either alone with a teacher or in a class of five to ten at one level. There is no fee for the first lesson; after that it is USD 100 a month for a class place or USD 150 a month one to one.',
  lead: 'At the 2021 Census, 29.0% of Barking and Dagenham\'s residents were under 18, more than in any of London\'s 32 boroughs or the City. So is it London\'s youngest borough? It depends how you ask. Rank the 33 areas by median age, the age of the person exactly in the middle, and Barking and Dagenham comes sixth, behind Tower Hamlets, Newham, Hackney, Islington and Lambeth. Our learners download the Census age tables for every London area and work out both measures themselves, including the median from grouped five-year age bands, a classic technique that turns out to be surprisingly accurate. On the way they meet a small puzzle: the borough\'s single-year age table adds up to 218,863, six fewer than the published total.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Barking and Dagenham.',

  picks: {
    eyebrow: 'Course picks for Barking and Dagenham',
    h2: 'Courses to start with in Barking and Dagenham',
    intro: 'Think of a Year 2 child in Becontree who lines up the family by height, a Year 7 pupil in Barking who loves league tables of anything, a Year 12 student in Dagenham choosing between maths and geography, and a youth worker in Chadwell Heath who wants to use local figures well. One free lesson is open to each of them.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch line-up game where sprites stand in order of age, and the middle one is the median.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with Census numbers: how many children, how many adults, and which London area has the most.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including grouped medians and rankings from the Census, as on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who use local statistics at work and want to choose and explain their measures carefully.' }
    ]
  },

  sections: [
    {
      id: 'bkd', tint: '', eyebrow: 'The borough in numbers',
      h2: '218,869 residents and three Grade I entries',
      intro: 'Where the number is our own count, we say whose data it came from; the rest are published as they stand.',
      body: [
        { kind: 'table', caption: 'Barking and Dagenham, with sources', head: ['What we looked at', 'What we found', 'Source'], rows: [
          ['Usual residents on Census day 2021', '218,869', 'ONS table TS001'],
          ['Residents under 18', '29.0%, highest of London\'s 33 areas', 'Our calculation from ONS table TS007'],
          ['Heritage List entries within the borough', '45: 3 Grade I, 4 Grade II*, 38 Grade II', 'Historic England data, counted 25 September 2026'],
          ['Lines at Barking station', 'District, Hammersmith & City, c2c and Suffragette', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eastbury Manor House', p: 'Eastbury Manor House and its garden walls are listed at Grade I by Historic England.' },
          { h3: 'St Margaret\'s', p: 'The Parish Church of St Margaret in Barking is the borough\'s third Grade I entry.' },
          { h3: 'Abbey gate and Valence', p: 'The Fire Bell Gate at Barking Abbey, Valence House and the Church of St Peter and St Paul are among the Grade II* entries.' }
        ] }
      ]
    },
    {
      id: 'census', tint: 'tint', eyebrow: 'The data',
      h2: 'Two Census tables, 33 London areas',
      intro: 'The Office for National Statistics publishes the 2021 Census age counts in several forms. We use two for every London area: ages in single years from 0 to 100 and over, and ages in five-year bands.',
      body: [
        { kind: 'table', caption: 'Barking and Dagenham in each table', head: ['Table', 'What it counts', 'Rows add up to'], rows: [
          ['TS001', 'All usual residents, one number', '218,869 (the published total)'],
          ['TS007A', 'Five-year age bands, 0 to 4 up to 85 and over', '218,869'],
          ['TS007', 'Single years of age, 0 up to 100 and over', '218,863']
        ] },
        { kind: 'p', text: 'The single-year table comes to six fewer people than the published total. Each Census table is released separately and the parts of one need not add exactly to another\'s total, so we always quote the published figure, 218,869, and never our own sum. Learners are asked to spot this for themselves before anything else, because a program that silently adds rows would report the wrong population.' },
        { kind: 'p', text: 'The two most common single ages in the borough are 36, with 3,869 residents, and 9, with 3,778: a shape that suggests many families with young children, which learners can see immediately in a population chart. We could not include a library list: the council\'s libraries page gave our automated reader an access error, which we did not try to get around.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Median from grouped data, and a ranking that flips',
      intro: 'Learners compute three summaries for all 33 London areas and see how each one reorders the list.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. The middle person', p: 'Line everyone up by age; the median is the age of the person halfway along. With single-year counts, walk through the ages adding up people until you pass half the total.' },
          { h3: '2. Only bands?', p: 'With five-year bands you know which band holds the middle person but not their exact age. Assume people are spread evenly through the band and interpolate: a classic school-statistics method.' },
          { h3: '3. Rank and compare', p: 'Sort London by median age, by share under 18 and by share aged 65 and over, and see where Barking and Dagenham lands each time.' }
        ] },
        { kind: 'table', caption: 'Barking and Dagenham among 33 London areas, run 25 September 2026', head: ['Measure', 'Barking and Dagenham', 'Place in London', 'Top of the list'], rows: [
          ['Median age, single years', '33.4', '6th youngest', 'Tower Hamlets, 30.7'],
          ['Median age, from five-year bands', '33.3', '6th youngest', 'Tower Hamlets, 30.8'],
          ['Share under 18', '29.0%', '1st', 'Barking and Dagenham'],
          ['Share aged 65 and over', '8.7%', '6th lowest', 'Tower Hamlets, 5.6%']
        ] },
        { kind: 'p', text: 'Two results surprise most learners. First, the grouped-data median is remarkably good: across all 33 areas it lands within a quarter of a year of the single-year median, and on average within about three weeks. Second, the answer to "which borough is youngest?" depends on the measure. Tower Hamlets has the lowest median age because it has many residents in their twenties and thirties; Barking and Dagenham has by far the most children. Both statements are true, and a careful report says which measure it used.' },
        { kind: 'callout', h3: 'Why not just ask an AI which borough is youngest?', p: 'An assistant will pick one reading of "youngest" and answer confidently, possibly without telling you which. Learners who have computed the median, the share of children and the share of older people themselves know that the question has several honest answers, and they know to check whether a total has been added up from parts or taken from the published figure. Those two habits protect against a surprising number of wrong headlines.' }
      ]
    },
    {
      id: 'judgement', tint: 'tint', eyebrow: 'Good statistical manners',
      h2: 'Choosing and naming your measure',
      intro: 'The project ends with three rules learners write into their reports.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Name the measure', p: '"Youngest by median age" and "most children" are different claims. Say which one you mean.' },
          { h3: 'Quote published totals', p: 'Use the total the ONS publishes, not a sum of rows from a different table, and note any gap.' },
          { h3: 'Know your approximation', p: 'Grouped data needs an assumption about spread inside each band. Check it against finer data when you can, as learners do here.' }
        ] },
        { kind: 'p', text: 'Grouped data and estimated medians turn up in school statistics well before A level; older students can extend the project to quartiles, population pyramids and weighted averages across boroughs. The age counts are the ONS\'s, released as Census 2021 tables; the medians, shares and rankings are our own calculations of 25 September 2026. Neither the ONS, Barking and Dagenham Council, Historic England nor TfL has any link with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Barking station, four lines, and a laptop',
      intro: 'Barking is a busy interchange. A lesson with us needs no interchange at all.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Barking', p: 'TfL\'s open data lists the District, Hammersmith & City, c2c and Suffragette lines at Barking.' },
          { h3: 'Riverside to Marks Gate', p: 'A learner at Barking Riverside and another at Marks Gate can share a class without either catching a train.' },
          { h3: 'Right-sized classes', p: 'Each group has five to ten learners at the same stage, so every learner is working at a pace that suits them.' }
        ] },
        { kind: 'spec', title: 'Barking and Dagenham in London', p: 'Barking and Dagenham is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers them all and the City, linking each page as it goes up, including <a class="cg-inline-link" href="/coding-classes-in-havering-london">Havering</a> to the east and <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a> to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From lining up by age to ranking London',
    intro: 'The free lesson decides the starting rung by what the learner can do on the day, not by the year group on paper.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Order and middles', p: 'Children sort sprites by size in Scratch and find the one in the middle.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Counting people', p: 'Python that reads Census counts, adds up age groups and calculates percentages.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Grouped statistics', p: 'Interpolated medians, shares and rankings across 33 areas, ideal practice for GCSE and A-level statistics and a strong project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Honest local figures', p: 'Adults learn to choose, compute and explain population measures for reports and funding bids.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can answer "which borough is youngest?" instantly. Why learn to work it out?',
    intro: 'Because the quick answer hides a choice, and the choice changes the answer.',
    p1: 'AI tools answer questions about places in fluent sentences. Ask which London borough is youngest and you will get a name, but not always the measure behind it or whether totals were summed or published. On the Census, one fair measure puts Barking and Dagenham first and another puts it sixth. A learner who has calculated both can read any AI answer and ask the right follow-up question.',
    p2: 'The habits reach far beyond ages: in health, education and business, rankings flip with the choice of measure, and totals mislead when built from mismatched tables. Machines will keep producing rankings. People who can explain them honestly will keep being needed.',
    closer: 'Barking and Dagenham has more children, proportionally, than anywhere else in London. Helping them learn to work with data like this is exactly the kind of teaching this borough deserves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Barking to Chadwell Heath, lessons live',
    intro: 'In any part of the borough, a class starts as soon as the call connects.',
    cells: [
      { h3: 'Your own space', p: 'A laptop or desktop, a pair of headphones and a broadband connection that handles video are enough.' },
      { h3: 'England\'s Key Stages', p: 'We talk about progress in the Key Stages used by English schools, from the first years of primary up to sixth form, and name GCSE or A level where they apply. Lessons are in English.' },
      { h3: 'Free to try', p: 'Lesson one costs nothing and teaches properly; by its end the teacher can recommend a level and course. We never ask for card details at that point.' },
      { h3: 'Five to ten per class', p: 'Classes bring together learners at the same stage from across the UK and overseas, so we can usually offer a convenient time.' },
      { h3: 'Two evenings', p: 'Most classes meet two evenings a week and take agreed breaks for half terms, holidays and exams.' },
      { h3: 'Times in UK time', p: 'Teachers are based in India, and every time we send already matches the clock in Barking.' }
    ],
    spec: { title: 'A young borough, a well-matched class', p: 'Nearly 219,000 people live in Barking and Dagenham, and a good class still needs five learners at one level free at one time, which is why ours reach far beyond it.' }
  },

  fees: {
    h2: 'Fees for Barking and Dagenham families',
    intro: 'A free first lesson, then one monthly fee across the whole borough.',
    first: 'A complete lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'Roughly eight live lessons a month in a class of five to ten at one stage.',
    private: 'Roughly eight live lessons a month with one teacher for one learner.',
    closer: 'Families here pay in US dollars, as everyone outside India does, and the site lists no pound prices. We take nothing until the free lesson has happened and you have chosen a course and a weekly slot. How pauses, missed lessons and swaps between group and private teaching work is set out on the pricing page.'
  },

  reviewsH2: 'Families\' Google reviews, unchanged',

  book: {
    h2: 'Book the free lesson',
    intro: 'Share the learner\'s age or year group and something they enjoy. We might start with a Scratch line-up game, a Python look at Census numbers, or the median project on this page.',
    success: 'Thank you. Your Barking and Dagenham lesson request has arrived.'
  },

  faq: {
    h2: 'Questions from Barking and Dagenham',
    intro: 'About the borough, the Census project and how lessons run.',
    items: [
      { q: 'How many people live in Barking and Dagenham?', a: 'The published Census 2021 total is 218,869 usual residents, in ONS table TS001.' },
      { q: 'Is Barking and Dagenham London\'s youngest borough?', a: 'By share of residents under 18 it is: 29.0%, the highest of London\'s 33 areas in the 2021 Census. By median age it is sixth youngest, at about 33.4 years; Tower Hamlets has the lowest median age.' },
      { q: 'How do you find a median from grouped data?', a: 'Find the band that contains the middle person, then assume people are spread evenly through that band and work out how far into it the middle person falls. For London\'s boroughs this estimate is within a quarter of a year of the answer from single years of age.' },
      { q: 'Why do the Census tables not add up exactly?', a: 'Each table is published separately, so the rows of one need not add exactly to another\'s total. Barking and Dagenham\'s single-year age table sums to 218,863, six fewer than the published 218,869; we always quote the published figure.' },
      { q: 'Where does the data come from?', a: 'From the Office for National Statistics Census 2021 tables TS001, TS007 and TS007A, downloaded free through the Nomis service.' },
      { q: 'When are lessons for learners here?', a: 'After the free lesson we suggest a weekly slot in a class at the right level with a place free. Teachers work from India, and the slot is quoted in UK time.' },
      { q: 'What equipment does a learner need?', a: 'A computer with sound and a steady internet connection. The Census project needs Python and two free tables.' },
      { q: 'Is there a Modern Age Coders centre in Barking and Dagenham?', a: 'No. There is no Barking and Dagenham centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Barking and Dagenham cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Across the capital and the country',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City with a link to each page once published, including <a class="cg-inline-link" href="/coding-classes-in-redbridge-london">Redbridge</a> to the north and <a class="cg-inline-link" href="/coding-classes-in-bexley-london">Bexley</a> across the river. Learners who enjoy working with real statistics can continue into our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">London AI and machine learning classes</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> compares school stages in England with Scotland, Wales and Northern Ireland.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Barking and Dagenham and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-havering-london', label: 'Havering' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bkd .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-bkd .cg-hero h1 { font-weight: 780; letter-spacing: -0.019em; line-height: 1.04; }
.cg-root.cg-bkd .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-bkd .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bkd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-bkd .cg-grid-3 { gap: clamp(0.95rem, 2.7vw, 1.9rem); }
.cg-root.cg-bkd .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-bkd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkd .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-bkd .cg-ladder-col { border-left: 6px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-bkd .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Barking and Dagenham. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000002): 218,869 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 45 (I 3, II* 4, II 38); Grade I 1064408 PARISH CHURCH OF ST MARGARET, 1359303 EASTBURY MANOR HOUSE, 1064414 GARDEN WALLS OF EASTBURY MANOR HOUSE; II* include 1064404 VALENCE HOUSE, 1064407 FIRE BELL GATE, BARKING ABBEY, 1359302 CHURCH OF ST PETER AND ST PAUL. TfL Unified API HUBBKG (Barking), 25 September 2026: c2c, District, Hammersmith & City, Suffragette. lbbd.gov.uk/libraries returned HTTP 403 on 25 September 2026: not circumvented, no library list used.',
    localProject: 'Nomis NM_2027_1 (TS007 age by single year) and NM_2020_1 (TS007A five-year bands), geography E09000001-E09000033, measures 20100. Median by interpolation within the class holding n/2 (single years treated as [a, a+1), 100+ as one class; five-year bands [lo, hi+1), 85+ as [85, 105)). B&D: single-year median 33.40, grouped 33.33; under 18 29.0% (highest; Enfield 24.9, Redbridge 24.7); 65+ 8.7% (6th lowest; Tower Hamlets 5.6, Newham 7.2, Hackney 7.9, Southwark 8.3); median rank 6th youngest (Tower Hamlets 30.68, Newham 32.50, Hackney 32.74, Islington 33.38, Lambeth 33.38). Grouped vs single across 33: max |diff| 0.24, mean 0.06. B&D most common ages 36 (3,869), 9 (3,778), 35 (3,772), 40 (3,770), 33 (3,768). Sums: TS007 218,863; TS007A 218,869; TS001 218,869. Lesson family: grouped-data median and measure-dependent rankings, screened 25 September 2026.',
    requiredMentions: [
      '218,869',
      '218,863',
      'Eastbury Manor House',
      'Valence House',
      'Fire Bell Gate',
      'grouped-data median',
      '29.0%',
      'Barking Riverside',
      'Marks Gate'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Barking and Dagenham E09000002: 218,869 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000002&measures=20100' },
      { claim: 'ONS Census 2021 TS007 age by single year, all London local authorities (Nomis NM_2027_1).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2027_1.data.csv?geography=E09000002&measures=20100' },
      { claim: 'ONS Census 2021 TS007A age by five-year bands, all London local authorities (Nomis NM_2020_1).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E09000002&measures=20100' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Barking and Dagenham on 25 September 2026: 45 (3 I, 4 II*, 38 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint HUBBKG (Barking).', url: 'https://api.tfl.gov.uk/StopPoint/HUBBKG' }
    ],
    rejectedClaims: [
      'The mechanism behind cross-table differences (ONS disclosure methods): not read at a primary source for this build; the page says only that tables are published separately and need not add exactly.',
      'Ford Dagenham, Becontree Estate size claims and Barking Abbey history: not verified at primary sources for this build and not used.',
      'LBBD library list: council page returned 403; no libraries named.',
      'Barking and Dagenham schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never used; age is the only Census variable beyond the total.'
    ]
  }
};
