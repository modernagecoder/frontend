'use strict';
// Camden, Sydney (cg- district page, Australia cluster Phase 8, row 238). Keyword slug in the rotation
// (ai-and-programming-classes-in-*). Camden here is the ABS suburb and locality (SAL10769, the old town centre),
// not the whole council area, so it does not overlap the Oran Park page. Parents: Australia, NSW, Sydney.
// Spine: ask a search tool for "schools in Camden" over the NSW government school locations file. A keyword
// retriever returns 28 candidates; how does a reranker put the four schools with a Camden address on top?
// Data: NSW Department of Education master dataset (CC BY): names, suburbs, councils, coordinates, first-teacher
// dates only. Our run (scratchpad au/b5/cam_rr.py): substring "camden" in name, suburb or council gives 28
// candidates (24 in Camden council). Truth = address suburb Camden: Camden Public School, Camden South Public
// School, Camden High School, Mount Hunter Public School. Precision at 4: file order 2, alphabetical 1, distance
// from the centre of the ABS boundary 2, field rerank 4, fields then distance 4. False positives: Camdenville
// Public School (Newtown, Inner West, 47.5 km), Camden Haven High School (Laurieton, 329.6 km). Mount Hunter
// Public School: Camden address, Wollondilly council, 5.57 km.
// Lesson family: two-stage retrieval with reranking (changed from k-fold, which AU-B4 claimed); claimed 10 Oct 2026.
// Place facts: ABS Census 2021 QuickStats, Camden (NSW) SAL10769; ABS ASGS 2021 SAL area 4.6376 square km.
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health, journey to work;
// enrolment, ICSEA, Indigenous, LBOTE and selective columns; schools for specific purposes are not named.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CAMDEN',
    label: 'Camden, Sydney',
    blurb: 'AI and programming for Camden, with a search project that reranks 28 "schools in Camden" results so the right four come first.'
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
  slug: 'ai-and-programming-classes-in-camden-sydney',
  code: 'cmdn',
  accent: '#8D5642',
  accentRationale: 'Camden: an old-brick brown (hue 13) for the town centre, chosen by hand at least 10 RGB units from every accent declared in content, the shared stylesheets and the claims log, with strong contrast on white and the paper tints',
  pageType: 'city',
  place: {
    name: 'Camden',
    eyebrow: 'Camden, south-west Sydney',
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
  routeLabel: 'Camden, Sydney',
  title: 'AI and Programming Classes in Camden, Sydney',
  description: 'Live online AI and programming classes for Camden learners aged 6 to 67, with a project that reranks search results for schools in Camden. First lesson free.',
  ogDescription: 'AI and programming for Camden: a keyword search finds 28 "schools in Camden", and a reranker puts the right four first.',
  twitterDescription: 'Camden AI and programming classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Camden',
    description: 'Level-matched online AI and programming lessons for children, teenagers and adults in Camden, Sydney, taught live in English.'
  },
  h1: 'AI and programming classes in Camden',
  capsuleQ: 'What do AI and programming classes look like for Camden learners?',
  capsule: 'Live online lessons in small groups at one level, from Scratch at six to Python, search and machine learning for teenagers and adults. Camden is the old town centre of its council area, about 4.64 square kilometres; the 2021 Census counted 3,378 residents there, median age 43.',
  lead: 'Type "schools in Camden" into a search box built on the state\'s school list and a simple keyword match brings back 28 schools. Most are in Camden council but not in Camden itself, one is in Newtown and one is near Port Macquarie. Only four give Camden as their address suburb. This is the problem every AI search tool faces before it answers: finding plenty of candidates is easy, putting the right ones first is the real work, and that second step is called reranking.',
  wa: 'Hello Modern Age Coders, we would like a free AI or programming lesson for a learner in Camden.',
  picks: {
    eyebrow: 'Course picks for Camden',
    h2: 'Courses that teach search, ranking and models',
    intro: 'Each course works up to programs that sort, score and check results. The first lesson is free and decides the level, with no card details asked for.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Sorting, rules and checking answers, before any AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 17', note: 'Python with real files, sorting keys and scoring functions.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning and retrieval, measured with precision and recall.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Search, ranking and evaluation on public datasets.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Camden in the Census',
      h2: 'The old town at the centre of the council area',
      intro: 'Census 2021 numbers for the suburb of Camden only, set next to the state and national figures.',
      body: [
        {
          kind: 'table',
          caption: 'Camden suburb, 2021 Census',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '3,378'],
            ['Median age', '43'],
            ['Families', '846'],
            ['Private dwellings', '1,434'],
            ['Average people per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Camden against the state and the nation',
          head: ['Indicator', 'Camden', 'NSW', 'Australia'],
          rows: [
            ['Separate houses among occupied homes', '73.8% (947)', '65.6%', '72.3%'],
            ['Townhouses, terraces and semis', '17.2% (221)', '11.7%', '12.6%'],
            ['Flats or apartments', '8.4% (108)', '21.7%', '14.2%'],
            ['Residents aged 65 to 69', '5.4% (182)', '5.2%', '5.1%'],
            ['Technicians and trades workers', '15.9% (241)', '11.9%', '12.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'An older suburb', p: 'A median age of 43 sits well above Oran Park to the north, where the 2021 median was 30.' },
            { h3: 'Small and central', p: 'About 4.64 square kilometres, with 1,434 private dwellings and 2.4 people in an average household.' },
            { h3: 'Trades', p: 'Technicians and trades workers made up 15.9% of employed residents, against 11.9% across the state.' }
          ]
        },
        {
          kind: 'p',
          text: 'These are figures for the suburb, not for Camden council as a whole. The bureau adjusts small counts for privacy, so we never add published parts together to build a total of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Reranking 28 answers to "schools in Camden"',
      intro: 'Stage one is a cheap retriever: keep every school whose name, suburb or council contains "camden". Stage two reranks those candidates and is judged on one number: how many of the top four have a Camden address.',
      body: [
        {
          kind: 'table',
          caption: 'Five ways to order the 28 candidates (our Python run on the NSW school list)',
          head: ['Order', 'Rule', 'Camden addresses in top 4'],
          rows: [
            ['File order', 'As the rows appear in the dataset', '2 of 4'],
            ['Alphabetical', 'By school name', '1 of 4'],
            ['Distance', 'Nearest to the centre of the bureau\'s Camden boundary', '2 of 4'],
            ['Field scores', 'Address suburb 3 points, name starts with Camden 2, council 1', '4 of 4'],
            ['Fields, then distance', 'Field score first, distance breaks ties', '4 of 4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The awkward candidates',
          head: ['School', 'Why it matched', 'Distance from Camden'],
          rows: [
            ['Camdenville Public School', 'Name contains "camden"; address Newtown, Inner West council', '47.5 kilometres'],
            [
              'Camden Haven High School',
              'Name contains "camden"; address Laurieton, Port Macquarie-Hastings council',
              '329.6 kilometres'
            ],
            ['Mount Hunter Public School', 'Address suburb Camden, but Wollondilly council', '5.57 kilometres'],
            ['Camden High School', 'Address suburb Camden, Camden council', '2.88 kilometres']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Distance is not enough',
              p: 'Ordered by distance alone, schools in Elderslie, Narellan and Spring Farm come before Camden High School, which is only seventh. Being near is not the same as being in.'
            },
            {
              h3: 'Substrings mislead',
              p: 'A match on "camden" inside Camdenville or Camden Haven looks perfect to a keyword search. The reranker has to read the address field, not the name.'
            },
            {
              h3: 'Definitions matter',
              p: 'Mount Hunter Public School gives Camden as its address suburb yet sits in Wollondilly council. Whether it counts depends on the question, and the program has to say which.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The same two stages inside AI search',
          p: 'Tools that let a chatbot answer from documents fetch many passages quickly, then rerank them with a slower, more careful scorer before the model reads the top few. In this project the careful scorer is a function a teenager can write: <code>sorted(rows, key=lambda r: (-field_score(r), r[\'km\']))</code>.'
        },
        {
          kind: 'p',
          text: 'School names, suburbs, councils and coordinates come from the NSW Department of Education\'s school locations file; the distances, scores and rankings are our own calculation.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Measuring a ranking',
      h2: 'How learners score their search',
      intro: 'A ranking is only as good as the measure used to judge it, so the project ends with evaluation.',
      body: [
        {
          kind: 'table',
          caption: 'Evaluation steps',
          head: ['Step', 'What the learner writes', 'Camden result'],
          rows: [
            ['Fix the truth', 'A list of the right answers, decided before ranking', 'Four schools with a Camden address'],
            ['Precision at 4', 'Right answers in the top four, divided by four', 'Field scores reach 4 of 4'],
            ['Precision at 8', 'The same over the top eight', 'Distance and alphabetical both reach 3'],
            [
              'Error review',
              'Read every wrong result and name why it ranked high',
              'Camdenville and Camden Haven fall to the bottom'
            ]
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Sort a deck of cards three different ways and decide which order puts the right cards on top.' },
            { h3: 'Teenagers', p: 'Write the field scorer, measure precision and explain each mistake in a sentence.' },
            { h3: 'Adults', p: 'Apply the same two stages to documents at work and judge a chatbot\'s retrieval rather than trusting it.' }
          ]
        },
        { kind: 'p', text: 'The NSW Department of Education publishes the school locations file and is not connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and the school year',
      h2: 'Four schools with a Camden address',
      intro: 'The state school list gives the year each school had its first teacher. Camden Public School\'s date, 1849, is the earliest of all 28 candidates in the search project.',
      body: [
        {
          kind: 'table',
          caption: 'State schools whose listed suburb is Camden',
          head: ['School', 'Level', 'First teacher', 'Council'],
          rows: [
            ['Camden Public School', 'Primary', '1849', 'Camden'],
            ['Mount Hunter Public School', 'Primary', '1859', 'Wollondilly'],
            ['Camden South Public School', 'Primary', '1961', 'Camden'],
            ['Camden High School', 'Secondary', '1961', 'Camden']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Autumn break 2027', p: 'Camden schools, in the Eastern division, break from Monday 12 April to Friday 23 April 2027.' },
            { h3: 'Term 2 2027', p: 'Students return on Thursday 29 April and the term ends on Friday 2 July.' },
            { h3: 'Holiday weeks', p: 'Our Camden groups stop for the NSW holidays too, and pick up again on the usual day once school is back.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting cards to reranking search',
    intro: 'The ages are approximate. The free trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and order',
        p: 'Games that sort, count and keep score.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 13',
        h3: 'First Python',
        p: 'Lists, sorting and simple scoring rules.',
        courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 13 to 18',
        h3: 'Search and models',
        p: 'Retrieval, ranking and measured machine learning.',
        courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Evaluation at work',
        p: 'Judging search and AI tools with numbers, not impressions.',
        courses: ['data-science-complete-masterclass-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why reranking matters when a chatbot answers',
    intro: 'A chatbot that searches first can only be as right as the passages it reads.',
    p1: 'If the search step ranks Camdenville or Camden Haven near the top, the model will happily describe a Newtown or Laurieton school as being in Camden, fluently and with no warning. The mistake happens before the AI writes a word.',
    p2: 'Learners who have built a reranker know to ask what was retrieved, how it was ordered and how the ordering was measured. Those are the questions that catch the error.',
    closer: 'In 2026 every Camden learner will use AI search; the ones who can build and measure a small one will know when to trust it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Camden learners at home',
    intro: 'Everything happens on live video, so there is no travel into or out of Camden.',
    cells: [
      { h3: 'Watched as it is written', p: 'Every program is typed during the class with the teacher following the learner\'s screen.' },
      { h3: 'Speaking the NSW language', p: 'Teachers refer to Stages and Years the way Camden schools do, so progress is easy to place.' },
      { h3: 'A first lesson on us', p: 'The opening class costs nothing; afterwards the teacher proposes where to start and when.' },
      { h3: 'Matched classmates', p: 'A group holds fifteen to twenty people working at the same stage; one-to-one is there for anyone who wants it.' },
      { h3: 'Same slot each week', p: 'Classes run twice weekly, close to eight in a month, and any gaps are announced well in advance.' },
      { h3: 'Teachers in India', p: 'A 5pm Camden lesson is 11:30am India time under Sydney summer time and 12:30pm outside it.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Sydney is on daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027, and India does not change its clocks, so the difference shifts between 5 hours 30 minutes and 4 hours 30 minutes. Lesson times are always set in Sydney time.'
    }
  },
  fees: {
    h2: 'Camden lesson fees',
    intro: 'One price list covers every subject, from Scratch to machine learning.',
    first: 'The first lesson is free and ends with a recommended course and timetable.',
    group: 'Two lessons a week, around eight a month, in a group of fifteen to twenty learners at one level.',
    private: 'One-to-one teaching on the same schedule, roughly eight lessons a month.',
    closer: 'Fees for Camden are charged in US dollars, and no money changes hands until after the trial, when you have chosen the course and the slot. Rules on holidays, missed classes and switching between group and one-to-one sit on the pricing page.'
  },
  reviewsH2: 'What parents and learners say on Google',
  book: {
    h2: 'Tell us who is learning and what they like',
    intro: 'An age and an interest are enough for the teacher to prepare. A six-year-old might build a Scratch game that keeps score; a teenager or adult might rank search results for Camden and measure how good the ranking is.',
    success: 'Thank you. We will be in touch soon about a Camden class.'
  },
  faq: {
    h2: 'Camden AI and programming questions',
    intro: 'The questions Camden families ask most often.',
    items: [
      {
        q: 'How many people live in Camden?',
        a: 'The 2021 Census QuickStats for the Camden suburb and locality counted 3,378 residents, median age 43, in 846 families and 1,434 private dwellings. The council area is much larger.'
      },
      {
        q: 'What is reranking in AI search?',
        a: 'It is the second stage of a search: a quick retriever gathers many possible results, then a more careful scorer reorders them so the most relevant come first, before a person or a chatbot reads them.'
      },
      {
        q: 'What does the Camden project measure?',
        a: 'How many of the top four results for "schools in Camden" really have a Camden address. File order and distance manage 2 of 4; scoring the address, name and council fields reaches 4 of 4.'
      },
      {
        q: 'Why did Camdenville Public School match?',
        a: 'Its name contains the letters "camden", so a keyword search finds it, but its address is Newtown in the Inner West, about 47.5 kilometres away. A good reranker pushes it to the bottom.'
      },
      {
        q: 'Which schools have a Camden address?',
        a: 'The NSW Department of Education lists Camden Public School, Camden South Public School, Camden High School and Mount Hunter Public School; Mount Hunter sits in Wollondilly council.'
      },
      {
        q: 'What age can my child start?',
        a: 'Scratch suits children from six. Projects like this one, with sorting keys and scoring functions, usually start around 13.'
      },
      {
        q: 'What equipment is needed at home?',
        a: 'Any computer with a keyboard that can run a browser, a headset or speakers with a mic, and steady broadband. Phones and tablets make typing code slow.'
      },
      {
        q: 'Do you run classes in Camden itself?',
        a: 'No. We teach only online and have no premises anywhere in Australia, including Camden. Our contact phone number is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do Camden lessons cost?',
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
    h2: 'More for Camden learners',
    html: 'The newer suburb to the north has its own guide at <a class="cg-inline-link" href="/online-coding-and-python-classes-in-oran-park-sydney">online coding and Python classes in Oran Park</a>, and the neighbouring council area at <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-campbelltown-nsw">vibe coding and AI agents classes in Campbelltown</a>. For the whole city see <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>, and for thinking skills alongside AI tools read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>.',
    waLabel: 'Send a WhatsApp'
  },
  footerHeading: 'Camden and the Macarthur area',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/online-coding-and-python-classes-in-oran-park-sydney', label: 'Oran Park' },
    { href: '/vibe-coding-and-ai-agents-classes-in-campbelltown-nsw', label: 'Campbelltown' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-cmdn .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 2.6vw, 2.3rem); }
.cg-root.cg-cmdn .cg-hero h1 { font-weight: 650; letter-spacing: -0.012em; line-height: 1.14; }
.cg-root.cg-cmdn .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-cmdn .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-cmdn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.008em; }
.cg-root.cg-cmdn .cg-grid-3 { gap: clamp(1rem, 2.1vw, 1.6rem); }
.cg-root.cg-cmdn .cg-table caption { font-weight: 650; text-align: left; padding-bottom: 0.5rem; }
.cg-root.cg-cmdn .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-cmdn .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-cmdn .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Camden, ABS Census 2021 QuickStats, Camden (NSW) suburb and locality SAL10769 (read 10 October 2026): 3,378 people; median age 43; 846 families; 1,434 private dwellings; average 2.4 people per household; separate houses 73.8% (947), townhouses etc 17.2% (221), flats 8.4% (108); aged 65 to 69 5.4% (182); technicians and trades workers 15.9% (241). ABS ASGS 2021 SAL area 4.6376 square kilometres. NSW Department of Education master dataset: Camden Public School (1849), Mount Hunter Public School (1859, Wollondilly council), Camden South Public School (1961), Camden High School (1961), address suburb Camden. NSW 2027 Eastern division: autumn holidays Monday 12 April to Friday 23 April; Term 2 Thursday 29 April to Friday 2 July.',
    localProject: 'Two-stage retrieval with reranking for "schools in Camden" over the NSW school locations file: substring retriever gives 28 candidates (24 in Camden council); truth = address suburb Camden (4 schools). Precision at 4 (ours): file order 2, alphabetical 1, distance from the ABS boundary centre 2, field scores 4, fields then distance 4; precision at 8: distance 3, alphabetical 3. Camdenville Public School 47.5 km (Newtown), Camden Haven High School 329.6 km (Laurieton), Mount Hunter Public School 5.57 km, Camden High School 2.88 km and seventh by distance.',
    requiredMentions: [
      'Camden South Public School',
      'Mount Hunter Public School',
      'Camdenville Public School',
      'Camden Haven High School',
      '329.6 kilometres',
      '47.5 kilometres',
      '5.57 kilometres',
      '4.64 square kilometres',
      '2.88 kilometres'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Camden (NSW) suburb and locality (SAL10769): people, median age, families, dwellings, dwelling structure, age, occupation.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10769'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations (Creative Commons Attribution); names, suburbs, councils, coordinates and first-teacher dates only.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) suburbs and localities: Camden boundary and area.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'Python documentation, Sorting techniques: key functions and tuples as sort keys.', url: 'https://docs.python.org/3/howto/sorting.html' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'Camden Council, the local government area named in the school dataset.', url: 'https://www.camden.nsw.gov.au/' }
    ],
    rejectedClaims: [
      'Figures for Camden council as a whole: this page is the suburb, so it does not overlap the Oran Park page.',
      'That Camden Public School is the oldest school in the region: only the 28 search candidates were compared, so the page says earliest of the 28.',
      'Naming a school for specific purposes that appeared among the candidates: left unnamed.',
      'Journey to work and working at home figures from the 2021 Census: excluded because the Census was taken during a lockdown period.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language, religion and one-parent family figures: excluded by the cluster rules.',
      'Any affiliation with the ABS, Camden Council or the NSW Department of Education.'
    ]
  }
};
