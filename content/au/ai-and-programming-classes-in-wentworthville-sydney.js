'use strict';
// Wentworthville, Sydney (cg- district page, Australia cluster Phase 8, row 242). Keyword slug in the rotation
// (ai-and-programming-classes-in-*). Wentworthville is an ABS suburb and locality (SAL14245); its state schools
// are split between Cumberland and City of Parramatta councils. Parents: Australia, NSW, Sydney.
// Spine: four models of Wentworthville station's monthly entries, scored with R squared. The 13-parameter model
// explains 93.4% of the variation in the months it was fitted on; on six held-out months its score is 0.699 or
// -0.984 depending on which mean it is compared with. What does R squared really measure?
// Data: Transport for NSW, Train station entries and exits (Opal, CC BY), monthly, October 2024 to August 2026.
// Our run (scratchpad au/b5/wvl_r2.py), least squares with numpy: train October 2024 to February 2026 (17
// months), test March to August 2026 (6). R squared fitted on all 23 / held out vs test mean / held out vs
// training mean / mean absolute error on test: mean 0.000 / -5.598 / 0.000 / 7,331; trend 0.094 / -7.218 /
// -0.246 / 8,334; month of year 0.875 / -2.411 / 0.483 / 5,103; both 0.934 / -0.984 / 0.699 / 3,865.
// Station (ours): min 68,953 (January 2025), max 97,307 (March 2026), average 87,159 a month, 58th of 270
// train stations with all 23 months; Westmead 151,164 (35th), Pendle Hill 70,999 (68th).
// Lesson family: coefficient of determination (R squared), in-sample vs held-out, baseline choice; claimed 10 Oct 2026.
// Place facts: ABS Census 2021 QuickStats, Wentworthville (NSW) SAL14245; ABS ASGS 2021 SAL area 3.1203 square km.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health, journey to work and
// working at home; enrolment, ICSEA, Indigenous, LBOTE and selective columns. No causes given for monthly changes.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WENTWORTHVILLE',
    label: 'Wentworthville, Sydney',
    blurb: 'AI and programming for Wentworthville, with a project that scores four models of station entries with R squared and learns why the score can mislead.'
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
  slug: 'ai-and-programming-classes-in-wentworthville-sydney',
  code: 'wvle',
  accent: '#1B543E',
  accentRationale: 'Wentworthville: a deep bottle green (hue 155), chosen by hand at least 10 RGB units from every accent declared in content, the shared stylesheets and the claims log, with strong contrast on white and the paper tints',
  pageType: 'city',
  place: {
    name: 'Wentworthville',
    eyebrow: 'Wentworthville, western Sydney',
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
  routeLabel: 'Wentworthville, Sydney',
  title: 'AI and Programming Classes in Wentworthville, Sydney',
  description: 'Live online AI and programming classes for Wentworthville learners aged 6 to 67, with a project that tests models of station data honestly. First lesson free.',
  ogDescription: 'AI and programming for Wentworthville: a model scores R squared 0.934 on data it has seen, and something very different on months it has not.',
  twitterDescription: 'Wentworthville AI and programming classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Wentworthville',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in Wentworthville, Sydney, taught live in English.'
  },
  h1: 'AI and programming classes in Wentworthville',
  capsuleQ: 'What should AI and programming classes teach Wentworthville learners?',
  capsule: 'How to build models and, just as important, how to test them honestly. We teach live online in small groups, from Scratch at six to Python and machine learning for teenagers and adults. Wentworthville covers about 3.12 square kilometres; the 2021 Census counted 15,098 residents, median age 33.',
  lead: 'Fit a model to Wentworthville station\'s monthly entries and the score can look superb: 0.934 on the standard measure, R squared, meaning 93.4% of the up-and-down is explained. Hide the last six months, refit on the rest and score those six, and the same kind of model gets 0.699 or minus 0.984, depending only on which average you compare it with. Both numbers are correct. Learning why is the most useful hour a future AI builder can spend.',
  wa: 'Hello Modern Age Coders, we would like a free AI or programming lesson for a learner in Wentworthville.',
  picks: {
    eyebrow: 'Course picks for Wentworthville',
    h2: 'Courses that build and test models',
    intro: 'Each course reaches models that are checked on data they have not seen. The first lesson is free and decides the level; no card is asked for.',
    items: [
      {
        course: 'problem-solving-and-computational-thinking-for-kids',
        band: 'Ages 8 to 12',
        note: 'Guessing rules from examples, then testing them on new ones.'
      },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Regression, classification and honest train and test splits.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 17', note: 'The Python, lists and files needed before fitting any model.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Means, variation and the maths behind R squared.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Wentworthville in the Census',
      h2: 'Apartments, young children and many graduates',
      intro: 'The 2021 Census picture of the Wentworthville suburb and locality, set beside New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Wentworthville, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '15,098'],
            ['Median age', '33'],
            ['Families', '3,926'],
            ['Private dwellings', '5,721'],
            ['Average people per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Wentworthville set against NSW and Australia',
          head: ['Indicator', 'Wentworthville', 'NSW', 'Australia'],
          rows: [
            ['Flats or apartments among occupied homes', '40.0% (1,958)', '21.7%', '14.2%'],
            ['Townhouses, terraces and semis', '22.3% (1,089)', '11.7%', '12.6%'],
            ['Bachelor degree or higher (aged 15 and over)', '47.7% (5,801)', '27.8%', '26.3%'],
            ['Children aged 0 to 4', '7.7% (1,169)', '5.8%', '5.8%'],
            ['Couple families with children', '57.2% (2,246)', '44.7%', '43.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Two homes in five are flats', p: 'At 40.0%, the apartment share was nearly double the state figure; separate houses were 37.2%.' },
            { h3: 'Young families', p: 'Children under five were 7.7% of residents, and the median age was 33.' },
            { h3: 'Degrees', p: 'Nearly half of residents aged 15 and over held a bachelor degree or higher, 47.7%.' }
          ]
        },
        {
          kind: 'p',
          text: 'All figures are for the suburb and locality. The bureau randomly adjusts small cells, so published parts are never added together on this page.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Four models and three R squared scores',
      intro: 'The data is 23 months of entries at Wentworthville station, from 68,953 in January 2025 to 97,307 in March 2026. Each model is fitted by least squares on October 2024 to February 2026 and then asked to predict March to August 2026.',
      body: [
        {
          kind: 'table',
          caption: 'R squared and error for each model (our NumPy run)',
          head: [
            'Model',
            'Fitted on all 23 months',
            'Held out, against the test mean',
            'Held out, against the training mean',
            'Average miss on held-out months'
          ],
          rows: [
            ['Overall average', '0.000', '-5.598', '0.000', '7,331'],
            ['Straight-line trend', '0.094', '-7.218', '-0.246', '8,334'],
            ['Month of the year', '0.875', '-2.411', '0.483', '5,103'],
            ['Trend and month', '0.934', '-0.984', '0.699', '3,865']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Seen data flatters',
              p: 'With 13 parameters and 23 points, the trend-and-month model scores 0.934 in-sample. Any model with that many knobs can follow the data it has already seen.'
            },
            {
              h3: 'The baseline decides',
              p: 'R squared compares your errors with those of a plain average. Against the held-out months\' own average the trend-and-month model scores -0.984; against the training average, 0.699.'
            },
            {
              h3: 'Negative is allowed',
              p: 'A negative R squared means the model did worse than the chosen average. The straight-line trend does worse than either average on the held-out months.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Which number would a library print?',
          p: 'scikit-learn\'s <code>r2_score(y_test, y_pred)</code> uses the mean of y_test as its baseline, so it reports the -0.984 figure. That baseline knows the test period\'s average in advance, which a forecaster never does.'
        },
        {
          kind: 'p',
          text: 'Entry counts are Transport for NSW monthly Opal figures; the models, scores and errors are our own calculation. We give no reason for any month being high or low.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Reporting a model',
      h2: 'What a fair report on the model includes',
      intro: 'Learners finish by writing the report a careful reader would want, using Wentworthville and its neighbours for scale.',
      body: [
        {
          kind: 'table',
          caption: 'Average monthly entries, October 2024 to August 2026 (our calculation)',
          head: ['Station', 'Average a month', 'Rank among 270 train stations with all 23 months'],
          rows: [
            ['Westmead', '151,164', '35th'],
            ['Wentworthville', '87,159', '58th of 270'],
            ['Pendle Hill', '70,999', '68th']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Guess tomorrow\'s classroom temperature from a week of readings, then check the guess and say how far off it was.' },
            { h3: 'Teenagers', p: 'Fit the four models, hold out six months and report every score with its baseline named.' },
            { h3: 'Adults', p: 'Ask any vendor or analyst which data their accuracy was measured on, and against what.' }
          ]
        },
        { kind: 'p', text: 'Transport for NSW releases the station figures under a Creative Commons licence and is unconnected with Modern Age Coders.' }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and the school year',
      h2: 'Four state schools across two councils',
      intro: 'The NSW school locations file lists four government schools with a Wentworthville address, two in Cumberland council and two in City of Parramatta.',
      body: [
        {
          kind: 'table',
          caption: 'State schools whose listed suburb is Wentworthville',
          head: ['School', 'Level', 'First teacher', 'Council'],
          rows: [
            ['Wentworthville Public School', 'Primary', '1891', 'Cumberland'],
            ['Darcy Road Public School', 'Primary', '1955', 'Parramatta'],
            ['Pendle Hill Public School', 'Primary', '1955', 'Cumberland'],
            ['Pendle Hill High School', 'Secondary', '1965', 'Parramatta']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Summer break', p: 'Eastern division schools are off from Friday 18 December 2026 to Wednesday 27 January 2027.' },
            { h3: 'Autumn break 2027', p: 'Monday 12 April to Friday 23 April, after Term 1 ends on Friday 9 April.' },
            { h3: 'Holiday timetable', p: 'Wentworthville classes also stop for these breaks and resume in their usual weekly slot.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing games to tested models',
    intro: 'The ages are guidelines; the free first lesson finds the right level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and patterns',
        p: 'Games that spot patterns, guess the next move and keep score.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'First Python',
        p: 'Lists, averages and checking a guess against the answer.',
        courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Models and testing',
        p: 'Regression, train and test splits and scores with named baselines.',
        courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Honest evaluation',
        p: 'Validation, error measures and reports decision makers can trust.',
        courses: ['data-science-complete-masterclass-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'High scores on seen data are easy to come by',
    intro: 'This is the most common way AI results mislead, and it needs no bad intent.',
    p1: 'An assistant asked to model Wentworthville\'s entries will happily fit the trend-and-month model and report R squared 0.934. Nothing in the output says the score was measured on the same months used for fitting, or that a fair test gives a very different number.',
    p2: 'Learners who have produced all three scores themselves ask two questions of any reported accuracy: tested on what, and compared with what. Those two questions are most of model evaluation.',
    closer: 'In 2026 anyone can fit a model with one prompt; Wentworthville learners who can test one honestly will be the ones others rely on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Wentworthville learners at home',
    intro: 'Classes take place on live video, joined from home in Wentworthville.',
    cells: [
      { h3: 'Real-time teaching', p: 'Code and models are built during the class, with the teacher watching each step.' },
      { h3: 'Fits NSW schooling', p: 'Teachers use NSW stages and years and plan around the state calendar.' },
      { h3: 'Trial lesson free', p: 'One full lesson without charge, ending in a suggested course and time.' },
      { h3: 'Fifteen to twenty learners', p: 'Groups share a level; individual teaching is available instead.' },
      { h3: 'Regular sessions', p: 'Two a week at fixed times, close to eight a month, with breaks shared early.' },
      { h3: 'Teachers in India', p: 'A 5:30pm Wentworthville lesson is noon India time in Sydney summer time and 1pm the rest of the year.' }
    ],
    spec: {
      title: 'Daylight saving and India',
      p: 'Sydney moves to daylight saving from Sunday 4 October 2026 until Sunday 4 April 2027. India does not, so Sydney is 5 hours 30 minutes ahead during that time and 4 hours 30 minutes ahead otherwise. Lessons are always timetabled in Sydney time.'
    }
  },
  fees: {
    h2: 'Wentworthville lesson fees',
    intro: 'A single flat price list for all courses.',
    first: 'The opening lesson is free, and the teacher then suggests a course and a time.',
    group: 'Two group lessons a week, about eight a month, in a class of fifteen to twenty at one level.',
    private: 'Private lessons twice a week, again about eight a month.',
    closer: 'Wentworthville families pay in US dollars, and payment begins only after the trial has agreed a course and slot. See the pricing page for holidays, missed lessons and switching formats.'
  },
  reviewsH2: 'Family reviews on Google',
  book: {
    h2: 'Arrange a free first lesson',
    intro: 'An age and an interest are all we need. A six-year-old might make a Scratch guessing game; a teenager or adult might fit the station models and score them fairly.',
    success: 'Thank you. We will be in touch soon about a Wentworthville class.'
  },
  faq: {
    h2: 'Wentworthville AI and programming questions',
    intro: 'What Wentworthville families tend to ask.',
    items: [
      {
        q: 'How many people live in Wentworthville?',
        a: 'The 2021 Census QuickStats for the Wentworthville suburb and locality counted 15,098 residents, median age 33, in 3,926 families and 5,721 private dwellings.'
      },
      {
        q: 'What is R squared?',
        a: 'It is one minus the model\'s squared errors divided by the squared errors of a plain average. A score of 1 is perfect, 0 matches the average, and below 0 is worse than the average.'
      },
      {
        q: 'Why can the same model get different R squared scores?',
        a: 'Because the score depends on which data it is measured on and which average it is compared with. In the Wentworthville project one model scores 0.934, 0.699 and -0.984.'
      },
      {
        q: 'How busy is Wentworthville station?',
        a: 'From October 2024 to August 2026 it averaged 87,159 entries a month in Transport for NSW figures, 58th of 270 train stations with complete data by our calculation.'
      },
      {
        q: 'Which state schools have a Wentworthville address?',
        a: 'Wentworthville Public School and Pendle Hill Public School in Cumberland council, and Darcy Road Public School and Pendle Hill High School in City of Parramatta.'
      },
      { q: 'What age can learners start?', a: 'Scratch from six. Model-testing projects like this one suit learners from about 14 who know some Python.' },
      {
        q: 'What setup is needed at home?',
        a: 'A keyboard computer such as a laptop, desktop or Chromebook, a working microphone and sound, and a dependable internet link.'
      },
      {
        q: 'Do you run classes in Wentworthville itself?',
        a: 'No. We teach only online and have no premises anywhere in Australia, including Wentworthville. Our contact phone number is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do Wentworthville lessons cost?',
        a: 'The first lesson is free. A group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners; one-to-one is USD 150 a month on the same plan. Nothing is charged before a course and time are agreed.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Fifteen to twenty learners, grouped by level and goals rather than age. If no group fits the learner\'s schedule, one-to-one lessons are offered instead.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Nearby guides',
    h2: 'More for Wentworthville learners',
    html: 'Parramatta, two stops east, has its own guide at <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-parramatta-sydney">coding and AI classes in Parramatta</a>, and Blacktown, further west on the same line, at <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-blacktown-sydney">vibe coding and AI agents classes in Blacktown</a>. Elsewhere in Cumberland council see <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-auburn-sydney">vibe coding and AI agents classes in Auburn</a>, and for the whole city <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Wentworthville and western Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/vibe-coding-and-ai-agents-classes-in-blacktown-sydney', label: 'Blacktown' },
    { href: '/vibe-coding-and-ai-agents-classes-in-auburn-sydney', label: 'Auburn' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' }
  ],
  personalityCss: `
.cg-root.cg-wvle .cg-hero-grid { align-items: center; gap: clamp(1.05rem, 2.5vw, 2.25rem); }
.cg-root.cg-wvle .cg-hero h1 { font-weight: 660; letter-spacing: -0.014em; line-height: 1.15; }
.cg-root.cg-wvle .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 0.95rem; }
.cg-root.cg-wvle .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-wvle .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.007em; }
.cg-root.cg-wvle .cg-grid-3 { gap: clamp(0.9rem, 2.05vw, 1.5rem); }
.cg-root.cg-wvle .cg-table caption { font-weight: 650; text-align: left; padding-bottom: 0.45rem; }
.cg-root.cg-wvle .cg-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-wvle .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-wvle .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Wentworthville, ABS Census 2021 QuickStats, Wentworthville (NSW) suburb and locality SAL14245 (read 10 October 2026): 15,098 people; median age 33; 3,926 families; 5,721 private dwellings; average 2.9 people per household; flats 40.0% (1,958); townhouses etc 22.3% (1,089); separate houses 37.2%; bachelor degree or higher 47.7% (5,801); aged 0 to 4 7.7% (1,169); couple families with children 57.2% (2,246). ABS ASGS 2021 SAL area 3.1203 square kilometres. NSW Department of Education master dataset, suburb Wentworthville: Wentworthville Public School (1891, Cumberland), Darcy Road Public School (1955, Parramatta), Pendle Hill Public School (1955, Cumberland), Pendle Hill High School (1965, Parramatta). NSW Eastern division: summer holidays Friday 18 December 2026 to Wednesday 27 January 2027; Term 1 2027 ends Friday 9 April; autumn holidays Monday 12 to Friday 23 April 2027.',
    localProject: 'Coefficient of determination on Transport for NSW monthly entries (Opal, CC BY), Wentworthville station, Oct 2024 to Aug 2026, least squares in NumPy (ours): train Oct 2024 to Feb 2026, test Mar to Aug 2026; R squared all-data fit / held out vs test mean / vs training mean / test MAE: mean 0.000 / -5.598 / 0.000 / 7,331; trend 0.094 / -7.218 / -0.246 / 8,334; month 0.875 / -2.411 / 0.483 / 5,103; trend and month 0.934 / -0.984 / 0.699 / 3,865. Station min 68,953 (Jan 2025), max 97,307 (Mar 2026), average 87,159, 58th of 270; Westmead 151,164 (35th), Pendle Hill 70,999 (68th).',
    requiredMentions: ['15,098', '87,159', '97,307', '68,953', 'Darcy Road Public School', 'Pendle Hill High School', '3.12 square kilometres', '0.934', '58th of 270'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Wentworthville (NSW) suburb and locality (SAL14245): people, median age, families, dwellings, dwelling structure, qualifications, age, family composition.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL14245'
      },
      {
        claim: 'Transport for NSW, Train station entries and exits, monthly Opal data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'scikit-learn documentation, r2_score: best possible score 1.0, can be negative; computed against the mean of y_true.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html'
      },
      {
        claim: 'NumPy documentation, numpy.linalg.lstsq: least-squares solution.',
        url: 'https://numpy.org/doc/stable/reference/generated/numpy.linalg.lstsq.html'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations (Creative Commons Attribution); names, suburbs, councils and first-teacher dates only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'NSW Department of Education, 2026 to 2027 term dates and holidays, Eastern division.',
        url: 'https://education.nsw.gov.au/schooling/calendars/2027'
      }
    ],
    rejectedClaims: [
      'Any reason why March 2026 was the busiest month or January 2025 the quietest, or why the held-out months ran higher: not known from the data, so none is given.',
      'Journey to work, train travel and working at home figures from the 2021 Census: excluded because the Census was taken during a lockdown period.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the school dataset: excluded by the cluster rules.',
      'Any total built by adding published Census parts.',
      'Any affiliation with the ABS, Transport for NSW, Cumberland City Council, City of Parramatta Council or the NSW Department of Education.'
    ]
  }
};
