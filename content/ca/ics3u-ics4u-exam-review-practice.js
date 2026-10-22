'use strict';
// ICS3U and ICS4U exam review: an original mock exam with a marking guide (ag- school course door; Canada cluster Plan 2, row 7).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/ics3u-ics4u-exam-review-practice/;
// the PDF is byte-identical to the research copy in ca/src/ontario):
//  - The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf.
//    Final grade: "Seventy per cent of the grade will be based on evaluations conducted throughout the course."; "This portion of the
//    grade should reflect the student's most consistent level of achievement throughout the course, although special consideration
//    should be given to more recent evidence of achievement."; the 30 per cent final evaluation "in the form of an examination,
//    performance, essay, and/or other method of evaluation suitable to the course content and administered towards the end of the
//    course". Achievement chart: categories "Knowledge and Understanding", "Thinking", "Communication", "Application" with definitions
//    "Subject-specific content acquired in each course (knowledge), and the comprehension of its meaning and significance
//    (understanding)", "The use of critical and creative thinking skills and/or processes", "The conveying of meaning through various
//    forms.", "The use of knowledge and skills to make connections within and between various contexts."; Thinking criterion example
//    "detecting and correcting flaws"; level percentages 50 to 59, 60 to 69, 70 to 79, 80 to 100 (table headers, en dashes in the source,
//    paraphrased); "provincial standard"; "Parents of students achieving at level 3 can be confident that their children will be
//    prepared for work in subsequent courses."; level 4 "does not mean that the student has achieved expectations beyond those specified
//    for a particular course"; qualifiers "limited for level 1, some for level 2, considerable for level 3, and a high degree or thorough
//    for level 4"; "Teachers will ensure that student work is assessed and/or evaluated in a balanced manner with respect to the four
//    categories"; "A student whose achievement is below 50% at the end of a course will not obtain a credit for the course."
//    Expectation codes mapped to each mock question: ICS3U A1.2, A1.4, A2.2, A2.3, A3.2, A4.1, A4.4, B2.4, B4.4, C3.4; ICS4U A1.1,
//    A2.2, A3.2, A3.5, A3.6, A4.2, C1.2, C2.2, C2.3, C2.4 (every code checked against the PDF text).
// Our own material, labelled on the page: both mock exams (ICS3U, 50 marks; ICS4U, 40 marks), every question, every answer, the
// marking guides and mark allocations, the question-to-expectation map, the Unit 1 check, the use-the-mock protocol and the score
// table. Every program was run in Python 3.13 or Java 22 and the printed values on the page come from those runs (for example
// "10 7 4 1", "3 2 3.4", "81.0", "2.0 3", "1024" in 5 calls, [8, 20, 11, 16], 23:59 then 00:00, and power(2, -1) giving
// RecursionError in Python but 2 in Java).
// Lesson family: assessment literacy (know what is being marked, then practise under the same conditions).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const U2 = `for k in range(10, 0, -3):
    print(k, end=" ")`;

const U3 = `System.out.println(17 / 5 + " " + 17 % 5 + " " + 17.0 / 5);`;

const U6 = `rows = 4
for r in range(1, rows + 1):
    line = ""
    for c in range(r):
        line = line + str(c + 1)
    print(line)`;

const U7 = `int[] marks = {70, 85, 90};
int total = 0;
for (int m : marks) total += m;
double average = total / marks.length;
System.out.println(average);`;

const U8 = `def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    return year % 4 == 0`;

const U9 = `def count_vowels(word):
    count = 0
    for ch in word.lower():
        if ch in "aeiou":
            count += 1
    return count

print(count_vowels("Saskatchewan"))   # 4
print(count_vowels("rhythm"))         # 0`;

const U10_JAVA = `double[] temps = {-3, 4, 11, -8, 6};
double sum = 0;
for (int i = 0; i < temps.length; i++) {
    sum += temps[i];
}
double avg = sum / temps.length;
int above = 0;
for (int i = 0; i < temps.length; i++) {
    if (temps[i] > avg) {
        above++;
    }
}
System.out.println(avg + " " + above);   // 2.0 3`;

const U11 = `def linear_search(values, target):
    for i in range(len(values)):
        if values[i] == target:
            return i          # the first match wins
    return -1                 # checked everything: not there

print(linear_search([4, 9, 2, 9], 9))   # 1
print(linear_search([4, 9, 2, 9], 7))   # -1`;

const G1 = `def power(base, exp):
    if exp == 0:
        return 1
    half = power(base, exp // 2)
    if exp % 2 == 0:
        return half * half
    return half * half * base`;

const G3 = `vals = [3, 8, 12, 15, 21, 26, 30, 34, 41, 47, 52, 58, 63, 70, 77]
# binary search with lo = 0, hi = 14, mid = (lo + hi) // 2`;

const G5 = `grid = [[2, 7, 1, 8],
        [2, 8, 1, 8],
        [4, 5, 9, 0]]`;

const CLOCK_JAVA = `// A 24-hour clock that keeps its own time valid (ours, mock exam answer)
public class Clock {
    private int hours;     // 0 to 23
    private int minutes;   // 0 to 59

    public Clock(int hours, int minutes) {
        if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            throw new IllegalArgumentException("not a valid time");
        }
        this.hours = hours;
        this.minutes = minutes;
    }

    // Move forward one minute, wrapping past 23:59 to 00:00.
    public void tick() {
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours = (hours + 1) % 24;
        }
    }

    @Override
    public String toString() {
        return String.format("%02d:%02d", hours, minutes);
    }

    public static void main(String[] args) {
        Clock c = new Clock(23, 58);
        c.tick();
        System.out.println(c);      // 23:59
        c.tick();
        System.out.println(c);      // 00:00
        Clock d = new Clock(9, 5);
        for (int i = 0; i < 60; i++) {
            d.tick();
        }
        System.out.println(d);      // 10:05
    }
}`;

