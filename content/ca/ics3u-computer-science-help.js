'use strict';
// ICS3U computer science help (ag- school course door; Canada cluster Phase 1 pilot, row 1).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/ics3u-computer-science-help/,
// research copies in ca/src/ontario and ca/src/admissions; facts-schools-contests.md rows 22 to 47 and 203 to 212):
//  - The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf
//    (byte-identical to the research copy). ICS3U: "This course introduces students to computer science."; "They will also write and
//    use subprograms within computer programs."; "Prerequisite: None"; strands A. Programming Concepts and Skills, B. Software
//    Development, C. Computer Environments and Systems, D. Topics in Computer Science; A1 "demonstrate the ability to use different
//    data types, including one-dimensional arrays, in computer programs"; A2 "demonstrate the ability to use control structures and
//    simple algorithms in computer programs"; A3 "demonstrate the ability to use subprograms within computer programs"; A4 "use proper
//    code maintenance techniques and conventions when creating computer programs"; A1.2 "binary, hexadecimal, ASCII, Unicode"; A1.5
//    "elements, indexes, and bounds"; A2.3 "count elements in an array, calculate a total, find highest or lowest value, or perform a
//    linear search"; A3.2 "use parameter passing and appropriate variable scope"; A4.1 "identify and correct syntax, logic, and
//    run-time errors"; A4.4 "use a tracing technique to understand program flow"; A4.5 "validate a program using a full range of test
//    cases"; B1.1 "stepwise refinement, divide and conquer, working backwards, examples, extreme cases, tables and charts, trial and
//    error"; B3.1 "add data to a sorted array"; B3.2 "determination of primes"; B3.3 "division by zero, roots of negatives"; B4.1
//    "problem definition, analysis, design, writing code, testing, implementation, maintenance"; B4.4 "calculate expected outcomes,
//    record actual outcomes"; B4.5 "manual code tracing, extra code to output the state of variables"; C3.4 "explain the difference
//    between an interpreter and a compiler"; course types (university / college preparation definitions); "College preparation courses
//    focus on the development of computer programming skills."; "University preparation courses provide students with a foundation in
//    the broad spectrum of computer science concepts and applications."; "The computer programming language used and the order in which
//    concepts are taught is left to the teacher's professional judgement."; "objects-first"; 70 / 30 final grade rule; "50% or higher";
//    "Each of the courses listed above is worth one credit."; ICS3C description, A1.2 string examples, strand D "Computers and Society",
//    D2 safe computing; ICS2O "Introduction to Computer Studies" and its three strands; ICS4U description, A2.2, A3.1, A3.2, A3.4,
//    A3.6, B1.7 "proper version control".
//  - Ontario curriculum content API (ws.api.dcp.edu.gov.on.ca), the data behind dcp.edu.gov.on.ca: the computer studies list returns
//    exactly ICS3U, ICD2O, ICS4U, ICS3C, ICS4C (ICS2O absent; a query naming ICS2O returns no ICS2O item); ICD2O "Digital Technology and
//    Innovations in the Changing World", 2023, its description and three strand titles; ICS3U and ICS3C prerequisites empty; ICS4U
//    prerequisite "Introduction to Computer Science, Grade 11, University Preparation".
//  - uwaterloo.ca/future-students/programs/computer-science: "Six Grade 12 U and/or M courses including" Advanced Functions, Calculus
//    and Vectors, "Any Grade 12 U English", "One other 4U course"; "from the low to mid-90s"; Recommended course "Grade 11 U Introduction
//    to Computer Science"; the AIF "is required for admission."; AIF deadline "February 15, 2027" (admission-information-form page).
//  - future.utoronto.ca/undergraduate-programs/computer-science/: St. George (TAD) "ENG4U / EAE4U", "MCV4U", supplemental application
//    "Required"; Mississauga (TMX) "ENG4U / EAE4U", "MHF4U", "MCV4U", MDM4U "Recommended"; Scarborough (TXC) "ENG4U / EAE4U", "MCV4U",
//    "MHF4U"; "Ontario Secondary School Diploma (OSSD) with six subjects at the 4U/M level, including English". The page names no ICS course.
//  - ontario.ca/page/high-school-graduation-requirements (updated September 02, 2026): computer studies sits in Group 3 for students who
//    started Grade 9 in 2023 or earlier and in the STEM-related course group ("Of the 17 compulsory credits, you must complete 1 from the
//    following group:") for later starters.
//  - Time: facts-geo.md section 3 (tzdb 2026e): Eastern UTC-5 winter / UTC-4 summer, back 1 November 2026, forward 14 March 2027;
//    India time UTC+5:30, so India is 9h30 ahead in summer and 10h30 in winter.
// Our own material, labelled on the page: the longest-run problem in Python and Java (both run: Python 3.13 and Java 22 print
// "Longest run: 3 days, starting on day 4"; all six test cases pass in both), its trace table (generated by instrumenting the Python),
// the ten practice questions and answers (every program run), the Python and Java comparison, the study plan and countdown, the
// four-stage ladder. "Culminating task" is the term schools commonly use; the 2008 document does not use the word, so it is never
// presented as ministry wording.
// Lesson family: tracing and testing (predict, trace, test the edges).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const RUN_PY = `# Longest run of days at or above a goal (ours)

def longest_run(minutes, goal):
    """Return (length, start_day) of the longest run of days
    with minutes >= goal. Days are numbered from 1.
    No qualifying day gives (0, 0). On a tie, the earlier run wins."""
    record_len = 0
    record_start = 0
    run_len = 0
    run_start = 0
    for i in range(len(minutes)):
        if minutes[i] >= goal:
            if run_len == 0:          # a new run begins today
                run_start = i + 1     # day numbers start at 1
            run_len += 1
            if run_len > record_len:  # strictly greater: a tie keeps the earlier run
                record_len = run_len
                record_start = run_start
        else:
            run_len = 0               # the run is broken
    return record_len, record_start


log = [35, 40, 10, 30, 45, 50, 20, 30, 30, 30]
length, start = longest_run(log, 30)
print("Longest run:", length, "days, starting on day", start)`;

const RUN_JAVA = `// Longest run of days at or above a goal (ours)
public class LongestRun {

    // Returns {length, startDay}. Days are numbered from 1.
    // No qualifying day gives {0, 0}. On a tie, the earlier run wins.
    public static int[] longestRun(int[] minutes, int goal) {
        int recordLen = 0;
        int recordStart = 0;
        int runLen = 0;
        int runStart = 0;
        for (int i = 0; i < minutes.length; i++) {
            if (minutes[i] >= goal) {
                if (runLen == 0) {          // a new run begins today
                    runStart = i + 1;       // day numbers start at 1
                }
                runLen++;
                if (runLen > recordLen) {   // strictly greater: a tie keeps the earlier run
                    recordLen = runLen;
                    recordStart = runStart;
                }
            } else {
                runLen = 0;                 // the run is broken
            }
        }
        return new int[] {recordLen, recordStart};
    }

    public static void main(String[] args) {
        int[] log = {35, 40, 10, 30, 45, 50, 20, 30, 30, 30};
        int[] result = longestRun(log, 30);
        System.out.println("Longest run: " + result[0] + " days, starting on day " + result[1]);
    }
}`;

const Q1 = `total = 0
for k in range(1, 8, 2):
    total = total + k
