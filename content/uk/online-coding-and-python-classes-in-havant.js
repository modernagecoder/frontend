'use strict';
// Havant (cg- town page, UK cluster Phase 10, towns band B, row 527). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a program track the middle value of a
// river's flow while it arrives, keeping five numbers instead of the whole year, and when does that shortcut go wrong?
// (P-square streaming quantile estimation against an exact sort; order dependence.)
// Data (read 1 October 2026): EA Hydrology API, station Havant, Hermitage Stream (dateOpened 1979-02-26; 50.856264,
// -0.991737), measure flow-i-900-m3s-qualified: 33,446 rows from 2025-09-01T00:00 to 2026-08-15T09:15, 33,443 values
// (3 blank). Quality: Good 29,121, Unchecked 4,321, Estimated 1, Missing 3. Nearest postcode to the gauge PO9 3EL
// (58 m), Havant BUA, Bedhampton ward.
// Our run (scratchpad hvt/p2.py): mean 0.3472 m3/s; exact median (lower, sorted) 0.098; 24.3% of readings above the
// mean; highest 12.009 at 19:45 on 1 February 2026. Monthly exact medians include October 2025 0.022 and February 2026
// 1.461. P-square (Jain and Chlamtac 1985) median: in recorded order 0.2969 (0.4534 at the end of March); shuffled
// (seed 20260930) 0.0976; 100 further shuffles 0.0974 to 0.0991; sorted low to high 0.137; high to low 0.3339. 90th
// percentile exact 1.029: recorded 1.7675, shuffled 1.0321. 99th exact 2.775: recorded 2.2158, shuffled 2.7574.
// Lesson family: P-square streaming quantiles. Screened: "p-square", "streaming median", "streaming quantile", "t-digest"
// 0 hits in content/; claimed in claims.txt. Kings Heath = streaming heavy hitters (frequencies, not quantiles);
// Headingley = generators and memory; Gosport = bootstrap coverage; Hampshire county page = capture-recapture.
// Place facts: Havant TS001 124,208. ONS 2021 BUA (published): Havant 46,960. postcodes.io suburban areas whose closest
// postcode is in the Havant BUA: Bedhampton, Leigh Park, Warblington, Langstone, Denvilles, West Leigh (all PO9).
// Emsworth (own BUA), Purbrook (Waterlooville BUA) and Wecock (Horndean BUA) are not listed as inside.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HAVANT', label: 'Havant', blurb: 'Online coding and Python classes for Havant, with a project that tracks the Hermitage Stream\'s middle flow while it arrives, keeping only five numbers.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-havant',
  code: 'hvt',
  accent: '#4C5C8A',
  accentRationale: 'Havant: a slate harbour blue (6.55:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Havant',
    eyebrow: 'Havant, Hampshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Hampshire', href: '/coding-classes-in-hampshire' },
    { label: 'Portsmouth', href: '/best-coding-class-in-portsmouth' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Havant, Hampshire',
  title: 'Online Coding and Python Classes in Havant | Ages 6 to 67',
  description: 'Live online coding and Python classes for Havant, Bedhampton, Leigh Park and Warblington, ages 6 to 67, with vibe coding and AI projects. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Havant, with a streaming median project on the Hermitage Stream.',
  twitterDescription: 'Havant Python and coding lessons, live online for ages 6 to 67. Try the first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Havant',
    description: 'Online Python, coding, AI and maths lessons for children, teenagers and adults in Havant and the borough around it, taught through data the learner streams, measures and checks.'
  },

  h1: 'Online coding and Python classes in Havant',
  capsuleQ: 'What are the best online coding and Python classes in Havant?',
  capsule: 'At the 2021 census the ONS put 46,960 usual residents in the Havant built-up area and 124,208 in Havant borough. Bedhampton, Leigh Park, Warblington, Langstone, Denvilles and West Leigh are gazetteer suburbs whose nearest postcodes fall inside that built-up area. Modern Age Coders runs live online lessons in Python, coding, vibe coding, AI and maths for Havant learners aged six to 67; the tutors are in India and teach one-to-one or in groups of five to ten learners sharing a level. Every project uses real data. A free opening lesson ends with our course suggestion. For Havant, a learner streams a year of 15-minute flow readings from the Hermitage Stream through a Python estimator that keeps just five numbers, then discovers why the order the data arrives in can wreck the answer. Continuing costs USD 100 a month for a group or USD 150 a month for private lessons.',
  lead: 'The Environment Agency\'s gauge on the Hermitage Stream at Havant dates from 1979, and every fifteen minutes it adds another reading. To find the middle value of a year of readings you would normally sort all of them, but a program watching a live feed may not want to keep everything. In 1985 two computer scientists, Raj Jain and Imrich Chlamtac, published a method that tracks a median using only five running estimates. On shuffled data it is remarkably good. Fed the stream in the order the year actually happened, it gets the answer wrong by a factor of three, and working out why is the lesson.',
  wa: 'Hello Modern Age Coders, please can we book a free Python or coding trial lesson? We are in Havant.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Python and coding courses for Havant learners',
    intro: 'One course to begin with at each age. Lesson one is free, live and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Thinking before coding: middles, orders and patterns found with cards and counters.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: Scratch games made with an AI and then tested properly.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python for real datasets, including the Hermitage Stream streaming project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the basics to data pipelines and AI agents that read live feeds.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Havant today',
      h2: 'Havant, Bedhampton, Leigh Park and Warblington',
      intro: 'Two census counts and the suburbs the postcode gazetteer places in the town.',
      body: [
        { kind: 'table', caption: 'Usual residents in the 2021 census (ONS)', head: ['Area', 'Residents'], rows: [
          ['Havant built-up area', '46,960'],
          ['Havant borough', '124,208']
        ] },
        { kind: 'p', text: 'Havant borough also holds Waterlooville, Emsworth and Hayling Island, so these two numbers overlap and must never be added. postcodes.io records Bedhampton, Leigh Park, Warblington, Langstone, Denvilles and West Leigh as suburban areas in PO9, each with a nearest postcode inside the Havant built-up area. Emsworth has a built-up area of its own and Purbrook belongs to Waterlooville\'s, so neither is listed here. The flow gauge sits 58 m from postcode PO9 3EL, which is also in the Havant built-up area. Schools teach the national curriculum for England; tell us the year group, from Year 2 to Year 13, and lessons can back up GCSE or A level computer science.' },
        { kind: 'callout', h3: 'Solent pages', p: 'Visit <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-gosport">Gosport</a>, <a class="cg-inline-link" href="/best-coding-class-in-chichester">Chichester</a> and the <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire county page</a>. We explain why reasoning comes before AI tools in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Havant project',
      h2: 'A median in five numbers, and the order that breaks it',
      intro: 'Almost a year of Hermitage Stream flows, an exact answer, and an estimate that never stores the data.',
      body: [
        { kind: 'p', text: 'The learner requests every 15-minute flow reading for the Havant gauge on the Hermitage Stream from the Environment Agency\'s hydrology service, from midnight on 1 September 2025 to 09:15 on 15 August 2026. That is 33,446 rows, of which 33,443 hold a value. The Agency flags 29,121 as good and 4,321 as not yet checked; every unchecked reading dates from 1 July 2026 onward, so the learner notes that the newest figures may still change.' },
        { kind: 'p', text: 'First the exact answer. Sorting all 33,443 readings puts the median flow at 0.098 cubic metres a second, while the mean is 0.347. The stream spends most of its time low and occasionally surges, peaking at 12.009 at 19:45 on 1 February 2026, and only 24.3% of readings lie above the mean. Then the learner codes the P-square algorithm. It holds five marker heights and their positions, and each new reading nudges the middle marker up or down using a curve fitted through its neighbours. Memory stays at ten numbers however long the stream runs.' },
        { kind: 'table', caption: 'P-square median against the exact median, same 33,443 readings, our Python run', head: ['Order the readings arrive in', 'P-square median', 'Exact median'], rows: [
          ['Shuffled at random', '0.0976', '0.098'],
          ['A hundred more shuffles', '0.0974 to 0.0991', '0.098'],
          ['Sorted low to high', '0.137', '0.098'],
          ['As recorded, September to August', '0.2969', '0.098'],
          ['Sorted high to low', '0.3339', '0.098']
        ] },
        { kind: 'p', text: 'Shuffled, the estimate lands within two thousandths of the truth every time. In the real order it ends at 0.2969, three times too high. The monthly medians explain why: 0.022 in October 2025 but 1.461 in February 2026. The winter pushed the markers up, and the dry spring and summer brought them down only slowly, because P-square moves each marker by at most one position per reading. By the end of March its median stood at 0.4534. The method quietly assumes that any stretch of the stream looks like the whole, and a river with seasons does not.' },
        { kind: 'p', text: 'The same happens further up. The true 90th percentile is 1.029; shuffled, P-square finds 1.0321, in time order 1.7675. For the 99th percentile the exact value is 2.775; shuffled 2.7574, in time order 2.2158. The learner ends by testing fixes, such as one estimator per month or a random buffer before the estimator, and measures what each costs in memory.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Line up number cards to find the middle, then try to track it while cards arrive one at a time.' },
          { h3: 'Ages 11 to 15', p: 'Read the flow file in Python, sort it, and compare median and mean.' },
          { h3: 'Ages 15 and up', p: 'Code P-square from the 1985 paper, feed it in four orders, and design a fix.' }
        ] },
        { kind: 'callout', h3: 'Data and method', p: 'Flow readings are from the Environment Agency Hydrology API under the Open Government Licence. The estimator follows Jain and Chlamtac, Communications of the ACM, 1985. The shuffles use seed 20260930, and every figure on this page comes from our own Python run.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Python and AI together',
      h2: 'What a drifting median teaches about AI-written code',
      intro: 'Code can be correct and still wrong for the data it meets.',
      body: [
        { kind: 'table', caption: 'From the Hermitage Stream to AI assistance', head: ['What the stream showed', 'How to use it with AI'], rows: [
          ['P-square was right on shuffled data', 'Passing a test is not the same as fitting your data'],
          ['Real order made it three times too high', 'Test in the order data will really arrive'],
          ['Median 0.098 against mean 0.347', 'Ask which summary the question needs'],
          ['4,321 readings were still unchecked', 'Read the quality flags before the numbers'],
          ['Ten stored numbers against 33,443', 'Know what a shortcut saves and what it risks']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for a memory-light running median and it may well give you P-square or something like it, with a test on random numbers to prove it works. That test would pass. Havant learners practise vibe coding by asking the next question: what does my real data look like, and does it arrive in a friendly order? AI agents that watch live feeds, from rivers to shop sales, meet exactly this problem. We begin agent projects once a learner writes Python confidently without help, usually from sixth form or in adult life, and Copilot Studio agents are taught in one-to-one lessons only. Background reading: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>, and our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents route for UK students</a>.' },
        { kind: 'p', text: 'The Environment Agency, the ONS and postcodes.io are not connected with Modern Age Coders. Their open data made the project possible; the analysis is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Next steps',
    h2: 'Counting cards at seven, streaming data at seventeen',
    intro: 'The trial lesson tells us where to begin; the school year is only a hint.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Patterns and order', p: 'Sorting, middles and step-by-step rules, often with objects first.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'First creations', p: 'Scratch built alongside an AI, then early Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python on real data', p: 'Files, statistics and algorithms that work on live measurements.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Pipelines and agents', p: 'Data pipelines, algorithms, then agents that handle live feeds.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Streams and AI',
    h2: 'What is a streaming median, and why does it matter when AI writes the code?',
    intro: 'A streaming median is an estimate of the middle value of data that is updated as each new value arrives, without storing all the values, and it matters because the popular methods assume the order of arrival is random, an assumption an AI will seldom flag.',
    p1: 'On 33,443 Hermitage Stream readings the exact median was 0.098; P-square gave 0.0976 on shuffled data but 0.2969 in the order the year happened.',
    p2: 'A learner who has seen that gap asks of any estimate, whether their own or an AI\'s, what it assumes about the data it will meet.',
    closer: 'For Havant teenagers, testing code against the real shape of real data is how they stay in charge of AI tools, and that habit is built by coding.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'In practice',
    h2: 'How lessons run for Havant learners',
    intro: 'Lessons are live on video. A laptop or desktop with a keyboard is essential; a tablet alone will not handle Python well.',
    cells: [
      { h3: 'Typing, not watching', p: 'The learner writes every line and explains it to the tutor.' },
      { h3: 'Trial before placement', p: 'We see the learner at work before recommending a course.' },
      { h3: 'Free to start', p: 'The first lesson carries no fee and no card is taken.' },
      { h3: 'Five to ten together', p: 'Groups share a level, with learners from around the UK.' },
      { h3: 'About eight a month', p: 'Two lessons a week in term, with Hampshire holidays kept clear on request.' },
      { h3: 'Consistent UK time', p: 'Your lesson time does not shift when the clocks change.' }
    ],
    spec: { title: 'Why live and online', p: 'Explaining your own code to a person is how programming sticks. Teaching online lets us put learners with others at exactly their level.' }
  },

  fees: {
    h2: 'What Havant families pay',
    intro: 'Havant learners are charged our standard rates for students outside India.',
    first: 'First lesson: free, full length, ending with our course suggestion.',
    group: 'Group class, about eight lessons in a month.',
    private: 'One-to-one lessons, about eight in a month.',
    closer: 'Prices are in US dollars, and we do not convert them to pounds. The trial is not charged, and billing only begins once you have agreed a course and a regular time. The pricing page sets out holiday pauses, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Hampshire families and UK learners, reviewing us on Google',

  book: {
    h2: 'Request a free Havant lesson',
    intro: 'Share the learner\'s age or year group and their interests. The trial might be a card-sorting puzzle, a Scratch game built with AI, a first Python script, or a first look at live river data.',
    success: 'Thank you. Your Havant request has arrived.'
  },

  faq: {
    h2: 'Havant questions answered',
    intro: 'The stream project, medians, Python, vibe coding and the practical side of lessons.',
    items: [
      { q: 'How many people live in Havant?', a: 'The ONS recorded 46,960 usual residents in the Havant built-up area at the 2021 census, and 124,208 in Havant borough.' },
      { q: 'Are online Python classes available in Havant?', a: 'Yes. Lessons run live online for ages 6 to 67 in Havant, Bedhampton, Leigh Park, Warblington and the rest of the borough.' },
      { q: 'What is the difference between a median and a mean?', a: 'The median is the middle value once data is sorted; the mean is the total divided by the count. For the Hermitage Stream the median flow was 0.098 and the mean 0.347 cubic metres a second.' },
      { q: 'What is the P-square algorithm?', a: 'A method from 1985 that estimates a median or other percentile from a stream of numbers while storing only five markers and their positions.' },
      { q: 'Why did P-square go wrong on the Havant data?', a: 'In the order the readings were recorded, a wet winter pushed its markers up and they fell back too slowly. It ended at 0.2969 against a true median of 0.098; shuffled, it gave 0.0976.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is describing what you want to an AI and then reading, running and fixing the code it gives you. We teach it together with typed Python.' },
      { q: 'When do learners start building AI agents?', a: 'When they can write Python confidently on their own, usually from sixth form or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Can this help with GCSE or A level computer science?', a: 'Algorithms, data handling and programming feature in both, and we cover them in depth. We give no promise of grades.' },
      { q: 'What are the fees?', a: 'The first lesson costs nothing. Afterwards it is USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Can lessons pause for half term?', a: 'Yes. Send the dates and we take those weeks out.' }
    ]
  },

  next: {
    eyebrow: 'Along the coast',
    h2: 'More pages for Hampshire and the Solent',
    html: 'Explore <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-gosport">Gosport</a>, <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a> and <a class="cg-inline-link" href="/best-coding-class-in-chichester">Chichester</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the others.',
    waLabel: 'Message on WhatsApp'
  },

  footerHeading: 'Havant and Hampshire',
  footerPlaces: [
    { href: '/coding-classes-in-hampshire', label: 'Hampshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hvt .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-hvt .cg-hero h1 { font-weight: 745; letter-spacing: -0.02em; line-height: 1.1; }
.cg-root.cg-hvt .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-hvt .cg-eyebrow { letter-spacing: 0.15em; font-weight: 660; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-hvt .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.018em; }
.cg-root.cg-hvt .cg-table caption { font-weight: 570; text-align: left; font-size: 0.9rem; }
.cg-root.cg-hvt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hvt .cg-table th { font-weight: 720; letter-spacing: 0.018em; }
.cg-root.cg-hvt .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hvt .cg-callout { border-left-width: 5px; border-radius: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Havant (E07000090), Census 2021 TS001 usual residents 124,208. ONS 2021 BUA (published): Havant 46,960. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Havant BUA: Bedhampton, Leigh Park, Warblington, Langstone, Denvilles, West Leigh (PO9).',
    localProject: 'EA Hydrology API, Havant (Hermitage Stream), 15-minute flow, 2025-09-01T00:00 to 2026-08-15T09:15: 33,446 rows, 33,443 values; Good 29,121, Unchecked 4,321. Exact median 0.098 m3/s, mean 0.347, 24.3% of readings above the mean, peak 12.009 (1 February 2026). Monthly medians October 2025 0.022, February 2026 1.461. P-square median: shuffled 0.0976 (100 shuffles 0.0974 to 0.0991), sorted up 0.137, recorded order 0.2969 (0.4534 end of March), sorted down 0.3339. 90th exact 1.029 (shuffled 1.0321, recorded 1.7675); 99th exact 2.775 (2.7574, 2.2158). Lesson family: P-square streaming quantile estimation and order dependence.',
    requiredMentions: [
      '46,960',
      'Bedhampton',
      'Leigh Park',
      'Warblington',
      'Denvilles',
      'Hermitage Stream',
      'P-square',
      '0.2969',
      '33,443'
    ],
    sources: [
      { claim: 'Environment Agency Hydrology API, station Havant (Hermitage Stream), 15-minute flow, Open Government Licence.', url: 'https://environment.data.gov.uk/hydrology/doc/reference' },
      { claim: 'Jain R., Chlamtac I. (1985), The P2 algorithm for dynamic calculation of quantiles and histograms without storing observations, Communications of the ACM 28(10), 1076 to 1085.', url: 'https://doi.org/10.1145/4372.4378' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Havant.', url: 'https://api.postcodes.io/places?q=Bedhampton' }
    ],
    rejectedClaims: [
      'Any flooding or damage around the 1 February 2026 peak: not researched and not claimed.',
      'That unchecked readings are wrong: they are flagged unchecked, and the page says only that they may change.',
      'That P-square is unreliable in general: the page shows order dependence on this series only.',
      'That Emsworth or Purbrook are inside the Havant built-up area: they belong to other BUAs; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
