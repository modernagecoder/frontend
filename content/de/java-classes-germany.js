'use strict';
// Java classes in Germany (ag- English door, Germany cluster P2 row DE038), written 2026-11-03.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: Java for learners in Germany: pupils facing Java in Oberstufe Informatik (sourced for NRW, where the 2027
// Zentralabitur names Java and SQL and a fixed set of classes), and adults who want Java for work. One original Java
// project on a binary search tree built from the 16 Länder, whose height depends on insertion order.
// BlueJ: not mentioned anywhere on the page; no fetched primary source names it.
// Sources (read raw):
//  - NRW Ministry of Schools, "Zentralabitur 2027 (en dash) Informatik", Vorgaben, standardsicherung.schulministerium.nrw.de/
//    system/files/media/document/file/informatik_2027_gg.pdf (src-pages/java-classes-germany/informatik_2027_gg.pdf
//    and .txt, fetched 3 Nov 2026), linked from the Informatik GOSt page (nrw-informatik-gost.html). Quotes:
//    "Syntax und Semantik einer Programmiersprache − Java − SQL"; "Stapel (Klasse Stack)", "Schlange (Klasse Queue)",
//    "lineare Liste (Klasse List)", "Binärbaum (Klasse BinaryTree)", "binärer Suchbaum (Klasse BinarySearchTree)";
//    LK adds "Graphen (Klassen Graph, Vertex, Edge)", "(Klassen Connection, Client, Server)", "Kellerautomaten",
//    "Scanner, Parser und Interpreter für eine reguläre Sprache"; databases "Klassen DatabaseConnector, QueryResult";
//    "Beide Aufgabensätze enthalten vier Aufgaben"; teacher chooses "im Grundkurs zwei Aufgaben und im Leistungskurs
//    drei Aufgaben"; "Eine Aufgabenauswahl durch die Schülerinnen und Schüler ist nicht vorgesehen."; "Der Einsatz
//    eines Computers ist für die Bearbeitung der Aufgaben nicht vorgesehen."; "Die Arbeitszeit beträgt im Grundkurs
//    225 Minuten und im Leistungskurs 270 Minuten."
//  - FACTS.md (GI Informatik-Monitor 2026/27, fetched 2 Nov 2026): NRW GK "dreistündig", LK "fünfstündig" (81); NRW
//    compulsory Informatik in Klasse 5 and 6 (80); Bavaria written Informatik Abitur "Programmieraufgaben auf Papier,
//    jedoch keine praktischen Anteile am Rechner" (72); about 15 percent in the Q-Phase (97).
//  - Oracle, Java Language Specification SE 21, chapter 3 (copy in src-pages/learn-coding-in-english-germany/jls-3.html):
//    51 reserved keywords.
//  - Time: EinhZeitG; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own code (scratchpad de/w/G4/jav/LaenderTree.java, LaenderTree2.java, OpenJDK 21.0.12, `java LaenderTree.java`):
// Version 1 prints "Inserted by code:         height 8" and "Inserted alphabetically:  height 16". Version 2 adds
// "Inserted middle first:    height 5" and "Steps to find Thüringen:  16 in the alphabetical tree, 5 in the balanced one".
// Lesson family: the shape of a binary search tree depends on insertion order (degenerate against balanced trees).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = `import java.util.Arrays;

public class LaenderTree {

    static class Node {
        String name;
        Node left, right;
        Node(String name) { this.name = name; }
    }

    static Node insert(Node node, String name) {
        if (node == null) return new Node(name);
        if (name.compareTo(node.name) < 0) node.left = insert(node.left, name);
        else node.right = insert(node.right, name);
        return node;
    }

    static int height(Node node) {
        if (node == null) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    }

    static int build(String[] names) {
        Node root = null;
        for (String name : names) root = insert(root, name);
        return height(root);
    }

