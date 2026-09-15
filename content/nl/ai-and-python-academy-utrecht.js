'use strict';
// AI and Python Academy, Utrecht (ag- spoke of the Dutch academy hub).
// Spine: Utrecht University's AI bachelor describes itself as the only one in
// the Netherlands that teaches philosophy, psychology and linguistics next to
// programming, "to understand the core of intelligent behaviour". The page
// turns that into four questions to ask of any chatbot, one per discipline,
// grounded in Turing's 1950 paper (Mind, vol. LIX, no. 236) and Weizenbaum's
// ELIZA (MIT, 1964 to 1967, the DOCTOR script, the secretary anecdote). The
// learner project is a small ELIZA in Python. Veenendaal owns tokenization;
// the linguistic question here is fluency versus meaning, not how text is cut.
// The cg Utrecht page owns the city statistics and the school counts.

module.exports = {
  cluster: 'ag',
  slug: 'ai-and-python-academy-utrecht',
  code: 'aut',
  accent: '#6C1736',
  accentRationale: 'Utrecht academy: a wine red from the solver, more than twenty-two units from every page it links to, the Utrecht, province and Amersfoort pages and the other academy pages among them, with an unlinked city as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'AI and Python Academy, Utrecht',
  title: 'AI and Python Academy, Utrecht | Build Real AI',
  description: 'Is a chatbot intelligent? Utrecht studies AI through programming, philosophy, psychology and linguistics. Learn all four, live online for ages 6 to 67.',
  ogDescription: 'Turing asked whether machines can think; Weizenbaum watched people confide in a sixty-line conversation program. A live online AI track for Utrecht that asks four questions of every chatbot.',
  twitterDescription: 'Four questions to ask of any chatbot, and the Python to answer them. Live online for Utrecht, ages 6 to 67.',
  pageName: 'AI and Python Academy for Students in Utrecht',
  webPageDescription: 'Live online Python, data, machine learning and AI agent classes for learners in Utrecht aged 6 to 67, with each system examined from the sides of programming, philosophy, psychology and language.',
  courseDescription: 'A live online programme for learners in Utrecht aged 6 to 67 that runs from typed Python through data, models and agents, and teaches learners to ask of every AI system how it works, what would count as thinking, why people believe it, and what it does with language.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Utrecht',
  navLinks: [
    { href: '#four', label: 'Four disciplines' },
    { href: '#eliza', label: 'Build an ELIZA' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Utrecht &middot; Live online &middot; Ages 6 to 67',
  h1: 'AI and Python classes in Utrecht, from four sides at once',
  lede: 'Utrecht University teaches artificial intelligence in a way it says no other Dutch university does. Alongside programming, its students learn philosophy, psychology and linguistics, because, in the programme\'s own words, that helps you understand the core of intelligent behaviour. It is a useful idea for anyone meeting today\'s chatbots. Whether a system is intelligent is not only a question about its code. It is also a question about what thinking is, about why people are so ready to believe a machine understands them, and about what the machine is actually doing with words. Alan Turing asked the first of those in 1950. Joseph Weizenbaum ran into the third in the 1960s, when people confided in a simple program called ELIZA. This page teaches AI and Python from a child\'s first program upward, and teaches learners to ask all four questions, live online for learners in Utrecht.',
  secondaryCta: { href: '#eliza', label: 'Build a small ELIZA' },
  wa: 'Hello Modern Age Coders, I want a free class for a learner in Utrecht, on the AI and Python track.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ learners taught &middot; a teacher in every lesson',
  spec: [
    ['Learners', 'Utrecht, from 6 to 67'],
    ['Track', 'Python, data, models, agents'],
    ['Questions', 'How it works, whether it thinks, why we believe it, what it does with words'],
    ['Delivery', 'Live over video, never recorded'],
    ['Class size', 'Five to ten, or private'],
    ['Times', 'Dutch afternoons, evenings, weekends'],
    ['Language', 'English'],
    ['First step', 'A free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'For learners in Utrecht between six and sixty-seven, Modern Age Coders teaches a live online AI and Python track: Python typed by hand, real data, models with a measured error, and agents. Alongside the code, learners practise four questions borrowed from the way Utrecht University frames its own AI degree: how does this system work, what would count as thinking, why do people believe it, and what is it doing with language? The signature project is a small ELIZA, the 1960s conversation program, built in Python and then tested on real people. Classes run in English, in groups of five to ten learners or one to one. The first lesson costs nothing; after it, group classes are USD 100 a month and private tuition USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a Utrecht learner curious about thinking machines',
    lede: 'A first course for a child who wants to make the computer talk back, a second for a teenager ready for real models, a third for the adult who wants to know what a language model is. Every card leads to that course\'s full page.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'UTR / 01', title: 'Python and AI for Kids', note: 'A child types the rules for a small talking program, watches it answer, and then finds the sentence that makes it say something silly, the first lesson in how a machine can seem to understand.' },
      { course: 'ai-ml-masterclass-teens', code: 'UTR / 02', title: 'AI and Machine Learning for Teens', note: 'From Python to neural networks and text models, with every result questioned: what did it learn, what did it miss, and would a person be fooled?' },
      { course: 'complete-generative-ai-masterclass-college', code: 'UTR / 03', title: 'Generative AI: LLMs, RAG and Agents', note: 'What a large language model does when it writes, how it is grounded in real documents, and why fluent text is not the same as understanding.' }
    ]
  },

  sections: [
    {
      id: 'four', tint: 'tint', eyebrow: 'Four disciplines',
      h2: 'Is it intelligent? Four questions, one from each discipline',
      lede: 'Utrecht University\'s bachelor in Kunstmatige intelligentie teaches programming alongside filosofie, psychologie en taalkunde. We borrow that shape for four questions any learner can put to any AI system.',
      body: [
        { kind: 'two',
          left: [
            'The university\'s programme page puts it simply: in this broad bachelor you learn to write intelligent programs, and you also learn about philosophy, psychology and linguistics, which helps you understand the core of intelligent behaviour. It describes the breadth as unique in the Netherlands. The degree is taught in Dutch over three years, in monumental buildings around the <strong>Domkerk</strong>, and its study association is called <strong>Incognito</strong>.',
            'Its structure shows how seriously the breadth is meant. The major is <strong>135 EC</strong>: two base packages worth 60 EC, a specialisation package of 45 EC, two compulsory disciplinary courses worth 15 EC that place the subject in its wider scientific and social setting, and a thesis with a preparatory course. A further 45 EC of <strong>profileringsruimte</strong> is left for the student to shape. Admission includes compulsory <strong>matching</strong>, and registration closes on 1 May.'
          ],
          right: [
            'The four questions below come from those four disciplines. None needs a degree to ask. A twelve-year-old can ask them of a chatbot, and an adult choosing an AI tool for work should.',
            'We have no connection with Utrecht University, and our classes are not part of or preparation for its programme, which is taught in Dutch while ours are in English. What we take from it is the idea that AI is understood best from more than one side.'
          ] },
        { kind: 'table', mt: true, caption: 'Four questions to ask of any AI system', head: ['Discipline', 'The question', 'What a learner does to answer it'], rows: [
          ['Programming', 'How does it actually work?', 'Builds a small version and reads the rules or the model behind it'],
          ['Philosophy', 'What would count as thinking?', 'Writes down a test before deciding, as Turing did in 1950'],
          ['Psychology', 'Why do people believe it?', 'Watches real users react to a system whose simplicity they know'],
          ['Linguistics', 'What is it doing with language?', 'Separates fluent sentences from correct or meaningful ones']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.uu.nl/bachelors/kunstmatige-intelligentie" rel="noopener" target="_blank">Universiteit Utrecht, bachelor Kunstmatige intelligentie</a> (disciplines, language, length, location, association); <a class="ag-inline-link" href="https://students.uu.nl/gw/ki/mijn-studie/studieprogramma" rel="noopener" target="_blank">study programme</a> (135 EC major, packages, profileringsruimte); <a class="ag-inline-link" href="https://www.uu.nl/bachelors/kunstmatige-intelligentie/toelating" rel="noopener" target="_blank">admission</a> (matching, 1 May). Read 15 September 2026; the pages are in Dutch and are translated here.' }
      ]
    },
    {
      id: 'eliza', tint: 'deep', eyebrow: 'Build an ELIZA',
      h2: 'Turing\'s question, Weizenbaum\'s surprise, and a program a learner can write in an afternoon',
      lede: 'Two old texts still answer the newest questions about chatbots better than most commentary. Our learners read about both and then build the second.',
      body: [
        { kind: 'two',
          left: [
            'In October 1950 the journal <em>Mind</em> published Alan Turing\'s paper <strong>Computing Machinery and Intelligence</strong> (volume LIX, issue 236, pages 433 to 460). It opens: I propose to consider the question, can machines think? Rather than argue about definitions, Turing replaced the question with a test he called the <strong>imitation game</strong>, in which an interrogator, reading only typed answers, tries to tell a machine from a person. It was the philosopher\'s move: before deciding whether something thinks, decide what would count as evidence.',
            'Between 1964 and 1967, at MIT, <strong>Joseph Weizenbaum</strong> wrote ELIZA. Its best-known script, <strong>DOCTOR</strong>, imitated a <strong>Rogerian</strong> psychotherapist. It worked by pattern matching and substitution, which, the encyclopaedia notes, gave users an illusion of understanding.'
          ],
          right: [
            'The illusion was stronger than its author expected. His own secretary, the encyclopaedia records, asked him to leave the room so that she and ELIZA could have a real conversation. Weizenbaum later wrote that he had not realised that extremely short exposures to a relatively simple computer program could induce powerful delusional thinking in quite normal people, and in 1976 he published <strong>Computer Power and Human Reason</strong>.',
            'The tendency he saw now has a name, the ELIZA effect: people reading understanding into programs that have none. It is the psychologist\'s question, and today\'s chatbots, vastly more capable than ELIZA, make it more pressing, not less.'
          ] },
        { kind: 'table', mt: true, caption: 'A learner\'s small ELIZA: four rules of the kind the original used (our own teaching example)', head: ['If the user writes', 'The program replies', 'What it shows'], rows: [
          ['I feel [something]', 'Why do you feel [something]?', 'Substitution: the words are reused, not understood'],
          ['My [someone] [does something]', 'Tell me more about your [someone].', 'A keyword triggers a stock reply'],
          ['I am [something]', 'How long have you been [something]?', 'I becomes you: grammar, not meaning'],
          ['anything else', 'Please go on.', 'A default that sounds attentive and says nothing']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A learner who has written those four rules in Python, perhaps thirty lines, then tries the program on a friend or a parent. The results are usually the lesson. Some people play along, some are charmed, a few are briefly unsettled. The learner knows exactly how little is behind each reply, and watches someone else supply the understanding themselves.'
          ],
          right: [
            'Then the four questions: how does it work (four rules), would it pass Turing\'s test (no, not for long), why did the friend believe it for a moment (the ELIZA effect), and what did it do with language (it rearranged it). Asked of a modern chatbot, the first answer is far longer and the others are harder, which is exactly why they are worth practising on a program the learner wrote.'
          ] },
        { kind: 'source', html: 'Sources: A. M. Turing, <a class="ag-inline-link" href="https://academic.oup.com/mind/article/LIX/236/433/986238" rel="noopener" target="_blank">Computing Machinery and Intelligence, Mind LIX (236), October 1950, 433 to 460</a>; <a class="ag-inline-link" href="https://en.wikipedia.org/wiki/ELIZA" rel="noopener" target="_blank">ELIZA, encyclopaedia entry</a> (dates, DOCTOR, method, the secretary, Weizenbaum\'s remark, the 1976 book). Read 15 September 2026. The rule table is our own example, written in the style of the original.' }
      ]
    },
    {
      id: 'ages', tint: '', eyebrow: 'At every age',
      h2: 'The same four questions, from groep 6 to the office',
      lede: 'The questions scale. A child asks them about a talking program of their own; an adult asks them about the AI assistant their employer has just bought.',
      body: [
        { kind: 'two',
          left: [
            'A primary-school child builds a program that answers back and learns, in the building, that answering is not the same as understanding. That single insight protects a child better than any list of rules about chatbots.',
            'A teenager reaches real models and real text. The questions become sharper: what did this model learn from, would a careful reader be fooled, and is this sentence true or only well formed? A teenager weighing a future in AI, psychology or linguistics finds out quickly which of the four questions interests them most.'
          ],
          right: [
            'Adults in Utrecht bring the questions to work. Before an AI tool drafts letters to clients or summarises a report, it is worth knowing how it works, what it cannot do, and why its fluency is so persuasive. Many adults take this one to one.',
            'For the city itself, see <a class="ag-inline-link" href="/coding-classes-in-utrecht">coding classes in Utrecht</a>; for the surrounding province, <a class="ag-inline-link" href="/coding-classes-in-utrecht-province">the province of Utrecht</a> and <a class="ag-inline-link" href="/coding-classes-in-amersfoort">Amersfoort</a>. The <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a> sets out the national picture.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The five rungs',
    h2: 'From a program that talks back to a model that is honestly described',
    lede: 'The rungs follow one another for a reason. A learner who has never built a simple rule-based program cannot see what a trained model adds, and one who has never measured a model cannot judge a chatbot\'s claims.',
    table: { caption: 'The five rungs for a Utrecht learner, with one of the four questions sharpened at each', head: ['Rung', 'Typically', 'Built, and asked'], rows: [
      ['1. Python by hand', 'Groep 6 to 8, or an adult starting out', 'A small ELIZA; how does it work?'],
      ['2. Data', 'Brugklas to the third year', 'Real text collected and cleaned; what is in the language it learns from?'],
      ['3. Models', 'Havo 4 to vwo 6, students, adults', 'A trained text model; what would count as it doing well?'],
      ['4. Agents', 'Upper school and beyond', 'A tool-using assistant; why do users trust it, and should they?'],
      ['5. Publishing', 'At every stage', 'Code and a plain account of what the system can and cannot do']
    ] },
    left: { h3: 'Why rules come before learning', ps: [
      'ELIZA is a program of explicit rules, and building one first makes the step to machine learning visible: instead of writing the rules, the learner lets a model find patterns in data, and can then ask what the model found that the rules missed, and what it copied that it should not have.',
      'How we order every subject is set out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'How the rungs sit beside a Utrecht school career', ps: [
      'The final years of the basisschool are the time for rung 1, with the weeks of the doorstroomtoets left quiet. For a pupil drawn to both the Nature and the Culture profiles, rung 2 is a good way to test whether AI is the bridge between them.',
      'University students and working adults tend to start at rung 3, often in private lessons fitted around study or work.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eleven live courses for Utrecht, chosen by what the learner can already do',
    lede: 'Grouped by stage of life rather than by difficulty. Behind every card is a full course page with its own timetable and fee; the free lesson, not this grid, decides where a learner begins.',
    bands: [
      { num: 'I', h3: 'Children, groep 3 to 8', sub: 'Programs that talk back, and an honest picture of what they are', courses: [
        { code: 'UTR / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python for children of nine to twelve, from pictures and games to a small program that seems to understand and plainly does not.' },
        { code: 'UTR / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How chatbots produce their answers, why a smooth reply can still be wrong, and why it is fine to ask a machine to explain itself.' },
        { code: 'UTR / KIDS / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Children describe a game to an AI tool, get something back, and learn to spot and repair what it misunderstood.' }
      ] },
      { num: 'II', h3: 'Teenagers, havo and vwo', sub: 'From fluent Python to text models, with every result questioned', courses: [
        { code: 'UTR / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Statistics, classical methods, neural networks and text, with each model judged on what it learned and where it would mislead a reader.' },
        { code: 'UTR / TEEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'A thorough grounding in Python over two years, for a teenager who wants to build conversational programs and understand every line of them.' },
        { code: 'UTR / TEEN / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe Coding for Teens', blurb: 'Building web and AI projects with AI help, then reading and testing what the assistant produced instead of trusting it.' },
        { code: 'UTR / TEEN / 04', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'Getting real work out of AI tools for study and projects, with a clear sense of when fluency is covering for a wrong answer.' }
      ] },
      { num: 'III', h3: 'Students and working adults', sub: 'Language models and machine learning, understood rather than just used', courses: [
        { code: 'UTR / PRO / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'The mechanics of large language models, grounding them in trusted documents, and designing assistants whose limits are stated up front.' },
        { code: 'UTR / PRO / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'Machine learning from first methods to deep networks for adult learners, with evaluation given as much time as training.' },
        { code: 'UTR / PRO / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Python from zero to advanced at an adult pace, a solid base for anyone moving towards AI from another field.' },
        { code: 'UTR / PRO / 04', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'For people who do not code: spreadsheets, reporting tools and AI assistants, used with a clear view of what each one can be trusted with.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'A timetable that crosses four and a half hours',
    lede: 'India does not use summer time, so the gap to Utrecht is four and a half hours in the Dutch winter and three and a half from late March to late October. Late afternoon and the weekend therefore fit both sides easily; a weekday evening depends on the teacher. The recurring time is chosen together at the free lesson.',
    slots: [
      { time: 'Late afternoon', l: 'After school in Utrecht, evening for the teacher. Popular with primary pupils and the lower years of secondary school.' },
      { time: 'Evening', l: 'Utrecht evenings by agreement, for older pupils, university students and people coming home from work.' },
      { time: 'Weekend', l: 'Saturday and Sunday, any reasonable Utrecht hour. Usually the choice of adults and families with full weeks.' }
    ],
    cells: [
      { h3: 'The free lesson', p: 'Not a sales conversation but a lesson: the learner works on something real and the teacher sees how they think, which settles the starting rung.' },
      { h3: 'Small groups, one level', p: 'Five to ten learners from several countries who can already do the same things, so no one in Utrecht waits for others or races to keep up.' },
      { h3: 'Private tuition too', p: 'For students with changing timetables, adults with a specific goal, and the Copilot Studio courses, taught only one to one.' },
      { h3: 'Work visible live', p: 'The teacher follows the learner\'s screen as code is written and questions are answered, so confusion never gets a week to settle.' },
      { h3: 'English, Dutch where it belongs', p: 'All teaching is in English. Words like groep, brugklas, havo and vwo stay Dutch, the way Utrecht families say them.' },
      { h3: 'A repository that grows', p: 'The code from each lesson lands in the learner\'s own GitHub repository, next to a short note on what the program can and cannot do.' }
    ]
  },

  projectsH2: 'Programs our students built and published',
  projectsLede: 'Four live projects, open to anyone. Try them, ask them awkward questions, see where they break; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google word for word. Nobody at Modern Age Coders writes, edits or rewards them.',

  fees: {
    h2: 'Two prices, both in dollars',
    lede: 'Billed each month in US dollars at the rate we use for every country outside India. Utrecht pays nothing extra, there is no registration fee, and nobody signs up for a year. The Copilot Studio courses exist only as private lessons, so they use the private rate.',
    free: ['A proper lesson, not a pitch', 'Decides the starting rung', 'Nothing to pay, no card'],
    group: ['Five to ten learners who match in level', 'The same teacher, live each time', 'Code reviewed every week', 'A certificate at the end'],
    one: ['Just the learner and a teacher', 'Content and speed set by the goal', 'Required for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from Utrecht',
    h2: 'What Utrecht learners and parents ask before starting',
    items: [
      { q: 'Is this connected with Utrecht University?', a: 'No. We borrow the idea that AI is best understood through programming, philosophy, psychology and linguistics from the way the university describes its own bachelor, and we quote its public pages. We have no relationship with the university, and our classes do not count towards its degree.' },
      { q: 'The university teaches AI in Dutch. Why are your classes in English?', a: 'Because the programming languages, libraries, documentation and most AI tools are in English, and our groups bring together learners from several countries. Dutch school terms are kept as they are.' },
      { q: 'What is ELIZA, and why build one?', a: 'A conversation program written by Joseph Weizenbaum at MIT between 1964 and 1967. Its DOCTOR script imitated a psychotherapist using simple pattern matching, yet some users felt understood by it. Building a small version shows a learner exactly how little can lie behind a convincing reply.' },
      { q: 'What is the imitation game?', a: 'The test Alan Turing proposed in his 1950 paper Computing Machinery and Intelligence: an interrogator, reading only typed answers, tries to tell a machine from a person. Turing used it to replace the vaguer question of whether machines can think.' },
      { q: 'My child loves languages more than maths. Is AI for them?', a: 'Very possibly. Language is at the centre of today\'s AI, and the question of what a program does with words is a linguist\'s question as much as a programmer\'s. The coding still has to be learned, and we start it gently.' },
      { q: 'I use AI tools at work. What should I study?', a: 'Usually the generative AI course or the analytics course for non-programmers, depending on whether you want to build or to use. Both include the habit of asking how a tool works and what it cannot be trusted with.' },
      { q: 'At what age can a child start?', a: 'Around groep 5 with blocks and games, and from groep 6 to 8 with typed Python. The first talking program usually comes within a few months.' },
      { q: 'What does it cost?', a: 'Group classes cost USD 100 a month and private lessons USD 150 a month, billed in US dollars with no joining fee and no yearly contract. The first lesson is free.' },
      { q: 'Where are the teachers based?', a: 'In India. They teach live over video, four and a half hours ahead of Utrecht in winter and three and a half in summer, which is why late afternoons and weekends are easiest to arrange.' },
      { q: 'What happens once I have sent the form?', a: 'Someone rings you back at a Dutch hour to arrange the free lesson. Money only comes into it later, after the family has seen the lesson and chosen to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Further reading for Utrecht',
    lede: 'Other pages that cover what this one leaves out.',
    items: [
      { href: '/coding-classes-in-utrecht', label: 'Coding classes in Utrecht', p: 'Programming for every age in the city, with its schools and neighbourhoods.' },
      { href: '/coding-classes-in-utrecht-province', label: 'Coding classes in the province of Utrecht', p: 'From Amersfoort to Veenendaal, every municipality around the city.' },
      { href: '/coding-classes-in-amersfoort', label: 'Coding classes in Amersfoort', p: 'The province\'s second city, with a page of its own.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national view: how few Dutch schools offer informatica, and what the country is building.' },
      { href: '/ai-and-python-academy-the-hague', label: 'AI and Python Academy, The Hague', p: 'Why a model\'s mistakes must be counted group by group.' },
      { href: '/learn-to-build-ai', label: 'Learn to Build AI', p: 'The argument for building AI systems rather than only operating them.' }
    ]
  },

  start: {
    h2: 'Start with a free lesson',
    lede: 'Send us a phone number and a member of the team will call at a Dutch hour to fix a time. The lesson itself is taught by a teacher on real material, and it ends with the starting rung decided, the choice that matters most.',
    readFirst: 'Rather read first? Browse the <a class="ag-inline-link" href="/courses">courses</a>, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see why we teach people to build AI at <a class="ag-inline-link" href="/learn-to-build-ai">Learn to Build AI</a>.',
    note: 'From a Dutch phone, WhatsApp costs nothing and is the fastest way to reach us. The number is Indian, and we have no office, address or premises in Utrecht or anywhere else in the Netherlands.',
    formNote: 'No card, no obligation, just one call to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Utrecht', links: [
        { href: '/coding-classes-in-utrecht', label: 'Coding classes in Utrecht' },
        { href: '/coding-classes-in-utrecht-province', label: 'Province of Utrecht' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' }
      ] },
      { h4: 'The track', links: [
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/learn-to-build-ai', label: 'Learn to Build AI' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching Utrecht on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-aut .ag-hero-grid { gap: clamp(1.1rem, 3vw, 2.6rem); }
.ag-root.ag-aut .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-aut .ag-capsule { border-left-width: 5px; }
.ag-root.ag-aut .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-aut .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-aut .ag-table caption { text-align: left; }
.ag-root.ag-aut .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-aut .ag-slots { gap: 1.3rem; }
`,

  mustMention: ['Kunstmatige intelligentie', 'filosofie, psychologie en taalkunde', 'Domkerk', 'Incognito', '135 EC', 'profileringsruimte', 'Computing Machinery and Intelligence', 'imitation game', 'Joseph Weizenbaum', 'DOCTOR', 'Rogerian', 'Computer Power and Human Reason']
};
