'use strict';
// County Meath (cg- county page, Ireland cluster, Phase 4). Spine: two official
// ways of adding up the same county, one that matches to the person and one
// that falls 7,428 short. Facts read at primary sources on 16 September 2026:
// CSO PxStat tables F1010, F1011, F1015 and F1016 and the Meath summary and
// Profile 5, 7 and 8 press statements; gov.ie's January 2018 LCCS list, where
// NO County Meath school appears; heritageireland.ie for Bru na Boinne and Trim
// Castle; meath.ie. GEOGRAPHY: Drogheda is published across Louth and Meath and
// Kilcock across Kildare and Meath, and no Meath-only split exists for either,
// so neither total is used as a Meath figure; the Louth page owns Drogheda and
// the Kildare page owns Kilcock. Only the 234 residents of the Dublin built-up
// area living on Meath's side are quoted from that cross-tab. No county area or
// density is claimed, because the CSO publishes neither. Dataset measured by
// us: F1011 electoral divisions labelled Meath sum to 213,398 against the
// official 220,826, a gap of 7,428 or 3.4%, while the six local electoral areas
// in F1016 sum to exactly 220,826. Meath County Council lists six datasets, all
// HTML only with no downloadable file, which is why a CSO slice is used instead.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY MEATH', blurb: 'The Royal County, Navan to the Boyne, with a project on two official totals that disagree.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-meath',
  code: 'mth',
  accent: '#33355E',
  accentRationale: 'County Meath: a deep indigo slate from the solver, unused elsewhere in the Ireland cluster and clear of both Irish greens',
  pageType: 'governorate',
  place: {
    name: 'County Meath',
    eyebrow: 'County Meath, Leinster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'County Meath, Ireland',
  title: 'Coding Classes in County Meath | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Meath, from Navan and Ashbourne to Trim and the coast, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Meath, where commuters travel longest in Ireland, built on two official county totals that do not agree.',
  twitterDescription: 'Coding classes across County Meath, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Meath Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Meath, taught live in English.'
  },

  h1: 'Coding classes in County Meath',
  capsuleQ: 'What are the best coding classes in County Meath?',
  capsule: 'Meath grew faster than almost anywhere else in Ireland, up 13% to 220,826 people, and it pays for that growth every morning: its commuters have the longest average journey time in the country at 35.2 minutes, and 19% of them travel an hour or more each way, the highest share anywhere. Education here sits exactly on the national line, with 45% of adults holding a third-level qualification. What a family in Ratoath or Ballivor does not need is another evening in the car. Our classes are live, online and at a fixed weekly hour, for ages 6 to 67, in ability-matched groups of five to ten or one to one. Nothing is charged for the first lesson; after it, a shared place is USD 100 a month and a private one USD 150.',
  lead: 'Here is a question with two official answers. How many people live in County Meath? Add up the six local electoral areas the statistics office publishes and you get 220,826, which matches the county total exactly, to the person. Add up the 87 electoral divisions instead, the smaller units inside those same areas, and you get 213,398. The same census, the same publisher, the same county, and a gap of 7,428 people, about 3.4%, hiding between two ways of slicing it. Nothing is broken. Some of Meath\'s population sits in divisions that carry a different label, because towns like Drogheda and Kilcock straddle county boundaries. But a learner who builds a county figure from the smaller units, as any reasonable person might, is short by more than the population of Kells and will never be told. Finding out which set of parts adds up to the whole, before trusting either, is the habit this page teaches.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Meath.',

  picks: {
    eyebrow: 'Course picks for County Meath',
    h2: 'Four courses for the Royal County',
    intro: 'What matters is what the learner wants to build; the age band is only a guide. Every card below opens with a free lesson and asks for no payment details.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and first programs, where two ways of counting the same pile of things give two different answers.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through the school years, learned on tables where the totals have to be checked rather than assumed.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Two official totals, one gap of 7,428 people, and the reconciliation that explains it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For anyone who builds reports from other people\'s figures: proving a total before it is published.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Fast growth, long journeys',
      intro: 'Meath is one of the youngest and fastest-growing counties in Ireland, and one of the most heavily commuted.',
      body: [
        { kind: 'table', caption: 'County Meath in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '220,826, up 13% or 25,782 since 2016'],
          ['Average age', '36.9 years, up from 35.2 in 2016'],
          ['Aged 65 and over', '27,059, an increase of 30%'],
          ['Average journey to work', '35.2 minutes, the longest of any county'],
          ['Travelling 60 minutes or more', '17,044 people, 19% of commuters, the highest rate in the country'],
          ['Third-level qualifications', 'Almost 62,600 people, 45%, exactly the national rate']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The towns', p: 'Navan is much the largest at 33,886, then Ashbourne at 15,680, the coastal cluster of Laytown, Bettystown, Mornington and Donacarney at 15,642, Ratoath at 10,077, Trim at 9,563, Dunboyne at 7,155 and Kells at 6,608, with 83,430 people living in towns of ten thousand or more.' },
          { h3: 'Where the hour goes', p: 'More than 29% of workers in Ballivor and over 27% in the Laytown coastal towns spend an hour or more getting to work each way. Of 89,635 commuters, 60,834 drove, 4,959 took a bus and just 1,241 a train.' },
          { h3: 'A sliver of Dublin', p: 'Exactly 234 residents of the Dublin city and suburbs built-up area live on the Meath side of the boundary. It is a small number that explains a lot about how county lines and real towns disagree.' }
        ] },
        { kind: 'p', text: 'Two towns cannot be counted as Meath at all. Drogheda is published across Louth and Meath, and Kilcock across Kildare and Meath, and the statistics office offers no Meath-only split for either. Rather than invent one, we leave both out of any Meath total on this page and mention them for what they are: a reminder that where people actually live rarely matches the lines drawn around them.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Meath schools',
      h2: 'A county of 220,826, and no school in the first phase',
      intro: 'We checked the whole of the Department\'s January 2018 list. No County Meath address appears on it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The finding', p: 'When Leaving Certificate Computer Science started in September 2018, not one of the named schools was in Meath, despite the county being among the largest and fastest-growing in the state.' },
          { h3: 'The nearest confusion', p: 'The list does contain a Mullingar school in County Westmeath, which is easy to misread as Meath at a glance. It is not, and we did not count it.' },
          { h3: 'What a class adds', p: 'We teach programming, data work and problem solving weekly and live, never the examination subject and never work that will be submitted for marks.' }
        ] },
        { kind: 'p', text: 'What Meath does have, in unusual quantity, is recorded history. Brú na Bóinne, at Donore, holds the passage tombs of Newgrange, Knowth and Dowth, built around 3200 BC and described by the Office of Public Works as among the most important Neolithic sites in the world, with the largest collection of megalithic art in Western Europe. Trim Castle, at C15 HN90, is the largest Anglo-Norman fortification in Ireland and took Hugh de Lacy and his successors thirty years to build. A county that has been keeping records for five thousand years is a good place to point out that every record was made by somebody, for a purpose, using the categories available to them at the time. That is as true of a census table as it is of a passage tomb.' },
        { kind: 'spec', title: 'Irish in the Meath Gaeltacht', p: 'The Meath Gaeltacht grew from just over 1,850 people to 2,093, and of the 1,989 aged three and over, 1,179 could speak Irish, an increase of 117 or 11%, which the statistics office recorded as the second highest rate of increase in Irish speakers of any Gaeltacht area.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two totals, one county, a gap of 7,428',
      intro: 'This project needs no download beyond two public tables, and it produces a result a learner can check against a published figure, which is the whole point.',
      body: [
        { kind: 'table', caption: 'What we measured in the published tables, read 16 September 2026', head: ['Way of counting', 'Total', 'Against the official 220,826'] , rows: [
          ['The six local electoral areas', '220,826', 'Exact to the person'],
          ['The 87 electoral divisions labelled Meath', '213,398', 'Short by 7,428, or 3.4%'],
          ['Largest electoral area', 'Laytown and Bettystown, 40,660', 'Followed by Ratoath at 39,326 and Navan at 39,294'],
          ['Smallest electoral area', 'Trim, 33,455', 'With Ashbourne at 33,516 and Kells at 34,575'],
          ['Densest electoral division', 'Trim Urban, 2,157.9 per square kilometre', 'Across 0.6 square kilometres']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the smaller units fall short', p: 'Population in divisions attached to cross-boundary towns is labelled with a different county, so a filter on the county name never sees it. The missing people are real; the label is what moved.' },
          { h3: 'Why this matters beyond Meath', p: 'The same failure appears in other counties, which tells you it is structural rather than a one-off error. Any hierarchy of areas can behave this way, and most published ones do somewhere.' },
          { h3: 'The professional move', p: 'Before using any set of parts, add them and compare with the published whole. If they match, you have a reliable structure. If they do not, you have learned something important for free.' }
        ] },
        { kind: 'callout', h3: 'Why the county\'s own data could not be used here', p: 'Meath County Council lists six datasets on the national portal: conservation areas, protected structures, the road network, tree preservation orders and two boundary sets. Every one of them is registered as a web page rather than a downloadable file, so there is nothing to open, clean or measure. That is a perfectly normal state of affairs and worth knowing before a student plans around it, which is why we checked first and used the national tables instead. The lesson for a learner is the same either way: verify that a source exists in a usable form before building anything on it.' },
        { kind: 'p', text: 'The finished piece is short: two totals, the gap between them, an explanation of where it comes from, and a recommendation about which set of parts to use for county work. Students who have written that once stop trusting sums they have not checked.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Making totals behave',
      h2: 'Five things to do with any hierarchy of areas',
      intro: 'Counties, regions, departments, product categories, school years: anything that nests inside something else behaves like this.',
      body: [
        { kind: 'table', caption: 'Working with nested areas or categories', head: ['Step', 'What you do', 'What it protects you from'], rows: [
          ['Add the parts', 'Sum the level below and compare to the published whole', 'Assuming a hierarchy is complete'],
          ['Find the strays', 'List the units that carry an unexpected label', 'Losing people, sales or pupils quietly'],
          ['Prefer the level that reconciles', 'Use the layer whose sum matches, and say why you chose it', 'Building on the wrong layer'],
          ['Name the boundary cases', 'Record which units cross a line and what you did about them', 'Silent double counting or omission'],
          ['Publish the check', 'Put the reconciliation in the write-up, not just the result', 'Nobody being able to verify your work']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Counting a pile two ways, getting two answers, and working out which count included the things on the floor.' },
          { h3: 'Teenagers', p: 'The two real tables in Python: sum both levels, find the gap, explain it and recommend a level for county work.' },
          { h3: 'Adults', p: 'The same reconciliation applied to a work hierarchy, where mismatches usually mean a category nobody maintains.' }
        ] },
        { kind: 'p', text: 'We are not connected with Meath County Council, the Office of Public Works or any school mentioned here. Census figures are the Central Statistics Office\'s for 2022, published under its own open licence, and the two sums above are ours, run against the published tables and reported with the gap rather than tidied away.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'C15, the Boyne and a county that leaves early',
      intro: 'The practical texture of Meath life, which is what decides whether a weekly class actually happens.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One routing key at the centre', p: 'Both Meath County Council at Buvinda House, Dublin Road, Navan, C15 Y291, and Trim Castle at C15 HN90 carry the same routing key, which covers much of the county\'s middle.' },
          { h3: 'Who lives here', p: 'Non-Irish citizens are 11% of the county: Polish at 3,942, Romanian at 3,174, Lithuanian at 3,033 and UK at 2,767, a more evenly spread mix than most counties show.' },
          { h3: 'Working from home', p: '32,539 people worked from home at least one day a week, which is 32% of the workforce, exactly the national figure and a useful counterweight to those long journeys.' }
        ] },
        { kind: 'spec', title: 'Why the longest commute in Ireland changes the maths', p: 'When the average journey is 35.2 minutes and nearly one worker in five travels an hour or more each way, an evening class held anywhere but the house costs a family the guts of two hours. Online, that time goes back into practice, which is where progress actually comes from.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting twice to reconciling properly',
    intro: 'Ages are a rough guide. The free lesson is what decides where somebody starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two counts, one pile', p: 'Programs that count things more than one way and notice when the answers differ.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Totals in tables', p: 'Adding up columns in real files and checking the answer against something published.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Reconciliation', p: 'Summing two levels of a hierarchy, explaining the gap and choosing which level to trust.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Checks in the pipeline', p: 'Reconciliation written as code that runs before a report is circulated.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will add these up without complaint. Why should a Navan teenager check the sum?',
    intro: 'Because both totals are correct arithmetic, and only one of them answers the question that was asked.',
    p1: 'Give an AI tool the electoral divisions and ask for the county population. It will add the column and return 213,398, which is a perfectly accurate sum of the rows it was given. It has no way to know that some of Meath\'s people are recorded under divisions labelled with another county, or that a published county total of 220,826 exists to check against. The arithmetic is not the weak point; the framing is.',
    p2: 'A learner who reconciles by habit catches this in seconds, because their first instinct after summing anything is to ask what the answer should be. That instinct transfers to budgets, stock counts, exam entries and every other total somebody will one day ask them to defend.',
    closer: 'So a Meath child learning to code in 2026 is learning the thing that survives every change of tool: check the number against something independent before you believe it, and say where the difference came from.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Navan, Ashbourne, Trim or the coast road',
    intro: 'This county empties towards Dublin every morning and fills again at night, which makes the hour a class starts the most important thing about it.',
    cells: [
      { h3: 'The journey is already done', p: 'A learner in Ballivor joins at the same second as one in Bettystown, and nobody adds a car journey to a day that already has one.' },
      { h3: 'School words as spoken here', p: 'Junior Cycle, Transition Year, fifth and sixth year: the teacher uses the terms the family uses, so nothing needs translating.' },
      { h3: 'A genuine first lesson', p: 'Teaching, not a sales call, finishing with a clear view of level and course. No card is asked for at any point.' },
      { h3: 'Sorted by level', p: 'Five to ten learners who can move at one pace, gathered from Meath and other countries so that every stage has a workable hour.' },
      { h3: 'Weekly and predictable', p: 'Two lessons in most weeks, around eight a month, at one fixed hour, with mid-terms and exam weeks planned around in advance.' },
      { h3: 'Ireland changes clocks, India does not', p: 'That leaves our teachers four and a half hours ahead in the Irish summer and five and a half in winter, which suits Meath evenings well.' }
    ],
    spec: { title: 'For the households already home', p: '32,539 people here work from home at least one day a week, the same share as the country as a whole. Where a parent is home, an after-school slot works; where both commute, the later evening groups fill first, and both exist.' }
  },

  fees: {
    h2: 'What classes cost in County Meath',
    intro: 'The whole price list, in three lines.',
    first: 'One complete lesson, free, ending with a level named and a course suggested.',
    group: 'A month of classes, normally eight, shared with five to ten learners of similar ability.',
    private: 'That same month of classes, with the teacher attending to one learner only.',
    closer: 'We bill monthly in US dollars on the one rate that applies outside India, which is why there is no euro list and why Trim pays exactly what Dunboyne pays. Nothing is charged until the free lesson has produced a course and a weekly hour, and the pricing page sets out pauses, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Six reviews left on Google by our families, unedited',

  book: {
    h2: 'Tell us about the learner',
    intro: 'We choose the first task to suit: counting a pile two ways for a young child, a first table opened in code for the middle years, or the reconciliation puzzle for a teenager.',
    success: 'Thank you. Somebody will ring you about your County Meath class shortly.'
  },

  faq: {
    h2: 'County Meath coding class questions',
    intro: 'What families here ask before they book.',
    items: [
      { q: 'How many people live in County Meath?', a: 'Census 2022 counted 220,826, up 13% or 25,782 since 2016, which was among the fastest growth rates in the country.' },
      { q: 'Why do two official totals disagree?', a: 'The six local electoral areas add to exactly 220,826, while the 87 electoral divisions labelled Meath add to 213,398. The difference of 7,428 people sits in divisions attached to towns that cross county boundaries.' },
      { q: 'Did any Meath school offer Leaving Certificate Computer Science from the start?', a: 'No. No County Meath address appears on the January 2018 first-phase list, which is a checked result rather than a gap in our reading. It says nothing about where the subject is taught today.' },
      { q: 'Is Drogheda counted as a Meath town?', a: 'Not by us. Its built-up area is published across Louth and Meath with no Meath-only split available, so we leave it out of Meath totals rather than guess at a share.' },
      { q: 'What is the Meath data project?', a: 'Students add up two levels of official geography, find that one matches the county total exactly and the other falls 7,428 short, then explain the gap and recommend which level to use.' },
      { q: 'Does the county publish open data?', a: 'It lists six datasets, but each is registered as a web page rather than a downloadable file, so there is nothing to analyse. We checked before planning the project, which is itself the lesson.' },
      { q: 'What hours do classes run?', a: 'Late afternoons, evenings and weekend mornings, with later slots popular here because of the commute. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders classroom in Meath?', a: 'None, and we take care never to suggest one. Teaching happens live over video, with no premises anywhere in Ireland. A learner needs a laptop or desktop, sound that works and a connection that holds, and the number shown belongs to India.', boiler: true },
      { q: 'What do County Meath coding classes cost?', a: 'The opening lesson is free. Continuing means USD 100 monthly for a shared place, which brings two live lessons a week and about eight a month with five to ten learners, or USD 150 monthly for the same schedule taught privately. Course, format and hour are settled first.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten. Grouping follows ability, working pace and what someone is aiming at, not age or address. If nothing suitable meets at an hour that works, we teach one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The counties either side',
    html: 'Meath shares Drogheda with <a class="cg-inline-link" href="/coding-classes-in-county-louth">County Louth</a> and Kilcock with <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a>, both of which have pages here, and the city its commuters head for is covered at <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. For choosing between online schools, see <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>. The <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a> gathers everything.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Meath and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-louth', label: 'County Louth' },
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-mth .cg-hero-grid { align-items: start; gap: clamp(1.07rem, 3.5vw, 2.95rem); }
.cg-root.cg-mth .cg-hero h1 { font-weight: 700; letter-spacing: -0.0205em; line-height: 1.075; }
.cg-root.cg-mth .cg-capsule { border-left: 8px solid var(--cg-accent); padding-left: 1.07rem; }
.cg-root.cg-mth .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mth .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.017em; }
.cg-root.cg-mth .cg-grid-3 { gap: clamp(0.98rem, 2.62vw, 2.08rem); }
.cg-root.cg-mth .cg-table caption { letter-spacing: 0.042em; font-weight: 700; }
.cg-root.cg-mth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mth .cg-table th { letter-spacing: 0.018em; }
.cg-root.cg-mth .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.88rem; }
.cg-root.cg-mth .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'County Meath, Census 2022 (CSO): population 220,826, up 13 percent or 25,782 since 2016, with 110,838 female and 109,988 male, 99 males for every 100 females; average age 36.9, up from 35.2; those aged 65 and over up 30 percent to 27,059; 32,539 people working from home at least one day a week, 32 percent of the workforce, the same as nationally; non-Irish citizens 11 percent, Polish 3,942, Romanian 3,174, Lithuanian 3,033, UK 2,767; 89,635 people travelling to work, 60,834 driving, 4,959 by bus, 1,241 by train, 5,023 walking and 634 cycling; average journey time 35.2 minutes against 34.6 in 2016, the longest of any county, with 17,044 people, 19 percent, travelling 60 minutes or more, the highest rate in the country, including more than 29 percent of commuters in Ballivor and more than 27 percent in Laytown, Bettystown, Mornington and Donacarney; third-level qualifications almost 62,600, 45 percent, the same as the national rate, and 1,003 PhD holders, 3 percent of the national total; the Meath Gaeltacht rose from just over 1,850 to 2,093 people, with 1,179 of the 1,989 aged three and over able to speak Irish, an increase of 117 or 11 percent, the second highest rate of increase in Gaeltacht areas. Towns (F1015): Navan 33,886, Ashbourne 15,680, Laytown-Bettystown-Mornington-Donacarney 15,642, Ratoath 10,077, Trim 9,563, Dunboyne 7,155, Kells 6,608, with 83,430 people in towns of 10,000 or more (F1010). Cross-boundary towns not used as Meath figures: Drogheda across Louth and Meath at 44,135, Kilcock across Kildare and Meath at 8,674. F1010 also records exactly 234 residents of the Dublin city and suburbs built-up area living in Meath County Council. Local electoral areas (F1016): Laytown-Bettystown 40,660, Ratoath 39,326, Navan 39,294, Kells 34,575, Ashbourne 33,516 and Trim 33,455, summing exactly to 220,826. Gov.ie, 4 January 2018: no County Meath school appears on the first-phase Leaving Certificate Computer Science list. Office of Public Works: Bru na Boinne at Donore holds Knowth, Newgrange and Dowth, built circa 3200 BC, among the most important Neolithic sites in the world with the largest collection of megalithic art in Western Europe; Trim Castle, C15 HN90, is the largest Anglo-Norman fortification in Ireland and took thirty years to build. Meath County Council: Buvinda House, Dublin Road, Athlumney, Navan, C15 Y291.',
    localProject: 'Two official ways of adding up one county. Using CSO tables published under the office\'s own Creative Commons Attribution licence, the six local electoral areas in F1016 sum to exactly 220,826, matching the county total in F1010 to the person, while the 87 electoral divisions labelled Meath in F1011 sum to 213,398, a shortfall of 7,428 people or 3.4 percent. The missing population sits in divisions attached to cross-boundary towns whose labels carry a different county, so a filter on the county name never sees them. The densest Meath-labelled division is Trim Urban at 2,157.9 persons per square kilometre across 0.6 square kilometres. The same shortfall pattern appears in other counties, so it is taught as a structural property of nested geographies rather than an error. Meath County Council\'s own six datasets on the national portal are each registered as a web page with no downloadable file, which is why the project uses national tables and why checking a source before planning around it is part of the lesson.',
    requiredMentions: [
      '220,826',
      '213,398',
      '7,428',
      '33,886',
      '15,680',
      '15,642',
      '10,077',
      '83,430',
      '35.2 minutes',
      '27,059',
      '2,093',
      'C15 Y291',
      '40,660'
    ],
    sources: [
      { claim: 'CSO summary results, Meath: "the population of Meath grew by 13% to 220,826, which means the number of people in the county rose by 25,782"; average age 36.9 against 35.2 in 2016; those aged 65 and over up 30% to 27,059; "In Meath, 32,539 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 32% of the workforce. The national figure was 32%."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsmeath/' },
      { claim: 'CSO Profile 7, Meath: 89,635 travelling to work, 60,834 driving, 4,959 by bus, 1,241 by train; "an average journey time of 35.2 minutes ... This meant that Meath commuters had the longest average journey time"; 17,044 people, 19%, travelling 60 minutes or more, "the highest in the country", including more than 29% in Ballivor.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingmeath' },
      { claim: 'CSO Profile 5, Meath: non-Irish citizens 11% of the county, "the largest group were Polish citizens (3,942 people) followed by Romanian citizens (3,174), Lithuanian (3,033) and the UK (2,767)".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionmeath' },
      { claim: 'CSO Profile 8, Meath: third-level qualifications almost 62,600, 45%, "the same as the national rate of 45%"; 1,003 PhD holders; the Meath Gaeltacht rising to 2,093 with 1,179 Irish speakers, up 117 or 11%, "the second highest rate of increase in Irish speakers in Gaeltacht areas".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationmeath' },
      { claim: 'CSO table F1015: Navan 33,886, Ashbourne 15,680, Laytown-Bettystown-Mornington-Donacarney 15,642, Ratoath 10,077, Trim 9,563, Dunboyne 7,155, Kells 6,608; Drogheda published across Louth and Meath at 44,135 and Kilcock across Kildare and Meath at 8,674.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'CSO table F1010: Meath County Council total 220,826; 83,430 people in towns of 10,000 and over; exactly 234 residents of the Dublin city and suburbs built-up area living in Meath County Council.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'CSO table F1016: Laytown-Bettystown 40,660, Ratoath 39,326, Navan 39,294, Kells 34,575, Ashbourne 33,516 and Trim 33,455, summing exactly to 220,826.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO table F1011: the 87 electoral divisions labelled Meath sum to 213,398 against the official 220,826, a gap of 7,428; the densest is Trim Urban at 2,157.9 persons per sq km.', url: 'https://data.cso.ie/table/F1011' },
      { claim: 'Department of Education, 4 January 2018: no County Meath school appears in the first-phase Leaving Certificate Computer Science list, which does include a Mullingar school in County Westmeath.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Office of Public Works, Bru na Boinne: the passage tombs of Knowth, Newgrange and Dowth "were built circa 3200BC", are "among the most important Neolithic sites in the world" and "contain the largest collection of megalithic art in Western Europe".', url: 'https://heritageireland.ie/places-to-visit/bru-na-boinne-visitor-centre-newgrange-knowth-and-dowth/' },
      { claim: 'Office of Public Works, Trim Castle: "the castle is the largest Anglo-Norman fortification in Ireland. Hugh de Lacy and his successors took 30 years to build it"; eircode C15 HN90.', url: 'https://heritageireland.ie/places-to-visit/trim-castle/' },
      { claim: 'Meath County Council: "Buvinda House, Dublin Road, Athlumney, Navan, Co. Meath, C15 Y291"; its six datasets on the national portal are each listed in HTML form with no downloadable file.', url: 'https://www.meath.ie/council/contact-us' }
    ],
    rejectedClaims: [
      'Using Drogheda\'s 44,135 or Kilcock\'s 8,674 as Meath figures: both are published across two counties with no Meath-only split available.',
      'A county area or density figure: the CSO publishes neither for Meath, and the electoral division sum undercounts, so no derived density is printed.',
      'Any claim about which Meath schools teach Leaving Certificate Computer Science today: no current official list exists.',
      'Counting the Mullingar school on the 2018 list as a Meath school: it is in County Westmeath.',
      'Hill of Tara, Loughcrew or Slane facts: not read at source in this research, so not used.',
      'Anything owned by the Louth, Kildare, Wexford, Carlow or Laois county pages, or by the city pages.'
    ]
  }
};
