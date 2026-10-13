---
title: "App Development Course in Australia | Ages 8 to 67, Online"
description: "App development course for Australians aged 8 to 67: block apps for children, cross-platform apps for teens, native apps for adults. Live online, first class free."
canonical: https://learn.modernagecoders.com/app-development-course-australia
source: src/pages/app-development-course-australia.html
---
> An app development course teaches how to design, build, test and publish software for phones and tablets. Beginners use block tools; later students use a cross-platform framework such as React Native or Flutter, or native tools for iOS and Android. Good courses teach touch-friendly design: WCAG 2.2 sets a 24 by 24 pixel minimum target size. Modern Age Coders teaches app development live online to Australians aged 8 to 67, and the first lesson is free.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / App development course

Australia · Ages 8 to 67 · Apps for phones and tablets

# App development course

An app is judged in the first few seconds by a thumb, not a mouse. Buttons that are too small, too close together or impossible to reach one-handed make good code feel broken. Our app development course teaches Australians from age 8 to 67 to design for touch from the first screen, then build, test on a real phone and improve. Children start with blocks, teenagers move to a cross-platform framework, and adults or university students go further into native tools. On this page we show where app development appears in Australian schools and universities, compare the three main ways to build an app, explain publishing for under-18s, and measure every tappable target on this very page against the international accessibility standard.

At a glance: For: Ages 8 to 67; Children: Block-based app making; Teens: Cross-platform frameworks; Adults: Cross-platform or native; Standard: WCAG 2.2 from screen one; Format: Live online lessons; Group: Fifteen to twenty, or one to one; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three app courses for three stages

Blocks for children, a JavaScript framework for teens, and Flutter with native tools for adults. Open a card to read the syllabus.

- [App Making for Kids](/courses/block-coding-app-development-masterclass): Ages 8 to 12: real apps built with blocks, with buttons, screens and simple data.
- [App Development for Teens](/courses/complete-app-development-masterclass-for-teens): React Native for 13 to 18: one codebase, two platforms, tested on the student's own phone.
- [App Development for Adults and Uni](/courses/complete-app-development-masterclass-college): Flutter, iOS and Android: architecture, state, storage and release preparation.

## Where app development appears in Australian education

Mobile apps are not a separate school subject in Australia, but the ideas behind them run from Year 9 into first and second-year university units.

**App development in official course documents, read 13 October 2026**

| Where | What the document says | In practice |
|---|---|---|
| Australian Curriculum, Years 9 and 10 (AC9TDI10P07) | Students "design and prototype the user experience of a digital system", for example with "a no-code user interface prototyping tool to design a simple mobile app" | Screens and flows are designed before code |
| Australian Curriculum, Years 9 and 10 (AC9TDI10K01) | The operating system lets applications "treat input from a mouse and touch screen in the same way" | Touch is an input the system abstracts; size is still the designer's job |
| Monash, FIT2081 | Object-oriented development "in the context of mobile application development for smartphones and tablets" | A full unit built around phone apps |
| UQ, COMP2140 Web/Mobile Programming | Students produce "interactive, cross-platform web/native apps using JavaScript frameworks" | One codebase for web and phone |

### Design comes first

ACARA puts prototyping before programming for a reason: most app problems are design problems. A wireframe tested with three people catches more issues than a week of coding.

Our students sketch every screen, mark every tappable area and test the sketch before writing a line.

### Accessibility is part of the build

The same Years 9 and 10 content asks students to make content accessible with built-in features, such as text alternatives that screen readers can announce.

We treat target sizes, labels and contrast as requirements, checked like any other test.

