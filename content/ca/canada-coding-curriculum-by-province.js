'use strict';
// Coding and computer science in each Canadian school curriculum (ag- reference page; Canada cluster Plan 2, row 62).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// One row per province and territory. Where a government host blocked us or was offline, the page says "not verified".
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/ and
// ca/src-pilots/canada-coding-curriculum-by-province/):
//  - Ontario DCP content API (ws.api.dcp.edu.gov.on.ca), facts-schools-contests.md rows 1-37: C3 overall expectation,
//    Grades 1-8: "solve problems and create computational representations of mathematical situations using coding
//    concepts and skills"; C3.1 ladder by grade ("sequential events" G1; "sequential and concurrent events" G2;
//    "sequential, concurrent, and repeating events" G3; "sequential, concurrent, repeating, and nested events" G4;
//    "conditional statements and other control structures" G5; "efficient code" G6; "events influenced by a defined count
//    and/or subprogram and other control structures" G7; "the analysis of data in order to inform and communicate
//    decisions" G8); Grade 6 C3.2 "describe how changes to the code affect the outcomes and the efficiency of the code";
//    Science and Technology 2022 Grade 6 A2 "use coding in investigations and to model concepts..."; MTH1W (2021) "Students
//    will use mathematical processes, mathematical modelling, and coding to make sense of the mathematics they are
//    learning"; C2.3 "read code to predict its outcome, and alter code to adjust constraints, parameters, and outcomes";
//    current computer studies list ICS3U, ICD2O (2023), ICS4U, ICS3C, ICS4C; ICD2O "investigate artificial intelligence,
//    cybersecurity, and other emerging digital technologies"; ICD2O strand titles; ICS2O appears in the 2008 PDF but not on
//    the current list (two facts side by side, no replacement claimed).
//  - ontario.ca high-school graduation page: "Ministry of Education"; computer studies is in the STEM group of the
//    compulsory credits ("Of the 17 compulsory credits, you must complete 1 from the following group:").
//  - curriculum.gov.bc.ca (rows 66-73): ADST 6-7 "a minimum of three modules"; ADST 6 Computational Thinking "simple
//    algorithms", "visual programming", "for example, Kodu, Scratch"; ADST 10-12 list (Computer Studies 10, Web Development
//    10, Computer Programming 11 and 12, Computer Information Systems 11 and 12, Robotics 11 and 12); CP11 "Key components
//    are decomposition, patterns and generalizations, abstraction, and algorithmic thinking."; CP12 "higher-level
//    structures, such as functions, methods, or classes, that help improve the organization of source code"; Computer
//    Science 11 and 12 listed under Mathematics. news.gov.bc.ca/ministries/education-and-child-care: ministry named
//    "Education and Child Care" (bc-ministry-news.html). BC curriculum host timed out on a second visit today; the
//    earlier saved copies are used.
//  - alberta.ca: "Alberta Education and Childcare" (diploma-exams-overview); "By integrating topics like artificial
//    intelligence, computer science and money management, Alberta's renewed curriculum will help students prepare";
//    "ahead of mandatory implementation in September 2027"; New K to 6 math implemented under 2022/2023. CTS Computing
//    Science: UNVERIFIED (old PDF is a "We've Moved" notice, LearnAlberta is JavaScript only, open.alberta.ca 403).
//  - saskatchewan.ca ministries/education: "Ministry of Education"; curriculum.gov.sk.ca lists Computer Science 20 and
//    Computer Science 30; CS 20 page: "teachers developed, adapted or identified resources/materials for Computer Science
//    20 and other science curricula".
//  - edu.gov.mb.ca/k12/cur/cs: "Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science"; title names
//    "Manitoba Education and Early Childhood Learning". Framework for Learning news, 14 September 2026: "Two new Grade 9
//    Mathematics courses, incorporating an enhanced focus on financial literacy, are posted for pilot and voluntary
//    implementation in 2026/27".
//  - curriculum.nbed.ca: CS 110 "Learners will gain a strong foundation in coding while demonstrating operational skills,
//    using computational thinking"; AI-assisted debugging tools named (paraphrased, the source uses a non-breaking hyphen);
//    course list CS 110, CS 120, Cybersecurity 120, Cybersecurity and Technical Support 110, Technology 9. Department name
//    NOT verified (www2.gnb.ca returned a Cloudflare 403).
//  - elearning.ednet.ns.ca (Nova Scotia Virtual School): CP12 "Modules: Problem Solving in Computer Programming,
//    Fundamentals of Programming, Applied Problem Solving, Project Development." and "CodeHS: NSVS Computer Programming 12
//    (Java)." curriculum.novascotia.ca and novascotia.ca unreachable: department name NOT verified.
//  - Quebec: quebec.ca education page names the "Ministère de l'Éducation"; the QEP secondary page covers "Secondary I
//    to Secondary V" and its subject list names no stand-alone computer science course (observation of the list);
//    quebec.ca pre-university list includes "Computer Science and Mathematics (200.C0)"; technical sector 1 includes
//    "420.B0 - Computer Science Technology".
//  - ece.gov.nt.ca: "Curriculum in the Northwest Territories is managed by the Department of Education, Culture and
//    Employment (ECE)"; "partnering with the British Columbia Ministry of Education to start using that province's
//    curriculum"; BC's curriculum "teaches students the ability to design, make, acquire, and apply skills and
//    technologies"; 2022-23 "final year that NWT students take the Alberta Achievement Tests (AATs)".
//  - NOT verified, stated plainly on the page: Newfoundland and Labrador (gov.nl.ca HTTP 500 on 21 and 22 October 2026),
//    Prince Edward Island (offline notice 21 October, Radware bot check 22 October: stopped), Yukon (yukon.ca 403),
//    Nunavut (gov.nu.ca 403). No claim that Yukon follows BC.
// Our own material, labelled on the page: the freeze-thaw worked example in Python (run under CPython on 22 October
// 2026: 6 freeze-thaw days, longest run 2, 16 checks against 10, and 7260 against 120 on a 120-day winter), the
// arithmetic 120 x 121 / 2 = 7260, the four-step parent checklist, the grade-band table and the four-stage ladder.
// Lesson family: decomposition and efficiency (the same task written two ways and counted).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FT = `# Our worked example: freeze-thaw days (written by Modern Age Coders)
highs = [3, -2, 4, 1, 0, 5, 2, -6, 1, 3]
lows  = [-4, -9, -1, -3, -5, -2, 1, -11, -2, -1]

