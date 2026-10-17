'use strict';
// Coding classes for high school students (ag- grade-band door, grades 9 to 12; US cluster Phase 2, row 16).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4 and autocomplete_us.tsv): "coding classes for high schoolers", "computer science for
// high school", "computer science for high school students", "computer programming for high school students",
// "coding for high school".
// Sources, read raw on 17 October 2026 (copies in keyword-research-2026-09/us/src/coding-classes-for-high-school-students/):
//  - Code.org (2025). 2025 State of AI + CS Education, raw data sheet (src-codeorg/sheet.xlsx), national rows only,
//    tabs Access Percent over the Years, Most Recent Access Data, Participation Percent over the Years, Most Recent
//    Participation Data: access 45% (2018-2019, "data for 2018-2019 is only from 39 states"), 47%, 51%, 53%, 57.7%,
//    60%, 60% (2024-2025); most recent 14,805 of 24,405 high schools offering CS, 60%, "Combined Years", national total
//    "Includes BIE schools"; participation 5.1%, 6.2%, 6.4%, 6.4%, 6.1% (2020-2021 to 2024-2025); 871,490 of
//    14,364,449 high school students enrolled in CS (students total from NCES Digest Table 203.04, Fall 2022).
//    Not used: Geography, Size, Gender, Race, Other Student Groups, Graduation and Demographics tabs.
//  - apcentral.collegeboard.org AP CSA course and exam pages: "introductory college-level computer science course";
//    four units with multiple-choice weightings 15%-25%, 25%-35%, 10%-18%, 30%-40%; "This is a fully digital exam."
//    (Bluebook); Section I "42 Questions | 1 Hour 30 Minutes | 55% of Exam Score"; Section II "4 Questions | 1 Hour 30
//    Minutes | 45% of Exam Score"; Q3 "Data Analysis with ArrayList", Q4 "2D Array"; exam "Wed, May 12, 2027 | Session 2".
//  - AP CSP course and exam pages: "introductory college-level computing course"; five big ideas; Section I "70
//    multiple-choice questions | 120 minutes | 70% of score"; Section II "30% of score", Create performance task with
//    "9 hours in-class"; Create task deadline "Fri, Apr 30, 2027" "11:59 PM ET"; exam "Fri, May 14, 2027 | Session 1".
//  - apcentral exam-dates page: 2027 AP Exams "over two weeks in May: May 3-7 and May 10-14" (en dashes normalised).
//  - k12cs.org grade band statements, "By the end of Grade 12": Algorithms "People evaluate and select algorithms based
//    on performance, reusability, and ease of implementation."; Control "Programmers consider tradeoffs related to
//    implementation, readability, and program performance when selecting and combining control structures."; Modularity
//    "Complex programs are designed as systems of interacting modules"; Program Development "Systematic analysis is
//    critical for identifying the effects of lingering bugs."; Network "Each device is assigned an address that uniquely
//    identifies it on the network." FAQ: AP CSP "influenced the development of the" framework.
//  - nces.ed.gov glossary: Secondary/high school "A school that offers more of grades 9 through 12 than grades 5 through
//    8 and no kindergarten through grade 4."
//  - code.org/en-US/curriculum (CodeAI): AI Foundations "6 Units", grades 9-12; Computer Science Principles and
//    Computer Science A listed for grades 9, 10, 11, 12; CSP tool App Lab, CSA tool Java Lab.
// Blocked (not circumvented): csteachers.org (403).
// Our own material, labelled: the Java ArrayList removal example (compiled and run with Java 22 before printing; output
// shown in comments), the four-year plan, the stage ladder, and "about two in five" read from the published 60%.
// Lesson family: tracing state through a loop (why removing while counting up skips an element).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const JAVA = `import java.util.ArrayList;

public class RemoveShort {
    // Bug: removing while counting up skips the next word
    static void removeShortBuggy(ArrayList<String> words) {
        for (int i = 0; i < words.size(); i++) {
            if (words.get(i).length() < 4) {
                words.remove(i);
            }
        }
    }

