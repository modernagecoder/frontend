'use strict';
// County Leitrim (cg- county page, Ireland cluster, Phase 4). Spine: the number
// behind the percentage. Leitrim is the least densely populated county in the
// State at 22 people per square kilometre, and its counts are small enough that
// percentages computed on them are mostly noise. The anchor case is real and
// quoted: 77 people cycled to work in 2022, an increase of 27 since 2016, which
// is a rise of more than half on a base of fifty people. Walking fell by eleven.
// The county holds 142 people with a PhD, 0.4 per cent of the national total, so
// a dozen arrivals would move that figure by 8 per cent. The lesson is to ask
// how many people before believing any rate, and to expect small places at both
// ends of every league table. NOT USED: the F1010 doubling trap measured in this
// county's research, which the County Kerry and Fingal pages own; the three
// electoral areas that reconcile exactly to 35,199, which is County Galway's
// spine; and the Carrick-on-Shannon and Roosky cross-county built-up areas,
// which belong to the Louth and Carlow pages and appear here as a labelling
// note. Facts read at primary sources on 16 September 2026.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY LEITRIM', blurb: 'Carrick-on-Shannon, Manorhamilton and Ballinamore, with a project on percentages built from tiny numbers.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-leitrim',
  code: 'ltr',
  accent: '#7A4230',
  accentRationale: 'County Leitrim: a russet from the solver, held apart from the browns used on the Munster and midland pages',
  pageType: 'governorate',
  place: {
    name: 'County Leitrim',
    eyebrow: 'County Leitrim, Connacht',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-sligo', name: 'County Sligo' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'County Sligo', href: '/coding-classes-in-county-sligo' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Leitrim, Ireland',
  title: 'Coding Classes in County Leitrim | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Leitrim, from Carrick-on-Shannon and Manorhamilton to Ballinamore, Mohill and Drumshanbo, ages 6 to 67.',
  ogDescription: 'Coding and AI classes for County Leitrim, with a project on what a percentage is worth when the number underneath it is very small.',
  twitterDescription: 'Coding classes across County Leitrim, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Leitrim Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Leitrim, taught live in English.'
  },

  h1: 'Coding classes in County Leitrim',
  capsuleQ: 'What are the best coding classes in County Leitrim?',
  capsule: 'Leitrim has 35,199 residents and 22 of them for every square kilometre, the thinnest spread of any county in the State. Carrick-on-Shannon is the biggest town at 4,743 and after that nothing reaches two thousand: Manorhamilton 1,667, Drumshanbo 1,240, Ballinamore 1,112, Mohill 1,027. Classes here run the same way they run everywhere we teach: live, weekly, at a fixed hour, in ability groups of five to ten or one to one, for ages six to sixty-seven. The first is free, then USD 100 a month in a group or USD 150 privately.',
  lead: 'In 2022, 77 people cycled to work in County Leitrim. That was 27 more than in 2016, so somebody could correctly write that cycling to work here rose by more than half in six years. Twenty seven people. Over the same period walking to work fell, from 697 people to 686, a decline of eleven individuals that a chart would render as a downward line. This is the whole difficulty with small places. Every percentage is arithmetically correct and almost none of them mean what they appear to mean, because the numbers underneath are small enough that a handful of people changing jobs moves everything. The habit this county teaches is short and permanent: before you believe a percentage, ask how many people.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Leitrim.',

  picks: {
    eyebrow: 'Course picks for County Leitrim',
    h2: 'Four places to start',
    intro: 'Each begins with a free lesson taught by the teacher who would take the course, with nothing to pay and no card details collected first.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where a score of three going to four looks enormous as a percentage and is not.' },
      { course: 'maths-through-coding', band: 'Ages 9 to 13', note: 'Percentages, ratios and why the number underneath decides how much a change means.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real county figures small enough to see the noise in, which is the best place to learn about it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults reporting on small branches, small teams or small towns without overreading the movement.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Ask how many people',
      intro: 'Five true statements about Leitrim, each with the count that makes sense of it.',
      body: [
        { kind: 'table', caption: 'The percentage, and the number underneath it', head: ['The claim', 'The actual count', 'What it is worth'], rows: [
          ['Cycling to work rose by more than half', '77 cyclists, up 27 from 50', 'A change of 27 people across a whole county'],
          ['Walking to work declined', '686 walkers, down from 697', 'Eleven fewer people'],
          ['The county holds 0.4% of Ireland\'s PhDs', '142 people', 'A dozen arrivals would move it by 8%'],
          ['Bus and train use is negligible', '133 on the bus, 62 by train', 'Both small enough to be a single timetable change'],
          ['Driving dominates completely', '9,137 of 13,175 commuters', 'A count big enough to trust']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why small places top every table', p: 'Rank any set of areas by a rate and the smallest ones cluster at both ends, best and worst. That is not because small places are extreme. It is because a rate built on a small count swings further on the same real change, and any league table of rates is partly a league table of sample sizes.' },
          { h3: 'The rule of thumb', p: 'A percentage without a count beside it is half a fact. Newspapers, dashboards and generated summaries all drop the count, because the percentage is the interesting-looking half.' },
          { h3: 'What a learner writes', p: 'A version of the table above, for a set of claims they find themselves, with the raw number restored to each one. It takes an afternoon and it is genuinely useful work.' }
        ] },
        { kind: 'callout', h3: 'The version of this that costs people money', p: 'A small shop reports sales up 40 per cent, on four extra items. A small school reports a doubling in a subject, on six extra pupils. A small team reports a collapse in output, because two people were on leave. In each case somebody upstream makes a decision on the percentage, and the decision is about noise. Learning to ask for the count, out loud, in a meeting, is a career skill dressed up as a statistics lesson, and Leitrim is the ideal place to learn it because the county is small enough that you can see the individual people inside the numbers.' },
        { kind: 'p', text: 'We have kept our own arithmetic visible here. The statistics office publishes 77 cyclists and an increase of 27; the base of fifty and the resulting proportion are our subtraction and our division, not theirs, and a learner should be able to spot which figures on any page were published and which were worked out by the person writing it.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Thin on the ground, growing fast',
      intro: 'Quoted from Central Statistics Office releases naming Leitrim.',
      body: [
        { kind: 'table', caption: 'County Leitrim at the 2022 census', head: ['Counted', 'Number'], rows: [
          ['People in the county', '35,199, up 3,155 or 10% since 2016, against national growth of 8%'],
          ['Women and men', '17,646 and 17,553'],
          ['Population density', '22 people per square kilometre, the thinnest in the State, against 4,618 in Dublin City'],
          ['Average age', '40.7 years, up from 39.8, against a national 38.8'],
          ['Able to speak Irish, aged three and over', '13,153, up by almost 900, or 40.7% of that group'],
          ['Holding dual Irish citizenship', '1,146, up from 603 in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The towns', p: 'Carrick-on-Shannon 4,743, then Manorhamilton 1,667, Drumshanbo 1,240, Kinlough 1,196, Ballinamore 1,112, Mohill 1,027 and Dromahair 939, with Carrigallen, Drumsna and Keshcarrigan smaller again.' },
          { h3: 'A village called Leitrim', p: 'There is a village named Leitrim in County Leitrim, population 701, and it has the youngest average age of any place here at 35.4 years. Mohill has the oldest at 44.1.' },
          { h3: 'Two counties, one town', p: 'The statistics office lists Carrick-on-Shannon as a built-up area spanning Leitrim and Roscommon, and does the same for Roosky. The 4,743 covers the whole town rather than the Leitrim part of it.' }
        ] },
        { kind: 'p', text: 'Non-Irish citizens make up 11% of the county, close to the national 12%, and the largest group is UK citizens at 1,308, ahead of Polish at 698, Latvian at 162 and Lithuanian at 144. Those last two are a good illustration of everything above: a community of 144 people is real and visible in a county this size, and any percentage calculated about it will move sharply when a single family arrives or leaves.' }
      ]
    },
    {
      id: 'work', tint: 'tint', eyebrow: 'Work and study',
      h2: 'Half an hour in the car, and no school on the list',
      intro: 'What a working week and a school year look like here.',
      body: [
        { kind: 'table', caption: 'Working and travelling in Leitrim, Census 2022', head: ['What the CSO reported', 'Figure'], rows: [
          ['At work', 'More than 14,800 people'],
          ['Travelling to work', '13,175, of whom 9,137 drove'],
          ['Working from home at least one day a week', '4,079 people, 28% of the workforce against 32% nationally'],
          ['Working from home all five days', 'More than 1,000 people'],
          ['Average journey to work', '30 minutes, up from 27.4, against a national 29.1'],
          ['Third level qualifications', 'Just over 10,000 people, up from more than 7,600, a rate of 42% against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A longer commute than the country', p: 'Thirty minutes each way is above the national average and rising faster. In a county with no town over five thousand people, that is simply what distance does.' },
          { h3: 'The 2018 school list', p: 'No Leitrim school appears among the forty on the first national list for Leaving Certificate Computer Science. Every county reference in that table was checked line by line. It describes 2018 and nothing later.' },
          { h3: 'Staying in education longer', p: 'The average age of finishing full time education here rose from 19.6 to 20.5 years, still below the national 20.8 but moving the same way.' }
        ] },
        { kind: 'spec', title: 'Why working from home is lower here than nationally', p: 'It is easy to assume a rural county would be full of remote workers, and the figure says otherwise: 28% against 32% nationally. Work that can be done from a kitchen table follows the kind of job, not the kind of place, and a county whose employment sits in farming, care, retail and construction will always show a lower share regardless of how good the broadband is. It is another reminder to check the number rather than the story that sounds right.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Leitrim addresses',
      h2: 'Four places, and a county split between two routing keys',
      intro: 'Each address below was read on the organisation\'s own website.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Dock, Carrick-on-Shannon', p: 'St George\'s Terrace, eircode N41 T2X2. Built as a courthouse in 1828, left empty from 1994, restored by the county council and reopened as an arts centre on 20 August 2005.' },
          { h3: 'The council and the station', p: 'Leitrim County Council is at Aras an Chontae, St Georges Terrace, N41 PF67, and Carrick-on-Shannon railway station on Croghan Road is N41 X201, with a 20 space car park currently free of charge.' },
          { h3: 'North of the county', p: 'Leitrim Sculpture Centre at New Line, Manorhamilton, carries F91 EAW7, a different routing key entirely from the N41 of Carrick-on-Shannon and Mohill, because north Leitrim posts through Sligo.' }
        ] },
        { kind: 'p', text: 'That routing key split is worth a moment. A county of 35,199 people is divided between two postal areas, which means any attempt to identify Leitrim addresses by eircode prefix alone will capture only half of them, and will pick up a great deal of Sligo along the way. We are not connected with any organisation named here, nor with Leitrim County Council, which publishes no datasets at all on the national portal. Population, work and education figures are quoted from Central Statistics Office releases naming Leitrim; the density figure comes from a joint publication by the two statistics offices on this island, in a sentence that names only counties in this State; and the arithmetic in the project is ours and is labelled as ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to knowing what a change means',
    intro: 'Ages guide the grouping; the free lesson decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Big change, small number', p: 'Programs where doubling two to four feels dramatic and moving fifty to fifty-two does not.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Percentages with counts', p: 'Never writing a percentage without the number it came from, and seeing why.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Noise and signal', p: 'Working out which movements in a small dataset are worth reporting at all.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Small samples at work', p: 'Reporting on small branches and teams without turning ordinary variation into a trend.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A generated chart will happily draw a trend through four people',
    intro: 'Nothing in a percentage tells a tool how many individuals produced it.',
    p1: 'Give any modern tool a column of small counts and ask for the change, and it will give you the change: neat, percentage-formatted and entirely sincere. The rise in cycling in Leitrim would appear as a strong upward movement, because arithmetically it is one. The fact that it describes twenty seven people lives in a different column, and nothing in the question forced anybody to look at it.',
    p2: 'The correction is not technical. It is one question asked before the chart is believed, and a learner who has spent an afternoon restoring counts to percentages asks it without being prompted. That is the difference between somebody who produces analysis and somebody who can be trusted with it.',
    closer: 'So the case for learning this properly in 2026 is not that machines cannot calculate. It is that they will calculate anything you ask, including things that should never have been calculated.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'What a Leitrim family actually gets',
    intro: 'Six facts about how the teaching works.',
    cells: [
      { h3: 'One live hour, weekly', p: 'A teacher present throughout, expecting the learner to speak and to be wrong out loud.' },
      { h3: 'Distance stops mattering', p: 'Kinlough to Carrick-on-Shannon is most of the county. Online, it is nothing at all.' },
      { h3: 'A group that could not otherwise exist', p: 'Five to ten learners at one level, gathered from Leitrim and several other countries, which in a county of 35,199 is the only way the right group ever forms.' },
      { h3: 'What is needed', p: 'A laptop or desktop, working sound and a line that carries video, which the free lesson tests directly.' },
      { h3: 'Built around Irish terms', p: 'Junior Cycle, Transition Year and senior cycle, with mid-terms and exam weeks planned for.' },
      { h3: 'Our teaching hours', p: 'Afternoons, evenings and weekend mornings, taught by a team working several hours ahead of Irish time.' }
    ],
    spec: { title: 'What small really means for a class', p: 'In a county with 35,199 people spread at 22 to the square kilometre, a child with a serious interest in programming may be the only one in their year with it, and the next one may be in a school forty minutes away. No timetable in any building solves that. Gathering those learners into one online group at the right level, at a fixed hour on a fixed day, is not a convenience here. It is the only arrangement under which the class exists at all.' }
  },

  fees: {
    h2: 'Leitrim class fees',
    intro: 'Three figures, and the terms said out loud.',
    first: 'A full first lesson at no cost, ending with a level and a recommended course.',
    group: 'A month of group classes, about eight lessons, five to ten learners at one level.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'Billing is monthly in US dollars at the one rate we charge outside India, so Manorhamilton pays exactly what Carrick-on-Shannon pays and there is no euro list to compare with. Nothing is charged until a course and an hour are agreed in the free lesson. Pauses, missed lessons and moving between group and one to one are all written out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews our families wrote, printed as they stand',

  book: {
    h2: 'Take the free lesson first',
    intro: 'Send the learner\'s age and what they are drawn to. We build the first hour around it, from a Scratch project about scores that only look dramatic to a set of real county figures with the counts put back in.',
    success: 'Thank you. Somebody will be in touch about your County Leitrim class shortly.'
  },

  faq: {
    h2: 'County Leitrim coding class questions',
    intro: 'The questions Leitrim families ask us first.',
    items: [
      { q: 'How many people live in County Leitrim?', a: 'The 2022 census counted 35,199, up 3,155 or 10% since 2016, at 22 people per square kilometre, the thinnest spread of any county in the State.' },
      { q: 'What is the Leitrim data project?', a: 'Students put the missing counts back into percentages. The headline case is cycling to work, which rose by more than half and by 27 people, alongside walking, which fell by eleven.' },
      { q: 'How big is Carrick-on-Shannon?', a: 'Its built-up area held 4,743 people in 2022, and the statistics office records that area as spanning Leitrim and Roscommon, so that figure covers the whole town rather than the Leitrim side of it.' },
      { q: 'Did a Leitrim school offer Leaving Certificate Computer Science from the start?', a: 'No Leitrim school appears on the forty-school first-phase list published in January 2018. Every county reference in that table was checked. It says nothing about schools here today.' },
      { q: 'Is it harder to find a class in a county this small?', a: 'In a room, yes, and that is the honest answer. A child may be the only one in their year with a serious interest. Online, we place them with five to ten learners at the same level from across several countries.' },
      { q: 'Do you teach in north Leitrim as well?', a: 'Yes. Manorhamilton and Kinlough get exactly the same class at exactly the same hour as Carrick-on-Shannon, which is the point of the format.' },
      { q: 'When do classes run?', a: 'Afternoons, evenings and weekend mornings, at an hour fixed during the free lesson. Our teaching team works several hours ahead of Irish time.' },
      { q: 'Is there a Modern Age Coders classroom in County Leitrim?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Leitrim coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The north west',
    html: 'Leitrim\'s neighbours with pages of their own are <a class="cg-inline-link" href="/coding-classes-in-county-sligo">County Sligo</a>, <a class="cg-inline-link" href="/coding-classes-in-county-donegal">County Donegal</a> and <a class="cg-inline-link" href="/coding-classes-in-county-longford">County Longford</a>. To compare online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and everything is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Leitrim and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-sligo', label: 'County Sligo' },
    { href: '/coding-classes-in-county-longford', label: 'County Longford' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ltr .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3.05vw, 2.55rem); }
.cg-root.cg-ltr .cg-hero h1 { font-weight: 700; letter-spacing: -0.0169em; line-height: 1.079; }
.cg-root.cg-ltr .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.07rem; }
.cg-root.cg-ltr .cg-eyebrow { letter-spacing: 0.183em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ltr .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.0143em; }
.cg-root.cg-ltr .cg-grid-3 { gap: clamp(1.04rem, 2.69vw, 2.14rem); }
.cg-root.cg-ltr .cg-table caption { letter-spacing: 0.036em; font-weight: 700; }
.cg-root.cg-ltr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ltr .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-ltr .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.92rem; }
.cg-root.cg-ltr .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'County Leitrim, Census 2022 (CSO Leitrim releases): population 35,199, up 3,155 (10 percent) since 2016, against national growth of 8 percent from 4,761,865 to 5,149,139; 17,646 female and 17,553 male; average age 40.7 against 39.8 in 2016 and a national 38.8. Density: a joint publication by the two statistics offices on this island states that "In Ireland, population density ranged from 22 people per km2 in Leitrim to 4,618 people per km2 in Dublin City", a sentence naming only counties in this State, and the same release lists the smallest populations as Leitrim, Longford and Carlow. Towns: Carrick-on-Shannon 4,743 at 906.0 per sq km over 5.2 sq km, recorded by the CSO as a built-up area spanning Counties Leitrim and Roscommon, as is Roosky; Manorhamilton 1,667; Drumshanbo 1,240; Kinlough 1,196; Ballinamore 1,112; Mohill 1,027; Dromahair 939; Carrigallen 481; Drumsna 268; Keshcarrigan 238; and a village named Leitrim, population 701, which is the youngest place in the county at average age 35.4, with Mohill the oldest at 44.1. Local electoral areas: Carrick-on-Shannon 12,634, Manorhamilton 11,686 and Ballinamore 10,879. Citizenship: non-Irish citizens 11 percent of the county against a national 12 percent, largest group UK at 1,308, then Polish 698, Latvian 162 and Lithuanian 144; dual Irish citizens up from 603 in 2016 to 1,146. Work and travel: more than 14,800 people at work; 4,079 working from home at least one day a week, 28 percent of the workforce against 32 percent nationally, with more than 1,000 doing so five days, 752 one day and 662 two days, and over 9,200 never; 13,175 people travelling to work, of whom 9,137 drove, 133 took the bus, 62 the train, 686 walked, down from 697 in 2016, and 77 cycled, an increase of 27 people since 2016; average journey time 30 minutes against 27.4 in 2016, while the national average moved from 28.2 to 29.1. Education and Irish: third level qualifications up from more than 7,600 in 2016 to just over 10,000, a rate of 42 percent against 45 percent nationally; 142 people in the county hold a PhD, 0.4 percent of all PhD holders in the country; the average age of completing full time education up from 19.6 to 20.5 years against a national 20.8; 13,153 people aged three and over could speak Irish, up by almost 900, which is 40.7 percent of that group against 41 percent in 2016. Leitrim has no Gaeltacht: the CSO defines it as electoral divisions in Cork, Donegal, Galway, Kerry, Mayo, Meath and Waterford. FINDING: no County Leitrim school appears on the forty-school first-phase Leaving Certificate Computer Science list of 4 January 2018, verified by checking every county reference in the published table. Addresses from their owners: The Dock, St George\'s Terrace, Carrick-on-Shannon, N41 T2X2, built as a courthouse in 1828, vacated in 1994 and reopened as an arts centre on 20 August 2005 after restoration by the county council; Leitrim County Council, Aras An Chontae, St Georges Terrace, Carrick on Shannon, N41 PF67; Carrick-on-Shannon railway station, Croghan Road, N41 X201, with 20 parking spaces currently free; Lough Rynn Castle, Mohill, N41 WE16, set in 300 acres; Leitrim Sculpture Centre, New Line, Manorhamilton, F91 EAW7, a different routing key from the N41 of south Leitrim.',
    localProject: 'The number behind the percentage. Leitrim\'s counts are small enough that rates computed on them are mostly noise, and the county supplies clean, quotable examples. In 2022, 77 people cycled to work, an increase of 27 since 2016, so the base was 50 and the correct-but-useless headline is a rise of more than half; the subtraction and the proportion are our own arithmetic and are labelled as such on the page, while the 77 and the 27 are the CSO\'s. Over the same period walking to work fell from 697 people to 686, a decline of eleven individuals. The county holds 142 people with a PhD, 0.4 percent of the national total, so a dozen arrivals would move that by about 8 percent. Bus and train use stand at 133 and 62 people respectively, each small enough to be altered by one timetable change, while driving at 9,137 of 13,175 commuters is a count large enough to trust. Learners rebuild the table with the raw number restored to each claim, then meet the general result: ranking areas by a rate places small areas at both ends of the table, because a rate built on a small count swings further on the same real change, so every league table of rates is partly a league table of sample sizes.',
    requiredMentions: [
      '35,199',
      '4,743',
      '13,153',
      '9,137',
      '142 people',
      '30 minutes',
      'N41 PF67',
      'F91 EAW7',
      '13,175',
      '1,146',
      '4,079',
      '1,667'
    ],
    sources: [
      { claim: 'CSO Leitrim summary press statement, 30 May 2023: "the population of Leitrim grew by 10% to 35,199, which means the number of people in the county rose by 3,155 between April 2016 and April 2022. Over the same period, Ireland\'s population grew by 8% from 4,761,865 to 5,149,139"; average age 40.7 against 39.8; "Of Leitrim\'s population, 17,646 were female and 17,553 were male"; "In Leitrim, 4,079 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 28% of the workforce. The national figure was 32%."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsleitrim/' },
      { claim: 'CSO joint census publication, 2 July 2025: "In Ireland, population density ranged from 22 people per km2 in Leitrim to 4,618 people per km2 in Dublin City" and "The areas with the smallest populations were Leitrim (35,199), Longford (46,751) and Carlow (61,968)", a sentence naming only counties in this State.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-cpini/irelandandnorthernireland-ajointcensuspublication2021-2022/populationandage/' },
      { claim: 'CSO PxStat table F1013: the built-up area is labelled "Carrick-On-Shannon, Counties Leitrim & Roscommon", population 4,743 at 906.0 per sq km over 5.2 sq km, and Roosky is likewise labelled as spanning both counties.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat table F1015: Manorhamilton 1,667; Drumshanbo 1,240; Kinlough 1,196; Ballinamore 1,112; Mohill 1,027; Dromahair 939; Carrigallen 481; Drumsna 268; Keshcarrigan 238; and the village of Leitrim 701 with an average age of 35.4, the youngest in the county, against Mohill\'s 44.1.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1015/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat table F1016: Carrick-On-Shannon local electoral area 12,634, Manorhamilton 11,686 and Ballinamore 10,879.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1016/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Leitrim: "In Leitrim non-Irish citizens accounted for 11% of the county\'s population. Among the non-Irish residents, the largest group were UK citizens (1,308 people) followed by Polish citizens (698), Latvian (162) and Lithuanian (144)"; dual Irish citizens up from 603 in 2016 to 1,146.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionleitrim/' },
      { claim: 'CSO Profile 7 Leitrim: "There were more than 14,800 people at work in Leitrim in April 2022"; "There were 13,175 people travelling to work in the county in April 2022. The majority of these drove to work, with 9,137 people driving to work by car in 2022. There were 133 people travelling by bus and 62 by train. Looking at active travel, 686 people walked to work, down from 697 in 2016, while 77 people cycled, an increase of 27 people since 2016"; "an average journey time of 30 minutes compared with 27.4 minutes in 2016. Nationally, the average journey time increased from 28.2 minutes to 29.1 minutes."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingleitrim/' },
      { claim: 'CSO Profile 8 Leitrim: third level up from more than 7,600 in 2016 to just over 10,000, a rate of 42 percent against 45 percent nationally; "There were 142 people in the county who held a PhD, which was 0.4% of all PhD holders in the country"; "In Leitrim the average age rose from 19.6 years to 20.5 years"; "The number of people (aged three and over) who could speak Irish in Leitrim increased by almost 900 to 13,153 in Census 2022. This was 40.7% of the county\'s population aged three and over"; and the editor\'s note defining the Gaeltacht as electoral divisions in seven counties not including Leitrim.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationleitrim/' },
      { claim: 'Department of Education, 4 January 2018: no County Leitrim school appears in the forty-school first-phase Leaving Certificate Computer Science table, verified by checking every county reference in the published list.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'The Dock: "Built in 1828 as a courthouse, The Dock is a significant heritage building which was restored by Leitrim County Council and reopened in 2005 as an award-winning arts centre", the building having been vacated in 1994 and the centre opening on 20 August 2005, at "The Dock, St. George\'s Terrace, Carrick-on-Shannon, County Leitrim, N41T2X2".', url: 'https://www.thedock.ie/about/' },
      { claim: 'Leitrim County Council: "Leitrim County Council, Aras An Chontae, St. Georges Terrace, Carrick on Shannon, Co Leitrim, N41 PF67". Its publisher page on data.gov.ie lists zero datasets. Leitrim Sculpture Centre publishes "New Line, Manorhamilton, Co. Leitrim, F91 EAW7", a different routing key from south Leitrim\'s N41.', url: 'https://www.leitrimcoco.ie/en/contact-us/' }
    ],
    rejectedClaims: [
      'The F1010 doubling trap measured in this county\'s research: the County Kerry and Fingal pages own it.',
      'The three local electoral areas reconciling exactly to 35,199 as a project: that is the County Galway page\'s spine, so the figures appear here without that framing.',
      'The Carrick-on-Shannon and Roosky cross-county built-up areas as a project: the County Louth and County Carlow pages own the cross-county filter trap.',
      'Any claim that a Leitrim-specific CSO press release calls it the smallest county: neither the Summary nor Profile 1 uses that wording, so only the joint publication sentence is quoted.',
      'Any Northern Ireland figure from the joint census publication: only its sentence naming counties in this State is used.',
      'A county density figure derived by aggregating electoral division areas ourselves: the published 22 per square kilometre is quoted instead.',
      'Any headcount for a private Leitrim employer: none could be verified at a primary source.'
    ]
  }
};
