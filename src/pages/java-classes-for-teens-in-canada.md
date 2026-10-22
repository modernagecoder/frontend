---
title: "Java Classes for Teens in Canada: ICS3U, ICS4U and Beyond"
description: "Java for Canadian teens: where it appears in ICS3U, ICS4U and Nova Scotia's Programming 12, which JDK to install in 2026, and a Vancouver open data project in Java."
canonical: https://learn.modernagecoders.com/java-classes-for-teens-in-canada
source: src/pages/java-classes-for-teens-in-canada.html
---
> Java classes for teens in Canada teach 13 to 18 year olds to write and design Java programs, from loops to classes and objects, often beside a school ICS3U or ICS4U course taught in Java. No credit is attached. Modern Age Coders runs these classes live online, as a batch or one to one, through its Java for Teens course.

[Home](/) / [Courses](/courses) / [Coding classes in Canada](/coding-classes-in-canada) / Java for teens

Canada · Java · Ages 13 to 18

# Java classes for teens in Canada

Many Canadian teenagers learn their first serious language in Java, because their school chose it for Grade 11 or 12 computer science. Others pick it for robotics, for the Canadian Computing Competition, or because a university course will use it. This page covers where Java appears for Canadian teens, which Java Development Kit to install this year, a complete Java program on the City of Vancouver's public art registry, and exercises to extend it. The credit itself stays with the school: we do not grant Ontario credits, and no province recognises our classes as one.

At a glance: Ages: 13 to 18; Language: Java, on a current JDK; School courses: Alongside ICS3U and ICS4U; Credits: None; credits come from school; Group size: Fifteen to twenty, or one to one; Classes: Weekdays or weekends, flexible; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three ways into Java for Canadian teens

A full Java course from the first line, a companion paced to Ontario's school courses, and an exam-focused Java course for schools that offer AP.

- [Java for Teens](/courses/java-programming-masterclass-for-teens): For 13 to 18 year olds starting from zero. Its four phases move from Java foundations and OOP to collections and games, data structures, then APIs and a capstone.
- [Ontario Computer Science Companion](/courses/ics3u-ics4u-computer-science-companion-course): For Ontario students taking ICS3U or ICS4U in Java (or Python). Follows the school's unit order; start in any month. No credit is granted.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): For high school students at schools that offer AP. Six months of Java from the basics, with full exam preparation.

## Where Java turns up for Canadian high school students

No province we checked makes Java compulsory, yet many Canadian teens end up writing it, because the curriculum leaves the language to the teacher, or because a course, contest or robot uses it. These are the documents that matter, read on 22 October 2026.

**Java in Canadian high school courses and programmes, from the organisers' own documents (read 22 October 2026)**

| Where | What the source says | What it means for Java |
|---|---|---|
| Ontario, all computer studies courses (2008) | "The computer programming language used and the order in which concepts are taught is left to the teacher's professional judgement." | Your school, not the province, chose Java for ICS3U or ICS4U |
| Ontario ICS3U, Grade 11 University | Students work "using industry-standard programming tools and applying the software development life-cycle model" | In a Java school: classes, methods and an editor such as an IDE from the start |
| Ontario ICS4U, Grade 12 University | "use modular design principles to create complex and fully documented programs"; prerequisite ICS3U | Java's classes and packages are built for exactly that |
| Ontario ICS4C, Grade 12 College | "learn object-oriented programming concepts, create object-oriented software solutions, and design graphical user interfaces" | Object-oriented design is named outright |
| Nova Scotia Virtual School, Computer Programming 12 | "CodeHS: NSVS Computer Programming 12 (Java)." | One of the few provincial courses that names Java |
| Canadian Computing Competition (CEMC) | "CCC participants may use C, C++, Python 2, Python 3, or Java." | Java is allowed, though CEMC warns a perfect score is not always possible in Python or Java |
| FIRST Tech Challenge (FIRST Robotics Canada) | Robots "can be coded using a variety of levels of Java-based programming" | A team robotics route into Java |

### Objects first, or structure first?

Ontario's document says some teachers "may decide to use an" objects-first approach, while others start with plain procedural code. In a Java class that choice shows on day one: an objects-first teacher talks about classes before loops, the other teaches loops inside one long main method.

