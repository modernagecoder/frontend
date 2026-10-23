'use strict';
// Ottawa (cg- city page, Canada cluster Plan 2 Wave 2, row 101). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Shape from coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: a capital region split by a river. Ottawa students follow the Ontario curriculum, students across the bridge in
// Gatineau follow Quebec's, both read the same clock, and the city publishes its files in two languages, which is where
// our data project finds its lesson: the English and French columns do not always agree.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md,
// each with its saved raw file in ca/src/; geography from ca/facts-geo.md; parks file, map-service layer and licence in
// ca/src-pilots/coding-and-ai-classes-in-ottawa/):
//  - Ontario DCP API, Science and Technology (2022), Grade 6 A2: "use coding in investigations and to model concepts, and
//    assess the impact of coding and of emerging technologies on everyday life"; A2.1 "with a focus on obtaining input in
//    different ways".
//  - Ontario DCP API, MTH1W (2021, de-streamed): C2.2 "create code by decomposing situations into computational steps in order
//    to represent mathematical concepts and relationships"; course description "mathematical modelling, and coding".
//  - Ontario DCP API, ICD2O (2023, Open): "investigate current and emerging innovations in digital technology, including
//    automation and artificial intelligence, and assess their benefits and limitations"; C2 "use fundamental programming
//    concepts to write simple programs". ICS4C description "object-oriented programming concepts". ICS3U and ICS4U (2008).
//  - ontario.ca OSSD page (updated 2 September 2026): STEM group list contains "computer studies"; 2024+ cohort "1 credit in
//    technological education".
//  - EQAO Grade 9 math: "two sessions (Session A and Session B), totalling 54 questions"; "multi-stage computer adaptive
//    testing model"; window "January 12 - February 5, 2027" (en dash in source); results "included as part of a student's
//    final course mark".
//  - PPM 128: "School boards are required to restrict access to all social media platforms on school networks and school
//    devices."
//  - CEMC: CCC "Wednesday, February 17, 2027"; CCC "This contest is available in English and French."; BCC "This contest is
//    available in English only." and "Monday, November 9, 2026 to Friday, November 20, 2026"; PCF "Tuesday, February 23,
//    2027 and Wednesday, February 24, 2027"; Euclid "Tuesday, April 6, 2027"; "all students must participate through their
//    school"; past contests free.
//  - Quebec (for Gatineau): quebec.ca QEP secondary page "programs of study for students from Secondary I to Secondary V";
//    CEGEP pre-university "requires two years of full-time study".
//  - facts-geo.md: Constitution Act, 1867 s.16 "the Seat of Government of Canada shall be Ottawa"; the CMA is published as
//    "Ottawa - Gatineau" with an Ontario part and a Quebec part (no population printed); area codes Eastern Ontario
//    343/613/753, western Quebec incl. Gatineau 468/819/873 (CNAC files via the Internet Archive); Ontario and Quebec on
//    UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e).
//  - City of Ottawa open data, Parks and Greenspace (layer Parks_Inventory/MapServer/24), parks-and-greenspace.csv, 1,030,402
//    bytes, sha256 c26517b6...adfcf6, downloaded 22 October 2026; code meanings from the layer's coded-value domain
//    PR_Dog_Designation in layer24.json (0 Dogs Allowed (off-leash), 1 Dogs on Leash, 2 Mixed, 3 No Dogs, 4 Not Designated
//    (Dogs on Leash)); licence item: "based on version 2.0 of the Open Government Licence - Canada"; attribution
//    "Contains information licensed under the Open Government Licence - City of Ottawa." (en dash in source); commercial use
//    allowed; non-endorsement clause.
// Our own calculations (ottawa_dog_codes.py, python -I, output ottawa_dog_codes.out.txt; extra checks analysis.py /
// analysis.out.txt): 1,378 rows, 1,378 distinct PARK_ID, 24 wards; Not Designated (Dogs on Leash) 631, Dogs on Leash 356,
// Dogs Allowed (off-leash) 175, No Dogs 119, Mixed 69, blank code 28; 21 wards have an off-leash park, River ward the most
// (23); PARK_TYPE vs PARK_TYPE_FR swapped on 36 rows (18 each way); DOG_DESIGNATION vs DOG_DESIGNATION_FR differ on 1 row
// (1 in English, 3 in French); ACCESSIBLE values are bilingual strings "yes/oui" 269, "no/non" 1,062, blank 47.
// Lesson family: decoding numeric codes with a lookup dictionary, then auditing two columns that should say the same thing.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'LABELS = {',
  '    "0": "Dogs Allowed (off-leash)",',
  '    "1": "Dogs on Leash",',
  '    "2": "Mixed",',
  '    "3": "No Dogs",',
  '    "4": "Not Designated (Dogs on Leash)",',
  '}',
  'SWAPPED = {("Active Recreation", "Loisirs passifs"),',
  '           ("Passive Recreation", "Loisirs dynamiques")}',
  'counts = {}',
  'type_clash = 0',
  'dog_clash = 0',
  '',
  'with open("parks-and-greenspace.csv", encoding="utf-8-sig") as parks:',
  '    for row in csv.DictReader(parks):',
  '        label = LABELS.get(row["DOG_DESIGNATION"], "(blank code)")',
  '        counts[label] = counts.get(label, 0) + 1',
  '        if (row["PARK_TYPE"], row["PARK_TYPE_FR"]) in SWAPPED:',
  '            type_clash += 1',
  '        if row["DOG_DESIGNATION"] != row["DOG_DESIGNATION_FR"]:',
  '            dog_clash += 1',
  '',
  'for label in sorted(counts, key=counts.get, reverse=True):',
  '    print(label, counts[label])',
  'print("English and French park type disagree:", type_clash)',
  'print("English and French dog code disagree:", dog_clash)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'OTTAWA', label: 'Ottawa', blurb: 'Coding and AI for Ottawa and Gatineau students: Ontario school coding, a bilingual City of Ottawa parks data audit, and CEMC contests.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-ottawa',
  code: 'aiot',
  accent: '#662B25',
  accentRationale: 'Ottawa: a muted oxblood red, #662B25, darker and browner than a flag red so it sits quietly on the paper; nearest site accent 7.8 RGB units away and every Canada accent at least 19.9 away; contrast 10.23 on the paper #FBF8F2 and above 8.8 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Ottawa',
    eyebrow: 'Ottawa, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ottawa',
  title: 'Coding and AI Classes in Ottawa | Live Online, Ages 6 to Adult',
  description: 'Live online coding, Python and AI classes for Ottawa and Gatineau learners: Ontario school coding, CEMC contest dates in two languages, and a parks data audit.',
  ogDescription: 'Ottawa students meet code in Grade 6 science, MTH1W and ICD2O. Here is what school asks, the 2026 to 2027 CEMC dates, and live classes that go deeper.',
  twitterDescription: 'Ottawa coding, Python and AI classes, live online, for Ontario and Gatineau students.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Ottawa Students',
    description: 'Live online coding for Ottawa and Gatineau learners from age 6 to adult: Python, AI and machine learning, an ICS3U and ICS4U companion and Grade 12 university math, taught in English by level.'
  },

  h1: 'Coding and AI classes in Ottawa',
  capsuleQ: 'Who teaches coding and AI to Ottawa students live, with a real teacher?',
  capsule: 'Modern Age Coders teaches coding, Python and AI live online to Ottawa learners aged 6 to adult, either one to one or in a group of fifteen to twenty. Children usually start with Python and AI for Kids; teens move to AI and Machine Learning for Teens or our ICS3U and ICS4U companion. The first class is free.',
  lead: 'Ottawa is a capital with a provincial border running through its middle. A student in Kanata or Orleans follows the Ontario curriculum, where code turns up in Grade 6 science, in MTH1W, the Grade 9 math course every student now takes, and in a newer Grade 10 technology course that names artificial intelligence. A student a bridge away in Gatineau follows Quebec\'s program instead, on the same clock. The city itself publishes its open data in English and French, side by side. This page uses all three facts: what Ontario schools ask an Ottawa student to code, what changes across the river, and a data project we built on the City of Ottawa parks file, where the most useful lesson is the moment the English and French columns disagree.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Ottawa.',

  picks: {
    eyebrow: 'Course picks for Ottawa',
    h2: 'Where most Ottawa learners begin',
    intro: 'Chosen against Ontario school stages, then confirmed against the student in the free first lesson, never assigned by age alone.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Real typed Python for a child ready to leave blocks behind: variables, loops, turtle drawings and small games that answer to their own logic.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning built from Python upward on data the student can inspect, so a model\'s answer is something to test, not to trust.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Practice and projects that run beside a school ICS3U or ICS4U course. The school grants the credit; this course does not.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grade 12', note: 'Advanced Functions and Calculus and Vectors taught for understanding, for students whose university plans lean on both.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Ottawa schools and code',
      h2: 'Where code appears in an Ottawa student\'s Ontario timetable',
      intro: 'Ottawa\'s public schools teach the Ontario curriculum. Each expectation below was read on 22 October 2026 through the data feed behind the Ontario curriculum website. The short quotations are the ministry\'s; everything else is our plain summary.',
      body: [
        { kind: 'table', caption: 'Four places code sits in Ontario courses an Ottawa student meets, with the year each document was issued. Short quotations from the Ontario Ministry of Education; summaries ours', head: ['Course or grade', 'Year issued', 'What it asks, in short'], rows: [
          ['Grade 6 Science and Technology', '2022', 'Expectation A2 has students &ldquo;use coding in investigations&rdquo; and to model concepts; A2.1 adds getting input in different ways, such as from a sensor or a user'],
          ['Grade 9 math, MTH1W', '2021', 'C2.2 asks students to build code by &ldquo;decomposing situations into computational steps&rdquo;, which is the habit every larger program depends on'],
          ['Grade 10, ICD2O (Open)', '2023', 'Programming fundamentals plus innovations &ldquo;including automation and artificial intelligence&rdquo;, weighed for both benefits and limits'],
          ['ICS3U, then ICS4U (Grades 11, 12)', '2008', 'Optional university-stream computer science; ICS4U builds on ICS3U, and each course is worth one credit']
        ] },
        { kind: 'p', text: 'Read together, the rows describe a student who is asked to code in three different subjects before Grade 11 without ever taking a course called computer science. That is a good design and a thin one: the ideas are present, but a science unit or a math strand gives each child only a few hours at the keyboard. Our classes add the missing hours, and we spend them on the part school has least time for, which is building something big enough to break.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Grade 9 math assessment', p: 'EQAO describes its Grade 9 math assessment as online, in two sessions of 54 questions in all, using a &ldquo;multi-stage computer adaptive&rdquo; model. The 2026 to 2027 window runs from 12 January to 5 February 2027, and EQAO says results count in the final course mark.' },
          { h3: 'Computer studies and the diploma', p: 'For students who began Grade 9 in 2024 or later, ontario.ca lists one technological education credit among the compulsory ones and names computer studies as one option in a group of STEM choices. We stop there: the page does not say ICD2O fills the technology credit, so neither do we.' },
          { h3: 'Phones and social media', p: 'PPM 128, in force since 1 September 2024, requires school boards to restrict access to social media platforms on school networks and devices. It is a fair reason to keep a coding class at home, on a laptop, away from the school day.' }
        ] },
        { kind: 'callout', h3: 'Beside school, never instead of it', p: 'We teach alongside a student\'s school courses and we do not grant Ontario credits; ICS3U, ICS4U, MTH1W and every other credit are earned at school. We are not connected with the Ontario Ministry of Education, EQAO, any Ottawa school board or the City of Ottawa.' },
        { kind: 'p', text: 'Families who want the full provincial picture, including how the course codes chain together, can read our <a class="cg-inline-link" href="/coding-classes-in-ontario">Ontario coding classes page</a> and the <a class="cg-inline-link" href="/ontario-computer-science-course-pathway">Ontario computer science pathway</a>. Grade 9 families will find more on <a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W</a>, and Grade 10 students on <a class="cg-inline-link" href="/icd2o-digital-technology-course-explained">ICD2O</a>.' }
      ]
    },
    {
      id: 'river', tint: 'tint', eyebrow: 'Ottawa and Gatineau',
      h2: 'One capital region, two school systems, one clock',
      intro: 'Statistics Canada treats Ottawa and Gatineau as one census metropolitan area, which it names Ottawa - Gatineau and publishes in an Ontario part and a Quebec part. For a family choosing a class, three practical differences follow.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The capital itself', p: 'Section 16 of the Constitution Act, 1867 settles where Parliament sits: the Seat of Government of Canada shall be Ottawa. The city that holds that role still runs its schools under a provincial curriculum, like every other Canadian city.' },
          { h3: 'Across the bridge', p: 'Quebec\'s secondary program runs from Secondary I to Secondary V, and students then usually go to CEGEP, where a pre-university program takes two years of full-time study. A Gatineau teenager of sixteen is placed by what they can do, not by the Ontario grade they would be in.' },
          { h3: 'The same hour', p: 'Ontario and Quebec keep the same Eastern clock, so a class booked from Gatineau and one booked from Barrhaven start at the same moment. Both provinces move to UTC-5 on 1 November 2026 and back to UTC-4 on 14 March 2027.' }
        ] },
        { kind: 'p', text: 'Gatineau families with a student in Secondary IV or V can read our pages on <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">Quebec Secondary 4 math options</a> and <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary 5 math</a>, and students heading to college on <a class="cg-inline-link" href="/cegep-computer-science-preparation">preparing for CEGEP computer science</a>. One honest line for every family on either bank: our teaching, our materials and our written feedback are in English.' }
      ]
    },
    {
      id: 'parks', tint: 'deep', eyebrow: 'Ottawa data project',
      h2: 'Two languages, one parks file: an Ottawa data audit',
      intro: 'The City of Ottawa publishes its Parks and Greenspace inventory as open data, with an English and a French version of most columns. Our students decode it, count it, and then check whether the two languages tell the same story. Every figure below is ours, from the file as downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Our count of the dogs-in-parks designation in the City of Ottawa Parks and Greenspace file (1,378 rows, one per park; downloaded 22 October 2026). The file stores a number; the labels come from the city\'s map service', head: ['Code in the file', 'What the code means', 'Parks'], rows: [
          ['4', 'Not Designated (Dogs on Leash)', '631'],
          ['1', 'Dogs on Leash', '356'],
          ['0', 'Dogs Allowed (off-leash)', '175'],
          ['3', 'No Dogs', '119'],
          ['2', 'Mixed', '69'],
          ['(blank)', 'No code recorded', '28']
        ] },
        { kind: 'p', text: 'The first surprise is that the CSV holds only digits in that column. The meaning of 0 to 4 lives in the city\'s map service, as a list the service calls a coded-value domain, and a student has to fetch that list before a single count makes sense. The script below carries the list as a Python dictionary, counts the parks, and then runs the audit. It needs nothing beyond Python 3 and the downloaded file in the same folder:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Decode before counting', p: 'A dictionary turns "4" into Not Designated (Dogs on Leash). Rows with no code at all fall through to the label we chose, (blank code), so 28 parks are reported as missing rather than silently dropped.' },
          { h3: '2. Compare the two languages', p: 'PARK_TYPE says Active Recreation or Passive Recreation; PARK_TYPE_FR should say Loisirs dynamiques or Loisirs passifs to match. On 36 rows the pair is crossed, 18 in each direction, so the English and French park type disagree.' },
          { h3: '3. Find the one that matters', p: 'The dog code is stored twice, once per language, and on exactly one park the English column says 1 (on leash) while the French says 3 (no dogs). A dog owner reading the French map and one reading the English map would get different instructions.' }
        ] },
        { kind: 'table', mt: true, caption: 'Our audit checks on the same file. Counts are rows of the City of Ottawa file; none of these totals is published by the city', head: ['Check', 'Result'], rows: [
          ['Distinct PARK_ID values', '1,378, one per row'],
          ['Wards named in WARD_NAME', '24'],
          ['Wards with at least one off-leash park', '21; River ward has the most, 23'],
          ['Park type crossed between English and French', '36 rows'],
          ['Dog code different between English and French', '1 row'],
          ['ACCESSIBLE written as yes/oui, no/non, blank', '269, 1,062 and 47']
        ] },
        { kind: 'callout', h3: 'What the file does not tell you', p: 'A park coded on-leash can still keep dogs away from its play area: the city\'s detail text mentions play areas on 981 of the 987 parks coded 1 or 4, which the code alone cannot show. Nor does the file say which of two disagreeing columns is right. The honest finding is a list of 37 rows to report to the city, not a correction we invent.' },
        { kind: 'p', text: 'We use the parks file under the Open Government Licence - City of Ottawa, which the city bases on version 2.0 of the federal licence and which permits commercial reuse with attribution. Contains information licensed under the Open Government Licence - City of Ottawa (<a class="cg-inline-link" href="https://open.ottawa.ca/pages/open-data-licence">licence</a>, <a class="cg-inline-link" href="https://open.ottawa.ca/datasets/ottawa::parks-and-greenspace">dataset page</a>). The City of Ottawa has not endorsed this page or these classes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Ottawa',
      h2: 'CEMC contests for Ottawa students in 2026 to 2027, and the language each runs in',
      intro: 'Most contests that Ottawa schools enter come from CEMC, the University of Waterloo\'s Centre for Education in Mathematics and Computing. In a bilingual region the language matters, so the table carries CEMC\'s own language note beside each date. CEMC gives separate dates by region; these are its dates for the Americas, checked on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Selected CEMC contests for 2026 to 2027, with the language CEMC lists for each (CEMC wording, read 22 October 2026)', head: ['Contest', 'Who it is for', 'Language CEMC lists', 'Date'], rows: [
          ['Beaver Computing Challenge', 'Grade 10 or below, at three levels', 'English only', '9 to 20 November 2026'],
          ['The CCC, Canada\'s national programming contest', 'Two levels, picked by skill rather than grade', 'English and French', 'Wednesday 17 February 2027'],
          ['Pascal, Cayley and Fermat', 'Grades 9, 10 and 11 in turn', 'See each contest page', '23 and 24 February 2027'],
          ['Euclid', 'Final year of secondary school, or CEGEP students', 'See the contest page', 'Tuesday 6 April 2027']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entry goes through a school', p: 'In CEMC\'s words, all students must participate through their school, so nobody registers alone. A student whose own school stays out can ask another nearby school to host them, an option CEMC itself mentions.' },
          { h3: 'The CCC in two languages', p: 'The 2027 CCC falls on Wednesday 17 February 2027, according to CEMC, which offers the paper in English and in French. It is written online at school, in C, C++, Python or Java. We coach for it in English.' },
          { h3: 'Practise with the archive', p: 'The last ten years of CEMC papers can be downloaded free, without an account. Students use <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">that archive</a> for real papers, while our lessons run on problems we write ourselves, never on CEMC\'s.' }
        ] },
        { kind: 'p', text: 'The parks audit above is quiet CCC training. Reading a file line by line, mapping codes through a dictionary and comparing two fields are the moves of an early Junior problem; doing the same thing fast on a million rows is where Senior begins. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> sets out both levels, and <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contest preparation</a> covers the math contests. Modern Age Coders has no tie to CEMC or to the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Ottawa time against India time, through the 2026 to 2027 school year',
      intro: 'Our teachers work from India, which keeps one offset all year; Ottawa and Gatineau change twice. The example hours below are conversions to help a family judge a slot, not a timetable we sell.',
      body: [
        { kind: 'table', caption: 'Two example Ottawa hours shown in India time across 2026 to 2027. The conversions are ours; the offsets come from the 2026e release of the IANA time zone database', head: ['Dates', 'Ottawa offset', 'Thursday 5 to 6 pm in Ottawa is, in India', 'Sunday 10 to 11 am in Ottawa is, in India'], rows: [
          ['Until 1 November 2026', 'UTC-4', 'Friday 2:30 to 3:30 am', 'Sunday 7:30 to 8:30 pm'],
          ['After 1 November 2026, until 14 March 2027', 'UTC-5', 'Friday 3:30 to 4:30 am', 'Sunday 8:30 to 9:30 pm'],
          ['14 March 2027 onward', 'UTC-4', 'Friday 2:30 to 3:30 am', 'Sunday 7:30 to 8:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Written in Eastern time', p: 'Every class time we confirm is written in Ottawa\'s own time first. In the week of each change we send the time again, so a family on either side of the river never converts anything.' },
          { h3: 'Ottawa and Gatineau numbers', p: 'Ottawa numbers use 343, 613 and 753; Gatineau numbers use 819, 873 and 468. All of them work in the form below as ten digits, with the +1 already filled in.' },
          { h3: 'A clock exercise for teens', p: 'A Python reminder that adds a fixed four hours to UTC will be an hour wrong from 1 November 2026. Rewriting it with the America/Toronto zone, which covers Ottawa, is a short lesson in why dates are hard.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to ICS4U, MHF4U and machine learning',
    intro: 'The grades are a guide. The free class sets the real starting rung.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Blocks and sequences', p: 'Short block programs a child can read aloud, with the order of steps as the first big idea.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 8', h3: 'Typed Python', p: 'Python by about Grade 5, with conditions, functions and input, ahead of the Grade 6 science expectation that asks for it.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 and 10', h3: 'Python properly, and the CCC', p: 'Files, functions and data, algebra through code for MTH1W, and a first Junior CCC for students who want one.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Grades 11 and 12', h3: 'Credits at school, depth here', p: 'Support beside ICS3U and ICS4U, Grade 12 university math, and machine learning for future engineers and scientists.', courses: ['ics3u-ics4u-computer-science-companion-course', 'ontario-grade-12-university-math-mhf4u-mcv4u-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI tool writes the script, what is left for an Ottawa student to learn?',
    intro: 'The part where someone notices that the French column and the English column disagree.',
    p1: 'Give an AI assistant the Ottawa parks file and ask for a count of off-leash parks, and you will get working code and a number. You will probably not be told that one park says on-leash in English and no dogs in French, or that 36 rows swap their park type between languages. The tool answered the question asked. Knowing which question to ask next is the skill.',
    p2: 'That is why we teach students to reason first and type second: plan the steps, write the loop, then interrogate the output. As they get older they use AI tools within age rules we follow, and they use them to check and extend their own thinking, never to hand in someone else\'s.',
    closer: 'Ontario put coding into science and math so that students learn to break a problem into steps; an AI tool can follow those steps, but only a student who understands them can tell when it has followed the wrong ones.',
    blogAnchor: 'our essay on why writing code still pays off for a capital-region student'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Ottawa, Gatineau and the valley',
    intro: 'Because every class is online, a student in Stittsville and one in Hull can share a teacher without a bridge crossing.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or one to one', p: 'A group of fifteen to twenty learners working at the same stage, or private lessons with one teacher for ICS4U projects, contest work or a quicker pace.' },
      { h3: 'Two provinces, one class', p: 'Ontario students are placed by grade and course code, Quebec students by secondary level; both join the same live lesson when their level matches.' },
      { h3: 'Taught in English', p: 'Lessons, code comments and written feedback are in English. Bilingual students are welcome; French-language teaching is something we do not offer.' },
      { h3: 'What a student needs', p: 'A laptop or desktop with a microphone and a connection steady enough for video. Tablets struggle with typed code, so we ask for a keyboard.' },
      { h3: 'The first class', p: 'A full lesson at no charge that ends with a suggested level, course and time. No card details are taken.' }
    ],
    spec: { title: 'No Ottawa centre', p: 'Modern Age Coders has no office or classroom in Ottawa or Gatineau and claims none. Every lesson is taught live online from India.' }
  },

  fees: {
    h2: 'Fees for Ottawa families',
    intro: 'Each line shows the fee with its currency code, so there is no guessing.',
    first: 'A complete live lesson, free, after which we suggest a level, a course and a time.',
    group: 'The monthly fee for a place in a group of fifteen to twenty learners at one level.',
    private: 'The monthly fee for one learner with one teacher, at hours the family picks.',
    closer: 'An Ottawa family pays what a family in any other Canadian city pays. Nothing is charged until the free lesson is done and the course and time are agreed; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'What families and students say about us on Google',

  book: {
    h2: 'Tell us about your Ottawa learner',
    intro: 'We match the first task to the level: a bouncing-ball animation for a young child, a number-guessing game in Python for a middle schooler, or the bilingual parks file for a teen who wants real data.',
    success: 'Thank you. The team will contact you soon about an Ottawa class.'
  },

  faq: {
    h2: 'Ottawa coding and AI questions',
    intro: 'What Ottawa and Gatineau families ask us before a first class.',
    items: [
      { q: 'Is there a coding class for kids in Ottawa that is taught live?', a: 'Yes. Our classes are live online with a real teacher, so a child in any Ottawa neighbourhood joins from home. We have no Ottawa building; we teach groups of fifteen to twenty or one to one.' },
      { q: 'Can a student from Gatineau join an Ottawa class?', a: 'Yes. Gatineau and Ottawa share the Eastern clock, so the class starts at the same moment on both banks. We place a Quebec student by secondary level and skill rather than by Ontario grade. Teaching is in English.' },
      { q: 'What coding do Ottawa schools already teach?', a: 'Under the Ontario curriculum, Grade 6 science asks students to use coding in investigations, the Grade 9 math course MTH1W uses code for algebra, ICD2O in Grade 10 covers programming and artificial intelligence, and ICS3U and ICS4U are optional computer science courses.' },
      { q: 'Does a class with you earn an Ontario credit?', a: 'It does not: credits such as ICS3U or ICS4U are earned at school, and we do not grant Ontario credits. Our companion course adds practice and projects alongside the school course.' },
      { q: 'Are there robotics classes for Ottawa students?', a: 'We teach the programming half of robotics, not robot hardware: Python, logic, sensors as data and debugging. A student who wants to build a physical robot should pair our classes with a school or community robotics team.' },
      { q: 'Which AI classes suit an Ottawa teenager?', a: 'AI and Machine Learning for Teens, after a solid start in Python. Under-18 students do not use tools rated 18 and over, such as Claude, and a teen using ChatGPT needs a parent\'s permission, so we plan lessons around that.' },
      { q: 'Do you run Python classes in Ottawa for adults?', a: 'Yes. Adults learn in their own groups or one to one, from a first program to working with real files and data. The Ottawa parks file on this page is a typical first data project.' },
      { q: 'Can you coach an Ottawa student for the CCC in French?', a: 'The contest itself is bilingual: CEMC offers the 2027 CCC, on Wednesday 17 February 2027, in English and French. Our coaching is in English, using problems we write ourselves in Python, C++ or Java, and the student writes the contest through their school.' },
      { q: 'When do Ottawa classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm every time in Eastern time and again when the clocks change.' },
      { q: 'Can I enter a 613 or 819 number in the form?', a: 'You can. Ottawa numbers with 343, 613 or 753 and Gatineau numbers with 819, 873 or 468 are all accepted. Enter the ten digits after the +1, which the form supplies.' },
      { q: 'How are fees shown to an Ottawa family?', a: 'Scroll to the fees section: it lists the free lesson first, then the monthly fee for a group place and for one-to-one teaching, each beside its currency code. Nothing is billed before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Ottawa and Ontario students',
    html: 'Ontario-wide detail sits on <a class="cg-inline-link" href="/coding-classes-in-ontario">our Ontario coding page</a>, and the national overview on <a class="cg-inline-link" href="/coding-classes-in-canada">the Canada page</a>. Families in the Toronto area have <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">a page of their own</a>. Students aiming at contests have <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>, and for math support see <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring for Canadian students</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ottawa and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
  ],

  personalityCss: `
.cg-root.cg-aiot .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2rem); }
.cg-root.cg-aiot .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-aiot .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-aiot .cg-eyebrow { letter-spacing: 0.08em; font-weight: 650; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aiot .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.008em; }
.cg-root.cg-aiot .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-aiot .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiot #parks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.85rem 1rem; border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-aiot .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-aiot .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Science and Technology (2022) Grade 6 A2 and A2.1 coding; MTH1W (2021) C2.2; ICD2O (2023, Open) AI strand and C2; ICS3U and ICS4U (2008), one credit each. ontario.ca OSSD page: technological education credit and computer studies in the STEM group (2024+ cohort). EQAO Grade 9 math format (54 questions, two sessions, multi-stage computer adaptive) and the 12 January to 5 February 2027 window, results in the course mark. PPM 128 social media restriction. Quebec (Gatineau): QEP Secondary I to V, CEGEP pre-university two years. CEMC 2026-27 dates and language notes (CCC English and French, BCC English only), through-a-school rule. Constitution Act, 1867 s.16; Ottawa - Gatineau CMA; area codes and Eastern offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e).',
    localProject: 'City of Ottawa open data, Parks and Greenspace (Open Government Licence - City of Ottawa), CSV downloaded 22 October 2026, decoded with the map service coded-value domain and counted with our script ottawa_dog_codes.py (python -I): 1,378 parks; Not Designated (Dogs on Leash) 631, Dogs on Leash 356, Dogs Allowed (off-leash) 175, No Dogs 119, Mixed 69, blank 28; 24 wards, 21 with an off-leash park, River ward 23; English and French park type crossed on 36 rows; dog code differs between languages on 1 row. Labelled as ours. Lesson family: decoding codes with a lookup dictionary and auditing two columns that should agree.',
    requiredMentions: [
      'English and French park type disagree',
      'Loisirs dynamiques',
      'a list of 37 rows to report to the city',
      'coded-value domain',
      'River ward has the most, 23',
      'Ottawa numbers use 343, 613 and 753',
      'Wards with at least one off-leash park',
      '981 of the 987 parks coded 1 or 4',
      'a class booked from Gatineau and one booked from Barrhaven',
      'Language CEMC lists'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 6 Science and Technology strand A2, MTH1W strands, ICD2O course and strands, computer studies course list.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/e___sci___tech___grade_6___strands?depth=4' },
      { claim: 'ontario.ca: Ontario Secondary School Diploma requirements (technological education credit, STEM group with computer studies).', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'EQAO: Grade 9 Assessment of Mathematics format, adaptive model, window and course-mark rule.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'Ontario PPM 128: personal mobile devices and social media in schools.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-128' },
      { claim: 'Quebec Education Program, secondary: Secondary I to Secondary V.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program/secondary' },
      { claim: 'CEMC: 2026-27 contest dates, language notes, through-a-school rule, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'City of Ottawa open data: Parks and Greenspace dataset page.', url: 'https://open.ottawa.ca/datasets/ottawa::parks-and-greenspace' },
      { claim: 'City of Ottawa map service layer 24 (coded-value domain for the dogs-in-parks designation).', url: 'https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/24' },
      { claim: 'City of Ottawa: Open Government Licence - City of Ottawa (attribution, commercial use, non-endorsement).', url: 'https://open.ottawa.ca/pages/open-data-licence' },
      { claim: 'Constitution Act, 1867, section 16: seat of government.', url: 'https://laws-lois.justice.gc.ca/eng/const/page-1.html' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Ottawa, Gatineau or CMA population figure: StatCan was not reachable live, so no population is printed.',
      'That ICD2O satisfies the technological education credit: ontario.ca does not say so; only computer studies in the STEM group is stated.',
      'That our classes earn or count toward an Ontario credit: refused; we do not grant Ontario credits.',
      'That we teach in French or have bilingual teachers: refused; teaching is in English.',
      'That we run robotics hardware classes: refused; we teach the programming side only.',
      'Which of two disagreeing English and French columns is correct: not decided; the rows are reported, not corrected.',
      'Named employers or research institutes in Ottawa: not fetched raw for this page, so not used.',
      'Names of Ottawa or Gatineau schools, school boards or private people: not used; park names are not printed.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the City of Ottawa, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
