'use strict';
// Leinster (cg- province page, Ireland cluster, Phase 5). A province is not an
// administrative unit, so this page publishes only figures the CSO itself
// releases at province level, from the Census 2022 Small Area Population (SAP)
// province tables, plus an index of our twelve Leinster county and Dublin pages.
// Spine: the national figure is not the average of the provinces. Measured in
// SAP2022T11T4PROV: the share of working people who work from home is 27.6% in
// Connacht, 35.5% in Leinster, 28.9% in Munster and 21.9% in Ulster (part of),
// whose plain average is 28.5%, yet the national share is 32.1%, because
// Leinster holds 57.0% of all working people. All shares are our arithmetic on
// published counts, and the four provinces were checked to sum exactly to the
// State. A second instance on broadband, SAP2022T15T2PROV: plain average 77.7%,
// national 79.4%. Kill gate passed: well over eight province-level CSO figures.
// Every table was read on 17 September 2026. Spent traps avoided: the
// non-response ranking flip is the Munster page's, speaker frequency Connacht's,
// and percentage points against per cent Ulster's.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'province', tag: 'LEINSTER', blurb: 'Dublin and eleven more counties, with a project on why the national figure is not the average of the provinces.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-and-ai-classes-in-leinster',
  code: 'lns',
  accent: '#3D4F8A',
  accentRationale: 'Leinster: an eastern blue from the solver, darker than the blues used on individual Leinster county pages so the province reads as a parent',
  pageType: 'governorate',
  place: {
    name: 'Leinster',
    eyebrow: 'Leinster, the eastern province',
    schemaType: 'Place',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Leinster, Ireland',
  title: 'Coding and AI Classes in Leinster | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Leinster, from Dublin, Kildare and Meath to Louth, Wexford and the midlands, for ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and AI classes across Leinster, with a project on why a national figure is not the plain average of the four provinces that make it up.',
  twitterDescription: 'Coding and AI classes across Leinster, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '17 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Leinster',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the twelve counties of Leinster, taught live in English.'
  },

  h1: 'Coding and AI classes in Leinster',
  capsuleQ: 'What are the best coding and AI classes in Leinster?',
  capsule: 'Leinster is the most populous of Ireland\'s four provinces: 2,835,980 of the State\'s residents lived in its twelve counties at the 2022 census, in 1,004,936 households. It holds Dublin and its three neighbouring councils, the commuter counties around them and the midlands to the west. We have a separate page for every Leinster county, linked below. Every class we run is live and weekly, placed by ability in groups of five to ten or taught one to one, for learners from six to sixty-seven; the opening lesson is free and afterwards a group place is USD 100 a month and a private one USD 150.',
  lead: 'Here is a sum that looks right and is not. The census counts how many working people in each province work from home at least some of the time. Connacht comes to 27.6%, Leinster 35.5%, Munster 28.9% and Ulster, meaning the three Ulster counties in this State, 21.9%. Add the four and divide by four and you get 28.5%. The national figure is 32.1%. Nothing is wrong with the census. The plain average treats each province as equal, and they are not: Leinster alone holds 57.0% of all the working people in the country, so the national figure is mostly Leinster\'s. Averaging averages without their weights is one of the commonest errors in anything built from grouped numbers, school results and sales regions included.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Leinster.',

  picks: {
    eyebrow: 'Course picks across Leinster',
    h2: 'Four starting points for the province',
    intro: 'Choose by age and what the learner wants to build. Each course begins with a free lesson from the teacher who would take it, and booking asks for no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where some groups are bigger than others, and a fair total has to account for it.' },
      { course: 'maths-through-coding', band: 'Ages 9 to 13', note: 'Averages, weights and proportions, learned by writing the programs that calculate them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real province tables, and the difference between a plain average and a weighted one.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who roll up regional or team figures and need the total to be right.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The national figure is mostly Leinster',
      intro: 'Census 2022 counts of working people who work from home, by province, and two ways of turning them into one number.',
      body: [
        { kind: 'table', caption: 'Working from home at least some of the time, Census 2022, table SAP2022T11T4PROV', head: ['Province', 'Working people', 'Working from home', 'Share, our arithmetic'], rows: [
          ['Connacht', '255,297', '70,500', '27.6%'],
          ['Leinster', '1,308,124', '463,956', '35.5%'],
          ['Munster', '600,129', '173,175', '28.9%'],
          ['Ulster (part of)', '130,188', '28,479', '21.9%'],
          ['Plain average of the four shares', '', '', '28.5%, which is wrong'],
          ['The State, from the published total', '2,293,738', '736,110', '32.1%, which is right']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the two numbers differ', p: 'A plain average gives Ulster, with 130,188 working people, the same say as Leinster, with 1,308,124. The correct figure lets each province count in proportion to its size, and Leinster is ten times the size of Ulster by this measure.' },
          { h3: 'The check that proves it', p: 'Add the four provinces\' counts and you get exactly the State\'s published totals, 736,110 home workers out of 2,293,738. Divide those, not the percentages, and 32.1% falls out.' },
          { h3: 'What a learner writes', p: 'Two lines of code, one averaging the shares and one dividing the summed counts, and a sentence explaining why the second is the national figure and the first describes nothing real.' }
        ] },
        { kind: 'callout', h3: 'Where the same mistake turns up', p: 'A school averages the average marks of five classes of different sizes and reports it as the school average. A company averages the growth rates of a huge region and a tiny one. A league table averages county rates to rank a province. Each time the result is a number that belongs to no actual group of people. The fix is always the same, and it is simple once seen: go back to the counts, add them, and divide once. A teenager who has watched 28.5% turn into 32.1% on real census data does not forget it.' },
        { kind: 'p', text: 'It happens again on household broadband, from table SAP2022T15T2PROV. By our arithmetic 75.7% of households in Connacht, 82.0% in Leinster, 76.3% in Munster and 76.6% in Ulster (part of) had broadband, a plain average of 77.7%, while the national share is 79.4%. Leinster holds 1,004,936 of the State\'s 1,836,728 households, 54.7%, and pulls the total towards its own figure. Every percentage on this page is our own arithmetic on counts the statistics office publishes, and every count is quoted as published.' }
      ]
    },
    {
      id: 'counties', tint: 'tint', eyebrow: 'The counties of Leinster',
      h2: 'Twelve counties, a page for each',
      intro: 'Dublin has four local authorities and four pages; every other Leinster county has its own.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Dublin', p: 'The city at <a class="cg-inline-link" href="/best-coding-class-in-dublin">coding classes in Dublin</a>, and its councils at <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a>, <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> and <a class="cg-inline-link" href="/coding-classes-in-south-dublin">South Dublin</a>.' },
          { h3: 'Around Dublin', p: '<a class="cg-inline-link" href="/coding-classes-in-county-kildare">Kildare</a>, <a class="cg-inline-link" href="/coding-classes-in-county-meath">Meath</a>, <a class="cg-inline-link" href="/coding-classes-in-county-wicklow">Wicklow</a> and <a class="cg-inline-link" href="/coding-classes-in-county-louth">Louth</a>, where most of the commuting population lives.' },
          { h3: 'South east and midlands', p: '<a class="cg-inline-link" href="/coding-classes-in-county-wexford">Wexford</a>, <a class="cg-inline-link" href="/coding-classes-in-county-carlow">Carlow</a>, <a class="cg-inline-link" href="/coding-classes-in-county-kilkenny">Kilkenny</a>, <a class="cg-inline-link" href="/coding-classes-in-county-laois">Laois</a>, <a class="cg-inline-link" href="/coding-classes-in-county-offaly">Offaly</a>, <a class="cg-inline-link" href="/coding-classes-in-county-westmeath">Westmeath</a> and <a class="cg-inline-link" href="/coding-classes-in-county-longford">Longford</a>.' }
        ] },
        { kind: 'p', text: 'Each county page carries that county\'s own census figures, schools, towns and a data project of its own, so nothing on those pages is repeated here. This page sticks to what the statistics office publishes for Leinster as a whole, which is what a province page can honestly add.' }
      ]
    },
    {
      id: 'province', tint: '', eyebrow: 'Leinster in the census',
      h2: 'What the census publishes for the province',
      intro: 'Province totals from the Census 2022 small area population tables. Shares are our arithmetic.',
      body: [
        { kind: 'table', caption: 'Leinster against the State, Census 2022', head: ['Measure', 'Leinster', 'The State'], rows: [
          ['Usually resident population', '2,835,980', '5,084,879'],
          ['Households', '1,004,936', '1,836,728'],
          ['Households with broadband', '824,314', '1,457,883'],
          ['Aged 3 and over and able to speak Irish', '972,096 of 2,772,744, about 35%', '1,873,997, about 38%'],
          ['Travelling an hour or more to work, school or college', '185,656', '276,264'],
          ['Born in Ireland', '2,228,758, about 79%', '4,067,442, about 80%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The longest journeys', p: 'Of people in Leinster who stated a journey time, about 11.6% travel an hour or more to work, school or college, the highest share of the four provinces by our arithmetic, and only about 28.9% get there in under fifteen minutes.' },
          { h3: 'Irish in the east', p: 'About 35% of Leinster residents aged three and over say they can speak Irish, the lowest share of the four provinces by our arithmetic, though the largest number, 972,096 people.' },
          { h3: 'Born elsewhere', p: 'Of Leinster\'s residents, 132,195 were born in the United Kingdom, 57,504 in Poland and 39,245 in India, according to the census birthplace table for the province.' }
        ] },
        { kind: 'spec', title: 'What the long commute means for a family', p: 'An hour or more each way to work, school or college is a normal day for 185,656 people in this province. Evenings in those households are short, and a class that needs a second journey across the commuter belt competes with the only free hour the family has. A class that begins at the kitchen table does not.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting fairly to weighting properly',
    intro: 'Age bands are a guide; the first lesson places each learner.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Big groups and small ones', p: 'Programs that total scores from teams of different sizes and notice when a total is unfair.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Average of averages', p: 'Seeing, with real numbers, why averaging percentages goes wrong when groups differ in size.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Weighted results in code', p: 'Rolling grouped data up to a total correctly, and proving it against a published figure.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Roll-ups at work', p: 'Combining team, branch or regional results into one number that means something.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask a tool to combine four percentages and it will average them',
    intro: 'That is what combining four numbers sounds like, and here it gives the wrong answer.',
    p1: 'Hand over the four province shares and ask for the national figure. The simplest reading of the request is a plain average, and 28.5% will come back looking perfectly reasonable. It is not a malfunction. The percentages on their own do not carry the information needed to combine them, and nothing in the question supplied it.',
    p2: 'The learner who has done this project asks for the counts behind any percentage before combining it with another. That one habit fixes the error completely, and it is the kind of judgement that stays with a person rather than with a tool.',
    closer: 'Tools will do the arithmetic you ask for. Knowing which arithmetic the question needs is still the skill, and it is why building real understanding matters more in 2026, not less.',
    blogAnchor: 'is coding still a skill worth building in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons work anywhere in the province',
    intro: 'From Dundalk to Enniscorthy to Mullingar, the arrangement is identical.',
    cells: [
      { h3: 'Live every time', p: 'A teacher runs the whole lesson in real time and expects the learner to talk, try and get things wrong aloud.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at one ability level, drawn from across Leinster and further afield so the match is a real one.' },
      { h3: 'Two lessons most weeks', p: 'About eight a month, at a day and time fixed at the start and then kept.' },
      { h3: 'The Irish school year', p: 'Junior Cycle, Transition Year and the Leaving Certificate years, with mid-terms and exams planned around.' },
      { h3: 'At home', p: 'A laptop or desktop, working sound and a connection that carries video; the free lesson confirms all three.' },
      { h3: 'Private if better', p: 'Where no suitable group meets at a workable time, the same course is taught one to one.' }
    ],
    spec: { title: 'For the commuter belt in particular', p: 'In the counties around Dublin a school day often ends with a long drive for somebody. A weekly class that needs no extra journey is the one that lasts, and the learner meets others at exactly their level rather than whoever happens to live nearby.' }
  },

  fees: {
    h2: 'Fees across Leinster',
    intro: 'The same three figures in every county of the province.',
    first: 'A full first lesson, free, finishing with a level and a recommended course.',
    group: 'A month of group lessons, about eight, with five to ten learners at one level.',
    private: 'A month of one to one lessons at the same weekly pace.',
    closer: 'Billing is monthly in US dollars at the single rate we charge outside India, so Wicklow and Longford pay the same and there is no separate euro list. Nothing is charged until a course and a weekly time are agreed in the free lesson, and the pricing page covers pauses, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Six reviews families left for us on Google, as written',

  book: {
    h2: 'Book a free first lesson',
    intro: 'Tell us the learner\'s age and interests. The first hour is planned around that, whether it is a Scratch game about fair totals or real province data where the obvious average is wrong.',
    success: 'Thank you. Somebody will be in touch about your class in Leinster shortly.'
  },

  faq: {
    h2: 'Leinster coding class questions',
    intro: 'Questions families across the province ask first.',
    items: [
      { q: 'How many people live in Leinster?', a: 'The 2022 census province tables record 2,835,980 usually resident people in Leinster, in 1,004,936 households.' },
      { q: 'Which counties are in Leinster?', a: 'Carlow, Dublin, Kildare, Kilkenny, Laois, Longford, Louth, Meath, Offaly, Westmeath, Wexford and Wicklow. Each has its own page with us, and Dublin has four.' },
      { q: 'What is the Leinster data project?', a: 'Learners average the four provinces\' home-working shares and get 28.5%, then add the underlying counts and get the correct national figure of 32.1%, and explain why Leinster\'s size makes the difference.' },
      { q: 'Why is there a province page as well as county pages?', a: 'Because the statistics office publishes some figures for Leinster as a whole, and those figures teach something the county pages cannot. Local detail stays on the county pages.' },
      { q: 'Are Leinster commutes really the longest?', a: 'Among people who stated a journey time, about 11.6% in Leinster travel an hour or more, the highest share of the four provinces by our arithmetic on census counts.' },
      { q: 'Do lessons happen at times that suit Irish families?', a: 'Yes: after school, in the evening and on weekend mornings. Our teachers are based in India, four and a half hours ahead of Ireland in summer and five and a half in winter, and the exact slot is agreed in the free lesson.' },
      { q: 'Can I switch from a group to private lessons later?', a: 'Yes. The pricing page explains how switching works, and nothing changes without agreement first.' },
      { q: 'Is there a Modern Age Coders classroom in Leinster?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do Leinster coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The other provinces',
    html: 'Ireland\'s other provinces have pages too: <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-connacht">Connacht</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-ulster">the three Ulster counties in the State</a>. A side by side comparison of online coding schools is <a class="cg-inline-link" href="/best-online-coding-classes-ireland">here</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland page</a> gathers every city, county and course guide.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Leinster and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lns .cg-hero-grid { align-items: start; gap: clamp(1.17rem, 3.13vw, 2.62rem); }
.cg-root.cg-lns .cg-hero h1 { font-weight: 700; letter-spacing: -0.0201em; line-height: 1.058; }
.cg-root.cg-lns .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.12rem; }
.cg-root.cg-lns .cg-eyebrow { letter-spacing: 0.164em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lns .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0134em; }
.cg-root.cg-lns .cg-grid-3 { gap: clamp(1.06rem, 2.61vw, 2.07rem); }
.cg-root.cg-lns .cg-table caption { letter-spacing: 0.027em; font-weight: 700; }
.cg-root.cg-lns .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lns .cg-table tr:nth-last-child(2) td { font-style: normal; }
.cg-root.cg-lns .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.03rem; }
.cg-root.cg-lns .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Leinster, one of four provinces, which is not an administrative unit; figures are only those the CSO publishes at province level in the Census 2022 Small Area Population province tables, read on 17 September 2026. SAP2022T2T1PROV: usually resident population 2,835,980 in Leinster against 5,084,879 in the State; born in Ireland 2,228,758 (4,067,442 State); born in the United Kingdom 132,195; born in Poland 57,504; born in India 39,245. SAP2022T15T2PROV: households 1,004,936 in Leinster against 1,836,728 in the State; broadband 824,314 (1,457,883 State); province broadband shares by our arithmetic Connacht 75.7, Leinster 82.0, Munster 76.3, Ulster (part of) 76.6, State 79.4 percent. SAP2022T11T4PROV: all working persons and persons who work from home, Connacht 255,297 and 70,500, Leinster 1,308,124 and 463,956, Munster 600,129 and 173,175, Ulster (part of) 130,188 and 28,479, State 2,293,738 and 736,110; the four provinces sum exactly to the State totals. SAP2022T3T1PROV: aged 3 and over able to speak Irish, Leinster 972,096 of 2,772,744, State 1,873,997 of 4,975,713. SAP2022T11T3PROV: journey time to work, school or college, aged 5 and over, Leinster one hour to under an hour and a half 134,348 and an hour and a half or more 51,308, together 185,656, with 203,248 not stated of 1,798,477, and under fifteen minutes 461,473; State one hour or more 276,264. The CSO labels the northern province "Ulster (part of)", covering only the three Ulster counties in the State. Leinster counties, each with its own page: Carlow, Dublin (Dublin city, Dún Laoghaire-Rathdown, Fingal, South Dublin), Kildare, Kilkenny, Laois, Longford, Louth, Meath, Offaly, Westmeath, Wexford and Wicklow.',
    localProject: 'The national figure is not the plain average of the provinces. Using SAP2022T11T4PROV, the share of working persons who work from home is, by our arithmetic, 27.6 percent in Connacht (70,500 of 255,297), 35.5 percent in Leinster (463,956 of 1,308,124), 28.9 percent in Munster (173,175 of 600,129) and 21.9 percent in Ulster (part of) (28,479 of 130,188). The plain average of those four shares is 28.5 percent, but the national share from the published State totals, 736,110 of 2,293,738, is 32.1 percent, a gap of 3.6 percentage points, because Leinster holds 57.0 percent of all working persons and a plain average gives each province equal say. The four provinces\' counts sum exactly to the State totals, which is the check that proves the correct method: sum the counts, then divide once. A second instance on SAP2022T15T2PROV household broadband: plain average of province shares 77.7 percent against a national 79.4 percent, with Leinster holding 1,004,936 of 1,836,728 households, 54.7 percent. Output: two lines of code, one averaging shares and one dividing summed counts, and a sentence explaining why only the second describes a real group of people. Non-response is included in the denominators here as published totals; the effect of excluding it is the Munster page\'s lesson and is not used.',
    requiredMentions: [
      '2,835,980',
      '1,004,936',
      '463,956',
      '1,308,124',
      '824,314',
      '972,096',
      '2,772,744',
      '185,656',
      '2,228,758',
      '132,195',
      '57,504',
      '39,245'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T4PROV, population aged 15 years and over by working from home, by province: all working persons and persons who work from home for Connacht 255,297 and 70,500, Leinster 1,308,124 and 463,956, Munster 600,129 and 173,175, Ulster (part of) 130,188 and 28,479, and Ireland 2,293,738 and 736,110.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T15T2PROV, households with internet access by province: Leinster 1,004,936 households of which 824,314 broadband; Connacht 217,015 and 164,270; Munster 501,571 and 382,555; Ulster (part of) 113,206 and 86,744; Ireland 1,836,728 and 1,457,883.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T2T1PROV, usually resident population by birthplace, by province: Leinster total 2,835,980, born Ireland 2,228,758, United Kingdom 132,195, Poland 57,504, India 39,245; Ireland total 5,084,879, born Ireland 4,067,442.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T3T1PROV, population aged 3 years and over by ability to speak Irish, by province: Leinster 972,096 able to speak Irish of 2,772,744; Ireland 1,873,997 of 4,975,713.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T3T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T3PROV, population aged 5 years and over by journey time to work, school or college, by province: Leinster 1 hour to under 1.5 hours 134,348, 1.5 hours and over 51,308, under 15 minutes 461,473, not stated 203,248, total 1,798,477; Ireland 1 hour or more 276,264.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T3PROV/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat catalogue: the Census 2022 province dimension is labelled Connacht, Leinster, Munster, Ulster (part of) and Ireland, with Ulster (part of) covering only the Ulster counties in the State.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadCollection' }
    ],
    rejectedClaims: [
      'Any Leinster figure built by summing county figures ourselves: every province figure is quoted from a CSO province table.',
      'Any claim that the plain average of province shares is a valid national figure: it is shown only as the error.',
      'The effect of excluding non-response on province rankings: that is the Munster page\'s project.',
      'Irish-speaking frequency as a project: that is the Connacht page\'s project.',
      'Percentage points against per cent as a project: that is the Ulster page\'s project.',
      'Any Northern Ireland figure: the province tables used cover the State only.',
      'Any county-level detail repeated from the Leinster county pages: those pages carry it, and this page links to them.'
    ]
  }
};
