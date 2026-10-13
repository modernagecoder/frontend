'use strict';
// Penrith, NSW (cg- regional city page, Australia cluster Phase 7, row 201). Shaped page (AI and programming). Slug
// suffixed -nsw because Penrith is also a UK town. Spine: can a program invent a believable population of Penrith
// residents from the Census age table alone, and how many does it need before the result settles? Data: ABS Census
// 2021 QuickStats, Penrith LGA (LGA16350), 18 five-year age bands (0-4 15,640 ... 85 and over 2,713; the bands add to
// 217,672 against a published total of 217,664 because of ABS perturbation). Our code (au/r8/pen_its.py): inverse
// transform sampling on the cumulative band counts with linear interpolation inside a band, top band capped at 100;
// 50 seeded runs per size: 100 people synthetic median 28.27 to 41.29; 1,000 32.88 to 37.56; 10,000 34.65 to 36.22;
// 200,000 35.24 to 35.56. Grouped median from the bands 35.42; published median 35. Top band cap 90, 100, 110: mean
// 36.83, 36.90, 36.96, median 35.45 each. Picking bands with equal probability (ignoring counts): median 45.05, mean
// 45.02. Band shares at 200,000 within 0.132 percentage points of the Census. Lesson family: inverse transform sampling, synthetic records from published age bands; screened free
// site-wide on 10 October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Penrith LGA (LGA16350), with New South Wales
// and Australia: 217,664 people; median age 35; 57,893 families; 81,152 private dwellings; 2.8 people per household;
// separate house 57,474 (78.3 percent; NSW 65.6; Australia 72.3); flat or apartment 6,712 (9.1; NSW 21.7; Australia
// 14.2); Professionals 17,321 (17.0; NSW 25.8; Australia 24.0); Technicians and Trades Workers 14,156 (13.9; NSW 11.9;
// Australia 12.9); Bachelor Degree level and above 29,651 (17.3; NSW 27.8; Australia 26.3); aged 15 to 19: 13,523
// (6.2; NSW 5.7); aged 20 to 24: 14,793 (6.8; NSW 6.1). ABS ERP Penrith LGA (16350) 30 June 2025: 231,701. NSW public
// schools master dataset (extracted 2 October 2026): 56 schools with LGA Penrith (39 primary, 12 secondary, 4 for
// specific purposes, 1 environmental education centre). NSW 2027 term dates. Excluded by the cluster rules: income,
// rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'PENRITH', label: 'Penrith', blurb: 'Penrith, NSW, where a program builds a synthetic population from the Census age table and learns how many people it takes to be believable.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-penrith-nsw',
  code: 'pnrt',
  accent: '#221C9E',
  accentRationale: 'Penrith, NSW: a deep river-at-dusk ultramarine (HSV saturation 0.82, value 0.62, hue 243), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 11.4:1 on white and 9.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Penrith',
    eyebrow: 'Penrith, western Sydney, New South Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Penrith, New South Wales',
  title: 'AI and Programming Classes in Penrith, NSW | Live Online',
  description: 'Live online AI and programming classes for Penrith teenagers and adults, with a project that builds a synthetic population from real ABS Census age bands.',
  ogDescription: 'AI and programming for Penrith learners: generate believable synthetic residents from the Census, then find out how many you need.',
  twitterDescription: 'Penrith AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Penrith Learners',
    description: 'Level-matched online Python, probability, simulation, synthetic data and machine learning for teenagers and adults in Penrith and western Sydney, taught live in English.'
  },

  h1: 'AI and programming classes in Penrith',
  capsuleQ: 'What are the best AI and programming classes in Penrith?',
  capsule: 'Classes where a Penrith teenager or adult writes programs that turn published statistics into data an AI system could learn from, and then checks that data against the source. Penrith counted 217,664 residents at the 2021 Census. Lessons run live online, one to one or in a small group of learners at the same level, and the first is free.',
  lead: 'The Census does not publish anyone\'s age, only how many Penrith residents fall in each five-year band, from 15,640 children under five to 2,713 people aged 85 and over. Yet AI developers often need individual records to test a system. A technique called inverse transform sampling turns that table into as many synthetic residents as you like, each with an age, so that the made-up crowd matches the real bands. Generate 100 and their median age might be anywhere from 28 to 41. Generate 200,000 and it settles between 35.24 and 35.56, beside the published median of 35. Our Penrith learners find out how synthetic data is made, and how much of it you need before it tells the truth.',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner in Penrith.',

  picks: {
    eyebrow: 'Course picks for Penrith',
    h2: 'Courses that lead to the Penrith project',
    intro: 'Each arrives at the synthetic population project below. Which one suits is decided in the free lesson, without any card details.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning from the ground up, including where training data comes from.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 16', note: 'Probability, random numbers and cumulative totals, explored by running simulations.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Python with real Census tables, sampling and honest comparison with the source.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'AI in full, with simulation, synthetic data and evaluation.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Penrith in the Census',
      h2: 'A western Sydney city of 217,664',
      intro: 'The 2021 Census for the City of Penrith council area, set against New South Wales and the nation.',
      body: [
        { kind: 'p', text: 'The count for Penrith was 217,664 residents, median age 35, in 57,893 families and 81,152 private dwellings, averaging 2.8 people per household.' },
        { kind: 'table', caption: 'Penrith shares beside NSW and Australia (2021 Census)', head: ['Share', 'Penrith', 'NSW', 'Australia'], rows: [
          ['Separate houses (57,474 dwellings)', '78.3%', '65.6%', '72.3%'],
          ['Flats or apartments (6,712 dwellings)', '9.1%', '21.7%', '14.2%'],
          ['Professionals (17,321 people)', '17.0%', '25.8%', '24.0%'],
          ['Bachelor degree or above (29,651 people)', '17.3%', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trades', p: 'Technicians and trades workers numbered 14,156, 13.9% of workers, against 11.9% across NSW.' },
          { h3: 'Teenagers', p: 'There were 13,523 residents aged 15 to 19 and 14,793 aged 20 to 24.' },
          { h3: 'Schools', p: 'The NSW public schools master dataset lists 56 schools in the Penrith council area, 39 of them primary and 12 secondary.' }
        ] },
        { kind: 'p', text: 'The ABS estimates 231,701 Penrith residents at 30 June 2025. The bureau adjusts Census cells by small random amounts for privacy; the project below shows exactly what that does to a table, and every figure here is printed as published.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can a program invent Penrith\'s residents from one Census table?',
      intro: 'The 18 five-year age bands for Penrith from the 2021 Census, turned into synthetic people with inverse transform sampling in Python, 50 times at each size.',
      body: [
        { kind: 'table', caption: 'Median age of synthetic Penrith populations, 50 runs per size (our code, 10 October 2026)', head: ['Synthetic residents per run', 'Lowest median', 'Highest median'], rows: [
          ['100', '28.27', '41.29'],
          ['1,000', '32.88', '37.56'],
          ['10,000', '34.65', '36.22'],
          ['200,000', '35.24', '35.56']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Stack the bands', p: 'Add the band counts one after another to get a running total. Each band now owns a stretch of the line between zero and the total, longer for bigger bands.' },
          { h3: '2. Throw a dart', p: 'Pick a random point on that line. The band whose stretch it lands in gives the person\'s age range, and where it lands inside the stretch gives an exact age.' },
          { h3: '3. Repeat and compare', p: 'Do it thousands of times and the synthetic crowd matches the real bands. Compare its median with the published 35 and the grouped median of 35.42 worked out from the bands.' }
        ] },
        { kind: 'callout', h3: 'Two ways to get it badly wrong', p: 'Pick bands with equal probability instead of in proportion to their counts and the synthetic median jumps to 45.05, ten years too old, because the small elderly bands get as many people as the large young ones. The other trap is the open top band, 85 and over, which has no upper limit: capping it at 90, 100 or 110 years moves the synthetic mean from 36.83 to 36.96 while leaving the median untouched at 35.45. Every assumption leaves a fingerprint somewhere.' },
        { kind: 'p', text: 'The 18 bands as published add to 217,672, eight more than the published total of 217,664, because the ABS perturbs each cell separately for privacy. Learners see why a published total must be quoted as published rather than rebuilt from its parts. The synthetic residents are fictional and carry only an age; all results are our own.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Synthetic data done properly',
      h2: 'Checks every synthetic dataset needs',
      intro: 'Learned on Penrith\'s age bands, then applied to test data for apps, training data for AI and any simulation built on published summaries.',
      body: [
        { kind: 'table', caption: 'Checks run on the Penrith synthetic population', head: ['Check', 'How', 'Result'], rows: [
          ['Weights respected', 'Compare band shares in the output with the Census', 'Within 0.13 points per band at 200,000; median 45.05 if weights are dropped'],
          ['Enough samples', 'Repeat 50 times at each size', 'Spread of medians shrinks from 13 years to a third of a year'],
          ['Open-ended bands', 'Try caps of 90, 100 and 110', 'Mean moves slightly; median does not'],
          ['Totals', 'Compare sum of bands with the published total', 'Off by 8, as perturbation predicts']
        ] },
        { kind: 'p', text: 'Synthetic data is only as good as the assumptions written into the generator. A learner who can name each assumption, test its effect and report it alongside the data is doing what responsible AI teams do before any model is trained.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Build the cumulative totals, write the sampling function and plot synthetic ages against the real bands.' },
          { h3: 'University students', p: 'Prove why inverse transform sampling works, then extend it to two variables with a published cross-table.' },
          { h3: 'Adults at work', p: 'Before using synthetic test data, check its distribution against the source it was built from.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no affiliation with the ABS, the NSW Department of Education or Penrith City Council. The statistics belong to them; the sampling and analysis are our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Penrith',
      h2: 'Sydney time and NSW school terms',
      intro: 'When Penrith learners can join a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Eastern time', p: 'Penrith keeps Sydney time, UTC plus 10, and UTC plus 11 during daylight saving from October to April.' },
          { h3: 'India time', p: 'India time runs four and a half hours behind Penrith in winter and five and a half hours behind in summer.' },
          { h3: 'Fixed in local time', p: 'When the clocks change, lessons stay at the same Penrith hour.' }
        ] },
        { kind: 'spec', title: 'Middle of the 2027 NSW school year', p: 'The NSW Department of Education gives Term 2 of 2027 as Tuesday 27 April to Friday 2 July and Term 3 as Monday 19 July to Friday 24 September, with the winter break between.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From random numbers to responsible synthetic data',
    intro: 'These ages are only a starting guide; the free lesson finds the right level.',
    cols: [
      { band: 'Ages 11 to 14', h3: 'Chance and simulation', p: 'Dice, coins and random numbers in code, then counting what happens.', courses: ['maths-through-coding', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Sampling from data', p: 'Cumulative totals, weighted choices and comparing samples with their source.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'University', h3: 'Generative methods', p: 'Inverse transform sampling, joint distributions and evaluating synthetic data.', courses: ['artificial-intelligence-complete-masterclass-college', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Test data at work', p: 'Generating realistic, privacy-safe test data and documenting how it was made.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant weight the bands correctly?',
    intro: 'Often, but not always, and the mistake is silent.',
    p1: 'Ask a chatbot to generate synthetic Penrith residents from the age table and it may write correct weighted sampling. It may also pick a band at random and then an age inside it, which looks identical in code review and produces a population ten years too old.',
    p2: 'Our Penrith learners let AI draft the generator, then test it: compare band shares, rerun at several sizes and try different caps on the oldest band. A generator that passes those checks can be trusted; one that has not been checked cannot.',
    closer: 'A Penrith learner who has seen a single missing weight age a whole synthetic city by a decade will check every dataset an AI hands them, in 2026 and beyond.',
    blogAnchor: 'what students should understand about AI before using it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Western Sydney learners, no commute',
    intro: 'An online lesson saves the trip into the city.',
    cells: [
      { h3: 'Set in Sydney time', p: 'Slots are agreed in Penrith time and hold steady through daylight saving.' },
      { h3: 'NSW stages and the HSC', p: 'Teachers plan around NSW stages, including HSC students, and teach in English.' },
      { h3: 'A real lesson to start', p: 'The free session is spent writing code beside a teacher. Afterwards we propose a course and a weekly slot, and at no point do we collect card or bank details.' },
      { h3: 'Fifteen to twenty learners', p: 'Each group shares one level, drawn from different places so every stage has a sensible hour.' },
      { h3: 'Twice a week', p: 'About eight lessons a month, with holidays and exams planned in advance.' },
      { h3: 'For working adults', p: 'Evening groups suit people who commute or work days, and private lessons fit around irregular hours.' }
    ],
    spec: { title: 'Penrith time on every message', p: 'Every lesson time is written in Sydney time, so nothing needs converting.' }
  },

  fees: {
    h2: 'Fees for AI and programming classes in Penrith',
    intro: 'The whole list.',
    first: 'A free lesson that ends with a suggested level, course and time.',
    group: 'Approximately eight group lessons a month, fifteen to twenty learners at one level.',
    private: 'Approximately eight one-to-one lessons a month with a single teacher.',
    closer: 'Penrith pays the US dollar rate charged everywhere in Australia, with no local adjustment. Payment begins only once the trial has settled a course and time, and holidays, missed lessons and format changes are all explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from families who learn with us',

  book: {
    h2: 'Tell us about the learner and we will build the trial around them',
    intro: 'We choose the first task in advance: a dice simulation for a Year 7 beginner, the weighted sampler for a Year 11 student, or the full synthetic population study for an adult.',
    success: 'Thank you. We will be in touch soon about an AI and programming class in Penrith.'
  },

  faq: {
    h2: 'Penrith AI and programming questions',
    intro: 'What Penrith parents and adult learners usually ask first.',
    items: [
      { q: 'How many people live in Penrith?', a: 'The 2021 Census counted 217,664 people in the City of Penrith council area. The ABS estimate at 30 June 2025 is 231,701.' },
      { q: 'What is inverse transform sampling?', a: 'Inverse transform sampling is a way to generate random values that follow a given distribution. You build the running total of the distribution, pick a uniform random number, and find where it falls on that running total. Values from larger groups come up more often, in the right proportion.' },
      { q: 'What is the Penrith synthetic population project?', a: 'Learners take the 18 published age bands for Penrith from the 2021 Census, write an inverse transform sampler in Python, generate synthetic residents at four sizes, and compare their medians and shares with the published figures.' },
      { q: 'Why is synthetic data useful for AI?', a: 'Synthetic data lets developers test and train systems without using real people\'s records. It is only useful if it matches the real distributions it was built from, which is why the checking matters as much as the generating.' },
      { q: 'Can HSC students join?', a: 'Yes. Senior students arrange the weekly sessions around HSC study, and any school assessment is completed by the student alone.' },
      { q: 'What times suit Penrith learners?', a: 'Late afternoons, evenings and weekend slots are available, fixed together at the trial and quoted in Sydney time. India time trails Penrith by four and a half hours in winter and five and a half in summer.' },
      { q: 'Are there classes for younger children?', a: 'Yes, from age 6 using visual coding, although the synthetic data project is designed for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Penrith?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do AI and programming classes in Penrith cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in New South Wales',
    h2: 'Pages near Penrith',
    html: 'Towards the coast is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">the Sydney coding classes page</a>, with <a class="cg-inline-link" href="/coding-classes-for-kids-sydney">coding classes for kids in Sydney</a> for primary-aged learners. Over the mountains there are <a class="cg-inline-link" href="/ai-and-programming-classes-in-bathurst">AI and programming classes in Bathurst</a>, and the state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Penrith and New South Wales',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/ai-and-programming-classes-in-bathurst', label: 'Bathurst' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-pnrt .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.2vw, 2.55rem); }
.cg-root.cg-pnrt .cg-hero h1 { font-weight: 725; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-pnrt .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-pnrt .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-pnrt .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.012em; }
.cg-root.cg-pnrt .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.85rem); }
.cg-root.cg-pnrt .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-pnrt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pnrt .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-pnrt .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Penrith LGA, ABS Census 2021 QuickStats, area code LGA16350, with New South Wales and Australia (read 10 October 2026): 217,664 people; median age 35; 57,893 families; 81,152 private dwellings; 2.8 people per household; separate house 57,474 (78.3 percent; NSW 65.6; Australia 72.3); flat or apartment 6,712 (9.1 percent; NSW 21.7; Australia 14.2); Professionals 17,321 (17.0 percent; NSW 25.8; Australia 24.0); Technicians and Trades Workers 14,156 (13.9 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 29,651 (17.3 percent; NSW 27.8; Australia 26.3); aged 15 to 19: 13,523 (6.2 percent; NSW 5.7); aged 20 to 24: 14,793 (6.8 percent; NSW 6.1). ABS ERP Penrith LGA (16350) 30 June 2025: 231,701. NSW public schools master dataset (extracted 2026-10-02): 56 schools with LGA Penrith (Primary 39, Secondary 12, Schools for Specific Purposes 4, Environmental Education Centre 1). NSW Department of Education 2027: Term 2 Tuesday 27 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September. IANA tz Australia/Sydney UTC+10, daylight saving UTC+11; Asia/Kolkata UTC+5:30.',
    localProject: 'Inverse transform sampling: synthetic records from published age bands. QuickStats Penrith LGA age bands: 0-4 15,640; 5-9 15,608; 10-14 14,869; 15-19 13,523; 20-24 14,793; 25-29 16,191; 30-34 16,790; 35-39 16,905; 40-44 14,869; 45-49 13,990; 50-54 12,864; 55-59 11,928; 60-64 11,407; 65-69 9,349; 70-74 8,067; 75-79 5,042; 80-84 3,124; 85 and over 2,713. Bands add to 217,672 against the published 217,664 (difference 8, ABS perturbation). Sampler: cumulative counts, bisect on u times total, linear interpolation within band, top band capped at 100. 50 seeded runs: n 100 median range 28.27 to 41.29 (median of medians 34.78); n 1,000 32.88 to 37.56; n 10,000 34.65 to 36.22; n 200,000 35.24 to 35.56 (35.40). Grouped median 35.42 (band 35-39); published median 35. Caps 90/100/110: mean 36.83/36.90/36.96, median 35.45. Unweighted band choice: median 45.05, mean 45.02.',
    requiredMentions: [
      '217,664',
      '57,893',
      '81,152',
      '231,701',
      '217,672',
      '45.05',
      '28.27',
      '35.42',
      'Western Sydney learners, no commute'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Penrith LGA (LGA16350): people, median age, age bands, families, dwellings, dwelling structure, occupation, education.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA16350' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Penrith LGA 16350, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.16350.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'NSW public schools master dataset (Data.NSW), schools by local government area and level.', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, future and past NSW term dates and school holidays (2027 dates).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-dates-and-school-holidays' }
    ],
    rejectedClaims: [
      'Any claim that the synthetic residents describe real people: they carry only a generated age and are fictional.',
      'Which NSW Term 1 division applies to Penrith schools: not stated on the department page for individual schools, so only Terms 2 and 3 are shown.',
      'Health, aged care or life expectancy figures related to the older age bands: excluded by the cluster rules.',
      'Population forecasts for Penrith: the synthetic data reproduces the 2021 bands and is not a projection.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the ABS, the NSW Department of Education or Penrith City Council.'
    ]
  }
};
