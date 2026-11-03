---
title: "AP Computer Science Tutor in Germany: CSA and CSP in English"
description: "AP Computer Science A and Principles tutoring in English for pupils in Germany: both exam formats, May 2027 dates in German time, Java practice and live classes."
canonical: https://learn.modernagecoders.com/ap-computer-science-tutor-germany
source: src/pages/ap-computer-science-tutor-germany.html
---
> For pupils in Germany taking AP Computer Science, Modern Age Coders offers live online tutoring in English: Java, classes, ArrayList and 2D arrays for AP Computer Science A, and the Create performance task and multiple-choice practice for AP Computer Science Principles, in our AP CSA and AP CSP courses. One regular mentor matches your pace and accent, in a group of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / AP Computer Science tutor

Germany · AP Computer Science A and Principles · Ages 14 to 18

# AP Computer Science tutor in Germany

AP exams are written in May in the United States and, for pupils at American and international schools, in Germany too. From 2027 the College Board fixes start times by time zone, so a pupil in Frankfurt or Berlin sits AP Computer Science A on a Wednesday afternoon and Principles on a Friday morning. Below are both exams as the College Board describes them, the 2027 dates on a German clock, a 2D-array task of the kind the CSA paper asks for, written in Java and run, and how our live tutoring works from Germany.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: AP CSA and AP CSP pupils; Language: Java for CSA; Exam month: May 2027; Group size: Fifteen to twenty, or one to one; German times: Weekday evenings, Saturday, Sunday; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three courses for AP pupils in Germany

One for each AP Computer Science exam, and a Java course for pupils who want a firm start before the AP class begins.

- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Java from the ground up to the four free-response question types, with timed multiple-choice sets.
- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course): The ideas of computing, the Create performance task done honestly, and practice for the written responses.
- [Java for teens](/courses/java-programming-masterclass-for-teens): For pupils of 13 and up who want Java to feel natural before AP Computer Science A starts.

## What is the difference between AP Computer Science A and Principles?

CSA is a programming exam in Java. CSP is a broader exam about computing, with a program of the pupil's own as part of the score.

**The two AP Computer Science exams in 2027, as the College Board describes them**

|  | AP Computer Science A | AP Computer Science Principles |
|---|---|---|
| Format | Fully digital, in the Bluebook app | Create performance task plus a digital end-of-course exam |
| Multiple choice | 42 questions, 1 hour 30 minutes, 55% of the score | 70 questions, 120 minutes, 70% of the score |
| Second part | 4 free-response questions, 1 hour 30 minutes, 45% | Create task and 2 written responses (60 minutes), 30% |
| Code | Java, with the Java Quick Reference provided | Any language the pupil uses for the Create task |
| 2027 date | Wednesday 12 May 2027, Session 2 | Friday 14 May 2027, Session 1 |

Source: College Board, AP Central, AP Computer Science A Exam and AP Computer Science Principles Exam pages, read 3 November 2026. We are not connected with the College Board.

### The four CSA free-response questions

The College Board names them in order: Methods and Control Structures, where Part B calls String methods; Class Design, where the pupil writes a class with instance variables, a constructor and a method; Data Analysis with ArrayList; and 2D Array.

All four assess one practice, which the College Board calls Develop Code. That is why our CSA classes spend most of their time with the pupil writing methods to a specification, not reading about them.

### Which one should a pupil take?

That is the school's and the family's choice, and many pupils take both. A pupil who already enjoys programming and wants a degree in computing usually finds CSA the more useful preparation. CSP suits a pupil who wants a wider view of computing, data and the internet, and likes building something of their own.

Neither exam is easier in any simple sense: CSP has more multiple choice, CSA asks for working Java under time.

## What time do the 2027 AP Computer Science exams start in Germany?

From 2027 the College Board lists start times by the UTC offset of the school in May. Germany is on summer time then, UTC+2, and the table gives 9:00 for Session 1 and 13:00 for Session 2.

**AP Computer Science 2027: dates and start times for a school in Germany**

| What | College Board date | German time |
|---|---|---|
| CSP Create task submitted as final | Friday 30 April 2027, 11:59 PM ET | Saturday 1 May 2027, 05:59 |
| AP Computer Science A exam | Wednesday 12 May 2027, Session 2 | 13:00 |
| AP Computer Science Principles exam | Friday 14 May 2027, Session 1 | 09:00 |

