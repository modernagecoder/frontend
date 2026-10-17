---
title: "How to Make a Video Game for Kids: Free Tools and Steps"
description: "How to make a video game as a kid, free: tools by age and computer, seven steps, a real MakeCode Arcade game to copy, safe sharing, and when to try 3D."
canonical: https://learn.modernagecoders.com/how-to-make-a-video-game-for-kids
source: src/pages/how-to-make-a-video-game-for-kids.html
---
> To make a video game, a kid picks a free tool that suits their age and computer, such as Scratch or MakeCode Arcade in a browser, or Roblox Studio on Windows or Mac, plans one small idea, builds it, and tests it on family. Modern Age Coders teaches children aged 6 to 12 live online, in a batch or one to one, through our Scratch and Game Development for Kids courses.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / How to make a video game for kids

United States · Ages 6 to 12 · Scratch, MakeCode Arcade, Roblox

# How to make a video game when you are a kid

Making a video game as a kid is easier than it sounds, and it can cost nothing. Children can build a working game in a web browser in an afternoon, on the same Chromebook they use for school. What makes it go well is choosing a tool that fits the child&rsquo;s age and computer, starting with an idea small enough to finish, and testing it on someone else. This guide covers all three, then gives your child a complete twenty-line game to type in, explains what happens when they press Share, and answers the question every young player asks next: can I make it 3D?

At a glance: For: Ages 6 to 12; First tools: Scratch, MakeCode Arcade; Later: Roblox Studio, Minecraft; Cost of tools: Free; Computer: A Chromebook is fine to start; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses where children finish real games

Live and small enough that every child shares a screen, and every class ends with something playable.

- [Game development for kids](/courses/game-development-masterclass-for-kids): For 8 to 12 year olds, about six months: Scratch games, then Roblox Studio and coded Minecraft.
- [Scratch coding](/courses/scratch-programming-complete-course): From age 6. The friendliest way to build a first game, in blocks.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Ages 8 to 14 with a Windows or Mac computer. Typed Luau scripts.

## Free tools a kid can make a game with, by age and computer

There is no single right tool. There is a right first tool for your child&rsquo;s age, reading level and the computer in the house. Each row below uses what the tool&rsquo;s own makers say.

**Four free game-making tools, from each maker&rsquo;s own pages (read 17 October 2026)**

| Tool | How kids code in it | What it runs on | Good first choice for |
|---|---|---|---|
| Scratch | Blocks that drag and snap together; the Scratch Foundation says no tricky syntax is required | A web browser | Ages 6 to 10, and any child who has never coded |
| MakeCode Arcade | Blocks, with JavaScript and Python views of the same program | A web browser; Microsoft calls it a code editor for Retro Arcade games | Ages 8 to 12 who want a game that looks like a classic console game |
| Roblox Studio | Typed Luau scripts | Windows or Mac only; Roblox says Studio cannot run on Chromebooks or phones | Ages 10 and up, the age Roblox&rsquo;s education team typically suggests |
| Godot | GDScript, a typed language | Windows, Mac, Linux, a web editor, and an Android editor for Chromebooks supporting Android apps | Confident readers of about 11 and up who want a full engine |

### If your child is 6 to 8

Start in Scratch. Its blocks only fit together in ways that make sense, so children spend their time on ideas instead of typing errors. The Scratch Foundation says Scratch is free for everyone and was developed at the MIT Media Lab in 2007.

A first Scratch game can be one cat chasing one mouse with a score. That counts. The core ideas behind professional games, events, loops and conditions, are already there.

### If your child is 9 to 12

MakeCode Arcade is a strong second step because the same program can be viewed as blocks or as JavaScript. Children see typed code that matches blocks they already understand.

If the family has a Windows or Mac computer and the child loves Roblox, Roblox Studio is the next door. Unity is a teen tool: its terms set the minimum account age in the US at 13.

