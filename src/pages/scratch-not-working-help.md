---
title: "Scratch Not Working? Fixes for Saving, Sign-In and Loading"
description: "Scratch not working? The official fixes for projects that will not save or load, sudden sign-outs, blocked school networks and tablets, plus two block fixes."
canonical: https://learn.modernagecoders.com/scratch-not-working-help
source: src/pages/scratch-not-working-help.html
---
> When Scratch is not working, the usual causes are a browser or device Scratch does not support, a sound or image over 10 MB (or project data over 5 MB) that stops saving, an account signed in on two computers, cookies switched off, or a school filter blocking Scratch domains. Save a copy with File, then Save to your computer, before trying anything else. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Scratch not working

United States · Scratch help · Grades 1 to 8

# Scratch not working? How to fix it

It is 8:40 on a school night, the project is due tomorrow, and Scratch has just said the project failed to save. Or the cat moves on the family laptop but sits still on the school iPad. Or the district Chromebook will not load scratch.mit.edu at all. These problems have known causes, and the Scratch Team explains most of them in its own Help Center. This page gathers those answers in the order you need them: first work out which kind of problem you have, then follow the fix for it. Where Scratch itself is fine and the code is the problem, two worked block fixes show how to think it through.

At a glance: For: Students, parents, teachers; Tool: Scratch 3, free; Covers: Saving, sign-in, loading; Also: School filters, tablets; Source: Scratch Help Center; Classes: Ages 6 to 12; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses for a child who wants to get better at Scratch

Each class is live, and the teacher works on the child&rsquo;s own project rather than a worksheet.

- [Scratch coding for kids](/courses/scratch-programming-complete-course): Grades 3 to 8. Games, animation and debugging habits.
- [Coding for kids with blocks](/courses/kids-coding-blocks-masterclass): Ages 6 to 12. Scratch first, then apps and AI.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): The step from Scratch blocks to typed code.

## Which kind of Scratch problem do you have?

The Help Center articles behind this page cover six broad groups of problems. Find the row that matches what you see, then jump to that part of the page. Our table, built from the Scratch Help Center articles named below it.

**Symptom, likely cause and first thing to try (ours, from the Scratch Help Center, read 17 October 2026)**

| What you see | Most likely cause | Try this first |
|---|---|---|
| "Project Failed to Save." | A sound or image over 10 MB, or project data over 5 MB | Save to your computer, then shrink the largest sound |
| Signed out in the middle of work | Account open on a second computer, a second account in the same browser, or cookies off | Sign out everywhere else, allow cookies for scratch.mit.edu |
| The site will not load at school | A network filter blocking a Scratch domain | Ask school IT to allow the domains listed further down |
| A WebGL error | The browser or its graphics settings | Try a different browser, as the Help Center suggests |
| Arrow keys do nothing on an iPad | Tablets cannot use "key pressed" blocks | Add on-screen buttons (worked fix below) |
| Cannot share, or cloud games will not run | Email not confirmed, or a New Scratcher account | Confirm the email in Account Settings |

### Before you change anything

Save a copy on the computer first. In the editor, open File and choose Save to your computer. Whatever goes wrong next, the work is safe in an .sb3 file you can load back with File, then Load from your computer.

Then write down exactly what happened: the message on screen, the browser, the device and whether it happened at home or at school. Those four facts point to the cause faster than any guess.

### Change one thing at a time

If you clear cookies, switch browser and delete a sound all at once, you will never know which one fixed it, and the problem may come back next week.

Change one thing, test, and only then try the next. It is the same habit programmers use on their own code, and it is the habit our Scratch classes build from the first month.

