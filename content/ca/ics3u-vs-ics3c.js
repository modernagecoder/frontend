'use strict';
// ICS3U vs ICS3C (ag- decision page; Canada cluster Plan 2, row 5).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/ics3u-vs-ics3c/; the PDF is
// byte-identical to the research copy in ca/src/ontario; facts-schools-contests.md rows 22 to 37 and 203 to 212):
//  - The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf.
//    Program overview: "Students choose between course types on the basis of their interests, achievement, and postsecondary goals.";
//    college preparation courses introduce "programs that focus on the practical skills businesses currently demand" and challenges
//    "such as creating custom programs, tailoring existing program packages, and using database management systems and scripting
//    languages"; university preparation courses ask students to "explore the theoretical underpinnings of computer science".
//    ICS3C description: "Students will write and test computer programs, using various problem-solving strategies."; "They will learn
//    the fundamentals of program design"; "safe computing practices". ICS3C expectations: A1 "use different data types in expressions in
//    simple computer programs"; A2.3 "write algorithms with nested structures"; A3.1 "explain the difference between syntax, logic, and
//    run-time errors"; B1 "use a variety of problem-solving strategies to solve different types of problems"; B1.1 "divide and conquer,
//    working backwards, process analysis"; B2.3 "write subprograms (e.g., functions, procedures) that perform one well-defined task";
//    B3.1 "validate entered data, count, accumulate, use random numbers"; B3.2 "calculation of gross pay; fuel consumption on a car trip;
//    average of students' marks"; B3.3 "handle run-time errors"; B4.3 "in a teacher-led project"; C1 "demonstrate an understanding of
//    the functions of different types of computer components"; C1.4 "common ISP services (e.g., DSL, cable, dial-up, regional Wi-Fi)";
//    D2 "describe and apply procedures for safe computing to safeguard computer users and their data". ICS3U expectations: A3
//    "demonstrate the ability to use subprograms within computer programs"; A1.6 "declare, initialize, modify, and access one-dimensional
//    arrays"; B1 "independently and as part of a team"; B3.1 "delete a datum from the middle of an array"; B3.2 "calculation of
//    hypotenuse"; B3.3 "detect, intercept, and handle exceptions"; C1 "relate the specifications of computer components to user
//    requirements"; C3.3 "explain the difference between source code and machine code"; D2.1 "parallel processing, distributed
//    computing". ICS4C: "design graphical user interfaces"; B1.2 "currency calculations, amortization, recipe volume changes"; B1.3
//    "formatting of postal codes, telephone numbers, SINs"; A2.5 "Arrays.sort(intArray)". ICS4U: A3.6 "design a simple and efficient
//    recursive algorithm"; C2 "analyse algorithms for their effectiveness in solving a problem". Course table: prerequisites (ICS3U and
//    ICS3C none; ICS4U needs ICS3U; ICS4C needs ICS3C). Half credits: "with the exception of the Grade 12 university preparation course".
//  - Ontario curriculum content API, ICS course records (api-ics-courses.json): ICS3U and ICS3C prerequisites empty; ICS4C prerequisite
//    "Introduction to Computer Programming, Grade 11, College Preparation".
//  - Waterloo Computer Science (uw-computer-science.html): recommended course "Grade 11 U Introduction to Computer Science".
//    U of T Computer Science (uoft-computer-science.html): "six subjects at the 4U/M level".
// Our own material, labelled on the page: the fuel-use task (ICS3C style) in Python 3.13 and Java 22, run with piped input
// "four hundred", "-20", "412", "31.5" and printing "Fuel use: 7.6 L/100 km"; the sorted-insert task (ICS3U style) in Python and Java,
// run and printing [52, 61, 70, 77, 84, 93] plus the three edge cases; the decision steps; the self-check table; the reading of
// "4U/M" against the C course type (the course type comes from the 2008 table).
// Lesson family: decomposition (state the input, the processing and the output before choosing anything).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FUEL_PY = `# Fuel use for a car trip, with checked input (ours, an ICS3C-style task)

def read_number(prompt, low, high):
    """Keep asking until the user types a number from low to high."""
    while True:
        text = input(prompt)
        try:
            value = float(text)
        except ValueError:
            print("That is not a number. Try again.")
            continue
        if low < value <= high:
            return value
        print("Please type a number above", low, "and up to", high)


def litres_per_100_km(litres, km):
    return litres / km * 100


km = read_number("Distance driven in km: ", 0, 5000)
litres = read_number("Fuel used in litres: ", 0, 500)
rate = litres_per_100_km(litres, km)
print("Fuel use:", round(rate, 1), "L/100 km")
if rate < 6:
    print("Rating: efficient")
elif rate <= 10:
    print("Rating: typical")
else:
    print("Rating: thirsty")`;

const FUEL_JAVA = `// Fuel use for a car trip, with checked input (ours, an ICS3C-style task)
import java.util.Scanner;

