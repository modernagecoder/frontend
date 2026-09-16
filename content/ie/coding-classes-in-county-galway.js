'use strict';
// County Galway (cg- county page, Ireland cluster, Phase 4). Covers Galway
// COUNTY only; the city has its own page and none of its figures are used as
// county figures here. Spine: reconciliation. Every county number on this page
// was proved to be a county number rather than a city-plus-county number, by
// adding the parts and checking they equal the whole: the seven Galway County
// local electoral areas in CSO table F1016 sum to exactly 193,323, matching
// table F1010's Galway County Council row, and the CSO's own Traveller and
// third-level sentences split city from county and add back to the published
// totals. Profile 8 supplies the textual proof that the CSO's "City"/"County"
// prose is the council split, because it names both as "Council area" in the
// same paragraph. Facts read at primary sources on 16 September 2026: CSO
// PxStat F1010, F1013, F1015 and F1016; the Galway Profile 1, 5, 7 and 8 press
// statements; gov.ie's January 2018 LCCS list; atu.ie; galway.ie library pages;
// data.gov.ie CKAN for the council's 81 CC BY 4.0 datasets. No county-only
// growth rate is published because the only 2016 comparison the CSO offers for
// Galway is a combined city-and-county row.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY GALWAY', blurb: 'Tuam to Conamara, with a project that proves a county figure really is a county figure.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-galway',
  code: 'gwc',
  accent: '#2D4B73',
  accentRationale: 'County Galway: a slate blue from the solver, set apart from the tone used on the Galway city page and from the other western counties',
  pageType: 'governorate',
  place: {
    name: 'County Galway',
    eyebrow: 'County Galway, Connacht',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-galway', name: 'Galway' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Galway city', href: '/best-coding-class-in-galway' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Galway, Ireland',
  title: 'Coding Classes in County Galway | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for County Galway, from Tuam and Ballinasloe to Loughrea, Athenry and Conamara, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Galway, on a page where every county figure was checked by adding the parts and seeing whether they matched the whole.',
  twitterDescription: 'Coding classes across County Galway, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Galway Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Galway, taught live in English.'
  },

  h1: 'Coding classes in County Galway',
  capsuleQ: 'What are the best coding classes in County Galway?',
  capsule: 'County Galway, meaning the council area outside the city, holds 193,323 people. Tuam is its largest town at 9,647, followed by Ballinasloe at 6,597, Loughrea at 6,322 and Athenry at 4,603, and the rest of the population sits in villages and townlands from Ballinasloe west to the Conamara coast. Almost 86,000 people work in the county and 46% of adults hold a third level qualification, just above the national 45%. We teach ages 6 to 67 live online at a fixed weekly hour, in ability groups of five to ten or one to one, starting with a free lesson and then USD 100 a month in a group or USD 150 privately.',
  lead: 'Ask the internet how many people live in Galway and you will be told 277,737. That number is real, and it is the wrong answer for this page, because it counts the city and the county together. The county on its own is 193,323, and we can show that rather than assert it: the statistics office publishes seven local electoral areas tagged Galway County, and Tuam, Athenry-Oranmore, Ballinasloe, Gort-Kinvara, Loughrea, Conamara South and Conamara North add up to 193,323 exactly, from a different table than the one the total came from. When two independent routes land on the same figure, you have something worth publishing. That habit, adding up the parts and checking them against the whole, is the single most useful thing a young programmer can learn to do with data, and it is what this page is built around.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Galway.',

  picks: {
    eyebrow: 'Course picks for County Galway',
    h2: 'Four starting points, chosen by age and appetite',
    intro: 'The free lesson settles which of these is right. It is taught by the teacher who would take the course, and no card details are asked for at any stage.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games and stories, including a counter that has to agree with what is actually on screen.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python plus a first honest look at what an AI answer is and is not, built for the Junior Cycle years ahead.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Seven electoral areas, one county total, and a script that checks whether they agree.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults whose spreadsheets have to reconcile: automating the check instead of doing it by eye.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Seven areas that add to one county',
      intro: 'These are the seven local electoral areas the statistics office labels Galway County, with the city excluded.',
      body: [
        { kind: 'table', caption: 'Galway County local electoral areas, Census 2022, Central Statistics Office table F1016', head: ['Local electoral area', 'Population'], rows: [
          ['Tuam', '35,544'],
          ['Athenry-Oranmore', '35,105'],
          ['Ballinasloe', '29,855'],
          ['Gort-Kinvara', '25,923'],
          ['Loughrea', '25,498'],
          ['Conamara South', '23,345'],
          ['Conamara North', '18,053'],
          ['Seven areas together', '193,323, matching the county council total exactly']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Work in the county', p: 'Almost 86,000 people are at work, more than 65,000 of them full time and almost 13,000 part time, with unemployment at 7% and female participation at 56% against 66% for men.' },
          { h3: 'Where the work happens', p: 'Almost 51,900 people never work from home, while almost 25,600 do at least part of the time, including over 6,500 who are at home five days a week.' },
          { h3: 'Arrivals', p: '4,083 people had moved into the county in the year before the census, 1,961 from elsewhere in Ireland and 2,122 from outside the State.' }
        ] },
        { kind: 'p', text: 'On education, more than 58,600 people in the county hold a third level qualification, up from 45,899 in 2016, a rate of 46% against 45% nationally. The average age of finishing full time education in the county area rose from 20 to 21 years between the two censuses. Both figures are quoted from sentences that name the county area specifically, which is the only way to keep the city out of them.' }
      ]
    },
    {
      id: 'towns', tint: 'tint', eyebrow: 'The towns',
      h2: 'Tuam, Ballinasloe, Loughrea, Athenry',
      intro: 'Four towns, four different age profiles, and a school list with exactly one Galway county entry on it.',
      body: [
        { kind: 'table', caption: 'County Galway towns, Census 2022, Central Statistics Office tables F1013 and F1015', head: ['Town', 'Population', 'Average age', 'Under 15'], rows: [
          ['Tuam', '9,647', '37.6', '22.6%'],
          ['Ballinasloe', '6,597', '39.6', '21.7%'],
          ['Loughrea', '6,322', '37.7', '21.6%'],
          ['Athenry', '4,603', '35.5', '24.8%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The one school', p: 'St Brigids Mercy Secondary School at the Convent of Mercy in Tuam was the only Galway school on the first national list for Leaving Certificate Computer Science in January 2018.' },
          { h3: 'Third level in the county', p: 'ATU Mountbellew runs on a 120 hectare working farm with a campus address of H53 WE00, teaching agri-business, agri-engineering and agri-science with ATU Galway City and veterinary medicine with ATU Donegal.' },
          { h3: 'Three routing keys', p: 'The council\'s own library pages give Tuam Library as H54 F627, Loughrea as H62 EV61 and Athenry as H65 C992, three different keys inside one county.' }
        ] },
        { kind: 'p', text: 'One school on a national first-phase list is a small number for a county of 193,323 people, and it explains why families in Ballinasloe, Gort or Clifden so often look outside the local school for a serious programming class. Access to a subject should not depend on which town a family happens to live near, and online teaching is the plainest available fix for that.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Do the parts add up to the whole?',
      intro: 'One question, asked three times on real Galway figures, and a script that answers it in a second.',
      body: [
        { kind: 'table', caption: 'Three reconciliations a learner can run on published Galway figures', head: ['Claim', 'The parts', 'Does it reconcile'], rows: [
          ['County population 193,323', 'Seven Galway County local electoral areas', 'Yes, exactly, from a separate table'],
          ['4,257 Travellers in Galway', '1,748 in the city, 2,509 in the county', 'Yes, exactly'],
          ['Third level in Galway', 'Almost 28,500 in the city, more than 58,600 in the county', 'Consistent, but both sides are rounded words'],
          ['Galway grew 8% since 2016', 'City and county are not split in that table', 'No, so we publish no county growth rate']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The script', p: 'Twenty lines: read the electoral area table, keep the rows labelled Galway County, sum them, compare with the county total from the other table, print whether they match.' },
          { h3: 'The awkward row', p: 'The third one. Almost and more than are not numbers you can add, so the honest verdict is consistent rather than proved, and learners have to write that distinction down.' },
          { h3: 'The row that fails', p: 'The published growth rate is for city and county combined. There is no county-only version, so the correct output is nothing at all rather than a plausible guess.' }
        ] },
        { kind: 'callout', h3: 'How we know which Galway a sentence means', p: 'This is the part that catches people out. The statistics office writes Galway City in one clause and Galway County in the next, and it is fair to ask whether that means the two council areas or something looser. The proof is in its own language report, where the same paragraph says Galway City Council area and then County Council area. Once that sentence is found, every other City and County sentence in the Galway releases can be read with confidence. Finding it took ten minutes and made every figure on this page defensible, which is a very good trade.' },
        { kind: 'p', text: 'Then the county\'s own data. Galway County Council publishes 81 datasets through the national portal, all under a Creative Commons Attribution licence, including the Athenry local area plan zoning for 2024 to 2030. Its description carries the council\'s own warning that the information "is not guaranteed to be accurate, correct, or complete", and that the council accepts no liability for loss suffered by anyone using it. Learners read that sentence before opening the file, because a publisher\'s own statement about its data is itself a fact about the data.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'A method worth keeping',
      h2: 'Four checks that catch most data mistakes',
      intro: 'None of these needs advanced mathematics. All four are habits.',
      body: [
        { kind: 'table', caption: 'Run these before quoting any figure', head: ['Check', 'How', 'What it catches'], rows: [
          ['Do the parts sum to the whole?', 'Add the components from a second table', 'Mixed-up totals and missing rows'],
          ['Which area does this name mean?', 'Find a sentence where the publisher defines it', 'City figures passed off as county figures'],
          ['Is this a word or a number?', 'Separate almost 86,000 from 85,946', 'Arithmetic done on rounded prose'],
          ['Did the publisher warn you?', 'Read the licence and the description', 'Trusting a file the owner does not vouch for']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ages 6 to 10', p: 'Counting the same box of things twice, in two different orders, and finding out why the answers differ.' },
          { h3: 'Ages 11 to 15', p: 'A spreadsheet where the column total has been typed by hand and does not match the column.' },
          { h3: 'Ages 16 and up', p: 'The real tables, the real script, and a written verdict on each of the four claims above.' }
        ] },
        { kind: 'p', text: 'We are not connected with Galway County Council, Atlantic Technological University or any school named on this page. Population and employment figures come from Central Statistics Office tables and Galway press statements that name Galway County or the County Council area; the dataset count and licence come from the national open data portal; and the reconciliations described here are our own, run on those published tables. Galway city figures belong on the city page and are used here only where the source itself splits city from county.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Getting about',
      h2: 'A county where nearly everyone drives',
      intro: 'Transport shapes what an after-school class can realistically look like here.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Adults', p: 'Commuters in the county area are among the most likely in the country to drive to work, at 71%.' },
          { h3: 'Children', p: '70% of primary school children in the county area go by car, though their journeys are the shortest in the country at 10.2 minutes.' },
          { h3: 'The evening problem', p: 'A short school run in the morning says nothing about a 40 minute drive to an evening class in another town, twice a week, in winter.' }
        ] },
        { kind: 'spec', title: 'Who lives in the county', p: 'The largest non-Irish groups are UK citizens at 3,582, Polish at 2,914 and Brazilian at 1,058, and 2,509 of the 4,257 Travellers counted in Galway live in the county rather than the city. Among Irish speakers in the County Council area, more than 18,000 people speak the language very well and nearly 27,000 speak it well. Our classes are taught in English, and programming keywords are English everywhere, so a learner from a Gaeltacht school is at no disadvantage in the room.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting twice to checking properly',
    intro: 'Ages are a guide. The free lesson decides the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting and checking', p: 'Programs that count things and then check the count a second way.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Totals that disagree', p: 'Finding the row that breaks a total, in a spreadsheet and then in code.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Reconciliation in Python', p: 'Two tables, one claim, a script that says whether they agree.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Automating the check', p: 'Turning a monthly manual reconciliation into something that runs itself and shouts when it fails.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'The assistant said 277,737. Why is that the wrong number for Tuam?',
    intro: 'Because it is the city and the county added together, and nothing in the answer tells you so.',
    p1: 'Type a question about Galway\'s population and you will get a confident figure. It will usually be the combined one, because that is what most pages quote. It is not wrong in general; it is wrong for a question about the county, and the difference is 84,414 people. Nobody is lying. The answer simply did not ask which Galway you meant.',
    p2: 'A learner who has spent an afternoon adding seven electoral areas together does two things differently. They ask which area a figure covers before using it, and they look for a second source that should produce the same number. That is not scepticism for its own sake. It is the ordinary working method of anyone who has ever had to defend a figure in front of somebody who knows the subject.',
    closer: 'A tool can produce numbers all day. Deciding whether a number answers the question in front of you is the part that stays human, and it is teachable from about age eleven.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Ballinasloe to Carna, the same class',
    intro: 'County Galway is wide, and the drive between its ends is long enough to rule out most evening options.',
    cells: [
      { h3: 'No travel at all', p: 'The lesson happens where the learner is, which in this county can be 90 minutes from the nearest town of any size.' },
      { h3: 'Irish school stages', p: 'We plan around Junior Cycle, Transition Year, fifth year and sixth year, using the names the school uses.' },
      { h3: 'The free lesson', p: 'A real class with real work, ending with a level, a recommended course and a proposed weekly hour. No card details.' },
      { h3: 'Small ability groups', p: 'Five to ten learners at the same level, gathered from County Galway and other countries so the right group exists at a sensible hour.' },
      { h3: 'A fixed weekly slot', p: 'Usually two lessons a week, about eight a month, agreed once and kept, with exam weeks planned around.' },
      { h3: 'Ahead of Irish time', p: 'Our teachers are in India, four and a half hours ahead of Ireland in summer and five and a half in winter, which is why afternoons and evenings work well.' }
    ],
    spec: { title: 'For the 25,600 who already work from home here', p: 'A quarter of the county\'s workers are at home at least part of the week, over 6,500 of them for all five days. Those households already have the connection, the desk and the habit of meeting by video, which makes adding a child\'s class at a set hour close to frictionless.' }
  },

  fees: {
    h2: 'County Galway class fees',
    intro: 'The whole price list is three lines long.',
    first: 'The first lesson costs nothing and ends with a level and a recommendation.',
    group: 'A month of group classes, normally eight lessons, five to ten learners at one level.',
    private: 'A month of one to one classes on the same weekly schedule.',
    closer: 'We bill monthly in US dollars, at the single rate we charge everywhere outside India, so a family in Clifden pays the same as a family in Athenry and there is no separate euro list. Nothing is charged before the free lesson has agreed a course and an hour. Pauses, missed lessons and switching between group and private are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from our families, unedited',

  book: {
    h2: 'Tell us who is learning',
    intro: 'We match the first task to the person: a counting puzzle for a young child, a broken spreadsheet total for the middle years, or the seven electoral areas for a teenager who wants the real thing.',
    success: 'Thank you. Somebody will contact you about your County Galway class shortly.'
  },

  faq: {
    h2: 'County Galway coding class questions',
    intro: 'The questions families in the county actually ask.',
    items: [
      { q: 'How many people live in County Galway?', a: 'The Galway County Council area held 193,323 people at the 2022 census. The often-quoted 277,737 includes Galway city, which has its own page.' },
      { q: 'Why does this page not give a growth figure since 2016?', a: 'Because the only table offering that comparison for Galway combines the city and the county in one row. A county-only rate would have to be invented, so we publish none.' },
      { q: 'What are the biggest towns in County Galway?', a: 'Tuam at 9,647, then Ballinasloe at 6,597, Loughrea at 6,322 and Athenry at 4,603. Athenry is the youngest of the four, with 24.8% of its people under 15.' },
      { q: 'Which County Galway school first offered Leaving Certificate Computer Science?', a: 'St Brigids Mercy Secondary School in Tuam was the only Galway school on the national first-phase list published in January 2018.' },
      { q: 'What is the County Galway data project?', a: 'Students test whether published Galway figures reconcile: the seven county electoral areas against the county total, the Traveller counts against the Galway total, and the third level numbers that are only given as rounded words.' },
      { q: 'Do you teach learners in Conamara?', a: 'Yes. Conamara South and Conamara North hold 41,398 people between them, and distance from a town makes no difference to a live online class.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the exact hour is agreed during the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in County Galway?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Galway coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The city, and the west',
    html: 'Galway city is covered separately at <a class="cg-inline-link" href="/best-coding-class-in-galway">coding classes in Galway</a>. South and east, the nearest city pages are <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a> and <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a>. If you are weighing up providers, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and everything else sits on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Galway and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-galway', label: 'Galway city' },
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-gwc .cg-hero-grid { align-items: start; gap: clamp(1.19rem, 3.11vw, 2.61rem); }
.cg-root.cg-gwc .cg-hero h1 { font-weight: 700; letter-spacing: -0.0206em; line-height: 1.048; }
.cg-root.cg-gwc .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.06rem; }
.cg-root.cg-gwc .cg-eyebrow { letter-spacing: 0.163em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gwc .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0141em; }
.cg-root.cg-gwc .cg-grid-3 { gap: clamp(1.02rem, 2.44vw, 1.96rem); }
.cg-root.cg-gwc .cg-table caption { letter-spacing: 0.027em; font-weight: 700; }
.cg-root.cg-gwc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gwc .cg-table tr:last-child td { font-weight: 700; }
.cg-root.cg-gwc .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.94rem; }
.cg-root.cg-gwc .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'County Galway, the Galway County Council area outside the city, Census 2022 (CSO): population 193,323, distinct from Galway City Council\'s 84,414, which together make the combined 277,737 the CSO quotes for "Galway". METHODOLOGY BRIDGE: CSO Profile 8 for Galway names both areas as council areas in one paragraph, "Among Irish speakers in the Galway City Council area" and "Of the Irish speakers in the County Council area", which is the textual proof that the City and County prose split used throughout the Galway Profile 5, 7 and 8 statements is the council-area split. CROSS-CHECK: the seven local electoral areas tagged Galway County in CSO table F1016 sum to exactly 193,323, from a different table than the F1010 county total: Tuam 35,544, Athenry-Oranmore 35,105, Ballinasloe 29,855, Gort-Kinvara 25,923, Loughrea 25,498, Conamara South 23,345, Conamara North 18,053. Towns (F1013 and F1015): Tuam 9,647 with average age 37.6 and 22.6 percent under 15; Ballinasloe 6,597 at 743.1 per sq km, average age 39.6, 21.7 percent under 15; Loughrea 6,322 at 1,187.7 per sq km, average age 37.7, 21.6 percent under 15; Athenry 4,603 at 1,678.9 per sq km, average age 35.5, 24.8 percent under 15. Profile 7 for the county: almost 86,000 at work, more than 65,000 full time and almost 13,000 part time; unemployment 7 percent against 9 percent in the city; female participation 56 percent and male 66 percent; almost 51,900 never working from home against almost 25,600 who do at least part of the time, over 6,500 of them five days a week, almost 4,400 one day and just over 4,300 two days; 71 percent of county commuters driving to work; 70 percent of county primary school children going by car, with the shortest journey times nationally at 10.2 minutes. Profile 5 for the county: UK citizens 3,582, Polish 2,914, Brazilian 1,058; Irish-US dual citizenship 2,203 and Irish-UK 1,577; 2,509 of the 4,257 Travellers counted in Galway, the other 1,748 being in the city; 4,083 people having moved into the county in the year before the census, 1,961 from within Ireland and 2,122 from outside the State. Profile 8 for the county: more than 58,600 people with a third level qualification, up from 45,899 in 2016, a rate of 46 percent against 45 percent nationally, alongside almost 28,500 in the city; average age of completing full time education rising from 20 to 21 years; more than 18,000 Irish speakers (20 percent) speaking the language very well, nearly 27,000 well and 42,000 not able to speak it well. Gov.ie, 4 January 2018: St Brigids Mercy Secondary School, Convent of Mercy, Tuam, is the only Galway school on the first-phase Leaving Certificate Computer Science list. ATU\'s own site: ATU Mountbellew, address H53 WE00, a 120 hectare working farm campus teaching agri-business, agri-engineering and agri-science with ATU Galway City and veterinary medicine with ATU Donegal. Galway County Council library pages: Tuam Library H54 F627, Loughrea Library H62 EV61, Athenry Library H65 C992.',
    localProject: 'Reconciliation: do the published parts add up to the published whole? Learners test three Galway claims and reject a fourth. One, the county total of 193,323 against the seven Galway County local electoral areas in a separate CSO table, which sum to exactly that figure. Two, the 4,257 Travellers counted in Galway against the split of 1,748 in the city and 2,509 in the county, which reconciles exactly. Three, the third level figures, almost 28,500 in the city and more than 58,600 in the county, where both sides are rounded words rather than numbers, so the honest verdict is consistent rather than proved. Four, the widely quoted 8 percent growth since 2016, which the CSO publishes only for city and county combined, so no county-only rate can be produced and none is published. The second half uses the council\'s own open data: 81 datasets published through data.gov.ie under Creative Commons Attribution 4.0, including Athenry LAP Zoning 2024-2030, whose own description states that Galway County Council "provides this information with the understanding that it is not guaranteed to be accurate, correct, or complete" and accepts no liability for loss suffered by users, a publisher\'s statement that learners read as a fact about the data before opening the file.',
    requiredMentions: [
      '193,323',
      '25,923',
      '6,597',
      '6,322',
      '4,603',
      '58,600',
      '2,509',
      '4,083',
      '35,544',
      '10.2 minutes',
      'H53 WE00',
      'Mountbellew'
    ],
    sources: [
      { claim: 'CSO PxStat table F1010: the Administrative Counties dimension carries "Galway County Council" and "Galway City Council" as separate rows; the county row totals 193,323.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1010/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat table F1016: the seven areas labelled Galway County are Conamara North 18,053, Tuam 35,544, Ballinasloe 29,855, Loughrea 25,498, Athenry-Oranmore 35,105, Gort-Kinvara 25,923 and Conamara South 23,345, summing to exactly 193,323.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1016/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 8, Galway: "Among Irish speakers in the Galway City Council area 5,282 people spoke the language very well (16%)... Of the Irish speakers in the County Council area, more than 18,000 people (20%) spoke the language very well, with nearly 27,000 speaking it well and 42,000 not being able to speak it well (47%)." Also: "In the Galway County area, more than 58,600 people had a third level qualification, up from 45,899 in 2016. This was a rate of 46%, just above the national rate of 45%", and the average age of completing education in the County area going "from 20 to 21 years".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationgalway/' },
      { claim: 'CSO Profile 7, Galway: "almost 86,000 people working in Galway County"; "The unemployment rate in Galway City was 9%, whereas it was 7% in Galway County"; "more than 65,000 were in full-time employment while almost 13,000 were working part-time"; "Almost 51,900 people in Galway County never worked from home while almost 25,600 people did so at least part of the time... over 6,500 people worked from home for five days a week"; county commuters "among the most likely to drive to work, with 71%"; county primary school children "among the most likely to go to school by car at 70%" and with "the shortest journey times to primary school nationally, at 10.2 minutes".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutinggalway/' },
      { claim: 'CSO Profile 5, Galway: "In Galway County the largest group were UK citizens (3,582) followed by Polish (2,914 people) and Brazilian (1,058)"; "There were 4,257 Travellers in Galway in Census 2022, including 1,748 Travellers recorded in Galway City and 2,509 in Galway County"; "There were 4,083 people living in Galway County in April 2022 who had moved to the county in the year before the census. This included 1,961 people who had moved from elsewhere within Ireland, and 2,122 people from outside the State."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligiongalway/' },
      { claim: 'CSO Profile 1, Galway: "Tuam was the largest town, with a population of 9647 in April 2022", cross-verified in table F1013.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementsgalway/' },
      { claim: 'CSO PxStat tables F1013 and F1015: Ballinasloe 6,597 at 743.1 per sq km, average age 39.6; Loughrea 6,322 at 1,187.7, average age 37.7; Athenry 4,603 at 1,678.9, average age 35.5 with 24.8 percent under 15; Tuam average age 37.6 with 22.6 percent under 15.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'Department of Education, 4 January 2018: "St Brigids Mercy Secondary School", "Convent Of Mercy, Tuam, Co. Galway", the only Galway school on the first-phase Leaving Certificate Computer Science list.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Atlantic Technological University: ATU Mountbellew offers undergraduate programmes with ATU Galway City in agri-business, agri-engineering and agri-science and with ATU Donegal in veterinary medicine; "With a total area of 120 hectares, students benefit from practical, hands-on experience gained on our working farm"; campus address "Mountbellew, Ballinasloe, Co. Galway, H53 WE00".', url: 'https://www.atu.ie/campus/mountbellew' },
      { claim: 'Galway County Council library pages: Tuam Library, High Street, H54 F627; Loughrea Library, Church Street, H62 EV61; Athenry Library, Swan Gate, H65 C992.', url: 'https://www.galway.ie/en/libraries-archives/find-my-library/tuam-library' },
      { claim: 'data.gov.ie CKAN package search for organization galway-county-council returns 81 datasets, each with licence CC-BY-4.0; the Athenry LAP Zoning 2024 2030 record states that Galway County Council "provides this information with the understanding that it is not guaranteed to be accurate, correct, or complete" and accepts no liability for loss suffered by users.', url: 'https://data.gov.ie/api/3/action/package_search?fq=organization:galway-county-council' }
    ],
    rejectedClaims: [
      'A County Galway growth rate since 2016: the CSO\'s comparison table carries a single combined Galway row, so no county-only rate exists.',
      'The combined Galway total of 277,737, the combined average age of 39 years and the combined 37,907 home workers, all of which mix city and county.',
      'Any Galway city figure used as a county figure, including the city population of 84,414 and the city unemployment rate of 9 percent.',
      'Treating "almost 86,000" or "more than 58,600" as exact numbers in arithmetic: they are the CSO\'s rounded words.',
      'A county-only average age, under-15 share or population density: the CSO does not publish these at administrative county level.',
      'Any claim that 71 percent of county residents work locally: Profile 7 says 71 percent drive to work, which is a different statement.'
    ]
  }
};
