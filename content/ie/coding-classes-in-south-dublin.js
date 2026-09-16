'use strict';
// South Dublin (cg- local authority page, Ireland cluster, Phase 4). South
// Dublin is NOT a county: it is South Dublin County Council, one of the four
// Dublin local authorities, and the page says so. Spine: the same facts
// published twice and differently, starting with a dataset the council lists as
// Creative Commons Attribution on the national portal and as Attribution
// ShareAlike in its own hub metadata. Facts read at primary sources on 16
// September 2026: sdcc.ie for population, area and home ownership; CSO PxStat
// F1013, F1015 and F1016; the CSO Dublin Profile 5, 7 and 8 releases, using
// ONLY the sentences that name South Dublin specifically and never the
// Dublin-wide aggregates; gov.ie's January 2018 LCCS list; tudublin.ie; tuh.ie.
// Tallaght, Clondalkin and Lucan have NO standalone census town populations,
// because the census folds them into the Dublin city and suburbs built-up area,
// so electoral area figures are used and labelled as a different boundary. The
// combined Tallaght figure of 79,822 is our own addition of two published rows.
// The Travellers figure is given for 2022 only, since the release states no
// 2016 comparison for South Dublin. The parking fines total row is mentioned in
// one line only, because the Fingal page owns that trap.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'SOUTH DUBLIN', blurb: 'Tallaght, Clondalkin and Lucan, with a project on one dataset published under two different licences.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-south-dublin',
  code: 'sdb',
  accent: '#57306B',
  accentRationale: 'South Dublin: a deep plum-violet from the solver, distinct from the Dublin city red and from every other Ireland page',
  pageType: 'governorate',
  place: {
    name: 'South Dublin',
    eyebrow: 'South Dublin, County Dublin',
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
  routeLabel: 'South Dublin, County Dublin, Ireland',
  title: 'Coding Classes in South Dublin | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across South Dublin, from Tallaght and Clondalkin to Lucan and Rathfarnham, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for South Dublin, on a page about one council dataset published under two different licences, and a hospital page that contradicts itself.',
  twitterDescription: 'Coding classes across South Dublin, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for South Dublin Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across South Dublin, taught live in English.'
  },

  h1: 'Coding classes in South Dublin',
  capsuleQ: 'What are the best coding classes in South Dublin?',
  capsule: 'South Dublin County Council has existed since 1 January 1994 and covers 222.74 square kilometres, with 301,075 people living in 100,364 homes at the 2022 census, an 8% rise on 2016. Its average age of 37.2 is lower than Leinster, Dublin City and the State, and two thirds of households own their home. It is a young, working area with 137,100 people at work, and an average commute of 30.6 minutes. Our classes are live online at a fixed weekly hour for ages 6 to 67, in ability groups of five to ten or one to one. The first lesson costs nothing, then a group place is USD 100 a month and private tuition USD 150.',
  lead: 'Here is a small thing that matters more than it sounds. South Dublin County Council publishes a dataset of parking fines. Look it up on the national open data portal and it says the licence is Creative Commons Attribution. Open the council\'s own data hub, where the same file actually lives, and the metadata says Attribution ShareAlike, which is a different licence with a different obligation attached. One council, one file, two answers about what you are allowed to do with it. Nothing is hidden and nobody is at fault; publishing surfaces drift apart. But a student who builds something on that file has to know which licence governs it, and the only way to find out is to look in both places and notice they disagree. That habit, checking the same fact in two sources before relying on it, is what this page teaches, and it turns out South Dublin offers several chances to practise.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in South Dublin.',

  picks: {
    eyebrow: 'Course picks for South Dublin',
    h2: 'Four courses for Tallaght to Lucan',
    intro: 'Pick on what the learner wants to make rather than on age alone. Each begins with a free lesson, taught live, with nothing asked for in return.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and first programs, where the same thing gets written down twice and the program has to decide which version to believe.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through the school years, practised on council files rather than on tidy examples made up for textbooks.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'One file, two licences, and the question of which one actually governs what you publish.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults handling reports: checking a figure in a second source before it reaches a decision.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'South Dublin today',
      h2: 'Three big places, and not one of them is a census town',
      intro: 'South Dublin is home to Tallaght, Clondalkin and Lucan, and the census does not publish a population for any of them.',
      body: [
        { kind: 'table', caption: 'South Dublin in Census 2022, from the council and from CSO tables naming South Dublin', head: ['Measure', 'Figure'], rows: [
          ['Population', '301,075, living in 100,364 homes, up 8% on 2016'],
          ['Area', '222.74 square kilometres, as the council states it'],
          ['Average age', '37.2 years, below Leinster at 37.6, Dublin City at 38.6 and the State at 38.8'],
          ['Home ownership', '66.5% of households'],
          ['At work', 'Over 137,100 people, with almost 103,700 full time and over 18,700 part time'],
          ['Average commute', '30.6 minutes, exactly the same as in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why no town figures', p: 'The census folds Tallaght, Clondalkin and Lucan into one continuous built-up area with the rest of the city, so none of them appears as a town in its own right in the 2022 tables.' },
          { h3: 'The nearest official breakdown', p: 'Electoral areas, which are drawn differently: Lucan at 55,785, Clondalkin at 52,878, Rathfarnham and Templeogue at 52,805, Tallaght South at 43,644, Firhouse and Bohernabreena at 37,643, Tallaght Central at 36,178 and Palmerstown and Fonthill at 22,142.' },
          { h3: 'Tallaght, added up', p: 'The two Tallaght electoral areas together hold 79,822 people. That is our own addition of two published rows, and it describes electoral areas rather than the town.' }
        ] },
        { kind: 'p', text: 'The seven electoral areas sum to exactly 301,075, which matches the council\'s own published figure to the person, so this is a hierarchy you can rely on. Outside the built-up area, the census does publish small towns: Saggart, with an average age of 30.4 and a third of its people under 15, is the youngest town in the whole Dublin region; Rathcoole holds 5,792 people at 5,270.4 per square kilometre; and Newcastle holds 4,526.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in South Dublin schools',
      h2: 'Three schools in the first phase',
      intro: 'When Leaving Certificate Computer Science began in September 2018, three of the named schools were inside South Dublin.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The three', p: 'Coláiste Bríde on New Road in Clondalkin, Colaiste Phadraig at Roselawn in Lucan, and Adamstown Community College on Station Road.' },
          { h3: 'How we placed them', p: 'Adamstown is confirmed as South Dublin by the council itself, which describes it as a planned urban development in the north of its area aiming to deliver over 9,000 homes.' },
          { h3: 'What it means now', p: 'Only that the subject started here in 2018. No current official list exists, so nobody can tell you from published sources where it is taught today.' }
        ] },
        { kind: 'p', text: 'For what comes after school, the area holds a Technological University campus of its own. TU Dublin\'s Tallaght campus sits on an 18 hectare site between Old Blessington Road, Belgard Road and Greenhills Road, has over 5,000 students, and gives its address as Blessington Road, Tallaght, Dublin 24, D24 FKT9. Tallaght University Hospital, at D24 NR0A, opened on 21 June 1998 through the amalgamation of three voluntary hospitals and runs 562 beds, 12 theatres and 14 critical care beds.' },
        { kind: 'spec', title: 'A second source, a second answer', p: 'The hospital\'s own page is itself a small lesson in reading carefully. In one paragraph it describes its campus as 31 acres and in another as built on a 35 acre site, and it gives its catchment as both over 640,000 people and circa 800,000. We quote none of those four numbers as fact, only the ones the page states unambiguously. When a source disagrees with itself, the honest move is to use what is consistent and say why you left the rest.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One dataset, two licences',
      intro: 'Every project a learner publishes rests on somebody else\'s permission. This one starts there, rather than treating the licence as a formality at the end.',
      body: [
        { kind: 'table', caption: 'What we found when we checked the same dataset twice, read 16 September 2026', head: ['Where we looked', 'What it says'], rows: [
          ['The national open data portal page for the dataset', 'Licensed under Creative Commons Attribution 4.0'],
          ['The council\'s own data hub, where the file is hosted', 'Licence recorded as Attribution ShareAlike'],
          ['The practical difference', 'ShareAlike requires anything you build on it to carry the same licence; plain Attribution does not'],
          ['Which one governs', 'A question for the publisher, and worth an email before you publish anything derived']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why this is not nitpicking', p: 'If a student publishes an app built on ShareAlike data without the matching licence, they are in breach. The obligation is real even though the mistake is easy and the difference is one word.' },
          { h3: 'What a good learner does', p: 'Records both readings, notes the date, uses the stricter interpretation until the publisher clarifies, and writes to ask. That last step is a perfectly reasonable thing for a teenager to do.' },
          { h3: 'The wider habit', p: 'Any fact worth acting on is worth finding twice. Licences, figures, definitions, dates: the second source is where you learn whether the first was solid.' }
        ] },
        { kind: 'callout', h3: 'And while you are in there, look at the rows', p: 'The same parking fines file carries thirteen rows for twelve months, because the thirteenth is labelled Total and carries the same columns as the months. It is a good reminder that a file can be clean, current and well published and still need reading before it is summed. Our students note it, exclude it and move on, because the licence question above is the one that actually decides whether their project can be published at all.' },
        { kind: 'p', text: 'The deliverable is a short source note: what the dataset is, where it lives, what each surface says about the licence, what the learner concluded and why. It takes ten minutes and it is the thing that would stand up if anybody ever asked.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Checking twice',
      h2: 'Five facts worth finding in two places',
      intro: 'A short discipline that costs minutes and prevents the errors that are hardest to undo.',
      body: [
        { kind: 'table', caption: 'Where second sources earn their keep', head: ['Fact', 'Why one source is not enough', 'What you do'], rows: [
          ['A licence', 'Publishing surfaces drift apart, as this council\'s two do', 'Check the portal and the host, and use the stricter until told otherwise'],
          ['A population', 'Different boundaries carry the same name', 'Confirm which unit the figure describes before comparing it'],
          ['An institution\'s own numbers', 'Pages are edited in parts and can disagree with themselves', 'Use only what the source states consistently'],
          ['A date', 'A harvest date is not a data date', 'Prefer a date stated inside the file'],
          ['A total', 'Summary rows hide inside detail rows', 'Look at the rows before summing the column']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A game where two signs give different instructions, and the player has to decide which to follow and explain the choice.' },
          { h3: 'Teenagers', p: 'The real dataset in Python, plus a written source note covering the licence disagreement and what they did about it.' },
          { h3: 'Adults', p: 'The same routine at work, where the expensive mistakes come from figures nobody checked in a second system.' }
        ] },
        { kind: 'p', text: 'We are not connected with South Dublin County Council, TU Dublin, Tallaght University Hospital or any school named here. Population and area figures come from the council\'s own published statements and from Central Statistics Office tables that name South Dublin directly; Dublin-wide figures covering all four local authorities are deliberately not used. The Tallaght electoral area addition is ours and is labelled as such.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living here',
      h2: 'D24, the Luas and a quarter of a million commutes',
      intro: 'South Dublin is a working area with good transport and long enough journeys to make an evening class in a room a real cost.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'How people travel', p: 'Of 122,000 commuters, just over 69,000 drive, more than 15,200 take the bus, just over 4,000 use a train, DART or Luas, nearly 6,900 walk and over 5,200 cycle.' },
          { h3: 'Working from home', p: 'Over 75,900 people never work from home, while almost 46,600 do at least part of the time, including almost 13,300 for a full five days a week.' },
          { h3: 'Who lives here', p: 'The largest non-Irish groups are Polish at 5,739 and Romanian at 4,943, the commonest dual citizenships are Irish-Nigerian at 1,220 and Irish-Polish at 1,176, and 6,517 people moved into the area in the year before the census.' }
        ] },
        { kind: 'spec', title: 'A place with plenty of students', p: 'Almost 10,900 third-level students commute within South Dublin, most of them by bus. Between them and the 1,943 Travellers recorded here in 2022, this is an area of very mixed circumstances, and a class that reaches every postcode equally is worth more here than in most places.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two signs to a source note',
    intro: 'Bands are a guide. What decides a start is the free lesson and what the learner does in it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Which one is right?', p: 'Programs that meet two versions of the same fact and have to choose, out loud.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Where facts come from', p: 'Finding the same figure in two places and noticing when they differ.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Licences and sources', p: 'Reading terms, writing a source note, and knowing what may and may not be published.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Verification at work', p: 'Building the second check into a routine so nobody has to remember it.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will tell you the licence. Why should a Tallaght teenager look it up?',
    intro: 'Because the answer depends on which page you read, and a tool will usually read one.',
    p1: 'Ask an AI tool what licence a council dataset carries and it will answer with whichever description it has seen. For this file that might be Attribution, or it might be Attribution ShareAlike, and both answers are supported by a real page belonging to the same council. Neither the tool nor the student is wrong; the sources disagree. What the tool will not do, unless asked, is tell you that a second surface exists and says something different.',
    p2: 'Checking both takes two minutes and changes what a learner is allowed to publish. It is the clearest possible example of why judgement sits with the person rather than the tool, and it is a habit that costs nothing to build early.',
    closer: 'So a South Dublin child learning to code in 2026 is learning to ask where a claim came from, and whether anywhere else says otherwise. That question is going to matter more every year, not less.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Tallaght, Clondalkin, Lucan, Rathfarnham or Saggart',
    intro: 'This is a densely built, well connected place where an evening class still means a bus and a wait. Online removes both.',
    cells: [
      { h3: 'No bus, no wait', p: 'A learner in Firhouse and one in Palmerstown are in the same class at the same moment, and neither stands at a stop to get there.' },
      { h3: 'The school year as spoken', p: 'Junior Cycle, Transition Year, fifth and sixth year: the words your school uses are the words the teacher uses.' },
      { h3: 'A free lesson that teaches', p: 'A real task with a real teacher, ending in a clear recommendation, and no request for payment details.' },
      { h3: 'Levels, not ages', p: 'Five to ten learners who work at one pace, drawn from South Dublin and further afield so every level has a workable hour.' },
      { h3: 'Weekly and reliable', p: 'Two lessons in most weeks, about eight a month, at one fixed time, with breaks planned around exams and holidays.' },
      { h3: 'The clock difference', p: 'Our teachers work from India, four and a half hours ahead of Ireland in summer and five and a half in winter.' }
    ],
    spec: { title: 'For the 46,600 who already work from home', p: 'Almost 46,600 people here work from home at least part of the time, and almost 13,300 do it every day. In those households the equipment, the broadband and the habit of working over video are already in place, and a live class fits the week without any adjustment at all.' }
  },

  fees: {
    h2: 'What classes cost in South Dublin',
    intro: 'Three numbers, stated once and not added to.',
    first: 'One complete lesson at no charge, ending with a level and a course named.',
    group: 'A month of classes, normally eight, shared with five to ten learners of similar ability.',
    private: 'The same month of classes with the teacher working with one learner only.',
    closer: 'Charging is monthly in US dollars at the one rate used outside India, so Rathfarnham pays what Brittas pays and there is no euro list. Nothing is billed until the free lesson has produced a course and an hour, and the pricing page explains pauses, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews, as our families wrote them',

  book: {
    h2: 'Tell us about the learner',
    intro: 'The first task is chosen to suit: a two-signs game for a young child, a first file opened in code for the middle years, or the licence question for a teenager.',
    success: 'Thank you. Somebody will be in touch about your South Dublin class shortly.'
  },

  faq: {
    h2: 'South Dublin coding class questions',
    intro: 'What families here ask before booking.',
    items: [
      { q: 'Is South Dublin a county?', a: 'Not quite. South Dublin County Council is one of the four local authorities in County Dublin, created on 1 January 1994, covering 222.74 square kilometres with 301,075 people at the 2022 census.' },
      { q: 'What is the population of Tallaght?', a: 'The census does not publish one, because Tallaght is folded into the Dublin city and suburbs built-up area. The closest official figures are the two Tallaght electoral areas, which hold 36,178 and 43,644 people, or 79,822 together by our own addition.' },
      { q: 'Which South Dublin schools first offered Leaving Certificate Computer Science?', a: 'Three were on the January 2018 first-phase list: Coláiste Bríde in Clondalkin, Colaiste Phadraig in Lucan and Adamstown Community College.' },
      { q: 'What is the South Dublin data project?', a: 'Students check one council dataset in two places and find that the national portal calls it Creative Commons Attribution while the council\'s own hub records Attribution ShareAlike, then write a source note explaining which they will follow and why.' },
      { q: 'Does that licence difference really matter?', a: 'Yes. ShareAlike obliges anything built on the data to carry the same licence, and plain Attribution does not. For anyone publishing a project, that is the difference between compliant and not.' },
      { q: 'Is there third level in the area?', a: 'TU Dublin\'s Tallaght campus, on an 18 hectare site with over 5,000 students, at D24 FKT9. We have no connection with the university.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed in the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in South Dublin?', a: 'No, and we are careful never to imply one. Teaching happens live over video, with no premises anywhere in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number printed here belongs to India.', boiler: true },
      { q: 'What do South Dublin coding classes cost?', a: 'The opening lesson is free. After that, a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, grouped by ability, pace and goal rather than by age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The rest of the Dublin area',
    html: 'The city is at <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>, the north of the county at <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> and the south-east coast at <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a>. Inland, <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> begins where Lucan ends. Everything is gathered on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South Dublin and Dublin',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-sdb .cg-hero-grid { align-items: start; gap: clamp(1.16rem, 3.12vw, 2.68rem); }
.cg-root.cg-sdb .cg-hero h1 { font-weight: 700; letter-spacing: -0.0198em; line-height: 1.06; }
.cg-root.cg-sdb .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.16rem; }
.cg-root.cg-sdb .cg-eyebrow { letter-spacing: 0.168em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sdb .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.0135em; }
.cg-root.cg-sdb .cg-grid-3 { gap: clamp(1.04rem, 2.52vw, 2.0rem); }
.cg-root.cg-sdb .cg-table caption { letter-spacing: 0.034em; font-weight: 700; }
.cg-root.cg-sdb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sdb .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-sdb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.96rem; }
.cg-root.cg-sdb .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'South Dublin, one of the four Dublin local authorities rather than a county. The council states that it came into existence on 1 January 1994, operates in an area of 222.74 square kilometres, and had 301,075 people living in 100,364 homes at the 2022 census, an 8 percent increase on 2016, with an average age of 37.2, lower than Leinster at 37.6, Dublin City at 38.6 and the State at 38.8, and home ownership at 66.5 percent. CSO table F1016 gives seven electoral areas that sum to exactly 301,075: Lucan 55,785, Clondalkin 52,878, Rathfarnham-Templeogue 52,805, Tallaght South 43,644, Firhouse-Bohernabreena 37,643, Tallaght Central 36,178 and Palmerstown-Fonthill 22,142. DERIVED, and labelled as ours: the two Tallaght areas together hold 79,822 people, an electoral area figure rather than a town. Tallaght, Clondalkin and Lucan have no standalone census town populations, because the 2022 tables fold them into the Dublin city and suburbs built-up area. Small towns that are published: Saggart 4,573 with an average age of 30.4 and 33.4 percent aged under 15, the youngest in the Dublin region; Rathcoole 5,792 at 5,270.4 persons per sq km across 1.1 sq km, average age 35.7; Newcastle 4,526 at 1,363.7 per sq km, average age 32.8. From the CSO Dublin profiles, using only sentences naming South Dublin: the largest non-Irish groups are Polish at 5,739 and Romanian at 4,943; the largest dual citizenships Irish-Nigerian at 1,220 and Irish-Polish at 1,176; 6,517 people moved into the area in the previous year, 2,297 from within Ireland and 4,220 from outside the State, with a further 11,375 moving within it; 1,943 Travellers were recorded in 2022, with no 2016 comparison published for South Dublin; over 137,100 people at work, almost 103,700 full time and over 18,700 part time; labour force participation 63 percent, 58 percent for women and 69 percent for men; wholesale and retail the largest sector at almost 18,500 workers; over 75,900 never working from home against almost 46,600 who do at least part of the time, including almost 13,300 for five days; of 122,000 commuters, just over 69,000 driving, more than 15,200 by bus, just over 4,000 by train, DART or Luas, nearly 6,900 walking and over 5,200 cycling; an average journey time of 30.6 minutes, the same as 2016; almost 10,900 third-level students commuting, most by bus; Irish speakers rising from almost 91,000 to just over 98,000, 36 percent of those aged three and over; just over 84,000 people holding a third-level qualification, stated as a count with no percentage published for South Dublin; nearly 51,400 people, 27 percent, completing education at upper secondary level against 26 percent nationally; and the average age at which full-time education ended rising to 20.5. Gov.ie, 4 January 2018: three first-phase Leaving Certificate Computer Science schools are here, Colaiste Bride in Clondalkin, Colaiste Phadraig in Lucan and Adamstown Community College, with Adamstown confirmed as South Dublin by the council\'s own description of it as a planned urban development in the north of its area delivering over 9,000 homes. TU Dublin Tallaght: an 18 hectare site between Old Blessington Road, Belgard Road and Greenhills Road, over 5,000 students, D24 FKT9. Tallaght University Hospital, D24 NR0A, opened 21 June 1998 from the amalgamation of the Adelaide, the Meath and the National Children\'s Hospital, with 562 beds, 12 theatres and 14 critical care beds; its own page states two different campus acreages and two different catchment figures, so neither is used.',
    localProject: 'One dataset, two licences. South Dublin County Council publishes Parking Fines Issued 2024 among 233 datasets. The national open data portal page states "Licensed under: Creative Commons Attribution 4.0", while the council\'s own ArcGIS hub item records licenseInfo as CC-BY-SA, a different licence carrying a ShareAlike obligation. Both surfaces belong to the same council and describe the same file, and the difference decides whether a derived work must itself be licensed alike. The teaching output is a source note recording both readings, the date checked, the interpretation used, being the stricter of the two, and an email to the publisher asking which governs. The same file also contains thirteen rows for twelve months, the thirteenth being a Total row carrying identical columns whose values equal the twelve months exactly, at 10,486 tickets, so a naive sum returns 20,972; this is mentioned in a single line because the Fingal page owns the embedded-total trap in depth.',
    requiredMentions: [
      '301,075',
      '222.74',
      '100,364',
      '55,785',
      '52,878',
      '79,822',
      '5,739',
      '4,943',
      '6,517',
      '1,943',
      '30.6 minutes',
      'D24 FKT9',
      'Saggart'
    ],
    sources: [
      { claim: 'South Dublin County Council: "South Dublin County Council came into existence on the 1st January 1994 and operates in an area of 222.74 square kilometres. South Dublin has a population of 301,075 people living in 100,364 homes according to the 2022 census, an 8% population increase"; "The average age for the county is 37.2 years ... while the home ownership rate is 66.5%."', url: 'https://www.sdcc.ie/en/services/our-council/about-us/' },
      { claim: 'CSO table F1016: Lucan 55,785, Clondalkin 52,878, Rathfarnham-Templeogue 52,805, Tallaght South 43,644, Firhouse-Bohernabreena 37,643, Tallaght Central 36,178 and Palmerstown-Fonthill 22,142, summing to 301,075.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO tables F1013 and F1015: Saggart 4,573 with average age 30.4 and 33.4% under 15; Rathcoole 5,792 at 5,270.4 per sq km; Newcastle 4,526 at 1,363.7 per sq km; no separate Tallaght, Clondalkin or Lucan town rows exist for 2022.', url: 'https://data.cso.ie/table/F1015' },
      { claim: 'CSO Profile 5, Dublin: "The largest groups in South Dublin were Polish citizens (5,739 people) and Romanian citizens (4,943)"; "In South Dublin the largest dual-Irish citizenships were Irish-Nigerian (1,220 people) followed by Irish-Polish (1,176)"; 6,517 people moved into South Dublin in the previous year; "there were 1,943 in South Dublin" for Travellers in 2022.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligiondublin' },
      { claim: 'CSO Profile 7, Dublin: "over 137,100 people working in South Dublin"; participation 63%; "In South Dublin almost 103,700 were in full-time employment while over 18,700 were working part-time"; "In South Dublin the average journey time in April 2022 was 30.6 minutes, the same as 2016"; commuting and home-working splits as quoted.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingdublin' },
      { claim: 'CSO Profile 8, Dublin: "In South Dublin the number of Irish speakers grew from almost 91,000 to just over 98,000. This was 36% of those aged three years and over"; "just over 84,000 people in South Dublin" holding a third-level qualification; 27% completing at upper secondary level against 26% nationally.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationdublin' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes "Coláiste Bríde / New Road, Clondalkin, Dublin 22", "Colaiste Phadraig / Roselawn, Lucan, Co. Dublin" and "Adamstown Community College / Station Rd, Adamstown, Co. Dublin".', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'South Dublin County Council on Adamstown: "a planned urban development in the north of South Dublin County Council, which has the aim of delivering over 9,000 residential units".', url: 'https://www.sdcc.ie/en/services/planning-building-control/strategic-development-zones/adamstown/' },
      { claim: 'TU Dublin Tallaght: "Situated on the southwest side of the city and has over 5,000 students. The campus is located on an 18-hectare site between Old Blessington Road, Belgard Road and Greenhills Road"; address "TU Dublin, Blessington Road, Tallaght, Dublin 24, D24 FKT9".', url: 'https://www.tudublin.ie/explore/our-campuses/tallaght/' },
      { claim: 'Tallaght University Hospital: "The Hospital opened on June 21st 1998 through the amalgamation of three independent voluntary hospitals"; "562 beds, 12 theatres, and 14 Critical Care beds"; address Tallaght, Dublin D24 NR0A. The same page states two different campus acreages and two different catchment figures.', url: 'https://www.tuh.ie/about-us/' },
      { claim: 'Parking Fines Issued 2024 SDCC: the data.gov.ie page states "Licensed under: Creative Commons Attribution 4.0" while the council\'s own hub item records licenseInfo as CC-BY-SA; the file holds twelve monthly rows totalling 10,486 tickets plus a thirteenth Total row carrying the same value.', url: 'https://data.gov.ie/dataset/parking-fines-issued-2024-sdcc' }
    ],
    rejectedClaims: [
      'Any Dublin-wide figure covering all four local authorities presented as a South Dublin figure.',
      'A standalone population for Tallaght, Clondalkin or Lucan: the census publishes none for 2022.',
      'A 2016 comparison or percentage change for Travellers in South Dublin: the release states only the 2022 count.',
      'A third-level qualification rate for South Dublin: only a headcount is published, never a percentage.',
      'A South Dublin population density from the CSO: none is published, and the council\'s own area and population are quoted separately instead.',
      'The hospital\'s campus acreage or catchment: its own page gives two different figures for each.',
      'Anything owned by the Dublin city, Dun Laoghaire-Rathdown or Fingal pages.'
    ]
  }
};
