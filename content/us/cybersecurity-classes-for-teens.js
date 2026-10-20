'use strict';
// Cybersecurity classes for teens (ag- subject door; US cluster Phase 2, row 33). Defensive and ethical only.
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (autocomplete_us.tsv): cybersecurity for teens / classes / courses / camps / programs / training /
// awareness; picoctf family; cyberpatriot family; ap computer science cybersecurity.
// Existing pages not twinned: /cyber-security-course-for-teens-uk and -australia (this page is built on US programs).
// Phase 3 pages picoctf-for-beginners and cyberpatriot-preparation are not built yet, so both programs stay an
// overview here and are not linked.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/cybersecurity-classes-for-teens/):
//  - uscyberpatriot.org home and competition-overview: "the National Youth Cyber Education Program created by the Air &
//    Space Forces Association"; "the nation's largest cyber defense competition"; teams of "between two and six
//    competitors", "a maximum of five students are permitted to compete at any one time"; coach an adult; mentors and
//    assistants "(Minimum age: 18)" with background checks; Open, All Service and Middle School divisions; "Network
//    Security Challenge" (Windows and Linux) and "Cisco Networking Challenge" in a "four-hour competition period";
//    "designed for any student, regardless of prior cybersecurity knowledge"; National Finals in Bethesda, MD; season
//    dates: team registration June 2 to October 1, 2026 (the source writes it with a dash),
//    exhibition May to August, training round September, official practice October, scored rounds one weekend a month
//    October to January; reminders "Practice round: October 7-20th", "Roster Finalization: October 21st".
//  - picoctf.org home: "picoCTF has joined CyLab Security Academy, Carnegie Mellon University's free cybersecurity
//    learning platform"; credentials "created before May 8, 2026" still work. Other picoctf.org pages returned HTTP
//    403 and were not retried. cylabacademy.org: "1M +" learners, "15K +" classrooms, "500+ challenges", eight domains
//    (names only printed), four parts (Challenges, Learning Paths, Events, Classrooms), "Every challenge is built to be
//    hacked, so the practice is legal"; "middle schoolers through adults".
//  - apcentral.collegeboard.org/courses/ap-cybersecurity: "aligns closely with standard first-year collegiate
//    cybersecurity courses"; "this yearlong course aligns with the NICE Workforce Framework"; five units; skills
//    "Analyze Risk, Mitigate Risk, and Detect Attacks", each weighted 25 to 40 percent (source shows en dashes); credit
//    list "will be released in spring 2027". AP Career Kickstart page: "FALL 2026 AP Cybersecurity launches"; "MAY 2027
//    AP Business with Personal Finance, AP Cybersecurity Exams administered".
//  - cisa.gov/secure-our-world: "October is Cybersecurity Awareness Month!"; "Everyone should take these 4 core steps";
//    "Cybersecurity Career Week: October 19 - 24, 2026".
//  - docs.python.org/3/library/secrets: "generating cryptographically strong random numbers suitable for managing data
//    such as passwords"; secrets "should be used in preference to the default pseudo-random number generator in the
//    random module"; secrets.choice(seq).
// Our own material, labelled: the passphrase script, the combinations table (10 ** 4 = 10,000; 26 ** 8 =
// 208,827,064,576; 62 ** 8 = 218,340,105,584,896; 7,776 ** 4 = 3,656,158,440,062,976; 12 ** 4 = 20,736), the
// spot-the-phish practice set and the 24-week outline summary of our own course.
// Lesson family: thinking like a defender (assets, risks, controls), never attack technique.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PASSPHRASE = `# passphrase.py: a random passphrase, and how many exist (ours)
import secrets

words = ["maple", "rocket", "canyon", "pickle",
         "harbor", "violet", "tundra", "biscuit",
         "lantern", "falcon", "meadow", "quartz"]

passphrase = "-".join(secrets.choice(words) for i in range(4))
print(passphrase)

