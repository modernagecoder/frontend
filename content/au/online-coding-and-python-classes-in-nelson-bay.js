'use strict';
// Nelson Bay (cg- city page, Australia cluster Phase 7, row 176). Shaped page: online coding and Python, leading
// with teenagers and adults; younger learners are covered by the kids pages and the national hub.
// Spine: what goes wrong when a CSV is loaded as plain text, and how a Python dataclass stops it. Data: NSW
// Department of Education, "Master dataset: NSW government school locations and student enrolment numbers"
// (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026,
// Date_extracted 2026-10-02. Rows with LGA "Port Stephens": 21 schools (18 Primary School, 3 Secondary School).
// Our calculation (scratchpad au/r6/py/nlb_dc.py): comparing the Latitude column as text puts every one of the
// 210 pairs of schools in the wrong north-south order, because the values are negative: as text the
// "southernmost" school is Karuah Public School (-32.654344), which is really the northernmost; by number the
// southernmost is Fern Bay Public School (-32.871657). Reading the date column with a misspelt key through
// dict.get ('Date_1st_Teacher') silently finds 0 schools with a first teacher before 1900; the correct key finds
// 9. Town_suburb is written two ways for one town ("Raymond Terrace" 3 rows, "RAYMOND TERRACE" 1 row), and
// "SALT ASH" is also in capitals. Loaded into a frozen, ordered dataclass, the oldest first-teacher date is Hinton
// Public School 1849-04-01 and the newest Grahamstown Public School 1994-01-31; 9 dates fall in the 1800s and 12
// in the 1900s. Assigning to a frozen field raises FrozenInstanceError.
// Lesson family: Python dataclasses (frozen, ordered, typed fields) and string-versus-number comparison bugs in
// loaded CSV data; screened free site-wide on 9 October 2026 ("dataclass": 0 page hits; claimed by AU-R6).
// Place facts read raw on 9 October 2026: ABS Census 2021 QuickStats, Nelson Bay Significant Urban Area (1024):
// 28,418 people; median age 54 (NSW 39, Australia 38); 16,431 private dwellings; 2.3 people per household;
// separate house 7,857 (67.2%; NSW 65.6%); semi-detached, row or terrace house, townhouse 2,692 (23.0%; NSW
// 11.7%; Australia 12.6%); flat or apartment 936 (8.0%; NSW 21.7%); Professionals 1,883 (17.1%; NSW 25.8%);
// Technicians and Trades Workers 1,821 (16.6%; NSW 11.9%); Bachelor Degree level and above 4,022 (16.3%; NSW
// 27.8%); aged 10 to 14 1,543 (5.4%); aged 15 to 19 1,471 (5.2%). NSW Department of Education, 2027 term dates,
// Eastern division. IANA tz: Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health, and
// the dataset's ICSEA, Indigenous and LBOTE columns.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'NELSON BAY', label: 'Nelson Bay', blurb: 'Online Python for Nelson Bay teens and adults, and a project on the bugs that hide when a spreadsheet is read as plain text.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-nelson-bay',
  code: 'nlb',
  accent: '#264690',
  accentRationale: 'Nelson Bay: a deep bay blue (HSV saturation 0.74, value 0.56, hue 223), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, and 7.2:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Nelson Bay',
    eyebrow: 'Nelson Bay, New South Wales, Australia',
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
  routeLabel: 'Nelson Bay, New South Wales',
  title: 'Online Coding and Python Classes in Nelson Bay | Live Teacher',
  description: 'Online coding and Python classes for Nelson Bay and Port Stephens teens and adults, taught live by a real teacher in small groups or one to one. First lesson free.',
  ogDescription: 'Python classes for Nelson Bay teens and adults, with a project that loads the Port Stephens schools file and finds the bugs plain text hides.',
  twitterDescription: 'Online Python classes for Nelson Bay teens and adults, live, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Nelson Bay Learners',
    description: 'Level-matched online Python, data handling and careful programming for teenagers and adults across Nelson Bay and the Port Stephens peninsula, taught live in English.'
  },

  h1: 'Online coding and Python classes in Nelson Bay',
  capsuleQ: 'What are the best online coding and Python classes in Nelson Bay?',
  capsule: 'Live online lessons where a Nelson Bay learner writes Python next to a teacher, beginning with first programs and moving on to reading real data files without being fooled by them. The 2021 Census counted 28,418 people in the Nelson Bay urban area, where the median age was 54. Lessons run on video, privately or in a small group at one level, and the first is free.',
  lead: 'Ask Python which of the 21 public schools in the Port Stephens council area lies furthest south, and it may tell you Karuah Public School. Karuah is in fact the furthest north. Nothing crashed and no error appeared; the latitudes were read as text, and because they are negative numbers, comparing them as text reverses every single one of the 210 pairs. Our Nelson Bay project loads the state\'s school file, catches that bug and two quieter ones, and shows how a Python dataclass makes them impossible to miss.',
  wa: 'Hello Modern Age Coders, I would like a free Python or coding class for a learner in Nelson Bay.',

  picks: {
    eyebrow: 'Course picks for Nelson Bay',
    h2: 'Python courses for careful coders',
    intro: 'Each one leads into the data-loading project on this page. The free first lesson recommends where to begin, and no card is needed.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the first line, with real files and real mistakes to find from the early weeks.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Ages 15 and over', note: 'A structured path to the Python Institute certificates, with types, classes and errors studied properly.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A thorough Python course for adults, from variables to classes, modules and testing.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Scripts that read, check and tidy the files a job produces, so the results can be trusted.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Nelson Bay in the Census',
      h2: 'A median age of 54 and many townhouses',
      intro: 'What the statistics bureau published for the Nelson Bay Significant Urban Area after the 2021 Census, next to New South Wales and Australia.',
      body: [
        { kind: 'table', caption: 'Nelson Bay urban area, 2021 Census QuickStats', head: ['Item', 'Nelson Bay'], rows: [
          ['Residents', '28,418'],
          ['Private dwellings', '16,431'],
          ['People per household, on average', '2.3'],
          ['Residents aged 15 to 19', '1,471']
        ] },
        { kind: 'table', mt: true, caption: 'Nelson Bay beside New South Wales and Australia', head: ['Measure', 'Nelson Bay', 'NSW', 'Australia'], rows: [
          ['Median age', '54', '39', '38'],
          ['Semi-detached, terrace or townhouse homes', '23.0% (2,692)', '11.7%', '12.6%'],
          ['Technicians and trades workers, share of workers', '16.6% (1,821)', '11.9%', '12.9%'],
          ['Bachelor degree or above, residents 15 and over', '16.3% (4,022)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Fifteen years above the state', p: 'The median resident of the Nelson Bay urban area was 54 years old in 2021, fifteen years above the median for New South Wales.' },
          { h3: 'Nearly a quarter in townhouses', p: '2,692 occupied homes were semi-detached, terrace or townhouses, almost double the state\'s share.' },
          { h3: 'Younger residents', p: '1,543 residents were aged 10 to 14 and 1,471 were aged 15 to 19 when the Census was taken.' }
        ] },
        { kind: 'p', text: 'Reading these numbers: census cells are adjusted by small random amounts so that no person can be identified, which means a table\'s rows may not total exactly. We print the bureau\'s own totals and percentages and do not add up rows to make new ones.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Three silent bugs in one school file, and the dataclass that catches them',
      intro: 'The NSW Department of Education publishes a spreadsheet of every government school. We loaded the 21 rows for the Port Stephens council area the quick way, as text in dictionaries, and recorded what went wrong before rewriting the loader properly.',
      body: [
        { kind: 'table', caption: 'What the quick loader got wrong (our calculation on the department\'s file)', head: ['Question', 'Quick answer', 'Correct answer', 'Cause'], rows: [
          ['Which school is furthest south?', 'Karuah Public School', 'Fern Bay Public School', 'Negative latitudes compared as text'],
          ['Pairs of schools in the right north-south order', '0 of 210', '210 of 210', 'Every comparison is reversed'],
          ['Schools with a first teacher before 1900', '0', '9', 'A misspelt key read with .get()'],
          ['Schools in Raymond Terrace', '3', '4', 'One row written in capitals']
        ] },
        { kind: 'table', mt: true, caption: 'After loading into a frozen, ordered dataclass (our calculation)', head: ['Check', 'Result'], rows: [
          ['Oldest first-teacher date', 'Hinton Public School, 1 April 1849'],
          ['Newest first-teacher date', 'Grahamstown Public School, 31 January 1994'],
          ['First-teacher dates in the 1800s', '9'],
          ['First-teacher dates in the 1900s', '12'],
          ['Changing a field after loading', 'Refused with FrozenInstanceError']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Load it quickly', p: 'csv.DictReader gives every value as a string. Sorting, comparing and counting all appear to work, which is exactly why the mistakes are dangerous.' },
          { h3: '2. Spot the symptoms', p: 'Check a few answers against a map and the calendar: the southernmost school is the wrong one, the 1800s look empty, and one town has fewer schools than it should.' },
          { h3: '3. Load it properly', p: 'Define a School dataclass with a date, two floats and a cleaned town name. Conversion happens once, at the door, and every later step is safe.' }
        ] },
        { kind: 'callout', h3: 'Why text and numbers sort differently', p: 'As text, "-32.65" and "-32.87" are compared character by character, and at the first difference "6" comes before "8". So "-32.65" sorts first, as though it were the smaller value. As numbers, -32.87 is smaller, because it is further below zero. Positive numbers often hide this problem; negative latitudes, which every Australian location has, expose it immediately.' },
        { kind: 'p', text: 'All counts on this page come from our own code running on the department\'s open file. The project is about loading data correctly; it says nothing about any school\'s size, results or quality, and coordinates are used only to compare north and south.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Habits that prevent bad data',
      h2: 'Questions to ask of every file you load',
      intro: 'The Port Stephens file is small, but the same four checks protect programs that read millions of rows.',
      body: [
        { kind: 'table', caption: 'A loading checklist built from the Nelson Bay project', head: ['Check', 'What went wrong here', 'The habit'], rows: [
          ['Is every column the right type?', 'Latitudes stayed as text', 'Convert at load time, in one place'],
          ['Does a missing key fail loudly?', '.get() returned None and counted nothing', 'Use attribute access or a strict lookup'],
          ['Are labels written consistently?', 'Raymond Terrace in two spellings', 'Normalise case and spaces before grouping'],
          ['Can the data be changed by accident?', 'Plain dictionaries accept any edit', 'Freeze records that should not change']
        ] },
        { kind: 'p', text: 'Asking an AI assistant to load a CSV usually produces the quick version, because it is short and it runs. Learners who have watched it put Karuah at the bottom of the map learn to read generated code with one question in mind: what type is this value, really? That single habit catches a surprising share of real bugs.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the quick loader, find each bug by checking answers against reality, then rebuild it with a dataclass.' },
          { h3: 'University students', p: 'Type hints, validation libraries and how schema checks fit into a data pipeline.' },
          { h3: 'Adults', p: 'Reading work spreadsheets with Python and getting answers that survive a second look.' }
        ] },
        { kind: 'p', text: 'We are independent of the NSW Department of Education, Port Stephens Council and the Australian Bureau of Statistics. The department provides the school list and the bureau the population figures; every bug, count and fix shown here was produced by our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Port Stephens',
      h2: 'Schools from Hinton to Shoal Bay, 1849 to 1994',
      intro: 'A few more things the school list and the NSW calendar reveal.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A school from 1849', p: 'Hinton Public School records its first teacher on 1 April 1849, the earliest date among the 21 Port Stephens schools.' },
          { h3: 'The peninsula schools', p: 'Shoal Bay, Salamander Bay, Soldiers Point and Anna Bay all appear in the file\'s town column, alongside inland places such as Seaham and Karuah.' },
          { h3: 'The 2027 year', p: 'Term 1 for NSW Eastern division students runs from Wednesday 3 February to Friday 9 April 2027.' }
        ] },
        { kind: 'spec', title: 'A good follow-up exercise', p: 'Once the dataclass is in place, sorting schools by first-teacher date takes one line, because the class compares records by date. Grouping by cleaned town name is the next step, and it is a natural way to practise dictionaries of lists.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first scripts to programs that read data safely',
    intro: 'The ages are a guide only; the free trial places each learner.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'First Python', p: 'Variables, loops and lists, used early on a small extract of the Port Stephens file.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Types and classes', p: 'Converting values, writing classes and dataclasses, and checking answers against the real world.', courses: ['pcep-pcap-python-certification-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Robust programs', p: 'Validation, testing and the design of data loaders that fail loudly.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Data you can trust', p: 'Automating spreadsheets and reports with Python, with checks built in.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI writes the loader, why should a Nelson Bay learner understand types?',
    intro: 'Because the generated code runs perfectly and still gives the wrong school.',
    p1: 'An assistant asked to read the school file will normally use csv.DictReader and sort by the latitude column. The code is clean, it runs first time, and it names Karuah as the furthest south. Nothing in the output signals a problem, because comparing strings is a perfectly valid thing for Python to do.',
    p2: 'A learner who has built the dataclass version reads the same generated code differently. They see a string where a float should be, a .get() that could quietly return None, and a town name that has not been cleaned. Finding those three things takes a minute, if you know to look.',
    closer: 'In 2026 anyone can generate a loader; a Nelson Bay learner who can see the type hiding inside it is the one whose answers hold up.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Shoal Bay to Raymond Terrace, the same online class',
    intro: 'The 21 schools in our project range from the peninsula towns to inland places such as Hinton and Seaham, and a lesson on video reaches every one of those communities in the same way.',
    cells: [
      { h3: 'Peninsula and inland', p: 'A teenager in Salamander Bay and an adult near Seaham can join one class without anyone crossing the council area.' },
      { h3: 'Fits the NSW year', p: 'Plans follow the NSW stages and pause for the four school terms. Older students can connect Python projects to the computing subjects they study.' },
      { h3: 'The first lesson', p: 'The trial is a full Python lesson with real code. At the end you get a suggested level, course and lesson time, and no card details are asked for.' },
      { h3: 'One level per group', p: 'Each group has fifteen to twenty learners at the same stage, drawn from Port Stephens and other places, so nobody waits for a class to fill.' },
      { h3: 'A steady rhythm', p: 'Two lessons a week at the same time, close to eight a month, with holiday and exam breaks agreed ahead.' },
      { h3: 'Taught from India', p: 'A 5pm Nelson Bay lesson in August starts at 12:30pm in India; when NSW moves to daylight saving, it starts at 11:30am there.' }
    ],
    spec: { title: 'Lesson times stay in local time', p: 'Daylight saving in New South Wales begins on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India has no daylight saving, so only the India-side time shifts, and every booking is written in Nelson Bay time.' }
  },

  fees: {
    h2: 'Fees for Nelson Bay learners',
    intro: 'The whole price, in three lines.',
    first: 'One complete Python lesson at no cost, with a recommended level, course and time afterwards.',
    group: 'About eight lessons a month with fifteen to twenty learners at the same level.',
    private: 'About eight lessons a month, one learner with one teacher.',
    closer: 'Invoices outside India are issued in US dollars, so a household in Shoal Bay pays exactly what one in Medowie pays and no Port Stephens price list exists. Billing starts only after the trial has fixed a course and a time; holidays, missed lessons and changing format are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from families and learners',

  book: {
    h2: 'What would the learner like to build?',
    intro: 'Tell us an age and an interest and we will plan from there. A Year 8 student might start by reading a short list of towns into Python; an adult might go straight to the full loader project.',
    success: 'Thank you. Our team will be in touch shortly about a Nelson Bay class.'
  },

  faq: {
    h2: 'Nelson Bay Python class questions',
    intro: 'Questions we hear most from Nelson Bay and Port Stephens learners and parents.',
    items: [
      { q: 'How many people live in the Nelson Bay urban area?', a: 'The 2021 Census QuickStats count 28,418 residents in the Nelson Bay Significant Urban Area. The median age there was 54, compared with 39 across New South Wales.' },
      { q: 'What is a Python dataclass?', a: 'A dataclass is a short way to define a class that mainly holds data, such as a school with a name, a date and a location. Python writes the setup code for you, and options such as frozen and order make records unchangeable and sortable.' },
      { q: 'What is the Nelson Bay schools project?', a: 'Learners load the NSW Department of Education\'s file for the 21 public schools in the Port Stephens council area, find three silent bugs that plain text causes, and rewrite the loader with a dataclass. The quick version names the wrong school as furthest south and finds no schools before 1900 instead of 9.' },
      { q: 'Does the project rank the schools?', a: 'No. It uses names, dates, towns and coordinates only to practise loading data correctly. Nothing on this page comments on any school\'s results, size or quality.' },
      { q: 'Can Year 11 and 12 students get help with computing?', a: 'Yes. Senior students taking NSW computing or maths courses get lessons that fit their stage and term calendar. Assessed school work has to be the student\'s own; we teach the methods and never write marked work.' },
      { q: 'When do lessons take place?', a: 'Times are chosen at the trial and written in Nelson Bay time, often after school or on Saturday mornings. Our teachers in India are 4.5 hours behind Nelson Bay in winter and 5.5 hours behind during NSW daylight saving.' },
      { q: 'Do you teach younger children?', a: 'Yes, from age six, starting with Scratch and visual programs before moving to typed Python. The loader project on this page suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Nelson Bay?', a: 'No, and none is claimed. All lessons are live and online and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection; the contact number shown is Indian.', boiler: true },
      { q: 'What do Nelson Bay Python classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Nelson Bay and Hunter learners',
    html: 'Learners near the Hunter can also read about <a class="cg-inline-link" href="/online-coding-and-python-classes-in-newcastle-nsw">online coding and Python classes in Newcastle</a>, and senior students will find <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> covers the state, and the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia hub</a> lists every other city and topic.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Nelson Bay and Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-newcastle-nsw', label: 'Newcastle' },
    { href: '/ai-and-programming-classes-in-taree', label: 'Taree' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-nlb .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.4vw, 2.7rem); }
.cg-root.cg-nlb .cg-hero h1 { font-weight: 740; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-nlb .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.8rem 1rem; border-radius: 6px; }
.cg-root.cg-nlb .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-nlb .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.012em; }
.cg-root.cg-nlb .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2rem); }
.cg-root.cg-nlb .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-nlb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nlb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-nlb .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Nelson Bay, ABS Census 2021 QuickStats, Significant Urban Area 1024 (read 9 October 2026): 28,418 people; median age 54 (New South Wales 39, Australia 38); 16,431 private dwellings; average 2.3 people per household; dwelling structure, occupied private dwellings: separate house 7,857 (67.2 percent; NSW 65.6), semi-detached, row or terrace house, townhouse 2,692 (23.0 percent; NSW 11.7; Australia 12.6), flat or apartment 936 (8.0 percent; NSW 21.7); occupation: Professionals 1,883 (17.1 percent; NSW 25.8), Technicians and Trades Workers 1,821 (16.6 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 4,022 (16.3 percent; NSW 27.8; Australia 26.3); aged 10 to 14 1,543 (5.4 percent); aged 15 to 19 1,471 (5.2 percent). NSW Department of Education, 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April. IANA tz database: Australia/Sydney, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Python dataclasses and string-versus-number comparison bugs. NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (data.nsw.gov.au, Creative Commons Attribution), master_dataset.csv downloaded 7 October 2026, Date_extracted 2026-10-02. Rows with LGA = Port Stephens: 21 (Primary School 18, Secondary School 3). csv.DictReader leaves Latitude as text: min/max by string give Karuah Public School (-32.654344) as southernmost and Fern Bay Public School (-32.871657) as northernmost, the reverse of the numeric answer; all 210 pairs are ordered differently by string and by float. dict.get("Date_1st_Teacher") (misspelt key) counts 0 schools before 1900; the real key Date_1st_teacher counts 9. Town_suburb: "Raymond Terrace" 3 rows and "RAYMOND TERRACE" 1 row; "SALT ASH" in capitals. Frozen ordered dataclass School(opened: date, name, lat: float, lon: float, level) sorted by date: oldest Hinton Public School 1849-04-01, newest Grahamstown Public School 1994-01-31; first-teacher dates by century 1800s 9, 1900s 12; assignment to a field raises dataclasses.FrozenInstanceError.',
    requiredMentions: [
      '28,418',
      '16,431',
      '2,692',
      '4,022',
      'Karuah Public School',
      'Fern Bay Public School',
      'Hinton Public School',
      'FrozenInstanceError',
      '0 of 210'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Nelson Bay Significant Urban Area (1024): people, median age, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1024' },
      { claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'Python documentation, dataclasses module: frozen and order parameters, FrozenInstanceError.', url: 'https://docs.python.org/3/library/dataclasses.html' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why the Nelson Bay area has many more dwellings than its population suggests (holiday homes or otherwise): not verified, so no reason is given.',
      'That the 21 schools are all within the Nelson Bay urban area: they are the Port Stephens council area, which also takes in Raymond Terrace and inland places, and the page says so.',
      'Enrolment, ICSEA, Indigenous and LBOTE figures from the master dataset: excluded by the cluster rules or not needed.',
      'Bureau of Meteorology station facts: the Bureau\'s pages returned 403 and were not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, Port Stephens Council or the ABS.'
    ]
  }
};