    // Fix: count down, so no word gets skipped
    static void removeShort(ArrayList<String> words) {
        for (int i = words.size() - 1; i >= 0; i--) {
            if (words.get(i).length() < 4) {
                words.remove(i);
            }
        }
    }

    public static void main(String[] args) {
        String[] start = {"ant", "bee", "tiger", "cat", "zebra"};
        ArrayList<String> a = new ArrayList<String>();
        ArrayList<String> b = new ArrayList<String>();
        for (String w : start) {
            a.add(w);
            b.add(w);
        }
        removeShortBuggy(a);
        removeShort(b);
        System.out.println(a);  // [bee, tiger, zebra]
        System.out.println(b);  // [tiger, zebra]
    }
}`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GRADES 9 TO 12', blurb: 'Coding and computer science for high schoolers: how many US high schools offer CS, AP CSP and AP CSA in 2027, a Java bug worth knowing, and a four-year plan.' },
  slug: 'coding-classes-for-high-school-students',
  code: 'hs',
  accent: '#304C0B',
  accentRationale: 'High school grades door, US: #304C0B, a deep muted varsity green chosen with the accent picker (hue 86, s .86, v .30), allocated in alloc.tsv row 16 away from the other US accents, contrast 9.15 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding classes for high school students',
  title: 'Coding Classes for High School Students: CS, AP and Beyond',
  description: 'Computer science for high schoolers: how many US high schools offer CS, AP CSP and AP CSA exam facts for 2027, a Java bug worth knowing and a four-year plan.',
  ogDescription: 'Grades 9 to 12: Code.org (2025) reports 60% of US high schools offering CS. AP CSP and AP CSA explained from College Board pages, plus live classes in Python and Java.',
  twitterDescription: 'Coding for high schoolers: CS access data, AP CSP and AP CSA in 2027, and a four-year plan.',
  pageName: 'Coding Classes for High School Students',
  webPageDescription: 'A guide for US high school students and parents to computer science in grades 9 to 12, with national Code.org data, College Board AP facts for 2027 and the K-12 CS Framework grade 12 expectations.',
  courseDescription: 'Live online coding and computer science classes for US high school students in grades 9 to 12, including AP Computer Science Principles and AP Computer Science A preparation, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Coding for high school students',
  navLinks: [
    { href: '#access', label: 'CS in US high schools' },
    { href: '#ap', label: 'AP CSP and CSA' },
    { href: '#framework', label: 'By grade 12' },
    { href: '#java', label: 'A Java bug' },
    { href: '#plan', label: 'Four-year plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; Ages 14 to 18',
  h1: 'Coding classes for high school students',
  lede: 'At Modern Age Coders, high school students in grades 9 to 12, ages 14 to 18, learn to code live online in a batch or one to one: Python, Java, web and AI, plus preparation for AP Computer Science Principles and AP Computer Science A. Many US high schools still offer no computer science at all, which is where outside classes fill the gap.',
  secondaryCta: { href: '#ap', label: 'AP CSP vs AP CSA' },
  wa: 'Hello Modern Age Coders, I am a high school student in the US (or a parent of one) and want help with coding or AP Computer Science. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python and Java taught from scratch',
  spec: [
    ['Grades', '9 to 12'],
    ['Ages', '14 to 18'],
    ['Languages', 'Python, Java, JavaScript'],
    ['AP courses', 'CSP and CSA preparation'],
    ['AP exams', 'May 2027, in Bluebook'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Code.org (2025) reports that 60% of US high schools offered computer science in 2024 to 2025, and 6.1% of high school students were enrolled in it. A strong high school path is a first language such as Python, then AP Computer Science Principles or AP Computer Science A (Java), then a specialism such as AI, web or competitive programming.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses most high schoolers start with',
    lede: 'Live, with a regular teacher, and built for students who may have no computer science class at school.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'HS / 01', title: 'Python for teens', note: 'For 13 to 18 year olds. A strong first language in ninth grade.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'HS / 02', title: 'AP CS Principles', note: 'Beginner friendly. The Create task and the exam.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'HS / 03', title: 'AP CS A in Java', note: 'From Java basics to the four free-response questions.' }
    ]
  },

  sections: [
    {
      id: 'access', tint: 'tint', eyebrow: 'The national picture',
      h2: 'How many US high schools offer computer science',
      lede: 'Whether a student can take computer science at all still depends on which high school they attend. The figures below are national values from the Code.org State of AI + CS Education data, quoted as published.',
      body: [
        { kind: 'table', caption: 'US high schools offering computer science, by school year (Code.org, 2025, State of AI + CS Education, national row)', head: ['School year', 'High schools offering CS'], numCols: [1], rows: [
          ['2018 to 2019', '45% (data from 39 states only)'],
          ['2019 to 2020', '47%'],
          ['2020 to 2021', '51%'],
          ['2021 to 2022', '53%'],
          ['2022 to 2023', '57.7%'],
          ['2023 to 2024', '60%'],
          ['2024 to 2025', '60%']
        ] },
        { kind: 'table', mt: true, caption: 'Most recent national counts (Code.org, 2025, State of AI + CS Education)', head: ['Measure', 'Published figure', 'Note from the data'], rows: [
          ['High schools offering CS', '14,805 of 24,405, or 60%', 'Combined years; includes Bureau of Indian Education schools'],
          ['High school students enrolled in CS', '871,490 of 14,364,449, or 6.1%', 'Student total taken from the NCES Digest, Table 203.04, Fall 2022'],
          ['Share of students in CS, by year', '5.1% (2020 to 2021), 6.2%, 6.4%, 6.4%, 6.1% (2024 to 2025)', 'National participation row']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the numbers',
          left: [
            'Access grew quickly from 45% to 60% and then held at 60% for two years. Put the other way round, about two in five US high schools in the data did not offer a computer science course, which is our reading of the published 60%.',
            'Participation is the starker figure. Even where courses exist, only about six in every hundred high school students were enrolled in computer science in a given year.'
          ],
          rightH3: 'What a family can do with this',
          right: [
            'Check your school&rsquo;s course catalogue for AP Computer Science Principles, AP Computer Science A or an introductory programming class. If none is offered, or the class clashes with something else, an outside course can cover the same ground.',
            'Rules differ by state, and our state pages explain them only where we have read the state&rsquo;s own sources, such as <a class="ag-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina&rsquo;s graduation requirement</a>.'
          ] },
        { kind: 'source', html: 'Suggested citation: Code.org (2025). 2025 State of AI + CS Education. We quote national values from its <a class="ag-inline-link" href="https://advocacy.code.org/report-data/" rel="noopener" target="_blank">published data</a> and do not republish the dataset. For the school definition, NCES describes a secondary or high school as "A school that offers more of grades 9 through 12 than grades 5 through 8 and no kindergarten through grade 4." We are not connected with Code.org (CodeAI) or NCES.' }
      ]
    },
    {
      id: 'ap', tint: 'deep', eyebrow: 'Advanced Placement',
      h2: 'AP Computer Science Principles and AP Computer Science A in 2027',
      lede: 'The two AP computer science courses are the most recognisable high school options in the US. College Board describes both as introductory college-level courses, but they test quite different things.',
      body: [
        { kind: 'table', caption: 'AP CSP and AP CSA, from College Board AP Central (read 17 October 2026)', head: ['Point', 'AP Computer Science Principles', 'AP Computer Science A'], rows: [
          ['College Board description', '"an introductory college-level computing course" covering the breadth of computer science', '"an introductory college-level computer science course" focused on writing and testing code'],
          ['Programming', 'The Create task: students develop "a computer program of their choice"', 'Java throughout'],
          ['Course structure', 'Five big ideas, with Algorithms and Programming weighted 30% to 35% of the multiple choice', 'Four units, with Data Collections weighted 30% to 40% of the multiple choice'],
          ['Section I', '70 multiple-choice questions, 120 minutes, 70% of the score', '42 questions, 1 hour 30 minutes, 55% of the exam score'],
          ['Section II', 'Create performance task and written response, 30% of the score; 9 hours of in-class time for the task', '4 free-response questions, 1 hour 30 minutes, 45% of the exam score'],
          ['2027 deadlines', 'Create task submitted as final by Friday, April 30, 2027, 11:59 PM ET; end-of-course exam Friday, May 14, 2027 (Session 1)', 'Exam Wednesday, May 12, 2027 (Session 2)'],
          ['Format', 'End-of-course exam fully digital in the Bluebook app', '"This is a fully digital exam." taken in Bluebook']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which to take first',
          left: [
            'For a student with little coding behind them, AP CSP is the gentler start: it is broad, the Create task lets them build a program of their own choice, and much of the multiple choice is about data, the internet and the impact of computing.',
            'AP CSA is narrower and deeper. Every free-response question asks students to write Java, including one on ArrayList data and one on a 2D array, so it rewards a year of steady programming practice. Our longer comparison is in <a class="ag-inline-link" href="/blog/ap-csp-vs-ap-csa-which-to-take-first">AP CSP vs AP CSA</a>.'
          ],
          rightH3: 'Dates and how they work',
          right: [
            'College Board says the 2027 AP Exams run over two weeks in May, May 3 to 7 and May 10 to 14. AP CSP has two pieces with two dates: the Create task deadline at the end of April and the exam in the second week of May.',
            'Credit and placement for AP scores are set by each college, not by College Board or by us. Students can look up a college&rsquo;s policy with College Board&rsquo;s AP Credit Policy Search.'
          ] },
        { kind: 'source', html: 'Sources: AP Central pages for <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam" rel="noopener" target="_blank">the AP CSP exam</a>, <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam" rel="noopener" target="_blank">the AP CSA exam</a>, both course pages and the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates" rel="noopener" target="_blank">2027 exam dates</a>, read 17 October 2026. AP is a trademark of College Board, which is not connected with this page. More detail on our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP CSA classes</a> and <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP CSP coaching</a> pages.' }
      ]
    },
    {
      id: 'framework', tint: 'tint', eyebrow: 'By the end of grade 12',
      h2: 'What a high school graduate should understand, according to the K-12 CS Framework',
      lede: 'The K-12 Computer Science Framework sets its last endpoint at grade 12. Its programming statements describe a student who makes engineering decisions, not one who simply gets code to run.',
      body: [
        { kind: 'table', caption: 'Grade 12 endpoints as the framework words them (k12cs.org, read on 17 October 2026)', head: ['Strand', 'Grade 12 wording', 'What it means in class'], rows: [
          ['Algorithms', '"People evaluate and select algorithms based on performance, reusability, and ease of implementation."', 'Comparing a linear search with a binary search on the same data'],
          ['Control', '"Programmers consider tradeoffs related to implementation, readability, and program performance when selecting and combining control structures."', 'Choosing a for loop or a while loop, and saying why'],
          ['Modularity', '"Complex programs are designed as systems of interacting modules"', 'Classes in Java, modules in Python'],
          ['Program development', '"Systematic analysis is critical for identifying the effects of lingering bugs."', 'Tracing a loop by hand, as in the Java example below'],
          ['Networks', '"Each device is assigned an address that uniquely identifies it on the network."', 'AP CSP Big Idea 4: Computer Systems and Networks']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where AP fits',
          left: [
            'The framework&rsquo;s own FAQ says AP Computer Science Principles "influenced the development of the" framework, and many of its writers worked on AP CSP. That is why the grade 12 statements and the AP CSP big ideas read so similarly.',
            'AP CSA goes further on the programming side, especially classes and data collections, which map onto the modularity statement.'
          ],
          rightH3: 'Beyond the exam',
          right: [
            'None of the grade 12 statements is about a particular language. They are about judgement: which algorithm, which structure, which trade-off. A student who can explain those choices out loud has understood far more than one who memorised syntax.',
            'This is the standard we hold our high school students to: every program comes with a sentence on why it is written the way it is.'
          ] },
        { kind: 'source', html: 'The <a class="ag-inline-link" href="https://k12cs.org/framework-statements-by-grade-band/" rel="noopener" target="_blank">framework&rsquo;s grade-band page</a> and <a class="ag-inline-link" href="https://k12cs.org/faq/" rel="noopener" target="_blank">FAQ</a>, both read on 17 October 2026, are the sources here; we reproduce only brief passages, as the Creative Commons licence permits.' }
      ]
    },
    {
      id: 'java', tint: 'deep', eyebrow: 'A bug worth knowing',
      h2: 'Why removing from an ArrayList while counting up skips an element',
      lede: 'Every year, high school Java students meet the same bug. It is short enough to show in full, and understanding it is a real step towards the "systematic analysis" the framework asks for. This is our teaching example, not an exam question.',
      body: [
        { kind: 'code', label: 'Java &middot; removing short words two ways', lang: 'java', code: JAVA, note: 'Ours. We compiled and ran it with Java 22 before printing it; the comments show the real output. The buggy version keeps "bee" because removing "ant" shifts "bee" into position 0 just after position 0 was checked.' },
        { kind: 'table', mt: true, caption: 'Tracing the buggy loop by hand (ours)', head: ['i', 'List before the check', 'Word checked', 'Action'], rows: [
          ['0', '[ant, bee, tiger, cat, zebra]', 'ant', 'Removed, so bee moves to index 0'],
          ['1', '[bee, tiger, cat, zebra]', 'tiger', 'Kept; bee was never checked'],
          ['2', '[bee, tiger, cat, zebra]', 'cat', 'Removed, so zebra moves to index 2'],
          ['3', '[bee, tiger, zebra]', 'none', 'Loop ends, since 3 is not less than size 3']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the fix works',
          left: [
            'Counting down means every removal shifts only words to the right of i, and those have already been checked. Nothing slips past.',
            'Another fix is to decrease i by one after each removal. Both work; students should be able to explain why, which is exactly the trade-off thinking in the grade 12 control statement.'
          ],
          rightH3: 'How we use examples like this',
          right: [
            'We ask students to predict the output before running anything, then trace it in a table like the one above. The habit of tracing by hand is what lets a student debug code they cannot run, for example on paper.',
            'We teach concepts like this so students can solve their own assignments. We do not write graded schoolwork for anyone.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Grade 9 to grade 12',
      h2: 'A four-year computer science plan for high school',
      lede: 'A plan we suggest to families, adjusted for what the school offers. It assumes a student starting from little or no coding in ninth grade.',
      body: [
        { kind: 'table', caption: 'A suggested high school sequence (ours)', head: ['Grade', 'Main focus', 'Alongside it'], rows: [
          ['9th grade', 'Python fundamentals: variables, loops, functions, lists, small projects', 'Typing fluency, reading error messages'],
          ['10th grade', 'AP Computer Science Principles, or a deeper Python year', 'A first project for a real user; a first contest or hackathon'],
          ['11th grade', 'AP Computer Science A in Java', 'Data structures, tracing, writing classes'],
          ['12th grade', 'A specialism: AI and machine learning, web development, or competitive programming', 'A portfolio piece with a clear write-up']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the school offers AP',
          left: [
            'Take the school course and use outside classes for practice and projects. The extra hours matter most in AP CSA, where fluent Java writing decides the free-response section.',
            'If AP CSP and AP CSA are both on offer, many students take CSP first. Strong programmers sometimes go straight to CSA.'
          ],
          rightH3: 'If it does not',
          right: [
            'Students can study for either AP exam outside school; ask your school counselor early about how exam registration works there, because schools handle it differently.',
            'A self-built portfolio also carries weight on its own: an app, a data project or a contest record shows what a student can do, whatever their school offered.'
          ] },
        { kind: 'p', mt: true, html: 'For ideas beyond class, see <a class="ag-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>, <a class="ag-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>, our <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a> and <a class="ag-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a>.' }
      ]
    },
    {
      id: 'portfolio', tint: 'deep', eyebrow: 'Showing your work',
      h2: 'A high school coding portfolio: what to keep and how to describe it',
      lede: 'Whatever a student plans after high school, a small, honest record of real projects is useful. This is the checklist we give eleventh and twelfth graders; it asks for evidence of thinking, not polish.',
      body: [
        { kind: 'table', caption: 'A portfolio checklist for high school programmers (ours)', head: ['Item', 'What it shows', 'How to present it'], rows: [
          ['One finished project people used', 'You can build for someone else', 'A short write-up: who it was for, what they asked, what you changed after testing'],
          ['One project you found hard', 'You can push through problems', 'The bug that took longest and how you found it'],
          ['Code you can explain line by line', 'The work is yours', 'Be ready to walk through any function on request'],
          ['A record of versions', 'You work like a developer', 'A Git history with clear commit messages'],
          ['Any contest or challenge entry', 'You can work to a deadline', 'What you entered and what you learned, whatever the result'],
          ['A note on AI use', 'You use tools honestly', 'Which parts used AI help and how you checked them']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why explanation matters most',
          left: [
            'Anyone reading a teenager&rsquo;s project now knows that AI can produce code. What it cannot produce is the student&rsquo;s own account of why a design was chosen and what went wrong on the way.',
            'That is why the checklist keeps returning to explanation. A modest project explained well says more than an impressive one the student cannot discuss.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'A portfolio is a record, not a ticket. We make no claims about admissions, scholarships or jobs; those decisions belong to the people who make them.',
            'What we can say is that building and explaining real projects is the most direct way we know to become a better programmer, and that is the part a student controls.'
          ] }
      ]
    },
    {
      id: 'school-courses', tint: 'tint', eyebrow: 'What schools teach',
      h2: 'The free high school courses many US schools use',
      lede: 'Where a high school does teach computer science, its teacher may well use one of Code.org&rsquo;s free courses; the organisation&rsquo;s site is branded CodeAI these days. Knowing which one helps us start a new student in the right place.',
      body: [
        { kind: 'table', caption: 'Code.org high school pathways, as listed in its curriculum catalogue (read 17 October 2026)', head: ['Pathway', 'Grades listed', 'What the catalogue says'], rows: [
          ['Computer Science Principles', '9 to 12', 'A free year-long course; programming in App Lab'],
          ['AP Computer Science A', '9 to 12', 'Java, taught in Java Lab, with labs such as a data lab'],
          ['AI Foundations', '9 to 12', '6 units, from how AI works to building web apps; one unit teaches Python']
        ] },
        { kind: 'p', mt: true, html: 'Code.org has no link with us. Sources: the <a class="ag-inline-link" href="https://code.org/en-US/curriculum" rel="noopener" target="_blank">Code.org curriculum catalogue</a>, <a class="ag-inline-link" href="https://code.org/en-US/curriculum/computer-science-principles" rel="noopener" target="_blank">CS Principles</a> and <a class="ag-inline-link" href="https://code.org/en-US/curriculum/computer-science-a" rel="noopener" target="_blank">CS A</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From beginner to builder',
    h2: 'Four stages of a high school programmer',
    lede: 'Most students who join us in ninth or tenth grade are at stage 1 or 2.',
    table: { caption: 'Stages of a high school programmer (ours)', head: ['Stage', 'How it shows'], rows: [
      ['1. Syntax learner', 'Writes short programs, needs help reading errors'],
      ['2. Problem solver', 'Breaks a task into functions, traces loops by hand, fixes own bugs'],
      ['3. Designer', 'Writes classes, chooses data structures, explains trade-offs'],
      ['4. Specialist', 'Builds a substantial project in AI, web or algorithms, documents it']
    ] },
    left: { h3: 'For parents', ps: [
      'The move from stage 2 to stage 3 usually happens during AP CSA or an equivalent year of Java.',
      'Ask your teenager to explain one design decision in their latest project. Their answer tells you which stage they are at.'
    ] },
    right: { h3: 'For students', ps: [
      'Trace before you run. Predicting output is the fastest way to find where your mental model is wrong.',
      'Finish small projects. A finished small app beats an abandoned big one in any portfolio.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for high schoolers',
    lede: 'All live online with a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Core languages', sub: 'Ages 13 to 18', courses: [
        { code: 'HS / LNG / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The AP CSA language, from zero.' },
        { code: 'HS / LNG / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Speed, memory and contest code.' },
        { code: 'HS / LNG / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-stack web', blurb: 'Front end, back end, deployed.' }
      ] },
      { num: 'II', h3: 'AI and data', sub: 'Ages 13 to 18', courses: [
        { code: 'HS / AI / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Python to real models.' },
        { code: 'HS / AI / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science', blurb: 'Ages 14 to 18, basic Python first.' },
        { code: 'HS / AI / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'How real teams share code.' }
      ] },
      { num: 'III', h3: 'Contests and security', sub: 'Ages 13 to 18', courses: [
        { code: 'HS / CMP / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest-level problem solving.' },
        { code: 'HS / CMP / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Ages 13 to 17. Ship with a team.' },
        { code: 'HS / CMP / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity', blurb: 'Defensive and ethical.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Classes that fit a teenager&rsquo;s week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evenings', l: 'Batches after school and practice, across US time zones.' },
      { time: 'Weekends', l: 'Morning sessions that leave the afternoon free.' },
      { time: '1-on-1', l: 'Extra sessions before an AP deadline.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'Someone who knows your code from last week.' },
      { h3: 'AP-aware', p: 'Teaching that follows the 2027 exam format.' },
      { h3: 'Code read line by line', p: 'Feedback on reasoning, not just results.' },
      { h3: 'Your projects', p: 'Portfolio work you can show anyone.' },
      { h3: 'Concepts, not answers', p: 'We never do graded schoolwork for students.' },
      { h3: 'Batch or private', p: 'A class of fifteen to twenty, or a teacher just for you.' }
    ]
  },

  projectsH2: 'Projects by our teen students',
  projectsLede: 'Real work by high school-age learners. Browse more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Word for word from Google reviews by parents and students.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly fees in US dollars, with no contract for the school year. Students preparing for May can add one-to-one sessions in spring, and anyone can stop at the end of a month.',
    free: ['A free first lesson', 'A level check in Python or Java', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Times you choose', 'AP or project focus']
  },

  faq: {
    eyebrow: 'Questions from students and parents',
    h2: 'Coding in high school: common questions',
    items: [
      { q: 'What percentage of US high schools offer computer science?', a: 'Code.org (2025), in its State of AI + CS Education data, reports 60% of US high schools offering computer science in 2024 to 2025, up from 45% in 2018 to 2019, when data came from 39 states.' },
      { q: 'How many high school students take computer science?', a: 'The same Code.org data reports 871,490 of 14,364,449 high school students enrolled in computer science, or 6.1%, in its most recent national figures.' },
      { q: 'Should I take AP CSP or AP CSA first?', a: 'Most beginners take AP Computer Science Principles first because it is broader and the Create task lets them build a program of their own choice. Students who already program confidently often go straight to AP Computer Science A, which is all Java.' },
      { q: 'When are the AP computer science exams in 2027?', a: 'College Board lists the AP CSA exam on Wednesday, May 12, 2027 and the AP CSP end-of-course exam on Friday, May 14, 2027. The AP CSP Create task must be submitted as final by April 30, 2027, 11:59 PM ET.' },
      { q: 'What language is AP Computer Science A?', a: 'Java. All four free-response questions ask students to write Java code, including methods, a class, ArrayList data and a 2D array.' },
      { q: 'What if my high school does not offer computer science?', a: 'Students can learn the same material outside school, including AP preparation. Ask your school counselor how AP exam registration works at your school, since schools handle it differently.' },
      { q: 'What coding language should a high schooler learn first?', a: 'Usually Python: it reads almost like English and gets students building real projects within weeks. Students heading for AP Computer Science A then add Java, usually in tenth or eleventh grade.' },
      { q: 'Do you help with homework or graded assignments?', a: 'We teach the concepts so students can solve their own assignments. We never write graded schoolwork or answer keys for anyone.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do high school coding classes cost?', a: 'First lesson free, then a fee each month. The fees section shows the figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US high school students.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'The index of our US guides.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes', p: 'Java and the free-response section.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'The Create task and the exam.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Clubs, contests and summer work.' },
      { href: '/coding-for-15-year-olds', label: 'Coding for 15 year olds', p: 'The tenth grade year.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A lesson, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the grade, what the school offers, and whether an AP exam is coming. The first lesson includes a quick level check, so the plan starts from where you actually are.',
    readFirst: 'If you want detail first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or open <a class="ag-inline-link" href="/courses">any course syllabus</a>.',
    note: 'Lessons are live on video with teachers based in India, so students anywhere in the US take part in the same way. WhatsApp is the quickest route to an answer.',
    formNote: 'No card. The first lesson costs nothing.'
  },

  footer: {
    cols: [
      { h4: 'High school coding', links: [
        { href: '/coding-for-14-year-olds', label: 'Coding for 14 year olds' },
        { href: '/coding-for-16-year-olds', label: 'Coding for 16 year olds' },
        { href: '/coding-for-17-year-olds', label: 'Coding for 17 year olds' },
        { href: '/python-for-14-year-olds', label: 'Python for 14 year olds' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Trace the loop before you run it'
  },

  personalityCss: `
