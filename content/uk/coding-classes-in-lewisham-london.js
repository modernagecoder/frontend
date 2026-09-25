'use strict';
// Lewisham (cg- London borough page, UK cluster Phase 5, row 182). Named sources only.
// Spine: learning a river's response to rain. Environment Agency Hydrology API: Catford flow station on the River
// Ravensbourne (537225E 173255N, inside Lewisham's ONS December 2024 BFC boundary; opened 1977), 15-minute flow; Deptford
// rain gauge (537764E 177165N, just OUTSIDE the boundary by our check), 15-minute rainfall. 2023: flow readings flagged
// "Suspect" for all of January to May and part of June (15,842 of 35,040), "Good" from July to December; only Good
// readings used. Hourly model: flow = baseflow + sum over the last 48 hours of weight x rain, weights fitted by
// non-negative least squares. Train July-September 2023 (2,208 hours), test October-December (2,139 hours). Kernel:
// peak at 2 hours after rain; half the response within 2 hours, 90% within 13 hours; baseflow 0.033 m3/s. Nash-Sutcliffe
// efficiency train 0.684, test 0.551; constant mean -0.097. Unconstrained least squares: 14 of 48 weights negative,
// test 0.545. Biggest test hour: 11.12 m3/s at 03:00 GMT on 20 October 2023; model 4.95. Deptford gauge 19-20 October:
// 18.2 mm. EA Hydrology timestamps are GMT. Lesson family: convolution kernels learned from data (deconvolution by
// non-negative least squares, the unit hydrograph); St Asaph used convolution for images, a different point.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'LEWISHAM', blurb: 'The Horniman Museum, Deptford\'s old dockyard and a project that teaches a computer how the Ravensbourne answers rain.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-lewisham-london',
  code: 'lew',
  accent: '#47663D',
  accentRationale: 'Lewisham: a riverbank green from the solver (5.27:1 on every paper tint), greyer and cooler than the Camden moss',
  pageType: 'governorate',
  place: {
    name: 'Lewisham',
    eyebrow: 'London Borough of Lewisham',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lewisham, London',
  title: 'Coding Classes in Lewisham, Catford, Deptford | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Lewisham: Catford, Deptford, Forest Hill, Sydenham, Brockley, Lee and New Cross. Ages 6 to 67.',
  ogDescription: 'Lewisham coding and Python classes, with a project on the River Ravensbourne where learners teach a computer how the river responds to rain, the same maths as AI image models.',
  twitterDescription: 'Lewisham coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Lewisham Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Lewisham, taught live in English.'
  },

  h1: 'Coding classes in Lewisham',
  capsuleQ: 'What are the best coding classes in Lewisham?',
  capsule: 'Lewisham is the south east London borough of Catford, Deptford, Forest Hill, Sydenham, Brockley, Lee, New Cross and Ladywell, with 300,553 residents at the 2021 Census, the Horniman Museum and the River Ravensbourne running north through Catford. The coding classes worth having show a learner how machines learn patterns from data, and this page does it with a river: an hour-by-hour record of rain and flow, and a set of 48 weights learned from it that describe how the Ravensbourne answers a shower. That idea, a kernel slid along data, is the heart of the AI models that recognise images. Our teachers are in India and teach in real time over video; learners aged six to sixty-seven choose private lessons or a small, level-matched class of five to ten. The first lesson is free, and after that group lessons cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'The Environment Agency has measured the River Ravensbourne at Catford since 1977, and it publishes a reading every fifteen minutes. A few kilometres north, its Deptford gauge records rainfall on the same clock. Put the two side by side and you can see the river rise a couple of hours after a downpour, then fall back over the next half day. Our learners ask a computer to learn that response. They give it 48 unknown weights, one for each hour since the rain fell, and let it find the values that explain the flow most closely, with one rule: no weight may be negative, because rain cannot lower a river. The result is a curve called a unit hydrograph, and it is exactly what a convolutional neural network learns when it learns to spot an edge in a photograph.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Lewisham.',

  picks: {
    eyebrow: 'Course picks for Lewisham',
    h2: 'Courses Lewisham learners start with',
    intro: 'Picture a Year 3 child in Ladywell who splashes in puddles and watches the drains, a Year 9 pupil in Catford who wants to know how AI sees pictures, a Year 12 student in Forest Hill choosing between geography and computer science, and an engineer in Lee who works on drainage. Each can begin with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch river that fills when it rains and drains away slowly afterwards, with a gauge to watch.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real readings: the wettest hour, the highest flow, and how long the river takes to react.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the learned rain-to-river kernel on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who want to understand how AI models learn patterns, using data they can picture.' }
    ]
  },

  sections: [
    {
      id: 'lewisham', tint: '', eyebrow: 'Lewisham in numbers',
      h2: '300,553 residents and 367 listed entries',
      intro: 'Every figure below is published by the body named beside it, or counted by us from its open data.',
      body: [
        { kind: 'table', caption: 'A few Lewisham numbers', head: ['Subject', 'Number', 'Taken from'], rows: [
          ['How many people lived here in March 2021', '300,553', 'the Census, ONS table TS001'],
          ['Listed buildings and structures we counted', '367, two of them Grade I', 'Historic England list data, 25 September 2026'],
          ['River Ravensbourne gauge at Catford, opened', '1977', 'Environment Agency Hydrology'],
          ['Services at Lewisham station', 'DLR, Southeastern and Thameslink', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two at Grade I', p: 'Lewisham\'s Grade I entries are the Church of St Paul in Deptford and Boone\'s Chapel in Lee.' },
          { h3: 'Deptford\'s past', p: 'The former Master Shipwright\'s House and a former office building of the Royal Dockyard at Deptford are Grade II*, as are several houses in Albury Street.' },
          { h3: 'Museum and mansion', p: 'The Horniman Museum, Beckenham Place Mansion, Stone House and the Lee Public Library building are among the Grade II* entries.' }
        ] },
        { kind: 'p', text: 'The council\'s branches page lists Catford, Downham and Lewisham libraries and the Library at Deptford Lounge, with community libraries in Blackheath Village, Crofton Park, Forest Hill, Grove Park, Manor House, New Cross, Sydenham and Torridon Road.' }
      ]
    },
    {
      id: 'river', tint: 'tint', eyebrow: 'The data',
      h2: 'Rain at Deptford, river at Catford',
      intro: 'Environment Agency readings come every fifteen minutes, timed in Greenwich Mean Time. We add them up into hours: rain as a total, flow as an average.',
      body: [
        { kind: 'table', caption: 'What 2023 looks like at the two gauges', head: ['Item', 'Figure'], rows: [
          ['Rain at Deptford in complete hours of 2023', '641.6 mm'],
          ['Highest hourly flow at Catford', '11.12 cubic metres a second, 03:00 GMT on 20 October 2023'],
          ['Flow readings flagged "Suspect", January to June', '15,842'],
          ['Flow readings flagged "Good", July to December', 'all of them']
        ] },
        { kind: 'p', text: 'Two honest problems shape the project. First, the Environment Agency marks every flow reading from January to May 2023 as "Suspect", so we use only the Good readings from July to December: three months to learn from, three to test on. Second, the Deptford rain gauge sits just outside Lewisham\'s boundary, to the north of Catford, and a single gauge cannot see every shower over the whole catchment. Learners write both caveats down before fitting anything.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Teaching a computer how the river answers rain',
      intro: 'The model says: this hour\'s flow is a small base amount plus a weighted sum of the rain in each of the last 48 hours. The computer learns the 48 weights.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. A sliding window', p: 'For every hour, line up the rain from the previous 48 hours. Multiply each by its weight and add. Slide one hour on and repeat. That sliding sum is a convolution.' },
          { h3: '2. Fit with a rule', p: 'Choose the weights that match July to September most closely, with none allowed below zero, a method called non-negative least squares.' },
          { h3: '3. Test honestly', p: 'Predict October to December, which the model never saw, and score it with the Nash-Sutcliffe efficiency: 1 is perfect, 0 is no better than guessing the average.' }
        ] },
        { kind: 'table', caption: 'How well the learned kernel works, run 25 September 2026', head: ['Measure', 'Value'], rows: [
          ['Hours after rain when the river responds most', '2'],
          ['Hours until half the response has passed', '2'],
          ['Hours until 90% has passed', '13'],
          ['Score on the months it learned from', '0.68'],
          ['Score on October to December, unseen', '0.55'],
          ['Score for always guessing the average', '-0.10']
        ] },
        { kind: 'p', text: 'The learned kernel is a quick peak two hours after rain and a long, shallow tail: the Ravensbourne is a fast, urban river. On unseen months the model explains more than half the variation in flow, far better than guessing. Letting weights go negative, which makes no physical sense, produced 14 negative weights out of 48 and a slightly worse test score, so the rule helped. The biggest test, 20 October 2023, shows the limit: the model predicted about 5 cubic metres a second at the peak hour, against 11 measured. One gauge outside the catchment simply did not see all the rain that fell upstream.' },
        { kind: 'callout', h3: 'Why build this rather than ask an AI', p: 'An AI assistant can explain convolution in a sentence. A learner who has learned 48 weights from real rain and river data, forbidden negative ones for a physical reason, and watched the model miss a flood because the data was incomplete, understands what every convolutional AI system is doing and where it fails. That understanding, knowing the data behind a model, is exactly what people need to judge AI outputs sensibly.' }
      ]
    },
    {
      id: 'cnn', tint: 'tint', eyebrow: 'From rivers to pictures',
      h2: 'The same idea inside image AI',
      intro: 'A convolutional neural network slides small learned kernels across an image instead of across time. The river project is the one-dimensional version.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One dimension', p: 'Here the kernel slides along hours: 48 weights turning a rain record into a flow record.' },
          { h3: 'Two dimensions', p: 'In image AI, small grids of weights slide across rows and columns, learning to respond to edges, corners and textures.' },
          { h3: 'Same caution', p: 'In both, a kernel can only learn what the data shows it. Missing or unreliable data gives a confident but wrong model.' }
        ] },
        { kind: 'p', text: 'GCSE geography and computer science pupils can follow the rain, the river and the sliding sum; A-level students can set up the least squares problem, add the non-negativity rule and compare scores. The readings are the Environment Agency\'s, from its hydrology service, with their quality flags; the model, weights and scores are ours, computed on 25 September 2026. We act independently: the Environment Agency, Lewisham Council, Historic England, TfL and the ONS neither run nor endorse Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Trains at Lewisham, lessons in the living room',
      intro: 'The borough\'s stations are busy; our classroom is wherever the learner\'s laptop is.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Lewisham', p: 'The DLR, Southeastern and Thameslink all serve Lewisham, according to the station record in TfL open data.' },
          { h3: 'Deptford to Downham', p: 'A learner near the Thames in Deptford and one in Downham in the south can share a class from home.' },
          { h3: 'A steady flow of lessons', p: 'Unlike the Ravensbourne, our timetable does not flood or run dry: the same two evenings every week.' }
        ] },
        { kind: 'spec', title: 'Lewisham in London', p: 'Lewisham is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists all of them and the City, linking each as it is published, including <a class="cg-inline-link" href="/coding-classes-in-greenwich-london">Greenwich</a> to the east and <a class="cg-inline-link" href="/coding-classes-in-bromley-london">Bromley</a> to the south, where the Ravensbourne rises.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From puddles to learned kernels',
    intro: 'The free lesson shows where a learner really is, and that is where we start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Cause and effect', p: 'Children build Scratch scenes where one event causes another after a delay, like rain filling a river.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Time series', p: 'Python that reads timed readings, adds them into hours and draws rain and flow on one chart.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Learned kernels', p: 'Convolution, least squares with constraints and honest testing, a direct route to understanding modern AI.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'How AI learns', p: 'Adults see how models learn weights from data, and why data quality decides what they can learn.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI models learn kernels. Why should a Lewisham teenager learn one by hand?',
    intro: 'Because seeing a model learn from a river makes every AI model less mysterious.',
    p1: 'Image recognition, speech recognition and many forecasting tools rest on the same operation as this project: a small set of learned weights slid along data. A learner who has fitted 48 of them to the Ravensbourne, insisted they stay positive, and seen the model fail on a flood the data could not see, has understood the essentials of convolutional AI and its biggest weakness. They will not mistake a confident output for a correct one.',
    p2: 'The habits reach further still: check the quality flags, test on data the model has not seen, and make physical sense of what was learned. Machines will keep learning weights; people who understand what those weights mean will keep being needed.',
    closer: 'The Ravensbourne answers every shower in Lewisham within a couple of hours. A learner here who can teach a computer that pattern has taken a real first step into AI.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Brockley to Sydenham, live online',
    intro: 'In any part of Lewisham, class starts as soon as the call connects.',
    cells: [
      { h3: 'Learn at home', p: 'Learners join from home with a laptop or desktop, headphones and a reliable broadband connection.' },
      { h3: 'English school stages', p: 'We map progress onto English Key Stages, from Key Stage 1 to sixth form, and mention GCSE and A level where they apply. Teaching is in English.' },
      { h3: 'First lesson free', p: 'Lesson one teaches something real and ends with the teacher\'s view on level and course; no card is requested.' },
      { h3: 'Five to ten per class', p: 'A class draws together learners at one stage from all over the country and beyond, and that breadth keeps a good evening slot within reach.' },
      { h3: 'Two evenings weekly', p: 'A pair of evening sessions each week is the norm, with gaps for half terms, holidays and exam fortnights arranged in advance.' },
      { h3: 'UK time', p: 'Reminders arrive with the Lewisham time already worked out, even though your teacher is several time zones east.' }
    ],
    spec: { title: 'A big borough, a well-matched class', p: 'About 300,000 people live in Lewisham, and a good class still needs five learners at one stage free together, so ours draw on learners far beyond it.' }
  },

  fees: {
    h2: 'Fees for Lewisham families',
    intro: 'From Deptford to Downham the arrangement is identical: lesson one free, then a flat monthly fee.',
    first: 'A full first lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'Every family outside India is billed in US dollars; that is why you will not find a pound sign anywhere on this site. Payment only begins after the free lesson, when a course and a regular evening have been fixed. For pauses, missed sessions or a switch to one-to-one, see the pricing page.'
  },

  reviewsH2: 'Six families, reviewing us publicly on Google',

  book: {
    h2: 'Book a free lesson',
    intro: 'An age, or a year group, plus one thing the learner loves is plenty for us to go on. We might start with a Scratch rain-and-river scene, a Python chart of real readings, or the kernel project on this page.',
    success: 'Thank you. Your Lewisham lesson request is with us.'
  },

  faq: {
    h2: 'Lewisham questions',
    intro: 'About the borough, the river project and our classes.',
    items: [
      { q: 'How many people live in Lewisham?', a: 'The 2021 Census counted 300,553 usual residents in the London Borough of Lewisham, in ONS table TS001.' },
      { q: 'Where do the river and rain readings come from?', a: 'From the Environment Agency\'s hydrology service: the flow station on the River Ravensbourne at Catford, which opened in 1977, and the rain gauge at Deptford, just outside the borough boundary. Both publish a reading every fifteen minutes.' },
      { q: 'What is a unit hydrograph?', a: 'A curve showing how a river\'s flow responds, hour by hour, to a single burst of rain. Here the computer learns it as 48 weights; the Ravensbourne\'s response peaks about two hours after rain and is 90% complete within 13 hours.' },
      { q: 'What does this have to do with AI?', a: 'The model slides a set of learned weights along the rain record and adds them up: a convolution. Convolutional neural networks, used in image recognition, do the same thing across the rows and columns of a picture.' },
      { q: 'Why did the model miss the October 2023 flood peak?', a: 'It predicted about 5 cubic metres a second where 11 were measured. The only rain gauge used is outside the catchment, so it could not see all the rain that fell upstream. The model can only learn from what its data shows.' },
      { q: 'When would a Lewisham learner have lessons?', a: 'Once lesson one has shown the level, we name a class with a free seat and its regular evening, quoted in London time; the teacher works from India.' },
      { q: 'What does a learner need?', a: 'Just an ordinary home computer that plays sound, on broadband that stays connected. The river project needs Python and free downloads from the Environment Agency.' },
      { q: 'Is there a Modern Age Coders centre in Lewisham?', a: 'No. There is no Lewisham centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Lewisham cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Across London',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> gathers every borough and the City, with each page linked as it goes live, such as <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a>, whose page studies another River Brent gauge, and <a class="cg-inline-link" href="/coding-classes-in-lambeth-london">Lambeth</a>. Anyone hooked by learned kernels will find the next chapter in our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">machine learning lessons for London</a>, while the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> helps families match an English school year to its Scottish, Welsh or Northern Irish equivalent.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lewisham and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-greenwich-london', label: 'Greenwich' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-lew .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-lew .cg-hero h1 { font-weight: 760; letter-spacing: -0.019em; line-height: 1.04; }
.cg-root.cg-lew .cg-capsule { border-left: 4px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0 0 0.85rem 0.9rem; }
.cg-root.cg-lew .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lew .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-lew .cg-grid-3 { gap: clamp(1rem, 2.6vw, 1.85rem); }
.cg-root.cg-lew .cg-table caption { font-weight: 700; letter-spacing: 0.014em; }
.cg-root.cg-lew .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lew .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-lew .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-lew .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Lewisham. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000023): 300,553 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 367 (I 2, II* 30, II 335); Grade I 1080003 CHURCH OF ST PAUL, 1079981 BOONE\'S CHAPEL; II* include 1079996 HORNIMAN MUSEUM, 1213984 FORMER MASTER SHIPWRIGHT\'S HOUSE AT ROYAL DOCKYARD, 1288808 FORMER OFFICE BUILDING OF ROYAL DOCKYARD, DEPTFORD, 1359317 BECKENHAM PLACE MANSION, 1193368 STONE HOUSE, 1079968 LEE PUBLIC LIBRARY, Albury Street houses. Lewisham Council /myservices/libraries/branches, 25 September 2026: Catford, Downham, Lewisham libraries, The Library at Deptford Lounge; community library services at Blackheath Village, Crofton Park, Forest Hill, Grove Park, Manor House, New Cross, Sydenham, Torridon Road. TfL HUBLEW (Lewisham): DLR, Southeastern, Thameslink.',
    localProject: 'EA Hydrology stations: Catford (fc5e2495-e6bf-4b91-bf05-547b8ce5fa8c), River Ravensbourne, 537225 173255, opened 1977-12-01, inside the Lewisham BFC polygon; measure flow-i-900-m3s-qualified. Deptford (03963e57-c237-40d7-bde8-f917e116dd49), 537764 177165, OUTSIDE the polygon; rainfall-t-900-mm-qualified. 2023: flow 35,040 rows (Good 19,198; Suspect 15,842: Jan-May all Suspect, Jun 1,534 Good / 1,346 Suspect, Jul-Dec all Good); rain 34,940 rows (Good 34,858). Hourly: rain sum of 4 quarter-hours, flow mean of 4 Good quarter-hours. Rain 2023 complete hours 641.6 mm; max hourly flow 11.12 m3/s at 2023-10-20 03:00 GMT; Deptford rain 19-20 Oct 18.2 mm. Model Q(h) = b + sum_{k=0..47} w_k R(h-k), scipy nnls; train 2023-07-01 to 2023-09-30 (2,208 h), test 2023-10-01 to 2023-12-31 (2,139 h). b 0.033; w peak lag 2 h; 50% of kernel mass by 2 h, 90% by 13 h; kernel sum 1.92. NSE train 0.684, test 0.551; constant-mean NSE -0.097; unconstrained lstsq 14 of 48 negative, test NSE 0.545; test peak observed 11.12 vs predicted 4.95. Lesson family: convolution kernel learned by non-negative least squares (unit hydrograph); screened 25 September 2026 (unit hydrograph 0; convolution 1 = St Asaph images).',
    requiredMentions: [
      '300,553',
      'Ravensbourne',
      'unit hydrograph',
      'non-negative least squares',
      'Nash-Sutcliffe',
      'Horniman Museum',
      'Boone\'s Chapel',
      'Master Shipwright',
      'Beckenham Place Mansion'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Lewisham E09000023: 300,553 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000023&measures=20100' },
      { claim: 'Environment Agency Hydrology: Catford flow station (River Ravensbourne), 15-minute flow with quality flags.', url: 'https://environment.data.gov.uk/hydrology/id/stations/fc5e2495-e6bf-4b91-bf05-547b8ce5fa8c' },
      { claim: 'Environment Agency Hydrology: Deptford rain gauge, 15-minute rainfall.', url: 'https://environment.data.gov.uk/hydrology/id/stations/03963e57-c237-40d7-bde8-f917e116dd49' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Lewisham on 25 September 2026: 367 (2 I, 30 II*, 335 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Lewisham Council library branches.', url: 'https://lewisham.gov.uk/myservices/libraries/branches' },
      { claim: 'TfL Unified API, StopPoint HUBLEW (Lewisham).', url: 'https://api.tfl.gov.uk/StopPoint/HUBLEW' }
    ],
    rejectedClaims: [
      'The Deptford gauge as a Lewisham gauge: its grid reference lies just outside the borough boundary; the page says so.',
      'Flow readings flagged Suspect (January to June 2023): excluded; only Good readings used.',
      'The Ravensbourne catchment area and runoff percentages: catchment area not read from a primary source for this build, so no percentage is given.',
      'Opening status of individual libraries (a temporary closure notice exists for one): the page only repeats the branches list.',
      'Lewisham schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
