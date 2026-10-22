'use strict';
// CEGEP computer science preparation (ag- pathway page; Canada cluster Plan 2, row 38).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// English-language page. What CEGEP is, from Québec.ca; what its two computer science programs ask, from the ministry's
// program documents; how a secondary student prepares in programming. No individual college is named (rule 8): the
// admission page's list of colleges that take applications directly is described, not reproduced.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/quebec/ and
// ca/src-pilots/cegep-computer-science-preparation/):
//  - quebec.ca Studying at CEGEP, overview (cegep-overview.txt): "College is the first level of education at which
//    schooling is not compulsory in Québec. College studies follow secondary school and precede university education.";
//    48 "CEGEPs (public colleges), five of which are English-language institutions"; "about 70 private colleges, more than a
//    third of which are subsidized"; "A college year is comprised of two 16-week terms (including the examination period),
//    one in the fall (August to December) and one in the winter (January to May)."; courses average 45 hours per term,
//    "about three hours per week"; full time "at least 180" hours a term, or 165 with Physical Education; complementary
//    areas include "mathematics literacy and computer science"; pre-university "requires two years of full-time study";
//    technical "requires three years of full-time study"; "Technical programs include at least one practicum in the
//    workplace."; R score "cote de rendement au collégial"; "Universities use the R score to analyze applications".
//  - quebec.ca CEGEP admission (qc-cegep-admission): DCS eligibility (SSD, or DVS plus named Secondary V and IV subjects);
//    "Some college programs also have specific requirements for the program you choose."; regional admission services
//    including the "Service régional d'admission du Montréal métropolitain (SRAM)"; some colleges take applications
//    directly (names not reproduced); deadlines "Fall term: March 1" and "Winter term: November 1" (no year on the page;
//    the years on our page are ours).
//  - quebec.ca choosing a program (qc-cegep-choosing): Springboard to a DCS "for no more than three consecutive terms".
//  - quebec.ca pre-university programs: "Computer Science and Mathematics (200.C0)"; technical sector 1: "420.B0 -
//    Computer Science Technology".
//  - 200.C0 program document (200-C0.txt): aim "preparing students for university programs in computer science,
//    mathematics, engineering and most of the pure sciences programs"; 58 credits; 1560 periods (660 general, 900
//    program-specific); objectives 020V "Apply basic concepts in discrete mathematics to problem solving" (Boolean algebra,
//    Euclid's algorithm, modular arithmetic, recursion, graphs), 020W "Develop programs to solve simple problems" ("Design of
//    an effective algorithm"; "Proper validation of an algorithm by means of a complete set of tests"; "Accurate
//    comprehension of the basic concepts of object-oriented programming: class, object, method, attribute"), 020X "Organize
//    and manipulate data" (encapsulation, inheritance, polymorphism; "Correct use of updating, sorting and search techniques
//    with data in memory"), 020Y "Design and develop programs in a graphic environment", 020Z integration "Through a team
//    project"; "it is important that students, especially those who will later study applied sciences or engineering,
//    receive an introduction to the development of algorithms and the use of a programming language"; "Each college
//    determines the ways in which the educational aims, common competencies, goals, objectives and standards are
//    implemented." No programming language is named in the document.
//  - 420.B0 program document (420-B0.txt): 91 credits; "2 670 hours of instruction"; 13 compulsory objectives and a list of
//    15 from which institutions choose 6 or 7; 00Q2 "Use programming languages" (elements: analyze the problem, translate
//    the algorithm, debug the code, implement the functional test plan); 00Q3 "Solve computer-related problems using
//    mathematics" (number bases, digital images, Boolean algebra, descriptive statistics); optional competencies such as
//    "Develop transactional Web applications", "Develop gaming or simulation applications", "Develop applications for
//    connected objects".
// Our own material, labelled on the page: the base-conversion and Euclid program with its six-case functional test plan
// (run under CPython on 22 October 2026: 6 of 6 pass), the two-year preparation plan, the readiness table, the ladder.
// Lesson family: write the test plan before the code (validation as a habit).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BASES = `# Our practice program: number bases and Euclid's algorithm, with a test plan.
DIGITS = "0123456789ABCDEF"

def to_base(n, base):
    """Write a whole number n >= 0 in a base from 2 to 16."""
    if n == 0:
        return "0"
    out = ""
    while n > 0:
        n, r = divmod(n, base)     # repeated division: the remainder is the next digit
        out = DIGITS[r] + out
    return out

