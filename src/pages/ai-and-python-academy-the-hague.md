---
title: "AI and Python Academy, The Hague | Build Real AI"
description: "The Hague is where the Netherlands learned what a biased risk model costs. Learn to build AI and test for fairness, live online for ages 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-python-academy-the-hague
source: src/pages/ai-and-python-academy-the-hague.html
---
> The Hague is where the Netherlands learned what a biased risk model costs. Learn to build AI and test for fairness, live online for ages 6 to 67. First lesson free.

In short

Modern Age Coders teaches learners in The Hague, aged six to sixty-seven, a live online AI and Python track: typed Python, real data, models whose errors are measured, and agents whose decisions can be traced. Every model on the track is checked group by group, because an overall error rate can look acceptable while one group carries most of the false alarms. The reason is local and documented: the risk model in the childcare-benefits case, which the data protection authority found had used nationality unlawfully. Teaching happens in English, either in a group of fifteen to twenty at one level or with a teacher of your own. There is no charge for the first lesson; afterwards the group rate is USD 100 a month and private tuition USD 150.

Start here

## Three courses for learners in The Hague

One for a child learning what AI is and is not, one for a teenager ready to work with real data, one for the adult whose work involves data about people. Each opens its own syllabus and timetable.

[![AI Literacy for Kids (Ages 8 to 14) course thumbnail](/images/ai-literacy-for-kids.webp)  DHG / 01 AI Literacy for Kids What an AI system does with the examples it learns from, and why a program can be unfair without anyone intending it: explained with games and examples a ten-year-old can check. Open the syllabus →](/courses/ai-literacy-for-kids-course)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)  DHG / 02 Data Science for Teens Python for real datasets, with the habit of splitting every result by group before trusting it, the check at the centre of this page. Open the syllabus →](/courses/data-science-course-for-teens-python-data)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)  DHG / 03 Data and AI Analytics for Non-Programmers For the professional in a ministry, agency or organisation whose spreadsheets and AI tools make decisions about people: how to break results down and ask who is affected. Open the syllabus →](/courses/data-and-ai-analytics-for-non-programmers-course)

The case

## The risk model the whole country now studies

This section quotes three primary documents: the government's letter reporting the data protection authority's findings, the parliamentary committee's own announcement, and the prime minister's statement. It does not try to retell the whole affair, which is far larger than any model.

On **17 July 2020** the State Secretary for Finance, A.C. **Van Huffelen**, sent parliament the government's response to a report by the Autoriteit Persoonsgegevens on how the benefits department, **Toeslagen**, had processed the nationality of childcare-allowance applicants. The letter, **Kamerstuk 31066**, nr. 683, sets out three ways nationality was processed. All three were judged **onrechtmatig**, unlawful, and two of them **discriminerend**, discriminatory.

One of the three was a **risk classification model** that selected applications for checking. The letter is plain about its effect: an application from non-Dutch nationals, in combination with other indicators, therefore had a greater chance of being selected for a check. Since **October 2018**, it adds, nationality has no longer been used in the model, and in June 2019 the department decided to stop running queries based on nationality.

On **17 December 2020** the parliamentary committee on the childcare allowance, chaired by **Chris van Dam**, handed its final report to the Speaker of the House, **Khadija Arib**. It found that fundamental principles of the rule of law had been violated in the approach to fraud; that the ministry had run the allowance as a mass process; that parliament and cabinet had passed legislation that was rock-hard; and that the administrative courts had for years helped keep it going. A mistake in an application, it wrote, was quickly seen as fraud, so that parents were wrongly branded.

On **15 January 2021** the prime minister told the King that he had offered the resignation of the whole cabinet. If the whole system has failed, he said, responsibility can only be carried together, and he spoke of thousands of parents to whom great injustice had been done.

| Date | Document | What it records |
| --- | --- | --- |
| 17 July 2020 | Letter of the State Secretary for Finance (Kamerstuk 31066, nr. 683) | Three processings of nationality judged unlawful, two discriminatory; nationality out of the risk model since October 2018 |
| June 2019 | Same letter | Toeslagen decided to stop queries based on nationality |
| 17 December 2020 | Tweede Kamer announcement of the final report | Ongekend onrecht handed over; principles of the rule of law violated |
| 15 January 2021 | Statement of the prime minister | Resignation of the whole cabinet offered to the King |

