'use strict';
// Python games for kids (ag- topic door; US cluster Phase 2, row 11).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, fetched raw on 17 October 2026 (copies in keyword-research-2026-09/us/src/python-games-for-kids/):
//  - pypi.org/pypi/pygame/json: version "2.6.1", files uploaded "2024-09-29"; requires_python ">=3.6"; licence "LGPL";
//    wheel tags cp36 to cp313 plus PyPy (pp36, pp38, pp39), none newer than cp313; description: "Pygame_ is a free and
//    open-source cross-platform library for the development of multimedia applications like video games using Python.";
//    install steps "python --version", "pip --version", "pip install pygame", "python3 -m pygame.examples.aliens";
//    "python -m pygame.docs".
//  - python.org/downloads (gzip, decompressed): "Download Python 3.15.0"; releases "Python 3.15.0 Oct. 9, 2026",
//    "Python 3.14.8 Sept. 30, 2026", "Python 3.13.16 Sept. 30, 2026".
//  - pygame.org/docs/ (front page, "pygame v2.6.0 documentation"): quick start loop with pygame.QUIT, screen.fill,
//    pygame.display.flip(), clock.tick(60) "limits FPS to 60"; "dt is delta time in seconds since last frame".
//  - pygame.org/docs/ref/time.html: "By calling Clock.tick(40) once per frame, the program will never run at more than 40
//    frames per second."; ref/event.html: "your program must handle events every frame" and "Not handling events may
//    cause your system to decide your program has locked up."; ref/rect.html: colliderect "Returns true if any portion of
//    either rectangle overlap (except the top+bottom or left+right edges)." and the virtual attributes (x, y, top, left,
//    bottom, right); ref/key.html get_pressed; ref/font.html Font(file_path=None, size=12) and render(text, antialias,
//    color); tut/newbieguide.html: the update, render, wait loop "is actually a design pattern that serves as the skeleton
//    of most games".
//  - docs.python.org/3/library/idle.html: "IDLE is Python's Integrated Development and Learning Environment."; PyPI
//    sdist "pygame-2.6.1.tar.gz".
//  - docs.python.org/3/library/random.html: randint "Return a random integer N such that a <= N <= b."
// Not reachable: pygame.org/wiki/GettingStarted returned HTTP 502 (not retried around), so no wiki claims.
// Our own material, labelled on the page: both programs (documented APIs only; the reader runs them), the five-game
// ladder, our setup choice (Python 3.13 while pygame has no newer wheels), and the arithmetic: a guess-the-number game
// over 1 to 100 needs at most 7 halving guesses (2 to the 7th = 128, which covers 100; 2 to the 6th = 64 does not); a block
// moving 5 pixels a frame at 60 frames a second falls 300 pixels a second and crosses 680 pixels in about 2.27 seconds;
// the player at 6 pixels a frame moves 360 pixels a second and crosses 430 pixels in about 1.19 seconds.
// Lesson family: the game loop (input, update, draw, wait).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const GUESS = `# Guess my number (ours): plain Python, no installs
import random

secret = random.randint(1, 100)
tries = 0

while True:
    guess = int(input("Guess from 1 to 100: "))
    tries += 1
    if guess < secret:
        print("Higher!")
    elif guess > secret:
        print("Lower!")
    else:
        print("Got it in", tries, "tries")
        break`;

const DODGE = `# Dodge the falling block (ours): needs pygame
import random
import pygame

pygame.init()
screen = pygame.display.set_mode((480, 640))
clock = pygame.time.Clock()
font = pygame.font.Font(None, 36)

player = pygame.Rect(215, 580, 50, 30)
block = pygame.Rect(random.randint(0, 430), -40, 50, 40)
score = 0
running = True