def gcd(a, b):
    """Euclid's algorithm: replace (a, b) by (b, a mod b) until b is 0."""
    while b != 0:
        a, b = b, a % b
    return a

# functional test plan: (what we test, call, expected result)
TESTS = [
    ("zero",              lambda: to_base(0, 2),     "0"),
    ("binary",            lambda: to_base(13, 2),    "1101"),
    ("hexadecimal",       lambda: to_base(255, 16),  "FF"),
    ("one digit",         lambda: to_base(7, 8),     "7"),
    ("gcd, common factor", lambda: gcd(84, 36),      12),
    ("gcd, coprime",      lambda: gcd(17, 5),        1),
]

passed = 0
for name, call, expected in TESTS:
    got = call()
    ok = got == expected
    passed += ok
    print(f"{name:20} expected {expected!s:6} got {got!s:6} {'PASS' if ok else 'FAIL'}")
print(passed, "of", len(TESTS), "tests pass")`;

const BASES_OUT = `zero                 expected 0      got 0      PASS
binary               expected 1101   got 1101   PASS
hexadecimal          expected FF     got FF     PASS
one digit            expected 7      got 7      PASS
gcd, common factor   expected 12     got 12     PASS
gcd, coprime         expected 1      got 1      PASS
6 of 6 tests pass`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CEGEP', blurb: 'What CEGEP is, what its two computer science programs (200.C0 and 420.B0) teach and ask for, from the ministry\'s own documents, and how a secondary student prepares in programming.' },
  slug: 'cegep-computer-science-preparation',
  code: 'ccsp',
  accent: '#2A523C',
  accentRationale: 'CEGEP computer science preparation, Canada: a deep balsam green #2A523C, the allocated Canada accent for this row, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 8.36 on the paper #FBF8F2 (7.86 and 7.19 on the two tints)',
  pageType: 'market',
  market: CA,
  courseCodePage: false,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'CEGEP computer science preparation',
  title: 'CEGEP Computer Science: Programs, Admission and Preparation',
  description: 'CEGEP computer science explained from Québec.ca and the ministry\'s program documents: 200.C0 and 420.B0, admission, R score, and how to prepare in Python.',
  ogDescription: 'Two CEGEP routes into computer science: the two-year pre-university 200.C0 and the three-year technical 420.B0. What each teaches, what each asks for, and how a secondary student gets ready.',
  twitterDescription: 'CEGEP computer science, from the ministry\'s own program documents, and how to prepare.',
  pageName: 'CEGEP Computer Science Preparation',
  webPageDescription: 'A guide for Quebec students and parents to computer science at CEGEP: what CEGEP is, the Computer Science and Mathematics (200.C0) and Computer Science Technology (420.B0) programs as the ministry defines them, admission and the R score, and how to prepare in programming during secondary school.',
  courseDescription: 'Live online Python and programming classes for Quebec students preparing for CEGEP computer science, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'CEGEP computer science preparation',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#what', label: 'What CEGEP is' },
    { href: '#programs', label: 'The two programs' },
    { href: '#skills', label: 'What they teach' },
    { href: '#admission', label: 'Admission' },
    { href: '#prepare', label: 'How to prepare' }
  ],
  eyebrow: 'Quebec &middot; CEGEP &middot; Computer science',
  h1: 'CEGEP computer science: programs and preparation',
  lede: 'In Quebec, the road to a computer science degree or a programming job passes through CEGEP, the college level between secondary school and university. There are two main doors: a two-year pre-university program, Computer Science and Mathematics (200.C0), and a three-year technical program, Computer Science Technology (420.B0). This guide explains what CEGEP is from Québec.ca, then reads both programs from the ministry\'s own program documents: what they teach, how many hours they take and what they ask for at admission. The last part is ours: how a student in Secondary III, IV or V can prepare in programming, with a practice program written in the style the documents describe.',
  secondaryCta: { href: '#prepare', label: 'See the preparation plan' },
  wa: 'Hello Modern Age Coders, my teen in Quebec wants to study computer science at CEGEP and would like to start programming now. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; built from Québec.ca and the ministry\'s program documents',
  spec: [
    ['Pre-university', '200.C0, two years'],
    ['Technical', '420.B0, three years'],
    ['Public colleges', '48 CEGEPs, five English-language'],
    ['College year', 'Two 16-week terms'],
    ['Fall application', 'By 1 March'],
    ['Prepare in', 'Python, then objects and data'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CEGEP is Quebec\'s college level between secondary school and university. Computer science there means the two-year pre-university program Computer Science and Mathematics (200.C0) or the three-year technical program Computer Science Technology (420.B0). Modern Age Coders prepares secondary students in programming live online, in a batch or one to one, in its Python for Teens course.',

  picks: {
    eyebrow: 'Start programming now',
    h2: 'Three courses for a future CEGEP computer science student',
    lede: 'Python first, because it lets a student think about the algorithm rather than the syntax. Then data structures, which both programs ask for. The third is for students already at CEGEP age.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'CCSP / 01', title: 'Python for teens', note: 'Ages 13 to 18. From a first program to functions, lists, files and objects: the ground the 020W and 00Q2 competencies cover.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'CCSP / 02', title: 'Problem solving for teens', note: 'Algorithms and data structures, with sorting and searching, as in the 020X objective.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CCSP / 03', title: 'Python masterclass', note: 'For students 18 and over, including those already in a college program who want more practice.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What CEGEP is',
      h2: 'CEGEP in Québec.ca\'s own words',
      lede: 'Families arriving from other provinces often have no equivalent in mind. Québec.ca puts it plainly: "College is the first level of education at which schooling is not compulsory in Québec. College studies follow secondary school and precede university education."',
      body: [
        { kind: 'table', caption: 'College studies in Quebec, from Québec.ca\'s overview page (read 22 October 2026)', head: ['Point', 'What Québec.ca says'], rows: [
          ['How many colleges', '48 CEGEPs, which are public colleges, "five of which are English-language institutions"; "about 70 private colleges, more than a third of which are subsidized"; and 4 affiliated public institutions'],
          ['The college year', '"A college year is comprised of two 16-week terms (including the examination period), one in the fall (August to December) and one in the winter (January to May)."'],
          ['Course load', 'Most courses average 45 hours per term, "about three hours per week"; full time means at least 180 hours a term, or 165 if Physical Education is one of the courses'],
          ['Pre-university programs', 'Prepare students for university and "requires two years of full-time study"'],
          ['Technical programs', 'Prepare students for the job market and "requires three years of full-time study"; "Technical programs include at least one practicum in the workplace."'],
          ['General education', 'Every DCS includes general education, with complementary courses that can come from areas including "mathematics literacy and computer science"'],
          ['The R score', 'The "cote de rendement au collégial"; "Universities use the R score to analyze applications"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the R score matters to a computer science student',
          left: [
            'Québec.ca says universities use the R score to analyze applications, "particularly when a program has a quota, or as a minimum threshold for admission to certain programs". It is calculated from college results, so what counts for university entry is how the student does at CEGEP, not in Secondary V.',
            'For a student aiming at a university computer science program after 200.C0, the first term of programming matters as much as any later one. Arriving already fluent in a language makes that first term calmer.'
          ],
          rightH3: 'If the student is unsure',
          right: [
            'Québec.ca describes a "Springboard to a DCS" pathway for students who want to start college before choosing a program. It offers common courses and orientation activities, and a person may stay on it "for no more than three consecutive terms".',
            'Some students try a programming course there and decide; others come to CEGEP already sure. Either way, programming practice in secondary school costs nothing but time.'
          ] },
        { kind: 'source', html: 'Sources: Québec.ca, <a class="ag-inline-link" href="https://www.quebec.ca/en/education/cegeps-private-colleges/studying/overview" rel="noopener" target="_blank">Studying at CEGEP: overview</a> and <a class="ag-inline-link" href="https://www.quebec.ca/en/education/cegeps-private-colleges/studying/choosing-program" rel="noopener" target="_blank">Choosing a program of study</a>, read 22 October 2026. Modern Age Coders is not a college and is not connected with any CEGEP or with the Ministère de l\'Éducation.' }
      ]
    },
    {
      id: 'programs', tint: 'deep', eyebrow: 'The two programs',
      h2: 'Computer Science and Mathematics (200.C0) and Computer Science Technology (420.B0)',
      lede: 'Both programs lead to the same diploma, the Diploma of College Studies (DCS). They differ in length, in purpose and in what comes after. The figures below are from the ministry\'s program documents.',
      body: [
        { kind: 'table', caption: 'The two CEGEP computer science programs, from the ministry\'s program documents (read 22 October 2026)', head: ['', 'Computer Science and Mathematics (200.C0)', 'Computer Science Technology (420.B0)'], rows: [
          ['Type', 'Pre-university', 'Technical'],
          ['Length (Québec.ca)', 'Two years of full-time study', 'Three years of full-time study, with at least one workplace practicum'],
          ['Credits', '58', '91'],
          ['Instruction', '1560 periods: 660 general education, 900 program-specific', '2670 hours: 660 general education, 2010 program-specific'],
          ['What the program is for', '"preparing students for university programs in computer science, mathematics, engineering and most of the pure sciences programs"', 'Work in computer science technology, through 13 compulsory competencies and 6 or 7 more chosen by the college from a list of 15'],
          ['Field or sector', 'Field of study: Computer Science, Mathematics and Science', 'Technical sector 1: Administration, Commerce and Computer Technology'],
          ['Math at admission', 'Secondary V math in the TS or Science option, with Secondary V Chemistry and Physics', 'Secondary IV TS or Science, or Secondary V CST']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Choosing between them',
          left: [
            '200.C0 is a science program with computer science inside it: calculus, linear algebra, physics and chemistry share the timetable with four programming and discrete-math objectives. It suits a student who wants a university degree in computer science, mathematics or engineering.',
            '420.B0 is a programming program from the first week, built to lead to work, with a placement in industry. It suits a student who wants to build software sooner. Québec.ca\'s overview adds, in its description of technical programs, that this training "may also provide access to university, provided that certain requirements related to the chosen university program are met".'
          ],
          rightH3: 'What neither document names',
          right: [
            'Neither document names a programming language. They describe competencies, such as "Use programming languages" and "Develop programs to solve simple problems", and leave the language to each college. The 200.C0 document says it outright: "Each college determines the ways in which the educational aims, common competencies, goals, objectives and standards are implemented."',
            'So no one can promise which language a given CEGEP will teach in first term. What a student can do is arrive fluent in one language and comfortable with the ideas, which carry over to any.'
          ] },
        { kind: 'source', html: 'Sources: ministry program documents <a class="ag-inline-link" href="https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/programmes-etudes-preuniversitaires/main-program/200-C0-computer-science-mathematic.pdf" rel="noopener" target="_blank">Computer Science and Mathematics (200.C0)</a> and <a class="ag-inline-link" href="https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/Programmes-etudes-techniques/PE01-420B0-Computer-Science.pdf" rel="noopener" target="_blank">Computer Science Technology (420.B0)</a>, linked from Québec.ca\'s <a class="ag-inline-link" href="https://www.quebec.ca/en/education/cegeps-private-colleges/services/programmes/pre-university-programs" rel="noopener" target="_blank">pre-university</a> and technical program lists, read 22 October 2026.' }
      ]
    },
    {
      id: 'skills', tint: 'tint', eyebrow: 'What they teach',
      h2: 'The programming competencies, objective by objective',
      lede: 'The ministry documents set out each competency with its elements and performance criteria. These are the ones about programming and the mathematics behind it, shortened. They are the clearest description anywhere of what a CEGEP computer science student is expected to do.',
      body: [
        { kind: 'table', caption: 'Programming and computing objectives in 200.C0 and 420.B0 (ministry program documents, read 22 October 2026)', head: ['Code', 'Program', 'Statement of the competency', 'Selected elements and criteria'], rows: [
          ['020V', '200.C0', '"Apply basic concepts in discrete mathematics to problem solving"', 'Set theory and logic; proofs; modular arithmetic and number systems; recursive functions; graphs; Boolean algebra; Euclid\'s algorithm'],
          ['020W', '200.C0', '"Develop programs to solve simple problems"', '"Design of an effective algorithm"; "Proper validation of an algorithm by means of a complete set of tests"; the basic concepts of object-oriented programming: class, object, method, attribute'],
          ['020X', '200.C0', '"Organize and manipulate data"', 'Object-oriented development with encapsulation, inheritance and polymorphism; choosing data structures; "Correct use of updating, sorting and search techniques with data in memory"; reading and writing files'],
          ['020Y', '200.C0', '"Design and develop programs in a graphic environment"', 'Functional and user-interface requirements; a user-friendly interface; program libraries; modules; validation'],
          ['020Z', '200.C0', 'Integration of the program\'s learning', '"Through a team project", with an oral presentation and a written report'],
          ['00Q2', '420.B0', '"Use programming languages"', 'Analyze the problem; translate the algorithm into a programming language; debug the code; implement the functional test plan'],
          ['00Q3', '420.B0', '"Solve computer-related problems using mathematics"', 'Numbers in different base systems; two-dimensional figures as digital images; Boolean algebra and truth tables; average, median, variance and standard deviation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The pattern across both programs',
          left: [
            'Read the criteria together and one habit keeps returning: test what you build. 020W asks for "a complete set of tests"; 00Q2 ends with implementing "the functional test plan". Neither treats a program that merely runs as finished.',
            'The other recurring idea is analysis before code: identifying the data, the results wanted and the processing required, then designing the algorithm, then translating it. That is the order we teach in, at every age.'
          ],
          rightH3: 'The technical program\'s options',
          right: [
            'Beyond its 13 compulsory competencies, 420.B0 lists 15 from which each college picks 6 or 7. They range from networks and servers to software: "Develop transactional Web applications", "Develop gaming or simulation applications" and "Develop applications for connected objects", among others.',
            'Two CEGEPs offering 420.B0 can therefore have quite different second and third years. Comparing those choices is the strongest reason to read each college\'s own program page before applying.'
          ] }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'A practice program',
      h2: 'Practice in the style of 020W and 00Q3: number bases, Euclid and a test plan',
      lede: 'A program we wrote for this page. It touches three of the objectives above: converting numbers between bases (00Q3), Euclid\'s algorithm (020V), and validating code with a complete set of tests (020W). It is our practice material, not taken from any college course.',
      body: [
        { kind: 'code', label: 'Our program in Python', lang: 'python', code: BASES },
        { kind: 'code', label: 'Output (run on 22 October 2026)', lang: 'text', code: BASES_OUT, note: 'The test plan was written before the functions, as a list of cases with the answers worked out by hand: 13 in binary is 1101 (8 + 4 + 1), 255 in hexadecimal is FF (15 x 16 + 15), and the greatest common divisor of 84 and 36 is 12. Then the code was written to make all six pass.' },
        { kind: 'ol', mt: true, items: [
          '<b>Analyze the problem.</b> Inputs: a whole number and a base from 2 to 16. Output: a string of digits. The awkward case is zero, which the repeated-division loop would turn into an empty string, so it gets its own line.',
          '<b>Design the algorithm.</b> Divide by the base, keep the remainder as the next digit from the right, repeat with the quotient until it reaches 0. For Euclid: replace (a, b) with (b, a mod b) until b is 0; a is the answer.',
          '<b>Write the test plan first.</b> One ordinary case per feature, plus the edge cases: zero, a one-digit result, and two numbers with no common factor.',
          '<b>Translate and debug.</b> Write the code, run the plan, and fix the first failing case before the next. A test that has never failed has not yet proved anything.',
          '<b>Extend it yourself.</b> Add a test for base 16 with 4096 (expected 1000), then write from_base, the reverse conversion, and test that from_base(to_base(n, b), b) gives n back for many values of n.'
        ] }
      ]
    },
    {
      id: 'admission', tint: 'tint', eyebrow: 'Admission',
      h2: 'Applying to CEGEP: eligibility, the regional services and the dates',
      lede: 'Québec.ca\'s admission page sets out who is eligible for a DCS program, how to apply and when. Program conditions such as the math above sit on top of these general rules.',
      body: [
        { kind: 'two',
          leftH3: 'Who is eligible',
          left: [
            'For a program leading to a DCS, a student needs a Secondary School Diploma (SSD), or a Diploma of Vocational Studies with certain secondary subjects passed, among them the Secondary IV mathematics program, or instruction or experience the college accepts.',
            'Then the program\'s own conditions apply. Québec.ca: "Some college programs also have specific requirements for the program you choose." For 200.C0 those include Secondary V math in TS or Science; for 420.B0, Secondary IV TS or Science, or Secondary V CST.'
          ],
          rightH3: 'How and when to apply',
          right: [
            'Applications to most CEGEPs go through a regional admission service; in the Montreal area that is the "Service régional d\'admission du Montréal métropolitain (SRAM)". Québec.ca lists a few CEGEPs that take applications directly instead, so check each college\'s instructions.',
            'Québec.ca gives the deadlines as "Fall term: March 1" and "Winter term: November 1". In our reading, a student entering in the fall of 2027 applies by 1 March 2027; the page itself gives no year.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Secondary IV:</b> choose a math option that keeps the program open. For 200.C0, that means TS or Science, continued into Secondary V.',
          '<b>Autumn of Secondary V:</b> read each college\'s program page for 200.C0 or 420.B0, including its optional competencies, and visit if you can.',
          '<b>By 1 March of Secondary V:</b> apply through the regional admission service, or directly to a college that asks for that.',
          '<b>Spring of Secondary V:</b> finish the required courses. The math, chemistry and physics conditions are checked against final results.',
          '<b>Summer before CEGEP:</b> keep programming. The first term starts in August, and its first programming course rewards a student who arrives fluent.'
        ] },
        { kind: 'source', html: 'Source: Québec.ca, <a class="ag-inline-link" href="https://www.quebec.ca/en/education/cegeps-private-colleges/studying/admission" rel="noopener" target="_blank">Admission to CEGEP</a>, read 22 October 2026. Deadlines and procedures can change; the regional service and the college have the last word.' }
      ]
    },
    {
      id: 'prepare', tint: 'deep', eyebrow: 'How to prepare',
      h2: 'Preparing for CEGEP computer science during secondary school',
      lede: 'Our plan, built backwards from the competencies above. It assumes a student starting in Secondary III or IV with weekly classes; a Secondary V student compresses it into a year.',
      body: [
        { kind: 'table', caption: 'From first program to CEGEP-ready, mapped to the ministry objectives (our plan)', head: ['Stage', 'What the student learns', 'Which objective it prepares'], rows: [
          ['1. Fluency in one language', 'Python: variables, conditions, loops, functions, lists and strings, written from a blank file', '020W and 00Q2: translating an algorithm into a language'],
          ['2. Algorithms on paper first', 'Describing a solution in steps before typing it; tracing by hand', '020W: "Design of an effective algorithm"'],
          ['3. Testing as a habit', 'A written test plan for every program, with edge cases', '020W and 00Q2: the complete set of tests and the functional test plan'],
          ['4. Data and objects', 'Dictionaries, files, sorting and searching, then classes, objects, methods and attributes', '020X: organizing data; object-oriented basics'],
          ['5. A program with an interface', 'A small windowed or web program someone else can use', '020Y and the technical program\'s application competencies'],
          ['6. The math underneath', 'Number bases, Boolean logic, modular arithmetic, a first look at proof by induction', '020V and 00Q3']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we do not do',
          left: [
            'We do not teach students to paste AI-generated code. The ministry\'s criteria ask for analysis, design, debugging and validation, and a student who skips them with an AI tool arrives at CEGEP unable to do any of the four. ChatGPT needs a parent\'s permission for anyone under 18.',
            'We use AI the other way round: a student may ask an AI tool to explain an error message, then must fix the bug and explain the fix themselves.'
          ],
          rightH3: 'Alongside the secondary school courses',
          right: [
            'Programming does not replace the Secondary V math, chemistry and physics that 200.C0 asks for. A student short on Secondary V math is better served by math help first; our <a class="ag-inline-link" href="/online-math-tutor-canada">online math tutoring for Canada</a> covers it.',
            'For a student who enjoys contests, the Canadian Computing Competition is a good test of stages 1 to 3; our <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> explains how students enter through their school.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages on the way to CEGEP computer science',
    lede: 'Our stages, used in the first class to decide where a student begins.',
    table: { caption: 'From curious to CEGEP-ready (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Curious', 'Has tried block code or tutorials, but not written a program alone'],
      ['2. Writing', 'Writes short Python programs with loops, functions and lists'],
      ['3. Testing', 'Plans an algorithm, writes a test plan and debugs methodically'],
      ['4. Ready', 'Organizes data with classes and files, and has finished a project someone else used']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 by the end of Secondary IV leaves comfortable time for stages 3 and 4 before August of the CEGEP year.',
      'Ask your teen to explain a program they wrote. If they can say why each line is there, they are further along than a long list of tutorials suggests.'
    ] },
    right: { h3: 'For students', ps: [
      'Write the test cases before the code. It feels slow for a week and saves hours every month after.',
      'Finish small things. One complete program with tests teaches more than five abandoned ones.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students heading to CEGEP computer science',
    lede: 'Taught live online in English by a regular teacher, in a batch or one to one, at times set in Eastern time for Quebec.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Secondary I to III', courses: [
        { code: 'CCSP / FIRST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Logic and sequencing before typed code.' },
        { code: 'CCSP / FIRST / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Math ideas explored in Python.' },
        { code: 'CCSP / FIRST / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages and small games.' }
      ] },
      { num: 'II', h3: 'Secondary IV and V', sub: 'Ages 15 to 17', courses: [
        { code: 'CCSP / SEC / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A second language, strongly object-oriented.' },
        { code: 'CCSP / SEC / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC preparation', blurb: 'Contest problems to sharpen algorithms.' },
        { code: 'CCSP / SEC / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control before the first team project.' }
      ] },
      { num: 'III', h3: 'At CEGEP age', sub: 'Ages 17 and up', courses: [
        { code: 'CCSP / COL / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The systematic treatment, for ages 18 and up.' },
        { code: 'CCSP / COL / 02', slug: 'python-web-development-django-flask-course', title: 'Python web development', blurb: 'Web applications with Django and Flask.' },
        { code: 'CCSP / COL / 03', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'The calculus and linear algebra of 200.C0.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Programming classes for Quebec secondary students',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in Eastern time.' },
      { time: 'Weekends', l: 'Longer project sessions on weekend mornings.' },
      { time: '1-on-1', l: 'Paced to Secondary V and the CEGEP calendar.' }
    ],
    cells: [
      { h3: 'Algorithm first', p: 'Steps on paper before code on screen.' },
      { h3: 'Tests every time', p: 'A test plan for each program.' },
      { h3: 'Real projects', p: 'Programs other people can use.' },
      { h3: 'In English', p: 'Live, with a regular teacher.' },
      { h3: 'No pasted code', p: 'Students write and explain their own.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Programs our students have finished',
  projectsLede: 'Projects at the level CEGEP\'s first year asks for. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents on Google, quoted without edits.',

  fees: {
    h2: 'Fees',
    lede: 'CEGEP itself is a matter between the student and the college. Our classes are paid as a monthly fee for eight live classes a month, with no contract, so a student can pause during exams or stop when college begins.',
    free: ['A free first class', 'A short programming task to place the student', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly payments'],
    one: ['A teacher to yourself', 'Planned around Secondary V', 'Built on your own projects']
  },

  faq: {
    eyebrow: 'Questions from Quebec families',
    h2: 'CEGEP computer science: common questions',
    items: [
      { q: 'What is CEGEP?', a: 'It is the college level in Quebec. Québec.ca describes college as the first level of education at which schooling is not compulsory, after secondary school and before university. There are 48 CEGEPs, which are public colleges, five of them English-language, plus about 70 private colleges.' },
      { q: 'Which CEGEP programs teach computer science?', a: 'The two main ones are the pre-university program Computer Science and Mathematics (200.C0), two years, and the technical program Computer Science Technology (420.B0), three years with at least one workplace practicum. Both lead to a Diploma of College Studies.' },
      { q: 'What math do I need for CEGEP computer science?', a: 'For 200.C0, the ministry document lists Secondary V math in the Technical and Scientific option or the Science option, with Secondary V Chemistry and Physics. For 420.B0, it accepts Secondary IV TS or Science, or Secondary V CST.' },
      { q: 'What programming language do CEGEPs teach?', a: 'The ministry program documents do not name one. They describe competencies such as using programming languages and developing programs, and each college decides how to implement them. A student who is fluent in one language, such as Python, adapts quickly to another.' },
      { q: 'When is the CEGEP application deadline?', a: 'Québec.ca gives March 1 for the fall term and November 1 for the winter term. A student starting in the fall of 2027 would apply by 1 March 2027. Most applications go through a regional admission service, such as SRAM in the Montreal area.' },
      { q: 'What is the R score?', a: 'It is the cote de rendement au collégial, a measure of college performance. Québec.ca says universities use it to analyze applications, particularly for programs with a quota or a minimum threshold. It is based on CEGEP results.' },
      { q: 'How should a secondary student prepare for CEGEP computer science?', a: 'Learn one language well, practise designing algorithms before coding, write test plans, then move on to data structures and objects. Keep the math option that the program asks for. Our plan on this page maps each step to the ministry\'s objectives.' },
      { q: 'Is 200.C0 or 420.B0 better for me?', a: 'Neither is better in general. 200.C0 prepares for university programs in computer science, mathematics and engineering; 420.B0 prepares for work, with a practicum, and Québec.ca notes that technical training may also open the way to university when a university program\'s requirements are met.' },
      { q: 'Are your classes a CEGEP or connected with one?', a: 'No. We are an online school that teaches programming and math alongside secondary school. We are not a college, we grant no credits and we have no connection with any CEGEP or with the Ministère de l\'Éducation.' },
      { q: 'When are your classes for Quebec students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are in English, in Eastern time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for students on the way to computer science.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our pages for families across Canada.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'For the Secondary V math the programs ask for.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'A national contest written through school.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Contest programming beyond Junior.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI classes in Canada', p: 'For students drawn to machine learning.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Analysis before code.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'The debugging 00Q2 asks for.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'Tracing a program by hand.' },
      { href: '/how-to-build-a-coding-portfolio', label: 'Build a coding portfolio', p: 'Projects worth showing a college.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the student\'s secondary year, math option and any programming done so far. The first class sets a short task in Python; by the end, the teacher can place the student on our four stages and suggest a plan to the CEGEP year.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a live class, and the <a class="ag-inline-link" href="/courses">courses page</a> lists every syllabus.',
    note: 'Classes run over live video with our teachers in India, in English, at times set in Eastern time for Quebec. There is no campus to visit.',
    formNote: 'The first class is free; no card is asked for.'
  },

  footer: {
    cols: [
      { h4: 'Programming', links: [
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer' },
        { href: '/how-to-build-a-coding-portfolio', label: 'Coding portfolio' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Tests before code'
  },

  personalityCss: `
