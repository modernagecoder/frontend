---
title: "ICSE Class 10 String Programs in Java, Solved for 2027"
description: "ICSE Class 10 string programs for 2027: palindrome words, Pig Latin, letter frequency and more, each run in Java, plus a String functions cheat table."
canonical: https://learn.modernagecoders.com/icse-class-10-string-programs
source: src/pages/icse-class-10-string-programs.html
updated: 2026-10-13
---

> ICSE Class 10 string programs ask you to read a word or sentence with Scanner and process it one character at a time with charAt, length, indexOf, substring and the Character methods. The families the board returns to are palindrome words, Pig Latin, letter frequency, word extraction (counting, capitalising, finding the longest word), coding by shifting letters and spotting double letters. Each answer earns its marks through a working loop, correct method use, comments and a variable description table. Modern Age Coders teaches these live in a Tuesday and Wednesday mini batch in India, or personalised one to one at the family's time.

## String handling ICSE: the six program families

Nearly every Section B string question belongs to one of six families, and all six rest on one loop: walk the string with charAt from index 0 to length() minus 1. Learn the family, and an unseen question becomes a small change to a program you already know.

- Family | What the question asks | The key idea | Program below

- Palindrome | Check a word, or print every palindrome word in a sentence | Build the reverse with a backward loop, compare with equals | Program 1

- Pig Latin | Move the letters before the first vowel to the end and add AY | indexOf on "AEIOU" finds a vowel; two substrings rebuild the word | Program 2

- Frequency | Count each letter, vowel or character in a string | An int array of 26 counters, indexed by ch minus 'A' | Program 3

- Word handling | Capitalise each word, count words, find words with a property | A word starts where the character before it is a space | Program 4

- Coding | Shift each letter a fixed number of places, keep other characters | Character arithmetic with % 26 so Z wraps round to A | Program 5

- Pairs and lengths | Double letters, consecutive letters, the longest word | Compare charAt(i) with charAt(i + 1) inside the bounds | Program 6

### The word-extraction template

Four of the six programs need the words of a sentence one at a time. The ICSE way, without split, is to add one space to the end of the sentence so the last word is closed like the others, then build each word letter by letter:

- Read the sentence with nextLine(), then trim() it and add " " at the end.

- Loop over every index. If the character is not a space, add it to w.

- When a space arrives and w is not empty, the word is complete: process it.

- Set w = "" and carry on. The extra space guarantees the last word is processed too.

The programs hub keeps one short example of each program shape across the whole syllabus:
[ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice).

## String functions ICSE: a cheat table with real return values

These are the String methods ICSE Class 10 programs and output questions lean on. Every result in the last column was printed by Java 21. Learn the return type as well as the value: an int, a char, a boolean and a String are four different answers.

- Method | Returns | Example | Result

- length() | int | "  Board Exam  ".length() | 14

- trim() | String | "  Board Exam  ".trim() | Board Exam

- charAt(int) | char | "COMPUTER".charAt(3) | P

- indexOf(char) | int | "COMPUTER".indexOf('U') and indexOf('Z') | 4 and -1

- lastIndexOf(char) | int | "BANANA".lastIndexOf('A') | 5

- substring(int) | String | "COMPUTER".substring(3) | PUTER

- substring(int, int) | String | "COMPUTER".substring(3, 6) | PUT

- toLowerCase() / toUpperCase() | String | "COMPUTER".toLowerCase(), "java".toUpperCase() | computer, JAVA

- replace(char, char) | String | "PAPER".replace('P', 'T') | TATER

- concat(String) | String | "ICSE".concat("2027") | ICSE2027

- equals / equalsIgnoreCase | boolean | "Java".equals("JAVA"), "Java".equalsIgnoreCase("JAVA") | false, true

- compareTo(String) | int | "APPLE".compareTo("ANT") | 2

- compareToIgnoreCase(String) | int | "apple".compareToIgnoreCase("APPLE") | 0

- startsWith / endsWith | boolean | "ICSE".startsWith("IC"), "BlueJ".endsWith("j") | true, false

- String.valueOf | String | String.valueOf(45) + 5 | 455

