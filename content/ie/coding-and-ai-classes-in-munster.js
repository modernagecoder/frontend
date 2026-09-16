'use strict';
// Munster (cg- province page, Ireland cluster, Phase 5). Only CSO Census 2022
// province-level figures are used, from the Small Area Population province
// tables read on 17 September 2026, plus an index of our Munster county and
// city pages. Spine: what you do with the people who did not answer can change
// a ranking. In SAP2022T15T2PROV, counting every household, Ulster (part of)
// has a slightly higher broadband share than Munster, 76.6% against 76.3%.
// Counting only households that answered, Munster is ahead, 82.9% against
// 82.1%, because 7.9% of Munster households did not state their internet access
// against 6.6% in Ulster (part of). Both shares are our arithmetic on published
// counts, and neither denominator is wrong; the page teaches choosing one and
// saying so. Kill gate passed: well over eight province-level CSO figures.
// Spent traps avoided: weighted averages (Leinster), speaker frequency
// (Connacht), percentage points against per cent (Ulster).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'province', tag: 'MUNSTER', blurb: 'Cork, Limerick, Waterford, Kerry, Clare and Tipperary, with a project on a ranking that flips on the people who did not answer.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-and-ai-classes-in-munster',
  code: 'mns',
  accent: '#8A3B2E',
  accentRationale: 'Munster: a southern brick red from the solver, deeper than any red on the individual Munster county and city pages',
  pageType: 'governorate',
  place: {
    name: 'Munster',
    eyebrow: 'Munster, the southern province',
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
    { label: 'Cork', href: '/best-coding-class-in-cork' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Munster, Ireland',
  title: 'Coding and AI Classes in Munster | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Munster, from Cork, Limerick and Waterford to Kerry, Clare and Tipperary, for ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and AI classes across Munster, with a project on a census ranking that reverses depending on how you treat the households that did not answer.',
  twitterDescription: 'Coding and AI classes across Munster, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '17 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Munster',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the six counties of Munster, taught live in English.'
  },

  h1: 'Coding and AI classes in Munster',
  capsuleQ: 'What are the best coding and AI classes in Munster?',
  capsule: 'Munster is the south of Ireland: Cork, Kerry, Limerick, Clare, Tipperary and Waterford, with 1,355,848 usually resident people at the 2022 census in 501,571 households. It holds three of the State\'s cities, and every Munster county and city has its own page with us, linked further down. Teaching is the same everywhere we work, live on video at a fixed weekly time, in ability groups of five to ten or one to one, for ages six to sixty-seven. The first lesson costs nothing; afterwards a group place is USD 100 a month and a private place USD 150.',
  lead: 'Which province has better broadband, Munster or Ulster? The census gives a firm answer, and then a different one. Count every household and Ulster, meaning its three counties in this State, edges ahead: 76.6% against Munster\'s 76.3%. Count only the households that actually answered the question and Munster leads, 82.9% against 82.1%. Same census, same counts, opposite ranking. The difference is 39,859 Munster households that did not say whether they had internet at all, a larger share than in Ulster. Neither calculation is wrong. What would be wrong is publishing one of them without saying which, and that decision, made silently, sits under a great many league tables people take at face value.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Munster.',

  picks: {
    eyebrow: 'Course picks across Munster',
    h2: 'Four ways into the subject',
    intro: 'Pick by age and ambition. Every course opens with a free lesson from the teacher who would take it, with no payment details needed to book.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games that keep score even when some players never take their turn, and have to decide how to count them.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python first steps, and early practice at noticing what a result quietly leaves out.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Census tables with gaps in them, and writing down how the gaps were handled.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who report survey or customer results where plenty of people never replied.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The ranking that flips',
      intro: 'Household broadband by province, table SAP2022T15T2PROV, calculated two defensible ways. Shares are our arithmetic.',
      body: [
        { kind: 'table', caption: 'Broadband share with and without the households that did not answer', head: ['Province', 'Households', 'Did not state', 'Share of all', 'Share of those answering'], rows: [
          ['Munster', '501,571', '39,859', '76.3%', '82.9%'],
          ['Ulster (part of)', '113,206', '7,504', '76.6%', '82.1%'],
          ['Connacht', '217,015', '16,219', '75.7%', '81.8%'],
          ['Leinster', '1,004,936', '82,232', '82.0%', '89.3%'],
          ['Munster against Ulster', '', '', 'Ulster ahead', 'Munster ahead']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why it flips', p: 'In Munster 7.9% of households did not state their internet access; in Ulster (part of) it was 6.6%. Leaving non-response in the denominator drags Munster\'s share down more, and removing it lifts Munster more. Two provinces this close are separated by that difference alone.' },
          { h3: 'Which is right', p: 'Both, for different questions. Share of all households describes the whole province and assumes nothing about who did not answer. Share of those answering assumes the silent households look like the rest. Each assumption is reasonable and neither is certain.' },
          { h3: 'What a learner writes', p: 'Both calculations, the ranking each produces, and one sentence stating which was chosen and why. Once the choice is written down, a reader can disagree with it, which is the point.' }
        ] },
        { kind: 'callout', h3: 'Why non-response is never a technicality', p: 'Almost every survey, form, poll and customer questionnaire has people who skip a question. Somebody then decides, often without noticing they have decided, whether to count those people as a no, leave them out, or spread them across the answers. That choice can move a result by several points and, as here, reorder a table. The honest habit is not a clever statistical fix. It is to count the non-answers, show them, and say what you did with them. A teenager who does that on census data has learned something plenty of published reports still skip.' },
        { kind: 'p', text: 'For the record, the counts behind the Munster row are 382,555 households with broadband, 27,248 with another connection, 51,909 with no internet and 39,859 not stated, 501,571 in all, exactly as the statistics office publishes them. The four provinces sum to the State\'s 1,836,728 households, which is a quick check that no row has gone missing.' }
      ]
    },
    {
      id: 'counties', tint: 'tint', eyebrow: 'The counties of Munster',
      h2: 'Six counties, three cities, seven pages',
      intro: 'Limerick and Waterford each have a single council for city and county, so their city pages cover the whole county.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Cork', p: 'The city at <a class="cg-inline-link" href="/best-coding-class-in-cork">coding classes in Cork</a> and the county beyond it at <a class="cg-inline-link" href="/coding-classes-in-county-cork">County Cork</a>, each built on its own council\'s figures.' },
          { h3: 'Limerick and Waterford', p: '<a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a> and <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a>, where one council covers city and county together.' },
          { h3: 'Kerry, Clare and Tipperary', p: '<a class="cg-inline-link" href="/coding-classes-in-county-kerry">Kerry</a>, <a class="cg-inline-link" href="/coding-classes-in-county-clare">Clare</a> and <a class="cg-inline-link" href="/coding-classes-in-county-tipperary">Tipperary</a>, each with its own towns, schools and data project.' }
        ] },
        { kind: 'p', text: 'The county and city pages carry their own census figures and a different data project each, so none of that is repeated here. This page keeps to what the census publishes for Munster as a province.' }
      ]
    },
    {
      id: 'province', tint: '', eyebrow: 'Munster in the census',
      h2: 'Province figures, as published',
      intro: 'Totals from the Census 2022 small area population tables for Munster. Percentages are our arithmetic.',
      body: [
        { kind: 'table', caption: 'Munster in Census 2022', head: ['What was counted', 'Munster'], rows: [
          ['Usually resident population', '1,355,848'],
          ['Born in Ireland', '1,122,711, about 83%, the highest share of the four provinces'],
          ['Born in the United Kingdom, Poland and India', '72,891, 31,962 and 10,934'],
          ['Aged 3 and over and able to speak Irish', '547,821 of 1,328,518, about 41%'],
          ['Working people who work from home', '173,175 of 600,129, about 29%'],
          ['Journey to work, school or college under 15 minutes', '277,500 people']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Shorter journeys than the east', p: 'Of Munster people who stated a journey time, 51,432 travel an hour or more, about 6.8%, the lowest share of the four provinces by our arithmetic.' },
          { h3: 'Mostly born here', p: 'About 83% of Munster\'s residents were born in Ireland, compared with about 80% across the State, again our arithmetic on the census birthplace table.' },
          { h3: 'Irish in the south', p: 'About 41% of Munster residents aged three and over say they can speak Irish, and the province includes Gaeltacht areas in Cork, Kerry and Waterford under the statistics office\'s own definition.' }
        ] },
        { kind: 'spec', title: 'Why shorter journeys still leave families short of time', p: 'Munster travels less far than Leinster, but a short commute into Cork or Limerick is no help to a teenager in west Kerry or north Tipperary whose nearest computing class may be a long drive away. The same weekly online group reaches both, at the same hour, with learners at the same level.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From skipped turns to stated assumptions',
    intro: 'The ages are approximate; the first lesson decides the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Missing turns', p: 'Games where some players skip, and the child decides how the score should treat them.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Who is in the denominator', p: 'Working out what a percentage was divided by, and what changes if that changes.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Non-response in real data', p: 'Calculating results both ways and writing the sentence that says which was used.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Surveys at work', p: 'Reporting customer and staff surveys honestly when a large share of people never answered.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Every summary quietly picks a denominator',
    intro: 'Ask which province has better broadband and you will get one ranking, with no mention that another exists.',
    p1: 'A generated answer has to divide by something, and it will not usually say what. If it leaves the non-answers in, Ulster wins; if it drops them, Munster does. Either way the reply reads as settled fact, because nothing in the question asked about the people who did not respond.',
    p2: 'A learner who has run both calculations on real census counts asks the question the summary skipped: what happened to the people who did not answer. It is a short question and it changes how every percentage afterwards is read.',
    closer: 'Tools make calculation cheap. Deciding what a calculation should include, and saying so, is the part that still needs a person, which is exactly why learning this properly is worth the effort in 2026.',
    blogAnchor: 'the question of whether coding is worth learning now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons across the south',
    intro: 'The same arrangement in Dingle, Ennis, Nenagh or Dungarvan.',
    cells: [
      { h3: 'Taught live', p: 'Each lesson is led in real time by a teacher who expects the learner to take part out loud.' },
      { h3: 'Placed by level', p: 'Groups of five to ten are formed by ability, drawing on Munster and other countries so the fit is genuine.' },
      { h3: 'A steady weekly slot', p: 'Two lessons in most weeks, about eight a month, at a time fixed once and kept.' },
      { h3: 'School calendar in mind', p: 'Junior Cycle to Leaving Certificate, with mid-terms, holidays and exam weeks planned for.' },
      { h3: 'From home', p: 'A computer, sound that works and a connection good enough for video, all checked in the free lesson.' },
      { h3: 'Or one to one', p: 'When no group at the right level meets at a workable hour, the course is taught privately.' }
    ],
    spec: { title: 'For the far ends of the province', p: 'West Cork, the Kerry peninsulas and north Clare are a long way from the cities of Munster. An online group gives a learner in Castletownbere the same teacher, level and hour as a learner in Limerick city.' }
  },

  fees: {
    h2: 'Munster fees',
    intro: 'Three prices, the same in every Munster county.',
    first: 'A complete first lesson, at no charge, ending with a level and a suggested course.',
    group: 'A month in a group of five to ten at one level, about eight lessons.',
    private: 'A month of one to one lessons on the same weekly pattern.',
    closer: 'Fees are charged monthly in US dollars at the single rate used outside India, so Tralee and Waterford pay the same and no euro price exists beside it. No payment is taken before the free lesson has agreed a course and a time, and the pricing page explains pauses, missed lessons and switching format.'
  },

  reviewsH2: 'Six Google reviews from families we teach, unchanged',

  book: {
    h2: 'Book the first lesson free',
    intro: 'Let us know the learner\'s age and interests and we will plan the first hour around them, from a Scratch game with skipped turns to census data where the silent households change the answer.',
    success: 'Thank you. Somebody will be in touch about your class in Munster shortly.'
  },

  faq: {
    h2: 'Munster coding class questions',
    intro: 'What families in the south ask most often.',
    items: [
      { q: 'How many people live in Munster?', a: 'The 2022 census province tables record 1,355,848 usually resident people in Munster, in 501,571 households.' },
      { q: 'Which counties make up Munster?', a: 'Clare, Cork, Kerry, Limerick, Tipperary and Waterford. We have pages for all six, with separate city and county pages for Cork.' },
      { q: 'What is the Munster data project?', a: 'Learners calculate household broadband shares for each province two ways, with and without the households that did not answer, and find that Munster and Ulster swap places. They then write down which method they chose and why.' },
      { q: 'Does Munster have Gaeltacht areas?', a: 'Yes. The statistics office defines Gaeltacht areas in seven counties, three of them in Munster: Cork, Kerry and Waterford.' },
      { q: 'Are commutes shorter in Munster?', a: 'Among people who stated a journey time, about 6.8% in Munster travel an hour or more, the lowest share of the four provinces by our arithmetic on census counts.' },
      { q: 'What time are lessons?', a: 'After school, evenings and weekend mornings. Our teachers are in India, four and a half hours ahead of Ireland in summer and five and a half in winter, and the slot is agreed in the free lesson.' },
      { q: 'Do you teach AI as well as coding?', a: 'Yes. The course list runs from Scratch for young children to Python, data and AI courses for teenagers and adults, and the free lesson is where the right one is chosen.' },
      { q: 'Is there a Modern Age Coders classroom in Munster?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do Munster coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Beyond Munster',
    html: 'The other three provinces each have a page: <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-connacht">Connacht</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-ulster">Ulster, for its three counties in the State</a>. For a comparison of online coding schools see <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland page</a> lists every page we have written.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Munster and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-mns .cg-hero-grid { align-items: start; gap: clamp(1.09rem, 3.23vw, 2.7rem); }
.cg-root.cg-mns .cg-hero h1 { font-weight: 700; letter-spacing: -0.0187em; line-height: 1.063; }
.cg-root.cg-mns .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-mns .cg-eyebrow { letter-spacing: 0.172em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mns .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0141em; }
.cg-root.cg-mns .cg-grid-3 { gap: clamp(1.03rem, 2.54vw, 2.02rem); }
.cg-root.cg-mns .cg-table caption { letter-spacing: 0.031em; font-weight: 700; }
.cg-root.cg-mns .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mns .cg-table tr:last-child td { font-weight: 600; }
.cg-root.cg-mns .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.99rem; }
.cg-root.cg-mns .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Munster, one of four provinces and not an administrative unit; figures are only those the CSO publishes at province level in Census 2022 Small Area Population province tables, read on 17 September 2026. SAP2022T2T1PROV: Munster usually resident population 1,355,848; born in Ireland 1,122,711; born in the United Kingdom 72,891, Poland 31,962, India 10,934; State total 5,084,879 with 4,067,442 born in Ireland. SAP2022T15T2PROV household internet access: Munster 501,571 households, broadband 382,555, other 27,248, no internet 51,909, not stated 39,859; Ulster (part of) 113,206 households, broadband 86,744, not stated 7,504; Connacht 217,015, broadband 164,270, not stated 16,219; Leinster 1,004,936, broadband 824,314, not stated 82,232; State 1,836,728. SAP2022T3T1PROV: Munster aged 3 and over able to speak Irish 547,821 of 1,328,518. SAP2022T11T4PROV: Munster 600,129 working persons, 173,175 working from home. SAP2022T11T3PROV journey time to work, school or college, aged 5 and over: Munster under 15 minutes 277,500, one hour to under an hour and a half 36,247, an hour and a half or more 15,185, together 51,432, not stated 85,705, total 839,388. The CSO Gaeltacht definition names electoral divisions in Cork, Donegal, Galway, Kerry, Mayo, Meath and Waterford, three of which are in Munster. Munster counties with our pages: Clare, Cork (city and county pages), Kerry, Limerick and Waterford (joint city and county councils, covered by their city pages) and Tipperary.',
    localProject: 'Non-response can reverse a ranking. Using SAP2022T15T2PROV household internet access, broadband shares by province computed with all households as the denominator are, by our arithmetic, Connacht 75.70, Leinster 82.03, Munster 76.27 and Ulster (part of) 76.62 percent, so Ulster (part of) ranks above Munster. Computed with only households that stated their access, removing not stated from the denominator, they are Connacht 81.81, Leinster 89.34, Munster 82.86 and Ulster (part of) 82.06 percent, so Munster ranks above Ulster (part of). The reversal comes from non-response of 7.95 percent of Munster households (39,859 of 501,571) against 6.63 percent in Ulster (part of) (7,504 of 113,206). Neither denominator is wrong: the first describes all households and assumes nothing about the silent ones, the second assumes they resemble those who answered. The provinces sum to the State\'s 1,836,728 households, confirming no row is missing. Output: both calculations, the ranking each gives, and a sentence stating which was chosen and why. Not used, because other province pages own them: weighted against plain averages (Leinster), speaker frequency (Connacht), and percentage points against per cent (Ulster).',
    requiredMentions: [
      '1,355,848',
      '501,571',
      '382,555',
      '39,859',
      '51,909',
      '1,122,711',
      '72,891',
      '31,962',
      '547,821',
      '1,328,518',
      '277,500',
      '51,432'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T15T2PROV, households with internet access by province: Munster 501,571 households, broadband 382,555, other 27,248, no 51,909, not stated 39,859; Ulster (part of) 113,206, broadband 86,744, not stated 7,504; Connacht 217,015, broadband 164,270, not stated 16,219; Leinster 1,004,936, broadband 824,314, not stated 82,232; Ireland 1,836,728.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T2T1PROV, usually resident population by birthplace by province: Munster total 1,355,848, born Ireland 1,122,711, United Kingdom 72,891, Poland 31,962, India 10,934; Ireland total 5,084,879, born Ireland 4,067,442.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T3T1PROV, population aged 3 years and over by ability to speak Irish by province: Munster 547,821 able to speak Irish of 1,328,518.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T3T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T4PROV, population aged 15 years and over by working from home by province: Munster 600,129 working persons, 173,175 who work from home.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T3PROV, population aged 5 years and over by journey time to work, school or college by province: Munster under 15 minutes 277,500, 1 hour to under 1.5 hours 36,247, 1.5 hours and over 15,185, not stated 85,705, total 839,388; Connacht, Leinster and Ulster (part of) one-hour-plus shares of stated journeys higher by our arithmetic.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T3PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 Profile 8 editor\'s note, repeated on county releases: the Gaeltacht comprises electoral divisions in the counties of Cork, Donegal, Galway, Kerry, Mayo, Meath and Waterford.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationkerry' }
    ],
    rejectedClaims: [
      'Any single broadband ranking of the provinces presented without its denominator: two defensible rankings exist and both are shown.',
      'Any Munster figure built by summing county figures ourselves: all province figures are quoted from CSO province tables.',
      'Weighted against plain averages as a project: the Leinster page owns it.',
      'Irish speaking frequency as a project: the Connacht page owns it.',
      'Percentage points against per cent as a project: the Ulster page owns it.',
      'Any claim about what non-responding households actually have: the census does not say, so both assumptions are described and neither is asserted.',
      'County-level detail repeated from the Munster county and city pages, which carry it and are linked.'
    ]
  }
};