Sources, read 13 October 2026: ACARA, [Digital Technologies Years 7 to 10](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx); [Monash FIT2081](https://handbook.monash.edu/2026/units/FIT2081); [UQ COMP2140](https://programs-courses.uq.edu.au/course.html?course_code=COMP2140).

## We measured every tappable target on this page

WCAG 2.2, the W3C accessibility standard, sets a minimum size for anything a finger or pointer must hit. We wrote a short script to check this page against it at phone width, the same audit students run on their own apps.

Success criterion 2.5.8, at Level AA, says "The size of the target for pointer inputs is at least 24 by 24 CSS pixels", with exceptions. The two that matter most are Spacing, where a small target still passes if a 24 pixel circle centred on it touches no other target or circle, and Inline, for links inside a sentence. A stricter criterion, 2.5.5 Target Size (Enhanced) at Level AAA, asks for 44 by 44. Our script loaded this page in Chromium at 390 pixels wide, listed every link, button and form field, and tested each one.

**Pointer targets on this page at 390 CSS pixels wide, measured 13 October 2026 (our calculation)**

| Check | Targets | What it means |
|---|---|---|
| Targets measured (sticky booking bar excluded) | 63 | Links, buttons and form fields that are visible |
| Smaller than 24 by 24 in at least one direction | 36 | A size-only check would flag all of these |
| Of those, links inside a sentence | 9 | Exempt under the Inline exception |
| Of those, standalone small targets | 27 | Must pass the Spacing test instead |
| Standalone small targets passing the Spacing test | 27 | Their 24 pixel circles touch nothing else |
| Failing 2.5.8 after both exceptions | 0 | Real problems to fix |
| Smaller than 44 by 44 in at least one direction | 46 | Short of the stricter AAA criterion |

### The size-only check over-reports

Flagging every target under 24 pixels would have listed 36 problems. Applying the exceptions properly left 0. An audit that ignores the rules it is checking produces noise, and people learn to ignore noise.

### Passing AA is not the same as easy

46 of 63 targets are below 44 by 44. They are legal, but a reader with a tremor or a large thumb will still miss some of them. Apps aimed at older users or children deserve the larger size.

### Our approximation, stated

The Inline test is judged by a rule of thumb (a link inside a longer run of text), and the User Agent and Essential exceptions are not modelled. A human review still follows any automated check.

### When the simple rule wins

For an app you are designing from scratch, the clever exceptions are not worth it. "Every tappable thing is at least 44 by 44" is one sentence, needs no geometry and passes both criteria.

The spacing calculation earns its keep only when auditing a design you cannot change, which is exactly where we used it.

### What students take from it

The script is about forty lines: list elements, read their boxes, apply the rules. Students run it on their own apps each week and keep the numbers in a table, so improvement is visible.

Native apps use their platform's accessibility inspectors, but the rule being checked is the same.

Standard: W3C, [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/), W3C Recommendation 12 December 2024, success criteria 2.5.8 and 2.5.5. Measurement: our script, Playwright with Chromium, viewport 390 by 844 CSS pixels; the page changes as it is edited, so the figures are dated.

## Native, cross-platform or web: three ways to build an app

Each route suits a different learner and a different app. None is a wrong first choice; switching later is normal.

**The three main routes**

| Route | Tools | Strengths | Costs |
|---|---|---|---|
| Native | Swift for iOS, Kotlin for Android | Full access to the device and its accessibility tools | Two codebases for two platforms |
| Cross-platform | React Native, Flutter | One codebase for both; large communities | Some device features need extra work |
| Web and installable web apps | HTML, CSS, JavaScript | Runs anywhere; no store account needed | Less access to phone hardware |

### Our usual order

Children make block apps first, because the screen, button and event ideas are identical in every later tool. Teenagers then learn JavaScript and React Native, which also opens up the web.

Adults choose by goal: Flutter for one codebase, Swift or Kotlin for platform depth.

### What every route shares

State that survives a phone call interrupting the app, data saved to the device, screens that work in portrait and landscape, and targets a thumb can hit.

These are taught as habits, not as features of one framework.

## Publishing an app, and what changes under 18

Building an app needs no account. Putting it in a store does, and stores set their own rules for who may hold a developer account.

### For students under 18

We do not ask under-18s to open store developer accounts in their own names. Their apps run on their own phones during development, and a finished app can be shared as an installable web app, which needs no store at all.

Families who want a store listing do it through a parent or guardian's account, under that store's own terms, read by the family.

### For adults

Adults set up their own developer accounts when an app is ready, and we cover the review process: privacy information, screenshots, testing builds and responding to reviewer feedback.

Most first apps never need a store; a working app shared with friends is already a real result.

**What students under 18 build, and how they share it**

| Age | Typical app | How it is shared |
|---|---|---|
| 8 to 12 | A quiz, a pet-care timer, a story with choices | Inside the block tool, on a family device |
| 13 to 15 | A habit tracker or class timetable app | As an installable web app or a test build on their own phone |
| 16 to 17 | An app with sign-in and stored data | Installable web app; store listing only through a parent's account |

## A term of app development, week by week

An outline of a ten-week term for a teenager in our cross-platform course. Children and adults follow the same arc with different tools.

**A sample ten-week term**

| Weeks | Focus | Finished by the end |
|---|---|---|
| 1 to 2 | Sketches, user stories and a clickable prototype | A tested paper or no-code prototype |
| 3 to 4 | Screens, layout and navigation | Three working screens with 44 pixel targets |
| 5 to 6 | State and saving data on the device | Data that survives closing the app |
| 7 | Accessibility review | Labels, contrast and target audit passed |
| 8 to 9 | Fetching data and handling no connection | A friendly offline message instead of a crash |
| 10 | Testing with real users and a demo | A short demo and a list of next fixes |

## Four levels of app-building skill

Students who build weekly usually reach the third level in two to three terms.

**From first screen to finished app**

| Level | What you can do |
|---|---|
| 1. Screen maker | Lay out a screen with buttons that respond to touch |
| 2. Flow builder | Link several screens and keep track of what the user chose |
| 3. App builder | Save data, handle errors and pass an accessibility audit |
| 4. Releaser | Prepare a build others can install, test it with users and fix what they find |

### Does my child need a phone of their own?

No. Block apps run on a computer or a family tablet, and teen projects can be tested in an emulator on a laptop.
A phone helps later, because nothing replaces testing with a real thumb.

### Should an adult start native or cross-platform?

Cross-platform, unless there is a clear reason to choose one platform. One codebase halves the first year's work.
Native comes naturally afterwards for those who want it.

## App and front-end courses

Three bands by age. Several students take one app course and one supporting course in parallel.

### First apps

Ages 8 to 12

- [App Making for Kids](/courses/block-coding-app-development-masterclass): Real apps with blocks.
- [Web Development for Kids](/courses/kids-ai-web-development-course): Pages that work on any phone.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Scratch to games, apps and AI.

### Cross-platform

Ages 13 to 18

- [App Development for Teens](/courses/complete-app-development-masterclass-for-teens): React Native, both platforms.
- [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web): The language under the framework.
- [React for Teens](/courses/react-for-teens-complete-masterclass): Components and state.

### Further

Adults and university

- [Flutter Course](/courses/complete-flutter-app-development-masterclass-college): Dart to cross-platform apps.
- [Swift and iOS](/courses/complete-swift-programming-masterclass-college): SwiftUI from zero.
- [Kotlin and Android](/courses/complete-kotlin-programming-masterclass-professional): Native Android apps.

## App lessons, scheduled in your time

The team teaches from India during hours that line up with Australian after-school and evening times. Bookings are made in the learner's own state time, and shift when that state changes its clocks.

- **After school** Children and teenagers, on weekdays.
- **Evening** Adults and university students, by arrangement.
- **Weekend** Longer build and testing sessions.

- **Free first class** One screen designed and built together, then advice on the right route.
- **Groups** Fifteen to twenty learners testing each other's apps.
- **One to one** For a specific app idea, a unit or a deadline.
- **Phones in the loop** Students test on real devices whenever they can.
- **Accessibility checked** Every app gets a target and label audit.
- **Their own app** Teachers advise; learners design and type.

## Fees for the app development course

Learners in Australia are charged a flat monthly amount in US dollars. Nothing is due when enrolling, and lessons can stop at any month's end.

- Free first class: USD 0. One screen designed and built together. A route recommendation for this learner. No payment details needed.
- Group batch: USD 100 a month. Fifteen to twenty learners per group. Peer testing on real phones. The same teacher each week. Cancel at any month's end.
- One to one: USD 150 a month. Built around one learner's app idea. Pace set by the learner. Lesson times that suit the household.

## Questions about app development courses in Australia

### What is an app development course?

It is a course that teaches how to design, build, test and share software for phones and tablets, from screen layout and touch input to saving data and preparing a release.

### What age can my child start making apps?

Around 8, with block-based tools. From about 13, students can move to a cross-platform framework such as React Native.

### What is the minimum touch target size?

WCAG 2.2 success criterion 2.5.8, at Level AA, sets 24 by 24 CSS pixels with some exceptions. The stricter 2.5.5, at Level AAA, sets 44 by 44.

### Is app development in the Australian Curriculum?

Years 9 and 10 Digital Technologies includes designing and prototyping user experiences, with a simple mobile app given as an example. Full app programming usually comes later, often at university.

### Can a teenager publish an app on a store?

Stores set their own developer-account rules. We do not ask under-18s to open accounts in their own names; families who want a listing use a parent or guardian's account under the store's terms.

### Native or cross-platform: which should I learn?

Cross-platform for most first apps, because one codebase runs on both major phone systems. Native tools suit learners who need full access to one platform.

### Do I need a Mac to build apps?

Not to begin. Block tools, web apps, Flutter and React Native all start on Windows. Building and signing iOS releases needs Apple tooling later on.

### What does the course cost?

The first lesson is free and needs no card. Monthly fees for groups and one-to-one lessons are listed in the fees section.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): Every Australian guide, by place and topic.
- [Game programming course](/game-programming-course-australia): Interactive software of a different kind.
- [Java classes online](/java-classes-online-australia): The object-oriented base under many Android apps.
- [Coding languages for kids](/kids-coding-languages-australia): Which language suits which age.
- [Video game design for kids](/video-game-design-for-kids-australia): Design thinking for younger makers.
- [One-on-one coding tutor](/one-on-one-coding-tutor-australia): Private lessons for one app idea.

## Contact

Book the free first class at [https://learn.modernagecoders.com/app-development-course-australia](https://learn.modernagecoders.com/app-development-course-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
