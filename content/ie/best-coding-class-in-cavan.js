'use strict';
// Cavan town (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Cavan, Co Cavan", the HSE page for Cavan Monaghan General
// Hospital and Cavan County Libraries' page for the Johnston Central Library, read
// 19 September 2026. Spine: Benford's law as a data-forensics check. First-digit
// shares of every published count in the cached town tables (252,923 cells, all
// towns, all-towns row excluded): 31.4, 17.8, 12.5, 9.5, 7.5, 6.5, 5.6, 4.8, 4.2
// against Benford 30.1 ... 4.6, mean absolute gap 0.36 points. Usual residents of
// the 867 towns: gap 1.25. Cavan's own 310 counts: gap 1.94, which 6.4 percent of
// genuine Benford samples of 310 equal or exceed (10,000 seeded draws). 2,000
// uniform made-up numbers: gap 6.42. Broadband shares in percent: gap 17.93, the law
// does not apply. All run in this session (scratchpad eco/benford.js). The Cavan
// county page owns the census-night population, average age, Cavan Museum and the
// council site; none used here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'CAVAN TOWN', blurb: 'A checker for made-up numbers, built on the leading-digit pattern of real counts. It passes the census, fails invented data, and cannot judge a set as small as one town\'s.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-cavan',
  code: 'cvt',
  accent: '#314349',
  accentRationale: 'Cavan town: a lake-slate blue from the solver, apart from the Cavan county accent and the Monaghan and Longford pages nearby',
  pageType: 'city',
  place: {
    name: 'Cavan',
    eyebrow: 'Cavan town, County Cavan',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Cavan' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-cavan', name: 'County Cavan' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Cavan', href: '/coding-classes-in-county-cavan' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cavan town, County Cavan, Ireland',
  title: 'Best Coding Class in Cavan Town | Modern Age Coders',
  description: 'Live online coding, Python, data and AI classes for learners in Cavan town aged 6 to 67, in small same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Cavan town, with a data project that builds a checker for made-up numbers and tests it on the census.',
  twitterDescription: 'Coding, Python and AI for Cavan town, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Cavan Town',
    description: 'Online coding, Python, AI, data and mathematics in same-level groups for children, teenagers and adults in Cavan town, County Cavan, taught live in English.'
  },

  h1: 'Coding classes in Cavan town',
  capsuleQ: 'What is the best coding class in Cavan town?',
  capsule: 'Cavan town\'s 11,651 usual residents live in 4,297 households, 3,585 of them on broadband, and broadband is all our lessons need. A teacher takes every lesson live over video, with a few learners at one level or with a single learner, around twice a week, for any age from six to sixty-seven. Lesson one is free; groups are USD 100 a month after that and one-to-one lessons USD 150.',
  lead: 'Look at the first digit of every count the census publishes for Irish towns, a quarter of a million of them, and something odd appears: 1 comes first 31.4 percent of the time, 9 only 4.2 percent. That is not a quirk of the census. Real counts that range across many sizes tend to follow a pattern called Benford\'s law, and invented numbers usually do not. This page builds a checker for it and tests it on four sets of numbers: the census counts, which pass; a batch of made-up numbers, which fail; broadband percentages, where the law was never going to apply; and Cavan town\'s own 310 published counts, which turn out to be too few to judge either way. The last result is the most important one.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Cavan town.',

  picks: {
    eyebrow: 'Course picks for Cavan town',
    h2: 'Where Cavan town learners often start',
    intro: 'Age and interest point to a course; its teacher confirms the right starting place during the free first lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with counting games that tally what turns up most often, the first step towards any pattern.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python that reads long lists of numbers, counts digits and draws the result as a chart.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Full Python projects with simulations and checks, including tests that flag data worth a second look.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who review figures, claims or accounts at work and want quick, honest screening tools.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Build a checker for made-up numbers, then run it on the census',
      intro: 'In counts that stretch from tens to millions, the leading digit is 1 about 30 percent of the time and 9 under 5 percent. The learner writes a checker that measures how far any set of numbers sits from that pattern, then feeds it four sets.',
      body: [
        { kind: 'table', caption: 'Four sets of numbers against Benford\'s law', head: ['Numbers tested', 'Leading 1', 'Leading 9', 'Average gap'], rows: [
          ['What Benford\'s law predicts', '30.1%', '4.6%', ''],
          ['Every count in the town tables, 252,923 of them', '31.4%', '4.2%', '0.36 points'],
          ['Usual residents of the 867 towns', '28.0%', '2.9%', '1.25 points'],
          ['Cavan town\'s own 310 counts', '24.8%', '5.2%', '1.94 points'],
          ['2,000 made-up numbers from 1 to 9,999', '10.8%', '12.5%', '6.42 points'],
          ['Broadband shares of households, in percent', '0.0%', '22.7%', '17.93 points']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'It passes where it should', p: 'Across every town and every table, the nine leading-digit shares run 31.4, 17.8, 12.5, 9.5, 7.5, 6.5, 5.6, 4.8 and 4.2 percent, against Benford\'s 30.1 down to 4.6. The average gap is a third of a percentage point.' },
          { h3: 'It fails where it should', p: 'Numbers picked evenly from 1 to 9,999 start with each digit about equally often, near 11 percent each, which is what a careless inventor might well produce. Nearly all the broadband percentages sit between 60 and 99, so the law never applied to them.' },
          { h3: 'Too few to judge', p: 'Cavan town\'s 310 counts sit 1.94 points from the pattern. Drawing 310 numbers from the exact Benford pattern 10,000 times, 6.4 percent of the samples land at least that far off: about one in sixteen. So this set proves nothing, in either direction.' }
        ] },
        { kind: 'callout', h3: 'A fingerprint test can flag data, not convict it', p: 'Checks like this are sometimes used as a first screen on accounts, expense claims and other large sets of figures. They are useful because real counts carry the pattern and quickly invented ones usually do not. They are dangerous when stretched. The law only applies to quantities that range over several orders of magnitude; it says nothing about percentages, prices set by rule, or assigned numbers such as phone numbers. Small sets wander from it by chance. A failure is a reason to look more closely, never a verdict, and a pass is not proof that nothing is wrong.' },
        { kind: 'p', text: 'The checker is short. It takes each number, keeps its first digit by reading the number as text, tallies the nine digits, turns the tallies into shares and averages the gaps from Benford\'s shares. The more interesting code is the control: a loop that draws 310 numbers from the exact Benford pattern, measures the gap, and repeats 10,000 times with a fixed random seed, so the learner can see how far a perfectly genuine small sample strays. Every check of real data should come with a check like that, showing what chance alone produces.' }
      ]
    },
    {
      id: 'why', tint: 'tint', eyebrow: 'Why the pattern exists',
      h2: 'Where leading 1s come from, and where they do not',
      intro: 'The pattern looks like magic until you watch a number grow.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Growth spends time at 1', p: 'A count growing steadily from 100 must double to leave the 1s, reaching 200, but needs to grow only by about an eighth to get from 800 to 900. Counts that grow by proportions therefore spend far longer starting with 1 than with 9.' },
          { h3: 'Where it breaks', p: 'Numbers kept in a narrow band, numbers set by rule, rounded or capped figures, and codes that are assigned rather than counted all ignore the pattern, and a checker applied to them produces nonsense.' },
          { h3: 'Size matters', p: 'The 252,923 census counts sit very close to the pattern; Cavan\'s 310 sit further away without meaning anything. A result about a quarter of a million numbers and a result about three hundred are different kinds of evidence.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not suggest that any census figure is wrong; the census counts pass comfortably. It does not treat the made-up set as typical of real fraud, which is usually less clumsy. It uses the checker only to show what the pattern can and cannot tell a careful reader.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Cavan town, as the census counted it',
      intro: 'Town of Cavan, Co Cavan: counts from the Census 2022 small area tables for usual residents and their households.',
      body: [
        { kind: 'table', caption: 'Cavan town at a glance, April 2022', head: ['Item counted', 'Count'], rows: [
          ['Usual residents', '11,651'],
          ['Households', '4,297'],
          ['Households with broadband', '3,585'],
          ['Working residents in the travel table', '4,691'],
          ['Journeys to school, college or childcare', '3,169'],
          ['Children under fifteen in childcare', '746'],
          ['Leaving home before 06:30', '817']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Travelling to work', p: 'Of 4,691 working residents, 2,775 drive and 527 walk; 338 go as a car passenger, 253 by van, 222 work mainly at or from home, 114 take the bus, 54 cycle and 5 travel by train.' },
          { h3: 'Travelling to school', p: 'Of 3,169 journeys to school, college or childcare, 1,891 are made as a car passenger, 524 on foot and 309 by bus, with 66 learners driving themselves.' },
          { h3: 'Working from home', p: 'When asked, 770 of the working residents said they work from home at least some of the time; 3,294 said never, and 627 left it blank.' }
        ] },
        { kind: 'spec', title: 'Two named places', p: 'The HSE lists Cavan Monaghan General Hospital at Lisdarn, Cavan Town, Cavan, H12 Y7W1. Cavan County Libraries gives the Johnston Central Library\'s address as Farnham Centre, Farnham St, Cavan, H12 A3T1. Neither has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for learners in Cavan town',
      intro: 'Most weeks bring two fixed lessons, and a teacher is on the call for every minute of both.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The census-night age table counts 1,410 children aged six to twelve in Cavan town. They start with blocks and games, and counting what shows up most is one of the first things they program.' },
          { h3: 'Teenagers', p: 'Cavan town has 998 residents aged thirteen to eighteen, the right age for Python, making websites, AI projects and data work like the checker on this page.' },
          { h3: 'Adults', p: 'Adults join with any amount of experience, none at all included, and the first lesson sets the level.' }
        ] },
        { kind: 'p', text: 'Census numbers here are the ones the Central Statistics Office put out, untouched. The digit counts, gaps and the 10,000 simulated samples were produced on 19 September 2026. The HSE and Cavan County Libraries are quoted from their own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting digits to checking data',
    intro: 'Take the age bands loosely: where a learner actually starts is settled in lesson one.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What turns up most', p: 'Block-coded counting games that keep a tally and show which result appears most often.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Digits and charts', p: 'Python that counts digits in long lists and draws the result, then compares it with a prediction.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Checks with controls', p: 'Screening real data, simulating what chance produces, and telling a signal from sampling noise.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Screening at work', p: 'Quick, honest checks on figures, claims and accounts, and knowing what a failed check does and does not mean.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant whether a set of numbers is genuine',
    intro: 'It can run a Benford check. Knowing what the check is worth is another matter.',
    p1: 'Give an AI assistant a small spreadsheet and ask whether the figures look made up, and it may run a leading-digit check and report a failure as suspicious. On a few hundred numbers that verdict can easily be noise, as Cavan town\'s own 310 counts show, and on percentages or rounded figures the check does not apply at all.',
    p2: 'A learner who has built the checker and its control asks two questions before trusting any result: does the law apply to these numbers, and how far would a genuine sample of this size stray by chance? Only then does a gap mean anything.',
    closer: 'Automated checks are fast and useful. Deciding what a check can prove is still the human part of the job.',
    blogAnchor: 'why learning to code still makes sense'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons work in Cavan town',
    intro: 'The practicalities.',
    cells: [
      { h3: 'Live throughout', p: 'The teacher leads each lesson in real time and works from the learner\'s own code.' },
      { h3: 'Level-matched', p: 'Five to ten learners at the same stage, from Cavan, the rest of Ireland and abroad.' },
      { h3: 'Most weeks, twice', p: 'About eight lessons a month, at times agreed before the course begins.' },
      { h3: 'Around school', p: 'Holidays, mid-term breaks and exam weeks are planned in from the start.' },
      { h3: 'At home', p: 'A laptop or desktop, since code is hard to type on a phone; a microphone and speakers or a headset; and broadband that keeps a video call steady.' },
      { h3: 'Private lessons', p: 'Private teaching suits the learner who is between groups, ahead of them, or free only at an unusual hour.' }
    ],
    spec: { title: 'Nothing to drive to', p: 'Cavan town learners join every lesson by video. We have no premises in Cavan or anywhere in Ireland, and the lesson is the same from any home with a connection.' }
  },

  fees: {
    h2: 'Fees for Cavan town',
    intro: 'All prices.',
    first: 'A full first lesson with a level check, free.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same weekly frequency.',
    closer: 'One price in US dollars each month for every family outside India, and nothing to pay for the first lesson. Charging starts once a course is running, and the pricing page spells out holidays, missed lessons and changes between group and private teaching.'
  },

  reviewsH2: 'Six families\' reviews from Google, copied exactly',

  book: {
    h2: 'Book a free first lesson in Cavan town',
    intro: 'Share the learner\'s age and interests with us and we will build the first hour for them. It might close with a game they made, a program that works, or a checker that flags numbers worth a second look.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Cavan town coding class questions',
    intro: 'What families in Cavan town ask first.',
    items: [
      { q: 'How many people live in Cavan town?', a: 'Census 2022 records 11,651 usual residents in the town of Cavan, in 4,297 households; 3,585 of those households have broadband.' },
      { q: 'What is the data project on this page?', a: 'A checker for Benford\'s law, the leading-digit pattern of real counts. The 252,923 counts in the census town tables pass, with 1 leading 31.4 percent of the time; made-up numbers fail; percentages are outside the law; and Cavan town\'s 310 counts are too few to judge.' },
      { q: 'Does failing the test mean numbers are fake?', a: 'No. It means they are worth a closer look, and only if the law applies to them in the first place. Small sets fail by chance: about one genuine 310-number sample in sixteen strays as far as Cavan town\'s counts do.' },
      { q: 'How do Cavan town residents get to work?', a: 'Of 4,691 working residents in the travel table, 2,775 drive, 527 walk, 338 travel as a car passenger, 253 go by van and 222 work mainly at or from home.' },
      { q: 'When are lessons?', a: 'Weekday afternoons and evenings after school, and weekends. Our teachers keep Indian time, four and a half hours ahead of Cavan in the Irish summer and five and a half in winter, and the slots we open work at both ends.' },
      { q: 'Do adults take lessons?', a: 'Yes, up to sixty-seven, from complete beginners upwards. Most adults know after the first lesson whether they would rather learn in a small same-level group or with a teacher to themselves.' },
      { q: 'Will a Cavan town learner be grouped with others from Cavan?', a: 'Groups follow level rather than place, so classmates may be in Cavan, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Cavan town?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Cavan town cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Cavan',
    html: 'County-level information is on the <a class="cg-inline-link" href="/coding-classes-in-county-cavan">County Cavan</a> page, and neighbouring county pages include <a class="cg-inline-link" href="/coding-classes-in-county-monaghan">Monaghan</a>, <a class="cg-inline-link" href="/coding-classes-in-county-leitrim">Leitrim</a> and <a class="cg-inline-link" href="/coding-classes-in-county-longford">Longford</a>, with <a class="cg-inline-link" href="/coding-and-ai-classes-in-ulster">Ulster</a> as the provincial page. A straight comparison of online coding schools is <a class="cg-inline-link" href="/best-online-coding-classes-ireland">here</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> connects the whole series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cavan town, County Cavan and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-cavan', label: 'County Cavan' },
    { href: '/coding-and-ai-classes-in-ulster', label: 'Ulster' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cvt .cg-hero-grid { align-items: start; gap: clamp(1.17rem, 3.09vw, 2.52rem); }
.cg-root.cg-cvt .cg-hero h1 { font-weight: 700; letter-spacing: -0.0186em; line-height: 1.06; }
.cg-root.cg-cvt .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-cvt .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cvt .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0144em; }
.cg-root.cg-cvt .cg-grid-3 { gap: clamp(1.08rem, 2.62vw, 2.14rem); }
.cg-root.cg-cvt .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-cvt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cvt .cg-table td:nth-child(4) { font-weight: 600; }
.cg-root.cg-cvt .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-cvt .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Cavan, Co Cavan, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 11,651. SAP2022T15T2TOWN22: households 4,297, broadband 3,585, no internet 325, not stated 325. SAP2022T11T1TOWN22 to work total 4,691: car driver 2,775, on foot 527, car passenger 338, van 253, work mainly at or from home 222, bus 114, bicycle 54, train 5, not stated 379; to school, college or childcare total 3,169: car passenger 1,891, on foot 524, bus 309, car driver 66, not stated 323. SAP2022T11T2TOWN22: before 06:30 817. SAP2022T11T4TOWN22: 770 work from home at least some of the time, 3,294 never, 627 not stated. SAP2022T11T5TOWN22: 746 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,410, ages 13 to 18 to 998. Benford analysis in this session. Benford first-digit shares 30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6 percent. Every positive cell of the 16 cached SAP2022 TOWN22 tables for all 867 towns (all-towns row excluded): 252,923 values, shares 31.4, 17.8, 12.5, 9.5, 7.5, 6.5, 5.6, 4.8, 4.2, mean absolute deviation 0.0036. Usual residents of the 867 towns: 28.0 percent leading 1, 2.9 percent leading 9, MAD 0.0125. Cavan town\'s 310 positive cells: 24.8 and 5.2 percent, MAD 0.0194. 2,000 uniform random integers 1 to 9,999 (mulberry32 seed 20220403): 10.8 and 12.5 percent, MAD 0.0642. Broadband share of households in percent, 867 towns: 0.0 and 22.7 percent, MAD 0.1793. Control: 10,000 samples of 310 digits drawn from the Benford distribution (seed 20220403): 6.4 percent have MAD 0.0194 or more; median 0.0131. HSE, Cavan Monaghan General Hospital: "Lisdarn, Cavan Town, Cavan, H12 Y7W1". Cavan County Libraries, Johnston Central Library: "Farnham Centre Farnham St Cavan H12 A3T1".',
    localProject: 'Benford\'s law as a screening check, with a control for sample size. The learner writes a checker that tallies leading digits and averages the gap from Benford\'s shares, and runs it on four sets. Every published count in the census town tables, 252,923 of them, conforms closely: 1 leads 31.4 percent of the time against a predicted 30.1, 9 leads 4.2 against 4.6, average gap 0.36 points. The 867 town sizes are close (gap 1.25). Two thousand made-up uniform numbers fail (about 11 percent per digit, gap 6.42), and broadband percentages sit outside the law entirely (gap 17.93). Cavan town\'s own 310 counts sit 1.94 points off, but 10,000 genuine Benford samples of 310 show a gap that large 6.4 percent of the time, so the set is too small to judge. Lessons: the law applies only to quantities spanning several orders of magnitude; a failure is a flag, not a verdict; and every check of real data needs a control showing what chance produces. New family for the cluster: distributional fingerprints and data forensics.',
    requiredMentions: [
      '11,651',
      '4,297',
      '3,585',
      '4,691',
      '2,775',
      '770',
      '1,891',
      '746',
      '817',
      '252,923',
      '31.4',
      'H12 Y7W1'
    ],
    sources: [
      { claim: 'CSO Census 2022 Small Area Population town tables (SAP2022T1T1, T2T1, T2T2, T2T3, T2T4, T3T1, T8T1, T10T2, T10T4, T11T1, T11T2, T11T3, T11T4, T11T5, T14T1 and T15T2 TOWN22): every published count for the 867 towns, 252,923 positive values, used for the leading-digit analysis; usual residents of each town from SAP2022T2T1TOWN22; broadband shares from SAP2022T15T2TOWN22.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables for Cavan, Co Cavan: usual residents 11,651; households 4,297, broadband 3,585; to work 4,691 with car driver 2,775, on foot 527, car passenger 338, van 253, mainly at or from home 222, bus 114, bicycle 54, train 5; to school, college or childcare 3,169 with car passenger 1,891, on foot 524, bus 309, car driver 66; 817 leave home before 06:30; 770 work from home at least some of the time, 3,294 never, 627 not stated; 746 children under 15 in childcare; 1,410 aged 6 to 12 and 998 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'HSE, Cavan Monaghan General Hospital: "Lisdarn, Cavan Town, Cavan, H12 Y7W1".', url: 'https://www2.hse.ie/services/hospitals/cavan-general-hospital/' },
      { claim: 'Cavan County Libraries, Johnston Central Library: "Farnham Centre Farnham St Cavan H12 A3T1".', url: 'https://www.cavanlibrary.ie/using-your-library/library-branches/johnston-central-library/' }
    ],
    rejectedClaims: [
      'Any suggestion that a census figure is wrong: the census counts conform closely.',
      'Treating a Benford failure as proof of invention, or a pass as proof of accuracy.',
      'Applying the law to percentages, capped or assigned numbers.',
      'Any claim about how often Benford checks catch real fraud.',
      'The census-night population, average age, Cavan Museum and the council site: the County Cavan page owns them.'
    ]
  }
};
