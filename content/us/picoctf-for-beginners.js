'use strict';
// picoCTF for beginners (ag- competition door; US cluster Phase 3, row 38).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/picoctf-for-beginners/). Rules pages that answer 403 were not retried.
//  - picoctf.org: title "picoCTF.org is now CyLab Security Academy"; "Carnegie Mellon University's free cybersecurity
//    learning platform"; credentials "created before May 8, 2026" still work; "Coming Soon: picoCTF.com".
//  - cylabacademy.org (home): four parts (Challenges, Learning Paths, Events, Classrooms); "Hints are available one at a time
//    when you're stuck."; eight domains (General Skills, AI, Cryptography, Web Exploitation, Forensics, Binary Exploitation,
//    Reverse Engineering, Blockchain); "Every challenge is built to be hacked, so the practice is legal"; the white paper
//    line "post-AI cohort improving at nearly half the rate of the pre-AI cohort"; "16" competitions hosted to date.
//  - /about.html: "The largest high school hacking competition now provides year-round" learning.
//  - /learners.html: "490+ hands-on challenges"; learning paths incl. Beginner's Guide to the Challenge Library; CTF Primer;
//    Challenge Library; "Teams may consist of 1 to 5 players from" (en dash in the source) different schools; Discord "is not for competition challenge
//    help", "spoilers or flag sharing during a competition are grounds for removal"; "Minimally, how to think critically.";
//    browser and webshell; allowlist domains incl. webshell.cylabacademy.org; prize eligibility may be limited to US middle and
//    high school enrollment.
//  - /competitors.html: "an annual flagship for US middle and high school students"; events are timed challenge drops with
//    their own scoring, prize and team rules; no penalty for wrong guesses; "More details coming soon."
//  - /terms.html (effective January 30, 2025): "the Services are available only to users who are at least 13 years" old;
//    13 to 17 need a parent or guardian email at registration (or teacher batch registration).
//  - primer.picoctf.org: the CTF Primer chapters (The Shell, Forensics, Programming in python, Web Exploits, Cryptography,
//    The Network, ..., Assembly) and the flag regex picoCTF\{.{1,15}\}.
// Our own material, labelled on the page: the two Python examples and their sample strings, the eight-week plan, the order in
// which we suggest the domains. No picoCTF challenge is named or solved. Lesson family: encoding is not encryption.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LAYERS = `# layers.py (ours): undo two layers of encoding, one at a time
import base64

message = "624746355a584a7a"   # our own sample, not a challenge

step1 = bytes.fromhex(message).decode()
print(step1)                   # bGF5ZXJz  (still encoded)

step2 = base64.b64decode(step1).decode()
print(step2)                   # layers`;

