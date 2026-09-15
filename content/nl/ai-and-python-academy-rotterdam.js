'use strict';
// AI and Python Academy, Rotterdam (ag- spoke of the Dutch academy hub).
// Spine: forecasting, and checking forecasts. The Port of Rotterdam
// Authority's Digital Report 2025 describes an AI fairway traffic planning
// tool that forecasts incoming and outgoing vessels over the next 24 hours,
// trained on AIS data, vessel visit data, restriction rules and weather, and
// says honestly that departures are hard to predict from open data and that
// the gains are still being quantified. A 2023 paper uses Rotterdam for
// truck time-slot prediction; Jan Tinbergen, who taught at the Netherlands
// School of Economics in Rotterdam, built the first national macroeconomic
// model in 1936. The lesson: write the forecast down, then score it against
// what happened, separately for each lead time (invented worked example).
// The cg Rotterdam pages own the port's throughput figures; Overijssel owns
// per-year probabilities over a horizon. Neither is reused.

module.exports = {
  cluster: 'ag',
  slug: 'ai-and-python-academy-rotterdam',
  code: 'art',
  accent: '#932412',
  accentRationale: 'Rotterdam academy: a brick red from the solver, more than sixteen units from every page it links to, the Rotterdam, Centrum, Schiedam and Zuid-Holland pages and the other academy pages among them, with an unlinked municipality as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'AI and Python Academy, Rotterdam',
  title: 'AI and Python Academy, Rotterdam | Build Real AI',
  description: 'Rotterdam\'s port forecasts its ships 24 hours ahead. Learn to build forecasts and check them against what really happened, live online for ages 6 to 67.',
  ogDescription: 'A fairway planner that predicts a day of ship movements, a port report honest enough to say what it cannot yet predict, and the first national economic model. The AI track for Rotterdam, live online.',
  twitterDescription: 'Forecasts, and the habit of checking them. Live online Python, data and models for Rotterdam, ages 6 to 67.',
  pageName: 'AI and Python Academy for Students in Rotterdam',
  webPageDescription: 'Live online Python, data, machine learning and AI agent classes for learners in Rotterdam aged 6 to 67, built around making forecasts and scoring them against what happened.',
  courseDescription: 'A live online programme for learners in Rotterdam aged 6 to 67: Python by hand, data, forecasting models with errors measured at every lead time, and agents, taught with the port\'s own forecasting tools as the example.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Rotterdam',
  navLinks: [
    { href: '#port', label: 'The port forecast' },
    { href: '#score', label: 'Scoring it' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Rotterdam &middot; Live online &middot; Ages 6 to 67',
  h1: 'AI and Python classes in Rotterdam, where forecasts get checked',
  lede: 'Every day the Port of Rotterdam needs to know which ships will come in and go out, and when. Its Authority now has an AI tool for that: trained on ship positions, past port calls, basic navigation rules and the weather, it forecasts the traffic of the next 24 hours and advises the Harbour Master on planning the fairway. What makes the port\'s own account worth reading is its honesty. The tool is good at some things and struggles with others, departures in particular, and the port says it is still working to quantify what the forecasts actually gain. That is the most useful lesson in applied AI: a forecast is a claim about the future, and it is worth only what you can show about it afterwards. Rotterdam has a long history with that lesson; the economist who built the first national economic model taught here. This page teaches AI and Python, from a first program to forecasting models that are scored honestly, live online for learners in Rotterdam.',
  secondaryCta: { href: '#score', label: 'See how a forecast is scored' },
  wa: 'Hello Modern Age Coders, I want a free class for a learner in Rotterdam, on the AI and Python track.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ learners so far &middot; every lesson with a real teacher',
  spec: [
    ['Who', 'Rotterdam learners, 6 to 67'],
    ['What', 'Python, data, forecasts, agents'],
    ['Habit', 'Every prediction scored against the outcome'],
    ['Format', 'Live online, never recorded'],
    ['Group', 'Five to ten, or a private teacher'],
    ['Hours', 'Afternoons, evenings, weekends'],
    ['Language', 'English'],
    ['Begin with', 'A free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches a live online AI and Python track to learners in Rotterdam aged six to sixty-seven. It starts with Python typed by hand, moves through data to forecasting and prediction models, and ends with agents, and it treats every forecast the same way: write it down before the event, then measure how wrong it was, separately for each lead time. The example throughout is local: the Port of Rotterdam Authority\'s AI tool that forecasts a day of ship movements, and the port\'s own frank account of its limits. Classes are taught in English to groups of five to ten at one level, or privately. The opening lesson is free; after it, group classes cost USD 100 a month and private tuition USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Rotterdam learners who like to predict things',
    lede: 'A game-maker\'s first course for a child, a data course for a teenager who wants to test predictions, and a full data science course for students and adults. Each card opens the course page with syllabus and timetable.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'RTM / 01', title: 'Scratch Coding for Kids', note: 'A child builds a harbour game in which boats arrive on a timer, then guesses when the next one will come and counts how often the guess was right.' },
      { course: 'data-science-course-for-teens-python-data', code: 'RTM / 02', title: 'Data Science for Teens', note: 'Real data in Python, a first forecast, and the step most beginners skip: comparing every prediction with what actually happened.' },
      { course: 'data-science-complete-masterclass-college', code: 'RTM / 03', title: 'Data Science Course', note: 'Statistics, SQL, forecasting and machine learning for students and working adults, with evaluation built in from the first model.' }
    ]
  },

  sections: [
    {
      id: 'port', tint: 'tint', eyebrow: 'The port forecast',
      h2: 'A port that forecasts its ships a day ahead, and says what it cannot yet do',
      lede: 'Both documents below are primary: the Port of Rotterdam Authority\'s own digital report, and a research paper posted on arXiv that uses the port as its case. Neither is a sales brochure, and the first is notably candid.',
      body: [
        { kind: 'two',
          left: [
            'In its <strong>Digital Report 2025</strong> the Port of Rotterdam Authority describes an AI tool for <strong>fairway traffic planning</strong>, built with its IT partner BIT. It quickly shows which vessels, incoming and outgoing, are expected over the <strong>next 24 hours</strong>. The model was trained with <strong>AIS data</strong>, the position signals ships broadcast, together with vessel visit data, basic restriction rules and weather information. It predicts the actual arrival and departure times of those vessels and gives the <strong>Harbour Master</strong> advice on planning the fairway.',
            'The planning advice was shared in a pilot with two terminals, <strong>APM Terminals Maasvlakte II</strong> and <strong>Rotterdam World Gateway</strong>.'
          ],
          right: [
            'The report is just as clear about the limits. The tool is good at establishing the draught of every vessel in the port at any moment. It finds it hard to recognise reliable patterns, or to predict departure times, from data available through open sources such as <strong>Vesselfinder</strong>. And the results are not yet counted: gains can be achieved across the entire chain, says <strong>Frank van Veen</strong>, but we are now working on quantifying those gains based on data.',
            'That last sentence is the lesson. A forecasting tool can be built, trained and put in front of a Harbour Master, and still need a second project to show, in numbers, how much better its forecasts are than what came before.'
          ] },
        { kind: 'table', mt: true, caption: 'Two Rotterdam forecasting systems, as their own documents describe them', head: ['System', 'What it predicts', 'What it learns from', 'What the document says about results'], rows: [
          ['Fairway traffic planning tool (Port Authority, Digital Report 2025)', 'Arrival and departure times of vessels over the next 24 hours', 'AIS data, vessel visit data, restriction rules, weather', 'Gains are being quantified; departures from open data are hard'],
          ['Time-slot decision support for container terminals (research paper, 2023)', 'Truck waiting times at terminal gates and the cost of schedules', 'Large volumes of historical data', 'Simulations with real-world data show significant gains possible']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://publications.portofrotterdam.com/digital-report-2025/case-study-2" rel="noopener" target="_blank">Port of Rotterdam Authority, Digital Report 2025, case study 2</a>; A. Nadi, M. Snelder, J.W.C. van Lint and L. Tavasszy, <a class="ag-inline-link" href="https://arxiv.org/abs/2311.15298" rel="noopener" target="_blank">A data-driven and multi-agent decision support system for time slot management at container terminals: a case study for the Port of Rotterdam</a> (arXiv, 26 November 2023). Read 15 September 2026. We have no connection with the Port Authority, BIT, the terminals or the authors.' }
      ]
    },
    {
      id: 'score', tint: 'deep', eyebrow: 'Scoring it',
      h2: 'How a forecast earns trust: write it down, then measure it by lead time',
      lede: 'The economist Jan Tinbergen, who taught mathematics and statistics at the Netherlands School of Economics in Rotterdam until 1973, built the first comprehensive national macroeconomic model, for the Netherlands, in 1936. In 1969 he shared the first Nobel Memorial Prize in Economic Sciences with Ragnar Frisch, for developing and applying dynamic models of economic processes. Models of that kind, and the port\'s, are judged the same way.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Write it down first', p: 'A forecast only counts if it was recorded before the event. A learner\'s forecasting program saves every prediction with the time it was made, so it can never be quietly improved after the answer is known.' },
          { h3: 'Score it by lead time', p: 'A prediction made a day ahead and one made an hour ahead are different claims. Averaging them together hides the fact that errors almost always grow with the distance into the future. Each lead time gets its own score.' },
          { h3: 'Split what behaves differently', p: 'The port\'s report says departures are harder than arrivals when only open data is available. A good evaluation keeps them apart, because one easy category can make a whole model look better than it is.' }
        ] },
        { kind: 'table', mt: true, caption: 'An invented example: five ships, predicted times scored against actual times, errors in minutes', head: ['Forecast', 'Ship errors (minutes)', 'Total', 'Mean absolute error'], rows: [
          ['Arrival, 24 hours ahead', '90, 40, 150, 60, 120', '460', '92 minutes'],
          ['Arrival, 6 hours ahead', '30, 15, 45, 20, 40', '150', '30 minutes'],
          ['Arrival, 1 hour ahead', '8, 5, 12, 6, 9', '40', '8 minutes'],
          ['Departure, 6 hours ahead', '70, 20, 110, 35, 90', '325', '65 minutes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The mean absolute error is the plainest honest score: take how far off each prediction was, ignore whether it was early or late, and average. In the example it falls from 92 minutes a day ahead to 8 minutes an hour ahead. Reported as one number over all four rows, it would say little about any of them.',
            'The departure row shows the second point. At the same six-hour lead time, the invented departures are more than twice as far off as the arrivals, 65 minutes against 30, which is the kind of gap the port\'s report describes in words.'
          ],
          right: [
            'None of this needs advanced mathematics. It needs discipline: keep the predictions, keep the outcomes, and compare them by category and lead time. Learners on our track do it for every forecasting model they build, from a child guessing boat arrivals in a game to an adult predicting demand at work.',
            'It is also the fair way to judge an AI tool someone else is selling: ask for its errors by lead time, on data it was not trained on, and compare them with the simple forecast it replaces.'
          ] },
        { kind: 'source', html: 'Tinbergen facts from the <a class="ag-inline-link" href="https://en.wikipedia.org/wiki/Jan_Tinbergen" rel="noopener" target="_blank">encyclopaedia entry for Jan Tinbergen</a>, read 15 September 2026. The table is invented for teaching and describes no real ship or system: 460 divided by 5 is 92, 150 by 5 is 30, 40 by 5 is 8, and 325 by 5 is 65.' }
      ]
    },
    {
      id: 'ages', tint: '', eyebrow: 'At every age',
      h2: 'From guessing the next boat to forecasting demand at work',
      lede: 'Forecasting sounds like an adult subject, but the habit at its heart, guess first and check afterwards, is one a child can learn in a single lesson.',
      body: [
        { kind: 'two',
          left: [
            'A child building a harbour game can add a simple guess: when will the next boat appear? Keeping score of the guesses, right or wrong, is a first lesson in evaluation, and a surprisingly exciting one for an eight-year-old.',
            'A teenager with real data, bus times, weather or football results, builds a first forecasting model and learns to score it by lead time. The first time a model that looked brilliant turns out to be no better than yesterday\'s value, the lesson sticks for good.'
          ],
          right: [
            'Adults in Rotterdam often work where forecasts drive decisions, in logistics, energy, retail or the public sector. For them the track is practical: build a forecast, report its errors honestly, and know what questions to ask of a vendor\'s model.',
            'For the city, see <a class="ag-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a> and <a class="ag-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a>; nearby, <a class="ag-inline-link" href="/coding-classes-in-schiedam">Schiedam</a> and the province of <a class="ag-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a> covers the whole country.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The five rungs',
    h2: 'From a first program to a forecast that is scored honestly',
    lede: 'Each rung makes the next one possible. A learner cannot score a forecast without clean data to score it against, and cannot trust an agent that plans ahead without knowing how far ahead its predictions can be believed.',
    table: { caption: 'The five rungs for a Rotterdam learner, with the forecasting habit added at each', head: ['Rung', 'Commonly', 'What the learner adds'], rows: [
      ['1. Python by hand', 'Groep 6 to 8, or any adult beginner', 'Programs that make a guess and record it'],
      ['2. Data', 'Brugklas to the third year', 'Real records with timestamps, cleaned and kept apart from the guesses'],
      ['3. Models', 'Havo 4 to vwo 6, students, adults', 'Forecasts scored by lead time against a simple baseline'],
      ['4. Agents', 'Upper school and beyond', 'Programs that plan using forecasts and know when not to trust them'],
      ['5. Publishing', 'At every stage', 'A repository with the forecasts, the outcomes and the scores side by side']
    ] },
    left: { h3: 'Why the baseline comes first', ps: [
      'Every forecasting model should be compared with the simplest possible guess, such as tomorrow will be like today. A model that cannot beat that baseline has not learned anything useful, however sophisticated it is. Learners meet the baseline on rung 3 and never build a model without one again.',
      'Our wider order of subjects is laid out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Fitting the rungs around Rotterdam schooling', ps: [
      'Rung 1 belongs in the last years of the basisschool, eased off around the doorstroomtoets. A pupil choosing a profile, particularly one weighing Economie en Maatschappij against the Nature profiles, can use rung 2 to find out how much they enjoy working with data.',
      'Students and adults generally begin at rung 2 or 3, frequently in private lessons.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eleven live courses for Rotterdam learners, matched to ability',
    lede: 'Sorted by stage of life. Each course has a page of its own with the timetable and fee, and the learner\'s actual starting point comes out of the free lesson.',
    bands: [
      { num: 'I', h3: 'Children, groep 3 to 8', sub: 'Games, first programs and first guesses', courses: [
        { code: 'RTM / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Block-based games for young learners, from moving sprites to timed levels where the player has to predict what comes next.' },
        { code: 'RTM / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python for nine- to twelve-year-olds, with games, drawings and a first program that learns from past examples to guess the next one.' },
        { code: 'RTM / KIDS / 03', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Children aged eight to twelve build real apps with blocks, such as a timer or a tracker that records what happened.' }
      ] },
      { num: 'II', h3: 'Teenagers, havo and vwo', sub: 'Data, forecasts and models, always checked', courses: [
        { code: 'RTM / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Working with real records in Python, from cleaning to a first forecast scored against what actually happened.' },
        { code: 'RTM / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'From statistics to neural networks, with every model tested on data it never saw and compared with a simple baseline.' },
        { code: 'RTM / TEEN / 03', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The two-year route through Python, for teenagers who want to build their own forecasting tools from scratch.' },
        { code: 'RTM / TEEN / 04', slug: 'mysql-mastery-for-teens', title: 'MySQL for Teens', blurb: 'Storing and querying data with SQL, so that every prediction and every outcome can be kept and compared.' }
      ] },
      { num: 'III', h3: 'Students and working adults', sub: 'Forecasting and data science for decisions that matter', courses: [
        { code: 'RTM / PRO / 01', slug: 'data-science-complete-masterclass-college', title: 'Data Science Course', blurb: 'Statistics, SQL, feature engineering, modelling and evaluation, aimed at the kind of portfolio an employer can check.' },
        { code: 'RTM / PRO / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis Course', blurb: 'Excel, SQL, Python and business intelligence for analysts whose reports and forecasts shape plans.' },
        { code: 'RTM / PRO / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for Data Science', blurb: 'The statistics and mathematics behind forecasting and machine learning, explained through code rather than proofs.' },
        { code: 'RTM / PRO / 04', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Automating the collection of data and the running of forecasts, so that the scoring happens every time without anyone remembering to do it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Five in the afternoon in Rotterdam, evening in India',
    lede: 'Rotterdam\'s clocks go forward in March and back in October; India\'s never move. So a class at five in the afternoon in Rotterdam starts at half past eight in the evening in India in summer and half past nine in winter. Late afternoons and weekends suit both sides best, weekday evenings are possible by arrangement, and the regular time is set during the free lesson.',
    slots: [
      { time: 'Late afternoon', l: 'Rotterdam time, after school. The usual slot for children and the lower years of secondary school.' },
      { time: 'Evening', l: 'Rotterdam time, arranged with the teacher. For senior pupils, students and adults after work.' },
      { time: 'Weekend', l: 'Saturday or Sunday, Rotterdam time. Favoured by working adults and families with packed weekdays.' }
    ],
    cells: [
      { h3: 'An opening lesson with a task', p: 'The learner is given something real to solve while the teacher watches the approach. That reveals the right starting rung better than any quiz.' },
      { h3: 'Five to ten at one level', p: 'Learners from several countries who are at the same stage, so a quick learner from Rotterdam is challenged and a newcomer keeps up.' },
      { h3: 'Private classes available', p: 'For shift workers, students with shifting timetables, anyone with a specific target, and the Copilot Studio courses, which are only taught privately.' },
      { h3: 'Live screens', p: 'The teacher watches the code appear and steps in at the moment of confusion, not a week later over homework.' },
      { h3: 'English teaching, Dutch school words', p: 'Lessons are in English; groep, brugklas, havo and vwo are used in Dutch, as Rotterdam families use them.' },
      { h3: 'Predictions kept', p: 'Everything goes into the learner\'s own GitHub repository, including every forecast made and how far off it turned out to be.' }
    ]
  },

  projectsH2: 'Student projects anyone can open',
  projectsLede: 'Four working projects by our students, published at public addresses. Use them, test them, try to break them; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'As posted on Google by the people who wrote them. We do not write, change or pay for reviews.',

  fees: {
    h2: 'What the classes cost',
    lede: 'Charged monthly in US dollars at the rate used for every country outside India. There is no Rotterdam supplement, no joining fee and no year-long contract. Copilot Studio courses run only as private lessons and are priced accordingly.',
    free: ['A proper lesson on a real task', 'Settles the starting rung', 'No payment details asked'],
    group: ['Five to ten learners at the same level', 'One live teacher every week', 'Work reviewed weekly', 'A certificate on completion'],
    one: ['One learner with one teacher', 'Goal-led pace and content', 'The format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from Rotterdam',
    h2: 'What Rotterdam families, students and professionals ask',
    items: [
      { q: 'Does the port really use AI to predict ships?', a: 'Its own Digital Report 2025 describes an AI tool for fairway traffic planning that forecasts incoming and outgoing vessels over the next 24 hours, trained on AIS data, vessel visit data, restriction rules and weather, and advises the Harbour Master. The report also says the gains are still being quantified. We have no connection with the port.' },
      { q: 'What is a lead time?', a: 'How far ahead a forecast is made. A prediction a day before a ship arrives has a longer lead time than one an hour before, and it is usually less accurate. Scoring each lead time separately is the habit this page teaches.' },
      { q: 'What is the mean absolute error?', a: 'The average distance between predictions and what actually happened, ignoring whether each prediction was early or late. In the invented example on this page it is 92 minutes a day ahead and 8 minutes an hour ahead.' },
      { q: 'Who was Jan Tinbergen?', a: 'A Dutch economist who taught mathematics and statistics at the Netherlands School of Economics in Rotterdam until 1973. He built the first comprehensive national macroeconomic model, for the Netherlands, in 1936, and shared the first Nobel Memorial Prize in Economic Sciences with Ragnar Frisch in 1969.' },
      { q: 'Is my child too young for forecasting?', a: 'No. A child can guess when the next boat will appear in a game and keep score. The same habit grows, over the rungs, into proper forecasting models.' },
      { q: 'I work in logistics. Where should I start?', a: 'Usually the data analysis or data science course, depending on your background, often one to one. Both include scoring forecasts properly and comparing them with a simple baseline.' },
      { q: 'Are the lessons in Dutch?', a: 'No, in English, which is also the language of the tools and documentation. Dutch school terms are kept as families use them.' },
      { q: 'How much does it cost?', a: 'USD 100 a month for a place in a group and USD 150 a month for private classes, charged in US dollars with no joining fee or annual contract. The first lesson is free of charge.' },
      { q: 'Where do the teachers teach from?', a: 'From India, live over video. A class at five in the afternoon in Rotterdam is half past eight in the evening for the teacher in summer and half past nine in winter, so late afternoons and weekends work best.' },
      { q: 'What happens after I fill in the form?', a: 'We call back at a Dutch hour to arrange the free lesson. There is no charge and nothing is booked until after that lesson, when the family decides whether to go on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other pages for Rotterdam and the region',
    lede: 'What this page leaves out, other pages cover.',
    items: [
      { href: '/coding-classes-in-rotterdam', label: 'Coding classes in Rotterdam', p: 'Programming for every age across the city and its eight gebieden.' },
      { href: '/coding-classes-in-schiedam', label: 'Coding classes in Schiedam', p: 'The neighbouring town to the west, with a page of its own.' },
      { href: '/coding-classes-in-zuid-holland', label: 'Coding classes in Zuid-Holland', p: 'All the municipalities of the province, from the coast to the rivers.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national picture: informatica in Dutch schools and the country\'s new AI factory.' },
      { href: '/ai-and-python-academy-eindhoven', label: 'AI and Python Academy, Eindhoven', p: 'AI that has to work in machines, from soccer robots to drones.' },
      { href: '/ai-and-python-academy-utrecht', label: 'AI and Python Academy, Utrecht', p: 'Four questions to ask of any chatbot, and a small ELIZA to build.' }
    ]
  },

  start: {
    h2: 'Begin with a free lesson',
    lede: 'Send a phone number and we will call you back at a Dutch hour to agree a time. The lesson is taught by a real teacher on real material, and it finishes with the learner\'s starting rung decided, the single most important choice in this subject.',
    readFirst: 'Prefer to look around first? See the <a class="ag-inline-link" href="/courses">course list</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the thinking behind these pages at <a class="ag-inline-link" href="/learn-to-build-ai">Learn to Build AI</a>.',
    note: 'WhatsApp from a Dutch number is free and usually gets the quickest answer. The number is Indian; we have no office, address or premises in Rotterdam or anywhere in the Netherlands.',
    formNote: 'No card and no commitment. We call once to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Rotterdam', links: [
        { href: '/coding-classes-in-rotterdam', label: 'Coding classes in Rotterdam' },
        { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' }
      ] },
      { h4: 'The track', links: [
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/learn-to-build-ai', label: 'Learn to Build AI' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching Rotterdam on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-art .ag-hero-grid { gap: clamp(1.3rem, 3.6vw, 3.1rem); }
.ag-root.ag-art .ag-hero h1 { letter-spacing: -0.024em; }
.ag-root.ag-art .ag-capsule { border-left-width: 4px; }
.ag-root.ag-art .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-art .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-art .ag-table caption { text-align: left; }
.ag-root.ag-art .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-art .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['fairway traffic planning', 'next 24 hours', 'AIS data', 'Harbour Master', 'APM Terminals Maasvlakte II', 'Rotterdam World Gateway', 'Vesselfinder', 'Frank van Veen', 'Netherlands School of Economics', 'Ragnar Frisch', '1936', '92 minutes']
};
