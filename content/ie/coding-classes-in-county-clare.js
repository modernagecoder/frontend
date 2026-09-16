'use strict';
// County Clare (cg- county page, Ireland cluster, Phase 4). Spine: the label on
// the tin. Clare County Council's publisher page on the national open data
// portal advertises seven datasets. Two of them are Limerick County Council
// data, filed under Clare, one carrying the source's own misspelling
// "Limericke" and another titled "Limerick Settlement Stratedgy". Two more are
// duplicate records of datasets already listed, distinguishable only by CKAN's
// trailing "1" in the URL slug. So seven catalogue entries are five distinct
// topics, three of which are actually Clare's. Nothing here is hidden; it is
// simply never checked. Facts read at primary sources on 16 September 2026: the
// Clare Summary, Profile 1, 5, 7 and 8 press statements; PxStat F1013 and
// F1016; gov.ie's January 2018 LCCS list; tus.ie; shannongroup.ie;
// cliffsofmoher.ie; data.gov.ie. EXCLUDED: the 4,435 people counted under Clare
// County Council as part of Limerick city and suburbs, which belong to the
// Limerick page, mentioned here only as structure and never as a figure; the
// 58,686 vs 56,686 contradiction inside the Clare Profile 1 release, which is
// real but is the same kind of finding the Kerry page already owns; and any
// county density figure, which the CSO does not publish at council level.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY CLARE', blurb: 'Ennis, Shannon and the west coast, with a project on a data catalogue that miscounts itself.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-clare',
  code: 'cla',
  accent: '#0D5A36',
  accentRationale: 'County Clare: a deep emerald from the solver, kept clear of the greens already used on the Leinster county pages',
  pageType: 'governorate',
  place: {
    name: 'County Clare',
    eyebrow: 'County Clare, Munster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-limerick', name: 'Limerick' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Limerick', href: '/best-coding-class-in-limerick' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Clare, Ireland',
  title: 'Coding Classes in County Clare | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Clare, from Ennis and Shannon to Kilrush, Ennistymon and Scariff, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Clare, built on a project about a public data catalogue that lists seven datasets and holds five.',
  twitterDescription: 'Coding classes across County Clare, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Clare Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Clare, taught live in English.'
  },

  h1: 'Coding classes in County Clare',
  capsuleQ: 'What are the best coding classes in County Clare?',
  capsule: 'County Clare holds 127,938 people, 9,121 more than in 2016, including 24,998 children aged 15 and under. Ennis is much the largest town at 27,923, Shannon follows at 10,256, and the rest of the county runs from Kilrush and Ennistymon on the coast to Killaloe on the lake. Clare also has the second highest share of Irish speakers of any county. We teach ages 6 to 67 live online at a fixed weekly hour, in ability groups of five to ten or one to one, beginning with a free lesson and then USD 100 a month in a group or USD 150 privately.',
  lead: 'Clare County Council\'s page on the national data portal says seven datasets. Count them properly and there are five. Two entries are the same datasets published twice, the copies distinguishable only by a stray digit at the end of a web address. That would be a small thing on its own, except that two of the remaining entries are not Clare data at all: one describes itself as owned and provided by Limerick County Council, and its own text misspells the name of that council. So a catalogue of seven is really five topics, three of which belong to this county. None of this is concealed. It is written on the page, in plain sight, waiting for somebody to read it rather than count it. That habit, reading what a label actually says instead of trusting what it claims, is what we build here.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Clare.',

  picks: {
    eyebrow: 'Course picks for County Clare',
    h2: 'Where a Clare learner starts',
    intro: 'Four routes in, chosen by age and by what the learner wants to make. The free lesson decides which, and it is taught by the teacher who would take the course.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with a list that has repeated items in it, and a child who has to notice before counting.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python and a realistic first look at what an AI answer is worth, before the Junior Cycle years.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Auditing a real public catalogue: what it claims to hold against what it actually holds.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults automating work that depends on somebody else\'s labels being right.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Clare in the 2022 census',
      intro: 'Each figure below is quoted from a Central Statistics Office release that names Clare or a Clare town.',
      body: [
        { kind: 'table', caption: 'County Clare, Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '127,938, up 9,121 since 2016'],
          ['Women and men', '65,021 female and 62,917 male, or 97 males for every 100 females'],
          ['Average age', '40.1 years, against 38.5 in 2016'],
          ['Children aged 15 and under', '24,998'],
          ['People aged three and over who can speak Irish', '54,437 of 123,728, or 47%, the second highest share of any county'],
          ['Third level qualifications', 'Just over 37,300 people, a rate of 44% against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ennis and Shannon', p: 'Ennis holds 27,923 people over 23.1 square kilometres. Shannon holds 10,256 over 7.3, which makes it the denser town at 1,408.6 people per square kilometre.' },
          { h3: 'Town and hinterland', p: 'As electoral areas rather than towns, Ennis covers 33,952 people, Shannon 31,774 and Ennistimon 18,052, the difference being the countryside each one reaches into.' },
          { h3: 'Youngest and oldest', p: 'Among places of at least 500 people, Crusheen has the youngest average age at 33.1 years and Cratloe the oldest at 46.2.' }
        ] },
        { kind: 'p', text: 'Clare has no Gaeltacht, and yet 47% of its residents aged three and over can speak Irish, a share beaten only by County Galway. Non-Irish citizens make up 10% of the county, led by UK citizens at 2,471, Polish at 2,462, Ukrainian at 976 and Indian at 578, while the number of people holding dual Irish citizenship has risen from 2,588 in 2016 to 4,572.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Seven datasets, five datasets',
      intro: 'A short audit of a real public catalogue, done entirely by reading rather than downloading.',
      body: [
        { kind: 'table', caption: 'Clare County Council on the national open data portal, read 16 September 2026', head: ['Catalogue entry', 'What its own description says'], rows: [
          ['Clare County Council Departments', 'A Clare dataset'],
          ['Clare County Council Departments, second record', 'The same dataset again, its address ending in a 1'],
          ['Playgrounds owned and managed by Clare County Council', 'A Clare dataset'],
          ['Playgrounds, second record', 'The same dataset again, its address ending in a 1'],
          ['Dolphin Watching', 'A Clare dataset'],
          ['Limerick Landscape Characterisation', 'Owned and provided by Limerick County Council, June 2010'],
          ['Limerick Settlement Stratedgy', 'Owned and provided by Limerick County Council, part of the Limerick development plan']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the count should be', p: 'Seven records, five distinct topics, three of which are Clare\'s own. A script that trusted the publisher field would report seven Clare datasets and be wrong twice over.' },
          { h3: 'The misspellings', p: 'One description says Limericke and one title says Stratedgy. Both are reproduced exactly as published, because a typo in a title is a real obstacle: search for the correct spelling and you will not find the record.' },
          { h3: 'The licence', p: 'All seven are published under a Creative Commons Attribution licence, which is what makes this audit publishable at all. Learners read the licence before the data.' }
        ] },
        { kind: 'callout', h3: 'Why the duplicates are the interesting part', p: 'The two repeated records are not identical rows inside one file. They are separate catalogue entries whose web addresses differ by a single trailing character, which is what a system does automatically when something is uploaded twice under the same name. That is why nobody notices: the list looks longer, everything on it works, and the total is simply wrong. The same pattern shows up in school systems, club memberships and customer lists everywhere, and the fix is always the same. Count unique identifiers, not rows on a screen.' },
        { kind: 'p', text: 'The written output is a one-page audit note: how many records, how many distinct topics, how many actually belong to the county named, which text was quoted exactly and what the licence permits. A teenager who can produce that page can do a piece of genuine data work, and it is a far better Transition Year project than anything generated in ten seconds.' }
      ]
    },
    {
      id: 'labels', tint: 'tint', eyebrow: 'Labels and borders',
      h2: 'What else in Clare is not quite what its label says',
      intro: 'Two more cases from the same county, both of them honest, both of them easy to misread.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A city that reaches into Clare', p: 'Part of Limerick city\'s built-up area lies inside County Clare, so some residents are counted in this county\'s council figures while belonging to that city\'s town figures. Neither is wrong. They answer different questions.' },
          { h3: 'The school address', p: 'The one Clare school on the first national computer science list is published by the department as Ennistymon Vocational School, Ennistymon, Ennis, Co. Clare, which mixes two towns in one address line and is quoted here exactly as issued.' },
          { h3: 'The spelling of a town', p: 'The statistics office writes the electoral area as Ennistimon while the school address writes Ennistymon. Search for one and you will miss the other, which is why exact quoting matters.' }
        ] },
        { kind: 'spec', title: 'The rule a learner takes away', p: 'A name is not a key. People, systems and councils spell the same place three ways, file records under whichever office uploaded them, and publish totals that count the same thing twice. Anyone who works with real data eventually learns to check what a label points at rather than what it reads like. Learning that at fifteen instead of at twenty-five is a genuine advantage.' }
      ]
    },
    {
      id: 'work', tint: '', eyebrow: 'Work, study and the road',
      h2: 'Manufacturing, an airport and a long drive',
      intro: 'Where Clare works, what it studies, and how far it travels to do either.',
      body: [
        { kind: 'table', caption: 'Working in County Clare, Census 2022', head: ['Measure', 'Figure'], rows: [
          ['People at work', 'More than 56,100'],
          ['Largest sector', 'Manufacturing, at over 8,600 workers'],
          ['Travelling to work', '49,330 people'],
          ['Driving by car', '34,070'],
          ['Walking and cycling', '3,014 and 528'],
          ['Average journey time', '26.7 minutes, up from 24.5 minutes in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Home working', p: 'Over 33,200 people never work from home while more than 16,500 do at least some of the time, which the statistics office puts at 29% of the workforce against 32% nationally.' },
          { h3: 'Third level in the county', p: 'TUS runs a dedicated campus on Bindon Street in Ennis, eircode V95 DP96, separate from its Limerick and midlands campuses.' },
          { h3: 'The airport', p: 'Shannon Airport describes itself as Ireland\'s second largest long-haul airport, with the country\'s longest runway and 24 hour operations without slots or curfews, 25 minutes from Limerick and 45 from Galway.' }
        ] },
        { kind: 'p', text: 'One well known Clare address publishes no eircode on its own contact page, so we print none for it: the Cliffs of Moher, which its operators describe as stretching eight kilometres and reaching 214 metres at the highest point, with O\'Brien\'s Tower built there in 1835. That is the discipline this whole page runs on. If the owner of a fact has not published it, we do not print it, however easy it would be to find somewhere less reliable.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From spotting a duplicate to auditing a catalogue',
    intro: 'Ages are a guide. The free lesson settles where a learner actually starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The same thing twice', p: 'Lists with repeats in them, and programs that have to notice before they count.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Names and keys', p: 'Why two spellings of one town break a lookup, and what to use instead.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Auditing a source', p: 'Counting unique records, checking who each one belongs to, and writing the note.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Trusting a feed', p: 'Building processes that survive somebody else filing a record under the wrong name.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'How many datasets does Clare County Council publish?',
    intro: 'Every quick answer says seven, because seven is what the page displays.',
    p1: 'The number seven is printed on the catalogue. It is the number an assistant will repeat, the number a summary will carry, and the number a report will cite. It is also wrong in two separate ways at once, and finding that out took about fifteen minutes of reading descriptions that were public the whole time.',
    p2: 'This is the shape of most real data mistakes. Not dramatic errors, but a plausible figure that nobody opened. A learner who has audited one catalogue by hand knows what that feels like, and afterwards they open things. That is a permanent change in how somebody works, and it comes from a single afternoon on a small, concrete example.',
    closer: 'Tools are getting better at producing answers quickly. Nothing is getting better at noticing that the question was answered from a label, and that is the job we are training children to do.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How a Clare class actually runs',
    intro: 'Six plain facts about the format, so nothing has to be guessed at.',
    cells: [
      { h3: 'Live, never recorded lessons', p: 'A teacher is present for the full hour and the learner talks back. Recordings are revision, not the class.' },
      { h3: 'One hour, one fixed slot', p: 'Usually twice a week, about eight lessons a month, on days agreed once and then kept.' },
      { h3: 'Nothing to install first', p: 'A laptop or desktop, working sound, a steady connection. We set up the tools during the first lessons.' },
      { h3: 'Placed by ability, not age', p: 'Groups of five to ten at one level, drawn from Clare and several other countries so the right class exists at a sensible hour.' },
      { h3: 'Written to Irish school terms', p: 'Junior Cycle, Transition Year, fifth and sixth year, with exam weeks and mid-terms planned around.' },
      { h3: 'Teachers ahead of Irish time', p: 'They work from India, four and a half hours ahead in summer and five and a half in winter, which suits afternoons and evenings here.' }
    ],
    spec: { title: 'Why this format suits this county', p: 'Clare commutes have grown to an average of 26.7 minutes and 34,070 people already do that drive by car. Kilrush to Ennis and back for an evening class is an hour and a half on top of a working day, in winter, on unlit roads. Removing that journey entirely is not a lesser version of a class in a room. For most families in west Clare it is the difference between doing it and not.' }
  },

  fees: {
    h2: 'Fees for Clare families',
    intro: 'What it costs, in three lines, with the conditions stated rather than buried.',
    first: 'A full first lesson, free, ending with a level and a recommendation.',
    group: 'Group classes for a month, normally eight lessons, five to ten learners at one level.',
    private: 'One to one classes for a month on the same weekly pattern.',
    closer: 'Everything is billed monthly in US dollars at the single rate we charge outside India, which means Kilkee and Ennis pay the same and no euro list exists to compare against. We charge nothing until the free lesson has settled a course and a weekly hour. Pauses, missed lessons and moving between group and one to one are all described on the pricing page rather than left to be discovered later.'
  },

  reviewsH2: 'Six Google reviews, reproduced word for word from our families',

  book: {
    h2: 'Who is the class for?',
    intro: 'Tell us the age and what they are curious about. The first lesson is built around that: a repeated-list puzzle for a young child, a two-spellings lookup for the middle years, or the catalogue audit for a teenager who wants real work.',
    success: 'Thank you. Somebody will be in touch about your County Clare class shortly.'
  },

  faq: {
    h2: 'County Clare coding class questions',
    intro: 'The questions Clare families put to us first.',
    items: [
      { q: 'How many people live in County Clare?', a: 'The 2022 census recorded 127,938 people, an increase of 9,121 since 2016, including 24,998 children aged 15 and under.' },
      { q: 'What is the Clare data project?', a: 'An audit of the county council\'s own open data listing. It advertises seven datasets, but two are duplicate records and two belong to Limerick County Council, leaving five distinct topics and three Clare ones.' },
      { q: 'Which Clare school first offered Leaving Certificate Computer Science?', a: 'Ennistymon Vocational School, published on the January 2018 national list with the address Ennistymon, Ennis, Co. Clare, which is how the department itself wrote it.' },
      { q: 'How big are Ennis and Shannon?', a: 'Ennis had 27,923 people in 2022 and Shannon 10,256. The surrounding electoral areas are larger again, at 33,952 and 31,774, because they include the countryside around each town.' },
      { q: 'Is Irish widely spoken in Clare?', a: 'Yes. 54,437 people aged three and over can speak Irish, which is 47% of that population and the second highest share of any county, although Clare has no Gaeltacht area.' },
      { q: 'Do you teach children in west Clare?', a: 'Yes, and the format suits there particularly. Kilrush, Kilkee, Doolin and Ennistymon are all a long evening drive from the nearest option in a room, and a live online class removes the journey rather than adding one.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed during the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in County Clare?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Clare coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Nearby, and the rest of the country',
    html: 'Across the estuary, <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a> has its own page, as do <a class="cg-inline-link" href="/best-coding-class-in-galway">Galway</a> to the north and <a class="cg-inline-link" href="/coding-classes-in-county-kerry">County Kerry</a> to the south. Comparing providers is covered at <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and the whole cluster is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Clare and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/best-coding-class-in-galway', label: 'Galway' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cla .cg-hero-grid { align-items: start; gap: clamp(1.16rem, 3.02vw, 2.52rem); }
.cg-root.cg-cla .cg-hero h1 { font-weight: 700; letter-spacing: -0.0214em; line-height: 1.055; }
.cg-root.cg-cla .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.09rem; }
.cg-root.cg-cla .cg-eyebrow { letter-spacing: 0.158em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cla .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.0151em; }
.cg-root.cg-cla .cg-grid-3 { gap: clamp(0.98rem, 2.71vw, 2.16rem); }
.cg-root.cg-cla .cg-table caption { letter-spacing: 0.023em; font-weight: 700; }
.cg-root.cg-cla .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cla .cg-table tr:nth-child(even) td { background: rgba(0,0,0,0.018); }
.cg-root.cg-cla .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.88rem; }
.cg-root.cg-cla .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'County Clare, Census 2022 (CSO Clare releases): population 127,938, up 9,121 (8 percent) since 2016; 65,021 female and 62,917 male, 97 males per 100 females; average age 40.1 against 38.5 in 2016; 24,998 children aged 15 and under. Towns (F1013): Ennis 27,923 at 1,208.4 per sq km over 23.1 sq km, the largest town in the county; Shannon 10,256 at 1,408.6 over 7.3 sq km. Local electoral areas (F1016): Ennis 33,952, Shannon 31,774, Ennistimon 18,052, each larger than the town because an LEA includes rural hinterland. Among places of at least 500 people, Crusheen is youngest at average age 33.1 and Cratloe oldest at 46.2. Citizenship: non-Irish citizens 10 percent of the county, largest groups UK 2,471, Polish 2,462, Ukrainian 976, Indian 578; dual Irish citizens up from 2,588 in 2016 to 4,572, largest Irish-US 1,347, Irish-UK 896, Irish-Australian 432. Irish language: 123,728 people aged three and over, of whom 54,437 could speak Irish, 47 percent, the same proportion as 2016 and the second highest of any county after Galway County, with no Gaeltacht area in Clare. Education: third level qualifications up from just under 30,000 in 2016 to just over 37,300, a rate of 44 percent against 45 percent nationally. Work (Profile 7): more than 56,100 at work; over 33,200 never working from home against more than 16,500 who do at least some of the time, 29 percent of the workforce against 32 percent nationally, including over 4,200 five days a week, 2,885 one day and 2,575 two days; manufacturing the largest sector at over 8,600 workers; 49,330 travelling to work, of whom 34,070 drive, 713 take the bus, 104 the train, 3,014 walk and 528 cycle; average journey time 26.7 minutes against 24.5 in 2016. Schools and sites: Ennistymon Vocational School, published by gov.ie on 4 January 2018 with the address "Ennistymon, Ennis, Co. Clare", the only Clare school on the first-phase Leaving Certificate Computer Science list; TUS Ennis Campus, Bindon Street, Ennis, eircode V95 DP96; Shannon Airport, described by its own group as Ireland\'s second largest long-haul airport with the country\'s longest runway and 24 hour unrestricted operations, 25 minutes from Limerick and 45 from Galway; the Cliffs of Moher, described by their operators as stretching 8km and reaching 214m at the highest point, with O\'Brien\'s Tower built in 1835 by Cornelius O\'Brien, and publishing no eircode on their own contact page, so none is printed.',
    localProject: 'Auditing a public data catalogue by reading it. Clare County Council\'s publisher page on data.gov.ie advertises seven datasets, all licensed Creative Commons Attribution 4.0. Measured directly on the page: two entries are duplicate records of datasets already listed, identifiable because the second copy\'s URL slug carries CKAN\'s trailing "1", namely clare-county-council-departments and clare-county-council-departments1, and playgrounds-owned-and-managed-by-clare-county-council and the same slug with a 1. Two further entries are not Clare data at all: "Limerick Landscape Characterisation", whose description reads "Dataset owned and provided by Limericke County Council June 2010", reproducing the source\'s own misspelling, and "Limerick Settlement Stratedgy", misspelled in its own title and described as owned and provided by Limerick County Council as part of the Limerick development plan. Seven catalogue records therefore represent five distinct topics, of which three belong to Clare. The output is a one-page audit note stating record count, distinct topics, ownership, exact quotations and what the licence permits. Two supporting label problems from the same county reinforce the point: the CSO writes the electoral area as Ennistimon while the Department of Education writes the school as Ennistymon, and part of Limerick city\'s built-up area lies inside County Clare, so some residents appear in this county\'s council figures and in that city\'s town figures at the same time.',
    requiredMentions: [
      '127,938',
      '27,923',
      '10,256',
      '24,998',
      '54,437',
      '34,070',
      '26.7 minutes',
      'V95 DP96',
      'Ennistymon',
      '4,572',
      '37,300',
      '8,600'
    ],
    sources: [
      { claim: 'CSO Clare summary press statement, 30 May 2023: "the population of Clare grew by 8% to 127,938, which means the number of people in the county rose by 9,121 between April 2016 and April 2022"; "65,021 were female and 62,917 were male"; average age 40.1 against 38.5; "There were 24,998 children aged 15 and under in Clare in April 2022."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsclare/' },
      { claim: 'CSO Profile 1 Clare: "Ennis was the largest town, with a population of 27,923 in April 2022"; Crusheen the youngest town at average age 33.1 and Cratloe the oldest at 46.2.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementsclare/' },
      { claim: 'CSO PxStat table F1013: Ennis 27,923 at 1,208.4 per sq km over 23.1 sq km; Shannon 10,256 at 1,408.6 over 7.3 sq km. Table F1016: Ennis LEA 33,952, Shannon LEA 31,774, Ennistimon LEA 18,052.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Clare: non-Irish citizens 10 percent of the county, UK 2,471, Polish 2,462, Ukrainian 976, Indian 578; dual Irish citizens up from 2,588 in 2016 to 4,572.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionclare' },
      { claim: 'CSO Profile 7 Clare: "There were more than 56,100 people at work in Clare in April 2022. Of these, over 33,200 never worked from home, while more than 16,500 people worked from home at least some of the time"; "There were 49,330 people travelling to work in the county"; 34,070 driving, 713 by bus, 104 by train, 3,014 walking, 528 cycling; average journey time 26.7 minutes against 24.5 in 2016; "The Manufacturing sector accounted for the largest number of workers in the county at over 8,600."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingclare/' },
      { claim: 'CSO Profile 8 Clare: "There were 123,728 people aged three years and over living in Clare in Census 2022. Of these, 54,437 people could speak Irish... Irish speakers made up 47% of the county\'s population... The county had the second highest proportion of Irish speakers in the country after Galway County"; third level up from just under 30,000 to just over 37,300, a rate of 44 percent against 45 percent nationally; Clare is not among the seven Gaeltacht counties listed in the same release.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationclare' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes "Ennistymon Vocational School / Ennistymon, Ennis, Co. Clare", the only Clare entry, quoted exactly as published.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Technological University of the Shannon contact page: "TUS Ennis Campus, Bindon Street, Ennis, Co. Clare V95 DP96."', url: 'https://tus.ie/contact-us/' },
      { claim: 'The Shannon Airport Group: "Shannon Airport is Ireland\'s second-largest long-haul airport... Located close to the western cities of Cork (1hr 40mins), Limerick (25mins), Galway (45mins)" and "Ireland\'s longest runway, combined with 24 hour unrestricted operations with no slots or curfews".', url: 'https://www.shannongroup.ie/about-us/' },
      { claim: 'Cliffs of Moher Visitor Experience: "The Cliffs stretch for 8km (5 miles) as the crow flies... The Cliffs reach 214m (702 feet) in height at their highest point", and O\'Brien\'s Tower "was built in 1835 by Cornelius O\'Brien, a descendant of Brian Boru". No eircode is published on the site\'s own contact page.', url: 'https://www.cliffsofmoher.ie/about-us/' },
      { claim: 'data.gov.ie, Clare County Council publisher page: "Datasets 7", all licensed Creative Commons Attribution 4.0, with two duplicate records carrying CKAN trailing-1 slugs and two entries whose descriptions attribute them to Limerick County Council, one reading "Dataset owned and provided by Limericke County Council June 2010" and one titled "Limerick Settlement Stratedgy".', url: 'https://data.gov.ie/organization/clare-county-council' }
    ],
    rejectedClaims: [
      'The 4,435 people counted under Clare County Council as part of Limerick city and suburbs: that figure belongs to the Limerick page, so only the structural fact that the city reaches into Clare is stated here.',
      'The 58,686 versus 56,686 contradiction inside the Clare Profile 1 release: real, but the same kind of finding the County Kerry page already carries, so it is not reused here.',
      'A county land area or population density figure for Clare: the CSO publishes density only at electoral division and town level.',
      'Any county-to-county commuting destination figure, including any claim about Clare residents working in Limerick: no such table was found at a primary source.',
      'An eircode for the Cliffs of Moher: none is published on the operator\'s own contact page.',
      'Any claim that Shannon Airport employment figures are Clare employment figures: the airport is a site, not a county statistic.'
    ]
  }
};