Neither is wrong, but a student who moves schools, or who learns from videos made the other way, can feel lost. We find out which approach the school uses and teach so the two fit together.

### Credits, and where they come from

Each Ontario computer studies course is worth one credit, and only a school can award it. Our Java classes sit beside the course: more practice, clearer explanations, and feedback on the student's own programs. We do not grant Ontario credits, and we never write graded assignments for a student.

Looking ahead to university, the Waterloo computer science page lists ICS3U (its wording: Grade 11 U Introduction to Computer Science) under recommended courses, with no language attached.

Sources: [Ontario Curriculum, Computer Studies, Grades 10 to 12 (2008)](https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf); [Ontario curriculum course data](https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&depth=0); [Nova Scotia Virtual School](https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/); [CEMC, CCC](https://cemc.uwaterloo.ca/contests/ccc); [FIRST Robotics Canada](https://www.firstroboticscanada.org/); [University of Waterloo](https://uwaterloo.ca/future-students/programs/computer-science). Each was read on 22 October 2026; none of these bodies is connected with Modern Age Coders.

## Which JDK a Canadian student should use in 2026 to 2027

Java ships a new version twice a year, which confuses new students. Most of those versions are short-lived; a few are long-term support releases that schools and employers settle on. The dates below are from OpenJDK and Oracle's own pages.

**Recent and upcoming Java releases, from openjdk.org and Oracle's Java SE support roadmap (read 22 October 2026)**

| Release | General availability | Status |
|---|---|---|
| JDK 21 | 2023/09/19 | Long-term support (Oracle lists 8, 11, 17, 21 and 25 as LTS) |
| JDK 25 | 16 September 2025 | Long-term support; includes JEP 512, Compact Source Files and Instance Main Methods |
| JDK 26 | 2026/03/17 | Feature release, not LTS |
| JDK 27 | 2026/09/15 | Feature release, not LTS |
| JDK 28 | In development | Feature release |
| Java 29 | Planned for September 2027 | Oracle: "the next planned LTS release" |

### Our advice

Install the version your school uses, if it tells you. If it does not, choose JDK 25, the most recent long-term support release. Everything a Grade 11 or 12 course teaches works on it, and so does every program on this page.

OpenJDK says the project "ships a feature release every six months", so a newer number will always exist. That does not make a long-term release out of date.

### What JEP 512 changes for beginners

JEP 512, final in JDK 25, aims to let "beginners write their first programs without needing to understand language features designed for large programs." In practice a first program can be as short as a void main() method, without the full public class and public static void main ceremony.

We still teach the classic form, because school textbooks, the CCC grader and older JDKs expect it. The program on this page uses it, and was compiled and run on JDK 22.

Sources: [OpenJDK, JDK project](https://openjdk.org/projects/jdk/); [JDK 25](https://openjdk.org/projects/jdk/25/); [JEP 512](https://openjdk.org/jeps/512); [Oracle Java SE support roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html). All read 22 October 2026.

## Counting Vancouver's public art with classes and objects

The City of Vancouver keeps a registry of its public art, published under a licence that permits reuse by businesses as well as individuals. Each record says what the work is, whether it is still in place, its neighbourhood and the year it went up. We use a five-column export of it to teach the idea at the heart of ICS4U-level Java: a class that turns one line of text into an object that can answer questions. We wrote the program, and each figure quoted comes from running it on the city's export of 22 October 2026.

The task: load every record into an Artwork object, count the artworks still in place by the decade they were installed, and find the oldest one still standing. The export's columns are registryid, type, status, neighbourhood and yearofinstallation.

**Our program · PublicArt.java** (java)
```java
// PublicArt.java: our own program for this page (Modern Age Coders)
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class PublicArt {

    static class Artwork {
        int id;
        String type;
        String status;
        String neighbourhood;
        int year;

        Artwork(String line) {
            String[] f = line.split(",", -1);       // -1 keeps empty fields
            id = Integer.parseInt(f[0]);
            type = f[1];
            status = f[2];
            neighbourhood = f[3];
            year = Integer.parseInt(f[4]);
        }

        boolean stillThere() {
            return status.equals("In place");
        }
    }

    public static void main(String[] args) throws IOException {
        List<String> lines = Files.readAllLines(Paths.get("vancouver-public-art-5col.csv"));
        List<Artwork> art = new ArrayList<>();
        for (int i = 1; i < lines.size(); i++) {         // line 0 is the header
            art.add(new Artwork(lines.get(i)));
        }

        Map<Integer, Integer> byDecade = new TreeMap<>();
        int gone = 0;
        for (Artwork a : art) {
            if (a.stillThere()) {
                int decade = a.year / 10 * 10;
                byDecade.put(decade, byDecade.getOrDefault(decade, 0) + 1);
            } else {
                gone++;
            }
        }

        Artwork oldest = art.stream()
                .filter(Artwork::stillThere)
                .min(Comparator.comparingInt(a -> a.year))
                .get();

        System.out.println("records: " + art.size() + ", not in place: " + gone);
        System.out.println("in place, by decade installed: " + byDecade);
        System.out.println("oldest in place: #" + oldest.id + ", " + oldest.type + ", " + oldest.year);
    }
}
```

**Output on the city's data (compiled and run on JDK 22)** (text)
```text
records: 751, not in place: 273
in place, by decade installed: {1900=3, 1910=3, 1920=9, 1930=4, 1940=2, 1950=8, 1960=24, 1970=31, 1980=33, 1990=67, 2000=90, 2010=159, 2020=45}
oldest in place: #284, Totem pole, 1901
```
Of 751 records, 478 are in place. The decade of the 2010s alone accounts for 159 of those.

**Three design choices in the program, and the data that justifies each (our checks on the same export)**

| Choice | What the data showed | The Java idea behind it |
|---|---|---|
| The constructor parses the line | Every record has exactly five fields once empty ones are kept | An object is responsible for building itself; main never touches raw text |
| split(",", -1), not split(",") | 99 records have an empty neighbourhood | Without the -1 limit, Java drops trailing empty fields; with it, every field keeps its position |
| A method, stillThere() | Status has four values: In place 478, No longer in place 268, Deaccessioned 4, In progress 1 | The rule lives in one place; change it once and every count follows |
| A TreeMap for decades | Thirteen decades, 1900s to 2020s | A TreeMap keeps its keys sorted, so the output reads in order |

### The bug hiding in the else

The program prints "not in place: 273". But only 268 records say "No longer in place". The other five are 4 marked Deaccessioned and 1 marked In progress, and a work in progress is not gone; it is not there yet.

An else branch catches everything the if did not, including categories the programmer never thought about. The fix is a second method, or a switch on the status, so each value is handled on purpose. That is exercise 3 below.

### Why this is an ICS4U-shaped problem

ICS4U asks for "modular design principles" and "fully documented programs". Here the modules are visible: a class that knows how to read a record, a method that knows one rule, and a main method that only asks questions.

A Grade 11 student writes the same program as one long main method first. Moving it into the Artwork class, and seeing how much shorter main becomes, is the lesson.

Data: [City of Vancouver Open Data Portal](https://opendata.vancouver.ca/explore/dataset/public-art/), Public art. Contains information licensed under the Open Government Licence, Vancouver. Its terms permit use "including for commercial purposes". The Java and the tallies are ours; the City of Vancouver does not endorse this page.

## Five ways to extend PublicArt.java

Our exercises, with the answers we got on the same export, so a student can check their code. Each one practises a different part of Java.

1. Count by type (HashMap). Count all records by type. Answer: Sculpture leads with 187; among works still in place it is 165.
2. equals or startsWith (strings). Count records whose neighbourhood equals "Downtown", then those whose neighbourhood startsWith("Downtown"). Answer: 217 and 269, because the city writes "DowntownEastside" as one word, which startsWith quietly merges in.
3. Fix the else (control flow). Replace the else branch so that "No longer in place", "Deaccessioned" and "In progress" are counted separately. Answer: 268, 4 and 1.
4. Empty fields (defensive code). Count records with an empty neighbourhood, overall and in place. Answer: 99 overall, 21 in place. Then try split(",") without the -1 and see what happens to a record whose last field is empty.
5. Sort with a Comparator. Sort the in-place works from newest to oldest and print the newest year and how many works share it. Answer: 2026, with 7 works; 2025 has 8.

Exercise 2 is our favourite, because the program does not crash and the number looks reasonable. Only someone who looks at the actual neighbourhood values catches it. We ask students to print every distinct value of a column before they write a condition on it.

## Where Java leads for a Canadian teenager

Java is a means, not a destination. Once the school course is under control, these are the directions our teen students take it, with our honest view of each.

**Java directions for teens (our guidance, with the facts each organiser publishes)**

| Direction | What it asks | Our view |
|---|---|---|
| The CCC, 17 February 2027 | Five problems in three hours; Java allowed | Fine for Junior; for Senior and the Canadian Computing Olympiad, which requires C++, many students switch |
| FIRST Tech Challenge | Team robots coded in Java-based programming | Ideal for a teen who wants code to move something physical |
| AP Computer Science A | A Java course and exam, at schools that offer AP | Useful where available; our AP course teaches it from Java basics |
| Data structures and algorithms | Lists, maps, trees and how fast they are | Where Java shines; our Java for Teens course spends two months here |
| Android apps | Java or Kotlin with Android tools | A natural next step; our app course for teens covers the mobile side |

### Java and AI assistants

Java's verbose style makes it tempting to let an assistant write the boilerplate. Each company sets its own floor. OpenAI's terms let 13 to 17 year olds in only with a parent or guardian agreeing; Anthropic shuts Claude to everyone below 18; GitHub offers Copilot Student at no charge to verified students, and its accounts start at 13.

Whatever the tool, our rule is the same: a student explains every line they submit, and rewrites any line they cannot. The CCC rules forbid generative AI during the contest, so practice has to happen without it too.

### Design before code

Our promise holds in Java as in every language we teach: a student learns to reason out a solution, rather than reproduce one someone else, or some model, produced. In Java that means designing the class on paper first: what it knows, what it can answer, what can go wrong.

A student who can sketch the Artwork class before writing it has learned object-oriented design. One who can only type it from an example has not, yet.

## Booking Java classes from any province

Teens join from Victoria to St. John's, and the school year now crosses two clock changes in the East and none in the West. We book every class in the student's own zone and recheck it at each change.

**Offsets from UTC by zone, 2026 to 2027 (IANA tz database 2026e)**

| Students in | Behind UTC, winter 2026 to 2027 | Behind UTC, summer 2027 |
|---|---|---|
| Vancouver, Victoria, Whitehorse | 7 hours | 7 hours |
| Calgary, Edmonton, Regina, Saskatoon | 6 hours | 6 hours |
| Winnipeg | 5 hours | 5 hours |
| Toronto, Ottawa, Montreal | 5 hours | 4 hours |
| Halifax, Moncton, Charlottetown | 4 hours | 3 hours |
| St. John's | 3 and a half hours | 2 and a half hours |

During ICS3U or ICS4U exam weeks, families often move a class or add one. A one-to-one student can shift times with a message, and a batch student can ask us about a temporary change.

## Where is your teen in Java?

Our steps for placing a teenager in the first class.

**Four Java steps (ours)**

| Step | What the student can do |
|---|---|
| 1. Compiles | Writes a small program in main, compiles it and reads the compiler errors |
| 2. Structures | Uses methods, loops and arrays or ArrayLists without help |
| 3. Models | Designs a class with fields, a constructor and methods, like Artwork |
| 4. Organises | Splits a program into several classes, uses interfaces or inheritance, and documents it |

### For parents

ICS3U usually covers steps 1 and 2; ICS4U expects step 3 and reaches into step 4. A student who struggles in ICS4U is often missing step 2, not step 3.
Steps are about what the student can do alone, from a blank file.

### For teens

Read the first compiler error only; fix it; compile again. Later errors are often caused by the first.
Before writing a class, write one sentence: this class knows ... and can answer ....

## Nine more courses for Canadian teens

Each is taught live with one regular teacher, in a batch or one to one, for students anywhere in Canada.

### Other languages

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): For schools that teach Python instead.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): The language the CCO requires.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Not Java: the language of the web.

### Problem solving and contests

Ages 13 to 18

- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Logic, data structures, algorithms.
- [CCC preparation](/courses/ccc-junior-and-senior-preparation-course): For the 17 February 2027 contest.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Contest technique for confident coders.

### Build with it

Ages 13 to 18

- [App development for teens](/courses/complete-app-development-masterclass-for-teens): Mobile apps, front to back.
- [Backend development for teens](/courses/backend-coding-masterclass-for-teens): APIs and databases.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Version control from zero.

## Live Java classes beside the school course

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Evenings, quoted in your local clock.
- **Weekends** Mornings or afternoons, away from homework nights.
- **1-on-1** Paced to your school unit and test dates.

- **Your school's Java** We match the JDK and editor your school uses.
- **Objects or structure** We teach in step with your teacher's approach.
- **Compiler first** Errors are read and fixed by the student.
- **Real data** Canadian open data, licensed for reuse.
- **Never your assignment** We explain and practise; graded work stays yours.
- **Group or solo** A class of fifteen to twenty, or a private teacher.

## Fees

A monthly fee buys eight live classes. Families can stop at the end of any month, which suits a student who wants help only through one semester.

- Free first class: USD 0. A free first class. A short Java program to read together. No card asked for.
- Group batch: USD 100 a month. A class of fifteen to twenty. One regular teacher. A steady weekly time. Paid by the month.
- One to one: USD 150 a month. One teacher, one student. Paced to your school course. Feedback on your own programs.

## Java for teens in Canada: common questions

### Is ICS3U taught in Java or Python?

It depends on the school. Ontario's 2008 curriculum says the programming language used is left to the teacher's professional judgement, so some schools teach ICS3U in Java and others in Python. We teach in whichever language the school uses.

### Do your Java classes count for an Ontario credit?

They do not. A credit for ICS3U or ICS4U can only come from the student's school. We do not grant Ontario credits, and our classes are support beside the course, not a replacement for it.

### Which version of Java should a student install?

The one the school uses, if it says. Otherwise JDK 25, which reached general availability on 16 September 2025 and is a long-term support release. Oracle lists the next planned long-term release as Java 29 in September 2027.

### Can my teen learn Java with no coding experience?

Yes. Java for Teens assumes nothing: a 13 to 18 year old starts with a first compiled program and, over 40 to 48 weeks of twice-weekly classes, reaches data structures and a capstone.

### Can Java be used in the Canadian Computing Competition?

It can; Java is one of five languages CEMC accepts for the CCC. CEMC adds a caution that some problems may not allow full marks in Java or Python, and the Olympiad after the CCC accepts only C++.

### Does Nova Scotia teach Java in high school?

The Nova Scotia Virtual School lists its Computer Programming 12 course as CodeHS: NSVS Computer Programming 12 (Java). Other provinces mostly leave the language to schools.

### Will you help with my teen's ICS4U final project?

We help the student plan, design and debug their own project, and explain the Java behind it. We do not write graded work; the project has to be the student's own.

### Can teens use AI tools to write Java?

Only inside each company's age rules. ChatGPT needs a parent or guardian to agree for anyone under 18, Claude is closed to under-18s, and Copilot Student is free once a student aged 13 or over is verified. Whatever the tool, our students explain every line they hand in.

### When do Java classes run for Canadian students?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We quote every time in the zone your family lives in.

### What will my teen build in Java?

Programs with real structure, such as our PublicArt.java, which turns each record of Vancouver's public art registry into an object and counts what is still in place. Later, larger projects and data structures.

## Related pages

- [Coding classes in Canada](/coding-classes-in-canada): All our pages for Canadian families.
- [ICS3U computer science help](/ics3u-computer-science-help): The Grade 11 course in detail.
- [Java classes for teens](/java-classes-for-teens): Our Java teaching for teenagers.
- [Object-oriented Java](/java-oops-concepts-course): Classes, objects and inheritance.
- [Java cannot find symbol](/java-cannot-find-symbol-error): The error every student meets.
- [Eclipse help for students](/eclipse-java-help-for-students): Setting up a school IDE.
- [Java projects for students](/java-projects-for-students): Ideas once the basics are in.
- [CCC Junior guide](/ccc-junior-guide): The 2027 contest, in any allowed language.
- [How to debug code](/how-to-debug-code): Finding what a compiler cannot.

## Contact

Book the free first class at [https://learn.modernagecoders.com/java-classes-for-teens-in-canada](https://learn.modernagecoders.com/java-classes-for-teens-in-canada#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