Built from the official [Scratch Help Center](https://mitscratch.freshdesk.com/en/support/home), read 17 October 2026; scratch.mit.edu/faq now points there. We are not connected with the Scratch Foundation or MIT.

## Will Scratch run on this computer, Chromebook, iPad or phone?

American classrooms run on a mix of district Chromebooks, iPads and older Windows laptops, so this is often the real answer. The Scratch Team updated its requirements article in September.

**Where Scratch runs, from the Scratch Help Center article on system requirements (modified September, read 17 October 2026)**

| Device | Scratch in a browser | The downloadable Scratch app |
|---|---|---|
| Windows laptop or desktop | Windows 10 version 1709 or higher | Windows 10 and higher |
| Mac | macOS 10.13 or higher | macOS 12 and higher |
| Chromebook | Recent Chrome | The Android and ChromeOS app, Android 8.0 and higher |
| iPad | iOS version 10 or higher (Tablets only) | Not listed |
| Android tablet | Android 8.0 or higher (Tablets only) | Android 8.0 and higher |
| Phone | Play and comment only | No phone app |

### The browser rule

Scratch develops its features against the Baseline Widely Available web standard, and they are supported on versions of Chrome, Edge, Firefox and Safari released within the last 30 months (2.5 years), on any operating system those browsers support. Other browsers may work but are not officially supported.

In practice that means a browser that has not updated in three years is the first suspect. On a district device, updates are controlled by school IT, so a student cannot always fix this alone.

### Tablets and phones

Scratch says it runs on most modern browsers on desktops, laptops and tablets, but it does not currently support creating or editing projects on phones. On a phone you can play most projects and leave comments.

Tablets have two limits worth knowing before a child builds a whole game on one: there is currently no way to use "key pressed" blocks or right-click menus. A game built on a laptop with arrow keys will not respond on an iPad until it has on-screen buttons.

If a project loads but the stage stays blank or shows a WebGL error, the Help Center advice is short: try a different browser.

## When a Scratch project will not save

Scratch auto-saves projects every two minutes, and the browser usually warns you before you leave a page with unsaved changes. When saving still fails, the Help Center lists a small number of causes.

**Size limits on the Scratch website, from the Scratch Help Center (read 17 October 2026)**

| Item | Limit | What happens over it |
|---|---|---|
| Whole project | "There is no limit to the total project size." | Nothing by itself |
| One sound or image | 10 MB | The project will not save; a "Project Failed to Save." message appears |
| project.json (code and sprite data) | 5 MB | A large project with many sprites and scripts may not save |
| The downloaded Scratch app | No explicit limit | Bounded only by memory and disk space |

### How many pieces a long song needs

Our arithmetic, for planning: a sound file of 24 MB is over the 10 MB limit, and 24 / 10 = 2.4, so it needs at least 3 pieces. In practice we cut one or two more, because each piece must sit comfortably under the limit.

Auto-save every two minutes also means the most a sudden crash usually costs is about two minutes of work, or 2 x 60 = 120 seconds of clicking. Saving manually before a big change costs nothing.

### Checking the size yourself

The Help Center describes a check for anyone comfortable with zip files: download the project (it ends in .sb3), rename the ending from .sb3 to .zip, unzip it, and look at the size of each image, sound and the project.json file inside.

The fixes it suggests are simple ones: shorten long lists, remove duplicate sprites and use clones instead, swap images for lower-resolution versions, and cut sounds so none is over the limit.

## Signed out, cannot log in, cannot share

Account trouble is common in families where a child uses Scratch at school and at home, or where siblings share one laptop.

**Account problems and the Help Center fix (read 17 October 2026)**

| Problem | Why it happens | Fix |
|---|---|---|
| Signed out without warning | Signed in on more than one computer, or a second account opened in the same browser | Sign out of computers you are done with; one account per browser at a time |
| Signed out right after signing in | Cookies are blocked | Allow cookies for scratch.mit.edu in the browser settings |
| Password does not work | Often the username is typed differently | Request a reset at scratch.mit.edu/accounts/password_reset and type the username exactly as the email shows it |
| Tried to log in with an email address | Scratch logs in by username | Use the username; the Help Center says you cannot log in with your email address |
| Profile says "Student of..." | A class account made by a teacher | Ask the teacher to reset the password |
| Share button does nothing | The email address is not confirmed yet | Account Settings, Email tab, resend the confirmation |
| A cloud game will not work | Not signed in, or the account is still a New Scratcher | Sign in; cloud variables open up once the account becomes a Scratcher |

### School email addresses

Many US students sign up with a school address, and many of those end in .edu or block outside mail. The Help Center warns that a student email may not receive messages from Scratch; the Scratch Team can confirm the address if you send them a message, though not for large numbers of accounts.

A password reset email can go astray the same way. If it has not arrived an hour after asking, the Help Center suggests checking the spam folder (in Gmail, the Promotions tab), then using the Contact Us form with the email address and date of birth on the account.

### Shared family computers

The Help Center is clear that sharing one account between people is not recommended, because it is a common cause of sign-outs and lost saves. Each child gets their own account.

On a shared computer, sign out at the end of every session. It takes five seconds and prevents the next person from accidentally working inside the wrong account.

## Scratch blocked on a school Chromebook or network

District web filters are the reason Scratch loads at home but not in the computer lab. This part is for the teacher or the school IT team, who can change the filter.

**Domains Scratch needs, from the Scratch Help Center article on domains to allow (modified May 2025, read 17 October 2026)**

| If the filter accepts wildcards | What it is for (our note) |
|---|---|
| *.scratch.mit.edu | The site, projects, assets, cloud data and downloads |
| *.recaptcha.net and *.gstatic.com | Sign-up checks and fonts |
| *.wistia.com, *.wistia.net and *.akamaihd.net | Tutorial videos |

### Without wildcards

The Help Center also lists every subdomain one by one for filters that cannot take wildcards, including api.scratch.mit.edu, projects.scratch.mit.edu, assets.scratch.mit.edu, cdn2.scratch.mit.edu, clouddata.scratch.mit.edu and uploads.scratch.mit.edu. It warns that new subdomains are added often, so the list can go out of date.

If uploads or cloud games fail but the home page loads, a missing subdomain on that list is the likely cause.

### Blocked by a shared address

Scratch uses a content delivery network, and its servers can share an IP address with a site the school has blocked. If the filter blocks by IP address and caches the result, Scratch can be blocked by accident.

The Scratch Team recommends filtering by domain name rather than IP address, checking that the filter supports Server Name Indication (SNI), and then clearing the network cache.

Working offline is another route. The free Scratch app creates projects without an internet connection; it used to be called the Scratch Offline Editor or Scratch Desktop. One surprise: double-clicking an .sb3 file does not open it. Open the app first, then choose File, then Load from your computer.

## Two block fixes: tablet controls and long decimals

Sometimes Scratch works perfectly and the project still misbehaves. We teach these two fixes early because the problems behind them are easy to hit. Both scripts are ours, written with standard Scratch 3 blocks; build them yourself to see the fix work.

### Why the broadcast fix teaches more than it fixes

Broadcasting separates what happens from what caused it. The cat no longer cares whether the signal came from a key or a finger; it only listens for go right.

That idea, one message and many possible senders, is how real apps handle a click, a tap and a voice command with the same code. Children who meet it in Scratch recognize it later in JavaScript and Python.

### Why computers struggle with 0.1

The Help Center gives the reason in one line: it is very hard to represent .1 in binary. Computers store most decimals as approximations, so adding them can leave a tiny error at the end.

This is not a Scratch bug, and every language has it. Rounding at the moment you display a number, not while you calculate, is the habit to keep.

## Where to get help, and how to report a real bug

If none of the fixes above work, the Scratch community and the Scratch Team can help, as long as the request is specific.

For more on fixing your own code, read our guide on [how to debug code](/how-to-debug-code), or see [Scratch project ideas](/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced) when the current project is finally working.

## Four stages of fixing your own Scratch problems

Our description of the troubleshooting stages we teach toward, one stage at a time.

**Stages of a young Scratch troubleshooter (ours)**

| Stage | What it looks like |
|---|---|
| 1. Panics | Sees an error and calls for an adult straight away |
| 2. Saves first | Exports a copy before trying anything, then asks for help |
| 3. Tests one change | Changes a single thing, runs the project, and notes the result |
| 4. Explains the cause | Can say why it broke, and posts a clear question when stuck |

### For parents

You do not need to know Scratch to help at stage 1. Ask your child to read the message out loud and find it in the table at the top of this page.
Praise stage 2 loudly. A child who saves a copy before experimenting has learned the most important habit in all software work.

### For students

If the code is graded homework, ask your teacher before you post it online; your teacher may want the work to stay yours.
Keep a short bug diary: what broke, what fixed it. You will be surprised how often the same three problems return.

## Nine courses for children who started in Scratch

Live and online, with the same teacher each week, in a batch or one to one.

### Blocks

Ages 6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): Games, stories and clean scripts.
- [Coding with blocks](/courses/kids-coding-blocks-masterclass): Scratch, then apps.
- [App making for kids](/courses/block-coding-app-development-masterclass): Phone apps from blocks.

