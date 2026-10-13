---
title: "School Holiday Coding Course in Australia | 2026-27 Dates"
description: "Planning school holiday coding in Australia? The 2026-27 holiday dates for five states, the weeks they all share, and a Gantt chart plan for a holiday code project."
canonical: https://learn.modernagecoders.com/school-holiday-coding-course-australia
source: src/pages/school-holiday-coding-course-australia.html
---
> Planning school holiday coding in Australia? The 2026-27 holiday dates for five states, the weeks they all share, and a Gantt chart plan for a holiday code project.

In short

A school holiday coding course gives an Australian student focused time to finish a project when school is out. Holiday dates differ by state: in winter 2027, NSW, Victoria, Queensland, WA and Tasmania all share only Monday 5 July to Sunday 11 July. Modern Age Coders teaches live online lessons that can continue through any state's holidays, and students can plan a holiday project with a Gantt chart.

Good holiday projects

## Three courses that suit a holiday push

Each has a clear end product that fits a two-week break. The free first lesson picks the right one.

[![Game Development for Kids course thumbnail](/images/game-dev-kids.webp)  SHAU / 01 A holiday game, start to finish Ages 8 to 12. A Scratch, Roblox or Minecraft game finished before school goes back. Open the syllabus →](/courses/game-development-masterclass-for-kids)[![HTML & CSS for Beginners course thumbnail](/images/html-css-beginners.webp)  SHAU / 02 A website of your own Teens. A responsive site about a hobby, published by the end of the break. Open the syllabus →](/courses/html-css-course-for-beginners-build-real-websites)[![Hackathon for Teens course thumbnail](/images/hackathon-teens.webp)  SHAU / 03 A hackathon-style build Ages 13 to 17. An idea, a team-style sprint and a demo. Open the syllabus →](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course)

Holiday dates

## School holidays by state, summer 2026 to spring 2027

These are the government school holiday windows as each state publishes them, or, where a state publishes term dates only, the days between the end of one term and the start of the next. Independent and Catholic schools can differ, so check your own school.

| State | Summer 2026 to 2027 | Autumn 2027 | Winter 2027 | Spring 2027 |
| --- | --- | --- | --- | --- |
| NSW (Eastern division) | Friday 18 December to Wednesday 27 January | Monday 12 April to Friday 23 April | Monday 5 July to Friday 16 July | Monday 27 September to Friday 8 October |
| Victoria | Monday 21 December to Wednesday 27 January | Friday 26 March to Sunday 11 April (between terms) | Saturday 26 June to Sunday 11 July (between terms) | Saturday 18 September to Sunday 3 October (between terms) |
| Queensland | Saturday 12 December to Tuesday 26 January 2027, 46 days | Friday 26 March to Sunday 11 April | Saturday 26 June to Sunday 11 July | Saturday 18 September to Monday 4 October |
| Western Australia | Friday 18 December to Sunday 31 January (between terms) | Saturday 10 April to Sunday 25 April | Saturday 3 July to Sunday 18 July | Saturday 25 September to Sunday 10 October |
| Tasmania | Saturday 19 December to Wednesday 3 February (between terms) | Saturday 10 April to Sunday 25 April | Saturday 3 July to Sunday 18 July | Saturday 25 September to Sunday 10 October |

### How to read the table

NSW publishes its holidays as weekday spans; the other states mostly include the weekends at either end. Where we wrote "between terms", the state publishes term dates and we counted the days in between ourselves.

Western Australia notes that its dates are "Term dates published in the Western Australian Government Gazette" and are inclusive. NSW's Western division schools start the school year later, with extra days at the start of summer.

### States not shown

South Australia, the ACT and the Northern Territory did not allow our automated reading of their term-date pages, and we do not get around such blocks. Families there should check their own department's dates.

Lesson times and pauses are always set around your own state's calendar, wherever you live.

