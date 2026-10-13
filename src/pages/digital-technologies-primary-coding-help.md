---
title: "Primary Digital Technologies Coding Help | Foundation to Year 6"
description: "Help with primary Digital Technologies coding in Australia: what ACARA's Version 9.0 content asks from Foundation to Year 6, and an algorithm lesson to try at home."
canonical: https://learn.modernagecoders.com/digital-technologies-primary-coding-help
source: src/pages/digital-technologies-primary-coding-help.html
---
> Help with primary Digital Technologies coding in Australia: what ACARA's Version 9.0 content asks from Foundation to Year 6, and an algorithm lesson to try at home.

In short

Primary Digital Technologies builds coding in three steps. By Year 2 children follow and describe algorithms with steps and branching. By Year 4 they implement simple algorithms as visual programs with branching and iteration. By Year 6 they design algorithms with complex branching and iteration and build visual programs that include variables. Throughout, they define problems with user stories and judge solutions against design criteria.

For primary students

## Three courses that match primary Digital Technologies

Unplugged thinking, visual programming, and a gentle step towards text code for confident Year 5 and 6 students.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)  DTPR / 01 Thinking in steps Sequencing, decisions and repetition through puzzles, before and alongside any screen. Open the syllabus →](/courses/problem-solving-and-computational-thinking-for-kids)[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)  DTPR / 02 Visual programming Block programs with loops, conditions and variables: the Year 4 to Year 6 content in practice. Open the syllabus →](/courses/scratch-programming-complete-course)[![Coding for Kids course thumbnail](/images/kids-coding.webp)  DTPR / 03 Projects with blocks Games and small apps that give children a reason to define a problem first. Open the syllabus →](/courses/kids-coding-blocks-masterclass)

Band by band

## How coding grows from Foundation to Year 6

The band level descriptions say what children should have had the chance to do. These extracts are ACARA's words.

| By the end of | ACARA says students should have had the opportunity to |
| --- | --- |
| Year 2 | "apply computational thinking by describing algorithms that include sequences of instructions and decisions, and by using digital systems to produce simple solutions" |
| Year 4 | "broaden their computational thinking by creating simple digital solutions, individually and in groups, that involve defining problems, and designing and implementing solutions as visual programs" |
| Year 6 | "apply computational thinking by creating digital solutions that involve defining problems, designing and modifying algorithms, and implementing them as visual programs" |

Notice the word that keeps returning: problems. Even at Year 2 the curriculum is not asking for code for its own sake. AC9TDI2P01 asks children to "investigate simple problems for known users that can be solved with digital systems", and one of its examples is "deciding what to wear by checking the forecast on a weather app".

AC9TDI2P03 then asks them to "discuss how existing digital systems satisfy identified needs for known users". A six-year-old explaining why a family uses a tablet for recipes is doing real Digital Technologies.

Visual programming arrives in the Years 3 to 4 band and stays through Year 6. The difference by Year 6 is variables and input: programs remember things and respond to the user, which is where most children first meet the idea that a program has a state.

Text-based languages belong to the secondary bands. Some children are ready earlier, and we teach Python to confident Year 5 and 6 students, but the national content does not expect it before Year 7.

Source: ACARA, [Digital Technologies content F to 6, Version 9.0](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx) (Word download), band level descriptions, AC9TDI2P01 and AC9TDI2P03, read on 7 October 2026. ACARA is not connected with us.

Defining the problem

## User stories and design criteria in primary school

Primary children are asked to say who a solution is for and how they will know it works. It sounds grown-up; ACARA's examples show how ordinary it can be.

| Code | Content description | An example ACARA gives |
| --- | --- | --- |
| AC9TDI4P01 | "define problems with given design criteria and by co-creating user stories" | "buying presents for family members within a specified budget" |
| AC9TDI4P05 | "discuss how existing and student solutions satisfy the design criteria and user stories" | "how maps help people to locate places in the community" |
| AC9TDI6P01 | "define problems with given or codeveloped design criteria and by creating user stories" | a family in a bushfire or flood-prone area preparing for an emergency |
| AC9TDI6P07 | "select and use appropriate digital tools effectively to create, locate and communicate content, applying common conventions" | "modifying search terms to make the query more accurate" |

The Years 3 to 4 user story template is "A <type of user> has <some goal> so that <some reason>", with the example "a sports team wants to access league rankings online so that they can see their progress". Children fill it in before they build anything.

At home, the same template works for any idea a child wants to code. "A younger brother wants a game that teaches times tables so that he can practise without a worksheet." Once that sentence exists, the child knows who to test the game on.

Design criteria are the checks that come out of the story: does it give a new question each time, does it say whether the answer was right, can a seven-year-old read it? The Years 5 to 6 content asks children to judge their solutions against criteria like these and against the wider impact on their community.

Children who skip this step build impressive programs that nobody uses. Children who do it build smaller programs that someone actually enjoys, which is a better lesson in what software is for.

