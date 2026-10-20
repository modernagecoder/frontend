---
title: "Learn to Code Minecraft Mods in Java: A Guide for Teens"
description: "Learn to code Minecraft mods in Java: Fabric or Forge, which Java version each needs, a first custom item step by step, and what the Minecraft EULA lets you share."
canonical: https://learn.modernagecoders.com/learn-to-code-minecraft-mods
source: src/pages/learn-to-code-minecraft-mods.html
---
> To learn to code Minecraft mods, learn basic Java, install the JDK your Minecraft version needs (Fabric says JDK 25 for Minecraft 26.1), generate a project with Fabric&rsquo;s Template Mod Generator or Forge&rsquo;s MDK, open it in IntelliJ IDEA, and register a first item. Mods are for Java Edition only. Modern Age Coders teaches modding inside its live Java course for ages 13 to 18.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Learn to code Minecraft mods

United States · Ages 13 to 18 · Minecraft: Java Edition

# Learn to code Minecraft mods

Minecraft: Java Edition is written in Java, and so is almost every mod for it. That makes modding one of the most motivating ways for a teenager to learn a real, professional programming language: the reward for getting the code right is a new item, block or creature in a game they already love. This guide covers the decisions that trip up beginners before they write a line, Fabric or Forge and which Java version, then walks through a first custom item using the code patterns from Fabric&rsquo;s own documentation, and ends with what Mojang&rsquo;s rules say about sharing a mod.

At a glance: For: Ages 13 to 18; Game: Minecraft: Java Edition; Language: Java; Loaders: Fabric or Forge; Computer: Windows, Mac or Linux; Classes: Group or one to one; Scheduling: Weekday or weekend, your pick; Trial: One free lesson. Rated 4.9 across 547 Google reviews.

## Three courses for a teen who wants to mod

The Java course is where modding lives; the other two suit a different starting point.

- [Java for teens](/courses/java-programming-masterclass-for-teens): Teens 13 to 18: core Java, a 2D game, then Minecraft modding.
- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): For teens who would rather build whole games than mods.
- [Minecraft coding for kids](/courses/minecraft-coding-for-kids-course): Younger siblings, 7 to 12: block coding first.

## Fabric or Forge: two ways to load a Minecraft mod

A mod does not run on its own. It needs a mod loader, a piece of software that starts Minecraft with mods attached. The two long-standing choices are Fabric and Forge, and a mod written for one does not run on the other.

**Fabric and Forge, from each project&rsquo;s own pages (read 17 October 2026)**

| Point | Fabric | Forge |
|---|---|---|
| How it describes itself | A modular modding toolchain for Minecraft: Java Edition 1.14 and above, including snapshots | A mod loader with a Mod Developer Kit (MDK) and its own documentation site |
| Newest version on its pages | Developer docs for Minecraft 26.2 | Downloads for MC 26.3, Forge 66.0.13, dated October 16, 2026 |
| Java named in its setup docs | JDK 25 for Minecraft 26.1 | Java 21 JDK, in docs whose version menu tops out at 1.21.x |
| Editors it names | IntelliJ IDEA (recommended) or Visual Studio Code | Eclipse and IntelliJ IDEA, plus run configurations for Visual Studio Code |
| How a project starts | The Template Mod Generator, or cloning the example mod | Download and extract the MDK |
| The file that describes the mod | fabric.mod.json | mods.toml, in META-INF |
| Code names | Names from the unobfuscated game | Names as shown in its 1.21.x docs |

### Which one we start teens on

Our choice for a first mod is Fabric, for one practical reason: on the day we checked, its developer documentation covered a current 26.x version (26.2), while Forge&rsquo;s documentation site stopped at 1.21.x even though Forge itself downloads for 26.3. A beginner should not have to translate between versions.

The Java skills are the same either way. Classes, methods, registration and events carry over, and teens who later join a Forge project learn its patterns quickly.

### Version numbers changed

Families who last looked at Minecraft a few years ago will notice something new: Forge&rsquo;s download page lists Minecraft 26.1, 26.2 and 26.3 above 1.21.11. Mods are built for an exact version, so the version number is the first thing to check.

A mod for one version usually will not load on another. Mojang&rsquo;s EULA says plainly that game updates might not work well with mods, and suggests running an older version when that happens.

