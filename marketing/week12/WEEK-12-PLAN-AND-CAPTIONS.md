# Week 12 - Carousels: hard concepts, made simple

**Theme:** KNOWLEDGE WEEK. Seven teaching carousels, six slides each (42 slides), each one taking a genuinely hard coding concept and making it click using something the reader already knows.
**Format change:** carousels are heavier than single posters, so this week runs **one carousel per day at 07:00** (7 posts across 7 days) instead of the usual 2/day. If you want the 17:00 slot filled too, repost a single strong slide from that day's carousel as a standalone.

**Why these seven:** each is a concept people either quit over or fake understanding of for years. Recursion, Big O, reference vs copy, how AI actually learns, hash maps, APIs, binary.

**How the carousels are built (the human rule):**
Every carousel follows the same six beats, but the writing never uses the "here are 5 things" cadence that makes educational content feel machine-written.
1. **Cover** - full-bleed colour, the confusion named out loud
2. **Analogy** - something from real life, never a code metaphor
3. **The mechanism** - the actual rule, still in plain words
4. **The code** - the same idea, now in Python, annotated by hand
5. **The gotcha** - the specific mistake everyone makes, plus the fix
6. **In one line + CTA** - a recap card worth screenshotting, then a soft invite

Deliberate human touches: handwritten Caveat margin notes, "I got this wrong too" framing, admitting the explanations were the problem and not the reader, one slide that asks the reader to answer in the comments (c7), and an answer revealed on the last slide.

**Rules kept:** age always "6 to 67" (never 65), no emojis, no em or en dashes, no invented statistics, no price talk. Every code sample is correct and runnable in spirit.

Slides live in `marketing/week12/<carousel-folder>/1.png` through `6.png` (1080x1080). Post them in numeric order.

---

## Posting order (1 carousel per day, 07:00)

| Day | Folder | Concept | Hook |
|-----|--------|---------|------|
| Mon | 01-recursion | Recursion | the one everyone gets stuck on |
| Tue | 02-big-o | Big O notation | works on 10 items, dies on 10,000 |
| Wed | 03-list-copy-trap | References vs copies | you changed one list, both changed |
| Thu | 04-how-ai-learns | How AI trains | guess, measure, adjust |
| Fri | 05-dictionaries | Hash maps | one name in a million, instantly |
| Sat | 06-apis | APIs | an API is a menu |
| Sun | 07-binary | Binary | computers count on two fingers |

---

## Captions

### Day 1 - Recursion
Recursion, explained without the headache.

If you have read four explanations of recursion and still do not get it, the explanations were the problem. Not you.

Here it is as a queue. You cannot see the front, so you tap the person ahead and ask how many people are in front of them. They have no idea either, so they tap the next person. Eventually someone at the front says "zero, I am first", and the answer travels all the way back to you.

That is recursion. Two rules make it work: somebody must know the answer without asking (the base case), and every step must get smaller.

Forget the first rule and you meet RecursionError. Write the stopping line before the clever line, every single time.

Swipe through, and save slide 6 for the next time it breaks.

Ages 6 to 67, live classes.
learn.modernagecoders.com

#Recursion #Python #LearnToCode #ComputerScience #Programming #ModernAgeCoders

---

### Day 2 - Big O
Your code works on 10 items. It dies on 10,000. Here is why.

Big O is not about seconds. It is about what happens when the list gets bigger.

Finding a name in a phone book by flipping page by page takes 1,000 flips for 1,000 pages. Opening the middle and halving it takes about 10 looks, and doubling the book only makes it 11.

Same task. Completely different behaviour at scale.

The one to watch for in your own code is a loop inside a loop. With 100 students it runs 10,000 times. With 10,000 students it runs 100 million times. That is the line behind most "but it worked on my test data" outages.

Swipe for the table that makes it obvious, and the one-line fix.

learn.modernagecoders.com

#BigO #DSA #CodingInterview #Python #Programming #ModernAgeCoders

---

### Day 3 - The list copy trap
You changed one list. Both of them changed. You are not going mad.