public class Fuel {
    static Scanner in = new Scanner(System.in);

    // Keep asking until the user types a number above low and up to high.
    static double readNumber(String prompt, double low, double high) {
        while (true) {
            System.out.print(prompt);
            String text = in.nextLine().trim();
            try {
                double value = Double.parseDouble(text);
                if (value > low && value <= high) {
                    return value;
                }
                System.out.println("Please type a number above " + low + " and up to " + high);
            } catch (NumberFormatException e) {
                System.out.println("That is not a number. Try again.");
            }
        }
    }

    public static void main(String[] args) {
        double km = readNumber("Distance driven in km: ", 0, 5000);
        double litres = readNumber("Fuel used in litres: ", 0, 500);
        double rate = litres / km * 100;
        System.out.printf("Fuel use: %.1f L/100 km%n", rate);
    }
}`;

const INSERT_PY = `# Add a value to a sorted list without sort() or insert() (ours, an ICS3U-style task)

def insert_sorted(values, new):
    """values is sorted from low to high. Return a new list with
    new placed so the order is kept."""
    result = values + [None]          # one extra slot at the end
    i = len(values) - 1
    while i >= 0 and result[i] > new:
        result[i + 1] = result[i]     # shift bigger values one place right
        i -= 1
    result[i + 1] = new               # the gap is where new belongs
    return result


marks = [52, 61, 70, 84, 93]
print(insert_sorted(marks, 77))
print(insert_sorted(marks, 40))
print(insert_sorted(marks, 99))
print(insert_sorted([], 5))`;

const INSERT_JAVA = `// Add a value to a sorted array, keeping the order (ours, an ICS3U-style task)
import java.util.Arrays;

public class InsertSorted {

    // count says how many slots of values are in use; the array has room for one more.
    public static int insertSorted(int[] values, int count, int newValue) {
        int i = count - 1;
        while (i >= 0 && values[i] > newValue) {
            values[i + 1] = values[i];      // shift bigger values one place right
            i--;
        }
        values[i + 1] = newValue;           // the gap is where newValue belongs
        return count + 1;                   // one more slot is now in use
    }

