'use strict';
// Mosman, Sydney (cg- district page, Australia cluster Phase 8, row 229). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page (ABS LGA15350) under Sydney and New South Wales.
// Spine: the Census publishes Mosman's ages in five-year bands ("5-9 years"); which age questions can those
// bands answer directly, and what goes wrong when a program turns an inclusive band into a range carelessly?
// Data: ABS Census 2021 QuickStats Mosman LGA15350, age bands as published (0-4 1,220; 5-9 1,522; 10-14 1,871;
// 15-19 1,619; 85 and over 916). Our 12 questions (scratchpad au/b4/msmn2.py): bands stored as half-open
// ranges [lo, lo+5); a query of inclusive ages first..last becomes [first, last+1). Correct classifier: 5 answered
// by one band, 3 need several bands (not added by us), 4 cannot be answered from bands. A version that forgets
// the +1 calls 10 of 12 unanswerable and disagrees with the correct one on 6 of 12.
// Lesson family: half-open intervals vs inclusive Census age bands; 0 location-page hits, unclaimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'MOSMAN',
    label: 'Mosman, Sydney',
    blurb: 'Online coding and Python for Mosman, with a project on which age questions the Census bands can and cannot answer.'
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
  slug: 'online-coding-and-python-classes-in-mosman-sydney',
  code: 'msmn',
  accent: '#426224',
  accentRationale: 'Mosman: a deep fig-leaf olive (hue 91), chosen by hand at least 10 RGB units from all 1,272 accents in content, the shared stylesheets and the claims log, 7.0:1 on white and 5.7:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Mosman',
    eyebrow: 'Mosman Council area, Sydney, New South Wales',
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
  routeLabel: 'Mosman, Sydney',
  title: 'Online Coding and Python Classes in Mosman, Sydney',
  description: 'Live online coding and Python classes for Mosman children, teenagers and adults, from first Scratch projects to real data work, in small groups or one to one.',
  ogDescription: 'Python classes for Mosman, with a project on Census age bands: of 12 age questions, 5 fit one published band, and a program that forgets a +1 gets 6 of the 12 wrong.',
  twitterDescription: 'Mosman online coding and Python classes, live with a teacher, first class free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Mosman',
    description: 'Level-matched online coding and Python lessons for children, teenagers and adults in the Mosman council area, taught live in English.'
  },
  h1: 'Online coding and Python classes in Mosman',
  capsuleQ: 'Where do Mosman learners find the best online coding and Python classes?',
  capsule: 'In live online lessons where a teacher writes and tests real Python with the learner, starting from Scratch for young children. Mosman is an older and highly qualified council area: the 2021 Census counted 28,329 residents with a median age of 45, and 12,938 adults, 54.5%, held a bachelor degree or higher.',
  lead: 'The Census does not publish ages one by one in QuickStats. It groups them: "5-9 years", "10-14 years" and so on. Those labels include both ends, but Python ranges leave the top end out. Turning one into the other is a single line of code, and getting that line wrong quietly changes which questions a program thinks it can answer.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Mosman.',
  picks: {
    eyebrow: 'Course picks for Mosman',
    h2: 'Courses that make ranges second nature',
    intro: 'Each course here builds the habits behind the age-band project. The free trial sets the level, and nothing is paid until a course and time are agreed.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Ranges, loops, conditions and functions, practised on small public tables like the Mosman age bands.'
      },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Intervals, inequalities and counting explained by writing short programs.' },
      {
        course: 'pcep-pcap-python-certification-course',
        band: 'Ages 15 and over',
        note: 'Exact Python rules, including how range and slicing treat their end points.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from scratch to data work, with tests for every function.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Mosman in the Census',
      h2: 'An older council area with many graduates',
      intro: 'Figures for the Mosman local government area (ABS code LGA15350) from the 2021 Census QuickStats, beside the state and national figures.',
      body: [
        {
          kind: 'table',
          caption: 'Mosman, 2021 Census headline counts',
          head: ['Headline', 'Mosman'],
          rows: [
            ['Residents', '28,329'],
            ['Median age', '45'],
            ['Families', '7,723'],
            ['Private dwellings', '13,399'],
            ['Average people per household', '2.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Mosman beside NSW and Australia',
          head: ['Measure', 'Mosman', 'NSW', 'Australia'],
          rows: [
            ['Median age', '45', '39', '38'],
            ['Homes that are flats or apartments', '52.0% (6,001)', '21.7%', '14.2%'],
            ['Homes that are separate houses', '34.9% (4,028)', '65.6%', '72.3%'],
            ['Adults with a bachelor degree or higher', '54.5% (12,938)', '27.8%', '26.3%'],
            ['Workers employed as professionals', '41.6% (5,881)', '25.8%', '24.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Six years older', p: 'A median age of 45 puts Mosman six years above the state figure of 39.' },
            { h3: 'Working from home', p: 'On Census day in the August 2021 lockdown, 8,321 employed residents, 58.8%, worked from home.' },
            { h3: 'Fewer drivers', p: 'Only 19.8% of workers drove to work that day, against 43.1% across New South Wales.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau makes tiny random changes to table cells for privacy, so a column of QuickStats parts need not add up to the published total. That matters for the project below: we print the bands as published and do not add them together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which age questions can the bands answer?',
      intro: 'We wrote 12 everyday age questions about Mosman and a small Python program that checks each one against the published five-year bands before answering.',
      body: [
        {
          kind: 'table',
          caption: 'Some of Mosman\'s published age bands (ABS Census 2021 QuickStats)',
          head: ['Band as published', 'As a Python range', 'Residents'],
          rows: [
            ['0-4 years', 'range(0, 5)', '1,220'],
            ['5-9 years', 'range(5, 10)', '1,522'],
            ['10-14 years', 'range(10, 15)', '1,871'],
            ['15-19 years', 'range(15, 20)', '1,619'],
            ['85 years and over', 'no upper end', '916']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How our 12 questions sort out (our calculation)',
          head: ['Outcome', 'Correct program', 'Program that forgets the +1'],
          rows: [
            ['Answered by exactly one band', '5', '1'],
            ['Needs several bands (we do not add them)', '3', '1'],
            ['Cannot be answered from bands', '4', '10'],
            ['Questions where the two programs disagree', '6 of 12', '']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'One band', p: '"How many residents are aged 10 to 14?" matches a single band, so the answer is the published 1,871.' },
            {
              h3: 'Several bands',
              p: '"Aged 5 to 14" covers two whole bands. Adding them would give an unofficial figure, so the program reports that a single-year table is the right source.'
            },
            { h3: 'Cannot answer', p: '"Aged 12 to 17" starts and ends in the middle of bands. No arrangement of five-year groups can answer it.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'The one-character bug',
          p: 'Writing range(5, 9) for "5-9 years" drops the nine-year-olds. With that mistake our program could no longer match "under 5", "aged 5 to 9", "aged 10 to 14" or "aged 15 to 19" to any band, and called them unanswerable.'
        },
        {
          kind: 'p',
          text: 'The questions, the classifier and its counts are ours. The band figures are published ABS values quoted directly; the program decides which questions they can serve and never manufactures new totals.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The Python behind it',
      h2: 'Three lines that hold the whole idea',
      intro: 'Half-open ranges, which include the start and leave out the end, are how Python counts. The project is about translating between that and the inclusive labels people read.',
      body: [
        {
          kind: 'table',
          caption: 'From a published label to a safe check',
          head: ['Line of code', 'What it does', 'Common slip'],
          rows: [
            ['band = range(10, 15)', 'Holds the ages 10, 11, 12, 13 and 14', 'Writing range(10, 14) and losing age 14'],
            ['query = range(first, last + 1)', 'Turns "aged first to last" into a half-open range', 'Forgetting the + 1'],
            [
              'query.start in starts and query.stop in stops',
              'Checks the question lines up with band edges',
              'Testing only the start'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'Half-open ranges are not a Python quirk; they make lengths easy (stop minus start) and let neighbouring ranges meet without overlapping, which is exactly what five-year bands need.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Younger learners',
              p: 'Sort pretend birthdays into Scratch boxes and test the edge cases: is a child who turns ten in the first box or the second?'
            },
            { h3: 'Secondary students', p: 'Write the classifier, add tests for every edge, then break it on purpose and watch the tests catch it.' },
            {
              h3: 'Adults',
              p: 'Apply the same checks to date ranges, price bands and report periods at work, where inclusive and exclusive ends cause real errors.'
            }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Mosman',
      h2: 'A public school from 1880',
      intro: 'More from the NSW schools file and calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Four government schools',
              p: 'The NSW schools file lists Mosman Public School (first teacher 1880), Middle Harbour Public School (1916), Beauty Point Public School (1951) and Mosman High School (1961).'
            },
            { h3: 'The oldest band', p: 'The Census counted 916 Mosman residents aged 85 and over, 3.2% of the population.' },
            { h3: 'Term 1, 2027', p: 'Eastern division schools begin Term 1 of 2027 on Wednesday 3 February; the term ends on Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'One council, one suburb name',
          p: 'Every Census figure here is for the Mosman council area as a whole, which covers neighbourhoods such as Beauty Point and Balmoral as well as Mosman itself.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting birthdays to testing every edge',
    intro: 'The ages below are only a guide; the trial lesson finds the right starting point.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and sorting',
        p: 'Games that sort, count and compare, built in blocks.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Ranges, loops and conditions with a teacher checking every line.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with tests',
        p: 'Functions, edge cases and certification-level detail.',
        courses: ['python-complete-masterclass-teens', 'pcep-pcap-python-certification-course']
      },
      {
        band: 'University and adult',
        h3: 'Python for work',
        p: 'Data handling, testing and automation for the workplace.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will write the range for you. Why should a Mosman learner check it?',
    intro: 'Because off-by-one errors look correct on the page and only show up when someone tests the edges.',
    p1: 'Ask an AI assistant to turn "5-9 years" into Python and it may return range(5, 9), range(5, 10) or a pair of inequalities. Two of those are fine. The other silently drops every nine-year-old, and nothing in the code looks wrong until a test asks about a child aged exactly nine.',
    p2: 'A learner who has built the age-band classifier knows to ask where each interval starts and stops, and writes the one test that settles it. That habit catches the same slip in dates, prices and loops, whoever wrote the first draft.',
    closer: 'The Mosman learner who can test an edge case is the one who can safely accept code from an AI.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Beauty Point to Balmoral, all online',
    intro: 'Whether a learner is near Beauty Point or close to Balmoral, the live lesson arrives the same way, through the screen at home.',
    cells: [
      { h3: 'From your desk', p: 'There is no drive to a centre; the learner signs in and starts coding straight away.' },
      { h3: 'NSW stages', p: 'Lesson plans follow the state syllabus stages and stop during NSW school holidays.' },
      { h3: 'A free real lesson', p: 'The first class is taught in full and ends with a suggested course, level and time.' },
      { h3: 'Fifteen to twenty per group', p: 'Groups are formed by level and pace, combining Mosman learners with others.' },
      { h3: 'Two lessons a week', p: 'Two fixed lessons weekly, around eight a month, with any breaks agreed in advance.' },
      {
        h3: 'Teachers in India',
        p: 'A 5pm Mosman lesson during daylight saving starts at 11:30am India time; after the clocks go back it starts at 12:30pm there.'
      }
    ],
    spec: {
      title: 'Daylight saving and India time',
      p: 'Sydney moves its clocks on Sunday 4 October 2026 and Sunday 4 April 2027; India keeps one time all year. Our lesson times are always Sydney times.'
    }
  },
  fees: {
    h2: 'Mosman class fees',
    intro: 'Three amounts cover everything.',
    first: 'The first class costs nothing and closes with an honest recommendation.',
    group: 'A month of group lessons, typically eight, with fifteen to twenty learners at a similar level.',
    private: 'Around eight lessons a month, one teacher with one learner.',
    closer: 'Outside India, invoices are in US dollars, so the rate is the same for every Mosman family. Billing begins only after the trial, once a course and time are fixed; holidays, absences and format changes are covered on the pricing page.'
  },
  reviewsH2: 'Google reviews from our families and learners',
  book: {
    h2: 'Book a first Mosman class',
    intro: 'Share the learner\'s age and an interest. A ten-year-old might start with a Scratch sorting game; an adult might start with the age-band classifier.',
    success: 'Thank you. Our team will reach out shortly about a Mosman class.'
  },
  faq: {
    h2: 'Mosman coding and Python questions',
    intro: 'What Mosman families and adult learners ask us most.',
    items: [
      {
        q: 'How many people live in the Mosman council area?',
        a: 'The 2021 Census QuickStats for the Mosman local government area record 28,329 residents with a median age of 45.'
      },
      {
        q: 'What is a half-open interval in Python?',
        a: 'It is a range that includes its start but not its end. range(5, 10) holds 5, 6, 7, 8 and 9, so the published band "5-9 years" becomes range(5, 10), not range(5, 9).'
      },
      {
        q: 'What does the Mosman age-band project show?',
        a: 'Of 12 everyday age questions, 5 can be answered by one published band, 3 would need several bands added and 4 cannot be answered from bands at all. A program that forgets one +1 disagrees with the correct one on 6 of the 12.'
      },
      {
        q: 'Why not just add two bands together?',
        a: 'Because the bureau adjusts table cells slightly for privacy, so a sum of bands is not an official figure. The right step is to use a table with single years of age.'
      },
      {
        q: 'Do children need to know Python first?',
        a: 'No. Children from six start with Scratch and move to Python when they are ready, usually from about ten.'
      },
      {
        q: 'Do you teach Copilot Studio agents in groups?',
        a: 'No. Copilot Studio agents are taught one to one only; groups learn to build agents in Python.'
      },
      {
        q: 'Do you have an office in Mosman?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Mosman learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many people are in a group?',
        a: 'Five to ten, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      },
      {
        q: 'Can adults learn Python with you?',
        a: 'Yes. Adults learn in their own groups or one to one, often with a work task such as cleaning a spreadsheet in mind.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Mosman learners',
    html: 'Nearby, <a class="cg-inline-link" href="/ai-and-programming-classes-in-north-sydney-sydney">North Sydney</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-lane-cove-sydney">Lane Cove</a> have pages of their own, and <a class="cg-inline-link" href="/ai-and-programming-classes-in-northern-beaches-sydney">the Northern Beaches</a> begin across the Spit Bridge. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales guide</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Mosman and Sydney',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-north-sydney-sydney', label: 'North Sydney' },
    { href: '/ai-and-programming-classes-in-northern-beaches-sydney', label: 'Northern Beaches' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-msmn .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-msmn .cg-hero h1 { font-weight: 720; letter-spacing: -0.016em; line-height: 1.09; }
.cg-root.cg-msmn .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1.2rem; }
.cg-root.cg-msmn .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-msmn .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.011em; }
.cg-root.cg-msmn .cg-grid-3 { gap: clamp(0.85rem, 2.2vw, 1.75rem); }
.cg-root.cg-msmn .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-msmn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-msmn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-msmn .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Mosman, ABS Census 2021 QuickStats, Mosman local government area LGA15350 (read 10 October 2026): 28,329 people; median age 45; 7,723 families; 13,399 private dwellings; average 2.3 people per household; flats or apartments 52.0% (6,001); separate houses 34.9% (4,028); bachelor degree or higher 54.5% (12,938); professionals 41.6% (5,881); worked at home 58.8% (8,321, lockdown Census day); drove to work 19.8%; age bands 0-4 1,220, 5-9 1,522, 10-14 1,871, 15-19 1,619, 85 and over 916 (3.2%). NSW government schools file (Date_extracted 2026-10-02): Mosman Public School (1880), Middle Harbour Public School (1916), Beauty Point Public School (1951), Mosman High School (1961). NSW 2027 Eastern division Term 1: 3 February to 9 April. Sydney daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Half-open intervals vs inclusive Census age bands. Bands stored as Python ranges [lo, lo+5) plus 85 and over; query of inclusive ages first..last as [first, last+1). 12 questions: under 5, 5 to 9, 10 to 14, 5 to 14, 12 to 17, 13 to 19, 15 to 19, 18 to 24, 65 and over, 85 and over, 6 to 12, 20 to 29. Correct classifier: 5 single band, 3 several bands (not summed), 4 not answerable. Without the +1: 1 single, 1 several, 10 not answerable; disagrees on 6 of 12. Script: scratchpad au/b4/msmn2.py.',
    requiredMentions: ['28,329', '7,723', '6,001', '4,028', '12,938', '5,881', '8,321', '1,871', 'Middle Harbour Public School'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Mosman local government area (LGA15350).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA15350'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution), Date_extracted 2026-10-02.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'Python documentation, built-in types: range (start included, stop excluded).', url: 'https://docs.python.org/3/library/stdtypes.html#range' },
      { claim: 'NSW Department of Education, 2027 term dates (Eastern division).', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'A count of residents aged 5 to 14 formed by adding two bands: not computed, because perturbed cells do not add to official figures.',
      'Single-year ages for Mosman: not used; QuickStats publishes five-year bands only.',
      'That Beauty Point or Balmoral figures differ from the council total: not compared; only council-area figures are used.',
      'That the bus was the main way Mosman residents travelled to work: not claimed; only the published shares are quoted.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Mosman Council, the NSW Department of Education or the ABS.'
    ]
  }
};
