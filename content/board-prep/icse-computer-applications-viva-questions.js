// ICSE Class 10 Computer Applications (Java): viva and oral questions.
// Intent: "icse computer viva questions", "icse computer practical viva", "java viva
// questions class 10", "oral questions computer applications icse", "bluej viva
// questions".
// HONESTY NOTE: CISCE's ICSE 2027 Computer Applications regulations prescribe no
// separate viva. The internal assessment (at least 20 lab assignments, 50 marks by
// the subject teacher and 50 by an external examiner, criteria class design 10,
// variable description 10, coding and documentation 10, execution or output 20) is
// where oral questions come up, because both examiners question the student about
// their own programs. The page says this plainly and never calls it a formal
// CISCE viva. Distinct from the project-and-internal-assessment page (which owns
// the criteria, the lab file plan and the rehearsal outline): this page IS the
// question bank, 56 original questions with spoken-style answers, grouped by
// chapter and by "about your own program", built around one worked lab program.
// Syllabus: 2027 ICSE CA only; recursion is not examined and the page says so.
// VERIFIED 2026-11-06 with javac 21.0.12 and java 21 from scratch files outside the
// repo (scratchpad/writers/icse-computer-applications-viva-questions/): Scorecard
// prints "Average: 86.6 / Grade: B" for 92 88 79 95 79, "60.0 / C" for 50 60 55 70
// 65, "90.0 / A" for five 90s; total / 5 gives 86.0; highest() returns 95 and -1
// for {-3, -8, -1}; six 90s give 108.0 with 5.0 and 90.0 with length; a letter
// typed for a mark throws InputMismatchException; default field values 0, null,
// false, 0.0; parseInt("12a") throws NumberFormatException; z[3] on a 3-element
// array throws ArrayIndexOutOfBoundsException; "java".toUpperCase() unstored leaves
// "java"; "apple".compareTo("banana") is -1; 'A' + 1 is 66, (char) gives B;
// new int[3][4] has length 3 and [0].length 4; two methods differing only in return
// type fail to compile ("already defined"); switch on a double fails to compile
// ("selector type double is not allowed"); a class with no constructor still
// compiles and new gives fields their defaults.
'use strict';

