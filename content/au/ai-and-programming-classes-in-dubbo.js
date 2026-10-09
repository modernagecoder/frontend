'use strict';
// Dubbo (cg- regional city page, Australia cluster Phase 7, row 165). Shaped page: AI and programming for
// teenagers and adults. Spine: can an outlier detector find odd house numbers along a street, and why does it
// cry wolf until the data is split by side? Data: NSW Spatial Services, NSW Geocoded Addressing Theme,
// AddressPoint (MapServer layer 1), extracted 8 October 2026 inside 148.55 to 148.68 E, 32.19 to 32.30 S:
// 21,185 points. Item licence text links to the Spatial Services terms and copyright pages (the copyright
// page returned 403 to automated reads), so the page attributes "(c) Spatial Services" and publishes only
// counts and derived statistics, never an address. Our code (scratchpad au/r4/dbo_final.py): points ordered
// along each street's main axis (first principal component), duplicates at the same position and number
// merged; Hampel filter, window 5 each side, threshold 3 scaled MADs. Darling Street: 328 points, 212 sites,
// about 3.3 km; mixed sides 59 flags; odd side 106 sites 2 flags (both among the lowest odd numbers), even side
// 106 sites 0 flags; highest odd 363, highest even 272. Fitzroy Street: 444 points, 311 sites, about 5.7 km;
// mixed 6 flags (5 with a MAD floor of 4); odd side 147 sites 0 flags, even side 164 sites 3 flags, 1 with the
// floor. Lesson family: Hampel filter on a house-number sequence; screened 0 content hits 8 October 2026;
// claimed by AU-R4. Place facts: ABS Census 2021 QuickStats SUA 1012 Dubbo; NSW place names inside the SUA
// from Spatial Services places points; NSW term dates; IANA tz 2026e. Excluded by the cluster rules: income,
// rent, ancestry, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'DUBBO', label: 'Dubbo', blurb: 'Dubbo in the Orana region, house numbers along two long streets, and an outlier detector that only works once the data is split by side.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-dubbo',
  code: 'dubb',
  accent: '#600F28',
  accentRationale: 'Dubbo: a deep red-earth maroon (HSV saturation 0.84, value 0.38, hue 341), picked by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with strong contrast on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Dubbo',
    eyebrow: 'Dubbo, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Dubbo, New South Wales',
  title: 'AI and Programming Classes in Dubbo | Live Online Lessons',
  description: 'AI and programming classes for Dubbo teens and adults, live online: Python, machine learning and data cleaning on real local data. First lesson free.',
  ogDescription: 'Dubbo AI and programming classes, with a project that runs an outlier detector along house numbers on two of the city\'s longest streets.',
  twitterDescription: 'Live online AI and programming classes for Dubbo teens and adults, first lesson free.',
  ogImageCourse: 'artificial-intelligence-complete-masterclass-college',
  verifiedOn: '8 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Dubbo Learners',
    description: 'Python, machine learning and data preparation for AI, taught live online to teenagers and adults in Dubbo and the Orana region of New South Wales.'
  },

  h1: 'AI and programming classes in Dubbo',
  capsuleQ: 'What are the best AI and programming classes in Dubbo?',
  capsule: 'Dubbo teenagers and adults do well with classes that teach AI from the data up: Python, then cleaning and checking data, then models that learn from it. At the 2021 Census the Dubbo urban area had 40,578 residents. Every lesson is live online with a teacher, one to one or in a small matched group, and the first lesson costs nothing.',
  lead: 'Before any AI model learns from data, someone has to find the bad rows. One of the simplest tools for that is the Hampel filter: slide a window along a sequence, take the median, and flag anything that sits too far from it. We pointed one at house numbers. The NSW address map lists every numbered site in Dubbo, so we walked the filter along Darling Street and Fitzroy Street in order. On Darling Street it raised 59 alarms. Almost all of them were false, and the fix was not a cleverer threshold. It was understanding how streets are numbered.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Dubbo.',

  picks: {
    eyebrow: 'Courses for Dubbo',
    h2: 'AI learning paths for the Orana region',
    intro: 'All four are taught live and use data like the address project. Book the free trial, which needs no card, and the teacher will recommend one.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch, through lists and loops to programs that sort and check real data.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning for teenagers, including how messy data trips models up and how to prepare it.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'A complete AI course, from search and probability to neural networks and modern models.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Cleaning, exploring and summarising data properly, the work that comes before any model.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dubbo at the Census',
      h2: 'A young, working city in the Central West',
      intro: 'Figures for the Dubbo Significant Urban Area from the 2021 Census.',
      body: [
        { kind: 'table', caption: 'Dubbo urban area: core 2021 counts', head: ['Measure', 'Dubbo'], rows: [
          ['Residents', '40,578'],
          ['Median age', '35'],
          ['Families', '10,276'],
          ['Private dwellings', '16,842'],
          ['Average household size', '2.5']
        ] },
        { kind: 'table', mt: true, caption: 'How Dubbo differs from New South Wales and Australia', head: ['Measure', 'Dubbo', 'NSW', 'Australia'], rows: [
          ['Children aged 0 to 4', '3,066 (7.6%)', '5.8%', '5.8%'],
          ['Children aged 5 to 9', '2,887 (7.1%)', '6.2%', '6.2%'],
          ['Employed people who worked full-time', '12,642 (62.9%)', '55.2%', '55.9%'],
          ['Occupied homes that are separate houses', '11,998 (82.3%)', '65.6%', '72.3%'],
          ['Occupied homes that are flats or apartments', '1,106 (7.6%)', '21.7%', '14.2%'],
          ['Technicians and trades workers', '2,726 (14.1%)', '11.9%', '12.9%'],
          ['Bachelor degree or above, people 15 and over', '6,075 (19.1%)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Lots of young children', p: '7.6% of residents are under five, well above the 5.8% for both the state and the country.' },
          { h3: 'Full-time work', p: '62.9% of employed residents worked full-time, against 55.2% across NSW.' },
          { h3: 'Places inside the boundary', p: 'NSW place names within the urban area include Dubbo, North Dubbo, South Dubbo, West Dubbo, Delroy Gardens and Orana Heights.' }
        ] },
        { kind: 'p', text: 'Census cells are randomly adjusted by small amounts to protect privacy, so details may not sum to totals. We print the bureau\'s published figures without change.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can an outlier detector find odd house numbers?',
      intro: 'Order every address point along the street, read off the house numbers, and ask the Hampel filter which ones look wrong.',
      body: [
        { kind: 'table', caption: 'The two Dubbo streets in the NSW address points (our counts, extracted 8 October 2026)', head: ['Item', 'Darling Street', 'Fitzroy Street'], rows: [
          ['Address points', '328', '444'],
          ['Distinct numbered sites after merging duplicates', '212', '311'],
          ['Approximate length covered', '3.3 km', '5.7 km'],
          ['Highest odd and even numbers', '363 and 272', '411 and 434']
        ] },
        { kind: 'table', mt: true, caption: 'Hampel flags, window of 5 either side, threshold 3 (our calculation)', head: ['How the numbers are fed in', 'Darling Street flags', 'Fitzroy Street flags'], rows: [
          ['Both sides mixed in one sequence', '59', '6'],
          ['Odd side only', '2 of 106 sites', '0 of 147 sites'],
          ['Even side only', '0 of 106 sites', '3 of 164 sites'],
          ['Even side, with a minimum spread of 4', '0', '1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Put the points in order', p: 'Find the direction each street mostly runs in and sort the address points along it, so the numbers form a sequence from one end to the other.' },
          { h3: 'Slide a window', p: 'For each number, look at the five before and five after. Take their median and their median absolute deviation, a robust measure of spread.' },
          { h3: 'Flag the far ones', p: 'If a number is more than three scaled deviations from its neighbours\' median, flag it for a human to check.' }
        ] },
        { kind: 'callout', h3: 'Odd and even sides do not line up', p: 'On Darling Street the odd side reaches 363 while the even side stops at 272, so opposite houses can carry very different numbers. Mixed together, the sequence jumps back and forth and the filter sees outliers everywhere: 59 of them. Split by side, the alarms fall to two, both among the lowest odd numbers. On Fitzroy Street the split leaves three flags on the even side, and requiring a minimum spread of 4 leaves just one.' },
        { kind: 'p', text: 'A flag means "worth checking", not "wrong": a number can be unusual for good reasons, such as a corner block or a renumbered lot. We publish counts only, never individual addresses. Address data (c) Spatial Services; every count and flag is our own calculation.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'From filter to AI',
      h2: 'Why data cleaning is AI work',
      intro: 'Most real AI projects spend more time on this step than on the model.',
      body: [
        { kind: 'p', text: 'The Hampel filter uses the median and the median absolute deviation rather than the mean and standard deviation, because a single wild value can drag a mean a long way but barely moves a median. That robustness is why it is popular for cleaning sensor readings and logs before they reach a machine learning model. Yet the Dubbo test shows its weak point: it assumes neighbours should be similar. When the data has hidden structure, such as two interleaved sides of a street, the assumption fails and so does the filter.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write a median function, then a rolling window, then the full filter, and test it on a short list with one planted mistake.' },
          { h3: 'University students', p: 'Compare the Hampel filter with isolation forests and other anomaly detectors, and measure false alarms on structured data.' },
          { h3: 'Adults', p: 'Learn to look at how data is organised before cleaning it, and to report flags as questions rather than errors.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no affiliation with Spatial Services, the NSW Government, Dubbo Regional Council or the statistics bureau. The bureau supplied the Census tables; the ordering, filtering and every flag count came from our own Python.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Dubbo planner',
      h2: 'NSW terms in 2027 and lesson clocks',
      intro: 'Useful dates for planning a regular slot from Dubbo.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 2', p: 'NSW public schools run Term 2 of 2027 from Tuesday 27 April to Friday 2 July, with development days counted inside the term.' },
          { h3: 'Term 3', p: 'Term 3 of 2027 runs from Monday 19 July to Friday 24 September, then two weeks of spring holidays.' },
          { h3: 'Term 4 and the clocks', p: 'Term 4 of 2027 is Monday 11 October to Monday 20 December. Daylight saving in NSW starts on the first Sunday in October.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting a list to cleaning data for models',
    intro: 'The ages are a starting point; the free lesson sets the real level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and order', p: 'Python that sorts, finds medians and spots the odd one out in a short list.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Learning from data', p: 'First machine learning models and the data preparation that decides whether they work.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Robust methods', p: 'Robust statistics, anomaly detection and evaluating models when the data is messy.', courses: ['artificial-intelligence-complete-masterclass-college', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Clean data at work', p: 'Spreadsheets and databases checked with code, with problems reported clearly to colleagues.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools can clean data automatically. Why should Dubbo learners know how?',
    intro: 'Because an automatic cleaner applied without understanding would have raised 59 alarms on one street, and someone has to know why most of them are wrong.',
    p1: 'AI data tools increasingly offer to "fix" a dataset in one click, flagging outliers and suggesting corrections. Underneath, many use exactly this kind of rolling robust filter. Run on Darling Street with both sides mixed, that one click would mark dozens of perfectly good addresses as errors, and a trusting user might "correct" them.',
    p2: 'Our Dubbo learners build the filter themselves, run it on real streets, and then work out why it misfires. Once they understand the structure, they can tell an AI tool how to group the data, or check its suggestions before accepting any. That judgement is what separates using AI from relying on it blindly.',
    closer: 'Models learn from whatever they are given; the person who cleans the data decides what that is.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Dubbo lessons work',
    intro: 'Every class is a live video lesson, so distance from a big city is no obstacle.',
    cells: [
      { h3: 'At home', p: 'Learners connect from their own desk; there is no long drive to Sydney or Orange for a class.' },
      { h3: 'Fits NSW school', p: 'Teachers plan with NSW year levels in mind and work around the state\'s four terms. Everything is taught in English.' },
      { h3: 'Trial first', p: 'A real, free first lesson ends with a recommended course and a weekly time that suits.' },
      { h3: 'Matched groups', p: 'Five to ten learners at the same level, gathered from Dubbo and elsewhere so each group stays full.' },
      { h3: 'Twice weekly', p: 'A learner meets the class on two set days each week, which comes to roughly eight sessions in a month.' },
      { h3: 'Teachers in India', p: 'India time is five and a half hours behind Dubbo during daylight saving and four and a half hours behind for the rest of the year.' }
    ],
    spec: { title: 'Times in Dubbo time', p: 'We always book in Dubbo time, so when NSW clocks change the adjustment is ours to make.' }
  },

  fees: {
    h2: 'Dubbo class fees',
    intro: 'The pricing is short and the same across Australia.',
    first: 'Your first lesson is free, with a level, course and weekly time suggested at the end.',
    group: 'A month of group classes, about eight, with five to ten learners at the same stage.',
    private: 'About eight private lessons a month with your own teacher.',
    closer: 'Outside India we charge in US dollars, and Dubbo pays the same as every other Australian town. You are billed only once the trial has settled what and when you will study, and our pricing page deals with holidays, absences and moving from group to private or back.'
  },

  reviewsH2: 'Families who reviewed us on Google',

  book: {
    h2: 'Book a free AI lesson in Dubbo',
    intro: 'Give us the learner\'s age and interests. A beginner might start by sorting lists in Python; someone further on might run the Hampel filter along a Dubbo street.',
    success: 'Thank you. We will be in touch shortly about a Dubbo lesson.'
  },

  faq: {
    h2: 'Dubbo AI class questions',
    intro: 'Answers to what Dubbo families and adults ask most often.',
    items: [
      { q: 'What is a Hampel filter?', a: 'A Hampel filter is an outlier detector that slides a window along a sequence and flags any value more than a set number of scaled median absolute deviations from the window\'s median.' },
      { q: 'What did the Dubbo project find?', a: 'With both sides of Darling Street mixed, the filter flagged 59 house numbers; split into odd and even sides, it flagged only 2. On Fitzroy Street, splitting left 3 flags, and adding a minimum spread left 1.' },
      { q: 'How many people live in Dubbo?', a: 'Census night 2021 counted 40,578 people in the Dubbo urban area, and their median age was 35, younger than the state as a whole.' },
      { q: 'Why is data cleaning part of learning AI?', a: 'Because machine learning models learn whatever patterns are in their data, including mistakes. Finding and judging odd values is a core step in every real AI project.' },
      { q: 'Do you help NSW senior students?', a: 'Yes, with the programming and maths behind senior NSW subjects, organised around NSW terms. Assessed work always remains the student\'s own.' },
      { q: 'When are lessons for Dubbo learners?', a: 'Weekday after-school slots and Saturday mornings are common, agreed at the trial and always quoted in Dubbo time.' },
      { q: 'Can younger children join?', a: 'Yes. Our youngest learners are six and start with Scratch and simple games. The address filter project is for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Dubbo?', a: 'No. We hold no premises in Australia and claim none. All classes are live online; learners need a computer, sound and a dependable connection, and our listed phone number is in India.', boiler: true },
      { q: 'What do Dubbo AI classes cost?', a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Everything is agreed before you pay.', boiler: true },
      { q: 'How many learners share a group?', a: 'Between five and ten, matched by level and goals rather than age or location. If no group time works, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'Further reading from the Central West',
    html: 'The state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>. To go beyond prompting, read <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-australia">learn to train AI, not just prompt it</a>, and for younger teens see <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>. All Australian pages are on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dubbo and New South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/hsc-enterprise-computing-help', label: 'HSC Enterprise Computing' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-dubb .cg-hero-grid { align-items: stretch; gap: clamp(1.1rem, 3vw, 2.4rem); }
.cg-root.cg-dubb .cg-hero h1 { font-weight: 740; letter-spacing: -0.019em; line-height: 1.09; }
.cg-root.cg-dubb .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); padding: 0.8rem 1rem; }
.cg-root.cg-dubb .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-dubb .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.011em; }
.cg-root.cg-dubb .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.75rem); }
.cg-root.cg-dubb .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.005em; }
.cg-root.cg-dubb .cg-table td + td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dubb .cg-ladder-col { border-top: 1px solid rgba(96, 15, 40, 0.35); padding-top: 1rem; }
.cg-root.cg-dubb .cg-callout { border-top: 3px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Dubbo, ABS Census 2021 QuickStats, Significant Urban Area 1012 (read 8 October 2026): 40,578 people; median age 35; 10,276 families; 16,842 private dwellings; average 2.5 people per household; aged 0 to 4 3,066 (7.6 percent; NSW 5.8; Australia 5.8); aged 5 to 9 2,887 (7.1 percent; NSW 6.2; Australia 6.2); worked full-time 12,642 (62.9 percent; NSW 55.2; Australia 55.9); separate house 11,998 (82.3 percent; NSW 65.6; Australia 72.3); flat or apartment 1,106 (7.6 percent; NSW 21.7; Australia 14.2); Technicians and Trades Workers 2,726 (14.1 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 6,075 (19.1 percent; NSW 27.8; Australia 26.3). NSW place names inside the SUA polygon (Spatial Services places): Apollo, Bunglegumbie, Churchill Gardens, Delroy Gardens, Dubbo, Dulhunty, Equus, Eulomogo, Keswick, Manera Heights, North Dubbo, Orana Heights, South Dubbo, Troy Junction, West Dubbo, Yuulong. NSW Department of Education 2027: Term 2 Tuesday 27 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Monday 20 December. IANA tz 2026e: Australia/Sydney rule AN; Asia/Kolkata UTC+5:30.',
    localProject: 'Hampel filter on a house-number sequence. NSW Spatial Services, NSW Geocoded Addressing Theme MapServer layer 1 (AddressPoint), extracted 8 October 2026, box 148.55 to 148.68 E and 32.19 to 32.30 S: 21,185 points; attribution (c) Spatial Services; item licence links to Spatial Services terms of service and copyright pages. Method: points whose address ends with the street name and DUBBO; leading house number parsed; points projected on the first principal axis of their positions; duplicates at the same rounded position and number merged; Hampel window 5 each side, threshold 3 times 1.4826 times MAD. DARLING STREET: 328 points, 212 sites, 3,306 m; mixed 59 flags; odd side 106 sites, 2 flags (lowest odd numbers); even side 106 sites, 0 flags; highest odd 363, highest even 272. FITZROY STREET: 444 points, 311 sites, 5,730 m; mixed 6 flags (5 with MAD floor 4); odd 147 sites, 0 flags, highest 411; even 164 sites, 3 flags (1 with MAD floor 4), highest 434. No individual addresses published.',
    requiredMentions: [
      '40,578',
      '10,276',
      '16,842',
      '11,998',
      '12,642',
      'Darling Street',
      'Fitzroy Street',
      '59 alarms',
      '363 and 272',
      'Hampel filter'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Dubbo Significant Urban Area (1012): people, median age, families, dwellings, age, labour force, dwelling structure, occupation, education.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1012' },
      { claim: 'NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer ((c) Spatial Services).', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1' },
      { claim: 'NSW Spatial Services portal item for the Address Point feature service, with its terms and copyright links.', url: 'https://portal.spatial.nsw.gov.au/portal/sharing/rest/content/items/d3cf7c7edef14ca18248c6dc5fcaff96?f=json' },
      { claim: 'NSW Department of Education, future and past NSW term and vacation dates.', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney and rule AN.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Individual flagged addresses: never printed, so no house or business can be identified from the page.',
      'Claims that any flagged number is an error in the official data: flags are only prompts to check, and none were verified on the ground.',
      'A Creative Commons licence statement for the address layer: the item links to Spatial Services copyright terms whose page returned 403 to automated reads, so the page attributes the data and publishes only derived counts.',
      'Term 1 2027 dates: NSW lists Eastern and Western division dates and this page does not establish the division, so Term 1 is omitted.',
      'Income, rent, ancestry, religion and health figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Spatial Services, the NSW Government, Dubbo Regional Council or the ABS.'
    ]
  }
};