const FLAGS = `# find_flags.py (ours): pull flag-shaped strings out of text
import re

log = """09:14 user=ana opened notes
09:15 picoCTF{pr4ct1c3_0nly}
09:16 picoCTF{this_line_is_much_too_long}
09:17 user=ana closed notes"""

# the pattern the CTF Primer uses to describe a flag
pattern = r"picoCTF\\{.{1,15}\\}"
print(re.findall(pattern, log))   # ['picoCTF{pr4ct1c3_0nly}']`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'picoCTF for beginners: what changed when picoCTF became CyLab Security Academy, the age rule, the eight domains, a safe first month and two small Python examples.' },
  slug: 'picoctf-for-beginners',
  code: 'pb',
  accent: '#346642',
  accentRationale: 'picoCTF for beginners: the allocated terminal green #346642, a muted take on a shell prompt, contrast 6.34, 5.96 and 5.45 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'picoCTF for beginners',
  title: 'picoCTF for Beginners: How to Start, Ethically, in 2026',
  description: 'picoCTF for beginners: picoCTF is now CyLab Security Academy, ages 13 and up. The eight domains, the Primer, a first-month plan and two Python examples.',
  ogDescription: 'Free capture the flag practice from Carnegie Mellon, now called CyLab Security Academy. How a US beginner aged 13 or over should start, legally and without copying answers.',
  twitterDescription: 'picoCTF, now CyLab Security Academy, for US beginners aged 13 and up.',
  pageName: 'picoCTF for Beginners',
  webPageDescription: 'A beginner guide for US teens and parents to picoCTF, now CyLab Security Academy, built from Carnegie Mellon pages, with a first-month plan and two Python examples of our own.',
  courseDescription: 'Live online ethical cybersecurity and Python classes for US teens aged 13 to 18 starting picoCTF practice, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'picoCTF for beginners',
  navLinks: [
    { href: '#change', label: 'picoCTF now' },
    { href: '#domains', label: 'Eight domains' },
    { href: '#start', label: 'First steps' },
    { href: '#code', label: 'Python examples' },
    { href: '#month', label: 'Eight weeks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 13 to 18 &middot; Free practice, built to be hacked',
  h1: 'picoCTF for beginners',
  lede: 'picoCTF began as a capture the flag contest for high school students and is now a year-round learning platform called CyLab Security Academy, run by Carnegie Mellon University. A beginner solves small security puzzles, each hiding a string called a flag, in a space designed to be attacked so that the practice is legal. This guide covers what changed in 2026, who may sign up, the eight topic areas, how to begin without copying anyone&rsquo;s answers, and two small Python examples we wrote to teach the first skills.',
  secondaryCta: { href: '#month', label: 'See the eight-week plan' },
  wa: 'Hello Modern Age Coders, my teen in the US wants to start picoCTF and learn cybersecurity properly. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; ethical security, taught as skills',
  spec: [
    ['What', 'Capture the flag practice'],
    ['Now called', 'CyLab Security Academy'],
    ['Run by', 'Carnegie Mellon University'],
    ['Cost', 'Free'],
    ['Age', '13 and over'],
    ['Teams', 'Solo, or up to 5 in events'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A beginner should start picoCTF by creating a free account on CyLab Security Academy, the new name for picoCTF, reading the CTF Primer, and working through the beginner learning path in the Challenge Library before entering a timed event. Users must be at least 13, and teens under 18 need a parent&rsquo;s email to register. Solve each challenge yourself: hints are built in, and sharing flags is grounds for removal. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Learn the skills with a teacher',
    h2: 'Three courses for a picoCTF beginner',
    lede: 'Capture the flag rewards understanding. These courses teach the ideas under the puzzles, from the terminal to encodings and web basics, always on the defending side.',
    items: [
      { course: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', code: 'PB / 01', title: 'picoCTF and CyberPatriot prep', note: 'Ages 13 to 18. Contest skills, learned ethically.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'PB / 02', title: 'Cybersecurity for teens', note: 'Ages 13 to 18. White-hat defense from the ground up.' },
      { course: 'python-complete-masterclass-teens', code: 'PB / 03', title: 'Python for teens', note: 'Ages 13 to 18. The language most CTF scripts use.' }
    ]
  },

  sections: [
    {
      id: 'change', tint: 'tint', eyebrow: 'What changed',
      h2: 'picoCTF is now CyLab Security Academy',
      lede: 'Searches still say picoCTF, and so do many teachers. Here is what the new name means for someone starting now.',
      body: [
        { kind: 'table', caption: 'picoCTF in 2026, from picoctf.org and cylabacademy.org (read 17 October 2026)', head: ['Question', 'What the official pages say'], rows: [
          ['What is picoctf.org now?', 'A notice titled "picoCTF.org is now CyLab Security Academy"'],
          ['Who runs it?', 'Carnegie Mellon University&rsquo;s CyLab Security and Privacy Institute; the same team, described as a bigger mission'],
          ['Old accounts', 'Logins "created before May 8, 2026" still work, with progress and history intact'],
          ['The picoCTF name', 'A button reads "Coming Soon: picoCTF.com"'],
          ['Size', '"490+ hands-on challenges" on the learners page; 16 competitions hosted to date'],
          ['Cost', 'Free; the site describes itself as always free for everyone']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What stays the same',
          left: [
            'The core idea has not changed. Each challenge hides a flag that you find by reading, thinking and sometimes breaking things, and you submit it to score. The About page sums up the history: the largest high school hacking competition now provides year-round learning.',
            'Practice problems from past competitions sit in the Challenge Library, which many guides still call the picoCTF gym.'
          ],
          rightH3: 'How the platform is laid out now',
          right: [
            'The platform now lists four parts: Challenges, Learning Paths, Events and Classrooms. Learning paths add readings, videos and small games in order, which helps a beginner more than a long unsorted list.',
            'Its list of domains now includes one for AI, covering prompt injection and adversarial examples, and one for blockchain smart contracts.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://picoctf.org/" rel="noopener" target="_blank">picoctf.org</a>, <a class="ag-inline-link" href="https://cylabacademy.org/" rel="noopener" target="_blank">cylabacademy.org</a>, its <a class="ag-inline-link" href="https://cylabacademy.org/learners.html" rel="noopener" target="_blank">learners</a> and <a class="ag-inline-link" href="https://cylabacademy.org/competitors.html" rel="noopener" target="_blank">competitors</a> pages, read 17 October 2026. Modern Age Coders is not part of Carnegie Mellon or CyLab and does not run picoCTF.' }
      ]
    },
    {
      id: 'age', tint: 'deep', eyebrow: 'Who can sign up',
      h2: 'The age rule: 13 and over, with a parent for under-18s',
      lede: 'Before any practice, check the account rules. They come from the platform&rsquo;s Terms of Use, effective January 30, 2025.',
      body: [
        { kind: 'table', caption: 'Account rules in the CyLab Security Academy Terms of Use', head: ['Age', 'What the terms say'], rows: [
          ['Under 13', 'May not register. To comply with the Children&rsquo;s Online Privacy Protection Act, the Services are available only to users who are at least 13 years old'],
          ['13 to 17', 'A parent or legal guardian gives their email address at registration to show consent, unless a teacher registers the class in a batch'],
          ['18 and over', 'Welcome; the learners FAQ says college students and non-students can play'],
          ['Usernames', 'No real name or other personally identifying information in the username']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For a family in the US',
          left: [
            'A 12-year-old who is keen on security should wait, and can spend the time on Python and on how the internet works. The platform is aimed at middle and high school students aged 13 or older.',
            'For a 13 to 17-year-old, the parent&rsquo;s email is part of sign-up. That is a good moment to agree how the account will be used and that it stays on the practice platform.'
          ],
          rightH3: 'Prizes are separate from play',
          right: [
            'Anyone can compete to learn. Prize eligibility is set per event, and the learners FAQ notes that some competitions limit it to students enrolled in US middle or high schools.',
            'If a teen wants to enter for prizes, read that event&rsquo;s own rules when it is posted, because each event sets them separately.'
          ] }
      ]
    },
    {
      id: 'domains', tint: 'tint', eyebrow: 'Eight domains',
      h2: 'The eight picoCTF challenge areas, in a beginner order',
      lede: 'The platform lists eight domains. The descriptions are from its home page; the order is our suggestion for someone starting from zero.',
      body: [
        { kind: 'table', caption: 'CyLab Security Academy domains (official) and our suggested order for beginners', head: ['Our order', 'Domain', 'What it covers (official summary)'], rows: [
          ['1', 'General Skills', 'The terminal, bash scripting and quick file work, used in every other area'],
          ['2', 'Cryptography', 'Codes, ciphers and locked data; how encryption and hashing work'],
          ['3', 'Forensics', 'Hunting through files, images and network traffic for hidden data'],
          ['4', 'Web Exploitation', 'Why websites trust input too much: SQL injection, XSS, broken logins'],
          ['5', 'Reverse Engineering', 'Working out what a program does without its source code'],
          ['6', 'Binary Exploitation', 'How careless memory handling lets software misbehave'],
          ['7', 'AI', 'How models can be tricked, from prompt injection to adversarial examples'],
          ['8', 'Blockchain', 'Bugs in smart contract code']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why General Skills comes first',
          left: [
            'Almost every later challenge assumes you can move around a Linux terminal, read files and run small scripts. Students who skip it get stuck on the tools rather than the puzzle.',
            'The platform&rsquo;s own Beginner&rsquo;s Guide to the Challenge Library is described as its most approachable problems, touching every category but focused on General Skills. It is the natural first path.'
          ],
          rightH3: 'Why binary comes late',
          right: [
            'Binary exploitation needs C, memory layout and assembly. These are rewarding, but they make more sense after a student has written a few programs and seen how data is stored.',
            'Our order is a teaching choice, not a rule. A student who loves websites can move Web Exploitation earlier once the terminal feels comfortable.'
          ] }
      ]
    },
    {
      id: 'start', tint: 'deep', eyebrow: 'First steps',
      h2: 'How to start picoCTF as a complete beginner',
      lede: 'Six steps, in order, using only the platform&rsquo;s own free material. The learners FAQ says the minimum you need is the ability to think critically.',
      body: [
        { kind: 'ol', items: [
          '<b>Create an account.</b> Sign up on CyLab Security Academy and confirm the email. Under-18s register with a parent&rsquo;s email; old picoCTF logins still work.',
          '<b>Read the CTF Primer.</b> It is a free textbook-style guide with chapters on the shell, forensics, Python, web exploits, cryptography, networks and assembly, written by the education team.',
          '<b>Take the beginner path.</b> Open the Beginner&rsquo;s Guide to the Challenge Library and solve its problems in order, reading each linked explanation.',
          '<b>Use the webshell.</b> Many challenges need only a web browser and the provided webshell, so a school Chromebook can be enough to begin.',
          '<b>Use hints, one at a time.</b> The home page says hints are available one at a time when you are stuck. Take one, think again, and only then take the next.',
          '<b>Enter an event.</b> When a timed event appears in the Events tab, join it. The competitors page says there is no penalty for wrong guesses, so trying costs nothing.'
        ] },
        { kind: 'p', mt: true, html: 'A copied flag scores a point and teaches nothing about finding the next one. Our classes never hand over flags or walkthroughs for platform challenges: the teacher explains the concept behind a stuck point, and the student solves the challenge.' }
      ]
    },
    {
      id: 'ethics', tint: 'tint', eyebrow: 'Playing fair',
      h2: 'The ethics of capture the flag, in plain terms',
      lede: 'Security skills can protect people or hurt them. The platform draws the line clearly, and so do we.',
      body: [
        { kind: 'table', caption: 'Rules of the road for a picoCTF beginner (official lines, with our notes)', head: ['Rule', 'Why it matters'], rows: [
          ['Practise only where it is allowed', 'The home page says "Every challenge is built to be hacked, so the practice is legal". School networks, websites and friends&rsquo; accounts are not.'],
          ['No spoilers during events', 'The Discord is not for competition challenge help, and "spoilers or flag sharing during a competition are grounds for removal".'],
          ['Your own work counts', 'A flag copied from a forum scores points and teaches nothing.'],
          ['Defend with what you learn', 'The platform says it teaches you to think like a hacker, then use that thinking to defend systems.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the shortcut costs more now',
          left: [
            'CyLab&rsquo;s own white paper, Skill or Shortcut?, reports that six years of competition data show the post-AI cohort improving at nearly half the rate of the pre-AI cohort.',
            'Our reading: getting the answer and building the skill have come apart. An AI chatbot can often explain a challenge, but a student who never struggles with it does not get faster at the next one.'
          ],
          rightH3: 'How we use AI in class',
          right: [
            'Students may ask an age-appropriate AI tool what a command or error means, then try it themselves. They do not paste a challenge in and ask for the flag.',
            'Check a tool&rsquo;s own age terms first. Many general chatbots set minimum ages, and some are for adults only.'
          ] }
      ]
    },
    {
      id: 'code', tint: 'deep', eyebrow: 'Python examples',
      h2: 'Two Python skills every picoCTF beginner uses',
      lede: 'Both examples run on our own sample strings, not on any challenge. They teach two habits that appear across the General Skills and Cryptography areas.',
      body: [
        { kind: 'code', label: 'Python &middot; undo layers of encoding', lang: 'python', code: LAYERS, note: 'Hex and base64 are encodings, not encryption: anyone can reverse them without a key. Recognising them on sight is a first skill. Hex uses only 0 to 9 and a to f; base64 mixes upper and lower case letters, digits, plus and slash, and often ends in an equals sign.' },
        { kind: 'code', label: 'Python &middot; find flag-shaped text', lang: 'python', code: FLAGS, note: 'The CTF Primer describes flags as often in the format picoCTF{} and gives the regular expression picoCTF\\{.{1,15}\\} for one. Our second sample line does not match because its middle is longer than 15 characters, which is a lesson in reading a pattern exactly.' },
        { kind: 'two', mt: true,
          leftH3: 'What the examples teach',
          left: [
            'Work one step at a time and print after each step. When a result still looks like gibberish, the printed middle step tells you what to try next.',
            'Regular expressions turn a long output into the one line you need. The same skill helps a defender search a log for one suspicious entry.'
          ],
          rightH3: 'What they deliberately skip',
          right: [
            'Neither example solves a real challenge, and we will not publish one that does. The point is to recognise a technique, so that when a student meets it on the platform, the thinking is theirs.',
            'Both use only Python&rsquo;s standard library, so they run in the webshell or any editor without installing anything.'
          ] }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'At school',
      h2: 'If picoCTF will not load on a school network',
      lede: 'Many US schools filter new domains by default. The learners FAQ lists the domains a network administrator can allow.',
      body: [
        { kind: 'table', caption: 'Domains CyLab Security Academy asks schools to allow (learners FAQ, read 17 October 2026)', head: ['Domain', 'Access'], rows: [
          ['cylabacademy.org', 'HTTPS'],
          ['learn.cylabacademy.org', 'HTTPS'],
          ['webshell.cylabacademy.org', 'HTTPS'],
          ['challenge-files.cylabacademy.net', 'HTTPS'],
          ['xebec.cylabacademy.net', 'All ports, UDP and TCP'],
          ['chatelaine.cylabacademy.net', 'All ports, UDP and TCP']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Classrooms on the platform',
          left: [
            'Teachers can create a classroom with an invite code, post assignments that bundle challenges and learning paths with due dates, and see each student&rsquo;s progress. A student can belong to several classrooms, for a class and a club.',
            'Under the terms, a teacher batch registration is also how students aged 13 to 17 can join without each giving a parent email.'
          ],
          rightH3: 'Teams in events',
          right: [
            'For team-enabled events, the My Team page creates or joins a team with an invite code. The learners page says teams may have 1 to 5 players from different schools.',
            'To be eligible for prizes, every player on the team must meet that event&rsquo;s rules.'
          ] }
      ]
    },
    {
      id: 'month', tint: 'deep', eyebrow: 'Eight weeks',
      h2: 'An eight-week start for a picoCTF beginner',
      lede: 'Our plan for a 13 to 15-year-old with no security background, about three hours a week including one class. It uses the free platform material throughout.',
      body: [
        { kind: 'table', caption: 'Eight weeks from sign-up to a first timed event (ours)', head: ['Week', 'Focus', 'Finished when'], rows: [
          ['1', 'Account, Primer chapter on the shell', 'Can list, read and search files in the webshell'],
          ['2', 'Beginner path, first General Skills problems', 'Five beginner problems solved without walkthroughs'],
          ['3', 'Python basics for CTF', 'Can read a file and print what is inside it in a script'],
          ['4', 'Encodings: binary, hex, base64', 'Recognises each on sight and reverses it in Python'],
          ['5', 'Classical ciphers', 'Can explain why a Caesar cipher is easy to break'],
          ['6', 'Forensics basics', 'Can inspect a file&rsquo;s type and metadata'],
          ['7', 'How the web works', 'Can read a page&rsquo;s source and explain a cookie'],
          ['8', 'A first event', 'Entered a timed event and wrote down what to learn next']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 13 and 14', p: 'Short sessions, lots of talking through ideas. The goal is curiosity and the terminal, not points.' },
          { h3: 'Ages 15 and 16', p: 'Add Python scripting early, and keep a notebook of every technique learned.' },
          { h3: 'Ages 17 and 18', p: 'Move into web and reverse engineering sooner, and consider CyberPatriot as a team defense contest alongside.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages from first flag to confident player',
    lede: 'Where beginners usually are, and what the next step looks like.',
    table: { caption: 'picoCTF progress stages (ours)', head: ['Stage', 'The student can'], rows: [
      ['1. Explorer', 'Move around the terminal and read files'],
      ['2. Decoder', 'Recognise common encodings and simple ciphers'],
      ['3. Investigator', 'Choose a tool for a forensics or web problem and explain why'],
      ['4. Competitor', 'Enter a timed event, manage time and learn from misses']
    ] },
    left: { h3: 'For parents', ps: [
      'The platform is free and built to be attacked, so it is a safe place to learn what attackers do. Talk with your teen about where that line is.',
      'Progress is slow at first because the tools are new. Weeks of General Skills are normal and valuable.'
    ] },
    right: { h3: 'For students', ps: [
      'Write down every technique you learn with one example. Your notebook becomes your own primer.',
      'When stuck, take one hint, then explain the problem out loud. Most breakthroughs happen at that point.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for teens who want to learn security',
    lede: 'All taught live online, ages 13 to 18, grouped by the picoCTF areas they support.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'General Skills', courses: [
        { code: 'PB / FND / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'How browsers run code.' },
        { code: 'PB / FND / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Read any page source.' },
        { code: 'PB / FND / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'The numbers behind ciphers.' }
      ] },
      { num: 'II', h3: 'Web and data', sub: 'Web and forensics', courses: [
        { code: 'PB / WEB / 01', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'Servers, APIs, databases.' },
        { code: 'PB / WEB / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'Build it, then secure it.' },
        { code: 'PB / WEB / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Search data at scale.' }
      ] },
      { num: 'III', h3: 'Low level', sub: 'Reverse and binary', courses: [
        { code: 'PB / LOW / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Memory, pointers, types.' },
        { code: 'PB / LOW / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'How compiled code is built.' },
        { code: 'PB / LOW / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'Logic for hard puzzles.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Security lessons that fit a school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'An after-school class in your time zone.' },
      { time: 'Weekends', l: 'Longer practice before a timed event.' },
      { time: '1-on-1', l: 'For a teen who wants to go deep fast.' }
    ],
    cells: [
      { h3: 'Defense first', p: 'Every technique, and how to stop it.' },
      { h3: 'No flag sharing', p: 'Concepts taught; challenges solved by the student.' },
      { h3: 'Terminal fluency', p: 'Linux commands until they are habit.' },
      { h3: 'Python scripts', p: 'Small tools the student writes.' },
      { h3: 'Ages 13 to 18', p: 'Matched to the platform&rsquo;s own age rule.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students made',
  projectsLede: 'Security grows from building things. These are our learners&rsquo; own projects; see the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Parents&rsquo; Google reviews, as written.',

  fees: {
    h2: 'Fees',
    lede: 'The platform itself is free. Our part is the teaching, charged monthly in US dollars with no long contract, so a teen can learn the foundations over a semester and continue only if it clicks.',
    free: ['A free first lesson', 'A look at your account', 'No card details'],
    group: ['Fifteen to twenty learners', 'A regular security teacher', 'Choose a batch time', 'Monthly billing'],
    one: ['One teen, one teacher', 'Paced to their interests', 'Deep dives on request']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'picoCTF for beginners: common questions',
    items: [
      { q: 'Is picoCTF still running?', a: 'Yes, under a new name. The picoctf.org site says picoCTF is now CyLab Security Academy, Carnegie Mellon University\'s free cybersecurity learning platform, and old picoCTF logins still work.' },
      { q: 'How old do you have to be for picoCTF?', a: 'At least 13, under the platform\'s Terms of Use. Teens aged 13 to 17 need a parent or guardian\'s email at registration, unless a teacher registers the class.' },
      { q: 'Is picoCTF free?', a: 'Yes. CyLab Security Academy describes itself as always free, supported by sponsors and gifts.' },
      { q: 'What is the picoCTF gym?', a: 'The name many guides use for the practice area. On the new platform it is the Challenge Library, with problems from past competitions and new ones, open year-round.' },
      { q: 'Where should a complete beginner start?', a: 'With the CTF Primer and the Beginner\'s Guide to the Challenge Library learning path, which focuses on General Skills such as the terminal and simple scripts.' },
      { q: 'Do I need to know programming first?', a: 'No. The learners FAQ says the minimum is thinking critically, and many players began with no programming. Python, HTML, JavaScript and C help, and are worth learning along the way.' },
      { q: 'What does a picoCTF flag look like?', a: 'The CTF Primer says flags are often in the format picoCTF{} with text inside the braces. You submit the full string to score.' },
      { q: 'Is it legal to hack picoCTF challenges?', a: 'Yes, on the platform. Its home page says every challenge is built to be hacked, so the practice is legal. Using the same techniques on systems you do not own or have permission to test is not.' },
      { q: 'Will you give my teen the answers to picoCTF challenges?', a: 'No. We teach the concept behind a stuck point and the student solves the challenge. During events, sharing flags or spoilers is grounds for removal from the community.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'When is the next picoCTF competition?', a: 'On 17 October 2026 the competitors page said details were coming soon. The platform runs mini-competitions through the year and an annual flagship for US middle and high school students, listed in the Events tab.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US teens interested in contests and computer science.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All of our US pages in one place.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Where capture the flag fits.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Build on a deadline, in teams.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO coaching', p: 'The programming olympiad.' },
      { href: '/coding-for-15-year-olds', label: 'Coding for 15-year-olds', p: 'What to learn at fifteen.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our learners built.' },
      { href: '/cyberpatriot-preparation', label: 'CyberPatriot preparation', p: 'CyberPatriot 19 (2026-27) explained from the official pages, with a practice plan.' },
      { href: '/technovation-girls-guide', label: 'Technovation Girls guide', p: 'Technovation Girls and the 2026-27 Technovation Challenge, from the official pages.' },
      { href: '/coding-competitions-for-high-school-students', label: 'Coding competitions for high school students', p: 'US high school coding competitions for 2026-27, from the organisers\' own rules.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring your account, even if no challenge is solved yet. The teacher checks the terminal basics first and sets a starting point on the beginner path.',
    readFirst: 'If you would like the details first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lesson format, and the <a class="ag-inline-link" href="/courses">course list</a> shows each syllabus.',
    note: 'We teach online from India, at hours that suit US time zones. WhatsApp reaches the team fastest.',
    formNote: 'Free first lesson, no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Contests and skills', links: [
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/coding-for-15-year-olds', label: 'Coding for 15-year-olds' }
      ] }
    ],
    bottomRight: 'Encoding is not encryption'
  },

  personalityCss: `
.ag-root.ag-pb .ag-hero h1 { letter-spacing: -0.006em; }
.ag-root.ag-pb .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-pb .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pb .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-pb .ag-steps { gap: 1rem; }
.ag-root.ag-pb .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'picoCTF, now CyLab Security Academy (Carnegie Mellon University), official pages read raw on 17 October 2026: the rename notice, credentials before May 8, 2026, picoCTF.com coming soon; four platform parts, hints one at a time, eight domains, "built to be hacked"; 490+ challenges, 16 competitions; learning paths, CTF Primer, Challenge Library, webshell, allowlist domains, teams of 1 to 5, Discord spoiler rule; competitor events and the annual flagship; Terms of Use age rule (13 and over, parent email 13 to 17); the Primer flag regex.',
    localProject: 'Our two Python examples on our own sample strings (hex 624746355a584a7a to bGF5ZXJz to layers; a regex that finds picoCTF{pr4ct1c3_0nly} and skips a 26-character middle), our suggested domain order and our eight-week plan. No platform challenge is named or solved. Lesson family: encoding is not encryption.',
    requiredMentions: ['picoCTF.org is now CyLab Security Academy', 'created before May 8, 2026', 'Coming Soon: picoCTF.com', '490+ hands-on challenges', 'hints are available one at a time when you are stuck', 'spoilers or flag sharing during a competition are grounds for removal', 'post-AI cohort improving at nearly half the rate of the pre-AI cohort', 'webshell.cylabacademy.org', 'January 30, 2025', '624746355a584a7a', 'picoCTF{pr4ct1c3_0nly}', 'an annual flagship for US middle and high school students'],
    sources: [
      { claim: 'Rename notice, old credentials, picoCTF.com coming soon.', url: 'https://picoctf.org/' },
      { claim: 'Platform parts, domains, legality line, white paper, counts.', url: 'https://cylabacademy.org/' },
      { claim: 'Learning paths, Primer, Library, teams, Discord rule, allowlist.', url: 'https://cylabacademy.org/learners.html' },
      { claim: 'Events, prizes, annual flagship, no penalty for wrong guesses.', url: 'https://cylabacademy.org/competitors.html' },
      { claim: 'Age rule and parent consent.', url: 'https://cylabacademy.org/terms.html' },
      { claim: 'Primer chapters and the flag regular expression.', url: 'https://primer.picoctf.org/' }
    ],
    rejectedClaims: [
      'Solutions, walkthroughs or flags for any platform challenge: refused on principle; the page teaches techniques on our own sample strings only.',
      'Dates of the next annual flagship competition: not posted on 17 October 2026 ("More details coming soon."), so none are printed.',
      'The learners FAQ line on six-figure salaries: not used; US pages make no salary or job claims.',
      'Names of CyLab staff and problem writers: not used.',
      'The count of 500+ challenges on the home page versus 490+ on the learners page: the page prints the learners figure and names its source.',
      'Any affiliation with Carnegie Mellon University, CyLab or picoCTF: none, and the page says so.'
    ]
  }
};