possible = len(words) ** 4
# 20736 for this list
print("Possible passphrases:", possible)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'CYBERSECURITY FOR TEENS', blurb: 'Cybersecurity for US teens: CyberPatriot, CyLab Security Academy (formerly picoCTF), the new AP Cybersecurity course, and how to learn defense safely.' },
  slug: 'cybersecurity-classes-for-teens',
  code: 'ct',
  accent: '#572237',
  accentRationale: 'Cybersecurity for teens, US: a deep plum #572237 from the US allocation sheet (row 33), serious without the alarm-red of warning signs, well apart from the blue accents of the other US subject pages',
  pageType: 'market',
  market: US,
  routeLabel: 'Cybersecurity classes for teens',
  title: 'Cybersecurity Classes for Teens: CyberPatriot, AP and CTFs',
  description: 'Cybersecurity classes for US teens: what CyberPatriot, CyLab Security Academy and AP Cybersecurity involve, a safe practice set, and how to learn defense ethically.',
  ogDescription: 'CyberPatriot rounds, CyLab Security Academy (formerly picoCTF), AP Cybersecurity from fall 2026: a defensive, ethical route into security for American teens.',
  twitterDescription: 'Cybersecurity for US teens: CyberPatriot, CyLab, AP Cybersecurity and a safe start.',
  pageName: 'Cybersecurity Classes for Teens',
  webPageDescription: 'A guide for US teens and parents to learning cybersecurity defensively: the main US programs read from their official sites, a practice set, and live classes.',
  courseDescription: 'Live online cybersecurity classes for US teens aged 13 to 18, defensive and ethical, from passwords and phishing to cryptography and a capture-the-flag capstone, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Cybersecurity classes for teens',
  navLinks: [
    { href: '#programs', label: 'US programs' },
    { href: '#cyberpatriot', label: 'CyberPatriot' },
    { href: '#ctf', label: 'CTF practice' },
    { href: '#ap', label: 'AP Cybersecurity' },
    { href: '#practice', label: 'Practice set' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 13 to 18 &middot; Defensive cybersecurity',
  h1: 'Cybersecurity classes for teens',
  lede: 'Teenagers who get curious about cybersecurity often start from one of two places: a scam message that nearly fooled someone in the family, or a friend who mentions a school cyber team. Both are good starting points. Security is one of the few areas of computing where a 14-year-old can do real, useful work early, as long as the learning is defensive and stays on systems built for practice. This page explains the American programs teens hear about, what each one actually involves according to its own website, how to begin safely at home, and how our live classes fit around them.',
  secondaryCta: { href: '#programs', label: 'Compare the US programs' },
  wa: 'Hello Modern Age Coders, my teen in the US is interested in cybersecurity. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Defensive and ethical, always',
  spec: [
    ['For', 'Ages 13 to 18'],
    ['Focus', 'Defense, never attack'],
    ['Coding needed', 'None to start'],
    ['Covers', 'Passwords, phishing, crypto, CTFs'],
    ['US programs', 'CyberPatriot, CyLab, AP'],
    ['Format', 'Batch or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Good cybersecurity classes for teens teach defense: how the internet works, passwords and hashing, phishing, safe habits, encryption, and practice puzzles on systems built to be tested. In the US, teens can also join CyberPatriot through a school team, practice free at CyLab Security Academy (formerly picoCTF), and from fall 2026 take AP Cybersecurity where schools offer it. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a teen interested in security',
    lede: 'The first is our cybersecurity course; the other two build the coding that security work leans on later.',
    items: [
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'CT / 01', title: 'Cybersecurity for teens', note: 'Ages 13 to 18, no coding needed. Defense first, a CTF capstone last.' },
      { course: 'python-complete-masterclass-teens', code: 'CT / 02', title: 'Python for teens', note: 'The language most security tools and puzzles use.' },
      { course: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', code: 'CT / 03', title: 'picoCTF and CyberPatriot prep', note: 'Ages 13 to 18. Team competition practice: hardening, networks, capture the flag.' }
    ]
  },

  sections: [
    {
      id: 'programs', tint: 'tint', eyebrow: 'US programs',
      h2: 'The US cybersecurity programs teens ask about',
      lede: 'Three US programs come up most in searches by teens and parents. Each is run by a different kind of organization and suits a different kind of teen. Every fact below comes from the program&rsquo;s own website, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'US cybersecurity programs for teens, from their official sites (read 17 October 2026)', head: ['Program', 'Run by', 'Format', 'How a teen takes part'], rows: [
          ['CyberPatriot', 'The Air &amp; Space Forces Association', 'Team competition: secure virtual Windows and Linux systems', 'Through a school or approved organization, on a team with an adult coach'],
          ['CyLab Security Academy (formerly picoCTF)', 'Carnegie Mellon University', 'Free online challenges, learning paths and timed events', 'Sign up individually, or through a teacher&rsquo;s classroom'],
          ['AP Cybersecurity', 'College Board', 'A yearlong high school course with an AP exam', 'Where a high school offers it, from fall 2026']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which one first?',
          left: [
            'A teen who likes teamwork and deadlines will enjoy CyberPatriot, but it depends on a school or organization fielding a team. A teen who likes working alone at their own pace can start on CyLab Security Academy tonight.',
            'AP Cybersecurity depends entirely on the high school. If yours offers it from fall 2026, it is the most structured option of the three; if not, the other two remain open.'
          ],
          rightH3: 'Where our classes fit',
          right: [
            'Our classes are not a team in any of these programs, and we are not connected with the Air &amp; Space Forces Association, Carnegie Mellon University or College Board. We teach the defensive basics all three assume.',
            'That is the role we aim to play: a teacher who explains, live, the concepts a competition or course moves through quickly.'
          ] }
      ]
    },
    {
      id: 'cyberpatriot', tint: 'deep', eyebrow: 'CyberPatriot',
      h2: 'CyberPatriot: how the national youth competition works',
      lede: 'CyberPatriot calls itself the National Youth Cyber Education Program, created by the Air &amp; Space Forces Association, and describes its National Youth Cyber Defense Competition as the nation&rsquo;s largest cyber defense competition.',
      body: [
        { kind: 'table', caption: 'CyberPatriot at a glance, from uscyberpatriot.org (read 17 October 2026)', head: ['Point', 'What CyberPatriot says'], rows: [
          ['The task', 'Teams find and fix cybersecurity vulnerabilities in virtual operating systems and are scored on how secure they make them'],
          ['Team size', 'Two to six competitors; at most five compete at one time; one coach, who is an adult'],
          ['Volunteers', 'Technical mentors and team assistants must register and pass a background check (minimum age 18)'],
          ['Divisions', 'Open (high school), All Service (JROTC, Civil Air Patrol, Naval Sea Cadet Corps) and Middle School'],
          ['A round', 'A four-hour period with a Network Security Challenge (Windows and Linux) and a Cisco Networking Challenge'],
          ['Where', 'Online rounds from any location; National Finals in person in Bethesda, MD, in the spring'],
          ['Prior knowledge', '"designed for any student, regardless of prior cybersecurity knowledge"']
        ] },
        { kind: 'table', mt: true, caption: 'The 2026 to 2027 season calendar, as CyberPatriot published it (read 17 October 2026)', head: ['Stage', 'When'], rows: [
          ['Team registration', 'June 2 to October 1, 2026, for the 2026 to 2027 season'],
          ['Exhibition rounds', 'Summer months, May to August'],
          ['Training round, with an answer key', 'September'],
          ['Official practice round', 'October; the posted reminder gives October 7 to 20'],
          ['Roster finalization', 'October 21'],
          ['Scored rounds', 'One weekend a month, October to January; teams pick any four-hour period that weekend']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Between registration windows',
          left: [
            'Registration for the 2026 to 2027 season ran June 2 to October 1, 2026; uscyberpatriot.org publishes each new window. The months before a season are the useful ones for learning Windows and Linux settings, networking basics and careful note-taking.',
            'Ask the school early. Because teams need an adult coach from a participating organization, a teen often has to find a teacher willing to start one.'
          ],
          rightH3: 'What CyberPatriot rewards',
          right: [
            'Teams are scored on how secure they make a system, so the work is defensive by design. In general terms, hardening a computer means reviewing accounts and settings and keeping software current; that is our summary, not CyberPatriot&rsquo;s scoring list.',
            'Methodical work, careful notes and teamwork matter in any team competition, and our course builds them in its practice rounds. We teach the concepts; competition practice belongs to the team and its coach.'
          ] }
      ]
    },
    {
      id: 'ctf', tint: 'tint', eyebrow: 'Practice at your own pace',
      h2: 'CyLab Security Academy, the new home of picoCTF',
      lede: 'Many teens search for picoCTF. Its website now announces that picoCTF has joined CyLab Security Academy, Carnegie Mellon University&rsquo;s free cybersecurity learning platform. Existing picoCTF logins created before May 8, 2026 still work there.',
      body: [
        { kind: 'table', caption: 'CyLab Security Academy, from cylabacademy.org (read 17 October 2026)', head: ['Point', 'What the platform says'], rows: [
          ['Cost', 'Always free'],
          ['Who it is for', 'Middle schoolers through adults; it started as a competition for high school students'],
          ['Reach', '1M+ learners and 15K+ classrooms worldwide'],
          ['Content', '500+ challenges from beginner to advanced'],
          ['Four parts', 'Challenges, Learning Paths, Events (timed, often with a scoreboard) and Classrooms for teachers'],
          ['Eight domains', 'General Skills, AI, Cryptography, Web Exploitation, Forensics, Binary Exploitation, Reverse Engineering, Blockchain'],
          ['Why it is legal', '"Every challenge is built to be hacked, so the practice is legal"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a CTF is',
          left: [
            'CTF stands for Capture the Flag. Each challenge hides a short piece of text, the flag, that you find by reading, reasoning and testing. Hints come one at a time on CyLab&rsquo;s platform.',
            'In our experience, General Skills and Cryptography are the gentlest places for a beginner. CyLab describes the first as the terminal, scripting and quick file work, and the second as codes, ciphers and locked data; old ciphers can be solved with a pencil.'
          ],
          rightH3: 'The rule that never bends',
          right: [
            'A CTF platform is a playground built to be broken. A school website, a friend&rsquo;s account or a game server is not. The same curiosity used on a system without permission stops being practice.',
            'Our rule in class is short: only test what you own, or what was built for practice and says so. We teach that rule before anything technical.'
          ] },
        { kind: 'p', mt: true, html: 'CyLab Security Academy also publishes research. Its own announcement describes a white paper on competition data and AI use, which is worth reading with a teen who is tempted to let a chatbot solve the puzzles. Whatever the platform&rsquo;s age rules are for accounts, check them with your teen when signing up; they were not on the pages we could read.' }
      ]
    },
    {
      id: 'ap', tint: 'deep', eyebrow: 'In high school',
      h2: 'AP Cybersecurity: the new College Board course from fall 2026',
      lede: 'College Board is adding cybersecurity to the AP program through AP Career Kickstart, a group of career courses. Its timeline shows AP Cybersecurity launching in fall 2026, with the first exams in May 2027.',
      body: [
        { kind: 'table', caption: 'AP Cybersecurity, from AP Central (read 17 October 2026)', head: ['Point', 'What College Board says'], rows: [
          ['What it is', 'A yearlong course that "aligns closely with standard first-year collegiate cybersecurity courses"'],
          ['Framework', 'Aligns with the NICE Workforce Framework; five units'],
          ['Skill category 1', 'Analyze Risk: 25 to 40 percent of the exam'],
          ['Skill category 2', 'Mitigate Risk: 25 to 40 percent of the exam'],
          ['Skill category 3', 'Detect Attacks: 25 to 40 percent of the exam'],
          ['First exam', 'May 2027'],
          ['College credit', 'The first list of institutions granting credit "will be released in spring 2027"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a 9th or 10th grader',
          left: [
            'For the first time, a US high school student may be able to take cybersecurity as an AP course, if their school adopts it. Ask the counselor during course selection whether it is offered for 2026 to 2027 or planned for later.',
            'Because credit policies are still being set, nobody can yet say which colleges will award credit. College Board says that list comes in spring 2027.'
          ],
          rightH3: 'How we can help',
          right: [
            'The three skill categories, analyze risk, mitigate risk and detect attacks, are the backbone of our own course, so a teen who takes our classes first meets the ideas before the AP course moves through them at school pace.',
            'We do not offer AP Cybersecurity exam preparation at the moment and make no score promises. For teens on the AP CS route, see our <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP CSP coaching</a>.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Start at home',
      h2: 'A safe first practice set, and a little code',
      lede: 'October is Cybersecurity Awareness Month, and CISA, the US Cybersecurity and Infrastructure Security Agency, says everyone should take four core steps. They make a good first week.',
      body: [
        { kind: 'ol', items: [
          '<b>Avoid and report phishing scams.</b> CISA&rsquo;s first step. Our practice table below trains the eye.',
          '<b>Use strong passwords.</b> Long and random beats short and clever; the arithmetic further down shows why.',
          '<b>Use multifactor authentication and a password manager.</b> A second factor protects an account even after a password leaks.',
          '<b>Update software.</b> Updates close known holes, and keeping systems current is part of everyday defensive work.'
        ] },
        { kind: 'table', mt: true, caption: 'Spot the phish: a practice set (ours; answers in the right-hand column)', head: ['The message', 'The red flag', 'The safe move'], rows: [
          ['"Your school account will be deleted in 1 hour. Log in here to keep it."', 'Urgency and a login link', 'Go to the school portal yourself, never through the link'],
          ['A game friend offers free in-game currency if you share your password', 'Anyone asking for a password', 'Never share it; report the account'],
          ['An email from your "bank" with a misspelled sender address', 'A look-alike address', 'Do not reply; a parent checks through the official app'],
          ['A text saying a package could not be delivered, with a short link', 'An unexpected delivery and a link', 'Check the order on the shop&rsquo;s own site'],
          ['A pop-up saying your laptop is infected, with a phone number to call', 'A scare plus a phone number', 'Close the tab; tell a parent or school IT']
        ] },
        { kind: 'code', mt: true, label: 'A passphrase maker in Python', lang: 'python', code: PASSPHRASE, note: 'The Python documentation says the secrets module is for cryptographically strong random numbers suitable for managing data such as passwords, and should be used in preference to the random module for this. secrets.choice picks one item from the list.' },
        { kind: 'table', mt: true, caption: 'How many possibilities, if every choice is random (our arithmetic)', head: ['Secret', 'Calculation', 'Possibilities'], rows: [
          ['A 4-digit PIN', '10 ** 4', '10,000'],
          ['4 words from our 12-word list', '12 ** 4', '20,736'],
          ['8 random lowercase letters', '26 ** 8', '208,827,064,576'],
          ['8 random letters (both cases) and digits', '62 ** 8', '218,340,105,584,896'],
          ['4 random words from a 7,776-word list', '7,776 ** 4', '3,656,158,440,062,976']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers teach',
          left: [
            'The script on its own is weak. Twelve words give only 20,736 four-word passphrases, fewer than a teen might guess. The strength comes from the size of the list and the randomness of each pick, not from the word count.',
            'With a 7,776-word list, four random words give more possibilities than eight random letters and digits, and are far easier to remember. That trade-off is the whole lesson.'
          ],
          rightH3: 'What the numbers do not say',
          right: [
            'These counts only hold when every choice is truly random. A passphrase a person picks, such as a favorite team and a birth year, is far weaker than its length suggests.',
            'We do not print crack times. They depend on how a site stores passwords, which is why hashing is the next lesson in our course, and why a password manager plus a second factor matter more than any single clever password.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.cisa.gov/secure-our-world" rel="noopener" target="_blank">CISA Secure Our World</a> and the Python <a class="ag-inline-link" href="https://docs.python.org/3/library/secrets.html" rel="noopener" target="_blank">secrets module</a> documentation, read 17 October 2026. CISA lists Cybersecurity Career Week for October 19 to 24, 2026. We are not connected with CISA.' }
      ]
    },
    {
      id: 'course', tint: 'deep', eyebrow: 'Our course',
      h2: 'What our 24-week teen cybersecurity course covers',
      lede: 'A summary of our own course for ages 13 to 18. No coding is needed to start; teens who already code go deeper in the practical weeks.',
      body: [
        { kind: 'table', caption: 'Cybersecurity for Teens, our syllabus in brief', head: ['Months', 'Theme', 'What teens do'], rows: [
          ['1', 'How the internet actually works', 'Trace a web request, map their own digital footprint'],
          ['2', 'Passwords, hashing and proving who you are', 'See why good sites never store your password, set up two-factor sign-in'],
          ['3', 'Phishing and social engineering', 'Take apart real-style phishing messages and build a field guide'],
          ['4', 'Malware concepts and safe habits', 'Read an outbreak as defenders; harden their own devices'],
          ['5', 'Encryption and a trustworthy web', 'Classical ciphers by hand, then cookies, sessions and the padlock'],
          ['6', 'The capture-the-flag capstone', 'Practice puzzles, a scored CTF event, and written writeups']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades 7 and 8', p: 'Months 1 to 4 at a gentler pace, with lots of discussion of scams teens actually see. A good fit for CyberPatriot&rsquo;s middle school division later.' },
          { h3: 'Grades 9 and 10', p: 'The full course, then Python for teens, so the CTF capstone can include a little scripting.' },
          { h3: 'Grades 11 and 12', p: 'The course alongside AP or college plans, with the writeups shaped into a portfolio they can show.' }
        ] },
        { kind: 'p', mt: true, html: 'Teens weighing security against other computing paths can also read our guide to <a class="ag-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a> and <a class="ag-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From user to defender',
    h2: 'Four stages of a teen in cybersecurity',
    lede: 'Our description of the stages a teen moves through in this subject.',
    table: { caption: 'Stages of a young defender (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Careful user', 'Spots phishing, uses a password manager, turns on two-factor sign-in'],
      ['2. Explainer', 'Can explain hashing, encryption and why updates matter to a parent'],
      ['3. Practitioner', 'Solves beginner CTF challenges and writes up how'],
      ['4. Team defender', 'Hardens a system methodically, documents it, works in a team']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 protects the whole family. Ask your teen to set up two-factor sign-in on your accounts; it is a real job and a confidence boost.',
      'If your teen talks about hacking, ask what they practiced on. A clear answer naming a practice platform is the right one.'
    ] },
    right: { h3: 'For teens', ps: [
      'Write up every challenge you solve, even easy ones. Writeups are how security people show what they know.',
      'Never test a system you do not own or have permission to test. Practice platforms exist so you never need to.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalog',
    h2: 'Nine courses for teens drawn to security and systems',
    lede: 'Live online, with one teacher through the term, as a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Security', sub: 'Ages 13 to 18', courses: [
        { code: 'CT / SEC / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defense, crypto, a CTF.' },
        { code: 'CT / SEC / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Scripts and tools.' },
        { code: 'CT / SEC / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-stack for teens', blurb: 'How the web is built.' }
      ] },
      { num: 'II', h3: 'Computer science', sub: 'High school', courses: [
        { code: 'CT / CS / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CSP preparation', blurb: 'For the College Board CSP exam.' },
        { code: 'CT / CS / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CS A preparation', blurb: 'The Java-based AP course.' },
        { code: 'CT / CS / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'The thinking behind CTFs.' }
      ] },
      { num: 'III', h3: 'Building', sub: 'Teens', courses: [
        { code: 'CT / BLD / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Memory and speed, understood.' },
        { code: 'CT / BLD / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'The language of the browser.' },
        { code: 'CT / BLD / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Build in a team, fast.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When classes run',
    h2: 'Cybersecurity lessons around a high school schedule',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches that work across US time zones.' },
      { time: 'Weekends', l: 'Weekend mornings, clear of sports and jobs.' },
      { time: '1-on-1', l: 'A private plan around school and competitions.' }
    ],
    cells: [
      { h3: 'Defense only', p: 'Nothing is taught that targets a real system.' },
      { h3: 'No coding to start', p: 'Coding comes in when it helps.' },
      { h3: 'Writeups every month', p: 'Teens learn to document like professionals.' },
      { h3: 'A regular teacher', p: 'One person who knows your teen&rsquo;s progress.' },
      { h3: 'Anywhere in the US', p: 'Live online from home.' },
      { h3: 'Group or private', p: 'Fifteen to twenty per batch, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our teen students',
  projectsLede: 'A sample of what teens built in our classes. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews from parents, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'CyberPatriot practice, CyLab Security Academy and CISA&rsquo;s guidance are all free to read and use. Our classes are paid monthly in US dollars, with no long commitment; finish at the end of any month.',
    free: ['A free first lesson', 'Talk through their goals', 'No card details'],
    group: ['Fifteen to twenty per batch', 'The same teacher throughout', 'A batch time you choose', 'Paid monthly'],
    one: ['One teen, one teacher', 'At your convenience', 'Shaped around their aims']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Cybersecurity for teens: questions',
    items: [
      { q: 'What should a cybersecurity class for teens teach?', a: 'Defense: how the internet works, passwords and hashing, two-factor sign-in, phishing, malware concepts, updates, encryption and practice puzzles on systems built to be tested. It should never teach attacks on real systems.' },
      { q: 'Does my teen need to know coding first?', a: 'No. Our course starts with no coding. Python helps later, especially for capture-the-flag puzzles, so many teens add our Python course after the first few months.' },
      { q: 'What is CyberPatriot?', a: 'The National Youth Cyber Education Program created by the Air and Space Forces Association. Its competition has teams of two to six middle or high school students secure virtual Windows and Linux systems, with an adult coach.' },
      { q: 'When can my teen join CyberPatriot?', a: 'Teams register through a school or approved organization. For the 2026 to 2027 season, CyberPatriot listed team registration as June 2 to October 1, 2026; check uscyberpatriot.org for the next registration window.' },
      { q: 'What happened to picoCTF?', a: 'The picoCTF website says picoCTF has joined CyLab Security Academy, Carnegie Mellon University\'s free cybersecurity learning platform. Logins created before May 8, 2026 still work there.' },
      { q: 'Is there an AP Cybersecurity course?', a: 'Yes. College Board lists AP Cybersecurity as launching in fall 2026, with the first exams in May 2027. Whether a student can take it depends on whether their high school offers it.' },
      { q: 'Is learning hacking legal for teens?', a: 'Practicing on platforms built for it is legal; CyLab says its challenges are built to be hacked so the practice is legal. Testing a real system without permission is not. We teach defense and only use practice environments.' },
      { q: 'What can my teen do at home this week?', a: 'Start with CISA\'s four core steps: avoid and report phishing, use strong passwords, use multifactor authentication with a password manager, and update software. The practice set on this page is a good first exercise.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do cybersecurity classes cost?', a: 'The first lesson is free. After that, classes are paid one month at a time, and the fees section on this page shows the monthly figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'More for US teens heading into computing.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our pages for US families.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Clubs, competitions and projects.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'The AP course many teens take first.' },
      { href: '/hackathons-for-high-school-students', label: 'High school hackathons', p: 'Team building under time pressure.' },
      { href: '/coding-for-15-year-olds', label: 'Coding for 15 year olds', p: 'What fits at fifteen.' },
      { href: '/blog/how-to-use-chatgpt-to-study-without-cheating', label: 'Studying with AI, honestly', p: 'Using chatbots without losing the skill.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge guide', p: 'The Congressional App Challenge explained from the 2026 rules, with a ten-week plan.' },
      { href: '/presidential-ai-challenge-guide', label: 'Presidential AI Challenge guide', p: 'The Presidential AI (now SI) Challenge explained from the official 2027 rules.' },
      { href: '/acsl-competition-preparation', label: 'ACSL competition preparation', p: 'ACSL from the official 2026-27 pages, with original practice problems.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us what got your teen interested: a scam, a school team, a CTF they tried. The teacher builds the first lesson around that.',
    readFirst: 'For a closer look at a class, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; the full cybersecurity syllabus is on our <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Teaching happens live online, with teachers who are based in India, so teens anywhere in the country can join. Send us a WhatsApp message for a quick reply.',
    formNote: 'No charge for the first lesson, and no card requested.'
  },

  footer: {
    cols: [
      { h4: 'Teens and computing', links: [
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-for-14-year-olds', label: 'Coding for 14 year olds' },
        { href: '/coding-for-16-year-olds', label: 'Coding for 16 year olds' },
        { href: '/python-for-13-year-olds', label: 'Python for 13 year olds' }
      ] }
    ],
    bottomRight: 'Assets, risks, controls: think like a defender'
  },

  personalityCss: `
.ag-root.ag-ct .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-ct .ag-capsule { border-left-width: 6px; border-radius: 5px; }
.ag-root.ag-ct .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ct .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-ct .ag-steps li { line-height: 1.58; }
.ag-root.ag-ct .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Official sites read raw on 17 October 2026: uscyberpatriot.org (program, competition overview, divisions, team rules, season dates), picoctf.org and cylabacademy.org (picoCTF joined CyLab Security Academy; free; 1M+ learners, 15K+ classrooms, 500+ challenges, eight domains), AP Central (AP Cybersecurity course, skill weights, credit timing) and AP Career Kickstart timeline, CISA Secure Our World (four core steps, Awareness Month, Career Week), docs.python.org secrets module.',
    localProject: 'A Python passphrase maker using secrets.choice (ours) and a combinations table, all our arithmetic: 10 ** 4 = 10,000; 12 ** 4 = 20,736; 26 ** 8 = 208,827,064,576; 62 ** 8 = 218,340,105,584,896; 7,776 ** 4 = 3,656,158,440,062,976. A five-message spot-the-phish practice set (ours). Lesson family: thinking like a defender.',
    requiredMentions: ['National Youth Cyber Education Program', 'Two to six competitors', 'Bethesda, MD', 'June 2 to October 1, 2026', 'Cisco Networking Challenge', 'CyLab Security Academy', 'May 8, 2026', 'Every challenge is built to be hacked, so the practice is legal', 'NICE Workforce Framework', 'Analyze Risk: 25 to 40 percent', 'October is Cybersecurity Awareness Month', '218,340,105,584,896', '12 ** 4'],
    sources: [
      { claim: 'CyberPatriot program, teams, divisions, challenges, finals and season dates.', url: 'https://www.uscyberpatriot.org/competition-overview/' },
      { claim: 'CyberPatriot as the National Youth Cyber Education Program of the Air & Space Forces Association.', url: 'https://www.uscyberpatriot.org/' },
      { claim: 'picoCTF has joined CyLab Security Academy; logins before May 8, 2026 still work.', url: 'https://picoctf.org/' },
      { claim: 'CyLab Security Academy: free, reach, challenges, domains, legality of practice.', url: 'https://cylabacademy.org/' },
      { claim: 'AP Cybersecurity course, framework, skill weights and credit timing.', url: 'https://apcentral.collegeboard.org/courses/ap-cybersecurity' },
      { claim: 'AP Cybersecurity launch in fall 2026 and first exams in May 2027.', url: 'https://apcentral.collegeboard.org/courses/ap-career-kickstart' },
      { claim: 'CISA four core steps, Cybersecurity Awareness Month, Career Week dates.', url: 'https://www.cisa.gov/secure-our-world' },
      { claim: 'Python secrets module for passwords; secrets.choice.', url: 'https://docs.python.org/3/library/secrets.html' }
    ],
    rejectedClaims: [
      'picoCTF competition dates, rules and age limits: picoctf.org subpages returned HTTP 403 and were not retried; no picoCTF rules are printed.',
      'An age requirement for CyLab Security Academy accounts: not on the pages read, so families are told to check at sign-up.',
      'GenCyber camps: gen-cyber.com did not respond, so the program is not described.',
      'Any explanation of attack techniques in the CyLab domains: deliberately left out; domain names only.',
      'Crack times for passwords: depend on storage and hardware, so none are printed.',
      'CyberPatriot fees: not needed for the page and not printed.',
      'Our ethical hacking course: it is for adults (18+), so it is not offered on this under-18 page.',
      'Any affiliation with CyberPatriot, Carnegie Mellon, College Board or CISA: none, and the page says so.'
    ]
  }
};