Sources: College Board, 2027 AP Exam Schedule, 2027 AP Exam Start Times (row +02:00: Session 1 at 9:00 a.m., Session 2 at 1:00 p.m. local time) and the AP Computer Science Principles exam page, read 3 November 2026. The German time of the Create deadline is our conversion from Eastern Daylight Time (UTC-4) to German summer time (UTC+2). Your AP coordinator confirms the real time and room.

Two practical points follow. First, the Create task deadline falls in the middle of the German night, so in practice a pupil in Germany should treat the evening of Friday 30 April 2027 as the end, and their school may set an earlier internal date anyway. Second, for UTC+2 the 2027 table starts both sessions an hour later than the 8 a.m. and 12 p.m. local times most schools in the United States keep. The College Board says the new start times are meant to prevent the disclosure of secure exam content across time zones, and that exams can still begin up to an hour after the listed time. The exam weeks themselves run from 3 to 7 May and 10 to 14 May 2027, and late-testing dates exist for clashes.

## What does a 2D-array question in AP Computer Science A ask you to do?

Write a method that walks through a grid of numbers in the right order. The hard part is rarely Java; it is knowing whether to go row by row or column by column.

**Our task, in the CSA style.** A class PracticeLog stores the minutes four pupils practised on each school day, one row per pupil and one column per weekday. Write totalForDay, which adds up one column; busiestDay, which returns the index of the day with the largest total; and everyDayCount, which counts the pupils who practised on all five days.

**Our PracticeLog class, with a main method to test it** (Java)
```java
public class PracticeLog {
    private int[][] minutes;

    public PracticeLog(int[][] minutes) {
        this.minutes = minutes;
    }

    public int totalForDay(int day) {
        int total = 0;
        for (int row = 0; row < minutes.length; row++) {
            total += minutes[row][day];
        }
        return total;
    }

    public int busiestDay() {
        int top = 0;
        for (int day = 1; day < minutes[0].length; day++) {
            if (totalForDay(day) > totalForDay(top)) {
                top = day;
            }
        }
        return top;
    }

    public int everyDayCount() {
        int count = 0;
        for (int[] pupil : minutes) {
            boolean allDays = true;
            for (int m : pupil) {
                if (m == 0) {
                    allDays = false;
                }
            }
            if (allDays) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String[] days = {"Mon", "Tue", "Wed", "Thu", "Fri"};
        int[][] data = {
            {30, 0, 45, 20, 0},
            {25, 30, 30, 25, 40},
            {0, 50, 60, 0, 15},
            {20, 20, 35, 30, 10}
        };
        PracticeLog log = new PracticeLog(data);
        System.out.println("Wednesday total: " + log.totalForDay(2));
        System.out.println("Busiest day: " + days[log.busiestDay()]);
        System.out.println("Practised every day: " + log.everyDayCount());
    }
}
```
Compiled and run with OpenJDK 21, it prints Wednesday total: 170, Busiest day: Wed and Practised every day: 2.

**Column totals, worked out by hand to check the program (our data)**

| Day | Minutes in total |
|---|---|
| Monday | 75 |
| Tuesday | 100 |
| Wednesday | 170 |
| Thursday | 75 |
| Friday | 65 |

Look at the two loops. totalForDay keeps the column fixed and moves down the rows, so the outer index is the row and the limit is minutes.length. everyDayCount goes the other way, one whole pupil at a time, with enhanced for loops. We tried both classic slips. Give busiestDay the limit minutes.length and, on this four by five grid, it would quietly skip Friday: it still compiles and still prints Busiest day: Wed, so the bug hides until Friday is the busiest day. Give totalForDay the limit minutes[0].length instead and Java stops with ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 4. The loud bug is the kind one; a hand trace is what catches the quiet one. Note also that busiestDay keeps the first day when two totals tie, because it only moves on a strictly larger total: Monday and Thursday both have 75, and a question may ask you which one should win.

1. **Trace it.** Before running anything, write down the value of total after each pass of the loop in totalForDay(2).
2. **Expose the quiet bug.** Change one number in the data so that Friday becomes the busiest day, then run the version of busiestDay with the wrong limit and watch it give the wrong answer.
3. **Extend it.** Add quietestPupil, returning the row with the smallest sum, and decide what it should do on a tie.