Quotations: ACARA, Digital Technologies content F to 6, Version 9.0, AC9TDI4P01, AC9TDI4P05, AC9TDI6P01 and AC9TDI6P07 with elaborations, read on 7 October 2026.

A lesson from ACARA's own example

## An algorithm for the past tense, tested until it breaks

One elaboration under AC9TDI4P02 describes "following rules to form the past tense of regular verbs such as 'create' to 'created', 'try' to 'tried' and 'cook' to 'cooked'". It makes a surprisingly good programming lesson, because the obvious rule is wrong in instructive ways.

| Version | The rule | Correct | What went wrong |
| --- | --- | --- | --- |
| 1 | If the word ends in e, add d. If it ends in y, change y to ied. Otherwise add ed. | 7 of the 12 verbs | play became plaied, enjoy became enjoied, stop became stoped, hop became hoped, go became goed |
| 2 | As version 1, but change y to ied only when the letter before the y is not a vowel. | 9 of the 12 verbs | stop, hop and go still wrong |
| 3 | As version 2, and short words ending consonant, vowel, consonant double the last letter before ed. | 11 of the 12 verbs | go became goed |

The twelve test verbs were create, try, cook, play, jump, bake, carry, stop, enjoy, hop, go and dance. Version 1 is what most children write first, and it already handles the three words in ACARA's example. Testing on more words is what reveals the problem with play and enjoy.

That is the heart of the lesson. A rule that works on the examples it was built from has not been tested. Children who see plaied appear on screen understand testing far better than children who are told about it.

The last failure is the most useful one. Go is not a regular verb, and ACARA's description says regular verbs. No rule will turn go into went; the fix is a short list of exceptions checked first, which is exactly how real programs handle irregular cases.

In a block language the rule becomes nested if-then-else blocks with a list for the exceptions. Year 5 and 6 children can build it in about a lesson, then try to break each other's versions with new words.

Every number in the table comes from running the three rules in Python on the twelve words listed. The point is not grammar; it is the habit of writing a rule, testing it on cases you did not think of, and improving it, which is the computational thinking every primary band description asks for.

Quotation: ACARA, Digital Technologies content F to 6, Version 9.0, AC9TDI4P02 elaboration, read on 7 October 2026. The three rules and the twelve-verb test are ours.

Helping with homework

## What to do when your child brings coding home

You can help without knowing how to code. These three moves cover most primary homework.

### Ask for the steps first

Before touching the computer, ask your child to say the steps out loud. If they cannot describe the algorithm, the code will not fix that.

### Predict, then run

Ask what will happen when they press go. A wrong prediction is the best moment to learn, because it shows exactly which block they misunderstood.

### Find someone to test it

If the task has a user, ask whether that person would understand it. Watching a sibling try a program is a lesson in design criteria.

Most primary schools use a block-based environment, and many have their own accounts and rules for using them. Follow the school's instructions about which tools and logins to use at home; AC9TDI4P08 even asks children to remember their school password and explain why it should be hard for others to guess.

If a task seems far beyond your child, it is worth asking the teacher which content description it is aimed at. The codes make that conversation much easier.

If you want steady practice outside school, our primary classes follow the same progression with more time on each step. Children start with us from age 6 and move from unplugged algorithms to block programs at their own pace.

Anything the school assesses stays your child's own work. We teach the thinking; the homework is theirs.

Four steps

## Primary coding, step by step

Year levels are a guide. Children move when they are ready.

| Around | Step | The sign it is secure |
| --- | --- | --- |
| Foundation to Year 2 | 1. Following steps | Follows and describes a short algorithm with a decision |
| Years 3 to 4 | 2. Block programs | Builds a program with a loop and an if-then block |
| Years 5 to 6 | 3. Variables and input | Keeps a score or a count that changes as the user plays |
| Years 5 to 6 and up | 4. Testing on purpose | Tries inputs designed to break the program, then fixes it |

### If your child finds it frustrating

Frustration usually means a step was skipped. Going back to saying the algorithm out loud almost always helps.

Short, frequent sessions beat long ones at this age.

### When they are ready for more

Our page on [moving from Scratch to Python](/after-scratch-next-step-python-australia) explains the step into text code.

Primary competitions such as the Bebras Challenge reward exactly this kind of thinking, without any coding required.

The catalogue

## Nine courses for primary-age coders

Grouped by stage. Each card opens the full course outline.

I

### First steps

Ages 6 to 8

DTPR / A / 01

#### Computational thinking

Steps, choices and repeats through puzzles.

[Open the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)

DTPR / A / 02

#### Creative coding for beginners

Making things move, with a teacher beside you.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)

DTPR / A / 03

#### AI literacy for kids

What AI is and is not, explained simply.

[Open the syllabus](/courses/ai-literacy-for-kids-course)II

### Block programming

Ages 8 to 11

DTPR / B / 01

#### Scratch programming

Loops, conditions and variables in real projects.

