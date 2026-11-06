---
title: "Bubble Sort and Selection Sort ICSE Class 10, with Traces"
description: "Bubble sort and selection sort for ICSE Class 10 with pass-by-pass trace tables, linear and binary search programs, and four Section B array programs, run in Java."
canonical: https://learn.modernagecoders.com/icse-class-10-sorting-and-searching-programs
source: src/pages/icse-class-10-sorting-and-searching-programs.html
updated: 2026-10-13
---

> For ICSE Class 10, bubble sort compares neighbouring elements and swaps them when they are out of order, so after each pass the largest remaining value settles at the end. Selection sort finds the smallest (or largest) remaining value and swaps it into place, making at most one swap per pass. Linear search checks every element in turn and works on any array; binary search halves a sorted array each step using low, high and mid. Questions ask for the program and for the array after a given pass. Modern Age Coders teaches these live in a Tuesday and Wednesday mini batch in India, or personalised one to one.

## Bubble sort ICSE Class 10: the program and its trace

Bubble sort walks along the array comparing a[j] with a[j + 1] and swaps them if the left one is bigger. One walk is a pass. After pass 1 the largest value is at the end, after pass 2 the second largest is next to it, and an array of n elements needs at most n minus 1 passes.

```
import java.util.Scanner;
class BubbleTrace {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How many numbers? ");
        int n = sc.nextInt();
        int a[] = new int[n];
        System.out.println("Enter " + n + " numbers:");
        for (int i = 0; i < n; i++)
            a[i] = sc.nextInt();
        for (int p = 0; p < n - 1; p++) {            // pass number p + 1
            int swaps = 0;
            for (int j = 0; j < n - 1 - p; j++) {     // compare neighbours
                if (a[j] > a[j + 1]) {
                    int t = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = t;
                    swaps++;
                }
            }
            System.out.print("After pass " + (p + 1) + ":");
            for (int i = 0; i < n; i++)
                System.out.print(" " + a[i]);
            System.out.println("   swaps = " + swaps);
        }
    }
}
```

- Variable | Type | Purpose

- n | int | number of elements

- a | int[] | the numbers being sorted

- p | int | pass counter, from 0

- j | int | position being compared

- t | int | temporary store for the swap

- swaps | int | swaps made in this pass

- i | int | loop counter for input and printing

```
How many numbers? 5
Enter 5 numbers:
47 12 38 5 26
After pass 1: 12 38 5 26 47   swaps = 4
After pass 2: 12 5 26 38 47   swaps = 2
After pass 3: 5 12 26 38 47   swaps = 1
After pass 4: 5 12 26 38 47   swaps = 0
```

### Inside pass 1: every comparison

- j | Compare | Swap? | Array after the step

- 0 | 47 > 12 | yes | 12 47 38 5 26

- 1 | 47 > 38 | yes | 12 38 47 5 26

- 2 | 47 > 5 | yes | 12 38 5 47 26

- 3 | 47 > 26 | yes | 12 38 5 26 47

### Count the comparisons
Passes make 4, 3, 2 and 1 comparisons: 10 in all for five elements, whatever the data. That total, n(n - 1) / 2, is a favourite two-mark question.

### Descending order
Change one sign: swap when a[j] < a[j + 1]. Now the smallest value sinks to the end each pass.

### Stopping early
A pass with no swaps means the array is sorted. Some answers add a boolean flag and break out; it is an improvement, not a requirement.

## Selection sort ICSE Class 10, in descending order, traced

Selection sort looks through the unsorted part for the largest (or smallest) value, remembers only its position, and makes a single swap at the end of the pass. Bubble sort may swap many times in a pass; selection sort swaps at most once.

