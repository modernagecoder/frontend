'use strict';
// Cockburn, Perth (cg- district page, Australia cluster Phase 8, row 310). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council page (ABS LGA51820, City of Cockburn) under Perth and Western Australia.
// Spine: predict whether a stop record has an indented bus bay from the bays of its k nearest neighbours, across the
// 695 stop records inside the City of Cockburn. k = 1 memorises (training 100%, leave-one-out 84.9%); k = 5 is best
// (85.2%); from k = 25 the model always says "no bay" (81.4%, the majority share). Bootstrap flip rates show variance.
// Data: PTA-001 Stops (CC BY 4.0). Our calculation with numpy, seed 2026. Lesson family: bias-variance trade-off; claimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'COCKBURN',
    label: 'Cockburn, Perth',
    blurb: 'AI and programming classes for the City of Cockburn, where a model of bus bays shows how too little and too much smoothing both go wrong.'
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
  slug: 'ai-and-programming-classes-in-cockburn-perth',
  code: 'ckbn',
  accent: '#2A5444',
  accentRationale: 'Cockburn: a deep coastal green (hue 157.1), 6.96:1 on #EDE7DA; 28.7 RGB from the nearest Western Australian accent, 13.4 from any other Australian accent and 8.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Cockburn',
    eyebrow: 'City of Cockburn, Perth, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Cockburn' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Cockburn, Perth',
  title: 'AI and Programming Classes in Cockburn, Perth',
  description: 'Live online AI and programming classes across the City of Cockburn for learners aged 6 to 67, with machine learning on real local data, in groups or one to one.',
  ogDescription: 'Cockburn AI project: 695 stop records, a nearest-neighbour model of bus bays, and the k that balances memorising against oversmoothing.',
  twitterDescription: 'AI and programming for the City of Cockburn, live online.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Cockburn',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults across the City of Cockburn, taught live in English.'
  },
  h1: 'AI and programming classes in Cockburn',
  capsuleQ: 'What do Cockburn learners get from AI and programming classes?',
  capsule: 'Machine learning skills grounded in judgement: how to build a model, and how to tell when it is memorising noise or flattening real patterns. Six-year-olds start in Scratch, while teenagers and adults fit models in Python. The City of Cockburn had 118,091 residents in 2021.',
  lead: 'The state stops file gives every stop a bay field, and in the City of Cockburn most records say N. Can you guess which say Y from where a stop is? A nearest-neighbour model tries, and the number of neighbours it consults, k, decides whether it learns the streets or just learns the average.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Cockburn.',
  picks: {
    eyebrow: 'Course picks for Cockburn',
    h2: 'Courses that teach models and their limits',
    intro: 'The bus bay project needs Python, numpy and a feel for evaluation. These courses build that understanding; a free trial chooses the starting level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Nearest neighbours, regression and honest evaluation, coded by hand.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Machine learning foundations through to tuned, validated models.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Maps, distances and data handling in Python.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Beginner Python and AI with results children can test.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Cockburn in the Census',
      h2: 'A large council of family homes',
      intro: '2021 Census QuickStats for the City of Cockburn local government area (ABS code LGA51820), with the Western Australian figure for comparison.',
      body: [
        {
          kind: 'table',
          caption: 'City of Cockburn, 2021',
          head: ['Measure', 'City of Cockburn'],
          rows: [
            ['Residents', '118,091'],
            ['Median age', '37'],
            ['Families', '32,804'],
            ['Private dwellings', '48,394'],
            ['People per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Cockburn against Western Australia',
          head: ['Indicator', 'Cockburn', 'Western Australia'],
          rows: [
            ['Separate houses', '81.3% (35,391)', '79.7%'],
            ['Workers who drove to work', '64.9% (40,804)', '62.1%'],
            ['Workers who travelled by train', '2.7% (1,685)', '1.8%'],
            ['Adults with a bachelor degree or higher', '24.5% (23,300)', '23.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'The council area counted 7,881 children under five, 7,762 aged 5 to 9 and 7,328 aged 10 to 14.' },
            { h3: 'Teenagers', p: 'A further 6,500 residents were aged 15 to 19.' },
            { h3: 'Size', p: 'The council area covers about 168 square kilometres south of Fremantle.' }
          ]
        },
        { kind: 'p', text: 'These are council-wide figures, quoted as the bureau published them after its privacy adjustments, and never added together by us.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One neighbour, five, or forty-five?',
      intro: 'By our boundary check, 695 stop records lie inside the City of Cockburn, and 129 of them have Y in the bay field. For each stop we predicted bay or no bay from a vote of its k nearest stops, then scored the guesses two ways: on the stops the model had seen, and leaving each stop out in turn.',
      body: [
        {
          kind: 'table',
          caption: 'Accuracy and stability by k (our calculation)',
          head: ['k', 'Training accuracy', 'Leave-one-out accuracy', 'Stops whose guess ever flips'],
          rows: [
            ['1', '100%', '84.9%', '52.2%'],
            ['5', '89.1%', '85.2%', '62.4%'],
            ['15', '82.6%', '81.2%', '42.5%'],
            ['45', '81.4%', '81.4%', '3.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Low bias, high variance',
              p: 'With k = 1 the model is perfect on stops it has seen, because each stop is its own nearest neighbour. On unseen stops it drops to 84.9%.'
            },
            {
              h3: 'High bias, low variance',
              p: 'From k = 25 upward the vote is always "no bay", the answer for 81.4% of stops. The guesses never change, and they never find a bay.'
            },
            {
              h3: 'The middle',
              p: 'At k = 5 the model scored highest on unseen stops, 85.2%. That beats always saying no bay by under four points: location alone carries only a modest signal.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Measuring variance directly',
          p: 'We rebuilt the model on 200 bootstrap resamples of the stops and counted how often each stop\'s guess changed. Up to k = 15, between 42% and 62% of stops flipped at least once. At k = 45 only 3.7% did. Stability arrived exactly when usefulness left.'
        },
        {
          kind: 'p',
          text: 'Stop records come from the Public Transport Authority of Western Australia open data file, which marks each stop with a bay field. We decided which stops fall inside the council with our own boundary test, measured distances on a flat metre grid, and computed every accuracy and resampling figure ourselves in numpy, seed 2026. The bay field describes the file, not a site survey.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Machine learning practice',
      h2: 'Choosing k without fooling yourself',
      intro: 'The trade-off is general: every model has some setting that moves it between memorising and oversimplifying.',
      body: [
        {
          kind: 'table',
          caption: 'Good practice, with the Cockburn result',
          head: ['Practice', 'Why', 'Here'],
          rows: [
            ['Never judge on training data', 'k = 1 always scores 100% there', 'Hides the drop to 84.9%'],
            ['Compare with a baseline', 'Always guessing the majority class', '81.4%'],
            ['Scan the setting', 'Try a range of k values', 'Highest at k = 5'],
            ['Check stability', 'Refit on resampled data', 'Flip rates of 3.7% to 62.4%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Guess a classmate\'s favourite colour by asking one friend, then five, then the whole class, and compare.' },
            { h3: 'Secondary learners', p: 'Code nearest neighbours in numpy, plot training against leave-one-out accuracy, and explain the gap.' },
            { h3: 'Adults', p: 'Ask of any model at work: what is the baseline, and how does the score change on data it has not seen?' }
          ]
        },
        {
          kind: 'p',
          text: 'Leave-one-out testing is cheap for nearest neighbours because the model stores the data and has nothing to retrain. For slower models, k-fold cross-validation does the same job.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Cockburn',
      h2: 'Two rail stations and many suburbs',
      intro: 'Council-level markers from the state stops file and the WA school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Rail', p: 'Inside the council boundary, by our check, are platform records for Cockburn and Aubin Grove stations: five in all.' },
            { h3: 'School stops', p: '42 of the 695 stop records are typed as school stops, and Rockingham Road carries the most records, 47.' },
            { h3: 'Term 4, 2027', p: 'WA public school Term 4 of 2027 starts on Monday 11 October and ends on Thursday 16 December.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council figures',
          p: 'This page covers the City of Cockburn local government area. Stop records inside it carry many suburb labels, the most common being Hamilton Hill (82), Spearwood (62) and Bibra Lake (61). Those suburbs and the neighbouring councils of Fremantle, Melville and Kwinana have their own separate figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From asking friends to tuning models',
    intro: 'These ages are approximate; the trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games that teach step-by-step thinking.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI ideas',
        p: 'First code and simple models trained on examples.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Machine learning',
        p: 'Building, testing and tuning models in Python.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Data science and machine learning for work or study.',
        courses: ['data-science-complete-masterclass-college', 'ai-ml-masterclass-complete-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can tune the model. Can it tell you it barely helps?',
    intro: 'Only if you ask the right question. Automated tools will happily report a winning k without mentioning the baseline.',
    p1: 'An assistant asked to "tune k" will run a search and report 85.2%. Impressive on its own, less so beside the 81.4% you get by always guessing no bay. Without that comparison, a weak model sounds strong.',
    p2: 'Learners who have watched training accuracy sit at 100% while real accuracy falls know which numbers to distrust and which baseline to demand. That judgement is what turns AI output into a decision.',
    closer: 'In Cockburn, the learner who asks for the baseline knows how much a model is really worth.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Cockburn learners take part',
    intro: 'Lessons run live on video, reachable from any suburb in the council area.',
    cells: [
      { h3: 'Notebooks together', p: 'Teacher and learner run cells and read every score side by side.' },
      { h3: 'Term calendar', p: 'Plans follow WA school terms, with holiday breaks.' },
      { h3: 'Trial at no cost', p: 'A full opening lesson and a candid recommendation.' },
      { h3: 'Matched classmates', p: 'Each group holds fifteen to twenty learners at the same stage; private lessons are the alternative.' },
      { h3: 'A twice-weekly rhythm', p: 'The same two slots each week make roughly eight lessons monthly.' },
      { h3: 'India time', p: 'Teachers work from India, so a 7pm Cockburn class begins at 4:30pm India time.' }
    ],
    spec: {
      title: 'Perth and India clocks',
      p: 'Neither Western Australia, since March 2009 (IANA time zone database), nor India uses daylight saving, so the two and a half hour gap is constant.'
    }
  },
  fees: {
    h2: 'Fees for Cockburn learners',
    intro: 'Three prices for everyone.',
    first: 'The first lesson is free and comes with a written plan.',
    group: 'Around eight group lessons a month with fifteen to twenty learners.',
    private: 'Around eight private lessons a month with one teacher.',
    closer: 'Cockburn families pay in US dollars, after the trial and once a course and weekly time are agreed. School holidays, sick days and moving between formats are all explained on our pricing page.'
  },
  reviewsH2: 'Our Google reviews',
  book: {
    h2: 'Book a free Cockburn class',
    intro: 'Mention the learner\'s age and what they hope to do. Older students might first scan k on the bus bay data, younger ones play a Scratch guessing game.',
    success: 'Thank you. Our team will contact you soon about a Cockburn class.'
  },
  faq: {
    h2: 'Cockburn AI and programming questions',
    intro: 'What Cockburn families and adult learners tend to ask.',
    items: [
      {
        q: 'What is the population of the City of Cockburn?',
        a: 'The 2021 Census QuickStats count 118,091 residents in the City of Cockburn local government area, with 48,394 private dwellings and a median age of 37.'
      },
      {
        q: 'What is the bias-variance trade-off?',
        a: 'The tension between models that are too simple, which miss real patterns (bias), and models that are too flexible, which chase noise and change with every sample (variance). Good settings balance the two.'
      },
      {
        q: 'What is k-nearest neighbours?',
        a: 'A method that predicts a value for a point from the k most similar points in the data, for example by majority vote. Small k follows local detail; large k smooths towards the overall average.'
      },
      {
        q: 'What did the Cockburn bus bay model find?',
        a: 'Across 695 stop records, k = 5 reached 85.2% leave-one-out accuracy, against 81.4% for always guessing no bay; k = 1 scored 100% on training data but 84.9% on unseen stops.'
      },
      {
        q: 'Can children learn AI?',
        a: 'Yes. Six-year-olds can explore AI through Scratch games, and most learners train genuine models in Python from about thirteen.'
      },
      { q: 'Do under-18s use Claude?', a: 'No. Claude-based courses are for adults of 18 and over only; younger learners use other AI tools.' },
      {
        q: 'Is there a classroom in Cockburn?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Cockburn learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do Cockburn group classes include Copilot Studio?', a: 'No. Copilot Studio is taught only one to one; group learners write agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Perth and Western Australia',
    h2: 'More for Cockburn learners',
    html: 'Visit <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">the Perth page</a> or <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a>. Down the coast, <a class="cg-inline-link" href="/ai-and-programming-classes-in-mandurah">Mandurah</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-bunbury">Bunbury</a> have pages of their own, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">the Western Australia guide</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Cockburn and Perth',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/ai-and-programming-classes-in-mandurah', label: 'Mandurah' },
    { href: '/vibe-coding-and-ai-agents-classes-in-bunbury', label: 'Bunbury' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' }
  ],
  personalityCss: `
.cg-root.cg-ckbn .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-ckbn .cg-hero h1 { font-weight: 670; letter-spacing: -0.019em; line-height: 1.06; }
.cg-root.cg-ckbn .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.7rem 0 0.7rem 1.2rem; }
.cg-root.cg-ckbn .cg-eyebrow { letter-spacing: 0.135em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-ckbn .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.013em; }
.cg-root.cg-ckbn .cg-grid-3 { gap: clamp(0.88rem, 2.25vw, 1.72rem); }
.cg-root.cg-ckbn .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-ckbn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ckbn .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-ckbn .cg-callout { border-left-width: 3px; border-radius: 6px; }
`,
  dossier: {
    curriculumAuthority: 'City of Cockburn (LGA51820). ABS Census 2021 QuickStats (read 12 October 2026): 118,091 people; median age 37; 32,804 families; 48,394 private dwellings; 2.6 per household; separate houses 35,391 (81.3%, WA 79.7%); drove 40,804 (64.9%, WA 62.1%); train 1,685 (2.7%, WA 1.8%); bachelor or higher 23,300 (24.5%, WA 23.8%); aged 0-4 7,881; 5-9 7,762; 10-14 7,328; 15-19 6,500. ABS LGA area 167.9415 sq km. Neighbouring LGAs (ABS touches): Armadale, Canning, Fremantle, Gosnells, Kwinana, Melville, Serpentine-Jarrahdale. PTA-001: 695 records inside the LGA polygon (Standard 647, School 42, Rail 5, regional coach 1); rail platform records Cockburn Stn 1-3, Aubin Grove Stn 1-2; bay Y 129; suburb labels Hamilton Hill 82, Spearwood 62, Bibra Lake 61, Success 58, Coolbellup 51; Rockingham Rd 47. WA 2027 Term 4: Monday 11 October to Thursday 16 December. Perth no daylight saving since March 2009 (IANA). No other AU page covers Cockburn.',
    localProject: 'Bias-variance with kNN. 695 PTA-001 records inside LGA51820; target bay (Y 129, N 566; majority 81.44%). Flat projection to metres. Majority vote of k nearest (ties to N). Training accuracy (self included) and leave-one-out: k1 100% / 84.89%; k3 92.37 / 83.74; k5 89.06 / 85.18; k9 85.90 / 84.32; k15 82.59 / 81.15; k25 and above 81.44 / 81.44. Bootstrap (200 resamples, default_rng(2026), self copies excluded): share of stops whose prediction flips at least once k1 52.2%, k5 62.4%, k15 42.5%, k45 3.7%.',
    requiredMentions: ['118,091', '48,394', '6,500', 'Aubin Grove', 'Hamilton Hill', 'Rockingham Road', '85.2%', '84.9%', 'bias-variance'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Cockburn local government area (LGA51820), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA51820'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Public Transport Authority of Western Australia, Stops (PTA-001), Creative Commons Attribution 4.0, published on data.wa.gov.au; 16,822 stop records read from the SLIP map service on 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/public-transport-authority-stops-bus-stops'
      },
      {
        claim: 'scikit-learn documentation, Nearest Neighbors: classification by majority vote of the k nearest neighbours.',
        url: 'https://scikit-learn.org/stable/modules/neighbors.html'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 public school terms as gazetted.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth follows rule AW, whose last daylight saving period ended in March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That location causes a stop to have a bay: not claimed; the model only finds a weak spatial pattern.',
      'That the bay field matches what is on the street today: not claimed; it describes the file.',
      'Figures for individual Cockburn suburbs from the Census: not used; council figures only.',
      'Passenger or service numbers: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Cockburn or the Public Transport Authority.'
    ]
  }
};
