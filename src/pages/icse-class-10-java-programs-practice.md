---
title: "ICSE Class 10 Java Programs Practice | Section B by Family"
description: "ICSE Class 10 Java programs for Section B: patterns, menu-driven switch, arrays with search and sort, string handling and classes with constructors, in BlueJ."
canonical: https://learn.modernagecoders.com/icse-class-10-java-programs-practice
source: src/pages/icse-class-10-java-programs-practice.html
---
> ICSE Class 10 Java programs for Section B: patterns, menu-driven switch, arrays with search and sort, string handling and classes with constructors, in BlueJ.

Start here

## The courses where these programs get written

The ICSE course whose Wednesday lab this page describes, and two courses for students who discover they like writing programs more than they expected.

[![ICSE Computer Applications Java with BlueJ course thumbnail](/images/java-teens.webp)  Section B / Wednesday lab ICSE Computer Applications, Java with BlueJ The mini batch whose Wednesday lab writes one family program and one variation every week, sixty programs a year, all from a blank class. Open the syllabus →](/courses/icse-computer-applications-java-bluej-course)[![Computer Science Class 11 and 12 course thumbnail](/images/ip-cs-class-11-12.webp)  The next paper / Class 11 and 12 Computer Science Class 11 and 12 Where the array and string families grow into the senior paper's data structures, for students who keep the subject after Class 10. Open the syllabus →](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course)[![Python for Teens course thumbnail](/images/python-teens.webp)  A second language / after the boards Python for Teens The natural second language for a student who can already write a Java class: the same ideas with less ceremony, and projects that reach a screen faster. Open the syllabus →](/courses/python-complete-masterclass-teens)

Ans. The short version

Section B of the ICSE Class 10 Computer Applications paper is 60 marks of Java programs: any four of the questions offered, at 15 marks each, written with variable descriptions and no flowcharts required. The programs come from six families: number and pattern programs, menu-driven programs using switch, single-dimensional arrays with searching and sorting, string handling character by character, classes with constructors and methods, and two-dimensional arrays. A student fluent in four families can score the whole section. Modern Age Coders practises all six in a live Wednesday 8 PM lab, one program and one variation a week from a blank class in BlueJ, in a mini batch of four or five, reaching about sixty written programs before the board exam.

Q1. What do Section B questions look like?

## Six families, and what each one is really testing

Read enough past papers and the questions sort themselves. The right-hand column is what the examiner is checking underneath the story the question tells.

| Family | A typical question | What it actually tests |
| --- | --- | --- |
| Number and pattern programs | Print a number triangle, a series, or check a number property such as prime, Armstrong or perfect | Nested loops, counters, integer arithmetic, the exact output format |
| Menu-driven programs | Display a menu and, using switch, perform one of several calculations on user input | Scanner input, switch with break and default, formatted output |
| Single-dimensional arrays | Accept n values, then search, sort, sum, count or find the largest | Indexing from zero, linear and binary search, bubble and selection sort |
| String handling | Reverse, test a palindrome, count vowels or words, change case by a rule, rearrange a sentence | charAt and length, building a new string, String methods used correctly |
| Classes with constructors and methods | Given a class with named data members and method signatures, write the class | Constructors, parameters, methods that return values, calling methods from main |
| Double-dimensional arrays | Accept a matrix, then row or column sums, diagonals, transpose or the largest element | Nested loops over rows and columns, two indices kept apart |

The choice of any four is the strategic fact of the section. A student does not need to love all six families; they need four they can produce cold, and enough of the other two to pick them up if the paper's four questions from the favoured families are awkward. Our practice order builds fluency in arrays, strings, classes and menus first, because between them they cover most papers, then adds patterns and matrices as the fifth and sixth options.

Q2. What does a fifteen-mark program look like?

## Eight worked programs, one or two per family, each with its variable description

Each of these compiles and runs in BlueJ as written. The variable descriptions are the part most students skip and the part the board explicitly asks for.

Family 1 and 2 · patterns, and menus with switch

***Floyd's triangle**number and pattern programs*

```
class Floyd {
  public static void main(String args[]) {
    int n = 1;
    for (int i = 1; i <= 4; i++) {
      for (int j = 1; j <= i; j++) {
        System.out.print(n + " ");
        n++;
      }
      System.out.println();
    }
  }
}
// n int  the next number to print
// i int  row number, 1 to 4
// j int  position within the row
// 1 / 2 3 / 4 5 6 / 7 8 9 10
```

Three variables, three roles. A student who can say what n, i and j each do can turn this into any triangle the paper draws; a student who cannot has memorised one picture.

***Area menu**menu-driven with switch*

```
import java.util.Scanner;
class Shapes {
  public static void main(String args[]) {
    Scanner in = new Scanner(System.in);
    System.out.println("1. Square  2. Circle");
    int ch = in.nextInt();
    switch (ch) {
      case 1:
        double s = in.nextDouble();
        System.out.println("Area = " + s * s);
        break;
      case 2:
        double r = in.nextDouble();
        System.out.println("Area = " + 3.14 * r * r);
        break;
      default:
        System.out.println("Invalid choice");
    }
  }
}
// ch int  menu choice; s, r double  side, radius
```

The missing break and the missing default are the two classic mark losses in this family. Both are visible in a variable-and-structure check before the program is declared finished.

Family 3 · single-dimensional arrays, search and sort

***Linear search**arrays*

```
class Search {
  public static void main(String args[]) {
    int a[] = {12, 45, 7, 89, 23};
    int key = 89, pos = -1;
    for (int i = 0; i < a.length; i++) {
      if (a[i] == key) {
        pos = i;
        break;
      }
    }
    if (pos == -1)
      System.out.println("Not found");
    else
      System.out.println("Found at index " + pos);
  }
}
// a int[]  the data; key int  value sought
// pos int  index if found, else -1; i int  loop
```

The sentinel value pos = -1 is the idea being tested: how does the program know the key was never found? Say that sentence in the viva and the examiner knows you wrote it.

***Bubble sort**arrays*

```
class Bubble {
  public static void main(String args[]) {
    int a[] = {5, 3, 9, 1, 7};
    for (int i = 0; i < a.length - 1; i++) {
      for (int j = 0; j < a.length - 1 - i; j++) {
        if (a[j] > a[j + 1]) {
          int t = a[j];
          a[j] = a[j + 1];
          a[j + 1] = t;
        }
      }
    }
    for (int i = 0; i < a.length; i++)
      System.out.print(a[i] + " ");
  }
}
// a int[]  data; i int  pass; j int  compare position
// t int  temporary for the swap
// 1 3 5 7 9
```

The inner loop's upper limit shrinks by i each pass, and knowing why, the largest value has already bubbled to the end, is what separates a written sort from a copied one.

Family 4 · string handling

***Palindrome and vowel count**strings*

```
class Word {
  public static void main(String args[]) {
    String s = "Madam";
    String w = s.toLowerCase();
    String rev = "";
    int v = 0;
    for (int i = 0; i < w.length(); i++) {
      char c = w.charAt(i);
      rev = c + rev;
      if ("aeiou".indexOf(c) != -1) v++;
    }
    if (w.equals(rev))
      System.out.println("Palindrome");
    else
      System.out.println("Not a palindrome");
    System.out.println("Vowels: " + v);
  }
}
// s String  input; w String  lowercase copy
// rev String  reversed; c char  current; v int  vowels
```

One loop, two jobs: rev = c + rev builds the reversal by prepending, and indexOf on a vowel string replaces five comparisons. Both are Section A questions in disguise.

***Reverse each word**strings*

```
class Words {
  public static void main(String args[]) {
    String s = "Learn Java well";
    String out = "", word = "";
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (c == ' ') {
        out = out + word + " ";
        word = "";
      } else {
        word = c + word;
      }
    }
    out = out + word;
    System.out.println(out);
  }
}
// s String  input; out String  result built up
// word String  current word reversed; c char  current
// nraeL avaJ llew
```

The last word has no space after it, so it must be added after the loop. Forgetting that line is the most common bug in the family, and finding it alone is a Wednesday well spent.

Family 5 and 6 · a class with a constructor, and a matrix

***A class with constructor and methods**the class-skeleton question*

```
class Student {
  String name;
  int marks;
  Student(String n, int m) {
    name = n;
    marks = m;
  }
  char grade() {
    if (marks >= 80) return 'A';
    else if (marks >= 60) return 'B';
    else return 'C';
  }
  void display() {
    System.out.println(name + " : " + grade());
  }
  public static void main(String args[]) {
    Student s = new Student("Riya", 85);
    s.display();
  }
}
// name String, marks int  data members
// n, m  constructor parameters; s Student  object
```

The paper gives the skeleton and asks for the body. Marks go to a constructor that initialises, a method that returns, and a main that creates an object and calls both.

***Row sums of a matrix**double-dimensional arrays*

```
class Matrix {
  public static void main(String args[]) {
    int m[][] = {{1, 2, 3},
                 {4, 5, 6},
                 {7, 8, 9}};
    for (int i = 0; i < 3; i++) {
      int sum = 0;
      for (int j = 0; j < 3; j++)
        sum += m[i][j];
      System.out.println("Row " + (i + 1)
                         + " sum = " + sum);
    }
  }
}
// m int[][]  the matrix; i int  row; j int  column
// sum int  running total, reset per row
// Row 1 sum = 6 / Row 2 sum = 15 / Row 3 sum = 24
```

Where sum is declared decides everything: inside the outer loop it resets per row, outside it accumulates forever. The paper's column-sum variation just swaps which index the outer loop owns.

Eight programs, six families, and a pattern that runs through all of them: every program has a line or a variable that carries the idea, the sentinel in the search, the shrinking limit in the sort, the reset in the row sum, the prepend in the reversal. Wednesdays are spent finding that line, naming it, and then writing a variation that moves it, because the paper's question will. The BlueJ habits that keep these programs compiling, from reading the first red error to testing with awkward inputs, are on [ICSE Class 10 BlueJ coaching](/icse-class-10-bluej-java-coaching).

Q3. Where do the fifteen marks come from?

## What a Section B answer is rewarded for, and the habit that secures each part

### The logic

The largest share: does the program do what the question asked, for all the inputs the question implies? Secured by tracing the program on paper with one ordinary input and one awkward one before declaring it finished, which takes two minutes and finds most logic errors.

### The construct the question targets

An array question wants an array, a class question wants a constructor and methods, a menu question wants switch. Answering an array question with five separate variables loses the marks the question was written to award. Secured by reading the family before writing a line.

### The class and method structure

A complete class, a correctly declared main or the methods the skeleton named, imports present, braces balanced. Secured by writing the class shell first, every time, and filling it in, rather than starting from the loop and wrapping a class around it at the end.

### The variable description

The board asks for it explicitly. A short table, every variable, its type, its purpose. Secured by writing it while writing the program, since a variable you cannot describe is usually one you should not have.

### The output

Formatted the way the question shows, with labels, spacing and line breaks matching. Secured by reading the question's sample output twice and matching it exactly, which is free marks a surprising number of students leave.

### Legibility and completeness

A program the examiner can read, finished rather than trailing off. Secured by the discipline of four complete programs rather than five half-attempted ones: the section rewards depth on four, and the fifth earns nothing.

Q4. How does a student get to sixty programs?

## The twenty-one-week ladder the Wednesday lab climbs

One program and one variation a week, family by family, twice around, then mixed papers. Sixty programs later, Section B is a shape the student produces on demand.

1. #### Weeks 1 to 3: patterns and number properties, loops made visible

  Triangles, series, prime and Armstrong checks. The point is the nested loop and the counter, traced on paper before it is typed. By week three the student can invert a pattern on request, which is the first sign of production rather than reproduction.
2. #### Weeks 4 to 6: menus with switch, and input done properly

  Scanner, the import line, nextInt against nextDouble, switch with every break and a default. The variation each week changes the menu's options so that the structure, not the arithmetic, is what gets learned.
3. #### Weeks 7 to 10: arrays, the biggest family

  Accepting n values, the largest and the sum, linear search with a sentinel, binary search on sorted data, bubble and selection sort. Four weeks because this family appears in nearly every paper and because indexing from zero needs time to become instinct.
4. #### Weeks 11 to 14: strings, character by character

  Reversal, palindromes, vowel and word counts, case changes by rule, rearranging sentences, and the String methods that shorten each. The last-word bug from the worked program above is met, fixed and never forgotten.
5. #### Weeks 15 to 17: classes with constructors and methods, and matrices

  The class-skeleton question written from the shell inward, then two-dimensional arrays with row and column sums, diagonals and a transpose. The two families that turn a good Section B into a full one.
6. #### Weeks 18 to 21: the second pass, then mixed papers under time

  Every family again with harder variations, then full Section B papers: five questions, choose four, seventy minutes, variable descriptions included. Reviewed program by program the following Tuesday, with the lost marks re-attempted on the spot.

The ladder runs inside the mini batch described on the [Tuesday and Wednesday batch page](/icse-class-10-java-classes-online), and the theory paper's countdown that follows it is on [board exam preparation](/icse-class-10-computer-applications-board-exam-preparation).

Q5. Where are Section B marks lost?

## Six errors that turn a fifteen into a nine

### Counting from one

Arrays and strings index from zero, and a loop that runs to length rather than length minus one walks off the end. Half of all runtime errors in Section B are this one habit, and an index table beside the program is the cure.

### The missing break

A switch without breaks runs every case below the match, and the output for choice 1 quietly includes choice 2's. The examiner sees it; the student who never ran the program did not.

### No variable description

Explicitly requested by the board, routinely omitted by students in a hurry. It is the cheapest part of the fifteen marks and the one most often left blank.

### Output that ignores the question's format

The question shows the output with labels and spacing; the program prints raw numbers. Correct logic, lost presentation marks, and entirely avoidable by reading the sample output twice.

### Attempting five programs badly

Section B rewards any four. A fifth half-program earns nothing and steals time from the four that count. Choose four in the first two minutes and commit.

### Reproducing last year's version

The paper's array question wants the largest element, the memorised program finds the sum. Only a student who understands the loop can change what it does, which is why every Wednesday ends with a variation.

Q6. What does it cost?

## Monthly fees, with the Tuesday and Wednesday mini batch featured

The programs practice is the Wednesday half of the standard batch, not a separate course. Billed monthly, no admission fee, stop at any month end.

Mini batch · Tue 5:30 PM and Wed 8 PM

₹2,999

per month

- Four or five students, one teacher all year
- One program and one variation every Wednesday
- Around sixty written programs before the boards
- Certificate on completion

Book the free demo

One to one

₹4,999

per month

- Private teaching on your own schedule
- The ladder compressed to the weeks that remain
- Every program read line by line as it is written

Enquire

Group batch · other timings

₹1,499

per month

- Ten to fifteen students
- Timings other than Tuesday and Wednesday
- The same six families, a larger room

Ask about timings

What families say

## Rated 4.9 across 547 Google reviews

Real reviews from real families. We neither write nor commission them.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

The rest of the Class 10 series

## Nine more pages for Class 10 board students

Four more on ICSE Computer Applications, and five on the CBSE AI paper for families on the other board.

[The Tue and Wed mini batch/icse-class-10-java-classes-online](/icse-class-10-java-classes-online)[ICSE Computer Applications syllabus/icse-class-10-computer-applications-syllabus-explained](/icse-class-10-computer-applications-syllabus-explained)[ICSE BlueJ Java coaching/icse-class-10-bluej-java-coaching](/icse-class-10-bluej-java-coaching)[ICSE board exam preparation/icse-class-10-computer-applications-board-exam-preparation](/icse-class-10-computer-applications-board-exam-preparation)[CBSE Class 10 AI classes/cbse-class-10-ai-classes-online](/cbse-class-10-ai-classes-online)[CBSE 417 syllabus explained/cbse-class-10-ai-syllabus-explained](/cbse-class-10-ai-syllabus-explained)[Python for CBSE Class 10 AI/python-for-cbse-class-10-ai](/python-for-cbse-class-10-ai)[CBSE AI board exam preparation/cbse-class-10-ai-board-exam-preparation](/cbse-class-10-ai-board-exam-preparation)[CBSE AI project and practical file/cbse-class-10-ai-project-and-practical-file](/cbse-class-10-ai-project-and-practical-file)

Questions about Section B

## What students and parents ask about the programs

### How many programs must a student write in the ICSE Computer Applications paper?

Four. Section B is worth 60 marks and offers a choice of programming questions, of which any four must be attempted at 15 marks each. That choice is the most useful fact on this page: a student who is genuinely fluent in four of the six families below can score full marks in Section B without ever touching the families they find hardest, which is why practice is organised by family rather than by chapter.

### Which program families come up most often?

Arrays and strings appear in almost every paper, usually as one program each, and a class-based program with a constructor and methods is nearly as regular. Menu-driven programs using switch, number and pattern programs, and two-dimensional array programs fill the remaining choices. Past papers are the honest guide, and the pattern across them is stable enough that our Wednesday labs cover all six families twice before the mocks.

### What are the 15 marks per program given for?

CISCE does not publish a line-by-line rubric, but its stated expectations point at what is rewarded: a program in Java that solves the stated problem, written using variable descriptions or mnemonic codes so the logic is clearly depicted, in a proper class structure, producing the required output in the required format. In practice that means marks for the logic, the correct use of the syllabus construct the question targets, the class and method structure, the variable description, and the output. A program that is logically right but has no variable description leaves marks on the table.

### Is the variable description compulsory?

The syllabus says Section B programs should be written using variable descriptions or mnemonic codes so the logic is clearly depicted, and papers routinely instruct students to include them. Treat it as compulsory: a short table beside each program listing every variable, its data type and its purpose. It costs a minute, earns marks, and, in our experience, catches the student's own undeclared or misused variables while they write it.

### Can programs be written without a main method, as a class with methods?

When the question gives a class skeleton with data members and method signatures, the student writes exactly that class and its methods; a main method is only needed if the question asks for one or asks the student to create an object and call the methods. When the question simply says write a program, a complete class with a main method is the safest form. Reading the question's class structure carefully before writing is itself a mark-earning habit.

### Should my child use Scanner or BufferedReader for input?

Either is accepted; what matters is that the program declares its input correctly and reads the right type. Scanner is shorter and is what most ICSE schools and textbooks now use, so it is what we teach by default, with the import line written every time. A student who knows one input method well will never lose marks for not knowing the other.

### How is practising programs different from practising the theory?

Theory is recognition; programs are production. A student can recognise a correct bubble sort in Section A and still be unable to write one from a blank class under time, and only writing fixes that. Our Wednesday labs are entirely production: the program is written from nothing, compiled, corrected and explained, and the variation exercise afterwards changes the question so that the student proves they understood rather than remembered.

### How many programs should a student have written before the board exam?

Around sixty, in our batch: one Wednesday program and one variation each week across the year, plus the lab assignments and the mock papers. That is roughly ten per family, which is where a program stops being a memory and becomes a shape the student can produce on demand. Fewer than twenty and the student is still reproducing; more than sixty adds little beyond confidence.

### What does the programs practice cost?

It is the Wednesday half of the standard batch, not a separate course: the Tuesday and Wednesday mini batch of four or five, one to one, and the larger group batch on other timings are all shown on this page in your own currency, billed monthly with no admission fee. The free demo class is a Wednesday-style lab, so you see the practice format before deciding anything.

### How do we start?

Send the form and ask for a Wednesday demo. The student writes one Section B family program from a blank class in BlueJ with the teacher, adds the variable description, runs it and then attempts a variation alone. In forty-five minutes you see whether your child is producing or reproducing, which is the single most useful thing to know about their Section B before the year gets going.

Start

## Ask for a Wednesday, and the demo is a programs lab

Your child opens BlueJ with the teacher, picks a family from this page, and writes the program from a blank class: shell first, variables described as they appear, compiled, the first red error read and fixed, run with an awkward input, and then a variation attempted alone while the teacher watches. Forty-five minutes later you know whether Section B is being produced or reproduced in your house, and what the twenty-one weeks would do about it.

Reading further first? The [syllabus explained](/icse-class-10-computer-applications-syllabus-explained) maps the families back to their units, and [BlueJ coaching](/icse-class-10-bluej-java-coaching) covers the environment these programs live in.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20My%20child%20needs%20practice%20with%20ICSE%20Class%2010%20Java%20programs%20for%20Section%20B.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Every session is a live video class. The form asks for one callback and books nothing else.

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-java-programs-practice*