print(total)`;

const Q2 = `int x = 7;
int y = 2;
System.out.println(x / y + " " + x % y + " " + (double) x / y);`;

const Q3 = `nums = [4, 8, 15, 16, 23, 42]
print(nums[len(nums) - 1], nums[2], nums[-2])`;

const Q4 = `int n = 12;
int steps = 0;
while (n != 1) {
    if (n % 2 == 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
    steps++;
}
System.out.println(steps);`;

const Q5 = `int[] marks = {72, 85, 64};
int sum = 0;
for (int i = 0; i <= marks.length; i++) {
    sum += marks[i];
}
System.out.println(sum);`;

const Q6 = `def highest(temps):
    top = 0
    for t in temps:
        if t > top:
            top = t
    return top

print(highest([-8, -3, -12]))`;

const Q7 = `def longest_streak(minutes, goal):
    record = 0
    run = 0
    for m in minutes:
        if m >= goal:
            run += 1
        else:
            if run > record:
                record = run
            run = 0
    return record

print(longest_streak([10, 30, 30, 30], 30))`;

const A8_PY = `def count_above(values, limit):
    count = 0
    for v in values:
        if v > limit:        # strictly above: equal does not count
            count += 1
    return count

print(count_above([55, 72, 90, 72, 40], 72))   # 1`;

const A8_JAVA = `public static int countAbove(int[] values, int limit) {
    int count = 0;
    for (int v : values) {
        if (v > limit) {     // strictly above: equal does not count
            count++;
        }
    }
    return count;
}`;

const A9_PY = `def is_prime(n):
    if n < 2:                # 1, 0 and negatives are not prime
        return False
    d = 2
    while d * d <= n:        # a factor pair always has one side at most the square root
        if n % d == 0:
            return False
        d += 1
    return True`;

const A9_JAVA = `public static boolean isPrime(int n) {
    if (n < 2) {             // 1, 0 and negatives are not prime
        return false;
    }
    for (int d = 2; d * d <= n; d++) {
        if (n % d == 0) {
            return false;
        }
    }
    return true;
}`;

const SRC_CURRIC = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'ICS3U HELP', blurb: 'ICS3U explained from the 2008 Ontario curriculum, with ICS3U vs ICS3C, a problem solved in Python and Java, ten practice questions and an exam plan.' },
  slug: 'ics3u-computer-science-help',
  code: 'ics',
  accent: '#485A56',
  accentRationale: 'ICS3U help, Canada: a muted chalkboard slate, #485A56, found by grid search for distance from every site accent (16.4 RGB units from the nearest, #3C5C4B; no other Canada accent existed when chosen), contrast 6.90 on the paper #FBF8F2 and 5.93 on the deepest tint',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'ICS3U computer science help',
  title: 'ICS3U Computer Science Help: Python, Java, Exam Review',
  description: 'ICS3U help for Ontario Grade 11: each curriculum strand, ICS3U vs ICS3C, one problem solved in Python and Java, ten practice questions and an exam plan.',
  ogDescription: 'What ICS3U covers, strand by strand, from the 2008 Ontario curriculum. Plus a worked problem in Python and Java, ten original practice questions with answers and a final exam plan.',
  twitterDescription: 'ICS3U explained from the Ontario curriculum, with practice questions in Python and Java.',
  pageName: 'ICS3U Computer Science Help',
  webPageDescription: 'A guide for Ontario Grade 11 students and parents to ICS3U, Introduction to Computer Science, built from the 2008 curriculum document, with a worked problem in two languages, ten practice questions and a study plan.',
  courseDescription: 'Live online ICS3U and ICS4U help for Ontario students in Python or Java, taught alongside the school course in a batch or one to one. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'ICS3U help',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#covers', label: 'What it covers' },
    { href: '#language', label: 'Python or Java' },
    { href: '#worked', label: 'Worked problem' },
    { href: '#practice', label: 'Practice' },
    { href: '#exam', label: 'Exam review' }
  ],
  eyebrow: 'Ontario &middot; Grade 11 &middot; ICS3U in Python or Java',
  h1: 'ICS3U computer science help, in Python or Java',
  lede: 'ICS3U is where many Ontario teens write their first serious programs, and where many of them first get stuck: an index that runs one past the end of an array, a loop that never stops, a project deadline that felt far away until suddenly it did not. This page explains the course from the ministry&rsquo;s own curriculum document, solves one problem in both Python and Java with the reasoning laid out, and gives ten practice questions of our own with full answers. We teach alongside the student&rsquo;s school course and do not grant Ontario credits; families who need the credit take it at school or through a credit provider.',
  secondaryCta: { href: '#practice', label: 'Try the ten questions' },
  wa: 'Hello Modern Age Coders, my teen in Ontario is taking ICS3U and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Python or Java, whichever the school uses',
  spec: [
    ['For', 'Grade 11 (ICS3U), then Grade 12 (ICS4U)'],
    ['Language', 'Python or Java, as the school uses'],
    ['Pace', 'In step with the school course outline'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Eastern time for most of Ontario'],
    ['Credit', 'None granted: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'ICS3U is Ontario&rsquo;s Grade 11 university-preparation computer science course, Introduction to Computer Science, with no prerequisite. Students write programs with variables, arrays, loops and subprograms, then design software as a team. Modern Age Coders gives ICS3U help live online, in a batch or one to one, through our course Ontario Computer Science Companion: ICS3U and ICS4U, in Python or Java.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Grade 11 computer science student',
    lede: 'The companion course follows the school&rsquo;s own outline. The two language courses go deeper for students who want more than the course asks.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'ICS / 01', title: 'Ontario Computer Science Companion', note: 'Grades 11 and 12. Paced to the school course outline, in Python or Java, with tracing, testing and project planning.' },
      { course: 'python-complete-masterclass-teens', code: 'ICS / 02', title: 'Python for teens', note: 'Ages 13 to 18. For classes that teach ICS3U in Python, and for students who want real projects beyond it.' },
      { course: 'java-programming-masterclass-for-teens', code: 'ICS / 03', title: 'Java for teens', note: 'Ages 13 to 18. For schools that teach in Java: types, arrays, methods, then objects and classes.' }
    ]
  },

  sections: [
    {
      id: 'covers', tint: 'tint', eyebrow: 'The Ontario curriculum',
      h2: 'What ICS3U covers, strand by strand',
      lede: 'Every ICS3U class in Ontario is built on one document: The Ontario Curriculum, Grades 10 to 12: Computer Studies, issued in 2008. It describes ICS3U plainly: &ldquo;This course introduces students to computer science.&rdquo; It also says students &ldquo;will also write and use subprograms within computer programs&rdquo;, and its course entry ends with &ldquo;Prerequisite: None&rdquo;. The course is organized in four strands.',
      body: [
        { kind: 'table', caption: 'ICS3U strands and overall expectations, quoted from the 2008 Ontario curriculum document (read 22 October 2026)', head: ['Strand', 'What the overall expectations say', 'What that means in class (our reading)'], rows: [
          ['A. Programming Concepts and Skills', '&ldquo;use different data types, including one-dimensional arrays, in computer programs&rdquo;; &ldquo;use control structures and simple algorithms&rdquo;; &ldquo;use subprograms within computer programs&rdquo;; &ldquo;use proper code maintenance techniques and conventions&rdquo;', 'Variables and types, if statements and loops, lists or arrays, functions or methods, and code that another person can read'],
          ['B. Software Development', '&ldquo;use a variety of problem-solving strategies to solve different types of problems independently and as part of a team&rdquo;; &ldquo;design algorithms according to specifications&rdquo;; &ldquo;apply a software development life-cycle model to a software development project&rdquo;', 'Planning before coding, pseudocode and flow charts, test plans, and the larger project most schools set near the end'],
          ['C. Computer Environments and Systems', '&ldquo;relate the specifications of computer components to user requirements&rdquo;; &ldquo;use appropriate file maintenance practices to organize and safeguard data&rdquo;; &ldquo;demonstrate an understanding of the software development process&rdquo;', 'CPU, memory and storage, organising files and backups, and what an editor, compiler and debugger each do'],
          ['D. Topics in Computer Science', '&ldquo;describe policies on computer use that promote environmental stewardship and sustainability&rdquo;; &ldquo;demonstrate an understanding of emerging areas of computer science research&rdquo;; &ldquo;describe postsecondary education and career prospects related to computer studies&rdquo;', 'E-waste and ergonomics, a short research report on a field such as cryptography or artificial intelligence, and where computer science leads']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The details students meet most',
          left: [
            'Strand A is where the marks are won and lost, and its specific expectations are precise. Students describe arrays in terms of &ldquo;elements, indexes, and bounds&rdquo;, and they write algorithms to &ldquo;count elements in an array, calculate a total, find highest or lowest value, or perform a linear search&rdquo;. Those four algorithms turn up again and again in tests, so we make students rebuild each one from a blank file.',
            'The same strand asks students to &ldquo;identify and correct syntax, logic, and run-time errors&rdquo;, to &ldquo;use a tracing technique to understand program flow&rdquo; and to &ldquo;validate a program using a full range of test cases&rdquo;. Tracing and testing are written into the course, not optional extras. It also covers how a computer stores data internally, naming &ldquo;binary, hexadecimal, ASCII, Unicode&rdquo;.'
          ],
          rightH3: 'Problem solving is in the curriculum by name',
          right: [
            'Strand B lists the strategies students should use: &ldquo;stepwise refinement, divide and conquer, working backwards, examples, extreme cases, tables and charts, trial and error&rdquo;. The worked problem further down uses three of them on one page: stepwise refinement, a table, and extreme cases.',
            'Strand B also names example tasks, including how to &ldquo;add data to a sorted array&rdquo;, the &ldquo;determination of primes&rdquo;, and algorithms that handle &ldquo;division by zero, roots of negatives&rdquo;. Question 9 in our practice set is a prime checker for exactly this reason.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Why every school&rsquo;s course outline looks different',
          left: [
            'Families searching for an ICS3U course outline often find that two schools teach the course in a different order, or in different languages. The 2008 document explains why: &ldquo;The computer programming language used and the order in which concepts are taught is left to the teacher&rsquo;s professional judgement.&rdquo; It adds that some teachers choose an &ldquo;objects-first&rdquo; approach.',
            'So the outline your teen&rsquo;s teacher hands out is the real map. In our first class we ask for it, and we plan around its unit order rather than our own.'
          ],
          rightH3: 'How the final mark is built',
          right: [
            'The 2008 curriculum document sets the rule for Grades 9 to 12: &ldquo;Seventy per cent of the grade will be based on evaluations conducted throughout the course.&rdquo; The other part is a final evaluation: &ldquo;Thirty per cent of the grade will be based on a final evaluation in the form of an examination, performance, essay, and/or other method of evaluation suitable to the course content and administered towards the end of the course.&rdquo;',
            'In ICS3U that 30 per cent is usually a final exam, a final project (often called the culminating task), or both. How a school splits it is the school&rsquo;s choice, so ask the teacher early. The document also says each course &ldquo;is worth one credit&rdquo;, granted for a grade of &ldquo;50% or higher&rdquo;.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_CURRIC + ', course pages for ICS3U and the assessment section, read 22 October 2026. The course list on the current Ontario curriculum website, read through its public content service the same day, still shows ICS3U with the issue year 2008. Modern Age Coders is not connected with the Ontario Ministry of Education.' }
      ]
    },
    {
      id: 'compare', tint: 'deep', eyebrow: 'U or C, and Grade 10',
      h2: 'ICS3U vs ICS3C, and what changed in the Grade 10 course list',
      lede: 'Grade 11 computer studies in Ontario comes in two versions, and Grade 10 has changed on the current curriculum website. Both are easier to understand side by side.',
      body: [
        { kind: 'table', caption: 'ICS3U and ICS3C compared, from the 2008 Ontario curriculum document (read 22 October 2026)', head: ['', 'ICS3U', 'ICS3C'], rows: [
          ['Full title', 'Introduction to Computer Science, Grade 11, University Preparation', 'Introduction to Computer Programming, Grade 11, College Preparation'],
          ['Destination', 'University preparation courses are &ldquo;designed to equip students with the knowledge and skills they need to meet the entrance requirements for university programs&rdquo;', 'College preparation courses are designed to meet &ldquo;the requirements for entrance to most college programs or for admission to apprenticeship or other training programs&rdquo;'],
          ['Prerequisite', 'None', 'None'],
          ['Emphasis', '&ldquo;a foundation in the broad spectrum of computer science concepts and applications&rdquo;', '&ldquo;College preparation courses focus on the development of computer programming skills.&rdquo;'],
          ['Course description opens', '&ldquo;This course introduces students to computer science.&rdquo;', '&ldquo;This course introduces students to computer programming concepts and practices.&rdquo;'],
          ['Arrays', 'Named in the first overall expectation: one-dimensional arrays', 'The word array does not appear in the ICS3C expectations (our reading of the document); string handling such as &ldquo;swap two characters, capitalize first letter&rdquo; is named instead'],
          ['Fourth strand', 'D. Topics in Computer Science (research areas, careers)', 'D. Computers and Society, including procedures for safe computing'],
          ['Leads to', 'ICS4U, which lists ICS3U as its prerequisite', 'ICS4C, which lists ICS3C as its prerequisite'],
          ['Credit', 'One credit', 'One credit']
        ] },
        { kind: 'table', mt: true, caption: 'The Grade 10 listing, two facts side by side (Ontario curriculum website content service and the 2008 document, read 22 October 2026)', head: ['Course', 'Where it is listed', 'Issued', 'How it is organized'], rows: [
          ['ICD2O, Digital Technology and Innovations in the Changing World', 'The current Ontario curriculum website, which lists five computer studies courses: ICD2O, ICS3U, ICS3C, ICS4U and ICS4C', '2023, Grade 10, Open', 'Three strands: Computational Thinking and Making Connections; Hardware, Software, and Innovations; Programming'],
          ['ICS2O, Introduction to Computer Studies', 'The 2008 curriculum document. It is not on the current website&rsquo;s computer studies list', '2008, Grade 10, Open', 'Three strands: Understanding Computers; Introduction to Programming; Computers and Society']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Choosing between U and C',
          left: [
            'The choice is about destination, not ability alone. A student aiming at a university program in computer science, engineering or mathematics usually takes the U course, because only ICS3U leads to ICS4U. A student heading for a college program in programming or IT has a real course in ICS3C, with its own Grade 12 follow-on.',
            'Neither course has a prerequisite, so a Grade 11 student who has never written code can enrol in either. That is also why the first month of ICS3U can feel steep: some classmates arrive having coded for years, and others are starting from zero.'
          ],
          rightH3: 'What the Grade 10 change means for a family',
          right: [
            'The current website describes ICD2O this way: &ldquo;Students will learn and apply coding concepts and skills to build hands-on projects and investigate artificial intelligence, cybersecurity, and other emerging digital technologies.&rdquo; ICS2O appears in the 2008 document and not on that list.',
            'Neither source we read says one course replaced the other, so we will not say it either. What matters for ICS3U is simpler: the 2008 table lists no prerequisite for it, so no Grade 10 course is required to take it. A Grade 10 course with programming in it is still a gentle start.'
          ] }
      ]
    },
    {
      id: 'language', tint: 'tint', eyebrow: 'Python or Java',
      h2: 'ICS3U in Python or in Java: what changes for the student',
      lede: 'The curriculum leaves the language to the teacher, so Ontario students meet ICS3U in Python, Java and sometimes other languages. The ideas are the same. What the student types, and the errors they hit first, are not. This comparison is ours.',
      body: [
        { kind: 'table', caption: 'The same ICS3U ideas in Python and Java (ours; every example was run in Python 3.13 and Java 22)', head: ['Idea', 'Python', 'Java'], rows: [
          ['Running a program', 'Run the file; the interpreter reads it line by line', 'Compile with <code>javac</code>, then run with <code>java</code>; nothing runs until the whole file compiles'],
          ['A variable', '<code>count = 0</code>, and the type follows the value', '<code>int count = 0;</code>, with the type declared and fixed'],
          ['A one-dimensional array', 'A list: <code>marks = [72, 85, 64]</code>, which can grow', '<code>int[] marks = {72, 85, 64};</code>, with a fixed length'],
          ['How long is it?', '<code>len(marks)</code>', '<code>marks.length</code> for an array, <code>name.length()</code> for a string'],
          ['Loop over the indexes', '<code>for i in range(len(marks)):</code>', '<code>for (int i = 0; i &lt; marks.length; i++)</code>'],
          ['Dividing 7 by 2', '<code>7 // 2</code> is 3 and <code>7 / 2</code> is 3.5', '<code>7 / 2</code> is 3 with ints; <code>(double) 7 / 2</code> is 3.5'],
          ['Comparing two strings', '<code>==</code> compares the text', '<code>==</code> can say false for equal text; use <code>.equals()</code>'],
          ['Marking a block', 'Indentation', 'Braces, with a semicolon after each statement'],
          ['First errors students meet', 'IndentationError, NameError and TypeError, mostly while the program runs', 'cannot find symbol, missing semicolons and type mismatches, before it runs']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the school teaches Python',
          left: [
            'Python lets students write a working program in the first lesson, which is good for confidence and risky for habits. Because a variable can hold anything, a mistake such as adding a string to a number only shows up when that line runs, sometimes in the middle of a test.',
            'Our Python students learn to read a traceback from the bottom up, to name variables clearly, and to stop leaning on shortcuts the course will not accept, such as built-in <code>max()</code> when the task is to write the highest-value algorithm themselves.'
          ],
          rightH3: 'If the school teaches Java',
          right: [
            'Java asks for more before anything works: a class, a <code>main</code> method, declared types, braces and semicolons. Students often spend the first weeks fighting the compiler. That strictness pays off later, because the compiler catches whole families of mistakes before the program ever runs.',
            'Our Java students learn to read a compiler message for its line number and its one useful word, to keep integer division in mind, and to compare strings with <code>.equals()</code>. If cannot find symbol is the current enemy, our page on the <a class="ag-inline-link" href="/java-cannot-find-symbol-error">cannot find symbol error</a> walks through its usual causes.'
          ] },
        { kind: 'p', mt: true, html: 'The curriculum asks students to &ldquo;explain the difference between an interpreter and a compiler&rdquo;, and the first row of the table above is that answer in practice. A student who switches language between ICS3U and ICS4U keeps every idea and relearns only the spelling. For the longer argument about which language suits a beginner, see <a class="ag-inline-link" href="/blog/python-vs-java-which-to-learn-first">Python vs Java: which to learn first</a>.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'A worked problem, ours',
      h2: 'One ICS3U problem, solved in Python and Java',
      lede: 'This is our own problem, written for this page, at the level of an ICS3U unit test on arrays and loops. The code matters less than the thinking around it: break the problem down, trace it by hand, then test the edges. Both versions below were run and print the same line.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> A student logs the minutes they practise coding each day. Given the daily log and a goal, find the longest run of consecutive days on which they practised at least the goal, and the day that run started. Days are numbered from 1. If no day meets the goal, report 0 and 0. If two runs tie, report the earlier one.' },
        { kind: 'ol', items: [
          '<b>Restate the output.</b> Two numbers: a length and a start day. Writing this down first stops the classic half-answer that reports the length and forgets the start.',
          '<b>Decide what to remember while walking the array once.</b> The current run (how long, and where it began) and the record so far (how long, and where it began). Four variables, each with one job.',
          '<b>Write the rule for one day.</b> If the day meets the goal, the current run grows by one, and if it was 0 it begins today. If the day misses the goal, the current run drops to 0.',
          '<b>Decide when to update the record.</b> Every time the current run grows, compare it with the record. Updating only when a run breaks misses a run that lasts to the final day, which is the bug in practice question 7.',
          '<b>Decide the tie rule in code.</b> Use strictly greater than. An equal run never replaces the record, so the earlier run wins, as the problem asks.',
          '<b>List the extreme cases before running anything.</b> An empty log, a log where no day qualifies, a single day exactly at the goal, a run that ends on the last day, and two runs of equal length.'
        ] },
        { kind: 'code', label: 'Python &middot; longest run (ours)', lang: 'python', code: RUN_PY, note: 'Output: Longest run: 3 days, starting on day 4. The index i starts at 0, so the day number is i + 1: the off-by-one that sinks many first attempts is handled in one place.' },
        { kind: 'code', label: 'Java &middot; longest run (ours)', lang: 'java', code: RUN_JAVA, note: 'Same output. Java cannot return two numbers directly, so the method returns a two-element int array, a common ICS3U pattern before students meet objects in ICS4U.' },
        { kind: 'table', mt: true, caption: 'Trace table for the sample log with goal 30 (ours, generated by instrumenting the Python version)', head: ['i', 'Day', 'Minutes', 'Meets goal?', 'Run length', 'Run start', 'Record length', 'Record start'], numCols: [0, 1, 2, 4, 5, 6, 7], rows: [
          ['0', '1', '35', 'yes', '1', '1', '1', '1'],
          ['1', '2', '40', 'yes', '2', '1', '2', '1'],
          ['2', '3', '10', 'no', '0', '1', '2', '1'],
          ['3', '4', '30', 'yes', '1', '4', '2', '1'],
          ['4', '5', '45', 'yes', '2', '4', '2', '1'],
          ['5', '6', '50', 'yes', '3', '4', '3', '4'],
          ['6', '7', '20', 'no', '0', '4', '3', '4'],
          ['7', '8', '30', 'yes', '1', '8', '3', '4'],
          ['8', '9', '30', 'yes', '2', '8', '3', '4'],
          ['9', '10', '30', 'yes', '3', '8', '3', '4']
        ] },
        { kind: 'table', mt: true, caption: 'Our test plan: expected against actual, both languages (ours; all six pass)', head: ['Input log (goal 30)', 'Expected', 'Why this case'], rows: [
          ['empty', '0 days, start 0', 'Nothing to loop over: the method must still return safely'],
          ['10, 20', '0 days, start 0', 'No day qualifies'],
          ['30', '1 day, start 1', 'Exactly at the goal: tests at least, not more than'],
          ['10, 30, 30', '2 days, start 2', 'The run ends on the last day'],
          ['30, 30, 10, 30, 30', '2 days, start 1', 'A tie: the earlier run must win'],
          ['35, 40, 10, 30, 45, 50, 20, 30, 30, 30', '3 days, start 4', 'The sample log, with a tie at the end']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the trace table shows',
          left: [
            'Look at the last three rows. Days 8, 9 and 10 make a run of 3, the same length as the run starting on day 4, and the record does not move. Without the trace, a student who used greater-than-or-equal would get day 8 and never see why.',
            'The curriculum asks for &ldquo;manual code tracing, extra code to output the state of variables&rdquo; as debugging methods. This table is both: we wrote it by hand first, then printed the same eight columns from the program to check it.'
          ],
          rightH3: 'Why this is worth an hour',
          right: [
            'The test plan follows the steps the curriculum spells out for a test plan, including to &ldquo;calculate expected outcomes, record actual outcomes&rdquo;. Students who write the expected column before running the code catch their own mistakes; students who run first tend to believe whatever the program prints.',
            'Every later ICS3U topic reuses this shape: walk an array once, keep a small amount of state, update it carefully, test the edges. Our students solve versions of it for marks, temperatures and game scores until the shape is automatic.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Ten ICS3U practice questions',
      lede: 'These ten questions are our own, written for this page. They are not taken from any school, board or exam. Questions 1 to 4 are tracing, the next three are debugging, then two ask you to write a method and the last asks you to choose a data structure. Work each one on paper before you check the answers below.',
      body: [
        { kind: 'code', label: 'Question 1 &middot; trace &middot; Python', lang: 'python', code: Q1, note: 'What does this print? List every value k takes.' },
        { kind: 'code', label: 'Question 2 &middot; trace &middot; Java', lang: 'java', code: Q2, note: 'What is the exact line printed? Explain each of the three parts.' },
        { kind: 'code', label: 'Question 3 &middot; trace &middot; Python', lang: 'python', code: Q3, note: 'What does this print? Which index expression would not work in Java, and what would you write instead?' },
        { kind: 'code', label: 'Question 4 &middot; trace &middot; Java', lang: 'java', code: Q4, note: 'Build a trace table with columns n and steps. What is printed?' },
        { kind: 'code', label: 'Question 5 &middot; debug &middot; Java', lang: 'java', code: Q5, note: 'This compiles but fails. What happens, what kind of error is it, and what is the fix? What should it print once fixed?' },
        { kind: 'code', label: 'Question 6 &middot; debug &middot; Python', lang: 'python', code: Q6, note: 'A student tests this with a week of winter temperatures. What prints, what should print, and what kind of error is it? Fix it.' },
        { kind: 'code', label: 'Question 7 &middot; debug &middot; Python', lang: 'python', code: Q7, note: 'This is a first attempt at the worked problem above. What does it print, what should it print, and why? Give a fix.' },
        { kind: 'p', mt: true, html: '<b>Question 8 &middot; write a method.</b> In Python or Java, write <code>count_above(values, limit)</code> (Java: <code>countAbove</code>) that returns how many values are strictly greater than <code>limit</code>. What does it return for the values 55, 72, 90, 72 and 40 with a limit of 72?' },
        { kind: 'p', html: '<b>Question 9 &middot; write a method.</b> Write <code>is_prime(n)</code> (Java: <code>isPrime</code>) that returns true only for prime numbers. List the test values you would use and why.' },
        { kind: 'p', html: '<b>Question 10 &middot; choose a data structure.</b> For each task, say what you would store the data in and why. (a) The 30 marks of one class, to find the average and count how many are above it. (b) How many times each word appears in a paragraph. (c) Each student&rsquo;s name with their mark, to be printed from highest mark to lowest.' }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Full answers to the ten questions',
      lede: 'Each answer says what the program does and why, because the reasoning is what earns marks. Every program was run to confirm the output.',
      body: [
        { kind: 'ol', items: [
          '<b>16.</b> <code>range(1, 8, 2)</code> starts at 1, steps by 2 and stops before 8, so k takes 1, 3, 5 and 7, and the total is 1 + 3 + 5 + 7 = 16. The stop value is never included: the habit to check whenever <code>range</code> appears.',
          '<b>3 1 3.5</b>. With two ints, <code>x / y</code> is integer division, so 7 / 2 is 3. <code>x % y</code> is the remainder, 1. The cast turns x into 7.0 before the division, so the third part is 3.5. The cast applies to x only, which is why it has to come first.',
          '<b>42 15 23</b>. <code>len(nums) - 1</code> is 5, the last index. <code>nums[2]</code> is the third element, because indexes start at 0. <code>nums[-2]</code> counts from the end and is 23. Java has no negative indexes; there you would write <code>nums[nums.length - 2]</code>.',
          '<b>9</b>. The trace of n is 12, 6, 3, 10, 5, 16, 8, 4, 2, 1, with steps counting each change, so steps ends at 9. Tracing a while loop is about the condition: the loop body runs only while n is not 1, so the final 1 is never processed.',
          '<b>A run-time error.</b> With <code>&lt;=</code>, i reaches 3, but the last index of a three-element array is 2, so Java throws ArrayIndexOutOfBoundsException (Index 3 out of bounds for length 3). Change <code>&lt;=</code> to <code>&lt;</code>. Fixed, it prints 221.',
          '<b>It prints 0; it should print -3.</b> This is a logic error: the program runs without complaint and gives a wrong answer. Starting <code>top</code> at 0 assumes every value is positive, and none of these are. Start with the first element instead: <code>top = temps[0]</code>, and decide separately what an empty list should do (return None, or refuse it).',
          '<b>It prints 0; it should print 3.</b> The record is only updated when a run breaks, and this run never breaks: it lasts to the last day. Either add the same comparison once more after the loop (if <code>run</code> is greater than <code>record</code>, copy it across), or update the record every time the run grows, as the worked problem does. Testing a run that ends on the last day is the extreme case that finds it.',
          '<b>It returns 1.</b> Only 90 is strictly greater than 72; both 72s are equal, so they do not count. The test that matters is a value equal to the limit, because that is where greater-than and greater-than-or-equal disagree. Both versions are in the code below.',
          '<b>See the code below.</b> Numbers below 2 are not prime. For anything else, try divisors from 2 while the divisor squared is at most n: if n had a factor larger than its square root, its partner factor would be smaller and already tried. Test with -3, 0, 1 (not prime), 2 (the smallest prime and the only even one), 9 (a square, the edge of the loop), 29 (prime) and a large prime. Our run listed 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29 as the primes below 30.',
          '<b>(a)</b> A one-dimensional array or list of 30 numbers: one pass to total them, a second pass to count those above the average. <b>(b)</b> At ICS3U level, two parallel arrays, one of words and one of counts, with a linear search for each word; a Python dictionary or a Java HashMap does the same job faster and is worth learning next. <b>(c)</b> Parallel arrays of names and marks work if every swap during sorting moves both arrays together; in ICS4U the cleaner answer is one array of student objects, which the Grade 12 curriculum describes as arrays of &ldquo;compound data types&rdquo;.'
        ] },
        { kind: 'code', label: 'Answer 8 &middot; Python', lang: 'python', code: A8_PY },
        { kind: 'code', label: 'Answer 8 &middot; Java', lang: 'java', code: A8_JAVA },
        { kind: 'code', label: 'Answer 9 &middot; Python', lang: 'python', code: A9_PY },
        { kind: 'code', label: 'Answer 9 &middot; Java', lang: 'java', code: A9_JAVA, note: 'Both versions return the same results for every whole number from -3 to 29 in our run. A loop condition of d * d &lt;= n avoids calling a square root function and the rounding questions that come with it.' }
      ]
    },
    {
      id: 'hard', tint: 'tint', eyebrow: 'An honest answer',
      h2: 'Is ICS3U hard?',
      lede: 'It depends less on talent than on four specific skills, and all four can be taught. Here is what our Grade 11 students actually find hard. Nobody can honestly promise a mark in advance, and we do not.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Loops and indexes', p: 'Where a loop starts, where it stops and which index is the last one. Python&rsquo;s range stops before its end value; a Java array of length 3 ends at index 2. In our classes, most marks lost on arrays come from being one position out.' },
          { h3: 'Debugging without guessing', p: 'Faced with an error, many students change things at random. The curriculum asks them to interpret error messages and trace programs, and that is a habit: read the message, find the line, predict, then test.' },
          { h3: 'Planning before typing', p: 'The course expects pseudocode, flow charts and a test plan. Students who type first get through short programs, then hit a wall when the project arrives.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The project near the end',
          left: [
            'Strand B asks students to &ldquo;apply a software development life-cycle model to a software development project&rdquo;, and names the phases as &ldquo;problem definition, analysis, design, writing code, testing, implementation, maintenance&rdquo;. In most schools that becomes a larger final project, often called the culminating task, worked on over several weeks.',
            'What goes wrong is rarely the code. It is a project chosen too big, started too late, with no working version saved along the way. We help students cut a project to a size they can finish, then add features only once the core works.'
          ],
          rightH3: 'Who finds it easier, and who finds it harder',
          right: [
            'Students who have coded before often coast for a month, then meet arrays and subprograms with the same habits that worked for ten-line programs. Students who have never coded find the first weeks steep but often build cleaner habits, because they learn tracing from the start.',
            'A student comfortable with Grade 10 math usually finds the logic manageable. A better warning sign than any math mark is a student who cannot explain, line by line, a program they wrote last week.'
          ] }
      ]
    },
    {
      id: 'exam', tint: 'deep', eyebrow: 'Exam review',
      h2: 'An ICS3U final exam review plan',
      lede: 'A plan of ours for the last month of the course, written for a final evaluation that is part exam and part project. Adjust it once the teacher confirms what the final evaluation actually contains.',
      body: [
        { kind: 'ol', items: [
          '<b>Find out what the final evaluation is.</b> Ask whether there is a written exam, a coding exam on the computer, a project, or a mix, and how much each part is worth. The curriculum allows an examination, performance, essay or other method.',
          '<b>Audit the course outline.</b> List every unit from the school&rsquo;s own outline and mark each one solid, shaky or lost. Start revision with the shaky ones, not the lost ones: they move fastest.',
          '<b>Rebuild the vocabulary.</b> Data type, array, index, bound, parameter, return value, local and global scope, syntax, logic and run-time error. Write a one-line definition and a two-line example for each.',
          '<b>Trace by hand every day.</b> Three short programs a day, on paper, with a trace table, before running them. Written questions often ask students to read code, and tracing is how you read it.',
          '<b>Rewrite the classic algorithms from a blank file.</b> Total, highest or lowest, count, linear search, then inserting into a sorted array. No notes, no copying, then compare with your class versions.',
          '<b>Practise the three kinds of error.</b> Take a working program, plant one syntax, one logic and one run-time error, and swap with a classmate. Naming the kind of error is often its own exam question.',
          '<b>Write one complete test plan.</b> For one of your programs: normal values, boundary values and invalid input, with expected results written before you run it.',
          '<b>Finish the project before polishing it.</b> Keep a saved working version at every milestone, write the documentation as you go, and stop adding features a week before it is due.',
          '<b>Sit one timed practice under exam conditions.</b> Use your own old tests and our ten questions above, at the real length, with no computer for the written part.',
          '<b>Use the last day for review only.</b> Reread your error log and trace tables. No new topics the night before.'
        ] },
        { kind: 'table', mt: true, caption: 'A four-week countdown to the ICS3U final evaluation (ours)', head: ['Weeks to go', 'Focus', 'Finished when'], numCols: [0], rows: [
          ['4', 'Outline audit and vocabulary', 'Every unit marked; every term defined with an example'],
          ['3', 'Tracing and the classic algorithms', 'Five algorithms rewritten from blank files without help'],
          ['2', 'Errors, test plans and the project core', 'The project runs end to end and has a written test plan'],
          ['1', 'Timed practice and review', 'One full timed practice done and its mistakes logged']
        ] }
      ]
    },
    {
      id: 'pathway', tint: 'tint', eyebrow: 'After Grade 11',
      h2: 'From ICS3U to ICS4U and to university computer science',
      lede: 'ICS3U opens one door inside high school and helps with a second outside it. The curriculum and the universities&rsquo; own pages say exactly how.',
      body: [
        { kind: 'table', caption: 'What ICS4U adds after ICS3U, quoted from the 2008 Ontario curriculum document (read 22 October 2026)', head: ['ICS4U expectation', 'In the curriculum&rsquo;s words'], rows: [
          ['Prerequisite', '&ldquo;Introduction to Computer Science, Grade 11, University Preparation&rdquo;, that is, ICS3U'],
          ['The course in one line', '&ldquo;Students will use modular design principles to create complex and fully documented programs, according to industry standards.&rdquo;'],
          ['Searching', '&ldquo;create linear and binary search algorithms to find data in an array&rdquo;'],
          ['Sorting', '&ldquo;create a sort algorithm (e.g., bubble, insertion, selection) to sort data in an array&rdquo;'],
          ['Recursion', '&ldquo;design a simple and efficient recursive algorithm&rdquo;'],
          ['Object-oriented design', '&ldquo;encapsulation, inheritance, method overloading, method overriding, polymorphism&rdquo;'],
          ['Files', '&ldquo;read from, and write to, an external file&rdquo;'],
          ['Teamwork tools', 'Managing source code with &ldquo;proper version control&rdquo;']
        ] },
        { kind: 'table', mt: true, caption: 'Computer science admission for Ontario students, as listed on the universities&rsquo; own pages on 22 October 2026', head: ['Program', 'Courses the page lists', 'Also on the page'], rows: [
          ['University of Waterloo, Computer Science', '&ldquo;Six Grade 12 U and/or M courses including&rdquo; Advanced Functions, Calculus and Vectors, &ldquo;Any Grade 12 U English&rdquo; and &ldquo;One other 4U course&rdquo;', 'Recommended course: &ldquo;Grade 11 U Introduction to Computer Science&rdquo;. Admission average &ldquo;from the low to mid-90s&rdquo;. The Admission Information Form &ldquo;is required for admission&rdquo;; its deadline is February 15, 2027'],
          ['University of Toronto St. George (TAD)', 'ENG4U / EAE4U and MCV4U', 'Supplemental application: Required'],
          ['University of Toronto Mississauga (TMX)', 'ENG4U / EAE4U, MHF4U and MCV4U', 'MDM4U: Recommended'],
          ['University of Toronto Scarborough (TXC)', 'ENG4U / EAE4U, MCV4U and MHF4U', 'All three campuses ask for an &ldquo;Ontario Secondary School Diploma (OSSD) with six subjects at the 4U/M level, including English&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the two tables say together',
          left: [
            'Waterloo names ICS3U, by its title, as a recommended course for Computer Science, and lists Advanced Functions and Calculus and Vectors among the required ones. None of the three University of Toronto listings we read names a computer science course among its prerequisites. In both cases mathematics is the requirement and ICS3U is the preparation.',
            'So a Grade 11 student serious about university computer science should plan the math sequence first: Functions in Grade 11, then Advanced Functions, and Calculus and Vectors in Grade 12. Our <a class="ag-inline-link" href="/online-math-tutor-canada">math tutoring for Canadian students</a> covers that sequence.'
          ],
          rightH3: 'Why ICS3U still matters',
          right: [
            'A first-year computer science course moves quickly. Students who arrive able to trace code, test the edges and plan a program spend their first term on new ideas rather than on the habits ICS3U teaches.',
            'Contests are the other bridge. The Canadian Computing Competition is run by the University of Waterloo&rsquo;s CEMC, which says &ldquo;all students must participate through their school.&rdquo; Its Junior level starts with questions CEMC describes as &ldquo;basic loops and conditions&rdquo;, very like ICS3U. Our <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> explains the format.'
          ] },
        { kind: 'source', html: 'Sources, read 22 October 2026: ' + SRC_CURRIC + ' (ICS4U course pages); <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/computer-science" rel="noopener" target="_blank">University of Waterloo, Computer Science</a> and its Admission Information Form page; <a class="ag-inline-link" href="https://future.utoronto.ca/undergraduate-programs/computer-science/" rel="noopener" target="_blank">University of Toronto, Computer Science</a>; CEMC&rsquo;s <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CCC</a> pages. Requirements change between admission cycles, so check the universities&rsquo; pages in the year your teen applies. We are not connected with either university or with CEMC.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'Online, summer school and the credit',
      h2: 'ICS3U online and in summer school: help with the course, not the credit',
      lede: 'Many searches for ICS3U online or ICS3U summer school come from families who want the credit itself. That part we do not offer, and it is better to say so clearly.',
      body: [
        { kind: 'two',
          leftH3: 'Where the credit comes from',
          left: [
            'An ICS3U credit is granted by the school that teaches and evaluates the course: the student&rsquo;s own school, a board&rsquo;s summer or night school, or an Ontario credit provider. Modern Age Coders is none of these. We teach alongside the student&rsquo;s school course and do not grant Ontario credits.',
            'For the diploma, computer studies counts in the compulsory-credit choice groups on Ontario&rsquo;s graduation requirements page: in Group 3 for students who started Grade 9 in 2023 or earlier, and in the STEM-related course group for later starters (page updated September 02, 2026).'
          ],
          rightH3: 'Where we fit',
          right: [
            'Families come to us when a student is taking ICS3U at school, online or in summer school and wants a second teacher: someone to trace their code with them, explain an error, review the plan for the project or run a practice exam. We work from the student&rsquo;s own assignments and outline.',
            'Some families start the summer before Grade 11, so that the first unit of ICS3U is a second look rather than a first. A summer course with a credit attached moves fast, and the same groundwork helps there too.'
          ] },
        { kind: 'table', mt: true, caption: 'The Ontario clock for live classes, 2026 to 2027 (Eastern time, from the IANA time zone database 2026e; our teachers work on India time, UTC+5:30)', head: ['Period', 'Eastern time is', 'India time is ahead by'], rows: [
          ['Until 1 November 2026', 'UTC-4', '9 hours 30 minutes'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', '10 hours 30 minutes'],
          ['From 14 March 2027', 'UTC-4', '9 hours 30 minutes']
        ] },
        { kind: 'p', mt: true, html: 'Most of Ontario is on Eastern time; parts of the northwest keep a different clock, so families there should confirm times in their own zone. The clocks go back on 1 November 2026 and forward on 14 March 2027, so confirm the class time with us again in the week of each change.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages from first program to ready for ICS4U',
    lede: 'Our own stages, drawn from teaching students through their first real programming course.',
    table: { caption: 'Stages of a Grade 11 programmer (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Copier', 'Runs examples from class and changes the numbers, but cannot yet say why a line is there'],
      ['2. Tracer', 'Predicts the output of a short program on paper before running it, and is usually right'],
      ['3. Planner', 'Writes pseudocode and a test plan first, then subprograms with parameters'],
      ['4. Ready for ICS4U', 'Starts from a blank file, debugs without guessing, and explains any line of their own code']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to explain one program from this week out loud. A student who can walk through it line by line is further along than their latest mark may show.',
      'Stage 2 is where outside help changes most. Tracing is slow at first, and a patient second teacher makes it a habit instead of a chore.'
    ] },
    right: { h3: 'For students', ps: [
      'Predict before you press Run. Write what you expect, then compare. The gap is where you learn.',
      'Keep an error log: the message, the line, the cause, the fix. By exam time it is the most useful page you own.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Ontario high school coders',
    lede: 'Each one is taught live online by a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Alongside the school course', sub: 'Grades 10 to 12', courses: [
        { code: 'ICS / SCH / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic, data structures and the algorithms ICS4U asks for.' },
        { code: 'ICS / SCH / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Saved versions for every project milestone.' },
        { code: 'ICS / SCH / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'A third language, and a fast one.' }
      ] },
      { num: 'II', h3: 'Contests and challenges', sub: 'Grades 9 to 12', courses: [
        { code: 'ICS / CON / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'Timed problems in the CEMC contest format.' },
        { code: 'ICS / CON / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Harder problem sets once the CCC feels easy.' },
        { code: 'ICS / CON / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Plan, build and present with a team.' }
      ] },
      { num: 'III', h3: 'Where computer science goes next', sub: 'Teens', courses: [
        { code: 'ICS / NXT / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'One of the research areas strand D names.' },
        { code: 'ICS / NXT / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real data sets, cleaned and charted in Python.' },
        { code: 'ICS / NXT / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Websites and browser games friends can open.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes that follow the school term',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Ontario time, set when you choose the batch.' },
      { time: 'Weekends', l: 'Weekend mornings in Eastern time suit many Grade 11 timetables.' },
      { time: '1-on-1', l: 'Around tests, project deadlines and the exam weeks.' }
    ],
    cells: [
      { h3: 'One teacher all term', p: 'The same person who knows the outline.' },
      { h3: 'The school&rsquo;s language', p: 'Whatever the class uses, usually Python or Java.' },
      { h3: 'Their own assignments', p: 'Explained, never written for them.' },
      { h3: 'Tracing on screen', p: 'Shared screen, shared trace table.' },
      { h3: 'Exam weeks planned', p: 'Practice timed to the school dates.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or just your teen.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Projects by learners who once stood where an ICS3U student stands now. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Families and students on Google, quoted as written.',

  fees: {
    h2: 'Fees',
    lede: 'The first class costs nothing. After it, families pay a monthly fee for eight live classes a month, shown here in your own currency, with no term contract, and you can stop at the end of any month.',
    free: ['A free first class', 'Bring this week&rsquo;s assignment', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Paid monthly'],
    one: ['A teacher for your teen alone', 'Times around school deadlines', 'Planned from their own course']
  },

  faq: {
    eyebrow: 'Questions from Ontario families',
    h2: 'ICS3U: common questions',
    items: [
      { q: 'What is ICS3U?', a: 'ICS3U is Introduction to Computer Science, Grade 11, University Preparation, an Ontario course described in the 2008 Computer Studies curriculum for Grades 10 to 12. It covers programming with data types, one-dimensional arrays, control structures and subprograms, software development in teams, computer systems, and topics in computer science research and careers.' },
      { q: 'Do you grant the ICS3U credit?', a: 'No. We teach alongside the student\'s school course and do not grant Ontario credits. Families who need the ICS3U credit take the course at school, at a board\'s summer or night school, or through an Ontario credit provider, and use our classes for the teaching and practice around it.' },
      { q: 'Is ICS3U hard?', a: 'It is manageable for most students who keep up, but four things catch people: loop bounds and array indexes, debugging without guessing, planning before typing, and the larger project near the end. All four are skills that improve with practice. Nobody can honestly promise a mark in advance.' },
      { q: 'Does ICS3U use Python or Java?', a: 'Either, depending on the school. The 2008 curriculum says the programming language and the order of topics are left to the teacher\'s professional judgement. We teach in whichever language your teen\'s class uses.' },
      { q: 'What is the prerequisite for ICS3U?', a: 'None. The 2008 curriculum lists no prerequisite for ICS3U, and the current Ontario curriculum website shows none either. ICS3U is itself the prerequisite for ICS4U, the Grade 12 university preparation course.' },
      { q: 'What is the difference between ICS3U and ICS3C?', a: 'ICS3U is the university preparation course, Introduction to Computer Science, and leads to ICS4U. ICS3C is the college preparation course, Introduction to Computer Programming, which focuses on programming skills and leads to ICS4C. Neither has a prerequisite and each is worth one credit.' },
      { q: 'How is the ICS3U final mark worked out?', a: 'The 2008 curriculum sets 70 per cent of the grade from evaluations during the course and 30 per cent from a final evaluation near the end, such as an examination, a performance or another suitable method. Each school decides the exact form, so ask the teacher what the final evaluation contains.' },
      { q: 'Do I need ICS3U for computer science at Waterloo or U of T?', a: 'On 22 October 2026, Waterloo listed Grade 11 U Introduction to Computer Science as a recommended course for Computer Science, with Advanced Functions and Calculus and Vectors among the required courses. The University of Toronto pages listed English and math courses for all three campuses and named no computer science course among the prerequisites.' },
      { q: 'What happened to ICS2O?', a: 'ICS2O, Introduction to Computer Studies, is described in the 2008 curriculum document. The current Ontario curriculum website lists ICD2O, Digital Technology and Innovations in the Changing World (2023), as its Grade 10 computer studies course and does not list ICS2O. Neither source says one replaced the other.' },
      { q: 'How should my teen study for the ICS3U final exam?', a: 'Start four weeks out: confirm what the final evaluation contains, audit the school course outline, trace short programs by hand every day, rewrite the classic array algorithms from a blank file, practise naming syntax, logic and run-time errors, and finish the project before polishing it.' },
      { q: 'What times are classes for Ontario families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are agreed in Eastern time for most of Ontario; the clocks change on 1 November 2026 and 14 March 2027, so confirm the class time again in those weeks.' },
      { q: 'How much does ICS3U help cost?', a: 'The first class is free. After that, families pay a monthly fee and can stop at the end of any month. The fees section on this page shows the current figure for a batch and for one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario students and families.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we have written for Canadian families.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live classes for Ontario learners of every age.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The Waterloo programming contest, explained.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Gauss, Pascal, Euclid and the rest of the CEMC set.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Functions, Advanced Functions, Calculus and Vectors.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A method for finding the line that is wrong.' },
      { href: '/python-indentation-error-explained', label: 'Python IndentationError', p: 'Why Python cares where a line starts.' },
      { href: '/blog/recursion-explained-for-beginners', label: 'Recursion for beginners', p: 'The ICS4U idea that ICS3U students ask about early.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class with us looks like, minute by minute.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the school language, the unit your teen is on and the next test or deadline. The first class starts from their current assignment, not from a script.',
    readFirst: 'Prefer to look first? <a class="ag-inline-link" href="/how-we-teach">Our teaching method</a> is written out in full, and the <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">companion course syllabus</a> lists every week of the plan.',
    note: 'Classes are live on video with teachers who work from India, so nobody visits your home and there is no centre to drive to. WhatsApp is the quickest way to reach us from Ontario.',
    formNote: 'The first class is free, and we never ask for card details to book it.'
  },

  footer: {
    cols: [
      { h4: 'School computer science', links: [
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'ICS3U and ICS4U companion' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/blog/python-vs-java-which-to-learn-first', label: 'Python vs Java' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Predict, trace, then test the edges'
  },

  personalityCss: `
.ag-root.ag-ics .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-ics .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ics .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ics .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-ics .ag-code-head span { text-transform: uppercase; letter-spacing: 0.06em; }
.ag-root.ag-ics .ag-steps li { margin-bottom: 0.55rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), fetched raw 22 October 2026: ICS3U description, "Prerequisite: None", four strands and their overall expectations, specific expectations A1.2, A1.5, A2.3, A3.2, A4.1, A4.4, A4.5, B1.1, B3.1, B3.2, B3.3, B4.1, B4.4, B4.5, C3.4; course type definitions; "left to the teacher\'s professional judgement"; "objects-first"; 70 / 30 final grade; one credit, 50% or higher; ICS3C description and strands; ICS2O strands; ICS4U description and expectations. Ontario curriculum content API: current list ICS3U, ICD2O, ICS4U, ICS3C, ICS4C (no ICS2O); ICD2O 2023 description and strands. Waterloo and U of T Computer Science pages; ontario.ca graduation requirements (updated September 02, 2026).',
    localProject: 'Our longest-run problem (a practice-minutes log, goal 30, tie goes to the earlier run) solved in Python and Java, both run and printing "Longest run: 3 days, starting on day 4", with a generated trace table and a six-case test plan that passes in both languages; ten original practice questions (tracing, debugging, writing a method, choosing a data structure) with run-checked answers; a ten-step exam plan and four-week countdown. Lesson family: tracing and testing.',
    requiredMentions: ['one-dimensional arrays', 'Thirty per cent of the grade', 'objects-first', 'stepwise refinement, divide and conquer, working backwards', 'Grade 11 U Introduction to Computer Science', 'ENG4U / EAE4U', 'use a tracing technique to understand program flow', 'Digital Technology and Innovations in the Changing World', 'Introduction to Computer Programming, Grade 11, College Preparation', 'longest_run', 'Longest run: 3 days, starting on day 4', 'ArrayIndexOutOfBoundsException', 'highest([-8, -3, -12])'],
    sources: [
      { claim: 'ICS3U description, prerequisite, strands and expectations; ICS3C and ICS4U; ICS2O; language left to the teacher; 70 / 30 final grade; one credit.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'The current computer studies course list (ICS3U, ICD2O, ICS4U, ICS3C, ICS4C) and the ICD2O course record.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.part_of%5Bcontains%5D=secondary___computer_studies__copy_&depth=0&elements=code,name,year_issued,site___grade,prerequisites' },
      { claim: 'Waterloo Computer Science: required Grade 12 courses, the recommended Grade 11 U Introduction to Computer Science, admission average, AIF.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'University of Toronto Computer Science prerequisites by campus (TAD, TMX, TXC).', url: 'https://future.utoronto.ca/undergraduate-programs/computer-science/' },
      { claim: 'Computer studies in the OSSD compulsory-credit choice groups.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' }
    ],
    rejectedClaims: [
      'That ICD2O replaced ICS2O: neither source says so; the page states the two listings side by side.',
      'That "culminating task" or "culminating activity" is ministry wording: the 2008 document does not use it; the page calls it the term schools commonly use.',
      'Any mark, grade or admission outcome from our classes: none promised.',
      'That ICD2O or any Grade 10 course is needed or recommended for ICS3U: the 2008 table lists no prerequisite.',
      'That ICD2O meets the technological education credit: only computer studies in the choice groups is verified.',
      'Named credit providers, summer schools or individual Ontario schools: none named.',
      'An admission year for the U of T requirements: the page states none, so the read date is given instead.',
      'Any affiliation with the Ontario Ministry of Education, a school board, CEMC, Waterloo or U of T: none, and the page says so.'
    ]
  }
};
