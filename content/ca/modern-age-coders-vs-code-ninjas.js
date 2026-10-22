'use strict';
// Modern Age Coders vs Code Ninjas (ag- comparison door; Canada cluster Plan 2, row 87).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: an in-person centre where children move through belts at their own pace, versus a live online class
// that a regular teacher leads at a set time. Not a ranking: each option is described by its own site.
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src/modern-age-coders-vs-code-ninjas/):
//  - codeninjas.com/faq (faq.txt): "we have programs for kids ages 5-14"; "Programs vary by center, please contact a nearby
//    center for details."; "tools such as ScratchJr, MakeCode Arcade, and Unity"; "the curriculum is divided into 9 levels,
//    from White to Black belt"; "Code Ninjas centers are open to kids after school on weekdays."; "Some locations may offer
//    weekend hours."; "kids can attend multiple times a week"; "Only enrolled students and our trained Senseis are allowed in
//    the Dojo"; "comfortably accommodate up to 30 students at a time, with some local variation" (a centre capacity, not a
//    class size); "Rates are set by our locally owned and operated centers."; "Please contact a nearby center for pricing
//    information."; "hundreds of locations in the United States, Canada, and the United Kingdom" (also about.txt).
//  - codeninjas.com/locations/en-ca/ (loc_enca.txt): "Kids progress at their own pace through belt-based levels";
//    "Scratch, JavaScript, and Python"; "design and program real machines using platforms like VEX and LEGO". Province
//    directory pages answered for AB, BC, MB, NL, NS, ON and SK (loc_*.txt). Addresses /qc/, /nb/, /pe/ returned the
//    national page, which shows nothing either way, so the page says nothing about those provinces. No centre total is
//    printed: two counts of the directories disagreed and a total would be our sum.
//  - codeninjas.com/create (create.txt): "block based coding in Microsoft MakeCode"; "your child will begin writing in code
//    with JavaScript"; "a choice between Unity (C#) and Godot (GDScript)"; "Recommended for students aged 11-14";
//    "It is our proprietary learning platform" (IMPACT); "a tailored learning track through the Belts in IMPACT";
//    "Live feedback on their progress"; "collaboration with like-minded peers through in person sessions".
//  - codeninjas.com/jr (jr.txt): "for kids ages 5-7"; "no reading required"; "kid-friendly programming languages such as
//    Scratch and Blockly".
//  - a Code Ninjas Toronto centre page (toronto_520.txt): CREATE "kids aged 7-14" in one paragraph (ages 8 to 14 in another,
//    so the page gives the national 5 to 14 range); camps "Available during summer, winter, and spring breaks.";
//    "Schedule a free tour today!". The hours line and the "1234 Street Place Dr." block on every Code Ninjas page are
//    template filler and are not used. Testimonials on every page are not used.
//  - codeninjas.com home (home.txt): "multi-week module Academies".
// Our own material, labelled on the page: the coin-and-lives Python example (run under CPython 3.13 on 22 October 2026:
// prints "Score: 140" and "Lives left: 1" with three lives, "Score: 100" and "Lives left: 0" with two), the criteria
// table's Modern Age Coders column, the decision steps and the questions to ask a centre.
// Lesson family: predict, run, explain, change one thing (tracing a loop by hand).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LOOP = `# Our worked example: the coin-and-lives loop from a tiny platform game
levels = [3, 0, 5, 2, 0, 4]   # coins found on each of six levels
score = 0
lives = 3

for coins in levels:
    if coins == 0:
        lives = lives - 1     # an empty level costs one life
        if lives == 0:
            break             # game over: leave the loop at once
    score = score + coins * 10

print("Score:", score)
print("Lives left:", lives)`;

const LOOP_OUT = `With lives = 3 the program prints:
Score: 140
Lives left: 1

