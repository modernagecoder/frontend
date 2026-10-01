'use strict';
// Bury St Edmunds (cg- town page, UK cluster Phase 10, towns band B, row 552). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a model fill in numbers nobody showed
// it, and when does a more flexible model make the guesses worse? (Matrix completion by low-rank factorisation.)
// Data (read 30 September 2026): Nomis Census 2021 TS061 (method used to travel to work, 11 methods) for the 141 output
// areas of the Bury St Edmunds built-up area in West Suffolk (E07000245), per the ONS OA21 to BUA22 lookup. 1,551 cells,
// 483 of them zero. Counts divided by each area's total in employment.
// Our run (scratchpad bse/mc.py, mc2.py): hide 20% of cells at random, 20 masks (seeds 1000 to 1019); predict each hidden
// share, score = mean absolute miss in people per hidden cell. Column average 3.52 (3.519). Alternating least squares on
// the known cells after removing column means, 60 sweeps: rank 1 lambda 0.1 3.38; rank 2 lambda 0.1 2.31, better than the
// column average in 20 of 20 masks; rank 3 lambda 0.1 2.30; rank 10 lambda 0.001 hidden 3.57, known-cell error 0.021,
// beat the column average in 7 of 20. Half hidden: rank 2 lambda 0.1 2.95 vs column average 3.51 (3.505), 19 of 20; in 3
// of those 20 masks one area had every cell hidden and could only get the column average.
// Lesson family: matrix completion / low-rank factorisation (recommender idea). Screened: "matrix completion", "low rank",
// "alternating least squares" 0 hits in content/; claimed in claims.txt. Suffolk county page = bin packing.
// Place facts: West Suffolk TS001 179,948. ONS 2021 BUA (published): Bury St Edmunds 41,280 (a required mention on the
// Greenock page by coincidence; printed only). Council wards of the nearest postcode to each OA centroid (postcodes.io):
// Moreton Hall, Tollgate, Minden, Abbeygate, Westgate, St Olaves, Southgate, Eastgate. No postcodes.io suburban area has
// its nearest postcode inside the BUA, so wards are used instead.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BURY ST EDMUNDS', label: 'Bury St Edmunds', blurb: 'AI and programming classes for Bury St Edmunds, with a project that hides census cells and asks a low-rank model to fill them back in.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-bury-st-edmunds',
  code: 'bse',
  accent: '#5A510F',
  accentRationale: 'Bury St Edmunds: a dark ochre olive (8.02:1 contrast on white), chosen by hand as a muted tone kept clear of the other Suffolk pages',
  pageType: 'city',
  place: {
    name: 'Bury St Edmunds',
    eyebrow: 'Bury St Edmunds, West Suffolk, Suffolk',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Suffolk' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Suffolk', href: '/coding-classes-in-suffolk' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bury St Edmunds, Suffolk',
  title: 'AI and Programming Classes in Bury St Edmunds | Ages 6 to 67',
  description: 'AI, programming and Python classes live online for Bury St Edmunds, Moreton Hall, Tollgate and Minden, with vibe coding and agents for ages 6 to 67. Try one free.',
  ogDescription: 'AI and programming lessons for Bury St Edmunds, with a project that hides census numbers and makes a model guess them back.',
  twitterDescription: 'Bury St Edmunds AI and programming classes, live online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'AI and Programming Classes for Bury St Edmunds',
    description: 'Live online AI, programming, Python and maths lessons for children, teenagers and adults in Bury St Edmunds and West Suffolk, including a project on filling gaps in a table with a low-rank model.'
  },

  h1: 'AI and programming classes in Bury St Edmunds',
  capsuleQ: 'Where can Bury St Edmunds learners find the best AI and programming classes?',
  capsule: 'The ONS counted 41,280 usual residents in the Bury St Edmunds built-up area in 2021, and 179,948 across the West Suffolk district. The town\'s council wards include Moreton Hall, Tollgate, Minden, Abbeygate, Westgate, St Olaves, Southgate and Eastgate. Our India-based tutors teach AI, programming, Python, vibe coding and maths over live video to anyone from six to 67 in the town, either alone or alongside five to ten classmates working at the same level. For Bury St Edmunds we built a project around a question at the heart of every recommendation engine: if some numbers in a table are missing, can a model guess them from the rest? Learners hide census cells, fit a low-rank model and find out when extra flexibility starts to hurt. A trial lesson is free; group lessons then cost USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'A streaming service knows what you have watched but not what you would think of the thousands of films you have not. Filling in those blanks is called matrix completion, and the classic trick is to assume the whole table can be rebuilt from a few hidden patterns. Bury St Edmunds learners test that assumption on something they can check: how people in each of the town\'s 141 census areas travel to work. They hide a fifth of the numbers, ask the model to fill them in, and then compare its guesses with the truth.',
  wa: 'Hello Modern Age Coders, we are in Bury St Edmunds and would like a free AI or programming lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'AI and programming courses for Bury St Edmunds',
    intro: 'Choose by age band. Every course opens with a free live lesson, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: guessing a missing number in a pattern and then checking the guess.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: an AI suggests code for a Scratch game and the child tests it.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning for teenagers, including the Bury St Edmunds matrix completion project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Generative AI and agents for older learners, built on real models rather than slogans.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bury St Edmunds facts',
      h2: 'Bury St Edmunds, Moreton Hall, Tollgate and Minden',
      intro: 'Census counts and ward names, each traced to a source.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents, Office for National Statistics', head: ['Area', 'Residents'], rows: [
          ['Bury St Edmunds built-up area', '41,280'],
          ['West Suffolk district', '179,948']
        ] },
        { kind: 'p', text: 'The district figure is counted on a much wider boundary that also takes in Haverhill, Newmarket, Mildenhall and Brandon. The ward names come from the postcode directory: for each census area in the town we looked up the nearest postcode and recorded its council ward, which gave Moreton Hall, Tollgate, Minden, Abbeygate, Westgate, St Olaves, Southgate and Eastgate. Local schools teach the English national curriculum; quoting a year group between Year 2 and Year 13 lets us pitch the first lesson, and our work sits beside GCSE and A level computer science, not in place of it.' },
        { kind: 'callout', h3: 'Suffolk pages', p: 'See the <a class="cg-inline-link" href="/coding-classes-in-suffolk">Suffolk page</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ipswich">Ipswich</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-lowestoft">Lowestoft</a>. For why we still teach the thinking under the tools, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bury St Edmunds project',
      h2: 'Matrix completion: guessing the missing cells of a census table',
      intro: '141 areas, 11 ways of getting to work, and a fifth of the numbers deliberately removed.',
      body: [
        { kind: 'p', text: 'Census table TS061 records how employed residents usually travel to work: from home, by train, bus, taxi, motorbike, car as driver or passenger, bicycle, on foot, or another way, plus a category for underground, metro, light rail and tram that is almost empty here. For the 141 output areas of the Bury St Edmunds built-up area that makes a table of 1,551 numbers, and 483 of them are zero. The learner turns each row into shares of that area\'s workers, then hides 20 per cent of the cells at random and tries to predict them.' },
        { kind: 'p', text: 'The first guess is the column average: whatever share of workers use a method across the known cells, assume the same in the hidden one. The smarter guess is a low-rank model. It gives every area a short list of hidden numbers and every travel method a matching list, and predicts each cell by multiplying the two lists together. The learner fits the lists with alternating least squares: hold the method numbers fixed and solve for each area, then hold the areas fixed and solve for each method, and repeat. Each step is an ordinary least-squares fit, a few lines of NumPy.' },
        { kind: 'table', caption: 'Average miss per hidden cell, in people, 20 random masks with 20 per cent hidden, our Python run', head: ['Method', 'Hidden cells', 'Known cells', 'Beat the column average'], rows: [
          ['Column average', '3.52', '3.46', 'not applicable'],
          ['Rank 1, penalty 0.1', '3.38', '2.35', '13 of 20'],
          ['Rank 2, penalty 0.1', '2.31', '1.19', '20 of 20'],
          ['Rank 3, penalty 0.1', '2.30', '0.98', '20 of 20'],
          ['Rank 10, penalty 0.001', '3.57', '0.02', '7 of 20']
        ] },
        { kind: 'p', text: 'Two hidden numbers per area were enough to cut the average miss from 3.52 people to 2.31, and the model won on every one of the 20 masks. The last row is the warning. With ten hidden numbers and almost no penalty for large values, the model fitted the cells it could see almost perfectly, missing by 0.02 people on average, and then did worse than the plain column average on the cells it could not see. It had memorised instead of learning. The penalty, called regularisation, is what stops that: with it set to 0.1, rank 10 missed by 2.40 people, close to rank 3.' },
        { kind: 'p', text: 'Hiding half the table instead of a fifth made everything harder: rank 2 missed by 2.95 people against 3.51 for the column average, and still won in 19 of 20 masks. In three of those masks one area had every cell hidden, and no model can say anything about an area it has never seen except the average. Recommender systems call this the cold start problem, and a new customer with no history meets exactly the same wall.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'A times table with blanks: fill them from the row and column numbers, then invent a table with no pattern and try again.' },
          { h3: 'Ages 11 to 15', p: 'Predict hidden cells with column averages in Python and measure the miss in people, not percentages.' },
          { h3: 'Ages 15 and up', p: 'Write alternating least squares, sweep the rank and the penalty, and plot error on known and hidden cells.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Census 2021 table TS061 from Nomis, published by the ONS under the Open Government Licence. The low-rank method follows Koren, Bell and Volinsky (2009) and Candès and Recht (2009). Hidden cells were chosen at random by us, and each score is an average over 20 random choices, so another run will differ slightly.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'The AI connection',
      h2: 'What filling a census table teaches about recommendation and AI',
      intro: 'The same idea sits behind suggestions for films, songs, shopping and reading.',
      body: [
        { kind: 'table', caption: 'From the Bury St Edmunds table to AI systems', head: ['In the project', 'In AI more widely'], rows: [
          ['Two hidden numbers per area beat the average', 'Much real data follows a few underlying patterns, which is why models can generalise at all'],
          ['Rank 10 with no penalty fitted the known cells and failed the hidden ones', 'Doing well on training data proves little; judge a model on data it never saw'],
          ['The penalty rescued the big model', 'Regularisation is a design choice, not a detail'],
          ['An area with nothing known got only the average', 'Cold start: a system knows nothing about a newcomer'],
          ['Each score averaged 20 random masks', 'One lucky split can flatter a model; repeat the test']
        ] },
        { kind: 'p', text: 'Recommendation engines, the tools that suggest the next video or product, have used this kind of factorisation for years, as Koren, Bell and Volinsky described in 2009, and the gap between training error and real error is the most common way AI projects fool their own builders. Vibe coding is part of the course too: the learner tells an AI assistant what program they want, then audits the draft line by line. Ask an assistant to "fill in the missing values" and it will usually pick a method without explaining it, and the learner\'s task is to test the choice on hidden cells. Agents follow later, for learners fluent in Python, generally in the late teens or as adults, and Copilot Studio agents are private lessons only. More in <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The census numbers come from Nomis and the ONS and the ward names from postcodes.io, none of which is linked to Modern Age Coders; what we did with them is our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From number patterns to models that fill the gaps',
    intro: 'Year group gives a starting guess; the trial lesson confirms it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Patterns, tables and good guesses that can be checked.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and first Python, with AI suggestions the child tests.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'NumPy, least squares and honest testing on hidden data.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Data science and AI agents', p: 'Models, evaluation and then agents that use them.', courses: ['data-science-complete-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and missing data',
    h2: 'What is matrix completion, and how do recommendation engines use it?',
    intro: 'Matrix completion is predicting the missing entries of a table from the entries you do know, usually by assuming the table is built from a few hidden patterns, and recommendation engines use it to guess how much someone would like items they have never rated.',
    p1: 'On the Bury St Edmunds travel-to-work table, a model with two hidden patterns per area missed hidden cells by 2.31 people on average, against 3.52 for the column average, while an over-flexible model with no penalty did worse than the average.',
    p2: 'Learners who have run this ask of any AI prediction: was it tested on data the model never saw, and what does it do with a newcomer?',
    closer: 'A Bury St Edmunds teenager who has watched a model memorise its training data will not be fooled by a high training score, and that caution is learned by coding the model.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In practice',
    h2: 'How lessons run for Bury St Edmunds learners',
    intro: 'Learners join from home using a laptop or desktop with a webcam. Reliability of the connection counts for more than speed.',
    cells: [
      { h3: 'The learner drives', p: 'Our tutors question and nudge; learners write, run and debug the code themselves.' },
      { h3: 'Level first, course second', p: 'We recommend a course only after the free lesson has shown what the learner can already do.' },
      { h3: 'A real lesson, free', p: 'The trial is a full session with no charge and no card requested.' },
      { h3: 'Matched groups', p: 'Five to ten learners at one level, drawn from towns across the UK.' },
      { h3: 'Term-time rhythm', p: 'Two lessons a week; tell us your Suffolk holiday dates and we pause for them.' },
      { h3: 'Clock changes absorbed', p: 'The lesson keeps its UK time through March and October; the tutor adjusts instead.' }
    ],
    spec: { title: 'Why we teach live online', p: 'A live tutor catches a misunderstanding while the learner is still typing it. And learners from all over the UK make it possible to group people by level precisely, which one town alone rarely allows.' }
  },

  fees: {
    h2: 'Fees in Bury St Edmunds',
    intro: 'Bury St Edmunds learners are charged our usual international fees.',
    first: 'A complete first lesson at no cost, with a course recommendation at the end.',
    group: 'Group lessons, around eight a month.',
    private: 'Private lessons, around eight a month.',
    closer: 'All fees are quoted in US dollars, never in pounds. There is no bill for the trial; charging begins after you settle on a course and a weekly time. Details on holidays, missed sessions and changing format are on our pricing page.'
  },

  reviewsH2: 'Google reviews from Suffolk families and learners across the UK',

  book: {
    h2: 'Try a free lesson in Bury St Edmunds',
    intro: 'Send an age or school year and one interest. The trial could be a missing-number puzzle, a Scratch game made with AI help, first steps in Python, or a small prediction checked against hidden data.',
    success: 'Thank you. Your Bury St Edmunds request is with us.'
  },

  faq: {
    h2: 'Bury St Edmunds: frequently asked',
    intro: 'The matrix project, AI, vibe coding and how lessons are arranged.',
    items: [
      { q: 'What is the population of Bury St Edmunds?', a: 'The ONS built-up area had 41,280 usual residents at the 2021 census. West Suffolk district had 179,948.' },
      { q: 'Do you run AI and programming classes for Bury St Edmunds?', a: 'Yes, live online for ages 6 to 67, for learners in Moreton Hall, Tollgate, Minden, Southgate and the rest of the town.' },
      { q: 'What is a low-rank model?', a: 'A model that describes every row and every column of a table with a few hidden numbers each, and rebuilds any cell by combining the two. Rank means how many hidden numbers each one gets.' },
      { q: 'What did the Bury St Edmunds project show?', a: 'With a fifth of the travel-to-work cells hidden, a rank 2 model missed by 2.31 people per cell against 3.52 for the column average, and won on all 20 random masks.' },
      { q: 'Why did the biggest model do worse?', a: 'With ten hidden numbers and almost no penalty it matched the known cells almost exactly, then missed hidden cells by 3.57 people on average. It memorised rather than generalised.' },
      { q: 'What is vibe coding?', a: 'Building software by telling an AI what you want, then reviewing, running and fixing what it writes. We teach it together with the coding needed to judge the result.' },
      { q: 'How soon can a learner start on AI agents?', a: 'Once their Python stands up without help, which for most means later teens or adulthood. Copilot Studio agents are available in private lessons only.' },
      { q: 'Does this support GCSE or A level computer science?', a: 'Yes, since algorithms and programming run through both. We do not guarantee grades.' },
      { q: 'What are the fees?', a: 'The first lesson is free, then USD 100 a month for a group or USD 150 a month for one-to-one lessons.' },
      { q: 'Do lessons pause for school holidays?', a: 'They can. Give us the dates and we will leave those weeks empty.' }
    ]
  },

  next: {
    eyebrow: 'Around Suffolk',
    h2: 'Other pages in Suffolk and the East of England',
    html: 'Explore <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ipswich">Ipswich</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-lowestoft">Lowestoft</a>, each with a project of its own. The <a class="cg-inline-link" href="/coding-classes-in-suffolk">Suffolk page</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list many more.',
    waLabel: 'Chat to us on WhatsApp'
  },

  footerHeading: 'Bury St Edmunds and Suffolk',
  footerPlaces: [
    { href: '/coding-classes-in-suffolk', label: 'Suffolk' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bse .cg-hero-grid { align-items: end; gap: clamp(1.3rem, 3vw, 2.6rem); }
.cg-root.cg-bse .cg-hero h1 { font-weight: 710; letter-spacing: -0.026em; line-height: 1.06; }
.cg-root.cg-bse .cg-capsule { border-left: 4px double var(--cg-accent); padding: 0.1rem 0 0.1rem 1.05rem; }
.cg-root.cg-bse .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; font-size: 0.81rem; }
.cg-root.cg-bse .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.02em; }
.cg-root.cg-bse .cg-table caption { font-weight: 500; text-align: left; font-size: 0.92rem; font-style: italic; }
.cg-root.cg-bse .cg-table td { font-variant-numeric: tabular-nums; padding-top: 0.5rem; padding-bottom: 0.5rem; }
.cg-root.cg-bse .cg-table th { font-weight: 720; letter-spacing: 0.01em; }
.cg-root.cg-bse .cg-ladder-col { border-radius: 12px; border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-bse .cg-callout { border-left-width: 3px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Suffolk (E07000245), Census 2021 TS001 usual residents 179,948. ONS 2021 BUA (published): Bury St Edmunds 41,280 (printed; the same figure is a required mention on the Greenock page). English national curriculum, GCSE and A level. Council wards of the nearest postcode to each of the 141 OA centroids (postcodes.io): Moreton Hall, Tollgate, Minden, Abbeygate, Westgate, St Olaves, Southgate, Eastgate.',
    localProject: 'Census 2021 TS061 (method used to travel to work, 11 methods) for the 141 OAs of the Bury St Edmunds BUA: 1,551 cells, 483 zero; shares of each area\'s workers. 20 per cent hidden at random, 20 masks; score = mean absolute miss in people per hidden cell. Column average 3.52 (known 3.46). Alternating least squares after column-mean removal, 60 sweeps: rank 1 penalty 0.1 3.38 (13 of 20 wins); rank 2 penalty 0.1 2.31 (20 of 20; known 1.19); rank 3 penalty 0.1 2.30; rank 10 penalty 0.001 3.57 hidden, 0.021 known (7 of 20). Half hidden: rank 2 2.95 vs 3.51 (19 of 20); 3 masks left one area fully hidden (cold start). Lesson family: matrix completion by low-rank factorisation, regularisation, cold start.',
    requiredMentions: [
      '179,948',
      'Moreton Hall',
      'Tollgate',
      'Minden',
      'Abbeygate',
      'St Olaves',
      'matrix completion',
      'alternating least squares',
      '1,551',
      '2.31'
    ],
    sources: [
      { claim: 'Koren Y., Bell R. and Volinsky C. (2009), Matrix factorization techniques for recommender systems, Computer 42(8), 30 to 37.', url: 'https://doi.org/10.1109/MC.2009.263' },
      { claim: 'Candès E. J. and Recht B. (2009), Exact matrix completion via convex optimization, Foundations of Computational Mathematics 9(6), 717 to 772.', url: 'https://doi.org/10.1007/s10208-009-9045-5' },
      { claim: 'ONS Census 2021 TS061 method used to travel to work and TS001 via Nomis; ONS OA21 to BUA22 lookup and 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io reverse geocoding of output-area centroids for council ward names.', url: 'https://postcodes.io/' }
    ],
    rejectedClaims: [
      'A published travel-to-work total or shares for the town: our tally across 141 areas is not printed as a population figure.',
      'That the low-rank model reveals real causes of how people travel: the hidden numbers are fitted, not interpreted.',
      'That streaming services use exactly this model today: stated as the approach that popularised recommendation, with sources from 2009.',
      'Gazetteer suburb names: none has its nearest postcode inside the BUA (Westley, Nowton, Horringer and the Fornhams fall outside); wards used instead.',
      'Car ownership or any income-linked measure: not used; the table is method of travel only.',
      'Sterling prices: none.'
    ]
  }
};
