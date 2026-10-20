'use strict';
// San Francisco Bay Area (cg- metro page, US cluster Phase 5, row 116). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: AI and Python for Bay Area teens, with one dataset from one named portal (DataSF, the City and County of San
// Francisco): street tree planting dates that are stored as text, mostly blank, and in a few cases later than the day
// the data was extracted. Lesson: parsing and filtering dates. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/ai-and-python-classes-for-teens-in-san-francisco-bay-area/):
//  - DataSF, "San Francisco Street Tree Inventory" (tkzw-k3nq), /api/views/tkzw-k3nq.json: attribution "San Francisco
//    Public Works"; licence "Open Data Commons Public Domain Dedication and License"; "Each row represents a single
//    street tree."; "It does not include Street Trees that have been removed."; "The dataset is updated on a daily
//    basis"; "Not all street trees in the dataset have coordinates"; note dated 9/9/2026 on an in-place correction after
//    "our migration to a new asset management system in December 2024"; planteddate is a text column.
//  - Our SoQL and Python counts, 18 October 2026 (ours): 144,519 records; planteddate blank 105,867, filled 38,652, all
//    in YYYY-MM-DD form; earliest 1955; max data_as_of 2026-10-17 while 8 records carry planted dates after it, the
//    latest 2026-10-20; by year 2018 2,261 (highest), 2024 1,927, 2017 1,734, 2025 1,725; 17,312 dated from 2015 on;
//    legalstatus DPW Maintained 136,258, Significant Tree 2,156, Landmark tree 232.
//  - Code.org (2025), 2025 State of AI + CS Education, Access Percent over the Years: CA 40% (2018-2019), 45%
//    (2022-2023), latest California value about 58% (1,325 of 2,282 in the Most Recent tab, source "School Course
//    Catalogs and Teacher Surveys"); the two tabs disagree on the year of the latest value, so no year is given to it.
//  - cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) could not be read on 18 October 2026; not retried.
//  - IANA tzdb: America/Los_Angeles "Pacific"; Rule US 2007 max Mar Sun>=8, Nov Sun>=1.
// Lesson family: dates stored as text, blank values, and filtering out dates that cannot be true yet.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'SF BAY AREA', label: 'San Francisco Bay Area', blurb: 'AI and Python classes for Bay Area teens, with a date-filtering project on San Francisco&rsquo;s street tree inventory.' },
  market: US,
  slug: 'ai-and-python-classes-for-teens-in-san-francisco-bay-area',
  code: 'apts',
  accent: '#0B1E4C',
  accentRationale: 'San Francisco Bay Area: #0B1E4C, the allocated deep bay-water navy, darkest of the metro accents and clear of every warm red in the set, high contrast on all papers',
  pageType: 'city',
  place: {
    name: 'San Francisco Bay Area',
    eyebrow: 'San Francisco Bay Area, California',
    schemaType: 'Place',
    chain: [
      { type: 'State', name: 'California' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-united-states', name: 'United States' },
    { slug: 'coding-classes-in-california', name: 'California' }
  ],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'California', href: '/coding-classes-in-california' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'San Francisco Bay Area',
  title: 'AI and Python Classes for Teens in the SF Bay Area | Live',
  description: 'Live online AI and Python classes for San Francisco Bay Area teens: machine learning, data science and a project on San Francisco street tree planting dates.',
  ogDescription: 'Bay Area teens learn Python and AI live online, then clean 38,652 planting dates from San Francisco&rsquo;s street tree inventory, including eight that have not happened yet.',
  twitterDescription: 'AI and Python for Bay Area teens, live online, with a DataSF date project.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online AI and Python Classes for Bay Area Teens',
    description: 'Python, machine learning, data science and algorithms for teenagers in the San Francisco Bay Area, taught live online in level-matched batches or one to one.'
  },

  h1: 'AI and Python classes for teens in the San Francisco Bay Area',
  capsuleQ: 'Where can a Bay Area teen learn Python and AI from a live teacher?',
  capsule: 'Modern Age Coders teaches Bay Area teens Python and AI live online, on Pacific Time: Python from scratch, then data science and machine learning built by hand, in batches of fifteen to twenty or one to one. The first class is free. Our signature project uses DataSF, where San Francisco Public Works publishes its street tree inventory, to teach the unglamorous skill of trusting dates carefully.',
  lead: 'Plenty of Bay Area teens already know what an AI model is; many have used one to finish homework. Fewer have built one, and fewer still have spent an hour discovering that the data a model would learn from is quietly broken. That hour is what this page is about. It describes a project on a public San Francisco dataset whose dates are stored as text, mostly missing, and occasionally from the future, and it explains how our Python and AI courses lead a teenager from first syntax to models they can defend.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teen in the Bay Area.',

  picks: {
    eyebrow: 'Courses for Bay Area teens',
    h2: 'Four routes into Python and AI',
    intro: 'Teens start where their skills are, not where their grade is. The free class decides which one fits.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from the first print statement to files, functions and classes, with the date project as a milestone.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning in Python: train, test and break real models, then explain what went wrong.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'pandas, charts and the cleaning work that comes before any model, on public city data.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Grades 9 to 12', note: 'Algorithms and data structures for teens heading toward competitions or AP Computer Science A.' }
    ]
  },

  sections: [
    {
      id: 'dates', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When was each San Francisco street tree planted? A project in trusting dates',
      intro: 'DataSF is the open data portal of the City and County of San Francisco. Its Street Tree Inventory, published by San Francisco Public Works, has a planting date column. Teens find out how much of it they can actually use.',
      body: [
        { kind: 'table', caption: 'The planteddate column in the San Francisco Street Tree Inventory, dataset tkzw-k3nq (our counts, queried 18 October 2026)', head: ['What we checked', 'Result'], rows: [
          ['Records in the inventory', '144,519'],
          ['Records with no planting date', '105,867'],
          ['Records with a planting date', '38,652'],
          ['Column type', 'text, always written YYYY-MM-DD'],
          ['Earliest planting year', '1955'],
          ['Dated after the extract date of 2026-10-17', '8']
        ] },
        { kind: 'table', mt: true, caption: 'Planting years with the most dated records (our count)', head: ['Year', 'Records'], rows: [
          ['2018', '2,261'],
          ['2024', '1,927'],
          ['2017', '1,734'],
          ['2025', '1,725']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Text is not a date', p: 'The planting date arrives as text. Before any filtering, teens parse each value with datetime.strptime and the format %Y-%m-%d, so that comparing two dates compares time rather than characters.' },
          { h3: 'Most values are missing', p: 'Fewer than three in ten records carry a date. A chart of plantings per year therefore describes the dated trees only, and the caption has to say so in plain words.' },
          { h3: 'Some dates are impossible', p: 'The newest data_as_of value was 2026-10-17, yet eight records were planted after it, the latest on 2026-10-20. A filter that drops dates later than the extract is the honest fix.' }
        ] },
        { kind: 'p', text: 'Why would a record carry a planting date three days in the future? Possibly a planned planting entered ahead of time, possibly a typing slip; the dataset does not say, and we do not guess for it. What teens practise is the decision: state the rule, apply it in code, report how many rows it removed. Their final chart shows 17,312 dated plantings from 2015 onward, peaking in 2018, with the eight future rows excluded and named in a footnote.' },
        { kind: 'p', text: 'The inventory also carries a legal status for each tree. Teens group by it and find 136,258 trees maintained by Public Works, 2,156 marked Significant Tree and 232 marked Landmark tree. That small table becomes the first feature a teen ever chooses for a model, and the first time they ask whether a label means what its name suggests.' },
        { kind: 'callout', h3: 'Ours, and dated', p: 'The counts above are ours, taken on 18 October 2026. Public Works updates the inventory daily and noted on 9/9/2026 that it corrected the data in place after moving to a new asset management system in December 2024, so tomorrow&rsquo;s numbers may differ. The dataset is released under the Open Data Commons Public Domain Dedication and License.' }
      ]
    },
    {
      id: 'ca', tint: 'tint', eyebrow: 'California schools',
      h2: 'Where California high school computer science stands',
      intro: 'A short trend line, from one published source.',
      body: [
        { kind: 'p', text: 'In the Code.org (2025). 2025 State of AI + CS Education data, the share of California high schools offering computer science rises from 40% in 2018 to 2019 and 45% in 2022 to 2023 to about 58% in the most recent California value. The source for that latest figure is school catalogs and teacher surveys, and the two tabs of the sheet assign it different school years, so we leave the year off. The California Department of Education site turned away our automated reading on 18 October 2026, so we quote no state rule here; our <a class="cg-inline-link" href="/coding-classes-in-california">California page</a> has the statewide overview.' },
        { kind: 'p', text: 'Even at the high end, a school offering one computer science course is not the same as a teen getting to machine learning. Most Bay Area students who want to build AI, rather than use it, end up learning outside the timetable.' }
      ]
    },
    {
      id: 'zone', tint: '', eyebrow: 'Scheduling',
      h2: 'After-school Pacific Time, with teachers in India',
      intro: 'A Bay Area late afternoon is early morning in India, which is how classes fit around high school.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Flexible by design', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'The offset', p: 'While daylight time lasts, the Bay Area trails India by twelve and a half hours; on standard time the lag is thirteen and a half, since India keeps one clock all year.' },
          { h3: 'This year&rsquo;s switches', p: 'Bay Area clocks change on November 1, 2026 and again on March 14, 2027. Class times are stated in Pacific Time, and we resend them around both dates.' }
        ] },
        { kind: 'spec', title: 'Time zones are dates too', p: 'The date project has a sequel. The IANA database files the Bay Area under America/Los_Angeles, and a teen who converts the planting dates to timestamps learns why zone-aware datetimes beat naive ones once a clock change sits in the range.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Teen pathway',
    h2: 'From first Python to models a teen can defend',
    intro: 'Grade bands are rough. Some ninth graders are ready for the AI course; some seniors need the foundation first.',
    cols: [
      { band: 'Grades 7 to 8', h3: 'Foundations', p: 'Python syntax, loops, functions and small programs that read files.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Data', p: 'Cleaning, grouping and charting real datasets such as the tree inventory.', courses: ['data-science-course-for-teens-python-data', 'git-github-version-control-course-for-teens'] },
      { band: 'Grades 10 to 11', h3: 'Algorithms', p: 'Data structures, complexity and problem solving for contests and AP.', courses: ['problem-solving-dsa-masterclass-teens', 'ap-computer-science-a-java-exam-prep-course'] },
      { band: 'Grades 11 to 12', h3: 'Machine learning', p: 'Models trained and evaluated in Python, with honest reports of their limits.', courses: ['ai-ml-masterclass-teens', 'competitive-programming-for-teens-course'] }
    ]
  },

  ai: {
    eyebrow: 'Building, not just prompting',
    h2: 'Why a Bay Area teen should build AI rather than only use it',
    intro: 'Models are only as honest as the data cleaning behind them.',
    p1: 'Feed the raw tree inventory to a model that predicts planting year and it will learn from 38,652 dated rows while silently treating the other 105,867 as something else. It will also learn from eight dates that have not happened. Nothing in the output warns you. A teen who did the cleaning by hand knows to look.',
    p2: 'That is why our AI course begins with data and ends with evaluation. Teens use AI coding tools where the provider&rsquo;s own age rules allow, but they are graded on whether they can explain each step, including what the model cannot know.',
    closer: 'In a region full of AI products, the scarce skill is the person who asks what the training data got wrong.',
    blogAnchor: 'why learning to code still pays off'
  },

  delivery: {
    eyebrow: 'How classes run',
    h2: 'One live class for the whole Bay',
    intro: 'Whether home is in the city, across the bridge or down the Peninsula, the class is the same distance away.',
    cells: [
      { h3: 'Anywhere around the Bay', p: 'A teen in the Richmond District and another in Oakland can share a batch without either crossing a bridge.' },
      { h3: 'Code reviewed live', p: 'The teacher reads the student&rsquo;s code on a shared screen and asks why, rather than pasting a correction.' },
      { h3: 'A free first class', p: 'One real task, then a recommended course and time. We never take card details at that stage.' },
      { h3: 'Batches by level', p: 'Fifteen to twenty teens at the same stage, from the Bay Area and the rest of the US.' },
      { h3: 'One to one', p: 'A single teacher for a single teen, for competition training, AP review or a faster pace.' },
      { h3: 'Honest about schoolwork', p: 'We teach concepts and projects. Graded assignments and exam work stay the student&rsquo;s own.' }
    ],
    spec: { title: 'Online, from India', p: 'There is no Modern Age Coders office in the Bay Area, and none is claimed. Classes are live online; a teen needs a laptop or desktop, a headset and a steady connection.' }
  },

  fees: {
    h2: 'Fees for Bay Area families',
    intro: 'A free start, then one of two monthly plans.',
    first: 'A full first class with a teacher at no cost, ending in a suggested course and schedule.',
    group: 'A month of live classes in a level-matched batch of fifteen to twenty teens.',
    private: 'A month of one-to-one classes, scheduled around school and activities.',
    closer: 'Bay Area families pay in US dollars at the same rate as every other US family. Billing begins only after the free class, when course and time are agreed; the pricing page covers breaks and missed classes.'
  },

  reviewsH2: 'Google reviews from students and parents',

  book: {
    h2: 'Book a free Python or AI class',
    intro: 'Tell us where the teen is now: never coded, comfortable with Python, or already training models. The first task is matched to that.',
    success: 'Thank you. We will be in touch shortly about a free class for your Bay Area teen.'
  },

  faq: {
    h2: 'Bay Area teen and parent questions',
    intro: 'What Bay Area families ask before the first Python or AI class.',
    items: [
      { q: 'Is there an in-person class anywhere in the Bay Area?', a: 'No. All classes are live online, so a teen joins from home anywhere around the Bay.' },
      { q: 'Does my teen need to know Python before the AI course?', a: 'Yes, the basics. Teens new to code start with the Python course, and the teacher moves them to AI when their projects show they are ready.' },
      { q: 'What time are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are confirmed in Pacific Time.' },
      { q: 'What is the street tree date project?', a: 'Teens query the DataSF Street Tree Inventory, parse its text planting dates, handle the many blank ones, and remove dates later than the extract date before charting plantings by year.' },
      { q: 'Which portal does the project use?', a: 'Only DataSF, the open data portal of the City and County of San Francisco. Other Bay Area cities publish their own data, which this page does not use.' },
      { q: 'Can my teen use AI chatbots and coding assistants in class?', a: 'Where the provider allows it for their age, as a helper after they can write and check the code themselves. We teach the reasoning first.' },
      { q: 'Do you prepare students for AP Computer Science?', a: 'Yes, AP Computer Science A and Principles, alongside the school course. School assignments and exams always remain the student\'s own work.' },
      { q: 'How large are the batches?', a: 'Fifteen to twenty teens at the same level. One-to-one classes are available instead.' },
      { q: 'What equipment is needed?', a: 'A laptop or desktop that can run Python, a headset and a reliable connection. Chromebooks work for some courses; the free class checks.' },
      { q: 'Are you connected with DataSF or San Francisco Public Works?', a: 'No. We teach with public data they publish, but we are not connected with the City and County of San Francisco or any school district.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'More for Bay Area teens',
    html: 'For a broader look at AI study paths, read <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-usa">AI and machine learning classes in the USA</a> and <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>. Contest-minded teens can see <a class="cg-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a>, and the <a class="cg-inline-link" href="/coding-classes-in-california">California page</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'The Bay Area and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-california', label: 'California' },
    { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' },
    { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers' }
  ],

  personalityCss: `
.cg-root.cg-apts .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.1; max-width: 24ch; }
.cg-root.cg-apts .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 6px; padding: 1rem 1.1rem; }
.cg-root.cg-apts .cg-eyebrow { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-apts .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-apts .cg-table caption { text-align: left; font-weight: 700; }
.cg-root.cg-apts .cg-table td { font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', monospace; font-size: 0.92rem; }
.cg-root.cg-apts .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.8rem); }
.cg-root.cg-apts .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'California, 18 October 2026: cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) unreadable, so no state rule is quoted; Code.org (2025) Access Percent over the Years for CA: 40% (2018-2019), 45% (2022-2023), latest value about 58% (School Course Catalogs and Teacher Surveys), year withheld because the tabs disagree. IANA America/Los_Angeles and the US DST rule.',
    localProject: 'DataSF (City and County of San Francisco), San Francisco Street Tree Inventory tkzw-k3nq, San Francisco Public Works, ODC PDDL, updated daily; queried 18 October 2026: 144,519 records; planteddate (text) blank on 105,867, filled on 38,652; earliest 1955; 8 dates after the 2026-10-17 extract, latest 2026-10-20; peak year 2018 with 2,261; 17,312 dated from 2015 on; DPW Maintained 136,258, Significant Tree 2,156, Landmark tree 232. Counts ours. Lesson family: parsing text dates, blank values and filtering impossible future dates.',
    requiredMentions: [
      '144,519',
      '105,867',
      '38,652',
      '2026-10-20',
      'eight records were planted after it',
      '2,261',
      '17,312 dated plantings',
      'Landmark tree',
      'Significant Tree and 232',
      'December 2024',
    ],
    sources: [
      { claim: 'DataSF: San Francisco Street Tree Inventory metadata, description, licence and update note.', url: 'https://data.sfgov.org/api/views/tkzw-k3nq.json' },
      { claim: 'DataSF SoQL endpoint used for our counts.', url: 'https://data.sfgov.org/resource/tkzw-k3nq.json' },
      { claim: 'Code.org (2025), State of AI + CS Education data: California high school access over the years.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb: America/Los_Angeles and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'California state CS rules: cde.ca.gov and leginfo.legislature.ca.gov could not be read; not retried, nothing quoted.',
      'Data from other Bay Area cities (San Jose, Oakland and others): not used; this page uses DataSF only.',
      'A cause for the eight future planting dates: unknown, not asserted.',
      'A school year for the latest California Code.org value: tabs disagree, none printed.',
      'Any affiliation with DataSF, San Francisco Public Works, the City and County of San Francisco or Code.org.'
    ]
  }
};
