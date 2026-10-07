'use strict';
// Victoria (cg- state page, Australia cluster Phase 5; index for the Victorian city pages).
// Spine: rounding rules on published Census shares. ABS QuickStats Victoria (STE 2) prints each of the 18
// five-year age groups as a percentage to one decimal place. Measured by us on 7 October 2026 (Python decimal
// module, ROUND_HALF_UP and ROUND_HALF_EVEN): the Victoria 2021 column sums to 100.0, the Victoria 2016 column to
// 100.1 and the Australia 2021 column to 99.9. Rounded to whole percentages, Victoria 2021 has one exact tie
// (35-39 years, 7.5) and both rules give 8, total 100; Victoria 2016 has no ties, total 100; Australia 2021 has
// one tie (40-44 years, 6.5): half up gives 7 and a total of 99, half to even gives 6 and a total of 98.
// Python's built-in round() on these floats follows half to even and also totals 98. Lesson family: round half
// to even (banker's rounding) against round half up, and why rounded shares do not sum to 100; screened free
// site-wide on 7 October 2026 ("banker": 0 hits, "round half to even": 0 hits).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats Victoria: 6,503,491 people, median age 38
// (Australia 38), 1,718,771 families, 2,805,661 private dwellings, 2.5 people per household; bachelor degree
// level and above 1,557,447 (29.2 percent; 2016 24.3 percent; Australia 26.3 percent). Greater Melbourne GCCSA
// 4,917,750 people. vic.gov.au school term dates: 2026-2030 dates approved by the Minister on 28 June 2021, set
// in 5-year blocks under Regulation 13 of the Education and Training Reform Regulations 2017; 2027 Term 1
// Wednesday 27 January (students start Thursday 28 January in government schools) to Thursday 25 March, Term 2
// Monday 12 April to Friday 25 June, Term 3 Monday 12 July to Friday 17 September, Term 4 Monday 4 October to
// Friday 17 December. IANA tzdata 2026e, Australia/Melbourne rule AV: clocks forward on the first Sunday in
// October and back on the first Sunday in April since 2008. No admissions advice, rankings or school results.

