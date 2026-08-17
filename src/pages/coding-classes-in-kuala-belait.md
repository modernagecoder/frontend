---
title: "Coding Classes in Kuala Belait and Seria | Modern Age Coders"
description: "Live online coding and AI classes in Kuala Belait, Seria and Panaga for ages 6 to 67, built for a district on two curricula. USD 100 a month, first class free."
canonical: "https://learn.modernagecoders.com/coding-classes-in-kuala-belait"
region: "BN-BE"
updated: "2026-08-17"
---

# Coding Classes in Kuala Belait and Seria

> Belait is Brunei's largest district and its energy district, and it is the one place in the country where a child's school might be a government school on SPN21 or Panaga School on a British-influenced international curriculum, two streets apart. Modern Age Coders teaches live online coding, AI and maths to ages 6 to 67 across Kuala Belait, Seria, Panaga and the interior from USD 100 a month. Placement is by observed work, so it does not matter which of those two systems a learner comes from. The first class is free.

## What is Belait district, in numbers?

Belait is the westernmost and by area the largest of Brunei's four districts, covering **2,727 square kilometres**. Kuala Belait is the administrative centre, Seria is the other substantial town, and the district recorded **65,531** people at the 2021 census, estimated at about 67,900 by 2025. Practically all of that population sits in three coastal mukims.

| Mukim | 2021 census |
|---|---|
| Kuala Belait | 28,793 |
| Seria | 18,313 |
| Liang | 16,813 |
| Bukit Sawat | 759 |
| Labi | 727 |
| Sukang | 81 |
| Melilas | 29 |
| Kuala Balai | 16 |
| **Total** | **65,531** |

The three coastal mukims hold 63,919 people between them. The five inland ones hold 1,612, and three of those five recorded fewer than a hundred residents. There is no arrangement of timetables under which a settlement of sixteen people supports a local class at the right level for the right age. That is not a criticism of anybody. It is arithmetic, and it is why an online group drawn from twenty-five countries is a better answer here than a nearer one.

The economy behind the coastal numbers is hydrocarbons. The **Seria oil field** was found in 1929 with commercial production from 1932, **Brunei Shell Petroleum** runs the major facilities, and the South West Ampa gas field thirteen kilometres offshore from Kuala Belait holds more than half of the country's gas reserves. Brunei LNG at Lumut and the industrial park at Sungai Liang are both in this district. Belait also carries five secondary and sixteen primary public schools.

### The fact that should decide your timing: Panaga stops at thirteen

**Panaga School** sits on the Brunei Shell Petroleum camp between Kuala Belait and Seria. It has operated since **1948**, it is now run by **Jerudong International School**, and it teaches **ages two to thirteen**, with roughly 280 pupils drawn from more than thirty-five nations and a curriculum blending the International Early Years and International Primary curricula with the British curriculum for English and Mathematics.

At thirteen, every one of those pupils moves on: to Jerudong, to a government secondary school, or to a school in another country. **That transition is not a reason to be busier at fourteen. It is a reason to have built something by twelve.** A learner who arrives at a new school able to show three things they designed themselves has something no transcript conveys, and it travels across curricula and across borders.