### Next steps

Ages 8 to 12

- [Python for kids](/courses/python-ai-kids-masterclass): The first typed language.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Bigger games, better design.
- [Web development for kids](/courses/kids-ai-web-development-course): Real websites, by hand.

### Thinking skills

Ages 6 to 14

- [Problem solving for kids](/courses/problem-solving-and-computational-thinking-for-kids): Break a problem into steps.
- [Roblox coding in Luau](/courses/roblox-game-coding-for-kids-lua-course): Events in a 3D world.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Blocks inside a game they know.

## A teacher who helps your child get unstuck, live

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After-school batches that fit Eastern, Central, Mountain and Pacific time.
- **Weekends** Weekend mornings are a popular choice for younger children.
- **1-on-1** One child, one teacher, a time you pick.

- **Their project on screen** Children share the editor and fix it themselves.
- **Concepts, not answers** Graded work stays the student&rsquo;s own.
- **Debugging every week** Save, test one change, explain the cause.
- **One teacher all term** Someone who knows your child&rsquo;s projects.
- **Any US state** All you need is a browser and a quiet room.
- **Group or private** Batches of fifteen to twenty, or a teacher to themselves.

## Fees

Scratch is free and so is this page. If your child wants a teacher beside them, you pay month by month in US dollars, with no long contract, and you can stop after any month.