```
import java.util.Scanner;
class SelectDesc {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a[] = new int[6];
        System.out.println("Enter 6 scores:");
        for (int i = 0; i < 6; i++)
            a[i] = sc.nextInt();
        for (int i = 0; i < 5; i++) {
            int big = i;                           // position of the largest so far
            for (int j = i + 1; j < 6; j++)
                if (a[j] > a[big])
                    big = j;
            int t = a[i];                          // one swap per pass
            a[i] = a[big];
            a[big] = t;
            System.out.print("Pass " + (i + 1) + " (largest at index " + big + "):");
            for (int k = 0; k < 6; k++)
                System.out.print(" " + a[k]);
            System.out.println();
        }
    }
}
```

- Variable | Type | Purpose

- a | int[] | six scores

- i | int | the place being filled

- j | int | scans the unsorted part

- big | int | index of the largest found

- t | int | temporary store for the swap

- k | int | loop counter for printing

```
Enter 6 scores:
61 88 45 92 70 88
Pass 1 (largest at index 3): 92 88 45 61 70 88
Pass 2 (largest at index 1): 92 88 45 61 70 88
Pass 3 (largest at index 5): 92 88 88 61 70 45
Pass 4 (largest at index 4): 92 88 88 70 61 45
Pass 5 (largest at index 4): 92 88 88 70 61 45
```

### The trace, one row per pass

- Pass | Searched | Largest | Swap | Array after

- 1 | index 0 to 5 | 92 at 3 | a[0] with a[3] | 92 88 45 61 70 88

- 2 | index 1 to 5 | 88 at 1 | with itself | 92 88 45 61 70 88

- 3 | index 2 to 5 | 88 at 5 | a[2] with a[5] | 92 88 88 61 70 45

- 4 | index 3 to 5 | 70 at 4 | a[3] with a[4] | 92 88 88 70 61 45

- 5 | index 4 to 5 | 61 at 4 | with itself | 92 88 88 70 61 45

In pass 2 the 88 at index 5 is not chosen, because a[j] > a[big] is strict: an equal value does not replace the one already found. Examiners like duplicate values for exactly this reason.

- Point | Bubble sort | Selection sort

- What is compared | Neighbours, a[j] and a[j + 1] | Each element with the best found so far

- Swaps in one pass | Any number | At most one

- After pass 1 (ascending) | Largest value at the end | Smallest value at the start

- Comparisons for n elements | n(n - 1) / 2 | n(n - 1) / 2

- Can stop early | Yes, with a no-swap flag | No

## Linear search Java ICSE and the binary search program, with traces

Linear search checks the elements one by one and works on any array, sorted or not. Binary search needs the array sorted; it checks the middle element and throws away half of what is left at every step, so ten elements need at most four checks.

### Linear search on names, with a parallel array

```
import java.util.Scanner;
class LinearNames {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String city[] = new String[5];
        int pin[] = new int[5];
        System.out.println("Enter 5 cities, each followed by its PIN code:");
        for (int i = 0; i < 5; i++) {
            city[i] = sc.next();
            pin[i] = sc.nextInt();
        }
        System.out.print("City to search: ");
        String key = sc.next();
        int pos = -1;
        for (int i = 0; i < 5; i++) {
            if (city[i].equalsIgnoreCase(key)) {
                pos = i;
                break;                             // stop at the first match
            }
        }
        if (pos == -1)
            System.out.println(key + " is not in the list");
        else
            System.out.println(city[pos] + " found at position " + (pos + 1) + ", PIN " + pin[pos]);
    }
}
```

- Variable | Type | Purpose

- city | String[] | five city names

- pin | int[] | PIN code of each city, same index

- key | String | the city searched for

- pos | int | index found, or -1

- i | int | loop counter

```
Enter 5 cities, each followed by its PIN code:
Pune 411001 Kochi 682001 Agra 282001 Shimla 171001 Patna 800001
City to search: shimla
Shimla found at position 4, PIN 171001

Enter 5 cities, each followed by its PIN code:
Pune 411001 Kochi 682001 Agra 282001 Shimla 171001 Patna 800001
City to search: Goa
Goa is not in the list
```

