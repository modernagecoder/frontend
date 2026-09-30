'use strict';
// Gravesend (cg- town page, UK cluster Phase 10, towns band B, row 484). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how can a program work out what it should
// believe about a quantity it cannot compute directly? (Metropolis-Hastings MCMC: propose, compare, accept or reject;
// step size, acceptance rate, burn-in and effective sample size, on a beta-binomial model of overdispersed area shares).
// Data (read 30 September 2026): Nomis Census 2021 TS045 car or van availability (NM_2063_1) for all 327 output areas
// in Gravesham (E07000109): 41,733 households, 8,199 with no car or van (19.65%). Area shares run from 0.8% to 62.4%
// with a standard deviation of 13.15 points; if every household had the same 19.65% chance the spread would be 3.59.
// Our run (scratchpad gvd/mh.py): beta-binomial model, two unknowns (mu = typical share, phi = how alike areas are),
// flat priors on logit mu and log phi. Random-walk Metropolis-Hastings, 20,000 steps from mu 50%, phi 1, first 5,000
// discarded, numpy seed 1. Step 0.05: 59.1% accepted, effective sample size 1,424, mu 19.38% (95% interval 18.02 to
// 20.88), phi 9.7, implied spread 12.55 points. Step 0.005: 93.9% accepted, ESS 34 (first 200 draws still average 46.0%).
// Step 0.5: 2.8% accepted, ESS 290. Step 3.0: 0.1% accepted, ESS 12.
// Lesson family: Metropolis-Hastings / MCMC sampling. Screened: "Metropolis", "MCMC", "Markov chain Monte Carlo" 0 hits
// on any page (one course syllabus lists it). Monte Carlo simulation and bootstrap pages exist; this is posterior
// sampling with an accept/reject chain, a different method.
// Place facts: Gravesham Census 2021 TS001 106,900 (rounded ONS figure). ONS 2021 BUAs (published): Gravesend 58,105;
// Northfleet 29,900; Meopham 4,350; Istead Rise 3,395. postcodes.io suburban areas whose nearest OA centroid lies in the
// Gravesend BUA (our check): Chalk, Denton, Riverview Park, Singlewell, Windmill Hill, Westcourt. Perry Street and
// Rosherville fall in the Northfleet BUA; Shorne, Higham and Istead Rise are villages with their own BUAs.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GRAVESEND', label: 'Gravesend', blurb: 'AI and programming classes for Gravesend, with a project where a program samples its way to an answer it cannot calculate.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-gravesend',
  code: 'gvd',
  accent: '#6B4A0E',
  accentRationale: 'Gravesend: a dark ochre (7.59:1 contrast), hand-picked and unused elsewhere',
  pageType: 'city',
  place: {
    name: 'Gravesend',
    eyebrow: 'Gravesend, Gravesham, Kent',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'Dartford', href: '/best-coding-and-ai-classes-in-dartford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gravesend, England',
  title: 'AI and Programming Classes in Gravesend | Python, Ages 6 to 67',
  description: 'AI, programming, Python and vibe coding taught live online for Gravesend, Chalk, Denton, Singlewell and Riverview Park, ages 6 to 67. The first lesson is free.',
  ogDescription: 'AI and programming classes for Gravesend, with a Census project in which a Python sampler learns how much 327 neighbourhoods really differ.',
  twitterDescription: 'Gravesend AI, programming, Python and vibe coding classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Gravesend',
    description: 'AI, machine learning, programming, Python, vibe coding and maths, taught live online to children, teenagers and adults in Gravesend and the borough of Gravesham.'
  },

  h1: 'AI and programming classes in Gravesend',
  capsuleQ: 'Which AI and programming classes are best for learners in Gravesend?',
  capsule: 'Gravesend is a town in the Kent borough of Gravesham, and its built-up area held 58,105 residents at the 2021 census according to the ONS. Chalk, Denton, Singlewell, Riverview Park and Westcourt are recorded suburbs inside it, and Northfleet is a separate built-up area in the same borough. Children from six, teenagers and adults up to 67 learn AI, programming, Python, vibe coding and maths here in live video lessons led by tutors in India, in private sessions or in groups of five to ten at one level. We teach how to reason about uncertainty before we teach any AI tool. A free first lesson comes with a course recommendation; continuing is USD 100 a month in a group or USD 150 a month one-to-one. In the Gravesend project, a short Python program estimates how different the borough\'s 327 Census areas are from one another by a method widely used in statistics and AI research: propose a guess, compare it, keep it or throw it away.',
  lead: 'Some questions have no formula. Suppose you want to know not just the average of something across a borough but how much its neighbourhoods truly vary, after allowing for the fact that small samples wobble by chance. You can write down how plausible any particular answer is, given the data, yet you cannot solve for the full range of plausible answers on paper. The Metropolis-Hastings algorithm gets round this with a wandering guess. It takes a step, checks whether the new position explains the data better, and accepts or rejects the step by a simple rule. Where the wanderer spends its time turns out to be the answer. The Gravesend project builds one from scratch and then breaks it on purpose.',
  wa: 'Hello Modern Age Coders, could you arrange a free AI or programming lesson for a learner in Gravesend?',

  picks: {
    eyebrow: 'Gravesend course picks',
    h2: 'AI, Python and thinking courses for Gravesend',
    intro: 'One suggestion for each age band. All start with a live lesson that is free and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Learning how to think: guessing, checking, and deciding when to keep a guess.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children tell an AI what game to build in Scratch, then check that it behaves.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, with chance, sampling and models built by hand first.' },
      { course: 'statistics-probability-maths-course', band: 'Students and adults', note: 'Probability and statistics, the foundation under samplers like the one on this page.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gravesend and Gravesham',
      h2: 'Gravesend, Chalk, Denton, Singlewell and Riverview Park',
      intro: 'Four ONS built-up areas in Gravesham, and the suburbs recorded within Gravesend.',
      body: [
        { kind: 'table', caption: 'ONS built-up areas in Gravesham, 2021 census residents', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Gravesend', '58,105'],
          ['Northfleet', '29,900'],
          ['Meopham', '4,350'],
          ['Istead Rise', '3,395']
        ] },
        { kind: 'p', text: 'Each row is its own ONS figure; the table is not a breakdown of a total and we have not summed it. Chalk, Denton, Riverview Park, Singlewell, Windmill Hill and Westcourt appear on postcodes.io as suburban areas, and the Census output area closest to each is in the Gravesend built-up area. Perry Street and Rosherville are recorded suburbs too, but their closest output areas belong to Northfleet. Kent schools follow England\'s national curriculum through GCSE and A level, and our timetable gives way to whatever holidays you tell us about.' },
        { kind: 'callout', h3: 'Kent, the South East and thinking first', p: 'There are broader pages for <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Why we teach reasoning before tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Gravesend project',
      h2: 'Metropolis-Hastings: sampling an answer that cannot be calculated',
      intro: 'One Census table, two unknowns, 20,000 steps, and four step sizes.',
      body: [
        { kind: 'p', text: 'The learner downloads one Census 2021 table from Nomis: for each of Gravesham\'s 327 output areas, the number of households and the number with no car or van. Across the borough that is 8,199 of 41,733 households, or 19.65%. But the areas differ a great deal, from 0.8% to 62.4%, with a standard deviation of 13.15 percentage points. If every household in the borough simply had the same 19.65% chance, luck alone would produce a spread of about 3.59 points. The gap between 3.59 and 13.15 is called overdispersion, and it says the areas are really different, not just noisy.' },
        { kind: 'p', text: 'A beta-binomial model describes this with two unknowns: a typical share, and a number for how alike the areas are. The sampler starts from a deliberately bad guess, a typical share of 50%. At each step it nudges both unknowns by a small random amount, works out how well the new pair explains all 327 areas, and accepts the move always if it is better and sometimes if it is worse. It runs 20,000 steps and the first 5,000, the burn-in, are thrown away. The only thing the learner changes between runs is the size of the nudge.' },
        { kind: 'table', caption: 'Four runs of our Metropolis-Hastings sampler on Gravesham\'s Census areas, 15,000 kept steps each', head: ['Step size', 'Moves accepted', 'Worth about this many independent draws'], rows: [
          ['0.005 (tiny)', '93.9%', '34'],
          ['0.05', '59.1%', '1,424'],
          ['0.5', '2.8%', '290'],
          ['3.0 (huge)', '0.1%', '12']
        ] },
        { kind: 'p', text: 'A high acceptance rate sounds good and is not. With tiny steps nearly every move is accepted, but the sampler shuffles along so slowly that its first 200 guesses still average 46.0% and 15,000 steps carry the information of only 34 independent draws. With huge steps almost every proposal lands somewhere absurd and is refused, so the chain sits still. The middle setting does the job: a typical share of 19.38%, with 95% of the kept draws between 18.02% and 20.88%, and a model that predicts a spread of 12.55 points between areas, close to the 13.15 observed. The sampler has measured how unlike one another Gravesham\'s neighbourhoods are, and it has also shown the learner how easily a badly tuned one reports nonsense with a straight face.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a hot-and-cold game where a step towards "warmer" is always taken and a step towards "colder" only on a dice roll.' },
          { h3: 'Ages 11 to 15', p: 'Code a one-unknown sampler in Python for a biased coin and plot the path of its guesses.' },
          { h3: 'Ages 15 and up', p: 'Fit the two-unknown model to all 327 areas, vary the step size and compare acceptance rates.' }
        ] },
        { kind: 'callout', h3: 'Source of the figures', p: 'Household counts come from the Office for National Statistics Census 2021, table TS045, through Nomis, under the Open Government Licence. The model, the sampler and every number it produced are our own, and the project says nothing about why any area has the share it has.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Sampling and AI',
      h2: 'What a sampler teaches about vibe coding and AI agents',
      intro: 'Running without an error is not the same as being right.',
      body: [
        { kind: 'table', caption: 'From the Gravesend sampler to AI-written code', head: ['In the sampling project', 'When an AI writes or runs the analysis'], rows: [
          ['93.9% accepted, yet only 34 useful draws', 'A healthy-looking number can hide a failed run'],
          ['First 200 guesses averaged 46.0%', 'Check that early output has been discarded'],
          ['Step size changed everything', 'Ask which settings the AI chose, and why'],
          ['Spread of 3.59 expected, 13.15 seen', 'Compare the model with the raw data'],
          ['Four runs, not one', 'Repeat with different settings before believing'],
        ] },
        { kind: 'p', text: 'An AI assistant will write a working Metropolis-Hastings sampler in seconds, pick a step size without comment, and print a confident result. Every one of the four runs above finished without an error message. In vibe coding the learner explains the goal and the AI supplies code, and Gravesend students are taught that the explaining includes the checks: acceptance rate, burn-in, a plot of the chain. AI agents that run analyses unattended make the problem sharper, because no one is looking at the plot. Our learners build agents once they write Python confidently by themselves, in most cases from sixteen, and Copilot Studio agents are covered in one-to-one lessons only. More is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK students\' AI agents page</a> and on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither the ONS, Nomis nor postcodes.io has any part in this page. We use the data they release openly and take responsibility for what we did with it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Levels',
    h2: 'From hot-and-cold games to samplers in Python',
    intro: 'Ages and years overlap. We settle the level in the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Guess, check, keep or discard: reasoning with chance.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and tools, drafted with AI and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Probability, models and sampling beside GCSE and A level study.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Statistics and AI', p: 'Probability, inference, generative AI and agents.', courses: ['statistics-probability-maths-course', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and uncertainty',
    h2: 'What is the Metropolis-Hastings algorithm, and how does MCMC sampling work?',
    intro: 'The Metropolis-Hastings algorithm is a way of drawing samples from a distribution you can score but cannot solve: it proposes a random step from the current guess, always accepts a step to a more plausible value and accepts a step to a less plausible one with a probability equal to the ratio of the two scores (for an even-handed step like ours; the Hastings correction adjusts for lopsided proposals), which is the accept-or-reject loop at the heart of MCMC, or Markov chain Monte Carlo.',
    p1: 'Fitted to 327 Census areas in Gravesham, a sampler with a step size of 0.05 accepted 59.1% of its moves and settled on a typical no-car share of 19.38%, while a step size of 0.005 accepted 93.9% and produced the equivalent of only 34 independent draws.',
    p2: 'Learners who have tuned one ask of any AI-run analysis: which settings were used, and what would show that it had failed?',
    closer: 'Gravesend teenagers who have written a sampler line by line can tell a result from a rumour, and that is a skill which grows out of coding, not out of asking a chatbot.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The practical side',
    h2: 'Online across Chalk, Denton and Singlewell',
    intro: 'Bring a computer that has a real keyboard, and a connection that can carry video.',
    cells: [
      { h3: 'Learners write the code', p: 'Tutors watch a shared screen, ask what the learner thinks will happen, and let them find out.' },
      { h3: 'We find the level', p: 'The opening lesson reveals what is solid and what is shaky, and we record the exam board where relevant.' },
      { h3: 'A free first lesson', p: 'No fee is charged for it, and you leave with a named course.' },
      { h3: 'Groups at one stage', p: 'Five to ten learners from across Britain, all at the same point.' },
      { h3: 'Twice a week', p: 'Lessons pause whenever schools are on holiday.' },
      { h3: 'One fixed time', p: 'Your lesson hour stays put when British clocks change.' }
    ],
    spec: { title: 'Why not in person', p: 'To teach a group well, every learner in it must be at the same stage and free at the same time. One borough cannot fill such a class at every level, but the whole of the UK can.' }
  },

  fees: {
    h2: 'What Gravesend learners pay',
    intro: 'Gravesend falls under our international pricing, which applies to all countries other than India.',
    first: 'A complete free lesson, with a course suggestion at the end.',
    group: 'In the region of eight live group lessons a month.',
    private: 'In the region of eight live private lessons a month.',
    closer: 'We price in US dollars only, and there is no pound sterling list. You are invoiced after the free lesson, when the course and the weekly hour have been chosen. Holidays, absences and swapping between group and private are dealt with on the pricing page.'
  },

  reviewsH2: 'Google reviews written by UK parents and learners, Kent families among them',

  book: {
    h2: 'Book a free lesson in Gravesend',
    intro: 'Tell us how old the learner is, or their school year, and what they like doing. We might use the trial for a guessing game with rules, a Scratch project built with an AI, first steps in Python, or a tiny sampler for a biased coin.',
    success: 'Thanks. Your Gravesend request has arrived.'
  },

  faq: {
    h2: 'Gravesend questions',
    intro: 'Sampling, the Census project, vibe coding, agents, exams and fees.',
    items: [
      { q: 'What is the population of Gravesend?', a: 'At the 2021 census the ONS put 58,105 residents in the Gravesend built-up area.' },
      { q: 'Are there AI and programming classes for Gravesend?', a: 'Yes, taught live on video. Learners aged 6 to 67 join from Chalk, Denton, Singlewell, Riverview Park, Northfleet and the villages of Gravesham.' },
      { q: 'What is an acceptance rate in MCMC?', a: 'The share of proposed moves the sampler accepts. Very high usually means the steps are too small to explore; very low means they are too big. In our test 59.1% worked well, and 93.9% and 0.1% both worked badly.' },
      { q: 'What is overdispersion?', a: 'More variation between groups than chance alone would produce. No-car shares across Gravesham\'s 327 areas have a spread of 13.15 points where luck alone predicts about 3.59.' },
      { q: 'What is the Gravesend project?', a: 'Writing a Metropolis-Hastings sampler in Python, fitting a beta-binomial model to Census counts for 327 areas, and seeing how the step size decides whether the result can be trusted.' },
      { q: 'Does vibe coding feature in lessons?', a: 'It does. The learner states the goal and the checks, the AI drafts the code, and the learner verifies it.' },
      { q: 'When are AI agents introduced?', a: 'After a learner writes Python confidently alone, usually from sixteen. Copilot Studio agents are limited to private lessons.' },
      { q: 'Do you teach what GCSE and A level computer science and maths need?', a: 'Yes, topic by topic and for understanding. We give no guarantee of a grade.' },
      { q: 'How much are lessons?', a: 'Lesson one is free. After it, the monthly fee is USD 100 for a group place and USD 150 for private tuition.' },
      { q: 'Do you teach through the school holidays?', a: 'Only if you want us to. Otherwise we stop for the dates you send.' }
    ]
  },

  next: {
    eyebrow: 'More towns',
    h2: 'More Kent pages',
    html: 'Other towns have their own projects: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-dartford">Dartford</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-chatham">Chatham</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rochester">Rochester</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every place we cover.',
    waLabel: 'Send a WhatsApp message'
  },

  footerHeading: 'Gravesend and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-gvd .cg-hero-grid { align-items: end; gap: clamp(1.3rem, 3.6vw, 3.1rem); }
.cg-root.cg-gvd .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-gvd .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-gvd .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gvd .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.018em; }
.cg-root.cg-gvd .cg-table caption { text-align: left; font-size: 0.91rem; font-weight: 600; padding-bottom: 0.4rem; }
.cg-root.cg-gvd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gvd .cg-table th { border-bottom: 3px solid var(--cg-accent); font-size: 0.83rem; font-weight: 700; }
.cg-root.cg-gvd .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-gvd .cg-callout { border-left-width: 2px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'Gravesham (E07000109), Kent. ONS 2021 BUAs (published): Gravesend 58,105; Northfleet 29,900; Meopham 4,350; Istead Rise 3,395. postcodes.io suburban areas (nearest OA centroid in the Gravesend BUA, our check): Chalk, Denton, Riverview Park, Singlewell, Windmill Hill, Westcourt; Perry Street and Rosherville fall in the Northfleet BUA.',
    localProject: 'Census 2021 TS045 for 327 Gravesham OAs: 41,733 households, 8,199 no car or van (19.65%); OA share sd 13.15 points (0.8% to 62.4%); binomial-only expected sd 3.59. Beta-binomial, flat priors on logit mu and log phi; random-walk Metropolis-Hastings 20,000 steps, burn-in 5,000, start mu 50%. Step 0.05: 59.1% accepted, ESS 1,424, mu 19.38% (18.02 to 20.88), phi 9.7, implied sd 12.55. Step 0.005: 93.9%, ESS 34, first 200 draws mean 46.0%. Step 0.5: 2.8%, ESS 290. Step 3.0: 0.1%, ESS 12. Lesson family: Metropolis-Hastings MCMC.',
    requiredMentions: [
      'Metropolis-Hastings',
      'beta-binomial',
      'overdispersion',
      '58,105',
      '41,733',
      '8,199',
      '59.1%',
      'Singlewell',
      'Riverview Park',
      'Westcourt'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045 car or van availability at output area level via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Area (2021) to Built-up Area (2022) lookup and population-weighted centroids, Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas and villages in Gravesham.', url: 'https://api.postcodes.io/places?q=Singlewell' }
    ],
    rejectedClaims: [
      'Why car availability differs between areas: no cause claimed; the project measures variation only.',
      'Naming the areas with the highest or lowest shares: not done.',
      'River, port, ferry or historical claims about Gravesend: not read from a source; not claimed.',
      'Northfleet, Perry Street or Rosherville as part of Gravesend: they fall in the separate Northfleet built-up area.',
      'Sum of the four built-up areas: not added.',
      'That the sampler output is an official statistic: it is our model on published counts.',
      'Exam results and sterling prices: none.'
    ]
  }
};
