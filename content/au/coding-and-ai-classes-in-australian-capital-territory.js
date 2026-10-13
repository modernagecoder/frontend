'use strict';
// Australian Capital Territory (cg- territory page, Australia cluster Phase 5; index for the ACT pages).
// Spine: ranking suburbs fairly when some have very few playgrounds. Data: ACT Government open data, "ACTGOV
// Playground Assets" (dataset e4ug-7r3x on data.act.gov.au), read through the portal's JSON endpoint on 7 October
// 2026: 537 playground records across 108 suburbs and districts, each with a shade_level field (FAIR 292, GOOD
// 131, NO SHADE 44, POOR 37, MODERATE 7, blank 23, and 3 records with other wording). Calculated by us on
// 7 October 2026 over the 511 records rated GOOD, FAIR, MODERATE, POOR or NO SHADE: 131 of 511 rated GOOD
// (25.6 percent). Ranked by raw share of GOOD shade, 9 suburbs score 100 percent, 6 of them on a single playground,
// and 36 score 0 percent. Bayesian average (add m imaginary playgrounds at the territory share): with m = 5 the top
// two are Fadden and Forde, each 4 GOOD of 5 (0.528), then Giralang 4 of 6 (0.480); with m = 2, 10 and 20 Fadden
// and Forde stay first. Kambah has the most rated playgrounds, 37, with 6 GOOD (16.2 percent). Lesson family:
// Bayesian average / additive smoothing for ranking small samples; screened free site-wide on 7 October 2026
// ("bayesian average" 0 hits, "additive smoothing" 0 hits). Place facts read raw 7 October 2026: ABS Census 2021
// QuickStats Australian Capital Territory (STE 8): 454,499 people, median age 35, 119,752 families, 186,963 private
// dwellings, 2.5 per household; bachelor degree and above 159,540 (42.9 percent; 2016 37.1 percent; Australia
// 26.3), the highest share of any state or territory in the eight QuickStats state pages read. IANA tzdata
// 2026e backward file: Australia/Canberra is a link to Australia/Sydney (rule AN). The ACT Education Directorate
// and BSSS sites returned 403 and were not circumvented: no ACT term dates or senior course details are quoted.

