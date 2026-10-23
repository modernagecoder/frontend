'use strict';
// Quebec City (cg- city page, Canada cluster Plan 2 Wave 2, row 106). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Shape from coding-and-ai-classes-in-toronto.js, prose fresh.
// Spine: in Quebec's capital, Secondary IV brings a choice of math option, and each option's own description in the Quebec
// Education Program names a habit that programming trains (discrete mathematics, finding errors and anomalies, formal proof).
// A new area code, 273, arrives on 27 February 2027 and the CRTC itself says systems and databases must be ready for it.
// The city's list of potentially remarkable trees teaches a measurement lesson: numbers taken in different ways do not pool.
// Sources, read raw on 22 October 2026 (Quebec and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md and
// raw files in ca/src/quebec/ and ca/src/coding-classes-in-quebec/; geography from ca/facts-geo.md and ca/src/geo/; tree file,
// package metadata and licence page in ca/src-pilots/coding-and-ai-classes-in-quebec-city/):
//  - Constitution Act, 1867, s.68: "the Seats of Government of the Provinces shall be as follows, namely, ... of Quebec, the City
//    of Quebec" (src/geo/lang/const_page-2.html).
//  - QEP Mathematics, Secondary Cycle Two (English PDF): "three different options designed to meet students' needs"; "All of these
//    options allow students to enroll in a preuniversity program."; CST "involves a greater use of statistics and discrete
//    mathematics"; TS "the development of students' ability to identify errors and anomalies in processes or solutions"; Science
//    "Students learn to develop formal proofs in situations where there is always a need to confirm a truth" and "greater emphasis
//    on students' capacity for abstract thinking"; Appendix F "Bridges Between Options".
//  - quebec.ca CEGEP diplomas page: "At the end of your program of study, you will obtain your DCS." (Diploma of College Studies).
//  - Telecom Decision CRTC 2025-269 (Internet Archive copy, 28 May 2026): "area code 273, to be implemented as the new area code
//    for area code complex 367/418/581 in Quebec, will take effect on 27 February 2027"; the timing "provides telephone service
//    providers and customers the necessary time to implement the new area code into their systems, databases and
//    telecommunications equipment". facts-geo.md: eastern Quebec (Quebec City, Levis, Saguenay) 367/418/581.
//  - CEMC: CCC "Wednesday, February 17, 2027", "This contest is available in English and French."; BCC English only, "Monday,
//    November 9, 2026 to Friday, November 20, 2026"; Euclid "Students in their final year of secondary school or CEGEP students"
//    (accent in source), "Tuesday, April 6, 2027"; "all students must participate through their school"; past contests free.
//  - Charter of the French language s.1 (facts-geo.md, Internet Archive copy of legisquebec).
//  - IANA tzdb 2026e: Quebec City on America/Toronto, UTC-5 from 1 November 2026, UTC-4 from 14 March 2027.
//  - Ville de Quebec via Donnees Quebec, dataset "Arbres potentiellement remarquables" (vque_82), vdq-arbrepotentielremarquable.csv,
//    92,402 bytes, sha256 81ee0777...35123ac43, resource last modified 18 October 2026, downloaded 22 October 2026; licence
//    "Attribution (CC-BY 4.0)" (package_show read live 22 October 2026); Donnees Quebec licence page: CC BY lets others
//    distribute and adapt "même à des fins commerciales" with credit.
// Our own calculations (quebec_trees.py, python -I, output quebec_trees.out.txt; extra checks on the same file): 684 trees, 684
// distinct ID; POSITION_MESURE DHP 592 (median DIAMETRE 79, 3 zeros), M 65 (median 86), DHS 27 (median 85); maximum DIAMETRE
// 185; 75 Latin names, most common Quercus rubra (chene rouge) 145; TYPE_PROP beginning "Priv" 609 of 684; TYPE_LIEU street
// segment 574, Lieu public 110; MULTI_TRONC O 62, N 621, blank 1; DATE_PLANTE filled on 8 rows; Chemin Saint-Louis 168 rows.
// No unit or definition for DIAMETRE or the POSITION_MESURE codes is saved, so neither is stated. Cemetery locations not named.
// Lesson family: grouping before summarising (measurements taken in different ways are not pooled), and medians over means.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  'import statistics',
  '',
  'by_position = {}',
  'species = {}',
  'private = 0',
  '',
  'with open("vdq-arbrepotentielremarquable.csv", encoding="utf-8-sig") as trees:',
  '    for row in csv.DictReader(trees):',
  '        by_position.setdefault(row["POSITION_MESURE"], []).append(int(row["DIAMETRE"]))',
  '        species[row["NOM_LATIN"]] = species.get(row["NOM_LATIN"], 0) + 1',
  '        if row["TYPE_PROP"].startswith("Priv"):',
  '            private += 1',
  '',
  'for position, values in by_position.items():',
  '    print(position, len(values), "median", statistics.median(values), "zeros", values.count(0))',
  'top = max(species, key=species.get)',
  'print(len(species), "species; most common", top, species[top])',
  'print("TYPE_PROP starting Priv:", private)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'QUEBEC CITY', label: 'Quebec City', blurb: 'Coding and AI for Quebec City learners, tied to the Secondary IV math options, the 273 area code and a city tree data project.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-quebec-city',
  code: 'aqc',
  accent: '#2C615B',
  accentRationale: 'Quebec City: a muted St. Lawrence slate-teal, #2C615B; nearest site accent 7.9 RGB units away and every Canada accent at least 12.0 away (allocated by the cluster plan); contrast 6.67 on the paper #FBF8F2 and above 5.7 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Quebec City',
    eyebrow: 'Quebec City, Quebec',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Quebec' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Secondary 4 math', href: '/quebec-secondary-4-math-cst-ts-science' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Quebec City',
  title: 'Coding and AI Classes in Quebec City | Live Online, in English',
  description: 'Live online coding, Python and AI classes in English for Quebec City learners: the Secondary IV math options, CEMC contest dates and a city tree data project.',
  ogDescription: 'Each Quebec Secondary IV math option names a habit coding trains. Here is how that works, the 2026 to 2027 CEMC dates, and live online classes in English.',
  twitterDescription: 'Quebec City coding, Python and AI classes, live online in English, for children, teens, CEGEP students and adults.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Quebec City Learners',
    description: 'Live online coding in English for Quebec City learners from age 6 to adult: Python for children and teens, math through code, and AI and machine learning, placed by Secondary level and skill.'
  },

  h1: 'Coding and AI classes in Quebec City',
  capsuleQ: 'Can a Quebec City student learn coding and AI live online, taught in English?',
  capsule: 'Yes. Modern Age Coders offers live online coding, Python and AI to Quebec City learners from age 6 to adult, taught in English, either privately or in a class of fifteen to twenty. Elementary pupils take Python and AI for Kids, and Secondary students Python for Teens or Maths Through Coding. The first lesson is free.',
  lead: 'Quebec City is the provincial capital, named in the Constitution Act, 1867 as the seat of government of Quebec, and its secondary students face a decision most of Canada never meets: in Secondary Cycle Two, they follow one of three math options. Quebec\'s own description of each option reads, almost line for line, like a description of a programming habit, from discrete mathematics to finding errors in a process to writing formal proofs. This page sets out those options in Quebec\'s words, the CEMC contests open to Quebec City students in 2026 to 2027, a new area code that arrives in February 2027 and what it means for software, and a project we built on the Ville de Québec list of potentially remarkable trees, where the numbers only make sense once you group them by how they were measured.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Quebec City.',

  picks: {
    eyebrow: 'Course picks for Quebec City',
    h2: 'Four ways into coding from Quebec City',
    intro: 'Chosen for each stage of a Quebec education, from elementary school through Secondary V and on, then confirmed in the free first lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first typed language for elementary students, with games and drawings that make loops and choices concrete.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Math learned by programming it: patterns, functions and proofs-by-checking that suit students heading toward the TS or Science option.' },
      { course: 'python-complete-masterclass-teens', band: 'Secondary I to V', note: 'Python from first program to files and data, including the grouping and medians used in the tree project on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Secondary IV and V', note: 'Machine learning built in Python on checked data, so a student learns to doubt a model before trusting it.' }
    ]
  },

  sections: [
    {
      id: 'options', tint: '', eyebrow: 'Secondary Cycle Two',
      h2: 'Three math options, three programming habits',
      intro: 'Quebec\'s Education Program for Secondary Cycle Two mathematics describes each option in its own words. We read the English version on 22 October 2026; the quotations are Quebec\'s, and the link to coding in the right-hand column is ours.',
      body: [
        { kind: 'table', caption: 'The three Secondary Cycle Two math options as Quebec describes them, with the coding habit each one matches (descriptions quoted from the Quebec Education Program; the right-hand column is our reading)', head: ['Option', 'In Quebec\'s description', 'The coding habit it matches'], rows: [
          ['Cultural, Social and Technical (CST)', 'It involves &ldquo;a greater use of statistics and discrete mathematics&rdquo;', 'Counting, sorting and summarising data, the daily work of a programmer with a spreadsheet or a file'],
          ['Technical and Scientific (TS)', 'It builds the ability to &ldquo;identify errors and anomalies in processes or solutions&rdquo;', 'Debugging: finding the step where a process went wrong and fixing it'],
          ['Science (S)', 'Students &ldquo;develop formal proofs&rdquo; where there is a need to confirm a truth', 'Testing and reasoning about code until you can say why it is correct, not only that it ran']
        ] },
        { kind: 'p', text: 'Quebec adds that all of these options allow students to enroll in a pre-university program, and the program even has an appendix on bridges between options. So the choice is not a locked door. It is a choice of emphasis, and a term of programming is a practical way for a Secondary III student to discover which emphasis suits them before the timetable fixes it. Our <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">guide to the Secondary 4 options</a> goes into the choice itself, and <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary 5 math help</a> covers the year after.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'After Secondary V', p: 'A student who goes on to a CEGEP receives, at the end of a college program, a Diploma of College Studies (DCS), in the words of quebec.ca. A CEGEP learner joins our adult-paced groups, not a teen class.' },
          { h3: 'For CEGEP computing', p: 'Students thinking about a computing program at college can read our page on <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science preparation</a>, which covers the step from secondary math to a first college programming course.' },
          { h3: 'A word on language', p: 'Under Quebec\'s Charter of the French language, French is the official language of the province. Our classes are taught entirely in English, which we state here so families can decide with the facts in front of them.' }
        ] },
        { kind: 'callout', h3: 'Alongside school, not part of it', p: 'We teach alongside a student\'s school or CEGEP courses and we do not grant Quebec credits, diplomas or option placements. We are not connected with the Ministère de l\'Éducation, any school service centre, any CEGEP or the Ville de Québec.' }
      ]
    },
    {
      id: 'trees', tint: 'deep', eyebrow: 'Quebec City data project',
      h2: 'Which trees are the biggest? Group the measurements first',
      intro: 'The Ville de Québec publishes, through the Données Québec portal, an inventory of trees on its territory that it considers potentially remarkable. It is short enough for a beginner and tricky enough to teach a real lesson. All figures below are ours, from the file downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'DIAMETRE by measurement position, summarised by us from the Ville de Québec list of potentially remarkable trees (684 trees; downloaded 22 October 2026). The file gives no unit, so none is shown', head: ['POSITION_MESURE code', 'Trees', 'Median DIAMETRE', 'Rows with DIAMETRE 0'], rows: [
          ['DHP', '592', '79', '3'],
          ['M', '65', '86', '0'],
          ['DHS', '27', '85', '0']
        ] },
        { kind: 'p', text: 'A beginner sorts the whole file by DIAMETRE and announces the biggest tree. The file will not allow that so quickly. Each diameter comes with a code saying where on the tree it was measured, and three different codes are in use, so a number from one group is not directly comparable with a number from another. The program below groups the diameters by that code before taking any median, counts the species and checks who owns the land. It uses Python\'s built-in csv and statistics modules and expects the CSV next to the script:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Group before you summarise', p: 'Putting every DIAMETRE into one list would mix three measuring methods. A dictionary of lists, keyed by POSITION_MESURE, keeps them apart, and the medians, 79, 86 and 85, are then reported per group, never as one figure.' },
          { h3: '2. Prefer the median', p: 'Three DHP rows record a diameter of 0, which is almost certainly a missing value rather than a tree. A median shrugs off a few such rows; an average would be dragged down. Students then decide, and write down, whether to drop them.' },
          { h3: '3. Read the other columns', p: 'Seventy-five Latin names appear, and Quercus rubra, the red oak, is the most common with 145 trees. TYPE_PROP shows 609 of the 684 trees on land recorded as private, so most of these trees are seen from the street rather than visited.' }
        ] },
        { kind: 'table', mt: true, caption: 'Further checks on the same Ville de Québec file (our counts)', head: ['Check', 'Result'], rows: [
          ['Distinct tree IDs', '684, one per row'],
          ['Largest DIAMETRE value in the file', '185'],
          ['Trees recorded with more than one trunk (MULTI_TRONC O)', '62'],
          ['Rows with a planting date filled in', '8'],
          ['Trees listed on Chemin Saint-Louis', '168']
        ] },
        { kind: 'callout', h3: 'Limits we teach with the data', p: 'The file does not say what unit DIAMETRE uses or exactly what each position code means, and we do not guess; a student who needs to know asks the city. A potentially remarkable tree is the city\'s category, not a ranking, and a list with only 8 planting dates cannot tell us how old the trees are.' },
        { kind: 'p', text: 'The Ville de Québec publishes the dataset on Données Québec with a CC BY 4.0 licence, which allows reuse, including commercial reuse, with credit to the source. Source: Ville de Québec, Arbres potentiellement remarquables (<a class="cg-inline-link" href="https://www.donneesquebec.ca/recherche/dataset/vque_82">dataset page</a>, <a class="cg-inline-link" href="https://www.donneesquebec.ca/licence/">licence</a>). The medians and counts are ours, and the city does not endorse this page or our teaching.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from Quebec City',
      h2: 'CEMC contests for Quebec City students and CEGEP learners, 2026 to 2027',
      intro: 'CEMC at the University of Waterloo publishes its contests in grades, which Quebec schools translate to their own levels; ask the school which paper its students write. Dates are those CEMC lists for North and South America, as of 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Selected CEMC contests a Quebec City learner can enter in 2026 to 2027, with CEMC\'s own wording on language and eligibility', head: ['Contest', 'Date', 'Language or eligibility, per CEMC'], rows: [
          ['Canadian Computing Competition', 'Wednesday 17 February 2027', 'Available in English and French; Junior or Senior chosen by skill'],
          ['Beaver Computing Challenge', '9 to 20 November 2026', 'English only; three levels up to Grade 10'],
          ['Euclid', 'Tuesday 6 April 2027', 'Final-year secondary students or C&Eacute;GEP students']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A French paper exists', p: 'Because CEMC offers the CCC in French as well as English, a Quebec City student can write in the language of their school even though our coaching is in English. The code itself, in Python, C++, Java or C, reads the same either way.' },
          { h3: 'Entry is through the school', p: 'CEMC is firm that all students must participate through their school. A student at a school that does not take part can ask a nearby school, or at college their CEGEP, to let them write.' },
          { h3: 'Free past papers', p: 'CEMC posts a decade of past contests free. We send students to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">those papers</a> for practice and teach with problems we have written, never with CEMC\'s.' }
        ] },
        { kind: 'p', text: 'Grouping the tree measurements before summarising them is the kind of step a CCC Junior problem quietly tests: read structured input, put each record in the right bucket, and answer the question asked about each bucket. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> sets out how we build toward it, and the math contests have <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">a page of their own</a>. We have no affiliation with CEMC or with the University of Waterloo.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Times and numbers',
      h2: 'Quebec City clocks, India clocks, and the area code arriving in 2027',
      intro: 'Quebec City runs on Eastern time, with one change in November and another in March; India, where our teachers are, never changes. The two example hours below are conversions, not a timetable.',
      body: [
        { kind: 'table', caption: 'Two Quebec City example hours shown in India time, 2026 to 2027 (Quebec uses the America/Toronto zone; offsets from IANA tzdb 2026e; conversions ours)', head: ['Period', 'Quebec City offset', 'Wednesday 3:30 to 4:30 pm here is, in India', 'Sunday 1 to 2 pm here is, in India'], rows: [
          ['Now, to 1 November 2026', 'UTC-4', 'Thursday 1 to 2 am', 'Sunday 10:30 to 11:30 pm'],
          ['Winter 2026 to 2027, to 14 March', 'UTC-5', 'Thursday 2 to 3 am', 'Sunday 11:30 pm to Monday 12:30 am'],
          ['Spring and summer 2027', 'UTC-4', 'Thursday 1 to 2 am', 'Sunday 10:30 to 11:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A fourth area code', p: 'Quebec City and the rest of eastern Quebec use 418, 581 and 367. In Telecom Decision 2025-269, the CRTC set area code 273 to join them, taking effect on 27 February 2027. Our form already accepts all four as ten digits after the +1.' },
          { h3: 'A software lesson in a phone number', p: 'The CRTC timed the change to give providers and customers the necessary time to update their systems, databases and equipment. Any program that checks phone numbers against a fixed list of area codes will reject a valid 273 number, which is a neat example of why validation rules should follow the standard, not a list.' },
          { h3: 'Times in Eastern first', p: 'We confirm every Quebec City class in Eastern time, and send it again in the week of each clock change, so nobody has to convert.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From elementary block coding to Secondary V and CEGEP',
    intro: 'Stages are approximate. A teacher sets the real starting point in the free lesson.',
    cols: [
      { band: 'Elementary, early years', h3: 'Blocks and order', p: 'Block programs and animations where a child learns that the order of steps matters.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Elementary, later years', h3: 'Typed code', p: 'Python with loops and conditions, and an honest first look at how AI tools guess.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Secondary I to III', h3: 'Math meets code', p: 'Python taken properly and math through programming, before the Cycle Two option is chosen.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Secondary IV, V and CEGEP', h3: 'Data and AI', p: 'Machine learning for older teens, and adult-paced Python for CEGEP students.', courses: ['ai-ml-masterclass-teens', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI for the biggest tree in Quebec City. What will it miss?',
    intro: 'The column that says how each tree was measured.',
    p1: 'An AI assistant handed the tree file will happily sort by DIAMETRE and name a winner, and it may even average all 684 values. Unless someone asks, it will not notice that three different measuring positions are mixed together, or that three trees with a diameter of 0 are almost certainly blanks. The code will look clean. The answer will not survive a question from anyone who knows trees.',
    p2: 'We teach students to look at the columns, plan the grouping and test the result before believing it. Older students meet AI tools under the age rules we keep, and use them to check work they understand rather than to produce work they do not.',
    closer: 'Quebec asks Technical and Scientific students to identify errors and anomalies in a process; that is exactly the habit that keeps an AI-written answer honest.',
    blogAnchor: 'why we think learning to code is still worth it alongside AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for Quebec City and Lévis',
    intro: 'Lessons are online, so a learner in Sainte-Foy, Charlesbourg or across the river in Lévis joins the same teacher.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty learners sharing one level, or a dedicated teacher for one learner who wants a quicker pace or a particular goal.' },
      { h3: 'Placed by Secondary level', p: 'Teachers place Quebec students by Secondary level and skill, and CEGEP learners with adults.' },
      { h3: 'English only', p: 'Everything we teach, hand out or write back is in English. Students who think in French can ask in simple English, and often find code easier than prose.' },
      { h3: 'Equipment', p: 'A computer with a keyboard, a microphone, sound and an internet connection that can carry live video. Phones and tablets make typing code slow.' },
      { h3: 'Free first lesson', p: 'A complete lesson without charge. It closes with our advice on level, course and time, and nobody asks for a card.' }
    ],
    spec: { title: 'No Quebec City office', p: 'Modern Age Coders has no office or classroom in Quebec City or anywhere in Quebec, and claims none. Lessons are taught live online from India.' }
  },

  fees: {
    h2: 'What lessons cost from Quebec City',
    intro: 'Three lines, each shown with its currency code.',
    first: 'A full live lesson free of charge, after which the teacher suggests a level, course and time.',
    group: 'The monthly fee for a place in a class of fifteen to twenty learners at the same level.',
    private: 'The monthly fee for lessons with a dedicated teacher, scheduled around the learner.',
    closer: 'A Quebec City learner pays the same monthly fee as a learner anywhere else in Canada. Billing begins after the free lesson, when you are happy with the course and the hour. The pricing page sets out what happens on holidays and after a missed lesson.'
  },

  reviewsH2: 'What families and learners have written on Google',

  book: {
    h2: 'Tell us about your Quebec City learner',
    intro: 'The first task fits the level: an animated story built from blocks for a young child, a Python guessing game in Secondary I, or the tree file for an older student who wants real data.',
    success: 'Thank you. Our team will contact you soon about a class from Quebec City.'
  },

  faq: {
    h2: 'Quebec City coding and AI questions',
    intro: 'Common questions from Quebec City, answered plainly.',
    items: [
      { q: 'Are there coding classes for kids in Quebec City?', a: 'Yes. From age 6 a child can join a live online class taught by a real teacher, in a group of fifteen to twenty or in private lessons. We have no classroom in the city.' },
      { q: 'Are the lessons in French?', a: 'No. Lessons, materials and feedback are entirely in English. Many bilingual Quebec City students are comfortable with that, but we would rather a French-only family know before booking.' },
      { q: 'How does coding help with the Secondary IV math options?', a: 'Each option\'s Quebec description names a habit coding trains: statistics and discrete mathematics in CST, finding errors and anomalies in TS, and formal proof in Science. Programming practises all three.' },
      { q: 'Do your classes give Quebec credits?', a: 'No. We do not grant Quebec credits, diplomas or option placements. Our classes sit beside school and CEGEP, where all credits are earned.' },
      { q: 'Can my child take Python classes in Quebec City?', a: 'Yes. Younger children start with Python and AI for Kids; Secondary students take Python for Teens or Maths Through Coding, then AI and machine learning.' },
      { q: 'Do you teach robotics classes in Quebec City?', a: 'We teach the code that drives a robot, not the robot: Python, logic and sensor data. For building hardware, a school or community team is the right partner for our classes.' },
      { q: 'Which AI tools do teenagers use in your classes?', a: 'Only age-appropriate ones. Adult-rated tools, Claude for one, stay out of under-18 lessons, and a teenager uses ChatGPT only with a parent\'s permission.' },
      { q: 'Can a Quebec City student write the CCC in French?', a: 'Yes. The 2027 contest, set by CEMC for Wednesday 17 February 2027, comes in French as well as English, and students write it through their school. Our coaching for it is in English.' },
      { q: 'What times do classes run for Quebec City?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each time is confirmed in Eastern time.' },
      { q: 'Will a 418 or new 273 number work in the form?', a: 'Yes. Numbers with 418, 581 or 367 work now, and 273 numbers, which the CRTC introduces on 27 February 2027, will work too. Type the ten digits; the +1 is supplied.' },
      { q: 'How are fees shown for Quebec City?', a: 'Look in the fees section: the free first lesson comes first, then the monthly price of a class place and of a dedicated teacher, with the currency code next to each figure. You are not billed until after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Quebec City and Quebec learners',
    html: 'For the option choice, read <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">choosing a Secondary 4 math option</a>; for the year after, <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary 5 math</a>; for college, <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science preparation</a>. The Canada-wide view is on <a class="cg-inline-link" href="/coding-classes-in-canada">our Canada page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Quebec City and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/quebec-secondary-4-math-cst-ts-science', label: 'Quebec Secondary 4 math' },
    { href: '/quebec-secondary-5-math-tutor', label: 'Quebec Secondary 5 math' },
    { href: '/cegep-computer-science-preparation', label: 'CEGEP computer science' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-aqc .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.2rem); }
.cg-root.cg-aqc .cg-hero h1 { font-weight: 700; letter-spacing: -0.017em; line-height: 1.07; }
.cg-root.cg-aqc .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-aqc .cg-eyebrow { letter-spacing: 0.1em; font-weight: 660; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-aqc .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-aqc .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-aqc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aqc #trees code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.56; padding: 0.9rem 1.05rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-aqc .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-aqc .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Quebec, read 22 October 2026: Quebec Education Program, Mathematics Secondary Cycle Two (three options, all allow pre-university entry; CST statistics and discrete mathematics; TS identify errors and anomalies; Science formal proofs; Appendix F bridges between options); quebec.ca CEGEP diplomas page (DCS). Constitution Act, 1867 s.68 (seat of government of Quebec); Charter of the French language s.1 (Internet Archive copy). Telecom Decision CRTC 2025-269 (area code 273 for 367/418/581 from 27 February 2027; Internet Archive copy). CEMC 2026-27: CCC in English and French, BCC English only, Euclid for final-year secondary or CEGEP students, through-a-school rule. IANA tzdb 2026e (America/Toronto).',
    localProject: 'Ville de Québec via Données Québec, Arbres potentiellement remarquables (CC BY 4.0), CSV downloaded 22 October 2026 and summarised with our script quebec_trees.py (python -I): 684 trees; POSITION_MESURE DHP 592 (median 79, three zeros), M 65 (median 86), DHS 27 (median 85); 75 Latin names, Quercus rubra 145; 609 of 684 on land recorded as private; 62 multi-trunk trees; 8 planting dates; 168 trees on Chemin Saint-Louis. No unit stated. Labelled as ours. Lesson family: grouping before summarising, and medians over means.',
    requiredMentions: [
      'POSITION_MESURE',
      'Quercus rubra, the red oak',
      '609 of the 684 trees',
      'Arbres potentiellement remarquables',
      'Three math options, three programming habits',
      'Trees recorded with more than one trunk',
      'Group before you summarise',
      'area code 273 to join them, taking effect on 27 February 2027',
      'Telecom Decision 2025-269',
      'Wednesday 3:30 to 4:30 pm here is, in India'
    ],
    sources: [
      { claim: 'Quebec Education Program, Mathematics, Secondary Cycle Two (option descriptions, pre-university access, bridges between options).', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'quebec.ca: CEGEP diplomas (Diploma of College Studies).', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/diplomas' },
      { claim: 'Constitution Act, 1867, section 68: seats of government of the provinces.', url: 'https://laws-lois.justice.gc.ca/eng/const/page-2.html' },
      { claim: 'Telecom Decision CRTC 2025-269: area code 273 for 367/418/581, effective 27 February 2027 (read via the Internet Archive).', url: 'https://crtc.gc.ca/eng/archive/2025/2025-269.htm' },
      { claim: 'CEMC: 2026-27 contest dates, language and eligibility notes, through-a-school rule, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Données Québec: Ville de Québec, Arbres potentiellement remarquables dataset page.', url: 'https://www.donneesquebec.ca/recherche/dataset/vque_82' },
      { claim: 'Données Québec licence page (CC BY 4.0 allows commercial reuse with credit).', url: 'https://www.donneesquebec.ca/licence/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets used for Quebec, 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Quebec City or Quebec population figure: StatCan was not reachable live, so no population is printed.',
      'A unit for DIAMETRE or definitions of DHP, DHS and M: not in any saved source, so not stated.',
      'A single biggest tree or an average diameter across all trees: refused; three measuring positions are mixed.',
      'Names of cemetery locations in the tree file: not printed on purpose.',
      'That we teach in French or have bilingual teachers: refused; teaching is in English.',
      'That our classes earn Quebec credits, diplomas or option placements: refused.',
      'A mapping of CEMC grades to Quebec Secondary levels: not sourced, so families are told to ask the school.',
      'The 54-credit secondary diploma and French-language instruction rules: unverified (education.gouv.qc.ca unreachable), not used.',
      'That we run robotics hardware classes: refused; we teach the programming side only.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Any affiliation with the Ville de Québec, Données Québec, the Ministère de l\'Éducation, any CEGEP, the CRTC, CEMC or the University of Waterloo.'
    ]
  }
};
