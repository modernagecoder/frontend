'use strict';
// Winchester (cg- city page, UK cluster Phase 4). Spine: how much of the Itchen comes from underground? The Lyne and
// Hollick recursive digital filter (alpha 0.925, three passes: forward, backward, forward) separating baseflow from
// quickflow in Environment Agency Hydrology daily mean flows, days graded Complete and Good, filtered within unbroken
// runs of at least 365 days (read 23 September 2026; scratchpad win/bfi.py). River Itchen at Highbridge (from 1 June
// 1975): 17,603 good days, 16,958 in runs; baseflow index 0.875; mean 4.258 cubic metres per second; flow exceeded 95
// percent of the time 2.237, 5 percent of the time 7.939 (ratio 3.5); highest good day 17.867 on 12 February 2014,
// lowest 1.628 on 22 July 2005. River Hamble at Frogmill (56.6 square km): BFI 0.623; 0.122 and 1.512 (ratio 12.4).
// River Blackwater at Ower (104.7 square km): BFI 0.427; 0.144 and 4.279 (ratio 29.7). Sensitivity for the Itchen:
// alpha 0.90 0.894, 0.95 0.841, 0.98 0.742; one pass 0.944, five passes 0.823; the ranking Itchen above Hamble above
// Blackwater holds at every setting tried (Hamble 0.473 to 0.756; Blackwater 0.302 to 0.625).
// Lesson family: recursive digital filters (baseflow separation, IIR filtering, parameter sensitivity, forward and
// backward passes). Screened 23 September 2026: baseflow, Lyne and Hollick, recursive filter 0 hits; distinct from
// Stoke median filter, Brighton sliding window and Chester gradient descent.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Winchester E07000094: TS001 127,444 usual residents,
// 121,804 in households, 5,640 communal; TS007A 7,742 aged 10 to 14 (6.1 percent, England 6.0), 9,213 aged 15 to 19
// (7.2, England 5.7), 8,167 aged 20 to 24 (6.4, England 6.0), 5,362 aged 75 to 79 (4.2, England 3.6); TS068 26,971
// students of 121,401 aged 5 and over (22.2 percent, England 20.4); TS006 192.8 per square km (England 433.5).
// Winchester Cathedral, History and Architecture: founded in 1079; the longest nave and greatest overall length of any
// Gothic cathedral in Europe. Notable People: Jane Austen buried in the Cathedral in 1817, aged 41, memorial stone made
// no mention of her books, brass plaque of 1872; St Swithun, died 863, legend of 40 days of rain if it rains on 15
// July; William Walker, deep-sea diver, worked under water every day for six years placing bags of concrete to
// underpin the waterlogged foundations after cracks appeared in the early 1900s. Places in OS Open Names (Winchester
// district): New Alresford, Kings Worthy, Twyford, Bishop's Waltham, Badger Farm, Oliver's Battery, Stanmore,
// Harestock, Wickham, Denmead, Hyde, St Cross, Littleton, Colden Common, Otterbourne, Sparsholt.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'WINCHESTER', blurb: 'The cathedral city on the Itchen, with a project that filters a river\'s flow to find how much of it comes from underground.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-winchester',
  code: 'win',
  accent: '#1B6A42',
  accentRationale: 'Winchester: a clear river green, from the solver (5.35:1 on every paper tint, dE 6.1 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Winchester',
    eyebrow: 'Winchester, Hampshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Winchester' },
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Winchester, England',
  title: 'Best Coding Classes in Winchester | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Winchester learners aged 6 to 67, from Stanmore and Harestock to New Alresford. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Winchester, on a page that filters fifty years of Itchen flows to find how much of the river comes from underground.',
  twitterDescription: 'Winchester learners from six to sixty-seven can study coding, Python and AI in our live online lessons, and the first one is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Winchester Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, signal processing, AI and mathematics taught live online in English to Winchester children, teenagers and adults, one to one or in small groups by level.'
  },

  h1: 'Coding classes in Winchester',
  capsuleQ: 'What are the best coding classes in Winchester?',
  capsule: 'The Winchester district had 127,444 usual residents at the 2021 census, and 7.2% of them were aged 15 to 19, against 5.7% across England. Winchester Cathedral dates its founding to 1079 and says Jane Austen was buried there in 1817, under a memorial stone that did not mention her books. From six-year-olds to learners of sixty-seven, Winchester students meet our India-based teachers on live video, one to one or alongside five to ten others at the same level, in slots arranged around the British day. The first lesson costs nothing; from then on a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Some rivers leap after every storm and shrink in every dry spell. The Itchen, which flows through Winchester, barely changes: a high flow it reaches on only 5% of days is just 3.5 times the low flow it beats on 95% of days. Why? Our teenagers answer with a recursive digital filter, a short loop that runs along fifty years of daily flows and splits each day into quick water, straight off the land after rain, and baseflow, the steady supply from underground. For the Itchen at Highbridge, baseflow makes up 0.875 of everything that passes. For the nearby Hamble it is 0.623, and for the Blackwater 0.427, where the same high-to-low comparison is 29.7.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Winchester.',

  picks: {
    eyebrow: 'Course picks for Winchester',
    h2: 'Four courses for the Itchen city',
    intro: 'Start with the course that matches what the learner enjoys. Each opens with a free live lesson, and booking it never requires a card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards programs that remember what happened a moment ago.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to complete projects, enough to run a filter along fifty years of daily river data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data in Python, including splitting a signal into a slow part and a fast part and checking what the settings change.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who handle sensor or meter data and need to separate steady trends from sudden bursts.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Winchester today',
      h2: 'A small city with a lot of teenagers',
      intro: 'Census 2021 figures for the City of Winchester district, from New Alresford to Bishop\'s Waltham and Denmead, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Winchester district, Census 2021', head: ['Measure', 'Winchester', 'England'], rows: [
          ['Usual residents', '127,444', '56,490,048'],
          ['Living in households', '121,804', 'Not compared'],
          ['Living in communal establishments', '5,640', 'Not compared'],
          ['Aged 10 to 14', '7,742 (6.1%)', '6.0%'],
          ['Aged 15 to 19', '9,213 (7.2%)', '5.7%'],
          ['Aged 20 to 24', '8,167 (6.4%)', '6.0%'],
          ['Aged 75 to 79', '5,362 (4.2%)', '3.6%'],
          ['Students among residents aged 5 and over', '26,971 (22.2%)', '20.4%'],
          ['Usual residents per square kilometre', '192.8', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers above all', p: 'People aged 15 to 19 were 7.2% of Winchester\'s residents in 2021, well above England\'s 5.7%, and 22.2% of those aged five and over were in study.' },
          { h3: 'Every generation', p: 'Residents aged 75 to 79 made up 4.2% of the district, above the national 3.6%, alongside a slightly larger share of 10 to 14 year olds than England.' },
          { h3: 'Room around the city', p: 'At 192.8 residents per square kilometre the district is spacious, with 5,640 people living in communal establishments such as halls of residence.' }
        ] },
        { kind: 'p', text: 'Our Winchester groups draw on that wide district. Picture a Badger Farm ten-year-old animating a first story, a sixth former from Harestock working on an A level Computer Science project, and a Kings Worthy parent picking up Python for the office: each would be matched to a small group working at their own pace.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Cathedral and water',
      h2: 'A cathedral saved by a diver',
      intro: 'From Winchester Cathedral\'s own history pages.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1079', p: 'The cathedral dates its founding to 1079, remodelled over five centuries by successive bishops, and describes itself as having the longest nave and greatest overall length of any Gothic cathedral in Europe.' },
          { h3: 'The early 1900s', p: 'When huge cracks appeared, the cathedral recalls, early efforts to underpin its waterlogged foundations failed until William Walker, a deep-sea diver, worked under water every day for six years placing bags of concrete.' },
          { h3: 'St Swithun', p: 'The cathedral\'s patron saint, an Anglo-Saxon bishop who died in 863, is linked by legend to rain: if it rains on 15 July, the saying goes, forty days of rain will follow.' }
        ] },
        { kind: 'p', text: 'The cathedral also records that Jane Austen, buried there in 1817 at the age of 41, was first commemorated by a stone that made no mention of her books, and that a brass plaque was added in 1872. We have no connection with Winchester Cathedral, Winchester City Council or the Environment Agency. Water in the ground is the thread through this page: it waterlogged the cathedral\'s foundations, and it is what our project measures in the river.' },
        { kind: 'spec', title: 'Where the flows come from', p: 'The Environment Agency\'s Hydrology service publishes daily mean flows for the Itchen at Highbridge, downstream of Winchester, from 1975, and for the Hamble at Frogmill and the Blackwater at Ower, each with a quality grade on every day.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much of the Itchen comes from underground?',
      intro: 'A recursive filter updates each day\'s answer from the previous day\'s answer and today\'s change. Run along a river record, the Lyne and Hollick filter peels off the quick bursts and leaves the slow, steady baseflow underneath.',
      body: [
        { kind: 'table', caption: 'Environment Agency daily mean flows, days graded good, filter run within unbroken years of data: baseflow as a share of total flow, and how far flows swing', head: ['River and gauge', 'Baseflow index', 'Flow exceeded 5% of the time divided by flow exceeded 95% of the time'], rows: [
          ['Itchen at Highbridge', '0.875', '3.5'],
          ['Hamble at Frogmill', '0.623', '12.4'],
          ['Blackwater at Ower', '0.427', '29.7']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Keep clean runs', p: 'Use only days graded complete and good, and only unbroken stretches of at least a year, because a recursive filter carries yesterday\'s answer forward and a gap would break the chain.' },
          { h3: '2. Run the filter', p: 'Each day, quick flow is 0.925 times yesterday\'s quick flow plus a share of today\'s rise. Baseflow is what remains. The pass is repeated backwards and forwards again to smooth out the lag.' },
          { h3: '3. Add it up', p: 'The baseflow index is total baseflow divided by total flow. For the Itchen it is 0.875 from 16,958 days of clean data; the swing from high to low flow is the lowest of the three.' }
        ] },
        { kind: 'callout', h3: 'The number depends on the dial; the ranking does not', p: 'Change the filter\'s one parameter from 0.925 to 0.90 and the Itchen\'s index rises to 0.894; set it to 0.98 and it falls to 0.742. One pass gives 0.944, five passes 0.823. So there is no single true baseflow index, only an index under stated settings. But at every setting we tried, the order never changed: the Itchen always comes first, the Hamble second, the Blackwater third. Reporting a value with its settings, and checking which conclusions survive a change of settings, is how honest analysis handles a parameter nobody can measure directly.' },
        { kind: 'p', text: 'The extremes tell the same story. The Itchen\'s lowest good day in fifty years was 1.628 cubic metres per second, on 22 July 2005, and its highest 17.867, on 12 February 2014. The Blackwater, a smaller river, fell as low as 0.083 and rose as high as 21.020. A river whose flow is mostly baseflow does not swing that far between its extremes.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Filters in practice',
      h2: 'Five questions before filtering any signal',
      intro: 'Learned on Hampshire rivers, then used in audio, fitness trackers, energy data, image processing and every sensor that mixes a slow trend with fast noise.',
      body: [
        { kind: 'table', caption: 'Choices behind a recursive filter', head: ['Question', 'For the Itchen, Hamble and Blackwater', 'What goes wrong if you skip it'], rows: [
          ['Is the record unbroken?', 'Only runs of a year or more of good days', 'A gap carried forward as if it were a flood'],
          ['What does the parameter mean?', 'How slowly quick flow fades, 0.925 by convention', 'A setting chosen to give a pleasing answer'],
          ['Forward only, or both ways?', 'Forward, backward, forward', 'Baseflow that lags behind every storm'],
          ['How sensitive is the answer?', 'Rerun at 0.90, 0.95, 0.98 and 1 to 5 passes', 'One number presented as the truth'],
          ['What is being compared?', 'Three rivers under identical settings', 'Rivers ranked with different dials']
        ] },
        { kind: 'p', text: 'The last row makes the comparison fair. A baseflow index from one study cannot be set beside an index from another unless both used the same filter and settings. Running all three rivers through the same code, on the same kind of data, is what lets the ranking stand even though the individual values move.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Pouring water into a sponge and a plate, and seeing which one keeps releasing water slowly after the pouring stops.' },
          { h3: 'Teenagers', p: 'The Lyne and Hollick filter in Python on fifty years of Environment Agency data, three rivers compared and every setting tested.' },
          { h3: 'Adults', p: 'Separating steady trends from sudden bursts in data at work, with the filter settings and their effects written down.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, Winchester Cathedral or Winchester City Council. The flows, census tables and cathedral history are published openly; the filtering, indices and comparisons on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a sponge to a recursive filter',
    intro: 'The ages are a guide only; the free lesson works out where each learner starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fast and slow water', p: 'Experiments with a sponge and a plate, then drawing how quickly each lets water go after a pour.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Loops that remember', p: 'Python loops that carry a value from one day to the next, such as a running total or a slowly fading score.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Recursive filters', p: 'Baseflow separation on real rivers, forward and backward passes, and a careful test of every parameter.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Signals at work', p: 'Splitting slow trends from fast changes in sensor, meter or business data, with every setting explained.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI models filter signals all the time. Why should a Winchester teenager write a filter by hand?',
    intro: 'Because a filter always has settings, and knowing what they change is what separates a finding from an artefact.',
    p1: 'Many AI systems carry information forward from one step to the next, just as a recursive filter carries yesterday\'s quick flow into today. A learner who has written the Lyne and Hollick loop understands that memory in a model is a design choice with a dial, and that turning the dial changes the answer.',
    p2: 'The sensitivity test matters even more. AI results are often reported as single numbers from a single configuration. Having seen the Itchen\'s index move from 0.742 to 0.944 with its settings, while the ranking of three rivers stayed fixed, a learner knows to ask which conclusions would survive a different configuration.',
    closer: 'Learning to code still pays for a Winchester teenager in 2026, living beside a river that seldom hurries: any machine can filter a signal, yet a person has to notice which answers move when the settings do.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Stanmore, Oliver\'s Battery or Wickham, and never a drive into town',
    intro: 'The district spreads from the city\'s suburbs to market towns and villages on every side, and a live online class reaches all of them in the same moment.',
    cells: [
      { h3: 'City and market towns', p: 'A learner in St Cross and another in Bishop\'s Waltham can share the same class, with no journey into Winchester.' },
      { h3: 'In step with local schools', p: 'What we teach lines up with the English curriculum Hampshire pupils follow, from the early years to GCSE and A level, with lessons given entirely in English.' },
      { h3: 'The first lesson is real', p: 'Even the free session tackles a genuine task, and at the end we suggest a level, course and weekly time. No card is needed.' },
      { h3: 'Matched by stage', p: 'A group gathers five to ten learners working at the same stage, whether they live in Winchester, elsewhere in Britain or overseas, which keeps good times free at every level.' },
      { h3: 'A twice-weekly habit', p: 'Lessons run twice a week on fixed days, close to eight a month, and the teacher plans around half terms and exam seasons with families early on.' },
      { h3: 'Evening across two countries', p: 'At 4.30 pm in Winchester it is 9 pm for our teachers in summer and 10 pm in winter, as India does not move its clocks; they arrange their working evenings around UK families.' }
    ],
    spec: { title: 'Across Hampshire', p: 'Families in Eastleigh, Andover, Basingstoke or Romsey join exactly the same classes, since every group is online and set by level.' }
  },

  fees: {
    h2: 'Winchester lesson fees',
    intro: 'A free lesson first, then a single fee each month.',
    first: 'A full lesson at no cost, ending with our advice on level, course and a weekly slot.',
    group: 'Around eight live lessons a month, in a group of five to ten learners at one stage.',
    private: 'Around eight live lessons a month, with the teacher giving your learner undivided attention.',
    closer: 'Households in Twyford or Colden Common are charged in US dollars, the same as every household outside India, and you will not see a pound price anywhere on our site. We bill nothing before the free lesson, and charges start only once a course and weekly time are fixed; pauses, missed lessons and moving between group and one-to-one teaching are covered on the pricing page.'
  },

  reviewsH2: 'Six families\' Google reviews, printed as written',

  book: {
    h2: 'Book a free lesson for a Winchester learner',
    intro: 'Our first task is chosen for the learner: a sponge-and-water game for a young child, a short Python loop that carries a value from day to day for a beginner, or fifty years of Itchen flows and a recursive filter for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Winchester learner.'
  },

  faq: {
    h2: 'Winchester coding class questions',
    intro: 'What Winchester families ask us most often.',
    items: [
      { q: 'How many people live in the Winchester district?', a: 'Census 2021 counted 127,444 usual residents in the City of Winchester district: 121,804 in households and 5,640 in communal establishments.' },
      { q: 'How does Winchester compare with England?', a: 'It has more teenagers: 7.2% of residents were aged 15 to 19 in 2021, against 5.7% in England, and 26,971 of the 121,401 aged five and over were students, 22.2%. Density was 192.8 residents per square kilometre.' },
      { q: 'What is a baseflow index?', a: 'The share of a river\'s flow that comes from slow, steady sources such as groundwater, rather than quick runoff after rain. It is estimated with a filter, so its exact value depends on the filter\'s settings.' },
      { q: 'How much of the Itchen comes from underground?', a: 'With the Lyne and Hollick filter at its usual setting, baseflow makes up 0.875 of the Itchen\'s flow at Highbridge, against 0.623 for the Hamble and 0.427 for the Blackwater. Other settings give other values, but always the same order.' },
      { q: 'Which data sources were used for the rivers?', a: 'From the Environment Agency\'s Hydrology open data: daily mean flows for the Itchen at Highbridge, the Hamble at Frogmill and the Blackwater at Ower, using only days graded complete and good.' },
      { q: 'Why did Winchester Cathedral need a diver?', a: 'The cathedral says that when huge cracks appeared in the early 1900s, its waterlogged foundations were underpinned by William Walker, a deep-sea diver who worked under water every day for six years. We are not connected with the cathedral.' },
      { q: 'When do Winchester lessons take place?', a: 'Winchester families generally pick a slot after school, on a weekday evening or at the weekend, and we confirm the time in the free lesson. India is four and a half hours ahead of Winchester in summer and five and a half in winter.' },
      { q: 'Do you have a Winchester centre?', a: 'No. We have no Winchester centre and no UK premises, because every lesson is live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do lessons cost for a Winchester learner?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one teaching on the same timetable is USD 150 a month. Nothing is charged before the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or address, with five to ten learners at the same stage. If no group fits the learner\'s timetable, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The South and beyond',
    html: 'Down the Itchen, the <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton page</a> finds any postcode in about one step with a hash table, and <a class="cg-inline-link" href="/best-coding-class-in-salisbury">Salisbury</a> searches Magna Carta with a rolling hash. <a class="cg-inline-link" href="/best-coding-class-in-stoke-on-trent">Stoke-on-Trent</a> uses a different kind of filter, the median, on air data. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Winchester and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-southampton', label: 'Southampton' },
    { href: '/best-coding-class-in-salisbury', label: 'Salisbury' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-win .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.45rem); }
.cg-root.cg-win .cg-hero h1 { font-weight: 650; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-win .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-win .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-win .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-win .cg-grid-3 { gap: clamp(1.05rem, 2.5vw, 2.2rem); }
.cg-root.cg-win .cg-table th { letter-spacing: 0.025em; }
.cg-root.cg-win .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-win .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-win .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Winchester, Census 2021 via Nomis (E07000094): TS001 127,444 usual residents, 121,804 in households, 5,640 in communal establishments; TS007A 7,742 aged 10 to 14 (6.1 percent, England 6.0), 9,213 aged 15 to 19 (7.2 percent, England 5.7), 8,167 aged 20 to 24 (6.4 percent, England 6.0), 5,362 aged 75 to 79 (4.2 percent, England 3.6); TS068 26,971 students of 121,401 residents aged 5 and over (22.2 percent, England 20.4); TS006 192.8 per square kilometre (England 433.5). Winchester Cathedral history pages: founded 1079; longest nave and greatest overall length of any Gothic cathedral in Europe (the cathedral\'s claim); Jane Austen buried 1817, plaque 1872; St Swithun died 863, rain legend; William Walker, diver, six years under water underpinning waterlogged foundations in the early 1900s.',
    localProject: 'How much of the Itchen comes from underground? EA Hydrology daily mean flow, good days, runs of 365+ days; Lyne and Hollick filter alpha 0.925, three passes. Itchen at Highbridge BFI 0.875 (16,958 days), Q95 2.237, Q5 7.939, ratio 3.5, max 17.867 (12 February 2014), min 1.628 (22 July 2005). Hamble at Frogmill 0.623, ratio 12.4. Blackwater at Ower 0.427, ratio 29.7, min 0.083, max 21.020. Itchen sensitivity: alpha 0.90 0.894, 0.95 0.841, 0.98 0.742; passes 1 0.944, 5 0.823; ranking unchanged at every setting. Lesson family: recursive digital filters.',
    requiredMentions: [
      '127,444',
      '121,804',
      '26,971',
      '121,401',
      '192.8',
      'William Walker',
      'Swithun',
      'Highbridge',
      'Hamble',
      'Blackwater',
      'baseflow',
      'Harestock'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Winchester: 127,444 usual residents; 121,804 in households; 5,640 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000094' },
      { claim: 'Nomis, Census 2021 TS007A: Winchester and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000094,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Winchester 26,971 students of 121,401 aged 5 and over (22.2 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000094,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, Winchester 192.8 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000094,E92000001' },
      { claim: 'Environment Agency Hydrology: Itchen at Highbridge daily mean flow.', url: 'https://environment.data.gov.uk/hydrology/id/measures/e9c72be8-dea1-4a5d-8af7-05dce5f419ee-flow-m-86400-m3s-qualified' },
      { claim: 'Environment Agency Hydrology: Hamble at Frogmill and Blackwater at Ower daily mean flow.', url: 'https://environment.data.gov.uk/hydrology/id/measures/d939b5a0-012f-4082-ad1e-eba74d1f65d5-flow-m-86400-m3s-qualified' },
      { claim: 'Winchester Cathedral, Architecture: founded 1079; longest nave and greatest overall length of any Gothic cathedral in Europe.', url: 'https://www.winchester-cathedral.org.uk/history/architecture/' },
      { claim: 'Winchester Cathedral, Notable People: Jane Austen 1817 and 1872 plaque; St Swithun; William Walker the diver.', url: 'https://www.winchester-cathedral.org.uk/history/notable-people/' }
    ],
    rejectedClaims: [
      'A single true baseflow index: the value depends on filter settings, so the page reports its settings and the ranking that survives them.',
      'Causes of the Itchen\'s steadiness beyond what the data shows: the page measures baseflow and swing, and does not claim geology it has not sourced.',
      'Hampshire County Council\'s Great Hall page: returned 403 and was not circumvented.',
      'Days graded suspect or unchecked, and data in runs shorter than a year: excluded from the filter.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Winchester Cathedral or Winchester City Council.'
    ]
  }
};
