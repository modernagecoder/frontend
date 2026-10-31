'use strict';
// After the Hour of Code: next steps (ag- guide door; UK and US exams cluster Phase 2, row US075). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/after-hour-of-code-next-steps/:
//  - hourofcode.com redirects to hourofai.org/en-US (page entries updated October 2026): "Building on over a decade of
//    success with the Hour of Code, our new global initiative"; activities "Fits in a single class period or a lunch
//    break", for "Kindergarten to the C-suite"; "reminders ahead of CSEdWeek, December 7-11" (en dash in original);
//    "First look at new activities launching November 16"; activity filters for Hour of AI and Hour of Code; listed
//    activities include Dance Party: AI Edition, Music Lab: Jam Session, Minecraft Hour of AI: The First Night, MakeCode
//    Bug Arena, Exploring AI with Scratch Face Sensing Blocks, LEGO Education: Modeling Machine Learning.
//  - code.org/en-US/hour-of-ai: "The Hour of Code is now the Hour of AI"; "The Hour of Code is a global movement reaching
//    tens of millions of students in 180+ countries"; "100 one-hour tutorials, available in over 45 languages"; footer
//    "\"Code.org\" is a former trademark of CodeAI"; CodeAI owns the Hour of AI and CS Discoveries trademarks.
//  - code.org/en-US (CodeAI): "84% of students already use AI" (CodeAI's own figure, not printed); nonprofit; 190
//    countries. /students: "Explore learning for ages 5-11" and "Learning for Ages 11 and Up"; App Lab, Game Lab, Web Lab.
//  - code.org/en-US/curriculum: Computer Science Fundamentals "9 Units, Grades K-5 Pathway"; Computer Science Connections
//    grades 3-5; Computer Science Discoveries "6 Units, Grades 6-10 Pathway"; AI Discoveries grades 6-8; Computer Science
//    Principles grades 9-12; AP Computer Science A in Java, grades 9-12; AI Foundations grades 9-12; CS Fundamentals
//    Express Course and Pre-reader Express; a unit with App Lab and the BBC micro:bit.
//  - csedweek.org: "CSEdWeek brought to you by the Computer Science Teachers Association"; Wednesday, November 18 preview
//    webinar; "come back December 9, Grace Hopper's birthday"; events free and virtual with a free CSTA account.
//  - scratch.mit.edu/about (redirects to scratchfoundation.org/home): "an independent nonprofit"; block-based, "no tricky
//    syntax required"; "over a billion Scratch projects".
// Our own material, labelled on the page: the pattern-to-loop counts (a 3-step move repeated 4 times is 12 blocks
// without a loop, 4 with one; k steps repeated n times: k times n blocks against k plus 1), the fencepost example (5
// squares need 4 gaps), the Python turtle program (standard library: turtle.Turtle, forward, right, penup, pendown,
// turtle.done), the practice set and the 6-week plan. Lesson family: spotting repetition and counting loop
// iterations, including the fencepost case.
// Siblings read so as not to repeat: code-org-app-lab-help, scratch-not-working-help, coding-classes-for-elementary-
// students, ai-literacy-for-elementary-students.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TURTLE = '# Our first Python program after block coding: five squares in a row.\nimport turtle\n\npen = turtle.Turtle()\n\ndef square(size):\n    for side in range(4):        # the same two steps, four times\n        pen.forward(size)\n        pen.right(90)\n\nfor number in range(5):          # five squares...\n    square(40)\n    if number < 4:               # ...but only four gaps between them\n        pen.penup()\n        pen.forward(60)\n        pen.pendown()\n\nturtle.done()';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GUIDE', blurb: 'What to do after the Hour of Code, now the Hour of AI: CSEdWeek December 7 to 11, 2026, free next steps by grade, and the loop habit that turns one hour into real coding.' },
  slug: 'after-hour-of-code-next-steps',
  code: 'ahc',
  accent: '#925241',
  accentRationale: 'After the Hour of Code: a warm terracotta #925241 from the US allocation table, 5.65:1 on paper #FBF8F2, friendlier for a family-facing guide and distinct from the competition greens, teal and slate',
  pageType: 'market',
  market: US,
  routeLabel: 'After the Hour of Code',
  title: 'After the Hour of Code: Next Steps for Kids in 2026',
  description: 'What to do after the Hour of Code, now the Hour of AI: CSEdWeek December 7 to 11, free next steps by grade, and how a kid moves from one hour to real coding.',
  ogDescription: 'The Hour of Code is now the Hour of AI. What your child can do in the week after CSEdWeek, free courses by grade, and the one coding idea that turns an hour of fun into a real skill.',
  twitterDescription: 'After the Hour of Code: free next steps and the loop habit.',
  pageName: 'After the Hour of Code: Next Steps',
  webPageDescription: 'A guide for US parents and teachers on what comes after an Hour of Code or Hour of AI activity, from the hourofai.org, CodeAI (formerly Code.org), CSEdWeek and Scratch Foundation pages, with an original loop lesson, practice set and six-week plan.',
  courseDescription: 'Live online coding classes for children aged about 6 to 12 who enjoyed an Hour of Code or Hour of AI activity and want to keep going: sequences, loops, events, conditions and their own games, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'After the Hour of Code',
  navLinks: [
    { href: '#now', label: 'Hour of AI' },
    { href: '#paths', label: 'Free next steps' },
    { href: '#loops', label: 'The loop habit' },
    { href: '#python', label: 'First Python' },
    { href: '#weeks', label: 'Six weeks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages about 6 to 12 &middot; CSEdWeek, December 7 to 11, 2026',
  h1: 'After the Hour of Code: next steps for your child',
  lede: 'Every December, millions of children try one hour of coding at school, and many come home asking to do more. This guide explains what has changed, since the Hour of Code is now the Hour of AI, lists the free next steps for each grade from the organizations that run them, and teaches the one idea that separates an hour of clicking from real coding: noticing when something repeats and writing it once.',
  secondaryCta: { href: '#loops', label: 'See the loop lesson' },
  wa: 'Hello Modern Age Coders, my child just did the Hour of Code at school in the US and wants to keep coding. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; from first blocks to first Python',
  spec: [
    ['Event', 'Hour of AI, formerly the Hour of Code'],
    ['CSEdWeek', 'December 7 to 11, 2026'],
    ['Activity length', 'About one class period'],
    ['Free next step', 'Scratch, or CodeAI courses by grade'],
    ['Paid next step', 'Live classes, batch or 1-on-1'],
    ['Ages here', 'About 6 to 12'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The Hour of Code, a free one-hour coding activity run by the nonprofit once called Code.org and now CodeAI, has become the Hour of AI, held around CSEdWeek, December 7 to 11 in 2026. After it, children can continue free with Scratch or CodeAI&rsquo;s courses. Modern Age Coders teaches the next stage live online, in a batch or 1-on-1, in our Coding for Kids course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for the week after the hour',
    lede: 'Blocks while the excitement is fresh, then games, then a first taste of Python.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'AHC / 01', title: 'Coding for kids', note: 'Ages about 6 to 12. From blocks to games, apps and AI, at the child&rsquo;s pace.' },
      { course: 'scratch-programming-complete-course', code: 'AHC / 02', title: 'Scratch coding for kids', note: 'For children who loved making things move and want their own games.' },
      { course: 'python-ai-kids-masterclass', code: 'AHC / 03', title: 'Python and AI for kids', note: 'For ages about 9 and up, once blocks start to feel easy.' }
    ]
  },

  sections: [
    {
      id: 'now', tint: 'tint', eyebrow: 'What changed',
      h2: 'Is the Hour of Code still happening in 2026?',
      lede: 'Yes, under a new name. CodeAI, the nonprofit formerly known as Code.org, now says the Hour of Code is the Hour of AI, and hourofcode.com now opens hourofai.org. Classic coding activities are still listed beside the new AI ones, and the week to watch is CSEdWeek, December 7 to 11, 2026.',
      body: [
        { kind: 'table', caption: 'The key facts, from each organization&rsquo;s own site (read 31 October 2026)', head: ['Question', 'Answer', 'Source'], rows: [
          ['What is it called now?', 'The Hour of AI; the Hour of Code is now the Hour of AI', 'CodeAI'],
          ['Who runs it?', 'CodeAI, which says "Code.org" is its former trademark', 'CodeAI'],
          ['How long is an activity?', 'About one class period or a lunch break', 'hourofai.org'],
          ['Who is it for?', 'From kindergarten upward; no AI or coding experience needed', 'hourofai.org'],
          ['When in 2026?', 'Around CSEdWeek, December 7 to 11; new activities previewed from November 16', 'hourofai.org'],
          ['Who runs CSEdWeek?', 'The Computer Science Teachers Association; free virtual events with a free CSTA account', 'csedweek.org'],
          ['A date in the week', 'December 9, Grace Hopper&rsquo;s birthday', 'csedweek.org']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the activities look like',
          left: [
            'The hourofai.org list mixes coding with AI ideas. Examples include Dance Party: AI Edition and Music Lab: Jam Session from CodeAI, a Minecraft activity where an AI helper needs a child&rsquo;s guidance, MakeCode Bug Arena from Microsoft, and Scratch face sensing blocks.',
            'CodeAI&rsquo;s page also keeps the older description: the Hour of Code as a global movement reaching tens of millions of students in 180+ countries, with 100 one-hour tutorials in over 45 languages.'
          ],
          rightH3: 'Why one hour is not enough',
          right: [
            'An hour-long tutorial is designed to succeed: every step is laid out, and the child gets a finished result. That is exactly what makes it a great start and a poor finish.',
            'Real coding begins when a child has a blank screen and an idea of their own. The gap between those two is small, but it needs a few weeks of practice, which the rest of this guide plans out.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://hourofai.org/en-US" rel="noopener" target="_blank">hourofai.org</a> (reached from hourofcode.com), <a class="ag-inline-link" href="https://code.org/en-US/hour-of-ai" rel="noopener" target="_blank">CodeAI: Hour of AI</a> and <a class="ag-inline-link" href="https://www.csedweek.org/" rel="noopener" target="_blank">CSEdWeek</a>, read 31 October 2026. Hour of AI, CodeAI and CS Discoveries are trademarks of CodeAI. We are not connected with CodeAI, CSTA or any activity partner.' }
      ]
    },
    {
      id: 'paths', tint: 'deep', eyebrow: 'Free next steps',
      h2: 'What should my child do after the Hour of Code?',
      lede: 'Keep going within a week, while the interest is fresh, and pick a tool that lets them build their own things. For most children aged 8 to 12 that is Scratch; for school-based learning, CodeAI&rsquo;s free courses are organized by grade.',
      body: [
        { kind: 'table', caption: 'Free courses by grade on CodeAI&rsquo;s curriculum page (code.org/en-US/curriculum, read 31 October 2026)', head: ['Grade band', 'CodeAI course', 'Size, as listed'], rows: [
          ['K to 5', 'Computer Science Fundamentals, including Express and Pre-reader Express courses', '9 units'],
          ['3 to 5', 'Computer Science Connections, linking CS with math, language arts, science and social studies', '11 units'],
          ['6 to 8', 'AI Discoveries', '8 units'],
          ['6 to 10', 'Computer Science Discoveries', '6 units'],
          ['9 to 12', 'Computer Science Principles; AP Computer Science A in Java; AI Foundations', '3, 4 and 6 units']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Scratch, the open canvas',
          left: [
            'The Scratch Foundation describes Scratch as block-based coding with no tricky syntax, free, and run by an independent nonprofit, with over a billion Scratch projects created. For a child who liked the hour, it is the natural place to make something with no instructions.',
            'If Scratch misbehaves on a school laptop, our <a class="ag-inline-link" href="/scratch-not-working-help">Scratch not working guide</a> covers the usual fixes.'
          ],
          rightH3: 'CodeAI&rsquo;s own labs',
          right: [
            'CodeAI&rsquo;s student page points ages 5 to 11 toward block-based coding and videos, and ages 11 and up toward self-paced courses in App Lab, Game Lab and Web Lab.',
            'App Lab is also used in school courses. Our <a class="ag-inline-link" href="/code-org-app-lab-help">App Lab help page</a> is for students who get stuck there.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://code.org/en-US/curriculum" rel="noopener" target="_blank">CodeAI curriculum</a>, <a class="ag-inline-link" href="https://code.org/en-US/students" rel="noopener" target="_blank">CodeAI for students</a> and the <a class="ag-inline-link" href="https://www.scratchfoundation.org/home" rel="noopener" target="_blank">Scratch Foundation</a>, read 31 October 2026. Scratch is a project of the Scratch Foundation; we are not connected with it.' }
      ]
    },
    {
      id: 'loops', tint: 'tint', eyebrow: 'The loop habit',
      h2: 'What is the first real coding skill after an Hour of Code?',
      lede: 'Spotting repetition and writing it once, with a loop. Most hour-long tutorials introduce a repeat block; the step after is a child seeing, on their own, that their twelve blocks are really one pattern four times.',
      body: [
        { kind: 'table', caption: 'How many blocks a repeating pattern needs, with and without a loop (our counting)', head: ['Pattern', 'Blocks without a loop', 'Blocks with a loop'], numCols: [1, 2], rows: [
          ['A 3-step dance move, 4 times', '12', '4 (one repeat block holding 3)'],
          ['A 2-step square side, 4 times', '8', '3'],
          ['A 3-step move, 10 times', '30', '4'],
          ['Any k steps, n times', 'k times n', 'k plus 1']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the table matters',
          left: [
            'Without a loop, a pattern repeated ten times takes ten times the blocks, and fixing one step means fixing it ten times. With a loop, the program stays the same size however many times it repeats, and one fix fixes every repeat.',
            'Children feel this the first time they change "4" to "40" and watch the program still work. That moment is worth more than another hour of tutorials.'
          ],
          rightH3: 'The fencepost trap',
          right: [
            'Loops bring the first classic bug. To draw 5 squares in a row with a gap between each, a child writes "repeat 5: square, gap" and gets an extra gap at the end. Five squares need only four gaps, as five fence posts need four rails.',
            'The fix is to ask, every time, "how many times does this really happen?" It is a habit, not a rule, and it saves real programmers too.'
          ] },
        { kind: 'p', mt: true, html: '<b>Worked example (ours).</b> A child&rsquo;s animation makes a character step, jump and spin, then do it again three more times: 12 blocks. Asked to find the pattern, they spot the step, jump and spin trio and wrap it in a repeat 4 block, leaving 4 blocks. Asked for a longer dance, they change one number to 8 and get 24 moves with no new blocks. Then we ask them to add a bow at the very end, once. If the bow goes inside the loop, the character bows 8 times, which is a fencepost bug they can see and fix by moving one block.' }
      ]
    },
    {
      id: 'python', tint: 'deep', eyebrow: 'First Python',
      h2: 'When should a child move from blocks to Python?',
      lede: 'When blocks feel slow rather than hard, often around age 9 to 11. The first Python program should do something the child already understands from blocks, so that only the typing is new.',
      body: [
        { kind: 'code', label: 'Five squares and four gaps (our program)', lang: 'Python', code: TURTLE, note: 'Our own program, using only Python&rsquo;s built-in turtle module. It is the fencepost lesson from blocks, written in text: a loop inside a function, and a check so the last square gets no gap.' },
        { kind: 'two', mt: true,
          leftH3: 'What changes, and what does not',
          left: [
            'The ideas are the same: a repeat block becomes <code>for side in range(4)</code>, and a custom block becomes <code>def square(size)</code>. What is new is spelling, spacing and colons, which is why this step should come after the ideas are secure.',
            'A child who can explain the block version first usually types the Python version in one lesson.'
          ],
          rightH3: 'Signs a child is ready',
          right: [
            'They build projects in Scratch without a tutorial, they make their own custom blocks, and they get frustrated dragging the same blocks again and again. Those are signs, not an age.',
            'Younger children, around 6 to 8, are usually better served by more block projects first. There is no prize for typing early.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Five practice puzzles after the hour',
      lede: 'Original puzzles, written by us, for a child aged about 8 to 11 who has finished an hour-long activity. Parents can read the answers aloud and ask the child to explain.',
      body: [
        { kind: 'ol', items: [
          '<b>Find the pattern.</b> A program has: move, turn, move, turn, move, turn, move, turn. How few blocks can it be? <i>Answer:</i> 3: one repeat 4 block holding move and turn.',
          '<b>Change one number.</b> That loop draws a square. What shape does repeat 3 with a turn of 120 degrees draw? <i>Answer:</i> a triangle, because three turns of 120 degrees make one full turn of 360.',
          '<b>Fence posts.</b> A garden needs 6 posts in a line. How many rails join them? <i>Answer:</i> 5. A loop that adds a rail after every post would add 6, one too many.',
          '<b>Inside or outside?</b> A cat should say "Ready!" once, then jump 5 times. Where does the say block go? <i>Answer:</i> before the repeat loop, outside it. Inside, the cat would say it 5 times.',
          '<b>Count the work.</b> A loop repeats 4 times and holds another loop that repeats 3 times. How many times does the inner block run? <i>Answer:</i> 4 times 3, which is 12.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to use them at home',
          left: [
            'Let the child guess first, then try it in Scratch or a CodeAI activity to check. Being wrong and then seeing why is the whole point.',
            'Five puzzles take about twenty minutes. Spread over a week, they keep the habit going after CSEdWeek ends.'
          ],
          rightH3: 'A word on AI activities',
          right: [
            'Some Hour of AI activities use AI tools that have their own age rules. Check each activity&rsquo;s teacher notes and the tool&rsquo;s terms before a child uses it at home.',
            'For understanding AI without chat tools, our <a class="ag-inline-link" href="/ai-literacy-for-elementary-students">AI literacy guide for elementary students</a> starts with patterns and training data.'
          ] }
      ]
    },
    {
      id: 'weeks', tint: 'deep', eyebrow: 'Six weeks',
      h2: 'A six-week plan from the Hour of Code to a first game',
      lede: 'Our plan for a child aged about 8 to 11, with one live lesson a week and two short practice sessions at home. It fits the weeks from CSEdWeek into the new year.',
      body: [
        { kind: 'table', caption: 'Six weeks after the hour (our plan)', head: ['Week', 'Lesson focus', 'At home'], rows: [
          ['1', 'Sequences: telling a sprite exactly what to do', 'Remix the hour&rsquo;s project with three changes'],
          ['2', 'Loops: finding the pattern', 'The five practice puzzles'],
          ['3', 'Events: when clicked, when key pressed', 'Make a sprite move with arrow keys'],
          ['4', 'Conditions: if touching, then', 'A sprite that bounces off walls'],
          ['5', 'Variables: keeping score', 'Add a score that counts catches'],
          ['6', 'A first game, planned and built by the child', 'Show it to someone and explain one part']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Keeping it the child&rsquo;s',
          left: [
            'The game in week 6 should be the child&rsquo;s idea, even if it is simple. A small game they invented teaches more than a big one copied from a video.',
            'Our teachers ask questions rather than giving block-by-block instructions, so the child does the thinking.'
          ],
          rightH3: 'After six weeks',
          right: [
            'Children who want more move into longer projects, then into Python around age 9 to 11. See our <a class="ag-inline-link" href="/coding-milestones-by-age">coding milestones by age</a> for what is typical at each stage.',
            'Others are happy to pause. One good experience of building something is a fine result, and the door stays open.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four steps from one hour to real coding',
    lede: 'The Hour of Code gets a child to step one. These are the steps after it, as we see them in our classes.',
    table: { caption: 'From tutorial to own projects (our steps)', head: ['Step', 'What the child can do'], rows: [
      ['1. Follower', 'Finishes a guided activity step by step'],
      ['2. Remixer', 'Changes a finished project to make it their own'],
      ['3. Pattern spotter', 'Sees repetition and writes it once with a loop'],
      ['4. Maker', 'Starts from a blank screen with their own idea']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to show you what they made and explain one block. Explaining is how they discover what they understand.',
      'A week is long for a seven-year-old. The sooner after the hour the next session happens, the more of the excitement carries over.'
    ] },
    right: { h3: 'For teachers', ps: [
      'A follow-up lesson the next week, asking students to change three things in their hour&rsquo;s project, moves a whole class from step one to step two.',
      'CSTA&rsquo;s CSEdWeek events are free and virtual, including a preview on Wednesday, November 18, for teachers new to computer science.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for young coders',
    lede: 'Every course is taught live by the same teacher each week, to a class or to one child.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages about 6 to 10', courses: [
        { code: 'AHC / FS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks, games, logic.' },
        { code: 'AHC / FS / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Creative coding with Scratch', blurb: 'Games and stories.' },
        { code: 'AHC / FS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Patterns and steps.' }
      ] },
      { num: 'II', h3: 'Building more', sub: 'Ages about 8 to 12', courses: [
        { code: 'AHC / BM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Real games in Scratch.' },
        { code: 'AHC / BM / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Design a game from scratch.' },
        { code: 'AHC / BM / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI learns patterns.' }
      ] },
      { num: 'III', h3: 'Typing code', sub: 'Ages about 9 and up', courses: [
        { code: 'AHC / TC / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First text code.' },
        { code: 'AHC / TC / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Numbers come alive.' },
        { code: 'AHC / TC / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'For keen older kids.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Small weekly lessons that keep the spark going',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Right after school, before the evening rush.' },
      { time: 'Weekends', l: 'A relaxed morning lesson.' },
      { time: '1-on-1', l: 'Paced for one child&rsquo;s age and attention.' }
    ],
    cells: [
      { h3: 'Their ideas', p: 'Children build what they imagine.' },
      { h3: 'Questions first', p: 'Teachers prompt, children think.' },
      { h3: 'Blocks then Python', p: 'Text code when they are ready.' },
      { h3: 'Short and regular', p: 'A weekly habit, not a cram.' },
      { h3: 'All US time zones', p: 'Live online, any state.' },
      { h3: 'Group size', p: 'Fifteen to twenty per batch, or one child.' }
    ]
  },

  projectsH2: 'Made by children in our classes',
  projectsLede: 'Games, apps and AI projects by our young learners. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'The Hour of AI, Scratch and CodeAI courses are free, and a child can go a long way with them. Our fee is for live teaching with a regular teacher, billed monthly, so a family can try a term after CSEdWeek and decide.',
    free: ['A free first lesson', 'A short pattern and logic task', 'No card details'],
    group: ['Fifteen to twenty children', 'The same teacher each week', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Paced to your child', 'Blocks or Python']
  },

  faq: {
    eyebrow: 'Questions from parents and teachers',
    h2: 'After the Hour of Code: what people ask',
    items: [
      { q: 'Is the Hour of Code still a thing?', a: 'Yes, under a new name. CodeAI, formerly Code.org, says the Hour of Code is now the Hour of AI, and hourofcode.com now leads to hourofai.org. Classic coding activities are still listed alongside the new AI ones.' },
      { q: 'When is CSEdWeek 2026?', a: 'The hourofai.org page gives CSEdWeek as December 7 to 11, which is Monday to Friday in 2026. CSEdWeek is run by the Computer Science Teachers Association, and its site highlights December 9, Grace Hopper\'s birthday.' },
      { q: 'What should my child do after the Hour of Code?', a: 'Keep building within a week, ideally something of their own. Scratch is free and suits ages about 8 to 12, and CodeAI offers free courses by grade, such as Computer Science Fundamentals for grades K to 5.' },
      { q: 'Is Code.org now called CodeAI?', a: 'Its website now uses the name CodeAI and says "Code.org" is a former trademark of CodeAI. The site address code.org still works and leads to the CodeAI pages.' },
      { q: 'What free coding courses are there for middle schoolers?', a: 'CodeAI lists Computer Science Discoveries for grades 6 to 10 and AI Discoveries for grades 6 to 8. Its student page also points ages 11 and up to App Lab, Game Lab and Web Lab.' },
      { q: 'What is the first coding skill to learn after the hour?', a: 'Loops: spotting a repeated pattern and writing it once. A 3-step move repeated 4 times is 12 blocks without a loop and 4 with one, and the loop version stays small however many repeats you add.' },
      { q: 'When should a child start Python?', a: 'When blocks feel slow rather than hard, often around age 9 to 11. The first Python program should repeat something they already built in blocks, so only the typing is new.' },
      { q: 'Are Hour of AI activities safe for young children?', a: 'Many are designed for classrooms from kindergarten up, but some use AI tools with their own age rules. Check each activity\'s teacher notes and the tool\'s terms before a child uses it at home.' },
      { q: 'Do you offer paid classes after the Hour of Code?', a: 'Yes. We teach live online coding classes for children aged about 6 to 12, in a group of 15 to 20 or one to one, and the first lesson is free.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of CodeAI or the Hour of AI?', a: 'No. We run our own classes and have no link to CodeAI, CSTA, the Scratch Foundation or any Hour of AI partner; their names and marks belong to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for young coders and their parents',
    lede: 'Help with tools, ages and next steps.',
    items: [
      { href: '/coding-classes-for-elementary-students', label: 'Coding for elementary students', p: 'Classes for grades K to 5.' },
      { href: '/scratch-not-working-help', label: 'Scratch not working?', p: 'Fixes for common Scratch problems.' },
      { href: '/code-org-app-lab-help', label: 'App Lab help', p: 'For older students stuck in App Lab.' },
      { href: '/coding-milestones-by-age', label: 'Coding milestones by age', p: 'What is typical, age by age.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for kids', p: 'Understanding AI before using it.' },
      { href: '/coding-classes-for-middle-school-students', label: 'Coding for middle schoolers', p: 'The step after elementary.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Share your child&rsquo;s age, which activity they did and what they enjoyed about it. The teacher starts from that project and finds the right next step.',
    readFirst: 'To see what lessons are like, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Lessons come live from our teaching team in India, timed for American afternoons and Saturday or Sunday mornings. A WhatsApp message tends to get the fastest answer.',
    formNote: 'The first lesson is free, and there is no card to enter.'
  },

  footer: {
    cols: [
      { h4: 'Young coders', links: [
        { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' },
        { href: '/coding-milestones-by-age', label: 'Milestones by age' },
        { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for kids' },
        { href: '/scratch-not-working-help', label: 'Scratch help' }
      ] },
      { h4: 'Next stages', links: [
        { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
        { href: '/code-org-app-lab-help', label: 'App Lab help' },
        { href: '/app-inventor-for-kids', label: 'App Inventor for kids' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Write it once, repeat it often'
  },

  personalityCss: `
.ag-root.ag-ahc .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ahc .ag-capsule { border-left-width: 6px; border-radius: 12px; }
.ag-root.ag-ahc .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ahc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ahc .ag-steps li { line-height: 1.75; }
.ag-root.ag-ahc .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Read raw on 31 October 2026: hourofai.org (reached from hourofcode.com; activities, ages, CSEdWeek December 7-11, new activities November 16, activity examples), CodeAI Hour of AI page (Hour of Code is now the Hour of AI, tens of millions of students in 180+ countries, 100 tutorials in 45+ languages, Code.org a former trademark), CodeAI curriculum (courses and grade bands) and students pages (ages 5-11 and 11+, labs), csedweek.org (run by CSTA, November 18 preview, December 9 Grace Hopper\'s birthday, free CSTA account), Scratch Foundation home (independent nonprofit, no tricky syntax, over a billion projects).',
    localProject: 'Our block counts (12 blocks to 4 for a 3-step move repeated 4 times; k times n against k plus 1), the fencepost example (5 squares, 4 gaps; 6 posts, 5 rails), a Python turtle program drawing five squares and four gaps, five practice puzzles (repeat 3 with 120 degree turns, 4 times 3 inner runs), a six-week plan. Lesson family: spotting repetition and counting loop iterations with the fencepost case.',
    requiredMentions: ['The Hour of AI; the Hour of Code is now the Hour of AI', 'CodeAI, which says "Code.org" is its former trademark', 'Around CSEdWeek, December 7 to 11; new activities previewed from November 16', 'December 9, Grace Hopper&rsquo;s birthday', 'Computer Science Connections, linking CS with math, language arts, science and social studies', 'A 3-step dance move, 4 times', 'Five squares need only four gaps', 'Write it once, repeat it often', 'over a billion Scratch projects created', 'tens of millions of students in 180+ countries', 'Monday to Friday in 2026'],
    sources: [
      { claim: 'hourofai.org: Hour of AI activities, ages, CSEdWeek dates and activity examples.', url: 'https://hourofai.org/en-US' },
      { claim: 'CodeAI: the Hour of Code is now the Hour of AI; reach and tutorials; former Code.org trademark.', url: 'https://code.org/en-US/hour-of-ai' },
      { claim: 'CodeAI curriculum by grade band.', url: 'https://code.org/en-US/curriculum' },
      { claim: 'CodeAI for students: ages 5-11 and 11+, labs.', url: 'https://code.org/en-US/students' },
      { claim: 'CSEdWeek by CSTA: events, November 18 preview, December 9.', url: 'https://www.csedweek.org/' },
      { claim: 'Scratch Foundation: independent nonprofit, block-based, over a billion projects.', url: 'https://www.scratchfoundation.org/home' }
    ],
    rejectedClaims: [
      'The year of the December 7 to 11 CSEdWeek dates is not printed beside them on hourofai.org; the page content was updated in October 2026 and the dates fall Monday to Friday in 2026, so the page says 2026 and names that basis.',
      'CodeAI\'s survey statistics on student AI use: not printed; not needed and not verified at their primary study.',
      'Age requirements of third-party AI tools in Hour of AI activities: not verified per tool; parents told to check each tool\'s terms.',
      'Scratch Blocks command names: not quoted from a Scratch reference; block steps are described in plain words and labelled ours.',
      'Hour of Code participation totals for 2025 or 2026: not published on the pages read; not printed.',
      'Any affiliation with CodeAI, CSTA, the Scratch Foundation or Hour of AI partners: none, stated on the page.'
    ]
  }
};