module.exports = {
  slug: 'icse-computer-applications-viva-questions',
  code: 'ic15',
  board: 'icse',
  themeColor: '#1E4A8C',
  dateModified: '2026-11-06',
  title: 'ICSE Computer Viva Questions 2027, with Spoken Answers',
  description: 'ICSE computer viva questions for 2027: 56 original Java and BlueJ oral questions examiners ask about your lab programs, each with a short spoken answer.',
  ogTitle: 'ICSE Computer Viva Questions: Oral Questions on Your Own Java Programs',
  ogDesc: 'There is no separate CISCE viva, but teachers and external examiners question students about their lab programs in the internal assessment. 56 original questions by chapter and about your own program, each with an answer short enough to say aloud, every Java fact run in Java 21.',
  twDesc: '56 original ICSE Computer Applications oral questions, by chapter and about your own lab program, with spoken answers checked in Java.',
  headline: 'ICSE Computer Viva Questions for 2027: the Oral Questions Examiners Ask About Your Lab Programs',
  courseName: 'ICSE Class 10 Computer Applications (Java) Oral and Viva Rehearsal, Live Online',
  courseDesc: 'Live online rehearsal of the oral questions ICSE Class 10 Computer Applications students face in the 2027 internal assessment: students explain their own BlueJ lab programs aloud, answer chained follow-up questions on Java basics, classes, constructors, methods, arrays and strings, and make small changes to their code live, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  knowsAbout: ['ICSE Computer Applications Internal Assessment', 'Java Viva Questions', 'BlueJ', 'Object-Oriented Programming', 'CISCE ICSE Class 10 Examination'],
  brandTag: 'ICSE CA &middot; Viva',
  navLinks: [['#oral', 'Is there a viva?'], ['#java-basics', 'Basics'], ['#oop-viva', 'Classes'], ['#own-program', 'Your program'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Viva questions']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Viva and oral questions 2027',
  h1: 'ICSE computer viva questions, asked about your own Java programs.',
  lede: 'ICSE computer viva questions are not a separate CISCE exam. They are the oral questions a subject teacher or external examiner asks while marking your lab programs in the internal assessment: why is this field private, why does this loop stop here, what happens if I type a letter? This page has 56 original questions, sorted by chapter and then about one real lab program, each with an answer short enough to say in one breath. Every Java fact was checked by running the code. In our live classes students practise exactly this out loud.',
  heroNote: 'Live online &middot; 56 oral questions below &middot; answers you can say aloud &middot; your own programs questioned &middot; live code changes in BlueJ &middot; first class free',
  waText: 'Hello Modern Age Coders. I want oral and viva practice for ICSE Class 10 Computer Applications.',
  timetable: {
    label: 'When oral practice runs',
    title: 'Oral rounds',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, quick-fire concept round', '5:30', 'PM IST'],
      ['Wednesday, defend your lab program', '8:00', 'PM IST'],
      ['Questions answered on this page', '56', 'spoken'],
      ['Internal assessment marks', '100', 'two examiners']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> oral rehearsal one to one, after school in your own time zone, for ICSE students in the Gulf, Singapore and beyond.',
    stamps: ['Teacher 50 &middot; External 50', 'Explain, then change']
  },
  picksH2: 'Courses where students learn to explain their code',
  picksLede: 'The ICSE Java course where every lab program is written and then defended aloud, the ISC course where the same oral habit is tested again with longer programs, and data structures for the student who enjoys explaining why one method beats another.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where each Wednesday program is questioned by the teacher before it enters the lab file.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC Computer Science, where the practical has its own viva and the questions go deeper into design.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who likes the "why this method?" questions and wants to argue about searching and sorting with real reasons.' }
  ],
  capsule: 'ICSE computer viva questions are the oral questions asked during the Computer Applications internal assessment. CISCE prescribes no separate viva: students submit at least twenty Java lab assignments, marked 50 by the subject teacher and 50 by an external examiner on class design, variable description, coding and documentation, and execution. While marking, examiners often ask the student to explain a program, justify a choice or change a line. The questions come from Java basics, classes and constructors, methods, arrays, strings and, above all, your own code. Modern Age Coders rehearses these aloud in a live mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="oral">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Is there really a viva?</p>
      <h2>Is there a viva in ICSE Computer Applications practical?</h2>
      <p class="bx-lede">Not as a separate, marked CISCE viva. The oral questions happen inside the internal assessment, where two examiners mark your lab programs and may ask about them.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>What the regulations actually say</h3>
        <p>For 2027, Computer Applications has a two-hour written paper of 100 marks and an internal assessment of 100 marks, built on at least twenty Java lab assignments. The subject teacher awards 50 and an external examiner, nominated by the head of the school, awards 50, each on four criteria. None of them is called viva, and CISCE publishes no viva question list.</p>
      </div>
      <div>
        <h3>Where the questions come from</h3>
        <p>To judge class design or documentation, an examiner needs to understand your choices, and the quickest way is to ask. So students are often asked to run a program, explain its logic, defend a data type or make a small change. How much is asked varies by school; students simply call it the computer viva.</p>
      </div>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-marks">
        <thead><tr><th scope="col">Criterion</th><th scope="col">Marks per examiner</th><th scope="col">The oral question it invites</th></tr></thead>
        <tbody>
          <tr><td>Class design</td><td class="bx-num">10</td><td>Why these fields? Why private? Why this constructor?</td></tr>
          <tr><td>Variable description</td><td class="bx-num">10</td><td>What does this variable hold, and why is it a double?</td></tr>
          <tr><td>Coding and documentation</td><td class="bx-num">10</td><td>Why this loop? What does this comment mean? What if the input is wrong?</td></tr>
          <tr><td>Execution or output</td><td class="bx-num">20</td><td>Run it with my input. Now change it to do this.</td></tr>
          <tr class="bx-total"><td>Two examiners</td><td class="bx-num">50 + 50</td><td>100 marks of internal assessment</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Choosing and documenting the twenty assignments is covered on
      <a class="bx-link" href="/icse-class-10-computer-applications-project-and-internal-assessment">the ICSE project and internal assessment page</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="java-basics">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which basics come up first?</p>
      <h2>Java viva questions class 10: basics, BlueJ and data types</h2>
      <p class="bx-lede">Examiners often warm up with a definition before opening your file.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Java, BlueJ and the compiler</h3>
        <ol class="bx-qlist">
          <li>What is bytecode?
            <details><summary>Spoken answer</summary> The compiler turns my Java source into bytecode, a .class file not tied to any one machine. The Java Virtual Machine runs it.</details></li>
          <li>Why is Java called platform independent?
            <details><summary>Spoken answer</summary> The same bytecode runs on Windows, Mac or Linux wherever a JVM is installed. I compile once and the JVM handles each machine.</details></li>
          <li>What is BlueJ and why does your school use it?
            <details><summary>Spoken answer</summary> BlueJ is a simple Java environment built for learning. It shows classes as boxes, and I can create an object and call a method without writing main.</details></li>
          <li>Is Java compiled or interpreted?
            <details><summary>Spoken answer</summary> Both. javac compiles the source to bytecode, and the JVM interprets or translates that bytecode while the program runs.</details></li>
          <li>What is a token? Name its types.
            <details><summary>Spoken answer</summary> The smallest unit the compiler recognises: keywords, identifiers, literals, operators and separators, like int, total, 5, + and the semicolon.</details></li>
          <li>Which kinds of comment does Java have?
            <details><summary>Spoken answer</summary> // for one line, /* */ for several lines, and /** */ for documentation comments. I used // to explain each method in my lab programs.</details></li>
          <li>Name three kinds of error, with an example of each.
            <details><summary>Spoken answer</summary> Syntax: a missing semicolon, so it will not compile. Runtime: a letter typed where nextInt expects a number. Logical: dividing by 5 when I meant 5.0, so it runs but gives a wrong answer.</details></li>
        </ol>
      </div>
      <div>
        <h3>Data types, input and operators</h3>
        <ol class="bx-qlist" start="8">
          <li>What is the difference between primitive and reference data types?
            <details><summary>Spoken answer</summary> A primitive variable, like int or char, holds the value itself. A reference variable, like a String or an array, holds the address of an object.</details></li>
          <li>What is the size of int and double?
            <details><summary>Spoken answer</summary> int takes 4 bytes and stores whole numbers. double takes 8 bytes and stores decimals, which is why I used it for an average.</details></li>
          <li>What is implicit and explicit type conversion?
            <details><summary>Spoken answer</summary> Implicit is automatic, smaller type to bigger, like int to double. Explicit is a cast I write, like (char) (c + 1), and it can lose data.</details></li>
          <li>How did you take input in your programs?
            <details><summary>Spoken answer</summary> I imported java.util.Scanner, made new Scanner(System.in), and used nextInt for numbers and nextLine for a full name.</details></li>
          <li>What is the difference between next() and nextLine()?
            <details><summary>Spoken answer</summary> next() reads one word; nextLine() reads the whole line, so it suits a name like Ria Sen.</details></li>
          <li>What is the difference between = and ==?
            <details><summary>Spoken answer</summary> = assigns a value to a variable. == compares two values and gives true or false.</details></li>
          <li>What does the keyword new do?
            <details><summary>Spoken answer</summary> It creates an object in memory and calls the constructor.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">If a definition question turns into "what is the difference between", the ready answers are on
      <a class="bx-link" href="/icse-computer-difference-between-questions">ICSE Computer Applications difference between questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="oop-viva">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What do they ask about classes?</p>
      <h2>BlueJ viva questions on classes, constructors, methods and wrappers</h2>
      <p class="bx-lede">These sit behind the class design marks, so expect them on any program with a constructor or private fields.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Classes, objects and constructors</h3>
        <ol class="bx-qlist" start="15">
          <li>What is the difference between a class and an object?
            <details><summary>Spoken answer</summary> A class is the plan; an object is one real copy made from it, like one Scorecard for Ria and another for Arjun.</details></li>
          <li>What is a constructor, and how is it different from a method?
            <details><summary>Spoken answer</summary> A constructor has the class's name, no return type, and runs automatically when the object is created. A method has a return type, even void, and runs only when called.</details></li>
          <li>What happens if you do not write any constructor?
            <details><summary>Spoken answer</summary> The compiler supplies a default constructor with no parameters. The fields then keep their default values, 0 for int, null for a String and false for boolean.</details></li>
          <li>What is constructor overloading?
            <details><summary>Spoken answer</summary> Several constructors with different parameter lists. Java picks one by the number and type of arguments passed with new.</details></li>
          <li>What is encapsulation?
            <details><summary>Spoken answer</summary> Keeping data and its methods together in one class and hiding the data. My fields are private so only the class's own methods change them.</details></li>
          <li>Name the access specifiers and what they allow.
            <details><summary>Spoken answer</summary> private: inside the class only; default: inside the package; protected: package and subclasses; public: everywhere.</details></li>
          <li>What is the difference between static and non-static members?
            <details><summary>Spoken answer</summary> A static member belongs to the class, one shared copy. An instance member belongs to each object, like each student's own marks.</details></li>
        </ol>
      </div>
      <div>
        <h3>Methods and wrapper classes</h3>
        <ol class="bx-qlist" start="22">
          <li>What is the difference between an instance variable and a local variable?
            <details><summary>Spoken answer</summary> An instance variable is declared in the class and lives with the object. A local variable, like total, lives only inside its method.</details></li>
          <li>What is method overloading, and can two methods differ only in return type?
            <details><summary>Spoken answer</summary> Overloading is the same method name with different parameter lists. Return type alone is not enough; the compiler says the method is already defined.</details></li>
          <li>What is a pure method and an impure method?
            <details><summary>Spoken answer</summary> A pure method only returns a result and changes nothing, like grade(). An impure method changes the object's state, like computeAverage(), which updates the average field.</details></li>
          <li>What is call by value and call by reference?
            <details><summary>Spoken answer</summary> When I pass a primitive, the method gets a copy, so the original cannot change. When I pass an array or object, the method gets the reference, so changes to its elements are seen by the caller.</details></li>
          <li>What does the return statement do?
            <details><summary>Spoken answer</summary> It sends a value back and ends the method at once. A void method can still use return; to leave early.</details></li>
          <li>What is a wrapper class? What are autoboxing and unboxing?
            <details><summary>Spoken answer</summary> A wrapper class like Integer wraps a primitive in an object. Autoboxing does it automatically, Integer k = 5, and unboxing reverses it, int j = k.</details></li>
          <li>What happens if Integer.parseInt gets "12a"?
            <details><summary>Spoken answer</summary> It throws a NumberFormatException, because 12a is not a valid whole number. "42" would work and give the int 42.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Deeper practice on these chapters is on
      <a class="bx-link" href="/icse-class-10-constructors-questions">ICSE Class 10 constructors questions</a> and
      <a class="bx-link" href="/icse-class-10-encapsulation-access-specifiers">encapsulation and access specifiers</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="array-string-viva">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. And the later chapters?</p>
      <h2>Oral questions computer applications ICSE: loops, arrays and strings</h2>
      <p class="bx-lede">Most of a lab file is loops, arrays and strings, so most "why did you" questions land here.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Decisions, loops and arrays</h3>
        <ol class="bx-qlist" start="29">
          <li>When can you not use switch instead of if-else-if?
            <details><summary>Spoken answer</summary> switch only matches exact values, so it cannot test a range like average at least 90. It also cannot switch on a double; the compiler refuses it.</details></li>
          <li>Why do you write break in each case?
            <details><summary>Spoken answer</summary> Without break, control falls through and runs the next case too, so my menu would print two results for one choice.</details></li>
          <li>What is the difference between an entry-controlled and an exit-controlled loop?
            <details><summary>Spoken answer</summary> for and while test first, so may run zero times; do-while tests at the end, so runs at least once.</details></li>
          <li>Why did you use a for loop here and a while loop there?
            <details><summary>Spoken answer</summary> for when I know the count, like five subjects; while for digits of a number, stopping when it becomes 0.</details></li>
          <li>What is the difference between break and continue?
            <details><summary>Spoken answer</summary> break leaves the loop completely. continue skips the rest of this pass and goes to the next one.</details></li>
          <li>What is an array, and where does its index start?
            <details><summary>Spoken answer</summary> Many values of one type under one name. The index starts at 0, so the last is at length minus 1.</details></li>
          <li>What happens if you use index 3 in an array of size 3?
            <details><summary>Spoken answer</summary> The program stops with an ArrayIndexOutOfBoundsException. The valid indexes are only 0, 1 and 2.</details></li>
          <li>What is the difference between length and length()?
            <details><summary>Spoken answer</summary> length is an array field; length() is a String method that counts characters.</details></li>
        </ol>
      </div>
      <div>
        <h3>Searching, sorting and strings</h3>
        <ol class="bx-qlist" start="37">
          <li>What is the difference between linear search and binary search?
            <details><summary>Spoken answer</summary> Linear search checks every element and works on any array. Binary search keeps halving the range, much faster, but needs a sorted array.</details></li>
          <li>How is bubble sort different from selection sort?
            <details><summary>Spoken answer</summary> Bubble sort swaps neighbours in the wrong order; selection sort finds the smallest remaining element and swaps it into place once per pass.</details></li>
          <li>How do you find the rows and columns of a 2D array?
            <details><summary>Spoken answer</summary> For new int[3][4], g.length gives 3 rows. g[0].length gives 4 columns.</details></li>
          <li>Why is a String called immutable?
            <details><summary>Spoken answer</summary> A String cannot be changed after it is made; methods return a new String. If I call toUpperCase on "java" and do not store the result, it still prints java.</details></li>
          <li>Why did you compare Strings with equals() and not ==?
            <details><summary>Spoken answer</summary> equals() compares the characters; == checks whether two references are the same object, so it can say false for matching text.</details></li>
          <li>What does compareTo return?
            <details><summary>Spoken answer</summary> 0 if the Strings are equal, a negative number if the first comes earlier in dictionary order, and a positive number if it comes later. "apple" compared to "banana" gives -1.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">If the examiner asks you to search or sort live, practise first on
      <a class="bx-link" href="/icse-class-10-sorting-and-searching-programs">ICSE sorting and searching programs</a> and
      <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="own-program">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What do they ask about my own program?</p>
      <h2>ICSE computer practical viva: questions about your own program</h2>
      <p class="bx-lede">This is where marks are won or lost. Below is a typical lab assignment and fourteen questions an examiner might ask about it. Swap in your own program and answer them aloud.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>A lab program</b><span>Scorecard.java</span></figcaption>
  <pre>import java.util.Scanner;
class Scorecard {
    private String name;    // student's name
    private int[] marks;    // marks in five subjects
    private double average; // average of the marks

    Scorecard(String n, int[] m) {
        name = n;
        marks = m;
        average = 0.0;
    }
    void computeAverage() {
        int total = 0;
        for (int i = 0; i &lt; marks.length; i++)
            total += marks[i];
        average = total / 5.0;
    }
    char grade() {
        if (average &gt;= 90) return 'A';
        else if (average &gt;= 75) return 'B';
        else if (average &gt;= 60) return 'C';
        else return 'D';
    }
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Average: " + average);
        System.out.println("Grade: " + grade());
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String n = sc.nextLine();
        int[] m = new int[5];
        for (int i = 0; i &lt; 5; i++)
            m[i] = sc.nextInt();
        Scorecard s = new Scorecard(n, m);
        s.computeAverage();
        s.display();
    }
}</pre>
  <p class="bx-code-note">Input: Ria Sen, then 92 88 79 95 79. Output, from a real run: Name: Ria Sen, Average: 86.6, Grade: B.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>A change asked live</b><span>question 53</span></figcaption>
  <pre>int highest() {
    int max = marks[0];
    for (int i = 1; i &lt; marks.length; i++)
        if (marks[i] &gt; max)
            max = marks[i];
    return max;
}

