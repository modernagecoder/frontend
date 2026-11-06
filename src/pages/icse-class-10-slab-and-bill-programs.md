---
title: "Slab Programs ICSE Java: Bill, Discount, Tax and Courier"
description: "Slab programs in ICSE Java for 2027: electricity bill, discount, tax and courier classes in board format, with variable tables and boundary test runs."
canonical: https://learn.modernagecoders.com/icse-class-10-slab-and-bill-programs
source: src/pages/icse-class-10-slab-and-bill-programs.html
updated: 2026-10-13
---

> Slab programs in ICSE Java calculate a charge from a rate card divided into bands, such as an electricity bill by units, a discount by purchase amount, a tax by income or a courier charge by weight. There are two kinds: a bracket slab applies one rate to the whole amount, and a band slab charges each band at its own rate and adds them. They are written with if-else-if ladders inside a class with accept, compute and display methods and a variable description table. Modern Age Coders teaches them live in a Tuesday and Wednesday mini batch in India, or one to one at the family's time.

## Slab programs ICSE Java: the two ways a rate card can be read

A slab program works out a charge when the rate changes from one band of values to the next. Before writing any code, decide which of two kinds the question describes, because the same table of rates gives very different answers.

- Point | Bracket slab (whole amount) | Band slab (band by band)

- How the rate is used | Find the one band the value falls in; that rate applies to the entire value | Each band is charged at its own rate; the parts are added

- Typical wording | "Purchase amount 3001 to 6000: discount 15%" | "First 100 units at 2.00, next 200 units at 3.50"

- Usual examples | Discount, commission, grade, fine category | Electricity and water bills, tax, parcel weight steps

- Code shape | if (amt <= 1000) rate = 5; else if ... then one multiplication | Each branch adds the full charge of the lower bands to the part above

- At a boundary | The total can jump down: a bigger amount can cost less | The total rises smoothly; there is never a jump

### The words that decide it
"First", "next", "for every unit above" and "remaining" mean band slab. "If the amount is between" or "on the total purchase" means bracket slab.

### The cost of guessing
With the electricity rates below, 450 units billed as a bracket (all units at 5.00, plus the meter charge) gives 2300.0. Read correctly, band by band, it is 1700.0.

### What the paper asks for
A class with named data members, a method to accept input, one to calculate and one to display, and a main that creates an object and calls them. A variable description table earns its own credit.

If-else ladders that pick a menu option rather than a rate have their own page: [ICSE Class 10 menu-driven programs](/icse-class-10-menu-driven-programs). Past papers that set a slab class in Question 3 are summarised on [ICSE Computer Applications previous year papers, solved](/icse-computer-applications-previous-year-papers-solved).

## Electricity bill program in Java, in ICSE board format

An electricity bill is the classic band slab. Each branch of the ladder adds the full charge of every lower band, worked out once by hand, to the units above the last boundary at the new rate.

Question 1. Define a class ElectricBill with data members name (String), units (int) and bill (double). Write void accept() to input the name and units, void calculate() to compute the bill from the tariff below, and void print() to display the name, units and bill. A fixed meter charge of 50 is added to every bill, and a surcharge of 2.5% is added if the total exceeds 3000. Write main to create an object and call the methods.

- Units | Rate per unit | Full charge of this band | Charge of all bands up to here

- First 100 | 2.00 | 200 | 200

- Next 200 (101 to 300) | 3.50 | 700 | 900

- Next 300 (301 to 600) | 5.00 | 1500 | 2400

- Above 600 | 6.25 | open | open