### Binary search, printing low, high and mid

```
import java.util.Scanner;
class BinaryTrace {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a[] = {6, 14, 19, 27, 33, 41, 58, 62, 75, 90};   // already in ascending order
        System.out.print("Enter the number to search: ");
        int key = sc.nextInt();
        int low = 0, high = a.length - 1, pos = -1;
        while (low <= high) {
            int mid = (low + high) / 2;
            System.out.println("low=" + low + " high=" + high + " mid=" + mid + " a[mid]=" + a[mid]);
            if (a[mid] == key) {
                pos = mid;
                break;
            } else if (key > a[mid])
                low = mid + 1;                     // throw away the left half
            else
                high = mid - 1;                    // throw away the right half
        }
        if (pos == -1)
            System.out.println(key + " not found");
        else
            System.out.println(key + " found at index " + pos);
    }
}
```

- Variable | Type | Purpose

- a | int[] | ten values in ascending order

- key | int | value searched for

- low, high | int | ends of the part still in play

- mid | int | middle index checked

- pos | int | index found, or -1

```
Enter the number to search: 62
low=0 high=9 mid=4 a[mid]=33
low=5 high=9 mid=7 a[mid]=62
62 found at index 7

Enter the number to search: 20
low=0 high=9 mid=4 a[mid]=33
low=0 high=3 mid=1 a[mid]=14
low=2 high=3 mid=2 a[mid]=19
low=3 high=3 mid=3 a[mid]=27
20 not found
```

### The trace for 20, a value that is not there

- Step | low | high | mid | a[mid] | Decision

- 1 | 0 | 9 | 4 | 33 | 20 < 33, so high = 3

- 2 | 0 | 3 | 1 | 14 | 20 > 14, so low = 2

- 3 | 2 | 3 | 2 | 19 | 20 > 19, so low = 3

- 4 | 3 | 3 | 3 | 27 | 20 < 27, so high = 2

- end | 3 | 2 | low > high, the loop stops: not found

- Point | Linear search | Binary search

- Array must be sorted | No | Yes

- Checks for 10 elements, worst case | 10 | 4

- Works on Strings | Yes, with equals | Yes, with compareTo, if sorted

- Finds every occurrence | Yes, if you do not break | No, it finds one

## Array programs ICSE Class 10: the four standard Section B shapes

Most Section B array questions are one of four shapes: sort words alphabetically, sort one array and carry a partner array with it, search a sorted list, or work out the highest, lowest and average. Each shape below is a full program with Scanner input and a real run.

### Shape 1: sort names in alphabetical order

```
import java.util.Scanner;
class SortNames {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String nm[] = new String[6];
        System.out.println("Enter 6 names:");
        for (int i = 0; i < 6; i++)
            nm[i] = sc.next();
        for (int i = 0; i < 5; i++)
            for (int j = 0; j < 5 - i; j++)
                if (nm[j].compareToIgnoreCase(nm[j + 1]) > 0) {
                    String t = nm[j];
                    nm[j] = nm[j + 1];
                    nm[j + 1] = t;
                }
        System.out.println("In alphabetical order:");
        for (int i = 0; i < 6; i++)
            System.out.println(nm[i]);
    }
}
```

```
Enter 6 names:
Zoya aarav Meera Kabir neel Ishaan
In alphabetical order:
aarav
Ishaan
Kabir
Meera
neel
Zoya
```

### Shape 2: a merit list from two parallel arrays

