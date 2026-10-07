'use strict';
// Perth, Western Australia (cg- city page, Australia cluster Phase 6). Shaped page: online coding and Python
// for teenagers and adults; coding-classes-for-kids-perth owns the primary and lower-secondary intent. The
// slug carries "western-australia" because Scotland's Perth already has pages on this site.
// Spine: how does a Python dictionary find one key among hundreds without checking them all? Data: the
// Western Australian Department of Education "Alphabetical list of Western Australian schools"
// (SchoolsListExcel0880.xlsx, linked from catalogue.data.wa.gov.au, Creative Commons Attribution 4.0),
// downloaded 7 October 2026: 1,152 school rows statewide; North Metropolitan region 365 and South
// Metropolitan region 385, 750 rows in the two metropolitan regions with 747 distinct school names. Only the
// names are used: no enrolment, results or ranking data. Hash function: BLAKE2b with an 8-byte salt, modulo
// the table size (our choice). Measured by us on 7 October 2026 (scratchpad au/c1/per_cuckoo.py): separate
// chaining with 747 buckets (load 1.0): longest chain 4, 1.459 probes on average for a successful lookup,
// 265 empty buckets; linear probing at load 0.5 (1,494 slots): 1.431 probes on average, worst 11; at load
// 0.75 (996 slots): 2.134, worst 30; at load 0.9 (830 slots): 3.635, worst 65; cuckoo hashing with two
// tables, 200 salt pairs per load: total load 0.40 (933 slots per table) 1 failed build in 200, longest
// displacement chain 27; load 0.45 (830 per table) 4 failures; 0.49 (762) 21; 0.52 (718) 52; 0.55 (679)
// 103. A cuckoo lookup always checks at most two slots. Lesson family: cuckoo hashing against chaining and
// linear probing; screened free site-wide on 7 October 2026 ("cuckoo": 0 page hits; claimed by AU-C1).
// Python FAQ (docs.python.org/3/faq/design.html), read raw: "CPython’s dictionaries are implemented as
// resizable hash tables."
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Perth (GCCSA 5GPER): 2,116,647
// people; median age 37 (Western Australia 38, Australia 38); 570,121 families; 882,374 private dwellings;
// 2.6 people per household; separate house 605,453 (77.8% of occupied private dwellings); flat or apartment
// 59,492 (7.6%; WA 6.5%; Australia 14.2%); Professionals 250,973 (23.7%; WA 22.0%; Australia 24.0%);
// Bachelor Degree level and above 454,538 (26.5% of people aged 15 and over; WA 23.8%; Australia 26.3%);
// aged 15 to 19 123,315 (5.8%). WA Department of Education future term dates page, 2027: Term 1 Monday
// 1 February to Friday 9 April; Term 2 Monday 26 April to Friday 2 July; Term 3 Monday 19 July to Friday
// 24 September; Term 4 Monday 11 October to Thursday 16 December. IANA tz database: Australia/Perth UTC+8
// with no daylight saving now; the AW rule records trial periods, the last ending in March 2009.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'PERTH', label: 'Perth (WA)', blurb: 'Online Python for Perth teens and adults, and a project that hashes 747 school names three ways.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-perth-western-australia',
  code: 'pwa',
  accent: '#407014',
  accentRationale: 'Perth: a kings-park eucalypt green (HSV saturation 0.82, value 0.44, hue 91), chosen by hand at least 10 RGB units from every accent in content and the shared stylesheets, 5.9:1 on white and 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Perth',
    eyebrow: 'Perth, Western Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Perth, Western Australia',
  title: 'Online Coding and Python Classes in Perth, WA | Live Teacher',
  description: 'Live online coding and Python classes for Perth teenagers and adults, from first scripts to data structures, taught by a real teacher. Your first lesson is free.',
  ogDescription: 'Online coding and Python classes for Perth, with a project that stores 747 Western Australian school names in three kinds of hash table.',
  twitterDescription: 'Perth online coding and Python classes, live with a teacher, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Perth Learners',
    description: 'Level-matched online Python, programming fundamentals, data structures and data projects for teenagers and adults across Greater Perth, taught live in English.'
  },

  h1: 'Online coding and Python classes in Perth',
  capsuleQ: 'What are the best online coding and Python classes in Perth?',
  capsule: 'For a Perth teenager or adult, a live online class where the teacher reads your Python as you type it and sets projects built on real Western Australian data. Greater Perth counted 2,116,647 people at the 2021 Census, and 77.8% of its occupied homes are separate houses, often a long drive from anywhere else. Online lessons remove the drive. We teach one to one or in small groups at the same level, and the first lesson costs nothing.',
  lead: 'Every Python programmer leans on the dictionary, usually without a second thought: give it a key, get the value back almost instantly. Our Perth project opens the lid on how that works. We took the Department of Education\'s public list of schools in the North and South Metropolitan regions, 747 different names, and stored them three ways. A chained table lets clashing names share a bucket. Linear probing walks to the next free slot. Cuckoo hashing gives every name two possible homes and evicts whoever is sitting there. Learners count the slots each method checks, push the tables until they fail, and come away knowing why a dictionary slows down long before it fills up.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python class for a learner in Perth.',

  picks: {
    eyebrow: 'Course picks for Perth',
    h2: 'Four ways into Python for a Perth learner',
    intro: 'Picked by what you want to do with code, then levelled in the free lesson. Nothing is charged and no card is needed to start.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the first print statement to classes and files, with every exercise run on real data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Reading spreadsheets with Python, counting and charting them, and asking whether a result can be trusted.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A full Python course from zero, including how dictionaries, sets and lists behave under the hood.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Adults seeking a credential', note: 'Preparation for the Python Institute entry and associate exams, with each topic implemented in code first.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Greater Perth in the Census',
      h2: 'A city of two million spread across separate houses',
      intro: 'QuickStats figures for the Greater Perth capital city area from the 2021 Census, next to the Western Australian and national results.',
      body: [
        { kind: 'table', caption: 'Greater Perth, 2021 Census QuickStats', head: ['Measure', 'Greater Perth', 'Western Australia', 'Australia'], rows: [
          ['People', '2,116,647', 'Not compared', 'Not compared'],
          ['Median age', '37', '38', '38'],
          ['Families', '570,121', 'Not compared', 'Not compared'],
          ['Private dwellings', '882,374', 'Not compared', 'Not compared'],
          ['Occupied homes that are separate houses', '605,453, or 77.8%', 'Not compared', '72.3%'],
          ['Occupied homes that are a flat or apartment', '59,492, or 7.6%', '6.5%', '14.2%'],
          ['Residents aged 15 and over with a bachelor degree or higher', '454,538, or 26.5%', '23.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Houses, not flats', p: 'Only 7.6% of Greater Perth\'s occupied homes were flats or apartments in 2021, about half the national share of 14.2%.' },
          { h3: 'A professional city', p: 'Professionals were 250,973 of Greater Perth\'s employed residents, 23.7%, ahead of the Western Australian figure of 22.0%.' },
          { h3: 'Teenagers in Perth', p: 'Greater Perth counted 123,315 residents aged 15 to 19 at the Census, 5.8% of its people.' }
        ] },
        { kind: 'p', text: 'One habit we keep when quoting a census. Each cell of a QuickStats table is lightly adjusted for privacy, so a column\'s pieces may not add up to its printed total. This page repeats the totals and percentages the bureau publishes and never builds a new total by adding pieces together.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How does a dictionary find one school among 747 without checking them all?',
      intro: 'The 747 distinct school names in the North and South Metropolitan regions of the Department of Education list, stored in three kinds of hash table.',
      body: [
        { kind: 'table', caption: 'Slots checked when looking up a name, measured on 7 October 2026 (our calculation)', head: ['Method and how full the table is', 'Average slots checked', 'Worst case'], rows: [
          ['Chaining, 747 buckets (as many buckets as names)', '1.459', 'A bucket holding 4 names'],
          ['Linear probing, half full', '1.431', '11 slots'],
          ['Linear probing, three quarters full', '2.134', '30 slots'],
          ['Linear probing, 90% full', '3.635', '65 slots'],
          ['Cuckoo hashing, any load that builds', 'At most 2', '2 slots, always']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Chaining', p: 'Each name is hashed to one of 747 buckets and clashing names share a short list. The longest list held 4 names, and 265 buckets were left empty.' },
          { h3: '2. Linear probing', p: 'If a slot is taken, step to the next one. Fine when the table is half empty; at 90% full one lookup needed 65 steps.' },
          { h3: '3. Cuckoo hashing', p: 'Every name has two possible slots in two tables. A newcomer evicts the occupant, who moves to its other slot. Lookups never check more than two places.' }
        ] },
        { kind: 'table', caption: 'Cuckoo hashing: builds that failed out of 200 attempts with different salts (our calculation)', head: ['How full both tables are together', 'Failed builds', 'Longest chain of evictions'], rows: [
          ['40%', '1 of 200', '27'],
          ['45%', '4 of 200', '41'],
          ['49%', '21 of 200', '57'],
          ['52%', '52 of 200', '69'],
          ['55%', '103 of 200', '81']
        ] },
        { kind: 'callout', h3: 'Fast lookups, fragile inserts', p: 'Cuckoo hashing makes reading cheap and writing risky. Past roughly half full, a growing share of builds ran into an endless loop of evictions and had to start again with new hash functions: 103 of 200 attempts failed at 55%. Linear probing never fails outright but slows sharply as it fills. Neither is better in every case, which is why measuring your own data beats choosing by name.' },
        { kind: 'p', text: 'The figures are ours. The hash function is BLAKE2b with a different salt for each attempt, chosen so the results can be repeated; Python\'s own hashing of strings changes from one run to the next. The school list changes as schools open and close, so a later download will give slightly different counts. Only the school names are used, with no enrolment or results data.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Hash tables in practice',
      h2: 'What a Perth learner takes from 747 school names',
      intro: 'The same ideas sit under every dictionary, set, cache and database index a programmer will use.',
      body: [
        { kind: 'table', caption: 'From the project to everyday Python', head: ['Idea from the project', 'Where it shows up in Python', 'The habit it builds'], rows: [
          ['Load factor', 'Dictionaries and sets grow themselves before they fill', 'Expect resizing and do not fear it'],
          ['Collisions', 'Two keys can share a hash slot', 'Never assume a hash is unique'],
          ['Worst case versus average', 'Average lookups are quick; unlucky ones are not', 'Look at the worst case, not just the mean'],
          ['Deterministic hashing', 'String hashes change between runs unless fixed', 'Fix a seed when you need repeatable results'],
          ['Measure, do not guess', 'Count probes with a small wrapper', 'Claims about speed come with numbers']
        ] },
        { kind: 'p', text: 'The Python documentation answers the question directly: "CPython’s dictionaries are implemented as resizable hash tables." Learners who have built one by hand read that sentence differently. They know a resizable table exists because a full one slows down, and they know why their dictionary still feels instant with thousands of keys.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write each hash table in plain Python, load the real Perth school names, and graph probe counts as the table fills.' },
          { h3: 'University students', p: 'Compare the three methods on larger lists and explain the results in terms of load factor and clustering.' },
          { h3: 'Adults', p: 'Use dictionaries and sets with confidence in scripts at work, and know when a lookup table will beat repeated searching.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of the Western Australian Department of Education, the statistics bureau and the Python Software Foundation. The census counts are published by the bureau; the probe counts and failed builds on this page are our own calculations from the department\'s public school list.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Perth',
      h2: 'Two and a half hours from India and a school year in four terms',
      intro: 'Two facts that shape when a Perth learner can study with us.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Western Standard Time', p: 'Perth runs on Australian Western Standard Time, eight hours ahead of UTC, and does not use daylight saving, according to the IANA time zone database.' },
          { h3: 'Daylight saving trials', p: 'The same database records several trial periods of daylight saving in Western Australia; the last one ended in March 2009.' },
          { h3: 'Terms in 2027', p: 'The Department of Education lists four terms for 2027, starting on Monday 1 February and ending on Thursday 16 December.' }
        ] },
        { kind: 'spec', title: 'Why the time gap is good news', p: 'Perth is only two and a half hours ahead of India time, the smallest gap of any Australian capital. A 6pm lesson in Perth is 3:30pm for our teachers, comfortably inside their working day, and the gap stays the same all year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Python script to choosing the right data structure',
    intro: 'Treat the ages as signposts only. The trial lesson sets the true starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'First scripts', p: 'Variables, loops and lists in Python, ending with a script that reads a file and counts what is in it.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Dictionaries and sets', p: 'Hashing by hand, collisions and load factor, and when a dictionary beats a list by thousands of steps.', courses: ['problem-solving-dsa-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Structures and performance', p: 'Hash tables, trees and heaps compared on large data, with timing and counting built into every experiment.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Python at work', p: 'Automating reports, cleaning spreadsheets and building small web tools that hold up under real use.', courses: ['python-ai-automation-masterclass-college', 'python-web-development-django-flask-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI assistant can write Python, why should a Perth student learn how a dictionary works?',
    intro: 'Because generated code leans on dictionaries constantly, and only someone who understands them can tell when that choice is wrong.',
    p1: 'Ask an assistant to remove duplicates or count words and the answer will almost always reach for a dictionary or a set, and usually that is right. Sometimes it is not: a generated script may rebuild a dictionary inside a loop, use a list where a set would be thousands of times faster, or rely on dictionary order in a way that breaks with older data. The code runs, so nobody notices until a file is ten times bigger than the test.',
    p2: 'Learners who have pushed a hash table to 90% full and watched a lookup take 65 steps read generated code with sharper eyes. They spot the list scan that should be a set lookup, the table rebuilt on every pass and the assumption that keys never clash. That reading skill is what turns an assistant from a crutch into a useful colleague.',
    closer: 'Machines can produce Python quickly; the value in 2026 is knowing which structure the problem needs and checking that the machine picked it, and a Perth learner who has built three hash tables can do exactly that.',
    blogAnchor: 'should teenagers still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Joondalup to Rockingham, one lesson, no freeway',
    intro: 'Greater Perth stretches a long way along the coast, and an online lesson reaches the northern suburbs, the hills and the south in exactly the same way.',
    cells: [
      { h3: 'No drive across the city', p: 'Learners in Joondalup, Midland or Rockingham join the same live lesson from home, with nothing to book but the time.' },
      { h3: 'Western Australian year levels', p: 'Teachers use the same year levels as Perth schools and plan around the four WA school terms. Every lesson is in English.' },
      { h3: 'Trial lesson first', p: 'Bring a question or a project idea; leave with a working piece of code and a recommended course and time. No payment details are taken.' },
      { h3: 'Level-matched groups', p: 'Groups of five to ten at the same stage, drawn from Perth and other places in a similar time zone, so evening slots fill easily.' },
      { h3: 'Two lessons a week', p: 'Around eight a month in a regular slot, with breaks for school holidays and exams arranged with the teacher in advance.' },
      { h3: 'Two and a half hours to India time', p: 'Perth is 2 hours 30 minutes ahead of our teachers throughout the year, so a 4:30pm Perth lesson is at 2pm in India.' }
    ],
    spec: { title: 'No clock change to plan for', p: 'Western Australia does not use daylight saving, and neither does India, so a Perth lesson time never shifts during the year. Times are still always confirmed in Perth time.' }
  },

  fees: {
    h2: 'What classes cost in Perth',
    intro: 'Three numbers, set out plainly.',
    first: 'One whole lesson at no cost, after which you get a level, a suggested course and a regular time.',
    group: 'A month of lessons, typically eight, alongside five to ten learners at your level.',
    private: 'About eight lessons each month in the same pattern, with one teacher for one learner.',
    closer: 'Every family outside India pays in US dollars at a single rate, so Fremantle and Ellenbrook see the same bill and there is no Perth price list. Nothing is charged until the trial is done and a course and time are agreed; the pricing page covers holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Google reviews in our families\' own words',

  book: {
    h2: 'Tell us what you want to build',
    intro: 'We set the first task to suit: a first Python loop for a Year 8 student, a dictionary challenge for someone in Year 11, or the full school-name hashing project for an adult.',
    success: 'Thank you. The team will be in touch shortly about a Perth class.'
  },

  faq: {
    h2: 'Perth online coding and Python questions',
    intro: 'Questions Perth learners and parents ask us before starting.',
    items: [
      { q: 'How many people live in Greater Perth?', a: 'Greater Perth had 2,116,647 residents at the 2021 Census, with a median age of 37, a year younger than both Western Australia and Australia.' },
      { q: 'What is a hash table?', a: 'A hash table stores items by turning each key into a number, called a hash, and using that number to pick a slot. Looking up a key means hashing it again and checking that slot, so most lookups take a step or two however many items are stored.' },
      { q: 'What is cuckoo hashing?', a: 'Cuckoo hashing gives every key two possible slots in two separate tables. When a new key lands on an occupied slot it pushes the old key out, and the old key moves to its other slot. Lookups only ever check two places, but inserts can fail if the tables get too full.' },
      { q: 'What is the Perth school-name project?', a: 'Learners store the 747 distinct school names from the Department of Education list for the North and South Metropolitan regions in three kinds of hash table, then count how many slots each lookup checks and how often each table fails as it fills.' },
      { q: 'Do I need to know any programming before starting?', a: 'No. Beginners start with simple Python scripts, and the free lesson places everyone at the right level. Learners who already code move straight on to data structures and projects.' },
      { q: 'What time are lessons for Perth learners?', a: 'After school, in the evening or at the weekend, chosen during the trial and always given in Perth time. Perth is two and a half hours ahead of India time all year.' },
      { q: 'Can younger children learn with you?', a: 'Yes. We teach from age 6, starting younger learners with Scratch and visual projects. This page is written for teenagers and adults, but the free lesson works for any age.' },
      { q: 'Is there a Modern Age Coders centre in Perth?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Perth coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Perth and Australian learners',
    html: 'Younger Western Australian students working towards the GATE program can read <a class="cg-inline-link" href="/wa-gate-aset-maths-practice">WA GATE and ASET maths practice</a>. Learners moving on from block coding should see <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">the step from Scratch to Python</a>, and anyone unsure which language to start with can compare them in <a class="cg-inline-link" href="/kids-coding-languages-australia">coding languages for Australian learners</a>. All our Australian pages are listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Perth and Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/wa-gate-aset-maths-practice', label: 'WA GATE maths' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-pwa .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-pwa .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-pwa .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-pwa .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-pwa .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.01em; }
.cg-root.cg-pwa .cg-grid-3 { gap: clamp(1rem, 2.4vw, 2rem); }
.cg-root.cg-pwa .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.005em; }
.cg-root.cg-pwa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pwa .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-pwa .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Greater Perth, ABS Census 2021 QuickStats, GCCSA 5GPER (read 7 October 2026): 2,116,647 people; median age 37 (Western Australia 38, Australia 38); 570,121 families; 882,374 private dwellings; average 2.6 people per household; dwelling structure, occupied private dwellings: separate house 605,453 (77.8 percent; Australia 72.3), flat or apartment 59,492 (7.6 percent; Western Australia 6.5; Australia 14.2); occupation, employed people aged 15 and over: Professionals 250,973 (23.7 percent; Western Australia 22.0; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 454,538 (26.5 percent; Western Australia 23.8; Australia 26.3); aged 15 to 19 123,315 (5.8 percent). WA Department of Education future term dates page, 2027 term dates published in the Western Australian Government Gazette: Term 1 Monday 1 February to Friday 9 April; Term 2 Monday 26 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Thursday 16 December. IANA tz database: Zone Australia/Perth 8:00 AW AW%sT; rule AW daylight saving periods 1974-75, 1983-84, 1991-92 and 2006-07 to 2008-09; Asia/Kolkata UTC+5:30, so Perth is 2 hours 30 minutes ahead of India time all year. Python FAQ, design: "CPython’s dictionaries are implemented as resizable hash tables."',
    localProject: 'Cuckoo hashing against chaining and linear probing. WA Department of Education SchoolsListExcel0880.xlsx (Alphabetical list of Western Australian schools, CC BY 4.0, downloaded 7 October 2026): 1,152 school rows; Education Region North Metropolitan 365, South Metropolitan 385; 750 metropolitan rows, 747 distinct names. Hash: BLAKE2b, 8-byte digest, 8-byte salt, modulo table size. Separate chaining, 747 buckets: longest chain 4, mean probes for a successful lookup 1.459, empty buckets 265. Linear probing: load 0.5 (1,494 slots) mean 1.431, max 11; load 0.75 (996) mean 2.134, max 30; load 0.9 (830) mean 3.635, max 65. Cuckoo, two tables, 200 salt pairs per load, 500-kick limit: total load 0.40 (933 per table) 1 failure, longest eviction chain 27; 0.45 (830) 4 failures, 41; 0.49 (762) 21, 57; 0.52 (718) 52, 69; 0.55 (679) 103, 81. Lookup in cuckoo hashing checks at most two slots. Lesson family: cuckoo hashing and open addressing; distinct from Bloom filters, consistent hashing, tries and the other hashing pages on the site.',
    requiredMentions: [
      '2,116,647',
      '570,121',
      '882,374',
      '605,453',
      '454,538',
      '250,973',
      '3.635',
      '103 of 200',
      '1.459',
      'CPython’s dictionaries are implemented as resizable hash tables'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Perth (5GPER): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5GPER' },
      { claim: 'Western Australian Department of Education, alphabetical list of Western Australian schools (CC BY 4.0), listed on the WA data catalogue.', url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists' },
      { claim: 'Western Australian Department of Education, future term dates (2027).', url: 'https://www.education.wa.edu.au/future-term-dates' },
      { claim: 'Python documentation, Design and History FAQ: how dictionaries are implemented in CPython.', url: 'https://docs.python.org/3/faq/design.html' },
      { claim: 'IANA time zone database, australasia file: Australia/Perth rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Transperth GTFS stops: the download was cut off at 228,864 bytes and the retry failed to connect; not circumvented, so no transport figures are used.',
      'School Curriculum and Standards Authority (WACE) details: scsa.wa.edu.au returned a Cloudflare 403 and was not circumvented.',
      'Bureau of Meteorology station names: the observations feed returned 403 and was not circumvented.',
      'Enrolment counts, school results or rankings from the school list: excluded by the cluster rules; only names are used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the WA Department of Education, the ABS or the Python Software Foundation.'
    ]
  }
};
