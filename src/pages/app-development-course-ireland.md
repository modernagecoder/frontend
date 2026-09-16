---
title: "App Development Course in Ireland | Live Online"
description: "An app development course for learners in Ireland: build, test and publish a real mobile app, with Irish public apps read as worked examples. First class free."
canonical: https://learn.modernagecoders.com/app-development-course-ireland
source: src/pages/app-development-course-ireland.html
---
> App development is taught here as the whole job: decide what the app is for, design screens that make sense, write the code, test it on real devices, publish it, then keep it working. Children start with block-based apps, teenagers and adults build cross-platform apps with real data behind them. Ireland gives us unusually good material, because the code of a nationally used app is public and readable. Classes are live, in groups of five to ten at one level or one to one. The first is free, then USD 100 a month in a group or USD 150 a month one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Ireland](/coding-classes-in-ireland) / App development, Ireland

Ireland · Mobile apps · Ages 8 to adult

# App development course in Ireland

Almost nobody learning to build apps ever sees a real one from the inside. Ireland is unusual here: when the State built its COVID Tracker app, it published the source code on GitHub on 26 June 2020, eleven days before the app itself appeared on the App Store and Google Play. Anyone can still read it. That single decision makes this country a better place to learn app development than most, because the gap between a tutorial app and a shipped one, the permissions, the privacy notices, the testing, the updates, the eventual retirement, is exactly where beginners are usually left guessing. This page uses two Irish public apps as worked examples, sets out what the national figures say about how people here actually use their phones, and explains how our classes take a learner from an idea to something published.

At a glance: For: Ages 8 to adult; Builds: A real app, published; Covers: Design, code, test, release; Platforms: Android and iOS; Group: Five to ten at one level; Or: One to one; Hours: After school and evenings, Irish time; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three ways to build an app

For younger builders, for teenagers, and for students and adults who want a professional stack. Each card opens the syllabus.

- [App Development for Teens](/courses/complete-app-development-masterclass-for-teens): A complete phone app designed by the student, built over a few months and put in the hands of friends and family.
- [App Development Masterclass](/courses/complete-app-development-masterclass-college): For college students and adults: a cross-platform app with real data, proper navigation, testing and a release process.
- [Flutter Masterclass](/courses/complete-flutter-app-development-masterclass-college): One codebase for Android and iOS, the approach many small teams choose when they cannot maintain two apps.

## The COVID Tracker app, still readable today

It is the most widely used Irish app whose code is public, and it is a full course in itself. These are the facts as the State published them.

**The COVID Tracker app, from gov.ie and its public repository**

| Event or detail | What was published |
|---|---|
| Source code | Released on 26 June 2020 on a GitHub site under the HSEIreland organisation, before launch |
| Launch | 7 July 2020, on the App Store and Google Play |
| How it was built | React Native, targeting iOS and Android, with TypeScript as the repository's main language, under an MIT licence |
| Detection testing | Testing showed the app "was able to accurately detect 72% of close contacts using the Google Apple API" |
| Uptake | By 2 October 2020, "nearly 2 million" downloads and an active user base of 1.3 million, which the Department put at 34% of adults |
| Reuse abroad | The code was released as COVID Green through the Linux Foundation and used by other jurisdictions, including several US states |
| Retirement | Removed from the stores on 30 June 2023 and switched off completely at the start of August 2023 |

### Publishing code is a decision

The Department framed it as transparency: the code "provides complete transparency in relation to how the app functions" for people who can read it. Being one of those people is a real form of citizenship.

### A number worth understanding

The 72% detection figure is not a flaw hidden in a footnote. It is a measured limitation, published before launch. Students learn to look for that number in any system.

### Apps end

This one had a retirement date, a plan and an announcement. Most tutorials never mention that an app is a thing you must eventually switch off.

In class, learners read the repository rather than admire it: how screens are organised, where settings live, how the project is configured for two platforms from one codebase.

It is archived, so it is a 2020 codebase. Reading older code and saying what you would do differently now is a professional skill, and a satisfying one.

The server side of the same system was published separately and is covered on our [full stack page](/full-stack-software-development-course-ireland).

One more detail worth noticing: before launch, the State reported that 82% of the population said they would be willing to install a contact tracing app. Stated intention and actual installs are different things, and comparing the two is a good lesson in reading claims about adoption.