```
import java.util.Scanner;
class ElectricBill {
    String name;    // consumer's name
    int units;      // units consumed
    double bill;    // amount payable

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Consumer name: ");
        name = sc.nextLine();
        System.out.print("Units consumed: ");
        units = sc.nextInt();
    }

    void calculate() {
        double charge;
        if (units <= 100)
            charge = units * 2.00;
        else if (units <= 300)
            charge = 200 + (units - 100) * 3.50;
        else if (units <= 600)
            charge = 900 + (units - 300) * 5.00;
        else
            charge = 2400 + (units - 600) * 6.25;
        bill = charge + 50;
        if (bill > 3000)
            bill = bill + bill * 2.5 / 100;
    }

    void print() {
        System.out.println("Name: " + name);
        System.out.println("Units: " + units);
        System.out.println("Bill: " + bill);
    }

    public static void main(String args[]) {
        ElectricBill ob = new ElectricBill();
        ob.accept();
        ob.calculate();
        ob.print();
    }
}
```

- Variable | Type | Purpose

- name | String | consumer's name

- units | int | units consumed

- bill | double | final amount payable

- charge | double | energy charge before meter charge and surcharge

- sc | Scanner | reads the input

- ob | ElectricBill | the object created in main

- Units entered | Why this input | Bill printed

- 100 | top of band 1 | 250.0

- 101 | first unit of band 2 | 253.5

- 300 | top of band 2 | 950.0

- 450 | middle of band 3 | 1700.0

- 600 | top of band 3 | 2450.0

- 680 | band 4, total just under 3000 | 2950.0

- 800 | surcharge applies | 3792.5

```
Consumer name: Asha Menon
Units consumed: 800
Name: Asha Menon
Units: 800
Bill: 3792.5
```

- Step for 800 units | Working | Value

- Branch chosen | 800 is above 600 | 4th

- Units above 600 | 800 &minus; 600 | 200

- charge | 2400 + 200 &times; 6.25 | 3650.0

- Add meter charge | 3650 + 50 | 3700.0

- Surcharge, since 3700 > 3000 | 3700 &times; 2.5 / 100 | 92.5

- bill | 3700 + 92.5 | 3792.5

## Discount program ICSE and a tax slab: if else programs in board format

A discount is usually a bracket slab: find the one rate and apply it to the whole purchase. A tax is a band slab like the electricity bill, but here it is written a second way, by peeling off one band at a time, which is shorter when there are many bands.

Question 2. Define a class BookFair with data members name (String), type (char, M for member or N for non-member), amount, disc and net (double). Write a default constructor, void input(), void compute() to find the discount on the whole amount from the table below and the net amount, and void display() to print the name, amount, discount and net amount on one line. Write main.

- Purchase amount | Member discount | Non-member discount

- Up to 1000 | 5% | nil

- 1001 to 3000 | 10% | 5%

- 3001 to 6000 | 15% | 8%

- Above 6000 | 20% | 12%

```
import java.util.Scanner;
class BookFair {
    String name;     // buyer's name
    char type;       // 'M' member, 'N' non-member
    double amount;   // value of books bought
    double disc;     // discount in rupees
    double net;      // amount to pay

    BookFair() {
        name = "";
        type = 'N';
        amount = 0.0;
        disc = 0.0;
        net = 0.0;
    }

    void input() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name: ");
        name = sc.nextLine();
        System.out.print("Member (M) or non-member (N): ");
        type = Character.toUpperCase(sc.next().charAt(0));
        System.out.print("Purchase amount: ");
        amount = sc.nextDouble();
    }

    void compute() {
        int rate;
        if (amount <= 1000)
            rate = (type == 'M') ? 5 : 0;
        else if (amount <= 3000)
            rate = (type == 'M') ? 10 : 5;
        else if (amount <= 6000)
            rate = (type == 'M') ? 15 : 8;
        else
            rate = (type == 'M') ? 20 : 12;
        disc = amount * rate / 100;
        net = amount - disc;
    }

    void display() {
        System.out.println(name + "\t" + amount + "\t" + disc + "\t" + net);
    }

    public static void main(String args[]) {
        BookFair b = new BookFair();
        b.input();
        b.compute();
        b.display();
    }
}
```

- Input | Line printed (name, amount, discount, net)

- M, 1000 | Riya Sen 1000.0 50.0 950.0

- M, 1001 | Riya Sen 1001.0 100.1 900.9