.ag-root.ag-hs .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-hs .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-hs .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-hs .ag-table caption { text-align: left; font-style: normal; font-weight: 600; }
.ag-root.ag-hs .ag-code-note { line-height: 1.55; }
.ag-root.ag-hs .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Code.org (2025). 2025 State of AI + CS Education, national rows of four tabs (access by year, most recent access, participation by year, most recent participation). College Board AP Central, read raw 17 October 2026: AP CSP and AP CSA course and exam pages and the 2027 exam dates. K-12 CS Framework grade 12 statements and FAQ. NCES definition of a secondary/high school. Code.org high school catalogue.',
    localProject: 'A Java ArrayList example (ours, compiled and run with Java 22) showing why removing while counting up skips an element, with a hand trace table and the count-down fix. A four-year high school plan. Lesson family: tracing state through a loop.',
    requiredMentions: ['14,805 of 24,405', '871,490 of 14,364,449', '45% (data from 39 states only)', '57.7%', '42 questions, 1 hour 30 minutes, 55% of the exam score', '70 multiple-choice questions, 120 minutes, 70% of the score', 'Wednesday, May 12, 2027', 'Friday, April 30, 2027, 11:59 PM ET', 'People evaluate and select algorithms based on performance, reusability, and ease of implementation', 'A school that offers more of grades 9 through 12 than grades 5 through 8 and no kindergarten through grade 4', '[bee, tiger, zebra]'],
    sources: [
      { claim: 'National high school CS access and participation, by year and most recent counts.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'AP CSA description, units and weightings, exam format and 2027 date.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam' },
      { claim: 'AP CSP description, big ideas, exam format, Create task time and 2027 dates.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam' },
      { claim: '2027 AP Exams over two weeks in May.', url: 'https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates' },
      { claim: 'Grade 12 concept statements; AP CSP influenced the framework.', url: 'https://k12cs.org/framework-statements-by-grade-band/' },
      { claim: 'NCES definition of a secondary/high school.', url: 'https://nces.ed.gov/programs/coe/glossary' }
    ],
    rejectedClaims: [
      'Code.org Geography, Size, Gender, Race, Other Student Groups and Demographics tabs: not used, per the brief; the Graduation tab is also left out because its national row covers only states that report it.',
      'Any count of high schools without CS made by subtracting published figures: not printed; the page reads "about two in five" from the published 60% and labels it ours.',
      'A total AP exam length made by adding section times: not printed; each section is given as published.',
      'AP credit or admission outcomes from our classes, or any AP score promise: none; colleges set their own credit policies.',
      'The AP CSP research blurb on College Board&rsquo;s course page: it concerns demographic groups and is not used.',
      'CSTA high school standards: csteachers.org returned a 403, not circumvented.',
      'Any affiliation with College Board, Code.org (CodeAI), k12cs.org or NCES: none, and the page says so.'
    ]
  }
};