const PLACES = [
  ['Melbourne', 'vibe-coding-and-ai-agents-classes-in-melbourne'], ['Geelong', 'online-coding-and-python-classes-in-geelong'],
  ['Ballarat', 'online-coding-and-python-classes-in-ballarat'], ['Bendigo', 'ai-and-programming-classes-in-bendigo'],
  ['Melton', 'ai-and-programming-classes-in-melton'], ['Shepparton', 'online-coding-and-python-classes-in-shepparton'],
  ['Mildura', 'ai-and-programming-classes-in-mildura'], ['Traralgon', 'ai-and-programming-classes-in-traralgon'],
  ['Warrnambool', 'vibe-coding-and-ai-agents-classes-in-warrnambool'], ['Warragul', 'online-coding-and-python-classes-in-warragul']
];
// Name each place; link only the ones whose Australian page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtPages('au').map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'state', tag: 'VICTORIA', label: 'Victoria', blurb: 'VCE, the Victorian terms and a project on why rounded Census shares refuse to add up to 100.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-victoria',
  code: 'vcst',
  accent: '#38489C',
  accentRationale: 'Victoria: a deep cornflower blue chosen by hand (HSV saturation 0.64, value 0.61), at least 12 RGB units from every accent in use and 6.6:1 against the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Victoria',
    eyebrow: 'Victoria, Australia',
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
  routeLabel: 'Victoria, Australia',
  title: 'Coding and AI Classes in Victoria | Prep to VCE, Live Online',
  description: 'Live online coding, Python, AI and maths classes for Victorian learners from Prep to VCE and adult, planned around Victorian terms. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Victoria, with a project on why the Census age shares for Australia add up to 99.9 and what rounding rule makes it worse.',
  twitterDescription: 'Victorian coding and AI classes, Prep to VCE and adult, live online, first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Victorian Learners',
    description: 'Level-matched online coding, Python, AI, data and mathematics for children, teenagers and adults across Victoria, planned around the Victorian school terms and the VCE.'
  },

  h1: 'Coding and AI classes in Victoria',
  capsuleQ: 'What makes a coding and AI class the best fit for a Victorian learner?',
  capsule: 'One that knows the Victorian calendar and the VCE, and teaches numbers properly as well as code. Victoria counted 6,503,491 residents at the 2021 Census. We teach learners aged 6 to 67 live online, from Prep-age Scratch to Python, data, AI and VCE computing technique, in a small level-matched group or one to one, and the opening lesson is free.',
  lead: 'Add up the eighteen age-group percentages the Bureau of Statistics publishes for Australia in 2021 and you do not get 100. You get 99.9. Victoria\'s own column for the same year happens to reach exactly 100.0, but its 2016 column comes to 100.1. Nobody has made a mistake: each share was rounded on its own, and rounding errors do not cancel neatly. Round those shares again to whole numbers and the choice of rule starts to matter, because the Australian figure for people in their early forties sits at exactly 6.5. Victorian learners write the code, test two rounding rules and find out why accountants, statisticians and Python itself disagree with what most of us were taught at school.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Victoria.',

  picks: {
    eyebrow: 'Course picks for Victoria',
    h2: 'Four starting points for a Victorian learner',
    intro: 'Chosen by age and by what the learner wants to make. Every route opens with a free class and no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Prep to Year 4', note: 'Scratch games and animations, with a scoreboard that has to decide what to do with a half point.' },
      { course: 'python-ai-kids-masterclass', band: 'Years 4 to 8', note: 'First Python with tables of numbers, percentages and charts, the easiest way to see a rule change an answer.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Years 9 to 12', note: 'Python for data: reading official tables, cleaning them and saying exactly how every figure was rounded.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Spreadsheets, dashboards and AI summaries for working Victorians who want numbers they can defend.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Victoria in the Census',
      h2: 'Six and a half million people and the highest share of graduates of any state',
      intro: 'Statewide 2021 figures as QuickStats published them, next to the national figures where the Bureau gives them.',
      body: [
        { kind: 'table', caption: 'Victoria in numbers: 2021 QuickStats, ABS', head: ['Measure', 'Victoria', 'Australia'], rows: [
          ['People', '6,503,491', 'Not compared'],
          ['Median age', '38', '38'],
          ['Families', '1,718,771', 'Not compared'],
          ['Private dwellings', '2,805,661', 'Not compared'],
          ['Average people per household', '2.5', 'Not compared'],
          ['People aged 15 and over with a bachelor degree or higher', '1,557,447, or 29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A five-point jump in graduates', p: 'At the 2016 Census, 24.3% of Victorians aged 15 and over held a bachelor degree or higher. By 2021 the figure was 29.2%, comfortably above the national 26.3%.' },
          { h3: 'The same median age as the nation', p: 'Half of all Victorians were younger than 38 in 2021, exactly the Australian median, while some other states sit several years older.' },
          { h3: 'Melbourne holds most of the state', p: 'Greater Melbourne accounted for 4,917,750 people in 2021, which is why the Melbourne page also acts as the starting point for its suburbs.' }
        ] },
        { kind: 'p', text: 'Every figure above is a total the Bureau publishes itself. Census counts are adjusted cell by cell to protect privacy, so on this page the parts of a table are never added up to stand in for a total.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'The Victorian year',
      h2: 'Four terms, set five years ahead, and the VCE at the end of school',
      intro: 'From the Victorian Government\'s school term page and our own VCE pages. We describe the system; we do not give enrolment or admissions advice.',
      body: [
        { kind: 'table', caption: '2027 Victorian school terms, as published by the Victorian Government', head: ['Term', 'First day', 'Last day'], rows: [
          ['Term 1', 'Wednesday 27 January (students in government schools start Thursday 28 January)', 'Thursday 25 March'],
          ['Term 2', 'Monday 12 April', 'Friday 25 June'],
          ['Term 3', 'Monday 12 July', 'Friday 17 September'],
          ['Term 4', 'Monday 4 October', 'Friday 17 December']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Dates fixed in blocks', p: 'Victoria approves school terms five years at a time. The Minister approved the dates for 2026 to 2030 on 28 June 2021, under Regulation 13 of the Education and Training Reform Regulations 2017.' },
          { h3: 'Prep first', p: 'The first year of school in Victoria is called Prep. Our youngest live lessons start at age 6, so most Victorian children join us in Year 1 or later.' },
          { h3: 'The VCE', p: 'Victorian students finish school with the VCE, set by the VCAA. Our separate pages cover <a class="cg-inline-link" href="/vce-algorithmics-hess-help">VCE Algorithmics</a>, <a class="cg-inline-link" href="/vce-applied-computing-software-development-help">Software Development</a> and <a class="cg-inline-link" href="/vce-maths-methods-tutoring">Mathematical Methods</a>.' }
        ] },
        { kind: 'spec', title: 'Two Term 1 starts', p: 'The 2027 calendar lists Wednesday 27 January as the first day of Term 1, but students at government schools begin a day later, on Thursday 28 January. Any program that counts school days in Victoria has to know which of the two it means.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why do published percentages add up to 99.9?',
      intro: 'The 18 age-group shares from the 2021 and 2016 QuickStats, added and then rounded again under two rules. Our calculation, done with exact decimal arithmetic.',
      body: [
        { kind: 'table', caption: 'Adding the published age-group percentages (our calculation, 7 October 2026)', head: ['Column', 'Sum as published', 'Exact ties at .5', 'Whole numbers, half up', 'Whole numbers, half to even'], rows: [
          ['Victoria, 2021', '100.0', 'One: 35 to 39 years at 7.5', '100', '100'],
          ['Victoria, 2016', '100.1', 'None', '100', '100'],
          ['Australia, 2021', '99.9', 'One: 40 to 44 years at 6.5', '99', '98']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Rounding once', p: 'The Bureau rounds every share to one decimal place on its own. Small errors in each of 18 rows can push the total a tenth away from 100 in either direction, which is exactly what the 2016 and Australian columns show.' },
          { h3: '2. Half up', p: 'The rule most of us learned says a 5 always goes up. Under it, the Australian 6.5 becomes 7, and the 18 whole numbers add up to 99.' },
          { h3: '3. Half to even', p: 'The rule used in banking and statistics sends an exact half to the nearest even number. The Victorian 7.5 still becomes 8, but the Australian 6.5 becomes 6 and the total drops to 98.' }
        ] },
        { kind: 'callout', h3: 'Python already has an opinion', p: 'Ask Python\'s built-in round() for round(6.5) and it answers 6; round(7.5) gives 8. It rounds half to even, and on these 18 Australian shares it also produces a total of 98. Learners who expected 7 discover why the documentation spends a paragraph on it, and why money code uses the decimal module and says which rule it applies.' },
        { kind: 'p', text: 'None of these sums is a figure anyone should publish: they exist only to show what rounding does. The real totals are the Bureau\'s own counts, shown in the Census table above.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Numbers in code',
      h2: 'Five rounding habits worth keeping for life',
      intro: 'Learned on Census shares, then used on marks, budgets, survey results and anything a dashboard shows as a percentage.',
      body: [
        { kind: 'table', caption: 'How to stop rounding from misleading a reader', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Round last', 'Keep full precision until the final display step', 'Errors that pile up through a calculation'],
          ['Name the rule', 'Write "half up" or "half to even" in the code and the report', 'Two systems quietly disagreeing'],
          ['Use exact decimals for money', 'Python decimal, not floating point, for anything priced', 'Cents that drift with binary fractions'],
          ['Expect 99.9 and 100.1', 'Add a note when rounded parts are shown with their total', 'Readers assuming a figure is wrong'],
          ['Never rebuild a total from parts', 'Quote the published total itself', 'Totals that differ from the official one']
        ] },
        { kind: 'p', text: 'The fourth habit is the one Victorians meet most often without noticing: a school newsletter, a sports club report or a council survey with percentages that refuse to make 100. Once learners have built it themselves, they stop distrusting the table and start reading its footnotes.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A Scratch quiz scoreboard that shares points between teams and has to decide who gets the leftover half.' },
          { h3: 'Teenagers', p: 'The QuickStats age table in Python, both rounding rules side by side, and a test that fails when the total is not checked.' },
          { h3: 'Adults', p: 'A spreadsheet and a short script that round the same figures two ways and print a note explaining the difference.' }
        ] }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Around the state',
      h2: 'Victorian places with pages of their own',
      intro: 'City pages are written one at a time, and only where there are enough checked local facts to say something true about the place.',
      body: [
        { kind: 'p', text: 'Victorian places covered or planned: ' + linked(PLACES) + '. Linked names already have a page with their own local data project; the rest are being prepared and are listed so families can see they are coming.' },
        { kind: 'spec', title: 'Clocks in Victoria', p: 'Victoria moves its clocks forward an hour on the first Sunday in October and back on the first Sunday in April, the rule recorded in the IANA time zone database for Australia/Melbourne. India does not change its clocks, so our teachers are four and a half hours behind Victoria in winter and five and a half behind while daylight saving runs.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sharing points fairly to numbers that survive scrutiny',
    intro: 'Year levels are a guide only. The free lesson shows where a learner should actually start.',
    cols: [
      { band: 'Prep to Year 2', h3: 'Counting and sharing', p: 'Programs that count, share and keep score, and the first time a half has to go somewhere.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 3 to 6', h3: 'Tables and charts', p: 'Collecting small data sets, turning them into charts and checking that the percentages make sense.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 7 to 12', h3: 'Real data, honest rounding', p: 'Official tables in Python, precision, rounding rules and the habits VCE computing and maths reward.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Figures at work', p: 'Reports, budgets and dashboards where the rounding rule is written down and the totals are checked.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can summarise a table in seconds. Why should a Victorian student still check its arithmetic?',
    intro: 'Because a summary that says the shares "add up to 100" may be describing what it expected, not what the table says.',
    p1: 'Give an assistant the Australian age table and ask for the total and it may reply with a confident 100, because that is what percentages are supposed to do. Ask it to round the figures and it may use half up in one sentence and half to even in the code it writes, without saying so. Nothing crashes. The report simply carries a quiet inconsistency into a meeting, a newsletter or an assignment.',
    p2: 'A student who has added the published shares and watched 99.9 appear knows the questions to ask: which rounding rule, rounded at which step, and is this a published total or one rebuilt from parts? Those questions carry over to every generated answer that contains a number, and they are exactly the questions VCE data and computing studies expect students to ask of their own work.',
    closer: 'So the case for a Victorian student learning to code in 2026 is not about typing faster than an AI tool. It is about being the one who notices that the numbers do not add up, and knowing why.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Mildura to Mallacoota on the same video link',
    intro: 'Victoria is compact by Australian standards, but a weekly drive to a class is still a long one for most families outside Melbourne. A live lesson online removes the drive entirely.',
    cells: [
      { h3: 'Two Term 1 dates handled', p: 'Government school students start Term 1 a day after the official first day. Lessons are planned around the date the learner actually returns.' },
      { h3: 'Victorian words, Victorian years', p: 'Teachers say Prep, Year 9 and VCE, the same terms a Victorian classroom uses. All lessons are taught in English.' },
      { h3: 'A real lesson first', p: 'The free class is a complete lesson with something to finish, followed by a suggested level, course and weekly time. No card is requested.' },
      { h3: 'Groups by level', p: 'Each group has five to ten learners working at much the same standard, drawn from across Victoria, other states and overseas, so most levels have a workable hour.' },
      { h3: 'Two sessions a week', p: 'Roughly eight lessons a month at a fixed time, with breaks for school holidays and exam weeks agreed in advance.' },
      { h3: 'India time on our side', p: 'Our teachers work on India time all year, so a Victorian after-school slot falls in the middle of their working day.' }
    ],
    spec: { title: 'Planning around the VCE', p: 'Senior students often want lessons to ease off during exam periods. Tell the teacher which VCE studies the learner is taking and the weekly plan is set around them from the start.' }
  },

  fees: {
    h2: 'What classes cost in Victoria',
    intro: 'One price list for the whole state.',
    first: 'One complete lesson at no charge, finishing with a recommended level, course and weekly time.',
    group: 'A month of teaching, usually eight lessons, with five to ten learners at a similar level.',
    private: 'The same monthly pattern of about eight lessons, with one teacher and one learner.',
    closer: 'Families outside India are billed in US dollars at a single rate, so a family in Geelong and one in Wodonga see the same invoice. Nothing is charged until the trial has settled a course and a weekly slot; holidays, missed lessons and switching between group and private teaching are explained on the pricing page.'
  },

  reviewsH2: 'What our families say on Google, unedited',

  book: {
    h2: 'Tell us the learner\'s year level',
    intro: 'The first task suits the learner: a Scratch scoreboard for a young child, a first Python percentage table for the middle years, or the rounding puzzle for a senior student.',
    success: 'Thank you. The team will contact you shortly about a class in Victoria.'
  },

  faq: {
    h2: 'Victorian coding class questions',
    intro: 'What Victorian families ask us first.',
    items: [
      { q: 'How many people live in Victoria?', a: 'The 2021 Census counted 6,503,491 people in Victoria, with a median age of 38, the same as the national median.' },
      { q: 'What is round half to even?', a: 'Round half to even, sometimes called banker\'s rounding, is a rule that sends a value exactly halfway between two whole numbers to the even one, so 6.5 becomes 6 and 7.5 becomes 8. It avoids the upward drift that always rounding halves up creates over many values.' },
      { q: 'What is the Victorian rounding project?', a: 'Learners add the 18 published age-group percentages from the 2021 and 2016 Census, find totals of 100.0, 100.1 and 99.9, then round to whole numbers under two rules. For Australia in 2021, half up gives a total of 99 and half to even gives 98.' },
      { q: 'When are the 2027 Victorian school terms?', a: 'Term 1 runs from Wednesday 27 January to Thursday 25 March, with government school students starting on Thursday 28 January. Term 2 is Monday 12 April to Friday 25 June, Term 3 Monday 12 July to Friday 17 September and Term 4 Monday 4 October to Friday 17 December.' },
      { q: 'Do you help with VCE computing and maths?', a: 'Yes, as teaching of technique and understanding. We have separate pages for VCE Algorithmics, Applied Computing and the maths studies. School-assessed coursework is the student\'s own work under VCAA rules, and we never write it.' },
      { q: 'Do you prepare students for the Victorian selective entry exam?', a: 'We teach the maths and reasoning skills the exam draws on as part of ordinary lessons, and our selective entry maths page explains the format. We give no admissions advice and make no claims about offers.' },
      { q: 'What time are lessons for Victorian learners?', a: 'Weekday afternoons, evenings or weekends, agreed during the trial and always written in Victorian time. India is four and a half hours behind Victoria in winter and five and a half behind during daylight saving.' },
      { q: 'Do you have a centre in Victoria?', a: 'No, and we do not claim one. Every lesson is live online, with no premises anywhere in Australia. A learner needs a laptop or desktop, sound and a steady connection, and the phone number we show is in India.', boiler: true },
      { q: 'What do coding classes cost in Victoria?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. The course, format and time are agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched by level, pace and what they want to build rather than by age or postcode. When no group suits the learner at a workable hour, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Victorian and Australian learners',
    html: 'For Melbourne itself, with a project on testing an AI agent\'s nearest-tram-stop answers, read <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding and AI agents in Melbourne</a>. Senior students can start with <a class="cg-inline-link" href="/vce-algorithmics-hess-help">VCE Algorithmics help</a> or <a class="cg-inline-link" href="/vce-specialist-maths-tutoring">VCE Specialist Maths</a>, and younger learners with <a class="cg-inline-link" href="/victorian-selective-entry-exam-maths-practice">selective entry maths practice</a>. The national overview is on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Victoria and Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/vce-maths-methods-tutoring', label: 'VCE Methods' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-vcst .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-vcst .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.1; }
.cg-root.cg-vcst .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-vcst .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-vcst .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-vcst .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2rem); }
.cg-root.cg-vcst .cg-table caption { font-weight: 600; }
.cg-root.cg-vcst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vcst .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-vcst .cg-spec { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Victoria, ABS Census 2021 QuickStats, state 2 (read 7 October 2026): 6,503,491 people; median age 38 (Australia 38); 1,718,771 families; 2,805,661 private dwellings; average 2.5 people per household; level of highest educational attainment, people aged 15 and over, bachelor degree level and above 1,557,447 (29.2 percent; Victoria 2016 1,177,540, 24.3 percent; Australia 2021 26.3 percent). Age table, percent columns Victoria 2021, Victoria 2016 and Australia 2021 for 0-4 to 85 and over. Greater Melbourne GCCSA 2GMEL: 4,917,750 people. Victorian Government school term dates page (vic.gov.au): term dates approved by the Minister in 5-year blocks under Regulation 13 of the Education and Training Reform Regulations 2017; the 2026-2030 dates were approved on 28 June 2021; 2027: Term 1 Wednesday 27 January (students start Thursday 28 January in government schools) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Monday 4 October to Friday 17 December. IANA tzdata 2026e, australasia file: Zone Australia/Melbourne uses rule AV; Rule AV 2008 to max: daylight saving from the first Sunday in October to the first Sunday in April. VCE and VCAA facts are linked to the dedicated VCE pages.',
    localProject: 'Rounding rules on the published QuickStats age-group percentages (calculated 7 October 2026 with Python decimal, ROUND_HALF_UP and ROUND_HALF_EVEN). Sums of the 18 published one-decimal shares: Victoria 2021 100.0, Victoria 2016 100.1, Australia 2021 99.9. Exact .5 ties: Victoria 2021 one (35-39, 7.5), Victoria 2016 none, Australia 2021 one (40-44, 6.5). Whole-number totals: Victoria 2021 100 under both rules (7.5 to 8 either way); Victoria 2016 100 under both; Australia 2021 99 half up, 98 half to even. Python round() on floats follows half to even (round(6.5) = 6, round(7.5) = 8) and totals 98 on the Australian column. Lesson family: round half to even (banker\'s rounding) versus round half up, double rounding, and why rounded shares do not sum to 100; distinct from apportionment, significant-figure and floating-point error pages.',
    requiredMentions: [
      '6,503,491',
      '1,718,771',
      '2,805,661',
      '1,557,447',
      '28 June 2021',
      'Thursday 25 March',
      'Friday 17 September',
      'Monday 4 October',
      'round(6.5)'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Victoria: people, median age, families, private dwellings, household size, highest educational attainment and the age table.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2' },
      { claim: 'ABS Census 2021 QuickStats, Greater Melbourne: people.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2GMEL' },
      { claim: 'Victorian Government, school term dates and holidays: 2027 terms, 5-year blocks, approval of the 2026-2030 dates on 28 June 2021.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database 2026e, australasia file: Australia/Melbourne and rule AV.', url: 'https://data.iana.org/time-zones/tzdb/australasia' },
      { claim: 'Python documentation, built-in round(): values halfway between two multiples are rounded toward the even choice.', url: 'https://docs.python.org/3/library/functions.html#round' }
    ],
    rejectedClaims: [
      'VCE study scores, ATAR outcomes, school results and rankings: excluded by the cluster rules.',
      'Selective entry offers, cut-offs or school choice advice: admissions-adjacent and excluded.',
      'A Victorian total rebuilt by adding age-group counts: Census cells are adjusted for privacy, so only the published total is used.',
      'Income, rent, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Daylight saving dates from a Victorian government page: the vic.gov.au daylight saving URL returned 404, so the rule is quoted from the IANA database instead.',
      'Any affiliation with the VCAA, the Victorian Department of Education or the ABS.'
    ]
  }
};