```
import java.util.Scanner;
class MeritList {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String name[] = new String[5];
        int marks[] = new int[5];
        System.out.println("Enter name and marks of 5 students:");
        for (int i = 0; i < 5; i++) {
            name[i] = sc.next();
            marks[i] = sc.nextInt();
        }
        for (int i = 0; i < 4; i++) {
            int big = i;
            for (int j = i + 1; j < 5; j++)
                if (marks[j] > marks[big])
                    big = j;
            int t = marks[i]; marks[i] = marks[big]; marks[big] = t;
            String s = name[i]; name[i] = name[big]; name[big] = s;   // move the name with its marks
        }
        System.out.println("Rank\tName\tMarks");
        for (int i = 0; i < 5; i++)
            System.out.println((i + 1) + "\t" + name[i] + "\t" + marks[i]);
    }
}
```

```
Enter name and marks of 5 students:
Tara 78 Dev 91 Anya 66 Rohan 84 Sana 91
Rank	Name	Marks
1	Dev	91
2	Sana	91
3	Rohan	84
4	Tara	78
5	Anya	66
```

### Shape 3: binary search with an order check

```
import java.util.Scanner;
class RollSearch {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int roll[] = new int[8];
        System.out.println("Enter 8 roll numbers in ascending order:");
        for (int i = 0; i < 8; i++)
            roll[i] = sc.nextInt();
        // check the order first: binary search is only valid on sorted data
        boolean sorted = true;
        for (int i = 0; i < 7; i++)
            if (roll[i] > roll[i + 1])
                sorted = false;
        if (!sorted) {
            System.out.println("Roll numbers are not in ascending order");
            return;
        }
        System.out.print("Roll number to find: ");
        int key = sc.nextInt();
        int low = 0, high = 7, steps = 0, pos = -1;
        while (low <= high) {
            int mid = (low + high) / 2;
            steps++;
            if (roll[mid] == key) { pos = mid; break; }
            if (roll[mid] < key) low = mid + 1;
            else high = mid - 1;
        }
        if (pos >= 0)
            System.out.println("Present at position " + (pos + 1) + " after " + steps + " comparisons");
        else
            System.out.println("Absent, decided after " + steps + " comparisons");
    }
}
```

```
Enter 8 roll numbers in ascending order:
3 7 12 18 21 25 30 34
Roll number to find: 25
Present at position 6 after 2 comparisons

Enter 8 roll numbers in ascending order:
3 7 12 18 21 25 30 34
Roll number to find: 4
Absent, decided after 3 comparisons

Enter 8 roll numbers in ascending order:
3 7 12 9 21 25 30 34
Roll numbers are not in ascending order
```

### Shape 4: highest, lowest, average and above-average count

```
import java.util.Scanner;
class MaxMinAvg {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        double t[] = new double[7];
        System.out.println("Enter the maximum temperature for 7 days:");
        for (int i = 0; i < 7; i++)
            t[i] = sc.nextDouble();
        double max = t[0], min = t[0], sum = 0;
        int hot = 0;                               // day number of the hottest day
        for (int i = 0; i < 7; i++) {
            sum = sum + t[i];
            if (t[i] > max) { max = t[i]; hot = i; }
            if (t[i] < min) min = t[i];
        }
        double avg = sum / 7;
        int above = 0;
        for (int i = 0; i < 7; i++)
            if (t[i] > avg) above++;
        System.out.println("Highest = " + max + " on day " + (hot + 1));
        System.out.println("Lowest = " + min);
        System.out.println("Average = " + Math.round(avg * 100) / 100.0);
        System.out.println("Days above average = " + above);
    }
}
```

```
Enter the maximum temperature for 7 days:
31.5 33 29.5 35.5 34 30 32
Highest = 35.5 on day 4
Lowest = 29.5
Average = 32.21
Days above average = 3
```

Rows and columns are the next step:
[2D array programs for ICSE Class 10](/icse-class-10-2d-array-programs). Sorting a sentence's letters or words also draws on
[ICSE Class 10 string programs](/icse-class-10-string-programs).

## Sorting and searching ICSE: trace on paper, then prove it in BlueJ

The marks in this topic go to students who can produce the array after pass 2 without running anything. So the live classes put the paper trace first and the computer second.

