'use strict';
// Gorey (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Gorey, Co Wexford", CSO table F7137 (persons at work by number
// of days working from home, State, updated 5 December 2023) and the Irish Rail
// station page for Gorey, read 19 September 2026. Spine: prevalence versus
// intensity. Gorey: 1,057 of 4,357 answering (24.3 percent) work from home at least
// some of the time; 354 give home as the main way they "travel" to work. F7137:
// 747,961 work from home one day or more; of 677,777 who gave a number of days, 1
// day 112,109, 2 days 124,238, 3 days 119,767, 4 days 77,316, 5 days 203,588, 6
// days 7,787, 7 days 32,972 (70,184 days not stated). Mode five days (30.0
// percent), mean 3.43, 2,324,616 home-working days a week among those who said.
// Borrowing 3.43 for Gorey gives about 3,600 days a week, labelled as an assumption.
// Midleton quotes the F7140 yes/no total; this page uses the days breakdown. The
// Wexford county page owns the census-night population, density, LEA and Creagh
// College; none used here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'GOREY', blurb: 'How many Gorey workers work from home, and how much? The yes-or-no answer and the number of days tell two different stories.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-gorey',
  code: 'gor',
  accent: '#624541',
  accentRationale: 'Gorey: a cocoa brown from the solver, apart from the Wexford county, Wexford town and Enniscorthy accents and from Arklow to the north',
  pageType: 'city',
  place: {
    name: 'Gorey',
    eyebrow: 'Gorey, County Wexford',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Wexford' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-wexford', name: 'County Wexford' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Wexford', href: '/coding-classes-in-county-wexford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gorey, County Wexford, Ireland',
  title: 'Best Coding Class in Gorey | Modern Age Coders',
  description: 'Coding, Python, data and AI lessons for Gorey learners aged 6 to 67, taught live online in small groups of one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Gorey, with a data project on the difference between how many people work from home and how much they do.',
  twitterDescription: 'Live online coding, Python and AI classes for Gorey, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Gorey',
    description: 'Online coding, Python, AI, data and mathematics in level-based groups for children, teenagers and adults in Gorey, County Wexford, taught live in English.'
  },

  h1: 'Coding classes in Gorey',
  capsuleQ: 'What is the best coding class in Gorey?',
  capsule: 'Gorey has 11,428 usual residents, and 3,473 of its households report broadband, the only link a lesson with us requires. Each lesson is taught live on video by a teacher working with a small group at one level or with one learner, most weeks twice, for ages from six to sixty-seven. We charge nothing for the first lesson; the monthly fee is USD 100 in a group and USD 150 one to one.',
  lead: 'Census 2022 asked every worker in Gorey whether they work from home, and 1,057 said they do, at least some of the time. It is a tidy number, and it answers one question: how many people. It does not answer a second question that matters just as much: how much. The census asked that too, and nationally the answers are striking. Among home-workers who said how many days, the single most common answer is not one day but five. This page puts the two measures side by side, the share of people and the number of days, and shows why a report that gives only one of them can mislead in either direction.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Gorey.',

  picks: {
    eyebrow: 'Course picks for Gorey',
    h2: 'Good places for Gorey learners to begin',
    intro: 'Pick a course by age and what the learner enjoys. The free first lesson, with that course\'s teacher, pins down the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with games that count both how many players scored and how many points they got.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Averages, weighted averages and frequency tables, built in code from real counts.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Summaries that answer different questions, and choosing the right one for the question asked.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults whose reports count people when the decision really depends on hours, days or amounts.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Count the people who work from home, then count the days',
      intro: 'The town tables give Gorey\'s yes-or-no answer. A national CSO table breaks the same question down by number of days. The learner builds both measures and compares the stories they tell.',
      body: [
        { kind: 'table', caption: 'Workers in Ireland who work from home, by days a week (CSO table F7137, Census 2022)', head: ['Days a week at home', 'Workers'], rows: [
          ['1 day', '112,109'],
          ['2 days', '124,238'],
          ['3 days', '119,767'],
          ['4 days', '77,316'],
          ['5 days', '203,588'],
          ['6 days', '7,787'],
          ['7 days', '32,972'],
          ['Number of days not stated', '70,184'],
          ['All who work from home at least one day', '747,961']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The yes-or-no view', p: 'Nationally, 36.3 percent of workers who answered work from home at least one day. In Gorey the figure is 1,057 of the 4,357 who answered, or 24.3 percent. This is prevalence: how widespread the habit is, counted in people.' },
          { h3: 'The days view', p: 'Of the 677,777 home-workers nationally who gave a number, five days is the most common answer, 30.0 percent. One or two days make up 34.9 percent and five or more 36.1 percent. The average is 3.43 days a week.' },
          { h3: 'Two stories', p: 'Counted in people, home-working looks like a minority habit. Counted in days, those who said how many worked 2,324,616 days a week at home between them. Prevalence and intensity are both true, and they answer different questions.' }
        ] },
        { kind: 'table', mt: true, caption: 'Three home-working figures for Gorey, and what each one is', head: ['Figure', 'Value', 'What it measures'], rows: [
          ['Work from home at least some of the time', '1,057', 'People, from the direct question'],
          ['Work mainly at or from home', '354', 'People, from the travel question'],
          ['Home-working days a week, borrowing the national average', 'About 3,600', 'Days, an estimate resting on an assumption']
        ] },
        { kind: 'callout', h3: 'Ask how many, then ask how much', p: 'A figure for how many people do something is only half a description. Whether it is homeworking, exercise, screen time or overtime, the same headcount can hide one short session a week or a full-time habit, and the decisions that follow usually depend on the amount. The reverse error is just as common: a large total built from a few heavy users can be reported as if the habit were widespread. Good reporting gives both, prevalence and intensity, and says which one a claim rests on.' },
        { kind: 'p', text: 'The learner stores the national table as a dictionary from days to workers, keeps the "days not stated" group to one side rather than guessing its days, and computes three things: the share of workers who work from home at all, the most common number of days, and the weighted average number of days. A final function borrows the national average for Gorey, taking the assumption as a named parameter, so that anyone reading the code sees exactly what the estimate depends on and can change it.' }
      ]
    },
    {
      id: 'uses', tint: 'tint', eyebrow: 'Which number for which job',
      h2: 'Prevalence, intensity and borrowed figures',
      intro: 'Each measure is right for some questions and wrong for others.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'For how widespread', p: 'If the question is how common home-working is, prevalence answers it: 24.3 percent of Gorey workers who answered, 36.3 percent nationally.' },
          { h3: 'For how much', p: 'If the question is how many trips, desk days or lunches move out of the office, intensity answers it, and a headcount alone will under- or overstate it depending on the mix of days.' },
          { h3: 'Borrowing with care', p: 'About 3,600 days a week for Gorey assumes its home-workers split their days like the national ones. Gorey\'s jobs and commutes may differ, so the figure is a starting estimate, not a measurement.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It gives no measured number of home-working days for Gorey, because the town tables do not break the answer down by days. It does not say why five days is the most common answer nationally, and the two Gorey counts, from two differently worded questions, are not combined.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Gorey in the 2022 census',
      intro: 'Small area figures for the town of Gorey, Co Wexford, from Census 2022. Every figure concerns people usually living there, or their homes.',
      body: [
        { kind: 'table', caption: 'Gorey\'s headline counts', head: ['Subject', 'Census count'], rows: [
          ['Usual residents', '11,428'],
          ['Households', '4,150'],
          ['Households with broadband', '3,473'],
          ['Working residents in the travel table', '4,751'],
          ['Journeys to school, college or childcare', '3,142'],
          ['Children under fifteen in childcare', '759'],
          ['Journeys of an hour or more', '1,007']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Commuting', p: 'Of 4,751 working residents, 2,674 drive and 712 walk; 354 work mainly at or from home, 295 go by van, 249 as a car passenger, 157 by bus, 70 by bicycle and 33 by train. 797 residents leave home before 06:30.' },
          { h3: 'The school run', p: 'Of 3,142 journeys to school, college or childcare, 1,528 are as a car passenger and 1,046 on foot, with 241 by bus and 82 learners driving themselves.' },
          { h3: 'At home', p: 'Gorey\'s working residents answered the direct question this way: 1,057 at least partly from home, 3,300 never, 394 no answer.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the station address as Iarnród Éireann, Gorey, Co. Wexford, Eircode Y25 PY58, and notes bike parking there. It has no connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Gorey learners',
      intro: 'Lessons fall twice in a typical week, always with a live teacher present.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary school', p: 'The census-night age table counts 1,300 children aged six to twelve in Gorey. They begin with blocks and games, counting both who scored and how much.' },
          { h3: 'Secondary school', p: '1,074 of Gorey\'s residents are aged thirteen to eighteen, the years when Python, website building, AI and projects on real data usually start to click.' },
          { h3: 'Adults', p: 'Adults arrive with every sort of background, including none in code, and the course is shaped from the first lesson.' }
        ] },
        { kind: 'p', text: 'Each census figure on this page is quoted as the Central Statistics Office published it. The national days breakdown is CSO table F7137; the shares, averages and the borrowed estimate were worked out on 19 September 2026. Irish Rail is quoted from its station page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting players to weighing amounts',
    intro: 'Age bands are only a starting guess; the first lesson places each learner properly.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Who and how much', p: 'Block-coded games that keep two scores: how many players did something, and how much they did.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Frequency tables', p: 'Python that turns a table of counts into a most common value, an average and a chart.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'The right summary', p: 'Choosing between prevalence and intensity, and stating assumptions when data are borrowed.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Metrics at work', p: 'Reports that count users when the decision depends on usage, and how to fix them.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how common home-working is in Gorey',
    intro: 'It will probably give a percentage. Whether that is the useful number depends on the question behind yours.',
    p1: 'An AI assistant asked about home-working will often answer with a share of workers, because that is the figure most often quoted. For many practical questions, from office space to local cafés, the number that matters is days, and a share of people can point in quite the wrong direction when a large part of the group is at home five days a week.',
    p2: 'A learner who has done this project asks the follow-up: counted in people or in days, and if a local figure has been estimated from a national one, what was assumed? That turns a quick answer into one that can be used.',
    closer: 'Assistants summarise quickly. Choosing the summary that fits the question is still the analyst\'s call.',
    blogAnchor: 'why learning to code is time well spent'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons are run for Gorey',
    intro: 'What to expect.',
    cells: [
      { h3: 'Live teaching', p: 'Every lesson is led by a teacher in real time, working from what the learner has built.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one stage, from Wexford, the rest of Ireland and abroad.' },
      { h3: 'Usually twice a week', p: 'Roughly eight lessons a month, at times agreed before starting.' },
      { h3: 'Planned round school', p: 'Mid-terms, holidays and exam weeks are allowed for in the course plan.' },
      { h3: 'Equipment', p: 'Computer, not phone: a laptop or desktop with a keyboard, plus a headset or speakers and a microphone, on a connection that can hold live video.' },
      { h3: 'Private teaching', p: 'Some learners do better one to one: those far ahead, those who want extra time on each step, and those whose free hours fall outside every group.' }
    ],
    spec: { title: 'Taught remotely', p: 'Gorey learners take every lesson on video. We have no premises in Gorey or anywhere in Ireland, and a lesson is the same from any home with a connection.' }
  },

  fees: {
    h2: 'Fees for Gorey',
    intro: 'The full price list.',
    first: 'A full first lesson with a level assessment, free.',
    group: 'A month in a group of five to ten at the same stage, about eight live lessons.',
    private: 'A month of one-to-one teaching at the same weekly rhythm.',
    closer: 'A family anywhere outside India pays the same US dollar amount each month. The first lesson is free and carries no obligation; the first charge follows when a course starts, and the pricing page lays out holidays, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six families\' words from Google, unedited',

  book: {
    h2: 'Book a free first lesson in Gorey',
    intro: 'Give us the learner\'s age and a sense of what they enjoy, and the first hour will be planned for them. It may finish with a game, a working program, or a chart of how many days people really spend at home.',
    success: 'Thank you. We will contact you about the lesson soon.'
  },

  faq: {
    h2: 'Gorey coding class questions',
    intro: 'What Gorey families ask first.',
    items: [
      { q: 'How many people live in Gorey?', a: 'Gorey had 11,428 usual residents at the 2022 census, in 4,150 households; 3,473 of the households reported broadband.' },
      { q: 'What is the data project on this page?', a: 'Comparing two ways to measure home-working. Gorey\'s census answer is a headcount: 1,057 working residents work from home at least some of the time. A national table adds the number of days, where five days is the most common answer and the average is 3.43, which changes the picture completely.' },
      { q: 'How many days a week do Gorey people work from home?', a: 'The town tables do not say. Borrowing the national average of 3.43 days per home-worker gives about 3,600 home-working days a week in Gorey, but that rests on the assumption that Gorey\'s home-workers split their days like everyone else\'s.' },
      { q: 'How do Gorey residents get to work?', a: 'Of 4,751 working residents in the travel table, 2,674 drive, 712 walk, 354 work mainly at or from home, 295 use a van, 249 go as a car passenger and 157 by bus.' },
      { q: 'When are lessons?', a: 'Afternoons after school, evenings and weekends. Lessons are timetabled in Irish time; India\'s clocks are four and a half hours ahead of Gorey\'s during Irish summer time and five and a half ahead in winter, and every slot we offer suits both.' },
      { q: 'Can adults join?', a: 'Yes, up to sixty-seven and from any starting point. By the end of the first lesson an adult usually knows whether a same-level group or one-to-one lessons would suit them.' },
      { q: 'Will Gorey learners be in a group together?', a: 'Only when they are at the same level. Groups are formed by stage, so a Gorey learner may share lessons with others in Wexford, Wicklow or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Gorey?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Gorey cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'North Wexford and further',
    html: 'Gorey\'s county page is <a class="cg-inline-link" href="/coding-classes-in-county-wexford">County Wexford</a>, and the other Wexford towns in the series are <a class="cg-inline-link" href="/best-coding-class-in-wexford">Wexford town</a> and <a class="cg-inline-link" href="/best-coding-class-in-enniscorthy">Enniscorthy</a>, with <a class="cg-inline-link" href="/best-coding-class-in-arklow">Arklow</a> the next town north and <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> above. Online coding schools are compared on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">a page of their own</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gorey, Wexford and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-wexford', label: 'County Wexford' },
    { href: '/best-coding-class-in-enniscorthy', label: 'Enniscorthy' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-gor .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3.2vw, 2.6rem); }
.cg-root.cg-gor .cg-hero h1 { font-weight: 650; letter-spacing: -0.0181em; line-height: 1.06; }
.cg-root.cg-gor .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.28rem; }
.cg-root.cg-gor .cg-eyebrow { letter-spacing: 0.125em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gor .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0135em; }
.cg-root.cg-gor .cg-grid-3 { gap: clamp(1.06rem, 2.8vw, 2.2rem); }
.cg-root.cg-gor .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-gor .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gor .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-gor .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.14rem; }
.cg-root.cg-gor .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Gorey, Co Wexford, CSO Census 2022 Small Area Population town tables and CSO table F7137, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 11,428. SAP2022T15T2TOWN22: households 4,150, broadband 3,473, not stated 194. SAP2022T11T1TOWN22 to work total 4,751: car driver 2,674, on foot 712, work mainly at or from home 354, van 295, car passenger 249, bus 157, bicycle 70, train 33, not stated 185; to school, college or childcare total 3,142: car passenger 1,528, on foot 1,046, bus 241, car driver 82, not stated 164. SAP2022T11T2TOWN22: before 06:30 797. SAP2022T11T3TOWN22: 1 to under 1.5 hours 652, 1.5 hours and over 355 (1,007). SAP2022T11T4TOWN22: all working persons 4,751, work from home 1,057, never 3,300, not stated 394 (1,057 of 4,357 answering, 24.3 percent). SAP2022T11T5TOWN22: 759 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,300, ages 13 to 18 to 1,074. CSO F7137, Population Aged 15 Years and Over at Work by Number of Days Working from Home, Census 2022, Ireland, updated 5 December 2023: at work 2,320,297; do not work from home 1,313,278; work 1 day or more from home 747,961; 1 day 112,109; 2 days 124,238; 3 days 119,767; 4 days 77,316; 5 days 203,588; 6 days 7,787; 7 days 32,972; days not stated 70,184; not stated whether work from home 259,058. Our arithmetic: 747,961 of 2,061,239 answering, 36.3 percent; days stated 677,777; five days 30.0 percent; one or two days 34.9 percent; five or more 36.1 percent; days worked at home 2,324,616; mean 3.43. Borrowed estimate for Gorey: 1,057 x 3.43 = about 3,626, given as about 3,600, labelled as an assumption. Irish Rail, Gorey: "Station Address Iarnród Éireann Gorey Co. Wexford", "Eircode Y25 PY58", "There is bike parking at the station".',
    localProject: 'Prevalence versus intensity. Gorey\'s census answer to the home-working question is a headcount: 1,057 of 4,357 working residents who answered, 24.3 percent, work from home at least some of the time, while 354 name home as their main way of travelling to work. The CSO\'s national table of the same question by days (F7137) shows what a headcount hides: of 677,777 home-workers who gave a number, the single most common answer is five days (203,588, 30.0 percent), one or two days make up 34.9 percent, and the average is 3.43 days, 2,324,616 home-working days a week between them. The learner computes prevalence, the mode and the weighted mean, keeps the days-not-stated group aside, and writes a borrowing function that takes the national mean as an explicit assumption, giving about 3,600 home-working days a week for Gorey as a labelled estimate. Lesson: ask how many, then ask how much, and say which one a claim rests on. New family for the cluster: prevalence and intensity.',
    requiredMentions: [
      '11,428',
      '3,473',
      '4,751',
      '1,057',
      '354',
      '1,528',
      '759',
      '1,007',
      '797',
      '203,588',
      '2,324,616',
      'Y25 PY58'
    ],
    sources: [
      { claim: 'CSO table F7137, Population Aged 15 Years and Over at Work by Number of Days Working from Home, Census 2022, Ireland: 747,961 work from home one day or more; 1 day 112,109, 2 days 124,238, 3 days 119,767, 4 days 77,316, 5 days 203,588, 6 days 7,787, 7 days 32,972, days not stated 70,184; 1,313,278 do not work from home.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F7137/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T2TOWN22, SAP2022T11T3TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Gorey, Co Wexford: usual residents 11,428; households 4,150, broadband 3,473; to work 4,751 with car driver 2,674, on foot 712, mainly at or from home 354, van 295, car passenger 249, bus 157, bicycle 70, train 33; to school, college or childcare 3,142 with car passenger 1,528, on foot 1,046, bus 241, car driver 82; 797 leave home before 06:30; 1,007 journeys of an hour or more; 1,057 work from home at least some of the time, 3,300 never, 394 not stated; 759 children under 15 in childcare; 1,300 aged 6 to 12 and 1,074 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Gorey station: "Station Address Iarnród Éireann Gorey Co. Wexford", "Eircode Y25 PY58", "There is bike parking at the station".', url: 'https://www.irishrail.ie/en-ie/station/gorey' }
    ],
    rejectedClaims: [
      'Any measured number of home-working days for Gorey: the town tables have no days breakdown; the borrowed figure is an estimate on a stated assumption.',
      'Combining Gorey\'s two home-working counts, which come from differently worded questions.',
      'Any reason why five days is the most common national answer.',
      'The census-night population, density, local electoral area figure and Creagh College: the County Wexford page owns them.',
      'The F7140 yes-or-no total as this page\'s finding: Midleton quotes it; this page uses the days breakdown in F7137.'
    ]
  }
};
