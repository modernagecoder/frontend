'use strict';
// Best coding class in the world (ag- door, worldwide; Ireland cluster, Phase 1).
// A criteria page, not a claim: eight tests any coding class should pass, five
// grounded in studies read in full and three labelled as practice, each with
// our own answer and a section on where we fall short. Every figure was read in
// the paper itself (open copies where the publisher returned 403; see the
// source notes): Reich and Ruiperez-Valiente 2019 (Science 363(6423), Table S3:
// completion among registered-and-viewed learners 3.13 percent in 2017-18,
// verified track 44 to 56 percent, "52% never enter the courseware"); Lister et
// al. 2004 ("a fragile grasp of skills that are a pre-requisite for
// problem-solving"); Lopez et al. 2008 (tracing and explaining each correlate
// with writing, r = 0.56, n = 38); Sentance, Waite and Kallia 2019 (PRIMM, 13
// schools, 493 vs 180, r = .13); Prather et al. 2024 ("illusion of
// competence", 21 sessions, learning outcomes not measured); Prather et al.
// 2023 (shepherding, drifting); Kazemitabaar et al. 2023 (69 novices aged 10 to
// 17, 1.15x completion, 1.8x scores, no loss on manual modification); Bloom
// 1984 (about two standard deviations, two dissertations); VanLehn 2011
// (d = 0.79); Nickow, Oreopoulos and Quan 2020 (0.37 SD, NBER working paper).
// Deliberately NOT claimed: that copy-pasting AI code measurably harms learning
// (no source shows it).

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'WORLDWIDE', blurb: 'Eight tests any coding class should pass, from research on how people learn to program.' },
  slug: 'best-coding-class-in-the-world',
  code: 'bcw',
  accent: '#70530B',
  accentRationale: 'Worldwide criteria door: a dark bronze from the solver, the colour of an old assay mark, separated from both Irish greens and from every other Ireland preview page',
  pageType: 'market',
  market: { name: 'International', iso: '', dial: '', lang: 'en', locale: 'en_GB', geoRegion: '', brandTag: 'Worldwide', phonePlaceholder: '+353 87 123 4567', minDigits: 7 },
  routeLabel: 'Best coding class in the world: eight tests',
  title: 'Best Coding Class in the World? Eight Tests It Must Pass',
  description: 'What makes the best coding class in the world? Eight tests from research on how people learn to code, answered openly by a live online school. First class free.',
  ogDescription: 'Nobody can prove a coding class is the best in the world. Here are eight tests any class should pass, drawn from research on how people learn to program, with our own answers.',
  twitterDescription: 'Eight tests from learning research that any coding class should pass, with our answers. Live online, first class free.',
  pageName: 'Best Coding Class in the World: Eight Tests',
  webPageDescription: 'A criteria page: eight tests, drawn from published research on how people learn to program, that any coding class claiming to be the best should pass, with Modern Age Coders\' own answers and limits.',
  courseDescription: 'Live online coding and AI classes for ages 6 to 67, taught by a teacher who reads each learner\'s code, in groups of five to ten placed by ability or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }],
  crumbLabel: 'Best coding class in the world',
  navLinks: [
    { href: '#tests', label: 'The eight tests' },
    { href: '#research', label: 'The research' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Worldwide &middot; Learning research &middot; Live online',
  h1: 'Best coding class in the world',
  lede: 'No one can prove that a coding class is the best in the world, and a page that simply says so should make you suspicious, this one included. What can be checked is whether a class does the things published research links to people actually learning to program: finishing what they start, reading code before writing it, getting feedback from a person who has read their work, and using AI tools without handing over their understanding. This page sets out eight such tests. Five rest on studies you can open and read yourself, cited with their limits; three are plain practice, labelled as such. Each test is followed by our own answer, including the places where we fall short. Use the list on us, and use it on anyone else you are considering. A class that passes all eight, anywhere in the world, is a good class, whatever its advertising says.',
  secondaryCta: { href: '#tests', label: 'See the eight tests' },
  wa: 'Hello Modern Age Coders, I read the eight tests page and would like a free first class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students in 25+ countries &middot; the first class is the test',
  spec: [
    ['Taught', 'Live, by a teacher'],
    ['Ages', '6 to 67'],
    ['Groups', 'Five to ten, placed by level'],
    ['Or', 'One to one'],
    ['Method', 'Read, predict, modify, make'],
    ['AI tools', 'Used openly, checked always'],
    ['Hours', 'Fixed in your own time zone'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The best coding class in the world cannot be named from a ranking, because nobody has tested every class. It can be recognised by what it does. Research on learners shows that most people who start a free self-paced course never finish it, that novices often cannot yet read the code they are asked to write, that feedback from a person who has looked at your work helps, and that AI tools speed up learners who already understand while leaving strugglers with an illusion of competence. Modern Age Coders teaches live online to learners aged 6 to 67 in 25+ countries, in groups of five to ten placed by ability or one to one, with a teacher who reads every learner\'s code. The first class costs nothing, so the tests can be run on us before anyone pays; continuing costs USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that put the tests into practice',
    lede: 'One for teenagers learning a language properly, one for the problem solving underneath every language, and one for adults starting from zero. Each card opens its full syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'TEST / 01', title: 'Python for Teens', note: 'Two years of Python in which every new idea is read and predicted before it is written, so the language is understood rather than copied.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'TEST / 02', title: 'Problem Solving for Teens', note: 'The reasoning under all programming: breaking a problem down, tracing what a loop will do and checking an answer before trusting it.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'TEST / 03', title: 'Python Masterclass', note: 'Python for adults and university students from the first line, with a teacher reading the code each week and AI tools added once the basics hold.' }
    ]
  },

  sections: [
    {
      id: 'tests', tint: 'tint', eyebrow: 'The eight tests',
      h2: 'Eight tests the best coding class in the world should pass',
      lede: 'The first five come from published studies, set out with their limits in the next section. The last three are practice: sensible and widely shared, but not something a study has measured. The right-hand column is our own answer.',
      body: [
        { kind: 'table', caption: 'Eight tests for any coding class, and how Modern Age Coders answers each', head: ['Test', 'Why it matters', 'Our answer'], rows: [
          ['1. Do learners finish?', 'In the largest published look at open online courses, among learners who registered for an MITx or HarvardX course on edX and opened it, 3.13 percent completed in 2017-18.', 'A live teacher at a fixed weekly hour, and a small group that notices when someone is missing.'],
          ['2. Do learners read code before writing it?', 'A multi-national study found many novices at the end of a first course could not reliably predict what short code does.', 'Every new idea starts with a prediction: what will this code print, and why?'],
          ['3. Does a person read the learner\'s work?', 'Reviews of tutoring find real gains from a tutor who responds to the learner, though smaller than the famous early claims.', 'The teacher reads and discusses each learner\'s code every week, in groups of five to ten.'],
          ['4. Does the method have evidence?', 'Classes taught with PRIMM (predict, run, investigate, modify, make) scored higher on a post-test than comparison classes, by a small margin.', 'Lessons keep the same order: read, predict, run, change, then make something new.'],
          ['5. Are AI tools used without handing over the understanding?', 'Learners who already understand use AI to go faster; learners who struggle can finish with an illusion of competence.', 'AI tools join the lesson once the learner can predict what the code should do.'],
          ['6. Is the work real and public?', 'Practice, not research: a project someone else can open is harder to fake than a certificate.', 'Projects go into the learner\'s own GitHub repository, and some are live on the web.'],
          ['7. Is placement by ability?', 'Practice: a class pitched at the wrong level loses the learner either way.', 'The free first class places each learner by what they can do, not by age or school year.'],
          ['8. Is the evidence about the class honest?', 'Practice: a rating is only as good as its source and its sample.', 'Rated 4.9 across 547 Google reviews, a public source. We do not write or pay for reviews.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A test is only useful if it can fail. Each row above is written so that a class can clearly not pass it. A recorded course with no teacher fails the third. A class that opens every topic by writing code from a template fails the second. A school that shows only hand-picked testimonials fails the eighth.',
            'The first test is the hardest one for online learning, and the evidence shows why. Completion in open online courses stayed low for six years running, and in the same data the authors report that of those who register for a course, "52% never enter the courseware".'
          ],
          right: [
            'Two cautions keep the table honest. The completion figure describes free open courses from two universities, not every online class; learners who paid for a verified certificate completed at far higher rates, 44 to 56 percent. And none of the studies tested Modern Age Coders. They describe how people learn; our classes are an attempt to follow them.',
            'That is why the right-hand column matters less than the first class. Every claim in it can be checked in an hour, for free, with a real teacher and a real problem.'
          ] }
      ]
    },
    {
      id: 'research', tint: 'deep', eyebrow: 'The research',
      h2: 'What the studies found, and what they did not',
      lede: 'Every figure on this page was read in the paper itself. Where a finding is often exaggerated, its limit is stated next to it.',
      body: [
        { kind: 'table', caption: 'The evidence behind the first five tests', head: ['Study', 'What it found', 'Its limit'], rows: [
          ['Reich and Ruiperez-Valiente, Science, 2019', 'Across 565 MITx and HarvardX course runs on edX, completion among learners who registered and opened a course fell to 3.13 percent in 2017-18. Learners on the paid verified track completed at 44 to 56 percent.', 'Free open courses from two universities, and the base is learners who opened a course, not everyone who signed up.'],
          ['Lister and colleagues, ITiCSE working group, 2004', 'Many novices were weak at predicting the output of short code and at choosing the line that completes it, which the authors read as "a fragile grasp of skills that are a pre-requisite for problem-solving".', 'The authors note the results were less stark than an earlier study. It does not show that most learners cannot read code.'],
          ['Lopez, Whalley, Robbins and Lister, ICER, 2008', 'Scores on tracing code and on explaining code in plain English each correlated with scores on writing code (r = 0.56 for both).', 'Thirty-eight students at one institution, and a correlation, not proof that reading causes writing skill.'],
          ['Sentance, Waite and Kallia, Computer Science Education, 2019', 'Across 13 schools, 493 students taught with PRIMM scored significantly higher on a post-test than 180 students in comparison classes.', 'A small effect (r = .13), and comparison groups that were not matched.'],
          ['Prather and colleagues, ICER, 2024', 'Students already doing well used generative AI to go faster. Struggling students kept their difficulties, sometimes gained new ones, and in the authors\' words "finished with an illusion of competence".', 'Twenty-one lab sessions, observed and interviewed. The authors did not measure learning outcomes.'],
          ['Bloom, Educational Researcher, 1984', 'The average tutored student scored about two standard deviations above the average student in a conventional class.', 'Two dissertation studies over three weeks, with mastery tests built in. A 2011 review by VanLehn put human tutoring at d = 0.79.'],
          ['Nickow, Oreopoulos and Quan, NBER, 2020', 'Pooling 96 randomised experiments, tutoring raised learning from pre-school to the end of school by 0.37 SD, and by more when teachers or trained paraprofessionals tutored.', 'A working paper rather than the peer-reviewed version, school-age learners only, and large studies averaged about a quarter of a standard deviation.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read together, the studies point one way without claiming too much. People rarely finish learning alone. Reading and tracing code sit close to writing it. A teaching order that begins with prediction does a little better than one that begins with a blank file. A person who responds to the learner helps, by less than the legend of two standard deviations, but by a real amount.'
          ],
          right: [
            'What the studies do not show matters as much. None of them proves that one class is the best in the world, and none measured our lessons. The evidence on AI is also more mixed than the headlines: it helps some learners and misleads others, which is an argument about how AI is used, not for banning it.'
          ] },
        { kind: 'source', html: 'Sources, as read: <a class="ag-inline-link" href="https://hdl.handle.net/1721.1/136215" rel="noopener" target="_blank">Reich and Ruiperez-Valiente (2019), The MOOC pivot, Science 363(6423)</a>, post-print and supplementary Table S3; <a class="ag-inline-link" href="https://opus.lib.uts.edu.au/bitstream/10453/4126/3/2004000904.pdf" rel="noopener" target="_blank">Lister et al. (2004), A multi-national study of reading and tracing skills in novice programmers</a>; <a class="ag-inline-link" href="https://opus.lib.uts.edu.au/bitstream/10453/10806/1/2008001530.pdf" rel="noopener" target="_blank">Lopez et al. (2008), Relationships between reading, tracing and writing skills</a>; <a class="ag-inline-link" href="https://suesentance.net/wp-content/uploads/2020/02/teaching_computer_programming_with_primm__a_sociocultural_perspective_author_copy.pdf" rel="noopener" target="_blank">Sentance, Waite and Kallia (2019), Teaching computer programming with PRIMM</a>, author copy; <a class="ag-inline-link" href="https://arxiv.org/abs/2405.17739" rel="noopener" target="_blank">Prather et al. (2024), The Widening Gap</a>; <a class="ag-inline-link" href="https://doi.org/10.3102/0013189X013006004" rel="noopener" target="_blank">Bloom (1984), The 2 Sigma Problem</a>; <a class="ag-inline-link" href="https://doi.org/10.1080/00461520.2011.611369" rel="noopener" target="_blank">VanLehn (2011)</a>; <a class="ag-inline-link" href="https://www.nber.org/papers/w27476" rel="noopener" target="_blank">Nickow, Oreopoulos and Quan (2020), NBER Working Paper 27476</a>. Read 16 September 2026.' }
      ]
    },
    {
      id: 'ai', tint: 'tint', eyebrow: 'AI in the class',
      h2: 'How the best coding class in the world should use AI tools',
      lede: 'Two studies of novices with AI code generators, read side by side, suggest the answer is neither a ban nor free rein. It is order.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Where AI helped', p: 'In a controlled study of 69 novices aged 10 to 17, learners who could use Codex completed 1.15 times as many code-writing tasks and scored 1.8 times higher, without doing worse on the manual tasks that followed each one. Their retention a week later was slightly better, though not significantly.' },
          { h3: 'Where AI misled', p: 'Watching first-year students work with Copilot, researchers saw two patterns: shepherding, coaxing the tool into writing the code, and drifting, following one incorrect suggestion to the next until lost. The students themselves worried about code they could not understand.' },
          { h3: 'What that means for a class', p: 'In the study where AI helped, every AI-assisted task was followed by a task done by hand, so the tool never replaced the learner\'s own work. That is the order our lessons keep: predict, then generate, then change the result by hand and explain it.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The same pattern runs through the widening-gap study. Learners who already understood the code used AI to reach what they meant to write sooner; learners who did not were carried somewhere they could not explain. The difference was not the tool. It was whether the learner could read and predict code before the tool arrived.'
          ],
          right: [
            'So the test for a class is not whether it allows AI. It is whether a learner leaves each lesson able to explain every line they hand in, including the lines an assistant suggested. Our page on <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-ireland">understanding the code instead of copy-pasting</a> takes the same question into Irish classrooms.'
          ] },
        { kind: 'source', html: '<a class="ag-inline-link" href="https://arxiv.org/abs/2302.07427" rel="noopener" target="_blank">Kazemitabaar et al. (2023), Studying the effect of AI code generators on supporting novice learners in introductory programming</a>, CHI; <a class="ag-inline-link" href="https://arxiv.org/abs/2304.02491" rel="noopener" target="_blank">Prather et al. (2023), "It\'s Weird That it Knows What I Want"</a>, ACM Transactions on Computer-Human Interaction. Neither study shows that copying AI code measurably lowers learning; the claim on this page is about order, not harm.' }
      ]
    },
    {
      id: 'answer', tint: '', eyebrow: 'Where we fall short',
      h2: 'The tests we pass, and three things we do not claim',
      lede: 'A criteria page that finds its own author perfect is an advert. These are our limits, stated plainly.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No school credit', p: 'We teach skills, not qualifications. Nothing here counts towards a school exam or a university degree, and no class of ours replaces a school\'s own subject.' },
          { h3: 'Teachers in one time zone', p: 'Our teachers work from India. Families in Europe usually learn in the late afternoon or evening, families in the Americas in the morning or at weekends, and some hours are simply not available.' },
          { h3: 'A group is not a tutor', p: 'Groups of five to ten get a teacher who reads each learner\'s code, but not one who waits on every line. Learners who need that choose one-to-one lessons at USD 150 a month.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'What we do claim is narrower and can be checked: a live teacher in every class since 2020, more than 10,000 students taught in 25+ countries, learners from age 6 to 67, student projects with public addresses, and a rating of 4.9 from 547 Google reviews that anyone can read.'
          ],
          right: [
            'What we ask is simple: take the eight tests into the free first class. Ask the teacher to show how a new idea is introduced, how code is reviewed and when AI tools come in. If the answers do not match this page, you have spent an hour and learned something useful about choosing a class.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'Five rungs, from reading code to judging it',
    lede: 'The order follows the evidence above: read and predict first, write later, and bring AI in once the learner can check what it gives them.',
    table: { caption: 'How a learner climbs, at any age', head: ['Rung', 'The learner can'], rows: [
      ['1. Read', 'Say what a short program does before running it'],
      ['2. Predict', 'Trace a loop or a function by hand and get the output right'],
      ['3. Modify', 'Change working code to do something new, and explain each change'],
      ['4. Make', 'Write a program from a blank file to solve a stated problem'],
      ['5. Judge', 'Review code from a classmate or an AI tool and find what is wrong with it']
    ] },
    left: { h3: 'Why prediction comes first', ps: [
      'A learner who can predict what code will do can tell when it does something else. That one habit turns every error message into a question with an answer, and every AI suggestion into something that can be checked.',
      'The reasoning moves behind it are set out on <a class="ag-inline-link" href="/how-to-think-like-a-programmer">how to think like a programmer</a>.'
    ] },
    right: { h3: 'Where the ages differ', ps: [
      'Children aged 6 to 10 climb the same rungs with blocks before typed code, and spend longer on reading. Teenagers usually reach the fourth rung within a school year. Adults move at the pace their week allows.',
      'Nobody skips a rung, but the free first class often shows that a learner is already higher up than they thought.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses, grouped by where a learner starts',
    lede: 'Every course runs on the same five rungs. A card opens its syllabus, and the free first class decides which one comes first.',
    bands: [
      { num: 'I', h3: 'First code, ages 6 to 12', sub: 'Reading and predicting with blocks, then typed Python', courses: [
        { code: 'WORLD / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Block programs a child can read aloud and predict before pressing go.' },
        { code: 'WORLD / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python for nine to twelve year olds, with a first program that learns from examples.' },
        { code: 'WORLD / KIDS / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Mathematics made concrete, one small program at a time.' }
      ] },
      { num: 'II', h3: 'Serious code, ages 13 to 18', sub: 'The full language, problem solving and AI built properly', courses: [
        { code: 'WORLD / TEENS / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The whole language, read before it is written.' },
        { code: 'WORLD / TEENS / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Tracing, breaking down and checking: the skills under every language.' },
        { code: 'WORLD / TEENS / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Models trained and tested by the learner, not only prompted.' }
      ] },
      { num: 'III', h3: 'Adults and university students', sub: 'From a first line to the models behind AI tools', courses: [
        { code: 'WORLD / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Python from zero, with a teacher reviewing the code each week.' },
        { code: 'WORLD / ADULT / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The reasoning that technical interviews and serious projects test.' },
        { code: 'WORLD / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI Course', blurb: 'How language models work, and how to build and check applications on them.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'One teacher, a fixed hour, your own time zone',
    lede: 'Every class is live, and our teachers work from India. The weekly hour is agreed with each family in the free first class, in their own local time, so a learner in Dublin, Toronto or Dubai has the same kind of teacher at an hour that suits them.',
    slots: [
      { time: 'Your afternoon', l: 'After school in Europe, Africa and the Gulf.' },
      { time: 'Your evening', l: 'For adults and older teenagers after work or study.' },
      { time: 'Your weekend', l: 'Saturday or Sunday, often the easiest choice from the Americas.' }
    ],
    cells: [
      { h3: 'The first class is the test', p: 'A real problem, a real teacher and a straight answer about level. Nothing to pay and no card to give.' },
      { h3: 'Groups of five to ten', p: 'Learners at the same stage, from several countries, reading and reviewing one another\'s code.' },
      { h3: 'One to one when it fits', p: 'For a learner far ahead of or behind a group, an exam year or a fixed deadline.' },
      { h3: 'Code read every week', p: 'The teacher reads what each learner wrote and asks them to explain it, which is where most of the learning happens.' },
      { h3: 'AI tools, in order', p: 'Assistants come in after prediction, and every suggested line is changed by hand and explained.' },
      { h3: 'Work that stays', p: 'Each project lives in the learner\'s own repository, which travels with them to school, university or work.' }
    ]
  },

  projectsH2: 'Projects students built and can explain line by line',
  projectsLede: 'Four live projects by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google exactly as written. We do not write, edit or pay for reviews.',

  fees: {
    h2: 'Fees, anywhere in the world',
    lede: 'Charged monthly in US dollars at one rate outside India, whatever the course or the learner\'s age. Nothing to pay on joining and no year-long commitment.',
    free: ['A real class on a real problem', 'An honest placement', 'No card needed'],
    group: ['Five to ten learners at one level', 'The same teacher every week', 'Code read and discussed weekly', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Paced to one goal', 'Best for exams and deadlines']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What people ask about finding the best coding class',
    items: [
      { q: 'Which is the best coding class in the world?', a: 'Nobody can name one honestly, because no study or ranking has tested every class. What can be judged is whether a class passes tests like the eight on this page: learners finish, read code before writing it, get feedback from a person, and use AI without losing their understanding.' },
      { q: 'Are free online courses a bad choice?', a: 'No. Many are excellent material. What the research shows is a finishing problem: among learners who opened free MITx and HarvardX courses, very few completed. A live class adds what most people need to keep going: a teacher, a fixed time and a group.' },
      { q: 'Does one-to-one tutoring really work better?', a: 'It helps, but by less than the famous two-standard-deviation claim. A 2011 review found human tutoring at d = 0.79, and a 2020 analysis of school-age tutoring found 0.37 SD. Small groups with real feedback are a sensible middle.' },
      { q: 'Should a beginner use ChatGPT or Copilot to learn to code?', a: 'Yes, in the right order. Studies of novices show AI helps learners who can already read and predict code, and misleads those who cannot. Learn to predict first, then use AI, then change its code by hand and explain it.' },
      { q: 'What is PRIMM?', a: 'A way of teaching programming: predict what code will do, run it, investigate it, modify it, then make something new. In a study across 13 schools, classes taught this way did slightly better on a post-test than comparison classes.' },
      { q: 'What age is best to start?', a: 'Children can start reading and predicting block programs from about age 6, and typed code usually from 9 or 10. Adults can start at any age; our learners run up to 67.' },
      { q: 'How can I test a class before paying?', a: 'Book a free first class and ask three things: how a new idea is introduced, how the learner\'s code will be reviewed, and when AI tools are allowed. Good answers are specific.' },
      { q: 'What does it cost?', a: 'The first class is free. After that it is USD 100 a month for a place in a group of five to ten, or USD 150 a month for one-to-one lessons, charged in US dollars outside India, with no joining fee and no annual contract.' },
      { q: 'When are classes held?', a: 'At a fixed weekly hour agreed in the free first class, in your own local time. Our teachers work from India, so mornings suit the Americas, and afternoons and evenings suit Europe, Africa and the Gulf.' },
      { q: 'What happens after I send the form?', a: 'Someone from our team calls or messages you, agrees a time in your time zone and books the free first class. You pay nothing unless you decide to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on learning to code well',
    lede: 'Pages that go deeper into each test.',
    items: [
      { href: '/how-to-think-like-a-programmer', label: 'How to think like a programmer', p: 'The reasoning moves behind the second and fourth tests.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'Reading before writing, taken step by step.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'What to do when the prediction and the output disagree.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'The fifth test, taken into Irish classrooms.' },
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'The same tests, answered for Irish families.' },
      { href: '/best-coding-classes-online', label: 'Best coding classes online', p: 'Our main page on live online classes for children.' }
    ]
  },

  start: {
    h2: 'Run the eight tests on a free first class',
    lede: 'Leave a number with its country code and we will get in touch at an hour that suits your time zone. In the first class a teacher gives the learner a real problem and shows, rather than tells, how the lessons work.',
    readFirst: 'Before booking, you can hold our <a class="ag-inline-link" href="/how-we-teach">approach to teaching</a> against the tests above, browse <a class="ag-inline-link" href="/courses">every course</a>, or follow the <a class="ag-inline-link" href="/coding-roadmap">roadmap from a first program to AI</a>.',
    note: 'WhatsApp is usually the fastest way to reach us from any country. Our number is Indian, and we say so: there is no local office anywhere outside India.',
    formNote: 'No card and no commitment. One conversation to book the class.'
  },

  footer: {
    cols: [
      { h4: 'The tests', links: [
        { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer' },
        { href: '/how-to-read-code', label: 'Read code' },
        { href: '/how-to-debug-code', label: 'Debug code' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/best-online-coding-classes-ireland', label: 'Best online classes, Ireland' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI classes in Ireland' },
        { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code' }
      ] }
    ],
    bottomRight: 'Eight tests, one free class'
  },

  personalityCss: `
.ag-root.ag-bcw .ag-hero-grid { gap: clamp(1.1rem, 3vw, 2.6rem); }
.ag-root.ag-bcw .ag-hero h1 { letter-spacing: -0.024em; }
.ag-root.ag-bcw .ag-capsule { border-left-width: 6px; }
.ag-root.ag-bcw .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-bcw .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bcw .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-bcw .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-bcw .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['3.13 percent', 'never enter the courseware', 'fragile grasp', 'r = 0.56', 'PRIMM', 'illusion of competence', 'two standard deviations', 'd = 0.79', '0.37 SD', 'shepherding', 'drifting', '1.8 times']
};
