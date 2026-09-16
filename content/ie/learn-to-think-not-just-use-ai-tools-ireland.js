'use strict';
// Learn to think, not just use AI tools, Ireland (ag- door, Ireland cluster,
// Phase 2). Facts read at primary sources on 16 September 2026: Framework for
// Junior Cycle 2015 (eight key skills; embedded in the learning outcomes of
// every subject and short course; Figure 2, read from the embedded image, gives
// the five elements of Managing information and thinking); JC Mathematics
// specification (the same five elements in a text layer, and the Table 2 row on
// thinking creatively and critically); TY Programme Statement (key competencies
// definition; Figure 2 naming the seven senior cycle competencies, including
// Thinking and solving problems / Smaointeoireacht agus fadhbanna a reiteach);
// LC Physics specification 2024 (the same figure, and the competency inside a
// subject); LC Mathematics syllabus for examination from 2015 (the older five
// senior cycle key skills); Oide's Senior Cycle Key Competencies (OFFICIAL
// SECONDARY, attributed to Oide, because ncca.ie blocks automated access);
// Department of Education and Youth with Oide, Guidance on Artificial
// Intelligence in Schools, Version 1, October 2025 (foreword by Secretary
// General Bernie McNally; the European Commission line attributed to the EC;
// digital literacy; the planning questions; UNESCO attributed to UNESCO).
// The "enhance and not replace" line is about teaching and learning, NOT about
// student thinking: never paraphrase it that way. The Junior Cycle Coding short
// course, the two reserved AI-guidance quotes and the PISA figures belong to
// other pages.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'THINKING', blurb: 'For families who want a class that builds thinking rather than tool use, set against the key skills and competencies Irish schools already teach.' },
  slug: 'learn-to-think-not-just-use-ai-tools-ireland',
  code: 'ltt',
  accent: '#006660',
  accentRationale: 'Thinking door, Ireland: a deep teal from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Learn to think, not just use AI tools, Ireland',
  title: 'Learn to Think, Not Just Use AI Tools | Ireland',
  description: 'Coding classes in Ireland that build thinking, not tool use: the Junior Cycle key skills, the senior cycle thinking competency, and AI used critically.',
  ogDescription: 'Irish schools already name thinking as a skill to be taught. A coding class should build it, not hand a child a tool that does the thinking for them.',
  twitterDescription: 'Coding in Ireland that teaches thinking first and tools second. Live classes, first one free.',
  pageName: 'Learn to Think, Not Just Use AI Tools, Ireland',
  webPageDescription: 'For families in Ireland choosing a coding class that builds thinking: the eight Junior Cycle key skills, the senior cycle competency of thinking and solving problems, what the Department of Education says about AI in schools, and how our lessons teach a learner to reason before reaching for a tool.',
  courseDescription: 'Live online coding classes for learners in Ireland, taught so that the student predicts, explains and reasons before any AI tool is opened, from block coding for children to Python, data and AI for adults.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Learn to think, Ireland',
  navLinks: [
    { href: '#skills', label: 'Junior Cycle key skills' },
    { href: '#competency', label: 'Senior cycle thinking' },
    { href: '#ai', label: 'AI in Irish schools' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Thinking first &middot; Every age',
  h1: 'Learn to think, not just use AI tools',
  lede: 'It has never been easier to produce work without understanding it. Ask a chat tool for a program and you get one, whether or not you could have written it, and whether or not it is right. That is a problem worth taking seriously, and Irish education already has the language for it. The Framework for Junior Cycle names eight key skills that every subject must build, and one of them is managing information and thinking, with elements that read like a description of a good programmer: being curious, gathering and evaluating information, thinking creatively and critically, reflecting on your own learning. The redeveloped senior cycle puts thinking and solving problems first among its seven key competencies. And the Department of Education\'s own guidance on artificial intelligence, published in October 2025, asks schools to build the judgement to use these tools critically. This page sets out what those documents actually say, and how a coding class can teach a learner to think rather than to prompt.',
  secondaryCta: { href: '#ai', label: 'What the AI guidance says' },
  wa: 'Hello Modern Age Coders, I would like a free first class for a learner in Ireland who wants to learn to think, not just use AI tools.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; the learner explains before the tool is opened',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Teaches', 'Reasoning before tools'],
    ['Habit', 'Predict, run, explain'],
    ['Tools', 'Introduced, then examined'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Hours', 'After school and evenings, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Irish curriculum documents already say what a good coding class should do. The Junior Cycle framework names eight key skills, including managing information and thinking, and requires them in every subject and short course. The redeveloped senior cycle names thinking and solving problems among seven key competencies. The Department\'s 2025 guidance on AI in schools asks for critical, safe and ethical use of these tools. Our lessons follow the same order: the learner predicts what code will do, runs it, explains the difference, and only then meets a tool that can write code for them. Classes are live, in groups of five to ten or one to one, for ages 6 to 67. The first is free; after that it is USD 100 a month in a group and USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that build reasoning',
    lede: 'One for the youngest learners, one for teenagers and one for anyone who wants to understand what AI is doing. Each card opens its syllabus.',
    items: [
      { course: 'maths-through-coding', code: 'THINK / 01', title: 'Maths Through Coding', note: 'Ideas from the maths class made visible in small programs, so a child can see why a method works instead of memorising it.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'THINK / 02', title: 'Problem Solving for Teens', note: 'Hard problems worked through out loud, where a wrong first idea is treated as the start of the work rather than a failure.' },
      { course: 'ai-literacy-for-kids-course', code: 'THINK / 03', title: 'AI Literacy for Kids', note: 'What these tools are, how they learn from examples, and the reasons a confident answer can still be wrong.' }
    ]
  },

  sections: [
    {
      id: 'skills', tint: 'tint', eyebrow: 'Junior Cycle key skills',
      h2: 'Thinking is already on the Irish curriculum',
      lede: 'The Framework for Junior Cycle sets out eight key skills for learning across the curriculum and beyond school. It says plainly where they live: "The key skills will be embedded in the learning outcomes of every junior cycle subject and short course."',
      body: [
        { kind: 'table', caption: 'Managing information and thinking, and its five elements, Framework for Junior Cycle (2015)', head: ['Element', 'What it asks of a student'], rows: [
          ['Being curious', 'Wanting to know why something behaves as it does'],
          ['Gathering, recording, organising and evaluating information and data', 'Finding evidence and judging whether it is any good'],
          ['Thinking creatively and critically', 'Trying new approaches and weighing them against each other'],
          ['Reflecting on and evaluating my learning', 'Noticing what worked and what did not'],
          ['Using digital technology to access, manage and share content', 'Using tools deliberately, as part of the thinking']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The other seven',
          left: [
            'The eight key skills are being literate, managing myself, staying well, managing information and thinking, being numerate, being creative, working with others, and communicating. A coding class touches most of them, but the fourth is the one it can build hardest.',
            'The Junior Cycle Mathematics specification describes what thinking creatively and critically looks like in practice: students "engage in rich tasks which require them to use their mathematical knowledge and skills in novel ways", then "reflect on their own approaches to such tasks and compare them to those of others".'
          ],
          rightH3: 'Why coding suits it',
          right: [
            'A program gives an answer to every idea a learner has, immediately and without mercy. That makes coding one of the few subjects where a child can test their own thinking dozens of times in an hour.',
            'The element about digital technology is worth noticing too. The curriculum does not ask students to avoid tools. It asks them to use tools to access, manage and share content, which is a different thing from letting a tool do the work.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://assets.gov.ie/static/documents/framework-for-junior-cycle-2015.pdf" rel="noopener" target="_blank">Framework for Junior Cycle 2015</a>, section 2.3 and Figure 2; <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/6a7f1ff5-9b9e-4d71-8e1f-6d4f932191db/JC_Mathematics_Specification.pdf" rel="noopener" target="_blank">Junior Cycle Mathematics specification</a>, Figure 1 and Table 2. In the Framework the key-skills figure is an image, so its wording was checked word for word against the same NCCA text in the Mathematics specification.' }
      ]
    },
    {
      id: 'competency', tint: 'deep', eyebrow: 'Senior cycle thinking',
      h2: 'Thinking and solving problems, in the redeveloped senior cycle',
      lede: 'Senior cycle now works to key competencies, described as "an umbrella term which refers to the knowledge, skills, values and dispositions students develop in an integrated way during senior cycle". There are seven, and the first of them is thinking and solving problems, or in Irish, Smaointeoireacht agus fadhbanna a réiteach.',
      body: [
        { kind: 'two',
          left: [
            'Oide, the Department\'s teacher professional learning service, sets out what the competency means: students use "logic and reason to make well-thought-out decisions, decide what to do next, and to craft questions, responses, and solutions", and they "figure out what works and what doesn\'t work about their thinking and the way they approach tasks".',
            'Among its attributes are "Challenging assumptions and errors; formulating valid arguments and counter arguments" and "Being transparent about sources, learning from and crediting the work and ideas of others". The second of those is exactly the honesty a student needs when an AI tool has helped.'
          ],
          right: [
            'The competency shows up inside subjects too. The 2024 Leaving Certificate Physics specification describes it as students using "critical thinking and problem-solving skills to demonstrate an understanding of scientific principles underlying the solutions to inquiry questions and problems posed in investigations".',
            'None of this is new thinking in Irish education. The Leaving Certificate Mathematics syllabus for examination from 2015 already named five senior cycle key skills, among them "critical and creative thinking".'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Decide what to do next', p: 'The hardest moment in programming is not writing a line, it is choosing which line to write when nothing is working. That decision is the competency in miniature, and it can be practised.' },
          { h3: 'Argue and counter-argue', p: 'In class a learner has to say why their approach should work before running it, and then say what the computer\'s answer proved about their reasoning.' },
          { h3: 'Credit others honestly', p: 'Where code came from a tutorial, a classmate or an AI tool, the learner writes that down. Being transparent about sources is part of the competency, not an afterthought.' }
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculumonline.ie/getmedia/5849acbf-0326-487a-beec-3db6b5878470/TY-Programme-Statement-ENG-INT.pdf" rel="noopener" target="_blank">Transition Year Programme Statement (2024)</a>, Figure 2; <a class="ag-inline-link" href="https://curriculumonline.ie/getmedia/aec702a9-4818-45f1-917e-497c3a9a2466/SC-PHYSICS-Spec-EN.pdf" rel="noopener" target="_blank">Leaving Certificate Physics specification (2024)</a>; <a class="ag-inline-link" href="https://oide.ie/wp-content/uploads/2023/09/SC-Key-Competencies-.pdf" rel="noopener" target="_blank">Oide, Senior Cycle Key Competencies</a>; <a class="ag-inline-link" href="https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/%20SCSEC25_Maths_syllabus_examination-2015_English.pdf" rel="noopener" target="_blank">Leaving Certificate Mathematics syllabus</a>. The competency description and attributes are quoted from Oide, which reproduces the NCCA text; the NCCA site blocks automated access, so we cite Oide.' }
      ]
    },
    {
      id: 'ai', tint: 'tint', eyebrow: 'AI in Irish schools',
      h2: 'What the Department of Education actually says about AI',
      lede: 'The Department of Education and Youth, with Oide Technology in Education, published Guidance on Artificial Intelligence in Schools in October 2025. It is not against these tools. It is about who stays in charge of the thinking.',
      body: [
        { kind: 'table', caption: 'Guidance on Artificial Intelligence in Schools, Version 1, October 2025', head: ['Theme', 'In the guidance\'s words', 'Whose words'] , rows: [
          ['Teaching', '"AI should enhance and not replace human led teaching and learning, with the teacher overseeing any output and acting as the final checkpoint given the potential for bias and misinformation."', 'Foreword by Secretary General Bernie McNally'],
          ['Judgement', '"AI tools can be used to complement and support human output and judgement, but not to replace it"', 'The European Commission, quoted by the Department'],
          ['Verification', '"Given that the accuracy of GenAI outputs cannot be guaranteed, all responses require careful verification."', 'The Department'],
          ['Digital literacy', 'Equipping people to "understand, evaluate and use AI technologies, along with all other digital technologies effectively, critically, safely and ethically"', 'The Department'],
          ['Lower-order tasks', 'These tools automate "specific lower-order cognitive tasks", with the potential to reshape our understanding of intelligence and learning', 'UNESCO, summarised by the Department']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read carefully, the foreword\'s line is about teaching, not about pupils\' own thinking. We quote it as it stands rather than stretching it, because the honest version is strong enough: the adult in the room stays the final checkpoint, and every output needs verification.',
            'The guidance also gives teachers questions to ask before using AI in a lesson, among them "How can I support students to analyse content generated by AI tools?" and "How would I ensure a critical stance when using AI?"'
          ],
          right: [
            'Those two questions are, more or less, our lesson plan. A learner meets AI tools once they can read code, and the first exercise is to find something the tool got wrong.',
            'The practical habits that follow from this are set out on <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-ireland">understand the code, do not copy-paste</a>, and the reasoning side on <a class="ag-inline-link" href="/problem-solving-skills-through-coding-ireland">problem solving skills through coding</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://assets.gov.ie/static/documents/dee23cad/Guidance_on_Artificial_Intelligence_in_Schools_2025.pdf" rel="noopener" target="_blank">Guidance on Artificial Intelligence in Schools</a>, Version 1, October 2025, read 16 September 2026. The European Commission and UNESCO lines are third-party views quoted inside the guidance, and are attributed here as such.' }
      ]
    },
    {
      id: 'lesson', tint: '', eyebrow: 'In the lesson',
      h2: 'How a class teaches thinking rather than tool use',
      lede: 'This is the part no document specifies, and it is where classes differ. Ours run on a simple order that puts the learner\'s reasoning first.',
      body: [
        { kind: 'table', caption: 'Where a tool helps, and where it takes the thinking away (our guidance)', head: ['Moment in the work', 'A tool helps', 'A tool takes over'], rows: [
          ['Understanding the problem', 'Explaining an unfamiliar word', 'Deciding what the program should do'],
          ['Planning', 'Suggesting a library that exists', 'Choosing the approach and its steps'],
          ['Writing the first version', 'Reminding you of syntax', 'Producing code the learner cannot read'],
          ['Fixing a bug', 'Explaining an error message', 'Replacing the code until something works'],
          ['Finishing', 'Tidying names and comments', 'Writing the explanation of what was learned']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Predict, then run', p: 'Before any program is run, the learner says what it will print. Getting that prediction wrong is the most useful thing that happens in a lesson.' },
          { h3: 'Explain it back', p: 'Code the learner cannot explain line by line does not count as finished, whoever or whatever wrote it.' },
          { h3: 'Keep the record', p: 'Where a tool contributed, the learner notes what it did. Honesty about sources is part of the thinking, not a punishment.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs of thinking, from six to sixty-seven',
    lede: 'The same five rungs apply whether a learner is in Second Class or retraining at forty. Only the problems change.',
    table: { caption: 'How thinking is built in our lessons', head: ['Rung', 'What the learner can do'], rows: [
      ['1. Predict', 'Say what a piece of code will do before running it'],
      ['2. Explain', 'Describe, line by line, why it did what it did'],
      ['3. Diagnose', 'Find the cause of a failure instead of changing things at random'],
      ['4. Design', 'Choose an approach and say why it beats the alternatives'],
      ['5. Judge', 'Assess code and AI output for correctness, cost and honesty']
    ] },
    left: { h3: 'Why prediction comes first', ps: [
      'A learner who predicts has to hold a model of the machine in their head. The prediction being wrong is what makes them update it, which is the whole of learning to think about code.',
      'The order of subjects that carries these rungs is mapped on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'When AI tools arrive', ps: [
      'Not at rung one. Once a learner can explain and diagnose, tools speed up work they already understand, and the class examines what the tool produced.',
      'For younger children, this starts as a conversation about how a machine learns from examples, and why it can be confidently wrong.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses built around reasoning',
    lede: 'By stage, from primary school to adults. The free first class places a learner on the right rung.',
    bands: [
      { num: 'I', h3: 'Primary school', sub: 'Curiosity and first reasoning', courses: [
        { code: 'THINK / PRIMARY / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Order, repetition and cause, learned by predicting.' },
        { code: 'THINK / PRIMARY / 02', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Why a method works, made visible on screen.' },
        { code: 'THINK / PRIMARY / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How machines learn, and how they get things wrong.' }
      ] },
      { num: 'II', h3: 'Secondary school', sub: 'Argument and diagnosis', courses: [
        { code: 'THINK / SECOND / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Fluency, so attention can go to the problem.' },
        { code: 'THINK / SECOND / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Reasoning out loud on problems without obvious answers.' },
        { code: 'THINK / SECOND / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'Tools examined rather than trusted, from thirteen.' }
      ] },
      { num: 'III', h3: 'College and adults', sub: 'Judgement', courses: [
        { code: 'THINK / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'The language taught for understanding, not recipes.' },
        { code: 'THINK / ADULT / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'Why one solution costs more than another.' },
        { code: 'THINK / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'What the tools do underneath, and where they fail.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Small live classes, with talking in them',
    lede: 'Thinking is taught by conversation, so lessons are live rather than recorded. Our teachers work from India, where the clock never changes, so they run four and a half hours ahead of Irish time in summer and five and a half after Ireland puts its clocks back. Learners pick a regular weekly hour in the free class.',
    slots: [
      { time: 'After school', l: 'Children and teenagers, Irish time.' },
      { time: 'Evening', l: 'Older students and working adults.' },
      { time: 'Weekend', l: 'Longer sessions for harder problems.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'The learner reasons through a real problem with a teacher, who then suggests the right level and course.' },
      { h3: 'Groups of five to ten', p: 'Small enough that every learner is asked to explain something each week.' },
      { h3: 'One to one', p: 'For learners who think better without an audience, or who move very fast.' },
      { h3: 'Questions before answers', p: 'Teachers are trained to ask what the learner expects, and to wait, rather than typing the fix.' },
      { h3: 'Tools in the open', p: 'When AI tools are used, the class looks at what they produced and what was wrong with it.' },
      { h3: 'A record of the work', p: 'Each learner keeps their own attempts, so progress in thinking is visible over months.' }
    ]
  },

  projectsH2: 'What our learners made while learning to think',
  projectsLede: 'Four projects built and published by our students. There are many more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from our families, reproduced as written. None were solicited with payment.',

  fees: {
    h2: 'What the classes cost',
    lede: 'One monthly price in US dollars for every country outside India, the same at every age and for every course on this page. No joining fee, and no term or year to commit to.',
    free: ['A real problem, reasoned through aloud', 'An honest view of the right starting rung', 'No card required'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Work discussed, not just marked', 'A certificate at the end of a course'],
    one: ['A teacher for one learner', 'The pace set by the learner', 'Good for very fast or very quiet learners']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What families in Ireland ask about thinking and AI tools',
    items: [
      { q: 'Do you ban AI tools in class?', a: 'No. Learners meet them once they can read and explain code, and then examine what the tools produce. The Department\'s guidance asks for a critical stance rather than avoidance.' },
      { q: 'Is thinking really part of the Irish curriculum?', a: 'Yes. The Framework for Junior Cycle names eight key skills including managing information and thinking, and requires them in every subject and short course. Senior cycle names thinking and solving problems among its seven key competencies.' },
      { q: 'My child can produce working code with a chat tool. Is that not enough?', a: 'Not if they cannot explain it. Code that a learner cannot read cannot be fixed, trusted or built on, and the skill of judging output is the one that lasts.' },
      { q: 'What age can this start at?', a: 'From six, with block coding, where thinking looks like predicting what a character will do before pressing go.' },
      { q: 'Does this help with school work?', a: 'It builds the same skills schools name, but we never write, edit or check work that will be submitted for assessment, and we make no promises about grades.' },
      { q: 'How do you actually teach thinking?', a: 'Predict, run, explain. The learner says what will happen, sees what does happen, and accounts for the difference. Teachers ask questions instead of typing fixes.' },
      { q: 'Is this only for strong students?', a: 'No. Learners who find things hard often gain the most, because the method makes their reasoning visible and easy for a teacher to help with.' },
      { q: 'What are the fees?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, in US dollars, with no joining fee.' },
      { q: 'What times do classes run?', a: 'After school, in the evening or at weekends, at a weekly hour agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer, five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We ring at a sensible Irish hour and arrange the free first class. Nothing is charged unless the learner continues.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'The same argument from other angles.',
    items: [
      { href: '/problem-solving-skills-through-coding-ireland', label: 'Problem solving skills through coding', p: 'What the evidence and curriculum say.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'The habits that keep the learning.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-ireland', label: 'Learn to train AI, not just prompt it', p: 'Going under the tools.' },
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'Six checks for choosing a class.' },
      { href: '/best-coding-class-in-the-world', label: 'The best coding class in the world', p: 'What the research says about teaching.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'See a lesson that starts with a question',
    lede: 'Leave a number and we will phone at a suitable Irish hour. In the free class the learner works through a real problem with a teacher, who asks rather than tells, and you hear honestly where they are.',
    readFirst: 'If you would rather read on first: <a class="ag-inline-link" href="/how-we-teach">how our teachers work</a>, the <a class="ag-inline-link" href="/courses">course syllabuses</a>, and <a class="ag-inline-link" href="/student-labs">what our students have built</a>.',
    note: 'WhatsApp reaches us quickest and costs nothing from an Irish phone. Our number is Indian, since the whole team works from India, and there is no office in Ireland.',
    formNote: 'No card, no obligation. One call to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Thinking', links: [
        { href: '/problem-solving-skills-through-coding-ireland', label: 'Problem solving through coding' },
        { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code' },
        { href: '/learn-to-train-ai-not-just-prompt-it-ireland', label: 'Learn to train AI' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-kids-ireland', label: 'Coding for kids' },
        { href: '/best-coding-classes-for-teens-ireland', label: 'Coding for teens' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Thinking first, tools second'
  },

  personalityCss: `
.ag-root.ag-ltt .ag-hero-grid { gap: clamp(1.15rem, 3.4vw, 2.85rem); }
.ag-root.ag-ltt .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-ltt .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ltt .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ltt .ag-table caption { text-align: left; }
.ag-root.ag-ltt .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-ltt .ag-spec dt { letter-spacing: 0.115em; }
.ag-root.ag-ltt .ag-slots { gap: 1.18rem; }
`,

  mustMention: ['eight key skills', 'Being curious', 'Thinking creatively and critically', 'every junior cycle subject and short course', 'Thinking and solving problems', 'Smaointeoireacht agus fadhbanna a réiteach', 'enhance and not replace', 'final checkpoint', 'critically, safely and ethically', 'lower-order cognitive tasks', 'Oide', 'October 2025']
};