Sources, read 16 September 2026: [gov.ie, COVID Tracker app](https://www.gov.ie/en/department-of-health/services/covid-tracker-app/); [publication of the source code, 26 June 2020](https://www.gov.ie/en/department-of-health/press-releases/department-of-health-and-the-hse-announce-the-publication-of-the-covid-tracker-app-data-protection-impact-assessment-and-source-code/); [uptake and reuse, 2 October 2020](https://www.gov.ie/en/department-of-health/press-releases/minister-for-health-welcomes-launch-of-contact-tracing-apps-in-new-york-and-new-jersey-based-on-the-irish-contact-tracing-app/); the repository [HSEIreland/covid-tracker-app](https://github.com/HSEIreland/covid-tracker-app). We have no connection with the HSE or the Department of Health.

## TFI Live, and the hard part of any app

The transport app most people in Ireland have on their phone shows a truth that no tutorial conveys: the code is rarely the difficult part.

### What it is

TFI Live launched on 20 February 2023, replacing two earlier apps, and gives real-time departures across Bus Éireann, Dublin Bus, Go-Ahead Ireland, Luas and Iarnród Éireann, with journey planning across licensed operators. No account is needed to use those features.

Its own page displays over 1.5 million downloads, 400,000 daily users and more than 1,600 timetables and routes. Those figures carry no date on the page, so we quote them as displayed when we read it.

### What it admits

The same page says the app "is still reliant on information from numerous systems and business processes within transport operators", even on a more reliable platform than before.

That sentence is the whole lesson. An app that shows live information is a thin layer over other people's data, and its reputation depends on feeds it does not control. Students design for that: what does the screen show when a feed is late, missing or wrong?

### Design for the bad day

Every screen gets three states in our classes: loading, empty and broken. Most student apps only ever get the happy path.

### Respect the network

Irish commuters lose signal in tunnels and on trains. Caching and graceful failure are not advanced topics; they are the job.

### Another public example

The HSE Health App reported over 125,000 registrations and more than 210,000 downloads in January 2026, and is open to people aged 16 and over.

Sources: [Transport for Ireland, TFI Live](https://www.transportforireland.ie/available-apps/tfi-live/) and its [launch announcement](https://www.transportforireland.ie/news/new-tfi-live-app-is-available-now/); [gov.ie on the HSE Health App](https://www.gov.ie/en/department-of-health/press-releases/minister-for-health-welcomes-increase-in-hse-health-app-usage-as-registrations-pass-125000/), read 16 September 2026. We are not connected with either body.

## How people in Ireland actually use their phones

Worth knowing before you design anything. These are the Central Statistics Office's figures, with their dates attached, because the device numbers are not annual.

**Connectivity and devices in Ireland, CSO**

| Measure | Figure | Year |
|---|---|---|
| Internet users aged 16 and over who used a mobile phone or smartphone to go online | 96% | 2023, the latest year in the device table |
| The same measure, aged 30 to 44 | 100% | 2023 |
| Aged 45 to 59 | 97% | 2023 |
| Aged 60 to 74 | 92% | 2023 |
| Households with internet access | 95%, mainly fixed broadband at 87%, with 29% using mobile broadband | 2025 |
| Internet users doing internet or mobile banking | 94%, up seven percentage points on 2024 | 2025 |
| Using social networking | 75% | 2025 |

The practical conclusion is blunt: in Ireland you design for a phone first, and for older users as much as younger ones, since even the 60 to 74 group was at 92% in 2023.

Note what we are not doing here. There is no 2024 or 2025 device figure published, so we date the 96% to 2023 rather than implying it is current. That habit matters in a portfolio too.

The banking and social figures include activity through apps, by the CSO's own definition, which is why they belong on a page about app development at all.

Younger users and their habits are covered on [coding classes for teens](/best-coding-classes-for-teens-ireland), and the adult picture on [coding classes for adults](/best-coding-classes-for-adults-ireland).

Sources: CSO tables [ICA101](https://data.cso.ie/table/ICA101) and [ICA102](https://data.cso.ie/table/ICA102); [Internet Coverage and Usage in Ireland 2025](https://www.cso.ie/en/releasesandpublications/ep/p-isshict/internetcoverageandusageinireland2025/householdinternetconnectivity/); [Household Digital Consumer Behaviour 2025](https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/internetactivities/), read 16 September 2026.

## Five rungs from idea to published app

Children move slowly and adults quickly, but nobody skips a rung. Publishing is part of the course, not an optional extra.

**The app route**

| Rung | What the learner does |
|---|---|
| 1. The idea, narrowed | Describes one thing the app does for one kind of person |
| 2. Screens that make sense | Sketches the flow before writing code, and cuts half of it |
| 3. It works | Builds the real screens, with data, on a real device |
| 4. It survives | Handles loading, empty and broken states, and slow connections |
| 5. It ships | Publishes or distributes it, then fixes what real users find |

### Which technology?

Most learners build cross-platform, so one codebase serves Android and iOS. Learners aiming at a specific platform go native instead, and the free class helps decide.
How this fits with everything else is on the [coding roadmap](/coding-roadmap).

### About the app stores

Publishing to a store needs a developer account, which costs money and, for under-18s, an adult. Many students distribute directly to friends and family instead, which teaches the same lessons.
We are honest about that from the start, so nobody is surprised at the end of a project.

## Nine live courses for app builders

By age and stage. The free first class decides where a learner begins.

### Young builders

First apps

- [Block Coding App Development](/courses/block-coding-app-development-masterclass): A first working app, without typing.
- [App Development for Teens](/courses/complete-app-development-masterclass-for-teens): A real phone app, designed and finished.
- [Web and AI for Kids](/courses/kids-ai-web-development-course): The web side, for younger makers.

### Students and adults

Professional stacks

- [App Development Masterclass](/courses/complete-app-development-masterclass-college): Cross-platform apps with real data.
- [Flutter Masterclass](/courses/complete-flutter-app-development-masterclass-college): One codebase, both platforms.
- [Swift Masterclass](/courses/complete-swift-programming-masterclass-college): Native building on Apple platforms.

### Behind the app

What it talks to

- [Kotlin Masterclass](/courses/complete-kotlin-programming-masterclass-professional): The modern language of Android work.
- [MERN Stack Development](/courses/mern-stack-development-masterclass-college): The server and database an app needs.
- [Git and GitHub for Professionals](/courses/git-github-advanced-version-control-masterclass-for-professionals): Releases you can roll back.

## Building on a real device, week by week

Classes are live, taught from India at a weekly hour fixed in Irish time. Because India holds one clock all year and Ireland changes twice, our teachers are four and a half hours ahead through the Irish summer and five and a half in winter. Younger learners take after-school slots and adults evenings.

- **After school** Children and teenagers, Irish time.
- **Evening** College students and working adults.
- **Weekend** Longer sessions when a release is close.

- **A free first class** You sketch an app idea with a teacher and build the first screen, then hear what building the rest involves.
- **Groups of five to ten** Learners at one level who test each other's apps, which is how real bugs get found.
- **One to one** For a specific product, a deadline or a platform choice that differs from the group.
- **On a real phone** Apps run on the learner's own device early, because simulators hide the problems that matter.
- **Three states per screen** Loading, empty and broken are designed alongside the happy path, every time.
- **A finished thing** Every course ends with an app somebody else can install and use, and a short write-up of how it works.

## Fees

One monthly price in US dollars, the same in every country outside India, for any course here and any age. No enrolment fee, no annual commitment, and no charge for the first class.

- Free first class: USD 0. An app idea sketched and a first screen built. An honest view of the right course. No card required.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher throughout. Apps tested by the group weekly. A certificate at the end.
- One to one: USD 150 a month. A teacher to yourself. Your own product or platform. Good for a deadline.

## What learners in Ireland ask about building apps

### What age can a child start building apps?

From about eight with block-based tools, which produce a genuinely working app. Typed code usually starts around twelve or thirteen.

### Android or iPhone first?

Most learners build cross-platform so one codebase covers both. If you must pick one, pick the phone you own, because testing on a real device matters more than the platform.

### Do I need a Mac?

Not for cross-platform work or Android. Publishing to Apple's store does require a Mac at some point, and we will tell you before you choose that route.

### Can my app go on the App Store or Google Play?

It can, though both require a paid developer account, and under-18s need an adult to hold it. Many students distribute to friends and family instead.

### Is there real Irish app code I can read?

Yes. The State published the COVID Tracker app's source code in June 2020 under an MIT licence. It is archived now, so read it as a 2020 codebase.

### How long does a first app take?

A small finished app usually takes two to four months of weekly lessons plus practice. The ideas can be built in a week; finishing takes longer.

### Do we need to design as well as code?

Yes, and it is part of the course. Sketching screens before coding saves more time than any technical trick.

### What does it cost?

The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, billed in US dollars, with no enrolment fee.

### When do classes run?

After school, evenings or weekends, at a weekly hour agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.

### What happens after I send the form?

We ring at a sensible Irish hour and arrange the free class. Nothing is charged unless the learner continues.

## Related pages

- [Full stack software development](/full-stack-software-development-course-ireland): The server an app talks to.
- [Java classes in Ireland](/java-classes-ireland): A route into Android work.
- [Best coding classes for teens in Ireland](/best-coding-classes-for-teens-ireland): For secondary students.
- [Transition Year coding course](/transition-year-coding-course-ireland): An app as a TY project.
- [Best coding classes for adults in Ireland](/best-coding-classes-for-adults-ireland): Starting later.
- [Coding classes in Ireland](/coding-classes-in-ireland): The national page.

## Contact

Book the free first class at [https://learn.modernagecoders.com/app-development-course-ireland](https://learn.modernagecoders.com/app-development-course-ireland#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
