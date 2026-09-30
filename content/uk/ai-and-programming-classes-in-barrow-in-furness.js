'use strict';
// Barrow-in-Furness (cg- town page, UK cluster Phase 10, towns band B, row 492). Keyword slug per the owner's rotation,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can the way you chose your data invent
// a pattern that is not there? (Berkson's paradox: selecting on a combination of two things makes them look opposed.)
// Data (read 30 September 2026): Nomis Census 2021 for all 246 output areas of the Barrow-in-Furness district as it stood
// in 2022 (E07000027): TS017 household size (share of three-person households) and TS044 accommodation type (share of
// detached homes). OA rows sum to 31,263 households (published LAD total 31,258).
// Our run (scratchpad bif/bk.py): each measure ranked 1 to 246; Spearman rank correlation. All 246 areas: 0.040 (Pearson
// on raw shares 0.005). Shortlist = the 62 areas (a quarter) with the highest sum of the two ranks: -0.702. The 184 left
// out: -0.257. Areas in the top quarter on either measure (114; 10 are in both): -0.591. Control: 2,000 random shortlists
// of 62 (seed 0): median 0.038, middle 95% from -0.175 to 0.256, lowest -0.311.
// Lesson family: Berkson's paradox / collider (selection) bias in training data. Screened: "Berkson" 0 hits in content/;
// claimed in claims.txt. Cumbria county page = Naive Bayes text classification, baselines and leakage; Carlisle and
// Lancaster have their own families.
// Place facts: Barrow-in-Furness district (2022 boundary) TS001 67,407. ONS 2021 BUA (published): Barrow-in-Furness
// 55,255. postcodes.io lists the town under Westmorland and Furness, with suburban areas Vickerstown, Hawcoat, Ormsgill,
// Hindpool, Barrow Island, North Scale (LA14) and Roose, Newbarns (LA13).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BARROW-IN-FURNESS', label: 'Barrow-in-Furness', blurb: 'AI and programming classes for Barrow-in-Furness, with a project where a shortlist of census areas invents a trade-off the full data does not contain.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-barrow-in-furness',
  code: 'bif',
  accent: '#2D5A3C',
  accentRationale: 'Barrow-in-Furness: a deep fell green (7.96:1 contrast), chosen by hand to stand apart from recent accents',
  pageType: 'city',
  place: {
    name: 'Barrow-in-Furness',
    eyebrow: 'Barrow-in-Furness, Cumbria, North West England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Westmorland and Furness' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Cumbria', href: '/coding-classes-in-cumbria' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Barrow-in-Furness, Cumbria',
  title: 'AI and Programming Classes in Barrow-in-Furness | Ages 6 to 67',
  description: 'AI, programming, Python and vibe coding classes taught live online for Barrow-in-Furness, Hawcoat, Ormsgill and Newbarns, ages 6 to 67. Free first lesson.',
  ogDescription: 'AI and programming classes for Barrow-in-Furness, with a data project on Berkson\'s paradox using census areas.',
  twitterDescription: 'Barrow-in-Furness AI, programming and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Barrow-in-Furness',
    description: 'Online AI, programming, Python, vibe coding and maths for children, teenagers and adults in Barrow-in-Furness and Cumbria, taught live with attention to how data is chosen.'
  },

  h1: 'AI and programming classes in Barrow-in-Furness',
  capsuleQ: 'Where can Barrow-in-Furness learners find the best AI and programming classes?',
  capsule: 'The Barrow-in-Furness built-up area had 55,255 residents at the 2021 census by the ONS count, and the district as it then stood had 67,407. Vickerstown, Hawcoat, Ormsgill, Hindpool, North Scale, Roose and Newbarns are suburbs recorded in the LA13 and LA14 postcode districts. People in any of them, from age six to 67, can learn AI, programming, Python, vibe coding and maths with us. Lessons are live and online, led by tutors in India, with a choice between private tuition and a class of five to ten at your level. What we care about is whether a learner can tell a real pattern from an accident of how the data was picked. One lesson is free, and at its end we recommend a course. The Barrow project takes two facts about 246 census areas that have nothing to do with each other, applies a reasonable-looking filter, and watches a strong relationship appear from nowhere. Fees after the trial are USD 100 monthly for a group and USD 150 monthly for private lessons.',
  lead: 'An AI model learns whatever patterns are in the data it is shown. So a great deal rides on how that data was gathered. One of the quietest traps is a filter. Suppose rows only enter a dataset when they score well on one thing or another. Inside the filtered set, those two things will seem to work against each other, even if across everything they are unrelated. Statisticians call this Berkson\'s paradox, after Joseph Berkson, who described it in hospital records in 1946. This project reproduces it with housing figures for Barrow-in-Furness, where the learner can see the full data and the filtered data side by side.',
  wa: 'Hello Modern Age Coders, we are in Barrow-in-Furness and would like to try a free AI or programming lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Barrow-in-Furness courses in thinking, Python and AI',
    intro: 'Find the age that fits. A live first lesson comes free with every course here, and booking it takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think course: fair tests, what counts as evidence, and asking who was left out.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games built with an AI helper, where the child decides what works.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, with a close look at training data and the Barrow filter experiment.' },
      { course: 'statistics-probability-maths-course', band: 'Teens and adults', note: 'Statistics and probability for people who want to read data and AI claims critically.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'About the town',
      h2: 'Barrow-in-Furness, Hawcoat, Ormsgill and Vickerstown',
      intro: 'The 2021 census counts and the suburb names the postcode gazetteer holds.',
      body: [
        { kind: 'table', caption: 'Barrow-in-Furness, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Barrow-in-Furness built-up area', '55,255'],
          ['Barrow-in-Furness district, 2022 boundary', '67,407']
        ] },
        { kind: 'p', text: 'These two counts use different boundaries. The district figure is for the council area that existed when the census was taken; postcodes.io now lists the town under Westmorland and Furness. The same gazetteer records Vickerstown, Hawcoat, Ormsgill, Hindpool, Barrow Island and North Scale as suburban areas in LA14, and Roose and Newbarns in LA13. Local schools teach the English national curriculum, so we ask for a year group from Year 2 to Year 13 and tie lessons to GCSE or A level where a learner wants that.' },
        { kind: 'callout', h3: 'Cumbria and beyond', p: 'You may also want <a class="cg-inline-link" href="/coding-classes-in-cumbria">coding classes in Cumbria</a>, <a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a> or <a class="cg-inline-link" href="/best-coding-class-in-lancaster">Lancaster</a>. Why we put reasoning first is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Barrow project',
      h2: 'Berkson\'s paradox: a shortlist that invents a trade-off',
      intro: 'Two unrelated measures, one filter, and a correlation that was never in the full data.',
      body: [
        { kind: 'p', text: 'The learner fetches two Census 2021 tables from Nomis for the 246 output areas of the Barrow-in-Furness district. Their rows add to 31,263 households, against a published district total of 31,258; small census counts are adjusted, so the two differ slightly. From one comes the share of households with exactly three people. From the other comes the share of homes that are detached. Each area is ranked from 1 to 246 on both. The rank correlation between them is 0.04, which is as good as none: knowing how many detached homes an area has tells you nothing about its three-person households.' },
        { kind: 'p', text: 'Now imagine someone preparing data for a study who wants areas that are "interesting" on these measures. They add the two ranks and keep the top quarter, 62 areas. It sounds harmless. Inside that shortlist the correlation is -0.70.' },
        { kind: 'table', caption: 'Rank correlation between three-person household share and detached home share, our Python calculation on Census 2021 data', head: ['Which areas', 'How many', 'Correlation'], rows: [
          ['Every area in the district', '246', '0.04'],
          ['Shortlist: highest combined rank', '62', '-0.70'],
          ['The areas left off the shortlist', '184', '-0.26'],
          ['In the top quarter on either measure', '114', '-0.59'],
          ['A random 62, typical result', '62', '0.04']
        ] },
        { kind: 'p', text: 'Nothing about Barrow changed between the first row and the second. The filter did it. To get onto the shortlist an area needs a high total, so an area that is low on one measure must be very high on the other, and the shortlist fills with exactly those lopsided cases. A gentler-sounding rule, keeping any area in the top quarter on either measure, gives 114 areas and a correlation of -0.59. Even the rejected areas show -0.26, because they were selected too, by failing the test.' },
        { kind: 'p', text: 'To check this was not chance, the program drew 2,000 random shortlists of 62. Their correlations centred on 0.04, 95% of them fell between -0.18 and 0.26, and the lowest of all was -0.31. No random draw came near -0.70. One thing a careful learner notes: three-person households and detached homes were chosen because they happened to be unrelated here, and nothing in this exercise says why.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Roll two dice many times, keep only the rolls that total nine or more, and see the dice start to "disagree".' },
          { h3: 'Ages 11 to 15', p: 'Rank the Barrow areas in Python, build the shortlist and compute both correlations.' },
          { h3: 'Ages 15 and up', p: 'Run the random-shortlist control and explain, with a scatter plot, where the negative slope comes from.' }
        ] },
        { kind: 'callout', h3: 'About the figures', p: 'Household and accommodation counts are Office for National Statistics Census 2021 data from Nomis, used under the Open Government Licence. The shares, ranks, shortlists and correlations are our own calculations. Areas are described only by household size and type of home.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Training data',
      h2: 'What a filtered dataset means for vibe coding and AI agents',
      intro: 'Models learn from whatever made it through the door, and they cannot see the door.',
      body: [
        { kind: 'table', caption: 'From the Barrow shortlist to AI', head: ['In the census exercise', 'In AI and data work'], rows: [
          ['0.04 in all 246 areas', 'Look at the whole population when you can'],
          ['-0.70 inside the shortlist', 'A filter can manufacture a pattern'],
          ['-0.26 among the rejected areas', 'Rejected data is filtered data too'],
          ['Random shortlists stayed near 0.04', 'Compare with an unfiltered sample'],
          ['The rule sounded reasonable', 'Write down how every dataset was selected']
        ] },
        { kind: 'p', text: 'Plenty of data reaches an AI already filtered: reviews from people who chose to write one, support tickets from customers who complained, search results that ranked highly. A model trained on such rows can learn a trade-off that exists only because of the filter. Vibe coding is writing software by giving an AI instructions in plain words, and an AI asked to "find what correlates" will report the -0.70 without a murmur. Learners in Barrow are taught to ask first how the rows were chosen, and to have the code test a random sample alongside. The same question applies to an AI agent that gathers its own evidence, since what it retrieves is a selection. Agent building comes after solid Python, usually in the later teens or adulthood, and we teach Copilot Studio agents one-to-one only. Related reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page draws on open data from the Office for National Statistics, Nomis and postcodes.io. None of them is linked to Modern Age Coders, and the analysis here is our own, errors included.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From dice experiments to honest machine learning',
    intro: 'A year group suggests a starting stage, and the trial lesson confirms or changes it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Fair tests, samples and spotting what a rule leaves out.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Make games with AI assistance, then check them properly.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI', p: 'Data, correlation and models, in step with GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Statistics and AI', p: 'Reading data critically and building models and agents in Python.', courses: ['statistics-probability-maths-course', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and selection',
    h2: 'What is Berkson\'s paradox, and how can a filter fool an AI model?',
    intro: 'Berkson\'s paradox is a false negative relationship between two things that appears when data is kept only if it scores highly on one or the other; an AI model trained on such filtered data learns the false relationship as if it were real.',
    p1: 'In 246 Barrow-in-Furness census areas, two housing measures had a rank correlation of 0.04; among the 62 areas shortlisted for a high combined rank it was -0.70, while 2,000 random shortlists never went below -0.31.',
    p2: 'After seeing that, a learner treats every dataset as the survivor of some filter and asks what the filter was before trusting a pattern in it.',
    closer: 'That question cannot be delegated to a chatbot, which is part of why programming and statistics still repay a Barrow-in-Furness teenager in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The format',
    h2: 'Lessons by video for Barrow-in-Furness',
    intro: 'A computer, a webcam and ordinary home broadband are enough. No software has to be bought.',
    cells: [
      { h3: 'Active, not watching', p: 'Learners write the programs and run the experiments themselves, sharing their screen with the tutor.' },
      { h3: 'Level found in lesson one', p: 'The free trial is a real lesson, and it shows us which course and stage make sense.' },
      { h3: 'Trial without payment', p: 'No fee, no card, and a recommendation when it ends.' },
      { h3: 'Five to ten per class', p: 'Classmates are at the same stage and may be anywhere in the UK.' },
      { h3: 'Two lessons each week', p: 'In term time, with Cumbria school holidays kept clear on request.' },
      { h3: 'Same slot, summer and winter', p: 'Clock changes never move your lesson; our tutors adjust.' }
    ],
    spec: { title: 'Why online', p: 'Grouping by level needs a wide pool of learners. Video gives a Barrow learner that pool, and travel time drops to zero.' }
  },

  fees: {
    h2: 'Barrow-in-Furness fees',
    intro: 'Here are the prices we charge in every country apart from India.',
    first: 'First lesson free, complete, with a course recommendation.',
    group: 'A group of five to ten, close to eight lessons a month.',
    private: 'Just the learner and a tutor, close to eight lessons a month.',
    closer: 'Fees are set in US dollars, and we do not publish them in pounds. Billing begins after the trial, once the course and weekly slot are fixed. The pricing page sets out how holidays, missed lessons and format changes are handled.'
  },

  reviewsH2: 'Reviews on Google from Cumbria families and learners UK-wide',

  book: {
    h2: 'Book a free Barrow-in-Furness lesson',
    intro: 'Share the learner\'s age or school year and what interests them. The trial might be a dice experiment, a Scratch game made with AI, an opening Python lesson, or ranking real census areas.',
    success: 'Thank you. We have your Barrow-in-Furness request.'
  },

  faq: {
    h2: 'Barrow-in-Furness FAQ',
    intro: 'Selection bias, the census project, courses, vibe coding and logistics.',
    items: [
      { q: 'What is the population of Barrow-in-Furness?', a: 'The ONS counted 55,255 usual residents in the Barrow-in-Furness built-up area at the 2021 census, and 67,407 in the district as it then was.' },
      { q: 'Are AI and programming classes available in Barrow-in-Furness?', a: 'Yes, online. Lessons are live video calls open to ages 6 to 67 in Barrow, Hawcoat, Ormsgill, Vickerstown and the surrounding area.' },
      { q: 'What is selection bias?', a: 'Selection bias is the distortion that arises when the data you analyse was chosen in a way that depends on what you are studying. Berkson\'s paradox is one form of it.' },
      { q: 'What is a rank correlation?', a: 'It measures whether two lists tend to be in the same order, from -1 for opposite orders through 0 for no relation to 1 for the same order.' },
      { q: 'What did the Barrow project find?', a: 'Two unrelated housing measures (correlation 0.04 across 246 areas) showed a correlation of -0.70 inside a shortlist of 62 areas chosen for a high combined rank.' },
      { q: 'Do you teach vibe coding?', a: 'Yes. Learners describe a program to an AI, then read, test and question the result, from Scratch through to Python.' },
      { q: 'Can my teenager learn to build AI agents?', a: 'Yes, once their Python is solid, which is usually in the later teens. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Do lessons fit with GCSE and A level?', a: 'Yes. We support computer science and maths topics and teach for understanding, with no promise of grades.' },
      { q: 'What are the prices?', a: 'A free first lesson, then USD 100 a month for group classes or USD 150 a month for private lessons.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes, when you let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Further pages',
    h2: 'More from Cumbria and the North West',
    html: 'Each of these has a different project: <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a> (teaching a program to tell two poets apart), <a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a> and <a class="cg-inline-link" href="/best-coding-class-in-lancaster">Lancaster</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover the rest.',
    waLabel: 'Send a WhatsApp message'
  },

  footerHeading: 'Barrow-in-Furness and Cumbria',
  footerPlaces: [
    { href: '/coding-classes-in-cumbria', label: 'Cumbria' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bif .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.5vw, 2.25rem); }
.cg-root.cg-bif .cg-hero h1 { font-weight: 750; letter-spacing: -0.032em; line-height: 1.03; }
.cg-root.cg-bif .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-bif .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; }
.cg-root.cg-bif .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.024em; }
.cg-root.cg-bif .cg-table caption { font-weight: 600; text-align: left; font-size: 0.91rem; }
.cg-root.cg-bif .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bif .cg-table th { font-weight: 650; border-bottom: 3px double var(--cg-accent); }
.cg-root.cg-bif .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-bif .cg-callout { border-radius: 10px; border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Barrow-in-Furness district, 2022 boundary (E07000027), Census 2021 TS001 usual residents 67,407. ONS 2021 BUA (published): Barrow-in-Furness 55,255. English national curriculum, GCSE and A level. postcodes.io lists the town under Westmorland and Furness; suburban areas Vickerstown, Hawcoat, Ormsgill, Hindpool, Barrow Island, North Scale (LA14), Roose, Newbarns (LA13).',
    localProject: 'Census 2021 TS017 (three-person household share) and TS044 (detached share) for 246 OAs, OA rows sum to 31,263 households (published LAD total 31,258). Spearman rank correlation: all 246 0.040 (Pearson 0.005); top 62 by rank sum -0.702; remaining 184 -0.257; top quarter on either measure (114) -0.591; 2,000 random shortlists of 62: median 0.038, middle 95% -0.175 to 0.256, lowest -0.311. Lesson family: Berkson\'s paradox, selection (collider) bias in training data.',
    requiredMentions: [
      '67,407',
      '55,255',
      '31,263',
      'Vickerstown',
      'Hawcoat',
      'Ormsgill',
      'Hindpool',
      'Newbarns',
      'North Scale',
      'Berkson'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017, TS044 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas of Barrow-in-Furness, listed under Westmorland and Furness.', url: 'https://api.postcodes.io/places?q=Hawcoat' },
      { claim: 'Berkson J. (1946), Limitations of the application of fourfold table analysis to hospital data, Biometrics Bulletin 2(3), 47 to 53.', url: 'https://doi.org/10.2307/3002000' }
    ],
    rejectedClaims: [
      'Any reason why three-person households and detached homes are unrelated here: none claimed.',
      'That the pattern would appear with any two measures: not tested beyond this pair; the pair was chosen for its near-zero correlation, and the page says so.',
      'Shipbuilding, the docks and local employers: not read from a source; not claimed.',
      'Any description of residents beyond household size and type of home: none used.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