Sources, read 7 October 2026: [NSW 2027 term dates](https://education.nsw.gov.au/schooling/calendars/2027); [Victorian school term dates](https://www.vic.gov.au/school-term-dates-and-holidays-victoria); Queensland [term dates](https://education.qld.gov.au/about-us/calendar/term-dates) and [future dates](https://education.qld.gov.au/about-us/calendar/future-dates); [WA future term dates](https://www.education.wa.edu.au/future-term-dates); [Tasmanian term dates](https://www.decyp.tas.gov.au/learning/term-dates/). Dates can change; always confirm with the department.

Shared weeks

## When are all five states on holiday at once?

We put the five states' windows side by side and found the days they all share. The answer is surprisingly short outside summer.

| Break | Shared by all five | Days | Weekdays |
| --- | --- | --- | --- |
| Summer 2026 to 2027 | Monday 21 December 2026 to Tuesday 26 January 2027 | 37 | 27 |
| Autumn 2027 | No shared day: Victoria and Queensland finish on Sunday 11 April, the day before NSW starts | 0 | 0 |
| Winter 2027 | Monday 5 July to Sunday 11 July | 7 | 5 |
| Spring 2027 | Monday 27 September to Sunday 3 October | 7 | 5 |

### Why it matters

For a family, the shared weeks matter when cousins in different states want to code together, or when a national event runs in the holidays.

For us, the differences matter more: a holiday in Brisbane is a school week in Sydney, so we plan holiday lessons around each family's own state, not a national calendar.

### The autumn gap

In autumn 2027, Victoria and Queensland finish their break on Sunday 11 April, and NSW begins on Monday 12 April. Not a single day is shared by all five.

Children enjoy discovering this with code, because it looks impossible until the dates are drawn side by side.

Summer is the exception. From Monday 21 December 2026 to Tuesday 26 January 2027, all five states are on holiday together for 37 days, which includes 27 weekdays. That long shared stretch is the natural time for a larger project: a game with several levels, a first app, or a website with a small database behind it. A learner who plans it in the first week, using the method further down this page, usually finishes with time left to share it before school returns.

Gantt chart

## Draw it as a Gantt chart

A Gantt chart draws each task, or here each state's holiday, as a horizontal bar against a timeline. Overlaps appear where the bars line up. It is how software teams plan releases, and it is a perfect first data-visualisation project.

| State | Bar |
| --- | --- |
| NSW | .........############.. |
| Victoria | ################....... |
| Queensland | ################....... |
| Western Australia | .......################ |
| Tasmania | .......################ |
| All five | .........#######....... |

### Building it in Python

Store each state's start and end as dates, loop over every day in the season, and print a hash where that state is on holiday and a dot where it is not. A final row prints a hash only where every state has one.

Older students draw the same thing with a plotting library, one coloured bar per state, which makes a lovely holiday poster.

### What it teaches

Dates as data, loops over ranges, the logical AND that finds the overlap, and the habit of checking a computed answer against the source table.

It is also honest about its inputs: the chart is only as good as the dates read from each department, which is why we list every source.

Holiday plan

## A two-week holiday project, planned like software

The same Gantt idea turns a holiday into a finished project rather than a half-built one. Here is a plan we use for a ten-weekday break.

| Days | Task | Finished when |
| --- | --- | --- |
| 1 and 2 | Design: what the game or site does, sketched on paper | A one-page plan exists |
| 3 to 6 | Build: the core working version | It runs from start to end |
| 7 and 8 | Test: friends and family try it; bugs are listed | The bug list is empty or accepted |
| 9 | Polish: sound, colours, instructions | A newcomer can use it without help |
| 10 | Show: present it to family or share it | Someone else has played it |

### Lessons through the break

Weekly lessons can continue in the holidays for families who want them, giving a check-in at the start and end of the plan.

### Or a pause

Families can pause for the break and pick up again in the new term. You pay month by month, so pausing is simple.

### Short holidays

Some families use the holidays for a few extra lessons on a project, then return to the usual weekly slot when term starts.

Planning around the long summer break? Our [online coding camp page](/online-coding-summer-camp) shows current camp dates, and our guide to [online classes for Australian kids](/online-coding-classes-for-kids-australia) covers year levels and time zones.

Stages

## From a holiday idea to a finished project

How holiday learners typically progress across a break.

| Stage | What happens |
| --- | --- |
| 1. Choose | Pick one project small enough to finish in the break |
| 2. Plan | Draw a Gantt chart of the days available |
| 3. Build | Work in short, daily sessions, checking the plan |
| 4. Share | Show the finished project before school returns |

### For younger children

Short daily sessions of thirty to forty-five minutes work well, with a parent seeing progress each evening.

A finished Scratch game is a proud way to start the new term.

### For teenagers

A website, an app or a small AI project fits a two-week break.

Planning it as a Gantt chart is itself a skill employers and senior courses value.

The catalogue

## Nine courses that fit the holidays

Grouped by age. Each produces something finished. The free first lesson places the learner.

I

### Children

Ages 6 to 12

SHAU / CHD / 01

#### Holiday games

Scratch, Roblox or Minecraft.

[Open the syllabus](/courses/game-development-masterclass-for-kids)

SHAU / CHD / 02

#### Minecraft builds with code

MakeCode projects.

[Open the syllabus](/courses/minecraft-coding-for-kids-course)

SHAU / CHD / 03

#### Kids hackathon prep

An idea taken to a demo.

[Open the syllabus](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course)II

### Teenagers

Ages 13 to 18

SHAU / TEN / 01

#### A first real website

HTML and CSS, published.

[Open the syllabus](/courses/html-css-course-for-beginners-build-real-websites)

SHAU / TEN / 02

#### Unity game sprint

C# and a playable build.

[Open the syllabus](/courses/complete-game-development-masterclass-for-teens)

SHAU / TEN / 03

#### Teen hackathon track

Build, test, present.

[Open the syllabus](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course)III

### Projects with AI

Ages 8 to 18

SHAU / AI / 01

#### Vibe coding for kids

AI-assisted games, understood.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)

