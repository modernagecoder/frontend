---
title: "Roblox Coding Classes in Germany, Live in English"
description: "Live online Roblox coding classes in English for children and teens in Germany: Roblox Studio, Luau scripts, Roblox's age rules and cheat-proof multiplayer code."
canonical: https://learn.modernagecoders.com/roblox-coding-classes-germany
source: src/pages/roblox-coding-classes-germany.html
---
> Roblox coding classes for children and teens in Germany at Modern Age Coders are live online lessons in English, for ages 8 to 16. Learners build their own games in Roblox Studio and write real Luau scripts, from a door that opens to a multiplayer scoreboard that cannot be cheated. One regular mentor matches each child's pace and accent, in a group of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Roblox coding

Germany · Roblox game coding · Ages 8 to 16

# Roblox coding classes in Germany

Plenty of children in Germany spend their afternoons in other people's Roblox games. A smaller number open Roblox Studio and make one of their own, and they discover very quickly that a game is a program: doors that open, coins that count, a scoreboard that cannot be faked. This page explains what that involves, which rules Roblox itself sets for younger players, and shows the first piece of real game code our students write about fairness.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 8 to 16; Tool: Roblox Studio, free; Language: Luau, a typed form of Lua; Teaching: Live, in English; Class size: Fifteen to twenty, or one to one; First class: Free. Rated 4.9 across 547 Google reviews.

## Which Roblox course fits your child?

Most children aged 8 to 12 start with the Roblox course. A younger child may begin in Scratch, and an older teen may move on to a full game engine.

- [Roblox Game Coding in Luau](/courses/roblox-game-coding-for-kids-lua-course): The main course. Obstacle courses, tools, coins and scoreboards, all scripted in Luau by the child, with the mentor watching each line.
- [Scratch first](/courses/scratch-programming-complete-course): For children of 6 to 8 who cannot yet type fluently. Loops, events and variables in blocks, ready for Luau later.
- [Godot game development](/courses/godot-game-development-course-for-kids-and-teens): For teens who want to make games outside Roblox, in a free engine whose games run anywhere.

## What is Roblox Studio, and what is Luau?

Playing Roblox and building on Roblox use two different programs. The building one is free, and the language inside it is a real programming language with a public specification.

### Roblox Studio

Roblox describes Studio on its Creator Hub as a free application available on Windows and Mac. It is where a game is built: the world, the parts, the lighting, and the scripts that make anything happen.

Roblox lists only Windows and Mac for Studio, and its setup page tells new users to sign in to Studio with their Roblox account. A child who only plays on a tablet will need a laptop or desktop computer for these classes.

### Luau

Roblox calls Luau the scripting language creators use in Roblox Studio, and describes it as fast, small, safe and gradually typed, derived from Lua 5.1. Its source code is public on GitHub under the MIT licence.

Luau is typed text, not blocks. Children learn the same ideas found in Python or JavaScript: variables, conditions, loops, functions and events.

**What a computer needs to run Roblox Studio, from Roblox's own setup page**

|  | Minimum | Recommended |
|---|---|---|
| Operating system | Windows 10 or macOS 10.14 | Windows 11 or macOS 14 and later |
| Memory | 3 GB | 8 GB |
| Screen | 1600 by 900 or higher | 1600 by 900 or higher |

Source: Roblox Creator Hub, Roblox Studio setup, and the Luau reference page; github.com/luau-lang/luau for the licence. Read on 3 November 2026.

In our lessons the mentor shares a screen and so does the child. A second screen helps but is not needed. What does matter is a mouse: building in Studio with a laptop trackpad is slow, and children get frustrated by it far more than by the code.

## What age rules does Roblox set for children?

Roblox now runs separate account types for younger users. These are its rules, from its own safety page, not ours.

**Roblox Kids and Roblox Select accounts, as Roblox describes them**

|  | Roblox Kids | Roblox Select |
|---|---|---|
| Ages, in most regions | 5-8 year olds | 9-15 year olds |
| Games available | Only the lowest maturity ratings, Minimal and Mild | Ratings up to Moderate |
| Chat in games | Off unless a parent turns it on; then with users aged 5 to 12 and trusted friends | On with age-appropriate users and trusted friends in the same game |
| Chat tab outside games | Off | Ages 9 to 12 with trusted friends only; ages 13 to 15 also with friends of a similar age |
| One-to-one chat in games | Off unless a parent allows it | Off unless a parent allows it |

