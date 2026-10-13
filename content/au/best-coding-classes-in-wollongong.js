'use strict';
// Wollongong (cg- regional city page, Australia cluster Phase 7, row 139). Shaped page: leads with teenagers and adults.
// Spine: three lists are each already in order; what is the cheapest way to make one ordered list from them?
// Data: NSW Department of Education, NSW public schools master dataset (master_dataset.csv, Date_extracted 2026-10-02;
// Creative Commons Attribution on Data.NSW), downloaded 7 October 2026. Rows with LGA Wollongong (63), Shellharbour (20)
// and Kiama (5): 88 public schools, each with a Date_1st_teacher. Measured by us on 7 October 2026 (scratchpad
// au/r1/wol_merge.py): each council list sorted by first-teacher date, then merged three ways, counting "less than"
// comparisons: heapq.merge 161; a hand-written heap merge 161; Python's sorted() on the three lists joined end to end
// (Timsort, which detects the sorted runs) 188; sorted() on the same 88 items shuffled (random.seed 2026) 450. All three
// outputs are identical. Merged order starts Wollongong Public School 1851-01-01, Berkeley Public School 1858-01-01,
// Fairy Meadow Public School 1858-12-01 and ends Flinders Public School 2003-01-29, Shell Cove Public School 2005-01-28,
// Tullimbar Public School 2008-01-29. Earliest per council: Wollongong Public School 1851, Shellharbour Public School
// 1859, Kiama Public School 1861-05-01. Decades of first-teacher dates: 1950s 26 (the largest), 1960s 13, 1970s 11.
// Twenty-four schools share a date with an earlier school in the merged list. Lesson family: k-way merge of sorted
// lists with a heap, and why Timsort is fast on runs; screened free site-wide on 7 October 2026 ("k-way merge": 0 hits;
// claimed by AU-R1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Wollongong Significant Urban Area (1036),
// compared with New South Wales and Australia: 305,691 people; median age 39; 83,172 families; 126,004 private
// dwellings; 2.5 people per household; separate house 81,177 (71.3%; NSW 65.6%); flat or apartment 16,888 (14.8%; NSW
// 21.7%; Australia 14.2%); Professionals 32,151 (23.1%; NSW 25.8%; Australia 24.0%); Technicians and Trades Workers
// 20,454 (14.7%; NSW 11.9%); Bachelor Degree level and above 55,394 (22.1%; NSW 27.8%; Australia 26.3%); aged 15 to 19
// 18,627 (6.1%); aged 20 to 24 20,968 (6.9%). NSW Department of Education 2026 calendar (Eastern division): Term 4
// Tuesday 13 October to Thursday 17 December. IANA tz: Australia/Sydney daylight saving from the first Sunday in
// October to the first Sunday in April. Excluded: income, rent, mortgage, ancestry, birthplace, language, religion,
// health; the schools file's enrolment, student background and socio-economic columns are not used.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'WOLLONGONG', label: 'Wollongong', blurb: 'Wollongong, 88 public schools across three councils, and a project on merging sorted lists the cheap way.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-wollongong',
  code: 'wolb',
  accent: '#50361A',
  accentRationale: 'Wollongong: an escarpment brown (HSV saturation 0.68, value 0.31, hue 31), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 11.2:1 on white and 9.1:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Wollongong',
    eyebrow: 'Wollongong, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wollongong, New South Wales',
  title: 'Best Coding Classes in Wollongong | Live Online, Teens and Adults',
  description: 'Live online coding, Python, algorithms and AI classes for Wollongong and Illawarra teens and adults, in small level-matched groups or one to one. First lesson free.',
  ogDescription: 'Coding classes for Wollongong teens and adults, with a project that merges three councils\' school lists and counts every comparison.',
  twitterDescription: 'Wollongong coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Algorithms Classes for Wollongong Learners',
    description: 'Level-matched online Python, algorithms, data structures and AI for teenagers and adults across Wollongong, Shellharbour and Kiama, taught live in English.'
  },

  h1: 'Coding classes in Wollongong',
  capsuleQ: 'What are the best coding classes in Wollongong?',
  capsule: 'The kind where a teacher sets real problems on Illawarra data, asks why one method is faster than another, and makes you count the work rather than guess. Some 305,691 people lived in the Wollongong urban area at the 2021 Census. Our lessons happen live on screen, with a private teacher or a small group at your own stage, and you pay nothing for the first one.',
  lead: 'The NSW schools file records, for every public school, the date it got its first teacher. Split the 88 schools of Wollongong, Shellharbour and Kiama councils into three lists, sort each by that date, and you have three tidy columns of history running from 1851 to 2008. Now combine them into one list in date order. You could pour them together and sort again, or you could walk down all three lists at once, always taking the earliest date at the top. Our Wollongong learners do both and count every comparison: 161 for the three-way merge, 188 when Python sorts the joined lists, and 450 when the same schools arrive in random order.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Wollongong.',

  picks: {
    eyebrow: 'Course picks for Wollongong',
    h2: 'Four starting points for Illawarra teenagers and adults',
    intro: 'Choose by what you want to build; the free lesson pins down the right level. Card details are never requested.',
    items: [
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Sorting, merging, heaps and searching, each one timed and counted on real lists rather than taken on trust.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to files and functions, practised on open government data.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Merge algorithms, priority queues and external sorting, written from scratch and benchmarked.' },
      { course: 'mysql-database-complete-masterclass-college', band: 'Adults at work', note: 'How databases merge and sort data behind the scenes, and how to write queries that make it cheap.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wollongong in the Census',
      h2: 'An urban area of 305,691 between the escarpment and the sea',
      intro: 'Census 2021 QuickStats for the Wollongong Significant Urban Area, with the state and national shares that QuickStats prints alongside.',
      body: [
        { kind: 'table', caption: 'Selected 2021 Census counts for the Wollongong urban area', head: ['Census item', 'Wollongong urban area', 'NSW share', 'Australian share'], rows: [
          ['People', '305,691', 'Not compared', 'Not compared'],
          ['Median age', '39', 'Not compared', 'Not compared'],
          ['Families', '83,172', 'Not compared', 'Not compared'],
          ['Private dwellings', '126,004', 'Not compared', 'Not compared'],
          ['Flats or apartments among occupied dwellings', '16,888, or 14.8%', '21.7%', '14.2%'],
          ['Employed people in professional occupations', '32,151, or 23.1%', '25.8%', '24.0%'],
          ['Aged 15 and over with a bachelor degree or higher', '55,394, or 22.1%', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trades and technical work', p: 'The Census counted 20,454 technicians and trades workers, 14.7% of employed residents, compared with 11.9% across New South Wales.' },
          { h3: 'Twenty-somethings', p: 'The Census counted 20,968 residents aged 20 to 24 and 18,627 aged 15 to 19, figures we report without speculating about why.' },
          { h3: 'Houses first', p: 'Separate houses make up 71.3% of occupied dwellings, above the state figure of 65.6%.' }
        ] },
        { kind: 'p', text: 'How we handle census numbers: the ABS randomly adjusts small cells to protect privacy, so rows may not sum to totals. We quote totals and shares as published and never create a total of our own by adding rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Three sorted lists: merge them, or sort them all again?',
      intro: 'The 88 public schools of Wollongong, Shellharbour and Kiama councils from the NSW public schools master dataset, ordered by each school\'s first-teacher date.',
      body: [
        { kind: 'table', caption: 'The three lists (from the NSW schools file)', head: ['Council', 'Schools', 'Earliest first-teacher date', 'Latest first-teacher date'], rows: [
          ['Wollongong', '63', 'Wollongong Public School, 1851', 'Smiths Hill High School, 1979'],
          ['Shellharbour', '20', 'Shellharbour Public School, 1859', 'Tullimbar Public School, 2008'],
          ['Kiama', '5', 'Kiama Public School, 1861', 'Minnamurra Public School, 1976']
        ] },
        { kind: 'table', caption: 'Comparisons needed to produce one list in date order (our count, 7 October 2026)', head: ['Method', 'Comparisons'], rows: [
          ['Three-way merge with a heap (heapq.merge)', '161'],
          ['Our own heap merge written by hand', '161'],
          ['sorted() on the three lists joined end to end', '188'],
          ['sorted() on the same 88 schools in random order', '450']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Keep one finger on each list', p: 'A k-way merge looks only at the front item of each list. With three lists, a small heap tells you which front item is earliest in a couple of comparisons.' },
          { h3: '2. Take, then refill', p: 'Move the earliest school to the output and put the next school from the same council into the heap. Repeat 88 times and the merged list is complete.' },
          { h3: '3. Why sorting again is not so bad', p: 'Python\'s sort spots that the joined list is made of three sorted runs and merges them, so it needs only 188 comparisons. Shuffle the schools first and it needs 450.' }
        ] },
        { kind: 'callout', h3: 'What the merged list shows', p: 'The merged order starts with Wollongong Public School in 1851, then Berkeley in 1858 and Fairy Meadow later that year, and ends with Flinders in 2003, Shell Cove in 2005 and Tullimbar in 2008. More first-teacher dates fall in the 1950s than in any other decade: 26 of the 88. Twenty-four schools share a date with another school, a reminder to decide how ties should be ordered before you trust any sort.' },
        { kind: 'p', text: 'These counts are ours, measured on the NSW file extracted on 2 October 2026, and comparisons were counted with a wrapper that records every "less than" check. The date column is the department\'s record of a first teacher, which is not always the same as an opening date for the current school building.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Thinking about sorting',
      h2: 'Five questions before you sort a large list',
      intro: 'Learned on three council lists, then reused on log files, exports from different systems and data too large for memory.',
      body: [
        { kind: 'table', caption: 'What to ask before reaching for sort()', head: ['Question', 'What to check', 'Why it matters'], rows: [
          ['Is the data already partly ordered?', 'Look for sorted runs in each source', 'Merging runs is far cheaper than sorting from scratch'],
          ['How many sources are there?', 'Two files, three councils, a hundred logs', 'A heap keeps a many-way merge efficient'],
          ['Does it fit in memory?', 'Size of the full list against available RAM', 'Huge data is sorted in chunks and merged from disk'],
          ['How are ties ordered?', 'Equal dates, equal scores, equal names', 'Unclear tie rules give different results on different runs'],
          ['How will you check the result?', 'Compare with sorted() on a sample', 'A fast merge that drops an item is a serious bug']
        ] },
        { kind: 'p', text: 'The memory question is where k-way merging earns its keep in industry. Data far bigger than a computer\'s memory is sorted in pieces, each piece saved to disk, and the pieces are then merged in exactly the way our learners merge three council lists, reading just the front of each piece at a time.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Write a two-list merge by hand, then a three-list merge with a heap, and count comparisons with a simple wrapper class.' },
          { h3: 'University students', p: 'External sorting, merge sort and Timsort\'s run detection, analysed and timed for interviews and coursework.' },
          { h3: 'Adults at work', p: 'Combine exports from several systems into one ordered report without loading everything at once.' }
        ] },
        { kind: 'p', text: 'We are independent of the NSW Department of Education and of the ABS. The census numbers come from the bureau and the school list from the department\'s open file; the comparison counts and the merged order are our own work.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the Illawarra',
      h2: 'Three councils, one coastline and a clock that jumps',
      intro: 'Small facts with a coding angle.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Three councils in the file', p: 'The schools file lists 63 public schools in Wollongong, 20 in Shellharbour and 5 in Kiama. Filtering by council name is the first step of the project.' },
          { h3: 'Final term of 2026', p: 'Eastern NSW public schools teach Term 4 of 2026 from Tuesday 13 October to Thursday 17 December, says the department calendar.' },
          { h3: 'Summer time', p: 'New South Wales moves its clocks forward on the first Sunday in October and back on the first Sunday in April, as the IANA time zone database records.' }
        ] },
        { kind: 'spec', title: 'Sorting times across a clock change', p: 'If you sort events by local time across the April change, an hour repeats and two events can appear in the wrong order. Sorting by UTC first and converting for display afterwards avoids the problem, a small habit with big consequences in logging and booking systems.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first sort to merging data at scale',
    intro: 'The ages are guidance only; the free lesson decides the actual starting rung.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Lists and sorting', p: 'Reading the schools file, sorting it by date and printing the oldest and newest schools.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Merging and heaps', p: 'Two-way and three-way merges, heaps and comparison counting on real council lists.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'University', h3: 'Sorting at scale', p: 'Merge sort, Timsort and external sorting, with measurements on files larger than memory.', courses: ['data-structures-algorithms-masterclass-college', 'competitive-programming-masterclass-college'] },
      { band: 'Adults', h3: 'Data at work', p: 'Combining and ordering exports from several systems with scripts and databases.', courses: ['mysql-database-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant will just call sort(). Why should a Wollongong teenager know about merging?',
    intro: 'Because sort() is often fine, and knowing when it is not is the part an assistant will not tell you.',
    p1: 'Ask a chatbot to combine three sorted lists and it will usually join them and call sort(), which on our three council lists works perfectly well thanks to Python\'s run detection. Ask it to combine three hundred log files that do not fit in memory and the same answer crashes the machine. The assistant gives the common answer; it does not ask how big your data is or whether it is already in order.',
    p2: 'Our Wollongong learners know both answers and the reasons for each, because they have counted the comparisons themselves: 161 for a heap merge, 188 for Python\'s sort on runs, 450 on shuffled data. That habit of measuring instead of assuming is what turns generated code into code you can defend.',
    closer: 'AI can suggest the code, but a Wollongong learner who can say when that code will break is the person a team relies on in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Thirroul to Kiama, one class online',
    intro: 'The Illawarra runs along a narrow strip of coast, and an online lesson connects it end to end.',
    cells: [
      { h3: 'Anywhere along the strip', p: 'Learners in Corrimal, Dapto and Shell Cove can join one lesson from their own homes at the same time.' },
      { h3: 'Local year names', p: 'Year 7, Year 10, the HSC years: teachers speak the way Illawarra schools do, and lessons run in English.' },
      { h3: 'Try before anything is paid', p: 'In the opening session you build something small with the teacher watching, and you leave with advice on level, course and time slot; nothing is charged and no card is asked for.' },
      { h3: 'Groups that fit', p: 'Between five and ten classmates who have reached the same point, some local and some from elsewhere, which keeps every level running at a sensible hour.' },
      { h3: 'Regular weekly lessons', p: 'Typically two lessons a week, about eight a month, with holidays and exam weeks planned with the teacher.' },
      { h3: 'Teachers in India', p: 'In winter our teachers are 4 hours 30 minutes behind Wollongong; during daylight saving the gap is 5 hours 30 minutes.' }
    ],
    spec: { title: 'Times set in Wollongong time', p: 'Because New South Wales changes its clocks and India does not, each lesson time is agreed in Wollongong time and stays put through the October and April changes.' }
  },

  fees: {
    h2: 'What classes cost in Wollongong',
    intro: 'Three figures in total.',
    first: 'One free lesson, ending with a level, a recommended course and a weekly time.',
    group: 'A month of tuition, usually eight lessons, with fifteen to twenty learners at your level.',
    private: 'About eight one-to-one lessons a month with the same teacher.',
    closer: 'Illawarra families are charged in US dollars, the same figure from Thirroul to Kiama. Billing begins only after the trial fixes a course and time; the pricing page covers holiday breaks, missed lessons and moving between group and private classes.'
  },

  reviewsH2: 'Google reviews from our families, quoted as written',

  book: {
    h2: 'Tell us your starting point',
    intro: 'We set a first task that fits: sorting a list for a beginner in Year 8, a three-way merge for a Year 11 student, or the full schools file and an external sort for an adult.',
    success: 'Thank you. Our team will contact you soon about a class in Wollongong.'
  },

  faq: {
    h2: 'Wollongong coding class questions',
    intro: 'What Wollongong families and learners tend to ask first.',
    items: [
      { q: 'How big is Wollongong?', a: 'Its urban area held 305,691 residents at the 2021 Census, and the middle resident was 39.' },
      { q: 'What is a k-way merge?', a: 'A k-way merge combines k lists that are each already sorted into one sorted list, by repeatedly taking the smallest front item among the lists. A heap keeps track of those front items so each step needs only a few comparisons.' },
      { q: 'What is the Wollongong schools project?', a: 'Learners split the 88 public schools of Wollongong, Shellharbour and Kiama councils into three lists sorted by first-teacher date, merge them, and count the comparisons: 161 with a heap merge, 188 with Python\'s sort on the joined lists and 450 on a shuffled list.' },
      { q: 'Why is Python\'s sort fast on the joined lists?', a: 'Python uses Timsort, which looks for runs that are already in order and merges them. The joined list contains three sorted runs, so most of the work is already done.' },
      { q: 'Can Year 11 and 12 students in Wollongong join?', a: 'Yes. Senior students practise programming and algorithms alongside their school courses, with lessons planned around NSW terms. Any assessed school work is done by the student alone.' },
      { q: 'When are lessons for Wollongong learners?', a: 'Most run between the end of the school day and dinner, or on Saturdays, fixed at the trial and written in Illawarra time. Our teachers sit four and a half hours behind in winter, five and a half in summer.' },
      { q: 'Do you teach primary-age children in Wollongong?', a: 'We do, from age 6, usually starting in Scratch with picture-based programs; this page is aimed at older learners.' },
      { q: 'Is there a Modern Age Coders centre in Wollongong?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Wollongong coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Wollongong and New South Wales learners',
    html: 'Students preparing for the HSC can read <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>, and anyone weighing up subjects should see <a class="cg-inline-link" href="/choosing-year-11-computing-subjects-australia">choosing Year 11 computing subjects</a>. Up the coast there is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">a page for Sydney</a>, and the state overview lives at <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wollongong and New South Wales',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/vibe-coding-and-ai-agents-classes-in-central-coast-nsw', label: 'Central Coast' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-wolb .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-wolb .cg-hero h1 { font-weight: 760; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-wolb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-wolb .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-wolb .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-wolb .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-wolb .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-wolb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wolb .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-wolb .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Wollongong Significant Urban Area, ABS Census 2021 QuickStats, area code 1036, compared with New South Wales and Australia (read 7 October 2026): 305,691 people; median age 39; 83,172 families; 126,004 private dwellings; average 2.5 people per household; dwelling structure: separate house 81,177 (71.3 percent; NSW 65.6), flat or apartment 16,888 (14.8 percent; NSW 21.7; Australia 14.2); occupation: Professionals 32,151 (23.1 percent; NSW 25.8; Australia 24.0), Technicians and Trades Workers 20,454 (14.7 percent; NSW 11.9); Bachelor Degree level and above 55,394 (22.1 percent; NSW 27.8; Australia 26.3); aged 15 to 19: 18,627 (6.1 percent); aged 20 to 24: 20,968 (6.9 percent). NSW Department of Education 2026 calendar, Eastern division: Term 4 Tuesday 13 October to Thursday 17 December. IANA tz database: Australia/Sydney daylight saving from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'K-way merge with a heap against Timsort. NSW public schools master dataset (Date_extracted 2026-10-02): LGA Wollongong 63, Shellharbour 20, Kiama 5 rows, 88 schools, all with Date_1st_teacher. Each list sorted by (Date_1st_teacher, School_name). Comparisons counted with a wrapper class whose __lt__ increments a counter: heapq.merge 161; hand-written heap merge (heapq push and pop of (item, list index, position)) 161; sorted() on the concatenation 188; sorted() on a random.shuffle of the concatenation (random.seed 2026) 450; all outputs identical. Merged first: Wollongong Public School 1851-01-01, Berkeley Public School 1858-01-01, Fairy Meadow Public School 1858-12-01; last: Flinders Public School 2003-01-29, Shell Cove Public School 2005-01-28, Tullimbar Public School 2008-01-29. Per council earliest and latest: Wollongong 1851 (Wollongong Public School) to 1979 (Smiths Hill High School); Shellharbour 1859 (Shellharbour Public School) to 2008 (Tullimbar Public School); Kiama 1861-05-01 (Kiama Public School) to 1976 (Minnamurra Public School). Decade counts: 1850s 5, 1860s 4, 1870s 6, 1880s 5, 1890s 3, 1910s 3, 1920s 2, 1930s 2, 1940s 2, 1950s 26, 1960s 13, 1970s 11, 1990s 3, 2000s 3. Same-date ties: 24. Lesson family: k-way merge, heap, Timsort run detection, external sorting.',
    requiredMentions: [
      '305,691',
      '83,172',
      '126,004',
      '55,394',
      '32,151',
      '20,454',
      'Tullimbar Public School',
      '161 for the three-way merge',
      'Thirroul to Kiama',
      '26 of the 88'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Wollongong Significant Urban Area (1036): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1036' },
      { claim: 'NSW Department of Education, NSW public schools master dataset, Creative Commons Attribution, on Data.NSW.', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, school calendar 2026: Eastern division term dates.', url: 'https://education.nsw.gov.au/schooling/calendars/2026' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That a first-teacher date is the date a school opened: the department records a first-teacher date, and the page uses that wording.',
      'Any reason for the larger 20 to 24 age band than 15 to 19: not stated by the ABS, so not offered.',
      'Non-government schools: the NSW master dataset covers public schools only.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and the observations feed 403 on 7 October 2026; neither was circumvented.',
      'Enrolment, Indigenous, language background and socio-economic columns: present in the schools file but not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education or the ABS.'
    ]
  }
};
