'use strict';
// AP Computer Science A practice questions (ag- AP door; US cluster Phase 3, row 49).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md, plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Every question on this page is ORIGINAL, written by us in the AP CSA style; no College Board item is copied.
// Sources, College Board only, fetched raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/ap-computer-science-a-practice-questions/):
//  - AP CSA Course at a Glance (2025): units and topics (1.1 to 4.17), class periods per unit, MC weights.
//  - AP CSA Course and Exam Description (2025): "EXCLUSION STATEMENT" on inheritance: "Designing and implementing
//    inheritance relationships are outside the scope of the AP Computer Science A course and exam."
//  - AP CSA Java Quick Reference (2025): String substring, indexOf, split; Math.random "greater than or equal to
//    0.0 and less than 1.0"; ArrayList size, add, get, set, remove; File and Scanner.
//  - apstudents.collegeboard.org/courses/ap-computer-science-a/assessment: MC asks you to "Determine the required code
//    segments to produce a given output", "Identify the output, value, or result of given program code based on
//    initial values", "Analyze program code for correctness, equivalence, and errors".
//  - ap25-cr-report-computer-science-a.pdf (2025 Chief Reader report, old format): "only about a third of them fully
//    and correctly distinguished all three cases"; "a common algorithmic error being a too-early return";
//    "Practice creating a random number in a given range."
//  - apcentral exam page: Bluebook test previews; past exam questions page: older questions "do not completely align".
// Our own material: 14 multiple-choice questions and one free-response question with a 5-point rubric, all
// compiled and run by us with javac 22 on 17 October 2026 (answers on the page are the real program output:
// 6.5, put48, 5..12, 3, -2 4, 10, fdb, 2 2, 99 1, [4, 5, 6], 12, false, 7, 4; longestRise tests 4, 1, 0, 3).
// Lesson family: tracing code by hand (predict, then run).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const Q1 = `int a = 7;
int b = 2;
double c = a / b;
System.out.println(c + (double) a / b);`;

const Q2 = `String s = "computer";
String t = s.substring(3, 6) + s.indexOf("u") + s.length();
System.out.println(t);`;

const Q3 = `// Which expression gives a random int
// from 5 to 12, both included?
(A) (int) (Math.random() * 12) + 5
(B) (int) (Math.random() * 8) + 5
(C) (int) (Math.random() * 7) + 5
(D) (int) Math.random() * 8 + 5`;

const Q4 = `int count = 0;
for (int i = 1; i <= 20; i += 3) {
  if (i % 2 == 0) {
    count++;
  }
}
System.out.println(count);`;

const Q5 = `int x = 10;
int y = 0;
while (x > 0 && y < 4) {
  x -= 3;
  y++;
}
System.out.println(x + " " + y);`;

const Q6 = `int total = 0;
for (int r = 0; r < 4; r++) {
  for (int c = r; c < 4; c++) {
    total++;
  }
}
System.out.println(total);`;

const Q7 = `String w = "abcdef";
String out = "";
for (int k = w.length() - 1; k >= 0; k -= 2) {
  out += w.substring(k, k + 1);
}
System.out.println(out);`;

const Q8 = `public class Counter {
  private static int made = 0;
  private int id;

  public Counter() {
    made++;
    id = made;
  }
  public int getId() { return id; }
  public static int getMade() { return made; }
}

// in another class:
Counter p = new Counter();
Counter q = new Counter();
Counter r = q;
System.out.println(r.getId() + " " + Counter.getMade());`;

const Q9 = `public static void change(int[] arr, int n) {
  arr[0] = 99;
  n = 99;
}