Source: Roblox Safety Center, corp.roblox.com/safety, and Parental Controls, corp.roblox.com/parents. Read on 3 November 2026. Roblox says its users range in age from 5 to over 25.

### What parents can control

Roblox's parents' page says a parent account can manage most settings of a child's Roblox Kids or Roblox Select account from the parent's own device. It lists screen time limits for children under 13, monthly spending limits, the maximum game rating, and turning chat off for users under 13.

To link a parent account, Roblox asks the parent to verify their age with a government-issued ID or a credit card. It also says that Restricted experiences are only available to verified users aged 18 and over.

### How our classes fit in

Our lessons happen in Studio, on the child's own game, with the mentor on a video call. Nothing in the course needs chat with strangers, and nothing needs Robux.

We do not set up or manage a child's Roblox account. That stays with the family and with Roblox's settings above. Where a child wants to publish a game, the mentor explains what publishing means and the family decides.

## How do you stop players cheating in a Roblox game?

In a multiplayer game every player's computer can be tampered with. So the game's real rules live on the server, which checks every request a player sends. This is the first script about fairness our students write.

### The game

Coins lie around a map. When a player touches one, their computer, the client, sends a message to the server: I collected this coin. The server adds one to the player's score.

A cheating player can send that message for a coin on the other side of the map, for a coin someone else already took, or a hundred times a second.

### The rule

The server believes nothing. It checks that the coin exists, that the player is standing next to it, and that the player is not collecting faster than a person could. Only then does it destroy the coin and add the point.

Every serious online game works this way. It is also one of the first ideas in computer security.

**The Luau server script, for Roblox Studio** (Luau)
```luau
-- ServerScriptService > CoinServer (a Script, so it runs on the server)
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")
local collect = ReplicatedStorage:WaitForChild("CollectCoin")

local MAX_DISTANCE = 8   -- studs
local COOLDOWN = 0.5     -- seconds
local lastPickup = {}

local function onCollect(player, coin)
	if typeof(coin) ~= "Instance" or not coin:IsDescendantOf(workspace.Coins) then return end
	local root = player.Character and player.Character:FindFirstChild("HumanoidRootPart")
	if not root then return end
	if (root.Position - coin.Position).Magnitude > MAX_DISTANCE then return end
	local now = os.clock()
	if lastPickup[player] and now - lastPickup[player] < COOLDOWN then return end
	lastPickup[player] = now
	coin:Destroy()   -- gone for everyone, so it cannot be taken twice
	player.leaderstats.Coins.Value += 1
end

collect.OnServerEvent:Connect(onCollect)
Players.PlayerRemoving:Connect(function(player) lastPickup[player] = nil end)
```
Put a RemoteEvent called CollectCoin in ReplicatedStorage, a folder called Coins in the workspace and a leaderstats folder with a Coins value on each player. We have not run this script outside Studio; the checks are mirrored in the Python twin below, which we did run.

Children often ask why the coin does not simply count itself when touched. It could, in a game for one player. The moment two players share a world, someone has to be the referee, and it cannot be the player who wants the points. To show the difference without opening Studio, we model the same server in plain Python: one honest player, Mia, and one player sending fake requests.

**The same checks as a Python twin** (Python)
```python
import math

MAX_DISTANCE = 8   # studs
COOLDOWN = 0.5     # seconds

coins = {"c1": (10, 0), "c2": (30, 0), "c3": (50, 0), "c4": (200, 0), "c5": (204, 0)}

# requests the server receives: (time, player, coin, where the player really stands)
requests = [
    (1.0, "Mia", "c1", (12, 0)),
    (3.0, "Mia", "c2", (29, 0)),
    (5.0, "Mia", "c3", (55, 0)),
    (1.1, "Cheat", "c4", (0, 0)),     # claims a coin 200 studs away
    (1.2, "Cheat", "c1", (10, 0)),    # coin already taken
    (2.0, "Cheat", "c9", (0, 0)),     # a coin that does not exist
    (6.0, "Cheat", "c4", (199, 0)),
    (6.1, "Cheat", "c4", (199, 0)),   # same coin twice
    (6.2, "Cheat", "c5", (200, 0)),   # next coin a fifth of a second later
]

trusting = {}
for t, player, coin, pos in requests:
    trusting[player] = trusting.get(player, 0) + 1
print("If the server believes every request:", trusting)

taken, last, score = set(), {}, {}
reasons = {}

def check(t, player, coin, pos):
    if coin not in coins: return "no such coin"
    if coin in taken: return "already taken"
    if math.dist(pos, coins[coin]) > MAX_DISTANCE: return "too far away"
    if player in last and t - last[player] < COOLDOWN: return "too fast"
    return None

for t, player, coin, pos in sorted(requests):
    why = check(t, player, coin, pos)
    if why:
        reasons[why] = reasons.get(why, 0) + 1
        continue
    taken.add(coin)
    last[player] = t
    score[player] = score.get(player, 0) + 1

print("With server checks:", score)
print("Rejected:", reasons)
```
It prints If the server believes every request: {'Mia': 3, 'Cheat': 6}, then With server checks: {'Mia': 3, 'Cheat': 1} and Rejected: {'too far away': 1, 'already taken': 2, 'no such coin': 1, 'too fast': 1}.

