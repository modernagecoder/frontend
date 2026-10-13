'use strict';
// Georges River, Sydney (cg- district page, Australia cluster Phase 8, row 211). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: how concentrated are train entries across the ten stations inside the Georges River council area,
// and what does the Herfindahl-Hirschman index say that a "biggest station" headline hides?
// Data: Transport for NSW, Train Station Entries and Exits (Opal, monthly, CC BY), file read 10 October 2026,
// months October 2024 to August 2026. Stations inside the Georges River LGA by our point-in-polygon check of the
// NSW Transport Theme station points (c) Spatial Services against ABS ASGS 2021 LGA boundaries: Hurstville,
// Kogarah, Mortdale, Riverwood, Penshurst, Carlton, Allawah, Kingsgrove, Beverly Hills, Oatley (Narwee station
// falls in Canterbury-Bankstown and is excluded). August 2026 entries: Hurstville 499,555 (39.57% of the ten),
// Kogarah 258,775 (20.50%), Mortdale 81,934, Riverwood 78,665, Penshurst 67,216, Carlton 65,941, Allawah 63,038,
// Kingsgrove 52,014, Beverly Hills 49,353, Oatley 45,930. Our calculation (scratchpad au/b2/p1_hhi.py): HHI 2,193.1
// (equivalent number of equal stations 4.56); without Hurstville 1,717.6 (5.82); largest share 39.57%, top three
// 66.56%; monthly HHI over 23 months between 2,105.5 (February 2026) and 2,203.7 (January 2026).
// Lesson family: Herfindahl-Hirschman concentration index; screened 0 page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Georges River LGA (LGA12930); NSW Department of Education master
// dataset (CC BY), Date_extracted 2026-10-02, rows with LGA "Georges River": 32.
// Excluded: income, rent, mortgage, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and selective columns of the master dataset.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'GEORGES RIVER',
    label: 'Georges River, Sydney',
    blurb: 'Georges River learners, and a project that measures how concentrated train entries are across the council area\'s ten stations.'
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
  slug: 'best-coding-and-ai-classes-in-georges-river-sydney',
  code: 'gres',
  accent: '#914641',
  accentRationale: 'Georges River: a weathered brick (hue 4), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 6.65:1 on white and 5.4:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Georges River',
    eyebrow: 'Georges River council area, Sydney, New South Wales',
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
  routeLabel: 'Georges River, Sydney',
  title: 'Best Coding and AI Classes in Georges River, Sydney',
  description: 'Live online coding, Python and AI classes for Hurstville and the wider Georges River council area: ages 6 to 67, small groups or one to one, first lesson free.',
  ogDescription: 'Coding and AI classes for Georges River, with a project that measures how concentrated train entries are across the ten stations in the council area.',
  twitterDescription: 'Georges River coding, Python and AI classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Georges River',
    description: 'Level-matched online coding, Python, data analysis and AI for children, teenagers and adults in the Georges River council area of Sydney, taught live in English.'
  },
  h1: 'Coding and AI classes in Georges River',
  capsuleQ: 'Where do Georges River learners find the best coding and AI classes?',
  capsule: 'Through live online classes, with a teacher coding next to every learner: Scratch for younger children, then Python, data work and AI for teenagers and adults. The 2021 Census counted 152,274 people in the Georges River council area, whose railway stations include Hurstville, Mortdale, Penshurst and Oatley, and more than a third of its occupied homes were flats or apartments.',
  lead: 'Hurstville is busy; everyone in the area knows that. The question a programmer asks is how busy compared with what. Transport for NSW publishes Opal entries for every station each month, and in August 2026 the ten stations inside the Georges River council area logged entries ranging from 45,930 at Oatley to 499,555 at Hurstville. One number, the Herfindahl-Hirschman index, sums up how lopsided that spread is, and this page builds it from scratch in Python.',
  wa: 'Hello Modern Age Coders, we would like a free coding or AI lesson for a learner in the Georges River area.',
  picks: {
    eyebrow: 'Course picks for Georges River',
    h2: 'Where a Georges River learner might start',
    intro: 'Each course below leads somewhere near the station project on this page. A free first lesson sorts out which one fits, with no card details asked for.',
    items: [
      {
        course: 'scratch-programming-complete-course',
        band: 'Ages 6 to 11',
        note: 'Animations and games in blocks, including a simple counter that tallies how often each sprite is clicked.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 12 to 17',
        note: 'Python from the first print statement to reading files, building lists and working out shares and totals.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Real public tables, summary statistics and charts, with the habit of asking what each number really measures.'
      },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Spreadsheets, SQL and Python for work, including market-share style measures like the one on this page.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Georges River in the Census',
      h2: 'A council area of 38 square kilometres south of the city',
      intro: 'The statistics bureau\'s 2021 QuickStats for the Georges River local government area, set beside New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Headline counts for the Georges River council area, 2021',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '152,274'],
            ['Families', '41,152'],
            ['Private dwellings', '58,386'],
            ['Average people per household', '2.8'],
            ['Land area (ABS boundary)', 'About 38.3 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Georges River compared with the state and the country',
          head: ['Indicator', 'Georges River', 'NSW', 'Australia'],
          rows: [
            ['Homes that are separate houses', '51.6% (27,051 homes)', '65.6%', '72.3%'],
            ['Homes that are flats or apartments', '36.2% (18,946 homes)', '21.7%', '14.2%'],
            ['Median age, years', '38', '39', '38'],
            ['Bachelor degree or higher, residents 15 and over', '34.1% (43,706 people)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Half houses, a third flats',
              p: 'Separate houses still make up just over half of occupied homes, yet the flat and apartment share is well above the state level, a mix that sits between the inner city and the outer suburbs.'
            },
            {
              h3: 'Many people in their early twenties',
              p: 'The Census counted 11,587 residents aged 20 to 24, which is 7.6% of the area against 6.1% for New South Wales.'
            },
            {
              h3: 'Professional work',
              p: 'Professionals were the largest occupation group among employed residents, 19,712 people or 28.0%, slightly above the state share of 25.8%.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau adds small random adjustments to protect privacy, so its tables rarely add up exactly to the printed totals. Every Census figure here is quoted as released, and we have not built any total by adding published rows together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'How lopsided are train entries across Georges River?',
      intro: 'Transport for NSW releases monthly Opal entries for each station. We placed every station point inside the Georges River boundary using the statistics bureau\'s council map, kept the ten that fall inside, and measured how concentrated their August 2026 entries are.',
      body: [
        {
          kind: 'table',
          caption: 'Entries in August 2026 and each station\'s share of the ten (shares are our arithmetic)',
          head: ['Station', 'Entries', 'Share of the ten'],
          rows: [
            ['Hurstville', '499,555', '39.57%'],
            ['Kogarah', '258,775', '20.50%'],
            ['Mortdale', '81,934', '6.49%'],
            ['Riverwood', '78,665', '6.23%'],
            ['Penshurst', '67,216', '5.32%'],
            ['Carlton', '65,941', '5.22%'],
            ['Allawah', '63,038', '4.99%'],
            ['Kingsgrove', '52,014', '4.12%'],
            ['Beverly Hills', '49,353', '3.91%'],
            ['Oatley', '45,930', '3.64%']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Concentration measures for the same month (our calculation)',
          head: ['Measure', 'Value', 'What it means'],
          rows: [
            ['Herfindahl-Hirschman index', '2,193', 'Sum of squared percentage shares; 1,000 would mean ten equal stations'],
            ['Equivalent number of equal stations', '4.56', '10,000 divided by the index'],
            ['Largest single share', '39.57%', 'Hurstville alone'],
            ['Top three shares together', '66.56%', 'Hurstville, Kogarah and Mortdale'],
            ['Index with Hurstville left out', '1,718', 'The other nine behave like 5.82 equal stations']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: '1. Shares',
              p: 'Divide each station\'s entries by the ten-station sum. In Python that is one list comprehension, and the shares must add to 1 apart from rounding.'
            },
            {
              h3: '2. Square and add',
              p: 'Squaring rewards big shares: Hurstville\'s 39.57% contributes 1,566 points to the index on its own, while Oatley\'s 3.64% contributes 13.'
            },
            {
              h3: '3. Read it backwards',
              p: '10,000 divided by 2,193 is 4.56, so the area behaves as if its entries were split evenly across fewer than five stations, not ten.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why the index beats a headline',
          p: 'Saying Hurstville handles 40% of the entries hides what happens to the other 60%. The index weighs every station, so it moves if Kogarah grows or if four small stations shrink at once. Across the 23 months in the file it stayed between 2,105.5 (February 2026) and 2,203.7 (January 2026), which tells a learner the pattern is stable rather than a one-month quirk.'
        },
        {
          kind: 'p',
          text: 'Entries count Opal taps at the gates, not individual people, and one person can tap in many times in a month. Narwee station sits just outside the council boundary on the bureau\'s map, so it is not one of the ten. The ten-station sum is our own arithmetic for working out shares, not a published Georges River total, and Transport for NSW has no part in the calculation.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Taking it further',
      h2: 'What else the same few lines of code can measure',
      intro: 'Once a learner can compute shares and the index, small changes open up new questions.',
      body: [
        {
          kind: 'table',
          caption: 'Next experiments on the Georges River station file',
          head: ['Question', 'Change to the code', 'Idea it teaches'],
          rows: [
            [
              'Is the spread the same for exits?',
              'Filter on Exit instead of Entry',
              'Checking that a result is not an artefact of one column'
            ],
            ['Does concentration change by month?', 'Loop over the 23 months', 'Turning one calculation into a time series'],
            ['What if Kogarah doubled?', 'Edit one value and recompute', 'Sensitivity of a summary measure'],
            [
              'How does Georges River compare with a neighbour?',
              'Repeat for another council\'s stations',
              'Fair comparison needs the same method'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'Competition regulators use the same index to judge whether a market is dominated by a few firms, and data teams use it to describe how traffic is spread across pages, servers or products. A learner who has built it on local stations understands what the number rewards and what it ignores.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Read the CSV, clean the station names, and compute shares and the index in plain Python before touching any library.' },
            { h3: 'University students', p: 'Compare the index with entropy-based measures and explain when the two disagree.' },
            { h3: 'Adults', p: 'Apply concentration measures to sales, customers or website traffic, and present them without overstating what they show.' }
          ]
        },
        {
          kind: 'p',
          text: 'The figures come from open files published by Transport for NSW, the education department and the statistics bureau. None of those agencies is connected with us, and every share and index value above is our own calculation.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Georges River',
      h2: 'Schools from 1870, and a calendar to plan around',
      intro: 'A little more from the same public files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: '32 government schools',
              p: 'The education department\'s master dataset lists 32 government schools in the council area: 19 primary schools, one infants school, nine secondary schools and three schools for specific purposes.'
            },
            {
              h3: 'Early first teachers',
              p: 'Kogarah Public School records its first teacher in 1870, Peakhurst Public School in 1871 and Hurstville Public School in 1876, the three earliest dates in the file for this area.'
            },
            {
              h3: 'Terms in 2027',
              p: 'In the Eastern division, students are at school for Term 1 from Wednesday 3 February to Friday 9 April 2027, after staff development days that begin on Thursday 28 January.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'A warm-up exercise in the same files',
          p: 'Station names in the Transport for NSW file carry a double space before the word Station. Writing one small function that collapses repeated spaces, then checking that all ten names now match the map, is a tidy first task before any maths begins.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting clicks in Scratch to market measures in Python',
    intro: 'Ages are a guide; the free first lesson decides where each learner begins.',
    cols: [
      {
        band: 'Ages 6 to 11',
        h3: 'Counting in blocks',
        p: 'Scratch projects that keep score, compare totals and turn counts into simple bar charts.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 12 to 15',
        h3: 'First Python',
        p: 'Variables, loops and lists, then reading a small file and working out percentages.',
        courses: ['python-complete-masterclass-teens', 'maths-through-coding']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Data and models',
        p: 'Real datasets, summary measures, charts and first machine learning models.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Analysis for work',
        p: 'SQL, Python and clear reporting of shares, trends and uncertainty.',
        courses: ['data-analysis-mastery-course-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can name the busiest station. Why should a Georges River learner compute the index?',
    intro: 'Because the useful answer is rarely the single biggest number, and AI tools tend to stop there.',
    p1: 'Ask a chatbot which station in the area is busiest and it will usually say Hurstville, which is true and not very informative. Ask how evenly the area\'s traffic is spread and the answer depends on a measure, a time period and a list of stations, and an AI that skips those steps can sound confident while comparing the wrong things. Building the index by hand shows exactly which choices go into it.',
    p2: 'A learner who has squared and summed ten station shares checks what an AI tool did before trusting its summary: which stations it included, whether it used entries or exits, and whether the month was typical. That habit carries from Opal data to any dashboard an AI produces later.',
    closer: 'Summaries are cheap in 2026; the learner who knows how one is built is the one who can tell a fair summary from a misleading one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Oatley to Kingsgrove, the same live class',
    intro: 'The council area runs from the Georges River in the south to Kingsgrove in the north, and an online lesson reaches every street in it equally.',
    cells: [
      { h3: 'Nothing to travel to', p: 'Learners join from home, so a class works the same for a family near Oatley station as for one near Riverwood.' },
      { h3: 'Matched to NSW school years', p: 'Teachers know the NSW stages and syllabus names, and lessons pause for the state school holidays.' },
      {
        h3: 'Try before paying',
        p: 'The opening session runs exactly like any other lesson, and it closes with the teacher recommending a course, a level and a weekly slot. No payment is taken that day.'
      },
      { h3: 'Groups set by level', p: 'Fifteen to twenty learners who are at the same stage, whatever their age, or one to one if that suits better.' },
      { h3: 'A steady weekly rhythm', p: 'Usually two lessons a week at a fixed time, about eight a month, with breaks planned around school holidays.' },
      {
        h3: 'Teachers in India',
        p: 'A 5pm Hurstville lesson in summer starts at 11:30am India time; once Sydney leaves daylight saving it starts at 12:30pm there.'
      }
    ],
    spec: {
      title: 'Sydney time and India time',
      p: 'Sydney starts daylight saving on Sunday 4 October 2026 and ends it on Sunday 4 April 2027. India does not change its clocks, so the gap to our teachers moves by an hour twice a year, and we always quote lesson times in Sydney time.'
    }
  },
  fees: {
    h2: 'What lessons cost for Georges River learners',
    intro: 'Three plain figures, nothing hidden.',
    first: 'One full lesson free, ending with a suggested course, level and time.',
    group: 'A month of lessons, usually eight, shared with fifteen to twenty learners at the same level.',
    private: 'Around eight lessons a month on the same pattern, one teacher with one learner.',
    closer: 'Outside India, invoices are issued in US dollars, which keeps one price for every household between Kingsgrove and Oatley. Payment starts only after the trial has settled a course and a time; breaks, missed lessons and switching format are covered on the pricing page.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Start with a name, an age and a hobby',
    intro: 'With those three things a teacher can shape the opening lesson around the learner. Younger children often begin by building a tally game in Scratch, while older students and adults sometimes ask to work on the station data straight away.',
    success: 'Thank you. We will be in touch soon about a class in the Georges River area.'
  },
  faq: {
    h2: 'Georges River coding and AI class questions',
    intro: 'What families and adult learners in the area usually ask first.',
    items: [
      {
        q: 'How many people live in the Georges River council area?',
        a: 'The statistics bureau\'s QuickStats for the Georges River local government area records 152,274 residents on Census night 2021, with a median age of 38.'
      },
      {
        q: 'What is the Herfindahl-Hirschman index?',
        a: 'It is a measure of concentration: square each participant\'s percentage share and add the squares. Ten equal shares give 1,000, a single participant with everything gives 10,000, and higher numbers mean the total is dominated by fewer participants.'
      },
      {
        q: 'What does the Georges River station project show?',
        a: 'Using August 2026 Opal entries for the ten stations inside the council area, the index comes to 2,193, so the area behaves like 4.56 equal stations. Hurstville takes 39.57% of the ten-station sum on its own.'
      },
      {
        q: 'Which suburbs does the council area include?',
        a: 'The stations of Hurstville, Penshurst, Mortdale, Oatley, Allawah and Carlton all sit inside the council boundary on the statistics bureau\'s map. We have not printed a full suburb list, because several suburbs on the edges, such as Kogarah and Kingsgrove, are shared with neighbouring councils.'
      },
      {
        q: 'Is there help for Year 11 and 12 courses?',
        a: 'Yes. Lessons for older students follow the NSW Stage 6 syllabuses and the HSC calendar. Anything a school marks has to be the student\'s own work; our teachers explain methods and never write assessed tasks.'
      },
      {
        q: 'What times do lessons run?',
        a: 'Families pick an after-school or weekend slot at the trial, always stated in Sydney time. India is 5 hours 30 minutes behind Sydney during daylight saving and 4 hours 30 minutes behind the rest of the year.'
      },
      {
        q: 'How young can a learner be?',
        a: 'Six. Younger learners begin with Scratch blocks, simple games and drawings; the station project on this page is aimed at older students and adults.'
      },
      {
        q: 'Do you have a centre in Hurstville or Kogarah?',
        a: 'No, and we do not claim one. All lessons are live online and we have no premises in Australia. A learner needs a laptop or desktop with sound and a steady connection; the phone number shown is Indian.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Georges River learners?',
        a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Fifteen to twenty, grouped by level, pace and goal rather than age or suburb. If no group fits the time a learner needs, one-to-one lessons are offered instead.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Georges River learners',
    html: 'Sydney as a whole has its own guide, <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>, and parents of primary-age children can read <a class="cg-inline-link" href="/coding-classes-for-kids-sydney">coding classes for kids in Sydney</a>. Year 11 and 12 students taking computing may want <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>, while <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a> looks at the state beyond Sydney.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Georges River and Sydney',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/coding-classes-for-kids-sydney', label: 'Coding for kids in Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-gres .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.2rem); }
.cg-root.cg-gres .cg-hero h1 { font-weight: 740; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-gres .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1.1rem; }
.cg-root.cg-gres .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-gres .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-gres .cg-grid-3 { gap: clamp(1rem, 2vw, 1.7rem); }
.cg-root.cg-gres .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-gres .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gres .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-gres .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Georges River, ABS Census 2021 QuickStats, Georges River local government area LGA12930 (read 10 October 2026): 152,274 people; median age 38 (New South Wales 39, Australia 38); 41,152 families; 58,386 private dwellings; average 2.8 people per household; flats or apartments 36.2% (18,946), separate houses 51.6% (27,051); bachelor degree or higher 34.1% (43,706); aged 20 to 24 11,587 (7.6%); professionals 19,712 (28.0%). ABS ASGS 2021 LGA boundary area 38.3375 square kilometres. NSW Department of Education 2027 calendar, Eastern division: students Term 1 Wednesday 3 February to Friday 9 April 2027; Term 1 school development days Thursday 28 January to Tuesday 2 February 2027.',
    localProject: 'Herfindahl-Hirschman index. Transport for NSW Train Station Entries and Exits (CC BY), August 2026 entries for the ten stations whose NSW Transport Theme points ((c) Spatial Services) fall inside the ABS Georges River LGA polygon (our check; Narwee station falls in Canterbury-Bankstown): Hurstville 499,555; Kogarah 258,775; Mortdale 81,934; Riverwood 78,665; Penshurst 67,216; Carlton 65,941; Allawah 63,038; Kingsgrove 52,014; Beverly Hills 49,353; Oatley 45,930. Shares of the ten-station sum (our arithmetic): Hurstville 39.57%, Kogarah 20.50%. HHI 2,193.1, equivalent 4.56 stations; without Hurstville 1,717.6 (5.82); top three 66.56%; monthly HHI October 2024 to August 2026 between 2,105.5 (February 2026) and 2,203.7 (January 2026).',
    requiredMentions: ['152,274', '41,152', '58,386', '18,946', '43,706', 'Kogarah Public School', 'Peakhurst Public School', '499,555', '258,775'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Georges River local government area (LGA12930): people, median age, families, dwellings, dwelling structure, education, occupation, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA12930'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits: monthly station usage from Opal data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) local government area boundaries, used for the station location check.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'NSW Department of Education, 2027 term dates, Eastern division, first to last days for students and school development days.',
        url: 'https://education.nsw.gov.au/schooling/calendars/2027'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any reason why Hurstville or Kogarah carry most of the entries: not verified, so no cause is given.',
      'A full list of suburbs in the council area: not printed, because edge suburbs are shared with Bayside and Canterbury-Bankstown.',
      'Narwee station as part of Georges River: its station point falls inside Canterbury-Bankstown on the ABS boundary, so it is excluded.',
      'Treating Opal entries as a count of people: entries are gate taps, so the page never calls them passengers or residents.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective-school columns of the master dataset: excluded by the cluster rules.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, Georges River Council or the ABS.'
    ]
  }
};