// in main:
int[] data = {1, 2, 3};
int k = 1;
change(data, k);
System.out.println(data[0] + " " + k);`;

const Q10 = `ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(4); nums.add(4); nums.add(5);
nums.add(4); nums.add(6);
for (int i = 0; i < nums.size(); i++) {
  if (nums.get(i) == 4) {
    nums.remove(i);
  }
}
System.out.println(nums);`;

const Q11 = `int[][] g = {{1, 2, 3}, {4, 5, 6}};
int sum = 0;
for (int col = 0; col < g[0].length; col++) {
  sum += g[g.length - 1 - col % 2][col];
}
System.out.println(sum);`;

const Q12 = `public static boolean hasPair(int[] a, int target) {
  for (int i = 0; i < a.length - 1; i++) {
    if (a[i] + a[i + 1] == target) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

// in main:
System.out.println(hasPair(new int[] {3, 1, 6, 4}, 10));`;

const Q13 = `public static int mystery(int n) {
  if (n < 3) {
    return n;
  }
  return mystery(n - 1) + mystery(n - 3);
}

// in main:
System.out.println(mystery(6));`;

const Q14 = `String[] parts = "red,green,,blue".split(",");
System.out.println(parts.length);`;

const FRQ = `import java.util.ArrayList;

public class TempLog {
  private ArrayList<Integer> readings;

  public TempLog(ArrayList<Integer> readings) {
    this.readings = readings;
  }

  /** Returns the length of the longest run of
   *  readings that rise every time. */
  public int longestRise() {
    if (readings.size() == 0) {
      return 0;
    }
    int most = 1;
    int run = 1;
    for (int i = 1; i < readings.size(); i++) {
      if (readings.get(i) > readings.get(i - 1)) {
        run++;
      } else {
        run = 1;
      }
      if (run > most) {
        most = run;
      }
    }
    return most;
  }
}`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AP CSA PRACTICE', blurb: 'Fourteen original AP Computer Science A style questions in Java and one free-response task, each answer checked by running the code.' },
  slug: 'ap-computer-science-a-practice-questions',
  code: 'acsp',
  accent: '#145245',
  accentRationale: 'AP CSA practice questions, US: a deep teal #145245 from the US allocation table, cooler than the two AP calculator greens so the pages read apart',
  pageType: 'market',
  market: US,
  routeLabel: 'AP CSA practice questions',
  title: 'AP Computer Science A Practice Questions, With Answers',
  description: 'Original AP Computer Science A practice questions in Java: 14 multiple choice across all four units and one free response, every answer checked by running it.',
  ogDescription: 'Fourteen AP CSA style multiple-choice questions and a free-response task, written by us, compiled and run before publishing, with the reasoning behind each answer.',
  twitterDescription: 'Original AP CSA practice in Java: 14 questions and a free response, answers run and checked.',
  pageName: 'AP Computer Science A Practice Questions',
  webPageDescription: 'An original practice set for US students preparing for AP Computer Science A, written in the style of the current four-unit exam, with every answer verified by running the code.',
  courseDescription: 'Live online AP Computer Science A preparation for US high school students, built around tracing and writing Java by hand, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AP CSA practice questions',
  navLinks: [
    { href: '#about-set', label: 'The set' },
    { href: '#unit1', label: 'Unit 1' },
    { href: '#unit2', label: 'Unit 2' },
    { href: '#unit3', label: 'Unit 3' },
    { href: '#unit4', label: 'Unit 4' },
    { href: '#frq', label: 'Free response' }
  ],
  eyebrow: 'United States &middot; Grades 10 to 12 &middot; AP Computer Science A, Java',
  h1: 'AP Computer Science A practice questions',
  lede: 'Here is a practice set you can actually trust: fourteen multiple-choice questions and one free-response task in the style of the current AP Computer Science A exam, all written by our teachers, none copied from College Board. Every answer on this page is the real output of the code, because we compiled and ran each snippet before publishing. Work through a unit at a time, write your answer down before you scroll to the key, and pay most attention to the questions you get wrong, since each one is built around a mistake students really make.',
  secondaryCta: { href: '#unit1', label: 'Start with Unit 1' },
  wa: 'Hello Modern Age Coders, my teen in the US is preparing for AP Computer Science A and wants more practice with a teacher. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Every answer run in Java',
  spec: [
    ['Questions', '14 multiple choice, 1 free response'],
    ['Units', 'All four, weighted like the exam'],
    ['Language', 'Java, Quick Reference methods only'],
    ['Written by', 'Our teachers, original'],
    ['Checked', 'Compiled and run, October 2026'],
    ['Time', 'About 30 minutes for the set'],
    ['Classes', 'Batch or one to one'],
    ['Try it', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'These are 14 original AP Computer Science A style multiple-choice questions and one free-response task, spread across the four units of the current course in roughly the exam&rsquo;s proportions. Answers and explanations follow each unit. Every snippet was compiled and run by us, so the keys are real program output. For official practice, use AP Classroom and the Bluebook test previews.',

  picks: {
    eyebrow: 'Keep practising, with a teacher',
    h2: 'Three courses for students who want more than a practice set',
    lede: 'A practice set shows what you get wrong. A teacher shows you why, and gives you the next ten questions on exactly that idea.',
    items: [
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'ACSP / 01', title: 'AP Computer Science A exam prep', note: 'Grades 10 to 12. Unit by unit, then full timed papers.' },
      { course: 'java-programming-masterclass-for-teens', code: 'ACSP / 02', title: 'Java for teens', note: 'Ages 13 to 18. Java from the first line, at a gentler pace.' },
      { course: 'competitive-programming-for-teens-course', code: 'ACSP / 03', title: 'Competitive programming', note: 'Ages 13 to 18. Harder problems once AP feels easy.' }
    ]
  },

  sections: [
    {
      id: 'about-set', tint: 'tint', eyebrow: 'How the set is built',
      h2: 'Fourteen questions, weighted like the real exam',
      lede: 'We wrote the questions to match the current course framework, which College Board revised for the 2025 to 2026 school year into four units. More questions go to the units the exam weights more.',
      body: [
        { kind: 'table', caption: 'Our question spread against College Board&rsquo;s multiple-choice weighting (weights from the 2025 Course at a Glance; the spread is ours)', head: ['Unit', 'Exam weighting for Section I', 'Questions here'], numCols: [2], rows: [
          ['Unit 1: Using Objects and Methods', '15 to 25%', '3'],
          ['Unit 2: Selection and Iteration', '25 to 35%', '4'],
          ['Unit 3: Class Creation', '10 to 18%', '2'],
          ['Unit 4: Data Collections', '30 to 40%', '5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The kinds of question we wrote',
          left: [
            'College Board&rsquo;s student page lists what the multiple choice asks. You will be asked to "Determine the required code segments to produce a given output", to "Identify the output, value, or result of given program code based on initial values", and to "Analyze program code for correctness, equivalence, and errors".',
            'Most questions here are the second kind: read the code, predict the output. That is the skill students most often skip in class, because the computer will always tell you the answer. On the exam it will not.'
          ],
          rightH3: 'What we left out on purpose',
          right: [
            'The Course and Exam Description says: "Designing and implementing inheritance relationships are outside the scope of the AP Computer Science A course and exam." So there are no questions here asking you to design subclasses.',
            'Every Java method used in the set appears on the Java Quick Reference that is built into Bluebook: substring, indexOf, length, split, Math.random, and the ArrayList methods add, get, size and remove.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-at-a-glance.pdf" rel="noopener" target="_blank">AP CSA Course at a Glance</a>, the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-java-quick-reference.pdf" rel="noopener" target="_blank">Java Quick Reference</a> and the <a class="ag-inline-link" href="https://apstudents.collegeboard.org/courses/ap-computer-science-a/assessment" rel="noopener" target="_blank">AP CSA exam page for students</a>. The questions are ours; we are not connected with College Board.' }
      ]
    },
    {
      id: 'unit1', tint: 'deep', eyebrow: 'Unit 1 &middot; Using Objects and Methods',
      h2: 'Questions 1 to 3: arithmetic, strings and random numbers',
      lede: 'Three questions on the ideas that the rest of the course is built on. Each looks easy. Each has a trap that catches students who read too fast.',
      body: [
        { kind: 'code', label: 'Question 1 &middot; What is printed?', lang: 'java', code: Q1, note: '(A) 6.0 &nbsp; (B) 6.5 &nbsp; (C) 7.0 &nbsp; (D) 3.5' },
        { kind: 'code', label: 'Question 2 &middot; What is printed?', lang: 'java', code: Q2, note: '(A) put48 &nbsp; (B) pute48 &nbsp; (C) mpu48 &nbsp; (D) put12' },
        { kind: 'code', label: 'Question 3 &middot; Choose the expression', lang: 'java', code: Q3, note: 'Pick one of (A) to (D).' },
        { kind: 'table', mt: true, caption: 'Unit 1 answers (ours; checked by running the code with javac 22)', head: ['Question', 'Answer', 'Why'], rows: [
          ['1', '(B) 6.5', 'a / b is integer division, so c holds 3.0, not 3.5. The second term casts a to double first, so it is 3.5. Then 3.0 + 3.5 is 6.5.'],
          ['2', '(A) put48', 'substring(3, 6) takes indexes 3, 4 and 5: "put". Then the + signs run left to right on a String, so 4 and 8 are joined as text, not added to make 12.'],
          ['3', '(B)', 'Math.random() gives a value from 0.0 up to but not including 1.0. Times 8 gives 0 up to 7.99, the cast makes 0 to 7, plus 5 makes 5 to 12. In (D) the cast applies to Math.random() alone, which is always 0, so it always gives 5.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The idea behind Question 1',
          left: [
            'Java decides the type of an expression from its operands, not from the variable that receives it. Declaring c as double does not rescue a / b, because the division has already happened with two ints.',
            'Our test run of the random expression in Question 3, a million times, never produced anything below 5 or above 12, which is a good habit to copy: when in doubt about a range, test the edges.'
          ],
          rightH3: 'A note from the 2025 exam',
          right: [
            'The 2025 Chief Reader report, written about the older exam format, advised teachers: "Practice creating a random number in a given range." It also noted that many students had been drilled on a formula without understanding it.',
            'The formula is worth understanding rather than memorising: the number you multiply by is how many different values you want, and the number you add is the smallest one. Here that is 8 values starting at 5.'
          ] }
      ]
    },
    {
      id: 'unit2', tint: 'tint', eyebrow: 'Unit 2 &middot; Selection and Iteration',
      h2: 'Questions 4 to 7: loops, conditions and traversals',
      lede: 'Unit 2 carries up to 35 percent of the multiple choice. These four questions are about counting carefully: how many times a loop runs, and what is true when it stops.',
      body: [
        { kind: 'code', label: 'Question 4 &middot; What is printed?', lang: 'java', code: Q4, note: '(A) 2 &nbsp; (B) 3 &nbsp; (C) 4 &nbsp; (D) 7' },
        { kind: 'code', label: 'Question 5 &middot; What is printed?', lang: 'java', code: Q5, note: '(A) 1 3 &nbsp; (B) -2 4 &nbsp; (C) -2 3 &nbsp; (D) 1 4' },
        { kind: 'code', label: 'Question 6 &middot; What is printed?', lang: 'java', code: Q6, note: '(A) 16 &nbsp; (B) 10 &nbsp; (C) 6 &nbsp; (D) 12' },
        { kind: 'code', label: 'Question 7 &middot; What is printed?', lang: 'java', code: Q7, note: '(A) fdb &nbsp; (B) eca &nbsp; (C) fedcba &nbsp; (D) bdf' },
        { kind: 'table', mt: true, caption: 'Unit 2 answers (ours; checked by running the code)', head: ['Question', 'Answer', 'Why'], rows: [
          ['4', '(B) 3', 'i takes the values 1, 4, 7, 10, 13, 16 and 19. Seven values, but only 4, 10 and 16 are even.'],
          ['5', '(B) -2 4', 'x goes 10, 7, 4, 1, -2 while y goes 0, 1, 2, 3, 4. After the fourth pass x is -2 and y is 4, so both halves of the condition are now false and the loop stops.'],
          ['6', '(B) 10', 'The inner loop starts at r, so it runs 4 times, then 3, then 2, then 1. That is 4 + 3 + 2 + 1 = 10, not 4 &times; 4 = 16.'],
          ['7', '(A) fdb', 'k starts at 5, the last index, and drops by 2: 5, 3, 1. The characters at those indexes are f, d and b, added in that order.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Trace tables beat guessing',
          left: [
            'For Questions 4 and 5, write one column per variable and one row per pass of the loop. It takes a minute and it is the only reliable method under exam pressure.',
            'Question 5 has a second lesson: with &amp;&amp;, the loop continues only while both conditions are true, so it stops when either one fails. Students who stop the trace when x first drops below 4 pick (A).'
          ],
          rightH3: 'Nested loops that do not start at zero',
          right: [
            'Question 6 is the shape behind many comparison algorithms: each element is compared only with the ones after it. Spotting the shrinking inner loop is the skill; the answer follows from it.',
            'In Question 7 the bounds matter as much as the step. Starting at w.length() would throw an exception on the first substring call, which is why the loop starts at w.length() - 1.'
          ] }
      ]
    },
    {
      id: 'unit3', tint: 'deep', eyebrow: 'Unit 3 &middot; Class Creation',
      h2: 'Questions 8 and 9: objects, static variables and references',
      lede: 'Unit 3 is the lightest unit by weight, but its ideas sit underneath the free response. Both questions are about what actually lives in memory.',
      body: [
        { kind: 'code', label: 'Question 8 &middot; What is printed?', lang: 'java', code: Q8, note: '(A) 3 3 &nbsp; (B) 2 2 &nbsp; (C) 2 3 &nbsp; (D) 1 2' },
        { kind: 'code', label: 'Question 9 &middot; What is printed?', lang: 'java', code: Q9, note: '(A) 1 1 &nbsp; (B) 99 99 &nbsp; (C) 99 1 &nbsp; (D) 1 99' },
        { kind: 'table', mt: true, caption: 'Unit 3 answers (ours; checked by running the code)', head: ['Question', 'Answer', 'Why'], rows: [
          ['8', '(B) 2 2', 'Only two Counter objects are built, because Counter r = q copies a reference and calls no constructor. The second object has id 2, and the static variable made, shared by the whole class, is 2.'],
          ['9', '(C) 99 1', 'The method receives a copy of the reference to the array, so changing arr[0] changes the real array. It also receives a copy of the int k, so n = 99 changes only the copy.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One object, two names',
          left: [
            'Students who answer (A) to Question 8 believe that every variable of a class type holds its own object. Drawing boxes and arrows, one box per new, clears this up faster than any explanation.',
            'Static variables belong to the class rather than to any one object, which is why Counter.getMade() is called on the class name.'
          ],
          rightH3: 'Why Question 9 matters for the free response',
          right: [
            'The 2026 Scoring Guidelines say an algorithm point is not earned when "Persistent data is modified (e.g., changing value referenced by parameter)." In other words, changing an array or list you were handed, when the task did not ask for it, can cost a point.',
            'Question 9 is that rule in miniature: arr[0] = 99 reaches back into the caller&rsquo;s data, and n = 99 does not.'
          ] }
      ]
    },
    {
      id: 'unit4', tint: 'tint', eyebrow: 'Unit 4 &middot; Data Collections',
      h2: 'Questions 10 to 14: lists, 2D arrays, algorithms and recursion',
      lede: 'Unit 4 is the heaviest unit, at 30 to 40 percent of Section I, and the one most students reach last. These five questions are the ones we see cause the most lost marks.',
      body: [
        { kind: 'code', label: 'Question 10 &middot; What is printed?', lang: 'java', code: Q10, note: '(A) [5, 6] &nbsp; (B) [4, 5, 6] &nbsp; (C) [4, 5, 4, 6] &nbsp; (D) An IndexOutOfBoundsException' },
        { kind: 'code', label: 'Question 11 &middot; What is printed?', lang: 'java', code: Q11, note: '(A) 9 &nbsp; (B) 12 &nbsp; (C) 10 &nbsp; (D) An ArrayIndexOutOfBoundsException' },
        { kind: 'code', label: 'Question 12 &middot; What is printed, and why?', lang: 'java', code: Q12, note: '(A) true &nbsp; (B) false, because the loop returns on its first pass &nbsp; (C) false, because no two values add to 10 &nbsp; (D) It does not compile' },
        { kind: 'code', label: 'Question 13 &middot; What is printed?', lang: 'java', code: Q13, note: '(A) 5 &nbsp; (B) 7 &nbsp; (C) 8 &nbsp; (D) 9' },
        { kind: 'code', label: 'Question 14 &middot; What is printed?', lang: 'java', code: Q14, note: '(A) 3 &nbsp; (B) 4 &nbsp; (C) 5 &nbsp; (D) It throws an exception' },
        { kind: 'table', mt: true, caption: 'Unit 4 answers (ours; checked by running the code)', head: ['Question', 'Answer', 'Why'], rows: [
          ['10', '(B) [4, 5, 6]', 'Removing at index i shifts every later element left by one. After removing the first 4, the second 4 moves into index 0, but i moves on to 1, so that 4 is never checked.'],
          ['11', '(B) 12', '% runs before -, so the row is 1 - col % 2: rows 1, 0, 1 for columns 0, 1, 2. That picks 4, 2 and 6, and 4 + 2 + 6 = 12.'],
          ['12', '(B)', 'The else branch returns false on the very first pass, after checking only 3 + 1. The pair 6 + 4 at the end is never reached.'],
          ['13', '(B) 7', 'mystery(0) to mystery(2) return 0, 1 and 2. Building up: mystery(3) is 2, mystery(4) is 3, mystery(5) is 5, and mystery(6) is 5 + 2 = 7.'],
          ['14', '(B) 4', 'split keeps the empty string between the two commas, so the array is red, green, an empty string, and blue.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The too-early return',
          left: [
            'Question 12 copies a real pattern. Writing about the 2025 free response, the Chief Reader described "a common algorithmic error being a too-early return" in a question about searching a 2D array for pairs.',
            'The fix is to return false only after the loop has finished, so every pair gets checked: delete the else branch entirely. If you picked (C), you checked the values but not the code&rsquo;s path through them.'
          ],
          rightH3: 'Removing while you traverse',
          right: [
            'Question 10 is the classic ArrayList trap. Two safe fixes: traverse backwards from the last index, or only increase i when nothing was removed. Both versions print [5, 6] when we run them.',
            'In Question 13, build the answer from the bottom up instead of expanding the calls from the top. Writing mystery(0) to mystery(6) in a row takes seconds and avoids a tree of twenty calls.'
          ] }
      ]
    },
    {
      id: 'frq', tint: 'deep', eyebrow: 'Free response, our own',
      h2: 'One free-response question in the ArrayList style',
      lede: 'Question 3 of the current exam asks students to write one method that analyses data in an ArrayList. This original question is in that style, followed by one correct solution and a five-point rubric we wrote in the spirit of the published guidelines.',
      body: [
        { kind: 'p', html: '<b>The task (ours).</b> A TempLog object stores whole-number temperature readings, in order, in an ArrayList of Integer values called readings. Write the method longestRise, which returns the length of the longest run of consecutive readings in which each reading is strictly greater than the one before it. A single reading counts as a run of length 1. If there are no readings, return 0. For the readings 61, 64, 63, 66, 70, 72, 71 the method returns 4, because 63, 66, 70, 72 is the longest rising run.' },
        { kind: 'code', label: 'TempLog.java &middot; one correct solution (ours)', lang: 'java', code: FRQ, note: 'Compiled and run by us. Test results: 61, 64, 63, 66, 70, 72, 71 gives 4; 50, 50, 50 gives 1; no readings gives 0; 40, 41, 42 gives 3.' },
        { kind: 'table', mt: true, caption: 'A five-point rubric for longestRise (ours, modelled on the style of the 2026 Scoring Guidelines, not an official rubric)', head: ['Point', 'Earned when the response'], rows: [
          ['1', 'Accesses every reading in the list without going out of bounds'],
          ['2', 'Compares each reading with the one before it using get, not [ ]'],
          ['3', 'Keeps a running length that grows on a rise and resets to 1 otherwise'],
          ['4', 'Keeps the longest run seen so far and updates it correctly (algorithm)'],
          ['5', 'Returns the correct value in every case, including no readings and one reading (algorithm)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where students lose points on this one',
          left: [
            'Starting the loop at 0 and comparing get(i) with get(i - 1) throws an exception on the first pass. Starting at 1 is the whole trick.',
            'Updating the longest run only inside the else branch misses a run that lasts until the end of the list, such as 40, 41, 42. That response would return 1 instead of 3 and lose the algorithm point for the return value.'
          ],
          rightH3: 'Why get and not square brackets',
          right: [
            'The 2026 Scoring Guidelines list reversed collection access, "[] instead of .get", among the reasons an algorithm point is not earned when it is not otherwise assessed. readings is an ArrayList, so readings[i] is not Java at all.',
            'For a step-by-step method for writing these answers, see our guide to <a class="ag-inline-link" href="/how-to-read-code">reading code</a> and our post on <a class="ag-inline-link" href="/blog/how-to-get-a-5-in-ap-computer-science-a">how to get a 5 in AP Computer Science A</a>.'
          ] }
      ]
    },
    {
      id: 'next', tint: '', eyebrow: 'After the set',
      h2: 'Using your results, and where to find official practice',
      lede: 'Fourteen questions are a sample, not an exam. Use them to find a weak unit, then practise that unit properly.',
      body: [
        { kind: 'three', cells: [
          { h3: 'If you missed Unit 1 questions', p: 'Go back to casting, integer division and String methods. They come back in every later unit, often hidden inside harder questions.' },
          { h3: 'If you missed Unit 2 or 4', p: 'Practise trace tables until they are automatic. Most loop and list mistakes are counting mistakes, not knowledge gaps.' },
          { h3: 'If you got them all', p: 'Time yourself on full sections. The real Section I is 42 questions in 90 minutes, a little over two minutes each.' }
        ] },
        { kind: 'p', mt: true, html: 'For official material, College Board points students to AP Classroom and to the test previews in the Bluebook app. Past free-response questions are on AP Central too, but College Board warns that after the 2025 to 2026 revisions they do not completely align with the current exam, so use them for practice in writing code rather than for timing. Our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> set new questions like these every week.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How students improve',
    h2: 'Four stages of getting good at AP CSA questions',
    lede: 'Most students move through these in order. Knowing which one you are at tells you what to practise.',
    table: { caption: 'Stages of AP CSA practice (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Running it', 'Types the code into an editor to find the answer'],
      ['2. Tracing it', 'Predicts the output on paper, then checks'],
      ['3. Spotting the trap', 'Sees the integer division or the shifted index at once'],
      ['4. Writing it', 'Writes full methods that earn every rubric point']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is where most students begin. It is fine for learning, and not allowed on the exam.',
      'The move from stage 2 to 3 usually comes from volume: a few hundred well-chosen questions.'
    ] },
    right: { h3: 'For students', ps: [
      'Commit to an answer before you check. Guessing then checking teaches nothing.',
      'Keep a list of the traps that caught you. It will be shorter than you expect.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Java and AP students',
    lede: 'Live online, the same teacher each week, as a batch or one to one.',
    bands: [
      { num: 'I', h3: 'AP and Java', sub: 'Grades 9 to 12', courses: [
        { code: 'ACSP / JV / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Every unit, with weekly practice sets.' },
        { code: 'ACSP / JV / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The language, properly, from scratch.' },
        { code: 'ACSP / JV / 03', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CSP', blurb: 'The broader AP course.' }
      ] },
      { num: 'II', h3: 'Algorithms', sub: 'Ages 13 to 18', courses: [
        { code: 'ACSP / AL / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Searching, sorting and lists, deeper.' },
        { code: 'ACSP / AL / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems, USACO style.' },
        { code: 'ACSP / AL / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Quick scripts and projects beside Java.' }
      ] },
      { num: 'III', h3: 'Building things', sub: 'Ages 13 to 18', courses: [
        { code: 'ACSP / BLD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack for teens', blurb: 'Real web apps, front to back.' },
        { code: 'ACSP / BLD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Data sets and first models.' },
        { code: 'ACSP / BLD / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and games.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Practice like this, every week, live',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening slots work across the US time zones.' },
      { time: 'Weekends', l: 'Room for a full timed section.' },
      { time: '1-on-1', l: 'Arranged around tests at school.' }
    ],
    cells: [
      { h3: 'The same teacher', p: 'Who remembers last week&rsquo;s mistakes.' },
      { h3: 'Trace, then run', p: 'Predict on paper first, every time.' },
      { h3: 'New questions weekly', p: 'Written for the student&rsquo;s weak units.' },
      { h3: 'Free response marked', p: 'Point by point, with reasons.' },
      { h3: 'Online, nationwide', p: 'Any state, any school district.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one learner.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Apps and games by young people who practised exactly this kind of Java with us. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Parents&rsquo; Google reviews, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'The practice set is free. Classes are paid month by month in US dollars, with nothing to sign for the year and no fee to stop.',
    free: ['A free first lesson', 'Bring the questions you missed', 'No card needed'],
    group: ['A batch of fifteen to twenty', 'One teacher all term', 'Choose a batch', 'Month to month'],
    one: ['Just your teen and a teacher', 'Times you choose', 'Questions on their weak units']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'AP CSA practice: common questions',
    items: [
      { q: 'Are these real AP Computer Science A exam questions?', a: 'No. Every question on this page was written by our teachers in the style of the current exam. College Board items are not copied. For official practice, use AP Classroom and the Bluebook test previews.' },
      { q: 'Are the answers on this page correct?', a: 'We compiled and ran every snippet with Java before publishing, so each answer is the actual output of the code.' },
      { q: 'How many questions are on the real AP CSA multiple choice?', a: 'There are 42 of them in Section I, with 90 minutes to answer, and together they make up 55% of the exam score.' },
      { q: 'Which unit should I practise most?', a: 'Unit 4, Data Collections, has the largest multiple-choice weighting, 30 to 40 percent, followed by Unit 2, Selection and Iteration, at 25 to 35 percent.' },
      { q: 'Is inheritance on the AP CSA exam?', a: 'College Board says designing and implementing inheritance relationships are outside the scope of the course and exam, so this set does not test it.' },
      { q: 'Which Java methods can appear on the exam?', a: 'The Java Quick Reference in Bluebook lists them, including String substring, indexOf and split, Math.random, and the ArrayList methods add, get, set, size and remove.' },
      { q: 'Are past AP CSA free-response questions still worth doing?', a: 'For practice in writing Java, yes. College Board notes that questions from before the 2025 to 2026 revisions are not fully matched to the current exam, so do not use them to judge timing or scoring.' },
      { q: 'Why does removing from an ArrayList in a for loop skip elements?', a: 'Removing at index i shifts every later element one place left, and then i increases, so the element that moved into position i is never checked. Traversing backwards avoids it.' },
      { q: 'When do AP CSA lessons run for students in the US?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do AP CSA classes cost?', a: 'The first lesson is free. After it, classes are paid one month at a time, and the fees section shows the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students learning Java for AP.',
    items: [
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'The full live course.' },
      { href: '/blog/ap-computer-science-a-changes-2026', label: 'What changed in AP CSA', p: 'The four-unit course explained.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A method for finding your own bugs.' },
      { href: '/how-to-think-like-a-programmer', label: 'Thinking like a programmer', p: 'The habits behind tracing.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'When AP questions get easy.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our pages for US families.' },
      { href: '/ap-csp-create-performance-task-guide', label: 'AP CSP Create task guide', p: 'The AP CSP Create task from the official handouts: code, video, PPR, AI rules, deadline.' },
      { href: '/is-ap-computer-science-hard', label: 'Is AP Computer Science hard?', p: 'How hard are AP CSA and AP CSP? The 2026 numbers, the prerequisites, two quick checks.' },
      { href: '/java-cannot-find-symbol-error', label: 'Java cannot find symbol error', p: 'Java cannot find symbol, decoded: real javac output, eight causes, numbered fixes.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send the questions you got wrong here, or from class. The teacher goes through two of them with your teen and then sets three new ones on the same idea.',
    readFirst: 'Want to know how a class runs? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open the <a class="ag-inline-link" href="/courses">courses</a> to see each syllabus.',
    note: 'Lessons are live on video, taught by teachers who work from India, so families in any state can join without travelling. A WhatsApp message is the quickest route to us.',
    formNote: 'Your first lesson is free; no card is taken.'
  },

  footer: {
    cols: [
      { h4: 'AP and Java', links: [
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/blog/how-to-get-a-5-in-ap-computer-science-a', label: 'A 5 in AP CSA' },
        { href: '/how-to-read-code', label: 'How to read code' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-for-17-year-olds', label: 'Coding for 17 year olds' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/hackathons-for-high-school-students', label: 'High school hackathons' }
      ] }
    ],
    bottomRight: 'Predict first, then run'
  },

  personalityCss: `
.ag-root.ag-acsp .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-acsp .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-acsp .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-acsp .ag-table caption { text-align: left; }
.ag-root.ag-acsp .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'College Board, read raw on 17 October 2026: AP CSA Course at a Glance (four units, MC weights 15 to 25, 25 to 35, 10 to 18, 30 to 40 percent); CED exclusion statement on inheritance; Java Quick Reference (String, Math, ArrayList methods); apstudents exam page (MC task types); 2025 Chief Reader report (too-early return; random number in a range); 2026 Scoring Guidelines (persistent data modified; [] instead of .get).',
    localProject: 'An original practice set: 14 multiple-choice questions in Java spread 3, 4, 2, 5 across the four units, and one ArrayList free-response task (TempLog.longestRise) with a five-point rubric of our own; every snippet compiled and run by us with javac 22, answers taken from real output. Lesson family: tracing code by hand.',
    requiredMentions: ['(A) put48', '(B) -2 4', '(B) [4, 5, 6]', '(C) 99 1', '4 + 3 + 2 + 1 = 10', 'mystery(6) is 5 + 2 = 7', 'longestRise', '61, 64, 63, 66, 70, 72, 71', 'a common algorithmic error being a too-early return', 'Designing and implementing inheritance relationships are outside the scope of the AP Computer Science A course and exam.'],
    sources: [
      { claim: 'Four units and their multiple-choice weights; topics 1.1 to 4.17.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-at-a-glance.pdf' },
      { claim: 'Inheritance design excluded from the course and exam.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf' },
      { claim: 'Methods on the Java Quick Reference.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-java-quick-reference.pdf' },
      { claim: 'What the multiple choice asks students to do.', url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-a/assessment' },
      { claim: 'Too-early return; random number in a range.', url: 'https://apcentral.collegeboard.org/media/pdf/ap25-cr-report-computer-science-a.pdf' },
      { claim: 'Persistent data modified; [] instead of .get.', url: 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-computer-science-a.pdf' }
    ],
    rejectedClaims: [
      'Reproducing College Board released questions or the 2026 free-response questions: not done; every item is original.',
      'That our rubric is an official College Board rubric: it is ours, modelled on the published style, and labelled so.',
      'That this set predicts an AP score: it is a 14-question sample and makes no score claim.',
      'Naming the Chief Reader: the report is quoted by its title only.',
      'Any affiliation with College Board: none, and the page says so.'
    ]
  }
};
