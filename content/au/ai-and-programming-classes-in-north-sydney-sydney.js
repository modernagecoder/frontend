'use strict';
// North Sydney, Sydney (cg- district page, Australia cluster Phase 8, row 214). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), council-area page for North Sydney Council (LGA15950) under Sydney and NSW.
// Spine: can the simplest forecasting model, AR(1), beat "same as last month" and "the long-run average" at
// predicting next month's Opal entries at North Sydney station, and when does it fail?
// Data: Transport for NSW, Train Station Entries and Exits (Opal, monthly, CC BY), file read 10 October 2026,
// October 2024 to August 2026 (23 months). Stations whose NSW Transport Theme points ((c) Spatial Services,
// location check only) fall inside the ABS 2021 North Sydney LGA polygon: North Sydney, Milsons Point, Waverton,
// Wollstonecraft (Train) and Victoria Cross, Crows Nest (Metro).
// Our checks (scratchpad au/b2/p4_nsy.py): rolling origin, refit on months 1..t, forecast month t+1, 11 forecasts
// October 2025 to August 2026. North Sydney mean absolute error: naive 18,496, mean 16,310, AR(1) 15,114; full fit
// mean 243,788, phi 0.284. Victoria Cross: naive 50,444, mean 47,410, AR(1) 47,546 (no gain; the series rises from
// 363,170 to 474,104, peak 490,264 in March 2026). No cause is attributed to any change.
// Lesson family: AR(1) autoregressive one-step forecast vs naive and mean; screened 0 page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, North Sydney LGA (LGA15950); NSW Department of Education master dataset
// (CC BY), Date_extracted 2026-10-02, rows with LGA "North Sydney": 7.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and selective columns.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'NORTH SYDNEY',
    label: 'North Sydney, Sydney',
    blurb: 'AI and programming for the North Sydney council area, with a forecasting project that tests a simple model against two plain guesses.'
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
  slug: 'ai-and-programming-classes-in-north-sydney-sydney',
  code: 'nsyd',
  accent: '#0E1858',
  accentRationale: 'North Sydney: a near-navy ink blue (hue 232), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with strong contrast on white and on the paper tints',
  pageType: 'city',
  place: {
    name: 'North Sydney',
    eyebrow: 'North Sydney council area, Sydney, New South Wales',
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
  routeLabel: 'North Sydney, Sydney',
  title: 'AI and Programming Classes in North Sydney, NSW',
  description: 'Live online AI and programming classes for learners aged 6 to 67 in the North Sydney council area, from Scratch to Python models. First lesson free.',
  ogDescription: 'AI and programming for North Sydney, with a project that pits an AR(1) forecast against two plain guesses on 23 months of station data.',
  twitterDescription: 'North Sydney AI and programming classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for North Sydney',
    description: 'Level-matched AI and programming lessons for children, teenagers and adults in the North Sydney council area, taught live in English.'
  },
  h1: 'AI and programming classes in North Sydney',
  capsuleQ: 'Who runs the best AI and programming classes for North Sydney learners?',
  capsule: 'Small live online classes that teach programming first and AI on top of it: Scratch and Python for children, then data, models and honest testing for teenagers and adults. North Sydney Council covers about 10.5 square kilometres, where the 2021 Census counted 68,950 people and a median age of 38.',
  lead: 'Every forecasting model should face a fair test: does it beat a plain guess? We gave a simple autoregressive model 23 months of Opal entries at North Sydney station and asked it to predict each of the last eleven months using only the months before. It missed by 15,114 entries a month on average. Repeating last month missed by 18,496, and the running average by 16,310. At Victoria Cross the same model gained nothing, and working out why is the real lesson.',
  wa: 'Hello Modern Age Coders, we would like a free AI or programming lesson for a learner in North Sydney.',
  picks: {
    eyebrow: 'Course picks for North Sydney',
    h2: 'Programming first, then AI that can be tested',
    intro: 'Each course below meets the forecasting project at its own level. The free trial lesson places the learner, and no card details are taken.',
    items: [
      {
        course: 'python-ai-kids-masterclass',
        band: 'Ages 8 to 12',
        note: 'Python and friendly AI ideas, such as guessing the next number in a pattern and checking the guess.'
      },
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Machine learning from first principles: data, a model, a baseline and an honest score.'
      },
      {
        course: 'statistics-probability-maths-course',
        band: 'Ages 14 to adult',
        note: 'Averages, spread and correlation, the maths underneath every forecast on this page.'
      },
      {
        course: 'artificial-intelligence-complete-masterclass-college',
        band: 'University and adult',
        note: 'From classical models to modern AI systems, always measured against something simpler.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The council area in the Census',
      h2: 'A compact council area where most homes are apartments',
      intro: 'Figures from the statistics bureau\'s 2021 QuickStats for the North Sydney local government area, beside New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'North Sydney council area, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['People counted', '68,950'],
            ['Families', '18,403'],
            ['All private dwellings', '38,990'],
            ['People per household, average', '2'],
            ['Land inside the council boundary', 'About 10.5 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How North Sydney compares',
          head: ['Indicator', 'North Sydney', 'NSW', 'Australia'],
          rows: [
            ['Occupied homes that are flats or apartments', '75.7% (24,535)', '21.7%', '14.2%'],
            ['Residents with a bachelor degree or higher', '59.5% (35,807)', '27.8%', '26.3%'],
            ['Employed residents working as professionals', '45.3% (18,641)', '25.8%', '24.0%'],
            ['Residents aged 30 to 34', '11.6% (8,002)', '7.3%', '7.3%'],
            ['Residents aged 10 to 14', '3.5% (2,421)', '6.2%', '6.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Three homes in four are flats',
              p: 'Flats or apartments make up 75.7% of occupied homes, more than three times the state share, and separate houses only 11.1%.'
            },
            {
              h3: 'Many adults in their thirties',
              p: 'People aged 30 to 34 were 11.6% of residents, well above the state, while children aged 10 to 14 were only 3.5%.'
            },
            {
              h3: 'A degree-heavy workforce',
              p: 'Professionals were 45.3% of employed residents and managers another 22.8%, so many learners here are adults returning to programming.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau perturbs small cells to protect privacy, so the parts of a Census table seldom add to its total. Every number here is printed as published; none has been made by adding rows together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Does an AR(1) model beat a plain guess at North Sydney station?',
      intro: 'Transport for NSW publishes monthly Opal entries for every station. Six stations sit inside the North Sydney boundary on our check, and we used two of them to test a classic forecasting model.',
      body: [
        {
          kind: 'table',
          caption: 'Entries in August 2026 at the six stations inside the council area (Transport for NSW)',
          head: ['Station', 'Line type in the file', 'Entries'],
          rows: [
            ['Victoria Cross', 'Metro', '474,104'],
            ['Crows Nest', 'Metro', '321,487'],
            ['North Sydney', 'Train', '252,640'],
            ['Milsons Point', 'Train', '173,243'],
            ['Wollstonecraft', 'Train', '49,566'],
            ['Waverton', 'Train', '48,472']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Naive guess', p: 'Next month will equal this month. No maths at all, and surprisingly hard to beat on many real series.' },
            { h3: 'Mean guess', p: 'Next month will equal the average of every month seen so far. Steady, but blind to recent movement.' },
            {
              h3: 'AR(1) model',
              p: 'Next month equals the average plus a fraction, phi, of how far this month sits from it. Fitted on North Sydney\'s full series, phi is 0.284.'
            }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Average miss per forecast, October 2025 to August 2026 (our calculation, 11 forecasts each)',
          head: ['Method', 'North Sydney station', 'Victoria Cross station'],
          rows: [
            ['Same as last month', '18,496', '50,444'],
            ['Average of all earlier months', '16,310', '47,410'],
            ['AR(1), refitted each month', '15,114', '47,546']
          ]
        },
        {
          kind: 'callout',
          h3: 'Where the model stops helping',
          p: 'North Sydney station swings around a fairly steady level, from a high of 288,569 entries in October 2024 to a low of 197,234 in January 2025, and AR(1) wins. Victoria Cross climbs instead, from 363,170 in October 2024 to 474,104 in August 2026, with a peak of 490,264 in March 2026. A model that pulls every forecast back towards an old average cannot follow a rising series, so it ends level with the plain mean.'
        },
        {
          kind: 'p',
          text: 'Each forecast was made with a refit on earlier months only, so no month was used to predict itself. Entries count Opal taps at the gates, not individual people, and we make no claim about why any month rose or fell. All errors and parameters are our own arithmetic on the published file.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Taking it further',
      h2: 'From one forecast to a habit of fair testing',
      intro: 'Once the rolling test exists, learners can try better models against the same three numbers.',
      body: [
        {
          kind: 'table',
          caption: 'Next experiments on the North Sydney series',
          head: ['Idea', 'What to code', 'What it teaches'],
          rows: [
            ['Add a trend term', 'Regress on the month number as well as last month', 'Why Victoria Cross needs a different model'],
            [
              'Compare with last year',
              'Use the same month a year earlier as the guess',
              'Seasonal baselines once there are 24 months'
            ],
            ['Report a range, not a point', 'Add plus or minus two typical errors', 'Honest uncertainty around a forecast'],
            ['Plot the misses', 'Chart errors month by month', 'Spotting a model that is always late']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Write the three forecasters in plain Python, run the rolling test, and explain the results table in their own words.' },
            { h3: 'University students', p: 'Estimate phi by least squares, check it against a statistics library, and try a model with a trend.' },
            { h3: 'Working adults', p: 'Apply the same baseline-first test to a forecast at work before anyone trusts a dashboard built on it.' }
          ]
        },
        {
          kind: 'p',
          text: 'The open data comes from Transport for NSW, the statistics bureau and the education department, none of which is connected with us; the forecasts, errors and comparisons are ours.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and calendar',
      h2: 'Seven public schools from 1874 to 2016',
      intro: 'More facts from the education department\'s school location file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Seven schools',
              p: 'The department\'s master dataset lists seven government schools in the North Sydney council area: four primary and three secondary.'
            },
            {
              h3: 'Oldest and newest',
              p: 'North Sydney Public School records a first teacher in 1874 and Neutral Bay Public School in 1886; Cammeraygal High School dates from 2015 and Anzac Park Public School from 2016.'
            },
            {
              h3: 'Terms in 2027',
              p: 'Eastern division students start Term 1 on Wednesday 3 February 2027, after summer holidays from Friday 18 December 2026 to Wednesday 27 January 2027.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'A small address puzzle',
          p: 'In the same file North Sydney Public School has Waverton as its suburb, a reminder for any data project that a name in one column does not always match a place in another.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing the next block to forecasting the next month',
    intro: 'Ages are only a guide; the free trial lesson sets the starting rung.',
    cols: [
      {
        band: 'Ages 6 to 11',
        h3: 'Patterns and logic',
        p: 'Scratch projects that repeat, predict and check, the earliest form of a model.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 11 to 14',
        h3: 'First Python',
        p: 'Variables, loops and lists, then small programs that guess and score themselves.',
        courses: ['python-ai-kids-masterclass', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data and models',
        p: 'Averages, baselines, train and test splits, and the first machine learning models.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'AI with evidence',
        p: 'Forecasting, evaluation and modern AI systems, each judged against a simpler rival.',
        courses: ['artificial-intelligence-complete-masterclass-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can write the model, what is left for a North Sydney learner to do?',
    intro: 'Deciding whether the model is any good, which no tool does on a learner\'s behalf.',
    p1: 'An AI assistant will happily write an AR(1) forecaster in a few seconds. What it will not do unprompted is ask whether the model beats repeating last month, or notice that the series it was given is trending. On Victoria Cross the code runs perfectly and still adds nothing over a simple average.',
    p2: 'That is why our lessons put programming before AI. A learner who can write the rolling test by hand can read generated code critically, spot a forecast that has peeked at the future, and explain a result to someone who has to act on it.',
    closer: 'In 2026 anyone can produce a model; North Sydney learners who can prove whether it works are the ones whose work gets trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons from home, anywhere in the council area',
    intro: 'From Waverton to Cammeray, every learner joins the same live video class.',
    cells: [
      { h3: 'A screen and a teacher', p: 'Lessons happen on video with a live teacher who watches the learner type, so mistakes are caught as they happen.' },
      { h3: 'NSW stages and terms', p: 'Teachers know the NSW stages and syllabus names, and the timetable pauses for state school holidays.' },
      { h3: 'Trial before any fee', p: 'The first lesson is a full, free class, after which the teacher recommends a course, level and fixed time.' },
      { h3: 'Grouped by level', p: 'Groups of fifteen to twenty learners at the same stage, or one-to-one lessons where a group does not fit.' },
      { h3: 'Two lessons a week', p: 'A regular pair of weekly lessons, about eight a month, with planned breaks agreed ahead of time.' },
      { h3: 'Teachers in India', p: 'A 5pm North Sydney lesson in summer is 11:30am India time; once Sydney returns to standard time it is 12:30pm there.' }
    ],
    spec: {
      title: 'Clocks in Sydney and India',
      p: 'Daylight saving in Sydney runs from Sunday 4 October 2026 to Sunday 4 April 2027. India has no daylight saving, so the gap to our teachers is 5 hours 30 minutes in summer and 4 hours 30 minutes otherwise; all times we give are Sydney times.'
    }
  },
  fees: {
    h2: 'What lessons cost in North Sydney',
    intro: 'The same three prices for every course and every learner.',
    first: 'A full first lesson at no charge, ending with a recommended course and time.',
    group: 'Two lessons a week for a month, roughly eight, in a group of fifteen to twenty at one level.',
    private: 'The same twice-weekly pattern with one teacher and one learner.',
    closer: 'Fees outside India are billed in US dollars, so a learner in Waverton pays the same as one in Neutral Bay. Payment comes only after the trial has fixed the course and time, and the pricing page covers breaks, missed lessons and switching formats.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Tell us the age and what they enjoy',
    intro: 'That is enough to plan a first lesson. A primary-age child might build a Scratch game that guesses a number; a teenager or adult might write the naive forecaster for North Sydney station in Python.',
    success: 'Thank you. A member of our team will contact you shortly about a North Sydney class.'
  },
  faq: {
    h2: 'Questions from North Sydney learners',
    intro: 'The questions we hear most from the council area.',
    items: [
      {
        q: 'How many people live in the North Sydney council area?',
        a: 'The 2021 Census QuickStats for the North Sydney local government area counted 68,950 people, with a median age of 38 and 18,403 families.'
      },
      {
        q: 'What is an AR(1) model?',
        a: 'An autoregressive model of order one predicts the next value as the long-run average plus a fraction, phi, of the latest value\'s distance from that average. It is one of the simplest forecasting models and a standard first step before more complex AI.'
      },
      {
        q: 'Did the model beat the simple guesses?',
        a: 'At North Sydney station yes: its average miss over eleven forecasts was 15,114 entries, against 18,496 for repeating last month and 16,310 for the running mean. At Victoria Cross it was no better than the mean, because that series kept rising.'
      },
      {
        q: 'Which stations are in the North Sydney council area?',
        a: 'On our location check against the statistics bureau\'s boundary, six: North Sydney, Milsons Point, Waverton and Wollstonecraft on the train network, and Victoria Cross and Crows Nest on the Metro.'
      },
      {
        q: 'Do lessons cover AI tools?',
        a: 'Yes, within each provider\'s age rules. Younger learners study how AI works through their own code; tools with adult-only terms are used only by learners old enough to accept them.'
      },
      {
        q: 'Can you support HSC Software Engineering students?',
        a: 'Yes. Teachers follow the NSW syllabus and explain concepts and methods, while any assessed project stays entirely the student\'s own work.'
      },
      { q: 'Is there an age limit?', a: 'Learners range from six to 67. Six-year-olds start with Scratch; adults can start straight in Python or data work.' },
      {
        q: 'Where is your North Sydney office?',
        a: 'We have none. Modern Age Coders teaches entirely online and has no premises in Australia; learners need a computer with a microphone and a reliable connection, and our phone number is an Indian one.',
        boiler: true
      },
      {
        q: 'How much are coding and AI lessons in North Sydney?',
        a: 'The first lesson is free. Group lessons are USD 100 a month for two live classes a week, about eight a month, with fifteen to twenty learners; one-to-one is USD 150 a month on the same schedule. Nothing is paid until the course and time are agreed.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Between five and ten learners, matched on level and goals rather than age. When no group suits the learner\'s times, we offer one-to-one lessons.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Keep exploring',
    h2: 'Related guides for North Sydney',
    html: 'Start with the citywide <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a> guide. Teenagers curious about AI should read <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>, and anyone worried about leaning on chatbots will find <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a> useful. The state overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Chat on WhatsApp'
  },
  footerHeading: 'North Sydney and nearby',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/ai-and-programming-classes-in-ku-ring-gai-sydney', label: 'Ku-ring-gai' },
    { href: '/coding-classes-for-kids-sydney', label: 'Kids coding in Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-nsyd .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-nsyd .cg-hero h1 { font-weight: 650; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-nsyd .cg-capsule { border-top: 3px solid var(--cg-accent); padding: 0.85rem 0 0 0; }
.cg-root.cg-nsyd .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-nsyd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-nsyd .cg-grid-3 { gap: clamp(0.95rem, 2vw, 1.6rem); }
.cg-root.cg-nsyd .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-nsyd .cg-table td:last-child { font-variant-numeric: tabular-nums; text-align: right; }
.cg-root.cg-nsyd .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-nsyd .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'North Sydney, ABS Census 2021 QuickStats, North Sydney local government area LGA15950 (read 10 October 2026): 68,950 people; median age 38 (NSW 39, Australia 38); 18,403 families; 38,990 private dwellings; average 2 people per household; flats or apartments 75.7% (24,535), separate houses 11.1% (3,593); professionals 45.3% (18,641), managers 22.8% (9,403); bachelor degree or higher 59.5% (35,807); aged 30 to 34 11.6% (8,002); aged 10 to 14 3.5% (2,421). ABS ASGS 2021 LGA boundary area 10.49 square kilometres. NSW Department of Education 2027 calendar, Eastern division: students Term 1 from Wednesday 3 February 2027; summer holidays Friday 18 December 2026 to Wednesday 27 January 2027.',
    localProject: 'AR(1) one-step forecast vs naive and mean baselines. Transport for NSW Train Station Entries and Exits (CC BY), October 2024 to August 2026. Six stations inside the ABS North Sydney LGA polygon by NSW Transport Theme points ((c) Spatial Services): August 2026 entries Victoria Cross 474,104, Crows Nest 321,487, North Sydney 252,640, Milsons Point 173,243, Wollstonecraft 49,566, Waverton 48,472. Rolling origin, 11 forecasts October 2025 to August 2026, mean absolute error North Sydney naive 18,496, mean 16,310, AR(1) 15,114 (full-series phi 0.284); Victoria Cross naive 50,444, mean 47,410, AR(1) 47,546. North Sydney entries max 288,569 (October 2024), min 197,234 (January 2025); Victoria Cross 363,170 (October 2024) to 474,104 (August 2026), max 490,264 (March 2026). NSW schools master dataset rows with LGA North Sydney: 7 (4 primary, 3 secondary).',
    requiredMentions: ['68,950', '18,403', '38,990', '24,535', '35,807', 'Neutral Bay Public School', 'Cammeraygal High School', '252,640', '15,114'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, North Sydney local government area (LGA15950): people, median age, families, dwellings, dwelling structure, occupation, education, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA15950'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits: monthly station usage from Opal data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'NSW Department of Education, 2027 term dates and school holidays, Eastern division.',
        url: 'https://education.nsw.gov.au/schooling/calendars/2027'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any reason for the rise at Victoria Cross or the dip in January: not verified, so no cause is given.',
      'Calling Opal entries passengers or people: entries are gate taps.',
      'Selective-school status of any North Sydney school: the selective column is excluded by the cluster rules.',
      'A list of suburbs in the council area beyond place names used for orientation: not printed as a verified list.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous and LBOTE columns of the master dataset: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, North Sydney Council or the ABS.'
    ]
  }
};
