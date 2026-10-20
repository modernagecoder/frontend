'use strict';
// Coding classes for middle school students (ag- grade-band door, grades 6 to 8; US cluster Phase 2, row 15).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4 and autocomplete_us.tsv): "coding classes for middle school", "coding for middle
// schoolers", "coding classes for middle schoolers", "coding for middle schoolers free", "coding curriculum for middle
// school", "coding activities for middle school", "computer science for middle school students".
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/coding-classes-for-middle-school-students/):
//  - k12cs.org/framework-statements-by-grade-band/ (CC BY-NC-SA 4.0), "By the end of Grade 8": Algorithms "Algorithms
//    that are readable are easier to follow, test, and debug."; Variables "A meaningful identifier is assigned to each
//    variable to access and perform operations on the value by name."; Control "Programmers select and combine control
//    structures, such as loops, event handlers, and conditionals, to create more complex program behavior."; Modularity
//    "Programs use procedures to organize code, hide implementation details, and make code easier to reuse." and
//    "Defining parameters for procedures can generalize behavior and increase reusability."; Program Development
//    "defining a problem" ... "criteria and constraints"; Troubleshooting "A systematic process will identify the source
//    of a problem"; Cybersecurity "such as encryption to maintain its confidentiality"; Safety, Law, and Ethics "People
//    can be tricked into revealing personal information when more public information is available about them online."
//  - nces.ed.gov/programs/coe/glossary: Middle school "A school that offers more of grades 5 through 8 than higher or
//    lower grades but does not offer both kindergarten through grade 4 and grades 9 through 12."
//  - code.org/en-US/curriculum/computer-science-discoveries (site titled CodeAI): "Grades : 6, 7, 8, 9, 10"; full year
//    "over 7 units"; tools Game Lab, App Lab, AI Lab, Web Lab; Devices Computer, Chromebook; curriculum update: "AI
//    Discoveries, the new version of this course" for the 2026-27 school year.
//  - code.org/en-US/curriculum/artificial-intelligence-discoveries: "Grades : 6, 7, 8"; Unit 1 "Thinking Critically About
//    AI"; "AI and Machine Learning moves to Unit 2"; "Full Year (36 weeks)", "Semester (18 weeks)", "Quarter (9 weeks)";
//    tools AI Chat Lab, Web Lab, Game Lab, App Lab, Sketch Lab. code.org/en-US/curriculum: "8 Units", Grades 6-8 pathway.
//  - Congressional App Challenge 2026 rules (congressionalappchallenge.us PDF, copied from src-pilots/cac): "Middle school
//    varies by region but typically encompasses 6th-8th grades"; enrolled in middle or high school on October 26th, 2026.
// Blocked (not circumvented): csteachers.org (Cloudflare 403).
// Our own material, labelled on the page: the grade and age table and which of our courses fits each grade, the
// Caesar cipher program (run with Python 3.13 before printing), the four predict-the-output puzzles with answers
// (each checked by running the function), the first-typed-language table, the ladder and the catalogue grouping.
// Lesson family: procedures and parameters (write it once, reuse it with different inputs).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CAESAR = `# Caesar cipher (ours): one procedure, two parameters, used twice
def shift_message(message, shift):
    result = ""
    for letter in message:
        if letter.isalpha():
            start = ord("A") if letter.isupper() else ord("a")
            result += chr((ord(letter) - start + shift) % 26 + start)
        else:
            result += letter
    return result

