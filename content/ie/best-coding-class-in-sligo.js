'use strict';
// Sligo town (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Sligo, Co Sligo" and "Balbriggan, Co Dublin", read 19
// September 2026, the HSE page for Sligo University Hospital and the Office of
// Public Works page for Sligo Abbey. Spine: Simpson's paradox, found rather than
// invented. Searching all 74 towns with at least 3,000 working residents and 1,500
// education travellers for a reversal against Sligo returned exactly one. On the
// row labelled work mainly at or from home, Balbriggan is level with Sligo among
// working residents (9.640% against 9.638%) and ahead among education travellers
// (0.492% against 0.394%), yet behind on the combined figure (5.735% against
// 6.214%), because 42.7% of its travellers are in the education group against
// 37.0% in Sligo. At Sligo's mix, Balbriggan's rates give 6.252%. New family for
// the cluster: composition effects and standardisation. The Sligo county page
// owns the town-list population 20,608, the station, Hawk's Well and ATU, so none
// of those appears here, and it owns the average-hides-spread lesson.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'SLIGO TOWN', blurb: 'Level in one group, ahead in the other, and still behind overall. A real case of Simpson\'s paradox, found by searching the census from Sligo.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-sligo',
  code: 'slt',
  accent: '#6B3A6B',
  accentRationale: 'Sligo town: a heather purple from the solver, clear of the County Sligo green and the Mayo and Leitrim accents around it',
  pageType: 'city',
  place: {
    name: 'Sligo',
    eyebrow: 'Sligo town, County Sligo',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Sligo' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-sligo', name: 'County Sligo' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Sligo', href: '/coding-classes-in-county-sligo' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Sligo town, County Sligo, Ireland',
  title: 'Best Coding Class in Sligo | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Sligo learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Sligo, with a project on a genuine Simpson\'s paradox hiding in two towns\' census travel figures.',
  twitterDescription: 'Coding and AI classes for Sligo, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Sligo',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Sligo town, taught live in English.'
  },

  h1: 'Coding classes in Sligo',
  capsuleQ: 'What is the best coding class in Sligo?',
  capsule: 'Sligo town has 20,238 usual residents in the census town tables and 8,208 households, and 1,738 of its 8,622 working residents walk to work. Lessons with us need no journey at all: a teacher on a live video call twice in most weeks, with a small group of learners at the same stage or with one learner on their own, from six years old up to sixty-seven. The opening lesson is free. From then on a group place is USD 100 a month and private lessons are USD 150.',
  lead: 'Here is a result that sounds impossible. On the census row for people whose main answer is that they work or study at home, Balbriggan is level with Sligo among working residents and ahead of Sligo among students and children, yet behind Sligo when the two groups are added together. We did not construct it. We searched the census travel table for every town large enough to compare and found exactly this one reversal against Sligo. The explanation is not in either rate but in the mix: Balbriggan has more of its travellers in the education group, where home is almost never the answer, and that group drags its combined figure down. It is called Simpson\'s paradox, it catches professionals, and this page shows it with real numbers from two Irish towns.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Sligo.',

  picks: {
    eyebrow: 'Course picks for Sligo',
    h2: 'Where Sligo learners begin',
    intro: 'The age and the interest suggest a course. The free lesson, taught by that course\'s own teacher, decides it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with teams and scores, where the mix of players changes which team looks better.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Fractions, weighted averages and mixtures, built as programs rather than worked on paper.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Grouped data in Python, comparing like with like, and standardising before ranking anything.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults comparing branches, schools or teams whose mix of cases is not the same.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Level, ahead, and still behind',
      intro: 'The row labelled work mainly at or from home, for Sligo and Balbriggan, split into the census\'s two travel groups. Counts are published; the percentages are our division, shown to three decimals because the working-resident rates differ only in the third.',
      body: [
        { kind: 'table', caption: 'Home as the main answer, by travel group', head: ['Group', 'Sligo', 'Sligo rate', 'Balbriggan', 'Balbriggan rate'], rows: [
          ['Working residents', '831 of 8,622', '9.638%', '1,000 of 10,373', '9.640%'],
          ['Travelling to school, college or childcare', '20 of 5,073', '0.394%', '38 of 7,725', '0.492%'],
          ['Both groups together', '851 of 13,695', '6.214%', '1,038 of 18,098', '5.735%'],
          ['Share of travellers in the education group', '37.0%', '', '42.7%', '']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The paradox', p: 'Balbriggan is level with Sligo among working residents, ahead by two thousandths of a point, and clearly ahead among education travellers, yet its combined rate of 5.735% sits below Sligo\'s 6.214%. Neither town\'s figures are wrong.' },
          { h3: 'The mechanism', p: 'The education group almost never answers home, so it has a rate near zero. Balbriggan has 42.7% of its travellers in that group against 37.0% in Sligo, and a bigger slice of near-zero pulls its average down, whatever happens inside each group.' },
          { h3: 'The fix', p: 'Compare at the same mix. Apply Balbriggan\'s two rates to Sligo\'s proportions of workers and students and the combined figure becomes 6.252%, just ahead of Sligo, which is what the group-by-group comparison said all along.' }
        ] },
        { kind: 'callout', h3: 'Where this shows up for real', p: 'A hospital with better outcomes in every category of patient can have a worse overall figure because it takes the hardest cases. A school can beat another at every level and trail on the average because of its intake. A product can win every region and lose nationally. The overall number is not wrong; it is answering a different question, one that mixes how good each part is with how big each part is. Before comparing totals across groups of different make-up, split them, and if one figure is needed, standardise to a common mix and say which mix was used.',
        },
        { kind: 'p', text: 'The learner\'s project has three stages. First, reproduce the table from the published counts and see the reversal for themselves. Second, write the standardisation: a function that takes two sets of rates and one set of weights and returns comparable totals, applied at Sligo\'s mix, at Balbriggan\'s, and at an even split. Third, repeat our search: loop over every sufficiently large town in the travel table, test every mode for a reversal against a chosen town, and count how many turn up. Against Sligo, among 74 towns, we found exactly one, which is itself worth knowing: the paradox is real and it is rare, which is why it surprises people when it bites.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Sligo in the town tables',
      h2: 'The town behind the comparison',
      intro: 'Published for the built-up area Sligo, Co Sligo, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Sligo town, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '20,238'],
          ['Households', '8,208'],
          ['Working residents in the travel table', '8,622'],
          ['Working residents walking to work', '1,738'],
          ['Residents travelling to school, college or childcare', '5,073'],
          ['Of those, travelling on foot', '1,643']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A walking town', p: 'Of the 8,622 working residents, 3,852 drive, 1,738 walk, 831 give home as their main answer, 447 travel as a car passenger, 304 by van, 246 by bicycle and 139 by bus, with 989 not stating.' },
          { h3: 'The school run', p: 'Of 5,073 journeys to school, college or childcare, 2,172 are as a car passenger, 1,643 on foot, 350 by bus, 286 driving and 88 by bicycle.' },
          { h3: 'Connections and home working', p: 'Broadband is reported by 6,322 of 8,208 households. A separate table records 1,843 working residents doing some work at home and 5,426 who never do.' }
        ] },
        { kind: 'spec', title: 'The hospital', p: 'The HSE lists Sligo University Hospital at The Mall, Rathquarter, Sligo Town, F91 H684. We name it only from that published listing and have no connection with it.' }
      ]
    },
    {
      id: 'checks', tint: 'tint', eyebrow: 'Before comparing any two totals',
      h2: 'Three questions that catch a composition effect',
      intro: 'The Sligo and Balbriggan case turned into a checklist a learner can apply to any league table or report.',
      body: [
        { kind: 'table', caption: 'What to ask, and what the census answered here', head: ['Question', 'Answer for Sligo and Balbriggan'], rows: [
          ['Is the total made of groups with very different rates?', 'Yes: about 9.6% among working residents, under 0.5% among education travellers'],
          ['Do the two places have different mixes of those groups?', 'Yes: 37.0% of Sligo\'s travellers are in the education group, 42.7% of Balbriggan\'s'],
          ['Does the comparison change at a common mix?', 'Yes: at Sligo\'s mix Balbriggan\'s rates give 6.252%, above Sligo\'s 6.214%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'When a paradox is possible', p: 'Only when the groups have very different rates and the places have very different mixes. If either is missing, the totals and the groups tell the same story, which is why most comparisons are safe and this one is not.' },
          { h3: 'Which figure to publish', p: 'Both, labelled. The combined rate is a true description of each town\'s travellers; the standardised rate is the fair comparison of the towns. Publishing one without saying which it is invites the wrong conclusion.' },
          { h3: 'What this page does not claim', p: 'That either town has more home-working or home-learning in any meaningful sense. The gaps are tiny, and the point is how totals behave, not a ranking of towns.' }
        ] },
        { kind: 'spec', title: 'The abbey', p: 'The Office of Public Works describes Sligo Abbey, at Abbey Street, Sligo, F91 K796, as a Dominican priory that has dominated the town\'s eastern district since Sligo was founded in the mid-thirteenth century, with its church, sacristy and chapterhouse preserved from that period alongside a fifteenth-century cloister. We quote the description only; its admission prices are not reproduced here.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Sligo',
      h2: 'How the lessons run for Sligo families',
      intro: 'A fixed hour, twice in most weeks, with a teacher who is present from start to finish.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'Block coding and games, where teams and scores make fairness a real question early on.' },
          { h3: 'Secondary age', p: 'Python, websites and AI projects, through the junior cycle and into the exam years.' },
          { h3: 'Adults', p: 'Adults join from every starting point, and 1,843 working residents here already do part of their work from home.' }
        ] },
        { kind: 'p', text: 'The HSE and the Office of Public Works are quoted from their own published pages, and neither, nor Sligo County Council, has any connection with us. Every count on this page is a Central Statistics Office Census 2022 figure for the built-up areas of Sligo and Balbriggan, printed as published. The rates, the standardised figure and the search for reversals are our own arithmetic, run on 19 September 2026, and the search is described closely enough that anybody can repeat it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From fair teams to fair comparisons',
    intro: 'Ages are a starting guess; the free lesson confirms the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Picking fair teams', p: 'Block games where the mix of players changes who wins, and fixing it.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Averages of mixtures', p: 'Weighted averages in Python, and why the weights matter as much as the values.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Grouped comparisons', p: 'Splitting data by group, finding reversals and standardising to a common mix.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Comparing units at work', p: 'Branches, teams and schools compared fairly when their mix of cases differs.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask which town has more people working from home',
    intro: 'The answer depends on a question the model does not ask.',
    p1: 'Give an assistant the combined figures and it will say Sligo. Give it the group figures and it will say Balbriggan, or call them level. It will rarely notice that both answers come from the same counts, or explain that the difference is the mix of groups rather than anything happening inside them.',
    p2: 'A learner who has worked through this page asks whether the groups have different rates and the towns different mixes before answering, and produces a standardised comparison when they do. That turns two contradictory confident answers into one correct, explained one.',
    closer: 'Tools will hand you whichever total you ask for. Knowing which total answers your question is still a human job, and a very learnable one.',
    blogAnchor: 'why coding repays a young learner'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practical details for Sligo',
    intro: 'What happens in practice.',
    cells: [
      { h3: 'A teacher, live', p: 'Every lesson is taught in real time, with the teacher following the learner\'s own work.' },
      { h3: 'Grouped by ability', p: 'Five to ten learners at one stage, from Sligo, the rest of Ireland and further away.' },
      { h3: 'Two lessons most weeks', p: 'Around eight a month, at an hour chosen when the course begins.' },
      { h3: 'Term dates', p: 'Holidays and exam weeks are planned into the schedule from the outset.' },
      { h3: 'What to have', p: 'The learner needs their own screen and keyboard for the hour, working audio, and a connection that does not drop a video call.' },
      { h3: 'On their own', p: 'If the timetable and the level cannot meet in a group, the teacher takes the learner one to one.' }
    ],
    spec: { title: 'Groups matched on purpose', p: 'We group learners by level precisely so that comparisons inside a group are fair, the same principle as comparing towns at a common mix.' }
  },

  fees: {
    h2: 'Sligo class fees',
    intro: 'Three lines, nothing more.',
    first: 'The opening lesson, taught in full and assessed, free.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of one to one lessons on the same weekly pattern.',
    closer: 'Families outside India all pay the same monthly fee in US dollars, so Sligo sees the figure Galway sees, with no euro version shown. There is no charge until the free lesson has produced a course and a weekly time, and the pricing page explains what happens over holidays, after a missed lesson, and when a learner changes format.'
  },

  reviewsH2: 'Six families\' Google reviews, printed as they wrote them',

  book: {
    h2: 'Book a free Sligo lesson',
    intro: 'Tell us the learner\'s age and what they like. We build the opening hour from that, and it might end with a game, a first working program, or a comparison made fair by fixing the mix.',
    success: 'Thank you. We will be in touch about the Sligo lesson shortly.'
  },

  faq: {
    h2: 'Sligo coding class questions',
    intro: 'What families in Sligo ask before booking.',
    items: [
      { q: 'How many people live in Sligo town?', a: 'The Census 2022 small area tables count 20,238 usual residents in the built-up area of Sligo, in 8,208 households. Our County Sligo page quotes the census town list instead, which reaches its own, slightly different figure.' },
      { q: 'What is the Sligo data project?', a: 'Learners reproduce a genuine Simpson\'s paradox from census counts: Balbriggan level with Sligo among working residents and ahead among education travellers, yet behind when combined, then write a standardisation that compares the towns at a common mix, and repeat our search for reversals across 74 towns.' },
      { q: 'What is Simpson\'s paradox?', a: 'A reversal where one place or group does better in every subgroup but worse overall, because the overall figure also reflects how the subgroups are mixed. It is real, it is rare, and it is fixed by comparing at a common mix.' },
      { q: 'How do Sligo residents travel to work?', a: 'Of the 8,622 working residents in the travel table, 3,852 drive, 1,738 walk, 831 give working mainly at or from home, 447 travel as a car passenger, 304 by van, 246 by bicycle and 139 by bus, with 989 not stating.' },
      { q: 'When do lessons happen?', a: 'After school, in the evening and on weekend mornings. An Irish 5pm is 9.30pm for our teachers in India during Irish summer time and 10.30pm in winter, so the free lesson is where we find an hour that suits both ends.' },
      { q: 'Can adults learn with you in Sligo?', a: 'Yes. Our learners go up to sixty-seven, many adults start with no experience at all, and the free lesson decides whether that happens in a matched group or one to one.' },
      { q: 'Is the paradox a trick of rounding?', a: 'No. The counts are exact and the reversal holds at three decimal places. What is small is the working-resident gap, which we state openly; the education-group gap and the combined gap are clear.' },
      { q: 'Is there a Modern Age Coders classroom in Sligo?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Sligo cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Sligo',
    html: 'The rest of the county is on the <a class="cg-inline-link" href="/coding-classes-in-county-sligo">County Sligo</a> page, within <a class="cg-inline-link" href="/coding-and-ai-classes-in-connacht">Connacht</a>, and the other town in this comparison has its own page at <a class="cg-inline-link" href="/best-coding-class-in-balbriggan">Balbriggan</a>. For a view of online schools side by side, <a class="cg-inline-link" href="/best-online-coding-classes-ireland">read this comparison</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> collects every page in the series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sligo, Connacht and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-sligo', label: 'County Sligo' },
    { href: '/coding-and-ai-classes-in-connacht', label: 'Connacht' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-slt .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3.13vw, 2.54rem); }
.cg-root.cg-slt .cg-hero h1 { font-weight: 700; letter-spacing: -0.0192em; line-height: 1.057; }
.cg-root.cg-slt .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.17rem; }
.cg-root.cg-slt .cg-eyebrow { letter-spacing: 0.165em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-slt .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.0135em; }
.cg-root.cg-slt .cg-grid-3 { gap: clamp(1.1rem, 2.68vw, 2.1rem); }
.cg-root.cg-slt .cg-table caption { letter-spacing: 0.039em; font-weight: 700; }
.cg-root.cg-slt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-slt .cg-table td:nth-child(3), .cg-root.cg-slt .cg-table td:nth-child(5) { font-weight: 600; }
.cg-root.cg-slt .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 1.06rem; }
.cg-root.cg-slt .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Sligo town, the built-up area "Sligo, Co Sligo", and Balbriggan, "Balbriggan, Co Dublin", CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T11T1TOWN22, row "Work mainly at or from home": Sligo 831 of 8,622 working residents and 20 of 5,073 travelling to school, college or childcare, combined 851 of 13,695; Balbriggan 1,000 of 10,373 and 38 of 7,725, combined 1,038 of 18,098. Our division: Sligo 9.638, 0.394 and 6.214 percent; Balbriggan 9.640, 0.492 and 5.735 percent; education group share of travellers 37.0 percent in Sligo and 42.7 in Balbriggan; Balbriggan\'s two rates at Sligo\'s mix give 6.252 percent. Our search, run on the same date: among the 74 towns with at least 3,000 working residents and 1,500 education travellers, testing on foot, bicycle, bus, car passenger, car driver and work mainly at or from home against Sligo, exactly one reversal was found, this one. Sligo town other figures: SAP2022T2T1TOWN22 usual residents 20,238, born in Ireland 15,631; SAP2022T15T2TOWN22 households 8,208, broadband 6,322, none 805, not stated 866, other 215; SAP2022T11T1TOWN22 to work total 8,622 with car driver 3,852, on foot 1,738, not stated 989, car passenger 447, van 304, bicycle 246, bus 139, train 32; to school, college or childcare total 5,073 with car passenger 2,172, on foot 1,643, not stated 475, bus 350, car driver 286, bicycle 88; SAP2022T11T4TOWN22 1,843 work from home at least some of the time, 5,426 never, 1,353 not stated; SAP2022T11T5TOWN22 1,153 children under 15 in childcare. HSE: Sligo University Hospital, "The Mall, Rathquarter, Sligo Town, Sligo, F91 H684". Office of Public Works, Heritage Ireland: Sligo Abbey, "Abbey Street, Sligo F91 K796", "The Dominican priory known as Sligo Abbey has dominated Sligo\'s eastern district since the town was founded in the mid-thirteenth century. Large parts of the church, sacristy and chapterhouse are preserved from this period, alongside the beautiful fifteenth century cloister".',
    localProject: 'Level, ahead, and still behind. On the census travel row labelled work mainly at or from home, Balbriggan is level with Sligo among working residents, 9.640 against 9.638 percent, and ahead among those travelling to school, college or childcare, 0.492 against 0.394 percent, yet behind on the two groups combined, 5.735 against 6.214 percent. Nothing is wrong with either town\'s figures: the education group has a rate near zero, and Balbriggan has 42.7 percent of its travellers in that group against 37.0 percent in Sligo, so its combined rate is pulled down by its mix rather than by anything inside either group. Standardised to Sligo\'s mix, Balbriggan\'s rates give 6.252 percent, which agrees with the group-by-group comparison. The reversal was found, not constructed: among the 74 towns with at least 3,000 working residents and 1,500 education travellers, testing six modes against Sligo returned exactly one reversal. The page states openly that the working-resident gap is only two thousandths of a point, and makes no claim that either town has more home-working in any meaningful sense. The learner reproduces the table, writes a standardisation function, and repeats the search. New family for the cluster: composition effects, Simpson\'s paradox and standardisation.',
    requiredMentions: [
      '20,238',
      '8,208',
      '8,622',
      '1,738',
      '5,073',
      '1,643',
      '831',
      '13,695',
      '6.214',
      '5.735',
      'F91 H684',
      'F91 K796'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, row "Work mainly at or from home": Sligo, Co Sligo 831 of 8,622 working residents and 20 of 5,073 travelling to school, college or childcare; Balbriggan, Co Dublin 1,000 of 10,373 and 38 of 7,725. Sligo travel to work 8,622 with car driver 3,852, on foot 1,738, car passenger 447, van 304, bicycle 246, bus 139, not stated 989; to school, college or childcare 5,073 with car passenger 2,172, on foot 1,643, bus 350, car driver 286, bicycle 88.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Sligo, Co Sligo: usual residents 20,238; households 8,208, broadband 6,322; 1,843 work from home at least some of the time, 5,426 never; 1,153 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Health Service Executive: Sligo University Hospital, "The Mall, Rathquarter, Sligo Town, Sligo, F91 H684".', url: 'https://www2.hse.ie/services/hospitals/sligo-university-hospital/' },
      { claim: 'Office of Public Works, Heritage Ireland: Sligo Abbey, "Abbey Street, Sligo F91 K796"; "The Dominican priory known as Sligo Abbey has dominated Sligo\'s eastern district since the town was founded in the mid-thirteenth century."', url: 'https://heritageireland.ie/places-to-visit/sligo-abbey/' }
    ],
    rejectedClaims: [
      'Any claim that either town has more home-working or home-learning in a meaningful sense: the gaps are small and the page is about how totals behave.',
      'A constructed or hypothetical example presented as real: the reversal was found by searching the published table, and the search is described.',
      'Hiding the size of the working-resident gap: it is two thousandths of a percentage point and the page says so.',
      'The census town-list population of Sligo, the station, Hawk\'s Well Theatre and ATU Sligo: the County Sligo page owns all of them, and its average-hides-spread lesson.',
      'Sligo Abbey admission prices in euro: not reproduced.',
      'Any reason for either town\'s travel figures.'
    ]
  }
};