    public static void main(String[] args) {
        int[] marks = new int[6];
        int[] start = {52, 61, 70, 84, 93};
        for (int k = 0; k < start.length; k++) {
            marks[k] = start[k];
        }
        int count = insertSorted(marks, 5, 77);
        System.out.println(Arrays.toString(Arrays.copyOf(marks, count)));
    }
}`;

const DOC = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'ICS3U VS ICS3C', blurb: 'Choosing between the two Grade 11 computer courses in Ontario, criterion by criterion from the curriculum, with one task of each kind in Python and Java.' },
  slug: 'ics3u-vs-ics3c',
  code: 'ii',
  accent: '#61590F',
  accentRationale: 'ICS3U vs ICS3C, Canada: a dark olive, #61590F, allocated for this row; 6.1 RGB units from the nearest site accent (#625F0F) and at least 14 from every other Canada accent, with contrast 6.73 on the paper #FBF8F2 and 5.79 on the deepest tint',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'ICS3U vs ICS3C',
  title: 'ICS3U vs ICS3C: Choosing Grade 11 Computer Studies in Ontario',
  description: 'ICS3U or ICS3C? The two Grade 11 Ontario computer courses compared on twelve points from the curriculum, with a sample task from each and a way to decide.',
  ogDescription: 'University preparation or college preparation? ICS3U and ICS3C compared line by line from the 2008 Ontario curriculum, with where each leads in Grade 12 and after.',
  twitterDescription: 'ICS3U and ICS3C compared from the Ontario curriculum, with a sample task of each kind.',
  pageName: 'ICS3U vs ICS3C',
  webPageDescription: 'A decision guide for Ontario families choosing between ICS3U, Introduction to Computer Science, and ICS3C, Introduction to Computer Programming, built from the 2008 curriculum document, with a criteria table, two original tasks in Python and Java, and the Grade 12 and postsecondary routes each opens.',
  courseDescription: 'Live online help for Ontario students in ICS3U or ICS3C, in Python or Java, alongside the school course, in a batch or one to one. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'ICS3U vs ICS3C',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#criteria', label: 'Twelve differences' },
    { href: '#tasks', label: 'Two sample tasks' },
    { href: '#decide', label: 'How to decide' },
    { href: '#after', label: 'Where each leads' }
  ],
  eyebrow: 'Ontario &middot; Grade 11 &middot; University or college preparation',
  h1: 'ICS3U vs ICS3C: which Grade 11 computer course fits?',
  lede: 'Every Ontario student who wants computer studies in Grade 11 meets the same fork in the course calendar: ICS3U, the university preparation course, or ICS3C, the college preparation course. The names sound alike and both teach programming, so families often pick on a guess. This page sets the two side by side on twelve points taken from the curriculum itself, shows one task of each kind in Python and Java, and gives a short way to decide. We support students in either course with live classes, and we do not grant Ontario credits: the credit always comes from the school.',
  secondaryCta: { href: '#criteria', label: 'See the twelve differences' },
  wa: 'Hello Modern Age Coders, my teen in Ontario is choosing between ICS3U and ICS3C for Grade 11. Could we book a free first class to talk it through?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; Help for either Grade 11 course',
  spec: [
    ['Compares', 'ICS3U and ICS3C'],
    ['Grade', '11'],
    ['Source', 'Ontario curriculum, 2008'],
    ['Prerequisite', 'None for either'],
    ['Leads to', 'ICS4U or ICS4C'],
    ['We teach', 'Either course, live'],
    ['Credit', 'From the school only'],
    ['Start', 'A free class']
  ],
  capsuleQ: 'Which one?',
  capsule: 'ICS3U, Introduction to Computer Science, prepares Ontario Grade 11 students for university and leads to ICS4U. ICS3C, Introduction to Computer Programming, prepares them for college and apprenticeship and leads to ICS4C. Neither needs a prerequisite. Modern Age Coders teaches either course live online, one to one or in a group, through Ontario Computer Science Companion: ICS3U and ICS4U.',

  picks: {
    eyebrow: 'Help in either course',
    h2: 'Three courses for Grade 11 programmers',
    lede: 'The companion course is built around the university track and also suits ICS3C students who want a firmer base. The other two match what each track leans on.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'II / 01', title: 'Ontario Computer Science Companion', note: 'Paced to the school outline for ICS3U, and useful for an ICS3C student thinking about the university route later.' },
      { course: 'python-complete-masterclass-teens', code: 'II / 02', title: 'Python for teens', note: 'Input, checking, loops and functions with real programs, the practical core both Grade 11 courses share.' },
      { course: 'mysql-mastery-for-teens', code: 'II / 03', title: 'MySQL for teens', note: 'Databases, which the curriculum names among the practical skills college preparation courses aim at.' }
    ]
  },

  sections: [
    {
      id: 'criteria', tint: 'tint', eyebrow: 'From the curriculum',
      h2: 'Twelve differences between ICS3U and ICS3C',
      lede: 'Both courses live in the same 2008 Computer Studies document and share a structure of four strands, so the differences sit in the detail of the expectations. The middle columns below are quoted from the document; the last column is our reading of what each difference means in class.',
      body: [
        { kind: 'table', caption: 'ICS3U and ICS3C compared on twelve criteria, quoted from the 2008 Computer Studies curriculum (our copy fetched 22 October 2026)', head: ['Criterion', 'ICS3U says', 'ICS3C says', 'What it means (ours)'], rows: [
          ['1. What the course is for', 'University preparation courses help students &ldquo;explore the theoretical underpinnings of computer science&rdquo;', 'College preparation courses introduce &ldquo;programs that focus on the practical skills businesses currently demand&rdquo;', 'Why it works, against how to make it work'],
          ['2. The description', '&ldquo;Students will develop creative solutions for various types of problems as their understanding of the computing environment grows.&rdquo;', '&ldquo;Students will write and test computer programs, using various problem-solving strategies.&rdquo;', 'Both write real programs; U speaks of creative solutions, C of writing and testing'],
          ['3. Data', 'Students &ldquo;declare, initialize, modify, and access one-dimensional arrays&rdquo;', 'Students &ldquo;use different data types in expressions in simple computer programs&rdquo;', 'Arrays are central in U; C stays with single values and strings'],
          ['4. Subprograms', 'A strand A overall expectation of its own: &ldquo;demonstrate the ability to use subprograms within computer programs&rdquo;', 'In strand B: &ldquo;write subprograms (e.g., functions, procedures) that perform one well-defined task&rdquo;', 'Both write functions; U treats them as a core programming skill'],
          ['5. Problem-solving strategies', 'Listed with &ldquo;stepwise refinement&rdquo; first', 'Listed as &ldquo;divide and conquer, working backwards, process analysis&rdquo; and others', 'C adds process analysis, the habit of a business analyst'],
          ['6. Working with others', 'Strand B opens with solving problems &ldquo;independently and as part of a team&rdquo;', 'Strand B opens with &ldquo;use a variety of problem-solving strategies to solve different types of problems&rdquo;, and names no team', 'Teamwork is written into the U course&rsquo;s problem solving'],
          ['7. Sample algorithms', 'Examples include how to &ldquo;delete a datum from the middle of an array&rdquo;', '&ldquo;validate entered data, count, accumulate, use random numbers&rdquo;', 'U manipulates stored data; C makes input reliable'],
          ['8. Math in programs', '&ldquo;calculation of hypotenuse, determination of primes, calculation of area and circumference&rdquo;', '&ldquo;calculation of gross pay; fuel consumption on a car trip; average of students\' marks&rdquo;', 'U leans on school geometry and number; C on everyday arithmetic'],
          ['9. When things go wrong', '&ldquo;detect, intercept, and handle exceptions&rdquo;', '&ldquo;detect, intercept, and handle run-time errors&rdquo;', 'The same skill, with U using the formal word exception'],
          ['10. Hardware', '&ldquo;relate the specifications of computer components to user requirements&rdquo;', '&ldquo;demonstrate an understanding of the functions of different types of computer components&rdquo;', 'U matches a machine to a need; C explains what each part does'],
          ['11. The fourth strand', 'Topics in Computer Science, with research areas such as &ldquo;parallel processing, distributed computing&rdquo;', 'Computers and Society: &ldquo;describe and apply procedures for safe computing to safeguard computer users and their data&rdquo;', 'U looks at research; C at safe, practical computer use'],
          ['12. The Grade 12 course it opens', 'ICS4U, Computer Science', 'ICS4C, Computer Programming', 'Each Grade 11 course is the prerequisite for its own Grade 12 course']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the two have in common',
          left: [
            'Much of the course is shared. Both ask for user input, processing and screen output; both use sequence, selection and repetition; both ask students to correct syntax, logic and run-time errors and to test their programs against a test plan. Both apply the same seven-phase software development life cycle to a project.',
            'So an ICS3C class is not a lighter copy of ICS3U. It is a programming course with its own focus, and a student who does well in it has learned to write, test and fix real programs.'
          ],
          rightH3: 'Where the real gap is',
          right: [
            'The gap is clearest in rows 3 and 7. ICS3U students spend weeks on arrays: storing a list of values, searching it, inserting into it and deleting from it. ICS3C students spend that time on making a program robust: checking what a user typed, counting and totalling, and handling a run-time error without crashing.',
            'Row 1 explains why. The curriculum says college preparation courses aim at challenges &ldquo;such as creating custom programs, tailoring existing program packages, and using database management systems and scripting languages&rdquo;. That is a practical brief, and a good one for the right student.'
          ] },
        { kind: 'source', html: 'Source: ' + DOC + ', the program overview, the course table and the ICS3U, ICS3C, ICS4U and ICS4C course pages, read 22 October 2026. The current Ontario curriculum website lists both Grade 11 courses with the issue year 2008. We have no connection with the Ontario Ministry of Education.' }
      ]
    },
    {
      id: 'tasks', tint: 'deep', eyebrow: 'Two sample tasks, ours',
      h2: 'One ICS3C-style task and one ICS3U-style task, in Python and Java',
      lede: 'Expectations are easier to compare as programs. We wrote one task in the spirit of each course, using examples the curriculum itself lists: fuel consumption on a car trip for ICS3C, and adding data to a sorted array for ICS3U. Neither is from any school&rsquo;s course; all four programs were run.',
      body: [
        { kind: 'p', html: '<b>Task C, the ICS3C kind.</b> Ask for the distance of a trip in kilometres and the fuel used in litres, refuse anything that is not a sensible number, then print the fuel use in litres per 100 km and a one-word rating. The hard part is not the formula. It is the program&rsquo;s behaviour when the user types <code>four hundred</code>, or a negative number.' },
        { kind: 'code', label: 'Python &middot; Task C, fuel use with checked input (ours)', lang: 'python', code: FUEL_PY, note: 'Run with the inputs four hundred, -20, 412 and 31.5, it rejects the first two, then prints Fuel use: 7.6 L/100 km and Rating: typical. The try and except block is the run-time error handling the ICS3C expectations ask for.' },
        { kind: 'code', label: 'Java &middot; Task C, fuel use with checked input (ours)', lang: 'java', code: FUEL_JAVA, note: 'Same inputs, same result line. One small difference worth noticing: Java prints the limits as 0.0 and 5000.0 because they are doubles, where the Python version prints 0 and 5000.' },
        { kind: 'p', mt: true, html: '<b>Task U, the ICS3U kind.</b> A list of marks is already sorted from low to high. Add a new mark so the list stays sorted, without calling a built-in sort or insert. The hard part is the shifting: every value larger than the new one moves one place to the right, starting from the end, and the new value drops into the gap.' },
        { kind: 'code', label: 'Python &middot; Task U, insert into a sorted list (ours)', lang: 'python', code: INSERT_PY, note: 'Prints [52, 61, 70, 77, 84, 93], then [40, 52, 61, 70, 84, 93], then [52, 61, 70, 84, 93, 99], then [5]. The last three lines test the edges: a new smallest value, a new largest value and an empty list.' },
        { kind: 'code', label: 'Java &middot; Task U, insert into a sorted array (ours)', lang: 'java', code: INSERT_JAVA, note: 'Prints [52, 61, 70, 77, 84, 93]. A Java array cannot grow, so the program keeps a count of the slots in use: a pattern ICS3U Java classes meet often.' },
        { kind: 'table', mt: true, caption: 'The two tasks compared (ours)', head: ['', 'Task C (ICS3C kind)', 'Task U (ICS3U kind)'], rows: [
          ['Main skill', 'Checking input and handling errors', 'Moving data inside an array'],
          ['Where students slip', 'Forgetting the user can type anything', 'Shifting from the front and overwriting values'],
          ['Edge cases to test', 'Text, zero, a negative, a huge value', 'Smallest, largest, empty list'],
          ['Typical bug', 'A crash on bad input', 'An index one past the end'],
          ['Closest real job', 'A form or a till that must not crash', 'Keeping a leaderboard in order']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a student learns from trying both',
          left: [
            'Students who enjoy Task U, where the challenge is in the logic of the data, tend to enjoy the direction ICS3U and then ICS4U take: searching, sorting, recursion and analysing algorithms.',
            'Students who enjoy Task C, where the challenge is making a program behave well for a real person, often enjoy the direction ICS3C and ICS4C take: object-oriented programs with graphical interfaces, data validation and projects that look like workplace software.'
          ],
          rightH3: 'Both tasks start the same way',
          right: [
            'Before any code, we ask students to write three lines: what goes in, what the program does with it, and what comes out. Both curriculum courses name this input-process-output model, and it is the step that turns a vague task into a plan.',
            'Then they list the test cases before running anything. For Task C the list starts with text where a number should be. For Task U it starts with an empty list. Writing those down first is the habit we care about most in either course.'
          ] }
      ]
    },
    {
      id: 'decide', tint: 'tint', eyebrow: 'A way to decide',
      h2: 'How to choose between ICS3U and ICS3C, in five steps',
      lede: 'The curriculum&rsquo;s own advice is short: &ldquo;Students choose between course types on the basis of their interests, achievement, and postsecondary goals.&rdquo; These steps, which are ours, turn that sentence into questions a family can answer at the kitchen table. The school&rsquo;s guidance counsellor has the final word on any one student&rsquo;s timetable.',
      body: [
        { kind: 'ol', items: [
          '<b>Name the destination, even roughly.</b> If the plan is a degree in computer science, engineering or math, that points to ICS3U, because the university preparation course is the one designed to meet university entrance requirements and it is the only Grade 11 course that leads to ICS4U. A college program in programming, IT or a related trade points to ICS3C.',
          '<b>Check the Grade 12 course you will need.</b> ICS4U lists ICS3U as its prerequisite, and ICS4C lists ICS3C. Choosing the Grade 11 course is also choosing which Grade 12 computer course is open next year.',
          '<b>Look at the math plan beside it.</b> University computer science programs care most about Grade 12 math. A student on the Functions, Advanced Functions and Calculus and Vectors route is usually also on the U route in computer studies.',
          '<b>Be honest about interest, not only marks.</b> A student who wants to know why an algorithm works will be happier in ICS3U. A student who wants to build something useful quickly may be happier in ICS3C, and will still write real code.',
          '<b>Ask about the school&rsquo;s offer.</b> Each school decides which courses it runs and which language it teaches them in. The school course calendar and the counsellor say what is actually available.'
        ] },
        { kind: 'table', mt: true, caption: 'A quick self-check (ours; a starting point for a conversation, not a placement test)', head: ['If the student...', 'Lean toward'], rows: [
          ['plans a university degree in computer science, engineering or math', 'ICS3U'],
          ['wants ICS4U in Grade 12', 'ICS3U'],
          ['plans a college diploma in programming or IT, or an apprenticeship', 'ICS3C'],
          ['enjoys puzzles about data and order, like Task U', 'ICS3U'],
          ['enjoys making a program behave well for its user, like Task C', 'ICS3C'],
          ['has not decided between college and university', 'A talk with the counsellor first: ICS3U opens only ICS4U and ICS3C opens only ICS4C, so this choice sets the Grade 12 option']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A common worry: is ICS3U too hard to try?',
          left: [
            'The course table lists no prerequisite for ICS3U, which means a student with no coding background can enrol in it. The first unit is the same kind of programming in both courses, and the step up in ICS3U comes later, with arrays and subprograms.',
            'What helps most is starting early. A student who has written a few small programs over the summer meets the array unit with confidence instead of panic. That is often where an outside teacher is most useful.'
          ],
          rightH3: 'A common mistake: choosing by the friend group',
          right: [
            'Students often take whichever course their friends picked. Computer studies is optional, and the Grade 11 choice shapes the Grade 12 choice through its prerequisite, so it is worth a ten-minute conversation about the destination first.',
            'It is also worth remembering that a college preparation course is a real course with a real purpose. Students who take ICS3C because it fits their plans are not settling; they are choosing the course designed for where they are going.'
          ] }
      ]
    },
    {
      id: 'after', tint: 'deep', eyebrow: 'Grade 12 and after',
      h2: 'Where ICS3U and ICS3C lead',
      lede: 'Each Grade 11 course opens its own Grade 12 course, and the two Grade 12 courses differ even more than the Grade 11 pair. Here they are, from the same 2008 document.',
      body: [
        { kind: 'table', caption: 'The Grade 12 courses each Grade 11 course opens, from the 2008 Computer Studies curriculum (our copy fetched 22 October 2026)', head: ['', 'After ICS3U: ICS4U', 'After ICS3C: ICS4C'], rows: [
          ['Full title', 'Computer Science, Grade 12, University Preparation', 'Computer Programming, Grade 12, College Preparation'],
          ['Headline skill', 'Students &ldquo;design a simple and efficient recursive algorithm&rdquo; and &ldquo;analyse algorithms for their effectiveness in solving a problem&rdquo;', 'Students &ldquo;design graphical user interfaces&rdquo; and build object-oriented software'],
          ['Sample work named', 'Searching, sorting, recursion, two-dimensional arrays', 'Rounding for &ldquo;currency calculations, amortization, recipe volume changes&rdquo;; validating &ldquo;postal codes, telephone numbers, SINs&rdquo;'],
          ['Uses built-in tools', 'Students write their own searches and sorts', 'Students also use library routines, with the example &ldquo;Arrays.sort(intArray)&rdquo;'],
          ['Half credit allowed', 'No: the document excludes &ldquo;the Grade 12 university preparation course&rdquo;', 'Yes, like the other courses in the document']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'University, in the universities&rsquo; words',
          left: [
            'On 22 October 2026, the University of Waterloo&rsquo;s Computer Science page named ICS3U by its title as the recommended course for Ontario applicants: &ldquo;Grade 11 U Introduction to Computer Science&rdquo;. It is the U course, not the C course, that the page names.',
            'The University of Toronto&rsquo;s Computer Science listings ask Ontario applicants for an OSSD with &ldquo;six subjects at the 4U/M level&rdquo;. ICS4C is a college preparation course, so on our reading it is not one of the 4U/M courses that line counts, while ICS4U is. Check each university&rsquo;s page in the year your teen applies.'
          ],
          rightH3: 'College and apprenticeship',
          right: [
            'For college, the 2008 document is clear about the purpose: the C courses are designed for entrance &ldquo;to most college programs&rdquo; and for apprenticeship and other training. Individual college programs set their own admission requirements, so a family should read the requirements of the programs they are considering.',
            'If plans change after Grade 11, the prerequisite rule matters: a student who took ICS3C and later wants ICS4U needs ICS3U first, because that is the prerequisite the course table lists.'
          ] }
      ]
    },
    {
      id: 'help', tint: 'tint', eyebrow: 'How we help in each course',
      h2: 'What our classes look like for an ICS3U student and an ICS3C student',
      lede: 'In both cases the plan comes from the outline the school handed out, in whichever language the school uses. The focus is different because the courses are different.',
      body: [
        { kind: 'two',
          leftH3: 'For an ICS3U student',
          left: [
            'We spend the most time on arrays and subprograms: tracing a loop over an array by hand, rebuilding the standard array algorithms without notes, and passing values in and out of functions correctly. We also prepare the project plan before the project starts.',
            'For students heading toward ICS4U, we often add a first look at searching and sorting near the end of Grade 11, so that Grade 12 begins as a second visit.'
          ],
          rightH3: 'For an ICS3C student',
          right: [
            'We spend the most time on making programs reliable: reading input safely, building test plans that include silly input, and finding the cause of a run-time error from its message. We also build small, practical programs the student cares about.',
            'For students who may switch to the university route, we cover the array work that ICS3U adds, so the option stays realistic.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The same teacher', p: 'One regular teacher who learns the course outline, the language and the student&rsquo;s habits, rather than a new face each week.' },
          { h3: 'Thinking first', p: 'Students explain their plan in words before they type. We do not hand over answers, and we do not let an AI tool write the assignment.' },
          { h3: 'The school sets the pace', p: 'Classes follow the school&rsquo;s unit order, and the student&rsquo;s teacher remains the person who marks and grants the credit.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Ready for Grade 11?',
    h2: 'Four signs of readiness for either Grade 11 course',
    lede: 'Our own checklist, used in a first class with students about to choose.',
    table: { caption: 'Readiness for Grade 11 computer studies (ours)', head: ['Sign', 'What it looks like'], rows: [
      ['1. Follows a recipe', 'Can follow numbered steps exactly and spot when one is missing'],
      ['2. Thinks in cases', 'Asks what should happen if the input is empty, zero or nonsense'],
      ['3. Reads before running', 'Predicts what a five-line program prints before pressing Run'],
      ['4. Explains in words', 'Can say what a program does without reading it line by line']
    ] },
    left: { h3: 'For parents', ps: [
      'None of these signs needs any coding experience. They are habits of careful thinking, and both courses build on them.',
      'A student strong on signs 3 and 4 is usually ready for the pace of ICS3U, whatever their background.'
    ] },
    right: { h3: 'For students', ps: [
      'Try Task C and Task U above on paper before reading the code. Notice which one you enjoyed more.',
      'Then talk to your counsellor with that answer and your rough plan after high school.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our catalogue',
    h2: 'Nine more courses for Grade 11 students',
    lede: 'Each is a live course with one regular teacher, for a group or for a single student.',
    bands: [
      { num: 'I', h3: 'Programming foundations', sub: 'Grades 10 to 12', courses: [
        { code: 'II / FND / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For Grade 11 classes taught in Java.' },
        { code: 'II / FND / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Arrays, searching and sorting, step by step.' },
        { code: 'II / FND / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Saving every version of a project safely.' }
      ] },
      { num: 'II', h3: 'Practical building', sub: 'Teens', courses: [
        { code: 'II / BLD / 01', slug: 'frontend-development-masterclass-for-teens', title: 'Front-end development', blurb: 'Interfaces people can click and use.' },
        { code: 'II / BLD / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'From an idea to an app on a phone.' },
        { code: 'II / BLD / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Safe computing, taken further.' }
      ] },
      { num: 'III', h3: 'Stretch and challenge', sub: 'Grades 9 to 12', courses: [
        { code: 'II / STR / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'The Waterloo programming contest, prepared properly.' },
        { code: 'II / STR / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real data, cleaned and charted in Python.' },
        { code: 'II / STR / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How models learn, built from the ground up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When and how',
    h2: 'Live classes for Grade 11, in either course',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, at a time agreed in your Ontario time zone.' },
      { time: 'Weekends', l: 'Morning sessions for steady weekly practice.' },
      { time: '1-on-1', l: 'Booked around the next test or project date.' }
    ],
    cells: [
      { h3: 'U or C', p: 'Either Grade 11 course, from its own outline.' },
      { h3: 'Python or Java', p: 'Whichever the class is taught in.' },
      { h3: 'Plans before code', p: 'Input, process, output, then tests.' },
      { h3: 'Your assignments', p: 'Explained clearly, never done for you.' },
      { h3: 'One teacher', p: 'The same person every week.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'A few projects from students who learned to program with us. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from families, printed as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is free. After that a monthly fee covers eight live classes a month; the figure below appears in your local currency, and there is no long contract, so you can stop at the end of a month.',
    free: ['A free first class', 'Talk through the U or C choice', 'No card details'],
    group: ['Fifteen to twenty in a batch', 'A regular teacher', 'A batch time you choose', 'Billed monthly'],
    one: ['Your teen and one teacher', 'Times that suit your week', 'Planned from their own course']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'ICS3U vs ICS3C: common questions',
    items: [
      { q: 'What is the difference between ICS3U and ICS3C?', a: 'ICS3U, Introduction to Computer Science, is the Grade 11 university preparation course and leads to ICS4U. ICS3C, Introduction to Computer Programming, is the Grade 11 college preparation course and leads to ICS4C. ICS3U puts more weight on arrays and the theory behind programs; ICS3C puts more weight on practical, reliable programs.' },
      { q: 'What is ICS3C?', a: 'ICS3C is Introduction to Computer Programming, Grade 11, College Preparation, described in Ontario\'s 2008 Computer Studies curriculum. Students write and test programs, learn program design, run a project with a software development life cycle, and study computer components, safe computing and careers.' },
      { q: 'Does ICS3C have a prerequisite?', a: 'No. The 2008 curriculum lists no prerequisite for ICS3C or for ICS3U, and the current Ontario curriculum website shows none either.' },
      { q: 'Can I take ICS4U after ICS3C?', a: 'Not directly. The prerequisite for ICS4U is ICS3U. ICS3C is the prerequisite for ICS4C, the Grade 12 college preparation course. A student who wants ICS4U after ICS3C should talk to the school counsellor about taking ICS3U first.' },
      { q: 'Is ICS3C easier than ICS3U?', a: 'It is different rather than simply easier. ICS3C spends less time on arrays and more on input checking, counting, totalling and handling run-time errors. Both courses ask students to write, test and debug real programs.' },
      { q: 'Which one do universities want for computer science?', a: 'On 22 October 2026, the University of Waterloo named Grade 11 U Introduction to Computer Science, which is ICS3U, as its recommended course for Computer Science. University computer science programs mostly require Grade 12 math and English; check each program\'s own page in the year you apply.' },
      { q: 'Is ICS3C good for college programs?', a: 'The 2008 curriculum says college preparation courses are designed to help students meet the requirements for entrance to most college programs or for admission to apprenticeship or other training programs. Each college program sets its own admission requirements, so check the programs you are considering.' },
      { q: 'Do you teach ICS3C as well as ICS3U?', a: 'Yes. We help students in either course, in the language their school uses, working from their own course outline and assignments.' },
      { q: 'Do you grant the ICS3U or ICS3C credit?', a: 'No. Our classes are teaching and practice beside the school course, and we do not grant Ontario credits. The credit comes from the school or credit provider that teaches and evaluates the course.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set the time in your own Ontario time zone.' },
      { q: 'What does it cost?', a: 'The first class is free. After that families pay a monthly fee and can stop at the end of any month. The fees section shows the current figure for a batch and for one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related reading',
    h2: 'More for Ontario students',
    lede: 'Pages that pick up where this one stops.',
    items: [
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'The university track course in depth, with practice questions.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live classes for learners of every age in the province.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'The Grade 11 and 12 math that sits beside computer studies.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'A contest open to students in either course through their school.' },
      { href: '/how-to-think-like-a-programmer', label: 'How to think like a programmer', p: 'The planning habit both courses reward.' },
      { href: '/blog/python-vs-java-which-to-learn-first', label: 'Python or Java first', p: 'For families whose school offers a choice of language.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'All our pages for Canadian families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which course your teen is taking or considering, the language the school uses and what they hope to do after high school. The first class works on a real task at their level.',
    readFirst: 'Reading first is fine. The <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">companion course syllabus</a> lists the Grade 11 weeks, and <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> is set out in full.',
    note: 'All classes are live video lessons with teachers working from India, so there is nowhere to travel to. From Ontario, a WhatsApp message gets the quickest reply.',
    formNote: 'There is no charge and no card needed to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Grade 11 computer studies', links: [
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'Computer science companion' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Input, process, output, then the tests'
  },

  personalityCss: `
