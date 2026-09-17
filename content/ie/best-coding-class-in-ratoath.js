'use strict';
// Ratoath (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Ratoath, Co Meath", read 18 September 2026, Ratoath
// College's own contact page and Fairyhouse Racecourse's own site. Spine:
// households are not people. 2,739 of the town's 3,041 households report
// broadband, which is 90.1% of households and says nothing directly about the
// share of the 10,041 residents with a connection at home, because the town
// holds 3.30 people per household by our division against 2.72 across all towns
// combined, and the town tables do not publish internet access crossed by
// household size. Every other table on the page is labelled with the unit it
// counts. New to the cluster: the unit of analysis. Meath owns the Ashbourne
// municipal district citation, so the council is not quoted again here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'RATOATH', blurb: 'Nine in ten houses here have broadband. How many people that covers is a different question, and the tables do not answer it.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-ratoath',
  code: 'rto',
  accent: '#524A7A',
  accentRationale: 'Ratoath: a deep iris from the solver, set apart from the Meath county indigo and the Ashbourne green next door',
  pageType: 'city',
  place: {
    name: 'Ratoath',
    eyebrow: 'Ratoath, County Meath',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Meath' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-meath', name: 'County Meath' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Meath', href: '/coding-classes-in-county-meath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ratoath, County Meath, Ireland',
  title: 'Best Coding Class in Ratoath | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Ratoath learners aged 6 to 67, taught live by a real teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Ratoath, with a project on why a percentage of households is not a percentage of people.',
  twitterDescription: 'Coding and AI classes for Ratoath, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Ratoath',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Ratoath, County Meath, taught live in English.'
  },

  h1: 'Coding classes in Ratoath',
  capsuleQ: 'What is the best coding class in Ratoath?',
  capsule: 'Ratoath holds 10,041 usual residents across 3,041 households in the Census 2022 town tables, and 2,739 of those households report a broadband connection. We teach into those houses: two live lessons in most weeks, taught by a teacher who is present throughout, either with five to ten learners at one level or with a single learner, for ages six to sixty-seven. The opening lesson is free, then a group place is USD 100 a month and private teaching is USD 150.',
  lead: 'Ninety per cent of Ratoath households have broadband. It is a real figure, 2,739 of 3,041 by our division, and it is a statement about houses rather than about people. Ratoath runs 3.30 residents per household, against 2.72 across all towns combined, so the same household percentage covers a different number of people here than it would in a town of smaller households. Turning one into the other would need internet access crossed with household size, which the town tables do not publish. Once a learner notices that, they start checking what every figure counts before comparing any two, and this page is built around that habit using the town\'s own published tables.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Ratoath.',

  picks: {
    eyebrow: 'Course picks for Ratoath',
    h2: 'Where Ratoath learners start',
    intro: 'Pick on age and interest; the free lesson with the course teacher settles the level and the pace.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with things to count, where what is being counted has to be decided first.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from scratch, with data that mixes people, groups and totals.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real tables in Python, and the discipline of never dividing two figures that count different things.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults whose reports mix accounts, users and devices and need them separated.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Households are not people',
      intro: 'Six Census 2022 tables for Ratoath, each labelled with the thing one row of it counts. Counts are published; the division at the end is ours.',
      body: [
        { kind: 'table', caption: 'What each Ratoath table actually counts', head: ['Table', 'One row counts', 'Ratoath total'], rows: [
          ['Internet access', 'A household', '3,041'],
          ['Usual residents by birthplace', 'A person of any age', '10,041'],
          ['Means of travel to work', 'A working resident aged 15 or over', '4,968'],
          ['Means of travel to school, college or childcare', 'A resident making that journey', '3,453'],
          ['Children in childcare', 'A child under fifteen', '792'],
          ['Highest education completed', 'A resident aged 15 or over in that table', '5,908']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the broadband figure says', p: '2,739 of 3,041 households reported a broadband connection, 90.1% of households by our arithmetic. It does not say 90.1% of residents live with broadband, and nothing in the town tables lets that be worked out.' },
          { h3: 'Why the gap matters here', p: 'Dividing 10,041 residents by 3,041 households gives 3.30 people per household, against 2.72 across all towns combined. Ratoath households hold more people than the average town household, so a share of houses and a share of people pull further apart than usual.' },
          { h3: 'The table that would settle it', p: 'Internet access crossed by the number of people in the household. The census collects household size and it collects connection type, and the published town tables do not cross them, so the honest answer is that we cannot say.' }
        ] },
        { kind: 'callout', h3: 'The unit of analysis, quietly swapped', p: 'Accounts reported as users. Devices reported as people. Tickets reported as customers. Households reported as voters. Sessions reported as visitors. In every case the numerator and the denominator count different objects, the ratio still calculates, and the sentence built on it sounds fine. The habit that stops it costs nothing: write the unit beside every figure, in the code and in the report, and refuse to divide two numbers whose units do not match without saying what the result now means.',
        },
        { kind: 'p', text: 'The project asks for a small program with an unusual rule. Each figure is loaded with its unit attached, as a household count, a person count or a child count. Any division between two different units raises an error rather than returning a number, unless the learner has written a line explaining what the result would mean. Then they compute the two figures this page does stand behind: 90.1% of households with broadband, and 3.30 people per household, both stated with their units, and both labelled as our division of published counts.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Ratoath in the town tables',
      h2: 'A town of full houses',
      intro: 'Published for the built-up area Ratoath, Co Meath, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Ratoath, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '10,041'],
          ['Households', '3,041'],
          ['Households with a broadband connection', '2,739'],
          ['Residents born in Ireland', '8,431'],
          ['Working residents in the travel table', '4,968'],
          ['Children under fifteen in childcare', '792']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How working residents travel', p: 'Of 4,968 working residents, 3,138 drive, 634 give home as their main answer, 330 take a bus, 241 travel by van, 157 go as a car passenger, 132 walk, 43 take a train and 13 cycle.' },
          { h3: 'Home working', p: 'Asked directly rather than about a journey, 1,977 working residents do at least some of their work at home, which is 39.8% of that group by our arithmetic.' },
          { h3: 'Households without', p: '66 households reported no internet access at all, 31 reported a connection that is not broadband, and 205 did not state. Those three are different answers and the page keeps them apart.' }
        ] },
        { kind: 'spec', title: 'The secondary school', p: 'Ratoath College gives its address as Jamestown, Ratoath, Co. Meath, A85 TW84, and names Louth and Meath Education and Training Board as the body behind it, with registered charity number CHY 20927. We have no connection with the college, and our lessons run outside the school day.' }
      ]
    },
    {
      id: 'journeys', tint: 'tint', eyebrow: 'Two columns, two populations',
      h2: 'The work journey and the school journey',
      intro: 'The travel table publishes these as separate groups, 4,968 working residents and 3,453 travelling to school, college or childcare. They are kept in separate columns here for that reason.',
      body: [
        { kind: 'table', caption: 'Main means of travel, Ratoath residents', head: ['Mode', 'To work', 'To school, college or childcare'], rows: [
          ['Car driver', '3,138', '133'],
          ['Car passenger', '157', '1,006'],
          ['On foot', '132', '1,522'],
          ['Bus, minibus or coach', '330', '442'],
          ['Bicycle', '13', '154'],
          ['Train, DART or Luas', '43', '15'],
          ['Work mainly at or from home', '634', '12'],
          ['Motorcycle or scooter', '16', '0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Walking belongs to one column', p: '1,522 of the 3,453 education and childcare journeys are made on foot, against 132 of the 4,968 work journeys. Adding the two would produce a figure describing nobody in particular, so the page does not.' },
          { h3: 'A published zero', p: 'No Ratoath resident gave motorcycle or scooter as the main means of getting to school, college or childcare, and the table prints that as 0. A counted zero and a missing answer are different things: 164 education journeys and 258 work journeys were not stated.' },
          { h3: 'Still per person, not per journey', p: 'Each row counts people by their main means, so somebody who cycles in summer and takes the bus in winter appears once. These are not counts of journeys made.' }
        ] },
        { kind: 'spec', title: 'The racecourse', p: 'Fairyhouse Racecourse publishes its address as Ratoath, Co. Meath, on its own site. It is named here because it is the best known institution carrying the town\'s address; we have no connection with it and reproduce none of its prices.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Ratoath',
      h2: 'How the teaching works',
      intro: 'One agreed hour in the week, a teacher who is present, and a level that matches the learner.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary years', p: 'Block coding and first projects, taught at an hour that suits a younger child rather than late in the evening.' },
          { h3: 'Secondary years', p: 'Python, working websites and AI projects, from first year through to the exam years.' },
          { h3: 'Adults', p: 'Data, Python and AI for adults at any level, including the 1,977 residents who already work at home part of the week.' }
        ] },
        { kind: 'p', text: 'Ratoath College and Fairyhouse Racecourse are named from their own published pages and neither has any link with us. Census counts here are Central Statistics Office Census 2022 figures for the built-up area, reproduced as published. Two figures on this page are ours rather than the CSO\'s, the 90.1% of households with broadband and the 3.30 people per household, and both are marked as our division wherever they appear, because the point of the page is that a figure without its unit is not yet a fact.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting things to counting the right things',
    intro: 'Ages guide the choice; the free lesson confirms the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What are we counting', p: 'Counting and grouping in block code, deciding the unit before the tally starts.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Per what', p: 'Division with meaning: per person, per house, per hour, and checking the answer makes sense.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Units in code', p: 'Loading real tables, labelling each column, and refusing comparisons that do not hold.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Metrics at work', p: 'Building measures where accounts, users and devices stay distinguishable from each other.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask what share of Ratoath has broadband',
    intro: 'The answer will not mention households.',
    p1: 'Put the question to an assistant with this table attached and it will return ninety per cent, often phrased as people, sometimes as the town. The arithmetic is right and the unit has quietly changed on the way out. Ask it for the number of residents living with broadband and a plausible figure may appear, built by multiplying a household share by a population, which is a calculation nobody should accept.',
    p2: 'A learner who has done this project asks what each figure counts before it is used, and answers the second question with a refusal and a reason: the crossing needed does not exist in the published tables. It is a shorter answer and it is the one that holds.',
    closer: 'Models are fluent in numbers and indifferent to units. Supplying the units, and the judgement that goes with them, is still the human contribution.',
    blogAnchor: 'why it is still worth learning to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practical points for Ratoath families',
    intro: 'Six things, briefly.',
    cells: [
      { h3: 'A teacher, not a video', p: 'Every lesson is taught as it happens, with the teacher responding to the learner\'s own screen.' },
      { h3: 'Sorted by level', p: 'Groups of five to ten at the same stage, drawn from across Ireland and beyond rather than from one town.' },
      { h3: 'The same hour weekly', p: 'Two lessons in most weeks, about eight a month, at a time chosen at the start.' },
      { h3: 'Holidays accounted for', p: 'Mid-terms, breaks and exam weeks are built into the plan rather than patched over afterwards.' },
      { h3: 'Equipment', p: 'A computer with a keyboard, sound that works, and a household connection steady enough for video.' },
      { h3: 'Private teaching', p: 'Where no suitable group sits at a workable hour, the same course runs one to one.' }
    ],
    spec: { title: 'No seat in a car needed', p: 'Ratoath sends 3,138 residents out by car to work and 1,006 young people to school as passengers. This is the lesson that happens where the learner already lives.' }
  },

  fees: {
    h2: 'Ratoath class fees',
    intro: 'Three lines and no extras.',
    first: 'A full opening lesson, taught and assessed, charged at nothing.',
    group: 'One month in an ability group of five to ten, about eight live lessons.',
    private: 'One month of private lessons on the same weekly pattern.',
    closer: 'Everything is billed monthly in US dollars, at the one rate that covers families outside India, so the figure a Ratoath household sees is the figure a household in Ashbourne or Bray sees, with no euro column anywhere. The first charge waits until a course and an hour have been agreed in the opening lesson, and the pricing page deals with breaks, missed weeks and moving between a group and private teaching.'
  },

  reviewsH2: 'Six of our families, as they put it on Google',

  book: {
    h2: 'Book a free Ratoath lesson',
    intro: 'Send an age and an interest and the first hour is planned around it, whether that is a game, a first Python program or a table whose units need sorting out before anything can be said about it.',
    success: 'Thank you. We will be in touch about the Ratoath lesson shortly.'
  },

  faq: {
    h2: 'Ratoath coding class questions',
    intro: 'What Ratoath households ask us first.',
    items: [
      { q: 'How many people live in Ratoath?', a: 'The Census 2022 small area tables count 10,041 usual residents in the built-up area of Ratoath, living in 3,041 households. Our Meath page uses the census town list, which counts town populations on a slightly different basis.' },
      { q: 'What is the Ratoath data project?', a: 'Learners label six of the town\'s census tables with the thing each one counts, a household, a person, a child, then show why the 90.1% of households with broadband cannot be restated as a share of residents, and compute the 3.30 people per household that makes the gap wider here than in most towns.' },
      { q: 'Why does the difference between households and people matter?', a: 'Because the two are divided by different denominators. A share of households says nothing directly about how many residents that covers, and in a town with larger households the same percentage reaches more people than it would elsewhere.' },
      { q: 'How do Ratoath residents get to work?', a: 'Of the 4,968 working residents in the travel table, 3,138 drive, 634 give working mainly at or from home, 330 take a bus, 241 use a van, 157 travel as a car passenger, 132 walk, 43 take a train and 13 cycle.' },
      { q: 'What times can lessons be held?', a: 'Afternoons after school, evenings and weekend mornings. The teaching team is based in India, which is four and a half hours in front of Dublin during Irish summer time and five and a half hours in front of it in winter, and a suitable weekly hour is agreed at the free lesson.' },
      { q: 'Do you take adults in Ratoath?', a: 'Yes, to the age of sixty-seven and from no experience at all. After the free lesson an adult is placed with a group at the same level or taught privately.' },
      { q: 'Does a learner need their own computer?', a: 'They need access to one for the lesson, with a keyboard and working sound. A phone is not enough, and nothing needs to be bought before the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Ratoath?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Ratoath cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Ratoath',
    html: 'The nearest town page is <a class="cg-inline-link" href="/best-coding-class-in-ashbourne">Ashbourne</a>, with <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a> around it, <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> to the east and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> beyond. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> sets us beside other online schools, and every page is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ratoath, Meath and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-ashbourne', label: 'Ashbourne' },
    { href: '/coding-classes-in-county-meath', label: 'County Meath' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-rto .cg-hero-grid { align-items: start; gap: clamp(1.22rem, 3.11vw, 2.53rem); }
.cg-root.cg-rto .cg-hero h1 { font-weight: 700; letter-spacing: -0.0169em; line-height: 1.074; }
.cg-root.cg-rto .cg-capsule { border-bottom: 6px solid var(--cg-accent); padding-bottom: 1.14rem; }
.cg-root.cg-rto .cg-eyebrow { letter-spacing: 0.179em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rto .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0131em; }
.cg-root.cg-rto .cg-grid-3 { gap: clamp(1.18rem, 2.61vw, 2.16rem); }
.cg-root.cg-rto .cg-table caption { letter-spacing: 0.028em; font-weight: 700; }
.cg-root.cg-rto .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rto .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-rto .cg-ladder-col { border-right: 4px solid var(--cg-accent); padding-right: 1.05rem; }
.cg-root.cg-rto .cg-callout { border-left-width: 11px; }
`,

  dossier: {
    curriculumAuthority: 'Ratoath, the built-up area "Ratoath, Co Meath", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T15T2TOWN22: households 3,041, broadband 2,739, other 31, none 66, not stated 205. SAP2022T2T1TOWN22: usual residents 10,041, born in Ireland 8,431, rest of world 514, other EU 456, United Kingdom 438, Poland 136, India 66. SAP2022T11T1TOWN22 to work total 4,968: car driver 3,138, work mainly at or from home 634, bus 330, not stated 258, van 241, car passenger 157, on foot 132, train DART or Luas 43, motorcycle 16, bicycle 13, other including lorry 6; to school, college or childcare total 3,453: on foot 1,522, car passenger 1,006, bus 442, not stated 164, bicycle 154, car driver 133, train 15, work mainly at or from home 12, van 2, other 3, motorcycle or scooter 0. SAP2022T11T4TOWN22: 4,968 working persons, 1,977 work from home at least some of the time. SAP2022T11T5TOWN22: 792 children under 15 in childcare, 324 aged 0 to 4 and 468 aged 5 to 14. SAP2022T10T4TOWN22: total 5,908, honours bachelor or professional 937, postgraduate 778, upper secondary 1,186, technical or vocational 499, doctorate 45, not stated 279. Our division: 2,739 of 3,041 households is 90.1 percent; 10,041 residents over 3,041 households is 3.30 people per household; the all-towns rows of the same tables give 1,083,309 of 1,317,616 households on broadband, 82.2 percent, and 3,582,870 residents over 1,317,616 households, 2.72 people per household. Ratoath College: "Address: Jamestown, Ratoath, Co. Meath, A85 TW84, Ireland"; "LMETB\'s Registered Charity Number (RCN) is CHY 20927". Fairyhouse Racecourse: "Ratoath, Co. Meath" as its published address.',
    localProject: 'Households are not people. The Ratoath internet access table counts households: 3,041 of them, 2,739 with broadband, which is 90.1 percent of households by our division. It is not a share of residents, and the published town tables carry no crossing of internet access with household size that would allow one to be derived from the other. The gap matters more here than in most towns because Ratoath holds 3.30 people per household by our division of 10,041 residents by 3,041 households, against 2.72 across all towns combined. The page therefore labels six town tables with the object each row counts, a household, a person of any age, a working resident aged 15 or over, a resident making an education or childcare journey, a child under fifteen, and a resident in the education table, and the project is a program that carries the unit with every figure and raises an error rather than dividing two figures whose units differ. It also keeps the work and education travel columns separate, notes that the education column publishes a counted zero for motorcycle or scooter against 164 not stated, and repeats that the travel rows count people by main means and not journeys. New to the cluster: the unit of analysis.',
    requiredMentions: [
      '10,041',
      '3,041',
      '2,739',
      '4,968',
      '3,138',
      '3,453',
      '1,522',
      '1,006',
      '792',
      '1,977',
      '3.30',
      'A85 TW84'
    ],
    sources: [
      { claim: 'CSO Census 2022 tables SAP2022T15T2TOWN22 and SAP2022T2T1TOWN22, Ratoath, Co Meath: households 3,041, broadband 2,739, other 31, none 66, not stated 205; usual residents 10,041, born in Ireland 8,431. All-towns rows: households 1,317,616 with 1,083,309 on broadband, usual residents 3,582,870.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, Ratoath: to work 4,968 with car driver 3,138, mainly at or from home 634, bus 330, van 241, car passenger 157, on foot 132, train 43, bicycle 13, not stated 258; to school, college or childcare 3,453 with on foot 1,522, car passenger 1,006, bus 442, bicycle 154, car driver 133, train 15, motorcycle or scooter 0, not stated 164.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T10T4TOWN22, Ratoath: 1,977 work from home at least some of the time; 792 children under 15 in childcare, 324 aged 0 to 4 and 468 aged 5 to 14; education table 5,908 with upper secondary 1,186, honours bachelor or professional 937, postgraduate 778, not stated 279.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'Ratoath College: "Address: Jamestown, Ratoath, Co. Meath, A85 TW84, Ireland"; "LMETB\'s Registered Charity Number (RCN) is CHY 20927".', url: 'https://www.ratoathcollege.ie/' },
      { claim: 'Fairyhouse Racecourse, own site footer: "Ratoath, Co. Meath".', url: 'https://www.fairyhouse.ie/' }
    ],
    rejectedClaims: [
      'Any restatement of the 90.1 percent household broadband share as a share of residents: the crossing needed is not published for towns.',
      'Any figure for the number of Ratoath residents living with broadband, however derived.',
      'Adding the work and education travel columns together: they count two different groups of people.',
      'Treating the published zero for motorcycle or scooter as a gap in the data, or the not-stated counts as zeroes.',
      'The census town-list population of Ratoath: the County Meath page owns it, and the Ashbourne page already cites the council municipal districts.',
      'Any reason for Ratoath holding more people per household than the average town.',
      'Any Fairyhouse Racecourse price, event or attendance figure: only its published address is used.'
    ]
  }
};
