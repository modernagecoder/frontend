'use strict';
// Longford town (cg- town page, Ireland cluster, Phase 7). Facts from the CSO
// Census 2022 town tables for "Longford, Co Longford", the CSO Census 2022 Profile 1
// background notes, the CSO release "Internet Coverage and Usage in Ireland 2025"
// (household internet connectivity chapter) and the Irish Rail station page for
// Longford, read 19 September 2026. Spine: coverage versus non-response. An online
// form can reach at most the 3,136 connected households (3,033 broadband, 103
// other) of the 3,566 that answered; 430 (12.1 percent) report no internet and 471
// did not say. Asked online "does your home have internet?", every reply is yes.
// National 2025 survey: 95 percent connected; almost all households with dependent
// children against 88 percent of single-adult households without children; of the
// 5 percent unconnected, 59 percent do not need it, 17 percent lack skills, 4
// percent cite no broadband. Non-response, the second gap: 1,361 of 6,376 left
// journey time blank (21.3 percent), highest of the 94 towns of 5,000 or more. The
// census reached every home because enumerators delivered questionnaires to all
// dwellings expected to be occupied. Cobh owns survivorship; this page is about the
// collection method. The Longford county page owns the census-night population,
// Center Parcs and the council address; none used here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'LONGFORD TOWN', blurb: 'An online survey of Longford would never hear from 430 households. Planning who a method can reach, before a single answer comes in.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-longford',
  code: 'lgt',
  accent: '#217329',
  accentRationale: 'Longford town: a field green from the widened solver search, well apart from the Longford county plum and the Mullingar and Athlone pages',
  pageType: 'city',
  place: {
    name: 'Longford',
    eyebrow: 'Longford town, County Longford',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Longford' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-longford', name: 'County Longford' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Longford', href: '/coding-classes-in-county-longford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Longford town, County Longford, Ireland',
  title: 'Best Coding Class in Longford Town | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for learners in Longford town aged 6 to 67, live online in small groups at one level or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Longford town, with a data project on who an online survey can never reach, and why that matters.',
  twitterDescription: 'Live online coding, Python and AI classes for Longford town, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Longford Town',
    description: 'Online coding, Python, AI, data and mathematics in level-matched groups for children, teenagers and adults in Longford town, County Longford, taught live in English.'
  },

  h1: 'Coding classes in Longford town',
  capsuleQ: 'What is the best coding class in Longford town?',
  capsule: 'Longford town has 10,822 usual residents in 4,037 households, and a home broadband line is all a lesson with us needs. Each lesson is taught live on video, by a teacher working with a few learners at one level or with one learner, around twice a week, for ages six to sixty-seven. The first lesson is free, and a month of group lessons costs USD 100 after that, or USD 150 for private teaching.',
  lead: 'Suppose you wanted to ask every household in Longford town a question, and chose an online form because it is quick and cheap. Before a single reply arrives, the census can tell you who that form will never hear from. In 2022, 430 of the town\'s households said they had no internet at all. Ask the online form "does your home have internet?" and every answer will be yes: one hundred percent, against a true figure nearer 88. That is the extreme case of a problem every survey has, called coverage: the method decides who can answer. This page plans a survey of Longford, counts who each method can reach, and separates that problem from a second one Longford also shows clearly, people who are reached but leave a question blank.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Longford town.',

  picks: {
    eyebrow: 'Course picks for Longford town',
    h2: 'Where Longford town learners start',
    intro: 'Each course below suits an age range; the free first lesson is where its teacher decides the exact starting point.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with quiz games, including one where the way the question is asked changes who can answer.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python surveys and tallies, and a first look at who is missing from a set of answers.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Survey design, coverage and non-response, using real census counts to test each idea.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who run customer or staff surveys and need to know who the method leaves out.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Plan a survey of Longford, and count who it can never reach',
      intro: 'The census asked every household about internet access. That one table tells the learner, in advance, how much of the town an online survey could possibly hear from.',
      body: [
        { kind: 'table', caption: 'Internet access in Longford town households, Census 2022', head: ['Household reported', 'Households'], rows: [
          ['Broadband', '3,033'],
          ['Other internet connection', '103'],
          ['No internet', '430'],
          ['Did not say', '471'],
          ['All households', '4,037']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Who an online form reaches', p: 'At most the 3,136 households with some connection. Of the 3,566 that answered the question, 430 have none, 12.1 percent, and some of the 471 that left it blank may be offline too.' },
          { h3: 'An absurd but true result', p: 'Ask "does your home have internet?" through that form and every reply is yes: 100 percent, against about 88 among households that answered the census. The method has fixed the answer before anyone responds.' },
          { h3: 'Who the gap is made of', p: 'The CSO\'s 2025 household survey puts 95 percent of homes online. Almost all households with children are connected, against 88 percent of single adults living without children, and of the unconnected 5 percent, 59 percent say they do not need the internet.' }
        ] },
        { kind: 'table', mt: true, caption: 'Two different kinds of missing answer, both visible in Longford', head: ['Kind of gap', 'What it means', 'In Longford town'], rows: [
          ['Coverage', 'People the method cannot reach at all', '430 households with no internet, for an online form'],
          ['Non-response', 'People reached who leave a question blank', '1,361 of 6,376 skipped journey time, 21.3 percent']
        ] },
        { kind: 'callout', h3: 'How you ask decides who can answer', p: 'Coverage and non-response are different problems. Non-response shows up in the data as blanks, and at 21.3 percent Longford has the highest rate for journey time among the 94 towns of 5,000 or more. Coverage leaves no trace at all: the people a method cannot reach never appear, not even as blanks. That is why the census did not rely on any single channel. Enumerators delivered questionnaires to every dwelling expected to be occupied on census night, which is the only reason the 430 offline homes are counted anywhere.' },
        { kind: 'p', text: 'The learner builds a small model of the town from the census rows: 3,033 broadband homes, 103 with another connection, 430 with none and 471 unknown. Then they write three survey methods as functions, an online form that can only select connected homes, a phone and post method that can select any home, and a door-to-door visit, and run each on the same question. The online method reports 100 percent connected every time, however large the sample. Adding a non-response step on top shows the second gap separately, so the learner can see which problem a bigger sample fixes, and which one it never can.' }
      ]
    },
    {
      id: 'reach', tint: 'tint', eyebrow: 'Designing for reach',
      h2: 'Closing a gap that never shows in the answers',
      intro: 'A larger sample from the wrong channel only repeats the same gap more precisely.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Match the method to the question', p: 'Anything about digital life, online services or remote learning is exactly where an online-only survey is weakest, because the people it misses are the ones the question is about.' },
          { h3: 'Use more than one route', p: 'Post, phone and visits reach homes that forms on a website never will. Combining them costs more and is the usual price of hearing from everyone.' },
          { h3: 'Report who was out of reach', p: 'A survey result should say which households its method could not reach, alongside the answers it did get. Leaving that out makes a partial picture look complete.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not say who Longford\'s 430 offline households are: the town tables do not describe them. The national survey describes Ireland in 2025, not Longford in 2022, and is quoted only to show the kind of household a coverage gap tends to contain. It takes no view on broadband policy.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'The census count for Longford town',
      intro: 'From the Census 2022 small area tables for the town of Longford, Co Longford: usual residents and the households they form.',
      body: [
        { kind: 'table', caption: 'Longford town in the 2022 tables', head: ['Recorded', 'Longford town'], rows: [
          ['Usual residents', '10,822'],
          ['Households', '4,037'],
          ['Households with no internet', '430'],
          ['Working residents in the travel table', '3,996'],
          ['Journeys to school, college or childcare', '2,833'],
          ['Children under fifteen in childcare', '541'],
          ['Journey time left blank', '1,361']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'To work', p: 'Of 3,996 working residents, 1,923 drive and 644 walk; 272 go as a car passenger, 180 work mainly at or from home, 160 by van, 141 by bicycle, 58 by bus and 50 by train, while 554 gave no answer.' },
          { h3: 'To school', p: 'Of 2,833 journeys to school, college or childcare, 1,059 are made as a car passenger, 722 on foot and 322 by bus, with 56 by train and 564 unanswered.' },
          { h3: 'From home', p: 'Longford town\'s working residents gave these answers on home-working: 571 do some or all of their work at home, 2,656 never do, and 769 did not say.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the station address as Convent Rd, Longford, Co. Longford, Eircode N39 E3T9, with sheltered bike parking at the station. It has no connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Longford town learners',
      intro: 'Two live lessons make up most weeks, and the teacher stays for the whole of each.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The census-night age table counts 1,253 children aged six to twelve in the town. They start with blocks and quiz games, and learn early that how a question is asked matters.' },
          { h3: 'Teenagers', p: 'There are 979 residents aged thirteen to eighteen in Longford town, the age when Python, building websites, AI projects and work with real data tend to take hold.' },
          { h3: 'Adults', p: 'Adults bring every kind of background, none in code included, and the first lesson finds the level.' }
        ] },
        { kind: 'p', text: 'Figures from the census are printed as the Central Statistics Office has them, and the national survey figures are the CSO\'s too, quoted as published. The survey model was built from the published town table on 19 September 2026. Irish Rail is quoted from its own station page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From quiz games to survey design',
    intro: 'These age bands are a first guess, which the opening lesson corrects where needed.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Asking questions', p: 'Block-coded quizzes that collect answers and show who took part.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Tallies and gaps', p: 'Python tallies of survey answers, and a count of who was never asked.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Survey design', p: 'Sampling, coverage and non-response, simulated on real census counts.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Surveys at work', p: 'Customer and staff surveys that report who they could not reach as well as what they heard.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to design a survey for Longford',
    intro: 'It will probably suggest an online form. Ask it who that form cannot reach.',
    p1: 'An AI assistant asked for a quick survey plan will very often propose an online form, because that is the cheapest and fastest route and the one most often described. It may not mention that in Longford town such a form cannot reach 430 households at all, and that those households are unlikely to be a random slice of the town.',
    p2: 'Having done this project, a learner asks the assistant a second question: who can this method never reach, and how would the answers change if they could be heard? Adding that question turns a convenient plan into an honest one.',
    closer: 'Tools make collecting data easy. Knowing who the collection leaves out is a skill that has to be learned.',
    blogAnchor: 'why coding is a sound thing to learn now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Longford town',
    intro: 'Details.',
    cells: [
      { h3: 'A teacher on every call', p: 'The teacher is present throughout and works directly with the code the learner writes.' },
      { h3: 'One level per group', p: 'Each group has five to ten members, all at the same point in the course, from Longford, elsewhere in Ireland and overseas.' },
      { h3: 'How often', p: 'Two lessons in a typical week, around eight in a month, at times fixed with the family.' },
      { h3: 'Term-aware', p: 'Holidays, mid-term breaks and exam weeks are part of the course plan from the start.' },
      { h3: 'What a home needs', p: 'A broadband line, which 430 Longford homes reported not having, plus a laptop or desktop and a microphone with speakers or headphones. Our lessons have the same coverage limit as an online survey.' },
      { h3: 'Private lessons', p: 'Private lessons are set up for a learner who needs their own pace, their own level or their own hour.' }
    ],
    spec: { title: 'No local classroom', p: 'Longford town learners join every lesson on video. We have no premises in Longford or anywhere in Ireland, and the lesson is the same from any connected home.' }
  },

  fees: {
    h2: 'Fees for Longford town',
    intro: 'Every price.',
    first: 'A full first lesson with the level assessed, at no charge.',
    group: 'A month in a group of five to ten at the same level, about eight live lessons.',
    private: 'A month of private lessons on the same weekly pattern.',
    closer: 'Every family outside India is charged the same monthly amount in US dollars. There is nothing to pay for the free first lesson, charges begin with the course, and the pricing page describes holidays, missed lessons and changing between group and private lessons.'
  },

  reviewsH2: 'Six families on Google, their reviews reproduced intact',

  book: {
    h2: 'Book a free first lesson in Longford town',
    intro: 'Tell us who the learner is, their age and interests, and the first hour is designed for them. It might end in a game, a program that runs, or a survey plan that counts who it can reach.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Longford town coding class questions',
    intro: 'What families in Longford town ask first.',
    items: [
      { q: 'How many people live in Longford town?', a: 'Census 2022 counted 10,822 usual residents in Longford town, in 4,037 households; 430 of the households reported no internet connection.' },
      { q: 'What is the data project on this page?', a: 'Planning a survey of Longford town and counting, in advance, who each method can reach. An online form cannot reach the 430 households with no internet, and asking it whether homes have internet always returns 100 percent. The project separates that coverage gap from non-response, where people are reached but skip a question.' },
      { q: 'Why does it matter who a survey misses?', a: 'Because the people missed are rarely a random slice. Nationally, the CSO finds households with children are almost all online, while single adults living without children are less often connected, so an online survey quietly tilts towards some households and away from others.' },
      { q: 'How do Longford town residents get to work?', a: 'Of 3,996 working residents in the travel table, 1,923 drive, 644 walk, 272 go as a car passenger, 180 work mainly at or from home, 160 use a van and 141 cycle.' },
      { q: 'When are lessons?', a: 'In the late afternoon and evening on school days, and at weekends. Longford lessons are timetabled on Irish time; India, where our teachers work, is ahead by four and a half hours in the Irish summer and by five and a half in winter, so we offer only hours that are reasonable in both places.' },
      { q: 'Are lessons open to adults?', a: 'Yes, to sixty-seven, with or without experience. Adults usually leave the first lesson knowing whether a small same-level group or one-to-one teaching is the right fit.' },
      { q: 'Will a Longford learner be grouped with others from the town?', a: 'Groups are formed by level, so classmates may be in Longford, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Longford town?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Longford town cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Across the midlands',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-county-longford">County Longford</a> page covers the county, and the nearest large-town pages in the series are <a class="cg-inline-link" href="/best-coding-class-in-mullingar">Mullingar</a> and <a class="cg-inline-link" href="/best-coding-class-in-athlone">Athlone</a>, all within <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. For a plain comparison of online coding schools see <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Longford town, County Longford and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-longford', label: 'County Longford' },
    { href: '/best-coding-class-in-mullingar', label: 'Mullingar' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lgt .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.21vw, 2.61rem); }
.cg-root.cg-lgt .cg-hero h1 { font-weight: 650; letter-spacing: -0.0177em; line-height: 1.07; }
.cg-root.cg-lgt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.17rem; }
.cg-root.cg-lgt .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lgt .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0132em; }
.cg-root.cg-lgt .cg-grid-3 { gap: clamp(1.07rem, 2.74vw, 2.13rem); }
.cg-root.cg-lgt .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-lgt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lgt .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-lgt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.04rem; }
.cg-root.cg-lgt .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Longford, Co Longford, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 10,822. SAP2022T15T2TOWN22: households 4,037, broadband 3,033, other 103, no internet 430, not stated 471 (3,136 connected of 3,566 answering, 87.9 percent; 430 of 3,566, 12.1 percent, no internet). SAP2022T11T3TOWN22: total 6,376, not stated 1,361 (21.3 percent), the highest not-stated share for journey time among the 94 towns with 5,000 or more usual residents. SAP2022T11T1TOWN22 to work total 3,996: car driver 1,923, on foot 644, car passenger 272, work mainly at or from home 180, van 160, bicycle 141, bus 58, train 50, not stated 554; to school, college or childcare total 2,833: car passenger 1,059, on foot 722, bus 322, train 56, not stated 564. SAP2022T11T4TOWN22: 571 work from home at least some of the time, 2,656 never, 769 not stated. SAP2022T11T5TOWN22: 541 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,253, ages 13 to 18 to 979. CSO Census 2022 Profile 1 background notes: "Census Enumerators were assigned to these Enumeration Areas and, during the five weeks before Census Night, delivered census questionnaires to all dwellings that were expected to be occupied on Sunday, 03 April 2022." CSO, Internet Coverage and Usage in Ireland 2025, Household Internet Connectivity: "In 2025, 95% of households have an internet connection"; "Almost all households with dependent children have internet access. This compares with just 88% of sole occupancy households comprised of one adult with no dependent children."; "Of the 5% of households with no internet access, the most common reason given was that they did not need the internet (59%), followed by lack of skills (17%). Just 4% of these households with no internet access stated that broadband internet was not available in their area." Irish Rail, Longford: "Station Address Convent Rd, Longford, Co. Longford", "Eircode N39 E3T9", "There is sheltered bike parking at the station".',
    localProject: 'Coverage versus non-response, planned before any survey is run. From the census internet table, an online form in Longford town can reach at most the 3,136 connected households of the 3,566 that answered; 430, 12.1 percent, report no internet and 471 did not say, so an online question about internet access returns 100 percent against about 88. The national CSO survey for 2025 shows what such a gap tends to contain: 95 percent of homes connected, almost all households with children against 88 percent of single adults living without children, and of the unconnected 5 percent, 59 percent saying they do not need the internet, 17 percent lacking skills and 4 percent without broadband available. Non-response, the second gap, is visible separately: 1,361 of 6,376 residents left journey time blank, 21.3 percent, the highest of the 94 towns of 5,000 or more. The learner simulates three methods (online, phone and post, door to door) and a non-response step, and sees that a larger sample fixes neither gap. The census counted the offline homes because enumerators delivered questionnaires to every dwelling expected to be occupied. Distinct from Cobh\'s survivorship (who a table of current residents cannot see); here the collection method decides who can answer. New family for the cluster: coverage and the choice of data-collection method.',
    requiredMentions: [
      '10,822',
      '4,037',
      '430',
      '471',
      '3,996',
      '1,923',
      '571',
      '2,833',
      '1,059',
      '1,361',
      '21.3',
      'N39 E3T9'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T15T2TOWN22, Longford, Co Longford: households 4,037; broadband 3,033; other 103; no internet 430; not stated 471.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO, Internet Coverage and Usage in Ireland 2025, Household Internet Connectivity: 95 percent of households have an internet connection; almost all households with dependent children against 88 percent of sole occupancy households of one adult with no dependent children; of the 5 percent with no internet, 59 percent did not need it, 17 percent lacked skills, 4 percent said broadband was not available.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-isshict/internetcoverageandusageinireland2025/householdinternetconnectivity/' },
      { claim: 'CSO Census 2022 Profile 1 background notes: enumerators "delivered census questionnaires to all dwellings that were expected to be occupied on Sunday, 03 April 2022".', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-cpp1/censusofpopulation2022profile1-populationdistributionandmovements/backgroundnotes/' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T11T1TOWN22, SAP2022T11T3TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Longford, Co Longford: usual residents 10,822; to work 3,996 with car driver 1,923, on foot 644, car passenger 272, mainly at or from home 180, van 160, bicycle 141, bus 58, train 50, not stated 554; to school, college or childcare 2,833 with car passenger 1,059, on foot 722, bus 322, train 56, not stated 564; journey time not stated 1,361 of 6,376; 571 work from home at least some of the time, 2,656 never, 769 not stated; 541 children under 15 in childcare; 1,253 aged 6 to 12 and 979 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T3TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Longford station: "Station Address Convent Rd, Longford, Co. Longford", "Eircode N39 E3T9", "There is sheltered bike parking at the station".', url: 'https://www.irishrail.ie/en-ie/station/longford' }
    ],
    rejectedClaims: [
      'Any description of who Longford\'s 430 offline households are: the town tables do not describe them.',
      'Applying the 2025 national survey shares to Longford as if they were Longford figures.',
      'Any reason for Longford\'s high non-response on the journey questions.',
      'Any view on broadband provision or policy.',
      'The census-night population, Center Parcs and the council address: the County Longford page owns them.'
    ]
  }
};