## How does the CSP Create performance task work?

The pupil builds a program of their own choice in class time, then answers written questions about it in the May exam.

### What the College Board asks for

Pupils get 9 hours of in-class time to write a program, record a video of it running and prepare a Personalized Project Reference. In the end-of-course exam they answer two written response questions with four prompts about their own code, with that reference in front of them.

The prompts cover program design and purpose, algorithm development, errors and testing, and data and procedural abstraction, such as a list used to manage complexity.

### What a tutor may and may not do

The Create task must be the pupil's own work, and the College Board's CSP page points to a frequently asked questions document that covers plagiarism and AI. So we never write, debug or design any part of a pupil's submitted program.

What we do is teach the skills before the task begins: lists, procedures with parameters, testing with chosen inputs, and explaining code in plain English. During the task window our classes practise on separate projects of our own.

Source: College Board, AP Computer Science Principles Exam page (Section II, written response prompt categories), read 3 November 2026.

Under-18 pupils in our classes do not use AI tools whose providers set an adult minimum age; the [AI tools age guide](/ai-tools-age-guide) quotes each provider's terms. That matters twice over for CSP, where the College Board also addresses AI use in the Create task.

## Which schools in Germany offer AP courses?

Mainly American and some international schools. AP is less common in Germany than the IB, but it is there.

AGIS, the body that represents international schools in Germany, keeps an online directory; in it, Advanced Placement appears for Black Forest Academy, together with a US curriculum and diploma; at Frankfurt International School, alongside the IB; and at John F. Kennedy School Berlin, alongside an American high school diploma and the Deutsches Abitur. We name these schools only as context from AGIS: we are not connected with them or with AGIS, and they are not a source of our students.

Pupils in Germany usually come to us for one of three reasons: the school offers one AP Computer Science course but not the other, the pupil wants to sit the exam a year early and needs to cover the course faster, or Java is new and the class moves too fast. In each case we teach alongside the school. The AP coordinator orders exams and the College Board sets and scores them; we do not.

## When are AP Computer Science classes in German time?

The mentor works from India. Its clock is 4 hours 30 ahead of Germany until 28 March 2027 and 3 hours 30 ahead from then until autumn.

**Possible class times for AP pupils in Germany, with the mentor's clock**

| In Germany | In India, until 28 March 2027 | In India, from 28 March 2027 |
|---|---|---|
| 16:45 | 21:15 | 20:15 |
| Saturday 12:00 | 16:30 | 15:30 |
| Sunday 14:00 | 18:30 | 17:30 |

German legal time follows the Einheitenzeitgesetz: UTC+1 (MEZ) in winter and UTC+2 (MESZ) in summer, with summer time ending on 25 October 2026 and starting again on 28 March 2027. India uses UTC+5:30 the whole year. The rows are examples, not fixed groups.

When you book the free first class, you choose its time in your own clock. In April and early May 2027, one-to-one pupils often move to three short sessions a week for timed practice.

## From a first Java class to a timed free-response set

The steps we track for AP Computer Science A pupils; they are our own and are used for placement and progress reports.

**AP Computer Science A steps (ours)**

| Step | When, typically | The pupil is able to |
|---|---|---|
| 1. Expressions and methods | Weeks 1 to 6 | Predict what a short method returns before running it |
| 2. Classes | Months 2 to 3 | Write a class with a constructor and instance variables from a table |
| 3. ArrayList | Months 3 to 5 | Add, remove and filter while traversing, without skipping items |
| 4. 2D arrays | Months 5 to 6 | Choose row-major or column-major order and trace it by hand |
| 5. Exam pace | March to May | Complete four free-response questions in 1 hour 30 minutes |

### For pupils

Removing items from an ArrayList while looping forward is the classic trap. Loop backwards.
Write the method header exactly as given. Marks start there.

### For parents

Check with the AP coordinator which exams your child is registered for and by when.
In 2027 the CSA exam starts at 13:00 German time, not in the morning.

## Nine more courses for AP pupils in Germany

Taught live in English, each with one regular mentor, in a group of fifteen to twenty or one to one.

### Other AP subjects

Ages 14 to 18

