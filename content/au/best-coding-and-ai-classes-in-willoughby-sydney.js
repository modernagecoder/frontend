'use strict';
// Willoughby, Sydney (cg- district page, Australia cluster Phase 8, row 215). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council-area page for the City of Willoughby (LGA18250) under Sydney and NSW.
// Spine: if you add up 22 monthly percentage changes in Chatswood station entries, why do you get the wrong
// total growth, and how do log differences fix it?
// Data: Transport for NSW, Train Station Entries and Exits (Opal, monthly, CC BY), file read 10 October 2026,
// October 2024 to August 2026. Stations whose NSW Transport Theme points ((c) Spatial Services, location check
// only) fall inside the ABS 2021 Willoughby LGA polygon: Chatswood (Station_Type "Metro Shared"), Artarmon and
// St Leonards (Train).
// Our checks (scratchpad au/b2/p5_wlb.py): Chatswood 805,797 entries (October 2024) to 949,108 (August 2026);
// sum of 22 monthly percentage changes 21.75%, actual change 17.79%; sum of log differences 0.16369 equals
// ln(949,108 / 805,797), and exp(0.16369) - 1 = 17.79%. Mean monthly change 0.989%, geometric mean 0.747%.
// January 2025 -9.12% (log -9.56), February 2025 +13.02% (log +12.24). Artarmon 102,749 to 103,516: summed
// percentages +11.62%, actual +0.75%. St Leonards 263,333 to 257,822: summed percentages +10.65%, actual -2.09%.
// Lesson family: log differences vs percentage changes; screened 0 page hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Willoughby LGA (LGA18250); NSW Department of Education master dataset
// (CC BY), Date_extracted 2026-10-02, rows with LGA "Willoughby": 11 (the hospital school is counted, not named).
// Excluded: income, rent, mortgage, tenure, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and selective columns.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WILLOUGHBY',
    label: 'Willoughby, Sydney',
    blurb: 'Coding and AI for the City of Willoughby, with a Chatswood data project on why percentage changes do not add up.'
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
  slug: 'best-coding-and-ai-classes-in-willoughby-sydney',
  code: 'wlby',
  accent: '#315335',
  accentRationale: 'Willoughby: a deep fern green (hue 124), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with strong contrast on white and on the paper tints',
  pageType: 'city',
  place: {
    name: 'Willoughby',
    eyebrow: 'City of Willoughby, Sydney, New South Wales',
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
  routeLabel: 'Willoughby, Sydney',
  title: 'Best Coding and AI Classes in Willoughby, Sydney',
  description: 'Live online coding and AI classes for Chatswood, Artarmon and the rest of the City of Willoughby: ages 6 to 67, groups or one to one, first lesson free.',
  ogDescription: 'Coding and AI for Willoughby, with a Chatswood station project showing why monthly percentage changes do not add up and log differences do.',
  twitterDescription: 'Willoughby and Chatswood coding and AI classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Willoughby',
    description: 'Level-matched online coding, Python, data and AI lessons for children, teenagers and adults in the City of Willoughby, Sydney, taught live in English.'
  },
  h1: 'Coding and AI classes in Willoughby',
  capsuleQ: 'How do Willoughby families choose the best coding and AI classes?',
  capsule: 'Look for live teaching, small groups by level, and real projects. Our online classes run from Scratch for six-year-olds to Python, data and AI for teenagers and adults. The City of Willoughby, about 22 square kilometres, had 75,613 residents in the 2021 Census, and 51.0% of its families were couples with children.',
  lead: 'Chatswood station logged 805,797 Opal entries in October 2024 and 949,108 in August 2026. Add up the 22 month-to-month percentage changes in between and you get 21.75%. The real growth is 17.79%. Nothing is wrong with the data; percentages simply do not add. Switch to log differences and the 22 changes sum to 0.16369, which turns back into exactly 17.79%. At St Leonards the same mistake even flips the sign.',
  wa: 'Hello Modern Age Coders, we would like a free coding or AI lesson for a learner in Willoughby.',
  picks: {
    eyebrow: 'Course picks for Willoughby',
    h2: 'Courses for numerate learners of every age',
    intro: 'All four courses reach the Chatswood growth project at some point. The trial lesson confirms the right one, without asking for payment details.',
    items: [
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Percentages, ratios and growth turned into code a learner can test.' },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Python with real data files: cleaning, charting and summarising change.'
      },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 17', note: 'How models learn from data, including why many use logs of growing quantities.' },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Analysis for study and work, with growth rates reported correctly.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Willoughby in the 2021 Census',
      h2: 'Families with children, apartments and houses side by side',
      intro: 'From the statistics bureau\'s QuickStats for the Willoughby local government area, compared with New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'City of Willoughby headline counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '75,613'],
            ['Families', '20,701'],
            ['All private dwellings', '31,141'],
            ['Average household size', '2.6 people'],
            ['Council area', 'About 22 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Willoughby beside the state and the country',
          head: ['Indicator', 'Willoughby', 'NSW', 'Australia'],
          rows: [
            ['Couple families with children', '51.0% (10,550)', '44.7%', '43.7%'],
            ['Separate houses among occupied homes', '44.7% (12,337)', '65.6%', '72.3%'],
            ['Bachelor degree or higher', '53.1% (32,588)', '27.8%', '26.3%'],
            ['Professionals among employed residents', '41.4% (15,460)', '25.8%', '24.0%'],
            ['Children aged 5 to 9', '6.9% (5,182)', '6.2%', '6.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'A near even split', p: 'Flats or apartments are 47.1% of occupied homes and separate houses 44.7%, with townhouses and terraces making up 7.8%.' },
            {
              h3: 'Young families',
              p: 'Half of Willoughby\'s families are couples with children, and children aged 5 to 9 are a larger share of residents than across the state.'
            },
            {
              h3: 'Degrees and professions',
              p: 'More than half of residents hold a bachelor degree or higher, and managers add 20.7% of workers to the 41.4% who are professionals.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Census counts are slightly randomised to protect privacy, so table rows may not match totals exactly. We quote each figure as the bureau published it and never construct a total from its parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Why Chatswood\'s monthly percentages add up to the wrong answer',
      intro: 'Transport for NSW publishes Opal entries for every station each month. On our location check three stations fall inside the Willoughby boundary, and their 23 months make a clean lesson in growth arithmetic.',
      body: [
        {
          kind: 'table',
          caption: 'Adding monthly changes vs the true change, October 2024 to August 2026 (our calculation)',
          head: ['Station', 'Entries, Oct 2024', 'Entries, Aug 2026', 'Sum of monthly % changes', 'True change'],
          rows: [
            ['Chatswood', '805,797', '949,108', '+21.75%', '+17.79%'],
            ['Artarmon', '102,749', '103,516', '+11.62%', '+0.75%'],
            ['St Leonards', '263,333', '257,822', '+10.65%', '-2.09%']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Two Chatswood months in both measures',
          head: ['Month', 'Entries', 'Percentage change', 'Log difference x 100'],
          rows: [
            ['January 2025', '686,889', '-9.12', '-9.56'],
            ['February 2025', '776,344', '+13.02', '+12.24']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why percentages drift',
              p: 'A fall of 9.12% followed by a rise of 13.02% looks like +3.9 in total, but the rise is measured from a smaller base. Over 22 months these small errors pile up in one direction.'
            },
            {
              h3: 'Why logs behave',
              p: 'The log difference ln(new / old) for each month adds exactly: the 22 Chatswood values sum to 0.16369, the same as ln(949,108 / 805,797).'
            },
            { h3: 'Back to a percentage', p: 'exp(0.16369) minus 1 is 0.1779, so the log route returns the true 17.79% growth with no correction needed.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'The St Leonards trap',
          p: 'Entries at St Leonards fell from 263,333 to 257,822, a drop of 2.09%. Yet the monthly percentage changes sum to +10.65%. A report built by adding them would say the station grew when it shrank. Summing log differences gives -0.02115, which converts back to the correct -2.09%.'
        },
        {
          kind: 'p',
          text: 'The same idea explains averages: Chatswood\'s simple mean monthly change is 0.989%, while the steady monthly rate that reproduces the real growth is 0.747%. Entries are Opal gate taps rather than people, Chatswood appears in the file with the station type "Metro Shared", and every percentage and log value here is our own calculation from the published counts.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Beyond the project',
      h2: 'Where log thinking turns up next',
      intro: 'Once learners trust log differences on station data, the same tool appears all over programming, maths and AI.',
      body: [
        {
          kind: 'table',
          caption: 'Follow-on exercises',
          head: ['Exercise', 'Code or maths', 'Idea it unlocks'],
          rows: [
            ['Chart Chatswood on a log scale', 'matplotlib with a log y-axis', 'Equal steps mean equal percentage growth'],
            ['Compound growth of savings', 'A loop compared with the formula', 'Why repeated percentages multiply'],
            ['Model loss in machine learning', 'Log loss for a simple classifier', 'Why AI training uses logarithms'],
            ['Growth of three stations', 'One function, three series', 'Fair comparison of big and small numbers']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Upper primary', p: 'Explore with a calculator: a 50% fall then a 50% rise does not return to the start. Then try it in Scratch.' },
            { h3: 'High school', p: 'Write the Chatswood comparison in Python and link it to logarithms in the NSW Mathematics syllabus.' },
            { h3: 'Adults', p: 'Fix growth reports at work that add monthly percentages, and present compound rates that reconcile with totals.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, the statistics bureau and the education department published the open data used here; they have no connection with us, and the calculations are our own.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Willoughby schools',
      h2: 'Eleven public schools, the oldest from 1863',
      intro: 'From the education department\'s government school location file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The school count',
              p: 'Eleven government schools sit in the City of Willoughby in the master dataset: six primary schools, three secondary schools and two schools for specific purposes.'
            },
            {
              h3: 'Early first teachers',
              p: 'Willoughby Public School records a first teacher in 1863, Chatswood Public School in 1883 and Artarmon Public School in 1910.'
            },
            { h3: 'More recent openings', p: 'Chatswood High School dates from 1959, Bradfield College from 1993 and Naremburn School from 2001.' }
          ]
        },
        {
          kind: 'spec',
          title: 'NSW school year 2027',
          p: 'Eastern division students return for Term 1 on Wednesday 3 February 2027; summer holidays run from Friday 18 December 2026 to Wednesday 27 January 2027.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting clicks in Scratch to modelling growth in Python',
    intro: 'A guide only; the free trial lesson decides where each learner starts.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and counting',
        p: 'Games with scores, timers and simple variables, where numbers first become code.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Maths in code',
        p: 'Percentages, ratios and patterns tested in Python, building number sense for high school.',
        courses: ['maths-through-coding', 'python-ai-kids-masterclass']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data and AI',
        p: 'Real data files, growth rates, charts and first machine learning models.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Analysis that holds up',
        p: 'Statistics, data pipelines and AI systems built on sound arithmetic.',
        courses: ['data-analysis-mastery-course-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can a Willoughby learner trust an AI to calculate growth?',
    intro: 'Only after learning to check it, which is what this page\'s project trains.',
    p1: 'Ask a chatbot for the total growth across a table of monthly percentages and it may add them, exactly the mistake that turns St Leonards\' fall into a rise. The answer arrives with confident wording and tidy formatting, and nothing in it flags the error.',
    p2: 'A learner who has run the Chatswood comparison knows the sum should match ln(last / first), and can test any AI answer in one line of Python. That habit of checking a result against a simple identity is what separates using AI from being misled by it.',
    closer: 'In 2026 AI can produce the report; a Willoughby learner who knows why percentages do not add is the one who spots when the report is wrong.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online classes that fit a Willoughby week',
    intro: 'Classes come to the learner on a laptop, wherever they are in the council area, from Castle Cove to Naremburn.',
    cells: [
      { h3: 'Taught live', p: 'A real teacher on video reads the learner\'s code as it is typed and explains each correction.' },
      { h3: 'In step with NSW', p: 'Lessons use NSW stage and syllabus language, and the timetable breaks for state school holidays.' },
      { h3: 'Start with a free lesson', p: 'The first full lesson costs nothing; the teacher then suggests a course, level and regular time.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners working at one level, or one-to-one teaching if that suits better.' },
      { h3: 'A steady rhythm', p: 'Two lessons a week at a set time, about eight a month, with holidays planned ahead.' },
      {
        h3: 'Teachers in India',
        p: 'A 4pm Willoughby lesson during daylight saving starts at 10:30am India time, and at 11:30am once Sydney returns to standard time.'
      }
    ],
    spec: {
      title: 'Sydney daylight saving',
      p: 'Clocks in Sydney go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027. India keeps one time all year, so our teachers\' offset shifts twice a year; every time we quote is in Sydney time.'
    }
  },
  fees: {
    h2: 'Fees for Willoughby learners',
    intro: 'Clear prices that do not change by course.',
    first: 'A complete first lesson free, followed by a suggested course, level and time.',
    group: 'Group learning for a month, normally eight lessons, fifteen to twenty learners at one level.',
    private: 'One teacher and one learner, around eight lessons a month.',
    closer: 'Invoices for families outside India are in US dollars, so Artarmon and Northbridge households pay the same. Payment follows the trial only once a course and time are agreed, and the pricing page explains breaks, missed lessons and changes of format.'
  },
  reviewsH2: 'Google reviews from our families',
  book: {
    h2: 'Share an age and an interest to begin',
    intro: 'With those two details a teacher can prepare a first lesson. A Year 3 child might build a Scratch clicker game; a teenager or adult might reproduce the Chatswood growth comparison in Python.',
    success: 'Thank you. We will contact you soon to arrange a Willoughby class.'
  },
  faq: {
    h2: 'Willoughby coding and AI questions',
    intro: 'Common questions from families across the council area.',
    items: [
      {
        q: 'How many people live in the City of Willoughby?',
        a: 'The 2021 Census QuickStats for the Willoughby local government area counted 75,613 residents, with a median age of 39 and 20,701 families.'
      },
      {
        q: 'Why can monthly percentage changes not be added?',
        a: 'Each percentage is measured from a different starting value, so adding them double-counts or misses growth. Log differences avoid this: they add exactly, and the total converts back to the true percentage change.'
      },
      {
        q: 'What does the Chatswood project find?',
        a: 'From October 2024 to August 2026 Chatswood entries rose 17.79%, but the 22 monthly percentage changes sum to 21.75%. At St Leonards the summed percentages show growth of 10.65% although entries fell 2.09%.'
      },
      {
        q: 'Which stations are inside the Willoughby council area?',
        a: 'Our location check against the statistics bureau\'s boundary places three stations inside it: Chatswood, Artarmon and St Leonards.'
      },
      {
        q: 'Do classes help with school maths?',
        a: 'Coding projects often use the same ideas as the NSW Mathematics syllabus, such as percentages and logarithms. Our teachers explain methods, and any assessed school work remains the student\'s own.'
      },
      {
        q: 'When do lessons run?',
        a: 'Times are agreed at the trial, typically after school or at weekends, and quoted in Sydney time. India is 5 hours 30 minutes behind Sydney in summer and 4 hours 30 minutes behind in winter.'
      },
      {
        q: 'How young can a learner start?',
        a: 'From six, with Scratch. Python and data projects such as the Chatswood comparison usually begin around 12 to 14.'
      },
      {
        q: 'Do you teach from a centre in Chatswood?',
        a: 'No. Every lesson is live online and we have no premises anywhere in Australia. A computer with sound and a stable internet connection is enough, and the contact number we display is in India.',
        boiler: true
      },
      {
        q: 'How much do coding classes in Willoughby cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight in total, with fifteen to twenty learners; one-to-one is USD 150 a month at the same frequency. Fees start only after the course and time are agreed.',
        boiler: true
      },
      {
        q: 'How many learners are in a group?',
        a: 'Fifteen to twenty, placed by level and goals rather than by age or school. If no group fits the learner\'s availability, one-to-one lessons are arranged.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'More to read',
    h2: 'Further guides for Willoughby families',
    html: 'For the whole city see <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. Families of younger children can browse <a class="cg-inline-link" href="/coding-classes-for-kids-sydney">coding classes for kids in Sydney</a>, and older students thinking about AI can read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>. The state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message on WhatsApp'
  },
  footerHeading: 'Willoughby and the north shore',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/ai-and-programming-classes-in-north-sydney-sydney', label: 'North Sydney' },
    { href: '/ai-and-programming-classes-in-ku-ring-gai-sydney', label: 'Ku-ring-gai' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-wlby .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-wlby .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.12; }
.cg-root.cg-wlby .cg-capsule { background: rgba(49, 83, 53, 0.06); padding: 0.9rem 1.1rem; border-radius: 4px; }
.cg-root.cg-wlby .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-wlby .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-wlby .cg-grid-3 { gap: clamp(1.05rem, 2.3vw, 1.85rem); }
.cg-root.cg-wlby .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-wlby .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-wlby .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-wlby .cg-callout { border-left-width: 4px; border-left-style: double; }
`,
  dossier: {
    curriculumAuthority: 'Willoughby, ABS Census 2021 QuickStats, Willoughby local government area LGA18250 (read 10 October 2026): 75,613 people; median age 39; 20,701 families; 31,141 private dwellings; average 2.6 people per household; couple families with children 51.0% (10,550) (NSW 44.7%, Australia 43.7%); separate houses 44.7% (12,337), flats or apartments 47.1%, semi-detached 7.8% (2,145); bachelor degree or higher 53.1% (32,588); professionals 41.4% (15,460), managers 20.7% (7,726); aged 5 to 9 6.9% (5,182). ABS ASGS 2021 LGA boundary area 22.43 square kilometres. NSW Department of Education 2027 calendar, Eastern division: students Term 1 from Wednesday 3 February 2027; summer holidays Friday 18 December 2026 to Wednesday 27 January 2027.',
    localProject: 'Log differences vs percentage changes. Transport for NSW Train Station Entries and Exits (CC BY), October 2024 to August 2026. Three stations inside the ABS Willoughby LGA polygon by NSW Transport Theme points ((c) Spatial Services): Chatswood (Metro Shared), Artarmon, St Leonards. Chatswood 805,797 to 949,108: summed monthly percentages 21.75%, true 17.79%, summed log differences 0.16369 = ln(last/first); mean monthly 0.989% vs geometric 0.747%; January 2025 -9.12% (log -9.56), February 2025 +13.02% (log +12.24). Artarmon 102,749 to 103,516: summed +11.62%, true +0.75%. St Leonards 263,333 to 257,822: summed +10.65%, true -2.09%, summed logs -0.02115. NSW schools master dataset rows with LGA Willoughby: 11 (6 primary, 3 secondary, 2 SSP); Willoughby Public School 1863, Chatswood Public School 1883, Artarmon Public School 1910, Chatswood High School 1959, Bradfield College 1993, Naremburn School 2001.',
    requiredMentions: ['75,613', '20,701', '31,141', '12,337', '32,588', 'Willoughby Public School', 'Bradfield College', '949,108', '257,822'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Willoughby local government area (LGA18250): people, median age, families, dwellings, dwelling structure, family composition, occupation, education, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA18250'
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
        claim: 'NSW Department of Education, 2027 term dates and school holidays, Eastern division.',
        url: 'https://education.nsw.gov.au/schooling/calendars/2027'
      },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any reason for the growth at Chatswood or the fall at St Leonards: not verified, so no cause is given.',
      'Treating Opal entries as a count of people: entries are gate taps.',
      'Naming the hospital school in the Willoughby rows: counted in the total but not named.',
      'Income, rent, mortgage, tenure, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Enrolment, ICSEA, Indigenous, LBOTE and selective columns of the master dataset: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, Willoughby City Council or the ABS.'
    ]
  }
};