secret = shift_message("Meet at the library", 3)
print(secret)                     # Phhw dw wkh oleudub
print(shift_message(secret, -3))  # Meet at the library`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GRADES 6 TO 8', blurb: 'Coding for middle schoolers: what the K-12 CS Framework expects by grade 8, the new AI Discoveries course, a first real program and the language choice.' },
  slug: 'coding-classes-for-middle-school-students',
  code: 'ms',
  accent: '#524B2F',
  accentRationale: 'Middle school grades door, US: #524B2F, a muted pencil-olive chosen with the accent picker (hue 48, s .43, v .32), allocated in alloc.tsv row 15 away from the other US accents, contrast 8.23 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding classes for middle school students',
  title: 'Coding Classes for Middle School Students: Grades 6 to 8',
  description: 'Coding for middle schoolers in grades 6 to 8: what the K-12 CS Framework expects by grade 8, what school courses cover, a first real program and live classes.',
  ogDescription: 'Grades 6 to 8, ages 11 to 14: the years to move from blocks to typed code. Grade 8 expectations, the new AI Discoveries course, a Caesar cipher in Python and live classes.',
  twitterDescription: 'Coding for middle schoolers: grade 8 expectations, a real Python program, and how to choose a language.',
  pageName: 'Coding Classes for Middle School Students',
  webPageDescription: 'A guide for US middle school students and parents to learning to code in grades 6 to 8, built from the K-12 Computer Science Framework, NCES definitions and the Code.org middle school catalogue.',
  courseDescription: 'Live online coding classes for US middle school students in grades 6 to 8, from Scratch to Python, JavaScript and AI, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Coding for middle school students',
  navLinks: [
    { href: '#grades', label: 'Grades 6 to 8' },
    { href: '#framework', label: 'By grade 8' },
    { href: '#school', label: 'School courses' },
    { href: '#program', label: 'A real program' },
    { href: '#language', label: 'Which language' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 8 &middot; Ages 11 to 14',
  h1: 'Coding classes for middle school students',
  lede: 'Modern Age Coders teaches live online coding for middle school students in grades 6 to 8, ages 11 to 14, in a batch or one to one. These are the years to move from block coding to typed Python or JavaScript, write functions that can be reused, and build projects for real users. This page sets out what grade 8 should look like.',
  secondaryCta: { href: '#program', label: 'See a real program' },
  wa: 'Hello Modern Age Coders, my child is in middle school in the US and wants to learn to code properly. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Typed code from sixth grade',
  spec: [
    ['Grades', '6 to 8'],
    ['Ages', '11 to 14'],
    ['Languages', 'Python, JavaScript'],
    ['Big idea', 'Functions and parameters'],
    ['Device', 'Laptop, desktop or Chromebook'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'By the end of grade 8, the K-12 Computer Science Framework expects students to write readable programs that combine loops, events and conditionals, name variables meaningfully, organise code into procedures with parameters, and test whether a solution meets its criteria. A middle school coding class should get a student typing real code, usually Python, and building projects for other people. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for the middle school years',
    lede: 'Middle school straddles our kids and teens courses, so we place each student by age and experience.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'MS / 01', title: 'Python, kids course', note: 'Written for 9 to 12. A first typed language for sixth graders.' },
      { course: 'python-complete-masterclass-teens', code: 'MS / 02', title: 'Python, teen course', note: 'Written for 13 to 18. Deeper projects from seventh or eighth grade.' },
      { course: 'ai-literacy-for-kids-course', code: 'MS / 03', title: 'AI literacy', note: 'Ages 8 to 14. How AI works, where it fails, how to judge it.' }
    ]
  },

  sections: [
    {
      id: 'grades', tint: 'tint', eyebrow: 'Grades 6 to 8',
      h2: 'Middle school in the US, and where our courses fit',
      lede: 'Middle school is the hinge between children&rsquo;s and teenagers&rsquo; coding. A sixth grader and an eighth grader can be in the same building and need quite different classes.',
      body: [
        { kind: 'two',
          leftH3: 'How NCES defines it',
          left: [
            'The National Center for Education Statistics defines a middle school as "A school that offers more of grades 5 through 8 than higher or lower grades but does not offer both kindergarten through grade 4 and grades 9 through 12."',
            'Middle school usually means grades 6 to 8, though some districts start it at grade 5 and some run grade 7 to 8 junior highs. The Congressional App Challenge rules say the same thing in plain words: "Middle school varies by region but typically encompasses 6th-8th grades".'
          ],
          rightH3: 'Kids course or teens course?',
          right: [
            'Our courses for kids run to age 12 and our teen courses start at 13, so the line falls inside middle school. Most sixth graders join a kids course; most eighth graders are ready for the teen version; seventh grade can go either way.',
            'We decide in the free first lesson by looking at typing speed, reading level and what the student has already built, not birthday alone. A confident twelve-year-old who has finished a lot of Scratch may start straight in a teen course.'
          ] },
        { kind: 'table', mt: true, caption: 'Middle school grades, typical ages and where a student usually starts with us (ours)', head: ['Grade', 'Typical age during the year', 'Usual starting point', 'What they build'], rows: [
          ['6th grade', '11 to 12', 'Python for kids, or Scratch if new to coding', 'Text games, quizzes, turtle drawings'],
          ['7th grade', '12 to 13', 'Python for kids or for teens, by level', 'Programs split into functions, simple web pages'],
          ['8th grade', '13 to 14', 'Python or JavaScript for teens', 'Apps for a real user, data projects, contest problems']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://nces.ed.gov/programs/coe/glossary" rel="noopener" target="_blank">NCES glossary</a> and the <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/students/rules/" rel="noopener" target="_blank">Congressional App Challenge 2026 rules</a>, read 17 October 2026. The ages and starting points are ours. We are not connected with NCES or the Congressional App Challenge.' }
      ]
    },
    {
      id: 'framework', tint: 'deep', eyebrow: 'By the end of grade 8',
      h2: 'What the K-12 Computer Science Framework expects by eighth grade',
      lede: 'The K-12 Computer Science Framework, which states may use to develop their own standards, sets an endpoint for grade 8. Read together, its programming statements describe a student who writes code other people can read and reuse.',
      body: [
        { kind: 'table', caption: 'The grade 8 endpoint, word for word from the framework (k12cs.org, 17 October 2026)', head: ['Idea in the framework', 'Grade 8 statement', 'Seen in class as'], rows: [
          ['Algorithms', '"Algorithms that are readable are easier to follow, test, and debug."', 'Rewriting a messy solution so a classmate can follow it'],
          ['Variables', '"A meaningful identifier is assigned to each variable to access and perform operations on the value by name."', '<b>lives_left</b>, not <b>x</b>'],
          ['Control', '"Programmers select and combine control structures, such as loops, event handlers, and conditionals, to create more complex program behavior."', 'A loop inside a condition inside an event'],
          ['Modularity', '"Programs use procedures to organize code, hide implementation details, and make code easier to reuse."', 'Writing a function once and calling it many times'],
          ['Parameters', '"Defining parameters for procedures can generalize behavior and increase reusability."', 'The same function working for any message or any number'],
          ['Troubleshooting', '"A systematic process will identify the source of a problem"', 'Testing one change at a time and reading error messages'],
          ['Online safety', '"People can be tricked into revealing personal information when more public information is available about them online."', 'Thinking before posting a project with a real name or school']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The shift from elementary',
          left: [
            'In the elementary statements the emphasis is on following and creating instructions. By grade 8 the emphasis moves to other people: readable algorithms, meaningful names, and solutions designed by "defining a problem&rsquo;s criteria and constraints" and testing whether they were met.',
            'That is a big change in mindset. A sixth grader often writes code only they understand; an eighth grader who meets these statements writes code a teacher, a teammate or their future self can pick up.'
          ],
          rightH3: 'Where privacy and security come in',
          right: [
            'The grade 8 statements also bring in protection of information "such as encryption to maintain its confidentiality", which is why our example program below is a simple cipher.',
            'They connect it to students&rsquo; own lives as well: the more that is public about someone online, the easier it is to trick them. We talk about that directly when students publish their first projects.'
          ] },
        { kind: 'source', html: 'Quoted from the <a class="ag-inline-link" href="https://k12cs.org/framework-statements-by-grade-band/" rel="noopener" target="_blank">statements-by-grade-band page on k12cs.org</a>, which we checked on 17 October 2026; short extracts only, as its licence allows. The framework sets grade-band endpoints, not a lesson for each grade; your state&rsquo;s standards decide the detail.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'What schools are changing to',
      h2: 'From CS Discoveries to AI Discoveries: the middle school course is being rebuilt',
      lede: 'Code.org says its CS Discoveries course "introduced hundreds of thousands of middle schoolers to computer science." For the 2026 to 2027 school year, Code.org (now presenting its site as CodeAI) recommends a replacement built around AI.',
      body: [
        { kind: 'table', caption: 'Code.org middle school courses, as listed on its curriculum pages (read 17 October 2026)', head: ['Point', 'CS Discoveries', 'AI Discoveries'], rows: [
          ['Grades listed', '6, 7, 8, 9, 10', '6, 7, 8'],
          ['Status', 'Still available to teachers using it; Code.org calls AI Discoveries "the new version of this course"', 'Ready for the 2026 to 2027 school year'],
          ['Length', 'A full year over 7 units, or single units', 'Full Year (36 weeks), Semester (18 weeks) or Quarter (9 weeks)'],
          ['First unit', 'Not stated on the course page', '"Thinking Critically About AI"'],
          ['AI content', 'An AI and Machine Learning unit', 'AI and Machine Learning moves to Unit 2'],
          ['Tools named', 'Game Lab, App Lab, AI Lab, Web Lab', 'AI Chat Lab, Web Lab, Game Lab, App Lab, Sketch Lab'],
          ['Devices', 'Computer, Chromebook', 'Chromebook, computer']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for your student',
          left: [
            'If your child&rsquo;s school adopts AI Discoveries, their first unit of computer science may be about evaluating AI systems, bias and misinformation before they write much code. That is a sensible order, and it raises a question families ask us: will they still learn to program?',
            'They will meet programming in later units, but a school elective is often a quarter or a semester. A weekly class outside school is where students go further with typed code and longer projects.'
          ],
          rightH3: 'How we line up with it',
          right: [
            'We teach the same ideas in a different order: programming first, then AI, then the two together. A student who has written their own small classifier understands far better why an AI system can be confidently wrong.',
            'Code.org and CodeAI have no connection with us. Their catalogue simply shows what many US middle schools teach, so we can start new students in the right place.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://code.org/en-US/curriculum/computer-science-discoveries" rel="noopener" target="_blank">Computer Science Discoveries</a>, <a class="ag-inline-link" href="https://code.org/en-US/curriculum/artificial-intelligence-discoveries" rel="noopener" target="_blank">AI Discoveries</a> and the <a class="ag-inline-link" href="https://code.org/en-US/curriculum" rel="noopener" target="_blank">curriculum catalogue</a> (which lists AI Discoveries as 8 units for grades 6 to 8), read 17 October 2026.' }
      ]
    },
    {
      id: 'program', tint: 'deep', eyebrow: 'A real program',
      h2: 'A Caesar cipher in Python: one function, two parameters',
      lede: 'This is a program we write with middle schoolers in their first month of typed code. It is short, it does something they want (secret messages), and it meets two of the grade 8 statements head on: procedures that organise code, and parameters that make it reusable.',
      body: [
        { kind: 'code', label: 'Python &middot; a Caesar cipher', lang: 'python', code: CAESAR, note: 'Ours. We ran it with Python 3.13 before printing it, and the two comment lines show its real output. The % 26 wraps the alphabet round, so a letter shifted past z comes back to a.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'The procedure', p: '<b>def shift_message</b> wraps the whole idea in one named block that hides the detail from the code that calls it.' },
          { h3: 'The parameters', p: '<b>message</b> and <b>shift</b> let the same function encrypt with 3 and decrypt with -3.' },
          { h3: 'The condition', p: '<b>isalpha()</b> leaves spaces and punctuation alone, a decision students usually add after their first bug.' }
        ] },
        { kind: 'table', mt: true, caption: 'Predict the output before you run it: four practice calls (ours; answers checked by running the function)', head: ['Call', 'What it prints', 'What it tests'], rows: [
          ['shift_message("xyz", 3)', 'abc', 'Wrapping past the end of the alphabet'],
          ['shift_message("Zoo!", 1)', 'App!', 'Capitals and punctuation'],
          ['shift_message("abc", 26)', 'abc', 'A full turn of the alphabet changes nothing'],
          ['shift_message("Hi", -1)', 'Gh', 'A negative shift goes backwards']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The honest limitation',
          left: [
            'A Caesar cipher is easy to break: there are only 25 useful shifts, so a program can try them all in an instant. Students usually discover this themselves, and writing that brute-force loop is the next lesson.',
            'That discovery is worth more than the cipher. It shows why real encryption is mathematical and why the grade 8 framework talks about protecting information rather than hiding it.'
          ],
          rightH3: 'Where it leads',
          right: [
            'From here students write a function that counts letters, then use the counts to guess the shift automatically. That is their first taste of using data to make a decision.',
            'Older middle schoolers take the same idea into JavaScript and put it on a web page their friends can use, which is a project for a real user, exactly what the framework asks for.'
          ] }
      ]
    },
    {
      id: 'language', tint: 'tint', eyebrow: 'Which language',
      h2: 'Choosing a first typed language in middle school',
      lede: 'Parents often ask which language a middle schooler should learn. There is no single right answer, but there is a sensible order for most students, and it depends on what they want to make.',
      body: [
        { kind: 'table', caption: 'A first typed language for grades 6 to 8 (ours)', head: ['If your student wants to', 'Start with', 'Why'], rows: [
          ['Learn programming properly, any direction', 'Python', 'Short, readable code; the same ideas carry to every other language'],
          ['Make websites and things friends can open', 'JavaScript with HTML and CSS', 'Runs in any browser; instant results on screen'],
          ['Make games in a world they already play', 'Luau in Roblox Studio', 'Event-driven code with a built-in audience'],
          ['Take AP Computer Science A later', 'Python first, then Java in high school', 'Java is the AP CSA language; Python makes the first year gentler'],
          ['Enter coding competitions', 'Python, then C++ if they get serious', 'Python to learn problem solving, C++ for speed in contests']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Typing matters more than the language',
          left: [
            'The real jump in middle school is from dragging blocks to typing exact syntax. A missing bracket or a wrong indent stops a program, and students need a few weeks of patient practice before that stops being frustrating.',
            'Whichever language a student picks, the first month should be full of small programs that work, so the frustration never wins.'
          ],
          rightH3: 'What about AI tools?',
          right: [
            'Many AI services set a minimum age in their terms, and those rules change. We never ask a student to create an account on a service that does not allow their age, and in class AI is something students study and test, not a shortcut.',
            'Code.org lists an AI Chat Lab among the tools in its AI Discoveries course. If your student uses one at school, ask them to show you how they check its answers.'
          ] }
      ]
    },
    {
      id: 'semester', tint: 'deep', eyebrow: 'A first semester',
      h2: 'What eighteen weeks of weekly classes can look like',
      lede: 'Families like to know where the time goes. This is the outline we use for a middle schooler starting typed Python, written as six blocks of three weeks. Fast students finish early and move to a bigger project; nobody is pushed past a block they have not understood.',
      body: [
        { kind: 'table', caption: 'A first semester of Python for grades 6 to 8 (ours)', head: ['Weeks', 'Block', 'What the student can do at the end'], rows: [
          ['1 to 3', 'Printing, input and variables', 'Write a short quiz that asks questions and keeps a score'],
          ['4 to 6', 'Conditions and loops', 'Build a number-guessing game with hints and a limited number of tries'],
          ['7 to 9', 'Functions and parameters', 'Write the Caesar cipher above and reuse it to decode'],
          ['10 to 12', 'Lists and strings', 'Store a list of words, search it, and count letters'],
          ['13 to 15', 'A project for a real user', 'Interview a family member, then build a small tool they asked for'],
          ['16 to 18', 'Testing and presenting', 'Fix bugs found by the user, then explain the code in five minutes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why a real user in week 13',
          left: [
            'The grade 8 framework statement on program development is about solutions for other people. Building for a grandparent, a younger sibling or a club teaches more about clear design than any exercise, because real users press the wrong buttons.',
            'The projects students remember are often tiny: a chore tracker, a spelling quiz for a little brother, a scoreboard for a family board game.'
          ],
          rightH3: 'What the presentation is for',
          right: [
            'Explaining code out loud is how we check understanding. A student who can say why a function takes a parameter, in their own words, owns that idea.',
            'Parents are welcome at the presentation lesson. It is usually the moment a family sees how much has changed since week one.'
          ] }
      ]
    },
    {
      id: 'beyond', tint: 'tint', eyebrow: 'Beyond class',
      h2: 'Contests and projects open to middle schoolers',
      lede: 'Middle school is when students can start entering real competitions, and a project with a deadline is a strong reason to keep coding.',
      body: [
        { kind: 'two',
          leftH3: 'The Congressional App Challenge',
          left: [
            'Under the 2026 rules, students must be enrolled in middle school or high school on October 26th, 2026 to enter. Students compete in a congressional district that is hosting the challenge, where they live or where they go to school, and entries are judged by that district&rsquo;s Member of Congress and their office, so the competition is local even though it runs across the country.',
            'Our <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a> covers the rules, the demo video and a ten-week build plan.'
          ],
          rightH3: 'Other ways to stretch',
          right: [
            'Students who like puzzles can start on contest-style problems, and our <a class="ag-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a> page explains how that path works. Those who like making things can enter school science fairs with a coding project.',
            'Our page on <a class="ag-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a> lists more options, most of which open up in the last year of middle school.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade 6 to grade 8',
    h2: 'Four stages through middle school coding',
    lede: 'Where most students are when they join, and where they can be by the end of eighth grade.',
    table: { caption: 'Stages of a middle school coder (ours)', head: ['Stage', 'Signs of it'], rows: [
      ['1. Block expert', 'Builds big Scratch projects, finds typing slow and fiddly'],
      ['2. Typist', 'Writes short Python programs with loops and conditions, fixes syntax errors alone'],
      ['3. Organiser', 'Splits programs into functions with parameters, names things clearly'],
      ['4. Builder for others', 'Makes a tool or game for a real user, tests it with them, improves it']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is the hardest month. Encourage short, frequent practice rather than long weekend sessions.',
      'Ask who the project is for. A student who can answer that is thinking at stage 4.'
    ] },
    right: { h3: 'For students', ps: [
      'Every error message is a clue. Read the line number first, then the last line of the message.',
      'Write the function name before the function. If you cannot name it, you have not decided what it does yet.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for grades 6 to 8',
    lede: 'Live classes with a steady teacher; the ages listed belong to each course.',
    bands: [
      { num: 'I', h3: 'Sixth and seventh grade', sub: 'Up to age 12', courses: [
        { code: 'MS / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch, done properly', blurb: 'For a sixth grader who has never coded.' },
        { code: 'MS / KID / 02', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep for kids', blurb: 'Ages 8 to 12. Build fast, pitch clearly.' },
        { code: 'MS / KID / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'The algebra that code leans on.' }
      ] },
      { num: 'II', h3: 'Teen tracks', sub: 'From 13', courses: [
        { code: 'MS / TEN / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games.' },
        { code: 'MS / TEN / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, step by step.' },
        { code: 'MS / TEN / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Front-end development', blurb: 'HTML, CSS and JavaScript done well.' }
      ] },
      { num: 'III', h3: 'Thinking and security', sub: 'From 13', courses: [
        { code: 'MS / THK / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Algorithms explained from zero.' },
        { code: 'MS / THK / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'For students who already write programs.' },
        { code: 'MS / THK / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive and ethical, no coding needed.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes around a busier middle school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches across US time zones.' },
      { time: 'Weekends', l: 'Mornings that avoid sports and practice.' },
      { time: '1-on-1', l: 'Booked at your convenience.' }
    ],
    cells: [
      { h3: 'A steady teacher', p: 'The same teacher follows each student&rsquo;s progress.' },
      { h3: 'Placed by level', p: 'Kids or teen course, decided in the first lesson.' },
      { h3: 'Real typing', p: 'Students write every line themselves.' },
      { h3: 'Code reviewed', p: 'The teacher reads the code, not just the result.' },
      { h3: 'Projects for users', p: 'Built for a friend, a club or the family.' },
      { h3: 'Two formats', p: 'Join a batch of fifteen to twenty, or book one to one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'A few projects by learners who began with the same first programs. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied word for word from parents&rsquo; Google reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Fees are monthly and shown in US dollars. Nothing locks you in for the school year: if a month finishes and you want to stop, you stop.',
    free: ['A free first lesson', 'Placement in kids or teen course', 'No card details'],
    group: ['Fifteen to twenty learners', 'Students placed by level', 'One regular teacher', 'Monthly'],
    one: ['A teacher to yourself', 'Times that fit your week', 'Your own projects']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Coding for middle schoolers: common questions',
    items: [
      { q: 'What coding should a middle school student learn?', a: 'By the end of grade 8 the K-12 Computer Science Framework expects readable programs that combine loops, events and conditionals, meaningful variable names, and procedures with parameters. In practice that means typed code, usually Python or JavaScript, and projects built for other people.' },
      { q: 'Is middle school too late to start coding?', a: 'No. Many students start in sixth or seventh grade and catch up quickly, because they read and type well. A beginner in middle school can go from first program to functions with parameters within a few months of weekly classes.' },
      { q: 'Should a middle schooler learn Python or JavaScript?', a: 'We start most students on Python: the code is short, it reads clearly, and what they learn transfers to any other language. JavaScript suits students who mainly want to build websites. Many learn Python first and add JavaScript in eighth grade.' },
      { q: 'What grades are middle school in the US?', a: 'Usually grades 6 to 8. NCES defines a middle school as one offering more of grades 5 through 8 than other grades, so some districts start middle school at grade 5 or use a grade 7 and 8 junior high.' },
      { q: 'What is AI Discoveries?', a: 'A Code.org middle school course for grades 6 to 8 that replaces CS Discoveries for the 2026 to 2027 school year. Its first unit is Thinking Critically About AI, and it can run as a full year, a semester or a quarter.' },
      { q: 'Can middle school students enter the Congressional App Challenge?', a: 'Yes. The 2026 rules say students must be enrolled in middle school or high school on October 26th, 2026. Our Congressional App Challenge guide covers the rules and a build plan.' },
      { q: 'Does my child join a kids course or a teen course?', a: 'Our kids courses run to age 12 and teen courses start at 13. Most sixth graders join a kids course and most eighth graders a teen course; we decide in the free first lesson by level, not birthday alone.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How big are the classes?', a: 'Batches are fifteen to twenty students with one teacher who stays with them. If you want a teacher just for your child, 1-on-1 lessons are available too.' },
      { q: 'How much do middle school coding classes cost?', a: 'You pay nothing for the first lesson. After it a fee is charged each month, and the amount appears in US dollars in the fees section above.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US middle schoolers and their parents.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Where all our US guides start.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'Rules and a ten-week plan.' },
      { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds', p: 'The sixth and seventh grade year.' },
      { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds', p: 'Moving into teen courses.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Clubs, contests and projects.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One class, described in full.' },
      { href: '/coding-classes-for-high-school-students', label: 'Coding classes for high school students', p: 'Coding for high schoolers: CS access data, AP CSP and AP CSA in 2027, and a four-year plan.' },
      { href: '/coding-milestones-by-age', label: 'Coding milestones by age', p: 'Coding milestones by age, with a checklist for 8 to 10 year olds.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for elementary students', p: 'AI literacy for K-5: what it means, what standards expect, and two activities.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Share your child&rsquo;s grade and any coding they have done, even a few weeks of it at school. The first lesson doubles as placement, so they start at the right level.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how our teachers run a class</a>, or browse <a class="ag-inline-link" href="/courses">the course catalogue</a> with full syllabuses.',
    note: 'Our teachers are based in India and teach every class live on video, so families anywhere in the US join the same way. WhatsApp gets the fastest answer.',
    formNote: 'Free first lesson. No card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Middle school coding', links: [
        { href: '/coding-for-11-year-olds', label: 'Coding for 11 year olds' },
        { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds' },
        { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds' },
        { href: '/coding-for-14-year-olds', label: 'Coding for 14 year olds' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Write it once, call it with new inputs'
  },

  personalityCss: `
.ag-root.ag-ms .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-ms .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-ms .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ms .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-ms .ag-grid-3 h3 { letter-spacing: -0.004em; }
.ag-root.ag-ms .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'K-12 Computer Science Framework (k12cs.org, CC BY-NC-SA 4.0), grade 8 statements read raw 17 October 2026: Algorithms, Variables, Control, Modularity (incl. parameters), Program Development, Troubleshooting, Cybersecurity, Safety. NCES glossary definition of a middle school. Code.org catalogue pages for CS Discoveries (grades 6-10, 7 units) and AI Discoveries (grades 6-8; 36, 18 or 9 weeks; Unit 1 Thinking Critically About AI; 8 units). 2026 Congressional App Challenge rules on middle school eligibility.',
    localProject: 'A Caesar cipher in Python (ours, run with Python 3.13) built as one procedure with two parameters, plus four predict-the-output calls checked by running the function. Lesson family: procedures and parameters.',
    requiredMentions: ['A school that offers more of grades 5 through 8 than higher or lower grades but does not offer both kindergarten through grade 4 and grades 9 through 12', 'Middle school varies by region but typically encompasses 6th-8th grades', 'Algorithms that are readable are easier to follow, test, and debug', 'A meaningful identifier is assigned to each variable', 'Defining parameters for procedures can generalize behavior and increase reusability', 'Thinking Critically About AI', 'Full Year (36 weeks)', 'Quarter (9 weeks)', 'Phhw dw wkh oleudub', 'shift_message("Zoo!", 1)', 'October 26th, 2026'],
    sources: [
      { claim: 'Grade 8 concept statements quoted in the framework table.', url: 'https://k12cs.org/framework-statements-by-grade-band/' },
      { claim: 'NCES definition of a middle school.', url: 'https://nces.ed.gov/programs/coe/glossary' },
      { claim: 'CS Discoveries grades, units, tools and the AI Discoveries replacement notice.', url: 'https://code.org/en-US/curriculum/computer-science-discoveries' },
      { claim: 'AI Discoveries grades, unit order, lengths and tools.', url: 'https://code.org/en-US/curriculum/artificial-intelligence-discoveries' },
      { claim: 'Congressional App Challenge middle school eligibility and the October 26th, 2026 enrolment date.', url: 'https://www.congressionalappchallenge.us/students/rules/' }
    ],
    rejectedClaims: [
      'CSTA middle school standard codes: csteachers.org returned a Cloudflare 403, not circumvented, so none are printed.',
      'Any national figure for middle schools offering computer science: the Code.org data sheet covers high schools only, so no middle school access number is printed.',
      'Minimum ages for named AI chatbots: not confirmed raw at each provider this session, so no tool and no age is named; the page states the general rule only.',
      'The teacher quote on the CS Discoveries page: it names an individual, so it is not used.',
      'Any contest result or admission benefit from our classes: no promises are made.',
      'Any affiliation with NCES, k12cs.org, Code.org (CodeAI) or the Congressional App Challenge: none, and the page says so.'
    ]
  }
};
