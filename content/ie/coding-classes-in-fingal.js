'use strict';
// Fingal (cg- local authority page, Ireland cluster, Phase 4). Fingal is NOT a
// county: it is one of the four Dublin local authorities, and the page says so.
// Because the CSO publishes no Fingal-specific Profile releases, only a
// Dublin-wide one covering all four authorities, NO Dublin-wide figure is used
// here as a Fingal figure; every population fact comes from PxStat cubes that
// carry Fingal as its own row. Facts read at primary sources on 16 September
// 2026: CSO tables F1010, F1011, F1015 and F1016; gov.ie's January 2018 LCCS
// list, with the Fingal schools identified against the council's own list of
// its areas and with Mount Temple explicitly ruled out, since its Malahide Road
// address is in Dublin 3 rather than Malahide; fingal.ie; dublinairport.com;
// malahidecastleandgardens.ie; newbridgehouseandfarm.com. Citizenship, home
// working, commuting mode and third-level shares are deliberately ABSENT,
// because no Fingal-only figures exist. Dataset measured by us: Newbridge House
// Visitors, Fingal County Council, CC BY 4.0, 31 rows, where three rows are
// themselves totals, so summing the column gives 379,230 against a true 189,615,
// exactly double; the X and Y columns hold projected metres beside correct
// latitude and longitude; four zero rows are Covid closures; the reporting
// granularity switches from monthly to quarterly mid-file; and the visitor
// column name is misspelled in the published header.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'FINGAL', blurb: 'North County Dublin, Swords to Balbriggan, with a project on a total that counts itself twice.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-fingal',
  code: 'fng',
  accent: '#7B3A53',
  accentRationale: 'Fingal: a deep rose-brown from the solver, unused elsewhere in the Ireland cluster and clear of the Dublin city red',
  pageType: 'governorate',
  place: {
    name: 'Fingal',
    eyebrow: 'Fingal, County Dublin',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-dublin', name: 'Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Fingal, County Dublin, Ireland',
  title: 'Coding Classes in Fingal | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Fingal, from Swords and Balbriggan to Blanchardstown and Malahide, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Fingal, on a page about a visitor dataset whose totals are rows, so the obvious sum comes out exactly double.',
  twitterDescription: 'Coding classes across Fingal, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Fingal Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across Fingal in north County Dublin, taught live in English.'
  },

  h1: 'Coding classes in Fingal',
  capsuleQ: 'What are the best coding classes in Fingal?',
  capsule: 'Fingal is not a county, though it is often called one: it is one of the four local authorities that make up County Dublin, covering about 450 square kilometres from Blanchardstown and Castleknock up through Swords to Balbriggan and the coast. Its population was 330,506 at the 2022 census, and 159,994 of those people live inside the Dublin city and suburbs built-up area, which is roughly half of Fingal. It is young: Balbriggan\'s average age of 33.6 is among the lowest anywhere. We teach learners aged 6 to 67 live online at a fixed weekly hour, in ability groups of five to ten or one to one, with a free first lesson and then USD 100 a month in a group or USD 150 privately.',
  lead: 'Fingal County Council publishes 419 datasets, far more than most Irish local authorities, and one of them counts visitors to Newbridge House in Donabate. It has 31 rows and looks completely ordinary. Add up its visitor column and you get 379,230 people. The true figure is 189,615, exactly half, because three of those 31 rows are not months at all: they are totals for 2021, 2022 and 2023, sitting in the same column as the data they summarise. Sum everything and you count every visitor twice, and the answer is not obviously wrong, because nothing about it looks odd. That is the most common way a published total goes astray, and it is almost invisible unless you look at the rows themselves. This page teaches that habit, on a file from the learner\'s own council.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Fingal.',

  picks: {
    eyebrow: 'Course picks for Fingal',
    h2: 'Four courses for north County Dublin',
    intro: 'Choose on what the learner wants to build rather than on age. Every card opens with a lesson that is free, real and taught by the person who would take the course.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and counting, where a scoreboard that includes its own total quickly starts telling lies.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through the school years, with the habit of looking at rows before summing columns.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'A council file where the obvious sum is exactly double the right answer, and the reason is three rows.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For working adults: automated checks that catch total rows, wrong coordinate units and closures recorded as zeros.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Fingal today',
      h2: 'One of four Dublin authorities, and young with it',
      intro: 'Because the statistics office publishes its Dublin commentary for the whole county at once, this page uses only figures that carry Fingal as their own row.',
      body: [
        { kind: 'table', caption: 'Fingal in Census 2022, from CSO tables that name Fingal directly', head: ['Measure', 'Figure'], rows: [
          ['Population', '330,506'],
          ['Living inside the Dublin city and suburbs built-up area', '159,994, roughly half of Fingal'],
          ['Largest electoral area', 'Howth and Malahide, 69,960, then Swords at 48,739 and Castleknock at 47,149'],
          ['Smallest electoral area', 'Blanchardstown and Mulhuddart, 40,022'],
          ['Densest electoral division', 'Blanchardstown and Blakestown, 5,576.3 people per square kilometre'],
          ['Area, on the council\'s own description', 'About 450 square kilometres']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The towns', p: 'Swords is the largest at 40,776, then Balbriggan at 24,322, Malahide at 18,608, Rush at 10,875, Portmarnock at 10,750, Skerries at 10,743, Donabate at 9,669 and Lusk at 8,806.' },
          { h3: 'Young and old ends', p: 'Balbriggan has an average age of 33.6, among the youngest towns in the country, while Malahide sits at 40.5 and Swords between them at 36.2.' },
          { h3: 'The name', p: 'The council explains it plainly: Fingal comes from Fine Gall, the land of the fair-haired stranger, a reference to the Vikings who settled here.' }
        ] },
        { kind: 'p', text: 'Two notes about the numbers. Blanchardstown does not appear as a town in the census list at all, because it is administered across two electoral areas rather than existing as a single settlement, so no single Blanchardstown population is quoted here. And the census town list labels Fingal\'s towns as County Dublin, a naming convention that predates the 1994 split into four authorities. It is not an error, and it is a good early lesson in how administrative history survives inside data long after the administration has changed.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Fingal schools',
      h2: 'Six of the first-phase schools were here',
      intro: 'Fingal did better than anywhere else we have written about when Leaving Certificate Computer Science began in September 2018.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Two in Swords', p: 'Loreto College and St Finian\'s Community College, both in the largest town in the authority, were on the January 2018 list.' },
          { h3: 'One in Rush, three in Dublin 15', p: 'St Joseph\'s Secondary School in Rush, plus Coláiste Pobail Setanta in Phibblestown, Le Chéile Secondary School in Tyrellstown and Luttrellstown Community College in Blanchardstown.' },
          { h3: 'The one we checked and excluded', p: 'Mount Temple Comprehensive has a Malahide Road address, which sounds like Fingal and is not: the school sits in Dublin 3, in the city. Road names are not addresses.' }
        ] },
        { kind: 'p', text: 'That last point is the sort of thing worth teaching early. We placed each school by comparing its address against the council\'s own published list of Fingal areas, which names Balbriggan, Baldoyle, Balgriffin, Ballyboughal, Blanchardstown, Castleknock, Clonsilla, Donabate, Garristown, Howth, Loughshinny, Lusk, Malahide, Mulhuddart, Naul, Oldtown, Portmarnock, Rush, Santry, Skerries, Sutton and Swords. Guessing from a road name or a postal district would have put at least one school in the wrong place, and a learner who has done this exercise on their own neighbourhood will never again assume that two addresses containing the same word are near each other.' },
        { kind: 'spec', title: 'What we cannot tell you about Fingal', p: 'The statistics office publishes no Fingal-specific figures for citizenship, working from home, commuting mode or third-level education. Only a Dublin-wide release exists, covering all four authorities together. Rather than pass those off as Fingal numbers, we leave them out and say why. An absent figure, clearly labelled, is worth more than a borrowed one.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The sum that comes out exactly double',
      intro: 'Thirty-one rows, one column, and an answer that is precisely twice what it should be. This is the most valuable half hour a new data learner can spend.',
      body: [
        { kind: 'table', caption: 'What we measured in the published file, read 16 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Rows in the file', '31'],
          ['Rows that are actually totals rather than months', '3, labelled for 2021, 2022 and 2023'],
          ['Sum of the visitor column across all 31 rows', '379,230'],
          ['Sum across the 28 genuine rows', '189,615'],
          ['The difference', '189,615, which is the correct total counted a second time'],
          ['Rows recording zero visitors because the site was closed', '4, during 2021 closures']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why totals as rows are so dangerous', p: 'They look identical to data. No tool warns you, the column adds up cleanly, and the answer is wrong by a factor that depends entirely on how many total rows are present.' },
          { h3: 'Coordinates in the wrong units', p: 'The file carries an X and Y pair in projected metres, and a separate latitude and longitude in degrees. Plot the first pair on a map and your point lands in the ocean.' },
          { h3: 'Zeros that mean closed', p: 'Four months show zero visitors because the house was shut during Covid restrictions. Averaging without excluding them understates a normal month and tells you nothing true about demand.' }
        ] },
        { kind: 'callout', h3: 'Two more things hiding in the same file', p: 'The reporting granularity changes partway through: months in 2021 and 2022, quarters from 2023 onwards, with no column marking the switch, so an unwary comparison puts a three-month figure beside a one-month one. And the visitor column\'s own name is misspelled in the published header, which matters more than it sounds: any code that refers to the correctly spelled name simply fails to find the column, and a learner who assumes the tidy spelling will spend an hour debugging their own perfectly good code. Published files carry their authors\' typing, and the fix is always to read the header rather than to assume it.' },
        { kind: 'p', text: 'The output is a corrected total, a note of which rows were excluded and why, and a short list of everything else found. The number is less important than the list.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Before you sum a column',
      h2: 'Five checks against double counting',
      intro: 'These take a minute each and catch the errors that survive into finished reports.',
      body: [
        { kind: 'table', caption: 'Checks worth running on any table you plan to total', head: ['Check', 'What you look for', 'What it catches'], rows: [
          ['Read the rows, not just the header', 'Labels like total, subtotal, all or year-end inside a data column', 'Totals counted as data'],
          ['Sanity-test the scale', 'Whether the answer is suspiciously round, or suspiciously double', 'Exactly the fault on this page'],
          ['Check units before mapping', 'Whether coordinates are degrees or metres', 'Points landing in the sea'],
          ['Ask what a zero means', 'Whether zero is a real measurement or a closure', 'Averages dragged down by shut doors'],
          ['Check the grain', 'Whether every row covers the same length of time', 'Quarters compared with months']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A scoreboard game that accidentally includes its own total, so the score doubles and the players have to work out why.' },
          { h3: 'Teenagers', p: 'The real council file in Python: find the three total rows, correct the sum, check the coordinates and write up what changed.' },
          { h3: 'Adults', p: 'The same checks on work spreadsheets, where subtotal rows pasted into data are the single most common cause of a wrong figure in a report.' }
        ] },
        { kind: 'p', text: 'We have no connection with Fingal County Council, daa, Malahide Castle, Newbridge House or any school named on this page. Population figures come from Central Statistics Office tables that name Fingal directly, and the dataset measurements are ours, taken from the council\'s published file under its Creative Commons Attribution licence.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in Fingal',
      h2: 'An airport, a castle and a coast road',
      intro: 'Fingal holds the country\'s main airport, its own shoreline and a great deal of the Dublin commuter belt.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Dublin Airport', p: 'The largest single site in the authority. Its operator states an ambition to deliver "coherent, sustainable and plan-led growth of Dublin Airport to 40 million passengers per annum", which is a planning aim rather than a current figure.' },
          { h3: 'Malahide Castle', p: 'At K36 YP65, home to the Talbot family for over 800 years, and now one of the busiest visitor attractions in north County Dublin.' },
          { h3: 'Newbridge House', p: 'At K36 VR90 in Donabate, a Georgian villa designed by James Gibbs and built from 1747, whose demesne passed to the council in 1985 under an unusual agreement leaving the family\'s collection in place.' }
        ] },
        { kind: 'spec', title: 'A tidy piece of arithmetic', p: 'Unlike several counties we have written about, Fingal\'s parts add up perfectly: its seven electoral areas sum to exactly 330,506, and so do its 42 electoral divisions. When a hierarchy reconciles on the first attempt, that is worth noticing too, because it means you can use either level with confidence.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a scoreboard to a total you can defend',
    intro: 'Ages are a guide. Placement is decided in the free lesson by what the learner can actually do.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting cleanly', p: 'Programs that add things up and notice when something has been counted twice.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Rows and headers', p: 'Opening real files, reading the header as published and looking at rows before trusting a column.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Totals and units', p: 'Finding embedded totals, fixing a sum, checking coordinate units and writing up the corrections.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Automated guards', p: 'Checks that run on every new file, so a subtotal row never reaches a report again.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will total this column instantly. Why should a Swords teenager look at the rows?',
    intro: 'Because the wrong answer is exactly double, and nothing about it looks wrong.',
    p1: 'Hand an AI tool this file and ask how many people visited. It will sum the column and answer 379,230, confidently and quickly. The three rows holding yearly totals are indistinguishable from data unless something reads their labels and reasons about what they mean. The tool has done accurate arithmetic on the wrong set of rows, which is the most dangerous kind of mistake because the output carries no sign of it.',
    p2: 'A learner who has met this once develops the right reflex: before summing anything, look at what the rows are. It takes seconds, and it is the difference between a total you can put your name to and one you cannot.',
    closer: 'So the case for a Fingal child learning to code in 2026 is not that the airport is up the road. It is that somebody in every organisation has to be able to say that total counts itself, and show which three rows did it.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Balbriggan, Swords, Blanchardstown or Howth',
    intro: 'Fingal stretches from the edge of the city to the north county coast, and its traffic is famous. A class that arrives at the house avoids all of it.',
    cells: [
      { h3: 'No run to a centre', p: 'A learner in Garristown and one in Castleknock join the same class, which no room in either place could arrange on a weekday evening.' },
      { h3: 'School words as used here', p: 'Junior Cycle, Transition Year, fifth and sixth year, spoken the way Fingal schools speak them.' },
      { h3: 'The free lesson teaches', p: 'A real task, a real teacher, and a clear recommendation at the end. Nobody is asked for card details to take it.' },
      { h3: 'Sorted by ability', p: 'Five to ten learners at one level, gathered from Fingal and several other countries so that each level meets at a sensible hour.' },
      { h3: 'A fixed hour weekly', p: 'Usually two lessons a week, around eight a month, with mid-terms, exams and holidays planned around in advance.' },
      { h3: 'The clocks, briefly', p: 'Indian time holds steady while Irish time moves, so our teachers are four and a half hours ahead in summer and five and a half in winter.' }
    ],
    spec: { title: 'A young population, and what it needs', p: 'With Balbriggan among the youngest towns in Ireland at an average age of 33.6, Fingal has a great many primary-age children arriving at once. Our youngest classes start at six with block coding, which is the right entry point for exactly that group.' }
  },

  fees: {
    h2: 'What classes cost in Fingal',
    intro: 'The price, in three lines.',
    first: 'One full lesson at no charge, ending with a level named and a course recommended.',
    group: 'A month of classes, normally eight, shared with five to ten learners of similar ability.',
    private: 'The same month of classes, with the teacher working with a single learner.',
    closer: 'Billing is monthly in US dollars at the one rate charged outside India, so Skerries pays what Mulhuddart pays and there is no euro list. Nothing is charged until the free lesson has produced a course and a weekly hour, and pauses, missed lessons and format changes are set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from our families, unedited',

  book: {
    h2: 'Tell us about the learner',
    intro: 'We match the first task to the person: a counting game for a young child, a first file opened in code for the middle years, or the doubled total for a teenager.',
    success: 'Thank you. Somebody will be in touch about your Fingal class shortly.'
  },

  faq: {
    h2: 'Fingal coding class questions',
    intro: 'What families in north County Dublin ask.',
    items: [
      { q: 'Is Fingal a county?', a: 'Not exactly. It is one of the four local authorities that make up County Dublin, covering about 450 square kilometres from Blanchardstown and Castleknock north to Balbriggan and the coast.' },
      { q: 'How many people live in Fingal?', a: 'Census 2022 counted 330,506, of whom 159,994 live inside the Dublin city and suburbs built-up area. Swords is the largest town at 40,776.' },
      { q: 'Which Fingal schools first offered Leaving Certificate Computer Science?', a: 'Six were on the January 2018 first-phase list: Loreto College and St Finian\'s in Swords, St Joseph\'s in Rush, and Coláiste Pobail Setanta, Le Chéile and Luttrellstown Community College in Dublin 15.' },
      { q: 'What is the Fingal data project?', a: 'Students take the council\'s Newbridge House visitor file, discover that three of its 31 rows are yearly totals, and find that the obvious sum of 379,230 is exactly double the true 189,615.' },
      { q: 'Why are there no citizenship or commuting figures on this page?', a: 'Because the statistics office publishes none for Fingal alone. Only a Dublin-wide release exists, covering all four local authorities, and we will not present those numbers as Fingal\'s.' },
      { q: 'Why do census tables call Fingal towns County Dublin?', a: 'It is a naming convention that predates the 1994 division of the old county into four authorities. The label is historical rather than wrong, and it is a good example of administrative history surviving inside data.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly slot is fixed during the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Fingal?', a: 'No, and we never suggest one. All teaching happens live over video, with no premises in Ireland at all. A learner needs a laptop or desktop, sound that works and a steady connection, and the number on this page belongs to India.', boiler: true },
      { q: 'What do Fingal coding classes cost?', a: 'The first lesson is free. After that, a shared place costs USD 100 a month and brings two live lessons a week, roughly eight monthly, with five to ten learners; one-to-one on the same schedule is USD 150 a month. Course, format and hour are agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than by age or address. Where nothing suitable runs at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The rest of Dublin, and beyond',
    html: 'The city itself is at <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>, and south of it <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a> has its own page. Inland, <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a> and <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> border Fingal\'s commuter towns. Everything is gathered on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Fingal and Dublin',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-dun-laoghaire-rathdown', label: 'Dún Laoghaire-Rathdown' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-fng .cg-hero-grid { align-items: start; gap: clamp(1.09rem, 3.38vw, 2.82rem); }
.cg-root.cg-fng .cg-hero h1 { font-weight: 700; letter-spacing: -0.0215em; line-height: 1.05; }
.cg-root.cg-fng .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.09rem; }
.cg-root.cg-fng .cg-eyebrow { letter-spacing: 0.175em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-fng .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0145em; }
.cg-root.cg-fng .cg-grid-3 { gap: clamp(1.01rem, 2.48vw, 1.97rem); }
.cg-root.cg-fng .cg-table caption { letter-spacing: 0.036em; font-weight: 700; }
.cg-root.cg-fng .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-fng .cg-table th { letter-spacing: 0.014em; }
.cg-root.cg-fng .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.92rem; }
.cg-root.cg-fng .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Fingal, one of the four Dublin local authorities rather than a county, Census 2022 (CSO PxStat, which carries Fingal as its own row): population 330,506; 159,994 residents inside the Dublin city and suburbs built-up area, roughly half of Fingal; seven local electoral areas summing exactly to the total, Howth-Malahide 69,960, Swords 48,739, Castleknock 47,149, Ongar 43,905, Balbriggan 40,476, Rush-Lusk 40,255 and Blanchardstown-Mulhuddart 40,022; the 42 electoral divisions labelled Fingal also sum exactly to 330,506, with the densest, Blanchardstown-Blakestown, at 5,576.3 persons per sq km across 7.9 sq km. Towns, labelled "Co Dublin" in the census list under a convention predating the 1994 split: Swords 40,776 with an average age of 36.2, Balbriggan 24,322 at 33.6, Malahide 18,608 at 40.5, Rush 10,875, Portmarnock 10,750, Skerries 10,743, Donabate 9,669, Lusk 8,806 and Portrane 1,262; Blanchardstown is not published as a town in its own right. The council describes Fingal as a 450 sq km region whose name derives from Fine Gall, land of the fair-haired stranger, and publishes its own list of constituent areas, used here to place schools. DELIBERATE ABSENCE: the CSO publishes no Fingal-only figures for citizenship, working from home, commuting mode or third-level education, only a Dublin-wide release covering all four authorities, and none of those is used here. Gov.ie, 4 January 2018: six first-phase Leaving Certificate Computer Science schools are in Fingal, Loreto College and St Finian\'s Community College in Swords, St Joseph\'s Secondary School in Rush, and Colaiste Pobail Setanta, Le Cheile Secondary School and Luttrellstown Community College in Dublin 15; Mount Temple Comprehensive was checked and excluded, since its Malahide Road address is in Dublin 3. Dublin Airport\'s operator states an ambition of "coherent, sustainable and plan-led growth of Dublin Airport to 40 million passengers per annum", a planning aim rather than a current count. Malahide Castle, K36 YP65, was home to the Talbot family for over 800 years; Newbridge House, K36 VR90 in Donabate, is a Georgian villa designed by James Gibbs and built from 1747, whose demesne passed to the council in 1985.',
    localProject: 'A total that counts itself. Fingal County Council publishes 419 datasets, and its Newbridge House Visitors file, licensed Creative Commons Attribution 4.0, holds 31 rows. Three of those rows are year totals rather than months, labelled for 2021, 2022 and 2023, so summing the visitor column across all 31 rows returns 379,230 while the 28 genuine rows total 189,615: the naive answer is exactly double, because each total row repeats the rows above it. Further measured faults in the same file: the X and Y columns hold projected metre coordinates identical on every row, sitting beside a correct latitude and longitude pair, so plotting X and Y as degrees puts the point in the ocean; four rows record zero visitors because the house was closed during 2021 Covid restrictions, which is a closure rather than a measurement; the reporting grain switches from monthly in 2021 and 2022 to quarterly from 2023 with no column flagging it; and the visitor column name is misspelled in the published header, so code referring to the correct spelling fails to find it.',
    requiredMentions: [
      '330,506',
      '159,994',
      '69,960',
      '48,739',
      '40,776',
      '24,322',
      '18,608',
      '10,875',
      '5,576.3',
      '379,230',
      '189,615',
      'K36 YP65',
      'Fine Gall'
    ],
    sources: [
      { claim: 'CSO table F1010: Fingal County Council population 330,506, of which 159,994 are within the Dublin city and suburbs built-up area.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'CSO table F1016: Howth-Malahide 69,960, Swords 48,739, Castleknock 47,149, Ongar 43,905, Balbriggan 40,476, Rush-Lusk 40,255 and Blanchardstown-Mulhuddart 40,022, summing exactly to 330,506.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO table F1011: the 42 electoral divisions labelled Fingal sum exactly to 330,506, and the densest, Blanchardstown-Blakestown, records 5,576.3 persons per sq km across 7.9 sq km.', url: 'https://data.cso.ie/table/F1011' },
      { claim: 'CSO table F1015: Swords 40,776 with average age 36.2, Balbriggan 24,322 at 33.6, Malahide 18,608 at 40.5, Rush 10,875, Portmarnock 10,750, Skerries 10,743, Donabate 9,669, Lusk 8,806, Portrane 1,262, each labelled Co Dublin.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'Fingal County Council: "This 450sq.km region derives its name from the Gaelic words \'Fine Gall\' or \'land of the fair-haired stranger\' in reference to the Vikings who settled here", with its own list of Fingal areas including Balbriggan, Blanchardstown, Castleknock, Howth, Malahide, Rush, Skerries and Swords.', url: 'https://www.fingal.ie/' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes Loreto College and St. Finian\'s Community College in Swords, St Joseph\'s Secondary School in Rush, Colaiste Pobail Setanta in Phibblestown, Le Cheile Secondary School in Tyrellstown and Luttrellstown Community College in Blanchardstown, while Mount Temple Comprehensive is at a Malahide Road address in Dublin 3.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'daa, Dublin Airport: an ambition to deliver "coherent, sustainable and plan-led growth of Dublin Airport to 40 million passengers per annum (mppa) in line with aviation and planning policy".', url: 'https://www.dublinairport.com/corporate/airport-development/dublin-airport-vision' },
      { claim: 'Malahide Castle and Gardens: "home to the Talbot family for over 800 years", eircode K36 YP65.', url: 'https://malahidecastleandgardens.ie/' },
      { claim: 'Newbridge House and Farm, Donabate, K36 VR90: a Georgian villa "built to the design of James Gibbs in 1747", whose demesne passed to the local authority in 1985 under an agreement leaving the family collection in situ.', url: 'https://newbridgehouseandfarm.com/' },
      { claim: 'Fingal County Council, Newbridge House Visitors dataset, licensed Creative Commons Attribution 4.0: 31 rows including three year-total rows, a misspelled visitor column, projected X and Y coordinates beside correct latitude and longitude, and four zero rows recorded during Covid closures.', url: 'https://data.fingal.ie/datasets/FingalCoCo::newbridge-house-visitors-fcc' }
    ],
    rejectedClaims: [
      'Any Dublin-wide census percentage presented as a Fingal figure: the CSO publishes citizenship, home working, commuting and education only for all four Dublin authorities together, so those topics are omitted here.',
      'A single Blanchardstown population: the census does not publish it as a town in its own right.',
      'Placing Mount Temple Comprehensive in Fingal: its Malahide Road address is in Dublin 3.',
      'A Fingal County Hall eircode: the council contact page could not be read, so only the two heritage-site eircodes are printed.',
      'Any Dublin Airport passenger count: only the operator\'s stated planning ambition is quoted, and it is labelled as such.',
      'Anything owned by the Dublin city or Dun Laoghaire-Rathdown pages.'
    ]
  }
};
