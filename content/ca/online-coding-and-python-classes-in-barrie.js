'use strict';
// Barrie (cg- city page, Canada cluster Wave 2, row 135). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: a month-by-month plan for a Barrie teen's first six months of live online Python, each month tied to a school or
// contest moment; how live teaching keeps that plan honest; the City of Barrie park amenity file as a lesson in missing
// values, whitespace that looks empty, a placeholder date and a download that is shorter than the portal says; CEMC's
// free resources and younger-student contests; Eastern time.
// Sources (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md with saved raw files in
// ca/src/; geography from ca/facts-geo.md; the amenity file, item and hub records, licence and our scripts in
// ca/src-pilots/online-coding-and-python-classes-in-barrie/):
//  - Ontario DCP API: Grade 1 C3.1 "by writing and executing code, including code that involves sequential events"; Grade 8
//    C3.1 "the analysis of data in order to inform and communicate decisions" (paraphrased on the page); MTH1W C2.1 "use
//    coding to demonstrate an understanding of algebraic concepts including variables, parameters, equations, and
//    inequalities"; ICS4U prerequisite "Introduction to Computer Science, Grade 11, University Preparation".
//  - EQAO: Grade 9 "an online assessment that includes two sessions (Session A and Session B), totalling 54 questions";
//    "multi-stage computer adaptive testing model"; Grade 6 window "May 4 - June 8, 2027" (en dash in source).
//  - PPM 128: from "September 1, 2024", Grades 7 to 12 devices "stored out of view and powered off or set to silent mode
//    during instructional time"; "School boards are required to restrict access to all social media platforms on school
//    networks and school devices."
//  - CEMC: BCC "Monday, November 9, 2026 to Friday, November 20, 2026", "Time allowed for completion is 45 minutes.",
//    "12 multiple-choice questions out of a total of 60 (Grade 5/6)"; Gauss "Monday, May 10, 2027 to Friday, May 21,
//    2027", "25 multiple-choice questions.", "Motivated students in lower grades are welcome to write the contest.";
//    resources "There is no registration or fee required to access these materials."; Problem of the Week "New problems
//    are sent every Thursday, and their solutions are sent one week later." (for Grades 3 to 12); CCC "Wednesday,
//    February 17, 2027"; "all students must participate through their school".
//  - facts-geo.md: Barrie CMA; NE Ontario overlay 249/683/705; Ontario UTC-5 from 1 November 2026, UTC-4 from 14 March 2027
//    (IANA tzdb 2026e).
//  - City of Barrie open data, Park Amenity (ArcGIS item e7f2f5048fe7445b93beb0a44f4ff626, saved item.json): snippet
//    "Location of various park amenities (e.g. bench, picnic table, garbage, goal posts, etc.) within the park boundary";
//    hub record (hub.json) recordCount 1670. Portal CSV downloaded with curl on 22 October 2026 (park-amenity.csv, 180,243
//    bytes, 1,538 data rows). The live map service gispublic.barrie.ca timed out, so the full layer could not be queried.
//  - Open Government Licence - Barrie (PDF saved): "The Information Provider grants you a worldwide, royalty-free,
//    perpetual, non-exclusive licence to use the Information, including for commercial purposes"; attribution "Contains
//    information licensed under the Open Government Licence - Barrie." (en dash in source).
// Our own calculations (barrie_gaps.py and checks, python -I, outputs saved): 1,538 rows against the hub's 1,670; blank after
// strip(): DATEINST 1,520, SUBTYPE 1,188, SEAT 793, RECSOURCE 340, BASE 351, PARKID 103 (75 empty, 28 a single space);
// DATEINST 30 December 1899 on 8 rows; 10 other dates (2013-05-10 x3, 2014-08-08 x3, 2017-09-14 x4); TYPE BENCH 654, PLANTER
// 195, FLOWER BASKET 183, LARGE CAPACITY GARBAGE 116, GOAL POST 80, BLEACHER 73; benches with WOOD seats 573 of 654; the
// TYPE label RECYCLING RECEPTICAL on 26 rows (spelling as in the file); every STATUS ACTIVE; 159 park ids.
// The explanation of 30 December 1899 as a placeholder is ours (it is day zero in several spreadsheet date systems), not
// a sourced fact.
// Lesson family: missing values, whitespace that looks empty, placeholder dates, and checking a download's row count.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'blank = {}',
  'placeholder_dates = 0',
  'types = {}',
  '',
  'with open("park-amenity.csv", encoding="utf-8-sig", newline="") as f:',
  '    rows = list(csv.DictReader(f))',
  '',
  'for row in rows:',
  '    for column, value in row.items():',
  '        if value.strip() == "":',
  '            blank[column] = blank.get(column, 0) + 1',
  '    if row["DATEINST"].startswith("1899/12/30"):',
  '        placeholder_dates += 1',
  '    types[row["TYPE"]] = types.get(row["TYPE"], 0) + 1',
  '',
  'print(len(rows), "rows in our download")',
  'for column in ("DATEINST", "SUBTYPE", "SEAT", "BASE", "PARKID", "RECSOURCE"):',
  '    print(column, "blank in", blank.get(column, 0), "rows")',
  'print("installed on 30 December 1899:", placeholder_dates)',
  'print(sorted(types.items(), key=lambda t: -t[1])[:6])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'BARRIE', label: 'Barrie', blurb: 'Live online coding and Python for Barrie: a month-by-month plan for the first six months, and a City of Barrie park amenity project on missing values.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-barrie',
  code: 'pyth',
  accent: '#6B6623',
  accentRationale: 'Barrie: a muted olive, #6B6623, allocated for this row; contrast 5.58 on the paper #FBF8F2 (5.25 and 4.80 on the darker tints), above 4.5 everywhere and far from the retired purple and cyan band',
  pageType: 'city',
  place: {
    name: 'Barrie',
    eyebrow: 'Barrie, Ontario',
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
  routeLabel: 'Barrie',
  title: 'Online Coding and Python Classes in Barrie | Live, Ages 6+',
  description: 'Live online coding and Python classes for Barrie students aged 6 to adult: a month-by-month first six months and a Barrie park data project on missing values.',
  ogDescription: 'A month-by-month plan for a Barrie teen\'s first six months of live online Python, and what the City park amenity file teaches about blanks and placeholder dates.',
  twitterDescription: 'Barrie coding and Python classes, live online with a real teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Barrie Students',
    description: 'Live online coding and Python for Barrie students from Grade 1 to adult, in groups of fifteen to twenty or one to one, with a month-by-month plan, data projects and Waterloo contest preparation.'
  },

  h1: 'Online coding and Python classes in Barrie',
  capsuleQ: 'What do live online Python classes look like for a Barrie student?',
  capsule: 'For Barrie students from age 6 to adult, Modern Age Coders runs coding and Python classes live online: a teacher reads each student\'s code on a shared screen while it is written, privately or in a class of fifteen to twenty. Python and AI for Kids and Python for Teens are the common starts, and the first class is free.',
  lead: 'Parents in Barrie tend to ask two questions before they book anything: what will my child actually be doing in month three, and how will I know it is working? This page answers both with a plan rather than a promise. It sets out a month-by-month outline of a teen\'s first six months of Python, written by us, with the school or contest moment each month connects to. It explains how live teaching keeps that plan honest, since a teacher who reads the student\'s code every class can see when a month needs repeating. And it ends with a project on a City of Barrie file, chosen because most of what it teaches is about the values that are not there.',
  wa: 'Hello Modern Age Coders, I would like a free live coding or Python class for a student in Barrie.',

  picks: {
    eyebrow: 'Python picks for Barrie',
    h2: 'Four courses Barrie students start with',
    intro: 'All four are taught live. After the free first class we name the course and the month of the plan to begin at.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Children type Python from the first lesson, through games and drawings, at a slower monthly pace than the teen plan.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'The course the six-month plan on this page is drawn from: first program to files, functions and a data project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from nothing for Barrie adults, often faster than the teen plan, aimed at work files and automation.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Practice and projects next to a school ICS3U or ICS4U course. We do not grant Ontario credits; the school does.' }
    ]
  },

  sections: [
    {
      id: 'months', tint: '', eyebrow: 'Six months of Python',
      h2: 'A Barrie teen\'s first six months of live Python, month by month',
      intro: 'An outline written by us for a beginner of about 14 in Python for Teens. Real students move faster or slower; the teacher adjusts the plan each month from the code the student actually writes.',
      body: [
        { kind: 'table', caption: 'Our sample six-month Python plan for a teen beginner, with a school or contest moment each month connects to (plan ours; school and contest facts from the Ontario ministry, EQAO and CEMC)', head: ['Month', 'What the student writes', 'Where it connects in Barrie'], rows: [
          ['1', 'print(), variables, input(): a program that greets the user and does arithmetic', 'The step-by-step code Ontario math asks for from Grade 1, now typed'],
          ['2', 'if, elif and else: a quiz that marks its own answers', 'The Beaver Computing Challenge, 9 to 20 November 2026, needs no coding at all, so it is a low-pressure first contest'],
          ['3', 'for and while loops: patterns, tables and a number-guessing game', 'Ontario math has asked for code with repeating events since Grade 3; this month takes it much further'],
          ['4', 'Lists and dictionaries: counting and grouping', 'The Grade 8 expectation to analyse data and communicate decisions'],
          ['5', 'Functions with parameters, and reading files', 'MTH1W asks students to use coding for variables, parameters, equations and inequalities'],
          ['6', 'A data project on a real file, such as the City of Barrie park amenities', 'A first step towards ICS3U, or CCC Junior on 17 February 2027']
        ] },
        { kind: 'p', text: 'The plan has one rule that does not bend: a month is not finished until the student can write that month\'s program without looking at an example. If a Barrie student can copy a while loop but cannot write one from a blank file, month 3 continues. A live teacher sees that within minutes, because they are reading the student\'s code, not a quiz score.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Group of fifteen to twenty', p: 'The group moves through the months together, with extra tasks for students who finish early and short reviews for anyone who needs another look.' },
          { h3: 'One to one', p: 'One teacher, one student, and a calendar that bends completely to them: some adults finish the six months in three, some children take a year.' },
          { h3: 'Phones away at school', p: 'Ontario\'s PPM 128 has kept Grade 7 to 12 phones out of view during instructional time since 1 September 2024. Our classes run after school on a laptop or desktop at home.' }
        ] }
      ]
    },
    {
      id: 'amenities', tint: 'deep', eyebrow: 'Barrie data project',
      h2: 'What is missing from Barrie\'s park amenity file, and why that is the lesson',
      intro: 'The City of Barrie publishes Park Amenity, a file of benches, planters, bins, goal posts and other items in its parks. Month 6 of the plan uses it. Every number below is our own count of the CSV downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Our count of blank values in the City of Barrie Park Amenity CSV (1,538 rows downloaded 22 October 2026). A value counts as blank when it is empty or holds only spaces', head: ['Column', 'Blank in rows', 'What a student should say about it'], rows: [
          ['DATEINST', '1,520', 'Install dates are almost never recorded, so no question about age can be answered'],
          ['SUBTYPE', '1,188', 'Most items have no subtype; the column describes planters and baskets'],
          ['SEAT', '793', 'Expected: bins, planters and posts have no seat'],
          ['BASE', '351', 'Mixed: some items have no base, some simply were not recorded'],
          ['RECSOURCE', '340', 'The record source is unknown for these rows'],
          ['PARKID', '103', 'These rows are not tied to a park: 75 are empty and 28 hold a single space']
        ] },
        { kind: 'p', text: 'Here is the program behind the table. It uses only the csv module and a dictionary, and its key move is value.strip() == "", which treats a single space as blank. Without the strip, PARKID would show 75 blanks instead of 103:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Check the download first', p: 'The City\'s portal record lists 1,670 records for Park Amenity. Our CSV has 1,538. The live map service did not respond when we tried it, so a student\'s first written finding is that the export is not the whole layer.' },
          { h3: 'A suspicious date', p: 'Eight rows give the install date as 30 December 1899. We treat it as a placeholder, not a real date, because it is day zero in several spreadsheet date systems; that is our reading, and students are taught to flag it rather than average it.' },
          { h3: 'What is there', p: 'TYPE is always filled: 654 benches, 195 planters, 183 flower baskets, 116 large capacity garbage bins, 80 goal posts and 73 bleachers lead the list. Of the 654 benches, 573 have wooden seats.' }
        ] },
        { kind: 'callout', h3: 'Blank does not mean none', p: 'A blank DATEINST means the date was not recorded, not that the bench is new or old. A blank PARKID means the row is not linked to a park, not that the planter is nowhere. Students who write those two sentences correctly have understood missing data, which is most of real data work.' },
        { kind: 'p', text: 'One more detail students enjoy: the file spells one of its TYPE labels RECYCLING RECEPTICAL, on 26 rows. A program grouping by type must use the label exactly as written, and a report should quote it as the file has it. The data is used under the Open Government Licence - Barrie. Contains information licensed under the Open Government Licence - Barrie (<a class="cg-inline-link" href="https://www.barrie.ca/Online%20Services/PublishingImages/OpenData_Images/COB_DataLicense.pdf">licence</a>, <a class="cg-inline-link" href="https://opendata.barrie.ca/">City of Barrie open data</a>). The City does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'free', tint: 'tint', eyebrow: 'Contests and free practice',
      h2: 'Free CEMC practice and contests for Barrie students, 2026 to 2027',
      intro: 'CEMC at the University of Waterloo publishes free resources and runs the contests most Ontario schools use. These facts were read from its pages on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Two CEMC contests suited to younger Barrie students, as CEMC lists them for 2026 to 2027', head: ['', 'Beaver Computing Challenge', 'Gauss'], rows: [
          ['Dates', '9 to 20 November 2026', '10 to 21 May 2027'],
          ['Who', 'Grade 10 or below, in levels 5/6, 7/8 and 9/10', 'Grades 7 and 8; motivated younger students welcome'],
          ['Format', '45 minutes; 12 multiple-choice questions out of 60 at the Grade 5/6 level', '25 multiple-choice questions'],
          ['Coding needed?', 'No; CEMC says familiarity with the math curriculum is enough', 'No; it is a math contest']
        ] },
        { kind: 'p', text: 'CEMC says there is no registration or fee for its resources, and its Problem of the Week sends a new problem every Thursday for Grades 3 to 12, with the solution a week later. That rhythm fits neatly between weekly classes. Contests themselves are written through a school; a Barrie student whose school does not take part can ask another local school. For students ready after month 6, the next CCC is on Wednesday 17 February 2027, according to CEMC. Neither CEMC nor the University of Waterloo is linked to us in any way; see our <a class="cg-inline-link" href="/cemc-free-resources-guide">guide to free CEMC resources</a>.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 9 assessment', p: 'EQAO describes its Grade 9 math assessment as online, in two sessions, 54 questions in total, using a multi-stage computer adaptive model. Months 4 and 5 build the algebra and coding habits MTH1W expects.' },
          { h3: 'Eastern time', p: 'Barrie keeps daylight time (UTC-4) until 1 November 2026, standard time (UTC-5) through the winter, and returns to UTC-4 on 14 March 2027, per IANA tzdb 2026e. Class times are always confirmed in Eastern time.' },
          { h3: 'Barrie numbers', p: 'Phone numbers with the 249, 683 and 705 area codes work in the booking form. Type ten digits; the +1 is set.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Where Barrie students usually join the plan',
    intro: 'Ages are guides. In the free class we see which month a student can already do.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Before month 1', p: 'Blocks and short sequences, with the child explaining each step, until typing comes easily.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Months 1 to 3, slowly', p: 'The same early months at a child\'s pace, with games, drawings and a guessing game at the end.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'The six-month plan', p: 'The full plan above, then deeper projects, ICS3U support or CCC Junior.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Adults', h3: 'Faster months', p: 'The plan compressed for adults, ending in data and automation for work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'Why follow a six-month plan when AI can write the code today?',
    intro: 'Because the Barrie file shows what code cannot decide on its own.',
    p1: 'An AI assistant will happily average the install dates in the Barrie file and report an age for the city\'s benches. It will not notice that 1,520 of 1,538 dates are blank, that eight are 30 December 1899, or that the download is shorter than the portal record. A student who has counted the blanks by hand notices all of it.',
    p2: 'So we teach the reasoning first: look at the data, write the code, distrust the first answer. Later, students may use AI tools, subject to the age limits we apply, as a helper whose output they check, never as the source of an answer they hand in.',
    closer: 'A Barrie student who can explain why a blank PARKID is not a missing planter has learned the habit the plan is for.',
    blogAnchor: 'why the thinking behind code still counts'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Barrie, Innisfil and Springwater',
    intro: 'Lessons are online, so a student near Kempenfelt Bay and one in the south end share a teacher, and winter roads never cancel a class.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Around Barrie', p: 'Students in Innisfil, Springwater and Oro-Medonte join the same classes, all on Eastern time.' },
      { h3: 'Work you can open', p: 'Each month\'s programs are saved in the student\'s own folder, so a parent can open the files and see what was written without help.' },
      { h3: 'Ontario terms', p: 'Teachers use Ontario grades and course codes, MTH1W to ICS4U. School assignments stay the student\'s own work.' },
      { h3: 'Two formats', p: 'A class of fifteen to twenty moving through the months together, or a private plan for one student with one teacher.' },
      { h3: 'Free first lesson', p: 'A live lesson with real code, ending in a starting course and month. No card is asked for.' }
    ],
    spec: { title: 'No Barrie office', p: 'Modern Age Coders has no office or classroom in Barrie and claims none. Every class is live online, taught from India.' }
  },

  fees: {
    h2: 'Fees for Barrie families',
    intro: 'Your own currency, with the code printed next to each fee.',
    first: 'A first lesson, live and free, ending in a suggested course and starting month.',
    group: 'The monthly fee for a group of fifteen to twenty students at the same month of the plan.',
    private: 'The monthly fee for one student with one teacher, on times you choose.',
    closer: 'Barrie families pay the Canada-wide monthly fee. Nothing is charged until the free lesson is done and the course and time are agreed. Missed classes and holidays are explained on the pricing page.'
  },

  reviewsH2: 'What families and students wrote on Google',

  book: {
    h2: 'Book a free class for a Barrie student',
    intro: 'Share the student\'s grade or age with us. A Grade 1 child might build a block sequence, a Grade 6 student a month-2 quiz, and a teen or adult a first look at the park amenity file.',
    success: 'Thank you. The team will be in touch soon about a class for Barrie.'
  },

  faq: {
    h2: 'Barrie coding and Python questions',
    intro: 'What Barrie families ask before the first class.',
    items: [
      { q: 'What will my teen be doing after three months of Python?', a: 'In our plan, writing loops without an example: patterns, tables and a guessing game. The teacher checks that from the student\'s own code before moving on.' },
      { q: 'Are classes held anywhere in Barrie?', a: 'No. There is no Barrie classroom. Lessons are live online, so students in Innisfil, Springwater or Oro-Medonte join from home.' },
      { q: 'How big is a group?', a: 'Between fifteen and twenty students, all at the same point in the plan. Private lessons have one student and one teacher.' },
      { q: 'Is 7 too young for Python?', a: 'Usually, yes. Children tend to be ready for typed Python nearer 9 or 10. Six- to eight-year-olds learn the same ideas with blocks first.' },
      { q: 'How will I know the classes are working?', a: 'Look at the files. In our plan each month ends with a program the student writes alone, and it stays in their own folder on your computer for you to open and run.' },
      { q: 'Can my child try a CEMC contest?', a: 'Yes, through a school. The Beaver Computing Challenge runs 9 to 20 November 2026 and needs no coding; Gauss, for Grades 7 and 8, runs 10 to 21 May 2027.' },
      { q: 'Does the ICS3U companion course count as a credit?', a: 'No, and we do not grant Ontario credits. The school course earns the credit; ours is extra practice that sits next to it.' },
      { q: 'When do classes for Barrie students run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in Eastern time.' },
      { q: 'Can adults in Barrie follow the plan?', a: 'Yes, and usually faster. Adults often finish the six months sooner and move on to data and automation for work.' },
      { q: 'Do 705 numbers work in the form?', a: 'Yes, along with 249 and 683. Enter the ten digits; the +1 is already there.' },
      { q: 'What are the fees?', a: 'Three figures appear in the fees section, in your own currency: nothing for the first lesson, then a monthly fee for a group or a monthly fee for private lessons. Billing starts only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Barrie and Ontario students',
    html: 'See <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a> for the province and <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a> for the country. Younger contest students can read about <a class="cg-inline-link" href="/beaver-computing-challenge-guide">the Beaver Computing Challenge</a>, and families weighing the Grade 9 year can start with <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Barrie and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/cemc-free-resources-guide', label: 'Free CEMC resources' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
  ],

  personalityCss: `
.cg-root.cg-pyth .cg-hero h1 { font-weight: 690; letter-spacing: -0.014em; line-height: 1.08; }
.cg-root.cg-pyth .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-pyth .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-pyth .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-pyth .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-pyth .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-pyth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pyth #amenities code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-pyth .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API, EQAO and ontario.ca, saved raw: Elementary Mathematics (2020) Grade 1 and Grade 8 C3.1; MTH1W (2021) C2.1; ICS4U after ICS3U; EQAO Grade 9 format (online, two sessions, 54 questions, multi-stage adaptive); PPM 128 from 1 September 2024. CEMC: BCC and Gauss dates, eligibility and formats; free resources with no registration or fee; Problem of the Week weekly rhythm; CCC 2027 date; through-a-school rule. Barrie CMA, NE Ontario area codes and Eastern time offsets from facts-geo.md (IANA tzdb 2026e).',
    localProject: 'City of Barrie open data, Park Amenity (Open Government Licence - Barrie), portal CSV downloaded with curl on 22 October 2026 (1,538 rows against a hub recordCount of 1,670; the live map service timed out) and checked with our script barrie_gaps.py (python -I): blanks after strip() DATEINST 1,520, SUBTYPE 1,188, SEAT 793, BASE 351, RECSOURCE 340, PARKID 103 (75 empty, 28 a single space); DATEINST 30 December 1899 on 8 rows; TYPE BENCH 654 to BLEACHER 73; RECYCLING RECEPTICAL on 26 rows. Labelled as ours; the placeholder reading of 1899 is ours. Lesson family: missing values, whitespace, placeholder dates and row-count checks.',
    requiredMentions: [
      'PARKID would show 75 blanks instead of 103',
      'lists 1,670 records for Park Amenity',
      'install date as 30 December 1899',
      'RECYCLING RECEPTICAL, on 26 rows',
      'Of the 654 benches, 573 have wooden seats',
      'value.strip() == ""',
      'first six months of live Python, month by month',
      'Innisfil, Springwater and Oro-Medonte',
      'a student near Kempenfelt Bay'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: elementary math C3.1 (Grades 1 and 8), MTH1W C2.1, ICS4U prerequisite.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_8___strands?depth=4' },
      { claim: 'EQAO: Grade 9 Assessment of Mathematics format.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'Ontario PPM 128: personal mobile devices in schools.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-128' },
      { claim: 'CEMC: Beaver Computing Challenge 2026 dates, levels and format.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC: Gauss 2027 dates, eligibility and format.', url: 'https://cemc.uwaterloo.ca/contests/gauss' },
      { claim: 'CEMC: free resources and Problem of the Week.', url: 'https://cemc.uwaterloo.ca/resources/potw' },
      { claim: 'CEMC: how contests work (through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Barrie open data: Park Amenity item (snippet).', url: 'https://www.arcgis.com/home/item.html?id=e7f2f5048fe7445b93beb0a44f4ff626' },
      { claim: 'City of Barrie open data: Park Amenity dataset record and CSV download.', url: 'https://opendata.barrie.ca/datasets/e7f2f5048fe7445b93beb0a44f4ff626_23' },
      { claim: 'City of Barrie: Open Government Licence - Barrie (PDF).', url: 'https://www.barrie.ca/Online%20Services/PublishingImages/OpenData_Images/COB_DataLicense.pdf' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Barrie population: StatCan was not reachable live.',
      'An average age of park amenities: refused; 1,520 of 1,538 install dates are blank.',
      'That 30 December 1899 is a documented default in the City\'s system: not sourced; offered as our reading only.',
      'That our 1,538 rows are the whole layer: refused; the portal lists 1,670.',
      'A fixed number of classes per month or a guaranteed pace: the six-month plan is an example and is labelled ours.',
      'That our classes earn or count toward an Ontario credit: refused.',
      'CEMC contest fees: left out (currency-neutral page).',
      'Names of Barrie schools or private people: not used.',
      'Any affiliation with the City of Barrie, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
