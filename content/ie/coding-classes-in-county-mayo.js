'use strict';
// County Mayo (cg- county page, Ireland cluster, Phase 4). Spine: a count and a
// rate can move in opposite directions and both be true. Four instances in this
// one county. The Mayo Gaeltacht gained 129 people while the number of Irish
// speakers inside it fell by 3 percent. County-wide, Irish speakers rose by
// just over 1,200 to 56,346 while their share fell from 44.7 to 44.3 percent.
// Employment rose 13 percent to more than 58,300 while labour force
// participation, at 57 percent, was the joint lowest in the country. Third
// level went up on both measures at once, which is the contrast case that makes
// the idea land. NOT USED as the project: the council's two datasets, whose
// only resources point at an internal GIS host that did not answer on three
// attempts, because the Tipperary, Kerry and Offaly pages already cover three
// different ways of failing to reach data; it is a one-line note here. Also not
// used: the Charlestown-Bellahy straddle (Louth and Carlow own that trap) and
// the Rice College address containing another town's name (Longford owns the
// substring trap). Facts read at primary sources on 16 September 2026.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY MAYO', blurb: 'Castlebar, Ballina, Westport and the Gaeltacht, with a project on counts and rates that disagree.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-mayo',
  code: 'myo',
  accent: '#145A7A',
  accentRationale: 'County Mayo: an Atlantic blue from the solver, distinct from the blues used on the midland and border pages',
  pageType: 'governorate',
  place: {
    name: 'County Mayo',
    eyebrow: 'County Mayo, Connacht',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-galway', name: 'County Galway' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'County Galway', href: '/coding-classes-in-county-galway' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Mayo, Ireland',
  title: 'Coding Classes in County Mayo | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Mayo, from Castlebar and Ballina to Westport, Claremorris and Belmullet, ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and AI classes for County Mayo, with a project on how a number can rise while the rate it belongs to falls, and both statements be correct.',
  twitterDescription: 'Coding classes across County Mayo, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Mayo Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Mayo, taught live in English.'
  },

  h1: 'Coding classes in County Mayo',
  capsuleQ: 'What are the best coding classes in County Mayo?',
  capsule: 'Mayo is home to 137,970 people, 26,362 of them aged 15 or under, across three towns of size and a long Atlantic coast: Castlebar at 13,054, Ballina at 10,556 and Westport at 6,872. It has a Gaeltacht, an average age of 41.6 years and one of the oldest towns in the country. Our teaching is live and weekly, in ability groups of five to ten or one to one, open from age six to sixty-seven. Nothing is charged for the first lesson. A group place afterwards is USD 100 a month, one to one is USD 150.',
  lead: 'Here are two sentences about the Mayo Gaeltacht, both taken from the same official page. The population living there grew by 129 people. The number of people there who can speak Irish fell by three per cent. A reader who expects one of them to be wrong will waste a long time looking. They are both right, and they are not even in tension once you see what each is counting. This is the single most reliable way to be misled by a true statistic, and Mayo gives us four clean examples of it in one census. Once a learner can take any headline apart into its top half and its bottom half, a whole category of confident nonsense simply stops working on them.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Mayo.',

  picks: {
    eyebrow: 'Course picks for County Mayo',
    h2: 'Four ways in',
    intro: 'Every one starts with a free lesson from the teacher who would take the course. No card details are collected before a family decides.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games that keep both a score and a percentage, and show how the two can move apart.' },
      { course: 'maths-through-coding', band: 'Ages 9 to 13', note: 'Fractions, ratios and percentages taught by writing programs that calculate them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real census tables where the count rises and the share falls, and the sentence that explains it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who have to present numbers that sound contradictory and are not.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'More people, smaller share',
      intro: 'Four real Mayo measurements. In three of them a count and a rate move in different directions.',
      body: [
        { kind: 'table', caption: 'What went up, what went down, and why both are true', head: ['Measure', 'The count', 'The rate'], rows: [
          ['Irish in the Mayo Gaeltacht', 'Population up 129 people to 10,515', 'Speakers down 3 per cent'],
          ['Irish across the county', 'Speakers up by over 1,200 to 56,346', 'Share down from 44.7% to 44.3%'],
          ['Employment', 'Up 13% to more than 58,300 at work', 'Participation 57%, against 61% nationally'],
          ['Third level education', 'Up from almost 29,300 to just over 37,000', 'Up too, from 33% to 39%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The mechanism', p: 'A rate has two numbers in it. If the bottom one grows faster than the top one, the rate falls even while the top one grows. More people can speak Irish in Mayo than in 2016 and a slightly smaller fraction of the county can, at the same time, because the county itself grew by 7,463.' },
          { h3: 'The fourth row matters most', p: 'Third level went up on both measures. Including a case where the two agree stops a learner over-applying the lesson and deciding every statistic is a trick.' },
          { h3: 'What a learner writes', p: 'For each headline: what is being counted, what it is being divided by, which of the two moved, and one sentence a reader could not misunderstand.' }
        ] },
        { kind: 'callout', h3: 'Why this is worth an afternoon of a fifteen year old\'s life', p: 'Almost every argument conducted with numbers in public turns on this. One side quotes the count because it is rising. The other quotes the rate because it is falling. Both sides are accurate, both are selective, and the audience concludes that statistics can prove anything. They cannot. A count and a rate answer different questions, and choosing between them is where the honesty lives. A young person who can spot which one is on the slide in front of them has a defence that lasts for life, and it takes one afternoon and a real table to build.' },
        { kind: 'p', text: 'One footnote from the same source, because it is the sort of detail this project trains people to notice. The statistics office records the Mayo Gaeltacht\'s growth of 129 people as the lowest rate of increase of any Gaeltacht area. That is a third kind of statement again, a rank rather than a count or a rate, and it comes with its own question: lowest among how many, and measured over what period. Learners are asked to write down what they would need to check before repeating it.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Three towns and a very long coast',
      intro: 'All quoted from Central Statistics Office releases that name Mayo.',
      body: [
        { kind: 'table', caption: 'County Mayo at the 2022 census', head: ['Counted', 'Number'], rows: [
          ['People in the county', '137,970, up 7,463 since 2016'],
          ['Children aged 15 and under', '26,362, of whom 8,637 were in childcare'],
          ['Average age', '41.6 years, well above the national 38.8'],
          ['Born in the county', '89,416 people, 66% of residents'],
          ['Born outside the State', '25,307 people, 19%, up from 17% in 2016'],
          ['Holding dual Irish citizenship', '4,557, up from 2,462 in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Castlebar and Ballina', p: 'Castlebar holds 13,054 people at 1,575.8 per square kilometre, Ballina 10,556 at 1,290.8. Ballina is the younger of the two, with 21.2% of residents under 15 against Castlebar\'s 19.1%.' },
          { h3: 'Westport', p: '6,872 people spread over 9.5 square kilometres at just 723.4 per square kilometre, with an average age of 41.5, which makes it the roomiest and the oldest of the three.' },
          { h3: 'Town against area', p: 'The electoral areas named after them are far larger: Castlebar 32,080, Ballina 25,858 and Westport 19,947, the difference in each case being the countryside around the town.' }
        ] },
        { kind: 'p', text: 'The extremes are striking. Among places of at least 500 people, Ballyhaunis has the youngest average age in the county at 35.1 years and Keel-Dooagh on Achill the oldest at 53. Mayo is also unusual in that its largest group of non-Irish citizens is British, at 3,898 people, ahead of Polish at 2,131, Lithuanian at 819 and Indian at 562, where most counties in this cluster have Polish citizens in front.' }
      ]
    },
    {
      id: 'learning', tint: 'tint', eyebrow: 'Study and work',
      h2: 'One listed school, one university campus, and a participation rate',
      intro: 'Where a Mayo learner can go, and what the county\'s working patterns look like.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The 2018 list', p: 'Rice College is Mayo\'s single entry on the first national list for Leaving Certificate Computer Science. The department published its address as Castlebar Road, Westport, and that is a street in Westport rather than a reference to the town of Castlebar, which is the sort of thing that trips up anyone matching addresses by name.' },
          { h3: 'ATU Mayo', p: 'Its own site describes a Castlebar campus of roughly 1,000 students at Westport Road, eircode F23 X853, in a building it has occupied since 1994 and the first institute of technology campus in Ireland to be awarded Green Campus status, in 2011.' },
          { h3: 'The Gaeltacht', p: 'The Mayo Gaeltacht holds 10,515 people, of whom 10,196 are aged three and over and 5,956 can speak Irish. Our classes are taught in English, and every programming language uses English keywords, so a pupil from a Gaeltacht school starts level with everyone else.' }
        ] },
        { kind: 'table', mt: true, caption: 'Working in Mayo, Census 2022', head: ['What the CSO reported', 'Figure'], rows: [
          ['People aged 15 and over', 'More than 111,600'],
          ['At work', 'More than 58,300, up 13% since 2016'],
          ['Labour force participation', '57% against 61% nationally, the joint lowest rate in the country'],
          ['Male participation', 'Also joint lowest nationally, alongside Donegal'],
          ['Working from home at least one day a week', '13,894 people, 24% of the workforce against 32% nationally'],
          ['Average journey to work', '25.1 minutes, up from 23.3 minutes in 2016']
        ] },
        { kind: 'spec', title: 'What a low participation rate is not', p: 'A participation rate counts people who are working or looking for work as a share of everyone aged 15 and over. Mayo has an older population than most, an average age of 41.6 against 38.8 nationally, and retired people are outside the labour force by definition. So part of that 57% is demography rather than anything about the county\'s appetite for work. Saying so is not spin. It is the difference between reading a statistic and repeating it, which is the whole subject of this page.' }
      ]
    },
    {
      id: 'data', tint: '', eyebrow: 'The county\'s own data',
      h2: 'Two datasets, and a server that never answered',
      intro: 'A short, honest account of what happened when we went looking.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'What is listed', p: 'Mayo County Council has two dataset records on the national portal, municipal districts and bring bank recycling facilities, both licensed for reuse.' },
          { h3: 'What happened', p: 'Both point at the council\'s own mapping server rather than a file. We asked that server three times, over two different protocols, and it did not answer once. Not refused, not empty. Silent.' },
          { h3: 'What we can say', p: 'That the data was unreachable from outside on the day we tried, and nothing whatsoever about what it contains. Reporting an unreachable source as an empty one would be a straightforward error.' }
        ] },
        { kind: 'p', text: 'We are not connected with Mayo County Council, Atlantic Technological University, Rice College or any school named here. Population, language, education and employment figures are quoted from Central Statistics Office releases naming Mayo, with Gaeltacht figures kept separate from county figures because they measure different areas. The account of the unreachable server is a plain description of requests we made and the responses we did not get. Internet access figures exist only for the West region as a whole, covering Galway, Mayo and Roscommon, at 92% of households connected and 83% on fixed broadband, and we do not restate them as Mayo figures.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to comparing properly',
    intro: 'Ages are a guide. The free lesson decides where someone starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'How many, out of how many', p: 'Programs that keep both a total and a fraction, and show them changing together.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Percentages that mislead', p: 'Working out what a percentage is divided by before believing it.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Counts, rates and ranks', p: 'Three different kinds of claim, on real tables, with the right sentence written for each.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Presenting honestly', p: 'Choosing which measure to lead with and saying why, so nobody can accuse you of picking.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask whether Irish is growing in Mayo and watch the answer pick a side',
    intro: 'There are two true answers and a generated one will usually give you whichever it met most often.',
    p1: 'More people in Mayo can speak Irish than in 2016. A smaller share of the county can. Both come from the same official paragraph. A short answer has room for one of them, and nothing in the wording will tell you that the other exists or that the two are perfectly compatible.',
    p2: 'The learner who has done this project asks a different question, almost automatically: is that a count or a rate, and what is it divided by. It takes seconds and it turns a confident sentence into something you can actually check.',
    closer: 'None of that is about distrusting tools. It is about knowing which shape of question you asked, which stays the reader\'s job no matter how good the answers get.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'What the class looks like from Achill or Ballyhaunis',
    intro: 'Six practical points, stated plainly.',
    cells: [
      { h3: 'A live teacher, weekly', p: 'One hour with a person who asks questions and waits for the answer, not a video to watch alone.' },
      { h3: 'No journey at either end', p: 'Belmullet to Castlebar is over an hour each way. The class that requires none of that is the one still running at Easter.' },
      { h3: 'Ability groups of five to ten', p: 'Learners placed at one level, drawn from Mayo and several countries, so the group is a genuine match rather than whoever turned up.' },
      { h3: 'What a household needs', p: 'A laptop or desktop, working sound and a connection good enough for video, which the free lesson tests directly.' },
      { h3: 'Irish school year', p: 'Junior Cycle, Transition Year and senior cycle, with mid-terms and exam weeks built into the plan.' },
      { h3: 'When we teach', p: 'Afternoons, evenings and weekend mornings. Our teaching team sits several hours ahead of Irish time, which is what keeps those hours staffed.' }
    ],
    spec: { title: 'For the west of the county', p: 'Achill, Belmullet, Louisburgh and Killala are a long way from anywhere with an after-school computing option, and Keel-Dooagh has an average age of 53, which tells you something about how few teenagers are within reach of each other out there. An online group gathers learners who would otherwise never be in a room together, and it does it at a fixed hour on a Tuesday.' }
  },

  fees: {
    h2: 'Fees in Mayo',
    intro: 'Three figures, with the conditions written down rather than implied.',
    first: 'A complete first lesson at no charge, which also proves the connection.',
    group: 'A month of group classes, around eight lessons, five to ten learners at one level.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'We charge monthly in US dollars, the one rate used outside India, so Belmullet pays what Castlebar pays and there is no second price list. Nothing is taken until a course and a weekly hour are agreed. The pricing page covers pauses, missed lessons and moving between group and one to one.'
  },

  reviewsH2: 'Six Google reviews written by our families, printed unedited',

  book: {
    h2: 'Book a free lesson',
    intro: 'Tell us the age and what the learner likes. The first hour is built around that, whether it is a Scratch game that tracks a score and a percentage at once, or a census table that appears to contradict itself.',
    success: 'Thank you. Somebody will be in touch about your County Mayo class shortly.'
  },

  faq: {
    h2: 'County Mayo coding class questions',
    intro: 'What Mayo families ask us before starting.',
    items: [
      { q: 'How many people live in County Mayo?', a: 'The 2022 census counted 137,970, an increase of 7,463 since 2016, including 26,362 children aged 15 and under.' },
      { q: 'What is the Mayo data project?', a: 'Students take four Mayo measurements apart into counts and rates, including a Gaeltacht that gained 129 residents while its number of Irish speakers fell by 3 per cent, and write one unambiguous sentence for each.' },
      { q: 'How big are Castlebar, Ballina and Westport?', a: 'Castlebar held 13,054 people in 2022, Ballina 10,556 and Westport 6,872. The electoral areas of the same names are much larger, at 32,080, 25,858 and 19,947.' },
      { q: 'Do you teach children from the Mayo Gaeltacht?', a: 'Yes. Of the 10,515 people living there, 5,956 can speak Irish. We teach in English and every programming language uses English keywords, so nobody starts at a disadvantage.' },
      { q: 'Which Mayo school first offered Leaving Certificate Computer Science?', a: 'Rice College, published on the January 2018 list at Castlebar Road, Westport. Castlebar Road is a street in Westport, not the town of Castlebar.' },
      { q: 'Is broadband good enough in Mayo?', a: 'No county figure is published. For the West region as a whole, covering Galway, Mayo and Roscommon, 92% of households have an internet connection and 83% have fixed broadband. The free lesson tests your own line, which is the only test that counts.' },
      { q: 'When do classes run?', a: 'Afternoons, evenings and weekend mornings, at an hour fixed during the free lesson. Our teaching team works several hours ahead of Irish time.' },
      { q: 'Is there a Modern Age Coders classroom in County Mayo?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Mayo coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Across Connacht',
    html: 'Mayo\'s neighbours with their own pages are <a class="cg-inline-link" href="/coding-classes-in-county-galway">County Galway</a> and the city of <a class="cg-inline-link" href="/best-coding-class-in-galway">Galway</a> to the south. For a comparison of online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and every page in the cluster is listed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Mayo and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-galway', label: 'County Galway' },
    { href: '/best-coding-class-in-galway', label: 'Galway city' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-myo .cg-hero-grid { align-items: start; gap: clamp(1.11rem, 3.31vw, 2.77rem); }
.cg-root.cg-myo .cg-hero h1 { font-weight: 700; letter-spacing: -0.0181em; line-height: 1.069; }
.cg-root.cg-myo .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.24rem; }
.cg-root.cg-myo .cg-eyebrow { letter-spacing: 0.166em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-myo .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0137em; }
.cg-root.cg-myo .cg-grid-3 { gap: clamp(1.06rem, 2.52vw, 2.01rem); }
.cg-root.cg-myo .cg-table caption { letter-spacing: 0.031em; font-weight: 700; }
.cg-root.cg-myo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-myo .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-myo .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-myo .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'County Mayo, whose council area is the county, Census 2022 (CSO Mayo releases): population 137,970, up 7,463 (6 percent) since 2016; average age 41.6 against 40.2 in 2016 and a national 38.8; 26,362 children aged 15 and under, of whom 8,637 (33 percent) were in childcare, the same share as nationally. Birthplace: 89,416 people (66 percent) born in the county, 20,964 (15 percent) elsewhere in the State and 25,307 (19 percent) outside the State, up from 17 percent in 2016. Towns: Castlebar 13,054 at 1,575.8 per sq km over 8.3 sq km, average age 39.3 with 19.1 percent under 15; Ballina 10,556 at 1,290.8 over 8.2 sq km, average age 39.5 with 21.2 percent under 15; Westport 6,872 at 723.4 over 9.5 sq km, average age 41.5 with 18.5 percent under 15. Local electoral areas: Castlebar 32,080, Ballina 25,858, Westport 19,947. Among places of at least 500 people, Ballyhaunis is youngest at average age 35.1 and Keel-Dooagh oldest at 53. Citizenship: non-Irish citizens 10 percent of the county, with UK citizens the largest group at 3,898, followed by Polish 2,131, Lithuanian 819 and Indian 562, unlike the midland counties where Polish citizens lead; dual Irish citizens up from 2,462 in 2016 to 4,557. Work: more than 111,600 people aged 15 and over, of whom more than 58,300 were at work, an increase of 13 percent from more than 51,400 in 2016; labour force participation 57 percent against 61 percent nationally, "the joint lowest rate in the country", with male participation also joint lowest nationally alongside Donegal; 13,894 people working from home at least one day a week, 24 percent of the workforce against 32 percent nationally; average journey time 25.1 minutes against 23.3 in 2016. Education and Irish: third level qualifications up from almost 29,300 in 2016 to just over 37,000, which is 39 percent of those aged 15 and over, up from 33 percent, and below the national 45 percent; county-wide, 56,346 people aged three and over could speak Irish, up by just over 1,200, which is 44.3 percent of that group against 44.7 percent in 2016. GAELTACHT, a defined sub-county area kept separate from county figures: population up from almost 10,400 to 10,515, an increase of 129 people, which the CSO calls the lowest rate of increase in Gaeltacht areas, including 10,196 people aged three and over of whom 5,956 could speak Irish, while the number able to speak Irish in the Mayo Gaeltacht fell by 3 percent between 2016 and 2022. Sites: Rice College, published by gov.ie on 4 January 2018 at "Castlebar Road, Westport, Co. Mayo", Mayo\'s only entry on the first-phase Leaving Certificate Computer Science list, where Castlebar Road is a street in Westport rather than the town of Castlebar; ATU Mayo, Westport Road, Castlebar, F23 X853, described by the university as a campus of approximately 1,000 students, occupied since 1994 and the first institute of technology campus in Ireland awarded Green Campus status, in 2011.',
    localProject: 'Counts and rates move independently, and both can be true. Four Mayo measurements are taken apart. One, the Gaeltacht: population up 129 people to 10,515 while the number of Irish speakers within it fell 3 percent. Two, the county: Irish speakers up by just over 1,200 to 56,346 while their share fell from 44.7 to 44.3 percent, which is arithmetically possible because the county itself grew by 7,463. Three, employment: up 13 percent to more than 58,300 at work, while labour force participation at 57 percent against 61 percent nationally was the joint lowest in the country, partly because Mayo\'s average age of 41.6 puts more people outside the labour force by definition. Four, the contrast case: third level qualifications rose on both measures at once, from almost 29,300 to just over 37,000 and from 33 percent to 39 percent, which stops learners concluding that every statistic is a trick. A fifth kind of claim is introduced as a footnote, the rank: the CSO calls the Gaeltacht\'s 129-person growth the lowest rate of increase in Gaeltacht areas, and learners write down what they would need to check before repeating a ranking. Output: for each headline, what is counted, what it is divided by, which part moved, and one sentence a reader could not misread.',
    requiredMentions: [
      '137,970',
      '13,054',
      '10,556',
      '6,872',
      '26,362',
      '56,346',
      '10,515',
      '5,956',
      'F23 X853',
      '32,080',
      '4,557',
      '89,416'
    ],
    sources: [
      { claim: 'CSO Mayo summary press statement, 30 May 2023: "the population of Mayo grew by 6% to 137,970, which means the number of people in the county rose by 7,463 between April 2016 and April 2022"; average age 41.6 against 40.2, with a national 38.8; "There were 26,362 children aged 15 and under in Mayo in April 2022. Of these, 8,637 (33%) were in childcare"; "In Mayo, 13,894 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 24% of the workforce."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsmayo/' },
      { claim: 'CSO Profile 1 Mayo: "Castlebar was the largest town, with a population of 13,054 in April 2022"; Ballyhaunis the youngest town at average age 35.1 and Keel-Dooagh the oldest at 53; 66 percent (89,416) born in the county, 15 percent (20,964) elsewhere in the State and 19 percent (25,307) outside it.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementsmayo/' },
      { claim: 'CSO PxStat tables F1013 and F1015: Ballina 10,556 at 1,290.8 per sq km over 8.2 sq km, average age 39.5 with 21.2 percent under 15; Westport 6,872 at 723.4 over 9.5 sq km, average age 41.5 with 18.5 percent under 15; Castlebar at 1,575.8 over 8.3 sq km, average age 39.3 with 19.1 percent under 15. Table F1016: Castlebar LEA 32,080, Ballina LEA 25,858, Westport LEA 19,947.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Mayo: "In Mayo non-Irish citizens accounted for 10% of the county\'s population. Among the non-Irish residents, the largest group were UK citizens (3,898 people) followed by Polish citizens (2,131), Lithuanian (819) and Indian (562)"; dual Irish citizens up from 2,462 in 2016 to 4,557.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionmayo/' },
      { claim: 'CSO Profile 7 Mayo: "more than 58,300 people were at work. This was an increase of 13% (from the more than 51,400 people recorded as working in Census 2016)"; "The labour force participation rate was 57% in Mayo compared with 61% nationally. This was the joint lowest rate in the country"; male participation "the joint lowest nationally, along with Donegal"; "an average journey time of 25.1 minutes compared with 23.3 minutes in 2016".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingmayo/' },
      { claim: 'CSO Profile 8 Mayo: third level up from almost 29,300 to just over 37,000, 39 percent of those aged 15 and over, up from 33 percent and below the national 45 percent; "The population of the Gaeltacht in Mayo living within the Mayo county boundary increased from almost 10,400 to 10,515. This was an increase of 129 people (1%, the lowest rate of increase in Gaeltacht areas). This included 10,196 people aged three and over and of these 5,956 could speak Irish. The number of people who could speak Irish in the Mayo Gaeltacht fell by 3% between the censuses in 2016 and 2022"; and county-wide, "The number of people (aged three and over) who could speak Irish in Mayo increased by just over 1,200 to 56,346 in Census 2022. This was 44.3% of the county\'s population aged three and over, compared with 44.7% in Census 2016."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationmayo/' },
      { claim: 'Department of Education, 4 January 2018: Mayo\'s single entry on the first-phase Leaving Certificate Computer Science list is Rice College, address published as "Castlebar Road, Westport, Co. Mayo".', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Atlantic Technological University: "Located in Castlebar, ATU Mayo is a responsive and dynamic campus with a population of approximately 1,000 students"; occupied since 1994 and "the first Institute of Technology campus in Ireland to be awarded Green Campus status in 2011"; address "Westport Road, Castlebar, Co. Mayo, F23 X853, Ireland."', url: 'https://www.atu.ie/campus/mayo' },
      { claim: 'CSO Internet Coverage and Usage in Ireland 2023: the West region, comprising Galway, Mayo and Roscommon, at 92 percent of households with an internet connection and 83 percent on fixed broadband. No county-level figure is published.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-isshict/internetcoverageandusageinireland2023/householdinternetconnectivity/' },
      { claim: 'data.gov.ie: Mayo County Council has two dataset records, both licensed Creative Commons Attribution 4.0, whose only resources point at the council\'s own mapping host; three requests over two protocols on 16 September 2026 timed out with no response, so the data was unreachable and its contents are unknown.', url: 'https://data.gov.ie/organization/mayo-county-council' }
    ],
    rejectedClaims: [
      'Any description of what Mayo County Council\'s two datasets contain: the host did not answer, so an unreachable source is reported as unreachable rather than as empty.',
      'Any Mayo-specific broadband figure: the CSO publishes internet access no lower than the three-county West region, which is labelled as regional wherever it appears.',
      'Treating the Mayo Gaeltacht figures as county figures or the reverse: they measure different areas and are kept apart throughout.',
      'The Charlestown-Bellahy two-county straddle as a project: the County Louth and County Carlow pages own the cross-county filter trap.',
      'The Rice College address as a substring trap project: the County Longford page owns that, so it appears here as a single note.',
      'A county land area or population density figure for Mayo: no such row exists in the CSO tables checked.',
      'Any claim that a low participation rate reflects attitudes to work: the county\'s older age profile puts more people outside the labour force by definition.'
    ]
  }
};
