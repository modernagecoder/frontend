'use strict';
// Canterbury-Bankstown, Sydney (cg- district page, Australia cluster Phase 8, row 223). Keyword slug in the
// rotation (best-coding-and-ai-classes-in-*), council-area page under Sydney and New South Wales.
// Canterbury-Bankstown LGA (ABS LGA11570), 110.2374 square kilometres in the ASGS boundary.
// Spine: is there a majority value in the council's school list, and can one pass with a single counter
// find it? The Boyer-Moore majority vote algorithm, plus the second pass that keeps it honest.
// Data: NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, LGA =
// Canterbury-Bankstown: 75 government schools (Primary 46, Secondary 17, Schools for Specific Purposes 9,
// Infants 3). Level pass in file order: candidate Primary School, final counter 17 (46 minus 29), verified
// 46 of 75. Suburb pass: Town_suburb has 46 distinct raw strings (trailing spaces, capitals) but 30 suburbs
// after normalising; candidate Punchbowl with counter 1, verified only 3 of 75, so no majority; sorting by
// school name instead makes the candidate Yagoona (1 of 75). All 2,210 NSW schools: Primary School
// 1,582 (a majority). Earliest first teachers in the LGA: Belmore South Public School 1862, Bankstown North
// Public School 1868, Lakemba Public School 1869, Canterbury Public School 1878.
// Lesson family: Boyer-Moore majority element (one-pass candidate plus verification pass); screened 0
// location-page hits.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CANTERBURY-BANKSTOWN',
    label: 'Canterbury-Bankstown, Sydney',
    blurb: 'Coding and AI classes for Canterbury-Bankstown, with a one-pass algorithm that finds a majority in the council\'s school list and a second pass that stops it lying.'
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
  slug: 'best-coding-and-ai-classes-in-canterbury-bankstown-sydney',
  code: 'cbnk',
  accent: '#1C2873',
  accentRationale: 'Canterbury-Bankstown: a deep muted indigo (hue 231), at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 13.1:1 on white and 10.7:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Canterbury-Bankstown',
    eyebrow: 'City of Canterbury-Bankstown, Sydney',
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
  routeLabel: 'Canterbury-Bankstown, Sydney',
  title: 'Best Coding and AI Classes in Canterbury-Bankstown',
  description: 'Live online coding, Python and AI classes for Canterbury-Bankstown children, teens and adults, in small groups or one to one with real teachers. First lesson free.',
  ogDescription: 'Coding and AI classes for Canterbury-Bankstown, with the Boyer-Moore majority algorithm on the council\'s 75 government schools: one counter finds that 46 are primary schools, and a second pass stops a false answer.',
  twitterDescription: 'Canterbury-Bankstown coding and AI classes, live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Canterbury-Bankstown',
    description: 'Level-matched online coding, Python, algorithms and AI for children from six, teenagers and adults across the City of Canterbury-Bankstown, taught live in English.'
  },
  h1: 'Coding and AI classes in Canterbury-Bankstown',
  capsuleQ: 'What are the best coding and AI classes across Canterbury-Bankstown?',
  capsule: 'Live online classes where children, teenagers and adults learn to think through problems, not memorise code. The 2021 Census counted 371,006 people in the City of Canterbury-Bankstown, a median age of 36, and a higher share of under-fives than the state, 6.6% to 5.8%. Learners join a small group at their level or study privately, and the first lesson is free.',
  lead: 'The council area has 75 government schools in the NSW Department of Education\'s file. Is there one level of schooling that makes up more than half of them? A beginner counts every category in a dictionary. The Boyer-Moore majority vote algorithm does it with a single variable and a single counter, walking the list once. It names primary schools, and a second pass confirms 46 of the 75. Ask the same algorithm about suburbs and it confidently names Punchbowl, which appears just three times. The second pass is what catches it, and that is the real lesson.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Canterbury-Bankstown.',
  picks: {
    eyebrow: 'Course picks for Canterbury-Bankstown',
    h2: 'Courses that build algorithmic thinking',
    intro: 'Every course reaches the majority idea at its own level. The free trial sets the fit, and booking needs no card.',
    items: [
      {
        course: 'problem-solving-and-computational-thinking-for-kids',
        band: 'Ages 7 to 12',
        note: 'Puzzles and games that teach children to break problems down and check their answers.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Complete Python, including the loops and counters this algorithm is made from.'
      },
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 14 to 18',
        note: 'Algorithms and data structures with proofs, contest problems and careful testing.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Interview-level algorithms, including streaming methods that use almost no memory.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The council area in the Census',
      h2: 'A large council with young families',
      intro: 'The bureau\'s 2021 profile of the whole local government area, set beside the state and the nation.',
      body: [
        {
          kind: 'table',
          caption: 'The council area in four numbers',
          head: ['Count', 'Canterbury-Bankstown'],
          rows: [
            ['Residents', '371,006'],
            ['Families', '92,604'],
            ['Private dwellings', '133,317'],
            ['People per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Shares compared with the state and the country',
          head: ['Measure', 'Canterbury-Bankstown', 'NSW', 'Australia'],
          rows: [
            ['Children aged 0 to 4', '6.6% (24,664)', '5.8%', '5.8%'],
            ['Semi-detached, terrace or townhouse homes', '15.7% (18,398)', '11.7%', '12.6%'],
            ['Apartments', '28.5% (33,403)', '21.7%', '14.2%'],
            ['Degree holders among those 15 and over', '23.6% (70,107)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'A big council', p: 'The bureau\'s boundary covers 110.2 square kilometres, home to more than 371,000 people at the 2021 Census.' },
            { h3: 'Mixed housing', p: 'Separate houses were 55.0% of occupied homes, with townhouses and apartments making up most of the rest.' },
            { h3: 'School-age children', p: 'The Census counted 24,804 residents aged 5 to 9 and 24,009 aged 10 to 14.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census cells are adjusted slightly to protect privacy, so parts may not add to the totals. We quote the bureau\'s published figures and never total rows ourselves.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One counter, one pass, and a check that matters',
      intro: 'The algorithm keeps a candidate and a count. Matching items add one, different items subtract one, and when the count reaches zero the next item becomes the candidate. If any value fills more than half the list, it is guaranteed to be the candidate at the end.',
      body: [
        {
          kind: 'table',
          caption: 'Level of schooling for the council\'s 75 government schools (NSW Department of Education file)',
          head: ['Level', 'Schools'],
          rows: [
            ['Primary School', '46'],
            ['Secondary School', '17'],
            ['School for Specific Purposes', '9'],
            ['Infants School', '3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Running the algorithm (our calculation)',
          head: ['Question', 'Candidate after one pass', 'Second pass', 'Majority?'],
          rows: [
            ['Which level?', 'Primary School, count 17', '46 of 75', 'Yes'],
            ['Which suburb, file order?', 'Punchbowl, count 1', '3 of 75', 'No'],
            ['Which suburb, sorted by school name?', 'Yagoona, count 1', '1 of 75', 'No']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why the count ends at 17',
              p: 'Each primary school is cancelled by at most one non-primary school, so the final count is at least 46 minus 29, which is exactly what it was.'
            },
            {
              h3: 'Why it names Punchbowl',
              p: 'With no majority the first pass still returns something, and what it returns depends on the order of the list. Reordering the same 75 schools gives Yagoona instead.'
            },
            { h3: 'The second pass', p: 'Counting the candidate once more costs one extra walk through the list and turns a guess into a proof, or exposes it.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Cleaning comes first',
          p: 'The suburb column holds 46 different text values but only 30 real suburbs: some have a trailing space and some are in capitals, such as BASS HILL and KINGSGROVE. Before normalising, Punchbowl appears twice; after, three times. A learner who skips cleaning counts the wrong thing perfectly.'
        },
        {
          kind: 'p',
          text: 'Across all 2,210 schools in the state file the same algorithm also names Primary School, verified at 1,582 schools. The candidates, counts and verifications are our own calculation from the department\'s published file; the project says nothing about school results or enrolments.'
        }
      ]
    },
    {
      id: 'method',
      tint: 'tint',
      eyebrow: 'Why it matters',
      h2: 'Majority votes on data too big to store',
      intro: 'The algorithm needs only two variables however long the list is, which is why it is used on streams of data that cannot be kept in memory.',
      body: [
        {
          kind: 'table',
          caption: 'Two ways to find a majority',
          head: ['Approach', 'Memory', 'Passes', 'Proof of majority'],
          rows: [
            ['Count everything in a dictionary', 'One entry per distinct value', 'One', 'Yes, directly'],
            ['Boyer-Moore candidate', 'Two variables', 'One', 'No, only a candidate'],
            ['Boyer-Moore with verification', 'Two variables', 'Two', 'Yes']
          ]
        },
        {
          kind: 'p',
          text: 'On 75 schools memory hardly matters. On a stream of billions of web requests or sensor readings it decides whether the job is possible at all. Learners first run the dictionary method, then the two-variable method, then write tests that feed both a list with no majority and confirm only the verified version gets it right.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary children', p: 'Pair off coloured counters on a table, removing one of each different colour, and see which colour survives.' },
            { h3: 'High school', p: 'Code the algorithm, prove why it works, and test it on the school file in different orders.' },
            { h3: 'Adults', p: 'Use streaming summaries on logs and event data where storing everything is too expensive.' }
          ]
        },
        {
          kind: 'p',
          text: 'Our sources are public files from the NSW Department of Education, Transport for NSW and the statistics bureau. None of them, and not the council, is affiliated with Modern Age Coders.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Canterbury-Bankstown',
      h2: 'Schools from 1862 and stations along the network',
      intro: 'More facts from the school file and the station data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The earliest schools',
              p: 'Belmore South Public School has the earliest first-teacher date in the council area, 1862. Lakemba Public School dates from 1869 and Canterbury Public School from 1878.'
            },
            { h3: 'Busiest reported station', p: 'Among stations in the council area with a count for August 2026, Revesby Station had the most entries, 135,103.' },
            {
              h3: 'Eighteen stations',
              p: 'NSW Spatial Services maps 18 railway stations inside the council boundary, from Hurlstone Park in the east to East Hills in the south.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Missing months',
          p: 'Several stations in the council area have no count, or a count shown only as fewer than 50, for August 2026 in Transport for NSW\'s file. The file does not give a reason, so this page does not offer one.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From coloured counters to streaming algorithms',
    intro: 'Age bands are rough; the trial lesson decides the real first rung.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Thinking in steps',
        p: 'Scratch and puzzles that build sequences, loops and checking.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'First Python',
        p: 'Python with lists, counters and small games.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Algorithms',
        p: 'Classic algorithms with proofs and tests, and AI used carefully.',
        courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Engineering depth',
        p: 'Data structures, streaming and system design for careers.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can write this in seconds. Why should a Canterbury-Bankstown student understand it?',
    intro: 'Because an AI that writes only the first pass hands you an answer that is sometimes a confident guess.',
    p1: 'Ask for a majority finder and an assistant may return the elegant one-pass loop without the verification step. On the level column it works. On the suburb column it reports Punchbowl as the majority with no hint that anything is wrong.',
    p2: 'A student who has run both columns knows to ask where the check is, and to clean the data before trusting any count. Those two habits, verification and cleaning, matter in every program an AI helps to write.',
    closer: 'In 2026 the Canterbury-Bankstown learners who check AI code will be the ones trusted to ship it, and that habit starts with writing algorithms themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'One online class for the whole council area',
    intro: 'From Campsie to Panania, every household in the council area joins the same live lesson from home.',
    cells: [
      { h3: 'From home', p: 'No travel across the council area; a computer and headphones are enough.' },
      { h3: 'NSW timing', p: 'Plans follow NSW stages and break for the state school holidays.' },
      { h3: 'Free trial', p: 'A full first lesson at no cost, followed by a suggested course and time.' },
      { h3: 'Group or one to one', p: 'Classes of fifteen to twenty learners sorted by level, or a teacher of your own.' },
      { h3: 'Steady routine', p: 'The same two weekly slots all term, roughly eight lessons a month.' },
      { h3: 'Teachers in India', p: 'A 5:30pm lesson in summer begins at noon India time, and at 1pm once Sydney leaves daylight saving.' }
    ],
    spec: {
      title: 'Daylight saving in Sydney',
      p: 'Sydney clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027, while India keeps one time. We quote all lesson times in Sydney time.'
    }
  },
  fees: {
    h2: 'Canterbury-Bankstown class fees',
    intro: 'Three amounts are the whole story.',
    first: 'The first lesson is free and ends with a recommendation.',
    group: 'A month of small-group lessons, normally eight, with fifteen to twenty learners.',
    private: 'Roughly eight lessons a month with one teacher and one learner.',
    closer: 'Outside India every invoice is in US dollars, the same across the council area. Payment starts only after the trial, when course and times are agreed; holidays and absences are explained on the pricing page.'
  },
  reviewsH2: 'Google reviews from our families',
  book: {
    h2: 'Book a first lesson in Canterbury-Bankstown',
    intro: 'Share an age and an interest. A Year 3 child might start with a Scratch game; a Year 10 student might start by coding the majority finder and breaking it.',
    success: 'Thank you. Our team will contact you soon about a lesson.'
  },
  faq: {
    h2: 'Canterbury-Bankstown coding and AI questions',
    intro: 'Questions families and adult learners across the council area ask us first.',
    items: [
      {
        q: 'What is the population of the City of Canterbury-Bankstown?',
        a: 'At the 2021 Census the council area had 371,006 residents, 92,604 families and a median age of 36.'
      },
      {
        q: 'What is the Boyer-Moore majority vote algorithm?',
        a: 'The Boyer-Moore majority vote algorithm finds a value that appears in more than half of a list using one pass and just two variables, a candidate and a counter. A second pass is needed to confirm the candidate really is a majority.'
      },
      {
        q: 'What is the Canterbury-Bankstown school project?',
        a: 'Learners run the algorithm on the 75 government schools in the council area. It finds that primary schools are a majority, 46 of 75, and then shows how it would wrongly name Punchbowl as the majority suburb without a verification pass.'
      },
      {
        q: 'Why does the suburb column need cleaning?',
        a: 'Some suburb names have trailing spaces and some are in capitals, so the column has 46 text values for 30 actual suburbs. Counting without cleaning splits one suburb into several.'
      },
      {
        q: 'Will this help with school Digital Technologies?',
        a: 'The algorithms and programming we teach sit alongside what NSW students meet at school, usually going deeper. We run independently of every school.'
      },
      {
        q: 'Does my child need to know any coding?',
        a: 'No. The youngest learners, from six, begin with visual blocks; from about nine most move into Python.'
      },
      {
        q: 'Do adults take these classes?',
        a: 'Many do, usually to prepare for technical interviews or to move into software, in adult-only groups or privately.'
      },
      {
        q: 'Do you have a centre in the council area?',
        a: 'No. All lessons are live online and we have no premises in Australia. The phone number on our site is Indian.',
        boiler: true
      },
      {
        q: 'What do classes cost in Canterbury-Bankstown?',
        a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Five to ten, grouped by level and pace. One-to-one lessons are available if no group suits.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Canterbury-Bankstown learners',
    html: '<a class="cg-inline-link" href="/ai-and-programming-classes-in-bankstown-sydney">Bankstown</a> has a suburb page of its own, and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-georges-river-sydney">Georges River</a> covers the council area to the south. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> covers the city, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI in New South Wales</a> the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Canterbury-Bankstown and Sydney',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-bankstown-sydney', label: 'Bankstown' },
    { href: '/vibe-coding-and-ai-agents-classes-in-auburn-sydney', label: 'Auburn' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-cbnk .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3vw, 2.35rem); }
.cg-root.cg-cbnk .cg-hero h1 { font-weight: 750; letter-spacing: -0.017em; line-height: 1.1; }
.cg-root.cg-cbnk .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.7rem 0; }
.cg-root.cg-cbnk .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-cbnk .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.01em; }
.cg-root.cg-cbnk .cg-grid-3 { gap: clamp(1.05rem, 2.4vw, 1.95rem); }
.cg-root.cg-cbnk .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-cbnk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cbnk .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-cbnk .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Canterbury-Bankstown, ABS Census 2021 QuickStats, Canterbury-Bankstown local government area LGA11570 (read 10 October 2026): 371,006 people; median age 36; 92,604 families; 133,317 private dwellings; 2.9 people per household; age 0 to 4 24,664 (6.6 percent; NSW 5.8); age 5 to 9 24,804; age 10 to 14 24,009; separate house 64,393 (55.0 percent); semi-detached, row or terrace house, townhouse 18,398 (15.7 percent; NSW 11.7); flat or apartment 33,403 (28.5 percent; NSW 21.7); Bachelor Degree level and above 70,107 (23.6 percent; NSW 27.8). ABS ASGS 2021 LGA area 110.2374 square kilometres. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Boyer-Moore majority element. NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, LGA Canterbury-Bankstown: 75 schools; Level_of_schooling Primary School 46, Secondary School 17, Schools for Specific Purposes 9, Infants School 3. Level pass (file order): candidate Primary School, final counter 17; verified 46 of 75 (majority). Town_suburb: 46 distinct raw strings, 30 suburbs after whitespace and case normalisation (examples BASS HILL, KINGSGROVE, trailing spaces); most common Bankstown 8, Panania 6. Suburb pass, file order: candidate Punchbowl, counter 1, verified 3 of 75 (2 before normalising): no majority. Sorted by School_name: candidate Yagoona, verified 1 of 75. All NSW schools (2,210): Primary School 1,582, verified majority. Earliest Date_1st_teacher in the LGA: Belmore South Public School 1862-01-01, Lakemba Public School 1869-04-01, Canterbury Public School 1878-03-01. NSW Spatial Services transport points: 18 railway stations inside the LGA boundary. Transport for NSW monthly entries (CC BY), August 2026: Revesby Station 135,103 (highest among the LGA stations with a count); several LGA stations have no count or Less than 50.',
    requiredMentions: ['371,006', '92,604', '133,317', '24,664', '18,398', '70,107', 'Belmore South Public School', '135,103', 'Punchbowl'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Canterbury-Bankstown (LGA11570).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA11570' },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Spatial Services, NSW Transport Theme feature service (station points).',
        url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Transport_Theme/FeatureServer'
      },
      { claim: 'ABS ASGS Edition 3 boundaries (LGA), geo.abs.gov.au map services.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why several stations in the council area have no August 2026 count: not claimed; no reason was verified.',
      'Details of the Schools for Specific Purposes: counted but not named, as they concern students\' needs.',
      'School results, enrolments or rankings: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Canterbury-Bankstown Council, Transport for NSW or the ABS.'
    ]
  }
};