Change the fourth line to lives = 2 and it prints:
Score: 100
Lives left: 0`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'Code Ninjas centres and live online classes side by side, from Code Ninjas\' own pages: ages, belts, schedules, what is published, and who each one suits.' },
  slug: 'modern-age-coders-vs-code-ninjas',
  code: 'macc',
  accent: '#166B34',
  accentRationale: 'Code Ninjas comparison, Canada: a muted forest green #166B34, allocated for row 87 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 6.22 on the paper #FBF8F2, 5.85 on #F5F1E8 and 5.35 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Modern Age Coders vs Code Ninjas',
  title: 'Modern Age Coders vs Code Ninjas: Canada Comparison 2026',
  description: 'Code Ninjas centres or live online coding classes? A side-by-side read of Code Ninjas\' own pages: ages, belts, hours, pricing policy, and who each one suits.',
  ogDescription: 'A Code Ninjas centre and a live online class are different ways to learn to code. This comparison uses Code Ninjas\' own Canadian pages, read in October 2026, and says plainly when each one fits.',
  twitterDescription: 'Code Ninjas or a live online coding class in Canada: a fair comparison from Code Ninjas\' own pages.',
  pageName: 'Modern Age Coders vs Code Ninjas',
  webPageDescription: 'A comparison for Canadian parents of Code Ninjas, the in-person coding franchise, and Modern Age Coders, a live online coding school, built from each organisation\'s own published pages.',
  courseDescription: 'Live online coding classes for children and teens across Canada, from block coding and game design to typed Python and JavaScript, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Modern Age Coders vs Code Ninjas',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#criteria', label: 'Side by side' },
    { href: '#dojo', label: 'Inside a centre' },
    { href: '#online', label: 'A live class' },
    { href: '#example', label: 'Worked example' },
    { href: '#fit', label: 'Which suits whom' }
  ],
  eyebrow: 'Canada &middot; Comparison &middot; Coding for kids and teens',
  h1: 'Modern Age Coders vs Code Ninjas in Canada',
  lede: 'Parents who search for Code Ninjas in Canada are usually choosing between two shapes of coding education rather than two brands. Code Ninjas is a franchise of physical centres, which it calls dojos, where children drop in after school and work through belt levels at their own speed with staff nearby. Modern Age Coders is a live online school: a teacher runs a scheduled class over video, the same teacher week after week, and the class moves through a planned course together. This page sets the two side by side using what Code Ninjas publishes about itself, read on 22 October 2026, and what we publish about ourselves. It also says, case by case, when a centre is the more sensible choice.',
  secondaryCta: { href: '#criteria', label: 'See the side-by-side table' },
  wa: 'Hello Modern Age Coders, we are comparing Code Ninjas with live online classes for our child in Canada. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; not connected with Code Ninjas in any way',
  spec: [
    ['Code Ninjas', 'In-person franchise centres'],
    ['Its ages', '5 to 14, programs vary by centre'],
    ['Its pace', 'Self-paced belt levels'],
    ['Modern Age Coders', 'Live online classes'],
    ['Our ages', '6 to 67'],
    ['Our pace', 'A teacher-led course'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Code Ninjas runs in-person coding centres for ages 5 to 14, with Canadian centres in seven provinces, where children move through belt levels at their own pace with Senseis on hand. Modern Age Coders teaches coding live online, in a batch or one to one, to students aged 6 to 67 anywhere in Canada, in courses such as Game Development for Kids.',

  picks: {
    eyebrow: 'Where families usually start',
    h2: 'Three courses for a child who might otherwise join a dojo',
    lede: 'Each one starts where a Code Ninjas family often starts, with games, and moves on to typed code at the pace of the class.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'MACC / 01', title: 'Game Development for Kids', note: 'Ages 8 to 12. Scratch, Roblox and Minecraft projects, built one mechanic at a time with a teacher who asks why each block is there.' },
      { course: 'python-ai-kids-masterclass', code: 'MACC / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. The first typed language, through games, turtle drawings and small smart projects.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'MACC / 03', title: 'Godot Game Development', note: 'Ages 10 to 17. GDScript, 2D and 3D, for a student ready to write a whole game in a real engine.' }
    ]
  },

  sections: [
    {
      id: 'criteria', tint: 'tint', eyebrow: 'Side by side',
      h2: 'Code Ninjas and Modern Age Coders on the points parents ask about',
      lede: 'Every Code Ninjas cell is quoted or closely paraphrased from Code Ninjas\' own website, read on 22 October 2026. Where Code Ninjas says a detail varies by centre, the table says so too, because a franchise centre sets some things locally.',
      body: [
        { kind: 'table', caption: 'Code Ninjas (from codeninjas.com, read 22 October 2026) and Modern Age Coders (our own published details)', head: ['Point', 'Code Ninjas', 'Modern Age Coders'], rows: [
          ['Format', 'In-person centres; Code Ninjas says "Only enrolled students and our trained Senseis are allowed in the Dojo"', 'Live classes over video, with no centre to travel to'],
          ['Where in Canada', 'Its Canadian directory links to centre listings in Alberta, British Columbia, Manitoba, Newfoundland and Labrador, Nova Scotia, Ontario and Saskatchewan', 'Anywhere with an internet connection, from British Columbia to Newfoundland'],
          ['Ages', '"we have programs for kids ages 5-14", and "Programs vary by center"', '6 to 67, with separate courses for kids, teens and adults'],
          ['How learning is paced', '"Kids progress at their own pace through belt-based levels"', 'A planned course that the class moves through together, led by one regular teacher'],
          ['Teacher or guide', 'Code Senseis guide students in the dojo; CREATE runs on IMPACT, which Code Ninjas calls "our proprietary learning platform"', 'A teacher who leads each live class and knows each student\'s code'],
          ['Group size', 'Not stated as a class size. Code Ninjas says centres "comfortably accommodate up to 30 students at a time, with some local variation"', 'A batch of 15 to 20 students, or one student alone with the teacher'],
          ['Curriculum approach', 'Game building through belts: "block based coding in Microsoft MakeCode", then JavaScript, then Unity or Godot in the upper belts', 'Concept first, then a project that uses it; blocks for young beginners, then Python, JavaScript, Java or C++'],
          ['Languages and tools named', '"Scratch, JavaScript, and Python"; also ScratchJr, MakeCode Arcade, Unity, Godot, VEX and LEGO', 'Scratch, Python, JavaScript, Java, C++, Luau, GDScript and others, by course'],
          ['When', '"Code Ninjas centers are open to kids after school on weekdays." "Some locations may offer weekend hours."', 'Weekdays or weekends, at a time agreed for your province'],
          ['Prices published', 'No. "Rates are set by our locally owned and operated centers."', 'Yes. The monthly fee is shown on our pricing and course pages'],
          ['First step offered', 'A free tour or free session at a centre', 'A free first class online']
        ] },
        { kind: 'source', html: 'Sources: Code Ninjas <a class="ag-inline-link" href="https://www.codeninjas.com/faq" rel="noopener" target="_blank">FAQ</a>, <a class="ag-inline-link" href="https://www.codeninjas.com/locations/en-ca/" rel="noopener" target="_blank">Canadian locations</a>, <a class="ag-inline-link" href="https://www.codeninjas.com/create" rel="noopener" target="_blank">CREATE</a> and <a class="ag-inline-link" href="https://www.codeninjas.com/jr" rel="noopener" target="_blank">JR</a> pages, read 22 October 2026. Modern Age Coders is not affiliated with, endorsed by or connected to Code Ninjas. Code Ninjas details change and vary by centre, so confirm them with the centre you are considering.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table cannot show',
          left: [
            'A table makes two options look like rivals on every line. They are not. A child can learn a great deal in a dojo, and a child can learn a great deal in a live online class. The real differences sit in three places: whether the child travels to a building, whether the child sets the pace or the class does, and how much of each session a teacher spends talking with that one student.',
            'None of those is good or bad in itself. A self-paced child who loves being in a room with other kids may thrive on belts. A child who needs someone to stop them, ask what they expect the code to do, and wait for an answer may do better in a led class.'
          ],
          rightH3: 'Why no prices appear here',
          right: [
            'Code Ninjas does not publish fees on its national, Canadian or centre pages. Its FAQ says rates are set by each locally owned centre and asks families to contact a nearby centre. We do not repeat figures from third-party sites, because a franchise fee can differ between two centres in the same city.',
            'Our own fee appears further down this page as a monthly figure, shown in the currency of the visitor\'s region. To compare the two fairly, ask the centre what a month costs for the number of visits your child would make, and set it beside our monthly fee for eight live classes.'
          ] }
      ]
    },
    {
      id: 'dojo', tint: 'deep', eyebrow: 'Inside a Code Ninjas centre',
      h2: 'How Code Ninjas describes its own programs',
      lede: 'Code Ninjas publishes a clear picture of its model. Read together, its pages describe a drop-in centre built around game making, with a belt system that lets each child move on when they are ready.',
      body: [
        { kind: 'table', caption: 'Code Ninjas programs as described on codeninjas.com (read 22 October 2026)', head: ['Program', 'What Code Ninjas says', 'Ages it gives'], rows: [
          ['JR', 'A visual curriculum with "no reading required", using "kid-friendly programming languages such as Scratch and Blockly"', '"for kids ages 5-7"'],
          ['CREATE', 'Belt-based game building on IMPACT; "the curriculum is divided into 9 levels, from White to Black belt"', 'School-age children up to 14; one Toronto centre page says "kids aged 7-14"'],
          ['Upper belts', '"a choice between Unity (C#) and Godot (GDScript)"', '"Recommended for students aged 11-14" or Ninjas who finished IMPACT'],
          ['Camps', 'Themed weeks; a Toronto centre lists them as "Available during summer, winter, and spring breaks."', '5 to 14'],
          ['Academies', '"multi-week module Academies" in robotics, AI and more', 'By centre'],
          ['Robotics', 'Kids "design and program real machines using platforms like VEX and LEGO"', 'By centre']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The belt path in CREATE',
          left: [
            'Code Ninjas says that in the White to Green belts children build projects with "block based coding in Microsoft MakeCode", and that in the second half "your child will begin writing in code with JavaScript". The advanced Black Belt degrees move into a professional game engine, Unity with C# or Godot with GDScript.',
            'IMPACT, the platform behind CREATE, gives each child "a tailored learning track through the Belts in IMPACT" and "Live feedback on their progress", according to Code Ninjas. The belt colours give children a visible goal, which many find motivating.'
          ],
          rightH3: 'The centre itself',
          right: [
            'The FAQ explains that centres open after school on weekdays, that some may open at weekends, and that "kids can attend multiple times a week" in CREATE. Parents can wait on site, and only enrolled students and trained Senseis go into the dojo.',
            'Code Ninjas also stresses the social side: it says it encourages "collaboration with like-minded peers through in person sessions". For a child who wants friends who also code, a room full of them is a real draw that an online class does not copy.'
          ] }
      ]
    },
    {
      id: 'online', tint: 'tint', eyebrow: 'A live online class',
      h2: 'What a Modern Age Coders class looks like from the student\'s chair',
      lede: 'Our model starts from the opposite end. Instead of a room the child walks into whenever the centre is open, there is a booked class with a start time, a teacher who has planned the hour, and a group that meets that teacher again a few days later.',
      body: [
        { kind: 'ol', items: [
          '<b>Before class:</b> the student has one short task from last time, such as changing how many lives a game starts with and noting what happens.',
          '<b>The first ten minutes:</b> the teacher asks two or three students to show their screen and explain their change in their own words. Wrong guesses are welcome; they are what the lesson is built on.',
          '<b>The new idea:</b> the teacher introduces one concept, for example a loop that stops early, and writes a small program live while the class predicts each line.',
          '<b>Building:</b> students extend the program in their own copy. The teacher moves between screens, asking questions rather than typing fixes.',
          '<b>The last ten minutes:</b> one student\'s bug becomes the whole class\'s puzzle, and the session ends with a new short task for next time.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the same teacher matters',
          left: [
            'A regular teacher remembers that a student mixed up the score and lives variables last week, and checks for it again this week. That memory is what turns a set of sessions into a course.',
            'It also means a parent has one person to ask. After any class, a parent can message us and hear from the teacher who actually watched their child code.'
          ],
          rightH3: 'Typed code, sooner or later',
          right: [
            'Young beginners start with blocks, as they would at a centre. We move a student to typed Python or JavaScript when they can explain what their block programs do, not at a fixed age.',
            'Older students can continue the same path into teen courses, Ontario computer science companion classes, and contest preparation for the Canadian Computing Competition, because our courses run all the way up to adult learners.'
          ] }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Our teaching approach in one short program: predict, run, explain, change',
      lede: 'This is a teaching example we wrote for our own classes. It is not taken from Code Ninjas or from any other curriculum. It shows the habit we build in every lesson: before running code, the student says what it will print and why.',
      body: [
        { kind: 'code', label: 'Our example &middot; the coin-and-lives loop', lang: 'python', code: LOOP, note: 'We ran this program on 22 October 2026. Each level with coins adds ten points per coin; each empty level costs a life; at zero lives the loop stops with break.' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: LOOP_OUT },
        { kind: 'ol', mt: true, items: [
          '<b>Predict.</b> The teacher covers the output and asks: what will the score be? Most students add the coins (3 + 5 + 2 + 4 = 14), multiply by ten and say 140. Some forget the two empty levels cost lives and say there are 3 lives left.',
          '<b>Run.</b> The program prints Score: 140 and Lives left: 1. The students who said 3 lives now have a reason to read the if block again.',
          '<b>Explain.</b> A student traces the loop aloud, level by level: 30, then a life lost, then 80, 100, a second life lost, then 140. Saying it out loud is where the understanding lands.',
          '<b>Change one thing.</b> The teacher asks what happens if the game starts with 2 lives. Now the fifth level ends the game, break leaves the loop, the last level is never played, and the program prints Score: 100 and Lives left: 0.',
          '<b>Explain the change.</b> The class decides why 4 coins on the last level never count. The answer, that break stops the loop before the sixth level, is the lesson.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we teach it this way',
          left: [
            'A student who only runs code and watches what happens learns what the program did. A student who predicted first learns whether their picture of the program was right, which is the skill that later lets them write code without trial and error.',
            'The same five steps work in Scratch with an eight-year-old and in Java with a Grade 11 student. Only the code changes.'
          ],
          rightH3: 'What it looks like in blocks',
          right: [
            'For a younger student, the same idea is a Scratch sprite that collects coins, with a lives variable and a stop block. The teacher still asks for a prediction before the green flag is clicked.',
            'The point is not the game. It is the moment a child sees that their guess of 3 lives ignored the empty levels, and repairs their own picture of the loop.'
          ] }
      ]
    },
    {
      id: 'fit', tint: 'tint', eyebrow: 'Which suits whom',
      h2: 'When a Code Ninjas centre fits, and when a live online class fits',
      lede: 'We would rather a family chose the option that suits their child than chose us by default. Here is our honest reading of both, based on what each side publishes.',
      body: [
        { kind: 'two',
          leftH3: 'A Code Ninjas centre is likely the better fit when',
          left: [
            'Your child is 5, 6 or 7 and not yet reading with confidence. Code Ninjas JR is designed for ages 5 to 7 with no reading needed, and our youngest classes begin at age 6.',
            'Your child learns best in a room with other children, likes to drop in more than once a week, and enjoys earning belts at their own speed.',
            'There is a centre on your route home, and an in-person after-school slot also solves a supervision question for your family. Camps during school breaks and robotics with physical kits are other reasons families choose a centre.'
          ],
          rightH3: 'A live online class is likely the better fit when',
          right: [
            'There is no centre within easy reach of home or school, or the drive would take longer than the class.',
            'Your child does better when a teacher leads, asks questions and expects an answer, rather than working through levels alone.',
            'Your child is 14 or older, or already past block coding, and wants a path that continues into teen and adult courses, school computer science, or contest preparation. You also want to see the monthly fee before you call anyone.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 5 to 7', p: 'An in-person, no-reading program such as JR suits many children this young. From 6 we also teach Scratch online, in a batch or one to one.' },
          { h3: 'Ages 8 to 13', p: 'Both work. Choose on pace: self-paced belts at a centre, or a teacher-led course online.' },
          { h3: 'Ages 14 and up', p: 'Code Ninjas publishes programs up to 14. Our teen and adult courses carry on from there.' }
        ] }
      ]
    },
    {
      id: 'decide', tint: 'deep', eyebrow: 'Deciding',
      h2: 'Five steps to decide between a centre and a live class',
      lede: 'A simple order that saves time, whichever way you go.',
      body: [
        { kind: 'ol', items: [
          '<b>Check the map.</b> Use the Code Ninjas Canadian directory to see whether a centre is near your home or school, and how long the trip would take on a weekday afternoon.',
          '<b>Ask the centre four questions.</b> What does a month cost for the number of visits we want? How many children are usually in the dojo at the time we would come? Who will my child work with each visit? How do you show us progress between belts?',
          '<b>Book both free starts.</b> Code Ninjas offers a free tour or session at a centre. We offer a free first class online. Seeing both is the quickest way to know.',
          '<b>Watch your child, not the screen.</b> Afterwards, ask your child to explain one thing they made and how it works. The setting where they can explain more is usually the right one.',
          '<b>Decide for one term.</b> Neither choice is permanent. Our classes are billed monthly, and a child who outgrows one setting can move to the other.'
        ] },
        { kind: 'p', mt: true, html: 'For more on the online side of this choice, our page on <a class="ag-inline-link" href="/live-vs-recorded-coding-classes">live versus recorded coding classes</a> explains why we keep every class live, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a full lesson plan.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four starting points we use in a first class',
    lede: 'Our own placement stages, used whether a child has been to a dojo or not.',
    table: { caption: 'Placement stages for young coders (ours)', head: ['Stage', 'What we look for'], rows: [
      ['1. Explorer', 'Drags blocks to make something move, but cannot yet say why it moves'],
      ['2. Builder', 'Builds a small game in blocks and can explain each event'],
      ['3. Translator', 'Reads a short typed program and predicts what it prints'],
      ['4. Author', 'Writes a typed program from a blank file and debugs it without help']
    ] },
    left: { h3: 'For parents', ps: [
      'A child coming from Code Ninjas belts often places at stage 2 or 3, depending on how far into JavaScript they went. We place by what the child can explain, not by a belt colour.',
      'The step from stage 2 to stage 3 is where many children stall, because typed code punishes small slips. A teacher who asks for predictions shortens that stall.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you press run, say out loud what will happen. Then check.',
      'When something breaks, change one thing at a time. Two changes at once hide which one mattered.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for children who like making games',
    lede: 'Every course here is led live by one teacher who stays with the group for the season, and each can also be taken one to one.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 12', courses: [
        { code: 'MACC / BLOCK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games in blocks, from a blank stage.' },
        { code: 'MACC / BLOCK / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks to code inside a world children know.' },
        { code: 'MACC / BLOCK / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Patterns, steps and logic, with and without a screen.' }
      ] },
      { num: 'II', h3: 'Into typed code', sub: 'Ages 8 to 14', courses: [
        { code: 'MACC / TEXT / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau scripts for real Roblox games.' },
        { code: 'MACC / TEXT / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A first compiled language, through puzzles.' },
        { code: 'MACC / TEXT / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works, not only how to use it.' }
      ] },
      { num: 'III', h3: 'Past the belts', sub: 'Ages 13 to 18', courses: [
        { code: 'MACC / TEEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, through finished games.' },
        { code: 'MACC / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive sites and browser games.' },
        { code: 'MACC / TEEN / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most school courses use.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Class times that work from Halifax to Victoria',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, with the start time worked out for your province.' },
      { time: 'Weekends', l: 'Morning classes for families whose weekday afternoons are full.' },
      { time: '1-on-1', l: 'A slot fixed around one student, moved when the school year changes.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same person leads the class each week.' },
      { h3: 'Predict first', p: 'Students say what code will do before running it.' },
      { h3: 'No travel', p: 'A laptop at home replaces the drive to a centre.' },
      { h3: 'Blocks to text', p: 'Scratch first, then Python or JavaScript when ready.' },
      { h3: 'Any province', p: 'Families join from all over Canada.' },
      { h3: 'Two sizes', p: 'A batch of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Games and apps our students have made',
  projectsLede: 'Students in our classes finish projects they can share. A few are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'What parents wrote about us on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Our monthly fee covers eight live classes with a teacher and is shown below in your region\'s currency. There is no joining fee and no term contract; families pay a month at a time.',
    free: ['A free first class online', 'A placement chat with the teacher', 'No card needed to book'],
    group: ['Fifteen to twenty classmates', 'The same teacher every class', 'Choose the batch time that suits you', 'Billed month by month'],
    one: ['One student, one teacher', 'Pace set by the student', 'Projects chosen with the student']
  },

  faq: {
    eyebrow: 'Questions from Canadian parents',
    h2: 'Code Ninjas and Modern Age Coders: common questions',
    items: [
      { q: 'Is Modern Age Coders part of Code Ninjas?', a: 'No. Modern Age Coders is an independent live online school and is not affiliated with, endorsed by or connected to Code Ninjas. Everything on this page about Code Ninjas comes from its own website, read in October 2026.' },
      { q: 'Does Code Ninjas have centres in Canada?', a: 'Yes. On 22 October 2026 the Code Ninjas Canadian directory linked to centre listings in Alberta, British Columbia, Manitoba, Newfoundland and Labrador, Nova Scotia, Ontario and Saskatchewan. Check the directory for a centre near you, because centres open and close.' },
      { q: 'What ages does Code Ninjas teach?', a: 'Code Ninjas says it has programs for kids ages 5 to 14, and that programs vary by centre. JR is for ages 5 to 7 and needs no reading; CREATE is its main belt program for school-age children. Modern Age Coders teaches ages 6 to 67.' },
      { q: 'How much does Code Ninjas cost in Canada?', a: 'Code Ninjas does not publish a fee on its national or Canadian pages. Its FAQ says rates are set by its locally owned and operated centres and asks families to contact a nearby centre for pricing. Our own monthly fee is shown on our pricing page.' },
      { q: 'Is Code Ninjas self-paced?', a: 'Yes, by its own description: kids progress at their own pace through belt-based levels on its IMPACT platform, with Code Senseis in the dojo. Our classes are different: a teacher leads a planned course and the class moves through it together.' },
      { q: 'Is there an online alternative to Code Ninjas in Canada?', a: 'Modern Age Coders teaches coding live online to students across Canada, in a batch of 15 to 20 or alone with a teacher. Every class is taught over live video, so there is no centre to visit.' },
      { q: 'What times are live online classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We agree the time in your own province\'s time zone.' },
      { q: 'My child already has a Code Ninjas belt. Where would they start with you?', a: 'We place every new student in a free first class by what they can explain, not by belt colour. A child who reached the JavaScript belts often starts with typed Python or JavaScript; a child still in MakeCode may continue with blocks for a while.' },
      { q: 'Code Ninjas or online classes for a 6-year-old?', a: 'It depends on the child. Code Ninjas JR is built for ages 5 to 7 with no reading needed, and many young children enjoy being in a room. We teach Scratch online from age 6, in a batch of 15 to 20 or one to one, which suits a child who can sit with a screen and a teacher for an hour.' },
      { q: 'Can my child do both?', a: 'Some families do: a centre for the social side and camps, and a live class for a structured course in a typed language. If your child is at a centre now, a free first class with us is an easy way to see whether a led class adds something.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages for Canadian families',
    lede: 'More on coding classes across Canada, and on how our classes work.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every Canadian page we have, by province and city.' },
      { href: '/coding-and-ai-classes-in-toronto', label: 'Coding classes in Toronto', p: 'Live online options for families in the city.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'How coding fits the Ontario school years.' },
      { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta', p: 'Classes timed for Mountain time.' },
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'Classes timed for Pacific time.' },
      { href: '/live-vs-recorded-coding-classes', label: 'Live or recorded classes', p: 'Why every class we run is live.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'The habit behind the worked example above.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding a bug one change at a time.' },
      { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python first?', p: 'When a young coder is ready for typed code.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class the teacher gives your child a small game to change, asks them to predict what each change will do, and watches how they reason. You leave knowing where they would start and which course fits.',
    readFirst: 'Still weighing a centre against us? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for one lesson from start to finish, or open the <a class="ag-inline-link" href="/courses">course list</a> to compare syllabuses.',
    note: 'There is no Modern Age Coders building in Canada to visit. The teaching team is based in India and meets students only through live video, and WhatsApp is the quickest way for a parent to reach it.',
    formNote: 'Booking the first class is free and asks for no payment details.'
  },

  footer: {
    cols: [
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-and-ai-classes-in-toronto', label: 'Coding classes in Toronto' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/live-vs-recorded-coding-classes', label: 'Live or recorded' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Predict, then run'
  },

  personalityCss: `
