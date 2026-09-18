'use strict';
// Killarney (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Killarney, Co Kerry", CSO table F1013 (town population),
// the CSO Profile 1 background notes on de facto and usually resident measures,
// read 19 September 2026, the Irish Rail station page for Killarney and the
// national parks site for Killarney National Park. Spine: a gap between two
// definitions is a measurement, not an answer. The town list counts 14,412 people
// in Killarney on census night (de facto); the resident tables count 13,456 usual
// residents. Joined on town code across all 867 towns (scratchpad gap.js): the gap
// is 956, 6.63 percent, first of the 95 towns of 5,000 or more, fifth of the 306 of
// 1,000 or more behind Dingle, Saggart, Kilkee and Cahirciveen. 746 towns above
// zero, 121 at zero; all towns 47,631, 1.31 percent; median 0.65. The page ranks
// the signal and refuses to explain it: Saggart and Buttevant are on the list, and
// nothing in the tables says who the extra people were. Swords owns the bare
// two-figures note; the Kerry page owns 14,412 as a mention, Cork owns 13,456.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'KILLARNEY', blurb: 'Census night found 956 more people in Killarney than live there. The project turns that gap into a ranking of every town, and stops short of guessing why.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-killarney',
  code: 'kly',
  accent: '#542646',
  accentRationale: 'Killarney: a deep fuchsia-wine from the solver, well clear of the Kerry county green and the Tralee page nearby',
  pageType: 'city',
  place: {
    name: 'Killarney',
    eyebrow: 'Killarney, County Kerry',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Kerry' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-kerry', name: 'County Kerry' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Kerry', href: '/coding-classes-in-county-kerry' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Killarney, County Kerry, Ireland',
  title: 'Best Coding Class in Killarney | Modern Age Coders',
  description: 'Live online coding, Python, data and AI classes for Killarney learners aged 6 to 67, in small groups matched by level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Killarney, with a data project on why the census counted 956 more people in the town than live there.',
  twitterDescription: 'Coding, Python and AI for Killarney learners aged 6 to 67, taught live online. First lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Killarney',
    description: 'Level-matched online coding, Python, AI, data and mathematics for children, teenagers and adults in Killarney, County Kerry, taught live in English.'
  },

  h1: 'Coding classes in Killarney',
  capsuleQ: 'What is the best coding class in Killarney?',
  capsule: 'Killarney has 4,866 households and 3,809 of them report broadband, enough for a lesson that happens entirely on video. A teacher works live with a small group at one stage of a course, or with one learner alone, usually twice a week, for any age from six to sixty-seven. There is no fee for the first lesson; afterwards a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'The census counted Killarney twice, and both counts are official. On census night the town held 14,412 people. The tables that describe the people who live there count 13,456. The difference, 956 people, is 6.63 percent of the census-night count, and no town of 5,000 or more has a larger share. This page turns that difference into a measurement. The learner joins the two tables for all 867 census towns, computes the gap for each, ranks them, and then does the harder thing: works out what the ranking is evidence of, and what it is not. The top of the list is interesting. It is also where a confident explanation is easiest to reach for and hardest to support.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Killarney.',

  picks: {
    eyebrow: 'Course picks for Killarney',
    h2: 'Where Killarney learners tend to begin',
    intro: 'Pick by age and interest; the first lesson, with the teacher of that course, fixes the starting level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that count and compare things, including two lists that should agree and do not.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python programs that read two small tables, match them up and print the differences.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Joining real tables, ranking results fairly and saying clearly what a finding does not show.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who meet two versions of the same figure at work and need to know which to use.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two official counts of Killarney, and what the difference finds',
      intro: 'Census night was Sunday 3 April 2022. The same census produced two populations for every town, measured in two different ways, and the learner puts the gap between them to work.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Counted where they were', p: 'The CSO calls the first measure the de facto population: everyone present on census night, whether or not they usually live there. The town list uses it, and for Killarney it is 14,412.' },
          { h3: 'Counted where they live', p: 'The second is the usually resident population, which the CSO uses for topics such as citizenship and households. The birthplace and citizenship tables for Killarney count 13,456.' },
          { h3: 'The difference', p: '956 people, 6.63 percent of the census-night count. On its own that means little. Set against every other town it becomes a ranking, and the program below builds it.' }
        ] },
        { kind: 'table', mt: true, caption: 'Largest gaps by share among the 306 towns with 1,000 or more people on census night, in rank order', head: ['Town, as the CSO names it', 'Census night', 'Usual residents', 'Gap and share'], rows: [
          ['Dingle-Daingean Uí Chúis, Co Kerry', '1,671', '1,406', '265, 15.86%'],
          ['Saggart, Co Dublin', '4,573', '3,890', '683, 14.94%'],
          ['Kilkee, Co Clare', '1,214', '1,067', '147, 12.11%'],
          ['Cahirciveen, Co Kerry', '1,297', '1,165', '132, 10.18%'],
          ['Killarney, Co Kerry', '14,412', '13,456', '956, 6.63%'],
          ['Buttevant, Co Cork', '1,080', '1,031', '49, 4.54%'],
          ['Lehinch, Co Clare', '1,018', '972', '46, 4.52%'],
          ['Westport, Co Mayo', '6,872', '6,566', '306, 4.45%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Against towns its size', p: 'Of the 95 towns with 5,000 or more people on census night, Killarney has the largest gap by share. Westport is next at 4.45 percent, and the middle town of the 95 sits at 0.82. Among the 54 towns of 10,000 or more, the runner-up is Galway city and suburbs at 2.61.' },
          { h3: 'Across all 867', p: 'No town has fewer people on census night than usual residents: 746 have a gap above zero and 121 a gap of exactly zero. All towns together held 47,631 more people that night than live in them, 1.31 percent, and the median town sits at 0.65.' },
          { h3: 'Why a share, not a count', p: 'Dublin city and suburbs has by far the biggest gap in people, 19,941, and comes twelfth of the 95 by share. A count ranks places mostly by how big they are; the share asks how unusual census night was for each.' }
        ] },
        { kind: 'callout', h3: 'A gap between two definitions is a measurement, not an answer', p: 'Two official figures that disagree are not an embarrassment to be hidden in a footnote. Here the size of the disagreement ranks every town by how many people the census found there who do not live there, which is a genuine signal. What it cannot do is say who those people were or why they had come. The number looks the same whether they were in a hotel, a hospital or a relative\'s spare room. A signal tells you where to look. Something else, a named source, a local record, a second table, has to tell you what you are looking at.' },
        { kind: 'p', text: 'The program is short, and each part teaches something. It joins the census-night table to the resident table on the CSO\'s town code, never on the name, because names carry hyphens, accents and two languages, and Dingle-Daingean Uí Chúis has all three. It computes the gap and the share for every town, then ranks within size bands, since a town of a thousand people and a city of a million cannot be ranked fairly on one list. Last, and deliberately, it prints the outliers for a person to investigate rather than attaching a label to each. The learner writes that last step as a list of questions, one per town, with no answers filled in until a source provides them.' }
      ]
    },
    {
      id: 'signal', tint: 'tint', eyebrow: 'Signal, not explanation',
      h2: 'What the top of the list can and cannot say',
      intro: 'Several names near the top will be familiar to anyone who has spent a holiday in Ireland. That impression is not evidence, and two entries on the same list show why.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Saggart', p: 'Second of 306, with 683 more people present than usually live there. The tables do not say why, and this page does not guess. Finding out would take a source about what was in Saggart on that Sunday night, not a cleverer formula.' },
          { h3: 'Buttevant', p: 'Sixth, on a gap of 49 people. In a town of about a thousand, a few dozen visitors move the share a long way, so the order among the smallest towns on the list is less settled than it looks.' },
          { h3: 'Places that hold visitors', p: 'The CSO lists what it counts as non-private households: boarding houses, hotels, guest houses, hostels, barracks, hospitals, nursing homes, boarding schools, religious and welfare institutions, prisons and ships, any of which may hold usual residents, visitors or both.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not say the 956 extra people in Killarney were tourists, or that tourism explains any town\'s gap. The tables used here record how many people were present and whether they usually lived there. They do not record why anyone was present, and neither does this page.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Killarney in the resident tables',
      intro: 'Published for the town Killarney, Co Kerry, in the Census 2022 small area tables. Apart from the first row, every figure below counts usual residents.',
      body: [
        { kind: 'table', caption: 'Killarney, Co Kerry, Census 2022', head: ['Counted', 'Number'], rows: [
          ['Present on census night, town list', '14,412'],
          ['Usual residents, birthplace table', '13,456'],
          ['Households', '4,866'],
          ['Households with broadband', '3,809'],
          ['Working residents in the travel table', '6,284'],
          ['Journeys to school, college or childcare', '2,920'],
          ['Children under fifteen in childcare', '682'],
          ['Residents aged three and over who can speak Irish', '4,596 of 13,965']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of 6,284 working residents, 2,973 drive and 1,285 walk. Then come 469 who work mainly at or from home, 282 car passengers, 272 cyclists, 270 who go by van and 249 by bus.' },
          { h3: 'The school journey', p: 'Of 2,920 journeys to school, college or childcare, 1,560 are made as a car passenger and 565 on foot; 126 go by bus, 113 drive themselves and 60 cycle.' },
          { h3: 'Home as a workplace', p: 'Asked directly, 1,202 working residents do at least some work from home, 4,286 never do, and 796 gave no answer.' }
        ] },
        { kind: 'spec', title: 'Two named places', p: 'Irish Rail gives the station address as Fair Hill, Killarney, Co. Kerry, Eircode V93 HV25, with sheltered bike parking at the station. The national parks site says Killarney National Park stretches across 10,000 hectares and that Muckross House is reached by a turn off the N71 just over 6km south of the town. Neither body has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Killarney learners',
      intro: 'Two set lessons most weeks, taught live from start to finish.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'The census-night age table counts 1,216 children aged six to twelve in the town. They begin with block code and games, and learn early that two lists can disagree for a reason.' },
          { h3: 'Secondary age', p: 'For the 957 aged thirteen to eighteen: Python, websites, AI and data projects that use real tables, from first year to the Leaving Cert years.' },
          { h3: 'Adults', p: 'Someone who has never written a line of code starts at the beginning; someone who has written a lot starts further on. The first lesson tells us which.' }
        ] },
        { kind: 'p', text: 'Census counts are Central Statistics Office figures printed as published, and every gap and ranking on this page was computed by joining the town list to the resident tables on 19 September 2026. The CSO definitions are quoted from its Census 2022 background notes. Irish Rail and the national parks site are quoted from their own pages and are not connected with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From matching lists to weighing evidence',
    intro: 'The ages are a guide; the first lesson finds the actual level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Spot the difference', p: 'Block-coded games that compare two lists and count what is in one and not the other.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Join two tables', p: 'Python that lines up two small tables by a shared code and reports every mismatch.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Signal and evidence', p: 'Ranking real data fairly, then separating what a result shows from what it merely suggests.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Two versions of a figure', p: 'Reconciling numbers that disagree at work, and choosing the one that answers the question asked.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant why the two numbers differ',
    intro: 'It may give a tidy answer. The question is what the answer rests on.',
    p1: 'An AI assistant asked why Killarney counted more people than live there may well answer at once, with visitors in hotels. It could even be partly right. The difficulty is that it would sound just as sure about Saggart, where nothing in these tables points anywhere, and a reader has no way to tell the grounded answer from the fluent one.',
    p2: 'A learner who has built this project uses the assistant for the part it does well, writing the join and the ranking, and keeps for themselves the part that needs judgement: deciding what the gap is evidence of, and finding a source before writing a cause.',
    closer: 'Let the machine compute the gap. Explaining it still needs a person with a source.',
    blogAnchor: 'why coding is still worth a learner\'s time'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons work from Killarney',
    intro: 'The practical side.',
    cells: [
      { h3: 'A teacher in the room', p: 'Every lesson is live, and the teacher follows what the learner is building on screen.' },
      { h3: 'Groups by stage', p: 'Five to ten learners at the same point in a course, from Kerry, elsewhere in Ireland and abroad.' },
      { h3: 'Two a week, usually', p: 'Around eight lessons in a month, at times agreed before the course starts.' },
      { h3: 'Term-time aware', p: 'Mid-term breaks, holidays and exam weeks are planned for from the outset.' },
      { h3: 'Equipment', p: 'Any reasonably recent laptop or desktop with a camera will do. A tablet makes typing code slow, and headphones help in a busy house.' },
      { h3: 'On their own', p: 'A learner can be taught alone from the start or move to it later; it is the answer when the group at the right stage runs at the wrong time.' }
    ],
    spec: { title: 'No building in Killarney', p: 'We teach Killarney over video only. There are no premises in the town, and the lesson is the same whether it is taken on Fair Hill or in Fossa.' }
  },

  fees: {
    h2: 'Fees for Killarney',
    intro: 'The whole price list.',
    first: 'A full first lesson with a level check, free of charge.',
    group: 'One month in a group of five to ten at one stage, about eight live lessons.',
    private: 'One month of one-to-one lessons on the same weekly rhythm.',
    closer: 'The free lesson settles the course, the group and the weekly times; the first bill comes after that, as a single monthly amount in US dollars, identical for every family outside India. The pricing page explains holidays, missed lessons and moving between a group and private teaching.'
  },

  reviewsH2: 'Six families, in their own words on Google',

  book: {
    h2: 'Book a free first lesson in Killarney',
    intro: 'Give us the learner\'s age and interests and we will shape the first hour to fit. It could end with a game, a first program, or two tables that finally match.',
    success: 'Thank you. We will be in touch about the lesson shortly.'
  },

  faq: {
    h2: 'Killarney coding class questions',
    intro: 'What Killarney families usually ask before booking.',
    items: [
      { q: 'How many people live in Killarney?', a: 'For people whose home is in the town, the resident tables give 13,456. The town list gives 14,412, which counts everyone present on census night, visitors included. Killarney has 4,866 households.' },
      { q: 'What is the data project on this page?', a: 'Turning the gap between those two official counts into a measurement. Joined across all 867 census towns, Killarney\'s gap of 956 people, 6.63 percent, is the largest share of any of the 95 towns with 5,000 or more people on census night.' },
      { q: 'Does the gap mean 956 tourists were in Killarney that night?', a: 'Not on the census figures alone. The gap counts people present who did not usually live in the town; the tables do not record why they were there. Hotel guests, hospital patients and relatives staying over would all add to it.' },
      { q: 'How do Killarney residents travel to work?', a: 'Of 6,284 working residents in the travel table, 2,973 drive and 1,285 walk, with 469 working mainly at or from home, 282 travelling as a car passenger, 272 cycling, 270 by van and 249 by bus.' },
      { q: 'When are lessons?', a: 'After school, in the evening and at weekends. Take four and a half hours off Indian time during Irish summer time, five and a half in winter, and you have Kerry time; we pick slots from the Kerry end that hold in both seasons.' },
      { q: 'Can adults join?', a: 'Yes, at any age up to sixty-seven and from any starting point, including none. After the first lesson an adult either joins a group at the matching stage or carries on one to one.' },
      { q: 'Is there a separate group just for Killarney?', a: 'No. Groups are formed by stage, so a Killarney learner may share lessons with learners in Kenmare, in Cork or in another country, all at the same point in the course.' },
      { q: 'Is there a Modern Age Coders classroom in Killarney?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Killarney cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Killarney',
    html: 'From here the <a class="cg-inline-link" href="/coding-classes-in-county-kerry">County Kerry</a> page covers the whole county and <a class="cg-inline-link" href="/best-coding-class-in-tralee">Tralee</a> its largest town. <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> is the nearest city page, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a> gathers the province. Online coding schools are set side by side on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">a plain comparison page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> holds the full series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Killarney, Kerry and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-kerry', label: 'County Kerry' },
    { href: '/best-coding-class-in-tralee', label: 'Tralee' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-kly .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.31vw, 2.7rem); }
.cg-root.cg-kly .cg-hero h1 { font-weight: 700; letter-spacing: -0.0204em; line-height: 1.05; }
.cg-root.cg-kly .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.08rem; }
.cg-root.cg-kly .cg-eyebrow { letter-spacing: 0.15em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-kly .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0149em; }
.cg-root.cg-kly .cg-grid-3 { gap: clamp(1.12rem, 2.84vw, 2.2rem); }
.cg-root.cg-kly .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-kly .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kly .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-kly .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-kly .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Killarney, Co Kerry, CSO Census 2022, read 19 September 2026. F1013 (Population Density and Area Size, by town): Killarney total population 14,412. CSO Census 2022 Profile 1 background notes: "The census population figures in this report relate to the de facto population meaning persons who were present in the State on the night of Sunday, 03 April 2022"; "The de facto measure of the population represents all persons who were present in the State on Census Night, irrespective of whether they were usually resident in the State at the time of the census"; "The usually resident and present measure is used when analysing topics such as country of citizenship and households and families"; "A non-private household is a group of persons enumerated in a boarding house, hotel, guest house, hostel, barracks, hospital, nursing home, boarding school, religious institution, welfare institution, prison or ship. A non-private household may include usual residents and/or visitors." SAP2022T2T1TOWN22: usually resident population 13,456. SAP2022T15T2TOWN22: households 4,866, broadband 3,809, no internet 583, other 112, not stated 362. SAP2022T11T1TOWN22 to work total 6,284: car driver 2,973, on foot 1,285, work mainly at or from home 469, car passenger 282, bicycle 272, van 270, bus 249, not stated 412; to school, college or childcare total 2,920: car passenger 1,560, on foot 565, bus 126, car driver 113, bicycle 60, not stated 450. SAP2022T11T4TOWN22: 1,202 work from home at least some of the time, 4,286 never, 796 not stated. SAP2022T11T5TOWN22: 682 children under 15 in childcare. SAP2022T3T1TOWN22: 4,596 of 13,965 aged 3 and over can speak Irish. SAP2022T1T1TOWN22 (census-night age table, total 14,412): ages 6 to 12 sum to 1,216, ages 13 to 18 to 957. Gap computation in this session, F1013 total population minus T2T1 usually resident total, joined on town code for all 867 towns (all-towns row excluded): Killarney 956, 6.63 percent; 746 towns above zero, 121 at zero, none below; all towns 3,630,501 against 3,582,870, gap 47,631, 1.31 percent; median town 0.65 percent. Towns of 1,000 or more on census night: 306, top eight by share Dingle-Daingean Uí Chúis 1,671/1,406/265/15.86, Saggart 4,573/3,890/683/14.94, Kilkee 1,214/1,067/147/12.11, Cahirciveen 1,297/1,165/132/10.18, Killarney 14,412/13,456/956/6.63, Buttevant 1,080/1,031/49/4.54, Lehinch 1,018/972/46/4.52, Westport 6,872/6,566/306/4.45. Towns of 5,000 or more: 95, Killarney first, Westport second at 4.45, median 0.82. Towns of 10,000 or more: 54, Killarney first, Galway city and suburbs second at 2.61. Largest gap in people: Dublin city and suburbs 19,941, twelfth of the 95 by share. Irish Rail, Killarney: station address "Fair Hill, Killarney, Co. Kerry", "Eircode V93 HV25", "There is Sheltered bike parking at the station". Killarney National Park (nationalparks.ie): "stretching across 10,000 hectares"; Muckross House "via a well-signposted right turn off the N71, just over 6km south of Killarney town".',
    localProject: 'A gap between two definitions is a measurement, not an answer. The census counts Killarney twice: 14,412 present on census night (the de facto population on the town list) and 13,456 usual residents (the measure used for the resident tables). The learner joins the two tables on the CSO town code for all 867 towns, computes the gap and its share of the census-night count, and ranks within size bands. Killarney\'s 956, 6.63 percent, is the largest share of the 95 towns of 5,000 or more (Westport next at 4.45, median 0.82) and of the 54 of 10,000 or more (Galway city next at 2.61); among the 306 towns of 1,000 or more it is fifth behind Dingle, Saggart, Kilkee and Cahirciveen. 746 towns have a positive gap, 121 a gap of zero, none a negative one; all towns together hold 47,631 more people on census night, 1.31 percent. Dublin has the largest gap in people, 19,941, but is twelfth of the 95 by share, which is why the ranking uses shares. The page then refuses to explain the ranking: Saggart is second and Buttevant sixth with nothing in the tables to say why, the CSO\'s own list of non-private households runs from hotels to hospitals, boarding schools and prisons, and the tables record presence, not purpose. New family for the cluster: a discrepancy between two official measures used as a signal, kept separate from its cause. Swords owns the bare note that two population figures exist.',
    requiredMentions: [
      '956',
      '6.63',
      '4,866',
      '3,809',
      '6,284',
      '1,285',
      '2,973',
      '1,202',
      '2,920',
      '682',
      '4,596',
      'V93 HV25'
    ],
    sources: [
      { claim: 'CSO table F1013, Population Density and Area Size, Census 2022: Killarney, Co Kerry total population 14,412, and the total population of each of the 867 towns used for the gap, including Dingle-Daingean Uí Chúis 1,671, Saggart 4,573, Kilkee 1,214, Cahirciveen 1,297, Buttevant 1,080, Lehinch 1,018, Westport 6,872 and Dublin city and suburbs 1,263,219.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T2T1TOWN22, usually resident population by birthplace or citizenship: Killarney 13,456, and the usually resident total of each of the 867 towns used for the gap, including Dingle 1,406, Saggart 3,890, Kilkee 1,067, Cahirciveen 1,165, Buttevant 1,031, Lehinch 972 and Westport 6,566.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO, Census 2022 Profile 1 background notes: the de facto population is "persons who were present in the State on the night of Sunday, 03 April 2022"; "The usually resident and present measure is used when analysing topics such as country of citizenship and households and families"; a non-private household is "a group of persons enumerated in a boarding house, hotel, guest house, hostel, barracks, hospital, nursing home, boarding school, religious institution, welfare institution, prison or ship" and "may include usual residents and/or visitors".', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-cpp1/censusofpopulation2022profile1-populationdistributionandmovements/backgroundnotes/' },
      { claim: 'CSO Census 2022 tables SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22, SAP2022T3T1TOWN22 and SAP2022T1T1TOWN22, Killarney, Co Kerry: households 4,866, broadband 3,809; to work 6,284 with car driver 2,973, on foot 1,285, mainly at or from home 469, car passenger 282, bicycle 272, van 270, bus 249; to school, college or childcare 2,920 with car passenger 1,560, on foot 565, bus 126, car driver 113, bicycle 60; 1,202 work from home at least some of the time, 4,286 never, 796 not stated; 682 children under 15 in childcare; 4,596 of 13,965 aged 3 and over can speak Irish; 1,216 aged 6 to 12 and 957 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Killarney station: address "Fair Hill, Killarney, Co. Kerry", "Eircode V93 HV25", "There is Sheltered bike parking at the station".', url: 'https://www.irishrail.ie/en-ie/station/killarney' },
      { claim: 'Killarney National Park, national parks site: "stretching across 10,000 hectares, lies Killarney National Park"; Muckross House is reached "via a well-signposted right turn off the N71, just over 6km south of Killarney town".', url: 'https://www.nationalparks.ie/killarney/' }
    ],
    rejectedClaims: [
      'Any cause for Killarney\'s gap, including tourism: the tables used record who was present and who usually lives there, not why anyone was there.',
      'Any explanation for Saggart\'s or Buttevant\'s gap.',
      'Labelling the towns at the top of the list as tourist towns: an impression, not a finding from these tables.',
      'The national park as evidence for the gap: it appears only as a named local fact.',
      'The bare statement that two population figures exist for a town: the Swords page owns it; this page measures and ranks the difference.',
      'The town density and area, the local electoral area figure and the Fexco and MTU points: the County Kerry page owns them.'
    ]
  }
};