- Free first class: USD 0. A free first lesson. Bring the broken project. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty in a batch. The same teacher each week. Pick your batch time. Billed monthly.
- One to one: USD 150 a month. One child, one teacher. Times that suit you. Built around their projects.

## Scratch not working: questions families ask

### Why is Scratch not working?

The common causes are an unsupported or out-of-date browser, a project that is too large to save, being signed out because the account is open on another computer, cookies switched off, or a school filter blocking Scratch domains. Save a copy to the computer first, then check each cause one at a time.

### Why won't my Scratch project save?

Scratch will not save a project with a sound or image over 10 MB, and project.json has a 5 MB limit. Saving also fails if the internet drops, if you were signed out, or if you are editing someone else's project without remixing it first.

### Why does Scratch keep signing me out?

The Help Center lists three reasons: the account is signed in on more than one computer, a second account is signed in on the same browser, or cookies are disabled. Sign out of other computers and allow cookies for scratch.mit.edu.

### Does Scratch work on a Chromebook?

Yes. Scratch runs in recent versions of Chrome, and the Scratch app for Android and ChromeOS supports Android 8.0 and higher on Chromebooks. On a school Chromebook, the district filter may still need to allow the Scratch domains.

### Can you use Scratch on an iPad or a phone?

On a tablet, yes, with two limits: key pressed blocks and right-click menus do not work. On a phone you can play projects and comment, but Scratch does not currently support creating or editing projects on phones.

### Why is Scratch blocked at school?

Usually the school network filter is blocking one of the Scratch domains, or blocking an IP address that Scratch shares through its content delivery network. The Help Center lists the domains to allow; school IT can add them.

### Can I use Scratch without the internet?

Yes. The free Scratch app lets you create projects offline. To open a saved project, start the app first and choose File, then Load from your computer, because double-clicking the file does not open it.

### Why can't I share my Scratch project?

You need to confirm your email address before you can share. Resend the confirmation from Account Settings, Email tab. Some school email addresses do not receive Scratch messages, and the Scratch Team can confirm them if you contact it.

### Will you do my Scratch homework for me?

No. We never write graded assignments for students. A teacher explains the idea behind the problem, for example broadcasts or rounding, so the student can solve their own project and explain it.

### What times are classes for US families?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do Scratch classes cost?

The first lesson is free. After that, teaching is paid one month at a time, and the fees section of this page shows the monthly amount in US dollars.

## Related pages

- [Scratch coding classes](/scratch-coding-classes-for-kids): How our live Scratch lessons run.
- [Coding classes in the USA](/coding-classes-in-united-states): The index of our US pages.
- [Scratch or Python?](/blog/scratch-vs-python-which-better-young-learners): When a child is ready to type code.
- [How to debug code](/how-to-debug-code): The same habits, for any language.
- [Online coding for US kids](/online-coding-classes-for-kids-usa): Every course for ages 6 to 14.
- [How to make a Roblox game](/how-to-make-a-roblox-game): Where many Scratch fans go next.
- [MakeCode Arcade help](/makecode-arcade-help-for-students): MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.
- [Roblox Studio errors fixed](/roblox-studio-errors-fixed): Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.
- [Khan Academy CS vs live classes](/khan-academy-computer-science-vs-live-classes): Khan Academy CS or live classes? A fair comparison, built from Khan Academy descriptions of its course.

## Contact

Book the free first class at [https://learn.modernagecoders.com/scratch-not-working-help](https://learn.modernagecoders.com/scratch-not-working-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