<i>// Returns 95 for Ria's marks.</i></pre>
  <p class="bx-code-note">Starting max at marks[0], not 0, keeps it right even if every value were negative: for -3, -8, -1 it returns -1.</p>
</figure>
    </div>
    <ol class="bx-qlist bx-mt-40" start="43">
      <li>Explain your program in thirty seconds.
        <details><summary>Spoken answer</summary> It stores a name and five marks in a Scorecard object, works out the average and gives a grade from A to D. main reads input, creates the object and calls its methods.</details></li>
      <li>Why are the three fields private?
        <details><summary>Spoken answer</summary> So no other class can change the marks or average directly, only my own methods. That is encapsulation.</details></li>
      <li>What does your constructor do?
        <details><summary>Spoken answer</summary> It is parameterised: it copies the name and marks into the fields and sets average to 0.0 as a clear start.</details></li>
      <li>Why did you divide by 5.0 and not 5?
        <details><summary>Spoken answer</summary> total is an int, so total / 5 would be integer division: 433 / 5 gives 86 and the average shows 86.0. Dividing by 5.0 makes it a double division and gives the correct 86.6.</details></li>
      <li>Why is total a local variable but average a field?
        <details><summary>Spoken answer</summary> total is only needed while adding; average is needed later by grade() and display(), so it belongs to the object.</details></li>
      <li>Does the order of your if conditions matter?
        <details><summary>Spoken answer</summary> Yes. If I tested average at least 60 first, a student with 92 would get C, because the first true condition wins and the rest are skipped.</details></li>
      <li>Which inputs did you test it with?
        <details><summary>Spoken answer</summary> A normal case, then boundaries: five 90s gives 90.0 and A, and 50 60 55 70 65 gives 60.0 and C.</details></li>
      <li>What happens if I type a letter instead of a mark?
        <details><summary>Spoken answer</summary> nextInt throws an InputMismatchException and the program stops. I could check with hasNextInt() before reading, and ask again if the input is not a number.</details></li>
      <li>Read me the variable description for computeAverage.
        <details><summary>Spoken answer</summary> total is an int that holds the running sum of the marks, and i is an int loop counter that goes from 0 to 4. Both are local to that method.</details></li>
      <li>Your school adds a sixth subject. What breaks?
        <details><summary>Spoken answer</summary> The divisor 5.0 is hard-coded, so six marks of 90 would give an average of 108.0. Dividing by marks.length instead gives 90.0 and works for any number of subjects.</details></li>
      <li>Add a method that returns the highest mark.
        <details><summary>Spoken answer</summary> Start max at marks[0], loop from index 1, replace max when an element is bigger, then return it.</details></li>
      <li>Which syllabus topics does this one program use?
        <details><summary>Spoken answer</summary> A class with private fields, a parameterised constructor, pure and impure methods, a one-dimensional array, a for loop, if-else-if and Scanner input. That is why I chose it as a lab assignment.</details></li>
      <li>Why did you name the method computeAverage and not ca?
        <details><summary>Spoken answer</summary> A clear name explains the method without a comment, and meaningful names earn documentation marks.</details></li>
      <li>What was the hardest part, and how did you fix it?
        <details><summary>Spoken answer</summary> My first version printed 86.0, so I traced it on paper and found the integer division. Changing 5 to 5.0 fixed it.</details></li>
    </ol>
    <p class="bx-mt-40">For the last question, tell the true story of one bug in your own program. Spotting planted errors quickly is practised on
      <a class="bx-link" href="/icse-class-10-java-error-finding-questions">ICSE Class 10 Java error finding questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="rehearsal">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How do you get good at this?</p>
      <h2>How to prepare for ICSE computer oral questions</h2>
      <p class="bx-lede">Prepare by speaking, not reading. Answer in two sentences, the idea and then the line in your code that shows it, and expect a follow-up: "why private?" leads to "what if it were public?". If unsure, trace on paper in front of the examiner rather than guess.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: quick-fire concepts</h4><p>At the 5:30 PM IST class, students answer chapter questions aloud and classmates judge whether each answer would convince an examiner.</p></li>
      <li class="bx-step"><h4>Wednesday: defend the week's program</h4><p>At the 8:00 PM IST class, each student's new program is questioned on the spot.</p></li>
      <li class="bx-step"><h4>One live change</h4><p>The student makes a small edit in BlueJ on a shared screen, so changing code while watched feels normal.</p></li>
      <li class="bx-step"><h4>A mock with an unfamiliar teacher</h4><p>Before the school's assessment dates, a teacher new to the student questions three programs from the file, as an external examiner may.</p></li>
    </ol>
    <p class="bx-mt-40">Recursion is not in the 2027 ICSE Computer Applications syllabus, so it should not be needed in your answers. For the written paper alongside this, see
      <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Rehearse oral questions in the mini batch, or one to one',
  chooseLede: 'Both formats question the student about their own programs with the same teachers and the same chapter lists. In India, families pick the fixed evening mini batch or a private slot; ICSE students abroad learn one to one. Billing is monthly, and there is no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'A concept round aloud every Tuesday',
    'Each new lab program questioned on Wednesday',
    'Classmates\' answers show other ways to explain'
  ],
  choosePersonal: [
    'A time the family chooses, in India or abroad',
    'Every question aimed at your child\'s own file',
    'More speaking turns for a nervous student',
    'Mock oral timed around your school\'s dates',
    'Same teachers, same 2027 syllabus, same BlueJ'
  ],
  chooseAfter: 'A student who writes good code but freezes when asked about it often needs only a few one to one rounds before the school\'s assessment. A student whose lab file is still being written gains more from the batch, where each program is written and defended in the same week. Fees appear in your own currency.',
  zonesH2: 'Viva practice for ICSE students outside India',
  zonesLede: 'ICSE schools abroad follow the same CISCE internal assessment, so their examiners ask the same kind of questions about lab programs. Outside India the rehearsal runs one to one, in an after-school slot in the student\'s own time zone.',
  zonesAfter: 'The slot is fixed after the free demo and shifts around school tests when needed. Families overseas can read more on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the ICSE computer viva',
  faqH2: 'ICSE computer viva questions: what students ask',
  faqs: [
    ['Is there a viva in ICSE Class 10 Computer Applications?', 'Not as a separate, marked part of the CISCE scheme. The internal assessment is based on at least twenty Java lab assignments, marked 50 by the subject teacher and 50 by an external examiner on four criteria. While marking, examiners often ask students to explain or change their programs, which is what students call the computer viva.'],
    ['What questions are asked in the ICSE computer practical viva?', 'Mostly questions about your own lab programs: why a field is private, why you chose a loop, what a variable holds, what happens on wrong input, and a small change made live. Warm-up questions cover Java basics, BlueJ, constructors, methods, arrays and Strings.'],
    ['How many marks is the ICSE computer practical?', 'The internal assessment is worth 100 marks, equal to the written paper. Each of the two examiners marks out of 50: class design 10, variable description 10, coding and documentation 10, and execution or output 20. There is no separate mark for a viva, but your answers shape how the examiners judge your design and documentation.'],
    ['How do I prepare for the computer viva in ICSE Class 10?', 'Pick five programs from your file and explain each aloud in thirty seconds. Answer the "why" questions for each: types, loops, access specifiers, input checks. Run each with a boundary input and practise one small change in BlueJ. Saying answers aloud matters more than re-reading them.'],
    ['What are common Java viva questions for Class 10?', 'Bytecode and the JVM, class versus object, constructors, method overloading, static versus instance members, wrapper classes, entry and exit controlled loops, linear versus binary search, length versus length(), and equals versus ==. Each is answered above in two spoken sentences.'],
    ['What BlueJ viva questions do examiners ask?', 'They may ask what BlueJ is, how you create an object on it and call a method without main, how you compile and run, and what an error message in BlueJ means. Often they simply ask you to run your program in BlueJ with their own input and explain the output.'],
    ['What if I do not know the answer to a viva question?', 'Say what you do know and offer to trace it. Writing the values on paper, or running the code in BlueJ, shows understanding even when the first answer was not ready, and costs less than a confident wrong guess.'],
    ['Can the examiner ask about a program I did not write myself?', 'The questions are about your file, so a copied program shows quickly under follow-ups. The safest file is one where you wrote every program and can explain every line, which is why our classes build it in class, one program at a time.'],
    ['Is recursion asked in the ICSE computer viva?', 'It should not be. Recursion is not in the ICSE Computer Applications syllabus for 2027, so lab programs and questions should stay with classes, constructors, methods, library classes, arrays and strings. If an examiner mentions it, saying honestly that it is outside your syllabus is a fair answer.'],
    ['Do you rehearse viva questions in live classes?', 'Yes. In the mini batch, Tuesday has a quick-fire concept round aloud and Wednesday questions each student about the program they just wrote, with a live change in BlueJ. Before school assessment dates there is a mock with an unfamiliar teacher. Personalised one to one classes do the same at a time the family chooses.']
  ],
  startH2: 'Try a free live oral practice class',
  startHtml: `        <p>Bring one program from your child's lab file to the free demo. The teacher asks your child to explain it, then asks three or four follow-up questions and one small change in BlueJ, just as an examiner might. Afterwards you hear plainly which answers were strong, which wobbled, and whether the mini batch or one to one suits your child better.</p>
        <p>Still building the file? Start with <a class="bx-link" href="/icse-class-10-computer-applications-project-and-internal-assessment">the ICSE internal assessment guide</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Viva and oral questions 2027'
};