.ag-root.ag-ii .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-ii .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-ii .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ii .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ii .ag-table td { line-height: 1.5; }
.ag-root.ag-ii .ag-steps li { margin-bottom: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), fetched raw 22 October 2026: program overview and course types; ICS3C description and expectations A1, A2.3, A3.1, B1, B1.1, B2.3, B3.1 to B3.3, B4.3, C1, C1.4, D2; ICS3U expectations A1.6, A3, B1, B3.1 to B3.3, C1, C3.3, D2.1; ICS4C description, A2.5, B1.2, B1.3; ICS4U A3.6 and C2; the course table and prerequisites; the half-credit exception. Ontario curriculum content API ICS records. Waterloo and U of T Computer Science pages.',
    localProject: 'Two original tasks built on curriculum examples: Task C (fuel use for a car trip with checked input, ICS3C style) in Python and Java, run with bad and good input and printing "Fuel use: 7.6 L/100 km"; Task U (insert into a sorted array without built-ins, ICS3U style) in Python and Java with edge cases, printing [52, 61, 70, 77, 84, 93]; a twelve-criterion comparison table from the curriculum; five decision steps and a self-check table. Lesson family: decomposition.',
    requiredMentions: ['Students choose between course types on the basis of their interests, achievement, and postsecondary goals.', 'divide and conquer, working backwards, process analysis', 'fuel consumption on a car trip', 'delete a datum from the middle of an array', 'Fuel use: 7.6 L/100 km', 'insert_sorted', 'Task U, the ICS3U kind', 'Task C, the ICS3C kind', 'tailoring existing program packages', 'Arrays.sort(intArray)', 'validate entered data, count, accumulate, use random numbers', 'Twelve differences between ICS3U and ICS3C'],
    sources: [
      { claim: 'Course types, ICS3U and ICS3C descriptions and expectations, ICS4U and ICS4C, prerequisites and half credits.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'Current Ontario curriculum website records for ICS3U, ICS3C, ICS4U and ICS4C, with prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&depth=0' },
      { claim: 'Waterloo Computer Science recommended course for Ontario applicants.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'U of T Computer Science: OSSD with six subjects at the 4U/M level.', url: 'https://future.utoronto.ca/undergraduate-programs/computer-science/' }
    ],
    rejectedClaims: [
      'That ICS3C is an easier or lesser course: the page presents it as a course with its own purpose.',
      'That a student must take ICS3U for any university: only Waterloo CS names ICS3U, as recommended, and the page says so.',
      'That ICS4C counts as a 4U/M course: given as our reading of the course type, not as a university statement.',
      'Any college program requirement: none quoted; families are told to check each program.',
      'Placement advice for a named student or school: the self-check is labelled a conversation starter, and the counsellor decides.',
      'Named schools or boards: none named.',
      'Any affiliation with the Ontario Ministry of Education, Waterloo or U of T: none, and the page says so.'
    ]
  }
};
