'use strict';
// Browns Plains, Brisbane (cg- district page, Australia cluster Phase 8, row 298). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL30395, Browns Plains (Qld)) in the City of Logan, Greater
// Brisbane, under Brisbane and Queensland. Logan figures from best-coding-classes-in-logan are deliberately not used.
// Spine: feature hashing. The 24 Translink stop records inside the suburb and the 16 routes serving them on
// Wednesday 21 October 2026 (40 categorical features) are hashed with 32-bit MurmurHash3 (seed 0) into 2^k buckets;
// collisions measured against the birthday expectation. Network check: 13,124 stop records, MurmurHash3 vs CRC32.
// Lesson family: feature hashing (hashing trick); claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BROWNS PLAINS',
    label: 'Browns Plains, Logan',
    blurb: 'AI and programming classes for Browns Plains, where 40 bus stop and route codes are squeezed into a fixed number of slots and the collisions are counted.'
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
  slug: 'ai-and-programming-classes-in-browns-plains-brisbane',
  code: 'brpl',
  accent: '#455C0E',
  accentRationale: 'Browns Plains: a dark olive (hue 77.7), 6.11:1 on #EDE7DA; 30.1 RGB from the nearest Queensland accent, 12.8 from any other Australian accent and 7.8 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Browns Plains',
    eyebrow: 'Browns Plains, City of Logan, Greater Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Browns Plains' },
      { type: 'AdministrativeArea', name: 'City of Logan' },
      { type: 'City', name: 'Brisbane' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-brisbane', name: 'Brisbane' }
  ],
  nav: [
    { label: 'Brisbane', href: '/best-coding-classes-in-brisbane' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Browns Plains, Logan',
  title: 'AI and Programming Classes in Browns Plains, Brisbane',
  description: 'Live online AI and programming classes for Browns Plains children, teens and adults, with machine learning built on real Translink data, in groups or one to one.',
  ogDescription: 'Browns Plains AI project: 24 stop records and 16 routes hashed into 64 slots, 14 collisions, and how many slots it takes before they disappear.',
  twitterDescription: 'AI and programming for Browns Plains learners, live online.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Browns Plains',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in Browns Plains, City of Logan, taught live in English.'
  },
  h1: 'AI and programming classes in Browns Plains',
  capsuleQ: 'What can Browns Plains learners build in AI and programming classes?',
  capsule: 'Working machine learning projects, along with the judgement to see what a shortcut such as feature hashing costs. Children start with Scratch at six; teenagers and adults build models in Python. Browns Plains, a suburb in the City of Logan, counted 6,632 people at the 2021 Census.',
  lead: 'A model cannot read the words "Browns Plains station, stop 1A". It needs numbers. One fast trick, feature hashing, turns any code into a slot number with no lookup table at all. The price is that two codes can land in the same slot. Using the stop and route codes of Browns Plains, we counted exactly how often.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Browns Plains.',
  picks: {
    eyebrow: 'Course picks for Browns Plains',
    h2: 'Courses that explain what models eat',
    intro: 'The hashing project needs Python, a little probability and machine learning basics. These courses teach them; the free trial finds the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning by hand, including how text and codes become numbers.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Feature engineering, model training and honest evaluation.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python dictionaries, hashing and data files from the ground up.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Beginner Python and AI projects with results children can check.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Browns Plains in the Census',
      h2: 'A Logan suburb of drivers and young families',
      intro: 'Figures from the 2021 Census QuickStats for the suburb of Browns Plains (ABS code SAL30395), which sits within the City of Logan in Greater Brisbane, with Queensland alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Browns Plains basics, 2021',
          head: ['Measure', 'Browns Plains'],
          rows: [
            ['Residents', '6,632'],
            ['Median age', '34'],
            ['Families', '1,660'],
            ['Private dwellings', '2,501'],
            ['People per household', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Browns Plains measured against Queensland',
          head: ['Indicator', 'Browns Plains', 'Queensland'],
          rows: [
            ['Workers who drove to work', '68.9% (1,823)', '59.5%'],
            ['Separate houses', '78.0% (1,691)', '74.8%'],
            ['Semi-detached, row or townhouse homes', '18.1% (392)', '11.7%'],
            ['Workers using a bus to get to work', '2.4% (63)', '1.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young residents', p: 'Children under five numbered 475, those aged 5 to 9 numbered 475 and those aged 10 to 14 numbered 513.' },
            { h3: 'Median age 34', p: 'Half of all Browns Plains residents were 34 or younger at the Census, across 1,660 families.' },
            { h3: 'Size', p: 'The ABS suburb boundary covers about 5.1 square kilometres.' }
          ]
        },
        {
          kind: 'p',
          text: 'These are suburb figures for Browns Plains only, not for the City of Logan. Census cells carry tiny privacy adjustments, so we quote them as published and add none of them together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Forty codes, a fixed number of slots',
      intro: 'Our features: the 24 Translink stop records inside Browns Plains by our boundary check, plus the 16 route numbers that served them on Wednesday 21 October 2026. Each code was hashed with 32-bit MurmurHash3 (seed 0) and the result taken modulo the number of buckets.',
      body: [
        {
          kind: 'table',
          caption: 'Collisions among the 40 features (our calculation)',
          head: ['Buckets', 'Collisions measured', 'Expected for a random hash'],
          rows: [
            ['32', '21', '17.0'],
            ['64', '14', '10.1'],
            ['128', '6', '5.5'],
            ['256', '3', '2.9'],
            ['1,024', '2', '0.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Some of the 64-bucket collisions (our calculation)',
          head: ['Bucket shared by', 'Effect on a model'],
          rows: [
            ['Grand Plaza Shopping Centre stop, route 540 and route 560', 'Three features read as one'],
            ['Routes 142, 545, 547 and 588', 'Four routes become indistinguishable'],
            ['Two Browns Plains Rd stop records at Oakdale Park and Campden Street', 'Two places merged']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why collide at all?',
              p: 'Forty codes into 64 slots is the birthday problem: with that many items, shared slots are almost certain. Even 1,024 slots still produced 2 collisions here.'
            },
            {
              h3: 'Why accept it?',
              p: 'Hashing needs no vocabulary. A brand-new stop code gets a slot instantly, without rebuilding a table, which matters when data keeps changing.'
            },
            {
              h3: 'Measured against theory',
              p: 'Our counts run above the average at small sizes. In 20,000 simulated random hashings, 21 or more collisions in 32 buckets came up about 3% of the time: unlucky, not impossible, with only 40 codes.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A hash that is too tidy',
          p: 'We repeated the test on all 13,124 stop records in the network, using 65,536 buckets. MurmurHash3 gave 1,260 collisions against an expected 1,230.5. CRC32, a checksum often used as a quick hash, gave only 636. That looks better, but it means CRC32 is not behaving like a random function on these numbered IDs: its result depends on their pattern, which is why libraries choose a well-mixed hash instead.'
        },
        {
          kind: 'p',
          text: 'Stop records and routes come from the Translink timetable feed; membership of Browns Plains is our point-in-boundary check, and the general Browns Plains station stop record counts as one of the 24 alongside its lettered stops. Hashing, bucket counts, the birthday expectations and the network comparison are our calculation, using the murmurhash3_32 function in scikit-learn.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Machine learning features',
      h2: 'One-hot or hashed?',
      intro: 'Both turn categories into numbers. The choice is a trade between exactness and convenience, and the Browns Plains numbers show where the line falls.',
      body: [
        {
          kind: 'table',
          caption: 'Two ways to encode stop and route codes',
          head: ['Question', 'One-hot with a vocabulary', 'Feature hashing'],
          rows: [
            ['Columns needed', 'One per code: 40 here', 'Chosen in advance, such as 1,024'],
            ['New code arrives', 'Vocabulary must be rebuilt', 'Hashed straight to a slot'],
            ['Collisions', 'None', '2 at 1,024 slots, 14 at 64'],
            ['Can you name a column?', 'Yes', 'Not without the original codes']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Sort coloured cards into a few boxes by a rule, and count how often two different cards share a box.' },
            { h3: 'Secondary learners', p: 'Hash the Browns Plains codes, plot collisions against bucket counts, and compare with the birthday formula.' },
            { h3: 'Adults', p: 'Weigh hashing for high-volume IDs in work datasets, knowing what each collision costs a model.' }
          ]
        },
        {
          kind: 'p',
          text: 'The expected number of collisions for n items in m buckets is n minus m times (1 minus (1 minus 1/m) to the power n). For 40 items and 64 buckets that gives 10.1, a figure learners can derive and then test against a real run.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Browns Plains',
      h2: 'A bus station beside a shopping centre',
      intro: 'Local markers from the Translink timetable and the Queensland school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Wednesday service',
              p: 'Our count for Wednesday 21 October 2026: 1,838 scheduled bus visits across the 24 stop records, on 16 routes. The suburb has no train.'
            },
            {
              h3: 'Busiest stop',
              p: 'Grand Plaza Shopping Centre (Sth Car Park) led with 340 visits, followed by Browns Plains station, stop 1A, with 195. The first departure was at 4:43am.'
            },
            { h3: 'Term 4, 2027', p: 'Queensland state school Term 4 of 2027 starts on Tuesday 5 October.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Browns Plains, in Logan',
          p: 'Browns Plains belongs to the City of Logan, not Brisbane City Council, though it sits within Greater Brisbane. Every figure here is for the suburb alone; for the city as a whole, see our Logan page linked below.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting cards to engineering features',
    intro: 'Ages are approximate; the trial lesson settles the starting rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games and puzzles about rules, boxes and patterns.',
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
        p: 'Encoding, training and checking models in Python.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied machine learning',
        p: 'Feature engineering and models for study or work.',
        courses: ['ai-ml-masterclass-complete-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI picks the encoding. Who counts the collisions?',
    intro: 'Someone who understands what hashing throws away. AI tools reach for it readily because it is short to write.',
    p1: 'Ask an assistant to prepare stop codes for a model and it may suggest a hasher with a small, tidy number of columns. The code runs, the model trains, and nothing reports that routes 142, 545, 547 and 588 now look identical to it at 64 buckets.',
    p2: 'Learners who have counted collisions on Browns Plains codes ask how many buckets were used and why. They know the birthday formula and they know when to prefer an exact vocabulary. That judgement is what turns AI suggestions into sound models.',
    closer: 'In Browns Plains, the learner who counts the collisions builds models worth trusting.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Browns Plains lessons happen',
    intro: 'Lessons are live on video, so learners join from home anywhere in the suburb.',
    cells: [
      { h3: 'Code side by side', p: 'The learner runs the code; the teacher reads the output with them and questions it.' },
      { h3: 'Queensland calendar', p: 'Plans match state school terms, with holidays left free.' },
      { h3: 'Trial first', p: 'A full free lesson, finished with a frank recommendation.' },
      { h3: 'Five to ten learners', p: 'Groups formed by level and pace, or private lessons instead.' },
      { h3: 'Two lessons each week', p: 'Fixed weekly times, around eight lessons a month.' },
      { h3: 'India time', p: 'With our teachers in India, a 6:30pm Browns Plains lesson starts at 2pm India time, all year.' }
    ],
    spec: {
      title: 'A clock that holds still',
      p: 'Logan, like the rest of Queensland, has had no daylight saving since March 1992 (IANA time zone database), and India has none, so lesson times stay fixed.'
    }
  },
  fees: {
    h2: 'Browns Plains class fees',
    intro: 'A single list of three prices.',
    first: 'Lesson one is free, with a written next step at the end.',
    group: 'Group lessons: about eight a month with five to ten learners of matching level.',
    private: 'Private lessons: about eight a month with one teacher.',
    closer: 'Families in Browns Plains pay in US dollars after the trial, when a course and time have been agreed. The pricing page covers holidays, absences and format changes.'
  },
  reviewsH2: 'What parents and learners say on Google',
  book: {
    h2: 'Book a free Browns Plains lesson',
    intro: 'Say how old the learner is and what they enjoy. Older students could open by hashing the local stop codes themselves, while younger ones could begin with a Scratch sorting game.',
    success: 'Thank you. We will be in touch soon about a Browns Plains lesson.'
  },
  faq: {
    h2: 'Browns Plains AI and programming questions',
    intro: 'Questions Browns Plains parents and adult learners ask.',
    items: [
      {
        q: 'How many people live in Browns Plains?',
        a: 'The 2021 Census QuickStats count 6,632 residents in the suburb of Browns Plains, in the City of Logan, with a median age of 34 and 2,501 private dwellings.'
      },
      {
        q: 'What is feature hashing?',
        a: 'A way to turn categories such as codes or words into a fixed number of numeric columns by hashing each one to a column index. It needs no stored vocabulary, but different categories can collide in the same column.'
      },
      {
        q: 'What is a hash collision?',
        a: 'Two different inputs that a hash function sends to the same slot. With more items or fewer slots, collisions become more likely, as the birthday problem predicts.'
      },
      {
        q: 'What did the Browns Plains hashing test find?',
        a: 'Hashing 40 stop and route codes with MurmurHash3 gave 14 collisions in 64 buckets and 2 in 1,024, somewhat more than the 10.1 and 0.8 a perfectly random hash would average.'
      },
      {
        q: 'Is AI suitable for primary-school children?',
        a: 'Yes, in a playful form. Six-year-olds explore patterns and simple AI games in Scratch, and building real models in Python tends to come at about thirteen.'
      },
      {
        q: 'Can teenagers enrol in Claude-based courses?',
        a: 'No. Anything built on Claude is reserved for adults aged 18 or older; under-18s learn with different AI tools.'
      },
      {
        q: 'Is there a classroom in Browns Plains?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Browns Plains learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do group classes cover Copilot Studio?', a: 'No. Copilot Studio is offered only in one-to-one lessons; group learners create agents in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Logan, Brisbane and Queensland',
    h2: 'More for Browns Plains learners',
    html: 'Browns Plains is in the City of Logan, covered by <a class="cg-inline-link" href="/best-coding-classes-in-logan">our Logan page</a>. Across Greater Brisbane, see <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane guide</a> and <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for Brisbane children</a>, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">the Queensland guide</a> for the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Browns Plains and Logan',
  footerPlaces: [
    { href: '/best-coding-classes-in-logan', label: 'Logan' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' }
  ],
  personalityCss: `
.cg-root.cg-brpl .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.95vw, 2.45rem); }
.cg-root.cg-brpl .cg-hero h1 { font-weight: 645; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-brpl .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.68rem 0 0.68rem 1.15rem; }
.cg-root.cg-brpl .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; }
.cg-root.cg-brpl .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.016em; }
.cg-root.cg-brpl .cg-grid-3 { gap: clamp(0.78rem, 2.1vw, 1.62rem); }
.cg-root.cg-brpl .cg-table caption { font-weight: 670; text-align: left; }
.cg-root.cg-brpl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-brpl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-brpl .cg-callout { border-left-width: 7px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Browns Plains (SAL30395, Browns Plains (Qld)), suburb in the City of Logan, Greater Brisbane. ABS Census 2021 QuickStats (read 12 October 2026): 6,632 people; median age 34; 1,660 families; 2,501 private dwellings; 2.7 per household; drove 1,823 (68.9%, Qld 59.5%); separate houses 1,691 (78.0%, Qld 74.8%); semi-detached 392 (18.1%, Qld 11.7%); bus 63 (2.4%, Qld 1.7%); aged 0-4 475; 5-9 475; 10-14 513. ABS SAL area 5.1167 sq km. Translink GTFS Wednesday 21 October 2026: 24 stop records with service inside the SAL polygon (our check, incl. stop record 13175 Browns Plains station (location_type 0, parent place_broplp)); 1838 scheduled bus visits; 16 routes (140, 141, 142, 150, 153, 534, 535, 540, 541, 542, 543, 545, 547, 550, 560, 588); no rail; busiest Grand Plaza Shopping Centre (Sth Car Park) 340, Browns Plains station stop 1A 195; first departure 04:43. Qld 2027 Term 4 starts Tuesday 5 October. Brisbane/Logan no daylight saving since March 1992 (IANA). No BCC datasets used (Logan is outside Brisbane City Council). Logan city figures from best-coding-classes-in-logan not used.',
    localProject: 'Feature hashing. Features: "stop=" + 24 stop_ids inside SAL30395 and "route=" + 16 route_short_names active at those stops on Wed 21 Oct 2026 (40). sklearn.utils.murmurhash3_32(s, seed=0, positive=True) mod m. Collisions = n - occupied buckets. m=32: 21 (expected 17.0); 64: 14 (10.1); 128: 6 (5.5); 256: 3 (2.9); 1,024: 2 (0.8). Expected = n - m(1 - (1 - 1/m)^n). 64-bucket groups include [stop 13057 Grand Plaza, route 540, route 560], [route 142, 545, 547, 588], [310256 Forestglen Park, 310258 Oakdale Park], [310254 Campden Street, 310259 Oakdale Park]. Random-hash simulation (20,000 trials, n=40): P(>=21 at m=32) about 2.6%, P(>=14 at m=64) about 5.4%. Network 13,124 stop records, m=65,536: murmur3 1,260, md5 1,254, crc32 636, expected 1,230.5.',
    requiredMentions: [
      '2,501',
      '1,823',
      'Grand Plaza Shopping Centre',
      'feature hashing',
      'MurmurHash3',
      '13,124',
      '1,230.5',
      'Routes 142, 545, 547 and 588',
      'City of Logan'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Browns Plains (Qld) suburb and locality (SAL30395), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL30395'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities boundary service, used for our point-in-boundary checks and suburb areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Kilian Weinberger and others (2009), Feature Hashing for Large Scale Multitask Learning, arXiv 0902.2206.',
        url: 'https://arxiv.org/abs/0902.2206'
      },
      {
        claim: 'scikit-learn documentation, sklearn.feature_extraction.FeatureHasher, which hashes features with the signed 32-bit version of MurmurHash3.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.FeatureHasher.html'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland state school term dates.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Figures for the City of Logan as a whole: not used; suburb figures only, and the Logan page figures are kept off this page.',
      'That Browns Plains is in Brisbane City Council: rejected; it is in the City of Logan, within Greater Brisbane.',
      'That CRC32 is better for hashing because it collided less: rejected; it is not behaving like a random hash on structured IDs.',
      'Passenger numbers at Browns Plains stops: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Logan City Council or Translink.'
    ]
  }
};