### substring(3, 6) stops before 6
The end index is excluded, so the result has 6 minus 3, that is three, characters. The commonest slip in the whole table.

### compareTo returns a difference
"APPLE" and "ANT" first differ at P and N. P is code 80 and N is 78, so the answer is 2, not 1 and not true.

### Results must be stored
A String never changes. s.toUpperCase(); on its own line does nothing useful; write s = s.toUpperCase();.

Character tests such as isLetter, isUpperCase and toUpperCase, used in Programs 3 to 5, are covered with the wrapper classes on
[wrapper and library classes for ICSE Class 10](/icse-class-10-wrapper-and-library-classes), and String results as one-mark traps are on
[ICSE Computer Applications output questions](/icse-class-10-java-output-questions).

## Palindrome word program in Java ICSE, and the Pig Latin program

A palindrome word reads the same backwards, such as NOON. The board version usually goes one step further and asks for every palindrome word in a sentence, which is the word-extraction template with a reverse check inside it.

### Program 1: print and count the palindrome words in a sentence

```
import java.util.Scanner;
class PalinWords {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence in capitals:");
        String s = sc.nextLine().trim() + " ";   // a space at the end closes the last word
        String w = "";                           // the word being built
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ') {
                w = w + ch;
            } else if (w.length() > 0) {
                String rev = "";
                for (int j = w.length() - 1; j >= 0; j--)
                    rev = rev + w.charAt(j);
                if (w.equals(rev)) {
                    System.out.print(w + " ");
                    count++;
                }
                w = "";                          // start the next word
            }
        }
        System.out.println();
        System.out.println("Number of palindrome words = " + count);
    }
}
```

- Variable | Type | Purpose

- s | String | the sentence, with one space added at the end

- w | String | the word being built

- rev | String | w written backwards

- ch | char | the current character

- count | int | number of palindrome words

- i, j | int | loop counters

```
Enter a sentence in capitals:
MOM AND DAD SAW A RACECAR AT NOON
MOM DAD A RACECAR NOON
Number of palindrome words = 5
```

### Program 2: Pig Latin for every word of a sentence

Pig Latin moves the letters before the first vowel to the end of the word and adds AY, so TRAIN becomes AINTRAY. The method pig handles one word, which makes the main loop short and lets you show a user-defined method, something examiners reward.

```
import java.util.Scanner;
class PigLatinLine {
    // returns the Pig Latin form of one word in capitals
    static String pig(String w) {
        for (int i = 0; i < w.length(); i++) {
            char ch = w.charAt(i);
            if ("AEIOU".indexOf(ch) >= 0)
                return w.substring(i) + w.substring(0, i) + "AY";
        }
        return w + "AY";                         // no vowel: just add AY
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String s = sc.nextLine().trim().toUpperCase() + " ";
        String w = "", out = "";
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ')
                w = w + ch;
            else if (w.length() > 0) {
                out = out + pig(w) + " ";
                w = "";
            }
        }
        System.out.println(out.trim());
    }
}
```

- Variable | Type | Purpose

- w (in pig) | String | one word in capitals

- s | String | the sentence in capitals, space added

- w (in main) | String | the word being built

- out | String | the converted sentence

- ch | char | the current character

- i | int | loop counter

```
Enter a sentence:
robot can spy the train
OBOTRAY ANCAY SPYAY ETHAY AINTRAY
```

Number palindromes are a different program, built with % 10 and / 10, and they live with the other number families on
[special number programs in Java for ICSE](/icse-special-number-programs-java).

## Frequency of characters in Java ICSE, and word-by-word programs

Use an int array of 26 counters. Convert the string to capitals, and for every letter add one to f[ch - 'A']: 'A' lands in f[0], 'B' in f[1] and 'Z' in f[25]. One pass counts the whole alphabet, which is faster and shorter than 26 separate loops.

### Program 3: frequency of every letter in a string