.ag-root.ag-ccsp .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-ccsp .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ccsp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ccsp .ag-table td { line-height: 1.55; }
.ag-root.ag-ccsp .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-ccsp .ag-steps { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Québec.ca Studying at CEGEP (overview, admission, choosing a program), Québec.ca pre-university and technical program lists, and the ministry program documents Computer Science and Mathematics (200.C0) and Computer Science Technology (420.B0), read raw on 22 October 2026.',
    localProject: 'Our Python practice program for number bases and Euclid\'s algorithm with a six-case functional test plan written before the code (6 of 6 pass, run 22 October 2026), mapped to objectives 00Q3, 020V and 020W; a six-stage preparation plan mapped to the ministry objectives; a five-step admission timeline with years labelled ours. Lesson family: write the test plan before the code.',
    requiredMentions: ['College is the first level of education at which schooling is not compulsory in Québec.', 'five of which are English-language institutions', 'A college year is comprised of two 16-week terms', 'for no more than three consecutive terms', 'preparing students for university programs in computer science, mathematics, engineering and most of the pure sciences programs', 'Proper validation of an algorithm by means of a complete set of tests', 'Develop applications for connected objects', 'Each college determines the ways in which the educational aims', 'Service régional d\'admission du Montréal métropolitain (SRAM)', '6 of 6 tests pass'],
    sources: [
      { claim: 'What CEGEP is; number of colleges; terms; course load; DCS types; R score.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/overview' },
      { claim: 'Admission eligibility, regional admission services and deadlines.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/admission' },
      { claim: 'Springboard to a DCS, at most three consecutive terms.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/choosing-program' },
      { claim: '200.C0 aim, credits, periods, objectives 020V to 020Z, implementation by each college.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/programmes-etudes-preuniversitaires/main-program/200-C0-computer-science-mathematic.pdf' },
      { claim: '420.B0 credits, hours, compulsory and optional competencies, 00Q2 and 00Q3, admission math.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/Programmes-etudes-techniques/PE01-420B0-Computer-Science.pdf' },
      { claim: 'The list of pre-university programs including 200.C0.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/services/programmes/pre-university-programs' }
    ],
    rejectedClaims: [
      'The names of individual CEGEPs, including those that take applications directly: not reproduced.',
      'Which programming language a CEGEP teaches: the ministry documents name none; the page says so.',
      'R score values needed for any university program: not printed; no promise of admission.',
      'A year attached to the March 1 and November 1 deadlines by Québec.ca: none given; our years are labelled ours.',
      'That one program is better than the other: refused; the page describes what each is for.',
      'Any connection with a CEGEP or the Ministère de l\'Éducation, or any credit granted by us: none, and the page says so.'
    ]
  }
};
