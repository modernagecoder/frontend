'use strict';
// Newcastle, New South Wales (cg- regional city page, Australia cluster Phase 7, row 136). Shaped page (online coding
// and Python): leads with teenagers and adults; coding-classes-for-kids-newcastle owns the primary intent.
// Spine: how do you test a fast "nearest school" function so thoroughly that its rare wrong answers cannot hide?
// Data: NSW Department of Education, NSW public schools master dataset (master_dataset.csv, Date_extracted 2026-10-02;
// Creative Commons Attribution on Data.NSW), downloaded 7 October 2026. Rows whose LGA is Newcastle (47), Lake
// Macquarie (68) or Maitland (22): 137 public schools (101 primary, 22 secondary, 10 schools for specific purposes,
// 2 infants, 1 environmental education centre, 1 central or community school). Measured by us on 7 October 2026
// (scratchpad au/r1/ncl_pbt.py): a grid index with 0.02 degree cells (about 2,211 m north-south by 1,869 m east-west;
// 83 cells hold at least one school) and a "fast" search that stops at the first ring of cells containing a school
// disagrees with brute force for 1,598 of 10,000 random points in the schools' bounding box (seed 2026); the first
// failure appears on test 8; shrinking its coordinates gives (-33.061, 151.65), where brute force answers Marks Point
// Public School at 389 m and the fast search answers Blacksmiths Public School at 1,199 m; the worst disagreement is
// 3,452 m; a patch that also searches one extra ring still fails 86 of 10,000 (seed 7); a radius-based fix fails
// 0 of 10,000 (seed 11). Earliest first-teacher dates in these rows: Largs Public School 1849-01-01, Bolwarra Public
// School 1852-01-01. Lesson family: property-based (randomised invariant) testing with shrinking; screened free
// site-wide on 7 October 2026 ("property-based": 0 hits; claimed by AU-R1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Newcastle - Maitland Significant Urban Area
// (1025), compared with New South Wales and Australia: 508,437 people; median age 39; 137,303 families; 212,798
// private dwellings; 2.5 people per household; separate house 153,857 (80.0%; NSW 65.6%); flat or apartment 13,876
// (7.2%; NSW 21.7%; Australia 14.2%); Professionals 54,052 (22.5%; NSW 25.8%; Australia 24.0%); Technicians and Trades
// Workers 35,275 (14.7%; NSW 11.9%); Bachelor Degree level and above 84,955 (20.5%; NSW 27.8%; Australia 26.3%);
// aged 15 to 19 29,785 (5.9%); aged 20 to 24 33,805 (6.6%). NSW Department of Education 2026 calendar (Eastern
// division): Term 4 Tuesday 13 October to Thursday 17 December; school development day Monday 12 October. IANA tz:
// Australia/Sydney UTC+10, UTC+11 with daylight saving from the first Sunday in October to the first Sunday in April.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health; the school
// file's enrolment, Indigenous, language background and socio-economic index columns are not used.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'NEWCASTLE', label: 'Newcastle', blurb: 'Newcastle - Maitland, 137 public schools in one open file, and a Python project on testing code with thousands of random cases.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-newcastle-nsw',
  code: 'ncpy',
  accent: '#224E96',
  accentRationale: 'Newcastle: a harbour blue (HSV saturation 0.77, value 0.59, hue 217), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 8.1:1 on white and 6.6:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Newcastle',
    eyebrow: 'Newcastle, New South Wales, Australia',
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
  routeLabel: 'Newcastle, New South Wales',
  title: 'Online Coding and Python Classes in Newcastle NSW',
  description: 'Live online Python and coding classes for Newcastle and Hunter teens and adults: testing, data and real projects, in small groups or one to one. First lesson free.',
  ogDescription: 'Python classes for Newcastle teens and adults, with a project that catches a hidden bug in a school-finder by testing it on 10,000 random points.',
  twitterDescription: 'Online Python and coding classes in Newcastle NSW, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Python and Coding Classes for Newcastle Learners',
    description: 'Level-matched online Python, software testing, data and AI for teenagers and adults across Newcastle, Lake Macquarie and Maitland, taught live in English.'
  },

  h1: 'Online coding and Python classes in Newcastle',
  capsuleQ: 'What is the best way for a Newcastle teenager or adult to learn Python online?',
  capsule: 'In a live class where a teacher checks your code with you, sets projects on real Hunter data and teaches you to test programs, not just write them. The Newcastle - Maitland urban area counted 508,437 people at the 2021 Census. We teach Python and coding one to one or in small groups matched by level, and the first lesson is free.',
  lead: 'Here is a bug that a handful of hand-picked tests will almost never find. Take the 137 public schools in the Newcastle, Lake Macquarie and Maitland council areas from the open NSW schools file, and write a quick function that answers "which school is nearest to this spot?" by checking only nearby squares of a grid. Try it on five or six places you know and it gives the right answer every time. Now let Python throw 10,000 random points at it and compare each answer with a slow, certain search. It is wrong 1,598 times, and on the worst point it sends you 3.4 km further than you need to go. Our Newcastle learners find that bug, shrink it to one simple failing example, and fix it properly.',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Newcastle.',

  picks: {
    eyebrow: 'Python course picks for Newcastle',
    h2: 'Four Python routes for Newcastle teenagers and adults',
    intro: 'Choose by where you want Python to take you; the free lesson places you on the right rung. No card details are requested.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first variables to functions and files, with every program tested against a slower, certain answer.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Modules, testing, generators and packaging, built on open government data rather than toy lists.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Ages 15 and over', note: 'Preparation for the Python Institute certificates, with each topic written in code before it is examined.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults at work', note: 'Scripts that clean, check and report on the files your job depends on, with tests that catch mistakes early.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Newcastle - Maitland in the Census',
      h2: 'Half a million people around the harbour, the lake and the river',
      intro: 'Figures from Census 2021 QuickStats for the Newcastle - Maitland Significant Urban Area, set beside New South Wales and Australia as QuickStats publishes them.',
      body: [
        { kind: 'table', caption: 'Newcastle - Maitland, 2021 Census QuickStats', head: ['Measure', 'Newcastle - Maitland', 'New South Wales', 'Australia'], rows: [
          ['People', '508,437', 'Not compared', 'Not compared'],
          ['Median age', '39', 'Not compared', 'Not compared'],
          ['Private dwellings', '212,798', 'Not compared', 'Not compared'],
          ['Occupied dwellings that are separate houses', '153,857, or 80.0%', '65.6%', 'Not compared'],
          ['Workers in technical and trades jobs', '35,275, or 14.7%', '11.9%', 'Not compared'],
          ['Workers in professional jobs', '54,052, or 22.5%', '25.8%', '24.0%'],
          ['People 15 and older holding a bachelor degree or above', '84,955, or 20.5%', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A city of houses', p: 'Eight occupied dwellings in ten are separate houses, against 65.6% across New South Wales, and only 7.2% are flats or apartments.' },
          { h3: 'Trades and technical work', p: 'Technicians and trades workers make up 14.7% of employed residents, nearly three points above the state share of 11.9%.' },
          { h3: 'Teenagers and twenties', p: 'The Census counted 29,785 residents aged 15 to 19 and 33,805 aged 20 to 24, the ages at which most people first meet Python.' }
        ] },
        { kind: 'p', text: 'A note on these numbers: the ABS nudges individual census cells slightly to protect privacy, so parts of a table do not always total the published figure. We quote published totals and shares only, and never sum a set of rows to produce a figure the ABS did not publish.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can 10,000 random tests catch a bug that ten careful ones miss?',
      intro: 'The 137 public schools in the Newcastle, Lake Macquarie and Maitland council areas from the NSW public schools master dataset, and two ways of finding the nearest one.',
      body: [
        { kind: 'table', caption: 'Testing a fast nearest-school search against a certain one (our calculation, 7 October 2026)', head: ['What we tested', 'Result'], rows: [
          ['Schools in the three council areas', '137 (101 primary, 22 secondary, 14 other)'],
          ['Grid squares used by the fast search', '0.02 degrees, about 2.2 km by 1.9 km; 83 squares hold a school'],
          ['Random points tested', '10,000 inside the schools\' bounding rectangle'],
          ['Points where the fast search was wrong', '1,598, or 16.0%'],
          ['Test number of the first failure', '8'],
          ['Largest extra distance on a wrong answer', '3,452 m'],
          ['A one-ring patch, tested on 10,000 new points', 'Still wrong 86 times'],
          ['A radius-based fix, tested on 10,000 new points', 'Wrong 0 times']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. State a rule, not an example', p: 'Instead of checking a few places by hand, the test states a property: for any point at all, the fast search must name the same school as a slow search through all 137.' },
          { h3: '2. Let the computer choose', p: 'Python generates thousands of random points and checks the property on each. The bug shows up on the eighth point, long before most people would have stopped testing.' },
          { h3: '3. Shrink the failure', p: 'The failing point is simplified, here by rounding its coordinates, while it still fails. The result, near -33.061, 151.65, is a short example anyone can reproduce.' }
        ] },
        { kind: 'callout', h3: 'What the shrunk example shows', p: 'At that point the slow search answers Marks Point Public School, 389 metres away. The fast search, which stopped at the first ring of grid squares with any school in it, answers Blacksmiths Public School at 1,199 metres. A closer school was sitting in the next square out. The obvious patch, looking one ring further, still fails 86 times in 10,000; only a fix that searches every square within the distance already found passes every test.' },
        { kind: 'p', text: 'All of these counts are ours, measured on the NSW schools file extracted on 2 October 2026. The random points fall anywhere in a rectangle around the schools, including water and bushland, because a test is meant to be harsh. Distances are straight lines on a flat approximation of the Earth, good to within a few metres at this scale.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Testing like a professional',
      h2: 'Five habits that make Python code trustworthy',
      intro: 'Practised first on the schools file, then used on assignments, data jobs and anything that must not quietly give wrong answers.',
      body: [
        { kind: 'table', caption: 'From "it works on my examples" to "it works"', head: ['Habit', 'In practice', 'What it catches'], rows: [
          ['Keep a slow, obvious version', 'A brute-force search over all 137 schools', 'Wrong answers from a clever shortcut'],
          ['Test properties, not just examples', 'Same answer as the slow version, for any input', 'Cases nobody thought to write down'],
          ['Generate inputs at random', 'Thousands of points, with a fixed seed so runs repeat', 'Rare failures that hand-picked tests miss'],
          ['Shrink every failure', 'Simplify the input while it still fails', 'Long, confusing bug reports'],
          ['Keep the failing case as a test', 'Save the shrunk point forever', 'The same bug coming back later']
        ] },
        { kind: 'p', text: 'The fixed seed matters more than beginners expect. A random test that fails once and then never again is almost useless; a test whose random numbers can be replayed lets you show the failure to someone else, fix it, and prove the fix. Libraries such as Hypothesis automate the whole cycle, and our learners use them after first writing the loop by hand.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Write the brute-force search and the grid search in Python, then write the random test that exposes the difference.' },
          { h3: 'University students', p: 'Property-based testing with Hypothesis, shrinking strategies and the habits examiners and employers look for in submitted code.' },
          { h3: 'Adults at work', p: 'Turn spreadsheets and scripts you rely on into code with tests, so a change on Monday cannot break Friday\'s report.' }
        ] },
        { kind: 'p', text: 'We are not connected with the NSW Department of Education or the statistics bureau. The ABS publishes the population figures; the school list is the department\'s open file; every test count and distance in the project is our own measurement, and we use only the names, school levels and map positions from that file.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the Hunter',
      h2: 'Three councils, one urban area and two clocks a year',
      intro: 'Small facts with a programming angle.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Three council lists in one file', p: 'The schools file tags 47 Newcastle schools, 68 in Lake Macquarie and 22 in Maitland. Filtering by council is the first line of the project, and a common place for typos to drop rows.' },
          { h3: 'Old dates in a new file', p: 'The file records a first-teacher date for each school. The earliest in these three councils is 1 January 1849, for Largs Public School, a reminder that date columns can reach back nearly two centuries.' },
          { h3: 'Term 4 in New South Wales', p: 'The NSW Department of Education lists Term 4 of 2026 for eastern schools as Tuesday 13 October to Thursday 17 December, after a development day on Monday 12 October.' }
        ] },
        { kind: 'spec', title: 'Daylight saving and a lesson time', p: 'New South Wales moves its clocks forward on the first Sunday in October and back on the first Sunday in April. A Newcastle lesson at 5pm therefore starts at 11:30am in India during summer and 12:30pm in winter, which is why we always confirm the time in Newcastle time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Python script to tested, trusted code',
    intro: 'Ages are signposts only; the free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'First programs', p: 'Reading the schools file, filtering it by council and printing the answers, with a simple check after each step.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Functions and tests', p: 'Writing search functions, comparing them with brute force and building the first random tests.', courses: ['python-complete-masterclass-teens', 'pcep-pcap-python-certification-course'] },
      { band: 'University', h3: 'Testing as a discipline', p: 'Hypothesis, coverage, shrinking and continuous testing on projects big enough to need them.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Reliable automation', p: 'Scripts for work that check their own results before anyone acts on them.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI assistant writes the Python, who checks that it is right?',
    intro: 'The person who knows how to test it, because the assistant\'s own examples are usually the easy cases.',
    p1: 'A chatbot asked for a fast nearest-school search will often produce the very grid shortcut in our project, together with three or four example calls that all pass. The examples look reassuring, but they are the cases the code was written to handle. The rare points where a closer school sits one square further out are exactly the ones nobody puts in an example, and they are where our search failed 1,598 times in 10,000.',
    p2: 'So our Newcastle learners treat generated code the way they treat their own: keep a slow version that is obviously correct, state the property both must share, and let the computer hunt for disagreements. Someone who has watched a random test find a bug on its eighth try never again trusts a function because its examples passed.',
    closer: 'Assistants can draft the code, but a Newcastle learner who can prove it right or show exactly where it goes wrong is the one an employer wants in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Merewether to Maitland without the drive',
    intro: 'The urban area spreads around the harbour, the lake and the Hunter River, and an online lesson reaches all of it at once.',
    cells: [
      { h3: 'Any suburb, same lesson', p: 'Learners in Belmont, Wallsend and East Maitland can join one class from their own desks, with no traffic to beat.' },
      { h3: 'NSW year levels', p: 'Teachers refer to Year 7 to Year 12 and to NSW stages as local schools do, and every lesson is delivered in English.' },
      { h3: 'A trial that teaches', p: 'The first session is a real Python task with a teacher, ending with a suggested level, course and weekly time. No payment details are taken.' },
      { h3: 'Groups of five to ten', p: 'Learners at the same stage, drawn from the Hunter, the rest of Australia and abroad, so each level finds a time that works.' },
      { h3: 'Two lessons a week', p: 'About eight lessons a month at a fixed time, with school holidays and exam weeks planned in advance with the teacher.' },
      { h3: 'India time changes twice a year', p: 'Our teachers are in India, 4 hours 30 minutes behind Newcastle in winter and 5 hours 30 minutes behind in daylight saving months.' }
    ],
    spec: { title: 'Confirmed in Newcastle time', p: 'Because New South Wales changes its clocks and India does not, every lesson time is agreed and confirmed in Newcastle time, so the October and April changes never cause a missed class.' }
  },

  fees: {
    h2: 'What Python classes cost in Newcastle',
    intro: 'Three figures, nothing else.',
    first: 'A full first lesson with no charge, ending with a level, a course and a weekly time.',
    group: 'One month of teaching, usually eight lessons, with five to ten learners at your stage.',
    private: 'The same pattern of about eight lessons a month, one teacher with one learner.',
    closer: 'Every family outside India is invoiced in US dollars at a single rate, whether they live on the harbour or out in the Hunter Valley, so there is no Newcastle surcharge. Payment starts only once the trial has fixed a course and slot; the pricing page covers holidays, missed lessons and changing format.'
  },

  reviewsH2: 'Google reviews from our families, unedited',

  book: {
    h2: 'Tell us where you are with Python',
    intro: 'We set the first task to suit: printing a list for a beginner in Year 8, a search function for a Year 11 student, or the full schools file and a random test for an adult.',
    success: 'Thank you. We will be in touch shortly about a Python class in Newcastle.'
  },

  faq: {
    h2: 'Newcastle Python and coding questions',
    intro: 'What Newcastle learners and parents ask us first.',
    items: [
      { q: 'How many people live in the Newcastle - Maitland urban area?', a: '508,437 at the 2021 Census, with a median age of 39. The area takes in Newcastle, much of Lake Macquarie and Maitland.' },
      { q: 'What is property-based testing?', a: 'Property-based testing checks a rule that should hold for every input, such as "the fast search and the slow search always agree", by running the code on many automatically generated inputs and then simplifying any input that breaks the rule into a short failing example.' },
      { q: 'What is the Newcastle schools project?', a: 'Learners load the 137 public schools in the Newcastle, Lake Macquarie and Maitland council areas from the NSW schools file, write a fast nearest-school search, and test it against a brute-force search on 10,000 random points. The fast version is wrong 1,598 times until it is fixed.' },
      { q: 'Why not just test a few addresses by hand?', a: 'Because the bug only appears where a closer school sits one grid square further out, and hand-picked addresses rarely land there. Random testing found the first failure on its eighth point.' },
      { q: 'Can senior students in New South Wales join?', a: 'Yes. Students in Years 11 and 12 practise programming and testing that sits alongside their school courses, planned around the NSW terms. Work set by a school for assessment is completed by the student alone.' },
      { q: 'What time are lessons for Newcastle learners?', a: 'Late afternoon, evening or weekend, agreed in the trial and always stated in Newcastle time. Newcastle is 4 hours 30 minutes ahead of India time in winter and 5 hours 30 minutes ahead during daylight saving.' },
      { q: 'Do you teach younger children in Newcastle?', a: 'Yes, from age 6, with Scratch and picture-based projects. This page is for secondary students and adults; parents of younger children will find more on coding classes for kids in Newcastle.' },
      { q: 'Is there a Modern Age Coders centre in Newcastle?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Newcastle coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Newcastle and New South Wales learners',
    html: 'Parents of younger children can read <a class="cg-inline-link" href="/coding-classes-for-kids-newcastle">coding classes for kids in Newcastle</a>. Students heading towards the HSC should see <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>, and anyone wondering how copied code goes wrong can read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>. The state overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newcastle and New South Wales',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-for-kids-newcastle', label: 'Newcastle kids' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-ncpy .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.5rem); }
.cg-root.cg-ncpy .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-ncpy .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-ncpy .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-ncpy .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.012em; }
.cg-root.cg-ncpy .cg-grid-3 { gap: clamp(0.95rem, 2vw, 1.75rem); }
.cg-root.cg-ncpy .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-ncpy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ncpy .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-ncpy .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Newcastle - Maitland Significant Urban Area, ABS Census 2021 QuickStats, area code 1025, compared with New South Wales and Australia (read 7 October 2026): 508,437 people; median age 39; 137,303 families; 212,798 private dwellings; average 2.5 people per household; dwelling structure: separate house 153,857 (80.0 percent; NSW 65.6), flat or apartment 13,876 (7.2 percent; NSW 21.7; Australia 14.2); occupation: Professionals 54,052 (22.5 percent; NSW 25.8; Australia 24.0), Technicians and Trades Workers 35,275 (14.7 percent; NSW 11.9); Bachelor Degree level and above 84,955 (20.5 percent; NSW 27.8; Australia 26.3); aged 15 to 19: 29,785 (5.9 percent); aged 20 to 24: 33,805 (6.6 percent). NSW Department of Education 2026 calendar, Eastern division: Term 4 Tuesday 13 October to Thursday 17 December; school development day Monday 12 October. IANA tz database: Australia/Sydney UTC+10, UTC+11 in daylight saving from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Property-based testing of a grid nearest-school search. NSW public schools master dataset (master_dataset.csv, Date_extracted 2026-10-02), rows with LGA Newcastle (47), Lake Macquarie (68) and Maitland (22): 137 schools; Level_of_schooling: Primary School 101, Secondary School 22, Schools for Specific Purposes 10, Infants School 2, Environmental Education Centre 1, Central/Community School 1. Only School_name, Level_of_schooling, LGA, Latitude, Longitude and Date_1st_teacher used. Distance: equirectangular metres at the mean latitude. Grid of 0.02 degree cells (about 2,211 m by 1,869 m), 83 occupied. Buggy search returns the nearest school in the first non-empty ring of cells. Property: equals brute force. 10,000 uniform random points in the schools bounding box (lat -33.1748 to -32.7003, lon 151.4418 to 151.7811), random.seed 2026: 1,598 failures (16.0 percent), first failure on test 8 at (-33.060978, 151.650194); shrunk by rounding to (-33.061, 151.65): brute force Marks Point Public School 389 m, buggy Blacksmiths Public School 1,199 m (810 m extra); worst failure 3,452 m extra. One-extra-ring patch: 86 failures in 10,000 (seed 7). Radius-based search (all cells within the best distance found): 0 failures in 10,000 (seed 11). Earliest Date_1st_teacher in these rows: Largs Public School 1849-01-01, Bolwarra Public School 1852-01-01, Lochinvar Public School 1852-02-01. Lesson family: property-based testing with shrinking.',
    requiredMentions: [
      '508,437',
      '212,798',
      '153,857',
      '84,955',
      '54,052',
      '35,275',
      '1,598 times',
      'Marks Point Public School',
      '3,452 m',
      'Merewether to Maitland'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Newcastle - Maitland Significant Urban Area (1025): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1025' },
      { claim: 'NSW Department of Education, NSW public schools master dataset, Creative Commons Attribution, on Data.NSW.', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, school calendar 2026: Eastern division term dates and school development days.', url: 'https://education.nsw.gov.au/schooling/calendars/2026' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'OpenStreetMap roads or coastline: the Overpass API returned 406 to this machine on 7 October 2026 and no mirror was tried; distances are straight lines between published school coordinates.',
      'Bureau of Meteorology observations: the observations feed returned 403 and was not circumvented.',
      'Enrolment, Indigenous, language background and socio-economic index columns of the schools file: present in the file but deliberately not used.',
      'Non-government schools: the NSW master dataset lists public schools only, so the page never claims to cover every school in the area.',
      'Any claim that a school is the right choice for a family: the project is about testing code, not choosing schools.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education or the ABS.'
    ]
  }
};