[Open the syllabus](/courses/scratch-programming-complete-course)

DTPR / B / 02

#### Coding for kids

Games and apps built from blocks.

[Open the syllabus](/courses/kids-coding-blocks-masterclass)

DTPR / B / 03

#### Game development for kids

Designing and building small games.

[Open the syllabus](/courses/game-development-masterclass-for-kids)III

### Ready for more

Confident Years 5 and 6

DTPR / C / 01

#### Python for kids

A first text language, taken slowly.

[Open the syllabus](/courses/python-ai-kids-masterclass)

DTPR / C / 02

#### Maths through coding

Using code to explore number patterns.

[Open the syllabus](/courses/maths-through-coding)

DTPR / C / 03

#### Minecraft coding

Code that builds in a world children already know.

[Open the syllabus](/courses/minecraft-coding-for-kids-course)

How lessons run

## Short, live classes for primary children

Our teachers are in India, behind every Australian state. A 4 pm lesson in Perth starts at 1.30 pm India time all year, as Western Australia has no daylight saving, which makes after-school times simple to keep.

Straight after school

The most common choice for primary families.

Saturday morning

Calmer for younger children.

Holiday sessions

A few days on one project.

### Say it before coding it

Children describe the steps before building them.

### Testing as a game

Children try to break each other's programs, then fix their own.

### Groups

Fifteen to twenty children at a similar stage.

### One-to-one option

For children who need a slower or faster pace.

### A note home

One line on what was learned and one thing to ask about.

### Homework stays theirs

We teach the idea; school tasks remain the child's own.

Student work

## Projects made by our students

Built by learners because they wanted to, not for a grade. See more in the [student labs](/student-labs).

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

Families in Australia are charged monthly in US dollars, our usual rate everywhere outside India. There is nothing to pay in advance and you can stop at any month end.

Free first class

USD 0

no card required

- A real lesson with a teacher
- An honest view of your child's stage
- No card details asked for

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty children at one stage
- The same teacher each week
- Projects reviewed with feedback
- A certificate when the course ends

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher for your child only
- Paced to suit them
- A weekly time you choose

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Parents' comments, copied word for word from Google.

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

Questions about primary coding

## What parents of primary children ask

### What coding do Australian primary schools teach?

Under Version 9.0, children follow and describe algorithms in the early years, then from Years 3 to 4 implement them as visual programs. By Year 6 their visual programs include variables and input.

### What is a visual program?

A program built by joining blocks rather than typing text. Each block is an instruction, and loops and decisions are blocks that wrap around others.

### Is my child behind if they are not typing code yet?

No. The national content does not ask for text-based languages until the Years 7 to 8 band. Many children start text code earlier by choice.

### What is a user story for a primary child?

A sentence saying who a solution is for, what they want and why, such as "A sports team wants to access league rankings online so that they can see their progress".

### What does the past-tense example teach?

How to write a rule as an algorithm, test it on many inputs, and improve it when it fails. It also shows why exceptions, like irregular verbs, need special handling.

### How can I help if I cannot code?

Ask your child to explain the steps, predict what a program will do before running it, and test it on someone else. Those three habits matter more than knowing the blocks.

### What age do your classes start?

From age 6. The youngest groups focus on steps and decisions before moving to block programming.

### Do you follow my child's school programme?

We build the same skills the curriculum describes, in our own sequence. We do not complete school tasks; those stay the child's own.

### Are you connected to ACARA or the school?

No. We are an independent online school. We quote ACARA because it publishes the curriculum.

### When would lessons be?

We agree a weekly slot after the free class, usually after school in your state. All Australian states are ahead of India time, so after-school lessons fall in our working day.

Related pages

## More for Australian primary families

Coding by age, the whole curriculum, and the next steps.

### [Digital Technologies curriculum help](/australian-curriculum-digital-technologies-help)

The subject from Foundation to Year 10.

### [Online coding for kids](/online-coding-classes-for-kids-australia)

Classes for primary children across Australia.

### [Coding for 7 and 8 year olds](/coding-classes-for-7-and-8-year-olds-australia)

What a lesson looks like at that age.

### [After Scratch: Python](/after-scratch-next-step-python-australia)

Moving from blocks to text.

### [Coding games for kids](/coding-games-for-kids-australia)

Games that teach the same ideas.

### [Coding classes in Australia](/coding-classes-in-australia)

Our main Australian page.

Start here

## Try a free primary coding class

Tell us your child's age and what they enjoy. The free class starts with steps and decisions, moves to blocks if they are ready, and ends with a plain answer about what would help next.

Would you rather browse? The [course atlas](/course-atlas) shows every course, and [how we teach](/how-we-teach) explains our approach.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20class%20to%20help%20with%20primary%20Digital%20Technologies%20coding.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp is normally the fastest way to reach us. Our number starts with +91, India's code, as the school is run from India and has no Australian premises.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/digital-technologies-primary-coding-help*
