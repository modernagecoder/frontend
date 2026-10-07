'use strict';
// Learn to think, not just use AI tools, Australia (ag- think door; AU cluster Phase 2, row 31).
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx): elaborations under AC9TDI8P11 on prompting
//    ("using a progressive series of prompts with generative models to refine output to improve its correctness")
//    and AC9TDI10P11 on AI search features; Years 7-8 band description on testing and debugging.
//  - Digital Technologies Hub, Explore AI in education: nine free modules, no log-in; the AI implementation module
//    is for "integrating GenAI with students (age 13+)".
//  - Anthropic consumer terms: users must be "at least 18 years old or the minimum age required to consent".
// Lesson family: acceptance sampling (how many AI answers to spot-check, from the hypergeometric formula).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'THINK, NOT JUST PROMPT', blurb: 'Why Australian students should learn to think with AI rather than lean on it, with the curriculum\'s own lines on prompting and a spot-checking method you can calculate.' },
  slug: 'learn-to-think-not-just-use-ai-tools-australia',
  code: 'ltau',
  accent: '#1C4498',
  accentRationale: 'Learn to think, Australia: a deep ink blue chosen by hand, at least 13 RGB units from every accent in use and below the violet band',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Learn to think, not just use AI tools, Australia',
  title: 'Learn to Think, Not Just Use AI Tools | Australian Students',
  description: 'For Australian students using AI: what the curriculum says about prompting, how many AI answers to check before trusting a batch, and how to think alongside AI.',
  ogDescription: 'AI tools answer fast and sometimes wrongly. How Australian students can keep the thinking for themselves, with the curriculum\'s own words on prompting and a spot-check you can calculate.',
  twitterDescription: 'Learn to think, not just use AI tools: prompting, checking and spot-checking for Australian students.',
  pageName: 'Learn to Think, Not Just Use AI Tools',
  webPageDescription: 'A guide for Australian students and parents on using AI tools while keeping the thinking: curriculum expectations, age rules and a mathematical spot-checking method.',
  courseDescription: 'Live online courses for Australian students on understanding, checking and building with AI, from AI literacy for children to machine learning for teens.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Think, not just use AI',
  navLinks: [
    { href: '#curriculum', label: 'The curriculum' },
    { href: '#ages', label: 'Age rules' },
    { href: '#spot-check', label: 'Spot-checking' },
    { href: '#habits', label: 'Thinking habits' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 5 to 12 and adults &middot; AI with judgement',
  h1: 'Learn to think, not just use AI tools',
  lede: 'An AI chatbot will write a paragraph, a program or a maths solution in seconds, and most of the time the result looks convincing. The skill that matters now is not getting an answer; it is knowing whether the answer is right, and knowing what you would have done without it. Australian schools are already teaching students to write prompts. This page sets out what the curriculum actually asks for, what the AI companies themselves say about age, and a piece of mathematics that answers a question every student should ask: if I cannot check every answer, how many do I need to check before I trust the rest?',
  secondaryCta: { href: '#spot-check', label: 'Spot-checking' },
  wa: 'Hello Modern Age Coders, my child uses AI tools for school and I want them to understand and check what they get. Could we book a free lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; every answer explained, never just pasted',
  spec: [
    ['For', 'Students from about Year 5, and adults'],
    ['Focus', 'Understanding and checking AI'],
    ['Builds', 'Programs that test AI answers'],
    ['Curriculum', 'Digital Technologies, Years 7 to 10'],
    ['Age rules', 'Followed for every AI tool'],
    ['Format', 'Live online video'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Learning to think with AI means understanding how a tool produces its answer, checking that answer, and being able to solve the problem without it. The Australian Curriculum already includes writing prompts and refining output "to improve its correctness". Because no one can check every answer, students also need to know how many to spot-check: if 4 of 40 AI answers are wrong, checking 17 at random gives at least a 90% chance of catching one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that put understanding first',
    lede: 'Matched to age and to the AI tools each age may use. The free first lesson confirms the right one.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'LTAU / 01', title: 'How AI works, for children', note: 'Ages 8 to 14. What AI learns from, where it goes wrong, and how to check it, without needing an adult-only chatbot.' },
      { course: 'teens-ai-tools-mastery-course', code: 'LTAU / 02', title: 'AI tools with judgement, for teens', note: 'Ages 13 and up. Prompting, checking and citing, using tools whose terms allow teenagers.' },
      { course: 'ai-ml-masterclass-teens', code: 'LTAU / 03', title: 'Building the models yourself', note: 'Teens ready for Python. Train small models and see exactly where their answers come from.' }
    ]
  },

  sections: [
    {
      id: 'curriculum', tint: 'tint', eyebrow: 'The curriculum',
      h2: 'What Australian classrooms already ask of students',
      lede: 'Prompting is not a fringe skill in Australia. The Australian Curriculum v9 names it in Digital Technologies for Years 7 and 8, alongside the expectation that students improve the correctness of what a model produces.',
      body: [
        { kind: 'table', caption: 'AI in the Australian Curriculum v9, Digital Technologies 7 to 10, as published', head: ['Where', 'Code', 'The curriculum\'s words'], rows: [
          ['Years 7 and 8, elaboration', 'AC9TDI8P11', '"using effective prompts with generative AI models to create output that is better suited to the problem being solved"'],
          ['Years 7 and 8, elaboration', 'AC9TDI8P11', '"using a progressive series of prompts with generative models to refine output to improve its correctness"'],
          ['Years 9 and 10, elaboration', 'AC9TDI10P11', '"locating relevant content by using Boolean operators or artificial intelligence search features of search engines"'],
          ['Years 7 and 8, band description', 'None', '"Students check their solutions meet the specifications by testing and debugging their algorithms"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The word that matters',
          left: [
            'Look closely at the second line. The curriculum does not stop at writing a prompt; it expects students to refine the output "to improve its correctness". That assumes the student can tell when the output is wrong.',
            'Telling right from wrong is a thinking skill, and it depends on understanding the subject well enough to notice a mistake.'
          ],
          rightH3: 'Testing is the same habit',
          right: [
            'The band description for Years 7 and 8 asks students to check their own solutions "by testing and debugging". Checking an AI\'s answer is the same discipline applied to someone else\'s work.',
            'A student who tests their own code habitually is already halfway to checking an AI properly.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: ACARA, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Australian Curriculum v9, Digital Technologies content, Years 7 to 10</a> (Word file). Elaborations are examples of how a content description may be taught, not compulsory content.' }
      ]
    },
    {
      id: 'ages', tint: 'deep', eyebrow: 'Age rules',
      h2: 'Which AI tools a student is allowed to use',
      lede: 'Thinking well about AI starts with using the right tool for your age. The companies and the education system each set their own lines, and they are not all the same.',
      body: [
        { kind: 'table', caption: 'Age lines we read at source', head: ['Who says it', 'What they say'], rows: [
          ['Anthropic, consumer terms for Claude', '"You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher."'],
          ['Digital Technologies Hub, AI implementation module for teachers', 'Strategies "for integrating GenAI with students (age 13+)"'],
          ['Our courses', 'Children under 13 learn how AI works through activities that need no adult-only accounts']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we teach AI to children without chatbots',
          left: [
            'AI tools set their own minimum ages, and Claude\'s is 18. We follow each tool\'s current terms, which shapes how we teach younger students.',
            'Children aged 8 to 12 learn how a model learns from examples, train small classifiers in child-safe tools, and practise checking outputs, without signing up to any adult service.'
          ],
          rightH3: 'Free teacher modules',
          right: [
            'The Digital Technologies Hub offers teachers nine modules on AI "designed to build understanding of AI concepts such as Generative AI, machine learning and bias, responsible AI, programming and ethics", with no log-in required.',
            'If your school uses them, our lessons will feel familiar; if it does not, they are a useful read for parents too.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://www.anthropic.com/legal/consumer-terms" rel="noopener" target="_blank">Anthropic consumer terms</a> and <a class="ag-inline-link" href="https://www.digitaltechnologieshub.edu.au/ai/professional-learning/explore-ai-in-education/" rel="noopener" target="_blank">Digital Technologies Hub, Explore AI in education</a>. Terms change; always check the current terms of any tool before a child signs up.' }
      ]
    },
    {
      id: 'spot-check', tint: 'tint', eyebrow: 'Spot-checking',
      h2: 'How many AI answers do you need to check?',
      lede: 'Suppose an AI has produced 40 answers for you: worked solutions, translations, or lines of code. Checking all 40 defeats the purpose of using it. Checking two feels too few. Factories face the same question with batches of parts, and the answer has a name: acceptance sampling.',
      body: [
        { kind: 'table', caption: 'Chance of catching at least one wrong answer, checking n of 40 at random (our calculation)', head: ['Wrong answers in the batch', 'Check 3', 'Check 5', 'Check 10', 'Check 20'], rows: [
          ['1 of 40', '7.5%', '12.5%', '25.0%', '50.0%'],
          ['2 of 40', '14.6%', '23.7%', '44.2%', '75.6%'],
          ['4 of 40', '27.7%', '42.7%', '70.0%', '94.7%'],
          ['8 of 40', '49.8%', '69.4%', '92.4%', '99.8%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the table says',
          left: [
            'If 4 of the 40 answers are wrong and you check 5, you have only a 42.7% chance of spotting even one mistake. More often than not, a quick glance passes a batch that contains four errors.',
            'To reach a 90% chance of catching at least one mistake in that batch, you need to check 17 answers. With 8 wrong, 10 checks are enough; with 2 wrong, you need 27.'
          ],
          rightH3: 'The mathematics',
          right: [
            'The chance of missing every wrong answer is the number of ways to choose your checks from the correct answers, divided by the number of ways to choose them from all 40. One minus that is the chance of catching at least one.',
            'In Python it is a single line using <code>math.comb</code>: <code>1 - comb(40 - k, n) / comb(40, n)</code>. Students in Years 9 and 10 can derive it; younger students can simulate it by drawing cards.'
          ] },
        { kind: 'capsule', q: 'The thinking lesson', p: 'A few spot-checks catch a tool that is often wrong, but they rarely catch one that is occasionally wrong. The rarer the mistakes, the more you have to understand the subject yourself, because sampling alone will not save you.' }
      ]
    },
    {
      id: 'habits', tint: 'deep', eyebrow: 'Thinking habits',
      h2: 'Five habits that keep the thinking yours',
      lede: 'These are the habits we build in every course that touches AI, at every age.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Predict first', p: 'Before asking an AI, write down what you expect the answer to look like. A prediction turns a surprising answer into a question rather than an acceptance.' },
          { h3: 'Ask why', p: 'For any answer you keep, be able to explain why it is right in your own words. If you cannot, you have borrowed it, not learned it.' },
          { h3: 'Check at random', p: 'When you cannot check everything, check a random sample, not the first few. Errors are not polite enough to sit at the top of a list.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Solve one by hand', p: 'Every so often, solve a problem without the tool. It keeps the skill alive and gives you a benchmark for the tool\'s answers.' },
          { h3: 'Know the limits', p: 'Learn what kinds of question a tool handles badly, such as exact arithmetic, recent events or sources it cannot see.' },
          { h3: 'Own the result', p: 'Whatever you submit or ship is yours. Schools and employers judge the work, not the tool that helped.' }
        ] },
        { kind: 'p', mt: true, html: 'For assessed school work, each state\'s rules decide what AI use is allowed, and the work must be the student\'s own. We teach the understanding and the checking; we never write a student\'s assessed work. For a deeper look at reading and owning code, see our page on <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-australia">understanding the code rather than copying it</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From AI user to AI thinker',
    lede: 'A progression we see in students who learn to work with AI well.',
    table: { caption: 'Four stages of thinking with AI', head: ['Stage', 'What the student can do'], rows: [
      ['1. Use', 'Get a useful answer from a tool appropriate for their age'],
      ['2. Doubt', 'Notice when an answer looks wrong, and say why'],
      ['3. Check', 'Test answers systematically, including by random sampling'],
      ['4. Build', 'Write programs, and train small models, that do the checking']
    ] },
    left: { h3: 'For younger students', ps: [
      'The first two stages come through activities and games, without adult-only accounts.',
      'Children learn that a computer can be confidently wrong, which is the most useful lesson of all.'
    ] },
    right: { h3: 'For teenagers and adults', ps: [
      'Stages three and four involve real code: test harnesses, sampling programs and small models whose every decision can be inspected.',
      'By then the AI is a tool the student directs, not an oracle they obey.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses about understanding AI, not just using it',
    lede: 'Grouped by age. The free first lesson places each student.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 8 to 12', courses: [
        { code: 'LTAU / CHD / 01', slug: 'ai-literacy-for-kids-course', title: 'What AI is and is not', blurb: 'Activities that show how machines learn.' },
        { code: 'LTAU / CHD / 02', slug: 'python-ai-kids-masterclass', title: 'Python projects with AI inside', blurb: 'Small, checkable AI programs.' },
        { code: 'LTAU / CHD / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Thinking before computing', blurb: 'Logic that makes checking possible.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'LTAU / TEN / 01', slug: 'teens-ai-tools-mastery-course', title: 'Prompting, checking, citing', blurb: 'AI tools used with judgement.' },
        { code: 'LTAU / TEN / 02', slug: 'ai-ml-masterclass-teens', title: 'Models you train yourself', blurb: 'From data to a working model.' },
        { code: 'LTAU / TEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data before conclusions', blurb: 'Python for real datasets.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'LTAU / ADL / 01', slug: 'ai-tools-mastery-complete-college', title: 'AI tools for work', blurb: 'Productive, checked, accountable.' },
        { code: 'LTAU / ADL / 02', slug: 'complete-generative-ai-masterclass-college', title: 'How LLM systems are built', blurb: 'Retrieval, agents and evaluation.' },
        { code: 'LTAU / ADL / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automation you can audit', blurb: 'Scripts with applied AI.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons where the student explains every answer',
    lede: 'Whether or not an AI tool is involved, the student does the thinking, out loud, with a teacher listening.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For senior students and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday options.' }
    ],
    cells: [
      { h3: 'Predict, then run', p: 'Students say what they expect before any code or tool runs.' },
      { h3: 'Explain it back', p: 'An answer counts only once the student can explain it.' },
      { h3: 'Age-appropriate tools', p: 'We follow each tool\'s terms on minimum age.' },
      { h3: 'Small groups', p: 'Five to ten students, or one to one.' },
      { h3: 'Their own work', p: 'Teachers question and guide; they do not do the work.' },
      { h3: 'Real checks', p: 'Students write tests and samplers, not just opinions.' }
    ]
  },

  projectsH2: 'Student projects that think for themselves',
  projectsLede: 'Work our students built and can explain line by line. Many more are collected on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students in their own words, as they posted them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Outside India we charge a single monthly fee in US dollars, identical across countries. Joining costs nothing extra and no term contract applies, so you may stop at the close of any month.',
    free: ['A first lesson that costs nothing', 'A clear recommendation from the teacher', 'No card details asked'],
    group: ['Five to ten students', 'One teacher all the way through', 'Grouped by age and level', 'Monthly, no lock-in'],
    one: ['A teacher for one student', 'Scheduled around school', 'Paced to the learner']
  },

  faq: {
    eyebrow: 'Questions from parents and students',
    h2: 'Common questions about thinking with AI',
    items: [
      { q: 'What does learn to think, not just use AI tools mean?', a: 'It means understanding how an AI tool reaches its answer, checking that answer properly, and keeping the ability to solve the problem without the tool, so the student directs the AI rather than depending on it.' },
      { q: 'What is acceptance sampling?', a: 'Acceptance sampling is a way of deciding whether to trust a batch of items by checking a random sample of them. Applied to AI, it tells you how many answers to check: with 4 wrong in 40, checking 17 at random gives at least a 90% chance of catching one.' },
      { q: 'Does the Australian Curriculum teach students to use AI?', a: 'Yes. The Australian Curriculum v9 includes elaborations in Digital Technologies for Years 7 and 8 about using effective prompts with generative AI and refining output to improve its correctness.' },
      { q: 'How old do you have to be to use AI chatbots?', a: 'It depends on the tool. Anthropic\'s consumer terms for Claude require users to be at least 18. Other tools set their own minimum ages, so always check the current terms before a child signs up.' },
      { q: 'Can children under 13 learn about AI with you?', a: 'Yes. Children aged 8 to 12 learn how AI works through activities and child-safe tools that need no adult-only accounts.' },
      { q: 'Will you help my child use AI for school assignments?', a: 'We teach understanding and checking. We never write a student\'s assessed work, and each state\'s rules decide what AI use is allowed in assessments.' },
      { q: 'Why not just trust AI tools since they are usually right?', a: 'Because "usually" hides the problem. If a tool is wrong only occasionally, a few spot-checks rarely catch it, so the student must understand the subject well enough to notice errors.' },
      { q: 'Does my child need to know coding first?', a: 'No. Younger students start with activities and Scratch; programming in Python comes later, when they write programs that test AI answers.' },
      { q: 'Are lessons live?', a: 'Yes. Every lesson is live over video with a teacher, in small groups or one to one, at times set for your state.' },
      { q: 'How much do the courses cost?', a: 'The first lesson is free. After that, fees are monthly with no joining fee and no term commitment, as shown in the fees section on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on reading code, AI for children and building AI rather than prompting it.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code, do not copy-paste', p: 'Owning what you submit.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-australia', label: 'Learn to train AI', p: 'Building models rather than prompting them.' },
      { href: '/ai-courses-for-kids-australia', label: 'AI courses for kids', p: 'AI for primary-age children.' },
      { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens', p: 'AI for secondary students.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'For NSW senior students.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Give us a number and a convenient time. The student tackles a short problem with a teacher, AI included where age allows, and you see how the thinking is kept with the student.',
    readFirst: 'Prefer to read first? Here is <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a>, and here are <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'WhatsApp is the quickest way to reach us from Australia. Our team is in India and replies from a +91 number; we have no Australian premises.',
    formNote: 'No charge, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Thinking with AI', links: [
        { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
        { href: '/learn-to-train-ai-not-just-prompt-it-australia', label: 'Train AI, not just prompt it' },
        { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/ai-courses-for-kids-australia', label: 'AI courses for kids' },
        { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'Check a random sample; understand the rest'
  },

  personalityCss: `
.ag-root.ag-ltau .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-ltau .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-ltau .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-ltau .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ltau .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-ltau .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, AI and thinking. ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI8P11 elaborations "using effective prompts with generative AI models to create output that is better suited to the problem being solved" and "using a progressive series of prompts with generative models to refine output to improve its correctness"; AC9TDI10P11 elaboration "locating relevant content by using Boolean operators or artificial intelligence search features of search engines"; Years 7-8 band description "Students check their solutions meet the specifications by testing and debugging their algorithms". Digital Technologies Hub, Explore AI in education: nine modules, no log-in, AI implementation module for students "(age 13+)". Anthropic consumer terms: "at least 18 years old or the minimum age required to consent".',
    localProject: 'Acceptance sampling for AI output: for a batch of 40 AI answers with k wrong, the chance of catching at least one when checking n at random is 1 - C(40-k, n)/C(40, n). Our calculation: k=4 gives 27.7% (n=3), 42.7% (n=5), 70.0% (n=10), 94.7% (n=20); 90% needs n=17 for k=4, n=10 for k=8, n=27 for k=2. Lesson family: acceptance sampling.',
    requiredMentions: ['acceptance sampling', 'AC9TDI8P11', 'AC9TDI10P11', 'progressive series of prompts', 'nine modules', 'age 13+', 'at least 18 years old', '42.7%', '94.7%', 'math.comb'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies content 7-10: AC9TDI8P11 and AC9TDI10P11 elaborations; Years 7-8 band description.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'Digital Technologies Hub, Explore AI in education: nine free modules, no log-in, AI implementation module for students aged 13+.', url: 'https://www.digitaltechnologieshub.edu.au/ai/professional-learning/explore-ai-in-education/' },
      { claim: 'Anthropic consumer terms, minimum age clause.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'The Australian Framework for Generative AI in Schools: education.gov.au timed out repeatedly, so it is not quoted.',
      'OpenAI terms on minimum age: openai.com returned 403 to an automated read and was not circumvented; the page names only the Anthropic minimum age it read and tells families to check the current terms of every tool.',
      'Any statistic on how often AI tools are wrong: no primary source; the table uses hypothetical batches and says so.',
      'Claims that elaborations are compulsory: refused; ACARA presents them as examples.',
      'State-by-state rules on AI in assessment: not summarised; families are pointed to each state\'s rules.'
    ]
  }
};
