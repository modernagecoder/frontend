---
title: "Game Design for Teens: Live Classes, a Method and Real Code"
description: "Game design for teens, taught live online: the MDA vocabulary, a paper-to-playtest loop, a real Godot tuning script, and what TSA and app contests require."
canonical: https://learn.modernagecoders.com/game-design-classes-for-teens
source: src/pages/game-design-classes-for-teens.html
---
> Game design classes for teens teach how to turn an idea into rules, build those rules in an engine, then change them after watching real players. Modern Age Coders runs these classes live online for American teenagers between 13 and 18, either in a batch of fifteen to twenty or one to one, mainly through our Game Development for Teens course in Unity and C#.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Game design classes for teens

United States · Ages 13 to 18 · Game design and development

# Game design for teens, taught as a craft

Game design for teens is more than learning which buttons an engine has. It is the discipline of deciding what a player does, what they should feel while doing it, and then proving it works by watching other people play. Below is the way we teach that to American teenagers: a design vocabulary that came out of a workshop at the Game Developers Conference, a loop of paper prototype, build and playtest, a short Godot script that shows design turning into numbers, the engines a teen can actually run at home, and what two national school-age competitions want from a game.

At a glance: For: Ages 13 to 18; Focus: Design, prototypes, playtests; Engine: Unity and C# in the course; Also taught: Godot or Roblox, one to one; Computer: Windows, Mac or Linux; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses where a teen designs and ships games

Each is taught live by a regular teacher, and each one asks students to finish small games rather than plan large ones.

- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): For 13 to 18 year olds. Ten months of Unity and C#, 2D then 3D, with design reviews built in.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Ages 13 to 18. Browser games a friend can open from a link.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): Ages 13 to 18. The language under many engines, taught through game projects.

## Mechanics, dynamics and aesthetics: the words a designer needs

Teenagers who play a lot can already tell you whether a game is fun. A design class teaches them to explain why, in words a teammate can act on. We start with a framework from a paper titled MDA: A Formal Approach to Game Design and Game Research, which says it was developed and taught as part of the Game Design and Tuning Workshop at the Game Developers Conference in San Jose, from 2001 to 2004.

**The three layers of a game, as the MDA paper defines them (read 17 October 2026)**

| Layer | How the paper defines it | What a teen writes down in class (ours) |
|---|---|---|
| Mechanics | "the particular components of the game, at the level of data representation and algorithms" | Every rule and number: jump height, enemy speed, how many lives, what earns a point |
| Dynamics | "the run-time behavior of the mechanics acting on player inputs" | What actually happens when people play: players camping a corner, racing, sharing, giving up |
| Aesthetics | "the desirable emotional responses evoked in the player" | The feeling the game exists for, chosen before a single line of code |

**The eight kinds of fun named in the MDA paper, with a teen-sized example of each (examples ours)**

| Aesthetic | The paper's short gloss | An example a student might build |
|---|---|---|
| Sensation | Game as sense-pleasure | A hit that flashes, shakes the camera and plays a crunchy sound |
| Fantasy | Game as make-believe | Playing a lighthouse keeper guiding ships through fog |
| Narrative | Game as drama | A three-scene story whose ending depends on one earlier choice |
| Challenge | Game as obstacle course | A platformer whose fifth level asks for everything learned in the first four |
| Fellowship | Game as social framework | A two-player puzzle where neither player can finish alone |
| Discovery | Game as uncharted territory | A map with a secret room that rewards players who look closely |
| Expression | Game as self-discovery | A garden builder with no score, only choices |
| Submission | Game as pastime | A calm fishing game for five quiet minutes |

### Why designers start from the feeling

The paper makes a point that changes how teens plan: the designer and player each have a different perspective. A designer sees rules first and hopes a feeling follows. A player meets the feeling first and only notices rules when something goes wrong.

So we ask a student to name the aesthetic before touching the engine. Writing "Challenge, with a little Discovery" at the top of a page stops a project from drifting into a bit of everything, which is how most first games lose their shape.

### A worked example (ours)

Suppose a fifteen-year-old wants a game about a delivery drone. The aesthetic is Challenge. The mechanics are battery charge, wind speed and three drop zones. The dynamics we expect: players rush early, run low on battery and learn to plan routes.

