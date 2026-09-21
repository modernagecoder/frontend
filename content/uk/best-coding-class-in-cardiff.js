'use strict';
// Cardiff (cg- city page, UK cluster Phase 4). Spine: is Cardiff as big as Zipf's law says it should be? Rank-size
// analysis of ONS "Towns and cities, characteristics of built-up areas, England and Wales: Census 2021", Table 1d
// (usual residents by individual BUA, Wales; counts rounded to the nearest 5), read 21 September 2026 (scratchpad
// crf/zipf.py). 579 Welsh built-up areas: 1 Major (Cardiff 348,535), 2 Large (Swansea 170,085; Newport 130,890),
// 15 Medium, 87 Small, 474 Minor; smallest Llandarcy 115. Zipf from Cardiff predicts rank 2 at 174,268 and rank 3
// at 116,178; Barry (rank 4) 56,605 against 87,134; Bridgend 51,760 against 69,707; Merthyr Tydfil (rank 10)
// 39,535 against 34,854. Log-log fits of size on rank: top 10 slope -0.999 (r2 0.942); top 50 -0.814; the 54 BUAs
// of 10,000 or more -0.809 (r2 0.971, fitted rank-one size 246,650); all 579 -1.259. Lesson family: Zipf's law
// and power laws (rank-size rule, log-log fitting, the range a law holds over, the primate city). Screened free
// site-wide on 21 September 2026 (Zipf, rank-size: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Cardiff W06000015 (362,308 usual
// residents; 346,893 in households, 95.7%; 15,415 in communal establishments, 4.3%), TS007A (21,504 aged 5 to 9,
// 5.9%; 37,885 aged 20 to 24, 10.5%; 29,300 aged 25 to 29, 8.1%; 15 to 19 7.3%; Wales 5.7, 6.0, 6.0 and 5.7%), TS068
// (94,734 schoolchildren and full-time students of 343,239 aged 5 and over, 27.6%; Wales 19.9%). Cardiff University,
// history (opened 24 October 1883 as the University College of South Wales and Monmouthshire, Royal Charter 1884;
// 13 academic staff, 12 departments, 102 full-time and 49 part-time students; a founding institution of the
// University of Wales in 1893) and facts and figures (Russell Group member; 31,505 students from 142 countries).
// Amgueddfa Cymru, National Museum Cardiff page (Cathays Park; free admission tickets).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'CARDIFF', blurb: 'Wales\'s capital, with a project that tests whether Cardiff is as big as Zipf\'s law predicts from 579 Welsh towns and cities.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-cardiff',
  code: 'crf',
  accent: '#0F5728',
  accentRationale: 'Cardiff: a deep Welsh green from the solver (7.06:1 on every paper tint, dE 6.5 from the nearest used accent), darker and bluer than the Nottingham green and far from the Glasgow blue',
  pageType: 'city',
  place: {
    name: 'Cardiff',
    eyebrow: 'Cardiff, Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Cardiff' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cardiff, Wales',
  title: 'Best Coding Classes in Cardiff | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Cardiff learners aged 6 to 67, from Canton and Roath to Cathays and Llanishen. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Cardiff, on a page that ranks all 579 built-up areas in Wales and asks whether the capital is as big as Zipf\'s law predicts.',
  twitterDescription: 'Cardiff learners aged six to sixty-seven can learn coding and AI with us live online, beginning with a free lesson.',
  ogImageCourse: 'data-analytics-mathematics-masterclass',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Cardiff Live Online Coding, Data and AI Lessons',
    description: 'Coding, Python, AI, data and mathematics taught live online in English to Cardiff children, teenagers and adults, in level-based groups or one to one.'
  },

  h1: 'Coding classes in Cardiff',
  capsuleQ: 'What are the best coding classes in Cardiff?',
  capsule: 'Cardiff had 362,308 usual residents at the 2021 Census, and 27.6% of those aged five and over were schoolchildren or full-time students, against 19.9% across Wales. Cardiff University, which opened on 24 October 1883 with 102 full-time degree students, now counts 31,505. Learners across Cardiff, from six-year-olds to people of sixty-seven, study with Modern Age Coders live online, privately or in groups of five to ten placed by level, with India-based teachers working to a UK timetable. The first lesson costs nothing; afterwards a group place is USD 100 a month and private lessons USD 150 a month.',
  lead: 'The Office for National Statistics counted the people in every built-up area of Wales in 2021: 579 of them, from Cardiff with 348,535 down to Llandarcy with 115. Put them in order of size and a curious pattern appears. Zipf\'s law, famous from word frequencies, says the second place should be about half the size of the first, the third a third, and so on. Swansea, in second place, has 170,085; the law predicts 174,268 from Cardiff\'s count, within 2.5%. Across the ten largest places, the fitted line on a log-log chart has a slope of minus 0.999, almost exactly Zipf\'s minus one. But fit the 54 places of 10,000 or more and the line predicts a capital of about 246,650, so Cardiff comes out bigger than the pattern expects. Why, and how much the answer depends on which towns you include, is the lesson Wales\'s towns give our teenage learners.',
  wa: 'Hello Modern Age Coders, please could we book a free coding lesson for a learner in Cardiff?',

  picks: {
    eyebrow: 'Course picks for Cardiff',
    h2: 'Four courses for the Welsh capital',
    intro: 'Follow the learner\'s interests. The opening lesson of any course is free, live and booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic, patterns and first programs, where ordering towns by size and spotting a rule is a natural early puzzle.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Algebra, graphs and probability built in Python, the tools for plotting a pattern and testing whether it holds.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Pandas, real datasets and honest charts for teenagers who know basic Python, a natural home for a 579-row census table.' },
      { course: 'data-analytics-mathematics-masterclass', band: 'University and adult', note: 'Statistics, regression and the mathematics of data for adults, including the log scales that power laws need.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cardiff today',
      h2: 'A capital full of students and young adults',
      intro: 'From the 2021 Census tables for the Cardiff local authority, published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Cardiff, Census 2021', head: ['Census 2021 measure', 'Cardiff', 'Wales'], rows: [
          ['Usual residents', '362,308', 'Not compared'],
          ['In households', '346,893, 95.7%', 'Not compared'],
          ['In communal establishments', '15,415, 4.3%', 'Not compared'],
          ['Aged 5 to 9', '21,504, 5.9%', '5.7%'],
          ['Aged 20 to 24', '37,885, 10.5%', '6.0%'],
          ['Aged 25 to 29', '29,300, 8.1%', '6.0%'],
          ['Schoolchildren and full-time students, of 343,239 aged five and over', '94,734, 27.6%', '19.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Young adults', p: 'Residents aged 20 to 24 made up 10.5% of Cardiff and those aged 25 to 29 another 8.1%, against 6.0% each across Wales.' },
          { h3: 'In education', p: 'Schoolchildren and full-time students were 27.6% of Cardiff residents aged five and over in 2021, well above the Welsh figure of 19.9%.' },
          { h3: 'Children in step', p: 'Children aged 5 to 9 were 5.9% of residents, close to Wales\'s 5.7%, so the capital is a family city as well as a student one.' }
        ] },
        { kind: 'p', text: 'Note that the council area and the built-up area are different shapes: the local authority counted 362,308 people, while the ONS built-up area called Cardiff, drawn around continuous development, counted 348,535. Both are right, for different boundaries. Learners here span every stage, from a Year 3 pupil in Roath building a first game to a Year 11 student in Llanishen preparing for WJEC GCSE Computer Science, or an adult in Cathays learning data skills.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A university and a museum',
      h2: 'From 102 students to a Russell Group university',
      intro: 'From Cardiff University and Amgueddfa Cymru, National Museum Wales.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '24 October 1883', p: 'Cardiff University says it opened its doors that day as the University College of South Wales and Monmouthshire, receiving its Royal Charter the following year.' },
          { h3: '102 students', p: 'At the start there were, the University says, 13 academic staff, 12 departments, 102 full-time degree students and 49 part-time students.' },
          { h3: '31,505 today', p: 'The University now reports 31,505 students from 142 countries and is a member of the Russell Group of research-intensive universities.' }
        ] },
        { kind: 'p', text: 'In 1893 the college became one of the founding institutions of the University of Wales, and it took the name University College, Cardiff, by 1972. In Cathays Park, Amgueddfa Cymru runs National Museum Cardiff, where admission is free with a booked ticket. We have no connection with either. We mention them because a capital city collects institutions, people and activity faster than its neighbours, which is exactly the effect the project on this page tries to measure.' },
        { kind: 'spec', title: 'What a built-up area is', p: 'The ONS draws built-up areas from satellite imagery around continuous development, so they follow the towns themselves rather than council boundaries. For Census 2021 it published a population for each of Wales\'s 579 built-up areas, rounded to the nearest 5 to protect confidentiality, and grouped them into five size classes.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is Cardiff as big as it should be?',
      intro: 'Zipf\'s rank-size rule says the town at rank r should have about 1/r of the largest town\'s population. We tested it on every built-up area in Wales.',
      body: [
        { kind: 'table', caption: 'Largest built-up areas in Wales, Census 2021, against the Zipf prediction from Cardiff', head: ['Rank', 'Built-up area', 'Census 2021', 'Zipf prediction'], rows: [
          ['1', 'Cardiff', '348,535', 'Starting point'],
          ['2', 'Swansea', '170,085', '174,268'],
          ['3', 'Newport', '130,890', '116,178'],
          ['4', 'Barry', '56,605', '87,134'],
          ['5', 'Bridgend', '51,760', '69,707'],
          ['10', 'Merthyr Tydfil', '39,535', '34,854']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Rank the towns', p: 'Sort all 579 built-up areas by population, largest first, and give each its rank. Cardiff is rank 1 and Llandarcy, with 115 residents, rank 579.' },
          { h3: '2. Plot on log scales', p: 'Plot the logarithm of population against the logarithm of rank. A pure Zipf pattern gives a straight line with a slope of exactly minus one.' },
          { h3: '3. Fit and compare', p: 'Fit the line over different ranges. The ten largest give a slope of minus 0.999; the 54 places of 10,000 or more give minus 0.809.' }
        ] },
        { kind: 'callout', h3: 'A capital bigger than the pattern', p: 'The line fitted to the 54 places of 10,000 or more predicts a largest town of about 246,650. Cardiff\'s built-up area has 348,535, well above the line, which is what geographers call a primate city: a capital that draws in more people than its rank alone would suggest. Swansea sits almost exactly where Zipf predicts; Barry and Bridgend fall well below, squeezed perhaps by being so close to Cardiff.' },
        { kind: 'p', text: 'The answer depends heavily on the range. Fit all 579 places and the slope steepens to minus 1.259, because the smallest villages fall away faster than the rule allows. Fit only the top ten and it is almost perfect. A power law is only ever claimed over a range, and a learner who reports a slope without its range, or who fits the range that gives the answer they wanted, has not really tested anything.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Testing a power law',
      h2: 'Five checks before claiming a pattern holds',
      intro: 'Learned on Welsh towns, used afterwards on word frequencies, website traffic, earthquake sizes, city populations everywhere and any ranked list that seems to follow a rule.',
      body: [
        { kind: 'table', caption: 'Testing a rank-size rule honestly', head: ['Check', 'What it looks like', 'What it prevents'], rows: [
          ['Define the units', 'Say whether you rank built-up areas, council areas or something else', 'Mixing boundaries that measure different things'],
          ['Plot on log scales', 'Look at log population against log rank before fitting anything', 'Missing a curve that a straight-line claim hides'],
          ['Report the range', 'Give the slope with the ranks it was fitted over', 'A pattern that only holds for the places you chose'],
          ['Look at the outliers', 'Name the places that sit far above or below the line', 'Averaging away the most interesting cases'],
          ['Respect the rounding', 'Remember counts are rounded to the nearest 5, which matters for tiny villages', 'False precision at the bottom of the list']
        ] },
        { kind: 'p', text: 'The first check matters in Cardiff more than most places. The council area and the built-up area give different populations, and ranking council areas instead would produce a different list and a different slope. Neither is wrong, but a rule claimed for one does not automatically hold for the other.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Lining up towns by size with coloured bars and noticing that each step down the list is smaller than the last.' },
          { h3: 'Teenagers', p: 'The ONS workbook read in Python, the towns ranked, log-log fits made over several ranges, and the outliers explained.' },
          { h3: 'Adults', p: 'Power-law claims at work, from customer sizes to web traffic, tested over stated ranges before anyone relies on them.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Office for National Statistics, Cardiff University or Amgueddfa Cymru. The census figures are published for public use; the rankings, predictions and fitted slopes are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a bar chart of towns to a power law',
    intro: 'The ages are a starting guide; the free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Biggest to smallest', p: 'Ordering towns and objects by size, drawing bar charts and describing how quickly the bars shrink.', courses: ['elementary-mathematics-complete-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Patterns and fractions', p: 'Halves, thirds and quarters of a number, sorting in code and testing whether a list follows a simple rule.', courses: ['maths-through-coding', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Ages 14 to 18', h3: 'Power laws in Python', p: 'Real census data ranked, logarithms and log-log fits applied, and the range of a law tested honestly.', courses: ['data-science-course-for-teens-python-data', 'complete-high-school-mathematics-mastery'] },
      { band: 'Ages 18 to 67', h3: 'Patterns in data at work', p: 'Regression, log scales and outlier analysis for adults who need to know whether a pattern is real.', courses: ['data-analytics-mathematics-masterclass', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can tell you Cardiff is the biggest town in Wales. Why should a Cardiff teenager test Zipf\'s law?',
    intro: 'Because a ranked list hides a pattern, and the pattern hides its limits.',
    p1: 'Ask an AI tool whether Welsh towns follow Zipf\'s law and it may say yes with confidence, or no, depending on how the question is framed. The honest answer is both: almost perfectly for the ten largest places, much less so across all 579, with Cardiff bigger than the pattern predicts. A learner who has fitted the line over several ranges knows that a power law without its range is a slogan, not a finding.',
    p2: 'Zipf\'s law also sits close to the heart of modern AI. Word frequencies in any language follow it, which shapes how language models are trained and why rare words are hard for them; website traffic, file sizes and many network patterns follow similar power laws. Understanding the rank-size rule on real towns is a direct route to understanding those systems.',
    closer: 'Which is why programming is still worth a Cardiff teenager\'s time in 2026, in a capital that has outgrown its neighbours: patterns are easy to claim and hard to test, and knowing the difference is what programming with data teaches.',
    blogAnchor: 'is learning to code still worthwhile in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Canton, Roath or Llanishen, from your own desk',
    intro: 'Cardiff is compact, but a live online lesson still saves the trip across town.',
    cells: [
      { h3: 'Bay to the northern suburbs', p: 'A learner in Butetown and another in Rhiwbina can share a lesson without either crossing the city.' },
      { h3: 'Welsh school years', p: 'Years 1 to 13, the Curriculum for Wales and WJEC GCSEs and A levels, named as Cardiff schools name them. Lessons are taught in English.' },
      { h3: 'A free lesson that counts', p: 'The first lesson teaches something real and ends with a recommended level, course and weekly time. No card is needed.' },
      { h3: 'Grouped by level', p: 'Every group holds five to ten learners at the same stage, gathered from Cardiff, other parts of Britain and further afield, so each level can meet at a sensible hour.' },
      { h3: 'Twice a week, set times', p: 'The rhythm is two fixed lessons weekly, roughly eight in a month, and any holiday or exam pause is planned with the teacher before it begins.' },
      { h3: 'Teachers in India', p: 'India keeps the same clock all year. Cardiff is four and a half hours behind it in British Summer Time and five and a half behind in winter, which places after-school and evening slots inside the teaching day.' }
    ],
    spec: { title: 'Across South Wales', p: 'Families in Penarth, Caerphilly or Newport join exactly the same groups, because every lesson is online and groups are formed by level rather than postcode.' }
  },

  fees: {
    h2: 'Cardiff lesson fees',
    intro: 'One free lesson, then a single monthly fee.',
    first: 'A full lesson at no charge, ending with a level, a suggested course and a proposed weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners at one level.',
    private: 'About eight live lessons a month with a teacher who works with your learner alone.',
    closer: 'Families outside India all pay one US dollar fee, so Pontcanna and Splott pay exactly the same, and we publish no prices in pounds. No invoice arrives before the free lesson has settled which course and which weekly slot suit, and our pricing page explains how pausing, missed lessons and a switch between group and private teaching are handled.'
  },

  reviewsH2: 'Six Google reviews from our families, as they wrote them',

  book: {
    h2: 'Book a free lesson for a Cardiff learner',
    intro: 'We choose the first task by level: a bar chart of towns for a young child, a first Python program that sorts a list, or the ONS table of 579 Welsh built-up areas and a Zipf test for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a Cardiff lesson.'
  },

  faq: {
    h2: 'Cardiff coding class questions',
    intro: 'What Cardiff families ask us most often.',
    items: [
      { q: 'How many people live in Cardiff?', a: 'The 2021 Census counted 362,308 usual residents in the Cardiff local authority: 346,893 in households and 15,415, or 4.3%, in communal establishments. The ONS built-up area called Cardiff, a different boundary, had 348,535.' },
      { q: 'How many Cardiff residents are students?', a: 'In 2021, 94,734 of the 343,239 residents aged five and over were schoolchildren or full-time students, 27.6% against 19.9% across Wales. Cardiff University reports 31,505 students.' },
      { q: 'What is Zipf\'s law?', a: 'A pattern in which the item at rank r in a list is about 1/r the size of the largest. It appears in word frequencies, city sizes and many other ranked lists, usually over a limited range.' },
      { q: 'Do Welsh towns follow Zipf\'s law?', a: 'For the ten largest built-up areas, almost exactly: the fitted slope is minus 0.999. Across all 579 it is steeper, and Cardiff is larger than the line through the bigger towns predicts.' },
      { q: 'When did Cardiff University open?', a: 'On 24 October 1883, as the University College of South Wales and Monmouthshire, according to the University, with 102 full-time degree students. We are not connected with the University.' },
      { q: 'Do lessons follow the Curriculum for Wales?', a: 'We use Welsh school years and WJEC course names, and support learners working towards WJEC GCSE Computer Science and Digital Technology; our WJEC pages explain each course. Lessons are taught in English.' },
      { q: 'When are Cardiff lessons held?', a: 'On weekday afternoons and evenings or at weekends, at a UK time agreed in the free lesson; India runs 4.5 hours ahead of Cardiff in summer and 5.5 hours in winter.' },
      { q: 'Is there a Modern Age Coders centre in Cardiff?', a: 'No. There is no Cardiff centre and no premises anywhere in the UK; all teaching is live online. Learners need a computer with sound and a steady connection, and our phone number is based in India.', boiler: true },
      { q: 'How much do Cardiff lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How are Cardiff groups formed?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group meets at a suitable time, we propose one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Wales and the UK',
    h2: 'Welsh guides and nearby cities',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a> covers coding across the Curriculum for Wales, and exam help lives on the <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC Digital Technology</a> pages. Across the Severn, <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> splits its city into library catchments. Every UK page is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cardiff and the UK',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE' },
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-crf .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.7rem); }
.cg-root.cg-crf .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-crf .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-crf .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-crf .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.013em; }
.cg-root.cg-crf .cg-grid-3 { gap: clamp(1.15rem, 2.7vw, 2.3rem); }
.cg-root.cg-crf .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-crf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-crf .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.95rem; }
.cg-root.cg-crf .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Cardiff, Census 2021 via Nomis: TS001 Cardiff local authority (W06000015) 362,308 usual residents, 346,893 in households (95.7 percent), 15,415 in communal establishments (4.3 percent); TS007A 21,504 aged 5 to 9 (5.9 percent), 37,885 aged 20 to 24 (10.5 percent), 29,300 aged 25 to 29 (8.1 percent), against Wales 5.7, 6.0 and 6.0 percent; TS068 94,734 schoolchildren and full-time students of 343,239 residents aged 5 and over, 27.6 percent, against 19.9 percent in Wales. ONS Towns and cities, characteristics of built-up areas, Census 2021, Table 1d: 579 Welsh built-up areas, Cardiff 348,535, Swansea 170,085, Newport 130,890 (rounded to the nearest 5). Cardiff University: opened 24 October 1883 as the University College of South Wales and Monmouthshire; Royal Charter 1884; 13 academic staff, 12 departments, 102 full-time and 49 part-time students; founding institution of the University of Wales in 1893; Russell Group; 31,505 students from 142 countries. Amgueddfa Cymru: National Museum Cardiff, Cathays Park, free admission tickets.',
    localProject: 'Is Cardiff as big as it should be? ONS built-up areas Census 2021, Table 1d, Wales: 579 BUAs (1 Major, 2 Large, 15 Medium, 87 Small, 474 Minor), rounded to 5. Zipf predictions from Cardiff 348,535: Swansea 170,085 against 174,268; Newport 130,890 against 116,178; Barry 56,605 against 87,134; Bridgend 51,760 against 69,707; Merthyr Tydfil 39,535 against 34,854. Log-log slopes: top 10 -0.999; top 50 -0.814; 54 BUAs of 10,000+ -0.809 (fitted rank one 246,650); all 579 -1.259. Lesson family: Zipf\'s law and power laws (rank-size, log-log fits, range, primate city); distinct from least squares trends, fractal dimension and Benford.',
    requiredMentions: [
      '346,893',
      '15,415',
      '37,885',
      '94,734',
      '343,239',
      '170,085',
      '130,890',
      'Zipf',
      '24 October 1883',
      '31,505',
      'rank-size',
      'University College of South Wales'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Cardiff: 362,308 usual residents; 346,893 in households; 15,415 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=W06000015' },
      { claim: 'Nomis, Census 2021 TS007A: Cardiff and Wales five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=W06000015,W92000004' },
      { claim: 'Nomis, Census 2021 TS068: Cardiff 94,734 students of 343,239 aged 5 and over (27.6 percent); Wales 19.9 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=W06000015,W92000004' },
      { claim: 'ONS, Towns and cities, characteristics of built-up areas, England and Wales: Census 2021 (Table 1d, Wales).', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/housing/datasets/townsandcitiescharacteristicsofbuiltupareasenglandandwalescensus2021' },
      { claim: 'Cardiff University, history: opened 24 October 1883; early staff and student numbers; University of Wales 1893.', url: 'https://www.cardiff.ac.uk/about/our-profile/history' },
      { claim: 'Cardiff University, facts and figures: Russell Group; 31,505 students from 142 countries.', url: 'https://www.cardiff.ac.uk/about/facts-and-figures' },
      { claim: 'Amgueddfa Cymru, National Museum Cardiff: Cathays Park, free admission tickets.', url: 'https://museum.wales/cardiff/' }
    ],
    rejectedClaims: [
      'Welsh-language place-name analysis: considered and dropped because no bilingual primary dataset could be downloaded, and letter-frequency work overlaps the Caesar cipher lesson.',
      'Cardiff Castle facts: the site did not respond, so not stated.',
      'That proximity to Cardiff causes Barry and Bridgend to be small: presented only as a possible explanation.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the ONS, Cardiff University or Amgueddfa Cymru.'
    ]
  }
};
