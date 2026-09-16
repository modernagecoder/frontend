'use strict';
// County Wexford (cg- county page, Ireland cluster, Phase 4). Spine: the
// council's own pedestrian counter in Gorey, whose documentation contains two
// sentences that contradict each other about what a missing row means. Facts
// read at primary sources on 16 September 2026: CSO PxStat tables F1010, F1013,
// F1015 and F1016 and the Wexford summary and Profile 1, 5, 7 and 8 press
// statements; gov.ie's January 2018 LCCS list (two Wexford schools, Creagh
// College in Gorey and St Mary's CBS in Enniscorthy); setu.ie for the Wexford
// campuses. Geography discipline: New Ross is published by the CSO as spanning
// Wexford and Kilkenny, so its 8,610 is not a pure-Wexford figure and is
// labelled. The CSO publishes no county-level density or under-15 share, so
// none is claimed; town-level figures are used and labelled as such. Dataset
// measured by us: Gorey Pedestrian Traffic North Side, Wexford County Council,
// CC BY 4.0, where the description promises weekly tables from 20 January 2022
// but the only queryable layer holds a single week, 2 to 8 January 2023, with
// 553 of an expected 672 quarter-hour rows; 114 of the 119 missing slots, 95.8%,
// fall between 01:00 and 08:00 while every slot from 10:00 to 22:00 is present.
// The publisher's notes say both that a missing interval means no traffic and
// that gaps are due to sensor malfunctioning. Other counties and cities own
// their own figures and datasets.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY WEXFORD', blurb: 'The sunny south east, from Gorey to New Ross, with a project on a footfall counter that contradicts itself.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-wexford',
  code: 'wex',
  accent: '#4A2D7A',
  accentRationale: 'County Wexford: a deep violet from the solver, unused anywhere else in the Ireland cluster and clear of both Irish greens',
  pageType: 'governorate',
  place: {
    name: 'County Wexford',
    eyebrow: 'County Wexford, Leinster',
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
  routeLabel: 'County Wexford, Ireland',
  title: 'Coding Classes in County Wexford | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Wexford, from Gorey and Enniscorthy to New Ross, for ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Wexford, on a page about a council footfall counter whose own notes disagree about what a missing reading means.',
  twitterDescription: 'Coding classes across County Wexford, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Wexford Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Wexford, taught live in English.'
  },

  h1: 'Coding classes in County Wexford',
  capsuleQ: 'What are the best coding classes in County Wexford?',
  capsule: 'County Wexford grew 9% to 163,919 people at the 2022 census, and it is a county of towns rather than one city: Wexford at 21,524, Enniscorthy at 12,310, Gorey at 11,517, with just under 28% of the county living in towns of ten thousand or more. It is also older than the country as a whole, with an average age of 40 and a 65-and-over population up a quarter to 27,403. For families here the practical question about any class is how far it is, and a live online class answers that by being the same distance from Bunclody as from Rosslare. We teach ages 6 to 67 at a fixed weekly hour, in groups of five to ten matched by ability or one to one. The first lesson is free; after it, a group place is USD 100 a month and private tuition USD 150.',
  lead: 'Wexford County Council counts the people walking past a point on the north side of Main Street in Gorey, every fifteen minutes, and publishes the result as open data under a Creative Commons licence. Read its description and you are told the series begins on 20 January 2022. Query the layer and you get a single week: 2 to 8 January 2023, and nothing else. Then look at what is inside that week. There should be 672 quarter-hour readings; there are 553. And the missing ones are not scattered: 114 of the 119 gaps fall between one and eight in the morning, while every single slot between ten in the morning and ten at night is present. Now read the council\'s own two sentences about it. The first says that if an interval is missing, there was no traffic in that interval. The second says any gaps are due to the sensor malfunctioning. Both are printed in the same field, and they cannot both be true. Deciding which one to believe, and saying so out loud in your write-up, is the whole job.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Wexford.',

  picks: {
    eyebrow: 'Course picks for County Wexford',
    h2: 'Four courses for a county of towns',
    intro: 'Choose by what the learner wants to make. Each one opens with a free lesson, taught live by the teacher who would take the class, with no card details requested.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Games and stories in Scratch, including a counter on a shop door that has to decide what to do when nobody walks past.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python across the Junior Cycle years, practised on real files from the county rather than on invented examples.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'A week of footfall data, a hundred and nineteen missing readings, and a documented contradiction to resolve in writing.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults in small businesses and services: reading a dataset\'s own notes before trusting a single figure in it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'A county of four towns and a long coast',
      intro: 'Wexford has no city, which shapes everything from commuting to where a class can practically be held.',
      body: [
        { kind: 'table', caption: 'County Wexford in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '163,919, up 9% or 14,197 since 2016'],
          ['Average age', '40 years, up from 38.1 in 2016'],
          ['Aged 65 and over', '27,403, an increase of 25%'],
          ['At work', '69,485 people aged 15 and over, up 11,726 or 20% since 2016'],
          ['Worked from home at least one day a week', '17,932 people, 26% of the workforce'],
          ['Third-level qualifications', 'Just over 41,100 people, a rate of 37% against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The towns', p: 'Wexford town is the largest at 21,524, then Enniscorthy at 12,310 and Gorey at 11,517. Gorey is the youngest, with an average age of 36.3 and 22.5% of its people aged under 15.' },
          { h3: 'A town in two counties', p: 'New Ross is published by the statistics office as "New Ross, Wexford and Kilkenny" with 8,610 people, because its built-up area crosses the county boundary. It is not a pure County Wexford figure, and we do not treat it as one.' },
          { h3: 'Six electoral areas', p: 'The county divides into Wexford with 31,547 people, Gorey with 31,140, New Ross with 29,946, Enniscorthy with 29,314, Rosslare with 23,573 and Kilmuckridge with 18,399.' }
        ] },
        { kind: 'p', text: 'Two more facts that matter for an evening class. Just under 28% of the county lives in towns of ten thousand people or more, so the majority are in villages, small towns and the countryside, where a weekly trip to a class in Wexford town is a real undertaking. And the county drives: 41,118 people drove to work in 2022, the average journey took 28.5 minutes, and 7,633 people travelled for an hour or more each way. An online class removes that journey entirely, which is worth more here than it would be in a city.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Wexford schools',
      h2: 'Two schools in the first phase',
      intro: 'When Leaving Certificate Computer Science began in September 2018, two of the named schools were in County Wexford.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Gorey and Enniscorthy', p: 'Creagh College on the Carnew Road in Gorey and St Mary\'s CBS on the Millpark Road in Enniscorthy were the county\'s two first-phase schools. Both are in the north and centre of the county.' },
          { h3: 'What that leaves', p: 'Students elsewhere in the county, including Wexford town and the whole south, had no first-phase school nearby. We found no current official list showing where the subject is taught today, so we claim nothing about now.' },
          { h3: 'Our part in it', p: 'We do not teach the examination subject. We teach programming, data and problem solving in a weekly class, which is a different thing and can run alongside whatever a school offers.' }
        ] },
        { kind: 'p', text: 'There is third-level provision in the county too. South East Technological University lists two Wexford campuses on its own site: the main one on Summerhill Road at Y35 KA07 and a second on Hill Street at Y35 FPC2. For a student staying local, that is the nearest route into a computing degree, and the programming groundwork it assumes is exactly what a weekly class can build in the years beforehand.' },
        { kind: 'spec', title: 'A county that reads and speaks Irish', p: 'The census recorded 55,198 Irish speakers in the county, 36.7% of everyone aged three and over, slightly up on 2016. Our classes are taught in English, and programming keywords are in English regardless, so an Irish-medium education makes no difference to a learner\'s progress here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One week in Gorey, and two sentences that disagree',
      intro: 'The council\'s pedestrian counter is small, open and honest about being imperfect. That combination makes it an unusually good first dataset.',
      body: [
        { kind: 'table', caption: 'What we measured in the published layer, read 16 September 2026', head: ['Measure', 'Figure'], rows: [
          ['What the description promises', 'Weekly tables of fifteen-minute counts, with records starting 20 January 2022'],
          ['What the queryable layer actually holds', 'One week, 2 to 8 January 2023'],
          ['Readings expected in that week', '672, being seven days of ninety-six quarter hours'],
          ['Readings present', '553, so 119 are missing, 17.7% of the week'],
          ['Missing readings falling between 01:00 and 08:00', '114 of 119, or 95.8%'],
          ['Readings missing between 10:00 and 22:00', 'None at all: 336 of 336 present']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The contradiction', p: 'The notes say that a missing interval means there was no traffic in that interval. They also say that any gaps are due to the sensor malfunctioning. One implies a gap is a real zero; the other implies it is unknown. They cannot both hold.' },
          { h3: 'Why it matters', p: 'Fill the gaps with zeros and you have decided that Gorey had nobody on its main street at four in the morning, which may be near enough true. Treat them as unknown and you cannot compute a daily total at all without saying so.' },
          { h3: 'What a good answer looks like', p: 'Not picking one and moving on. Reporting both, showing the daytime record is complete, and limiting the claim to the hours where the data is whole.' }
        ] },
        { kind: 'callout', h3: 'The best kind of small dataset', p: 'Everything else in this file is clean: no duplicate readings, no null counts, no negative values, one sensor identifier and one location throughout. That matters, because it means the missing hours are the only real problem, and a learner can isolate them instead of drowning. It also shows something about the county: a council published its imperfect data with an honest note attached, which is more than many larger bodies manage. Our students are taught to say thank you for that in the write-up, and then to handle the imperfection properly.' },
        { kind: 'p', text: 'The project ends with a chart of a single Gorey week, drawn only from ten in the morning to ten at night, with a sentence underneath explaining exactly why the night hours were left out. That sentence is worth more than the chart.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reading the notes',
      h2: 'Five things to do before trusting a published dataset',
      intro: 'Taught on a Gorey footfall file, and used afterwards on anything that arrives with a description attached.',
      body: [
        { kind: 'table', caption: 'Checks that take ten minutes and save a week', head: ['Check', 'What you do', 'What it catches'], rows: [
          ['Read the description twice', 'Look for claims about coverage, then test each one against the data', 'A promised year that turns out to be a week'],
          ['Count what should exist', 'Generate every expected timestamp and compare', 'Gaps nobody mentioned'],
          ['Ask what a gap means', 'Find the publisher\'s own statement about missing values', 'Filling unknowns with zeros'],
          ['Check the layer name', 'Compare the internal name of a data layer with the dataset title', 'Data that is not what the title says'],
          ['Keep the clean parts', 'Report the hours or rows that are complete and stand on those', 'Throwing away a usable dataset entirely']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A counting game with a sensor that sleeps, and a conversation about whether a quiet street and a broken counter look the same.' },
          { h3: 'Teenagers', p: 'The real week in Python: build the expected timetable, find the 119 gaps, chart the complete hours only and defend that choice.' },
          { h3: 'Adults', p: 'The same discipline for business reporting, where a data feed\'s quiet hours are usually where the errors hide.' }
        ] },
        { kind: 'p', text: 'We have no connection with Wexford County Council, South East Technological University or any school named on this page, and naming them implies none. Census figures come from the Central Statistics Office for 2022; the dataset measurements are ours, taken from the council\'s published layer.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'Who lives in Wexford, and how they get about',
      intro: 'A picture that shapes what a family needs from a class here.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Where people come from', p: 'Non-Irish citizens make up 9% of the county. The largest groups are UK citizens at 3,561 and Polish citizens at 3,356, then Romanian at 729 and Lithuanian at 725. Dual citizenship nearly doubled to 4,219, most commonly Irish and UK.' },
          { h3: 'Owning and renting', p: 'Seven in ten households own their home and a further 24% rent, which is a settled pattern: families here tend to stay, and a course that runs for a year or two suits that.' },
          { h3: 'Working differently', p: 'Employment rose 20% between censuses to 69,485, while unemployment fell from 17% to 10%. More than a quarter of the workforce now does at least one day a week at home.' }
        ] },
        { kind: 'spec', title: 'Density without a city', p: 'Wexford town has 2,629.3 people per square kilometre and Gorey 2,558.4, so the towns themselves are properly urban. It is the distance between them, and everything outside them, that makes travelling to a weekly class hard in this county.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a counter that sleeps to a claim you can defend',
    intro: 'The bands are a guide. What a learner does in the free lesson decides where they actually start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting and doubting', p: 'First programs that count things, and the idea that a zero can mean two different things.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Rows and times', p: 'Reading small real files, building lists of expected times and spotting what is absent.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Gaps and honesty', p: 'Measuring missingness, choosing what to report, and writing the sentence that explains the choice.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Checks before decisions', p: 'Turning those checks into code that runs before anyone makes a decision on the numbers.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will summarise this week in seconds. Why should a Gorey teenager read the notes?',
    intro: 'Because the contradiction is in prose, not in the numbers.',
    p1: 'Ask an AI tool for the busiest hour in the Gorey file and it will answer correctly, because the busy hours are complete. Ask it for a daily average and it will compute one, silently treating a week with 119 missing readings as though it were whole. Nothing in the numbers signals the problem; the signal is two sentences in a description field that disagree with each other, and reading them is a human act of attention.',
    p2: 'That is the shape of most data problems worth catching. Not arithmetic errors, which tools handle well, but questions about what was measured, when it was not, and what the publisher believed they were recording. A learner who has argued with a council\'s footnote once will read every footnote afterwards.',
    closer: 'So the case for a Wexford child learning to code in 2026 is not about employers in the county. It is that someone in every organisation needs to be able to say this file does not support that claim, and show why.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bunclody, Rosslare or anywhere in between',
    intro: 'This is a wide county with no city at its centre, so the distance to any class held in a room is the first thing a parent calculates. Online, that calculation disappears.',
    cells: [
      { h3: 'No drive, no evening lost', p: 'In a county where the average commute already takes 28.5 minutes, a class that starts in the kitchen saves a parent an hour each week.' },
      { h3: 'The school year, named properly', p: 'Teachers use First Year, the Junior Cycle, Transition Year and sixth year as Irish schools do, so nothing needs explaining twice.' },
      { h3: 'The trial lesson is a lesson', p: 'Real teaching on a real task, ending with an honest recommendation on level, course and hour, and no request for card details.' },
      { h3: 'Ability, not address', p: 'Groups of five to ten learners working at one pace, drawn from Wexford and several countries, which is how a good hour exists at every level.' },
      { h3: 'A rhythm that holds', p: 'Two lessons most weeks, about eight a month, at a fixed time, pausing for mid-terms, exams and holidays by agreement.' },
      { h3: 'A clock that never moves', p: 'Our teachers work from India, four and a half hours ahead of Ireland in summer and five and a half in winter, which puts Wexford afternoons and evenings squarely in their day.' }
    ],
    spec: { title: 'Why a county like this suits online teaching', p: 'With just under 28% of the county in its larger towns, most families are not within easy reach of an evening class in Wexford, Gorey or Enniscorthy. A live online group puts a child in Kilmuckridge in the same room as one in Bunclody, at the same standard, on the same evening.' }
  },

  fees: {
    h2: 'What classes cost in County Wexford',
    intro: 'Three figures, said once.',
    first: 'A complete lesson at no charge, ending in an honest placement and a course recommendation.',
    group: 'A month of teaching, usually eight lessons, with five to ten learners of matching ability.',
    private: 'The same month and the same eight or so lessons, with one teacher and one learner.',
    closer: 'Fees are charged in US dollars at the single rate used outside India, so Gorey pays what New Ross pays and there is no euro price list. Nothing is charged until a course and a weekly hour are agreed in the free lesson, and the pricing page explains pauses, missed lessons and changes of format.'
  },

  reviewsH2: 'Six Google reviews from our families, unedited',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'The first task is picked to fit: a counting game for a younger child, a first script that opens a file, or the missing-readings puzzle from a real Wexford dataset.',
    success: 'Thank you. The team will be in touch about your County Wexford class shortly.'
  },

  faq: {
    h2: 'County Wexford coding class questions',
    intro: 'The county, its data and how classes run here.',
    items: [
      { q: 'How many people live in County Wexford?', a: 'Census 2022 counted 163,919 people, up 9% or 14,197 since 2016. Wexford town is the largest town at 21,524, followed by Enniscorthy at 12,310 and Gorey at 11,517.' },
      { q: 'Which Wexford schools first offered Leaving Certificate Computer Science?', a: 'Creagh College in Gorey and St Mary\'s CBS in Enniscorthy were the county\'s two schools on the January 2018 first-phase list. That shows where the subject began, not where it is taught now.' },
      { q: 'What is the Gorey footfall project?', a: 'Learners take the council\'s published pedestrian counter, discover the layer holds one week rather than the promised series, measure the 119 missing readings, and resolve the contradiction in the publisher\'s own notes about what a gap means.' },
      { q: 'Is the missing data a problem with the dataset?', a: 'It is a problem to be handled, not a reason to reject it. The daytime record is complete, with all 336 readings present between ten in the morning and ten at night, so honest claims can still be made about those hours.' },
      { q: 'Why does New Ross have a different kind of figure?', a: 'Because its built-up area crosses into County Kilkenny, the statistics office publishes it as New Ross, Wexford and Kilkenny, with 8,610 people. It is not a County Wexford total and we do not present it as one.' },
      { q: 'Is there anywhere in the county to study computing after school?', a: 'South East Technological University lists two Wexford campuses on its own site, on Summerhill Road and Hill Street. We are not connected with the university and make no claims on its behalf.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is fixed during the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Wexford?', a: 'No, and none is claimed. All teaching is live online, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the phone number on this page is an Indian one.', boiler: true },
      { q: 'What do County Wexford coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month, covering two live lessons a week and roughly eight a month with five to ten learners, or USD 150 a month taught privately on the same schedule. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than by age or address. Where no suitable group runs at a workable hour, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Neighbouring counties and the national page',
    html: 'Up the coast, <a class="cg-inline-link" href="/coding-classes-in-county-louth">County Louth</a> has its own page, and the cities are covered at <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> and <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a>. For choosing between online schools there is <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and everything else is gathered on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Wexford and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-waterford', label: 'Waterford' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-wex .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.3vw, 2.65rem); }
.cg-root.cg-wex .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-wex .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wex .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wex .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.013em; }
.cg-root.cg-wex .cg-grid-3 { gap: clamp(1.05rem, 2.45vw, 1.95rem); }
.cg-root.cg-wex .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-wex .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wex .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-wex .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-wex .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'County Wexford, Census 2022 (CSO): population 163,919, up 9 percent or 14,197 since 2016, with 83,142 female and 80,777 male; average age 40, up from 38.1; those aged 65 and over up 25 percent to 27,403; 70 percent of households owning and 24 percent renting; 69,485 people aged 15 and over at work, up 11,726 or 20 percent; 17,932 people, 26 percent of the workforce, working from home at least one day a week; unemployment 10 percent, down from 17 percent, with almost 7,600 unemployed; 41,118 driving to work, an average journey of 28.5 minutes and 7,633 people travelling an hour or more. Towns (F1013 and F1015): Wexford 21,524 at 2,629.3 per sq km, Enniscorthy 12,310 with an average age of 38.2 and 20.6 percent under 15, Gorey 11,517 at 2,558.4 per sq km with an average age of 36.3 and 22.5 percent under 15, and New Ross published as Wexford and Kilkenny at 8,610, a cross-county built-up area. F1010 shows 45,351 people, just under 28 percent of the county, in towns of 10,000 or more. Local electoral areas (F1016): Wexford 31,547, Gorey 31,140, New Ross 29,946, Enniscorthy 29,314, Rosslare 23,573 and Kilmuckridge 18,399. Citizenship: non-Irish citizens 9 percent, UK 3,561, Polish 3,356, Romanian 729, Lithuanian 725; dual citizenship 4,219, up from 2,186, most commonly Irish and UK at 1,185. Education: just over 41,100 with a third-level qualification, 37 percent against 45 percent nationally. Irish speakers 55,198, 36.7 percent of those aged three and over. Gov.ie, 4 January 2018: the county\'s two first-phase Leaving Certificate Computer Science schools were Creagh College, Carnew Road, Gorey and St Mary\'s CBS, Millpark Road, Enniscorthy. South East Technological University lists Wexford campuses at Summerhill Road, Y35 KA07 and Hill Street, Y35 FPC2. The CSO publishes no county-level density or under-15 share, so none is claimed here.',
    localProject: 'A description that promises a year and a layer that holds a week, plus a publisher contradicting itself about missing values. Gorey Pedestrian Traffic North Side, Wexford County Council, licensed Creative Commons Attribution 4.0, describes weekly tables of fifteen-minute counts with records starting 20 January 2022; the only queryable layer is internally named for week 1 of 2023 and returns 553 rows covering 2 to 8 January 2023. A complete week would hold 672 quarter-hour readings, so 119 are missing, 17.7 percent. Measured by hour of day, 114 of those 119 gaps, 95.8 percent, fall between 01:00 and 08:00, with the 04:00 and 05:00 hours missing 24 of 28 possible slots each, while all 336 possible readings between 10:00 and 22:00 across the seven days are present. The notes field states both that a missing fifteen-minute interval means there was no traffic in that interval and that any gaps in the time series are due to the sensor malfunctioning, which are incompatible readings of the same blank. Everything else checks out: no duplicate date and time rows, no null or negative counts, one sensor identifier and one coordinate pair throughout.',
    requiredMentions: [
      '163,919',
      '21,524',
      '12,310',
      '11,517',
      '8,610',
      '3,561',
      '17,932',
      '27,403',
      '31,547',
      '553',
      '95.8%',
      'Y35 KA07',
      'Creagh College'
    ],
    sources: [
      { claim: 'CSO summary results, Wexford: "The population of Wexford grew by 9% to 163,919"; average age 40 against 38.1 in 2016; those aged 65 and over up 25% to 27,403; 69,485 at work, up 20%; 17,932 working from home at least one day a week, 26% of the workforce.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultswexford/' },
      { claim: 'CSO Profile 7, Wexford: unemployment 10% against 17% in 2016; 41,118 driving to work; average journey time 28.5 minutes; 7,633 people with journeys of 60 minutes or more.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingwexford/' },
      { claim: 'CSO Profile 1, Wexford: "Wexford was the largest town, with a population of 21,524 in April 2022".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementswexford/' },
      { claim: 'CSO tables F1013 and F1015: Enniscorthy 12,310, Gorey 11,517 and New Ross published as "New Ross, Wexford & Kilkenny" at 8,610; Gorey average age 36.3 with 22.5% aged under 15; town densities of 2,629.3 and 2,558.4 per sq km.', url: 'https://data.cso.ie/table/F1013' },
      { claim: 'CSO table F1010: 45,351 people in County Wexford lived in towns of 10,000 population and over in April 2022.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'CSO table F1016: Wexford 31,547, Gorey 31,140, New Ross 29,946, Enniscorthy 29,314, Rosslare 23,573 and Kilmuckridge 18,399.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO Profile 5, Wexford: "Among the non-Irish residents, the largest group were UK citizens (3,561 people) followed by Polish citizens (3,356)"; dual citizenship 4,219, up from 2,186, with Irish-UK the largest combination at 1,185.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionwexford/' },
      { claim: 'CSO Profile 8, Wexford: third-level qualifications just over 41,100, "a rate of 37% compared with 45% nationally"; 55,198 Irish speakers, 36.7% of those aged three and over.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationwexford/' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes Creagh College, Carnew Road, Gorey and St Mary\'s CBS, Millpark Road, Enniscorthy.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'South East Technological University: "Address: Summerhill Road, Slippery Green, Wexford. Eircode: Y35 KA07" and "Hill Street Campus ... Eircode: Y35 FPC2".', url: 'https://www.setu.ie/about/setu-campuses/visiting-the-wexford-campuses' },
      { claim: 'Wexford County Council, Gorey Pedestrian Traffic North Side, licensed Creative Commons Attribution 4.0, describing weekly fifteen-minute tables with records starting 20 January 2022, and stating both that a missing interval means no traffic and that gaps are due to sensor malfunctioning.', url: 'https://data.gov.ie/dataset/gorey-pedestrian-traffic-north-side' }
    ],
    rejectedClaims: [
      'A county-level population density or land area for Wexford: the CSO publishes density at electoral division level only, so town figures are used and labelled.',
      'A county-level under-15 share: not published for Wexford, so town-level shares are used and labelled.',
      'Treating New Ross as a County Wexford figure: the CSO publishes it across Wexford and Kilkenny.',
      'Any claim about which Wexford schools teach Leaving Certificate Computer Science today: no current official list exists.',
      'A county-wide out-commuting total: not published in the profiles read.',
      'Anything owned by the city pages or by other county pages in this cluster.'
    ]
  }
};
