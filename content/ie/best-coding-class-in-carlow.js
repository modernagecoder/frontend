'use strict';
// Carlow town (cg- town page, Ireland cluster, Phase 7). Facts from the CSO
// Census 2022 town tables published for "Carlow, Counties Carlow & Laois", read
// 18 September 2026, the Irish Rail station page for Carlow and VISUAL Carlow's
// own site. Spine: write the recipe, not the number. Every figure on the page is
// published with the five things needed to reproduce it, the dataset code, the
// exact label string, the rows used, the date read and the arithmetic, and the
// page shows what an unreproducible claim looks like beside it. New family for
// the cluster: provenance and reproducibility. County Carlow owns the
// cross-county town trap and the county figures, so the two-county label is
// stated as a fact only.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'CARLOW TOWN', blurb: 'A number nobody can re-derive is a rumour. Every figure on this Carlow page carries the recipe that produced it.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-carlow',
  code: 'crl',
  accent: '#2E4A2E',
  accentRationale: 'Carlow town: a dark forest green from the solver, apart from the County Carlow accent and the Kilkenny and Laois pages next to it',
  pageType: 'city',
  place: {
    name: 'Carlow',
    eyebrow: 'Carlow town, Carlow and Laois',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Carlow' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-carlow', name: 'County Carlow' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Carlow', href: '/coding-classes-in-county-carlow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Carlow town, County Carlow, Ireland',
  title: 'Best Coding Class in Carlow | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Carlow learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Carlow town, with a project on publishing figures other people can actually reproduce.',
  twitterDescription: 'Coding and AI classes for Carlow, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Carlow',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Carlow town, taught live in English.'
  },

  h1: 'Coding classes in Carlow',
  capsuleQ: 'What is the best coding class in Carlow?',
  capsule: 'Carlow town holds 27,013 usual residents in the census town tables, in 10,053 households, 8,015 of which report broadband. Our lessons come to those addresses over video: a teacher present in real time, twice in most weeks, with five to ten learners at one level or with a single learner, for ages six to sixty-seven. The opening lesson is free of charge, after which a shared place is USD 100 a month and private teaching is USD 150.',
  lead: 'Here is a sentence about this town: around eighty per cent of Carlow has broadband. Nobody can check it. Which Carlow, the built-up area or the county? Which year? Households or people? Which source? Here is the same claim written so that anybody can: in CSO table SAP2022T15T2TOWN22, under the label Carlow, Counties Carlow and Laois, read on 18 September 2026, the broadband row holds 8,015 and the total row 10,053, and 8,015 divided by 10,053 is 79.7% of households. The second version takes four times as long to write and can be re-derived by a stranger in five minutes. Every figure on this page is written the second way, and the project below is about making that a habit rather than a chore.',
  wa: 'Hello Modern Age Coders, I want to book a free coding lesson for a learner in Carlow.',

  picks: {
    eyebrow: 'Course picks for Carlow',
    h2: 'Where Carlow learners begin',
    intro: 'Choose on age and interest. The course teacher takes the opening lesson and decides the level from it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects the learner can explain step by step, which is where showing your work starts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with code that is saved, named and re-run rather than typed once and lost.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Working from public data sources with a record of exactly what was downloaded and when.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults automating reports that somebody else will have to reproduce next quarter.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Write the recipe, not the number',
      intro: 'The five parts a figure needs before anybody else can check it, filled in for the Carlow broadband share.',
      body: [
        { kind: 'table', caption: 'A reproducible figure, part by part', head: ['Part of the recipe', 'For this figure'], rows: [
          ['Source dataset', 'CSO Census 2022 table SAP2022T15T2TOWN22, household internet access'],
          ['Exact selector', 'The area label Carlow, Counties Carlow & Laois, which is not the same as Carlow the county'],
          ['Rows used', 'Broadband 8,015 and Total 10,053, with no other row touched'],
          ['Date read', '18 September 2026'],
          ['Arithmetic', '8,015 divided by 10,053, expressed as a percentage and rounded to one decimal: 79.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the selector is its own line', p: 'The town tables carry nineteen labels containing the word Carlow, from Hacketstown to Graiguenamanagh-Tinnahinch. A recipe that says Carlow has not identified anything; one that quotes the label string exactly has.' },
          { h3: 'Why the date is its own line', p: 'Published tables get revised, replaced and renumbered. A figure with a read date can be compared honestly against a later version, and one without it cannot be defended when the source moves.' },
          { h3: 'Why the arithmetic is written out', p: 'Anybody can divide 8,015 by 10,053. What they cannot guess is whether we used households or people, included the not-stated row in the denominator, or rounded before dividing. Writing it removes all three questions.' }
        ] },
        { kind: 'callout', h3: 'The number that cannot be re-derived', p: 'Every organisation has a handful of figures that circulate for years, in slide decks and on websites, with nobody able to say where they came from. They survive because they are convenient and because checking them is somebody else\'s job. They then appear in a proposal and somebody asks. The defence is not more rigour at the moment of publication; it is the recipe written down at the moment of calculation, when the source, the filter and the date are still on screen and cost nothing to record.',
        },
        { kind: 'p', text: 'The learner\'s project produces two outputs for each figure they compute: the figure, and a short recipe block naming the source, the selector, the rows, the date and the arithmetic. A second person, given only the recipe, has to arrive at the same number without asking a question. That is the test, and it is the same test that makes code readable, makes an experiment repeatable, and makes a claim about a town something other than a rumour with a decimal point.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Carlow town in the census',
      h2: 'The town, with every figure sourced',
      intro: 'All of these come from Census 2022 tables published for the built-up area labelled Carlow, Counties Carlow and Laois, read on 18 September 2026.',
      body: [
        { kind: 'table', caption: 'Carlow town, Census 2022, with the table each figure comes from', head: ['Measured', 'Count', 'Table'], rows: [
          ['Usual residents', '27,013', 'T2T1'],
          ['Households', '10,053', 'T15T2'],
          ['Households reporting broadband', '8,015', 'T15T2'],
          ['Working residents in the travel table', '11,390', 'T11T1'],
          ['Residents travelling to school, college or childcare', '7,429', 'T11T1'],
          ['Children under fifteen in childcare', '1,617', 'T11T5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Travel to work', p: 'From T11T1: of 11,390 working residents, 6,033 drive, 1,212 walk, 910 give home as their main answer, 724 go as a car passenger, 719 travel by van, 256 cycle, 169 take a train and 155 a bus, with 1,118 not stated.' },
          { h3: 'Travel to education', p: 'From the same table: of 7,429 journeys to school, college or childcare, 3,626 are as a car passenger, 1,954 on foot, 449 by bus, 264 driving and 212 by bicycle, with 794 not stated.' },
          { h3: 'Working from home', p: 'From T11T4, a different question: 2,342 working residents do at least some work at home, 7,359 never do and 1,689 did not state.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Carlow station as Railway Road, Carlow, Co. Carlow, Eircode R93 C2C4, with the station and its booking office staffed from 05:45 to 22:00 on weekdays including bank holidays, shorter hours at weekends, toilets and an enclosed waiting room. Read from the station page on 18 September 2026.' }
      ]
    },
    {
      id: 'recipes', tint: 'tint', eyebrow: 'The rest of the recipes',
      h2: 'Where each derived figure on this page came from',
      intro: 'Anything on this page that is not a published count is listed here with the division that produced it. There are four.',
      body: [
        { kind: 'table', caption: 'Our arithmetic, itemised', head: ['Figure', 'Rows used', 'Result'], rows: [
          ['Share of households reporting broadband', '8,015 of 10,053, table T15T2', '79.7%'],
          ['Share of working residents who drive', '6,033 of 11,390, table T11T1', '53.0%'],
          ['Share of education journeys made as a car passenger', '3,626 of 7,429, table T11T1', '48.8%'],
          ['Share of working residents who never work from home', '7,359 of 11,390, table T11T4', '64.6%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Four, and no more', p: 'Everything else on the page is a count exactly as the CSO printed it. Keeping derived figures to a short, listed set is itself a discipline: the shorter the list, the easier it is for a reader to audit the whole page.' },
          { h3: 'Denominators included in full', p: 'Each share is taken over the table\'s own total, including rows recorded as not stated. Where a page instead excludes non-response, that is a different figure and has to say so.' },
          { h3: 'The label, one more time', p: 'All four use the built-up area labelled Carlow, Counties Carlow & Laois. None of them is a figure for County Carlow, which our county page handles with its own sources.' }
        ] },
        { kind: 'spec', title: 'The arts centre', p: 'VISUAL, the centre for contemporary art and the George Bernard Shaw Theatre, gives its address as Old Dublin Road, Carlow, R93 A3K1, with galleries open Tuesday to Saturday from 11am to 5.30pm and Sunday from 2pm to 5pm, closed Mondays, and states free admission to gallery exhibitions. We have no connection with it.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Carlow',
      h2: 'How the teaching works',
      intro: 'A weekly hour, a live teacher, and work that the learner can explain afterwards.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger learners', p: 'Block coding and first projects, where saying what a program does is part of finishing it.' },
          { h3: 'Secondary years', p: 'Python, web projects and AI work through the junior and senior cycles, with code kept, named and revisited.' },
          { h3: 'Adults', p: 'Data, Python and AI for adults, including the 2,342 working residents already doing some work at home.' }
        ] },
        { kind: 'p', text: 'Irish Rail and VISUAL are named from their own published pages, read on 18 September 2026, and neither is connected with us, nor is Carlow County Council. The census counts here are Central Statistics Office figures for the built-up area, printed unchanged, and the four derived figures are listed with their rows in the table above. If any figure on this page cannot be re-derived from what is written beside it, that is a fault worth telling us about, because the whole point of the page is that it can.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From getting an answer to showing your work',
    intro: 'Ages are a guide; the opening lesson decides the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Explain what it does', p: 'Block projects the learner can talk through, step by step, to somebody who did not watch.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Keep the code', p: 'Saving, naming and re-running work in Python instead of starting from scratch each week.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Cite the source', p: 'Working from public datasets and recording what was taken, from where and when.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reproducible reporting', p: 'Building analysis a colleague can rerun months later and get the same answer.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask a model for a statistic about Carlow',
    intro: 'The number arrives. The recipe does not.',
    p1: 'A generated figure about a town usually comes without a table name, without the area label it applies to and without a date. Sometimes it is right. The problem is that a reader cannot tell which times those are, and neither can the person who pasted it into a document, because nothing in the answer can be followed back to a source.',
    p2: 'A learner trained on this project asks for the recipe with the number, and if it does not come, goes and builds it. That is slower, and it is the difference between a figure you can defend in a meeting and one you have to withdraw in the next one.',
    closer: 'The scarce skill is not producing numbers. It is producing numbers that somebody else can check without asking you.',
    blogAnchor: 'why coding is still worth the time'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practicalities for Carlow households',
    intro: 'Six lines.',
    cells: [
      { h3: 'Live teaching', p: 'A teacher on the call for the whole lesson, responding to what the learner is building.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at one level, joining from Carlow, elsewhere in Ireland and abroad.' },
      { h3: 'Twice most weeks', p: 'About eight lessons a month, at an hour agreed at the start and kept.' },
      { h3: 'Term aware', p: 'Mid-terms, holidays and exam weeks are planned in rather than worked around later.' },
      { h3: 'What is needed', p: 'A computer with a keyboard, sound that works, and a connection that carries video.' },
      { h3: 'Private teaching', p: 'Where nothing at the right level meets at a workable hour, the course runs one to one.' }
    ],
    spec: { title: 'Everything written down', p: 'The course, the level, the hour and the fee are all settled in writing after the opening lesson, for the same reason the figures on this page carry their sources: nobody should have to rely on memory.' }
  },

  fees: {
    h2: 'Carlow class fees',
    intro: 'Three lines, and nothing hidden behind them.',
    first: 'A full opening lesson, taught and assessed, at no charge.',
    group: 'A month in an ability group of five to ten learners, about eight live lessons.',
    private: 'A month of private teaching on the same weekly pattern.',
    closer: 'Billing is monthly and in US dollars on the single rate for families outside India, so a Carlow household sees exactly what a household in Kilkenny or Waterford sees, with no euro list anywhere. The first charge comes after the opening lesson has settled a course and an hour, and the pricing page covers breaks, missed weeks and switching between group and private teaching.'
  },

  reviewsH2: 'Six of our families, quoted from Google as written',

  book: {
    h2: 'Book a free Carlow lesson',
    intro: 'Tell us an age and an interest and the first hour is built from that, whether it becomes a game, a small program or a figure traced back to the table it came from.',
    success: 'Thank you. We will be in touch about the Carlow lesson shortly.'
  },

  faq: {
    h2: 'Carlow coding class questions',
    intro: 'What Carlow families ask us first.',
    items: [
      { q: 'How many people live in Carlow town?', a: 'Census 2022 table T2T1 records 27,013 usual residents under the label Carlow, Counties Carlow and Laois, read on 18 September 2026, with 10,053 households in table T15T2. County figures are a different thing entirely and live on our County Carlow page.' },
      { q: 'What is the Carlow data project?', a: 'Learners publish every figure with a five-part recipe, the source dataset, the exact area label, the rows used, the date read and the arithmetic, then hand the recipe to somebody else and check that they reach the same number without asking a question.' },
      { q: 'Why does the area label matter so much?', a: 'Because the town tables carry nineteen labels containing the word Carlow. A figure attributed to Carlow could belong to any of them, and only the exact label string identifies the area a number describes.' },
      { q: 'How do people in Carlow town travel to work?', a: 'From table T11T1: of 11,390 working residents, 6,033 drive, 1,212 walk, 910 give working mainly at or from home, 724 travel as a car passenger, 719 by van, 256 cycle, 169 take a train and 155 a bus, with 1,118 not stated.' },
      { q: 'When are lessons held?', a: 'Late afternoons, evenings and weekend mornings. Our teachers work from India, which runs ahead of Irish clocks by four and a half hours in summer and five and a half in winter, and the weekly hour is agreed in the opening lesson.' },
      { q: 'Do you teach adults in Carlow?', a: 'Yes, to the age of sixty-seven and from no experience at all. The opening lesson places an adult with a group at the same stage or with a teacher one to one.' },
      { q: 'Will we get anything in writing?', a: 'Yes. After the opening lesson we set out the course, the level, the weekly hour and the fee in writing before anything is charged.' },
      { q: 'Is there a Modern Age Coders classroom in Carlow?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Carlow cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Carlow',
    html: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-county-carlow">County Carlow</a>, with <a class="cg-inline-link" href="/coding-classes-in-county-kilkenny">County Kilkenny</a> and <a class="cg-inline-link" href="/coding-classes-in-county-laois">County Laois</a> alongside it inside <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Online schools are set side by side on our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a>, and every page in this cluster is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Carlow, Leinster and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-carlow', label: 'County Carlow' },
    { href: '/coding-classes-in-county-kilkenny', label: 'County Kilkenny' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-crl .cg-hero-grid { align-items: start; gap: clamp(1.18rem, 3.14vw, 2.64rem); }
.cg-root.cg-crl .cg-hero h1 { font-weight: 700; letter-spacing: -0.0179em; line-height: 1.068; }
.cg-root.cg-crl .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1.12rem; }
.cg-root.cg-crl .cg-eyebrow { letter-spacing: 0.172em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-crl .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.0133em; }
.cg-root.cg-crl .cg-grid-3 { gap: clamp(1.05rem, 2.77vw, 2.14rem); }
.cg-root.cg-crl .cg-table caption { letter-spacing: 0.038em; font-weight: 700; }
.cg-root.cg-crl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-crl .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-crl .cg-ladder-col { border-bottom: 6px solid var(--cg-accent); padding-bottom: 1.01rem; }
.cg-root.cg-crl .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Carlow town, the built-up area published as "Carlow, Counties Carlow & Laois", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T2T1TOWN22: usual residents 27,013, born in Ireland 20,470, United Kingdom 1,123. SAP2022T15T2TOWN22: households 10,053, broadband 8,015, other 191, none 760, not stated 1,087. SAP2022T11T1TOWN22 to work total 11,390: car driver 6,033, on foot 1,212, not stated 1,118, work mainly at or from home 910, car passenger 724, van 719, bicycle 256, train DART or Luas 169, bus 155, motorcycle 49, other including lorry 45; to school, college or childcare total 7,429: car passenger 3,626, on foot 1,954, not stated 794, bus 449, car driver 264, bicycle 212, train 70, van 15, motorcycle 12, other 12, work mainly at or from home 21. SAP2022T11T4TOWN22: 11,390 working persons, 2,342 work from home at least some of the time, 7,359 never, 1,689 not stated. SAP2022T11T5TOWN22: 1,617 children under 15 in childcare, 666 aged 0 to 4 and 951 aged 5 to 14. SAP2022T8T1TOWN22: at work 11,492, students 2,818, retired 2,835, total aged 15 and over 21,836. The same town dimension carries nineteen labels containing the word Carlow, among them Hacketstown, Clonegall, Kildavin, Rathvilly, Tullow, Ballon, Myshall, Borris, Muinebeag (Bagenalstown), Leighlinbridge, Bunclody, Counties Wexford & Carlow and Graiguenamanagh-Tinnahinch, Counties Kilkenny & Carlow. Our four derived figures: 8,015 of 10,053 households on broadband is 79.7 percent; 6,033 of 11,390 working residents driving is 53.0 percent; 3,626 of 7,429 education journeys as a car passenger is 48.8 percent; 7,359 of 11,390 never working from home is 64.6 percent. Irish Rail, Carlow station: "Railway Road Carlow Co. Carlow", "Eircode R93 C2C4", staffing and booking office "Monday to Friday(including bank holidays): 05:45 - 22:00", "Saturday : 06:50 - 20:30", "Sunday : 09:30 - 20:30". VISUAL Carlow: "VISUAL Centre for Contemporary Art & The George Bernard Shaw Theatre", "Old Dublin Road, Carlow, R93 A3K1", "Monday Closed Tuesday - Saturday 11am - 5.30pm Sunday 2pm - 5pm", "Free admission to gallery exhibitions".',
    localProject: 'Write the recipe, not the number. The page contrasts an unreproducible claim, around eighty per cent of Carlow has broadband, with the same claim written so anybody can check it: CSO table SAP2022T15T2TOWN22, area label "Carlow, Counties Carlow & Laois", read 18 September 2026, broadband row 8,015 and total row 10,053, giving 79.7 percent of households by our division. The five parts of a recipe are set out as source dataset, exact selector, rows used, date read and arithmetic, with a reason for each: the town dimension carries nineteen labels containing the word Carlow, so a selector that says only Carlow identifies nothing; published tables are revised, so a read date makes a later comparison honest; and the arithmetic line answers whether households or people were counted, whether the not-stated row is in the denominator, and whether rounding happened before or after dividing. A dedicated section itemises every derived figure on the page, four in total, with its rows and result, so a reader can audit the whole page rather than one example. The learner produces figure plus recipe for everything they compute and hands the recipe to a second person, who must reach the same number without asking a question. New family for the cluster: provenance and reproducibility.',
    requiredMentions: [
      '27,013',
      '10,053',
      '8,015',
      '11,390',
      '6,033',
      '7,429',
      '3,626',
      '1,954',
      '2,342',
      '1,617',
      'R93 C2C4',
      'R93 A3K1'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T15T2TOWN22, household internet access, area label "Carlow, Counties Carlow & Laois", read 18 September 2026: broadband 8,015, other 191, no internet 760, not stated 1,087, total 10,053.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, same area label: to work 11,390 with car driver 6,033, on foot 1,212, mainly at or from home 910, car passenger 724, van 719, bicycle 256, train 169, bus 155, not stated 1,118; to school, college or childcare 7,429 with car passenger 3,626, on foot 1,954, bus 449, car driver 264, bicycle 212, not stated 794.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, same area label: usual residents 27,013, born in Ireland 20,470; 2,342 work from home at least some of the time, 7,359 never, 1,689 not stated; 1,617 children under 15 in childcare; at work 11,492, students 2,818, retired 2,835.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Carlow station: "Railway Road Carlow Co. Carlow", "Eircode R93 C2C4"; staffing and booking office "Monday to Friday(including bank holidays): 05:45 - 22:00", "Saturday : 06:50 - 20:30", "Sunday : 09:30 - 20:30".', url: 'https://www.irishrail.ie/en-ie/station/carlow' },
      { claim: 'VISUAL Carlow: "VISUAL Centre for Contemporary Art & The George Bernard Shaw Theatre"; "Old Dublin Road, Carlow, R93 A3K1"; "Monday Closed Tuesday - Saturday 11am - 5.30pm Sunday 2pm - 5pm"; "Free admission to gallery exhibitions".', url: 'https://visualcarlow.ie/' }
    ],
    rejectedClaims: [
      'Any figure on this page without its source table, area label and arithmetic: that is the one thing the page exists to rule out.',
      'County Carlow figures: the county page owns those, with its own sources.',
      'The cross-county town as a lesson: the County Carlow and County Louth pages own that trap, so the two-county label is stated as a fact only.',
      'Any reason for the size of a travel share or the level of non-response in the town.',
      'Any claim about the nineteen other Carlow labels beyond their existence in the same dimension.',
      'Ticket or event prices from VISUAL: only the published opening hours, address and free gallery admission are quoted.'
    ]
  }
};
