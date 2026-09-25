'use strict';
// Bexley (cg- London borough page, UK cluster Phase 5, row 171). Named sources only.
// Spine: who does most of the spilling? Historic England list entry 1064241 (Former Crossness Pumping Station, Grade I):
// opened 4 April 1865, engineer Joseph Bazalgette. Environment Agency, Event Duration Monitoring (EDM) Storm Overflow
// Annual Return 2025, "All WaSC" sheet (OGL): 14,238 overflow rows with a parseable total spill duration (64 without).
// Our Lorenz curve on duration: zero hours 2,231 (15.7%); top 1% (142) = 16.6% of hours; top 5% = 46.4%; top 10% =
// 64.6%; top 20% = 82.5%; top half = 98.3%; 80% of hours from 2,567 overflows (18.0%). Gini 0.789 (hours), 0.608
// (counted spills, 12-24h method); Spearman 0.91 between the two. Longest single overflow 5,446 hours; 73 over 2,000
// hours. EDM operating under 90% of the year at 1,020 overflows. No national total is printed (it would be our sum of
// published rows). Crossness WWTW: 84.8 hours, 13 counted spills; its two outlet grid references plot in the tidal Thames
// just outside Bexley's land boundary (BFC is clipped to the shore). Lesson family: Lorenz curve and Gini coefficient
// (concentration), screened 25 September 2026 (no page teaches either by name). No company is singled out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'BEXLEY', blurb: 'Red House, Crossness Pumping Station and a project on how a few storm overflows account for most spill hours.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-bexley-london',
  code: 'bex',
  accent: '#663D43',
  accentRationale: 'Bexley: a dusky madder red from the solver (7.37:1 on every paper tint), a nod to Red House and distinct from the Enfield brick',
  pageType: 'governorate',
  place: {
    name: 'Bexley',
    eyebrow: 'London Borough of Bexley',
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
  routeLabel: 'Bexley, London',
  title: 'Coding Classes in Bexley, Sidcup and Erith | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Bexley: Bexleyheath, Sidcup, Erith, Welling, Crayford, Belvedere and Thamesmead. Ages 6 to 67.',
  ogDescription: 'Bexley coding and Python classes, with a project on the Environment Agency\'s storm overflow data where learners draw a Lorenz curve and find how few overflows do most of the spilling.',
  twitterDescription: 'Bexley coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Bexley Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Bexley, taught live in English.'
  },

  h1: 'Coding classes in Bexley',
  capsuleQ: 'What are the best coding classes in Bexley?',
  capsule: 'Bexley is the south east London borough of Bexleyheath, Sidcup, Erith, Welling, Crayford, Belvedere, Thamesmead and Bexley Village, with 246,472 residents at the 2021 Census, William Morris\'s Red House and Bazalgette\'s Crossness Pumping Station. A class worth choosing teaches a learner to summarise a huge public dataset fairly, and this page does that with the Environment Agency\'s record of more than 14,000 storm overflows: one curve and one number that show how unequally the spilling is shared. Our teachers, who work from India, meet learners from 6 to 67 over live video, either singly or in a matched class of between five and ten. The first lesson is free. Afterwards, group lessons cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'On 4 April 1865, according to Historic England, the Crossness Pumping Station opened on the Bexley shore of the Thames, designed by the engineer Joseph Bazalgette to deal with London\'s sewage. A century and a half later, the Environment Agency publishes a yearly record of storm overflows: pipes that release diluted sewage into rivers and the sea when heavy rain overwhelms the system. The 2025 return lists more than 14,000 of them in England, each with its total hours of spilling. Our learners ask a simple question of that enormous table: is the spilling spread evenly, or do a few overflows account for most of it? They draw a Lorenz curve and calculate a Gini coefficient, the same tools economists use for income inequality, and the answer is striking.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Bexley.',

  picks: {
    eyebrow: 'Course picks for Bexley',
    h2: 'Starting points for Bexley learners',
    intro: 'Think of a Year 3 child in Welling who loves anything about rivers and wildlife, a Year 9 pupil in Sidcup who asks whether the Thames is clean enough to swim in, a Year 12 student in Erith drawn to environmental science or economics, and a volunteer in Belvedere who helps with local river clean-ups. The first lesson is free for each of them.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch river game where rain fills the drains, and a first count of what overflows.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with a real spreadsheet: sort overflows by hours and find the top ten.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including this page\'s Lorenz curve and Gini coefficient on 14,000 overflows.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who want to read big public datasets and summarise them fairly and clearly.' }
    ]
  },

  sections: [
    {
      id: 'bexley', tint: '', eyebrow: 'Bexley in figures',
      h2: '246,472 residents and six Grade I entries',
      intro: 'Every figure below comes from the organisation named, or from our count of its published data.',
      body: [
        { kind: 'table', caption: 'Four Bexley facts and where to check them', head: ['Fact', 'Detail', 'Check it at'], rows: [
          ['Population counted in March 2021', '246,472', 'Census table TS001 (ONS)'],
          ['Listed places we counted within the borough line', '116 in all; 6 are Grade I and 9 Grade II*', 'Historic England list data, our count on 25 September 2026'],
          ['Crossness Pumping Station opened', '4 April 1865', 'Historic England list entry 1064241'],
          ['Services at Bexleyheath station', 'Southeastern and Thameslink', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Red House', p: 'Historic England lists Red House at Grade I: built in 1859 by Philip Webb, his first commission, for William Morris, who lived there until 1864. A well head beside it is also Grade I.' },
          { h3: 'Hall Place and Danson', p: 'Hall Place, with its garden walls and gates, and Danson Park Mansion are Grade I; the Danson Park stables and Frognal House are Grade II*.' },
          { h3: 'Crossness', p: 'The former Crossness Pumping Station, engineered by Joseph Bazalgette, completes Bexley\'s six Grade I entries.' }
        ] },
        { kind: 'p', text: 'Bexley Council\'s libraries page names Central, Crayford, Erith, Sidcup, Thamesmead and Welling libraries.' }
      ]
    },
    {
      id: 'overflows', tint: 'tint', eyebrow: 'The data',
      h2: 'More than 14,000 overflows, one row each',
      intro: 'The Environment Agency\'s 2025 storm overflow annual return gives, for every monitored overflow of every water and sewerage company in England, the total time it spilled and a count of spills.',
      body: [
        { kind: 'table', caption: 'What the 2025 return shows, as we read it on 25 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Overflow rows with a usable total spill time', '14,238'],
          ['Of those, spilling for zero hours in 2025', '2,231, or 15.7%'],
          ['Overflows spilling for more than 2,000 hours', '73'],
          ['Longest total for a single overflow', '5,446 hours, out of 8,760 in the year'],
          ['Overflows whose monitor worked less than 90% of the year', '1,020']
        ] },
        { kind: 'p', text: 'The sewage works at Crossness appears in the return with 84.8 hours of spilling and 13 counted spills in 2025. Its outlets are in the tidal Thames, and their grid references plot just outside Bexley\'s land boundary, in the river. We describe the whole dataset rather than any one company, and we do not add the rows into a national total of hours: the Environment Agency publishes its own summaries, and a sum of ours would be a different figure.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A Lorenz curve for storm overflows',
      intro: 'Learners sort 14,238 overflows from most hours to least and ask what share of all spilling the top few account for.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Sort and add up', p: 'Order the overflows by hours spilled, biggest first, and keep a running share of the total as you go down the list.' },
          { h3: '2. Draw the curve', p: 'Plot the share of overflows against the share of hours. Perfect equality is a straight diagonal; the further the curve bows away, the more concentrated the spilling.' },
          { h3: '3. One number', p: 'The Gini coefficient is the gap between the curve and the diagonal, from 0 for perfect equality to 1 for one overflow doing everything.' }
        ] },
        { kind: 'table', caption: 'Share of all 2025 spill hours, run 25 September 2026', head: ['Busiest overflows', 'How many', 'Share of spill hours'], rows: [
          ['Top 1%', '142', '16.6%'],
          ['Top 5%', '712', '46.4%'],
          ['Top 10%', '1,424', '64.6%'],
          ['Top 20%', '2,848', '82.5%'],
          ['Top half', '7,119', '98.3%']
        ] },
        { kind: 'p', text: 'One overflow in ten accounts for nearly two thirds of all the hours; one in five accounts for more than four fifths. Eighty per cent of the spilling comes from just 18% of overflows, close to the famous 80/20 rule. The Gini coefficient for spill hours is 0.789. Counting spills instead of hours gives 0.608, less extreme because a count caps how much one long spill can weigh, yet the two measures still rank overflows very similarly, with a rank correlation of 0.91.' },
        { kind: 'callout', h3: 'Why a chatbot summary is not the same', p: 'Ask an AI tool to summarise storm overflows and it may quote a national total or a headline average. An average hides exactly what this data shows: most overflows spill little and a small minority spill a great deal. A learner who has drawn the Lorenz curve knows to ask how a total is shared, not just how big it is, which matters for rivers, incomes, website traffic and almost everything else measured in large numbers.' }
      ]
    },
    {
      id: 'care', tint: 'tint', eyebrow: 'Reading data fairly',
      h2: 'Three things to check before drawing conclusions',
      intro: 'Big public datasets reward care. Learners write these checks into their code.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Missing monitoring', p: 'At 1,020 overflows the monitor worked less than 90% of the year, so some totals are too low. Learners flag those rows rather than trusting them.' },
          { h3: 'Rows without a time', p: '64 rows had no usable duration. They are left out and counted, never silently dropped.' },
          { h3: 'Hours are not harm', p: 'The return records how long an overflow spilled, not how much or how diluted. Concentration of hours is a fact about time, not a verdict on pollution.' }
        ] },
        { kind: 'p', text: 'Pupils studying GCSE maths or geography can follow the cumulative percentages and the curve; sixth formers can compute the Gini coefficient themselves and compare it across years. Credit for the overflow records goes to the Environment Agency, which releases them under the Open Government Licence; responsibility for the sorting, the shares, both Gini values and the correlation is ours, calculated on 25 September 2026. Modern Age Coders has no tie to the Environment Agency, any water company, Bexley Council, Historic England, TfL or the ONS, and none of them has seen this page.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'From Bexleyheath station to a desk at home',
      intro: 'Bexley is served by main-line trains rather than the Tube. Our lessons need neither.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Bexleyheath', p: 'Southeastern and Thameslink both call at Bexleyheath, according to the station record in TfL\'s open data.' },
          { h3: 'Thamesmead to Sidcup', p: 'A learner by the river in the north and one in Sidcup in the south can share one class from home.' },
          { h3: 'Fairly shared', p: 'A class is kept small and matched, five to ten learners at one stage, so no one learner takes up most of the lesson.' }
        ] },
        { kind: 'spec', title: 'Bexley in London', p: 'Bexley is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City, linking each page as it is published, including <a class="cg-inline-link" href="/coding-classes-in-bromley-london">Bromley</a> to the south west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting a list to measuring inequality',
    intro: 'The free lesson reveals where a learner really is. Their school year just helps us guess where to begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Biggest to smallest', p: 'Children sort scores and quantities in Scratch and see how much the top few hold.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Running totals', p: 'Python that sorts a real spreadsheet and builds cumulative percentages, the heart of a Lorenz curve.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Concentration', p: 'Lorenz curves, Gini coefficients and data-quality checks on public records, strong ground for geography, economics or computing projects.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Summaries that tell the truth', p: 'Adults learn why averages mislead in skewed data and how to show where the weight really lies.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can summarise any spreadsheet. Why should a Bexley teenager learn to do it properly?',
    intro: 'Because the most important fact in a dataset is often hidden by its average.',
    p1: 'Hand an AI assistant the storm overflow return and ask for a summary, and you may get a total and an average per overflow. Both are true and both mislead: the typical overflow spills far less than the average, and a small group spills most of the time. The Lorenz curve and Gini coefficient exist precisely to show that shape. A learner who has built them from 14,238 rows can see through a summary that hides it, whoever or whatever wrote it.',
    p2: 'The habits carry over to every field: check how a total is shared, flag records with missing monitoring, and say clearly what a measure does and does not capture. AI tools will keep writing summaries. People who can tell a fair summary from a flattering one will keep being needed.',
    closer: 'Bexley has lived with London\'s sewage engineering since 1865. A learner here who can read the modern records honestly is carrying on a very Bexley kind of work.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Welling to Crayford, lessons live and online',
    intro: 'From any street in Bexley, a lesson is just a video call away.',
    cells: [
      { h3: 'Learn at home', p: 'Bexley learners log in from their own homes; all that matters is a working computer, sound, and broadband good enough for video.' },
      { h3: 'Stages in England', p: 'Reports to parents use the same language as a Bexley school: Key Stage 1, 2, 3, 4, then sixth form, with GCSE or A level named when relevant. Teaching is always in English.' },
      { h3: 'Free lesson first', p: 'Proper teaching, not a sales pitch, which ends with a suggested level and course. No payment information is requested.' },
      { h3: 'Classes by level', p: 'Classmates are matched on stage, not postcode, which is how we can usually offer a sensible hour for a group of five to ten.' },
      { h3: 'Twice a week', p: 'Two evening sessions make up a normal week, with the class stopping for school holidays and exam fortnights when the teacher and families agree.' },
      { h3: 'Local time', p: 'Our teachers are in India; every lesson time we give is already in UK time.' }
    ],
    spec: { title: 'A quarter of a million residents, one good class', p: 'Bexley has about 246,000 residents, and a good class still needs five learners at the same level and the same free hour, which is why ours reach far beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Bexley families',
    intro: 'One free lesson, then a single monthly fee that is the same in Erith as in Sidcup.',
    first: 'A full lesson with a teacher, free of charge, ending with our recommended level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at the same stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'Bexley families pay in US dollars, as every family outside India does, and there are no pound prices on the site. You pay nothing until the free lesson is done and you have agreed a course and regular slot. The pricing page explains pausing, missed lessons and changing between class and private teaching.'
  },

  reviewsH2: 'Reviews families left for us on Google',

  book: {
    h2: 'Ask for your free lesson',
    intro: 'Year group or age, plus one interest, is enough for us to prepare. We might begin with a Scratch rain-and-drains game, a Python sort of a real spreadsheet, or the overflow curve on this page.',
    success: 'Thank you. Your Bexley lesson request is with our team.'
  },

  faq: {
    h2: 'Bexley families ask',
    intro: 'About the borough, the overflow project and how our lessons run.',
    items: [
      { q: 'How many people live in Bexley?', a: 'The London Borough of Bexley recorded 246,472 usual residents at the 2021 Census, in ONS table TS001.' },
      { q: 'What is Crossness Pumping Station?', a: 'A Grade I listed Victorian pumping station on the Thames in Bexley. Historic England\'s list entry records that it opened on 4 April 1865 and that its engineer was Joseph Bazalgette.' },
      { q: 'Where does the storm overflow data come from?', a: 'From the Environment Agency\'s Event Duration Monitoring annual return for 2025, which lists every monitored storm overflow in England with its total spill time and spill count. It is free to download.' },
      { q: 'What is a Gini coefficient?', a: 'A number from 0 to 1 that measures how unequally something is shared. For 2025 storm overflow hours it is 0.789: most overflows spill little and a small share spill a great deal.' },
      { q: 'Does this page blame a particular company?', a: 'No. We analyse all companies\' overflows together, print no national total of our own, and point out what the data cannot show, such as how much or how diluted each spill was.' },
      { q: 'When would a Bexley learner have lessons?', a: 'We pick the slot together once the free lesson has shown us the right level, choosing a class with a place free. Every time in our messages is written in UK time, although the teacher is in India.' },
      { q: 'What kit is required?', a: 'Any computer that plays sound, and broadband that does not keep dropping. The overflow project needs Python and one free download from the Environment Agency.' },
      { q: 'Is there a Modern Age Coders centre in Bexley?', a: 'No. There is no Bexley centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Bexley cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'The rest of London, and the UK',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> collects every borough and the City and links each once it is live, such as <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a> across the Thames and <a class="cg-inline-link" href="/coding-classes-in-wandsworth-london">Wandsworth</a> upriver. Big tables like this one are where <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">machine learning for London learners</a> begins, and a family weighing up a move to Scotland or Wales can compare school years on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bexley and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-bromley-london', label: 'Bromley' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bex .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.6rem); }
.cg-root.cg-bex .cg-hero h1 { font-weight: 770; letter-spacing: -0.017em; line-height: 1.05; }
.cg-root.cg-bex .cg-capsule { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-bex .cg-eyebrow { letter-spacing: 0.11em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-bex .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-bex .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 1.8rem); }
.cg-root.cg-bex .cg-table caption { font-weight: 700; letter-spacing: 0.014em; }
.cg-root.cg-bex .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bex .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-bex .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-bex .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Bexley. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000004): 246,472 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 116 (I 6, II* 9, II 101); Grade I 1064203 RED HOUSE, 1359397 WELL HEAD TO SOUTH EAST OF RED HOUSE, 1064225 DANSON PARK MANSION, 1064241 Former Crossness Pumping Station, 1188277 HALL PLACE, 1064250 GARDEN WALL, GATEPIERS AND GATES TO NORTH AMD WEST OF HALL PLACE; II* include 1064228 FROGNAL HOUSE, 1359409 STABLES TO DANSON PARK. List entry 1064203: 1859, by Philip Webb (his first commission) for William Morris, who lived here until 1864. List entry 1064241: Opened 4 April 1865, Engineer Joseph Bazalgette. Bexley Council /discover-bexley/libraries-in-bexley, 25 September 2026: Central, Crayford, Erith, Sidcup, Thamesmead, Welling libraries named. TfL Unified API 910GBXLYHTH (Bexleyheath): Southeastern, Thameslink.',
    localProject: 'EA EDM Storm Overflow Annual Return 2025 (zip via data.gov.uk dataset "Event Duration Monitoring - Storm Overflows - Annual Returns"), workbook "all water and sewerage companies", sheet All WaSC, header row "Unique ID"; columns Total Duration (hh:mm:ss) all spills, Counted spills using 12-24h count method, EDM Operation % of reporting period, Outlet Discharge NGR. 14,238 rows with parseable duration (64 unparsed). Zero-hour 2,231 (15.7%). Sorted shares of hours: top 1% (142) 16.6%, 5% (712) 46.4%, 10% (1,424) 64.6%, 20% (2,848) 82.5%, 50% (7,119) 98.3%; 80% reached at 2,567 overflows (18.0%). Gini hours 0.789; Gini counted spills 0.608; Spearman(hours, count) 0.913. Max 5,446 h; 73 over 2,000 h; EDM operation < 90%: 1,020. CROSSNESS WWTW, NGR "TQ4857081130 and TQ4850081170", 84.8 h, 13 spills, receiving THAMES TIDAL; both points outside the Bexley BFC polygon (clipped at the shore). No national total printed. Lesson family: Lorenz curve and Gini coefficient, screened 25 September 2026.',
    requiredMentions: [
      '246,472',
      'Crossness Pumping Station',
      'Bazalgette',
      'Lorenz curve',
      'Gini coefficient',
      'Red House',
      'Philip Webb',
      'Danson Park',
      'Hall Place'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Bexley E09000004: 246,472 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000004&measures=20100' },
      { claim: 'Environment Agency, Event Duration Monitoring, Storm Overflow Annual Return 2025.', url: 'https://environment.data.gov.uk/api/file/download?fileDataSetId=c55e170e-3c75-49a5-8026-a961ff94c8e0&fileName=EDM_2025_Storm_Overflow_Annual_Return.zip' },
      { claim: 'Historic England list entry 1064241, Former Crossness Pumping Station: opened 4 April 1865, engineer Joseph Bazalgette.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1064241' },
      { claim: 'Historic England list entry 1064203, Red House: 1859, Philip Webb, for William Morris, who lived there until 1864.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1064203' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Bexley on 25 September 2026: 116 (6 I, 9 II*, 101 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Bexley Council, libraries in Bexley.', url: 'https://www.bexley.gov.uk/discover-bexley/libraries-in-bexley' },
      { claim: 'TfL Unified API, StopPoint 910GBXLYHTH (Bexleyheath): Southeastern, Thameslink.', url: 'https://api.tfl.gov.uk/StopPoint/910GBXLYHTH' }
    ],
    rejectedClaims: [
      'A national total of spill hours: our sum of 14,238 published rows is not an EA-published total, so it is not printed.',
      'Company comparisons or rankings: deliberately not made; the page treats all overflows together.',
      'Pollution or health effects of spills: hours are not harm; not claimed.',
      'Community-run libraries beyond the six named on the council page: not read, not listed.',
      'William Morris designs made at Red House: not verified at a primary source; only the list entry facts are used.',
      'Bexley grammar schools and 11+: left to the Phase 6 maths pages.',
      'Census ethnicity, religion or country of birth for Bexley: never a standout; used only to order the build.'
    ]
  }
};
