'use strict';
// Ku-ring-gai, Sydney (cg- district page, Australia cluster Phase 8, row 206). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: when a model predicts Gordon Station's monthly entries from seven neighbouring North Shore line
// stations that all move together, why does ordinary regression give nonsense signs, and how does the lasso
// pick a few inputs and predict better?
// Data: Transport for NSW, Train Station Entries and Exits, monthly station usage (entry_exit.csv, CC BY),
// downloaded 10 October 2026: 23 months, October 2024 to August 2026, Train entries for Roseville,
// Lindfield, Killara, Gordon, Pymble, Turramurra, Warrawee and Wahroonga stations (all numeric). Gordon
// mean 150,171 a month (min 112,189, max 177,251). Correlations with Gordon 0.907 to 0.956; smallest
// correlation between any two predictors 0.882. Our run (scratchpad au/b1/krgs_lasso.py, inputs
// standardised, coordinate-descent lasso): least squares on all 23 months gives Pymble -22,706,
// Turramurra -16,825, Roseville -3,369, Wahroonga 30,633, Lindfield 20,850. Lasso penalty 500: Roseville
// 8,415, Lindfield 1,927, Warrawee 4,863; 5,000: Roseville and Warrawee; 10,000: Roseville only; 20,000:
// none. Train October 2024 to February 2026 (17 months), test March to August 2026 (6): least squares test
// mean absolute error 8,329 (train 1,366); lasso 2,000 test 4,285 (train 3,572, inputs Roseville,
// Lindfield, Warrawee); lasso 10,000 test 9,547; training-mean-only 15,633.
// Lesson family: lasso (L1) regression and feature selection among correlated inputs; screened 0 hits.
// Place facts: ABS Census 2021 QuickStats, Ku-ring-gai LGA (LGA14500); NSW master dataset (CC BY): 24
// schools in LGA Ku-ring-gai, earliest first teachers Lindfield Public School 1903, Warrawee Public School
// 1906, Roseville Public School 1913. Gordon Station entries August 2026: 168,651.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'KU-RING-GAI',
    label: 'Ku-ring-gai, Sydney',
    blurb: 'AI and programming for Ku-ring-gai, with a lasso regression project on eight North Shore line stations.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'ai-and-programming-classes-in-ku-ring-gai-sydney',
  code: 'krgs',
  accent: '#22664C',
  accentRationale: 'Ku-ring-gai: a deep eucalypt green (hue 158), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 6.8:1 on white and 5.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Ku-ring-gai',
    eyebrow: 'Ku-ring-gai, Sydney, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Ku-ring-gai, Sydney',
  title: 'AI and Programming Classes in Ku-ring-gai, Sydney',
  description: 'Live online AI, machine learning and programming classes for Ku-ring-gai teenagers and adults, with real teachers, in small groups or one to one. First lesson free.',
  ogDescription: 'AI classes for Ku-ring-gai, with a lasso regression project that predicts Gordon Station from its North Shore line neighbours and halves the error of ordinary regression.',
  twitterDescription: 'Ku-ring-gai AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Ku-ring-gai',
    description: 'Level-matched online machine learning, Python, data analysis and programming for teenagers and adults in the Ku-ring-gai council area, taught live in English.'
  },
  h1: 'AI and programming classes in Ku-ring-gai',
  capsuleQ: 'Which AI and programming classes are best for Ku-ring-gai learners?',
  capsule: 'Live online classes in which a teacher builds machine learning models in Python with Ku-ring-gai teenagers and adults, using real public data and checking every result against data the model has not seen. The 2021 Census counted 124,076 people in the Ku-ring-gai council area, where 53.7% of residents aged 15 and over hold a bachelor degree or higher. Lessons are one to one or in a small level-matched group, and the first is free.',
  lead: 'Eight stations on the North Shore line, from Roseville to Wahroonga, rise and fall together month after month: school holidays, summer and busy weeks show up at all of them at once. Try to predict Gordon from the other seven with ordinary regression and the model does something strange. It gives Pymble a large negative weight, as if more travellers at Pymble meant fewer at Gordon, although the two stations move together with a correlation of 0.924. The lasso, a regression that pays a price for every input it uses, keeps three neighbours, drops the rest, and on six months it never saw predicts Gordon with about half the error. Our Ku-ring-gai project builds both in Python on Transport for NSW\'s open data.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Ku-ring-gai.',
  picks: {
    eyebrow: 'Course picks for Ku-ring-gai',
    h2: 'Machine learning paths for Ku-ring-gai learners',
    intro: 'Each course connects to the lasso project. The free first lesson settles the right one, and no card is needed to book it.',
    items: [
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 14 to 18',
        note: 'Machine learning in Python for teenagers, from linear models to evaluation on unseen data.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Tables, charts and correlations with real open data before any modelling starts.'
      },
      {
        course: 'ai-ml-masterclass-complete-college',
        band: 'University and adult',
        note: 'A full machine learning course, including regularisation, model selection and honest testing.'
      },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Data science in Python for work, from cleaning to models that survive new data.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Ku-ring-gai in the Census',
      h2: 'A highly qualified council area with many teenagers',
      intro: 'The bureau\'s 2021 QuickStats for the Ku-ring-gai local government area, measured against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Ku-ring-gai council area totals, 2021 Census',
          head: ['Quantity', 'Ku-ring-gai'],
          rows: [
            ['People', '124,076'],
            ['Families', '35,318'],
            ['Private dwellings', '45,849'],
            ['Mean people per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Ku-ring-gai, the state and the nation',
          head: ['Statistic', 'Ku-ring-gai', 'New South Wales', 'Australia'],
          rows: [
            ['Median age', '42', '39', '38'],
            ['Bachelor degree or above, aged 15 and over', '53.7% (53,618)', '27.8%', '26.3%'],
            ['Professionals among workers', '41.6% (24,359)', '25.8%', '24.0%'],
            ['Residents aged 15 to 19', '7.4% (9,124)', '5.7%', '5.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Degrees', p: 'More than half of residents aged 15 and over hold a bachelor degree or higher, almost double the state share.' },
            { h3: 'Homes', p: '28,718 occupied homes were separate houses, 68.6% of the total, while flats and apartments made up 27.1%.' },
            { h3: 'School years', p: 'Residents aged 10 to 14 made up 8.0% of the population and those aged 15 to 19 another 7.4%, both above the state shares.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau introduces small random changes into its tables to protect privacy, so the parts of a table may not add to its total. We print the bureau\'s numbers as they appear and do not compute totals of our own from them.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Predicting Gordon from its neighbours: least squares against the lasso',
      intro: 'Transport for NSW publishes monthly Opal entries for every station. We took 23 months for the eight North Shore line stations from Roseville to Wahroonga and asked how well seven of them predict Gordon.',
      body: [
        {
          kind: 'table',
          caption: 'Weights given to each neighbour when all 23 months are used (our calculation, inputs standardised)',
          head: ['Neighbour', 'Correlation with Gordon', 'Least squares weight', 'Lasso weight, penalty 500'],
          rows: [
            ['Roseville', '0.956', '-3,369', '8,415'],
            ['Lindfield', '0.939', '20,850', '1,927'],
            ['Killara', '0.912', '2,455', '0'],
            ['Pymble', '0.924', '-22,706', '0'],
            ['Turramurra', '0.907', '-16,825', '0'],
            ['Warrawee', '0.937', '4,728', '4,863'],
            ['Wahroonga', '0.935', '30,633', '0']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Trained on October 2024 to February 2026, tested on March to August 2026 (mean absolute error in monthly entries, our calculation)',
          head: ['Model', 'Inputs kept', 'Error on training months', 'Error on unseen months'],
          rows: [
            ['Average of training months only', '0', '13,400', '15,633'],
            ['Least squares, all seven neighbours', '7', '1,366', '8,329'],
            ['Lasso, penalty 2,000', '3', '3,572', '4,285'],
            ['Lasso, penalty 10,000', '1', '9,087', '9,547']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why the signs go wrong',
              p: 'All eight stations follow the same seasonal rhythm, so their columns are nearly copies of each other. Least squares can then trade large positive and negative weights against each other and still fit the training months closely.'
            },
            {
              h3: 'What the lasso does',
              p: 'It adds a cost proportional to the size of every weight. Inputs that add little are pushed to exactly zero, and as the penalty grows the model keeps three neighbours, then two, then Roseville alone, then none.'
            },
            {
              h3: 'What the test shows',
              p: 'Least squares fits the past most closely yet does worse than the lasso on the future. The three-input lasso gives up some training accuracy and roughly halves the error on months it never saw.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A fit is not a forecast',
          p: 'An error of 1,366 entries a month on the training data looks excellent, and an error of 8,329 on the next six months tells the real story. Every learner in this project sees the same lesson professional data scientists learn the hard way: judge a model only on data it was not allowed to study.'
        },
        {
          kind: 'p',
          text: 'Every weight and error above is our own calculation from Transport for NSW\'s published monthly figures, with each station\'s entries standardised before fitting. The weights describe a statistical model, not anything about how people actually choose stations, and the six test months are too few to make firm claims about which model is better in general.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Regularisation in practice',
      h2: 'Experiments that sharpen a learner\'s judgement',
      intro: 'With the lasso working, a few further runs show why choosing inputs matters in every machine learning system.',
      body: [
        {
          kind: 'table',
          caption: 'Next experiments on the North Shore line data',
          head: ['Experiment', 'What to watch', 'What it teaches'],
          rows: [
            ['Sweep the penalty from 0 upwards', 'Inputs dropping out one by one', 'The regularisation path'],
            ['Swap the lasso for ridge regression', 'Weights shrink but none reach zero', 'L1 against L2 penalties'],
            [
              'Choose the penalty by cross-validation',
              'The penalty with the smallest error on held-out months',
              'Tuning without peeking at the test set'
            ],
            ['Add the month of the year as an input', 'Whether neighbours still matter', 'Confounding by a shared cause']
          ]
        },
        {
          kind: 'p',
          text: 'The pattern of several inputs telling the same story is everywhere: test scores in related subjects, sensor readings from nearby devices, word counts in similar documents. A model that cannot cope with it gives unstable explanations, and the lasso is one of the clearest ways to see the problem and fix it.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Plot the eight stations together, fit least squares by hand with NumPy, and watch the weights change when one month is removed.' },
            { h3: 'University students', p: 'Write coordinate descent for the lasso, compare it with scikit-learn, and trace the full path of weights.' },
            { h3: 'Adults', p: 'Build forecasting models at work that stay simple enough to explain and stable enough to trust.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, Ku-ring-gai Council, the NSW Department of Education and the statistics bureau make these datasets public and have no connection with us. The regressions, weights and test errors were produced by our own code.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Ku-ring-gai',
      h2: 'Twentieth-century schools and a line of stations',
      intro: 'A few more facts from the same open sources.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Schools of the 1900s',
              p: 'The NSW schools file lists 24 government schools in the council area. The earliest first teachers were at Lindfield Public School in 1903, Warrawee Public School in 1906 and Roseville Public School in 1913.'
            },
            { h3: 'Gordon Station', p: 'Gordon recorded 168,651 Opal entries in August 2026, averaging 150,171 a month across the 23 months in our data.' },
            {
              h3: 'Four terms in 2027',
              p: 'Eastern division schools run Term 1 from Wednesday 3 February to Friday 9 April 2027 and Term 4 from Tuesday 12 October to Monday 20 December.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Another view of the same data',
          p: 'Exits are published alongside entries. Comparing them station by station, and asking why a month might show more people leaving a station than entering it, is a good warm-up in reading data carefully before modelling anything.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From patterns in data to models that generalise',
    intro: 'The bands are a guide; the free trial decides where to begin.',
    cols: [
      {
        band: 'Ages 10 to 13',
        h3: 'Spotting patterns',
        p: 'Charts and simple rules from real data, built in Scratch and early Python.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 16',
        h3: 'Python with data',
        p: 'Reading tables, finding correlations and drawing honest charts.',
        courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'First models',
        p: 'Regression, overfitting, regularisation and testing on unseen data.',
        courses: ['ai-ml-masterclass-teens', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'University and adult',
        h3: 'Models for work',
        p: 'Feature selection, validation and models that can be explained to others.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can fit a model in seconds. Why should a Ku-ring-gai learner build one?',
    intro: 'Because the hard part of machine learning is not fitting a model, it is knowing when the fit is misleading.',
    p1: 'Ask an AI assistant to predict Gordon from its neighbours and it will happily run a regression and report a tight fit. Unless prompted, it is unlikely to mention that the inputs are nearly duplicates, that a weight of minus 22,706 on Pymble makes no physical sense, or that the error on future months is six times the error on past ones.',
    p2: 'A learner who has built the lasso on real station data looks for exactly those warning signs: inputs that move together, explanations that flip sign, and accuracy measured only on the data the model learned from. Those habits matter more as AI tools make models cheaper to produce.',
    closer: 'In 2026 anyone can fit a model, and the Ku-ring-gai learner who checks it on unseen months is the one whose predictions hold up.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Roseville to Wahroonga, one classroom online',
    intro: 'The eight stations in our project run the length of the council area\'s railway, and a live online lesson serves every one of their neighbourhoods equally.',
    cells: [
      { h3: 'At home', p: 'Lessons happen at the learner\'s own desk, so no evening is lost to driving, parking or waiting for a lift home.' },
      {
        h3: 'Following NSW',
        p: 'Lessons respect the NSW stages and terms, pause for school holidays, and can tie projects to senior computing and maths courses.'
      },
      {
        h3: 'A proper trial',
        p: 'The free opening lesson teaches real content; the teacher then suggests a level, course and time, and nothing is charged that day.'
      },
      { h3: 'Groups of five to ten', p: 'Learners are matched on skill and pace rather than age or postcode, alongside classmates from elsewhere.' },
      { h3: 'Two lessons weekly', p: 'A fixed weekly rhythm of two lessons, roughly eight a month, with holiday breaks planned in advance.' },
      { h3: 'Teachers in India', p: 'A 6:30pm Ku-ring-gai lesson in summer starts at 1pm India time; during the Sydney winter it starts at 2pm there.' }
    ],
    spec: {
      title: 'Two time zones, one timetable',
      p: 'Sydney moves its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India never changes. We quote every lesson in Sydney time, so the family\'s timetable stays fixed through both changes.'
    }
  },
  fees: {
    h2: 'Ku-ring-gai class fees',
    intro: 'Simple pricing in three parts.',
    first: 'A free first lesson that ends with a recommended course.',
    group: 'A month of small-group lessons, usually eight, with five to ten learners.',
    private: 'Around eight private lessons a month with one teacher.',
    closer: 'Invoices outside India are in US dollars, so every Ku-ring-gai family pays the same rate and no local price list exists. Payment starts only after the trial has fixed a course and time, and the pricing page sets out holidays, missed lessons and format changes.'
  },
  reviewsH2: 'Google reviews from families',
  book: {
    h2: 'Request a first Ku-ring-gai lesson',
    intro: 'Tell us an age and an interest. A Year 9 student might start by charting the eight stations; an adult might begin straight away with the lasso.',
    success: 'Thank you. We will get in touch shortly about a class for Ku-ring-gai.'
  },
  faq: {
    h2: 'Ku-ring-gai AI and programming questions',
    intro: 'What Ku-ring-gai families and adult learners usually want to know.',
    items: [
      {
        q: 'How many people live in the Ku-ring-gai council area?',
        a: '124,076 at the 2021 Census, according to the QuickStats for the Ku-ring-gai local government area, with a median age of 42.'
      },
      {
        q: 'What is lasso regression?',
        a: 'Lasso regression is linear regression with an extra cost on the absolute size of every weight. The cost pushes unhelpful weights to exactly zero, so the model chooses a small set of inputs and is less likely to overfit.'
      },
      {
        q: 'What is the Ku-ring-gai station project?',
        a: 'Learners predict Gordon Station\'s monthly Opal entries from the seven other North Shore line stations between Roseville and Wahroonga. Least squares fits the past closely but errs by 8,329 entries a month on unseen months; a three-input lasso errs by 4,285.'
      },
      {
        q: 'Why did ordinary regression give Pymble a negative weight?',
        a: 'Because all the stations move together, their inputs are almost interchangeable, and least squares can balance large positive and negative weights against each other. The fit looks good but the individual weights stop meaning anything.'
      },
      {
        q: 'Does this help with senior maths or computing?',
        a: 'Yes. The project uses statistics and programming that support senior maths and computing courses. Any work a school assesses must be the student\'s own; we explain methods and do not write assessed work.'
      },
      {
        q: 'Is this suitable for adults changing careers?',
        a: 'Yes. Adults learning data science or machine learning work on the same kind of project, with more attention to validation and to explaining models to others.'
      },
      {
        q: 'Can younger children learn with you?',
        a: 'Yes, from age six. Younger children begin with Scratch and simple patterns; the regression project on this page is for older students.'
      },
      {
        q: 'Is there a Modern Age Coders centre in Ku-ring-gai?',
        a: 'No. Lessons are live online only and we have no premises in Australia. A computer with sound and a reliable connection is all that is needed; our phone number is in India.',
        boiler: true
      },
      {
        q: 'How much are AI classes for Ku-ring-gai learners?',
        a: 'The first lesson is free. Then a group place costs USD 100 a month for two live lessons a week, about eight in total, with five to ten learners, or USD 150 a month for the same schedule one to one. Course, format and time are agreed before paying.',
        boiler: true
      },
      {
        q: 'How big are classes?',
        a: 'Five to ten learners at the same level, grouped by ability and goals rather than age or suburb. One-to-one teaching is offered when no group fits the needed time.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Ku-ring-gai learners',
    html: 'Next door, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hornsby-sydney">Hornsby</a> has a Python page of its own, and the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> covers the whole city. Students curious about AI for school can read <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Ku-ring-gai and Sydney',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-hornsby-sydney', label: 'Hornsby' },
    { href: '/vibe-coding-and-ai-agents-classes-in-ryde-sydney', label: 'Ryde' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-krgs .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-krgs .cg-hero h1 { font-weight: 770; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-krgs .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.4rem 0 0.4rem 1.05rem; }
.cg-root.cg-krgs .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-krgs .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.011em; }
.cg-root.cg-krgs .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.75rem); }
.cg-root.cg-krgs .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-krgs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-krgs .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-krgs .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Ku-ring-gai, ABS Census 2021 QuickStats, Ku-ring-gai local government area LGA14500 (read 10 October 2026): 124,076 people; median age 42 (NSW 39, Australia 38); 35,318 families; 45,849 private dwellings; average 2.9 people per household; separate house 28,718 (68.6 percent); flat or apartment 11,365 (27.1 percent; NSW 21.7); Professionals 24,359 (41.6 percent; NSW 25.8; Australia 24.0); Bachelor Degree level and above 53,618 (53.7 percent; NSW 27.8; Australia 26.3); age 10 to 14 8.0 percent; age 15 to 19 9,124 (7.4 percent; NSW 5.7). NSW Department of Education master dataset (CC BY), LGA = Ku-ring-gai: 24 schools; earliest Date_1st_teacher Lindfield Public School 1903-04-01, Warrawee Public School 1906-01-01, Roseville Public School 1913-08-01. NSW 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April; Term 4 Tuesday 12 October to Monday 20 December. IANA tz Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Lasso (L1) regression among correlated inputs. Transport for NSW monthly station usage (entry_exit.csv, CC BY), Train Entry, October 2024 to August 2026 (23 months): Roseville, Lindfield, Killara, Gordon, Pymble, Turramurra, Warrawee, Wahroonga. Gordon mean 150,171 (min 112,189, max 177,251); August 2026 168,651. Correlations with Gordon: Roseville 0.956, Lindfield 0.939, Killara 0.912, Pymble 0.924, Turramurra 0.907, Warrawee 0.937, Wahroonga 0.935; minimum predictor pair 0.882. Inputs standardised; coordinate-descent lasso. Full-data least squares weights: Roseville -3,369, Lindfield 20,850, Killara 2,455, Pymble -22,706, Turramurra -16,825, Warrawee 4,728, Wahroonga 30,633. Lasso 500: Roseville 8,415, Lindfield 1,927, Warrawee 4,863; 5,000: Roseville, Warrawee; 10,000: Roseville; 20,000: none. Train 2024-10 to 2026-02, test 2026-03 to 2026-08: mean-only test MAE 15,633 (train 13,400); least squares test 8,329 (train 1,366); lasso 2,000 test 4,285 (train 3,572); lasso 10,000 test 9,547 (train 9,087).',
    requiredMentions: ['124,076', '35,318', '45,849', '53,618', '24,359', 'Lindfield Public School', '168,651', '-22,706', '8,329'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Ku-ring-gai local government area (LGA14500).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA14500'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That all eight stations lie inside the Ku-ring-gai council area: not verified, so the page describes them as North Shore line stations from Roseville to Wahroonga.',
      'Any reason why particular months were busier or quieter: not verified, so no cause is given.',
      'That the lasso is better than least squares in general: six test months are too few; the page reports only this comparison.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, Ku-ring-gai Council, the NSW Department of Education or the ABS.'
    ]
  }
};
