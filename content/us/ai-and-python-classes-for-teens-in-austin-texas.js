'use strict';
// Austin (cg- metro page, US cluster Phase 5, row 122). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: teens who want AI need clean data first, so the page teaches missing and disguised-missing values on the City
// of Austin's public tree inventory. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/ai-and-python-classes-for-teens-in-austin-texas/ and src/_shared-metros/tx/):
//  - City of Austin Open Data, Tree Inventory (wrik-xasw), metadata: licence "Public Domain"; "public trees inventoried by
//    the City of Austin as of March 13th, 2020"; compiled from the Development Services Department's Tree Division, the
//    school district, Parks and Recreation, and Public Works' downtown inventory (2013); "not a complete comprehensive
//    inventory of all trees. Some errors and/or duplicate data may exist."; columns species, diameter, latitude,
//    "longtitude" (sic). Portal terms of use: datasets in the public domain unless otherwise noted; no warranty.
//    OUR SoQL aggregates, 18 October 2026: 62,274 rows; count(species) 62,210 (so 64 empty); diameter = 0 in 3,630 rows;
//    max diameter 111; 481 distinct species labels; placeholder labels Stump 986, Unknown 372, Dead 1, seven vacant-site
//    labels (Vacant Planting Site - Small 610, - Medium 482, - Large 129, Vacant Site 208, Vacant Site, Small 42,
//    Vacant Site, Large 6, Vacant - replant 1), our total 1,478; same species twice: "Southern Live Oak" 5,815 and
//    "Oak, Live (Southern)" 3,946; "Cedar Elm" 3,979 and "Elm, Cedar" 4,830.
//  - City of Austin Open Data, Austin Public Library Locations (tc36-hn4j): 23 records, wifi Yes on all 23, training Yes
//    on 22.
//  - City of Austin, City Council page: Mayor plus District 1 to District 10.
//  - TEA, AP Computer Science Principles Grant page: the grant "helps school districts launch AP CSP courses and build
//    CTE computer science pathways"; cycles 2024-2026 LASO 2, 2025-2027 LASO 3, 2026-2028 LASO 4, 2027-2029 LASO 5;
//    Fall 2026 LASO 4 progress survey closes Nov. 15, 2026.
//  - Code.org (2025), State of AI + CS Education, Most Recent Access Data: TX 2023-2024, 48.0% (Access tab only).
//  - IANA tzdb northamerica: America/Chicago, US DST rule.
// Lesson family: missing values, including zeros and placeholder labels that hide missing data.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'AUSTIN', label: 'Austin', blurb: 'Python and AI for Austin teens, starting with the missing values in the city\'s public tree inventory.' },
  market: US,
  slug: 'ai-and-python-classes-for-teens-in-austin-texas',
  code: 'apta',
  accent: '#80454C',
  accentRationale: 'Austin: a muted cedar-bark rose #80454C from the allocation table, contrast 6.89 on the paper and 5.93 on the deepest tint',
  pageType: 'city',
  place: {
    name: 'Austin',
    eyebrow: 'Austin, Texas',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Texas' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-texas', name: 'Texas' }],
  nav: [
    { label: 'Texas', href: '/coding-classes-in-texas' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Austin',
  title: 'AI and Python Classes for Teens in Austin, Texas | Online',
  description: 'Live online Python and AI classes for Austin teens: clean the city\'s 62,274-row tree inventory, learn why missing values break models, then train your own.',
  ogDescription: 'Austin teens learn Python and machine learning live online, starting with a real data-cleaning job on the City of Austin tree inventory. Grades 7 to 12.',
  twitterDescription: 'Python and AI for Austin teens, live online, built on city open data.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Austin Teens',
    description: 'Python, data cleaning, machine learning and AP Computer Science Principles for Austin students in grades 7 to 12, taught live online in level-matched batches or one to one.'
  },

  h1: 'AI and Python classes for teens in Austin, Texas',
  capsuleQ: 'How should an Austin teenager start learning AI?',
  capsule: 'With Python and messy real data, before any model. Modern Age Coders teaches Austin teens live online, in level-matched groups or one to one: first Python, then cleaning a public dataset such as the City of Austin\'s 62,274-row tree inventory, then training and testing machine learning models they can explain.',
  lead: 'Austin teenagers hear about AI every day, and many want to build it rather than just use it. The honest first step is not a neural network. It is learning what goes wrong when real data has holes in it, because every model inherits those holes. This page walks through a project we use with teens on the City of Austin&rsquo;s open tree inventory, explains where Texas is putting money into AP Computer Science Principles, and sets out how our live classes fit around an Austin school week.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Austin.',

  picks: {
    eyebrow: 'Courses for Austin teens',
    h2: 'Four routes into Python and AI',
    intro: 'Pick by goal; the free first lesson checks the starting level for you.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from first principles to files, functions and data, the base every AI project stands on.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Cleaning, grouping and charting real datasets, including the Austin tree inventory on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning models trained, tested and broken on purpose, so a student knows what a score means.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles, including the Create performance task, as support beside a school course.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: '', eyebrow: 'Signature project',
      h2: 'Finding the holes in Austin&rsquo;s tree inventory',
      intro: 'The City of Austin publishes a Tree Inventory of public trees on its open data portal, in the public domain. We queried it on 18 October 2026. A teen&rsquo;s first job is not to model it but to find out what is missing.',
      body: [
        { kind: 'table', caption: 'Missing and placeholder values in the Austin Tree Inventory (our counts from SoQL queries, 18 October 2026)', head: ['What we checked', 'Rows', 'Why it matters'], rows: [
          ['All rows', '62,274', 'The starting count, recorded before anything is dropped'],
          ['Species left empty', '64', 'A true missing value, easy to find with a null check'],
          ['Diameter recorded as 0', '3,630', 'A disguised missing value: no tree is zero inches across'],
          ['Species labelled Stump', '986', 'A real record, but not a living tree'],
          ['Species labelled Unknown', '372', 'Filled in, yet carrying no information'],
          ['Seven vacant-site labels combined', '1,478', 'Places for a tree, counted as if they were trees']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The easy blanks', p: 'A null check finds the 64 rows with no species in one line of code. Students who stop here believe the data is almost perfect, which is the trap.' },
          { h3: 'The hidden blanks', p: 'Zero diameters, Unknown, Stump and the vacant-site labels all pass a null check. Together they are thousands of rows that would quietly distort any average or model.' },
          { h3: 'The double names', p: 'The same tree appears under two labels: Southern Live Oak (5,815 rows) and Oak, Live (Southern) (3,946). Cedar Elm and Elm, Cedar split the same way.' }
        ] },
        { kind: 'p', text: 'In class, a student writes the checks in pandas: <code>df[&quot;species&quot;].isna().sum()</code> for the true blanks, <code>(df[&quot;diameter&quot;] == 0).sum()</code> for the disguised ones, and a value count on the species column to surface the placeholders. Even the column names teach something: the city&rsquo;s file spells one of them <code>longtitude</code>, so code that expects <code>longitude</code> fails on the first run.' },
        { kind: 'callout', h3: 'What these numbers are, and are not', p: 'Every count above is ours, from queries we ran on one day. The 1,478 is our own total of seven label counts. The city describes the file as public trees inventoried as of March 13th, 2020, compiled from several departments, and warns that it is not a complete inventory and that some errors or duplicates may exist. That warning is part of the lesson, not a footnote.' }
      ]
    },
    {
      id: 'model', tint: 'deep', eyebrow: 'From cleaning to AI',
      h2: 'Why a model trained on the raw file would mislead you',
      intro: 'Teens who skip the cleaning get a model that is confident and wrong. Here is the sequence we teach instead.',
      body: [
        { kind: 'table', caption: 'Our five-step route from raw Austin data to a first model', head: ['Step', 'What the student does', 'What they learn'], rows: [
          ['1. Profile', 'Count rows, nulls, zeros and the most common labels', 'Data quality is measured, not assumed'],
          ['2. Decide', 'Choose to drop, recode or keep each problem group, and write down why', 'Cleaning is a set of judgments with consequences'],
          ['3. Merge labels', 'Map the duplicate species names to one name each', 'String matching and lookup tables'],
          ['4. Model', 'Predict whether a record is a large tree from species and location', 'Train and test splits, and a baseline to beat'],
          ['5. Compare', 'Train again on the raw file and compare scores', 'How unclean data inflates or hides error']
        ] },
        { kind: 'p', text: 'The fifth step is the one teenagers remember. When the zero diameters stay in, a model can look accurate simply because thousands of rows are trivially &ldquo;small&rdquo;. Seeing a score move because of a cleaning choice, not a smarter algorithm, is the moment a student starts treating AI results with healthy suspicion.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Tools', p: 'Python, pandas and scikit-learn in Google Colab or Jupyter, all free, so an Austin student can keep working between classes.' },
          { h3: 'Time', p: 'Profiling and cleaning take two or three classes; the first model and the comparison take two more.' },
          { h3: 'Output', p: 'A short written notebook the student can show, explaining each decision in plain English.' }
        ] }
      ]
    },
    {
      id: 'austin', tint: 'tint', eyebrow: 'Austin facts we used',
      h2: 'Austin in a few official numbers',
      intro: 'From the City of Austin&rsquo;s own open data portal and council page, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'City of Austin facts used on this page', head: ['Topic', 'Figure', 'Source'], rows: [
          ['Public tree inventory', '62,274 rows, as of March 13th, 2020', 'City of Austin Open Data, Tree Inventory'],
          ['Distinct species labels', '481 (our count, before merging duplicates)', 'Our query on the same dataset'],
          ['Largest diameter value', '111', 'Our query on the same dataset'],
          ['Public library locations', '23 records, all listing Wi-Fi', 'City of Austin Open Data, Austin Public Library Locations'],
          ['Library training offered', '22 of the 23 location records', 'Same dataset'],
          ['City Council', 'A mayor and ten districts, District 1 to District 10', 'City of Austin, City Council page']
        ] },
        { kind: 'p', text: 'The library figure is practical as well as interesting: a teen without a quiet place to code at home can join a class from any of those locations with a laptop and headphones. The 481 species labels shrink once duplicates are merged, and estimating by how much is a good extension task.' }
      ]
    },
    {
      id: 'texas', tint: '', eyebrow: 'Texas and AP CSP',
      h2: 'Texas is paying districts to start AP Computer Science Principles',
      intro: 'Texas context in brief; graduation credit and the standards are explained in depth elsewhere on this site.',
      body: [
        { kind: 'p', text: 'The Texas Education Agency runs an AP Computer Science Principles Grant that, in TEA&rsquo;s words, &ldquo;helps school districts launch AP CSP courses and build CTE computer science pathways.&rdquo; TEA lists grant cycles from 2024 to 2026 (LASO 2) through 2027 to 2029 (LASO 5), and its fall 2026 progress survey for the LASO 4 cycle closes on Nov. 15, 2026. Code.org&rsquo;s 2025 data puts Texas high schools offering computer science at 48.0% in 2023 to 2024 (Code.org (2025). 2025 State of AI + CS Education). For the graduation rules and the standards, see <a class="cg-inline-link" href="/coding-classes-in-texas">coding classes in Texas</a>.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'If AP CSP is offered', p: 'Our AP Computer Science Principles course runs alongside the school class, with extra practice on the Create performance task and the exam.' },
          { h3: 'If it is not', p: 'A student can still learn the same ideas with us and decide later whether to sit the exam; College Board rules on exam registration apply.' },
          { h3: 'Either way', p: 'School assignments and the Create task stay the student&rsquo;s own work. We teach the ideas; we never write graded work.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'Central Time, and classes that move with your week',
      intro: 'Austin follows America/Chicago in the IANA time zone database. Our teachers are based in India.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Flexible scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Two offsets a year', p: 'From March to November India time is 10 hours 30 minutes ahead of Austin; in winter the gap widens to 11 hours 30 minutes.' },
          { h3: 'The dates to note', p: 'The 2026 to 2027 switches fall on Sunday, November 1, 2026 and Sunday, March 14, 2027. Your class time is always stated in Central Time.' }
        ] },
        { kind: 'spec', title: 'A data bug on the calendar', p: 'Teen students store class times with Python&rsquo;s zoneinfo module and America/Chicago, then test a timestamp on each side of November 1, 2026. It is the same lesson as the tree data in another form: a value that looks fine can still be wrong.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first Python to models you can defend',
    intro: 'Grade ranges are a guide; the trial lesson sets the start.',
    cols: [
      { band: 'Grades 7 to 8', h3: 'Python foundations', p: 'Variables, loops, functions and files, with small data tasks.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Data work', p: 'Cleaning and charting real datasets such as the Austin inventory.', courses: ['data-science-course-for-teens-python-data', 'git-github-version-control-course-for-teens'] },
      { band: 'Grades 10 to 12', h3: 'Machine learning', p: 'Training, testing and comparing models on cleaned data.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and portfolio', p: 'AP Computer Science Principles or A, and a project portfolio.', courses: ['ap-computer-science-principles-exam-prep-course', 'ap-computer-science-a-java-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Building, not prompting',
    h2: 'Can an Austin teen learn AI just by using chatbots?',
    intro: 'They can learn to use them. Building and judging AI takes code and data.',
    p1: 'A chatbot can write the pandas line that counts nulls. It will not tell a student that 3,630 zero diameters are also missing, unless the student already suspects it and asks. The suspicion comes from having looked at the data by hand.',
    p2: 'Our teen courses keep that order: write and read the code first, inspect the data, then use AI assistants for speed once the student can check their output. Teens also learn the age rules: several AI tools set minimum ages in their own terms, and we follow them.',
    closer: 'The Austin project is small on purpose. A teen who can explain every row they dropped is ready for bigger models; one who cannot is not, whatever the tool.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live from India, on an Austin schedule',
    intro: 'Every class is a live lesson with a teacher, not a recording.',
    cells: [
      { h3: 'Join from anywhere in Austin', p: 'Home, a library location or a quiet room at a relative&rsquo;s house: a laptop, sound and a stable connection are all a student needs.' },
      { h3: 'Built for US grades', p: 'Teachers plan in US grade levels and around the Texas school year, with extra support near AP exam season.' },
      { h3: 'Start with a trial', p: 'The first lesson is free and practical; afterwards you get a recommended course, level and time with no card details requested.' },
      { h3: 'Level-matched batches', p: 'Groups of fifteen to twenty teens working at one stage, from Austin and other US cities.' },
      { h3: 'Private classes', p: 'One teen, one teacher, for students preparing for AP or racing ahead on AI.' },
      { h3: 'Confirmed in Central Time', p: 'Weekdays or weekends, chosen by you, and written in Central Time every time.' }
    ],
    spec: { title: 'What we do not claim', p: 'There is no Modern Age Coders office in Austin. Teaching is online only, and we are not connected with the City of Austin, TEA, the College Board or Code.org.' }
  },

  fees: {
    h2: 'What Python and AI classes cost in Austin',
    intro: 'Three options, all shown here.',
    first: 'A free first lesson that ends with a level, a course and a suggested class time.',
    group: 'A monthly fee for a level-matched batch of fifteen to twenty teens.',
    private: 'A monthly fee for one teen with a dedicated teacher.',
    closer: 'Fees are charged in US dollars at one rate for the whole country. Billing begins only after the free lesson, when you have agreed the course and time; see the pricing page for holidays and missed sessions.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free Python or AI lesson',
    intro: 'Tell us your teen&rsquo;s grade and goal. A first-time coder gets a Python task; a student with some Python can start on the Austin tree data.',
    success: 'Thank you. The team will contact you shortly about a class for your teen in Austin.'
  },

  faq: {
    h2: 'Austin teen Python and AI questions',
    intro: 'What Austin parents and students ask most.',
    items: [
      { q: 'Does my teen need to know Python before learning AI?', a: 'Yes. We start with Python and data handling, because every machine learning step depends on reading and fixing the code and the data.' },
      { q: 'What is the Austin tree inventory project?', a: 'Students query the City of Austin Tree Inventory, count true and disguised missing values, merge duplicate species names, and then compare a model trained on raw and cleaned data.' },
      { q: 'Are the tree counts on this page official?', a: 'No. They are our own queries from 18 October 2026. The city says the inventory is not complete and may contain errors or duplicates.' },
      { q: 'What does a disguised missing value mean?', a: 'A value that is filled in but carries no real information, such as a diameter of 0 or a species of Unknown. A simple null check does not catch it.' },
      { q: 'Does Texas fund AP Computer Science Principles?', a: 'TEA runs an AP Computer Science Principles Grant that helps districts launch AP CSP courses and build computer science pathways, with cycles listed through 2027 to 2029.' },
      { q: 'Can you help with the AP CSP Create task?', a: 'We teach the concepts and the skills the task needs. The submitted work must be the student\'s own, so we never write it for them.' },
      { q: 'When do Austin classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Central Time.' },
      { q: 'What equipment does my teen need?', a: 'A laptop or desktop, a microphone and a reliable connection. Python tools such as Colab and Jupyter are free.' },
      { q: 'Is there an Austin center?', a: 'No. All teaching is live and online from India, and we do not claim a local office.' },
      { q: 'How do the fees work?', a: 'There are three prices: a trial lesson at zero cost, a monthly rate for a group, and a higher monthly rate for private classes, all listed in the fees block. Payment starts after the trial.' }
    ]
  },

  next: {
    eyebrow: 'More to read',
    h2: 'Next steps for Austin teens',
    html: 'Teens ready for more AI can read <a class="cg-inline-link" href="/ai-courses-for-high-school-students">AI courses for high school students</a> and <a class="cg-inline-link" href="/ai-research-programs-for-high-school-students">AI research programs</a>. For tools, see <a class="cg-inline-link" href="/google-colab-help-for-students">Google Colab help</a> and <a class="cg-inline-link" href="/jupyter-notebook-errors-for-students">Jupyter notebook errors</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Austin, Texas and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-texas', label: 'Texas' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/machine-learning-competitions-for-high-school-students', label: 'ML competitions' }
  ],

  personalityCss: `
.cg-root.cg-apta .cg-hero-grid { align-items: start; }
.cg-root.cg-apta .cg-hero h1 { font-weight: 680; letter-spacing: -0.01em; line-height: 1.1; }
.cg-root.cg-apta .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-apta .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-apta .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-apta .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-apta .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Texas, read raw on 18 October 2026: TEA AP Computer Science Principles Grant (launch AP CSP courses, CTE CS pathways; LASO 2 2024-2026 to LASO 5 2027-2029; LASO 4 fall 2026 survey closes Nov. 15, 2026); Code.org (2025) State of AI + CS Education, Most Recent Access Data: TX 48.0% in 2023-2024; IANA America/Chicago and the US DST rule.',
    localProject: 'City of Austin Open Data Tree Inventory (wrik-xasw, public domain, as of March 13th, 2020), our SoQL counts on 18 October 2026: 62,274 rows; 64 empty species; 3,630 zero diameters; Stump 986; Unknown 372; seven vacant-site labels totalling 1,478 (ours); 481 distinct labels; duplicate names Southern Live Oak 5,815 vs Oak, Live (Southern) 3,946; column spelled longtitude. Lesson family: missing and disguised-missing values.',
    requiredMentions: [
      '62,274',
      '3,630',
      '1,478',
      'Oak, Live (Southern)',
      'longtitude',
      'March 13th, 2020',
      '23 records, all listing Wi-Fi',
      'District 1 to District 10',
      'LASO 4'
    ],
    sources: [
      { claim: 'City of Austin Open Data: Tree Inventory metadata, licence and our SoQL counts.', url: 'https://data.austintexas.gov/Environment/Tree-Inventory/wrik-xasw' },
      { claim: 'City of Austin Open Data: Austin Public Library Locations.', url: 'https://data.austintexas.gov/resource/tc36-hn4j.json' },
      { claim: 'City of Austin Open Data Terms of Use: public domain unless noted, no warranty.', url: 'https://datahub.austintexas.gov/stories/s/ranj-cccq' },
      { claim: 'City of Austin: City Council, mayor and Districts 1 to 10.', url: 'https://www.austintexas.gov/department/city-council' },
      { claim: 'TEA: AP Computer Science Principles Grant.', url: 'https://tea.texas.gov/student-readiness-and-high-school/college-career-and-military-prep/ap-computer-science-principles-grant' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Texas access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/Chicago and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'A total number of trees in Austin: the city says the inventory is not complete, so no total is claimed.',
      'Diameter units: the metadata does not state them, so the page prints the raw value 111 without a unit.',
      'Names of council members, schools or the school district: not printed; counts only.',
      'The Texas strands and the computer-science-as-language rule: covered on /coding-classes-in-texas.',
      'That our classes satisfy AP or TEA requirements: refused.',
      'Any affiliation with the City of Austin, TEA, the College Board or Code.org.'
    ]
  }
};