- M, 3000 | Dev Joshi 3000.0 300.0 2700.0

- M, 3001 | Dev Joshi 3001.0 450.15 2550.85

- n, 7200 | Kavya Iyer 7200.0 864.0 6336.0

Look at the first two rows: buying one rupee more costs 49.10 less. That jump is normal for a bracket slab and is a good check that the program has read the table as the question intends. In the actual output the four values are separated by tabs.

- Variable | Type | Purpose

- name, type | String, char | buyer and membership

- amount, disc, net | double | purchase, discount and amount payable

- rate | int | discount percentage chosen

- sc, b | Scanner, BookFair | input reader and the object

Question 3. Define a class IncomeTax with data members name (String), income and tax (double), a parameterised constructor, void compute() and void display(). The tax is charged band by band: the first 2,50,000 nil, the next 2,50,000 at 5%, the next 5,00,000 at 15% and the rest at 25%, and a surcharge of 3% is then added to the tax. (These rates are invented for practice; they are not any government's rates.)

```
import java.util.Scanner;
class IncomeTax {
    String name;      // taxpayer's name
    double income;    // annual taxable income
    double tax;       // tax including surcharge

    IncomeTax(String n, double i) {
        name = n;
        income = i;
        tax = 0.0;
    }

    void compute() {
        double rest = income;   // income not yet taxed
        double band;            // the part falling in one slab

        band = Math.min(rest, 250000);      // slab 1: nil
        rest = rest - band;

        band = Math.min(rest, 250000);      // slab 2: 5%
        tax = tax + band * 0.05;
        rest = rest - band;

        band = Math.min(rest, 500000);      // slab 3: 15%
        tax = tax + band * 0.15;
        rest = rest - band;

        tax = tax + rest * 0.25;            // slab 4: 25%
        tax = tax + tax * 3 / 100;          // surcharge 3%
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Income: " + income);
        System.out.println("Tax: " + Math.round(tax * 100) / 100.0);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name: ");
        String n = sc.nextLine();
        System.out.print("Annual income: ");
        double i = sc.nextDouble();
        IncomeTax ob = new IncomeTax(n, i);
        ob.compute();
        ob.display();
    }
}
```

- Income entered | Tax before surcharge | Tax printed

- 240000 | 0 | 0.0

- 500000 | 12500 | 12875.0

- 820000 | 12500 + 48000 = 60500 | 62315.0

- 1600000 | 12500 + 75000 + 150000 = 237500 | 244625.0

- Variable | Type | Purpose

- name, income, tax | String, double, double | taxpayer, income and tax payable

- rest | double | income still to be taxed

- band | double | part of the income in the current slab

- n, i | String, double | inputs passed to the constructor

Both styles are correct for a band slab. The ladder with fixed totals, as in the electricity bill, is what most mark schemes show; the peeling style is shorter when there are five or more bands.

## Courier charge program: switch for the zone, Math.ceil for the weight steps

"Or part thereof" means any extra weight, however small, is charged as a full step. Math.ceil of the extra weight divided by the step size, written with a double, gives exactly that number of steps.

Question 4. Define a class Courier with data members weight (int, in grams), zone (char), express (char) and charge (double). Write void accept(), void compute() and void display(). The first 500 g costs 40, 60 or 90 for zone L (local), S (state) or N (national); every further 500 g or part costs 20, 30 or 45 respectively. Express delivery adds 25% to the charge. For any other zone, print "Invalid zone". Write main.

```
import java.util.Scanner;
class Courier {
    int weight;      // parcel weight in grams
    char zone;       // 'L' local, 'S' state, 'N' national
    char express;    // 'Y' or 'N'
    double charge;   // amount payable

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Weight in grams: ");
        weight = sc.nextInt();
        System.out.print("Zone (L/S/N): ");
        zone = Character.toUpperCase(sc.next().charAt(0));
        System.out.print("Express (Y/N): ");
        express = Character.toUpperCase(sc.next().charAt(0));
    }

    void compute() {
        int first, extra;
        switch (zone) {
            case 'L': first = 40; extra = 20; break;
            case 'S': first = 60; extra = 30; break;
            case 'N': first = 90; extra = 45; break;
            default:
                System.out.println("Invalid zone");
                charge = 0;
                return;
        }
        int steps = 0;
        if (weight > 500)
            steps = (int) Math.ceil((weight - 500) / 500.0);
        charge = first + steps * extra;
        if (express == 'Y')
            charge = charge * 1.25;
    }

    void display() {
        System.out.println("Weight " + weight + " g, zone " + zone + ", charge " + charge);
    }

    public static void main(String args[]) {
        Courier c = new Courier();
        c.accept();
        c.compute();
        c.display();
    }
}
```

- Weight, zone, express | Extra steps | Charge printed

- 500, L, N | 0 | 40.0

- 501, L, N | 1 (1 g is a part) | 60.0

- 1000, S, N | 1 | 90.0

- 1750, N, Y | 3, then &times; 1.25 | 281.25

- 2300, S, Y | 4, then &times; 1.25 | 225.0

- 800, X, N | none | Invalid zone, then charge 0.0

- Variable | Type | Purpose

- weight | int | parcel weight in grams

- zone, express | char | delivery zone and express choice

- charge | double | amount payable

- first, extra | int | rates for the first 500 g and each further step

- steps | int | number of further 500 g steps

- sc, c | Scanner, Courier | input reader and the object

Math.ceil and the other syllabus Math methods, with their return types, are on [Math library methods for ICSE](/icse-class-10-math-library-methods). Classes with private data and checking methods, the next step up from these, are on [encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers).

## Conditional statements ICSE Class 10: a checklist for slab questions

A Section B question is worth 15 marks, and the mark scheme rewards a correct class structure, correct input, correct logic and correct output. Most marks lost on slab programs are lost at a boundary or in a missing piece of structure.

-
**Copy the names exactly** Use the class, data member and method names from the question, with the same types and capital letters. A renamed method can cost marks even when it works.

-
**Decide bracket or band, in writing** Write "whole amount" or "band by band" above the rate table on your rough work, then the band totals if it is a band slab.

-
**Check every boundary sign** "Up to 100" is <= 100; "above 600" is > 600; "1001 to 3000" in an else-if after <= 1000 needs only <= 3000.

-
**Keep the fraction** Use double for money, and write percentages as * rate / 100 on a double, or divide by 100.0. An int division can silently turn a 5% discount into zero.

-
**Do the extras in the stated order** A fixed charge, then a surcharge on the total, is not the same as a surcharge first. Follow the wording of the question line by line.

-
**Test the edges, not the middle** Dry run one value at the top of each band and one just above it. If those agree with the rate table, the middle values will too.

-
**Finish the paperwork** A main that creates the object and calls every method, comments on the data members, and a variable description table.

### Quick check questions

- Write the condition for "units from 201 to 400, both included", as one boolean expression.
Answer units >= 201 && units <= 400. Inside an else-if ladder that has already handled units <= 200, units <= 400 is enough.

- With the ElectricBill tariff, what is the bill for 250 units?
Answer 200 + 150 &times; 3.50 = 725, plus 50 is 775.0.

- Why does disc = amount * (rate / 100); give 0 when rate is an int below 100?
Answer rate / 100 is int division, so 15 / 100 is 0 before it is multiplied. Write amount * rate / 100 with amount a double, or rate / 100.0.

- How many 500 g steps does Math.ceil give for 1501 g after the first 500 g?
Answer 3. The extra weight is 1001 g, and 1001 / 500.0 is 2.002, which rounds up to 3.0.

The same marking habits apply to every Section B family on [ICSE Class 10 Java programs practice](/icse-class-10-java-programs-practice), and loop-based programs are on [loop programs in Java for ICSE](/icse-class-10-loop-programs-java).

## From rate card to tested class in one week

Slab programs reward slow reading and quick testing. The week is split so that Tuesday is spent on reading rate cards and Wednesday on writing and marking a full class.

-
**Read the card aloud** At the Tuesday 5:30 PM IST class students get three fresh rate cards and say, for each, whether it is a bracket or band slab and what the band totals are, before any code.

-
**Guess the boundary outputs** For each card the group predicts the charge at the top of each band and one unit above it, then the teacher runs the program in BlueJ on a shared screen.

-
**Write the class by hand** On Wednesday at 8:00 PM IST each student writes a full slab class with its variable description table, on paper, against the clock.

-
**Marked on screen** Answers are marked against a board-style scheme in front of the group, so every lost mark has a named reason.

-
**Into the lab file and the mocks** Good solutions go into the student's laboratory assignments for internal assessment, and slab classes come back in timed mock papers from December.

The lab file side of this work is described on [the ICSE project and internal assessment page](/icse-class-10-computer-applications-project-and-internal-assessment).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, with slab classes written by hand and marked against the board scheme.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC, where the same if-else reasoning sits inside larger programs.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who enjoys boundary cases and wants to learn how programmers test systematically.

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

**What is a slab program in Java ICSE?** A slab program calculates a charge when the rate changes from one range of values to the next, such as an electricity bill where the first 100 units cost less per unit than the next 200. It is written with an if-else-if ladder, or sometimes switch, usually inside a class with methods to accept, compute and display.

**How do you write an electricity bill program in Java for ICSE?** Create a class with name, units and bill as data members, and methods to accept input, calculate and print. In the calculate method, use an if-else-if ladder: each branch adds the full charge of all lower bands, worked out beforehand, to the units above the last boundary multiplied by the new rate. Then add any fixed charge or surcharge the question states.

**What is the difference between a slab rate on the whole amount and band by band?** With a whole-amount slab, you find the one range the value falls in and apply that rate to all of it, as in most discount questions. With a band-by-band slab, each part of the value is charged at the rate of its own band and the parts are added, as in electricity bills and tax.

**How do you write a discount program in ICSE Java?** Read the purchase amount and any customer type, use an if-else-if ladder on the amount to choose the discount percentage, then compute discount = amount * rate / 100 and net = amount - discount. If the rate also depends on a type, a ternary or a nested if inside each branch keeps the ladder short.

**Are slab programs asked in the ICSE Computer Applications board exam?** Class-based programs with a slab or rate table have appeared in Section B in several recent papers, usually as the question on class and object. The 2027 specimen paper is not yet confirmed, so treat slab programs as a very likely shape rather than a promise, and practise the other families too.

**How do you calculate a charge "for every 500 g or part thereof" in Java?** Work out the extra weight beyond the first slab, divide it by the step size as a double and apply Math.ceil, then cast to int: steps = (int) Math.ceil((weight - 500) / 500.0). Dividing by 500 as an int would cut off the part step before ceil could round it up.

**Should I use if-else or switch for slab programs?** Use if-else-if for ranges, because switch can only compare one value against fixed constants. switch suits a choice such as a zone letter or a category number. Many good answers use both: switch to pick the rates for a category, then if-else or a formula for the amount.

**What are conditional statements in ICSE Class 10?** They are statements that choose what to run based on a condition: if, if-else, the if-else-if ladder, nested if, the ternary operator and switch-case. The ICSE syllabus covers them in Class 9 and the Class 10 paper re-tests them, most visibly in slab, menu-driven and number-checking programs.

**Do I need a variable description table in an ICSE slab program?** It is expected in the laboratory assignments for internal assessment and is good practice in the board paper. List every variable, its data type and its purpose. Students often include it in Section B answers as well, and it helps the examiner follow your logic.

**Do you teach slab and bill programs in live classes?** Yes. In the ICSE mini batch on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, students classify rate cards, predict boundary outputs and write a full slab class that is marked against a board-style scheme. Personalised one to one classes are also available at a time the family picks.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-slab-and-bill-programs*