SHAU / AI / 02

#### Vibe coding for teens

Python, web and AI projects.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)

SHAU / AI / 03

#### AI literacy

How AI works, by experiment.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

How lessons run

## Holiday lessons built around a finish line

In the holidays, every lesson points at a finished project by the first day of term.

Mornings

Popular in the holidays, in your state's time.

Afternoons

The usual after-school slot still works.

Weekends

Saturday and Sunday options.

### A clear goal

One project, defined in the first holiday lesson.

### A plan

A Gantt chart of the days available.

### Check-ins

A teacher reviews progress against the plan.

### Your state's dates

Planned around your own holiday window.

### Groups

Fifteen to twenty learners, or one to one.

### Pause if you prefer

Taking the holidays off is fine too.

Student work

## Projects finished in the holidays

Games, sites and tools our students completed over breaks. More are on the [student labs](/student-labs) page.

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife

An AI nutrition coach that reads what you eat and works you toward a target.

by Bhavya · [Open it](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti

A chatbot that answers mathematics and programming questions, built and deployed by a student.

by Harshit · [Open it](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX

An assistant that helps a young person recognise unsafe situations online.

by Vivaan · [Open it](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast application screenshot](/images/projects/skycast.webp)

Web app

#### SkyCast

A weather forecasting site with live conditions for any location.

by Krish

Fees

## Fees

We bill monthly in US dollars outside India, one rate for every country. Nothing is charged to join and no term commitment applies, which makes it easy to keep going through a holiday or pause for one.

Free first class

USD 0

no card required

- A free first lesson
- Help choosing a holiday project
- No card asked

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty learners
- One regular teacher
- Similar age and level
- Monthly, pause any time

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher to yourself
- Holiday times that suit you
- Your own project pace

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Families' Google reviews, reproduced as written.

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

Questions from families

## Common questions about school holiday coding

### Do you run coding lessons in the Australian school holidays?

Yes. Weekly online lessons can continue through school holidays for families who want them, and families can also pause for a break and return in the new term.

### What is a Gantt chart?

A Gantt chart is a planning chart that shows each task, or each period, as a horizontal bar along a timeline, so overlaps and gaps are easy to see. Software teams use it to plan work.

### When are the 2027 winter school holidays?

They differ by state. In 2027, NSW Eastern division schools break from Monday 5 July to Friday 16 July, while Victoria and Queensland break from Saturday 26 June to Sunday 11 July, and WA and Tasmania from Saturday 3 July to Sunday 18 July.

### Is there a week when all states are on holiday together?

Among the five states we checked, all share Monday 5 July to Sunday 11 July in winter 2027 and Monday 27 September to Sunday 3 October in spring 2027, but no single day in autumn 2027.

### Why are SA, the ACT and the NT not listed?

Their term-date pages did not allow our automated reading, and we do not work around such blocks. Families in those places should check their education department's dates.

### What can my child build in a two-week holiday?

A small game, a website, an app or a simple AI project, planned so it is finished and shared before school returns.

### Do lesson times change in the holidays?

They can. Many families move to a morning slot in the holidays, set in their own state's time, then return to the usual time when term starts.

### Do independent schools have the same holidays?

Not always. The dates on this page are for government schools; independent and Catholic schools can set different dates.

### Are holiday lessons live?

Yes. Every lesson is live online with a teacher, in a small group or one to one.

### How much do holiday lessons cost?

The first lesson is free. After that, fees are monthly with no joining fee and no term lock-in, so you can continue or pause around the holidays.

Elsewhere on this site

## Related pages

More for Australian families planning coding around the school year.

### [Coding classes in Australia](/coding-classes-in-australia)

Our main page for Australian families.

### [Online classes for kids](/online-coding-classes-for-kids-australia)

Year levels and time zones.

### [Coding and AI in NSW](/coding-and-ai-classes-in-new-south-wales)

The NSW school system.

### [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar)

Events to aim a holiday project at.

### [Game development for kids](/game-development-for-kids-australia)

A good holiday project path.

### [Free coding options](/free-coding-classes-for-kids-australia-what-you-get)

Clubs and self-guided projects.

Start here

## Book a free first lesson

Tell us your number, a good time and your state. In the first lesson the learner picks a holiday project and sketches its plan with a teacher.

Want to read first? See [how a lesson runs](/how-we-teach) or [every course](/courses).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20our%20child%20to%20do%20some%20coding%20in%20the%20Australian%20school%20holidays.%20Could%20we%20book%20a%20free%20first%20lesson%3F) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp from Australia is the fastest route. We work from India, so replies come from a +91 number; there is no Australian office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/school-holiday-coding-course-australia*