Sources: district area of 2,727 square kilometres, the 2021 census total of 65,531 with its mukim breakdown, the 2025 estimate of about 67,900, the Seria oil field dates, the South West Ampa reserve share, Brunei LNG at Lumut, Sungai Liang, the presence of British Forces Brunei and the count of five secondary and sixteen primary public schools, from the [Belait District](https://en.wikipedia.org/wiki/Belait_District) summary citing Brunei government material. Panaga School's founding year, operation by Jerudong International School, age range, roughly 280 pupils, more than thirty-five nationalities and curriculum blend from the school's own [published information](https://www.panagaschool.com/) and independent school directories. Verified 17 August 2026. Confirm your own child's school arrangements with the school.

## The Belait student data project

Every page in this cluster works through one analytical mistake. Belait's is the bug that has silently corrupted more real reports than any other: **a number that arrives as text still looks like a number.**

The learner is given the eight mukim figures above and asked for the district total. They write three lines of code. The answer comes back, and it is not 65,531. It is **287931831316813759727812916**, a number with twenty-seven digits in it.

Nothing crashed. No error was raised. The program did precisely what it was told.

**The comma in 28,793 made it a piece of text.** Every published Brunei figure uses a thousands separator, and a comma is not a digit. Read into a spreadsheet with the wrong locale, or into a program without being converted, each of those cells is a string of characters that happens to be made of digits. The plus sign then does what it does to text, which is join it end to end. The learner's total is every mukim's population written out in a row.

That failure is loud and therefore harmless. Nobody publishes a district population with twenty-seven digits in it. **The dangerous version of the same bug is quiet**, and this dataset produces that one too. Ask the program to sort the eight mukims from largest to smallest and it reports that the largest place in Belait is **Sukang**, with eighty-one residents, followed by Labi, then Bukit Sawat, then **Melilas** with twenty-nine, and only then Kuala Belait with 28,793. Text sorts character by character, so an 8 beats a 7 and a 7 beats a 2 before length is ever considered.

What makes that output dangerous rather than obviously broken is that parts of it are right. Labi at 727 does come above Bukit Sawat at 759 in the corrupted order, and 727 really is smaller, so a reader spot-checking two adjacent rows finds them correct. Every number printed beside every name is accurate. Only the ordering is nonsense, and ordering is the one column a reader never verifies.

So the learner ends with two habits rather than one. The first is to convert deliberately and strip separators on the way in, rather than assuming that a thing which looks like a number is one. The second is the check that actually catches it: **the parts must reconcile with the published total.** 28,793 plus 18,313 plus 16,813 plus 759 plus 727 plus 81 plus 29 plus 16 is 65,531, exactly the figure the census publishes for the district. When the arithmetic reconciles, the types were right. When it does not, something is a string, or a row is missing, or a total includes something the rows do not.

That reconciliation habit is worth more than the bug it catches. It is the same instinct that makes an engineer check that a mass balance closes, and it does not require knowing in advance what went wrong.

## Does coding still matter when AI can write it?

Test it on the table above; it takes about a minute. Paste the eight mukims into any assistant and ask it to write code that reads a file of those figures and totals them.

Most of the time the code will not handle the comma. Sometimes it crashes, which is fine. Sometimes it reads 28,793 as two separate fields, 28 and 793, because that is exactly what a comma means in a comma-separated file, and then it produces a total that is wrong by tens of thousands and looks entirely reasonable. You will not be warned, because from the program's point of view nothing went wrong.

This is the honest state of the tools. They are very good at producing code that is idiomatic, readable and correct on the data the tutorial author had. They are much weaker at the thing that actually costs money, which is asking what this particular data does that the general case does not. A learner who has been caught by their own comma once never stops asking.

Longer version: [is coding still worth learning in 2026?](https://learn.modernagecoders.com/blog/is-coding-worth-learning-2026)

## Course ladder

Placement follows a task in the free class, never a year group and never which of the district's two systems a child is in.

**Younger beginners, before syntax**
[Kids Coding Blocks](https://learn.modernagecoders.com/courses/kids-coding-blocks-masterclass) · [Scratch Programming](https://learn.modernagecoders.com/courses/scratch-programming-complete-course) · [Creative Coding and Animation](https://learn.modernagecoders.com/courses/creative-coding-animation-mastery) · [Early Maths Foundations](https://learn.modernagecoders.com/courses/early-math-foundations)

**Around eleven to thirteen, the window before a change of school**
[Maths Through Coding](https://learn.modernagecoders.com/courses/maths-through-coding) · [Python and AI for Kids](https://learn.modernagecoders.com/courses/python-ai-kids-masterclass) · [Kids AI Web Development](https://learn.modernagecoders.com/courses/kids-ai-web-development-course) · [Middle School Mathematics](https://learn.modernagecoders.com/courses/comprehensive-middle-school-mathematics-mastery)

**Examination years, O Level or IGCSE**
[Python Complete for Teens](https://learn.modernagecoders.com/courses/python-complete-masterclass-teens) · [HTML and CSS](https://learn.modernagecoders.com/courses/html-css-course-for-beginners-build-real-websites) · [JavaScript for Teens](https://learn.modernagecoders.com/courses/javascript-course-for-teens-beginners-interactive-web) · [Problem Solving and DSA](https://learn.modernagecoders.com/courses/problem-solving-dsa-masterclass-teens) · [High School Mathematics](https://learn.modernagecoders.com/courses/complete-high-school-mathematics-mastery)

**University and working adults**
[Python, AI and Automation](https://learn.modernagecoders.com/courses/python-ai-automation-masterclass-college) · [Data Analysis Mastery](https://learn.modernagecoders.com/courses/data-analysis-mastery-course-college) · [Full Stack Web Development](https://learn.modernagecoders.com/courses/full-stack-web-development-masterclass-college) · [Statistics and Probability](https://learn.modernagecoders.com/courses/statistics-probability-maths-course)

Full catalogue on the [course atlas](https://learn.modernagecoders.com/course-atlas). Teaching order on the [coding roadmap](https://learn.modernagecoders.com/coding-roadmap).

## Practical questions

**Which days?** In Belait an ordinary weekend usually works, which is not something we can say about the capital. The energy sector here largely keeps a Monday to Friday week. Government households in the same district may keep the public sector pattern instead, in which Saturday is a working day, so we ask rather than assume. Brunei's working week is set out on the [country page](https://learn.modernagecoders.com/coding-classes-in-brunei).

**What time?** Brunei sits at UTC plus 8 all year and India at UTC plus 5:30 all year, so the separation is permanently **two and a half hours**: six in the evening in Seria is half past three for the teacher. Families who have done European postings find that surprising, because a schedule agreed in one season normally has to be redone in the next. Here it does not, and it survives a move.

**Format?** Either a group of **five to eight**, grouped on demonstrated ability rather than address, or **one to one** when the objective is narrow. **Twice a week** in each case, so eight or so lessons in a month, taught in **English**. Equipment needed: something with a keyboard, internet that stays up, and audio the teacher can hear.

## Fees

| Plan | Price | Included |
|---|---|---|
| First class | Free | One task, a specific recommendation, no card needed |
| Group | USD 100 per month | 8 live classes, 5 to 8 learners |
| Private | USD 150 per month | 8 live classes, one to one |

Because a single figure is published for every country we operate in, Belait carries no local rate and no expatriate rate, and there is accordingly nothing to haggle over. Nothing is charged to enrol, nothing is bought from us, and no minimum term is asked for. Terms on the [pricing page](https://learn.modernagecoders.com/pricing).

## Is there a centre in Kuala Belait or Seria?

We do not, anywhere in the district. **Nothing is run out of Kuala Belait, Seria or Panaga.** The teaching happens over a live video call originating in India, and the number printed here rings in India too.

For a household in Labi, Sukang, Melilas or Kuala Balai that is not a compromise, it is the only realistic route to a class at the right level.

Other district guides: [Brunei](https://learn.modernagecoders.com/coding-classes-in-brunei) · [Bandar Seri Begawan](https://learn.modernagecoders.com/coding-classes-in-bandar-seri-begawan) · [Tutong](https://learn.modernagecoders.com/coding-classes-in-tutong) · [Temburong](https://learn.modernagecoders.com/coding-classes-in-temburong)

## About Modern Age Coders

Live online coding, AI and mathematics for ages 6 to 67, teaching since 2020, with 10,000+ students across 25+ countries and a 4.9 rating across 547 Google reviews.

If model building rather than programming foundations is what you want: [AI and machine learning classes in Brunei](https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-brunei).

Contact: [WhatsApp](https://wa.me/919123366161) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

Facts last verified 17 August 2026.
