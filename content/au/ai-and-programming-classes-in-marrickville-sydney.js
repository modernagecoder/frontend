'use strict';
// Marrickville, Sydney (cg- district page, Australia cluster Phase 8, row 234). Keyword slug in the rotation
// (ai-and-programming-classes-in-*), suburb page (ABS SAL12514, inside the Inner West council) under Sydney and NSW.
// Spine: a nearest-neighbour search on eight Census 2021 measures names Dulwich Hill as the suburb most like
// Marrickville. Why? Remove one measure at a time and rerun: Dulwich Hill stays first and Petersham second in all
// eight runs, so no single measure decides the match; people per household moves the distance most (0.83 to 0.69).
// Data: ABS QuickStats for Marrickville (SAL12514) and ten nearby suburbs (SAL codes from ABS ASGS), each measure
// rescaled across the 11 suburbs. Script scratchpad au/b4/mkvl_nn.py and mkvl2.py.
// Family change (AU-B4 claims log): cyclical month encoding dropped because the station usage file has almost no
// Marrickville station figures for these months.
// Lesson family: leave-one-feature-out explanation of a nearest-neighbour match; 0 location-page hits, unclaimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MARRICKVILLE',
    label: 'Marrickville, Sydney',
    blurb: 'AI and programming for Marrickville, with a project that explains why a model calls Dulwich Hill its closest match.'
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
  slug: 'ai-and-programming-classes-in-marrickville-sydney',
  code: 'mkvl',
  accent: '#16347A',
  accentRationale: 'Marrickville: a deep cobalt (hue 222), chosen by hand at least 10 RGB units from all 1,272 accents in content, the shared stylesheets and the claims log, 11.7:1 on white and 9.6:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Marrickville',
    eyebrow: 'Marrickville, Inner West, Sydney, New South Wales',
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
  routeLabel: 'Marrickville, Sydney',
  title: 'AI and Programming Classes in Marrickville, Sydney',
  description: 'Live online AI and programming classes for Marrickville children, teenagers and adults: Scratch, Python and machine learning with a real teacher, in small groups.',
  ogDescription: 'Marrickville AI classes, with a project that asks a model which suburb is most like Marrickville, then takes away one measure at a time to see why.',
  twitterDescription: 'Marrickville AI and programming classes, live online with a teacher, first class free.',
  ogImageCourse: 'artificial-intelligence-complete-masterclass-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Marrickville',
    description: 'Level-matched online AI, machine learning and programming lessons for children, teenagers and adults in Marrickville, taught live in English.'
  },
  h1: 'AI and programming classes in Marrickville',
  capsuleQ: 'Where can Marrickville learners find the best online AI and programming classes?',
  capsule: 'In live online classes where a teacher builds models with the learners and makes them explain every answer, starting with Scratch for young children and moving to Python and machine learning. The 2021 Census counted 26,570 residents in the suburb of Marrickville, and 9,917 adults, 43.1%, held a bachelor degree or higher.',
  lead: 'Ask a simple model which nearby suburb is most like Marrickville and it answers Dulwich Hill. That is the easy part. The more useful skill is asking why, and the cleanest way to find out is to take the evidence away one piece at a time and see whether the answer survives.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Marrickville.',
  picks: {
    eyebrow: 'Course picks for Marrickville',
    h2: 'Courses where every model has to explain itself',
    intro: 'Each course below practises the explanation habit from the suburb project. The free trial sets the level first, and payment waits until course and time are agreed.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Nearest-neighbour models built from scratch, then questioned input by input.' },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 18',
        note: 'Census tables read, compared and charted with care about what they can show.'
      },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Distance, averages and comparison explained through short programs.' },
      {
        course: 'artificial-intelligence-complete-masterclass-college',
        band: 'University and adult',
        note: 'Machine learning with explanation methods used to justify results at work.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Marrickville in the Census',
      h2: 'A suburb of flats, terraces and graduates',
      intro: 'Figures for the suburb of Marrickville (ABS code SAL12514) from the 2021 Census QuickStats, beside New South Wales and Australia. Marrickville is one suburb within the Inner West council area.',
      body: [
        {
          kind: 'table',
          caption: 'Marrickville, 2021 Census headline counts',
          head: ['Headline', 'Marrickville'],
          rows: [
            ['Residents', '26,570'],
            ['Median age', '37'],
            ['Families', '6,678'],
            ['Private dwellings', '12,127'],
            ['Average people per household', '2.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Marrickville alongside NSW and Australia',
          head: ['Measure', 'Marrickville', 'NSW', 'Australia'],
          rows: [
            ['Homes that are flats or apartments', '47.2% (5,020)', '21.7%', '14.2%'],
            ['Homes that are separate houses', '32.0% (3,404)', '65.6%', '72.3%'],
            ['Adults with a bachelor degree or higher', '43.1% (9,917)', '27.8%', '26.3%'],
            ['Workers employed as professionals', '39.7% (5,749)', '25.8%', '24.0%'],
            ['Residents aged 30 to 34', '11.6%', '7.3%', '7.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Home on Census day', p: 'In the August 2021 lockdown, 7,257 employed residents, 50.1%, worked from home on Census day.' },
            { h3: 'Train commuters', p: '3.8% of workers took the train to work that day, compared with 1.7% across the state.' },
            { h3: 'Driving', p: '22.1% drove themselves to work, about half the state share of 43.1%.' }
          ]
        },
        {
          kind: 'p',
          text: 'Every Census cell is lightly perturbed by the bureau for privacy, so the figures here are given as published and none are added together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Dulwich Hill is the closest match. But why?',
      intro: 'We took eight Census measures for Marrickville and ten nearby suburbs: median age, people per household, flats, separate houses, degrees, professionals, working from home and driving to work. Each measure was rescaled across the 11 suburbs so that none outweighs the others, and the model measured how far each suburb sits from Marrickville.',
      body: [
        {
          kind: 'table',
          caption: 'Marrickville and its two nearest matches (ABS Census 2021 QuickStats)',
          head: ['Measure', 'Marrickville', 'Dulwich Hill', 'Petersham'],
          rows: [
            ['Median age', '37', '38', '36'],
            ['People per household', '2.3', '2.2', '2.2'],
            ['Flats or apartments', '47.2%', '57.0%', '47.2%'],
            ['Separate houses', '32.0%', '28.8%', '22.5%'],
            ['Bachelor degree or higher', '43.1%', '44.7%', '48.0%'],
            ['Professionals', '39.7%', '39.5%', '43.0%'],
            ['Worked at home', '50.1%', '51.7%', '54.6%'],
            ['Drove to work', '22.1%', '23.1%', '18.8%']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Distance from Marrickville on the rescaled measures (our calculation; smaller is more alike)',
          head: ['Suburb', 'Distance'],
          rows: [
            ['Dulwich Hill', '0.83'],
            ['Petersham', '1.66'],
            ['St Peters', '2.08'],
            ['Stanmore', '2.10'],
            ['Enmore', '2.45'],
            ['Sydenham', '3.32'],
            ['Newtown', '3.44'],
            ['Tempe', '3.47'],
            ['Wolli Creek', '4.04'],
            ['Earlwood', '5.03']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Take one measure away and search again (our calculation)',
          head: ['Measure removed', 'Closest match', 'Its distance', 'Second match'],
          rows: [
            ['People per household', 'Dulwich Hill', '0.69', 'Petersham'],
            ['Flats or apartments', 'Dulwich Hill', '0.73', 'Petersham'],
            ['Median age', 'Dulwich Hill', '0.77', 'Petersham'],
            ['Worked at home', 'Dulwich Hill', '0.77', 'Petersham'],
            ['Drove to work', 'Dulwich Hill', '0.79', 'Petersham'],
            ['Bachelor degree or higher', 'Dulwich Hill', '0.80', 'Petersham'],
            ['Separate houses', 'Dulwich Hill', '0.82', 'Petersham'],
            ['Professionals', 'Dulwich Hill', '0.83', 'Petersham']
          ]
        },
        {
          kind: 'callout',
          h3: 'What the eight runs say',
          p: 'Dulwich Hill stays first and Petersham second whichever measure is removed, so the match does not hang on any one number. Removing people per household brings Dulwich Hill closest, from 0.83 to 0.69, so that is where the two differ most; removing professionals changes almost nothing, because the two suburbs are 39.5% and 39.7%.'
        },
        {
          kind: 'p',
          text: 'Why rescale at all? Without it, the gap in flats (47.2% against 57.0%) would supply about 85% of the raw distance to Dulwich Hill, simply because percentages run to bigger numbers than household sizes. The measures and their values are ABS figures; the distances, the rescaling and the conclusions are ours, and "alike" here means alike on these eight measures only.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'How students build it',
      h2: 'Answer, then explain, then try to break it',
      intro: 'The model is a few lines of Python. The explanation step is a loop around it, and that loop is where students learn the most.',
      body: [
        {
          kind: 'table',
          caption: 'The three parts of the project',
          head: ['Part', 'What the code does', 'Question it answers'],
          rows: [
            ['Match', 'Finds the suburb with the smallest distance to Marrickville', 'Which suburb is most alike?'],
            ['Explain', 'Repeats the match eight times, each time without one measure', 'Which measures does the answer depend on?'],
            ['Stress test', 'Checks whether the first and second places ever change', 'Is the answer fragile or solid?']
          ]
        },
        {
          kind: 'p',
          text: 'The same remove-and-rerun idea explains far bigger models, from a recommendation engine to an exam-mark predictor. If removing one input flips the answer, that input deserves a close look before anyone relies on the result.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Play "which animal is most like a cat?" in Scratch, then hide one clue at a time and see whether the answer changes.' },
            { h3: 'Teenagers', p: 'Build the suburb matcher, run the eight removals and write a one-paragraph explanation a parent could follow.' },
            { h3: 'Adults', p: 'Apply the same loop to a work model and report which inputs its decisions actually rest on.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and terms',
      h2: 'Marrickville Public School, 1864',
      intro: 'From the NSW government schools file and the 2027 calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Primary schools',
              p: 'The file lists Marrickville Public School (first teacher 1864), Marrickville West Public School (1886), Ferncourt Public School (1922) and Wilkins Public School (1982).'
            },
            { h3: 'Secondary', p: 'Marrickville High School is dated 1979 in the same file.' },
            { h3: 'Term 1, 2027', p: 'Eastern division schools begin on Wednesday 3 February 2027, and Term 1 runs to Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Why no station figures',
          p: 'The Transport for NSW usage file holds almost no Marrickville station figures for October 2024 to August 2026, so this page works from the Census instead.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing animals to explaining models',
    intro: 'Ages are a rough guide; the trial lesson shows where to begin.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and clues',
        p: 'Sorting, matching and guessing games built in blocks.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and first AI',
        p: 'Python basics, then small models that learn from examples.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Models that explain',
        p: 'Machine learning with tests and explanations for every answer.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'AI for work',
        p: 'Models, evaluation and explanation suited to the workplace.',
        courses: ['artificial-intelligence-complete-masterclass-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can give the answer, why should a Marrickville student learn to explain it?',
    intro: 'Because an answer nobody can explain is an answer nobody can check.',
    p1: 'An AI assistant asked which suburb is most like Marrickville might say Dulwich Hill, Petersham or Newtown, with a confident paragraph each time. Without a way to test the reasoning, there is no telling which paragraph rests on evidence and which simply sounds right.',
    p2: 'A learner who has removed one measure at a time and watched the answer hold knows how to probe any model, including the AI ones. That habit is what employers mean when they ask for people who can work with AI responsibly.',
    closer: 'The Marrickville student who asks a model to show its working is the one who can tell a solid answer from a lucky one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes reach every Marrickville street online',
    intro: 'Every lesson is live online, so learners join from home wherever they are in the suburb.',
    cells: [
      { h3: 'From the kitchen table', p: 'A laptop at home is the classroom; no trip to a centre is needed.' },
      { h3: 'NSW school year', p: 'Lessons follow NSW syllabus stages and pause through the NSW school holidays.' },
      { h3: 'A full free lesson', p: 'The first class is a proper lesson and ends with a suggested course, level and time.' },
      { h3: 'Groups of five to ten', p: 'Learners are matched by level and pace, Marrickville students alongside others.' },
      { h3: 'Two fixed slots', p: 'Two lessons a week, about eight a month, with breaks agreed ahead of time.' },
      {
        h3: 'Teachers in India',
        p: 'A 3pm Marrickville lesson during daylight saving starts at 9:30am in India; in Sydney standard time it starts at 10:30am there.'
      }
    ],
    spec: {
      title: 'Daylight saving in Sydney',
      p: 'Clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India keeps the same time all year. We always quote Sydney time.'
    }
  },
  fees: {
    h2: 'Marrickville class fees',
    intro: 'Three amounts, no extras.',
    first: 'Your first class is free and ends with a frank recommendation.',
    group: 'A month of group lessons, generally eight, with five to ten learners at the same level.',
    private: 'Around eight private lessons a month with one teacher.',
    closer: 'Families outside India pay in US dollars, so every Marrickville family pays the same. Nothing is charged before the trial; once course and time are settled, the pricing page covers holidays, absences and switching formats.'
  },
  reviewsH2: 'What families and learners say in Google reviews',
  book: {
    h2: 'Book a first Marrickville class',
    intro: 'Tell us the learner\'s age and interests. A nine-year-old might start with a Scratch guessing game; a teenager might start with the suburb matcher.',
    success: 'Thank you. Our team will contact you shortly about a Marrickville class.'
  },
  faq: {
    h2: 'Marrickville AI and programming questions',
    intro: 'Common questions from Marrickville families and adult learners.',
    items: [
      {
        q: 'How many people live in Marrickville?',
        a: 'The 2021 Census QuickStats for the suburb of Marrickville record 26,570 residents, 6,678 families and 12,127 private dwellings.'
      },
      {
        q: 'What is a nearest-neighbour match?',
        a: 'A model that describes each item by a list of numbers and calls the item with the smallest distance the closest match. Here the items are suburbs and the numbers are eight Census measures.'
      },
      {
        q: 'Which suburb is most like Marrickville in the project?',
        a: 'Dulwich Hill, at a distance of 0.83 on the rescaled measures, followed by Petersham at 1.66. Earlwood is the least alike of the ten, at 5.03.'
      },
      {
        q: 'How do you explain why the model chose Dulwich Hill?',
        a: 'By removing one measure at a time and searching again. Dulwich Hill stayed first in all eight runs, so the match rests on many measures together rather than any single one.'
      },
      {
        q: 'Can primary school children learn AI?',
        a: 'Yes, through Scratch games about patterns, clues and guesses. Python-based machine learning usually begins around 12 or 13.'
      },
      { q: 'Do you teach Copilot Studio agents?', a: 'Yes, but only one to one. Group classes build agents in Python.' },
      {
        q: 'Do you have a centre in Marrickville?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do classes cost for Marrickville learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many learners are in a class?',
        a: 'Five to ten, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      },
      { q: 'Do you teach adults?', a: 'Yes, in adult groups or one to one, often working towards data or AI tasks in their jobs.' }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Marrickville learners',
    html: 'The <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-inner-west-sydney">Inner West page</a> covers the whole council, including the light rail stops at Dulwich Hill, and <a class="cg-inline-link" href="/ai-and-programming-classes-in-bankstown-sydney">Bankstown</a> lies further west. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales guide</a> cover the rest of the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Marrickville and Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-inner-west-sydney', label: 'Inner West' },
    { href: '/ai-and-programming-classes-in-bankstown-sydney', label: 'Bankstown' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-mkvl .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 3.8vw, 3rem); }
.cg-root.cg-mkvl .cg-hero h1 { font-weight: 670; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-mkvl .cg-capsule { border-left: 2px solid var(--cg-accent); padding: 0.55rem 0 0.55rem 1.3rem; }
.cg-root.cg-mkvl .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-mkvl .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.015em; }
.cg-root.cg-mkvl .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 2rem); }
.cg-root.cg-mkvl .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-mkvl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mkvl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-mkvl .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Marrickville, ABS Census 2021 QuickStats, suburb SAL12514 (read 10 October 2026): 26,570 people; median age 37; 6,678 families; 12,127 private dwellings; 2.3 people per household; flats or apartments 47.2% (5,020); separate houses 32.0% (3,404); bachelor degree or higher 43.1% (9,917); professionals 39.7% (5,749); aged 30-34 11.6%; worked at home 50.1% (7,257, lockdown Census day); train 3.8%; drove to work 22.1%. Neighbour suburbs from QuickStats (SAL): Dulwich Hill 14,046 people, median age 38, 2.2 per household, flats 57.0%, houses 28.8%, degree 44.7%, professionals 39.5%, home 51.7%, drove 23.1%; Petersham median 36, 2.2, flats 47.2%, houses 22.5%, degree 48.0%, professionals 43.0%, home 54.6%, drove 18.8%; also Earlwood, Enmore, Newtown, St Peters, Stanmore, Sydenham, Tempe, Wolli Creek. NSW government schools file (Date_extracted 2026-10-02): Marrickville Public School 1864, Marrickville West Public School 1886, Ferncourt Public School 1922, Wilkins Public School 1982, Marrickville High School 1979. NSW 2027 Eastern division Term 1: 3 February to 9 April. Sydney daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Leave-one-feature-out explanation of a nearest-neighbour match. Eight QuickStats measures for Marrickville and ten nearby suburbs, z-scored across the 11; Euclidean distance. Ranking: Dulwich Hill 0.83, Petersham 1.66, St Peters 2.08, Stanmore 2.10, Enmore 2.45, Sydenham 3.32, Newtown 3.44, Tempe 3.47, Wolli Creek 4.04, Earlwood 5.03. Removing each measure in turn: Dulwich Hill first and Petersham second in all 8; distance to Dulwich Hill 0.69 (people per household removed) to 0.83 (professionals removed). Unscaled, the flats gap supplies about 85% of the squared distance (96.04 of 113.45). Scripts: scratchpad au/b4/mkvl_nn.py, mkvl2.py.',
    requiredMentions: ['26,570', '6,678', '12,127', '5,020', '3,404', '9,917', '5,749', '7,257', 'Marrickville West Public School'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Marrickville (suburb) (SAL12514).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL12514' },
      {
        claim: 'ABS Census 2021 QuickStats for nearby suburbs (SAL), for example Dulwich Hill (SAL11306).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL11306'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution), Date_extracted 2026-10-02.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Transport for NSW, Train, Metro and Light Rail Station Monthly Usage from November 2024, based on Opal batch data (Creative Commons Attribution), file updated 15 September 2026.',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      { claim: 'NSW Department of Education, 2027 term dates (Eastern division).', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That Dulwich Hill is the most similar suburb in any wider sense: not claimed; similarity is on eight chosen Census measures only.',
      'Any reason why the Marrickville station has so few usage figures for these months: not stated; only the absence of data is noted.',
      'A cyclical (sine and cosine) month model of Marrickville station entries: dropped because the data is too sparse.',
      'Any total formed by adding suburbs together: not computed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Inner West Council, Transport for NSW, the NSW Department of Education or the ABS.'
    ]
  }
};
