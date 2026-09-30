'use strict';
// Twickenham, Richmond upon Thames (cg- district page, UK cluster Phase 9, row 446). Keyword slug per the owner's
// 2026-09-30 decision (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door
// links. Spine: how should an AI agent update what it believes as evidence arrives, and how much should it trust what it
// was told beforehand? (Bayesian updating with a Beta posterior; credible intervals; weak, good and wrong priors; an agent
// that stops sampling when it is sure enough).
// Data (read 30 September 2026): Nomis Census 2021 TS045 car or van availability (NM_2063_1) for all 619 output areas in
// Richmond upon Thames; ONS OA to LSOA and LSOA 2021 to ward (May 2022) best-fit lookups. Study area chosen by us: 138
// output areas best-fitted to the wards Twickenham Riverside (37), South Twickenham (32), West Twickenham (34) and St
// Margarets & North Twickenham (35): 18,171 households, 4,571 with no car or van (25.16%).
// Our run (scratchpad twk/twk.py): a simulated agent asks random households in batches of 10 whether they have a car
// (each answer drawn at the true rate), keeps a Beta posterior and stops when its 95% credible interval is narrow enough;
// 2,000 runs per setting. Flat prior Beta(1, 1): interval width 0.20: median 80 households, truth inside 92.6% of the time,
// mean error 4.32 points; width 0.10: 290 households, 94.3%, 2.02; width 0.06: 810 households, 94.9%, 1.22. Width 0.10
// with other priors: right and mild (25%, worth 40 households): 250 households, 95.6%, 1.90; wrong and mild (60%, worth
// 40): 280 households, 60.3%, 4.28; wrong and strong (60%, worth 400): stops after the first 10 households, truth inside
// 0.0% of runs, mean error 34.0 points. Posterior mean under the strong wrong prior if forced to continue: 53.0% after 100
// households, 42.6% after 400, 35.1% after 1,000, 28.3% after 4,000. Flat prior after 100 households at the true rate: 95%
// interval 17.6% to 34.3%.
// Lesson family: Bayesian updating, priors and credible intervals for an agent. Screened 30 September 2026: "Bayesian
// updating" 0 hits; claimed in claims.txt as twk. Bognor Regis owns optional stopping with p-values (a different failure),
// Halesowen conformal intervals, Tynemouth crowds of agents. Richmond borough page = Kepler's third law, not reused.
// Place facts: Census 2021 usual residents by 2022 ward, per ward, never summed: Twickenham Riverside 10,992; South
// Twickenham 10,629; West Twickenham 11,308; St Margarets & North Twickenham 11,945. postcodes.io (Richmond upon Thames):
// Twickenham (TW1), St Margarets (TW1), Whitton (TW2), Teddington (TW11).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'TWICKENHAM', label: 'Twickenham', blurb: 'Vibe coding and AI agents classes for Twickenham, with a project where an agent updates its belief one household at a time and we test what a wrong starting assumption does to it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-twickenham-london',
  code: 'twk',
  accent: '#2F5D8A',
  accentRationale: 'Twickenham: a river blue (6.88:1 contrast), chosen by hand and unused elsewhere in the cluster',
  pageType: 'city',
  place: {
    name: 'Twickenham',
    eyebrow: 'Twickenham, Richmond upon Thames, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Richmond upon Thames', href: '/coding-classes-in-richmond-upon-thames-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Twickenham, London',
  title: 'Vibe Coding and AI Agents Classes in Twickenham | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Twickenham, St Margarets, Whitton and Teddington learners aged 6 to 67. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Twickenham, with a Bayesian updating project on how an agent should weigh new evidence against what it was told.',
  twitterDescription: 'Twickenham vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Twickenham',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Twickenham and Richmond upon Thames, taught live with reasoning about evidence first.'
  },

  h1: 'Vibe coding and AI agents classes in Twickenham',
  capsuleQ: 'Where can Twickenham learners find the best vibe coding and AI agents classes?',
  capsule: 'Four wards of Richmond upon Thames carry the Twickenham name. At the 2021 census, Twickenham Riverside had 10,992 residents, South Twickenham 10,629, West Twickenham 11,308, and St Margarets and North Twickenham 11,945. St Margarets and Whitton are recorded as suburban areas of the borough in TW1 and TW2. Twickenham learners from six to 67 are taught vibe coding, AI agents, Python, coding and maths on a live video call by a tutor in India, one-to-one or in a small class of five to ten at their own level. We teach how to weigh evidence before how to use tools, so a learner notices when an agent is too sure of itself. A Twickenham trial lesson costs nothing and ends with a course we recommend. In the Twickenham project an agent estimates how many of 18,171 households have no car by asking a few at a time, and we test what happens when it starts out believing the wrong thing. After the trial, a class place is USD 100 a month and one-to-one lessons are USD 150 a month.',
  lead: 'A sensible agent does not wait for all the evidence, and it does not ignore what it already knows. It starts with a belief, called a prior, and shifts that belief a little with each new observation. The rule for doing this properly is Bayesian updating, and for a yes-or-no question it is simple enough to code in a few lines: keep a count of yeses and noes, add your starting belief as if it were some earlier answers, and read off a range that probably contains the truth, the credible interval. This project builds that agent and sets it a question with a known answer from the Census: what share of households across four Twickenham wards have no car.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Twickenham?',

  picks: {
    eyebrow: 'Twickenham course picks',
    h2: 'Twickenham courses in evidence, vibe coding and agents',
    intro: 'Pick the age band that fits the Twickenham learner. On all four courses the first live lesson is free and no card is requested.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: changing your mind by the right amount when a new clue turns up.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner dreams up, an AI helps write and the learner then tests.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects made with AI help, including the belief-updating agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that reason under uncertainty, gather evidence and know when to stop.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Twickenham and Richmond upon Thames',
      h2: 'Twickenham Riverside, South and West Twickenham, and St Margarets',
      intro: 'Census 2021 counts for the four Twickenham wards, and places recorded in TW1, TW2 and TW11.',
      body: [
        { kind: 'table', caption: 'The four Twickenham wards of Richmond upon Thames at the 2021 census (ONS, via Nomis; 2022 wards)', head: ['Ward', 'Residents (2021)'], rows: [
          ['Twickenham Riverside', '10,992'],
          ['South Twickenham', '10,629'],
          ['West Twickenham', '11,308'],
          ['St Margarets & North Twickenham', '11,945']
        ] },
        { kind: 'p', text: 'The ONS publishes these four counts separately and we leave them that way; there is no single official outline of Twickenham to total them into. Postcodes.io records Twickenham and St Margarets in TW1, Whitton in TW2 and Teddington in TW11, all in the borough. Schools in Richmond upon Thames teach England\'s national curriculum, so a note of the term dates is all we need to keep Twickenham lessons out of the holidays.' },
        { kind: 'callout', h3: 'Richmond upon Thames, London and our method', p: 'See <a class="cg-inline-link" href="/coding-classes-in-richmond-upon-thames-london">coding classes in Richmond upon Thames</a> and the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> for more. Why we start with reasoning is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Twickenham project',
      h2: 'Bayesian updating: an agent that changes its mind one household at a time',
      intro: 'A belief, a stream of answers, a rule for combining them, and a test of what a bad starting belief costs.',
      body: [
        { kind: 'p', text: 'Census 2021 table TS045 gives the number of households with no car or van in every output area. Across the 138 areas of the four Twickenham wards there are 18,171 households, and 4,571 of them, 25.16%, have none. The agent does not know that. It asks households at random, ten at a time, and after each batch updates a Beta distribution, the standard way to hold a belief about a percentage. It stops as soon as its 95% credible interval is narrower than a target. Python runs each version of the agent 2,000 times.' },
        { kind: 'table', caption: 'An agent with no starting opinion (flat prior), 2,000 simulated runs, our Python run on Census 2021 data', head: ['Stops when its range is narrower than', 'Households asked (median)', 'Truth inside its range', 'Typical miss'], rows: [
          ['20 percentage points', '80', '92.6%', '4.32 points'],
          ['10 percentage points', '290', '94.3%', '2.02 points'],
          ['6 percentage points', '810', '94.9%', '1.22 points']
        ] },
        { kind: 'p', text: 'With no opinion to start from, the agent is honest: its "95% sure" ranges contain the true 25.16% about 95% of the time, and halving the width of the range costs roughly four times as many households. The interesting part is what a prior does. A prior is coded as imaginary earlier answers, so "I think about 25%, but I am not sure" becomes 10 car-free households out of 40.' },
        { kind: 'table', caption: 'The same agent, target range 10 points, with different starting beliefs', head: ['Starting belief', 'Households asked (median)', 'Truth inside its range', 'Typical miss'], rows: [
          ['None (flat)', '290', '94.3%', '2.02 points'],
          ['About 25%, held loosely', '250', '95.6%', '1.90 points'],
          ['About 60%, held loosely', '280', '60.3%', '4.28 points'],
          ['About 60%, held firmly', '10', '0.0%', '34.0 points']
        ] },
        { kind: 'p', text: 'A good, loosely held prior saves work: 250 households instead of 290, with no loss of honesty. A wrong prior held loosely does real damage, because the agent stops while the false belief is still pulling on the answer, and its range misses the truth four times in ten. A wrong prior held firmly is a disaster. The agent is already so certain that it stops after the first ten households, reports a figure 34 points out, and is never right. Forced to keep going, it would still believe 35.1% after a thousand households and 28.3% after four thousand. Evidence wins in the end, but confidence decides how long that takes.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Guess what share of a bag of counters is red, then update the guess after each handful drawn.' },
          { h3: 'Ages 11 to 15', p: 'Code the running tally for the Twickenham question in Python and watch the estimate settle.' },
          { h3: 'Ages 15 and up', p: 'Add priors and credible intervals, then measure how often each version of the agent is right.' }
        ] },
        { kind: 'callout', h3: 'Census totals, our simulated agent', p: 'The household counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. No real household was asked anything: every answer is simulated at the published rate, and the agent, priors and results are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and belief',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'What an agent is told at the start can outweigh what it sees afterwards.',
      body: [
        { kind: 'table', caption: 'From the Twickenham updating agent to real AI agents', head: ['In the household project', 'When an AI agent works for you'], rows: [
          ['A flat prior was right 94.3% of the time', 'Honest uncertainty can be measured'],
          ['A good loose prior saved 40 households', 'Useful background speeds an agent up'],
          ['A loose wrong prior cut that to 60.3%', 'A false assumption biases the result'],
          ['A firm wrong prior was never right', 'Overconfident instructions block evidence'],
          ['It stopped after ten households', 'An agent sure of itself stops checking']
        ] },
        { kind: 'p', text: 'A prompt works like a prior. Tell an AI agent firmly that something is true and it may hardly look at the evidence it then gathers, exactly as the firm 60% agent did. When Twickenham learners vibe code, putting the goal into words for an AI to turn into a program, they practise wording what they know as "probably" rather than "certainly", and they make the agent show what it found before it concludes. We introduce agent building after Python has become a comfortable tool, typically for sixteen-plus and adult learners, and Copilot Studio agents are taught only in private lessons. There is more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for students in the UK</a> and on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither the Office for National Statistics, Nomis nor postcodes.io has any link with Modern Age Coders. Their open data is the only thing we took; the agent and its faults are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counters in a bag to agents that weigh evidence',
    intro: 'For a Twickenham learner the school year is where we begin guessing; the trial is where we find out.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Clues, guesses and changing your mind by a sensible amount.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps built with an AI and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and probability', p: 'Simulation, belief and evidence next to GCSE and A level maths.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Agents under uncertainty', p: 'Agents that gather evidence, update and report honestly, in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and evidence',
    h2: 'What is Bayesian updating, and how should an AI agent use it?',
    intro: 'Bayesian updating is the rule for revising a belief as evidence arrives: start from a prior, weigh each observation, and end with a posterior belief and a credible interval; an agent should use it with priors it holds loosely, so that evidence can correct them.',
    p1: 'Estimating the car-free share of 18,171 Twickenham households, an agent with no prior was right 94.3% of the time after a median 290 households, while one firmly told "about 60%" stopped after ten households and was never right.',
    p2: 'A learner who has built both agents asks of any AI answer: what was it told to assume, and did the evidence get a chance to change that?',
    closer: 'Twickenham teenagers who understand priors write better instructions for AI and trust its conclusions by the right amount, a skill that comes from coding the agent themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'St Margarets to Whitton, live online',
    intro: 'Twickenham lessons need one computer with a webcam and an internet line that carries video.',
    cells: [
      { h3: 'The learner builds it', p: 'All the typing and prompting is the student\'s. The tutor, on a shared screen, asks how sure they are and why.' },
      { h3: 'Trial lesson decides the level', p: 'We see what the learner can do, choose a first topic and note any exam board.' },
      { h3: 'Twickenham trial is free', p: 'One full lesson without charge, ending in a course recommendation.' },
      { h3: 'Classes by level, not postcode', p: 'Five to ten learners at one stage, from across the UK.' },
      { h3: 'Two lessons each week', p: 'Paused whenever schools are on holiday.' },
      { h3: 'Your hour is fixed', p: 'Clock changes in Britain are the tutor\'s job to track.' }
    ],
    spec: { title: 'Why Twickenham lessons are online', p: 'Five learners at one level, free on the same evening, within reach of one room: that rarely happens. A video class removes the last condition.' }
  },

  fees: {
    h2: 'Twickenham fees',
    intro: 'Twickenham families are on the international rate that we charge in every country but India.',
    first: 'A free full-length lesson and a recommendation.',
    group: 'Close to eight live class lessons a month.',
    private: 'Close to eight live private lessons a month.',
    closer: 'We quote Twickenham fees in US dollars only, with no sterling figure, and send the first invoice once the trial has fixed a course and an evening. See the pricing page for holidays, absences and moving between a class and private lessons.'
  },

  reviewsH2: 'Reviews on Google from Richmond upon Thames families and UK learners',

  book: {
    h2: 'Book a free Twickenham lesson',
    intro: 'Give us an age or school year and a hobby, and we plan the Twickenham trial around it: a counters-in-a-bag game, a Scratch game built with an AI, some first Python, or a small agent that updates its guess.',
    success: 'Thank you. Your Twickenham request is in.'
  },

  faq: {
    h2: 'Twickenham questions',
    intro: 'Priors, evidence, the household agent, vibe coding and how lessons in Twickenham are organised.',
    items: [
      { q: 'How many people live in the Twickenham wards?', a: 'The 2021 census counted 10,992 in Twickenham Riverside, 10,629 in South Twickenham, 11,308 in West Twickenham and 11,945 in St Margarets and North Twickenham, published ward by ward.' },
      { q: 'Are vibe coding and AI agents classes available online in Twickenham?', a: 'Yes. Anyone aged 6 to 67 in Twickenham, St Margarets, Whitton or Teddington can join on live video.' },
      { q: 'What is a prior in Bayesian statistics?', a: 'The belief held before seeing the data, written as a probability distribution. A loose prior is quickly corrected by evidence; a firm one takes a great deal of evidence to shift.' },
      { q: 'What is a credible interval?', a: 'A range that, given the prior and the data, contains the unknown value with a stated probability. After 100 Twickenham households at the true rate, a flat-prior agent\'s 95% interval runs from 17.6% to 34.3%.' },
      { q: 'What does the Twickenham project involve?', a: 'Coding an agent that estimates the car-free share of 18,171 households by sampling, updating a Beta posterior, and comparing flat, good and wrong starting beliefs over 2,000 runs each.' },
      { q: 'What is vibe coding?', a: 'Building a program by explaining it in plain language to an AI that writes the code, while the learner stays responsible for the design and the testing.' },
      { q: 'When do Twickenham learners start on AI agents?', a: 'After Python is a comfortable tool, typically sixteen and over; Copilot Studio agents are private lessons only.' },
      { q: 'Do you help with GCSE and A level?', a: 'Computer science and maths, yes. The teaching aims at understanding, with no grade guaranteed.' },
      { q: 'What are the fees?', a: 'A free trial, then USD 100 a month for a place in a class or USD 150 a month for one-to-one lessons.' },
      { q: 'Are lessons held during school holidays?', a: 'No. Tell us the dates and those weeks are skipped.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'More Richmond and London pages',
    html: 'Different projects on each: <a class="cg-inline-link" href="/coding-classes-in-richmond-upon-thames-london">Richmond upon Thames</a> (weighing planets by their orbits), <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a>, <a class="cg-inline-link" href="/coding-classes-in-kingston-upon-thames-london">Kingston upon Thames</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-finchley-london">Finchley</a> (when a good score hides false alarms). The rest of the capital is on <a class="cg-inline-link" href="/best-coding-class-in-london">our London page</a>, the rest of the country on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Twickenham and Richmond upon Thames',
  footerPlaces: [
    { href: '/coding-classes-in-richmond-upon-thames-london', label: 'Richmond upon Thames' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-twk .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-twk .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-twk .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-twk .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-twk .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-twk .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-twk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-twk .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-twk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-twk .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'London Borough of Richmond upon Thames (E09000027). Census 2021 usual residents by 2022 ward (per ward, not summed): Twickenham Riverside 10,992; South Twickenham 10,629; West Twickenham 11,308; St Margarets & North Twickenham 11,945. postcodes.io (Richmond upon Thames): Twickenham (TW1), St Margarets (TW1), Whitton (TW2), Teddington (TW11).',
    localProject: 'Census 2021 TS045 for 138 OAs in four Twickenham wards: 18,171 households, 4,571 no car (25.16%). Simulated agent, batches of 10, Beta posterior, stop at 95% credible width; 2,000 runs. Flat prior: width 0.20 -> 80 households, 92.6% coverage, 4.32 error; 0.10 -> 290, 94.3%, 2.02; 0.06 -> 810, 94.9%, 1.22. Width 0.10: Beta(10,30) 250, 95.6%, 1.90; Beta(24,16) 280, 60.3%, 4.28; Beta(240,160) 10, 0.0%, 34.0. Forced on: 35.1% after 1,000, 28.3% after 4,000. Lesson family: Bayesian updating, priors, credible intervals.',
    requiredMentions: [
      '18,171',
      '11,308',
      '11,945',
      'Twickenham Riverside',
      'West Twickenham',
      'St Margarets',
      'Whitton',
      'Bayesian updating',
      'credible interval'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045 car or van availability and usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area to LSOA lookup and LSOA 2021 to ward (May 2022) best-fit lookup, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: Twickenham, St Margarets, Whitton and Teddington.', url: 'https://api.postcodes.io/places?q=St%20Margarets' }
    ],
    rejectedClaims: [
      'A population for "Twickenham": no single official boundary; ward figures given separately, never summed.',
      'Real survey answers: none; every household answer is simulated at the published Census rate.',
      'Rugby, riverside or historic house claims: not read from a source; not claimed.',
      'That language models literally compute Bayesian posteriors: not claimed; the prompt-as-prior point is an analogy and is worded as one.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