Sources: [Kamerstuk 31066, nr. 683, letter of 17 July 2020](https://zoek.officielebekendmakingen.nl/kst-31066-683.html); [Tweede Kamer, Eindverslag onderzoek kinderopvangtoeslag overhandigd](https://www.tweedekamer.nl/nieuws/kamernieuws/eindverslag-onderzoek-kinderopvangtoeslag-overhandigd); [Rijksoverheid, statement of the prime minister, 15 January 2021](https://www.rijksoverheid.nl/documenten/videos/2021/01/15/verklaring-minister-president-rutte-na-afloop-van-ministerraad-15-januari-2021). All read 15 September 2026; the documents are in Dutch and are translated here as closely as possible. We have no connection with any of the bodies named.

The test

## The check that brings it into view: mistakes counted group by group

No single test makes a model fair, and the documents above describe failures no test could have caught. But one habit catches the specific problem of a model that treats groups differently, and it is simple enough to teach a teenager.

### A column can stand for a group

Nationality in a risk model is the obvious case, because the column names the group outright. The harder lesson is that removing such a column does not remove what the rest of the data reveals. Other columns can carry much of the same information, so a model can go on sorting people by group after the group itself has been deleted. The only way to know is to measure.

### Count mistakes per group

A model that flags applications for checking makes two kinds of mistake: it flags people who did nothing wrong, and it misses some who did. The first kind, false alarms, is the one that falls on innocent people. Counted over everyone, the false-alarm rate can look small. Counted separately for each group, it can show that one group carries several times its share.

### Decide what a flag leads to

A flag is the start of a process, and the harm depends on what follows it: a friendly question, or a demand to repay. The committee's phrase, that a mistake was quickly seen as fraud, describes what happens when that next step is built without room for error. Designing it is part of building the model.

| Group | Applications | Of which correct | Correct but flagged | False-alarm rate |
| --- | --- | --- | --- | --- |
| Group A | 800 | 780 | 25 | 3.2 percent |
| Group B | 200 | 195 | 26 | 13.3 percent |
| Everyone | 1,000 | 975 | 51 | 5.2 percent |

Read the last row alone and the model looks tolerable: about one correct application in twenty is wrongly flagged. Split the same row by group and the picture changes. A correct applicant in group B is wrongly flagged about four times as often as one in group A, 13.3 percent against 3.2, and nothing in the overall figure hints at it.

The numbers are invented for teaching, and they describe no real system. The arithmetic is the point: 25 of 780, 26 of 195, and 51 of 975.

The check takes a few lines of Python once the groups are known, and learners on our track write it for every model that sorts people: selection rates and false-alarm rates for each group, side by side, before anyone relies on the model.

What the check cannot do is decide what is acceptable, or whether a model should be used at all. Those are human decisions, and in the case above they were made, and then examined, by parliament, the courts and the government.

The worked example is invented and represents no real model or dataset. The lessons drawn are ours, not those of any body named in the section above.

At every age

## Fairness as a habit, from the first program to the working model

The group-by-group check sounds advanced, but its simplest form fits a child's first program, and its full form fits a professional's daily work in a city of ministries and international organisations.

A child who writes a quiz program can already ask whether it is fair: does it give everyone the same questions, and does it mark every answer the same way? That question, asked early and often, is the root of everything this page describes.

A teenager who trains a first model on real data learns to split the results: how well does it do for this group, and for that one? The split takes minutes and changes how the teenager reads every accuracy figure afterwards.

Adults in The Hague often work where data about people is processed every day, in ministries, agencies, international organisations and firms that serve them. For them the check is practical: before a spreadsheet rule or an AI tool is used to sort people, look at who it flags and how often it is wrong for each group.

For the city's schools and districts, see [coding classes in The Hague](/coding-classes-in-the-hague) and [Den Haag Centrum](/coding-classes-in-the-hague-centrum); for the province, [Zuid-Holland](/coding-classes-in-zuid-holland). The [national academy page](/ai-and-python-academy-netherlands) covers the country.

The five rungs

## From a fair quiz to a model checked group by group

The rungs are climbed in order. Data comes before models because unfairness usually starts in the data, and measurement comes before agents because an agent that acts on people must first be shown to treat them evenly.

| Rung | Usually | The fairness question learned |
| --- | --- | --- |
| 1. Python by hand | Groep 6 to 8, or any adult beginner | Does my program treat every input by the same rule? |
| 2. Data | Brugklas to the third year | Who is in this data, who is missing, and what does each column reveal? |
| 3. Models | Havo 4 to vwo 6, students, adults | How often is the model wrong for each group, not just overall? |
| 4. Agents | Upper school and beyond | Which decisions about people may the program not take alone? |
| 5. Publishing | At every stage | Are the group results written down where others can check them? |

### Why the data rung matters most here

Most unfair models are built from data that was already uneven: some groups checked more often in the past, some recorded differently, some barely present. A learner who has studied a dataset before modelling it sees those patterns before the model copies them.

Our general order of teaching, subject by subject, is on the [coding roadmap](/coding-roadmap).

### How the rungs meet a Hague school career

Groep 6 to 8 is the natural moment for rung 1, with a pause in the weeks of the doorstroomtoets, and the year a pupil chooses a profile is a sensible time to sample rung 2. Pupils at the city's international schools join the same rungs at the same ages.

Adults usually start at rung 2, with their own work data in mind, often one to one.

The catalogue

## Eleven live courses for The Hague, placed by what a learner can do

Arranged by stage of life, from primary school to working adult. Every course has its own page with timetable and fee, and where a learner begins is settled in the free lesson, not by this list.

I

### Children, groep 3 to 8

First programs, and first questions about fairness

DHG / KIDS / 01

#### AI Literacy for Kids

Where an AI system gets its ideas, how it can end up unfair with nobody meaning it, and the questions a child should put to any answer that sounds certain.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

DHG / KIDS / 02

#### Python and AI for Kids

Real Python for nine- to twelve-year-olds, from turtle pictures and simple games to a program that learns a rule and is then tried on cases it has never seen.

[Open the syllabus](/courses/python-ai-kids-masterclass)

DHG / KIDS / 03

#### Scratch Coding for Kids

Block-based games for the youngest learners, including quizzes that must mark every player the same way.

[Open the syllabus](/courses/scratch-programming-complete-course)II

### Teenagers, havo, vwo and international schools

Real data, real models, and results split by group

DHG / TEEN / 01

#### Data Science for Teens

Reading, cleaning and plotting real data, and breaking every result down by group before drawing a conclusion.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

DHG / TEEN / 02

#### AI and Machine Learning for Teens

Statistics, classical models and neural networks, each model tested for how its errors fall across groups.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

DHG / TEEN / 03

#### Python for Teens

The two-year Python foundation, for the teenager who wants to understand the code behind the headlines.

[Open the syllabus](/courses/python-complete-masterclass-teens)

DHG / TEEN / 04

#### AI Tools for Teens

Using AI tools for study and projects, with attention to privacy, bias and when not to trust the output.

[Open the syllabus](/courses/teens-ai-tools-mastery-course)III

### Students and working adults

Data, models and AI tools that affect real people

DHG / PRO / 01

#### Data and AI Analytics for Non-Programmers

For professionals without a programming background: spreadsheet models, dashboards and AI assistants, each result split by the groups of people it touches.

[Open the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

DHG / PRO / 02

#### Data Analysis Course

Excel, SQL, Python and business intelligence, for analysts whose reports shape decisions about people and budgets.

[Open the syllabus](/courses/data-analysis-mastery-course-college)

DHG / PRO / 03

#### AI and Machine Learning Masterclass

The full machine learning route for adults, with evaluation by group treated as part of every model, not an extra.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

DHG / PRO / 04

#### Generative AI: LLMs, RAG and Agents

The workings of large language models, and how to build assistants on them that know their limits, including the decisions about people that must stay with a person.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

How the classes run

## Two clocks and a weekly slot

Dutch clocks change twice a year and Indian clocks never do. In winter the teacher's day runs four and a half hours ahead of The Hague, in summer three and a half. That makes late afternoons and weekends the easy slots, weekday evenings a matter of arrangement, and the fixed weekly time something agreed at the free lesson, never promised here.

Straight after school

Late afternoon in The Hague, early evening or later for the teacher. The usual choice for primary pupils and the brugklas.

After dinner

Arranged teacher by teacher. It suits upper-school pupils, students and anyone coming home from a ministry or an office.

Saturday or Sunday

Mornings or afternoons in The Hague. The slot most working adults and busy households end up choosing.

### The opening session

A real task, a teacher watching how the learner approaches it, and at the end a clear view of where to start. No questionnaire does that as well.

### Groups of fifteen to twenty

Classmates come from several countries and share one level, so nobody in The Hague is held back by a local average or left behind by it.

### Private lessons

For diplomats, civil servants and others whose diaries move, for a narrowly defined goal, and for the Copilot Studio courses, which are never taught in groups.

### Code seen as it is typed

Teacher and learner share screens, so a misunderstanding is corrected in the minute it appears.

### English, with Dutch kept for school

Teaching is in English; groep, brugklas, havo and vwo stay in Dutch because that is how parents in the city speak of them.

### A record of every model

Code is committed to the learner's own GitHub repository after each lesson, and each model sits next to its group-by-group results.

Student work

## Projects our students left online

Four things students built and published at public addresses. Try them, test them, find their limits; the [student labs](/student-labs) page has more.

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

## Fees, in two figures

Monthly, in US dollars, at the rates charged in every country outside India. The Hague pays what every other city pays, with no enrolment fee and no contract for the year. The Copilot Studio courses are taught privately and so carry the private rate.

Free first class

USD 0

no card required

- A real lesson on a real problem
- Places the learner on the right rung
- No card or bank details

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty learners at one level
- One live teacher throughout
- Work reviewed each week
- Certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- One learner, one teacher
- Pace and focus fitted to the goal
- The only format for Copilot Studio

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Shown as their authors posted them on Google. We do not write, edit or pay for any review.

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

Questions from The Hague

## What families and professionals in The Hague ask first

### Why does this page talk about the childcare-benefits case?

Because it is the best-documented Dutch example of a risk model treating groups differently. The government's own letter of 17 July 2020 reports that nationality was used in a risk classification model, and that this was judged unlawful and discriminatory. We use it to teach one narrow, practical lesson: count a model's mistakes separately for each group.

### Does the page claim a model caused the whole affair?

No. The parliamentary report Ongekend onrecht describes failures across the administration, the law and the courts. The risk model is one strand, and the only one this page teaches from.

### What is a false-alarm rate?

The share of correct cases that a model wrongly flags. If 26 of 195 correct applications in a group are flagged, that group's false-alarm rate is 13.3 percent. Comparing that rate across groups is the check this page teaches.

### Is my child too young for this?

Not for the simple version. A child who writes a quiz can ask whether it marks every player the same way. The group-by-group check on real data usually comes around havo 4 to vwo 6.

### We are at an international school. Does that change anything?

No. The ladder follows what a learner can do, not a national curriculum, and all lessons are in English.

### I work with data about people. Where should I start?

Usually with data analytics or data analysis, depending on whether you code, and often one to one. Breaking results down by group is part of both.

### Are you connected with any government body?

No. We quote public documents from parliament and the government. We have no relationship with any ministry, authority, committee or school in The Hague.

### What does it cost?

A place in a group is USD 100 a month; private lessons are USD 150 a month. Both are billed in dollars, neither has a joining fee or a yearly commitment, and the first lesson is free.

### Where are the teachers?

They teach live from India, which is ahead of The Hague by three and a half hours in the Dutch summer and four and a half in the winter; late afternoons and weekends therefore suit best.

### What happens after I send the form?

We call you back at a Dutch hour to fix the free lesson. No payment is taken and no seat is reserved before the family has watched that lesson and made up its mind.

Elsewhere on this site

## Where else to read, for The Hague and beyond

The AI track is one part of what we publish for the city. The rest is here.

### [Coding classes in The Hague](/coding-classes-in-the-hague)

General coding for the city, stadsdeel by stadsdeel, with the local schools.

### [Coding classes in Zuid-Holland](/coding-classes-in-zuid-holland)

The province around the city, municipality by municipality.

### [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands)

The academy for the whole country: informatica in Dutch schools and the national AI build-out.

### [AI and Python Academy, Amsterdam](/ai-and-python-academy-amsterdam)

Seventy-three city algorithms, read entry by entry.

### [AI and Python Academy, Eindhoven](/ai-and-python-academy-eindhoven)

Soccer robots, drones and the gap between simulation and reality.

### [AI and Python Academy, Groningen](/ai-and-python-academy-groningen)

What the first year of a university AI degree asks of a pupil.

Start here

## Arrange a free lesson

Give us a phone number and someone from our team calls back at a Dutch hour. That first session is taught properly, and it ends with the one decision that matters most here: the rung the learner starts on.

Would you rather read first? Start with the [course list](/courses), then [how we teach](/how-we-teach), then the reasoning behind these pages at [Learn to Build AI](/learn-to-build-ai).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20class%20for%20a%20learner%20in%20The%20Hague%2C%20on%20the%20AI%20and%20Python%20track.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

A WhatsApp message costs nothing from a Dutch phone and gets the fastest reply. The number is an Indian one, and we hold no office, address or premises in The Hague or elsewhere in the Netherlands.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-python-academy-the-hague*
