'use strict';
// Celbridge (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Celbridge, Co Kildare", read 18 September 2026, CSO
// table F7070, and the Office of Public Works page for Castletown House. Spine:
// the census tells you what, never why. 763 Celbridge residents travel to
// school, college or childcare by bicycle, 13.3% of 5,748, against 3.7% across
// all towns combined and 5.1% and 6.1% in neighbouring Leixlip and Maynooth, by
// our arithmetic, while only 140 residents cycle to work. The figure was checked
// for internal consistency first: 140 plus 763 equals the table's own bicycle
// total of 903. The page offers no explanation, because the census contains
// none; the learner lists plausible explanations and, for each, the evidence
// that would test it. New to the cluster: no earlier page is about separating a
// finding from its cause. Leixlip owns residence against workplace, so F7070 is
// quoted here only as a fact. Kildare owns Celbridge's total population 20,601
// as a mention, so usual residents are used. The OPW page's euro admission
// prices are not reproduced.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'CELBRIDGE', blurb: '763 cyclists on the school run in one Liffey town. The census records it and can never tell you why.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-celbridge',
  code: 'clb',
  accent: '#4A6B7A',
  accentRationale: 'Celbridge: a river slate from the solver, kept clear of the Kildare, Leixlip and Maynooth accents nearby',
  pageType: 'city',
  place: {
    name: 'Celbridge',
    eyebrow: 'Celbridge, County Kildare',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Kildare' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-kildare', name: 'County Kildare' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Kildare', href: '/coding-classes-in-county-kildare' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Celbridge, County Kildare, Ireland',
  title: 'Best Coding Class in Celbridge | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Celbridge learners aged 6 to 67, taught live by a real teacher in small groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Celbridge, with a project on a census figure that shows how many residents cycle to school or college but can never tell you why.',
  twitterDescription: 'Coding and AI classes for Celbridge, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Celbridge',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Celbridge, County Kildare, taught live in English.'
  },

  h1: 'Coding classes in Celbridge',
  capsuleQ: 'What is the best coding class in Celbridge?',
  capsule: 'Celbridge counts 20,434 usual residents in the census town tables, living in 6,869 households, and 1,983 of its residents aged fifteen and over are students. It is also a town where an unusually large share of residents cycle to school, college or childcare. Families here can use Modern Age Coders without any journey at all: a teacher runs the lesson live on video twice in most weeks, for a group of five to ten at one level or for one learner alone, and learners can be anywhere between six and sixty-seven. We do not charge for the first lesson. After it, a group place costs USD 100 a month and one to one costs USD 150.',
  lead: 'Something in Celbridge\'s census figures stops you. Of the 5,748 residents travelling to school, college or childcare, 763 go by bicycle. That is 13.3%, against 3.7% across all towns combined and about 5% or 6% in nearby Leixlip and Maynooth. Before believing a number like that, check it: the table\'s own bicycle total is 903, and the 140 cyclists going to work plus the 763 going to school make exactly 903, so it is not a typing error. Then comes the harder discipline. Why do so many people in Celbridge cycle to school or college? Safer routes, a school campaign, short distances, a keen cycling club, something else entirely? The census cannot say. It records what people did on one April day. Every reason you might offer is a guess until you find evidence for it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Celbridge.',

  picks: {
    eyebrow: 'Course picks for Celbridge',
    h2: 'Starting points in Celbridge',
    intro: 'Choose by age and interest, and let the free first lesson with the course\'s own teacher confirm it. Nothing beyond contact details is asked for.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where something surprising happens, and the child has to test ideas about why before deciding.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python first steps, with early practice at telling a result apart from a reason.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Spotting an unusual figure in real census data, checking it, and listing what could explain it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who get asked why a number moved and need to separate evidence from guesswork.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What, not why',
      intro: 'The Celbridge cycling figure, checked and compared. Counts are published; percentages are our arithmetic.',
      body: [
        { kind: 'table', caption: 'Travelling to school, college or childcare by bicycle, Census 2022', head: ['Place', 'By bicycle', 'All travelling', 'Share'], rows: [
          ['Celbridge', '763', '5,748', '13.3%'],
          ['Maynooth', '331', '5,415', '6.1%'],
          ['Leixlip', '210', '4,156', '5.1%'],
          ['All towns combined', '34,354', '921,076', '3.7%'],
          ['Celbridge residents cycling to work', '140', '9,893', '1.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Step one: is it real?', p: 'The town\'s travel table gives a bicycle total of 903 for work and education together. The 140 going to work plus the 763 going to school, college or childcare make 903 exactly, and the two group totals, 9,893 and 5,748, make the table\'s overall 15,641. The figure is internally consistent.' },
          { h3: 'Step two: what does it say?', p: 'On census day in April 2022, a much larger share of Celbridge residents travelling to school, college or childcare went by bike than across all towns combined. It does not say whether that is typical of every day, which schools they attend, or how far they rode.' },
          { h3: 'Step three: what it cannot say', p: 'Why. The census has no question about reasons. Any explanation, however sensible it sounds, is a hypothesis, and the learner\'s job is to write down what evidence would confirm or rule it out.' }
        ] },
        { kind: 'callout', h3: 'The most useful sentence in data work: we do not know why yet', p: 'When a number surprises people, an explanation usually arrives within seconds, and it is usually repeated as fact. Sales fell because of the weather. Results rose because of the new teacher. More children cycle because the roads are safer. Each might be true. None is shown by the number itself. A learner who can say what was measured, admit what was not, and list the evidence needed to decide between explanations is doing what good analysts, scientists and journalists do, and it is a habit that starts with one honest table in one Kildare town.' },
        { kind: 'p', text: 'The learner\'s output is a short list of hypotheses, each paired with the evidence that would test it: school travel surveys, local route information, cycling data for other years, or comparisons with towns of similar size and distance to schools. We have not investigated any of them, and this page deliberately offers no reason for the Celbridge figure, because we do not have one.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Celbridge in the town tables',
      h2: 'A commuter town with a young population',
      intro: 'Published for the built-up area Celbridge, Co Kildare, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Celbridge, April 2022', head: ['Measured', 'Celbridge'], rows: [
          ['Usual residents', '20,434'],
          ['Born in Ireland', '16,211'],
          ['Households, and those with broadband', '6,869 and 6,256'],
          ['Residents in work, travel table', '9,893'],
          ['Working in Dublin city and suburbs', '4,038'],
          ['Children under fifteen in childcare', '1,492']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How adults travel', p: 'Of the 9,893 residents in work, 5,483 drive, 1,292 work mainly at or from home, 998 take a bus and 361 a train, DART or Luas.' },
          { h3: 'Working from home', p: '4,029 working residents work from home at least some of the time and 5,211 never do, with the rest not stating.' },
          { h3: 'What residents work in', p: 'Of 9,965 residents at work, 2,756 are in commerce and trade, 2,561 in professional services, 1,115 in manufacturing and 1,057 in transport and communications.' }
        ] },
        { kind: 'p', text: 'The largest age band in the town is 40 to 44, with 1,863 people, and Celbridge residents born outside Ireland include 1,372 born outside Europe and the United Kingdom, 1,130 elsewhere in the European Union, 945 in the United Kingdom, 444 in Poland and 332 in India. Broadband reaches about 91.1% of households by our arithmetic.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'The school run',
      h2: 'How Celbridge gets to class',
      intro: 'All modes for the 5,748 residents travelling to school, college or childcare.',
      body: [
        { kind: 'table', caption: 'Travel to school, college or childcare, Celbridge residents', head: ['Mode', 'Residents', 'Share, our arithmetic'], rows: [
          ['Car passenger', '1,962', '34.1%'],
          ['On foot', '1,503', '26.1%'],
          ['Bus, minibus or coach', '958', '16.7%'],
          ['Bicycle', '763', '13.3%'],
          ['Driving themselves', '195', '3.4%'],
          ['Train, DART or Luas', '85', '1.5%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Fewer car passengers', p: 'About 34.1% of Celbridge\'s school, college and childcare journeys are made as a car passenger, against about 39.6% across all towns combined.' },
          { h3: 'More buses', p: 'About 16.7% take a bus here, against about 13.0% across all towns combined.' },
          { h3: 'Still no explanation', p: 'Both differences are measured. Neither comes with a reason, and the same rule applies to them as to the cycling figure.' }
        ] },
        { kind: 'spec', title: 'Where Castletown House fits', p: 'Celbridge is also home to Castletown House and Parklands, which the Office of Public Works describes as Ireland\'s first and finest Palladian mansion, built around 1722 for William Conolly, Speaker of the Irish House of Commons, beside the Liffey, eircode W23 V9H3.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Celbridge',
      h2: 'A class that needs no ride at all',
      intro: 'However a Celbridge child gets to school, the coding lesson comes to them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'School-age learners', p: 'Primary pupils, Junior Cycle, Transition Year and the Leaving Certificate years, with lessons planned around the school calendar.' },
          { h3: 'Students', p: 'With 1,983 residents aged fifteen and over whose main occupation is study, there are learners here at every stage from school to college.' },
          { h3: 'Adults', p: 'Python, data and AI for adults, including the 4,029 residents who already work from home at least part of the week.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Office of Public Works, Kildare County Council or any school in Celbridge. Census figures are quoted as published, every percentage is our own arithmetic, and comparisons are with all towns combined, which is what the town tables\' row labelled State really covers. The Castletown House page lists admission prices, which we do not reproduce.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From noticing to explaining carefully',
    intro: 'Ages are only a guide; the first lesson finds the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'That is odd', p: 'Noticing when something in a game behaves unexpectedly, and testing ideas about why.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Check before you believe', p: 'Confirming a surprising number adds up before doing anything with it.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Hypotheses and evidence', p: 'Listing possible explanations for a real finding and the data that would test each.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Why did it move?', p: 'Answering that question at work without mistaking a plausible story for evidence.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask why so many in Celbridge cycle to school and you will get a reason',
    intro: 'Fluent, plausible, and not in the data.',
    p1: 'A generated answer to a why question almost always supplies a why. Cycle lanes, school programmes, compact streets: each sounds reasonable, and none of them is in the census. The answer reads like analysis and is really a list of guesses presented with the confidence of findings.',
    p2: 'The learner who has done this project replies differently: here is what was measured, here is what was not, and here is what we would need to find out. That reply is less satisfying in the moment and far more useful, because it cannot mislead anybody.',
    closer: 'Machines produce explanations effortlessly. Knowing when an explanation has not been earned is a human skill, and one of the best reasons to learn to work with data properly in 2026.',
    blogAnchor: 'why it still pays to learn coding'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Celbridge learners',
    intro: 'The practical side, briefly.',
    cells: [
      { h3: 'Live with a teacher', p: 'Every lesson is taught in real time, and learners talk, ask and try things throughout.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one ability level, drawn from Celbridge, the rest of Ireland and other countries.' },
      { h3: 'A regular slot', p: 'Two lessons in most weeks, about eight a month, at a time agreed once and then kept.' },
      { h3: 'School year aware', p: 'Mid-terms, holidays and exam weeks are planned around from the start.' },
      { h3: 'At home', p: 'A laptop or desktop, working sound and a connection that carries video, checked in the free lesson.' },
      { h3: 'One to one if needed', p: 'If no group at the right level meets at a workable time, the course is taught privately.' }
    ],
    spec: { title: 'However a learner gets to school', p: 'By bike, on foot, by bus or in the car, the journey to a coding lesson can be skipped entirely. A lesson at the kitchen table at a fixed hour adds learning without adding another trip to the week.' }
  },

  fees: {
    h2: 'Celbridge class fees',
    intro: 'The whole price list, in three lines.',
    first: 'The first lesson, taught in full and free, closing with a level and a suggested course.',
    group: 'A month in a group of five to ten at one level, around eight lessons.',
    private: 'A month of one to one lessons on the same weekly schedule.',
    closer: 'Monthly fees are charged in US dollars at the single rate used for families outside India, the same in Celbridge as anywhere in Ireland, with no euro list alongside. Nothing is charged until the free lesson settles a course and a time, and the pricing page explains pauses, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Google reviews from six of our families, unedited',

  book: {
    h2: 'Book a free Celbridge lesson',
    intro: 'Tell us the learner\'s age and what they enjoy. The first hour is planned for them, from a Scratch mystery to test ideas against, to a real census figure that needs checking before anyone explains it.',
    success: 'Thank you. Somebody will be in touch about the Celbridge class shortly.'
  },

  faq: {
    h2: 'Celbridge coding class questions',
    intro: 'What Celbridge families usually ask first.',
    items: [
      { q: 'How many people live in Celbridge?', a: 'The census small area tables count 20,434 usual residents in the built-up area of Celbridge, in 6,869 households. Our Kildare page quotes the census town list, which uses a slightly different population measure.' },
      { q: 'What is the Celbridge data project?', a: 'Learners check a striking census figure, 763 residents cycling to school, college or childcare, confirm it adds up, compare it with neighbouring towns, and then list possible reasons alongside the evidence that would test each, because the census itself gives no reason.' },
      { q: 'Why do so many Celbridge residents cycle to school or college?', a: 'We do not know, and the census does not say. It records how people travelled on census day, not why. That gap is exactly what the project teaches learners to respect.' },
      { q: 'How many Celbridge residents work in Dublin?', a: 'A census table following residents to the city where they work records 4,038 Celbridge residents working in Dublin city and suburbs.' },
      { q: 'When are lessons?', a: 'After school, evenings and weekend mornings. Our teachers are based in India, four and a half hours ahead of Ireland during Irish summer time and five and a half in winter, and the weekly slot is agreed during the free lesson.' },
      { q: 'Do you teach adults in Celbridge?', a: 'Yes. Learners run from six to sixty-seven, and adults are placed in the free lesson with a group at their level or with a private teacher.' },
      { q: 'Does a child need to know any coding first?', a: 'No. The free lesson finds where each learner is starting from, and the course begins there.' },
      { q: 'Is there a Modern Age Coders classroom in Celbridge?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Celbridge cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Celbridge',
    html: 'Neighbouring pages include <a class="cg-inline-link" href="/best-coding-class-in-leixlip">Leixlip</a> and <a class="cg-inline-link" href="/best-coding-class-in-maynooth">Maynooth</a>, within <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. To weigh up online coding schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">our comparison</a>, and every page is listed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Celbridge, Kildare and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-leixlip', label: 'Leixlip' },
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-clb .cg-hero-grid { align-items: start; gap: clamp(1.14rem, 3.12vw, 2.61rem); }
.cg-root.cg-clb .cg-hero h1 { font-weight: 700; letter-spacing: -0.0191em; line-height: 1.062; }
.cg-root.cg-clb .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.16rem; }
.cg-root.cg-clb .cg-eyebrow { letter-spacing: 0.171em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-clb .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0133em; }
.cg-root.cg-clb .cg-grid-3 { gap: clamp(1.06rem, 2.57vw, 2.05rem); }
.cg-root.cg-clb .cg-table caption { letter-spacing: 0.029em; font-weight: 700; }
.cg-root.cg-clb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-clb .cg-table tr:first-child td { font-weight: 600; }
.cg-root.cg-clb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.03rem; }
.cg-root.cg-clb .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Celbridge, the built-up area "Celbridge, Co Kildare", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T2T1TOWN22: usual residents 20,434; born Ireland 16,211, rest of world 1,372, other EU 1,130, United Kingdom 945, Poland 444, India 332. SAP2022T15T2TOWN22: households 6,869, broadband 6,256, no internet 232. SAP2022T11T1TOWN22: to work total 9,893, car driver 5,483, mainly at or from home 1,292, bus 998, van 510, on foot 391, train DART or Luas 361, car passenger 297, bicycle 140; to school, college or childcare total 5,748, car passenger 1,962, on foot 1,503, bus 958, bicycle 763, car driver 195, train 85; combined bicycle 903 and combined total 15,641. Comparison towns from the same table: Maynooth school bicycle 331 of 5,415; Leixlip 210 of 4,156; all-towns row 34,354 of 921,076 for school bicycle, 364,345 car passenger, 260,527 on foot, 119,288 bus; all-towns work bicycle 57,485 of 1,625,104. SAP2022T11T4TOWN22: 9,893 working persons, 4,029 work from home, 5,211 never. SAP2022T11T5TOWN22: 1,492 children under 15 in childcare. SAP2022T14T1TOWN22 at work 9,965: commerce and trade 2,756, professional services 2,561, manufacturing 1,115, transport and communications 1,057. SAP2022T8T1TOWN22: students 1,983. SAP2022T1T1TOWN22: aged 40 to 44, 1,863. F7070: Celbridge residents working in Dublin city and suburbs 4,038. Office of Public Works, Heritage Ireland: Castletown House and Parklands, "Ireland\'s first and finest Palladian mansion", "set amongst beautiful eighteenth-century parklands on the banks of the Liffey in Celbridge, County Kildare", "built around 1722 for the speaker of the Irish House of Commons, William Conolly", "Celbridge, Co. Kildare W23 V9H3".',
    localProject: 'What, not why. In the Celbridge town travel table, 763 of 5,748 residents travelling to school, college or childcare go by bicycle, 13.3 percent by our arithmetic, against 3.7 percent across all towns combined (34,354 of 921,076), 6.1 percent in Maynooth (331 of 5,415) and 5.1 percent in Leixlip (210 of 4,156), while 140 of 9,893 Celbridge residents cycle to work, 1.4 percent. The figure is first checked for internal consistency: 140 plus 763 equals the table\'s combined bicycle total of 903, and 9,893 plus 5,748 equals the combined total of 15,641. The census records travel on one day and asks nothing about reasons, so no explanation is offered. The learner lists candidate explanations, such as routes, school initiatives, distances or local clubs, each paired with the evidence that would test it, for example school travel surveys, route information, other years\' data or comparable towns, and states plainly that none has been investigated. New to the cluster: separating a measured finding from its cause. Residence against workplace is Leixlip\'s lesson, so the F7070 figure of 4,038 Celbridge residents working in Dublin city and suburbs is stated only as a fact.',
    requiredMentions: [
      '20,434',
      '16,211',
      '6,869',
      '6,256',
      '9,893',
      '5,483',
      '5,748',
      '4,029',
      '5,211',
      '1,983',
      'W23 V9H3',
      '1,962'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel, Celbridge, Co Kildare: to school, college or childcare total 5,748, car passenger 1,962, on foot 1,503, bus 958, bicycle 763, car driver 195, train 85; to work total 9,893, car driver 5,483, mainly from home 1,292, bus 998, train 361, bicycle 140; combined bicycle 903, combined total 15,641. Same table: Maynooth school bicycle 331 of 5,415; Leixlip 210 of 4,156; all-towns row school bicycle 34,354 of 921,076.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22 and SAP2022T15T2TOWN22, Celbridge, Co Kildare: usual residents 20,434, born Ireland 16,211, rest of world 1,372, other EU 1,130, United Kingdom 945, Poland 444, India 332; households 6,869, broadband 6,256, no internet 232.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T4TOWN22, SAP2022T11T5TOWN22, SAP2022T14T1TOWN22, SAP2022T8T1TOWN22 and SAP2022T1T1TOWN22, Celbridge, Co Kildare: 4,029 work from home, 5,211 never; 1,492 children in childcare; at work 9,965, commerce and trade 2,756, professional services 2,561, manufacturing 1,115, transport and communications 1,057; students 1,983; aged 40 to 44, 1,863.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table F7070, town of usual residence by city of place of work: Celbridge, Co Kildare to Dublin city and suburbs 4,038.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F7070/JSON-stat/2.0/en' },
      { claim: 'Office of Public Works, Heritage Ireland, Castletown House and Parklands: "Ireland\'s first and finest Palladian mansion"; "The house was built around 1722 for the speaker of the Irish House of Commons, William Conolly"; "Celbridge, Co. Kildare W23 V9H3".', url: 'https://www.heritageireland.ie/places-to-visit/castletown-house-and-parklands/' }
    ],
    rejectedClaims: [
      'Any explanation for the high share of Celbridge residents cycling to school, college or childcare: the census records travel, not reasons, and nothing was investigated.',
      'Any claim about which schools Celbridge cyclists attend or how far they travel: the table does not say.',
      'Residence against workplace as a project: the Leixlip page owns it.',
      'Castletown House admission prices in euro: not reproduced beside our USD fees.',
      'Using Celbridge\'s total population 20,601 as a mention: the Kildare page owns it.',
      'Any Irish Rail station details for Celbridge: the station page requested redirected without content, so none are quoted.'
    ]
  }
};