```
import java.util.Scanner;
class LetterFreq {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string:");
        String s = sc.nextLine().toUpperCase();
        int f[] = new int[26];                   // f[0] counts A, f[25] counts Z
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isLetter(ch))
                f[ch - 'A']++;
        }
        System.out.println("Letter\tFrequency");
        for (int k = 0; k < 26; k++) {
            if (f[k] > 0)
                System.out.println((char) (k + 'A') + "\t" + f[k]);
        }
    }
}
```

- Variable | Type | Purpose

- s | String | the input in capitals

- f | int[] | 26 counters, one per letter

- ch | char | the current character

- i, k | int | loop counters

```
Enter a string:
Board Exam Revision
Letter	Frequency
A	2
B	1
D	1
E	2
I	2
M	1
N	1
O	2
R	2
S	1
V	1
X	1
```

### Program 4: capitalise each word and count words that begin with a vowel

```
import java.util.Scanner;
class TitleVowel {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String s = sc.nextLine().trim().toLowerCase();
        String out = "";
        int v = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            boolean first = (i == 0 || s.charAt(i - 1) == ' ');
            if (first && ch != ' ') {
                if ("aeiou".indexOf(ch) >= 0)
                    v++;                         // word begins with a vowel
                out = out + Character.toUpperCase(ch);
            } else
                out = out + ch;
        }
        System.out.println(out);
        System.out.println("Words beginning with a vowel = " + v);
    }
}
```

- Variable | Type | Purpose

- s | String | the sentence in small letters

- out | String | the sentence with capitals added

- ch | char | the current character

- first | boolean | true when ch starts a word

- v | int | words beginning with a vowel

- i | int | loop counter

```
Enter a sentence:
an apple a day keeps exams easy
An Apple A Day Keeps Exams Easy
Words beginning with a vowel = 5
```

## ICSE string programs on letter shifts, double letters and the longest word

These two families test character arithmetic and careful bounds. A letter shift adds a number to a char and uses % 26 to wrap from Z back to A; a double-letter check compares each character with the next one and must stop one place before the end.

### Program 5: code a message by shifting each letter two places

```
import java.util.Scanner;
class ShiftCode {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a message:");
        String s = sc.nextLine();
        String code = "";
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isUpperCase(ch))
                ch = (char) ('A' + (ch - 'A' + 2) % 26);
            else if (Character.isLowerCase(ch))
                ch = (char) ('a' + (ch - 'a' + 2) % 26);
            code = code + ch;                    // digits, spaces, signs unchanged
        }
        System.out.println("Coded: " + code);
    }
}
```

- Variable | Type | Purpose

- s | String | the original message

- code | String | the coded message

- ch | char | the current character, then its coded form

- i | int | loop counter

```
Enter a message:
Meet at Zoo, 7 pm
Coded: Oggv cv Bqq, 7 ro
```

### Program 6: count double letters and find the longest word

```
import java.util.Scanner;
class DoubleLetters {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence in capitals:");
        String s = sc.nextLine().trim() + " ";
        int pairs = 0;
        String w = "", big = "";
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (i < s.length() - 1 && ch != ' ' && ch == s.charAt(i + 1))
                pairs++;                         // same letter twice in a row
            if (ch != ' ')
                w = w + ch;
            else {
                if (w.length() > big.length())
                    big = w;                     // keeps the first longest word
                w = "";
            }
        }
        System.out.println("Double letter pairs = " + pairs);
        System.out.println("Longest word = " + big + " (" + big.length() + " letters)");
    }
}
```

- Variable | Type | Purpose

- s | String | the sentence, space added

- pairs | int | count of double letters

- w | String | the word being built

- big | String | the longest word so far

- ch | char | the current character

- i | int | loop counter

```
Enter a sentence in capitals:
THE KEEPER ADDED THREE BALLOONS TO THE COFFEE TABLE
Double letter pairs = 7
Longest word = BALLOONS (8 letters)
```

To put several of these into one program with a choice, see
[ICSE Class 10 menu driven programs](/icse-class-10-menu-driven-programs); to sort an array of words alphabetically with compareTo, see
[bubble sort and selection sort for ICSE Class 10](/icse-class-10-sorting-and-searching-programs).

## From a blank page to a marked string program

