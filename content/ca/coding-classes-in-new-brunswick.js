'use strict';
// New Brunswick (cg- province page, Canada cluster Wave 2, row 95). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md. Not repeated from canada-coding-curriculum-by-province (which
// lists the subcluster courses and quotes the CS 110 "strong foundation in coding" and "AI-assisted debugging" lines): this
// page owns the program blocks, Middle Block Technology, Technology 9, Computer Science 120, Cybersecurity 120, the
// mathematics credit-hour rule, official bilingualism and a bilingual place-names project.
// www2.gnb.ca, www.gnb.ca, geonb.snb.ca and www.snb.ca returned 403 today: no retry, nothing used from them. The provincial
// open data portal was therefore unreachable; the project uses the federal Canadian Geographical Names file for New
// Brunswick instead (province-wide). Moncton, Fredericton and Saint John city data are left to their own city pages.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/coding-classes-in-new-brunswick/ and
// ca/src/other-provinces/):
//  - curriculum.nbed.ca, How We Teach: Program Blocks (nb-program-blocks.html): "The curriculum is divided into five
//    program blocks: Early Learning and Childcare, Primary, Elementary, Middle, and High." Footer "All content (c)
//    Government of New Brunswick. All rights reserved." (short quotes only).
//  - Middle Block Technology (nb-technology.html): learners "apply processes of design thinking and computational thinking";
//    skill areas "coding, networking, cooking, food production, design, repairing and maintaining items"; "Technology
//    education updates for Grades 6-8 strengthen digital literacy by helping learners understand how digital systems work,
//    use coding and computational thinking to solve problems, and make informed decisions about privacy, cybersecurity, and
//    responsible technology use." (en dash in source); "critically examine the role of algorithms, artificial intelligence,
//    digital data, and online environments".
//  - Technology 9 (nb-technology-9.html): builds on "the middle level technology continuum block"; concepts include
//    "Algorithms in coding", "Cybersecurity", "Encryption"; capstone projects shared through presentations.
//  - Computer Science 110 (other-provinces/nb-computer-science-110.html): heading GRADE 11; strand Computational Thinking,
//    big idea Decomposition, "Identify small tasks needed to solve large complex problems."; concepts "Algorithmic Thinking",
//    "Repurposed code", "UI/UX"; an updated online course via the New Brunswick Virtual Learning Centre.
//  - Computer Science 120 (nb-computer-science-120.html): GRADE 12; builds on CS 110; "object-oriented programming,
//    recursion, data science, machine learning, artificial intelligence, and gaming"; "students will design and prototype
//    their own software."
//  - Cybersecurity 120 (nb-cybersecurity-120.html): "The focus is entirely defensive"; sandboxed virtual networks. The
//    page's crime wording is not reproduced.
//  - Subcluster Digital and Information Technology (nb-digital-and-information-technology.html): course list.
//  - High School Mathematics (nb-mathematics.html): "Required: 12 credit hours from Mathematics"; compulsory "Geometry,
//    Measurement and Finance 10" (4CrH); options include Pre-Calculus 110, Pre-Calculus 120A/B and Calculus 120.
//  - Canadian Charter of Rights and Freedoms s.16(2) (geo/lang/constitution_page-12.html): "English and French are the
//    official languages of New Brunswick and have equality of status". Constitution Act, 1867 s.68: seat of government
//    Fredericton. America/Moncton UTC-4 / UTC-3; area codes 428 and 506 (facts-geo.md). No populations.
//  - CEMC (facts-schools-contests.md): CCC Wednesday 17 February 2027, "available in English and French"; BCC 9 to 20
//    November 2026, English only; Pascal, Cayley and Fermat 23 and 24 February 2027, English and French; through a school.
//  - Natural Resources Canada, GeoBase Canadian Geographical Names, New Brunswick: cgn_nb_csv_eng.zip from
//    ftp.cartes.canada.ca downloaded 22 October 2026 16:04 UTC (zip sha256 fe907455...695f, csv sha256 b2174824...a221);
//    metadata cgn_NB_20201125_nap.xml (saved): "extracted from the CGNDB on a weekly basis"; licence "Open Government
//    Licence - Canada". Licence text: open.canada.ca rejects requests, so read from the Internet Archive copy
//    (20261013115021, ogl-canada_IA.html): "including for commercial purposes"; attribution "Contains information licensed
//    under the Open Government Licence - Canada." (en dash in source, hyphen here); non-endorsement.
// Our own calculations (py/name_pairs.py and py/explore_cgn.py, python -I; outputs *.out.txt): 11,663 rows, 11,663 CGNDB IDs,
// 11,469 Toponymic Feature IDs; 194 features carry exactly two official names (none has more); 166 of the 194 are PARK
// features; 189 pairs have Language "Undetermined" on both rows (11,526 of 11,663 rows say Undetermined); our rule marks
// exactly one name of the pair as French-looking in 158 of 194 pairs, leaving 36 for a human check (e.g. Grand Falls /
// Grand-Sault, New Brunswick / Nouveau-Brunswick, Gulf of St. Lawrence / Golfe du Saint-Laurent); 61 pairs are Protected
// Natural Areas with decision date 2003-03-21; Decision Date range 1890 to 2023.
// Lesson family: grouping records by a shared ID to find pairs, and inferring a missing label from the text with string
// tests, then measuring where the rule fails.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'FRENCH_STARTS = ("Zone ", "Parc ", "Rivière", "Lac ", "Ruisseau", "Lieu ", "Réserve", "Unité", "Île", "Baie ", "Pointe", "Cap-")',
  'ACCENTS = set("àâçéèêëîïôûùüÿœ")',
  '',
  'def looks_french(name):',
  '    return name.startswith(FRENCH_STARTS) or any(ch in ACCENTS for ch in name.lower())',
  '',
  'names_for = {}',
  'with open("cgn_nb_csv_eng.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        names_for.setdefault(row["Toponymic Feature ID"], []).append(row)',
  '',
  'pairs = [rows for rows in names_for.values() if len(rows) == 2]',
  'one_french = [p for p in pairs if sum(looks_french(r["Geographical Name"]) for r in p) == 1]',
  'print("features", len(names_for), "with two names", len(pairs))',
  'print("pairs with exactly one French-looking name", len(one_french))',
  'for p in pairs:',
  '    if p not in one_french:',
  '        print("check by hand:", [r["Geographical Name"] for r in p])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'province', tag: 'NEW BRUNSWICK', label: 'New Brunswick', blurb: 'Coding, Python and AI for New Brunswick students: Middle Block Technology, Computer Science 110 and 120, and a bilingual place-names data project.' },
  market: CA,
  slug: 'coding-classes-in-new-brunswick',
  code: 'nb',
  accent: '#274C19',
  accentRationale: 'New Brunswick: a deep balsam-fir green, #274C19, allocated to row 95; contrast 9.28 on the paper #FBF8F2, 8.73 on #F5F1E8 and 7.99 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'New Brunswick',
    eyebrow: 'New Brunswick, Canada',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'By province', href: '/canada-coding-curriculum-by-province' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'New Brunswick',
  title: 'Coding Classes in New Brunswick | Live Online Python and AI',
  description: 'Live online coding, Python and AI classes for New Brunswick students: Middle Block Technology, Computer Science 110 and 120, and a bilingual data project.',
  ogDescription: 'New Brunswick now asks Grade 6 to 8 students to code and to question algorithms and AI, then offers Computer Science 110 and 120. Live online classes build the depth behind it.',
  twitterDescription: 'New Brunswick coding, Python and AI classes, live online in English on Atlantic time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for New Brunswick Students',
    description: 'Live online coding taught in English for New Brunswick students from the Primary block to adult: blocks, Python, AI and machine learning for Computer Science 120, defensive cybersecurity and CCC preparation.'
  },

  h1: 'Coding classes in New Brunswick',
  capsuleQ: 'Where can a New Brunswick student learn to code with a live teacher, beyond the school timetable?',
  capsule: 'New Brunswick learners from age 6 to adult study coding, Python and AI with Modern Age Coders in live online lessons, privately or as one of fifteen to twenty in a group batch. A Grade 6 to 8 student typically begins with Python and AI for Kids, a high school student with Python for Teens, and a Grade 12 student adds AI and Machine Learning for Teens. Teaching is in English, scheduled in Atlantic time, with a free first lesson.',
  lead: 'New Brunswick has rebuilt its curriculum around five program blocks, and in the Middle Block, Grades 6 to 8, coding is now named outright inside Technology, together with the instruction to examine algorithms and artificial intelligence critically. High school students can go on to Technology 9, Computer Science 110 in Grade 11 and Computer Science 120 in Grade 12, where machine learning and AI appear in the course description. This page sets out those courses in the department\'s words, the mathematics credit rule beside them, a Python project on the province\'s official place names that only makes sense in a bilingual province, and how live online classes in English sit beside a New Brunswick school week.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a student in New Brunswick.',

  picks: {
    eyebrow: 'Course picks for New Brunswick',
    h2: 'Four courses New Brunswick students start with',
    intro: 'Each one lines up with a stage of the New Brunswick curriculum, from the Middle Block to Grade 12; the trial lesson decides which suits your child.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 8', note: 'Typed Python with loops and conditions, the coding the Middle Block Technology course now expects, plus small programs that show how a computer makes a guess.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 9 to 12', note: 'Python from first program to files, functions and data, a solid run-up to Computer Science 110 and the place-names project on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 11 and 12', note: 'Machine learning in Python on data students can check, close to the machine learning and AI topics Computer Science 120 lists.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 9 to 12', note: 'Defensive cybersecurity for teens, in the same spirit as Cybersecurity 120, whose focus the department describes as entirely defensive.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Coding in New Brunswick schools',
      h2: 'From the Middle Block to Computer Science 120: coding in the New Brunswick curriculum',
      intro: 'The department\'s curriculum site, curriculum.nbed.ca, lays the curriculum out in program blocks and courses. We read it on 22 October 2026. Phrases inside quotation marks are copied from the department; the last column explains them in our own words.',
      body: [
        { kind: 'table', caption: 'Coding and computer science in the New Brunswick curriculum framework (curriculum.nbed.ca, Government of New Brunswick; our reading in the last column)', head: ['Course or block', 'What the department says', 'What it asks of a student'], rows: [
          ['Middle Block Technology, Grades 6 to 8', 'Learners &ldquo;use coding and computational thinking to solve problems, and make informed decisions about privacy, cybersecurity, and responsible technology use&rdquo;', 'Write real programs, and think about what technology does with personal data'],
          ['Middle Block Technology, new expectations', 'Students &ldquo;critically examine the role of algorithms, artificial intelligence, digital data, and online environments&rdquo;', 'Ask how an AI system reaches an answer before trusting it'],
          ['Technology 9', 'Concepts include &ldquo;Algorithms in coding&rdquo; and &ldquo;Encryption&rdquo;, ending in capstone projects shared in presentations', 'Build and present a project, with a first look at how data is protected'],
          ['Computer Science 110, Grade 11', 'Under computational thinking: &ldquo;Identify small tasks needed to solve large complex problems.&rdquo;', 'Break a big program into small functions, the core habit of programming'],
          ['Computer Science 120, Grade 12', 'Applications in &ldquo;object-oriented programming, recursion, data science, machine learning, artificial intelligence, and gaming&rdquo;', 'Design and prototype original software, including machine learning'],
          ['Cybersecurity 120', '&ldquo;The focus is entirely defensive&rdquo;, with work in a sandboxed virtual network', 'Protect systems and analyse weaknesses, never attack real ones']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five program blocks', p: 'The department divides the curriculum into five program blocks: Early Learning and Childcare, Primary, Elementary, Middle, and High. Coding becomes a named skill in the Middle Block, inside a Technology course that also covers networking, cooking, design and repair.' },
          { h3: 'Two computer science courses', p: 'Computer Science 110 sits in Grade 11 and Computer Science 120 builds on it in Grade 12, where students design and prototype their own software. The department notes an updated online version through the New Brunswick Virtual Learning Centre.' },
          { h3: 'A cluster of options', p: 'Both courses belong to the Digital and Information Technology subcluster, with Technology 9, Cybersecurity and Technical Support 110, Cybersecurity 120, Information Technology 120, Digital Production 120 and Robotics and Automated Processing 120.' }
        ] },
        { kind: 'p', text: 'Read in order, the courses make a ladder: code in Grades 6 to 8, apply it in Technology 9, decompose problems in Computer Science 110, then build object-oriented programs and machine learning applications in Computer Science 120. The gap is time. A Grade 12 student who meets recursion, object-oriented design and machine learning in one semester has to learn all three at once. Students who reach Computer Science 120 already fluent in Python can use that semester to build something of their own, which is what the course description asks for.' },
        { kind: 'callout', h3: 'Alongside the school, never instead of it', p: 'Our classes run next to Technology, Computer Science 110 and 120 and the math courses, and we do not grant New Brunswick credits. Credit hours are earned at school. We are not connected with the New Brunswick government, its education department, a school district or the Virtual Learning Centre.' }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'High school mathematics',
      h2: 'The mathematics rule a New Brunswick programmer should know',
      intro: 'Computer science at university leans on mathematics, and New Brunswick\'s high school framework sets a minimum. The rule below is the department\'s, from the Mathematics page of the High School Block.',
      body: [
        { kind: 'table', caption: 'New Brunswick high school mathematics requirement (curriculum.nbed.ca, High School Block: Mathematics)', head: ['Requirement', 'Department wording'], rows: [
          ['Total', '&ldquo;Required: 12 credit hours from Mathematics&rdquo;'],
          ['Compulsory course', 'Geometry, Measurement and Finance 10, worth 4 credit hours'],
          ['The other 8 credit hours', 'Chosen from options including Number, Relations and Functions 10, Foundations of Mathematics 110 and 120, Pre-Calculus 110, Pre-Calculus 120A and 120B, and Calculus 120']
        ] },
        { kind: 'p', text: 'For a student thinking about computer science or engineering, the Pre-Calculus sequence and Calculus 120 matter most, because they carry the functions, logarithms and rates of change that programming and machine learning use constantly. We teach that mathematics alongside school with practice we write ourselves, and we connect it to code wherever we can: a logarithm becomes the number of times a binary search halves a list, and a derivative becomes the slope a learning algorithm follows downhill.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Numbers in code', p: 'Grade 10 math is a good moment to meet floating-point numbers properly: why 0.1 plus 0.2 does not print as exactly 0.3, and how rounding works in a finance problem from Geometry, Measurement and Finance 10.' },
          { h3: 'Functions both ways', p: 'A function in Pre-Calculus and a function in Python are close relatives. Students who write one for every formula they learn tend to read both kinds more fluently.' },
          { h3: 'How we help', p: 'Math support follows the order of the student\'s New Brunswick course. We do not reproduce school or provincial assessment items.' }
        ] }
      ]
    },
    {
      id: 'names', tint: 'deep', eyebrow: 'New Brunswick data project',
      h2: 'One place, two official names: a bilingual data project on New Brunswick\'s place names',
      intro: 'Natural Resources Canada publishes the official geographical names for each province, refreshed weekly from the national database. In New Brunswick, some features carry an English and a French official name. Our students find them with Python and then test their own rule. Every count below is ours.',
      body: [
        { kind: 'table', caption: 'Our count of the Canadian Geographical Names file for New Brunswick (cgn_nb_csv_eng.csv), downloaded 22 October 2026', head: ['What we counted', 'Result'], rows: [
          ['Rows (official names) in the file', '11,663'],
          ['Distinct features (Toponymic Feature ID)', '11,469'],
          ['Features with exactly two official names', '194'],
          ['Of those, parks and protected areas (Concise Code PARK)', '166'],
          ['Pairs where both rows give the Language as Undetermined', '189'],
          ['Pairs where our rule marks exactly one name as French-looking', '158'],
          ['Pairs our rule cannot settle, left for a human check', '36']
        ] },
        { kind: 'p', text: 'Here is the script, which needs only Python 3 and the unzipped CSV in the same folder:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Group by the shared ID', p: 'Each official name is a row with its own CGNDB ID, but a single feature keeps one Toponymic Feature ID across its names. Grouping rows by that ID turns 11,663 names into 11,469 features and reveals the 194 that have two names, such as Madawaska River and Rivière Madawaska, or Richards Lake and Lac Richards.' },
          { h3: '2. Notice the missing label', p: 'The file has a Language column, but on 189 of the 194 pairs it says Undetermined for both names, so it cannot tell a student which name is French. That gap is the problem the script solves: it guesses from the text, using accented letters and a short list of French opening words such as Parc, Lac and Rivière.' },
          { h3: '3. Measure the rule', p: 'The rule settles 158 pairs and fails on 36. Grand Falls and Grand-Sault have no accent or listed opening word; New Brunswick and Nouveau-Brunswick likewise. Students list the failures, improve the rule and run it again, which is the honest way to build any classifier, AI included.' }
        ] },
        { kind: 'callout', h3: 'What the counts do not show', p: 'Two names in the file means two officially approved names, not a count of how often each is used. Most of the pairs are parks and protected areas, and 61 of them are Protected Natural Areas named on the same decision date, 21 March 2003, so the pairs are not a fair sample of the province\'s lakes, rivers and communities.' },
        { kind: 'p', text: 'A follow-up for a Grade 12 student: rewrite the rule as a small scoring function that weighs several clues, then compare its errors with the first version. Contains information licensed under the Open Government Licence - Canada. Data: Natural Resources Canada, GeoBase Canadian Geographical Names, New Brunswick, CSV from <a class="cg-inline-link" href="https://ftp.cartes.canada.ca/pub/nrcan_rncan/vector/geobase_cgn_toponyme/prov_csv_eng/">the NRCan download folder</a>. The counts, the rule and the script are ours, and Natural Resources Canada does not endorse this page.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests from New Brunswick',
      h2: 'Waterloo contests in English or French for New Brunswick students',
      intro: 'In an officially bilingual province, the language a contest is offered in matters. These are CEMC\'s dates for North and South America and the languages CEMC lists, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC contests for New Brunswick schools, 2026 to 2027 (as listed by CEMC)', head: ['Contest', 'Who', 'Languages', 'Date'], rows: [
          ['Beaver Computing Challenge', 'Grade 10 or below, no programming needed', 'English only', '9 to 20 November 2026'],
          ['Canadian Computing Competition', 'Junior or Senior by programming skill', 'English and French', 'Wednesday 17 February 2027'],
          ['Pascal, Cayley and Fermat', 'Grades 9, 10 and 11', 'English and French', '23 and 24 February 2027']
        ] },
        { kind: 'p', text: 'So the CCC and the Pascal, Cayley and Fermat papers can be written in French by a student in a francophone school, but the Beaver Computing Challenge cannot. All of them go through a school order, as CEMC does not register students individually. We prepare students with original problems of our own and leave CEMC\'s free archive of past contests for timed practice; our <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> and <a class="cg-inline-link" href="/pascal-contest-preparation">Pascal contest page</a> explain each in depth. CEMC has no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Language, time and phones',
      h2: 'An officially bilingual province on Atlantic time',
      intro: 'The Canadian Charter of Rights and Freedoms says it plainly in section 16(2): English and French are the official languages of New Brunswick and have equality of status. Our classes are taught in English, on New Brunswick\'s own clock.',
      body: [
        { kind: 'table', caption: 'Clocks in New Brunswick against India over the 2026 to 2027 school year. The America/Moncton offsets come from release 2026e of the IANA database; we chose the sample class times and did the conversions', head: ['Period', 'New Brunswick', 'A 9:30 am Saturday class is, in India', 'A 4:30 pm weekday class is, in India'], rows: [
          ['To 1 November 2026', 'UTC-3', '6:00 pm Saturday', '1:00 am the next day'],
          ['1 November 2026 to 14 March 2027', 'UTC-4', '7:00 pm Saturday', '2:00 am the next day'],
          ['From 14 March 2027', 'UTC-3', '6:00 pm Saturday', '1:00 am the next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Classes in English', p: 'Teaching is in English. Francophone students join without any change to the code they write, and the teacher slows down where the spoken explanation needs it.' },
          { h3: 'Fredericton to Edmundston', p: 'The whole province keeps one Atlantic clock, from the capital, Fredericton, to Moncton, Saint John, Bathurst, Miramichi and Edmundston. Every class we schedule is confirmed in Atlantic time.' },
          { h3: 'Phone numbers', p: 'New Brunswick numbers use the 506 and 428 area codes, and both are accepted in our booking form. Enter the ten-digit number; the +1 is already there.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the Primary block to Computer Science 120',
    intro: 'Blocks and grades are a guide only; the free first lesson places each student.',
    cols: [
      { band: 'Primary and Elementary', h3: 'Blocks and logic', p: 'Block-based programs and puzzles that build sequence, repetition and simple conditions.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Middle Block, Grades 6 to 8', h3: 'Coding and AI basics', p: 'Typed Python and a first, careful look at how AI systems reach their answers.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 to 11', h3: 'Toward Computer Science 110', p: 'Python taken properly and a taste of defensive cybersecurity, as in Technology 9.', courses: ['python-complete-masterclass-teens', 'cybersecurity-course-for-teens-ethical-defensive'] },
      { band: 'Grade 12', h3: 'Computer Science 120 and contests', p: 'Machine learning and AI projects, and CCC preparation for students who want a contest.', courses: ['ai-ml-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'New Brunswick asks Grade 6 to 8 students to examine AI critically. That starts with code',
    intro: 'A student who has built a simple rule, and counted where it fails, knows more about AI than one who has only used it.',
    p1: 'The place-names rule on this page is a tiny classifier. It gets 158 pairs right and 36 wrong, and the wrong ones teach the most: a rule built on accents cannot see that Grand-Sault is French. Every AI system has failures like that, larger and better hidden, and the Middle Block\'s instruction to examine algorithms critically is a request to look for them.',
    p2: 'In our classes students write the rule, test it and fix it before any AI tool is involved. Teenagers then use AI tools within each tool\'s age limits, and with a parent\'s consent wherever a tool requires it. Children below 13 never get adult tools from us; they discover how a prediction is made by coding a miniature predictor of their own.',
    closer: 'Computer Science 120 lists machine learning and artificial intelligence among its topics; the student who has already measured a model\'s mistakes will get far more from it.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Moncton, Saint John, Fredericton and beyond',
    intro: 'Every lesson is taught live by a teacher on video, so a student in Campbellton and a student in Saint John can join the same class.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across the province', p: 'Moncton, Dieppe, Saint John, Fredericton, Miramichi, Bathurst, Edmundston or Campbellton: the class, the teacher and the clock are the same.' },
      { h3: 'Shared class or private', p: 'Learn with fifteen to twenty classmates at one level, or book a private teacher for a faster pace or for help with a Computer Science 120 project.' },
      { h3: 'Program blocks', p: 'Teachers plan around New Brunswick\'s program blocks and courses, and know when Technology 9, Computer Science 110 and 120 fall in high school.' },
      { h3: 'English instruction', p: 'All lessons are in English. A student taught in French at school writes exactly the same Python, since the keywords do not change with the classroom language.' },
      { h3: 'Start free', p: 'The first class is free and taught like any other lesson; at the end the teacher recommends a level, course and time.' }
    ],
    spec: { title: 'No New Brunswick office', p: 'Modern Age Coders has no centre in New Brunswick and claims none. Teachers work live online from India, and a student needs a computer with a microphone, speakers and a reliable internet connection.' }
  },

  fees: {
    h2: 'Fees for New Brunswick families',
    intro: 'The currency is printed next to every fee shown below.',
    first: 'A complete live lesson free of charge, ending with a suggested level, course and weekly time.',
    group: 'The monthly fee for a seat in a shared class of fifteen to twenty students at one level.',
    private: 'The monthly fee for one teacher and one student, scheduled around the family.',
    closer: 'New Brunswick families pay the same monthly fee as families anywhere else in Canada. Payment begins only after the free lesson, once the course and the time are decided; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'What families and students wrote about us on Google',

  book: {
    h2: 'Tell us about your New Brunswick student',
    intro: 'The first task fits the level: a block-coding puzzle for a Primary child, a Python guessing game for Grade 7, or the official place-names file for a high school student ready to handle eleven thousand rows.',
    success: 'Thank you. The team will be in touch soon about a class for New Brunswick.'
  },

  faq: {
    h2: 'New Brunswick coding questions',
    intro: 'Questions New Brunswick families ask us most often.',
    items: [
      { q: 'Do you offer coding classes in New Brunswick?', a: 'Yes, live and online. We have no New Brunswick centre; students learn from home with a teacher, one to one or in a group batch of fifteen to twenty.' },
      { q: 'Is coding taught in New Brunswick middle schools?', a: 'Yes. The Middle Block Technology course for Grades 6 to 8 includes coding and computational thinking, and its new expectations ask students to examine algorithms and artificial intelligence critically.' },
      { q: 'What computer science courses do New Brunswick high schools offer?', a: 'The curriculum lists Computer Science 110 in Grade 11 and Computer Science 120 in Grade 12, alongside Technology 9, Cybersecurity 120 and other courses in the Digital and Information Technology subcluster. Ask the school which of them it runs.' },
      { q: 'Do your classes count for New Brunswick credit hours?', a: 'No. We do not grant New Brunswick credits or credit hours. Only school courses carry credit hours; we teach the skills that make those courses easier.' },
      { q: 'Are the classes in English or French?', a: 'In English. New Brunswick is officially bilingual, and students from French-language schools are welcome; teachers give extra time to vocabulary.' },
      { q: 'Does Computer Science 120 include artificial intelligence?', a: 'Yes. The department lists object-oriented programming, recursion, data science, machine learning, artificial intelligence and gaming among its topics, and students design and prototype their own software.' },
      { q: 'What time are classes for New Brunswick families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We send each class time in Atlantic time.' },
      { q: 'Can a New Brunswick student write the CCC in French?', a: 'Yes, French is one of the two languages CEMC offers for the Canadian Computing Competition. The 2027 paper is on Wednesday 17 February 2027, and entry is arranged by the student\'s school.' },
      { q: 'Do 506 and 428 numbers work in your form?', a: 'Yes. Type the ten-digit number; the country code is filled in for you.' },
      { q: 'How young can my child start?', a: 'Six is a good age for block coding. Most children are ready to type Python somewhere in the Elementary block, and there is no upper age limit.' },
      { q: 'Where are the fees?', a: 'In the fees section of this page, which shows the free first class, the monthly group fee and the monthly one-to-one fee with the currency beside each. Nothing is charged before the free class.' }
    ]
  },

  cityLinks: {
    "eyebrow": "New Brunswick cities",
    "h2": "Our city pages in New Brunswick",
    "p": "3 pages for New Brunswick towns and cities, each written for the families there.",
    "links": [
      {
        "href": "/ai-and-python-classes-for-teens-in-fredericton",
        "label": "AI and Python classes for teens in Fredericton"
      },
      {
        "href": "/best-coding-classes-for-kids-in-moncton",
        "label": "Coding classes for kids in Moncton"
      },
      {
        "href": "/online-coding-and-python-classes-in-saint-john-new-brunswick",
        "label": "Online coding and Python classes in Saint John"
      }
    ]
  },
  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for New Brunswick students',
    html: 'Start from <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>, or see New Brunswick next to the other provinces in <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">our curriculum comparison</a>. Families on Atlantic time can check <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones in 2026</a>, and contest students the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">contest calendar</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'New Brunswick and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' },
    { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
    { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar' }
  ],

  personalityCss: `
.cg-root.cg-nb .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.2vw, 2.3rem); }
.cg-root.cg-nb .cg-hero h1 { font-weight: 690; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-nb .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-nb .cg-eyebrow { letter-spacing: 0.11em; font-weight: 680; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-nb .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.009em; }
.cg-root.cg-nb .cg-table caption { font-weight: 610; text-align: left; font-style: italic; }
.cg-root.cg-nb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nb #names code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.78rem; line-height: 1.6; padding: 0.95rem 1rem; border-top: 2px solid var(--cg-accent); }
.cg-root.cg-nb .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-nb .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'New Brunswick, read 22 October 2026 from curriculum.nbed.ca and saved raw: five program blocks; Middle Block Technology (coding, computational thinking, Grades 6 to 8 updates on privacy, cybersecurity, algorithms and AI); Technology 9 (algorithms in coding, encryption, capstone); Computer Science 110 (Grade 11, decomposition skill descriptor, Virtual Learning Centre); Computer Science 120 (Grade 12, OOP, recursion, data science, machine learning, AI, gaming, own software); Cybersecurity 120 (entirely defensive); Digital and Information Technology subcluster list; High School Mathematics (12 credit hours, Geometry, Measurement and Finance 10 compulsory, options to Calculus 120). Charter s.16(2) official bilingualism; Fredericton seat (s.68); America/Moncton tzdb 2026e; area codes 428 and 506. CEMC dates and languages via facts-schools-contests.md. www2.gnb.ca and related hosts 403, not used.',
    localProject: 'Natural Resources Canada, GeoBase Canadian Geographical Names, New Brunswick CSV (Open Government Licence - Canada per the NRCan metadata), downloaded 22 October 2026 and analysed with our script name_pairs.py (python -I): 11,663 names, 11,469 features, 194 features with two official names, 166 of them parks and protected areas, 189 pairs with Language Undetermined on both rows; our French-looking rule settles 158 pairs and leaves 36 (Grand Falls / Grand-Sault, New Brunswick / Nouveau-Brunswick); 61 Protected Natural Area pairs dated 21 March 2003. Labelled as ours. Lesson family: grouping by a shared ID and inferring a missing label with string tests, then measuring the rule\'s failures.',
    requiredMentions: [
      'Toponymic Feature ID',
      'Grand Falls and Grand-Sault',
      'Madawaska River and Rivière Madawaska',
      'Natural Resources Canada does not endorse this page',
      'five program blocks: Early Learning and Childcare, Primary, Elementary, Middle, and High',
      'critically examine the role of algorithms, artificial intelligence, digital data, and online environments',
      'object-oriented programming, recursion, data science, machine learning, artificial intelligence, and gaming',
      'Required: 12 credit hours from Mathematics',
      'equality of status',
      '506 and 428'
    ],
    sources: [
      { claim: 'New Brunswick curriculum framework: program blocks.', url: 'https://curriculum.nbed.ca/curriculum-framework/how-we-teach-program-blocks/' },
      { claim: 'Middle Block Technology (Grades 6 to 8): coding, computational thinking, algorithms and AI.', url: 'https://curriculum.nbed.ca/learning-areas/middle-block/technology/' },
      { claim: 'Technology 9.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/technology-9/' },
      { claim: 'Computer Science 110 (Grade 11).', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/' },
      { claim: 'Computer Science 120 (Grade 12).', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-120/' },
      { claim: 'Cybersecurity 120 (entirely defensive).', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/cybersecurity-120/' },
      { claim: 'High School Block Mathematics: 12 credit hours.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/mathematics/' },
      { claim: 'Canadian Charter of Rights and Freedoms s.16(2): New Brunswick official languages.', url: 'https://laws-lois.justice.gc.ca/eng/const/page-12.html' },
      { claim: 'NRCan GeoBase Canadian Geographical Names, New Brunswick CSV and metadata.', url: 'https://ftp.cartes.canada.ca/pub/nrcan_rncan/vector/geobase_cgn_toponyme/prov_csv_eng/cgn_nb_csv_eng.zip' },
      { claim: 'Open Government Licence - Canada (read from the Internet Archive copy of 13 October 2026; the live host rejects requests).', url: 'https://open.canada.ca/en/open-government-licence-canada' },
      { claim: 'CEMC contests 2026-27: languages and dates; through a school.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'IANA tzdb northamerica: America/Moncton.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any New Brunswick, Moncton, Saint John or Fredericton population figure: none printed.',
      'Anything from www2.gnb.ca, www.gnb.ca, geonb.snb.ca or www.snb.ca: 403 today, not retried, not used (including the department name page and the provincial open data portal).',
      'That one name in each pair is English and the other French as recorded fact: the file does not say; the page presents our rule as a guess and counts its failures.',
      'Indigenous-language name labels in the CGN file: not made the subject of the lesson.',
      'Names of religious, medical, military or justice sites from the pairs: not used as examples.',
      'The Cybersecurity 120 wording about criminal activities: not reproduced.',
      'Who may attend French-language or English-language schools: no source saved, left out.',
      'That our classes grant or count toward New Brunswick credit hours: refused.',
      'The name of the New Brunswick education department: its gnb.ca page was blocked, so the page says only the education department. Any affiliation with the New Brunswick government, a school district, the Virtual Learning Centre, Natural Resources Canada or CEMC.'
    ]
  }
};