while running:
    # 1. input: handle every event, every frame
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] and player.left > 0:
        player.x -= 6
    if keys[pygame.K_RIGHT] and player.right < 480:
        player.x += 6

    # 2. update: move the block, check for a hit
    block.y += 5
    if block.top > 640:
        block.x = random.randint(0, 430)
        block.y = -40
        score += 1
    if player.colliderect(block):
        running = False

    # 3. draw, then 4. wait for the next frame
    screen.fill("black")
    pygame.draw.rect(screen, "orange", player)
    pygame.draw.rect(screen, "white", block)
    label = font.render(f"Score {score}", True, "white")
    screen.blit(label, (10, 10))
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
print("Final score:", score)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'PYTHON GAMES', blurb: 'Python games for kids, from a no-install guessing game to a pygame arcade game, with the version check that saves a frustrating first evening.' },
  slug: 'python-games-for-kids',
  code: 'pgk',
  accent: '#181E9E',
  accentRationale: 'Python games for kids, US: the allocated deep indigo #181E9E, the colour of an old arcade screen at night, contrast 11.53, 10.84 and 9.92 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'Python games for kids',
  title: 'Python Games for Kids: Code Your First Game, Then Pygame',
  description: 'Python games for kids to code: a no-install guessing game, a full pygame arcade game, five games ordered by difficulty, and the Python version that pygame supports.',
  ogDescription: 'Five Python games kids can code, two complete programs, the pygame game loop explained line by line, and why the newest Python is not always the one to install for pygame.',
  twitterDescription: 'Python games kids can code: a guessing game, then pygame, step by step.',
  pageName: 'Python Games for Kids',
  webPageDescription: 'A guide for US kids and parents to coding games in Python, from a text game that needs no installs to an arcade game in pygame, built from the pygame, PyPI and python.org pages.',
  courseDescription: 'Live online Python classes for kids and teens in the United States, where the first projects are games, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Python games for kids',
  navLinks: [
    { href: '#ladder', label: 'Five games' },
    { href: '#first', label: 'First game' },
    { href: '#install', label: 'Installing pygame' },
    { href: '#loop', label: 'The game loop' },
    { href: '#dodge', label: 'Arcade game' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 9 to 16 &middot; Python and pygame',
  h1: 'Python games for kids',
  lede: 'Plenty of kids who want to learn Python want to make a game with it, and that is a very good instinct. Games give instant feedback: the code either makes the character move or it does not. This page shows how to get there in two steps. First a game that runs in plain Python with nothing to install, then a real arcade game in pygame, a free and long-established Python game library. Along the way there is a version trap worth knowing about before you install anything, and the four-part loop that sits at the heart of every game.',
  secondaryCta: { href: '#first', label: 'Start with the first game' },
  wa: 'Hello Modern Age Coders, my child in the US wants to make games in Python. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python games from the first class',
  spec: [
    ['For', 'Ages 9 to 16'],
    ['Language', 'Python'],
    ['Game library', 'pygame, free'],
    ['Computer', 'Windows, Mac or Linux'],
    ['First game', 'No installs needed'],
    ['Taught', 'In a batch or privately'],
    ['Timing', 'Weekdays or weekends'],
    ['Begin with', 'A free trial class']
  ],
  capsuleQ: 'In short',
  capsule: 'Kids can code Python games in two steps: a text game such as guess the number, which needs only Python and the random module, then graphical games with pygame, installed with pip install pygame. On PyPI, pygame 2.6.1 has ready-built files for Python up to 3.13, so check versions first. Modern Age Coders teaches Python through games, live online, ages 9 to 16.',

  picks: {
    eyebrow: 'Learn it live',
    h2: 'Three courses that begin with games',
    lede: 'Each course writes a game in the first weeks, then uses games to teach the ideas behind them.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PGK / 01', title: 'Python for kids', note: 'Suits 9 to 12: text games, turtle art, then pygame.' },
      { course: 'python-complete-masterclass-teens', code: 'PGK / 02', title: 'Python for teens', note: 'Teens 13 to 18: pygame projects, data and AI.' },
      { course: 'game-development-masterclass-for-kids', code: 'PGK / 03', title: 'Game development for kids', note: 'Kids 8 to 12: game design across Scratch, Roblox and more.' }
    ]
  },

  sections: [
    {
      id: 'ladder', tint: 'tint', eyebrow: 'What to build',
      h2: 'Five Python games for kids, from easiest to hardest',
      lede: 'This is the order we use, because each game adds exactly one new idea to the last one. The first two run in plain Python; the last three need pygame.',
      body: [
        { kind: 'table', caption: 'Five Python games, ordered by difficulty (our teaching order)', head: ['Game', 'Needs', 'The new idea', 'Typical age'], rows: [
          ['1. Guess my number', 'Python only', 'Loops, input and if statements', '9 and up'],
          ['2. Rock, paper, scissors', 'Python only', 'Random choice and comparing values', '9 and up'],
          ['3. Dodge the falling block', 'pygame', 'The game loop, rectangles and collisions', '10 and up'],
          ['4. Catch the stars', 'pygame', 'Lists of moving objects and a timer', '11 and up'],
          ['5. Two-player Pong', 'pygame', 'Velocity, bouncing and two sets of controls', '12 and up']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why start without graphics',
          left: [
            'A text game strips a program down to its logic. There is no window, no images and nothing to install, so a nine-year-old can write a complete, working game in a single lesson and understand every line.',
            'It also teaches the hardest early skill, reading an error message, at a time when the program is short enough that the error is easy to find.'
          ],
          rightH3: 'When to move to pygame',
          right: [
            'Once a child can write a while loop with an if inside it without help, they are ready. The pygame games on this page are the same structure with a window added.',
            'Teenagers who already type confidently can start at game 3. In our plan, younger children spend a few weeks on games 1 and 2 first.'
          ] }
      ]
    },
    {
      id: 'first', tint: 'deep', eyebrow: 'Game 1',
      h2: 'A first Python game kids can code in one sitting',
      lede: 'This guessing game needs nothing except Python itself. It uses randint from Python&rsquo;s random module, which the Python documentation describes as returning a random integer N such that a &lt;= N &lt;= b, so 1 and 100 are both possible.',
      body: [
        { kind: 'code', label: 'Program 1 &middot; guess my number', lang: 'python', code: GUESS, note: 'Run it in IDLE, which the Python docs call Python&rsquo;s Integrated Development and Learning Environment, or in any Python editor. Typing a word instead of a number stops it with a ValueError, which makes a perfect first bug to fix together.' },
        { kind: 'two', mt: true,
          leftH3: 'The maths hiding in the game (our worked example)',
          left: [
            'The clever way to play is to guess the middle every time: 50, then 25 or 75, and so on. Each guess halves the numbers left. Since 2 to the 7th power is 128, which is more than 100, halving finds any number from 1 to 100 in at most 7 guesses. Six guesses are not always enough, because 2 to the 6th is only 64.',
            'Children who work this out have discovered binary search, one of the most important ideas in computer science, by playing their own game.'
          ],
          rightH3: 'Three changes to try',
          right: [
            'Limit the player to 7 tries, and print the secret number if they run out. That needs a counter and one more if.',
            'Ask whether they want to play again at the end. That needs a loop around the whole game.',
            'Let the player choose the range, 1 to 1,000 for example, and work out the new maximum number of guesses: 2 to the 10th is 1,024, so 10.'
          ] }
      ]
    },
    {
      id: 'install', tint: 'tint', eyebrow: 'Before you install',
      h2: 'Installing pygame, and the Python version to check first',
      lede: 'pygame describes itself on its PyPI page as a free and open-source cross-platform library for making multimedia applications like video games in Python. Installing it is one command, as long as the Python on the computer is one that pygame has ready-built files for.',
      body: [
        { kind: 'table', caption: 'Versions on the official pages, read 17 October 2026', head: ['What', 'Official figure', 'Source'], rows: [
          ['Latest pygame', '2.6.1, files uploaded 29 September 2024', 'PyPI'],
          ['Python versions pygame 2.6.1 has ready-built files for', 'CPython 3.6 to 3.13, plus some PyPy builds', 'PyPI file list'],
          ['Python that pygame says it requires', '3.6 or newer', 'PyPI'],
          ['Newest Python on python.org', '3.15.0, released October 9, 2026', 'python.org'],
          ['Latest Python 3.13 release', '3.13.16, released September 30, 2026', 'python.org'],
          ['pygame licence', 'LGPL', 'PyPI']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Check Python.</b> In a command prompt on Windows or a terminal on a Mac, type python --version. pygame&rsquo;s own instructions give Python 3.8.10 as an example of a message that means Python is installed.',
          '<b>Check pip.</b> Type pip --version. pip usually comes with Python, but pygame&rsquo;s page notes that you can never be sure.',
          '<b>Install pygame.</b> Type pip install pygame, or pip3 install pygame on some computers.',
          '<b>Test it.</b> Type python3 -m pygame.examples.aliens. A small game should open; that game ships with pygame.',
          '<b>Keep the docs close.</b> python -m pygame.docs opens the documentation, and pygame says it launches the website if the docs are not found locally.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The version trap',
          left: [
            'On PyPI, the newest ready-built pygame files stop at Python 3.13, while python.org&rsquo;s big download button now offers Python 3.15.0. PyPI also lists a source package, pygame-2.6.1.tar.gz, but without a ready-built file for your Python, installing means building pygame from that source, a much harder job for a first-time install.',
            'That is a gap between two official pages on one day, not a fault in either project, and it may close when pygame publishes a new release. Check the pygame files on PyPI before you choose a Python.'
          ],
          rightH3: 'What we do with new students',
          right: [
            'Our choice, for now: we set up game students on the latest Python 3.13 release, which python.org updated on September 30, 2026, because pygame has ready-built files for it.',
            'When pygame lists files for a newer Python, we move up. The habit we want children to learn is the one behind this table: read the official version list before installing anything.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://pypi.org/project/pygame/" rel="noopener" target="_blank">pygame on PyPI</a> and <a class="ag-inline-link" href="https://www.python.org/downloads/" rel="noopener" target="_blank">python.org downloads</a>. We are not connected with the pygame project or the Python Software Foundation.' }
      ]
    },
    {
      id: 'loop', tint: 'deep', eyebrow: 'How games work',
      h2: 'The game loop: four steps every pygame game repeats',
      lede: 'Every game on a screen, from Pong to the largest console game, repeats the same short cycle many times a second. pygame&rsquo;s newbie guide calls this update, render, wait loop a design pattern that serves as the skeleton of most games.',
      body: [
        { kind: 'table', caption: 'The four parts of a pygame frame (our labels; the rules are from the pygame documentation)', head: ['Step', 'pygame code', 'What the documentation says'], rows: [
          ['1. Input', 'pygame.event.get()', 'Your program must handle events every frame; not handling them may cause your system to decide the program has locked up'],
          ['2. Update', 'Move objects, check colliderect', 'colliderect returns true if any portion of either rectangle overlaps, except the edges'],
          ['3. Draw', 'screen.fill, draw, then pygame.display.flip()', 'flip updates the contents of the entire display'],
          ['4. Wait', 'clock.tick(60)', 'Clock.tick(40) once per frame means the program never runs at more than 40 frames per second']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the input step is not optional',
          left: [
            'A classic beginner slip is leaving out the event loop when a game has no controls yet. pygame&rsquo;s documentation warns what happens: events pile up, and the operating system may decide the program has frozen.',
            'Handling pygame.QUIT is also what makes the close button on the window work. Without it, the only way out is to force the program to stop.'
          ],
          rightH3: 'Frames and speed',
          right: [
            'clock.tick(60) caps the game at 60 frames a second. Movement in the simple games here is counted in pixels per frame, so the frame cap is also what keeps the speed steady from one computer to the next.',
            'Later, students learn the method pygame&rsquo;s own quick start shows: measure dt, the time in seconds since the last frame, and multiply speeds by it, so movement stays smooth even when frames are uneven.'
          ] }
      ]
    },
    {
      id: 'dodge', tint: 'tint', eyebrow: 'Game 3',
      h2: 'A complete pygame arcade game in under 50 lines',
      lede: 'This is the first pygame game our students build. Move left and right, let the white block fall past you, and score a point for every block you avoid. Every line uses a part of pygame that its documentation describes.',
      body: [
        { kind: 'code', label: 'Program 2 &middot; dodge the falling block', lang: 'python', code: DODGE, note: 'Save it as dodge.py and run it after installing pygame. Rect stores a position and a size; its left, right, top, x and y attributes can be read and changed, and colliderect does the collision maths for you.' },
        { kind: 'two', mt: true,
          leftH3: 'Is the game fair? (our arithmetic)',
          left: [
            'At 60 frames a second, a block moving 5 pixels a frame falls 300 pixels a second. It starts 40 pixels above the window and is replaced when it passes 640, so it travels 680 pixels, taking about 680 / 300 = 2.27 seconds.',
            'The player moves 6 pixels a frame, 360 pixels a second, and the widest trip across the window is 480 - 50 = 430 pixels, about 1.19 seconds. Because 1.19 is less than 2.27, the player can always escape. Make the block faster than that and the game becomes unfair.'
          ],
          rightH3: 'Five upgrades, in order',
          right: [
            'Speed the block up a little each time the score rises. Then add a second block. Then give the player three lives instead of one.',
            'After that, replace the rectangles with images loaded from files, and add a sound when a block is dodged. Each upgrade practises one new part of pygame.'
          ] }
      ]
    },
    {
      id: 'ages', tint: 'deep', eyebrow: 'By age',
      h2: 'What Python game coding looks like at each age',
      lede: 'Our guide for US families, by grade. Children vary a lot, and we place each one by what they can already do, not by birthday.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Grades 3 to 5, ages 9 to 11', p: 'Text games, turtle drawings and simple quizzes. Typing speed is the main limit, so programs stay short and lessons stay playful.' },
          { h3: 'Grades 6 to 8, ages 11 to 14', p: 'pygame games 3 and 4, with lists, functions and a scoreboard. A good moment to start a folder of finished games.' },
          { h3: 'Grades 9 to 12, ages 14 to 18', p: 'Pong, then larger projects with classes, sprites and levels. A good stepping stone toward AP Computer Science or a portfolio project.' }
        ] },
        { kind: 'p', mt: true, html: 'Not sure where your child fits? Our pages on <a class="ag-inline-link" href="/python-for-10-year-olds">Python for 10 year olds</a>, <a class="ag-inline-link" href="/python-for-12-year-olds">Python for 12 year olds</a> and <a class="ag-inline-link" href="/python-for-14-year-olds">Python for 14 year olds</a> go into each age in more depth, and <a class="ag-inline-link" href="/blog/how-to-make-a-text-adventure-game-in-python">our text adventure tutorial</a> is another good first game.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From player to programmer',
    h2: 'Four stages of a young Python game maker',
    lede: 'A rough map of where children are, and the next step from each.',
    table: { caption: 'Stages of learning game coding in Python (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Copier', 'Types in a game from a page and gets it running'],
      ['2. Changer', 'Changes numbers and messages to see what happens'],
      ['3. Builder', 'Writes a new game from an empty file using the loop pattern'],
      ['4. Designer', 'Balances a game on purpose: speeds, scores, fairness']
    ] },
    left: { h3: 'For parents', ps: [
      'Copying is a legitimate start. Professional programmers learned the same way, by typing out code and then breaking it.',
      'The jump to stage 3 is the big one. An empty file is intimidating, and a teacher&rsquo;s first question can unlock it.'
    ] },
    right: { h3: 'For kids', ps: [
      'Change one number and run it again. You learn more from ten small experiments than one big plan.',
      'Read the last line of an error first. Python puts the reason there.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for kids who like making games',
    lede: 'Every one runs live with the same teacher each week, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Ages 6 to 12', courses: [
        { code: 'PGK / KID / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Games first, then AI projects.' },
        { code: 'PGK / KID / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Game ideas before typed code.' },
        { code: 'PGK / KID / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to games and apps.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'PGK / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'pygame, data and real projects.' },
        { code: 'PGK / TEN / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'From pygame thinking to Unity.' },
        { code: 'PGK / TEN / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A 2D game and Minecraft mods.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Teens and adults', courses: [
        { code: 'PGK / PRO / 01', slug: 'game-development-complete-masterclass-college', title: 'Game development', blurb: 'Professional engines and tools.' },
        { code: 'PGK / PRO / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Playable web pages and games.' },
        { code: 'PGK / PRO / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Build a game with a team, fast.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Python lessons, planned around your week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches across US time zones.' },
      { time: 'Weekends', l: 'Morning batches for families with busy weekdays.' },
      { time: '1-on-1', l: 'A personal plan, at times you pick.' }
    ],
    cells: [
      { h3: 'A game every few weeks', p: 'Each idea arrives inside a game.' },
      { h3: 'Typing on their own computer', p: 'Code written by the child, not watched.' },
      { h3: 'Set up together', p: 'Python and pygame installed in class.' },
      { h3: 'A regular teacher', p: 'The same person, week after week.' },
      { h3: 'Online, nationwide', p: 'From Maine to Hawaii.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Finished work from some of our students. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'From Google, as the parents wrote it.',

  fees: {
    h2: 'Fees',
    lede: 'Python and pygame are both free to download, and so is the first lesson. Regular classes are paid by the month in US dollars, with no long contract, and can stop when any month ends.',
    free: ['A free first lesson', 'Help installing Python and pygame', 'No card'],
    group: ['Batch of fifteen to twenty', 'One teacher all term', 'Choose a batch time', 'Monthly payment'],
    one: ['Private lessons', 'Your choice of times', 'Your own game ideas']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Python games for kids: common questions',
    items: [
      { q: 'What Python games can kids code?', a: 'Start with text games such as guess the number and rock, paper, scissors, which need only Python. Then move to pygame for games with a window: dodging blocks, catching stars and two-player Pong.' },
      { q: 'Is Python good for making games?', a: 'For learning, yes. Python reads clearly, and the pygame library handles windows, drawing, keyboard input and collisions, so children spend their time on game logic rather than setup.' },
      { q: 'Is pygame free?', a: 'Yes. pygame\'s PyPI page describes it as a free and open-source cross-platform library, and lists its licence as LGPL.' },
      { q: 'How do you install pygame?', a: 'Check that Python and pip work with python --version and pip --version, then run pip install pygame. Test it with python3 -m pygame.examples.aliens, a small game that comes with pygame.' },
      { q: 'Which Python version works with pygame?', a: 'On PyPI, pygame 2.6.1 has ready-built files for Python up to 3.13, while python.org now offers 3.15.0. We set students up on the latest 3.13 release until pygame publishes files for newer versions.' },
      { q: 'What age can kids start making Python games?', a: 'We start text games from about 9 or 10, once a child types comfortably, and pygame games from about 10. Teenagers can start with pygame directly.' },
      { q: 'Can kids make Python games without installing anything?', a: 'A text game needs only Python itself, which includes the random module. Graphical games need pygame, which is installed with pip.' },
      { q: 'What does clock.tick(60) do in pygame?', a: 'It limits the game to at most 60 frames per second. pygame\'s documentation says that calling Clock.tick(40) once per frame means the program never runs faster than 40 frames per second.' },
      { q: 'Which class times work for US kids?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much are Python game coding classes?', a: 'The first lesson is free. Regular classes are billed per month, and the fees panel on this page gives the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families with a young programmer.',
    items: [
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What a 10 year old can build.' },
      { href: '/python-for-14-year-olds', label: 'Python for 14 year olds', p: 'Bigger projects for high schoolers.' },
      { href: '/blog/how-to-make-a-text-adventure-game-in-python', label: 'Text adventure in Python', p: 'Another first game, step by step.' },
      { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python first', p: 'Choosing a starting language.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our hub for families across the country.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us whether your child has written any Python before, and what kind of game they would love to make. The first lesson starts there.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">about our teaching</a> or look through <a class="ag-inline-link" href="/courses">every syllabus</a>.',
    note: 'Classes are taught live online by teachers working from India, so the lesson comes to your home in any state. For a fast reply, send us a WhatsApp message.',
    formNote: 'The first lesson is free, with no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-for-9-year-olds', label: 'Python for 9 year olds' },
        { href: '/python-for-12-year-olds', label: 'Python for 12 year olds' },
        { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds' },
        { href: '/coding-for-14-year-olds', label: 'Coding for 14 year olds' }
      ] }
    ],
    bottomRight: 'Input, update, draw, wait'
  },

  personalityCss: `
.ag-root.ag-pgk .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-pgk .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-pgk .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pgk .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-pgk .ag-steps { gap: 1rem; }
.ag-root.ag-pgk .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'pygame on PyPI (JSON API, read 17 October 2026): version 2.6.1, files uploaded 2024-09-29, requires Python 3.6+, LGPL, wheels cp36 to cp313 and PyPy; install steps and example game. python.org downloads: 3.15.0 (October 9, 2026), 3.14.8 and 3.13.16 (September 30, 2026). pygame docs v2.6.0: quick start loop, Clock.tick, event queue warning, colliderect, Rect attributes, key.get_pressed, font.Font and render, newbie guide on the loop pattern. Python docs: random.randint.',
    localProject: 'Two programs (ours, documented APIs only): a guess-the-number game in plain Python and a pygame dodge game. Worked arithmetic: at most 7 halving guesses for 1 to 100 (2 to the 7th = 128); block 5 pixels a frame at 60 frames a second = 300 pixels a second, 680 / 300 = 2.27 seconds; player 360 pixels a second, 430 pixels in 1.19 seconds, so the game is fair. A five-game ladder. Lesson family: the game loop.',
    requiredMentions: ['2.6.1, files uploaded 29 September 2024', 'CPython 3.6 to 3.13', '3.15.0, released October 9, 2026', '3.13.16, released September 30, 2026', 'pip install pygame', 'python3 -m pygame.examples.aliens', 'python -m pygame.docs', 'decide the program has locked up', 'Clock.tick(40)', 'colliderect', 'at most 7 guesses', '680 / 300 = 2.27 seconds'],
    sources: [
      { claim: 'pygame 2.6.1, upload date, Python requirement, licence, wheel tags, install steps.', url: 'https://pypi.org/project/pygame/' },
      { claim: 'Current Python releases and dates.', url: 'https://www.python.org/downloads/' },
      { claim: 'The pygame quick start loop and dt.', url: 'https://www.pygame.org/docs/' },
      { claim: 'Clock.tick frame cap.', url: 'https://www.pygame.org/docs/ref/time.html' },
      { claim: 'Events must be handled every frame.', url: 'https://www.pygame.org/docs/ref/event.html' },
      { claim: 'colliderect and Rect attributes.', url: 'https://www.pygame.org/docs/ref/rect.html' },
      { claim: 'The loop as the skeleton of most games.', url: 'https://www.pygame.org/docs/tut/newbieguide.html' },
      { claim: 'random.randint includes both ends.', url: 'https://docs.python.org/3/library/random.html' }
    ],
    rejectedClaims: [
      'That pip install pygame fails on Python 3.14 or 3.15: not tested by us and not stated by pygame; the page states only the published wheel list and our setup choice.',
      'pygame wiki GettingStarted content: the page returned HTTP 502, so nothing from it is printed.',
      'Book recommendations or PDFs for Python games: not named; no third-party material is endorsed.',
      'That we ran the two programs on this page: they use documented APIs and the reader runs them.',
      'Any affiliation with the pygame project or the Python Software Foundation: none, and the page says so.'
    ]
  }
};
