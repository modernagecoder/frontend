'use strict';
// Newport, Wales (cg- city page, UK cluster Phase 4). Spine: compare the change, not the level.
// Difference-in-differences on DfT road traffic statistics (roadtraffic.dft.gov.uk API, annual average daily flow
// by count point, all motor vehicles, read 22 September 2026; scratchpad npt/aadf.json). Event: the Severn Crossings
// tolls abolished on Monday 17 December 2018 (GOV.UK news, 2 October 2018). Compare 2017 with 2019 (2018 was tolled
// for all but two weeks; 2020 onwards is disturbed). Treated: the M4 Prince of Wales Bridge link (count point 99169,
// duplicated as 73955), counted both years: 67,488 in 2017, 77,629 in 2019, +15.03 percent. Controls: six motorway
// count points in South Gloucestershire counted in both years (16020 M5 -4.75, 26020 M5 +3.22, 99607 M5 -1.28, 99619
// M5 +5.64, 18498 M4 -1.28, 36016 M4 -1.14 percent): mean +0.07, median -1.21. Difference in differences about +15
// points. The Severn Bridge (M48, 99171) was last counted in 2016 (22,268); its 2017 to 2019 values are estimates
// (22,437, 22,376, 22,632), so they cannot show the change. M4 in Newport: only 501 (J28 to J27, 119,481 to 110,770,
// -7.29) and 50501 (J29 to J28, 124,727 to 129,029, +3.45) were counted in both years; the five estimated links all
// move by 1.07 to 1.11 percent. 14 of 34 values for 2017 and 2019 across 17 unique count points are estimates.
// Caveat: the controls sit on routes that Welsh traffic may use, so they may understate the effect; a control far
// from the Severn would be cleaner.
// Lesson family: difference-in-differences and natural experiments (parallel trends, choosing controls, estimated
// against counted data). Screened 22 September 2026: difference-in-differences 0 hits; one Dutch page discusses a
// counterfactual in prose only.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Newport W06000022: TS001 159,592 usual residents,
// 158,205 in households, 1,387 in communal establishments; TS007A aged 4 and under 9,733 (6.1 percent, Wales 5.0),
// 5 to 9 10,336 (6.5, Wales 5.7), 10 to 14 10,215 (6.4, Wales 5.9), 15 to 19 8,673 (5.4), 20 to 24 8,737 (5.5);
// TS068 30,401 students of 149,859 aged 5 and over (20.3 percent, Wales 19.9); TS006 838.1 usual residents per
// square km (Wales 149.9). Newport Medieval Ship (Friends of the Newport Ship): a fifteenth-century merchant vessel
// unearthed in the heart of Newport in 2002 when building work on the Riverfront arts centre was paused for
// excavation; the sediment preserved it for around 532 years; around 1469 a repair or refit was interrupted when,
// the Friends think, the supporting cradle collapsed and the ship toppled onto its starboard side. Newport City
// Council Transporter Bridge pages returned 403.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'NEWPORT', blurb: 'The city on the Usk, with a project that measures what scrapping the Severn tolls did to traffic by comparing changes, not totals.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-newport-wales',
  code: 'npw',
  accent: '#45356E',
  accentRationale: 'Newport: a dusky violet from the solver (8.58:1 on every paper tint, dE 7.4 from the nearest used accent), bluer than the Sunderland purple and softer than the Dundee plum',
  pageType: 'city',
  place: {
    name: 'Newport',
    eyebrow: 'Newport, Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Newport' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Newport, Wales',
  title: 'Best Coding Classes in Newport, Wales | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for learners in Newport, Wales, aged 6 to 67, from Caerleon and Malpas to Maindee. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Newport, on a page that works out what abolishing the Severn tolls did to traffic by comparing changes rather than totals.',
  twitterDescription: 'Learners in Newport, Wales, from age six to sixty-seven can study coding, Python and AI with us live online, starting free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Newport Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, data, AI and mathematics taught live online in English to children, teenagers and adults in Newport, Wales, in small groups set by level or one to one.'
  },

  h1: 'Coding classes in Newport, Wales',
  capsuleQ: 'What are the best coding classes in Newport, Wales?',
  capsule: 'The 2021 census counted 159,592 usual residents in Newport, and children aged five to nine made up 6.5% of them, against 5.7% across Wales. In 2002, building work on the city\'s Riverfront arts centre uncovered the Newport Ship, a fifteenth-century merchant vessel. Learners in Newport from age six to sixty-seven can join our live online classes, grouped with five to ten others at the same stage or taught on their own, by teachers in India who work to UK hours. The first lesson is on us; after that a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'On Monday 17 December 2018 the tolls on the Severn Crossings were abolished. Did traffic grow because of it? On the M4 Prince of Wales Bridge, the Department for Transport counted 67,488 vehicles a day in 2017 and 77,629 in 2019, a rise of 15%. But traffic changes for all sorts of reasons, so the rise alone proves little. The fair question is how much more it grew than similar roads that had no toll to lose. Six English motorway counts near Bristol, counted in both years, changed by 0.07% on average. The difference in the differences, about 15 points, is the estimate. Our teenagers learn the method, and the trap waiting beside it: the old Severn Bridge was not counted in those years at all.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Newport, Wales.',

  picks: {
    eyebrow: 'Course picks for Newport',
    h2: 'Four courses for the city on the Usk',
    intro: 'Choose by what the learner enjoys most. A free live lesson opens every course, and we take no card to book it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding for young learners, including before-and-after puzzles where the question is always what changed and why.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real public datasets in Python, including the traffic counts, comparisons and caveats on this page.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Statistics for adults, from percentage change to fair comparisons and the limits of what data can prove.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'University and adult', note: 'Data and AI analysis for adults who do not code yet, built around questions like the one this page asks.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Newport today',
      h2: 'A city with plenty of young children',
      intro: 'Census 2021 figures for Newport, taken from Nomis as the Office for National Statistics published them, with Wales alongside.',
      body: [
        { kind: 'table', caption: 'Newport, Census 2021', head: ['Measure', 'Newport', 'Wales'], rows: [
          ['Usual residents', '159,592', 'Not compared'],
          ['Living in households', '158,205', 'Not compared'],
          ['Aged 4 and under', '9,733 (6.1%)', '5.0%'],
          ['Aged 5 to 9', '10,336 (6.5%)', '5.7%'],
          ['Aged 10 to 14', '10,215 (6.4%)', '5.9%'],
          ['Students among residents aged 5 and over', '30,401 (20.3%)', '19.9%'],
          ['Usual residents per square kilometre', '838.1', '149.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A young population', p: 'In 2021, each five-year band from birth to age fourteen made up a larger share of Newport\'s residents than of the population of Wales.' },
          { h3: 'Nearly all at home', p: 'Of 159,592 residents, 158,205 lived in ordinary households, with few in halls of residence or other communal living.' },
          { h3: 'Between city and country', p: 'At 838.1 residents per square kilometre, the council area joins a busy city to farmland along the Severn estuary and up the Usk valley.' }
        ] },
        { kind: 'p', text: 'Of the 149,859 residents aged five and over, 30,401 were at school or in full-time study in 2021. With so many young children, many of our Newport learners start early. A Year 2 pupil in Malpas might be solving first puzzles with code blocks, a Year 10 student in Bettws preparing for WJEC GCSE Computer Science, and a parent in Maindee learning Python for work, each in a small group at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Found under the riverbank',
      h2: 'A medieval ship beneath an arts centre',
      intro: 'From the Friends of the Newport Ship, who tell its story.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Around 1469', p: 'The Friends think a repair or refit was under way when the cradle holding the ship collapsed and it toppled onto its starboard side, unable to be refloated.' },
          { h3: '532 years', p: 'The river sediment that buried the vessel preserved it for around 532 years, keeping timbers that would otherwise have rotted away.' },
          { h3: '2002', p: 'Building work on the Riverfront arts centre was paused so that the fifteenth-century merchant ship could be excavated, and its timbers have since gone through a long conservation process.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Friends of the Newport Ship. The ship belongs here because archaeology asks the same question as the project below: what changed, when, and how sure can we be? A timber shows a repair began; a traffic count shows a road got busier. In both cases the evidence has to be compared with what would have happened anyway before it means anything.' },
        { kind: 'spec', title: 'Where the traffic figures come from', p: 'The Department for Transport publishes annual average daily traffic for thousands of count points, and marks each figure as counted on the road or estimated from national growth. Around the Severn crossings and Newport, both kinds appear side by side.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What did scrapping the Severn tolls do?',
      intro: 'Difference-in-differences compares the change where something happened with the change where it did not, over the same years.',
      body: [
        { kind: 'table', caption: 'Average daily motor vehicles in 2017 and 2019, Department for Transport count points (tolls abolished 17 December 2018)', head: ['Road', '2017', '2019', 'Change', 'Counted both years?'], rows: [
          ['M4 Prince of Wales Bridge', '67,488', '77,629', '+15.03%', 'Yes'],
          ['Six English motorway points near Bristol', 'Varies', 'Varies', '+0.07% on average', 'Yes'],
          ['M48 Severn Bridge', '22,437', '22,632', '+0.87%', 'No, both estimated'],
          ['M4 in Newport, junctions 28 to 27', '119,481', '110,770', '-7.29%', 'Yes'],
          ['M4 in Newport, junctions 29 to 28', '124,727', '129,029', '+3.45%', 'Yes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Measure the change', p: 'On the Prince of Wales Bridge, 2017 to 2019 brought a 15.03% rise. That is the first difference, and on its own it mixes the toll with everything else that happened.' },
          { h3: '2. Find a comparison', p: 'Roads with no toll to lose show what would probably have happened anyway. Six motorway counts near Bristol, counted in both years, averaged a 0.07% change.' },
          { h3: '3. Subtract', p: 'The second difference, 15.03 minus 0.07, is about 15 percentage points: an estimate of the extra growth linked to toll-free crossing, resting on the idea that both would otherwise have moved alike.' }
        ] },
        { kind: 'callout', h3: 'Counted or estimated?', p: 'The Department for Transport cannot count every road every year, so many figures are estimates that grow a year\'s count by a national factor. The old Severn Bridge was last counted in 2016, and its 2017 to 2019 values rise by under 1%, exactly as an estimate would. Using them, a careless analysis would conclude that abolishing the tolls did nothing on that bridge. Across the seventeen count points on this page, 14 of the 34 values for 2017 and 2019 are estimates.' },
        { kind: 'p', text: 'Even the counted numbers need care. Within Newport, the M4 between junctions 28 and 27 fell by 7.29% while the stretch from 29 to 28 rose by 3.45%, so the toll change is clearly not the only thing moving traffic on these roads. And the English comparison points sit on routes some Welsh traffic also uses, so if anything they may have picked up part of the effect. A control further from the Severn would make a cleaner comparison.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Fair comparisons',
      h2: 'Five questions before claiming an effect',
      intro: 'Learned on the M4, then used on school interventions, price changes, app features, transport schemes and any before-and-after claim in the news.',
      body: [
        { kind: 'table', caption: 'Checking a difference-in-differences estimate', head: ['Question', 'For the Severn tolls', 'What goes wrong if skipped'], rows: [
          ['Was the data measured?', 'Only counts from both years are used', 'Estimates that cannot show a change'],
          ['Is the comparison fair?', 'Motorways with no toll, same years', 'Crediting the toll with general traffic growth'],
          ['Would they have moved together?', 'Assumed, and hard to check with two years', 'An estimate built on a hidden assumption'],
          ['Could the comparison be affected too?', 'Possibly, as some Welsh traffic uses them', 'Underestimating the real effect'],
          ['Is one year enough?', 'Two years chosen before 2020 disrupted traffic', 'The 2020 disruption mistaken for a policy']
        ] },
        { kind: 'p', text: 'The third question is the heart of the method. Difference-in-differences only works if the two groups would have changed in step without the event. With data for many years, learners plot both lines before the change and see whether they run parallel. With only two counted years they cannot, and the honest thing is to say so next to the answer.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Two plants, one watered with plant food and one not, measured before and after, and the question of which one grew more than it would have anyway.' },
          { h3: 'Teenagers', p: 'The DfT traffic API in Python, counted and estimated values separated, and a difference-in-differences estimate with its assumptions stated.' },
          { h3: 'Adults', p: 'Measuring the effect of a change at work, from a new process to a price rise, with a comparison group chosen before the results arrive.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Department for Transport, the Friends of the Newport Ship or Newport City Council. The traffic figures and census tables are published openly; the changes, comparisons and estimate here are our own arithmetic.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two plants to difference-in-differences',
    intro: 'Treat these bands as a starting guess; the free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Before and after', p: 'Measuring something twice, spotting the change, and asking what else might have caused it.', courses: ['kids-coding-blocks-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Percentages in code', p: 'Working out percentage change in Python and comparing two groups over the same period.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Natural experiments', p: 'Difference-in-differences on real transport data, with counted and estimated values handled properly.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Evidence at work', p: 'Designing fair before-and-after comparisons for decisions, and reporting their limits plainly.', courses: ['statistics-probability-maths-course', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will tell you what caused a change. Why should a Newport teenager learn to check?',
    intro: 'Because a confident explanation and a fair comparison are not the same thing.',
    p1: 'Ask an assistant whether the Severn tolls changed traffic and it may say yes, citing the 15% rise. A learner who has done the calculation knows to ask what happened on comparable roads, whether the numbers were counted or estimated, and what the comparison assumes. Those questions turn a plausible story into an estimate someone can defend.',
    p2: 'The same skill is central to judging AI itself. Companies claim their AI tools raise productivity or improve results, and the fair test is always a comparison with a similar group that did not use the tool, measured over the same period. People who can design and read that comparison are the ones who can tell real gains from coincidence.',
    closer: 'So a Newport teenager should still learn to program in 2026, in a city where archaeologists dated a ship\'s last repair from its timbers: computers can crunch any numbers, but deciding what they prove still takes judgement.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Caerleon, Rogerstone or Maindee, from home',
    intro: 'Getting across Newport and over the Usk at the end of the school day is slow. A live online lesson avoids it altogether.',
    cells: [
      { h3: 'East and west of the Usk', p: 'A learner in St Julians and another in Rogerstone can share the same class without either crossing a bridge.' },
      { h3: 'Years 1 to 13 in Wales', p: 'We follow Welsh school years, the Curriculum for Wales and WJEC GCSE and A level course names, and every lesson is taught in English.' },
      { h3: 'A lesson that shows the way', p: 'The free session teaches a real task and finishes with a proposed level, course and weekly time, with no card details needed.' },
      { h3: 'Right-sized groups', p: 'Five to ten learners at one stage, drawn from Newport, the rest of Britain and overseas, so every level has a time that works.' },
      { h3: 'Two sessions a week', p: 'A regular pair of weekly lessons, around eight a month, with holidays and exam periods arranged with the teacher ahead of time.' },
      { h3: 'Newport afternoon, India evening', p: 'A 4.30 pm class in Newport begins at 9 pm in India in summer and 10 pm in winter, since India never changes its clocks, and our teachers keep those evening hours for UK learners.' }
    ],
    spec: { title: 'Across Gwent', p: 'Families in Cwmbran, Chepstow, Caldicot or Pontypool join exactly the same classes, since everything happens online and groups are formed by level.' }
  },

  fees: {
    h2: 'Newport lesson fees',
    intro: 'A free first lesson, followed by a single monthly fee.',
    first: 'A full lesson at no charge, closing with a suggested level, course and weekly slot.',
    group: 'Roughly eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'Roughly eight live lessons a month, taught to your learner alone.',
    closer: 'Whether you live in Allt-yr-yn or Alway, the fee is the same US dollar amount charged to every family outside India, and no price on our site is in pounds. We send no bill until the free lesson has agreed a course and a lesson time; the pricing page deals with pausing, missed lessons and changes between group and private teaching.'
  },

  reviewsH2: 'Six families\' Google reviews, as they were posted',

  book: {
    h2: 'Book a free lesson for a Newport learner',
    intro: 'We pick the first task by level: a before-and-after puzzle for a young child, a short Python program that works out percentage change for a beginner, or the DfT traffic data and a difference-in-differences estimate for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Newport learner.'
  },

  faq: {
    h2: 'Newport coding class questions',
    intro: 'The questions families in Newport ask us most.',
    items: [
      { q: 'How many people live in Newport?', a: 'The 2021 census counted 159,592 usual residents in Newport, of whom 158,205 lived in households and the rest in communal establishments such as care homes and halls.' },
      { q: 'How does Newport compare with Wales?', a: 'Newport is young: 6.5% of its residents in 2021 were aged 5 to 9, against 5.7% in Wales, and 6.1% were aged 4 or under, against 5.0%. It had 838.1 residents per square kilometre, against 149.9 across Wales.' },
      { q: 'What is difference-in-differences?', a: 'A way of estimating the effect of an event by comparing how much something changed where the event happened with how much it changed somewhere similar where it did not, over the same period.' },
      { q: 'Did scrapping the Severn tolls increase traffic?', a: 'On the Prince of Wales Bridge, counted traffic rose 15.03% from 2017 to 2019, while six English motorway counts near Bristol changed by 0.07% on average, suggesting about 15 points of extra growth. It is an estimate resting on stated assumptions.' },
      { q: 'Where do the traffic figures come from?', a: 'The Department for Transport\'s road traffic statistics, which give annual average daily flows for each count point and say whether each figure was counted on the road or estimated.' },
      { q: 'What is the Newport Ship?', a: 'A fifteenth-century merchant vessel found in 2002 during building work on the Riverfront arts centre, according to the Friends of the Newport Ship, preserved in river sediment for around 532 years. We are not connected with the Friends.' },
      { q: 'When are Newport lessons timetabled?', a: 'After school, in the evening or at weekends, at a UK time we fix together in the free lesson. India is four and a half hours ahead of Newport in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Newport?', a: 'No. We have no centre in Newport and no premises anywhere in the UK; all our teaching is live online. A learner needs a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Newport lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Newport groups formed?', a: 'By level, pace and goals rather than age or postcode, with five to ten learners at one stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Wales and the UK',
    h2: 'Welsh cities and beyond',
    html: 'Down the M4, the <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff page</a> tests whether its size fits Zipf\'s law, and further west <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a> runs a change detector over roadside air readings. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a> covers the Curriculum for Wales, and our <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC Digital Technology</a> pages help with exams. Across the bridges, <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> has a page of its own.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newport and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/best-coding-class-in-swansea', label: 'Swansea' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-npw .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-npw .cg-hero h1 { font-weight: 690; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-npw .cg-capsule { border-top: 4px double var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-npw .cg-eyebrow { letter-spacing: 0.14em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-npw .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.014em; }
.cg-root.cg-npw .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2.1rem); }
.cg-root.cg-npw .cg-table th { letter-spacing: 0.021em; }
.cg-root.cg-npw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-npw .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-npw .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Newport, Wales, Census 2021 via Nomis (W06000022): TS001 159,592 usual residents, 158,205 in households, 1,387 in communal establishments; TS007A aged 4 and under 9,733 (6.1 percent, Wales 5.0), 5 to 9 10,336 (6.5, Wales 5.7), 10 to 14 10,215 (6.4, Wales 5.9); TS068 30,401 students of 149,859 residents aged 5 and over (20.3 percent, Wales 19.9); TS006 838.1 usual residents per square kilometre (Wales 149.9). Friends of the Newport Ship: fifteenth-century merchant vessel unearthed in 2002 when building work on the Riverfront arts centre paused for excavation; preserved in sediment for around 532 years; around 1469 a repair or refit was interrupted when the supporting cradle is thought to have collapsed.',
    localProject: 'What did scrapping the Severn tolls do? DfT road traffic API (read 22 September 2026), annual average daily flow, all motor vehicles, 2017 against 2019; tolls abolished 17 December 2018 (GOV.UK). M4 Prince of Wales Bridge (count point 99169), counted both years: 67,488 to 77,629, +15.03 percent. Six South Gloucestershire motorway points counted both years: mean +0.07, median -1.21 percent. Difference in differences about +15 points. M48 Severn Bridge: last counted 2016 (22,268); 2017 to 2019 estimated (22,437 to 22,632). M4 in Newport counted both years: J28 to J27 -7.29 percent, J29 to J28 +3.45 percent; estimated links all 1.07 to 1.11 percent. 14 of 34 values estimated. Lesson family: difference-in-differences and natural experiments; distinct from Swansea change points and Preston robust trends.',
    requiredMentions: [
      '158,205',
      '838.1',
      '30,401',
      '149,859',
      'Newport Ship',
      'Riverfront',
      'Prince of Wales Bridge',
      'difference-in-differences',
      '77,629',
      '67,488',
      '532 years',
      'Rogerstone'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Newport: 159,592 usual residents; 158,205 in households; 1,387 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=W06000022' },
      { claim: 'Nomis, Census 2021 TS007A: Newport and Wales five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=W06000022,W92000004' },
      { claim: 'Nomis, Census 2021 TS068: Newport 30,401 students of 149,859 aged 5 and over (20.3 percent); Wales 19.9 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=W06000022,W92000004' },
      { claim: 'Nomis, Census 2021 TS006: population density, Newport 838.1 and Wales 149.9 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=W06000022,W92000004' },
      { claim: 'Department for Transport, road traffic statistics API: annual average daily flow by count point, with estimation method.', url: 'https://roadtraffic.dft.gov.uk/api/average-annual-daily-flow?filter%5Bcount_point_id%5D=99169' },
      { claim: 'GOV.UK, Severn Crossings to go toll-free on 17 December 2018 (2 October 2018).', url: 'https://www.gov.uk/government/news/severn-crossings-to-go-toll-free-on-17-december-2018' },
      { claim: 'Friends of the Newport Ship: fifteenth-century merchant vessel found in 2002, around 532 years in the sediment, repair interrupted around 1469.', url: 'https://www.newportship.org/' }
    ],
    rejectedClaims: [
      'Any money figures about toll savings: excluded by the cluster rules, and not needed for the traffic question.',
      'Using estimated DfT values in the comparison: estimates are grown from national factors and cannot show a local change, so only counted pairs are used.',
      'A claim that the tolls caused exactly 15 percent growth: the page presents an estimate that rests on parallel trends and a possibly affected control.',
      'Newport City Council Transporter Bridge pages: returned 403, so the bridge is not described.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Department for Transport, the Friends of the Newport Ship or Newport City Council.'
    ]
  }
};
