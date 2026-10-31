'use strict';
// Science Olympiad coding and build events help (ag- competition door; UK and US exams cluster Phase 2, row US073).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/science-olympiad-coding-events-help/:
//  - soinc.org/events/2027-event-table: the full 2027 Division B and Division C event lists (23 each). Neither list
//    contains Robot Tour or Detector Building. C Technology & Engineering: Boomilever, Electric Vehicle, Mission Possible,
//    Wright Stuff; C Inquiry: Codebusters, Engineering CAD, Experimental Design, Ping Pong Parachute. B Technology &
//    Engineering: Boomilever, Elastic Launched Glider, Roller Coaster, Scrambler; B Inquiry: Codebusters, Experimental
//    Design, Ping-Pong Parachute, Write It Do It.
//  - soinc.org/learn/c-event-short-descriptions: Codebusters "cryptanalyze and decode encrypted messages"; Electric Vehicle
//    "uses electrical energy as its sole means of propulsion to travel in a set amount of time, push a bottle past a line,
//    and move backwards to stop close to a Target point"; Engineering CAD "CAD parts in Onshape"; Remote Sensing
//    "computational process skills"; Protein Modeling "computer visualization".
//  - Electric Vehicle C Kit Modification Guidance 2027 (PDF, new 10/12/26): kit-built vehicles need two functional
//    modifications; list item 2 "Replace the primary electronic controller/microprocessor with a different type",
//    examples Arduino to ESP32, VEX to Arduino, Micro:bit to ESP32-S3; a model change such as Arduino UNO R3 to R4 is not
//    valid.
//  - soinc.org/rules-2027: free PDF rules from Tuesday, September 8, 2026, by email; Division B for grades 6-9, Division
//    C for grades 9-12. Rules manuals not downloaded (email-gated) and never reproduced.
//  - soinc.org/about and /join/start-team: 23 team events in each division; Division B is middle school, C high school;
//    15 students per team at a tournament.
//  - soinc.org/ethics_rules: no "external assistance" while competing; calculator apps on multipurpose devices not
//    permitted unless the event allows them; "All pre-built devices presented for judging must be constructed,
//    impounded, and operated by one or more of the 15 current team members unless stated otherwise in the rules.";
//    parents pledge "supporting independence in design and production of all competition devices".
//  - Codebusters Overview (updated for 2025, PDF from the Codebusters page): affine cipher "(ax + b) mod m"; a = 1 gives
//    a Caesar cipher; a = 25 and b = 25 gives AtBash; RSA no longer used in Codebusters. Cipher list is 2025's, so the
//    page names no 2027 cipher list.
//  - soinc.org/2027-national-tournament: 43rd national tournament, The Ohio State University, May 14-15, 2027, 120 teams.
// Our own material, labelled on the page: the affine example (key a = 5, b = 8: MEET AT THE LAB becomes QCCZ IZ ZRC LIN;
// inverse of 5 mod 26 is 21), the crib solve giving a = 5 or 18 with 18 rejected, 312 valid keys, the Python program,
// the practice set and the plan. Lesson family: modular inverses and solving a linear congruence (affine cryptanalysis).
// Siblings read so as not to repeat: vex-iq-programming-help, first-lego-league-coding-help-usa (unbuilt), science-fair-
// project-ideas-ai.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const AFFINE = '# Our practice tool for affine ciphers: encrypt, decrypt and crack from a crib.\n# For practice at home only: tournament rules bar calculator apps on laptops and phones.\nfrom math import gcd\n\nABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"\n\ndef encrypt(text, a, b):\n    return "".join(ABC[(a * ABC.index(c) + b) % 26] if c in ABC else c for c in text)\n\ndef inverse(a):\n    # the number that undoes multiplying by a, working mod 26\n    return next(x for x in range(26) if a * x % 26 == 1)\n\ndef decrypt(text, a, b):\n    ai = inverse(a)\n    return "".join(ABC[ai * (ABC.index(c) - b) % 26] if c in ABC else c for c in text)\n\ndef keys_from_crib(p1, c1, p2, c2):\n    """Every legal key that sends plain letter p1 to c1 and p2 to c2."""\n    found = []\n    for a in range(26):\n        if gcd(a, 26) != 1:\n            continue          # no inverse, so not a legal key\n        b = (ABC.index(c1) - a * ABC.index(p1)) % 26\n        if (a * ABC.index(p2) + b) % 26 == ABC.index(c2):\n            found.append((a, b))\n    return found\n\nsecret = encrypt("MEET AT THE LAB", 5, 8)\nprint(secret)                              # QCCZ IZ ZRC LIN\nprint(keys_from_crib("M", "Q", "E", "C"))  # [(5, 8)]\nprint(decrypt(secret, 5, 8))               # MEET AT THE LAB';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'Science Olympiad coding and build events for 2026 to 2027: which 2027 events use code, Electric Vehicle microcontrollers, Codebusters practice in Python and the device rules.' },
  slug: 'science-olympiad-coding-events-help',
  code: 'soc',
  accent: '#415908',
  accentRationale: 'Science Olympiad coding events help: a deep moss #415908 from the US allocation table, 7.46:1 on paper #FBF8F2, darker and yellower than the FIRST teal and clear of the VEX IQ plum',
  pageType: 'market',
  market: US,
  routeLabel: 'Science Olympiad coding events help',
  title: 'Science Olympiad Coding Events Help: 2027 Season Guide',
  description: 'Science Olympiad preparation for coders: which 2027 events use code, Electric Vehicle microcontrollers, Codebusters cipher practice in Python and device rules.',
  ogDescription: 'Robot Tour is not on the 2027 Science Olympiad list. Where code still matters this season, from Electric Vehicle microcontrollers to Codebusters practice, with a worked affine cipher lesson.',
  twitterDescription: 'Science Olympiad 2027: where code helps, and a cipher lesson in Python.',
  pageName: 'Science Olympiad Coding Events Help',
  webPageDescription: 'A guide for US middle and high school Science Olympiad students, parents and coaches to the 2027 events where programming helps, from the official event table, event pages and policies, with an original affine cipher lesson and practice set in Python.',
  courseDescription: 'Live online Python classes for Science Olympiad students in grades 6 to 12 that teach the programming and math behind coding-adjacent events: modular arithmetic, ciphers, microcontroller logic and data analysis, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Science Olympiad coding events',
  navLinks: [
    { href: '#events', label: '2027 events' },
    { href: '#vehicle', label: 'Electric Vehicle' },
    { href: '#codebusters', label: 'Codebusters' },
    { href: '#affine', label: 'Cipher lesson' },
    { href: '#rules', label: 'Device rules' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 12 &middot; The 2027 Science Olympiad season',
  h1: 'Science Olympiad coding events help for 2027',
  lede: 'Students who search for Science Olympiad coding help usually have Robot Tour in mind, but that event is not on the 2027 list. Code still matters this season, in quieter places: the microcontroller inside an Electric Vehicle, the practice programs a Codebusters student writes to drill ciphers, and the data work in several study events. This guide reads the official 2027 event table, event pages and policies, then teaches one piece of math-and-code that serves a Codebusters team directly: breaking an affine cipher.',
  secondaryCta: { href: '#affine', label: 'See the cipher lesson' },
  wa: 'Hello Modern Age Coders, my child is on a Science Olympiad team in the US and wants coding help for their events. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; devices built by the team, never by us',
  spec: [
    ['Season', '2027 events (school year 2026 to 2027)'],
    ['Divisions', 'B for grades 6 to 9, C for grades 9 to 12'],
    ['Events', '23 in each division'],
    ['Team', '15 students at a tournament'],
    ['Robot Tour', 'Not on the 2027 list'],
    ['Nationals', 'May 14 to 15, 2027, Ohio State'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Science Olympiad is a US team science competition with 23 events in each division, Division B for grades 6 to 9 and C for grades 9 to 12. On the 2027 list there is no Robot Tour, but Electric Vehicle often runs on a microcontroller, and Codebusters rewards cipher skills students can drill in code. Modern Age Coders teaches that Python and math live online, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for Science Olympiad coders',
    lede: 'Python first, then the math that ciphers and devices rely on.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'SOC / 01', title: 'Python for teens', note: 'Loops, strings, functions and data: enough to build your own practice tools.' },
      { course: 'maths-through-coding', code: 'SOC / 02', title: 'Math through coding', note: 'Modular arithmetic, functions and graphs, written as programs.' },
      { course: 'cpp-programming-for-kids-course', code: 'SOC / 03', title: 'C++ basics', note: 'The language family behind Arduino-style microcontroller code.' }
    ]
  },

  sections: [
    {
      id: 'events', tint: 'tint', eyebrow: 'The 2027 events',
      h2: 'Which 2027 Science Olympiad events involve coding?',
      lede: 'No 2027 event is a pure programming event, and Robot Tour and Detector Building do not appear in either division&rsquo;s 2027 table. Code helps most in Electric Vehicle, where many teams use a microcontroller, and as a practice tool for Codebusters; several other events lean on computing in smaller ways.',
      body: [
        { kind: 'table', caption: 'Coding links in 2027 events, from the Science Olympiad event table and event descriptions (soinc.org, read 31 October 2026); the coding column is our reading', head: ['Event', 'Division', 'What the event is', 'Where code helps (ours)'], rows: [
          ['Electric Vehicle', 'C', 'A vehicle powered only by electricity travels in a set time, pushes a bottle past a line and reverses to stop near a target', 'The controller that times the run and stops the motor; the 2027 kit guidance names Arduino, ESP32, micro:bit and VEX controllers'],
          ['Codebusters', 'B and C', 'Teams cryptanalyze and decode encrypted messages using historical and modern ciphers', 'Writing programs at home to generate and check practice ciphers'],
          ['Engineering CAD', 'C', 'Teams read engineering drawings and CAD parts in Onshape, then build an assembly', 'Computer modeling rather than code; precise, rule-based thinking transfers'],
          ['Remote Sensing', 'C', 'Imagery, data and computational process skills on climate topics', 'Data handling and quick calculations in practice'],
          ['Experimental Design', 'B and C', 'Design, run and report an experiment on site', 'Analysing practice data sets in Python at home'],
          ['Scrambler, Mission Possible', 'B; C', 'Pre-built devices: a Division B vehicle, and a Division C Rube Goldberg-like device', 'Read the event rules for which electronics, if any, are allowed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the list matters',
          left: [
            'Science Olympiad rotates events from year to year, so a guide written for an earlier season can point a student at an event that no longer exists. Always start from the current event table on soinc.org.',
            'For 2027 the coding-heavy choice in Division C is Electric Vehicle. In Division B, the closest fit for a young programmer is Codebusters, where the practice, not the event, involves code.'
          ],
          rightH3: 'The format in brief',
          right: [
            'Science Olympiad describes its tournaments as academic track meets with 23 team events in each division. Division B is middle school and Division C is high school, and only 15 students per team compete at a tournament.',
            'The 2027 National Tournament, the 43rd, is set for The Ohio State University on May 14 to 15, 2027, for 120 teams, according to Science Olympiad&rsquo;s national tournament page.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.soinc.org/events/2027-event-table" rel="noopener" target="_blank">2027 Event Table</a>, <a class="ag-inline-link" href="https://www.soinc.org/learn/c-event-short-descriptions" rel="noopener" target="_blank">C event descriptions</a>, <a class="ag-inline-link" href="https://www.soinc.org/about" rel="noopener" target="_blank">About Science Olympiad</a> and the <a class="ag-inline-link" href="https://www.soinc.org/2027-national-tournament" rel="noopener" target="_blank">2027 National Tournament</a> page, read 31 October 2026. Science Olympiad is a trademark of Science Olympiad, Inc. We are not connected with Science Olympiad.' }
      ]
    },
    {
      id: 'vehicle', tint: 'deep', eyebrow: 'Electric Vehicle',
      h2: 'Does Science Olympiad Electric Vehicle need programming?',
      lede: 'Not necessarily, but many vehicles use one. Science Olympiad&rsquo;s 2027 kit modification guidance treats the microcontroller as a part a team can swap, naming boards such as Arduino, ESP32, micro:bit and VEX, so a team that builds around one needs someone who can program it.',
      body: [
        { kind: 'table', caption: 'What the 2027 Electric Vehicle kit guidance says about controllers (Electric Vehicle C Kit Modification Guidance 2027, new 10/12/26)', head: ['Point', 'What the guidance says'], rows: [
          ['When it applies', 'A team that builds its vehicle from a kit must make two functional modifications from the list'],
          ['Controller swap', 'Replacing the primary electronic controller or microprocessor with a different type counts as one modification'],
          ['Valid examples', 'Arduino to ESP32, VEX to Arduino, micro:bit to ESP32-S3'],
          ['Not valid', 'Changing only the model or version, such as Arduino UNO R3 to UNO R4, or ESP32 to ESP32-S3'],
          ['Other options', 'Motor type, drive method, wheel diameter, axle spacing, track width, mass and alignment method']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the code actually does',
          left: [
            'The event description asks for a run in a set time that pushes a bottle past a line and then reverses to stop near a target. In code that becomes a sequence: drive a measured distance, reverse a measured distance, and stop, with timing tuned to the target time.',
            'Switching controller types is a programming job in itself. Moving from a micro:bit to an ESP32 can mean moving from blocks or MicroPython to Arduino-style C++, which is why we teach both families of language.'
          ],
          rightH3: 'Tuning is a data problem',
          right: [
            'A vehicle that stops 4 cm short every time is easy to fix; one that stops anywhere within 20 cm is not. We teach students to log each test run, distance, time and stop error, and to compute the average and spread before changing anything.',
            'That habit is ordinary data analysis in Python, and it makes the team&rsquo;s own device better without anyone outside the team touching it.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.soinc.org/electric-vehicle-c" rel="noopener" target="_blank">Electric Vehicle C event page</a> and its 2027 Kit Modification Guidance PDF, read 31 October 2026. Full rules are in the official 2027 rules, free on the <a class="ag-inline-link" href="https://www.soinc.org/rules-2027" rel="noopener" target="_blank">2027 Rules page</a>.' }
      ]
    },
    {
      id: 'codebusters', tint: 'tint', eyebrow: 'Codebusters',
      h2: 'Can coding help with Science Olympiad Codebusters?',
      lede: 'Yes, as a way to practice, not at the event. Science Olympiad&rsquo;s policies bar calculator apps on laptops, phones and tablets unless an event allows them, so plan on solving by hand unless the 2027 rules say otherwise. At home, a student who writes a cipher program understands the cipher far better than one who only solves printed puzzles.',
      body: [
        { kind: 'table', caption: 'Some ciphers in Science Olympiad&rsquo;s Codebusters Overview (updated for 2025), with what coding one teaches (the right column is ours)', head: ['Cipher', 'Type, as the overview labels it', 'What writing it in code teaches'], rows: [
          ['Caesar', 'Monoalphabetic', 'Shifting letters with arithmetic mod 26'],
          ['AtBash', 'Monoalphabetic', 'A mirror mapping; encoding twice gives the original text back'],
          ['Aristocrat and Patristocrat', 'Monoalphabetic', 'Letter frequency counts and pattern search'],
          ['Affine', 'Monoalphabetic math', 'Multiplying mod 26 and undoing it with an inverse'],
          ['Hill 2x2 and 3x3', 'Polyalphabetic', 'Matrices mod 26'],
          ['Vigen&egrave;re and Porta', 'Polyalphabetic', 'A repeating key and why key length matters']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Check this season&rsquo;s list',
          left: [
            'The overview gives a breakdown by division and tournament type, but it is dated 2025, and the cipher summary linked from the event page is also 2025&rsquo;s. The 2027 rules decide which ciphers appear, so a student should check those before choosing what to drill.',
            'The overview also notes that RSA is no longer used in Codebusters, a sign that the list does change.'
          ],
          rightH3: 'A program as a practice partner',
          right: [
            'A student who writes a small encrypt function can make unlimited practice puzzles for a teammate, with answers known. Writing the decrypt function forces them to understand the cipher&rsquo;s math exactly.',
            'Speed still has to be built by hand. We pair every coding exercise with timed pencil practice, because pencil is what the tournament allows.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://www.soinc.org/codebusters-c" rel="noopener" target="_blank">Codebusters event page</a> and its Codebusters Overview PDF, and Science Olympiad&rsquo;s <a class="ag-inline-link" href="https://www.soinc.org/ethics_rules" rel="noopener" target="_blank">policies and ethics rules</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'affine', tint: 'deep', eyebrow: 'Cipher lesson',
      h2: 'How do you break an affine cipher?',
      lede: 'An affine cipher turns each letter number x into (a times x plus b) mod 26, as Science Olympiad&rsquo;s Codebusters Overview describes. If you know two plaintext letters and the letters they became, you can solve for a and b, then decrypt with the inverse of a.',
      body: [
        { kind: 'ol', items: [
          '<b>Number the alphabet.</b> A is 0, B is 1, and so on to Z, which is 25.',
          '<b>Write two equations.</b> Our message MEET AT THE LAB, encrypted with our key a = 5 and b = 8, begins QC. So M (12) became Q (16), and E (4) became C (2). That gives 12a + b = 16 and 4a + b = 2, both mod 26.',
          '<b>Subtract to remove b.</b> 8a = 14, mod 26. Dividing everything by 2 gives 4a = 7, mod 13.',
          '<b>Solve mod 13.</b> The inverse of 4 mod 13 is 10, because 4 times 10 is 40, which is 1 more than 39. So a = 7 times 10 = 70, which is 5 mod 13. Back in mod 26 that allows a = 5 or a = 18.',
          '<b>Reject the impossible key.</b> 18 shares a factor of 2 with 26, so it has no inverse and can never be an affine key. Only a = 5 is left, and b = 16 minus 60, which is 8 mod 26.',
          '<b>Decrypt.</b> The inverse of 5 mod 26 is 21. Each cipher letter y becomes 21 times (y minus 8), mod 26. Q (16) gives 21 times 8, which is 168, and 168 mod 26 is 12, which is M.'
        ] },
        { kind: 'code', mt: true, label: 'Our affine practice tool', lang: 'Python', code: AFFINE, note: 'Our own program, plain Python with no libraries beyond math. It is for practice at home: at a tournament, expect to work by hand.' },
        { kind: 'two', mt: true,
          leftH3: 'Why two letters can give two keys',
          left: [
            'Step 4 found two candidates because 8, the gap between M and E, shares a factor with 26. The program skips every a that shares a factor with 26, which is why it prints only one key.',
            'Only 12 values of a have an inverse mod 26: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23 and 25. With 26 choices of b, there are 312 legal keys, few enough for a computer to try every one.'
          ],
          rightH3: 'What the overview adds',
          right: [
            'The Codebusters Overview notes two special cases worth checking in code: with a = 1 the affine cipher becomes a Caesar shift, and with a = 25 and b = 25 it produces AtBash.',
            'Run both through the program and compare the results with hand-made Caesar and AtBash tables. Seeing three ciphers fall out of one formula is the moment the math clicks.'
          ] }
      ]
    },
    {
      id: 'rules', tint: 'tint', eyebrow: 'Device rules',
      h2: 'Who is allowed to build and program a Science Olympiad device?',
      lede: 'The students on the team. Science Olympiad&rsquo;s ethics rules say pre-built devices presented for judging must be constructed, impounded and operated by one or more of the 15 current team members unless the event rules say otherwise, and the parents&rsquo; pledge promises support for students&rsquo; independence in design and production.',
      body: [
        { kind: 'two',
          leftH3: 'What that means for outside help',
          left: [
            'A tutor, parent or older sibling may not build, wire or program the team&rsquo;s Electric Vehicle. If the code on the controller was written by someone else, the device was not produced independently.',
            'During an event, participants also may not receive any external assistance, and electronic devices that can communicate are barred unless the event allows them.'
          ],
          rightH3: 'What we do instead',
          right: [
            'We teach the programming and math skills on our own examples: a practice motor sketch on our own board, ciphers we invent, data sets we make up. The student then builds and codes the team&rsquo;s device on their own.',
            'We never see or edit a team&rsquo;s competition code, and we do not reproduce the official rules manual. Students read the free 2027 rules themselves.'
          ] },
        { kind: 'table', mt: true, caption: 'Where to find each official document (soinc.org, read 31 October 2026)', head: ['Document', 'Where it is', 'Note'], rows: [
          ['2027 rules, Division B and C', 'The 2027 Rules page', 'Free PDFs by email from Tuesday, September 8, 2026'],
          ['Event table', 'Events, 2027 Event Table', 'The full list of 2027 events by division'],
          ['Rules clarifications and corrections', 'Events, Rules Corrections', 'Official changes during the season'],
          ['Policies and ethics', 'The ethics rules page', 'Device, assistance and electronics policies'],
          ['Event resources', 'Each event&rsquo;s own page', 'Such as the Electric Vehicle kit guidance']
        ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Practice problems for Codebusters coders',
      lede: 'Five original problems, written by us. Each uses our own messages and keys, never a past Science Olympiad test, and each answer shows the working.',
      body: [
        { kind: 'ol', items: [
          '<b>Encrypt one letter.</b> With a = 3 and b = 5, what does H become? <i>Answer:</i> H is 7, and 3 times 7 plus 5 is 26, which is 0 mod 26, so H becomes A.',
          '<b>Find an inverse.</b> What is the inverse of 7 mod 26? <i>Answer:</i> 15, because 7 times 15 is 105, and 105 is 4 times 26 plus 1.',
          '<b>Spot a bad key.</b> Why can a = 13 never be an affine key? <i>Answer:</i> 13 shares a factor with 26, so 13 times any even letter number is 0 mod 26 and many letters collide. With no inverse, decryption is impossible.',
          '<b>A special case.</b> Show that a = 25, b = 25 sends A to Z and Z to A. <i>Answer:</i> A is 0, and 25 times 0 plus 25 is 25, which is Z. Z is 25, and 25 times 25 plus 25 is 650, which is exactly 25 times 26, so 0, which is A. That is AtBash, as the overview says.',
          '<b>Count the work.</b> A brute-force program tries every legal affine key on a 40-letter message. How many letter decryptions is that at most? <i>Answer:</i> 312 keys times 40 letters, or 12,480, a fraction of a second for Python and an afternoon for a pencil.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Turning answers into speed',
          left: [
            'After a student can do these in code, we time the same tasks on paper. The code removes doubt about the method; the pencil builds the speed the event needs.',
            'Many students find inverses mod 26 slow at first. Making a small table of all 12 once, by program, and then learning it by heart is a fair shortcut: the table is the student&rsquo;s own work.'
          ],
          rightH3: 'For Division B students',
          right: [
            'Middle schoolers can start with Caesar and AtBash, which need only addition and a mirrored alphabet. Affine comes once multiplication mod 26 feels natural.',
            'Our <a class="ag-inline-link" href="/math-competitions-for-middle-school-students">middle school math competitions guide</a> covers other contests where the same number sense pays off.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four steps from curious student to team coder',
    lede: 'A Science Olympiad student does not need to be a programmer to start. These are the steps we see as coding becomes useful to their events.',
    table: { caption: 'From first program to event-ready skills (our steps)', head: ['Step', 'What the student can do'], rows: [
      ['1. Scripts', 'Writes short Python programs with loops, strings and functions'],
      ['2. Tools', 'Builds a practice tool, such as a cipher generator or a run-log calculator'],
      ['3. Hardware', 'Reads and writes microcontroller code that controls a motor by time or distance'],
      ['4. Analysis', 'Uses averages and spread from test data to decide what to change']
    ] },
    left: { h3: 'For parents and coaches', ps: [
      'Ask your child which events they have this year and whether any device uses a controller. That answer decides whether their coding time should go into Python practice tools or microcontroller code.',
      'The parents&rsquo; pledge asks families to support students&rsquo; independence in designing and producing devices. Encouragement and practice at home fit that; building the device does not.'
    ] },
    right: { h3: 'For students', ps: [
      'Write the decrypt function before memorising any shortcut. Once you can program a cipher, you can always rebuild its rules from scratch.',
      'Keep a run log for any device: date, change made, three measurements. A change without measurements is a guess.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for science team coders',
    lede: 'Live lessons over video with a steady teacher, either in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'Grades 6 to 12', courses: [
        { code: 'SOC / PG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Tools, data and logic.' },
        { code: 'SOC / PG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Typed, structured code.' },
        { code: 'SOC / PG / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ basics', blurb: 'For microcontroller work.' }
      ] },
      { num: 'II', h3: 'Math and data', sub: 'The numbers behind events', courses: [
        { code: 'SOC / MD / 01', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Mod arithmetic in code.' },
        { code: 'SOC / MD / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models from real data.' },
        { code: 'SOC / MD / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'For grade 6 starters.' }
      ] },
      { num: 'III', h3: 'Younger team members', sub: 'Grades 6 to 8', courses: [
        { code: 'SOC / YG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A gentle first text language.' },
        { code: 'SOC / YG / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks for micro:bit-style boards.' },
        { code: 'SOC / YG / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Logic with fast feedback.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Coding lessons around an invitational calendar',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, on a night with no team practice.' },
      { time: 'Weekends', l: 'A morning slot between invitationals.' },
      { time: '1-on-1', l: 'Built around one student&rsquo;s events.' }
    ],
    cells: [
      { h3: 'Our examples only', p: 'Invented ciphers, our own boards and data.' },
      { h3: 'Code then pencil', p: 'Understanding first, then speed by hand.' },
      { h3: 'Rules from the source', p: 'Students read the official 2027 rules.' },
      { h3: 'Measure every run', p: 'Logs and averages before changes.' },
      { h3: 'Any US state', p: 'Live online in your time zone.' },
      { h3: 'Group size', p: 'Fifteen to twenty per batch, or one student.' }
    ]
  },

  projectsH2: 'What our students have made',
  projectsLede: 'Games, apps and AI projects built by our learners. Browse more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; Google reviews, copied as written.',

  fees: {
    h2: 'Fees',
    lede: 'Team registration, kits and tournament entries are paid to Science Olympiad, your state organization or suppliers; our fee is only for coding and math lessons. We bill monthly, so a student can study through invitational season and pause after their last tournament.',
    free: ['A free first lesson', 'A short logic and math check', 'No card needed'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Shaped around your events', 'Python, C++ or math focus']
  },

  faq: {
    eyebrow: 'Questions from Science Olympiad families',
    h2: 'Science Olympiad coding: what people ask',
    items: [
      { q: 'Is Robot Tour a Science Olympiad event in 2027?', a: 'No. Robot Tour does not appear in the 2027 Division B or Division C event tables on soinc.org, and neither does Detector Building. Always check the current event table, because events rotate between seasons.' },
      { q: 'Which Science Olympiad events use coding in 2027?', a: 'No 2027 event is purely about programming. Electric Vehicle in Division C often uses a microcontroller such as an Arduino or ESP32, and Codebusters in both divisions rewards cipher skills that students can practice by writing code.' },
      { q: 'Can you use a computer in Codebusters?', a: 'Not usually. Science Olympiad\'s policies bar calculator applications on laptops, phones and tablets unless an event\'s rules or supervisor allow them, so plan on solving Codebusters by hand unless the 2027 event rules say otherwise. Coding is a way to practice at home.' },
      { q: 'What is an affine cipher?', a: 'A cipher that turns each letter number x into (a times x plus b) mod 26. Science Olympiad\'s Codebusters Overview notes that a = 1 gives a Caesar cipher and a = 25 with b = 25 gives AtBash. Decrypting needs the inverse of a mod 26.' },
      { q: 'Does Electric Vehicle need a microcontroller?', a: 'The 2027 kit modification guidance treats the controller as a part teams may swap, naming Arduino, ESP32, micro:bit and VEX boards. Check the official 2027 Electric Vehicle rules for exactly what is required and allowed.' },
      { q: 'Can a tutor build or program our Science Olympiad device?', a: 'No. Science Olympiad\'s ethics rules say pre-built devices must be constructed, impounded and operated by one or more of the 15 current team members unless an event\'s rules say otherwise. We teach skills on our own examples only.' },
      { q: 'What grades are Science Olympiad Division B and C?', a: 'Science Olympiad\'s 2027 rules page lists Division B for grades 6 to 9 and Division C for grades 9 to 12. Its about page describes Division B as middle school and Division C as high school, with 23 events in each.' },
      { q: 'Where do I get the 2027 Science Olympiad rules?', a: 'On the 2027 Rules page at soinc.org, where free PDF copies have been available by email since Tuesday, September 8, 2026. Rules clarifications and corrections are posted on the same site during the season.' },
      { q: 'When is the 2027 Science Olympiad National Tournament?', a: 'Science Olympiad says the 43rd National Tournament takes place at The Ohio State University in Columbus, Ohio, on May 14 to 15, 2027, for 120 teams.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you affiliated with Science Olympiad?', a: 'No. Modern Age Coders is an independent coding school with no connection to Science Olympiad, Inc. or any state Science Olympiad organization.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for science-minded students',
    lede: 'Contests, research and coding next steps.',
    items: [
      { href: '/science-fair-project-ideas-ai', label: 'AI science fair project ideas', p: 'For students who want a research project, not a tournament.' },
      { href: '/coding-competitions-for-high-school-students', label: 'High school coding competitions', p: 'Contests built entirely around programming.' },
      { href: '/coding-competitions-for-middle-school-students', label: 'Middle school coding competitions', p: 'Division B age options beyond Science Olympiad.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math contests', p: 'Number sense that helps with ciphers.' },
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Dates for this school year in one place.' },
      { href: '/vex-iq-programming-help', label: 'VEX IQ programming help', p: 'For students whose robots compete elsewhere.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s grade, their division and their events this season. The teacher sets a short Python or math task linked to those events and suggests where to begin.',
    readFirst: 'To see our approach, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through <a class="ag-inline-link" href="/courses">the course list</a>.',
    note: 'Teachers are based in India and teach live on video at US after-school and weekend times. Families often message us on WhatsApp for the quickest reply.',
    formNote: 'No payment and no card details are needed to book the first lesson.'
  },

  footer: {
    cols: [
      { h4: 'Contests and research', links: [
        { href: '/science-fair-project-ideas-ai', label: 'AI science fair ideas' },
        { href: '/coding-competitions-for-high-school-students', label: 'High school coding contests' },
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school math contests' },
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Coding by grade', links: [
        { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
        { href: '/coding-classes-for-high-school-students', label: 'High school coding' },
        { href: '/computer-science-standards-by-state', label: 'CS standards by state' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Code it at home, solve it by hand'
  },

  personalityCss: `
.ag-root.ag-soc .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-soc .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-soc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-soc .ag-table caption { text-align: left; font-weight: 600; font-style: normal; }
.ag-root.ag-soc .ag-steps li { line-height: 1.72; }
.ag-root.ag-soc .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Read raw on 31 October 2026: soinc.org 2027 Event Table (Division B and C lists; no Robot Tour or Detector Building), C event short descriptions (Electric Vehicle, Codebusters, Engineering CAD, Remote Sensing), Electric Vehicle C page and the 2027 Kit Modification Guidance PDF (controller swap examples), Codebusters page and Overview PDF (updated for 2025: affine formula, Caesar and AtBash special cases, RSA removed), the 2027 Rules page (free PDFs from September 8 2026; B grades 6-9, C grades 9-12), About and Start a Team (23 events per division, 15 students per team), ethics rules (device construction, assistance, electronics), 2027 National Tournament page (Ohio State, May 14-15 2027, 120 teams).',
    localProject: 'Our affine lesson: MEET AT THE LAB with a = 5, b = 8 becomes QCCZ IZ ZRC LIN; the crib M to Q and E to C gives 8a = 14 mod 26, so a = 5 or 18, with 18 rejected; inverse of 5 is 21; 12 legal values of a and 312 keys; a Python practice tool; five practice problems (H to A with a = 3, b = 5; inverse of 7 is 15; 12,480 decryptions). Lesson family: modular inverses and linear congruences.',
    requiredMentions: ['Robot Tour and Detector Building do not appear in either division', 'Arduino to ESP32, VEX to Arduino, micro:bit to ESP32-S3', 'Changing only the model or version, such as Arduino UNO R3 to UNO R4', 'QCCZ IZ ZRC LIN', 'that allows a = 5 or a = 18', 'there are 312 legal keys', 'Code it at home, solve it by hand', 'constructed, impounded and operated by one or more of the 15 current team members', 'Free PDFs by email from Tuesday, September 8, 2026', 'on May 14 to 15, 2027, for 120 teams', '7 times 15 is 105'],
    sources: [
      { claim: '2027 Event Table: Division B and Division C events.', url: 'https://www.soinc.org/events/2027-event-table' },
      { claim: 'Division C event short descriptions.', url: 'https://www.soinc.org/learn/c-event-short-descriptions' },
      { claim: 'Electric Vehicle C page and 2027 Kit Modification Guidance.', url: 'https://www.soinc.org/electric-vehicle-c' },
      { claim: 'Codebusters page and Codebusters Overview (updated for 2025).', url: 'https://www.soinc.org/codebusters-c' },
      { claim: 'Ethics rules and policies: devices, assistance, electronics, pledges.', url: 'https://www.soinc.org/ethics_rules' },
      { claim: '2027 Rules page, About page and 2027 National Tournament page.', url: 'https://www.soinc.org/rules-2027' }
    ],
    rejectedClaims: [
      'The full 2027 rules manuals: email-gated; not downloaded, not quoted and never reproduced. The page sends readers to the official free PDFs.',
      'The 2027 Codebusters cipher list: the Overview read is dated 2025; no 2027 list printed.',
      'Whether Scrambler or Mission Possible allow microcontrollers in 2027: not on the pages read; readers told to check the rules.',
      'Which past seasons included Robot Tour or Detector Building: the older event table URLs returned the current table; only their absence from 2027 is stated.',
      'Scholarship amounts on the national tournament page: not printed (no typed currency).',
      'Past Codebusters tests and answer keys from the exam archive: not reproduced; practice problems are ours.',
      'Any claim of medals or placements by our students: none made.',
      'Any affiliation with Science Olympiad, Inc.: none, stated on the page.'
    ]
  }
};
