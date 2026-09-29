'use strict';
// Gosport (cg- town page, UK cluster Phase 8, towns band A, row 381). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when a program says it is 95% sure,
// is it right 95% of the time? (calibration of stated confidence, tested against a known truth).
// Data (read 29 September 2026): Nomis API, Census 2021 TS045 cars or vans (NM_2063_1), all 279 output areas in Gosport
// borough (E07000088), one batched call: 35,912 households, 7,420 with no car or van = 20.66% (the borough table gives
// 7,418 of 35,922, 20.65%; small differences come from the ONS's deliberate small adjustments to counts).
// Our run (scratchpad gsp/boot.py): a simulated survey picks k output areas at random, estimates the no-car share, and
// builds a 95% bootstrap percentile interval (1,000 resamples). Repeated 1,000 times per k, checked against 20.66%.
// Share of "95%" intervals containing the truth / mean width in percentage points / median error: k=5 80.8% / 17.11 /
// 3.59; k=10 88.9% / 13.78 / 2.51; k=20 93.6% / 10.14 / 1.78; k=40 93.7% / 7.44 / 1.31; k=80 96.8% / 5.35 / 0.80. Example
// survey of 20 areas (seed 7): 21.6%, interval 14.9% to 29.0%. At k=80 the survey takes 29% of all areas, so resampling
// with replacement overstates the spread and coverage goes above 95%.
// Lesson family: calibration of stated confidence (coverage testing against known truth), small-sample over-confidence,
// finite-population effect. Tallaght owns bootstrap resampling as a way to show uncertainty (no coverage test); Milton
// Keynes owns Monte Carlo error; Kilkenny owns ranges without margins.
// Place facts: Gosport (E07000088) TS001 81,952; ONS 2021 Gosport BUA (published) 70,110; Lee-on-the-Solent straddles.
// postcodes.io suburban areas in Gosport district: Alverstoke, Bridgemary, Rowner, Elson, Forton, Brockhurst, Privett,
// Clayhall.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GOSPORT', label: 'Gosport', blurb: 'Coding and AI classes for Gosport, with a project that tests whether a "95% sure" answer is really right 95% of the time.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-gosport',
  code: 'gsp',
  accent: '#38306B',
  accentRationale: 'Gosport: a deep dusk indigo (9.38:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Gosport',
    eyebrow: 'Gosport, Hampshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Hampshire', href: '/coding-classes-in-hampshire' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gosport, England',
  title: 'Coding and AI Classes in Gosport | Python, Vibe Coding, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding classes for Gosport, Alverstoke, Bridgemary and Rowner learners aged 6 to 67, private or in groups. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Gosport, and a Python project that checks whether "95% sure" really means right 95% of the time.',
  twitterDescription: 'Gosport coding, AI, Python and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Gosport',
    description: 'Online coding, AI, Python, vibe coding and mathematics for children, teenagers and adults in Gosport borough, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Gosport',
  capsuleQ: 'Where can Gosport learners find the best coding and AI classes?',
  capsule: 'Gosport borough had 81,952 usual residents at the 2021 census, and the ONS gives the Gosport built-up area 70,110; Alverstoke, Bridgemary, Rowner, Elson and Forton are among the neighbourhoods inside the borough. People there aged 6 to 67 can take coding, AI, Python, vibe coding and maths with our tutors in India, live on video, one-to-one or in a class of five to ten who share a level. We teach reasoning first, so learners can judge an AI answer rather than just accept it. The first lesson is free and ends with a suggested course. For Gosport the project asks a question that matters more every year: when a program says it is 95% sure, how often is it actually right? Continuing lessons cost USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Surveys, forecasts and AI tools all like to attach a confidence to their answers: "between 15% and 29%, with 95% confidence". Very few people ever check whether that confidence is earned. Gosport offers a rare chance to do exactly that, because the 2021 census counted every household in all 279 of the borough\'s output areas, so the true answer is known. This project runs thousands of pretend surveys in Python, each looking at only a handful of areas and stating a 95% range, and counts how often the range really catches the truth. The answer depends heavily on how much data the survey had, and small surveys turn out to be over-confident.',
  wa: 'Hello Modern Age Coders, can we book a free coding or AI lesson for a Gosport learner?',

  picks: {
    eyebrow: 'Gosport course picks',
    h2: 'Courses for thinking, vibe coding and AI in Gosport',
    intro: 'Choose using age and interests. Each course starts with a free live lesson, and booking needs no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: estimating, checking guesses and saying how sure you are.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps described to an AI and tested by the learner.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning and data in Python, including honest uncertainty like this project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI systems estimate, predict and act, and how to check their confidence.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gosport borough',
      h2: 'Gosport and its neighbourhoods',
      intro: 'The census figures behind the project, and the districts recorded inside the borough.',
      body: [
        { kind: 'table', caption: 'Gosport at the 2021 census: ONS figures and our output-area sums', head: ['Measure', 'Count'], rows: [
          ['Usual residents in the borough', '81,952'],
          ['People in the Gosport built-up area', '70,110'],
          ['Output areas in the borough', '279'],
          ['Households across those areas (our sum)', '35,912'],
          ['Of which with no car or van (our sum)', '7,420']
        ] },
        { kind: 'p', text: 'The borough and the built-up area follow different lines, so the totals differ, and Lee-on-the-Solent is left out because its built-up area runs into the next district. Adding up the output areas gives slightly different household counts from the borough table, 35,912 against 35,922, because the ONS makes small deliberate adjustments to counts to protect privacy. Alverstoke, Bridgemary, Rowner, Elson, Forton, Brockhurst, Privett and Clayhall are all recorded within Gosport district. Hampshire schools follow the national curriculum for England; send us your holiday dates and we will steer lessons around them.' },
        { kind: 'callout', h3: 'Hampshire, the region and our approach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-hampshire">coding classes in Hampshire</a> for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a> for the region. Our case for reasoning ahead of prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Gosport project',
      h2: 'Is "95% sure" really right 95% of the time?',
      intro: 'Run a thousand pretend surveys, give each a 95% range, and count how often the range catches the known truth.',
      body: [
        { kind: 'p', text: 'The learner downloads Census 2021 table TS045 from the Nomis API for all 279 output areas in Gosport. Across the whole borough, 7,420 of 35,912 households have no car or van: 20.66%. That is the truth the surveys are trying to find. Each pretend survey picks a few output areas at random and estimates the share from those alone. To say how sure it is, the program uses a technique called the bootstrap: it resamples the chosen areas 1,000 times, recalculates the share each time, and takes the middle 95% of those results as its range. One survey of 20 areas, for example, estimated 21.6% with a range of 14.9% to 29.0%. That range does contain 20.66%. The real question is how often that happens.' },
        { kind: 'table', caption: '1,000 pretend surveys at each size, checked against the census truth of 20.66%, our Python run, 29 September 2026', head: ['Output areas surveyed', 'Ranges that caught the truth', 'Average width of range', 'Typical miss of the estimate'], rows: [
          ['5', '80.8%', '17.11 points', '3.59 points'],
          ['10', '88.9%', '13.78 points', '2.51 points'],
          ['20', '93.6%', '10.14 points', '1.78 points'],
          ['40', '93.7%', '7.44 points', '1.31 points'],
          ['80', '96.8%', '5.35 points', '0.80 points']
        ] },
        { kind: 'p', text: 'Every one of these ranges was labelled 95%. With only five areas, just 80.8% of them caught the truth: the method was over-confident, drawing ranges too narrow for the little evidence it had. Checking a stated confidence against reality like this is called calibration, and a well-calibrated method would score close to 95% at every size. Around 20 to 40 areas the bootstrap gets close, at 93.6% and 93.7%. At 80 areas it overshoots to 96.8%, for a reason worth understanding: 80 areas is more than a quarter of the whole borough, and the bootstrap assumes the areas were picked from an endless supply, so it overstates how much a larger survey could vary.' },
        { kind: 'p', text: 'The ranges also shrink as the survey grows, from 17.11 points wide with five areas to 5.35 with eighty, and the typical miss of the estimate falls from 3.59 points to 0.80. But the most useful lesson is the first row. A confident-sounding range built from very little data can be wrong one time in five while still calling itself 95%.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Guess how many sweets are in a jar, give a range you are "sure" about, and see how often the class is right.' },
          { h3: 'Ages 11 to 15', p: 'Draw random samples of output areas in Python and watch the estimate wobble around the truth.' },
          { h3: 'Ages 15 and up', p: 'Code the bootstrap, run the coverage test and explain why 80 areas overshoots 95%.' }
        ] },
        { kind: 'callout', h3: 'Census counts, our surveys', p: 'The household counts are Census 2021 figures from the Office for National Statistics, published through Nomis. The pretend surveys, the bootstrap ranges and every percentage in the tables are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Confidence and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Confidence is a claim, and claims can be tested.',
      body: [
        { kind: 'table', caption: 'From the Gosport surveys to AI tools', head: ['In the survey project', 'With AI tools and agents'], rows: [
          ['Five areas gave "95%" ranges that were right 80.8% of the time', 'Sounding sure is not the same as being right'],
          ['The truth was known, so confidence could be checked', 'Test tools on questions where you know the answer'],
          ['More data, narrower and more honest ranges', 'Ask what evidence an answer rests on'],
          ['80 areas overshot for a mathematical reason', 'Understand a method before trusting its numbers'],
          ['Ranges, not single numbers', 'Ask for uncertainty, not just an answer']
        ] },
        { kind: 'p', text: 'AI chatbots usually give a single, fluent answer with no range at all, and their tone sounds equally certain whether they are right or wrong. In our vibe coding lessons, where a learner describes a program and an AI writes it, the Gosport project trains a simple habit: test the output on cases where the answer is already known before relying on it elsewhere. AI agents that make decisions over several steps need the same discipline built in, such as checking results against known values and stopping when confidence is low. Agent building comes after Python for older teenagers and adults, and Copilot Studio agents are taught in one-to-one lessons only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is not linked to the Office for National Statistics, Nomis or postcodes.io. The counts and place names are theirs; the simulations, and any mistakes in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From guessing jars to calibrated models',
    intro: 'We start from the school year and let the free lesson settle the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimates, ranges and checking a guess against the answer.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, data and AI', p: 'Sampling, simulation and uncertainty alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Trustworthy AI', p: 'Evaluation, uncertainty, language models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and certainty',
    h2: 'Can you trust how confident an AI sounds?',
    intro: 'Not on its own: confidence has to be checked against answers you already know.',
    p1: 'In the Gosport project a method that called itself 95% sure was right only 80.8% of the time when it had little data. AI tools can be over-confident in the same way, and they rarely show a range at all.',
    p2: 'Learners who have measured calibration themselves stop taking confidence at face value and start asking what the answer rests on.',
    closer: 'A Gosport teenager who can test whether confidence is earned will get far more from AI, which makes learning to code in 2026 well worthwhile.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Rowner to Alverstoke, online',
    intro: 'All that a Gosport home needs is a computer and a connection that handles video.',
    cells: [
      { h3: 'Learners drive the code', p: 'Students type, prompt and run their own programs while the tutor follows on screen and poses questions.' },
      { h3: 'Placed by the trial', p: 'Year group is only a starting guess; the free session decides the first topic, and exam boards are noted.' },
      { h3: 'Zero cost to begin', p: 'The introductory lesson is free and closes with a recommendation.' },
      { h3: 'Level-matched groups', p: 'Classes hold five to ten UK learners at a similar stage.' },
      { h3: 'Twice every week', p: 'School holidays are lesson-free.' },
      { h3: 'Reliable hours', p: 'Tutors shift with UK clock changes, so the slot you pick stays the same.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at one level who are all free at the same time rarely live near each other. Online, they can share a class wherever they are.' }
  },

  fees: {
    h2: 'Gosport fees',
    intro: 'Gosport learners pay the international rate we use in every country outside India.',
    first: 'A full first lesson at no charge, finishing with our course suggestion.',
    group: 'Roughly eight live group lessons per month.',
    private: 'Roughly eight live private lessons per month.',
    closer: 'Prices are set in US dollars, not sterling. Billing begins only after the trial has agreed a course and a weekly time, and the pricing page covers holidays away, missed sessions and switching between group and private.'
  },

  reviewsH2: 'Hampshire families and others around the UK, on Google',

  book: {
    h2: 'Book a free Gosport lesson',
    intro: 'Send an age or school year and a favourite hobby. The trial could be an estimation game, a Scratch game built with an AI, a first Python program, or a mini survey simulation.',
    success: 'Thank you. Your Gosport request is in.'
  },

  faq: {
    h2: 'Gosport questions',
    intro: 'The confidence project, vibe coding, agents, fees and timing.',
    items: [
      { q: 'What is the population of Gosport?', a: 'The 2021 census counted 81,952 usual residents in Gosport borough, and the ONS gives the built-up area 70,110.' },
      { q: 'Do you teach coding and AI in Gosport?', a: 'Yes, through live online lessons open to learners aged 6 to 67 anywhere in the borough.' },
      { q: 'What is a confidence interval?', a: 'A range that a method says contains the true value with a stated probability, such as 95%; the Gosport project checks whether that probability is actually met.' },
      { q: 'What is the Gosport project?', a: 'Learners run thousands of pretend surveys on the borough\'s census data, give each a 95% range with the bootstrap, and count how often the range really contains the truth.' },
      { q: 'Is vibe coding included?', a: 'Yes, for children, teenagers and adults: the learner plans, the AI drafts, and the learner tests.' },
      { q: 'When do learners start on AI agents?', a: 'After some Python, usually in the later teens or as adults; Copilot Studio agents are private tuition only.' },
      { q: 'Is there a classroom?', a: 'No, all lessons are online.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, in computer science and maths, working on understanding; grades are never promised.' },
      { q: 'What are the fees?', a: 'The opening lesson is free, then USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'Are there lessons during school holidays?', a: 'No, lessons pause. Let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Hampshire and South East pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a> and <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a> each have a page and project of their own, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hastings">Hastings</a> runs another data project in the region. Our <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gosport and Hampshire',
  footerPlaces: [
    { href: '/coding-classes-in-hampshire', label: 'Hampshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-gsp .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-gsp .cg-hero h1 { font-weight: 790; letter-spacing: -0.029em; line-height: 1.02; }
.cg-root.cg-gsp .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-gsp .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gsp .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.021em; }
.cg-root.cg-gsp .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-gsp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gsp .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-gsp .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-gsp .cg-callout { border-left-width: 4px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Gosport (E07000088), Census 2021 TS001 usual residents 81,952. ONS 2021 Gosport BUA (published) 70,110; Lee-on-the-Solent straddles. TS045 over 279 OAs: 35,912 households, 7,420 no car (20.66%); borough table 7,418 of 35,922. postcodes.io suburban areas in Gosport district: Alverstoke, Bridgemary, Rowner, Elson, Forton, Brockhurst, Privett, Clayhall.',
    localProject: 'Calibration test of 95% bootstrap intervals (1,000 resamples) from simulated surveys of k OAs, 1,000 surveys per k, truth 20.66%: coverage k=5 80.8, 10 88.9, 20 93.6, 40 93.7, 80 96.8; mean width 17.11 / 13.78 / 10.14 / 7.44 / 5.35 points; median error 3.59 / 2.51 / 1.78 / 1.31 / 0.80. Example k=20: 21.6%, 14.9 to 29.0. Lesson family: calibration of stated confidence, small-sample over-confidence, finite-population effect.',
    requiredMentions: [
      '81,952',
      '70,110',
      '35,912',
      'Alverstoke',
      'Bridgemary',
      'Rowner',
      'Elson',
      'bootstrap',
      'confidence interval',
      'calibration'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS045 cars or vans for Gosport output areas, and TS001 usual residents, via the Nomis API.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2063_1.data.csv?geography=E07000088&measures=20100' },
      { claim: 'ONS, protecting personal data in Census 2021 results (small deliberate adjustments to counts).', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/methodologies/protectingpersonaldataincensus2021results' },
      { claim: 'postcodes.io places: suburban areas within Gosport district, Hampshire.', url: 'https://api.postcodes.io/places?q=Alverstoke' }
    ],
    rejectedClaims: [
      'Naval or harbour history: not read from a source; not claimed.',
      'Why some areas have fewer cars: not measured; not claimed.',
      'How commercial AI systems report confidence: described only in general terms.',
      'Lee-on-the-Solent population: built-up area crosses the boundary; not tabled.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