    public static void main(String[] args) {
        // the 16 Länder in the order of their official codes, 01 to 16
        String[] byCode = {"Schleswig-Holstein", "Hamburg", "Niedersachsen", "Bremen",
            "Nordrhein-Westfalen", "Hessen", "Rheinland-Pfalz", "Baden-Württemberg",
            "Bayern", "Saarland", "Berlin", "Brandenburg", "Mecklenburg-Vorpommern",
            "Sachsen", "Sachsen-Anhalt", "Thüringen"};
        String[] alphabetical = byCode.clone();
        Arrays.sort(alphabetical);

        System.out.println("Inserted by code:         height " + build(byCode));
        System.out.println("Inserted alphabetically:  height " + build(alphabetical));
    }
}`;

const V2 = `    // Version 2: insert the middle name first, then the middle of each half
    static Node balanced(Node root, String[] sorted, int lo, int hi) {
        if (lo > hi) return root;
        int mid = (lo + hi) / 2;
        root = insert(root, sorted[mid]);
        root = balanced(root, sorted, lo, mid - 1);
        return balanced(root, sorted, mid + 1, hi);
    }

    static int steps(Node node, String name) {
        int count = 1;
        while (!node.name.equals(name)) {
            node = name.compareTo(node.name) < 0 ? node.left : node.right;
            count++;
        }
        return count;
    }

    // and at the end of main:
        Node fromSorted = null;
        for (String name : alphabetical) fromSorted = insert(fromSorted, name);
        Node middleFirst = balanced(null, alphabetical, 0, alphabetical.length - 1);
        System.out.println("Inserted middle first:    height " + height(middleFirst));
        System.out.println("Steps to find Thüringen:  " + steps(fromSorted, "Thüringen")
            + " in the alphabetical tree, " + steps(middleFirst, "Thüringen") + " in the balanced one");`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Java classes' },
  slug: 'java-classes-germany',
  code: 'jav',
  accent: '#3F467C',
  accentRationale: 'Java classes in Germany: a slate indigo #3F467C, a cool engineering blue set apart from the Abitur navy, the Python blue-teal and the AI plum; contrast on the paper #FBF8F2 above 8:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Java classes in Germany',
  title: 'Java Classes in Germany: Live Online, Taught in English',
  description: 'Live online Java classes in English for learners in Germany: Java for Oberstufe Informatik and the NRW Abitur, data structures, SQL, and Java for adults at work.',
  ogDescription: 'Java taught live in English for pupils and adults in Germany: what the 2027 NRW Informatik Abitur asks in Java, the classes it names, and a Java project on a search tree of the 16 Länder.',
  twitterDescription: 'Live Java classes in English for Oberstufe pupils and adults in Germany, with one mentor.',
  pageName: 'Java Classes in Germany',
  webPageDescription: 'A guide to learning Java from Germany: the 2027 Zentralabitur Informatik in Nordrhein-Westfalen and the Java classes and SQL it requires, exam lengths and rules, what a Java course covers for teenagers and adults, and an original Java project showing why the insertion order changes the shape of a binary search tree.',
  courseDescription: 'Live online Java classes in English for learners in Germany: Java from the first class to objects, data structures, databases and SQL, for Oberstufe Informatik or for work, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Java classes',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#structures', label: 'Structures' },
    { href: '#project', label: 'Tree' },
    { href: '#adults', label: 'Work' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Java &middot; Teenagers and adults',
  h1: 'Java classes in Germany',
  lede: 'In Nordrhein-Westfalen, the most populous Land with 18,034,454 inhabitants at the end of 2024 according to Destatis, the 2027 Informatik Abitur names Java as its programming language and lists the exact classes a candidate must be able to use, from Stack and Queue to BinarySearchTree. It is also written on paper, with no computer. This page sets out what that means for a pupil, what a Java course covers for teenagers and adults, and a Java project in which the same sixteen names make a tree of height 16 or of height 5, depending only on the order they go in.',
  secondaryCta: { href: '#abitur', label: 'Java in the NRW Abitur' },
  wa: 'Hello Modern Age Coders, I am in Germany and would like a free first Java class, taught in English.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; Java written and traced by hand as well as run',
  spec: [
    ['Who', 'Teenagers from 13, and adults'],
    ['For school', 'Oberstufe Informatik, GK and LK'],
    ['Covers', 'Objects, data structures, SQL'],
    ['For work', 'Core Java to Spring Boot'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Java classes for learners in Germany at Modern Age Coders are taught live online in English: first programs, then objects and classes, data structures such as stacks, queues, lists and trees, and databases with SQL, for Oberstufe Informatik or for work. One regular mentor keeps to each learner\'s pace and accent. Pupils and adults can learn in a class of fifteen to twenty or alone with the mentor.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three Java courses for learners in Germany',
    lede: 'A Java course for teenagers, one built around Oberstufe Informatik and the Abitur, and one for adults who need Java at work.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'JAV / 01', title: 'Java for Teens', note: 'Teenagers of 13 and over: a first class file, then objects, inheritance, collections and a project, explained without hurry.' },
      { course: 'informatik-abitur-course-java-python', code: 'JAV / 02', title: 'Informatik Oberstufe and Abitur', note: 'Built for the three Oberstufe years: Java, data structures, SQL and automata, with plenty of practice on paper.' },
      { course: 'complete-java-programming-masterclass-college', code: 'JAV / 03', title: 'Java for Adults', note: 'Core Java, then the tools used in real teams, up to building a web service with Spring Boot.' }
    ]
  },

  sections: [
    {
      id: 'abitur',
      eyebrow: 'Java at school',
      h2: 'Which programming language does the Informatik Abitur in NRW use?',
      lede: 'Java, together with SQL for databases. The NRW Ministry of Schools publishes the requirements for each year\'s central Abitur, and its document for the 2027 Informatik exam is short and precise.',
      body: [
        { kind: 'table', numCols: [], caption: 'The written Informatik Abitur 2027 in Nordrhein-Westfalen, as the ministry sets it out', head: ['Point', 'Grundkurs', 'Leistungskurs'], rows: [
          ['Programming language', 'Java, and SQL for databases', 'Java, and SQL for databases'],
          ['Tasks sent to the school', 'Four', 'Four'],
          ['Tasks the teacher chooses', 'Two', 'Three'],
          ['Choice for the pupil', 'None', 'None'],
          ['Working time', '225 minutes', '270 minutes'],
          ['Computer', 'Not used', 'Not used'],
          ['Aids', 'Spelling dictionary; scientific calculator or CAS', 'Spelling dictionary; scientific calculator or CAS']
        ] },
        { kind: 'source', html: 'Source: Ministerium für Schule und Bildung NRW, Zentralabitur 2027, Informatik, Vorgaben (informatik_2027_gg.pdf), via standardsicherung.schulministerium.nrw.de, read on 3 November 2026. The English summary is ours.' },
        { kind: 'two', mt: true,
          leftH3: 'What that asks of a pupil',
          left: [
            'Java written by hand, on paper, under time pressure, by someone who cannot run it to see whether it works. A pupil has to read code and know what it does, trace it line by line, and write correct Java without an editor pointing out a missing semicolon.',
            'The Informatik-Monitor 2026/27 reports that NRW schools may offer the subject in the last two years with three weekly hours at basic level or five at raised level.'
          ],
          rightH3: 'And in other Länder',
          right: [
            'Each Land sets its own Abitur rules, and the Informatik-Monitor reports hours rather than languages, so we only state what we have read in an official source. Bayern, for example, sets its written Informatik Abitur centrally and, says the Monitor, much of it is programming on paper with no work at a computer.',
            'If your Land is not NRW, ask the school which language its Oberstufe course uses. Our Abitur course covers both Java and Python.'
          ] },
        { kind: 'p', mt: true, html: 'We teach alongside school and are not connected with the NRW ministry. We award no grades: the school course and the Abitur are what count. What we add is time with Java: tracing code on paper, writing it by hand and then checking it on a computer, which is the fastest way we know to make paper programming feel natural.' }
      ]
    },
    {
      id: 'structures',
      tint: 'tint',
      eyebrow: 'Data structures',
      h2: 'Which Java classes does the NRW Abitur expect a pupil to know?',
      lede: 'The 2027 requirements name them, Grundkurs and Leistungskurs separately. In our classes pupils first build simple versions of their own, so that the versions used at school hold no surprises.',
      body: [
        { kind: 'table', numCols: [], caption: 'Classes and topics named in the NRW Informatik Abitur 2027 requirements', head: ['Area', 'Grundkurs', 'Leistungskurs adds'], rows: [
          ['Linear structures', 'Arrays up to two dimensions; Stack, Queue, List', 'Nothing further'],
          ['Trees', 'BinaryTree, BinarySearchTree', 'Nothing further'],
          ['Graphs', 'Not required', 'Graph, Vertex, Edge'],
          ['Databases', 'DatabaseConnector, QueryResult, with SQL', 'The same'],
          ['Networks', 'Single computers and networks', 'Connection, Client, Server'],
          ['Automata', 'Deterministic and non-deterministic finite automata', 'Pushdown automata; scanner, parser and interpreter for a regular language']
        ] },
        { kind: 'source', html: 'Source: Zentralabitur 2027, Informatik, Vorgaben, NRW Ministry of Schools, section III, read on 3 November 2026. The grouping into rows is ours. We do not reproduce the ministry\'s class documentation or its past exam tasks; they are available free from the ministry.' },
        { kind: 'p', mt: true, html: 'A binary search tree appears in both courses, and it is where many pupils first find that a data structure can be correct and still behave badly. The project below shows why.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Java project',
      h2: 'Why can the same sixteen names make a tree of height 16 or 5?',
      lede: 'A binary search tree puts each new name to the left or right of the names already in it, by alphabetical order. Put the 16 Länder in and ask how tall the tree has become. The answer depends entirely on the order in which they arrive.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'Write a small tree class of your own: a node with a name and two children, an insert method and a height method. Then build the tree twice from the same 16 names: once in the order of the Länder\'s official codes, Schleswig-Holstein first, Thüringen last, and once in alphabetical order.',
            'Save the file as LaenderTree.java. With Java 21 it runs directly with <code>java LaenderTree.java</code>, no separate compiling step needed.'
          ],
          rightH3: 'Why it matters',
          right: [
            'The height of the tree is the number of steps a search may need in the worst case. A short, bushy tree finds any name in a few steps; a tall, thin one is no better than a list.',
            'It is exactly the kind of question an examiner can ask about a tree drawn on paper: insert these keys in this order, draw the result, and say what it means for searching.'
          ] },
        { kind: 'code', label: 'Version 1: the same names in two orders', lang: 'Java', code: V1, note: 'It prints <code>Inserted by code:         height 8</code> and <code>Inserted alphabetically:  height 16</code>.' },
        { kind: 'p', mt: true, html: 'Sixteen names in alphabetical order give a tree of height 16. Every name is greater than the one before it, so each goes to the right of the last, and the tree is a single line: searching it for Thüringen means passing every other Land on the way. In code order the tree is half as tall, but only by luck: nothing in the official codes was designed to make a good tree.' },
        { kind: 'code', label: 'Version 2: build it middle first, and count the steps', lang: 'Java', code: V2, note: 'With these methods added to the class and these lines at the end of <code>main</code>, it also prints <code>Inserted middle first:    height 5</code> and <code>Steps to find Thüringen:  16 in the alphabetical tree, 5 in the balanced one</code>.' },
        { kind: 'p', mt: true, html: 'Inserting the middle name of the sorted list first, then the middle of each half, gives a tree of height 5, the smallest possible for 16 names, since a tree of height 4 can hold at most 15. A search for Thüringen now takes 5 steps instead of 16. Real libraries such as Java\'s own TreeMap keep themselves balanced automatically; writing an unbalanced one first is how a learner understands why they need to.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Draw it.</strong> On paper, insert the first six Länder in code order and draw the tree. Check your drawing against what the program says.',
          '<strong>Reverse it.</strong> Insert the names in reverse alphabetical order. What height do you expect, and which side does the tree lean to?',
          '<strong>Count every search.</strong> Add a loop that prints the steps needed to find each Land in both trees, and compare the averages.',
          '<strong>Going further.</strong> Write an in-order traversal and show that both trees print the Länder in the same alphabetical order, whatever their shape.'
        ] },
        { kind: 'source', html: 'The names are the 16 Länder in the order of the Statistisches Bundesamt\'s regional codes, 01 to 16. The Java code, its output on OpenJDK 21 and the exercises are our own, and they are not the ministry\'s BinarySearchTree class.' }
      ]
    },
    {
      id: 'adults',
      tint: 'tint',
      eyebrow: 'Java for work',
      h2: 'Is Java worth learning as an adult in Germany?',
      lede: 'If your work or the work you want involves large, long-lived software, very often yes. Java is strict, which makes it slower to start with than Python and easier to keep in order later.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What Java asks of a beginner', p: 'Types declared up front, classes for everything, and a compiler that refuses mistakes before the program runs. Adults who find that annoying in the first week usually come to value it by the second month.' },
          { h3: 'What an adult course covers', p: 'Core Java first: types, control flow, classes, interfaces, collections, exceptions and testing. Then the tools of real projects, a build tool, a database through SQL, and finally a small web service with Spring Boot.' },
          { h3: 'What we do not promise', p: 'Any job, salary or employer. We teach Java properly, review your code honestly and help you build projects you can show. Adults planning a career change should talk it through with a mentor in the free first class.' }
        ] },
        { kind: 'p', mt: true, html: 'Like every mainstream language, Java is built on English words: its SE 21 specification lists 51 reserved keywords, among them class, public, static and return. Our mentors teach in English only, so the words you hear in class are the words you type.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can I take a live Java class from Germany?',
      lede: 'After school, in the early evening, and at weekends. Your mentor is in India, ahead of German time in every season.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Java class times in Germany beside the mentor\'s time in India', head: ['Germany', 'India now (to 28 March 2027)', 'India in summer 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['18:30', '23:00', '22:00'],
          ['Saturday 13:30', '18:00', '17:00'],
          ['Sunday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Germany runs on MEZ, UTC+1, in winter and MESZ, UTC+2, in summer, as the Einheitenzeitgesetz provides; the current winter period started on 25 October 2026 and ends on 28 March 2027. India stays on UTC+5:30 all year, so a German 14:45 is 19:15 there now and 18:15 once summer time returns.' },
        { kind: 'p', mt: true, html: 'These are illustrations, not fixed groups. Choose the time of your free first class in German time; one-to-one learners agree regular times with their mentor and can move them before Klausuren or busy weeks at work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first class file to data structures',
    lede: 'Our markers for Java learners, for school or work. They are ours, not the Abitur\'s.',
    table: { caption: 'Java milestones (ours)', head: ['Level', 'Usually reached', 'The learner can'], rows: [
      ['1. First programs', 'Month 1', 'Write, compile and run a class with a main method'],
      ['2. Objects', 'Months 2 to 3', 'Design classes with fields, constructors and methods'],
      ['3. Linear structures', 'Months 4 to 5', 'Build and use a stack, a queue and a list'],
      ['4. Trees and SQL', 'Months 6 to 8', 'Insert into and search a binary search tree; query a database'],
      ['5. On paper and in projects', 'Months 9 and up', 'Trace and write Java by hand, or build a larger program']
    ] },
    left: { h3: 'For pupils', ps: [
      'Trace your code on paper before you run it. The exam will not let you run it.',
      'Learn what each data structure is for, not just how to call its methods.'
    ] },
    right: { h3: 'For adults', ps: [
      'Read the compiler\'s complaint carefully: it is usually right, and it names the line.',
      'Write a small test for every method you are not sure of.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for Java learners',
    h2: 'Nine more courses that go with Java',
    lede: 'Live and in English, with one mentor throughout, in a class or one to one.',
    bands: [
      { num: 'I', h3: 'School and exams', sub: 'Ages 13 to 19', courses: [
        { code: 'JAV / SCHOOL / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java for the AP exam, for pupils on that route.' },
        { code: 'JAV / SCHOOL / 02', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For IB pupils at schools in Germany.' },
        { code: 'JAV / SCHOOL / 03', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Programming and theory for the 0478 exam.' }
      ] },
      { num: 'II', h3: 'Foundations', sub: 'Ages 13 and up', courses: [
        { code: 'JAV / BASE / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms and data structures, step by step.' },
        { code: 'JAV / BASE / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Queries and databases, as the Abitur expects.' },
        { code: 'JAV / BASE / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second language that makes Java easier.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'JAV / WORK / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Trees, graphs and their costs, in depth.' },
        { code: 'JAV / WORK / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'The database side of most Java systems.' },
        { code: 'JAV / WORK / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control for every project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Java classes work from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'From about 14:30 German time, for Oberstufe pupils.' },
      { time: 'Evenings', l: 'For adults, around 18:00 German time.' },
      { time: 'One to one', l: 'Times agreed with the mentor, weekends included.' }
    ],
    cells: [
      { h3: 'Paper and screen', p: 'Code traced by hand, then run to check.' },
      { h3: 'Own classes first', p: 'Learners build a stack or tree before using a library.' },
      { h3: 'Patient English', p: 'Explained again, differently, when needed.' },
      { h3: 'One mentor', p: 'The same teacher across the whole course.' },
      { h3: 'School-aware', p: 'Follows the Oberstufe topics when a pupil asks.' },
      { h3: 'Class or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Here is a sample of what our students worldwide have built; there is more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from our Google profile, written by students and parents and left unchanged.',

  fees: {
    h2: 'Fees for Java classes in Germany',
    lede: 'Eight live Java classes make up one month and one fee. The amount is displayed in euro at the European Central Bank reference rate; payment is taken in US dollars and your bank converts it, so the euro figure on your statement may come out slightly different.',
    free: ['A free first class', 'A short Java task at your level', 'No card needed'],
    group: ['Fifteen to twenty learners at a similar level', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any time'],
    one: ['One learner and a mentor', 'A plan for school or work', 'Times agreed between you']
  },

  faq: {
    eyebrow: 'Learners in Germany ask',
    h2: 'Java classes in Germany: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Java classes are live and in English only, with a mentor who matches your pace and accent. Java\'s 51 reserved keywords are English words, so the language of the class is the language of the code.' },
      { q: 'Does the NRW Abitur use Java?', a: 'Yes. The NRW Ministry of Schools names Java, together with SQL, as the language for the 2027 written Informatik Abitur, and lists classes such as Stack, Queue, List, BinaryTree and BinarySearchTree.' },
      { q: 'Is the Informatik Abitur written on a computer?', a: 'Not in NRW. The 2027 requirements say that no computer is used for the written tasks. The working time is 225 minutes in the Grundkurs and 270 minutes in the Leistungskurs.' },
      { q: 'My Land is not NRW. Will Java still help?', a: 'Very likely, since the ideas of objects, data structures and algorithms carry across languages. Check with the school which language its course uses; our Abitur course covers Java and Python.' },
      { q: 'Should a beginner learn Java or Python first?', a: 'Python is gentler for most beginners. A pupil whose school uses Java, or an adult who needs it at work, can start with Java directly; the free first class helps decide.' },
      { q: 'Will you help with Informatik homework and Klausuren?', a: 'We follow the school topics when a pupil asks, and practise tracing and writing Java on paper. We teach alongside school and award no grades; the school course is the one that counts.' },
      { q: 'Do you teach the classes named in the Abitur requirements?', a: 'Yes. Pupils first write simple versions of Stack, Queue, List and the trees themselves, then use the versions their school works with. We do not reproduce the ministry\'s materials or exam tasks.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Oberstufe pupils usually come after school and adults in the early evening.' },
      { q: 'How do I pay from Germany?', a: 'The fee is shown in euro at the European Central Bank reference rate and paid in US dollars, which your bank converts. The first class is free.' },
      { q: 'Is it a group class or one to one?', a: 'Either. A group has fifteen to twenty learners at a similar level; one-to-one classes follow one learner\'s plan.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for learners in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The full set of our Germany pages.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'School Informatik support, in German.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The other Abitur subject many Informatik pupils take.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'From Java and Python to real models.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'Where Java fits among other languages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first Java class',
    lede: 'The mentor asks whether Java is for school or for work, sets a short task at your level, and suggests the course and times that fit, in English and at your speed.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">the course catalogue</a>.',
    note: 'Classes are live online in English, with mentors based in India. For questions, WhatsApp us in English.',
    formNote: 'The first class is free; we do not ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Java', links: [
        { href: '/courses/java-programming-masterclass-for-teens', label: 'Java for teens' },
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/complete-java-programming-masterclass-college', label: 'Java for adults' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' }
      ] }
    ],
    bottomRight: 'Insert the middle first'
  },

  personalityCss: `
