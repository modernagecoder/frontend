'use strict';
// Burwood, Sydney (cg- district page, Australia cluster Phase 8, row 210). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: squeeze every train station's 23-month entry pattern through a two-number bottleneck and rebuild
// it. How well does Burwood's pattern survive, and what does a trained linear autoencoder converge to?
// Data: Transport for NSW, Train Station Entries and Exits, monthly (CC BY), 2024-10 to 2026-08, read
// 10 October 2026. Train stations (Station_Type Train), Entry rows, names whitespace-normalised: 296 in
// total, 270 with a number in all 23 months. Profile = each month divided by the station's own mean,
// then centred on the average profile. SVD variance share: 0.2914, 0.164, 0.107, 0.085. Burwood RMS
// reconstruction error and rank (1 = least typical, of 270): no components 0.0355 (257), 1: 0.0309
// (227), 2: 0.0300 (192), 3: 0.0277 (191); medians 0.0587, 0.0504, 0.0425, 0.0400. Gradient-descent
// linear autoencoder, 2 hidden units, seed 2026: MSE 0.011495 at epoch 0, 0.006284 at 1,000, 0.006155 at
// 30,000, equal to the PCA optimum 0.006155; Burwood error 0.0300 (scratchpad au/b1/bwda_ae.py).
// Burwood Station monthly entries: lowest 418,631 (2025-01), highest 563,430 (2026-03), mean 502,685;
// August 2026 553,354. Lesson family: linear autoencoder bottleneck and reconstruction error; 0 hits.
// Place facts: ABS Census 2021 QuickStats, Burwood LGA (LGA11300); NSW schools master dataset (CC BY):
// Burwood Public School first teacher 1858-04-01, Croydon Public School 1884, Croydon Park Public School
// 1886, Enfield Public School 1924.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BURWOOD',
    label: 'Burwood, Sydney',
    blurb: 'AI and programming for Burwood, with an autoencoder that compresses 270 stations\' monthly patterns into two numbers each.'
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
  slug: 'ai-and-programming-classes-in-burwood-sydney',
  code: 'bwda',
  accent: '#663626',
  accentRationale: 'Burwood: a dark brick brown (hue 15), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 9.8:1 on white and 8.0:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Burwood',
    eyebrow: 'Burwood Council area, Sydney, New South Wales',
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
  routeLabel: 'Burwood, Sydney',
  title: 'AI and Programming Classes in Burwood, Sydney',
  description: 'Live online AI, machine learning and programming classes for Burwood teenagers and adults, one to one or in small groups with real teachers. First lesson is free.',
  ogDescription: 'AI classes for Burwood, with a project that squeezes 270 stations\' monthly patterns through a two-number autoencoder and shows gradient descent landing on the same answer as PCA.',
  twitterDescription: 'Burwood AI and programming classes, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Burwood',
    description: 'Level-matched online AI, machine learning and Python programming for teenagers and adults in the Burwood Council area, taught live in English.'
  },
  h1: 'AI and programming classes in Burwood',
  capsuleQ: 'Where should Burwood learners look for the best AI and programming classes?',
  capsule: 'To live online classes where a teacher takes Burwood teenagers and adults from Python into machine learning, building each model by hand before using a library. The 2021 Census counted 40,217 people in the Burwood Council area, with a median age of 34 and 12.5% aged 20 to 24. Lessons are one to one or in a small group at one level, and the first lesson is free.',
  lead: 'An autoencoder is a neural network asked to copy its input through a narrow middle layer. If it can rebuild the input from only a few numbers, those numbers have captured what matters. We gave one the monthly entry pattern of every NSW train station with a full record, 270 of them over 23 months, and a middle layer of just two numbers. Trained by gradient descent from random weights, its error fell from 0.011495 to 0.006155, exactly the figure principal component analysis gives directly. Burwood\'s pattern came back with an error of 0.0300, closer than most, because its year looks a lot like the network\'s average year.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Burwood.',
  picks: {
    eyebrow: 'Course picks for Burwood',
    h2: 'Courses where models are built, not just called',
    intro: 'Each course builds the skills the autoencoder project uses. A free trial lesson sets the level, with no payment details taken.',
    items: [
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 13 to 18',
        note: 'Machine learning from scratch in Python: regression, classification and small neural networks.'
      },
      {
        course: 'artificial-intelligence-complete-masterclass-college',
        band: 'University and adult',
        note: 'AI from foundations to deep learning, with the maths explained as it is used.'
      },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Data handling, dimensionality reduction and modelling on real public datasets.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'The Python needed before any of the AI work, taught properly from the start.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Burwood in the Census',
      h2: 'A small council area with a large share of young adults',
      intro: 'From the 2021 Census QuickStats for the Burwood local government area, compared with New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Burwood Council area at the 2021 Census',
          head: ['Item', 'Burwood'],
          rows: [
            ['Population', '40,217'],
            ['Private dwellings', '16,160'],
            ['Median age', '34'],
            ['Mean household size', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Burwood beside the state and the country',
          head: ['Share', 'Burwood', 'NSW', 'Australia'],
          rows: [
            ['People aged 20 to 24', '12.5% (5,006)', '6.1%', '6.2%'],
            ['Flats or apartments, occupied homes', '49.1% (6,944)', '21.7%', '14.2%'],
            ['Bachelor degree or higher, aged 15 and over', '37.8% (13,395)', '27.8%', '26.3%'],
            ['Professionals, employed residents', '30.2% (5,659)', '25.8%', '24.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Twice the state share', p: 'One Burwood resident in eight was aged 20 to 24, roughly double the proportion across New South Wales.' },
            { h3: 'Half in apartments', p: 'Flats or apartments made up 49.1% of occupied homes, against 34.5% that were separate houses.' },
            { h3: 'Households', p: 'Homes held 2.7 people on average, slightly above the NSW figure of 2.6.' }
          ]
        },
        {
          kind: 'p',
          text: 'To keep individuals unidentifiable, the bureau perturbs each cell slightly, which means component figures need not add up to the published total. We report published numbers only and calculate no totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Two numbers per station, and how much of Burwood survives',
      intro: 'Each station\'s 23 monthly entry counts are divided by its own average, so a busy station and a quiet one can be compared by shape alone. The network\'s average shape is then removed, leaving only what makes each station different.',
      body: [
        {
          kind: 'table',
          caption: 'Reconstruction error by size of the bottleneck, 270 train stations (our calculation)',
          head: ['Numbers kept per station', 'Burwood error', 'Median error', 'Burwood rank, 1 = least typical'],
          rows: [
            ['0 (average shape only)', '0.0355', '0.0587', '257 of 270'],
            ['1', '0.0309', '0.0504', '227 of 270'],
            ['2', '0.0300', '0.0425', '192 of 270'],
            ['3', '0.0277', '0.0400', '191 of 270']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Training a two-number linear autoencoder by gradient descent (our calculation)',
          head: ['Training step', 'Mean squared error'],
          rows: [
            ['Random start', '0.011495'],
            ['After 1,000 epochs', '0.006284'],
            ['After 30,000 epochs', '0.006155'],
            ['Principal component analysis, no training', '0.006155']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Already close to average',
              p: 'With nothing but the network\'s average shape, Burwood\'s error is 0.0355 against a median of 0.0587. Only 13 stations sit closer to the average year.'
            },
            {
              h3: 'The bottleneck helps others more',
              p: 'Each extra number shrinks the typical station\'s error faster than Burwood\'s, so Burwood slides from 257th to 192nd as the model learns the common ways stations differ.'
            },
            {
              h3: 'Same answer, two routes',
              p: 'A linear autoencoder trained by gradient descent ends at 0.006155, the error PCA reaches in one calculation. With no nonlinearity, the network can only rediscover PCA.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What error does not explain',
          p: 'Bankstown is among the three hardest stations to rebuild at every bottleneck size, and Clarendon at three of the four. A large error flags an unusual pattern of months; it does not reveal why, and we make no claim about the cause for any station.'
        },
        {
          kind: 'p',
          text: 'The profiles, components, errors, ranks and training run are our own calculations from the Transport for NSW file, with 26 train stations left out because at least one month was missing or published only as "Less than 50". The weights start from a fixed random seed so that learners can reproduce every number.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Burwood Station',
      h2: 'A quieter January, a busier 2026',
      intro: 'Read directly from the published monthly entries for Burwood Station.',
      body: [
        {
          kind: 'table',
          caption: 'Burwood Station entries, October 2024 to August 2026',
          head: ['Month or measure', 'Entries'],
          rows: [
            ['Lowest month, January 2025', '418,631'],
            ['Highest month, March 2026', '563,430'],
            ['August 2026', '553,354'],
            ['Monthly mean over 23 months (our calculation)', '502,685']
          ]
        },
        {
          kind: 'p',
          text: 'Divided by its mean, Burwood\'s January 2025 comes to 0.833, while the average station\'s January 2025 stands at 0.812. That small difference is typical of Burwood: its dips and peaks follow the network closely, which is exactly why the autoencoder rebuilds it well.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Normalise the profiles with NumPy, compute the average shape, and find which stations differ most from it.' },
            { h3: 'Senior students', p: 'Write the autoencoder\'s forward pass and gradients by hand, train it, and check the loss against PCA.' },
            { h3: 'Adults', p: 'Use reconstruction error to flag unusual records in work data, and learn when a nonlinear autoencoder is worth it.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, the NSW Department of Education, Burwood Council and the statistics bureau publish this open data and are not associated with Modern Age Coders. The modelling belongs to us.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Burwood',
      h2: 'A first teacher in 1858',
      intro: 'From the NSW schools file, the station counts and the 2027 school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Burwood Public School',
              p: 'Its first teacher is recorded in April 1858, the earliest date among the government schools of the Burwood Council area.'
            },
            {
              h3: 'Croydon and Croydon Park',
              p: 'Croydon Public School follows in 1884 and Croydon Park Public School in 1886, with Enfield Public School in 1924.'
            },
            { h3: 'Croydon Station', p: 'Croydon Station counted 58,449 entries in August 2026, about a tenth of Burwood Station\'s 553,354.' }
          ]
        },
        {
          kind: 'spec',
          title: 'School year 2027',
          p: 'NSW Eastern division Term 3 runs from Tuesday 20 July to Friday 24 September 2027, and Term 4 from Tuesday 12 October to Monday 20 December. Group lessons follow those breaks.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to a trained network',
    intro: 'The age bands are only a guide; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 12',
        h3: 'Thinking like a programmer',
        p: 'Scratch and puzzles that build sequencing, patterns and debugging.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 15',
        h3: 'Python foundations',
        p: 'Python done properly, then the maths that machine learning leans on.',
        courses: ['python-complete-masterclass-teens', 'maths-through-coding']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Machine learning',
        p: 'Models built from first principles and tested honestly.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Deep learning and data',
        p: 'Neural networks, dimensionality reduction and full data projects.',
        courses: ['artificial-intelligence-complete-masterclass-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'With AI libraries a click away, why train a Burwood learner to build one by hand?',
    intro: 'Because knowing what a network can and cannot learn is what stops you trusting one that has learned nothing new.',
    p1: 'A library will train an autoencoder in three lines. Only someone who has written the gradients knows that, without a nonlinear layer, thirty thousand epochs of training end exactly where PCA started, at 0.006155. That is a lesson about architecture no amount of calling functions teaches.',
    p2: 'Learners who have watched Burwood\'s error fall from 0.0355 to 0.0300 also learn to read reconstruction error with care. It can point at unusual records, but it says nothing about causes, and they will not let a model pretend otherwise.',
    closer: 'In 2026 anyone can import a neural network, and the Burwood learner who knows when it is secretly a straight line is the one who designs one that is not.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Burwood, Croydon and Enfield homes',
    intro: 'Schools in the council area have addresses in Burwood, Croydon, Croydon Park and Enfield; an online class serves each equally.',
    cells: [
      { h3: 'Code together', p: 'Learner and teacher work in the same notebook, so every line of a model is written and explained live.' },
      { h3: 'Fits the NSW year', p: 'Topics match the NSW stages, and lessons break when the state school holidays begin.' },
      { h3: 'A free lesson first', p: 'The trial is a full lesson, finishing with a recommended course, level and time and no charge.' },
      { h3: 'Small groups', p: 'Five to ten learners at one level per group, or one to one if preferred.' },
      { h3: 'Steady schedule', p: 'Two set lessons each week, around eight per month.' },
      { h3: 'Teachers in India', p: 'A 7pm Burwood lesson in daylight saving time begins at 1:30pm India time; in winter, at 2:30pm there.' }
    ],
    spec: {
      title: 'Sydney time, always',
      p: 'Daylight saving in Sydney begins on Sunday 4 October 2026 and ends on Sunday 4 April 2027, while India stays on one time all year. Lesson times are given in Sydney time.'
    }
  },
  fees: {
    h2: 'What Burwood learners pay',
    intro: 'A free start and two monthly options.',
    first: 'The opening lesson is free and ends with a plan.',
    group: 'Group format: around eight lessons a month among five to ten learners.',
    private: 'One-to-one format: around eight lessons a month with your own teacher.',
    closer: 'Learners outside India pay in US dollars, so Burwood fees match everywhere else and there is no area-specific list. You pay only after the trial, once the course and time are decided; holidays, missed lessons and changes of format are set out on the pricing page.'
  },
  reviewsH2: 'Google reviews from our families',
  book: {
    h2: 'Book a free Burwood lesson',
    intro: 'Share the learner\'s age and interests. A Year 11 student could begin by normalising station profiles; an adult could start by training the autoencoder.',
    success: 'Thank you. We will contact you shortly about the Burwood lesson.'
  },
  faq: {
    h2: 'Burwood AI and programming questions',
    intro: 'What Burwood families and adult learners ask most often.',
    items: [
      {
        q: 'How many people live in the Burwood Council area?',
        a: 'QuickStats from the 2021 Census give 40,217 people and 16,160 private dwellings for the Burwood local government area.'
      },
      {
        q: 'What is an autoencoder?',
        a: 'An autoencoder is a neural network trained to reproduce its input after passing it through a narrow middle layer. The middle layer becomes a compressed summary, and the reconstruction error shows how well the summary captures the input.'
      },
      {
        q: 'What is the Burwood autoencoder project?',
        a: 'Learners compress the 23-month entry pattern of 270 NSW train stations into two numbers each, rebuild the patterns, and measure the error. Burwood Station\'s error is 0.0300 against a median of 0.0425.'
      },
      {
        q: 'Why does the trained network match PCA exactly?',
        a: 'A linear autoencoder with squared error can only learn the same subspace principal component analysis finds. Gradient descent reached 0.006155, the PCA error, after enough epochs.'
      },
      {
        q: 'Does a high error mean something went wrong at a station?',
        a: 'Not necessarily. It means the station\'s pattern across months is unusual compared with the rest. The data does not say why, and the project draws no conclusions about causes.'
      },
      {
        q: 'Do learners need advanced maths?',
        a: 'Teenagers need confident algebra and some practice with Python lists. Matrix ideas are taught as the project needs them.'
      },
      { q: 'Is there anything for younger children?', a: 'Yes. From age six, children start with Scratch and problem-solving, and move to Python when ready.' },
      {
        q: 'Do you have a centre in Burwood?',
        a: 'No. All lessons happen live online, and we run no premises in Australia. A computer with audio and a dependable connection is all that is needed; the number we list is in India.',
        boiler: true
      },
      {
        q: 'What do AI classes cost for Burwood learners?',
        a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, roughly eight lessons, with five to ten learners, or USD 150 a month one to one on the same timetable. Course, format and time are fixed before any payment.',
        boiler: true
      },
      {
        q: 'How are learners grouped?',
        a: 'By level, pace and goals, in groups of five to ten, regardless of age or location. One-to-one lessons are available when no group time works.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Burwood learners',
    html: 'Neighbouring <a class="cg-inline-link" href="/online-coding-and-python-classes-in-strathfield-sydney">Strathfield</a> has a page on percentile ranks, and <a class="cg-inline-link" href="/ai-and-programming-classes-in-ku-ring-gai-sydney">Ku-ring-gai</a> one on lasso regression. For the wider picture, see the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney coding classes page</a> or <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">classes across New South Wales</a>.',
    waLabel: 'WhatsApp us'
  },
  footerHeading: 'Burwood and Sydney',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-strathfield-sydney', label: 'Strathfield' },
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-bwda .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.6vw, 2.8rem); }
.cg-root.cg-bwda .cg-hero h1 { font-weight: 760; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-bwda .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.9rem 1rem; border-radius: 6px; }
.cg-root.cg-bwda .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bwda .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.018em; }
.cg-root.cg-bwda .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2rem); }
.cg-root.cg-bwda .cg-table caption { font-weight: 600; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-bwda .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-bwda .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-bwda .cg-callout { border-left-width: 5px; border-radius: 0 6px 6px 0; }
`,
  dossier: {
    curriculumAuthority: 'Burwood, ABS Census 2021 QuickStats, Burwood local government area LGA11300 (read 10 October 2026): 40,217 people; median age 34 (NSW 39, Australia 38); 16,160 private dwellings; average 2.7 people per household (NSW 2.6); age 20 to 24 5,006 (12.5 percent; NSW 6.1; Australia 6.2); flat or apartment 6,944 (49.1 percent; NSW 21.7; Australia 14.2); separate house 4,871 (34.5 percent); Bachelor Degree level and above 13,395 (37.8 percent; NSW 27.8; Australia 26.3); Professionals 5,659 (30.2 percent; NSW 25.8; Australia 24.0). NSW Department of Education master dataset (CC BY), LGA = Burwood: Burwood Public School Date_1st_teacher 1858-04-01, Croydon Public School 1884-02-01, Croydon Park Public School 1886-02-01, Enfield Public School 1924-01-01; Town_suburb values Burwood, Croydon, Croydon Park, Enfield. NSW 2027 term dates, Eastern division: Term 3 Tuesday 20 July to Friday 24 September; Term 4 Tuesday 12 October to Monday 20 December. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Linear autoencoder bottleneck and reconstruction error. Transport for NSW Train Station Entries and Exits, monthly (CC BY), 23 months 2024-10 to 2026-08; Entry rows, Station_Type Train, names whitespace-normalised; 296 stations, 270 with a number every month. Profile = month / station mean, centred on the mean profile. SVD variance shares 0.2914, 0.164, 0.107, 0.085. RMS reconstruction error, Burwood Station (rank of 270, 1 = least typical) and median: k=0 0.0355 (257) 0.0587; k=1 0.0309 (227) 0.0504; k=2 0.0300 (192) 0.0425; k=3 0.0277 (191) 0.0400. Least typical at k=0: Gerringong, Clarendon, Bankstown; k=3: Warabrook, Bankstown, Yagoona. Linear autoencoder 23-2-23, gradient descent, seed 2026: MSE 0.011495 (epoch 0), 0.006284 (1,000), 0.006157 (5,000), 0.006155 (30,000); PCA k=2 optimum 0.006155; Burwood AE error 0.0300. Burwood Station entries: min 418,631 (2025-01), max 563,430 (2026-03), mean 502,685, August 2026 553,354; profile January 2025 0.833 vs mean profile 0.812. Croydon Station August 2026 58,449.',
    requiredMentions: ['40,217', '16,160', '13,395', '553,354', '418,631', '563,430', 'Burwood Public School', 'Croydon Park Public School', '0.006155'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Burwood local government area (LGA11300).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA11300'
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
      'Why Clarendon, Bankstown or any other station has an unusual monthly pattern: not established by the data, so no cause is given.',
      'That Burwood or Croydon stations lie inside the Burwood Council area: not verified, so no council claim is made for stations.',
      'Single-sex school names and school subtypes: left out as unnecessary.',
      'That the four address suburbs are every suburb in the council area: not claimed; they are only school addresses.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, Burwood Council or the ABS.'
    ]
  }
};
