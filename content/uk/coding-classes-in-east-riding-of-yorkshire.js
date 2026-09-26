'use strict';
// East Riding of Yorkshire (cg- county index, UK cluster Phase 7, row 231). Ceremonial East Riding: East Riding of
// Yorkshire Council plus Kingston upon Hull. Spine: count cleverly, not everywhere. RSPB Bempton Cliffs (rspb.org.uk,
// read raw 26 September 2026): "Around half a million seabirds gather here between March and August to raise a family
// on the towering chalk cliffs that overlook the North Sea". Our model (scratchpad eri/strat.py, seed 20260926; all
// numbers ours, not RSPB counts): a cliff of 400 sections, 60 dense ledges (mean 4,500 birds), 140 medium (1,100),
// 200 sparse (120); true total 447,916. Counting 20 sections, 10,000 repeats: simple random sample, spread 30.4 per
// cent of the true total, 24.9 per cent of estimates within 10 per cent; stratified with proportional allocation
// (3 dense, 7 medium, 10 sparse), spread 7.8 per cent, 80.4 per cent within 10 per cent; Neyman allocation (9, 9, 2,
// from stratum size times spread), spread 5.5 per cent, 93.4 per cent within 10 per cent; all three essentially
// unbiased (within 0.5 per cent). Lesson family: stratified sampling and optimal (Neyman) allocation; screened 26
// September 2026 (stratified: 0 lesson hits; the word appears only in a course description).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (East Riding 342,215; Hull 267,014; our total
// 609,229); ONS built-up areas, all 14 above 5,000 inside the county (Kingston upon Hull BUA 270,810 spans Hull and
// the East Riding). BLOCKED: Humber Bridge Board site 403 (tower-divergence idea dropped); East Riding council coastal
// pages 404. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'EAST RIDING', blurb: 'Two councils, fourteen towns, and how to estimate half a million seabirds on a cliff without counting every one.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-east-riding-of-yorkshire',
  code: 'ery',
  accent: '#3B4E6B',
  accentRationale: 'East Riding: a North Sea slate blue from the solver (6.8:1 on the darkest paper tint), bluer than the Cumbria grey-blue',
  pageType: 'governorate',
  place: {
    name: 'East Riding of Yorkshire',
    eyebrow: 'East Riding of Yorkshire and Hull',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Yorkshire and the Humber' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Hull', href: '/best-coding-class-in-hull' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'East Riding of Yorkshire',
  title: 'Coding Classes in the East Riding | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, data and maths classes across the East Riding of Yorkshire and Hull, from Bridlington and Beverley to Goole, Hessle and Driffield.',
  ogDescription: 'Coding classes for every East Riding town, and a Bempton Cliffs project: estimate half a million seabirds by counting a few cliff sections, and learn how to choose which.',
  twitterDescription: 'East Riding and Hull coding, Python and data classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Data Classes for the East Riding of Yorkshire',
    description: 'Ability-placed online coding, Python, data science, statistics and mathematics for children, teenagers and adults across the East Riding of Yorkshire and Hull, taught live in English.'
  },

  h1: 'Coding classes in the East Riding of Yorkshire',
  capsuleQ: 'What are the best coding classes in the East Riding of Yorkshire?',
  capsule: 'The East Riding of Yorkshire, with Hull, held 609,229 people at the 2021 Census: 342,215 in the East Riding council area and 267,014 in the city. Hull\'s built-up area is by far the largest place, spilling out into Hessle, Cottingham and Willerby, and beyond it lie Bridlington on the coast, Beverley, Goole, Driffield and a wide farming landscape of small towns and villages. Our lessons reach all of it the same way: a teacher in India teaches live over video; learners are grouped by what they can do, not by age; anyone from 6 to 67 can join; and there is a choice of a group of five to ten or one-to-one teaching. We teach programming, Python, data, statistics and maths. The East Riding project begins at Bempton Cliffs. The first lesson is free; then it is USD 100 a month for a group or USD 150 for private lessons.',
  lead: 'The RSPB says that around half a million seabirds gather on the chalk cliffs at Bempton between March and August to raise their young. Nobody counts half a million birds one by one. The practical question, for a scientist or a curious teenager, is how few parts of the cliff you can count and still get a trustworthy total. This page\'s project builds a model cliff in Python, with dense ledges, middling stretches and sparse faces, and compares two ways of choosing which sections to count. The difference is dramatic: the same twenty counts can give an estimate that is often badly wrong, or one that is almost always close, depending only on how the sections were chosen.',
  wa: 'Hello Modern Age Coders, I would like a free lesson for a learner in the East Riding.',

  picks: {
    eyebrow: 'Courses for the East Riding',
    h2: 'Where East Riding learners begin',
    intro: 'A seven-year-old in Hornsea who counts birds on the beach, an eleven-year-old in Pocklington who likes probability puzzles, a Year 12 in Beverley interested in data, and a council officer in Hull who wants to get more from survey results. Four starts, one free lesson each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games and animations, including counting games where a child keeps score of what appears.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with probability and averages built as Python experiments.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'pandas, real datasets, matplotlib and statistics, including sampling and how estimates vary.' },
      { course: 'statistics-probability-maths-course', band: 'Adults', note: 'Descriptive statistics, distributions, hypothesis testing and regression on real data.' }
    ]
  },

  sections: [
    {
      id: 'east-riding', tint: '', eyebrow: 'The East Riding in figures',
      h2: '609,229 people: a city, a coast and a wide rural riding',
      intro: 'Both council totals are 2021 Census counts on Nomis. The town list uses ONS built-up areas, which we confirmed by adding up census output areas inside the county.',
      body: [
        { kind: 'table', caption: 'The two councils of the East Riding, usual residents at Census 2021', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['East Riding of Yorkshire', '342,215', 'Bridlington, Beverley, Goole, Driffield, Pocklington, Hornsea, Withernsea'],
          ['Kingston upon Hull', '267,014', 'Hull']
        ] },
        { kind: 'p', text: 'Hull\'s built-up area, 270,810 people, is slightly larger than the city council\'s own count, because the continuous urban area runs across the boundary into East Riding villages. Outside that, the county is a big, thinly settled place: Bridlington, the largest East Riding town, has under 35,000 people, and the county stretches from Withernsea on the Holderness coast to Goole on the Ouse. For learners in the smaller towns, a group of others at exactly their level is rarely nearby.' },
        { kind: 'table', caption: 'All fourteen built-up areas in the East Riding and Hull with more than 5,000 residents, 2021', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Kingston upon Hull', '270,810', 'Brough', '13,320'],
          ['Bridlington', '34,845', 'Driffield', '13,215'],
          ['Beverley', '30,930', 'Pocklington', '10,120'],
          ['Goole', '20,175', 'Hornsea', '8,790'],
          ['Willerby and Anlaby', '19,260', 'Hedon', '8,120'],
          ['Hessle', '15,485', 'Market Weighton', '7,460'],
          ['Cottingham', '14,425', 'Withernsea', '5,765']
        ] },
        { kind: 'p', text: 'All fourteen agree with our own output-area count to within rounding and lie inside the county. The two councils and academies set their own school calendars; we did not read them, and agree lesson breaks with each family instead.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East Riding project',
      h2: 'Estimating half a million seabirds from twenty counts',
      intro: 'A model cliff built in Python, ten thousand simulated surveys, and a lesson in choosing where to look.',
      body: [
        { kind: 'p', text: 'We cannot count real birds from a keyboard, so the learner builds a model: a cliff of 400 sections, where 60 are crowded ledges averaging 4,500 birds, 140 are middling at around 1,100, and 200 are sparse faces with about 120. Every number is our own teaching value; the model cliff holds 447,916 birds, the right order of size for Bempton. Now pretend to be a surveyor with time to count only 20 sections, multiply up, and see how close the estimate lands. Then do it ten thousand times with different random choices and look at the spread of answers.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: 10,000 simulated surveys of 20 sections each', head: ['How the 20 sections were chosen', 'Typical error (spread)', 'Estimates within 10 per cent of the truth'], rows: [
          ['Simple random: any 20 sections', '30.4 per cent', '24.9 per cent'],
          ['Stratified, in proportion: 3 dense, 7 medium, 10 sparse', '7.8 per cent', '80.4 per cent'],
          ['Stratified, weighted to the variable parts: 9 dense, 9 medium, 2 sparse', '5.5 per cent', '93.4 per cent']
        ] },
        { kind: 'p', text: 'The first row is the trap. Simple random sampling is fair on average, but twenty random sections might catch two crowded ledges or six, and that one accident swings the whole total. Only a quarter of those surveys come within 10 per cent. Stratifying fixes it: divide the cliff into its three types first, sample within each, and add up the parts. Now the lucky or unlucky draw of ledges no longer decides the answer, and four surveys in five land within 10 per cent.' },
        { kind: 'p', text: 'The last row adds a subtler idea. Spend your counts where the numbers vary most, not where the sections are most numerous: the sparse faces barely change from one to the next, so two counts there are enough, while the crowded ledges need nine. This rule, known as Neyman allocation, takes the share of each stratum to be its size multiplied by how much its sections vary, and it pushes the success rate to 93.4 per cent with exactly the same effort. All three methods are right on average; the difference is how often a single survey is right.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Scatter counters over squared paper, unevenly, then estimate the total from five random squares and from five chosen squares, and compare.' },
          { h3: 'Ages 13 to 16', p: 'Build the model cliff in Python, run a thousand simple random surveys, and plot how widely the estimates spread.' },
          { h3: 'Ages 16 and up', p: 'Add stratified and Neyman sampling, measure the improvement, and explain why none of the three methods is biased.' }
        ] },
        { kind: 'callout', h3: 'What is real and what is modelled', p: 'The half-million figure and the March to August season are the RSPB\'s. The cliff sections, densities and surveys are our own model, and nothing here describes how the RSPB actually counts birds at Bempton.' }
      ]
    },
    {
      id: 'bempton', tint: 'deep', eyebrow: 'Why Bempton',
      h2: 'Half a million seabirds on the East Riding coast',
      intro: 'The county link, in the RSPB\'s own words.',
      body: [
        { kind: 'table', caption: 'Bempton Cliffs, as the RSPB describes the reserve', head: ['Topic', 'What the RSPB says'], rows: [
          ['Where', 'On the Yorkshire coast, on towering chalk cliffs overlooking the North Sea.'],
          ['How many', 'Around half a million seabirds gather here.'],
          ['When', 'Between March and August, to raise a family.'],
          ['Its standing', 'One of the UK\'s top wildlife spectacles.']
        ] },
        { kind: 'p', text: 'Counting seabirds is a real survey problem, and the same mathematics runs opinion polls, quality control in factories, traffic surveys and scientific fieldwork everywhere. An East Riding learner who has watched stratification turn a coin-toss estimate into a dependable one understands why good surveys are designed before anyone starts counting, and why "we sampled at random" is not always enough.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the RSPB or with either East Riding council, and nothing on this page suggests one. The RSPB\'s description is its own; the model cliff and every number from it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a> has its own page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every other county and city.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From counting what you see to estimating what you cannot',
    intro: 'The free lesson places each learner by ability. School year is a guide, not the rule.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting games', p: 'Scratch projects that count, score and tally, the starting point for any survey.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Chance and averages', p: 'Python experiments with random numbers and averages, where children see how much results vary.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Designing samples', p: 'Sampling methods, spread and bias in data science projects, tested by simulating thousands of surveys.', courses: ['data-science-course-for-teens-python-data', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Surveys you can trust', p: 'Statistics for adults who design, run or read surveys, with the maths behind margins of error.', courses: ['statistics-probability-maths-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and sampling',
    h2: 'An AI can estimate a total from a sample. Would it tell you how to choose the sample?',
    intro: 'Usually it just multiplies up, which is exactly the step where estimates go wrong.',
    p1: 'Give a chatbot twenty counts from a cliff of 400 sections and ask for the total, and it will multiply the average by 400, perhaps adding a margin of error. It will rarely ask how the twenty were chosen, whether some kinds of section hold far more birds, or whether the survey should have been stratified. Yet in our model that design choice decides whether one survey in four or nine in ten lands near the truth.',
    p2: 'An East Riding student who has run ten thousand simulated surveys knows the questions that matter before any number is calculated: what are the natural groups, how much does each vary, and where should the effort go? Those questions decide the quality of every poll, audit and experiment, and no amount of fluent summarising can recover from a badly chosen sample.',
    closer: 'So an East Riding teenager should learn to code in 2026 to design the counting, not just to add it up.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'Withernsea to Goole, and nobody on the A63',
    intro: 'The East Riding is wide and thinly settled. Online lessons make every town as close as the next.',
    cells: [
      { h3: 'Right where you are', p: 'A kitchen in Hedon, a bedroom in Brough, a desk in Market Weighton. The learner types while the teacher watches the same screen.' },
      { h3: 'Your school\'s vocabulary', p: 'Year groups, GCSE options and A levels are named as East Riding and Hull schools name them, in English.' },
      { h3: 'Free first session', p: 'A complete lesson of real work, then a clear recommendation. No payment details are needed.' },
      { h3: 'Classmates at your level', p: 'Five to ten learners at the same stage, gathered widely, so no one is left behind or held back.' },
      { h3: 'Breaks with your school', p: 'Most learners have two lessons a week and stop when their own school stops.' },
      { h3: 'UK time on everything', p: 'Our teachers keep India time, 5.5 hours ahead of UK winter time and 4.5 ahead of UK summer time; every time we send you is UK time.' }
    ],
    spec: { title: 'Why groups are built by level', p: 'One city and thirteen smaller towns spread over a large rural county rarely produce enough learners at one stage in one place. Level-based groups let a Driffield learner and a Hull learner share a class.' }
  },

  fees: {
    h2: 'East Riding fees',
    intro: 'The same price in every East Riding town and in Hull, and in every country except India.',
    first: 'A full lesson with real work, ending in a recommended level and course.',
    group: 'About eight lessons each month in a group of five to ten at one level.',
    private: 'About eight lessons each month with one teacher and one learner.',
    closer: 'Fees are charged in US dollars to every family outside India; we have no pound list. The first charge comes after the free lesson, when the course and weekly time are fixed, and the pricing page explains pausing, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Google reviews, as posted',

  book: {
    h2: 'Book a free lesson',
    intro: 'Send us an age or school year and one interest. The first lesson could be a Scratch counting game, a first Python experiment with chance, or the seabird survey on this page.',
    success: 'Thank you. Your East Riding request is with us.'
  },

  faq: {
    h2: 'East Riding questions',
    intro: 'The county, the seabird project and how lessons work.',
    items: [
      { q: 'How many people live in the East Riding of Yorkshire?', a: 'The East Riding council area had 342,215 usual residents at the 2021 Census and Hull 267,014, giving 609,229 for the county including the city, from ONS figures on Nomis.' },
      { q: 'What are the largest towns in the East Riding?', a: 'By ONS built-up area: Kingston upon Hull 270,810, Bridlington 34,845, Beverley 30,930, Goole 20,175 and Willerby and Anlaby 19,260. All fourteen above five thousand are listed on this page.' },
      { q: 'What is the seabird project?', a: 'Learners build a model cliff in Python and compare ways of estimating the total from twenty counted sections. Simple random sampling lands within 10 per cent a quarter of the time; stratified sampling with Neyman allocation does so 93.4 per cent of the time.' },
      { q: 'What is stratified sampling?', a: 'Splitting a population into groups that differ, sampling within each group, and combining the results. It stops one lucky or unlucky draw from deciding the whole estimate.' },
      { q: 'How many seabirds are at Bempton Cliffs?', a: 'The RSPB says around half a million seabirds gather there between March and August. Our project uses a model cliff, not the RSPB\'s counts.' },
      { q: 'Is there a classroom in Hull or Beverley?', a: 'We have no classroom anywhere; lessons are live on video, so a Hornsea learner and a Goole learner can share one class.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Scratch for young children, typed Python from about ten, data and maths for teenagers, and statistics or data for adults. The free lesson decides the level.' },
      { q: 'Do you teach statistics?', a: 'Yes. Teenagers meet sampling and spread in the data science course, and adults can take a full statistics and probability course with real data.' },
      { q: 'How much are lessons?', a: 'Free for the first. After that, a group seat is USD 100 a month and a private teacher USD 150 a month, with no enrolment charge and no fixed period.' },
      { q: 'When are school holidays in the East Riding and Hull?', a: 'The two councils and academy trusts set their own dates. Lesson breaks are arranged around your school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'More UK pages',
    h2: 'Beyond the East Riding',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a> page covers the city, and other county pages include <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a> and <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'East Riding and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-hull', label: 'Hull' },
    { href: '/coding-classes-in-county-durham', label: 'County Durham' }
  ],

  personalityCss: `
.cg-root.cg-ery .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.2vw, 2.8rem); }
.cg-root.cg-ery .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-ery .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-ery .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ery .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.016em; }
.cg-root.cg-ery .cg-table caption { font-style: italic; font-weight: 600; letter-spacing: 0.006em; }
.cg-root.cg-ery .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ery .cg-table th { letter-spacing: 0.045em; text-transform: uppercase; }
.cg-root.cg-ery .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-ery .cg-callout { border-left-width: 6px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Riding of Yorkshire (ceremonial: East Riding of Yorkshire Council and Kingston upon Hull). ONS Census 2021 TS001 via Nomis: East Riding of Yorkshire 342,215; Kingston upon Hull 267,014; total 609,229 (our sum). ONS Census 2021 built-up areas (published; all 14 agree with our OA sums and lie in the county): Kingston upon Hull 270,810 (Hull and East Riding); Bridlington 34,845; Beverley 30,930; Goole 20,175; Willerby and Anlaby 19,260; Hessle 15,485; Cottingham 14,425; Brough 13,320; Driffield 13,215; Pocklington 10,120; Hornsea 8,790; Hedon 8,120; Market Weighton 7,460; Withernsea 5,765. RSPB Bempton Cliffs: "Bempton Cliffs, on the spectacular Yorkshire coast, is home to one of the UK\'s top wildlife spectacles. Around half a million seabirds gather here between March and August to raise a family on the towering chalk cliffs that overlook the North Sea."',
    localProject: 'Stratified sampling and Neyman allocation. Model cliff (ours, seed 20260926): 400 sections; 60 dense (normal mean 4,500, sd 900), 140 medium (1,100, 350), 200 sparse (120, 60), floored at 0; true total 447,916 (dense 272,297, medium 151,703, sparse 23,916). Surveys of 20 sections, 10,000 repeats: simple random mean 450,165 (+0.50 per cent), spread 136,088 (30.4 per cent), within 10 per cent 24.9 per cent; proportional 3/7/10 mean 448,149, spread 34,818 (7.8 per cent), within 10 per cent 80.4 per cent; weighted 12/6/2 spread 26,509 (5.9 per cent), 91.0 per cent; Neyman 9/9/2 (from N times sd: 8.7, 9.2, 2.1) mean 448,102, spread 24,597 (5.5 per cent), 93.4 per cent. Stratum sds 836, 380, 62. Page states the cliff is a model, not RSPB counts. AI angle: an assistant multiplies up a sample without questioning its design. Lesson family: stratified sampling and optimal allocation.',
    requiredMentions: [
      '609,229',
      'Around half a million seabirds',
      'between March and August',
      '447,916',
      '30.4 per cent',
      '5.5 per cent',
      '93.4 per cent',
      '24.9 per cent',
      'Willerby and Anlaby',
      'Market Weighton'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the East Riding of Yorkshire and Hull, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for East Riding towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'RSPB Bempton Cliffs: around half a million seabirds, March to August, chalk cliffs over the North Sea.', url: 'https://www.rspb.org.uk/days-out/reserves/bempton-cliffs' }
    ],
    rejectedClaims: [
      'Humber Bridge facts, including tower divergence from the Earth\'s curvature: the Humber Bridge Board site returned 403 on 26 September 2026, so that project was dropped.',
      'Holderness coastal erosion rates: the East Riding council pages tried returned 404; no rates are printed.',
      'How the RSPB actually counts seabirds at Bempton: not read at a primary source; the page\'s survey is explicitly a model.',
      'Journey times between East Riding towns: the page uses general wording only.',
      'East Riding and Hull school term dates: none read.',
      'Named schools: none is named.'
    ]
  }
};