Sources, read 17 October 2026: [Fabric Wiki](https://fabricmc.net/wiki/start), [Fabric developer docs](https://docs.fabricmc.net/develop/getting-started/setting-up), [Forge documentation](https://docs.minecraftforge.net/en/latest/gettingstarted/) and [Forge downloads](https://files.minecraftforge.net/net/minecraftforge/forge/). We are not connected with Mojang, Microsoft, Fabric or Forge.

## Which Java version a Minecraft mod needs

A classic failed first setup comes down to one mismatch: the Java Development Kit on the computer is older than the Minecraft version needs. The modding projects publish the rule. Fabric&rsquo;s current setup page puts it in one line: To develop mods for Minecraft 26.1, you will need JDK 25.

**Java needed to develop mods, by Minecraft version (Fabric wiki and Fabric docs, read 17 October 2026)**

| Minecraft version | Java needed | Where it is stated |
|---|---|---|
| 26.1 and the 26.2 docs | JDK 25 | Fabric developer docs, setting up |
| 1.20.5 and later 1.x | Java 21 or newer | Fabric wiki, setup tutorial |
| 1.18 to 1.20.4 | Java 17 or newer | Fabric wiki, setup tutorial |
| 1.17 | Java 16 or newer | Fabric wiki, setup tutorial |

### A version-match checklist (ours)

Write three things on a sticky note before starting: the Minecraft version you want to mod, the loader, and the Java version the table above gives for it. Every tutorial you follow should match all three.

If a tutorial uses a different Minecraft version, its code may not compile. That is not your fault and not a bug in your code; it is the wrong tutorial for your setup.

### Where to get a JDK

Forge&rsquo;s documentation says it recommends and officially supports Eclipse Temurin, and the Fabric wiki points to the Temurin releases page for installers too.

Fabric warns that building from a terminal can cause problems if your default Java does not match what the project expects, and suggests an IDE that lets you pick the Java version. For a beginner, that is the simpler route.

## Setting up a first Fabric mod project

These are the steps from Fabric&rsquo;s developer documentation, in the order a beginner meets them, with the warnings that save the most time.

### Why the folder rule matters

School and family laptops often keep the Documents folder inside a cloud sync service. Build tools write thousands of small files, and Fabric&rsquo;s tip exists because syncing gets in the way of that.

A plain folder near the top of the drive, with no spaces in its name, avoids a whole family of confusing errors.

### What the template already contains

The generator creates two entrypoints by default, according to Fabric: a main one, in a class that implements ModInitializer, for code shared by client and server, and a client one, implementing ClientModInitializer, for client-only code.

The main entrypoint runs when Minecraft is ready to load mods. Fabric&rsquo;s own example logs Hello Fabric world! there; ours logs that the ruby shard was registered.

## Coding a first custom item: a ruby shard

A new item is the classic first mod because it touches every part of modding: Java code to register it, and JSON files to name it and give it a look. Fabric&rsquo;s docs put it simply: everything in Minecraft is stored in registries, and items are no exception.

### Code declares, data describes

Notice the split. Java says that a ruby shard exists and how it behaves; the JSON files say what it is called and how it looks. Minecraft itself is built this way, which is why so much of modding is editing data files rather than writing code.

That idea, separating behavior from description, is one professional developers use everywhere, from websites to phone apps.

### Small numbers to check (our arithmetic)

A 16 x 16 texture is 256 pixels, small enough to draw by hand in any pixel editor in a few minutes.

With stacksTo(16), carrying 64 shards takes 64 / 16 = 4 inventory slots, where an ordinary item that stacks to 64 needs one. Changing that single number is a good first experiment: build, launch, and count the slots. After editing these files, Fabric says you can restart the game, or build the mod and press F3+T, to apply the changes.

## What the Minecraft EULA says about mods you make

A teen whose first mod works will want to share it with friends. Mojang&rsquo;s EULA and usage guidelines are friendly to that, with a few firm limits worth reading together.

**Mods and the rules, from minecraft.net (read 17 October 2026)**

| Question | What Mojang says |
|---|---|
| Can I mod the game? | If you&rsquo;ve bought Minecraft: Java Edition, you may play around with it and modify it |
| Who owns my mod? | Any Mods you create for Minecraft: Java Edition from scratch belong to you |
| Can I sell it? | Not for money: you can do what you want with your mods as long as you don&rsquo;t sell them for money or try to make money from them |
| Can I share it? | Yes, if you distribute the mod only and not a modded version of Minecraft |
| Any banned kinds of mod? | No play-to-earn function that pays out real-world or cash-out currency |
| What if an update breaks it? | Mojang does not take responsibility; it suggests running an older version |

### For parents

The EULA asks minors who find the terms hard to understand to have a parent or legal guardian explain them. Reading the mods paragraph together takes five minutes and covers what a teen needs.

Installing other people&rsquo;s mods is a separate question from writing your own. Fabric&rsquo;s documentation mentions CurseForge and Modrinth as mod hosting sites; agree as a family which sources are allowed.

### How to share a finished mod

Build it with ./gradlew build on a Mac or Linux, or ./gradlew.bat build on Windows. The JAR files appear in build/libs, and Fabric says to use the one with the shortest name outside development.

Share the JAR, never a copy of Minecraft itself. That one rule keeps a teen&rsquo;s mod inside what Mojang allows.

Sources, read 17 October 2026: the [Minecraft EULA](https://www.minecraft.net/en-us/eula), the [Minecraft Usage Guidelines](https://www.minecraft.net/en-us/usage-guidelines) and Fabric&rsquo;s [Building a Mod](https://docs.fabricmc.net/develop/getting-started/building-a-mod). Quoted lines are shortened; read the full terms before publishing.

## Ten sessions from no Java to a working mod

Our plan for a teen who knows Minecraft well but has not written Java before. The plan moves faster through the first four rows for teens with some Python or JavaScript.

**A ten-session path into modding (ours)**

| Sessions | What gets built | The Java idea |
|---|---|---|
| 1 to 2 | Small console programs: a dice roller, a score keeper | Variables, types, if and loops |
| 3 to 4 | A tiny inventory written as classes | Classes, objects, methods, static |
| 5 | JDK, IntelliJ IDEA and the Fabric template running | Projects, packages, Gradle |
| 6 to 7 | The ruby shard: registry, name, texture | Registration, data files |
| 8 | A custom block that drops the shard | Inheritance and properties |
| 9 | A recipe and a creative tab | Events and data-driven design |
| 10 | Build the JAR, test on a dedicated server, explain the code | Testing, client and server sides |

### Why Java first

Two sessions of plain Java make the modding code readable instead of magic. Skipping them makes the modding code far harder to follow.

### Why a server test

Forge&rsquo;s docs say to always test a mod in a dedicated server environment, including client-only mods. It is good advice for any loader.

### Where it leads

Java is also the language of our AP Computer Science A classes, and a common one for Android apps and server software.

Younger players start with blocks instead: see our [Minecraft coding classes for kids](/minecraft-coding-classes-for-kids). For the language itself, [Java classes for teens](/java-classes-for-teens) and [AP Computer Science A classes](/ap-computer-science-a-online-classes) go further, and [Minecraft vs Roblox](/blog/minecraft-vs-roblox-which-teaches-kids-to-code) compares the two game worlds.

## Four stages of a young Minecraft modder

Where a teen who searches for modding might be today.

**Stages of learning to mod Minecraft (ours)**

| Stage | What it looks like |
|---|---|
| 1. Mod user | Installs mods and knows which ones they like |
| 2. Tinkerer | Edits data packs, configs or textures |
| 3. First modder | Registers items and blocks from a tutorial |
| 4. Mod author | Designs a feature, writes the Java, and ships a JAR |

### For parents

Hours of playing are not wasted. A teen who can describe why a mod is fun is already thinking like a designer.
Stage 3 needs real Java. A teacher makes the difference between copying a tutorial and understanding it.

### For teens

Match your versions first: Minecraft, loader, Java. A mismatch is behind a lot of setup errors.
Start with one item. A mod that adds one thing and works beats a mod that adds fifty and crashes.

## Nine courses for teens who want to build

Taught live, the same teacher each week, as part of a batch or one to one.

### Younger

Ages 6 to 12

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): MakeCode blocks before Java.
- [Scratch coding](/courses/scratch-programming-complete-course): Logic and games in blocks.
- [Python for kids](/courses/python-ai-kids-masterclass): A first typed language.

### Teens

Ages 13 to 18

- [Java for teens](/courses/java-programming-masterclass-for-teens): Core Java to Minecraft mods.
- [Python for teens](/courses/python-complete-masterclass-teens): Projects in a second language.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): Speed, memory and games.