String programs are lost on small things: a missing space at the end, == instead of equals, an index one past the end. The live classes are arranged to catch those before the exam does.

-
**One family per week, on paper first** At the Tuesday 5:30 PM IST class the mentor sets a fresh question from one family. Students write the whole program by hand, with the variable description table, in a fixed time.

-
**Marked against the scheme on screen** The answers are marked in front of the group the way an examiner would: the loop, the method calls, the output format, the comments and the table each earn their share.

-
**Run in BlueJ with awkward input** On Wednesday at 8:00 PM IST the same programs are typed and run with inputs chosen to break them: a sentence with double spaces, a word with no vowel, a Z at the end.

-
**Worksheets and doubt time** Each family ends with a worksheet of variations, and the next class opens with doubts from it, so nobody carries a confusion into the mock tests.

-
**Mock papers from December** String questions then appear inside full two-hour papers alongside arrays, number programs and classes, timed and marked like the board.

These programs also make good entries for the lab file; how the internal assessment record is built is on
[ICSE Computer Applications project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, with a string handling program written and run every fortnight.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students heading to ISC Computer Science, where sentence programs grow into word sorting and text processing.
- [Python for Teens](/courses/python-complete-masterclass-teens): For the student who enjoys text puzzles and wants to see the same string ideas in a second language after the board exam.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**What are the important string programs for ICSE Class 10?** The families that keep returning are palindrome words, Pig Latin, frequency of letters or vowels, word handling such as capitalising each word or finding the longest word, coding by shifting letters, and double or consecutive letters. All of them use one loop over the string with charAt, so practise the loop until it is automatic.

**Which String functions are in the ICSE Class 10 syllabus?** Programs and output questions regularly use length, charAt, indexOf, lastIndexOf, substring, toLowerCase, toUpperCase, trim, replace, concat, equals, equalsIgnoreCase, compareTo, compareToIgnoreCase, startsWith, endsWith and String.valueOf. For each one, learn the return type as well as an example value, because output questions test both.

**How do you check if a word is a palindrome in Java ICSE?** Build the reverse with a loop from length() minus 1 down to 0, adding each charAt to an empty String, then compare the original and the reverse with equals or equalsIgnoreCase. Do not use == for Strings. To find palindrome words in a sentence, run the same check on each word as it is extracted.

**How do you write a Pig Latin program in ICSE?** Find the index of the first vowel, then return substring(i) + substring(0, i) + "AY". Convert the word to capitals first so one vowel test works, and decide what to do with a word that has no vowel; the usual rule is to add AY to the whole word. Program 2 on this page does this for every word of a sentence.

**How do you count the frequency of each character in Java?** Make an int array of 26 counters, convert the string to one case, and for every letter increase f[ch - 'A'] by one. After the loop, print each letter whose counter is above zero. For vowels only, five counters or a single test with indexOf on "AEIOU" is enough.

**Can I use split() in ICSE string programs?** split runs in BlueJ, but it works with regular expressions, which are outside the Class 10 course, and you must be able to explain every line you write. It is safer to use the word-extraction template on this page: add one space to the end of the sentence and build each word character by character with charAt.

**What is the difference between == and equals for Strings?** equals compares the characters inside two Strings; == checks whether two variables point to the very same object. Two Strings with identical letters can be different objects, so == may give false. In every ICSE string program, compare text with equals or equalsIgnoreCase.

**Do I need a variable description table for string programs?** Yes, whenever the question asks for one, and it is a good habit for every Section B answer. List each variable, its data type and its purpose in one line. It takes two minutes and shows the examiner you understand your own program.

**Why does my string program skip the last word?** Because a word is processed only when a space arrives, and there is no space after the last word. Add one space to the end of the sentence before the loop, as in s = s.trim() + " ", and the last word is closed like all the others.

**Do you teach ICSE string programs in live classes?** Yes. In the mini batch on Tuesday and Wednesday evenings in India, students write a string program by hand, have it marked against the scheme on screen, then run it in BlueJ with awkward inputs. Families who need another time, or live abroad, can choose personalised one to one classes at their own time.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-string-programs*