def is_freeze_thaw(high, low):
    # above zero by day, below zero by night
    return high > 0 and low < 0

def mark_days(highs, lows):
    return [is_freeze_thaw(h, l) for h, l in zip(highs, lows)]

def longest_run_slow(flags):
    longest, checks = 0, 0
    for start in range(len(flags)):
        run = 0
        for i in range(start, len(flags)):
            checks += 1
            if not flags[i]:
                break
            run += 1
        longest = max(longest, run)
    return longest, checks

def longest_run_fast(flags):
    longest, run, checks = 0, 0, 0
    for f in flags:
        checks += 1
        run = run + 1 if f else 0
        longest = max(longest, run)
    return longest, checks

flags = mark_days(highs, lows)
print("freeze-thaw days:", sum(flags))
print("slow:", longest_run_slow(flags))
print("fast:", longest_run_fast(flags))

# a 120-day winter where every day is freeze-thaw
winter = [True] * 120
print("checks on 120 days:", longest_run_slow(winter)[1], "vs", longest_run_fast(winter)[1])`;

const FT_OUT = `freeze-thaw days: 6
slow: (2, 16)
fast: (2, 10)
checks on 120 days: 7260 vs 120`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CURRICULUM', blurb: 'Where coding and computer science sit in every provincial and territorial curriculum, from each government\'s own pages, with the gaps we could not verify named plainly.' },
  slug: 'canada-coding-curriculum-by-province',
  code: 'ccbp',
  accent: '#26165C',
  accentRationale: 'Coding curriculum by province, Canada: a deep ink violet #26165C, the allocated Canada accent for this row, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 14.66 on the paper #FBF8F2 (13.78 and 12.61 on the two tints)',
  pageType: 'market',
  market: CA,
  courseCodePage: false,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Coding curriculum by province',
  title: 'Coding Curriculum by Province: Canada\'s Schools Compared',
  description: 'Where coding and computer science appear in each Canadian province and territory curriculum, named by each ministry\'s own pages, with the unverified gaps.',
  ogDescription: 'Thirteen rows, one per province and territory: the ministry, the coding or computer science courses, one verified fact, and a plain note where a government site could not be read.',
  twitterDescription: 'Coding and computer science in every Canadian curriculum, row by row, from the governments\' own pages.',
  pageName: 'Canada Coding Curriculum by Province',
  webPageDescription: 'A reference for Canadian parents and students on where coding and computer science appear in each provincial and territorial school curriculum, built from ministry pages read on 22 October 2026.',
  courseDescription: 'Live online coding classes for Canadian students, taught alongside any provincial curriculum, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Coding curriculum by province',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#glance', label: 'All 13 rows' },
    { href: '#ontario', label: 'Ontario' },
    { href: '#west', label: 'BC and the NWT' },
    { href: '#prairies', label: 'Prairies' },
    { href: '#example', label: 'Worked example' }
  ],
  eyebrow: 'Canada &middot; School curricula &middot; Coding and computer science',
  h1: 'Coding curriculum by province in Canada',
  lede: 'Canada has no national school curriculum. Each province and territory writes or adopts its own, so "does my child learn coding at school?" has thirteen different answers. This page gives all thirteen in one table, taken from each government\'s own curriculum pages as they read on 22 October 2026: the ministry or department, where coding or computer science appears, and one fact we checked word for word. Several government sites were offline or blocked our requests that day. For those rows we say "not verified" and leave the cell empty of guesses, because a wrong course name is worse than a missing one.',
  secondaryCta: { href: '#glance', label: 'See the 13 rows' },
  wa: 'Hello Modern Age Coders, we are in Canada and would like coding classes that sit alongside our provincial curriculum. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; every row checked against a government page, or marked not verified',
  spec: [
    ['Covers', '10 provinces, 3 territories'],
    ['Read on', '22 October 2026'],
    ['Verified rows', '9 of 13, in whole or part'],
    ['Not verified', 'NL, PEI, Yukon, Nunavut'],
    ['Strongest detail', 'Ontario, BC'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Taught', 'Live online, batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Each province sets its own coding curriculum. Ontario puts coding in Grades 1 to 8 math and offers ICS3U and ICS4U; BC uses ADST and Computer Science 11 and 12; Saskatchewan and Manitoba run computer science courses. Modern Age Coders teaches live online alongside any of them, in a batch or one to one, including its Ontario Computer Science Companion.',

  picks: {
    eyebrow: 'Learn alongside school',
    h2: 'Three courses that sit next to a provincial curriculum',
    lede: 'The first follows Ontario\'s senior computer science courses closely. The other two build the habits every province\'s coding expectations lean on, at two ages.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'CCBP / 01', title: 'Ontario Computer Science Companion', note: 'Grades 11 and 12. Taught alongside ICS3U and ICS4U in Python or Java. We teach the skills; we do not grant Ontario credits.' },
      { course: 'maths-through-coding', code: 'CCBP / 02', title: 'Maths through coding', note: 'Ages 10 to 15. Math ideas explored in Python, close in spirit to Ontario\'s coding strand in elementary math and MTH1W.' },
      { course: 'python-ai-kids-masterclass', code: 'CCBP / 03', title: 'Python and AI for kids', note: 'For younger students moving from block code such as Scratch to typed Python, the step BC\'s ADST modules point towards.' }
    ]
  },

  sections: [
    {
      id: 'glance', tint: 'tint', eyebrow: 'All thirteen',
      h2: 'Coding and computer science in each province and territory',
      lede: 'One row per jurisdiction. The ministry or department column uses the name printed on that government\'s own page. "Not verified" means we could not read a primary source on 22 October 2026; it does not mean the subject is absent there.',
      body: [
        { kind: 'table', caption: 'Coding and computer science in Canadian school curricula, from government pages read on 22 October 2026', head: ['Province or territory', 'Ministry or department, as its own page names it', 'Where coding or computer science appears', 'One verified fact', 'Status'], rows: [
          ['Ontario', 'Ministry of Education', 'Grades 1 to 8 math (coding expectations); Grade 9 MTH1W; Grade 10 ICD2O; ICS3U, ICS3C, ICS4U, ICS4C', 'Every grade from 1 to 8 carries the same coding expectation: "solve problems and create computational representations of mathematical situations using coding concepts and skills".', 'Verified'],
          ['Quebec', 'Ministère de l\'Éducation', 'No stand-alone computer science course in the Secondary I to V subject list; college programs 200.C0 and 420.B0', 'Québec.ca lists "Computer Science and Mathematics (200.C0)" among the main pre-university college programs.', 'Verified'],
          ['British Columbia', 'Education and Child Care', 'ADST modules in Grades 6 and 7; ADST 10 to 12 computing courses; Computer Science 11 and 12 under Mathematics', 'The Grade 6 Computational Thinking module names "visual programming", "for example, Kodu, Scratch".', 'Verified'],
          ['Alberta', 'Alberta Education and Childcare', 'Draft Grades 7 to 9 curriculum names computer science; high school computing options not verified', 'The draft is being piloted "ahead of mandatory implementation in September 2027".', 'Partly verified'],
          ['Saskatchewan', 'Ministry of Education', 'Computer Science 20 and Computer Science 30', 'The curriculum site files Computer Science 20 with "other science curricula".', 'Verified'],
          ['Manitoba', 'Manitoba Education and Early Childhood Learning', 'Computer Science framework for the senior years', 'The framework covers "Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science".', 'Verified'],
          ['New Brunswick', 'Not verified (the provincial government site blocked us)', 'Computer Science 110 and 120, Cybersecurity 120, Cybersecurity and Technical Support 110, Technology 9', 'Computer Science 110: "Learners will gain a strong foundation in coding while demonstrating operational skills, using computational thinking".', 'Partly verified'],
          ['Nova Scotia', 'Not verified (the curriculum site did not connect)', 'Computer Programming 12, offered through the Nova Scotia Virtual School', 'The virtual school lists "CodeHS: NSVS Computer Programming 12 (Java)."', 'Partly verified'],
          ['Prince Edward Island', 'Not verified', 'Not verified', 'The government site was offline on 21 October and showed a bot check on 22 October 2026, so we stopped.', 'Not verified'],
          ['Newfoundland and Labrador', 'Not verified', 'Not verified', 'The government site returned server errors on 21 and 22 October 2026.', 'Not verified'],
          ['Yukon', 'Not verified', 'Not verified', 'yukon.ca refused our request with a security challenge. We make no claim about which curriculum Yukon uses.', 'Not verified'],
          ['Northwest Territories', 'Department of Education, Culture and Employment (ECE)', 'Moving to an adapted version of BC\'s curriculum, including its design and technology learning', 'ECE says it is "partnering with the British Columbia Ministry of Education to start using that province\'s curriculum".', 'Verified'],
          ['Nunavut', 'Not verified', 'Not verified', 'The territorial government site refused our request with a security challenge.', 'Not verified']
        ] },
        { kind: 'p', mt: true, html: 'How to read the status column: "verified" means the course names and the quoted fact came from a government or government-run curriculum page that we saved as a raw file on 22 October 2026. "Partly verified" means the course list came from a provincial curriculum or virtual-school page, but the ministry name or a wider picture did not. Course names and offerings vary by school board and by school, so a course on a provincial list may not be taught at a particular school.' },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">Ontario curriculum site</a> (read through its public content service), <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst" rel="noopener" target="_blank">BC curriculum</a>, <a class="ag-inline-link" href="https://www.alberta.ca/curriculum-how-we-got-here" rel="noopener" target="_blank">alberta.ca</a>, <a class="ag-inline-link" href="https://curriculum.gov.sk.ca/" rel="noopener" target="_blank">Saskatchewan curriculum</a>, <a class="ag-inline-link" href="https://www.edu.gov.mb.ca/k12/cur/cs/index.html" rel="noopener" target="_blank">Manitoba computer science framework</a>, <a class="ag-inline-link" href="https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/" rel="noopener" target="_blank">New Brunswick Computer Science 110</a>, the <a class="ag-inline-link" href="https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/" rel="noopener" target="_blank">Nova Scotia Virtual School</a>, <a class="ag-inline-link" href="https://www.quebec.ca/en/education" rel="noopener" target="_blank">Québec.ca</a> and <a class="ag-inline-link" href="https://www.ece.gov.nt.ca/en/services/jk-12-school-curriculum" rel="noopener" target="_blank">NWT ECE</a>, all read 22 October 2026. Modern Age Coders is not connected with any ministry, department or school board.' }
      ]
    },
    {
      id: 'ontario', tint: 'deep', eyebrow: 'Ontario',
      h2: 'Ontario: coding from Grade 1 math to Grade 12 computer science',
      lede: 'Ontario has the most detailed published coding expectations in the country. Its 2020 elementary math curriculum puts coding inside the algebra strand for every grade, and each grade adds one idea to the last. The table quotes the expectation C3.1 as the ministry\'s curriculum service returns it.',
      body: [
        { kind: 'table', caption: 'What Ontario\'s C3.1 coding expectation adds in each grade (Mathematics, 2020), quoted from the Ontario curriculum service, read 22 October 2026', head: ['Grade', 'C3.1 asks for code that involves', 'In plain words (ours)'], rows: [
          ['1', '"sequential events"', 'Steps that run one after another'],
          ['2', '"sequential and concurrent events"', 'Two things happening at the same time'],
          ['3', '"sequential, concurrent, and repeating events"', 'Loops'],
          ['4', '"sequential, concurrent, repeating, and nested events"', 'A loop inside a loop'],
          ['5', '"conditional statements and other control structures"', 'If this, then that'],
          ['6', '"efficient code" with "conditional statements and other control structures"', 'The same result in fewer steps'],
          ['7', '"events influenced by a defined count and/or subprogram and other control structures"', 'Counted loops and reusable pieces'],
          ['8', '"the analysis of data in order to inform and communicate decisions"', 'Code that answers a question from data']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Grade 9 and Grade 10',
          left: [
            'The de-streamed Grade 9 course MTH1W (issued 2021) keeps coding in math. Its course description says "Students will use mathematical processes, mathematical modelling, and coding to make sense of the mathematics they are learning", and expectation C2.3 asks students to "read code to predict its outcome, and alter code to adjust constraints, parameters, and outcomes".',
            'In Grade 10 the current list adds ICD2O, Digital Technology and Innovations in the Changing World, issued in 2023 as an open course. Its description has students "investigate artificial intelligence, cybersecurity, and other emerging digital technologies", and its strands are "Computational Thinking and Making Connections", "Hardware, Software, and Innovations" and "Programming".'
          ],
          rightH3: 'Grades 11 and 12',
          right: [
            'The senior courses date from 2008: ICS3U and ICS3C in Grade 11, ICS4U and ICS4C in Grade 12, university and college preparation respectively. ICS4U needs ICS3U first; ICS3U itself has no prerequisite. Our <a class="ag-inline-link" href="/ics3u-computer-science-help">ICS3U help page</a> takes that course strand by strand.',
            'Two facts sit side by side and we do not join them: the 2008 curriculum PDF describes a Grade 10 course ICS2O, and the current course list on the ministry\'s site does not include it. Neither source says one course replaced the other.'
          ] },
        { kind: 'p', mt: true, html: 'Science has coding too. The 2022 Science and Technology curriculum asks Grade 6 students to "use coding in investigations and to model concepts, and assess the impact of coding and of emerging technologies on everyday life". And at graduation, computer studies is one of the subjects in the STEM group of the Ontario diploma\'s compulsory credits: Ontario.ca says "Of the 17 compulsory credits, you must complete 1 from the following group", and computer studies is on that list alongside business studies and cooperative education, among others.' },
        { kind: 'source', html: 'Sources: Ontario Ministry of Education curriculum service (elementary math by grade, Science and Technology Grade 6, MTH1W, the computer studies course list) and <a class="ag-inline-link" href="https://www.ontario.ca/page/high-school-graduation-requirements" rel="noopener" target="_blank">Ontario.ca graduation requirements</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'west', tint: 'tint', eyebrow: 'British Columbia and the NWT',
      h2: 'BC teaches coding through design and technology, and the NWT is adopting it',
      lede: 'British Columbia files most of its coding under Applied Design, Skills, and Technologies (ADST), a subject of its own, and keeps a second, separate pair of computer science courses under Mathematics. The Northwest Territories has chosen to adopt and adapt the BC curriculum.',
      body: [
        { kind: 'table', caption: 'Coding and computing courses in the BC curriculum, from curriculum.gov.bc.ca (read 22 October 2026)', head: ['Stage', 'Course or module', 'What BC\'s page says'], rows: [
          ['Grades 6 and 7', 'ADST modules', '"Students will experience a minimum of three modules of Applied Design, Skills, and Technologies 6-7 in each of Grades 6 and 7."'],
          ['Grade 6', 'Computational Thinking module', 'Content includes "simple algorithms" and "visual programming", "for example, Kodu, Scratch".'],
          ['Grade 10', 'Computer Studies 10, Web Development 10', 'Listed among the ADST 10 to 12 courses.'],
          ['Grade 11', 'Computer Programming 11', 'Computational thinking defined: "Key components are decomposition, patterns and generalizations, abstraction, and algorithmic thinking."'],
          ['Grade 12', 'Computer Programming 12', 'Content includes "higher-level structures, such as functions, methods, or classes, that help improve the organization of source code".'],
          ['Grades 11 and 12', 'Computer Information Systems 11 and 12, Robotics 11 and 12', 'Listed among the ADST 10 to 12 courses.'],
          ['Grades 11 and 12', 'Computer Science 11 and 12 (under Mathematics)', 'Computer Science 11 includes decomposition: "dividing complex problems into parts that are easier to conceive, understand, and program".']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two routes to programming in BC high schools',
          left: [
            'A BC student can meet programming in ADST (Computer Programming 11 and 12) or in Mathematics (Computer Science 11 and 12). They are different courses in different subject areas on the curriculum site, and a school may offer one, both or neither.',
            'For families, the useful question to ask the school is which of the two it runs, and in which language. The curriculum describes concepts, not a required programming language.'
          ],
          rightH3: 'The Northwest Territories',
          right: [
            'ECE, the territorial department, says "Curriculum in the Northwest Territories is managed by the Department of Education, Culture and Employment (ECE)", and that it is "partnering with the British Columbia Ministry of Education to start using that province\'s curriculum", with every subject reviewed and adapted where needed.',
            'Its reasons include that BC\'s curriculum "teaches students the ability to design, make, acquire, and apply skills and technologies". ECE also records that 2022-23 was the "final year that NWT students take the Alberta Achievement Tests (AATs)".'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst" rel="noopener" target="_blank">BC ADST</a> and <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics" rel="noopener" target="_blank">BC Mathematics</a> curriculum pages; <a class="ag-inline-link" href="https://news.gov.bc.ca/ministries/education-and-child-care" rel="noopener" target="_blank">BC Gov News, Education and Child Care</a>; <a class="ag-inline-link" href="https://www.ece.gov.nt.ca/en/services/jk-12-school-curriculum/jk-12-curriculum-renewal" rel="noopener" target="_blank">NWT JK-12 Curriculum Renewal</a>; all read 22 October 2026. For BC families, our <a class="ag-inline-link" href="/coding-classes-in-british-columbia">British Columbia page</a> covers classes in Pacific time.' }
      ]
    },
    {
      id: 'prairies', tint: 'deep', eyebrow: 'Alberta, Saskatchewan, Manitoba',
      h2: 'The Prairies: renewal in Alberta, named courses in Saskatchewan and Manitoba',
      lede: 'The three Prairie provinces are at different points. Alberta is rewriting its curriculum grade band by grade band; Saskatchewan and Manitoba each publish computer science courses for the senior grades.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Alberta', p: 'Alberta Education and Childcare\'s curriculum history page says "By integrating topics like artificial intelligence, computer science and money management, Alberta\'s renewed curriculum will help students prepare", for the draft Grades 7 to 9 subjects, which schools may pilot in 2026/27 "ahead of mandatory implementation in September 2027". The page files the new K to 6 math under 2022/2023. We could not verify Alberta\'s high school computing courses from a primary source.' },
          { h3: 'Saskatchewan', p: 'The Ministry of Education\'s curriculum site lists Computer Science 20 and Computer Science 30 as provincial curricula. On the Computer Science 20 page, the ministry notes that "teachers developed, adapted or identified resources/materials for Computer Science 20 and other science curricula", which places the course in the science family.' },
          { h3: 'Manitoba', p: 'Manitoba Education and Early Childhood Learning publishes a Computer Science framework for "Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science". The department also posted, on 14 September 2026, that two new Grade 9 math courses are in pilot for 2026/27, "with full implementation planned for school year 2027/28".' }
        ] },
        { kind: 'p', mt: true, html: 'The course numbers follow each province\'s own system. Manitoba\'s framework spells its own labels out: Senior 2 is 20S, Senior 3 is 30S and Senior 4 is 40S. The Saskatchewan pages we read give course names without a grade beside them. We print the names exactly as the ministries do and leave the grade mapping to each school\'s course calendar, which is the document a student actually registers from.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.alberta.ca/curriculum-how-we-got-here" rel="noopener" target="_blank">Alberta, curriculum: how we got here</a>; <a class="ag-inline-link" href="https://curriculum.gov.sk.ca/CurriculumHome?id=446" rel="noopener" target="_blank">Saskatchewan Computer Science 20</a>; <a class="ag-inline-link" href="https://www.edu.gov.mb.ca/k12/cur/cs/index.html" rel="noopener" target="_blank">Manitoba Computer Science framework</a>; all read 22 October 2026. Alberta families: see our <a class="ag-inline-link" href="/coding-classes-in-alberta">Alberta page</a>.' }
      ]
    },
    {
      id: 'quebec', tint: 'tint', eyebrow: 'Quebec and the Atlantic provinces',
      h2: 'Quebec, New Brunswick, Nova Scotia, PEI and Newfoundland and Labrador',
      lede: 'East of Ontario the published picture is thinner, partly because of the curricula and partly because several government sites could not be read on the day.',
      body: [
        { kind: 'two',
          leftH3: 'Quebec',
          left: [
            'The Québec Education Program at secondary level, Québec.ca says, "comprises programs of study for students from Secondary I to Secondary V". Its subject list, read on 22 October 2026, groups mathematics with science and technology courses and names no stand-alone computer science course.',
            'Programming appears formally at college. Québec.ca\'s list of pre-university programs includes "Computer Science and Mathematics (200.C0)", and its technical programs include "420.B0 - Computer Science Technology". Both are CEGEP programs that follow secondary school.'
          ],
          rightH3: 'New Brunswick and Nova Scotia',
          right: [
            'New Brunswick\'s curriculum site lists Computer Science 110, Computer Science 120, Cybersecurity 120, Cybersecurity and Technical Support 110 and Technology 9. The Computer Science 110 page also mentions AI-assisted debugging tools alongside coding environments, one of the few provincial pages we read that does.',
            'Nova Scotia\'s Virtual School describes Computer Programming 12 by its "Modules: Problem Solving in Computer Programming, Fundamentals of Programming, Applied Problem Solving, Project Development." and lists it on CodeHS in Java. The province\'s own curriculum site did not connect, so we cannot say how widely schools offer it.'
          ] },
        { kind: 'p', mt: true, html: '<b>Prince Edward Island and Newfoundland and Labrador: not verified.</b> On 21 October 2026 the PEI government site showed an offline notice, and on 22 October it put up a bot check, so we stopped rather than work around it. Newfoundland and Labrador\'s government site returned server errors on both days. We print nothing about either province\'s coding courses until a primary page can be read.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program/secondary" rel="noopener" target="_blank">Québec Education Program, secondary</a> and <a class="ag-inline-link" href="https://www.quebec.ca/en/education/cegeps-private-colleges/services/programmes/pre-university-programs" rel="noopener" target="_blank">pre-university programs</a>; <a class="ag-inline-link" href="https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/" rel="noopener" target="_blank">New Brunswick Computer Science 110</a>; <a class="ag-inline-link" href="https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/" rel="noopener" target="_blank">Nova Scotia Virtual School, Computer Programming 12</a>; all read 22 October 2026.' }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'A worked example',
      h2: 'One task, two programs: what "efficient code" means in practice',
      lede: 'Ontario\'s Grade 6 expectation asks students to "describe how changes to the code affect the outcomes and the efficiency of the code", and BC\'s Computer Programming 11 names decomposition, patterns, abstraction and algorithmic thinking. This example is ours, written for this page, and shows both ideas on a very Canadian data set: days that thaw by afternoon and freeze again overnight.',
      body: [
        { kind: 'p', html: '<b>The task (ours).</b> Given ten days of high and low temperatures, count the freeze-thaw days (high above zero, low below zero), then find the longest run of them in a row. We solve the run question twice, once slowly and once efficiently, and count how many checks each version makes.' },
        { kind: 'code', label: 'Our solution in Python', lang: 'python', code: FT },
        { kind: 'code', label: 'What it prints (run on 22 October 2026)', lang: 'text', code: FT_OUT, note: 'Both versions give the same answer, a longest run of 2, so the outcome is unchanged. The efficiency is not: on ten days the slow version makes 16 checks and the fast one 10. On a 120-day winter where every day freeze-thaws, the slow version makes 7260 checks, which is 120 x 121 / 2 (our arithmetic), against 120 for the fast one.' },
        { kind: 'two', mt: true,
          leftH3: 'Where the four ideas show up',
          left: [
            '<b>Decomposition:</b> the job is split into three functions, one to judge a day, one to mark every day, one to find the run. <b>Pattern:</b> the same test runs on every day. <b>Abstraction:</b> is_freeze_thaw hides the rule, so changing "below zero" to "below minus two" touches one line.',
            '<b>Algorithm:</b> the fast version keeps a running count and resets it on a non-freeze-thaw day, so it looks at each day once. That one idea is the difference between 7260 checks and 120.'
          ],
          rightH3: 'How a student should study it',
          right: [
            'Predict the output before running anything. Then change one value, say the high on day 5 from 0 to 1, and predict again. Day 5 becomes a freeze-thaw day, days 3 to 6 join into one run, and the longest run jumps from 2 to 4 (we ran it: the slow version then makes 22 checks, the fast one still 10).',
            'That habit, predicting and then checking, is close to what Ontario\'s MTH1W calls reading code "to predict its outcome", and it is how we teach in every class: think it through first, then let the computer confirm or correct you.'
          ] }
      ]
    },
    {
      id: 'alongside', tint: 'tint', eyebrow: 'For parents',
      h2: 'How to find out what your child\'s school actually teaches',
      lede: 'A provincial curriculum says what may be taught. A school\'s course calendar says what is. Four steps, in the order we suggest them to families.',
      body: [
        { kind: 'ol', items: [
          '<b>Find your row above</b> and note the course names your province uses, exactly as written. Searching a school calendar for "coding" often misses a course called Computer Studies 10 or Computer Science 110.',
          '<b>Open the school\'s course calendar</b> for 2026 to 2027 and look for those names, then check which grade they open in and what they require first. In Ontario, for example, ICS4U requires ICS3U.',
          '<b>Ask which language the class uses.</b> Provincial pages describe concepts; schools choose Python, Java, JavaScript or a block language. Learning the same language at home saves a student weeks.',
          '<b>Match outside learning to the school\'s timing.</b> A student who meets loops at home a month before the class does will find the course calmer. One who learns something unrelated may simply be busier.'
        ] },
        { kind: 'table', mt: true, caption: 'What to work on at home, by grade band (our guidance, not any ministry\'s)', head: ['Grade band', 'What provinces commonly expect, from the pages above', 'What we suggest alongside'], rows: [
          ['Grades 1 to 5', 'Sequences, loops and conditions, often in block code (Ontario C3; BC modules from Grade 6)', 'Short daily puzzles; explaining each step aloud before running it'],
          ['Grades 6 to 8', 'Efficiency, subprograms, simple data (Ontario Grades 6 to 8; BC Computational Thinking)', 'A first typed language, usually Python, and small programs that answer real questions'],
          ['Grade 9 and 10', 'Coding inside math (MTH1W) and first digital technology courses (ICD2O, Computer Studies 10)', 'Reading other people\'s code, and writing tests for their own'],
          ['Grades 11 and 12', 'Named computer science courses: ICS3U and ICS4U, Computer Programming 11 and 12, Computer Science 20 and 30, 30S and 40S', 'Larger projects with structure: functions, classes, version control']
        ] }
      ]
    },
    {
      id: 'gaps', tint: 'deep', eyebrow: 'What we could not check',
      h2: 'The gaps in this page, listed openly',
      lede: 'A reference page is only useful if its blank cells are honest. These are the claims we chose not to make, and why.',
      body: [
        { kind: 'two',
          leftH3: 'Not printed, because no primary source was read',
          left: [
            'Any coding or computer science course name for Prince Edward Island, Newfoundland and Labrador, Yukon or Nunavut. Any claim about which curriculum Yukon follows. The departmental names for New Brunswick and Nova Scotia.',
            'Alberta\'s Career and Technology Studies computing courses: the old provincial PDF now shows a "We\'ve Moved" notice, the new curriculum site needs JavaScript to show any text, and the open-data host refused us.'
          ],
          rightH3: 'Printed carefully, because sources only go so far',
          right: [
            'Ontario\'s ICS2O and ICD2O are given as two separate facts, without a claim that one replaced the other. Saskatchewan and Manitoba course levels are given as the ministries name them, without our own grade mapping in the main table.',
            'We will update a row when its government site can be read. If you work in one of these systems and can point to the official page, the contact details at the foot of this page reach us.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages, whichever province you are in',
    lede: 'Our stages, not a ministry\'s. The teacher uses them in the free class to decide where a new student begins.',
    table: { caption: 'From first steps to senior computer science (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Following steps', 'Can run and change a block or typed program someone else wrote'],
      ['2. Building small programs', 'Writes loops and conditions from a blank screen, with a little help'],
      ['3. Splitting problems', 'Breaks a task into functions and tests each one'],
      ['4. Designing software', 'Plans a program before writing it, and can explain why one version is faster']
    ] },
    left: { h3: 'For parents', ps: [
      'The provincial course name matters less than the stage. A Grade 9 student at stage 1 needs the same first months as a Grade 6 student at stage 1.',
      'Stage 3 is the turning point for senior courses such as ICS3U or Computer Programming 11, which assume a student can split a problem up.'
    ] },
    right: { h3: 'For students', ps: [
      'Say what a program will print before you run it. Being wrong is useful: it shows you exactly what you misread.',
      'Keep your old programs. Rewriting one a year later, faster and shorter, is the clearest proof of progress you will have.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Canadian students, from first code to university',
    lede: 'Every course is taught live online by a regular teacher, in a batch or one to one, for students in any province or territory.',
    bands: [
      { num: 'I', h3: 'Elementary grades', sub: 'Ages 6 to 12', courses: [
        { code: 'CCBP / ELEM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Block code, the kind BC\'s Grade 6 module names.' },
        { code: 'CCBP / ELEM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math for kids', blurb: 'Number sense under the coding strand.' },
        { code: 'CCBP / ELEM / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A first typed language for keen 9 to 12 year olds.' }
      ] },
      { num: 'II', h3: 'Middle and early high school', sub: 'Grades 7 to 10', courses: [
        { code: 'CCBP / MID / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language many Canadian classrooms start with.' },
        { code: 'CCBP / MID / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'For Web Development 10 and similar courses.' },
        { code: 'CCBP / MID / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is, before ICD2O asks about it.' }
      ] },
      { num: 'III', h3: 'Senior courses and beyond', sub: 'Grades 11 and 12', courses: [
        { code: 'CCBP / SNR / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For classes and the virtual school course taught in Java.' },
        { code: 'CCBP / SNR / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures for Grade 12 work.' },
        { code: 'CCBP / SNR / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC preparation', blurb: 'The national computing contest, written at school.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'One live class format for thirteen curricula',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school slots, converted to your province\'s clock.' },
      { time: 'Weekends', l: 'Morning classes that leave school nights for homework.' },
      { time: '1-on-1', l: 'Fitted around the school\'s own course and its deadlines.' }
    ],
    cells: [
      { h3: 'Your province\'s names', p: 'We use the course names on your school calendar.' },
      { h3: 'The class language', p: 'Python, Java or JavaScript, as the school chose.' },
      { h3: 'Predict, then run', p: 'Every program is reasoned through before it runs.' },
      { h3: 'No copied answers', p: 'Homework is explained, never written for the student.' },
      { h3: 'One regular teacher', p: 'The same face each week, who knows the student.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'Programs our students have written',
  projectsLede: 'Coursework is only part of it. A sample of finished projects is below, and our <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'What parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'The school course belongs to the school, and we do not replace it. Our classes are an extra, paid as a monthly fee for eight live classes a month, with no contract, so you can stop when the school course no longer needs support.',
    free: ['A free first class', 'Placement on our four-stage ladder', 'No card details needed'],
    group: ['Fifteen to twenty students', 'A regular teacher', 'A batch you choose', 'Paid month by month'],
    one: ['One teacher, one student', 'Paced to the school course', 'Built around their own projects']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Coding in Canadian schools: common questions',
    items: [
      { q: 'Is coding part of the school curriculum in Canada?', a: 'It depends on the province or territory, because each sets its own curriculum. Ontario includes coding in math for every grade from 1 to 8; BC teaches it through Applied Design, Skills, and Technologies and Computer Science 11 and 12; Saskatchewan and Manitoba publish computer science courses for the senior grades.' },
      { q: 'Which Canadian province teaches coding the earliest?', a: 'Among the curricula we could read, Ontario\'s is the earliest in writing: its 2020 elementary math curriculum includes a coding expectation from Grade 1, starting with code that involves sequential events.' },
      { q: 'What computer science courses does Ontario offer in high school?', a: 'The current Ontario course list shows ICD2O in Grade 10, ICS3U and ICS3C in Grade 11, and ICS4U and ICS4C in Grade 12. ICS4U requires ICS3U. Schools choose which of these they run.' },
      { q: 'Does BC have computer science in high school?', a: 'Yes. BC lists Computer Programming 11 and 12, Computer Information Systems 11 and 12 and Robotics 11 and 12 under Applied Design, Skills, and Technologies, plus Computer Science 11 and 12 under Mathematics. Computer Studies 10 and Web Development 10 come earlier.' },
      { q: 'Does Alberta teach coding in school?', a: 'Alberta\'s draft Grades 7 to 9 curriculum integrates computer science and artificial intelligence, with mandatory implementation planned for September 2027. We could not verify Alberta\'s current high school computing courses from a primary source on 22 October 2026.' },
      { q: 'Is there a computer science course in Quebec high schools?', a: 'The Québec Education Program subject list for Secondary I to V names no stand-alone computer science course. Computer science appears as a college program after secondary school, for example Computer Science and Mathematics (200.C0) at CEGEP.' },
      { q: 'Why do some rows say not verified?', a: 'On 22 October 2026 the government sites for Prince Edward Island, Newfoundland and Labrador, Yukon and Nunavut were offline, returned errors or refused automated requests. We stopped rather than work around a block, and we print nothing we could not read at the source.' },
      { q: 'Can online classes count for school credit?', a: 'Not ours. We teach alongside the school course and do not grant Ontario credits or any other provincial credit. Credits come from the school, under each province\'s rules.' },
      { q: 'What language should my child learn to match their school?', a: 'Ask the teacher which language the class uses. Provincial curricula describe concepts rather than one language. Python is a common first typed language; Nova Scotia\'s virtual school course runs in Java.' },
      { q: 'When are your classes for families across Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm the time in your own province\'s clock.' },
      { q: 'Do you teach students to use AI to do their coding homework?', a: 'No. We teach students to reason a program through and then check it. AI tools can explain an error, but the thinking has to be the student\'s. ChatGPT needs a parent\'s permission for anyone under 18.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families working out where coding fits.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we keep for Canadian students.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Classes in Eastern time for Ontario students.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'Ontario\'s Grade 11 course, strand by strand.' },
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in BC', p: 'For students on BC\'s ADST and computer science courses.' },
      { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta', p: 'For families waiting on the renewed curriculum.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The national contest students write at school.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI classes in Canada', p: 'For students drawn to the AI that ICD2O mentions.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'The skill behind predicting what code will do.' },
      { href: '/computer-science-standards-by-state', label: 'US computer science standards', p: 'The same question, answered state by state.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the province and the course name on the school calendar. The first class starts from that course, and by the end the teacher can place the student on our four stages and suggest what to learn next.',
    readFirst: 'Curious about the method before you book? Our <a class="ag-inline-link" href="/how-we-teach">teaching method page</a> shows a lesson from the inside, and every syllabus sits in the <a class="ag-inline-link" href="/courses">full course list</a>.',
    note: 'Classes are taught by our teachers in India over live video, so families anywhere from Victoria to St. John\'s join the same way, with no centre to visit.',
    formNote: 'The first class is free. No card is needed to book.'
  },

  footer: {
    cols: [
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Ontario' },
        { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
        { href: '/coding-classes-in-alberta', label: 'Alberta' }
      ] },
      { h4: 'School courses', links: [
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Thirteen curricula, one table'
  },

  personalityCss: `