- [AP Calculus AB and BC](/courses/ap-calculus-exam-prep): Limits, derivatives and integrals for the May exams.
- [AP Statistics](/courses/ap-statistics-maths-exam-prep-course): Data, probability and inference, with the investigative task.
- [AP Precalculus](/courses/ap-precalculus-exam-prep-course): Functions and modelling before calculus.

### Beyond the exam

Ages 14 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): A second language, useful for CSP projects.
- [SQL for teens](/courses/mysql-mastery-for-teens): Data stored and queried properly.
- [AI and machine learning](/courses/ai-ml-masterclass-teens): Models built and tested in Python.

### Other routes in Germany

Ages 15 to 19

- [IB Computer Science](/courses/ib-diploma-computer-science-course): For pupils on the IB Diploma instead.
- [Informatik for the Abitur](/courses/informatik-abitur-course-java-python): Java and Python for the German Oberstufe.
- [Abitur maths in English](/courses/abitur-mathematics-course-in-english): For pupils who also sit the Abitur.

## How live AP classes fit a school week in Germany

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekday evening** Classes from late afternoon German time.
- **Weekend** Saturday midday or Sunday afternoon slots.
- **One to one** A slot agreed with the mentor, busier in spring.

- **Java by hand** Methods written to a specification every class.
- **Trace tables** Loops and arrays traced before they are run.
- **Clear English** Ideas rephrased until they make sense.
- **One mentor** The same mentor from autumn to May.
- **Honest Create task** Skills taught before, never help inside it.
- **Group or private** Fifteen to twenty pupils, or one to one.

## Fees for AP Computer Science tutoring in Germany

The fee is monthly and covers eight live classes. It is quoted here in euro, derived from the European Central Bank reference rate, and collected in US dollars, which your bank turns into euro at its own rate on the day.

- Free first class: Free. A free first class. A short Java or pseudocode task. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty AP pupils. One regular mentor. Two classes a week. Monthly, no long contract.
- One to one: €134 (charged in US dollars) a month. One pupil, one mentor. Planned around the May exams. Extra sessions in April.

## AP Computer Science in Germany: what families ask us

### Are the classes in German?

No. Classes are live and in English only, like the AP exams. The mentor follows your pace and accent and stops to explain any new term.

### What time is the AP Computer Science A exam in Germany in 2027?

It is on Wednesday 12 May 2027 in Session 2. The College Board 2027 start-time table gives 1:00 p.m. local time for schools on UTC+2, which is German summer time. Your AP coordinator confirms it.

### And AP Computer Science Principles?

Friday 14 May 2027, Session 1, which is 9:00 in Germany by the same table. The Create performance task has to be submitted as final by 30 April 2027, 11:59 PM Eastern Time, which is 05:59 on 1 May in Germany.

### Which language is AP Computer Science A in?

Java. The College Board provides a Java Quick Reference in the Bluebook app listing the library methods that may appear.

### Do you help with the Create performance task?

We teach the skills it needs beforehand and practise on separate projects. We never write, design or debug the program a pupil submits; it must be their own work.

### Are you connected with the College Board or the school?

No. We are an independent online school. The school's AP coordinator orders exams, and the College Board sets and scores them.

### Can a pupil sit AP Computer Science without a class at school?

Exams are ordered through an AP coordinator at a school or test centre, so ask your school first. We can teach the course either way.

### When are classes in German time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. AP pupils often prefer weekday evenings in autumn and weekend practice in spring.

### How is the fee charged?

We list it in euro, converted at the European Central Bank reference rate, and the charge is made in US dollars that your bank converts, so the statement may show a slightly different number. The first class is free.

### What should a pupil know before starting AP Computer Science A?

Nothing about Java is required. Comfort with algebra helps. Pupils who have never programmed often take our Java for teens course for a few months first.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our pages for learners in Germany.
- [AP Computer Science A online classes](/ap-computer-science-a-online-classes): The CSA course in detail.
- [AP CSP online coaching](/ap-computer-science-principles-online-coaching): The CSP course in detail.
- [AP CSA practice questions](/ap-computer-science-a-practice-questions): More original practice in Java.
- [AI tools age guide](/ai-tools-age-guide): Minimum ages, quoted from the terms.
- [How we teach](/how-we-teach): Our live classes step by step.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ap-computer-science-tutor-germany](https://learn.modernagecoders.com/ap-computer-science-tutor-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