**What the server checks change (our example, eight requests from the cheating player's side and three from Mia)**

| Player | Score if the server trusts everyone | Score with checks |
|---|---|---|
| Mia, playing honestly | 3 | 3 |
| Cheat, sending fake requests | 6 | 1 |

The game, the requests and both programs are our own teaching example, run with Python 3 on 3 November 2026.

Look at the one coin the cheating player keeps. At six seconds they really were standing next to coin c4, so the server accepts it, as it should: checks must stop cheating without punishing fair play. Then the same coin arrives again and is refused as already taken, and coin c5 two tenths of a second later is refused as too fast. Honest Mia never notices any of this. That balance, strict for cheaters and invisible for everyone else, is what children learn to design.

1. **Guess first.** Before running the twin, predict each player's score with and without checks.
2. **Tune it.** Change MAX_DISTANCE to 3. Does Mia lose a coin she fairly collected? What is a fair value, and why?
3. **Find a new cheat.** Add a request that passes every check but should not. Then add a check that stops it.
4. **In Studio.** Build the coin map, add the script and test it with a second player in a local test inside Studio.

## Does Roblox coding lead to real programming?

Yes, if it is taught as programming. The ideas carry straight over to the languages children meet later at school or at work.

**From a Roblox project to the wider idea (our course map)**

| In a Roblox game | The programming idea | Where it appears again |
|---|---|---|
| A door that opens when touched | Events and handlers | Every app and website |
| A coin counter | Variables and state | Any program that remembers something |
| An obstacle course with levels | Loops and tables | Lists and arrays in Python or Java |
| The server checking a coin | Validation and trust | Web servers and computer security |
| Typed Luau | Types | Java, C# and TypeScript |

In Germany, Informatik is not taught everywhere at the same age or in the same amount, and Roblox is not part of any school course. That is why we teach it as a door into programming rather than an end in itself. Children who have scripted a working game in Luau usually move to Python or JavaScript without fuss, because they have already met every idea in the table. A child who wants a free first contest can try the Informatik-Biber, which BWINF runs free for pupils from Klasse 3 to 13 and which asks for no prior knowledge.

## When do Roblox classes run in German time?

Children usually come after school or at the weekend. The mentors are in India, a few hours ahead.

**Sample class times in Germany and India**

| Germany | India, winter (to 28 March 2027) | India, summer (from 28 March 2027) |
|---|---|---|
| 15:45 | 20:15 | 19:15 |
| 16:45 | 21:15 | 20:15 |
| Saturday 09:00 | 13:30 | 12:30 |
| Sunday 12:00 | 16:30 | 15:30 |

Under the Einheitenzeitgesetz Germany is one hour ahead of UTC in winter and two hours ahead in summer; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India keeps UTC+5:30 all year. These rows are examples only.

The free first class is booked in the time shown on your own phone or computer. A one-to-one child can agree a regular time with the mentor that fits around football, music or homework.

## From the first part in Studio to a published game

Our own milestones for Roblox learners, used to place children and report to parents.

**Roblox coding milestones (ours)**

| Stage | Usually reached | The child can |
|---|---|---|
| 1. Builder | First weeks | Place, size and anchor parts and test a simple obby |
| 2. First scripts | Month 1 to 2 | Write a script that reacts to a touch or a click |
| 3. Game logic | Months 3 to 4 | Keep score, run a timer and change levels |
| 4. Client and server | Months 5 to 6 | Use RemoteEvents and check every request on the server |
| 5. Own game | Month 7 onwards | Plan, build, test with others and explain a complete game |

### For children

Test your game as a cheater would. If you can break it, someone else will.
Read the error in the Output window out loud before you ask for help. Half the time it tells you the answer.

### For parents

Ask to play your child's game, then ask how one part of it works. The explanation shows the learning.
Hours in Studio and hours playing Roblox look the same from the doorway. They are not.

## Nine more courses for young game makers

All taught live in English by a regular mentor, in a group or one to one.

### Younger children

Ages 6 to 10

- [Coding for kids](/courses/kids-coding-blocks-masterclass): Block coding from games to small apps.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): What AI in games can and cannot do.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code that builds inside Minecraft.

