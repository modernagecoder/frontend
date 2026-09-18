'use strict';
// Mallow (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Mallow, Co Cork", read 19 September 2026, the Irish Rail station
// page for Mallow and the HSE page for Mallow General Hospital. Spine: multiple
// comparisons. A "standout finder" searches 73 shares from nine census tables for
// the 94 towns of 5,000 or more usual residents and hands out ten placements per
// measure (top five, bottom five). Mallow's headline: 2,558 of 7,515 who answered,
// 34.0 percent, leave home between 08:01 and 08:30, fourth of 94. But 90 of the 94
// towns get at least one headline, and in 1,000 seeded shuffles (every difference
// pure luck) 93 or 94 do every time. Real data differ in concentration: Malahide
// collects 29 placements where luck peaks at 21. Birthplace, citizenship,
// ethnicity, religion and economic status are excluded from the search by choice.
// All run in this session (scratchpad eco/standout.js, seed 20220403). The Cork
// county page owns the census-night population, density and average age.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'MALLOW', blurb: 'A program hunting for what makes Mallow stand out finds something. It finds something for 90 of 94 towns, and for nearly all of them when the numbers are shuffled.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-mallow',
  code: 'mlw',
  accent: '#493136',
  accentRationale: 'Mallow: a dark rosewood from the solver, clear of the Cork county, Cobh and Midleton accents and of Naas, its nearest neighbour in colour',
  pageType: 'city',
  place: {
    name: 'Mallow',
    eyebrow: 'Mallow, County Cork',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Cork' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-cork', name: 'County Cork' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Cork', href: '/coding-classes-in-county-cork' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Mallow, County Cork, Ireland',
  title: 'Best Coding Class in Mallow | Modern Age Coders',
  description: 'Coding, Python, data and AI classes for Mallow learners aged 6 to 67, taught live online in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Mallow, with a data project on why a program that hunts for standout statistics always finds one.',
  twitterDescription: 'Live online coding, Python and AI lessons for Mallow, ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Mallow',
    description: 'Online coding, Python, AI, data and mathematics in level-matched groups for children, teenagers and adults in Mallow, County Cork, taught live in English.'
  },

  h1: 'Coding classes in Mallow',
  capsuleQ: 'What is the best coding class in Mallow?',
  capsule: 'Of Mallow\'s 4,864 households, 3,877 report broadband, and a broadband line is how our lessons arrive. Each one is taught live on video by a teacher working with a few learners at the same stage, or with one learner, roughly twice a week, for any age between six and sixty-seven. The opening lesson is free. From then on a group place is USD 100 a month and one-to-one lessons USD 150.',
  lead: 'Write a program that searches the census for what makes a town stand out, point it at Mallow, and it comes back with a real finding: 34.0 percent of Mallow people who answered leave home between 08:01 and 08:30 in the morning, the fourth highest share among the 94 towns of 5,000 or more. Now point it at every town. Ninety of the 94 get a headline of their own. Shuffle the numbers so that every difference between towns is pure luck, and 93 or 94 of them get one in every run. This page builds that program and uses it to show why a single standout statistic, found by searching, says very little, and what kind of pattern does say something.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Mallow.',

  picks: {
    eyebrow: 'Course picks for Mallow',
    h2: 'Where Mallow learners usually start',
    intro: 'Go by age and interest. The first lesson, taught by that course\'s teacher, sets the starting point.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with games of chance, where learners find out how often luck alone produces a winner.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python loops that sort, rank and shuffle, and a first simulation that repeats an experiment a thousand times.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Full Python programs with random seeds, repeatable results and a test for whether a finding beats chance.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who scan dashboards for anomalies and need to know which ones would appear by chance.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Build a standout finder, then run it on luck',
      intro: 'The finder turns nine census tables into 73 shares for each town, ranks the 94 towns of 5,000 or more on every share, and records each time a town lands in the top five or the bottom five.',
      body: [
        { kind: 'table', caption: 'What the standout finder reports across 94 towns and 73 measures', head: ['Result', 'Value'], rows: [
          ['Placements handed out per measure', '10: the top five and the bottom five'],
          ['Towns with at least one placement', '90 of 94'],
          ['Towns with three or more', '70'],
          ['Median placements per town', '6'],
          ['Most placements for one town', 'Malahide, 29'],
          ['Mallow', '2, both about the time people leave home']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Mallow\'s headline', p: 'Of 7,515 Mallow residents who said when they leave for work, school or college, 2,558 go between 08:01 and 08:30, or 34.0 percent, fourth of the 94 towns. The same habit shows from the other side: only 1.34 percent leave between 09:01 and 09:30, third lowest.' },
          { h3: 'The same search on luck', p: 'Shuffle each measure\'s values among the 94 towns at random, so that no difference means anything, and run the finder again. Across 1,000 shuffles with a fixed seed, 93 or 94 towns got a headline every single time, and the middle town collected eight.' },
          { h3: 'Where real data differ', p: 'Real data give slightly fewer towns a headline, 90, but pile placements onto a few. Malahide has 29; across 1,000 shuffles the most any town collected was 21, and usually about 15. Related measures move together, so a town that really is different turns up on many of them at once.' }
        ] },
        { kind: 'callout', h3: 'Decide the question before you look at the answers', p: 'A program that searches 73 measures for something remarkable will find it, in real data and in shuffled data alike, so a headline produced that way is evidence of the search and not of the town. Two things turn it into evidence. One is fixing the question first: "Do people in Mallow set off earlier than people in other towns?", asked in advance and then checked, is one honest test rather than the pick of 73. The other is a pattern that luck does not produce, such as a town at the extreme of dozens of related measures. Anyone who reports a single standout without saying how many things were searched is reporting the size of the search.' },
        { kind: 'p', text: 'The learner writes the finder in three parts. The first reads each table and converts counts to shares, leaving out the people who did not answer. The second ranks the 94 towns on each share and records the placements. The third is the control: it shuffles every column at random, reruns the second part, and repeats that 1,000 times with the random seed fixed at 20220403, so that anyone running the code gets exactly the same numbers. Putting the real result beside the shuffled ones is the whole lesson. Without the control, 90 headlines out of 94 towns looks like a rich seam of findings. With it, it looks like what a search produces.' }
      ]
    },
    {
      id: 'search', tint: 'tint', eyebrow: 'Inside the search',
      h2: 'What went into the finder, and what was kept out',
      intro: 'A search is defined by its list of measures as much as by its code. Here is the list, and the reason for its limits.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The 73 measures', p: 'Shares from nine tables: highest level of education, how people travel to work and to school, when they leave home, how long the journey takes, working from home, industry, internet access, where people lived a year earlier, and ability to speak Irish.' },
          { h3: 'Kept out on purpose', p: 'Birthplace, citizenship, ethnicity, religion and economic status are not in the search. A tool that hunts for towns at the extremes of those measures is not one we teach, and nothing on this page ranks towns by them.' },
          { h3: 'The arithmetic of luck', p: 'With ten placements per measure and 94 towns, any town has roughly a one in nine chance of a placement on a given measure. Over 73 measures, an entirely ordinary town should still expect several.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not say why so many Mallow residents leave home between 08:01 and 08:30, and it does not rank towns on any of the 73 measures. Apart from Mallow\'s two placements, it reports only counts of placements, with the single most-placed town named as the contrast.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Mallow by the census numbers',
      intro: 'Counts for the town Mallow, Co Cork, from the Census 2022 small area tables. Every row refers to people or households usually resident there.',
      body: [
        { kind: 'table', caption: 'Census 2022 counts for Mallow', head: ['Measure', 'Count'], rows: [
          ['Usual residents', '13,370'],
          ['Households', '4,864'],
          ['Households with broadband', '3,877'],
          ['Working residents in the travel table', '5,445'],
          ['Journeys to school, college or childcare', '3,768'],
          ['Children under fifteen in childcare', '946'],
          ['Leaving home between 08:01 and 08:30', '2,558']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How Mallow gets to work', p: 'Of 5,445 working residents, 3,285 drive and 509 walk. Another 444 work mainly at or from home, 325 go by van, 287 as a car passenger, 118 by train, 50 by bus and 39 by bicycle.' },
          { h3: 'How Mallow gets to school', p: 'Of 3,768 journeys to school, college or childcare, 1,996 are made as a car passenger and 899 on foot, with 241 by bus, 169 learners driving and 96 on the train.' },
          { h3: 'Working from home', p: 'Asked directly, 1,321 working residents do at least some of their work at home, 3,532 never do and 592 gave no answer.' }
        ] },
        { kind: 'spec', title: 'Two named places', p: 'Irish Rail gives the station address as Iarnród Éireann, Annabella, Mallow, Co. Cork, Eircode P51 X622, with sheltered bike parking at the station. The HSE lists Mallow General Hospital at Limerick Road, Kilknockan, Mallow, Cork, P51 N288. Neither has any link with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Mallow learners',
      intro: 'Two scheduled lessons in most weeks, each taught live from beginning to end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger learners', p: 'The census-night age table counts 1,540 children aged six to twelve in Mallow. They start with blocks and games, including games of chance that quietly teach how often luck produces a winner.' },
          { h3: 'Older learners', p: 'The 1,212 teenagers aged thirteen to eighteen can go on to Python, web pages, AI and work with genuine datasets while they move through secondary school.' },
          { h3: 'Adults', p: 'Adults arrive with every level of experience, often none in code. The first lesson finds the level and the course is planned from it.' }
        ] },
        { kind: 'p', text: 'Every census count here is as the Central Statistics Office published it. The shares, placements and the 1,000 shuffles were computed from the town tables on 19 September 2026. Irish Rail and the HSE are quoted from their own pages and are not connected with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From games of chance to testing a finding',
    intro: 'Use the ages as a rough guide; the first lesson settles the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Luck in games', p: 'Block-coded dice and card games that show how often chance alone picks a winner.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Sort, rank, shuffle', p: 'Python that orders a list, finds the top and bottom, and reshuffles it to see what changes.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Beat the control', p: 'Seeded simulations and a simple test of whether a real result stands out from shuffled ones.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Anomalies at work', p: 'Dashboards, alerts and reports where some anomalies are real and many are what a wide search always turns up.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant what makes Mallow special',
    intro: 'It will find something. So would any search that looks long enough.',
    p1: 'Give an AI assistant a pile of census tables and ask what makes Mallow unusual, and it will very likely return a confident list. Some items may be real. The trouble is the same as with our finder: the more measures it can look through, the more certain it is to find extremes, and nothing in a fluent answer tells you how many things were searched to produce it.',
    p2: 'A learner who has built the finder and its shuffled control asks two follow-up questions of any such list: how many measures were searched, and would the same claim appear if the numbers were shuffled? Those two questions sort a finding from a coincidence faster than any amount of reading.',
    closer: 'Machines are very good at searching. Knowing what a search can and cannot prove is the skill that stays with the person.',
    blogAnchor: 'why coding is a skill still worth learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons work for Mallow',
    intro: 'The practical arrangements.',
    cells: [
      { h3: 'Live teacher', p: 'A teacher runs each lesson as it happens and answers the learner\'s code, not a script.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at the same level, from North Cork, the rest of Ireland and overseas.' },
      { h3: 'Most weeks, twice', p: 'Around eight lessons a month, on days and at hours fixed at the start.' },
      { h3: 'School terms in mind', p: 'Holidays, mid-terms and exam weeks are part of the plan from day one.' },
      { h3: 'Hardware', p: 'A laptop or desktop with a real keyboard, a headset or working speakers and microphone, and a line that holds a video call for the length of a lesson.' },
      { h3: 'Private lessons', p: 'Private teaching suits a learner who needs a pace, a time slot or a starting point that no current group offers.' }
    ],
    spec: { title: 'No local premises', p: 'Every Mallow lesson happens on video. We have no classroom in Mallow or anywhere in Ireland, and the lesson is identical wherever the learner logs in.' }
  },

  fees: {
    h2: 'Fees for Mallow',
    intro: 'The whole list.',
    first: 'A full first lesson including a level assessment, at no charge.',
    group: 'A month in a group of five to ten at one stage, about eight live lessons.',
    private: 'A month of one-to-one teaching at the same weekly pace.',
    closer: 'The price is per month, in US dollars, and does not change with the family\'s country as long as it is not India. The free lesson carries no commitment, the first invoice comes with the first month of the course itself, and holidays, missed lessons and a switch between group and private teaching are all dealt with on the pricing page.'
  },

  reviewsH2: 'Six of our families on Google, word for word',

  book: {
    h2: 'Book a free first lesson from Mallow',
    intro: 'Share the learner\'s age and interests and we will build the first hour around them. It might end with a game, a first program, or a finding that survives a thousand shuffles.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Mallow coding class questions',
    intro: 'What families in Mallow tend to ask first.',
    items: [
      { q: 'How many people live in Mallow?', a: 'Mallow has 13,370 usual residents in the Census 2022 resident tables, living in 4,864 households, and 3,877 of those households have broadband.' },
      { q: 'What is the data project on this page?', a: 'A standout finder that ranks the 94 towns of 5,000 or more on 73 census measures. It finds a headline for Mallow, and for 90 of the 94 towns, and for every town when the data are shuffled, which is the point: a standout found by searching proves little unless the question came first.' },
      { q: 'Do Mallow people really leave home early?', a: 'The count is real: 2,558 of the 7,515 who answered leave between 08:01 and 08:30, 34.0 percent, fourth of 94 towns. What the page questions is treating it as a discovery when the search looked at 73 measures to find it.' },
      { q: 'How do Mallow residents travel to work?', a: 'Of 5,445 working residents, 3,285 drive, 509 walk, 444 work mainly at or from home, 325 use a van, 287 travel as a car passenger and 118 take the train.' },
      { q: 'When are lessons?', a: 'After school, in the evenings and at weekends. Lessons are timed from Mallow\'s clock, not ours: India sits four and a half hours ahead while Ireland is on summer time and five and a half after the clocks go back.' },
      { q: 'Is there an upper age limit?', a: 'Sixty-seven, and learners join from complete beginners upwards. After that first lesson, an adult either joins a group working at their level or carries on with a private teacher.' },
      { q: 'Will a Mallow learner be with other Mallow learners?', a: 'Sometimes, but not by design. Groups are built by level, so the others in a lesson may be in Cork, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Mallow?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Mallow cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Other Cork pages',
    html: 'Elsewhere in County Cork the series has <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork city</a>, <a class="cg-inline-link" href="/best-coding-class-in-midleton">Midleton</a>, <a class="cg-inline-link" href="/best-coding-class-in-cobh">Cobh</a> and <a class="cg-inline-link" href="/best-coding-class-in-carrigaline">Carrigaline</a>, all under the <a class="cg-inline-link" href="/coding-classes-in-county-cork">County Cork</a> page and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a> page. There is a plain <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison of online coding schools</a> too, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links everything.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mallow, Cork and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-cork', label: 'County Cork' },
    { href: '/best-coding-class-in-cork', label: 'Cork city' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-mlw .cg-hero-grid { align-items: start; gap: clamp(1.18rem, 3.02vw, 2.48rem); }
.cg-root.cg-mlw .cg-hero h1 { font-weight: 700; letter-spacing: -0.0178em; line-height: 1.07; }
.cg-root.cg-mlw .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-mlw .cg-eyebrow { letter-spacing: 0.17em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-mlw .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0133em; }
.cg-root.cg-mlw .cg-grid-3 { gap: clamp(1.1rem, 2.7vw, 2.08rem); }
.cg-root.cg-mlw .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-mlw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mlw .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-mlw .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.98rem; }
.cg-root.cg-mlw .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Mallow, Co Cork, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 13,370. SAP2022T15T2TOWN22: households 4,864, broadband 3,877, no internet 462, other 109, not stated 416. SAP2022T11T2TOWN22 (time leaving home, aged 5 and over): total 8,309, not stated 794, 08:01 to 08:30 2,558 (34.0 percent of 7,515 answering), 09:01 to 09:30 101 (1.34 percent). SAP2022T11T1TOWN22 to work total 5,445: car driver 3,285, on foot 509, work mainly at or from home 444, van 325, car passenger 287, train DART or Luas 118, bus 50, bicycle 39, not stated 353; to school, college or childcare total 3,768: car passenger 1,996, on foot 899, bus 241, car driver 169, train 96, not stated 313. SAP2022T11T4TOWN22: 1,321 work from home at least some of the time, 3,532 never, 592 not stated. SAP2022T11T5TOWN22: 946 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,540, ages 13 to 18 to 1,212. Standout finder run in this session over the 94 towns with 5,000 or more usual residents (SAP2022T2T1TOWN22) and 73 shares built from SAP2022T10T4, T11T1, T11T2, T11T3, T11T4, T14T1, T15T2, T2T3 and T3T1 TOWN22, each share excluding not stated; T1T1, T2T1, T2T2, T2T4 and T8T1 excluded by design. Ten placements per measure (top five and bottom five). Towns with at least one placement 90 of 94; with three or more 70; median 6; most Malahide 29; Mallow 2 (08:01 to 08:30 fourth highest; 09:01 to 09:30 third lowest). Control: each measure shuffled independently across the 94 towns, 1,000 runs, mulberry32 seed 20220403: towns with at least one placement 93 to 94 in every run (median 94); median placements per town 8; most placements for one town median 15, range 12 to 21. Irish Rail, Mallow: "Station Address Iarnród Éireann, Annabella, Mallow, Co. Cork", "Eircode P51 X622", "There is sheltered bike parking at the station". HSE, Mallow General Hospital: "Limerick Road, Kilknockan, Mallow, Cork, P51 N288".',
    localProject: 'Multiple comparisons, built and then tested against luck. The learner writes a standout finder that converts nine census tables into 73 shares, ranks the 94 towns of 5,000 or more on each, and records top-five and bottom-five placements. For Mallow it reports that 2,558 of 7,515 residents who answered, 34.0 percent, leave home between 08:01 and 08:30, fourth of 94, with the mirror placement of 1.34 percent leaving between 09:01 and 09:30, third lowest. Run on every town, 90 of 94 get a headline, 70 get three or more, and the median town gets six. The control shuffles every measure at random across towns, 1,000 times with a fixed seed: 93 or 94 towns get a headline in every run. Real data differ in concentration rather than frequency: Malahide collects 29 placements where the shuffled maximum never exceeds 21. Lesson: a standout found by searching is evidence of the search; fix the question first or look for patterns that luck does not produce. Sensitive measures (birthplace, citizenship, ethnicity, religion, economic status) are excluded from the search by design. New family for the cluster: multiple comparisons and the look-elsewhere effect.',
    requiredMentions: [
      '13,370',
      '4,864',
      '3,877',
      '5,445',
      '3,285',
      '1,321',
      '3,768',
      '1,996',
      '946',
      '2,558',
      '7,515',
      'P51 X622'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T2TOWN22, time leaving home to travel to work, school or college, all towns: used for Mallow\'s placements (2,558 of 7,515 answering leave between 08:01 and 08:30; 101 between 09:01 and 09:30) and, with SAP2022T10T4, T11T1, T11T3, T11T4, T14T1, T15T2, T2T3 and T3T1 TOWN22, for the 73-measure search over the 94 towns of 5,000 or more usual residents.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Mallow, Co Cork: usual residents 13,370; households 4,864, broadband 3,877; to work 5,445 with car driver 3,285, on foot 509, mainly at or from home 444, van 325, car passenger 287, train 118, bus 50, bicycle 39; to school, college or childcare 3,768 with car passenger 1,996, on foot 899, bus 241, car driver 169, train 96; 1,321 work from home at least some of the time, 3,532 never, 592 not stated; 946 children under 15 in childcare; 1,540 aged 6 to 12 and 1,212 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Mallow station: "Station Address Iarnród Éireann, Annabella, Mallow, Co. Cork", "Eircode P51 X622", "There is sheltered bike parking at the station".', url: 'https://www.irishrail.ie/en-ie/station/mallow' },
      { claim: 'HSE, Mallow General Hospital: "Limerick Road, Kilknockan, Mallow, Cork, P51 N288".', url: 'https://www2.hse.ie/services/hospitals/mallow-general-hospital/' }
    ],
    rejectedClaims: [
      'Any reason why Mallow residents leave home between 08:01 and 08:30.',
      'Any ranking of towns on the 73 measures beyond Mallow\'s own two placements and the count for the most-placed town.',
      'Any search, ranking or comparison of towns by birthplace, citizenship, ethnicity, religion or economic status: excluded by design.',
      'A composite index of towns: built while choosing this spine and dropped, because an arbitrary weighting presented as a ranking would mislead.',
      'The census-night population, density and average age for Mallow: the County Cork page owns them.'
    ]
  }
};