### Going further

Teens and adults

- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): Unity and C#.
- [Game development](/courses/game-development-complete-masterclass-college): Engines at a professional pace.
- [Hackathon preparation](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course): Build and present under time.

## Live Java lessons for teens, on your schedule

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Evening batches that work across US time zones.
- **Weekends** Weekend morning batches for longer build sessions.
- **1-on-1** Private, at your convenience.

- **Setup done together** JDK, editor and template in a live class.
- **Your mod idea** The plan bends toward what you want to add.
- **Real Java** The same language as our AP CS A classes.
- **One teacher** The same person all term.
- **Anywhere in the US** Fully online, any state.
- **Batch or private** Fifteen to twenty teens, or one to one.

## Fees

Fabric, Forge and the JDK are free, and Java Edition is the only purchase modding needs. Our teaching is paid month by month in US dollars, with nothing to sign for the year and the option to stop after any month.

- Free first class: USD 0. A free first lesson. Setup questions answered. No card.
- Group batch: USD 100 a month. Fifteen to twenty teens. A regular teacher. Pick a batch time. Monthly.
- One to one: USD 150 a month. One to one. Times that suit you. Your own mod.

## Minecraft modding: common questions

### What language are Minecraft mods written in?

Java. Minecraft: Java Edition is written in Java, and Fabric and Forge mods are Java projects built with Gradle.