.ag-root.ag-macc .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-macc .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-macc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-macc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-macc .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-macc .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Code Ninjas\' own pages, read raw on 22 October 2026: FAQ (ages 5 to 14, programs vary by centre, 9 belt levels, after-school weekday opening, some weekend hours, attend multiple times a week, centre capacity up to 30 at a time, rates set by locally owned centres), Canadian locations directory (belt-based self-paced levels, Scratch, JavaScript and Python, VEX and LEGO robotics, province listings for AB, BC, MB, NL, NS, ON, SK), CREATE (MakeCode blocks, then JavaScript, then Unity or Godot; IMPACT platform), JR (ages 5 to 7, no reading required, Scratch and Blockly), a Toronto centre page (camps in summer, winter and spring breaks).',
    localProject: 'An original Python coin-and-lives loop, written and run by us on 22 October 2026 (Score: 140 and Lives left: 1 with three lives; Score: 100 and Lives left: 0 with two), taught through five numbered steps: predict, run, explain, change one thing, explain the change. Plus our placement stages, five decision steps and four questions to ask a centre. Lesson family: tracing a loop by hand.',
    requiredMentions: ['comfortably accommodate up to 30 students at a time, with some local variation', 'Rates are set by our locally owned and operated centers.', 'a tailored learning track through the Belts in IMPACT', 'a choice between Unity (C#) and Godot (GDScript)', 'the curriculum is divided into 9 levels, from White to Black belt', 'kid-friendly programming languages such as Scratch and Blockly', 'Available during summer, winter, and spring breaks.', 'coin-and-lives loop', 'Lives left: 1', 'Newfoundland and Labrador, Nova Scotia, Ontario and Saskatchewan'],
    sources: [
      { claim: 'Ages 5 to 14; programs vary by centre; 9 belt levels; weekday after-school opening; capacity up to 30; rates set locally; hundreds of locations in the US, Canada and the UK.', url: 'https://www.codeninjas.com/faq' },
      { claim: 'Self-paced belt levels; Scratch, JavaScript and Python; robotics with VEX and LEGO; province directories.', url: 'https://www.codeninjas.com/locations/en-ca/' },
      { claim: 'CREATE belt path: MakeCode blocks, JavaScript, then Unity (C#) or Godot (GDScript); IMPACT platform.', url: 'https://www.codeninjas.com/create' },
      { claim: 'JR for ages 5 to 7, no reading required, Scratch and Blockly.', url: 'https://www.codeninjas.com/jr' },
      { claim: 'Camps available during summer, winter and spring breaks (a Toronto centre page).', url: 'https://www.codeninjas.com/locations/en-ca/on/toronto/coding-school-520.html' }
    ],
    rejectedClaims: [
      'A total number of Code Ninjas centres in Canada: not printed; two counts of the province directories disagreed, and a total would be our own sum.',
      'Code Ninjas fees from third-party sites: not used; Code Ninjas publishes none and says centres set rates.',
      'The hours line (3:00PM to 7:00PM Tues to Fri) and the "1234 Street Place Dr." address on Code Ninjas pages: template filler, not used.',
      'Code Ninjas testimonials and its "largest" and "only" claims: not used; no reviews or ratings of a competitor.',
      'Anything about Code Ninjas in Quebec, New Brunswick or Prince Edward Island: those directory addresses returned the national page, which proves nothing either way.',
      'Any claim that one option is better than the other: refused; the page says when each suits a child.',
      'Any affiliation with Code Ninjas: none, and the page says so.'
    ]
  }
};
