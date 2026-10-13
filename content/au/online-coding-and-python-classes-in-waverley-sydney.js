'use strict';
// Waverley, Sydney (cg- district page, Australia cluster Phase 8, row 233). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page (ABS LGA18050) under Sydney and New South Wales.
// Spine: Bondi Junction station's monthly tap-on entries, 23 months from October 2024 to August 2026, held in a
// Python list. Year-on-year for the latest month needs e[-13], not e[-12]: the right index gives +6.6% (August 2026
// 533,333 vs August 2025 500,540); the off-by-one gives -2.0% (vs September 2025, 544,205). A slice for "the twelve
// months before that", e[-24:-12], silently returns only 11 because the list is too short.
// Data: Transport for NSW station usage file (Entry rows, Bondi Junction Station). 11 year-on-year pairs available,
// 7 up and 4 down. Census: ABS QuickStats Waverley LGA18050. Script scratchpad au/b4/wvly.py.
// Lesson family: negative indexing and slicing for year-on-year comparisons; 0 location-page hits, unclaimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WAVERLEY',
    label: 'Waverley, Sydney',
    blurb: 'Online coding and Python for Waverley, with a project on comparing Bondi Junction station with the same month a year earlier.'
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
  slug: 'online-coding-and-python-classes-in-waverley-sydney',
  code: 'wvly',
  accent: '#121E74',
  accentRationale: 'Waverley: a deep navy (hue 233), chosen by hand at least 10 RGB units from all 1,272 accents in content, the shared stylesheets and the claims log, 15.0:1 on white and 12.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Waverley',
    eyebrow: 'Waverley Council area, Sydney, New South Wales',
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
  routeLabel: 'Waverley, Sydney',
  title: 'Online Coding and Python Classes in Waverley, Sydney',
  description: 'Live online coding and Python classes for Waverley learners, from Bondi to Bronte: Scratch for children, Python and data for teens and adults, in small groups.',
  ogDescription: 'Waverley Python classes, with a project on Bondi Junction station: one wrong list index turns a 6.6% rise on August 2025 into a 2.0% fall.',
  twitterDescription: 'Waverley online coding and Python classes, live with a teacher, first class free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Waverley',
    description: 'Level-matched online coding and Python lessons for children, teenagers and adults in the Waverley council area, taught live in English.'
  },
  h1: 'Online coding and Python classes in Waverley',
  capsuleQ: 'Where do Waverley families find the best online coding and Python classes?',
  capsule: 'Through lessons taught live over video, with a teacher coding alongside the learner and checks every result against real data, beginning with Scratch for children and moving to Python. Waverley is compact and young: the 2021 Census counted 68,605 residents with a median age of 35, and 17,590 homes, 64.1%, were flats or apartments.',
  lead: 'Python lets you count from the end of a list: e[-1] is the last item, e[-2] the one before. That makes "this month against the same month last year" look easy. With Bondi Junction station\'s monthly figures, choosing e[-12] instead of e[-13] turns a rise into a fall, and the code runs without complaint.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Waverley.',
  picks: {
    eyebrow: 'Course picks for Waverley',
    h2: 'Courses where lists and indexes become second nature',
    intro: 'Each course below builds the habits behind the Bondi Junction project. A free trial lesson places the learner first; fees start only once you have picked a course and a weekly slot.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python, with lists and counting from either end practised on real numbers.' },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Indexing, slicing and loops, with tests for the edge cases that trip people up.'
      },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Monthly transport data, year-on-year change and honest charts.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from zero to data work, including date-aware comparisons.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Waverley in the Census',
      h2: 'Apartments by the beaches',
      intro: 'Figures for the Waverley local government area (ABS code LGA18050) from the 2021 Census QuickStats, alongside NSW and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Waverley, 2021 Census headline counts',
          head: ['Headline', 'Waverley'],
          rows: [
            ['Residents', '68,605'],
            ['Median age', '35'],
            ['Families', '16,776'],
            ['Private dwellings', '32,775'],
            ['Average people per household', '2.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Waverley set against NSW and Australia',
          head: ['Measure', 'Waverley', 'NSW', 'Australia'],
          rows: [
            ['Homes that are flats or apartments', '64.1% (17,590)', '21.7%', '14.2%'],
            ['Residents aged 30 to 34', '12.6% (8,654)', '7.3%', '7.3%'],
            ['Residents holding a degree at bachelor level or above', '52.0% (30,052)', '27.8%', '26.3%'],
            ['Employed residents working in professional jobs', '41.8% (15,962)', '25.8%', '24.0%'],
            ['Workers who drove to work', '19.9% (7,615)', '43.1%', '52.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Working from home', p: 'On Census day, during the August 2021 lockdown, 21,049 employed residents, 55.1%, worked from home.' },
            { h3: 'Separate houses', p: 'Only 16.0% of Waverley homes were separate houses, against 65.6% across the state.' },
            { h3: 'Young adults', p: 'People aged 25 to 34 make up a far larger share of Waverley than of NSW, in both five-year bands.' }
          ]
        },
        { kind: 'p', text: 'The bureau adjusts every Census cell a little to protect privacy, so these figures are quoted as published, never added together.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Same month last year is e[-13], not e[-12]',
      intro: 'Transport for NSW publishes monthly tap-on entries for Bondi Junction station. We loaded the 23 months from October 2024 to August 2026 into one Python list, e, oldest first.',
      body: [
        {
          kind: 'table',
          caption: 'The latest month against two candidates for "a year earlier" (Transport for NSW entries; change is ours)',
          head: ['Index', 'Month', 'Entries', 'Change to August 2026'],
          rows: [
            ['e[-1]', 'August 2026', '533,333', ''],
            ['e[-13]', 'August 2025', '500,540', '+6.6%'],
            ['e[-12]', 'September 2025', '544,205', '-2.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Why minus 13', p: 'e[-1] is the latest month, so counting back twelve months lands on e[-13]. e[-12] is only eleven months back.' },
            { h3: 'The sign flips', p: 'The correct comparison shows entries 6.6% higher than in August 2025. The off-by-one version reports a 2.0% fall.' },
            { h3: 'No error message', p: 'Both lines are valid Python and both print a sensible-looking percentage. Only checking the month labels catches it.' }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Every year-on-year pair the 23 months allow (Transport for NSW entries; change is ours)',
          head: ['Month', 'Entries', 'Same month a year earlier', 'Change'],
          rows: [
            ['October 2025', '617,976', '615,712', '+0.4%'],
            ['November 2025', '597,717', '617,315', '-3.2%'],
            ['December 2025', '536,661', '557,876', '-3.8%'],
            ['January 2026', '522,312', '515,433', '+1.3%'],
            ['February 2026', '545,670', '547,259', '-0.3%'],
            ['March 2026', '611,722', '595,346', '+2.8%'],
            ['April 2026', '481,942', '504,842', '-4.5%'],
            ['May 2026', '560,876', '546,376', '+2.7%'],
            ['June 2026', '513,701', '498,175', '+3.1%'],
            ['July 2026', '523,864', '510,562', '+2.6%'],
            ['August 2026', '533,333', '500,540', '+6.6%']
          ]
        },
        {
          kind: 'callout',
          h3: 'The slice that came back short',
          p: 'Asking for the twelve months before the latest twelve, e[-24:-12], returned only 11 values, because the list holds 23 months. Python slices never complain about running off the start; the program has to check the length itself.'
        },
        {
          kind: 'p',
          text: 'Of the 11 pairs, 7 rose and 4 fell. The counts are tap-on entries at the station only, missing untapped trips, and the percentage changes are our arithmetic on the published monthly figures.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The Python behind it',
      h2: 'Index by label, then check by label',
      intro: 'The fix is not memorising minus thirteen. It is storing the month with each number and testing that the months match before comparing.',
      body: [
        {
          kind: 'table',
          caption: 'From fragile to safe',
          head: ['Approach', 'Code', 'What can go wrong'],
          rows: [
            ['Position only', 'e[-1] / e[-13] - 1', 'An off-by-one, or a missing month, compares the wrong pair'],
            ['Position plus check', 'assert months[-13] == "2025-08"', 'Stops the program loudly instead of printing a wrong answer'],
            ['Look up by month', 'by_month["2026-08"] / by_month["2025-08"] - 1', 'A missing month raises a clear KeyError']
          ]
        },
        {
          kind: 'p',
          text: 'The same mistake appears whenever data is stored by position: weekly sales, daily temperatures, quarterly results. A dictionary keyed by date, or a check on the labels, protects every one of them.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Line up twelve Scratch sprites as months and work out which one is "a year ago" when you start from the end.' },
            { h3: 'Teenagers', p: 'Build the year-on-year table for Bondi Junction, then plant an off-by-one and write the test that catches it.' },
            { h3: 'Adults', p: 'Rewrite a spreadsheet formula that uses "twelve rows up" as a lookup by date.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and terms',
      h2: 'Waverley Public School, 1879',
      intro: 'From the NSW government schools file and the 2027 calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Primary schools',
              p: 'The file records Waverley Public School (first teacher 1879), Bondi Public School (1883), Bondi Beach Public School (1923) and Bronte Public School (1927).'
            },
            {
              h3: 'Secondary',
              p: 'Rose Bay Secondary College at Dover Heights, dated 1982, is the only government secondary school the file lists in the council area.'
            },
            { h3: 'Term 1, 2027', p: 'Eastern division schools return on Wednesday 3 February 2027 and Term 1 ends on Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council, not suburb',
          p: 'Census figures here cover the whole Waverley council area, which includes Bondi, Bondi Junction, Bronte, Dover Heights and Waverley itself.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From lining up sprites to comparing by date',
    intro: 'The ages are guidance only; the trial lesson decides where to begin.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and order',
        p: 'Games about sequences, counting and position, built in blocks.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Lists, indexes and loops with a teacher checking each step.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python and data',
        p: 'Slicing, dictionaries and real monthly datasets.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Dates, reports and automation that compare the right periods.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write year-on-year code in seconds. Why should a Waverley student learn indexing?',
    intro: 'Because the AI does not know how many months are in your list, or whether one is missing.',
    p1: 'Ask an assistant for "this month against the same month last year" and it may write e[-1] / e[-12] or e[-1] / e[-13], depending on how it reads the request. Both run. On the Bondi Junction figures one says entries rose 6.6% and the other says they fell 2.0%.',
    p2: 'A student who has hit that bug once checks the month labels before trusting any comparison, whoever wrote the code. It takes one line, and it is the line that separates a correct report from a confident wrong one.',
    closer: 'The Waverley learner who checks the labels is the one who can safely use AI-written code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bondi, Bronte or Dover Heights, the lesson is online',
    intro: 'Every lesson runs live online, so where in the council area a learner lives makes no difference.',
    cells: [
      { h3: 'At your own desk', p: 'Skip the drive: open the laptop, join the call and the code editor is already shared.' },
      { h3: 'NSW stages', p: 'Lessons follow the NSW syllabus stages and stop in the state school holidays.' },
      { h3: 'A free first lesson', p: 'Nothing is held back in the trial; afterwards we propose where to begin and which weekly slot fits.' },
      { h3: 'Fifteen to twenty per class', p: 'Groups are built on level and pace, with Waverley learners joining others.' },
      { h3: 'Two lessons each week', p: 'Two fixed lessons weekly, about eight a month, with breaks agreed early.' },
      {
        h3: 'Teachers in India',
        p: 'A 3:30pm Waverley lesson in daylight saving time starts at 10am in India, and at 11am there once Sydney\'s clocks go back.'
      }
    ],
    spec: {
      title: 'When the clocks change',
      p: 'Sydney daylight saving runs from Sunday 4 October 2026 to Sunday 4 April 2027; India has no daylight saving. Lesson times are always agreed in Sydney time.'
    }
  },
  fees: {
    h2: 'Waverley class fees',
    intro: 'Three amounts, nothing more.',
    first: 'The first class is free and ends with a straight recommendation.',
    group: 'A month of group lessons, typically eight, with fifteen to twenty learners at a matching level.',
    private: 'About eight one-to-one lessons each month.',
    closer: 'Outside India we invoice in US dollars, the same for every Waverley family. You are billed from the first paid month after the trial, never before; rules for school holidays, missed lessons and moving between group and private sit with the prices.'
  },
  reviewsH2: 'Waverley parents and learners can read our Google reviews',
  book: {
    h2: 'Book a first Waverley class',
    intro: 'Share the learner\'s age and what grabs their attention. A seven-year-old could begin with a Scratch sequencing game; a teenager could go straight to the Bondi Junction comparison.',
    success: 'Thank you. Our team will be in touch shortly about a Waverley class.'
  },
  faq: {
    h2: 'Waverley coding and Python questions',
    intro: 'What Waverley parents and adult learners ask us most often.',
    items: [
      {
        q: 'How many people live in the Waverley council area?',
        a: 'At the 2021 Census, ABS QuickStats counted 68,605 residents in the Waverley council area, as well as 16,776 families and 32,775 private dwellings.'
      },
      {
        q: 'What is negative indexing in Python?',
        a: 'Counting from the end of a list. e[-1] is the last item and e[-2] the second last, so in a list of monthly figures e[-13] is the same month one year before e[-1].'
      },
      {
        q: 'What did the Bondi Junction project find?',
        a: 'August 2026 had 533,333 tap-on entries. Compared correctly with August 2025 that is 6.6% higher; compared by mistake with September 2025 it looks 2.0% lower.'
      },
      {
        q: 'Why did a slice return fewer months than expected?',
        a: 'The list held 23 months, so asking for e[-24:-12] could only return 11. Python slices quietly stop at the start of a list, so the length must be checked in code.'
      },
      {
        q: 'What age can children start Python?',
        a: 'Usually around ten, once some Scratch is behind them. Six- to nine-year-olds build in blocks first, and the switch to typed code happens when reading and typing are comfortable.'
      },
      { q: 'Are Copilot Studio agents taught in groups?', a: 'No. Copilot Studio is one to one only; groups build agents in Python.' },
      {
        q: 'Do you have a centre in Waverley?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Waverley learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'What size are the groups?',
        a: 'Five to ten, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      },
      { q: 'Do adults learn Python with you?', a: 'Yes, in adult groups or privately, often to automate reports or analyse data at work.' }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Waverley learners',
    html: 'To the south, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-randwick-sydney">Randwick</a> has its own page; across the harbour is <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mosman-sydney">Mosman</a>. For everywhere else, start from our <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney classes</a> or the statewide <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">NSW overview</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Waverley and Sydney',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-randwick-sydney', label: 'Randwick' },
    { href: '/online-coding-and-python-classes-in-mosman-sydney', label: 'Mosman' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-wvly .cg-hero-grid { align-items: center; gap: clamp(1.05rem, 3vw, 2.5rem); }
.cg-root.cg-wvly .cg-hero h1 { font-weight: 710; letter-spacing: -0.019em; line-height: 1.06; }
.cg-root.cg-wvly .cg-capsule { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-wvly .cg-eyebrow { letter-spacing: 0.13em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-wvly .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.014em; }
.cg-root.cg-wvly .cg-grid-3 { gap: clamp(0.75rem, 2vw, 1.65rem); }
.cg-root.cg-wvly .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-wvly .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wvly .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-wvly .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Waverley, ABS Census 2021 QuickStats, Waverley local government area LGA18050 (read 10 October 2026): 68,605 people; median age 35; 16,776 families; 32,775 private dwellings; 2.3 people per household; flats or apartments 64.1% (17,590); separate houses 16.0%; aged 30-34 12.6% (8,654); aged 25-29 10.9%; bachelor degree or higher 52.0% (30,052); professionals 41.8% (15,962); worked at home 55.1% (21,049, lockdown Census day); drove to work 19.9% (7,615). Transport for NSW station usage file, Bondi Junction Station Entry rows, October 2024 to August 2026: August 2026 533,333; August 2025 500,540; September 2025 544,205; eleven year-on-year pairs October 2025 to August 2026. NSW government schools file (Date_extracted 2026-10-02): Waverley Public School 1879, Bondi Public School 1883, Bondi Beach Public School 1923, Bronte Public School 1927, Rose Bay Secondary College 1982 (Dover Heights). NSW 2027 Eastern division Term 1: 3 February to 9 April. Sydney daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Negative indexing and slicing for year-on-year comparison on Bondi Junction monthly entries (23 months). e[-1] August 2026 533,333; e[-13] August 2025 500,540, change +6.6%; off-by-one e[-12] September 2025 544,205, change -2.0%. e[-24:-12] returns 11 values, not 12. Eleven year-on-year pairs: 7 up, 4 down; range -4.5% (April) to +6.6% (August). No annual totals computed. Script: scratchpad au/b4/wvly.py.',
    requiredMentions: ['68,605', '16,776', '32,775', '17,590', '30,052', '15,962', '21,049', '533,333', '500,540', 'Bronte Public School'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Waverley local government area (LGA18050).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA18050'
      },
      {
        claim: 'Transport for NSW, Train, Metro and Light Rail Station Monthly Usage from November 2024, based on Opal batch data (Creative Commons Attribution), file updated 15 September 2026.',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution), Date_extracted 2026-10-02.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'Python tutorial: lists, negative indices and slicing.', url: 'https://docs.python.org/3/tutorial/introduction.html#lists' },
      { claim: 'NSW Department of Education, 2027 term dates (Eastern division).', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Annual totals of station entries: not computed; monthly figures are compared one pair at a time.',
      'Why Bondi Junction entries rose or fell in any month: not explained; no cause was checked.',
      'Passenger numbers including untapped trips: not available; the file counts tap-on entries only.',
      'Names of schools for specific purposes: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Waverley Council, Transport for NSW, the NSW Department of Education or the ABS.'
    ]
  }
};
