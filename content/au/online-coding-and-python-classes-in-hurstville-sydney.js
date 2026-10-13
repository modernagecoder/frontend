'use strict';
// Hurstville, Sydney (cg- district page, Australia cluster Phase 8, row 221). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page under Sydney and New South Wales. Hurstville (ABS
// suburb SAL11971) lies wholly in Georges River LGA by our point-in-polygon check.
// Spine: shuffle station names for a fair quiz order; why does the obvious swap-with-anyone shuffle favour
// some orders, and how does the Fisher-Yates shuffle fix it?
// Exact enumeration on four stations (Hurstville, Penshurst, Mortdale, Oatley): the naive shuffle has
// 4^4 = 256 equally likely swap sequences spread over 24 orders, so it cannot be fair; counts per order
// range from 8 to 15 (most common Penshurst, Hurstville, Oatley, Mortdale 15/256; least Oatley, Hurstville,
// Penshurst, Mortdale 8/256; fair 256/24 = 10.67). Hurstville itself lands in each position 64 times.
// Fisher-Yates: 4 x 3 x 2 x 1 = 24 sequences, one per order. Simulation, nine Georges River stations, one
// million shuffles each, seed 2026: naive puts Penshurst first 142,257 times, Riverwood 86,901 (fair
// 111,111); Fisher-Yates first-place counts 110,656 to 111,493. Station council areas from NSW Spatial
// Services transport points tested against ABS LGA boundaries.
// Lesson family: Fisher-Yates shuffle vs naive swap-with-any shuffle; screened 0 location-page hits.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'HURSTVILLE',
    label: 'Hurstville, Sydney',
    blurb: 'Online coding and Python for Hurstville, with a project proving that the obvious way to shuffle a list of stations is not fair.'
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
  slug: 'online-coding-and-python-classes-in-hurstville-sydney',
  code: 'hurv',
  accent: '#692F3A',
  accentRationale: 'Hurstville: a deep wine red (hue 350), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 10.2:1 on white and 8.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Hurstville',
    eyebrow: 'Hurstville, Georges River, Sydney',
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
  routeLabel: 'Hurstville, Sydney',
  title: 'Online Coding and Python Classes in Hurstville, Sydney',
  description: 'Live online coding and Python classes for Hurstville children, teenagers and adults, with real teachers in small groups or one to one. The first lesson is free.',
  ogDescription: 'Python classes for Hurstville, with a project proving the obvious shuffle is unfair: shuffling nine Georges River stations a million times puts Penshurst first 142,257 times instead of about 111,111.',
  twitterDescription: 'Hurstville online coding and Python classes, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Hurstville',
    description: 'Level-matched online coding, Python, probability and algorithms for children from six, teenagers and adults in Hurstville, taught live in English.'
  },
  h1: 'Online coding and Python classes in Hurstville',
  capsuleQ: 'What are the best online coding and Python classes for Hurstville learners?',
  capsule: 'Live lessons where a real teacher shows learners why code works, not only how to type it. The 2021 Census counted 31,162 people in Hurstville, a median age of 33, and 11.6% of residents aged 20 to 24 against 6.1% across NSW. Classes run one to one or in level-matched small groups, and the first lesson is free.',
  lead: 'Suppose a Hurstville class wants a random order for a quiz about local train stations. The first shuffle most people write loops through the list and swaps each item with any item at random. It looks fair. It is not. With four stations there are 256 equally likely ways that loop can run, but only 24 possible orders, and 256 does not divide evenly by 24, so some orders must turn up more often than others. Python\'s own random.shuffle uses a slightly different loop, the Fisher-Yates shuffle, which gives every order exactly the same chance. This page proves the difference with exact counting and a million-shuffle experiment.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python lesson for a learner in Hurstville.',
  picks: {
    eyebrow: 'Course picks for Hurstville',
    h2: 'Courses where code meets probability',
    intro: 'Each course reaches the shuffle idea at its own pace. The free trial decides the level, and booking needs no card.',
    items: [
      {
        course: 'python-ai-kids-masterclass',
        band: 'Ages 8 to 12',
        note: 'First Python with games and random choices, the place where shuffling first appears.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Complete Python for teenagers, including lists, loops and the random module done properly.'
      },
      {
        course: 'statistics-probability-maths-course',
        band: 'Ages 15 and over',
        note: 'Probability and statistics, so learners can prove a shuffle is fair rather than hope.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from zero to advanced for adults, with testing and simulation throughout.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Hurstville in the Census',
      h2: 'Young adults, apartments and the train',
      intro: 'Census 2021 QuickStats for the Hurstville suburb against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Hurstville, 2021 Census headline counts',
          head: ['Headline', 'Hurstville'],
          rows: [
            ['Residents', '31,162'],
            ['Families', '8,232'],
            ['Private dwellings', '11,976'],
            ['People per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Hurstville set against NSW and Australia',
          head: ['Measure', 'Hurstville', 'NSW', 'Australia'],
          rows: [
            ['Residents aged 20 to 24', '11.6% (3,606)', '6.1%', '6.2%'],
            ['Flats or apartments among occupied homes', '61.4% (6,467)', '21.7%', '14.2%'],
            ['Train to work on Census day', '13.3% (1,924)', '1.7%', '1.4%'],
            ['Bachelor degree or higher, aged 15 and over', '38.1% (10,337)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'A young suburb', p: 'The median age was 33, and the 20 to 24 age group was almost double its share across the state.' },
            { h3: 'Rail commuters', p: 'Even on a lockdown Census day in August 2021, 1,924 employed residents went to work by train.' },
            { h3: 'Study', p: 'Of residents attending education, 28.4% were at university or other higher education, against 15.3% for NSW.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau adjusts cells slightly to protect privacy, so pieces may not add up exactly. We use its own published totals and never add parts to make one.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Proving a shuffle is unfair by counting every possibility',
      intro: 'Four stations, Hurstville, Penshurst, Mortdale and Oatley, are shuffled two ways. Because the lists are short, the computer can try every possible sequence of random choices and count exactly what comes out.',
      body: [
        {
          kind: 'table',
          caption: 'Every possible run of each shuffle on four stations (our calculation)',
          head: ['Shuffle', 'Equally likely runs', 'Possible orders', 'Runs per order'],
          rows: [
            ['Swap each item with any item', '256', '24', '8 to 15, uneven'],
            ['Fisher-Yates', '24', '24', 'Exactly 1 each']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The naive shuffle\'s favourite and least favourite orders',
          head: ['Order', 'Runs out of 256', 'Chance'],
          rows: [
            ['Penshurst, Hurstville, Oatley, Mortdale', '15', '5.86%'],
            ['A fair shuffle, any order', '10.67 on average', '4.17%'],
            ['Oatley, Hurstville, Penshurst, Mortdale', '8', '3.13%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why 256 cannot be fair',
              p: 'The naive loop makes four choices of four, so 4 x 4 x 4 x 4 = 256 runs. Splitting 256 equally among 24 orders would need 10.67 each, which is impossible with whole runs.'
            },
            { h3: 'Why Fisher-Yates is fair', p: 'It chooses from 4, then 3, then 2, then 1 remaining items: 4 x 3 x 2 x 1 = 24 runs, one for each order.' },
            {
              h3: 'A hidden bias',
              p: 'Hurstville itself lands in each of the four positions exactly 64 times in the naive shuffle, so a quick check of one item looks fine. The bias is in whole orders.'
            }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'One million shuffles of nine Georges River stations: how often each lands first (our simulation, seed 2026)',
          head: ['Station, in its starting position', 'Naive shuffle', 'Fisher-Yates'],
          rows: [
            ['Hurstville (1st)', '111,276', 'about 111,000'],
            ['Penshurst (2nd)', '142,257', 'about 111,000'],
            ['Mortdale (3rd)', '130,680', 'about 111,000'],
            ['Riverwood (9th)', '86,901', 'about 111,000']
          ]
        },
        {
          kind: 'p',
          text: 'With nine stations a fair shuffle puts each one first about 111,111 times in a million. Fisher-Yates stayed between 110,656 and 111,493 for every station. The naive version favoured stations near the start of the list, and Penshurst led by more than 31,000. Every count above is our own calculation; the stations are simply names from Transport for NSW\'s published network.'
        }
      ]
    },
    {
      id: 'python',
      tint: 'tint',
      eyebrow: 'In Python',
      h2: 'Two loops that look identical',
      intro: 'The fair and unfair shuffles differ by one number in one line, which is exactly why this bug survives in real code.',
      body: [
        {
          kind: 'table',
          caption: 'The one-line difference',
          head: ['Version', 'Choice of partner at step i', 'Result'],
          rows: [
            ['Naive', 'Any position from 0 to n minus 1', 'Biased towards some orders'],
            ['Fisher-Yates', 'Only positions from i to n minus 1', 'Every order equally likely'],
            ['Python built-in', 'random.shuffle(stations)', 'Fisher-Yates inside']
          ]
        },
        {
          kind: 'p',
          text: 'Learners write both versions, then write the exhaustive counter that tries every run, and only then compare their result with random.shuffle. The point is not to avoid the built-in; it is to understand it well enough to trust it, and to recognise the naive loop when an AI suggests it.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary children', p: 'Shuffle four name cards with dice in both ways and tally which orders appear over a lesson.' },
            { h3: 'High school', p: 'Write the exact counter with itertools.product, then run a million-shuffle experiment and plot the bias.' },
            { h3: 'Adults', p: 'See why fair shuffling matters in A/B testing, quiz platforms and any system where order should not decide outcomes.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, NSW Spatial Services, Georges River Council, the NSW Department of Education and the statistics bureau provide the open data used here and have no connection with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Hurstville',
      h2: 'Schools from 1876 and a busy interchange',
      intro: 'A few more facts from the state school file and the station counts.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Hurstville Public School', p: 'The NSW Department of Education gives October 1876 as the date of the school\'s first teacher.' },
            { h3: 'Hurstville South', p: 'Hurstville South Public School followed in June 1915, according to the same file.' },
            { h3: 'The station', p: 'Transport for NSW counted 499,555 entries at Hurstville Station in August 2026.' }
          ]
        },
        {
          kind: 'spec',
          title: 'The nine stations',
          p: 'Hurstville, Penshurst, Mortdale, Oatley, Beverly Hills, Allawah, Carlton, Kogarah and Riverwood stations all fall inside the Georges River council area when their mapped positions are tested against the bureau\'s boundaries.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From dice and cards to proofs in Python',
    intro: 'The ages are a guide; the free trial decides the real start.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Coding foundations',
        p: 'Block coding, simple games and chance experiments with dice.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'First Python',
        p: 'Python games where randomness is used and then questioned.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Python with evidence',
        p: 'Full Python with simulation, testing and probability.',
        courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course']
      },
      {
        band: 'University and adult',
        h3: 'Professional Python',
        p: 'Python for work, automation and data, with rigorous testing.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes shuffles in a second. Why should a Hurstville student learn Fisher-Yates?',
    intro: 'Because the unfair shuffle looks correct, passes casual tests, and is exactly the kind of code an AI can produce.',
    p1: 'Ask an assistant for a shuffle and you may get the swap-with-anyone loop. It runs, it mixes the list, and if you only check where one item lands it looks perfect, as Hurstville\'s 64 runs in every position showed. The flaw shows up only when you count whole orders.',
    p2: 'A student who has enumerated the 256 runs knows what to test and how. They replace the loop with random.shuffle, or check the AI\'s version against exact counts, and they apply the same suspicion to any code that claims to be random.',
    closer: 'In 2026 the Hurstville learners who can test randomness will catch the bugs AI tools introduce, and that habit is built by writing and checking code themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online, Hurstville to anywhere',
    intro: 'A Hurstville learner joins from home and spends the full lesson coding, with no travel to a centre.',
    cells: [
      { h3: 'Home setup', p: 'A computer with sound and a steady connection is all a lesson needs.' },
      { h3: 'Follows NSW terms', p: 'Lesson plans line up with NSW stages and break for the state school holidays.' },
      { h3: 'Free trial lesson', p: 'A full class at no cost, ending with a recommended course and time.' },
      { h3: 'Group or private', p: 'Groups of fifteen to twenty at a matched level, or one to one.' },
      { h3: 'Two a week', p: 'Two set lessons weekly, about eight a month, with breaks agreed early.' },
      { h3: 'Teachers in India', p: 'A 4pm Hurstville lesson in summer is 10:30am India time; after daylight saving ends it is 11:30am there.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Sydney moves its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India keeps the same time all year. Lesson times are always given in Sydney time.'
    }
  },
  fees: {
    h2: 'Hurstville class fees',
    intro: 'Three figures make up the full price list.',
    first: 'The first lesson costs nothing and comes with a recommendation.',
    group: 'A month of group lessons, usually eight, with fifteen to twenty learners.',
    private: 'Roughly eight one-to-one lessons each month.',
    closer: 'Outside India we bill in US dollars, so every suburb pays the same. Payment begins only after the trial, once the course and times are chosen; the pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Book a first Hurstville lesson',
    intro: 'Share an age and something the learner enjoys. A Year 5 child might start by making a random number game; a Year 10 student might start by finding the shuffle bug.',
    success: 'Thank you. Our team will contact you soon about a Hurstville lesson.'
  },
  faq: {
    h2: 'Hurstville coding and Python questions',
    intro: 'The questions Hurstville families and adult learners ask us most often.',
    items: [
      { q: 'How many people live in Hurstville?', a: 'The 2021 Census QuickStats for the Hurstville suburb record 31,162 residents, with a median age of 33.' },
      {
        q: 'What is the Fisher-Yates shuffle?',
        a: 'The Fisher-Yates shuffle randomly orders a list by swapping each position with a randomly chosen position that has not yet been fixed. Each of the possible orders comes out with exactly the same probability, and Python\'s random.shuffle works this way.'
      },
      {
        q: 'Why is swapping each item with any item unfair?',
        a: 'With n items it creates n to the power n equally likely runs, which cannot be split evenly among the n factorial possible orders. For four items that is 256 runs over 24 orders, so some orders must come up more often.'
      },
      {
        q: 'What is the Hurstville shuffle project?',
        a: 'Learners shuffle the names of Georges River stations two ways, count every possible run exactly for four stations, and run a million-shuffle experiment for nine. They see the naive method favour stations near the start of the list while Fisher-Yates stays even.'
      },
      {
        q: 'Is this maths or coding?',
        a: 'Both. The project teaches Python loops and lists alongside counting and probability, which is how real programmers check their code.'
      },
      {
        q: 'Can my child start with no experience?',
        a: 'Yes. Beginners from age six start with block coding, and Python comes once they are reading and typing comfortably.'
      },
      { q: 'Do you teach adults?', a: 'Yes. Adults learn Python for work, data and automation, one to one or in adult groups.' },
      {
        q: 'Is there a Hurstville centre?',
        a: 'No. Every lesson is live online and we have no premises in Australia. The phone number on our site is Indian.',
        boiler: true
      },
      {
        q: 'How much do Hurstville Python classes cost?',
        a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one.',
        boiler: true
      },
      {
        q: 'How large are the groups?',
        a: 'Between five and ten learners, matched by level and pace. One-to-one lessons are available if no group suits.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Hurstville learners',
    html: 'The <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-georges-river-sydney">Georges River page</a> covers the whole council area, and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-sutherland-shire-sydney">Sutherland Shire</a> has its own page to the south. For the city see the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a>, and for the state, <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Hurstville and Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-georges-river-sydney', label: 'Georges River' },
    { href: '/ai-and-programming-classes-in-bankstown-sydney', label: 'Bankstown' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-hurv .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-hurv .cg-hero h1 { font-weight: 770; letter-spacing: -0.02em; line-height: 1.09; }
.cg-root.cg-hurv .cg-capsule { border-left: 4px double var(--cg-accent); padding: 0.5rem 0 0.5rem 1.05rem; }
.cg-root.cg-hurv .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-hurv .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.013em; }
.cg-root.cg-hurv .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2rem); }
.cg-root.cg-hurv .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-hurv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hurv .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-hurv .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Hurstville, ABS Census 2021 QuickStats, Hurstville suburb SAL11971 (read 10 October 2026): 31,162 people; median age 33; 8,232 families; 11,976 private dwellings; 2.8 people per household; age 20 to 24 3,606 (11.6 percent; NSW 6.1; Australia 6.2); flat or apartment 6,467 (61.4 percent; NSW 21.7); Train 1,924 (13.3 percent; NSW 1.7); Bachelor Degree level and above 10,337 (38.1 percent; NSW 27.8); Tertiary University or other higher education 2,926 (28.4 percent of those attending education; NSW 15.3). Council: 4,000 random points inside the ABS SAL boundary all fall in Georges River LGA. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Fisher-Yates vs naive shuffle. Exact enumeration on four station names [Hurstville, Penshurst, Mortdale, Oatley]: naive (for i: j = randrange(n); swap) has 256 equally likely runs over 24 orders, run counts per order 8 (2 orders), 9 (4), 10 (7), 11 (7), 14 (3), 15 (1); most common order Penshurst, Hurstville, Oatley, Mortdale 15/256 = 5.86 percent; least Oatley, Hurstville, Penshurst, Mortdale 8/256 = 3.13 percent; Hurstville in each position 64 times. Fisher-Yates (j from i to n-1): 24 runs, one per order. Simulation, 1,000,000 shuffles each, seed 2026, nine stations [Hurstville, Penshurst, Mortdale, Oatley, Beverly Hills, Allawah, Carlton, Kogarah, Riverwood]: naive first-place counts 111276, 142257, 130680, 121101, 112650, 104866, 98454, 91815, 86901; Fisher-Yates first-place counts range 110,656 to 111,493; fair 111,111. Station council areas: NSW Spatial Services NSW_Transport_Theme points tested against ABS LGA 2021 (all nine Georges River). Transport for NSW monthly entries (CC BY) Hurstville Station August 2026: 499,555. First-teacher dates (NSW Department of Education master dataset, Town_suburb Hurstville): Hurstville Public School 1876-10-01; Hurstville South Public School 1915-06-01.',
    requiredMentions: ['31,162', '8,232', '11,976', '1,924', '6,467', '142,257', '86,901', '130,680', 'Hurstville South Public School'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Hurstville (SAL11971).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL11971' },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Spatial Services, NSW Transport Theme feature service (station points).',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Transport_Theme/FeatureServer'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'Python documentation, random.shuffle.', url: 'https://docs.python.org/3/library/random.html#random.shuffle' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That Narwee station is in Georges River: our check placed it in Canterbury-Bankstown, so it was dropped from the station list.',
      'Which lines serve each station: not verified from the files used, so not stated.',
      'Details of the School for Specific Purposes in Hurstville: left out as they concern students\' needs.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, NSW Spatial Services, Georges River Council, the NSW Department of Education or the ABS.'
    ]
  }
};
