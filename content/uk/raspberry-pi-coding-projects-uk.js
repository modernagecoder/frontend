'use strict';
// Raspberry Pi coding projects, UK (ag- community door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026. raspberrypi.com returned HTTP 403 (a browser challenge) to every
// automated request, so it was not used; per standing policy the block was not circumvented. The same
// official documentation is published openly by Raspberry Pi on GitHub (raspberrypi/documentation, branch
// master), read raw from raw.githubusercontent.com:
//  - computers/raspberry-pi/gpio-on-raspberry-pi.adoc: "You can find a 40-pin GPIO (general-purpose
//    input/output) header on all current Raspberry Pi boards."; outputs "high (3.3V) or low (0V)"; the `pinout`
//    command "is provided by the GPIO Zero Python library, which is installed by default in Raspberry Pi OS";
//    safety: "LEDs should have resistors to limit the current passing through them. Do not use 5V for 3.3V
//    components. Do not connect motors directly to the GPIO pins".
//  - computers/os/using-gpio.adoc: GPIO Zero examples (LED on GPIO17, button on GPIO2); "Run this in an IDE
//    like Thonny, and the LED will blink on and off repeatedly."
//  - computers/os/using-python.adoc: "Raspberry Pi OS comes with Python 3 pre-installed."; "Interfering with
//    the system Python installation can cause problems for your operating system."; from Bookworm, pip only
//    into a virtual environment (PEP 668).
//  - computers/os/rpi-os-introduction.adoc: Raspberry Pi OS "is the official operating system (OS) for
//    Raspberry Pi computers and is free"; based on Debian; the default edition includes "the Thonny Python
//    environment".
//  - microcontrollers/pico-series/about_pico.adoc: Pico "is programmed using MicroPython, C, or C++ and,
//    unlike other Raspberry Pi devices, doesn't run Linux".
//  - microcontrollers/micropython/what-is-micropython.adoc: "MicroPython is a full implementation of the
//    Python 3 programming language that runs directly on embedded hardware like Raspberry Pi Pico."
// Spine: a computer with pins. What makes a Raspberry Pi different from a family laptop is its 40-pin GPIO
// header, and the official docs show a child blinking an LED from Python in a handful of lines. The best
// projects use the pins; the rest could be done on any computer. Honest limits: we sell no hardware and run
// no electronics course; we teach the Python the projects need.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'RASPBERRY PI', blurb: 'A Raspberry Pi is a computer with pins. The projects worth doing are the ones that use them, and Python drives them.' },
  slug: 'raspberry-pi-coding-projects-uk',
  code: 'rpp',
  accent: '#351943',
  accentRationale: 'Raspberry Pi projects: a deep aubergine from the solver (12.43:1 on every paper tint, dE 9.7 from the nearest used accent), dark enough to sit calmly beside circuit diagrams and code',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Raspberry Pi coding projects',
  title: 'Raspberry Pi Coding Projects for Kids and Teens, UK',
  description: 'Raspberry Pi coding projects for children and teenagers in the UK: why the 40-pin GPIO header matters, safe first circuits, Python with GPIO Zero, and the Pico.',
  ogDescription: 'A Raspberry Pi is a computer with pins. The projects worth building use them, and the official docs show Python lighting an LED in a few lines.',
  twitterDescription: 'Raspberry Pi projects for young coders: GPIO pins, safe circuits, Python with GPIO Zero, and when to use a Pico instead.',
  pageName: 'Raspberry Pi Coding Projects',
  webPageDescription: 'Live online Python lessons for UK children and teenagers building Raspberry Pi projects, grounded in Raspberry Pi\'s official documentation.',
  courseDescription: 'Live online Python teaching for young Raspberry Pi owners: GPIO Zero, sensors and outputs, safe circuits, and programs that grow into real projects.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Raspberry Pi projects',
  navLinks: [
    { href: '#pins', label: 'A computer with pins' },
    { href: '#first', label: 'First projects' },
    { href: '#safe', label: 'Safe circuits' },
    { href: '#pico', label: 'Pi or Pico' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Ages 10 to 17 &middot; Physical computing',
  h1: 'Raspberry Pi coding projects for kids and teens',
  lede: 'Many families buy a Raspberry Pi and discover a slightly awkward truth: used with a screen and keyboard, it is a small computer that does much of what the family laptop already does. The part that makes it special sits along one edge. Raspberry Pi\'s official documentation puts it plainly: "You can find a 40-pin GPIO (general-purpose input/output) header on all current Raspberry Pi boards." Those pins let code reach out into the physical world, switching lights, reading buttons, measuring the room. Raspberry Pi OS comes with Python already installed, and the documentation\'s own example lights an LED from Python in a handful of lines using the GPIO Zero library, which is installed by default. This page is about the projects that use the pins, how to build them safely, and when a Raspberry Pi Pico is the better tool.',
  secondaryCta: { href: '#first', label: 'First projects' },
  wa: 'Hello Modern Age Coders, my child has a Raspberry Pi and I would like a free first Python lesson.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Grounded in Raspberry Pi\'s official documentation',
  spec: [
    ['What makes it special', 'The 40-pin GPIO header'],
    ['Language', 'Python 3, pre-installed'],
    ['Pin library', 'GPIO Zero, installed by default'],
    ['Editor', 'Thonny, in Raspberry Pi OS'],
    ['Smaller sibling', 'Pico, runs MicroPython'],
    ['Hardware', 'We do not sell it'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A Raspberry Pi is a small computer that runs Raspberry Pi OS, a free operating system based on Debian Linux, with Python 3 and the Thonny editor included. What sets it apart from an ordinary computer is its 40-pin GPIO header, present on all current boards, which lets programs switch outputs on and off and read inputs such as buttons and sensors. The GPIO Zero Python library, installed by default, makes that approachable: the official documentation shows an LED blinking and a button being read in a few lines. The projects most worth doing for children and teenagers use those pins, with simple safety rules: resistors for LEDs, no 5V into 3.3V parts, and no motors wired straight to a pin. For small single-purpose gadgets, the Raspberry Pi Pico microcontroller runs MicroPython instead. Modern Age Coders teaches the Python these projects need, live. We do not sell hardware. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Raspberry Pi owners',
    lede: 'Python for younger makers, Python for teenagers, and data for logging projects. Each card opens a syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'RP / 01', title: 'Python for Kids', note: 'The language Raspberry Pi OS ships with, taught for ages 10 to 13.' },
      { course: 'python-complete-masterclass-teens', code: 'RP / 02', title: 'Python for Teens', note: 'From basics to structured programs, the foundation for bigger Pi projects.' },
      { course: 'data-science-course-for-teens-python-data', code: 'RP / 03', title: 'Data Science with Python', note: 'For teenagers logging sensor readings who want to analyse and chart them.' }
    ]
  },

  sections: [
    {
      id: 'pins', tint: 'tint', eyebrow: 'A computer with pins',
      h2: 'What makes a Raspberry Pi different',
      lede: 'From Raspberry Pi\'s official documentation, published on GitHub.',
      body: [
        { kind: 'table', caption: 'The facts that matter for young coders', head: ['Feature', 'What the documentation says'], rows: [
          ['Operating system', 'Raspberry Pi OS is the official operating system, it is free, and it is based on Debian Linux'],
          ['Python', 'Python 3 comes pre-installed'],
          ['Editor', 'The default desktop edition includes the Thonny Python environment'],
          ['Pins', 'A 40-pin GPIO header on all current Raspberry Pi boards'],
          ['Outputs', 'A pin set as an output can be high, 3.3V, or low, 0V'],
          ['Pin library', 'GPIO Zero is installed by default and provides the pinout command']
        ] },
        { kind: 'p', html: 'Put together, those facts mean a child can plug in a Raspberry Pi, open Thonny, and control a light or read a button from Python without installing anything. That is the Raspberry Pi\'s real strength for learning. A game or a website can be written on any laptop. A burglar alarm, a weather station or a reaction timer needs pins, and the Pi has them built in.' },
        { kind: 'two', mt: true,
          leftH3: 'Projects that use the Pi',
          left: [
            'Lights and buttons: traffic lights, reaction games, a doorbell. Then sensors: temperature, motion, light.',
            'Projects that log data over hours or days, which a laptop would not be left running for.'
          ],
          rightH3: 'Projects any computer could do',
          right: [
            'Games, websites and ordinary programs run fine on a Pi, but they do not need one.',
            'A Pi used only for these is still a good cheap computer, just not the reason to buy one.'
          ] },
        { kind: 'source', html: 'Source: Raspberry Pi\'s official documentation in the <a class="ag-inline-link" href="https://github.com/raspberrypi/documentation" rel="noopener" target="_blank">raspberrypi/documentation</a> repository: the GPIO, Python, GPIO-from-Python, Raspberry Pi OS, Pico and MicroPython pages. raspberrypi.com refused automated requests when we checked, so we read the same documentation from its public source. We have no connection with Raspberry Pi.' }
      ]
    },
    {
      id: 'first', tint: 'deep', eyebrow: 'First projects',
      h2: 'First projects, in the order they build skills',
      lede: 'Each project adds one idea. Together they cover what most physical computing needs.',
      body: [
        { kind: 'table', caption: 'A project ladder for a new Raspberry Pi owner', head: ['Project', 'New idea', 'Python it uses'], rows: [
          ['Blink an LED', 'An output pin', 'A loop, and switching an LED on and off with GPIO Zero'],
          ['A button-controlled light', 'An input pin', 'Reading a button and an if-statement'],
          ['Traffic lights', 'Timing and sequence', 'Several outputs and pauses in order'],
          ['Reaction game', 'Measuring time', 'Variables, timing, and printing a score'],
          ['Temperature logger', 'Sensors and files', 'Reading a sensor and saving readings to a file'],
          ['Motion alarm', 'Events', 'Responding when something happens, rather than checking constantly']
        ] },
        { kind: 'p', html: 'The official documentation shows the first two almost exactly: an LED on one pin blinking once a second, and a button on another pin printing whether it is pressed, then the two combined so the button lights the LED. It even shows three ways to write the combined version, from a simple loop to an event-driven style where pressing the button calls a function. That progression, from checking in a loop to responding to events, is a genuine programming idea that transfers far beyond the Pi.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Start with outputs', p: 'An LED that obeys your code is the moment most children are hooked. It is also the simplest safe circuit.' },
          { h3: 'Then inputs', p: 'Buttons and sensors turn a program from a show into a conversation with the world.' },
          { h3: 'Then data', p: 'Logging readings to a file, then charting them, leads naturally into data science.' }
        ] }
      ]
    },
    {
      id: 'safe', tint: '', eyebrow: 'Safe circuits',
      h2: 'Three safety rules from the documentation',
      lede: 'Simple circuits are safe. A few mistakes can damage the board, and they are easy to avoid.',
      body: [
        { kind: 'p', html: 'The documentation warns: "LEDs should have resistors to limit the current passing through them. Do not use 5V for 3.3V components. Do not connect motors directly to the GPIO pins". It recommends a motor controller board or an H-bridge circuit for motors. Those three rules cover almost every beginner accident.' },
        { kind: 'table', mt: true, caption: 'The rules, and why', head: ['Rule', 'Why it matters'], rows: [
          ['Use a resistor with every LED', 'Without one, too much current can flow and damage the LED or the pin'],
          ['Keep 5V away from 3.3V parts', 'The pins work at 3.3V; a 5V signal can damage them'],
          ['Never wire a motor straight to a pin', 'Motors draw far more current than a pin can supply; use a controller board'],
          ['Check wiring before powering on', 'Most problems are a wire in the wrong hole, easily fixed before power flows']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For parents',
          left: [
            'Beginner kits with resistors included, a breadboard and jumper wires are enough for the first projects. An adult glance at the wiring before power goes on is a sensible habit.',
            'Nothing at this level involves mains electricity; the Pi runs from its own low-voltage power supply.'
          ],
          rightH3: 'Python housekeeping',
          right: [
            'The documentation warns that interfering with the system Python can cause problems. Extra libraries go in through the proper tools, and pip installs into a virtual environment.',
            'For first projects, the libraries already installed are all a child needs.'
          ] }
      ]
    },
    {
      id: 'pico', tint: 'tint', eyebrow: 'Pi or Pico',
      h2: 'Raspberry Pi or Raspberry Pi Pico',
      lede: 'Two very different devices share a name. Choosing the right one saves frustration.',
      body: [
        { kind: 'table', caption: 'The two, side by side', head: ['', 'Raspberry Pi computer', 'Raspberry Pi Pico'], rows: [
          ['What it is', 'A full computer running Linux', 'A microcontroller board that does not run Linux'],
          ['Language', 'Python 3, and much more', 'MicroPython, C or C++'],
          ['Needs a screen?', 'Usually, or remote access', 'No; programmed from another computer over USB'],
          ['Good for', 'Projects mixing pins, screens, files and the internet', 'Small gadgets that do one job']
        ] },
        { kind: 'p', html: 'The documentation describes MicroPython as "a full implementation of the Python 3 programming language that runs directly on embedded hardware like Raspberry Pi Pico", so the Python a child learns carries straight across. A Pico is a natural choice for a single-purpose gadget, a plant monitor or a wearable light; a Raspberry Pi is better when a project needs a screen, files or a web connection.' },
        { kind: 'two', mt: true,
          leftH3: 'What we offer',
          left: [
            'Live Python lessons that teach the programming these projects need, with a teacher who reads the code and helps when a project stalls.',
            'Guidance on structuring a growing project, from a single script into functions and files.'
          ],
          rightH3: 'What we are not',
          right: [
            'A hardware supplier or an electronics course. We do not sell or ship Raspberry Pis, Picos or kits, and we do not teach wiring in depth.',
            'Connected with Raspberry Pi. We describe the devices from their official documentation.'
          ] },
        { kind: 'p', html: 'Children who started on a school micro:bit may like <a class="ag-inline-link" href="/after-microbit-next-step-python-uk">the step after the micro:bit</a>. Raspberry Pi computers also fly on the International Space Station through <a class="ag-inline-link" href="/astro-pi-mission-zero-and-space-lab-help">Astro Pi</a>, and ambitious builders can take projects to <a class="ag-inline-link" href="/student-hackathons-uk">student hackathons</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs for young Raspberry Pi makers',
    lede: 'Placement follows what a child can already write in Python, not what hardware they own.',
    table: { caption: 'From a first LED to a real project', head: ['Rung', 'Usually', 'What should be true'], rows: [
      ['1. Python basics', 'Ages 10 to 12', 'Variables, loops and if-statements written confidently'],
      ['2. Outputs and inputs', 'Ages 11 to 13', 'LEDs and buttons controlled from Python with GPIO Zero'],
      ['3. Sensors and data', 'Ages 12 to 15', 'Sensor readings saved to files and charted'],
      ['4. A real build', 'Ages 13 and up', 'A multi-week project, planned, built and improved, with code reviewed']
    ] },
    left: { h3: 'Rung one comes first', ps: [
      'Hardware is exciting, but projects stall without Python basics. A few weeks of programming first saves months of frustration.',
      'The full order of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four is the payoff', ps: [
      'A finished project that does something useful at home is worth more than any number of tutorials.',
      'It can also be something real to talk about in a later application.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for young makers',
    lede: 'By stage and interest. The first lesson places each learner.',
    bands: [
      { num: 'I', h3: 'Python first', sub: 'Ages 10 to 17', courses: [
        { code: 'UK / RP1 / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language, for ages 10 to 13.' },
        { code: 'UK / RP1 / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Structured programs for bigger builds.' },
        { code: 'UK / RP1 / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Logic that makes projects reliable.' }
      ] },
      { num: 'II', h3: 'Data and AI', sub: 'For logging and smart projects', courses: [
        { code: 'UK / RP2 / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Sensor data analysed and charted.' },
        { code: 'UK / RP2 / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Where projects start to recognise things.' },
        { code: 'UK / RP2 / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Keeping connected projects safe.' }
      ] },
      { num: 'III', h3: 'Younger makers', sub: 'Before typed code', courses: [
        { code: 'UK / RP3 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks, MakeCode and first inventions.' },
        { code: 'UK / RP3 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch, complete', blurb: 'Logic and design in blocks.' },
        { code: 'UK / RP3 / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep for kids', blurb: 'Inventing and presenting a project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Python that makes things happen',
    lede: 'Our teachers work from India, whose clocks stay fixed, so the UK is four and a half hours behind in summer and five and a half in winter. Lessons are timed in UK hours.',
    slots: [
      { time: 'After school', l: 'Time to try the code on the Pi straight after.' },
      { time: 'Evening', l: 'For teenagers with busy days.' },
      { time: 'Weekend', l: 'Longer sessions for build projects.' }
    ],
    cells: [
      { h3: 'Programming first', p: 'The Python a project needs, taught properly before the wiring gets complicated.' },
      { h3: 'Projects they choose', p: 'Learners pick what to build; the teacher shapes the skills around it.' },
      { h3: 'Code reviewed', p: 'A teacher reads each program and suggests the next improvement.' },
      { h3: 'Loops to events', p: 'From checking in a loop to responding to events, as the official examples show.' },
      { h3: 'Safety habits', p: 'The documentation\'s three rules repeated until they are automatic.' },
      { h3: 'Small groups', p: 'Five to ten learners at one level.' }
    ]
  },

  projectsH2: 'Builds by our students',
  projectsLede: 'Four projects made in lessons by the learners themselves. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from parents on Google, word for word.',

  fees: {
    h2: 'Fees for Python lessons',
    lede: 'We bill monthly in US dollars, one price for all families outside India. The first lesson has no charge, and billing waits until you have chosen a course and a weekly time. Hardware is not included.',
    free: ['A lesson built around your child\'s Raspberry Pi plans', 'An honest view of the Python they need first', 'A phone number is all we need'],
    group: ['Five to ten learners at one level', 'The same teacher every week', 'Code reviewed in each lesson', 'Projects the learners choose'],
    one: ['A teacher for one learner', 'Paced around a specific build', 'Suits a teenager with an ambitious project']
  },

  faq: {
    eyebrow: 'Questions about Raspberry Pi projects',
    h2: 'What families ask',
    items: [
      { q: 'What can my child do with a Raspberry Pi?', a: 'Anything a small computer can do, but the special part is the 40-pin GPIO header, which lets Python code control lights and read buttons and sensors. The projects worth doing use those pins.' },
      { q: 'Does it come with Python?', a: 'Yes. Raspberry Pi OS comes with Python 3 pre-installed, the default desktop edition includes the Thonny editor, and the GPIO Zero library for the pins is installed by default.' },
      { q: 'What is a good first project?', a: 'Blinking an LED, then lighting it with a button. The official documentation shows both in Python in a handful of lines.' },
      { q: 'Is it safe?', a: 'Simple circuits are safe if you follow the documentation\'s rules: a resistor with every LED, no 5V into 3.3V parts, and never a motor wired straight to a pin.' },
      { q: 'Should we buy a Raspberry Pi or a Pico?', a: 'A Raspberry Pi is a full computer, better for projects with screens, files or the internet. A Pico is a microcontroller for small single-purpose gadgets and runs MicroPython.' },
      { q: 'Will the Python my child learns work on a Pico?', a: 'Yes, largely. The documentation describes MicroPython as a full implementation of Python 3 that runs on boards like the Pico.' },
      { q: 'Do you sell kits or boards?', a: 'No. We teach Python and help with projects; families buy their own hardware.' },
      { q: 'Do you teach electronics?', a: 'Only the basics a project needs. Our lessons are about the programming; we do not run an electronics course.' },
      { q: 'Are you connected with Raspberry Pi?', a: 'No. We are independent and describe the devices from Raspberry Pi\'s official documentation.' },
      { q: 'What does it cost?', a: 'The first lesson is free; after that, a monthly fee in US dollars, lower in a group than one to one, as shown in the fees section, and never paid in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for UK makers',
    lede: 'Other boards, space, and competitions.',
    items: [
      { href: '/after-microbit-next-step-python-uk', label: 'After the micro:bit', p: 'From school micro:bits to Python.' },
      { href: '/after-code-club-next-step-coding-uk', label: 'After Code Club', p: 'The next step once club guides run out.' },
      { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi', p: 'Code that runs on Raspberry Pi computers in space.' },
      { href: '/student-hackathons-uk', label: 'Student hackathons', p: 'Building to a deadline with a team.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'How we teach Python properly.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The full list of UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits. Tell us what your child wants to build; the lesson starts there and ends with a plan.',
    readFirst: 'Reading first? Each <a class="ag-inline-link" href="/courses">course page</a> sets out its content, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains who our lessons suit, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows real projects.',
    note: 'WhatsApp gets the quickest reply and is free from a UK phone. We are in India, so the number shows +91.',
    formNote: 'No card, no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Makers', links: [
        { href: '/after-microbit-next-step-python-uk', label: 'After the micro:bit' },
        { href: '/after-code-club-next-step-coding-uk', label: 'After Code Club' },
        { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/student-hackathons-uk', label: 'Student hackathons' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Raspberry Pi Python, live on UK time'
  },

  personalityCss: `
.ag-root.ag-rpp .ag-hero h1 { letter-spacing: -0.024em; font-weight: 720; }
.ag-root.ag-rpp .ag-capsule { border-left-width: 5px; border-bottom: 1px solid var(--ag-accent); }
.ag-root.ag-rpp .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-rpp .ag-table caption { text-align: left; font-weight: 680; }
.ag-root.ag-rpp .ag-table td:first-child { font-weight: 620; }
.ag-root.ag-rpp .ag-band-head h3 { letter-spacing: -0.012em; }
`,

  mustMention: ['40-pin GPIO', 'GPIO Zero', 'Thonny', 'Python 3', 'resistors', '3.3V', 'Pico', 'MicroPython', 'Raspberry Pi OS', 'do not sell'],

  dossier: {
    curriculumAuthority: 'UK physical computing, Raspberry Pi. raspberrypi.com returned HTTP 403 (browser challenge) to automated requests on 21 September 2026 and was not used; the block was not circumvented. Official documentation read raw from Raspberry Pi\'s public GitHub repository raspberrypi/documentation (master): GPIO page, "You can find a 40-pin GPIO (general-purpose input/output) header on all current Raspberry Pi boards."; outputs "high (3.3V) or low (0V)"; the pinout command "is provided by the GPIO Zero Python library, which is installed by default in Raspberry Pi OS"; "LEDs should have resistors to limit the current passing through them. Do not use 5V for 3.3V components. Do not connect motors directly to the GPIO pins". Using GPIO page: GPIO Zero LED and button examples; "Run this in an IDE like Thonny, and the LED will blink on and off repeatedly."; three versions of the button-and-LED program including callbacks. Using Python page: "Raspberry Pi OS comes with Python 3 pre-installed."; "Interfering with the system Python installation can cause problems for your operating system."; pip into virtual environments from Bookworm. Raspberry Pi OS introduction: official, free, Debian-based; default edition includes the Thonny Python environment. Pico: programmed "using MicroPython, C, or C++" and "doesn\'t run Linux". MicroPython: "a full implementation of the Python 3 programming language that runs directly on embedded hardware like Raspberry Pi Pico."',
    localProject: 'A computer with pins. What makes a Raspberry Pi different from a family laptop is its 40-pin GPIO header, and Raspberry Pi\'s own documentation shows Python lighting an LED and reading a button with the pre-installed GPIO Zero library in a few lines. The page sets out the facts from the official documentation (free Raspberry Pi OS, Python 3 and Thonny included), gives a project ladder that adds one idea at a time, from outputs to inputs to sensors and events, repeats the documentation\'s three safety rules, and compares the Raspberry Pi computer with the Pico microcontroller, whose MicroPython is described as full Python 3. It states that we sell no hardware and run no electronics course, and that raspberrypi.com refused automated reading, so its public GitHub documentation was used. Lesson family: a hobby computer whose educational value lives in one edge of the board.',
    requiredMentions: ['40-pin GPIO', 'GPIO Zero', 'resistors', 'do not sell'],
    sources: [
      { claim: 'Raspberry Pi official documentation, GPIO and the 40-pin header: the header on all current boards, pin voltages, GPIO Zero and pinout, and the safety warnings.', url: 'https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/raspberry-pi/gpio-on-raspberry-pi.adoc' },
      { claim: 'Raspberry Pi official documentation, Use GPIO from Python: GPIO Zero LED and button examples run in Thonny.', url: 'https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/os/using-gpio.adoc' },
      { claim: 'Raspberry Pi official documentation, Use Python on a Raspberry Pi: Python 3 pre-installed and package management.', url: 'https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/os/using-python.adoc' },
      { claim: 'Raspberry Pi official documentation, Raspberry Pi OS introduction, Pico and MicroPython pages.', url: 'https://github.com/raspberrypi/documentation' }
    ],
    rejectedClaims: [
      'Prices, sales figures or model specifications from raspberrypi.com: the site refused automated requests (403) and was not read.',
      'That any particular kit is best: families choose their own hardware; no product is recommended.',
      'An electronics course: we teach the programming; the page says so.',
      'Any affiliation with Raspberry Pi: none.',
      'Any promise of progress, which we decline.'
    ]
  }
};