If the first playtest shows players hovering in place to wait out the wind, the dynamic is wrong for the aesthetic. The student changes one mechanic, perhaps making battery drain faster while hovering, and tests again. That one change is design.

Source, read 17 October 2026: [MDA: A Formal Approach to Game Design and Game Research](https://users.cs.northwestern.edu/~hunicke/MDA.pdf) (PDF). The examples in the right-hand column of each table are ours, written for this page.

## Paper, prototype, playtest: the loop we teach

Game design is learned by doing a small loop many times, not one large project once. This is the sequence we teach for every game, from a two-week jam piece to a capstone.

**A one-page design document (our template, with an invented example)**

| Heading | What goes under it | Example: Drone Drop |
|---|---|---|
| Promise | The one sentence from step 1 | In my game you deliver parcels through gusts so that you feel clever when a route works |
| Aesthetic | One or two of the eight | Challenge, with some Discovery |
| Core loop | What the player repeats every few seconds | Pick a parcel, plan a route, fly, drop, recharge |
| Mechanics | Rules and their starting numbers | Battery 100, hover drain 3 a second, wind changes every 8 seconds |
| Out of scope | What this version will not have | No story, no shop, no second drone |
| Test question | What the next playtest must answer | Do players plan a route before taking off? |

### Why five strangers, and why silence

Five is our classroom rule because five sessions fit inside one lesson and five different players are enough to start seeing repeated behaviour. It is a teaching choice, not a research figure.

Silence matters more than the number. The moment a designer explains their game, the test measures the explanation instead. This is hard, and learning to sit on their hands while a friend misses the obvious door is one of the most useful habits a design class builds.

### What we ask a student to record

Where did the player look first? When did they first smile, sigh or lean in? What did they try that the game did not allow? How long until they stopped?

Those notes go straight into the next change. Over a term, a student's playtest log becomes the clearest evidence of their thinking, far more convincing than a polished trailer.

## Tuning a jump: where design becomes numbers

The Godot documentation includes a short platformer character and then admits there is a lot more that goes into a complete one, naming acceleration, double-jumps and coyote-time. We use that admission as a lesson. The script below is ours: it keeps the documented example and adds two small forgiveness rules that players feel but rarely notice.

**Four numbers a designer tunes in this script, and what players feel (ours)**

| Variable | Too low feels like | Too high feels like | What to test |
|---|---|---|---|
| speed | Wading through mud | Overshooting every platform | Can a new player land on a narrow ledge first try? |
| jump_speed | A hop that never clears a gap | A rocket that hits the ceiling | Is the longest gap clearable with a running jump only? |
| coyote_time | The game "ate" a fair jump | Running on air, which looks wrong | Do testers complain about missed jumps at edges? |
| jump_buffer | Jumps lost when pressed a moment early | A jump firing long after the press | Does a quick double tap behave the way players expect? |

### Why @export matters to a designer

The Godot docs explain that putting the export keyword on a variable lets you set its value in the Inspector. For a designer this is the whole point: the numbers in the table above can be changed while testing, without opening the script.

We ask students to keep a tuning log beside the Inspector: the old value, the new value, and one sentence on what changed for the player. It turns a vague "feels better" into evidence.

### What the two extra rules teach

Coyote time and jump buffering are both about timing windows: a short span in which the game still accepts an action. The same idea shows up in fighting games, rhythm games and menus that tolerate a slightly late click.

Writing them also teaches a small piece of real programming: a countdown that loses delta every physics frame and is reset by an event. Students meet that pattern again in cooldowns, invincibility frames and spawn timers.

Sources, read 17 October 2026, Godot 4.7 documentation: [Using CharacterBody2D/3D](https://docs.godotengine.org/en/stable/tutorials/physics/using_character_body_2d.html) and [Coding the player](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/03.coding_the_player.html). The script is ours, written only with functions those pages use; test it in your own copy of Godot.

## Two US competitions that judge a teenager's game

A deadline and an outside judge sharpen design work. Two national programs accept games from school-age students, and their rules shape what a teen should build.

**What each competition asks, from the organisers' own pages (read 17 October 2026)**

| Point | TSA Video Game Design | Congressional App Challenge, 2026 cycle |
|---|---|---|
| Who it is for | Members of a Technology Student Association school chapter; separate middle and high school events | Middle and high school students; the rules say middle school typically covers grades 6 to 8 |
| What gets built | High school: participants "design, build, and launch an E-rated online video game", with required documentation, on the annual theme | Any app: the rules say "The app can be about any topic." Games are apps |
| Middle school version | "an E-rated, online game on a subject of their choice" | Same rules as high school |
| Teams | Set in TSA's event guidelines for members | Teams of up to four students |
| What judges see | Semifinalists also take part in an interview about what they learned building the game | A demonstration video of 1 to 3 minutes and written answers |
| Next deadline | Set by TSA and each state delegation; ask the chapter advisor | 12:00 pm EDT, Monday, October 26th, 2026 |

**ESRB rating categories by age, from esrb.org (read 17 October 2026)**

| Category | Who ESRB says the content is generally suitable for |
|---|---|
| Everyone | All ages |
| Everyone 10+ | Ages 10 and up |
| Teen | Ages 13 and up |
| Mature 17+ | Ages 17 and up |
| Adults Only 18+ | Adults ages 18 and up |

### Designing to stay inside E (our checklist)

TSA asks for an E-rated game, and ESRB describes Everyone content as something that "May contain minimal cartoon, fantasy or mild violence and/or infrequent use of mild language." That is a design constraint, and a useful one.

Our checklist: conflict drawn as cartoon or fantasy, defeated enemies that pop or fade rather than bleed, no frightening jump scares, mild words only, and a theme a grandparent and a nine-year-old could watch together. Whether an entry passes is decided under TSA's own rules, so the chapter advisor has the final word.

### Online features are a separate question

ESRB lists Interactive Elements, such as players being able to interact, and says these do not influence the rating assignment. So a game can be E and still need careful thought about chat or sharing.

For a school-age entry we teach the simple choice: no free-text chat, a leaderboard of initials only, and nothing that asks a player for personal details. The Congressional App Challenge in particular is close: our [Congressional App Challenge guide](/congressional-app-challenge-guide) covers its rules in full.

Sources, read 17 October 2026: [TSA competitions](https://tsaweb.org/competitions), [ESRB ratings guide](https://www.esrb.org/ratings-guide/) and the 2026 Congressional App Challenge rules. We are not connected with the Technology Student Association, the ESRB or the Congressional App Challenge.

## Which engine a teen designer can run, and what its own terms say

Engine arguments fill forums. For a teenager the useful questions are narrower: will it run on the computer at home, what language does it use, and does the account fit their age? Each answer below comes from the engine's own documentation or terms.

**Four engines and editors a US teen might use, from each maker's own pages (read 17 October 2026)**

| Tool | Language | Runs on | Age and account notes |
|---|---|---|---|
| Unity 6.6 | C# | Windows 10 version 21H1 or newer, macOS Ventura 13 or newer, Ubuntu 22.04 or 24.04; ChromeOS is not on the list | Account holders must be old enough to consent to data processing where they live, 13 in the US per the terms; buying or submitting content needs age 18; Student plan from 16 |
| Godot 4.7 | GDScript or C# | Windows, macOS and Linux; a web editor in current browsers; an Android editor whose supported devices include Chromebooks supporting Android apps; no editor for iOS | Free and open source under the MIT license; Godot says its terms do not apply to the games you make |
| Roblox Studio | Luau | Windows and Mac only; Roblox says Studio cannot run on Chromebooks | Roblox's education FAQ suggests Studio from about age 10, with younger children starting on building |
| MakeCode Arcade | Blocks, JavaScript or Python | A web browser; Microsoft describes it as a code editor for Retro Arcade games | Projects are kept in the browser's storage, so clearing browsing data removes unsaved ones |

### Our advice, by what the teen wants

Is 13 or older and wants the engine Unity describes as the world's most widely used: Unity and C#, which is what our group course teaches.

Has only a Chromebook, or wants a light engine with a gentle language: Godot, with GDScript, through the Android editor or the web editor while a fuller computer is found.

Already lives in Roblox and wants friends to play this week: Roblox Studio and Luau, on a Windows or Mac machine. Our step-by-step [guide to making a Roblox game](/how-to-make-a-roblox-game) covers it.

### Why the group course uses one engine

Our Game Development for Teens course teaches one engine deeply rather than touring several, because design skill grows when the tool stops being the problem. Unity also gives C#, a general-purpose language that carries into other software work.

One-to-one students can choose Godot or Roblox instead. The design loop, the vocabulary and the tuning habit stay exactly the same, because none of them belong to any engine.

Each engine row comes from its maker, read 17 October 2026: Godot&rsquo;s [system requirements](https://docs.godotengine.org/en/stable/about/system_requirements.html), the [Unity Terms of Service](https://unity.com/legal/terms-of-service) (last updated June 30, 2026), [Unity Student plan](https://unity.com/products/unity-student), [Unity 6.6 system requirements](https://docs.unity3d.com/Manual/system-requirements.html), [Godot license](https://godotengine.org/license/), the Roblox Creator documentation and [MakeCode Arcade](https://arcade.makecode.com/about). Terms change, so check them again before signing up.

## What a teen designs in ten months with us

Our Game Development for Teens course runs in four phases over ten months. The engine work is in the syllabus; the right-hand column is the design habit each phase adds.

**The four phases of our teen course, with the design focus we add to each (ours)**

| Months | What gets built | The design habit |
|---|---|---|
| 1 to 3 | Complete 2D games in Unity and C#, ending with a published capstone | The promise sentence, paper prototypes, the first silent playtests |
| 4 to 6 | A 3D world: controllers, animation, environments, a finished 3D game | Level pacing: where the player rests, where the pressure rises |
| 7 to 8 | Multiplayer basics, mobile builds, narrative and accessibility | Designing for players unlike yourself, including controls and readability |
| 9 to 10 | Production and a capstone shipped and presented | Scope cutting, a design document, and explaining every choice to an audience |

### Ages 13 and 14

More paper prototyping and shorter builds. At this age the main craft is learning to finish.

### Ages 15 and 16

Full design documents, team projects and the first entries to a school-age competition.

### Ages 17 and 18

A portfolio of three finished games with design notes, ready to show anyone who asks what they can do.

## What a teen game design portfolio should show

A folder of screenshots says little. A portfolio that shows thinking says a great deal, to a club, a competition panel or a summer program.

**What we ask students to include for each game (ours)**

| Item | Why it is there |
|---|---|
| The promise sentence and chosen aesthetic | Shows the game had a purpose from the start |
| Two playtest notes and the change each one caused | Proves the student listens to players, which is the core of design |
| A tuning log of three numbers | Shows design measured, not guessed |
| A 60-second clip of someone else playing | Lets a reviewer see the dynamics, not just the art |
| One honest paragraph on what did not work | Reflection is what separates a designer from a hobbyist |

For more on related tracks, see our pages on [C++ game development](/c-plus-plus-game-development), [coding for 13 year olds](/coding-for-13-year-olds) and [Roblox coding classes](/roblox-coding-classes-for-kids) for younger siblings.

## Four stages of a teenage game designer

Where many teens are when they join, and the step a teacher helps with.

**Stages of a young designer (ours)**

| Stage | What it looks like |
|---|---|
| 1. Idea collector | A notebook of game ideas, none of them finished |
| 2. Prototyper | Builds small playable versions and throws most away |
| 3. Tuner | Changes one number at a time and records what players felt |
| 4. Finisher | Cuts scope, ships, and can defend every design choice |

### For parents

Stage 1 is where enthusiasm lives, and it deserves respect. The work is helping that enthusiasm survive the first unfinished project.
The leap from 2 to 3 is where structure helps most: a tuning log and a playtest habit turn tinkering into a method.

### For teens

Finish something small this month. A tiny game that works teaches more than an epic that stays in a notebook.
Watch someone else play your game without helping. It will be uncomfortable and it will be the most useful ten minutes of your week.

## Nine courses on the way to designing games

Taught live online by a regular teacher, in a batch or one to one, for every stage from first blocks to engine code.

### Teens

Ages 13 to 18

- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): Unity, C# and four design phases.
- [Python for teens](/courses/python-complete-masterclass-teens): Logic, data and small games in text.
- [Vibe coding for teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): AI as a helper, with the teen making every call.

### Younger siblings

Ages 6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): Game ideas in blocks, the first design loop.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Luau scripts inside a world they know.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Scratch, Roblox and Minecraft in one plan.

### Further on

Older teens and adults

- [Game development, adult track](/courses/game-development-complete-masterclass-college): The adult track for learners 18 and over.
- [Hackathon preparation](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course): Design under a clock, as a team.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Games that live in a browser tab.

## Live design classes that fit a high school week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Batch times chosen to work in your own US time zone.
- **Weekends** Weekend mornings leave the afternoon free for sport and homework.
- **1-on-1** Arranged around exams, games seasons and family plans.

- **One teacher all term** Someone who knows every game the student has made.
- **Screen shared live** The teacher watches the engine, not a summary.
- **Playtests in class** Classmates test each other's builds.
- **Design notes graded** Thinking counts, not only the build.
- **Anywhere in the US** Online, so no drive to a center.
- **Batch or one to one** Fifteen to twenty, or a teacher alone.

## Fees

Unity Personal, Godot and MakeCode cost nothing to download, so the fee is only for teaching. It is charged a month at a time in US dollars, with no long contract, and a family can stop at the end of any month.

- Free first class: USD 0. First lesson free. Arrive with an idea or a half-built project. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty teens. A regular teacher. Pick your batch time. Paid monthly.
- One to one: USD 150 a month. Just the student and the teacher. Times you choose. Any engine, your project.

## Game design for teens: common questions

### What does a game design class for teens actually teach?

How to decide what a game asks of a player and why it is fun, then how to build, playtest and change it. In our classes that means a design vocabulary, paper prototypes, silent playtests, tuning numbers in an engine and writing a short design document.

### Is game design the same as game development?

They overlap. Design is deciding the rules and the feeling; development is building them in code and art. Teens learn more when they do both, because changing a number in code and watching a player react is how design gets tested.

### Does my teen need to know how to code first?

No. Our teen course starts C# from zero inside Unity. A teen who has used Scratch, Roblox Studio or Python will move a little faster in the first weeks.

### Which game engine should a teenager learn first?

It depends on the computer and the goal. Unity with C# suits teens 13 and over on Windows, Mac or Linux. Godot is free, lighter, and has an Android editor that runs on Chromebooks supporting Android apps. Roblox Studio needs Windows or Mac.

### Can a teen make games on a Chromebook?

Yes, with Godot. Its Android editor supports Chromebooks supporting Android apps, and there is a web editor for current browsers. Roblox says Studio cannot run on Chromebooks, and ChromeOS is not among the systems Unity lists for its Editor.

### What is the minimum age for a Unity account?

Unity's terms tie it to the age at which a person can consent to their data being processed, which they put at 13 for the US. Buying anything, or submitting content to Unity, needs a user of 18, and the Student plan begins at 16 for enrolled students.

### What is the TSA Video Game Design event?

A Technology Student Association competition in which high school members design, build and launch an E-rated online video game with documentation on the annual theme. A middle school version also exists. Ask your school's TSA chapter advisor for the current guidelines.

### Can a game be entered in the Congressional App Challenge?

Yes. The 2026 rules say the app can be about any topic, teams can have up to four students, and the deadline is 12:00 pm EDT on Monday, October 26, 2026. Entries include a demonstration video of 1 to 3 minutes.

### What does E-rated mean for a student game?

E is the ESRB Everyone category, for content generally suitable for all ages. ESRB says it may contain minimal cartoon, fantasy or mild violence and infrequent mild language, so we design competition games with cartoon conflict, no blood and mild words only.

### Can game design classes fit around a high school schedule?

Yes. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do game design classes cost?

The first lesson is free. Teaching after that is billed one month at a time, and the monthly amount in US dollars is listed under Fees above the questions. The engines we use are free to download.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Every page we have written for US families.
- [Congressional App Challenge guide](/congressional-app-challenge-guide): The 2026 rules and a ten-week plan.
- [How to make a Roblox game](/how-to-make-a-roblox-game): Studio, Luau and private publishing.
- [C++ game development](/c-plus-plus-game-development): For teens drawn to engine-level code.
- [Coding for 13 year olds](/coding-for-13-year-olds): Where a younger teen can begin.
- [How we teach](/how-we-teach): Inside one of our live classes.

## Contact

Book the free first class at [https://learn.modernagecoders.com/game-design-classes-for-teens](https://learn.modernagecoders.com/game-design-classes-for-teens#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