### Typed code

Ages 9 to 14

- [HTML and CSS](/courses/html-css-course-for-beginners-build-real-websites): A website to show off the games.
- [C++ for kids](/courses/cpp-programming-for-kids-course): Puzzles and games in a fast language.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Browser games anyone can open.

### Teen game makers

Ages 13 to 18

- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): Unity and C#, from idea to finished game.
- [Cybersecurity for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): The defending side of cheating, properly.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Saving and sharing code like a team does.

## How live Roblox classes work for children in Germany

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Weekday slots from about a quarter to four, German time.
- **Weekend** Saturday and Sunday mornings or around midday.
- **One to one** A fixed weekly time chosen with the mentor.

- **Building in Studio** The child builds and scripts every part.
- **Real Luau** Typed code, not drag and drop.
- **English made easy** Slow, clear and patient explanations.
- **The same mentor** Someone who knows your child's game.
- **No strangers** Lessons need no in-game chat at all.
- **Group or private** Fifteen to twenty children, or one.

## Fees for Roblox coding classes in Germany

One monthly fee covers eight live classes. It is displayed in euro using the European Central Bank reference rate, while the payment itself goes through in US dollars, so your bank does the conversion and may show a slightly different figure.

- Free first class: Free. A free first class in Studio. A first look at your child's level. No card details needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children at a similar stage. One mentor throughout. Two live classes a week. Monthly, cancel when you wish.
- One to one: €134 (charged in US dollars) a month. Your child and one mentor. Their own game and pace. A time that suits your family.

## Roblox coding classes in Germany: questions from parents

### Are the classes in German?

No. Every class is live and taught in English only, by a mentor based in India who matches your child's pace and accent. Luau code itself is written with English words, so children practise both at once.

### What age can my child start?

Children of about 8 and over, who can read and type simple words, start with the Roblox course. Children of 6 to 8 usually begin in Scratch and move to Luau later.

### Does my child need a Roblox account?

Roblox's setup page says to sign in to Studio with a Roblox account. Roblox runs Roblox Kids accounts for 5-8 year olds and Roblox Select accounts for 9-15 year olds in most regions, managed through a parent account. The account stays with your family; we do not create or manage it.

### Will my child chat with strangers in class?

No. Lessons happen in Studio on the child's own game, with the mentor on a video call. Nothing in the course needs Roblox chat, and Roblox lets parents turn chat off for children under 13.

### Do we have to buy Robux?

No. Roblox Studio is free, and nothing in our course needs Robux or any purchase on Roblox.

### What computer do we need?

A Windows or Mac computer. Roblox lists Windows 10 or macOS 10.14 and 3 GB of memory as the minimum, and recommends 8 GB. Studio is offered for Windows and Mac only, and a mouse helps a lot.

### Is Roblox coding real programming?

Yes. Luau is a typed programming language derived from Lua 5.1, and children learn variables, conditions, loops, functions, events and client-server logic that carry over to Python, JavaScript or Java.

### When are the classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most children in Germany come after school or on weekend mornings.

### How do we pay?

The fee is shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so your statement may differ a little. The first class is free.

### Can my child publish a game?

Children build games that can be published, and the mentor explains what publishing involves. Whether to publish is the family's decision, under Roblox's own settings.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our full set of pages for Germany.
- [How to make a Roblox game](/how-to-make-a-roblox-game): A first game, explained step by step.
- [Roblox Studio errors fixed](/roblox-studio-errors-fixed): Common error messages and what they mean.
- [Coding for kids in Berlin](/coding-classes-for-kids-berlin): For families in the capital.
- [Coding Minecraft mods](/learn-to-code-minecraft-mods): The other big game children build in.
- [How we teach](/how-we-teach): What a live class looks like.

## Contact

Book the free first class at [https://learn.modernagecoders.com/roblox-coding-classes-germany](https://learn.modernagecoders.com/roblox-coding-classes-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