.ag-root.ag-jav .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-jav .ag-capsule { border-left-width: 5px; }
.ag-root.ag-jav .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-jav .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-jav .ag-code-head b { letter-spacing: 0.05em; }
`,

  dossier: {
    curriculumAuthority: 'Ministerium für Schule und Bildung NRW, Zentralabitur 2027 Informatik, Vorgaben (informatik_2027_gg.pdf), read 3 November 2026; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW and Bayern); Oracle, Java Language Specification SE 21; Einheitenzeitgesetz.',
    localProject: 'Insert the middle first: an original Java 21 project that builds a binary search tree from the 16 Länder names. In official code order the height is 8, alphabetically 16 (a single line), middle first 5; finding Thüringen takes 16 steps in the alphabetical tree and 5 in the balanced one. Lesson family: the shape of a binary search tree depends on insertion order (degenerate against balanced).',
    requiredMentions: ['LaenderTree.java', 'Inserted by code:         height 8', 'Inserted alphabetically:  height 16', 'Inserted middle first:    height 5', 'Steps to find Thüringen:  16 in the alphabetical tree, 5 in the balanced one', '225 minutes in the Grundkurs and 270 minutes in the Leistungskurs', 'Insert the middle first', 'a tree of height 4 can hold at most 15'],
    sources: [
      { claim: 'NRW Informatik Abitur 2027: Java and SQL, named classes, task choice, no computer, 225 and 270 minutes.', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/informatik_2027_gg.pdf' },
      { claim: 'NRW Informatik GK three hours and LK five hours; Bayern paper programming.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Java SE 21: 51 reserved keywords.', url: 'https://docs.oracle.com/javase/specs/jls/se21/html/jls-3.html' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/einhzeitg/' }
    ],
    rejectedClaims: [
      'BlueJ: no fetched primary source names it, so it is not mentioned.',
      'Which Länder other than NRW use Java in the Abitur: not sourced, so not claimed.',
      'The date of the NRW 2027 written Informatik exam: the ministry PDF table layout was ambiguous in our text extraction, so no date is given.',
      'Reproduction of the ministry\'s Java classes or exam tasks: none; our tree class is our own.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