const CLOCK_PY = `class Clock:
    """A 24-hour clock that keeps its own time valid (ours)."""

    def __init__(self, hours, minutes):
        if not (0 <= hours <= 23 and 0 <= minutes <= 59):
            raise ValueError("not a valid time")
        self._hours = hours
        self._minutes = minutes

    def tick(self):
        """Move forward one minute, wrapping past 23:59 to 00:00."""
        self._minutes += 1
        if self._minutes == 60:
            self._minutes = 0
            self._hours = (self._hours + 1) % 24

    def __str__(self):
        return f"{self._hours:02d}:{self._minutes:02d}"


c = Clock(23, 58)
c.tick()
print(c)      # 23:59
c.tick()
print(c)      # 00:00`;

const UNIT1 = `print(15 // 4, 15 % 4, 15 / 4)

a = 5
b = 9
a = b
b = a
print(a, b)

print("ha" * 3)
print(3 > 2 and 2 > 3, 3 > 2 or 2 > 3)

c = 25
f = c * 9 / 5 + 32
print(f)`;

const PDF = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'EXAM REVIEW', blurb: 'An original ICS3U mock exam and an ICS4U mock exam, each with a full marking guide built on the Ontario achievement chart.' },
  slug: 'ics3u-ics4u-exam-review-practice',
  code: 'iier',
  accent: '#2F662E',
  accentRationale: 'ICS3U and ICS4U exam review, Canada: a fir green, #2F662E, allocated for this row; 8.1 RGB units from the nearest site accent (#336627) and at least 14 from every other Canada accent, with contrast 6.47 on the paper #FBF8F2 and 5.57 on the deepest tint',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'ICS3U and ICS4U exam review',
  title: 'ICS3U and ICS4U Exam Review: Mock Exams With a Marking Guide',
  description: 'ICS3U and ICS4U final exam review: two original mock exams with answers, a marking guide built on the Ontario achievement chart, and a Unit 1 quick check.',
  ogDescription: 'Two mock exams we wrote for Ontario computer science, ICS3U at 50 marks and ICS4U at 40, with every answer and a marking guide sorted by the four achievement chart categories.',
  twitterDescription: 'Original ICS3U and ICS4U mock exams, with answers and a marking guide.',
  pageName: 'ICS3U and ICS4U Exam Review',
  webPageDescription: 'An exam review page for Ontario Grade 11 and Grade 12 computer science students: how the final mark is built under the 2008 curriculum, an original ICS3U mock exam and an original ICS4U mock exam, each with answers and a marking guide by achievement chart category, and a Unit 1 check.',
  courseDescription: 'Live online exam preparation for Ontario ICS3U and ICS4U students in Python or Java, beside the school course, in a batch or one to one. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'ICS3U and ICS4U exam review',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#marking', label: 'How it is marked' },
    { href: '#mock3u', label: 'ICS3U mock' },
    { href: '#mock4u', label: 'ICS4U mock' },
    { href: '#unit1', label: 'Unit 1 check' }
  ],
  eyebrow: 'Ontario &middot; Grades 11 and 12 &middot; Final exam review',
  h1: 'ICS3U and ICS4U exam review: two mock exams and how to mark them',
  lede: 'Revision pays off most when it is done against a real paper, marked honestly. So we wrote two: a 50-mark ICS3U mock and a 40-mark ICS4U mock, each with every answer and a marking guide that shows where the marks go. Neither is any school&rsquo;s exam, and neither predicts what yours will contain; your teacher&rsquo;s outline does that. Both are built on the achievement chart in the Ontario curriculum, so the practice covers all four categories a teacher assesses. We get students ready for the school&rsquo;s exam, but we do not grant Ontario credits; the exam and the credit belong to the school.',
  secondaryCta: { href: '#mock3u', label: 'Start the ICS3U mock' },
  wa: 'Hello Modern Age Coders, my teen in Ontario has an ICS3U or ICS4U final exam coming up. Could we book a free first class for exam practice?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; Exam practice in Python or Java',
  spec: [
    ['Covers', 'ICS3U and ICS4U finals'],
    ['ICS3U mock', '50 marks, 75 minutes'],
    ['ICS4U mock', '40 marks, 60 minutes'],
    ['Marked by', 'Four chart categories'],
    ['Languages', 'Python and Java'],
    ['Written by', 'Our teachers'],
    ['Credit', 'Not granted by us'],
    ['Start', 'A free class']
  ],
  capsuleQ: 'What this page gives you',
  capsule: 'ICS3U and ICS4U exam review for Ontario Grade 11 and 12 computer science: an original 50-mark ICS3U mock exam and a 40-mark ICS4U mock, with answers and a marking guide sorted by the four achievement chart categories. Modern Age Coders runs live online exam practice, for a group or one student, through Ontario Computer Science Companion: ICS3U and ICS4U.',

  picks: {
    eyebrow: 'Exam preparation with a teacher',
    h2: 'Three courses for the run-up to a final',
    lede: 'The companion course builds exam practice into its last weeks. The other two strengthen the two areas these mocks test most.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'IIER / 01', title: 'Ontario Computer Science Companion', note: 'Timed mocks marked against the school&rsquo;s own outline, for ICS3U and ICS4U, in Python or Java.' },
      { course: 'python-complete-masterclass-teens', code: 'IIER / 02', title: 'Python for teens', note: 'Tracing, functions and lists until the written questions feel routine.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'IIER / 03', title: 'Problem solving for teens', note: 'Searches, sorts, recursion and classes, the ICS4U half of these mocks.' }
    ]
  },

  sections: [
    {
      id: 'marking', tint: 'tint', eyebrow: 'How the mark is built',
      h2: 'How ICS3U and ICS4U are marked, from the curriculum',
      lede: 'Before practising, it helps to know what a teacher is looking for. The 2008 Computer Studies curriculum sets the rules every Ontario school follows, and two parts of it matter most at exam time: how the final grade splits, and the four categories on the achievement chart.',
      body: [
        { kind: 'two',
          leftH3: 'The final grade',
          left: [
            'Most of the grade, 70 per cent of it, is earned before the final, from work evaluated during the course. The curriculum adds that this part &ldquo;should reflect the student&rsquo;s most consistent level of achievement throughout the course, although special consideration should be given to more recent evidence of achievement.&rdquo;',
            'The remaining 30 per cent comes from a final evaluation near the end of the course, which the document allows to be an examination, a performance, an essay or another method that suits the course. In computer science that is often a written exam, a coding task, a project or a combination; your teacher decides.'
          ],
          rightH3: 'The credit line',
          right: [
            'The achievement chart ends with a plain rule: &ldquo;A student whose achievement is below 50% at the end of a course will not obtain a credit for the course.&rdquo; Each level on the chart has a percentage band: 50 to 59 for level 1, 60 to 69 for level 2, 70 to 79 for level 3 and 80 to 100 for level 4.',
            'Level 3 is called the &ldquo;provincial standard&rdquo;, and the document is reassuring about it: &ldquo;Parents of students achieving at level 3 can be confident that their children will be prepared for work in subsequent courses.&rdquo;'
          ] },
        { kind: 'table', mt: true, caption: 'The four achievement chart categories, defined in the 2008 Computer Studies curriculum, and what each looks like on an exam (definitions quoted; the last column is ours)', head: ['Category', 'The curriculum&rsquo;s definition', 'On a computer science exam (ours)'], rows: [
          ['Knowledge and Understanding', '&ldquo;Subject-specific content acquired in each course (knowledge), and the comprehension of its meaning and significance (understanding)&rdquo;', 'Vocabulary, error types, what a line of code does, number systems'],
          ['Thinking', '&ldquo;The use of critical and creative thinking skills and/or processes&rdquo;', 'Tracing, finding and fixing a bug, choosing test cases; the chart names &ldquo;detecting and correcting flaws&rdquo;'],
          ['Communication', '&ldquo;The conveying of meaning through various forms.&rdquo;', 'Explaining a concept in sentences, pseudocode, clear names and comments'],
          ['Application', '&ldquo;The use of knowledge and skills to make connections within and between various contexts.&rdquo;', 'Writing working code for a task you have not seen in exactly that form']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the levels mean',
          left: [
            'The chart describes each level with one qualifier, used the same way in every category: &ldquo;limited for level 1, some for level 2, considerable for level 3, and a high degree or thorough for level 4&rdquo;. A level 4 trace is not a longer trace; it is one done with a high degree of effectiveness.',
            'The document also corrects a common belief: level 4 &ldquo;does not mean that the student has achieved expectations beyond those specified for a particular course&rdquo;. Top marks come from doing the course&rsquo;s own work very well, not from extra topics.'
          ],
          rightH3: 'Why our mocks use all four',
          right: [
            'The curriculum tells teachers to assess &ldquo;in a balanced manner with respect to the four categories&rdquo;. Students tend to revise only Application, which means writing code, and then lose marks on a written explanation or a trace.',
            'So every question in our two mocks is tagged with one category, and the marking guides total the marks by category. A student can see at a glance whether the weak spot is knowing, thinking, explaining or doing.'
          ] },
        { kind: 'source', html: 'Source: ' + PDF + ', sections on the achievement chart and on evaluation and reporting, read 22 October 2026. The percentage bands are paraphrased from the chart&rsquo;s column headings. No ministry or school board has any part in these mocks.' }
      ]
    },
    {
      id: 'map', tint: 'deep', eyebrow: 'The two papers at a glance',
      h2: 'What the mocks test, mapped to the curriculum',
      lede: 'Both mocks are ours. Each question below is tied to a specific expectation code in the 2008 curriculum, so a student who misses a question knows exactly which part of the course to revisit.',
      body: [
        { kind: 'table', caption: 'ICS3U mock: questions, expectations and marks (ours; expectation codes from the 2008 curriculum)', head: ['Q', 'Topic', 'ICS3U expectation', 'Category', 'Marks'], numCols: [0, 4], rows: [
          ['1', 'Name three errors', 'A4.1', 'Knowledge and Understanding', '3'],
          ['2', 'A range that counts down', 'A2.2', 'Knowledge and Understanding', '2'],
          ['3', 'Integer division and remainder', 'A1.4', 'Knowledge and Understanding', '3'],
          ['4', 'Binary and hexadecimal', 'A1.2', 'Knowledge and Understanding', '2'],
          ['5', 'Parameter and return value', 'A3.2', 'Knowledge and Understanding', '2'],
          ['6', 'Trace a nested loop', 'A4.4', 'Thinking', '4'],
          ['7', 'Find and fix a logic error', 'A4.1', 'Thinking', '4'],
          ['8', 'Choose test cases', 'B4.4', 'Thinking', '4'],
          ['9', 'Write count_vowels', 'A3.2', 'Application', '5'],
          ['10', 'Average and count above it', 'A2.3', 'Application', '8'],
          ['11', 'Write a linear search', 'A2.3', 'Application', '5'],
          ['12', 'Compiler and interpreter', 'C3.4', 'Communication', '4'],
          ['13', 'Pseudocode before code', 'B2.4', 'Communication', '4']
        ] },
        { kind: 'table', mt: true, caption: 'ICS4U mock: questions, expectations and marks (ours; expectation codes from the 2008 curriculum)', head: ['Q', 'Topic', 'ICS4U expectation', 'Category', 'Marks'], numCols: [0, 4], rows: [
          ['1', 'Trace a recursive power method', 'A3.6', 'Thinking', '4'],
          ['2', 'Count the comparisons in selection sort', 'C2.3', 'Knowledge and Understanding', '4'],
          ['3', 'Trace binary search', 'A3.2, C2.2', 'Thinking', '4'],
          ['4', 'Write a Clock class', 'A2.2, C1.2', 'Application', '10'],
          ['5', 'Column totals in a grid', 'A3.5', 'Application', '6'],
          ['6', 'Three kinds of testing', 'A4.2', 'Communication', '6'],
          ['7', 'A negative exponent', 'C2.4, A1.1', 'Thinking', '6']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Totals by category',
          left: [
            'ICS3U, 50 marks: Knowledge and Understanding 12, Thinking 12, Application 18, Communication 8. ICS4U, 40 marks: Knowledge and Understanding 4, Thinking 14, Application 16, Communication 6.',
            'The ICS4U paper leans on Thinking because Grade 12 adds recursion and algorithm analysis, both of which are reasoning before they are code. Your school&rsquo;s split may differ; ask the teacher how the final is weighted.'
          ],
          rightH3: 'The rules for sitting them',
          right: [
            'Sit each one in one go, on paper, with no notes and no computer: 75 minutes for ICS3U and 60 for ICS4U. Write code by hand where a question asks for code. Mark it with the guide only after the time is up.',
            'Both papers use Python for most code. Where a question gives Java, read it as Java; where it asks you to write code, use whichever language your class uses.'
          ] }
      ]
    },
    {
      id: 'mock3u', tint: 'tint', eyebrow: 'Mock exam one, ours',
      h2: 'The ICS3U mock exam: 50 marks, 75 minutes',
      lede: 'Written by our teachers for this page, at the level of a Grade 11 final. It is not taken from any school, board or past exam. Answer every question before opening the marking guide below it.',
      body: [
        { kind: 'p', html: '<b>Section 1: Knowledge and Understanding (12 marks)</b>' },
        { kind: 'ol', items: [
          '<b>(3 marks)</b> Name the kind of error in each: (a) <code>print(&quot;hello&quot;</code> with the closing bracket missing; (b) a program meant to average four numbers divides their total by 3; (c) a program reads <code>nums[5]</code> from a list of five numbers.',
          '<b>(2 marks)</b> What does the loop below print?',
          '<b>(3 marks)</b> What exact line does the Java statement below print?',
          '<b>(2 marks)</b> Convert the binary number 101101 to decimal, then convert your answer to hexadecimal.',
          '<b>(2 marks)</b> In one sentence each, define a parameter and a return value.'
        ] },
        { kind: 'code', label: 'Question 2 &middot; Python', lang: 'python', code: U2 },
        { kind: 'code', label: 'Question 3 &middot; Java', lang: 'java', code: U3 },
        { kind: 'p', mt: true, html: '<b>Section 2: Thinking (12 marks)</b>' },
        { kind: 'p', html: '<b>Question 6 (4 marks).</b> Trace the program below and write exactly what it prints.' },
        { kind: 'code', label: 'Question 6 &middot; Python', lang: 'python', code: U6 },
        { kind: 'p', html: '<b>Question 7 (4 marks).</b> This Java code should print the average of the three marks, about 81.67, but prints 81.0. Explain why, name the kind of error, and fix it.' },
        { kind: 'code', label: 'Question 7 &middot; Java', lang: 'java', code: U7 },
        { kind: 'p', html: '<b>Question 8 (4 marks).</b> Choose four years to test the function below. For each, give the expected result and say what the test checks. Do not run it.' },
        { kind: 'code', label: 'Question 8 &middot; Python', lang: 'python', code: U8 },
        { kind: 'p', mt: true, html: '<b>Section 3: Application (18 marks)</b>' },
        { kind: 'p', html: '<b>Question 9 (5 marks).</b> Write a function <code>count_vowels(word)</code> that returns how many of a, e, i, o, u appear in a word, in upper or lower case.' },
        { kind: 'p', html: '<b>Question 10 (8 marks).</b> Store these five temperatures in an array or list: -3, 4, 11, -8, 6. Print their average, then print how many are above the average. Do not use a built-in average function.' },
        { kind: 'p', html: '<b>Question 11 (5 marks).</b> Write <code>linear_search(values, target)</code> that returns the index of the first value equal to target, or -1 if there is none.' },
        { kind: 'p', mt: true, html: '<b>Section 4: Communication (8 marks)</b>' },
        { kind: 'p', html: '<b>Question 12 (4 marks).</b> In three or four sentences, explain the difference between a compiler and an interpreter, and say which one your class language uses.' },
        { kind: 'p', html: '<b>Question 13 (4 marks).</b> Write the pseudocode you would plan before coding Question 10. Use numbered steps and clear names.' }
      ]
    },
    {
      id: 'guide3u', tint: 'deep', eyebrow: 'Marking guide, ours',
      h2: 'ICS3U mock: answers and marking guide',
      lede: 'Mark honestly, and give part marks only where the guide does. Every program was run in Python 3.13 or Java 22 to confirm the values.',
      body: [
        { kind: 'table', caption: 'ICS3U mock marking guide (ours)', head: ['Q', 'Full-mark answer', 'Where the marks go'], numCols: [0], rows: [
          ['1', '(a) syntax error; (b) logic error; (c) run-time error', 'One mark each. Logic means it runs but gives a wrong answer; run-time means it stops while running'],
          ['2', '10 7 4 1', 'One mark for starting at 10 and stepping by -3, one for stopping before 0'],
          ['3', '3 2 3.4', 'One mark per part: int division, the remainder, then decimal division because 17.0 is a double'],
          ['4', '45 in decimal, 2D in hexadecimal', '32 + 8 + 4 + 1 = 45; 45 is 2 sixteens and 13, and 13 is D. One mark each'],
          ['5', 'A parameter is a value a function receives when it is called; a return value is the value it sends back', 'One mark each; an example earns the mark if the sentence is vague'],
          ['6', 'Four lines: 1, 12, 123, 1234', 'One mark per correct line. The inner loop runs r times on row r'],
          ['7', 'total / marks.length divides two ints, so 245 / 3 is 81 before it becomes a double. Logic error. Fix: (double) total / marks.length, which prints 81.66666666666667', 'One for the cause, one for naming a logic error, two for a working fix'],
          ['8', '2024 True (divisible by 4); 2023 False (not divisible by 4); 1900 False (divisible by 100 but not 400); 2000 True (divisible by 400)', 'One mark per year with its reason. Missing 1900 or 2000 means the century rules were never tested'],
          ['9', 'See the code below. Saskatchewan gives 4 and rhythm gives 0', 'Two for the loop, one for the vowel test, one for handling capitals, one for returning rather than printing'],
          ['10', 'Average 2.0, and 3 values above it (4, 11 and 6)', 'Two for storing the values, two for the total, one for the average, two for the second loop, one for both outputs'],
          ['11', 'See the code below. [4, 9, 2, 9] with target 9 gives 1; target 7 gives -1', 'Two for the loop, one for returning the index at the first match, two for returning -1 only after the loop ends'],
          ['12', 'A compiler translates the whole program before it runs; an interpreter translates and runs it line by line. Java is compiled to bytecode first; Python runs through an interpreter', 'One for each definition, one for a correct example, one for clear sentences'],
          ['13', 'Numbered steps: store the five values; set total to 0; add each value; average is total divided by the count; set above to 0; for each value, if it is greater than the average add 1; print both', 'Two for the right steps in order, two for clarity a classmate could code from']
        ] },
        { kind: 'code', label: 'Answer 9 &middot; Python (ours)', lang: 'python', code: U9 },
        { kind: 'code', label: 'Answer 10 &middot; Java (ours)', lang: 'java', code: U10_JAVA },
        { kind: 'code', label: 'Answer 11 &middot; Python (ours)', lang: 'python', code: U11, note: 'A common mistake is an else: return -1 inside the loop. That returns after checking only the first value, so linear_search([4, 9, 2, 9], 9) would wrongly give -1.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading your score',
          left: [
            'Total your marks by section as well as overall. A student with 16 of 18 in Application but 4 of 12 in Thinking needs tracing practice, not more coding, even though the total looks fine.',
            'Questions 7 and 8 are the ones most students drop marks on. Both reward slowing down: working out what a line really does, and choosing tests at the edges rather than in the middle.'
          ],
          rightH3: 'If you scored low on one section',
          right: [
            '<b>Knowledge and Understanding:</b> make flash cards for error types, operators and number systems. <b>Thinking:</b> trace three short programs a day on paper. <b>Application:</b> rewrite questions 9 to 11 from a blank file, then change the task slightly and write them again.',
            '<b>Communication:</b> explain one concept a day out loud in four sentences, then write it down. Pseudocode improves fastest when someone else tries to follow yours.'
          ] }
      ]
    },
    {
      id: 'mock4u', tint: 'tint', eyebrow: 'Mock exam two, ours',
      h2: 'The ICS4U mock exam: 40 marks, 60 minutes',
      lede: 'Written by our teachers for this page, at the level of a Grade 12 final. Like the first mock, it is ours alone and not drawn from any school&rsquo;s exam. Questions 1 and 7 use the same recursive method below.',
      body: [
        { kind: 'code', label: 'For Questions 1 and 7 &middot; Python', lang: 'python', code: G1 },
        { kind: 'ol', items: [
          '<b>Question 1 (4 marks, Thinking).</b> What does power(2, 10) return, and how many times is power called in total, counting the first call? Why is that fewer than ten?',
          '<b>Question 2 (4 marks, Knowledge and Understanding).</b> Selection sort is run on a list of six numbers. How many comparisons does it make if the list is already sorted, and how many if it is shuffled? Give the formula for n items, and name a sort that does far fewer comparisons on an already sorted list.',
          '<b>Question 3 (4 marks, Thinking).</b> Using the list below, write each middle index and value that binary search checks when searching for 58, and then for 10. Say what each search returns.',
          '<b>Question 4 (10 marks, Application).</b> Write a class Clock that stores hours (0 to 23) and minutes (0 to 59) as private data, refuses an invalid time when it is created, has a method tick() that moves forward one minute and wraps from 23:59 to 00:00, and prints itself as HH:MM.',
          '<b>Question 5 (6 marks, Application).</b> Write code that prints the total of each column of the grid below as a list.',
          '<b>Question 6 (6 marks, Communication).</b> Explain unit testing, integration testing and regression testing, with one example of each using your Clock class.',
          '<b>Question 7 (6 marks, Thinking).</b> What happens when power(2, -1) is called in Python? The same method written in Java with int division returns a number instead. What number, and why do the two languages differ? How would you fix the method?'
        ] },
        { kind: 'code', label: 'For Question 3', lang: 'python', code: G3 },
        { kind: 'code', label: 'For Question 5', lang: 'python', code: G5 }
      ]
    },
    {
      id: 'guide4u', tint: 'deep', eyebrow: 'Marking guide, ours',
      h2: 'ICS4U mock: answers and marking guide',
      lede: 'The same rules: mark only after the full 60 minutes, and give part marks only as the guide allows. All values were checked by running the code.',
      body: [
        { kind: 'table', caption: 'ICS4U mock marking guide (ours)', head: ['Q', 'Full-mark answer', 'Where the marks go'], numCols: [0], rows: [
          ['1', 'It returns 1024, in 5 calls: exponents 10, 5, 2, 1 and 0. Each call halves the exponent, so the number of calls grows with the number of halvings, not with the exponent itself', 'One for 1024, one for 5 calls, two for the halving explanation'],
          ['2', '15 comparisons in both cases. Selection sort always compares every remaining pair: n(n - 1) / 2. Insertion sort needs only n - 1, which is 5 here, on a sorted list', 'One for 15 sorted, one for 15 shuffled, one for the formula, one for naming insertion sort with its count'],
          ['3', 'For 58: index 7 (34), then index 11 (58), found, returns 11. For 10: index 7 (34), index 3 (15), index 1 (8), index 2 (12), then lo passes hi, returns -1', 'Two for each search: one for the sequence of middles, one for the return value'],
          ['4', 'See the code below: private fields, a validating constructor, tick() with the wrap at 60 minutes and 24 hours, and a two-digit HH:MM string. From 23:58, two ticks give 23:59 then 00:00', 'Two for private fields, two for validation, three for tick() including both wraps, two for the formatted string, one for a test of the midnight case'],
          ['5', '[8, 20, 11, 16]', 'Two for the nested loops, two for adding grid[r][c] into the right column, one for the list, one for the correct output'],
          ['6', 'Unit: test tick() alone, for example 9:05 ticked 60 times gives 10:05. Integration: test Clock inside the program that uses it, such as an alarm that checks the time. Regression: rerun all the old tests after any change to Clock', 'Two marks for each kind: one for the definition, one for a sensible example'],
          ['7', 'Python raises RecursionError: -1 // 2 is -1, so exp never reaches 0. Java int division rounds toward zero, so -1 / 2 is 0 and the base case is reached, but -1 % 2 is -1, so the odd branch returns 1 * 1 * 2, which is 2, a wrong answer. Fix: reject a negative exponent at the start, or return 1 / power(base, -exp) using a decimal type', 'Two for the Python behaviour with its reason, two for the Java value with its reason, two for a working fix']
        ] },
        { kind: 'code', label: 'Answer 4 &middot; Java (ours)', lang: 'java', code: CLOCK_JAVA },
        { kind: 'code', label: 'Answer 4 &middot; Python (ours)', lang: 'python', code: CLOCK_PY, note: 'Both versions print 23:59 and then 00:00. The Java main also checks a full hour: 09:05 ticked 60 times prints 10:05.' },
        { kind: 'two', mt: true,
          leftH3: 'What question 7 is really testing',
          left: [
            'Two languages, one method, two different failures. Python&rsquo;s floor division sends -1 to -1 forever, which is the infinite recursion pitfall the ICS4U curriculum names. Java&rsquo;s division reaches the base case and returns a confident wrong answer, which is worse, because nothing warns you.',
            'The lesson: a recursive method needs a precondition, here that the exponent is not negative, and the method should check it rather than trust the caller.'
          ],
          rightH3: 'Where Grade 12 students lose marks',
          right: [
            'On Question 4, most lost marks are the wrap: forgetting that hours must also wrap at 24, or printing 0:0 instead of 00:00. On Question 3, students often check the wrong middle after moving lo or hi by mid instead of mid plus or minus one.',
            'On Question 2, many write that a sorted list makes selection sort faster. It does not; it still compares every pair. Knowing which algorithms care about their input is a classic Grade 12 analysis point.'
          ] }
      ]
    },
    {
      id: 'unit1', tint: 'tint', eyebrow: 'For the first test of the year',
      h2: 'ICS3U Unit 1 test: a quick check, ours',
      lede: 'Schools choose their own unit order, so Unit 1 is not the same everywhere. In the classes our students attend, the first test usually covers variables, operators and simple output, so here is a short check on exactly those, with answers. Predict each printed line before you run anything.',
      body: [
        { kind: 'code', label: 'Unit 1 check &middot; Python (ours)', lang: 'python', code: UNIT1, note: 'Five things are printed. Write all five on paper first.' },
        { kind: 'ol', items: [
          '<b>3 3 3.75.</b> // keeps the whole part, % gives the remainder, and / gives the exact decimal. 15 is 3 fours with 3 left over.',
          '<b>9 9.</b> After a = b, the 5 is gone. Then b = a copies 9 back into b. Swapping needs a third variable, or Python&rsquo;s a, b = b, a.',
          '<b>hahaha.</b> Multiplying text by a whole number repeats it.',
          '<b>False True.</b> and needs both sides true; or needs at least one.',
          '<b>77.0.</b> 25 times 9 is 225, divided by 5 is 45.0, plus 32 is 77.0. The / makes it a decimal even though the answer is whole.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Scored four or five?',
          left: [
            'You are ready for a first unit test on these basics. Spend your remaining time on the habit that matters for the rest of the course: predicting the output of short programs before running them.',
            'Then try Section 1 of the ICS3U mock above. Its questions start at about this level and climb.'
          ],
          rightH3: 'Scored three or fewer?',
          right: [
            'Go back to each one you missed and change a single value, then predict again. The swap question in particular trips up students at every level, and it reappears later when sorting arrays.',
            'A teacher who watches you trace one program out loud can usually find the misunderstanding in a few minutes. That is often the fastest fix.'
          ] }
      ]
    },
    {
      id: 'protocol', tint: 'deep', eyebrow: 'Using the mocks well',
      h2: 'How to turn a mock exam into marks: a six-step routine',
      lede: 'A mock is only useful if it changes what you do next. This routine is ours, and it works for these two papers and for your own old tests.',
      body: [
        { kind: 'ol', items: [
          '<b>Sit it cold, timed and on paper.</b> No notes, no computer, the full time. The point is to find out what you can do under exam conditions, not what you can look up.',
          '<b>Mark it the same day with the guide.</b> Give yourself only the part marks the guide allows. Be strict; a teacher will be.',
          '<b>Total by category.</b> Knowledge and Understanding, Thinking, Communication, Application. Your lowest category is your revision plan for the week.',
          '<b>Write an error log.</b> For every lost mark, write the question, what you wrote, what was right, and why you missed it in one line. Patterns appear by the third entry.',
          '<b>Redo the missed questions from scratch two days later.</b> Not from memory of the answer: from a blank page. If you get it right, it counts as learned.',
          '<b>Sit the other mock, or one of your own old tests, a week later.</b> Compare category totals. The weak category should have moved.'
        ] },
        { kind: 'table', mt: true, caption: 'What to do with a mock score (ours; a mock score is a practice signal, not an achievement chart level)', head: ['Mock score', 'What it suggests', 'Next step'], rows: [
          ['80 per cent or more', 'Strong on this material', 'Practise timing and the written explanations; try harder variants'],
          ['70 to 79 per cent', 'Solid, with gaps', 'Fix the lowest category first, then resit'],
          ['60 to 69 per cent', 'Uneven', 'Daily tracing and a full redo of missed questions'],
          ['Under 60 per cent', 'Important gaps', 'Rebuild one unit at a time, with help from a teacher']
        ] },
        { kind: 'p', mt: true, html: 'The bands above follow the achievement chart&rsquo;s percentage columns on purpose, but a mock score is not a level. Your teacher evaluates your work against the course expectations, across the whole course, and only the school&rsquo;s own evaluation counts toward the final grade.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'Exam help, not the credit',
      h2: 'What our exam preparation is, and what it is not',
      lede: 'We prepare students for their school&rsquo;s exam. We do not set it, see it in advance or mark it, and the credit is the school&rsquo;s alone.',
      body: [
        { kind: 'two',
          leftH3: 'What a session looks like',
          left: [
            'A student brings their course outline, their old tests and the date of the final. We sit a mock together or set one as homework, mark it with them, and spend the session on the lowest category: often tracing for Grade 11 and recursion for Grade 12.',
            'In the last week we switch to short timed sets and explanation practice, because the night before is not the time for new topics.'
          ],
          rightH3: 'Where the credit comes from',
          right: [
            'Only the school, night school, summer school or credit provider that teaches and evaluates ICS3U or ICS4U can grant its credit. Modern Age Coders runs classes beside that course; we do not grant Ontario credits and we never contact a school about a student&rsquo;s exam.',
            'We will not write any part of a student&rsquo;s graded work, and we will not help anyone cheat on an exam. Practice papers like the two above exist so that a student can earn the mark themselves.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Exam readiness',
    h2: 'Four stages of exam readiness',
    lede: 'Our own stages, from preparing Grade 11 and 12 students for computer science finals.',
    table: { caption: 'From knowing the course to ready for the final (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Recognises', 'Understands the answer when shown it, but could not have written it'],
      ['2. Recalls', 'Writes standard algorithms from memory, slowly and with notes nearby'],
      ['3. Performs', 'Completes a full mock in the time, on paper, at a steady pace'],
      ['4. Explains', 'Says why each answer is right, in clear sentences, and catches their own errors']
    ] },
    left: { h3: 'For parents', ps: [
      'Most students overestimate their stage, because recognising an answer feels like knowing it. A timed mock is the honest test.',
      'Ask to see the category totals, not just the score. They show what kind of help is needed.'
    ] },
    right: { h3: 'For students', ps: [
      'Stage 1 to stage 2 is about rewriting from a blank page. Stage 2 to 3 is about the clock. Stage 3 to 4 is about talking through your work.',
      'Keep the error log. Rereading it the night before is better revision than a new topic.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further study',
    h2: 'Nine courses for after the exam, or before the next one',
    lede: 'Each runs live with a regular teacher, for a batch or one student.',
    bands: [
      { num: 'I', h3: 'Grade 11 and 12 support', sub: 'Grades 11 and 12', courses: [
        { code: 'IIER / SUP / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For finals written in Java.' },
        { code: 'IIER / SUP / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Tidy project history before the final project is due.' },
        { code: 'IIER / SUP / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'A third language once the course is done.' }
      ] },
      { num: 'II', h3: 'Contests', sub: 'Grades 9 to 12', courses: [
        { code: 'IIER / CON / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'Timed problem solving, the next level after a final.' },
        { code: 'IIER / CON / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Harder problems, faster.' },
        { code: 'IIER / CON / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'A weekend build with a team.' }
      ] },
      { num: 'III', h3: 'Beyond the course', sub: 'Teens', courses: [
        { code: 'IIER / BYD / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models built and tested from scratch.' },
        { code: 'IIER / BYD / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A complete web app, front to back.' },
        { code: 'IIER / BYD / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real data in Python, from question to chart.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class times',
    h2: 'Exam practice that fits the last weeks of a semester',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening sessions for timed sets during exam season.' },
      { time: 'Weekends', l: 'Longer mornings for a full mock and its marking.' },
      { time: '1-on-1', l: 'Booked close to the exam date for final review.' }
    ],
    cells: [
      { h3: 'Timed mocks', p: 'Sat on paper, under real conditions.' },
      { h3: 'Marked together', p: 'Category by category, honestly.' },
      { h3: 'Error logs', p: 'Kept and reviewed every session.' },
      { h3: 'Python or Java', p: 'The language of the class.' },
      { h3: 'One teacher', p: 'Who knows the student&rsquo;s weak spots.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or just one.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Some of what students have built with us once exams were done. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Families on Google, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'Your first class costs nothing. Families then pay a monthly fee for eight live classes a month, displayed below in your currency, with no contract beyond the month, so you can stop once the exam is over.',
    free: ['A free first class', 'Bring an old test or the outline', 'No card needed'],
    group: ['Fifteen to twenty per batch', 'One regular teacher', 'Batch time of your choice', 'Paid each month'],
    one: ['A private teacher', 'Sessions near the exam date', 'Planned from their own tests']
  },

  faq: {
    eyebrow: 'Exam questions from families',
    h2: 'ICS3U and ICS4U exams: common questions',
    items: [
      { q: 'How much is the ICS3U or ICS4U final exam worth?', a: 'Under the 2008 Ontario curriculum, 30 per cent of the final grade comes from a final evaluation near the end of the course, such as an examination, a performance or another suitable method, and 70 per cent from evaluations during the course. Each school decides what its final evaluation contains.' },
      { q: 'What is on the ICS3U final exam?', a: 'It depends on the school and the teacher. ICS3U covers data types, one-dimensional arrays, control structures, subprograms, debugging and testing, software development, computer systems and topics in computer science, so finals usually draw on those. Ask the teacher what the final evaluation includes.' },
      { q: 'What is on the ICS4U final exam?', a: 'Again it depends on the school. ICS4U adds modular and object-oriented design, searching and sorting, recursion, algorithm analysis, formal testing and a team project, so Grade 12 finals usually include tracing recursion, comparing algorithms and writing classes.' },
      { q: 'Are these real exam questions?', a: 'No. Both mock exams were written by our teachers for this page. They are not taken from any school, board or past exam, and they do not predict what any particular exam will contain.' },
      { q: 'How are ICS3U and ICS4U exams marked?', a: 'Teachers use the achievement chart in the 2008 curriculum, which has four categories: Knowledge and Understanding, Thinking, Communication and Application. Our marking guides tag every question with one category so a student can see which one needs work.' },
      { q: 'What mark do I need to pass ICS3U or ICS4U?', a: 'The 2008 curriculum says a student whose achievement is below 50 per cent at the end of a course will not obtain a credit for it. Level 3, 70 to 79 per cent, is called the provincial standard.' },
      { q: 'How should I study for the ICS3U final?', a: 'Sit a timed mock on paper, mark it strictly, total the marks by category, keep an error log, redo missed questions from a blank page two days later, and sit a second paper a week after. Trace short programs by hand every day.' },
      { q: 'What is usually on an ICS3U Unit 1 test?', a: 'Schools set their own unit order. In our experience a first unit often covers variables, data types, operators and simple input and output. The Unit 1 check on this page tests exactly those, with answers.' },
      { q: 'Do you give credits or official exam results?', a: 'No. We prepare students beside the school course and do not grant Ontario credits. Exams, marks and credits come only from the school or credit provider that teaches the course.' },
      { q: 'When can we book exam practice sessions?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in your own Ontario time zone.' },
      { q: 'What do exam practice classes cost?', a: 'The first class is free. After that families pay a monthly fee and can stop at the end of any month, including straight after the exam. The fees section shows the current figure.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Other guides',
    h2: 'More for Grade 11 and 12 computer science',
    lede: 'Course guides and study help for Ontario students.',
    items: [
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'The Grade 11 course explained, strand by strand.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'The core skill behind every tracing question.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding the cause of an error instead of guessing.' },
      { href: '/blog/recursion-explained-for-beginners', label: 'Recursion explained', p: 'Before the ICS4U mock, if recursion still feels strange.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live classes for every age in Ontario.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'For students who enjoyed the hardest questions here.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'Every Canadian page on this site.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the course, the language, the exam date and one topic that worries your teen. The first class is a short mock on that topic, marked together.',
    readFirst: 'To read more first, see the <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">companion course syllabus</a>, which includes its exam weeks, or <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Lessons are live online with teachers who work from India, so exam practice fits around school without any travel. WhatsApp is the fastest way to reach us from Ontario.',
    formNote: 'Booking the free class asks for no card at all.'
  },

  footer: {
    cols: [
      { h4: 'Exam preparation', links: [
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'ICS3U and ICS4U companion' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/how-to-read-code', label: 'How to read code' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Sit it timed, mark it strictly, redo it cold'
  },

  personalityCss: `
.ag-root.ag-iier .ag-hero h1 { letter-spacing: -0.012em; max-width: 23ch; }
.ag-root.ag-iier .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-iier .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-iier .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-iier .ag-table td { line-height: 1.55; }
.ag-root.ag-iier .ag-steps li { margin-bottom: 0.65rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), fetched raw 22 October 2026: the final grade rule (70 per cent during the course, 30 per cent final evaluation) and its "most consistent level of achievement" sentence; the achievement chart categories with definitions, the "detecting and correcting flaws" criterion, level percentage bands, provincial standard, level 3 and level 4 statements, qualifiers, balanced assessment across categories, and the below-50% credit note; ICS3U and ICS4U expectation codes mapped to each mock question.',
    localProject: 'Two original mock exams with full marking guides: ICS3U (13 questions, 50 marks, 75 minutes) and ICS4U (7 questions, 40 marks, 60 minutes), each question tagged to a curriculum expectation and an achievement chart category, every program run (for example the Clock class in Java and Python printing 23:59 then 00:00, and power(2, -1) failing differently in Python and Java); a Unit 1 check; a six-step routine for using a mock and a score table. Lesson family: assessment literacy.',
    requiredMentions: ['most consistent level of achievement', 'detecting and correcting flaws', 'limited for level 1, some for level 2, considerable for level 3', 'will not obtain a credit for the course', 'count_vowels', 'linear_search([4, 9, 2, 9], 9)', 'count_vowels("Saskatchewan")', 'IllegalArgumentException', 'RecursionError: -1 // 2 is -1', '[8, 20, 11, 16]', 'The ICS3U mock exam: 50 marks, 75 minutes', 'print("ha" * 3)'],
    sources: [
      { claim: 'Final grade rule, achievement chart categories, definitions, level bands and descriptors, credit threshold, expectation codes.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'The current Ontario curriculum website still lists ICS3U and ICS4U with the issue year 2008.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.part_of%5Bcontains%5D=secondary___computer_studies__copy_&depth=0&elements=code,name,year_issued,site___grade,prerequisites' },
      { claim: 'ICS3U and ICS4U course records, with the ICS4U prerequisite.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&depth=0' }
    ],
    rejectedClaims: [
      'That the mocks resemble any school\'s actual exam or predict its content: the page says they do not.',
      'That a mock score equals an achievement chart level: the page says it is a practice signal only.',
      'A fixed weighting of categories on school finals: none exists in the source; our split is labelled ours and families are told to ask the teacher.',
      'That Unit 1 is the same in every school: the page says unit order is the school\'s choice.',
      'Any mark, grade or credit outcome from our classes: none promised.',
      'That we see, set or mark school exams: the page says we do not.',
      'Any affiliation with the Ontario Ministry of Education or a school board: none.'
    ]
  }
};
