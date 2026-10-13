'use strict';
// Prospect, Adelaide (cg- district page, Australia cluster Phase 8, row 325). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), council page (ABS LGA46510, City of Prospect) under Adelaide and SA.
// Slug carries "sa" to separate it from Prospect in New South Wales.
// Spine: ranking Prospect's 84 stop records by Wednesday visits with ranked = pairs.sort(...). list.sort() sorts in
// place and returns None, so ranked is None and ranked[:3] raises TypeError: 'NoneType' object is not subscriptable.
// sorted() returns the new list: North East Rd stop 13 first with 222. Our run, scratchpad au/b17/prsp_sort.py.
// Lesson family: list.sort() returns None (vs sorted()); claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'PROSPECT',
    label: 'Prospect, Adelaide',
    blurb: 'Online coding and Python classes for the City of Prospect, where ranking 84 bus stops with list.sort() returns nothing at all.'
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
  slug: 'online-coding-and-python-classes-in-prospect-sa-adelaide',
  code: 'prsp',
  accent: '#815D2A',
  accentRationale: 'Prospect: a toasted ochre (hue 35.2), 4.82:1 on #EDE7DA; 24.6 RGB from the nearest South Australian accent, 12.7 from any other Australian accent and 7.7 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Prospect',
    eyebrow: 'City of Prospect, Adelaide, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Prospect' },
      { type: 'City', name: 'Adelaide' },
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' },
    { slug: 'ai-and-programming-classes-in-adelaide', name: 'Adelaide' }
  ],
  nav: [
    { label: 'Adelaide', href: '/ai-and-programming-classes-in-adelaide' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Prospect, Adelaide',
  title: 'Online Coding and Python Classes in Prospect, Adelaide',
  description: 'Live online coding and Python classes for the City of Prospect, for children, teens and adults, built on real Adelaide transport data, in small groups or one to one.',
  ogDescription: 'Prospect Python project: 84 bus stop records, one ranking written with list.sort(), and the None that came back instead of a list.',
  twitterDescription: 'Online Python for Prospect learners, live with a teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Prospect',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in the City of Prospect, Adelaide, taught live in English.'
  },
  h1: 'Online coding and Python classes in Prospect',
  capsuleQ: 'What do Prospect learners take from online Python classes?',
  capsule: 'A working understanding of how Python behaves, including which operations change data in place and which hand back something new. Six-year-olds begin in Scratch, while older learners move on to Python with real open data. The City of Prospect had 22,272 residents in 2021.',
  lead: 'Rank the City of Prospect\'s bus stops by how many buses call on a Wednesday, and show the top three. One natural line of Python, ranked = pairs.sort(...), leaves ranked holding None. The data was sorted; the answer was thrown away.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Prospect.',
  picks: {
    eyebrow: 'Course picks for Prospect',
    h2: 'Courses that explain Python\'s behaviour',
    intro: 'The ranking bug is about methods, return values and reading errors. Each course below builds part of that, and a free first lesson tells us which fits.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Lists, methods and return values, practised on real data.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'From first scripts to programs that do what you expect.'
      },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Ranking, sorting and summarising public datasets.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Early Python where every result is printed and checked.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Prospect in the Census',
      h2: 'A compact inner-north council',
      intro: '2021 Census QuickStats for the City of Prospect (ABS code LGA46510), alongside South Australia.',
      body: [
        {
          kind: 'table',
          caption: 'City of Prospect, 2021',
          head: ['Measure', 'City of Prospect'],
          rows: [
            ['Residents', '22,272'],
            ['Median age', '37'],
            ['Families', '5,884'],
            ['Private dwellings', '9,468'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Prospect beside South Australia',
          head: ['Indicator', 'Prospect', 'South Australia'],
          rows: [
            ['Adults with a bachelor degree or higher', '40.3% (7,428)', '22.7%'],
            ['Employed people in professional jobs', '32.6% (4,010)', '21.5%'],
            ['Workers who caught a bus to work', '6.2% (759)', '3.1%'],
            ['Flats or apartments', '14.5% (1,253)', '6.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Prospect counted 1,155 children under five, 1,344 aged 5 to 9 and 1,355 aged 10 to 14.' },
            { h3: 'Students', p: '24.8% of residents in education, 1,690 people, were at university, against 16.7% statewide.' },
            { h3: 'Size', p: 'At about 7.8 square kilometres, the council area sits just north of the Adelaide park lands.' }
          ]
        },
        { kind: 'p', text: 'Because small Census cells are adjusted slightly by the bureau, the numbers are shown unchanged and never combined.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'The ranking that came back empty',
      intro: 'The script counts Wednesday 21 October 2026 visits for each of the 84 stop records inside the City of Prospect, stores them as (stop, visits) pairs, then ranks them.',
      body: [
        {
          kind: 'table',
          caption: 'What our run printed (Python 3.13.6)',
          head: ['Line', 'Output'],
          rows: [
            ['ranked = pairs.sort(key=..., reverse=True)', 'ranked = None'],
            ['print(ranked[:3])', 'TypeError: \'NoneType\' object is not subscriptable'],
            ['pairs[:3] after the sort', 'Already sorted: the list itself changed'],
            ['sorted(counts.items(), key=..., reverse=True)[:3]', 'A new, ranked list']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The top of the ranking (our count)',
          head: ['Stop record', 'Wednesday visits'],
          rows: [
            ['Stop 13 North East Road, north-west side', '222'],
            ['Stop 7A Torrens Road, north-east side', '129'],
            ['Four records, on Main North Road and North East Road', '125 each']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'In place', p: 'list.sort() rearranges the list it belongs to and returns None, a signal that nothing new was created.' },
            { h3: 'New list', p: 'sorted() leaves the original alone and returns a fresh sorted list, which is what the assignment expected.' },
            { h3: 'The tie', p: 'Third place is shared by four records at 125 visits, so "top three" needs a rule for ties as well as a working sort.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'A Python convention',
          p: 'Methods that change an object in place, such as sort, append, reverse and extend, return None. Assigning their result is almost always a mistake, and the None usually surfaces a few lines later, far from the real cause.'
        },
        {
          kind: 'p',
          text: 'Stop records and trips come from the Adelaide Metro timetable, version 1708. Membership of the City of Prospect is our point-in-boundary check, and the output lines are copied from our own run.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Python lists',
      h2: 'Change in place, or make a new one?',
      intro: 'Knowing which operations mutate and which return a copy prevents a whole family of bugs.',
      body: [
        {
          kind: 'table',
          caption: 'Mutating and non-mutating pairs',
          head: ['Changes the list, returns None', 'Returns something new', 'Note'],
          rows: [
            ['lst.sort()', 'sorted(lst)', 'sorted works on any iterable'],
            ['lst.reverse()', 'reversed(lst) or lst[::-1]', 'reversed gives an iterator'],
            ['lst.append(x)', 'lst + [x]', 'The + version copies'],
            ['lst.extend(other)', 'lst + other', 'Same idea']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Tidy a toy shelf yourself, or ask for a photo of a tidied shelf: one changes the shelf, one gives you something new.' },
            { h3: 'Secondary learners', p: 'Reproduce the Prospect None, read the traceback, and fix it with sorted() and with a separate sort() call.' },
            { h3: 'Adults', p: 'Watch for assignments from in-place methods in scripts, including pandas calls that take inplace=True.' }
          ]
        },
        {
          kind: 'p',
          text: 'Linters and type checkers often flag this pattern because the assigned value is always None. Running one is a cheap way to catch it before the TypeError does.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Prospect',
      h2: 'Three railway stations and North East Road',
      intro: 'Council-wide timetable details for Wednesday 21 October 2026.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Rail',
              p: 'Dudley Park, Islington and Ovingham railway station records lie inside the council by our check, with 198 scheduled train visits that day.'
            },
            { h3: 'Buses', p: '6,549 of the 6,805 visits were regular buses, on 47 routes in all.' },
            { h3: 'Weekend', p: 'Visits dropped to 3,481 on Saturday 24 October and 3,028 on Sunday 25 October.' }
          ]
        },
        {
          kind: 'spec',
          title: 'The council, not the NSW suburb',
          p: 'This page is about the City of Prospect in Adelaide. Its figures cover the whole council area; neighbouring Walkerville, Port Adelaide Enfield, Charles Sturt and the City of Adelaide have their own.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From tidy shelves to tidy code',
    intro: 'Ages are rough guides; a trial lesson sets the level.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks',
        p: 'Scratch projects with lists and order.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Lists, sorting and printing results.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python and data',
        p: 'Ranking and summarising real data.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Professional Python',
        p: 'Readable, tested scripts for work.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI fixes the TypeError. Does it explain the None?',
    intro: 'Sometimes. The fix is easy; the understanding is what prevents the next one.',
    p1: 'Paste the traceback into an assistant and it will likely suggest sorted(). Good. But the same misunderstanding returns with reverse(), append() and pandas inplace calls, each failing somewhere new.',
    p2: 'Learners who know why sort() returns None spot the whole family of mistakes in AI-written code before running it. That is the difference between fixing one bug and preventing a dozen.',
    closer: 'In Prospect, the learner who understands in-place methods reads AI code without surprises.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Prospect lessons online',
    intro: 'Lessons happen live on video, from home.',
    cells: [
      { h3: 'Tracebacks read together', p: 'Errors are treated as clues and read line by line with the teacher.' },
      { h3: 'Follows SA terms', p: 'Lessons pause in South Australian school holidays.' },
      { h3: 'Free opening class', p: 'A complete first lesson at no cost, then advice.' },
      { h3: 'Level groups', p: 'Fifteen to twenty learners at a matching stage, or private.' },
      { h3: 'Two a week', p: 'Fixed weekly lessons, around eight a month.' },
      { h3: 'India time', p: 'Our teachers are in India: a 4:30pm Prospect lesson is 11:30am India time in summer and 12:30pm from April.' }
    ],
    spec: {
      title: 'Adelaide and India',
      p: 'Adelaide switches to daylight saving on the first Sunday in October and back on the first Sunday in April (IANA time zone database). India keeps one time all year.'
    }
  },
  fees: {
    h2: 'Prospect class fees',
    intro: 'Three prices, no surprises.',
    first: 'Lesson one is free, with written advice afterwards.',
    group: 'Around eight group lessons a month, fifteen to twenty learners.',
    private: 'Around eight private lessons a month.',
    closer: 'Prospect families pay in US dollars after the trial, when course and time are settled. The pricing page covers holidays and missed lessons.'
  },
  reviewsH2: 'Reviews on our Google profile',
  book: {
    h2: 'Book a free Prospect lesson',
    intro: 'Let us know who is learning and what they like. Teens could repair the ranking script in two ways; younger children could line up Scratch sprites by size.',
    success: 'Thank you. We will be in touch soon about a Prospect lesson.'
  },
  faq: {
    h2: 'Prospect Python questions',
    intro: 'What Prospect families and adult learners ask most.',
    items: [
      {
        q: 'What is the population of the City of Prospect?',
        a: 'The 2021 Census QuickStats count 22,272 residents in the City of Prospect, with 9,468 private dwellings and a median age of 37.'
      },
      {
        q: 'Why does list.sort() return None?',
        a: 'Because it sorts the list in place. Python\'s convention is that methods which change an object return None, so you cannot mistake them for operations that make a copy.'
      },
      {
        q: 'What is the difference between sort() and sorted()?',
        a: 'list.sort() changes the existing list and returns None. sorted() works on any iterable and returns a new sorted list, leaving the original unchanged.'
      },
      {
        q: 'Which Prospect stop had the most Wednesday buses?',
        a: 'Stop 13 on the north-west side of North East Road led with 222 timetabled visits on 21 October 2026, our count from the Adelaide Metro feed.'
      },
      {
        q: 'Is my nine-year-old ready for Python?',
        a: 'Often, yes, if Scratch already feels easy and typing is comfortable. A free first lesson will show us.'
      },
      { q: 'Do teenagers learn with Claude?', a: 'No. Claude-based courses start at 18; younger learners use other AI tools.' },
      {
        q: 'Is there a classroom in Prospect?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Prospect learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Does the Prospect group course include Copilot Studio?',
        a: 'No. Copilot Studio stays in private lessons; in groups, agents are built with Python.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Prospect learners',
    html: 'See <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">our Adelaide page</a> for the wider city, or <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">Adelaide kids\' coding</a> for children. Just south-east, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-norwood-adelaide">Norwood</a> has a Python page too, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">the state guide</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Prospect and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/online-coding-and-python-classes-in-norwood-adelaide', label: 'Norwood' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-prsp .cg-hero-grid { align-items: start; gap: clamp(1.04rem, 3.01vw, 2.46rem); }
.cg-root.cg-prsp .cg-hero h1 { font-weight: 659; letter-spacing: -0.017em; line-height: 1.1; }
.cg-root.cg-prsp .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.63rem 0 0.63rem 0.97rem; }
.cg-root.cg-prsp .cg-eyebrow { letter-spacing: 0.127em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-prsp .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.011em; }
.cg-root.cg-prsp .cg-grid-3 { gap: clamp(0.85rem, 2.19vw, 1.67rem); }
.cg-root.cg-prsp .cg-table caption { font-weight: 652; text-align: left; letter-spacing: 0.011em; }
.cg-root.cg-prsp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-prsp .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.97rem; }
.cg-root.cg-prsp .cg-callout { border-left-width: 6px; border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'City of Prospect (LGA46510). ABS Census 2021 QuickStats (read 12 October 2026): 22,272 people; median age 37; 5,884 families; 9,468 private dwellings; 2.5 per household; bachelor or higher 7,428 (40.3%, SA 22.7%); professionals 4,010 (32.6%, SA 21.5%); bus 759 (6.2%, SA 3.1%); flats 1,253 (14.5%, SA 6.8%); university 1,690 (24.8%, SA 16.7%); aged 0-4 1,155; 5-9 1,344; 10-14 1,355. ABS LGA area 7.7915 sq km. Adelaide Metro GTFS v1708: 84 stop records inside the LGA polygon; Wednesday 21 Oct 2026 6805 visits (bus 6549, train 198, school 712 56, regional 701 2), 47 routes; railway station records Dudley Park, Islington, Ovingham; Stop 13 North East Rd North West side 222; Stop 7A Torrens Rd North East side 129; four records at 125; Saturday 3,481; Sunday 3,028. Neighbouring LGAs (ABS touches): Adelaide, Charles Sturt, Port Adelaide Enfield, Walkerville.',
    localProject: 'list.sort() returns None. prsp_sort.py: pairs = list(counts.items()); ranked = pairs.sort(key=lambda p: p[1], reverse=True) -> None; ranked[:3] -> TypeError: \'NoneType\' object is not subscriptable; pairs[:3] sorted in place; sorted(...) -> Stop 13 North East Rd 222, Stop 7A Torrens Rd 129, Stop 15 Main North Rd 125 (tie of four at 125); 84 records, 6,805 visits. Python 3.13.6.',
    requiredMentions: ['9,468', 'Islington', '1,344', 'North East Road', 'Torrens Road', 'Ovingham', 'Dudley Park', 'NoneType', '3,481'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Prospect local government area (LGA46510), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA46510'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department for Infrastructure and Transport (South Australia), Adelaide Metro General Transit Feed, version 1708 (valid 9 October 2026 to 9 April 2027), Creative Commons Attribution 3.0 Australia per its data.gov.au listing; downloaded 13 October 2026.',
        url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au'
      },
      {
        claim: 'Python documentation, Sorting Techniques: list.sort() modifies the list in place and returns None; sorted() builds a new sorted list.',
        url: 'https://docs.python.org/3/howto/sorting.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Prospect, New South Wales: not covered; this page is the City of Prospect in Adelaide.',
      'Passenger numbers: not claimed; scheduled visits only.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Prospect or Adelaide Metro.'
    ]
  }
};