### How do you start learning to code Minecraft mods?

Learn basic Java first: variables, loops, classes and methods. Then install the JDK your Minecraft version needs, generate a Fabric or Forge project, and register a first item.

### Should I use Fabric or Forge?

Both work and the Java skills carry over. We start beginners on Fabric because its developer docs covered a current 26.x version (26.2) when we checked, while Forge's docs stopped at 1.21.x.

### Which Java version do I need for Minecraft modding?

It depends on the Minecraft version. Fabric's docs say JDK 25 for Minecraft 26.1, and its wiki says Java 21 or newer since 1.20.5 and Java 17 or newer since 1.18.

### Can you mod Minecraft Bedrock Edition the same way?

No. Fabric and Forge are for Minecraft: Java Edition, and the EULA's mod permission is written for people who bought Java Edition.

### Is it legal to make Minecraft mods?

Yes, within Mojang's rules. The EULA says mods you create from scratch belong to you, as long as you don't sell them for money, and you may share the mod but not a modded version of the game.

### What age can kids learn Minecraft modding?

We teach Java modding from about 13, once a student can type and reason through Java classes. Younger children do well with block-based Minecraft coding first.

### Do I need IntelliJ IDEA to make mods?

Fabric recommends IntelliJ IDEA, with Visual Studio Code as an alternative. Forge supports Eclipse and IntelliJ IDEA and provides run configurations for Visual Studio Code.

### Why does my mod not load?

Check versions first: the mod, the loader and Minecraft must all be the same version, and the JDK must be the one that version needs.

### What times are classes for US teens?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do Java and modding classes cost?

The first lesson is free. Regular classes are billed monthly, and the fees section of this page gives the amount in US dollars.

## Related pages

- [Minecraft coding for kids](/minecraft-coding-classes-for-kids): Block coding for under-13s.
- [Java classes for teens](/java-classes-for-teens): The language behind every mod.
- [AP Computer Science A](/ap-computer-science-a-online-classes): Java, the College Board way.
- [Minecraft vs Roblox](/blog/minecraft-vs-roblox-which-teaches-kids-to-code): Which game teaches more coding.
- [Coding classes in the USA](/coding-classes-in-united-states): State guides, ages and subjects.
- [How we teach](/how-we-teach): What a live lesson looks like.
- [Python games for kids](/python-games-for-kids): Python games kids can code: a guessing game, then pygame, step by step.
- [MakeCode Arcade help](/makecode-arcade-help-for-students): MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.
- [How to make a Roblox game](/how-to-make-a-roblox-game): Make a Roblox game step by step: devices, three Luau scripts, and safe publishing.

## Contact

Book the free first class at [https://learn.modernagecoders.com/learn-to-code-minecraft-mods](https://learn.modernagecoders.com/learn-to-code-minecraft-mods#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
