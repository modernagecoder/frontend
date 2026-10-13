'use strict';
// Ballina (cg- city page, Australia cluster Phase 7, row 180). Shaped page: online coding and Python, leading
// with teenagers and adults; younger learners are covered by the kids pages and the national hub.
// Spine: when should a program remember an answer instead of working it out again? Data: NSW Department of
// Education, "Master dataset: NSW government school locations and student enrolment numbers" (data.nsw.gov.au,
// Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows
// with LGA "Ballina": 15 schools (12 Primary School, 3 Secondary School), sorted by name. Our calculation
// (scratchpad au/r6/py/bal_memo.py), haversine distance R = 6,371,008.8 m: every ordered pair needs 210
// distance calls; functools.lru_cache keyed on (i, j) still makes 210 calls (0 hits, 210 misses) because (a, b)
// and (b, a) are different keys; normalising the key to (min, max) makes 105 calls and 105 hits. Shortest closed
// tour through the first k schools alphabetically (Held-Karp recursion over subsets): k = 6, 39,329 m, 326
// recursive calls without memoization and 81 with; k = 8, 54,286 m, 13,700 against 449; k = 10, 63,652 m,
// 986,410 against 2,305; all 15 schools, 68.18 km, 114,689 memoized calls, where the number of distinct round
// trips is 14! / 2 = 43,589,145,600. Town_suburb values: Alstonville 3, Ballina 2, East Ballina 2, Wardell 2,
// and one each for Empire Vale, Fernleigh, Lennox Head, Newrybar, Tintenbar and Wollongbar.
// Lesson family: memoization with functools.lru_cache (cache key normalisation, dynamic programming over
// subsets); screened free site-wide on 9 October 2026 ("lru_cache", "memoization": 0 page hits; claimed by AU-R6).
// Place facts read raw on 9 October 2026: ABS Census 2021 QuickStats, Ballina Significant Urban Area (1003):
// 46,190 people; median age 48 (NSW 39, Australia 38); 12,726 families; 20,798 private dwellings; 2.4 people per
// household; separate house 13,086 (71.7%; NSW 65.6%); semi-detached, row or terrace house, townhouse 3,776
// (20.7%; NSW 11.7%); flat or apartment 921 (5.0%; NSW 21.7%); Professionals 4,677 (22.6%; NSW 25.8%);
// Technicians and Trades Workers 2,854 (13.8%; NSW 11.9%); Bachelor Degree level and above 8,789 (22.7%; NSW
// 27.8%); aged 10 to 14 2,798 (6.1%); aged 15 to 19 2,416 (5.2%). NSW Department of Education, 2027 term dates,
// Eastern division. IANA tz: Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, flood
// material, and the dataset's ICSEA, Indigenous and LBOTE columns.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BALLINA', label: 'Ballina', blurb: 'Online Python for Ballina teens and adults, and a project on teaching a program to remember instead of recalculating.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-ballina',
  code: 'bal',
  accent: '#127326',
  accentRationale: 'Ballina: a deep macadamia-leaf green (HSV saturation 0.84, value 0.45, hue 131), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, and 4.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Ballina',
    eyebrow: 'Ballina, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Ballina, New South Wales',
  title: 'Online Coding and Python Classes in Ballina | Live Teacher',
  description: 'Online coding and Python classes for Ballina, Alstonville and Lennox Head teens and adults, taught live by a real teacher in groups or one to one. First lesson free.',
  ogDescription: 'Python classes for Ballina teens and adults, with a project that cuts 986,410 recursive calls to 2,305 by teaching a program to remember.',
  twitterDescription: 'Online Python classes for Ballina teens and adults, live, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Ballina Learners',
    description: 'Level-matched online Python, recursion, algorithms and data handling for teenagers and adults in Ballina, Alstonville, Lennox Head and Wardell, taught live in English.'
  },

  h1: 'Online coding and Python classes in Ballina',
  capsuleQ: 'What are the best online coding and Python classes in Ballina?',
  capsule: 'Python lessons delivered live online, where a Ballina teenager or adult works next to a teacher on programs that start simple and grow into real algorithms. The 2021 Census counted 46,190 people in the Ballina urban area, with a median age of 48. Lessons run privately or in a small group of learners at one level, and the first lesson is free.',
  lead: 'Plan a round trip that visits ten of the public schools in the Ballina council area and comes back to the start by the shortest route. A clever recursive function can find it, but written plainly it calls itself 986,410 times, working out the same sub-trips over and over. Add one line of Python, a decorator called lru_cache, and the same function needs only 2,305 calls. Our Ballina project shows where that saving comes from, and why a cache with the wrong key saves nothing at all.',
  wa: 'Hello Modern Age Coders, I would like a free Python or coding class for a learner in Ballina.',

  picks: {
    eyebrow: 'Course picks for Ballina',
    h2: 'Python courses that reach real algorithms',
    intro: 'Every course here leads into the memoization project below. The free first lesson suggests a starting point, and no card is required.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the very first line, working up to functions, recursion and real data files.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Recursion, dynamic programming and searching, each tried on genuine problems before the theory.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A thorough Python course for adults, covering decorators, the standard library and testing.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Algorithms in depth, including the dynamic programming behind the Ballina round trip.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ballina in the Census',
      h2: 'A town where one home in five is a townhouse',
      intro: 'The 2021 Census figures published for the Ballina Significant Urban Area, set beside New South Wales and Australia.',
      body: [
        { kind: 'table', caption: 'Ballina urban area totals, 2021 Census QuickStats', head: ['Figure', 'Ballina'], rows: [
          ['Residents', '46,190'],
          ['Families', '12,726'],
          ['Private dwellings', '20,798'],
          ['Average household size', '2.4 people']
        ] },
        { kind: 'table', mt: true, caption: 'Ballina against the state and the nation', head: ['Measure', 'Ballina', 'NSW', 'Australia'], rows: [
          ['Median age', '48', '39', '38'],
          ['Semi-detached, terrace or townhouse homes', '20.7% (3,776)', '11.7%', '12.6%'],
          ['Technicians and trades workers, share of workers', '13.8% (2,854)', '11.9%', '12.9%'],
          ['Bachelor degree or above, residents 15 and over', '22.7% (8,789)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Nine years older', p: 'Ballina\'s median age of 48 is nine years above the New South Wales median of 39.' },
          { h3: 'Townhouses', p: '3,776 occupied homes were semi-detached, terrace or townhouses, about one in five, almost twice the state share.' },
          { h3: 'Young residents', p: 'There were 2,798 residents aged 10 to 14 and 2,416 aged 15 to 19 at the 2021 Census.' }
        ] },
        { kind: 'p', text: 'Note on precision: the bureau applies a small random shift to census counts so that nobody can be identified, so the rows of a table can differ slightly from its total. The totals and percentages here are exactly as published; we never add rows to make our own.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Teaching a program to remember: memoization on Ballina\'s schools',
      intro: 'The NSW Department of Education lists every government school with its coordinates. We took the 15 in the Ballina council area, measured distances between them in Python, and counted how much work a cache saves.',
      body: [
        { kind: 'table', caption: 'Distance lookups between all 15 schools (our calculation)', head: ['Approach', 'Distance calculations', 'Cache hits'], rows: [
          ['No cache, every ordered pair', '210', 'none'],
          ['lru_cache with the key (a, b)', '210', '0'],
          ['lru_cache with the key sorted to (min, max)', '105', '105']
        ] },
        { kind: 'table', mt: true, caption: 'Shortest round trip through the first k schools alphabetically, recursive search (our calculation)', head: ['Schools', 'Shortest round trip', 'Calls without memoization', 'Calls with lru_cache'], rows: [
          ['6', '39.3 km', '326', '81'],
          ['8', '54.3 km', '13,700', '449'],
          ['10', '63.7 km', '986,410', '2,305'],
          ['All 15', '68.18 km', 'not attempted', '114,689']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Recurse', p: 'Write the round-trip search as a function of two things: the school you are at, and the set of schools already visited. Each call tries every unvisited school next.' },
          { h3: '2. Notice the repeats', p: 'Many different paths arrive at the same school having visited the same set. Without memory, the function solves each of those situations from scratch every time.' },
          { h3: '3. Remember', p: 'Decorate the function with @lru_cache. Each situation is solved once and looked up afterwards, and the call count falls from almost a million to a few thousand.' }
        ] },
        { kind: 'callout', h3: 'A cache is only as good as its key', p: 'The distance from Alstonville to Wardell equals the distance from Wardell to Alstonville, but Python sees (Alstonville, Wardell) and (Wardell, Alstonville) as different keys. Cache them as written and all 210 lookups miss. Sort the pair first and half of them become hits. Choosing what counts as "the same question" is the real skill in memoization, far more than the decorator itself.' },
        { kind: 'p', text: 'All distances are straight lines between the department\'s published coordinates, calculated by our own code, and the round trips are puzzles, not suggested routes. With all 15 schools there are 43,589,145,600 distinct round trips; the memoized search explores 114,689 situations instead. The project uses names and locations only and says nothing about any school.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'When to remember',
      h2: 'Where memoization helps, and where it does not',
      intro: 'Caching is one of the most useful ideas in programming, from websites to AI systems, but it only helps when the same question genuinely comes up again.',
      body: [
        { kind: 'table', caption: 'Lessons from the Ballina experiment', head: ['Situation', 'In the Ballina project', 'General rule'], rows: [
          ['Questions repeat exactly', 'Sub-trips recur thousands of times', 'Memoization pays off hugely'],
          ['Questions repeat in a different form', 'Distances asked both ways round', 'Normalise the key first'],
          ['Every question is new', 'A single distance between two schools', 'A cache adds overhead and saves nothing'],
          ['Memory is limited', '114,689 entries for 15 schools', 'The table grows fast; set limits deliberately']
        ] },
        { kind: 'p', text: 'An AI assistant will happily add @lru_cache to a function when asked to make it faster, and sometimes when it is not asked. Whether that helps depends entirely on whether the arguments repeat and whether equal questions produce equal keys. Learners who have watched 210 lookups miss the cache know to check, rather than trusting the decorator to work its magic.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the recursive search, count its calls, add the cache and count again; then break the cache with a bad key on purpose.' },
          { h3: 'University students', p: 'Dynamic programming over subsets, time and memory complexity, and when to switch to approximate methods.' },
          { h3: 'Adults', p: 'Speeding up scripts and reports at work with caching, without introducing stale or wrong answers.' }
        ] },
        { kind: 'p', text: 'We have no connection with the NSW Department of Education, Ballina Shire Council or the Australian Bureau of Statistics. The department supplies the school list and the bureau the census figures; the distances, tours and call counts on this page are our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Ballina',
      h2: 'Fifteen schools from Wardell to Lennox Head',
      intro: 'Some further facts from the department\'s file and the 2027 calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Several small towns', p: 'Alstonville has three schools in the file, and Ballina, East Ballina and Wardell two each; Lennox Head, Newrybar, Wollongbar and four other places have one.' },
          { h3: 'Primary and secondary', p: 'Of the 15 schools, 12 are primary schools and 3 are secondary schools.' },
          { h3: 'School year 2027', p: 'For NSW Eastern division schools, Term 4 of 2027 runs from Tuesday 12 October to Monday 20 December.' }
        ] },
        { kind: 'spec', title: 'An easy way to see the saving', p: 'Python\'s lru_cache reports its own statistics. Calling cache_info() after a run prints the hits, misses and size, so learners can watch the numbers in the table above appear on their own screens and test their ideas about keys straight away.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From loops to dynamic programming',
    intro: 'Ages here are only a guide; the free trial places each learner properly.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Functions and lists', p: 'Python basics, then functions that measure distances between places from a real file.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Recursion and caching', p: 'Recursive searches, memoization and counting the work a program does.', courses: ['problem-solving-dsa-masterclass-teens', 'pcep-pcap-python-certification-course'] },
      { band: 'University', h3: 'Algorithm design', p: 'Dynamic programming, complexity and when exact methods give way to heuristics.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Faster scripts', p: 'Practical Python for work, with caching and checks that keep results correct.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can add a cache in one line, why should a Ballina learner understand it?',
    intro: 'Because the line is easy and the judgement about when it works is not.',
    p1: 'Ask an assistant to speed up a slow function and @lru_cache often appears. When the arguments repeat and match, the gain can be enormous, as in the Ballina round trip. When they do not, the cache quietly fills memory and saves nothing, which is exactly what happened with distances keyed both ways round.',
    p2: 'Learners who have run both versions on the Ballina schools learn to ask what the cache key is, whether equal questions really produce equal keys, and how large the table will grow. Those three questions turn a copied decorator into a deliberate design choice.',
    closer: 'In 2026 a decorator costs nothing to type, and the value lies in a Ballina learner who knows when remembering an answer is worth the memory.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Alstonville, Lennox Head or Wardell, one online room',
    intro: 'The schools in our project are spread across several towns in the council area, and an online lesson makes the distances between them irrelevant.',
    cells: [
      { h3: 'Across the shire', p: 'A student in Wollongbar and an adult in Lennox Head can share a lesson without either leaving home.' },
      { h3: 'Matched to NSW school', p: 'Lessons track the NSW stages and term calendar, and senior students can connect Python projects to their computing subjects.' },
      { h3: 'Start with a real lesson', p: 'The trial is a full Python class. At the end you are given a suggested level, course and time, and no payment details are collected.' },
      { h3: 'Groups by stage', p: 'Fifteen to twenty learners at one level, from Ballina and further afield, so there is always a group ready to run.' },
      { h3: 'Two sessions a week', p: 'Regular lessons twice weekly, roughly eight a month, pausing for holidays and exams by agreement.' },
      { h3: 'Teachers in India', p: 'A 4:30pm Ballina lesson in June starts at 12pm in India, and at 11am once New South Wales moves to daylight saving.' }
    ],
    spec: { title: 'Summer time on the Northern Rivers', p: 'NSW clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027; India stays on one time. Lessons are always booked in Ballina time, so only the India-side hour changes.' }
  },

  fees: {
    h2: 'Ballina class fees',
    intro: 'The cost, laid out in three lines.',
    first: 'A full Python lesson for free, then a recommended level, course and time.',
    group: 'Around eight lessons each month, in a group of fifteen to twenty at the same level.',
    private: 'Around eight lessons each month, one to one with a teacher.',
    closer: 'Outside India all invoices are in US dollars, so families in Alstonville and East Ballina pay identical amounts and there is no Ballina price. Billing begins only once the trial has agreed a course and time, and the pricing page explains breaks, missed lessons and moving between formats.'
  },

  reviewsH2: 'Families\' reviews from Google',

  book: {
    h2: 'Tell us what the learner wants to build',
    intro: 'An age and an interest are all we need. A Year 9 student might begin by measuring distances between two towns in Python; an adult might go straight to the memoized round trip.',
    success: 'Thank you. Our team will be in touch shortly about a Ballina class.'
  },

  faq: {
    h2: 'Ballina Python class questions',
    intro: 'The first things Ballina learners and parents usually ask.',
    items: [
      { q: 'How many people live in the Ballina urban area?', a: 'There were 46,190 residents in the Ballina Significant Urban Area at the 2021 Census, according to QuickStats. Their median age was 48; across New South Wales it was 39.' },
      { q: 'What is memoization?', a: 'Memoization means storing the result of a function call so that, when the same inputs come up again, the stored answer is returned instead of being recalculated. In Python the functools.lru_cache decorator does this for you.' },
      { q: 'What is the Ballina schools project?', a: 'Learners measure distances between the 15 public schools in the Ballina council area, then search for the shortest round trip through them with a recursive function. Memoization cuts the work for ten schools from 986,410 calls to 2,305, but only when the cache key is chosen well.' },
      { q: 'Is the round trip a real route?', a: 'No. It is a puzzle built on straight-line distances between published coordinates, used to study algorithms. It is not a travel suggestion and says nothing about the schools.' },
      { q: 'Do you help HSC computing students?', a: 'Yes. Year 11 and 12 students taking NSW computing or maths get lessons that follow their stage and terms. School-assessed work must be the student\'s own; we teach methods and never write it.' },
      { q: 'When are lessons held?', a: 'Lesson times are set during the trial and given in Ballina time, typically after school or on a weekend. India is 4.5 hours behind Ballina in winter and 5.5 hours behind in daylight saving.' },
      { q: 'Can younger children learn?', a: 'Yes, from age six. Children start with Scratch and visual programs before typing Python; the project on this page is for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Ballina?', a: 'No, and none is claimed. All lessons are live and online and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Ballina Python classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Ballina and Northern Rivers learners',
    html: 'Neighbouring pages include <a class="cg-inline-link" href="/best-coding-classes-in-lismore">coding classes in Lismore</a> and <a class="cg-inline-link" href="/best-coding-classes-in-coffs-harbour">coding classes in Coffs Harbour</a>. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> covers the state, and the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia hub</a> lists every other place and topic.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ballina and Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-lismore', label: 'Lismore' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bal .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.55rem); }
.cg-root.cg-bal .cg-hero h1 { font-weight: 750; letter-spacing: -0.017em; line-height: 1.09; }
.cg-root.cg-bal .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1.1rem; font-size: 1.02rem; }
.cg-root.cg-bal .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-bal .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.01em; }
.cg-root.cg-bal .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-bal .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bal .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bal .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-bal .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Ballina, ABS Census 2021 QuickStats, Significant Urban Area 1003 (read 9 October 2026): 46,190 people; median age 48 (New South Wales 39, Australia 38); 12,726 families; 20,798 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 13,086 (71.7 percent; NSW 65.6), semi-detached, row or terrace house, townhouse 3,776 (20.7 percent; NSW 11.7; Australia 12.6), flat or apartment 921 (5.0 percent; NSW 21.7); occupation: Professionals 4,677 (22.6 percent; NSW 25.8), Technicians and Trades Workers 2,854 (13.8 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 8,789 (22.7 percent; NSW 27.8; Australia 26.3); aged 10 to 14 2,798 (6.1 percent); aged 15 to 19 2,416 (5.2 percent). NSW Department of Education, 2027 term dates, Eastern division: Term 4 Tuesday 12 October to Monday 20 December. IANA tz database: Australia/Sydney, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Memoization with functools.lru_cache. NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA = Ballina: 15 (Primary School 12, Secondary School 3), sorted by School_name. Haversine distance, R = 6,371,008.8 m. All ordered pairs: 210 calls uncached; lru_cache on (i, j): CacheInfo hits 0, misses 210; key normalised to (min(i, j), max(i, j)): hits 105, misses 105. Held-Karp shortest closed tour from the first school over the first k schools alphabetically: k = 6, 39,329 m, plain recursion 326 calls, lru_cache 81 calls; k = 8, 54,286 m, 13,700 vs 449; k = 10, 63,652 m, 986,410 vs 2,305; k = 15, 68.18 km, 114,689 memoized calls; distinct round trips for 15 points (15 - 1)! / 2 = 43,589,145,600. Town_suburb (title case): Alstonville 3, Ballina 2, East Ballina 2, Wardell 2, Empire Vale 1, Fernleigh 1, Lennox Head 1, Newrybar 1, Tintenbar 1, Wollongbar 1.',
    requiredMentions: [
      '46,190',
      '12,726',
      '2,798 residents aged 10 to 14',
      '3,776',
      '8,789',
      '986,410',
      '2,305 calls',
      '43,589,145,600',
      'lru_cache'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Ballina Significant Urban Area (1003): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1003' },
      { claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'Python documentation, functools.lru_cache and cache_info().', url: 'https://docs.python.org/3/library/functools.html' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Road distances or travel times between schools: not computed; all distances are straight lines between published coordinates.',
      'That the 15 schools all lie inside the Ballina urban area: they are the council area, which includes Alstonville, Wardell and other towns, and the page says so.',
      'Flood or disaster history: excluded by the cluster rules and not used.',
      'Enrolment, ICSEA, Indigenous and LBOTE figures from the master dataset: excluded by the cluster rules or not needed.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Ballina Shire Council or the ABS.'
    ]
  }
};
