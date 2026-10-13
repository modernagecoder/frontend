'use strict';
// Build real AI projects, Australia (ag- language and track door; AU cluster Phase 9, row 357).
// Intent: Australians of any age (about 9 to 67) who want to build AI projects that are real: permitted data, a
// baseline to beat, an honest test and a write-up. Distinct from ai-and-machine-learning-classes-in-australia (class
// catalogue and register), learn-to-train-ai-not-just-prompt-it-australia (labels and training) and
// python-ai-course-for-kids-australia (kids 9 to 13). Same split as the UK, Ireland and Netherlands pages.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - ABS, Website privacy, copyright and disclaimer: "All material presented on this website is provided under a
//    Creative Commons Attribution 4.0 International licence", with exceptions for the Commonwealth Coat of Arms, the
//    ABS logo and trade-marked material; "Where no indication of licensing is provided within the product, full
//    copyright terms will apply."
//  - ABS Data API, dataflow BA_GCCSA (Building Approvals by GCCSA and above), measure 1 Number of dwelling units,
//    value range Total, total sectors, total work, building type 100 Total Residential, Original, monthly,
//    2010-01 to 2026-08, Australia and the eight states and territories. Counts, not values.
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx): Years 9-10 elaborations "accessing and
//    storing data from the Australian Bureau of Statistics in a format that is useful for analysis" and "considering
//    the complexities associated with training predictive models to capture events that occur with low probability".
// Lesson family: forecast error growing with horizon against naive baselines. Our backtest: rolling origins from
// 2018-12, ridge regression on the last 12 months plus target-month indicators, refitted at every
// origin; mean absolute percentage error by horizon; figures in rap/res.json.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'REAL AI PROJECTS',
    blurb: 'Build real AI projects in Australia: licensed public data, a baseline to beat, honest testing and a clear write-up, for ages 9 to 67.'
  },
  slug: 'build-real-ai-projects-australia',
  code: 'rapa',
  accent: '#4A6D11',
  accentRationale: 'Build real AI projects, Australia: a muted moss green computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
  pageType: 'market',
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
  routeLabel: 'Build real AI projects, Australia',
  title: 'Build Real AI Projects in Australia | Data, Baselines, Tests',
  description: 'Build real AI projects in Australia, ages 9 to 67: licensed ABS data, a baseline to beat, honest testing and a written report. Live online lessons, first class free.',
  ogDescription: 'Our model beat every simple forecast one month ahead and lost to "this month again" in three states a year ahead. A real AI project on ABS data, worked in full.',
  twitterDescription: 'Real AI projects for Australians aged 9 to 67: licensed data, baselines, honest tests, clear write-ups. First class free.',
  pageName: 'Build Real AI Projects in Australia',
  webPageDescription: 'A guide to building real AI projects in Australia: what makes a project real, how ABS data is licensed, and a forecasting project on ABS building approvals tested against simple baselines.',
  courseDescription: 'Live online AI project lessons for Australians aged 9 to 67: finding licensed data, setting baselines, building and testing models, and writing up results honestly.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Build real AI projects',
  navLinks: [
    { href: '#real', label: 'What makes it real' },
    { href: '#licence', label: 'Data you may use' },
    { href: '#forecast', label: 'A worked project' },
    { href: '#ages', label: 'Projects by age' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 9 to 67 &middot; Real data, real baselines',
  h1: 'Build real AI projects',
  lede: 'Most "AI projects" online are tutorials in disguise: a famous dataset, a model copied from a notebook, an accuracy figure nobody questions. A real project is different. It uses data you are allowed to use, it has a simple baseline the model must beat, it is tested on data it never saw, and it ends with an honest account of where it fails. Our live online lessons help Australians from 9 to 67 build projects like that, at a level that fits their age. This page sets out the four tests a real project passes, explains how Australian Bureau of Statistics data is licensed, and works through a full forecasting project on national building approvals in which the simple baselines sometimes win.',
  secondaryCta: { href: '#forecast', label: 'See the worked project' },
  wa: 'Hello Modern Age Coders, I am in Australia and would like to build real AI projects. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; every project measured against a simple baseline',
  spec: [
    ['For', 'Ages 9 to 67'],
    ['Data', 'Licensed public sources'],
    ['Rule one', 'Beat a simple baseline'],
    ['Testing', 'On unseen, later data'],
    ['Output', 'A written project report'],
    ['Format', 'Live online lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A real AI project uses data you are permitted to use, compares the model with a simple baseline, tests it on data it has not seen, and reports honestly where it fails. Australian Bureau of Statistics material is published under a Creative Commons Attribution 4.0 licence, with a few exceptions, which makes it a strong source. Modern Age Coders guides Australians aged 9 to 67 through projects like this live online, and the first class is free.',
  picks: {
    eyebrow: 'Start here',
    h2: 'Three project courses, by age',
    lede: 'Children start with small Python projects, teenagers build and test real models, and adults go into deep learning and generative AI. Open a card for the syllabus.',
    items: [
      {
        course: 'python-ai-kids-masterclass',
        code: 'RAPA / 01',
        title: 'Python and AI for Kids',
        note: 'Ages 9 to 12: games, turtle art and first smart programs, with no adult AI accounts.'
      },
      {
        course: 'ai-ml-masterclass-teens',
        code: 'RAPA / 02',
        title: 'AI and Machine Learning for Teens',
        note: 'Ages 13 to 18: Python to real models, tested properly on held-back data.'
      },
      {
        course: 'ai-ml-masterclass-complete-college',
        code: 'RAPA / 03',
        title: 'AI and ML Masterclass for Adults',
        note: 'Ages 18 and over: machine learning, deep learning and generative AI, project by project.'
      }
    ]
  },
  sections: [
    {
      id: 'real',
      tint: 'tint',
      eyebrow: 'What makes it real',
      h2: 'Four tests every real AI project passes',
      lede: 'We use the same four tests for a 10 year old\'s first classifier and an adult\'s forecasting model. Only the depth changes.',
      body: [
        {
          kind: 'table',
          caption: 'The four tests',
          head: ['Test', 'The question', 'A project fails when'],
          rows: [
            ['1. Permission', 'Are we allowed to use this data, and how must we credit it?', 'The licence was never checked'],
            ['2. Baseline', 'What does the simplest sensible method score?', 'The model is never compared with anything'],
            [
              '3. Unseen data',
              'Was the test data kept away from training, in time order where time matters?',
              'The model was tested on what it learned from'
            ],
            ['4. Honest write-up', 'Where does it fail, and for whom?', 'Only the most flattering number is reported']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'The curriculum points the same way',
          left: [
            'A Years 9 and 10 Digital Technologies elaboration describes "accessing and storing data from the Australian Bureau of Statistics in a format that is useful for analysis". Another asks students to consider "the complexities associated with training predictive models to capture events that occur with low probability".',
            'Both are exactly the habits a real project needs: real public data, and humility about what a model can predict.'
          ],
          rightH3: 'Why the baseline matters most',
          right: [
            'A model that scores 85% sounds impressive until a one-line rule scores 87%. Without a baseline, nobody can tell whether the AI added anything.',
            'In our lessons, the baseline is written and scored first, before any model is trained.'
          ]
        }
      ]
    },
    {
      id: 'licence',
      tint: 'deep',
      eyebrow: 'Data you may use',
      h2: 'Australian Bureau of Statistics data and its licence',
      lede: 'Permission is the first test, and the ABS makes it easier than most sources.',
      body: [
        {
          kind: 'two',
          leftH3: 'What the ABS licence says',
          left: [
            'The ABS states: "All material presented on this website is provided under a Creative Commons Attribution 4.0 International licence", with exceptions including the Commonwealth Coat of Arms, the ABS logo and material protected by a trade mark.',
            'Attribution 4.0 allows reuse, including in projects shared publicly, provided the source is credited. Every project we build on ABS data carries that credit.'
          ],
          rightH3: 'Read the product, not just the website',
          right: [
            'The ABS also notes that customised reports carry their own licensing and that "Where no indication of licensing is provided within the product, full copyright terms will apply."',
            'Students learn to check the licence of the specific table they download, and to keep a note of it beside the data.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Choosing data for a project',
          head: ['Source type', 'Usually', 'Check before using'],
          rows: [
            ['ABS tables and Data API', 'Creative Commons Attribution 4.0', 'Exceptions and product-specific terms'],
            ['Other government open data portals', 'Often an open licence', 'The licence on each dataset page'],
            ['Websites and social media', 'Not licensed for reuse', 'Terms of use; personal information'],
            ['Data you collect yourself', 'Yours, with consent rules', 'Privacy and consent of the people involved']
          ]
        },
        {
          kind: 'source',
          html: 'Source, read 13 October 2026: Australian Bureau of Statistics, <a class="ag-inline-link" href="https://www.abs.gov.au/website-privacy-copyright-and-disclaimer" rel="noopener" target="_blank">website privacy, copyright and disclaimer</a>. This is general information about a licence, not legal advice.'
        }
      ]
    },
    {
      id: 'forecast',
      tint: 'tint',
      eyebrow: 'A worked project',
      h2: 'How far ahead can a model forecast building approvals?',
      lede: 'A complete real project on ABS data: the number of new dwelling units approved each month, forecast 1, 3, 6 and 12 months ahead, and tested against three simple baselines.',
      body: [
        {
          kind: 'p',
          html: 'From the ABS Data API we downloaded the monthly count of dwelling units approved (all residential building, original series) for Australia and each state and territory, 2010-01 to 2026-08. Our model is a ridge regression that looks at the last 12 months and the calendar month being forecast, retrained at every step. We tested it the way a real forecaster works: standing at each month from 2018-12 onwards, using only data available then, forecasting ahead, and comparing with what the ABS later published. The score is the average percentage error.'
        },
        {
          kind: 'table',
          caption: 'Australia: average error by forecast horizon, 92 to 81 test points (our calculation on ABS data)',
          head: ['Forecast horizon', 'This month again', 'Same month last year', 'Average of last 12 months', 'Our model'],
          numCols: [
            1,
            2,
            3,
            4
          ],
          rows: [
            ['1 month', '13.4%', '15.7%', '12.5%', '8.9%'],
            ['3 months', '14.0%', '15.4%', '13.4%', '9.7%'],
            ['6 months', '16.3%', '15.1%', '15.2%', '12.1%'],
            ['12 months', '14.6%', '14.6%', '18.4%', '12.8%']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'States and territories: one month and twelve months ahead (our calculation)',
          head: ['State or territory', 'Model error, 1 month', 'Most accurate, 1 month', 'Model error, 12 months', 'Most accurate, 12 months'],
          numCols: [
            1,
            3
          ],
          rows: [
            ['NSW', '17.6%', 'Our model', '21.9%', 'Our model'],
            ['Victoria', '13.3%', 'Our model', '15.6%', 'Our model'],
            ['Queensland', '13.4%', 'Our model', '18.5%', 'Our model'],
            ['South Australia', '11.3%', 'Our model', '16.4%', 'Our model'],
            ['Western Australia', '13.7%', 'Our model', '34.9%', 'This month again (same as last year\'s month at 12)'],
            ['Tasmania', '18.6%', 'Our model', '24.8%', 'This month again (same as last year\'s month at 12)'],
            ['Northern Territory', '59.9%', 'Average of last 12 months', '55.2%', 'This month again (same as last year\'s month at 12)'],
            ['ACT', '112.7%', 'Average of last 12 months', '118.1%', 'Average of last 12 months']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Error grows with distance',
              p: 'For Australia as a whole, the model\'s average error rose from 8.9% one month ahead to 12.8% twelve months ahead. Its lead over the plain "this month again" forecast shrank from 4.5 points to 1.8.'
            },
            {
              h3: 'Where the baselines win',
              p: 'Twelve months ahead, a simple baseline beat the model in 4 of the 8 states and territories. In the smallest markets the model sometimes did worse than repeating the latest month, because there was too little regular pattern to learn.'
            },
            {
              h3: 'Some series barely forecast at all',
              p: 'In the ACT, approvals swing so much from month to month that every method\'s average error was above 95%. Saying so plainly is part of the project, and it echoes the curriculum\'s caution about rare, lumpy events.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What a learner writes up',
          left: [
            'The model is useful one to three months ahead for the national total and the larger states, and close to useless a year ahead in smaller ones. A one-line baseline is the right tool where it wins, and the report names those places.',
            'At twelve months, "same month last year" and "this month again" are the same forecast, which is why those two columns match; noticing that is part of reading results carefully.'
          ],
          rightH3: 'What we deliberately left out',
          right: [
            'The ABS also publishes the dollar value of approved building work. We used counts of dwellings only; projects at every age in our classes avoid money figures.',
            'Seasonally adjusted series exist too. We used the original series so that the model had to learn the seasons itself.'
          ]
        },
        {
          kind: 'source',
          html: 'Data: Australian Bureau of Statistics, Building Approvals (Data API dataflow BA_GCCSA), number of dwelling units, total residential, original, monthly, licensed under <a class="ag-inline-link" href="https://creativecommons.org/licenses/by/4.0/" rel="noopener" target="_blank">CC BY 4.0</a>. Downloaded 13 October 2026; all forecasts and errors are our calculation.'
        }
      ]
    },
    {
      id: 'ages',
      tint: 'deep',
      eyebrow: 'Projects by age',
      h2: 'Real projects at every age',
      lede: 'The four tests apply at 9 and at 67. The data, tools and maths change.',
      body: [
        {
          kind: 'table',
          caption: 'Typical real projects',
          head: ['Age', 'Project', 'Baseline it must beat'],
          rows: [
            [
              '9 to 12',
              'A program that learns to sort short words into groups from labelled examples',
              'Always guessing the biggest group'
            ],
            ['13 to 15', 'Predicting tomorrow\'s school-day temperature from past readings', 'Today\'s temperature again'],
            ['16 to 18', 'Classifying public text, such as dataset titles, by topic', 'A keyword rule'],
            ['Adults', 'Forecasting a public series, as above, with a full write-up', 'Last value and same month last year']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Age rules for AI tools',
          left: [
            'Real projects at school age are built in Python with no adult-only AI service. Where a project uses any online service, its own minimum age applies; our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> lists published rules.',
            'Younger learners can start with the <a class="ag-inline-link" href="/python-ai-course-for-kids-australia">Python AI course for kids</a>.'
          ],
          rightH3: 'Where these projects lead',
          right: [
            'Teens can take a project into a school task where the rules allow it, as their own work. Adults often turn one into a portfolio piece or a tool at work.',
            'Learners wanting a broader class route can read about <a class="ag-inline-link" href="/ai-and-machine-learning-classes-in-australia">AI and machine learning classes in Australia</a>.'
          ]
        }
      ]
    },
    {
      id: 'report',
      tint: '',
      eyebrow: 'The write-up',
      h2: 'The one-page report every project ends with',
      lede: 'Writing it is where most of the learning happens.',
      body: [
        {
          kind: 'table',
          caption: 'Report headings',
          head: ['Heading', 'What goes there'],
          rows: [
            ['Data', 'Source, licence, date downloaded, anything excluded and why'],
            ['Baseline', 'The simple method and its score'],
            ['Model', 'What it is, in plain words, and its score on unseen data'],
            ['Where it fails', 'The cases, groups or horizons where it does worse'],
            ['Use or not', 'An honest recommendation, including "use the baseline"']
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of project skill',
    lede: 'Learners usually complete a full project, report included, within one or two terms.',
    table: {
      caption: 'From tutorial follower to project owner',
      head: ['Level', 'What you can do'],
      rows: [
        ['1. Follower', 'Run a model on prepared data and read its score'],
        ['2. Tester', 'Write a baseline and test on held-back data'],
        ['3. Builder', 'Choose licensed data, build, test and report a project end to end'],
        ['4. Critic', 'Find where your own model fails and say so first']
      ]
    },
    left: {
      h3: 'Does a child really need baselines?',
      ps: [
        'Yes, in simple form. "Would guessing the biggest group do as well?" is a question a 10 year old can ask and answer.',
        'Children who learn it early question AI claims for life.'
      ]
    },
    right: {
      h3: 'Do adults need maths?',
      ps: [
        'School maths is enough to start. The ideas behind regression and error are taught as they are needed.',
        'Deeper maths is optional and offered when a project calls for it.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for project builders',
    lede: 'Three age bands. Each course includes at least one full project with a report.',
    bands: [
      {
        num: 'I',
        h3: 'Children',
        sub: 'Ages 9 to 12',
        courses: [
          { code: 'RAPA / KID / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'First smart programs.' },
          { code: 'RAPA / KID / 02', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'Understanding AI, ages 8 to 14.' },
          { code: 'RAPA / KID / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Python and maths, 10 to 15.' }
        ]
      },
      {
        num: 'II',
        h3: 'Teenagers',
        sub: 'Ages 13 to 18',
        courses: [
          { code: 'RAPA / TEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for Teens', blurb: 'Real models, tested.' },
          { code: 'RAPA / TEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Data and first models.' },
          {
            code: 'RAPA / TEN / 03',
            slug: 'orange-data-mining-visual-machine-learning-course-for-teens',
            title: 'Orange Data Mining for Teens',
            blurb: 'Visual machine learning.'
          }
        ]
      },
      {
        num: 'III',
        h3: 'Adults',
        sub: 'Ages 18 and over',
        courses: [
          { code: 'RAPA / ADL / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML Masterclass', blurb: 'Deep learning and GenAI.' },
          { code: 'RAPA / ADL / 02', slug: 'data-science-complete-masterclass-college', title: 'Data Science Course', blurb: 'Python, ML and more.' },
          { code: 'RAPA / ADL / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for Data Science', blurb: 'Statistics and linear algebra.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'Project lessons in Australian hours',
    lede: 'Lessons come from our team in India, at times that fall in Australian after-school hours, evenings and weekends. Everything is booked in your state\'s time, daylight saving included.',
    slots: [
      { time: 'After school', l: 'Children and teenagers.' },
      { time: 'Evening', l: 'Adults, by arrangement.' },
      { time: 'Weekend', l: 'Longer data and modelling sessions.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A baseline scored on real data, in one lesson.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners reviewing each other\'s reports.' },
      { h3: 'One to one', p: 'For one project, at your depth.' },
      { h3: 'Licensed data', p: 'Every dataset\'s licence noted.' },
      { h3: 'Baselines first', p: 'No model without something to beat.' },
      { h3: 'Age rules kept', p: 'No service below its minimum age.' }
    ]
  },
  projectsH2: 'Projects published by our learners',
  projectsLede: 'Work from our students that is still online for anyone to explore. The <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Verbatim Google reviews of our teaching, unedited.',
  fees: {
    h2: 'Fees for AI project lessons',
    lede: 'Learners in Australia pay a monthly fee in US dollars. Joining costs nothing, and lessons may stop at the close of any month.',
    free: ['A baseline on real data', 'A project idea matched to age', 'No payment details'],
    group: ['Fifteen to twenty learners per group', 'Report reviews between learners', 'A regular teacher', 'Stop at any month\'s close'],
    one: ['One learner\'s own project', 'Depth set by the learner', 'Times around school or work']
  },
  faq: {
    eyebrow: 'Learners and parents ask',
    h2: 'Questions about building real AI projects in Australia',
    items: [
      {
        q: 'What is a real AI project?',
        a: 'It is a project that uses data you are permitted to use, compares the model with a simple baseline, tests it on data the model has not seen, and reports honestly where it fails.'
      },
      {
        q: 'Can I use ABS data in my project?',
        a: 'The ABS says material on its website is provided under a Creative Commons Attribution 4.0 International licence, with exceptions such as the Coat of Arms, the ABS logo and trade-marked material. Credit the ABS, and check the specific product.'
      },
      {
        q: 'What is a baseline?',
        a: 'It is the simplest sensible method, such as repeating last month\'s value. A model is only worth using where it beats the baseline on unseen data.'
      },
      {
        q: 'Did your model beat the baselines?',
        a: 'One month ahead it was most accurate in 6 of 8 states and territories and for Australia. Twelve months ahead a simple baseline won in 4 of 8.'
      },
      { q: 'What age can a child start real AI projects?', a: 'Around 9, with small Python projects and the same four tests in simple form.' },
      { q: 'Do I need an AI account?', a: 'No. Projects are built in Python with free tools. Any online AI service used must allow the learner\'s age.' },
      {
        q: 'Can a project help with school or university?',
        a: 'Skills transfer, but assessed work must be the learner\'s own under the institution\'s rules. We never write assessed work.'
      },
      { q: 'What do lessons cost?', a: 'The first class is free and needs no card. Monthly fees appear in the fees section above.' }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Neighbouring AI pages.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Where all our Australian pages meet.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning classes', p: 'The broader class route.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-australia', label: 'Learn to train AI', p: 'Labels, training and testing.' },
      { href: '/python-ai-course-for-kids-australia', label: 'Python AI course for kids', p: 'For learners aged 9 to 13.' },
      { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens', p: 'Use, check and build.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Published minimum ages.' }
    ]
  },
  start: {
    h2: 'Book a free first class',
    lede: 'Tell us a phone number and a convenient time. In the free lesson we score a simple baseline on real Australian data together, then suggest a first project.',
    readFirst: 'You can also read about <a class="ag-inline-link" href="/how-we-teach">our teaching</a> or browse <a class="ag-inline-link" href="/courses">our full range</a> first.',
    note: 'The +91 number reaches our team in India; Modern Age Coders has no Australian premises. WhatsApp from an Australian mobile usually gets the fastest reply.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'AI projects',
        links: [
          { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning' },
          { href: '/learn-to-train-ai-not-just-prompt-it-australia', label: 'Learn to train AI' },
          { href: '/python-ai-course-for-kids-australia', label: 'Python AI for kids' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
          { href: '/ai-tools-age-guide', label: 'AI tool age guide' },
          { href: '/australian-student-hackathons', label: 'Student hackathons' }
        ]
      }
    ],
    bottomRight: 'Beat the baseline, or say so'
  },
  personalityCss: `
.ag-root.ag-rapa .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-rapa .ag-capsule { border-left-width: 7px; border-radius: 3px; }
.ag-root.ag-rapa .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-rapa .ag-table caption { text-align: left; font-weight: 615; }
.ag-root.ag-rapa .ag-band-head h3 { letter-spacing: -0.013em; }
.ag-root.ag-rapa .ag-slots { gap: 1.15rem; }
`,
  dossier: {
    curriculumAuthority: 'Australia, any age; Years 9 and 10 links. ABS website copyright and Creative Commons Attribution 4.0 statement (with exceptions and product-specific terms). ABS Data API, Building Approvals BA_GCCSA, dwelling unit counts. ACARA, Digital Technologies 7-10 v9: Years 9-10 elaborations on accessing ABS data and on predictive models and low-probability events.',
    localProject: 'Forecast error by horizon on ABS dwelling units approved (total residential, original, monthly 2010-01 to 2026-08), rolling origins from 2018-12, ridge regression on 12 lags plus month indicators vs this month again, same month last year and 12-month average. Australia model MAPE 8.9% (1 month) to 12.8% (12 months); naive 13.4% to 14.6%. Model most accurate in 6 of 8 jurisdictions at 1 month, 4 of 8 at 12 months; ACT above 95% for every method. Lesson family: forecast horizon decay against baselines.',
    requiredMentions: [
      'All material presented on this website is provided under a Creative Commons Attribution 4.0 International licence',
      'Where no indication of licensing is provided within the product, full copyright terms will apply.',
      'accessing and storing data from the Australian Bureau of Statistics in a format that is useful for analysis',
      'the complexities associated with training predictive models to capture events that occur with low probability',
      'How far ahead can a model forecast building approvals?',
      'BA_GCCSA',
      'Four tests every real AI project passes',
      'Ages 9 to 67'
    ],
    sources: [
      {
        claim: 'ABS, website privacy, copyright and disclaimer: CC BY 4.0 for material on the website, with exceptions; product-specific licensing; full copyright where no licence is indicated.',
        url: 'https://www.abs.gov.au/website-privacy-copyright-and-disclaimer'
      },
      {
        claim: 'ABS Data API, dataflow BA_GCCSA, measure 1 (number of dwelling units), total residential, original, monthly, Australia and states and territories.',
        url: 'https://data.api.abs.gov.au/rest/data/BA_GCCSA/1.1.9.TOT.100.10..M?startPeriod=2010-01'
      },
      {
        claim: 'ACARA, Digital Technologies 7-10 v9: Years 9-10 elaborations on accessing ABS data and on predictive models for low-probability events.',
        url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx'
      }
    ],
    rejectedClaims: [
      'Value of building work approved: a money measure in the same dataflow, deliberately not used.',
      'Australia\'s AI Ethics Principles (Department of Industry): the host did not answer from this network on two attempts, so they are not cited.',
      'Copyright text and data mining rules in Australia: not read raw at a primary source, so not discussed.',
      'Reasons behind ACT volatility (for example large apartment approvals): plausible but not verified, so not stated.',
      'Job or salary outcomes of AI portfolios: none on this page.'
    ]
  }
};