const PLACES = [
  ['Canberra', 'vibe-coding-and-ai-agents-classes-in-canberra'], ['Canberra, for children', 'coding-classes-for-kids-canberra']
];
// Name each place; link only the ones whose Australian page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtPages('au').map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'state', tag: 'AUSTRALIAN CAPITAL TERRITORY', label: 'Australian Capital Territory', blurb: 'The ACT in the Census, its clocks, and a project on ranking suburbs fairly when some have only one playground.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-australian-capital-territory',
  code: 'acst',
  accent: '#281474',
  accentRationale: 'Australian Capital Territory: a deep night indigo picked by hand (HSV saturation 0.83, value 0.45, hue 252), at least 12 RGB units from every accent in use and 11.8:1 against the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'the Australian Capital Territory',
    eyebrow: 'Australian Capital Territory',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Australian Capital Territory',
  title: 'Coding and AI Classes in the ACT | Kids, Teens and Adults',
  description: 'Live online coding, Python, AI and data lessons for learners across the Australian Capital Territory, from age 6 to adult, with a first lesson that is free.',
  ogDescription: 'Coding and AI classes for the ACT, with a project on why a suburb with one shady playground should not top a ranking of the best-shaded suburbs.',
  twitterDescription: 'ACT coding and AI lessons for kids, teens and adults, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for ACT Learners',
    description: 'Level-matched online coding, Python, AI, data and mathematics for children, teenagers and adults across the Australian Capital Territory.'
  },

  h1: 'Coding and AI classes in the ACT',
  capsuleQ: 'What makes the best coding and AI class for a learner in the ACT?',
  capsule: 'Teaching that takes real public data seriously, in a territory where more adults hold degrees than anywhere else in Australia. The ACT counted 454,499 people at the 2021 Census. We teach learners from age 6 to 67 live online, from first Scratch projects to Python, data science and AI, privately or in a small level-matched group, with a free opening lesson.',
  lead: 'The ACT Government publishes a record for every public playground it manages, including a shade rating. Rank Canberra\'s suburbs by the share of playgrounds rated GOOD for shade and the top of the list fills with places that scored 100 percent from a single playground, while Kambah, with 37 rated playgrounds, sits far down. Is one shady playground really better evidence than thirty-seven? Our project says no, and shows learners the fix statisticians use: pretend every suburb has a few extra, average playgrounds before you divide. Two suburbs with four GOOD playgrounds out of five rise to the top, and stay there whichever reasonable number of pretend playgrounds you choose.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in the ACT.',

  picks: {
    eyebrow: 'Course picks for the ACT',
    h2: 'Four starting routes for ACT learners',
    intro: 'Matched to age and goals, and each opens with a free lesson that asks for no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 9', note: 'Scratch projects that collect simple scores, like counting sunny and shady spots in a game park.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'First Python with lists and percentages, and the surprise that small samples give extreme answers.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Python for real open data: loading a government dataset, cleaning it and ranking it fairly.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Analysis skills for working Canberrans: dashboards, rankings and reports that survive questions.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The ACT in the Census',
      h2: 'A young territory with the highest share of graduates',
      intro: 'The ACT as the 2021 count recorded it, set against Australia wherever a national value exists.',
      body: [
        { kind: 'table', caption: 'The ACT in numbers: 2021 QuickStats, ABS', head: ['Measure', 'ACT', 'Australia'], rows: [
          ['People', '454,499', 'n/a'],
          ['Median age', '35', '38'],
          ['Families', '119,752', 'n/a'],
          ['Private dwellings', '186,963', 'n/a'],
          ['Average people per household', '2.5', 'n/a'],
          ['Residents 15 or older holding a bachelor degree or above', '159,540, or 42.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More than four in ten', p: 'In 2021, 42.9% of ACT residents aged 15 and over held a bachelor degree or higher, up from 37.1% in 2016 and well above the national 26.3%.' },
          { h3: 'Younger than the nation', p: 'The ACT\'s median age was 35 in 2021, three years below the national 38, so families with school-age children are a large part of the territory.' },
          { h3: 'Highest of the eight', p: 'Of the eight state and territory QuickStats pages we read, the ACT had the highest share of graduates, which shapes what many ACT parents expect from a class.' }
        ] },
        { kind: 'p', text: 'Each figure is a total the Bureau publishes. Census cells are individually adjusted for privacy, so we never add up the rows of a table to produce a total of our own.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'School in the ACT',
      h2: 'What we can and cannot say about ACT schools',
      intro: 'Everything on this page was read at its origin, and two ACT education websites declined our automated requests, so their details are missing.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term dates', p: 'The ACT Education Directorate\'s term dates page returned an access error to our automated check on 7 October 2026. We do not work around blocks, so no ACT term dates appear here; families tell the teacher their dates instead.' },
          { h3: 'Senior secondary', p: 'Senior courses in the ACT are accredited by the Board of Senior Secondary Studies, whose site also refused automated reading. We teach the skills senior students need without describing course details we could not check.' },
          { h3: 'National curriculum', p: 'Our pages on the <a class="cg-inline-link" href="/australian-curriculum-digital-technologies-help">Australian Curriculum: Digital Technologies</a> and <a class="cg-inline-link" href="/australian-curriculum-maths-year-7-to-10-help">Years 7 to 10 maths</a> cover the curriculum that applies across Australia.' }
        ] },
        { kind: 'spec', title: 'NAPLAN and competitions', p: 'ACT students sit NAPLAN like the rest of Australia; see <a class="cg-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>. For contests and olympiads, the <a class="cg-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what runs and when.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which ACT suburbs really have the shadiest playgrounds?',
      intro: 'The ACT Government\'s open dataset ACTGOV Playground Assets, ranked two ways. Our calculation, 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Ranking suburbs by playgrounds rated GOOD for shade (our calculation)', head: ['Suburb', 'GOOD of rated playgrounds', 'Raw share', 'Bayesian average, 5 imaginary playgrounds'], rows: [
          ['Fadden', '4 of 5', '80.0%', '0.528'],
          ['Forde', '4 of 5', '80.0%', '0.528'],
          ['Giralang', '4 of 6', '66.7%', '0.480'],
          ['Oaks Estate', '2 of 2', '100%', '0.469'],
          ['City', '1 of 1', '100%', '0.380'],
          ['Kambah', '6 of 37', '16.2%', '0.173']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Rank the obvious way', p: 'Divide GOOD by rated playgrounds in each suburb. Nine suburbs score a perfect 100%, and six of those have just one playground. Thirty-six suburbs score zero. The extremes are mostly small samples.' },
          { h3: '2. Add a little evidence', p: 'Across the territory, 131 of 511 rated playgrounds are GOOD, about 25.6%. A Bayesian average adds five imaginary playgrounds at that rate to every suburb before dividing, which pulls tiny samples toward the middle.' },
          { h3: '3. Check it is stable', p: 'With 5 imaginary playgrounds, Fadden and Forde lead. With 2, 10 or 20 they still lead. A ranking that survives a change of assumption deserves more trust than one that does not.' }
        ] },
        { kind: 'callout', h3: 'The same trick runs half the internet', p: 'Product ratings, film scores and app store charts all face the same problem: a single five-star review should not beat four hundred four-and-a-half-star ones. Learners who build it on ACT playground data recognise it the next time a top ten list looks suspicious.' },
        { kind: 'p', text: 'Shade ratings come from the ACT Government\'s asset records, which may not reflect every tree or structure today. The rankings, shares and averages are our calculations. Records with a blank or unusual shade entry were left out, which is why 511 of 537 records are used.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Ranking in code',
      h2: 'Five habits for any program that produces a league table',
      intro: 'Learned on playgrounds, then used on school surveys, sales reports, review scores and any list with a winner.',
      body: [
        { kind: 'table', caption: 'How to rank without fooling anyone', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Show the sample size', 'Print 4 of 5, not just 80%', 'Readers trusting a ranking built on one item'],
          ['Smooth small samples', 'Add imaginary items at the overall rate', 'Tiny groups dominating the top and bottom'],
          ['Test other assumptions', 'Re-rank with different smoothing strengths', 'A winner that only exists under one choice'],
          ['Say what was excluded', 'Count and report records left out', 'Hidden gaps in the data'],
          ['Describe the data honestly', 'Note when records may be out of date', 'Treating an asset register as a site survey']
        ] },
        { kind: 'p', text: 'The first habit fixes more than it seems. A table that shows "1 of 1" beside "100%" lets every reader judge the evidence for themselves, even before any smoothing is applied.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A Scratch survey game where teams collect scores and the leaderboard has to cope with a team that played once.' },
          { h3: 'Teenagers', p: 'The ACT playground data in Python: loading it, ranking it raw and smoothed, and testing the result for stability.' },
          { h3: 'Adults', p: 'A reusable ranking function that reports sample sizes and lets the reader change the smoothing strength.' }
        ] }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Across the territory',
      h2: 'ACT pages of their own',
      intro: 'Pages are added for places only where enough checked facts exist to write something true.',
      body: [
        { kind: 'p', text: 'ACT pages covered or planned: ' + linked(PLACES) + '. Linked names already carry their own local project; any unlinked name is still in preparation.' },
        { kind: 'spec', title: 'Clocks in the ACT', p: 'In the IANA time zone database, Australia/Canberra is simply a link to Australia/Sydney, so the ACT changes its clocks with New South Wales. Our teachers keep India time, four and a half hours behind the ACT in winter and five and a half behind during daylight saving.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting scores to rankings that stand up',
    intro: 'Age bands are a guide only. The free lesson decides where a learner should start.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Counting and comparing', p: 'Keeping score, comparing two numbers and the first bar charts in code.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 9 to 12', h3: 'Percentages and lists', p: 'Collecting small data sets, turning counts into percentages and noticing when a sample is tiny.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Real open data', p: 'Government datasets in Python, cleaning, ranking and the statistics that make a ranking fair.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Analysis at work', p: 'Reports and dashboards that show their evidence and hold up when someone asks how they were made.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will rank anything you give it. Why should an ACT student learn to question the ranking?',
    intro: 'Because a list sorted by raw percentages can crown a winner on the strength of a single data point.',
    p1: 'Hand an assistant the playground records and ask which suburbs have the most shade and it may sort by raw share and present the result as a confident top five, led by suburbs with one playground each. Ask it to write the ranking code and it may do the same, with no column for sample size. The answer looks precise. It is precise about the wrong thing.',
    p2: 'A student who has smoothed the ACT data and tested the ranking under several assumptions knows what to ask of any generated league table: how many items sit behind each score, what happens to the order if the method changes, and what was left out. Those questions apply to every ranking a model produces, from product recommendations to search results.',
    closer: 'So the reason for an ACT student to learn to code in 2026 is not to compete with an AI tool. It is to know when its ranking can be trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Belconnen, Tuggeranong or Gungahlin, the same online class',
    intro: 'Canberra is spread across separate town centres. An online lesson means nobody crosses the territory at peak hour.',
    cells: [
      { h3: 'Same clocks as Sydney', p: 'The ACT follows New South Wales on daylight saving, so lesson times are written in ACT time and shift with it automatically.' },
      { h3: 'Data-literate families', p: 'With so many ACT adults holding degrees, parents often want to see the evidence behind a project. Our pages and lessons show it.' },
      { h3: 'A real first lesson', p: 'The free lesson is complete, with finished work and a recommendation for level, course and time afterwards. No card is requested.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners at a similar standard, from the ACT, other states and abroad, so most levels have a good time slot.' },
      { h3: 'Twice a week', p: 'Around eight lessons a month at a regular hour, with holidays and exam periods paused by agreement.' },
      { h3: 'India time on our side', p: 'Our teachers work on India time, so ACT after-school lessons fall during their working day.' }
    ],
    spec: { title: 'Adults and public servants', p: 'Many ACT adults want data and automation skills for work. Adult learners study in adult groups or one to one, at times that suit a working day.' }
  },

  fees: {
    h2: 'What lessons cost in the ACT',
    intro: 'One price list for the whole territory.',
    first: 'A complete first lesson, free, finishing with a suggested level, course and weekly time.',
    group: 'A month of lessons, usually eight, in a group of fifteen to twenty learners at the same level.',
    private: 'The same pattern of roughly eight lessons a month, one teacher and one learner.',
    closer: 'Families outside India are billed in US dollars at a single rate, so a household in Gungahlin pays exactly what one in Tuggeranong does. Billing waits until course and lesson time are decided at the trial, and our pricing page sets out what happens with holiday breaks, missed classes and format changes.'
  },

  reviewsH2: 'Our families\' Google reviews, unedited',

  book: {
    h2: 'Tell us the learner\'s age',
    intro: 'The first task fits the learner: a Scratch scoring game for a young child, a first Python percentage project for the middle years, or the playground ranking puzzle for a teenager or adult.',
    success: 'Thank you. The team will contact you soon about a class in the ACT.'
  },

  faq: {
    h2: 'ACT coding class questions',
    intro: 'Questions ACT families most often send us.',
    items: [
      { q: 'What is the population of the ACT?', a: 'The 2021 Census counted 454,499 people in the Australian Capital Territory, with a median age of 35, three years below the national median.' },
      { q: 'What is a Bayesian average?', a: 'A Bayesian average is a way of ranking items with very different amounts of evidence. Before averaging, it adds a few imaginary data points at the overall rate, which stops an item with one perfect score from outranking items with many good ones.' },
      { q: 'What is the ACT playground project?', a: 'Learners rank ACT suburbs by the share of playgrounds rated GOOD for shade in the ACT Government\'s asset records, first raw and then with a Bayesian average. Fadden and Forde, each 4 of 5, come first however the smoothing is set.' },
      { q: 'Why are ACT term dates missing from this page?', a: 'Our automated request to the Education Directorate\'s calendar was turned away, so we have no dates we checked ourselves to print. Share the school calendar at the trial and the lesson plan follows it.' },
      { q: 'Do you help senior students in the ACT?', a: 'Yes, by teaching the programming, data and maths skills senior courses rely on. Course details are set by the Board of Senior Secondary Studies, whose site we could not read automatically, and assessed work always remains the student\'s own.' },
      { q: 'What time are lessons for ACT learners?', a: 'Afternoons, evenings or weekends, agreed in the trial and written in ACT time. India runs four and a half hours behind the ACT in winter and five and a half behind during daylight saving.' },
      { q: 'Do adults join from the ACT?', a: 'Yes. Adults up to 67 learn with us, from complete beginners to professionals who want Python and data skills for their work.' },
      { q: 'Is there a Modern Age Coders office in the ACT?', a: 'No, and none is claimed. All teaching is live online with no premises in Australia; a learner needs a laptop or desktop, sound and a steady connection, and the number we show is in India.', boiler: true },
      { q: 'How much are coding lessons in the ACT?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How many learners are in each group?', a: 'Five to ten, grouped by level, pace and what they want to achieve rather than by age or suburb. If no group suits a learner\'s hours, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for ACT learners',
    html: 'Teenagers and adults interested in AI can read about <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">vibe coding and AI agents in Canberra</a> and <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learning to think, not just use AI tools</a>. Primary families can start with <a class="cg-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids</a>. All our Australian pages are gathered on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'The ACT and Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-acst .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 3.5vw, 2.9rem); }
.cg-root.cg-acst .cg-hero h1 { font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; }
.cg-root.cg-acst .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-acst .cg-eyebrow { letter-spacing: 0.2em; font-weight: 500; text-transform: uppercase; }
.cg-root.cg-acst .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-acst .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.95rem); }
.cg-root.cg-acst .cg-table caption { font-weight: 600; }
.cg-root.cg-acst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-acst .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-acst .cg-spec { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Australian Capital Territory, ABS Census 2021 QuickStats, state 8 (read 7 October 2026): 454,499 people; median age 35 (Australia 38); 119,752 families; 186,963 private dwellings; average 2.5 people per household; bachelor degree level and above 159,540 (42.9 percent; ACT 2016 119,919, 37.1 percent; Australia 2021 26.3 percent). Bachelor shares on the other state pages read the same day: NSW 27.8, Victoria 29.2, Queensland 21.9, SA 22.7, WA 23.8, Tasmania 21.9, NT 21.5. IANA tzdata 2026e backward file: Link Australia/Sydney Australia/Canberra; Australia/Sydney rule AN. The ACT Education Directorate term dates page and the Board of Senior Secondary Studies site (bsss.act.edu.au) returned HTTP 403 on 7 October 2026 and were not circumvented.',
    localProject: 'Bayesian average ranking on ACT Government open data, ACTGOV Playground Assets (data.act.gov.au dataset e4ug-7r3x), read via the JSON endpoint on 7 October 2026: 537 records, 108 suburbs and districts. shade_level counts: FAIR 292, GOOD 131, NO SHADE 44, POOR 37, MODERATE 7, blank 23, SURROUNDING TREES 2, SHADE STRUCTURE ADJACENT 1. Rated set (GOOD, FAIR, MODERATE, POOR, NO SHADE): 511 records, 131 GOOD, territory share 0.2564. Raw share ranking: 9 suburbs at 100 percent (6 with one rated playground), 36 at 0 percent; median 4 rated playgrounds per suburb, maximum Kambah 37 (6 GOOD). Bayesian average (g + m x 0.2564) / (n + m): m = 5 top Fadden 4/5 0.528, Forde 4/5 0.528, Giralang 4/6 0.480, Oaks Estate 2/2 0.469; City 1/1 0.380; Kambah 0.173; Fadden and Forde first at m = 2, 10 and 20. Lesson family: Bayesian average / additive smoothing for ranking small samples; distinct from Wilson interval and confidence interval pages.',
    requiredMentions: [
      '454,499',
      '159,540',
      'ACTGOV Playground Assets',
      '131 of 511',
      'Kambah',
      'Fadden',
      'Australia/Canberra',
      '0.528'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Australian Capital Territory: people, median age, families, private dwellings, household size, highest educational attainment.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/8' },
      { claim: 'ACT Government open data, ACTGOV Playground Assets dataset (e4ug-7r3x): playground records with suburb and shade level.', url: 'https://www.data.act.gov.au/d/e4ug-7r3x' },
      { claim: 'IANA time zone database 2026e, backward file: Australia/Canberra links to Australia/Sydney.', url: 'https://data.iana.org/time-zones/tzdb/backward' },
      { claim: 'IANA time zone database 2026e, australasia file: Australia/Sydney and rule AN.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'ACT school term dates: the ACT Education Directorate page returned 403 and was not circumvented.',
      'ACT senior secondary course details: the BSSS site returned 403 and was not circumvented.',
      'That shade ratings describe current conditions at every playground: they are asset-register entries and may be out of date.',
      'Any ranking of ACT schools, results or suburbs by income, rent or demographics: excluded by the cluster rules.',
      'Income, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the ACT Government, the Education Directorate, the BSSS or the ABS.'
    ]
  }
};