Sources, read 17 October 2026: the [Scratch Foundation](https://www.scratchfoundation.org/home), [About MakeCode Arcade](https://arcade.makecode.com/about), the Roblox Creator documentation, [Godot&rsquo;s Android editor page](https://docs.godotengine.org/en/stable/tutorials/editor/using_the_android_editor.html) and the Unity Terms of Service. The age suggestions in the last column are ours. We are not connected with any of these organizations.

## Seven steps from idea to a game someone else has played

Written for kids, with a note for parents at the end. The steps are the same whichever tool you choose.

### Why one thing

It is tempting to start with a whole world in your head: twenty levels, a boss, a shop, a story. Then the first afternoon ends with a menu screen and nothing to play. One verb, one rule and one ending gives them a finished game on day one, and finished games are what keep children making more.

Big ideas are not wasted. We ask children to keep an ideas notebook, so the boss and the shop wait their turn instead of crowding out game number one.

### A note for parents

The most helpful thing a parent can do is be the playtester in step 6, and stay quiet. If you get stuck, say so: that is real information for the young designer.

Praise the decisions, not just the result. "You made the apples faster when I got good, that was clever" teaches more than "great game".

## A complete MakeCode Arcade game in about twenty lines

A good first typed game, which we wrote for this page. Open MakeCode Arcade in a browser, start a new project, switch to the JavaScript view, and type it in. We wrote it using only blocks and functions described in the MakeCode Arcade reference.

**What each part of Snack Dash does, using the MakeCode Arcade reference (read 17 October 2026)**

| Code | What the reference says it does |
|---|---|
| image.create and fill | Makes a blank picture and colors it in, here a 16 by 16 square for the hero and an 8 by 8 one for the snack |
| sprites.create | Creates a sprite from a picture; kinds such as Player, Enemy and Food already exist |
| controller.moveSprite | Moves a sprite with the direction buttons at the speeds you choose |
| randint | Gives a random whole number from the smallest to the largest, both included |
| sprites.onOverlap | Runs code when a sprite of one kind overlaps a sprite of another kind |
| info.changeScoreBy | Adds to the score, or takes away if the number is negative |
| info.startCountdown | Sets the game time in seconds; when it finishes, the game ends |

**Level-up challenges for Snack Dash (ours)**

| Challenge | What to change | What it teaches |
|---|---|---|
| Faster hero | The two 100s in moveSprite | Numbers control how a game feels |
| A tricky snack | Give the snack its own speed so it drifts | Movement without the player |
| An enemy | A second sprite of kind Enemy that costs a point on overlap | Two rules at once |
| A bonus round | Start a longer countdown after 10 points | Conditions and state |
| Your own art | Draw the hero in the image editor instead of a square | Games need artists too |

Sources, read 17 October 2026: the MakeCode Arcade reference pages for [sprites.create](https://arcade.makecode.com/reference/sprites/create), [controller.moveSprite](https://arcade.makecode.com/reference/controller/move-sprite), [sprites.onOverlap](https://arcade.makecode.com/reference/sprites/on-overlap), [info.startCountdown](https://arcade.makecode.com/reference/info/start-countdown) and [randint](https://arcade.makecode.com/reference/math/randint). MakeCode marks the older Math.randomRange as deprecated, which is why the game uses randint.

## Three questions that turn a working game into a fun one

A game that runs is not yet a game people want to play again. After the first playtest, we ask children three questions, in this order.

### Is it too easy or too hard?

Watch the playtester. Bored means too easy; giving up means too hard. Change one number, such as speed or time, and test again.

### Does the player know what to do?

If they wander, add a hint: a title that says "Catch the snacks!" or an arrow. Good games teach without a manual.

### Does winning feel good?

A sound, a flash, a message. Small rewards make players smile, and a smile is the clearest sign a game is working.

### What changing one number teaches

In Snack Dash, a countdown of 10 seconds feels frantic and 60 feels sleepy. Somewhere between is right for each player. Children who try three values and pick one have done what game designers call tuning, without needing the word.

It is also quiet maths: comparing values, predicting results, and checking a guess against what really happened.

### Ideas for a second game

A maze with a timer. A pong game for two players on one keyboard. A dodge game where things fall from the top. A quiz where each right answer makes your character jump higher.

Each one reuses the same parts as Snack Dash, a moving player, a rule and an ending, arranged differently.

## Where a child&rsquo;s game is saved, and who can see it

Parents ask this as soon as a child says "can I show my friends?". The answer is different in each tool, so here is what each maker says.

**Saving and sharing, from each tool&rsquo;s own pages (read 17 October 2026)**

| Tool | Where projects are saved | What sharing does |
|---|---|---|
| MakeCode Arcade | In the browser&rsquo;s local storage; MakeCode warns that clearing browsing data removes saved projects | A shared project goes to MakeCode&rsquo;s public cloud, and anyone can see your project if they have its shared URL |
| Scratch | Not covered here, because Scratch&rsquo;s help pages could not be read as plain text | Shared projects appear in what the Scratch Foundation calls a safe, moderated online community |
| Roblox Studio | Published to Roblox with File, Publish, under the creator&rsquo;s account | By default, a new game is only open to the creator, people with edit access and group members until it is released |

### Our three rules for young sharers

Save a copy to a file before clearing the browser, or sign in so projects are kept online. Losing a first game to a cleared cache is a sad and common afternoon.

Share links only with people you know, by message or email, until a parent has looked at the game.

Use a nickname in the game, never a full name, school or town.

### Accounts and age

Each tool has its own account rules, and they change. Check the sign-up page together with your child before creating an account, especially for children under 13.

For a younger child, a parent can set up and manage any account, and keep sharing switched off until the game is ready to show.

Sources, read 17 October 2026: the [MakeCode Arcade FAQ](https://arcade.makecode.com/faq), the Scratch Foundation home page and the Roblox Creator documentation on publishing.

## Can a kid make a 3D video game?

Yes, but it is the second game, not the first. Even the Godot engine&rsquo;s own tutorial says that if you are new to game development, it recommends starting with 2D games before tackling 3D games, which tend to be more complicated.

**Ways a child can make a 3D game (from each maker&rsquo;s docs; ages ours)**

| Route | Needs | Typical age to start |
|---|---|---|
| Roblox Studio | A Windows or Mac computer; Luau scripts | About 10 and up |
| Coded Minecraft worlds | Minecraft, coded in class as part of our kids course | About 8 and up |
| Godot 3D | A computer able to run the 3D renderers in Godot&rsquo;s system requirements | About 12 and up |
| Unity | A Windows, Mac or Linux computer and an account | 13 and up, from Unity&rsquo;s terms |

### Why 2D first

In 2D there are two directions, left-right and up-down. In 3D a third appears, and with it cameras, lighting and depth. Every one of those is a new thing that can go wrong.

A child who has finished two or three 2D games already knows how to plan, test and fix. They bring those habits to 3D and the extra difficulty becomes interesting instead of overwhelming.

### How our kids course handles it

Our Game Development for Kids course spends its first two months on game logic in Scratch, the next two on 2D polish and bigger builds, and saves 3D worlds in Roblox Studio and coded Minecraft for months five and six.

Roblox fans can continue with our [Roblox game walkthrough](/how-to-make-a-roblox-game), which deals with which computers work, three starter scripts and keeping a first game private.

## Four stages of a young game maker

Four stages a young game maker moves through, each at their own speed.

**Stages of a young game maker (ours)**

| Stage | What it looks like |
|---|---|
| 1. Remixer | Changes someone else&rsquo;s game: new colors, faster enemies |
| 2. Copier with ideas | Types a game like Snack Dash, then adds one rule of their own |
| 3. Maker | Plans a small game on paper and builds it from a blank project |
| 4. Designer | Tests on other people and changes the game because of what they saw |

### For parents

Remixing is a real first step, not cheating. It shows a child what each part of a game does.
Ask your child to explain one rule in their game. Explaining is the clearest sign of real understanding.

### For kids

Small and finished beats big and unfinished, every time.
If your game breaks, change one thing and test again. That is what real game developers do all day.

## Nine courses for kids who want to make games

Live online, with the same teacher each week, in a batch or one to one.

### First games

Ages 6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): First games in blocks.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Scratch, then 3D worlds.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code that shapes a blocky world.

### Typed code

Ages 8 and up

- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Luau scripts for real Roblox games.
- [Python for kids](/courses/python-ai-kids-masterclass): Text games, turtle art, first AI.
- [Python for teens](/courses/python-complete-masterclass-teens): For older brothers and sisters.

### When they turn 13

Ages 13 to 18

- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): Unity and C#, 2D then 3D.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Browser games to share by link.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): The language under many engines.

## Game-making classes that fit around school

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** A batch at an hour that fits your family, wherever you are in the US.
- **Weekends** Morning sessions that leave the day open.
- **1-on-1** Whatever time your child learns well.

- **A teacher who stays** The same face each week.
- **Building, not watching** Children share their screen and make.
- **A game every few weeks** Finished, not half done.
- **Family playtests** Homework is letting you play.
- **Online** From home, anywhere in the US.
- **Group or private** Fifteen to twenty, or just your child.

## Fees

Scratch, MakeCode Arcade and Roblox Studio are all free, so the only cost is the teaching. Families pay for it monthly, in US dollars, and can leave whenever a month ends.

- Free first class: USD 0. A first class on us. Your child makes a game in it. No card asked for.
- Group batch: USD 100 a month. Fifteen to twenty kids. The same teacher. A batch time you pick. Billed monthly.
- One to one: USD 150 a month. Private lessons. Times that suit you. Your child&rsquo;s own game ideas.

## Making a video game as a kid: questions

### How can a kid make a video game?

Pick a free tool that fits their age and computer, such as Scratch or MakeCode Arcade in a browser. Choose one thing the player does and one way to win, build the moving part first, then add the rule, and let someone else play it.

### What is the easiest way for a kid to make a game?

Scratch, for a child new to coding. Its blocks snap together so there are no typing errors, and the Scratch Foundation says Scratch is free for everyone. A first Scratch game can be finished in one afternoon.

### Can kids make a video game for free?

Yes. Scratch, MakeCode Arcade, Roblox Studio and Godot are all free to use. Roblox Studio needs a Windows or Mac computer; the others work in a browser or on more kinds of computer.

### Can my child make a game on a Chromebook?

Yes. Scratch and MakeCode Arcade run in the browser, and Godot has an Android editor that supports Chromebooks supporting Android apps. Roblox Studio is the exception: Roblox says it cannot run on Chromebooks.

### What age can a child start making video games?

Around 6 with Scratch, if they can read simple words. From about 8 many are ready for MakeCode Arcade, and Roblox says its team typically recommends Roblox Studio for ages 10 and up.

### How do you make a 3D game as a kid?

Start with one or two 2D games, then move to Roblox Studio on Windows or Mac, or coded Minecraft. Godot's own tutorial recommends 2D before 3D, which it says tends to be more complicated.

### Where are MakeCode Arcade games saved?

MakeCode says projects are kept in the browser's local storage, and clearing browsing data removes them. Save a copy to a file, or sign in, before clearing the browser.

### Is it safe for kids to share their games?

It depends on the tool. MakeCode says anyone with a shared link can see the project. Roblox keeps a new game private to the creator and collaborators until it is released. Share links only with people you know until a parent has checked the game.

### Can kids use Unity?

Unity's terms set the minimum age for an account at the age of consent to data processing, given as 13 in the US. For a child under 13 we suggest Scratch, MakeCode Arcade or Roblox Studio for their own projects.

### Do the classes run on weekdays or weekends?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do game-making classes cost?

The first class is free. Then you pay for one month of teaching at a time, and this page's Fees section shows the monthly price in US dollars.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Every page for American families.
- [How to make a Roblox game](/how-to-make-a-roblox-game): The next step for Roblox fans.
- [Scratch coding classes](/scratch-coding-classes-for-kids): Our live Scratch classes.
- [Scratch project ideas](/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced): Thirty-plus games and stories to try.
- [Minecraft coding classes](/minecraft-coding-classes-for-kids): Coding inside Minecraft.
- [Coding for 10 year olds](/coding-for-10-year-olds): Where a ten-year-old can start.

## Contact

Book the free first class at [https://learn.modernagecoders.com/how-to-make-a-video-game-for-kids](https://learn.modernagecoders.com/how-to-make-a-video-game-for-kids#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
