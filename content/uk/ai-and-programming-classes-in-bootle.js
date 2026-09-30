'use strict';
// Bootle (cg- town page, UK cluster Phase 10, towns band B, row 496). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how much data does a model need, and how can
// you tell when more data has stopped helping? (learning curves: test and training error against training-set size).
// Data (read 30 September 2026): Nomis Census 2021 output-area tables for Sefton (E08000014): TS045 car or van
// availability, TS017 household size, TS006 population density, TS044 accommodation type. 942 output areas, 123,018
// households, 32,443 with no car or van. Target: share of households with no car or van in each area. Features: log10
// density, one-person household share, detached share, purpose-built flat share.
// Our run (scratchpad btl/lc.py): 200 areas held out for testing, training sets drawn from the other 742, 30 repeats.
// Guessing the training mean: mean absolute error 13.88 points. Linear regression test / train MAE at 10 areas
// 13.66 / 5.22; 20 10.16 / 6.86; 50 8.94 / 8.07; 100 8.51 / 8.17; 200 8.38 / 8.12; 400 8.32 / 8.10; 700 8.31 / 8.18.
// Random forest (200 trees) 10 9.83 / 3.82; 20 8.85 / 3.36; 50 7.93 / 3.02; 100 7.56 / 2.79; 200 7.18 / 2.59;
// 400 6.89 / 2.50; 700 6.77 / 2.44.
// Lesson family: learning curves (error against training-set size, the train/test gap, plateau versus still learning).
// Place facts: Sefton (E08000014) TS001 279,233. ONS 2021 BUAs in the borough (published): Southport 94,440; Bootle
// (Sefton) 53,720; Crosby (Sefton) 50,215; Formby 22,890; Maghull 20,370; Litherland 18,750. postcodes.io (Sefton):
// Seaforth, Netherton, Orrell, Ford, Waterloo (suburban areas).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BOOTLE', label: 'Bootle', blurb: 'AI and programming classes for Bootle in Sefton, with a machine learning project that plots learning curves on Census areas.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-bootle',
  code: 'btl',
  accent: '#8B2A1A',
  accentRationale: 'Bootle: a brick red (8.6:1 contrast on white), chosen by hand as unused and far from the other Phase 10 accents',
  pageType: 'city',
  place: {
    name: 'Bootle',
    eyebrow: 'Bootle, Sefton, Merseyside',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'Southport', href: '/best-coding-and-ai-classes-in-southport' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bootle, Merseyside',
  title: 'AI and Programming Classes in Bootle, Merseyside | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding classes for learners aged 6 to 67 in Bootle, Seaforth, Netherton and Crosby. Your first lesson is free.',
  ogDescription: 'AI and programming classes for Bootle in Sefton, with a project that asks how many Census areas a model needs before extra data stops helping.',
  twitterDescription: 'Bootle, Merseyside: live AI, programming, Python and vibe coding lessons, ages 6 to 67. Free first lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Bootle, Merseyside',
    description: 'AI, machine learning, Python, vibe coding and maths for children, teenagers and adults in Bootle and the rest of Sefton, taught live over video with thinking skills first.'
  },

  h1: 'AI and programming classes in Bootle, Merseyside',
  capsuleQ: 'Which are the best AI and programming classes in Bootle?',
  capsule: 'The Bootle built-up area had 53,720 residents at the 2021 census, inside a Sefton borough of 279,233, on ONS figures. Seaforth, Netherton, Orrell and Ford are listed as suburban areas of the borough, with Crosby and Formby as separate towns. Our tutors, based in India, teach AI, programming, Python, vibe coding and maths on live video to anyone aged six to 67, either alone or in a class of five to ten who work at one level. Lessons begin with how to reason, so that a learner can test what a model or a chatbot claims. The Bootle project trains two models on Census areas of Sefton, a few at first and then hundreds, and draws the learning curve for each to see when more data stops paying. The opening lesson costs nothing and closes with a course recommendation; afterwards a group place is USD 100 a month and private lessons USD 150 a month.',
  lead: 'Everyone who builds a model eventually asks whether to collect more data. A learning curve answers with evidence: train on ten examples, then twenty, then fifty, and at every step measure the error on examples the model has never seen. If the curve is still falling, more data will help. If it has gone flat, the model has learned what it can and the effort belongs elsewhere. Sefton has 942 census output areas, enough for a learner in Bootle to draw this curve in Python for two very different models and watch them behave differently.',
  wa: 'Hello Modern Age Coders, I would like to book a free AI or programming lesson for a learner in Bootle.',

  picks: {
    eyebrow: 'Courses for Bootle',
    h2: 'AI, Python and thinking courses for Bootle learners',
    intro: 'Four starting points, sorted by age. Each begins with a live lesson that is free and booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: guess, check against something new, and say how wrong the guess was.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Tell an AI which Scratch game you want, then hunt for the cases it forgot.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning with real data, from a first model to the Sefton learning curves.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with AI assistance and tested line by line.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sefton borough',
      h2: 'Bootle, Crosby, Formby and the rest of Sefton',
      intro: 'Six built-up areas of the borough as the ONS publishes them, and the smaller places recorded around Bootle.',
      body: [
        { kind: 'table', caption: 'Selected built-up areas in Sefton, ONS 2021 census figures', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Southport', '94,440'],
          ['Bootle', '53,720'],
          ['Crosby', '50,215'],
          ['Formby', '22,890'],
          ['Maghull', '20,370'],
          ['Litherland', '18,750']
        ] },
        { kind: 'p', text: 'These rows are copied from the ONS release one by one and are not totalled; the borough figure of 279,233 is from census table TS001. Postcodes.io records Seaforth, Netherton, Orrell, Ford and Waterloo as suburban areas in Sefton. Schools here follow the national curriculum for England, and lessons with us pause for whichever holiday dates a family sends.' },
        { kind: 'callout', h3: 'Merseyside, the North West and our method', p: 'Other towns are listed on <a class="cg-inline-link" href="/coding-classes-in-merseyside">coding classes in Merseyside</a> and on <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">the North West England page</a>. Why we teach reasoning before tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bootle project',
      h2: 'Learning curves on 942 Sefton census areas',
      intro: 'Two models, seven training sizes, thirty repeats of each, and one chart that says when to stop collecting.',
      body: [
        { kind: 'p', text: 'From the Nomis API the learner downloads four Census 2021 tables for every output area in Sefton: car or van availability, household size, population density and accommodation type. The borough has 942 output areas and 123,018 households, of which 32,443 had no car or van. The task is to predict, for an area the model has not seen, the share of households without a car, using four clues: density, the share of one-person households, the share of detached homes and the share of purpose-built flats. Two hundred areas are set aside as a test. Training sets of growing size are drawn from the other 742, and the whole experiment is repeated thirty times with fresh random draws.' },
        { kind: 'table', caption: 'Mean absolute error in percentage points, average of 30 repeats, our Python run on Census 2021 data from Nomis', head: ['Areas used for training', 'Linear model, unseen areas', 'Linear model, training areas', 'Forest, unseen areas', 'Forest, training areas'], rows: [
          ['10', '13.66', '5.22', '9.83', '3.82'],
          ['20', '10.16', '6.86', '8.85', '3.36'],
          ['50', '8.94', '8.07', '7.93', '3.02'],
          ['100', '8.51', '8.17', '7.56', '2.79'],
          ['200', '8.38', '8.12', '7.18', '2.59'],
          ['400', '8.32', '8.10', '6.89', '2.50'],
          ['700', '8.31', '8.18', '6.77', '2.44']
        ] },
        { kind: 'p', text: 'A model that ignores the clues and always answers with the average of its training areas is wrong by 13.88 points, so that is the bar to beat. With ten areas the straight-line model barely beats it, at 13.66, while looking excellent on the ten areas it memorised. By 100 areas its two curves have nearly met, and from 200 to 700 the error on unseen areas moves only from 8.38 to 8.31. That flat line is a plateau: the linear model has learned all that a straight-line rule can express, and tripling the data buys almost nothing. The random forest of 200 trees tells a different story. It is still improving at 700 areas, 6.77 against 6.89 at 400, and the wide gap between its training error of 2.44 and its test error shows a flexible model that would use more data if Sefton had more areas to give.' },
        { kind: 'p', text: 'The repeats matter as much as the averages. At ten training areas the linear model\'s test error swung widely from one random draw to another, with a standard deviation above 5 points; at 700 it was 0.4. A single run on a small sample can flatter or insult a model by accident, which is why each point on a learning curve should be an average.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Guess a rule from three examples, then from ten, and count the misses on cards you have not yet turned over.' },
          { h3: 'Ages 11 to 15', p: 'Fit a line in Python to 20 Sefton areas and to 200, then chart both errors side by side.' },
          { h3: 'Ages 15 and up', p: 'Code the full experiment: held-out test set, repeats, two models and the finished learning curve.' }
        ] },
        { kind: 'callout', h3: 'What is published and what is ours', p: 'The household counts are Office for National Statistics Census 2021 data, fetched from Nomis under the Open Government Licence. The models, the error figures and the curves are our own work and appear in no official release. The project predicts a share for an area and makes no statement about any household or about why areas differ.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Data and AI',
      h2: 'What learning curves teach about vibe coding and AI agents',
      intro: 'Before asking for more data, find out which kind of trouble the model is in.',
      body: [
        { kind: 'table', caption: 'From the Sefton experiment to AI projects', head: ['Seen in the project', 'Carried into AI work'], rows: [
          ['Ten areas: 5.22 on training, 13.66 on unseen', 'A score on the training data proves very little'],
          ['Linear curve flat after about 200 areas', 'A plateau means change the model or the clues, not the volume'],
          ['Forest still falling at 700', 'A flexible model with a wide gap can use more examples'],
          ['Runs varied widely at small sizes', 'One run is an anecdote; repeat and average'],
          ['Always-the-average scored 13.88', 'Every model needs a simple baseline beside it']
        ] },
        { kind: 'p', text: 'In vibe coding a learner describes the experiment in plain English and an AI drafts the Python. Left alone, a chatbot will often train one model once and print a single accuracy figure. Our Bootle students ask for the held-out set, the baseline, the repeats and the curve, and they read the chart before believing the number. AI agents that train or tune models on someone\'s behalf need the same checks written into their instructions. Learners move on to agents after they can write Python on their own, usually at sixth-form age or as adults, and Copilot Studio agents are taught in one-to-one lessons only. Read more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents route for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office for National Statistics, Nomis and postcodes.io. We used their open data; the modelling, and any mistake in it, is ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From guessing games to machine learning',
    intro: 'Year groups are only a starting estimate. The trial lesson shows the right rung.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns, fair tests and checking a rule against new cases.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small programs made with an AI helper, then tested properly.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Models on real data, run next to GCSE and A level study.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI for work', p: 'Python from zero, then generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and evidence',
    h2: 'What is a learning curve in machine learning?',
    intro: 'A learning curve is a chart of a model\'s error against the amount of training data, drawn for both the training examples and unseen ones, and it shows whether more data would still help.',
    p1: 'On Sefton\'s 942 census areas a linear model stopped improving at around 200 training areas, with an error near 8.3 points, while a random forest was still getting better at 700 and had reached 6.77.',
    p2: 'A learner who has drawn both curves answers "should we gather more data?" with a chart, not a hunch.',
    closer: 'That habit of asking for evidence is what lets a Bootle teenager direct AI tools with confidence, and it is learned by programming the experiment yourself.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'Live lessons for Bootle, Seaforth and Netherton',
    intro: 'A laptop or desktop and a connection that holds a video call are the whole kit list.',
    cells: [
      { h3: 'Hands on the keys', p: 'The learner types, runs and debugs. The tutor follows on a shared screen and asks why each step works.' },
      { h3: 'Placed by the trial', p: 'The free session shows what the learner already knows, and we note any exam board then.' },
      { h3: 'A free start', p: 'No fee and no card for lesson one, which finishes with a course we would suggest.' },
      { h3: 'Classes by level', p: 'Five to ten learners from across the UK, grouped by what they can do, not by postcode.' },
      { h3: 'Twice weekly', p: 'Two lessons most weeks, with breaks in the school holidays you tell us about.' },
      { h3: 'Clock changes handled', p: 'When British Summer Time begins or ends, the tutor shifts and your hour stays put.' }
    ],
    spec: { title: 'Why a video call suits Sefton', p: 'A level-matched class needs several learners at the same stage who are free at the same hour. Drawing them from the whole country makes that possible.' }
  },

  fees: {
    h2: 'Fees for Bootle learners',
    intro: 'Bootle is billed at our international rates, the same ones used for every country except India.',
    first: 'A complete live lesson at no cost, with a course suggestion to finish.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live lessons each month with a tutor to yourself.',
    closer: 'We bill in US dollars and quote no pound figure. Nothing is invoiced until the trial has produced an agreed course and a fixed weekly time, and the pricing page covers holidays, absences and moving between group and private lessons.'
  },

  reviewsH2: 'Google reviews from Merseyside parents and other UK learners',

  book: {
    h2: 'Book a free lesson for Bootle',
    intro: 'Give us an age or year group and one interest. We might open with a guess-the-rule card game, an AI-built Scratch project, a first Python loop, or a tiny model trained on real areas.',
    success: 'Thank you. Your Bootle request has reached us.'
  },

  faq: {
    h2: 'Bootle questions',
    intro: 'Learning curves, the Sefton project, AI, programming and how the lessons are run.',
    items: [
      { q: 'What is the population of Bootle?', a: 'The ONS gives 53,720 residents for the Bootle built-up area at the 2021 census. Sefton borough as a whole had 279,233.' },
      { q: 'Can I take AI and programming classes online from Bootle?', a: 'You can. Everything is taught by live video, so Bootle, Seaforth, Netherton and the rest of Sefton are all covered, for ages 6 to 67.' },
      { q: 'What is a learning curve?', a: 'A chart of model error against training-set size, plotted for the training data and for unseen data. Its shape tells you whether collecting more examples is worth it.' },
      { q: 'What is overfitting?', a: 'A model overfits when it does far better on the examples it trained on than on new ones. In our run the linear model scored 5.22 on ten training areas and 13.66 on unseen areas.' },
      { q: 'What happens in the Bootle project?', a: 'Learners train a linear model and a random forest on Sefton census areas at seven training sizes, repeat each thirty times and chart the error.' },
      { q: 'Is vibe coding part of the lessons?', a: 'It is, for every age group. The learner states what the program should do, the AI writes a draft, and the learner proves whether it works.' },
      { q: 'At what stage do students build AI agents?', a: 'When their own Python is secure, which is commonly sixth form or adulthood. Copilot Studio agents are offered one-to-one only.' },
      { q: 'Do you support GCSE and A level computer science?', a: 'Yes, and maths too. We aim for understanding and make no promise about grades.' },
      { q: 'How much are lessons?', a: 'Lesson one is free. From there a group place is USD 100 per month and one-to-one tuition is USD 150 per month.' },
      { q: 'Are there lessons during school holidays?', a: 'Not unless you want them. Tell us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere on Merseyside',
    h2: 'More Merseyside and North West pages',
    html: 'Each of these towns has a project of its own: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-southport">Southport</a>, <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-birkenhead">Birkenhead</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-st-helens">St Helens</a>. The full list is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Bootle and Merseyside',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-btl .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3vw, 2.4rem); }
.cg-root.cg-btl .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-btl .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-btl .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-btl .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.015em; }
.cg-root.cg-btl .cg-table caption { font-style: italic; text-align: left; font-size: 0.88rem; }
.cg-root.cg-btl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-btl .cg-table th { font-weight: 700; font-size: 0.82rem; border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-btl .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-btl .cg-callout { border-radius: 10px; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Sefton (E08000014), Census 2021 TS001 usual residents 279,233. ONS 2021 BUAs in the borough (published): Southport 94,440; Bootle (Sefton) 53,720; Crosby (Sefton) 50,215; Formby 22,890; Maghull 20,370; Litherland 18,750. postcodes.io (Sefton): Seaforth, Netherton, Orrell, Ford, Waterloo (suburban areas).',
    localProject: 'Census 2021 OA tables for Sefton via Nomis (TS045, TS017, TS006, TS044): 942 OAs, 123,018 households, 32,443 no car or van. Predict no-car share from log density, one-person share, detached share, purpose-built flat share. 200 held-out areas, 30 repeats. Mean baseline MAE 13.88. Linear test/train: 10 13.66/5.22; 20 10.16/6.86; 50 8.94/8.07; 100 8.51/8.17; 200 8.38/8.12; 400 8.32/8.10; 700 8.31/8.18. Forest (200 trees): 10 9.83/3.82; 20 8.85/3.36; 50 7.93/3.02; 100 7.56/2.79; 200 7.18/2.59; 400 6.89/2.50; 700 6.77/2.44. Lesson family: learning curves.',
    requiredMentions: [
      '53,720',
      '123,018',
      '32,443',
      'Seaforth',
      'Netherton',
      'Crosby',
      '942',
      'learning curve',
      'plateau',
      '13.88'
    ],
    sources: [
      { claim: 'ONS Census 2021 tables TS045, TS017, TS006, TS044 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis Census 2021 TS045 car or van availability.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts045' },
      { claim: 'postcodes.io places: suburban areas in Sefton.', url: 'https://api.postcodes.io/places?q=Seaforth' }
    ],
    rejectedClaims: [
      'Why some areas have fewer cars: no cause is claimed and no household is described.',
      'Docks, port, transport or employer facts: not read from a source; not claimed.',
      'Sum of the built-up areas: not published as a total; not added.',
      'Model errors: our own calculation, labelled as ours, not an official statistic.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