-
**Cards before code** In the first session students sort a handful of numbered cards on camera, once by bubble and once by selection, saying each comparison aloud. The algorithm is understood before a line of Java is written.

-
**Timed trace sets on Tuesday** At 5:30 PM IST each student fills pass tables for a fresh array, including duplicates and a value that is not in the list, against the clock.

-
**Programs marked against the scheme** Full Section B answers are marked on screen: input loop, sort or search logic, output format, comments and the variable description table.

-
**Run with the printing turned on** At 8:00 PM IST on Wednesday the programs are run in BlueJ with a print inside each pass, exactly as on this page, so every student can compare the machine's trace with their own.

-
**Worksheets, doubts and full mocks** A worksheet of variations follows each shape, the next class starts with doubts, and from December arrays appear inside complete timed papers.

Searching and sorting also turn up in the one-mark section as short traces; practise those on
[ICSE Computer Applications output questions](/icse-class-10-java-output-questions). Every other program family is listed on
[ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, with sorts and searches traced by hand before each one is run in BlueJ.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving to ISC Computer Science, where more sorting methods and larger array problems follow.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who wants to measure algorithms, compare sorts properly and meet faster ones.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**What is the difference between bubble sort and selection sort?** Bubble sort compares neighbouring elements and swaps whenever they are out of order, so it can swap many times in one pass. Selection sort scans the unsorted part for the smallest or largest value and makes one swap per pass. Both make n(n - 1) / 2 comparisons on n elements.

**How many passes does bubble sort need?** An array of n elements needs at most n minus 1 passes, because each pass settles one more value at the end and the last value is then automatically in place. Five elements need at most four passes. With a no-swap flag the sort can stop sooner if the array becomes sorted early.

**How do you write the array after a given pass?** Trace it by hand. For bubble sort, walk left to right comparing neighbours and swapping, and write the whole array after each pass. For selection sort, find the largest or smallest value in the unsorted part, swap it into place, and write the array. Never skip a pass, even one with no changes.

**What is binary search in Java ICSE?** Binary search finds a value in a sorted array by checking the middle element. If the key is larger, it searches the right half by setting low to mid plus 1; if smaller, the left half by setting high to mid minus 1. It stops when the key is found or when low passes high.

**Why must the array be sorted for binary search?** Binary search throws away half the array after each check, on the assumption that every value to one side of mid is smaller and every value to the other side is larger. If the array is not sorted that assumption is false, and the search can report a value as absent when it is there.

**What is linear search in Java?** Linear search compares the key with each element in turn, from index 0 onwards, until it finds a match or reaches the end. It works on any array, sorted or not, and on Strings with equals. For n elements it needs up to n comparisons, which is slow on large arrays but fine for Class 10 sizes.

**How do you sort names alphabetically in Java ICSE?** Use bubble or selection sort exactly as for numbers, but compare with compareTo or compareToIgnoreCase instead of greater than. A positive result means the left String comes later in the alphabet, so the two should be swapped. compareToIgnoreCase stops small and capital letters sorting into separate groups.

**Can I use Arrays.sort in the ICSE exam?** When a question asks for bubble sort or selection sort, it is testing whether you can write the algorithm, so a library call would not earn the marks for the logic. Write the nested loops and the swap yourself, with a variable description table, and use the library only where a question clearly allows it.

**How many comparisons does binary search need?** Each comparison roughly halves what is left, so an array of 10 elements needs at most 4 comparisons and one of 100 elements needs at most 7. Linear search on the same arrays could need 10 and 100. That gap is the reason binary search is worth the extra condition of sorted data.

**Do you teach sorting and searching in live classes?** Yes. In the mini batch on Tuesday and Wednesday evenings in India, students trace passes by hand against a timer, have full array programs marked against the scheme on screen, and check every trace in BlueJ. Families abroad, or who need another time, can take personalised one to one classes.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-sorting-and-searching-programs*
