'use strict';
// Ashford (cg- town page, UK cluster Phase 8, towns band A, row 399). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when a result is "statistically significant",
// does that mean it matters? (significance versus effect size, and how sample size drives statistical power).
// Data (read 29 September 2026): Nomis Census 2021 TS017 household size (NM_2037_1), Ashford (E07000105) 53,582 households:
// 1 person 13,861; 2 18,895; 3 9,068; 4 7,794; 5 2,670; 6 886; 7 275; 8+ 133. England 23,436,090: 7,052,232; 7,978,497;
// 3,742,887; 3,024,796; 1,060,450; 358,795; 126,018; 92,415. Comparison group = England minus Ashford (derived, labelled).
// Shares Ashford vs rest: 1 person 25.87% vs 30.10%; 2 35.26 vs 34.04; 3 16.92 vs 15.97; 4 14.55 vs 12.90.
// Our run (scratchpad asf/chi.py): chi-square goodness of fit on five groups (1, 2, 3, 4, 5+) against the rest-of-England
// shares: statistic 498.1, 4 degrees of freedom, p 1.7e-106; Cohen's w 0.096; total variation distance 4.2 points.
// Random samples of Ashford households (2,000 samples each, without replacement, seed 2026), share flagged at p < 0.05 /
// median w: 100 households 10.8% / 0.207; 300 22.9% / 0.143; 1,000 68.6% / 0.111; 3,000 99.8% / 0.101; 10,000 100% / 0.098.
// Lesson family: statistical versus practical significance, effect size (Cohen's w), statistical power and sample size.
// Screened: "effect size", "statistical power", "Cohen" 0 hits; chi-squared is used on Newry (Fisher, small counts) and the
// cipher page (letter frequencies), so here it is only the tool, not the lesson.
// Place facts: Ashford (E07000105) TS001 132,747. ONS 2021 BUAs with 2,000+ residents in the borough (published): Ashford
// 82,140; Tenterden 7,775; Charing 2,170; Wye 2,060. postcodes.io (Ashford, Kent): Kennington, Willesborough, South
// Willesborough, Singleton, Stanhope, Bybrook, Beaver (suburban areas); Kingsnorth, Great Chart (villages).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ASHFORD', label: 'Ashford', blurb: 'Online coding and Python classes for Ashford in Kent, with a statistics project on why a tiny p-value can hide a small difference.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-ashford',
  code: 'asf',
  accent: '#6B103B',
  accentRationale: 'Ashford: a deep claret (9.6:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Ashford',
    eyebrow: 'Ashford, Kent, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'Maidstone', href: '/online-coding-and-python-classes-in-maidstone' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ashford, Kent',
  title: 'Online Coding and Python Classes in Ashford, Kent | AI, 6 to 67',
  description: 'Live online Python, coding, AI and vibe coding lessons for Ashford, Tenterden, Kennington and Willesborough learners aged 6 to 67. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Ashford in Kent, plus a Census project on why "statistically significant" does not always mean important.',
  twitterDescription: 'Ashford, Kent: online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Ashford, Kent',
    description: 'Online coding, Python, AI, vibe coding and statistics for children, teenagers and adults in Ashford and Tenterden, taught live with reasoning skills first.'
  },

  h1: 'Online coding and Python classes in Ashford, Kent',
  capsuleQ: 'Which are the best online coding and Python classes in Ashford, Kent?',
  capsule: 'Ashford borough counted 132,747 usual residents at the 2021 census. Its largest built-up area, Ashford itself, had 82,140, and Tenterden 7,775, per the ONS. Kennington, Willesborough, Singleton and Kingsnorth are among the places recorded around the town. Children from six and adults up to 67 across the borough join our India-based tutors on live video for Python, coding, AI, vibe coding and maths, taught solo or in a small class of five to ten learners of one level. We start with reasoning, so every learner can judge what a program or a chatbot hands back. Session one is free and finishes with a recommended course. The Ashford project runs a chi-square test in Python on Census household sizes and meets a p-value with 105 zeros after the decimal point, attached to a difference that turns out to be modest. Ongoing lessons cost USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'A p-value answers one narrow question: if there were really no difference, how surprising would data like ours be? It does not say how big the difference is, and with enough data even a trivial gap produces a p-value that looks spectacular. Ashford is a good place to see this for yourself. Census 2021 gives the size of all 53,582 households in the borough, and in Python a learner can test whether that mix differs from the rest of England, measure how large the difference really is, and then discover how the verdict changes when only a few hundred households are sampled.',
  wa: 'Hello Modern Age Coders, could we arrange a free Python or coding lesson for a learner in Ashford, Kent?',

  picks: {
    eyebrow: 'Ashford course picks',
    h2: 'Python, statistics and AI courses for Ashford',
    intro: 'Pick by age and what the learner enjoys. The first class on each course is live, free and needs no payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think course: fair tests, counting carefully and asking "how much?" as well as "is there?".' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Describe a Scratch game to an AI, then play it hard to find what it got wrong.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, among them the Ashford household-size test.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 and up', note: 'Probability, sampling and hypothesis tests, with effect sizes reported alongside every p-value.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ashford borough',
      h2: 'Ashford, Tenterden and the villages around them',
      intro: 'The borough\'s built-up areas of 2,000 people or more, with some of the places named around the town.',
      body: [
        { kind: 'table', caption: 'Built-up areas of at least 2,000 residents in Ashford borough, ONS figures from the 2021 census', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Ashford', '82,140'],
          ['Tenterden', '7,775'],
          ['Charing', '2,170'],
          ['Wye', '2,060']
        ] },
        { kind: 'p', text: 'Each figure is printed as the ONS publishes it; they are not added up, and the borough total of 132,747 comes from a separate census table. Postcodes.io lists Kennington, Willesborough, South Willesborough, Singleton, Stanhope, Bybrook and Beaver as suburban areas in the borough, and Kingsnorth and Great Chart as villages. Kent schools teach England\'s national curriculum; send us the term dates and no lesson will land in a holiday week.' },
        { kind: 'callout', h3: 'Kent, the South East and how we teach', p: 'Nearby options sit on <a class="cg-inline-link" href="/coding-classes-in-kent">coding classes in Kent</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. The reasoning-first idea is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ashford project',
      h2: 'Is Ashford different? A chi-square test, an effect size and a sampling experiment',
      intro: 'One Census table, one test in Python, and a lesson in the gap between "certain" and "large".',
      body: [
        { kind: 'p', text: 'The learner pulls Census 2021 table TS017, household size, from the Nomis API for Ashford and for England. Taking Ashford\'s counts away from England\'s leaves the rest of the country, a comparison group we built ourselves. Households with five or more people are merged into one group so that every group has plenty of cases.' },
        { kind: 'table', caption: 'Household size, share of households, Census 2021 TS017 via Nomis; the rest of England is England minus Ashford, our calculation', head: ['People in household', 'Ashford', 'Rest of England'], rows: [
          ['1', '25.87%', '30.10%'],
          ['2', '35.26%', '34.04%'],
          ['3', '16.92%', '15.97%'],
          ['4', '14.55%', '12.90%'],
          ['5 or more', '7.40%', '6.99%']
        ] },
        { kind: 'p', text: 'A chi-square goodness-of-fit test asks whether Ashford\'s 53,582 households could plausibly have been drawn from the rest of England\'s mix. The answer is a resounding no: the test statistic is 498 on four degrees of freedom, with a p-value of about 1.7 times ten to the power minus 106. Yet the table shows the gap is not dramatic. Ashford has fewer people living alone and a few more four-person homes. Two measures put a size on it. Cohen\'s w comes out at 0.096, just under 0.1, the value conventionally labelled a "small" effect. The total variation distance says only 4.2% of Ashford\'s households would have to change group for the two mixes to match exactly.' },
        { kind: 'table', caption: 'Random samples of Ashford households tested the same way, 2,000 samples at each size, our Python simulation', head: ['Households sampled', 'Samples flagged at p < 0.05', 'Typical Cohen\'s w'], rows: [
          ['100', '10.8%', '0.207'],
          ['300', '22.9%', '0.143'],
          ['1,000', '68.6%', '0.111'],
          ['3,000', '99.8%', '0.101'],
          ['10,000', '100%', '0.098']
        ] },
        { kind: 'p', text: 'This is statistical power in action. The real difference never changes, but with 100 households the test spots it in barely one sample in nine, and with 3,000 it almost never misses. Meanwhile the effect size settles close to 0.1 once samples reach about a thousand. The small samples show a second trap: random noise pushes their typical w upwards, so a small study can both miss a real effect and exaggerate the one it sees.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Flip two slightly unfair coins ten times, then a hundred, and see when the difference shows.' },
          { h3: 'Ages 11 to 15', p: 'Chart Ashford\'s household sizes against the rest of England in Python and describe the gap in words.' },
          { h3: 'Ages 15 and up', p: 'Run the chi-square test, compute Cohen\'s w and simulate how power grows with sample size.' }
        ] },
        { kind: 'callout', h3: 'Census counts, our statistics', p: 'Household counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The rest-of-England group, the tests and the simulation are our own; the published tables contain none of them.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Significance and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A confident p-value is the start of a question, not the end of one.',
      body: [
        { kind: 'table', caption: 'From the Ashford test to working with AI', head: ['In the household-size project', 'When an AI reports on data'], rows: [
          ['p was around 10 to the minus 106', 'Tiny p-values are easy with big data'],
          ['Cohen\'s w was only about 0.1', 'Ask how big, not only whether'],
          ['Small samples usually missed the gap', '"No difference found" can mean "too little data"'],
          ['Small samples inflated w', 'Early results tend to look stronger than they are'],
          ['Rest of England was our own sum', 'Know which numbers were published and which were made']
        ] },
        { kind: 'p', text: 'Give a chatbot a large table and ask whether two groups differ, and it will often return "highly significant" with a p-value and little else. In vibe coding the learner describes the analysis and an AI writes the code; our Ashford students then add the effect size and a plain-English sentence about how big the gap is before accepting the result. AI agents that run analyses for you inherit the same habit, so the checking has to be built in. Agent building starts once a learner is fluent in Python, typically in the later teens or as an adult, and Copilot Studio agents are available only as one-to-one lessons. The route is set out on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">building AI agents as a UK student</a>, and the reasoning on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no link with the Office for National Statistics, Nomis or postcodes.io. Only their open data was used, and the comparisons, the simulation and any slips in them belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From coin flips to hypothesis tests',
    intro: 'School year gives a rough guide; the free lesson settles where to begin.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair comparisons, counting and asking how sure we are.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and statistics', p: 'Real data, hypothesis tests and effect sizes alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Data work and agents', p: 'Python, careful statistics and AI agents, one step at a time.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and statistics',
    h2: 'What does statistically significant mean, and is it the same as important?',
    intro: 'Statistically significant means a result would be unlikely if there were truly no difference; it says nothing about whether the difference is large enough to matter.',
    p1: 'Ashford\'s household sizes differ from the rest of England with a p-value near 10 to the minus 106, yet the effect size, Cohen\'s w of about 0.1, is small, and a sample of 100 households detects it only about one time in nine.',
    p2: 'Students who have run that experiment ask two things of any AI summary: how big is the effect, and how much data stands behind it?',
    closer: 'Reading statistics with that care lets Ashford teenagers question AI-written reports instead of repeating them, one more reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Kennington to Tenterden, all online',
    intro: 'All you need is a computer and broadband good enough for a video call.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'Students write, prompt and run the code themselves; the tutor watches the shared screen and keeps asking for reasons.' },
      { h3: 'Pitched from the trial', p: 'What the free session reveals decides the first topic, and any exam board is recorded.' },
      { h3: 'Nothing to pay first', p: 'The trial lesson is free of charge and ends with our course suggestion.' },
      { h3: 'Level-matched groups', p: 'A group has five to ten learners from around the UK at the same stage.' },
      { h3: 'Two a week', p: 'Lessons stop for school holidays.' },
      { h3: 'Same time all year', p: 'Our tutors adjust for British Summer Time, so your slot does not move.' }
    ],
    spec: { title: 'Why online works here', p: 'Finding five learners at one level, free on one evening, within a short drive is rare. A video call removes the distance.' }
  },

  fees: {
    h2: 'Ashford fees',
    intro: 'Learners in Ashford are charged our international prices, the rates for everywhere outside India.',
    first: 'One whole lesson without charge, then a recommendation.',
    group: 'Around eight live lessons a month in a small group.',
    private: 'Around eight live one-to-one lessons a month.',
    closer: 'Invoices are in US dollars, not pounds, and the first one follows only after the trial has settled a course and a regular weekly slot. Holidays, missed lessons and switching format are all explained on the pricing page.'
  },

  reviewsH2: 'What Kent families and learners across Britain say on Google',

  book: {
    h2: 'Book a free Ashford lesson',
    intro: 'Share the learner\'s age or school year and something they enjoy. The trial could be a coin-flipping experiment, a Scratch game made with an AI, some first lines of Python, or charting real Census numbers.',
    success: 'Thanks. We have your Ashford request.'
  },

  faq: {
    h2: 'Ashford questions',
    intro: 'Significance, effect size, the Census project, Python, vibe coding and the practical side.',
    items: [
      { q: 'How many people live in Ashford, Kent?', a: 'The ONS counted 82,140 residents in the Ashford built-up area in 2021, and 132,747 in Ashford borough.' },
      { q: 'Are there online Python classes for Ashford learners?', a: 'Yes. Lessons run over live video for anyone from 6 to 67 in Ashford, Tenterden or the villages around them.' },
      { q: 'What is a chi-square test?', a: 'A test that compares counts in groups with the counts you would expect if nothing interesting were going on, and gives a p-value for how surprising the gap is.' },
      { q: 'What is effect size?', a: 'A number for how big a difference is, rather than how sure we are that it exists. For count data, Cohen\'s w is a common choice, with about 0.1 conventionally called small.' },
      { q: 'What does the Ashford project involve?', a: 'Testing Ashford\'s Census household sizes against the rest of England in Python, measuring the effect size, then sampling to see how often a small study would notice.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, for every age, with the learner in charge of the plan and of checking what the AI produces.' },
      { q: 'When can learners build AI agents?', a: 'After Python has become second nature, which for most means the late teens or later; Copilot Studio agents are taught privately only.' },
      { q: 'Can you help with GCSE and A level?', a: 'In computer science and maths, yes, with understanding as the aim; we never promise a grade.' },
      { q: 'What do lessons cost?', a: 'The opening lesson is free. After that it is USD 100 monthly in a group, or USD 150 monthly one-to-one.' },
      { q: 'Do lessons stop in the school holidays?', a: 'Yes; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Kent and South East pages',
    html: 'Other Kent and Sussex towns with their own projects: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a>, <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hastings">Hastings</a>. Every area we teach is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ashford and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-asf .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.4vw, 2.8rem); }
.cg-root.cg-asf .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-asf .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-asf .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-asf .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.018em; }
.cg-root.cg-asf .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-asf .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-asf .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-asf .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-asf .cg-callout { border-left-width: 4px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Ashford (E07000105), Census 2021 TS001 usual residents 132,747. ONS 2021 BUAs of 2,000+ in the borough (published): Ashford 82,140; Tenterden 7,775; Charing 2,170; Wye 2,060. postcodes.io (Ashford, Kent): Kennington, Willesborough, South Willesborough, Singleton, Stanhope, Bybrook, Beaver (suburban areas); Kingsnorth, Great Chart (villages).',
    localProject: 'Census 2021 TS017 (NM_2037_1): Ashford 53,582 households vs England minus Ashford. Shares 1 person 25.87 vs 30.10, 2 35.26 vs 34.04, 3 16.92 vs 15.97, 4 14.55 vs 12.90, 5+ 7.40 vs 6.99. Chi-square GOF 498.1, df 4, p 1.7e-106; Cohen w 0.096; TVD 4.2 points. Samples (2,000 each): 100 10.8% flagged, w 0.207; 300 22.9%, 0.143; 1,000 68.6%, 0.111; 3,000 99.8%, 0.101; 10,000 100%, 0.098. Lesson family: significance vs effect size, statistical power, sample size.',
    requiredMentions: [
      '132,747',
      '82,140',
      '7,775',
      '53,582',
      'Tenterden',
      'Kennington',
      'Willesborough',
      'Kingsnorth',
      'effect size',
      'statistical power'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017 household size and TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis API dataset NM_2037_1, Census 2021 TS017 household size.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2037_1.data.csv?geography=645923061,2092957699&measures=20100' },
      { claim: 'postcodes.io places: suburban areas and villages in Ashford borough.', url: 'https://api.postcodes.io/places?q=Willesborough' }
    ],
    rejectedClaims: [
      'Railway, commuting or London links: not read from a source; not claimed.',
      'Why Ashford households differ: no cause is claimed, only the size of the difference.',
      'Rest of England figures: derived by subtraction and labelled as ours, not published.',
      'Sum of the built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
