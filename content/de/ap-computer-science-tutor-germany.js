'use strict';
// AP Computer Science tutor in Germany (ag- English door, Germany cluster P2 row DE024).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: pupils at American and international schools in Germany taking AP Computer Science A (Java) or AP Computer
// Science Principles. New for 2027: the College Board sets start times by UTC offset, so the German clock matters. The
// page gives both exam formats, the 2027 dates in German time, and one original 2D-array task in Java.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ap-computer-science-tutor-germany/,
// fetched 3 Nov 2026 with curl):
//  - apcentral csa-exam: "This is a fully digital exam."; "Bluebook testing app"; "Java Quick Reference"; "Wed, May 12,
//    2027 | Session 2"; "42 Questions | 1 Hour 30 Minutes | 55% of Exam Score"; "4 Questions | 1 Hour 30 Minutes | 45%
//    of Exam Score"; Question 1 "Methods and Control Structures", 2 "Class Design", 3 "Data Analysis with ArrayList",
//    4 "2D Array".
//  - apcentral csp-exam: "The AP Exam consists of the Create performance task and an end-of-course exam."; "Fri, Apr
//    30, 2027 11:59 PM ET Deadline"; "Fri, May 14, 2027 | Session 1"; "70 multiple-choice questions | 120 minutes | 70%
//    of score | 4 answer options"; "30% of score"; "9 hours in-class"; "2 written response questions | 60-minute
//    end-of-course exam"; "Personalized Project Reference".
//  - apcentral dates: "2027 AP Exam Schedule"; week 1 "May 3–7, 2027", week 2 "May 10–14, 2027"; late testing exists.
//  - apcentral start-times: "Beginning with the 2027 AP Exam administration, some schools will follow updated AP Exam
//    start times"; table row "+02:00 9:00 a.m. 1:00 p.m."; "The UTC offsets used are for May 2027".
//  - AGIS directory (FACTS.md 225, 230, 241): Black Forest Academy "Advanced Placement (AP) USA Curriculum & Diploma";
//    Frankfurt International School lists AP; John F. Kennedy School Berlin "Advanced Placement (AP) American High School
//    Diploma Deutsches Abitur".
//  - Time: Einheitenzeitgesetz; MESZ (UTC+2) in May 2027; summer time begins 28 March 2027.
// Our calculation: 30 April 2027 23:59 ET (EDT, UTC-4) = 1 May 2027 05:59 in Germany (UTC+2).
// Our own code (scratchpad de/w/G6/aco/PracticeLog.java, javac + java, OpenJDK 21): "Wednesday total: 170", "Busiest day:
// Wed", "Practised every day: 2". Hand check: day totals 75, 100, 170, 75, 65.
// Lesson family: trace the 2D array by hand, column by column, before you trust the loop.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const JAVA = [
  'public class PracticeLog {',
  '    private int[][] minutes;',
  '',
  '    public PracticeLog(int[][] minutes) {',
  '        this.minutes = minutes;',
  '    }',
  '',
  '    public int totalForDay(int day) {',
  '        int total = 0;',
  '        for (int row = 0; row < minutes.length; row++) {',
  '            total += minutes[row][day];',
  '        }',
  '        return total;',
  '    }',
  '',
  '    public int busiestDay() {',
  '        int top = 0;',
  '        for (int day = 1; day < minutes[0].length; day++) {',
  '            if (totalForDay(day) > totalForDay(top)) {',
  '                top = day;',
  '            }',
  '        }',
  '        return top;',
  '    }',
  '',
  '    public int everyDayCount() {',
  '        int count = 0;',
  '        for (int[] pupil : minutes) {',
  '            boolean allDays = true;',
  '            for (int m : pupil) {',
  '                if (m == 0) {',
  '                    allDays = false;',
  '                }',
  '            }',
  '            if (allDays) {',
  '                count++;',
  '            }',
  '        }',
  '        return count;',
  '    }',
  '',
  '    public static void main(String[] args) {',
  '        String[] days = {"Mon", "Tue", "Wed", "Thu", "Fri"};',
  '        int[][] data = {',
  '            {30, 0, 45, 20, 0},',
  '            {25, 30, 30, 25, 40},',
  '            {0, 50, 60, 0, 15},',
  '            {20, 20, 35, 30, 10}',
  '        };',
  '        PracticeLog log = new PracticeLog(data);',
  '        System.out.println("Wednesday total: " + log.totalForDay(2));',
  '        System.out.println("Busiest day: " + days[log.busiestDay()]);',
  '        System.out.println("Practised every day: " + log.everyDayCount());',
  '    }',
  '}'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'AP Computer Science tutor' },
  slug: 'ap-computer-science-tutor-germany',
  code: 'aco',
  accent: '#285D29',
  accentRationale: 'AP Computer Science in Germany: a forest green #285D29, darker and warmer than the hub fir so the two never sit side by side, and apart from the IB violet and the IGCSE ochre; contrast on the paper #FBF8F2 about 6.3:1 and above 4.5 on all tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'AP Computer Science tutor in Germany',
  title: 'AP Computer Science Tutor in Germany: CSA and CSP in English',
  description: 'AP Computer Science A and Principles tutoring in English for pupils in Germany: both exam formats, May 2027 dates in German time, Java practice and live classes.',
  ogDescription: 'Live AP Computer Science tutoring in English for pupils at American and international schools in Germany: the CSA and CSP formats, what the 2027 start times mean on a German clock, and a 2D-array task in Java.',
  twitterDescription: 'AP CSA and CSP help in English for pupils in Germany, with the 2027 exam times in German time.',
  pageName: 'AP Computer Science Tutor in Germany',
  webPageDescription: 'A guide for pupils in Germany taking AP Computer Science A or AP Computer Science Principles: the exam formats from the College Board, the May 2027 dates and start times converted to German time, schools in Germany that list AP, an original Java task, and live tutoring in English.',
  courseDescription: 'Live online AP Computer Science A and AP Computer Science Principles tutoring in English for pupils at schools in Germany: Java, classes and objects, ArrayList and 2D arrays, the Create performance task and timed practice, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'AP Computer Science tutor',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#which', label: 'CSA or CSP' },
    { href: '#dates', label: 'Dates' },
    { href: '#java', label: 'Java' },
    { href: '#create', label: 'Create' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; AP Computer Science A and Principles &middot; Ages 14 to 18',
  h1: 'AP Computer Science tutor in Germany',
  lede: 'AP exams are written in May in the United States and, for pupils at American and international schools, in Germany too. From 2027 the College Board fixes start times by time zone, so a pupil in Frankfurt or Berlin sits AP Computer Science A on a Wednesday afternoon and Principles on a Friday morning. Below are both exams as the College Board describes them, the 2027 dates on a German clock, a 2D-array task of the kind the CSA paper asks for, written in Java and run, and how our live tutoring works from Germany.',
  secondaryCta: { href: '#dates', label: 'See 2027 in German time' },
  wa: 'Hello Modern Age Coders, I take AP Computer Science at a school in Germany and would like a free first class in English.',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; Java for CSA, the Create task for CSP',
  spec: [
    ['For', 'AP CSA and AP CSP pupils'],
    ['Language', 'Java for CSA'],
    ['Exam month', 'May 2027'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['German times', 'Weekday evenings, Saturday, Sunday'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'For pupils in Germany taking AP Computer Science, Modern Age Coders offers live online tutoring in English: Java, classes, ArrayList and 2D arrays for AP Computer Science A, and the Create performance task and multiple-choice practice for AP Computer Science Principles, in our AP CSA and AP CSP courses. One regular mentor matches your pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for AP pupils in Germany',
    lede: 'One for each AP Computer Science exam, and a Java course for pupils who want a firm start before the AP class begins.',
    items: [
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'ACO / 01', title: 'AP Computer Science A', note: 'Java from the ground up to the four free-response question types, with timed multiple-choice sets.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'ACO / 02', title: 'AP Computer Science Principles', note: 'The ideas of computing, the Create performance task done honestly, and practice for the written responses.' },
      { course: 'java-programming-masterclass-for-teens', code: 'ACO / 03', title: 'Java for teens', note: 'For pupils of 13 and up who want Java to feel natural before AP Computer Science A starts.' }
    ]
  },

  sections: [
    {
      id: 'which',
      eyebrow: 'Two different exams',
      h2: 'What is the difference between AP Computer Science A and Principles?',
      lede: 'CSA is a programming exam in Java. CSP is a broader exam about computing, with a program of the pupil\'s own as part of the score.',
      body: [
        { kind: 'table', numCols: [], caption: 'The two AP Computer Science exams in 2027, as the College Board describes them', head: ['', 'AP Computer Science A', 'AP Computer Science Principles'], rows: [
          ['Format', 'Fully digital, in the Bluebook app', 'Create performance task plus a digital end-of-course exam'],
          ['Multiple choice', '42 questions, 1 hour 30 minutes, 55% of the score', '70 questions, 120 minutes, 70% of the score'],
          ['Second part', '4 free-response questions, 1 hour 30 minutes, 45%', 'Create task and 2 written responses (60 minutes), 30%'],
          ['Code', 'Java, with the Java Quick Reference provided', 'Any language the pupil uses for the Create task'],
          ['2027 date', 'Wednesday 12 May 2027, Session 2', 'Friday 14 May 2027, Session 1']
        ] },
        { kind: 'source', html: 'Source: College Board, AP Central, AP Computer Science A Exam and AP Computer Science Principles Exam pages, read 3 November 2026. We are not connected with the College Board.' },
        { kind: 'two', mt: true,
          leftH3: 'The four CSA free-response questions',
          left: [
            'The College Board names them in order: Methods and Control Structures, where Part B calls String methods; Class Design, where the pupil writes a class with instance variables, a constructor and a method; Data Analysis with ArrayList; and 2D Array.',
            'All four assess one practice, which the College Board calls Develop Code. That is why our CSA classes spend most of their time with the pupil writing methods to a specification, not reading about them.'
          ],
          rightH3: 'Which one should a pupil take?',
          right: [
            'That is the school\'s and the family\'s choice, and many pupils take both. A pupil who already enjoys programming and wants a degree in computing usually finds CSA the more useful preparation. CSP suits a pupil who wants a wider view of computing, data and the internet, and likes building something of their own.',
            'Neither exam is easier in any simple sense: CSP has more multiple choice, CSA asks for working Java under time.'
          ] }
      ]
    },
    {
      id: 'dates',
      tint: 'tint',
      eyebrow: 'May 2027 on a German clock',
      h2: 'What time do the 2027 AP Computer Science exams start in Germany?',
      lede: 'From 2027 the College Board lists start times by the UTC offset of the school in May. Germany is on summer time then, UTC+2, and the table gives 9:00 for Session 1 and 13:00 for Session 2.',
      body: [
        { kind: 'table', numCols: [], caption: 'AP Computer Science 2027: dates and start times for a school in Germany', head: ['What', 'College Board date', 'German time'], rows: [
          ['CSP Create task submitted as final', 'Friday 30 April 2027, 11:59 PM ET', 'Saturday 1 May 2027, 05:59'],
          ['AP Computer Science A exam', 'Wednesday 12 May 2027, Session 2', '13:00'],
          ['AP Computer Science Principles exam', 'Friday 14 May 2027, Session 1', '09:00']
        ] },
        { kind: 'source', html: 'Sources: College Board, 2027 AP Exam Schedule, 2027 AP Exam Start Times (row +02:00: Session 1 at 9:00 a.m., Session 2 at 1:00 p.m. local time) and the AP Computer Science Principles exam page, read 3 November 2026. The German time of the Create deadline is our conversion from Eastern Daylight Time (UTC-4) to German summer time (UTC+2). Your AP coordinator confirms the real time and room.' },
        { kind: 'p', mt: true, html: 'Two practical points follow. First, the Create task deadline falls in the middle of the German night, so in practice a pupil in Germany should treat the evening of Friday 30 April 2027 as the end, and their school may set an earlier internal date anyway. Second, for UTC+2 the 2027 table starts both sessions an hour later than the 8 a.m. and 12 p.m. local times most schools in the United States keep. The College Board says the new start times are meant to prevent the disclosure of secure exam content across time zones, and that exams can still begin up to an hour after the listed time. The exam weeks themselves run from 3 to 7 May and 10 to 14 May 2027, and late-testing dates exist for clashes.' }
      ]
    },
    {
      id: 'java',
      eyebrow: 'Our worked task',
      h2: 'What does a 2D-array question in AP Computer Science A ask you to do?',
      lede: 'Write a method that walks through a grid of numbers in the right order. The hard part is rarely Java; it is knowing whether to go row by row or column by column.',
      body: [
        { kind: 'p', html: '<strong>Our task, in the CSA style.</strong> A class <code>PracticeLog</code> stores the minutes four pupils practised on each school day, one row per pupil and one column per weekday. Write <code>totalForDay</code>, which adds up one column; <code>busiestDay</code>, which returns the index of the day with the largest total; and <code>everyDayCount</code>, which counts the pupils who practised on all five days.' },
        { kind: 'code', label: 'Our PracticeLog class, with a main method to test it', lang: 'Java', code: JAVA, note: 'Compiled and run with OpenJDK 21, it prints <code>Wednesday total: 170</code>, <code>Busiest day: Wed</code> and <code>Practised every day: 2</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Column totals, worked out by hand to check the program (our data)', head: ['Day', 'Minutes in total'], rows: [
          ['Monday', '75'],
          ['Tuesday', '100'],
          ['Wednesday', '170'],
          ['Thursday', '75'],
          ['Friday', '65']
        ] },
        { kind: 'p', mt: true, html: 'Look at the two loops. <code>totalForDay</code> keeps the column fixed and moves down the rows, so the outer index is the row and the limit is <code>minutes.length</code>. <code>everyDayCount</code> goes the other way, one whole pupil at a time, with enhanced for loops. We tried both classic slips. Give <code>busiestDay</code> the limit <code>minutes.length</code> and, on this four by five grid, it would quietly skip Friday: it still compiles and still prints <code>Busiest day: Wed</code>, so the bug hides until Friday is the busiest day. Give <code>totalForDay</code> the limit <code>minutes[0].length</code> instead and Java stops with <code>ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 4</code>. The loud bug is the kind one; a hand trace is what catches the quiet one. Note also that <code>busiestDay</code> keeps the first day when two totals tie, because it only moves on a strictly larger total: Monday and Thursday both have 75, and a question may ask you which one should win.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Trace it.</strong> Before running anything, write down the value of <code>total</code> after each pass of the loop in <code>totalForDay(2)</code>.',
          '<strong>Expose the quiet bug.</strong> Change one number in the data so that Friday becomes the busiest day, then run the version of <code>busiestDay</code> with the wrong limit and watch it give the wrong answer.',
          '<strong>Extend it.</strong> Add <code>quietestPupil</code>, returning the row with the smallest sum, and decide what it should do on a tie.'
        ] }
      ]
    },
    {
      id: 'create',
      eyebrow: 'AP Computer Science Principles',
      h2: 'How does the CSP Create performance task work?',
      lede: 'The pupil builds a program of their own choice in class time, then answers written questions about it in the May exam.',
      body: [
        { kind: 'two',
          leftH3: 'What the College Board asks for',
          left: [
            'Pupils get 9 hours of in-class time to write a program, record a video of it running and prepare a Personalized Project Reference. In the end-of-course exam they answer two written response questions with four prompts about their own code, with that reference in front of them.',
            'The prompts cover program design and purpose, algorithm development, errors and testing, and data and procedural abstraction, such as a list used to manage complexity.'
          ],
          rightH3: 'What a tutor may and may not do',
          right: [
            'The Create task must be the pupil\'s own work, and the College Board\'s CSP page points to a frequently asked questions document that covers plagiarism and AI. So we never write, debug or design any part of a pupil\'s submitted program.',
            'What we do is teach the skills before the task begins: lists, procedures with parameters, testing with chosen inputs, and explaining code in plain English. During the task window our classes practise on separate projects of our own.'
          ] },
        { kind: 'source', html: 'Source: College Board, AP Computer Science Principles Exam page (Section II, written response prompt categories), read 3 November 2026.' },
        { kind: 'p', mt: true, html: 'Under-18 pupils in our classes do not use AI tools whose providers set an adult minimum age; the <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> quotes each provider\'s terms. That matters twice over for CSP, where the College Board also addresses AI use in the Create task.' }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'AP in Germany',
      h2: 'Which schools in Germany offer AP courses?',
      lede: 'Mainly American and some international schools. AP is less common in Germany than the IB, but it is there.',
      body: [
        { kind: 'p', html: 'AGIS, the body that represents international schools in Germany, keeps an online directory; in it, Advanced Placement appears for Black Forest Academy, together with a US curriculum and diploma; at Frankfurt International School, alongside the IB; and at John F. Kennedy School Berlin, alongside an American high school diploma and the Deutsches Abitur. We name these schools only as context from AGIS: we are not connected with them or with AGIS, and they are not a source of our students.' },
        { kind: 'p', mt: true, html: 'Pupils in Germany usually come to us for one of three reasons: the school offers one AP Computer Science course but not the other, the pupil wants to sit the exam a year early and needs to cover the course faster, or Java is new and the class moves too fast. In each case we teach alongside the school. The AP coordinator orders exams and the College Board sets and scores them; we do not.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are AP Computer Science classes in German time?',
      lede: 'The mentor works from India. Its clock is 4 hours 30 ahead of Germany until 28 March 2027 and 3 hours 30 ahead from then until autumn.',
      body: [
        { kind: 'table', numCols: [], caption: 'Possible class times for AP pupils in Germany, with the mentor\'s clock', head: ['In Germany', 'In India, until 28 March 2027', 'In India, from 28 March 2027'], rows: [
          ['16:45', '21:15', '20:15'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'German legal time follows the Einheitenzeitgesetz: UTC+1 (MEZ) in winter and UTC+2 (MESZ) in summer, with summer time ending on 25 October 2026 and starting again on 28 March 2027. India uses UTC+5:30 the whole year. The rows are examples, not fixed groups.' },
        { kind: 'p', mt: true, html: 'When you book the free first class, you choose its time in your own clock. In April and early May 2027, one-to-one pupils often move to three short sessions a week for timed practice.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first Java class to a timed free-response set',
    lede: 'The steps we track for AP Computer Science A pupils; they are our own and are used for placement and progress reports.',
    table: { caption: 'AP Computer Science A steps (ours)', head: ['Step', 'When, typically', 'The pupil is able to'], rows: [
      ['1. Expressions and methods', 'Weeks 1 to 6', 'Predict what a short method returns before running it'],
      ['2. Classes', 'Months 2 to 3', 'Write a class with a constructor and instance variables from a table'],
      ['3. ArrayList', 'Months 3 to 5', 'Add, remove and filter while traversing, without skipping items'],
      ['4. 2D arrays', 'Months 5 to 6', 'Choose row-major or column-major order and trace it by hand'],
      ['5. Exam pace', 'March to May', 'Complete four free-response questions in 1 hour 30 minutes']
    ] },
    left: { h3: 'For pupils', ps: [
      'Removing items from an ArrayList while looping forward is the classic trap. Loop backwards.',
      'Write the method header exactly as given. Marks start there.'
    ] },
    right: { h3: 'For parents', ps: [
      'Check with the AP coordinator which exams your child is registered for and by when.',
      'In 2027 the CSA exam starts at 13:00 German time, not in the morning.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for AP pupils in Germany',
    lede: 'Taught live in English, each with one regular mentor, in a group of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Other AP subjects', sub: 'Ages 14 to 18', courses: [
        { code: 'ACO / AP / 01', slug: 'ap-calculus-exam-prep', title: 'AP Calculus AB and BC', blurb: 'Limits, derivatives and integrals for the May exams.' },
        { code: 'ACO / AP / 02', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Data, probability and inference, with the investigative task.' },
        { code: 'ACO / AP / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions and modelling before calculus.' }
      ] },
      { num: 'II', h3: 'Beyond the exam', sub: 'Ages 14 to 18', courses: [
        { code: 'ACO / MORE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second language, useful for CSP projects.' },
        { code: 'ACO / MORE / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Data stored and queried properly.' },
        { code: 'ACO / MORE / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built and tested in Python.' }
      ] },
      { num: 'III', h3: 'Other routes in Germany', sub: 'Ages 15 to 19', courses: [
        { code: 'ACO / DE / 01', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For pupils on the IB Diploma instead.' },
        { code: 'ACO / DE / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik for the Abitur', blurb: 'Java and Python for the German Oberstufe.' },
        { code: 'ACO / DE / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'For pupils who also sit the Abitur.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live AP classes fit a school week in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evening', l: 'Classes from late afternoon German time.' },
      { time: 'Weekend', l: 'Saturday midday or Sunday afternoon slots.' },
      { time: 'One to one', l: 'A slot agreed with the mentor, busier in spring.' }
    ],
    cells: [
      { h3: 'Java by hand', p: 'Methods written to a specification every class.' },
      { h3: 'Trace tables', p: 'Loops and arrays traced before they are run.' },
      { h3: 'Clear English', p: 'Ideas rephrased until they make sense.' },
      { h3: 'One mentor', p: 'The same mentor from autumn to May.' },
      { h3: 'Honest Create task', p: 'Skills taught before, never help inside it.' },
      { h3: 'Group or private', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'What our students have made',
  projectsLede: 'A small selection of programs our learners around the world built; browse <a class="ag-inline-link" href="/student-labs">student labs</a> for the rest.',
  reviewsLede: 'Our Google reviews, written by students and parents, reproduced without edits.',

  fees: {
    h2: 'Fees for AP Computer Science tutoring in Germany',
    lede: 'The fee is monthly and covers eight live classes. It is quoted here in euro, derived from the European Central Bank reference rate, and collected in US dollars, which your bank turns into euro at its own rate on the day.',
    free: ['A free first class', 'A short Java or pseudocode task', 'No card needed'],
    group: ['Fifteen to twenty AP pupils', 'One regular mentor', 'Two classes a week', 'Monthly, no long contract'],
    one: ['One pupil, one mentor', 'Planned around the May exams', 'Extra sessions in April']
  },

  faq: {
    eyebrow: 'AP families in Germany ask',
    h2: 'AP Computer Science in Germany: what families ask us',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and in English only, like the AP exams. The mentor follows your pace and accent and stops to explain any new term.' },
      { q: 'What time is the AP Computer Science A exam in Germany in 2027?', a: 'It is on Wednesday 12 May 2027 in Session 2. The College Board 2027 start-time table gives 1:00 p.m. local time for schools on UTC+2, which is German summer time. Your AP coordinator confirms it.' },
      { q: 'And AP Computer Science Principles?', a: 'Friday 14 May 2027, Session 1, which is 9:00 in Germany by the same table. The Create performance task has to be submitted as final by 30 April 2027, 11:59 PM Eastern Time, which is 05:59 on 1 May in Germany.' },
      { q: 'Which language is AP Computer Science A in?', a: 'Java. The College Board provides a Java Quick Reference in the Bluebook app listing the library methods that may appear.' },
      { q: 'Do you help with the Create performance task?', a: 'We teach the skills it needs beforehand and practise on separate projects. We never write, design or debug the program a pupil submits; it must be their own work.' },
      { q: 'Are you connected with the College Board or the school?', a: 'No. We are an independent online school. The school\'s AP coordinator orders exams, and the College Board sets and scores them.' },
      { q: 'Can a pupil sit AP Computer Science without a class at school?', a: 'Exams are ordered through an AP coordinator at a school or test centre, so ask your school first. We can teach the course either way.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. AP pupils often prefer weekday evenings in autumn and weekend practice in spring.' },
      { q: 'How is the fee charged?', a: 'We list it in euro, converted at the European Central Bank reference rate, and the charge is made in US dollars that your bank converts, so the statement may show a slightly different number. The first class is free.' },
      { q: 'What should a pupil know before starting AP Computer Science A?', a: 'Nothing about Java is required. Comfort with algebra helps. Pupils who have never programmed often take our Java for teens course for a few months first.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Useful next reads for AP pupils.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for learners in Germany.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A online classes', p: 'The CSA course in detail.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP online coaching', p: 'The CSP course in detail.' },
      { href: '/ap-computer-science-a-practice-questions', label: 'AP CSA practice questions', p: 'More original practice in Java.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages, quoted from the terms.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first AP Computer Science class',
    lede: 'The mentor asks which exam you are taking and how far your class has got, gives a short Java or logic task, and maps the weeks to May 2027 with you, in English and at your pace.',
    readFirst: 'For more first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or see <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Classes are live, online and in English, taught by mentors who are based in India. For a quick answer, write to us on WhatsApp in English.',
    formNote: 'Booking the free first class needs no card.'
  },

  footer: {
    cols: [
      { h4: 'AP Computer Science', links: [
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA online classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/ap-computer-science-a-practice-questions', label: 'AP CSA practice' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' }
      ] }
    ],
    bottomRight: 'Column by column, then trust it'
  },

  personalityCss: `
.ag-root.ag-aco .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-aco .ag-capsule { border-left-width: 4px; }
.ag-root.ag-aco .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-aco .ag-table td:last-child { font-weight: 600; }
.ag-root.ag-aco .ag-code-head span { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'College Board, AP Central: AP Computer Science A Exam, AP Computer Science Principles Exam, 2027 AP Exam Schedule and 2027 AP Exam Start Times; AGIS school directory; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Column by column: an original AP CSA style Java class, PracticeLog, on a four by five grid of practice minutes (our data): Wednesday total 170, busiest day Wednesday, two pupils practised every day, checked by hand. Plus the 2027 AP Computer Science dates converted to German time. Lesson family: trace the 2D array by hand, column by column, before you trust the loop.',
    requiredMentions: ['Wednesday total: 170', 'Practised every day: 2', 'Saturday 1 May 2027, 05:59', 'on this four by five grid, it would quietly skip Friday', 'Monday and Thursday both have 75', 'Session 1 at 9:00 a.m., Session 2 at 1:00 p.m.', '70 questions, 120 minutes, 70% of the score', 'Column by column, then trust it'],
    sources: [
      { claim: 'AP CSA exam format, four FRQ types and 12 May 2027 date.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam' },
      { claim: 'AP CSP exam format, Create task, 30 April 2027 deadline, 14 May 2027 date.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam' },
      { claim: '2027 AP exam weeks.', url: 'https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates' },
      { claim: '2027 start times by UTC offset (+02:00: 9:00 a.m. and 1:00 p.m.).', url: 'https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates/start-times' },
      { claim: 'Schools in Germany listing AP.', url: 'https://www.agis-schools.org/school/john-f-kennedy-school-berlin' }
    ],
    rejectedClaims: [
      'AP score distributions and university credit in Germany: not read from a primary source, none given.',
      'Any German university admission rule for AP results: not researched, none given.',
      'Any count of AP pupils in Germany: no source.',
      'Any affiliation with the College Board, AGIS or a school: none.',
      'German-language teaching: classes are in English only.'
    ]
  }
};
