'use strict';
// Strathfield, Sydney (cg- district page, Australia cluster Phase 8, row 209). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: Strathfield Station had 653,253 Opal entries in August 2026. What percentile is that, and how do
// the three definitions of percentile rank and the 16 stations published as "Less than 50" change it?
// Data: Transport for NSW, Train Station Entries and Exits, monthly (CC BY), 23 months 2024-10 to
// 2026-08, read 10 October 2026. August 2026 entry rows: 375, of which 16 "Less than 50". Station names
// normalised (runs of spaces collapsed). Percentile rank: strict = percent below, weak = percent at or
// below, mid = below plus half the ties (scratchpad au/b1/strf_pr.py). Strathfield (rank 8): dropping the
// 16 (n 359) 97.77 / 98.05 / 97.91; keeping them at any value from 0 to 49 (n 375) 97.87 / 98.13 / 98.00.
// Homebush (97,496, rank 87): 75.77 / 76.04 / 75.91 dropped; 76.80 / 77.07 / 76.93 kept. Any station in
// the tied group, kept: 0.00 / 4.27 / 2.13. Strathfield's rank among published stations is 7, 8 or 9 in all
// 23 months; mean 601,741 entries; lowest 496,401 (January 2025); highest 682,906 (October 2024).
// Lesson family: percentile rank definitions with ties; claimed in claims.txt, 0 hits for "percentile rank".
// Place facts: ABS Census 2021 QuickStats, Strathfield LGA (LGA17100); NSW schools master dataset (CC BY):
// 8 schools with LGA "Strathfield", earliest first teacher Strathfield South Public School 1881-02-01,
// Homebush Public School 1885-02-01, latest Marie Bashir Public School 2014-01-28.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'STRATHFIELD',
    label: 'Strathfield, Sydney',
    blurb: 'Online Python for Strathfield, with a project on what a percentile rank really means when the data has ties.'
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
  slug: 'online-coding-and-python-classes-in-strathfield-sydney',
  code: 'strf',
  accent: '#362C94',
  accentRationale: 'Strathfield: a strong indigo violet (hue 247), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 10.9:1 on white and 8.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Strathfield',
    eyebrow: 'Strathfield Municipal Council area, Sydney, New South Wales',
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
  routeLabel: 'Strathfield, Sydney',
  title: 'Online Coding and Python Classes in Strathfield, Sydney',
  description: 'Live online coding and Python classes for Strathfield children, teenagers and adults, one to one or in small groups, taught by real teachers. First lesson free.',
  ogDescription: 'Python classes for Strathfield, with a project on percentile ranks: Strathfield Station sits at 97.77, 98.05 or 98.13 depending on the definition and on 16 stations reported as under 50.',
  twitterDescription: 'Strathfield online coding and Python classes, live, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Strathfield',
    description: 'Level-matched online Python, data and coding lessons for children, teenagers and adults in the Strathfield Municipal Council area, taught live in English.'
  },
  h1: 'Online coding and Python classes in Strathfield',
  capsuleQ: 'Where can Strathfield students find the best online coding and Python classes?',
  capsule: 'In live online Python lessons where a teacher works through real code with the learner, from first programs to data analysis. The 2021 Census counted 45,593 people in the Strathfield council area, with 59.5% of occupied homes flats or apartments and a median age of 33. Children, teenagers and adults learn one to one or in a small group at one level, and the first lesson is free.',
  lead: 'Strathfield Station recorded 653,253 entries in August 2026, eighth among all the stations Transport for NSW published that month. Turn that into a percentile and you have to choose: the share of stations below it, the share at or below it, or something in between. You also have to decide what to do with the 16 stations published only as "Less than 50". Those choices move Strathfield between 97.77 and 98.13, and they move a mid-table station like Homebush by more than a whole point. Our Strathfield learners write the Python that makes each choice visible.',
  wa: 'Hello Modern Age Coders, I would like a free online Python lesson for a learner in Strathfield.',
  picks: {
    eyebrow: 'Course picks for Strathfield',
    h2: 'Python courses that end in real analysis',
    intro: 'These courses lead into the percentile project or build towards it. A free trial lesson decides the starting point.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Python from variables to files and functions, with data projects at every stage.'
      },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Statistics, ratios and sorting met through code, the maths behind a percentile rank.' },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Cleaning, summarising and reporting real datasets, including messy published tables.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'Adults from zero',
        note: 'Python for adults starting from nothing and moving to professional-quality code.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Strathfield in the Census',
      h2: 'A young, apartment-dwelling council area',
      intro: 'Headline figures from the 2021 Census QuickStats for the Strathfield local government area, with the state and national figures alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Strathfield council area, 2021 Census',
          head: ['Count', 'Strathfield'],
          rows: [
            ['People', '45,593'],
            ['Private dwellings', '18,273'],
            ['Median age', '33'],
            ['Average household size', '2.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Strathfield differs from NSW and Australia',
          head: ['Indicator', 'Strathfield', 'NSW', 'Australia'],
          rows: [
            ['Occupied homes that are flats or apartments', '59.5% (9,366)', '21.7%', '14.2%'],
            ['Occupied homes that are separate houses', '34.2% (5,388)', '65.6%', '72.3%'],
            ['Aged 15 and over with a bachelor degree or above', '44.7% (17,344)', '27.8%', '26.3%'],
            ['Residents aged 20 to 24', '10.1% (4,601)', '6.1%', '6.2%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Mostly apartments', p: 'Close to six in ten occupied homes were flats or apartments, nearly three times the NSW share.' },
            { h3: 'A large early-twenties group', p: 'One resident in ten was aged 20 to 24, against about one in sixteen across the state.' },
            { h3: 'Professional work', p: 'Professionals were the largest occupation group, 7,694 people or 33.8% of employed residents.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census tables are adjusted by small random amounts to protect respondents, so a set of parts rarely matches its published total. Every figure on this page is copied as published, and none is a sum we worked out.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Three honest answers to "what percentile is Strathfield?"',
      intro: 'Transport for NSW publishes monthly entries for every station. For August 2026 there are 375 entry rows; 16 give no number, only the text "Less than 50".',
      body: [
        {
          kind: 'table',
          caption: 'Percentile rank of a station\'s August 2026 entries, three definitions (our calculation)',
          head: ['Station and treatment', 'Strictly below', 'At or below', 'Midpoint'],
          rows: [
            ['Strathfield (653,253 entries), the 16 left out (359 stations)', '97.77', '98.05', '97.91'],
            ['Strathfield, the 16 kept (375 stations)', '97.87', '98.13', '98.00'],
            ['Homebush (97,496 entries), the 16 left out', '75.77', '76.04', '75.91'],
            ['Homebush, the 16 kept', '76.80', '77.07', '76.93'],
            ['Any one of the 16, kept', '0.00', '4.27', '2.13']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Strictly below', p: 'The share of stations with fewer entries. Python\'s bisect_left on a sorted list counts exactly these.' },
            {
              h3: 'At or below',
              p: 'Adds the station itself and anything tied with it. bisect_right gives this count, and the gap is one station\'s worth, 0.28 points out of 359.'
            },
            { h3: 'Midpoint', p: 'Below plus half the ties. For the 16 tied stations it lands at 2.13, between the other two answers of 0 and 4.27.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'Placeholders that cannot move a rank',
          p: 'We tried replacing "Less than 50" with 0, with 25 and with 49. Every percentile above stayed identical, because each published number is at least 50 and the order never changes. What does change things is leaving the 16 out: Homebush drops by more than a point because 16 stations no longer sit beneath it.'
        },
        {
          kind: 'p',
          text: 'The percentiles, ranks and treatments are our own calculation from the published file; Transport for NSW does not publish percentiles. Station names in the file sometimes contain doubled spaces, so the first step in the code is collapsing them, or "Strathfield Station" fails to match itself across months.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Twenty-three months',
      h2: 'Seventh, eighth or ninth, month after month',
      intro: 'A single month can mislead. Running the same code over every month in the file shows how steady Strathfield\'s place is.',
      body: [
        {
          kind: 'table',
          caption: 'Strathfield Station monthly entries, October 2024 to August 2026 (our calculation from the published file)',
          head: ['Measure', 'Value'],
          rows: [
            ['Months in the file', '23'],
            ['Rank among stations with a number', '7 to 9 in every month'],
            ['Mean monthly entries', '601,741'],
            ['Lowest month', '496,401 (January 2025)'],
            ['Highest month', '682,906 (October 2024)']
          ]
        },
        {
          kind: 'p',
          text: 'Even the count of stations with a published number shifts from month to month, from 342 to 364, so a percentile from one month is not directly comparable with another unless the denominator is reported too. A rank, by contrast, needs no denominator, which is why both appear in the code learners write.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Sort a short list of numbers, find where a new one fits, and see why a tie makes the question harder.' },
            { h3: 'Teenagers', p: 'Write all three percentile functions, test them against the bisect module, and plot Strathfield over 23 months.' },
            { h3: 'Adults', p: 'Handle suppressed values, report denominators, and explain a percentile choice to someone who will act on it.' }
          ]
        },
        {
          kind: 'p',
          text: 'Transport for NSW, the NSW Department of Education, Strathfield Council and the statistics bureau publish the data we use; none of them is connected with Modern Age Coders, and the analysis is ours.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Strathfield',
      h2: 'Schools from 1881 to 2014',
      intro: 'Facts from the NSW schools file, the station data and the school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Eight schools',
              p: 'The NSW Department of Education lists 8 government schools in the Strathfield council area, from Strathfield South Public School, with a first teacher in 1881, to Marie Bashir Public School, with a first teacher in 2014.'
            },
            { h3: 'Homebush Public School', p: 'Homebush Public School records its first teacher in February 1885, the second earliest date among the eight.' },
            {
              h3: 'Neighbouring stations',
              p: 'August 2026 brought 135,349 entries at Flemington and 63,099 at North Strathfield, against 653,253 at Strathfield itself.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'NSW term dates for 2027',
          p: 'Term 1 for Eastern division schools begins on Wednesday 3 February 2027, and Term 2 runs from Thursday 29 April to Friday 2 July. Group lessons pause for the holidays in between.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting a list to defending a statistic',
    intro: 'The ages are approximate. The trial lesson places each learner.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'First programs',
        p: 'Scratch projects that count, sort and compare, and puzzles that build logical habits.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 15',
        h3: 'Python and maths',
        p: 'A first Python course, then functions, lists and loops used on maths and real numbers.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Data with Python',
        p: 'Reading published files, handling odd values and charting results.',
        courses: ['data-science-course-for-teens-python-data', 'pcep-pcap-python-certification-course']
      },
      {
        band: 'University and adult',
        h3: 'Analysis for work',
        p: 'Python analysis and reporting at a professional standard.',
        courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can compute a percentile, why should a Strathfield student learn Python?',
    intro: 'Because the AI will pick a definition and a treatment of missing values without telling you, and the answer changes with both.',
    p1: 'Ask an assistant for Strathfield Station\'s percentile and it will produce a number. Whether it left out the 16 stations without a figure, or counted ties as below or at, is usually invisible. Our Strathfield table shows those silent choices moving the result by a third of a point at the top and by more than a point in the middle.',
    p2: 'A learner who has written bisect_left and bisect_right by hand knows which question each one answers. They read AI-generated analysis the way a careful editor reads a draft, looking for the decision that was made on their behalf.',
    closer: 'In 2026 any tool will hand you a percentile, and the Strathfield learner who asks "of what, and counting what?" is the one whose numbers survive a second look.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Taught live, from a laptop at home',
    intro: 'Strathfield learners join from home, so no time goes on travel and the teacher can see the learner\'s screen throughout.',
    cells: [
      { h3: 'Screen sharing', p: 'The teacher watches the code being typed and corrects misunderstandings the moment they appear.' },
      { h3: 'School stages', p: 'Content is pitched to the NSW stages and stops for the state holidays.' },
      {
        h3: 'A trial with substance',
        p: 'The free lesson teaches something real, then ends with a suggested course, level and time and no request for payment.'
      },
      { h3: 'Group or private', p: 'Groups hold fifteen to twenty learners of similar level; one-to-one is available when a group time does not suit.' },
      { h3: 'Regular rhythm', p: 'Twice weekly at a fixed time, which comes to about eight lessons in a month.' },
      {
        h3: 'Teachers in India',
        p: 'A 5pm Strathfield lesson during daylight saving starts at 11:30am India time; in the Sydney winter months it starts at 12:30pm there.'
      }
    ],
    spec: {
      title: 'Clock changes',
      p: 'Sydney moves to daylight saving on Sunday 4 October 2026 and returns to standard time on Sunday 4 April 2027; India has no clock change. We always quote times in Sydney time.'
    }
  },
  fees: {
    h2: 'Fees for Strathfield learners',
    intro: 'One free lesson, then a choice of two monthly formats.',
    first: 'A first lesson at no cost, with advice on where to start.',
    group: 'Monthly group place: about eight lessons, fifteen to twenty learners matched by level.',
    private: 'Monthly one-to-one: about eight lessons with a single teacher.',
    closer: 'Fees outside India are charged in US dollars, so the amount is the same for every Strathfield household. The first payment follows the trial, once course and time are chosen, and the pricing page covers holidays, missed lessons and switching format.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Request a free Strathfield lesson',
    intro: 'Tell us the learner\'s age and what they like. A ten-year-old might begin by sorting a list of favourite numbers; a university student might go straight to the percentile functions.',
    success: 'Thank you. We will be in touch soon to arrange the Strathfield lesson.'
  },
  faq: {
    h2: 'Strathfield coding and Python questions',
    intro: 'Questions Strathfield parents and adult learners ask before the first lesson.',
    items: [
      {
        q: 'What is the population of the Strathfield council area?',
        a: 'The 2021 Census counted 45,593 people and 18,273 private dwellings in the Strathfield local government area.'
      },
      {
        q: 'What is a percentile rank?',
        a: 'A percentile rank says what share of a group falls below a value. Definitions differ on ties: some count only values strictly below, some include equal values, and some take the midpoint between the two.'
      },
      {
        q: 'What is the Strathfield percentile project?',
        a: 'Learners take Transport for NSW monthly station entries and compute Strathfield Station\'s percentile three ways, with and without the 16 stations published as "Less than 50". The answers run from 97.77 to 98.13.'
      },
      {
        q: 'Why does Homebush move more than Strathfield?',
        a: 'Removing the 16 low stations takes 16 values from below every other station. For a station in the middle of the list that is a bigger share of what lies beneath it, so Homebush shifts by about a point and Strathfield by about a tenth.'
      },
      {
        q: 'Does the project say anything about why stations are busy?',
        a: 'No. It measures how a percentile is defined. It makes no claim about why any station has more or fewer entries.'
      },
      {
        q: 'Which Python course suits a beginner teenager?',
        a: 'Usually the Python masterclass for teens, which starts from the first line of code. The free trial confirms it or points to Scratch or maths through coding first.'
      },
      { q: 'Can adults learn Python from scratch?', a: 'Yes. Adults start from zero in a course built for them and move on to data analysis when ready.' },
      {
        q: 'Do you teach in Strathfield in person?',
        a: 'No. Lessons are online and live, and we have no premises in Australia. A computer with a microphone, speakers and a steady connection is enough; our contact number is an Indian one.',
        boiler: true
      },
      {
        q: 'How much are Python classes for Strathfield learners?',
        a: 'The first lesson is free. Afterwards a group place costs USD 100 a month for two live lessons a week, about eight lessons, with fifteen to twenty learners, and one-to-one costs USD 150 a month on the same schedule. Course, format and time are agreed before anything is paid.',
        boiler: true
      },
      {
        q: 'What decides which group a learner joins?',
        a: 'Level, pace and goals decide it, not age or postcode, and groups hold fifteen to twenty learners. One-to-one lessons are an option if no group time works.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Strathfield learners',
    html: 'Next door, <a class="cg-inline-link" href="/ai-and-programming-classes-in-burwood-sydney">Burwood</a> has its own page, as does <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-parramatta-sydney">Parramatta</a> further west. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> covers the whole city, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI across New South Wales</a> covers the state.',
    waLabel: 'Ask on WhatsApp'
  },
  footerHeading: 'Strathfield and Sydney',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-burwood-sydney', label: 'Burwood' },
    { href: '/vibe-coding-and-ai-agents-classes-in-ryde-sydney', label: 'Ryde' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-strf .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.1vw, 2.5rem); }
.cg-root.cg-strf .cg-hero h1 { font-weight: 720; letter-spacing: -0.017em; line-height: 1.09; }
.cg-root.cg-strf .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-strf .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-strf .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.011em; }
.cg-root.cg-strf .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.75rem); }
.cg-root.cg-strf .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-strf .cg-table td:not(:first-child) { font-variant-numeric: tabular-nums; text-align: right; }
.cg-root.cg-strf .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-strf .cg-callout { border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Strathfield, ABS Census 2021 QuickStats, Strathfield local government area LGA17100 (read 10 October 2026): 45,593 people; median age 33 (NSW 39, Australia 38); 18,273 private dwellings; average 2.7 people per household (NSW 2.6); flat or apartment 9,366 (59.5 percent; NSW 21.7; Australia 14.2); separate house 5,388 (34.2 percent; NSW 65.6; Australia 72.3); Bachelor Degree level and above 17,344 (44.7 percent; NSW 27.8; Australia 26.3); age 20 to 24 4,601 (10.1 percent; NSW 6.1; Australia 6.2); Professionals 7,694 (33.8 percent). NSW Department of Education master dataset (CC BY), LGA = Strathfield: 8 schools; Date_1st_teacher Strathfield South Public School 1881-02-01, Homebush Public School 1885-02-01, Marie Bashir Public School 2014-01-28. NSW 2027 term dates, Eastern division: Term 1 Wednesday 3 February; Term 2 Thursday 29 April to Friday 2 July. IANA Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.',
    localProject: 'Percentile rank definitions with ties. Transport for NSW Train Station Entries and Exits, monthly (CC BY), 2024-10 to 2026-08, Entry rows; Station names whitespace-normalised; key Station plus Station_Type. August 2026: 375 entry rows, 16 with Trip "Less than 50". Strict = 100*below/n, weak = 100*(below+equal)/n, mid = 100*(below+equal/2)/n. Strathfield Station (Train) 653,253, rank 8 from top: dropped (n 359) 97.77/98.05/97.91; kept as 0, 25 or 49 (n 375) 97.87/98.13/98.00. Homebush Station 97,496, rank 87: dropped 75.77/76.04/75.91; kept 76.80/77.07/76.93. A tied "Less than 50" station, kept: 0.00/4.27/2.13. Strathfield rank 7 to 9 in each of 23 months among stations with numbers (342 to 364 per month); mean 601,741; min 496,401 (2025-01); max 682,906 (2024-10). Other August 2026 entries: Flemington Station 135,349; North Strathfield Station 63,099.',
    requiredMentions: ['45,593', '18,273', '9,366', '17,344', '653,253', '97,496', 'Strathfield South Public School', 'Marie Bashir Public School', '63,099'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Strathfield local government area (LGA17100).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA17100'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why particular stations reported "Less than 50" in August 2026: not known from the file, so no station in that group is named and no cause is given.',
      'That Strathfield, Homebush, Flemington or North Strathfield stations lie inside the Strathfield council area: not verified, so stations are named without a council claim.',
      'School types beyond primary and secondary, and single-sex school names: left out as unnecessary.',
      'That Strathfield South Public School is in the suburb of Strathfield South: the file gives a Strathfield address, so no suburb claim is made.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Transport for NSW, the NSW Department of Education, Strathfield Council or the ABS.'
    ]
  }
};
