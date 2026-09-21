'use strict';
// Cyber security course for teens, UK (ag- age and career door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - National Crime Agency, Cyber Choices page: "The Cyber Choices programme was created to help people make
//    informed choices and to use their cyber skills in a legal way."; national programme co-ordinated by the NCA,
//    delivered by Regional Organised Crime Units and local police force cyber teams; the Computer Misuse Act
//    1990 sections with the NCA's own examples (Section 1 unauthorised access, Adam; Section 2 further offences,
//    Raj; Section 3 impairing operation, Sarah and a 'Booter' tool; Section 3ZA serious damage, Kim; Section 3A
//    making, supplying or obtaining articles, Robin); consequences including "Up to life in prison for the most
//    serious offences"; "The average age of someone convicted for cyber crime offences is much younger than other
//    crime types; offenders are often teenagers."; legal careers listed (penetration testing, security
//    operations, legal hacking and more). Salary figures on that page omitted.
//  - NCA news, "One in five children found to engage in illegal activity online" (undated on the page): survey of
//    children aged 10-16, 20% engage in behaviours that violate the Computer Misuse Act, 25% among those who game;
//    "Many offenders participating in low level cyber crime are unaware that their actions are criminal"; the
//    low-level examples; consequences.
//  - NCA news, 17 January 2022: referrals into the NCCU Prevent team, "the median age at 15 and the youngest at
//    nine"; 107% rise in reports of students deploying DDoS attacks from 2019 to 2020.
//  - DSIT, Cyber security skills in the UK labour market 2025 (gov.uk, first published 19 September 2025): 49% of
//    businesses with a basic skills gap (firewalls, personal data, malware), charities 59%, public sector 14%;
//    30% of businesses and 29% of charities with advanced skills gaps (forensic analysis, interpreting malicious
//    code, penetration testing); workforce about 143,000; workforce gap 3,800; about 600 new apprenticeship
//    starts; cyber sector employers hiring through non-degree routes 63%, running events in schools or colleges
//    41%.
//  - Our own course, Cybersecurity for Teens (content/courses/data/cybersecurity-teens.json): ages 13 to 18, no
//    coding required, 24 weeks in six months; month titles; the ethics checkpoint line quoted; CTF month of
//    "instructor-built puzzle competitions".
//  - nen.gov.uk returned HTTP 403; not circumvented. legislation.gov.uk is behind an automated-access challenge,
//    so the Act's section titles are taken as the NCA publishes them.
// Spine: the same curiosity, on the legal side of the line. One in five 10 to 16 year olds in an NCA survey did
// things the Computer Misuse Act forbids, many without knowing; employers meanwhile report basic cyber skills
// gaps in half of businesses. The course teaches defence and legal practice only: own devices, instructor-built
// puzzles, written permission. The CyberFirst Girls page owns NCSC competition material and is only linked.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'CYBER, TEENS', blurb: 'For UK teenagers curious about hacking: the Computer Misuse Act as the NCA explains it, the skills gap, and defensive security learned legally.' },
  slug: 'cyber-security-course-for-teens-uk',
  code: 'cyt',
  accent: '#325D36',
  accentRationale: 'Cyber security for teens, UK: a deep defensive green from the solver (6.19:1 on every paper tint, dE 7.6 from the nearest used accent)',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Cyber security course for teens, UK',
  title: 'Cyber Security Course for Teens in the UK | Live Online',
  description: 'A cyber security course for UK teenagers: defensive skills, legal practice and the Computer Misuse Act as the NCA explains it. Ages 13 to 18, first lesson free.',
  ogDescription: 'In an NCA survey, one in five 10 to 16 year olds did things the Computer Misuse Act forbids, often without knowing. The same curiosity has a legal home.',
  twitterDescription: 'Cyber security for UK teens: how attacks work, how defence wins, and how to practise legally. Live online, ages 13 to 18, first lesson free.',
  pageName: 'Cyber Security Course for Teens in the UK',
  webPageDescription: 'A live online cyber security course for teenagers in the UK, with the Computer Misuse Act as the National Crime Agency explains it and DSIT figures on the cyber skills gap.',
  courseDescription: 'Live online defensive cyber security for UK teenagers aged 13 to 18: networks, passwords and hashing, phishing, malware concepts, encryption and web security, ending in instructor-built capture-the-flag puzzles.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Cyber security for teens',
  navLinks: [
    { href: '#law', label: 'The law' },
    { href: '#skills', label: 'The skills gap' },
    { href: '#practise', label: 'Practising legally' },
    { href: '#course', label: 'The course' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Ages 13 to 18 &middot; Defensive security',
  h1: 'Cyber security course for teens in the UK',
  lede: 'Curiosity about how systems break is exactly what the cyber security industry wants. It is also where a lot of teenagers get into trouble without meaning to. The National Crime Agency reports that in a survey of children aged 10 to 16, 20% engaged in behaviours that violate the Computer Misuse Act, rising to 25% among those who game, and that many people involved in low-level cyber crime "are unaware that their actions are criminal". Logging into a friend\'s account with a password you watched them type, knocking a rival offline in a game with a booter tool, downloading software to get into someone else\'s laptop: the NCA uses all three as examples of offences. At the same time, the government\'s own research finds that nearly half of UK businesses have a basic cyber skills gap. This course sits between those two facts. It teaches UK teenagers how attacks work and how defence wins, and it keeps every exercise on the legal side of the line: their own devices and accounts, puzzles built by the instructor, and nothing touched without permission.',
  secondaryCta: { href: '#law', label: 'What the law says' },
  wa: 'Hello Modern Age Coders, my teenager is interested in cyber security in the UK and we would like a free first lesson.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; defence first, and always legal',
  spec: [
    ['For', 'UK teenagers aged 13 to 18'],
    ['Coding needed', 'None to start'],
    ['Length', '24 weeks over six months'],
    ['Covers', 'Networks, passwords, phishing, malware, encryption'],
    ['Ends with', 'Instructor-built capture-the-flag puzzles'],
    ['Practice on', 'Own devices and built puzzles only'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The Computer Misuse Act 1990 makes it an offence to access computer material without permission, to impair a computer\'s operation, or to make or obtain tools for those purposes, and the National Crime Agency warns that teenagers often break it without realising: in an NCA survey of 10 to 16 year olds, 20% had engaged in behaviours that violate the Act. The NCA\'s Cyber Choices programme exists to steer that curiosity towards legal use. Employers need it: DSIT\'s 2025 research found 49% of UK businesses had a basic cyber security skills gap. Modern Age Coders teaches a defensive cyber security course for UK teenagers aged 13 to 18, live and online, covering how the internet works, passwords and hashing, phishing, malware concepts, encryption and web security, ending with instructor-built capture-the-flag puzzles. No coding is needed to start. Every exercise uses the student\'s own devices or puzzles built for the purpose. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a teenager interested in security',
    lede: 'The defensive security course itself, the programming that deeper security work needs, and how the web works underneath. Each card opens the syllabus.',
    items: [
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'CYT / 01', title: 'Cybersecurity for Teens', note: 'Six months of defensive security, from how the internet works to a capture-the-flag capstone. No coding needed.' },
      { course: 'python-complete-masterclass-teens', code: 'CYT / 02', title: 'Python for Teens', note: 'The language most security scripting and tooling is written in, learned properly.' },
      { course: 'backend-coding-masterclass-for-teens', code: 'CYT / 03', title: 'Backend Coding for Teens', note: 'Servers, APIs and databases, the places where web security is won or lost.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: 'tint', eyebrow: 'The law',
      h2: 'The Computer Misuse Act, as the NCA explains it to teenagers',
      lede: 'The NCA\'s Cyber Choices programme "was created to help people make informed choices and to use their cyber skills in a legal way". Its page sets out the Act section by section, each with an example.',
      body: [
        { kind: 'table', caption: 'Computer Misuse Act 1990, with the NCA\'s own examples', head: ['Section', 'Offence', 'The NCA\'s example'], rows: [
          ['1', 'Unauthorised access to computer material', 'Adam watches a friend type a password, then later logs in without permission and reads their messages'],
          ['2', 'Unauthorised access with intent to commit or facilitate further offences', 'Raj uses a teacher\'s unattended tablet to buy things with the saved card'],
          ['3', 'Unauthorised acts impairing, or reckless as to impairing, a computer\'s operation', 'Sarah uses a booter tool to knock a friend offline so she can win a game'],
          ['3ZA', 'Unauthorised acts causing, or creating risk of, serious damage', 'Kim hacks a phone company and stops some people from calling the police, recklessly rather than deliberately'],
          ['3A', 'Making, supplying or obtaining articles for use in offences under sections 1, 3 or 3ZA', 'Robin downloads software to break into a friend\'s laptop, even without having used it yet']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why teenagers in particular',
          left: [
            'The NCA says "The average age of someone convicted for cyber crime offences is much younger than other crime types; offenders are often teenagers." In an earlier release, from January 2022, it reported referrals to its prevention team with "the median age at 15 and the youngest at nine".',
            'Its survey of 10 to 16 year olds found 20% engaging in behaviours that violate the Act, and 25% of those who game. Buying in-game items on someone else\'s account without permission, or DDoS-ing, are both offences, "despite often doing so unwittingly".'
          ],
          rightH3: 'The consequences the NCA lists',
          right: [
            'Arrest and a possible criminal record, computers or phones taken away, risk of expulsion from school, and limits on internet use, careers and international travel. For the most serious offences, the Cyber Choices page states a maximum of "Up to life in prison for the most serious offences".',
            'None of this is meant to frighten a curious teenager away from the subject. The NCA\'s own point is the opposite: the skills are valuable, and there are legal places to use them.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.nationalcrimeagency.gov.uk/cyber-choices" rel="noopener" target="_blank">National Crime Agency, Cyber Choices</a>; <a class="ag-inline-link" href="https://www.nationalcrimeagency.gov.uk/news/one-in-five-children-found-to-engage-in-illegal-activity-online" rel="noopener" target="_blank">NCA, One in five children found to engage in illegal activity online</a>; <a class="ag-inline-link" href="https://www.nationalcrimeagency.gov.uk/news/rise-in-school-cyber-crime-attacks-sparks-nca-education-drive" rel="noopener" target="_blank">NCA, Rise in school cyber crime attacks sparks NCA education drive</a>, 17 January 2022. Section wording is as the NCA presents it; this page is not legal advice.' }
      ]
    },
    {
      id: 'skills', tint: 'deep', eyebrow: 'The skills gap',
      h2: 'Half of UK businesses lack basic cyber skills',
      lede: 'From the Department for Science, Innovation and Technology\'s Cyber security skills in the UK labour market 2025, first published on 19 September 2025.',
      body: [
        { kind: 'table', caption: 'Cyber security skills in the UK, DSIT 2025', head: ['Finding', 'Published figure'], rows: [
          ['Businesses with a basic cyber skills gap', '49%'],
          ['Charities with a basic skills gap', '59%'],
          ['Public sector organisations with a basic skills gap', '14%'],
          ['Businesses with gaps in advanced skills', '30%'],
          ['People in the UK cyber security workforce', 'About 143,000'],
          ['Annual workforce gap', '3,800 people'],
          ['Cyber sector employers diversifying recruitment who hired through non-degree routes', '63%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the basic gap means',
          left: [
            'DSIT describes the basic gap as businesses "struggling with essential tasks including setting up firewalls, managing personal data securely and detecting malware". That is defensive work, and it is exactly where a beginner\'s course starts.',
            'The advanced gaps it names are forensic analysis, interpreting malicious code and penetration testing, which come much later and always under authorisation.'
          ],
          rightH3: 'More than one way in',
          right: [
            'Of cyber sector employers who took steps to diversify recruitment, 63% said they had hired through non-degree routes and 41% had run events in schools or colleges. DSIT\'s annual inflow estimate also includes about 600 new apprenticeship starts flowing into the cyber labour market.',
            'For a teenager, that means a degree is one route among several; our page on <a class="ag-inline-link" href="/coding-before-a-degree-apprenticeship-uk">degree apprenticeships</a> includes the level 6 standard with a cyber security option.'
          ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/cyber-security-skills-in-the-uk-labour-market-2025/cyber-security-skills-in-the-uk-labour-market-2025" rel="noopener" target="_blank">DSIT, Cyber security skills in the UK labour market 2025</a>. The workforce estimate covers the end of 2024.' }
      ]
    },
    {
      id: 'practise', tint: 'tint', eyebrow: 'Practising legally',
      h2: 'Where a curious teenager can practise without breaking the law',
      lede: 'The rule is simple enough to put on a sticky note: only your own devices and accounts, only systems built for practice, and never anything without clear permission.',
      body: [
        { kind: 'table', caption: 'Legal and illegal, side by side', head: ['Legal practice', 'The offence it can turn into'], rows: [
          ['Auditing your own accounts and passwords', 'Trying passwords on someone else\'s account'],
          ['Hardening your own home network settings, with your household\'s agreement', 'Scanning or testing a network you do not own'],
          ['Solving capture-the-flag puzzles built for the purpose', 'Attacking a real website to see if it works'],
          ['Studying how booter and DDoS attacks work in principle', 'Using a booter to knock anyone offline'],
          ['Reading about malware and how defences detect it', 'Downloading or sharing tools meant for attacking others']
        ] },
        { kind: 'p', mt: true, html: 'Our course syllabus puts the principle in one line, repeated as a checkpoint: "knowledge of weaknesses creates responsibility, never permission". Knowing how something could be broken never makes it acceptable to try it on a system that is not yours. Professional penetration testers work under written authorisation from the system\'s owner, and students learn to think the same way from the first week.' },
        { kind: 'two', mt: true,
          leftH3: 'UK routes worth knowing',
          left: [
            'The NCA\'s <a class="ag-inline-link" href="https://www.nationalcrimeagency.gov.uk/cyber-choices" rel="noopener" target="_blank">Cyber Choices</a> site lists legal ways to develop skills and careers, from coding and web development to penetration testing, security operations and law enforcement.',
            'For girls, the NCSC\'s CyberFirst Girls competition is covered on our <a class="ag-inline-link" href="/cyberfirst-girls-competition-preparation">CyberFirst Girls page</a>. Code-breaking fans can look at the <a class="ag-inline-link" href="/national-cipher-challenge-preparation">National Cipher Challenge</a>.'
          ],
          rightH3: 'For parents',
          right: [
            'The NCA encourages parents and teachers of 10 to 16 year olds to help them understand the severity of these offences and develop their skills in positive ways. A structured course is one way to do that.',
            'If a teenager has already crossed a line, the Cyber Choices programme is delivered through Regional Organised Crime Units and local police cyber teams. We are a teaching organisation, not part of that programme.'
          ] }
      ]
    },
    {
      id: 'course', tint: '', eyebrow: 'The course',
      h2: 'Six months of defensive security',
      lede: 'Cybersecurity for Teens runs for 24 weeks over six months, for ages 13 to 18, with no coding required to start.',
      body: [
        { kind: 'table', caption: 'The course month by month', head: ['Month', 'Title', 'What it builds'], rows: [
          ['1', 'How the Internet Actually Works', 'Networks, addresses and what really happens when you load a page'],
          ['2', 'Passwords, Hashing, and Proving Who You Are', 'Why strong passwords work, how hashing protects them, and two-factor login'],
          ['3', 'Phishing and Social Engineering', 'How people, not machines, are usually the way in, and how to spot it'],
          ['4', 'Malware Concepts and Safe Habits', 'What malware does in principle and the habits that keep it out'],
          ['5', 'Encryption and How the Web Stays Trustworthy', 'Encryption, the HTTPS padlock, and web security ideas such as cookies and sessions'],
          ['6', 'The Capture-the-Flag Capstone', 'Instructor-built puzzles in cryptography, logic and file forensics, with written solutions']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Defence first', p: 'Every attack is studied so that the defence makes sense. Students harden their own accounts and audit their own digital footprint along the way.' },
          { h3: 'Puzzles, not targets', p: 'The capture-the-flag month uses puzzle competitions built by the instructor: legal, safe, and a real test of thinking.' },
          { h3: 'Writing it up', p: 'Solutions are written out, because explaining how a puzzle was solved is part of the skill, and a habit professionals rely on.' }
        ] },
        { kind: 'p', mt: true, html: 'Students who want to go further usually add programming next, since scripting underpins most technical security work. Python is the usual choice, then web development to understand the systems being defended. For school exams, security topics also appear in GCSE computer science, and our <a class="ag-inline-link" href="/aqa-gcse-computer-science-8525-help">AQA GCSE computer science</a> page covers that specification.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages for a teenager in security',
    lede: 'Placement depends on what a student already knows, not age.',
    table: { caption: 'From safe habits to technical depth', head: ['Stage', 'What should be true'], rows: [
      ['1. Safe and aware', 'Your own accounts are secured and you can spot a phishing attempt'],
      ['2. Understands the machinery', 'You can explain networks, hashing and encryption in your own words'],
      ['3. Solves puzzles', 'You work through capture-the-flag challenges and write up your solutions'],
      ['4. Builds and scripts', 'You write programs in Python and understand the web systems security protects']
    ] },
    left: { h3: 'Stage three is where it clicks', ps: [
      'Puzzles turn knowledge into skill, legally.',
      'The wider sequence of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four opens doors', ps: [
      'Programming is what turns an interest in security into a technical career path.',
      'It comes after the defensive foundations, not before.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around cyber security',
    lede: 'Security first, then the programming and systems knowledge that deepen it.',
    bands: [
      { num: 'I', h3: 'Security', sub: 'Defensive foundations', courses: [
        { code: 'CYT / SEC / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for Teens', blurb: 'Six months of defence, ending in capture-the-flag.' },
        { code: 'CYT / SEC / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'Using AI assistants well, and checking what they produce.' },
        { code: 'CYT / SEC / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The exam subject, including its networks and security topics.' }
      ] },
      { num: 'II', h3: 'Programming', sub: 'For technical depth', courses: [
        { code: 'CYT / PRG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The scripting language of security work.' },
        { code: 'CYT / PRG / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving and DSA', blurb: 'The logical thinking puzzles depend on.' },
        { code: 'CYT / PRG / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Keeping and sharing your own work properly.' }
      ] },
      { num: 'III', h3: 'Systems', sub: 'What security protects', courses: [
        { code: 'CYT / SYS / 01', slug: 'backend-coding-masterclass-for-teens', title: 'Backend Coding for Teens', blurb: 'Servers and APIs, from the defender\'s side.' },
        { code: 'CYT / SYS / 02', slug: 'mysql-mastery-for-teens', title: 'MySQL for Teens', blurb: 'Databases, and why input must be handled safely.' },
        { code: 'CYT / SYS / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development', blurb: 'Building a web application end to end.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons after school',
    lede: 'Teachers work from India, which keeps one clock all year; the UK is four and a half hours behind India in British Summer Time and five and a half behind in winter. After-school and weekend times in the UK are easy to arrange.',
    slots: [
      { time: 'After school', l: 'An early-evening weekday slot in UK time.' },
      { time: 'Saturday', l: 'A longer session for puzzle work.' },
      { time: 'Sunday', l: 'For teenagers busy on Saturdays.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'We find out what the student knows and what draws them to security.' },
      { h3: 'Small groups', p: 'Five to ten teenagers at the same level.' },
      { h3: 'One to one', p: 'For a faster pace or a particular interest.' },
      { h3: 'Legal by design', p: 'Every exercise uses the student\'s own devices or puzzles built for the purpose.' },
      { h3: 'Explained, not just shown', p: 'Students write up how and why, not only what worked.' },
      { h3: 'Ages 13 to 18', p: 'Taught at a level that respects teenagers without assuming prior coding.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Four projects finished by our students. More, across all ages, are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' and students\' reviews from Google, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee in US dollars, the same everywhere outside India, with no enrolment fee and no commitment beyond the month.',
    free: ['A look at what the student already knows', 'A suggested route through security', 'No payment details needed'],
    group: ['Five to ten teenagers at one level', 'The same teacher each week', 'Capture-the-flag practice', 'Stop at the end of any month'],
    one: ['A teacher for one student', 'A pace set by the student', 'Suits a particular interest or goal']
  },

  faq: {
    eyebrow: 'Questions from parents and teenagers',
    h2: 'What families ask about cyber security',
    items: [
      { q: 'Is it legal for my teenager to learn hacking?', a: 'Learning how attacks work is legal, and it is the basis of defence. Using that knowledge on devices, accounts or systems without permission is an offence under the Computer Misuse Act. Our course keeps every exercise on the student\'s own devices or puzzles built for practice.' },
      { q: 'How common is illegal activity online among young people?', a: 'In an NCA survey of children aged 10 to 16, 20% engaged in behaviours that violate the Computer Misuse Act, rising to 25% among those who game. The NCA says many do not realise it is a crime.' },
      { q: 'What counts as an offence?', a: 'The NCA\'s examples include logging into someone else\'s account without permission, using a booter tool to knock someone offline, buying things with someone else\'s saved card, and downloading software to break into another person\'s device.' },
      { q: 'Does my teenager need to know how to code?', a: 'No. Cybersecurity for Teens needs no coding to start. Python is a natural next step afterwards for students who want technical depth.' },
      { q: 'Are there jobs in cyber security?', a: 'DSIT\'s 2025 research found 49% of UK businesses had a basic cyber skills gap, and 63% of cyber sector employers diversifying recruitment had hired through non-degree routes. We teach skills; we do not promise jobs.' },
      { q: 'What is capture-the-flag?', a: 'A puzzle competition in which students find hidden answers, or flags, by solving challenges in areas such as cryptography, logic and file forensics. In our course the puzzles are built by the instructor for practice.' },
      { q: 'What is Cyber Choices?', a: 'A national programme co-ordinated by the National Crime Agency to help people use their cyber skills legally, delivered through regional and local police cyber teams. We are not part of it, but its website has useful resources.' },
      { q: 'What ages is the course for?', a: 'Ages 13 to 18. Younger children interested in technology usually start with coding courses instead.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that it is USD 100 a month in a group or USD 150 a month one to one, with no enrolment fee.' },
      { q: 'When are lessons?', a: 'After school on weekdays or at weekends in UK time, agreed in the first lesson. Teachers are four and a half hours ahead of the UK in summer and five and a half in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Competitions, routes into work, and programming for teens.',
    items: [
      { href: '/cyberfirst-girls-competition-preparation', label: 'CyberFirst Girls competition', p: 'The NCSC competition for girls.' },
      { href: '/national-cipher-challenge-preparation', label: 'National Cipher Challenge', p: 'Code-breaking for school students.' },
      { href: '/coding-before-a-degree-apprenticeship-uk', label: 'Coding before a degree apprenticeship', p: 'Including the cyber security option.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens', p: 'How we teach teenagers.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'The next step after security basics.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits you. Tell us what interests your teenager about security; the lesson starts there and ends with a route through the course.',
    readFirst: 'Reading first? See the <a class="ag-inline-link" href="/courses">course list</a>, <a class="ag-inline-link" href="/how-we-teach">our approach to teaching</a>, and <a class="ag-inline-link" href="/student-labs">finished student work</a>.',
    note: 'WhatsApp from a UK phone is the quickest way to reach us. We are based in India, so the number starts +91, and there is no UK office.',
    formNote: 'Free first lesson, no card, no contract.'
  },

  footer: {
    cols: [
      { h4: 'Security', links: [
        { href: '/cyberfirst-girls-competition-preparation', label: 'CyberFirst Girls' },
        { href: '/national-cipher-challenge-preparation', label: 'National Cipher Challenge' },
        { href: '/coding-before-a-degree-apprenticeship-uk', label: 'Degree apprenticeships' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/best-coding-classes-for-teens-uk', label: 'Coding for teens' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'The same curiosity, on the legal side of the line'
  },

  personalityCss: `
.ag-root.ag-cyt .ag-hero h1 { letter-spacing: -0.023em; }
.ag-root.ag-cyt .ag-capsule { border-left-width: 5px; border-radius: 5px; }
.ag-root.ag-cyt .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cyt .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-cyt .ag-table th:first-child { width: 22%; }
.ag-root.ag-cyt .ag-band-head h3 { letter-spacing: -0.008em; }
`,

  mustMention: ['Computer Misuse Act', 'National Crime Agency', 'Cyber Choices', '20%', '25%', '49%', '143,000', 'capture-the-flag', 'ages 13 to 18', 'permission'],

  dossier: {
    curriculumAuthority: 'United Kingdom, cyber security for teenagers. National Crime Agency, Cyber Choices: programme purpose quoted; Computer Misuse Act 1990 sections 1, 2, 3, 3ZA and 3A with the NCA\'s examples; consequences including "Up to life in prison for the most serious offences"; "The average age of someone convicted for cyber crime offences is much younger than other crime types; offenders are often teenagers." NCA news, One in five children found to engage in illegal activity online: survey of 10 to 16 year olds, 20% (25% of gamers) engage in behaviours violating the Act; "Many offenders participating in low level cyber crime are unaware that their actions are criminal". NCA news, 17 January 2022: referrals "the median age at 15 and the youngest at nine". DSIT, Cyber security skills in the UK labour market 2025 (19 September 2025): 49% basic gap, charities 59%, public sector 14%, advanced gaps 30%, workforce about 143,000, gap 3,800, non-degree hiring 63%, school or college events 41%, about 600 apprenticeship starts.',
    localProject: 'The same curiosity, on the legal side of the line. The page sets out the Computer Misuse Act through the NCA\'s own teenage examples and survey (20% of 10 to 16 year olds, 25% of gamers), the DSIT 2025 skills gap (49% of businesses lack basic skills), a legal-versus-illegal practice table, and the six-month defensive course with its instructor-built capture-the-flag capstone. Lesson family: the law and the labour market read together to steer curiosity towards legal practice.',
    requiredMentions: ['Computer Misuse Act', '20%', '49%', 'Cyber Choices'],
    sources: [
      { claim: 'NCA, Cyber Choices: programme purpose and delivery, Computer Misuse Act sections and examples, consequences, age of offenders, legal careers.', url: 'https://www.nationalcrimeagency.gov.uk/cyber-choices' },
      { claim: 'NCA, One in five children found to engage in illegal activity online: the 10 to 16 survey, gamers, unawareness, examples and consequences.', url: 'https://www.nationalcrimeagency.gov.uk/news/one-in-five-children-found-to-engage-in-illegal-activity-online' },
      { claim: 'NCA, Rise in school cyber crime attacks sparks NCA education drive, 17 January 2022: referral median age 15, youngest nine.', url: 'https://www.nationalcrimeagency.gov.uk/news/rise-in-school-cyber-crime-attacks-sparks-nca-education-drive' },
      { claim: 'DSIT, Cyber security skills in the UK labour market 2025: skills gaps, workforce size and gap, recruitment routes, apprenticeship inflow.', url: 'https://www.gov.uk/government/publications/cyber-security-skills-in-the-uk-labour-market-2025/cyber-security-skills-in-the-uk-labour-market-2025' }
    ],
    rejectedClaims: [
      'A date for the NCA one-in-five survey: not shown on the page, so none is given.',
      'Salary figures from the Cyber Choices page: omitted to keep pound amounts off the page.',
      'Any claim that the course prepares students for penetration testing work or certifications: not made.',
      'Any affiliation with Cyber Choices, the NCA or the NCSC: explicitly denied.',
      'The NEN Cyber Choices guidance: HTTP 403, not used.',
      'Legal advice on individual situations: the page says it is not legal advice.'
    ]
  }
};