b = a does not make a copy. It gives the same list a second name. Two names, one thing in memory. So appending through b changes what a sees, because a and b were never two lists.

The fix is one word: b = a.copy()

The same trap wears three disguises: dictionaries, objects, and lists you pass into functions. And it exists in Java, JavaScript, C# and Python alike. Learn it once, it transfers everywhere.

Most people lose two days to this bug. You just spent forty seconds.

Swipe, then save it. You will need it on a Tuesday.

learn.modernagecoders.com

#Python #CodingTips #Debugging #LearnToCode #Programming #ModernAgeCoders

---

### Day 4 - How AI actually learns
How AI actually learns. No maths degree required.

Think about throwing paper into a bin. First throw is way too hard. Second is softer but still long. Third is closer. Fourth goes in. Nobody taught you the physics. You adjusted from the error, four times.

That is training, and the whole mechanism is three words: guess, measure how wrong you were, adjust. Then repeat a few million times. The fancy name for step three is gradient descent.

Here is the part the hype skips. A model was never trying to be right. It was only trying to be less wrong. It has no idea what a student or a cat or a sentence actually is. That is exactly why AI can be confident and wrong at the same time. Nothing in that loop ever checked for truth.

Understand this one carousel and you will never be fooled by an AI demo again.

Our AI and ML classes go from this loop to you training your own model. Ages 6 to 67.
learn.modernagecoders.com

#AI #MachineLearning #GradientDescent #Python #LearnAI #ModernAgeCoders

---

### Day 5 - Dictionaries
How a computer finds one name out of a million, instantly.

Your contacts app does this every time you type. It is not searching. It is doing something much cleverer.

Picture two libraries. In the first, books are stacked in no order, so finding one title means walking every aisle. In the second, the title itself tells you the shelf number, so you calculate where the book must be and walk straight there.

The second library never searches. That calculation has a name: hashing. Your key gets turned into an address, and the computer jumps to it.

In real code the difference is one bracket. Looping through a list of a million students can take a million checks. students["Meera"] takes one.

The catch nobody mentions: the key has to hold still. A list can change, so it cannot be a key. That is what "unhashable type: list" has been telling you all along.

Swipe. Interviewers love this one.

learn.modernagecoders.com

#DataStructures #Python #DSA #CodingInterview #Programming #ModernAgeCoders

---

### Day 6 - APIs
An API is not scary. It is a menu.

You use one every time you eat out. The menu is the fixed list of things you are allowed to ask for. Your order is the request, in the exact words the menu uses. The waiter carries it and brings something back. The kitchen is none of your business, and that is the whole point.

Once you see it that way, every API doc in the world is only four words: endpoint (which dish), request (placing the order), response (what comes back), and API key (your name on the reservation).

One slide in this carousel is not a joke. Your API key is a house key. Never put it directly in code you push to GitHub, because bots scan public repos for leaked keys within minutes. Keep it in an environment variable.

The moment APIs click, you can plug your project into weather, maps, payments or AI models.

learn.modernagecoders.com

#API #JSON #WebDevelopment #Python #LearnToCode #ModernAgeCoders

---

### Day 7 - Binary
Computers count on two fingers. Here is the whole system.

A computer only has light switches. Off or on. No 3, no 7, no maybe. So how does it hold the number 200? The same way you handle money: it uses more coins.

Every switch is worth double the one to its right. 8, 4, 2, 1. Switch on, add its value. Switch off, add nothing. So 1011 is 8 + 0 + 2 + 1, which is 11. That is the entire conversion, forever.

Slide 4 has one for you to try with no calculator. Comment your answer, the answer is on slide 6.

And suddenly a lot of random numbers stop being random. A byte is 8 bits because it is 8 switches. Colours stop at 255 because that is 8 switches all on. 1024 instead of 1000 because that is 10 switches.

A six year old gets this in one class. So does a sixty year old. We have taught it to both in the same week.

Ages 6 to 67, live.
learn.modernagecoders.com

#Binary #ComputerScience #STEM #CodingForKids #LearnToCode #ModernAgeCoders