.ag-root.ag-ccbp .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-ccbp .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ccbp .ag-table td { line-height: 1.5; }
.ag-root.ag-ccbp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ccbp .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ccbp .ag-steps { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario Ministry of Education curriculum service (C3 coding expectations Grades 1 to 8, MTH1W, ICD2O and the ICS course list), Ontario.ca graduation requirements, curriculum.gov.bc.ca (ADST and Mathematics), BC Gov News ministry page, alberta.ca curriculum history, Saskatchewan curriculum site and Ministry of Education page, Manitoba Computer Science framework and Framework for Learning news, curriculum.nbed.ca, Nova Scotia Virtual School, Québec.ca (QEP secondary, pre-university and technical program lists) and NWT ECE curriculum pages, all read raw on 22 October 2026; PEI, NL, Yukon and Nunavut blocked or offline and marked not verified.',
    localProject: 'Our freeze-thaw worked example in Python: ten days of highs and lows, three functions, and the longest run solved two ways with the checks counted (16 against 10; 7260 against 120 on a 120-day winter, 120 x 121 / 2), linked to Ontario Grade 6 efficiency and BC Computer Programming 11 computational thinking. Plus a four-step parent checklist and a grade-band table, both labelled ours. Lesson family: decomposition and efficiency.',
    requiredMentions: ['Every grade from 1 to 8 carries the same coding expectation', 'Senior 2 (20S), Senior 3 (30S), and Senior 4 (40S) Computer Science', 'CodeHS: NSVS Computer Programming 12 (Java).', 'What to work on at home, by grade band', 'start using that province\'s curriculum', 'The gaps in this page, listed openly', 'Computer Science 20 and other science curricula', 'freeze-thaw days', '7260 checks', 'One task, two programs'],
    sources: [
      { claim: 'Ontario coding expectations Grades 1 to 8, MTH1W coding, ICD2O and ICS course list.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'Ontario Ministry of Education; computer studies in the STEM group of compulsory credits.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'BC ADST modules, Computational Thinking content, ADST 10 to 12 computing courses, Computer Programming 11 and 12.', url: 'https://curriculum.gov.bc.ca/curriculum/adst' },
      { claim: 'BC Computer Science 11 and 12 under Mathematics.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics' },
      { claim: 'Alberta renewed curriculum integrates computer science and AI; mandatory implementation September 2027.', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'Saskatchewan Computer Science 20 and 30.', url: 'https://curriculum.gov.sk.ca/CurriculumHome?id=446' },
      { claim: 'Manitoba Computer Science framework 20S, 30S, 40S.', url: 'https://www.edu.gov.mb.ca/k12/cur/cs/index.html' },
      { claim: 'New Brunswick Computer Science 110.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/' },
      { claim: 'Nova Scotia Virtual School Computer Programming 12.', url: 'https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/' },
      { claim: 'NWT curriculum managed by ECE; partnering with BC.', url: 'https://www.ece.gov.nt.ca/en/services/jk-12-school-curriculum/jk-12-curriculum-renewal' },
      { claim: 'Quebec pre-university program 200.C0 and technical program 420.B0.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/services/programmes/pre-university-programs' }
    ],
    rejectedClaims: [
      'Course names for PEI, NL, Yukon and Nunavut: no primary source could be read; marked not verified.',
      'That Yukon follows the BC curriculum: unverified (yukon.ca 403); not printed.',
      'That ICD2O replaced ICS2O: neither source says so; given as two separate facts.',
      'Alberta CTS Computing Science course names: unverified; not printed.',
      'Ministry names for New Brunswick and Nova Scotia: provincial hosts blocked or unreachable; marked not verified.',
      'Any ranking of provinces as better or worse at teaching coding: refused; the page compares what is published.',
      'Any affiliation with a ministry, department or school board: none, and the page says so.'
    ]
  }
};
